var fh = Object.defineProperty;
var ph = (r, l, i) => l in r ? fh(r, l, { enumerable: !0, configurable: !0, writable: !0, value: i }) : r[l] = i;
var En = (r, l, i) => ph(r, typeof l != "symbol" ? l + "" : l, i);
function Sf(r) {
  return r && r.__esModule && Object.prototype.hasOwnProperty.call(r, "default") ? r.default : r;
}
var ii = { exports: {} }, Es = {}, ui = { exports: {} }, fe = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ud;
function mh() {
  if (Ud) return fe;
  Ud = 1;
  var r = Symbol.for("react.element"), l = Symbol.for("react.portal"), i = Symbol.for("react.fragment"), c = Symbol.for("react.strict_mode"), d = Symbol.for("react.profiler"), f = Symbol.for("react.provider"), m = Symbol.for("react.context"), h = Symbol.for("react.forward_ref"), g = Symbol.for("react.suspense"), x = Symbol.for("react.memo"), y = Symbol.for("react.lazy"), _ = Symbol.iterator;
  function S(R) {
    return R === null || typeof R != "object" ? null : (R = _ && R[_] || R["@@iterator"], typeof R == "function" ? R : null);
  }
  var C = { isMounted: function() {
    return !1;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, P = Object.assign, N = {};
  function E(R, F, ie) {
    this.props = R, this.context = F, this.refs = N, this.updater = ie || C;
  }
  E.prototype.isReactComponent = {}, E.prototype.setState = function(R, F) {
    if (typeof R != "object" && typeof R != "function" && R != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, R, F, "setState");
  }, E.prototype.forceUpdate = function(R) {
    this.updater.enqueueForceUpdate(this, R, "forceUpdate");
  };
  function A() {
  }
  A.prototype = E.prototype;
  function O(R, F, ie) {
    this.props = R, this.context = F, this.refs = N, this.updater = ie || C;
  }
  var I = O.prototype = new A();
  I.constructor = O, P(I, E.prototype), I.isPureReactComponent = !0;
  var z = Array.isArray, W = Object.prototype.hasOwnProperty, L = { current: null }, J = { key: !0, ref: !0, __self: !0, __source: !0 };
  function B(R, F, ie) {
    var ce, ve = {}, ye = null, Se = null;
    if (F != null) for (ce in F.ref !== void 0 && (Se = F.ref), F.key !== void 0 && (ye = "" + F.key), F) W.call(F, ce) && !J.hasOwnProperty(ce) && (ve[ce] = F[ce]);
    var xe = arguments.length - 2;
    if (xe === 1) ve.children = ie;
    else if (1 < xe) {
      for (var je = Array(xe), nt = 0; nt < xe; nt++) je[nt] = arguments[nt + 2];
      ve.children = je;
    }
    if (R && R.defaultProps) for (ce in xe = R.defaultProps, xe) ve[ce] === void 0 && (ve[ce] = xe[ce]);
    return { $$typeof: r, type: R, key: ye, ref: Se, props: ve, _owner: L.current };
  }
  function K(R, F) {
    return { $$typeof: r, type: R.type, key: F, ref: R.ref, props: R.props, _owner: R._owner };
  }
  function pe(R) {
    return typeof R == "object" && R !== null && R.$$typeof === r;
  }
  function de(R) {
    var F = { "=": "=0", ":": "=2" };
    return "$" + R.replace(/[=:]/g, function(ie) {
      return F[ie];
    });
  }
  var Te = /\/+/g;
  function Ee(R, F) {
    return typeof R == "object" && R !== null && R.key != null ? de("" + R.key) : F.toString(36);
  }
  function he(R, F, ie, ce, ve) {
    var ye = typeof R;
    (ye === "undefined" || ye === "boolean") && (R = null);
    var Se = !1;
    if (R === null) Se = !0;
    else switch (ye) {
      case "string":
      case "number":
        Se = !0;
        break;
      case "object":
        switch (R.$$typeof) {
          case r:
          case l:
            Se = !0;
        }
    }
    if (Se) return Se = R, ve = ve(Se), R = ce === "" ? "." + Ee(Se, 0) : ce, z(ve) ? (ie = "", R != null && (ie = R.replace(Te, "$&/") + "/"), he(ve, F, ie, "", function(nt) {
      return nt;
    })) : ve != null && (pe(ve) && (ve = K(ve, ie + (!ve.key || Se && Se.key === ve.key ? "" : ("" + ve.key).replace(Te, "$&/") + "/") + R)), F.push(ve)), 1;
    if (Se = 0, ce = ce === "" ? "." : ce + ":", z(R)) for (var xe = 0; xe < R.length; xe++) {
      ye = R[xe];
      var je = ce + Ee(ye, xe);
      Se += he(ye, F, ie, je, ve);
    }
    else if (je = S(R), typeof je == "function") for (R = je.call(R), xe = 0; !(ye = R.next()).done; ) ye = ye.value, je = ce + Ee(ye, xe++), Se += he(ye, F, ie, je, ve);
    else if (ye === "object") throw F = String(R), Error("Objects are not valid as a React child (found: " + (F === "[object Object]" ? "object with keys {" + Object.keys(R).join(", ") + "}" : F) + "). If you meant to render a collection of children, use an array instead.");
    return Se;
  }
  function ge(R, F, ie) {
    if (R == null) return R;
    var ce = [], ve = 0;
    return he(R, ce, "", "", function(ye) {
      return F.call(ie, ye, ve++);
    }), ce;
  }
  function Ce(R) {
    if (R._status === -1) {
      var F = R._result;
      F = F(), F.then(function(ie) {
        (R._status === 0 || R._status === -1) && (R._status = 1, R._result = ie);
      }, function(ie) {
        (R._status === 0 || R._status === -1) && (R._status = 2, R._result = ie);
      }), R._status === -1 && (R._status = 0, R._result = F);
    }
    if (R._status === 1) return R._result.default;
    throw R._result;
  }
  var H = { current: null }, D = { transition: null }, X = { ReactCurrentDispatcher: H, ReactCurrentBatchConfig: D, ReactCurrentOwner: L };
  function Y() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  return fe.Children = { map: ge, forEach: function(R, F, ie) {
    ge(R, function() {
      F.apply(this, arguments);
    }, ie);
  }, count: function(R) {
    var F = 0;
    return ge(R, function() {
      F++;
    }), F;
  }, toArray: function(R) {
    return ge(R, function(F) {
      return F;
    }) || [];
  }, only: function(R) {
    if (!pe(R)) throw Error("React.Children.only expected to receive a single React element child.");
    return R;
  } }, fe.Component = E, fe.Fragment = i, fe.Profiler = d, fe.PureComponent = O, fe.StrictMode = c, fe.Suspense = g, fe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = X, fe.act = Y, fe.cloneElement = function(R, F, ie) {
    if (R == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + R + ".");
    var ce = P({}, R.props), ve = R.key, ye = R.ref, Se = R._owner;
    if (F != null) {
      if (F.ref !== void 0 && (ye = F.ref, Se = L.current), F.key !== void 0 && (ve = "" + F.key), R.type && R.type.defaultProps) var xe = R.type.defaultProps;
      for (je in F) W.call(F, je) && !J.hasOwnProperty(je) && (ce[je] = F[je] === void 0 && xe !== void 0 ? xe[je] : F[je]);
    }
    var je = arguments.length - 2;
    if (je === 1) ce.children = ie;
    else if (1 < je) {
      xe = Array(je);
      for (var nt = 0; nt < je; nt++) xe[nt] = arguments[nt + 2];
      ce.children = xe;
    }
    return { $$typeof: r, type: R.type, key: ve, ref: ye, props: ce, _owner: Se };
  }, fe.createContext = function(R) {
    return R = { $$typeof: m, _currentValue: R, _currentValue2: R, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, R.Provider = { $$typeof: f, _context: R }, R.Consumer = R;
  }, fe.createElement = B, fe.createFactory = function(R) {
    var F = B.bind(null, R);
    return F.type = R, F;
  }, fe.createRef = function() {
    return { current: null };
  }, fe.forwardRef = function(R) {
    return { $$typeof: h, render: R };
  }, fe.isValidElement = pe, fe.lazy = function(R) {
    return { $$typeof: y, _payload: { _status: -1, _result: R }, _init: Ce };
  }, fe.memo = function(R, F) {
    return { $$typeof: x, type: R, compare: F === void 0 ? null : F };
  }, fe.startTransition = function(R) {
    var F = D.transition;
    D.transition = {};
    try {
      R();
    } finally {
      D.transition = F;
    }
  }, fe.unstable_act = Y, fe.useCallback = function(R, F) {
    return H.current.useCallback(R, F);
  }, fe.useContext = function(R) {
    return H.current.useContext(R);
  }, fe.useDebugValue = function() {
  }, fe.useDeferredValue = function(R) {
    return H.current.useDeferredValue(R);
  }, fe.useEffect = function(R, F) {
    return H.current.useEffect(R, F);
  }, fe.useId = function() {
    return H.current.useId();
  }, fe.useImperativeHandle = function(R, F, ie) {
    return H.current.useImperativeHandle(R, F, ie);
  }, fe.useInsertionEffect = function(R, F) {
    return H.current.useInsertionEffect(R, F);
  }, fe.useLayoutEffect = function(R, F) {
    return H.current.useLayoutEffect(R, F);
  }, fe.useMemo = function(R, F) {
    return H.current.useMemo(R, F);
  }, fe.useReducer = function(R, F, ie) {
    return H.current.useReducer(R, F, ie);
  }, fe.useRef = function(R) {
    return H.current.useRef(R);
  }, fe.useState = function(R) {
    return H.current.useState(R);
  }, fe.useSyncExternalStore = function(R, F, ie) {
    return H.current.useSyncExternalStore(R, F, ie);
  }, fe.useTransition = function() {
    return H.current.useTransition();
  }, fe.version = "18.3.1", fe;
}
var Bd;
function $i() {
  return Bd || (Bd = 1, ui.exports = mh()), ui.exports;
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
var Wd;
function hh() {
  if (Wd) return Es;
  Wd = 1;
  var r = $i(), l = Symbol.for("react.element"), i = Symbol.for("react.fragment"), c = Object.prototype.hasOwnProperty, d = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, f = { key: !0, ref: !0, __self: !0, __source: !0 };
  function m(h, g, x) {
    var y, _ = {}, S = null, C = null;
    x !== void 0 && (S = "" + x), g.key !== void 0 && (S = "" + g.key), g.ref !== void 0 && (C = g.ref);
    for (y in g) c.call(g, y) && !f.hasOwnProperty(y) && (_[y] = g[y]);
    if (h && h.defaultProps) for (y in g = h.defaultProps, g) _[y] === void 0 && (_[y] = g[y]);
    return { $$typeof: l, type: h, key: S, ref: C, props: _, _owner: d.current };
  }
  return Es.Fragment = i, Es.jsx = m, Es.jsxs = m, Es;
}
var Vd;
function vh() {
  return Vd || (Vd = 1, ii.exports = hh()), ii.exports;
}
var a = vh(), v = $i();
const kf = /* @__PURE__ */ Sf(v);
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
var qd;
function yh() {
  return qd || (qd = 1, (function(r) {
    function l(D, X) {
      var Y = D.length;
      D.push(X);
      e: for (; 0 < Y; ) {
        var R = Y - 1 >>> 1, F = D[R];
        if (0 < d(F, X)) D[R] = X, D[Y] = F, Y = R;
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
        e: for (var R = 0, F = D.length, ie = F >>> 1; R < ie; ) {
          var ce = 2 * (R + 1) - 1, ve = D[ce], ye = ce + 1, Se = D[ye];
          if (0 > d(ve, Y)) ye < F && 0 > d(Se, ve) ? (D[R] = Se, D[ye] = Y, R = ye) : (D[R] = ve, D[ce] = Y, R = ce);
          else if (ye < F && 0 > d(Se, Y)) D[R] = Se, D[ye] = Y, R = ye;
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
    var g = [], x = [], y = 1, _ = null, S = 3, C = !1, P = !1, N = !1, E = typeof setTimeout == "function" ? setTimeout : null, A = typeof clearTimeout == "function" ? clearTimeout : null, O = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function I(D) {
      for (var X = i(x); X !== null; ) {
        if (X.callback === null) c(x);
        else if (X.startTime <= D) c(x), X.sortIndex = X.expirationTime, l(g, X);
        else break;
        X = i(x);
      }
    }
    function z(D) {
      if (N = !1, I(D), !P) if (i(g) !== null) P = !0, Ce(W);
      else {
        var X = i(x);
        X !== null && H(z, X.startTime - D);
      }
    }
    function W(D, X) {
      P = !1, N && (N = !1, A(B), B = -1), C = !0;
      var Y = S;
      try {
        for (I(X), _ = i(g); _ !== null && (!(_.expirationTime > X) || D && !de()); ) {
          var R = _.callback;
          if (typeof R == "function") {
            _.callback = null, S = _.priorityLevel;
            var F = R(_.expirationTime <= X);
            X = r.unstable_now(), typeof F == "function" ? _.callback = F : _ === i(g) && c(g), I(X);
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
    var L = !1, J = null, B = -1, K = 5, pe = -1;
    function de() {
      return !(r.unstable_now() - pe < K);
    }
    function Te() {
      if (J !== null) {
        var D = r.unstable_now();
        pe = D;
        var X = !0;
        try {
          X = J(!0, D);
        } finally {
          X ? Ee() : (L = !1, J = null);
        }
      } else L = !1;
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
      E(Te, 0);
    };
    function Ce(D) {
      J = D, L || (L = !0, Ee());
    }
    function H(D, X) {
      B = E(function() {
        D(r.unstable_now());
      }, X);
    }
    r.unstable_IdlePriority = 5, r.unstable_ImmediatePriority = 1, r.unstable_LowPriority = 4, r.unstable_NormalPriority = 3, r.unstable_Profiling = null, r.unstable_UserBlockingPriority = 2, r.unstable_cancelCallback = function(D) {
      D.callback = null;
    }, r.unstable_continueExecution = function() {
      P || C || (P = !0, Ce(W));
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
      var R = r.unstable_now();
      switch (typeof Y == "object" && Y !== null ? (Y = Y.delay, Y = typeof Y == "number" && 0 < Y ? R + Y : R) : Y = R, D) {
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
      return F = Y + F, D = { id: y++, callback: X, priorityLevel: D, startTime: Y, expirationTime: F, sortIndex: -1 }, Y > R ? (D.sortIndex = Y, l(x, D), i(g) === null && D === i(x) && (N ? (A(B), B = -1) : N = !0, H(z, Y - R))) : (D.sortIndex = F, l(g, D), P || C || (P = !0, Ce(W))), D;
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
var Qd;
function gh() {
  return Qd || (Qd = 1, di.exports = yh()), di.exports;
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
function _h() {
  if (Kd) return dt;
  Kd = 1;
  var r = $i(), l = gh();
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
  function P(e, t, n, s) {
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
  function N(e, t, n, s, o, u, p) {
    this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = s, this.attributeNamespace = o, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = u, this.removeEmptyString = p;
  }
  var E = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
    E[e] = new N(e, 0, !1, e, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
    var t = e[0];
    E[t] = new N(t, 1, !1, e[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
    E[e] = new N(e, 2, !1, e.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
    E[e] = new N(e, 2, !1, e, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
    E[e] = new N(e, 3, !1, e.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(e) {
    E[e] = new N(e, 3, !0, e, null, !1, !1);
  }), ["capture", "download"].forEach(function(e) {
    E[e] = new N(e, 4, !1, e, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(e) {
    E[e] = new N(e, 6, !1, e, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(e) {
    E[e] = new N(e, 5, !1, e.toLowerCase(), null, !1, !1);
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
    E[t] = new N(t, 1, !1, e, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
    var t = e.replace(A, O);
    E[t] = new N(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
    var t = e.replace(A, O);
    E[t] = new N(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(e) {
    E[e] = new N(e, 1, !1, e.toLowerCase(), null, !1, !1);
  }), E.xlinkHref = new N("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(e) {
    E[e] = new N(e, 1, !1, e.toLowerCase(), null, !0, !0);
  });
  function I(e, t, n, s) {
    var o = E.hasOwnProperty(t) ? E[t] : null;
    (o !== null ? o.type !== 0 : s || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (P(t, n, o, s) && (n = null), s || o === null ? S(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : o.mustUseProperty ? e[o.propertyName] = n === null ? o.type === 3 ? !1 : "" : n : (t = o.attributeName, s = o.attributeNamespace, n === null ? e.removeAttribute(t) : (o = o.type, n = o === 3 || o === 4 && n === !0 ? "" : "" + n, s ? e.setAttributeNS(s, t, n) : e.setAttribute(t, n))));
  }
  var z = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, W = Symbol.for("react.element"), L = Symbol.for("react.portal"), J = Symbol.for("react.fragment"), B = Symbol.for("react.strict_mode"), K = Symbol.for("react.profiler"), pe = Symbol.for("react.provider"), de = Symbol.for("react.context"), Te = Symbol.for("react.forward_ref"), Ee = Symbol.for("react.suspense"), he = Symbol.for("react.suspense_list"), ge = Symbol.for("react.memo"), Ce = Symbol.for("react.lazy"), H = Symbol.for("react.offscreen"), D = Symbol.iterator;
  function X(e) {
    return e === null || typeof e != "object" ? null : (e = D && e[D] || e["@@iterator"], typeof e == "function" ? e : null);
  }
  var Y = Object.assign, R;
  function F(e) {
    if (R === void 0) try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      R = t && t[1] || "";
    }
    return `
` + R + e;
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
        } catch (M) {
          var s = M;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (M) {
          s = M;
        }
        e.call(t.prototype);
      }
      else {
        try {
          throw Error();
        } catch (M) {
          s = M;
        }
        e();
      }
    } catch (M) {
      if (M && s && typeof M.stack == "string") {
        for (var o = M.stack.split(`
`), u = s.stack.split(`
`), p = o.length - 1, w = u.length - 1; 1 <= p && 0 <= w && o[p] !== u[w]; ) w--;
        for (; 1 <= p && 0 <= w; p--, w--) if (o[p] !== u[w]) {
          if (p !== 1 || w !== 1)
            do
              if (p--, w--, 0 > w || o[p] !== u[w]) {
                var j = `
` + o[p].replace(" at new ", " at ");
                return e.displayName && j.includes("<anonymous>") && (j = j.replace("<anonymous>", e.displayName)), j;
              }
            while (1 <= p && 0 <= w);
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
      case L:
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
      case pe:
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
  function Fr(e) {
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
  function hl(e, t) {
    var n = t.checked;
    return Y({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n ?? e._wrapperState.initialChecked });
  }
  function Yi(e, t) {
    var n = t.defaultValue == null ? "" : t.defaultValue, s = t.checked != null ? t.checked : t.defaultChecked;
    n = xe(t.value != null ? t.value : n), e._wrapperState = { initialChecked: s, initialValue: n, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
  }
  function Gi(e, t) {
    t = t.checked, t != null && I(e, "checked", t, !1);
  }
  function vl(e, t) {
    Gi(e, t);
    var n = xe(t.value), s = t.type;
    if (n != null) s === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
    else if (s === "submit" || s === "reset") {
      e.removeAttribute("value");
      return;
    }
    t.hasOwnProperty("value") ? yl(e, t.type, n) : t.hasOwnProperty("defaultValue") && yl(e, t.type, xe(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
  }
  function Ji(e, t, n) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
      var s = t.type;
      if (!(s !== "submit" && s !== "reset" || t.value !== void 0 && t.value !== null)) return;
      t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t;
    }
    n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n);
  }
  function yl(e, t, n) {
    (t !== "number" || Pn(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
  }
  var Hr = Array.isArray;
  function nr(e, t, n, s) {
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
  function gl(e, t) {
    if (t.dangerouslySetInnerHTML != null) throw Error(i(91));
    return Y({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
  }
  function Xi(e, t) {
    var n = t.value;
    if (n == null) {
      if (n = t.children, t = t.defaultValue, n != null) {
        if (t != null) throw Error(i(92));
        if (Hr(n)) {
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
  function _l(e, t) {
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
  function Ur(e, t) {
    if (t) {
      var n = e.firstChild;
      if (n && n === e.lastChild && n.nodeType === 3) {
        n.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var Br = {
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
  }, vp = ["Webkit", "ms", "Moz", "O"];
  Object.keys(Br).forEach(function(e) {
    vp.forEach(function(t) {
      t = t + e.charAt(0).toUpperCase() + e.substring(1), Br[t] = Br[e];
    });
  });
  function ru(e, t, n) {
    return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || Br.hasOwnProperty(e) && Br[e] ? ("" + t).trim() : t + "px";
  }
  function su(e, t) {
    e = e.style;
    for (var n in t) if (t.hasOwnProperty(n)) {
      var s = n.indexOf("--") === 0, o = ru(n, t[n], s);
      n === "float" && (n = "cssFloat"), s ? e.setProperty(n, o) : e[n] = o;
    }
  }
  var yp = Y({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
  function xl(e, t) {
    if (t) {
      if (yp[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(i(137, e));
      if (t.dangerouslySetInnerHTML != null) {
        if (t.children != null) throw Error(i(60));
        if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(i(61));
      }
      if (t.style != null && typeof t.style != "object") throw Error(i(62));
    }
  }
  function wl(e, t) {
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
  var Sl = null;
  function kl(e) {
    return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
  }
  var Cl = null, rr = null, sr = null;
  function ou(e) {
    if (e = ds(e)) {
      if (typeof Cl != "function") throw Error(i(280));
      var t = e.stateNode;
      t && (t = ao(t), Cl(e.stateNode, e.type, t));
    }
  }
  function lu(e) {
    rr ? sr ? sr.push(e) : sr = [e] : rr = e;
  }
  function au() {
    if (rr) {
      var e = rr, t = sr;
      if (sr = rr = null, ou(e), t) for (e = 0; e < t.length; e++) ou(t[e]);
    }
  }
  function iu(e, t) {
    return e(t);
  }
  function uu() {
  }
  var jl = !1;
  function cu(e, t, n) {
    if (jl) return e(t, n);
    jl = !0;
    try {
      return iu(e, t, n);
    } finally {
      jl = !1, (rr !== null || sr !== null) && (uu(), au());
    }
  }
  function Wr(e, t) {
    var n = e.stateNode;
    if (n === null) return null;
    var s = ao(n);
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
  var El = !1;
  if (h) try {
    var Vr = {};
    Object.defineProperty(Vr, "passive", { get: function() {
      El = !0;
    } }), window.addEventListener("test", Vr, Vr), window.removeEventListener("test", Vr, Vr);
  } catch {
    El = !1;
  }
  function gp(e, t, n, s, o, u, p, w, j) {
    var M = Array.prototype.slice.call(arguments, 3);
    try {
      t.apply(n, M);
    } catch (V) {
      this.onError(V);
    }
  }
  var qr = !1, Os = null, Fs = !1, Nl = null, _p = { onError: function(e) {
    qr = !0, Os = e;
  } };
  function xp(e, t, n, s, o, u, p, w, j) {
    qr = !1, Os = null, gp.apply(_p, arguments);
  }
  function wp(e, t, n, s, o, u, p, w, j) {
    if (xp.apply(this, arguments), qr) {
      if (qr) {
        var M = Os;
        qr = !1, Os = null;
      } else throw Error(i(198));
      Fs || (Fs = !0, Nl = M);
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
  function Sp(e) {
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
        for (var p = !1, w = o.child; w; ) {
          if (w === n) {
            p = !0, n = o, s = u;
            break;
          }
          if (w === s) {
            p = !0, s = o, n = u;
            break;
          }
          w = w.sibling;
        }
        if (!p) {
          for (w = u.child; w; ) {
            if (w === n) {
              p = !0, n = u, s = o;
              break;
            }
            if (w === s) {
              p = !0, s = u, n = o;
              break;
            }
            w = w.sibling;
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
    return e = Sp(e), e !== null ? mu(e) : null;
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
  var hu = l.unstable_scheduleCallback, vu = l.unstable_cancelCallback, kp = l.unstable_shouldYield, Cp = l.unstable_requestPaint, De = l.unstable_now, jp = l.unstable_getCurrentPriorityLevel, Tl = l.unstable_ImmediatePriority, yu = l.unstable_UserBlockingPriority, Hs = l.unstable_NormalPriority, Ep = l.unstable_LowPriority, gu = l.unstable_IdlePriority, Us = null, Ft = null;
  function Np(e) {
    if (Ft && typeof Ft.onCommitFiberRoot == "function") try {
      Ft.onCommitFiberRoot(Us, e, void 0, (e.current.flags & 128) === 128);
    } catch {
    }
  }
  var Rt = Math.clz32 ? Math.clz32 : Pp, Tp = Math.log, Rp = Math.LN2;
  function Pp(e) {
    return e >>>= 0, e === 0 ? 32 : 31 - (Tp(e) / Rp | 0) | 0;
  }
  var Bs = 64, Ws = 4194304;
  function Qr(e) {
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
      var w = p & ~o;
      w !== 0 ? s = Qr(w) : (u &= p, u !== 0 && (s = Qr(u)));
    } else p = n & ~o, p !== 0 ? s = Qr(p) : u !== 0 && (s = Qr(u));
    if (s === 0) return 0;
    if (t !== 0 && t !== s && (t & o) === 0 && (o = s & -s, u = t & -t, o >= u || o === 16 && (u & 4194240) !== 0)) return t;
    if ((s & 4) !== 0 && (s |= n & 16), t = e.entangledLanes, t !== 0) for (e = e.entanglements, t &= s; 0 < t; ) n = 31 - Rt(t), o = 1 << n, s |= e[n], t &= ~o;
    return s;
  }
  function Ap(e, t) {
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
  function $p(e, t) {
    for (var n = e.suspendedLanes, s = e.pingedLanes, o = e.expirationTimes, u = e.pendingLanes; 0 < u; ) {
      var p = 31 - Rt(u), w = 1 << p, j = o[p];
      j === -1 ? ((w & n) === 0 || (w & s) !== 0) && (o[p] = Ap(w, t)) : j <= t && (e.expiredLanes |= w), u &= ~w;
    }
  }
  function Rl(e) {
    return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
  }
  function _u() {
    var e = Bs;
    return Bs <<= 1, (Bs & 4194240) === 0 && (Bs = 64), e;
  }
  function Pl(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t;
  }
  function Kr(e, t, n) {
    e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - Rt(t), e[t] = n;
  }
  function bp(e, t) {
    var n = e.pendingLanes & ~t;
    e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
    var s = e.eventTimes;
    for (e = e.expirationTimes; 0 < n; ) {
      var o = 31 - Rt(n), u = 1 << o;
      t[o] = 0, s[o] = -1, e[o] = -1, n &= ~u;
    }
  }
  function Al(e, t) {
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
  var wu, $l, Su, ku, Cu, bl = !1, qs = [], ln = null, an = null, un = null, Yr = /* @__PURE__ */ new Map(), Gr = /* @__PURE__ */ new Map(), cn = [], Lp = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
  function ju(e, t) {
    switch (e) {
      case "focusin":
      case "focusout":
        ln = null;
        break;
      case "dragenter":
      case "dragleave":
        an = null;
        break;
      case "mouseover":
      case "mouseout":
        un = null;
        break;
      case "pointerover":
      case "pointerout":
        Yr.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Gr.delete(t.pointerId);
    }
  }
  function Jr(e, t, n, s, o, u) {
    return e === null || e.nativeEvent !== u ? (e = { blockedOn: t, domEventName: n, eventSystemFlags: s, nativeEvent: u, targetContainers: [o] }, t !== null && (t = ds(t), t !== null && $l(t)), e) : (e.eventSystemFlags |= s, t = e.targetContainers, o !== null && t.indexOf(o) === -1 && t.push(o), e);
  }
  function Mp(e, t, n, s, o) {
    switch (t) {
      case "focusin":
        return ln = Jr(ln, e, t, n, s, o), !0;
      case "dragenter":
        return an = Jr(an, e, t, n, s, o), !0;
      case "mouseover":
        return un = Jr(un, e, t, n, s, o), !0;
      case "pointerover":
        var u = o.pointerId;
        return Yr.set(u, Jr(Yr.get(u) || null, e, t, n, s, o)), !0;
      case "gotpointercapture":
        return u = o.pointerId, Gr.set(u, Jr(Gr.get(u) || null, e, t, n, s, o)), !0;
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
      var n = Ml(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
      if (n === null) {
        n = e.nativeEvent;
        var s = new n.constructor(n.type, n);
        Sl = s, n.target.dispatchEvent(s), Sl = null;
      } else return t = ds(n), t !== null && $l(t), e.blockedOn = n, !1;
      t.shift();
    }
    return !0;
  }
  function Nu(e, t, n) {
    Qs(e) && n.delete(t);
  }
  function Ip() {
    bl = !1, ln !== null && Qs(ln) && (ln = null), an !== null && Qs(an) && (an = null), un !== null && Qs(un) && (un = null), Yr.forEach(Nu), Gr.forEach(Nu);
  }
  function Xr(e, t) {
    e.blockedOn === t && (e.blockedOn = null, bl || (bl = !0, l.unstable_scheduleCallback(l.unstable_NormalPriority, Ip)));
  }
  function Zr(e) {
    function t(o) {
      return Xr(o, e);
    }
    if (0 < qs.length) {
      Xr(qs[0], e);
      for (var n = 1; n < qs.length; n++) {
        var s = qs[n];
        s.blockedOn === e && (s.blockedOn = null);
      }
    }
    for (ln !== null && Xr(ln, e), an !== null && Xr(an, e), un !== null && Xr(un, e), Yr.forEach(t), Gr.forEach(t), n = 0; n < cn.length; n++) s = cn[n], s.blockedOn === e && (s.blockedOn = null);
    for (; 0 < cn.length && (n = cn[0], n.blockedOn === null); ) Eu(n), n.blockedOn === null && cn.shift();
  }
  var or = z.ReactCurrentBatchConfig, Ks = !0;
  function Dp(e, t, n, s) {
    var o = ke, u = or.transition;
    or.transition = null;
    try {
      ke = 1, Ll(e, t, n, s);
    } finally {
      ke = o, or.transition = u;
    }
  }
  function zp(e, t, n, s) {
    var o = ke, u = or.transition;
    or.transition = null;
    try {
      ke = 4, Ll(e, t, n, s);
    } finally {
      ke = o, or.transition = u;
    }
  }
  function Ll(e, t, n, s) {
    if (Ks) {
      var o = Ml(e, t, n, s);
      if (o === null) Xl(e, t, s, Ys, n), ju(e, s);
      else if (Mp(o, e, t, n, s)) s.stopPropagation();
      else if (ju(e, s), t & 4 && -1 < Lp.indexOf(e)) {
        for (; o !== null; ) {
          var u = ds(o);
          if (u !== null && wu(u), u = Ml(e, t, n, s), u === null && Xl(e, t, s, Ys, n), u === o) break;
          o = u;
        }
        o !== null && s.stopPropagation();
      } else Xl(e, t, s, null, n);
    }
  }
  var Ys = null;
  function Ml(e, t, n, s) {
    if (Ys = null, e = kl(s), e = $n(e), e !== null) if (t = An(e), t === null) e = null;
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
        switch (jp()) {
          case Tl:
            return 1;
          case yu:
            return 4;
          case Hs:
          case Ep:
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
  var dn = null, Il = null, Gs = null;
  function Ru() {
    if (Gs) return Gs;
    var e, t = Il, n = t.length, s, o = "value" in dn ? dn.value : dn.textContent, u = o.length;
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
  function mt(e) {
    function t(n, s, o, u, p) {
      this._reactName = n, this._targetInst = o, this.type = s, this.nativeEvent = u, this.target = p, this.currentTarget = null;
      for (var w in e) e.hasOwnProperty(w) && (n = e[w], this[w] = n ? n(u) : u[w]);
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
  }, defaultPrevented: 0, isTrusted: 0 }, Dl = mt(lr), es = Y({}, lr, { view: 0, detail: 0 }), Op = mt(es), zl, Ol, ts, Zs = Y({}, es, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: Hl, button: 0, buttons: 0, relatedTarget: function(e) {
    return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
  }, movementX: function(e) {
    return "movementX" in e ? e.movementX : (e !== ts && (ts && e.type === "mousemove" ? (zl = e.screenX - ts.screenX, Ol = e.screenY - ts.screenY) : Ol = zl = 0, ts = e), zl);
  }, movementY: function(e) {
    return "movementY" in e ? e.movementY : Ol;
  } }), Au = mt(Zs), Fp = Y({}, Zs, { dataTransfer: 0 }), Hp = mt(Fp), Up = Y({}, es, { relatedTarget: 0 }), Fl = mt(Up), Bp = Y({}, lr, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), Wp = mt(Bp), Vp = Y({}, lr, { clipboardData: function(e) {
    return "clipboardData" in e ? e.clipboardData : window.clipboardData;
  } }), qp = mt(Vp), Qp = Y({}, lr, { data: 0 }), $u = mt(Qp), Kp = {
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
  }, Yp = {
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
  }, Gp = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function Jp(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = Gp[e]) ? !!t[e] : !1;
  }
  function Hl() {
    return Jp;
  }
  var Xp = Y({}, es, { key: function(e) {
    if (e.key) {
      var t = Kp[e.key] || e.key;
      if (t !== "Unidentified") return t;
    }
    return e.type === "keypress" ? (e = Js(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? Yp[e.keyCode] || "Unidentified" : "";
  }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: Hl, charCode: function(e) {
    return e.type === "keypress" ? Js(e) : 0;
  }, keyCode: function(e) {
    return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
  }, which: function(e) {
    return e.type === "keypress" ? Js(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
  } }), Zp = mt(Xp), em = Y({}, Zs, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), bu = mt(em), tm = Y({}, es, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: Hl }), nm = mt(tm), rm = Y({}, lr, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), sm = mt(rm), om = Y({}, Zs, {
    deltaX: function(e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function(e) {
      return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), lm = mt(om), am = [9, 13, 27, 32], Ul = h && "CompositionEvent" in window, ns = null;
  h && "documentMode" in document && (ns = document.documentMode);
  var im = h && "TextEvent" in window && !ns, Lu = h && (!Ul || ns && 8 < ns && 11 >= ns), Mu = " ", Iu = !1;
  function Du(e, t) {
    switch (e) {
      case "keyup":
        return am.indexOf(t.keyCode) !== -1;
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
  var ar = !1;
  function um(e, t) {
    switch (e) {
      case "compositionend":
        return zu(t);
      case "keypress":
        return t.which !== 32 ? null : (Iu = !0, Mu);
      case "textInput":
        return e = t.data, e === Mu && Iu ? null : e;
      default:
        return null;
    }
  }
  function cm(e, t) {
    if (ar) return e === "compositionend" || !Ul && Du(e, t) ? (e = Ru(), Gs = Il = dn = null, ar = !1, e) : null;
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
  var dm = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
  function Ou(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!dm[e.type] : t === "textarea";
  }
  function Fu(e, t, n, s) {
    lu(s), t = so(t, "onChange"), 0 < t.length && (n = new Dl("onChange", "change", null, n, s), e.push({ event: n, listeners: t }));
  }
  var rs = null, ss = null;
  function fm(e) {
    sc(e, 0);
  }
  function eo(e) {
    var t = fr(e);
    if (Fr(t)) return e;
  }
  function pm(e, t) {
    if (e === "change") return t;
  }
  var Hu = !1;
  if (h) {
    var Bl;
    if (h) {
      var Wl = "oninput" in document;
      if (!Wl) {
        var Uu = document.createElement("div");
        Uu.setAttribute("oninput", "return;"), Wl = typeof Uu.oninput == "function";
      }
      Bl = Wl;
    } else Bl = !1;
    Hu = Bl && (!document.documentMode || 9 < document.documentMode);
  }
  function Bu() {
    rs && (rs.detachEvent("onpropertychange", Wu), ss = rs = null);
  }
  function Wu(e) {
    if (e.propertyName === "value" && eo(ss)) {
      var t = [];
      Fu(t, ss, e, kl(e)), cu(fm, t);
    }
  }
  function mm(e, t, n) {
    e === "focusin" ? (Bu(), rs = t, ss = n, rs.attachEvent("onpropertychange", Wu)) : e === "focusout" && Bu();
  }
  function hm(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown") return eo(ss);
  }
  function vm(e, t) {
    if (e === "click") return eo(t);
  }
  function ym(e, t) {
    if (e === "input" || e === "change") return eo(t);
  }
  function gm(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
  }
  var Pt = typeof Object.is == "function" ? Object.is : gm;
  function os(e, t) {
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
  function Vl(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
  }
  function _m(e) {
    var t = Ku(), n = e.focusedElem, s = e.selectionRange;
    if (t !== n && n && n.ownerDocument && Qu(n.ownerDocument.documentElement, n)) {
      if (s !== null && Vl(n)) {
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
  var xm = h && "documentMode" in document && 11 >= document.documentMode, ir = null, ql = null, ls = null, Ql = !1;
  function Yu(e, t, n) {
    var s = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    Ql || ir == null || ir !== Pn(s) || (s = ir, "selectionStart" in s && Vl(s) ? s = { start: s.selectionStart, end: s.selectionEnd } : (s = (s.ownerDocument && s.ownerDocument.defaultView || window).getSelection(), s = { anchorNode: s.anchorNode, anchorOffset: s.anchorOffset, focusNode: s.focusNode, focusOffset: s.focusOffset }), ls && os(ls, s) || (ls = s, s = so(ql, "onSelect"), 0 < s.length && (t = new Dl("onSelect", "select", null, t, n), e.push({ event: t, listeners: s }), t.target = ir)));
  }
  function to(e, t) {
    var n = {};
    return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
  }
  var ur = { animationend: to("Animation", "AnimationEnd"), animationiteration: to("Animation", "AnimationIteration"), animationstart: to("Animation", "AnimationStart"), transitionend: to("Transition", "TransitionEnd") }, Kl = {}, Gu = {};
  h && (Gu = document.createElement("div").style, "AnimationEvent" in window || (delete ur.animationend.animation, delete ur.animationiteration.animation, delete ur.animationstart.animation), "TransitionEvent" in window || delete ur.transitionend.transition);
  function no(e) {
    if (Kl[e]) return Kl[e];
    if (!ur[e]) return e;
    var t = ur[e], n;
    for (n in t) if (t.hasOwnProperty(n) && n in Gu) return Kl[e] = t[n];
    return e;
  }
  var Ju = no("animationend"), Xu = no("animationiteration"), Zu = no("animationstart"), ec = no("transitionend"), tc = /* @__PURE__ */ new Map(), nc = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  function fn(e, t) {
    tc.set(e, t), f(t, [e]);
  }
  for (var Yl = 0; Yl < nc.length; Yl++) {
    var Gl = nc[Yl], wm = Gl.toLowerCase(), Sm = Gl[0].toUpperCase() + Gl.slice(1);
    fn(wm, "on" + Sm);
  }
  fn(Ju, "onAnimationEnd"), fn(Xu, "onAnimationIteration"), fn(Zu, "onAnimationStart"), fn("dblclick", "onDoubleClick"), fn("focusin", "onFocus"), fn("focusout", "onBlur"), fn(ec, "onTransitionEnd"), m("onMouseEnter", ["mouseout", "mouseover"]), m("onMouseLeave", ["mouseout", "mouseover"]), m("onPointerEnter", ["pointerout", "pointerover"]), m("onPointerLeave", ["pointerout", "pointerover"]), f("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), f("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), f("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), f("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), f("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), f("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var as = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), km = new Set("cancel close invalid load scroll toggle".split(" ").concat(as));
  function rc(e, t, n) {
    var s = e.type || "unknown-event";
    e.currentTarget = n, wp(s, t, void 0, e), e.currentTarget = null;
  }
  function sc(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
      var s = e[n], o = s.event;
      s = s.listeners;
      e: {
        var u = void 0;
        if (t) for (var p = s.length - 1; 0 <= p; p--) {
          var w = s[p], j = w.instance, M = w.currentTarget;
          if (w = w.listener, j !== u && o.isPropagationStopped()) break e;
          rc(o, w, M), u = j;
        }
        else for (p = 0; p < s.length; p++) {
          if (w = s[p], j = w.instance, M = w.currentTarget, w = w.listener, j !== u && o.isPropagationStopped()) break e;
          rc(o, w, M), u = j;
        }
      }
    }
    if (Fs) throw e = Nl, Fs = !1, Nl = null, e;
  }
  function Re(e, t) {
    var n = t[sa];
    n === void 0 && (n = t[sa] = /* @__PURE__ */ new Set());
    var s = e + "__bubble";
    n.has(s) || (oc(t, e, 2, !1), n.add(s));
  }
  function Jl(e, t, n) {
    var s = 0;
    t && (s |= 4), oc(n, e, s, t);
  }
  var ro = "_reactListening" + Math.random().toString(36).slice(2);
  function is(e) {
    if (!e[ro]) {
      e[ro] = !0, c.forEach(function(n) {
        n !== "selectionchange" && (km.has(n) || Jl(n, !1, e), Jl(n, !0, e));
      });
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[ro] || (t[ro] = !0, Jl("selectionchange", !1, t));
    }
  }
  function oc(e, t, n, s) {
    switch (Tu(t)) {
      case 1:
        var o = Dp;
        break;
      case 4:
        o = zp;
        break;
      default:
        o = Ll;
    }
    n = o.bind(null, t, n, e), o = void 0, !El || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (o = !0), s ? o !== void 0 ? e.addEventListener(t, n, { capture: !0, passive: o }) : e.addEventListener(t, n, !0) : o !== void 0 ? e.addEventListener(t, n, { passive: o }) : e.addEventListener(t, n, !1);
  }
  function Xl(e, t, n, s, o) {
    var u = s;
    if ((t & 1) === 0 && (t & 2) === 0 && s !== null) e: for (; ; ) {
      if (s === null) return;
      var p = s.tag;
      if (p === 3 || p === 4) {
        var w = s.stateNode.containerInfo;
        if (w === o || w.nodeType === 8 && w.parentNode === o) break;
        if (p === 4) for (p = s.return; p !== null; ) {
          var j = p.tag;
          if ((j === 3 || j === 4) && (j = p.stateNode.containerInfo, j === o || j.nodeType === 8 && j.parentNode === o)) return;
          p = p.return;
        }
        for (; w !== null; ) {
          if (p = $n(w), p === null) return;
          if (j = p.tag, j === 5 || j === 6) {
            s = u = p;
            continue e;
          }
          w = w.parentNode;
        }
      }
      s = s.return;
    }
    cu(function() {
      var M = u, V = kl(n), q = [];
      e: {
        var U = tc.get(e);
        if (U !== void 0) {
          var Z = Dl, te = e;
          switch (e) {
            case "keypress":
              if (Js(n) === 0) break e;
            case "keydown":
            case "keyup":
              Z = Zp;
              break;
            case "focusin":
              te = "focus", Z = Fl;
              break;
            case "focusout":
              te = "blur", Z = Fl;
              break;
            case "beforeblur":
            case "afterblur":
              Z = Fl;
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
              Z = Hp;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              Z = nm;
              break;
            case Ju:
            case Xu:
            case Zu:
              Z = Wp;
              break;
            case ec:
              Z = sm;
              break;
            case "scroll":
              Z = Op;
              break;
            case "wheel":
              Z = lm;
              break;
            case "copy":
            case "cut":
            case "paste":
              Z = qp;
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
          for (var T = M, b; T !== null; ) {
            b = T;
            var Q = b.stateNode;
            if (b.tag === 5 && Q !== null && (b = Q, $ !== null && (Q = Wr(T, $), Q != null && ne.push(us(T, Q, b)))), ze) break;
            T = T.return;
          }
          0 < ne.length && (U = new Z(U, te, null, n, V), q.push({ event: U, listeners: ne }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (U = e === "mouseover" || e === "pointerover", Z = e === "mouseout" || e === "pointerout", U && n !== Sl && (te = n.relatedTarget || n.fromElement) && ($n(te) || te[Kt])) break e;
          if ((Z || U) && (U = V.window === V ? V : (U = V.ownerDocument) ? U.defaultView || U.parentWindow : window, Z ? (te = n.relatedTarget || n.toElement, Z = M, te = te ? $n(te) : null, te !== null && (ze = An(te), te !== ze || te.tag !== 5 && te.tag !== 6) && (te = null)) : (Z = null, te = M), Z !== te)) {
            if (ne = Au, Q = "onMouseLeave", $ = "onMouseEnter", T = "mouse", (e === "pointerout" || e === "pointerover") && (ne = bu, Q = "onPointerLeave", $ = "onPointerEnter", T = "pointer"), ze = Z == null ? U : fr(Z), b = te == null ? U : fr(te), U = new ne(Q, T + "leave", Z, n, V), U.target = ze, U.relatedTarget = b, Q = null, $n(V) === M && (ne = new ne($, T + "enter", te, n, V), ne.target = b, ne.relatedTarget = ze, Q = ne), ze = Q, Z && te) t: {
              for (ne = Z, $ = te, T = 0, b = ne; b; b = cr(b)) T++;
              for (b = 0, Q = $; Q; Q = cr(Q)) b++;
              for (; 0 < T - b; ) ne = cr(ne), T--;
              for (; 0 < b - T; ) $ = cr($), b--;
              for (; T--; ) {
                if (ne === $ || $ !== null && ne === $.alternate) break t;
                ne = cr(ne), $ = cr($);
              }
              ne = null;
            }
            else ne = null;
            Z !== null && lc(q, U, Z, ne, !1), te !== null && ze !== null && lc(q, ze, te, ne, !0);
          }
        }
        e: {
          if (U = M ? fr(M) : window, Z = U.nodeName && U.nodeName.toLowerCase(), Z === "select" || Z === "input" && U.type === "file") var re = pm;
          else if (Ou(U)) if (Hu) re = ym;
          else {
            re = hm;
            var se = mm;
          }
          else (Z = U.nodeName) && Z.toLowerCase() === "input" && (U.type === "checkbox" || U.type === "radio") && (re = vm);
          if (re && (re = re(e, M))) {
            Fu(q, re, n, V);
            break e;
          }
          se && se(e, U, M), e === "focusout" && (se = U._wrapperState) && se.controlled && U.type === "number" && yl(U, "number", U.value);
        }
        switch (se = M ? fr(M) : window, e) {
          case "focusin":
            (Ou(se) || se.contentEditable === "true") && (ir = se, ql = M, ls = null);
            break;
          case "focusout":
            ls = ql = ir = null;
            break;
          case "mousedown":
            Ql = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            Ql = !1, Yu(q, n, V);
            break;
          case "selectionchange":
            if (xm) break;
          case "keydown":
          case "keyup":
            Yu(q, n, V);
        }
        var oe;
        if (Ul) e: {
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
        else ar ? Du(e, n) && (ue = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (ue = "onCompositionStart");
        ue && (Lu && n.locale !== "ko" && (ar || ue !== "onCompositionStart" ? ue === "onCompositionEnd" && ar && (oe = Ru()) : (dn = V, Il = "value" in dn ? dn.value : dn.textContent, ar = !0)), se = so(M, ue), 0 < se.length && (ue = new $u(ue, e, null, n, V), q.push({ event: ue, listeners: se }), oe ? ue.data = oe : (oe = zu(n), oe !== null && (ue.data = oe)))), (oe = im ? um(e, n) : cm(e, n)) && (M = so(M, "onBeforeInput"), 0 < M.length && (V = new $u("onBeforeInput", "beforeinput", null, n, V), q.push({ event: V, listeners: M }), V.data = oe));
      }
      sc(q, t);
    });
  }
  function us(e, t, n) {
    return { instance: e, listener: t, currentTarget: n };
  }
  function so(e, t) {
    for (var n = t + "Capture", s = []; e !== null; ) {
      var o = e, u = o.stateNode;
      o.tag === 5 && u !== null && (o = u, u = Wr(e, n), u != null && s.unshift(us(e, u, o)), u = Wr(e, t), u != null && s.push(us(e, u, o))), e = e.return;
    }
    return s;
  }
  function cr(e) {
    if (e === null) return null;
    do
      e = e.return;
    while (e && e.tag !== 5);
    return e || null;
  }
  function lc(e, t, n, s, o) {
    for (var u = t._reactName, p = []; n !== null && n !== s; ) {
      var w = n, j = w.alternate, M = w.stateNode;
      if (j !== null && j === s) break;
      w.tag === 5 && M !== null && (w = M, o ? (j = Wr(n, u), j != null && p.unshift(us(n, j, w))) : o || (j = Wr(n, u), j != null && p.push(us(n, j, w)))), n = n.return;
    }
    p.length !== 0 && e.push({ event: t, listeners: p });
  }
  var Cm = /\r\n?/g, jm = /\u0000|\uFFFD/g;
  function ac(e) {
    return (typeof e == "string" ? e : "" + e).replace(Cm, `
`).replace(jm, "");
  }
  function oo(e, t, n) {
    if (t = ac(t), ac(e) !== t && n) throw Error(i(425));
  }
  function lo() {
  }
  var Zl = null, ea = null;
  function ta(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
  }
  var na = typeof setTimeout == "function" ? setTimeout : void 0, Em = typeof clearTimeout == "function" ? clearTimeout : void 0, ic = typeof Promise == "function" ? Promise : void 0, Nm = typeof queueMicrotask == "function" ? queueMicrotask : typeof ic < "u" ? function(e) {
    return ic.resolve(null).then(e).catch(Tm);
  } : na;
  function Tm(e) {
    setTimeout(function() {
      throw e;
    });
  }
  function ra(e, t) {
    var n = t, s = 0;
    do {
      var o = n.nextSibling;
      if (e.removeChild(n), o && o.nodeType === 8) if (n = o.data, n === "/$") {
        if (s === 0) {
          e.removeChild(o), Zr(t);
          return;
        }
        s--;
      } else n !== "$" && n !== "$?" && n !== "$!" || s++;
      n = o;
    } while (n);
    Zr(t);
  }
  function pn(e) {
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
  var dr = Math.random().toString(36).slice(2), Ht = "__reactFiber$" + dr, cs = "__reactProps$" + dr, Kt = "__reactContainer$" + dr, sa = "__reactEvents$" + dr, Rm = "__reactListeners$" + dr, Pm = "__reactHandles$" + dr;
  function $n(e) {
    var t = e[Ht];
    if (t) return t;
    for (var n = e.parentNode; n; ) {
      if (t = n[Kt] || n[Ht]) {
        if (n = t.alternate, t.child !== null || n !== null && n.child !== null) for (e = uc(e); e !== null; ) {
          if (n = e[Ht]) return n;
          e = uc(e);
        }
        return t;
      }
      e = n, n = e.parentNode;
    }
    return null;
  }
  function ds(e) {
    return e = e[Ht] || e[Kt], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
  }
  function fr(e) {
    if (e.tag === 5 || e.tag === 6) return e.stateNode;
    throw Error(i(33));
  }
  function ao(e) {
    return e[cs] || null;
  }
  var oa = [], pr = -1;
  function mn(e) {
    return { current: e };
  }
  function Pe(e) {
    0 > pr || (e.current = oa[pr], oa[pr] = null, pr--);
  }
  function Ne(e, t) {
    pr++, oa[pr] = e.current, e.current = t;
  }
  var hn = {}, Ge = mn(hn), lt = mn(!1), bn = hn;
  function mr(e, t) {
    var n = e.type.contextTypes;
    if (!n) return hn;
    var s = e.stateNode;
    if (s && s.__reactInternalMemoizedUnmaskedChildContext === t) return s.__reactInternalMemoizedMaskedChildContext;
    var o = {}, u;
    for (u in n) o[u] = t[u];
    return s && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = o), o;
  }
  function at(e) {
    return e = e.childContextTypes, e != null;
  }
  function io() {
    Pe(lt), Pe(Ge);
  }
  function cc(e, t, n) {
    if (Ge.current !== hn) throw Error(i(168));
    Ne(Ge, t), Ne(lt, n);
  }
  function dc(e, t, n) {
    var s = e.stateNode;
    if (t = t.childContextTypes, typeof s.getChildContext != "function") return n;
    s = s.getChildContext();
    for (var o in s) if (!(o in t)) throw Error(i(108, Se(e) || "Unknown", o));
    return Y({}, n, s);
  }
  function uo(e) {
    return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || hn, bn = Ge.current, Ne(Ge, e), Ne(lt, lt.current), !0;
  }
  function fc(e, t, n) {
    var s = e.stateNode;
    if (!s) throw Error(i(169));
    n ? (e = dc(e, t, bn), s.__reactInternalMemoizedMergedChildContext = e, Pe(lt), Pe(Ge), Ne(Ge, e)) : Pe(lt), Ne(lt, n);
  }
  var Yt = null, co = !1, la = !1;
  function pc(e) {
    Yt === null ? Yt = [e] : Yt.push(e);
  }
  function Am(e) {
    co = !0, pc(e);
  }
  function vn() {
    if (!la && Yt !== null) {
      la = !0;
      var e = 0, t = ke;
      try {
        var n = Yt;
        for (ke = 1; e < n.length; e++) {
          var s = n[e];
          do
            s = s(!0);
          while (s !== null);
        }
        Yt = null, co = !1;
      } catch (o) {
        throw Yt !== null && (Yt = Yt.slice(e + 1)), hu(Tl, vn), o;
      } finally {
        ke = t, la = !1;
      }
    }
    return null;
  }
  var hr = [], vr = 0, fo = null, po = 0, xt = [], wt = 0, Ln = null, Gt = 1, Jt = "";
  function Mn(e, t) {
    hr[vr++] = po, hr[vr++] = fo, fo = e, po = t;
  }
  function mc(e, t, n) {
    xt[wt++] = Gt, xt[wt++] = Jt, xt[wt++] = Ln, Ln = e;
    var s = Gt;
    e = Jt;
    var o = 32 - Rt(s) - 1;
    s &= ~(1 << o), n += 1;
    var u = 32 - Rt(t) + o;
    if (30 < u) {
      var p = o - o % 5;
      u = (s & (1 << p) - 1).toString(32), s >>= p, o -= p, Gt = 1 << 32 - Rt(t) + o | n << o | s, Jt = u + e;
    } else Gt = 1 << u | n << o | s, Jt = e;
  }
  function aa(e) {
    e.return !== null && (Mn(e, 1), mc(e, 1, 0));
  }
  function ia(e) {
    for (; e === fo; ) fo = hr[--vr], hr[vr] = null, po = hr[--vr], hr[vr] = null;
    for (; e === Ln; ) Ln = xt[--wt], xt[wt] = null, Jt = xt[--wt], xt[wt] = null, Gt = xt[--wt], xt[wt] = null;
  }
  var ht = null, vt = null, Ae = !1, At = null;
  function hc(e, t) {
    var n = jt(5, null, null, 0);
    n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n);
  }
  function vc(e, t) {
    switch (e.tag) {
      case 5:
        var n = e.type;
        return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, ht = e, vt = pn(t.firstChild), !0) : !1;
      case 6:
        return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, ht = e, vt = null, !0) : !1;
      case 13:
        return t = t.nodeType !== 8 ? null : t, t !== null ? (n = Ln !== null ? { id: Gt, overflow: Jt } : null, e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }, n = jt(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, ht = e, vt = null, !0) : !1;
      default:
        return !1;
    }
  }
  function ua(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
  }
  function ca(e) {
    if (Ae) {
      var t = vt;
      if (t) {
        var n = t;
        if (!vc(e, t)) {
          if (ua(e)) throw Error(i(418));
          t = pn(n.nextSibling);
          var s = ht;
          t && vc(e, t) ? hc(s, n) : (e.flags = e.flags & -4097 | 2, Ae = !1, ht = e);
        }
      } else {
        if (ua(e)) throw Error(i(418));
        e.flags = e.flags & -4097 | 2, Ae = !1, ht = e;
      }
    }
  }
  function yc(e) {
    for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
    ht = e;
  }
  function mo(e) {
    if (e !== ht) return !1;
    if (!Ae) return yc(e), Ae = !0, !1;
    var t;
    if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !ta(e.type, e.memoizedProps)), t && (t = vt)) {
      if (ua(e)) throw gc(), Error(i(418));
      for (; t; ) hc(e, t), t = pn(t.nextSibling);
    }
    if (yc(e), e.tag === 13) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(i(317));
      e: {
        for (e = e.nextSibling, t = 0; e; ) {
          if (e.nodeType === 8) {
            var n = e.data;
            if (n === "/$") {
              if (t === 0) {
                vt = pn(e.nextSibling);
                break e;
              }
              t--;
            } else n !== "$" && n !== "$!" && n !== "$?" || t++;
          }
          e = e.nextSibling;
        }
        vt = null;
      }
    } else vt = ht ? pn(e.stateNode.nextSibling) : null;
    return !0;
  }
  function gc() {
    for (var e = vt; e; ) e = pn(e.nextSibling);
  }
  function yr() {
    vt = ht = null, Ae = !1;
  }
  function da(e) {
    At === null ? At = [e] : At.push(e);
  }
  var $m = z.ReactCurrentBatchConfig;
  function fs(e, t, n) {
    if (e = n.ref, e !== null && typeof e != "function" && typeof e != "object") {
      if (n._owner) {
        if (n = n._owner, n) {
          if (n.tag !== 1) throw Error(i(309));
          var s = n.stateNode;
        }
        if (!s) throw Error(i(147, e));
        var o = s, u = "" + e;
        return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === u ? t.ref : (t = function(p) {
          var w = o.refs;
          p === null ? delete w[u] : w[u] = p;
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
      return $ = Cn($, T), $.index = 0, $.sibling = null, $;
    }
    function u($, T, b) {
      return $.index = b, e ? (b = $.alternate, b !== null ? (b = b.index, b < T ? ($.flags |= 2, T) : b) : ($.flags |= 2, T)) : ($.flags |= 1048576, T);
    }
    function p($) {
      return e && $.alternate === null && ($.flags |= 2), $;
    }
    function w($, T, b, Q) {
      return T === null || T.tag !== 6 ? (T = ni(b, $.mode, Q), T.return = $, T) : (T = o(T, b), T.return = $, T);
    }
    function j($, T, b, Q) {
      var re = b.type;
      return re === J ? V($, T, b.props.children, Q, b.key) : T !== null && (T.elementType === re || typeof re == "object" && re !== null && re.$$typeof === Ce && _c(re) === T.type) ? (Q = o(T, b.props), Q.ref = fs($, T, b), Q.return = $, Q) : (Q = Oo(b.type, b.key, b.props, null, $.mode, Q), Q.ref = fs($, T, b), Q.return = $, Q);
    }
    function M($, T, b, Q) {
      return T === null || T.tag !== 4 || T.stateNode.containerInfo !== b.containerInfo || T.stateNode.implementation !== b.implementation ? (T = ri(b, $.mode, Q), T.return = $, T) : (T = o(T, b.children || []), T.return = $, T);
    }
    function V($, T, b, Q, re) {
      return T === null || T.tag !== 7 ? (T = Bn(b, $.mode, Q, re), T.return = $, T) : (T = o(T, b), T.return = $, T);
    }
    function q($, T, b) {
      if (typeof T == "string" && T !== "" || typeof T == "number") return T = ni("" + T, $.mode, b), T.return = $, T;
      if (typeof T == "object" && T !== null) {
        switch (T.$$typeof) {
          case W:
            return b = Oo(T.type, T.key, T.props, null, $.mode, b), b.ref = fs($, null, T), b.return = $, b;
          case L:
            return T = ri(T, $.mode, b), T.return = $, T;
          case Ce:
            var Q = T._init;
            return q($, Q(T._payload), b);
        }
        if (Hr(T) || X(T)) return T = Bn(T, $.mode, b, null), T.return = $, T;
        ho($, T);
      }
      return null;
    }
    function U($, T, b, Q) {
      var re = T !== null ? T.key : null;
      if (typeof b == "string" && b !== "" || typeof b == "number") return re !== null ? null : w($, T, "" + b, Q);
      if (typeof b == "object" && b !== null) {
        switch (b.$$typeof) {
          case W:
            return b.key === re ? j($, T, b, Q) : null;
          case L:
            return b.key === re ? M($, T, b, Q) : null;
          case Ce:
            return re = b._init, U(
              $,
              T,
              re(b._payload),
              Q
            );
        }
        if (Hr(b) || X(b)) return re !== null ? null : V($, T, b, Q, null);
        ho($, b);
      }
      return null;
    }
    function Z($, T, b, Q, re) {
      if (typeof Q == "string" && Q !== "" || typeof Q == "number") return $ = $.get(b) || null, w(T, $, "" + Q, re);
      if (typeof Q == "object" && Q !== null) {
        switch (Q.$$typeof) {
          case W:
            return $ = $.get(Q.key === null ? b : Q.key) || null, j(T, $, Q, re);
          case L:
            return $ = $.get(Q.key === null ? b : Q.key) || null, M(T, $, Q, re);
          case Ce:
            var se = Q._init;
            return Z($, T, b, se(Q._payload), re);
        }
        if (Hr(Q) || X(Q)) return $ = $.get(b) || null, V(T, $, Q, re, null);
        ho(T, Q);
      }
      return null;
    }
    function te($, T, b, Q) {
      for (var re = null, se = null, oe = T, ue = T = 0, We = null; oe !== null && ue < b.length; ue++) {
        oe.index > ue ? (We = oe, oe = null) : We = oe.sibling;
        var we = U($, oe, b[ue], Q);
        if (we === null) {
          oe === null && (oe = We);
          break;
        }
        e && oe && we.alternate === null && t($, oe), T = u(we, T, ue), se === null ? re = we : se.sibling = we, se = we, oe = We;
      }
      if (ue === b.length) return n($, oe), Ae && Mn($, ue), re;
      if (oe === null) {
        for (; ue < b.length; ue++) oe = q($, b[ue], Q), oe !== null && (T = u(oe, T, ue), se === null ? re = oe : se.sibling = oe, se = oe);
        return Ae && Mn($, ue), re;
      }
      for (oe = s($, oe); ue < b.length; ue++) We = Z(oe, $, ue, b[ue], Q), We !== null && (e && We.alternate !== null && oe.delete(We.key === null ? ue : We.key), T = u(We, T, ue), se === null ? re = We : se.sibling = We, se = We);
      return e && oe.forEach(function(jn) {
        return t($, jn);
      }), Ae && Mn($, ue), re;
    }
    function ne($, T, b, Q) {
      var re = X(b);
      if (typeof re != "function") throw Error(i(150));
      if (b = re.call(b), b == null) throw Error(i(151));
      for (var se = re = null, oe = T, ue = T = 0, We = null, we = b.next(); oe !== null && !we.done; ue++, we = b.next()) {
        oe.index > ue ? (We = oe, oe = null) : We = oe.sibling;
        var jn = U($, oe, we.value, Q);
        if (jn === null) {
          oe === null && (oe = We);
          break;
        }
        e && oe && jn.alternate === null && t($, oe), T = u(jn, T, ue), se === null ? re = jn : se.sibling = jn, se = jn, oe = We;
      }
      if (we.done) return n(
        $,
        oe
      ), Ae && Mn($, ue), re;
      if (oe === null) {
        for (; !we.done; ue++, we = b.next()) we = q($, we.value, Q), we !== null && (T = u(we, T, ue), se === null ? re = we : se.sibling = we, se = we);
        return Ae && Mn($, ue), re;
      }
      for (oe = s($, oe); !we.done; ue++, we = b.next()) we = Z(oe, $, ue, we.value, Q), we !== null && (e && we.alternate !== null && oe.delete(we.key === null ? ue : we.key), T = u(we, T, ue), se === null ? re = we : se.sibling = we, se = we);
      return e && oe.forEach(function(dh) {
        return t($, dh);
      }), Ae && Mn($, ue), re;
    }
    function ze($, T, b, Q) {
      if (typeof b == "object" && b !== null && b.type === J && b.key === null && (b = b.props.children), typeof b == "object" && b !== null) {
        switch (b.$$typeof) {
          case W:
            e: {
              for (var re = b.key, se = T; se !== null; ) {
                if (se.key === re) {
                  if (re = b.type, re === J) {
                    if (se.tag === 7) {
                      n($, se.sibling), T = o(se, b.props.children), T.return = $, $ = T;
                      break e;
                    }
                  } else if (se.elementType === re || typeof re == "object" && re !== null && re.$$typeof === Ce && _c(re) === se.type) {
                    n($, se.sibling), T = o(se, b.props), T.ref = fs($, se, b), T.return = $, $ = T;
                    break e;
                  }
                  n($, se);
                  break;
                } else t($, se);
                se = se.sibling;
              }
              b.type === J ? (T = Bn(b.props.children, $.mode, Q, b.key), T.return = $, $ = T) : (Q = Oo(b.type, b.key, b.props, null, $.mode, Q), Q.ref = fs($, T, b), Q.return = $, $ = Q);
            }
            return p($);
          case L:
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
              T = ri(b, $.mode, Q), T.return = $, $ = T;
            }
            return p($);
          case Ce:
            return se = b._init, ze($, T, se(b._payload), Q);
        }
        if (Hr(b)) return te($, T, b, Q);
        if (X(b)) return ne($, T, b, Q);
        ho($, b);
      }
      return typeof b == "string" && b !== "" || typeof b == "number" ? (b = "" + b, T !== null && T.tag === 6 ? (n($, T.sibling), T = o(T, b), T.return = $, $ = T) : (n($, T), T = ni(b, $.mode, Q), T.return = $, $ = T), p($)) : n($, T);
    }
    return ze;
  }
  var gr = xc(!0), wc = xc(!1), vo = mn(null), yo = null, _r = null, fa = null;
  function pa() {
    fa = _r = yo = null;
  }
  function ma(e) {
    var t = vo.current;
    Pe(vo), e._currentValue = t;
  }
  function ha(e, t, n) {
    for (; e !== null; ) {
      var s = e.alternate;
      if ((e.childLanes & t) !== t ? (e.childLanes |= t, s !== null && (s.childLanes |= t)) : s !== null && (s.childLanes & t) !== t && (s.childLanes |= t), e === n) break;
      e = e.return;
    }
  }
  function xr(e, t) {
    yo = e, fa = _r = null, e = e.dependencies, e !== null && e.firstContext !== null && ((e.lanes & t) !== 0 && (it = !0), e.firstContext = null);
  }
  function St(e) {
    var t = e._currentValue;
    if (fa !== e) if (e = { context: e, memoizedValue: t, next: null }, _r === null) {
      if (yo === null) throw Error(i(308));
      _r = e, yo.dependencies = { lanes: 0, firstContext: e };
    } else _r = _r.next = e;
    return t;
  }
  var In = null;
  function va(e) {
    In === null ? In = [e] : In.push(e);
  }
  function Sc(e, t, n, s) {
    var o = t.interleaved;
    return o === null ? (n.next = n, va(t)) : (n.next = o.next, o.next = n), t.interleaved = n, Xt(e, s);
  }
  function Xt(e, t) {
    e.lanes |= t;
    var n = e.alternate;
    for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; ) e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
    return n.tag === 3 ? n.stateNode : null;
  }
  var yn = !1;
  function ya(e) {
    e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
  }
  function kc(e, t) {
    e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
  }
  function Zt(e, t) {
    return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
  }
  function gn(e, t, n) {
    var s = e.updateQueue;
    if (s === null) return null;
    if (s = s.shared, (_e & 2) !== 0) {
      var o = s.pending;
      return o === null ? t.next = t : (t.next = o.next, o.next = t), s.pending = t, Xt(e, n);
    }
    return o = s.interleaved, o === null ? (t.next = t, va(s)) : (t.next = o.next, o.next = t), s.interleaved = t, Xt(e, n);
  }
  function go(e, t, n) {
    if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
      var s = t.lanes;
      s &= e.pendingLanes, n |= s, t.lanes = n, Al(e, n);
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
    yn = !1;
    var u = o.firstBaseUpdate, p = o.lastBaseUpdate, w = o.shared.pending;
    if (w !== null) {
      o.shared.pending = null;
      var j = w, M = j.next;
      j.next = null, p === null ? u = M : p.next = M, p = j;
      var V = e.alternate;
      V !== null && (V = V.updateQueue, w = V.lastBaseUpdate, w !== p && (w === null ? V.firstBaseUpdate = M : w.next = M, V.lastBaseUpdate = j));
    }
    if (u !== null) {
      var q = o.baseState;
      p = 0, V = M = j = null, w = u;
      do {
        var U = w.lane, Z = w.eventTime;
        if ((s & U) === U) {
          V !== null && (V = V.next = {
            eventTime: Z,
            lane: 0,
            tag: w.tag,
            payload: w.payload,
            callback: w.callback,
            next: null
          });
          e: {
            var te = e, ne = w;
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
                yn = !0;
            }
          }
          w.callback !== null && w.lane !== 0 && (e.flags |= 64, U = o.effects, U === null ? o.effects = [w] : U.push(w));
        } else Z = { eventTime: Z, lane: U, tag: w.tag, payload: w.payload, callback: w.callback, next: null }, V === null ? (M = V = Z, j = q) : V = V.next = Z, p |= U;
        if (w = w.next, w === null) {
          if (w = o.shared.pending, w === null) break;
          U = w, w = U.next, U.next = null, o.lastBaseUpdate = U, o.shared.pending = null;
        }
      } while (!0);
      if (V === null && (j = q), o.baseState = j, o.firstBaseUpdate = M, o.lastBaseUpdate = V, t = o.shared.interleaved, t !== null) {
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
  var ps = {}, Ut = mn(ps), ms = mn(ps), hs = mn(ps);
  function Dn(e) {
    if (e === ps) throw Error(i(174));
    return e;
  }
  function ga(e, t) {
    switch (Ne(hs, t), Ne(ms, e), Ne(Ut, ps), e = t.nodeType, e) {
      case 9:
      case 11:
        t = (t = t.documentElement) ? t.namespaceURI : _l(null, "");
        break;
      default:
        e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = _l(t, e);
    }
    Pe(Ut), Ne(Ut, t);
  }
  function wr() {
    Pe(Ut), Pe(ms), Pe(hs);
  }
  function Ec(e) {
    Dn(hs.current);
    var t = Dn(Ut.current), n = _l(t, e.type);
    t !== n && (Ne(ms, e), Ne(Ut, n));
  }
  function _a(e) {
    ms.current === e && (Pe(Ut), Pe(ms));
  }
  var be = mn(0);
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
  var xa = [];
  function wa() {
    for (var e = 0; e < xa.length; e++) xa[e]._workInProgressVersionPrimary = null;
    xa.length = 0;
  }
  var wo = z.ReactCurrentDispatcher, Sa = z.ReactCurrentBatchConfig, zn = 0, Le = null, Fe = null, Ue = null, So = !1, vs = !1, ys = 0, bm = 0;
  function Je() {
    throw Error(i(321));
  }
  function ka(e, t) {
    if (t === null) return !1;
    for (var n = 0; n < t.length && n < e.length; n++) if (!Pt(e[n], t[n])) return !1;
    return !0;
  }
  function Ca(e, t, n, s, o, u) {
    if (zn = u, Le = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, wo.current = e === null || e.memoizedState === null ? Dm : zm, e = n(s, o), vs) {
      u = 0;
      do {
        if (vs = !1, ys = 0, 25 <= u) throw Error(i(301));
        u += 1, Ue = Fe = null, t.updateQueue = null, wo.current = Om, e = n(s, o);
      } while (vs);
    }
    if (wo.current = jo, t = Fe !== null && Fe.next !== null, zn = 0, Ue = Fe = Le = null, So = !1, t) throw Error(i(300));
    return e;
  }
  function ja() {
    var e = ys !== 0;
    return ys = 0, e;
  }
  function Bt() {
    var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return Ue === null ? Le.memoizedState = Ue = e : Ue = Ue.next = e, Ue;
  }
  function kt() {
    if (Fe === null) {
      var e = Le.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = Fe.next;
    var t = Ue === null ? Le.memoizedState : Ue.next;
    if (t !== null) Ue = t, Fe = e;
    else {
      if (e === null) throw Error(i(310));
      Fe = e, e = { memoizedState: Fe.memoizedState, baseState: Fe.baseState, baseQueue: Fe.baseQueue, queue: Fe.queue, next: null }, Ue === null ? Le.memoizedState = Ue = e : Ue = Ue.next = e;
    }
    return Ue;
  }
  function gs(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function Ea(e) {
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
      var w = p = null, j = null, M = u;
      do {
        var V = M.lane;
        if ((zn & V) === V) j !== null && (j = j.next = { lane: 0, action: M.action, hasEagerState: M.hasEagerState, eagerState: M.eagerState, next: null }), s = M.hasEagerState ? M.eagerState : e(s, M.action);
        else {
          var q = {
            lane: V,
            action: M.action,
            hasEagerState: M.hasEagerState,
            eagerState: M.eagerState,
            next: null
          };
          j === null ? (w = j = q, p = s) : j = j.next = q, Le.lanes |= V, On |= V;
        }
        M = M.next;
      } while (M !== null && M !== u);
      j === null ? p = s : j.next = w, Pt(s, t.memoizedState) || (it = !0), t.memoizedState = s, t.baseState = p, t.baseQueue = j, n.lastRenderedState = s;
    }
    if (e = n.interleaved, e !== null) {
      o = e;
      do
        u = o.lane, Le.lanes |= u, On |= u, o = o.next;
      while (o !== e);
    } else o === null && (n.lanes = 0);
    return [t.memoizedState, n.dispatch];
  }
  function Na(e) {
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
    var n = Le, s = kt(), o = t(), u = !Pt(s.memoizedState, o);
    if (u && (s.memoizedState = o, it = !0), s = s.queue, Ta(Ac.bind(null, n, s, e), [e]), s.getSnapshot !== t || u || Ue !== null && Ue.memoizedState.tag & 1) {
      if (n.flags |= 2048, _s(9, Pc.bind(null, n, s, o, t), void 0, null), Be === null) throw Error(i(349));
      (zn & 30) !== 0 || Rc(n, t, o);
    }
    return o;
  }
  function Rc(e, t, n) {
    e.flags |= 16384, e = { getSnapshot: t, value: n }, t = Le.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, Le.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
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
    var t = Xt(e, 1);
    t !== null && Mt(t, e, 1, -1);
  }
  function Lc(e) {
    var t = Bt();
    return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: gs, lastRenderedState: e }, t.queue = e, e = e.dispatch = Im.bind(null, Le, e), [t.memoizedState, e];
  }
  function _s(e, t, n, s) {
    return e = { tag: e, create: t, destroy: n, deps: s, next: null }, t = Le.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, Le.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (s = n.next, n.next = e, e.next = s, t.lastEffect = e)), e;
  }
  function Mc() {
    return kt().memoizedState;
  }
  function ko(e, t, n, s) {
    var o = Bt();
    Le.flags |= e, o.memoizedState = _s(1 | t, n, void 0, s === void 0 ? null : s);
  }
  function Co(e, t, n, s) {
    var o = kt();
    s = s === void 0 ? null : s;
    var u = void 0;
    if (Fe !== null) {
      var p = Fe.memoizedState;
      if (u = p.destroy, s !== null && ka(s, p.deps)) {
        o.memoizedState = _s(t, n, u, s);
        return;
      }
    }
    Le.flags |= e, o.memoizedState = _s(1 | t, n, u, s);
  }
  function Ic(e, t) {
    return ko(8390656, 8, e, t);
  }
  function Ta(e, t) {
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
  function Ra() {
  }
  function Hc(e, t) {
    var n = kt();
    t = t === void 0 ? null : t;
    var s = n.memoizedState;
    return s !== null && t !== null && ka(t, s[1]) ? s[0] : (n.memoizedState = [e, t], e);
  }
  function Uc(e, t) {
    var n = kt();
    t = t === void 0 ? null : t;
    var s = n.memoizedState;
    return s !== null && t !== null && ka(t, s[1]) ? s[0] : (e = e(), n.memoizedState = [e, t], e);
  }
  function Bc(e, t, n) {
    return (zn & 21) === 0 ? (e.baseState && (e.baseState = !1, it = !0), e.memoizedState = n) : (Pt(n, t) || (n = _u(), Le.lanes |= n, On |= n, e.baseState = !0), t);
  }
  function Lm(e, t) {
    var n = ke;
    ke = n !== 0 && 4 > n ? n : 4, e(!0);
    var s = Sa.transition;
    Sa.transition = {};
    try {
      e(!1), t();
    } finally {
      ke = n, Sa.transition = s;
    }
  }
  function Wc() {
    return kt().memoizedState;
  }
  function Mm(e, t, n) {
    var s = Sn(e);
    if (n = { lane: s, action: n, hasEagerState: !1, eagerState: null, next: null }, Vc(e)) qc(t, n);
    else if (n = Sc(e, t, n, s), n !== null) {
      var o = st();
      Mt(n, e, s, o), Qc(n, t, s);
    }
  }
  function Im(e, t, n) {
    var s = Sn(e), o = { lane: s, action: n, hasEagerState: !1, eagerState: null, next: null };
    if (Vc(e)) qc(t, o);
    else {
      var u = e.alternate;
      if (e.lanes === 0 && (u === null || u.lanes === 0) && (u = t.lastRenderedReducer, u !== null)) try {
        var p = t.lastRenderedState, w = u(p, n);
        if (o.hasEagerState = !0, o.eagerState = w, Pt(w, p)) {
          var j = t.interleaved;
          j === null ? (o.next = o, va(t)) : (o.next = j.next, j.next = o), t.interleaved = o;
          return;
        }
      } catch {
      } finally {
      }
      n = Sc(e, t, o, s), n !== null && (o = st(), Mt(n, e, s, o), Qc(n, t, s));
    }
  }
  function Vc(e) {
    var t = e.alternate;
    return e === Le || t !== null && t === Le;
  }
  function qc(e, t) {
    vs = So = !0;
    var n = e.pending;
    n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
  }
  function Qc(e, t, n) {
    if ((n & 4194240) !== 0) {
      var s = t.lanes;
      s &= e.pendingLanes, n |= s, t.lanes = n, Al(e, n);
    }
  }
  var jo = { readContext: St, useCallback: Je, useContext: Je, useEffect: Je, useImperativeHandle: Je, useInsertionEffect: Je, useLayoutEffect: Je, useMemo: Je, useReducer: Je, useRef: Je, useState: Je, useDebugValue: Je, useDeferredValue: Je, useTransition: Je, useMutableSource: Je, useSyncExternalStore: Je, useId: Je, unstable_isNewReconciler: !1 }, Dm = { readContext: St, useCallback: function(e, t) {
    return Bt().memoizedState = [e, t === void 0 ? null : t], e;
  }, useContext: St, useEffect: Ic, useImperativeHandle: function(e, t, n) {
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
    var n = Bt();
    return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e;
  }, useReducer: function(e, t, n) {
    var s = Bt();
    return t = n !== void 0 ? n(t) : t, s.memoizedState = s.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, s.queue = e, e = e.dispatch = Mm.bind(null, Le, e), [s.memoizedState, e];
  }, useRef: function(e) {
    var t = Bt();
    return e = { current: e }, t.memoizedState = e;
  }, useState: Lc, useDebugValue: Ra, useDeferredValue: function(e) {
    return Bt().memoizedState = e;
  }, useTransition: function() {
    var e = Lc(!1), t = e[0];
    return e = Lm.bind(null, e[1]), Bt().memoizedState = e, [t, e];
  }, useMutableSource: function() {
  }, useSyncExternalStore: function(e, t, n) {
    var s = Le, o = Bt();
    if (Ae) {
      if (n === void 0) throw Error(i(407));
      n = n();
    } else {
      if (n = t(), Be === null) throw Error(i(349));
      (zn & 30) !== 0 || Rc(s, t, n);
    }
    o.memoizedState = n;
    var u = { value: n, getSnapshot: t };
    return o.queue = u, Ic(Ac.bind(
      null,
      s,
      u,
      e
    ), [e]), s.flags |= 2048, _s(9, Pc.bind(null, s, u, n, t), void 0, null), n;
  }, useId: function() {
    var e = Bt(), t = Be.identifierPrefix;
    if (Ae) {
      var n = Jt, s = Gt;
      n = (s & ~(1 << 32 - Rt(s) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = ys++, 0 < n && (t += "H" + n.toString(32)), t += ":";
    } else n = bm++, t = ":" + t + "r" + n.toString(32) + ":";
    return e.memoizedState = t;
  }, unstable_isNewReconciler: !1 }, zm = {
    readContext: St,
    useCallback: Hc,
    useContext: St,
    useEffect: Ta,
    useImperativeHandle: Fc,
    useInsertionEffect: Dc,
    useLayoutEffect: zc,
    useMemo: Uc,
    useReducer: Ea,
    useRef: Mc,
    useState: function() {
      return Ea(gs);
    },
    useDebugValue: Ra,
    useDeferredValue: function(e) {
      var t = kt();
      return Bc(t, Fe.memoizedState, e);
    },
    useTransition: function() {
      var e = Ea(gs)[0], t = kt().memoizedState;
      return [e, t];
    },
    useMutableSource: Nc,
    useSyncExternalStore: Tc,
    useId: Wc,
    unstable_isNewReconciler: !1
  }, Om = { readContext: St, useCallback: Hc, useContext: St, useEffect: Ta, useImperativeHandle: Fc, useInsertionEffect: Dc, useLayoutEffect: zc, useMemo: Uc, useReducer: Na, useRef: Mc, useState: function() {
    return Na(gs);
  }, useDebugValue: Ra, useDeferredValue: function(e) {
    var t = kt();
    return Fe === null ? t.memoizedState = e : Bc(t, Fe.memoizedState, e);
  }, useTransition: function() {
    var e = Na(gs)[0], t = kt().memoizedState;
    return [e, t];
  }, useMutableSource: Nc, useSyncExternalStore: Tc, useId: Wc, unstable_isNewReconciler: !1 };
  function $t(e, t) {
    if (e && e.defaultProps) {
      t = Y({}, t), e = e.defaultProps;
      for (var n in e) t[n] === void 0 && (t[n] = e[n]);
      return t;
    }
    return t;
  }
  function Pa(e, t, n, s) {
    t = e.memoizedState, n = n(s, t), n = n == null ? t : Y({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
  }
  var Eo = { isMounted: function(e) {
    return (e = e._reactInternals) ? An(e) === e : !1;
  }, enqueueSetState: function(e, t, n) {
    e = e._reactInternals;
    var s = st(), o = Sn(e), u = Zt(s, o);
    u.payload = t, n != null && (u.callback = n), t = gn(e, u, o), t !== null && (Mt(t, e, o, s), go(t, e, o));
  }, enqueueReplaceState: function(e, t, n) {
    e = e._reactInternals;
    var s = st(), o = Sn(e), u = Zt(s, o);
    u.tag = 1, u.payload = t, n != null && (u.callback = n), t = gn(e, u, o), t !== null && (Mt(t, e, o, s), go(t, e, o));
  }, enqueueForceUpdate: function(e, t) {
    e = e._reactInternals;
    var n = st(), s = Sn(e), o = Zt(n, s);
    o.tag = 2, t != null && (o.callback = t), t = gn(e, o, s), t !== null && (Mt(t, e, s, n), go(t, e, s));
  } };
  function Kc(e, t, n, s, o, u, p) {
    return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(s, u, p) : t.prototype && t.prototype.isPureReactComponent ? !os(n, s) || !os(o, u) : !0;
  }
  function Yc(e, t, n) {
    var s = !1, o = hn, u = t.contextType;
    return typeof u == "object" && u !== null ? u = St(u) : (o = at(t) ? bn : Ge.current, s = t.contextTypes, u = (s = s != null) ? mr(e, o) : hn), t = new t(n, u), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = Eo, e.stateNode = t, t._reactInternals = e, s && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = o, e.__reactInternalMemoizedMaskedChildContext = u), t;
  }
  function Gc(e, t, n, s) {
    e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, s), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, s), t.state !== e && Eo.enqueueReplaceState(t, t.state, null);
  }
  function Aa(e, t, n, s) {
    var o = e.stateNode;
    o.props = n, o.state = e.memoizedState, o.refs = {}, ya(e);
    var u = t.contextType;
    typeof u == "object" && u !== null ? o.context = St(u) : (u = at(t) ? bn : Ge.current, o.context = mr(e, u)), o.state = e.memoizedState, u = t.getDerivedStateFromProps, typeof u == "function" && (Pa(e, t, u, n), o.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof o.getSnapshotBeforeUpdate == "function" || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (t = o.state, typeof o.componentWillMount == "function" && o.componentWillMount(), typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount(), t !== o.state && Eo.enqueueReplaceState(o, o.state, null), _o(e, n, o, s), o.state = e.memoizedState), typeof o.componentDidMount == "function" && (e.flags |= 4194308);
  }
  function Sr(e, t) {
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
  function $a(e, t, n) {
    return { value: e, source: null, stack: n ?? null, digest: t ?? null };
  }
  function ba(e, t) {
    try {
      console.error(t.value);
    } catch (n) {
      setTimeout(function() {
        throw n;
      });
    }
  }
  var Fm = typeof WeakMap == "function" ? WeakMap : Map;
  function Jc(e, t, n) {
    n = Zt(-1, n), n.tag = 3, n.payload = { element: null };
    var s = t.value;
    return n.callback = function() {
      bo || (bo = !0, Ka = s), ba(e, t);
    }, n;
  }
  function Xc(e, t, n) {
    n = Zt(-1, n), n.tag = 3;
    var s = e.type.getDerivedStateFromError;
    if (typeof s == "function") {
      var o = t.value;
      n.payload = function() {
        return s(o);
      }, n.callback = function() {
        ba(e, t);
      };
    }
    var u = e.stateNode;
    return u !== null && typeof u.componentDidCatch == "function" && (n.callback = function() {
      ba(e, t), typeof s != "function" && (xn === null ? xn = /* @__PURE__ */ new Set([this]) : xn.add(this));
      var p = t.stack;
      this.componentDidCatch(t.value, { componentStack: p !== null ? p : "" });
    }), n;
  }
  function Zc(e, t, n) {
    var s = e.pingCache;
    if (s === null) {
      s = e.pingCache = new Fm();
      var o = /* @__PURE__ */ new Set();
      s.set(t, o);
    } else o = s.get(t), o === void 0 && (o = /* @__PURE__ */ new Set(), s.set(t, o));
    o.has(n) || (o.add(n), e = eh.bind(null, e, t, n), t.then(e, e));
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
    return (e.mode & 1) === 0 ? (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = Zt(-1, 1), t.tag = 2, gn(n, t, 1))), n.lanes |= 1), e) : (e.flags |= 65536, e.lanes = o, e);
  }
  var Hm = z.ReactCurrentOwner, it = !1;
  function rt(e, t, n, s) {
    t.child = e === null ? wc(t, null, n, s) : gr(t, e.child, n, s);
  }
  function nd(e, t, n, s, o) {
    n = n.render;
    var u = t.ref;
    return xr(t, o), s = Ca(e, t, n, s, u, o), n = ja(), e !== null && !it ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~o, en(e, t, o)) : (Ae && n && aa(t), t.flags |= 1, rt(e, t, s, o), t.child);
  }
  function rd(e, t, n, s, o) {
    if (e === null) {
      var u = n.type;
      return typeof u == "function" && !ti(u) && u.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = u, sd(e, t, u, s, o)) : (e = Oo(n.type, null, s, t, t.mode, o), e.ref = t.ref, e.return = t, t.child = e);
    }
    if (u = e.child, (e.lanes & o) === 0) {
      var p = u.memoizedProps;
      if (n = n.compare, n = n !== null ? n : os, n(p, s) && e.ref === t.ref) return en(e, t, o);
    }
    return t.flags |= 1, e = Cn(u, s), e.ref = t.ref, e.return = t, t.child = e;
  }
  function sd(e, t, n, s, o) {
    if (e !== null) {
      var u = e.memoizedProps;
      if (os(u, s) && e.ref === t.ref) if (it = !1, t.pendingProps = s = u, (e.lanes & o) !== 0) (e.flags & 131072) !== 0 && (it = !0);
      else return t.lanes = e.lanes, en(e, t, o);
    }
    return La(e, t, n, s, o);
  }
  function od(e, t, n) {
    var s = t.pendingProps, o = s.children, u = e !== null ? e.memoizedState : null;
    if (s.mode === "hidden") if ((t.mode & 1) === 0) t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, Ne(Cr, yt), yt |= n;
    else {
      if ((n & 1073741824) === 0) return e = u !== null ? u.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, Ne(Cr, yt), yt |= e, null;
      t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, s = u !== null ? u.baseLanes : n, Ne(Cr, yt), yt |= s;
    }
    else u !== null ? (s = u.baseLanes | n, t.memoizedState = null) : s = n, Ne(Cr, yt), yt |= s;
    return rt(e, t, o, n), t.child;
  }
  function ld(e, t) {
    var n = t.ref;
    (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
  }
  function La(e, t, n, s, o) {
    var u = at(n) ? bn : Ge.current;
    return u = mr(t, u), xr(t, o), n = Ca(e, t, n, s, u, o), s = ja(), e !== null && !it ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~o, en(e, t, o)) : (Ae && s && aa(t), t.flags |= 1, rt(e, t, n, o), t.child);
  }
  function ad(e, t, n, s, o) {
    if (at(n)) {
      var u = !0;
      uo(t);
    } else u = !1;
    if (xr(t, o), t.stateNode === null) To(e, t), Yc(t, n, s), Aa(t, n, s, o), s = !0;
    else if (e === null) {
      var p = t.stateNode, w = t.memoizedProps;
      p.props = w;
      var j = p.context, M = n.contextType;
      typeof M == "object" && M !== null ? M = St(M) : (M = at(n) ? bn : Ge.current, M = mr(t, M));
      var V = n.getDerivedStateFromProps, q = typeof V == "function" || typeof p.getSnapshotBeforeUpdate == "function";
      q || typeof p.UNSAFE_componentWillReceiveProps != "function" && typeof p.componentWillReceiveProps != "function" || (w !== s || j !== M) && Gc(t, p, s, M), yn = !1;
      var U = t.memoizedState;
      p.state = U, _o(t, s, p, o), j = t.memoizedState, w !== s || U !== j || lt.current || yn ? (typeof V == "function" && (Pa(t, n, V, s), j = t.memoizedState), (w = yn || Kc(t, n, w, s, U, j, M)) ? (q || typeof p.UNSAFE_componentWillMount != "function" && typeof p.componentWillMount != "function" || (typeof p.componentWillMount == "function" && p.componentWillMount(), typeof p.UNSAFE_componentWillMount == "function" && p.UNSAFE_componentWillMount()), typeof p.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof p.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = s, t.memoizedState = j), p.props = s, p.state = j, p.context = M, s = w) : (typeof p.componentDidMount == "function" && (t.flags |= 4194308), s = !1);
    } else {
      p = t.stateNode, kc(e, t), w = t.memoizedProps, M = t.type === t.elementType ? w : $t(t.type, w), p.props = M, q = t.pendingProps, U = p.context, j = n.contextType, typeof j == "object" && j !== null ? j = St(j) : (j = at(n) ? bn : Ge.current, j = mr(t, j));
      var Z = n.getDerivedStateFromProps;
      (V = typeof Z == "function" || typeof p.getSnapshotBeforeUpdate == "function") || typeof p.UNSAFE_componentWillReceiveProps != "function" && typeof p.componentWillReceiveProps != "function" || (w !== q || U !== j) && Gc(t, p, s, j), yn = !1, U = t.memoizedState, p.state = U, _o(t, s, p, o);
      var te = t.memoizedState;
      w !== q || U !== te || lt.current || yn ? (typeof Z == "function" && (Pa(t, n, Z, s), te = t.memoizedState), (M = yn || Kc(t, n, M, s, U, te, j) || !1) ? (V || typeof p.UNSAFE_componentWillUpdate != "function" && typeof p.componentWillUpdate != "function" || (typeof p.componentWillUpdate == "function" && p.componentWillUpdate(s, te, j), typeof p.UNSAFE_componentWillUpdate == "function" && p.UNSAFE_componentWillUpdate(s, te, j)), typeof p.componentDidUpdate == "function" && (t.flags |= 4), typeof p.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof p.componentDidUpdate != "function" || w === e.memoizedProps && U === e.memoizedState || (t.flags |= 4), typeof p.getSnapshotBeforeUpdate != "function" || w === e.memoizedProps && U === e.memoizedState || (t.flags |= 1024), t.memoizedProps = s, t.memoizedState = te), p.props = s, p.state = te, p.context = j, s = M) : (typeof p.componentDidUpdate != "function" || w === e.memoizedProps && U === e.memoizedState || (t.flags |= 4), typeof p.getSnapshotBeforeUpdate != "function" || w === e.memoizedProps && U === e.memoizedState || (t.flags |= 1024), s = !1);
    }
    return Ma(e, t, n, s, u, o);
  }
  function Ma(e, t, n, s, o, u) {
    ld(e, t);
    var p = (t.flags & 128) !== 0;
    if (!s && !p) return o && fc(t, n, !1), en(e, t, u);
    s = t.stateNode, Hm.current = t;
    var w = p && typeof n.getDerivedStateFromError != "function" ? null : s.render();
    return t.flags |= 1, e !== null && p ? (t.child = gr(t, e.child, null, u), t.child = gr(t, null, w, u)) : rt(e, t, w, u), t.memoizedState = s.state, o && fc(t, n, !0), t.child;
  }
  function id(e) {
    var t = e.stateNode;
    t.pendingContext ? cc(e, t.pendingContext, t.pendingContext !== t.context) : t.context && cc(e, t.context, !1), ga(e, t.containerInfo);
  }
  function ud(e, t, n, s, o) {
    return yr(), da(o), t.flags |= 256, rt(e, t, n, s), t.child;
  }
  var Ia = { dehydrated: null, treeContext: null, retryLane: 0 };
  function Da(e) {
    return { baseLanes: e, cachePool: null, transitions: null };
  }
  function cd(e, t, n) {
    var s = t.pendingProps, o = be.current, u = !1, p = (t.flags & 128) !== 0, w;
    if ((w = p) || (w = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0), w ? (u = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (o |= 1), Ne(be, o & 1), e === null)
      return ca(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? ((t.mode & 1) === 0 ? t.lanes = 1 : e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824, null) : (p = s.children, e = s.fallback, u ? (s = t.mode, u = t.child, p = { mode: "hidden", children: p }, (s & 1) === 0 && u !== null ? (u.childLanes = 0, u.pendingProps = p) : u = Fo(p, s, 0, null), e = Bn(e, s, n, null), u.return = t, e.return = t, u.sibling = e, t.child = u, t.child.memoizedState = Da(n), t.memoizedState = Ia, e) : za(t, p));
    if (o = e.memoizedState, o !== null && (w = o.dehydrated, w !== null)) return Um(e, t, p, s, w, o, n);
    if (u) {
      u = s.fallback, p = t.mode, o = e.child, w = o.sibling;
      var j = { mode: "hidden", children: s.children };
      return (p & 1) === 0 && t.child !== o ? (s = t.child, s.childLanes = 0, s.pendingProps = j, t.deletions = null) : (s = Cn(o, j), s.subtreeFlags = o.subtreeFlags & 14680064), w !== null ? u = Cn(w, u) : (u = Bn(u, p, n, null), u.flags |= 2), u.return = t, s.return = t, s.sibling = u, t.child = s, s = u, u = t.child, p = e.child.memoizedState, p = p === null ? Da(n) : { baseLanes: p.baseLanes | n, cachePool: null, transitions: p.transitions }, u.memoizedState = p, u.childLanes = e.childLanes & ~n, t.memoizedState = Ia, s;
    }
    return u = e.child, e = u.sibling, s = Cn(u, { mode: "visible", children: s.children }), (t.mode & 1) === 0 && (s.lanes = n), s.return = t, s.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = s, t.memoizedState = null, s;
  }
  function za(e, t) {
    return t = Fo({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t;
  }
  function No(e, t, n, s) {
    return s !== null && da(s), gr(t, e.child, null, n), e = za(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
  }
  function Um(e, t, n, s, o, u, p) {
    if (n)
      return t.flags & 256 ? (t.flags &= -257, s = $a(Error(i(422))), No(e, t, p, s)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (u = s.fallback, o = t.mode, s = Fo({ mode: "visible", children: s.children }, o, 0, null), u = Bn(u, o, p, null), u.flags |= 2, s.return = t, u.return = t, s.sibling = u, t.child = s, (t.mode & 1) !== 0 && gr(t, e.child, null, p), t.child.memoizedState = Da(p), t.memoizedState = Ia, u);
    if ((t.mode & 1) === 0) return No(e, t, p, null);
    if (o.data === "$!") {
      if (s = o.nextSibling && o.nextSibling.dataset, s) var w = s.dgst;
      return s = w, u = Error(i(419)), s = $a(u, s, void 0), No(e, t, p, s);
    }
    if (w = (p & e.childLanes) !== 0, it || w) {
      if (s = Be, s !== null) {
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
        o = (o & (s.suspendedLanes | p)) !== 0 ? 0 : o, o !== 0 && o !== u.retryLane && (u.retryLane = o, Xt(e, o), Mt(s, e, o, -1));
      }
      return ei(), s = $a(Error(i(421))), No(e, t, p, s);
    }
    return o.data === "$?" ? (t.flags |= 128, t.child = e.child, t = th.bind(null, e), o._reactRetry = t, null) : (e = u.treeContext, vt = pn(o.nextSibling), ht = t, Ae = !0, At = null, e !== null && (xt[wt++] = Gt, xt[wt++] = Jt, xt[wt++] = Ln, Gt = e.id, Jt = e.overflow, Ln = t), t = za(t, s.children), t.flags |= 4096, t);
  }
  function dd(e, t, n) {
    e.lanes |= t;
    var s = e.alternate;
    s !== null && (s.lanes |= t), ha(e.return, t, n);
  }
  function Oa(e, t, n, s, o) {
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
        n = o, n === null ? (o = t.child, t.child = null) : (o = n.sibling, n.sibling = null), Oa(t, !1, o, n, u);
        break;
      case "backwards":
        for (n = null, o = t.child, t.child = null; o !== null; ) {
          if (e = o.alternate, e !== null && xo(e) === null) {
            t.child = o;
            break;
          }
          e = o.sibling, o.sibling = n, n = o, o = e;
        }
        Oa(t, !0, n, null, u);
        break;
      case "together":
        Oa(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
    return t.child;
  }
  function To(e, t) {
    (t.mode & 1) === 0 && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2);
  }
  function en(e, t, n) {
    if (e !== null && (t.dependencies = e.dependencies), On |= t.lanes, (n & t.childLanes) === 0) return null;
    if (e !== null && t.child !== e.child) throw Error(i(153));
    if (t.child !== null) {
      for (e = t.child, n = Cn(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; ) e = e.sibling, n = n.sibling = Cn(e, e.pendingProps), n.return = t;
      n.sibling = null;
    }
    return t.child;
  }
  function Bm(e, t, n) {
    switch (t.tag) {
      case 3:
        id(t), yr();
        break;
      case 5:
        Ec(t);
        break;
      case 1:
        at(t.type) && uo(t);
        break;
      case 4:
        ga(t, t.stateNode.containerInfo);
        break;
      case 10:
        var s = t.type._context, o = t.memoizedProps.value;
        Ne(vo, s._currentValue), s._currentValue = o;
        break;
      case 13:
        if (s = t.memoizedState, s !== null)
          return s.dehydrated !== null ? (Ne(be, be.current & 1), t.flags |= 128, null) : (n & t.child.childLanes) !== 0 ? cd(e, t, n) : (Ne(be, be.current & 1), e = en(e, t, n), e !== null ? e.sibling : null);
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
    return en(e, t, n);
  }
  var pd, Fa, md, hd;
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
  }, Fa = function() {
  }, md = function(e, t, n, s) {
    var o = e.memoizedProps;
    if (o !== s) {
      e = t.stateNode, Dn(Ut.current);
      var u = null;
      switch (n) {
        case "input":
          o = hl(e, o), s = hl(e, s), u = [];
          break;
        case "select":
          o = Y({}, o, { value: void 0 }), s = Y({}, s, { value: void 0 }), u = [];
          break;
        case "textarea":
          o = gl(e, o), s = gl(e, s), u = [];
          break;
        default:
          typeof o.onClick != "function" && typeof s.onClick == "function" && (e.onclick = lo);
      }
      xl(n, s);
      var p;
      n = null;
      for (M in o) if (!s.hasOwnProperty(M) && o.hasOwnProperty(M) && o[M] != null) if (M === "style") {
        var w = o[M];
        for (p in w) w.hasOwnProperty(p) && (n || (n = {}), n[p] = "");
      } else M !== "dangerouslySetInnerHTML" && M !== "children" && M !== "suppressContentEditableWarning" && M !== "suppressHydrationWarning" && M !== "autoFocus" && (d.hasOwnProperty(M) ? u || (u = []) : (u = u || []).push(M, null));
      for (M in s) {
        var j = s[M];
        if (w = o != null ? o[M] : void 0, s.hasOwnProperty(M) && j !== w && (j != null || w != null)) if (M === "style") if (w) {
          for (p in w) !w.hasOwnProperty(p) || j && j.hasOwnProperty(p) || (n || (n = {}), n[p] = "");
          for (p in j) j.hasOwnProperty(p) && w[p] !== j[p] && (n || (n = {}), n[p] = j[p]);
        } else n || (u || (u = []), u.push(
          M,
          n
        )), n = j;
        else M === "dangerouslySetInnerHTML" ? (j = j ? j.__html : void 0, w = w ? w.__html : void 0, j != null && w !== j && (u = u || []).push(M, j)) : M === "children" ? typeof j != "string" && typeof j != "number" || (u = u || []).push(M, "" + j) : M !== "suppressContentEditableWarning" && M !== "suppressHydrationWarning" && (d.hasOwnProperty(M) ? (j != null && M === "onScroll" && Re("scroll", e), u || w === j || (u = [])) : (u = u || []).push(M, j));
      }
      n && (u = u || []).push("style", n);
      var M = u;
      (t.updateQueue = M) && (t.flags |= 4);
    }
  }, hd = function(e, t, n, s) {
    n !== s && (t.flags |= 4);
  };
  function xs(e, t) {
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
  function Wm(e, t, n) {
    var s = t.pendingProps;
    switch (ia(t), t.tag) {
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
        return at(t.type) && io(), Xe(t), null;
      case 3:
        return s = t.stateNode, wr(), Pe(lt), Pe(Ge), wa(), s.pendingContext && (s.context = s.pendingContext, s.pendingContext = null), (e === null || e.child === null) && (mo(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024, At !== null && (Ja(At), At = null))), Fa(e, t), Xe(t), null;
      case 5:
        _a(t);
        var o = Dn(hs.current);
        if (n = t.type, e !== null && t.stateNode != null) md(e, t, n, s, o), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
        else {
          if (!s) {
            if (t.stateNode === null) throw Error(i(166));
            return Xe(t), null;
          }
          if (e = Dn(Ut.current), mo(t)) {
            s = t.stateNode, n = t.type;
            var u = t.memoizedProps;
            switch (s[Ht] = t, s[cs] = u, e = (t.mode & 1) !== 0, n) {
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
                for (o = 0; o < as.length; o++) Re(as[o], s);
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
            xl(n, u), o = null;
            for (var p in u) if (u.hasOwnProperty(p)) {
              var w = u[p];
              p === "children" ? typeof w == "string" ? s.textContent !== w && (u.suppressHydrationWarning !== !0 && oo(s.textContent, w, e), o = ["children", w]) : typeof w == "number" && s.textContent !== "" + w && (u.suppressHydrationWarning !== !0 && oo(
                s.textContent,
                w,
                e
              ), o = ["children", "" + w]) : d.hasOwnProperty(p) && w != null && p === "onScroll" && Re("scroll", s);
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
                typeof u.onClick == "function" && (s.onclick = lo);
            }
            s = o, t.updateQueue = s, s !== null && (t.flags |= 4);
          } else {
            p = o.nodeType === 9 ? o : o.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = tu(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = p.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof s.is == "string" ? e = p.createElement(n, { is: s.is }) : (e = p.createElement(n), n === "select" && (p = e, s.multiple ? p.multiple = !0 : s.size && (p.size = s.size))) : e = p.createElementNS(e, n), e[Ht] = t, e[cs] = s, pd(e, t, !1, !1), t.stateNode = e;
            e: {
              switch (p = wl(n, s), n) {
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
                  for (o = 0; o < as.length; o++) Re(as[o], e);
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
                  Yi(e, s), o = hl(e, s), Re("invalid", e);
                  break;
                case "option":
                  o = s;
                  break;
                case "select":
                  e._wrapperState = { wasMultiple: !!s.multiple }, o = Y({}, s, { value: void 0 }), Re("invalid", e);
                  break;
                case "textarea":
                  Xi(e, s), o = gl(e, s), Re("invalid", e);
                  break;
                default:
                  o = s;
              }
              xl(n, o), w = o;
              for (u in w) if (w.hasOwnProperty(u)) {
                var j = w[u];
                u === "style" ? su(e, j) : u === "dangerouslySetInnerHTML" ? (j = j ? j.__html : void 0, j != null && nu(e, j)) : u === "children" ? typeof j == "string" ? (n !== "textarea" || j !== "") && Ur(e, j) : typeof j == "number" && Ur(e, "" + j) : u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && u !== "autoFocus" && (d.hasOwnProperty(u) ? j != null && u === "onScroll" && Re("scroll", e) : j != null && I(e, u, j, p));
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
                  e.multiple = !!s.multiple, u = s.value, u != null ? nr(e, !!s.multiple, u, !1) : s.defaultValue != null && nr(
                    e,
                    !!s.multiple,
                    s.defaultValue,
                    !0
                  );
                  break;
                default:
                  typeof o.onClick == "function" && (e.onclick = lo);
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
          if (n = Dn(hs.current), Dn(Ut.current), mo(t)) {
            if (s = t.stateNode, n = t.memoizedProps, s[Ht] = t, (u = s.nodeValue !== n) && (e = ht, e !== null)) switch (e.tag) {
              case 3:
                oo(s.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 && oo(s.nodeValue, n, (e.mode & 1) !== 0);
            }
            u && (t.flags |= 4);
          } else s = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(s), s[Ht] = t, t.stateNode = s;
        }
        return Xe(t), null;
      case 13:
        if (Pe(be), s = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
          if (Ae && vt !== null && (t.mode & 1) !== 0 && (t.flags & 128) === 0) gc(), yr(), t.flags |= 98560, u = !1;
          else if (u = mo(t), s !== null && s.dehydrated !== null) {
            if (e === null) {
              if (!u) throw Error(i(318));
              if (u = t.memoizedState, u = u !== null ? u.dehydrated : null, !u) throw Error(i(317));
              u[Ht] = t;
            } else yr(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            Xe(t), u = !1;
          } else At !== null && (Ja(At), At = null), u = !0;
          if (!u) return t.flags & 65536 ? t : null;
        }
        return (t.flags & 128) !== 0 ? (t.lanes = n, t) : (s = s !== null, s !== (e !== null && e.memoizedState !== null) && s && (t.child.flags |= 8192, (t.mode & 1) !== 0 && (e === null || (be.current & 1) !== 0 ? He === 0 && (He = 3) : ei())), t.updateQueue !== null && (t.flags |= 4), Xe(t), null);
      case 4:
        return wr(), Fa(e, t), e === null && is(t.stateNode.containerInfo), Xe(t), null;
      case 10:
        return ma(t.type._context), Xe(t), null;
      case 17:
        return at(t.type) && io(), Xe(t), null;
      case 19:
        if (Pe(be), u = t.memoizedState, u === null) return Xe(t), null;
        if (s = (t.flags & 128) !== 0, p = u.rendering, p === null) if (s) xs(u, !1);
        else {
          if (He !== 0 || e !== null && (e.flags & 128) !== 0) for (e = t.child; e !== null; ) {
            if (p = xo(e), p !== null) {
              for (t.flags |= 128, xs(u, !1), s = p.updateQueue, s !== null && (t.updateQueue = s, t.flags |= 4), t.subtreeFlags = 0, s = n, n = t.child; n !== null; ) u = n, e = s, u.flags &= 14680066, p = u.alternate, p === null ? (u.childLanes = 0, u.lanes = e, u.child = null, u.subtreeFlags = 0, u.memoizedProps = null, u.memoizedState = null, u.updateQueue = null, u.dependencies = null, u.stateNode = null) : (u.childLanes = p.childLanes, u.lanes = p.lanes, u.child = p.child, u.subtreeFlags = 0, u.deletions = null, u.memoizedProps = p.memoizedProps, u.memoizedState = p.memoizedState, u.updateQueue = p.updateQueue, u.type = p.type, e = p.dependencies, u.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), n = n.sibling;
              return Ne(be, be.current & 1 | 2), t.child;
            }
            e = e.sibling;
          }
          u.tail !== null && De() > jr && (t.flags |= 128, s = !0, xs(u, !1), t.lanes = 4194304);
        }
        else {
          if (!s) if (e = xo(p), e !== null) {
            if (t.flags |= 128, s = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), xs(u, !0), u.tail === null && u.tailMode === "hidden" && !p.alternate && !Ae) return Xe(t), null;
          } else 2 * De() - u.renderingStartTime > jr && n !== 1073741824 && (t.flags |= 128, s = !0, xs(u, !1), t.lanes = 4194304);
          u.isBackwards ? (p.sibling = t.child, t.child = p) : (n = u.last, n !== null ? n.sibling = p : t.child = p, u.last = p);
        }
        return u.tail !== null ? (t = u.tail, u.rendering = t, u.tail = t.sibling, u.renderingStartTime = De(), t.sibling = null, n = be.current, Ne(be, s ? n & 1 | 2 : n & 1), t) : (Xe(t), null);
      case 22:
      case 23:
        return Za(), s = t.memoizedState !== null, e !== null && e.memoizedState !== null !== s && (t.flags |= 8192), s && (t.mode & 1) !== 0 ? (yt & 1073741824) !== 0 && (Xe(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : Xe(t), null;
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(i(156, t.tag));
  }
  function Vm(e, t) {
    switch (ia(t), t.tag) {
      case 1:
        return at(t.type) && io(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 3:
        return wr(), Pe(lt), Pe(Ge), wa(), e = t.flags, (e & 65536) !== 0 && (e & 128) === 0 ? (t.flags = e & -65537 | 128, t) : null;
      case 5:
        return _a(t), null;
      case 13:
        if (Pe(be), e = t.memoizedState, e !== null && e.dehydrated !== null) {
          if (t.alternate === null) throw Error(i(340));
          yr();
        }
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 19:
        return Pe(be), null;
      case 4:
        return wr(), null;
      case 10:
        return ma(t.type._context), null;
      case 22:
      case 23:
        return Za(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var Ro = !1, Ze = !1, qm = typeof WeakSet == "function" ? WeakSet : Set, ee = null;
  function kr(e, t) {
    var n = e.ref;
    if (n !== null) if (typeof n == "function") try {
      n(null);
    } catch (s) {
      Me(e, t, s);
    }
    else n.current = null;
  }
  function Ha(e, t, n) {
    try {
      n();
    } catch (s) {
      Me(e, t, s);
    }
  }
  var vd = !1;
  function Qm(e, t) {
    if (Zl = Ks, e = Ku(), Vl(e)) {
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
          var p = 0, w = -1, j = -1, M = 0, V = 0, q = e, U = null;
          t: for (; ; ) {
            for (var Z; q !== n || o !== 0 && q.nodeType !== 3 || (w = p + o), q !== u || s !== 0 && q.nodeType !== 3 || (j = p + s), q.nodeType === 3 && (p += q.nodeValue.length), (Z = q.firstChild) !== null; )
              U = q, q = Z;
            for (; ; ) {
              if (q === e) break t;
              if (U === n && ++M === o && (w = p), U === u && ++V === s && (j = p), (Z = q.nextSibling) !== null) break;
              q = U, U = q.parentNode;
            }
            q = Z;
          }
          n = w === -1 || j === -1 ? null : { start: w, end: j };
        } else n = null;
      }
      n = n || { start: 0, end: 0 };
    } else n = null;
    for (ea = { focusedElem: e, selectionRange: n }, Ks = !1, ee = t; ee !== null; ) if (t = ee, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, ee = e;
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
      } catch (Q) {
        Me(t, t.return, Q);
      }
      if (e = t.sibling, e !== null) {
        e.return = t.return, ee = e;
        break;
      }
      ee = t.return;
    }
    return te = vd, vd = !1, te;
  }
  function ws(e, t, n) {
    var s = t.updateQueue;
    if (s = s !== null ? s.lastEffect : null, s !== null) {
      var o = s = s.next;
      do {
        if ((o.tag & e) === e) {
          var u = o.destroy;
          o.destroy = void 0, u !== void 0 && Ha(t, n, u);
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
  function Ua(e) {
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
    t !== null && (e.alternate = null, yd(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[Ht], delete t[cs], delete t[sa], delete t[Rm], delete t[Pm])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
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
  function Ba(e, t, n) {
    var s = e.tag;
    if (s === 5 || s === 6) e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = lo));
    else if (s !== 4 && (e = e.child, e !== null)) for (Ba(e, t, n), e = e.sibling; e !== null; ) Ba(e, t, n), e = e.sibling;
  }
  function Wa(e, t, n) {
    var s = e.tag;
    if (s === 5 || s === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (s !== 4 && (e = e.child, e !== null)) for (Wa(e, t, n), e = e.sibling; e !== null; ) Wa(e, t, n), e = e.sibling;
  }
  var Qe = null, bt = !1;
  function _n(e, t, n) {
    for (n = n.child; n !== null; ) xd(e, t, n), n = n.sibling;
  }
  function xd(e, t, n) {
    if (Ft && typeof Ft.onCommitFiberUnmount == "function") try {
      Ft.onCommitFiberUnmount(Us, n);
    } catch {
    }
    switch (n.tag) {
      case 5:
        Ze || kr(n, t);
      case 6:
        var s = Qe, o = bt;
        Qe = null, _n(e, t, n), Qe = s, bt = o, Qe !== null && (bt ? (e = Qe, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : Qe.removeChild(n.stateNode));
        break;
      case 18:
        Qe !== null && (bt ? (e = Qe, n = n.stateNode, e.nodeType === 8 ? ra(e.parentNode, n) : e.nodeType === 1 && ra(e, n), Zr(e)) : ra(Qe, n.stateNode));
        break;
      case 4:
        s = Qe, o = bt, Qe = n.stateNode.containerInfo, bt = !0, _n(e, t, n), Qe = s, bt = o;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (!Ze && (s = n.updateQueue, s !== null && (s = s.lastEffect, s !== null))) {
          o = s = s.next;
          do {
            var u = o, p = u.destroy;
            u = u.tag, p !== void 0 && ((u & 2) !== 0 || (u & 4) !== 0) && Ha(n, t, p), o = o.next;
          } while (o !== s);
        }
        _n(e, t, n);
        break;
      case 1:
        if (!Ze && (kr(n, t), s = n.stateNode, typeof s.componentWillUnmount == "function")) try {
          s.props = n.memoizedProps, s.state = n.memoizedState, s.componentWillUnmount();
        } catch (w) {
          Me(n, t, w);
        }
        _n(e, t, n);
        break;
      case 21:
        _n(e, t, n);
        break;
      case 22:
        n.mode & 1 ? (Ze = (s = Ze) || n.memoizedState !== null, _n(e, t, n), Ze = s) : _n(e, t, n);
        break;
      default:
        _n(e, t, n);
    }
  }
  function wd(e) {
    var t = e.updateQueue;
    if (t !== null) {
      e.updateQueue = null;
      var n = e.stateNode;
      n === null && (n = e.stateNode = new qm()), t.forEach(function(s) {
        var o = nh.bind(null, e, s);
        n.has(s) || (n.add(s), s.then(o, o));
      });
    }
  }
  function Lt(e, t) {
    var n = t.deletions;
    if (n !== null) for (var s = 0; s < n.length; s++) {
      var o = n[s];
      try {
        var u = e, p = t, w = p;
        e: for (; w !== null; ) {
          switch (w.tag) {
            case 5:
              Qe = w.stateNode, bt = !1;
              break e;
            case 3:
              Qe = w.stateNode.containerInfo, bt = !0;
              break e;
            case 4:
              Qe = w.stateNode.containerInfo, bt = !0;
              break e;
          }
          w = w.return;
        }
        if (Qe === null) throw Error(i(160));
        xd(u, p, o), Qe = null, bt = !1;
        var j = o.alternate;
        j !== null && (j.return = null), o.return = null;
      } catch (M) {
        Me(o, t, M);
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
        if (Lt(t, e), Wt(e), s & 4) {
          try {
            ws(3, e, e.return), Po(3, e);
          } catch (ne) {
            Me(e, e.return, ne);
          }
          try {
            ws(5, e, e.return);
          } catch (ne) {
            Me(e, e.return, ne);
          }
        }
        break;
      case 1:
        Lt(t, e), Wt(e), s & 512 && n !== null && kr(n, n.return);
        break;
      case 5:
        if (Lt(t, e), Wt(e), s & 512 && n !== null && kr(n, n.return), e.flags & 32) {
          var o = e.stateNode;
          try {
            Ur(o, "");
          } catch (ne) {
            Me(e, e.return, ne);
          }
        }
        if (s & 4 && (o = e.stateNode, o != null)) {
          var u = e.memoizedProps, p = n !== null ? n.memoizedProps : u, w = e.type, j = e.updateQueue;
          if (e.updateQueue = null, j !== null) try {
            w === "input" && u.type === "radio" && u.name != null && Gi(o, u), wl(w, p);
            var M = wl(w, u);
            for (p = 0; p < j.length; p += 2) {
              var V = j[p], q = j[p + 1];
              V === "style" ? su(o, q) : V === "dangerouslySetInnerHTML" ? nu(o, q) : V === "children" ? Ur(o, q) : I(o, V, q, M);
            }
            switch (w) {
              case "input":
                vl(o, u);
                break;
              case "textarea":
                Zi(o, u);
                break;
              case "select":
                var U = o._wrapperState.wasMultiple;
                o._wrapperState.wasMultiple = !!u.multiple;
                var Z = u.value;
                Z != null ? nr(o, !!u.multiple, Z, !1) : U !== !!u.multiple && (u.defaultValue != null ? nr(
                  o,
                  !!u.multiple,
                  u.defaultValue,
                  !0
                ) : nr(o, !!u.multiple, u.multiple ? [] : "", !1));
            }
            o[cs] = u;
          } catch (ne) {
            Me(e, e.return, ne);
          }
        }
        break;
      case 6:
        if (Lt(t, e), Wt(e), s & 4) {
          if (e.stateNode === null) throw Error(i(162));
          o = e.stateNode, u = e.memoizedProps;
          try {
            o.nodeValue = u;
          } catch (ne) {
            Me(e, e.return, ne);
          }
        }
        break;
      case 3:
        if (Lt(t, e), Wt(e), s & 4 && n !== null && n.memoizedState.isDehydrated) try {
          Zr(t.containerInfo);
        } catch (ne) {
          Me(e, e.return, ne);
        }
        break;
      case 4:
        Lt(t, e), Wt(e);
        break;
      case 13:
        Lt(t, e), Wt(e), o = e.child, o.flags & 8192 && (u = o.memoizedState !== null, o.stateNode.isHidden = u, !u || o.alternate !== null && o.alternate.memoizedState !== null || (Qa = De())), s & 4 && wd(e);
        break;
      case 22:
        if (V = n !== null && n.memoizedState !== null, e.mode & 1 ? (Ze = (M = Ze) || V, Lt(t, e), Ze = M) : Lt(t, e), Wt(e), s & 8192) {
          if (M = e.memoizedState !== null, (e.stateNode.isHidden = M) && !V && (e.mode & 1) !== 0) for (ee = e, V = e.child; V !== null; ) {
            for (q = ee = V; ee !== null; ) {
              switch (U = ee, Z = U.child, U.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                  ws(4, U, U.return);
                  break;
                case 1:
                  kr(U, U.return);
                  var te = U.stateNode;
                  if (typeof te.componentWillUnmount == "function") {
                    s = U, n = U.return;
                    try {
                      t = s, te.props = t.memoizedProps, te.state = t.memoizedState, te.componentWillUnmount();
                    } catch (ne) {
                      Me(s, n, ne);
                    }
                  }
                  break;
                case 5:
                  kr(U, U.return);
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
                  o = q.stateNode, M ? (u = o.style, typeof u.setProperty == "function" ? u.setProperty("display", "none", "important") : u.display = "none") : (w = q.stateNode, j = q.memoizedProps.style, p = j != null && j.hasOwnProperty("display") ? j.display : null, w.style.display = ru("display", p));
                } catch (ne) {
                  Me(e, e.return, ne);
                }
              }
            } else if (q.tag === 6) {
              if (V === null) try {
                q.stateNode.nodeValue = M ? "" : q.memoizedProps;
              } catch (ne) {
                Me(e, e.return, ne);
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
        Lt(t, e), Wt(e), s & 4 && wd(e);
        break;
      case 21:
        break;
      default:
        Lt(
          t,
          e
        ), Wt(e);
    }
  }
  function Wt(e) {
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
            s.flags & 32 && (Ur(o, ""), s.flags &= -33);
            var u = _d(e);
            Wa(e, u, o);
            break;
          case 3:
          case 4:
            var p = s.stateNode.containerInfo, w = _d(e);
            Ba(e, w, p);
            break;
          default:
            throw Error(i(161));
        }
      } catch (j) {
        Me(e, e.return, j);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function Km(e, t, n) {
    ee = e, kd(e);
  }
  function kd(e, t, n) {
    for (var s = (e.mode & 1) !== 0; ee !== null; ) {
      var o = ee, u = o.child;
      if (o.tag === 22 && s) {
        var p = o.memoizedState !== null || Ro;
        if (!p) {
          var w = o.alternate, j = w !== null && w.memoizedState !== null || Ze;
          w = Ro;
          var M = Ze;
          if (Ro = p, (Ze = j) && !M) for (ee = o; ee !== null; ) p = ee, j = p.child, p.tag === 22 && p.memoizedState !== null ? Ed(o) : j !== null ? (j.return = p, ee = j) : Ed(o);
          for (; u !== null; ) ee = u, kd(u), u = u.sibling;
          ee = o, Ro = w, Ze = M;
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
              var w = t.stateNode;
              if (n === null && t.flags & 4) {
                n = w;
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
                var M = t.alternate;
                if (M !== null) {
                  var V = M.memoizedState;
                  if (V !== null) {
                    var q = V.dehydrated;
                    q !== null && Zr(q);
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
          Ze || t.flags & 512 && Ua(t);
        } catch (U) {
          Me(t, t.return, U);
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
              Me(t, n, j);
            }
            break;
          case 1:
            var s = t.stateNode;
            if (typeof s.componentDidMount == "function") {
              var o = t.return;
              try {
                s.componentDidMount();
              } catch (j) {
                Me(t, o, j);
              }
            }
            var u = t.return;
            try {
              Ua(t);
            } catch (j) {
              Me(t, u, j);
            }
            break;
          case 5:
            var p = t.return;
            try {
              Ua(t);
            } catch (j) {
              Me(t, p, j);
            }
        }
      } catch (j) {
        Me(t, t.return, j);
      }
      if (t === e) {
        ee = null;
        break;
      }
      var w = t.sibling;
      if (w !== null) {
        w.return = t.return, ee = w;
        break;
      }
      ee = t.return;
    }
  }
  var Ym = Math.ceil, Ao = z.ReactCurrentDispatcher, Va = z.ReactCurrentOwner, Ct = z.ReactCurrentBatchConfig, _e = 0, Be = null, Oe = null, Ke = 0, yt = 0, Cr = mn(0), He = 0, Ss = null, On = 0, $o = 0, qa = 0, ks = null, ut = null, Qa = 0, jr = 1 / 0, tn = null, bo = !1, Ka = null, xn = null, Lo = !1, wn = null, Mo = 0, Cs = 0, Ya = null, Io = -1, Do = 0;
  function st() {
    return (_e & 6) !== 0 ? De() : Io !== -1 ? Io : Io = De();
  }
  function Sn(e) {
    return (e.mode & 1) === 0 ? 1 : (_e & 2) !== 0 && Ke !== 0 ? Ke & -Ke : $m.transition !== null ? (Do === 0 && (Do = _u()), Do) : (e = ke, e !== 0 || (e = window.event, e = e === void 0 ? 16 : Tu(e.type)), e);
  }
  function Mt(e, t, n, s) {
    if (50 < Cs) throw Cs = 0, Ya = null, Error(i(185));
    Kr(e, n, s), ((_e & 2) === 0 || e !== Be) && (e === Be && ((_e & 2) === 0 && ($o |= n), He === 4 && kn(e, Ke)), ct(e, s), n === 1 && _e === 0 && (t.mode & 1) === 0 && (jr = De() + 500, co && vn()));
  }
  function ct(e, t) {
    var n = e.callbackNode;
    $p(e, t);
    var s = Vs(e, e === Be ? Ke : 0);
    if (s === 0) n !== null && vu(n), e.callbackNode = null, e.callbackPriority = 0;
    else if (t = s & -s, e.callbackPriority !== t) {
      if (n != null && vu(n), t === 1) e.tag === 0 ? Am(Td.bind(null, e)) : pc(Td.bind(null, e)), Nm(function() {
        (_e & 6) === 0 && vn();
      }), n = null;
      else {
        switch (xu(s)) {
          case 1:
            n = Tl;
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
        n = Id(n, Nd.bind(null, e));
      }
      e.callbackPriority = t, e.callbackNode = n;
    }
  }
  function Nd(e, t) {
    if (Io = -1, Do = 0, (_e & 6) !== 0) throw Error(i(327));
    var n = e.callbackNode;
    if (Er() && e.callbackNode !== n) return null;
    var s = Vs(e, e === Be ? Ke : 0);
    if (s === 0) return null;
    if ((s & 30) !== 0 || (s & e.expiredLanes) !== 0 || t) t = zo(e, s);
    else {
      t = s;
      var o = _e;
      _e |= 2;
      var u = Pd();
      (Be !== e || Ke !== t) && (tn = null, jr = De() + 500, Hn(e, t));
      do
        try {
          Xm();
          break;
        } catch (w) {
          Rd(e, w);
        }
      while (!0);
      pa(), Ao.current = u, _e = o, Oe !== null ? t = 0 : (Be = null, Ke = 0, t = He);
    }
    if (t !== 0) {
      if (t === 2 && (o = Rl(e), o !== 0 && (s = o, t = Ga(e, o))), t === 1) throw n = Ss, Hn(e, 0), kn(e, s), ct(e, De()), n;
      if (t === 6) kn(e, s);
      else {
        if (o = e.current.alternate, (s & 30) === 0 && !Gm(o) && (t = zo(e, s), t === 2 && (u = Rl(e), u !== 0 && (s = u, t = Ga(e, u))), t === 1)) throw n = Ss, Hn(e, 0), kn(e, s), ct(e, De()), n;
        switch (e.finishedWork = o, e.finishedLanes = s, t) {
          case 0:
          case 1:
            throw Error(i(345));
          case 2:
            Un(e, ut, tn);
            break;
          case 3:
            if (kn(e, s), (s & 130023424) === s && (t = Qa + 500 - De(), 10 < t)) {
              if (Vs(e, 0) !== 0) break;
              if (o = e.suspendedLanes, (o & s) !== s) {
                st(), e.pingedLanes |= e.suspendedLanes & o;
                break;
              }
              e.timeoutHandle = na(Un.bind(null, e, ut, tn), t);
              break;
            }
            Un(e, ut, tn);
            break;
          case 4:
            if (kn(e, s), (s & 4194240) === s) break;
            for (t = e.eventTimes, o = -1; 0 < s; ) {
              var p = 31 - Rt(s);
              u = 1 << p, p = t[p], p > o && (o = p), s &= ~u;
            }
            if (s = o, s = De() - s, s = (120 > s ? 120 : 480 > s ? 480 : 1080 > s ? 1080 : 1920 > s ? 1920 : 3e3 > s ? 3e3 : 4320 > s ? 4320 : 1960 * Ym(s / 1960)) - s, 10 < s) {
              e.timeoutHandle = na(Un.bind(null, e, ut, tn), s);
              break;
            }
            Un(e, ut, tn);
            break;
          case 5:
            Un(e, ut, tn);
            break;
          default:
            throw Error(i(329));
        }
      }
    }
    return ct(e, De()), e.callbackNode === n ? Nd.bind(null, e) : null;
  }
  function Ga(e, t) {
    var n = ks;
    return e.current.memoizedState.isDehydrated && (Hn(e, t).flags |= 256), e = zo(e, t), e !== 2 && (t = ut, ut = n, t !== null && Ja(t)), e;
  }
  function Ja(e) {
    ut === null ? ut = e : ut.push.apply(ut, e);
  }
  function Gm(e) {
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
  function kn(e, t) {
    for (t &= ~qa, t &= ~$o, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
      var n = 31 - Rt(t), s = 1 << n;
      e[n] = -1, t &= ~s;
    }
  }
  function Td(e) {
    if ((_e & 6) !== 0) throw Error(i(327));
    Er();
    var t = Vs(e, 0);
    if ((t & 1) === 0) return ct(e, De()), null;
    var n = zo(e, t);
    if (e.tag !== 0 && n === 2) {
      var s = Rl(e);
      s !== 0 && (t = s, n = Ga(e, s));
    }
    if (n === 1) throw n = Ss, Hn(e, 0), kn(e, t), ct(e, De()), n;
    if (n === 6) throw Error(i(345));
    return e.finishedWork = e.current.alternate, e.finishedLanes = t, Un(e, ut, tn), ct(e, De()), null;
  }
  function Xa(e, t) {
    var n = _e;
    _e |= 1;
    try {
      return e(t);
    } finally {
      _e = n, _e === 0 && (jr = De() + 500, co && vn());
    }
  }
  function Fn(e) {
    wn !== null && wn.tag === 0 && (_e & 6) === 0 && Er();
    var t = _e;
    _e |= 1;
    var n = Ct.transition, s = ke;
    try {
      if (Ct.transition = null, ke = 1, e) return e();
    } finally {
      ke = s, Ct.transition = n, _e = t, (_e & 6) === 0 && vn();
    }
  }
  function Za() {
    yt = Cr.current, Pe(Cr);
  }
  function Hn(e, t) {
    e.finishedWork = null, e.finishedLanes = 0;
    var n = e.timeoutHandle;
    if (n !== -1 && (e.timeoutHandle = -1, Em(n)), Oe !== null) for (n = Oe.return; n !== null; ) {
      var s = n;
      switch (ia(s), s.tag) {
        case 1:
          s = s.type.childContextTypes, s != null && io();
          break;
        case 3:
          wr(), Pe(lt), Pe(Ge), wa();
          break;
        case 5:
          _a(s);
          break;
        case 4:
          wr();
          break;
        case 13:
          Pe(be);
          break;
        case 19:
          Pe(be);
          break;
        case 10:
          ma(s.type._context);
          break;
        case 22:
        case 23:
          Za();
      }
      n = n.return;
    }
    if (Be = e, Oe = e = Cn(e.current, null), Ke = yt = t, He = 0, Ss = null, qa = $o = On = 0, ut = ks = null, In !== null) {
      for (t = 0; t < In.length; t++) if (n = In[t], s = n.interleaved, s !== null) {
        n.interleaved = null;
        var o = s.next, u = n.pending;
        if (u !== null) {
          var p = u.next;
          u.next = o, s.next = p;
        }
        n.pending = s;
      }
      In = null;
    }
    return e;
  }
  function Rd(e, t) {
    do {
      var n = Oe;
      try {
        if (pa(), wo.current = jo, So) {
          for (var s = Le.memoizedState; s !== null; ) {
            var o = s.queue;
            o !== null && (o.pending = null), s = s.next;
          }
          So = !1;
        }
        if (zn = 0, Ue = Fe = Le = null, vs = !1, ys = 0, Va.current = null, n === null || n.return === null) {
          He = 1, Ss = t, Oe = null;
          break;
        }
        e: {
          var u = e, p = n.return, w = n, j = t;
          if (t = Ke, w.flags |= 32768, j !== null && typeof j == "object" && typeof j.then == "function") {
            var M = j, V = w, q = V.tag;
            if ((V.mode & 1) === 0 && (q === 0 || q === 11 || q === 15)) {
              var U = V.alternate;
              U ? (V.updateQueue = U.updateQueue, V.memoizedState = U.memoizedState, V.lanes = U.lanes) : (V.updateQueue = null, V.memoizedState = null);
            }
            var Z = ed(p);
            if (Z !== null) {
              Z.flags &= -257, td(Z, p, w, u, t), Z.mode & 1 && Zc(u, M, t), t = Z, j = M;
              var te = t.updateQueue;
              if (te === null) {
                var ne = /* @__PURE__ */ new Set();
                ne.add(j), t.updateQueue = ne;
              } else te.add(j);
              break e;
            } else {
              if ((t & 1) === 0) {
                Zc(u, M, t), ei();
                break e;
              }
              j = Error(i(426));
            }
          } else if (Ae && w.mode & 1) {
            var ze = ed(p);
            if (ze !== null) {
              (ze.flags & 65536) === 0 && (ze.flags |= 256), td(ze, p, w, u, t), da(Sr(j, w));
              break e;
            }
          }
          u = j = Sr(j, w), He !== 4 && (He = 2), ks === null ? ks = [u] : ks.push(u), u = p;
          do {
            switch (u.tag) {
              case 3:
                u.flags |= 65536, t &= -t, u.lanes |= t;
                var $ = Jc(u, j, t);
                Cc(u, $);
                break e;
              case 1:
                w = j;
                var T = u.type, b = u.stateNode;
                if ((u.flags & 128) === 0 && (typeof T.getDerivedStateFromError == "function" || b !== null && typeof b.componentDidCatch == "function" && (xn === null || !xn.has(b)))) {
                  u.flags |= 65536, t &= -t, u.lanes |= t;
                  var Q = Xc(u, w, t);
                  Cc(u, Q);
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
  function ei() {
    (He === 0 || He === 3 || He === 2) && (He = 4), Be === null || (On & 268435455) === 0 && ($o & 268435455) === 0 || kn(Be, Ke);
  }
  function zo(e, t) {
    var n = _e;
    _e |= 2;
    var s = Pd();
    (Be !== e || Ke !== t) && (tn = null, Hn(e, t));
    do
      try {
        Jm();
        break;
      } catch (o) {
        Rd(e, o);
      }
    while (!0);
    if (pa(), _e = n, Ao.current = s, Oe !== null) throw Error(i(261));
    return Be = null, Ke = 0, He;
  }
  function Jm() {
    for (; Oe !== null; ) Ad(Oe);
  }
  function Xm() {
    for (; Oe !== null && !kp(); ) Ad(Oe);
  }
  function Ad(e) {
    var t = Md(e.alternate, e, yt);
    e.memoizedProps = e.pendingProps, t === null ? $d(e) : Oe = t, Va.current = null;
  }
  function $d(e) {
    var t = e;
    do {
      var n = t.alternate;
      if (e = t.return, (t.flags & 32768) === 0) {
        if (n = Wm(n, t, yt), n !== null) {
          Oe = n;
          return;
        }
      } else {
        if (n = Vm(n, t), n !== null) {
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
  function Un(e, t, n) {
    var s = ke, o = Ct.transition;
    try {
      Ct.transition = null, ke = 1, Zm(e, t, n, s);
    } finally {
      Ct.transition = o, ke = s;
    }
    return null;
  }
  function Zm(e, t, n, s) {
    do
      Er();
    while (wn !== null);
    if ((_e & 6) !== 0) throw Error(i(327));
    n = e.finishedWork;
    var o = e.finishedLanes;
    if (n === null) return null;
    if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(i(177));
    e.callbackNode = null, e.callbackPriority = 0;
    var u = n.lanes | n.childLanes;
    if (bp(e, u), e === Be && (Oe = Be = null, Ke = 0), (n.subtreeFlags & 2064) === 0 && (n.flags & 2064) === 0 || Lo || (Lo = !0, Id(Hs, function() {
      return Er(), null;
    })), u = (n.flags & 15990) !== 0, (n.subtreeFlags & 15990) !== 0 || u) {
      u = Ct.transition, Ct.transition = null;
      var p = ke;
      ke = 1;
      var w = _e;
      _e |= 4, Va.current = null, Qm(e, n), Sd(n, e), _m(ea), Ks = !!Zl, ea = Zl = null, e.current = n, Km(n), Cp(), _e = w, ke = p, Ct.transition = u;
    } else e.current = n;
    if (Lo && (Lo = !1, wn = e, Mo = o), u = e.pendingLanes, u === 0 && (xn = null), Np(n.stateNode), ct(e, De()), t !== null) for (s = e.onRecoverableError, n = 0; n < t.length; n++) o = t[n], s(o.value, { componentStack: o.stack, digest: o.digest });
    if (bo) throw bo = !1, e = Ka, Ka = null, e;
    return (Mo & 1) !== 0 && e.tag !== 0 && Er(), u = e.pendingLanes, (u & 1) !== 0 ? e === Ya ? Cs++ : (Cs = 0, Ya = e) : Cs = 0, vn(), null;
  }
  function Er() {
    if (wn !== null) {
      var e = xu(Mo), t = Ct.transition, n = ke;
      try {
        if (Ct.transition = null, ke = 16 > e ? 16 : e, wn === null) var s = !1;
        else {
          if (e = wn, wn = null, Mo = 0, (_e & 6) !== 0) throw Error(i(331));
          var o = _e;
          for (_e |= 4, ee = e.current; ee !== null; ) {
            var u = ee, p = u.child;
            if ((ee.flags & 16) !== 0) {
              var w = u.deletions;
              if (w !== null) {
                for (var j = 0; j < w.length; j++) {
                  var M = w[j];
                  for (ee = M; ee !== null; ) {
                    var V = ee;
                    switch (V.tag) {
                      case 0:
                      case 11:
                      case 15:
                        ws(8, V, u);
                    }
                    var q = V.child;
                    if (q !== null) q.return = V, ee = q;
                    else for (; ee !== null; ) {
                      V = ee;
                      var U = V.sibling, Z = V.return;
                      if (yd(V), V === M) {
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
                  ws(9, u, u.return);
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
              if (w = ee, (w.flags & 2048) !== 0) try {
                switch (w.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Po(9, w);
                }
              } catch (re) {
                Me(w, w.return, re);
              }
              if (w === p) {
                ee = null;
                break e;
              }
              var Q = w.sibling;
              if (Q !== null) {
                Q.return = w.return, ee = Q;
                break e;
              }
              ee = w.return;
            }
          }
          if (_e = o, vn(), Ft && typeof Ft.onPostCommitFiberRoot == "function") try {
            Ft.onPostCommitFiberRoot(Us, e);
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
    t = Sr(n, t), t = Jc(e, t, 1), e = gn(e, t, 1), t = st(), e !== null && (Kr(e, 1, t), ct(e, t));
  }
  function Me(e, t, n) {
    if (e.tag === 3) bd(e, e, n);
    else for (; t !== null; ) {
      if (t.tag === 3) {
        bd(t, e, n);
        break;
      } else if (t.tag === 1) {
        var s = t.stateNode;
        if (typeof t.type.getDerivedStateFromError == "function" || typeof s.componentDidCatch == "function" && (xn === null || !xn.has(s))) {
          e = Sr(n, e), e = Xc(t, e, 1), t = gn(t, e, 1), e = st(), t !== null && (Kr(t, 1, e), ct(t, e));
          break;
        }
      }
      t = t.return;
    }
  }
  function eh(e, t, n) {
    var s = e.pingCache;
    s !== null && s.delete(t), t = st(), e.pingedLanes |= e.suspendedLanes & n, Be === e && (Ke & n) === n && (He === 4 || He === 3 && (Ke & 130023424) === Ke && 500 > De() - Qa ? Hn(e, 0) : qa |= n), ct(e, t);
  }
  function Ld(e, t) {
    t === 0 && ((e.mode & 1) === 0 ? t = 1 : (t = Ws, Ws <<= 1, (Ws & 130023424) === 0 && (Ws = 4194304)));
    var n = st();
    e = Xt(e, t), e !== null && (Kr(e, t, n), ct(e, n));
  }
  function th(e) {
    var t = e.memoizedState, n = 0;
    t !== null && (n = t.retryLane), Ld(e, n);
  }
  function nh(e, t) {
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
    s !== null && s.delete(t), Ld(e, n);
  }
  var Md;
  Md = function(e, t, n) {
    if (e !== null) if (e.memoizedProps !== t.pendingProps || lt.current) it = !0;
    else {
      if ((e.lanes & n) === 0 && (t.flags & 128) === 0) return it = !1, Bm(e, t, n);
      it = (e.flags & 131072) !== 0;
    }
    else it = !1, Ae && (t.flags & 1048576) !== 0 && mc(t, po, t.index);
    switch (t.lanes = 0, t.tag) {
      case 2:
        var s = t.type;
        To(e, t), e = t.pendingProps;
        var o = mr(t, Ge.current);
        xr(t, n), o = Ca(null, t, s, e, o, n);
        var u = ja();
        return t.flags |= 1, typeof o == "object" && o !== null && typeof o.render == "function" && o.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, at(s) ? (u = !0, uo(t)) : u = !1, t.memoizedState = o.state !== null && o.state !== void 0 ? o.state : null, ya(t), o.updater = Eo, t.stateNode = o, o._reactInternals = t, Aa(t, s, e, n), t = Ma(null, t, s, !0, u, n)) : (t.tag = 0, Ae && u && aa(t), rt(null, t, o, n), t = t.child), t;
      case 16:
        s = t.elementType;
        e: {
          switch (To(e, t), e = t.pendingProps, o = s._init, s = o(s._payload), t.type = s, o = t.tag = sh(s), e = $t(s, e), o) {
            case 0:
              t = La(null, t, s, e, n);
              break e;
            case 1:
              t = ad(null, t, s, e, n);
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
        return s = t.type, o = t.pendingProps, o = t.elementType === s ? o : $t(s, o), La(e, t, s, o, n);
      case 1:
        return s = t.type, o = t.pendingProps, o = t.elementType === s ? o : $t(s, o), ad(e, t, s, o, n);
      case 3:
        e: {
          if (id(t), e === null) throw Error(i(387));
          s = t.pendingProps, u = t.memoizedState, o = u.element, kc(e, t), _o(t, s, null, n);
          var p = t.memoizedState;
          if (s = p.element, u.isDehydrated) if (u = { element: s, isDehydrated: !1, cache: p.cache, pendingSuspenseBoundaries: p.pendingSuspenseBoundaries, transitions: p.transitions }, t.updateQueue.baseState = u, t.memoizedState = u, t.flags & 256) {
            o = Sr(Error(i(423)), t), t = ud(e, t, s, n, o);
            break e;
          } else if (s !== o) {
            o = Sr(Error(i(424)), t), t = ud(e, t, s, n, o);
            break e;
          } else for (vt = pn(t.stateNode.containerInfo.firstChild), ht = t, Ae = !0, At = null, n = wc(t, null, s, n), t.child = n; n; ) n.flags = n.flags & -3 | 4096, n = n.sibling;
          else {
            if (yr(), s === o) {
              t = en(e, t, n);
              break e;
            }
            rt(e, t, s, n);
          }
          t = t.child;
        }
        return t;
      case 5:
        return Ec(t), e === null && ca(t), s = t.type, o = t.pendingProps, u = e !== null ? e.memoizedProps : null, p = o.children, ta(s, o) ? p = null : u !== null && ta(s, u) && (t.flags |= 32), ld(e, t), rt(e, t, p, n), t.child;
      case 6:
        return e === null && ca(t), null;
      case 13:
        return cd(e, t, n);
      case 4:
        return ga(t, t.stateNode.containerInfo), s = t.pendingProps, e === null ? t.child = gr(t, null, s, n) : rt(e, t, s, n), t.child;
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
            if (u.children === o.children && !lt.current) {
              t = en(e, t, n);
              break e;
            }
          } else for (u = t.child, u !== null && (u.return = t); u !== null; ) {
            var w = u.dependencies;
            if (w !== null) {
              p = u.child;
              for (var j = w.firstContext; j !== null; ) {
                if (j.context === s) {
                  if (u.tag === 1) {
                    j = Zt(-1, n & -n), j.tag = 2;
                    var M = u.updateQueue;
                    if (M !== null) {
                      M = M.shared;
                      var V = M.pending;
                      V === null ? j.next = j : (j.next = V.next, V.next = j), M.pending = j;
                    }
                  }
                  u.lanes |= n, j = u.alternate, j !== null && (j.lanes |= n), ha(
                    u.return,
                    n,
                    t
                  ), w.lanes |= n;
                  break;
                }
                j = j.next;
              }
            } else if (u.tag === 10) p = u.type === t.type ? null : u.child;
            else if (u.tag === 18) {
              if (p = u.return, p === null) throw Error(i(341));
              p.lanes |= n, w = p.alternate, w !== null && (w.lanes |= n), ha(p, n, t), p = u.sibling;
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
        return o = t.type, s = t.pendingProps.children, xr(t, n), o = St(o), s = s(o), t.flags |= 1, rt(e, t, s, n), t.child;
      case 14:
        return s = t.type, o = $t(s, t.pendingProps), o = $t(s.type, o), rd(e, t, s, o, n);
      case 15:
        return sd(e, t, t.type, t.pendingProps, n);
      case 17:
        return s = t.type, o = t.pendingProps, o = t.elementType === s ? o : $t(s, o), To(e, t), t.tag = 1, at(s) ? (e = !0, uo(t)) : e = !1, xr(t, n), Yc(t, s, o), Aa(t, s, o, n), Ma(null, t, s, !0, e, n);
      case 19:
        return fd(e, t, n);
      case 22:
        return od(e, t, n);
    }
    throw Error(i(156, t.tag));
  };
  function Id(e, t) {
    return hu(e, t);
  }
  function rh(e, t, n, s) {
    this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = s, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function jt(e, t, n, s) {
    return new rh(e, t, n, s);
  }
  function ti(e) {
    return e = e.prototype, !(!e || !e.isReactComponent);
  }
  function sh(e) {
    if (typeof e == "function") return ti(e) ? 1 : 0;
    if (e != null) {
      if (e = e.$$typeof, e === Te) return 11;
      if (e === ge) return 14;
    }
    return 2;
  }
  function Cn(e, t) {
    var n = e.alternate;
    return n === null ? (n = jt(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n;
  }
  function Oo(e, t, n, s, o, u) {
    var p = 2;
    if (s = e, typeof e == "function") ti(e) && (p = 1);
    else if (typeof e == "string") p = 5;
    else e: switch (e) {
      case J:
        return Bn(n.children, o, u, t);
      case B:
        p = 8, o |= 8;
        break;
      case K:
        return e = jt(12, n, t, o | 2), e.elementType = K, e.lanes = u, e;
      case Ee:
        return e = jt(13, n, t, o), e.elementType = Ee, e.lanes = u, e;
      case he:
        return e = jt(19, n, t, o), e.elementType = he, e.lanes = u, e;
      case H:
        return Fo(n, o, u, t);
      default:
        if (typeof e == "object" && e !== null) switch (e.$$typeof) {
          case pe:
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
  function ni(e, t, n) {
    return e = jt(6, e, null, t), e.lanes = n, e;
  }
  function ri(e, t, n) {
    return t = jt(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
  }
  function oh(e, t, n, s, o) {
    this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Pl(0), this.expirationTimes = Pl(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Pl(0), this.identifierPrefix = s, this.onRecoverableError = o, this.mutableSourceEagerHydrationData = null;
  }
  function si(e, t, n, s, o, u, p, w, j) {
    return e = new oh(e, t, n, w, j), t === 1 ? (t = 1, u === !0 && (t |= 8)) : t = 0, u = jt(3, null, null, t), e.current = u, u.stateNode = e, u.memoizedState = { element: s, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }, ya(u), e;
  }
  function lh(e, t, n) {
    var s = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: L, key: s == null ? null : "" + s, children: e, containerInfo: t, implementation: n };
  }
  function Dd(e) {
    if (!e) return hn;
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
            if (at(t.type)) {
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
      if (at(n)) return dc(e, n, t);
    }
    return t;
  }
  function zd(e, t, n, s, o, u, p, w, j) {
    return e = si(n, s, !0, e, o, u, p, w, j), e.context = Dd(null), n = e.current, s = st(), o = Sn(n), u = Zt(s, o), u.callback = t ?? null, gn(n, u, o), e.current.lanes = o, Kr(e, o, s), ct(e, s), e;
  }
  function Ho(e, t, n, s) {
    var o = t.current, u = st(), p = Sn(o);
    return n = Dd(n), t.context === null ? t.context = n : t.pendingContext = n, t = Zt(u, p), t.payload = { element: e }, s = s === void 0 ? null : s, s !== null && (t.callback = s), e = gn(o, t, p), e !== null && (Mt(e, o, p, u), go(e, o, p)), p;
  }
  function Uo(e) {
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
  function oi(e, t) {
    Od(e, t), (e = e.alternate) && Od(e, t);
  }
  function ah() {
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
      }), t[Kt] = null;
    }
  };
  function Bo(e) {
    this._internalRoot = e;
  }
  Bo.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
      var t = ku();
      e = { blockedOn: null, target: e, priority: t };
      for (var n = 0; n < cn.length && t !== 0 && t < cn[n].priority; n++) ;
      cn.splice(n, 0, e), n === 0 && Eu(e);
    }
  };
  function ai(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
  }
  function Wo(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
  }
  function Hd() {
  }
  function ih(e, t, n, s, o) {
    if (o) {
      if (typeof s == "function") {
        var u = s;
        s = function() {
          var M = Uo(p);
          u.call(M);
        };
      }
      var p = zd(t, s, e, 0, null, !1, !1, "", Hd);
      return e._reactRootContainer = p, e[Kt] = p.current, is(e.nodeType === 8 ? e.parentNode : e), Fn(), p;
    }
    for (; o = e.lastChild; ) e.removeChild(o);
    if (typeof s == "function") {
      var w = s;
      s = function() {
        var M = Uo(j);
        w.call(M);
      };
    }
    var j = si(e, 0, !1, null, null, !1, !1, "", Hd);
    return e._reactRootContainer = j, e[Kt] = j.current, is(e.nodeType === 8 ? e.parentNode : e), Fn(function() {
      Ho(t, j, n, s);
    }), j;
  }
  function Vo(e, t, n, s, o) {
    var u = n._reactRootContainer;
    if (u) {
      var p = u;
      if (typeof o == "function") {
        var w = o;
        o = function() {
          var j = Uo(p);
          w.call(j);
        };
      }
      Ho(t, p, e, o);
    } else p = ih(n, t, e, o, s);
    return Uo(p);
  }
  wu = function(e) {
    switch (e.tag) {
      case 3:
        var t = e.stateNode;
        if (t.current.memoizedState.isDehydrated) {
          var n = Qr(t.pendingLanes);
          n !== 0 && (Al(t, n | 1), ct(t, De()), (_e & 6) === 0 && (jr = De() + 500, vn()));
        }
        break;
      case 13:
        Fn(function() {
          var s = Xt(e, 1);
          if (s !== null) {
            var o = st();
            Mt(s, e, 1, o);
          }
        }), oi(e, 1);
    }
  }, $l = function(e) {
    if (e.tag === 13) {
      var t = Xt(e, 134217728);
      if (t !== null) {
        var n = st();
        Mt(t, e, 134217728, n);
      }
      oi(e, 134217728);
    }
  }, Su = function(e) {
    if (e.tag === 13) {
      var t = Sn(e), n = Xt(e, t);
      if (n !== null) {
        var s = st();
        Mt(n, e, t, s);
      }
      oi(e, t);
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
  }, Cl = function(e, t, n) {
    switch (t) {
      case "input":
        if (vl(e, n), t = n.name, n.type === "radio" && t != null) {
          for (n = e; n.parentNode; ) n = n.parentNode;
          for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
            var s = n[t];
            if (s !== e && s.form === e.form) {
              var o = ao(s);
              if (!o) throw Error(i(90));
              Fr(s), vl(s, o);
            }
          }
        }
        break;
      case "textarea":
        Zi(e, n);
        break;
      case "select":
        t = n.value, t != null && nr(e, !!n.multiple, t, !1);
    }
  }, iu = Xa, uu = Fn;
  var uh = { usingClientEntryPoint: !1, Events: [ds, fr, ao, lu, au, Xa] }, js = { findFiberByHostInstance: $n, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, ch = { bundleType: js.bundleType, version: js.version, rendererPackageName: js.rendererPackageName, rendererConfig: js.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: z.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
    return e = pu(e), e === null ? null : e.stateNode;
  }, findFiberByHostInstance: js.findFiberByHostInstance || ah, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var qo = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!qo.isDisabled && qo.supportsFiber) try {
      Us = qo.inject(ch), Ft = qo;
    } catch {
    }
  }
  return dt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = uh, dt.createPortal = function(e, t) {
    var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!ai(t)) throw Error(i(200));
    return lh(e, t, null, n);
  }, dt.createRoot = function(e, t) {
    if (!ai(e)) throw Error(i(299));
    var n = !1, s = "", o = Fd;
    return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (s = t.identifierPrefix), t.onRecoverableError !== void 0 && (o = t.onRecoverableError)), t = si(e, 1, !1, null, null, n, !1, s, o), e[Kt] = t.current, is(e.nodeType === 8 ? e.parentNode : e), new li(t);
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
    if (!Wo(t)) throw Error(i(200));
    return Vo(null, e, t, !0, n);
  }, dt.hydrateRoot = function(e, t, n) {
    if (!ai(e)) throw Error(i(405));
    var s = n != null && n.hydratedSources || null, o = !1, u = "", p = Fd;
    if (n != null && (n.unstable_strictMode === !0 && (o = !0), n.identifierPrefix !== void 0 && (u = n.identifierPrefix), n.onRecoverableError !== void 0 && (p = n.onRecoverableError)), t = zd(t, null, e, 1, n ?? null, o, !1, u, p), e[Kt] = t.current, is(e), s) for (e = 0; e < s.length; e++) n = s[e], o = n._getVersion, o = o(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, o] : t.mutableSourceEagerHydrationData.push(
      n,
      o
    );
    return new Bo(t);
  }, dt.render = function(e, t, n) {
    if (!Wo(t)) throw Error(i(200));
    return Vo(null, e, t, !1, n);
  }, dt.unmountComponentAtNode = function(e) {
    if (!Wo(e)) throw Error(i(40));
    return e._reactRootContainer ? (Fn(function() {
      Vo(null, null, e, !1, function() {
        e._reactRootContainer = null, e[Kt] = null;
      });
    }), !0) : !1;
  }, dt.unstable_batchedUpdates = Xa, dt.unstable_renderSubtreeIntoContainer = function(e, t, n, s) {
    if (!Wo(n)) throw Error(i(200));
    if (e == null || e._reactInternals === void 0) throw Error(i(38));
    return Vo(e, t, n, !1, s);
  }, dt.version = "18.3.1-next-f1338f8080-20240426", dt;
}
var Yd;
function Cf() {
  if (Yd) return ci.exports;
  Yd = 1;
  function r() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r);
      } catch (l) {
        console.error(l);
      }
  }
  return r(), ci.exports = _h(), ci.exports;
}
var Gd;
function xh() {
  if (Gd) return Qo;
  Gd = 1;
  var r = Cf();
  return Qo.createRoot = r.createRoot, Qo.hydrateRoot = r.hydrateRoot, Qo;
}
var wh = xh();
const Sh = /* @__PURE__ */ Sf(wh), kh = { ru: "Тема", en: "Theme" }, Ch = { ru: "Тёмная", en: "Dark" }, jh = { ru: "Светлая", en: "Light" }, Eh = { ru: "Токен", en: "Token" }, Nh = { ru: "Тип действия", en: "Action type" }, Th = { ru: "Ветка диалога", en: "Conversation branch" }, Rh = { ru: "Текст ответа", en: "Response text" }, Ph = { ru: "Команда", en: "Command" }, Ah = { ru: "Название переменной", en: "Variable name" }, $h = { ru: "Основная команда", en: "Main command" }, bh = { ru: "Второстепенная команда", en: "Secondary command" }, Lh = { ru: "Прямая команда", en: "Direct command" }, Mh = { ru: "Дополнительные фразы", en: "Additional phrases" }, Ih = { ru: "Удалённый сервер", en: "Remote server" }, Dh = { ru: "Вложенные команды", en: "Nested commands" }, zh = { ru: "Тип вложенного значения", en: "Nested value type" }, Oh = { ru: "Тип данных", en: "Data type" }, Fh = { ru: "Вручную", en: "Manual" }, Hh = { ru: "Любой", en: "Any" }, Uh = { ru: "Любой", en: "Any" }, Bh = { ru: "Текст", en: "Text" }, Wh = { ru: "Число", en: "Number" }, Vh = { ru: "Дата", en: "Date" }, qh = { ru: "Время", en: "Time" }, Qh = {
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
  Theme: kh,
  dark: Ch,
  light: jh,
  "Client ID": { ru: "Идентификатор клиента", en: "Client ID" },
  "Is admin": { ru: "Администратор", en: "Administrator" },
  "Active remout": { ru: "Удалённый сервер", en: "Remote server" },
  "Enable API (/api/dialog/commands, /api/dialog/events, /api/dialog/event)": { ru: "Включить API (/api/dialog/commands, /api/dialog/events, /api/dialog/event)", en: "Enable API (/api/dialog/commands, /api/dialog/events, /api/dialog/event)" },
  "API Commands Token": { ru: "Токен API команд", en: "Commands API token" },
  "Global music timer": { ru: "Звук таймера по умолчанию", en: "Default timer sound" },
  "Global music alarm": { ru: "Звук будильника по умолчанию", en: "Default alarm sound" },
  "Timer / Alarm": { ru: "Таймеры и будильники", en: "Timers and alarms" },
  "Base URL": { ru: "Адрес сервера", en: "Server URL" },
  Token: Eh,
  actionType: Nh,
  actionTypeComponent: Th,
  voiceResponse: Rh,
  uuid: Ph,
  mappingType: Ah,
  parent_type: $h,
  children_type: bh,
  children_direct_type: Lh,
  "Язык интерфейса": { ru: "Язык интерфейса", en: "Interface language" },
  subVoiceCommands: Mh,
  "Hide password": { ru: "Скрыть пароль", en: "Hide password" },
  "Show password": { ru: "Показать пароль", en: "Show password" },
  Условие: { ru: "Условие", en: "Condition" },
  Remote: Ih,
  subDirectControl: Dh,
  subMappingType: zh,
  valueType: Oh,
  manual: Fh,
  "mappingType:": { ru: "Тип значения:", en: "Value type:" },
  "Редактировать прямую команду": { ru: "Редактировать прямую команду", en: "Edit direct command" },
  "Создать прямую команду": { ru: "Создать прямую команду", en: "Create direct command" },
  all: Hh,
  All: Uh,
  string: Bh,
  int: Wh,
  date: Vh,
  time: qh,
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
  "Тело ответа": { ru: "Тело ответа", en: "Response body" }
}, jf = "ha-dialog-ui-language";
let bi = localStorage.getItem(jf) === "en" ? "en" : "ru";
const Si = /* @__PURE__ */ new Set();
function Kh(r) {
  bi = r, localStorage.setItem(jf, r), Si.forEach((l) => l());
}
function Ef() {
  return v.useSyncExternalStore((r) => (Si.add(r), () => {
    Si.delete(r);
  }), () => bi);
}
function k(r) {
  if (typeof r != "string") return r;
  const l = Qh[r];
  return (l == null ? void 0 : l[bi]) ?? r;
}
const Yh = "_button_180pj_1", Gh = "_full_180pj_32", Jh = "_primary_180pj_37", Xh = "_secondary_180pj_49", Zh = "_ghost_180pj_61", ev = "_remove_180pj_83", pi = {
  button: Yh,
  full: Gh,
  primary: Jh,
  secondary: Xh,
  ghost: Zh,
  remove: ev
}, ae = ({
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
class tv extends v.Component {
  constructor() {
    super(...arguments);
    En(this, "state", { failed: !1 });
  }
  static getDerivedStateFromError() {
    return { failed: !0 };
  }
  componentDidCatch(i, c) {
    console.error("[ha_dialog_ui] Panel render failed", i, c.componentStack);
  }
  render() {
    return this.state.failed ? /* @__PURE__ */ a.jsxs("div", { role: "alert", className: "appShell panelRecovery", "data-theme": localStorage.getItem("ha-dialog-ui-theme") || "dark", children: [
      /* @__PURE__ */ a.jsx("p", { children: k("Не удалось открыть панель. Попробуйте ещё раз.") }),
      /* @__PURE__ */ a.jsx(ae, { onClick: () => this.setState({ failed: !1 }), children: k("Открыть повторно") })
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
function nv(r = {}) {
  function l(d, f) {
    let {
      pathname: m = "/",
      search: h = "",
      hash: g = ""
    } = er(d.location.hash.substring(1));
    return !m.startsWith("/") && !m.startsWith(".") && (m = "/" + m), ki(
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
  return sv(
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
function rv() {
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
function ki(r, l, i = null, c, d) {
  return {
    pathname: typeof r == "string" ? r : r.pathname,
    search: "",
    hash: "",
    ...typeof l == "string" ? er(l) : l,
    state: i,
    // TODO: This could be cleaned up.  push/replace should probably just take
    // full Locations now and avoid the need to run through this flow at all
    // But that's a pretty big refactor to the current test suite so going to
    // keep as is for the time being and just let any incoming keys take precedence
    key: l && l.key || c || rv(),
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
function er(r) {
  let l = {};
  if (r) {
    let i = r.indexOf("#");
    i >= 0 && (l.hash = r.substring(i), r = r.substring(0, i));
    let c = r.indexOf("?");
    c >= 0 && (l.search = r.substring(c), r = r.substring(0, c)), r && (l.pathname = r);
  }
  return l;
}
function sv(r, l, i, c = {}) {
  let { window: d = document.defaultView, v5Compat: f = !1 } = c, m = d.history, h = "POP", g = null, x = y();
  x == null && (x = 0, m.replaceState({ ...m.state, idx: x }, ""));
  function y() {
    return (m.state || { idx: null }).idx;
  }
  function _() {
    h = "POP";
    let E = y(), A = E == null ? null : E - x;
    x = E, g && g({ action: h, location: N.location, delta: A });
  }
  function S(E, A) {
    h = "PUSH";
    let O = Xd(E) ? E : ki(N.location, E, A);
    i && i(O, E), x = y() + 1;
    let I = Zd(O, x), z = N.createHref(O.mask || O);
    try {
      m.pushState(I, "", z);
    } catch (W) {
      if (W instanceof DOMException && W.name === "DataCloneError")
        throw W;
      d.location.assign(z);
    }
    f && g && g({ action: h, location: N.location, delta: 1 });
  }
  function C(E, A) {
    h = "REPLACE";
    let O = Xd(E) ? E : ki(N.location, E, A);
    i && i(O, E), x = y();
    let I = Zd(O, x), z = N.createHref(O.mask || O);
    m.replaceState(I, "", z), f && g && g({ action: h, location: N.location, delta: 0 });
  }
  function P(E) {
    return ov(d, E);
  }
  let N = {
    get action() {
      return h;
    },
    get location() {
      return r(d, m);
    },
    listen(E) {
      if (g)
        throw new Error("A history only accepts one active listener");
      return d.addEventListener(Jd, _), g = E, () => {
        d.removeEventListener(Jd, _), g = null;
      };
    },
    createHref(E) {
      return l(d, E);
    },
    createURL: P,
    encodeLocation(E) {
      let A = P(E);
      return {
        pathname: A.pathname,
        search: A.search,
        hash: A.hash
      };
    },
    push: S,
    replace: C,
    go(E) {
      return m.go(E);
    }
  };
  return N;
}
function ov(r, l, i = !1) {
  let c = "http://localhost";
  r && (c = r.location.origin !== "null" ? r.location.origin : r.location.href), $e(c, "No window.location.(origin|href) available to create URL");
  let d = typeof l == "string" ? l : Ls(l);
  return d = d.replace(/ $/, "%20"), !i && d.startsWith("//") && (d = c + d), new URL(d, c);
}
function Nf(r, l, i = "/") {
  return lv(r, l, i, !1);
}
function lv(r, l, i, c, d) {
  let f = typeof l == "string" ? er(l) : l, m = sn(f.pathname || "/", i);
  if (m == null)
    return null;
  let h = av(r), g = null, x = _v(m);
  for (let y = 0; g == null && y < h.length; ++y)
    g = yv(
      h[y],
      x,
      c
    );
  return g;
}
function av(r) {
  let l = Tf(r);
  return iv(l), l;
}
function Tf(r, l = [], i = [], c = "", d = !1) {
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
    ), Tf(
      m.children,
      l,
      S,
      _,
      g
    )), !(m.path == null && !m.index) && l.push({
      path: _,
      score: hv(_, m.index),
      routesMeta: S
    });
  };
  return r.forEach((m, h) => {
    var g;
    if (m.path === "" || !((g = m.path) != null && g.includes("?")))
      f(m, h);
    else
      for (let x of Rf(m.path))
        f(m, h, !0, x);
  }), l;
}
function Rf(r) {
  let l = r.split("/");
  if (l.length === 0) return [];
  let [i, ...c] = l, d = i.endsWith("?"), f = i.replace(/\?$/, "");
  if (c.length === 0)
    return d ? [f, ""] : [f];
  let m = Rf(c.join("/")), h = [];
  return h.push(
    ...m.map(
      (g) => g === "" ? f : [f, g].join("/")
    )
  ), d && h.push(...m), h.map(
    (g) => r.startsWith("/") && g === "" ? "/" : g
  );
}
function iv(r) {
  r.sort(
    (l, i) => l.score !== i.score ? i.score - l.score : vv(
      l.routesMeta.map((c) => c.childrenIndex),
      i.routesMeta.map((c) => c.childrenIndex)
    )
  );
}
var uv = /^:[\w-]+$/, cv = 3, dv = 2, fv = 1, pv = 10, mv = -2, ef = (r) => r === "*";
function hv(r, l) {
  let i = r.split("/"), c = i.length;
  return i.some(ef) && (c += mv), l && (c += dv), i.filter((d) => !ef(d)).reduce(
    (d, f) => d + (uv.test(f) ? cv : f === "" ? fv : pv),
    c
  );
}
function vv(r, l) {
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
function yv(r, l, i = !1) {
  let { routesMeta: c } = r, d = {}, f = "/", m = [];
  for (let h = 0; h < c.length; ++h) {
    let g = c[h], x = h === c.length - 1, y = f === "/" ? l : l.slice(f.length) || "/", _ = nl(
      { path: g.relativePath, caseSensitive: g.caseSensitive, end: x },
      y
    ), S = g.route;
    if (!_ && x && i && !c[c.length - 1].route.index && (_ = nl(
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
      pathnameBase: kv(
        Dt([f, _.pathnameBase])
      ),
      route: S
    }), _.pathnameBase !== "/" && (f = Dt([f, _.pathnameBase]));
  }
  return m;
}
function nl(r, l) {
  typeof r == "string" && (r = { path: r, caseSensitive: !1, end: !0 });
  let [i, c] = gv(
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
          let P = h[S] || "";
          m = f.slice(0, f.length - P.length).replace(/(.)\/+$/, "$1");
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
function gv(r, l = !1, i = !0) {
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
function _v(r) {
  try {
    return r.split("/").map((l) => decodeURIComponent(l).replace(/\//g, "%2F")).join("/");
  } catch (l) {
    return Tt(
      !1,
      `The URL path "${r}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${l}).`
    ), r;
  }
}
function sn(r, l) {
  if (l === "/") return r;
  if (!r.toLowerCase().startsWith(l.toLowerCase()))
    return null;
  let i = l.endsWith("/") ? l.length - 1 : l.length, c = r.charAt(i);
  return c && c !== "/" ? null : r.slice(i) || "/";
}
var xv = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;
function wv(r, l = "/") {
  let {
    pathname: i,
    search: c = "",
    hash: d = ""
  } = typeof r == "string" ? er(r) : r, f;
  return i ? (i = Pf(i), i.startsWith("/") ? f = tf(i.substring(1), "/") : f = tf(i, l)) : f = l, {
    pathname: f,
    search: Cv(c),
    hash: jv(d)
  };
}
function tf(r, l) {
  let i = rl(l).split("/");
  return r.split("/").forEach((d) => {
    d === ".." ? i.length > 1 && i.pop() : d !== "." && i.push(d);
  }), i.length > 1 ? i.join("/") : "/";
}
function mi(r, l, i, c) {
  return `Cannot include a '${r}' character in a manually specified \`to.${l}\` field [${JSON.stringify(
    c
  )}].  Please separate it out to the \`to.${i}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`;
}
function Sv(r) {
  return r.filter(
    (l, i) => i === 0 || l.route.path && l.route.path.length > 0
  );
}
function Li(r) {
  let l = Sv(r);
  return l.map(
    (i, c) => c === l.length - 1 ? i.pathname : i.pathnameBase
  );
}
function ul(r, l, i, c = !1) {
  let d;
  typeof r == "string" ? d = er(r) : (d = { ...r }, $e(
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
  let g = wv(d, h), x = m && m !== "/" && m.endsWith("/"), y = (f || m === ".") && i.endsWith("/");
  return !g.pathname.endsWith("/") && (x || y) && (g.pathname += "/"), g;
}
var Pf = (r) => r.replace(/\/\/+/g, "/"), Dt = (r) => Pf(r.join("/")), rl = (r) => r.replace(/\/+$/, ""), kv = (r) => rl(r).replace(/^\/*/, "/"), Cv = (r) => !r || r === "?" ? "" : r.startsWith("?") ? r : "?" + r, jv = (r) => !r || r === "#" ? "" : r.startsWith("#") ? r : "#" + r, Ev = class {
  constructor(r, l, i, c = !1) {
    this.status = r, this.statusText = l || "", this.internal = c, i instanceof Error ? (this.data = i.toString(), this.error = i) : this.data = i;
  }
};
function Nv(r) {
  return r != null && typeof r.status == "number" && typeof r.statusText == "string" && typeof r.internal == "boolean" && "data" in r;
}
function Tv(r) {
  let l = r.map((i) => i.route.path).filter(Boolean);
  return Dt(l) || "/";
}
var Af = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u";
function $f(r, l) {
  let i = r;
  if (typeof i != "string" || !xv.test(i))
    return {
      absoluteURL: void 0,
      isExternal: !1,
      to: i
    };
  let c = i, d = !1;
  if (Af)
    try {
      let f = new URL(window.location.href), m = i.startsWith("//") ? new URL(f.protocol + i) : new URL(i), h = sn(m.pathname, l);
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
var bf = [
  "POST",
  "PUT",
  "PATCH",
  "DELETE"
];
new Set(
  bf
);
var Rv = [
  "GET",
  ...bf
];
new Set(Rv);
var $r = v.createContext(null);
$r.displayName = "DataRouter";
var cl = v.createContext(null);
cl.displayName = "DataRouterState";
var Lf = v.createContext(!1);
function Pv() {
  return v.useContext(Lf);
}
var Mf = v.createContext({
  isTransitioning: !1
});
Mf.displayName = "ViewTransition";
var Av = v.createContext(
  /* @__PURE__ */ new Map()
);
Av.displayName = "Fetchers";
var $v = v.createContext(null);
$v.displayName = "Await";
var gt = v.createContext(
  null
);
gt.displayName = "Navigation";
var Ms = v.createContext(
  null
);
Ms.displayName = "Location";
var Qt = v.createContext({
  outlet: null,
  matches: [],
  isDataRoute: !1
});
Qt.displayName = "Route";
var Mi = v.createContext(null);
Mi.displayName = "RouteError";
var If = "REACT_ROUTER_ERROR", bv = "REDIRECT", Lv = "ROUTE_ERROR_RESPONSE";
function Mv(r) {
  if (r.startsWith(`${If}:${bv}:{`))
    try {
      let l = JSON.parse(r.slice(28));
      if (typeof l == "object" && l && typeof l.status == "number" && typeof l.statusText == "string" && typeof l.location == "string" && typeof l.reloadDocument == "boolean" && typeof l.replace == "boolean")
        return l;
    } catch {
    }
}
function Iv(r) {
  if (r.startsWith(
    `${If}:${Lv}:{`
  ))
    try {
      let l = JSON.parse(r.slice(40));
      if (typeof l == "object" && l && typeof l.status == "number" && typeof l.statusText == "string")
        return new Ev(
          l.status,
          l.statusText,
          l.data
        );
    } catch {
    }
}
function Dv(r, { relative: l } = {}) {
  $e(
    br(),
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useHref() may be used only in the context of a <Router> component."
  );
  let { basename: i, navigator: c } = v.useContext(gt), { hash: d, pathname: f, search: m } = Is(r, { relative: l }), h = f;
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
var Df = "You should call navigate() in a React.useEffect(), not when your component is first rendered.";
function zf(r) {
  v.useContext(gt).static || v.useLayoutEffect(r);
}
function Ii() {
  let { isDataRoute: r } = v.useContext(Qt);
  return r ? Gv() : zv();
}
function zv() {
  $e(
    br(),
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useNavigate() may be used only in the context of a <Router> component."
  );
  let r = v.useContext($r), { basename: l, navigator: i } = v.useContext(gt), { matches: c } = v.useContext(Qt), { pathname: d } = pt(), f = JSON.stringify(Li(c)), m = v.useRef(!1);
  return zf(() => {
    m.current = !0;
  }), v.useCallback(
    (g, x = {}) => {
      if (Tt(m.current, Df), !m.current) return;
      if (typeof g == "number") {
        i.go(g);
        return;
      }
      let y = ul(
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
function Is(r, { relative: l } = {}) {
  let { matches: i } = v.useContext(Qt), { pathname: c } = pt(), d = JSON.stringify(Li(i));
  return v.useMemo(
    () => ul(
      r,
      JSON.parse(d),
      c,
      l === "path"
    ),
    [r, d, c, l]
  );
}
function Ov(r, l) {
  return Of(r, l);
}
function Of(r, l, i) {
  var E;
  $e(
    br(),
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useRoutes() may be used only in the context of a <Router> component."
  );
  let { navigator: c } = v.useContext(gt), { matches: d } = v.useContext(Qt), f = d[d.length - 1], m = f ? f.params : {}, h = f ? f.pathname : "/", g = f ? f.pathnameBase : "/", x = f && f.route;
  {
    let A = x && x.path || "";
    Hf(
      h,
      !x || A.endsWith("*") || A.endsWith("*?"),
      `You rendered descendant <Routes> (or called \`useRoutes()\`) at "${h}" (under <Route path="${A}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${A}"> to <Route path="${A === "/" ? "*" : `${A}/*`}">.`
    );
  }
  let y = pt(), _;
  if (l) {
    let A = typeof l == "string" ? er(l) : l;
    $e(
      g === "/" || ((E = A.pathname) == null ? void 0 : E.startsWith(g)),
      `When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${g}" but pathname "${A.pathname}" was given in the \`location\` prop.`
    ), _ = A;
  } else
    _ = y;
  let S = _.pathname || "/", C = S;
  if (g !== "/") {
    let A = g.replace(/^\//, "").split("/");
    C = "/" + S.replace(/^\//, "").split("/").slice(A.length).join("/");
  }
  let P = i && i.state.matches.length ? (
    // If we're in a data router, use the matches we've already identified but ensure
    // we have the latest route instances from the manifest in case elements have changed
    i.state.matches.map(
      (A) => Object.assign(A, {
        route: i.manifest[A.route.id] || A.route
      })
    )
  ) : Nf(r, { pathname: C });
  Tt(
    x || P != null,
    `No routes matched location "${_.pathname}${_.search}${_.hash}" `
  ), Tt(
    P == null || P[P.length - 1].route.element !== void 0 || P[P.length - 1].route.Component !== void 0 || P[P.length - 1].route.lazy !== void 0,
    `Matched leaf route at location "${_.pathname}${_.search}${_.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`
  );
  let N = Wv(
    P && P.map(
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
  return l && N ? /* @__PURE__ */ v.createElement(
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
    N
  ) : N;
}
function Fv() {
  let r = Yv(), l = Nv(r) ? `${r.status} ${r.statusText}` : r instanceof Error ? r.message : JSON.stringify(r), i = r instanceof Error ? r.stack : null, c = "rgba(200,200,200, 0.5)", d = { padding: "0.5rem", backgroundColor: c }, f = { padding: "2px 4px", backgroundColor: c }, m = null;
  return console.error(
    "Error handled by React Router default ErrorBoundary:",
    r
  ), m = /* @__PURE__ */ v.createElement(v.Fragment, null, /* @__PURE__ */ v.createElement("p", null, "💿 Hey developer 👋"), /* @__PURE__ */ v.createElement("p", null, "You can provide a way better UX than this when your app throws errors by providing your own ", /* @__PURE__ */ v.createElement("code", { style: f }, "ErrorBoundary"), " or", " ", /* @__PURE__ */ v.createElement("code", { style: f }, "errorElement"), " prop on your route.")), /* @__PURE__ */ v.createElement(v.Fragment, null, /* @__PURE__ */ v.createElement("h2", null, "Unexpected Application Error!"), /* @__PURE__ */ v.createElement("h3", { style: { fontStyle: "italic" } }, l), i ? /* @__PURE__ */ v.createElement("pre", { style: d }, i) : null, m);
}
var Hv = /* @__PURE__ */ v.createElement(Fv, null), Ff = class extends v.Component {
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
      const i = Iv(r.digest);
      i && (r = i);
    }
    let l = r !== void 0 ? /* @__PURE__ */ v.createElement(Qt.Provider, { value: this.props.routeContext }, /* @__PURE__ */ v.createElement(
      Mi.Provider,
      {
        value: r,
        children: this.props.component
      }
    )) : this.props.children;
    return this.context ? /* @__PURE__ */ v.createElement(Uv, { error: r }, l) : l;
  }
};
Ff.contextType = Lf;
var hi = /* @__PURE__ */ new WeakMap();
function Uv({
  children: r,
  error: l
}) {
  let { basename: i } = v.useContext(gt);
  if (typeof l == "object" && l && "digest" in l && typeof l.digest == "string") {
    let c = Mv(l.digest);
    if (c) {
      let d = hi.get(l);
      if (d) throw d;
      let f = $f(c.location, i);
      if (Af && !hi.get(l))
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
function Bv({ routeContext: r, match: l, children: i }) {
  let c = v.useContext($r);
  return c && c.static && c.staticContext && (l.route.errorElement || l.route.ErrorBoundary) && (c.staticContext._deepestRenderedBoundaryId = l.route.id), /* @__PURE__ */ v.createElement(Qt.Provider, { value: r }, i);
}
function Wv(r, l = [], i) {
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
        let { loaderData: S, errors: C } = c, P = _.route.loader && !S.hasOwnProperty(_.route.id) && (!C || C[_.route.id] === void 0);
        if (_.route.lazy || P) {
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
      pattern: Tv(c.matches),
      errorInfo: _
    });
  } : void 0;
  return d.reduceRight(
    (y, _, S) => {
      let C, P = !1, N = null, E = null;
      c && (C = f && _.route.id ? f[_.route.id] : void 0, N = _.route.errorElement || Hv, m && (h < 0 && S === 0 ? (Hf(
        "route-fallback",
        !1,
        "No `HydrateFallback` element provided to render during initial hydration"
      ), P = !0, E = null) : h === S && (P = !0, E = _.route.hydrateFallbackElement || null)));
      let A = l.concat(d.slice(0, S + 1)), O = () => {
        let I;
        return C ? I = N : P ? I = E : _.route.Component ? I = /* @__PURE__ */ v.createElement(_.route.Component, null) : _.route.element ? I = _.route.element : I = y, /* @__PURE__ */ v.createElement(
          Bv,
          {
            match: _,
            routeContext: {
              outlet: y,
              matches: A,
              isDataRoute: c != null
            },
            children: I
          }
        );
      };
      return c && (_.route.ErrorBoundary || _.route.errorElement || S === 0) ? /* @__PURE__ */ v.createElement(
        Ff,
        {
          location: c.location,
          revalidation: c.revalidation,
          component: N,
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
function Di(r) {
  return `${r} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function Vv(r) {
  let l = v.useContext($r);
  return $e(l, Di(r)), l;
}
function qv(r) {
  let l = v.useContext(cl);
  return $e(l, Di(r)), l;
}
function Qv(r) {
  let l = v.useContext(Qt);
  return $e(l, Di(r)), l;
}
function zi(r) {
  let l = Qv(r), i = l.matches[l.matches.length - 1];
  return $e(
    i.route.id,
    `${r} can only be used on routes that contain a unique "id"`
  ), i.route.id;
}
function Kv() {
  return zi(
    "useRouteId"
    /* UseRouteId */
  );
}
function Yv() {
  var c;
  let r = v.useContext(Mi), l = qv(
    "useRouteError"
    /* UseRouteError */
  ), i = zi(
    "useRouteError"
    /* UseRouteError */
  );
  return r !== void 0 ? r : (c = l.errors) == null ? void 0 : c[i];
}
function Gv() {
  let { router: r } = Vv(
    "useNavigate"
    /* UseNavigateStable */
  ), l = zi(
    "useNavigate"
    /* UseNavigateStable */
  ), i = v.useRef(!1);
  return zf(() => {
    i.current = !0;
  }), v.useCallback(
    async (d, f = {}) => {
      Tt(i.current, Df), i.current && (typeof d == "number" ? await r.navigate(d) : await r.navigate(d, { fromRouteId: l, ...f }));
    },
    [r, l]
  );
}
var nf = {};
function Hf(r, l, i) {
  !l && !nf[r] && (nf[r] = !0, Tt(!1, i));
}
v.memo(Jv);
function Jv({
  routes: r,
  manifest: l,
  future: i,
  state: c,
  isStatic: d,
  onError: f
}) {
  return Of(r, void 0, {
    manifest: l,
    state: c,
    isStatic: d,
    onError: f
  });
}
function Wn({
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
  let { static: d } = v.useContext(gt);
  Tt(
    !d,
    "<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change."
  );
  let { matches: f } = v.useContext(Qt), { pathname: m } = pt(), h = Ii(), g = ul(
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
function Xv({
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
  typeof i == "string" && (i = er(i));
  let {
    pathname: x = "/",
    search: y = "",
    hash: _ = "",
    state: S = null,
    key: C = "default",
    mask: P
  } = i, N = v.useMemo(() => {
    let E = sn(x, h);
    return E == null ? null : {
      location: {
        pathname: E,
        search: y,
        hash: _,
        state: S,
        key: C,
        mask: P
      },
      navigationType: c
    };
  }, [h, x, y, _, S, C, c, P]);
  return Tt(
    N != null,
    `<Router basename="${h}"> is not able to match the URL "${x}${y}${_}" because it does not start with the basename, so the <Router> won't render anything.`
  ), N == null ? null : /* @__PURE__ */ v.createElement(gt.Provider, { value: g }, /* @__PURE__ */ v.createElement(Ms.Provider, { children: l, value: N }));
}
function Zv({
  children: r,
  location: l
}) {
  return Ov(Ci(r), l);
}
function Ci(r, l = []) {
  let i = [];
  return v.Children.forEach(r, (c, d) => {
    if (!v.isValidElement(c))
      return;
    let f = [...l, d];
    if (c.type === v.Fragment) {
      i.push.apply(
        i,
        Ci(c.props.children, f)
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
    c.props.children && (m.children = Ci(
      c.props.children,
      f
    )), i.push(m);
  }), i;
}
var el = "get", tl = "application/x-www-form-urlencoded";
function dl(r) {
  return typeof HTMLElement < "u" && r instanceof HTMLElement;
}
function ey(r) {
  return dl(r) && r.tagName.toLowerCase() === "button";
}
function ty(r) {
  return dl(r) && r.tagName.toLowerCase() === "form";
}
function ny(r) {
  return dl(r) && r.tagName.toLowerCase() === "input";
}
function ry(r) {
  return !!(r.metaKey || r.altKey || r.ctrlKey || r.shiftKey);
}
function sy(r, l) {
  return r.button === 0 && // Ignore everything but left clicks
  (!l || l === "_self") && // Let browser handle "target=_blank" etc.
  !ry(r);
}
var Ko = null;
function oy() {
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
    `"${r}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${tl}"`
  ), null) : r;
}
function ay(r, l) {
  let i, c, d, f, m;
  if (ty(r)) {
    let h = r.getAttribute("action");
    c = h ? sn(h, l) : null, i = r.getAttribute("method") || el, d = vi(r.getAttribute("enctype")) || tl, f = new FormData(r);
  } else if (ey(r) || ny(r) && (r.type === "submit" || r.type === "image")) {
    let h = r.form;
    if (h == null)
      throw new Error(
        'Cannot submit a <button> or <input type="submit"> without a <form>'
      );
    let g = r.getAttribute("formaction") || h.getAttribute("action");
    if (c = g ? sn(g, l) : null, i = r.getAttribute("formmethod") || h.getAttribute("method") || el, d = vi(r.getAttribute("formenctype")) || vi(h.getAttribute("enctype")) || tl, f = new FormData(h, r), !oy()) {
      let { name: x, type: y, value: _ } = r;
      if (y === "image") {
        let S = x ? `${x}.` : "";
        f.append(`${S}x`, "0"), f.append(`${S}y`, "0");
      } else x && f.append(x, _);
    }
  } else {
    if (dl(r))
      throw new Error(
        'Cannot submit element that is not <form>, <button>, or <input type="submit|image">'
      );
    i = el, c = null, d = tl, m = r;
  }
  return f && d === "text/plain" && (m = f, f = void 0), { action: c, method: i.toLowerCase(), encType: d, formData: f, body: m };
}
Object.getOwnPropertyNames(Object.prototype).sort().join("\0");
function Oi(r, l) {
  if (r === !1 || r === null || typeof r > "u")
    throw new Error(l);
}
function Uf(r, l, i, c) {
  let d = typeof r == "string" ? new URL(
    r,
    // This can be called during the SSR flow via PrefetchPageLinksImpl so
    // don't assume window is available
    typeof window > "u" ? "server://singlefetch/" : window.location.origin
  ) : r;
  return i ? d.pathname.endsWith("/") ? d.pathname = `${d.pathname}_.${c}` : d.pathname = `${d.pathname}.${c}` : d.pathname === "/" ? d.pathname = `_root.${c}` : l && sn(d.pathname, l) === "/" ? d.pathname = `${rl(l)}/_root.${c}` : d.pathname = `${rl(d.pathname)}.${c}`, d;
}
async function iy(r, l) {
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
function uy(r) {
  return r == null ? !1 : r.href == null ? r.rel === "preload" && typeof r.imageSrcSet == "string" && typeof r.imageSizes == "string" : typeof r.rel == "string" && typeof r.href == "string";
}
async function cy(r, l, i) {
  let c = await Promise.all(
    r.map(async (d) => {
      let f = l.routes[d.route.id];
      if (f) {
        let m = await iy(f, i);
        return m.links ? m.links() : [];
      }
      return [];
    })
  );
  return my(
    c.flat(1).filter(uy).filter((d) => d.rel === "stylesheet" || d.rel === "preload").map(
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
function dy(r, l, { includeHydrateFallback: i } = {}) {
  return fy(
    r.map((c) => {
      let d = l.routes[c.route.id];
      if (!d) return [];
      let f = [d.module];
      return d.clientActionModule && (f = f.concat(d.clientActionModule)), d.clientLoaderModule && (f = f.concat(d.clientLoaderModule)), i && d.hydrateFallbackModule && (f = f.concat(d.hydrateFallbackModule)), d.imports && (f = f.concat(d.imports)), f;
    }).flat(1)
  );
}
function fy(r) {
  return [...new Set(r)];
}
function py(r) {
  let l = {}, i = Object.keys(r).sort();
  for (let c of i)
    l[c] = r[c];
  return l;
}
function my(r, l) {
  let i = /* @__PURE__ */ new Set();
  return new Set(l), r.reduce((c, d) => {
    let f = JSON.stringify(py(d));
    return i.has(f) || (i.add(f), c.push({ key: f, link: d })), c;
  }, []);
}
function Fi() {
  let r = v.useContext($r);
  return Oi(
    r,
    "You must render this element inside a <DataRouterContext.Provider> element"
  ), r;
}
function hy() {
  let r = v.useContext(cl);
  return Oi(
    r,
    "You must render this element inside a <DataRouterStateContext.Provider> element"
  ), r;
}
var Hi = v.createContext(void 0);
Hi.displayName = "FrameworkContext";
function Ui() {
  let r = v.useContext(Hi);
  return Oi(
    r,
    "You must render this element inside a <HydratedRouter> element"
  ), r;
}
function vy(r, l) {
  let i = v.useContext(Hi), [c, d] = v.useState(!1), [f, m] = v.useState(!1), { onFocus: h, onBlur: g, onMouseEnter: x, onMouseLeave: y, onTouchStart: _ } = l, S = v.useRef(null);
  v.useEffect(() => {
    if (r === "render" && m(!0), r === "viewport") {
      let N = (A) => {
        A.forEach((O) => {
          m(O.isIntersecting);
        });
      }, E = new IntersectionObserver(N, { threshold: 0.5 });
      return S.current && E.observe(S.current), () => {
        E.disconnect();
      };
    }
  }, [r]), v.useEffect(() => {
    if (c) {
      let N = setTimeout(() => {
        m(!0);
      }, 100);
      return () => {
        clearTimeout(N);
      };
    }
  }, [c]);
  let C = () => {
    d(!0);
  }, P = () => {
    d(!1), m(!1);
  };
  return i ? r !== "intent" ? [f, S, {}] : [
    f,
    S,
    {
      onFocus: Ns(h, C),
      onBlur: Ns(g, P),
      onMouseEnter: Ns(x, C),
      onMouseLeave: Ns(y, P),
      onTouchStart: Ns(_, C)
    }
  ] : [!1, S, {}];
}
function Ns(r, l) {
  return (i) => {
    r && r(i), i.defaultPrevented || l(i);
  };
}
function yy({ page: r, ...l }) {
  let i = Pv(), { router: c } = Fi(), d = v.useMemo(
    () => Nf(c.routes, r, c.basename),
    [c.routes, r, c.basename]
  );
  return d ? i ? /* @__PURE__ */ v.createElement(_y, { page: r, matches: d, ...l }) : /* @__PURE__ */ v.createElement(xy, { page: r, matches: d, ...l }) : null;
}
function gy(r) {
  let { manifest: l, routeModules: i } = Ui(), [c, d] = v.useState([]);
  return v.useEffect(() => {
    let f = !1;
    return cy(r, l, i).then(
      (m) => {
        f || d(m);
      }
    ), () => {
      f = !0;
    };
  }, [r, l, i]), c;
}
function _y({
  page: r,
  matches: l,
  ...i
}) {
  let c = pt(), { future: d } = Ui(), { basename: f } = Fi(), m = v.useMemo(() => {
    if (r === c.pathname + c.search + c.hash)
      return [];
    let h = Uf(
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
function xy({
  page: r,
  matches: l,
  ...i
}) {
  let c = pt(), { future: d, manifest: f, routeModules: m } = Ui(), { basename: h } = Fi(), { loaderData: g, matches: x } = hy(), y = v.useMemo(
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
    let N = /* @__PURE__ */ new Set(), E = !1;
    if (l.forEach((O) => {
      var z;
      let I = f.routes[O.route.id];
      !I || !I.hasLoader || (!y.some((W) => W.route.id === O.route.id) && O.route.id in g && ((z = m[O.route.id]) != null && z.shouldRevalidate) || I.hasClientLoader ? E = !0 : N.add(O.route.id));
    }), N.size === 0)
      return [];
    let A = Uf(
      r,
      h,
      d.v8_trailingSlashAwareDataRequests,
      "data"
    );
    return E && N.size > 0 && A.searchParams.set(
      "_routes",
      l.filter((O) => N.has(O.route.id)).map((O) => O.route.id).join(",")
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
    () => dy(_, f),
    [_, f]
  ), P = gy(_);
  return /* @__PURE__ */ v.createElement(v.Fragment, null, S.map((N) => /* @__PURE__ */ v.createElement("link", { key: N, rel: "prefetch", as: "fetch", href: N, ...i })), C.map((N) => /* @__PURE__ */ v.createElement("link", { key: N, rel: "modulepreload", href: N, ...i })), P.map(({ key: N, link: E }) => (
    // these don't spread `linkProps` because they are full link descriptors
    // already with their own props
    /* @__PURE__ */ v.createElement(
      "link",
      {
        key: N,
        nonce: i.nonce,
        ...E,
        crossOrigin: E.crossOrigin ?? i.crossOrigin
      }
    )
  )));
}
function wy(...r) {
  return (l) => {
    r.forEach((i) => {
      typeof i == "function" ? i(l) : i != null && (i.current = l);
    });
  };
}
var Sy = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u";
try {
  Sy && (window.__reactRouterVersion = // @ts-expect-error
  "7.17.0");
} catch {
}
function ky({
  basename: r,
  children: l,
  useTransitions: i,
  window: c
}) {
  let d = v.useRef();
  d.current == null && (d.current = nv({ window: c, v5Compat: !0 }));
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
    Xv,
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
var Bf = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i, Wf = v.forwardRef(
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
    ...P
  }, N) {
    let { basename: E, navigator: A, useTransitions: O } = v.useContext(gt), I = typeof y == "string" && Bf.test(y), z = $f(y, E);
    y = z.to;
    let W = Dv(y, { relative: d }), L = pt(), J = null;
    if (h) {
      let ge = ul(
        h,
        [],
        L.mask ? L.mask.pathname : "/",
        !0
      );
      E !== "/" && (ge.pathname = ge.pathname === "/" ? E : Dt([E, ge.pathname])), J = A.createHref(ge);
    }
    let [B, K, pe] = vy(
      c,
      P
    ), de = Ey(y, {
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
          ...P,
          ...pe,
          href: (Ee ? J : void 0) || z.absoluteURL || W,
          onClick: Ee ? Te : l,
          ref: wy(N, K),
          target: x,
          "data-discover": !I && i === "render" ? "true" : void 0
        }
      )
    );
    return B && !I ? /* @__PURE__ */ v.createElement(v.Fragment, null, he, /* @__PURE__ */ v.createElement(yy, { page: W })) : he;
  }
);
Wf.displayName = "Link";
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
    let _ = Is(m, { relative: x.relative }), S = pt(), C = v.useContext(cl), { navigator: P, basename: N } = v.useContext(gt), E = C != null && // Conditional usage is OK here because the usage of a data router is static
    // eslint-disable-next-line react-hooks/rules-of-hooks
    Ay(_) && h === !0, A = P.encodeLocation ? P.encodeLocation(_).pathname : _.pathname, O = S.pathname, I = C && C.navigation && C.navigation.location ? C.navigation.location.pathname : null;
    i || (O = O.toLowerCase(), I = I ? I.toLowerCase() : null, A = A.toLowerCase()), I && N && (I = sn(I, N) || I);
    const z = A !== "/" && A.endsWith("/") ? A.length - 1 : A.length;
    let W = O === A || !d && O.startsWith(A) && O.charAt(z) === "/", L = I != null && (I === A || !d && I.startsWith(A) && I.charAt(A.length) === "/"), J = {
      isActive: W,
      isPending: L,
      isTransitioning: E
    }, B = W ? l : void 0, K;
    typeof c == "function" ? K = c(J) : K = [
      c,
      W ? "active" : null,
      L ? "pending" : null,
      E ? "transitioning" : null
    ].filter(Boolean).join(" ");
    let pe = typeof f == "function" ? f(J) : f;
    return /* @__PURE__ */ v.createElement(
      Wf,
      {
        ...x,
        "aria-current": B,
        className: K,
        ref: y,
        style: pe,
        to: m,
        viewTransition: h
      },
      typeof g == "function" ? g(J) : g
    );
  }
);
Et.displayName = "NavLink";
var Cy = v.forwardRef(
  ({
    discover: r = "render",
    fetcherKey: l,
    navigate: i,
    reloadDocument: c,
    replace: d,
    state: f,
    method: m = el,
    action: h,
    onSubmit: g,
    relative: x,
    preventScrollReset: y,
    viewTransition: _,
    defaultShouldRevalidate: S,
    ...C
  }, P) => {
    let { useTransitions: N } = v.useContext(gt), E = Ry(), A = Py(h, { relative: x }), O = m.toLowerCase() === "get" ? "get" : "post", I = typeof h == "string" && Bf.test(h), z = (W) => {
      if (g && g(W), W.defaultPrevented) return;
      W.preventDefault();
      let L = W.nativeEvent.submitter, J = (L == null ? void 0 : L.getAttribute("formmethod")) || m, B = () => E(L || W.currentTarget, {
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
      N && i !== !1 ? v.startTransition(() => B()) : B();
    };
    return /* @__PURE__ */ v.createElement(
      "form",
      {
        ref: P,
        method: O,
        action: A,
        onSubmit: c ? g : z,
        ...C,
        "data-discover": !I && r === "render" ? "true" : void 0
      }
    );
  }
);
Cy.displayName = "Form";
function jy(r) {
  return `${r} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function Vf(r) {
  let l = v.useContext($r);
  return $e(l, jy(r)), l;
}
function Ey(r, {
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
  let y = Ii(), _ = pt(), S = Is(r, { relative: m });
  return v.useCallback(
    (C) => {
      if (sy(C, l)) {
        C.preventDefault();
        let P = i !== void 0 ? i : Ls(_) === Ls(S), N = () => y(r, {
          replace: P,
          mask: c,
          state: d,
          preventScrollReset: f,
          relative: m,
          viewTransition: h,
          defaultShouldRevalidate: g
        });
        x ? v.startTransition(() => N()) : N();
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
var Ny = 0, Ty = () => `__${String(++Ny)}__`;
function Ry() {
  let { router: r } = Vf(
    "useSubmit"
    /* UseSubmit */
  ), { basename: l } = v.useContext(gt), i = Kv(), c = r.fetch, d = r.navigate;
  return v.useCallback(
    async (f, m = {}) => {
      let { action: h, method: g, encType: x, formData: y, body: _ } = ay(
        f,
        l
      );
      if (m.navigate === !1) {
        let S = m.fetcherKey || Ty();
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
function Py(r, { relative: l } = {}) {
  let { basename: i } = v.useContext(gt), c = v.useContext(Qt);
  $e(c, "useFormAction must be used inside a RouteContext");
  let [d] = c.matches.slice(-1), f = { ...Is(r || ".", { relative: l }) }, m = pt();
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
function Ay(r, { relative: l } = {}) {
  let i = v.useContext(Mf);
  $e(
    i != null,
    "`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?"
  );
  let { basename: c } = Vf(
    "useViewTransitionState"
    /* useViewTransitionState */
  ), d = Is(r, { relative: l });
  if (!i.isTransitioning)
    return !1;
  let f = sn(i.currentLocation.pathname, c) || i.currentLocation.pathname, m = sn(i.nextLocation.pathname, c) || i.nextLocation.pathname;
  return nl(d.pathname, m) != null || nl(d.pathname, f) != null;
}
var qf = Cf();
const ji = "ha-dialog-ui-api-enabled-change", Qf = v.createContext(!1), Bi = () => v.useContext(Qf), $y = "_loader_m2244_1", by = "_fullscreen_m2244_11", Ly = "_spinner_m2244_15", My = "_label_m2244_24", Yo = {
  loader: $y,
  fullscreen: by,
  spinner: Ly,
  label: My
}, Ds = ({ label: r = "Загрузка...", fullscreen: l = !1 }) => /* @__PURE__ */ a.jsxs("div", { className: `${Yo.loader} ${l ? Yo.fullscreen : ""}`, role: "status", "aria-live": "polite", children: [
  /* @__PURE__ */ a.jsx("span", { className: Yo.spinner, "aria-hidden": "true" }),
  r && /* @__PURE__ */ a.jsx("span", { className: Yo.label, children: k(r) })
] }), Iy = "_error_fi1f1_1", Dy = {
  error: Iy
}, qe = ({ error: r, retry: l, busy: i = !1 }) => r ? /* @__PURE__ */ a.jsxs("div", { role: "alert", className: Dy.error, children: [
  /* @__PURE__ */ a.jsx("p", { children: k(r) }),
  l && /* @__PURE__ */ a.jsx(ae, { variant: "secondary", disabled: i, onClick: l, children: k("Повторить загрузку") })
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
  return r && typeof r == "object" && "code" in r && typeof r.code == "string" ? sf[r.code] ?? l : r instanceof Error && /connection|network|fetch|disconnected/i.test(r.message) ? sf.connection_lost : l;
}
function qt() {
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
const Kf = v.createContext(null);
function _t() {
  const r = v.useContext(Kf);
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
const Yf = (...r) => r.filter((l, i, c) => !!l && l.trim() !== "" && c.indexOf(l) === i).join(" ").trim();
/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const zy = (r) => r.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Oy = (r) => r.replace(
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
  const l = Oy(r);
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
const Fy = (r) => {
  for (const l in r)
    if (l.startsWith("aria-") || l === "role" || l === "title")
      return !0;
  return !1;
}, Hy = v.createContext({}), Uy = () => v.useContext(Hy), By = v.forwardRef(
  ({ color: r, size: l, strokeWidth: i, absoluteStrokeWidth: c, className: d = "", children: f, iconNode: m, ...h }, g) => {
    const {
      size: x = 24,
      strokeWidth: y = 2,
      absoluteStrokeWidth: _ = !1,
      color: S = "currentColor",
      className: C = ""
    } = Uy() ?? {}, P = c ?? _ ? Number(i ?? y) * 24 / Number(l ?? x) : i ?? y;
    return v.createElement(
      "svg",
      {
        ref: g,
        ...yi,
        width: l ?? x ?? yi.width,
        height: l ?? x ?? yi.height,
        stroke: r ?? S,
        strokeWidth: P,
        className: Yf("lucide", C, d),
        ...!f && !Fy(h) && { "aria-hidden": "true" },
        ...h
      },
      [
        ...m.map(([N, E]) => v.createElement(N, E)),
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
const Ie = (r, l) => {
  const i = v.forwardRef(
    ({ className: c, ...d }, f) => v.createElement(By, {
      ref: f,
      iconNode: l,
      className: Yf(
        `lucide-${zy(of(r))}`,
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
const Wy = [
  ["circle", { cx: "12", cy: "13", r: "8", key: "3y4lt7" }],
  ["path", { d: "M12 9v4l2 2", key: "1c63tq" }],
  ["path", { d: "M5 3 2 6", key: "18tl5t" }],
  ["path", { d: "m22 6-3-3", key: "1opdir" }],
  ["path", { d: "M6.38 18.7 4 21", key: "17xu3x" }],
  ["path", { d: "M17.64 18.67 20 21", key: "kv2oe2" }]
], Gf = Ie("alarm-clock", Wy);
/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Vy = [
  ["path", { d: "m12 19-7-7 7-7", key: "1l729n" }],
  ["path", { d: "M19 12H5", key: "x3x0zl" }]
], qy = Ie("arrow-left", Vy);
/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Qy = [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "m12 5 7 7-7 7", key: "xquz4c" }]
], Ky = Ie("arrow-right", Qy);
/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Yy = [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]], Gy = Ie("check", Yy);
/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Jy = [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]], Jf = Ie("chevron-down", Jy);
/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Xy = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3", key: "1u773s" }],
  ["path", { d: "M12 17h.01", key: "p32p05" }]
], Zy = Ie("circle-question-mark", Xy);
/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const eg = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M12 6v6h4", key: "135r8i" }]
], tg = Ie("clock-3", eg);
/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ng = [
  [
    "path",
    { d: "M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3", key: "11bfej" }
  ]
], rg = Ie("command", ng);
/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const sg = [
  ["path", { d: "M12 15V3", key: "m9g1x1" }],
  ["path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4", key: "ih7n3h" }],
  ["path", { d: "m7 10 5 5 5-5", key: "brsn70" }]
], Xf = Ie("download", sg);
/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const og = [
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
], lg = Ie("file-code-corner", og);
/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ag = [
  ["path", { d: "M15 6a9 9 0 0 0-9 9V3", key: "1cii5b" }],
  ["circle", { cx: "18", cy: "6", r: "3", key: "1h7g24" }],
  ["circle", { cx: "6", cy: "18", r: "3", key: "fqmcym" }]
], ig = Ie("git-branch", ag);
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
], cg = Ie("layers", ug);
/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const dg = [
  ["rect", { width: "7", height: "7", x: "3", y: "3", rx: "1", key: "1g98yp" }],
  ["rect", { width: "7", height: "7", x: "14", y: "3", rx: "1", key: "6d4xhi" }],
  ["rect", { width: "7", height: "7", x: "14", y: "14", rx: "1", key: "nxv5o0" }],
  ["rect", { width: "7", height: "7", x: "3", y: "14", rx: "1", key: "1bb6yr" }]
], fg = Ie("layout-grid", dg);
/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const pg = [
  ["path", { d: "M4 5h16", key: "1tepv9" }],
  ["path", { d: "M4 12h16", key: "1lakjw" }],
  ["path", { d: "M4 19h16", key: "1djgab" }]
], mg = Ie("menu", pg);
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
      d: "M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719",
      key: "1sd12s"
    }
  ]
], vg = Ie("message-circle", hg);
/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const yg = [
  ["path", { d: "m21 21-4.34-4.34", key: "14j7rj" }],
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }]
], gg = Ie("search", yg);
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
      d: "M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915",
      key: "1i5ecw"
    }
  ],
  ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }]
], Zf = Ie("settings", _g);
/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const xg = [
  ["path", { d: "M10 5H3", key: "1qgfaw" }],
  ["path", { d: "M12 19H3", key: "yhmn1j" }],
  ["path", { d: "M14 3v4", key: "1sua03" }],
  ["path", { d: "M16 17v4", key: "1q0r14" }],
  ["path", { d: "M21 12h-9", key: "1o4lsq" }],
  ["path", { d: "M21 19h-5", key: "1rlt1p" }],
  ["path", { d: "M21 5h-7", key: "1oszz2" }],
  ["path", { d: "M8 10v4", key: "tgpxqk" }],
  ["path", { d: "M8 12H3", key: "a7s4jb" }]
], lf = Ie("sliders-horizontal", xg);
/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const wg = [
  ["rect", { width: "16", height: "20", x: "4", y: "2", rx: "2", key: "1nb95v" }],
  ["path", { d: "M12 6h.01", key: "1vi96p" }],
  ["circle", { cx: "12", cy: "14", r: "4", key: "1jruaj" }],
  ["path", { d: "M12 14h.01", key: "1etili" }]
], ep = Ie("speaker", wg);
/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Sg = [
  ["line", { x1: "10", x2: "14", y1: "2", y2: "2", key: "14vaq8" }],
  ["line", { x1: "12", x2: "15", y1: "14", y2: "11", key: "17fdiu" }],
  ["circle", { cx: "12", cy: "14", r: "8", key: "1e1u0o" }]
], kg = Ie("timer", Sg);
/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Cg = [
  ["rect", { width: "8", height: "8", x: "3", y: "3", rx: "2", key: "by2w9f" }],
  ["path", { d: "M7 11v4a2 2 0 0 0 2 2h4", key: "xkn7yn" }],
  ["rect", { width: "8", height: "8", x: "13", y: "13", rx: "2", key: "1cgmvn" }]
], af = Ie("workflow", Cg);
/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const jg = [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
], Eg = Ie("x", jg), ot = (r = 768) => {
  const [l, i] = v.useState(
    window.innerWidth <= r
  );
  return v.useEffect(() => {
    const c = window.matchMedia(`(max-width: ${r}px)`), d = (f) => {
      i(f.matches);
    };
    return i(c.matches), c.addEventListener("change", d), () => c.removeEventListener("change", d);
  }, [r]), l;
}, tp = v.createContext(!1), Wi = () => v.useContext(tp), sl = "ha-dialog-ui-remote-server-change", np = v.createContext(null), Lr = () => v.useContext(np), Ts = "dialogCustomUiOverlay", Go = [], ol = /* @__PURE__ */ new Set();
let Ng = 0, Nr = null, Ei = !1;
function Tg() {
  Ei = !0, window.addEventListener("popstate", () => {
    Ei = !1;
    const r = [...ol];
    ol.clear(), queueMicrotask(() => r.forEach((l) => l()));
  }, { once: !0 }), history.back();
}
function rp(r, l) {
  const i = ot(), c = v.useRef(l);
  c.current = l, v.useEffect(() => {
    if (!r || !i) return;
    const d = `overlay-${++Ng}`;
    let f = !1, m = !1, h = !1;
    const g = () => {
      var y;
      Go.at(-1) !== d || ((y = history.state) == null ? void 0 : y[Ts]) === d || (f = !0, c.current());
    }, x = () => {
      var _;
      if (h) return;
      m = !0, Go.push(d);
      const y = { ...history.state, [Ts]: d };
      Nr && ((_ = history.state) == null ? void 0 : _[Ts]) === Nr ? (history.replaceState(y, ""), Nr = null) : history.pushState(y, ""), window.addEventListener("popstate", g);
    };
    return Ei ? ol.add(x) : x(), () => {
      var y;
      h = !0, ol.delete(x), window.removeEventListener("popstate", g), m && (Go.splice(Go.indexOf(d), 1), !f && ((y = history.state) == null ? void 0 : y[Ts]) === d && (Nr = d, queueMicrotask(() => {
        var _;
        Nr === d && (Nr = null, ((_ = history.state) == null ? void 0 : _[Ts]) === d && Tg());
      })));
    };
  }, [r, i]);
}
const Rg = "_overlay_tb5vv_1", Pg = "_sheet_tb5vv_11", Ag = "_handle_tb5vv_21", Vn = {
  overlay: Rg,
  sheet: Pg,
  handle: Ag
}, Vi = ({
  open: r,
  className: l = "",
  labelledBy: i,
  onClose: c,
  children: d
}) => {
  rp(r, c);
  const [f, m] = v.useState(r), [h, g] = v.useState(r), x = v.useRef(0), y = v.useRef(0), [_, S] = v.useState(0);
  v.useEffect(() => {
    const E = document.body.style.overflow;
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
      document.body.style.overflow = E;
    };
  }, [r]);
  const C = (E) => {
    x.current = E.touches[0].clientY;
  }, P = (E) => {
    y.current = E.touches[0].clientY;
    const A = y.current - x.current;
    A > 0 && S(A);
  }, N = () => {
    _ > 120 && c(), S(0);
  };
  return v.useEffect(() => {
    const E = (A) => {
      A.key === "Escape" && c();
    };
    return r && window.addEventListener(
      "keydown",
      E
    ), () => {
      window.removeEventListener(
        "keydown",
        E
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
          onClick: (E) => E.stopPropagation(),
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": i,
          children: [
            /* @__PURE__ */ a.jsx(
              "div",
              {
                className: Vn.handleArea,
                onTouchStart: C,
                onTouchMove: P,
                onTouchEnd: N,
                children: /* @__PURE__ */ a.jsx("div", { className: Vn.handle })
              }
            ),
            /* @__PURE__ */ a.jsx("div", { className: Vn.content, children: d })
          ]
        }
      )
    }
  ) : null;
}, $g = "_overlay_avpnk_1", bg = "_heading_avpnk_16", Lg = "_close_avpnk_32", Mg = "_nav_avpnk_45", Ig = "_item_avpnk_51", Dg = "_icon_avpnk_70", zg = "_label_avpnk_78", Og = "_arrow_avpnk_86", Fg = "_active_avpnk_91", nn = {
  overlay: $g,
  heading: bg,
  close: Lg,
  nav: Mg,
  item: Ig,
  icon: Dg,
  label: zg,
  arrow: Og,
  active: Fg
};
function Hg({ open: r, onClose: l }) {
  const i = Bi(), c = Wi(), d = Lr(), { pathname: f } = pt(), m = v.useId(), h = v.useRef(null), g = [
    ...d === !1 ? [
      { to: "/commands/main", label: "Основные команды", icon: vg },
      { to: "/commands/sub", label: "Второстепенные команды", icon: ig },
      { to: "/commands/direct/main", label: "Прямые команды", icon: af },
      { to: "/commands/direct/template", label: "Вложенные команды", icon: cg },
      { to: "/commands/settings", label: "Ответы по умолчанию", icon: lf }
    ] : d === !0 ? [{ to: "/scripts", label: "Действия удалённых команд", icon: af }] : [],
    { to: "/timer", label: "Таймеры", icon: tg },
    { to: "/alarm", label: "Будильники", icon: Gf },
    ...c ? [{ to: "/downloads", label: "Импорт и экспорт", icon: Xf }] : [],
    ...i && c ? [{ to: "/logs", label: "Логи", icon: lf }] : [],
    { to: "/settings", label: "Настройки", icon: Zf }
  ];
  return v.useEffect(() => {
    if (!r) return;
    const x = requestAnimationFrame(() => {
      var y, _, S;
      return (S = ((y = h.current) == null ? void 0 : y.querySelector('[aria-current="page"]')) ?? ((_ = h.current) == null ? void 0 : _.querySelector("a"))) == null ? void 0 : S.focus();
    });
    return () => cancelAnimationFrame(x);
  }, [r]), /* @__PURE__ */ a.jsx(Vi, { open: r, onClose: l, labelledBy: m, className: nn.overlay, children: /* @__PURE__ */ a.jsxs("div", { ref: h, onKeyDown: (x) => {
    if (x.key !== "Tab") return;
    const y = [...h.current.querySelectorAll("button, a")], _ = y[0], S = y[y.length - 1];
    x.shiftKey && x.target === _ ? (x.preventDefault(), S.focus()) : !x.shiftKey && x.target === S && (x.preventDefault(), _.focus());
  }, children: [
    /* @__PURE__ */ a.jsxs("div", { className: nn.heading, children: [
      /* @__PURE__ */ a.jsx("h2", { id: m, children: k("Разделы") }),
      /* @__PURE__ */ a.jsx("button", { type: "button", className: nn.close, "aria-label": k("Закрыть меню разделов"), onClick: l, children: /* @__PURE__ */ a.jsx(Eg, { size: 20 }) })
    ] }),
    /* @__PURE__ */ a.jsx("nav", { className: nn.nav, "aria-label": k("Навигация интеграции"), children: g.map(({ to: x, label: y, icon: _ }) => /* @__PURE__ */ a.jsxs(
      Et,
      {
        to: x,
        end: !0,
        className: ({ isActive: S }) => `${nn.item} ${S ? nn.active : ""}`,
        onClick: (S) => {
          f === x && S.preventDefault(), l();
        },
        children: [
          /* @__PURE__ */ a.jsx("span", { className: nn.icon, children: /* @__PURE__ */ a.jsx(_, { size: 20, strokeWidth: 1.8 }) }),
          /* @__PURE__ */ a.jsx("span", { className: nn.label, children: k(y) }),
          f === x ? /* @__PURE__ */ a.jsx(Gy, { size: 18, "aria-hidden": "true" }) : /* @__PURE__ */ a.jsx(Ky, { size: 16, className: nn.arrow, "aria-hidden": "true" })
        ]
      },
      x
    )) })
  ] }) });
}
const Ug = "_search_1h7xe_1", Bg = {
  search: Ug
};
function Mr({ value: r, onChange: l }) {
  return /* @__PURE__ */ a.jsxs("div", { className: Bg.search, children: [
    /* @__PURE__ */ a.jsx(gg, { size: 18, "aria-hidden": "true" }),
    /* @__PURE__ */ a.jsx(
      "input",
      {
        type: "search",
        "aria-label": k("Поиск по названию"),
        placeholder: k("Поиск по названию"),
        value: r,
        onChange: (i) => l(i.target.value)
      }
    )
  ] });
}
const Wg = "_header_1pxju_1", Vg = "_bar_1pxju_9", qg = "_tools_1pxju_18", Qg = "_title_1pxju_31", Kg = "_menuButton_1pxju_38", Yg = "_active_1pxju_76", qn = {
  header: Wg,
  bar: Vg,
  tools: qg,
  title: Qg,
  menuButton: Kg,
  active: Yg
}, zt = ({ title: r = "", search: l, beforeSearch: i }) => {
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
            "aria-label": k("Открыть меню Home Assistant"),
            className: qn.menuButton,
            onClick: (g) => g.currentTarget.dispatchEvent(new CustomEvent("hass-toggle-menu", { bubbles: !0, composed: !0 })),
            children: /* @__PURE__ */ a.jsx(mg, { size: 20 })
          }
        ),
        /* @__PURE__ */ a.jsx("h1", { className: qn.title, children: k(r) }),
        /* @__PURE__ */ a.jsx(
          "button",
          {
            type: "button",
            ref: m,
            "aria-label": k("Открыть меню разделов"),
            "aria-haspopup": "dialog",
            "aria-expanded": d,
            className: `${qn.menuButton} ${d ? qn.active : ""}`,
            onClick: () => f(!0),
            children: /* @__PURE__ */ a.jsx(fg, { size: 20 })
          }
        )
      ] }),
      c && (i || l) && /* @__PURE__ */ a.jsxs("div", { className: qn.tools, children: [
        i,
        l && /* @__PURE__ */ a.jsx(Mr, { ...l })
      ] })
    ] }),
    c && /* @__PURE__ */ a.jsx(Hg, { open: d, onClose: h })
  ] });
}, Gg = "_tabs_14hon_1", Jg = "_dropdown_14hon_14", Xg = "_tab_14hon_1", Zg = "_active_14hon_47", e_ = "_menu_14hon_57", t_ = "_chevron_14hon_74", n_ = "_menuItem_14hon_82", me = {
  tabs: Gg,
  dropdown: Jg,
  tab: Xg,
  active: Zg,
  menu: e_,
  chevron: t_,
  menuItem: n_
}, Ot = () => {
  const r = ot(), l = Bi(), i = Wi(), c = Lr(), d = pt(), [f, m] = v.useState(!1), h = v.useRef(null), g = v.useRef(null), x = v.useId();
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
            /* @__PURE__ */ a.jsx("span", { children: k(c ? "Действия удалённых команд" : "Запуск скриптов") })
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
                  /* @__PURE__ */ a.jsx(rg, { size: 16, strokeWidth: 2 }),
                  /* @__PURE__ */ a.jsx("span", { children: k("Команды") }),
                  /* @__PURE__ */ a.jsx(Jf, { size: 14, className: me.chevron })
                ]
              }
            ),
            f && /* @__PURE__ */ a.jsxs(
              "nav",
              {
                id: x,
                className: me.menu,
                "aria-label": k("Разделы команд"),
                onClick: () => m(!1),
                children: [
                  /* @__PURE__ */ a.jsx(
                    Et,
                    {
                      to: "/commands/main",
                      className: ({ isActive: y }) => y ? `${me.menuItem} ${me.active}` : me.menuItem,
                      children: k("Основные команды")
                    }
                  ),
                  /* @__PURE__ */ a.jsx(
                    Et,
                    {
                      to: "/commands/sub",
                      className: ({ isActive: y }) => y ? `${me.menuItem} ${me.active}` : me.menuItem,
                      children: k("Второстепенные команды")
                    }
                  ),
                  /* @__PURE__ */ a.jsx(
                    Et,
                    {
                      to: "/commands/direct/main",
                      className: ({ isActive: y }) => y ? `${me.menuItem} ${me.active}` : me.menuItem,
                      children: k("Прямые команды")
                    }
                  ),
                  /* @__PURE__ */ a.jsx(
                    Et,
                    {
                      to: "/commands/settings",
                      className: ({ isActive: y }) => y ? `${me.menuItem} ${me.active}` : me.menuItem,
                      children: k("Ответы по умолчанию")
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
            /* @__PURE__ */ a.jsx(kg, { size: 16, strokeWidth: 2 }),
            /* @__PURE__ */ a.jsx("span", { children: k("Таймеры") })
          ]
        }
      ),
      /* @__PURE__ */ a.jsxs(
        Et,
        {
          to: "/alarm",
          className: ({ isActive: y }) => y ? `${me.tab} ${me.active}` : me.tab,
          children: [
            /* @__PURE__ */ a.jsx(Gf, { size: 16, strokeWidth: 2 }),
            /* @__PURE__ */ a.jsx("span", { children: k("Будильники") })
          ]
        }
      ),
      i && /* @__PURE__ */ a.jsxs(Et, { to: "/downloads", className: ({ isActive: y }) => y ? `${me.tab} ${me.active}` : me.tab, children: [
        /* @__PURE__ */ a.jsx(Xf, { size: 16 }),
        /* @__PURE__ */ a.jsx("span", { children: k("Импорт и экспорт") })
      ] }),
      l && i && /* @__PURE__ */ a.jsx(Et, { to: "/logs", className: ({ isActive: y }) => y ? `${me.tab} ${me.active}` : me.tab, children: k("Логи") }),
      /* @__PURE__ */ a.jsxs(
        Et,
        {
          to: "/settings",
          className: ({ isActive: y }) => y ? `${me.tab} ${me.active}` : me.tab,
          children: [
            /* @__PURE__ */ a.jsx(Zf, { size: 16, strokeWidth: 2 }),
            /* @__PURE__ */ a.jsx("span", { children: k("Настройки") })
          ]
        }
      )
    ] });
}, r_ = "_heading_1w2wz_1", s_ = "_note_1w2wz_6", o_ = "_entries_1w2wz_12", l_ = "_entry_1w2wz_19", a_ = "_line_1w2wz_27", i_ = "_error_1w2wz_40", u_ = "_body_1w2wz_49", Nn = {
  heading: r_,
  note: s_,
  entries: o_,
  entry: l_,
  line: a_,
  error: i_,
  body: u_
}, c_ = "_page_z6937_7", d_ = "_header_z6937_19", f_ = "_headerTop_z6937_24", p_ = "_heading_z6937_31", m_ = "_title_z6937_36", h_ = "_description_z6937_45", v_ = "_actions_z6937_52", y_ = "_list_z6937_57", g_ = "_innerTabs_z6937_88", __ = "_innerTab_z6937_88", x_ = "_activeInnerTab_z6937_121", w_ = "_settingsActions_z6937_131", S_ = "_listSentinel_z6937_141", k_ = "_settingsSections_z6937_145", C_ = "_settingsSection_z6937_145", j_ = "_settingsMobileActions_z6937_171", E_ = "_connectionFields_z6937_191", N_ = "_collectionHeader_z6937_197", G = {
  page: c_,
  header: d_,
  headerTop: f_,
  heading: p_,
  title: m_,
  description: h_,
  actions: v_,
  list: y_,
  innerTabs: g_,
  innerTab: __,
  activeInnerTab: x_,
  settingsActions: w_,
  listSentinel: S_,
  settingsSections: k_,
  settingsSection: C_,
  settingsMobileActions: j_,
  connectionFields: E_,
  collectionHeader: N_
};
function T_() {
  const r = _t(), l = qt(), [i, c] = v.useState([]);
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
    /* @__PURE__ */ a.jsx(zt, { title: k("Логи") }),
    /* @__PURE__ */ a.jsxs("main", { className: G.page, children: [
      /* @__PURE__ */ a.jsx(Ot, {}),
      /* @__PURE__ */ a.jsx("h1", { className: Nn.heading, children: k("Логи") }),
      /* @__PURE__ */ a.jsx("p", { className: Nn.note, children: k("Последние 200 записей API с телами запросов и ответов. Обновление каждые 3 секунды. После перезапуска журнал очищается. Секретные поля и настроенные токены скрыты.") }),
      /* @__PURE__ */ a.jsx(qe, { ...l }),
      !i.length && !l.busy && !l.error && /* @__PURE__ */ a.jsx("p", { children: k("Запросов к API пока нет.") }),
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
          /* @__PURE__ */ a.jsx("span", { children: k({ connected: "SSE подключён", event: "Событие SSE", completed: "Запрос завершён" }[d.phase] ?? d.phase) }),
          d.status !== null && /* @__PURE__ */ a.jsxs("span", { className: d.status >= 400 ? Nn.error : void 0, children: [
            "HTTP ",
            d.status
          ] }),
          d.duration_ms !== null && /* @__PURE__ */ a.jsxs("span", { children: [
            d.duration_ms,
            " ",
            k("мс")
          ] }),
          d.event && /* @__PURE__ */ a.jsx("code", { children: d.event })
        ] }),
        [["Тело запроса", d.request_body], ["Тело ответа", d.response_body]].map(
          ([f, m]) => m != null && /* @__PURE__ */ a.jsxs("details", { className: Nn.body, children: [
            /* @__PURE__ */ a.jsx("summary", { children: k(f) }),
            /* @__PURE__ */ a.jsx("pre", { children: JSON.stringify(m, null, 2) })
          ] }, f)
        )
      ] }, `${d.timestamp}-${d.phase}`)) })
    ] })
  ] });
}
var Ni = /* @__PURE__ */ new Map(), Jo = /* @__PURE__ */ new WeakMap(), uf = 0, R_;
function P_(r) {
  return r ? (Jo.has(r) || (uf += 1, Jo.set(r, uf.toString())), Jo.get(r)) : "0";
}
function A_(r) {
  return Object.keys(r).sort().filter(
    (l) => r[l] !== void 0
  ).map((l) => `${l}_${l === "root" ? P_(r.root) : r[l]}`).toString();
}
function $_(r) {
  const l = A_(r);
  let i = Ni.get(l);
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
    }, Ni.set(l, i);
  }
  return i;
}
function b_(r, l, i = {}, c = R_) {
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
  const { id: d, observer: f, elements: m } = $_(i), h = m.get(r) || [];
  return m.has(r) || m.set(r, h), h.push(l), f.observe(r), function() {
    h.splice(h.indexOf(l), 1), h.length === 0 && (m.delete(r), f.unobserve(r)), m.size === 0 && (f.disconnect(), Ni.delete(d));
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
  const [_, S] = v.useState(null), C = v.useRef(x), P = v.useRef(h), [N, E] = v.useState({
    inView: !!h,
    entry: void 0
  });
  C.current = x, v.useEffect(
    () => {
      if (P.current === void 0 && (P.current = h), m || !_) return;
      let z;
      return z = b_(
        _,
        (W, L) => {
          const J = P.current;
          P.current = W, !(J === void 0 && !W) && (E({
            inView: W,
            entry: L
          }), C.current && C.current(W, L), L.isIntersecting && f && z && (z(), z = void 0));
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
  const A = (y = N.entry) == null ? void 0 : y.target, O = v.useRef(void 0);
  !_ && A && !f && !m && O.current !== A && (O.current = A, E({
    inView: !!h,
    entry: void 0
  }), P.current = h);
  const I = [S, N.inView, N.entry];
  return I.ref = I[0], I.inView = I[1], I.entry = I[2], I;
}
function Ir(r, l, i, c) {
  const { ref: d, inView: f } = L_({ threshold: 0, rootMargin: "0px 0px 180px 0px" }), [m, h] = v.useState(!1);
  return v.useEffect(() => {
    !l && (r == null ? void 0 : r.page) === 1 && h(!0);
  }, [l, r]), v.useEffect(() => {
    m && c && f && !l && r && r.page < r.total_pages && i(r.page + 1, !0);
  }, [m, c, f, l, r, i]), d;
}
const gi = (r) => ({
  data: r.data ?? r.script_actions ?? [],
  page: r.page ?? 1,
  page_size: r.page_size ?? 10,
  total_pages: r.total_pages ?? 1,
  total_items: r.total_items ?? 0
});
function sp(r) {
  const l = _t(), [i, c] = v.useState(null), [d, f] = v.useState(""), m = v.useRef(""), h = v.useRef(0), [g, x] = v.useState(!0), [y, _] = v.useState(null), S = v.useRef(), C = v.useRef(1), P = v.useRef(!1), N = v.useRef(), E = v.useCallback(async (I, z = !1) => {
    const W = ++h.current, L = m.current.trim(), J = I === void 0 && P.current, B = I ?? C.current;
    _(null), x(!0);
    try {
      let K = gi(await l.getPage(r, B, void 0, L));
      const pe = Math.max(1, K.total_pages);
      if (B > pe && (K = gi(await l.getPage(r, pe, void 0, L))), J && K.page > 1) {
        const de = await Promise.all(Array.from({ length: K.page - 1 }, (Te, Ee) => l.getPage(r, Ee + 1, void 0, L).then(gi)));
        K = { ...K, data: [...de.flatMap((Te) => Te.data), ...K.data] };
      }
      if (W !== h.current) return;
      J || (P.current = z), S.current = void 0, C.current = K.page, c((de) => z && de ? { ...K, data: [...de.data, ...K.data] } : K);
    } catch (K) {
      if (W !== h.current) return;
      S.current = { page: I, append: z }, _(Jn(K, "Не удалось загрузить список. Проверьте подключение к Home Assistant."));
    } finally {
      W === h.current && x(!1);
    }
  }, [l, r]);
  v.useEffect(() => {
    const I = N.current !== r;
    if (N.current = r, !I && m.current === d) return;
    m.current = d, C.current = 1, P.current = !1, h.current += 1, x(!0);
    const z = window.setTimeout(() => {
      E(1);
    }, I ? 0 : 250);
    return () => window.clearTimeout(z);
  }, [r, E, d]);
  const A = v.useCallback((I) => {
    c((z) => z && { ...z, data: I(z.data) });
  }, []);
  return { query: d, setQuery: f, page: i, loading: g, loadPage: E, updateItems: A, error: y, retry: () => {
    var I, z;
    E((I = S.current) == null ? void 0 : I.page, ((z = S.current) == null ? void 0 : z.append) ?? !1);
  } };
}
function M_() {
  const r = _t(), { query: l, setQuery: i, page: c, loading: d, loadPage: f, error: m, retry: h } = sp("get_script_actions_short"), g = c ? { ...c, script_actions: c.data } : null;
  return { query: l, setQuery: i, error: m, retry: h, loading: d, scripts: g, loadScripts: f, getAvailableScripts: () => r.getScripts(), saveScript: async (P) => {
    await r.saveData(P, "save_script_action"), await f();
  }, updateScript: async (P, N) => {
    await r.updateRecord(P, "update_script_action", N), await f();
  }, getScriptAction: async (P) => (await r.getRecord(P, "get_script_action")).data, deleteScriptAction: async (P) => {
    await r.deleteRecord(P, "delete_script_action"), await f();
  } };
}
const I_ = "_subtitle_c1esh_1", D_ = "_card_c1esh_6", z_ = "_content_c1esh_32", O_ = "_title_c1esh_40", F_ = "_arrow_c1esh_46", H_ = "_titleOnly_c1esh_57", Tr = {
  subtitle: I_,
  card: D_,
  content: z_,
  title: O_,
  arrow: F_,
  titleOnly: H_
}, Dr = ({
  title: r,
  subTitle: l,
  onClick: i
}) => /* @__PURE__ */ a.jsxs(
  "button",
  {
    type: "button",
    className: `${Tr.card} ${l ? "" : Tr.titleOnly}`,
    onClick: i,
    children: [
      /* @__PURE__ */ a.jsxs("div", { className: Tr.content, children: [
        /* @__PURE__ */ a.jsx("div", { className: Tr.title, children: r }),
        l && /* @__PURE__ */ a.jsx("div", { className: Tr.subtitle, children: k(l) })
      ] }),
      /* @__PURE__ */ a.jsx("div", { className: Tr.arrow, "aria-hidden": "true", children: "→" })
    ]
  }
), U_ = "_pagination_r0e80_1", B_ = "_button_r0e80_10", W_ = "_label_r0e80_34", V_ = "_pages_r0e80_40", q_ = "_active_r0e80_48", Qn = {
  pagination: U_,
  button: B_,
  label: W_,
  pages: V_,
  active: q_
}, zr = ({ page: r, totalPages: l, onChange: i }) => {
  if (l <= 1) return null;
  const c = Array.from(/* @__PURE__ */ new Set([
    1,
    ...Array.from({ length: 5 }, (f, m) => r + m - 2).filter((f) => f >= 1 && f <= l),
    l
  ])).sort((f, m) => f - m), d = (f) => {
    Number.isInteger(f) && f >= 1 && f <= l && f !== r && i(f);
  };
  return /* @__PURE__ */ a.jsx("nav", { className: Qn.pagination, "aria-label": k("Страницы списка"), children: /* @__PURE__ */ a.jsxs("div", { className: Qn.pages, children: [
    /* @__PURE__ */ a.jsx(
      "button",
      {
        type: "button",
        className: Qn.button,
        disabled: r <= 1,
        onClick: () => d(r - 1),
        "aria-label": k("Предыдущая страница"),
        children: "‹"
      }
    ),
    c.map((f, m) => /* @__PURE__ */ a.jsxs(kf.Fragment, { children: [
      m > 0 && f - c[m - 1] > 1 && /* @__PURE__ */ a.jsx("span", { className: Qn.label, "aria-hidden": "true", children: "…" }),
      /* @__PURE__ */ a.jsx(
        "button",
        {
          type: "button",
          className: `${Qn.button} ${f === r ? Qn.active : ""}`,
          "aria-label": `${k("Страница")} ${f}`,
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
        "aria-label": k("Следующая страница"),
        children: "›"
      }
    )
  ] }) });
}, Q_ = "_overlay_1m3e5_1", K_ = "_modal_1m3e5_1", Y_ = "_header_1m3e5_1", G_ = "_body_1m3e5_1", J_ = "_footer_1m3e5_1", X_ = "_sm_1m3e5_32", Z_ = "_md_1m3e5_36", e1 = "_lg_1m3e5_40", t1 = "_xl_1m3e5_44", n1 = "_title_1m3e5_59", r1 = "_close_1m3e5_86", s1 = "_fields_1m3e5_116", o1 = "_suspended_1m3e5_124", l1 = "_heading_1m3e5_128", ft = {
  overlay: Q_,
  modal: K_,
  header: Y_,
  body: G_,
  footer: J_,
  sm: X_,
  md: Z_,
  lg: e1,
  xl: t1,
  title: n1,
  close: r1,
  fields: s1,
  suspended: o1,
  heading: l1
}, on = ({
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
}) => (rp(r, c), v.useEffect(() => {
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
              ae,
              {
                variant: "ghost",
                className: ft.close,
                "aria-label": k("Назад к предыдущей команде"),
                onClick: d,
                children: /* @__PURE__ */ a.jsx(qy, { size: 20, "aria-hidden": "true" })
              }
            ),
            f && (m ? /* @__PURE__ */ a.jsxs("div", { className: ft.heading, children: [
              /* @__PURE__ */ a.jsx("h2", { className: ft.title, children: k(f) }),
              m
            ] }) : /* @__PURE__ */ a.jsx("h2", { className: ft.title, children: k(f) })),
            /* @__PURE__ */ a.jsx(
              ae,
              {
                variant: "ghost",
                className: ft.close,
                onClick: c,
                children: "✕"
              }
            )
          ] }),
          /* @__PURE__ */ a.jsxs("div", { className: ft.body, children: [
            /* @__PURE__ */ a.jsx(qe, { ...i }),
            /* @__PURE__ */ a.jsx("fieldset", { className: ft.fields, disabled: i == null ? void 0 : i.busy, children: g })
          ] }),
          h && /* @__PURE__ */ a.jsx("div", { className: ft.footer, children: /* @__PURE__ */ a.jsx("fieldset", { className: ft.fields, disabled: i == null ? void 0 : i.busy, children: h }) })
        ]
      }
    )
  }
) : null), a1 = "_content_eng69_1", i1 = "_title_eng69_7", u1 = "_actions_eng69_14", c1 = "_row_eng69_20", d1 = "_identifier_eng69_31", Rs = {
  content: a1,
  title: i1,
  actions: u1,
  row: c1,
  identifier: d1
}, qi = ({ open: r, title: l, uuid: i, onClose: c, actions: d, size: f = "md", layout: m = "column" }) => {
  const h = ot(), g = i ? /* @__PURE__ */ a.jsx("p", { className: Rs.identifier, children: i }) : null, x = /* @__PURE__ */ a.jsxs("div", { className: Rs.content, children: [
    h && /* @__PURE__ */ a.jsxs("div", { children: [
      /* @__PURE__ */ a.jsx("h3", { className: Rs.title, children: l }),
      g
    ] }),
    /* @__PURE__ */ a.jsx("div", { className: `${Rs.actions} ${m === "row" && !h ? Rs.row : ""}`, children: d.map((y) => /* @__PURE__ */ a.jsx(ae, { fullWidth: !0, variant: y.variant, onClick: () => {
      y.onClick(), c();
    }, children: k(y.label) }, y.label)) })
  ] });
  return h ? /* @__PURE__ */ a.jsx(Vi, { open: r, onClose: c, children: x }) : /* @__PURE__ */ a.jsx(on, { open: r, onClose: c, title: l, subtitle: g, size: f, children: x });
}, f1 = ({ uuid: r, title: l, open: i, onClose: c, onEdit: d, onDelete: f }) => r ? /* @__PURE__ */ a.jsx(qi, { open: i, title: l, uuid: r, onClose: c, size: "sm", layout: "row", actions: [
  { label: "Изменить", onClick: () => d(r) },
  { label: "Удалить", variant: "remove", onClick: () => f(r) }
] }) : null, op = {
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
  return (l = Object.entries(op).find(([i]) => r === i || r === k(i))) == null ? void 0 : l[1];
}
function fl(r) {
  const l = k(op["Название команды"]);
  return r ? `${l}
UUID: ${r}` : l;
}
const p1 = "_labelRow_1w41x_1", m1 = "_helpButton_1w41x_12", h1 = "_tooltip_1w41x_37", v1 = "_helpOverlay_1w41x_56", y1 = "_sheetContent_1w41x_60", bs = {
  labelRow: p1,
  helpButton: m1,
  tooltip: h1,
  helpOverlay: v1,
  sheetContent: y1
};
function Qi({ label: r, htmlFor: l, className: i, hint: c }) {
  const d = c ?? lp(r);
  return /* @__PURE__ */ a.jsxs("div", { className: bs.labelRow, children: [
    /* @__PURE__ */ a.jsx("label", { htmlFor: l, className: i, children: k(r) }),
    d && /* @__PURE__ */ a.jsx(ll, { label: r, description: d })
  ] });
}
function ll({ label: r, description: l = lp(r) ?? "" }) {
  var N, E;
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
    const A = (I) => {
      I.key === "Escape" ? (I.preventDefault(), I.stopImmediatePropagation(), _()) : i && I.key === "Tab" && I.preventDefault();
    };
    window.addEventListener("keydown", A, !0);
    const O = (I) => {
      var z;
      !i && !(I.target instanceof Node && ((z = g.current) != null && z.contains(I.target))) && d(!1);
    };
    return window.addEventListener("scroll", O, !0), window.addEventListener("resize", O), () => {
      window.removeEventListener("keydown", A, !0), window.removeEventListener("scroll", O, !0), window.removeEventListener("resize", O);
    };
  }, [c, i]);
  const P = ((N = h.current) == null ? void 0 : N.closest("[data-theme]")) ?? ((E = h.current) == null ? void 0 : E.getRootNode());
  return /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
    /* @__PURE__ */ a.jsx(
      "button",
      {
        ref: h,
        type: "button",
        className: bs.helpButton,
        "aria-label": `${k("Подсказка")}: ${k(r)}`,
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
        children: /* @__PURE__ */ a.jsx(Zy, { size: 16, "aria-hidden": "true" })
      }
    ),
    c && P && qf.createPortal(i ? /* @__PURE__ */ a.jsx(Vi, { open: !0, onClose: _, className: bs.helpOverlay, labelledBy: y, children: /* @__PURE__ */ a.jsxs("div", { className: bs.sheetContent, children: [
      /* @__PURE__ */ a.jsx("h3", { id: y, children: k(r) }),
      /* @__PURE__ */ a.jsx("p", { children: k(l) }),
      /* @__PURE__ */ a.jsx(ae, { autoFocus: !0, variant: "secondary", onClick: _, children: k("Закрыть подсказку") })
    ] }) }) : /* @__PURE__ */ a.jsx(
      "div",
      {
        ref: g,
        id: y,
        role: "tooltip",
        className: bs.tooltip,
        style: f,
        onMouseEnter: S,
        onMouseLeave: C,
        children: k(l)
      }
    ), P)
  ] });
}
const g1 = "_field_1vuim_1", _1 = "_label_1vuim_10", x1 = "_inputWrapper_1vuim_18", w1 = "_input_1vuim_18", S1 = "_passwordInput_1vuim_40", k1 = "_passwordToggle_1vuim_66", C1 = "_error_1vuim_95", j1 = "_errorText_1vuim_108", Tn = {
  field: g1,
  label: _1,
  inputWrapper: x1,
  input: w1,
  passwordInput: S1,
  passwordToggle: k1,
  error: C1,
  errorText: j1
}, Ye = ({
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
    i && /* @__PURE__ */ a.jsx("span", { id: `${_}-error`, className: Tn.errorText, children: k(i) })
  ] });
}, E1 = "_accordion_5owbj_1", N1 = "_header_5owbj_7", T1 = "_content_5owbj_20", Xo = {
  accordion: E1,
  header: N1,
  content: T1
}, R1 = ({
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
              /* @__PURE__ */ a.jsx("span", { children: k(r) }),
              /* @__PURE__ */ a.jsx("span", { className: Xo.icon, children: c ? "−" : "+" })
            ]
          }
        ),
        c && /* @__PURE__ */ a.jsx("div", { className: Xo.content, children: i })
      ]
    }
  );
}, P1 = "_wrapper_1fgdg_1", A1 = "_dropdown_1fgdg_10", $1 = "_option_1fgdg_22", b1 = "_title_1fgdg_46", L1 = "_uuid_1fgdg_51", M1 = "_hint_1fgdg_52", Kn = {
  wrapper: P1,
  dropdown: A1,
  option: $1,
  title: b1,
  uuid: L1,
  hint: M1
}, I1 = ({
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
  const x = _t(), y = JSON.stringify(c), _ = v.useMemo(() => JSON.parse(y), [y]), [S, C] = v.useState(null), P = h ? "" : i || ((S == null ? void 0 : S.uuid) === l ? S.title : "");
  v.useEffect(() => {
    var X;
    if (!l || i || h || (X = de.current) != null && X.contains(document.activeElement)) return;
    let D = !1;
    return (async () => {
      var Y;
      try {
        for (const R of _) {
          const ie = (Y = (await x.searchAssistantCommands(l, R)).data) == null ? void 0 : Y.find((ce) => ce.uuid === l);
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
  const [N, E] = v.useState(null), [A, O] = v.useState(0), [I, z] = v.useState([]), [W, L] = v.useState(!1), [J, B] = v.useState(!1), [K, pe] = v.useState(!1), de = v.useRef(null), [Te, Ee] = v.useState({});
  v.useEffect(() => {
    var X, Y;
    if (!W) return;
    const D = () => {
      var Fr, Pn;
      const R = (Pn = (Fr = de.current) == null ? void 0 : Fr.querySelector("input")) == null ? void 0 : Pn.getBoundingClientRect();
      if (!R) return;
      const F = window.visualViewport, ie = ((F == null ? void 0 : F.offsetTop) ?? 0) + 8, ce = ((F == null ? void 0 : F.offsetTop) ?? 0) + ((F == null ? void 0 : F.height) ?? window.innerHeight) - 8, ve = Math.min(ce, Math.max(ie, R.bottom + 6)), ye = Math.min(ce, Math.max(ie, R.top - 6)), Se = ce - ve, xe = ye - ie, je = Se < 180 && xe > Se, nt = Math.min(260, je ? xe : Se), Rn = Math.max(8, R.left);
      Ee({
        left: Rn,
        width: Math.max(0, Math.min(R.width, window.innerWidth - Rn - 8)),
        top: je ? ye : ve,
        transform: je ? "translateY(-100%)" : void 0,
        maxHeight: nt
      });
    };
    return D(), window.addEventListener("scroll", D, !0), window.addEventListener("resize", D), (X = window.visualViewport) == null || X.addEventListener("resize", D), (Y = window.visualViewport) == null || Y.addEventListener("scroll", D), () => {
      var R, F;
      window.removeEventListener("scroll", D, !0), window.removeEventListener("resize", D), (R = window.visualViewport) == null || R.removeEventListener("resize", D), (F = window.visualViewport) == null || F.removeEventListener("scroll", D);
    };
  }, [W]);
  const he = v.useRef(0), ge = v.useRef(""), Ce = v.useMemo(() => l.trim(), [l]);
  v.useEffect(() => {
    if (!Ce) {
      he.current += 1, E(null), ge.current = "", z([]), L(!1);
      return;
    }
    if (Ce.length < d) {
      he.current += 1, E(null), z([]), L(!1);
      return;
    }
    if (!K || P) {
      he.current += 1, L(!1), B(!1);
      return;
    }
    if (ge.current === Ce)
      return;
    ge.current = Ce;
    const D = he.current + 1;
    he.current = D;
    const X = window.setTimeout(async () => {
      B(!0), E(null);
      try {
        let Y = [];
        for (const R of _) {
          const F = await x.searchAssistantCommands(Ce, R), ie = Array.isArray(F == null ? void 0 : F.data) ? F.data : [];
          Y.push(...ie);
        }
        if (he.current !== D)
          return;
        z(Y), L(Y.length > 0);
      } catch (Y) {
        he.current === D && (E(Jn(Y)), z([]), L(!1));
      } finally {
        he.current === D && B(!1);
      }
    }, 250);
    return () => window.clearTimeout(X);
  }, [x, Ce, _, d, K, A, P]);
  const H = (D) => {
    const X = h ? h(D) : D.uuid;
    he.current += 1, C(D), ge.current = "", B(!1), z([]), f(X), m == null || m(D), L(!1);
  };
  return /* @__PURE__ */ a.jsxs("div", { ref: de, className: Kn.wrapper, children: [
    /* @__PURE__ */ a.jsx(
      Ye,
      {
        label: r,
        value: P || l,
        autoComplete: "off",
        placeholder: k("Начните вводить title или uuid"),
        error: g,
        onBlur: () => {
          pe(!1), window.setTimeout(() => L(!1), 150);
        },
        onFocus: () => {
          pe(!0), L(!P && I.length > 0);
        },
        onChange: (D) => {
          C(null), f(D.target.value);
        }
      }
    ),
    W && de.current && qf.createPortal(
      /* @__PURE__ */ a.jsx("div", { role: "listbox", className: Kn.dropdown, style: Te, children: I.map((D) => /* @__PURE__ */ a.jsxs(
        "button",
        {
          role: "option",
          type: "button",
          className: Kn.option,
          onMouseDown: (X) => X.preventDefault(),
          onClick: () => H(D),
          children: [
            /* @__PURE__ */ a.jsx("span", { className: Kn.title, children: D.title || "Без названия" }),
            /* @__PURE__ */ a.jsx("span", { className: Kn.uuid, children: D.uuid }),
            D.mappingType && /* @__PURE__ */ a.jsxs("span", { className: Kn.uuid, children: [
              k("mappingType:"),
              D.mappingType
            ] })
          ]
        },
        D.uuid
      )) }),
      de.current.closest("[data-theme]") ?? de.current
    ),
    /* @__PURE__ */ a.jsx(qe, { error: N, busy: J, retry: () => {
      var D, X;
      ge.current = "", (X = (D = de.current) == null ? void 0 : D.querySelector("input")) == null || X.focus(), O((Y) => Y + 1);
    } }),
    J && /* @__PURE__ */ a.jsx("span", { className: Kn.hint, children: k("Поиск...") })
  ] });
}, D1 = "_field_1esqu_1", z1 = "_row_1esqu_5", O1 = "_inputWrapper_1esqu_11", F1 = "_clearButton_1esqu_22", H1 = "_rowError_1esqu_31", It = {
  field: D1,
  row: z1,
  inputWrapper: O1,
  clearButton: F1,
  rowError: H1
}, U1 = {
  parent_type: "search_assistant_commands",
  children_type: "search_assistant_sub_commands",
  children_direct_type: "search_assistant_sub_direct_controls"
};
function _i({ field: r, value: l, error: i, onChange: c }) {
  return Lr() ? /* @__PURE__ */ a.jsx(Ye, { label: k(r), value: l, error: i, onChange: (f) => c(f.target.value) }) : /* @__PURE__ */ a.jsx(
    I1,
    {
      label: k(r),
      value: l,
      error: i,
      searchSource: [U1[r]],
      minQueryLength: 3,
      onChange: c,
      getSelectedValue: (f) => (r === "children_direct_type" ? f.mappingType : f.actionType) ?? f.uuid
    }
  );
}
const B1 = ({
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
    R1,
    {
      title: `${k("Условие")} ${l + 1}`,
      defaultOpen: i,
      children: [
        /* @__PURE__ */ a.jsx("div", { className: It.field, children: /* @__PURE__ */ a.jsx(
          _i,
          {
            field: "parent_type",
            value: r.parent_type ?? "",
            error: m == null ? void 0 : m.parent_type,
            onChange: (_) => c({ ...r, parent_type: _ })
          }
        ) }),
        /* @__PURE__ */ a.jsx("div", { className: It.field, children: h ? /* @__PURE__ */ a.jsxs(
          "div",
          {
            className: `${It.row} ${m != null && m.children_type ? It.rowError : ""}`,
            children: [
              /* @__PURE__ */ a.jsx("div", { className: It.inputWrapper, children: /* @__PURE__ */ a.jsx(
                _i,
                {
                  field: "children_type",
                  value: r.children_type ?? "",
                  error: m == null ? void 0 : m.children_type,
                  onChange: (_) => c({ ...r, children_type: _ })
                }
              ) }),
              /* @__PURE__ */ a.jsx(
                ae,
                {
                  type: "button",
                  variant: "ghost",
                  className: It.clearButton,
                  "aria-label": k("Убрать второстепенную команду"),
                  onClick: x,
                  children: "×"
                }
              )
            ]
          }
        ) : /* @__PURE__ */ a.jsx(
          ae,
          {
            type: "button",
            fullWidth: !0,
            onClick: () => c({
              ...r,
              children_type: ""
            }),
            children: k("🞢 Добавить второстепенную команду")
          }
        ) }),
        /* @__PURE__ */ a.jsx("div", { className: It.field, children: g ? /* @__PURE__ */ a.jsxs(
          "div",
          {
            className: `${It.row} ${m != null && m.children_direct_type ? It.rowError : ""}`,
            children: [
              /* @__PURE__ */ a.jsx("div", { className: It.inputWrapper, children: /* @__PURE__ */ a.jsx(
                _i,
                {
                  field: "children_direct_type",
                  value: r.children_direct_type ?? "",
                  error: m == null ? void 0 : m.children_direct_type,
                  onChange: (_) => c({ ...r, children_direct_type: _ })
                }
              ) }),
              /* @__PURE__ */ a.jsx(
                ae,
                {
                  type: "button",
                  variant: "ghost",
                  className: It.clearButton,
                  "aria-label": k("Убрать прямую команду"),
                  onClick: y,
                  children: "×"
                }
              )
            ]
          }
        ) : /* @__PURE__ */ a.jsx(
          ae,
          {
            type: "button",
            fullWidth: !0,
            onClick: () => c({
              ...r,
              children_direct_type: ""
            }),
            children: k("🞢 Добавить прямую команду")
          }
        ) }),
        f > 1 && /* @__PURE__ */ a.jsx(
          ae,
          {
            type: "button",
            variant: "remove",
            onClick: d,
            children: k("Удалить")
          }
        )
      ]
    }
  );
}, W1 = "_dropdown_3mupk_2", V1 = "_label_3mupk_11", q1 = "_wrapper_3mupk_19", Q1 = "_select_3mupk_23", K1 = "_arrow_3mupk_65", Y1 = "_error_3mupk_85", G1 = "_errorText_3mupk_103", Yn = {
  dropdown: W1,
  label: V1,
  wrapper: q1,
  select: Q1,
  arrow: K1,
  error: Y1,
  errorText: G1
};
function Pr({
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
        children: k(r)
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
            /* @__PURE__ */ a.jsx("option", { value: "", disabled: !0, children: k(c) }),
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
        Jf,
        {
          size: 18,
          className: Yn.arrow
        }
      )
    ] }),
    d && /* @__PURE__ */ a.jsx("span", { className: Yn.errorText, children: k(d) })
  ] });
}
const J1 = "_form_1ogov_1", X1 = "_section_1ogov_7", Z1 = "_sectionTitle_1ogov_18", ex = "_conditions_1ogov_27", tx = "_addCondition_1ogov_33", Rr = {
  form: J1,
  section: X1,
  sectionTitle: Z1,
  conditions: ex,
  addCondition: tx
}, nx = ({
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
  }, P = (A, O) => {
    const I = [...g.conditions];
    I[A] = O, S({
      ...g,
      conditions: I
    });
  }, N = (A) => {
    const O = g.conditions.filter(
      (I, z) => z !== A
    );
    S({
      ...g,
      conditions: O.length > 0 ? O : [
        {
          parent_type: ""
        }
      ]
    });
  }, E = () => {
    const A = {
      conditions: []
    };
    return g.name.trim() || (A.name = "Обязательное поле"), g.script_entity_id || (A.script_entity_id = "Обязательное поле"), g.conditions.forEach(
      (O, I) => {
        const z = {};
        O.parent_type.trim() || (z.parent_type = "Обязательное поле"), O.children_type !== void 0 && !O.children_type.trim() && (z.children_type = "Обязательное поле"), O.children_direct_type !== void 0 && !O.children_direct_type.trim() && (z.children_direct_type = "Обязательное поле"), A.conditions[I] = z;
      }
    ), _(A), !A.name && !A.script_entity_id && A.conditions.every(
      (O) => Object.keys(O).length === 0
    );
  };
  return /* @__PURE__ */ a.jsx(
    on,
    {
      feedback: l,
      open: r,
      onClose: h,
      title: d ? "Редактировать сценарий" : "Создать сценарий",
      footer: /* @__PURE__ */ a.jsx(
        ae,
        {
          disabled: f,
          onClick: () => {
            E() && (m == null || m(g));
          },
          children: k("Сохранить")
        }
      ),
      children: /* @__PURE__ */ a.jsxs("div", { className: Rr.form, children: [
        /* @__PURE__ */ a.jsxs("div", { className: Rr.section, children: [
          /* @__PURE__ */ a.jsx(
            Ye,
            {
              label: k("Название"),
              value: g.name,
              error: y.name,
              onChange: (A) => S({
                ...g,
                name: A.target.value
              })
            }
          ),
          /* @__PURE__ */ a.jsx(
            Pr,
            {
              label: k("Скрипт"),
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
        /* @__PURE__ */ a.jsxs("div", { className: Rr.section, children: [
          /* @__PURE__ */ a.jsx("h3", { className: Rr.sectionTitle, children: k("Условия") }),
          /* @__PURE__ */ a.jsx("div", { className: Rr.conditions, children: g.conditions.map(
            (A, O, I) => /* @__PURE__ */ a.jsx(
              B1,
              {
                index: O,
                condition: A,
                defaultOpen: !d,
                errors: y.conditions[O],
                onChange: (z) => P(
                  O,
                  z
                ),
                onDelete: () => N(O),
                totalCount: I.length
              },
              O
            )
          ) }),
          /* @__PURE__ */ a.jsx(
            ae,
            {
              type: "button",
              className: Rr.addCondition,
              onClick: C,
              children: k("+ Добавить условие")
            }
          )
        ] })
      ] })
    }
  );
}, rx = "_container_rqdjx_1", sx = "_rows_rqdjx_9", ox = "_hidden_rqdjx_20", lx = "_overlay_rqdjx_24", ax = "_card_rqdjx_32", ix = "_title_rqdjx_51", ux = "_subtitle_rqdjx_51", cx = "_srOnly_rqdjx_70", rn = {
  container: rx,
  rows: sx,
  hidden: ox,
  overlay: lx,
  card: ax,
  title: ix,
  subtitle: ux,
  srOnly: cx
};
function Or({ loading: r, itemCount: l, append: i = !1, children: c }) {
  const d = r && l > 0 && !i, f = r && /* @__PURE__ */ a.jsxs("div", { className: d ? rn.overlay : rn.rows, role: "status", children: [
    /* @__PURE__ */ a.jsx("span", { className: rn.srOnly, children: k("Загрузка...") }),
    Array.from({ length: d ? l : i && l > 0 ? 3 : 10 }, (m, h) => /* @__PURE__ */ a.jsxs("div", { className: rn.card, "aria-hidden": "true", children: [
      /* @__PURE__ */ a.jsx("span", { className: rn.title }),
      /* @__PURE__ */ a.jsx("span", { className: rn.subtitle })
    ] }, h))
  ] });
  return /* @__PURE__ */ a.jsxs("div", { className: rn.container, "aria-busy": r, children: [
    /* @__PURE__ */ a.jsx("div", { className: `${rn.rows} ${d ? rn.hidden : ""}`, "aria-hidden": d || void 0, children: c }),
    f
  ] });
}
const dx = "_container_9wouv_1", fx = "_visible_9wouv_20", cf = {
  container: dx,
  visible: fx
}, tr = ({
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
      S > x && S > l ? f(!0) : f(!1), x = S;
    };
    return window.addEventListener("scroll", y, {
      passive: !0
    }), () => window.removeEventListener(
      "scroll",
      y
    );
  }, [l]), /* @__PURE__ */ a.jsx(
    "div",
    {
      ref: c,
      className: `${cf.container} ${d ? cf.visible : ""}`,
      children: r
    }
  );
}, px = () => {
  const r = qt(), l = Lr(), i = l ? "Действия удалённых команд" : "Запуск скриптов", c = ot(), [d, f] = v.useState(), [m, h] = v.useState(!1), [g, x] = v.useState(!1), [y, _] = v.useState({ uuid: "", title: "" }), [S, C] = v.useState(!1), {
    query: P,
    setQuery: N,
    error: E,
    retry: A,
    loading: O,
    scripts: I,
    getAvailableScripts: z,
    loadScripts: W,
    saveScript: L,
    updateScript: J,
    getScriptAction: B,
    deleteScriptAction: K
  } = M_(), pe = Ir(I, O || !!E, W, c), de = { error: r.error ?? E, busy: r.busy, retry: r.error ? r.retry ?? (() => {
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
        await L(H);
      h(!1);
    }, { exclusive: !0 });
  }, Ce = (H) => r.run(async () => {
    H && await K(H);
  }, { exclusive: !0 });
  return /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
    /* @__PURE__ */ a.jsx(
      zt,
      {
        search: { value: P, onChange: N },
        title: i
      }
    ),
    /* @__PURE__ */ a.jsxs("div", { className: G.page, children: [
      !m && /* @__PURE__ */ a.jsx(qe, { ...de }),
      /* @__PURE__ */ a.jsx(Ot, {}),
      /* @__PURE__ */ a.jsxs("div", { className: `${G.header} ${G.collectionHeader}`, children: [
        /* @__PURE__ */ a.jsxs("div", { className: G.heading, children: [
          c ? /* @__PURE__ */ a.jsx(a.Fragment, {}) : /* @__PURE__ */ a.jsx("h1", { className: G.title, children: k(i) }),
          /* @__PURE__ */ a.jsx("p", { className: G.description, children: k(l ? "Выберите скрипт Home Assistant и укажите типы команд, приходящие с удалённого сервера. Типы вводятся вручную." : "Свяжите распознанную команду со скриптом Home Assistant. Выберите скрипт и задайте условия его запуска.") })
        ] }),
        /* @__PURE__ */ a.jsx("div", { className: G.actions, children: c ? /* @__PURE__ */ a.jsx(tr, { children: /* @__PURE__ */ a.jsx(
          ae,
          {
            variant: "primary",
            onClick: Te,
            children: k("Добавить сценарий")
          }
        ) }) : /* @__PURE__ */ a.jsx(a.Fragment, { children: /* @__PURE__ */ a.jsx(
          ae,
          {
            variant: "primary",
            onClick: Te,
            children: k("🞢 Добавить сценарий")
          }
        ) }) }),
        !c && /* @__PURE__ */ a.jsx(Mr, { value: P, onChange: N })
      ] }),
      /* @__PURE__ */ a.jsxs("div", { className: G.list, children: [
        /* @__PURE__ */ a.jsx(Or, { loading: O, itemCount: (I == null ? void 0 : I.script_actions.length) ?? 0, append: c, children: I == null ? void 0 : I.script_actions.map((H) => /* @__PURE__ */ a.jsx(
          Dr,
          {
            title: H.title,
            subTitle: "Нажмите для редактирования",
            onClick: () => Ee(H)
          },
          H.uuid
        )) }),
        !O && !E && P.trim() && !(I != null && I.script_actions.length) && /* @__PURE__ */ a.jsx("p", { role: "status", children: k("Ничего не найдено") }),
        c ? /* @__PURE__ */ a.jsx("div", { ref: pe, className: G.listSentinel }) : /* @__PURE__ */ a.jsx(a.Fragment, {})
      ] }),
      c ? /* @__PURE__ */ a.jsx(a.Fragment, {}) : /* @__PURE__ */ a.jsx(
        zr,
        {
          page: (I == null ? void 0 : I.page) || 1,
          totalPages: (I == null ? void 0 : I.total_pages) || 1,
          onChange: W
        }
      ),
      /* @__PURE__ */ a.jsx(
        f1,
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
        nx,
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
}, ap = (r) => ({
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
function ip(r) {
  const l = _t(), { query: i, setQuery: c, page: d, loading: f, loadPage: m, updateItems: h, error: g, retry: x } = sp(r);
  return { query: i, setQuery: c, error: g, retry: x, loading: f, commands: d, loadCommands: m, saveCommand: (N, E) => l.saveData(E, N), updateCommand: async (N, E) => {
    if (!E.uuid) return;
    const { uuid: A, ...O } = E, I = await l.updateRecord(A, N, O);
    return await m(), I;
  }, deleteCommand: (N, E) => l.deleteRecord(E, N), setCommandStatus: async (N, E, A) => {
    const O = await l.updateRecordStatus(N, E, A);
    return h((I) => I.map((z) => z.uuid === E ? { ...z, status: A } : z)), O;
  }, getCommandDetails: (N, E) => l.getRecord(E, N) };
}
const mx = {
  main: { list: "get_assistant_commands_short", detail: "get_assistant_command", create: "save_assistant_command", update: "update_assistant_command", remove: "delete_assistant_command", status: "update_assistant_command_status" },
  sub: { list: "get_assistant_sub_commands_short", detail: "get_assistant_sub_command", create: "save_assistant_sub_command", update: "update_assistant_sub_command", remove: "delete_assistant_sub_command", status: "update_assistant_sub_command_status" },
  direct: { list: "get_assistant_sub_direct_controls_short", detail: "get_assistant_sub_direct_control", create: "save_assistant_sub_direct_control", update: "update_assistant_sub_direct_control", remove: "delete_assistant_sub_direct_control", status: "update_assistant_sub_direct_controls_status" },
  template: { list: "get_assistant_sub_direct_control_samples_short", detail: "get_assistant_sub_direct_control_sample", create: "save_assistant_sub_direct_control_sample", update: "update_assistant_sub_direct_control_sample", remove: "delete_assistant_sub_direct_control_sample" }
};
function pl(r, l) {
  const i = mx[r], { query: c, setQuery: d, commands: f, loading: m, loadCommands: h, getCommandDetails: g, saveCommand: x, updateCommand: y, deleteCommand: _, setCommandStatus: S, error: C, retry: P } = ip(i.list), N = qt(), [E, A] = v.useState(!1), [O, I] = v.useState(!1), [z, W] = v.useState(l), [L, J] = v.useState(null), B = () => {
    N.clearError(), I(!1), W(l()), A(!0);
  }, K = (he) => N.run(async () => {
    const ge = await g(i.detail, he);
    I(!0);
    const Ce = { ...ge.data, status: ge.data.status ?? !1 };
    for (const H of ["componentDialog", "subComponentDialog"]) {
      const D = Ce[H];
      D && (D.nextAction = (D.nextAction ?? []).filter(
        (X) => !X.actionTypeComponent || ["children", "custom"].includes(X.actionTypeComponent)
      ));
    }
    W(Ce), A(!0);
  }, { retryable: !0 }), pe = (he, ge) => N.run(async () => {
    i.status && await S(i.status, he, ge);
  }, { exclusive: !0 }), de = (he) => N.run(async () => {
    await _(i.remove, he), await h();
  }, { exclusive: !0 }), Te = () => N.run(async () => {
    await x(i.create, z), A(!1), await h();
  }, { exclusive: !0 }), Ee = () => N.run(async () => {
    await y(i.update, z), A(!1);
  }, { exclusive: !0 });
  return {
    query: c,
    setQuery: d,
    feedback: { error: N.error ?? C, busy: N.busy, retry: N.error ? N.retry ?? (() => {
      N.clearError(), P();
    }) : P },
    listError: C,
    commands: f,
    loading: m,
    loadCommands: h,
    modalOpen: E,
    setModalOpen: A,
    isEdit: O,
    formData: z,
    setFormData: W,
    actionsCommand: L,
    setActionsCommand: J,
    openCreateModal: B,
    openEditModal: K,
    handleToggleStatus: pe,
    handleDelete: de,
    handleCreate: Te,
    handleUpdate: Ee
  };
}
const hx = "_field_1iloj_1", vx = "_label_1iloj_8", yx = "_select_1iloj_14", xi = {
  field: hx,
  label: vx,
  select: yx
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
  return /* @__PURE__ */ a.jsxs("div", { className: xi.field, children: [
    r && /* @__PURE__ */ a.jsx(Qi, { label: r, htmlFor: g, className: xi.label, hint: l }),
    /* @__PURE__ */ a.jsxs(
      "select",
      {
        id: g,
        ...m,
        value: x,
        className: `${xi.select} ${c}`,
        children: [
          !y && /* @__PURE__ */ a.jsx("option", { value: x, children: x }),
          i.map((_) => /* @__PURE__ */ a.jsx("option", { value: _.value, children: k(_.label) }, _.value))
        ]
      }
    )
  ] });
}, gx = "_field_1aipr_1", _x = "_label_1aipr_8", xx = "_textarea_1aipr_14", wx = "_error_1aipr_46", Sx = "_errorText_1aipr_55", Ps = {
  field: gx,
  label: _x,
  textarea: xx,
  error: wx,
  errorText: Sx
}, Ar = ({
  label: r,
  hint: l,
  error: i,
  className: c = "",
  id: d,
  ...f
}) => {
  const m = v.useId(), h = d ?? m;
  return /* @__PURE__ */ a.jsxs("div", { className: Ps.field, children: [
    r && /* @__PURE__ */ a.jsx(Qi, { label: r, htmlFor: h, className: Ps.label, hint: l }),
    /* @__PURE__ */ a.jsx(
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
    i && /* @__PURE__ */ a.jsx("span", { className: Ps.errorText, children: k(i) })
  ] });
};
function Ti({ kind: r, value: l, title: i, onSelect: c }) {
  const d = _t(), [f, m] = v.useState([]), [h, g] = v.useState(!0), [x, y] = v.useState(!1), [_, S] = v.useState(null), [C, P] = v.useState(0), N = v.useRef(null), E = v.useRef(0);
  v.useEffect(() => () => {
    E.current += 1;
  }, []), v.useEffect(() => {
    let z = !1;
    g(!0), S(null);
    const W = r === "nested" ? ["get_assistant_sub_direct_control_samples_short"] : r === "direct" ? ["get_assistant_sub_direct_controls_short"] : ["get_assistant_commands_short", "get_assistant_sub_commands_short"];
    return Promise.all(W.map((L) => d.getAllRecords(L))).then((L) => {
      z || m([...new Map(L.flat().map((J) => [J.uuid, J])).values()]);
    }).catch((L) => {
      z || (S(Jn(L)), N.current = () => P((J) => J + 1));
    }).finally(() => {
      z || g(!1);
    }), () => {
      z = !0;
    };
  }, [d, r, C]), v.useEffect(() => {
    l && i && m((z) => z.map((W) => W.uuid === l ? { ...W, title: i } : W));
  }, [l, i]);
  const A = async (z) => {
    var J;
    if (!z) {
      E.current += 1, S(null), c({ uuid: "", title: "" });
      return;
    }
    const W = f.find((B) => B.uuid === z);
    if (!W) return;
    const L = ++E.current;
    if (S(null), r !== "direct") {
      c(W);
      return;
    }
    y(!0);
    try {
      const B = await d.getRecord(z, "get_assistant_sub_direct_control");
      L === E.current && c({ ...W, mappingType: ((J = B.data.directControl) == null ? void 0 : J.mappingType) ?? "" });
    } catch (B) {
      L === E.current && (S(Jn(B)), N.current = () => {
        A(z);
      });
    } finally {
      L === E.current && y(!1);
    }
  }, O = f.map((z) => ({ value: z.uuid, label: z.title || k("Без названия") }));
  l && !f.some((z) => z.uuid === l) && O.unshift({ value: l, label: i || k("Выбранная команда недоступна") });
  const I = k(r === "nested" ? "subDirectControl" : "uuid");
  return /* @__PURE__ */ a.jsxs("div", { children: [
    /* @__PURE__ */ a.jsx(
      Xn,
      {
        label: I,
        "aria-label": I,
        value: l,
        disabled: h || x,
        options: [{ value: "", label: k(h ? "Загрузка..." : r === "nested" ? "Без вложенных команд" : "Выберите команду") }, ...O],
        onChange: (z) => {
          A(z.target.value);
        }
      }
    ),
    /* @__PURE__ */ a.jsx(qe, { error: _, busy: h || x, retry: () => {
      var z;
      return (z = N.current) == null ? void 0 : z.call(N);
    } })
  ] });
}
const kx = [
  { label: "Ответ из списка фраз", value: "default" },
  { label: "Ответ из скрипта", value: "script_response" }
], Cx = [
  { label: "all", value: "all" },
  { label: "string", value: "string" },
  { label: "int", value: "int" },
  { label: "date", value: "date" },
  { label: "time", value: "time" },
  { label: "Вложенные команды", value: "command" }
], jx = [
  { label: "По умолчанию", value: "children" },
  { label: "По типу ответа скрипта", value: "custom" }
], Ex = "_form_1a1tt_1", Nx = "_field_1a1tt_7", Tx = "_arrayItem_1a1tt_29", Rx = "_logicTabs_1a1tt_46", Px = "_sectionTitle_1a1tt_85", Ax = "_footerActions_1a1tt_92", $x = "_phraseMode_1a1tt_106", bx = "_directTabLabel_1a1tt_122", Lx = "_linkActions_1a1tt_126", Ve = {
  form: Ex,
  field: Nx,
  arrayItem: Tx,
  logicTabs: Rx,
  sectionTitle: Px,
  footerActions: Ax,
  phraseMode: $x,
  directTabLabel: bx,
  linkActions: Lx
}, df = () => ({
  mappingType: "",
  valueType: "",
  voiceCommands: [""],
  manual: !1,
  subDirectControl: ""
}), up = ({
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
    f((P) => ({
      ...P,
      directControl: {
        ...P.directControl ?? df(),
        ...C
      }
    }));
  };
  return /* @__PURE__ */ a.jsx(
    on,
    {
      feedback: l,
      open: r,
      onClose: i,
      onBack: h,
      title: c,
      footer: /* @__PURE__ */ a.jsx("div", { className: Ve.form, children: /* @__PURE__ */ a.jsx(ae, { onClick: y, children: k("Сохранить") }) }),
      children: /* @__PURE__ */ a.jsxs("div", { className: Ve.form, children: [
        /* @__PURE__ */ a.jsx(
          Ye,
          {
            label: k("Название команды"),
            hint: fl(d.uuid),
            required: !0,
            error: g,
            value: d.title,
            onChange: (C) => f((P) => ({
              ...P,
              title: C.target.value
            }))
          }
        ),
        /* @__PURE__ */ a.jsx(
          Ye,
          {
            label: k("mappingType"),
            value: _.mappingType,
            onChange: (C) => S({
              mappingType: C.target.value
            })
          }
        ),
        /* @__PURE__ */ a.jsx(
          Xn,
          {
            label: k("valueType"),
            value: _.valueType,
            options: Cx,
            onChange: (C) => S({
              valueType: C.target.value
            })
          }
        ),
        _.valueType == "command" ? /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
          /* @__PURE__ */ a.jsx("div", { className: Ve.field, children: /* @__PURE__ */ a.jsx(
            Ar,
            {
              label: k("Фразы для запуска"),
              hint: k("Фразы прямой команды — общая часть перед вложенными командами. Например: в основной команде «включи ${свет}», здесь — «свет», во вложенных командах — «в зале» и «в спальне». Получатся «включи свет в зале» и «включи свет в спальне».\nПоле можно оставить пустым: тогда используются только фразы вложенных команд. Один набор вложенных команд можно подключать к разным прямым командам."),
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
            Ti,
            {
              kind: "nested",
              value: Array.isArray(_.subDirectControl) ? _.subDirectControl.length ? "__inline__" : "" : _.subDirectControl,
              title: Array.isArray(_.subDirectControl) ? k("Сохранённые вложенные команды") : _.subDirectControlTitle,
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
function Mx({ target: r, onBack: l, onSaved: i }) {
  const c = _t(), d = qt(), [f, m] = v.useState({ title: "" }), [h, g] = v.useState();
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
    up,
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
  ) : /* @__PURE__ */ a.jsx(on, { open: !0, onClose: l, onBack: l, title: "Перейти к команде", feedback: d, children: d.busy && /* @__PURE__ */ a.jsx("p", { role: "status", children: k("Загрузка...") }) });
}
const Ix = [
  { value: "default", label: "Основной" },
  { value: "default_next_step", label: "Ответ для продолжения диалога" },
  { value: "custom", label: "По типу результата скрипта" }
];
function Dx({ response: r, onChange: l }) {
  const i = (r.actionType ?? "").trim().toLowerCase(), c = ["default", "direct", "default_direct", "next"].includes(i) ? "default" : i === "default_next_step" ? "default_next_step" : "custom";
  return /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
    /* @__PURE__ */ a.jsx(
      Xn,
      {
        label: k("Типы ответов"),
        "aria-label": k("Типы ответов"),
        value: c,
        options: Ix,
        onChange: (d) => l({ actionType: d.target.value === "custom" ? "" : d.target.value })
      }
    ),
    c === "custom" ? /* @__PURE__ */ a.jsx(
      Ye,
      {
        label: k("Тип результата скрипта"),
        placeholder: k("Например, room_required"),
        value: r.actionType ?? "",
        onChange: (d) => l({ actionType: d.target.value })
      }
    ) : null,
    /* @__PURE__ */ a.jsx(
      Ar,
      {
        label: k("voiceResponse"),
        value: r.voiceResponse,
        onChange: (d) => l({ voiceResponse: d.target.value })
      }
    )
  ] });
}
const zx = "_switchRow_1hmmz_1", Ox = "_input_1hmmz_11", Fx = "_track_1hmmz_22", Hx = "_thumb_1hmmz_33", Ux = "_label_1hmmz_62", As = {
  switchRow: zx,
  input: Ox,
  track: Fx,
  thumb: Hx,
  label: Ux
}, Zn = ({ label: r, className: l = "", ...i }) => /* @__PURE__ */ a.jsxs("label", { className: `${As.switchRow} ${l}`, children: [
  /* @__PURE__ */ a.jsx("input", { ...i, type: "checkbox", className: As.input }),
  /* @__PURE__ */ a.jsx("span", { className: As.track, "aria-hidden": "true", children: /* @__PURE__ */ a.jsx("span", { className: As.thumb }) }),
  /* @__PURE__ */ a.jsx("span", { className: As.label, children: k(r) })
] }), Bx = [
  { key: "direct", label: "Прямые команды" },
  { key: "continuations", label: "Продолжения" }
];
function Wx({ component: r, onOpenCommand: l, updateComponentArray: i, addComponentArrayItem: c, removeComponentArrayItem: d }) {
  const f = v.useId(), [m, h] = v.useState("direct"), g = Bx.filter((y) => y.key !== "direct" || !r.forwardText), x = r.forwardText && m === "direct" ? "continuations" : m;
  return /* @__PURE__ */ a.jsxs("div", { className: Ve.form, children: [
    /* @__PURE__ */ a.jsx("div", { className: Ve.logicTabs, role: "tablist", "aria-label": k("Настройки логики"), children: g.map((y) => /* @__PURE__ */ a.jsx(
      "button",
      {
        type: "button",
        role: "tab",
        tabIndex: x === y.key ? 0 : -1,
        onKeyDown: (_) => {
          var P, N;
          const S = g.findIndex((E) => E.key === y.key), C = _.key === "ArrowRight" ? (S + 1) % g.length : _.key === "ArrowLeft" ? (S + g.length - 1) % g.length : _.key === "Home" ? 0 : _.key === "End" ? g.length - 1 : -1;
          C < 0 || (_.preventDefault(), h(g[C].key), (N = (P = _.currentTarget.parentElement) == null ? void 0 : P.querySelectorAll('[role="tab"]')[C]) == null || N.focus());
        },
        id: `${f}-command-logic-tab-${y.key}`,
        "aria-selected": x === y.key,
        "aria-controls": `${f}-command-logic-panel-${y.key}`,
        onClick: () => h(y.key),
        children: y.key === "direct" ? /* @__PURE__ */ a.jsx("span", { className: Ve.directTabLabel, children: k(y.label).replace(" ", `
`) }) : k(y.label)
      },
      y.key
    )) }),
    x === "continuations" && /* @__PURE__ */ a.jsxs("div", { role: "tabpanel", id: `${f}-command-logic-panel-continuations`, "aria-labelledby": `${f}-command-logic-tab-continuations`, children: [
      (r.nextAction ?? []).map((y, _) => /* @__PURE__ */ a.jsxs("div", { className: Ve.arrayItem, children: [
        /* @__PURE__ */ a.jsx(
          Xn,
          {
            label: k("Вид продолжения"),
            value: y.actionTypeComponent || "children",
            options: jx,
            onChange: (S) => i("nextAction", _, {
              actionTypeComponent: S.target.value
            })
          }
        ),
        y.actionTypeComponent == "custom" ? /* @__PURE__ */ a.jsx(
          Ye,
          {
            label: k("Тип результата скрипта"),
            placeholder: k("Например, room_required"),
            value: y.actionType ?? "",
            onChange: (S) => i("nextAction", _, {
              actionType: S.target.value
            })
          }
        ) : /* @__PURE__ */ a.jsx(a.Fragment, {}),
        /* @__PURE__ */ a.jsx(
          Ti,
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
        /* @__PURE__ */ a.jsxs("div", { className: Ve.linkActions, children: [
          y.uuid && /* @__PURE__ */ a.jsx(ae, { variant: "secondary", onClick: () => l({ uuid: y.uuid, kind: "continuation" }, _), children: k("Перейти к команде") }),
          /* @__PURE__ */ a.jsx(
            ae,
            {
              type: "button",
              variant: "remove",
              onClick: () => d("nextAction", _),
              children: k("Удалить")
            }
          )
        ] })
      ] }, _)),
      /* @__PURE__ */ a.jsx(
        ae,
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
          children: k("Добавить ещё")
        }
      )
    ] }),
    x === "direct" && /* @__PURE__ */ a.jsxs("div", { role: "tabpanel", id: `${f}-command-logic-panel-direct`, "aria-labelledby": `${f}-command-logic-tab-direct`, children: [
      (r.nextDirectControl ?? []).map((y, _) => /* @__PURE__ */ a.jsxs("div", { className: Ve.arrayItem, children: [
        /* @__PURE__ */ a.jsx(
          Ti,
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
          Ye,
          {
            label: k("mappingType"),
            hint: k("Переменная для фраз запуска. Например, используйте ${room} во фразе, если здесь указано room."),
            readOnly: !0,
            value: y.mappingType ?? ""
          }
        ),
        /* @__PURE__ */ a.jsxs("div", { className: Ve.linkActions, children: [
          y.uuid && /* @__PURE__ */ a.jsx(ae, { variant: "secondary", onClick: () => l({ uuid: y.uuid, kind: "direct" }, _), children: k("Перейти к команде") }),
          /* @__PURE__ */ a.jsx(
            ae,
            {
              type: "button",
              variant: "remove",
              onClick: () => d("nextDirectControl", _),
              children: k("Удалить")
            }
          )
        ] })
      ] }, _)),
      /* @__PURE__ */ a.jsx(
        ae,
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
          children: k("Добавить ещё")
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
  const _ = _t().getScripts(), S = v.useMemo(() => c[d] ?? ff(), [c, d]);
  v.useEffect(() => {
    r && f((B) => {
      var pe;
      const K = B[d];
      return (pe = K == null ? void 0 : K.nextAction) != null && pe.some((de) => !de.actionTypeComponent) ? { ...B, [d]: {
        ...K,
        nextAction: K.nextAction.map((de) => ({ ...de, actionTypeComponent: de.actionTypeComponent || "children" }))
      } } : B;
    });
  }, [r, c.uuid, d, f]);
  const [C, P] = v.useState(null);
  v.useEffect(() => {
    r || P(null);
  }, [r]);
  const [N, E] = v.useState(!1);
  v.useEffect(() => {
    E(!1), O({});
  }, [r, c.uuid, d]);
  const [A, O] = v.useState({}), I = (B) => {
    f((K) => ({
      ...K,
      [d]: {
        ...K[d] ?? ff(),
        ...B
      }
    }));
  }, z = (B, K, pe) => {
    const de = [...S[B] ?? []];
    de[K] = { ...de[K], ...pe }, I({
      [B]: de
    });
  }, W = (B, K) => {
    I({
      [B]: [...S[B] ?? [], K]
    });
  }, L = (B, K) => {
    I({
      [B]: (S[B] ?? []).filter(
        (pe, de) => de !== K
      )
    });
  }, J = () => {
    const B = {};
    return c.title.trim() || (B.title = "Обязательное поле"), O(B), Object.keys(B).length === 0;
  };
  return /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
    /* @__PURE__ */ a.jsx(
      on,
      {
        suspended: !!C,
        feedback: l,
        open: r,
        onClose: m,
        onBack: h,
        title: N ? "Настроить логику" : i ? "Редактировать" : "Создать",
        footer: /* @__PURE__ */ a.jsx("div", { className: Ve.form, children: N ? /* @__PURE__ */ a.jsx(ae, { variant: "secondary", onClick: () => E(!1), children: k("Назад") }) : /* @__PURE__ */ a.jsxs("div", { className: Ve.footerActions, children: [
          /* @__PURE__ */ a.jsx(ae, { variant: "secondary", onClick: () => E(!0), children: k("Настроить логику") }),
          /* @__PURE__ */ a.jsx(ae, { onClick: () => {
            J() && (i ? x() : g());
          }, children: k(i ? "Обновить" : "Сохранить") })
        ] }) }),
        children: N ? /* @__PURE__ */ a.jsx(
          Wx,
          {
            onOpenCommand: (B, K) => P({ ...B, index: K }),
            component: S,
            updateComponentArray: z,
            addComponentArrayItem: W,
            removeComponentArrayItem: L
          }
        ) : /* @__PURE__ */ a.jsxs("div", { className: Ve.form, children: [
          /* @__PURE__ */ a.jsx(
            Ye,
            {
              label: k("Название команды"),
              hint: fl(c.uuid),
              value: c.title,
              error: A.title,
              onChange: (B) => f({
                ...c,
                title: B.target.value
              })
            }
          ),
          /* @__PURE__ */ a.jsx(
            Xn,
            {
              label: k("Источник ответа"),
              value: ["ha_storage", "ha", "external"].includes(S.answerType) ? "script_response" : S.answerType,
              options: kx,
              onChange: (B) => I({
                answerType: B.target.value
              })
            }
          ),
          /* @__PURE__ */ a.jsx(
            Xn,
            {
              label: k("Скрипт Home Assistant"),
              value: S.script_entity_id ?? "__legacy__",
              options: [
                ...S.script_entity_id === void 0 ? [{ label: k("Использовать существующие сценарии"), value: "__legacy__" }] : [],
                { label: k("Не запускать скрипт"), value: "" },
                ..._.map((B) => ({ label: B.name, value: B.entity_id }))
              ],
              onChange: (B) => I({ script_entity_id: B.target.value })
            }
          ),
          d === "subComponentDialog" && /* @__PURE__ */ a.jsxs("div", { className: Ve.phraseMode, children: [
            /* @__PURE__ */ a.jsx(
              Zn,
              {
                label: k("Отправить команду как есть"),
                checked: !!S.forwardText,
                onChange: (B) => I({ forwardText: B.target.checked })
              }
            ),
            /* @__PURE__ */ a.jsx(ll, { label: "Отправить команду как есть" })
          ] }),
          !(d === "subComponentDialog" && S.forwardText) && /* @__PURE__ */ a.jsx("div", { className: Ve.field, children: /* @__PURE__ */ a.jsx(
            Ar,
            {
              label: k("Фразы для запуска"),
              value: (S.voiceCommands == null ? [] : typeof S.voiceCommands != "object" ? S == null ? void 0 : S.voiceCommands.split(";") : S == null ? void 0 : S.voiceCommands).join(`
`),
              onChange: (B) => I({
                voiceCommands: B.target.value.split(`
`)
              })
            }
          ) }),
          /* @__PURE__ */ a.jsxs("section", { className: Ve.form, "aria-label": k("Ответы"), children: [
            /* @__PURE__ */ a.jsx("h3", { className: Ve.sectionTitle, children: k("Ответы") }),
            (S.voiceResponseArray ?? []).map((B, K) => /* @__PURE__ */ a.jsxs("div", { className: Ve.arrayItem, children: [
              /* @__PURE__ */ a.jsx(
                Dx,
                {
                  response: B,
                  onChange: (pe) => z("voiceResponseArray", K, pe)
                }
              ),
              /* @__PURE__ */ a.jsx(
                ae,
                {
                  type: "button",
                  variant: "remove",
                  onClick: () => L("voiceResponseArray", K),
                  children: k("Удалить")
                }
              )
            ] }, K)),
            /* @__PURE__ */ a.jsx(
              ae,
              {
                type: "button",
                variant: "secondary",
                fullWidth: !0,
                leftIcon: /* @__PURE__ */ a.jsx("span", { "aria-hidden": "true", children: "+" }),
                onClick: () => W("voiceResponseArray", {
                  actionType: "default",
                  voiceResponse: ""
                }),
                children: k("Добавить ещё")
              }
            )
          ] })
        ] })
      }
    ),
    C && /* @__PURE__ */ a.jsx(
      Mx,
      {
        target: C,
        onBack: () => P(null),
        onSaved: (B) => {
          var K;
          C.kind === "direct" ? z("nextDirectControl", C.index, { title: B.title, mappingType: ((K = B.directControl) == null ? void 0 : K.mappingType) ?? "" }) : z("nextAction", C.index, { title: B.title });
        }
      },
      `${C.kind}-${C.uuid}`
    )
  ] });
}, ml = ({ command: r, open: l, onClose: i, onToggleStatus: c, onEdit: d, onDelete: f }) => r ? /* @__PURE__ */ a.jsx(qi, { open: l, title: r.title, uuid: r.uuid, onClose: i, actions: [
  ...c ? [{ label: r.status ? "Выключить" : "Включить", onClick: () => c(r.uuid, !r.status) }] : [],
  { label: "Изменить", variant: "secondary", onClick: () => d(r.uuid) },
  { label: "Удалить", variant: "remove", onClick: () => f(r.uuid) }
] }) : null, Vx = () => ap("componentDialog"), qx = () => {
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
    setActionsCommand: P,
    openCreateModal: N,
    openEditModal: E,
    handleToggleStatus: A,
    handleDelete: O,
    handleCreate: I,
    handleUpdate: z
  } = pl("main", Vx), W = Ir(f, m || !!d, h, r);
  return /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
    /* @__PURE__ */ a.jsx(
      zt,
      {
        search: { value: l, onChange: i },
        title: "Основные команды"
      }
    ),
    /* @__PURE__ */ a.jsxs("div", { className: G.page, children: [
      !g && /* @__PURE__ */ a.jsx(qe, { ...c }),
      /* @__PURE__ */ a.jsx(Ot, {}),
      /* @__PURE__ */ a.jsxs("div", { className: `${G.header} ${G.collectionHeader}`, children: [
        /* @__PURE__ */ a.jsx("div", { className: G.heading, children: r ? /* @__PURE__ */ a.jsx(a.Fragment, {}) : /* @__PURE__ */ a.jsx("h1", { className: G.title, children: k("Основные команды") }) }),
        /* @__PURE__ */ a.jsx("div", { className: G.actions, children: r ? /* @__PURE__ */ a.jsx(tr, { children: /* @__PURE__ */ a.jsx(ae, { variant: "primary", onClick: N, children: k("Добавить сценарий") }) }) : /* @__PURE__ */ a.jsx(ae, { variant: "primary", onClick: N, children: k("🞢 Добавить сценарий") }) }),
        !r && /* @__PURE__ */ a.jsx(Mr, { value: l, onChange: i })
      ] }),
      /* @__PURE__ */ a.jsxs("div", { className: G.list, children: [
        /* @__PURE__ */ a.jsx(Or, { loading: m, itemCount: (f == null ? void 0 : f.data.length) ?? 0, append: r, children: f == null ? void 0 : f.data.map((L) => /* @__PURE__ */ a.jsx(
          Dr,
          {
            title: L.title,
            subTitle: L.status === !1 ? "Выключена" : "Включена",
            onClick: () => P(L)
          },
          L.uuid
        )) }),
        !m && !d && l.trim() && !(f != null && f.data.length) && /* @__PURE__ */ a.jsx("p", { role: "status", children: k("Ничего не найдено") }),
        r ? /* @__PURE__ */ a.jsx("div", { ref: W, className: G.listSentinel }) : /* @__PURE__ */ a.jsx(a.Fragment, {})
      ] }),
      r ? /* @__PURE__ */ a.jsx(a.Fragment, {}) : /* @__PURE__ */ a.jsx(
        zr,
        {
          page: (f == null ? void 0 : f.page) || 1,
          totalPages: (f == null ? void 0 : f.total_pages) || 1,
          onChange: (L) => h(L)
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
          onSave: I,
          onUpdate: z
        }
      ),
      /* @__PURE__ */ a.jsx(
        ml,
        {
          open: !!C,
          command: C,
          onClose: () => P(null),
          onToggleStatus: A,
          onDelete: O,
          onEdit: (L) => E(L)
        }
      )
    ] })
  ] });
}, Qx = () => ap("subComponentDialog"), Kx = () => {
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
    setActionsCommand: P,
    openCreateModal: N,
    openEditModal: E,
    handleToggleStatus: A,
    handleDelete: O,
    handleCreate: I,
    handleUpdate: z
  } = pl("sub", Qx), W = Ir(f, m || !!d, h, r);
  return /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
    /* @__PURE__ */ a.jsx(
      zt,
      {
        search: { value: l, onChange: i },
        title: "Второстепенные команды"
      }
    ),
    /* @__PURE__ */ a.jsxs("div", { className: G.page, children: [
      !g && /* @__PURE__ */ a.jsx(qe, { ...c }),
      r ? /* @__PURE__ */ a.jsx(a.Fragment, {}) : /* @__PURE__ */ a.jsx(Ot, {}),
      /* @__PURE__ */ a.jsxs("div", { className: `${G.header} ${G.collectionHeader}`, children: [
        /* @__PURE__ */ a.jsx("div", { className: G.heading, children: r ? /* @__PURE__ */ a.jsx(a.Fragment, {}) : /* @__PURE__ */ a.jsx("h1", { className: G.title, children: k("Второстепенные команды") }) }),
        /* @__PURE__ */ a.jsx("div", { className: G.actions, children: r ? /* @__PURE__ */ a.jsx(tr, { children: /* @__PURE__ */ a.jsx(ae, { variant: "primary", onClick: N, children: k("Добавить сценарий") }) }) : /* @__PURE__ */ a.jsx(a.Fragment, { children: /* @__PURE__ */ a.jsx(ae, { variant: "primary", onClick: N, children: k("🞢 Добавить сценарий") }) }) }),
        !r && /* @__PURE__ */ a.jsx(Mr, { value: l, onChange: i })
      ] }),
      /* @__PURE__ */ a.jsxs("div", { className: G.list, children: [
        /* @__PURE__ */ a.jsx(Or, { loading: m, itemCount: (f == null ? void 0 : f.data.length) ?? 0, append: r, children: f == null ? void 0 : f.data.map((L) => /* @__PURE__ */ a.jsx(
          Dr,
          {
            title: L.title,
            subTitle: L.status === !1 ? "Выключена" : "Включена",
            onClick: () => P(L)
          },
          L.uuid
        )) }),
        !m && !d && l.trim() && !(f != null && f.data.length) && /* @__PURE__ */ a.jsx("p", { role: "status", children: k("Ничего не найдено") })
      ] }),
      r ? /* @__PURE__ */ a.jsx("div", { ref: W, className: G.listSentinel }) : /* @__PURE__ */ a.jsx(
        zr,
        {
          page: (f == null ? void 0 : f.page) || 1,
          totalPages: (f == null ? void 0 : f.total_pages) || 1,
          onChange: (L) => h(L)
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
          onSave: I,
          onUpdate: z
        }
      ),
      /* @__PURE__ */ a.jsx(
        ml,
        {
          open: !!C,
          command: C,
          onClose: () => P(null),
          onToggleStatus: A,
          onDelete: O,
          onEdit: (L) => E(L)
        }
      )
    ] })
  ] });
}, Yx = [
  { path: "/commands/direct/main", label: "Команды" },
  { path: "/commands/direct/template", label: "Вложенные команды" }
], al = () => {
  const { pathname: r } = pt(), l = Ii();
  return /* @__PURE__ */ a.jsx("div", { className: G.innerTabs, role: "group", "aria-label": k("Раздел прямых команд"), children: Yx.map((i) => /* @__PURE__ */ a.jsx(
    "button",
    {
      type: "button",
      "aria-pressed": r === i.path,
      className: `${G.innerTab} ${r === i.path ? G.activeInnerTab : ""}`,
      onClick: () => l(i.path),
      children: k(i.label)
    },
    i.path
  )) });
}, Gx = () => ({
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
}), Jx = () => {
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
    setActionsCommand: P,
    openCreateModal: N,
    openEditModal: E,
    handleToggleStatus: A,
    handleDelete: O,
    handleCreate: I,
    handleUpdate: z
  } = pl("direct", Gx), W = Ir(f, m || !!d, h, r);
  return /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
    /* @__PURE__ */ a.jsx(
      zt,
      {
        search: { value: l, onChange: i },
        beforeSearch: /* @__PURE__ */ a.jsx(al, {}),
        title: "Прямые команды"
      }
    ),
    /* @__PURE__ */ a.jsxs("div", { className: G.page, children: [
      !g && /* @__PURE__ */ a.jsx(qe, { ...c }),
      r ? /* @__PURE__ */ a.jsx(a.Fragment, {}) : /* @__PURE__ */ a.jsx(Ot, {}),
      /* @__PURE__ */ a.jsxs("div", { className: `${G.header} ${G.collectionHeader}`, children: [
        /* @__PURE__ */ a.jsxs("div", { className: G.heading, children: [
          r ? /* @__PURE__ */ a.jsx(a.Fragment, {}) : /* @__PURE__ */ a.jsx("h1", { className: G.title, children: k("Прямые команды") }),
          !r && /* @__PURE__ */ a.jsx(al, {})
        ] }),
        /* @__PURE__ */ a.jsx("div", { className: G.actions, children: r ? /* @__PURE__ */ a.jsx(tr, { children: /* @__PURE__ */ a.jsx(ae, { variant: "primary", onClick: N, children: k("Добавить сценарий") }) }) : /* @__PURE__ */ a.jsx(ae, { variant: "primary", onClick: N, children: k("🞢 Добавить сценарий") }) }),
        !r && /* @__PURE__ */ a.jsx(Mr, { value: l, onChange: i })
      ] }),
      /* @__PURE__ */ a.jsxs("div", { className: G.list, children: [
        /* @__PURE__ */ a.jsx(Or, { loading: m, itemCount: (f == null ? void 0 : f.data.length) ?? 0, append: r, children: f == null ? void 0 : f.data.map((L) => /* @__PURE__ */ a.jsx(
          Dr,
          {
            title: L.title,
            subTitle: L.status === !1 ? "Выключена" : "Включена",
            onClick: () => P(L)
          },
          L.uuid
        )) }),
        !m && !d && l.trim() && !(f != null && f.data.length) && /* @__PURE__ */ a.jsx("p", { role: "status", children: k("Ничего не найдено") })
      ] }),
      r ? /* @__PURE__ */ a.jsx("div", { ref: W, className: G.listSentinel }) : /* @__PURE__ */ a.jsx(
        zr,
        {
          page: (f == null ? void 0 : f.page) || 1,
          totalPages: (f == null ? void 0 : f.total_pages) || 1,
          onChange: (L) => h(L)
        }
      ),
      /* @__PURE__ */ a.jsx(
        up,
        {
          feedback: c,
          open: g,
          onClose: () => x(!1),
          title: k(y ? "Редактировать прямую команду" : "Создать прямую команду"),
          formData: _,
          setFormData: S,
          onSave: y ? z : I
        }
      ),
      /* @__PURE__ */ a.jsx(
        ml,
        {
          open: !!C,
          command: C,
          onClose: () => P(null),
          onToggleStatus: A,
          onDelete: O,
          onEdit: (L) => E(L)
        }
      )
    ] })
  ] });
}, Xx = "_form_mn1ml_1", Zx = "_arrayItem_mn1ml_8", e0 = "_sectionTitle_mn1ml_25", Zo = {
  form: Xx,
  arrayItem: Zx,
  sectionTitle: e0
}, t0 = ({
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
    var N;
    if (!((N = d.title) != null && N.trim())) {
      g("Обязательное поле");
      return;
    }
    g(""), m();
  }, y = v.useMemo(
    () => d.subDirectControl ?? [],
    [d]
  ), _ = (N) => {
    f((E) => ({
      ...E,
      subDirectControl: N
    }));
  }, S = (N, E) => {
    const A = [...y];
    A[N] = {
      ...A[N],
      ...E
    }, _(A);
  }, C = () => {
    _([
      ...y,
      {
        subMappingType: "",
        subVoiceCommands: ""
      }
    ]);
  }, P = (N) => {
    _(
      y.filter((E, A) => A !== N)
    );
  };
  return /* @__PURE__ */ a.jsx(
    on,
    {
      feedback: l,
      open: r,
      onClose: i,
      title: c,
      footer: /* @__PURE__ */ a.jsx(ae, { onClick: x, children: k("Сохранить") }),
      children: /* @__PURE__ */ a.jsxs("div", { className: Zo.form, children: [
        /* @__PURE__ */ a.jsx(
          Ye,
          {
            label: k("Название команды"),
            hint: fl(d.uuid),
            required: !0,
            error: h,
            value: d.title,
            onChange: (N) => f((E) => ({
              ...E,
              title: N.target.value
            }))
          }
        ),
        /* @__PURE__ */ a.jsxs("section", { className: Zo.form, "aria-label": k("Варианты вложенных команд"), children: [
          /* @__PURE__ */ a.jsx("h3", { className: Zo.sectionTitle, children: k("Варианты вложенных команд") }),
          y.map((N, E) => /* @__PURE__ */ a.jsxs(
            "div",
            {
              className: Zo.arrayItem,
              children: [
                /* @__PURE__ */ a.jsx(
                  Ye,
                  {
                    label: k("Код значения"),
                    value: N.subMappingType ?? "",
                    onChange: (A) => S(E, {
                      subMappingType: A.target.value
                    })
                  }
                ),
                /* @__PURE__ */ a.jsx(
                  Ar,
                  {
                    label: k("Варианты произношения"),
                    rows: 3,
                    value: (Array.isArray(N.subVoiceCommands) ? N.subVoiceCommands : []).join(`
`),
                    onChange: (A) => S(E, {
                      subVoiceCommands: A.target.value.split(`
`).filter(Boolean)
                    })
                  }
                ),
                /* @__PURE__ */ a.jsx(
                  ae,
                  {
                    type: "button",
                    variant: "remove",
                    onClick: () => P(E),
                    children: k("Удалить")
                  }
                )
              ]
            },
            E
          )),
          /* @__PURE__ */ a.jsx(
            ae,
            {
              type: "button",
              variant: "secondary",
              fullWidth: !0,
              leftIcon: /* @__PURE__ */ a.jsx("span", { "aria-hidden": "true", children: "+" }),
              onClick: C,
              children: k("Добавить ещё")
            }
          )
        ] })
      ] })
    }
  );
}, n0 = () => ({
  status: !0,
  title: "",
  subDirectControl: []
}), r0 = () => {
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
    setActionsCommand: P,
    openCreateModal: N,
    openEditModal: E,
    handleDelete: A,
    handleCreate: O,
    handleUpdate: I
  } = pl("template", n0), z = Ir(f, m || !!d, h, r);
  return /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
    /* @__PURE__ */ a.jsx(
      zt,
      {
        search: { value: l, onChange: i },
        beforeSearch: /* @__PURE__ */ a.jsx(al, {}),
        title: "Вложенные команды"
      }
    ),
    /* @__PURE__ */ a.jsxs("div", { className: G.page, children: [
      !g && /* @__PURE__ */ a.jsx(qe, { ...c }),
      !r && /* @__PURE__ */ a.jsx(Ot, {}),
      /* @__PURE__ */ a.jsxs("div", { className: `${G.header} ${G.collectionHeader}`, children: [
        /* @__PURE__ */ a.jsxs("div", { className: G.heading, children: [
          r ? /* @__PURE__ */ a.jsx(a.Fragment, {}) : /* @__PURE__ */ a.jsx("h1", { className: G.title, children: k("Вложенные команды") }),
          !r && /* @__PURE__ */ a.jsx(al, {})
        ] }),
        /* @__PURE__ */ a.jsx("div", { className: G.actions, children: r ? /* @__PURE__ */ a.jsx(tr, { children: /* @__PURE__ */ a.jsx(ae, { variant: "primary", onClick: N, children: k("Добавить сценарий") }) }) : /* @__PURE__ */ a.jsx(ae, { variant: "primary", onClick: N, children: k("🞢 Добавить сценарий") }) }),
        !r && /* @__PURE__ */ a.jsx(Mr, { value: l, onChange: i })
      ] }),
      /* @__PURE__ */ a.jsxs("div", { className: G.list, children: [
        /* @__PURE__ */ a.jsx(Or, { loading: m, itemCount: (f == null ? void 0 : f.data.length) ?? 0, append: r, children: f == null ? void 0 : f.data.map((W) => /* @__PURE__ */ a.jsx(
          Dr,
          {
            title: W.title,
            onClick: () => P(W)
          },
          W.uuid
        )) }),
        !m && !d && l.trim() && !(f != null && f.data.length) && /* @__PURE__ */ a.jsx("p", { role: "status", children: k("Ничего не найдено") })
      ] }),
      r ? /* @__PURE__ */ a.jsx(
        "div",
        {
          ref: z,
          className: G.listSentinel
        }
      ) : /* @__PURE__ */ a.jsx(
        zr,
        {
          page: (f == null ? void 0 : f.page) ?? 1,
          totalPages: (f == null ? void 0 : f.total_pages) ?? 1,
          onChange: (W) => h(
            W
          )
        }
      ),
      /* @__PURE__ */ a.jsx(
        t0,
        {
          feedback: c,
          open: g,
          onClose: () => x(!1),
          title: y ? "Редактировать" : "Создать",
          formData: _,
          setFormData: S,
          onSave: y ? I : O
        }
      ),
      /* @__PURE__ */ a.jsx(
        ml,
        {
          open: !!C,
          command: C,
          onClose: () => P(null),
          onDelete: A,
          onEdit: (W) => E(W)
        }
      )
    ] })
  ] });
}, pf = {
  default_main: "Если ничего не нашёл",
  not_understand: "Если не распознано продолжение",
  finish_miss: "Если продолжение не распознано несколько раз"
};
function cp(r) {
  return r.actionType && pf[r.actionType] ? k(pf[r.actionType]) : r.title;
}
const s0 = "_form_1i0x1_1", o0 = {
  form: s0
}, l0 = ({
  open: r,
  feedback: l,
  isEdit: i,
  formData: c,
  setFormData: d,
  onClose: f,
  onUpdate: m
}) => {
  var _, S;
  const h = c, g = _t().getScripts(), x = h.actionType === "default_main" && !!h.forwardCommandToServer, y = (C) => {
    d((P) => ({
      ...P,
      ...C
    }));
  };
  return /* @__PURE__ */ a.jsx(
    on,
    {
      feedback: l,
      open: r,
      onClose: f,
      title: i ? "Редактировать" : "Создать",
      footer: /* @__PURE__ */ a.jsx(ae, { onClick: m, children: k("Обновить") }),
      children: /* @__PURE__ */ a.jsxs("div", { className: o0.form, children: [
        /* @__PURE__ */ a.jsx(
          Ye,
          {
            label: k("Название команды"),
            hint: fl(c.uuid),
            value: cp(c),
            readOnly: !0
          }
        ),
        /* @__PURE__ */ a.jsx(
          Zn,
          {
            label: k("Завершать диалог"),
            checked: !!h.endStatus,
            onChange: (C) => y({
              endStatus: C.target.checked
            })
          }
        ),
        h.actionType === "default_main" && /* @__PURE__ */ a.jsx(
          Zn,
          {
            label: k("Передать команду серверу"),
            checked: !!h.forwardCommandToServer,
            onChange: (C) => y({
              forwardCommandToServer: C.target.checked
            })
          }
        ),
        h.actionType === "default_main" && h.forwardCommandToServer && /* @__PURE__ */ a.jsx(
          Xn,
          {
            label: k("Скрипт Home Assistant"),
            value: h.script_entity_id ?? "",
            options: [
              { value: "", label: k("Использовать существующие сценарии") },
              ...g.map((C) => ({ value: C.entity_id, label: C.name })),
              ...h.script_entity_id && !g.some((C) => C.entity_id === h.script_entity_id) ? [{ value: h.script_entity_id, label: h.script_entity_id }] : []
            ],
            onChange: (C) => y({ script_entity_id: C.target.value })
          }
        ),
        x ? /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
          /* @__PURE__ */ a.jsx(
            Ye,
            {
              label: k("Тип результата скрипта"),
              value: "success",
              readOnly: !0,
              hint: k("Ожидается ответ скрипта с типом success. После его получения будет озвучен текст из поля ниже.")
            }
          ),
          /* @__PURE__ */ a.jsx(
            Ar,
            {
              rows: 8,
              label: k("Текст озвучки"),
              hint: k("Можно подставить данные из скрипта через ${имя}. Например, для текста «Ответ: ${reply}» передайте reply в поле variables действия ha_dialog_ui.send_command. Имена должны совпадать. Скрипт должен вернуть тип success."),
              placeholder: k("Например: ${reply}"),
              value: ((S = (_ = h.voiceResponseArray) == null ? void 0 : _.find((C) => C.actionType === "success")) == null ? void 0 : S.voiceResponse) ?? "",
              onChange: (C) => y({ voiceResponseArray: [{ actionType: "success", voiceResponse: C.target.value }] })
            }
          )
        ] }) : /* @__PURE__ */ a.jsx(
          Ar,
          {
            rows: 8,
            "aria-label": k("Ответное сообщение"),
            label: k("Ответное сообщение"),
            value: h.voiceResponse,
            onChange: (C) => y({
              voiceResponse: C.target.value
            })
          }
        )
      ] })
    }
  );
}, a0 = () => {
  const r = qt(), l = ot(), [i, c] = v.useState(!1), [d, f] = v.useState(!1), [m, h] = v.useState({ title: "" }), {
    error: g,
    retry: x,
    loading: y,
    loadCommands: _,
    getCommandDetails: S,
    updateCommand: C,
    commands: P
  } = ip("get_assistant_settings_short"), N = Ir(P, y || !!g, _, l), E = { error: r.error ?? g, busy: r.busy, retry: r.error ? r.retry ?? (() => {
    r.clearError(), x();
  }) : x }, A = (I) => r.run(async () => {
    f(!0);
    const z = await S("get_assistant_setting", I.uuid);
    h(z.data), c(!0);
  }, { retryable: !0 }), O = () => r.run(async () => {
    await C("update_assistant_setting", m), c(!1);
  }, { exclusive: !0 });
  return /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
    /* @__PURE__ */ a.jsx(
      zt,
      {
        title: "Ответы по умолчанию"
      }
    ),
    /* @__PURE__ */ a.jsxs("div", { className: G.page, children: [
      !i && /* @__PURE__ */ a.jsx(qe, { ...E }),
      l ? /* @__PURE__ */ a.jsx(a.Fragment, {}) : /* @__PURE__ */ a.jsx(Ot, {}),
      /* @__PURE__ */ a.jsx("div", { className: `${G.header} ${G.collectionHeader}`, children: /* @__PURE__ */ a.jsx("div", { className: G.headerTop, children: /* @__PURE__ */ a.jsx("div", { className: G.heading, children: !l && /* @__PURE__ */ a.jsx("h1", { className: G.title, children: k("Ответы по умолчанию") }) }) }) }),
      /* @__PURE__ */ a.jsx("div", { className: G.list, children: /* @__PURE__ */ a.jsx(Or, { loading: y, itemCount: (P == null ? void 0 : P.data.length) ?? 0, append: l, children: P == null ? void 0 : P.data.map((I) => /* @__PURE__ */ a.jsx(
        Dr,
        {
          title: cp(I),
          onClick: () => A(I)
        },
        I.uuid
      )) }) }),
      l ? /* @__PURE__ */ a.jsx("div", { ref: N, className: G.listSentinel }) : /* @__PURE__ */ a.jsx(
        zr,
        {
          page: (P == null ? void 0 : P.page) || 1,
          totalPages: (P == null ? void 0 : P.total_pages) || 1,
          onChange: (I) => _(I)
        }
      ),
      /* @__PURE__ */ a.jsx(
        l0,
        {
          feedback: E,
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
}, i0 = (r, l) => {
  const i = new Blob([JSON.stringify(l, null, 2)], {
    type: "application/json;charset=utf-8"
  }), c = URL.createObjectURL(i), d = document.createElement("a");
  d.href = c, d.download = r, document.body.appendChild(d), d.click(), d.remove(), URL.revokeObjectURL(c);
};
class Nt extends Error {
}
const dp = {
  scripts: { list: "get_script_actions_short", detail: "get_script_action", import: "import_script_actions" },
  scenarios: { list: "get_assistant_sub_commands_short", detail: "get_assistant_sub_command", import: "import_assistant_sub_commands" }
}, Vt = (r) => r !== null && typeof r == "object" && !Array.isArray(r);
async function u0(r, l) {
  if (l === "settings") {
    const d = await r.getData("get_settings"), f = Vt(d) && Vt(d.result) ? d.result : d;
    if (!Vt(f)) throw new Nt("Файл не содержит корректные настройки.");
    return Object.fromEntries(["theme", "client_id", "is_admin", "active_remout", "api_commands_enabled", "api_commands_token", "remout", "timer_alarm"].filter((h) => h in f).map((h) => [h, f[h]]));
  }
  if (l === "scenarios") return r.getData("export_command_bundle");
  const i = dp[l], c = await r.getAllRecords(i.list);
  return Promise.all(c.map(async (d) => {
    const f = await r.getRecord(d.uuid, i.detail);
    return Vt(f) ? f.data : void 0;
  }));
}
function c0(r, l) {
  let i;
  try {
    i = JSON.parse(r);
  } catch {
    throw new Nt("Некорректный JSON-файл.");
  }
  if (l === "settings") {
    const d = { theme: "string", client_id: "string", is_admin: "boolean", active_remout: "boolean", api_commands_enabled: "boolean", api_commands_token: "string", remout: "object", timer_alarm: "object" };
    if (!Vt(i) || !Object.keys(i).length || Object.keys(i).some((f) => !d[f] || typeof i[f] !== d[f])) throw new Nt("Файл не содержит корректные настройки.");
    if (i.theme !== void 0 && (typeof i.theme != "string" || !["dark", "light"].includes(i.theme))) throw new Nt("Файл не содержит корректные настройки.");
    for (const [f, m] of [["remout", ["base_url", "token", "client_id"]], ["timer_alarm", ["global_music_timer", "global_music_alarm"]]])
      if (f in i && (!Vt(i[f]) || Object.entries(i[f]).some(([h, g]) => !m.includes(h) || typeof g != "string"))) throw new Nt("Файл не содержит корректные настройки.");
    return i;
  }
  if (l === "scenarios" && Vt(i)) {
    const d = ["commands", "sub_commands", "direct_commands", "templates", "settings"];
    if (i.format !== "ha-dialog-ui-commands" || i.version !== 1 || Object.keys(i).length !== 7 || d.some((f) => !Array.isArray(i[f]))) throw new Nt("Некорректный файл сценариев или неподдерживаемая версия.");
    for (const f of d) {
      const m = /* @__PURE__ */ new Set(), h = i[f];
      if (!Array.isArray(h)) throw new Nt("Ожидается массив записей JSON.");
      for (const g of h) {
        if (!Vt(g) || typeof g.uuid != "string" || !g.uuid.trim() || m.has(g.uuid) || typeof g.title != "string") throw new Nt("Некорректные или повторяющиеся ID записей.");
        m.add(g.uuid);
      }
    }
    return i;
  }
  if (!Array.isArray(i)) throw new Nt("Ожидается массив записей JSON.");
  const c = /* @__PURE__ */ new Set();
  for (const d of i) {
    if (!Vt(d) || typeof d.uuid != "string" || !d.uuid.trim() || c.has(d.uuid)) throw new Nt("Некорректные или повторяющиеся ID записей.");
    if (c.add(d.uuid), !(l === "scripts" ? typeof d.name == "string" && typeof d.script_entity_id == "string" : typeof d.title == "string" && typeof d.status == "boolean" && Vt(d.subComponentDialog) && typeof d.subComponentDialog.endStatus == "boolean" && typeof d.subComponentDialog.actionType == "string" && typeof d.subComponentDialog.answerType == "string")) throw new Nt("Нужен файл с полными записями. Краткий список названий загрузить нельзя.");
  }
  return i;
}
async function d0(r, l, i) {
  const c = c0(i, l);
  return await r.saveData(c, l === "settings" ? "import_settings" : l === "scenarios" && !Array.isArray(c) ? "import_command_bundle" : dp[l].import), c;
}
const f0 = "_grid_fc8hl_1", p0 = "_card_fc8hl_8", m0 = "_actions_fc8hl_23", h0 = "_description_fc8hl_29", v0 = "_page_fc8hl_36", $s = {
  grid: f0,
  card: p0,
  actions: m0,
  description: h0,
  page: v0
}, y0 = [
  { kind: "scripts", title: "Действия удалённых команд", description: "Привязки команд к скриптам Home Assistant и условия запуска. Самих скриптов HA в файле нет.", download: "Скачать скрипты", upload: "Загрузить скрипты" },
  { kind: "scenarios", title: "Сценарии", description: "Все разделы «Команды»: основные, второстепенные, прямые, шаблоны и ответы по умолчанию. ID и связи сохраняются.", download: "Скачать сценарии", upload: "Загрузить сценарии" },
  { kind: "settings", title: "Настройки интеграции", description: "Тема, параметры подключения, API и звуки таймеров и будильников. Язык интерфейса в файл не входит.", download: "Скачать настройки", upload: "Загрузить настройки" }
], g0 = () => {
  const r = _t(), l = Lr(), i = ot(), [c, d] = v.useState(!1), [f, m] = v.useState(""), [h, g] = v.useState(!1), x = v.useRef(null), y = v.useRef(null), _ = v.useRef("scripts"), S = async (C, P = !1) => {
    x.current = P ? C : null, d(!0), m(""), g(!1);
    try {
      await C();
    } catch (N) {
      g(!0), m(N instanceof Nt ? N.message : Jn(N));
    } finally {
      d(!1);
    }
  };
  return /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
    /* @__PURE__ */ a.jsx(zt, { title: k("Импорт и экспорт") }),
    /* @__PURE__ */ a.jsxs("div", { className: `${G.page} ${$s.page}`, children: [
      /* @__PURE__ */ a.jsx(Ot, {}),
      !i && /* @__PURE__ */ a.jsx("h1", { children: k("Импорт и экспорт") }),
      /* @__PURE__ */ a.jsx("div", { className: $s.grid, children: y0.filter((C) => C.kind === "scripts" ? l === !0 : C.kind !== "scenarios" || l === !1).map((C) => /* @__PURE__ */ a.jsxs("section", { className: $s.card, children: [
        /* @__PURE__ */ a.jsx("h2", { children: k(C.title) }),
        /* @__PURE__ */ a.jsx("p", { className: $s.description, children: k(C.description) }),
        /* @__PURE__ */ a.jsxs("div", { className: $s.actions, children: [
          /* @__PURE__ */ a.jsx(ae, { disabled: c, onClick: () => S(async () => {
            i0(`ha-dialog-ui-${C.kind}.json`, await u0(r, C.kind));
          }, !0), children: k(C.download) }),
          /* @__PURE__ */ a.jsx(ae, { variant: "secondary", disabled: c, onClick: () => {
            var P;
            _.current = C.kind, (P = y.current) == null || P.click();
          }, children: k(C.upload) })
        ] })
      ] }, C.kind)) }),
      /* @__PURE__ */ a.jsx("input", { ref: y, type: "file", accept: ".json,application/json", hidden: !0, onChange: (C) => {
        var E;
        const P = (E = C.target.files) == null ? void 0 : E[0], N = _.current;
        C.target.value = "", P && S(async () => {
          const A = await d0(r, N, await P.text());
          N === "settings" && A !== null && typeof A == "object" && !Array.isArray(A) && (typeof A.theme == "string" && window.dispatchEvent(new CustomEvent("ha-dialog-ui-theme-change", { detail: A.theme })), typeof A.active_remout == "boolean" && window.dispatchEvent(new CustomEvent(sl, { detail: A.active_remout }))), m("Данные загружены.");
        });
      } }),
      c && /* @__PURE__ */ a.jsx("p", { role: "status", children: k("Обработка файла...") }),
      /* @__PURE__ */ a.jsx(qe, { error: h ? f : null, busy: c, retry: x.current ? () => {
        x.current && S(x.current, !0);
      } : void 0 }),
      !h && f && /* @__PURE__ */ a.jsx("p", { role: "status", children: k(f) })
    ] })
  ] });
};
function _0() {
  const r = _t(), [l, i] = v.useState(null), [c, d] = v.useState([]), f = qt(), m = qt(), h = v.useCallback(() => f.run(async () => {
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
    await r.saveData(y, "save_settings"), typeof y.api_commands_enabled == "boolean" && window.dispatchEvent(new CustomEvent(ji, { detail: y.api_commands_enabled })), typeof y.active_remout == "boolean" && window.dispatchEvent(new CustomEvent(sl, { detail: y.active_remout }));
  };
  return { loading: f.busy, settings: l, musicOptions: c, saveSettings: x, settingsFeedback: f, musicFeedback: m };
}
const x0 = "_form_1ijxr_1", w0 = "_field_1ijxr_7", S0 = "_input_1ijxr_13", k0 = "_label_1ijxr_29", C0 = "_help_1ijxr_35", j0 = "_toggleHelp_1ijxr_40", tt = {
  form: x0,
  field: w0,
  input: S0,
  label: k0,
  help: C0,
  toggleHelp: j0
}, E0 = ({ data: r, onChange: l }) => {
  const i = (c, d) => {
    l({
      ...r,
      [c]: d
    });
  };
  return /* @__PURE__ */ a.jsxs("div", { className: tt.form, children: [
    /* @__PURE__ */ a.jsx(Ye, { label: k("Base URL"), value: r.base_url ?? "", placeholder: k("http://192.168.31.83:9379"), onChange: (c) => i("base_url", c.target.value) }),
    /* @__PURE__ */ a.jsx(Ye, { label: k("Token"), value: r.token ?? "", placeholder: k("Bearer ..."), onChange: (c) => i("token", c.target.value) })
  ] });
}, N0 = ({ data: r, musicOptions: l, musicUnavailable: i, onChange: c }) => {
  const d = (m, h) => {
    c({
      ...r,
      [m]: h
    });
  }, f = (m, h, g = "") => {
    const x = l.some((y) => y.value === g);
    return /* @__PURE__ */ a.jsxs("label", { className: tt.field, children: [
      /* @__PURE__ */ a.jsx("span", { className: tt.label, children: k(m) }),
      /* @__PURE__ */ a.jsxs(
        "select",
        {
          className: tt.input,
          value: g,
          onChange: (y) => d(h, y.target.value),
          children: [
            /* @__PURE__ */ a.jsx("option", { value: "", children: k("Не выбрано") }),
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
    l.length === 0 && !i && /* @__PURE__ */ a.jsx("span", { className: tt.help, children: k("Музыка на сервере не найдена.") })
  ] });
}, T0 = ({ data: r, onChange: l }) => {
  const i = Ef(), c = (d, f) => {
    l({
      ...r,
      [d]: f
    });
  };
  return /* @__PURE__ */ a.jsxs("div", { className: tt.form, children: [
    /* @__PURE__ */ a.jsxs("label", { className: tt.field, children: [
      /* @__PURE__ */ a.jsx("span", { className: tt.label, children: k("Язык интерфейса") }),
      /* @__PURE__ */ a.jsxs(
        "select",
        {
          className: tt.input,
          value: i,
          onChange: (d) => Kh(d.target.value === "en" ? "en" : "ru"),
          children: [
            /* @__PURE__ */ a.jsx("option", { value: "ru", children: "Русский" }),
            /* @__PURE__ */ a.jsx("option", { value: "en", children: "English" })
          ]
        }
      )
    ] }),
    /* @__PURE__ */ a.jsx(
      Ye,
      {
        label: k("Client ID"),
        value: r.client_id ?? "",
        onChange: (d) => c("client_id", d.target.value),
        placeholder: k("Уникальный идентификатор клиента")
      }
    ),
    /* @__PURE__ */ a.jsxs("label", { className: tt.field, children: [
      /* @__PURE__ */ a.jsx("span", { className: tt.label, children: k("Theme") }),
      /* @__PURE__ */ a.jsxs("select", { className: tt.input, value: r.theme ?? "dark", onChange: (d) => c("theme", d.target.value), children: [
        /* @__PURE__ */ a.jsx("option", { value: "dark", children: k("dark") }),
        /* @__PURE__ */ a.jsx("option", { value: "light", children: k("light") })
      ] })
    ] }),
    /* @__PURE__ */ a.jsx(Zn, { label: k("Is admin"), checked: !!r.is_admin, onChange: (d) => c("is_admin", d.target.checked) })
  ] });
}, R0 = ({ data: r, onChange: l }) => {
  const i = (c, d) => l({ ...r, [c]: d });
  return /* @__PURE__ */ a.jsxs("div", { className: tt.form, children: [
    /* @__PURE__ */ a.jsxs("div", { className: tt.toggleHelp, children: [
      /* @__PURE__ */ a.jsx(Zn, { label: k("Подключаться к удалённому серверу"), checked: !!r.active_remout, onChange: (c) => i("active_remout", c.target.checked) }),
      /* @__PURE__ */ a.jsx(ll, { label: "Подключаться к удалённому серверу", description: "Интеграция подключается к существующему удалённому серверу и получает от него команды по SSE. Для их выполнения используются «Действия удалённых команд», а локальные разделы команд скрываются. Этот переключатель не запускает новый сервер." })
    ] }),
    /* @__PURE__ */ a.jsxs("div", { className: tt.toggleHelp, children: [
      /* @__PURE__ */ a.jsx(Zn, { label: k("Включить API"), checked: !!r.api_commands_enabled, onChange: (c) => i("api_commands_enabled", c.target.checked) }),
      /* @__PURE__ */ a.jsx(ll, { label: "Включить API", description: "Позволяет внешним приложениям отправлять команды в интеграцию и обмениваться с ней событиями по HTTP API. Адреса: /api/dialog/commands, /api/dialog/events, /api/dialog/event. Для доступа нужен токен API команд из поля ниже." })
    ] }),
    r.api_commands_enabled && /* @__PURE__ */ a.jsx(
      Ye,
      {
        label: k("API Commands Token"),
        value: r.api_commands_token ?? "",
        onChange: (c) => i("api_commands_token", c.target.value),
        placeholder: k("Ключ доступа для API endpoints"),
        type: "password"
      }
    )
  ] });
}, il = {
  base_url: "",
  token: ""
}, P0 = {
  global_music_timer: "",
  global_music_alarm: ""
}, mf = {
  remout: il,
  timer_alarm: P0,
  theme: "dark",
  is_admin: !1,
  active_remout: !1,
  client_id: "",
  api_commands_enabled: !1,
  api_commands_token: ""
}, A0 = (r) => ({
  base_url: (r == null ? void 0 : r.base_url) ?? "",
  token: (r == null ? void 0 : r.token) ?? ""
}), $0 = (r) => ({
  global_music_timer: (r == null ? void 0 : r.global_music_timer) ?? "",
  global_music_alarm: (r == null ? void 0 : r.global_music_alarm) ?? ""
}), b0 = (r) => ({
  remout: A0(r == null ? void 0 : r.remout),
  timer_alarm: $0(r == null ? void 0 : r.timer_alarm),
  theme: (r == null ? void 0 : r.theme) ?? "dark",
  is_admin: !!(r != null && r.is_admin),
  active_remout: !!(r != null && r.active_remout),
  client_id: (r == null ? void 0 : r.client_id) ?? "",
  api_commands_enabled: !!(r != null && r.api_commands_enabled),
  api_commands_token: (r == null ? void 0 : r.api_commands_token) ?? ""
}), hf = (r, l) => {
  const i = {};
  return Object.keys(r).forEach((c) => {
    const d = c;
    r[d] !== l[d] && (i[d] = r[d]);
  }), i;
}, vf = (r, l) => {
  const i = {}, c = hf(r.timer_alarm, l.timer_alarm);
  if (Object.keys(c).length > 0 && (i.timer_alarm = c), r.theme !== l.theme && (i.theme = r.theme), r.is_admin !== l.is_admin && (i.is_admin = r.is_admin), r.active_remout !== l.active_remout && (i.active_remout = r.active_remout), r.client_id !== l.client_id && (i.client_id = r.client_id), r.api_commands_enabled !== l.api_commands_enabled && (i.api_commands_enabled = r.api_commands_enabled), r.api_commands_token !== l.api_commands_token && (i.api_commands_token = r.api_commands_token), r.active_remout) {
    const d = hf(r.remout ?? il, l.remout ?? il);
    Object.keys(d).length > 0 && (i.remout = d);
  }
  return i;
}, L0 = () => {
  const r = ot(), [l, i] = v.useState(mf), c = qt(), [d, f] = v.useState(mf), { settings: m, musicOptions: h, saveSettings: g, settingsFeedback: x, musicFeedback: y } = _0();
  v.useEffect(() => {
    if (!m) return;
    const P = b0(m);
    i(P), f(P), window.dispatchEvent(new CustomEvent("ha-dialog-ui-theme-change", { detail: P.theme }));
  }, [m]);
  const _ = async (P) => {
    i((N) => ({ ...N, ...P })), P.theme && P.theme !== l.theme && (window.dispatchEvent(new CustomEvent("ha-dialog-ui-theme-change", { detail: P.theme })), await c.run(async () => {
      await g({ theme: P.theme }), f((N) => ({ ...N, theme: P.theme }));
    }, { exclusive: !0 }));
  }, S = () => c.run(async () => {
    await g(vf(l, d)), f(l);
  }, { exclusive: !0 }), C = !!m && Object.keys(vf(l, d)).length > 0;
  return /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
    /* @__PURE__ */ a.jsx(
      zt,
      {
        title: k("Настройки")
      }
    ),
    /* @__PURE__ */ a.jsxs("div", { className: G.page, children: [
      /* @__PURE__ */ a.jsx(Ot, {}),
      r ? /* @__PURE__ */ a.jsx(a.Fragment, {}) : /* @__PURE__ */ a.jsx("h1", { children: k("Настройки") }),
      /* @__PURE__ */ a.jsxs("div", { className: G.settingsSections, children: [
        /* @__PURE__ */ a.jsx(qe, { ...x }),
        /* @__PURE__ */ a.jsx(qe, { ...y }),
        /* @__PURE__ */ a.jsx(qe, { ...c }),
        /* @__PURE__ */ a.jsxs("section", { className: G.settingsSection, "aria-label": k("Общие"), children: [
          /* @__PURE__ */ a.jsx("h2", { children: k("Общие") }),
          /* @__PURE__ */ a.jsx(
            T0,
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
        /* @__PURE__ */ a.jsxs("section", { className: G.settingsSection, "aria-label": k("Подключения"), children: [
          /* @__PURE__ */ a.jsx("h2", { children: k("Подключения") }),
          /* @__PURE__ */ a.jsxs("div", { className: G.connectionFields, children: [
            /* @__PURE__ */ a.jsx(R0, { data: l, onChange: _ }),
            l.active_remout && /* @__PURE__ */ a.jsx(
              E0,
              {
                data: l.remout ?? il,
                onChange: (P) => i((N) => ({ ...N, remout: P }))
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ a.jsxs("section", { className: G.settingsSection, "aria-label": k("Timer / Alarm"), children: [
          /* @__PURE__ */ a.jsx("h2", { children: k("Timer / Alarm") }),
          /* @__PURE__ */ a.jsx(
            N0,
            {
              data: l.timer_alarm,
              musicOptions: h,
              musicUnavailable: y.busy || !!y.error,
              onChange: (P) => i({ ...l, timer_alarm: P })
            }
          )
        ] })
      ] }),
      C && (r ? /* @__PURE__ */ a.jsx("div", { className: G.settingsMobileActions, children: /* @__PURE__ */ a.jsx(
        ae,
        {
          variant: "primary",
          disabled: c.busy || x.busy || !m,
          onClick: S,
          children: k("Сохранить")
        }
      ) }) : /* @__PURE__ */ a.jsx("div", { className: G.settingsActions, children: /* @__PURE__ */ a.jsx(ae, { disabled: c.busy || x.busy || !m, onClick: S, children: k("Сохранить") }) }))
    ] })
  ] });
}, Ri = (r) => {
  if (typeof r == "number") return Math.max(0, r);
  const l = r.split(":").map(Number);
  return l.some((i) => !Number.isFinite(i) || i < 0) ? 0 : l.length === 3 ? l[0] * 3600 + l[1] * 60 + l[2] : l.length === 2 ? l[0] * 60 + l[1] : l.length === 1 ? l[0] : 0;
}, fp = (r) => typeof r == "string" || typeof r == "number" ? Ri(r) : r ? typeof r.total_seconds == "number" ? Math.max(0, r.total_seconds) : Ri(r.count_timer || "") : 0, M0 = (r, l = "on", i = Date.now()) => {
  if (typeof r == "string" || typeof r == "number") return Ri(r);
  if (!r) return 0;
  if (l !== "paused" && r.date_end && /(?:Z|[+-]\d{2}:?\d{2})$/i.test(r.date_end)) {
    const c = Date.parse(r.date_end);
    if (Number.isFinite(c)) return Math.max(0, Math.ceil((c - i) / 1e3));
  }
  return typeof r.remaining_seconds == "number" ? Math.max(0, r.remaining_seconds) : fp(r);
}, Pi = (r) => r !== null && typeof r == "object", Gn = (r) => {
  const l = Pi(r) && "result" in r ? r.result : r;
  return Pi(l) && "data" in l ? l.data : l;
}, I0 = (r) => {
  const l = Math.max(1, Number(r) || 1);
  return new Date(Date.now() + l * 1e3).toISOString();
}, yf = (r) => {
  const l = Math.max(1, Number(r) || 1), i = Math.floor(l / 3600), c = Math.floor(l % 3600 / 60), d = l % 60;
  return `${String(i).padStart(2, "0")}:${String(c).padStart(2, "0")}:${String(d).padStart(2, "0")}`;
}, gf = (r) => {
  const l = Gn(r);
  return Array.isArray(l) ? l : Pi(l) && Array.isArray(l.data) ? l.data : [];
};
function pp() {
  const r = _t(), l = qt(), [i, c] = v.useState([]), [d, f] = v.useState([]), [m, h] = v.useState([]), [g, x] = v.useState(!0), y = v.useMemo(() => r.getDevices(), [r]), _ = v.useCallback(async () => {
    const W = await r.getPage("get_timer_requests_short", 1, 100), L = await Promise.all(
      gf(W).map(async (J) => {
        var K;
        const B = await r.getRecord(J.uuid, "get_timer_request");
        return ((K = Gn(B)) == null ? void 0 : K.data) ?? Gn(B);
      })
    );
    c(L.filter((J) => !!J && J.action_type === "create_timer"));
  }, [r]), S = v.useCallback(async () => {
    const W = await r.getPage("get_alarm_requests_short", 1, 100), L = await Promise.all(
      gf(W).map(async (J) => {
        var K;
        const B = await r.getRecord(J.uuid, "get_alarm_request");
        return ((K = Gn(B)) == null ? void 0 : K.data) ?? Gn(B);
      })
    );
    f(L.filter((J) => !!J && J.action_type !== "delete_alarm"));
  }, [r]), C = v.useCallback(async () => {
    const W = await r.getAllRecords("get_alarm_time_widgets_short"), L = await Promise.all(
      W.map(async (J) => {
        var K;
        const B = await r.getRecord(J.uuid, "get_alarm_time_widget");
        return ((K = Gn(B)) == null ? void 0 : K.data) ?? Gn(B);
      })
    );
    h(L.filter(Boolean));
  }, [r]), P = v.useCallback(async () => {
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
    P();
  }, []);
  const N = async (W, L) => await l.run(async () => {
    await W();
  }, { exclusive: !0 }) ? (await l.run(L, { retryable: !0 }), !0) : !1, E = async (W, L, J = 0.3) => {
    const B = {
      count_timer: yf(L),
      date_end: I0(L)
    };
    return N(() => r.saveData({ name: `Таймер ${yf(L)}`, action_type: "create_timer", device_id: W, timer_time: B, volume_start: J }, "save_timer_request"), _);
  }, A = async (W) => N(() => r.deleteRecord(W.uuid, "delete_timer_request"), _), O = async (W, L, J = 0.3, B = "once", K = []) => N(() => r.saveData({ name: `Будильник ${L}`, action_type: "create_alarm", device_id: W, status: "on", time: L, volume_start: J, repeat_type: B, repeat_days: K }, "save_alarm_request"), async () => {
    await Promise.all([S(), C()]);
  }), I = async (W, L) => N(() => r.updateRecord(W.uuid, "update_alarm_request", { ...W, action_type: "edit_alarm", ...L }), async () => {
    await Promise.all([S(), C()]);
  }), z = async (W) => N(() => r.deleteRecord(W.uuid, "delete_alarm_request"), S);
  return {
    feedback: { ...l, retry: l.error ? l.retry ?? (() => {
      P();
    }) : void 0 },
    alarmTimeWidgets: m,
    refreshAlarmTimes: () => l.run(C, { retryable: !0 }),
    alarms: d,
    createAlarm: O,
    createTimer: E,
    deleteAlarm: z,
    devices: y,
    loading: g,
    stopTimer: A,
    timers: i,
    toTimerSeconds: M0,
    updateAlarm: I
  };
}
const D0 = "_grid_w5y3x_31", z0 = "_card_w5y3x_38", O0 = "_empty_w5y3x_38", F0 = "_cardHeader_w5y3x_47", H0 = "_cardTitle_w5y3x_54", U0 = "_meta_w5y3x_59", B0 = "_form_w5y3x_73", W0 = "_field_w5y3x_79", V0 = "_label_w5y3x_85", q0 = "_input_w5y3x_91", Q0 = "_quickTabs_w5y3x_101", K0 = "_quickTab_w5y3x_101", Y0 = "_activeQuickTab_w5y3x_117", G0 = "_cardLead_w5y3x_135", J0 = "_cardIcon_w5y3x_143", X0 = "_cardButton_w5y3x_148", Z0 = "_wheelPicker_w5y3x_160", ew = "_wheelColumn_w5y3x_173", tw = "_wheelSelect_w5y3x_180", nw = "_footerActions_w5y3x_202", rw = "_saveButton_w5y3x_208", sw = "_volumeLabel_w5y3x_226", ow = "_volumeValue_w5y3x_232", lw = "_alarmTimeFields_w5y3x_237", le = {
  grid: D0,
  card: z0,
  empty: O0,
  cardHeader: F0,
  cardTitle: H0,
  meta: U0,
  form: B0,
  field: W0,
  label: V0,
  input: q0,
  quickTabs: Q0,
  quickTab: K0,
  activeQuickTab: Y0,
  cardLead: G0,
  cardIcon: J0,
  cardButton: X0,
  wheelPicker: Z0,
  wheelColumn: ew,
  wheelSelect: tw,
  footerActions: nw,
  saveButton: rw,
  volumeLabel: sw,
  volumeValue: ow,
  alarmTimeFields: lw
}, aw = [5, 10, 15, 30, 45, 60], _f = (r) => {
  const l = Math.max(0, r), i = Math.floor(l / 3600), c = Math.floor(l % 3600 / 60), d = l % 60;
  return [i, c, d].map((f) => String(f).padStart(2, "0")).join(":");
}, iw = (r, l, i) => Math.max(1, r * 3600 + l * 60 + i), uw = (r) => ({
  hours: Math.floor(r / 3600),
  minutes: Math.floor(r % 3600 / 60),
  seconds: r % 60
}), cw = () => {
  const r = ot(), { feedback: l, createTimer: i, devices: c, loading: d, stopTimer: f, timers: m, toTimerSeconds: h } = pp(), [g, x] = v.useState(!1), [y, _] = v.useState(""), [S, C] = v.useState(0.3), [P, N] = v.useState({ hours: 0, minutes: 5, seconds: 0 }), [E, A] = v.useState({});
  v.useEffect(() => {
    A(Object.fromEntries(m.map((L) => [L.uuid, h(L.timer_time, L.status)])));
  }, [m, h]), v.useEffect(() => {
    const L = window.setInterval(() => {
      A((J) => Object.fromEntries(Object.entries(J).map(([B, K]) => {
        var pe;
        return [B, ((pe = m.find((de) => de.uuid === B)) == null ? void 0 : pe.status) === "paused" ? K : Math.max(0, K - 1)];
      })));
    }, 1e3);
    return () => window.clearInterval(L);
  }, [m]);
  const O = v.useMemo(() => new Map(c.map((L) => [L.id, L.name])), [c]), I = iw(P.hours, P.minutes, P.seconds), z = async () => {
    y && await i(y, I, S) && x(!1);
  }, W = (L) => N(uw(L * 60));
  return /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
    /* @__PURE__ */ a.jsx(zt, { title: k("Таймеры") }),
    /* @__PURE__ */ a.jsxs("div", { className: G.page, children: [
      !g && /* @__PURE__ */ a.jsx(qe, { ...l }),
      /* @__PURE__ */ a.jsx(Ot, {}),
      /* @__PURE__ */ a.jsxs("div", { className: G.header, children: [
        /* @__PURE__ */ a.jsx("div", { className: G.heading, children: r ? /* @__PURE__ */ a.jsx(a.Fragment, {}) : /* @__PURE__ */ a.jsx("h1", { className: G.title, children: k("Таймеры") }) }),
        /* @__PURE__ */ a.jsx("div", { className: G.actions, children: r ? /* @__PURE__ */ a.jsx(tr, { startVisible: !0, children: /* @__PURE__ */ a.jsx(
          ae,
          {
            variant: "primary",
            onClick: () => x(!0),
            children: k("Добавить сценарий")
          }
        ) }) : /* @__PURE__ */ a.jsx(
          ae,
          {
            variant: "primary",
            onClick: () => x(!0),
            children: k("🞢 Создать")
          }
        ) })
      ] }),
      d && /* @__PURE__ */ a.jsx(Ds, {}),
      /* @__PURE__ */ a.jsx("div", { className: le.grid, children: m.length ? m.map((L) => {
        const J = h(L.timer_time, L.status), B = fp(L.timer_time);
        return /* @__PURE__ */ a.jsx("div", { className: le.card, children: /* @__PURE__ */ a.jsxs("div", { className: le.cardHeader, children: [
          /* @__PURE__ */ a.jsxs("div", { className: le.cardLead, children: [
            /* @__PURE__ */ a.jsx(ep, { className: le.cardIcon, size: 26 }),
            /* @__PURE__ */ a.jsxs("div", { children: [
              /* @__PURE__ */ a.jsx("h2", { className: le.cardTitle, children: _f(E[L.uuid] ?? J) }),
              /* @__PURE__ */ a.jsxs("div", { className: le.meta, children: [
                k("Заведен на"),
                " ",
                _f(B),
                " • ",
                O.get(L.device_id) || L.device_id
              ] })
            ] })
          ] }),
          /* @__PURE__ */ a.jsx(ae, { variant: "remove", onClick: () => f(L), children: k("Удалить") })
        ] }) }, L.uuid);
      }) : !d && !l.error && /* @__PURE__ */ a.jsx("div", { className: le.empty, children: k("Нет запущенных таймеров.") }) }),
      /* @__PURE__ */ a.jsx(on, { feedback: l, open: g, onClose: () => x(!1), title: k("Создать таймер"), footer: /* @__PURE__ */ a.jsx("div", { className: le.footerActions, children: /* @__PURE__ */ a.jsx(ae, { className: le.saveButton, onClick: z, disabled: !y, children: k("Создать") }) }), children: /* @__PURE__ */ a.jsxs("div", { className: le.form, children: [
        /* @__PURE__ */ a.jsx("div", { className: le.wheelPicker, "aria-label": k("Длительность таймера"), children: ["hours", "minutes", "seconds"].map((L) => /* @__PURE__ */ a.jsxs("label", { className: le.wheelColumn, children: [
          /* @__PURE__ */ a.jsx("span", { className: le.label, children: k(L === "hours" ? "Часы" : L === "minutes" ? "Минуты" : "Секунды") }),
          /* @__PURE__ */ a.jsx(
            "input",
            {
              className: le.wheelSelect,
              type: "number",
              min: 0,
              max: L === "hours" ? 23 : 59,
              inputMode: "numeric",
              value: P[L],
              onChange: (J) => {
                const B = Math.max(0, Math.min(L === "hours" ? 23 : 59, Math.trunc(Number(J.target.value) || 0)));
                N((K) => ({ ...K, [L]: B }));
              }
            }
          )
        ] }, L)) }),
        /* @__PURE__ */ a.jsxs("div", { className: le.field, children: [
          /* @__PURE__ */ a.jsx("span", { className: le.label, children: k("Быстрое создание") }),
          /* @__PURE__ */ a.jsx("div", { className: le.quickTabs, children: aw.map((L) => /* @__PURE__ */ a.jsxs("button", { type: "button", className: `${le.quickTab} ${I === L * 60 ? le.activeQuickTab : ""}`, onClick: () => W(L), children: [
            L,
            " ",
            k("мин")
          ] }, L)) })
        ] }),
        /* @__PURE__ */ a.jsx(
          Pr,
          {
            label: k("Устройство воспроизведения"),
            placeholder: k("Выберите устройство"),
            value: y,
            options: c.map((L) => ({ value: L.id, label: L.name })),
            onSelect: _
          }
        ),
        /* @__PURE__ */ a.jsxs("label", { className: le.field, children: [
          /* @__PURE__ */ a.jsxs("span", { className: `${le.label} ${le.volumeLabel}`, children: [
            k("Стартовая громкость"),
            " ",
            /* @__PURE__ */ a.jsxs("span", { className: le.volumeValue, children: [
              Math.round(S * 100),
              "%"
            ] })
          ] }),
          /* @__PURE__ */ a.jsx("input", { className: le.input, type: "range", min: "0", max: "1", step: "0.05", value: S, onChange: (L) => C(Number(L.target.value)) })
        ] })
      ] }) })
    ] })
  ] });
}, dw = ({ command: r, open: l, onClose: i, onToggleStatus: c, onEdit: d, onDelete: f }) => {
  if (!r) return null;
  const m = r.status === "on";
  return /* @__PURE__ */ a.jsx(qi, { open: l, title: r.title, uuid: r.uuid, onClose: i, actions: [
    { label: m ? "Выключить" : "Включить", onClick: () => c(r, m ? "off" : "on") },
    { label: "Изменить", variant: "secondary", onClick: () => d(r) },
    { label: "Удалить", variant: "remove", onClick: () => f(r) }
  ] });
}, fw = (r) => {
  const l = /^(\d{1,2}):(\d{2})$/.exec(r.trim());
  return !l || Number(l[1]) > 23 || Number(l[2]) > 59 ? null : `${l[1].padStart(2, "0")}:${l[2]}`;
}, Ai = [
  { key: "mon", label: "Пн" },
  { key: "tue", label: "Вт" },
  { key: "wed", label: "Ср" },
  { key: "thu", label: "Чт" },
  { key: "fri", label: "Пт" },
  { key: "sat", label: "Сб" },
  { key: "sun", label: "Вс" }
], pw = [
  { value: "once", label: "Однократно" },
  { value: "daily", label: "Ежедневно" },
  { value: "weekdays", label: "По будням" },
  { value: "weekends", label: "По выходным" },
  { value: "custom", label: "Выбранные дни" }
], mw = (r = "once", l = []) => r === "daily" ? k("ежедневно") : r === "weekdays" ? k("по будням") : r === "weekends" ? k("по выходным") : r === "custom" ? l.length ? l.map((i) => {
  var c;
  return (c = Ai.find((d) => d.key === i)) != null && c.label ? k(Ai.find((d) => d.key === i).label) : i;
}).join(", ") : k("кастом") : k("однократно"), hw = () => {
  const r = ot(), { feedback: l, alarmTimeWidgets: i, refreshAlarmTimes: c, alarms: d, createAlarm: f, deleteAlarm: m, devices: h, loading: g, updateAlarm: x } = pp(), [y, _] = v.useState(!1), [S, C] = v.useState(null), [P, N] = v.useState(null), [E, A] = v.useState(""), [O, I] = v.useState("08:00"), [z, W] = v.useState(0.3), [L, J] = v.useState("once"), [B, K] = v.useState([]), pe = v.useMemo(() => Array.from(new Set([...i.flatMap((H) => H.time || []), ...d.map((H) => H.time)].map(fw).filter((H) => H !== null))), [i, d]), de = v.useMemo(() => new Map(h.map((H) => [H.id, H.name])), [h]), Te = d.find((H) => H.uuid === S) || null, Ee = async () => {
    if (!E || !O) return;
    const H = d.find((D) => D.uuid === P);
    if (H) {
      if (!await x(H, { device_id: E, time: O, volume_start: z, repeat_type: L, repeat_days: B })) return;
    } else if (!await f(E, O, z, L, B)) return;
    N(null), _(!1);
  }, he = () => {
    N(null), _(!0), c();
  }, ge = (H) => {
    I(H.time), A(H.device_id), W(H.volume_start ?? 0.3), J(H.repeat_type ?? "once"), K(H.repeat_days ?? []), c(), N(H.uuid), C(null), _(!0);
  }, Ce = (H) => K((D) => D.includes(H) ? D.filter((X) => X !== H) : [...D, H]);
  return /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
    /* @__PURE__ */ a.jsx(zt, { title: k("Будильники") }),
    /* @__PURE__ */ a.jsxs("div", { className: G.page, children: [
      !y && /* @__PURE__ */ a.jsx(qe, { ...l }),
      /* @__PURE__ */ a.jsx(Ot, {}),
      /* @__PURE__ */ a.jsxs("div", { className: G.header, children: [
        /* @__PURE__ */ a.jsx("div", { className: G.heading, children: r ? /* @__PURE__ */ a.jsx(a.Fragment, {}) : /* @__PURE__ */ a.jsx("h1", { className: G.title, children: k("Будильники") }) }),
        /* @__PURE__ */ a.jsx("div", { className: G.actions, children: r ? /* @__PURE__ */ a.jsx(tr, { startVisible: !0, children: /* @__PURE__ */ a.jsx(
          ae,
          {
            variant: "primary",
            onClick: he,
            children: k("Добавить сценарий")
          }
        ) }) : /* @__PURE__ */ a.jsx(
          ae,
          {
            variant: "primary",
            onClick: he,
            children: k("🞢 Создать")
          }
        ) })
      ] }),
      g && /* @__PURE__ */ a.jsx(Ds, {}),
      /* @__PURE__ */ a.jsx("div", { className: le.grid, children: d.length ? d.map((H) => /* @__PURE__ */ a.jsx("button", { className: `${le.card} ${le.cardButton}`, type: "button", onClick: () => C(H.uuid), children: /* @__PURE__ */ a.jsxs("div", { className: le.cardHeader, children: [
        /* @__PURE__ */ a.jsxs("div", { className: le.cardLead, children: [
          /* @__PURE__ */ a.jsx(ep, { className: le.cardIcon, size: 26 }),
          /* @__PURE__ */ a.jsxs("div", { children: [
            /* @__PURE__ */ a.jsx("h2", { className: le.cardTitle, children: H.time }),
            /* @__PURE__ */ a.jsxs("div", { className: le.meta, children: [
              mw(H.repeat_type, H.repeat_days),
              " • ",
              de.get(H.device_id) || H.device_id
            ] })
          ] })
        ] }),
        /* @__PURE__ */ a.jsx(
          "div",
          {
            onClick: (D) => D.stopPropagation(),
            onMouseDown: (D) => D.stopPropagation(),
            children: /* @__PURE__ */ a.jsx(Zn, { label: k(""), checked: H.status !== "off", onClick: (D) => D.stopPropagation(), onChange: (D) => x(H, { status: D.currentTarget.checked ? "on" : "off" }) })
          }
        )
      ] }) }, H.uuid)) : !g && !l.error && /* @__PURE__ */ a.jsx("div", { className: le.empty, children: k("Нет будильников.") }) }),
      /* @__PURE__ */ a.jsx(on, { feedback: l, open: y, onClose: () => {
        _(!1), N(null);
      }, title: P ? "Редактировать будильник" : "Создать будильник", footer: /* @__PURE__ */ a.jsx("div", { className: le.footerActions, children: /* @__PURE__ */ a.jsx(ae, { className: le.saveButton, onClick: Ee, disabled: !E || !O, children: k("Сохранить") }) }), children: /* @__PURE__ */ a.jsxs("div", { className: le.form, children: [
        /* @__PURE__ */ a.jsxs("div", { className: le.alarmTimeFields, role: "group", "aria-label": k("Время будильника"), children: [
          /* @__PURE__ */ a.jsx(
            Pr,
            {
              label: k("Часы"),
              value: O.split(":")[0],
              options: Array.from({ length: 24 }, (H, D) => ({ value: String(D).padStart(2, "0"), label: String(D).padStart(2, "0") })),
              onSelect: (H) => I(`${H}:${O.split(":")[1]}`)
            }
          ),
          /* @__PURE__ */ a.jsx(
            Pr,
            {
              label: k("Минуты"),
              value: O.split(":")[1],
              options: Array.from({ length: 60 }, (H, D) => ({ value: String(D).padStart(2, "0"), label: String(D).padStart(2, "0") })),
              onSelect: (H) => I(`${O.split(":")[0]}:${H}`)
            }
          )
        ] }),
        /* @__PURE__ */ a.jsxs("div", { className: le.field, children: [
          /* @__PURE__ */ a.jsx("span", { className: le.label, children: k("Ранее заданное время") }),
          /* @__PURE__ */ a.jsx("div", { className: le.quickTabs, children: pe.length ? pe.map((H) => /* @__PURE__ */ a.jsx("button", { type: "button", className: `${le.quickTab} ${O === H ? le.activeQuickTab : ""}`, onClick: () => I(H), children: H }, H)) : /* @__PURE__ */ a.jsx("span", { className: le.meta, children: k("Нет быстрых значений.") }) })
        ] }),
        /* @__PURE__ */ a.jsx(
          Pr,
          {
            label: k("Повторы"),
            value: L,
            options: pw.map((H) => ({ ...H, label: k(H.label) })),
            onSelect: (H) => J(H)
          }
        ),
        L === "custom" && /* @__PURE__ */ a.jsx("div", { className: le.quickTabs, role: "group", "aria-label": k("Дни повтора"), children: Ai.map((H) => /* @__PURE__ */ a.jsx(
          "button",
          {
            type: "button",
            "aria-pressed": B.includes(H.key),
            className: `${le.quickTab} ${B.includes(H.key) ? le.activeQuickTab : ""}`,
            onClick: () => Ce(H.key),
            children: k(H.label)
          },
          H.key
        )) }),
        /* @__PURE__ */ a.jsx(
          Pr,
          {
            label: k("Устройство воспроизведения"),
            placeholder: k("Выберите устройство"),
            value: E,
            options: h.map((H) => ({ value: H.id, label: H.name })),
            onSelect: A
          }
        ),
        /* @__PURE__ */ a.jsxs("label", { className: le.field, children: [
          /* @__PURE__ */ a.jsxs("span", { className: `${le.label} ${le.volumeLabel}`, children: [
            k("Стартовая громкость"),
            " ",
            /* @__PURE__ */ a.jsxs("span", { className: le.volumeValue, children: [
              Math.round(z * 100),
              "%"
            ] })
          ] }),
          /* @__PURE__ */ a.jsx("input", { className: le.input, type: "range", min: "0", max: "1", step: "0.05", value: z, onChange: (H) => W(Number(H.target.value)) })
        ] })
      ] }) }),
      /* @__PURE__ */ a.jsx(
        dw,
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
}, vw = () => {
  const r = Bi(), l = Wi(), i = Lr(), { pathname: c } = pt(), d = i ? "/scripts" : "/commands/main";
  return (c === "/commands" || c.startsWith("/commands/")) && i !== !1 ? i === null ? /* @__PURE__ */ a.jsx(Ds, {}) : /* @__PURE__ */ a.jsx(Wn, { to: "/scripts", replace: !0 }) : /* @__PURE__ */ a.jsxs(Zv, { children: [
    /* @__PURE__ */ a.jsx(et, { path: "/logs", element: r && l ? /* @__PURE__ */ a.jsx(T_, {}) : /* @__PURE__ */ a.jsx(Wn, { to: d, replace: !0 }) }),
    /* @__PURE__ */ a.jsx(et, { path: "/downloads", element: l ? /* @__PURE__ */ a.jsx(g0, {}) : /* @__PURE__ */ a.jsx(Wn, { to: d, replace: !0 }) }),
    /* @__PURE__ */ a.jsx(
      et,
      {
        path: "/",
        element: /* @__PURE__ */ a.jsx(
          Wn,
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
        element: /* @__PURE__ */ a.jsx(px, {})
      }
    ),
    /* @__PURE__ */ a.jsx(
      et,
      {
        path: "/commands",
        element: /* @__PURE__ */ a.jsx(
          Wn,
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
        element: /* @__PURE__ */ a.jsx(qx, {})
      }
    ),
    /* @__PURE__ */ a.jsx(
      et,
      {
        path: "/commands/sub",
        element: /* @__PURE__ */ a.jsx(Kx, {})
      }
    ),
    /* @__PURE__ */ a.jsx(
      et,
      {
        path: "/commands/direct",
        element: /* @__PURE__ */ a.jsx(
          Wn,
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
        element: /* @__PURE__ */ a.jsx(Jx, {})
      }
    ),
    /* @__PURE__ */ a.jsx(
      et,
      {
        path: "/commands/direct/template",
        element: /* @__PURE__ */ a.jsx(r0, {})
      }
    ),
    /* @__PURE__ */ a.jsx(
      et,
      {
        path: "/commands/settings",
        element: /* @__PURE__ */ a.jsx(a0, {})
      }
    ),
    /* @__PURE__ */ a.jsx(
      et,
      {
        path: "/timer",
        element: /* @__PURE__ */ a.jsx(cw, {})
      }
    ),
    /* @__PURE__ */ a.jsx(
      et,
      {
        path: "/alarm",
        element: /* @__PURE__ */ a.jsx(hw, {})
      }
    ),
    /* @__PURE__ */ a.jsx(
      et,
      {
        path: "/settings",
        element: /* @__PURE__ */ a.jsx(L0, {})
      }
    ),
    /* @__PURE__ */ a.jsx(
      et,
      {
        path: "*",
        element: /* @__PURE__ */ a.jsx(
          Wn,
          {
            to: d,
            replace: !0
          }
        )
      }
    )
  ] });
}, mp = "ha-dialog-ui-theme", wi = (r) => r === "light" ? "light" : "dark", yw = (r) => {
  document.documentElement.dataset.theme = r, document.documentElement.style.colorScheme = r, localStorage.setItem(mp, r);
}, gw = () => {
  const r = qt(), l = Ef(), i = _t(), [c, d] = v.useState(!1), [f, m] = v.useState(null), [h, g] = v.useState(() => wi(localStorage.getItem(mp)));
  return v.useEffect(() => {
    yw(h);
  }, [h]), v.useEffect(() => {
    let x = !0, y = !1, _ = !1, S = !1;
    r.run(async () => {
      const E = await i.getSettings();
      x && (y || g(wi(E.theme)), S || d(!!E.api_commands_enabled), _ || m(!!E.active_remout));
    }, { retryable: !0 });
    const C = (E) => {
      y = !0, g(wi(E.detail));
    }, P = (E) => {
      _ = !0, m(E.detail);
    }, N = (E) => {
      S = !0, d(!!E.detail);
    };
    return window.addEventListener(ji, N), window.addEventListener(sl, P), window.addEventListener("ha-dialog-ui-theme-change", C), () => {
      x = !1, window.removeEventListener(ji, N), window.removeEventListener(sl, P), window.removeEventListener("ha-dialog-ui-theme-change", C);
    };
  }, [i, r.run]), /* @__PURE__ */ a.jsx(Qf.Provider, { value: c, children: /* @__PURE__ */ a.jsx(np.Provider, { value: f, children: /* @__PURE__ */ a.jsxs("div", { className: "appShell", "data-theme": h, lang: l, children: [
    /* @__PURE__ */ a.jsx(qe, { ...r }),
    f === null ? !r.error && /* @__PURE__ */ a.jsx(Ds, {}) : /* @__PURE__ */ a.jsx(vw, {})
  ] }) }) });
};
class _w {
  constructor(l) {
    En(this, "hass");
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
        var N;
        const C = String((S == null ? void 0 : S.media_content_id) || ""), P = String((S == null ? void 0 : S.title) || C);
        if (C) {
          if (S != null && S.can_expand) {
            try {
              await g(C);
            } catch (E) {
              f.push(E);
            }
            return;
          }
          if (l.test(P) || l.test(C) || (S == null ? void 0 : S.media_content_type) === "music" || (N = S == null ? void 0 : S.media_content_type) != null && N.startsWith("audio/")) {
            const E = "media-source://media_source/local/", A = C.startsWith(E) ? C.slice(E.length) : C;
            d.set(A, {
              value: A,
              label: P
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
function hp(r) {
  var l;
  return (l = r == null ? void 0 : r.connection) != null && l.sendMessagePromise ? { connection: r.connection, user: r.user, states: r.states ?? {} } : r != null && r.callWS ? { connection: { sendMessagePromise: r.callWS.bind(r) }, user: r.user, states: r.states ?? {} } : {
    connection: { sendMessagePromise: async () => {
      throw new Error("Home Assistant websocket API is not available");
    } },
    states: {}
  };
}
async function xw() {
  return hp(window.hass);
}
function ww({
  children: r,
  hass: l
}) {
  const [i, c] = v.useState(null), [d, f] = v.useState(0), m = v.useRef(null), [h, g] = v.useState(!1), [x, y] = v.useState(!1);
  return v.useEffect(() => {
    let _ = !0;
    c(null);
    async function S() {
      const C = l ? hp(l) : await xw();
      if (!_) return;
      m.current ? m.current.setHass(C) : m.current = new _w(C);
      const P = C.user ?? await C.connection.sendMessagePromise({ type: "auth/current_user" });
      _ && (g((P == null ? void 0 : P.is_admin) === !0), y(!0));
    }
    return S().catch((C) => {
      _ && c(Jn(C));
    }), () => {
      _ = !1;
    };
  }, [l, d]), i ? /* @__PURE__ */ a.jsx("div", { className: "appShell panelRecovery", "data-theme": localStorage.getItem("ha-dialog-ui-theme") || "dark", children: /* @__PURE__ */ a.jsx(qe, { error: i, retry: () => f((_) => _ + 1) }) }) : !x || !m.current ? /* @__PURE__ */ a.jsx(Ds, { label: k("Подключение к Home Assistant..."), fullscreen: !0 }) : /* @__PURE__ */ a.jsx(Kf.Provider, { value: m.current, children: /* @__PURE__ */ a.jsx(tp.Provider, { value: h, children: r }) });
}
function Sw({ hass: r }) {
  return /* @__PURE__ */ a.jsx(ky, { children: /* @__PURE__ */ a.jsx(ww, { hass: r, children: /* @__PURE__ */ a.jsx(gw, {}) }) });
}
const xf = "ha-dialog-ui-panel", wf = "ha-dialog-ui-style";
class kw extends HTMLElement {
  constructor() {
    super(...arguments);
    En(this, "root");
    En(this, "container");
    En(this, "resume", () => {
      document.visibilityState !== "hidden" && this.isConnected && (this.loadStyles(), this.render());
    });
    En(this, "hassValue");
    En(this, "renderTimer");
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
    document.addEventListener("visibilitychange", this.resume), window.addEventListener("pageshow", this.resume), this.ensureShadowRoot(), this.loadStyles(), this.render();
  }
  disconnectedCallback() {
    document.removeEventListener("visibilitychange", this.resume), window.removeEventListener("pageshow", this.resume), this.renderTimer !== void 0 && (window.clearTimeout(this.renderTimer), this.renderTimer = void 0), queueMicrotask(() => {
      var i;
      this.isConnected || ((i = this.root) == null || i.unmount(), this.root = void 0);
    });
  }
  loadStyles() {
    const i = this.ensureShadowRoot();
    if (i.getElementById(wf)) return;
    const c = document.createElement("style");
    c.id = wf, c.setAttribute("data-dialog-ui", "true"), c.textContent = "@charset \"UTF-8\";:host{display:block;height:100%;min-height:0;overflow-y:auto;overflow-x:hidden;isolation:isolate}*,*:before,*:after{box-sizing:border-box}:root,[data-theme=dark]{color-scheme:dark;--danger: #f28b82;--switch-thumb: #c8ced8;--shadow-floating: rgba(0, 0, 0, .45);--app-background: #111111;--surface: #1c1c1c;--surface-elevated: #282828;--surface-hover: #333333;--border: #3b3b3b;--border-hover: #666666;--text: #e1e1e1;--text-secondary: #9b9b9b;--text-muted: #9ca3af;--primary: var(--primary-color, #03a9f4);--primary-strong: color-mix(in srgb, var(--primary) 85%, black);--loader-track: rgba(255, 255, 255, .16);--control-background: rgba(255, 255, 255, .04);--control-background-hover: rgba(255, 255, 255, .06);--shadow: rgba(0, 0, 0, .3)}[data-theme=light]{color-scheme:light;--danger: #b3261e;--switch-thumb: #64748b;--shadow-floating: rgba(32, 33, 36, .18);--app-background: #f4f5f7;--surface: #ffffff;--surface-elevated: #f7f8fa;--surface-hover: #eef0f3;--border: #dfe3e8;--border-hover: #bdbdbd;--text: #212121;--text-secondary: #5f6368;--text-muted: #64748b;--primary: var(--primary-color, #03a9f4);--primary-strong: color-mix(in srgb, var(--primary) 85%, black);--loader-track: rgba(3, 169, 244, .16);--control-background: #ffffff;--control-background-hover: #f1f3f5;--shadow: rgba(32, 33, 36, .08)}html{color-scheme:dark}body{margin:0;font-family:Inter,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,sans-serif;color:var(--text);background:var(--app-background);min-height:100vh;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;text-rendering:optimizeLegibility}#root{min-height:100vh}.appShell{--page-padding: 28px;--mobile-fixed-actions-height: 86px;font-family:Roboto,system-ui,-apple-system,Segoe UI,sans-serif;-webkit-font-smoothing:antialiased;min-height:100vh;color:var(--text);background:var(--app-background)}button,input,textarea,select{font:inherit}button{color:inherit}a{color:inherit;text-decoration:none}::selection{background:var(--accent-background)}:root,[data-theme]{--on-primary: #ffffff;--accent-background: color-mix(in srgb, var(--primary) 16%, transparent);--accent-border: color-mix(in srgb, var(--primary) 40%, transparent);--focus-ring: color-mix(in srgb, var(--primary) 18%, transparent);--danger-ring: color-mix(in srgb, var(--danger) 18%, transparent);--danger-background: color-mix(in srgb, var(--danger) 6%, var(--surface));--modal-backdrop: rgba(0, 0, 0, .72);--sheet-backdrop: rgba(0, 0, 0, .45)}.panelRecovery{padding:28px}._button_180pj_1{position:relative;display:inline-flex;align-items:center;justify-content:center;gap:8px;height:46px;padding:0 18px;border:1px solid transparent;border-radius:14px;cursor:pointer;-webkit-user-select:none;user-select:none;font-size:14px;font-weight:600;white-space:nowrap;transition:background .18s ease,color .18s ease,border-color .18s ease,box-shadow .18s ease,transform .18s ease,opacity .18s ease}._button_180pj_1:hover{transform:translateY(-1px)}._button_180pj_1:active{transform:translateY(0) scale(.98)}._button_180pj_1:focus-visible{outline:none;box-shadow:0 0 0 4px var(--focus-ring)}._full_180pj_32{width:100%}._primary_180pj_37{color:var(--on-primary);background:var(--primary);border-color:var(--accent-border);box-shadow:none}._primary_180pj_37:hover{background:var(--primary-strong)}._secondary_180pj_49{color:var(--text);background:var(--control-background);border-color:var(--border)}._secondary_180pj_49:hover{background:var(--control-background-hover);border-color:var(--border-hover)}._ghost_180pj_61{color:var(--text-secondary);background:transparent}._ghost_180pj_61:hover{background:var(--control-background-hover);color:var(--text)}._button_180pj_1:disabled{opacity:.45;cursor:not-allowed;transform:none;box-shadow:none}._button_180pj_1:disabled:hover{transform:none}._remove_180pj_83{align-self:flex-end;justify-self:end;flex:0 0 auto;width:fit-content;color:var(--text);background:var(--control-background-hover);border-color:transparent}._remove_180pj_83:hover{background:var(--surface-hover)}._remove_180pj_83._full_180pj_32{width:100%}._loader_m2244_1{width:100%;min-height:220px;display:flex;align-items:center;justify-content:center;gap:14px;color:var(--text-secondary)}._fullscreen_m2244_11{min-height:100vh}._spinner_m2244_15{width:42px;height:42px;border-radius:50%;border:4px solid var(--loader-track);border-top-color:var(--primary);animation:_spin_m2244_15 .85s linear infinite}._label_m2244_24{font-size:15px;font-weight:600}@keyframes _spin_m2244_15{to{transform:rotate(360deg)}}._error_fi1f1_1{padding:16px;margin:12px 0;border:1px solid var(--danger);border-radius:14px;background:var(--danger-background);color:var(--text);overflow-wrap:anywhere}._error_fi1f1_1 p{margin:0;line-height:1.5}._error_fi1f1_1 button{margin-top:12px}._overlay_tb5vv_1{position:fixed;top:0;right:0;bottom:0;left:0;display:flex;align-items:flex-end;background:var(--sheet-backdrop);z-index:3000;animation:_fade_tb5vv_1 .15s ease}._sheet_tb5vv_11{width:100%;background:var(--surface-elevated);border-top:1px solid var(--border);border-radius:20px 20px 0 0;padding:16px;box-shadow:0 -16px 48px var(--shadow-floating);animation:_sheet_tb5vv_11 .18s ease}._handle_tb5vv_21{width:42px;height:4px;margin:0 auto 18px;border-radius:999px;background:var(--surface-elevated)}@keyframes _sheet_tb5vv_11{0%{opacity:0;transform:translateY(18px)}to{opacity:1;transform:translateY(0)}}@keyframes _fade_tb5vv_1{0%{opacity:0}to{opacity:1}}._overlay_avpnk_1>section{box-sizing:border-box;max-height:calc(100dvh - 20px);display:flex;flex-direction:column;padding:16px 16px calc(20px + env(safe-area-inset-bottom));border-radius:24px 24px 0 0}._overlay_avpnk_1>section>div:last-child{overflow-y:auto;overscroll-behavior:contain;min-height:0}._heading_avpnk_16{display:flex;align-items:center;justify-content:space-between;gap:16px;margin-bottom:16px;padding-left:8px}._heading_avpnk_16 h2{margin:0;color:var(--text);font-size:22px;font-weight:650}._close_avpnk_32{width:40px;height:40px;flex-shrink:0;display:grid;place-items:center;border:1px solid var(--border);border-radius:12px;color:var(--text);background:var(--control-background);cursor:pointer}._nav_avpnk_45{display:flex;flex-direction:column;gap:4px}._item_avpnk_51{display:flex;align-items:center;gap:12px;min-height:50px;box-sizing:border-box;padding:8px 12px;border:1px solid transparent;border-radius:14px;text-decoration:none;color:var(--text-secondary);transition:background .15s,color .15s}._item_avpnk_51:hover{background:var(--control-background-hover);color:var(--text)}._icon_avpnk_70{display:grid;place-items:center;width:32px;height:32px;flex-shrink:0}._label_avpnk_78{flex:1;min-width:0;font-size:15px;line-height:1.35;font-weight:500}._arrow_avpnk_86{opacity:.5;flex-shrink:0}._active_avpnk_91{color:var(--text);background:var(--accent-background);border-color:var(--accent-border)}._active_avpnk_91 ._icon_avpnk_70{color:var(--primary)}._item_avpnk_51:focus-visible,._close_avpnk_32:focus-visible{outline:2px solid var(--primary);outline-offset:-2px}@media(prefers-reduced-motion:reduce){._item_avpnk_51{transition:none}}._overlay_avpnk_1>section>div:first-child>div{background:var(--text-muted);opacity:.45}._heading_avpnk_16{position:sticky;top:0;z-index:1;padding-bottom:12px;margin-bottom:4px;background:var(--surface-elevated)}._item_avpnk_51{scroll-margin-block:72px 12px}._search_1h7xe_1{box-sizing:border-box;width:100%;grid-column:1/-1;display:flex;align-items:center;gap:12px;min-width:0;height:48px;padding:0 16px;border:1px solid var(--border);border-radius:12px;background:var(--control-background);color:var(--text-muted)}._search_1h7xe_1:focus-within{border-color:var(--primary);box-shadow:0 0 0 2px var(--focus-ring)}._search_1h7xe_1>svg{flex-shrink:0}._search_1h7xe_1 input{flex:1;width:100%;min-width:0;height:100%;border:0;outline:0;background:transparent;color:var(--text);font:inherit;font-size:15px}._search_1h7xe_1 input::placeholder{color:var(--text-muted)}._header_1pxju_1{position:sticky;top:0;background:var(--surface);border-bottom:1px solid var(--border);z-index:1000}._bar_1pxju_9{display:flex;align-items:center;justify-content:space-between;gap:10px;min-height:64px;padding:0 16px}._tools_1pxju_18{display:flex;flex-direction:column;gap:8px;padding:0 16px 12px}._tools_1pxju_18>div{box-sizing:border-box;width:100%;margin:0}._title_1pxju_31{margin:0;font-size:17px;font-weight:600;color:var(--text)}._menuButton_1pxju_38{width:40px;height:40px;display:flex;align-items:center;justify-content:center;border:1px solid var(--border);border-radius:12px;background:var(--control-background);color:var(--text);cursor:pointer;transition:background .18s ease,border-color .18s ease,transform .18s ease}._menuButton_1pxju_38:hover{background:var(--control-background-hover);border-color:var(--border)}._menuButton_1pxju_38:active{transform:scale(.96)}@media(min-width:769px){._header_1pxju_1{display:none}}._title_1pxju_31{min-width:0;text-align:center;overflow-wrap:anywhere}._menuButton_1pxju_38{flex-shrink:0}._active_1pxju_76{background:var(--accent-background);border-color:var(--accent-border)}._menuButton_1pxju_38:focus-visible{outline:2px solid var(--primary);outline-offset:2px}._tools_1pxju_18>[role=group]{padding:3px;gap:3px}._tools_1pxju_18>[role=group]>button{flex:1;min-height:36px;padding:8px 10px}._tools_1pxju_18>[role=group]>button:last-child{flex:1.8}._tabs_14hon_1{display:inline-flex;align-items:center;gap:6px;padding:6px;background:var(--surface);-webkit-backdrop-filter:blur(18px);backdrop-filter:blur(18px);border:1px solid var(--border);border-radius:18px;box-shadow:0 2px 8px var(--shadow);z-index:9000}._dropdown_14hon_14{position:relative}._tab_14hon_1{position:relative;display:flex;align-items:center;justify-content:center;height:44px;min-width:118px;padding:0 20px;border-radius:12px;color:var(--text-secondary);text-decoration:none;border:0;background:transparent;cursor:pointer;font-family:inherit;font-size:14px;font-weight:500;transition:background .2s,color .2s,transform .2s}._tab_14hon_1:hover{color:var(--text);background:var(--control-background)}._tab_14hon_1:active{transform:scale(.98)}._active_14hon_47{color:var(--text);background:var(--primary);box-shadow:none}._tab_14hon_1>span{margin-left:5px}._menu_14hon_57{position:absolute;top:calc(100% + 12px);left:0;width:250px;padding:8px;display:flex;flex-direction:column;gap:4px;background:var(--surface-elevated);-webkit-backdrop-filter:blur(22px);backdrop-filter:blur(22px);border:1px solid var(--border);border-radius:16px;box-shadow:0 18px 40px var(--shadow-floating);z-index:5000}._chevron_14hon_74{margin-left:8px}._tab_14hon_1[aria-expanded=true] ._chevron_14hon_74{transform:rotate(180deg)}._tab_14hon_1:focus-visible,._menuItem_14hon_82:focus-visible{outline:2px solid var(--primary);outline-offset:2px}._menuItem_14hon_82{display:flex;align-items:center;height:42px;padding:0 14px;border-radius:10px;color:var(--text-secondary);text-decoration:none;transition:background .15s,color .15s,transform .15s}._menuItem_14hon_82:hover{background:var(--control-background-hover);color:var(--text);transform:translate(3px)}._menuItem_14hon_82._active_14hon_47{color:var(--text);background:var(--accent-background);border:1px solid var(--accent-border)}._tabs_14hon_1{flex-wrap:wrap;max-width:100%}._heading_1w2wz_1{margin:0;color:var(--text)}._note_1w2wz_6{margin:0;color:var(--text-secondary);line-height:1.5}._entries_1w2wz_12{display:flex;flex-direction:column;gap:12px;min-width:0}._entry_1w2wz_19{padding:16px;border:1px solid var(--border);border-radius:14px;background:var(--surface);min-width:0}._line_1w2wz_27{display:flex;flex-wrap:wrap;gap:8px 16px;overflow-wrap:anywhere;font-size:14px}._line_1w2wz_27+._line_1w2wz_27{margin-top:10px;color:var(--text-secondary)}._error_1w2wz_40{color:var(--error, #dc2626)}@media(max-width:768px){._heading_1w2wz_1{display:none}}._body_1w2wz_49{margin-top:12px;min-width:0}._body_1w2wz_49 summary{cursor:pointer;color:var(--text-secondary);font-size:14px}._body_1w2wz_49 pre{margin:10px 0 0;padding:12px;border-radius:8px;background:var(--control-background);font-size:12px;line-height:1.5;white-space:pre-wrap;overflow-wrap:anywhere;color:var(--text)}:root{--mobile-fixed-actions-height: 86px;--page-padding: 28px}._page_z6937_7{display:flex;flex-direction:column;gap:32px;min-height:100vh;padding:var(--page-padding, 28px);width:100%;max-width:1440px;margin:0 auto;min-width:0}._header_z6937_19{display:flex;flex-direction:column}._headerTop_z6937_24{display:flex;align-items:flex-start;justify-content:space-between;gap:24px}._heading_z6937_31{display:flex;flex-direction:column}._title_z6937_36{margin:0;font-size:40px;font-weight:700;line-height:1.2;letter-spacing:-.04em;color:var(--text)}._description_z6937_45{margin-top:10px;color:var(--text-secondary);font-size:15px;line-height:1.5}._actions_z6937_52{display:flex;align-items:center}._list_z6937_57{display:flex;flex-direction:column;gap:12px;padding-bottom:calc(var(--mobile-fixed-actions-height) + 32px + env(safe-area-inset-bottom))}@media(max-width:768px){._page_z6937_7{padding:12px 16px 0}._headerTop_z6937_24{flex-direction:column}._title_z6937_36{font-size:32px}._list_z6937_57{padding-bottom:calc(var(--mobile-fixed-actions-height) + 32px + env(safe-area-inset-bottom))}}@media(min-width:769px){._header_z6937_19{gap:20px}._list_z6937_57{padding-bottom:0}}._innerTabs_z6937_88{display:inline-flex;align-self:flex-start;gap:4px;max-width:100%;margin-top:18px;margin-bottom:8px;padding:4px;box-sizing:border-box;border:1px solid var(--border);border-radius:14px;background:var(--surface)}._innerTab_z6937_88{min-height:40px;padding:8px 20px;border:1px solid transparent;border-radius:10px;background:transparent;color:var(--text-secondary);font:inherit;font-size:14px;font-weight:600;cursor:pointer;transition:background .15s ease,color .15s ease}._innerTab_z6937_88:hover{background:var(--surface-hover);color:var(--text)}._innerTab_z6937_88._activeInnerTab_z6937_121{background:var(--primary);color:var(--on-primary)}._innerTab_z6937_88:focus-visible{outline:2px solid var(--primary);outline-offset:2px}._settingsActions_z6937_131{display:flex;justify-content:flex-end;padding:0 0 12px}._settingsActions_z6937_131>button{min-width:160px}._listSentinel_z6937_141{height:1px}._settingsSections_z6937_145{display:flex;flex-direction:column;gap:20px;min-width:0}@media(max-width:768px){._settingsSections_z6937_145{margin-bottom:calc(100px + env(safe-area-inset-bottom))}}._settingsSection_z6937_145{min-width:0;padding:24px;border:1px solid var(--border);border-radius:16px;background:var(--surface)}._settingsSection_z6937_145>h2{margin:0 0 24px;color:var(--text);font-size:18px}._settingsMobileActions_z6937_171{position:fixed;left:16px;right:16px;bottom:calc(16px + env(safe-area-inset-bottom));display:flex;justify-content:center;z-index:1100}._settingsMobileActions_z6937_171>button{width:100%;max-width:420px}@media(max-width:768px){._settingsSection_z6937_145{padding:18px}}._connectionFields_z6937_191{display:flex;flex-direction:column;gap:24px}._collectionHeader_z6937_197{display:grid;grid-template-columns:minmax(0,1fr) auto;align-items:center;gap:20px 24px;padding:24px;border:1px solid var(--border);border-radius:18px;background:var(--surface)}._collectionHeader_z6937_197 ._title_z6937_36{font-size:32px;line-height:1.2}._collectionHeader_z6937_197>._actions_z6937_52{justify-self:end}._collectionHeader_z6937_197>._headerTop_z6937_24{grid-column:1/-1}@media(max-width:768px){._collectionHeader_z6937_197{display:contents}._collectionHeader_z6937_197>._actions_z6937_52{display:contents}._collectionHeader_z6937_197>._heading_z6937_31,._collectionHeader_z6937_197>._headerTop_z6937_24{display:none}}._subtitle_c1esh_1{font-size:13px;color:var(--text-muted)}._card_c1esh_6{display:flex;align-items:center;gap:18px;width:100%;padding:18px 20px;border:1px solid var(--border);border-radius:18px;background:var(--surface);-webkit-backdrop-filter:blur(16px);backdrop-filter:blur(16px);cursor:pointer;text-align:left;transition:transform .18s ease,border-color .18s ease,background .18s ease,box-shadow .18s ease}._card_c1esh_6:hover{transform:translateY(-2px);background:var(--control-background);border-color:var(--border-hover);box-shadow:0 12px 28px var(--shadow)}._card_c1esh_6:active{transform:scale(.985)}._content_c1esh_32{flex:1;display:flex;flex-direction:column;gap:6px;min-width:0}._title_c1esh_40{font-size:16px;font-weight:600;color:var(--text)}._arrow_c1esh_46{color:var(--text-muted);flex-shrink:0;transition:color .2s,transform .2s}._card_c1esh_6:hover ._arrow_c1esh_46{color:var(--primary);transform:translate(4px)}._titleOnly_c1esh_57{min-height:72px}._titleOnly_c1esh_57 ._title_c1esh_40{overflow-wrap:anywhere}._pagination_r0e80_1{display:flex;align-items:center;justify-content:center;gap:12px;flex-wrap:wrap;margin-top:4px}._button_r0e80_10{min-width:36px;height:38px;padding:0 14px;border:1px solid var(--border);border-radius:10px;background:var(--surface);color:var(--text);cursor:pointer;font-size:14px;font-weight:600;transition:background .15s ease,border-color .15s ease,opacity .15s ease}._button_r0e80_10:hover:not(:disabled){background:var(--surface-hover);border-color:var(--border-hover)}._button_r0e80_10:disabled{cursor:not-allowed;opacity:.45}._label_r0e80_34{color:var(--text-secondary);font-size:14px;text-align:center}._pages_r0e80_40{display:flex;align-items:center;justify-content:center;flex-wrap:wrap;gap:4px}._active_r0e80_48{background:var(--primary);border-color:var(--primary)}._button_r0e80_10:focus-visible{outline:2px solid var(--primary);outline-offset:2px}._overlay_1m3e5_1,._modal_1m3e5_1,._header_1m3e5_1,._body_1m3e5_1,._footer_1m3e5_1{box-sizing:border-box;min-width:0}._overlay_1m3e5_1{position:fixed;top:0;right:0;bottom:0;left:0;display:flex;align-items:center;justify-content:center;padding:32px;background:var(--modal-backdrop);-webkit-backdrop-filter:blur(12px);backdrop-filter:blur(12px);z-index:10000}._modal_1m3e5_1{width:100%;display:flex;flex-direction:column;max-height:calc(100vh - 64px);overflow:hidden;border-radius:24px;background:var(--surface);-webkit-backdrop-filter:blur(24px);backdrop-filter:blur(24px);border:1px solid var(--border);box-shadow:0 24px 80px var(--shadow-floating)}._sm_1m3e5_32{max-width:560px}._md_1m3e5_36{max-width:760px}._lg_1m3e5_40{max-width:960px}._xl_1m3e5_44{max-width:1200px}._header_1m3e5_1{gap:12px;display:flex;align-items:center;justify-content:space-between;min-height:76px;padding:0 32px;border-bottom:1px solid var(--border);flex-shrink:0}._title_1m3e5_59{flex:1;min-width:0;margin:0;font-size:22px;font-weight:700;color:var(--text)}._body_1m3e5_1{flex:1;overflow-y:auto;overflow-x:hidden;padding:32px;min-height:0}._footer_1m3e5_1{display:flex;flex-direction:column;z-index:200;padding:20px 32px;background:var(--surface);-webkit-backdrop-filter:blur(18px);backdrop-filter:blur(18px);border-top:1px solid var(--border)}._close_1m3e5_86{flex-shrink:0;width:40px;height:40px;padding:0!important;border-radius:12px}@media(max-width:768px){._overlay_1m3e5_1{padding:0}._modal_1m3e5_1{width:100%;max-width:100%;height:100vh;max-height:100vh;border-radius:0;border:none}._header_1m3e5_1{padding:max(env(safe-area-inset-top),16px) 16px 16px}._body_1m3e5_1{padding:20px 16px}._footer_1m3e5_1{padding:16px 16px calc(16px + env(safe-area-inset-bottom))}}._fields_1m3e5_116{display:contents;border:0;padding:0;margin:0;min-width:0}._suspended_1m3e5_124{display:none}._heading_1m3e5_128{flex:1;min-width:0;padding:16px 0}._content_eng69_1{display:flex;flex-direction:column;gap:12px}._title_eng69_7{margin:4px 0 8px;color:var(--text);font-size:18px;font-weight:600}._actions_eng69_14{display:flex;flex-direction:column;gap:12px}._row_eng69_20{display:grid;grid-auto-flow:column;grid-auto-columns:minmax(0,1fr);gap:10px}._row_eng69_20>button{min-width:0}._identifier_eng69_31{margin:4px 0 0;font-size:11px;line-height:1.4;color:var(--text-secondary);overflow-wrap:anywhere;-webkit-user-select:text;user-select:text}._labelRow_1w41x_1{display:flex;align-items:center;gap:6px;min-width:0}._labelRow_1w41x_1>label{min-width:0}._helpButton_1w41x_12{display:inline-flex;flex:0 0 auto;align-items:center;justify-content:center;width:24px;height:24px;padding:0;border:0;border-radius:50%;background:transparent;color:var(--text-secondary);cursor:pointer}._helpButton_1w41x_12:hover{color:var(--primary);background:var(--accent-background)}._helpButton_1w41x_12:focus-visible{outline:2px solid var(--primary);outline-offset:2px}._tooltip_1w41x_37{position:fixed;z-index:10030;width:min(340px,100vw - 24px);max-height:calc(100vh - 24px);overflow-y:auto;padding:14px 16px;border-radius:12px;border:1px solid var(--border);background:var(--surface-elevated);color:var(--text);box-shadow:0 8px 24px var(--shadow-floating);font-size:13px;font-weight:400;line-height:1.6;white-space:pre-line;overflow-wrap:anywhere}._helpOverlay_1w41x_56{z-index:10030}._sheetContent_1w41x_60{display:grid;gap:20px;padding-bottom:max(8px,env(safe-area-inset-bottom));color:var(--text)}._sheetContent_1w41x_60 h3{margin:0;font-size:18px}._sheetContent_1w41x_60 p{margin:0;max-height:60dvh;overflow-y:auto;font-size:14px;line-height:1.6;white-space:pre-line;overflow-wrap:anywhere}@media(pointer:coarse){._helpButton_1w41x_12{width:32px;height:32px}}._field_1vuim_1{display:flex;flex-direction:column;gap:10px;width:100%;min-width:0;box-sizing:border-box}._label_1vuim_10{padding-left:2px;color:var(--text-secondary);font-size:13px;font-weight:600;letter-spacing:.02em}._inputWrapper_1vuim_18{position:relative;width:100%;min-width:0;box-sizing:border-box}._input_1vuim_18{width:100%;min-width:0;box-sizing:border-box;height:50px;padding:0 16px;border-radius:14px;border:1px solid var(--border);background:var(--control-background);color:var(--text);font-size:15px;font-weight:500;transition:border-color .18s ease,background .18s ease,box-shadow .18s ease,transform .18s ease}._passwordInput_1vuim_40{padding-right:52px}._input_1vuim_18::placeholder{color:var(--text-muted)}._input_1vuim_18:hover{background:var(--control-background-hover);border-color:var(--border-hover)}._input_1vuim_18:focus{outline:none;background:var(--control-background-hover);border-color:var(--primary);box-shadow:0 0 0 4px var(--focus-ring);transform:translateY(-1px)}._input_1vuim_18:disabled{opacity:.6;cursor:not-allowed}._passwordToggle_1vuim_66{position:absolute;right:14px;top:50%;width:28px;height:28px;padding:0;display:flex;align-items:center;justify-content:center;transform:translateY(-50%);border:none;background:transparent;color:var(--text-secondary);cursor:pointer;opacity:.7;transition:opacity .18s ease,transform .18s ease}._passwordToggle_1vuim_66:hover{opacity:1;transform:translateY(-50%) scale(1.05)}._passwordToggle_1vuim_66:disabled{opacity:.4;cursor:not-allowed}._error_1vuim_95,._error_1vuim_95:hover{border-color:var(--danger)}._error_1vuim_95:focus{border-color:var(--danger);box-shadow:0 0 0 4px var(--danger-ring)}._errorText_1vuim_108{padding-left:2px;color:var(--danger);font-size:12px;font-weight:500}._accordion_5owbj_1{border:1px solid var(--border);border-radius:12px;overflow:hidden}._header_5owbj_7{width:100%;background:var(--surface-elevated);border:none;color:var(--text);padding:16px;text-align:left;cursor:pointer;font-weight:600;display:flex;justify-content:space-between}._content_5owbj_20{padding:16px;border-top:1px solid var(--border);display:flex;flex-direction:column;gap:16px}._wrapper_1fgdg_1{min-width:0;width:100%;box-sizing:border-box;position:relative;z-index:999999;overflow:visible}._dropdown_1fgdg_10{position:fixed;z-index:9999999;max-height:260px;overflow-y:auto;overscroll-behavior:contain;border:1px solid var(--border);border-radius:12px;background:var(--surface);box-shadow:0 12px 28px var(--shadow-floating)}._option_1fgdg_22{box-sizing:border-box;overflow-wrap:anywhere;display:flex;width:100%;flex-direction:column;gap:4px;padding:10px 12px;border:0;border-bottom:1px solid var(--border);background:transparent;color:var(--text);text-align:left;cursor:pointer}._option_1fgdg_22:hover{background:var(--surface-hover)}._option_1fgdg_22:last-child{border-bottom:0}._title_1fgdg_46{font-size:14px;font-weight:600}._uuid_1fgdg_51,._hint_1fgdg_52{color:var(--text-secondary);font-size:12px}._field_1esqu_1{margin-bottom:12px}._row_1esqu_5{display:flex;align-items:flex-end;gap:8px}._inputWrapper_1esqu_11{flex:1;min-width:0}._error_1esqu_16{margin-top:4px;color:var(--danger);font-size:12px}._clearButton_1esqu_22{flex:0 0 36px;width:36px;min-width:36px;height:50px;padding:0;box-sizing:border-box}._rowError_1esqu_31{align-items:center}._dropdown_3mupk_2{display:flex;flex-direction:column;gap:10px;width:100%;min-width:0;box-sizing:border-box}._label_3mupk_11{padding-left:2px;color:var(--text-secondary);font-size:13px;font-weight:600;letter-spacing:.02em}._wrapper_3mupk_19{position:relative}._select_3mupk_23{width:100%;min-width:0;box-sizing:border-box;height:50px;padding:0 48px 0 16px;appearance:none;-webkit-appearance:none;-moz-appearance:none;border-radius:14px;border:1px solid var(--border);background:var(--control-background);color:var(--text);font-size:15px;font-weight:500;cursor:pointer;transition:border-color .18s ease,background .18s ease,box-shadow .18s ease,transform .18s ease}._select_3mupk_23:hover{background:var(--control-background-hover);border-color:var(--border-hover)}._select_3mupk_23:focus{outline:none;background:var(--control-background-hover);border-color:var(--primary);box-shadow:0 0 0 4px var(--focus-ring);transform:translateY(-1px)}._select_3mupk_23:disabled{opacity:.6;cursor:not-allowed}._select_3mupk_23 option{background:var(--surface);color:var(--text)}._arrow_3mupk_65{position:absolute;top:50%;right:16px;transform:translateY(-50%);pointer-events:none;color:var(--text-muted);transition:color .18s ease,transform .18s ease}._wrapper_3mupk_19:hover ._arrow_3mupk_65{color:var(--primary)}._select_3mupk_23:focus+._arrow_3mupk_65{color:var(--primary);transform:translateY(-50%) rotate(180deg)}._error_3mupk_85,._error_3mupk_85:hover{border-color:var(--danger)!important}._error_3mupk_85:focus{border-color:var(--danger)!important;box-shadow:0 0 0 4px var(--danger-ring);background:var(--danger-background)}._error_3mupk_85+._arrow_3mupk_65{color:var(--danger)}._errorText_3mupk_103{margin-top:-4px;padding-left:2px;color:var(--danger);font-size:12px;font-weight:500;line-height:1.4}._form_1ogov_1{display:flex;flex-direction:column;gap:28px}._section_1ogov_7{z-index:100;display:flex;flex-direction:column;gap:18px;padding:22px;border-radius:18px;background:var(--control-background);border:1px solid var(--border)}._sectionTitle_1ogov_18{margin:0;font-size:13px;font-weight:700;letter-spacing:.08em;text-transform:uppercase;color:var(--text-secondary)}._conditions_1ogov_27{display:flex;flex-direction:column;gap:14px}._addCondition_1ogov_33{width:100%;height:48px;margin-top:8px;border:1px dashed var(--border);border-radius:14px;background:transparent;color:var(--text-secondary);transition:background .18s,border-color .18s,color .18s,transform .18s}._addCondition_1ogov_33:hover{background:var(--accent-background);border-color:var(--accent-border);color:var(--text)}._addCondition_1ogov_33:active{transform:scale(.98)}._footer_1ogov_54{z-index:200;position:sticky;bottom:-32px;display:flex;justify-content:flex-end;align-items:center;gap:12px;margin:0 -32px -32px;padding:20px 32px;background:var(--surface);-webkit-backdrop-filter:blur(18px);backdrop-filter:blur(18px);border-top:1px solid var(--border)}@media(max-width:768px){._form_1ogov_1{gap:20px}._section_1ogov_7{padding:18px}._footer_1ogov_54{position:sticky;bottom:-20px;margin:0 -16px -20px;padding:16px 16px calc(16px + env(safe-area-inset-bottom));flex-direction:column}}._container_rqdjx_1{position:relative;min-width:0;display:flex;flex-direction:column;gap:12px}._rows_rqdjx_9{display:flex;flex-direction:column;gap:12px;min-width:0}._rows_rqdjx_9:empty{display:none}._hidden_rqdjx_20{visibility:hidden}._overlay_rqdjx_24{position:absolute;top:0;right:0;bottom:0;left:0;display:flex;flex-direction:column;gap:12px}._card_rqdjx_32{box-sizing:border-box;min-height:88px;padding:18px 20px;border:1px solid var(--border);border-radius:18px;background:var(--surface);display:flex;flex-direction:column;justify-content:center;gap:10px;overflow:hidden}._overlay_rqdjx_24 ._card_rqdjx_32{flex:1;min-height:0}._title_rqdjx_51,._subtitle_rqdjx_51{display:block;border-radius:4px;background:var(--control-background-hover);animation:_pulse_rqdjx_1 1.4s ease-in-out infinite}._title_rqdjx_51{width:45%;max-width:320px;height:18px}._subtitle_rqdjx_51{width:25%;max-width:180px;height:13px}._srOnly_rqdjx_70{position:absolute;width:1px;height:1px;overflow:hidden;clip-path:inset(50%);white-space:nowrap}@keyframes _pulse_rqdjx_1{50%{opacity:.45}}@media(prefers-reduced-motion:reduce){._title_rqdjx_51,._subtitle_rqdjx_51{animation:none}}._container_9wouv_1{position:fixed;left:16px;right:16px;bottom:calc(16px + env(safe-area-inset-bottom));display:flex;justify-content:center;opacity:0;pointer-events:none;transform:translateY(24px) scale(.96);transition:opacity .22s ease,transform .22s ease;z-index:1100}._container_9wouv_1>*{width:100%;max-width:420px}._visible_9wouv_20{opacity:1;transform:translateY(0) scale(1);pointer-events:auto}._visible_9wouv_20>*{pointer-events:auto}._field_1iloj_1{min-width:0;display:flex;flex-direction:column;gap:6px}._label_1iloj_8{color:var(--text);font-size:13px;font-weight:600}._select_1iloj_14{min-width:0;max-width:100%;width:100%;padding:12px 14px;border:1px solid var(--border);border-radius:12px;background:var(--surface);color:var(--text);font:inherit;box-sizing:border-box}._select_1iloj_14:focus{outline:none;border-color:var(--primary);box-shadow:0 0 0 4px var(--focus-ring)}._field_1aipr_1{min-width:0;display:flex;flex-direction:column;gap:8px}._label_1aipr_8{color:var(--text-secondary);font-size:13px;font-weight:500}._textarea_1aipr_14{box-sizing:border-box;width:100%;min-width:0;max-width:100%;min-height:120px;padding:14px;border:1px solid var(--border);border-radius:14px;background:var(--surface);color:var(--text);font-size:14px;font-family:inherit;resize:vertical;outline:none;transition:border-color .15s ease,background .15s ease,box-shadow .15s ease}._textarea_1aipr_14::placeholder{color:var(--text-muted)}._textarea_1aipr_14:hover{border-color:var(--border-hover)}._textarea_1aipr_14:focus{outline:none;border-color:var(--primary);box-shadow:0 0 0 4px var(--focus-ring)}._error_1aipr_46{border-color:var(--danger)}._error_1aipr_46:focus{border-color:var(--danger);box-shadow:0 0 0 4px var(--danger-ring)}._errorText_1aipr_55{color:var(--danger);font-size:12px}._form_1a1tt_1{display:flex;flex-direction:column;gap:18px}._field_1a1tt_7{display:flex;flex-direction:column;gap:8px;color:var(--text);font-size:13px;font-weight:600}._textarea_1a1tt_16{width:100%;min-height:140px;padding:12px 14px;border:1px solid var(--border);border-radius:12px;background:var(--surface);color:var(--text);resize:vertical;font:inherit;box-sizing:border-box}._arrayItem_1a1tt_29{display:grid;gap:12px;padding:12px;border:1px solid var(--border);border-radius:12px;background:var(--surface);margin-bottom:12px}._form_1a1tt_1 p{margin:0;color:var(--text-secondary);font-size:13px;line-height:1.5}._logicTabs_1a1tt_46{display:flex;gap:4px;padding:4px;background:var(--surface);border:1px solid var(--border);border-radius:12px}._logicTabs_1a1tt_46 button{flex:1;min-width:0;padding:12px 8px;border:0;border-radius:8px;background:transparent;color:var(--text-secondary);font:inherit;cursor:pointer;overflow-wrap:anywhere}._logicTabs_1a1tt_46 button[aria-selected=true]{background:var(--accent-background);color:var(--text);box-shadow:inset 0 0 0 1px var(--accent-border)}._logicTabs_1a1tt_46 button:focus-visible{outline:2px solid var(--primary);outline-offset:2px}@media(max-width:400px){._logicTabs_1a1tt_46 button{padding:10px 4px;font-size:12px}}._sectionTitle_1a1tt_85{margin:0;font-size:14px;font-weight:600;color:var(--text)}._footerActions_1a1tt_92{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:12px}._footerActions_1a1tt_92>button{min-width:0;min-height:46px;height:auto;padding:12px;white-space:normal}._phraseMode_1a1tt_106{display:flex;align-items:center;gap:8px}._phraseMode_1a1tt_106>label{flex:1;min-width:0}._phraseMode_1a1tt_106>label>span:first-of-type{flex-shrink:0}@media(max-width:768px){._directTabLabel_1a1tt_122{white-space:pre-line}}._linkActions_1a1tt_126{display:flex;justify-content:flex-end;flex-wrap:wrap;gap:12px;align-items:center}._switchRow_1hmmz_1{display:inline-flex;align-items:center;gap:10px;color:var(--text);font-size:14px;cursor:pointer;-webkit-user-select:none;user-select:none}._input_1hmmz_11{position:absolute;width:1px;height:1px;padding:0;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border:0}._track_1hmmz_22{position:relative;width:46px;height:26px;flex:0 0 auto;border:1px solid var(--border);border-radius:999px;background:var(--surface-elevated);transition:background .2s ease,border-color .2s ease,box-shadow .2s ease}._thumb_1hmmz_33{position:absolute;top:3px;left:3px;width:18px;height:18px;border-radius:50%;background:var(--switch-thumb);box-shadow:0 2px 6px var(--shadow-floating);transition:transform .2s ease,background .2s ease}._input_1hmmz_11:checked+._track_1hmmz_22{border-color:var(--primary);background:var(--primary);box-shadow:none}._input_1hmmz_11:checked+._track_1hmmz_22 ._thumb_1hmmz_33{transform:translate(20px);background:var(--on-primary)}._input_1hmmz_11:focus-visible+._track_1hmmz_22{outline:2px solid var(--primary);outline-offset:2px}._input_1hmmz_11:disabled+._track_1hmmz_22,._input_1hmmz_11:disabled~._label_1hmmz_62{opacity:.55;cursor:not-allowed}._label_1hmmz_62{line-height:1.3}._form_mn1ml_1{display:flex;flex-direction:column;gap:24px;min-width:0}._arrayItem_mn1ml_8{display:flex;flex-direction:column;gap:18px;min-width:0;padding:20px;border:1px solid var(--border);border-radius:14px;background:var(--control-background);box-sizing:border-box}@media(max-width:768px){._arrayItem_mn1ml_8{padding:14px}}._sectionTitle_mn1ml_25{margin:0;font-size:14px;font-weight:600;color:var(--text)}._form_1i0x1_1{display:flex;flex-direction:column;gap:18px}._field_1i0x1_7{display:flex;flex-direction:column;gap:8px;color:var(--text);font-size:13px;font-weight:600}._textarea_1i0x1_16{width:100%;min-height:140px;padding:12px 14px;border:1px solid var(--border);border-radius:12px;background:var(--surface);color:var(--text);resize:vertical;font:inherit;box-sizing:border-box}._arrayItem_1i0x1_29{display:grid;gap:12px;padding:12px;border:1px solid var(--border);border-radius:12px;background:var(--surface);margin-bottom:12px}._grid_fc8hl_1{min-width:0;display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,280px),1fr));gap:20px}._card_fc8hl_8{box-sizing:border-box;min-width:0;padding:24px;border:1px solid var(--border);border-radius:18px;background:var(--surface)}._card_fc8hl_8 h2{overflow-wrap:anywhere;margin:0 0 20px;font-size:20px}._actions_fc8hl_23{display:flex;flex-wrap:wrap;gap:12px}._description_fc8hl_29{margin:0 0 20px;color:var(--text-secondary);line-height:1.5}@media(max-width:768px){._page_fc8hl_36{padding-bottom:calc(112px + env(safe-area-inset-bottom))}._card_fc8hl_8{padding:18px}._actions_fc8hl_23{flex-direction:column}._actions_fc8hl_23>button{width:100%;min-width:0;max-width:100%;white-space:normal;height:auto;min-height:46px;padding:12px;overflow-wrap:anywhere}}._form_1ijxr_1{display:flex;flex-direction:column;gap:24px}._field_1ijxr_7{display:flex;flex-direction:column;gap:8px}._input_1ijxr_13{box-sizing:border-box;min-width:0;width:100%;background:var(--surface);border:1px solid var(--border);border-radius:10px;padding:12px;color:var(--text)}._input_1ijxr_13:focus{outline:none;border-color:var(--primary)}._label_1ijxr_29{color:var(--text-secondary);font-size:13px;font-weight:500}._help_1ijxr_35{color:var(--text-secondary);font-size:13px}._toggleHelp_1ijxr_40{display:flex;align-items:center;gap:8px}._page_w5y3x_1{min-height:100vh;padding:28px;background:var(--surface);color:var(--text);display:flex;flex-direction:column;gap:28px}._header_w5y3x_11{display:flex;align-items:flex-end;justify-content:space-between;gap:20px}._title_w5y3x_18{margin:0;font-size:40px;line-height:1;letter-spacing:-.04em}._description_w5y3x_25{margin:10px 0 0;color:var(--text-secondary);font-size:15px}._grid_w5y3x_31{display:grid;grid-template-columns:minmax(0,1fr);min-width:0;gap:16px}._card_w5y3x_38,._empty_w5y3x_38{min-width:0;max-width:100%;padding:20px;border:1px solid var(--border);border-radius:20px;background:var(--surface-elevated)}._cardHeader_w5y3x_47{display:flex;justify-content:space-between;gap:16px;align-items:flex-start}._cardTitle_w5y3x_54{margin:0;font-size:18px}._meta_w5y3x_59{overflow-wrap:anywhere;margin-top:8px;color:var(--text-secondary);font-size:14px}._time_w5y3x_66{margin-top:18px;font-size:38px;font-weight:700;letter-spacing:-.04em}._form_w5y3x_73{display:flex;flex-direction:column;gap:18px}._field_w5y3x_79{display:flex;flex-direction:column;gap:8px}._label_w5y3x_85{color:var(--text-secondary);font-size:13px;font-weight:500}._select_w5y3x_91,._input_w5y3x_91{height:44px;padding:0 14px;border:1px solid var(--border);border-radius:14px;background:var(--surface);color:var(--text);font-size:14px}._quickTabs_w5y3x_101{display:flex;flex-wrap:wrap;gap:8px}._quickTab_w5y3x_101{height:40px;padding:0 14px;border:1px solid var(--border);border-radius:999px;background:var(--surface);color:var(--text-secondary);cursor:pointer}._activeQuickTab_w5y3x_117{background:var(--accent-background);color:var(--text)}@media(max-width:768px){._page_w5y3x_1{padding:20px;padding-bottom:calc(120px + env(safe-area-inset-bottom))}._header_w5y3x_11{align-items:stretch;flex-direction:column}._title_w5y3x_18{font-size:32px}}._cardLead_w5y3x_135{flex:1;display:flex;align-items:center;gap:14px;min-width:0}._cardIcon_w5y3x_143{flex:0 0 auto;color:var(--text-muted)}._cardButton_w5y3x_148{width:100%;text-align:left;color:inherit;cursor:pointer}._cardButton_w5y3x_148:hover{border-color:var(--border-hover);background:var(--surface-hover)}._wheelPicker_w5y3x_160{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));width:100%;min-width:0;box-sizing:border-box;gap:12px;padding:14px;border:1px solid var(--border);border-radius:0;background:var(--surface-elevated)}._wheelColumn_w5y3x_173{display:flex;flex-direction:column;align-items:center;gap:8px}._wheelSelect_w5y3x_180{width:100%;height:64px;box-sizing:border-box;border:1px solid var(--border);border-radius:10px;background:var(--control-background);color:var(--text);text-align:center;font-size:24px;font-weight:700}@media(max-width:768px){._wheelPicker_w5y3x_160{position:relative;overflow:hidden}._wheelSelect_w5y3x_180{height:72px}}._footerActions_w5y3x_202{display:flex;justify-content:flex-end;width:100%}._saveButton_w5y3x_208{min-width:160px;box-sizing:border-box}@media(max-width:768px){._saveButton_w5y3x_208{width:100%}}._cardLead_w5y3x_135>div{min-width:0}._cardHeader_w5y3x_47>:last-child:not(._cardLead_w5y3x_135){flex-shrink:0}._volumeLabel_w5y3x_226{display:flex;align-items:baseline;gap:8px}._volumeValue_w5y3x_232{color:var(--text);font-weight:600}._alarmTimeFields_w5y3x_237{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:12px}._wheelSelect_w5y3x_180:focus{outline:2px solid var(--primary);outline-offset:2px}@media(max-width:768px){._grid_w5y3x_31{padding-bottom:calc(96px + env(safe-area-inset-bottom))}}\n", i.appendChild(c);
  }
  render() {
    if (!this.isConnected) return;
    const i = this.ensureShadowRoot();
    this.root || (this.container || (this.container = document.createElement("div"), i.appendChild(this.container)), this.root = Sh.createRoot(this.container)), this.root.render(
      /* @__PURE__ */ a.jsx(kf.StrictMode, { children: /* @__PURE__ */ a.jsx(tv, { children: /* @__PURE__ */ a.jsx(Sw, { hass: this.hassValue }) }) })
    );
  }
}
customElements.get(xf) || customElements.define(xf, kw);
