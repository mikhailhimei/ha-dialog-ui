var _h = Object.defineProperty;
var xh = (r, a, i) => a in r ? _h(r, a, { enumerable: !0, configurable: !0, writable: !0, value: i }) : r[a] = i;
var Xe = (r, a, i) => xh(r, typeof a != "symbol" ? a + "" : a, i);
function Nf(r) {
  return r && r.__esModule && Object.prototype.hasOwnProperty.call(r, "default") ? r.default : r;
}
var ul = { exports: {} }, Ts = {}, cl = { exports: {} }, he = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var qd;
function wh() {
  if (qd) return he;
  qd = 1;
  var r = Symbol.for("react.element"), a = Symbol.for("react.portal"), i = Symbol.for("react.fragment"), c = Symbol.for("react.strict_mode"), d = Symbol.for("react.profiler"), f = Symbol.for("react.provider"), p = Symbol.for("react.context"), h = Symbol.for("react.forward_ref"), g = Symbol.for("react.suspense"), w = Symbol.for("react.memo"), y = Symbol.for("react.lazy"), _ = Symbol.iterator;
  function S(T) {
    return T === null || typeof T != "object" ? null : (T = _ && T[_] || T["@@iterator"], typeof T == "function" ? T : null);
  }
  var j = { isMounted: function() {
    return !1;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, R = Object.assign, C = {};
  function N(T, L, oe) {
    this.props = T, this.context = L, this.refs = C, this.updater = oe || j;
  }
  N.prototype.isReactComponent = {}, N.prototype.setState = function(T, L) {
    if (typeof T != "object" && typeof T != "function" && T != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, T, L, "setState");
  }, N.prototype.forceUpdate = function(T) {
    this.updater.enqueueForceUpdate(this, T, "forceUpdate");
  };
  function A() {
  }
  A.prototype = N.prototype;
  function H(T, L, oe) {
    this.props = T, this.context = L, this.refs = C, this.updater = oe || j;
  }
  var b = H.prototype = new A();
  b.constructor = H, R(b, N.prototype), b.isPureReactComponent = !0;
  var F = Array.isArray, B = Object.prototype.hasOwnProperty, M = { current: null }, X = { key: !0, ref: !0, __self: !0, __source: !0 };
  function U(T, L, oe) {
    var de, ye = {}, ge = null, ke = null;
    if (L != null) for (de in L.ref !== void 0 && (ke = L.ref), L.key !== void 0 && (ge = "" + L.key), L) B.call(L, de) && !X.hasOwnProperty(de) && (ye[de] = L[de]);
    var xe = arguments.length - 2;
    if (xe === 1) ye.children = oe;
    else if (1 < xe) {
      for (var Ne = Array(xe), ot = 0; ot < xe; ot++) Ne[ot] = arguments[ot + 2];
      ye.children = Ne;
    }
    if (T && T.defaultProps) for (de in xe = T.defaultProps, xe) ye[de] === void 0 && (ye[de] = xe[de]);
    return { $$typeof: r, type: T, key: ge, ref: ke, props: ye, _owner: M.current };
  }
  function G(T, L) {
    return { $$typeof: r, type: T.type, key: L, ref: T.ref, props: T.props, _owner: T._owner };
  }
  function pe(T) {
    return typeof T == "object" && T !== null && T.$$typeof === r;
  }
  function ce(T) {
    var L = { "=": "=0", ":": "=2" };
    return "$" + T.replace(/[=:]/g, function(oe) {
      return L[oe];
    });
  }
  var Ee = /\/+/g;
  function je(T, L) {
    return typeof T == "object" && T !== null && T.key != null ? ce("" + T.key) : L.toString(36);
  }
  function me(T, L, oe, de, ye) {
    var ge = typeof T;
    (ge === "undefined" || ge === "boolean") && (T = null);
    var ke = !1;
    if (T === null) ke = !0;
    else switch (ge) {
      case "string":
      case "number":
        ke = !0;
        break;
      case "object":
        switch (T.$$typeof) {
          case r:
          case a:
            ke = !0;
        }
    }
    if (ke) return ke = T, ye = ye(ke), T = de === "" ? "." + je(ke, 0) : de, F(ye) ? (oe = "", T != null && (oe = T.replace(Ee, "$&/") + "/"), me(ye, L, oe, "", function(ot) {
      return ot;
    })) : ye != null && (pe(ye) && (ye = G(ye, oe + (!ye.key || ke && ke.key === ye.key ? "" : ("" + ye.key).replace(Ee, "$&/") + "/") + T)), L.push(ye)), 1;
    if (ke = 0, de = de === "" ? "." : de + ":", F(T)) for (var xe = 0; xe < T.length; xe++) {
      ge = T[xe];
      var Ne = de + je(ge, xe);
      ke += me(ge, L, oe, Ne, ye);
    }
    else if (Ne = S(T), typeof Ne == "function") for (T = Ne.call(T), xe = 0; !(ge = T.next()).done; ) ge = ge.value, Ne = de + je(ge, xe++), ke += me(ge, L, oe, Ne, ye);
    else if (ge === "object") throw L = String(T), Error("Objects are not valid as a React child (found: " + (L === "[object Object]" ? "object with keys {" + Object.keys(T).join(", ") + "}" : L) + "). If you meant to render a collection of children, use an array instead.");
    return ke;
  }
  function ve(T, L, oe) {
    if (T == null) return T;
    var de = [], ye = 0;
    return me(T, de, "", "", function(ge) {
      return L.call(oe, ge, ye++);
    }), de;
  }
  function Se(T) {
    if (T._status === -1) {
      var L = T._result;
      L = L(), L.then(function(oe) {
        (T._status === 0 || T._status === -1) && (T._status = 1, T._result = oe);
      }, function(oe) {
        (T._status === 0 || T._status === -1) && (T._status = 2, T._result = oe);
      }), T._status === -1 && (T._status = 0, T._result = L);
    }
    if (T._status === 1) return T._result.default;
    throw T._result;
  }
  var W = { current: null }, z = { transition: null }, O = { ReactCurrentDispatcher: W, ReactCurrentBatchConfig: z, ReactCurrentOwner: M };
  function Q() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  return he.Children = { map: ve, forEach: function(T, L, oe) {
    ve(T, function() {
      L.apply(this, arguments);
    }, oe);
  }, count: function(T) {
    var L = 0;
    return ve(T, function() {
      L++;
    }), L;
  }, toArray: function(T) {
    return ve(T, function(L) {
      return L;
    }) || [];
  }, only: function(T) {
    if (!pe(T)) throw Error("React.Children.only expected to receive a single React element child.");
    return T;
  } }, he.Component = N, he.Fragment = i, he.Profiler = d, he.PureComponent = H, he.StrictMode = c, he.Suspense = g, he.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = O, he.act = Q, he.cloneElement = function(T, L, oe) {
    if (T == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + T + ".");
    var de = R({}, T.props), ye = T.key, ge = T.ref, ke = T._owner;
    if (L != null) {
      if (L.ref !== void 0 && (ge = L.ref, ke = M.current), L.key !== void 0 && (ye = "" + L.key), T.type && T.type.defaultProps) var xe = T.type.defaultProps;
      for (Ne in L) B.call(L, Ne) && !X.hasOwnProperty(Ne) && (de[Ne] = L[Ne] === void 0 && xe !== void 0 ? xe[Ne] : L[Ne]);
    }
    var Ne = arguments.length - 2;
    if (Ne === 1) de.children = oe;
    else if (1 < Ne) {
      xe = Array(Ne);
      for (var ot = 0; ot < Ne; ot++) xe[ot] = arguments[ot + 2];
      de.children = xe;
    }
    return { $$typeof: r, type: T.type, key: ye, ref: ge, props: de, _owner: ke };
  }, he.createContext = function(T) {
    return T = { $$typeof: p, _currentValue: T, _currentValue2: T, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, T.Provider = { $$typeof: f, _context: T }, T.Consumer = T;
  }, he.createElement = U, he.createFactory = function(T) {
    var L = U.bind(null, T);
    return L.type = T, L;
  }, he.createRef = function() {
    return { current: null };
  }, he.forwardRef = function(T) {
    return { $$typeof: h, render: T };
  }, he.isValidElement = pe, he.lazy = function(T) {
    return { $$typeof: y, _payload: { _status: -1, _result: T }, _init: Se };
  }, he.memo = function(T, L) {
    return { $$typeof: w, type: T, compare: L === void 0 ? null : L };
  }, he.startTransition = function(T) {
    var L = z.transition;
    z.transition = {};
    try {
      T();
    } finally {
      z.transition = L;
    }
  }, he.unstable_act = Q, he.useCallback = function(T, L) {
    return W.current.useCallback(T, L);
  }, he.useContext = function(T) {
    return W.current.useContext(T);
  }, he.useDebugValue = function() {
  }, he.useDeferredValue = function(T) {
    return W.current.useDeferredValue(T);
  }, he.useEffect = function(T, L) {
    return W.current.useEffect(T, L);
  }, he.useId = function() {
    return W.current.useId();
  }, he.useImperativeHandle = function(T, L, oe) {
    return W.current.useImperativeHandle(T, L, oe);
  }, he.useInsertionEffect = function(T, L) {
    return W.current.useInsertionEffect(T, L);
  }, he.useLayoutEffect = function(T, L) {
    return W.current.useLayoutEffect(T, L);
  }, he.useMemo = function(T, L) {
    return W.current.useMemo(T, L);
  }, he.useReducer = function(T, L, oe) {
    return W.current.useReducer(T, L, oe);
  }, he.useRef = function(T) {
    return W.current.useRef(T);
  }, he.useState = function(T) {
    return W.current.useState(T);
  }, he.useSyncExternalStore = function(T, L, oe) {
    return W.current.useSyncExternalStore(T, L, oe);
  }, he.useTransition = function() {
    return W.current.useTransition();
  }, he.version = "18.3.1", he;
}
var Qd;
function Ml() {
  return Qd || (Qd = 1, cl.exports = wh()), cl.exports;
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
var Kd;
function Sh() {
  if (Kd) return Ts;
  Kd = 1;
  var r = Ml(), a = Symbol.for("react.element"), i = Symbol.for("react.fragment"), c = Object.prototype.hasOwnProperty, d = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, f = { key: !0, ref: !0, __self: !0, __source: !0 };
  function p(h, g, w) {
    var y, _ = {}, S = null, j = null;
    w !== void 0 && (S = "" + w), g.key !== void 0 && (S = "" + g.key), g.ref !== void 0 && (j = g.ref);
    for (y in g) c.call(g, y) && !f.hasOwnProperty(y) && (_[y] = g[y]);
    if (h && h.defaultProps) for (y in g = h.defaultProps, g) _[y] === void 0 && (_[y] = g[y]);
    return { $$typeof: a, type: h, key: S, ref: j, props: _, _owner: d.current };
  }
  return Ts.Fragment = i, Ts.jsx = p, Ts.jsxs = p, Ts;
}
var Yd;
function kh() {
  return Yd || (Yd = 1, ul.exports = Sh()), ul.exports;
}
var o = kh(), v = Ml();
const Tf = /* @__PURE__ */ Nf(v);
var Yo = {}, dl = { exports: {} }, mt = {}, fl = { exports: {} }, pl = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Gd;
function jh() {
  return Gd || (Gd = 1, (function(r) {
    function a(z, O) {
      var Q = z.length;
      z.push(O);
      e: for (; 0 < Q; ) {
        var T = Q - 1 >>> 1, L = z[T];
        if (0 < d(L, O)) z[T] = O, z[Q] = L, Q = T;
        else break e;
      }
    }
    function i(z) {
      return z.length === 0 ? null : z[0];
    }
    function c(z) {
      if (z.length === 0) return null;
      var O = z[0], Q = z.pop();
      if (Q !== O) {
        z[0] = Q;
        e: for (var T = 0, L = z.length, oe = L >>> 1; T < oe; ) {
          var de = 2 * (T + 1) - 1, ye = z[de], ge = de + 1, ke = z[ge];
          if (0 > d(ye, Q)) ge < L && 0 > d(ke, ye) ? (z[T] = ke, z[ge] = Q, T = ge) : (z[T] = ye, z[de] = Q, T = de);
          else if (ge < L && 0 > d(ke, Q)) z[T] = ke, z[ge] = Q, T = ge;
          else break e;
        }
      }
      return O;
    }
    function d(z, O) {
      var Q = z.sortIndex - O.sortIndex;
      return Q !== 0 ? Q : z.id - O.id;
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
    var g = [], w = [], y = 1, _ = null, S = 3, j = !1, R = !1, C = !1, N = typeof setTimeout == "function" ? setTimeout : null, A = typeof clearTimeout == "function" ? clearTimeout : null, H = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function b(z) {
      for (var O = i(w); O !== null; ) {
        if (O.callback === null) c(w);
        else if (O.startTime <= z) c(w), O.sortIndex = O.expirationTime, a(g, O);
        else break;
        O = i(w);
      }
    }
    function F(z) {
      if (C = !1, b(z), !R) if (i(g) !== null) R = !0, Se(B);
      else {
        var O = i(w);
        O !== null && W(F, O.startTime - z);
      }
    }
    function B(z, O) {
      R = !1, C && (C = !1, A(U), U = -1), j = !0;
      var Q = S;
      try {
        for (b(O), _ = i(g); _ !== null && (!(_.expirationTime > O) || z && !ce()); ) {
          var T = _.callback;
          if (typeof T == "function") {
            _.callback = null, S = _.priorityLevel;
            var L = T(_.expirationTime <= O);
            O = r.unstable_now(), typeof L == "function" ? _.callback = L : _ === i(g) && c(g), b(O);
          } else c(g);
          _ = i(g);
        }
        if (_ !== null) var oe = !0;
        else {
          var de = i(w);
          de !== null && W(F, de.startTime - O), oe = !1;
        }
        return oe;
      } finally {
        _ = null, S = Q, j = !1;
      }
    }
    var M = !1, X = null, U = -1, G = 5, pe = -1;
    function ce() {
      return !(r.unstable_now() - pe < G);
    }
    function Ee() {
      if (X !== null) {
        var z = r.unstable_now();
        pe = z;
        var O = !0;
        try {
          O = X(!0, z);
        } finally {
          O ? je() : (M = !1, X = null);
        }
      } else M = !1;
    }
    var je;
    if (typeof H == "function") je = function() {
      H(Ee);
    };
    else if (typeof MessageChannel < "u") {
      var me = new MessageChannel(), ve = me.port2;
      me.port1.onmessage = Ee, je = function() {
        ve.postMessage(null);
      };
    } else je = function() {
      N(Ee, 0);
    };
    function Se(z) {
      X = z, M || (M = !0, je());
    }
    function W(z, O) {
      U = N(function() {
        z(r.unstable_now());
      }, O);
    }
    r.unstable_IdlePriority = 5, r.unstable_ImmediatePriority = 1, r.unstable_LowPriority = 4, r.unstable_NormalPriority = 3, r.unstable_Profiling = null, r.unstable_UserBlockingPriority = 2, r.unstable_cancelCallback = function(z) {
      z.callback = null;
    }, r.unstable_continueExecution = function() {
      R || j || (R = !0, Se(B));
    }, r.unstable_forceFrameRate = function(z) {
      0 > z || 125 < z ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : G = 0 < z ? Math.floor(1e3 / z) : 5;
    }, r.unstable_getCurrentPriorityLevel = function() {
      return S;
    }, r.unstable_getFirstCallbackNode = function() {
      return i(g);
    }, r.unstable_next = function(z) {
      switch (S) {
        case 1:
        case 2:
        case 3:
          var O = 3;
          break;
        default:
          O = S;
      }
      var Q = S;
      S = O;
      try {
        return z();
      } finally {
        S = Q;
      }
    }, r.unstable_pauseExecution = function() {
    }, r.unstable_requestPaint = function() {
    }, r.unstable_runWithPriority = function(z, O) {
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
        return O();
      } finally {
        S = Q;
      }
    }, r.unstable_scheduleCallback = function(z, O, Q) {
      var T = r.unstable_now();
      switch (typeof Q == "object" && Q !== null ? (Q = Q.delay, Q = typeof Q == "number" && 0 < Q ? T + Q : T) : Q = T, z) {
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
      return L = Q + L, z = { id: y++, callback: O, priorityLevel: z, startTime: Q, expirationTime: L, sortIndex: -1 }, Q > T ? (z.sortIndex = Q, a(w, z), i(g) === null && z === i(w) && (C ? (A(U), U = -1) : C = !0, W(F, Q - T))) : (z.sortIndex = L, a(g, z), R || j || (R = !0, Se(B))), z;
    }, r.unstable_shouldYield = ce, r.unstable_wrapCallback = function(z) {
      var O = S;
      return function() {
        var Q = S;
        S = O;
        try {
          return z.apply(this, arguments);
        } finally {
          S = Q;
        }
      };
    };
  })(pl)), pl;
}
var Jd;
function Ch() {
  return Jd || (Jd = 1, fl.exports = jh()), fl.exports;
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
var Xd;
function Eh() {
  if (Xd) return mt;
  Xd = 1;
  var r = Ml(), a = Ch();
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
  var h = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), g = Object.prototype.hasOwnProperty, w = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, y = {}, _ = {};
  function S(e) {
    return g.call(_, e) ? !0 : g.call(y, e) ? !1 : w.test(e) ? _[e] = !0 : (y[e] = !0, !1);
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
  function R(e, t, n, s) {
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
  function C(e, t, n, s, l, u, m) {
    this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = s, this.attributeNamespace = l, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = u, this.removeEmptyString = m;
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
  function H(e) {
    return e[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
    var t = e.replace(
      A,
      H
    );
    N[t] = new C(t, 1, !1, e, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
    var t = e.replace(A, H);
    N[t] = new C(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
    var t = e.replace(A, H);
    N[t] = new C(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(e) {
    N[e] = new C(e, 1, !1, e.toLowerCase(), null, !1, !1);
  }), N.xlinkHref = new C("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(e) {
    N[e] = new C(e, 1, !1, e.toLowerCase(), null, !0, !0);
  });
  function b(e, t, n, s) {
    var l = N.hasOwnProperty(t) ? N[t] : null;
    (l !== null ? l.type !== 0 : s || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (R(t, n, l, s) && (n = null), s || l === null ? S(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : l.mustUseProperty ? e[l.propertyName] = n === null ? l.type === 3 ? !1 : "" : n : (t = l.attributeName, s = l.attributeNamespace, n === null ? e.removeAttribute(t) : (l = l.type, n = l === 3 || l === 4 && n === !0 ? "" : "" + n, s ? e.setAttributeNS(s, t, n) : e.setAttribute(t, n))));
  }
  var F = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, B = Symbol.for("react.element"), M = Symbol.for("react.portal"), X = Symbol.for("react.fragment"), U = Symbol.for("react.strict_mode"), G = Symbol.for("react.profiler"), pe = Symbol.for("react.provider"), ce = Symbol.for("react.context"), Ee = Symbol.for("react.forward_ref"), je = Symbol.for("react.suspense"), me = Symbol.for("react.suspense_list"), ve = Symbol.for("react.memo"), Se = Symbol.for("react.lazy"), W = Symbol.for("react.offscreen"), z = Symbol.iterator;
  function O(e) {
    return e === null || typeof e != "object" ? null : (e = z && e[z] || e["@@iterator"], typeof e == "function" ? e : null);
  }
  var Q = Object.assign, T;
  function L(e) {
    if (T === void 0) try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      T = t && t[1] || "";
    }
    return `
` + T + e;
  }
  var oe = !1;
  function de(e, t) {
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
                var E = `
` + l[m].replace(" at new ", " at ");
                return e.displayName && E.includes("<anonymous>") && (E = E.replace("<anonymous>", e.displayName)), E;
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
        return e = de(e.type, !1), e;
      case 11:
        return e = de(e.type.render, !1), e;
      case 1:
        return e = de(e.type, !0), e;
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
      case je:
        return "Suspense";
      case me:
        return "SuspenseList";
    }
    if (typeof e == "object") switch (e.$$typeof) {
      case ce:
        return (e.displayName || "Context") + ".Consumer";
      case pe:
        return (e._context.displayName || "Context") + ".Provider";
      case Ee:
        var t = e.render;
        return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
      case ve:
        return t = e.displayName || null, t !== null ? t : ge(e.type) || "Memo";
      case Se:
        t = e._payload, e = e._init;
        try {
          return ge(e(t));
        } catch {
        }
    }
    return null;
  }
  function ke(e) {
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
  function Ne(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
  }
  function ot(e) {
    var t = Ne(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), s = "" + e[t];
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
  function $n(e) {
    e._valueTracker || (e._valueTracker = ot(e));
  }
  function Wr(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var n = t.getValue(), s = "";
    return e && (s = Ne(e) ? e.checked ? "true" : "false" : e.value), e = s, e !== n ? (t.setValue(e), !0) : !1;
  }
  function Mn(e) {
    if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  function vi(e, t) {
    var n = t.checked;
    return Q({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n ?? e._wrapperState.initialChecked });
  }
  function Zl(e, t) {
    var n = t.defaultValue == null ? "" : t.defaultValue, s = t.checked != null ? t.checked : t.defaultChecked;
    n = xe(t.value != null ? t.value : n), e._wrapperState = { initialChecked: s, initialValue: n, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
  }
  function eu(e, t) {
    t = t.checked, t != null && b(e, "checked", t, !1);
  }
  function yi(e, t) {
    eu(e, t);
    var n = xe(t.value), s = t.type;
    if (n != null) s === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
    else if (s === "submit" || s === "reset") {
      e.removeAttribute("value");
      return;
    }
    t.hasOwnProperty("value") ? gi(e, t.type, n) : t.hasOwnProperty("defaultValue") && gi(e, t.type, xe(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
  }
  function tu(e, t, n) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
      var s = t.type;
      if (!(s !== "submit" && s !== "reset" || t.value !== void 0 && t.value !== null)) return;
      t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t;
    }
    n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n);
  }
  function gi(e, t, n) {
    (t !== "number" || Mn(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
  }
  var Br = Array.isArray;
  function or(e, t, n, s) {
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
  function _i(e, t) {
    if (t.dangerouslySetInnerHTML != null) throw Error(i(91));
    return Q({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
  }
  function nu(e, t) {
    var n = t.value;
    if (n == null) {
      if (n = t.children, t = t.defaultValue, n != null) {
        if (t != null) throw Error(i(92));
        if (Br(n)) {
          if (1 < n.length) throw Error(i(93));
          n = n[0];
        }
        t = n;
      }
      t == null && (t = ""), n = t;
    }
    e._wrapperState = { initialValue: xe(n) };
  }
  function ru(e, t) {
    var n = xe(t.value), s = xe(t.defaultValue);
    n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), s != null && (e.defaultValue = "" + s);
  }
  function su(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
  }
  function ou(e) {
    switch (e) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function xi(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml" ? ou(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
  }
  var Fs, iu = (function(e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, s, l) {
      MSApp.execUnsafeLocalFunction(function() {
        return e(t, n, s, l);
      });
    } : e;
  })(function(e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
    else {
      for (Fs = Fs || document.createElement("div"), Fs.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = Fs.firstChild; e.firstChild; ) e.removeChild(e.firstChild);
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
  var Vr = {
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
  }, kp = ["Webkit", "ms", "Moz", "O"];
  Object.keys(Vr).forEach(function(e) {
    kp.forEach(function(t) {
      t = t + e.charAt(0).toUpperCase() + e.substring(1), Vr[t] = Vr[e];
    });
  });
  function au(e, t, n) {
    return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || Vr.hasOwnProperty(e) && Vr[e] ? ("" + t).trim() : t + "px";
  }
  function lu(e, t) {
    e = e.style;
    for (var n in t) if (t.hasOwnProperty(n)) {
      var s = n.indexOf("--") === 0, l = au(n, t[n], s);
      n === "float" && (n = "cssFloat"), s ? e.setProperty(n, l) : e[n] = l;
    }
  }
  var jp = Q({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
  function wi(e, t) {
    if (t) {
      if (jp[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(i(137, e));
      if (t.dangerouslySetInnerHTML != null) {
        if (t.children != null) throw Error(i(60));
        if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(i(61));
      }
      if (t.style != null && typeof t.style != "object") throw Error(i(62));
    }
  }
  function Si(e, t) {
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
  var ki = null;
  function ji(e) {
    return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
  }
  var Ci = null, ir = null, ar = null;
  function uu(e) {
    if (e = ps(e)) {
      if (typeof Ci != "function") throw Error(i(280));
      var t = e.stateNode;
      t && (t = uo(t), Ci(e.stateNode, e.type, t));
    }
  }
  function cu(e) {
    ir ? ar ? ar.push(e) : ar = [e] : ir = e;
  }
  function du() {
    if (ir) {
      var e = ir, t = ar;
      if (ar = ir = null, uu(e), t) for (e = 0; e < t.length; e++) uu(t[e]);
    }
  }
  function fu(e, t) {
    return e(t);
  }
  function pu() {
  }
  var Ei = !1;
  function mu(e, t, n) {
    if (Ei) return e(t, n);
    Ei = !0;
    try {
      return fu(e, t, n);
    } finally {
      Ei = !1, (ir !== null || ar !== null) && (pu(), du());
    }
  }
  function qr(e, t) {
    var n = e.stateNode;
    if (n === null) return null;
    var s = uo(n);
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
  var Ni = !1;
  if (h) try {
    var Qr = {};
    Object.defineProperty(Qr, "passive", { get: function() {
      Ni = !0;
    } }), window.addEventListener("test", Qr, Qr), window.removeEventListener("test", Qr, Qr);
  } catch {
    Ni = !1;
  }
  function Cp(e, t, n, s, l, u, m, k, E) {
    var D = Array.prototype.slice.call(arguments, 3);
    try {
      t.apply(n, D);
    } catch (q) {
      this.onError(q);
    }
  }
  var Kr = !1, Hs = null, Ws = !1, Ti = null, Ep = { onError: function(e) {
    Kr = !0, Hs = e;
  } };
  function Np(e, t, n, s, l, u, m, k, E) {
    Kr = !1, Hs = null, Cp.apply(Ep, arguments);
  }
  function Tp(e, t, n, s, l, u, m, k, E) {
    if (Np.apply(this, arguments), Kr) {
      if (Kr) {
        var D = Hs;
        Kr = !1, Hs = null;
      } else throw Error(i(198));
      Ws || (Ws = !0, Ti = D);
    }
  }
  function In(e) {
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
  function hu(e) {
    if (e.tag === 13) {
      var t = e.memoizedState;
      if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
    }
    return null;
  }
  function vu(e) {
    if (In(e) !== e) throw Error(i(188));
  }
  function Rp(e) {
    var t = e.alternate;
    if (!t) {
      if (t = In(e), t === null) throw Error(i(188));
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
          if (u === n) return vu(l), e;
          if (u === s) return vu(l), t;
          u = u.sibling;
        }
        throw Error(i(188));
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
          if (!m) throw Error(i(189));
        }
      }
      if (n.alternate !== s) throw Error(i(190));
    }
    if (n.tag !== 3) throw Error(i(188));
    return n.stateNode.current === n ? e : t;
  }
  function yu(e) {
    return e = Rp(e), e !== null ? gu(e) : null;
  }
  function gu(e) {
    if (e.tag === 5 || e.tag === 6) return e;
    for (e = e.child; e !== null; ) {
      var t = gu(e);
      if (t !== null) return t;
      e = e.sibling;
    }
    return null;
  }
  var _u = a.unstable_scheduleCallback, xu = a.unstable_cancelCallback, Pp = a.unstable_shouldYield, Ap = a.unstable_requestPaint, De = a.unstable_now, bp = a.unstable_getCurrentPriorityLevel, Ri = a.unstable_ImmediatePriority, wu = a.unstable_UserBlockingPriority, Bs = a.unstable_NormalPriority, $p = a.unstable_LowPriority, Su = a.unstable_IdlePriority, Us = null, Bt = null;
  function Mp(e) {
    if (Bt && typeof Bt.onCommitFiberRoot == "function") try {
      Bt.onCommitFiberRoot(Us, e, void 0, (e.current.flags & 128) === 128);
    } catch {
    }
  }
  var $t = Math.clz32 ? Math.clz32 : Dp, Ip = Math.log, Lp = Math.LN2;
  function Dp(e) {
    return e >>>= 0, e === 0 ? 32 : 31 - (Ip(e) / Lp | 0) | 0;
  }
  var Vs = 64, qs = 4194304;
  function Yr(e) {
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
  function Qs(e, t) {
    var n = e.pendingLanes;
    if (n === 0) return 0;
    var s = 0, l = e.suspendedLanes, u = e.pingedLanes, m = n & 268435455;
    if (m !== 0) {
      var k = m & ~l;
      k !== 0 ? s = Yr(k) : (u &= m, u !== 0 && (s = Yr(u)));
    } else m = n & ~l, m !== 0 ? s = Yr(m) : u !== 0 && (s = Yr(u));
    if (s === 0) return 0;
    if (t !== 0 && t !== s && (t & l) === 0 && (l = s & -s, u = t & -t, l >= u || l === 16 && (u & 4194240) !== 0)) return t;
    if ((s & 4) !== 0 && (s |= n & 16), t = e.entangledLanes, t !== 0) for (e = e.entanglements, t &= s; 0 < t; ) n = 31 - $t(t), l = 1 << n, s |= e[n], t &= ~l;
    return s;
  }
  function zp(e, t) {
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
  function Op(e, t) {
    for (var n = e.suspendedLanes, s = e.pingedLanes, l = e.expirationTimes, u = e.pendingLanes; 0 < u; ) {
      var m = 31 - $t(u), k = 1 << m, E = l[m];
      E === -1 ? ((k & n) === 0 || (k & s) !== 0) && (l[m] = zp(k, t)) : E <= t && (e.expiredLanes |= k), u &= ~k;
    }
  }
  function Pi(e) {
    return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
  }
  function ku() {
    var e = Vs;
    return Vs <<= 1, (Vs & 4194240) === 0 && (Vs = 64), e;
  }
  function Ai(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t;
  }
  function Gr(e, t, n) {
    e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - $t(t), e[t] = n;
  }
  function Fp(e, t) {
    var n = e.pendingLanes & ~t;
    e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
    var s = e.eventTimes;
    for (e = e.expirationTimes; 0 < n; ) {
      var l = 31 - $t(n), u = 1 << l;
      t[l] = 0, s[l] = -1, e[l] = -1, n &= ~u;
    }
  }
  function bi(e, t) {
    var n = e.entangledLanes |= t;
    for (e = e.entanglements; n; ) {
      var s = 31 - $t(n), l = 1 << s;
      l & t | e[s] & t && (e[s] |= t), n &= ~l;
    }
  }
  var Ce = 0;
  function ju(e) {
    return e &= -e, 1 < e ? 4 < e ? (e & 268435455) !== 0 ? 16 : 536870912 : 4 : 1;
  }
  var Cu, $i, Eu, Nu, Tu, Mi = !1, Ks = [], cn = null, dn = null, fn = null, Jr = /* @__PURE__ */ new Map(), Xr = /* @__PURE__ */ new Map(), pn = [], Hp = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
  function Ru(e, t) {
    switch (e) {
      case "focusin":
      case "focusout":
        cn = null;
        break;
      case "dragenter":
      case "dragleave":
        dn = null;
        break;
      case "mouseover":
      case "mouseout":
        fn = null;
        break;
      case "pointerover":
      case "pointerout":
        Jr.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Xr.delete(t.pointerId);
    }
  }
  function Zr(e, t, n, s, l, u) {
    return e === null || e.nativeEvent !== u ? (e = { blockedOn: t, domEventName: n, eventSystemFlags: s, nativeEvent: u, targetContainers: [l] }, t !== null && (t = ps(t), t !== null && $i(t)), e) : (e.eventSystemFlags |= s, t = e.targetContainers, l !== null && t.indexOf(l) === -1 && t.push(l), e);
  }
  function Wp(e, t, n, s, l) {
    switch (t) {
      case "focusin":
        return cn = Zr(cn, e, t, n, s, l), !0;
      case "dragenter":
        return dn = Zr(dn, e, t, n, s, l), !0;
      case "mouseover":
        return fn = Zr(fn, e, t, n, s, l), !0;
      case "pointerover":
        var u = l.pointerId;
        return Jr.set(u, Zr(Jr.get(u) || null, e, t, n, s, l)), !0;
      case "gotpointercapture":
        return u = l.pointerId, Xr.set(u, Zr(Xr.get(u) || null, e, t, n, s, l)), !0;
    }
    return !1;
  }
  function Pu(e) {
    var t = Ln(e.target);
    if (t !== null) {
      var n = In(t);
      if (n !== null) {
        if (t = n.tag, t === 13) {
          if (t = hu(n), t !== null) {
            e.blockedOn = t, Tu(e.priority, function() {
              Eu(n);
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
  function Ys(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var n = Li(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
      if (n === null) {
        n = e.nativeEvent;
        var s = new n.constructor(n.type, n);
        ki = s, n.target.dispatchEvent(s), ki = null;
      } else return t = ps(n), t !== null && $i(t), e.blockedOn = n, !1;
      t.shift();
    }
    return !0;
  }
  function Au(e, t, n) {
    Ys(e) && n.delete(t);
  }
  function Bp() {
    Mi = !1, cn !== null && Ys(cn) && (cn = null), dn !== null && Ys(dn) && (dn = null), fn !== null && Ys(fn) && (fn = null), Jr.forEach(Au), Xr.forEach(Au);
  }
  function es(e, t) {
    e.blockedOn === t && (e.blockedOn = null, Mi || (Mi = !0, a.unstable_scheduleCallback(a.unstable_NormalPriority, Bp)));
  }
  function ts(e) {
    function t(l) {
      return es(l, e);
    }
    if (0 < Ks.length) {
      es(Ks[0], e);
      for (var n = 1; n < Ks.length; n++) {
        var s = Ks[n];
        s.blockedOn === e && (s.blockedOn = null);
      }
    }
    for (cn !== null && es(cn, e), dn !== null && es(dn, e), fn !== null && es(fn, e), Jr.forEach(t), Xr.forEach(t), n = 0; n < pn.length; n++) s = pn[n], s.blockedOn === e && (s.blockedOn = null);
    for (; 0 < pn.length && (n = pn[0], n.blockedOn === null); ) Pu(n), n.blockedOn === null && pn.shift();
  }
  var lr = F.ReactCurrentBatchConfig, Gs = !0;
  function Up(e, t, n, s) {
    var l = Ce, u = lr.transition;
    lr.transition = null;
    try {
      Ce = 1, Ii(e, t, n, s);
    } finally {
      Ce = l, lr.transition = u;
    }
  }
  function Vp(e, t, n, s) {
    var l = Ce, u = lr.transition;
    lr.transition = null;
    try {
      Ce = 4, Ii(e, t, n, s);
    } finally {
      Ce = l, lr.transition = u;
    }
  }
  function Ii(e, t, n, s) {
    if (Gs) {
      var l = Li(e, t, n, s);
      if (l === null) Zi(e, t, s, Js, n), Ru(e, s);
      else if (Wp(l, e, t, n, s)) s.stopPropagation();
      else if (Ru(e, s), t & 4 && -1 < Hp.indexOf(e)) {
        for (; l !== null; ) {
          var u = ps(l);
          if (u !== null && Cu(u), u = Li(e, t, n, s), u === null && Zi(e, t, s, Js, n), u === l) break;
          l = u;
        }
        l !== null && s.stopPropagation();
      } else Zi(e, t, s, null, n);
    }
  }
  var Js = null;
  function Li(e, t, n, s) {
    if (Js = null, e = ji(s), e = Ln(e), e !== null) if (t = In(e), t === null) e = null;
    else if (n = t.tag, n === 13) {
      if (e = hu(t), e !== null) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
    return Js = e, null;
  }
  function bu(e) {
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
        switch (bp()) {
          case Ri:
            return 1;
          case wu:
            return 4;
          case Bs:
          case $p:
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
  var mn = null, Di = null, Xs = null;
  function $u() {
    if (Xs) return Xs;
    var e, t = Di, n = t.length, s, l = "value" in mn ? mn.value : mn.textContent, u = l.length;
    for (e = 0; e < n && t[e] === l[e]; e++) ;
    var m = n - e;
    for (s = 1; s <= m && t[n - s] === l[u - s]; s++) ;
    return Xs = l.slice(e, 1 < s ? 1 - s : void 0);
  }
  function Zs(e) {
    var t = e.keyCode;
    return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
  }
  function eo() {
    return !0;
  }
  function Mu() {
    return !1;
  }
  function xt(e) {
    function t(n, s, l, u, m) {
      this._reactName = n, this._targetInst = l, this.type = s, this.nativeEvent = u, this.target = m, this.currentTarget = null;
      for (var k in e) e.hasOwnProperty(k) && (n = e[k], this[k] = n ? n(u) : u[k]);
      return this.isDefaultPrevented = (u.defaultPrevented != null ? u.defaultPrevented : u.returnValue === !1) ? eo : Mu, this.isPropagationStopped = Mu, this;
    }
    return Q(t.prototype, { preventDefault: function() {
      this.defaultPrevented = !0;
      var n = this.nativeEvent;
      n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = eo);
    }, stopPropagation: function() {
      var n = this.nativeEvent;
      n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = eo);
    }, persist: function() {
    }, isPersistent: eo }), t;
  }
  var ur = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
    return e.timeStamp || Date.now();
  }, defaultPrevented: 0, isTrusted: 0 }, zi = xt(ur), ns = Q({}, ur, { view: 0, detail: 0 }), qp = xt(ns), Oi, Fi, rs, to = Q({}, ns, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: Wi, button: 0, buttons: 0, relatedTarget: function(e) {
    return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
  }, movementX: function(e) {
    return "movementX" in e ? e.movementX : (e !== rs && (rs && e.type === "mousemove" ? (Oi = e.screenX - rs.screenX, Fi = e.screenY - rs.screenY) : Fi = Oi = 0, rs = e), Oi);
  }, movementY: function(e) {
    return "movementY" in e ? e.movementY : Fi;
  } }), Iu = xt(to), Qp = Q({}, to, { dataTransfer: 0 }), Kp = xt(Qp), Yp = Q({}, ns, { relatedTarget: 0 }), Hi = xt(Yp), Gp = Q({}, ur, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), Jp = xt(Gp), Xp = Q({}, ur, { clipboardData: function(e) {
    return "clipboardData" in e ? e.clipboardData : window.clipboardData;
  } }), Zp = xt(Xp), em = Q({}, ur, { data: 0 }), Lu = xt(em), tm = {
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
  }, nm = {
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
  }, rm = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function sm(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = rm[e]) ? !!t[e] : !1;
  }
  function Wi() {
    return sm;
  }
  var om = Q({}, ns, { key: function(e) {
    if (e.key) {
      var t = tm[e.key] || e.key;
      if (t !== "Unidentified") return t;
    }
    return e.type === "keypress" ? (e = Zs(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? nm[e.keyCode] || "Unidentified" : "";
  }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: Wi, charCode: function(e) {
    return e.type === "keypress" ? Zs(e) : 0;
  }, keyCode: function(e) {
    return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
  }, which: function(e) {
    return e.type === "keypress" ? Zs(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
  } }), im = xt(om), am = Q({}, to, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), Du = xt(am), lm = Q({}, ns, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: Wi }), um = xt(lm), cm = Q({}, ur, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), dm = xt(cm), fm = Q({}, to, {
    deltaX: function(e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function(e) {
      return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), pm = xt(fm), mm = [9, 13, 27, 32], Bi = h && "CompositionEvent" in window, ss = null;
  h && "documentMode" in document && (ss = document.documentMode);
  var hm = h && "TextEvent" in window && !ss, zu = h && (!Bi || ss && 8 < ss && 11 >= ss), Ou = " ", Fu = !1;
  function Hu(e, t) {
    switch (e) {
      case "keyup":
        return mm.indexOf(t.keyCode) !== -1;
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
  function Wu(e) {
    return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
  }
  var cr = !1;
  function vm(e, t) {
    switch (e) {
      case "compositionend":
        return Wu(t);
      case "keypress":
        return t.which !== 32 ? null : (Fu = !0, Ou);
      case "textInput":
        return e = t.data, e === Ou && Fu ? null : e;
      default:
        return null;
    }
  }
  function ym(e, t) {
    if (cr) return e === "compositionend" || !Bi && Hu(e, t) ? (e = $u(), Xs = Di = mn = null, cr = !1, e) : null;
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
  var gm = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
  function Bu(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!gm[e.type] : t === "textarea";
  }
  function Uu(e, t, n, s) {
    cu(s), t = io(t, "onChange"), 0 < t.length && (n = new zi("onChange", "change", null, n, s), e.push({ event: n, listeners: t }));
  }
  var os = null, is = null;
  function _m(e) {
    lc(e, 0);
  }
  function no(e) {
    var t = hr(e);
    if (Wr(t)) return e;
  }
  function xm(e, t) {
    if (e === "change") return t;
  }
  var Vu = !1;
  if (h) {
    var Ui;
    if (h) {
      var Vi = "oninput" in document;
      if (!Vi) {
        var qu = document.createElement("div");
        qu.setAttribute("oninput", "return;"), Vi = typeof qu.oninput == "function";
      }
      Ui = Vi;
    } else Ui = !1;
    Vu = Ui && (!document.documentMode || 9 < document.documentMode);
  }
  function Qu() {
    os && (os.detachEvent("onpropertychange", Ku), is = os = null);
  }
  function Ku(e) {
    if (e.propertyName === "value" && no(is)) {
      var t = [];
      Uu(t, is, e, ji(e)), mu(_m, t);
    }
  }
  function wm(e, t, n) {
    e === "focusin" ? (Qu(), os = t, is = n, os.attachEvent("onpropertychange", Ku)) : e === "focusout" && Qu();
  }
  function Sm(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown") return no(is);
  }
  function km(e, t) {
    if (e === "click") return no(t);
  }
  function jm(e, t) {
    if (e === "input" || e === "change") return no(t);
  }
  function Cm(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
  }
  var Mt = typeof Object.is == "function" ? Object.is : Cm;
  function as(e, t) {
    if (Mt(e, t)) return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
    var n = Object.keys(e), s = Object.keys(t);
    if (n.length !== s.length) return !1;
    for (s = 0; s < n.length; s++) {
      var l = n[s];
      if (!g.call(t, l) || !Mt(e[l], t[l])) return !1;
    }
    return !0;
  }
  function Yu(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function Gu(e, t) {
    var n = Yu(e);
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
      n = Yu(n);
    }
  }
  function Ju(e, t) {
    return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? Ju(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
  }
  function Xu() {
    for (var e = window, t = Mn(); t instanceof e.HTMLIFrameElement; ) {
      try {
        var n = typeof t.contentWindow.location.href == "string";
      } catch {
        n = !1;
      }
      if (n) e = t.contentWindow;
      else break;
      t = Mn(e.document);
    }
    return t;
  }
  function qi(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
  }
  function Em(e) {
    var t = Xu(), n = e.focusedElem, s = e.selectionRange;
    if (t !== n && n && n.ownerDocument && Ju(n.ownerDocument.documentElement, n)) {
      if (s !== null && qi(n)) {
        if (t = s.start, e = s.end, e === void 0 && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
        else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
          e = e.getSelection();
          var l = n.textContent.length, u = Math.min(s.start, l);
          s = s.end === void 0 ? u : Math.min(s.end, l), !e.extend && u > s && (l = s, s = u, u = l), l = Gu(n, u);
          var m = Gu(
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
  var Nm = h && "documentMode" in document && 11 >= document.documentMode, dr = null, Qi = null, ls = null, Ki = !1;
  function Zu(e, t, n) {
    var s = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    Ki || dr == null || dr !== Mn(s) || (s = dr, "selectionStart" in s && qi(s) ? s = { start: s.selectionStart, end: s.selectionEnd } : (s = (s.ownerDocument && s.ownerDocument.defaultView || window).getSelection(), s = { anchorNode: s.anchorNode, anchorOffset: s.anchorOffset, focusNode: s.focusNode, focusOffset: s.focusOffset }), ls && as(ls, s) || (ls = s, s = io(Qi, "onSelect"), 0 < s.length && (t = new zi("onSelect", "select", null, t, n), e.push({ event: t, listeners: s }), t.target = dr)));
  }
  function ro(e, t) {
    var n = {};
    return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
  }
  var fr = { animationend: ro("Animation", "AnimationEnd"), animationiteration: ro("Animation", "AnimationIteration"), animationstart: ro("Animation", "AnimationStart"), transitionend: ro("Transition", "TransitionEnd") }, Yi = {}, ec = {};
  h && (ec = document.createElement("div").style, "AnimationEvent" in window || (delete fr.animationend.animation, delete fr.animationiteration.animation, delete fr.animationstart.animation), "TransitionEvent" in window || delete fr.transitionend.transition);
  function so(e) {
    if (Yi[e]) return Yi[e];
    if (!fr[e]) return e;
    var t = fr[e], n;
    for (n in t) if (t.hasOwnProperty(n) && n in ec) return Yi[e] = t[n];
    return e;
  }
  var tc = so("animationend"), nc = so("animationiteration"), rc = so("animationstart"), sc = so("transitionend"), oc = /* @__PURE__ */ new Map(), ic = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  function hn(e, t) {
    oc.set(e, t), f(t, [e]);
  }
  for (var Gi = 0; Gi < ic.length; Gi++) {
    var Ji = ic[Gi], Tm = Ji.toLowerCase(), Rm = Ji[0].toUpperCase() + Ji.slice(1);
    hn(Tm, "on" + Rm);
  }
  hn(tc, "onAnimationEnd"), hn(nc, "onAnimationIteration"), hn(rc, "onAnimationStart"), hn("dblclick", "onDoubleClick"), hn("focusin", "onFocus"), hn("focusout", "onBlur"), hn(sc, "onTransitionEnd"), p("onMouseEnter", ["mouseout", "mouseover"]), p("onMouseLeave", ["mouseout", "mouseover"]), p("onPointerEnter", ["pointerout", "pointerover"]), p("onPointerLeave", ["pointerout", "pointerover"]), f("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), f("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), f("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), f("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), f("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), f("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var us = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), Pm = new Set("cancel close invalid load scroll toggle".split(" ").concat(us));
  function ac(e, t, n) {
    var s = e.type || "unknown-event";
    e.currentTarget = n, Tp(s, t, void 0, e), e.currentTarget = null;
  }
  function lc(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
      var s = e[n], l = s.event;
      s = s.listeners;
      e: {
        var u = void 0;
        if (t) for (var m = s.length - 1; 0 <= m; m--) {
          var k = s[m], E = k.instance, D = k.currentTarget;
          if (k = k.listener, E !== u && l.isPropagationStopped()) break e;
          ac(l, k, D), u = E;
        }
        else for (m = 0; m < s.length; m++) {
          if (k = s[m], E = k.instance, D = k.currentTarget, k = k.listener, E !== u && l.isPropagationStopped()) break e;
          ac(l, k, D), u = E;
        }
      }
    }
    if (Ws) throw e = Ti, Ws = !1, Ti = null, e;
  }
  function Pe(e, t) {
    var n = t[oa];
    n === void 0 && (n = t[oa] = /* @__PURE__ */ new Set());
    var s = e + "__bubble";
    n.has(s) || (uc(t, e, 2, !1), n.add(s));
  }
  function Xi(e, t, n) {
    var s = 0;
    t && (s |= 4), uc(n, e, s, t);
  }
  var oo = "_reactListening" + Math.random().toString(36).slice(2);
  function cs(e) {
    if (!e[oo]) {
      e[oo] = !0, c.forEach(function(n) {
        n !== "selectionchange" && (Pm.has(n) || Xi(n, !1, e), Xi(n, !0, e));
      });
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[oo] || (t[oo] = !0, Xi("selectionchange", !1, t));
    }
  }
  function uc(e, t, n, s) {
    switch (bu(t)) {
      case 1:
        var l = Up;
        break;
      case 4:
        l = Vp;
        break;
      default:
        l = Ii;
    }
    n = l.bind(null, t, n, e), l = void 0, !Ni || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (l = !0), s ? l !== void 0 ? e.addEventListener(t, n, { capture: !0, passive: l }) : e.addEventListener(t, n, !0) : l !== void 0 ? e.addEventListener(t, n, { passive: l }) : e.addEventListener(t, n, !1);
  }
  function Zi(e, t, n, s, l) {
    var u = s;
    if ((t & 1) === 0 && (t & 2) === 0 && s !== null) e: for (; ; ) {
      if (s === null) return;
      var m = s.tag;
      if (m === 3 || m === 4) {
        var k = s.stateNode.containerInfo;
        if (k === l || k.nodeType === 8 && k.parentNode === l) break;
        if (m === 4) for (m = s.return; m !== null; ) {
          var E = m.tag;
          if ((E === 3 || E === 4) && (E = m.stateNode.containerInfo, E === l || E.nodeType === 8 && E.parentNode === l)) return;
          m = m.return;
        }
        for (; k !== null; ) {
          if (m = Ln(k), m === null) return;
          if (E = m.tag, E === 5 || E === 6) {
            s = u = m;
            continue e;
          }
          k = k.parentNode;
        }
      }
      s = s.return;
    }
    mu(function() {
      var D = u, q = ji(n), K = [];
      e: {
        var V = oc.get(e);
        if (V !== void 0) {
          var Z = zi, te = e;
          switch (e) {
            case "keypress":
              if (Zs(n) === 0) break e;
            case "keydown":
            case "keyup":
              Z = im;
              break;
            case "focusin":
              te = "focus", Z = Hi;
              break;
            case "focusout":
              te = "blur", Z = Hi;
              break;
            case "beforeblur":
            case "afterblur":
              Z = Hi;
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
              Z = Iu;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              Z = Kp;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              Z = um;
              break;
            case tc:
            case nc:
            case rc:
              Z = Jp;
              break;
            case sc:
              Z = dm;
              break;
            case "scroll":
              Z = qp;
              break;
            case "wheel":
              Z = pm;
              break;
            case "copy":
            case "cut":
            case "paste":
              Z = Zp;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              Z = Du;
          }
          var ne = (t & 4) !== 0, ze = !ne && e === "scroll", $ = ne ? V !== null ? V + "Capture" : null : V;
          ne = [];
          for (var P = D, I; P !== null; ) {
            I = P;
            var Y = I.stateNode;
            if (I.tag === 5 && Y !== null && (I = Y, $ !== null && (Y = qr(P, $), Y != null && ne.push(ds(P, Y, I)))), ze) break;
            P = P.return;
          }
          0 < ne.length && (V = new Z(V, te, null, n, q), K.push({ event: V, listeners: ne }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (V = e === "mouseover" || e === "pointerover", Z = e === "mouseout" || e === "pointerout", V && n !== ki && (te = n.relatedTarget || n.fromElement) && (Ln(te) || te[Xt])) break e;
          if ((Z || V) && (V = q.window === q ? q : (V = q.ownerDocument) ? V.defaultView || V.parentWindow : window, Z ? (te = n.relatedTarget || n.toElement, Z = D, te = te ? Ln(te) : null, te !== null && (ze = In(te), te !== ze || te.tag !== 5 && te.tag !== 6) && (te = null)) : (Z = null, te = D), Z !== te)) {
            if (ne = Iu, Y = "onMouseLeave", $ = "onMouseEnter", P = "mouse", (e === "pointerout" || e === "pointerover") && (ne = Du, Y = "onPointerLeave", $ = "onPointerEnter", P = "pointer"), ze = Z == null ? V : hr(Z), I = te == null ? V : hr(te), V = new ne(Y, P + "leave", Z, n, q), V.target = ze, V.relatedTarget = I, Y = null, Ln(q) === D && (ne = new ne($, P + "enter", te, n, q), ne.target = I, ne.relatedTarget = ze, Y = ne), ze = Y, Z && te) t: {
              for (ne = Z, $ = te, P = 0, I = ne; I; I = pr(I)) P++;
              for (I = 0, Y = $; Y; Y = pr(Y)) I++;
              for (; 0 < P - I; ) ne = pr(ne), P--;
              for (; 0 < I - P; ) $ = pr($), I--;
              for (; P--; ) {
                if (ne === $ || $ !== null && ne === $.alternate) break t;
                ne = pr(ne), $ = pr($);
              }
              ne = null;
            }
            else ne = null;
            Z !== null && cc(K, V, Z, ne, !1), te !== null && ze !== null && cc(K, ze, te, ne, !0);
          }
        }
        e: {
          if (V = D ? hr(D) : window, Z = V.nodeName && V.nodeName.toLowerCase(), Z === "select" || Z === "input" && V.type === "file") var re = xm;
          else if (Bu(V)) if (Vu) re = jm;
          else {
            re = Sm;
            var ie = wm;
          }
          else (Z = V.nodeName) && Z.toLowerCase() === "input" && (V.type === "checkbox" || V.type === "radio") && (re = km);
          if (re && (re = re(e, D))) {
            Uu(K, re, n, q);
            break e;
          }
          ie && ie(e, V, D), e === "focusout" && (ie = V._wrapperState) && ie.controlled && V.type === "number" && gi(V, "number", V.value);
        }
        switch (ie = D ? hr(D) : window, e) {
          case "focusin":
            (Bu(ie) || ie.contentEditable === "true") && (dr = ie, Qi = D, ls = null);
            break;
          case "focusout":
            ls = Qi = dr = null;
            break;
          case "mousedown":
            Ki = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            Ki = !1, Zu(K, n, q);
            break;
          case "selectionchange":
            if (Nm) break;
          case "keydown":
          case "keyup":
            Zu(K, n, q);
        }
        var ae;
        if (Bi) e: {
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
        else cr ? Hu(e, n) && (ue = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (ue = "onCompositionStart");
        ue && (zu && n.locale !== "ko" && (cr || ue !== "onCompositionStart" ? ue === "onCompositionEnd" && cr && (ae = $u()) : (mn = q, Di = "value" in mn ? mn.value : mn.textContent, cr = !0)), ie = io(D, ue), 0 < ie.length && (ue = new Lu(ue, e, null, n, q), K.push({ event: ue, listeners: ie }), ae ? ue.data = ae : (ae = Wu(n), ae !== null && (ue.data = ae)))), (ae = hm ? vm(e, n) : ym(e, n)) && (D = io(D, "onBeforeInput"), 0 < D.length && (q = new Lu("onBeforeInput", "beforeinput", null, n, q), K.push({ event: q, listeners: D }), q.data = ae));
      }
      lc(K, t);
    });
  }
  function ds(e, t, n) {
    return { instance: e, listener: t, currentTarget: n };
  }
  function io(e, t) {
    for (var n = t + "Capture", s = []; e !== null; ) {
      var l = e, u = l.stateNode;
      l.tag === 5 && u !== null && (l = u, u = qr(e, n), u != null && s.unshift(ds(e, u, l)), u = qr(e, t), u != null && s.push(ds(e, u, l))), e = e.return;
    }
    return s;
  }
  function pr(e) {
    if (e === null) return null;
    do
      e = e.return;
    while (e && e.tag !== 5);
    return e || null;
  }
  function cc(e, t, n, s, l) {
    for (var u = t._reactName, m = []; n !== null && n !== s; ) {
      var k = n, E = k.alternate, D = k.stateNode;
      if (E !== null && E === s) break;
      k.tag === 5 && D !== null && (k = D, l ? (E = qr(n, u), E != null && m.unshift(ds(n, E, k))) : l || (E = qr(n, u), E != null && m.push(ds(n, E, k)))), n = n.return;
    }
    m.length !== 0 && e.push({ event: t, listeners: m });
  }
  var Am = /\r\n?/g, bm = /\u0000|\uFFFD/g;
  function dc(e) {
    return (typeof e == "string" ? e : "" + e).replace(Am, `
`).replace(bm, "");
  }
  function ao(e, t, n) {
    if (t = dc(t), dc(e) !== t && n) throw Error(i(425));
  }
  function lo() {
  }
  var ea = null, ta = null;
  function na(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
  }
  var ra = typeof setTimeout == "function" ? setTimeout : void 0, $m = typeof clearTimeout == "function" ? clearTimeout : void 0, fc = typeof Promise == "function" ? Promise : void 0, Mm = typeof queueMicrotask == "function" ? queueMicrotask : typeof fc < "u" ? function(e) {
    return fc.resolve(null).then(e).catch(Im);
  } : ra;
  function Im(e) {
    setTimeout(function() {
      throw e;
    });
  }
  function sa(e, t) {
    var n = t, s = 0;
    do {
      var l = n.nextSibling;
      if (e.removeChild(n), l && l.nodeType === 8) if (n = l.data, n === "/$") {
        if (s === 0) {
          e.removeChild(l), ts(t);
          return;
        }
        s--;
      } else n !== "$" && n !== "$?" && n !== "$!" || s++;
      n = l;
    } while (n);
    ts(t);
  }
  function vn(e) {
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
  function pc(e) {
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
  var mr = Math.random().toString(36).slice(2), Ut = "__reactFiber$" + mr, fs = "__reactProps$" + mr, Xt = "__reactContainer$" + mr, oa = "__reactEvents$" + mr, Lm = "__reactListeners$" + mr, Dm = "__reactHandles$" + mr;
  function Ln(e) {
    var t = e[Ut];
    if (t) return t;
    for (var n = e.parentNode; n; ) {
      if (t = n[Xt] || n[Ut]) {
        if (n = t.alternate, t.child !== null || n !== null && n.child !== null) for (e = pc(e); e !== null; ) {
          if (n = e[Ut]) return n;
          e = pc(e);
        }
        return t;
      }
      e = n, n = e.parentNode;
    }
    return null;
  }
  function ps(e) {
    return e = e[Ut] || e[Xt], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
  }
  function hr(e) {
    if (e.tag === 5 || e.tag === 6) return e.stateNode;
    throw Error(i(33));
  }
  function uo(e) {
    return e[fs] || null;
  }
  var ia = [], vr = -1;
  function yn(e) {
    return { current: e };
  }
  function Ae(e) {
    0 > vr || (e.current = ia[vr], ia[vr] = null, vr--);
  }
  function Re(e, t) {
    vr++, ia[vr] = e.current, e.current = t;
  }
  var gn = {}, et = yn(gn), ut = yn(!1), Dn = gn;
  function yr(e, t) {
    var n = e.type.contextTypes;
    if (!n) return gn;
    var s = e.stateNode;
    if (s && s.__reactInternalMemoizedUnmaskedChildContext === t) return s.__reactInternalMemoizedMaskedChildContext;
    var l = {}, u;
    for (u in n) l[u] = t[u];
    return s && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = l), l;
  }
  function ct(e) {
    return e = e.childContextTypes, e != null;
  }
  function co() {
    Ae(ut), Ae(et);
  }
  function mc(e, t, n) {
    if (et.current !== gn) throw Error(i(168));
    Re(et, t), Re(ut, n);
  }
  function hc(e, t, n) {
    var s = e.stateNode;
    if (t = t.childContextTypes, typeof s.getChildContext != "function") return n;
    s = s.getChildContext();
    for (var l in s) if (!(l in t)) throw Error(i(108, ke(e) || "Unknown", l));
    return Q({}, n, s);
  }
  function fo(e) {
    return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || gn, Dn = et.current, Re(et, e), Re(ut, ut.current), !0;
  }
  function vc(e, t, n) {
    var s = e.stateNode;
    if (!s) throw Error(i(169));
    n ? (e = hc(e, t, Dn), s.__reactInternalMemoizedMergedChildContext = e, Ae(ut), Ae(et), Re(et, e)) : Ae(ut), Re(ut, n);
  }
  var Zt = null, po = !1, aa = !1;
  function yc(e) {
    Zt === null ? Zt = [e] : Zt.push(e);
  }
  function zm(e) {
    po = !0, yc(e);
  }
  function _n() {
    if (!aa && Zt !== null) {
      aa = !0;
      var e = 0, t = Ce;
      try {
        var n = Zt;
        for (Ce = 1; e < n.length; e++) {
          var s = n[e];
          do
            s = s(!0);
          while (s !== null);
        }
        Zt = null, po = !1;
      } catch (l) {
        throw Zt !== null && (Zt = Zt.slice(e + 1)), _u(Ri, _n), l;
      } finally {
        Ce = t, aa = !1;
      }
    }
    return null;
  }
  var gr = [], _r = 0, mo = null, ho = 0, Ct = [], Et = 0, zn = null, en = 1, tn = "";
  function On(e, t) {
    gr[_r++] = ho, gr[_r++] = mo, mo = e, ho = t;
  }
  function gc(e, t, n) {
    Ct[Et++] = en, Ct[Et++] = tn, Ct[Et++] = zn, zn = e;
    var s = en;
    e = tn;
    var l = 32 - $t(s) - 1;
    s &= ~(1 << l), n += 1;
    var u = 32 - $t(t) + l;
    if (30 < u) {
      var m = l - l % 5;
      u = (s & (1 << m) - 1).toString(32), s >>= m, l -= m, en = 1 << 32 - $t(t) + l | n << l | s, tn = u + e;
    } else en = 1 << u | n << l | s, tn = e;
  }
  function la(e) {
    e.return !== null && (On(e, 1), gc(e, 1, 0));
  }
  function ua(e) {
    for (; e === mo; ) mo = gr[--_r], gr[_r] = null, ho = gr[--_r], gr[_r] = null;
    for (; e === zn; ) zn = Ct[--Et], Ct[Et] = null, tn = Ct[--Et], Ct[Et] = null, en = Ct[--Et], Ct[Et] = null;
  }
  var wt = null, St = null, be = !1, It = null;
  function _c(e, t) {
    var n = Pt(5, null, null, 0);
    n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n);
  }
  function xc(e, t) {
    switch (e.tag) {
      case 5:
        var n = e.type;
        return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, wt = e, St = vn(t.firstChild), !0) : !1;
      case 6:
        return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, wt = e, St = null, !0) : !1;
      case 13:
        return t = t.nodeType !== 8 ? null : t, t !== null ? (n = zn !== null ? { id: en, overflow: tn } : null, e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }, n = Pt(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, wt = e, St = null, !0) : !1;
      default:
        return !1;
    }
  }
  function ca(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
  }
  function da(e) {
    if (be) {
      var t = St;
      if (t) {
        var n = t;
        if (!xc(e, t)) {
          if (ca(e)) throw Error(i(418));
          t = vn(n.nextSibling);
          var s = wt;
          t && xc(e, t) ? _c(s, n) : (e.flags = e.flags & -4097 | 2, be = !1, wt = e);
        }
      } else {
        if (ca(e)) throw Error(i(418));
        e.flags = e.flags & -4097 | 2, be = !1, wt = e;
      }
    }
  }
  function wc(e) {
    for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
    wt = e;
  }
  function vo(e) {
    if (e !== wt) return !1;
    if (!be) return wc(e), be = !0, !1;
    var t;
    if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !na(e.type, e.memoizedProps)), t && (t = St)) {
      if (ca(e)) throw Sc(), Error(i(418));
      for (; t; ) _c(e, t), t = vn(t.nextSibling);
    }
    if (wc(e), e.tag === 13) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(i(317));
      e: {
        for (e = e.nextSibling, t = 0; e; ) {
          if (e.nodeType === 8) {
            var n = e.data;
            if (n === "/$") {
              if (t === 0) {
                St = vn(e.nextSibling);
                break e;
              }
              t--;
            } else n !== "$" && n !== "$!" && n !== "$?" || t++;
          }
          e = e.nextSibling;
        }
        St = null;
      }
    } else St = wt ? vn(e.stateNode.nextSibling) : null;
    return !0;
  }
  function Sc() {
    for (var e = St; e; ) e = vn(e.nextSibling);
  }
  function xr() {
    St = wt = null, be = !1;
  }
  function fa(e) {
    It === null ? It = [e] : It.push(e);
  }
  var Om = F.ReactCurrentBatchConfig;
  function ms(e, t, n) {
    if (e = n.ref, e !== null && typeof e != "function" && typeof e != "object") {
      if (n._owner) {
        if (n = n._owner, n) {
          if (n.tag !== 1) throw Error(i(309));
          var s = n.stateNode;
        }
        if (!s) throw Error(i(147, e));
        var l = s, u = "" + e;
        return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === u ? t.ref : (t = function(m) {
          var k = l.refs;
          m === null ? delete k[u] : k[u] = m;
        }, t._stringRef = u, t);
      }
      if (typeof e != "string") throw Error(i(284));
      if (!n._owner) throw Error(i(290, e));
    }
    return e;
  }
  function yo(e, t) {
    throw e = Object.prototype.toString.call(t), Error(i(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e));
  }
  function kc(e) {
    var t = e._init;
    return t(e._payload);
  }
  function jc(e) {
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
      return $ = Nn($, P), $.index = 0, $.sibling = null, $;
    }
    function u($, P, I) {
      return $.index = I, e ? (I = $.alternate, I !== null ? (I = I.index, I < P ? ($.flags |= 2, P) : I) : ($.flags |= 2, P)) : ($.flags |= 1048576, P);
    }
    function m($) {
      return e && $.alternate === null && ($.flags |= 2), $;
    }
    function k($, P, I, Y) {
      return P === null || P.tag !== 6 ? (P = rl(I, $.mode, Y), P.return = $, P) : (P = l(P, I), P.return = $, P);
    }
    function E($, P, I, Y) {
      var re = I.type;
      return re === X ? q($, P, I.props.children, Y, I.key) : P !== null && (P.elementType === re || typeof re == "object" && re !== null && re.$$typeof === Se && kc(re) === P.type) ? (Y = l(P, I.props), Y.ref = ms($, P, I), Y.return = $, Y) : (Y = Ho(I.type, I.key, I.props, null, $.mode, Y), Y.ref = ms($, P, I), Y.return = $, Y);
    }
    function D($, P, I, Y) {
      return P === null || P.tag !== 4 || P.stateNode.containerInfo !== I.containerInfo || P.stateNode.implementation !== I.implementation ? (P = sl(I, $.mode, Y), P.return = $, P) : (P = l(P, I.children || []), P.return = $, P);
    }
    function q($, P, I, Y, re) {
      return P === null || P.tag !== 7 ? (P = Qn(I, $.mode, Y, re), P.return = $, P) : (P = l(P, I), P.return = $, P);
    }
    function K($, P, I) {
      if (typeof P == "string" && P !== "" || typeof P == "number") return P = rl("" + P, $.mode, I), P.return = $, P;
      if (typeof P == "object" && P !== null) {
        switch (P.$$typeof) {
          case B:
            return I = Ho(P.type, P.key, P.props, null, $.mode, I), I.ref = ms($, null, P), I.return = $, I;
          case M:
            return P = sl(P, $.mode, I), P.return = $, P;
          case Se:
            var Y = P._init;
            return K($, Y(P._payload), I);
        }
        if (Br(P) || O(P)) return P = Qn(P, $.mode, I, null), P.return = $, P;
        yo($, P);
      }
      return null;
    }
    function V($, P, I, Y) {
      var re = P !== null ? P.key : null;
      if (typeof I == "string" && I !== "" || typeof I == "number") return re !== null ? null : k($, P, "" + I, Y);
      if (typeof I == "object" && I !== null) {
        switch (I.$$typeof) {
          case B:
            return I.key === re ? E($, P, I, Y) : null;
          case M:
            return I.key === re ? D($, P, I, Y) : null;
          case Se:
            return re = I._init, V(
              $,
              P,
              re(I._payload),
              Y
            );
        }
        if (Br(I) || O(I)) return re !== null ? null : q($, P, I, Y, null);
        yo($, I);
      }
      return null;
    }
    function Z($, P, I, Y, re) {
      if (typeof Y == "string" && Y !== "" || typeof Y == "number") return $ = $.get(I) || null, k(P, $, "" + Y, re);
      if (typeof Y == "object" && Y !== null) {
        switch (Y.$$typeof) {
          case B:
            return $ = $.get(Y.key === null ? I : Y.key) || null, E(P, $, Y, re);
          case M:
            return $ = $.get(Y.key === null ? I : Y.key) || null, D(P, $, Y, re);
          case Se:
            var ie = Y._init;
            return Z($, P, I, ie(Y._payload), re);
        }
        if (Br(Y) || O(Y)) return $ = $.get(I) || null, q(P, $, Y, re, null);
        yo(P, Y);
      }
      return null;
    }
    function te($, P, I, Y) {
      for (var re = null, ie = null, ae = P, ue = P = 0, Qe = null; ae !== null && ue < I.length; ue++) {
        ae.index > ue ? (Qe = ae, ae = null) : Qe = ae.sibling;
        var we = V($, ae, I[ue], Y);
        if (we === null) {
          ae === null && (ae = Qe);
          break;
        }
        e && ae && we.alternate === null && t($, ae), P = u(we, P, ue), ie === null ? re = we : ie.sibling = we, ie = we, ae = Qe;
      }
      if (ue === I.length) return n($, ae), be && On($, ue), re;
      if (ae === null) {
        for (; ue < I.length; ue++) ae = K($, I[ue], Y), ae !== null && (P = u(ae, P, ue), ie === null ? re = ae : ie.sibling = ae, ie = ae);
        return be && On($, ue), re;
      }
      for (ae = s($, ae); ue < I.length; ue++) Qe = Z(ae, $, ue, I[ue], Y), Qe !== null && (e && Qe.alternate !== null && ae.delete(Qe.key === null ? ue : Qe.key), P = u(Qe, P, ue), ie === null ? re = Qe : ie.sibling = Qe, ie = Qe);
      return e && ae.forEach(function(Tn) {
        return t($, Tn);
      }), be && On($, ue), re;
    }
    function ne($, P, I, Y) {
      var re = O(I);
      if (typeof re != "function") throw Error(i(150));
      if (I = re.call(I), I == null) throw Error(i(151));
      for (var ie = re = null, ae = P, ue = P = 0, Qe = null, we = I.next(); ae !== null && !we.done; ue++, we = I.next()) {
        ae.index > ue ? (Qe = ae, ae = null) : Qe = ae.sibling;
        var Tn = V($, ae, we.value, Y);
        if (Tn === null) {
          ae === null && (ae = Qe);
          break;
        }
        e && ae && Tn.alternate === null && t($, ae), P = u(Tn, P, ue), ie === null ? re = Tn : ie.sibling = Tn, ie = Tn, ae = Qe;
      }
      if (we.done) return n(
        $,
        ae
      ), be && On($, ue), re;
      if (ae === null) {
        for (; !we.done; ue++, we = I.next()) we = K($, we.value, Y), we !== null && (P = u(we, P, ue), ie === null ? re = we : ie.sibling = we, ie = we);
        return be && On($, ue), re;
      }
      for (ae = s($, ae); !we.done; ue++, we = I.next()) we = Z(ae, $, ue, we.value, Y), we !== null && (e && we.alternate !== null && ae.delete(we.key === null ? ue : we.key), P = u(we, P, ue), ie === null ? re = we : ie.sibling = we, ie = we);
      return e && ae.forEach(function(gh) {
        return t($, gh);
      }), be && On($, ue), re;
    }
    function ze($, P, I, Y) {
      if (typeof I == "object" && I !== null && I.type === X && I.key === null && (I = I.props.children), typeof I == "object" && I !== null) {
        switch (I.$$typeof) {
          case B:
            e: {
              for (var re = I.key, ie = P; ie !== null; ) {
                if (ie.key === re) {
                  if (re = I.type, re === X) {
                    if (ie.tag === 7) {
                      n($, ie.sibling), P = l(ie, I.props.children), P.return = $, $ = P;
                      break e;
                    }
                  } else if (ie.elementType === re || typeof re == "object" && re !== null && re.$$typeof === Se && kc(re) === ie.type) {
                    n($, ie.sibling), P = l(ie, I.props), P.ref = ms($, ie, I), P.return = $, $ = P;
                    break e;
                  }
                  n($, ie);
                  break;
                } else t($, ie);
                ie = ie.sibling;
              }
              I.type === X ? (P = Qn(I.props.children, $.mode, Y, I.key), P.return = $, $ = P) : (Y = Ho(I.type, I.key, I.props, null, $.mode, Y), Y.ref = ms($, P, I), Y.return = $, $ = Y);
            }
            return m($);
          case M:
            e: {
              for (ie = I.key; P !== null; ) {
                if (P.key === ie) if (P.tag === 4 && P.stateNode.containerInfo === I.containerInfo && P.stateNode.implementation === I.implementation) {
                  n($, P.sibling), P = l(P, I.children || []), P.return = $, $ = P;
                  break e;
                } else {
                  n($, P);
                  break;
                }
                else t($, P);
                P = P.sibling;
              }
              P = sl(I, $.mode, Y), P.return = $, $ = P;
            }
            return m($);
          case Se:
            return ie = I._init, ze($, P, ie(I._payload), Y);
        }
        if (Br(I)) return te($, P, I, Y);
        if (O(I)) return ne($, P, I, Y);
        yo($, I);
      }
      return typeof I == "string" && I !== "" || typeof I == "number" ? (I = "" + I, P !== null && P.tag === 6 ? (n($, P.sibling), P = l(P, I), P.return = $, $ = P) : (n($, P), P = rl(I, $.mode, Y), P.return = $, $ = P), m($)) : n($, P);
    }
    return ze;
  }
  var wr = jc(!0), Cc = jc(!1), go = yn(null), _o = null, Sr = null, pa = null;
  function ma() {
    pa = Sr = _o = null;
  }
  function ha(e) {
    var t = go.current;
    Ae(go), e._currentValue = t;
  }
  function va(e, t, n) {
    for (; e !== null; ) {
      var s = e.alternate;
      if ((e.childLanes & t) !== t ? (e.childLanes |= t, s !== null && (s.childLanes |= t)) : s !== null && (s.childLanes & t) !== t && (s.childLanes |= t), e === n) break;
      e = e.return;
    }
  }
  function kr(e, t) {
    _o = e, pa = Sr = null, e = e.dependencies, e !== null && e.firstContext !== null && ((e.lanes & t) !== 0 && (dt = !0), e.firstContext = null);
  }
  function Nt(e) {
    var t = e._currentValue;
    if (pa !== e) if (e = { context: e, memoizedValue: t, next: null }, Sr === null) {
      if (_o === null) throw Error(i(308));
      Sr = e, _o.dependencies = { lanes: 0, firstContext: e };
    } else Sr = Sr.next = e;
    return t;
  }
  var Fn = null;
  function ya(e) {
    Fn === null ? Fn = [e] : Fn.push(e);
  }
  function Ec(e, t, n, s) {
    var l = t.interleaved;
    return l === null ? (n.next = n, ya(t)) : (n.next = l.next, l.next = n), t.interleaved = n, nn(e, s);
  }
  function nn(e, t) {
    e.lanes |= t;
    var n = e.alternate;
    for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; ) e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
    return n.tag === 3 ? n.stateNode : null;
  }
  var xn = !1;
  function ga(e) {
    e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
  }
  function Nc(e, t) {
    e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
  }
  function rn(e, t) {
    return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
  }
  function wn(e, t, n) {
    var s = e.updateQueue;
    if (s === null) return null;
    if (s = s.shared, (_e & 2) !== 0) {
      var l = s.pending;
      return l === null ? t.next = t : (t.next = l.next, l.next = t), s.pending = t, nn(e, n);
    }
    return l = s.interleaved, l === null ? (t.next = t, ya(s)) : (t.next = l.next, l.next = t), s.interleaved = t, nn(e, n);
  }
  function xo(e, t, n) {
    if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
      var s = t.lanes;
      s &= e.pendingLanes, n |= s, t.lanes = n, bi(e, n);
    }
  }
  function Tc(e, t) {
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
  function wo(e, t, n, s) {
    var l = e.updateQueue;
    xn = !1;
    var u = l.firstBaseUpdate, m = l.lastBaseUpdate, k = l.shared.pending;
    if (k !== null) {
      l.shared.pending = null;
      var E = k, D = E.next;
      E.next = null, m === null ? u = D : m.next = D, m = E;
      var q = e.alternate;
      q !== null && (q = q.updateQueue, k = q.lastBaseUpdate, k !== m && (k === null ? q.firstBaseUpdate = D : k.next = D, q.lastBaseUpdate = E));
    }
    if (u !== null) {
      var K = l.baseState;
      m = 0, q = D = E = null, k = u;
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
                xn = !0;
            }
          }
          k.callback !== null && k.lane !== 0 && (e.flags |= 64, V = l.effects, V === null ? l.effects = [k] : V.push(k));
        } else Z = { eventTime: Z, lane: V, tag: k.tag, payload: k.payload, callback: k.callback, next: null }, q === null ? (D = q = Z, E = K) : q = q.next = Z, m |= V;
        if (k = k.next, k === null) {
          if (k = l.shared.pending, k === null) break;
          V = k, k = V.next, V.next = null, l.lastBaseUpdate = V, l.shared.pending = null;
        }
      } while (!0);
      if (q === null && (E = K), l.baseState = E, l.firstBaseUpdate = D, l.lastBaseUpdate = q, t = l.shared.interleaved, t !== null) {
        l = t;
        do
          m |= l.lane, l = l.next;
        while (l !== t);
      } else u === null && (l.shared.lanes = 0);
      Bn |= m, e.lanes = m, e.memoizedState = K;
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
  var hs = {}, Vt = yn(hs), vs = yn(hs), ys = yn(hs);
  function Hn(e) {
    if (e === hs) throw Error(i(174));
    return e;
  }
  function _a(e, t) {
    switch (Re(ys, t), Re(vs, e), Re(Vt, hs), e = t.nodeType, e) {
      case 9:
      case 11:
        t = (t = t.documentElement) ? t.namespaceURI : xi(null, "");
        break;
      default:
        e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = xi(t, e);
    }
    Ae(Vt), Re(Vt, t);
  }
  function jr() {
    Ae(Vt), Ae(vs), Ae(ys);
  }
  function Pc(e) {
    Hn(ys.current);
    var t = Hn(Vt.current), n = xi(t, e.type);
    t !== n && (Re(vs, e), Re(Vt, n));
  }
  function xa(e) {
    vs.current === e && (Ae(Vt), Ae(vs));
  }
  var Me = yn(0);
  function So(e) {
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
  var wa = [];
  function Sa() {
    for (var e = 0; e < wa.length; e++) wa[e]._workInProgressVersionPrimary = null;
    wa.length = 0;
  }
  var ko = F.ReactCurrentDispatcher, ka = F.ReactCurrentBatchConfig, Wn = 0, Ie = null, Fe = null, Ve = null, jo = !1, gs = !1, _s = 0, Fm = 0;
  function tt() {
    throw Error(i(321));
  }
  function ja(e, t) {
    if (t === null) return !1;
    for (var n = 0; n < t.length && n < e.length; n++) if (!Mt(e[n], t[n])) return !1;
    return !0;
  }
  function Ca(e, t, n, s, l, u) {
    if (Wn = u, Ie = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, ko.current = e === null || e.memoizedState === null ? Um : Vm, e = n(s, l), gs) {
      u = 0;
      do {
        if (gs = !1, _s = 0, 25 <= u) throw Error(i(301));
        u += 1, Ve = Fe = null, t.updateQueue = null, ko.current = qm, e = n(s, l);
      } while (gs);
    }
    if (ko.current = No, t = Fe !== null && Fe.next !== null, Wn = 0, Ve = Fe = Ie = null, jo = !1, t) throw Error(i(300));
    return e;
  }
  function Ea() {
    var e = _s !== 0;
    return _s = 0, e;
  }
  function qt() {
    var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return Ve === null ? Ie.memoizedState = Ve = e : Ve = Ve.next = e, Ve;
  }
  function Tt() {
    if (Fe === null) {
      var e = Ie.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = Fe.next;
    var t = Ve === null ? Ie.memoizedState : Ve.next;
    if (t !== null) Ve = t, Fe = e;
    else {
      if (e === null) throw Error(i(310));
      Fe = e, e = { memoizedState: Fe.memoizedState, baseState: Fe.baseState, baseQueue: Fe.baseQueue, queue: Fe.queue, next: null }, Ve === null ? Ie.memoizedState = Ve = e : Ve = Ve.next = e;
    }
    return Ve;
  }
  function xs(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function Na(e) {
    var t = Tt(), n = t.queue;
    if (n === null) throw Error(i(311));
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
      var k = m = null, E = null, D = u;
      do {
        var q = D.lane;
        if ((Wn & q) === q) E !== null && (E = E.next = { lane: 0, action: D.action, hasEagerState: D.hasEagerState, eagerState: D.eagerState, next: null }), s = D.hasEagerState ? D.eagerState : e(s, D.action);
        else {
          var K = {
            lane: q,
            action: D.action,
            hasEagerState: D.hasEagerState,
            eagerState: D.eagerState,
            next: null
          };
          E === null ? (k = E = K, m = s) : E = E.next = K, Ie.lanes |= q, Bn |= q;
        }
        D = D.next;
      } while (D !== null && D !== u);
      E === null ? m = s : E.next = k, Mt(s, t.memoizedState) || (dt = !0), t.memoizedState = s, t.baseState = m, t.baseQueue = E, n.lastRenderedState = s;
    }
    if (e = n.interleaved, e !== null) {
      l = e;
      do
        u = l.lane, Ie.lanes |= u, Bn |= u, l = l.next;
      while (l !== e);
    } else l === null && (n.lanes = 0);
    return [t.memoizedState, n.dispatch];
  }
  function Ta(e) {
    var t = Tt(), n = t.queue;
    if (n === null) throw Error(i(311));
    n.lastRenderedReducer = e;
    var s = n.dispatch, l = n.pending, u = t.memoizedState;
    if (l !== null) {
      n.pending = null;
      var m = l = l.next;
      do
        u = e(u, m.action), m = m.next;
      while (m !== l);
      Mt(u, t.memoizedState) || (dt = !0), t.memoizedState = u, t.baseQueue === null && (t.baseState = u), n.lastRenderedState = u;
    }
    return [u, s];
  }
  function Ac() {
  }
  function bc(e, t) {
    var n = Ie, s = Tt(), l = t(), u = !Mt(s.memoizedState, l);
    if (u && (s.memoizedState = l, dt = !0), s = s.queue, Ra(Ic.bind(null, n, s, e), [e]), s.getSnapshot !== t || u || Ve !== null && Ve.memoizedState.tag & 1) {
      if (n.flags |= 2048, ws(9, Mc.bind(null, n, s, l, t), void 0, null), qe === null) throw Error(i(349));
      (Wn & 30) !== 0 || $c(n, t, l);
    }
    return l;
  }
  function $c(e, t, n) {
    e.flags |= 16384, e = { getSnapshot: t, value: n }, t = Ie.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, Ie.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
  }
  function Mc(e, t, n, s) {
    t.value = n, t.getSnapshot = s, Lc(t) && Dc(e);
  }
  function Ic(e, t, n) {
    return n(function() {
      Lc(t) && Dc(e);
    });
  }
  function Lc(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var n = t();
      return !Mt(e, n);
    } catch {
      return !0;
    }
  }
  function Dc(e) {
    var t = nn(e, 1);
    t !== null && Ot(t, e, 1, -1);
  }
  function zc(e) {
    var t = qt();
    return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: xs, lastRenderedState: e }, t.queue = e, e = e.dispatch = Bm.bind(null, Ie, e), [t.memoizedState, e];
  }
  function ws(e, t, n, s) {
    return e = { tag: e, create: t, destroy: n, deps: s, next: null }, t = Ie.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, Ie.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (s = n.next, n.next = e, e.next = s, t.lastEffect = e)), e;
  }
  function Oc() {
    return Tt().memoizedState;
  }
  function Co(e, t, n, s) {
    var l = qt();
    Ie.flags |= e, l.memoizedState = ws(1 | t, n, void 0, s === void 0 ? null : s);
  }
  function Eo(e, t, n, s) {
    var l = Tt();
    s = s === void 0 ? null : s;
    var u = void 0;
    if (Fe !== null) {
      var m = Fe.memoizedState;
      if (u = m.destroy, s !== null && ja(s, m.deps)) {
        l.memoizedState = ws(t, n, u, s);
        return;
      }
    }
    Ie.flags |= e, l.memoizedState = ws(1 | t, n, u, s);
  }
  function Fc(e, t) {
    return Co(8390656, 8, e, t);
  }
  function Ra(e, t) {
    return Eo(2048, 8, e, t);
  }
  function Hc(e, t) {
    return Eo(4, 2, e, t);
  }
  function Wc(e, t) {
    return Eo(4, 4, e, t);
  }
  function Bc(e, t) {
    if (typeof t == "function") return e = e(), t(e), function() {
      t(null);
    };
    if (t != null) return e = e(), t.current = e, function() {
      t.current = null;
    };
  }
  function Uc(e, t, n) {
    return n = n != null ? n.concat([e]) : null, Eo(4, 4, Bc.bind(null, t, e), n);
  }
  function Pa() {
  }
  function Vc(e, t) {
    var n = Tt();
    t = t === void 0 ? null : t;
    var s = n.memoizedState;
    return s !== null && t !== null && ja(t, s[1]) ? s[0] : (n.memoizedState = [e, t], e);
  }
  function qc(e, t) {
    var n = Tt();
    t = t === void 0 ? null : t;
    var s = n.memoizedState;
    return s !== null && t !== null && ja(t, s[1]) ? s[0] : (e = e(), n.memoizedState = [e, t], e);
  }
  function Qc(e, t, n) {
    return (Wn & 21) === 0 ? (e.baseState && (e.baseState = !1, dt = !0), e.memoizedState = n) : (Mt(n, t) || (n = ku(), Ie.lanes |= n, Bn |= n, e.baseState = !0), t);
  }
  function Hm(e, t) {
    var n = Ce;
    Ce = n !== 0 && 4 > n ? n : 4, e(!0);
    var s = ka.transition;
    ka.transition = {};
    try {
      e(!1), t();
    } finally {
      Ce = n, ka.transition = s;
    }
  }
  function Kc() {
    return Tt().memoizedState;
  }
  function Wm(e, t, n) {
    var s = Cn(e);
    if (n = { lane: s, action: n, hasEagerState: !1, eagerState: null, next: null }, Yc(e)) Gc(t, n);
    else if (n = Ec(e, t, n, s), n !== null) {
      var l = at();
      Ot(n, e, s, l), Jc(n, t, s);
    }
  }
  function Bm(e, t, n) {
    var s = Cn(e), l = { lane: s, action: n, hasEagerState: !1, eagerState: null, next: null };
    if (Yc(e)) Gc(t, l);
    else {
      var u = e.alternate;
      if (e.lanes === 0 && (u === null || u.lanes === 0) && (u = t.lastRenderedReducer, u !== null)) try {
        var m = t.lastRenderedState, k = u(m, n);
        if (l.hasEagerState = !0, l.eagerState = k, Mt(k, m)) {
          var E = t.interleaved;
          E === null ? (l.next = l, ya(t)) : (l.next = E.next, E.next = l), t.interleaved = l;
          return;
        }
      } catch {
      } finally {
      }
      n = Ec(e, t, l, s), n !== null && (l = at(), Ot(n, e, s, l), Jc(n, t, s));
    }
  }
  function Yc(e) {
    var t = e.alternate;
    return e === Ie || t !== null && t === Ie;
  }
  function Gc(e, t) {
    gs = jo = !0;
    var n = e.pending;
    n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
  }
  function Jc(e, t, n) {
    if ((n & 4194240) !== 0) {
      var s = t.lanes;
      s &= e.pendingLanes, n |= s, t.lanes = n, bi(e, n);
    }
  }
  var No = { readContext: Nt, useCallback: tt, useContext: tt, useEffect: tt, useImperativeHandle: tt, useInsertionEffect: tt, useLayoutEffect: tt, useMemo: tt, useReducer: tt, useRef: tt, useState: tt, useDebugValue: tt, useDeferredValue: tt, useTransition: tt, useMutableSource: tt, useSyncExternalStore: tt, useId: tt, unstable_isNewReconciler: !1 }, Um = { readContext: Nt, useCallback: function(e, t) {
    return qt().memoizedState = [e, t === void 0 ? null : t], e;
  }, useContext: Nt, useEffect: Fc, useImperativeHandle: function(e, t, n) {
    return n = n != null ? n.concat([e]) : null, Co(
      4194308,
      4,
      Bc.bind(null, t, e),
      n
    );
  }, useLayoutEffect: function(e, t) {
    return Co(4194308, 4, e, t);
  }, useInsertionEffect: function(e, t) {
    return Co(4, 2, e, t);
  }, useMemo: function(e, t) {
    var n = qt();
    return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e;
  }, useReducer: function(e, t, n) {
    var s = qt();
    return t = n !== void 0 ? n(t) : t, s.memoizedState = s.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, s.queue = e, e = e.dispatch = Wm.bind(null, Ie, e), [s.memoizedState, e];
  }, useRef: function(e) {
    var t = qt();
    return e = { current: e }, t.memoizedState = e;
  }, useState: zc, useDebugValue: Pa, useDeferredValue: function(e) {
    return qt().memoizedState = e;
  }, useTransition: function() {
    var e = zc(!1), t = e[0];
    return e = Hm.bind(null, e[1]), qt().memoizedState = e, [t, e];
  }, useMutableSource: function() {
  }, useSyncExternalStore: function(e, t, n) {
    var s = Ie, l = qt();
    if (be) {
      if (n === void 0) throw Error(i(407));
      n = n();
    } else {
      if (n = t(), qe === null) throw Error(i(349));
      (Wn & 30) !== 0 || $c(s, t, n);
    }
    l.memoizedState = n;
    var u = { value: n, getSnapshot: t };
    return l.queue = u, Fc(Ic.bind(
      null,
      s,
      u,
      e
    ), [e]), s.flags |= 2048, ws(9, Mc.bind(null, s, u, n, t), void 0, null), n;
  }, useId: function() {
    var e = qt(), t = qe.identifierPrefix;
    if (be) {
      var n = tn, s = en;
      n = (s & ~(1 << 32 - $t(s) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = _s++, 0 < n && (t += "H" + n.toString(32)), t += ":";
    } else n = Fm++, t = ":" + t + "r" + n.toString(32) + ":";
    return e.memoizedState = t;
  }, unstable_isNewReconciler: !1 }, Vm = {
    readContext: Nt,
    useCallback: Vc,
    useContext: Nt,
    useEffect: Ra,
    useImperativeHandle: Uc,
    useInsertionEffect: Hc,
    useLayoutEffect: Wc,
    useMemo: qc,
    useReducer: Na,
    useRef: Oc,
    useState: function() {
      return Na(xs);
    },
    useDebugValue: Pa,
    useDeferredValue: function(e) {
      var t = Tt();
      return Qc(t, Fe.memoizedState, e);
    },
    useTransition: function() {
      var e = Na(xs)[0], t = Tt().memoizedState;
      return [e, t];
    },
    useMutableSource: Ac,
    useSyncExternalStore: bc,
    useId: Kc,
    unstable_isNewReconciler: !1
  }, qm = { readContext: Nt, useCallback: Vc, useContext: Nt, useEffect: Ra, useImperativeHandle: Uc, useInsertionEffect: Hc, useLayoutEffect: Wc, useMemo: qc, useReducer: Ta, useRef: Oc, useState: function() {
    return Ta(xs);
  }, useDebugValue: Pa, useDeferredValue: function(e) {
    var t = Tt();
    return Fe === null ? t.memoizedState = e : Qc(t, Fe.memoizedState, e);
  }, useTransition: function() {
    var e = Ta(xs)[0], t = Tt().memoizedState;
    return [e, t];
  }, useMutableSource: Ac, useSyncExternalStore: bc, useId: Kc, unstable_isNewReconciler: !1 };
  function Lt(e, t) {
    if (e && e.defaultProps) {
      t = Q({}, t), e = e.defaultProps;
      for (var n in e) t[n] === void 0 && (t[n] = e[n]);
      return t;
    }
    return t;
  }
  function Aa(e, t, n, s) {
    t = e.memoizedState, n = n(s, t), n = n == null ? t : Q({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
  }
  var To = { isMounted: function(e) {
    return (e = e._reactInternals) ? In(e) === e : !1;
  }, enqueueSetState: function(e, t, n) {
    e = e._reactInternals;
    var s = at(), l = Cn(e), u = rn(s, l);
    u.payload = t, n != null && (u.callback = n), t = wn(e, u, l), t !== null && (Ot(t, e, l, s), xo(t, e, l));
  }, enqueueReplaceState: function(e, t, n) {
    e = e._reactInternals;
    var s = at(), l = Cn(e), u = rn(s, l);
    u.tag = 1, u.payload = t, n != null && (u.callback = n), t = wn(e, u, l), t !== null && (Ot(t, e, l, s), xo(t, e, l));
  }, enqueueForceUpdate: function(e, t) {
    e = e._reactInternals;
    var n = at(), s = Cn(e), l = rn(n, s);
    l.tag = 2, t != null && (l.callback = t), t = wn(e, l, s), t !== null && (Ot(t, e, s, n), xo(t, e, s));
  } };
  function Xc(e, t, n, s, l, u, m) {
    return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(s, u, m) : t.prototype && t.prototype.isPureReactComponent ? !as(n, s) || !as(l, u) : !0;
  }
  function Zc(e, t, n) {
    var s = !1, l = gn, u = t.contextType;
    return typeof u == "object" && u !== null ? u = Nt(u) : (l = ct(t) ? Dn : et.current, s = t.contextTypes, u = (s = s != null) ? yr(e, l) : gn), t = new t(n, u), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = To, e.stateNode = t, t._reactInternals = e, s && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = l, e.__reactInternalMemoizedMaskedChildContext = u), t;
  }
  function ed(e, t, n, s) {
    e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, s), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, s), t.state !== e && To.enqueueReplaceState(t, t.state, null);
  }
  function ba(e, t, n, s) {
    var l = e.stateNode;
    l.props = n, l.state = e.memoizedState, l.refs = {}, ga(e);
    var u = t.contextType;
    typeof u == "object" && u !== null ? l.context = Nt(u) : (u = ct(t) ? Dn : et.current, l.context = yr(e, u)), l.state = e.memoizedState, u = t.getDerivedStateFromProps, typeof u == "function" && (Aa(e, t, u, n), l.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof l.getSnapshotBeforeUpdate == "function" || typeof l.UNSAFE_componentWillMount != "function" && typeof l.componentWillMount != "function" || (t = l.state, typeof l.componentWillMount == "function" && l.componentWillMount(), typeof l.UNSAFE_componentWillMount == "function" && l.UNSAFE_componentWillMount(), t !== l.state && To.enqueueReplaceState(l, l.state, null), wo(e, n, l, s), l.state = e.memoizedState), typeof l.componentDidMount == "function" && (e.flags |= 4194308);
  }
  function Cr(e, t) {
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
  function $a(e, t, n) {
    return { value: e, source: null, stack: n ?? null, digest: t ?? null };
  }
  function Ma(e, t) {
    try {
      console.error(t.value);
    } catch (n) {
      setTimeout(function() {
        throw n;
      });
    }
  }
  var Qm = typeof WeakMap == "function" ? WeakMap : Map;
  function td(e, t, n) {
    n = rn(-1, n), n.tag = 3, n.payload = { element: null };
    var s = t.value;
    return n.callback = function() {
      Io || (Io = !0, Ya = s), Ma(e, t);
    }, n;
  }
  function nd(e, t, n) {
    n = rn(-1, n), n.tag = 3;
    var s = e.type.getDerivedStateFromError;
    if (typeof s == "function") {
      var l = t.value;
      n.payload = function() {
        return s(l);
      }, n.callback = function() {
        Ma(e, t);
      };
    }
    var u = e.stateNode;
    return u !== null && typeof u.componentDidCatch == "function" && (n.callback = function() {
      Ma(e, t), typeof s != "function" && (kn === null ? kn = /* @__PURE__ */ new Set([this]) : kn.add(this));
      var m = t.stack;
      this.componentDidCatch(t.value, { componentStack: m !== null ? m : "" });
    }), n;
  }
  function rd(e, t, n) {
    var s = e.pingCache;
    if (s === null) {
      s = e.pingCache = new Qm();
      var l = /* @__PURE__ */ new Set();
      s.set(t, l);
    } else l = s.get(t), l === void 0 && (l = /* @__PURE__ */ new Set(), s.set(t, l));
    l.has(n) || (l.add(n), e = ah.bind(null, e, t, n), t.then(e, e));
  }
  function sd(e) {
    do {
      var t;
      if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t) return e;
      e = e.return;
    } while (e !== null);
    return null;
  }
  function od(e, t, n, s, l) {
    return (e.mode & 1) === 0 ? (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = rn(-1, 1), t.tag = 2, wn(n, t, 1))), n.lanes |= 1), e) : (e.flags |= 65536, e.lanes = l, e);
  }
  var Km = F.ReactCurrentOwner, dt = !1;
  function it(e, t, n, s) {
    t.child = e === null ? Cc(t, null, n, s) : wr(t, e.child, n, s);
  }
  function id(e, t, n, s, l) {
    n = n.render;
    var u = t.ref;
    return kr(t, l), s = Ca(e, t, n, s, u, l), n = Ea(), e !== null && !dt ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l, sn(e, t, l)) : (be && n && la(t), t.flags |= 1, it(e, t, s, l), t.child);
  }
  function ad(e, t, n, s, l) {
    if (e === null) {
      var u = n.type;
      return typeof u == "function" && !nl(u) && u.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = u, ld(e, t, u, s, l)) : (e = Ho(n.type, null, s, t, t.mode, l), e.ref = t.ref, e.return = t, t.child = e);
    }
    if (u = e.child, (e.lanes & l) === 0) {
      var m = u.memoizedProps;
      if (n = n.compare, n = n !== null ? n : as, n(m, s) && e.ref === t.ref) return sn(e, t, l);
    }
    return t.flags |= 1, e = Nn(u, s), e.ref = t.ref, e.return = t, t.child = e;
  }
  function ld(e, t, n, s, l) {
    if (e !== null) {
      var u = e.memoizedProps;
      if (as(u, s) && e.ref === t.ref) if (dt = !1, t.pendingProps = s = u, (e.lanes & l) !== 0) (e.flags & 131072) !== 0 && (dt = !0);
      else return t.lanes = e.lanes, sn(e, t, l);
    }
    return Ia(e, t, n, s, l);
  }
  function ud(e, t, n) {
    var s = t.pendingProps, l = s.children, u = e !== null ? e.memoizedState : null;
    if (s.mode === "hidden") if ((t.mode & 1) === 0) t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, Re(Nr, kt), kt |= n;
    else {
      if ((n & 1073741824) === 0) return e = u !== null ? u.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, Re(Nr, kt), kt |= e, null;
      t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, s = u !== null ? u.baseLanes : n, Re(Nr, kt), kt |= s;
    }
    else u !== null ? (s = u.baseLanes | n, t.memoizedState = null) : s = n, Re(Nr, kt), kt |= s;
    return it(e, t, l, n), t.child;
  }
  function cd(e, t) {
    var n = t.ref;
    (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
  }
  function Ia(e, t, n, s, l) {
    var u = ct(n) ? Dn : et.current;
    return u = yr(t, u), kr(t, l), n = Ca(e, t, n, s, u, l), s = Ea(), e !== null && !dt ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l, sn(e, t, l)) : (be && s && la(t), t.flags |= 1, it(e, t, n, l), t.child);
  }
  function dd(e, t, n, s, l) {
    if (ct(n)) {
      var u = !0;
      fo(t);
    } else u = !1;
    if (kr(t, l), t.stateNode === null) Po(e, t), Zc(t, n, s), ba(t, n, s, l), s = !0;
    else if (e === null) {
      var m = t.stateNode, k = t.memoizedProps;
      m.props = k;
      var E = m.context, D = n.contextType;
      typeof D == "object" && D !== null ? D = Nt(D) : (D = ct(n) ? Dn : et.current, D = yr(t, D));
      var q = n.getDerivedStateFromProps, K = typeof q == "function" || typeof m.getSnapshotBeforeUpdate == "function";
      K || typeof m.UNSAFE_componentWillReceiveProps != "function" && typeof m.componentWillReceiveProps != "function" || (k !== s || E !== D) && ed(t, m, s, D), xn = !1;
      var V = t.memoizedState;
      m.state = V, wo(t, s, m, l), E = t.memoizedState, k !== s || V !== E || ut.current || xn ? (typeof q == "function" && (Aa(t, n, q, s), E = t.memoizedState), (k = xn || Xc(t, n, k, s, V, E, D)) ? (K || typeof m.UNSAFE_componentWillMount != "function" && typeof m.componentWillMount != "function" || (typeof m.componentWillMount == "function" && m.componentWillMount(), typeof m.UNSAFE_componentWillMount == "function" && m.UNSAFE_componentWillMount()), typeof m.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof m.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = s, t.memoizedState = E), m.props = s, m.state = E, m.context = D, s = k) : (typeof m.componentDidMount == "function" && (t.flags |= 4194308), s = !1);
    } else {
      m = t.stateNode, Nc(e, t), k = t.memoizedProps, D = t.type === t.elementType ? k : Lt(t.type, k), m.props = D, K = t.pendingProps, V = m.context, E = n.contextType, typeof E == "object" && E !== null ? E = Nt(E) : (E = ct(n) ? Dn : et.current, E = yr(t, E));
      var Z = n.getDerivedStateFromProps;
      (q = typeof Z == "function" || typeof m.getSnapshotBeforeUpdate == "function") || typeof m.UNSAFE_componentWillReceiveProps != "function" && typeof m.componentWillReceiveProps != "function" || (k !== K || V !== E) && ed(t, m, s, E), xn = !1, V = t.memoizedState, m.state = V, wo(t, s, m, l);
      var te = t.memoizedState;
      k !== K || V !== te || ut.current || xn ? (typeof Z == "function" && (Aa(t, n, Z, s), te = t.memoizedState), (D = xn || Xc(t, n, D, s, V, te, E) || !1) ? (q || typeof m.UNSAFE_componentWillUpdate != "function" && typeof m.componentWillUpdate != "function" || (typeof m.componentWillUpdate == "function" && m.componentWillUpdate(s, te, E), typeof m.UNSAFE_componentWillUpdate == "function" && m.UNSAFE_componentWillUpdate(s, te, E)), typeof m.componentDidUpdate == "function" && (t.flags |= 4), typeof m.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof m.componentDidUpdate != "function" || k === e.memoizedProps && V === e.memoizedState || (t.flags |= 4), typeof m.getSnapshotBeforeUpdate != "function" || k === e.memoizedProps && V === e.memoizedState || (t.flags |= 1024), t.memoizedProps = s, t.memoizedState = te), m.props = s, m.state = te, m.context = E, s = D) : (typeof m.componentDidUpdate != "function" || k === e.memoizedProps && V === e.memoizedState || (t.flags |= 4), typeof m.getSnapshotBeforeUpdate != "function" || k === e.memoizedProps && V === e.memoizedState || (t.flags |= 1024), s = !1);
    }
    return La(e, t, n, s, u, l);
  }
  function La(e, t, n, s, l, u) {
    cd(e, t);
    var m = (t.flags & 128) !== 0;
    if (!s && !m) return l && vc(t, n, !1), sn(e, t, u);
    s = t.stateNode, Km.current = t;
    var k = m && typeof n.getDerivedStateFromError != "function" ? null : s.render();
    return t.flags |= 1, e !== null && m ? (t.child = wr(t, e.child, null, u), t.child = wr(t, null, k, u)) : it(e, t, k, u), t.memoizedState = s.state, l && vc(t, n, !0), t.child;
  }
  function fd(e) {
    var t = e.stateNode;
    t.pendingContext ? mc(e, t.pendingContext, t.pendingContext !== t.context) : t.context && mc(e, t.context, !1), _a(e, t.containerInfo);
  }
  function pd(e, t, n, s, l) {
    return xr(), fa(l), t.flags |= 256, it(e, t, n, s), t.child;
  }
  var Da = { dehydrated: null, treeContext: null, retryLane: 0 };
  function za(e) {
    return { baseLanes: e, cachePool: null, transitions: null };
  }
  function md(e, t, n) {
    var s = t.pendingProps, l = Me.current, u = !1, m = (t.flags & 128) !== 0, k;
    if ((k = m) || (k = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0), k ? (u = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (l |= 1), Re(Me, l & 1), e === null)
      return da(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? ((t.mode & 1) === 0 ? t.lanes = 1 : e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824, null) : (m = s.children, e = s.fallback, u ? (s = t.mode, u = t.child, m = { mode: "hidden", children: m }, (s & 1) === 0 && u !== null ? (u.childLanes = 0, u.pendingProps = m) : u = Wo(m, s, 0, null), e = Qn(e, s, n, null), u.return = t, e.return = t, u.sibling = e, t.child = u, t.child.memoizedState = za(n), t.memoizedState = Da, e) : Oa(t, m));
    if (l = e.memoizedState, l !== null && (k = l.dehydrated, k !== null)) return Ym(e, t, m, s, k, l, n);
    if (u) {
      u = s.fallback, m = t.mode, l = e.child, k = l.sibling;
      var E = { mode: "hidden", children: s.children };
      return (m & 1) === 0 && t.child !== l ? (s = t.child, s.childLanes = 0, s.pendingProps = E, t.deletions = null) : (s = Nn(l, E), s.subtreeFlags = l.subtreeFlags & 14680064), k !== null ? u = Nn(k, u) : (u = Qn(u, m, n, null), u.flags |= 2), u.return = t, s.return = t, s.sibling = u, t.child = s, s = u, u = t.child, m = e.child.memoizedState, m = m === null ? za(n) : { baseLanes: m.baseLanes | n, cachePool: null, transitions: m.transitions }, u.memoizedState = m, u.childLanes = e.childLanes & ~n, t.memoizedState = Da, s;
    }
    return u = e.child, e = u.sibling, s = Nn(u, { mode: "visible", children: s.children }), (t.mode & 1) === 0 && (s.lanes = n), s.return = t, s.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = s, t.memoizedState = null, s;
  }
  function Oa(e, t) {
    return t = Wo({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t;
  }
  function Ro(e, t, n, s) {
    return s !== null && fa(s), wr(t, e.child, null, n), e = Oa(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
  }
  function Ym(e, t, n, s, l, u, m) {
    if (n)
      return t.flags & 256 ? (t.flags &= -257, s = $a(Error(i(422))), Ro(e, t, m, s)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (u = s.fallback, l = t.mode, s = Wo({ mode: "visible", children: s.children }, l, 0, null), u = Qn(u, l, m, null), u.flags |= 2, s.return = t, u.return = t, s.sibling = u, t.child = s, (t.mode & 1) !== 0 && wr(t, e.child, null, m), t.child.memoizedState = za(m), t.memoizedState = Da, u);
    if ((t.mode & 1) === 0) return Ro(e, t, m, null);
    if (l.data === "$!") {
      if (s = l.nextSibling && l.nextSibling.dataset, s) var k = s.dgst;
      return s = k, u = Error(i(419)), s = $a(u, s, void 0), Ro(e, t, m, s);
    }
    if (k = (m & e.childLanes) !== 0, dt || k) {
      if (s = qe, s !== null) {
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
        l = (l & (s.suspendedLanes | m)) !== 0 ? 0 : l, l !== 0 && l !== u.retryLane && (u.retryLane = l, nn(e, l), Ot(s, e, l, -1));
      }
      return tl(), s = $a(Error(i(421))), Ro(e, t, m, s);
    }
    return l.data === "$?" ? (t.flags |= 128, t.child = e.child, t = lh.bind(null, e), l._reactRetry = t, null) : (e = u.treeContext, St = vn(l.nextSibling), wt = t, be = !0, It = null, e !== null && (Ct[Et++] = en, Ct[Et++] = tn, Ct[Et++] = zn, en = e.id, tn = e.overflow, zn = t), t = Oa(t, s.children), t.flags |= 4096, t);
  }
  function hd(e, t, n) {
    e.lanes |= t;
    var s = e.alternate;
    s !== null && (s.lanes |= t), va(e.return, t, n);
  }
  function Fa(e, t, n, s, l) {
    var u = e.memoizedState;
    u === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: s, tail: n, tailMode: l } : (u.isBackwards = t, u.rendering = null, u.renderingStartTime = 0, u.last = s, u.tail = n, u.tailMode = l);
  }
  function vd(e, t, n) {
    var s = t.pendingProps, l = s.revealOrder, u = s.tail;
    if (it(e, t, s.children, n), s = Me.current, (s & 2) !== 0) s = s & 1 | 2, t.flags |= 128;
    else {
      if (e !== null && (e.flags & 128) !== 0) e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && hd(e, n, t);
        else if (e.tag === 19) hd(e, n, t);
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
        for (n = t.child, l = null; n !== null; ) e = n.alternate, e !== null && So(e) === null && (l = n), n = n.sibling;
        n = l, n === null ? (l = t.child, t.child = null) : (l = n.sibling, n.sibling = null), Fa(t, !1, l, n, u);
        break;
      case "backwards":
        for (n = null, l = t.child, t.child = null; l !== null; ) {
          if (e = l.alternate, e !== null && So(e) === null) {
            t.child = l;
            break;
          }
          e = l.sibling, l.sibling = n, n = l, l = e;
        }
        Fa(t, !0, n, null, u);
        break;
      case "together":
        Fa(t, !1, null, null, void 0);
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
    if (e !== null && (t.dependencies = e.dependencies), Bn |= t.lanes, (n & t.childLanes) === 0) return null;
    if (e !== null && t.child !== e.child) throw Error(i(153));
    if (t.child !== null) {
      for (e = t.child, n = Nn(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; ) e = e.sibling, n = n.sibling = Nn(e, e.pendingProps), n.return = t;
      n.sibling = null;
    }
    return t.child;
  }
  function Gm(e, t, n) {
    switch (t.tag) {
      case 3:
        fd(t), xr();
        break;
      case 5:
        Pc(t);
        break;
      case 1:
        ct(t.type) && fo(t);
        break;
      case 4:
        _a(t, t.stateNode.containerInfo);
        break;
      case 10:
        var s = t.type._context, l = t.memoizedProps.value;
        Re(go, s._currentValue), s._currentValue = l;
        break;
      case 13:
        if (s = t.memoizedState, s !== null)
          return s.dehydrated !== null ? (Re(Me, Me.current & 1), t.flags |= 128, null) : (n & t.child.childLanes) !== 0 ? md(e, t, n) : (Re(Me, Me.current & 1), e = sn(e, t, n), e !== null ? e.sibling : null);
        Re(Me, Me.current & 1);
        break;
      case 19:
        if (s = (n & t.childLanes) !== 0, (e.flags & 128) !== 0) {
          if (s) return vd(e, t, n);
          t.flags |= 128;
        }
        if (l = t.memoizedState, l !== null && (l.rendering = null, l.tail = null, l.lastEffect = null), Re(Me, Me.current), s) break;
        return null;
      case 22:
      case 23:
        return t.lanes = 0, ud(e, t, n);
    }
    return sn(e, t, n);
  }
  var yd, Ha, gd, _d;
  yd = function(e, t) {
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
  }, Ha = function() {
  }, gd = function(e, t, n, s) {
    var l = e.memoizedProps;
    if (l !== s) {
      e = t.stateNode, Hn(Vt.current);
      var u = null;
      switch (n) {
        case "input":
          l = vi(e, l), s = vi(e, s), u = [];
          break;
        case "select":
          l = Q({}, l, { value: void 0 }), s = Q({}, s, { value: void 0 }), u = [];
          break;
        case "textarea":
          l = _i(e, l), s = _i(e, s), u = [];
          break;
        default:
          typeof l.onClick != "function" && typeof s.onClick == "function" && (e.onclick = lo);
      }
      wi(n, s);
      var m;
      n = null;
      for (D in l) if (!s.hasOwnProperty(D) && l.hasOwnProperty(D) && l[D] != null) if (D === "style") {
        var k = l[D];
        for (m in k) k.hasOwnProperty(m) && (n || (n = {}), n[m] = "");
      } else D !== "dangerouslySetInnerHTML" && D !== "children" && D !== "suppressContentEditableWarning" && D !== "suppressHydrationWarning" && D !== "autoFocus" && (d.hasOwnProperty(D) ? u || (u = []) : (u = u || []).push(D, null));
      for (D in s) {
        var E = s[D];
        if (k = l != null ? l[D] : void 0, s.hasOwnProperty(D) && E !== k && (E != null || k != null)) if (D === "style") if (k) {
          for (m in k) !k.hasOwnProperty(m) || E && E.hasOwnProperty(m) || (n || (n = {}), n[m] = "");
          for (m in E) E.hasOwnProperty(m) && k[m] !== E[m] && (n || (n = {}), n[m] = E[m]);
        } else n || (u || (u = []), u.push(
          D,
          n
        )), n = E;
        else D === "dangerouslySetInnerHTML" ? (E = E ? E.__html : void 0, k = k ? k.__html : void 0, E != null && k !== E && (u = u || []).push(D, E)) : D === "children" ? typeof E != "string" && typeof E != "number" || (u = u || []).push(D, "" + E) : D !== "suppressContentEditableWarning" && D !== "suppressHydrationWarning" && (d.hasOwnProperty(D) ? (E != null && D === "onScroll" && Pe("scroll", e), u || k === E || (u = [])) : (u = u || []).push(D, E));
      }
      n && (u = u || []).push("style", n);
      var D = u;
      (t.updateQueue = D) && (t.flags |= 4);
    }
  }, _d = function(e, t, n, s) {
    n !== s && (t.flags |= 4);
  };
  function Ss(e, t) {
    if (!be) switch (e.tailMode) {
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
  function Jm(e, t, n) {
    var s = t.pendingProps;
    switch (ua(t), t.tag) {
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
        return ct(t.type) && co(), nt(t), null;
      case 3:
        return s = t.stateNode, jr(), Ae(ut), Ae(et), Sa(), s.pendingContext && (s.context = s.pendingContext, s.pendingContext = null), (e === null || e.child === null) && (vo(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024, It !== null && (Xa(It), It = null))), Ha(e, t), nt(t), null;
      case 5:
        xa(t);
        var l = Hn(ys.current);
        if (n = t.type, e !== null && t.stateNode != null) gd(e, t, n, s, l), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
        else {
          if (!s) {
            if (t.stateNode === null) throw Error(i(166));
            return nt(t), null;
          }
          if (e = Hn(Vt.current), vo(t)) {
            s = t.stateNode, n = t.type;
            var u = t.memoizedProps;
            switch (s[Ut] = t, s[fs] = u, e = (t.mode & 1) !== 0, n) {
              case "dialog":
                Pe("cancel", s), Pe("close", s);
                break;
              case "iframe":
              case "object":
              case "embed":
                Pe("load", s);
                break;
              case "video":
              case "audio":
                for (l = 0; l < us.length; l++) Pe(us[l], s);
                break;
              case "source":
                Pe("error", s);
                break;
              case "img":
              case "image":
              case "link":
                Pe(
                  "error",
                  s
                ), Pe("load", s);
                break;
              case "details":
                Pe("toggle", s);
                break;
              case "input":
                Zl(s, u), Pe("invalid", s);
                break;
              case "select":
                s._wrapperState = { wasMultiple: !!u.multiple }, Pe("invalid", s);
                break;
              case "textarea":
                nu(s, u), Pe("invalid", s);
            }
            wi(n, u), l = null;
            for (var m in u) if (u.hasOwnProperty(m)) {
              var k = u[m];
              m === "children" ? typeof k == "string" ? s.textContent !== k && (u.suppressHydrationWarning !== !0 && ao(s.textContent, k, e), l = ["children", k]) : typeof k == "number" && s.textContent !== "" + k && (u.suppressHydrationWarning !== !0 && ao(
                s.textContent,
                k,
                e
              ), l = ["children", "" + k]) : d.hasOwnProperty(m) && k != null && m === "onScroll" && Pe("scroll", s);
            }
            switch (n) {
              case "input":
                $n(s), tu(s, u, !0);
                break;
              case "textarea":
                $n(s), su(s);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof u.onClick == "function" && (s.onclick = lo);
            }
            s = l, t.updateQueue = s, s !== null && (t.flags |= 4);
          } else {
            m = l.nodeType === 9 ? l : l.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = ou(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = m.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof s.is == "string" ? e = m.createElement(n, { is: s.is }) : (e = m.createElement(n), n === "select" && (m = e, s.multiple ? m.multiple = !0 : s.size && (m.size = s.size))) : e = m.createElementNS(e, n), e[Ut] = t, e[fs] = s, yd(e, t, !1, !1), t.stateNode = e;
            e: {
              switch (m = Si(n, s), n) {
                case "dialog":
                  Pe("cancel", e), Pe("close", e), l = s;
                  break;
                case "iframe":
                case "object":
                case "embed":
                  Pe("load", e), l = s;
                  break;
                case "video":
                case "audio":
                  for (l = 0; l < us.length; l++) Pe(us[l], e);
                  l = s;
                  break;
                case "source":
                  Pe("error", e), l = s;
                  break;
                case "img":
                case "image":
                case "link":
                  Pe(
                    "error",
                    e
                  ), Pe("load", e), l = s;
                  break;
                case "details":
                  Pe("toggle", e), l = s;
                  break;
                case "input":
                  Zl(e, s), l = vi(e, s), Pe("invalid", e);
                  break;
                case "option":
                  l = s;
                  break;
                case "select":
                  e._wrapperState = { wasMultiple: !!s.multiple }, l = Q({}, s, { value: void 0 }), Pe("invalid", e);
                  break;
                case "textarea":
                  nu(e, s), l = _i(e, s), Pe("invalid", e);
                  break;
                default:
                  l = s;
              }
              wi(n, l), k = l;
              for (u in k) if (k.hasOwnProperty(u)) {
                var E = k[u];
                u === "style" ? lu(e, E) : u === "dangerouslySetInnerHTML" ? (E = E ? E.__html : void 0, E != null && iu(e, E)) : u === "children" ? typeof E == "string" ? (n !== "textarea" || E !== "") && Ur(e, E) : typeof E == "number" && Ur(e, "" + E) : u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && u !== "autoFocus" && (d.hasOwnProperty(u) ? E != null && u === "onScroll" && Pe("scroll", e) : E != null && b(e, u, E, m));
              }
              switch (n) {
                case "input":
                  $n(e), tu(e, s, !1);
                  break;
                case "textarea":
                  $n(e), su(e);
                  break;
                case "option":
                  s.value != null && e.setAttribute("value", "" + xe(s.value));
                  break;
                case "select":
                  e.multiple = !!s.multiple, u = s.value, u != null ? or(e, !!s.multiple, u, !1) : s.defaultValue != null && or(
                    e,
                    !!s.multiple,
                    s.defaultValue,
                    !0
                  );
                  break;
                default:
                  typeof l.onClick == "function" && (e.onclick = lo);
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
        if (e && t.stateNode != null) _d(e, t, e.memoizedProps, s);
        else {
          if (typeof s != "string" && t.stateNode === null) throw Error(i(166));
          if (n = Hn(ys.current), Hn(Vt.current), vo(t)) {
            if (s = t.stateNode, n = t.memoizedProps, s[Ut] = t, (u = s.nodeValue !== n) && (e = wt, e !== null)) switch (e.tag) {
              case 3:
                ao(s.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 && ao(s.nodeValue, n, (e.mode & 1) !== 0);
            }
            u && (t.flags |= 4);
          } else s = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(s), s[Ut] = t, t.stateNode = s;
        }
        return nt(t), null;
      case 13:
        if (Ae(Me), s = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
          if (be && St !== null && (t.mode & 1) !== 0 && (t.flags & 128) === 0) Sc(), xr(), t.flags |= 98560, u = !1;
          else if (u = vo(t), s !== null && s.dehydrated !== null) {
            if (e === null) {
              if (!u) throw Error(i(318));
              if (u = t.memoizedState, u = u !== null ? u.dehydrated : null, !u) throw Error(i(317));
              u[Ut] = t;
            } else xr(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            nt(t), u = !1;
          } else It !== null && (Xa(It), It = null), u = !0;
          if (!u) return t.flags & 65536 ? t : null;
        }
        return (t.flags & 128) !== 0 ? (t.lanes = n, t) : (s = s !== null, s !== (e !== null && e.memoizedState !== null) && s && (t.child.flags |= 8192, (t.mode & 1) !== 0 && (e === null || (Me.current & 1) !== 0 ? He === 0 && (He = 3) : tl())), t.updateQueue !== null && (t.flags |= 4), nt(t), null);
      case 4:
        return jr(), Ha(e, t), e === null && cs(t.stateNode.containerInfo), nt(t), null;
      case 10:
        return ha(t.type._context), nt(t), null;
      case 17:
        return ct(t.type) && co(), nt(t), null;
      case 19:
        if (Ae(Me), u = t.memoizedState, u === null) return nt(t), null;
        if (s = (t.flags & 128) !== 0, m = u.rendering, m === null) if (s) Ss(u, !1);
        else {
          if (He !== 0 || e !== null && (e.flags & 128) !== 0) for (e = t.child; e !== null; ) {
            if (m = So(e), m !== null) {
              for (t.flags |= 128, Ss(u, !1), s = m.updateQueue, s !== null && (t.updateQueue = s, t.flags |= 4), t.subtreeFlags = 0, s = n, n = t.child; n !== null; ) u = n, e = s, u.flags &= 14680066, m = u.alternate, m === null ? (u.childLanes = 0, u.lanes = e, u.child = null, u.subtreeFlags = 0, u.memoizedProps = null, u.memoizedState = null, u.updateQueue = null, u.dependencies = null, u.stateNode = null) : (u.childLanes = m.childLanes, u.lanes = m.lanes, u.child = m.child, u.subtreeFlags = 0, u.deletions = null, u.memoizedProps = m.memoizedProps, u.memoizedState = m.memoizedState, u.updateQueue = m.updateQueue, u.type = m.type, e = m.dependencies, u.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), n = n.sibling;
              return Re(Me, Me.current & 1 | 2), t.child;
            }
            e = e.sibling;
          }
          u.tail !== null && De() > Tr && (t.flags |= 128, s = !0, Ss(u, !1), t.lanes = 4194304);
        }
        else {
          if (!s) if (e = So(m), e !== null) {
            if (t.flags |= 128, s = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), Ss(u, !0), u.tail === null && u.tailMode === "hidden" && !m.alternate && !be) return nt(t), null;
          } else 2 * De() - u.renderingStartTime > Tr && n !== 1073741824 && (t.flags |= 128, s = !0, Ss(u, !1), t.lanes = 4194304);
          u.isBackwards ? (m.sibling = t.child, t.child = m) : (n = u.last, n !== null ? n.sibling = m : t.child = m, u.last = m);
        }
        return u.tail !== null ? (t = u.tail, u.rendering = t, u.tail = t.sibling, u.renderingStartTime = De(), t.sibling = null, n = Me.current, Re(Me, s ? n & 1 | 2 : n & 1), t) : (nt(t), null);
      case 22:
      case 23:
        return el(), s = t.memoizedState !== null, e !== null && e.memoizedState !== null !== s && (t.flags |= 8192), s && (t.mode & 1) !== 0 ? (kt & 1073741824) !== 0 && (nt(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : nt(t), null;
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(i(156, t.tag));
  }
  function Xm(e, t) {
    switch (ua(t), t.tag) {
      case 1:
        return ct(t.type) && co(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 3:
        return jr(), Ae(ut), Ae(et), Sa(), e = t.flags, (e & 65536) !== 0 && (e & 128) === 0 ? (t.flags = e & -65537 | 128, t) : null;
      case 5:
        return xa(t), null;
      case 13:
        if (Ae(Me), e = t.memoizedState, e !== null && e.dehydrated !== null) {
          if (t.alternate === null) throw Error(i(340));
          xr();
        }
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 19:
        return Ae(Me), null;
      case 4:
        return jr(), null;
      case 10:
        return ha(t.type._context), null;
      case 22:
      case 23:
        return el(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var Ao = !1, rt = !1, Zm = typeof WeakSet == "function" ? WeakSet : Set, ee = null;
  function Er(e, t) {
    var n = e.ref;
    if (n !== null) if (typeof n == "function") try {
      n(null);
    } catch (s) {
      Le(e, t, s);
    }
    else n.current = null;
  }
  function Wa(e, t, n) {
    try {
      n();
    } catch (s) {
      Le(e, t, s);
    }
  }
  var xd = !1;
  function eh(e, t) {
    if (ea = Gs, e = Xu(), qi(e)) {
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
          var m = 0, k = -1, E = -1, D = 0, q = 0, K = e, V = null;
          t: for (; ; ) {
            for (var Z; K !== n || l !== 0 && K.nodeType !== 3 || (k = m + l), K !== u || s !== 0 && K.nodeType !== 3 || (E = m + s), K.nodeType === 3 && (m += K.nodeValue.length), (Z = K.firstChild) !== null; )
              V = K, K = Z;
            for (; ; ) {
              if (K === e) break t;
              if (V === n && ++D === l && (k = m), V === u && ++q === s && (E = m), (Z = K.nextSibling) !== null) break;
              K = V, V = K.parentNode;
            }
            K = Z;
          }
          n = k === -1 || E === -1 ? null : { start: k, end: E };
        } else n = null;
      }
      n = n || { start: 0, end: 0 };
    } else n = null;
    for (ta = { focusedElem: e, selectionRange: n }, Gs = !1, ee = t; ee !== null; ) if (t = ee, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, ee = e;
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
              var ne = te.memoizedProps, ze = te.memoizedState, $ = t.stateNode, P = $.getSnapshotBeforeUpdate(t.elementType === t.type ? ne : Lt(t.type, ne), ze);
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
            throw Error(i(163));
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
    return te = xd, xd = !1, te;
  }
  function ks(e, t, n) {
    var s = t.updateQueue;
    if (s = s !== null ? s.lastEffect : null, s !== null) {
      var l = s = s.next;
      do {
        if ((l.tag & e) === e) {
          var u = l.destroy;
          l.destroy = void 0, u !== void 0 && Wa(t, n, u);
        }
        l = l.next;
      } while (l !== s);
    }
  }
  function bo(e, t) {
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
  function Ba(e) {
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
  function wd(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null, wd(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[Ut], delete t[fs], delete t[oa], delete t[Lm], delete t[Dm])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
  }
  function Sd(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4;
  }
  function kd(e) {
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
  function Ua(e, t, n) {
    var s = e.tag;
    if (s === 5 || s === 6) e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = lo));
    else if (s !== 4 && (e = e.child, e !== null)) for (Ua(e, t, n), e = e.sibling; e !== null; ) Ua(e, t, n), e = e.sibling;
  }
  function Va(e, t, n) {
    var s = e.tag;
    if (s === 5 || s === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (s !== 4 && (e = e.child, e !== null)) for (Va(e, t, n), e = e.sibling; e !== null; ) Va(e, t, n), e = e.sibling;
  }
  var Ge = null, Dt = !1;
  function Sn(e, t, n) {
    for (n = n.child; n !== null; ) jd(e, t, n), n = n.sibling;
  }
  function jd(e, t, n) {
    if (Bt && typeof Bt.onCommitFiberUnmount == "function") try {
      Bt.onCommitFiberUnmount(Us, n);
    } catch {
    }
    switch (n.tag) {
      case 5:
        rt || Er(n, t);
      case 6:
        var s = Ge, l = Dt;
        Ge = null, Sn(e, t, n), Ge = s, Dt = l, Ge !== null && (Dt ? (e = Ge, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : Ge.removeChild(n.stateNode));
        break;
      case 18:
        Ge !== null && (Dt ? (e = Ge, n = n.stateNode, e.nodeType === 8 ? sa(e.parentNode, n) : e.nodeType === 1 && sa(e, n), ts(e)) : sa(Ge, n.stateNode));
        break;
      case 4:
        s = Ge, l = Dt, Ge = n.stateNode.containerInfo, Dt = !0, Sn(e, t, n), Ge = s, Dt = l;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (!rt && (s = n.updateQueue, s !== null && (s = s.lastEffect, s !== null))) {
          l = s = s.next;
          do {
            var u = l, m = u.destroy;
            u = u.tag, m !== void 0 && ((u & 2) !== 0 || (u & 4) !== 0) && Wa(n, t, m), l = l.next;
          } while (l !== s);
        }
        Sn(e, t, n);
        break;
      case 1:
        if (!rt && (Er(n, t), s = n.stateNode, typeof s.componentWillUnmount == "function")) try {
          s.props = n.memoizedProps, s.state = n.memoizedState, s.componentWillUnmount();
        } catch (k) {
          Le(n, t, k);
        }
        Sn(e, t, n);
        break;
      case 21:
        Sn(e, t, n);
        break;
      case 22:
        n.mode & 1 ? (rt = (s = rt) || n.memoizedState !== null, Sn(e, t, n), rt = s) : Sn(e, t, n);
        break;
      default:
        Sn(e, t, n);
    }
  }
  function Cd(e) {
    var t = e.updateQueue;
    if (t !== null) {
      e.updateQueue = null;
      var n = e.stateNode;
      n === null && (n = e.stateNode = new Zm()), t.forEach(function(s) {
        var l = uh.bind(null, e, s);
        n.has(s) || (n.add(s), s.then(l, l));
      });
    }
  }
  function zt(e, t) {
    var n = t.deletions;
    if (n !== null) for (var s = 0; s < n.length; s++) {
      var l = n[s];
      try {
        var u = e, m = t, k = m;
        e: for (; k !== null; ) {
          switch (k.tag) {
            case 5:
              Ge = k.stateNode, Dt = !1;
              break e;
            case 3:
              Ge = k.stateNode.containerInfo, Dt = !0;
              break e;
            case 4:
              Ge = k.stateNode.containerInfo, Dt = !0;
              break e;
          }
          k = k.return;
        }
        if (Ge === null) throw Error(i(160));
        jd(u, m, l), Ge = null, Dt = !1;
        var E = l.alternate;
        E !== null && (E.return = null), l.return = null;
      } catch (D) {
        Le(l, t, D);
      }
    }
    if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) Ed(t, e), t = t.sibling;
  }
  function Ed(e, t) {
    var n = e.alternate, s = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if (zt(t, e), Qt(e), s & 4) {
          try {
            ks(3, e, e.return), bo(3, e);
          } catch (ne) {
            Le(e, e.return, ne);
          }
          try {
            ks(5, e, e.return);
          } catch (ne) {
            Le(e, e.return, ne);
          }
        }
        break;
      case 1:
        zt(t, e), Qt(e), s & 512 && n !== null && Er(n, n.return);
        break;
      case 5:
        if (zt(t, e), Qt(e), s & 512 && n !== null && Er(n, n.return), e.flags & 32) {
          var l = e.stateNode;
          try {
            Ur(l, "");
          } catch (ne) {
            Le(e, e.return, ne);
          }
        }
        if (s & 4 && (l = e.stateNode, l != null)) {
          var u = e.memoizedProps, m = n !== null ? n.memoizedProps : u, k = e.type, E = e.updateQueue;
          if (e.updateQueue = null, E !== null) try {
            k === "input" && u.type === "radio" && u.name != null && eu(l, u), Si(k, m);
            var D = Si(k, u);
            for (m = 0; m < E.length; m += 2) {
              var q = E[m], K = E[m + 1];
              q === "style" ? lu(l, K) : q === "dangerouslySetInnerHTML" ? iu(l, K) : q === "children" ? Ur(l, K) : b(l, q, K, D);
            }
            switch (k) {
              case "input":
                yi(l, u);
                break;
              case "textarea":
                ru(l, u);
                break;
              case "select":
                var V = l._wrapperState.wasMultiple;
                l._wrapperState.wasMultiple = !!u.multiple;
                var Z = u.value;
                Z != null ? or(l, !!u.multiple, Z, !1) : V !== !!u.multiple && (u.defaultValue != null ? or(
                  l,
                  !!u.multiple,
                  u.defaultValue,
                  !0
                ) : or(l, !!u.multiple, u.multiple ? [] : "", !1));
            }
            l[fs] = u;
          } catch (ne) {
            Le(e, e.return, ne);
          }
        }
        break;
      case 6:
        if (zt(t, e), Qt(e), s & 4) {
          if (e.stateNode === null) throw Error(i(162));
          l = e.stateNode, u = e.memoizedProps;
          try {
            l.nodeValue = u;
          } catch (ne) {
            Le(e, e.return, ne);
          }
        }
        break;
      case 3:
        if (zt(t, e), Qt(e), s & 4 && n !== null && n.memoizedState.isDehydrated) try {
          ts(t.containerInfo);
        } catch (ne) {
          Le(e, e.return, ne);
        }
        break;
      case 4:
        zt(t, e), Qt(e);
        break;
      case 13:
        zt(t, e), Qt(e), l = e.child, l.flags & 8192 && (u = l.memoizedState !== null, l.stateNode.isHidden = u, !u || l.alternate !== null && l.alternate.memoizedState !== null || (Ka = De())), s & 4 && Cd(e);
        break;
      case 22:
        if (q = n !== null && n.memoizedState !== null, e.mode & 1 ? (rt = (D = rt) || q, zt(t, e), rt = D) : zt(t, e), Qt(e), s & 8192) {
          if (D = e.memoizedState !== null, (e.stateNode.isHidden = D) && !q && (e.mode & 1) !== 0) for (ee = e, q = e.child; q !== null; ) {
            for (K = ee = q; ee !== null; ) {
              switch (V = ee, Z = V.child, V.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                  ks(4, V, V.return);
                  break;
                case 1:
                  Er(V, V.return);
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
                  Er(V, V.return);
                  break;
                case 22:
                  if (V.memoizedState !== null) {
                    Rd(K);
                    continue;
                  }
              }
              Z !== null ? (Z.return = V, ee = Z) : Rd(K);
            }
            q = q.sibling;
          }
          e: for (q = null, K = e; ; ) {
            if (K.tag === 5) {
              if (q === null) {
                q = K;
                try {
                  l = K.stateNode, D ? (u = l.style, typeof u.setProperty == "function" ? u.setProperty("display", "none", "important") : u.display = "none") : (k = K.stateNode, E = K.memoizedProps.style, m = E != null && E.hasOwnProperty("display") ? E.display : null, k.style.display = au("display", m));
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
        zt(t, e), Qt(e), s & 4 && Cd(e);
        break;
      case 21:
        break;
      default:
        zt(
          t,
          e
        ), Qt(e);
    }
  }
  function Qt(e) {
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
          throw Error(i(160));
        }
        switch (s.tag) {
          case 5:
            var l = s.stateNode;
            s.flags & 32 && (Ur(l, ""), s.flags &= -33);
            var u = kd(e);
            Va(e, u, l);
            break;
          case 3:
          case 4:
            var m = s.stateNode.containerInfo, k = kd(e);
            Ua(e, k, m);
            break;
          default:
            throw Error(i(161));
        }
      } catch (E) {
        Le(e, e.return, E);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function th(e, t, n) {
    ee = e, Nd(e);
  }
  function Nd(e, t, n) {
    for (var s = (e.mode & 1) !== 0; ee !== null; ) {
      var l = ee, u = l.child;
      if (l.tag === 22 && s) {
        var m = l.memoizedState !== null || Ao;
        if (!m) {
          var k = l.alternate, E = k !== null && k.memoizedState !== null || rt;
          k = Ao;
          var D = rt;
          if (Ao = m, (rt = E) && !D) for (ee = l; ee !== null; ) m = ee, E = m.child, m.tag === 22 && m.memoizedState !== null ? Pd(l) : E !== null ? (E.return = m, ee = E) : Pd(l);
          for (; u !== null; ) ee = u, Nd(u), u = u.sibling;
          ee = l, Ao = k, rt = D;
        }
        Td(e);
      } else (l.subtreeFlags & 8772) !== 0 && u !== null ? (u.return = l, ee = u) : Td(e);
    }
  }
  function Td(e) {
    for (; ee !== null; ) {
      var t = ee;
      if ((t.flags & 8772) !== 0) {
        var n = t.alternate;
        try {
          if ((t.flags & 8772) !== 0) switch (t.tag) {
            case 0:
            case 11:
            case 15:
              rt || bo(5, t);
              break;
            case 1:
              var s = t.stateNode;
              if (t.flags & 4 && !rt) if (n === null) s.componentDidMount();
              else {
                var l = t.elementType === t.type ? n.memoizedProps : Lt(t.type, n.memoizedProps);
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
              var k = t.stateNode;
              if (n === null && t.flags & 4) {
                n = k;
                var E = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    E.autoFocus && n.focus();
                    break;
                  case "img":
                    E.src && (n.src = E.src);
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
                    K !== null && ts(K);
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
          rt || t.flags & 512 && Ba(t);
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
  function Rd(e) {
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
  function Pd(e) {
    for (; ee !== null; ) {
      var t = ee;
      try {
        switch (t.tag) {
          case 0:
          case 11:
          case 15:
            var n = t.return;
            try {
              bo(4, t);
            } catch (E) {
              Le(t, n, E);
            }
            break;
          case 1:
            var s = t.stateNode;
            if (typeof s.componentDidMount == "function") {
              var l = t.return;
              try {
                s.componentDidMount();
              } catch (E) {
                Le(t, l, E);
              }
            }
            var u = t.return;
            try {
              Ba(t);
            } catch (E) {
              Le(t, u, E);
            }
            break;
          case 5:
            var m = t.return;
            try {
              Ba(t);
            } catch (E) {
              Le(t, m, E);
            }
        }
      } catch (E) {
        Le(t, t.return, E);
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
  var nh = Math.ceil, $o = F.ReactCurrentDispatcher, qa = F.ReactCurrentOwner, Rt = F.ReactCurrentBatchConfig, _e = 0, qe = null, Oe = null, Je = 0, kt = 0, Nr = yn(0), He = 0, js = null, Bn = 0, Mo = 0, Qa = 0, Cs = null, ft = null, Ka = 0, Tr = 1 / 0, on = null, Io = !1, Ya = null, kn = null, Lo = !1, jn = null, Do = 0, Es = 0, Ga = null, zo = -1, Oo = 0;
  function at() {
    return (_e & 6) !== 0 ? De() : zo !== -1 ? zo : zo = De();
  }
  function Cn(e) {
    return (e.mode & 1) === 0 ? 1 : (_e & 2) !== 0 && Je !== 0 ? Je & -Je : Om.transition !== null ? (Oo === 0 && (Oo = ku()), Oo) : (e = Ce, e !== 0 || (e = window.event, e = e === void 0 ? 16 : bu(e.type)), e);
  }
  function Ot(e, t, n, s) {
    if (50 < Es) throw Es = 0, Ga = null, Error(i(185));
    Gr(e, n, s), ((_e & 2) === 0 || e !== qe) && (e === qe && ((_e & 2) === 0 && (Mo |= n), He === 4 && En(e, Je)), pt(e, s), n === 1 && _e === 0 && (t.mode & 1) === 0 && (Tr = De() + 500, po && _n()));
  }
  function pt(e, t) {
    var n = e.callbackNode;
    Op(e, t);
    var s = Qs(e, e === qe ? Je : 0);
    if (s === 0) n !== null && xu(n), e.callbackNode = null, e.callbackPriority = 0;
    else if (t = s & -s, e.callbackPriority !== t) {
      if (n != null && xu(n), t === 1) e.tag === 0 ? zm(bd.bind(null, e)) : yc(bd.bind(null, e)), Mm(function() {
        (_e & 6) === 0 && _n();
      }), n = null;
      else {
        switch (ju(s)) {
          case 1:
            n = Ri;
            break;
          case 4:
            n = wu;
            break;
          case 16:
            n = Bs;
            break;
          case 536870912:
            n = Su;
            break;
          default:
            n = Bs;
        }
        n = Fd(n, Ad.bind(null, e));
      }
      e.callbackPriority = t, e.callbackNode = n;
    }
  }
  function Ad(e, t) {
    if (zo = -1, Oo = 0, (_e & 6) !== 0) throw Error(i(327));
    var n = e.callbackNode;
    if (Rr() && e.callbackNode !== n) return null;
    var s = Qs(e, e === qe ? Je : 0);
    if (s === 0) return null;
    if ((s & 30) !== 0 || (s & e.expiredLanes) !== 0 || t) t = Fo(e, s);
    else {
      t = s;
      var l = _e;
      _e |= 2;
      var u = Md();
      (qe !== e || Je !== t) && (on = null, Tr = De() + 500, Vn(e, t));
      do
        try {
          oh();
          break;
        } catch (k) {
          $d(e, k);
        }
      while (!0);
      ma(), $o.current = u, _e = l, Oe !== null ? t = 0 : (qe = null, Je = 0, t = He);
    }
    if (t !== 0) {
      if (t === 2 && (l = Pi(e), l !== 0 && (s = l, t = Ja(e, l))), t === 1) throw n = js, Vn(e, 0), En(e, s), pt(e, De()), n;
      if (t === 6) En(e, s);
      else {
        if (l = e.current.alternate, (s & 30) === 0 && !rh(l) && (t = Fo(e, s), t === 2 && (u = Pi(e), u !== 0 && (s = u, t = Ja(e, u))), t === 1)) throw n = js, Vn(e, 0), En(e, s), pt(e, De()), n;
        switch (e.finishedWork = l, e.finishedLanes = s, t) {
          case 0:
          case 1:
            throw Error(i(345));
          case 2:
            qn(e, ft, on);
            break;
          case 3:
            if (En(e, s), (s & 130023424) === s && (t = Ka + 500 - De(), 10 < t)) {
              if (Qs(e, 0) !== 0) break;
              if (l = e.suspendedLanes, (l & s) !== s) {
                at(), e.pingedLanes |= e.suspendedLanes & l;
                break;
              }
              e.timeoutHandle = ra(qn.bind(null, e, ft, on), t);
              break;
            }
            qn(e, ft, on);
            break;
          case 4:
            if (En(e, s), (s & 4194240) === s) break;
            for (t = e.eventTimes, l = -1; 0 < s; ) {
              var m = 31 - $t(s);
              u = 1 << m, m = t[m], m > l && (l = m), s &= ~u;
            }
            if (s = l, s = De() - s, s = (120 > s ? 120 : 480 > s ? 480 : 1080 > s ? 1080 : 1920 > s ? 1920 : 3e3 > s ? 3e3 : 4320 > s ? 4320 : 1960 * nh(s / 1960)) - s, 10 < s) {
              e.timeoutHandle = ra(qn.bind(null, e, ft, on), s);
              break;
            }
            qn(e, ft, on);
            break;
          case 5:
            qn(e, ft, on);
            break;
          default:
            throw Error(i(329));
        }
      }
    }
    return pt(e, De()), e.callbackNode === n ? Ad.bind(null, e) : null;
  }
  function Ja(e, t) {
    var n = Cs;
    return e.current.memoizedState.isDehydrated && (Vn(e, t).flags |= 256), e = Fo(e, t), e !== 2 && (t = ft, ft = n, t !== null && Xa(t)), e;
  }
  function Xa(e) {
    ft === null ? ft = e : ft.push.apply(ft, e);
  }
  function rh(e) {
    for (var t = e; ; ) {
      if (t.flags & 16384) {
        var n = t.updateQueue;
        if (n !== null && (n = n.stores, n !== null)) for (var s = 0; s < n.length; s++) {
          var l = n[s], u = l.getSnapshot;
          l = l.value;
          try {
            if (!Mt(u(), l)) return !1;
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
  function En(e, t) {
    for (t &= ~Qa, t &= ~Mo, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
      var n = 31 - $t(t), s = 1 << n;
      e[n] = -1, t &= ~s;
    }
  }
  function bd(e) {
    if ((_e & 6) !== 0) throw Error(i(327));
    Rr();
    var t = Qs(e, 0);
    if ((t & 1) === 0) return pt(e, De()), null;
    var n = Fo(e, t);
    if (e.tag !== 0 && n === 2) {
      var s = Pi(e);
      s !== 0 && (t = s, n = Ja(e, s));
    }
    if (n === 1) throw n = js, Vn(e, 0), En(e, t), pt(e, De()), n;
    if (n === 6) throw Error(i(345));
    return e.finishedWork = e.current.alternate, e.finishedLanes = t, qn(e, ft, on), pt(e, De()), null;
  }
  function Za(e, t) {
    var n = _e;
    _e |= 1;
    try {
      return e(t);
    } finally {
      _e = n, _e === 0 && (Tr = De() + 500, po && _n());
    }
  }
  function Un(e) {
    jn !== null && jn.tag === 0 && (_e & 6) === 0 && Rr();
    var t = _e;
    _e |= 1;
    var n = Rt.transition, s = Ce;
    try {
      if (Rt.transition = null, Ce = 1, e) return e();
    } finally {
      Ce = s, Rt.transition = n, _e = t, (_e & 6) === 0 && _n();
    }
  }
  function el() {
    kt = Nr.current, Ae(Nr);
  }
  function Vn(e, t) {
    e.finishedWork = null, e.finishedLanes = 0;
    var n = e.timeoutHandle;
    if (n !== -1 && (e.timeoutHandle = -1, $m(n)), Oe !== null) for (n = Oe.return; n !== null; ) {
      var s = n;
      switch (ua(s), s.tag) {
        case 1:
          s = s.type.childContextTypes, s != null && co();
          break;
        case 3:
          jr(), Ae(ut), Ae(et), Sa();
          break;
        case 5:
          xa(s);
          break;
        case 4:
          jr();
          break;
        case 13:
          Ae(Me);
          break;
        case 19:
          Ae(Me);
          break;
        case 10:
          ha(s.type._context);
          break;
        case 22:
        case 23:
          el();
      }
      n = n.return;
    }
    if (qe = e, Oe = e = Nn(e.current, null), Je = kt = t, He = 0, js = null, Qa = Mo = Bn = 0, ft = Cs = null, Fn !== null) {
      for (t = 0; t < Fn.length; t++) if (n = Fn[t], s = n.interleaved, s !== null) {
        n.interleaved = null;
        var l = s.next, u = n.pending;
        if (u !== null) {
          var m = u.next;
          u.next = l, s.next = m;
        }
        n.pending = s;
      }
      Fn = null;
    }
    return e;
  }
  function $d(e, t) {
    do {
      var n = Oe;
      try {
        if (ma(), ko.current = No, jo) {
          for (var s = Ie.memoizedState; s !== null; ) {
            var l = s.queue;
            l !== null && (l.pending = null), s = s.next;
          }
          jo = !1;
        }
        if (Wn = 0, Ve = Fe = Ie = null, gs = !1, _s = 0, qa.current = null, n === null || n.return === null) {
          He = 1, js = t, Oe = null;
          break;
        }
        e: {
          var u = e, m = n.return, k = n, E = t;
          if (t = Je, k.flags |= 32768, E !== null && typeof E == "object" && typeof E.then == "function") {
            var D = E, q = k, K = q.tag;
            if ((q.mode & 1) === 0 && (K === 0 || K === 11 || K === 15)) {
              var V = q.alternate;
              V ? (q.updateQueue = V.updateQueue, q.memoizedState = V.memoizedState, q.lanes = V.lanes) : (q.updateQueue = null, q.memoizedState = null);
            }
            var Z = sd(m);
            if (Z !== null) {
              Z.flags &= -257, od(Z, m, k, u, t), Z.mode & 1 && rd(u, D, t), t = Z, E = D;
              var te = t.updateQueue;
              if (te === null) {
                var ne = /* @__PURE__ */ new Set();
                ne.add(E), t.updateQueue = ne;
              } else te.add(E);
              break e;
            } else {
              if ((t & 1) === 0) {
                rd(u, D, t), tl();
                break e;
              }
              E = Error(i(426));
            }
          } else if (be && k.mode & 1) {
            var ze = sd(m);
            if (ze !== null) {
              (ze.flags & 65536) === 0 && (ze.flags |= 256), od(ze, m, k, u, t), fa(Cr(E, k));
              break e;
            }
          }
          u = E = Cr(E, k), He !== 4 && (He = 2), Cs === null ? Cs = [u] : Cs.push(u), u = m;
          do {
            switch (u.tag) {
              case 3:
                u.flags |= 65536, t &= -t, u.lanes |= t;
                var $ = td(u, E, t);
                Tc(u, $);
                break e;
              case 1:
                k = E;
                var P = u.type, I = u.stateNode;
                if ((u.flags & 128) === 0 && (typeof P.getDerivedStateFromError == "function" || I !== null && typeof I.componentDidCatch == "function" && (kn === null || !kn.has(I)))) {
                  u.flags |= 65536, t &= -t, u.lanes |= t;
                  var Y = nd(u, k, t);
                  Tc(u, Y);
                  break e;
                }
            }
            u = u.return;
          } while (u !== null);
        }
        Ld(n);
      } catch (re) {
        t = re, Oe === n && n !== null && (Oe = n = n.return);
        continue;
      }
      break;
    } while (!0);
  }
  function Md() {
    var e = $o.current;
    return $o.current = No, e === null ? No : e;
  }
  function tl() {
    (He === 0 || He === 3 || He === 2) && (He = 4), qe === null || (Bn & 268435455) === 0 && (Mo & 268435455) === 0 || En(qe, Je);
  }
  function Fo(e, t) {
    var n = _e;
    _e |= 2;
    var s = Md();
    (qe !== e || Je !== t) && (on = null, Vn(e, t));
    do
      try {
        sh();
        break;
      } catch (l) {
        $d(e, l);
      }
    while (!0);
    if (ma(), _e = n, $o.current = s, Oe !== null) throw Error(i(261));
    return qe = null, Je = 0, He;
  }
  function sh() {
    for (; Oe !== null; ) Id(Oe);
  }
  function oh() {
    for (; Oe !== null && !Pp(); ) Id(Oe);
  }
  function Id(e) {
    var t = Od(e.alternate, e, kt);
    e.memoizedProps = e.pendingProps, t === null ? Ld(e) : Oe = t, qa.current = null;
  }
  function Ld(e) {
    var t = e;
    do {
      var n = t.alternate;
      if (e = t.return, (t.flags & 32768) === 0) {
        if (n = Jm(n, t, kt), n !== null) {
          Oe = n;
          return;
        }
      } else {
        if (n = Xm(n, t), n !== null) {
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
  function qn(e, t, n) {
    var s = Ce, l = Rt.transition;
    try {
      Rt.transition = null, Ce = 1, ih(e, t, n, s);
    } finally {
      Rt.transition = l, Ce = s;
    }
    return null;
  }
  function ih(e, t, n, s) {
    do
      Rr();
    while (jn !== null);
    if ((_e & 6) !== 0) throw Error(i(327));
    n = e.finishedWork;
    var l = e.finishedLanes;
    if (n === null) return null;
    if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(i(177));
    e.callbackNode = null, e.callbackPriority = 0;
    var u = n.lanes | n.childLanes;
    if (Fp(e, u), e === qe && (Oe = qe = null, Je = 0), (n.subtreeFlags & 2064) === 0 && (n.flags & 2064) === 0 || Lo || (Lo = !0, Fd(Bs, function() {
      return Rr(), null;
    })), u = (n.flags & 15990) !== 0, (n.subtreeFlags & 15990) !== 0 || u) {
      u = Rt.transition, Rt.transition = null;
      var m = Ce;
      Ce = 1;
      var k = _e;
      _e |= 4, qa.current = null, eh(e, n), Ed(n, e), Em(ta), Gs = !!ea, ta = ea = null, e.current = n, th(n), Ap(), _e = k, Ce = m, Rt.transition = u;
    } else e.current = n;
    if (Lo && (Lo = !1, jn = e, Do = l), u = e.pendingLanes, u === 0 && (kn = null), Mp(n.stateNode), pt(e, De()), t !== null) for (s = e.onRecoverableError, n = 0; n < t.length; n++) l = t[n], s(l.value, { componentStack: l.stack, digest: l.digest });
    if (Io) throw Io = !1, e = Ya, Ya = null, e;
    return (Do & 1) !== 0 && e.tag !== 0 && Rr(), u = e.pendingLanes, (u & 1) !== 0 ? e === Ga ? Es++ : (Es = 0, Ga = e) : Es = 0, _n(), null;
  }
  function Rr() {
    if (jn !== null) {
      var e = ju(Do), t = Rt.transition, n = Ce;
      try {
        if (Rt.transition = null, Ce = 16 > e ? 16 : e, jn === null) var s = !1;
        else {
          if (e = jn, jn = null, Do = 0, (_e & 6) !== 0) throw Error(i(331));
          var l = _e;
          for (_e |= 4, ee = e.current; ee !== null; ) {
            var u = ee, m = u.child;
            if ((ee.flags & 16) !== 0) {
              var k = u.deletions;
              if (k !== null) {
                for (var E = 0; E < k.length; E++) {
                  var D = k[E];
                  for (ee = D; ee !== null; ) {
                    var q = ee;
                    switch (q.tag) {
                      case 0:
                      case 11:
                      case 15:
                        ks(8, q, u);
                    }
                    var K = q.child;
                    if (K !== null) K.return = q, ee = K;
                    else for (; ee !== null; ) {
                      q = ee;
                      var V = q.sibling, Z = q.return;
                      if (wd(q), q === D) {
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
                  ks(9, u, u.return);
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
                    bo(9, k);
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
          if (_e = l, _n(), Bt && typeof Bt.onPostCommitFiberRoot == "function") try {
            Bt.onPostCommitFiberRoot(Us, e);
          } catch {
          }
          s = !0;
        }
        return s;
      } finally {
        Ce = n, Rt.transition = t;
      }
    }
    return !1;
  }
  function Dd(e, t, n) {
    t = Cr(n, t), t = td(e, t, 1), e = wn(e, t, 1), t = at(), e !== null && (Gr(e, 1, t), pt(e, t));
  }
  function Le(e, t, n) {
    if (e.tag === 3) Dd(e, e, n);
    else for (; t !== null; ) {
      if (t.tag === 3) {
        Dd(t, e, n);
        break;
      } else if (t.tag === 1) {
        var s = t.stateNode;
        if (typeof t.type.getDerivedStateFromError == "function" || typeof s.componentDidCatch == "function" && (kn === null || !kn.has(s))) {
          e = Cr(n, e), e = nd(t, e, 1), t = wn(t, e, 1), e = at(), t !== null && (Gr(t, 1, e), pt(t, e));
          break;
        }
      }
      t = t.return;
    }
  }
  function ah(e, t, n) {
    var s = e.pingCache;
    s !== null && s.delete(t), t = at(), e.pingedLanes |= e.suspendedLanes & n, qe === e && (Je & n) === n && (He === 4 || He === 3 && (Je & 130023424) === Je && 500 > De() - Ka ? Vn(e, 0) : Qa |= n), pt(e, t);
  }
  function zd(e, t) {
    t === 0 && ((e.mode & 1) === 0 ? t = 1 : (t = qs, qs <<= 1, (qs & 130023424) === 0 && (qs = 4194304)));
    var n = at();
    e = nn(e, t), e !== null && (Gr(e, t, n), pt(e, n));
  }
  function lh(e) {
    var t = e.memoizedState, n = 0;
    t !== null && (n = t.retryLane), zd(e, n);
  }
  function uh(e, t) {
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
    s !== null && s.delete(t), zd(e, n);
  }
  var Od;
  Od = function(e, t, n) {
    if (e !== null) if (e.memoizedProps !== t.pendingProps || ut.current) dt = !0;
    else {
      if ((e.lanes & n) === 0 && (t.flags & 128) === 0) return dt = !1, Gm(e, t, n);
      dt = (e.flags & 131072) !== 0;
    }
    else dt = !1, be && (t.flags & 1048576) !== 0 && gc(t, ho, t.index);
    switch (t.lanes = 0, t.tag) {
      case 2:
        var s = t.type;
        Po(e, t), e = t.pendingProps;
        var l = yr(t, et.current);
        kr(t, n), l = Ca(null, t, s, e, l, n);
        var u = Ea();
        return t.flags |= 1, typeof l == "object" && l !== null && typeof l.render == "function" && l.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, ct(s) ? (u = !0, fo(t)) : u = !1, t.memoizedState = l.state !== null && l.state !== void 0 ? l.state : null, ga(t), l.updater = To, t.stateNode = l, l._reactInternals = t, ba(t, s, e, n), t = La(null, t, s, !0, u, n)) : (t.tag = 0, be && u && la(t), it(null, t, l, n), t = t.child), t;
      case 16:
        s = t.elementType;
        e: {
          switch (Po(e, t), e = t.pendingProps, l = s._init, s = l(s._payload), t.type = s, l = t.tag = dh(s), e = Lt(s, e), l) {
            case 0:
              t = Ia(null, t, s, e, n);
              break e;
            case 1:
              t = dd(null, t, s, e, n);
              break e;
            case 11:
              t = id(null, t, s, e, n);
              break e;
            case 14:
              t = ad(null, t, s, Lt(s.type, e), n);
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
        return s = t.type, l = t.pendingProps, l = t.elementType === s ? l : Lt(s, l), Ia(e, t, s, l, n);
      case 1:
        return s = t.type, l = t.pendingProps, l = t.elementType === s ? l : Lt(s, l), dd(e, t, s, l, n);
      case 3:
        e: {
          if (fd(t), e === null) throw Error(i(387));
          s = t.pendingProps, u = t.memoizedState, l = u.element, Nc(e, t), wo(t, s, null, n);
          var m = t.memoizedState;
          if (s = m.element, u.isDehydrated) if (u = { element: s, isDehydrated: !1, cache: m.cache, pendingSuspenseBoundaries: m.pendingSuspenseBoundaries, transitions: m.transitions }, t.updateQueue.baseState = u, t.memoizedState = u, t.flags & 256) {
            l = Cr(Error(i(423)), t), t = pd(e, t, s, n, l);
            break e;
          } else if (s !== l) {
            l = Cr(Error(i(424)), t), t = pd(e, t, s, n, l);
            break e;
          } else for (St = vn(t.stateNode.containerInfo.firstChild), wt = t, be = !0, It = null, n = Cc(t, null, s, n), t.child = n; n; ) n.flags = n.flags & -3 | 4096, n = n.sibling;
          else {
            if (xr(), s === l) {
              t = sn(e, t, n);
              break e;
            }
            it(e, t, s, n);
          }
          t = t.child;
        }
        return t;
      case 5:
        return Pc(t), e === null && da(t), s = t.type, l = t.pendingProps, u = e !== null ? e.memoizedProps : null, m = l.children, na(s, l) ? m = null : u !== null && na(s, u) && (t.flags |= 32), cd(e, t), it(e, t, m, n), t.child;
      case 6:
        return e === null && da(t), null;
      case 13:
        return md(e, t, n);
      case 4:
        return _a(t, t.stateNode.containerInfo), s = t.pendingProps, e === null ? t.child = wr(t, null, s, n) : it(e, t, s, n), t.child;
      case 11:
        return s = t.type, l = t.pendingProps, l = t.elementType === s ? l : Lt(s, l), id(e, t, s, l, n);
      case 7:
        return it(e, t, t.pendingProps, n), t.child;
      case 8:
        return it(e, t, t.pendingProps.children, n), t.child;
      case 12:
        return it(e, t, t.pendingProps.children, n), t.child;
      case 10:
        e: {
          if (s = t.type._context, l = t.pendingProps, u = t.memoizedProps, m = l.value, Re(go, s._currentValue), s._currentValue = m, u !== null) if (Mt(u.value, m)) {
            if (u.children === l.children && !ut.current) {
              t = sn(e, t, n);
              break e;
            }
          } else for (u = t.child, u !== null && (u.return = t); u !== null; ) {
            var k = u.dependencies;
            if (k !== null) {
              m = u.child;
              for (var E = k.firstContext; E !== null; ) {
                if (E.context === s) {
                  if (u.tag === 1) {
                    E = rn(-1, n & -n), E.tag = 2;
                    var D = u.updateQueue;
                    if (D !== null) {
                      D = D.shared;
                      var q = D.pending;
                      q === null ? E.next = E : (E.next = q.next, q.next = E), D.pending = E;
                    }
                  }
                  u.lanes |= n, E = u.alternate, E !== null && (E.lanes |= n), va(
                    u.return,
                    n,
                    t
                  ), k.lanes |= n;
                  break;
                }
                E = E.next;
              }
            } else if (u.tag === 10) m = u.type === t.type ? null : u.child;
            else if (u.tag === 18) {
              if (m = u.return, m === null) throw Error(i(341));
              m.lanes |= n, k = m.alternate, k !== null && (k.lanes |= n), va(m, n, t), m = u.sibling;
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
        return l = t.type, s = t.pendingProps.children, kr(t, n), l = Nt(l), s = s(l), t.flags |= 1, it(e, t, s, n), t.child;
      case 14:
        return s = t.type, l = Lt(s, t.pendingProps), l = Lt(s.type, l), ad(e, t, s, l, n);
      case 15:
        return ld(e, t, t.type, t.pendingProps, n);
      case 17:
        return s = t.type, l = t.pendingProps, l = t.elementType === s ? l : Lt(s, l), Po(e, t), t.tag = 1, ct(s) ? (e = !0, fo(t)) : e = !1, kr(t, n), Zc(t, s, l), ba(t, s, l, n), La(null, t, s, !0, e, n);
      case 19:
        return vd(e, t, n);
      case 22:
        return ud(e, t, n);
    }
    throw Error(i(156, t.tag));
  };
  function Fd(e, t) {
    return _u(e, t);
  }
  function ch(e, t, n, s) {
    this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = s, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function Pt(e, t, n, s) {
    return new ch(e, t, n, s);
  }
  function nl(e) {
    return e = e.prototype, !(!e || !e.isReactComponent);
  }
  function dh(e) {
    if (typeof e == "function") return nl(e) ? 1 : 0;
    if (e != null) {
      if (e = e.$$typeof, e === Ee) return 11;
      if (e === ve) return 14;
    }
    return 2;
  }
  function Nn(e, t) {
    var n = e.alternate;
    return n === null ? (n = Pt(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n;
  }
  function Ho(e, t, n, s, l, u) {
    var m = 2;
    if (s = e, typeof e == "function") nl(e) && (m = 1);
    else if (typeof e == "string") m = 5;
    else e: switch (e) {
      case X:
        return Qn(n.children, l, u, t);
      case U:
        m = 8, l |= 8;
        break;
      case G:
        return e = Pt(12, n, t, l | 2), e.elementType = G, e.lanes = u, e;
      case je:
        return e = Pt(13, n, t, l), e.elementType = je, e.lanes = u, e;
      case me:
        return e = Pt(19, n, t, l), e.elementType = me, e.lanes = u, e;
      case W:
        return Wo(n, l, u, t);
      default:
        if (typeof e == "object" && e !== null) switch (e.$$typeof) {
          case pe:
            m = 10;
            break e;
          case ce:
            m = 9;
            break e;
          case Ee:
            m = 11;
            break e;
          case ve:
            m = 14;
            break e;
          case Se:
            m = 16, s = null;
            break e;
        }
        throw Error(i(130, e == null ? e : typeof e, ""));
    }
    return t = Pt(m, n, t, l), t.elementType = e, t.type = s, t.lanes = u, t;
  }
  function Qn(e, t, n, s) {
    return e = Pt(7, e, s, t), e.lanes = n, e;
  }
  function Wo(e, t, n, s) {
    return e = Pt(22, e, s, t), e.elementType = W, e.lanes = n, e.stateNode = { isHidden: !1 }, e;
  }
  function rl(e, t, n) {
    return e = Pt(6, e, null, t), e.lanes = n, e;
  }
  function sl(e, t, n) {
    return t = Pt(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
  }
  function fh(e, t, n, s, l) {
    this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Ai(0), this.expirationTimes = Ai(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Ai(0), this.identifierPrefix = s, this.onRecoverableError = l, this.mutableSourceEagerHydrationData = null;
  }
  function ol(e, t, n, s, l, u, m, k, E) {
    return e = new fh(e, t, n, k, E), t === 1 ? (t = 1, u === !0 && (t |= 8)) : t = 0, u = Pt(3, null, null, t), e.current = u, u.stateNode = e, u.memoizedState = { element: s, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }, ga(u), e;
  }
  function ph(e, t, n) {
    var s = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: M, key: s == null ? null : "" + s, children: e, containerInfo: t, implementation: n };
  }
  function Hd(e) {
    if (!e) return gn;
    e = e._reactInternals;
    e: {
      if (In(e) !== e || e.tag !== 1) throw Error(i(170));
      var t = e;
      do {
        switch (t.tag) {
          case 3:
            t = t.stateNode.context;
            break e;
          case 1:
            if (ct(t.type)) {
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
      if (ct(n)) return hc(e, n, t);
    }
    return t;
  }
  function Wd(e, t, n, s, l, u, m, k, E) {
    return e = ol(n, s, !0, e, l, u, m, k, E), e.context = Hd(null), n = e.current, s = at(), l = Cn(n), u = rn(s, l), u.callback = t ?? null, wn(n, u, l), e.current.lanes = l, Gr(e, l, s), pt(e, s), e;
  }
  function Bo(e, t, n, s) {
    var l = t.current, u = at(), m = Cn(l);
    return n = Hd(n), t.context === null ? t.context = n : t.pendingContext = n, t = rn(u, m), t.payload = { element: e }, s = s === void 0 ? null : s, s !== null && (t.callback = s), e = wn(l, t, m), e !== null && (Ot(e, l, m, u), xo(e, l, m)), m;
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
  function Bd(e, t) {
    if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
      var n = e.retryLane;
      e.retryLane = n !== 0 && n < t ? n : t;
    }
  }
  function il(e, t) {
    Bd(e, t), (e = e.alternate) && Bd(e, t);
  }
  function mh() {
    return null;
  }
  var Ud = typeof reportError == "function" ? reportError : function(e) {
    console.error(e);
  };
  function al(e) {
    this._internalRoot = e;
  }
  Vo.prototype.render = al.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null) throw Error(i(409));
    Bo(e, t, null, null);
  }, Vo.prototype.unmount = al.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
      this._internalRoot = null;
      var t = e.containerInfo;
      Un(function() {
        Bo(null, e, null, null);
      }), t[Xt] = null;
    }
  };
  function Vo(e) {
    this._internalRoot = e;
  }
  Vo.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
      var t = Nu();
      e = { blockedOn: null, target: e, priority: t };
      for (var n = 0; n < pn.length && t !== 0 && t < pn[n].priority; n++) ;
      pn.splice(n, 0, e), n === 0 && Pu(e);
    }
  };
  function ll(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
  }
  function qo(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
  }
  function Vd() {
  }
  function hh(e, t, n, s, l) {
    if (l) {
      if (typeof s == "function") {
        var u = s;
        s = function() {
          var D = Uo(m);
          u.call(D);
        };
      }
      var m = Wd(t, s, e, 0, null, !1, !1, "", Vd);
      return e._reactRootContainer = m, e[Xt] = m.current, cs(e.nodeType === 8 ? e.parentNode : e), Un(), m;
    }
    for (; l = e.lastChild; ) e.removeChild(l);
    if (typeof s == "function") {
      var k = s;
      s = function() {
        var D = Uo(E);
        k.call(D);
      };
    }
    var E = ol(e, 0, !1, null, null, !1, !1, "", Vd);
    return e._reactRootContainer = E, e[Xt] = E.current, cs(e.nodeType === 8 ? e.parentNode : e), Un(function() {
      Bo(t, E, n, s);
    }), E;
  }
  function Qo(e, t, n, s, l) {
    var u = n._reactRootContainer;
    if (u) {
      var m = u;
      if (typeof l == "function") {
        var k = l;
        l = function() {
          var E = Uo(m);
          k.call(E);
        };
      }
      Bo(t, m, e, l);
    } else m = hh(n, t, e, l, s);
    return Uo(m);
  }
  Cu = function(e) {
    switch (e.tag) {
      case 3:
        var t = e.stateNode;
        if (t.current.memoizedState.isDehydrated) {
          var n = Yr(t.pendingLanes);
          n !== 0 && (bi(t, n | 1), pt(t, De()), (_e & 6) === 0 && (Tr = De() + 500, _n()));
        }
        break;
      case 13:
        Un(function() {
          var s = nn(e, 1);
          if (s !== null) {
            var l = at();
            Ot(s, e, 1, l);
          }
        }), il(e, 1);
    }
  }, $i = function(e) {
    if (e.tag === 13) {
      var t = nn(e, 134217728);
      if (t !== null) {
        var n = at();
        Ot(t, e, 134217728, n);
      }
      il(e, 134217728);
    }
  }, Eu = function(e) {
    if (e.tag === 13) {
      var t = Cn(e), n = nn(e, t);
      if (n !== null) {
        var s = at();
        Ot(n, e, t, s);
      }
      il(e, t);
    }
  }, Nu = function() {
    return Ce;
  }, Tu = function(e, t) {
    var n = Ce;
    try {
      return Ce = e, t();
    } finally {
      Ce = n;
    }
  }, Ci = function(e, t, n) {
    switch (t) {
      case "input":
        if (yi(e, n), t = n.name, n.type === "radio" && t != null) {
          for (n = e; n.parentNode; ) n = n.parentNode;
          for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
            var s = n[t];
            if (s !== e && s.form === e.form) {
              var l = uo(s);
              if (!l) throw Error(i(90));
              Wr(s), yi(s, l);
            }
          }
        }
        break;
      case "textarea":
        ru(e, n);
        break;
      case "select":
        t = n.value, t != null && or(e, !!n.multiple, t, !1);
    }
  }, fu = Za, pu = Un;
  var vh = { usingClientEntryPoint: !1, Events: [ps, hr, uo, cu, du, Za] }, Ns = { findFiberByHostInstance: Ln, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, yh = { bundleType: Ns.bundleType, version: Ns.version, rendererPackageName: Ns.rendererPackageName, rendererConfig: Ns.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: F.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
    return e = yu(e), e === null ? null : e.stateNode;
  }, findFiberByHostInstance: Ns.findFiberByHostInstance || mh, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Ko = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Ko.isDisabled && Ko.supportsFiber) try {
      Us = Ko.inject(yh), Bt = Ko;
    } catch {
    }
  }
  return mt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = vh, mt.createPortal = function(e, t) {
    var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!ll(t)) throw Error(i(200));
    return ph(e, t, null, n);
  }, mt.createRoot = function(e, t) {
    if (!ll(e)) throw Error(i(299));
    var n = !1, s = "", l = Ud;
    return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (s = t.identifierPrefix), t.onRecoverableError !== void 0 && (l = t.onRecoverableError)), t = ol(e, 1, !1, null, null, n, !1, s, l), e[Xt] = t.current, cs(e.nodeType === 8 ? e.parentNode : e), new al(t);
  }, mt.findDOMNode = function(e) {
    if (e == null) return null;
    if (e.nodeType === 1) return e;
    var t = e._reactInternals;
    if (t === void 0)
      throw typeof e.render == "function" ? Error(i(188)) : (e = Object.keys(e).join(","), Error(i(268, e)));
    return e = yu(t), e = e === null ? null : e.stateNode, e;
  }, mt.flushSync = function(e) {
    return Un(e);
  }, mt.hydrate = function(e, t, n) {
    if (!qo(t)) throw Error(i(200));
    return Qo(null, e, t, !0, n);
  }, mt.hydrateRoot = function(e, t, n) {
    if (!ll(e)) throw Error(i(405));
    var s = n != null && n.hydratedSources || null, l = !1, u = "", m = Ud;
    if (n != null && (n.unstable_strictMode === !0 && (l = !0), n.identifierPrefix !== void 0 && (u = n.identifierPrefix), n.onRecoverableError !== void 0 && (m = n.onRecoverableError)), t = Wd(t, null, e, 1, n ?? null, l, !1, u, m), e[Xt] = t.current, cs(e), s) for (e = 0; e < s.length; e++) n = s[e], l = n._getVersion, l = l(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, l] : t.mutableSourceEagerHydrationData.push(
      n,
      l
    );
    return new Vo(t);
  }, mt.render = function(e, t, n) {
    if (!qo(t)) throw Error(i(200));
    return Qo(null, e, t, !1, n);
  }, mt.unmountComponentAtNode = function(e) {
    if (!qo(e)) throw Error(i(40));
    return e._reactRootContainer ? (Un(function() {
      Qo(null, null, e, !1, function() {
        e._reactRootContainer = null, e[Xt] = null;
      });
    }), !0) : !1;
  }, mt.unstable_batchedUpdates = Za, mt.unstable_renderSubtreeIntoContainer = function(e, t, n, s) {
    if (!qo(n)) throw Error(i(200));
    if (e == null || e._reactInternals === void 0) throw Error(i(38));
    return Qo(e, t, n, !1, s);
  }, mt.version = "18.3.1-next-f1338f8080-20240426", mt;
}
var Zd;
function Rf() {
  if (Zd) return dl.exports;
  Zd = 1;
  function r() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r);
      } catch (a) {
        console.error(a);
      }
  }
  return r(), dl.exports = Eh(), dl.exports;
}
var ef;
function Nh() {
  if (ef) return Yo;
  ef = 1;
  var r = Rf();
  return Yo.createRoot = r.createRoot, Yo.hydrateRoot = r.hydrateRoot, Yo;
}
var Th = Nh();
const Rh = /* @__PURE__ */ Nf(Th);
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
var tf = "popstate";
function nf(r) {
  return typeof r == "object" && r != null && "pathname" in r && "search" in r && "hash" in r && "state" in r && "key" in r;
}
function Ph(r = {}) {
  function a(d, f) {
    let {
      pathname: p = "/",
      search: h = "",
      hash: g = ""
    } = nr(d.location.hash.substring(1));
    return !p.startsWith("/") && !p.startsWith(".") && (p = "/" + p), jl(
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
    return h + "#" + (typeof f == "string" ? f : Ls(f));
  }
  function c(d, f) {
    bt(
      d.pathname.charAt(0) === "/",
      `relative pathnames are not supported in hash history.push(${JSON.stringify(
        f
      )})`
    );
  }
  return bh(
    a,
    i,
    c,
    r
  );
}
function $e(r, a) {
  if (r === !1 || r === null || typeof r > "u")
    throw new Error(a);
}
function bt(r, a) {
  if (!r) {
    typeof console < "u" && console.warn(a);
    try {
      throw new Error(a);
    } catch {
    }
  }
}
function Ah() {
  return Math.random().toString(36).substring(2, 10);
}
function rf(r, a) {
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
function jl(r, a, i = null, c, d) {
  return {
    pathname: typeof r == "string" ? r : r.pathname,
    search: "",
    hash: "",
    ...typeof a == "string" ? nr(a) : a,
    state: i,
    // TODO: This could be cleaned up.  push/replace should probably just take
    // full Locations now and avoid the need to run through this flow at all
    // But that's a pretty big refactor to the current test suite so going to
    // keep as is for the time being and just let any incoming keys take precedence
    key: a && a.key || c || Ah(),
    mask: d
  };
}
function Ls({
  pathname: r = "/",
  search: a = "",
  hash: i = ""
}) {
  return a && a !== "?" && (r += a.charAt(0) === "?" ? a : "?" + a), i && i !== "#" && (r += i.charAt(0) === "#" ? i : "#" + i), r;
}
function nr(r) {
  let a = {};
  if (r) {
    let i = r.indexOf("#");
    i >= 0 && (a.hash = r.substring(i), r = r.substring(0, i));
    let c = r.indexOf("?");
    c >= 0 && (a.search = r.substring(c), r = r.substring(0, c)), r && (a.pathname = r);
  }
  return a;
}
function bh(r, a, i, c = {}) {
  let { window: d = document.defaultView, v5Compat: f = !1 } = c, p = d.history, h = "POP", g = null, w = y();
  w == null && (w = 0, p.replaceState({ ...p.state, idx: w }, ""));
  function y() {
    return (p.state || { idx: null }).idx;
  }
  function _() {
    h = "POP";
    let N = y(), A = N == null ? null : N - w;
    w = N, g && g({ action: h, location: C.location, delta: A });
  }
  function S(N, A) {
    h = "PUSH";
    let H = nf(N) ? N : jl(C.location, N, A);
    i && i(H, N), w = y() + 1;
    let b = rf(H, w), F = C.createHref(H.mask || H);
    try {
      p.pushState(b, "", F);
    } catch (B) {
      if (B instanceof DOMException && B.name === "DataCloneError")
        throw B;
      d.location.assign(F);
    }
    f && g && g({ action: h, location: C.location, delta: 1 });
  }
  function j(N, A) {
    h = "REPLACE";
    let H = nf(N) ? N : jl(C.location, N, A);
    i && i(H, N), w = y();
    let b = rf(H, w), F = C.createHref(H.mask || H);
    p.replaceState(b, "", F), f && g && g({ action: h, location: C.location, delta: 0 });
  }
  function R(N) {
    return $h(d, N);
  }
  let C = {
    get action() {
      return h;
    },
    get location() {
      return r(d, p);
    },
    listen(N) {
      if (g)
        throw new Error("A history only accepts one active listener");
      return d.addEventListener(tf, _), g = N, () => {
        d.removeEventListener(tf, _), g = null;
      };
    },
    createHref(N) {
      return a(d, N);
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
    replace: j,
    go(N) {
      return p.go(N);
    }
  };
  return C;
}
function $h(r, a, i = !1) {
  let c = "http://localhost";
  r && (c = r.location.origin !== "null" ? r.location.origin : r.location.href), $e(c, "No window.location.(origin|href) available to create URL");
  let d = typeof a == "string" ? a : Ls(a);
  return d = d.replace(/ $/, "%20"), !i && d.startsWith("//") && (d = c + d), new URL(d, c);
}
function Pf(r, a, i = "/") {
  return Mh(r, a, i, !1);
}
function Mh(r, a, i, c, d) {
  let f = typeof a == "string" ? nr(a) : a, p = un(f.pathname || "/", i);
  if (p == null)
    return null;
  let h = Ih(r), g = null, w = Qh(p);
  for (let y = 0; g == null && y < h.length; ++y)
    g = Vh(
      h[y],
      w,
      c
    );
  return g;
}
function Ih(r) {
  let a = Af(r);
  return Lh(a), a;
}
function Af(r, a = [], i = [], c = "", d = !1) {
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
    let _ = Ht([c, y.relativePath]), S = i.concat(y);
    p.children && p.children.length > 0 && ($e(
      // Our types know better, but runtime JS may not!
      // @ts-expect-error
      p.index !== !0,
      `Index routes must not have child routes. Please remove all child routes from route path "${_}".`
    ), Af(
      p.children,
      a,
      S,
      _,
      g
    )), !(p.path == null && !p.index) && a.push({
      path: _,
      score: Bh(_, p.index),
      routesMeta: S
    });
  };
  return r.forEach((p, h) => {
    var g;
    if (p.path === "" || !((g = p.path) != null && g.includes("?")))
      f(p, h);
    else
      for (let w of bf(p.path))
        f(p, h, !0, w);
  }), a;
}
function bf(r) {
  let a = r.split("/");
  if (a.length === 0) return [];
  let [i, ...c] = a, d = i.endsWith("?"), f = i.replace(/\?$/, "");
  if (c.length === 0)
    return d ? [f, ""] : [f];
  let p = bf(c.join("/")), h = [];
  return h.push(
    ...p.map(
      (g) => g === "" ? f : [f, g].join("/")
    )
  ), d && h.push(...p), h.map(
    (g) => r.startsWith("/") && g === "" ? "/" : g
  );
}
function Lh(r) {
  r.sort(
    (a, i) => a.score !== i.score ? i.score - a.score : Uh(
      a.routesMeta.map((c) => c.childrenIndex),
      i.routesMeta.map((c) => c.childrenIndex)
    )
  );
}
var Dh = /^:[\w-]+$/, zh = 3, Oh = 2, Fh = 1, Hh = 10, Wh = -2, sf = (r) => r === "*";
function Bh(r, a) {
  let i = r.split("/"), c = i.length;
  return i.some(sf) && (c += Wh), a && (c += Oh), i.filter((d) => !sf(d)).reduce(
    (d, f) => d + (Dh.test(f) ? zh : f === "" ? Fh : Hh),
    c
  );
}
function Uh(r, a) {
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
function Vh(r, a, i = !1) {
  let { routesMeta: c } = r, d = {}, f = "/", p = [];
  for (let h = 0; h < c.length; ++h) {
    let g = c[h], w = h === c.length - 1, y = f === "/" ? a : a.slice(f.length) || "/", _ = si(
      { path: g.relativePath, caseSensitive: g.caseSensitive, end: w },
      y
    ), S = g.route;
    if (!_ && w && i && !c[c.length - 1].route.index && (_ = si(
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
      pathname: Ht([f, _.pathname]),
      pathnameBase: Jh(
        Ht([f, _.pathnameBase])
      ),
      route: S
    }), _.pathnameBase !== "/" && (f = Ht([f, _.pathnameBase]));
  }
  return p;
}
function si(r, a) {
  typeof r == "string" && (r = { path: r, caseSensitive: !1, end: !0 });
  let [i, c] = qh(
    r.path,
    r.caseSensitive,
    r.end
  ), d = a.match(i);
  if (!d) return null;
  let f = d[0], p = f.replace(/(.)\/+$/, "$1"), h = d.slice(1);
  return {
    params: c.reduce(
      (w, { paramName: y, isOptional: _ }, S) => {
        if (y === "*") {
          let R = h[S] || "";
          p = f.slice(0, f.length - R.length).replace(/(.)\/+$/, "$1");
        }
        const j = h[S];
        return _ && !j ? w[y] = void 0 : w[y] = (j || "").replace(/%2F/g, "/"), w;
      },
      {}
    ),
    pathname: f,
    pathnameBase: p,
    pattern: r
  };
}
function qh(r, a = !1, i = !0) {
  bt(
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
  return r.endsWith("*") ? (c.push({ paramName: "*" }), d += r === "*" || r === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$") : i ? d += "\\/*$" : r !== "" && r !== "/" && (d += "(?:(?=\\/|$))"), [new RegExp(d, a ? void 0 : "i"), c];
}
function Qh(r) {
  try {
    return r.split("/").map((a) => decodeURIComponent(a).replace(/\//g, "%2F")).join("/");
  } catch (a) {
    return bt(
      !1,
      `The URL path "${r}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${a}).`
    ), r;
  }
}
function un(r, a) {
  if (a === "/") return r;
  if (!r.toLowerCase().startsWith(a.toLowerCase()))
    return null;
  let i = a.endsWith("/") ? a.length - 1 : a.length, c = r.charAt(i);
  return c && c !== "/" ? null : r.slice(i) || "/";
}
var Kh = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;
function Yh(r, a = "/") {
  let {
    pathname: i,
    search: c = "",
    hash: d = ""
  } = typeof r == "string" ? nr(r) : r, f;
  return i ? (i = $f(i), i.startsWith("/") ? f = of(i.substring(1), "/") : f = of(i, a)) : f = a, {
    pathname: f,
    search: Xh(c),
    hash: Zh(d)
  };
}
function of(r, a) {
  let i = oi(a).split("/");
  return r.split("/").forEach((d) => {
    d === ".." ? i.length > 1 && i.pop() : d !== "." && i.push(d);
  }), i.length > 1 ? i.join("/") : "/";
}
function ml(r, a, i, c) {
  return `Cannot include a '${r}' character in a manually specified \`to.${a}\` field [${JSON.stringify(
    c
  )}].  Please separate it out to the \`to.${i}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`;
}
function Gh(r) {
  return r.filter(
    (a, i) => i === 0 || a.route.path && a.route.path.length > 0
  );
}
function Il(r) {
  let a = Gh(r);
  return a.map(
    (i, c) => c === a.length - 1 ? i.pathname : i.pathnameBase
  );
}
function ci(r, a, i, c = !1) {
  let d;
  typeof r == "string" ? d = nr(r) : (d = { ...r }, $e(
    !d.pathname || !d.pathname.includes("?"),
    ml("?", "pathname", "search", d)
  ), $e(
    !d.pathname || !d.pathname.includes("#"),
    ml("#", "pathname", "hash", d)
  ), $e(
    !d.search || !d.search.includes("#"),
    ml("#", "search", "hash", d)
  ));
  let f = r === "" || d.pathname === "", p = f ? "/" : d.pathname, h;
  if (p == null)
    h = i;
  else {
    let _ = a.length - 1;
    if (!c && p.startsWith("..")) {
      let S = p.split("/");
      for (; S[0] === ".."; )
        S.shift(), _ -= 1;
      d.pathname = S.join("/");
    }
    h = _ >= 0 ? a[_] : "/";
  }
  let g = Yh(d, h), w = p && p !== "/" && p.endsWith("/"), y = (f || p === ".") && i.endsWith("/");
  return !g.pathname.endsWith("/") && (w || y) && (g.pathname += "/"), g;
}
var $f = (r) => r.replace(/\/\/+/g, "/"), Ht = (r) => $f(r.join("/")), oi = (r) => r.replace(/\/+$/, ""), Jh = (r) => oi(r).replace(/^\/*/, "/"), Xh = (r) => !r || r === "?" ? "" : r.startsWith("?") ? r : "?" + r, Zh = (r) => !r || r === "#" ? "" : r.startsWith("#") ? r : "#" + r, ev = class {
  constructor(r, a, i, c = !1) {
    this.status = r, this.statusText = a || "", this.internal = c, i instanceof Error ? (this.data = i.toString(), this.error = i) : this.data = i;
  }
};
function tv(r) {
  return r != null && typeof r.status == "number" && typeof r.statusText == "string" && typeof r.internal == "boolean" && "data" in r;
}
function nv(r) {
  let a = r.map((i) => i.route.path).filter(Boolean);
  return Ht(a) || "/";
}
var Mf = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u";
function If(r, a) {
  let i = r;
  if (typeof i != "string" || !Kh.test(i))
    return {
      absoluteURL: void 0,
      isExternal: !1,
      to: i
    };
  let c = i, d = !1;
  if (Mf)
    try {
      let f = new URL(window.location.href), p = i.startsWith("//") ? new URL(f.protocol + i) : new URL(i), h = un(p.pathname, a);
      p.origin === f.origin && h != null ? i = h + p.search + p.hash : d = !0;
    } catch {
      bt(
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
var Lf = [
  "POST",
  "PUT",
  "PATCH",
  "DELETE"
];
new Set(
  Lf
);
var rv = [
  "GET",
  ...Lf
];
new Set(rv);
var Mr = v.createContext(null);
Mr.displayName = "DataRouter";
var di = v.createContext(null);
di.displayName = "DataRouterState";
var Df = v.createContext(!1);
function sv() {
  return v.useContext(Df);
}
var zf = v.createContext({
  isTransitioning: !1
});
zf.displayName = "ViewTransition";
var ov = v.createContext(
  /* @__PURE__ */ new Map()
);
ov.displayName = "Fetchers";
var iv = v.createContext(null);
iv.displayName = "Await";
var jt = v.createContext(
  null
);
jt.displayName = "Navigation";
var zs = v.createContext(
  null
);
zs.displayName = "Location";
var Gt = v.createContext({
  outlet: null,
  matches: [],
  isDataRoute: !1
});
Gt.displayName = "Route";
var Ll = v.createContext(null);
Ll.displayName = "RouteError";
var Of = "REACT_ROUTER_ERROR", av = "REDIRECT", lv = "ROUTE_ERROR_RESPONSE";
function uv(r) {
  if (r.startsWith(`${Of}:${av}:{`))
    try {
      let a = JSON.parse(r.slice(28));
      if (typeof a == "object" && a && typeof a.status == "number" && typeof a.statusText == "string" && typeof a.location == "string" && typeof a.reloadDocument == "boolean" && typeof a.replace == "boolean")
        return a;
    } catch {
    }
}
function cv(r) {
  if (r.startsWith(
    `${Of}:${lv}:{`
  ))
    try {
      let a = JSON.parse(r.slice(40));
      if (typeof a == "object" && a && typeof a.status == "number" && typeof a.statusText == "string")
        return new ev(
          a.status,
          a.statusText,
          a.data
        );
    } catch {
    }
}
function dv(r, { relative: a } = {}) {
  $e(
    rr(),
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useHref() may be used only in the context of a <Router> component."
  );
  let { basename: i, navigator: c } = v.useContext(jt), { hash: d, pathname: f, search: p } = Os(r, { relative: a }), h = f;
  return i !== "/" && (h = f === "/" ? i : Ht([i, f])), c.createHref({ pathname: h, search: p, hash: d });
}
function rr() {
  return v.useContext(zs) != null;
}
function yt() {
  return $e(
    rr(),
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useLocation() may be used only in the context of a <Router> component."
  ), v.useContext(zs).location;
}
var Ff = "You should call navigate() in a React.useEffect(), not when your component is first rendered.";
function Hf(r) {
  v.useContext(jt).static || v.useLayoutEffect(r);
}
function Dl() {
  let { isDataRoute: r } = v.useContext(Gt);
  return r ? jv() : fv();
}
function fv() {
  $e(
    rr(),
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useNavigate() may be used only in the context of a <Router> component."
  );
  let r = v.useContext(Mr), { basename: a, navigator: i } = v.useContext(jt), { matches: c } = v.useContext(Gt), { pathname: d } = yt(), f = JSON.stringify(Il(c)), p = v.useRef(!1);
  return Hf(() => {
    p.current = !0;
  }), v.useCallback(
    (g, w = {}) => {
      if (bt(p.current, Ff), !p.current) return;
      if (typeof g == "number") {
        i.go(g);
        return;
      }
      let y = ci(
        g,
        JSON.parse(f),
        d,
        w.relative === "path"
      );
      r == null && a !== "/" && (y.pathname = y.pathname === "/" ? a : Ht([a, y.pathname])), (w.replace ? i.replace : i.push)(
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
function Os(r, { relative: a } = {}) {
  let { matches: i } = v.useContext(Gt), { pathname: c } = yt(), d = JSON.stringify(Il(i));
  return v.useMemo(
    () => ci(
      r,
      JSON.parse(d),
      c,
      a === "path"
    ),
    [r, d, c, a]
  );
}
function pv(r, a) {
  return Wf(r, a);
}
function Wf(r, a, i) {
  var N;
  $e(
    rr(),
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useRoutes() may be used only in the context of a <Router> component."
  );
  let { navigator: c } = v.useContext(jt), { matches: d } = v.useContext(Gt), f = d[d.length - 1], p = f ? f.params : {}, h = f ? f.pathname : "/", g = f ? f.pathnameBase : "/", w = f && f.route;
  {
    let A = w && w.path || "";
    Uf(
      h,
      !w || A.endsWith("*") || A.endsWith("*?"),
      `You rendered descendant <Routes> (or called \`useRoutes()\`) at "${h}" (under <Route path="${A}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${A}"> to <Route path="${A === "/" ? "*" : `${A}/*`}">.`
    );
  }
  let y = yt(), _;
  if (a) {
    let A = typeof a == "string" ? nr(a) : a;
    $e(
      g === "/" || ((N = A.pathname) == null ? void 0 : N.startsWith(g)),
      `When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${g}" but pathname "${A.pathname}" was given in the \`location\` prop.`
    ), _ = A;
  } else
    _ = y;
  let S = _.pathname || "/", j = S;
  if (g !== "/") {
    let A = g.replace(/^\//, "").split("/");
    j = "/" + S.replace(/^\//, "").split("/").slice(A.length).join("/");
  }
  let R = i && i.state.matches.length ? (
    // If we're in a data router, use the matches we've already identified but ensure
    // we have the latest route instances from the manifest in case elements have changed
    i.state.matches.map(
      (A) => Object.assign(A, {
        route: i.manifest[A.route.id] || A.route
      })
    )
  ) : Pf(r, { pathname: j });
  bt(
    w || R != null,
    `No routes matched location "${_.pathname}${_.search}${_.hash}" `
  ), bt(
    R == null || R[R.length - 1].route.element !== void 0 || R[R.length - 1].route.Component !== void 0 || R[R.length - 1].route.lazy !== void 0,
    `Matched leaf route at location "${_.pathname}${_.search}${_.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`
  );
  let C = gv(
    R && R.map(
      (A) => Object.assign({}, A, {
        params: Object.assign({}, p, A.params),
        pathname: Ht([
          g,
          // Re-encode pathnames that were decoded inside matchRoutes.
          // Pre-encode `%`, `?` and `#` ahead of `encodeLocation` because it uses
          // `new URL()` internally and we need to prevent it from treating
          // them as separators
          c.encodeLocation ? c.encodeLocation(
            A.pathname.replace(/%/g, "%25").replace(/\?/g, "%3F").replace(/#/g, "%23")
          ).pathname : A.pathname
        ]),
        pathnameBase: A.pathnameBase === "/" ? g : Ht([
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
  return a && C ? /* @__PURE__ */ v.createElement(
    zs.Provider,
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
    C
  ) : C;
}
function mv() {
  let r = kv(), a = tv(r) ? `${r.status} ${r.statusText}` : r instanceof Error ? r.message : JSON.stringify(r), i = r instanceof Error ? r.stack : null, c = "rgba(200,200,200, 0.5)", d = { padding: "0.5rem", backgroundColor: c }, f = { padding: "2px 4px", backgroundColor: c }, p = null;
  return console.error(
    "Error handled by React Router default ErrorBoundary:",
    r
  ), p = /* @__PURE__ */ v.createElement(v.Fragment, null, /* @__PURE__ */ v.createElement("p", null, "💿 Hey developer 👋"), /* @__PURE__ */ v.createElement("p", null, "You can provide a way better UX than this when your app throws errors by providing your own ", /* @__PURE__ */ v.createElement("code", { style: f }, "ErrorBoundary"), " or", " ", /* @__PURE__ */ v.createElement("code", { style: f }, "errorElement"), " prop on your route.")), /* @__PURE__ */ v.createElement(v.Fragment, null, /* @__PURE__ */ v.createElement("h2", null, "Unexpected Application Error!"), /* @__PURE__ */ v.createElement("h3", { style: { fontStyle: "italic" } }, a), i ? /* @__PURE__ */ v.createElement("pre", { style: d }, i) : null, p);
}
var hv = /* @__PURE__ */ v.createElement(mv, null), Bf = class extends v.Component {
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
      const i = cv(r.digest);
      i && (r = i);
    }
    let a = r !== void 0 ? /* @__PURE__ */ v.createElement(Gt.Provider, { value: this.props.routeContext }, /* @__PURE__ */ v.createElement(
      Ll.Provider,
      {
        value: r,
        children: this.props.component
      }
    )) : this.props.children;
    return this.context ? /* @__PURE__ */ v.createElement(vv, { error: r }, a) : a;
  }
};
Bf.contextType = Df;
var hl = /* @__PURE__ */ new WeakMap();
function vv({
  children: r,
  error: a
}) {
  let { basename: i } = v.useContext(jt);
  if (typeof a == "object" && a && "digest" in a && typeof a.digest == "string") {
    let c = uv(a.digest);
    if (c) {
      let d = hl.get(a);
      if (d) throw d;
      let f = If(c.location, i);
      if (Mf && !hl.get(a))
        if (f.isExternal || c.reloadDocument)
          window.location.href = f.absoluteURL || f.to;
        else {
          const p = Promise.resolve().then(
            () => window.__reactRouterDataRouter.navigate(f.to, {
              replace: c.replace
            })
          );
          throw hl.set(a, p), p;
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
function yv({ routeContext: r, match: a, children: i }) {
  let c = v.useContext(Mr);
  return c && c.static && c.staticContext && (a.route.errorElement || a.route.ErrorBoundary) && (c.staticContext._deepestRenderedBoundaryId = a.route.id), /* @__PURE__ */ v.createElement(Gt.Provider, { value: r }, i);
}
function gv(r, a = [], i) {
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
  if (i && c) {
    p = c.renderFallback;
    for (let y = 0; y < d.length; y++) {
      let _ = d[y];
      if ((_.route.HydrateFallback || _.route.hydrateFallbackElement) && (h = y), _.route.id) {
        let { loaderData: S, errors: j } = c, R = _.route.loader && !S.hasOwnProperty(_.route.id) && (!j || j[_.route.id] === void 0);
        if (_.route.lazy || R) {
          i.isStatic && (p = !0), h >= 0 ? d = d.slice(0, h + 1) : d = [d[0]];
          break;
        }
      }
    }
  }
  let g = i == null ? void 0 : i.onError, w = c && g ? (y, _) => {
    var S, j;
    g(y, {
      location: c.location,
      params: ((j = (S = c.matches) == null ? void 0 : S[0]) == null ? void 0 : j.params) ?? {},
      pattern: nv(c.matches),
      errorInfo: _
    });
  } : void 0;
  return d.reduceRight(
    (y, _, S) => {
      let j, R = !1, C = null, N = null;
      c && (j = f && _.route.id ? f[_.route.id] : void 0, C = _.route.errorElement || hv, p && (h < 0 && S === 0 ? (Uf(
        "route-fallback",
        !1,
        "No `HydrateFallback` element provided to render during initial hydration"
      ), R = !0, N = null) : h === S && (R = !0, N = _.route.hydrateFallbackElement || null)));
      let A = a.concat(d.slice(0, S + 1)), H = () => {
        let b;
        return j ? b = C : R ? b = N : _.route.Component ? b = /* @__PURE__ */ v.createElement(_.route.Component, null) : _.route.element ? b = _.route.element : b = y, /* @__PURE__ */ v.createElement(
          yv,
          {
            match: _,
            routeContext: {
              outlet: y,
              matches: A,
              isDataRoute: c != null
            },
            children: b
          }
        );
      };
      return c && (_.route.ErrorBoundary || _.route.errorElement || S === 0) ? /* @__PURE__ */ v.createElement(
        Bf,
        {
          location: c.location,
          revalidation: c.revalidation,
          component: C,
          error: j,
          children: H(),
          routeContext: { outlet: null, matches: A, isDataRoute: !0 },
          onError: w
        }
      ) : H();
    },
    null
  );
}
function zl(r) {
  return `${r} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function _v(r) {
  let a = v.useContext(Mr);
  return $e(a, zl(r)), a;
}
function xv(r) {
  let a = v.useContext(di);
  return $e(a, zl(r)), a;
}
function wv(r) {
  let a = v.useContext(Gt);
  return $e(a, zl(r)), a;
}
function Ol(r) {
  let a = wv(r), i = a.matches[a.matches.length - 1];
  return $e(
    i.route.id,
    `${r} can only be used on routes that contain a unique "id"`
  ), i.route.id;
}
function Sv() {
  return Ol(
    "useRouteId"
    /* UseRouteId */
  );
}
function kv() {
  var c;
  let r = v.useContext(Ll), a = xv(
    "useRouteError"
    /* UseRouteError */
  ), i = Ol(
    "useRouteError"
    /* UseRouteError */
  );
  return r !== void 0 ? r : (c = a.errors) == null ? void 0 : c[i];
}
function jv() {
  let { router: r } = _v(
    "useNavigate"
    /* UseNavigateStable */
  ), a = Ol(
    "useNavigate"
    /* UseNavigateStable */
  ), i = v.useRef(!1);
  return Hf(() => {
    i.current = !0;
  }), v.useCallback(
    async (d, f = {}) => {
      bt(i.current, Ff), i.current && (typeof d == "number" ? await r.navigate(d) : await r.navigate(d, { fromRouteId: a, ...f }));
    },
    [r, a]
  );
}
var af = {};
function Uf(r, a, i) {
  !a && !af[r] && (af[r] = !0, bt(!1, i));
}
v.memo(Cv);
function Cv({
  routes: r,
  manifest: a,
  future: i,
  state: c,
  isStatic: d,
  onError: f
}) {
  return Wf(r, void 0, {
    manifest: a,
    state: c,
    isStatic: d,
    onError: f
  });
}
function Rn({
  to: r,
  replace: a,
  state: i,
  relative: c
}) {
  $e(
    rr(),
    // TODO: This error is probably because they somehow have 2 versions of
    // the router loaded. We can help them understand how to avoid that.
    "<Navigate> may be used only in the context of a <Router> component."
  );
  let { static: d } = v.useContext(jt);
  bt(
    !d,
    "<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change."
  );
  let { matches: f } = v.useContext(Gt), { pathname: p } = yt(), h = Dl(), g = ci(
    r,
    Il(f),
    p,
    c === "path"
  ), w = JSON.stringify(g);
  return v.useEffect(() => {
    h(JSON.parse(w), { replace: a, state: i, relative: c });
  }, [h, w, c, a, i]), null;
}
function Ke(r) {
  $e(
    !1,
    "A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>."
  );
}
function Ev({
  basename: r = "/",
  children: a = null,
  location: i,
  navigationType: c = "POP",
  navigator: d,
  static: f = !1,
  useTransitions: p
}) {
  $e(
    !rr(),
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
  typeof i == "string" && (i = nr(i));
  let {
    pathname: w = "/",
    search: y = "",
    hash: _ = "",
    state: S = null,
    key: j = "default",
    mask: R
  } = i, C = v.useMemo(() => {
    let N = un(w, h);
    return N == null ? null : {
      location: {
        pathname: N,
        search: y,
        hash: _,
        state: S,
        key: j,
        mask: R
      },
      navigationType: c
    };
  }, [h, w, y, _, S, j, c, R]);
  return bt(
    C != null,
    `<Router basename="${h}"> is not able to match the URL "${w}${y}${_}" because it does not start with the basename, so the <Router> won't render anything.`
  ), C == null ? null : /* @__PURE__ */ v.createElement(jt.Provider, { value: g }, /* @__PURE__ */ v.createElement(zs.Provider, { children: a, value: C }));
}
function Nv({
  children: r,
  location: a
}) {
  return pv(Cl(r), a);
}
function Cl(r, a = []) {
  let i = [];
  return v.Children.forEach(r, (c, d) => {
    if (!v.isValidElement(c))
      return;
    let f = [...a, d];
    if (c.type === v.Fragment) {
      i.push.apply(
        i,
        Cl(c.props.children, f)
      );
      return;
    }
    $e(
      c.type === Ke,
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
    c.props.children && (p.children = Cl(
      c.props.children,
      f
    )), i.push(p);
  }), i;
}
var ni = "get", ri = "application/x-www-form-urlencoded";
function fi(r) {
  return typeof HTMLElement < "u" && r instanceof HTMLElement;
}
function Tv(r) {
  return fi(r) && r.tagName.toLowerCase() === "button";
}
function Rv(r) {
  return fi(r) && r.tagName.toLowerCase() === "form";
}
function Pv(r) {
  return fi(r) && r.tagName.toLowerCase() === "input";
}
function Av(r) {
  return !!(r.metaKey || r.altKey || r.ctrlKey || r.shiftKey);
}
function bv(r, a) {
  return r.button === 0 && // Ignore everything but left clicks
  (!a || a === "_self") && // Let browser handle "target=_blank" etc.
  !Av(r);
}
var Go = null;
function $v() {
  if (Go === null)
    try {
      new FormData(
        document.createElement("form"),
        // @ts-expect-error if FormData supports the submitter parameter, this will throw
        0
      ), Go = !1;
    } catch {
      Go = !0;
    }
  return Go;
}
var Mv = /* @__PURE__ */ new Set([
  "application/x-www-form-urlencoded",
  "multipart/form-data",
  "text/plain"
]);
function vl(r) {
  return r != null && !Mv.has(r) ? (bt(
    !1,
    `"${r}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${ri}"`
  ), null) : r;
}
function Iv(r, a) {
  let i, c, d, f, p;
  if (Rv(r)) {
    let h = r.getAttribute("action");
    c = h ? un(h, a) : null, i = r.getAttribute("method") || ni, d = vl(r.getAttribute("enctype")) || ri, f = new FormData(r);
  } else if (Tv(r) || Pv(r) && (r.type === "submit" || r.type === "image")) {
    let h = r.form;
    if (h == null)
      throw new Error(
        'Cannot submit a <button> or <input type="submit"> without a <form>'
      );
    let g = r.getAttribute("formaction") || h.getAttribute("action");
    if (c = g ? un(g, a) : null, i = r.getAttribute("formmethod") || h.getAttribute("method") || ni, d = vl(r.getAttribute("formenctype")) || vl(h.getAttribute("enctype")) || ri, f = new FormData(h, r), !$v()) {
      let { name: w, type: y, value: _ } = r;
      if (y === "image") {
        let S = w ? `${w}.` : "";
        f.append(`${S}x`, "0"), f.append(`${S}y`, "0");
      } else w && f.append(w, _);
    }
  } else {
    if (fi(r))
      throw new Error(
        'Cannot submit element that is not <form>, <button>, or <input type="submit|image">'
      );
    i = ni, c = null, d = ri, p = r;
  }
  return f && d === "text/plain" && (p = f, f = void 0), { action: c, method: i.toLowerCase(), encType: d, formData: f, body: p };
}
Object.getOwnPropertyNames(Object.prototype).sort().join("\0");
function Fl(r, a) {
  if (r === !1 || r === null || typeof r > "u")
    throw new Error(a);
}
function Vf(r, a, i, c) {
  let d = typeof r == "string" ? new URL(
    r,
    // This can be called during the SSR flow via PrefetchPageLinksImpl so
    // don't assume window is available
    typeof window > "u" ? "server://singlefetch/" : window.location.origin
  ) : r;
  return i ? d.pathname.endsWith("/") ? d.pathname = `${d.pathname}_.${c}` : d.pathname = `${d.pathname}.${c}` : d.pathname === "/" ? d.pathname = `_root.${c}` : a && un(d.pathname, a) === "/" ? d.pathname = `${oi(a)}/_root.${c}` : d.pathname = `${oi(d.pathname)}.${c}`, d;
}
async function Lv(r, a) {
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
function Dv(r) {
  return r == null ? !1 : r.href == null ? r.rel === "preload" && typeof r.imageSrcSet == "string" && typeof r.imageSizes == "string" : typeof r.rel == "string" && typeof r.href == "string";
}
async function zv(r, a, i) {
  let c = await Promise.all(
    r.map(async (d) => {
      let f = a.routes[d.route.id];
      if (f) {
        let p = await Lv(f, i);
        return p.links ? p.links() : [];
      }
      return [];
    })
  );
  return Wv(
    c.flat(1).filter(Dv).filter((d) => d.rel === "stylesheet" || d.rel === "preload").map(
      (d) => d.rel === "stylesheet" ? { ...d, rel: "prefetch", as: "style" } : { ...d, rel: "prefetch" }
    )
  );
}
function lf(r, a, i, c, d, f) {
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
function Ov(r, a, { includeHydrateFallback: i } = {}) {
  return Fv(
    r.map((c) => {
      let d = a.routes[c.route.id];
      if (!d) return [];
      let f = [d.module];
      return d.clientActionModule && (f = f.concat(d.clientActionModule)), d.clientLoaderModule && (f = f.concat(d.clientLoaderModule)), i && d.hydrateFallbackModule && (f = f.concat(d.hydrateFallbackModule)), d.imports && (f = f.concat(d.imports)), f;
    }).flat(1)
  );
}
function Fv(r) {
  return [...new Set(r)];
}
function Hv(r) {
  let a = {}, i = Object.keys(r).sort();
  for (let c of i)
    a[c] = r[c];
  return a;
}
function Wv(r, a) {
  let i = /* @__PURE__ */ new Set();
  return new Set(a), r.reduce((c, d) => {
    let f = JSON.stringify(Hv(d));
    return i.has(f) || (i.add(f), c.push({ key: f, link: d })), c;
  }, []);
}
function Hl() {
  let r = v.useContext(Mr);
  return Fl(
    r,
    "You must render this element inside a <DataRouterContext.Provider> element"
  ), r;
}
function Bv() {
  let r = v.useContext(di);
  return Fl(
    r,
    "You must render this element inside a <DataRouterStateContext.Provider> element"
  ), r;
}
var Wl = v.createContext(void 0);
Wl.displayName = "FrameworkContext";
function Bl() {
  let r = v.useContext(Wl);
  return Fl(
    r,
    "You must render this element inside a <HydratedRouter> element"
  ), r;
}
function Uv(r, a) {
  let i = v.useContext(Wl), [c, d] = v.useState(!1), [f, p] = v.useState(!1), { onFocus: h, onBlur: g, onMouseEnter: w, onMouseLeave: y, onTouchStart: _ } = a, S = v.useRef(null);
  v.useEffect(() => {
    if (r === "render" && p(!0), r === "viewport") {
      let C = (A) => {
        A.forEach((H) => {
          p(H.isIntersecting);
        });
      }, N = new IntersectionObserver(C, { threshold: 0.5 });
      return S.current && N.observe(S.current), () => {
        N.disconnect();
      };
    }
  }, [r]), v.useEffect(() => {
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
  }, R = () => {
    d(!1), p(!1);
  };
  return i ? r !== "intent" ? [f, S, {}] : [
    f,
    S,
    {
      onFocus: Rs(h, j),
      onBlur: Rs(g, R),
      onMouseEnter: Rs(w, j),
      onMouseLeave: Rs(y, R),
      onTouchStart: Rs(_, j)
    }
  ] : [!1, S, {}];
}
function Rs(r, a) {
  return (i) => {
    r && r(i), i.defaultPrevented || a(i);
  };
}
function Vv({ page: r, ...a }) {
  let i = sv(), { router: c } = Hl(), d = v.useMemo(
    () => Pf(c.routes, r, c.basename),
    [c.routes, r, c.basename]
  );
  return d ? i ? /* @__PURE__ */ v.createElement(Qv, { page: r, matches: d, ...a }) : /* @__PURE__ */ v.createElement(Kv, { page: r, matches: d, ...a }) : null;
}
function qv(r) {
  let { manifest: a, routeModules: i } = Bl(), [c, d] = v.useState([]);
  return v.useEffect(() => {
    let f = !1;
    return zv(r, a, i).then(
      (p) => {
        f || d(p);
      }
    ), () => {
      f = !0;
    };
  }, [r, a, i]), c;
}
function Qv({
  page: r,
  matches: a,
  ...i
}) {
  let c = yt(), { future: d } = Bl(), { basename: f } = Hl(), p = v.useMemo(() => {
    if (r === c.pathname + c.search + c.hash)
      return [];
    let h = Vf(
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
function Kv({
  page: r,
  matches: a,
  ...i
}) {
  let c = yt(), { future: d, manifest: f, routeModules: p } = Bl(), { basename: h } = Hl(), { loaderData: g, matches: w } = Bv(), y = v.useMemo(
    () => lf(
      r,
      a,
      w,
      f,
      c,
      "data"
    ),
    [r, a, w, f, c]
  ), _ = v.useMemo(
    () => lf(
      r,
      a,
      w,
      f,
      c,
      "assets"
    ),
    [r, a, w, f, c]
  ), S = v.useMemo(() => {
    if (r === c.pathname + c.search + c.hash)
      return [];
    let C = /* @__PURE__ */ new Set(), N = !1;
    if (a.forEach((H) => {
      var F;
      let b = f.routes[H.route.id];
      !b || !b.hasLoader || (!y.some((B) => B.route.id === H.route.id) && H.route.id in g && ((F = p[H.route.id]) != null && F.shouldRevalidate) || b.hasClientLoader ? N = !0 : C.add(H.route.id));
    }), C.size === 0)
      return [];
    let A = Vf(
      r,
      h,
      d.v8_trailingSlashAwareDataRequests,
      "data"
    );
    return N && C.size > 0 && A.searchParams.set(
      "_routes",
      a.filter((H) => C.has(H.route.id)).map((H) => H.route.id).join(",")
    ), [A.pathname + A.search];
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
  ]), j = v.useMemo(
    () => Ov(_, f),
    [_, f]
  ), R = qv(_);
  return /* @__PURE__ */ v.createElement(v.Fragment, null, S.map((C) => /* @__PURE__ */ v.createElement("link", { key: C, rel: "prefetch", as: "fetch", href: C, ...i })), j.map((C) => /* @__PURE__ */ v.createElement("link", { key: C, rel: "modulepreload", href: C, ...i })), R.map(({ key: C, link: N }) => (
    // these don't spread `linkProps` because they are full link descriptors
    // already with their own props
    /* @__PURE__ */ v.createElement(
      "link",
      {
        key: C,
        nonce: i.nonce,
        ...N,
        crossOrigin: N.crossOrigin ?? i.crossOrigin
      }
    )
  )));
}
function Yv(...r) {
  return (a) => {
    r.forEach((i) => {
      typeof i == "function" ? i(a) : i != null && (i.current = a);
    });
  };
}
var Gv = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u";
try {
  Gv && (window.__reactRouterVersion = // @ts-expect-error
  "7.17.0");
} catch {
}
function Jv({
  basename: r,
  children: a,
  useTransitions: i,
  window: c
}) {
  let d = v.useRef();
  d.current == null && (d.current = Ph({ window: c, v5Compat: !0 }));
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
    Ev,
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
var qf = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i, Qf = v.forwardRef(
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
    preventScrollReset: _,
    viewTransition: S,
    defaultShouldRevalidate: j,
    ...R
  }, C) {
    let { basename: N, navigator: A, useTransitions: H } = v.useContext(jt), b = typeof y == "string" && qf.test(y), F = If(y, N);
    y = F.to;
    let B = dv(y, { relative: d }), M = yt(), X = null;
    if (h) {
      let ve = ci(
        h,
        [],
        M.mask ? M.mask.pathname : "/",
        !0
      );
      N !== "/" && (ve.pathname = ve.pathname === "/" ? N : Ht([N, ve.pathname])), X = A.createHref(ve);
    }
    let [U, G, pe] = Uv(
      c,
      R
    ), ce = ey(y, {
      replace: p,
      mask: h,
      state: g,
      target: w,
      preventScrollReset: _,
      relative: d,
      viewTransition: S,
      defaultShouldRevalidate: j,
      useTransitions: H
    });
    function Ee(ve) {
      a && a(ve), ve.defaultPrevented || ce(ve);
    }
    let je = !(F.isExternal || f), me = (
      // eslint-disable-next-line jsx-a11y/anchor-has-content
      /* @__PURE__ */ v.createElement(
        "a",
        {
          ...R,
          ...pe,
          href: (je ? X : void 0) || F.absoluteURL || B,
          onClick: je ? Ee : a,
          ref: Yv(C, G),
          target: w,
          "data-discover": !b && i === "render" ? "true" : void 0
        }
      )
    );
    return U && !b ? /* @__PURE__ */ v.createElement(v.Fragment, null, me, /* @__PURE__ */ v.createElement(Vv, { page: B })) : me;
  }
);
Qf.displayName = "Link";
var vt = v.forwardRef(
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
    let _ = Os(p, { relative: w.relative }), S = yt(), j = v.useContext(di), { navigator: R, basename: C } = v.useContext(jt), N = j != null && // Conditional usage is OK here because the usage of a data router is static
    // eslint-disable-next-line react-hooks/rules-of-hooks
    oy(_) && h === !0, A = R.encodeLocation ? R.encodeLocation(_).pathname : _.pathname, H = S.pathname, b = j && j.navigation && j.navigation.location ? j.navigation.location.pathname : null;
    i || (H = H.toLowerCase(), b = b ? b.toLowerCase() : null, A = A.toLowerCase()), b && C && (b = un(b, C) || b);
    const F = A !== "/" && A.endsWith("/") ? A.length - 1 : A.length;
    let B = H === A || !d && H.startsWith(A) && H.charAt(F) === "/", M = b != null && (b === A || !d && b.startsWith(A) && b.charAt(A.length) === "/"), X = {
      isActive: B,
      isPending: M,
      isTransitioning: N
    }, U = B ? a : void 0, G;
    typeof c == "function" ? G = c(X) : G = [
      c,
      B ? "active" : null,
      M ? "pending" : null,
      N ? "transitioning" : null
    ].filter(Boolean).join(" ");
    let pe = typeof f == "function" ? f(X) : f;
    return /* @__PURE__ */ v.createElement(
      Qf,
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
vt.displayName = "NavLink";
var Xv = v.forwardRef(
  ({
    discover: r = "render",
    fetcherKey: a,
    navigate: i,
    reloadDocument: c,
    replace: d,
    state: f,
    method: p = ni,
    action: h,
    onSubmit: g,
    relative: w,
    preventScrollReset: y,
    viewTransition: _,
    defaultShouldRevalidate: S,
    ...j
  }, R) => {
    let { useTransitions: C } = v.useContext(jt), N = ry(), A = sy(h, { relative: w }), H = p.toLowerCase() === "get" ? "get" : "post", b = typeof h == "string" && qf.test(h), F = (B) => {
      if (g && g(B), B.defaultPrevented) return;
      B.preventDefault();
      let M = B.nativeEvent.submitter, X = (M == null ? void 0 : M.getAttribute("formmethod")) || p, U = () => N(M || B.currentTarget, {
        fetcherKey: a,
        method: X,
        navigate: i,
        replace: d,
        state: f,
        relative: w,
        preventScrollReset: y,
        viewTransition: _,
        defaultShouldRevalidate: S
      });
      C && i !== !1 ? v.startTransition(() => U()) : U();
    };
    return /* @__PURE__ */ v.createElement(
      "form",
      {
        ref: R,
        method: H,
        action: A,
        onSubmit: c ? g : F,
        ...j,
        "data-discover": !b && r === "render" ? "true" : void 0
      }
    );
  }
);
Xv.displayName = "Form";
function Zv(r) {
  return `${r} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function Kf(r) {
  let a = v.useContext(Mr);
  return $e(a, Zv(r)), a;
}
function ey(r, {
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
  let y = Dl(), _ = yt(), S = Os(r, { relative: p });
  return v.useCallback(
    (j) => {
      if (bv(j, a)) {
        j.preventDefault();
        let R = i !== void 0 ? i : Ls(_) === Ls(S), C = () => y(r, {
          replace: R,
          mask: c,
          state: d,
          preventScrollReset: f,
          relative: p,
          viewTransition: h,
          defaultShouldRevalidate: g
        });
        w ? v.startTransition(() => C()) : C();
      }
    },
    [
      _,
      y,
      S,
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
var ty = 0, ny = () => `__${String(++ty)}__`;
function ry() {
  let { router: r } = Kf(
    "useSubmit"
    /* UseSubmit */
  ), { basename: a } = v.useContext(jt), i = Sv(), c = r.fetch, d = r.navigate;
  return v.useCallback(
    async (f, p = {}) => {
      let { action: h, method: g, encType: w, formData: y, body: _ } = Iv(
        f,
        a
      );
      if (p.navigate === !1) {
        let S = p.fetcherKey || ny();
        await c(S, i, p.action || h, {
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
          fromRouteId: i,
          flushSync: p.flushSync,
          viewTransition: p.viewTransition
        });
    },
    [c, d, a, i]
  );
}
function sy(r, { relative: a } = {}) {
  let { basename: i } = v.useContext(jt), c = v.useContext(Gt);
  $e(c, "useFormAction must be used inside a RouteContext");
  let [d] = c.matches.slice(-1), f = { ...Os(r || ".", { relative: a }) }, p = yt();
  if (r == null) {
    f.search = p.search;
    let h = new URLSearchParams(f.search), g = h.getAll("index");
    if (g.some((y) => y === "")) {
      h.delete("index"), g.filter((_) => _).forEach((_) => h.append("index", _));
      let y = h.toString();
      f.search = y ? `?${y}` : "";
    }
  }
  return (!r || r === ".") && d.route.index && (f.search = f.search ? f.search.replace(/^\?/, "?index&") : "?index"), i !== "/" && (f.pathname = f.pathname === "/" ? i : Ht([i, f.pathname])), Ls(f);
}
function oy(r, { relative: a } = {}) {
  let i = v.useContext(zf);
  $e(
    i != null,
    "`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?"
  );
  let { basename: c } = Kf(
    "useViewTransitionState"
    /* useViewTransitionState */
  ), d = Os(r, { relative: a });
  if (!i.isTransitioning)
    return !1;
  let f = un(i.currentLocation.pathname, c) || i.currentLocation.pathname, p = un(i.nextLocation.pathname, c) || i.nextLocation.pathname;
  return si(d.pathname, p) != null || si(d.pathname, f) != null;
}
var Yf = Rf();
/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Gf = (...r) => r.filter((a, i, c) => !!a && a.trim() !== "" && c.indexOf(a) === i).join(" ").trim();
/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const iy = (r) => r.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ay = (r) => r.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (a, i, c) => c ? c.toUpperCase() : i.toLowerCase()
);
/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const uf = (r) => {
  const a = ay(r);
  return a.charAt(0).toUpperCase() + a.slice(1);
};
/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var yl = {
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
const ly = (r) => {
  for (const a in r)
    if (a.startsWith("aria-") || a === "role" || a === "title")
      return !0;
  return !1;
}, uy = v.createContext({}), cy = () => v.useContext(uy), dy = v.forwardRef(
  ({ color: r, size: a, strokeWidth: i, absoluteStrokeWidth: c, className: d = "", children: f, iconNode: p, ...h }, g) => {
    const {
      size: w = 24,
      strokeWidth: y = 2,
      absoluteStrokeWidth: _ = !1,
      color: S = "currentColor",
      className: j = ""
    } = cy() ?? {}, R = c ?? _ ? Number(i ?? y) * 24 / Number(a ?? w) : i ?? y;
    return v.createElement(
      "svg",
      {
        ref: g,
        ...yl,
        width: a ?? w ?? yl.width,
        height: a ?? w ?? yl.height,
        stroke: r ?? S,
        strokeWidth: R,
        className: Gf("lucide", j, d),
        ...!f && !ly(h) && { "aria-hidden": "true" },
        ...h
      },
      [
        ...p.map(([C, N]) => v.createElement(C, N)),
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
const Te = (r, a) => {
  const i = v.forwardRef(
    ({ className: c, ...d }, f) => v.createElement(dy, {
      ref: f,
      iconNode: a,
      className: Gf(
        `lucide-${iy(uf(r))}`,
        `lucide-${r}`,
        c
      ),
      ...d
    })
  );
  return i.displayName = uf(r), i;
};
/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const fy = [
  ["circle", { cx: "12", cy: "13", r: "8", key: "3y4lt7" }],
  ["path", { d: "M12 9v4l2 2", key: "1c63tq" }],
  ["path", { d: "M5 3 2 6", key: "18tl5t" }],
  ["path", { d: "m22 6-3-3", key: "1opdir" }],
  ["path", { d: "M6.38 18.7 4 21", key: "17xu3x" }],
  ["path", { d: "M17.64 18.67 20 21", key: "kv2oe2" }]
], Jf = Te("alarm-clock", fy);
/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const py = [
  ["path", { d: "m12 19-7-7 7-7", key: "1l729n" }],
  ["path", { d: "M19 12H5", key: "x3x0zl" }]
], my = Te("arrow-left", py);
/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const hy = [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "m12 5 7 7-7 7", key: "xquz4c" }]
], vy = Te("arrow-right", hy);
/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const yy = [
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
], Ul = Te("baby", yy);
/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const gy = [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]], _y = Te("check", gy);
/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const xy = [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]], Xf = Te("chevron-down", xy);
/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const wy = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }]
], Sy = Te("circle-check", wy);
/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ky = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3", key: "1u773s" }],
  ["path", { d: "M12 17h.01", key: "p32p05" }]
], jy = Te("circle-question-mark", ky);
/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Cy = [["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }]], Ey = Te("circle", Cy);
/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ny = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M12 6v6h4", key: "135r8i" }]
], Ty = Te("clock-3", Ny);
/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ry = [
  [
    "path",
    { d: "M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3", key: "11bfej" }
  ]
], Py = Te("command", Ry);
/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ay = [
  ["path", { d: "M12 15V3", key: "m9g1x1" }],
  ["path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4", key: "ih7n3h" }],
  ["path", { d: "m7 10 5 5 5-5", key: "brsn70" }]
], Zf = Te("download", Ay);
/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const by = [
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
], $y = Te("file-code-corner", by);
/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const My = [
  ["path", { d: "M15 6a9 9 0 0 0-9 9V3", key: "1cii5b" }],
  ["circle", { cx: "18", cy: "6", r: "3", key: "1h7g24" }],
  ["circle", { cx: "6", cy: "18", r: "3", key: "fqmcym" }]
], Iy = Te("git-branch", My);
/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ly = [
  [
    "path",
    {
      d: "M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3",
      key: "1xhozi"
    }
  ]
], Dy = Te("headphones", Ly);
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
], Oy = Te("layers", zy);
/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Fy = [
  ["rect", { width: "7", height: "7", x: "3", y: "3", rx: "1", key: "1g98yp" }],
  ["rect", { width: "7", height: "7", x: "14", y: "3", rx: "1", key: "6d4xhi" }],
  ["rect", { width: "7", height: "7", x: "14", y: "14", rx: "1", key: "nxv5o0" }],
  ["rect", { width: "7", height: "7", x: "3", y: "14", rx: "1", key: "1bb6yr" }]
], Hy = Te("layout-grid", Fy);
/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Wy = [
  ["path", { d: "M4 5h16", key: "1tepv9" }],
  ["path", { d: "M4 12h16", key: "1lakjw" }],
  ["path", { d: "M4 19h16", key: "1djgab" }]
], ep = Te("menu", Wy);
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
      d: "M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719",
      key: "1sd12s"
    }
  ]
], Uy = Te("message-circle", By);
/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Vy = [
  ["path", { d: "M16.247 7.761a6 6 0 0 1 0 8.478", key: "1fwjs5" }],
  ["path", { d: "M19.075 4.933a10 10 0 0 1 0 14.134", key: "ehdyv1" }],
  ["path", { d: "M4.925 19.067a10 10 0 0 1 0-14.134", key: "1q22gi" }],
  ["path", { d: "M7.753 16.239a6 6 0 0 1 0-8.478", key: "r2q7qm" }],
  ["circle", { cx: "12", cy: "12", r: "2", key: "1c9p78" }]
], qy = Te("radio", Vy);
/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Qy = [
  ["path", { d: "m21 21-4.34-4.34", key: "14j7rj" }],
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }]
], Ky = Te("search", Qy);
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
      d: "M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915",
      key: "1i5ecw"
    }
  ],
  ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }]
], tp = Te("settings", Yy);
/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Gy = [
  ["path", { d: "M10 5H3", key: "1qgfaw" }],
  ["path", { d: "M12 19H3", key: "yhmn1j" }],
  ["path", { d: "M14 3v4", key: "1sua03" }],
  ["path", { d: "M16 17v4", key: "1q0r14" }],
  ["path", { d: "M21 12h-9", key: "1o4lsq" }],
  ["path", { d: "M21 19h-5", key: "1rlt1p" }],
  ["path", { d: "M21 5h-7", key: "1oszz2" }],
  ["path", { d: "M8 10v4", key: "tgpxqk" }],
  ["path", { d: "M8 12H3", key: "a7s4jb" }]
], gl = Te("sliders-horizontal", Gy);
/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Jy = [
  ["rect", { width: "16", height: "20", x: "4", y: "2", rx: "2", key: "1nb95v" }],
  ["path", { d: "M12 6h.01", key: "1vi96p" }],
  ["circle", { cx: "12", cy: "14", r: "4", key: "1jruaj" }],
  ["path", { d: "M12 14h.01", key: "1etili" }]
], Vl = Te("speaker", Jy);
/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Xy = [
  ["line", { x1: "10", x2: "14", y1: "2", y2: "2", key: "14vaq8" }],
  ["line", { x1: "12", x2: "15", y1: "14", y2: "11", key: "17fdiu" }],
  ["circle", { cx: "12", cy: "14", r: "8", key: "1e1u0o" }]
], Zy = Te("timer", Xy);
/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const eg = [
  [
    "path",
    {
      d: "m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",
      key: "wmoenq"
    }
  ],
  ["path", { d: "M12 9v4", key: "juzpu7" }],
  ["path", { d: "M12 17h.01", key: "p32p05" }]
], tg = Te("triangle-alert", eg);
/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ng = [
  ["rect", { width: "8", height: "8", x: "3", y: "3", rx: "2", key: "by2w9f" }],
  ["path", { d: "M7 11v4a2 2 0 0 0 2 2h4", key: "xkn7yn" }],
  ["rect", { width: "8", height: "8", x: "13", y: "13", rx: "2", key: "1cgmvn" }]
], cf = Te("workflow", ng);
/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const rg = [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
], np = Te("x", rg), sg = { ru: "Тема", en: "Theme" }, og = { ru: "Тёмная", en: "Dark" }, ig = { ru: "Светлая", en: "Light" }, ag = { ru: "Токен", en: "Token" }, lg = { ru: "Тип действия", en: "Action type" }, ug = { ru: "Ветка диалога", en: "Conversation branch" }, cg = { ru: "Текст ответа", en: "Response text" }, dg = { ru: "Команда", en: "Command" }, fg = { ru: "Название переменной", en: "Variable name" }, pg = { ru: "Основная команда", en: "Main command" }, mg = { ru: "Второстепенная команда", en: "Secondary command" }, hg = { ru: "Прямая команда", en: "Direct command" }, vg = { ru: "Дополнительные фразы", en: "Additional phrases" }, yg = { ru: "Удалённый сервер", en: "Remote server" }, gg = { ru: "Вложенные команды", en: "Nested commands" }, _g = { ru: "Тип вложенного значения", en: "Nested value type" }, xg = { ru: "Тип данных", en: "Data type" }, wg = { ru: "Вручную", en: "Manual" }, Sg = { ru: "Любой", en: "Any" }, kg = { ru: "Любой", en: "Any" }, jg = { ru: "Текст", en: "Text" }, Cg = { ru: "Число", en: "Number" }, Eg = { ru: "Дата", en: "Date" }, Ng = { ru: "Время", en: "Time" }, Tg = {
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
  Theme: sg,
  dark: og,
  light: ig,
  "Client ID": { ru: "Идентификатор клиента", en: "Client ID" },
  "Is admin": { ru: "Администратор", en: "Administrator" },
  "Active remout": { ru: "Удалённый сервер", en: "Remote server" },
  "Enable API (/api/dialog/commands, /api/dialog/events, /api/dialog/event)": { ru: "Включить API (/api/dialog/commands, /api/dialog/events, /api/dialog/event)", en: "Enable API (/api/dialog/commands, /api/dialog/events, /api/dialog/event)" },
  "API Commands Token": { ru: "Токен API команд", en: "Commands API token" },
  "Global music timer": { ru: "Звук таймера по умолчанию", en: "Default timer sound" },
  "Global music alarm": { ru: "Звук будильника по умолчанию", en: "Default alarm sound" },
  "Timer / Alarm": { ru: "Таймеры и будильники", en: "Timers and alarms" },
  "Base URL": { ru: "Адрес сервера", en: "Server URL" },
  Token: ag,
  actionType: lg,
  actionTypeComponent: ug,
  voiceResponse: cg,
  uuid: dg,
  mappingType: fg,
  parent_type: pg,
  children_type: mg,
  children_direct_type: hg,
  "Язык интерфейса": { ru: "Язык интерфейса", en: "Interface language" },
  subVoiceCommands: vg,
  "Hide password": { ru: "Скрыть пароль", en: "Hide password" },
  "Show password": { ru: "Показать пароль", en: "Show password" },
  Условие: { ru: "Условие", en: "Condition" },
  Remote: yg,
  subDirectControl: gg,
  subMappingType: _g,
  valueType: xg,
  manual: wg,
  "mappingType:": { ru: "Тип значения:", en: "Value type:" },
  "Редактировать прямую команду": { ru: "Редактировать прямую команду", en: "Edit direct command" },
  "Создать прямую команду": { ru: "Создать прямую команду", en: "Create direct command" },
  all: Sg,
  All: kg,
  string: jg,
  int: Cg,
  date: Eg,
  time: Ng,
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
  Главная: { ru: "Главная", en: "Home" }
}, rp = "ha-dialog-ui-language";
let ql = localStorage.getItem(rp) === "en" ? "en" : "ru";
const El = /* @__PURE__ */ new Set();
function Rg(r) {
  ql = r, localStorage.setItem(rp, r), El.forEach((a) => a());
}
function sp() {
  return v.useSyncExternalStore((r) => (El.add(r), () => {
    El.delete(r);
  }), () => ql);
}
function x(r) {
  if (typeof r != "string") return r;
  const a = Tg[r];
  return (a == null ? void 0 : a[ql]) ?? r;
}
const Pg = "_button_180pj_1", Ag = "_full_180pj_32", bg = "_primary_180pj_37", $g = "_secondary_180pj_49", Mg = "_ghost_180pj_61", Ig = "_remove_180pj_83", _l = {
  button: Pg,
  full: Ag,
  primary: bg,
  secondary: $g,
  ghost: Mg,
  remove: Ig
}, se = ({
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
        ${_l.button}
        ${_l[a]}
        ${i ? _l.full : ""}
        ${f}
      `,
    children: [
      c,
      r,
      d
    ]
  }
), Nl = "ha-dialog-ui-api-enabled-change", op = v.createContext(!1), Ql = () => v.useContext(op), ip = v.createContext(!1), Kl = () => v.useContext(ip), ii = "ha-dialog-ui-remote-server-change", ap = v.createContext(null), Ir = () => v.useContext(ap), Ze = (r = 768) => {
  const [a, i] = v.useState(
    window.innerWidth <= r
  );
  return v.useEffect(() => {
    const c = window.matchMedia(`(max-width: ${r}px)`), d = (f) => {
      i(f.matches);
    };
    return i(c.matches), c.addEventListener("change", d), () => c.removeEventListener("change", d);
  }, [r]), a;
}, Lg = "_tabs_1vwxg_1", Dg = "_dropdown_1vwxg_16", zg = "_tab_1vwxg_1", Og = "_active_1vwxg_49", Fg = "_menu_1vwxg_59", Hg = "_chevron_1vwxg_76", Wg = "_menuItem_1vwxg_84", fe = {
  tabs: Lg,
  dropdown: Dg,
  tab: zg,
  active: Og,
  menu: Fg,
  chevron: Hg,
  menuItem: Wg
}, gt = () => {
  const r = Ze(), a = Ql(), i = Kl(), c = Ir(), d = yt(), [f, p] = v.useState(!1), h = v.useRef(null), g = v.useRef(null), w = v.useId();
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
    return /* @__PURE__ */ o.jsxs("div", { className: fe.tabs, children: [
      c === !0 && /* @__PURE__ */ o.jsxs(
        vt,
        {
          to: "/scripts",
          className: ({ isActive: y }) => y ? `${fe.tab} ${fe.active}` : fe.tab,
          children: [
            /* @__PURE__ */ o.jsx($y, { size: 16, strokeWidth: 2 }),
            /* @__PURE__ */ o.jsx("span", { children: x(c ? "Действия удалённых команд" : "Запуск скриптов") })
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
            y.key === "Escape" && f && (y.stopPropagation(), p(!1), (_ = g.current) == null || _.focus());
          },
          children: [
            /* @__PURE__ */ o.jsxs(
              "button",
              {
                type: "button",
                ref: g,
                className: `${fe.tab} ${d.pathname.startsWith("/commands") ? fe.active : ""}`,
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
                  /* @__PURE__ */ o.jsx(Py, { size: 16, strokeWidth: 2 }),
                  /* @__PURE__ */ o.jsx("span", { children: x("Команды") }),
                  /* @__PURE__ */ o.jsx(Xf, { size: 14, className: fe.chevron })
                ]
              }
            ),
            f && /* @__PURE__ */ o.jsxs(
              "nav",
              {
                id: w,
                className: fe.menu,
                "aria-label": x("Разделы команд"),
                onClick: () => p(!1),
                children: [
                  /* @__PURE__ */ o.jsx(
                    vt,
                    {
                      to: "/commands/main",
                      className: ({ isActive: y }) => y ? `${fe.menuItem} ${fe.active}` : fe.menuItem,
                      children: x("Основные команды")
                    }
                  ),
                  /* @__PURE__ */ o.jsx(
                    vt,
                    {
                      to: "/commands/sub",
                      className: ({ isActive: y }) => y ? `${fe.menuItem} ${fe.active}` : fe.menuItem,
                      children: x("Второстепенные команды")
                    }
                  ),
                  /* @__PURE__ */ o.jsx(
                    vt,
                    {
                      to: "/commands/direct/main",
                      className: ({ isActive: y }) => y ? `${fe.menuItem} ${fe.active}` : fe.menuItem,
                      children: x("Прямые команды")
                    }
                  ),
                  /* @__PURE__ */ o.jsx(
                    vt,
                    {
                      to: "/commands/settings",
                      className: ({ isActive: y }) => y ? `${fe.menuItem} ${fe.active}` : fe.menuItem,
                      children: x("Ответы по умолчанию")
                    }
                  ),
                  i && /* @__PURE__ */ o.jsx(
                    vt,
                    {
                      to: "/commands/whisper",
                      className: ({ isActive: y }) => y ? `${fe.menuItem} ${fe.active}` : fe.menuItem,
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
        vt,
        {
          to: "/timer",
          className: ({ isActive: y }) => y ? `${fe.tab} ${fe.active}` : fe.tab,
          children: [
            /* @__PURE__ */ o.jsx(Zy, { size: 16, strokeWidth: 2 }),
            /* @__PURE__ */ o.jsx("span", { children: x("Таймеры") })
          ]
        }
      ),
      /* @__PURE__ */ o.jsxs(
        vt,
        {
          to: "/alarm",
          className: ({ isActive: y }) => y ? `${fe.tab} ${fe.active}` : fe.tab,
          children: [
            /* @__PURE__ */ o.jsx(Jf, { size: 16, strokeWidth: 2 }),
            /* @__PURE__ */ o.jsx("span", { children: x("Будильники") })
          ]
        }
      ),
      /* @__PURE__ */ o.jsxs(vt, { to: "/monitor", className: ({ isActive: y }) => y ? `${fe.tab} ${fe.active}` : fe.tab, children: [
        /* @__PURE__ */ o.jsx(Ul, { size: 16 }),
        /* @__PURE__ */ o.jsx("span", { children: x("Радионяня") })
      ] }),
      i && /* @__PURE__ */ o.jsxs(vt, { to: "/downloads", className: ({ isActive: y }) => y ? `${fe.tab} ${fe.active}` : fe.tab, children: [
        /* @__PURE__ */ o.jsx(Zf, { size: 16 }),
        /* @__PURE__ */ o.jsx("span", { children: x("Импорт и экспорт") })
      ] }),
      a && i && /* @__PURE__ */ o.jsx(vt, { to: "/logs", className: ({ isActive: y }) => y ? `${fe.tab} ${fe.active}` : fe.tab, children: x("Логи") }),
      /* @__PURE__ */ o.jsxs(
        vt,
        {
          to: "/settings",
          className: ({ isActive: y }) => y ? `${fe.tab} ${fe.active}` : fe.tab,
          children: [
            /* @__PURE__ */ o.jsx(tp, { size: 16, strokeWidth: 2 }),
            /* @__PURE__ */ o.jsx("span", { children: x("Настройки") })
          ]
        }
      )
    ] });
}, Ps = "dialogCustomUiOverlay", Jo = [], ai = /* @__PURE__ */ new Set();
let Bg = 0, Pr = null, Tl = !1;
function Ug() {
  Tl = !0, window.addEventListener("popstate", () => {
    Tl = !1;
    const r = [...ai];
    ai.clear(), queueMicrotask(() => r.forEach((a) => a()));
  }, { once: !0 }), history.back();
}
function lp(r, a) {
  const i = Ze(), c = v.useRef(a);
  c.current = a, v.useEffect(() => {
    if (!r || !i) return;
    const d = `overlay-${++Bg}`;
    let f = !1, p = !1, h = !1;
    const g = () => {
      var y;
      Jo.at(-1) !== d || ((y = history.state) == null ? void 0 : y[Ps]) === d || (f = !0, c.current());
    }, w = () => {
      var _;
      if (h) return;
      p = !0, Jo.push(d);
      const y = { ...history.state, [Ps]: d };
      Pr && ((_ = history.state) == null ? void 0 : _[Ps]) === Pr ? (history.replaceState(y, ""), Pr = null) : history.pushState(y, ""), window.addEventListener("popstate", g);
    };
    return Tl ? ai.add(w) : w(), () => {
      var y;
      h = !0, ai.delete(w), window.removeEventListener("popstate", g), p && (Jo.splice(Jo.indexOf(d), 1), !f && ((y = history.state) == null ? void 0 : y[Ps]) === d && (Pr = d, queueMicrotask(() => {
        var _;
        Pr === d && (Pr = null, ((_ = history.state) == null ? void 0 : _[Ps]) === d && Ug());
      })));
    };
  }, [r, i]);
}
const Vg = "_overlay_tb5vv_1", qg = "_sheet_tb5vv_11", Qg = "_handle_tb5vv_21", Kn = {
  overlay: Vg,
  sheet: qg,
  handle: Qg
}, Yl = ({
  open: r,
  className: a = "",
  labelledBy: i,
  onClose: c,
  children: d
}) => {
  lp(r, c);
  const [f, p] = v.useState(r), [h, g] = v.useState(r), w = v.useRef(0), y = v.useRef(0), [_, S] = v.useState(0);
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
  const j = (N) => {
    w.current = N.touches[0].clientY;
  }, R = (N) => {
    y.current = N.touches[0].clientY;
    const A = y.current - w.current;
    A > 0 && S(A);
  }, C = () => {
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
      className: `${Kn.overlay} ${h ? Kn.visible : ""} ${a}`,
      onClick: c,
      children: /* @__PURE__ */ o.jsxs(
        "section",
        {
          className: `${Kn.sheet} ${h ? Kn.open : ""}`,
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
                className: Kn.handleArea,
                onTouchStart: j,
                onTouchMove: R,
                onTouchEnd: C,
                children: /* @__PURE__ */ o.jsx("div", { className: Kn.handle })
              }
            ),
            /* @__PURE__ */ o.jsx("div", { className: Kn.content, children: d })
          ]
        }
      )
    }
  ) : null;
}, Kg = "_overlay_avpnk_1", Yg = "_heading_avpnk_16", Gg = "_close_avpnk_32", Jg = "_nav_avpnk_45", Xg = "_item_avpnk_51", Zg = "_icon_avpnk_70", e_ = "_label_avpnk_78", t_ = "_arrow_avpnk_86", n_ = "_active_avpnk_91", an = {
  overlay: Kg,
  heading: Yg,
  close: Gg,
  nav: Jg,
  item: Xg,
  icon: Zg,
  label: e_,
  arrow: t_,
  active: n_
};
function r_({ open: r, onClose: a }) {
  const i = Ql(), c = Kl(), d = Ir(), { pathname: f } = yt(), p = v.useId(), h = v.useRef(null), g = [
    ...d === !1 ? [
      { to: "/commands/main", label: "Основные команды", icon: Uy },
      { to: "/commands/sub", label: "Второстепенные команды", icon: Iy },
      { to: "/commands/direct/main", label: "Прямые команды", icon: cf },
      { to: "/commands/direct/template", label: "Вложенные команды", icon: Oy },
      { to: "/commands/settings", label: "Ответы по умолчанию", icon: gl },
      ...c ? [{ to: "/commands/whisper", label: "Промпт распознавания", icon: gl }] : []
    ] : d === !0 ? [{ to: "/scripts", label: "Действия удалённых команд", icon: cf }] : [],
    { to: "/timer", label: "Таймеры", icon: Ty },
    { to: "/alarm", label: "Будильники", icon: Jf },
    { to: "/monitor", label: "Радионяня", icon: Ul },
    ...c ? [{ to: "/downloads", label: "Импорт и экспорт", icon: Zf }] : [],
    ...i && c ? [{ to: "/logs", label: "Логи", icon: gl }] : [],
    { to: "/settings", label: "Настройки", icon: tp }
  ];
  return v.useEffect(() => {
    if (!r) return;
    const w = requestAnimationFrame(() => {
      var y, _, S;
      return (S = ((y = h.current) == null ? void 0 : y.querySelector('[aria-current="page"]')) ?? ((_ = h.current) == null ? void 0 : _.querySelector("a"))) == null ? void 0 : S.focus();
    });
    return () => cancelAnimationFrame(w);
  }, [r]), /* @__PURE__ */ o.jsx(Yl, { open: r, onClose: a, labelledBy: p, className: an.overlay, children: /* @__PURE__ */ o.jsxs("div", { ref: h, onKeyDown: (w) => {
    if (w.key !== "Tab") return;
    const y = [...h.current.querySelectorAll("button, a")], _ = y[0], S = y[y.length - 1];
    w.shiftKey && w.target === _ ? (w.preventDefault(), S.focus()) : !w.shiftKey && w.target === S && (w.preventDefault(), _.focus());
  }, children: [
    /* @__PURE__ */ o.jsxs("div", { className: an.heading, children: [
      /* @__PURE__ */ o.jsx("h2", { id: p, children: x("Разделы") }),
      /* @__PURE__ */ o.jsx("button", { type: "button", className: an.close, "aria-label": x("Закрыть меню разделов"), onClick: a, children: /* @__PURE__ */ o.jsx(np, { size: 20 }) })
    ] }),
    /* @__PURE__ */ o.jsx("nav", { className: an.nav, "aria-label": x("Навигация интеграции"), children: g.map(({ to: w, label: y, icon: _ }) => /* @__PURE__ */ o.jsxs(
      vt,
      {
        to: w,
        end: !0,
        className: ({ isActive: S }) => `${an.item} ${S ? an.active : ""}`,
        onClick: (S) => {
          f === w && S.preventDefault(), a();
        },
        children: [
          /* @__PURE__ */ o.jsx("span", { className: an.icon, children: /* @__PURE__ */ o.jsx(_, { size: 20, strokeWidth: 1.8 }) }),
          /* @__PURE__ */ o.jsx("span", { className: an.label, children: x(y) }),
          f === w ? /* @__PURE__ */ o.jsx(_y, { size: 18, "aria-hidden": "true" }) : /* @__PURE__ */ o.jsx(vy, { size: 16, className: an.arrow, "aria-hidden": "true" })
        ]
      },
      w
    )) })
  ] }) });
}
const s_ = "_search_1h7xe_1", o_ = {
  search: s_
};
function Lr({ value: r, onChange: a }) {
  return /* @__PURE__ */ o.jsxs("div", { className: o_.search, children: [
    /* @__PURE__ */ o.jsx(Ky, { size: 18, "aria-hidden": "true" }),
    /* @__PURE__ */ o.jsx(
      "input",
      {
        type: "search",
        "aria-label": x("Поиск по названию"),
        placeholder: x("Поиск по названию"),
        value: r,
        onChange: (i) => a(i.target.value)
      }
    )
  ] });
}
const i_ = "_header_1pxju_1", a_ = "_bar_1pxju_9", l_ = "_tools_1pxju_18", u_ = "_title_1pxju_31", c_ = "_menuButton_1pxju_38", d_ = "_active_1pxju_76", Yn = {
  header: i_,
  bar: a_,
  tools: l_,
  title: u_,
  menuButton: c_,
  active: d_
}, _t = ({ title: r = "", search: a, beforeSearch: i }) => {
  const c = Ze(), [d, f] = v.useState(!1), p = v.useRef(null), h = () => {
    var g;
    f(!1), (g = p.current) == null || g.focus();
  };
  return v.useEffect(() => {
    c || f(!1);
  }, [c]), /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
    /* @__PURE__ */ o.jsxs("header", { className: Yn.header, children: [
      /* @__PURE__ */ o.jsxs("div", { className: Yn.bar, children: [
        /* @__PURE__ */ o.jsx(
          "button",
          {
            type: "button",
            "aria-label": x("Открыть меню Home Assistant"),
            className: Yn.menuButton,
            onClick: (g) => g.currentTarget.dispatchEvent(new CustomEvent("hass-toggle-menu", { bubbles: !0, composed: !0 })),
            children: /* @__PURE__ */ o.jsx(ep, { size: 20 })
          }
        ),
        /* @__PURE__ */ o.jsx("h1", { className: Yn.title, children: x(r) }),
        /* @__PURE__ */ o.jsx(
          "button",
          {
            type: "button",
            ref: p,
            "aria-label": x("Открыть меню разделов"),
            "aria-haspopup": "dialog",
            "aria-expanded": d,
            className: `${Yn.menuButton} ${d ? Yn.active : ""}`,
            onClick: () => f(!0),
            children: /* @__PURE__ */ o.jsx(Hy, { size: 20 })
          }
        )
      ] }),
      c && (i || a) && /* @__PURE__ */ o.jsxs("div", { className: Yn.tools, children: [
        i,
        a && /* @__PURE__ */ o.jsx(Lr, { ...a })
      ] })
    ] }),
    c && /* @__PURE__ */ o.jsx(r_, { open: d, onClose: h })
  ] });
};
function f_({ retry: r }) {
  const a = rr();
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
          /* @__PURE__ */ o.jsx(gt, {}),
          /* @__PURE__ */ o.jsx(_t, { title: x("Панель диалога") })
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
              children: /* @__PURE__ */ o.jsx(ep, { size: 22 })
            }
          ),
          /* @__PURE__ */ o.jsx("nav", { "aria-label": x("Разделы панели"), children: [
            ["/", "Главная"],
            ["/timer", "Таймеры"],
            ["/alarm", "Будильники"],
            ["/monitor", "Радионяня"],
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
class up extends v.Component {
  constructor() {
    super(...arguments);
    Xe(this, "state", { failed: !1 });
    Xe(this, "retry", () => this.setState({ failed: !1 }));
    Xe(this, "routeChanged", () => {
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
    return this.state.failed ? /* @__PURE__ */ o.jsx(f_, { retry: this.retry }) : this.props.children;
  }
}
const p_ = "_loader_m2244_1", m_ = "_fullscreen_m2244_11", h_ = "_spinner_m2244_15", v_ = "_label_m2244_24", Xo = {
  loader: p_,
  fullscreen: m_,
  spinner: h_,
  label: v_
}, Dr = ({ label: r = "Загрузка...", fullscreen: a = !1 }) => /* @__PURE__ */ o.jsxs("div", { className: `${Xo.loader} ${a ? Xo.fullscreen : ""}`, role: "status", "aria-live": "polite", children: [
  /* @__PURE__ */ o.jsx("span", { className: Xo.spinner, "aria-hidden": "true" }),
  r && /* @__PURE__ */ o.jsx("span", { className: Xo.label, children: x(r) })
] }), y_ = "_error_fi1f1_1", g_ = {
  error: y_
}, Be = ({ error: r, retry: a, busy: i = !1 }) => r ? /* @__PURE__ */ o.jsxs("div", { role: "alert", className: g_.error, children: [
  /* @__PURE__ */ o.jsx("p", { children: x(r) }),
  a && /* @__PURE__ */ o.jsx(se, { variant: "secondary", disabled: i, onClick: a, children: x("Повторить загрузку") })
] }) : null, df = {
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
function Yt(r, a = "Не удалось выполнить операцию. Проверьте журнал Home Assistant и повторите попытку.") {
  return r && typeof r == "object" && "code" in r && typeof r.code == "string" ? (r.code === "monitor_error" || r.code === "whisper_prompt_error") && "message" in r && typeof r.message == "string" ? r.message : df[r.code] ?? a : r instanceof Error && /connection|network|fetch|disconnected/i.test(r.message) ? df.connection_lost : a;
}
function Wt() {
  const [r, a] = v.useState(null), [i, c] = v.useState(!1), [d, f] = v.useState(!1), p = v.useRef(0), h = v.useRef(null), g = v.useCallback(async (_, S = {}) => {
    if (S.exclusive && p.current > 0) return !1;
    p.current += 1, c(!0), a(null), f(!1);
    try {
      return await _(), h.current = null, !0;
    } catch (j) {
      return a(Yt(j, S.fallback)), h.current = S.retryable ? _ : null, f(!!S.retryable), !1;
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
const cp = v.createContext(null);
function lt() {
  const r = v.useContext(cp);
  if (!r)
    throw new Error(
      "DialogContext not initialized"
    );
  return r;
}
const __ = "_toast_1g76h_1", x_ = "_warning_1g76h_43", ff = {
  toast: __,
  warning: x_
};
function w_({ message: r, warning: a = !1, onClose: i }) {
  v.useEffect(() => {
    const d = setTimeout(i, 5e3);
    return () => clearTimeout(d);
  }, [r, a, i]);
  const c = a ? tg : Sy;
  return /* @__PURE__ */ o.jsxs("div", { role: "status", "aria-live": "polite", className: `${ff.toast} ${a ? ff.warning : ""}`, children: [
    /* @__PURE__ */ o.jsx(c, { size: 22, "aria-hidden": "true" }),
    /* @__PURE__ */ o.jsx("span", { children: r }),
    /* @__PURE__ */ o.jsx("button", { type: "button", "aria-label": x("Закрыть уведомление"), onClick: i, children: /* @__PURE__ */ o.jsx(np, { size: 18 }) })
  ] });
}
const dp = {
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
function fp(r) {
  var a;
  return (a = Object.entries(dp).find(([i]) => r === i || r === x(i))) == null ? void 0 : a[1];
}
function pi(r) {
  const a = x(dp["Название команды"]);
  return r ? `${a}
UUID: ${r}` : a;
}
const S_ = "_labelRow_1w41x_1", k_ = "_helpButton_1w41x_12", j_ = "_tooltip_1w41x_37", C_ = "_helpOverlay_1w41x_56", E_ = "_sheetContent_1w41x_60", Is = {
  labelRow: S_,
  helpButton: k_,
  tooltip: j_,
  helpOverlay: C_,
  sheetContent: E_
};
function Gl({ label: r, htmlFor: a, className: i, hint: c }) {
  const d = c ?? fp(r);
  return /* @__PURE__ */ o.jsxs("div", { className: Is.labelRow, children: [
    /* @__PURE__ */ o.jsx("label", { htmlFor: a, className: i, children: x(r) }),
    d && /* @__PURE__ */ o.jsx(Ds, { label: r, description: d })
  ] });
}
function Ds({ label: r, description: a = fp(r) ?? "" }) {
  var C, N;
  const i = Ze(), [c, d] = v.useState(!1), [f, p] = v.useState({ left: 12, top: 12 }), h = v.useRef(null), g = v.useRef(null), w = v.useRef(), y = v.useId(), _ = () => {
    var A;
    d(!1), i && ((A = h.current) == null || A.focus());
  }, S = () => {
    clearTimeout(w.current), d(!0);
  }, j = () => {
    w.current = setTimeout(() => d(!1), 150);
  };
  v.useEffect(() => () => clearTimeout(w.current), []), v.useEffect(() => {
    d(!1);
  }, [i]), v.useLayoutEffect(() => {
    if (!c || i || !h.current || !g.current) return;
    const A = h.current.getBoundingClientRect(), H = g.current.getBoundingClientRect();
    p({
      left: Math.max(12, Math.min(A.left, window.innerWidth - H.width - 12)),
      top: Math.max(12, A.bottom + 8 + H.height <= window.innerHeight - 12 ? A.bottom + 8 : A.top - H.height - 8)
    });
  }, [c, i]), v.useEffect(() => {
    if (!c) return;
    const A = (b) => {
      b.key === "Escape" ? (b.preventDefault(), b.stopImmediatePropagation(), _()) : i && b.key === "Tab" && b.preventDefault();
    };
    window.addEventListener("keydown", A, !0);
    const H = (b) => {
      var F;
      !i && !(b.target instanceof Node && ((F = g.current) != null && F.contains(b.target))) && d(!1);
    };
    return window.addEventListener("scroll", H, !0), window.addEventListener("resize", H), () => {
      window.removeEventListener("keydown", A, !0), window.removeEventListener("scroll", H, !0), window.removeEventListener("resize", H);
    };
  }, [c, i]);
  const R = ((C = h.current) == null ? void 0 : C.closest("[data-theme]")) ?? ((N = h.current) == null ? void 0 : N.getRootNode());
  return /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
    /* @__PURE__ */ o.jsx(
      "button",
      {
        ref: h,
        type: "button",
        className: Is.helpButton,
        "aria-label": `${x("Подсказка")}: ${x(r)}`,
        "aria-describedby": c && !i ? y : void 0,
        "aria-haspopup": i ? "dialog" : void 0,
        "aria-expanded": i ? c : void 0,
        onMouseEnter: () => {
          i || S();
        },
        onMouseLeave: () => {
          i || j();
        },
        onFocus: () => {
          i || S();
        },
        onBlur: () => {
          i || j();
        },
        onClick: S,
        children: /* @__PURE__ */ o.jsx(jy, { size: 16, "aria-hidden": "true" })
      }
    ),
    c && R && Yf.createPortal(i ? /* @__PURE__ */ o.jsx(Yl, { open: !0, onClose: _, className: Is.helpOverlay, labelledBy: y, children: /* @__PURE__ */ o.jsxs("div", { className: Is.sheetContent, children: [
      /* @__PURE__ */ o.jsx("h3", { id: y, children: x(r) }),
      /* @__PURE__ */ o.jsx("p", { children: x(a) }),
      /* @__PURE__ */ o.jsx(se, { autoFocus: !0, variant: "secondary", onClick: _, children: x("Закрыть подсказку") })
    ] }) }) : /* @__PURE__ */ o.jsx(
      "div",
      {
        ref: g,
        id: y,
        role: "tooltip",
        className: Is.tooltip,
        style: f,
        onMouseEnter: S,
        onMouseLeave: j,
        children: x(a)
      }
    ), R)
  ] });
}
const N_ = "_field_1vuim_1", T_ = "_label_1vuim_10", R_ = "_inputWrapper_1vuim_18", P_ = "_input_1vuim_18", A_ = "_passwordInput_1vuim_40", b_ = "_passwordToggle_1vuim_66", $_ = "_error_1vuim_95", M_ = "_errorText_1vuim_108", Pn = {
  field: N_,
  label: T_,
  inputWrapper: R_,
  input: P_,
  passwordInput: A_,
  passwordToggle: b_,
  error: $_,
  errorText: M_
}, Ue = ({
  label: r,
  hint: a,
  error: i,
  disabled: c,
  className: d = "",
  id: f,
  type: p,
  ...h
}) => {
  const g = v.useId(), [w, y] = v.useState(!1), _ = f ?? g, S = p === "password" && w ? "text" : p;
  return /* @__PURE__ */ o.jsxs("div", { className: Pn.field, children: [
    r && /* @__PURE__ */ o.jsx(Gl, { label: r, htmlFor: _, className: Pn.label, hint: a }),
    /* @__PURE__ */ o.jsxs("div", { className: Pn.inputWrapper, children: [
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
            ${Pn.input}
            ${p === "password" ? Pn.passwordInput : ""}
            ${i ? Pn.error : ""}
            ${d}
          `
        }
      ),
      p === "password" && /* @__PURE__ */ o.jsx(
        "button",
        {
          type: "button",
          className: Pn.passwordToggle,
          onClick: () => y((j) => !j),
          disabled: c,
          "aria-label": w ? "Hide password" : "Show password",
          children: w ? "🙈" : "👁"
        }
      )
    ] }),
    i && /* @__PURE__ */ o.jsx("span", { id: `${_}-error`, className: Pn.errorText, children: x(i) })
  ] });
}, I_ = "_field_1aipr_1", L_ = "_label_1aipr_8", D_ = "_textarea_1aipr_14", z_ = "_error_1aipr_46", O_ = "_errorText_1aipr_55", As = {
  field: I_,
  label: L_,
  textarea: D_,
  error: z_,
  errorText: O_
}, er = ({
  label: r,
  hint: a,
  error: i,
  className: c = "",
  id: d,
  ...f
}) => {
  const p = v.useId(), h = d ?? p;
  return /* @__PURE__ */ o.jsxs("div", { className: As.field, children: [
    r && /* @__PURE__ */ o.jsx(Gl, { label: r, htmlFor: h, className: As.label, hint: a }),
    /* @__PURE__ */ o.jsx(
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
    i && /* @__PURE__ */ o.jsx("span", { className: As.errorText, children: x(i) })
  ] });
}, F_ = "_form_15zw4_1", H_ = "_actions_15zw4_8", pf = {
  form: F_,
  actions: H_
};
function W_() {
  const r = lt(), a = Wt(), [i, c] = v.useState({ url: "", initial_prompt: "", has_token: !1 }), [d, f] = v.useState(""), [p, h] = v.useState(""), [g, w] = v.useState(!1), [y, _] = v.useState(null);
  v.useEffect(() => {
    let R = !0;
    return a.run(async () => {
      const C = await r.getData("get_whisper_prompt");
      R && (c({ ...C, initial_prompt: Array.isArray(C.initial_prompt) ? C.initial_prompt.join("; ") : C.initial_prompt }), h(C.url), w(!0));
    }, { retryable: !0 }), () => {
      R = !1;
    };
  }, [r, a.run]);
  const S = (R) => {
    c((C) => ({ ...C, ...R })), _(null);
  }, j = (R) => a.run(async () => {
    const C = await r.saveData({
      url: i.url,
      token: d,
      apply: R,
      initial_prompt: i.initial_prompt
    }, "save_whisper_prompt");
    c((N) => ({ ...N, initial_prompt: Array.isArray(C.initial_prompt) ? C.initial_prompt.join("; ") : C.initial_prompt, has_token: !!(d.trim() || N.has_token && i.url === p) })), _({ message: R ? C.applied ? "Сохранено и применено в Whisper. Перезапуск контейнера не нужен." : "Сохранено в Home Assistant. Не удалось применить в Whisper. После восстановления подключения нажмите «Отправить в Whisper» повторно." : "Сохранено в Home Assistant.", warning: R && !C.applied }), h(i.url), f("");
  }, { exclusive: !0 });
  return /* @__PURE__ */ o.jsxs("section", { className: pf.form, children: [
    /* @__PURE__ */ o.jsx(Be, { ...a }),
    !g && !a.error && /* @__PURE__ */ o.jsx(Dr, {}),
    g && /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
      /* @__PURE__ */ o.jsx(
        Ue,
        {
          label: x("Адрес API Whisper"),
          hint: x("Адрес контейнера Whisper с API промпта, например http://192.168.1.10:10301. Это отдельный HTTP-порт, не Wyoming-порт 10300. Для сохранения промпта в Home Assistant адрес не нужен."),
          placeholder: "http://192.168.1.10:10301",
          value: i.url,
          disabled: a.busy,
          onChange: (R) => S({ url: R.target.value })
        }
      ),
      /* @__PURE__ */ o.jsx(
        Ue,
        {
          label: x("Токен API Whisper"),
          hint: x("Необязательно. Если WHISPER_PROMPT_TOKEN в контейнере не задан, оставьте поле пустым. Иначе укажите его без префикса Bearer. Сохранённый токен не показывается и используется повторно для того же адреса."),
          type: "password",
          value: d,
          disabled: a.busy,
          autoComplete: "new-password",
          placeholder: i.has_token && i.url === p ? x("Токен сохранён; оставьте пустым, чтобы сохранить его") : "",
          onChange: (R) => {
            f(R.target.value), _(null);
          }
        }
      ),
      /* @__PURE__ */ o.jsx(
        er,
        {
          label: x("Промпт распознавания"),
          hint: x("Подсказка initial_prompt для Whisper: привычные слова, названия и примеры фраз. Укажите фразы через ; — они сохраняются массивом. Например: «Насыпь еды; Запусти пылесос; Включи свет в коридоре». Это подсказка распознавания, а не инструкция для диалога. Пустой текст отключает подсказку. После отправки в Whisper применяется со следующего распознавания, без перезапуска модели."),
          rows: 10,
          maxLength: 16e3,
          value: i.initial_prompt,
          disabled: a.busy,
          onChange: (R) => S({ initial_prompt: R.target.value })
        }
      ),
      /* @__PURE__ */ o.jsxs("div", { className: pf.actions, children: [
        /* @__PURE__ */ o.jsx(se, { variant: "secondary", disabled: a.busy, onClick: () => void j(!1), children: x("Сохранить") }),
        /* @__PURE__ */ o.jsx(se, { disabled: a.busy || !i.url.trim(), onClick: () => void j(!0), children: x("Отправить в Whisper") })
      ] }),
      y && /* @__PURE__ */ o.jsx(w_, { message: x(y.message), warning: y.warning, onClose: () => _(null) })
    ] })
  ] });
}
const B_ = "_page_z6937_7", U_ = "_header_z6937_19", V_ = "_headerTop_z6937_24", q_ = "_heading_z6937_31", Q_ = "_title_z6937_36", K_ = "_description_z6937_45", Y_ = "_actions_z6937_52", G_ = "_list_z6937_57", J_ = "_innerTabs_z6937_88", X_ = "_innerTab_z6937_88", Z_ = "_activeInnerTab_z6937_121", e1 = "_settingsActions_z6937_131", t1 = "_listSentinel_z6937_141", n1 = "_settingsSections_z6937_145", r1 = "_settingsSection_z6937_145", s1 = "_settingsMobileActions_z6937_171", o1 = "_connectionFields_z6937_191", i1 = "_collectionHeader_z6937_197", J = {
  page: B_,
  header: U_,
  headerTop: V_,
  heading: q_,
  title: Q_,
  description: K_,
  actions: Y_,
  list: G_,
  innerTabs: J_,
  innerTab: X_,
  activeInnerTab: Z_,
  settingsActions: e1,
  listSentinel: t1,
  settingsSections: n1,
  settingsSection: r1,
  settingsMobileActions: s1,
  connectionFields: o1,
  collectionHeader: i1
};
function a1() {
  const r = Ze();
  return /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
    /* @__PURE__ */ o.jsx(_t, { title: "Промпт распознавания" }),
    /* @__PURE__ */ o.jsxs("div", { className: J.page, children: [
      !r && /* @__PURE__ */ o.jsx(gt, {}),
      /* @__PURE__ */ o.jsx("div", { className: `${J.header} ${J.collectionHeader}`, children: /* @__PURE__ */ o.jsx("div", { className: J.headerTop, children: /* @__PURE__ */ o.jsx("div", { className: J.heading, children: !r && /* @__PURE__ */ o.jsx("h1", { className: J.title, children: x("Промпт распознавания") }) }) }) }),
      /* @__PURE__ */ o.jsx(W_, {})
    ] })
  ] });
}
const l1 = "_heading_1w2wz_1", u1 = "_note_1w2wz_6", c1 = "_entries_1w2wz_12", d1 = "_entry_1w2wz_19", f1 = "_line_1w2wz_27", p1 = "_error_1w2wz_40", m1 = "_body_1w2wz_49", An = {
  heading: l1,
  note: u1,
  entries: c1,
  entry: d1,
  line: f1,
  error: p1,
  body: m1
};
function h1() {
  const r = lt(), a = Wt(), [i, c] = v.useState([]);
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
    /* @__PURE__ */ o.jsx(_t, { title: x("Логи") }),
    /* @__PURE__ */ o.jsxs("main", { className: J.page, children: [
      /* @__PURE__ */ o.jsx(gt, {}),
      /* @__PURE__ */ o.jsx("h1", { className: An.heading, children: x("Логи") }),
      /* @__PURE__ */ o.jsx("p", { className: An.note, children: x("Последние 200 записей API с телами запросов и ответов. Обновление каждые 3 секунды. После перезапуска журнал очищается. Секретные поля и настроенные токены скрыты.") }),
      /* @__PURE__ */ o.jsx(Be, { ...a }),
      !i.length && !a.busy && !a.error && /* @__PURE__ */ o.jsx("p", { children: x("Запросов к API пока нет.") }),
      /* @__PURE__ */ o.jsx("div", { className: An.entries, children: i.map((d) => /* @__PURE__ */ o.jsxs("article", { className: An.entry, children: [
        /* @__PURE__ */ o.jsxs("div", { className: An.line, children: [
          /* @__PURE__ */ o.jsx("time", { dateTime: d.timestamp, children: new Date(d.timestamp).toLocaleString() }),
          /* @__PURE__ */ o.jsxs("strong", { children: [
            d.method,
            " ",
            d.path
          ] })
        ] }),
        /* @__PURE__ */ o.jsxs("div", { className: An.line, children: [
          /* @__PURE__ */ o.jsx("span", { children: x({ connected: "SSE подключён", event: "Событие SSE", completed: "Запрос завершён" }[d.phase] ?? d.phase) }),
          d.status !== null && /* @__PURE__ */ o.jsxs("span", { className: d.status >= 400 ? An.error : void 0, children: [
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
          ([f, p]) => p != null && /* @__PURE__ */ o.jsxs("details", { className: An.body, children: [
            /* @__PURE__ */ o.jsx("summary", { children: x(f) }),
            /* @__PURE__ */ o.jsx("pre", { children: JSON.stringify(p, null, 2) })
          ] }, f)
        )
      ] }, `${d.timestamp}-${d.phase}`)) })
    ] })
  ] });
}
var Rl = /* @__PURE__ */ new Map(), Zo = /* @__PURE__ */ new WeakMap(), mf = 0, v1;
function y1(r) {
  return r ? (Zo.has(r) || (mf += 1, Zo.set(r, mf.toString())), Zo.get(r)) : "0";
}
function g1(r) {
  return Object.keys(r).sort().filter(
    (a) => r[a] !== void 0
  ).map((a) => `${a}_${a === "root" ? y1(r.root) : r[a]}`).toString();
}
function _1(r) {
  const a = g1(r);
  let i = Rl.get(a);
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
    }, Rl.set(a, i);
  }
  return i;
}
function x1(r, a, i = {}, c = v1) {
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
  const { id: d, observer: f, elements: p } = _1(i), h = p.get(r) || [];
  return p.has(r) || p.set(r, h), h.push(a), f.observe(r), function() {
    h.splice(h.indexOf(a), 1), h.length === 0 && (p.delete(r), f.unobserve(r)), p.size === 0 && (f.disconnect(), Rl.delete(d));
  };
}
function w1({
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
  const [_, S] = v.useState(null), j = v.useRef(w), R = v.useRef(h), [C, N] = v.useState({
    inView: !!h,
    entry: void 0
  });
  j.current = w, v.useEffect(
    () => {
      if (R.current === void 0 && (R.current = h), p || !_) return;
      let F;
      return F = x1(
        _,
        (B, M) => {
          const X = R.current;
          R.current = B, !(X === void 0 && !B) && (N({
            inView: B,
            entry: M
          }), j.current && j.current(B, M), M.isIntersecting && f && F && (F(), F = void 0));
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
        F && F();
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
      i,
      g,
      a
    ]
  );
  const A = (y = C.entry) == null ? void 0 : y.target, H = v.useRef(void 0);
  !_ && A && !f && !p && H.current !== A && (H.current = A, N({
    inView: !!h,
    entry: void 0
  }), R.current = h);
  const b = [S, C.inView, C.entry];
  return b.ref = b[0], b.inView = b[1], b.entry = b[2], b;
}
function zr(r, a, i, c) {
  const { ref: d, inView: f } = w1({ threshold: 0, rootMargin: "0px 0px 180px 0px" }), [p, h] = v.useState(!1);
  return v.useEffect(() => {
    !a && (r == null ? void 0 : r.page) === 1 && h(!0);
  }, [a, r]), v.useEffect(() => {
    p && c && f && !a && r && r.page < r.total_pages && i(r.page + 1, !0);
  }, [p, c, f, a, r, i]), d;
}
const xl = (r) => ({
  data: r.data ?? r.script_actions ?? [],
  page: r.page ?? 1,
  page_size: r.page_size ?? 10,
  total_pages: r.total_pages ?? 1,
  total_items: r.total_items ?? 0
});
function pp(r) {
  const a = lt(), [i, c] = v.useState(null), [d, f] = v.useState(""), p = v.useRef(""), h = v.useRef(0), [g, w] = v.useState(!0), [y, _] = v.useState(null), S = v.useRef(), j = v.useRef(1), R = v.useRef(!1), C = v.useRef(), N = v.useCallback(async (b, F = !1) => {
    const B = ++h.current, M = p.current.trim(), X = b === void 0 && R.current, U = b ?? j.current;
    _(null), w(!0);
    try {
      let G = xl(await a.getPage(r, U, void 0, M));
      const pe = Math.max(1, G.total_pages);
      if (U > pe && (G = xl(await a.getPage(r, pe, void 0, M))), X && G.page > 1) {
        const ce = await Promise.all(Array.from({ length: G.page - 1 }, (Ee, je) => a.getPage(r, je + 1, void 0, M).then(xl)));
        G = { ...G, data: [...ce.flatMap((Ee) => Ee.data), ...G.data] };
      }
      if (B !== h.current) return;
      X || (R.current = F), S.current = void 0, j.current = G.page, c((ce) => F && ce ? { ...G, data: [...ce.data, ...G.data] } : G);
    } catch (G) {
      if (B !== h.current) return;
      S.current = { page: b, append: F }, _(Yt(G, "Не удалось загрузить список. Проверьте подключение к Home Assistant."));
    } finally {
      B === h.current && w(!1);
    }
  }, [a, r]);
  v.useEffect(() => {
    const b = C.current !== r;
    if (C.current = r, !b && p.current === d) return;
    p.current = d, j.current = 1, R.current = !1, h.current += 1, w(!0);
    const F = window.setTimeout(() => {
      N(1);
    }, b ? 0 : 250);
    return () => window.clearTimeout(F);
  }, [r, N, d]);
  const A = v.useCallback((b) => {
    c((F) => F && { ...F, data: b(F.data) });
  }, []);
  return { query: d, setQuery: f, page: i, loading: g, loadPage: N, updateItems: A, error: y, retry: () => {
    var b, F;
    N((b = S.current) == null ? void 0 : b.page, ((F = S.current) == null ? void 0 : F.append) ?? !1);
  } };
}
function S1() {
  const r = lt(), { query: a, setQuery: i, page: c, loading: d, loadPage: f, error: p, retry: h } = pp("get_script_actions_short"), g = c ? { ...c, script_actions: c.data } : null;
  return { query: a, setQuery: i, error: p, retry: h, loading: d, scripts: g, loadScripts: f, getAvailableScripts: () => r.getScripts(), saveScript: async (R) => {
    await r.saveData(R, "save_script_action"), await f();
  }, updateScript: async (R, C) => {
    await r.updateRecord(R, "update_script_action", C), await f();
  }, getScriptAction: async (R) => (await r.getRecord(R, "get_script_action")).data, deleteScriptAction: async (R) => {
    await r.deleteRecord(R, "delete_script_action"), await f();
  } };
}
const k1 = "_subtitle_c1esh_1", j1 = "_card_c1esh_6", C1 = "_content_c1esh_32", E1 = "_title_c1esh_40", N1 = "_arrow_c1esh_46", T1 = "_titleOnly_c1esh_57", Ar = {
  subtitle: k1,
  card: j1,
  content: C1,
  title: E1,
  arrow: N1,
  titleOnly: T1
}, Or = ({
  title: r,
  subTitle: a,
  onClick: i
}) => /* @__PURE__ */ o.jsxs(
  "button",
  {
    type: "button",
    className: `${Ar.card} ${a ? "" : Ar.titleOnly}`,
    onClick: i,
    children: [
      /* @__PURE__ */ o.jsxs("div", { className: Ar.content, children: [
        /* @__PURE__ */ o.jsx("div", { className: Ar.title, children: r }),
        a && /* @__PURE__ */ o.jsx("div", { className: Ar.subtitle, children: x(a) })
      ] }),
      /* @__PURE__ */ o.jsx("div", { className: Ar.arrow, "aria-hidden": "true", children: "→" })
    ]
  }
), R1 = "_pagination_r0e80_1", P1 = "_button_r0e80_10", A1 = "_label_r0e80_34", b1 = "_pages_r0e80_40", $1 = "_active_r0e80_48", Gn = {
  pagination: R1,
  button: P1,
  label: A1,
  pages: b1,
  active: $1
}, Fr = ({ page: r, totalPages: a, onChange: i }) => {
  if (a <= 1) return null;
  const c = Array.from(/* @__PURE__ */ new Set([
    1,
    ...Array.from({ length: 5 }, (f, p) => r + p - 2).filter((f) => f >= 1 && f <= a),
    a
  ])).sort((f, p) => f - p), d = (f) => {
    Number.isInteger(f) && f >= 1 && f <= a && f !== r && i(f);
  };
  return /* @__PURE__ */ o.jsx("nav", { className: Gn.pagination, "aria-label": x("Страницы списка"), children: /* @__PURE__ */ o.jsxs("div", { className: Gn.pages, children: [
    /* @__PURE__ */ o.jsx(
      "button",
      {
        type: "button",
        className: Gn.button,
        disabled: r <= 1,
        onClick: () => d(r - 1),
        "aria-label": x("Предыдущая страница"),
        children: "‹"
      }
    ),
    c.map((f, p) => /* @__PURE__ */ o.jsxs(Tf.Fragment, { children: [
      p > 0 && f - c[p - 1] > 1 && /* @__PURE__ */ o.jsx("span", { className: Gn.label, "aria-hidden": "true", children: "…" }),
      /* @__PURE__ */ o.jsx(
        "button",
        {
          type: "button",
          className: `${Gn.button} ${f === r ? Gn.active : ""}`,
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
        className: Gn.button,
        disabled: r >= a,
        onClick: () => d(r + 1),
        "aria-label": x("Следующая страница"),
        children: "›"
      }
    )
  ] }) });
}, M1 = "_overlay_1m3e5_1", I1 = "_modal_1m3e5_1", L1 = "_header_1m3e5_1", D1 = "_body_1m3e5_1", z1 = "_footer_1m3e5_1", O1 = "_sm_1m3e5_32", F1 = "_md_1m3e5_36", H1 = "_lg_1m3e5_40", W1 = "_xl_1m3e5_44", B1 = "_title_1m3e5_59", U1 = "_close_1m3e5_86", V1 = "_fields_1m3e5_116", q1 = "_suspended_1m3e5_124", Q1 = "_heading_1m3e5_128", ht = {
  overlay: M1,
  modal: I1,
  header: L1,
  body: D1,
  footer: z1,
  sm: O1,
  md: F1,
  lg: H1,
  xl: W1,
  title: B1,
  close: U1,
  fields: V1,
  suspended: q1,
  heading: Q1
}, Jt = ({
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
}) => (lp(r, c), v.useEffect(() => {
  if (!r || a) return;
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
}, [r, c, a]), r ? /* @__PURE__ */ o.jsx(
  "div",
  {
    className: `${ht.overlay} ${a ? ht.suspended : ""}`,
    "aria-hidden": a || void 0,
    onClick: c,
    children: /* @__PURE__ */ o.jsxs(
      "div",
      {
        className: `${ht.modal} ${ht[y]}`,
        role: p ? "dialog" : void 0,
        "aria-modal": p ? !0 : void 0,
        "aria-label": p,
        onClick: (_) => _.stopPropagation(),
        children: [
          /* @__PURE__ */ o.jsxs("div", { className: ht.header, children: [
            d && /* @__PURE__ */ o.jsx(
              se,
              {
                variant: "ghost",
                className: ht.close,
                "aria-label": x("Назад к предыдущей команде"),
                onClick: d,
                children: /* @__PURE__ */ o.jsx(my, { size: 20, "aria-hidden": "true" })
              }
            ),
            f && (h ? /* @__PURE__ */ o.jsxs("div", { className: ht.heading, children: [
              /* @__PURE__ */ o.jsx("h2", { className: ht.title, children: x(f) }),
              h
            ] }) : /* @__PURE__ */ o.jsx("h2", { className: ht.title, children: x(f) })),
            /* @__PURE__ */ o.jsx(
              se,
              {
                variant: "ghost",
                className: ht.close,
                "aria-label": p ? x("Закрыть") : void 0,
                onClick: c,
                children: "✕"
              }
            )
          ] }),
          /* @__PURE__ */ o.jsxs("div", { className: ht.body, children: [
            /* @__PURE__ */ o.jsx(Be, { ...i }),
            /* @__PURE__ */ o.jsx("fieldset", { className: ht.fields, disabled: i == null ? void 0 : i.busy, children: w })
          ] }),
          g && /* @__PURE__ */ o.jsx("div", { className: ht.footer, children: /* @__PURE__ */ o.jsx("fieldset", { className: ht.fields, disabled: i == null ? void 0 : i.busy, children: g }) })
        ]
      }
    )
  }
) : null), K1 = "_content_eng69_1", Y1 = "_title_eng69_7", G1 = "_actions_eng69_14", J1 = "_row_eng69_20", X1 = "_identifier_eng69_31", bs = {
  content: K1,
  title: Y1,
  actions: G1,
  row: J1,
  identifier: X1
}, Jl = ({ open: r, title: a, uuid: i, onClose: c, actions: d, size: f = "md", layout: p = "column" }) => {
  const h = Ze(), g = i ? /* @__PURE__ */ o.jsx("p", { className: bs.identifier, children: i }) : null, w = /* @__PURE__ */ o.jsxs("div", { className: bs.content, children: [
    h && /* @__PURE__ */ o.jsxs("div", { children: [
      /* @__PURE__ */ o.jsx("h3", { className: bs.title, children: a }),
      g
    ] }),
    /* @__PURE__ */ o.jsx("div", { className: `${bs.actions} ${p === "row" && !h ? bs.row : ""}`, children: d.map((y) => /* @__PURE__ */ o.jsx(se, { fullWidth: !0, variant: y.variant, onClick: () => {
      y.onClick(), c();
    }, children: x(y.label) }, y.label)) })
  ] });
  return h ? /* @__PURE__ */ o.jsx(Yl, { open: r, onClose: c, children: w }) : /* @__PURE__ */ o.jsx(Jt, { open: r, onClose: c, title: a, subtitle: g, size: f, children: w });
}, Z1 = ({ uuid: r, title: a, open: i, onClose: c, onEdit: d, onDelete: f }) => r ? /* @__PURE__ */ o.jsx(Jl, { open: i, title: a, uuid: r, onClose: c, size: "sm", layout: "row", actions: [
  { label: "Изменить", onClick: () => d(r) },
  { label: "Удалить", variant: "remove", onClick: () => f(r) }
] }) : null, e0 = "_accordion_5owbj_1", t0 = "_header_5owbj_7", n0 = "_content_5owbj_20", ei = {
  accordion: e0,
  header: t0,
  content: n0
}, r0 = ({
  title: r,
  defaultOpen: a = !1,
  children: i
}) => {
  const [c, d] = v.useState(a);
  return /* @__PURE__ */ o.jsxs(
    "div",
    {
      className: ei.accordion,
      "data-open": c,
      children: [
        /* @__PURE__ */ o.jsxs(
          "button",
          {
            type: "button",
            className: ei.header,
            onClick: () => d((f) => !f),
            "aria-expanded": c,
            children: [
              /* @__PURE__ */ o.jsx("span", { children: x(r) }),
              /* @__PURE__ */ o.jsx("span", { className: ei.icon, children: c ? "−" : "+" })
            ]
          }
        ),
        c && /* @__PURE__ */ o.jsx("div", { className: ei.content, children: i })
      ]
    }
  );
}, s0 = "_wrapper_1fgdg_1", o0 = "_dropdown_1fgdg_10", i0 = "_option_1fgdg_22", a0 = "_title_1fgdg_46", l0 = "_uuid_1fgdg_51", u0 = "_hint_1fgdg_52", Jn = {
  wrapper: s0,
  dropdown: o0,
  option: i0,
  title: a0,
  uuid: l0,
  hint: u0
}, c0 = ({
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
  const w = lt(), y = JSON.stringify(c), _ = v.useMemo(() => JSON.parse(y), [y]), [S, j] = v.useState(null), R = h ? "" : i || ((S == null ? void 0 : S.uuid) === a ? S.title : "");
  v.useEffect(() => {
    var O;
    if (!a || i || h || (O = ce.current) != null && O.contains(document.activeElement)) return;
    let z = !1;
    return (async () => {
      var Q;
      try {
        for (const T of _) {
          const oe = (Q = (await w.searchAssistantCommands(a, T)).data) == null ? void 0 : Q.find((de) => de.uuid === a);
          if (oe) {
            z || j(oe);
            return;
          }
        }
      } catch {
      }
    })(), () => {
      z = !0;
    };
  }, [w, a, i, h, _]);
  const [C, N] = v.useState(null), [A, H] = v.useState(0), [b, F] = v.useState([]), [B, M] = v.useState(!1), [X, U] = v.useState(!1), [G, pe] = v.useState(!1), ce = v.useRef(null), [Ee, je] = v.useState({});
  v.useEffect(() => {
    var O, Q;
    if (!B) return;
    const z = () => {
      var Wr, Mn;
      const T = (Mn = (Wr = ce.current) == null ? void 0 : Wr.querySelector("input")) == null ? void 0 : Mn.getBoundingClientRect();
      if (!T) return;
      const L = window.visualViewport, oe = ((L == null ? void 0 : L.offsetTop) ?? 0) + 8, de = ((L == null ? void 0 : L.offsetTop) ?? 0) + ((L == null ? void 0 : L.height) ?? window.innerHeight) - 8, ye = Math.min(de, Math.max(oe, T.bottom + 6)), ge = Math.min(de, Math.max(oe, T.top - 6)), ke = de - ye, xe = ge - oe, Ne = ke < 180 && xe > ke, ot = Math.min(260, Ne ? xe : ke), $n = Math.max(8, T.left);
      je({
        left: $n,
        width: Math.max(0, Math.min(T.width, window.innerWidth - $n - 8)),
        top: Ne ? ge : ye,
        transform: Ne ? "translateY(-100%)" : void 0,
        maxHeight: ot
      });
    };
    return z(), window.addEventListener("scroll", z, !0), window.addEventListener("resize", z), (O = window.visualViewport) == null || O.addEventListener("resize", z), (Q = window.visualViewport) == null || Q.addEventListener("scroll", z), () => {
      var T, L;
      window.removeEventListener("scroll", z, !0), window.removeEventListener("resize", z), (T = window.visualViewport) == null || T.removeEventListener("resize", z), (L = window.visualViewport) == null || L.removeEventListener("scroll", z);
    };
  }, [B]);
  const me = v.useRef(0), ve = v.useRef(""), Se = v.useMemo(() => a.trim(), [a]);
  v.useEffect(() => {
    if (!Se) {
      me.current += 1, N(null), ve.current = "", F([]), M(!1);
      return;
    }
    if (Se.length < d) {
      me.current += 1, N(null), F([]), M(!1);
      return;
    }
    if (!G || R) {
      me.current += 1, M(!1), U(!1);
      return;
    }
    if (ve.current === Se)
      return;
    ve.current = Se;
    const z = me.current + 1;
    me.current = z;
    const O = window.setTimeout(async () => {
      U(!0), N(null);
      try {
        let Q = [];
        for (const T of _) {
          const L = await w.searchAssistantCommands(Se, T), oe = Array.isArray(L == null ? void 0 : L.data) ? L.data : [];
          Q.push(...oe);
        }
        if (me.current !== z)
          return;
        F(Q), M(Q.length > 0);
      } catch (Q) {
        me.current === z && (N(Yt(Q)), F([]), M(!1));
      } finally {
        me.current === z && U(!1);
      }
    }, 250);
    return () => window.clearTimeout(O);
  }, [w, Se, _, d, G, A, R]);
  const W = (z) => {
    const O = h ? h(z) : z.uuid;
    me.current += 1, j(z), ve.current = "", U(!1), F([]), f(O), p == null || p(z), M(!1);
  };
  return /* @__PURE__ */ o.jsxs("div", { ref: ce, className: Jn.wrapper, children: [
    /* @__PURE__ */ o.jsx(
      Ue,
      {
        label: r,
        value: R || a,
        autoComplete: "off",
        placeholder: x("Начните вводить title или uuid"),
        error: g,
        onBlur: () => {
          pe(!1), window.setTimeout(() => M(!1), 150);
        },
        onFocus: () => {
          pe(!0), M(!R && b.length > 0);
        },
        onChange: (z) => {
          j(null), f(z.target.value);
        }
      }
    ),
    B && ce.current && Yf.createPortal(
      /* @__PURE__ */ o.jsx("div", { role: "listbox", className: Jn.dropdown, style: Ee, children: b.map((z) => /* @__PURE__ */ o.jsxs(
        "button",
        {
          role: "option",
          type: "button",
          className: Jn.option,
          onMouseDown: (O) => O.preventDefault(),
          onClick: () => W(z),
          children: [
            /* @__PURE__ */ o.jsx("span", { className: Jn.title, children: z.title || "Без названия" }),
            /* @__PURE__ */ o.jsx("span", { className: Jn.uuid, children: z.uuid }),
            z.mappingType && /* @__PURE__ */ o.jsxs("span", { className: Jn.uuid, children: [
              x("mappingType:"),
              z.mappingType
            ] })
          ]
        },
        z.uuid
      )) }),
      ce.current.closest("[data-theme]") ?? ce.current
    ),
    /* @__PURE__ */ o.jsx(Be, { error: C, busy: X, retry: () => {
      var z, O;
      ve.current = "", (O = (z = ce.current) == null ? void 0 : z.querySelector("input")) == null || O.focus(), H((Q) => Q + 1);
    } }),
    X && /* @__PURE__ */ o.jsx("span", { className: Jn.hint, children: x("Поиск...") })
  ] });
}, d0 = "_field_1esqu_1", f0 = "_row_1esqu_5", p0 = "_inputWrapper_1esqu_11", m0 = "_clearButton_1esqu_22", h0 = "_rowError_1esqu_31", Ft = {
  field: d0,
  row: f0,
  inputWrapper: p0,
  clearButton: m0,
  rowError: h0
}, v0 = {
  parent_type: "search_assistant_commands",
  children_type: "search_assistant_sub_commands",
  children_direct_type: "search_assistant_sub_direct_controls"
};
function wl({ field: r, value: a, error: i, onChange: c }) {
  return Ir() ? /* @__PURE__ */ o.jsx(Ue, { label: x(r), value: a, error: i, onChange: (f) => c(f.target.value) }) : /* @__PURE__ */ o.jsx(
    c0,
    {
      label: x(r),
      value: a,
      error: i,
      searchSource: [v0[r]],
      minQueryLength: 3,
      onChange: c,
      getSelectedValue: (f) => (r === "children_direct_type" ? f.mappingType : f.actionType) ?? f.uuid
    }
  );
}
const y0 = ({
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
    r0,
    {
      title: `${x("Условие")} ${a + 1}`,
      defaultOpen: i,
      children: [
        /* @__PURE__ */ o.jsx("div", { className: Ft.field, children: /* @__PURE__ */ o.jsx(
          wl,
          {
            field: "parent_type",
            value: r.parent_type ?? "",
            error: p == null ? void 0 : p.parent_type,
            onChange: (_) => c({ ...r, parent_type: _ })
          }
        ) }),
        /* @__PURE__ */ o.jsx("div", { className: Ft.field, children: h ? /* @__PURE__ */ o.jsxs(
          "div",
          {
            className: `${Ft.row} ${p != null && p.children_type ? Ft.rowError : ""}`,
            children: [
              /* @__PURE__ */ o.jsx("div", { className: Ft.inputWrapper, children: /* @__PURE__ */ o.jsx(
                wl,
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
                  className: Ft.clearButton,
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
        /* @__PURE__ */ o.jsx("div", { className: Ft.field, children: g ? /* @__PURE__ */ o.jsxs(
          "div",
          {
            className: `${Ft.row} ${p != null && p.children_direct_type ? Ft.rowError : ""}`,
            children: [
              /* @__PURE__ */ o.jsx("div", { className: Ft.inputWrapper, children: /* @__PURE__ */ o.jsx(
                wl,
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
                  className: Ft.clearButton,
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
}, g0 = "_dropdown_3mupk_2", _0 = "_label_3mupk_11", x0 = "_wrapper_3mupk_19", w0 = "_select_3mupk_23", S0 = "_arrow_3mupk_65", k0 = "_error_3mupk_85", j0 = "_errorText_3mupk_103", Xn = {
  dropdown: g0,
  label: _0,
  wrapper: x0,
  select: w0,
  arrow: S0,
  error: k0,
  errorText: j0
};
function $r({
  label: r,
  options: a,
  value: i = "",
  placeholder: c = "Выберите",
  error: d,
  onSelect: f
}) {
  const p = v.useId();
  return /* @__PURE__ */ o.jsxs("div", { className: Xn.dropdown, children: [
    r && /* @__PURE__ */ o.jsx(
      "label",
      {
        htmlFor: p,
        className: Xn.label,
        children: x(r)
      }
    ),
    /* @__PURE__ */ o.jsxs("div", { className: Xn.wrapper, children: [
      /* @__PURE__ */ o.jsxs(
        "select",
        {
          id: p,
          className: `
            ${Xn.select}
            ${d ? Xn.error : ""}
          `,
          value: i,
          onChange: (h) => f == null ? void 0 : f(h.target.value),
          children: [
            /* @__PURE__ */ o.jsx("option", { value: "", disabled: !0, children: x(c) }),
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
        Xf,
        {
          size: 18,
          className: Xn.arrow
        }
      )
    ] }),
    d && /* @__PURE__ */ o.jsx("span", { className: Xn.errorText, children: x(d) })
  ] });
}
const C0 = "_form_1ogov_1", E0 = "_section_1ogov_7", N0 = "_sectionTitle_1ogov_18", T0 = "_conditions_1ogov_27", R0 = "_addCondition_1ogov_33", br = {
  form: C0,
  section: E0,
  sectionTitle: N0,
  conditions: T0,
  addCondition: R0
}, P0 = ({
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
  }), [y, _] = v.useState({
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
    }), _({
      conditions: []
    });
  }, [i, r]);
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
  }, R = (A, H) => {
    const b = [...g.conditions];
    b[A] = H, S({
      ...g,
      conditions: b
    });
  }, C = (A) => {
    const H = g.conditions.filter(
      (b, F) => F !== A
    );
    S({
      ...g,
      conditions: H.length > 0 ? H : [
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
      (H, b) => {
        const F = {};
        H.parent_type.trim() || (F.parent_type = "Обязательное поле"), H.children_type !== void 0 && !H.children_type.trim() && (F.children_type = "Обязательное поле"), H.children_direct_type !== void 0 && !H.children_direct_type.trim() && (F.children_direct_type = "Обязательное поле"), A.conditions[b] = F;
      }
    ), _(A), !A.name && !A.script_entity_id && A.conditions.every(
      (H) => Object.keys(H).length === 0
    );
  };
  return /* @__PURE__ */ o.jsx(
    Jt,
    {
      feedback: a,
      open: r,
      onClose: h,
      title: d ? "Редактировать сценарий" : "Создать сценарий",
      footer: /* @__PURE__ */ o.jsx(
        se,
        {
          disabled: f,
          onClick: () => {
            N() && (p == null || p(g));
          },
          children: x("Сохранить")
        }
      ),
      children: /* @__PURE__ */ o.jsxs("div", { className: br.form, children: [
        /* @__PURE__ */ o.jsxs("div", { className: br.section, children: [
          /* @__PURE__ */ o.jsx(
            Ue,
            {
              label: x("Название"),
              value: g.name,
              error: y.name,
              onChange: (A) => S({
                ...g,
                name: A.target.value
              })
            }
          ),
          /* @__PURE__ */ o.jsx(
            $r,
            {
              label: x("Скрипт"),
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
        /* @__PURE__ */ o.jsxs("div", { className: br.section, children: [
          /* @__PURE__ */ o.jsx("h3", { className: br.sectionTitle, children: x("Условия") }),
          /* @__PURE__ */ o.jsx("div", { className: br.conditions, children: g.conditions.map(
            (A, H, b) => /* @__PURE__ */ o.jsx(
              y0,
              {
                index: H,
                condition: A,
                defaultOpen: !d,
                errors: y.conditions[H],
                onChange: (F) => R(
                  H,
                  F
                ),
                onDelete: () => C(H),
                totalCount: b.length
              },
              H
            )
          ) }),
          /* @__PURE__ */ o.jsx(
            se,
            {
              type: "button",
              className: br.addCondition,
              onClick: j,
              children: x("+ Добавить условие")
            }
          )
        ] })
      ] })
    }
  );
}, A0 = "_container_rqdjx_1", b0 = "_rows_rqdjx_9", $0 = "_hidden_rqdjx_20", M0 = "_overlay_rqdjx_24", I0 = "_card_rqdjx_32", L0 = "_title_rqdjx_51", D0 = "_subtitle_rqdjx_51", z0 = "_srOnly_rqdjx_70", ln = {
  container: A0,
  rows: b0,
  hidden: $0,
  overlay: M0,
  card: I0,
  title: L0,
  subtitle: D0,
  srOnly: z0
};
function Hr({ loading: r, itemCount: a, append: i = !1, children: c }) {
  const d = r && a > 0 && !i, f = r && /* @__PURE__ */ o.jsxs("div", { className: d ? ln.overlay : ln.rows, role: "status", children: [
    /* @__PURE__ */ o.jsx("span", { className: ln.srOnly, children: x("Загрузка...") }),
    Array.from({ length: d ? a : i && a > 0 ? 3 : 10 }, (p, h) => /* @__PURE__ */ o.jsxs("div", { className: ln.card, "aria-hidden": "true", children: [
      /* @__PURE__ */ o.jsx("span", { className: ln.title }),
      /* @__PURE__ */ o.jsx("span", { className: ln.subtitle })
    ] }, h))
  ] });
  return /* @__PURE__ */ o.jsxs("div", { className: ln.container, "aria-busy": r, children: [
    /* @__PURE__ */ o.jsx("div", { className: `${ln.rows} ${d ? ln.hidden : ""}`, "aria-hidden": d || void 0, children: c }),
    f
  ] });
}
const O0 = "_container_9wouv_1", F0 = "_visible_9wouv_20", hf = {
  container: O0,
  visible: F0
}, sr = ({
  children: r,
  offset: a = 10,
  startVisible: i = !1
}) => {
  const c = v.useRef(null), [d, f] = v.useState(i);
  return v.useEffect(() => {
    var _;
    const p = (_ = c.current) == null ? void 0 : _.getRootNode(), h = p instanceof ShadowRoot ? p.host : null, g = () => window.scrollY + ((h == null ? void 0 : h.scrollTop) ?? 0);
    let w = g();
    const y = () => {
      const S = g();
      S !== w && (S > w && S > a ? f(!0) : f(!1), w = S);
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
      className: `${hf.container} ${d ? hf.visible : ""}`,
      children: r
    }
  );
}, H0 = () => {
  const r = Wt(), a = Ir(), i = a ? "Действия удалённых команд" : "Запуск скриптов", c = Ze(), [d, f] = v.useState(), [p, h] = v.useState(!1), [g, w] = v.useState(!1), [y, _] = v.useState({ uuid: "", title: "" }), [S, j] = v.useState(!1), {
    query: R,
    setQuery: C,
    error: N,
    retry: A,
    loading: H,
    scripts: b,
    getAvailableScripts: F,
    loadScripts: B,
    saveScript: M,
    updateScript: X,
    getScriptAction: U,
    deleteScriptAction: G
  } = S1(), pe = zr(b, H || !!N, B, c), ce = { error: r.error ?? N, busy: r.busy, retry: r.error ? r.retry ?? (() => {
    r.clearError(), A();
  }) : A }, Ee = () => {
    r.clearError(), f(void 0), j(!1), h(!0);
  }, je = (W) => {
    w(!0), _(W);
  }, me = (W) => r.run(async () => {
    j(!0);
    const z = await U(
      W
    );
    f(z), h(!0);
  }, { retryable: !0 }), ve = async (W) => {
    await r.run(async () => {
      if (S) {
        if (!W.uuid) return;
        const { uuid: z, ...O } = W;
        await X(W.uuid, O);
      } else
        await M(W);
      h(!1);
    }, { exclusive: !0 });
  }, Se = (W) => r.run(async () => {
    W && await G(W);
  }, { exclusive: !0 });
  return /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
    /* @__PURE__ */ o.jsx(
      _t,
      {
        search: { value: R, onChange: C },
        title: i
      }
    ),
    /* @__PURE__ */ o.jsxs("div", { className: J.page, children: [
      !p && /* @__PURE__ */ o.jsx(Be, { ...ce }),
      /* @__PURE__ */ o.jsx(gt, {}),
      /* @__PURE__ */ o.jsxs("div", { className: `${J.header} ${J.collectionHeader}`, children: [
        /* @__PURE__ */ o.jsxs("div", { className: J.heading, children: [
          c ? /* @__PURE__ */ o.jsx(o.Fragment, {}) : /* @__PURE__ */ o.jsx("h1", { className: J.title, children: x(i) }),
          /* @__PURE__ */ o.jsx("p", { className: J.description, children: x(a ? "Выберите скрипт Home Assistant и укажите типы команд, приходящие с удалённого сервера. Типы вводятся вручную." : "Свяжите распознанную команду со скриптом Home Assistant. Выберите скрипт и задайте условия его запуска.") })
        ] }),
        /* @__PURE__ */ o.jsx("div", { className: J.actions, children: c ? /* @__PURE__ */ o.jsx(sr, { children: /* @__PURE__ */ o.jsx(
          se,
          {
            variant: "primary",
            onClick: Ee,
            children: x("Добавить сценарий")
          }
        ) }) : /* @__PURE__ */ o.jsx(o.Fragment, { children: /* @__PURE__ */ o.jsx(
          se,
          {
            variant: "primary",
            onClick: Ee,
            children: x("🞢 Добавить сценарий")
          }
        ) }) }),
        !c && /* @__PURE__ */ o.jsx(Lr, { value: R, onChange: C })
      ] }),
      /* @__PURE__ */ o.jsxs("div", { className: J.list, children: [
        /* @__PURE__ */ o.jsx(Hr, { loading: H, itemCount: (b == null ? void 0 : b.script_actions.length) ?? 0, append: c, children: b == null ? void 0 : b.script_actions.map((W) => /* @__PURE__ */ o.jsx(
          Or,
          {
            title: W.title,
            subTitle: "Нажмите для редактирования",
            onClick: () => je(W)
          },
          W.uuid
        )) }),
        !H && !N && R.trim() && !(b != null && b.script_actions.length) && /* @__PURE__ */ o.jsx("p", { role: "status", children: x("Ничего не найдено") }),
        c ? /* @__PURE__ */ o.jsx("div", { ref: pe, className: J.listSentinel }) : /* @__PURE__ */ o.jsx(o.Fragment, {})
      ] }),
      c ? /* @__PURE__ */ o.jsx(o.Fragment, {}) : /* @__PURE__ */ o.jsx(
        Fr,
        {
          page: (b == null ? void 0 : b.page) || 1,
          totalPages: (b == null ? void 0 : b.total_pages) || 1,
          onChange: B
        }
      ),
      /* @__PURE__ */ o.jsx(
        Z1,
        {
          uuid: y.uuid,
          open: g,
          title: y.title,
          onClose: () => w(!1),
          onEdit: me,
          onDelete: Se
        }
      ),
      /* @__PURE__ */ o.jsx(
        P0,
        {
          feedback: ce,
          open: p,
          initialData: d,
          isEdit: S,
          availableScripts: F(),
          loading: H,
          onCancel: () => h(!1),
          onSave: async (W) => {
            await ve(W);
          }
        }
      )
    ] })
  ] });
}, mp = (r) => ({
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
function hp(r) {
  const a = lt(), { query: i, setQuery: c, page: d, loading: f, loadPage: p, updateItems: h, error: g, retry: w } = pp(r);
  return { query: i, setQuery: c, error: g, retry: w, loading: f, commands: d, loadCommands: p, saveCommand: (C, N) => a.saveData(N, C), updateCommand: async (C, N) => {
    if (!N.uuid) return;
    const { uuid: A, ...H } = N, b = await a.updateRecord(A, C, H);
    return await p(), b;
  }, deleteCommand: (C, N) => a.deleteRecord(N, C), setCommandStatus: async (C, N, A) => {
    const H = await a.updateRecordStatus(C, N, A);
    return h((b) => b.map((F) => F.uuid === N ? { ...F, status: A } : F)), H;
  }, getCommandDetails: (C, N) => a.getRecord(N, C) };
}
const W0 = {
  main: { list: "get_assistant_commands_short", detail: "get_assistant_command", create: "save_assistant_command", update: "update_assistant_command", remove: "delete_assistant_command", status: "update_assistant_command_status" },
  sub: { list: "get_assistant_sub_commands_short", detail: "get_assistant_sub_command", create: "save_assistant_sub_command", update: "update_assistant_sub_command", remove: "delete_assistant_sub_command", status: "update_assistant_sub_command_status" },
  direct: { list: "get_assistant_sub_direct_controls_short", detail: "get_assistant_sub_direct_control", create: "save_assistant_sub_direct_control", update: "update_assistant_sub_direct_control", remove: "delete_assistant_sub_direct_control", status: "update_assistant_sub_direct_controls_status" },
  template: { list: "get_assistant_sub_direct_control_samples_short", detail: "get_assistant_sub_direct_control_sample", create: "save_assistant_sub_direct_control_sample", update: "update_assistant_sub_direct_control_sample", remove: "delete_assistant_sub_direct_control_sample" }
};
function mi(r, a) {
  const i = W0[r], { query: c, setQuery: d, commands: f, loading: p, loadCommands: h, getCommandDetails: g, saveCommand: w, updateCommand: y, deleteCommand: _, setCommandStatus: S, error: j, retry: R } = hp(i.list), C = Wt(), [N, A] = v.useState(!1), [H, b] = v.useState(!1), [F, B] = v.useState(a), [M, X] = v.useState(null), U = () => {
    C.clearError(), b(!1), B(a()), A(!0);
  }, G = (me) => C.run(async () => {
    const ve = await g(i.detail, me);
    b(!0);
    const Se = { ...ve.data, status: ve.data.status ?? !1 };
    for (const W of ["componentDialog", "subComponentDialog"]) {
      const z = Se[W];
      z && (z.nextAction = (z.nextAction ?? []).filter(
        (O) => !O.actionTypeComponent || ["children", "custom"].includes(O.actionTypeComponent)
      ));
    }
    B(Se), A(!0);
  }, { retryable: !0 }), pe = (me, ve) => C.run(async () => {
    i.status && await S(i.status, me, ve);
  }, { exclusive: !0 }), ce = (me) => C.run(async () => {
    await _(i.remove, me), await h();
  }, { exclusive: !0 }), Ee = () => C.run(async () => {
    await w(i.create, F), A(!1), await h();
  }, { exclusive: !0 }), je = () => C.run(async () => {
    await y(i.update, F), A(!1);
  }, { exclusive: !0 });
  return {
    query: c,
    setQuery: d,
    feedback: { error: C.error ?? j, busy: C.busy, retry: C.error ? C.retry ?? (() => {
      C.clearError(), R();
    }) : R },
    listError: j,
    commands: f,
    loading: p,
    loadCommands: h,
    modalOpen: N,
    setModalOpen: A,
    isEdit: H,
    formData: F,
    setFormData: B,
    actionsCommand: M,
    setActionsCommand: X,
    openCreateModal: U,
    openEditModal: G,
    handleToggleStatus: pe,
    handleDelete: ce,
    handleCreate: Ee,
    handleUpdate: je
  };
}
const B0 = "_field_1iloj_1", U0 = "_label_1iloj_8", V0 = "_select_1iloj_14", Sl = {
  field: B0,
  label: U0,
  select: V0
}, bn = ({
  label: r,
  hint: a,
  options: i,
  className: c = "",
  id: d,
  value: f,
  ...p
}) => {
  const h = v.useId(), g = d ?? h, w = f == null ? "" : String(f), y = !w || i.some((_) => _.value === w);
  return /* @__PURE__ */ o.jsxs("div", { className: Sl.field, children: [
    r && /* @__PURE__ */ o.jsx(Gl, { label: r, htmlFor: g, className: Sl.label, hint: a }),
    /* @__PURE__ */ o.jsxs(
      "select",
      {
        id: g,
        ...p,
        value: w,
        className: `${Sl.select} ${c}`,
        children: [
          !y && /* @__PURE__ */ o.jsx("option", { value: w, children: w }),
          i.map((_) => /* @__PURE__ */ o.jsx("option", { value: _.value, disabled: _.disabled, children: x(_.label) }, _.value))
        ]
      }
    )
  ] });
};
function Pl({ kind: r, value: a, title: i, onSelect: c }) {
  const d = lt(), [f, p] = v.useState([]), [h, g] = v.useState(!0), [w, y] = v.useState(!1), [_, S] = v.useState(null), [j, R] = v.useState(0), C = v.useRef(null), N = v.useRef(0);
  v.useEffect(() => () => {
    N.current += 1;
  }, []), v.useEffect(() => {
    let F = !1;
    g(!0), S(null);
    const B = r === "nested" ? ["get_assistant_sub_direct_control_samples_short"] : r === "direct" ? ["get_assistant_sub_direct_controls_short"] : ["get_assistant_commands_short", "get_assistant_sub_commands_short"];
    return Promise.all(B.map((M) => d.getAllRecords(M))).then((M) => {
      F || p([...new Map(M.flat().map((X) => [X.uuid, X])).values()]);
    }).catch((M) => {
      F || (S(Yt(M)), C.current = () => R((X) => X + 1));
    }).finally(() => {
      F || g(!1);
    }), () => {
      F = !0;
    };
  }, [d, r, j]), v.useEffect(() => {
    a && i && p((F) => F.map((B) => B.uuid === a ? { ...B, title: i } : B));
  }, [a, i]);
  const A = async (F) => {
    var X;
    if (!F) {
      N.current += 1, S(null), c({ uuid: "", title: "" });
      return;
    }
    const B = f.find((U) => U.uuid === F);
    if (!B) return;
    const M = ++N.current;
    if (S(null), r !== "direct") {
      c(B);
      return;
    }
    y(!0);
    try {
      const U = await d.getRecord(F, "get_assistant_sub_direct_control");
      M === N.current && c({ ...B, mappingType: ((X = U.data.directControl) == null ? void 0 : X.mappingType) ?? "" });
    } catch (U) {
      M === N.current && (S(Yt(U)), C.current = () => {
        A(F);
      });
    } finally {
      M === N.current && y(!1);
    }
  }, H = f.map((F) => ({ value: F.uuid, label: F.title || x("Без названия") }));
  a && !f.some((F) => F.uuid === a) && H.unshift({ value: a, label: i || x("Выбранная команда недоступна") });
  const b = x(r === "nested" ? "subDirectControl" : "uuid");
  return /* @__PURE__ */ o.jsxs("div", { children: [
    /* @__PURE__ */ o.jsx(
      bn,
      {
        label: b,
        "aria-label": b,
        value: a,
        disabled: h || w,
        options: [{ value: "", label: x(h ? "Загрузка..." : r === "nested" ? "Без вложенных команд" : "Выберите команду") }, ...H],
        onChange: (F) => {
          A(F.target.value);
        }
      }
    ),
    /* @__PURE__ */ o.jsx(Be, { error: _, busy: h || w, retry: () => {
      var F;
      return (F = C.current) == null ? void 0 : F.call(C);
    } })
  ] });
}
const q0 = [
  { label: "Ответ из списка фраз", value: "default" },
  { label: "Ответ из скрипта", value: "script_response" }
], Q0 = [
  { label: "all", value: "all" },
  { label: "string", value: "string" },
  { label: "int", value: "int" },
  { label: "date", value: "date" },
  { label: "time", value: "time" },
  { label: "Вложенные команды", value: "command" }
], K0 = [
  { label: "По умолчанию", value: "children" },
  { label: "По типу ответа скрипта", value: "custom" }
], Y0 = "_form_1a1tt_1", G0 = "_field_1a1tt_7", J0 = "_arrayItem_1a1tt_29", X0 = "_logicTabs_1a1tt_46", Z0 = "_sectionTitle_1a1tt_85", ex = "_footerActions_1a1tt_92", tx = "_phraseMode_1a1tt_106", nx = "_directTabLabel_1a1tt_122", rx = "_linkActions_1a1tt_126", Ye = {
  form: Y0,
  field: G0,
  arrayItem: J0,
  logicTabs: X0,
  sectionTitle: Z0,
  footerActions: ex,
  phraseMode: tx,
  directTabLabel: nx,
  linkActions: rx
}, vf = () => ({
  mappingType: "",
  valueType: "",
  voiceCommands: [""],
  manual: !1,
  subDirectControl: ""
}), vp = ({
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
    var j;
    if (!((j = d.title) != null && j.trim())) {
      w("Обязательное поле");
      return;
    }
    w(""), p();
  }, _ = v.useMemo(() => d.directControl ?? vf(), [d]), S = (j) => {
    f((R) => ({
      ...R,
      directControl: {
        ...R.directControl ?? vf(),
        ...j
      }
    }));
  };
  return /* @__PURE__ */ o.jsx(
    Jt,
    {
      feedback: a,
      open: r,
      onClose: i,
      onBack: h,
      title: c,
      footer: /* @__PURE__ */ o.jsx("div", { className: Ye.form, children: /* @__PURE__ */ o.jsx(se, { onClick: y, children: x("Сохранить") }) }),
      children: /* @__PURE__ */ o.jsxs("div", { className: Ye.form, children: [
        /* @__PURE__ */ o.jsx(
          Ue,
          {
            label: x("Название команды"),
            hint: pi(d.uuid),
            required: !0,
            error: g,
            value: d.title,
            onChange: (j) => f((R) => ({
              ...R,
              title: j.target.value
            }))
          }
        ),
        /* @__PURE__ */ o.jsx(
          Ue,
          {
            label: x("mappingType"),
            value: _.mappingType,
            onChange: (j) => S({
              mappingType: j.target.value
            })
          }
        ),
        /* @__PURE__ */ o.jsx(
          bn,
          {
            label: x("valueType"),
            value: _.valueType,
            options: Q0,
            onChange: (j) => S({
              valueType: j.target.value
            })
          }
        ),
        _.valueType == "command" ? /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
          /* @__PURE__ */ o.jsx("div", { className: Ye.field, children: /* @__PURE__ */ o.jsx(
            er,
            {
              label: x("Фразы для запуска"),
              hint: x("Фразы прямой команды — общая часть перед вложенными командами. Например: в основной команде «включи ${свет}», здесь — «свет», во вложенных командах — «в зале» и «в спальне». Получатся «включи свет в зале» и «включи свет в спальне».\nПоле можно оставить пустым: тогда используются только фразы вложенных команд. Один набор вложенных команд можно подключать к разным прямым командам."),
              rows: 6,
              value: (_.voiceCommands ?? []).join(`
`),
              onChange: (j) => S({
                voiceCommands: j.target.value.split(`
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
function sx({ target: r, onBack: a, onSaved: i }) {
  const c = lt(), d = Wt(), [f, p] = v.useState({ title: "" }), [h, g] = v.useState();
  v.useEffect(() => {
    let y = !1;
    return d.run(async () => {
      let _ = r.kind === "direct" ? "direct" : "main", S;
      if (r.kind === "direct") S = await c.getRecord(r.uuid, "get_assistant_sub_direct_control");
      else
        try {
          S = await c.getRecord(r.uuid, "get_assistant_command");
        } catch (j) {
          if (!(j && typeof j == "object" && "code" in j && j.code === "not_found")) throw j;
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
    await c.updateRecord(r.uuid, y, S), i(f), a();
  }, { exclusive: !0 });
  return h ? h === "direct" ? /* @__PURE__ */ o.jsx(
    vp,
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
    Xl,
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
  ) : /* @__PURE__ */ o.jsx(Jt, { open: !0, onClose: a, onBack: a, title: "Перейти к команде", feedback: d, children: d.busy && /* @__PURE__ */ o.jsx("p", { role: "status", children: x("Загрузка...") }) });
}
const ox = [
  { value: "default", label: "Основной" },
  { value: "default_next_step", label: "Ответ для продолжения диалога" },
  { value: "custom", label: "По типу результата скрипта" }
];
function ix({ response: r, onChange: a }) {
  const i = (r.actionType ?? "").trim().toLowerCase(), c = ["default", "direct", "default_direct", "next"].includes(i) ? "default" : i === "default_next_step" ? "default_next_step" : "custom";
  return /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
    /* @__PURE__ */ o.jsx(
      bn,
      {
        label: x("Типы ответов"),
        "aria-label": x("Типы ответов"),
        value: c,
        options: ox,
        onChange: (d) => a({ actionType: d.target.value === "custom" ? "" : d.target.value })
      }
    ),
    c === "custom" ? /* @__PURE__ */ o.jsx(
      Ue,
      {
        label: x("Тип результата скрипта"),
        placeholder: x("Например, room_required"),
        value: r.actionType ?? "",
        onChange: (d) => a({ actionType: d.target.value })
      }
    ) : null,
    /* @__PURE__ */ o.jsx(
      er,
      {
        label: x("voiceResponse"),
        value: r.voiceResponse,
        onChange: (d) => a({ voiceResponse: d.target.value })
      }
    )
  ] });
}
const ax = "_switchRow_1hmmz_1", lx = "_input_1hmmz_11", ux = "_track_1hmmz_22", cx = "_thumb_1hmmz_33", dx = "_label_1hmmz_62", $s = {
  switchRow: ax,
  input: lx,
  track: ux,
  thumb: cx,
  label: dx
}, tr = ({ label: r, className: a = "", ...i }) => /* @__PURE__ */ o.jsxs("label", { className: `${$s.switchRow} ${a}`, children: [
  /* @__PURE__ */ o.jsx("input", { ...i, type: "checkbox", className: $s.input }),
  /* @__PURE__ */ o.jsx("span", { className: $s.track, "aria-hidden": "true", children: /* @__PURE__ */ o.jsx("span", { className: $s.thumb }) }),
  /* @__PURE__ */ o.jsx("span", { className: $s.label, children: x(r) })
] }), fx = [
  { key: "direct", label: "Прямые команды" },
  { key: "continuations", label: "Продолжения" }
];
function px({ component: r, onOpenCommand: a, updateComponentArray: i, addComponentArrayItem: c, removeComponentArrayItem: d }) {
  const f = v.useId(), [p, h] = v.useState("direct"), g = fx.filter((y) => y.key !== "direct" || !r.forwardText), w = r.forwardText && p === "direct" ? "continuations" : p;
  return /* @__PURE__ */ o.jsxs("div", { className: Ye.form, children: [
    /* @__PURE__ */ o.jsx("div", { className: Ye.logicTabs, role: "tablist", "aria-label": x("Настройки логики"), children: g.map((y) => /* @__PURE__ */ o.jsx(
      "button",
      {
        type: "button",
        role: "tab",
        tabIndex: w === y.key ? 0 : -1,
        onKeyDown: (_) => {
          var R, C;
          const S = g.findIndex((N) => N.key === y.key), j = _.key === "ArrowRight" ? (S + 1) % g.length : _.key === "ArrowLeft" ? (S + g.length - 1) % g.length : _.key === "Home" ? 0 : _.key === "End" ? g.length - 1 : -1;
          j < 0 || (_.preventDefault(), h(g[j].key), (C = (R = _.currentTarget.parentElement) == null ? void 0 : R.querySelectorAll('[role="tab"]')[j]) == null || C.focus());
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
          bn,
          {
            label: x("Вид продолжения"),
            value: y.actionTypeComponent || "children",
            options: K0,
            onChange: (S) => i("nextAction", _, {
              actionTypeComponent: S.target.value
            })
          }
        ),
        y.actionTypeComponent == "custom" ? /* @__PURE__ */ o.jsx(
          Ue,
          {
            label: x("Тип результата скрипта"),
            placeholder: x("Например, room_required"),
            value: y.actionType ?? "",
            onChange: (S) => i("nextAction", _, {
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
            onSelect: (S) => i("nextAction", _, {
              uuid: S.uuid,
              title: S.title ?? "",
              actionTypeComponent: y.actionTypeComponent || "children"
            })
          }
        ),
        /* @__PURE__ */ o.jsxs("div", { className: Ye.linkActions, children: [
          y.uuid && /* @__PURE__ */ o.jsx(se, { variant: "secondary", onClick: () => a({ uuid: y.uuid, kind: "continuation" }, _), children: x("Перейти к команде") }),
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
            onSelect: (S) => i("nextDirectControl", _, {
              uuid: S.uuid,
              mappingType: S.mappingType ?? "",
              title: S.title ?? ""
            })
          }
        ),
        y.uuid && /* @__PURE__ */ o.jsx(
          Ue,
          {
            label: x("mappingType"),
            hint: x("Переменная для фраз запуска. Например, используйте ${room} во фразе, если здесь указано room."),
            readOnly: !0,
            value: y.mappingType ?? ""
          }
        ),
        /* @__PURE__ */ o.jsxs("div", { className: Ye.linkActions, children: [
          y.uuid && /* @__PURE__ */ o.jsx(se, { variant: "secondary", onClick: () => a({ uuid: y.uuid, kind: "direct" }, _), children: x("Перейти к команде") }),
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
const yf = () => ({
  endStatus: !0,
  script_entity_id: "",
  answerType: "default",
  voiceCommands: [""],
  nextDirectControl: [{ uuid: "", actionType: "", title: "" }],
  voiceResponseArray: [{ actionType: "default", voiceResponse: "" }],
  nextAction: [{ actionTypeComponent: "children", actionType: "", uuid: "", title: "" }]
}), Xl = ({
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
  const _ = lt().getScripts(), S = v.useMemo(() => c[d] ?? yf(), [c, d]);
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
  const [j, R] = v.useState(null);
  v.useEffect(() => {
    r || R(null);
  }, [r]);
  const [C, N] = v.useState(!1);
  v.useEffect(() => {
    N(!1), H({});
  }, [r, c.uuid, d]);
  const [A, H] = v.useState({}), b = (U) => {
    f((G) => ({
      ...G,
      [d]: {
        ...G[d] ?? yf(),
        ...U
      }
    }));
  }, F = (U, G, pe) => {
    const ce = [...S[U] ?? []];
    ce[G] = { ...ce[G], ...pe }, b({
      [U]: ce
    });
  }, B = (U, G) => {
    b({
      [U]: [...S[U] ?? [], G]
    });
  }, M = (U, G) => {
    b({
      [U]: (S[U] ?? []).filter(
        (pe, ce) => ce !== G
      )
    });
  }, X = () => {
    const U = {};
    return c.title.trim() || (U.title = "Обязательное поле"), H(U), Object.keys(U).length === 0;
  };
  return /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
    /* @__PURE__ */ o.jsx(
      Jt,
      {
        suspended: !!j,
        feedback: a,
        open: r,
        onClose: p,
        onBack: h,
        title: C ? "Настроить логику" : i ? "Редактировать" : "Создать",
        footer: /* @__PURE__ */ o.jsx("div", { className: Ye.form, children: C ? /* @__PURE__ */ o.jsx(se, { variant: "secondary", onClick: () => N(!1), children: x("Назад") }) : /* @__PURE__ */ o.jsxs("div", { className: Ye.footerActions, children: [
          /* @__PURE__ */ o.jsx(se, { variant: "secondary", onClick: () => N(!0), children: x("Настроить логику") }),
          /* @__PURE__ */ o.jsx(se, { onClick: () => {
            X() && (i ? w() : g());
          }, children: x(i ? "Обновить" : "Сохранить") })
        ] }) }),
        children: C ? /* @__PURE__ */ o.jsx(
          px,
          {
            onOpenCommand: (U, G) => R({ ...U, index: G }),
            component: S,
            updateComponentArray: F,
            addComponentArrayItem: B,
            removeComponentArrayItem: M
          }
        ) : /* @__PURE__ */ o.jsxs("div", { className: Ye.form, children: [
          /* @__PURE__ */ o.jsx(
            Ue,
            {
              label: x("Название команды"),
              hint: pi(c.uuid),
              value: c.title,
              error: A.title,
              onChange: (U) => f({
                ...c,
                title: U.target.value
              })
            }
          ),
          /* @__PURE__ */ o.jsx(
            bn,
            {
              label: x("Источник ответа"),
              value: ["ha_storage", "ha", "external"].includes(S.answerType) ? "script_response" : S.answerType,
              options: q0,
              onChange: (U) => b({
                answerType: U.target.value
              })
            }
          ),
          /* @__PURE__ */ o.jsx(
            bn,
            {
              label: x("Скрипт Home Assistant"),
              value: S.script_entity_id ?? "__legacy__",
              options: [
                ...S.script_entity_id === void 0 ? [{ label: x("Использовать существующие сценарии"), value: "__legacy__" }] : [],
                { label: x("Не запускать скрипт"), value: "" },
                ..._.map((U) => ({ label: U.name, value: U.entity_id }))
              ],
              onChange: (U) => b({ script_entity_id: U.target.value })
            }
          ),
          d === "subComponentDialog" && /* @__PURE__ */ o.jsxs("div", { className: Ye.phraseMode, children: [
            /* @__PURE__ */ o.jsx(
              tr,
              {
                label: x("Отправить команду как есть"),
                checked: !!S.forwardText,
                onChange: (U) => b({ forwardText: U.target.checked })
              }
            ),
            /* @__PURE__ */ o.jsx(Ds, { label: "Отправить команду как есть" })
          ] }),
          !(d === "subComponentDialog" && S.forwardText) && /* @__PURE__ */ o.jsx("div", { className: Ye.field, children: /* @__PURE__ */ o.jsx(
            er,
            {
              label: x("Фразы для запуска"),
              value: (S.voiceCommands == null ? [] : typeof S.voiceCommands != "object" ? S == null ? void 0 : S.voiceCommands.split(";") : S == null ? void 0 : S.voiceCommands).join(`
`),
              onChange: (U) => b({
                voiceCommands: U.target.value.split(`
`)
              })
            }
          ) }),
          /* @__PURE__ */ o.jsxs("section", { className: Ye.form, "aria-label": x("Ответы"), children: [
            /* @__PURE__ */ o.jsx("h3", { className: Ye.sectionTitle, children: x("Ответы") }),
            (S.voiceResponseArray ?? []).map((U, G) => /* @__PURE__ */ o.jsxs("div", { className: Ye.arrayItem, children: [
              /* @__PURE__ */ o.jsx(
                ix,
                {
                  response: U,
                  onChange: (pe) => F("voiceResponseArray", G, pe)
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
    j && /* @__PURE__ */ o.jsx(
      sx,
      {
        target: j,
        onBack: () => R(null),
        onSaved: (U) => {
          var G;
          j.kind === "direct" ? F("nextDirectControl", j.index, { title: U.title, mappingType: ((G = U.directControl) == null ? void 0 : G.mappingType) ?? "" }) : F("nextAction", j.index, { title: U.title });
        }
      },
      `${j.kind}-${j.uuid}`
    )
  ] });
}, hi = ({ command: r, open: a, onClose: i, onToggleStatus: c, onEdit: d, onDelete: f }) => r ? /* @__PURE__ */ o.jsx(Jl, { open: a, title: r.title, uuid: r.uuid, onClose: i, actions: [
  ...c ? [{ label: r.status ? "Выключить" : "Включить", onClick: () => c(r.uuid, !r.status) }] : [],
  { label: "Изменить", variant: "secondary", onClick: () => d(r.uuid) },
  { label: "Удалить", variant: "remove", onClick: () => f(r.uuid) }
] }) : null, mx = () => mp("componentDialog"), hx = () => {
  const r = Ze(), {
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
    formData: _,
    setFormData: S,
    actionsCommand: j,
    setActionsCommand: R,
    openCreateModal: C,
    openEditModal: N,
    handleToggleStatus: A,
    handleDelete: H,
    handleCreate: b,
    handleUpdate: F
  } = mi("main", mx), B = zr(f, p || !!d, h, r);
  return /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
    /* @__PURE__ */ o.jsx(
      _t,
      {
        search: { value: a, onChange: i },
        title: "Основные команды"
      }
    ),
    /* @__PURE__ */ o.jsxs("div", { className: J.page, children: [
      !g && /* @__PURE__ */ o.jsx(Be, { ...c }),
      /* @__PURE__ */ o.jsx(gt, {}),
      /* @__PURE__ */ o.jsxs("div", { className: `${J.header} ${J.collectionHeader}`, children: [
        /* @__PURE__ */ o.jsx("div", { className: J.heading, children: r ? /* @__PURE__ */ o.jsx(o.Fragment, {}) : /* @__PURE__ */ o.jsx("h1", { className: J.title, children: x("Основные команды") }) }),
        /* @__PURE__ */ o.jsx("div", { className: J.actions, children: r ? /* @__PURE__ */ o.jsx(sr, { children: /* @__PURE__ */ o.jsx(se, { variant: "primary", onClick: C, children: x("Добавить сценарий") }) }) : /* @__PURE__ */ o.jsx(se, { variant: "primary", onClick: C, children: x("🞢 Добавить сценарий") }) }),
        !r && /* @__PURE__ */ o.jsx(Lr, { value: a, onChange: i })
      ] }),
      /* @__PURE__ */ o.jsxs("div", { className: J.list, children: [
        /* @__PURE__ */ o.jsx(Hr, { loading: p, itemCount: (f == null ? void 0 : f.data.length) ?? 0, append: r, children: f == null ? void 0 : f.data.map((M) => /* @__PURE__ */ o.jsx(
          Or,
          {
            title: M.title,
            subTitle: M.status === !1 ? "Выключена" : "Включена",
            onClick: () => R(M)
          },
          M.uuid
        )) }),
        !p && !d && a.trim() && !(f != null && f.data.length) && /* @__PURE__ */ o.jsx("p", { role: "status", children: x("Ничего не найдено") }),
        r ? /* @__PURE__ */ o.jsx("div", { ref: B, className: J.listSentinel }) : /* @__PURE__ */ o.jsx(o.Fragment, {})
      ] }),
      r ? /* @__PURE__ */ o.jsx(o.Fragment, {}) : /* @__PURE__ */ o.jsx(
        Fr,
        {
          page: (f == null ? void 0 : f.page) || 1,
          totalPages: (f == null ? void 0 : f.total_pages) || 1,
          onChange: (M) => h(M)
        }
      ),
      /* @__PURE__ */ o.jsx(
        Xl,
        {
          feedback: c,
          open: g,
          isEdit: y,
          formData: _,
          componentKey: "componentDialog",
          setFormData: S,
          onClose: () => w(!1),
          onSave: b,
          onUpdate: F
        }
      ),
      /* @__PURE__ */ o.jsx(
        hi,
        {
          open: !!j,
          command: j,
          onClose: () => R(null),
          onToggleStatus: A,
          onDelete: H,
          onEdit: (M) => N(M)
        }
      )
    ] })
  ] });
}, vx = () => mp("subComponentDialog"), yx = () => {
  const r = Ze(), {
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
    formData: _,
    setFormData: S,
    actionsCommand: j,
    setActionsCommand: R,
    openCreateModal: C,
    openEditModal: N,
    handleToggleStatus: A,
    handleDelete: H,
    handleCreate: b,
    handleUpdate: F
  } = mi("sub", vx), B = zr(f, p || !!d, h, r);
  return /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
    /* @__PURE__ */ o.jsx(
      _t,
      {
        search: { value: a, onChange: i },
        title: "Второстепенные команды"
      }
    ),
    /* @__PURE__ */ o.jsxs("div", { className: J.page, children: [
      !g && /* @__PURE__ */ o.jsx(Be, { ...c }),
      r ? /* @__PURE__ */ o.jsx(o.Fragment, {}) : /* @__PURE__ */ o.jsx(gt, {}),
      /* @__PURE__ */ o.jsxs("div", { className: `${J.header} ${J.collectionHeader}`, children: [
        /* @__PURE__ */ o.jsx("div", { className: J.heading, children: r ? /* @__PURE__ */ o.jsx(o.Fragment, {}) : /* @__PURE__ */ o.jsx("h1", { className: J.title, children: x("Второстепенные команды") }) }),
        /* @__PURE__ */ o.jsx("div", { className: J.actions, children: r ? /* @__PURE__ */ o.jsx(sr, { children: /* @__PURE__ */ o.jsx(se, { variant: "primary", onClick: C, children: x("Добавить сценарий") }) }) : /* @__PURE__ */ o.jsx(o.Fragment, { children: /* @__PURE__ */ o.jsx(se, { variant: "primary", onClick: C, children: x("🞢 Добавить сценарий") }) }) }),
        !r && /* @__PURE__ */ o.jsx(Lr, { value: a, onChange: i })
      ] }),
      /* @__PURE__ */ o.jsxs("div", { className: J.list, children: [
        /* @__PURE__ */ o.jsx(Hr, { loading: p, itemCount: (f == null ? void 0 : f.data.length) ?? 0, append: r, children: f == null ? void 0 : f.data.map((M) => /* @__PURE__ */ o.jsx(
          Or,
          {
            title: M.title,
            subTitle: M.status === !1 ? "Выключена" : "Включена",
            onClick: () => R(M)
          },
          M.uuid
        )) }),
        !p && !d && a.trim() && !(f != null && f.data.length) && /* @__PURE__ */ o.jsx("p", { role: "status", children: x("Ничего не найдено") })
      ] }),
      r ? /* @__PURE__ */ o.jsx("div", { ref: B, className: J.listSentinel }) : /* @__PURE__ */ o.jsx(
        Fr,
        {
          page: (f == null ? void 0 : f.page) || 1,
          totalPages: (f == null ? void 0 : f.total_pages) || 1,
          onChange: (M) => h(M)
        }
      ),
      /* @__PURE__ */ o.jsx(
        Xl,
        {
          feedback: c,
          open: g,
          isEdit: y,
          formData: _,
          componentKey: "subComponentDialog",
          setFormData: S,
          onClose: () => w(!1),
          onSave: b,
          onUpdate: F
        }
      ),
      /* @__PURE__ */ o.jsx(
        hi,
        {
          open: !!j,
          command: j,
          onClose: () => R(null),
          onToggleStatus: A,
          onDelete: H,
          onEdit: (M) => N(M)
        }
      )
    ] })
  ] });
}, gx = [
  { path: "/commands/direct/main", label: "Команды" },
  { path: "/commands/direct/template", label: "Вложенные команды" }
], li = () => {
  const { pathname: r } = yt(), a = Dl();
  return /* @__PURE__ */ o.jsx("div", { className: J.innerTabs, role: "group", "aria-label": x("Раздел прямых команд"), children: gx.map((i) => /* @__PURE__ */ o.jsx(
    "button",
    {
      type: "button",
      "aria-pressed": r === i.path,
      className: `${J.innerTab} ${r === i.path ? J.activeInnerTab : ""}`,
      onClick: () => a(i.path),
      children: x(i.label)
    },
    i.path
  )) });
}, _x = () => ({
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
}), xx = () => {
  const r = Ze(), {
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
    formData: _,
    setFormData: S,
    actionsCommand: j,
    setActionsCommand: R,
    openCreateModal: C,
    openEditModal: N,
    handleToggleStatus: A,
    handleDelete: H,
    handleCreate: b,
    handleUpdate: F
  } = mi("direct", _x), B = zr(f, p || !!d, h, r);
  return /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
    /* @__PURE__ */ o.jsx(
      _t,
      {
        search: { value: a, onChange: i },
        beforeSearch: /* @__PURE__ */ o.jsx(li, {}),
        title: "Прямые команды"
      }
    ),
    /* @__PURE__ */ o.jsxs("div", { className: J.page, children: [
      !g && /* @__PURE__ */ o.jsx(Be, { ...c }),
      r ? /* @__PURE__ */ o.jsx(o.Fragment, {}) : /* @__PURE__ */ o.jsx(gt, {}),
      /* @__PURE__ */ o.jsxs("div", { className: `${J.header} ${J.collectionHeader}`, children: [
        /* @__PURE__ */ o.jsxs("div", { className: J.heading, children: [
          r ? /* @__PURE__ */ o.jsx(o.Fragment, {}) : /* @__PURE__ */ o.jsx("h1", { className: J.title, children: x("Прямые команды") }),
          !r && /* @__PURE__ */ o.jsx(li, {})
        ] }),
        /* @__PURE__ */ o.jsx("div", { className: J.actions, children: r ? /* @__PURE__ */ o.jsx(sr, { children: /* @__PURE__ */ o.jsx(se, { variant: "primary", onClick: C, children: x("Добавить сценарий") }) }) : /* @__PURE__ */ o.jsx(se, { variant: "primary", onClick: C, children: x("🞢 Добавить сценарий") }) }),
        !r && /* @__PURE__ */ o.jsx(Lr, { value: a, onChange: i })
      ] }),
      /* @__PURE__ */ o.jsxs("div", { className: J.list, children: [
        /* @__PURE__ */ o.jsx(Hr, { loading: p, itemCount: (f == null ? void 0 : f.data.length) ?? 0, append: r, children: f == null ? void 0 : f.data.map((M) => /* @__PURE__ */ o.jsx(
          Or,
          {
            title: M.title,
            subTitle: M.status === !1 ? "Выключена" : "Включена",
            onClick: () => R(M)
          },
          M.uuid
        )) }),
        !p && !d && a.trim() && !(f != null && f.data.length) && /* @__PURE__ */ o.jsx("p", { role: "status", children: x("Ничего не найдено") })
      ] }),
      r ? /* @__PURE__ */ o.jsx("div", { ref: B, className: J.listSentinel }) : /* @__PURE__ */ o.jsx(
        Fr,
        {
          page: (f == null ? void 0 : f.page) || 1,
          totalPages: (f == null ? void 0 : f.total_pages) || 1,
          onChange: (M) => h(M)
        }
      ),
      /* @__PURE__ */ o.jsx(
        vp,
        {
          feedback: c,
          open: g,
          onClose: () => w(!1),
          title: x(y ? "Редактировать прямую команду" : "Создать прямую команду"),
          formData: _,
          setFormData: S,
          onSave: y ? F : b
        }
      ),
      /* @__PURE__ */ o.jsx(
        hi,
        {
          open: !!j,
          command: j,
          onClose: () => R(null),
          onToggleStatus: A,
          onDelete: H,
          onEdit: (M) => N(M)
        }
      )
    ] })
  ] });
}, wx = "_form_mn1ml_1", Sx = "_arrayItem_mn1ml_8", kx = "_sectionTitle_mn1ml_25", ti = {
  form: wx,
  arrayItem: Sx,
  sectionTitle: kx
}, jx = ({
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
    var C;
    if (!((C = d.title) != null && C.trim())) {
      g("Обязательное поле");
      return;
    }
    g(""), p();
  }, y = v.useMemo(
    () => d.subDirectControl ?? [],
    [d]
  ), _ = (C) => {
    f((N) => ({
      ...N,
      subDirectControl: C
    }));
  }, S = (C, N) => {
    const A = [...y];
    A[C] = {
      ...A[C],
      ...N
    }, _(A);
  }, j = () => {
    _([
      ...y,
      {
        subMappingType: "",
        subVoiceCommands: ""
      }
    ]);
  }, R = (C) => {
    _(
      y.filter((N, A) => A !== C)
    );
  };
  return /* @__PURE__ */ o.jsx(
    Jt,
    {
      feedback: a,
      open: r,
      onClose: i,
      title: c,
      footer: /* @__PURE__ */ o.jsx(se, { onClick: w, children: x("Сохранить") }),
      children: /* @__PURE__ */ o.jsxs("div", { className: ti.form, children: [
        /* @__PURE__ */ o.jsx(
          Ue,
          {
            label: x("Название команды"),
            hint: pi(d.uuid),
            required: !0,
            error: h,
            value: d.title,
            onChange: (C) => f((N) => ({
              ...N,
              title: C.target.value
            }))
          }
        ),
        /* @__PURE__ */ o.jsxs("section", { className: ti.form, "aria-label": x("Варианты вложенных команд"), children: [
          /* @__PURE__ */ o.jsx("h3", { className: ti.sectionTitle, children: x("Варианты вложенных команд") }),
          y.map((C, N) => /* @__PURE__ */ o.jsxs(
            "div",
            {
              className: ti.arrayItem,
              children: [
                /* @__PURE__ */ o.jsx(
                  Ue,
                  {
                    label: x("Код значения"),
                    value: C.subMappingType ?? "",
                    onChange: (A) => S(N, {
                      subMappingType: A.target.value
                    })
                  }
                ),
                /* @__PURE__ */ o.jsx(
                  er,
                  {
                    label: x("Варианты произношения"),
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
                  se,
                  {
                    type: "button",
                    variant: "remove",
                    onClick: () => R(N),
                    children: x("Удалить")
                  }
                )
              ]
            },
            N
          )),
          /* @__PURE__ */ o.jsx(
            se,
            {
              type: "button",
              variant: "secondary",
              fullWidth: !0,
              leftIcon: /* @__PURE__ */ o.jsx("span", { "aria-hidden": "true", children: "+" }),
              onClick: j,
              children: x("Добавить ещё")
            }
          )
        ] })
      ] })
    }
  );
}, Cx = () => ({
  status: !0,
  title: "",
  subDirectControl: []
}), Ex = () => {
  const r = Ze(), {
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
    formData: _,
    setFormData: S,
    actionsCommand: j,
    setActionsCommand: R,
    openCreateModal: C,
    openEditModal: N,
    handleDelete: A,
    handleCreate: H,
    handleUpdate: b
  } = mi("template", Cx), F = zr(f, p || !!d, h, r);
  return /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
    /* @__PURE__ */ o.jsx(
      _t,
      {
        search: { value: a, onChange: i },
        beforeSearch: /* @__PURE__ */ o.jsx(li, {}),
        title: "Вложенные команды"
      }
    ),
    /* @__PURE__ */ o.jsxs("div", { className: J.page, children: [
      !g && /* @__PURE__ */ o.jsx(Be, { ...c }),
      !r && /* @__PURE__ */ o.jsx(gt, {}),
      /* @__PURE__ */ o.jsxs("div", { className: `${J.header} ${J.collectionHeader}`, children: [
        /* @__PURE__ */ o.jsxs("div", { className: J.heading, children: [
          r ? /* @__PURE__ */ o.jsx(o.Fragment, {}) : /* @__PURE__ */ o.jsx("h1", { className: J.title, children: x("Вложенные команды") }),
          !r && /* @__PURE__ */ o.jsx(li, {})
        ] }),
        /* @__PURE__ */ o.jsx("div", { className: J.actions, children: r ? /* @__PURE__ */ o.jsx(sr, { children: /* @__PURE__ */ o.jsx(se, { variant: "primary", onClick: C, children: x("Добавить сценарий") }) }) : /* @__PURE__ */ o.jsx(se, { variant: "primary", onClick: C, children: x("🞢 Добавить сценарий") }) }),
        !r && /* @__PURE__ */ o.jsx(Lr, { value: a, onChange: i })
      ] }),
      /* @__PURE__ */ o.jsxs("div", { className: J.list, children: [
        /* @__PURE__ */ o.jsx(Hr, { loading: p, itemCount: (f == null ? void 0 : f.data.length) ?? 0, append: r, children: f == null ? void 0 : f.data.map((B) => /* @__PURE__ */ o.jsx(
          Or,
          {
            title: B.title,
            onClick: () => R(B)
          },
          B.uuid
        )) }),
        !p && !d && a.trim() && !(f != null && f.data.length) && /* @__PURE__ */ o.jsx("p", { role: "status", children: x("Ничего не найдено") })
      ] }),
      r ? /* @__PURE__ */ o.jsx(
        "div",
        {
          ref: F,
          className: J.listSentinel
        }
      ) : /* @__PURE__ */ o.jsx(
        Fr,
        {
          page: (f == null ? void 0 : f.page) ?? 1,
          totalPages: (f == null ? void 0 : f.total_pages) ?? 1,
          onChange: (B) => h(
            B
          )
        }
      ),
      /* @__PURE__ */ o.jsx(
        jx,
        {
          feedback: c,
          open: g,
          onClose: () => w(!1),
          title: y ? "Редактировать" : "Создать",
          formData: _,
          setFormData: S,
          onSave: y ? b : H
        }
      ),
      /* @__PURE__ */ o.jsx(
        hi,
        {
          open: !!j,
          command: j,
          onClose: () => R(null),
          onDelete: A,
          onEdit: (B) => N(B)
        }
      )
    ] })
  ] });
}, gf = {
  default_main: "Если ничего не нашёл",
  not_understand: "Если не распознано продолжение",
  finish_miss: "Если продолжение не распознано несколько раз"
};
function yp(r) {
  return r.actionType && gf[r.actionType] ? x(gf[r.actionType]) : r.title;
}
const Nx = "_form_1i0x1_1", Tx = {
  form: Nx
}, Rx = ({
  open: r,
  feedback: a,
  isEdit: i,
  formData: c,
  setFormData: d,
  onClose: f,
  onUpdate: p
}) => {
  var _, S;
  const h = c, g = lt().getScripts(), w = h.actionType === "default_main" && !!h.forwardCommandToServer, y = (j) => {
    d((R) => ({
      ...R,
      ...j
    }));
  };
  return /* @__PURE__ */ o.jsx(
    Jt,
    {
      feedback: a,
      open: r,
      onClose: f,
      title: i ? "Редактировать" : "Создать",
      footer: /* @__PURE__ */ o.jsx(se, { onClick: p, children: x("Обновить") }),
      children: /* @__PURE__ */ o.jsxs("div", { className: Tx.form, children: [
        /* @__PURE__ */ o.jsx(
          Ue,
          {
            label: x("Название команды"),
            hint: pi(c.uuid),
            value: yp(c),
            readOnly: !0
          }
        ),
        /* @__PURE__ */ o.jsx(
          tr,
          {
            label: x("Завершать диалог"),
            checked: !!h.endStatus,
            onChange: (j) => y({
              endStatus: j.target.checked
            })
          }
        ),
        h.actionType === "default_main" && /* @__PURE__ */ o.jsx(
          tr,
          {
            label: x("Передать команду серверу"),
            checked: !!h.forwardCommandToServer,
            onChange: (j) => y({
              forwardCommandToServer: j.target.checked
            })
          }
        ),
        h.actionType === "default_main" && h.forwardCommandToServer && /* @__PURE__ */ o.jsx(
          bn,
          {
            label: x("Скрипт Home Assistant"),
            value: h.script_entity_id ?? "",
            options: [
              { value: "", label: x("Использовать существующие сценарии") },
              ...g.map((j) => ({ value: j.entity_id, label: j.name })),
              ...h.script_entity_id && !g.some((j) => j.entity_id === h.script_entity_id) ? [{ value: h.script_entity_id, label: h.script_entity_id }] : []
            ],
            onChange: (j) => y({ script_entity_id: j.target.value })
          }
        ),
        w ? /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
          /* @__PURE__ */ o.jsx(
            Ue,
            {
              label: x("Тип результата скрипта"),
              value: "success",
              readOnly: !0,
              hint: x("Ожидается ответ скрипта с типом success. После его получения будет озвучен текст из поля ниже.")
            }
          ),
          /* @__PURE__ */ o.jsx(
            er,
            {
              rows: 8,
              label: x("Текст озвучки"),
              hint: x("Можно подставить данные из скрипта через ${имя}. Например, для текста «Ответ: ${reply}» передайте reply в поле variables действия ha_dialog_ui.send_command. Имена должны совпадать. Скрипт должен вернуть тип success."),
              placeholder: x("Например: ${reply}"),
              value: ((S = (_ = h.voiceResponseArray) == null ? void 0 : _.find((j) => j.actionType === "success")) == null ? void 0 : S.voiceResponse) ?? "",
              onChange: (j) => y({ voiceResponseArray: [{ actionType: "success", voiceResponse: j.target.value }] })
            }
          )
        ] }) : /* @__PURE__ */ o.jsx(
          er,
          {
            rows: 8,
            "aria-label": x("Ответное сообщение"),
            label: x("Ответное сообщение"),
            value: h.voiceResponse,
            onChange: (j) => y({
              voiceResponse: j.target.value
            })
          }
        )
      ] })
    }
  );
}, Px = () => {
  const r = Wt(), a = Ze(), [i, c] = v.useState(!1), [d, f] = v.useState(!1), [p, h] = v.useState({ title: "" }), {
    error: g,
    retry: w,
    loading: y,
    loadCommands: _,
    getCommandDetails: S,
    updateCommand: j,
    commands: R
  } = hp("get_assistant_settings_short"), C = zr(R, y || !!g, _, a), N = { error: r.error ?? g, busy: r.busy, retry: r.error ? r.retry ?? (() => {
    r.clearError(), w();
  }) : w }, A = (b) => r.run(async () => {
    f(!0);
    const F = await S("get_assistant_setting", b.uuid);
    h(F.data), c(!0);
  }, { retryable: !0 }), H = () => r.run(async () => {
    await j("update_assistant_setting", p), c(!1);
  }, { exclusive: !0 });
  return /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
    /* @__PURE__ */ o.jsx(
      _t,
      {
        title: "Ответы по умолчанию"
      }
    ),
    /* @__PURE__ */ o.jsxs("div", { className: J.page, children: [
      !i && /* @__PURE__ */ o.jsx(Be, { ...N }),
      a ? /* @__PURE__ */ o.jsx(o.Fragment, {}) : /* @__PURE__ */ o.jsx(gt, {}),
      /* @__PURE__ */ o.jsx("div", { className: `${J.header} ${J.collectionHeader}`, children: /* @__PURE__ */ o.jsx("div", { className: J.headerTop, children: /* @__PURE__ */ o.jsx("div", { className: J.heading, children: !a && /* @__PURE__ */ o.jsx("h1", { className: J.title, children: x("Ответы по умолчанию") }) }) }) }),
      /* @__PURE__ */ o.jsx("div", { className: J.list, children: /* @__PURE__ */ o.jsx(Hr, { loading: y, itemCount: (R == null ? void 0 : R.data.length) ?? 0, append: a, children: R == null ? void 0 : R.data.map((b) => /* @__PURE__ */ o.jsx(
        Or,
        {
          title: yp(b),
          onClick: () => A(b)
        },
        b.uuid
      )) }) }),
      a ? /* @__PURE__ */ o.jsx("div", { ref: C, className: J.listSentinel }) : /* @__PURE__ */ o.jsx(
        Fr,
        {
          page: (R == null ? void 0 : R.page) || 1,
          totalPages: (R == null ? void 0 : R.total_pages) || 1,
          onChange: (b) => _(b)
        }
      ),
      /* @__PURE__ */ o.jsx(
        Rx,
        {
          feedback: N,
          open: i,
          isEdit: d,
          formData: p,
          setFormData: h,
          onClose: () => c(!1),
          onUpdate: H
        }
      )
    ] })
  ] });
}, Ax = (r, a) => {
  const i = new Blob([JSON.stringify(a, null, 2)], {
    type: "application/json;charset=utf-8"
  }), c = URL.createObjectURL(i), d = document.createElement("a");
  d.href = c, d.download = r, document.body.appendChild(d), d.click(), d.remove(), URL.revokeObjectURL(c);
};
class At extends Error {
}
const gp = {
  scripts: { list: "get_script_actions_short", detail: "get_script_action", import: "import_script_actions" },
  scenarios: { list: "get_assistant_sub_commands_short", detail: "get_assistant_sub_command", import: "import_assistant_sub_commands" }
}, Kt = (r) => r !== null && typeof r == "object" && !Array.isArray(r);
async function bx(r, a) {
  if (a === "settings") {
    const d = await r.getData("get_settings"), f = Kt(d) && Kt(d.result) ? d.result : d;
    if (!Kt(f)) throw new At("Файл не содержит корректные настройки.");
    return Object.fromEntries(["theme", "client_id", "is_admin", "active_remout", "api_commands_enabled", "api_commands_token", "remout", "timer_alarm"].filter((h) => h in f).map((h) => [h, f[h]]));
  }
  if (a === "scenarios") return r.getData("export_command_bundle");
  const i = gp[a], c = await r.getAllRecords(i.list);
  return Promise.all(c.map(async (d) => {
    const f = await r.getRecord(d.uuid, i.detail);
    return Kt(f) ? f.data : void 0;
  }));
}
function $x(r, a) {
  let i;
  try {
    i = JSON.parse(r);
  } catch {
    throw new At("Некорректный JSON-файл.");
  }
  if (a === "settings") {
    const d = { theme: "string", client_id: "string", is_admin: "boolean", active_remout: "boolean", api_commands_enabled: "boolean", api_commands_token: "string", remout: "object", timer_alarm: "object" };
    if (!Kt(i) || !Object.keys(i).length || Object.keys(i).some((f) => !d[f] || typeof i[f] !== d[f])) throw new At("Файл не содержит корректные настройки.");
    if (i.theme !== void 0 && (typeof i.theme != "string" || !["dark", "light"].includes(i.theme))) throw new At("Файл не содержит корректные настройки.");
    for (const [f, p] of [["remout", ["base_url", "token", "client_id"]], ["timer_alarm", ["global_music_timer", "global_music_alarm"]]])
      if (f in i && (!Kt(i[f]) || Object.entries(i[f]).some(([h, g]) => !p.includes(h) || typeof g != "string"))) throw new At("Файл не содержит корректные настройки.");
    return i;
  }
  if (a === "scenarios" && Kt(i)) {
    const d = ["commands", "sub_commands", "direct_commands", "templates", "settings"];
    if (i.format !== "ha-dialog-ui-commands" || i.version !== 1 || Object.keys(i).length !== 7 || d.some((f) => !Array.isArray(i[f]))) throw new At("Некорректный файл сценариев или неподдерживаемая версия.");
    for (const f of d) {
      const p = /* @__PURE__ */ new Set(), h = i[f];
      if (!Array.isArray(h)) throw new At("Ожидается массив записей JSON.");
      for (const g of h) {
        if (!Kt(g) || typeof g.uuid != "string" || !g.uuid.trim() || p.has(g.uuid) || typeof g.title != "string") throw new At("Некорректные или повторяющиеся ID записей.");
        p.add(g.uuid);
      }
    }
    return i;
  }
  if (!Array.isArray(i)) throw new At("Ожидается массив записей JSON.");
  const c = /* @__PURE__ */ new Set();
  for (const d of i) {
    if (!Kt(d) || typeof d.uuid != "string" || !d.uuid.trim() || c.has(d.uuid)) throw new At("Некорректные или повторяющиеся ID записей.");
    if (c.add(d.uuid), !(a === "scripts" ? typeof d.name == "string" && typeof d.script_entity_id == "string" : typeof d.title == "string" && typeof d.status == "boolean" && Kt(d.subComponentDialog) && typeof d.subComponentDialog.endStatus == "boolean" && typeof d.subComponentDialog.actionType == "string" && typeof d.subComponentDialog.answerType == "string")) throw new At("Нужен файл с полными записями. Краткий список названий загрузить нельзя.");
  }
  return i;
}
async function Mx(r, a, i) {
  const c = $x(i, a);
  return await r.saveData(c, a === "settings" ? "import_settings" : a === "scenarios" && !Array.isArray(c) ? "import_command_bundle" : gp[a].import), c;
}
const Ix = "_grid_fc8hl_1", Lx = "_card_fc8hl_8", Dx = "_actions_fc8hl_23", zx = "_description_fc8hl_29", Ox = "_page_fc8hl_36", Ms = {
  grid: Ix,
  card: Lx,
  actions: Dx,
  description: zx,
  page: Ox
}, Fx = [
  { kind: "scripts", title: "Действия удалённых команд", description: "Привязки команд к скриптам Home Assistant и условия запуска. Самих скриптов HA в файле нет.", download: "Скачать скрипты", upload: "Загрузить скрипты" },
  { kind: "scenarios", title: "Сценарии", description: "Все разделы «Команды»: основные, второстепенные, прямые, шаблоны и ответы по умолчанию. ID и связи сохраняются.", download: "Скачать сценарии", upload: "Загрузить сценарии" },
  { kind: "settings", title: "Настройки интеграции", description: "Тема, параметры подключения, API и звуки таймеров и будильников. Язык интерфейса в файл не входит.", download: "Скачать настройки", upload: "Загрузить настройки" }
], Hx = () => {
  const r = lt(), a = Ir(), i = Ze(), [c, d] = v.useState(!1), [f, p] = v.useState(""), [h, g] = v.useState(!1), w = v.useRef(null), y = v.useRef(null), _ = v.useRef("scripts"), S = async (j, R = !1) => {
    w.current = R ? j : null, d(!0), p(""), g(!1);
    try {
      await j();
    } catch (C) {
      g(!0), p(C instanceof At ? C.message : Yt(C));
    } finally {
      d(!1);
    }
  };
  return /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
    /* @__PURE__ */ o.jsx(_t, { title: x("Импорт и экспорт") }),
    /* @__PURE__ */ o.jsxs("div", { className: `${J.page} ${Ms.page}`, children: [
      /* @__PURE__ */ o.jsx(gt, {}),
      !i && /* @__PURE__ */ o.jsx("h1", { children: x("Импорт и экспорт") }),
      /* @__PURE__ */ o.jsx("div", { className: Ms.grid, children: Fx.filter((j) => j.kind === "scripts" ? a === !0 : j.kind !== "scenarios" || a === !1).map((j) => /* @__PURE__ */ o.jsxs("section", { className: Ms.card, children: [
        /* @__PURE__ */ o.jsx("h2", { children: x(j.title) }),
        /* @__PURE__ */ o.jsx("p", { className: Ms.description, children: x(j.description) }),
        /* @__PURE__ */ o.jsxs("div", { className: Ms.actions, children: [
          /* @__PURE__ */ o.jsx(se, { disabled: c, onClick: () => S(async () => {
            Ax(`ha-dialog-ui-${j.kind}.json`, await bx(r, j.kind));
          }, !0), children: x(j.download) }),
          /* @__PURE__ */ o.jsx(se, { variant: "secondary", disabled: c, onClick: () => {
            var R;
            _.current = j.kind, (R = y.current) == null || R.click();
          }, children: x(j.upload) })
        ] })
      ] }, j.kind)) }),
      /* @__PURE__ */ o.jsx("input", { ref: y, type: "file", accept: ".json,application/json", hidden: !0, onChange: (j) => {
        var N;
        const R = (N = j.target.files) == null ? void 0 : N[0], C = _.current;
        j.target.value = "", R && S(async () => {
          const A = await Mx(r, C, await R.text());
          C === "settings" && A !== null && typeof A == "object" && !Array.isArray(A) && (typeof A.theme == "string" && window.dispatchEvent(new CustomEvent("ha-dialog-ui-theme-change", { detail: A.theme })), typeof A.active_remout == "boolean" && window.dispatchEvent(new CustomEvent(ii, { detail: A.active_remout }))), p("Данные загружены.");
        });
      } }),
      c && /* @__PURE__ */ o.jsx("p", { role: "status", children: x("Обработка файла...") }),
      /* @__PURE__ */ o.jsx(Be, { error: h ? f : null, busy: c, retry: w.current ? () => {
        w.current && S(w.current, !0);
      } : void 0 }),
      !h && f && /* @__PURE__ */ o.jsx("p", { role: "status", children: x(f) })
    ] })
  ] });
};
function Wx() {
  const r = lt(), [a, i] = v.useState(null), [c, d] = v.useState([]), f = Wt(), p = Wt(), h = v.useCallback(() => f.run(async () => {
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
    await r.saveData(y, "save_settings"), typeof y.api_commands_enabled == "boolean" && window.dispatchEvent(new CustomEvent(Nl, { detail: y.api_commands_enabled })), typeof y.active_remout == "boolean" && window.dispatchEvent(new CustomEvent(ii, { detail: y.active_remout }));
  };
  return { loading: f.busy, settings: a, musicOptions: c, saveSettings: w, settingsFeedback: f, musicFeedback: p };
}
const Bx = "_form_1ijxr_1", Ux = "_field_1ijxr_7", Vx = "_input_1ijxr_13", qx = "_label_1ijxr_29", Qx = "_help_1ijxr_35", Kx = "_toggleHelp_1ijxr_40", st = {
  form: Bx,
  field: Ux,
  input: Vx,
  label: qx,
  help: Qx,
  toggleHelp: Kx
}, Yx = ({ data: r, onChange: a }) => {
  const i = (c, d) => {
    a({
      ...r,
      [c]: d
    });
  };
  return /* @__PURE__ */ o.jsxs("div", { className: st.form, children: [
    /* @__PURE__ */ o.jsx(Ue, { label: x("Base URL"), value: r.base_url ?? "", placeholder: x("http://192.168.31.83:9379"), onChange: (c) => i("base_url", c.target.value) }),
    /* @__PURE__ */ o.jsx(Ue, { label: x("Token"), value: r.token ?? "", placeholder: x("Bearer ..."), onChange: (c) => i("token", c.target.value) })
  ] });
}, Gx = ({ data: r, musicOptions: a, musicUnavailable: i, onChange: c }) => {
  const d = (p, h) => {
    c({
      ...r,
      [p]: h
    });
  }, f = (p, h, g = "") => {
    const w = a.some((y) => y.value === g);
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
            a.map((y) => /* @__PURE__ */ o.jsx("option", { value: y.value, children: y.label }, y.value))
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
    a.length === 0 && !i && /* @__PURE__ */ o.jsx("span", { className: st.help, children: x("Музыка на сервере не найдена.") })
  ] });
}, Jx = ({ data: r, onChange: a }) => {
  const i = sp(), c = (d, f) => {
    a({
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
          value: i,
          onChange: (d) => Rg(d.target.value === "en" ? "en" : "ru"),
          children: [
            /* @__PURE__ */ o.jsx("option", { value: "ru", children: "Русский" }),
            /* @__PURE__ */ o.jsx("option", { value: "en", children: "English" })
          ]
        }
      )
    ] }),
    /* @__PURE__ */ o.jsx(
      Ue,
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
    /* @__PURE__ */ o.jsx(tr, { label: x("Is admin"), checked: !!r.is_admin, onChange: (d) => c("is_admin", d.target.checked) })
  ] });
}, Xx = ({ data: r, onChange: a }) => {
  const i = (c, d) => a({ ...r, [c]: d });
  return /* @__PURE__ */ o.jsxs("div", { className: st.form, children: [
    /* @__PURE__ */ o.jsxs("div", { className: st.toggleHelp, children: [
      /* @__PURE__ */ o.jsx(tr, { label: x("Подключаться к удалённому серверу"), checked: !!r.active_remout, onChange: (c) => i("active_remout", c.target.checked) }),
      /* @__PURE__ */ o.jsx(Ds, { label: "Подключаться к удалённому серверу", description: "Интеграция подключается к существующему удалённому серверу и получает от него команды по SSE. Для их выполнения используются «Действия удалённых команд», а локальные разделы команд скрываются. Этот переключатель не запускает новый сервер." })
    ] }),
    /* @__PURE__ */ o.jsxs("div", { className: st.toggleHelp, children: [
      /* @__PURE__ */ o.jsx(tr, { label: x("Включить API"), checked: !!r.api_commands_enabled, onChange: (c) => i("api_commands_enabled", c.target.checked) }),
      /* @__PURE__ */ o.jsx(Ds, { label: "Включить API", description: "Позволяет внешним приложениям отправлять команды в интеграцию и обмениваться с ней событиями по HTTP API. Адреса: /api/dialog/commands, /api/dialog/events, /api/dialog/event. Для доступа нужен токен API команд из поля ниже." })
    ] }),
    r.api_commands_enabled && /* @__PURE__ */ o.jsx(
      Ue,
      {
        label: x("API Commands Token"),
        value: r.api_commands_token ?? "",
        onChange: (c) => i("api_commands_token", c.target.value),
        placeholder: x("Ключ доступа для API endpoints"),
        type: "password"
      }
    )
  ] });
}, ui = {
  base_url: "",
  token: ""
}, Zx = {
  global_music_timer: "",
  global_music_alarm: ""
}, _f = {
  remout: ui,
  timer_alarm: Zx,
  theme: "dark",
  is_admin: !1,
  active_remout: !1,
  client_id: "",
  api_commands_enabled: !1,
  api_commands_token: ""
}, ew = (r) => ({
  base_url: (r == null ? void 0 : r.base_url) ?? "",
  token: (r == null ? void 0 : r.token) ?? ""
}), tw = (r) => ({
  global_music_timer: (r == null ? void 0 : r.global_music_timer) ?? "",
  global_music_alarm: (r == null ? void 0 : r.global_music_alarm) ?? ""
}), nw = (r) => ({
  remout: ew(r == null ? void 0 : r.remout),
  timer_alarm: tw(r == null ? void 0 : r.timer_alarm),
  theme: (r == null ? void 0 : r.theme) ?? "dark",
  is_admin: !!(r != null && r.is_admin),
  active_remout: !!(r != null && r.active_remout),
  client_id: (r == null ? void 0 : r.client_id) ?? "",
  api_commands_enabled: !!(r != null && r.api_commands_enabled),
  api_commands_token: (r == null ? void 0 : r.api_commands_token) ?? ""
}), xf = (r, a) => {
  const i = {};
  return Object.keys(r).forEach((c) => {
    const d = c;
    r[d] !== a[d] && (i[d] = r[d]);
  }), i;
}, wf = (r, a) => {
  const i = {}, c = xf(r.timer_alarm, a.timer_alarm);
  if (Object.keys(c).length > 0 && (i.timer_alarm = c), r.theme !== a.theme && (i.theme = r.theme), r.is_admin !== a.is_admin && (i.is_admin = r.is_admin), r.active_remout !== a.active_remout && (i.active_remout = r.active_remout), r.client_id !== a.client_id && (i.client_id = r.client_id), r.api_commands_enabled !== a.api_commands_enabled && (i.api_commands_enabled = r.api_commands_enabled), r.api_commands_token !== a.api_commands_token && (i.api_commands_token = r.api_commands_token), r.active_remout) {
    const d = xf(r.remout ?? ui, a.remout ?? ui);
    Object.keys(d).length > 0 && (i.remout = d);
  }
  return i;
}, rw = () => {
  const r = Ze(), [a, i] = v.useState(_f), c = Wt(), [d, f] = v.useState(_f), { settings: p, musicOptions: h, saveSettings: g, settingsFeedback: w, musicFeedback: y } = Wx();
  v.useEffect(() => {
    if (!p) return;
    const R = nw(p);
    i(R), f(R), window.dispatchEvent(new CustomEvent("ha-dialog-ui-theme-change", { detail: R.theme }));
  }, [p]);
  const _ = async (R) => {
    i((C) => ({ ...C, ...R })), R.theme && R.theme !== a.theme && (window.dispatchEvent(new CustomEvent("ha-dialog-ui-theme-change", { detail: R.theme })), await c.run(async () => {
      await g({ theme: R.theme }), f((C) => ({ ...C, theme: R.theme }));
    }, { exclusive: !0 }));
  }, S = () => c.run(async () => {
    await g(wf(a, d)), f(a);
  }, { exclusive: !0 }), j = !!p && Object.keys(wf(a, d)).length > 0;
  return /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
    /* @__PURE__ */ o.jsx(
      _t,
      {
        title: x("Настройки")
      }
    ),
    /* @__PURE__ */ o.jsxs("div", { className: J.page, children: [
      /* @__PURE__ */ o.jsx(gt, {}),
      r ? /* @__PURE__ */ o.jsx(o.Fragment, {}) : /* @__PURE__ */ o.jsx("h1", { children: x("Настройки") }),
      /* @__PURE__ */ o.jsxs("div", { className: J.settingsSections, children: [
        /* @__PURE__ */ o.jsx(Be, { ...w }),
        /* @__PURE__ */ o.jsx(Be, { ...y }),
        /* @__PURE__ */ o.jsx(Be, { ...c }),
        /* @__PURE__ */ o.jsxs("section", { className: J.settingsSection, "aria-label": x("Общие"), children: [
          /* @__PURE__ */ o.jsx("h2", { children: x("Общие") }),
          /* @__PURE__ */ o.jsx(
            Jx,
            {
              data: {
                is_admin: a.is_admin,
                theme: a.theme,
                client_id: a.client_id
              },
              onChange: _
            }
          )
        ] }),
        /* @__PURE__ */ o.jsxs("section", { className: J.settingsSection, "aria-label": x("Подключения"), children: [
          /* @__PURE__ */ o.jsx("h2", { children: x("Подключения") }),
          /* @__PURE__ */ o.jsxs("div", { className: J.connectionFields, children: [
            /* @__PURE__ */ o.jsx(Xx, { data: a, onChange: _ }),
            a.active_remout && /* @__PURE__ */ o.jsx(
              Yx,
              {
                data: a.remout ?? ui,
                onChange: (R) => i((C) => ({ ...C, remout: R }))
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ o.jsxs("section", { className: J.settingsSection, "aria-label": x("Timer / Alarm"), children: [
          /* @__PURE__ */ o.jsx("h2", { children: x("Timer / Alarm") }),
          /* @__PURE__ */ o.jsx(
            Gx,
            {
              data: a.timer_alarm,
              musicOptions: h,
              musicUnavailable: y.busy || !!y.error,
              onChange: (R) => i({ ...a, timer_alarm: R })
            }
          )
        ] })
      ] }),
      j && (r ? /* @__PURE__ */ o.jsx("div", { className: J.settingsMobileActions, children: /* @__PURE__ */ o.jsx(
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
  const a = r.split(":").map(Number);
  return a.some((i) => !Number.isFinite(i) || i < 0) ? 0 : a.length === 3 ? a[0] * 3600 + a[1] * 60 + a[2] : a.length === 2 ? a[0] * 60 + a[1] : a.length === 1 ? a[0] : 0;
}, _p = (r) => typeof r == "string" || typeof r == "number" ? Al(r) : r ? typeof r.total_seconds == "number" ? Math.max(0, r.total_seconds) : Al(r.count_timer || "") : 0, sw = (r, a = "on", i = Date.now()) => {
  if (typeof r == "string" || typeof r == "number") return Al(r);
  if (!r) return 0;
  if (a !== "paused" && r.date_end && /(?:Z|[+-]\d{2}:?\d{2})$/i.test(r.date_end)) {
    const c = Date.parse(r.date_end);
    if (Number.isFinite(c)) return Math.max(0, Math.ceil((c - i) / 1e3));
  }
  return typeof r.remaining_seconds == "number" ? Math.max(0, r.remaining_seconds) : _p(r);
}, bl = (r) => r !== null && typeof r == "object", Zn = (r) => {
  const a = bl(r) && "result" in r ? r.result : r;
  return bl(a) && "data" in a ? a.data : a;
}, ow = (r) => {
  const a = Math.max(1, Number(r) || 1);
  return new Date(Date.now() + a * 1e3).toISOString();
}, Sf = (r) => {
  const a = Math.max(1, Number(r) || 1), i = Math.floor(a / 3600), c = Math.floor(a % 3600 / 60), d = a % 60;
  return `${String(i).padStart(2, "0")}:${String(c).padStart(2, "0")}:${String(d).padStart(2, "0")}`;
}, kf = (r) => {
  const a = Zn(r);
  return Array.isArray(a) ? a : bl(a) && Array.isArray(a.data) ? a.data : [];
};
function xp() {
  const r = lt(), a = Wt(), [i, c] = v.useState([]), [d, f] = v.useState([]), [p, h] = v.useState([]), [g, w] = v.useState(!0), y = v.useMemo(() => r.getDevices(), [r]), _ = v.useCallback(async () => {
    const B = await r.getPage("get_timer_requests_short", 1, 100), M = await Promise.all(
      kf(B).map(async (X) => {
        var G;
        const U = await r.getRecord(X.uuid, "get_timer_request");
        return ((G = Zn(U)) == null ? void 0 : G.data) ?? Zn(U);
      })
    );
    c(M.filter((X) => !!X && X.action_type === "create_timer"));
  }, [r]), S = v.useCallback(async () => {
    const B = await r.getPage("get_alarm_requests_short", 1, 100), M = await Promise.all(
      kf(B).map(async (X) => {
        var G;
        const U = await r.getRecord(X.uuid, "get_alarm_request");
        return ((G = Zn(U)) == null ? void 0 : G.data) ?? Zn(U);
      })
    );
    f(M.filter((X) => !!X && X.action_type !== "delete_alarm"));
  }, [r]), j = v.useCallback(async () => {
    const B = await r.getAllRecords("get_alarm_time_widgets_short"), M = await Promise.all(
      B.map(async (X) => {
        var G;
        const U = await r.getRecord(X.uuid, "get_alarm_time_widget");
        return ((G = Zn(U)) == null ? void 0 : G.data) ?? Zn(U);
      })
    );
    h(M.filter(Boolean));
  }, [r]), R = v.useCallback(async () => {
    w(!0);
    try {
      await a.run(async () => {
        await Promise.all([_(), S(), j()]);
      }, { retryable: !0 });
    } finally {
      w(!1);
    }
  }, [S, j, _, a.run]);
  v.useEffect(() => {
    R();
  }, []);
  const C = async (B, M) => await a.run(async () => {
    await B();
  }, { exclusive: !0 }) ? (await a.run(M, { retryable: !0 }), !0) : !1, N = async (B, M, X = 0.3) => {
    const U = {
      count_timer: Sf(M),
      date_end: ow(M)
    };
    return C(() => r.saveData({ name: `Таймер ${Sf(M)}`, action_type: "create_timer", device_id: B, timer_time: U, volume_start: X }, "save_timer_request"), _);
  }, A = async (B) => C(() => r.deleteRecord(B.uuid, "delete_timer_request"), _), H = async (B, M, X = 0.3, U = "once", G = []) => C(() => r.saveData({ name: `Будильник ${M}`, action_type: "create_alarm", device_id: B, status: "on", time: M, volume_start: X, repeat_type: U, repeat_days: G }, "save_alarm_request"), async () => {
    await Promise.all([S(), j()]);
  }), b = async (B, M) => C(() => r.updateRecord(B.uuid, "update_alarm_request", { ...B, action_type: "edit_alarm", ...M }), async () => {
    await Promise.all([S(), j()]);
  }), F = async (B) => C(() => r.deleteRecord(B.uuid, "delete_alarm_request"), S);
  return {
    feedback: { ...a, retry: a.error ? a.retry ?? (() => {
      R();
    }) : void 0 },
    alarmTimeWidgets: p,
    refreshAlarmTimes: () => a.run(j, { retryable: !0 }),
    alarms: d,
    createAlarm: H,
    createTimer: N,
    deleteAlarm: F,
    devices: y,
    loading: g,
    stopTimer: A,
    timers: i,
    toTimerSeconds: sw,
    updateAlarm: b
  };
}
const iw = "_grid_w5y3x_31", aw = "_card_w5y3x_38", lw = "_empty_w5y3x_38", uw = "_cardHeader_w5y3x_47", cw = "_cardTitle_w5y3x_54", dw = "_meta_w5y3x_59", fw = "_form_w5y3x_73", pw = "_field_w5y3x_79", mw = "_label_w5y3x_85", hw = "_input_w5y3x_91", vw = "_quickTabs_w5y3x_101", yw = "_quickTab_w5y3x_101", gw = "_activeQuickTab_w5y3x_117", _w = "_cardLead_w5y3x_135", xw = "_cardIcon_w5y3x_143", ww = "_cardButton_w5y3x_148", Sw = "_wheelPicker_w5y3x_160", kw = "_wheelColumn_w5y3x_173", jw = "_wheelSelect_w5y3x_180", Cw = "_footerActions_w5y3x_202", Ew = "_saveButton_w5y3x_208", Nw = "_volumeLabel_w5y3x_226", Tw = "_volumeValue_w5y3x_232", Rw = "_alarmTimeFields_w5y3x_237", le = {
  grid: iw,
  card: aw,
  empty: lw,
  cardHeader: uw,
  cardTitle: cw,
  meta: dw,
  form: fw,
  field: pw,
  label: mw,
  input: hw,
  quickTabs: vw,
  quickTab: yw,
  activeQuickTab: gw,
  cardLead: _w,
  cardIcon: xw,
  cardButton: ww,
  wheelPicker: Sw,
  wheelColumn: kw,
  wheelSelect: jw,
  footerActions: Cw,
  saveButton: Ew,
  volumeLabel: Nw,
  volumeValue: Tw,
  alarmTimeFields: Rw
}, Pw = [5, 10, 15, 30, 45, 60], jf = (r) => {
  const a = Math.max(0, r), i = Math.floor(a / 3600), c = Math.floor(a % 3600 / 60), d = a % 60;
  return [i, c, d].map((f) => String(f).padStart(2, "0")).join(":");
}, Aw = (r, a, i) => Math.max(1, r * 3600 + a * 60 + i), bw = (r) => ({
  hours: Math.floor(r / 3600),
  minutes: Math.floor(r % 3600 / 60),
  seconds: r % 60
}), $w = () => {
  const r = Ze(), { feedback: a, createTimer: i, devices: c, loading: d, stopTimer: f, timers: p, toTimerSeconds: h } = xp(), [g, w] = v.useState(!1), [y, _] = v.useState(""), [S, j] = v.useState(0.3), [R, C] = v.useState({ hours: 0, minutes: 5, seconds: 0 }), [N, A] = v.useState({});
  v.useEffect(() => {
    A(Object.fromEntries(p.map((M) => [M.uuid, h(M.timer_time, M.status)])));
  }, [p, h]), v.useEffect(() => {
    const M = window.setInterval(() => {
      A((X) => Object.fromEntries(Object.entries(X).map(([U, G]) => {
        var pe;
        return [U, ((pe = p.find((ce) => ce.uuid === U)) == null ? void 0 : pe.status) === "paused" ? G : Math.max(0, G - 1)];
      })));
    }, 1e3);
    return () => window.clearInterval(M);
  }, [p]);
  const H = v.useMemo(() => new Map(c.map((M) => [M.id, M.name])), [c]), b = Aw(R.hours, R.minutes, R.seconds), F = async () => {
    y && await i(y, b, S) && w(!1);
  }, B = (M) => C(bw(M * 60));
  return /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
    /* @__PURE__ */ o.jsx(_t, { title: x("Таймеры") }),
    /* @__PURE__ */ o.jsxs("div", { className: J.page, children: [
      !g && /* @__PURE__ */ o.jsx(Be, { ...a }),
      /* @__PURE__ */ o.jsx(gt, {}),
      /* @__PURE__ */ o.jsxs("div", { className: J.header, children: [
        /* @__PURE__ */ o.jsx("div", { className: J.heading, children: r ? /* @__PURE__ */ o.jsx(o.Fragment, {}) : /* @__PURE__ */ o.jsx("h1", { className: J.title, children: x("Таймеры") }) }),
        /* @__PURE__ */ o.jsx("div", { className: J.actions, children: r ? /* @__PURE__ */ o.jsx(sr, { startVisible: !0, children: /* @__PURE__ */ o.jsx(
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
      d && /* @__PURE__ */ o.jsx(Dr, {}),
      /* @__PURE__ */ o.jsx("div", { className: le.grid, children: p.length ? p.map((M) => {
        const X = h(M.timer_time, M.status), U = _p(M.timer_time);
        return /* @__PURE__ */ o.jsx("div", { className: le.card, children: /* @__PURE__ */ o.jsxs("div", { className: le.cardHeader, children: [
          /* @__PURE__ */ o.jsxs("div", { className: le.cardLead, children: [
            /* @__PURE__ */ o.jsx(Vl, { className: le.cardIcon, size: 26 }),
            /* @__PURE__ */ o.jsxs("div", { children: [
              /* @__PURE__ */ o.jsx("h2", { className: le.cardTitle, children: jf(N[M.uuid] ?? X) }),
              /* @__PURE__ */ o.jsxs("div", { className: le.meta, children: [
                x("Заведен на"),
                " ",
                jf(U),
                " • ",
                H.get(M.device_id) || M.device_id
              ] })
            ] })
          ] }),
          /* @__PURE__ */ o.jsx(se, { variant: "remove", onClick: () => f(M), children: x("Удалить") })
        ] }) }, M.uuid);
      }) : !d && !a.error && /* @__PURE__ */ o.jsx("div", { className: le.empty, children: x("Нет запущенных таймеров.") }) }),
      /* @__PURE__ */ o.jsx(Jt, { feedback: a, open: g, onClose: () => w(!1), title: x("Создать таймер"), footer: /* @__PURE__ */ o.jsx("div", { className: le.footerActions, children: /* @__PURE__ */ o.jsx(se, { className: le.saveButton, onClick: F, disabled: !y, children: x("Создать") }) }), children: /* @__PURE__ */ o.jsxs("div", { className: le.form, children: [
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
              value: R[M],
              onChange: (X) => {
                const U = Math.max(0, Math.min(M === "hours" ? 23 : 59, Math.trunc(Number(X.target.value) || 0)));
                C((G) => ({ ...G, [M]: U }));
              }
            }
          )
        ] }, M)) }),
        /* @__PURE__ */ o.jsxs("div", { className: le.field, children: [
          /* @__PURE__ */ o.jsx("span", { className: le.label, children: x("Быстрое создание") }),
          /* @__PURE__ */ o.jsx("div", { className: le.quickTabs, children: Pw.map((M) => /* @__PURE__ */ o.jsxs("button", { type: "button", className: `${le.quickTab} ${b === M * 60 ? le.activeQuickTab : ""}`, onClick: () => B(M), children: [
            M,
            " ",
            x("мин")
          ] }, M)) })
        ] }),
        /* @__PURE__ */ o.jsx(
          $r,
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
          /* @__PURE__ */ o.jsx("input", { className: le.input, type: "range", min: "0", max: "1", step: "0.05", value: S, onChange: (M) => j(Number(M.target.value)) })
        ] })
      ] }) })
    ] })
  ] });
};
class Mw {
  constructor() {
    Xe(this, "context");
    Xe(this, "unsubscribe");
    Xe(this, "closed", !1);
    Xe(this, "nextTime", 0);
    Xe(this, "sources", /* @__PURE__ */ new Set());
  }
  async prepare() {
    this.context = new AudioContext(), await this.context.resume();
  }
  async listen(a, i, c) {
    const d = await a.monitorAudio(i, (f) => {
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
    }), this.unsubscribe = void 0, (a = this.context) == null || a.close().catch(() => {
    }), this.context = void 0;
  }
}
let Iw = 0;
function Lw() {
  var r;
  if ((r = globalThis.crypto) != null && r.getRandomValues) {
    const a = new Uint8Array(16);
    return globalThis.crypto.getRandomValues(a), `monitor-${Array.from(a, (i) => i.toString(16).padStart(2, "0")).join("")}`;
  }
  return `monitor-${Date.now().toString(36)}-${(++Iw).toString(36)}`;
}
const Dw = "_page_12ruw_1", zw = "_heading_12ruw_8", Ow = "_grid_12ruw_26", Fw = "_device_12ruw_33", Hw = "_deviceLive_12ruw_64", Ww = "_navigation_12ruw_72", Bw = "_playback_12ruw_76", Uw = "_playbackSelect_12ruw_92", Vw = "_statusRow_12ruw_112", qw = "_status_12ruw_112", Qw = "_live_12ruw_127", Kw = "_hint_12ruw_131", Yw = "_footer_12ruw_137", Gw = "_empty_12ruw_148", Jw = "_error_12ruw_155", We = {
  page: Dw,
  heading: zw,
  grid: Ow,
  device: Fw,
  deviceLive: Hw,
  navigation: Ww,
  playback: Bw,
  playbackSelect: Uw,
  statusRow: Vw,
  status: qw,
  live: Qw,
  hint: Kw,
  footer: Yw,
  empty: Gw,
  error: Jw
};
function Xw() {
  const r = lt(), a = Ze(), [i, c] = v.useState(), [d, f] = v.useState(""), [p, h] = v.useState(null), [g, w] = v.useState("browser"), [y, _] = v.useState(!1), [S, j] = v.useState(!1), R = v.useRef(""), C = v.useRef(!1), N = v.useRef(), [A, H] = v.useState(0);
  v.useEffect(() => {
    C.current = !0;
    let O = !0, Q;
    const T = Lw();
    return R.current = T, c(void 0), f(""), r.monitorWatch(T, (L) => {
      O && c(L);
    }).then((L) => {
      O ? Q = L : Promise.resolve(L()).catch(() => {
      });
    }).catch((L) => {
      O && f(
        Yt(
          L,
          "Не удалось открыть радионяню. Проверьте подключение к HA."
        )
      );
    }), () => {
      var L;
      O = !1, C.current = !1, (L = N.current) == null || L.close(), N.current = void 0, Q && Promise.resolve(Q()).catch(() => {
      });
    };
  }, [r, A]), v.useEffect(() => {
    var O;
    i && !i.owned_source_id && !y && ((O = N.current) == null || O.close(), N.current = void 0, j(!1));
  }, [i, y]);
  const b = i == null ? void 0 : i.devices.find((O) => O.id === p), F = (i == null ? void 0 : i.devices.filter((O) => O.source)) ?? [], B = i == null ? void 0 : i.sessions.find(
    (O) => O.source_device_id === p
  ), M = !!(b != null && b.transmitting || (b == null ? void 0 : b.source_state) === "on" || B), X = S && (b == null ? void 0 : b.transmitting) && (i == null ? void 0 : i.owned_source_id) === p, U = !!B || X, G = (O) => {
    const Q = i == null ? void 0 : i.sessions.find(
      (T) => T.source_device_id === O.id
    );
    w((Q == null ? void 0 : Q.listener_device_id) ?? "browser"), h(O.id), f("");
  }, pe = () => h(null), ce = async () => {
    var Q;
    if (!b || y) return;
    _(!0), f(""), j(!1), (Q = N.current) == null || Q.close(), N.current = void 0;
    let O;
    try {
      g === "browser" && (O = new Mw(), N.current = O, await O.prepare());
      const T = await r.monitorStart(
        R.current,
        b.id,
        g === "browser" ? void 0 : g
      );
      if (!C.current || !T.started) {
        O == null || O.close();
        return;
      }
      O && await O.listen(r, b.node_id, (L) => {
        C.current && j(L);
      }), C.current && (j(!0), c(
        (L) => L && {
          ...L,
          owned_source_id: b.id,
          devices: L.devices.map(
            (oe) => oe.id === b.id ? { ...oe, transmitting: !0, source_state: "on" } : oe
          ),
          sessions: g === "browser" ? L.sessions : [
            ...L.sessions.filter(
              (oe) => oe.source_device_id !== b.id
            ),
            {
              source_device_id: b.id,
              listener_device_id: g
            }
          ]
        }
      ));
    } catch (T) {
      if (O == null || O.close(), C.current) {
        f(
          Yt(
            T,
            "Не удалось начать прослушивание. Проверьте подключение и разрешение воспроизведения."
          )
        );
        try {
          await r.monitorStop(R.current, b.id);
        } catch {
        }
      }
    } finally {
      C.current && _(!1);
    }
  }, Ee = async (O) => {
    var Q;
    _(!0), f("");
    try {
      await r.monitorStop(R.current, O), (i == null ? void 0 : i.owned_source_id) === O && ((Q = N.current) == null || Q.close(), N.current = void 0, j(!1)), c(
        (T) => T && {
          ...T,
          owned_source_id: T.owned_source_id === O ? null : T.owned_source_id,
          devices: T.devices.map(
            (L) => L.id === O ? { ...L, transmitting: !1, source_state: "off" } : L
          ),
          sessions: T.sessions.filter(
            (L) => L.source_device_id !== O && L.listener_device_id !== O
          )
        }
      );
    } catch (T) {
      C.current && f(Yt(T));
    } finally {
      C.current && _(!1);
    }
  }, je = (i == null ? void 0 : i.devices.filter(
    (O) => O.listener && O.id !== p
  )) ?? [], me = je.find((O) => O.id === g), ve = x(
    y ? "Подключаемся…" : M ? X || B ? "Прослушивание активно" : "Источник включён" : "Готово к запуску"
  ), Se = /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
    /* @__PURE__ */ o.jsxs("div", { className: We.statusRow, children: [
      /* @__PURE__ */ o.jsxs(
        "div",
        {
          role: "status",
          "aria-live": "polite",
          className: `${We.status} ${M ? We.live : ""}`,
          children: [
            /* @__PURE__ */ o.jsx(Ey, { size: 12, fill: "currentColor" }),
            ve
          ]
        }
      ),
      /* @__PURE__ */ o.jsx(Ds, { label: ve, description: x(
        M && (i == null ? void 0 : i.owned_source_id) !== p ? "Сеанс запущен вне этой вкладки. Закрытие окна или вкладки его не остановит. Для остановки нажмите кнопку ниже." : "Закрытие этого окна не останавливает прослушивание. Для остановки нажмите кнопку ниже или выйдите из вкладки «Радионяня»."
      ) })
    ] }),
    /* @__PURE__ */ o.jsx("p", { className: We.hint, children: x("Где воспроизводить звук?") }),
    /* @__PURE__ */ o.jsxs("div", { className: We.playback, children: [
      g === "browser" ? /* @__PURE__ */ o.jsx(Dy, { size: 22 }) : /* @__PURE__ */ o.jsx(Vl, { size: 22 }),
      /* @__PURE__ */ o.jsx(
        bn,
        {
          "aria-label": x("Где воспроизводить звук?"),
          className: We.playbackSelect,
          value: g,
          onChange: (O) => w(O.target.value),
          disabled: y || U,
          options: [
            { value: "browser", label: x("На этом устройстве") },
            ...je.map((O) => ({
              value: O.id,
              label: O.online ? O.name : `${O.name} — ${x("Нет подключения")}`,
              disabled: !O.online
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
      onClick: M ? () => void Ee(p) : () => void ce(),
      disabled: y || !M && !(b != null && b.online) || !M && g !== "browser" && !(i != null && i.devices.some(
        (O) => O.id === g && O.online
      )),
      children: x(
        y ? "Подключаемся…" : M ? g === "browser" && !X && !B ? "Начать слушать" : "Остановить" : "Старт"
      )
    }
  ) }), z = M && !U ? /* @__PURE__ */ o.jsxs("div", { className: We.footer, children: [
    /* @__PURE__ */ o.jsx(se, { disabled: y || !(b != null && b.online), onClick: () => void ce(), children: x(g === "browser" ? "Начать слушать" : "Старт") }),
    /* @__PURE__ */ o.jsx(
      se,
      {
        variant: "ghost",
        disabled: y,
        onClick: () => void Ee(p),
        children: x("Остановить источник")
      }
    )
  ] }) : W;
  return /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
    /* @__PURE__ */ o.jsx("div", { className: We.navigation, children: /* @__PURE__ */ o.jsx(gt, {}) }),
    a && /* @__PURE__ */ o.jsx(_t, { title: "Радионяня" }),
    /* @__PURE__ */ o.jsxs("section", { className: We.page, children: [
      /* @__PURE__ */ o.jsxs("header", { className: We.heading, children: [
        /* @__PURE__ */ o.jsx(Ul, { size: 30 }),
        /* @__PURE__ */ o.jsxs("div", { children: [
          /* @__PURE__ */ o.jsx("h1", { children: x("Радионяня") }),
          /* @__PURE__ */ o.jsx("p", { children: x("Выберите колонку, чтобы слышать, что происходит рядом с ней.") })
        ] })
      ] }),
      d && !p && /* @__PURE__ */ o.jsxs("div", { role: "alert", className: We.error, children: [
        d,
        /* @__PURE__ */ o.jsx(se, { onClick: () => H((O) => O + 1), children: x("Повторить") })
      ] }),
      !i && !d && /* @__PURE__ */ o.jsx("p", { role: "status", children: x("Загрузка…") }),
      i && !i.available && /* @__PURE__ */ o.jsx("div", { className: We.empty, children: x(
        "Приёмник радионяни недоступен. Проверьте журнал HA и доступность TCP-порта 8124."
      ) }),
      (i == null ? void 0 : i.available) && F.length === 0 && /* @__PURE__ */ o.jsx("div", { className: We.empty, children: x(
        "Нет колонок с поддержкой радионяни. Установите совместимую прошивку и подключите колонку к интеграции ESPHome."
      ) }),
      /* @__PURE__ */ o.jsx("div", { className: We.grid, children: F.map((O) => {
        const Q = i == null ? void 0 : i.sessions.find(
          (L) => L.source_device_id === O.id
        ), T = i == null ? void 0 : i.devices.find(
          (L) => L.id === (Q == null ? void 0 : Q.listener_device_id)
        );
        return /* @__PURE__ */ o.jsxs(
          "button",
          {
            className: `${We.device} ${O.transmitting ? We.deviceLive : ""}`,
            onClick: () => G(O),
            children: [
              /* @__PURE__ */ o.jsx(qy, { size: 28 }),
              /* @__PURE__ */ o.jsx("strong", { children: O.name }),
              /* @__PURE__ */ o.jsx("span", { children: x(
                O.online ? O.transmitting ? "Источник включён" : O.source_state === "on" ? "Переподключение…" : "Готова к прослушиванию" : "Нет подключения"
              ) }),
              T && /* @__PURE__ */ o.jsxs("small", { children: [
                x("Воспроизведение:"),
                " ",
                T.name
              ] })
            ]
          },
          O.id
        );
      }) }),
      /* @__PURE__ */ o.jsxs(
        Jt,
        {
          open: p !== null,
          onClose: pe,
          title: (b == null ? void 0 : b.name) ?? "Радионяня",
          dialogLabel: (b == null ? void 0 : b.name) ?? x("Радионяня"),
          footer: z,
          children: [
            d && /* @__PURE__ */ o.jsx("p", { role: "alert", className: We.error, children: d }),
            Se
          ]
        }
      )
    ] })
  ] });
}
const Zw = ({ command: r, open: a, onClose: i, onToggleStatus: c, onEdit: d, onDelete: f }) => {
  if (!r) return null;
  const p = r.status === "on";
  return /* @__PURE__ */ o.jsx(Jl, { open: a, title: r.title, uuid: r.uuid, onClose: i, actions: [
    { label: p ? "Выключить" : "Включить", onClick: () => c(r, p ? "off" : "on") },
    { label: "Изменить", variant: "secondary", onClick: () => d(r) },
    { label: "Удалить", variant: "remove", onClick: () => f(r) }
  ] });
}, eS = (r) => {
  const a = /^(\d{1,2}):(\d{2})$/.exec(r.trim());
  return !a || Number(a[1]) > 23 || Number(a[2]) > 59 ? null : `${a[1].padStart(2, "0")}:${a[2]}`;
}, $l = [
  { key: "mon", label: "Пн" },
  { key: "tue", label: "Вт" },
  { key: "wed", label: "Ср" },
  { key: "thu", label: "Чт" },
  { key: "fri", label: "Пт" },
  { key: "sat", label: "Сб" },
  { key: "sun", label: "Вс" }
], tS = [
  { value: "once", label: "Однократно" },
  { value: "daily", label: "Ежедневно" },
  { value: "weekdays", label: "По будням" },
  { value: "weekends", label: "По выходным" },
  { value: "custom", label: "Выбранные дни" }
], nS = (r = "once", a = []) => r === "daily" ? x("ежедневно") : r === "weekdays" ? x("по будням") : r === "weekends" ? x("по выходным") : r === "custom" ? a.length ? a.map((i) => {
  var c;
  return (c = $l.find((d) => d.key === i)) != null && c.label ? x($l.find((d) => d.key === i).label) : i;
}).join(", ") : x("кастом") : x("однократно"), rS = () => {
  const r = Ze(), { feedback: a, alarmTimeWidgets: i, refreshAlarmTimes: c, alarms: d, createAlarm: f, deleteAlarm: p, devices: h, loading: g, updateAlarm: w } = xp(), [y, _] = v.useState(!1), [S, j] = v.useState(null), [R, C] = v.useState(null), [N, A] = v.useState(""), [H, b] = v.useState("08:00"), [F, B] = v.useState(0.3), [M, X] = v.useState("once"), [U, G] = v.useState([]), pe = v.useMemo(() => Array.from(new Set([...i.flatMap((W) => W.time || []), ...d.map((W) => W.time)].map(eS).filter((W) => W !== null))), [i, d]), ce = v.useMemo(() => new Map(h.map((W) => [W.id, W.name])), [h]), Ee = d.find((W) => W.uuid === S) || null, je = async () => {
    if (!N || !H) return;
    const W = d.find((z) => z.uuid === R);
    if (W) {
      if (!await w(W, { device_id: N, time: H, volume_start: F, repeat_type: M, repeat_days: U })) return;
    } else if (!await f(N, H, F, M, U)) return;
    C(null), _(!1);
  }, me = () => {
    C(null), _(!0), c();
  }, ve = (W) => {
    b(W.time), A(W.device_id), B(W.volume_start ?? 0.3), X(W.repeat_type ?? "once"), G(W.repeat_days ?? []), c(), C(W.uuid), j(null), _(!0);
  }, Se = (W) => G((z) => z.includes(W) ? z.filter((O) => O !== W) : [...z, W]);
  return /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
    /* @__PURE__ */ o.jsx(_t, { title: x("Будильники") }),
    /* @__PURE__ */ o.jsxs("div", { className: J.page, children: [
      !y && /* @__PURE__ */ o.jsx(Be, { ...a }),
      /* @__PURE__ */ o.jsx(gt, {}),
      /* @__PURE__ */ o.jsxs("div", { className: J.header, children: [
        /* @__PURE__ */ o.jsx("div", { className: J.heading, children: r ? /* @__PURE__ */ o.jsx(o.Fragment, {}) : /* @__PURE__ */ o.jsx("h1", { className: J.title, children: x("Будильники") }) }),
        /* @__PURE__ */ o.jsx("div", { className: J.actions, children: r ? /* @__PURE__ */ o.jsx(sr, { startVisible: !0, children: /* @__PURE__ */ o.jsx(
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
      g && /* @__PURE__ */ o.jsx(Dr, {}),
      /* @__PURE__ */ o.jsx("div", { className: le.grid, children: d.length ? d.map((W) => /* @__PURE__ */ o.jsx("button", { className: `${le.card} ${le.cardButton}`, type: "button", onClick: () => j(W.uuid), children: /* @__PURE__ */ o.jsxs("div", { className: le.cardHeader, children: [
        /* @__PURE__ */ o.jsxs("div", { className: le.cardLead, children: [
          /* @__PURE__ */ o.jsx(Vl, { className: le.cardIcon, size: 26 }),
          /* @__PURE__ */ o.jsxs("div", { children: [
            /* @__PURE__ */ o.jsx("h2", { className: le.cardTitle, children: W.time }),
            /* @__PURE__ */ o.jsxs("div", { className: le.meta, children: [
              nS(W.repeat_type, W.repeat_days),
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
            children: /* @__PURE__ */ o.jsx(tr, { label: x(""), checked: W.status !== "off", onClick: (z) => z.stopPropagation(), onChange: (z) => w(W, { status: z.currentTarget.checked ? "on" : "off" }) })
          }
        )
      ] }) }, W.uuid)) : !g && !a.error && /* @__PURE__ */ o.jsx("div", { className: le.empty, children: x("Нет будильников.") }) }),
      /* @__PURE__ */ o.jsx(Jt, { feedback: a, open: y, onClose: () => {
        _(!1), C(null);
      }, title: R ? "Редактировать будильник" : "Создать будильник", footer: /* @__PURE__ */ o.jsx("div", { className: le.footerActions, children: /* @__PURE__ */ o.jsx(se, { className: le.saveButton, onClick: je, disabled: !N || !H, children: x("Сохранить") }) }), children: /* @__PURE__ */ o.jsxs("div", { className: le.form, children: [
        /* @__PURE__ */ o.jsxs("div", { className: le.alarmTimeFields, role: "group", "aria-label": x("Время будильника"), children: [
          /* @__PURE__ */ o.jsx(
            $r,
            {
              label: x("Часы"),
              value: H.split(":")[0],
              options: Array.from({ length: 24 }, (W, z) => ({ value: String(z).padStart(2, "0"), label: String(z).padStart(2, "0") })),
              onSelect: (W) => b(`${W}:${H.split(":")[1]}`)
            }
          ),
          /* @__PURE__ */ o.jsx(
            $r,
            {
              label: x("Минуты"),
              value: H.split(":")[1],
              options: Array.from({ length: 60 }, (W, z) => ({ value: String(z).padStart(2, "0"), label: String(z).padStart(2, "0") })),
              onSelect: (W) => b(`${H.split(":")[0]}:${W}`)
            }
          )
        ] }),
        /* @__PURE__ */ o.jsxs("div", { className: le.field, children: [
          /* @__PURE__ */ o.jsx("span", { className: le.label, children: x("Ранее заданное время") }),
          /* @__PURE__ */ o.jsx("div", { className: le.quickTabs, children: pe.length ? pe.map((W) => /* @__PURE__ */ o.jsx("button", { type: "button", className: `${le.quickTab} ${H === W ? le.activeQuickTab : ""}`, onClick: () => b(W), children: W }, W)) : /* @__PURE__ */ o.jsx("span", { className: le.meta, children: x("Нет быстрых значений.") }) })
        ] }),
        /* @__PURE__ */ o.jsx(
          $r,
          {
            label: x("Повторы"),
            value: M,
            options: tS.map((W) => ({ ...W, label: x(W.label) })),
            onSelect: (W) => X(W)
          }
        ),
        M === "custom" && /* @__PURE__ */ o.jsx("div", { className: le.quickTabs, role: "group", "aria-label": x("Дни повтора"), children: $l.map((W) => /* @__PURE__ */ o.jsx(
          "button",
          {
            type: "button",
            "aria-pressed": U.includes(W.key),
            className: `${le.quickTab} ${U.includes(W.key) ? le.activeQuickTab : ""}`,
            onClick: () => Se(W.key),
            children: x(W.label)
          },
          W.key
        )) }),
        /* @__PURE__ */ o.jsx(
          $r,
          {
            label: x("Устройство воспроизведения"),
            placeholder: x("Выберите устройство"),
            value: N,
            options: h.map((W) => ({ value: W.id, label: W.name })),
            onSelect: A
          }
        ),
        /* @__PURE__ */ o.jsxs("label", { className: le.field, children: [
          /* @__PURE__ */ o.jsxs("span", { className: `${le.label} ${le.volumeLabel}`, children: [
            x("Стартовая громкость"),
            " ",
            /* @__PURE__ */ o.jsxs("span", { className: le.volumeValue, children: [
              Math.round(F * 100),
              "%"
            ] })
          ] }),
          /* @__PURE__ */ o.jsx("input", { className: le.input, type: "range", min: "0", max: "1", step: "0.05", value: F, onChange: (W) => B(Number(W.target.value)) })
        ] })
      ] }) }),
      /* @__PURE__ */ o.jsx(
        Zw,
        {
          open: !!Ee,
          onClose: () => j(null),
          command: Ee,
          onEdit: (W) => ve(W),
          onToggleStatus: (W, z) => w(W, { status: z }),
          onDelete: (W) => {
            p(W), j(null);
          }
        }
      )
    ] })
  ] });
}, sS = () => {
  const r = Ql(), a = Kl(), i = Ir(), { pathname: c } = yt(), d = i ? "/scripts" : "/commands/main";
  return (c === "/commands" || c.startsWith("/commands/")) && i !== !1 ? i === null ? /* @__PURE__ */ o.jsx(Dr, {}) : /* @__PURE__ */ o.jsx(Rn, { to: "/scripts", replace: !0 }) : /* @__PURE__ */ o.jsx(up, { resetKey: c, children: /* @__PURE__ */ o.jsxs(Nv, { children: [
    /* @__PURE__ */ o.jsx(Ke, { path: "/commands/whisper", element: a ? /* @__PURE__ */ o.jsx(a1, {}) : /* @__PURE__ */ o.jsx(Rn, { to: d, replace: !0 }) }),
    /* @__PURE__ */ o.jsx(Ke, { path: "/logs", element: r && a ? /* @__PURE__ */ o.jsx(h1, {}) : /* @__PURE__ */ o.jsx(Rn, { to: d, replace: !0 }) }),
    /* @__PURE__ */ o.jsx(Ke, { path: "/downloads", element: a ? /* @__PURE__ */ o.jsx(Hx, {}) : /* @__PURE__ */ o.jsx(Rn, { to: d, replace: !0 }) }),
    /* @__PURE__ */ o.jsx(
      Ke,
      {
        path: "/",
        element: /* @__PURE__ */ o.jsx(
          Rn,
          {
            to: d,
            replace: !0
          }
        )
      }
    ),
    /* @__PURE__ */ o.jsx(
      Ke,
      {
        path: "/scripts",
        element: /* @__PURE__ */ o.jsx(H0, {})
      }
    ),
    /* @__PURE__ */ o.jsx(
      Ke,
      {
        path: "/commands",
        element: /* @__PURE__ */ o.jsx(
          Rn,
          {
            to: "/commands/main",
            replace: !0
          }
        )
      }
    ),
    /* @__PURE__ */ o.jsx(
      Ke,
      {
        path: "/commands/main",
        element: /* @__PURE__ */ o.jsx(hx, {})
      }
    ),
    /* @__PURE__ */ o.jsx(
      Ke,
      {
        path: "/commands/sub",
        element: /* @__PURE__ */ o.jsx(yx, {})
      }
    ),
    /* @__PURE__ */ o.jsx(
      Ke,
      {
        path: "/commands/direct",
        element: /* @__PURE__ */ o.jsx(
          Rn,
          {
            to: "/commands/direct/main",
            replace: !0
          }
        )
      }
    ),
    /* @__PURE__ */ o.jsx(
      Ke,
      {
        path: "/commands/direct/main",
        element: /* @__PURE__ */ o.jsx(xx, {})
      }
    ),
    /* @__PURE__ */ o.jsx(
      Ke,
      {
        path: "/commands/direct/template",
        element: /* @__PURE__ */ o.jsx(Ex, {})
      }
    ),
    /* @__PURE__ */ o.jsx(
      Ke,
      {
        path: "/commands/settings",
        element: /* @__PURE__ */ o.jsx(Px, {})
      }
    ),
    /* @__PURE__ */ o.jsx(Ke, { path: "/monitor", element: /* @__PURE__ */ o.jsx(Xw, {}) }),
    /* @__PURE__ */ o.jsx(
      Ke,
      {
        path: "/timer",
        element: /* @__PURE__ */ o.jsx($w, {})
      }
    ),
    /* @__PURE__ */ o.jsx(
      Ke,
      {
        path: "/alarm",
        element: /* @__PURE__ */ o.jsx(rS, {})
      }
    ),
    /* @__PURE__ */ o.jsx(
      Ke,
      {
        path: "/settings",
        element: /* @__PURE__ */ o.jsx(rw, {})
      }
    ),
    /* @__PURE__ */ o.jsx(
      Ke,
      {
        path: "*",
        element: /* @__PURE__ */ o.jsx(
          Rn,
          {
            to: d,
            replace: !0
          }
        )
      }
    )
  ] }) });
}, wp = "ha-dialog-ui-theme", kl = (r) => r === "light" ? "light" : "dark", oS = (r) => {
  document.documentElement.dataset.theme = r, document.documentElement.style.colorScheme = r, localStorage.setItem(wp, r);
}, iS = () => {
  const r = Wt(), a = sp(), i = lt(), [c, d] = v.useState(!1), [f, p] = v.useState(null), [h, g] = v.useState(() => kl(localStorage.getItem(wp)));
  return v.useEffect(() => {
    oS(h);
  }, [h]), v.useEffect(() => {
    let w = !0, y = !1, _ = !1, S = !1;
    r.run(async () => {
      const N = await i.getSettings();
      w && (y || g(kl(N.theme)), S || d(!!N.api_commands_enabled), _ || p(!!N.active_remout));
    }, { retryable: !0 });
    const j = (N) => {
      y = !0, g(kl(N.detail));
    }, R = (N) => {
      _ = !0, p(N.detail);
    }, C = (N) => {
      S = !0, d(!!N.detail);
    };
    return window.addEventListener(Nl, C), window.addEventListener(ii, R), window.addEventListener("ha-dialog-ui-theme-change", j), () => {
      w = !1, window.removeEventListener(Nl, C), window.removeEventListener(ii, R), window.removeEventListener("ha-dialog-ui-theme-change", j);
    };
  }, [i, r.run]), /* @__PURE__ */ o.jsx(op.Provider, { value: c, children: /* @__PURE__ */ o.jsx(ap.Provider, { value: f, children: /* @__PURE__ */ o.jsxs("div", { className: "appShell", "data-theme": h, lang: a, children: [
    /* @__PURE__ */ o.jsx(Be, { ...r }),
    f === null ? !r.error && /* @__PURE__ */ o.jsx(Dr, {}) : /* @__PURE__ */ o.jsx(sS, {})
  ] }) }) });
};
class aS {
  constructor(a) {
    Xe(this, "hass");
    this.hass = a;
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
      }), _ = Array.isArray(y == null ? void 0 : y.children) ? y.children : [];
      await Promise.all(_.map(async (S) => {
        var C;
        const j = String((S == null ? void 0 : S.media_content_id) || ""), R = String((S == null ? void 0 : S.title) || j);
        if (j) {
          if (S != null && S.can_expand) {
            try {
              await g(j);
            } catch (N) {
              f.push(N);
            }
            return;
          }
          if (a.test(R) || a.test(j) || (S == null ? void 0 : S.media_content_type) === "music" || (C = S == null ? void 0 : S.media_content_type) != null && C.startsWith("audio/")) {
            const N = "media-source://media_source/local/", A = j.startsWith(N) ? j.slice(N.length) : j;
            d.set(A, {
              value: A,
              label: R
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
function Sp(r) {
  var a;
  return (a = r == null ? void 0 : r.connection) != null && a.sendMessagePromise ? { connection: r.connection, user: r.user, states: r.states ?? {} } : r != null && r.callWS ? { connection: { sendMessagePromise: r.callWS.bind(r) }, user: r.user, states: r.states ?? {} } : {
    connection: { sendMessagePromise: async () => {
      throw new Error("Home Assistant websocket API is not available");
    } },
    states: {}
  };
}
async function lS() {
  return Sp(window.hass);
}
function uS({
  children: r,
  hass: a
}) {
  const [i, c] = v.useState(null), [d, f] = v.useState(0), p = v.useRef(null), [h, g] = v.useState(!1), [w, y] = v.useState(!1);
  return v.useEffect(() => {
    let _ = !0;
    c(null);
    async function S() {
      const j = a ? Sp(a) : await lS();
      if (!_) return;
      p.current ? p.current.setHass(j) : p.current = new aS(j);
      const R = j.user ?? await j.connection.sendMessagePromise({ type: "auth/current_user" });
      _ && (g((R == null ? void 0 : R.is_admin) === !0), y(!0));
    }
    return S().catch((j) => {
      _ && c(Yt(j));
    }), () => {
      _ = !1;
    };
  }, [a, d]), i ? /* @__PURE__ */ o.jsx("div", { className: "appShell panelRecovery", "data-theme": localStorage.getItem("ha-dialog-ui-theme") || "dark", children: /* @__PURE__ */ o.jsx(Be, { error: i, retry: () => f((_) => _ + 1) }) }) : !w || !p.current ? /* @__PURE__ */ o.jsx(Dr, { label: x("Подключение к Home Assistant..."), fullscreen: !0 }) : /* @__PURE__ */ o.jsx(cp.Provider, { value: p.current, children: /* @__PURE__ */ o.jsx(ip.Provider, { value: h, children: r }) });
}
function cS({ hass: r }) {
  return /* @__PURE__ */ o.jsx(Jv, { children: /* @__PURE__ */ o.jsx(uS, { hass: r, children: /* @__PURE__ */ o.jsx(iS, {}) }) });
}
const Cf = "ha-dialog-ui-panel", Ef = "ha-dialog-ui-style";
class dS extends HTMLElement {
  constructor() {
    super(...arguments);
    Xe(this, "root");
    Xe(this, "container");
    Xe(this, "layoutObserver");
    Xe(this, "updateViewport", () => {
      const i = Math.max(0, this.getBoundingClientRect().top + window.scrollY);
      this.style.setProperty("--ha-dialog-ui-available-height", `${Math.max(0, window.innerHeight - i)}px`);
    });
    Xe(this, "resume", () => {
      document.visibilityState !== "hidden" && this.isConnected && (this.updateViewport(), this.loadStyles(), this.render());
    });
    Xe(this, "hassValue");
    Xe(this, "renderTimer");
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
    if (i.getElementById(Ef)) return;
    const c = document.createElement("style");
    c.id = Ef, c.setAttribute("data-dialog-ui", "true"), c.textContent = "@charset \"UTF-8\";:host{display:block;height:100%;max-height:var(--ha-dialog-ui-available-height, 100dvh);min-height:0;overflow-y:auto;overflow-x:hidden;isolation:isolate}*,*:before,*:after{box-sizing:border-box}:root,[data-theme=dark]{color-scheme:dark;--danger: #f28b82;--switch-thumb: #c8ced8;--shadow-floating: rgba(0, 0, 0, .45);--app-background: #111111;--surface: #1c1c1c;--surface-elevated: #282828;--surface-hover: #333333;--border: #3b3b3b;--border-hover: #666666;--text: #e1e1e1;--text-secondary: #9b9b9b;--text-muted: #9ca3af;--primary: var(--primary-color, #03a9f4);--primary-strong: color-mix(in srgb, var(--primary) 85%, black);--loader-track: rgba(255, 255, 255, .16);--control-background: rgba(255, 255, 255, .04);--control-background-hover: rgba(255, 255, 255, .06);--shadow: rgba(0, 0, 0, .3)}[data-theme=light]{color-scheme:light;--danger: #b3261e;--switch-thumb: #64748b;--shadow-floating: rgba(32, 33, 36, .18);--app-background: #f4f5f7;--surface: #ffffff;--surface-elevated: #f7f8fa;--surface-hover: #eef0f3;--border: #dfe3e8;--border-hover: #bdbdbd;--text: #212121;--text-secondary: #5f6368;--text-muted: #64748b;--primary: var(--primary-color, #03a9f4);--primary-strong: color-mix(in srgb, var(--primary) 85%, black);--loader-track: rgba(3, 169, 244, .16);--control-background: #ffffff;--control-background-hover: #f1f3f5;--shadow: rgba(32, 33, 36, .08)}html{color-scheme:dark}body{margin:0;font-family:Inter,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,sans-serif;color:var(--text);background:var(--app-background);min-height:100vh;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;text-rendering:optimizeLegibility}#root{min-height:100vh}.appShell{--page-padding: 28px;--mobile-fixed-actions-height: 86px;font-family:Roboto,system-ui,-apple-system,Segoe UI,sans-serif;-webkit-font-smoothing:antialiased;min-height:100vh;color:var(--text);background:var(--app-background)}button,input,textarea,select{font:inherit}button{color:inherit}a{color:inherit;text-decoration:none}::selection{background:var(--accent-background)}:root,[data-theme]{--on-primary: #ffffff;--accent-background: color-mix(in srgb, var(--primary) 16%, transparent);--accent-border: color-mix(in srgb, var(--primary) 40%, transparent);--focus-ring: color-mix(in srgb, var(--primary) 18%, transparent);--danger-ring: color-mix(in srgb, var(--danger) 18%, transparent);--danger-background: color-mix(in srgb, var(--danger) 6%, var(--surface));--modal-backdrop: rgba(0, 0, 0, .72);--sheet-backdrop: rgba(0, 0, 0, .45)}.panelRecovery{padding:28px;min-height:var(--ha-dialog-ui-available-height, 100dvh)}.panelRenderRecovery{display:flex;flex-direction:column;height:var(--ha-dialog-ui-available-height, 100dvh);min-height:0;box-sizing:border-box}.panelRecoveryNavigation{flex-shrink:0;min-width:0}.panelRecoveryNavigation>nav{display:inline-flex;flex-wrap:wrap;gap:8px}.panelRecoveryNavigation>nav a{padding:10px 14px;border:1px solid var(--border);border-radius:12px}.panelRecoveryNavigation>nav a:hover,.panelRecoveryNavigation>nav a:focus-visible{background:var(--surface-hover)}.panelRecoveryContent{flex:1;min-height:0;display:flex;align-items:center;justify-content:center;padding:24px 0}.panelRecoveryMessage{width:100%;max-width:36rem;display:flex;flex-direction:column;align-items:center;gap:24px;text-align:center}.panelRecoveryMessage p{margin:0;font-size:clamp(16px,2vw,20px);line-height:1.6;overflow-wrap:anywhere}.panelRecoveryMessage>button{align-self:center;max-width:100%;min-height:46px}@media(max-width:768px){.panelRenderRecovery{padding:16px}.panelRecoveryContent{padding:20px 8px}}._button_180pj_1{position:relative;display:inline-flex;align-items:center;justify-content:center;gap:8px;height:46px;padding:0 18px;border:1px solid transparent;border-radius:14px;cursor:pointer;-webkit-user-select:none;user-select:none;font-size:14px;font-weight:600;white-space:nowrap;transition:background .18s ease,color .18s ease,border-color .18s ease,box-shadow .18s ease,transform .18s ease,opacity .18s ease}._button_180pj_1:hover{transform:translateY(-1px)}._button_180pj_1:active{transform:translateY(0) scale(.98)}._button_180pj_1:focus-visible{outline:none;box-shadow:0 0 0 4px var(--focus-ring)}._full_180pj_32{width:100%}._primary_180pj_37{color:var(--on-primary);background:var(--primary);border-color:var(--accent-border);box-shadow:none}._primary_180pj_37:hover{background:var(--primary-strong)}._secondary_180pj_49{color:var(--text);background:var(--control-background);border-color:var(--border)}._secondary_180pj_49:hover{background:var(--control-background-hover);border-color:var(--border-hover)}._ghost_180pj_61{color:var(--text-secondary);background:transparent}._ghost_180pj_61:hover{background:var(--control-background-hover);color:var(--text)}._button_180pj_1:disabled{opacity:.45;cursor:not-allowed;transform:none;box-shadow:none}._button_180pj_1:disabled:hover{transform:none}._remove_180pj_83{align-self:flex-end;justify-self:end;flex:0 0 auto;width:fit-content;color:var(--text);background:var(--control-background-hover);border-color:transparent}._remove_180pj_83:hover{background:var(--surface-hover)}._remove_180pj_83._full_180pj_32{width:100%}._tabs_1vwxg_1{display:inline-flex;flex-wrap:wrap;max-width:100%;align-items:center;gap:6px;padding:6px;background:var(--surface);-webkit-backdrop-filter:blur(18px);backdrop-filter:blur(18px);border:1px solid var(--border);border-radius:18px;box-shadow:0 2px 8px var(--shadow);z-index:9000}._dropdown_1vwxg_16{position:relative}._tab_1vwxg_1{position:relative;display:flex;align-items:center;justify-content:center;height:44px;min-width:118px;padding:0 20px;border-radius:12px;color:var(--text-secondary);text-decoration:none;border:0;background:transparent;cursor:pointer;font-family:inherit;font-size:14px;font-weight:500;transition:background .2s,color .2s,transform .2s}._tab_1vwxg_1:hover{color:var(--text);background:var(--control-background)}._tab_1vwxg_1:active{transform:scale(.98)}._active_1vwxg_49{color:var(--text);background:var(--primary);box-shadow:none}._tab_1vwxg_1>span{margin-left:5px}._menu_1vwxg_59{position:absolute;top:calc(100% + 12px);left:0;width:250px;padding:8px;display:flex;flex-direction:column;gap:4px;background:var(--surface-elevated);-webkit-backdrop-filter:blur(22px);backdrop-filter:blur(22px);border:1px solid var(--border);border-radius:16px;box-shadow:0 18px 40px var(--shadow-floating);z-index:5000}._chevron_1vwxg_76{margin-left:8px}._tab_1vwxg_1[aria-expanded=true] ._chevron_1vwxg_76{transform:rotate(180deg)}._tab_1vwxg_1:focus-visible,._menuItem_1vwxg_84:focus-visible{outline:2px solid var(--primary);outline-offset:2px}._menuItem_1vwxg_84{display:flex;align-items:center;height:42px;padding:0 14px;border-radius:10px;color:var(--text-secondary);text-decoration:none;transition:background .15s,color .15s,transform .15s}._menuItem_1vwxg_84:hover{background:var(--control-background-hover);color:var(--text);transform:translate(3px)}._menuItem_1vwxg_84._active_1vwxg_49{color:var(--text);background:var(--accent-background);border:1px solid var(--accent-border)}._tabs_1vwxg_1{flex-wrap:wrap;max-width:100%}._overlay_tb5vv_1{position:fixed;top:0;right:0;bottom:0;left:0;display:flex;align-items:flex-end;background:var(--sheet-backdrop);z-index:3000;animation:_fade_tb5vv_1 .15s ease}._sheet_tb5vv_11{width:100%;background:var(--surface-elevated);border-top:1px solid var(--border);border-radius:20px 20px 0 0;padding:16px;box-shadow:0 -16px 48px var(--shadow-floating);animation:_sheet_tb5vv_11 .18s ease}._handle_tb5vv_21{width:42px;height:4px;margin:0 auto 18px;border-radius:999px;background:var(--surface-elevated)}@keyframes _sheet_tb5vv_11{0%{opacity:0;transform:translateY(18px)}to{opacity:1;transform:translateY(0)}}@keyframes _fade_tb5vv_1{0%{opacity:0}to{opacity:1}}._overlay_avpnk_1>section{box-sizing:border-box;max-height:calc(100dvh - 20px);display:flex;flex-direction:column;padding:16px 16px calc(20px + env(safe-area-inset-bottom));border-radius:24px 24px 0 0}._overlay_avpnk_1>section>div:last-child{overflow-y:auto;overscroll-behavior:contain;min-height:0}._heading_avpnk_16{display:flex;align-items:center;justify-content:space-between;gap:16px;margin-bottom:16px;padding-left:8px}._heading_avpnk_16 h2{margin:0;color:var(--text);font-size:22px;font-weight:650}._close_avpnk_32{width:40px;height:40px;flex-shrink:0;display:grid;place-items:center;border:1px solid var(--border);border-radius:12px;color:var(--text);background:var(--control-background);cursor:pointer}._nav_avpnk_45{display:flex;flex-direction:column;gap:4px}._item_avpnk_51{display:flex;align-items:center;gap:12px;min-height:50px;box-sizing:border-box;padding:8px 12px;border:1px solid transparent;border-radius:14px;text-decoration:none;color:var(--text-secondary);transition:background .15s,color .15s}._item_avpnk_51:hover{background:var(--control-background-hover);color:var(--text)}._icon_avpnk_70{display:grid;place-items:center;width:32px;height:32px;flex-shrink:0}._label_avpnk_78{flex:1;min-width:0;font-size:15px;line-height:1.35;font-weight:500}._arrow_avpnk_86{opacity:.5;flex-shrink:0}._active_avpnk_91{color:var(--text);background:var(--accent-background);border-color:var(--accent-border)}._active_avpnk_91 ._icon_avpnk_70{color:var(--primary)}._item_avpnk_51:focus-visible,._close_avpnk_32:focus-visible{outline:2px solid var(--primary);outline-offset:-2px}@media(prefers-reduced-motion:reduce){._item_avpnk_51{transition:none}}._overlay_avpnk_1>section>div:first-child>div{background:var(--text-muted);opacity:.45}._heading_avpnk_16{position:sticky;top:0;z-index:1;padding-bottom:12px;margin-bottom:4px;background:var(--surface-elevated)}._item_avpnk_51{scroll-margin-block:72px 12px}._search_1h7xe_1{box-sizing:border-box;width:100%;grid-column:1/-1;display:flex;align-items:center;gap:12px;min-width:0;height:48px;padding:0 16px;border:1px solid var(--border);border-radius:12px;background:var(--control-background);color:var(--text-muted)}._search_1h7xe_1:focus-within{border-color:var(--primary);box-shadow:0 0 0 2px var(--focus-ring)}._search_1h7xe_1>svg{flex-shrink:0}._search_1h7xe_1 input{flex:1;width:100%;min-width:0;height:100%;border:0;outline:0;background:transparent;color:var(--text);font:inherit;font-size:15px}._search_1h7xe_1 input::placeholder{color:var(--text-muted)}._header_1pxju_1{position:sticky;top:0;background:var(--surface);border-bottom:1px solid var(--border);z-index:1000}._bar_1pxju_9{display:flex;align-items:center;justify-content:space-between;gap:10px;min-height:64px;padding:0 16px}._tools_1pxju_18{display:flex;flex-direction:column;gap:8px;padding:0 16px 12px}._tools_1pxju_18>div{box-sizing:border-box;width:100%;margin:0}._title_1pxju_31{margin:0;font-size:17px;font-weight:600;color:var(--text)}._menuButton_1pxju_38{width:40px;height:40px;display:flex;align-items:center;justify-content:center;border:1px solid var(--border);border-radius:12px;background:var(--control-background);color:var(--text);cursor:pointer;transition:background .18s ease,border-color .18s ease,transform .18s ease}._menuButton_1pxju_38:hover{background:var(--control-background-hover);border-color:var(--border)}._menuButton_1pxju_38:active{transform:scale(.96)}@media(min-width:769px){._header_1pxju_1{display:none}}._title_1pxju_31{min-width:0;text-align:center;overflow-wrap:anywhere}._menuButton_1pxju_38{flex-shrink:0}._active_1pxju_76{background:var(--accent-background);border-color:var(--accent-border)}._menuButton_1pxju_38:focus-visible{outline:2px solid var(--primary);outline-offset:2px}._tools_1pxju_18>[role=group]{padding:3px;gap:3px}._tools_1pxju_18>[role=group]>button{flex:1;min-height:36px;padding:8px 10px}._tools_1pxju_18>[role=group]>button:last-child{flex:1.8}._loader_m2244_1{width:100%;min-height:220px;display:flex;align-items:center;justify-content:center;gap:14px;color:var(--text-secondary)}._fullscreen_m2244_11{min-height:100vh}._spinner_m2244_15{width:42px;height:42px;border-radius:50%;border:4px solid var(--loader-track);border-top-color:var(--primary);animation:_spin_m2244_15 .85s linear infinite}._label_m2244_24{font-size:15px;font-weight:600}@keyframes _spin_m2244_15{to{transform:rotate(360deg)}}._error_fi1f1_1{padding:16px;margin:12px 0;border:1px solid var(--danger);border-radius:14px;background:var(--danger-background);color:var(--text);overflow-wrap:anywhere}._error_fi1f1_1 p{margin:0;line-height:1.5}._error_fi1f1_1 button{margin-top:12px}._toast_1g76h_1{position:fixed;z-index:10001;top:max(16px,env(safe-area-inset-top));left:50%;transform:translate(-50%);width:max-content;max-width:min(560px,100% - 32px);box-sizing:border-box;display:flex;align-items:center;gap:12px;padding:16px;border:1px solid var(--primary);border-radius:16px;background:var(--surface-elevated);color:var(--text);box-shadow:0 8px 32px var(--shadow-floating);line-height:1.5;overflow-wrap:anywhere}._toast_1g76h_1>svg{flex-shrink:0;color:var(--primary)}._toast_1g76h_1 button{display:flex;align-items:center;justify-content:center;flex-shrink:0;min-width:36px;min-height:36px;border:0;border-radius:8px;background:transparent;color:var(--text-secondary);cursor:pointer}._toast_1g76h_1 button:hover{background:var(--surface-hover)}._warning_1g76h_43{border-color:var(--danger)}._warning_1g76h_43>svg{color:var(--danger)}._labelRow_1w41x_1{display:flex;align-items:center;gap:6px;min-width:0}._labelRow_1w41x_1>label{min-width:0}._helpButton_1w41x_12{display:inline-flex;flex:0 0 auto;align-items:center;justify-content:center;width:24px;height:24px;padding:0;border:0;border-radius:50%;background:transparent;color:var(--text-secondary);cursor:pointer}._helpButton_1w41x_12:hover{color:var(--primary);background:var(--accent-background)}._helpButton_1w41x_12:focus-visible{outline:2px solid var(--primary);outline-offset:2px}._tooltip_1w41x_37{position:fixed;z-index:10030;width:min(340px,100vw - 24px);max-height:calc(100vh - 24px);overflow-y:auto;padding:14px 16px;border-radius:12px;border:1px solid var(--border);background:var(--surface-elevated);color:var(--text);box-shadow:0 8px 24px var(--shadow-floating);font-size:13px;font-weight:400;line-height:1.6;white-space:pre-line;overflow-wrap:anywhere}._helpOverlay_1w41x_56{z-index:10030}._sheetContent_1w41x_60{display:grid;gap:20px;padding-bottom:max(8px,env(safe-area-inset-bottom));color:var(--text)}._sheetContent_1w41x_60 h3{margin:0;font-size:18px}._sheetContent_1w41x_60 p{margin:0;max-height:60dvh;overflow-y:auto;font-size:14px;line-height:1.6;white-space:pre-line;overflow-wrap:anywhere}@media(pointer:coarse){._helpButton_1w41x_12{width:32px;height:32px}}._field_1vuim_1{display:flex;flex-direction:column;gap:10px;width:100%;min-width:0;box-sizing:border-box}._label_1vuim_10{padding-left:2px;color:var(--text-secondary);font-size:13px;font-weight:600;letter-spacing:.02em}._inputWrapper_1vuim_18{position:relative;width:100%;min-width:0;box-sizing:border-box}._input_1vuim_18{width:100%;min-width:0;box-sizing:border-box;height:50px;padding:0 16px;border-radius:14px;border:1px solid var(--border);background:var(--control-background);color:var(--text);font-size:15px;font-weight:500;transition:border-color .18s ease,background .18s ease,box-shadow .18s ease,transform .18s ease}._passwordInput_1vuim_40{padding-right:52px}._input_1vuim_18::placeholder{color:var(--text-muted)}._input_1vuim_18:hover{background:var(--control-background-hover);border-color:var(--border-hover)}._input_1vuim_18:focus{outline:none;background:var(--control-background-hover);border-color:var(--primary);box-shadow:0 0 0 4px var(--focus-ring);transform:translateY(-1px)}._input_1vuim_18:disabled{opacity:.6;cursor:not-allowed}._passwordToggle_1vuim_66{position:absolute;right:14px;top:50%;width:28px;height:28px;padding:0;display:flex;align-items:center;justify-content:center;transform:translateY(-50%);border:none;background:transparent;color:var(--text-secondary);cursor:pointer;opacity:.7;transition:opacity .18s ease,transform .18s ease}._passwordToggle_1vuim_66:hover{opacity:1;transform:translateY(-50%) scale(1.05)}._passwordToggle_1vuim_66:disabled{opacity:.4;cursor:not-allowed}._error_1vuim_95,._error_1vuim_95:hover{border-color:var(--danger)}._error_1vuim_95:focus{border-color:var(--danger);box-shadow:0 0 0 4px var(--danger-ring)}._errorText_1vuim_108{padding-left:2px;color:var(--danger);font-size:12px;font-weight:500}._field_1aipr_1{min-width:0;display:flex;flex-direction:column;gap:8px}._label_1aipr_8{color:var(--text-secondary);font-size:13px;font-weight:500}._textarea_1aipr_14{box-sizing:border-box;width:100%;min-width:0;max-width:100%;min-height:120px;padding:14px;border:1px solid var(--border);border-radius:14px;background:var(--surface);color:var(--text);font-size:14px;font-family:inherit;resize:vertical;outline:none;transition:border-color .15s ease,background .15s ease,box-shadow .15s ease}._textarea_1aipr_14::placeholder{color:var(--text-muted)}._textarea_1aipr_14:hover{border-color:var(--border-hover)}._textarea_1aipr_14:focus{outline:none;border-color:var(--primary);box-shadow:0 0 0 4px var(--focus-ring)}._error_1aipr_46{border-color:var(--danger)}._error_1aipr_46:focus{border-color:var(--danger);box-shadow:0 0 0 4px var(--danger-ring)}._errorText_1aipr_55{color:var(--danger);font-size:12px}._form_15zw4_1{display:flex;flex-direction:column;gap:20px;min-width:0}._actions_15zw4_8{display:flex;flex-wrap:wrap;gap:12px;justify-content:flex-end}@media(max-width:768px){._actions_15zw4_8>button{width:100%;white-space:normal}}:root{--mobile-fixed-actions-height: 86px;--page-padding: 28px}._page_z6937_7{display:flex;flex-direction:column;gap:32px;min-height:100vh;padding:var(--page-padding, 28px);width:100%;max-width:1440px;margin:0 auto;min-width:0}._header_z6937_19{display:flex;flex-direction:column}._headerTop_z6937_24{display:flex;align-items:flex-start;justify-content:space-between;gap:24px}._heading_z6937_31{display:flex;flex-direction:column}._title_z6937_36{margin:0;font-size:40px;font-weight:700;line-height:1.2;letter-spacing:-.04em;color:var(--text)}._description_z6937_45{margin-top:10px;color:var(--text-secondary);font-size:15px;line-height:1.5}._actions_z6937_52{display:flex;align-items:center}._list_z6937_57{display:flex;flex-direction:column;gap:12px;padding-bottom:calc(var(--mobile-fixed-actions-height) + 32px + env(safe-area-inset-bottom))}@media(max-width:768px){._page_z6937_7{padding:12px 16px 0}._headerTop_z6937_24{flex-direction:column}._title_z6937_36{font-size:32px}._list_z6937_57{padding-bottom:calc(var(--mobile-fixed-actions-height) + 32px + env(safe-area-inset-bottom))}}@media(min-width:769px){._header_z6937_19{gap:20px}._list_z6937_57{padding-bottom:0}}._innerTabs_z6937_88{display:inline-flex;align-self:flex-start;gap:4px;max-width:100%;margin-top:18px;margin-bottom:8px;padding:4px;box-sizing:border-box;border:1px solid var(--border);border-radius:14px;background:var(--surface)}._innerTab_z6937_88{min-height:40px;padding:8px 20px;border:1px solid transparent;border-radius:10px;background:transparent;color:var(--text-secondary);font:inherit;font-size:14px;font-weight:600;cursor:pointer;transition:background .15s ease,color .15s ease}._innerTab_z6937_88:hover{background:var(--surface-hover);color:var(--text)}._innerTab_z6937_88._activeInnerTab_z6937_121{background:var(--primary);color:var(--on-primary)}._innerTab_z6937_88:focus-visible{outline:2px solid var(--primary);outline-offset:2px}._settingsActions_z6937_131{display:flex;justify-content:flex-end;padding:0 0 12px}._settingsActions_z6937_131>button{min-width:160px}._listSentinel_z6937_141{height:1px}._settingsSections_z6937_145{display:flex;flex-direction:column;gap:20px;min-width:0}@media(max-width:768px){._settingsSections_z6937_145{margin-bottom:calc(100px + env(safe-area-inset-bottom))}}._settingsSection_z6937_145{min-width:0;padding:24px;border:1px solid var(--border);border-radius:16px;background:var(--surface)}._settingsSection_z6937_145>h2{margin:0 0 24px;color:var(--text);font-size:18px}._settingsMobileActions_z6937_171{position:fixed;left:16px;right:16px;bottom:calc(16px + env(safe-area-inset-bottom));display:flex;justify-content:center;z-index:1100}._settingsMobileActions_z6937_171>button{width:100%;max-width:420px}@media(max-width:768px){._settingsSection_z6937_145{padding:18px}}._connectionFields_z6937_191{display:flex;flex-direction:column;gap:24px}._collectionHeader_z6937_197{display:grid;grid-template-columns:minmax(0,1fr) auto;align-items:center;gap:20px 24px;padding:24px;border:1px solid var(--border);border-radius:18px;background:var(--surface)}._collectionHeader_z6937_197 ._title_z6937_36{font-size:32px;line-height:1.2}._collectionHeader_z6937_197>._actions_z6937_52{justify-self:end}._collectionHeader_z6937_197>._headerTop_z6937_24{grid-column:1/-1}@media(max-width:768px){._collectionHeader_z6937_197{display:contents}._collectionHeader_z6937_197>._actions_z6937_52{display:contents}._collectionHeader_z6937_197>._heading_z6937_31,._collectionHeader_z6937_197>._headerTop_z6937_24{display:none}}._heading_1w2wz_1{margin:0;color:var(--text)}._note_1w2wz_6{margin:0;color:var(--text-secondary);line-height:1.5}._entries_1w2wz_12{display:flex;flex-direction:column;gap:12px;min-width:0}._entry_1w2wz_19{padding:16px;border:1px solid var(--border);border-radius:14px;background:var(--surface);min-width:0}._line_1w2wz_27{display:flex;flex-wrap:wrap;gap:8px 16px;overflow-wrap:anywhere;font-size:14px}._line_1w2wz_27+._line_1w2wz_27{margin-top:10px;color:var(--text-secondary)}._error_1w2wz_40{color:var(--error, #dc2626)}@media(max-width:768px){._heading_1w2wz_1{display:none}}._body_1w2wz_49{margin-top:12px;min-width:0}._body_1w2wz_49 summary{cursor:pointer;color:var(--text-secondary);font-size:14px}._body_1w2wz_49 pre{margin:10px 0 0;padding:12px;border-radius:8px;background:var(--control-background);font-size:12px;line-height:1.5;white-space:pre-wrap;overflow-wrap:anywhere;color:var(--text)}._subtitle_c1esh_1{font-size:13px;color:var(--text-muted)}._card_c1esh_6{display:flex;align-items:center;gap:18px;width:100%;padding:18px 20px;border:1px solid var(--border);border-radius:18px;background:var(--surface);-webkit-backdrop-filter:blur(16px);backdrop-filter:blur(16px);cursor:pointer;text-align:left;transition:transform .18s ease,border-color .18s ease,background .18s ease,box-shadow .18s ease}._card_c1esh_6:hover{transform:translateY(-2px);background:var(--control-background);border-color:var(--border-hover);box-shadow:0 12px 28px var(--shadow)}._card_c1esh_6:active{transform:scale(.985)}._content_c1esh_32{flex:1;display:flex;flex-direction:column;gap:6px;min-width:0}._title_c1esh_40{font-size:16px;font-weight:600;color:var(--text)}._arrow_c1esh_46{color:var(--text-muted);flex-shrink:0;transition:color .2s,transform .2s}._card_c1esh_6:hover ._arrow_c1esh_46{color:var(--primary);transform:translate(4px)}._titleOnly_c1esh_57{min-height:72px}._titleOnly_c1esh_57 ._title_c1esh_40{overflow-wrap:anywhere}._pagination_r0e80_1{display:flex;align-items:center;justify-content:center;gap:12px;flex-wrap:wrap;margin-top:4px}._button_r0e80_10{min-width:36px;height:38px;padding:0 14px;border:1px solid var(--border);border-radius:10px;background:var(--surface);color:var(--text);cursor:pointer;font-size:14px;font-weight:600;transition:background .15s ease,border-color .15s ease,opacity .15s ease}._button_r0e80_10:hover:not(:disabled){background:var(--surface-hover);border-color:var(--border-hover)}._button_r0e80_10:disabled{cursor:not-allowed;opacity:.45}._label_r0e80_34{color:var(--text-secondary);font-size:14px;text-align:center}._pages_r0e80_40{display:flex;align-items:center;justify-content:center;flex-wrap:wrap;gap:4px}._active_r0e80_48{background:var(--primary);border-color:var(--primary)}._button_r0e80_10:focus-visible{outline:2px solid var(--primary);outline-offset:2px}._overlay_1m3e5_1,._modal_1m3e5_1,._header_1m3e5_1,._body_1m3e5_1,._footer_1m3e5_1{box-sizing:border-box;min-width:0}._overlay_1m3e5_1{position:fixed;top:0;right:0;bottom:0;left:0;display:flex;align-items:center;justify-content:center;padding:32px;background:var(--modal-backdrop);-webkit-backdrop-filter:blur(12px);backdrop-filter:blur(12px);z-index:10000}._modal_1m3e5_1{width:100%;display:flex;flex-direction:column;max-height:calc(100vh - 64px);overflow:hidden;border-radius:24px;background:var(--surface);-webkit-backdrop-filter:blur(24px);backdrop-filter:blur(24px);border:1px solid var(--border);box-shadow:0 24px 80px var(--shadow-floating)}._sm_1m3e5_32{max-width:560px}._md_1m3e5_36{max-width:760px}._lg_1m3e5_40{max-width:960px}._xl_1m3e5_44{max-width:1200px}._header_1m3e5_1{gap:12px;display:flex;align-items:center;justify-content:space-between;min-height:76px;padding:0 32px;border-bottom:1px solid var(--border);flex-shrink:0}._title_1m3e5_59{flex:1;min-width:0;margin:0;font-size:22px;font-weight:700;color:var(--text)}._body_1m3e5_1{flex:1;overflow-y:auto;overflow-x:hidden;padding:32px;min-height:0}._footer_1m3e5_1{display:flex;flex-direction:column;z-index:200;padding:20px 32px;background:var(--surface);-webkit-backdrop-filter:blur(18px);backdrop-filter:blur(18px);border-top:1px solid var(--border)}._close_1m3e5_86{flex-shrink:0;width:40px;height:40px;padding:0!important;border-radius:12px}@media(max-width:768px){._overlay_1m3e5_1{padding:0}._modal_1m3e5_1{width:100%;max-width:100%;height:100vh;max-height:100vh;border-radius:0;border:none}._header_1m3e5_1{padding:max(env(safe-area-inset-top),16px) 16px 16px}._body_1m3e5_1{padding:20px 16px}._footer_1m3e5_1{padding:16px 16px calc(16px + env(safe-area-inset-bottom))}}._fields_1m3e5_116{display:contents;border:0;padding:0;margin:0;min-width:0}._suspended_1m3e5_124{display:none}._heading_1m3e5_128{flex:1;min-width:0;padding:16px 0}._content_eng69_1{display:flex;flex-direction:column;gap:12px}._title_eng69_7{margin:4px 0 8px;color:var(--text);font-size:18px;font-weight:600}._actions_eng69_14{display:flex;flex-direction:column;gap:12px}._row_eng69_20{display:grid;grid-auto-flow:column;grid-auto-columns:minmax(0,1fr);gap:10px}._row_eng69_20>button{min-width:0}._identifier_eng69_31{margin:4px 0 0;font-size:11px;line-height:1.4;color:var(--text-secondary);overflow-wrap:anywhere;-webkit-user-select:text;user-select:text}._accordion_5owbj_1{border:1px solid var(--border);border-radius:12px;overflow:hidden}._header_5owbj_7{width:100%;background:var(--surface-elevated);border:none;color:var(--text);padding:16px;text-align:left;cursor:pointer;font-weight:600;display:flex;justify-content:space-between}._content_5owbj_20{padding:16px;border-top:1px solid var(--border);display:flex;flex-direction:column;gap:16px}._wrapper_1fgdg_1{min-width:0;width:100%;box-sizing:border-box;position:relative;z-index:999999;overflow:visible}._dropdown_1fgdg_10{position:fixed;z-index:9999999;max-height:260px;overflow-y:auto;overscroll-behavior:contain;border:1px solid var(--border);border-radius:12px;background:var(--surface);box-shadow:0 12px 28px var(--shadow-floating)}._option_1fgdg_22{box-sizing:border-box;overflow-wrap:anywhere;display:flex;width:100%;flex-direction:column;gap:4px;padding:10px 12px;border:0;border-bottom:1px solid var(--border);background:transparent;color:var(--text);text-align:left;cursor:pointer}._option_1fgdg_22:hover{background:var(--surface-hover)}._option_1fgdg_22:last-child{border-bottom:0}._title_1fgdg_46{font-size:14px;font-weight:600}._uuid_1fgdg_51,._hint_1fgdg_52{color:var(--text-secondary);font-size:12px}._field_1esqu_1{margin-bottom:12px}._row_1esqu_5{display:flex;align-items:flex-end;gap:8px}._inputWrapper_1esqu_11{flex:1;min-width:0}._error_1esqu_16{margin-top:4px;color:var(--danger);font-size:12px}._clearButton_1esqu_22{flex:0 0 36px;width:36px;min-width:36px;height:50px;padding:0;box-sizing:border-box}._rowError_1esqu_31{align-items:center}._dropdown_3mupk_2{display:flex;flex-direction:column;gap:10px;width:100%;min-width:0;box-sizing:border-box}._label_3mupk_11{padding-left:2px;color:var(--text-secondary);font-size:13px;font-weight:600;letter-spacing:.02em}._wrapper_3mupk_19{position:relative}._select_3mupk_23{width:100%;min-width:0;box-sizing:border-box;height:50px;padding:0 48px 0 16px;appearance:none;-webkit-appearance:none;-moz-appearance:none;border-radius:14px;border:1px solid var(--border);background:var(--control-background);color:var(--text);font-size:15px;font-weight:500;cursor:pointer;transition:border-color .18s ease,background .18s ease,box-shadow .18s ease,transform .18s ease}._select_3mupk_23:hover{background:var(--control-background-hover);border-color:var(--border-hover)}._select_3mupk_23:focus{outline:none;background:var(--control-background-hover);border-color:var(--primary);box-shadow:0 0 0 4px var(--focus-ring);transform:translateY(-1px)}._select_3mupk_23:disabled{opacity:.6;cursor:not-allowed}._select_3mupk_23 option{background:var(--surface);color:var(--text)}._arrow_3mupk_65{position:absolute;top:50%;right:16px;transform:translateY(-50%);pointer-events:none;color:var(--text-muted);transition:color .18s ease,transform .18s ease}._wrapper_3mupk_19:hover ._arrow_3mupk_65{color:var(--primary)}._select_3mupk_23:focus+._arrow_3mupk_65{color:var(--primary);transform:translateY(-50%) rotate(180deg)}._error_3mupk_85,._error_3mupk_85:hover{border-color:var(--danger)!important}._error_3mupk_85:focus{border-color:var(--danger)!important;box-shadow:0 0 0 4px var(--danger-ring);background:var(--danger-background)}._error_3mupk_85+._arrow_3mupk_65{color:var(--danger)}._errorText_3mupk_103{margin-top:-4px;padding-left:2px;color:var(--danger);font-size:12px;font-weight:500;line-height:1.4}._form_1ogov_1{display:flex;flex-direction:column;gap:28px}._section_1ogov_7{z-index:100;display:flex;flex-direction:column;gap:18px;padding:22px;border-radius:18px;background:var(--control-background);border:1px solid var(--border)}._sectionTitle_1ogov_18{margin:0;font-size:13px;font-weight:700;letter-spacing:.08em;text-transform:uppercase;color:var(--text-secondary)}._conditions_1ogov_27{display:flex;flex-direction:column;gap:14px}._addCondition_1ogov_33{width:100%;height:48px;margin-top:8px;border:1px dashed var(--border);border-radius:14px;background:transparent;color:var(--text-secondary);transition:background .18s,border-color .18s,color .18s,transform .18s}._addCondition_1ogov_33:hover{background:var(--accent-background);border-color:var(--accent-border);color:var(--text)}._addCondition_1ogov_33:active{transform:scale(.98)}._footer_1ogov_54{z-index:200;position:sticky;bottom:-32px;display:flex;justify-content:flex-end;align-items:center;gap:12px;margin:0 -32px -32px;padding:20px 32px;background:var(--surface);-webkit-backdrop-filter:blur(18px);backdrop-filter:blur(18px);border-top:1px solid var(--border)}@media(max-width:768px){._form_1ogov_1{gap:20px}._section_1ogov_7{padding:18px}._footer_1ogov_54{position:sticky;bottom:-20px;margin:0 -16px -20px;padding:16px 16px calc(16px + env(safe-area-inset-bottom));flex-direction:column}}._container_rqdjx_1{position:relative;min-width:0;display:flex;flex-direction:column;gap:12px}._rows_rqdjx_9{display:flex;flex-direction:column;gap:12px;min-width:0}._rows_rqdjx_9:empty{display:none}._hidden_rqdjx_20{visibility:hidden}._overlay_rqdjx_24{position:absolute;top:0;right:0;bottom:0;left:0;display:flex;flex-direction:column;gap:12px}._card_rqdjx_32{box-sizing:border-box;min-height:88px;padding:18px 20px;border:1px solid var(--border);border-radius:18px;background:var(--surface);display:flex;flex-direction:column;justify-content:center;gap:10px;overflow:hidden}._overlay_rqdjx_24 ._card_rqdjx_32{flex:1;min-height:0}._title_rqdjx_51,._subtitle_rqdjx_51{display:block;border-radius:4px;background:var(--control-background-hover);animation:_pulse_rqdjx_1 1.4s ease-in-out infinite}._title_rqdjx_51{width:45%;max-width:320px;height:18px}._subtitle_rqdjx_51{width:25%;max-width:180px;height:13px}._srOnly_rqdjx_70{position:absolute;width:1px;height:1px;overflow:hidden;clip-path:inset(50%);white-space:nowrap}@keyframes _pulse_rqdjx_1{50%{opacity:.45}}@media(prefers-reduced-motion:reduce){._title_rqdjx_51,._subtitle_rqdjx_51{animation:none}}._container_9wouv_1{position:fixed;left:16px;right:16px;bottom:calc(16px + env(safe-area-inset-bottom));display:flex;justify-content:center;opacity:0;pointer-events:none;transform:translateY(24px) scale(.96);transition:opacity .22s ease,transform .22s ease;z-index:1100}._container_9wouv_1>*{width:100%;max-width:420px}._visible_9wouv_20{opacity:1;transform:translateY(0) scale(1);pointer-events:auto}._visible_9wouv_20>*{pointer-events:auto}._field_1iloj_1{min-width:0;display:flex;flex-direction:column;gap:6px}._label_1iloj_8{color:var(--text);font-size:13px;font-weight:600}._select_1iloj_14{min-width:0;max-width:100%;width:100%;padding:12px 14px;border:1px solid var(--border);border-radius:12px;background:var(--surface);color:var(--text);font:inherit;box-sizing:border-box}._select_1iloj_14:focus{outline:none;border-color:var(--primary);box-shadow:0 0 0 4px var(--focus-ring)}._form_1a1tt_1{display:flex;flex-direction:column;gap:18px}._field_1a1tt_7{display:flex;flex-direction:column;gap:8px;color:var(--text);font-size:13px;font-weight:600}._textarea_1a1tt_16{width:100%;min-height:140px;padding:12px 14px;border:1px solid var(--border);border-radius:12px;background:var(--surface);color:var(--text);resize:vertical;font:inherit;box-sizing:border-box}._arrayItem_1a1tt_29{display:grid;gap:12px;padding:12px;border:1px solid var(--border);border-radius:12px;background:var(--surface);margin-bottom:12px}._form_1a1tt_1 p{margin:0;color:var(--text-secondary);font-size:13px;line-height:1.5}._logicTabs_1a1tt_46{display:flex;gap:4px;padding:4px;background:var(--surface);border:1px solid var(--border);border-radius:12px}._logicTabs_1a1tt_46 button{flex:1;min-width:0;padding:12px 8px;border:0;border-radius:8px;background:transparent;color:var(--text-secondary);font:inherit;cursor:pointer;overflow-wrap:anywhere}._logicTabs_1a1tt_46 button[aria-selected=true]{background:var(--accent-background);color:var(--text);box-shadow:inset 0 0 0 1px var(--accent-border)}._logicTabs_1a1tt_46 button:focus-visible{outline:2px solid var(--primary);outline-offset:2px}@media(max-width:400px){._logicTabs_1a1tt_46 button{padding:10px 4px;font-size:12px}}._sectionTitle_1a1tt_85{margin:0;font-size:14px;font-weight:600;color:var(--text)}._footerActions_1a1tt_92{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:12px}._footerActions_1a1tt_92>button{min-width:0;min-height:46px;height:auto;padding:12px;white-space:normal}._phraseMode_1a1tt_106{display:flex;align-items:center;gap:8px}._phraseMode_1a1tt_106>label{flex:1;min-width:0}._phraseMode_1a1tt_106>label>span:first-of-type{flex-shrink:0}@media(max-width:768px){._directTabLabel_1a1tt_122{white-space:pre-line}}._linkActions_1a1tt_126{display:flex;justify-content:flex-end;flex-wrap:wrap;gap:12px;align-items:center}._switchRow_1hmmz_1{display:inline-flex;align-items:center;gap:10px;color:var(--text);font-size:14px;cursor:pointer;-webkit-user-select:none;user-select:none}._input_1hmmz_11{position:absolute;width:1px;height:1px;padding:0;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border:0}._track_1hmmz_22{position:relative;width:46px;height:26px;flex:0 0 auto;border:1px solid var(--border);border-radius:999px;background:var(--surface-elevated);transition:background .2s ease,border-color .2s ease,box-shadow .2s ease}._thumb_1hmmz_33{position:absolute;top:3px;left:3px;width:18px;height:18px;border-radius:50%;background:var(--switch-thumb);box-shadow:0 2px 6px var(--shadow-floating);transition:transform .2s ease,background .2s ease}._input_1hmmz_11:checked+._track_1hmmz_22{border-color:var(--primary);background:var(--primary);box-shadow:none}._input_1hmmz_11:checked+._track_1hmmz_22 ._thumb_1hmmz_33{transform:translate(20px);background:var(--on-primary)}._input_1hmmz_11:focus-visible+._track_1hmmz_22{outline:2px solid var(--primary);outline-offset:2px}._input_1hmmz_11:disabled+._track_1hmmz_22,._input_1hmmz_11:disabled~._label_1hmmz_62{opacity:.55;cursor:not-allowed}._label_1hmmz_62{line-height:1.3}._form_mn1ml_1{display:flex;flex-direction:column;gap:24px;min-width:0}._arrayItem_mn1ml_8{display:flex;flex-direction:column;gap:18px;min-width:0;padding:20px;border:1px solid var(--border);border-radius:14px;background:var(--control-background);box-sizing:border-box}@media(max-width:768px){._arrayItem_mn1ml_8{padding:14px}}._sectionTitle_mn1ml_25{margin:0;font-size:14px;font-weight:600;color:var(--text)}._form_1i0x1_1{display:flex;flex-direction:column;gap:18px}._field_1i0x1_7{display:flex;flex-direction:column;gap:8px;color:var(--text);font-size:13px;font-weight:600}._textarea_1i0x1_16{width:100%;min-height:140px;padding:12px 14px;border:1px solid var(--border);border-radius:12px;background:var(--surface);color:var(--text);resize:vertical;font:inherit;box-sizing:border-box}._arrayItem_1i0x1_29{display:grid;gap:12px;padding:12px;border:1px solid var(--border);border-radius:12px;background:var(--surface);margin-bottom:12px}._grid_fc8hl_1{min-width:0;display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,280px),1fr));gap:20px}._card_fc8hl_8{box-sizing:border-box;min-width:0;padding:24px;border:1px solid var(--border);border-radius:18px;background:var(--surface)}._card_fc8hl_8 h2{overflow-wrap:anywhere;margin:0 0 20px;font-size:20px}._actions_fc8hl_23{display:flex;flex-wrap:wrap;gap:12px}._description_fc8hl_29{margin:0 0 20px;color:var(--text-secondary);line-height:1.5}@media(max-width:768px){._page_fc8hl_36{padding-bottom:calc(112px + env(safe-area-inset-bottom))}._card_fc8hl_8{padding:18px}._actions_fc8hl_23{flex-direction:column}._actions_fc8hl_23>button{width:100%;min-width:0;max-width:100%;white-space:normal;height:auto;min-height:46px;padding:12px;overflow-wrap:anywhere}}._form_1ijxr_1{display:flex;flex-direction:column;gap:24px}._field_1ijxr_7{display:flex;flex-direction:column;gap:8px}._input_1ijxr_13{box-sizing:border-box;min-width:0;width:100%;background:var(--surface);border:1px solid var(--border);border-radius:10px;padding:12px;color:var(--text)}._input_1ijxr_13:focus{outline:none;border-color:var(--primary)}._label_1ijxr_29{color:var(--text-secondary);font-size:13px;font-weight:500}._help_1ijxr_35{color:var(--text-secondary);font-size:13px}._toggleHelp_1ijxr_40{display:flex;align-items:center;gap:8px}._page_w5y3x_1{min-height:100vh;padding:28px;background:var(--surface);color:var(--text);display:flex;flex-direction:column;gap:28px}._header_w5y3x_11{display:flex;align-items:flex-end;justify-content:space-between;gap:20px}._title_w5y3x_18{margin:0;font-size:40px;line-height:1;letter-spacing:-.04em}._description_w5y3x_25{margin:10px 0 0;color:var(--text-secondary);font-size:15px}._grid_w5y3x_31{display:grid;grid-template-columns:minmax(0,1fr);min-width:0;gap:16px}._card_w5y3x_38,._empty_w5y3x_38{min-width:0;max-width:100%;padding:20px;border:1px solid var(--border);border-radius:20px;background:var(--surface-elevated)}._cardHeader_w5y3x_47{display:flex;justify-content:space-between;gap:16px;align-items:flex-start}._cardTitle_w5y3x_54{margin:0;font-size:18px}._meta_w5y3x_59{overflow-wrap:anywhere;margin-top:8px;color:var(--text-secondary);font-size:14px}._time_w5y3x_66{margin-top:18px;font-size:38px;font-weight:700;letter-spacing:-.04em}._form_w5y3x_73{display:flex;flex-direction:column;gap:18px}._field_w5y3x_79{display:flex;flex-direction:column;gap:8px}._label_w5y3x_85{color:var(--text-secondary);font-size:13px;font-weight:500}._select_w5y3x_91,._input_w5y3x_91{height:44px;padding:0 14px;border:1px solid var(--border);border-radius:14px;background:var(--surface);color:var(--text);font-size:14px}._quickTabs_w5y3x_101{display:flex;flex-wrap:wrap;gap:8px}._quickTab_w5y3x_101{height:40px;padding:0 14px;border:1px solid var(--border);border-radius:999px;background:var(--surface);color:var(--text-secondary);cursor:pointer}._activeQuickTab_w5y3x_117{background:var(--accent-background);color:var(--text)}@media(max-width:768px){._page_w5y3x_1{padding:20px;padding-bottom:calc(120px + env(safe-area-inset-bottom))}._header_w5y3x_11{align-items:stretch;flex-direction:column}._title_w5y3x_18{font-size:32px}}._cardLead_w5y3x_135{flex:1;display:flex;align-items:center;gap:14px;min-width:0}._cardIcon_w5y3x_143{flex:0 0 auto;color:var(--text-muted)}._cardButton_w5y3x_148{width:100%;text-align:left;color:inherit;cursor:pointer}._cardButton_w5y3x_148:hover{border-color:var(--border-hover);background:var(--surface-hover)}._wheelPicker_w5y3x_160{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));width:100%;min-width:0;box-sizing:border-box;gap:12px;padding:14px;border:1px solid var(--border);border-radius:0;background:var(--surface-elevated)}._wheelColumn_w5y3x_173{display:flex;flex-direction:column;align-items:center;gap:8px}._wheelSelect_w5y3x_180{width:100%;height:64px;box-sizing:border-box;border:1px solid var(--border);border-radius:10px;background:var(--control-background);color:var(--text);text-align:center;font-size:24px;font-weight:700}@media(max-width:768px){._wheelPicker_w5y3x_160{position:relative;overflow:hidden}._wheelSelect_w5y3x_180{height:72px}}._footerActions_w5y3x_202{display:flex;justify-content:flex-end;width:100%}._saveButton_w5y3x_208{min-width:160px;box-sizing:border-box}@media(max-width:768px){._saveButton_w5y3x_208{width:100%}}._cardLead_w5y3x_135>div{min-width:0}._cardHeader_w5y3x_47>:last-child:not(._cardLead_w5y3x_135){flex-shrink:0}._volumeLabel_w5y3x_226{display:flex;align-items:baseline;gap:8px}._volumeValue_w5y3x_232{color:var(--text);font-weight:600}._alarmTimeFields_w5y3x_237{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:12px}._wheelSelect_w5y3x_180:focus{outline:2px solid var(--primary);outline-offset:2px}@media(max-width:768px){._grid_w5y3x_31{padding-bottom:calc(96px + env(safe-area-inset-bottom))}}._page_12ruw_1{padding:0 32px 24px;box-sizing:border-box;min-width:0;color:var(--text)}._heading_12ruw_8{display:flex;align-items:center;gap:16px;margin:28px 0}._heading_12ruw_8 h1{font-size:30px;margin:0}._heading_12ruw_8 p{color:var(--text-secondary);line-height:1.6;margin:8px 0 0}._grid_12ruw_26{display:grid;grid-template-columns:repeat(auto-fill,minmax(min(100%,250px),1fr));gap:16px;max-width:1100px}._device_12ruw_33{display:flex;flex-direction:column;align-items:flex-start;gap:12px;text-align:left;padding:24px;border:1px solid var(--border, #333);background:var(--surface, #1c1c1c);color:var(--text);border-radius:20px;font:inherit;cursor:pointer;min-width:0}._device_12ruw_33 strong{font-size:18px;overflow-wrap:anywhere}._device_12ruw_33 span,._device_12ruw_33 small{color:var(--text-secondary)}._device_12ruw_33:hover,._device_12ruw_33:focus-visible{border-color:var(--primary, #03a9f4)}._deviceLive_12ruw_64{border-color:#3da98c}._deviceLive_12ruw_64 svg{color:#3da98c}._navigation_12ruw_72{padding:24px 32px 0}._playback_12ruw_76{position:relative;border:1px solid var(--primary, #03a9f4);background:color-mix(in srgb,var(--primary, #03a9f4) 10%,transparent);border-radius:14px;overflow:hidden}._playback_12ruw_76>svg{position:absolute;left:18px;top:23px;pointer-events:none;color:var(--primary)}._playbackSelect_12ruw_92{padding:18px 40px 6px 54px;border:0;background:transparent;border-radius:14px 14px 0 0;min-height:48px;text-overflow:ellipsis}._playback_12ruw_76:has(select:disabled){opacity:.65}._playback_12ruw_76 small{display:block;padding:0 18px 18px 54px;color:var(--text-secondary);pointer-events:none}._statusRow_12ruw_112{display:flex;align-items:center;gap:8px;margin-bottom:20px}._status_12ruw_112{display:flex;gap:10px;align-items:center;padding:16px 0;color:var(--text-secondary)}._live_12ruw_127{color:#32aa87}._hint_12ruw_131{font-size:14px;color:var(--text-secondary);line-height:1.6}._footer_12ruw_137{display:flex;gap:12px;width:100%}._footer_12ruw_137>button{flex:1;min-width:0}._empty_12ruw_148{padding:28px;border:1px dashed var(--border, #333);border-radius:18px;line-height:1.7}._error_12ruw_155{color:var(--danger, #ed8291);line-height:1.5}@media(max-width:768px){._navigation_12ruw_72{padding:0}._page_12ruw_1{padding:16px}._heading_12ruw_8{margin:20px 0}._heading_12ruw_8 h1{display:none}._grid_12ruw_26{grid-template-columns:1fr}._heading_12ruw_8>svg{display:none}}\n", i.appendChild(c);
  }
  render() {
    if (!this.isConnected) return;
    const i = this.ensureShadowRoot();
    this.root || (this.container || (this.container = document.createElement("div"), i.appendChild(this.container)), this.root = Rh.createRoot(this.container)), this.root.render(
      /* @__PURE__ */ o.jsx(Tf.StrictMode, { children: /* @__PURE__ */ o.jsx(up, { children: /* @__PURE__ */ o.jsx(cS, { hass: this.hassValue }) }) })
    );
  }
}
customElements.get(Cf) || customElements.define(Cf, dS);
