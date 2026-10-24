var Cm = Object.defineProperty;
var jm = (r, a, i) => a in r ? Cm(r, a, { enumerable: !0, configurable: !0, writable: !0, value: i }) : r[a] = i;
var Ne = (r, a, i) => jm(r, typeof a != "symbol" ? a + "" : a, i);
function Rf(r) {
  return r && r.__esModule && Object.prototype.hasOwnProperty.call(r, "default") ? r.default : r;
}
var cl = { exports: {} }, As = {}, dl = { exports: {} }, ye = {};
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
function Em() {
  if (Kd) return ye;
  Kd = 1;
  var r = Symbol.for("react.element"), a = Symbol.for("react.portal"), i = Symbol.for("react.fragment"), c = Symbol.for("react.strict_mode"), d = Symbol.for("react.profiler"), f = Symbol.for("react.provider"), p = Symbol.for("react.context"), m = Symbol.for("react.forward_ref"), g = Symbol.for("react.suspense"), w = Symbol.for("react.memo"), y = Symbol.for("react.lazy"), x = Symbol.iterator;
  function S(R) {
    return R === null || typeof R != "object" ? null : (R = x && R[x] || R["@@iterator"], typeof R == "function" ? R : null);
  }
  var C = { isMounted: function() {
    return !1;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, N = Object.assign, E = {};
  function j(R, L, ae) {
    this.props = R, this.context = L, this.refs = E, this.updater = ae || C;
  }
  j.prototype.isReactComponent = {}, j.prototype.setState = function(R, L) {
    if (typeof R != "object" && typeof R != "function" && R != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, R, L, "setState");
  }, j.prototype.forceUpdate = function(R) {
    this.updater.enqueueForceUpdate(this, R, "forceUpdate");
  };
  function P() {
  }
  P.prototype = j.prototype;
  function F(R, L, ae) {
    this.props = R, this.context = L, this.refs = E, this.updater = ae || C;
  }
  var b = F.prototype = new P();
  b.constructor = F, N(b, j.prototype), b.isPureReactComponent = !0;
  var O = Array.isArray, B = Object.prototype.hasOwnProperty, M = { current: null }, Z = { key: !0, ref: !0, __self: !0, __source: !0 };
  function U(R, L, ae) {
    var me, _e = {}, xe = null, Ee = null;
    if (L != null) for (me in L.ref !== void 0 && (Ee = L.ref), L.key !== void 0 && (xe = "" + L.key), L) B.call(L, me) && !Z.hasOwnProperty(me) && (_e[me] = L[me]);
    var ke = arguments.length - 2;
    if (ke === 1) _e.children = ae;
    else if (1 < ke) {
      for (var Re = Array(ke), it = 0; it < ke; it++) Re[it] = arguments[it + 2];
      _e.children = Re;
    }
    if (R && R.defaultProps) for (me in ke = R.defaultProps, ke) _e[me] === void 0 && (_e[me] = ke[me]);
    return { $$typeof: r, type: R, key: xe, ref: Ee, props: _e, _owner: M.current };
  }
  function G(R, L) {
    return { $$typeof: r, type: R.type, key: L, ref: R.ref, props: R.props, _owner: R._owner };
  }
  function J(R) {
    return typeof R == "object" && R !== null && R.$$typeof === r;
  }
  function te(R) {
    var L = { "=": "=0", ":": "=2" };
    return "$" + R.replace(/[=:]/g, function(ae) {
      return L[ae];
    });
  }
  var ge = /\/+/g;
  function de(R, L) {
    return typeof R == "object" && R !== null && R.key != null ? te("" + R.key) : L.toString(36);
  }
  function pe(R, L, ae, me, _e) {
    var xe = typeof R;
    (xe === "undefined" || xe === "boolean") && (R = null);
    var Ee = !1;
    if (R === null) Ee = !0;
    else switch (xe) {
      case "string":
      case "number":
        Ee = !0;
        break;
      case "object":
        switch (R.$$typeof) {
          case r:
          case a:
            Ee = !0;
        }
    }
    if (Ee) return Ee = R, _e = _e(Ee), R = me === "" ? "." + de(Ee, 0) : me, O(_e) ? (ae = "", R != null && (ae = R.replace(ge, "$&/") + "/"), pe(_e, L, ae, "", function(it) {
      return it;
    })) : _e != null && (J(_e) && (_e = G(_e, ae + (!_e.key || Ee && Ee.key === _e.key ? "" : ("" + _e.key).replace(ge, "$&/") + "/") + R)), L.push(_e)), 1;
    if (Ee = 0, me = me === "" ? "." : me + ":", O(R)) for (var ke = 0; ke < R.length; ke++) {
      xe = R[ke];
      var Re = me + de(xe, ke);
      Ee += pe(xe, L, ae, Re, _e);
    }
    else if (Re = S(R), typeof Re == "function") for (R = Re.call(R), ke = 0; !(xe = R.next()).done; ) xe = xe.value, Re = me + de(xe, ke++), Ee += pe(xe, L, ae, Re, _e);
    else if (xe === "object") throw L = String(R), Error("Objects are not valid as a React child (found: " + (L === "[object Object]" ? "object with keys {" + Object.keys(R).join(", ") + "}" : L) + "). If you meant to render a collection of children, use an array instead.");
    return Ee;
  }
  function ve(R, L, ae) {
    if (R == null) return R;
    var me = [], _e = 0;
    return pe(R, me, "", "", function(xe) {
      return L.call(ae, xe, _e++);
    }), me;
  }
  function je(R) {
    if (R._status === -1) {
      var L = R._result;
      L = L(), L.then(function(ae) {
        (R._status === 0 || R._status === -1) && (R._status = 1, R._result = ae);
      }, function(ae) {
        (R._status === 0 || R._status === -1) && (R._status = 2, R._result = ae);
      }), R._status === -1 && (R._status = 0, R._result = L);
    }
    if (R._status === 1) return R._result.default;
    throw R._result;
  }
  var W = { current: null }, z = { transition: null }, H = { ReactCurrentDispatcher: W, ReactCurrentBatchConfig: z, ReactCurrentOwner: M };
  function Q() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  return ye.Children = { map: ve, forEach: function(R, L, ae) {
    ve(R, function() {
      L.apply(this, arguments);
    }, ae);
  }, count: function(R) {
    var L = 0;
    return ve(R, function() {
      L++;
    }), L;
  }, toArray: function(R) {
    return ve(R, function(L) {
      return L;
    }) || [];
  }, only: function(R) {
    if (!J(R)) throw Error("React.Children.only expected to receive a single React element child.");
    return R;
  } }, ye.Component = j, ye.Fragment = i, ye.Profiler = d, ye.PureComponent = F, ye.StrictMode = c, ye.Suspense = g, ye.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = H, ye.act = Q, ye.cloneElement = function(R, L, ae) {
    if (R == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + R + ".");
    var me = N({}, R.props), _e = R.key, xe = R.ref, Ee = R._owner;
    if (L != null) {
      if (L.ref !== void 0 && (xe = L.ref, Ee = M.current), L.key !== void 0 && (_e = "" + L.key), R.type && R.type.defaultProps) var ke = R.type.defaultProps;
      for (Re in L) B.call(L, Re) && !Z.hasOwnProperty(Re) && (me[Re] = L[Re] === void 0 && ke !== void 0 ? ke[Re] : L[Re]);
    }
    var Re = arguments.length - 2;
    if (Re === 1) me.children = ae;
    else if (1 < Re) {
      ke = Array(Re);
      for (var it = 0; it < Re; it++) ke[it] = arguments[it + 2];
      me.children = ke;
    }
    return { $$typeof: r, type: R.type, key: _e, ref: xe, props: me, _owner: Ee };
  }, ye.createContext = function(R) {
    return R = { $$typeof: p, _currentValue: R, _currentValue2: R, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, R.Provider = { $$typeof: f, _context: R }, R.Consumer = R;
  }, ye.createElement = U, ye.createFactory = function(R) {
    var L = U.bind(null, R);
    return L.type = R, L;
  }, ye.createRef = function() {
    return { current: null };
  }, ye.forwardRef = function(R) {
    return { $$typeof: m, render: R };
  }, ye.isValidElement = J, ye.lazy = function(R) {
    return { $$typeof: y, _payload: { _status: -1, _result: R }, _init: je };
  }, ye.memo = function(R, L) {
    return { $$typeof: w, type: R, compare: L === void 0 ? null : L };
  }, ye.startTransition = function(R) {
    var L = z.transition;
    z.transition = {};
    try {
      R();
    } finally {
      z.transition = L;
    }
  }, ye.unstable_act = Q, ye.useCallback = function(R, L) {
    return W.current.useCallback(R, L);
  }, ye.useContext = function(R) {
    return W.current.useContext(R);
  }, ye.useDebugValue = function() {
  }, ye.useDeferredValue = function(R) {
    return W.current.useDeferredValue(R);
  }, ye.useEffect = function(R, L) {
    return W.current.useEffect(R, L);
  }, ye.useId = function() {
    return W.current.useId();
  }, ye.useImperativeHandle = function(R, L, ae) {
    return W.current.useImperativeHandle(R, L, ae);
  }, ye.useInsertionEffect = function(R, L) {
    return W.current.useInsertionEffect(R, L);
  }, ye.useLayoutEffect = function(R, L) {
    return W.current.useLayoutEffect(R, L);
  }, ye.useMemo = function(R, L) {
    return W.current.useMemo(R, L);
  }, ye.useReducer = function(R, L, ae) {
    return W.current.useReducer(R, L, ae);
  }, ye.useRef = function(R) {
    return W.current.useRef(R);
  }, ye.useState = function(R) {
    return W.current.useState(R);
  }, ye.useSyncExternalStore = function(R, L, ae) {
    return W.current.useSyncExternalStore(R, L, ae);
  }, ye.useTransition = function() {
    return W.current.useTransition();
  }, ye.version = "18.3.1", ye;
}
var Yd;
function Il() {
  return Yd || (Yd = 1, dl.exports = Em()), dl.exports;
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
function Nm() {
  if (Gd) return As;
  Gd = 1;
  var r = Il(), a = Symbol.for("react.element"), i = Symbol.for("react.fragment"), c = Object.prototype.hasOwnProperty, d = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, f = { key: !0, ref: !0, __self: !0, __source: !0 };
  function p(m, g, w) {
    var y, x = {}, S = null, C = null;
    w !== void 0 && (S = "" + w), g.key !== void 0 && (S = "" + g.key), g.ref !== void 0 && (C = g.ref);
    for (y in g) c.call(g, y) && !f.hasOwnProperty(y) && (x[y] = g[y]);
    if (m && m.defaultProps) for (y in g = m.defaultProps, g) x[y] === void 0 && (x[y] = g[y]);
    return { $$typeof: a, type: m, key: S, ref: C, props: x, _owner: d.current };
  }
  return As.Fragment = i, As.jsx = p, As.jsxs = p, As;
}
var Jd;
function Tm() {
  return Jd || (Jd = 1, cl.exports = Nm()), cl.exports;
}
var o = Tm(), v = Il();
const Af = /* @__PURE__ */ Rf(v);
var Go = {}, fl = { exports: {} }, yt = {}, pl = { exports: {} }, hl = {};
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
    function a(z, H) {
      var Q = z.length;
      z.push(H);
      e: for (; 0 < Q; ) {
        var R = Q - 1 >>> 1, L = z[R];
        if (0 < d(L, H)) z[R] = H, z[Q] = L, Q = R;
        else break e;
      }
    }
    function i(z) {
      return z.length === 0 ? null : z[0];
    }
    function c(z) {
      if (z.length === 0) return null;
      var H = z[0], Q = z.pop();
      if (Q !== H) {
        z[0] = Q;
        e: for (var R = 0, L = z.length, ae = L >>> 1; R < ae; ) {
          var me = 2 * (R + 1) - 1, _e = z[me], xe = me + 1, Ee = z[xe];
          if (0 > d(_e, Q)) xe < L && 0 > d(Ee, _e) ? (z[R] = Ee, z[xe] = Q, R = xe) : (z[R] = _e, z[me] = Q, R = me);
          else if (xe < L && 0 > d(Ee, Q)) z[R] = Ee, z[xe] = Q, R = xe;
          else break e;
        }
      }
      return H;
    }
    function d(z, H) {
      var Q = z.sortIndex - H.sortIndex;
      return Q !== 0 ? Q : z.id - H.id;
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
    var g = [], w = [], y = 1, x = null, S = 3, C = !1, N = !1, E = !1, j = typeof setTimeout == "function" ? setTimeout : null, P = typeof clearTimeout == "function" ? clearTimeout : null, F = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function b(z) {
      for (var H = i(w); H !== null; ) {
        if (H.callback === null) c(w);
        else if (H.startTime <= z) c(w), H.sortIndex = H.expirationTime, a(g, H);
        else break;
        H = i(w);
      }
    }
    function O(z) {
      if (E = !1, b(z), !N) if (i(g) !== null) N = !0, je(B);
      else {
        var H = i(w);
        H !== null && W(O, H.startTime - z);
      }
    }
    function B(z, H) {
      N = !1, E && (E = !1, P(U), U = -1), C = !0;
      var Q = S;
      try {
        for (b(H), x = i(g); x !== null && (!(x.expirationTime > H) || z && !te()); ) {
          var R = x.callback;
          if (typeof R == "function") {
            x.callback = null, S = x.priorityLevel;
            var L = R(x.expirationTime <= H);
            H = r.unstable_now(), typeof L == "function" ? x.callback = L : x === i(g) && c(g), b(H);
          } else c(g);
          x = i(g);
        }
        if (x !== null) var ae = !0;
        else {
          var me = i(w);
          me !== null && W(O, me.startTime - H), ae = !1;
        }
        return ae;
      } finally {
        x = null, S = Q, C = !1;
      }
    }
    var M = !1, Z = null, U = -1, G = 5, J = -1;
    function te() {
      return !(r.unstable_now() - J < G);
    }
    function ge() {
      if (Z !== null) {
        var z = r.unstable_now();
        J = z;
        var H = !0;
        try {
          H = Z(!0, z);
        } finally {
          H ? de() : (M = !1, Z = null);
        }
      } else M = !1;
    }
    var de;
    if (typeof F == "function") de = function() {
      F(ge);
    };
    else if (typeof MessageChannel < "u") {
      var pe = new MessageChannel(), ve = pe.port2;
      pe.port1.onmessage = ge, de = function() {
        ve.postMessage(null);
      };
    } else de = function() {
      j(ge, 0);
    };
    function je(z) {
      Z = z, M || (M = !0, de());
    }
    function W(z, H) {
      U = j(function() {
        z(r.unstable_now());
      }, H);
    }
    r.unstable_IdlePriority = 5, r.unstable_ImmediatePriority = 1, r.unstable_LowPriority = 4, r.unstable_NormalPriority = 3, r.unstable_Profiling = null, r.unstable_UserBlockingPriority = 2, r.unstable_cancelCallback = function(z) {
      z.callback = null;
    }, r.unstable_continueExecution = function() {
      N || C || (N = !0, je(B));
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
          var H = 3;
          break;
        default:
          H = S;
      }
      var Q = S;
      S = H;
      try {
        return z();
      } finally {
        S = Q;
      }
    }, r.unstable_pauseExecution = function() {
    }, r.unstable_requestPaint = function() {
    }, r.unstable_runWithPriority = function(z, H) {
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
        return H();
      } finally {
        S = Q;
      }
    }, r.unstable_scheduleCallback = function(z, H, Q) {
      var R = r.unstable_now();
      switch (typeof Q == "object" && Q !== null ? (Q = Q.delay, Q = typeof Q == "number" && 0 < Q ? R + Q : R) : Q = R, z) {
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
      return L = Q + L, z = { id: y++, callback: H, priorityLevel: z, startTime: Q, expirationTime: L, sortIndex: -1 }, Q > R ? (z.sortIndex = Q, a(w, z), i(g) === null && z === i(w) && (E ? (P(U), U = -1) : E = !0, W(O, Q - R))) : (z.sortIndex = L, a(g, z), N || C || (N = !0, je(B))), z;
    }, r.unstable_shouldYield = te, r.unstable_wrapCallback = function(z) {
      var H = S;
      return function() {
        var Q = S;
        S = H;
        try {
          return z.apply(this, arguments);
        } finally {
          S = Q;
        }
      };
    };
  })(hl)), hl;
}
var Zd;
function Am() {
  return Zd || (Zd = 1, pl.exports = Rm()), pl.exports;
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
function bm() {
  if (ef) return yt;
  ef = 1;
  var r = Il(), a = Am();
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
  var m = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), g = Object.prototype.hasOwnProperty, w = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, y = {}, x = {};
  function S(e) {
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
  function E(e, t, n, s, l, u, h) {
    this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = s, this.attributeNamespace = l, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = u, this.removeEmptyString = h;
  }
  var j = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
    j[e] = new E(e, 0, !1, e, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
    var t = e[0];
    j[t] = new E(t, 1, !1, e[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
    j[e] = new E(e, 2, !1, e.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
    j[e] = new E(e, 2, !1, e, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
    j[e] = new E(e, 3, !1, e.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(e) {
    j[e] = new E(e, 3, !0, e, null, !1, !1);
  }), ["capture", "download"].forEach(function(e) {
    j[e] = new E(e, 4, !1, e, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(e) {
    j[e] = new E(e, 6, !1, e, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(e) {
    j[e] = new E(e, 5, !1, e.toLowerCase(), null, !1, !1);
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
    j[t] = new E(t, 1, !1, e, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
    var t = e.replace(P, F);
    j[t] = new E(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
    var t = e.replace(P, F);
    j[t] = new E(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(e) {
    j[e] = new E(e, 1, !1, e.toLowerCase(), null, !1, !1);
  }), j.xlinkHref = new E("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(e) {
    j[e] = new E(e, 1, !1, e.toLowerCase(), null, !0, !0);
  });
  function b(e, t, n, s) {
    var l = j.hasOwnProperty(t) ? j[t] : null;
    (l !== null ? l.type !== 0 : s || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (N(t, n, l, s) && (n = null), s || l === null ? S(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : l.mustUseProperty ? e[l.propertyName] = n === null ? l.type === 3 ? !1 : "" : n : (t = l.attributeName, s = l.attributeNamespace, n === null ? e.removeAttribute(t) : (l = l.type, n = l === 3 || l === 4 && n === !0 ? "" : "" + n, s ? e.setAttributeNS(s, t, n) : e.setAttribute(t, n))));
  }
  var O = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, B = Symbol.for("react.element"), M = Symbol.for("react.portal"), Z = Symbol.for("react.fragment"), U = Symbol.for("react.strict_mode"), G = Symbol.for("react.profiler"), J = Symbol.for("react.provider"), te = Symbol.for("react.context"), ge = Symbol.for("react.forward_ref"), de = Symbol.for("react.suspense"), pe = Symbol.for("react.suspense_list"), ve = Symbol.for("react.memo"), je = Symbol.for("react.lazy"), W = Symbol.for("react.offscreen"), z = Symbol.iterator;
  function H(e) {
    return e === null || typeof e != "object" ? null : (e = z && e[z] || e["@@iterator"], typeof e == "function" ? e : null);
  }
  var Q = Object.assign, R;
  function L(e) {
    if (R === void 0) try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      R = t && t[1] || "";
    }
    return `
` + R + e;
  }
  var ae = !1;
  function me(e, t) {
    if (!e || ae) return "";
    ae = !0;
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
      ae = !1, Error.prepareStackTrace = n;
    }
    return (e = e ? e.displayName || e.name : "") ? L(e) : "";
  }
  function _e(e) {
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
        return e = me(e.type, !1), e;
      case 11:
        return e = me(e.type.render, !1), e;
      case 1:
        return e = me(e.type, !0), e;
      default:
        return "";
    }
  }
  function xe(e) {
    if (e == null) return null;
    if (typeof e == "function") return e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case Z:
        return "Fragment";
      case M:
        return "Portal";
      case G:
        return "Profiler";
      case U:
        return "StrictMode";
      case de:
        return "Suspense";
      case pe:
        return "SuspenseList";
    }
    if (typeof e == "object") switch (e.$$typeof) {
      case te:
        return (e.displayName || "Context") + ".Consumer";
      case J:
        return (e._context.displayName || "Context") + ".Provider";
      case ge:
        var t = e.render;
        return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
      case ve:
        return t = e.displayName || null, t !== null ? t : xe(e.type) || "Memo";
      case je:
        t = e._payload, e = e._init;
        try {
          return xe(e(t));
        } catch {
        }
    }
    return null;
  }
  function Ee(e) {
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
        return xe(t);
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
  function ke(e) {
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
  function Mn(e) {
    e._valueTracker || (e._valueTracker = it(e));
  }
  function Ur(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var n = t.getValue(), s = "";
    return e && (s = Re(e) ? e.checked ? "true" : "false" : e.value), e = s, e !== n ? (t.setValue(e), !0) : !1;
  }
  function In(e) {
    if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  function yi(e, t) {
    var n = t.checked;
    return Q({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n ?? e._wrapperState.initialChecked });
  }
  function tu(e, t) {
    var n = t.defaultValue == null ? "" : t.defaultValue, s = t.checked != null ? t.checked : t.defaultChecked;
    n = ke(t.value != null ? t.value : n), e._wrapperState = { initialChecked: s, initialValue: n, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
  }
  function nu(e, t) {
    t = t.checked, t != null && b(e, "checked", t, !1);
  }
  function gi(e, t) {
    nu(e, t);
    var n = ke(t.value), s = t.type;
    if (n != null) s === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
    else if (s === "submit" || s === "reset") {
      e.removeAttribute("value");
      return;
    }
    t.hasOwnProperty("value") ? _i(e, t.type, n) : t.hasOwnProperty("defaultValue") && _i(e, t.type, ke(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
  }
  function ru(e, t, n) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
      var s = t.type;
      if (!(s !== "submit" && s !== "reset" || t.value !== void 0 && t.value !== null)) return;
      t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t;
    }
    n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n);
  }
  function _i(e, t, n) {
    (t !== "number" || In(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
  }
  var Vr = Array.isArray;
  function ir(e, t, n, s) {
    if (e = e.options, t) {
      t = {};
      for (var l = 0; l < n.length; l++) t["$" + n[l]] = !0;
      for (n = 0; n < e.length; n++) l = t.hasOwnProperty("$" + e[n].value), e[n].selected !== l && (e[n].selected = l), l && s && (e[n].defaultSelected = !0);
    } else {
      for (n = "" + ke(n), t = null, l = 0; l < e.length; l++) {
        if (e[l].value === n) {
          e[l].selected = !0, s && (e[l].defaultSelected = !0);
          return;
        }
        t !== null || e[l].disabled || (t = e[l]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function xi(e, t) {
    if (t.dangerouslySetInnerHTML != null) throw Error(i(91));
    return Q({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
  }
  function su(e, t) {
    var n = t.value;
    if (n == null) {
      if (n = t.children, t = t.defaultValue, n != null) {
        if (t != null) throw Error(i(92));
        if (Vr(n)) {
          if (1 < n.length) throw Error(i(93));
          n = n[0];
        }
        t = n;
      }
      t == null && (t = ""), n = t;
    }
    e._wrapperState = { initialValue: ke(n) };
  }
  function ou(e, t) {
    var n = ke(t.value), s = ke(t.defaultValue);
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
  function wi(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml" ? au(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
  }
  var Fs, lu = (function(e) {
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
  }, Tp = ["Webkit", "ms", "Moz", "O"];
  Object.keys(Qr).forEach(function(e) {
    Tp.forEach(function(t) {
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
  var Rp = Q({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
  function Si(e, t) {
    if (t) {
      if (Rp[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(i(137, e));
      if (t.dangerouslySetInnerHTML != null) {
        if (t.children != null) throw Error(i(60));
        if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(i(61));
      }
      if (t.style != null && typeof t.style != "object") throw Error(i(62));
    }
  }
  function ki(e, t) {
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
  var Ci = null;
  function ji(e) {
    return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
  }
  var Ei = null, ar = null, lr = null;
  function du(e) {
    if (e = ms(e)) {
      if (typeof Ei != "function") throw Error(i(280));
      var t = e.stateNode;
      t && (t = co(t), Ei(e.stateNode, e.type, t));
    }
  }
  function fu(e) {
    ar ? lr ? lr.push(e) : lr = [e] : ar = e;
  }
  function pu() {
    if (ar) {
      var e = ar, t = lr;
      if (lr = ar = null, du(e), t) for (e = 0; e < t.length; e++) du(t[e]);
    }
  }
  function hu(e, t) {
    return e(t);
  }
  function mu() {
  }
  var Ni = !1;
  function vu(e, t, n) {
    if (Ni) return e(t, n);
    Ni = !0;
    try {
      return hu(e, t, n);
    } finally {
      Ni = !1, (ar !== null || lr !== null) && (mu(), pu());
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
    if (n && typeof n != "function") throw Error(i(231, t, typeof n));
    return n;
  }
  var Ti = !1;
  if (m) try {
    var Yr = {};
    Object.defineProperty(Yr, "passive", { get: function() {
      Ti = !0;
    } }), window.addEventListener("test", Yr, Yr), window.removeEventListener("test", Yr, Yr);
  } catch {
    Ti = !1;
  }
  function Ap(e, t, n, s, l, u, h, k, T) {
    var D = Array.prototype.slice.call(arguments, 3);
    try {
      t.apply(n, D);
    } catch (q) {
      this.onError(q);
    }
  }
  var Gr = !1, Ws = null, Bs = !1, Ri = null, bp = { onError: function(e) {
    Gr = !0, Ws = e;
  } };
  function Pp(e, t, n, s, l, u, h, k, T) {
    Gr = !1, Ws = null, Ap.apply(bp, arguments);
  }
  function $p(e, t, n, s, l, u, h, k, T) {
    if (Pp.apply(this, arguments), Gr) {
      if (Gr) {
        var D = Ws;
        Gr = !1, Ws = null;
      } else throw Error(i(198));
      Bs || (Bs = !0, Ri = D);
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
    if (Ln(e) !== e) throw Error(i(188));
  }
  function Mp(e) {
    var t = e.alternate;
    if (!t) {
      if (t = Ln(e), t === null) throw Error(i(188));
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
          if (!h) throw Error(i(189));
        }
      }
      if (n.alternate !== s) throw Error(i(190));
    }
    if (n.tag !== 3) throw Error(i(188));
    return n.stateNode.current === n ? e : t;
  }
  function _u(e) {
    return e = Mp(e), e !== null ? xu(e) : null;
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
  var wu = a.unstable_scheduleCallback, Su = a.unstable_cancelCallback, Ip = a.unstable_shouldYield, Lp = a.unstable_requestPaint, ze = a.unstable_now, Dp = a.unstable_getCurrentPriorityLevel, Ai = a.unstable_ImmediatePriority, ku = a.unstable_UserBlockingPriority, Us = a.unstable_NormalPriority, zp = a.unstable_LowPriority, Cu = a.unstable_IdlePriority, Vs = null, qt = null;
  function Op(e) {
    if (qt && typeof qt.onCommitFiberRoot == "function") try {
      qt.onCommitFiberRoot(Vs, e, void 0, (e.current.flags & 128) === 128);
    } catch {
    }
  }
  var It = Math.clz32 ? Math.clz32 : Wp, Hp = Math.log, Fp = Math.LN2;
  function Wp(e) {
    return e >>>= 0, e === 0 ? 32 : 31 - (Hp(e) / Fp | 0) | 0;
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
    var s = 0, l = e.suspendedLanes, u = e.pingedLanes, h = n & 268435455;
    if (h !== 0) {
      var k = h & ~l;
      k !== 0 ? s = Jr(k) : (u &= h, u !== 0 && (s = Jr(u)));
    } else h = n & ~l, h !== 0 ? s = Jr(h) : u !== 0 && (s = Jr(u));
    if (s === 0) return 0;
    if (t !== 0 && t !== s && (t & l) === 0 && (l = s & -s, u = t & -t, l >= u || l === 16 && (u & 4194240) !== 0)) return t;
    if ((s & 4) !== 0 && (s |= n & 16), t = e.entangledLanes, t !== 0) for (e = e.entanglements, t &= s; 0 < t; ) n = 31 - It(t), l = 1 << n, s |= e[n], t &= ~l;
    return s;
  }
  function Bp(e, t) {
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
  function Up(e, t) {
    for (var n = e.suspendedLanes, s = e.pingedLanes, l = e.expirationTimes, u = e.pendingLanes; 0 < u; ) {
      var h = 31 - It(u), k = 1 << h, T = l[h];
      T === -1 ? ((k & n) === 0 || (k & s) !== 0) && (l[h] = Bp(k, t)) : T <= t && (e.expiredLanes |= k), u &= ~k;
    }
  }
  function bi(e) {
    return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
  }
  function ju() {
    var e = qs;
    return qs <<= 1, (qs & 4194240) === 0 && (qs = 64), e;
  }
  function Pi(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t;
  }
  function Xr(e, t, n) {
    e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - It(t), e[t] = n;
  }
  function Vp(e, t) {
    var n = e.pendingLanes & ~t;
    e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
    var s = e.eventTimes;
    for (e = e.expirationTimes; 0 < n; ) {
      var l = 31 - It(n), u = 1 << l;
      t[l] = 0, s[l] = -1, e[l] = -1, n &= ~u;
    }
  }
  function $i(e, t) {
    var n = e.entangledLanes |= t;
    for (e = e.entanglements; n; ) {
      var s = 31 - It(n), l = 1 << s;
      l & t | e[s] & t && (e[s] |= t), n &= ~l;
    }
  }
  var Te = 0;
  function Eu(e) {
    return e &= -e, 1 < e ? 4 < e ? (e & 268435455) !== 0 ? 16 : 536870912 : 4 : 1;
  }
  var Nu, Mi, Tu, Ru, Au, Ii = !1, Ys = [], dn = null, fn = null, pn = null, Zr = /* @__PURE__ */ new Map(), es = /* @__PURE__ */ new Map(), hn = [], qp = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
  function bu(e, t) {
    switch (e) {
      case "focusin":
      case "focusout":
        dn = null;
        break;
      case "dragenter":
      case "dragleave":
        fn = null;
        break;
      case "mouseover":
      case "mouseout":
        pn = null;
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
    return e === null || e.nativeEvent !== u ? (e = { blockedOn: t, domEventName: n, eventSystemFlags: s, nativeEvent: u, targetContainers: [l] }, t !== null && (t = ms(t), t !== null && Mi(t)), e) : (e.eventSystemFlags |= s, t = e.targetContainers, l !== null && t.indexOf(l) === -1 && t.push(l), e);
  }
  function Qp(e, t, n, s, l) {
    switch (t) {
      case "focusin":
        return dn = ts(dn, e, t, n, s, l), !0;
      case "dragenter":
        return fn = ts(fn, e, t, n, s, l), !0;
      case "mouseover":
        return pn = ts(pn, e, t, n, s, l), !0;
      case "pointerover":
        var u = l.pointerId;
        return Zr.set(u, ts(Zr.get(u) || null, e, t, n, s, l)), !0;
      case "gotpointercapture":
        return u = l.pointerId, es.set(u, ts(es.get(u) || null, e, t, n, s, l)), !0;
    }
    return !1;
  }
  function Pu(e) {
    var t = Dn(e.target);
    if (t !== null) {
      var n = Ln(t);
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
  function Gs(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var n = Di(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
      if (n === null) {
        n = e.nativeEvent;
        var s = new n.constructor(n.type, n);
        Ci = s, n.target.dispatchEvent(s), Ci = null;
      } else return t = ms(n), t !== null && Mi(t), e.blockedOn = n, !1;
      t.shift();
    }
    return !0;
  }
  function $u(e, t, n) {
    Gs(e) && n.delete(t);
  }
  function Kp() {
    Ii = !1, dn !== null && Gs(dn) && (dn = null), fn !== null && Gs(fn) && (fn = null), pn !== null && Gs(pn) && (pn = null), Zr.forEach($u), es.forEach($u);
  }
  function ns(e, t) {
    e.blockedOn === t && (e.blockedOn = null, Ii || (Ii = !0, a.unstable_scheduleCallback(a.unstable_NormalPriority, Kp)));
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
    for (dn !== null && ns(dn, e), fn !== null && ns(fn, e), pn !== null && ns(pn, e), Zr.forEach(t), es.forEach(t), n = 0; n < hn.length; n++) s = hn[n], s.blockedOn === e && (s.blockedOn = null);
    for (; 0 < hn.length && (n = hn[0], n.blockedOn === null); ) Pu(n), n.blockedOn === null && hn.shift();
  }
  var ur = O.ReactCurrentBatchConfig, Js = !0;
  function Yp(e, t, n, s) {
    var l = Te, u = ur.transition;
    ur.transition = null;
    try {
      Te = 1, Li(e, t, n, s);
    } finally {
      Te = l, ur.transition = u;
    }
  }
  function Gp(e, t, n, s) {
    var l = Te, u = ur.transition;
    ur.transition = null;
    try {
      Te = 4, Li(e, t, n, s);
    } finally {
      Te = l, ur.transition = u;
    }
  }
  function Li(e, t, n, s) {
    if (Js) {
      var l = Di(e, t, n, s);
      if (l === null) ea(e, t, s, Xs, n), bu(e, s);
      else if (Qp(l, e, t, n, s)) s.stopPropagation();
      else if (bu(e, s), t & 4 && -1 < qp.indexOf(e)) {
        for (; l !== null; ) {
          var u = ms(l);
          if (u !== null && Nu(u), u = Di(e, t, n, s), u === null && ea(e, t, s, Xs, n), u === l) break;
          l = u;
        }
        l !== null && s.stopPropagation();
      } else ea(e, t, s, null, n);
    }
  }
  var Xs = null;
  function Di(e, t, n, s) {
    if (Xs = null, e = ji(s), e = Dn(e), e !== null) if (t = Ln(e), t === null) e = null;
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
        switch (Dp()) {
          case Ai:
            return 1;
          case ku:
            return 4;
          case Us:
          case zp:
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
  var mn = null, zi = null, Zs = null;
  function Iu() {
    if (Zs) return Zs;
    var e, t = zi, n = t.length, s, l = "value" in mn ? mn.value : mn.textContent, u = l.length;
    for (e = 0; e < n && t[e] === l[e]; e++) ;
    var h = n - e;
    for (s = 1; s <= h && t[n - s] === l[u - s]; s++) ;
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
    function t(n, s, l, u, h) {
      this._reactName = n, this._targetInst = l, this.type = s, this.nativeEvent = u, this.target = h, this.currentTarget = null;
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
  }, defaultPrevented: 0, isTrusted: 0 }, Oi = xt(cr), ss = Q({}, cr, { view: 0, detail: 0 }), Jp = xt(ss), Hi, Fi, os, no = Q({}, ss, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: Bi, button: 0, buttons: 0, relatedTarget: function(e) {
    return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
  }, movementX: function(e) {
    return "movementX" in e ? e.movementX : (e !== os && (os && e.type === "mousemove" ? (Hi = e.screenX - os.screenX, Fi = e.screenY - os.screenY) : Fi = Hi = 0, os = e), Hi);
  }, movementY: function(e) {
    return "movementY" in e ? e.movementY : Fi;
  } }), Du = xt(no), Xp = Q({}, no, { dataTransfer: 0 }), Zp = xt(Xp), eh = Q({}, ss, { relatedTarget: 0 }), Wi = xt(eh), th = Q({}, cr, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), nh = xt(th), rh = Q({}, cr, { clipboardData: function(e) {
    return "clipboardData" in e ? e.clipboardData : window.clipboardData;
  } }), sh = xt(rh), oh = Q({}, cr, { data: 0 }), zu = xt(oh), ih = {
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
  }, ah = {
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
  }, lh = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function uh(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = lh[e]) ? !!t[e] : !1;
  }
  function Bi() {
    return uh;
  }
  var ch = Q({}, ss, { key: function(e) {
    if (e.key) {
      var t = ih[e.key] || e.key;
      if (t !== "Unidentified") return t;
    }
    return e.type === "keypress" ? (e = eo(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? ah[e.keyCode] || "Unidentified" : "";
  }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: Bi, charCode: function(e) {
    return e.type === "keypress" ? eo(e) : 0;
  }, keyCode: function(e) {
    return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
  }, which: function(e) {
    return e.type === "keypress" ? eo(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
  } }), dh = xt(ch), fh = Q({}, no, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), Ou = xt(fh), ph = Q({}, ss, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: Bi }), hh = xt(ph), mh = Q({}, cr, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), vh = xt(mh), yh = Q({}, no, {
    deltaX: function(e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function(e) {
      return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), gh = xt(yh), _h = [9, 13, 27, 32], Ui = m && "CompositionEvent" in window, is = null;
  m && "documentMode" in document && (is = document.documentMode);
  var xh = m && "TextEvent" in window && !is, Hu = m && (!Ui || is && 8 < is && 11 >= is), Fu = " ", Wu = !1;
  function Bu(e, t) {
    switch (e) {
      case "keyup":
        return _h.indexOf(t.keyCode) !== -1;
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
  function wh(e, t) {
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
  function Sh(e, t) {
    if (dr) return e === "compositionend" || !Ui && Bu(e, t) ? (e = Iu(), Zs = zi = mn = null, dr = !1, e) : null;
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
  var kh = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
  function Vu(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!kh[e.type] : t === "textarea";
  }
  function qu(e, t, n, s) {
    fu(s), t = ao(t, "onChange"), 0 < t.length && (n = new Oi("onChange", "change", null, n, s), e.push({ event: n, listeners: t }));
  }
  var as = null, ls = null;
  function Ch(e) {
    cc(e, 0);
  }
  function ro(e) {
    var t = vr(e);
    if (Ur(t)) return e;
  }
  function jh(e, t) {
    if (e === "change") return t;
  }
  var Qu = !1;
  if (m) {
    var Vi;
    if (m) {
      var qi = "oninput" in document;
      if (!qi) {
        var Ku = document.createElement("div");
        Ku.setAttribute("oninput", "return;"), qi = typeof Ku.oninput == "function";
      }
      Vi = qi;
    } else Vi = !1;
    Qu = Vi && (!document.documentMode || 9 < document.documentMode);
  }
  function Yu() {
    as && (as.detachEvent("onpropertychange", Gu), ls = as = null);
  }
  function Gu(e) {
    if (e.propertyName === "value" && ro(ls)) {
      var t = [];
      qu(t, ls, e, ji(e)), vu(Ch, t);
    }
  }
  function Eh(e, t, n) {
    e === "focusin" ? (Yu(), as = t, ls = n, as.attachEvent("onpropertychange", Gu)) : e === "focusout" && Yu();
  }
  function Nh(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown") return ro(ls);
  }
  function Th(e, t) {
    if (e === "click") return ro(t);
  }
  function Rh(e, t) {
    if (e === "input" || e === "change") return ro(t);
  }
  function Ah(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
  }
  var Lt = typeof Object.is == "function" ? Object.is : Ah;
  function us(e, t) {
    if (Lt(e, t)) return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
    var n = Object.keys(e), s = Object.keys(t);
    if (n.length !== s.length) return !1;
    for (s = 0; s < n.length; s++) {
      var l = n[s];
      if (!g.call(t, l) || !Lt(e[l], t[l])) return !1;
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
  function Qi(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
  }
  function bh(e) {
    var t = ec(), n = e.focusedElem, s = e.selectionRange;
    if (t !== n && n && n.ownerDocument && Zu(n.ownerDocument.documentElement, n)) {
      if (s !== null && Qi(n)) {
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
  var Ph = m && "documentMode" in document && 11 >= document.documentMode, fr = null, Ki = null, cs = null, Yi = !1;
  function tc(e, t, n) {
    var s = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    Yi || fr == null || fr !== In(s) || (s = fr, "selectionStart" in s && Qi(s) ? s = { start: s.selectionStart, end: s.selectionEnd } : (s = (s.ownerDocument && s.ownerDocument.defaultView || window).getSelection(), s = { anchorNode: s.anchorNode, anchorOffset: s.anchorOffset, focusNode: s.focusNode, focusOffset: s.focusOffset }), cs && us(cs, s) || (cs = s, s = ao(Ki, "onSelect"), 0 < s.length && (t = new Oi("onSelect", "select", null, t, n), e.push({ event: t, listeners: s }), t.target = fr)));
  }
  function so(e, t) {
    var n = {};
    return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
  }
  var pr = { animationend: so("Animation", "AnimationEnd"), animationiteration: so("Animation", "AnimationIteration"), animationstart: so("Animation", "AnimationStart"), transitionend: so("Transition", "TransitionEnd") }, Gi = {}, nc = {};
  m && (nc = document.createElement("div").style, "AnimationEvent" in window || (delete pr.animationend.animation, delete pr.animationiteration.animation, delete pr.animationstart.animation), "TransitionEvent" in window || delete pr.transitionend.transition);
  function oo(e) {
    if (Gi[e]) return Gi[e];
    if (!pr[e]) return e;
    var t = pr[e], n;
    for (n in t) if (t.hasOwnProperty(n) && n in nc) return Gi[e] = t[n];
    return e;
  }
  var rc = oo("animationend"), sc = oo("animationiteration"), oc = oo("animationstart"), ic = oo("transitionend"), ac = /* @__PURE__ */ new Map(), lc = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  function vn(e, t) {
    ac.set(e, t), f(t, [e]);
  }
  for (var Ji = 0; Ji < lc.length; Ji++) {
    var Xi = lc[Ji], $h = Xi.toLowerCase(), Mh = Xi[0].toUpperCase() + Xi.slice(1);
    vn($h, "on" + Mh);
  }
  vn(rc, "onAnimationEnd"), vn(sc, "onAnimationIteration"), vn(oc, "onAnimationStart"), vn("dblclick", "onDoubleClick"), vn("focusin", "onFocus"), vn("focusout", "onBlur"), vn(ic, "onTransitionEnd"), p("onMouseEnter", ["mouseout", "mouseover"]), p("onMouseLeave", ["mouseout", "mouseover"]), p("onPointerEnter", ["pointerout", "pointerover"]), p("onPointerLeave", ["pointerout", "pointerover"]), f("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), f("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), f("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), f("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), f("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), f("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var ds = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), Ih = new Set("cancel close invalid load scroll toggle".split(" ").concat(ds));
  function uc(e, t, n) {
    var s = e.type || "unknown-event";
    e.currentTarget = n, $p(s, t, void 0, e), e.currentTarget = null;
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
    if (Bs) throw e = Ri, Bs = !1, Ri = null, e;
  }
  function be(e, t) {
    var n = t[ia];
    n === void 0 && (n = t[ia] = /* @__PURE__ */ new Set());
    var s = e + "__bubble";
    n.has(s) || (dc(t, e, 2, !1), n.add(s));
  }
  function Zi(e, t, n) {
    var s = 0;
    t && (s |= 4), dc(n, e, s, t);
  }
  var io = "_reactListening" + Math.random().toString(36).slice(2);
  function fs(e) {
    if (!e[io]) {
      e[io] = !0, c.forEach(function(n) {
        n !== "selectionchange" && (Ih.has(n) || Zi(n, !1, e), Zi(n, !0, e));
      });
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[io] || (t[io] = !0, Zi("selectionchange", !1, t));
    }
  }
  function dc(e, t, n, s) {
    switch (Mu(t)) {
      case 1:
        var l = Yp;
        break;
      case 4:
        l = Gp;
        break;
      default:
        l = Li;
    }
    n = l.bind(null, t, n, e), l = void 0, !Ti || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (l = !0), s ? l !== void 0 ? e.addEventListener(t, n, { capture: !0, passive: l }) : e.addEventListener(t, n, !0) : l !== void 0 ? e.addEventListener(t, n, { passive: l }) : e.addEventListener(t, n, !1);
  }
  function ea(e, t, n, s, l) {
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
          if (h = Dn(k), h === null) return;
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
      var D = u, q = ji(n), K = [];
      e: {
        var V = ac.get(e);
        if (V !== void 0) {
          var ee = Oi, re = e;
          switch (e) {
            case "keypress":
              if (eo(n) === 0) break e;
            case "keydown":
            case "keyup":
              ee = dh;
              break;
            case "focusin":
              re = "focus", ee = Wi;
              break;
            case "focusout":
              re = "blur", ee = Wi;
              break;
            case "beforeblur":
            case "afterblur":
              ee = Wi;
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
              ee = Zp;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              ee = hh;
              break;
            case rc:
            case sc:
            case oc:
              ee = nh;
              break;
            case ic:
              ee = vh;
              break;
            case "scroll":
              ee = Jp;
              break;
            case "wheel":
              ee = gh;
              break;
            case "copy":
            case "cut":
            case "paste":
              ee = sh;
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
          var se = (t & 4) !== 0, Oe = !se && e === "scroll", $ = se ? V !== null ? V + "Capture" : null : V;
          se = [];
          for (var A = D, I; A !== null; ) {
            I = A;
            var Y = I.stateNode;
            if (I.tag === 5 && Y !== null && (I = Y, $ !== null && (Y = Kr(A, $), Y != null && se.push(ps(A, Y, I)))), Oe) break;
            A = A.return;
          }
          0 < se.length && (V = new ee(V, re, null, n, q), K.push({ event: V, listeners: se }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (V = e === "mouseover" || e === "pointerover", ee = e === "mouseout" || e === "pointerout", V && n !== Ci && (re = n.relatedTarget || n.fromElement) && (Dn(re) || re[Zt])) break e;
          if ((ee || V) && (V = q.window === q ? q : (V = q.ownerDocument) ? V.defaultView || V.parentWindow : window, ee ? (re = n.relatedTarget || n.toElement, ee = D, re = re ? Dn(re) : null, re !== null && (Oe = Ln(re), re !== Oe || re.tag !== 5 && re.tag !== 6) && (re = null)) : (ee = null, re = D), ee !== re)) {
            if (se = Du, Y = "onMouseLeave", $ = "onMouseEnter", A = "mouse", (e === "pointerout" || e === "pointerover") && (se = Ou, Y = "onPointerLeave", $ = "onPointerEnter", A = "pointer"), Oe = ee == null ? V : vr(ee), I = re == null ? V : vr(re), V = new se(Y, A + "leave", ee, n, q), V.target = Oe, V.relatedTarget = I, Y = null, Dn(q) === D && (se = new se($, A + "enter", re, n, q), se.target = I, se.relatedTarget = Oe, Y = se), Oe = Y, ee && re) t: {
              for (se = ee, $ = re, A = 0, I = se; I; I = hr(I)) A++;
              for (I = 0, Y = $; Y; Y = hr(Y)) I++;
              for (; 0 < A - I; ) se = hr(se), A--;
              for (; 0 < I - A; ) $ = hr($), I--;
              for (; A--; ) {
                if (se === $ || $ !== null && se === $.alternate) break t;
                se = hr(se), $ = hr($);
              }
              se = null;
            }
            else se = null;
            ee !== null && fc(K, V, ee, se, !1), re !== null && Oe !== null && fc(K, Oe, re, se, !0);
          }
        }
        e: {
          if (V = D ? vr(D) : window, ee = V.nodeName && V.nodeName.toLowerCase(), ee === "select" || ee === "input" && V.type === "file") var oe = jh;
          else if (Vu(V)) if (Qu) oe = Rh;
          else {
            oe = Nh;
            var le = Eh;
          }
          else (ee = V.nodeName) && ee.toLowerCase() === "input" && (V.type === "checkbox" || V.type === "radio") && (oe = Th);
          if (oe && (oe = oe(e, D))) {
            qu(K, oe, n, q);
            break e;
          }
          le && le(e, V, D), e === "focusout" && (le = V._wrapperState) && le.controlled && V.type === "number" && _i(V, "number", V.value);
        }
        switch (le = D ? vr(D) : window, e) {
          case "focusin":
            (Vu(le) || le.contentEditable === "true") && (fr = le, Ki = D, cs = null);
            break;
          case "focusout":
            cs = Ki = fr = null;
            break;
          case "mousedown":
            Yi = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            Yi = !1, tc(K, n, q);
            break;
          case "selectionchange":
            if (Ph) break;
          case "keydown":
          case "keyup":
            tc(K, n, q);
        }
        var ue;
        if (Ui) e: {
          switch (e) {
            case "compositionstart":
              var fe = "onCompositionStart";
              break e;
            case "compositionend":
              fe = "onCompositionEnd";
              break e;
            case "compositionupdate":
              fe = "onCompositionUpdate";
              break e;
          }
          fe = void 0;
        }
        else dr ? Bu(e, n) && (fe = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (fe = "onCompositionStart");
        fe && (Hu && n.locale !== "ko" && (dr || fe !== "onCompositionStart" ? fe === "onCompositionEnd" && dr && (ue = Iu()) : (mn = q, zi = "value" in mn ? mn.value : mn.textContent, dr = !0)), le = ao(D, fe), 0 < le.length && (fe = new zu(fe, e, null, n, q), K.push({ event: fe, listeners: le }), ue ? fe.data = ue : (ue = Uu(n), ue !== null && (fe.data = ue)))), (ue = xh ? wh(e, n) : Sh(e, n)) && (D = ao(D, "onBeforeInput"), 0 < D.length && (q = new zu("onBeforeInput", "beforeinput", null, n, q), K.push({ event: q, listeners: D }), q.data = ue));
      }
      cc(K, t);
    });
  }
  function ps(e, t, n) {
    return { instance: e, listener: t, currentTarget: n };
  }
  function ao(e, t) {
    for (var n = t + "Capture", s = []; e !== null; ) {
      var l = e, u = l.stateNode;
      l.tag === 5 && u !== null && (l = u, u = Kr(e, n), u != null && s.unshift(ps(e, u, l)), u = Kr(e, t), u != null && s.push(ps(e, u, l))), e = e.return;
    }
    return s;
  }
  function hr(e) {
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
      k.tag === 5 && D !== null && (k = D, l ? (T = Kr(n, u), T != null && h.unshift(ps(n, T, k))) : l || (T = Kr(n, u), T != null && h.push(ps(n, T, k)))), n = n.return;
    }
    h.length !== 0 && e.push({ event: t, listeners: h });
  }
  var Lh = /\r\n?/g, Dh = /\u0000|\uFFFD/g;
  function pc(e) {
    return (typeof e == "string" ? e : "" + e).replace(Lh, `
`).replace(Dh, "");
  }
  function lo(e, t, n) {
    if (t = pc(t), pc(e) !== t && n) throw Error(i(425));
  }
  function uo() {
  }
  var ta = null, na = null;
  function ra(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
  }
  var sa = typeof setTimeout == "function" ? setTimeout : void 0, zh = typeof clearTimeout == "function" ? clearTimeout : void 0, hc = typeof Promise == "function" ? Promise : void 0, Oh = typeof queueMicrotask == "function" ? queueMicrotask : typeof hc < "u" ? function(e) {
    return hc.resolve(null).then(e).catch(Hh);
  } : sa;
  function Hh(e) {
    setTimeout(function() {
      throw e;
    });
  }
  function oa(e, t) {
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
  function yn(e) {
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
  var mr = Math.random().toString(36).slice(2), Qt = "__reactFiber$" + mr, hs = "__reactProps$" + mr, Zt = "__reactContainer$" + mr, ia = "__reactEvents$" + mr, Fh = "__reactListeners$" + mr, Wh = "__reactHandles$" + mr;
  function Dn(e) {
    var t = e[Qt];
    if (t) return t;
    for (var n = e.parentNode; n; ) {
      if (t = n[Zt] || n[Qt]) {
        if (n = t.alternate, t.child !== null || n !== null && n.child !== null) for (e = mc(e); e !== null; ) {
          if (n = e[Qt]) return n;
          e = mc(e);
        }
        return t;
      }
      e = n, n = e.parentNode;
    }
    return null;
  }
  function ms(e) {
    return e = e[Qt] || e[Zt], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
  }
  function vr(e) {
    if (e.tag === 5 || e.tag === 6) return e.stateNode;
    throw Error(i(33));
  }
  function co(e) {
    return e[hs] || null;
  }
  var aa = [], yr = -1;
  function gn(e) {
    return { current: e };
  }
  function Pe(e) {
    0 > yr || (e.current = aa[yr], aa[yr] = null, yr--);
  }
  function Ae(e, t) {
    yr++, aa[yr] = e.current, e.current = t;
  }
  var _n = {}, et = gn(_n), ft = gn(!1), zn = _n;
  function gr(e, t) {
    var n = e.type.contextTypes;
    if (!n) return _n;
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
    if (et.current !== _n) throw Error(i(168));
    Ae(et, t), Ae(ft, n);
  }
  function yc(e, t, n) {
    var s = e.stateNode;
    if (t = t.childContextTypes, typeof s.getChildContext != "function") return n;
    s = s.getChildContext();
    for (var l in s) if (!(l in t)) throw Error(i(108, Ee(e) || "Unknown", l));
    return Q({}, n, s);
  }
  function po(e) {
    return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || _n, zn = et.current, Ae(et, e), Ae(ft, ft.current), !0;
  }
  function gc(e, t, n) {
    var s = e.stateNode;
    if (!s) throw Error(i(169));
    n ? (e = yc(e, t, zn), s.__reactInternalMemoizedMergedChildContext = e, Pe(ft), Pe(et), Ae(et, e)) : Pe(ft), Ae(ft, n);
  }
  var en = null, ho = !1, la = !1;
  function _c(e) {
    en === null ? en = [e] : en.push(e);
  }
  function Bh(e) {
    ho = !0, _c(e);
  }
  function xn() {
    if (!la && en !== null) {
      la = !0;
      var e = 0, t = Te;
      try {
        var n = en;
        for (Te = 1; e < n.length; e++) {
          var s = n[e];
          do
            s = s(!0);
          while (s !== null);
        }
        en = null, ho = !1;
      } catch (l) {
        throw en !== null && (en = en.slice(e + 1)), wu(Ai, xn), l;
      } finally {
        Te = t, la = !1;
      }
    }
    return null;
  }
  var _r = [], xr = 0, mo = null, vo = 0, Et = [], Nt = 0, On = null, tn = 1, nn = "";
  function Hn(e, t) {
    _r[xr++] = vo, _r[xr++] = mo, mo = e, vo = t;
  }
  function xc(e, t, n) {
    Et[Nt++] = tn, Et[Nt++] = nn, Et[Nt++] = On, On = e;
    var s = tn;
    e = nn;
    var l = 32 - It(s) - 1;
    s &= ~(1 << l), n += 1;
    var u = 32 - It(t) + l;
    if (30 < u) {
      var h = l - l % 5;
      u = (s & (1 << h) - 1).toString(32), s >>= h, l -= h, tn = 1 << 32 - It(t) + l | n << l | s, nn = u + e;
    } else tn = 1 << u | n << l | s, nn = e;
  }
  function ua(e) {
    e.return !== null && (Hn(e, 1), xc(e, 1, 0));
  }
  function ca(e) {
    for (; e === mo; ) mo = _r[--xr], _r[xr] = null, vo = _r[--xr], _r[xr] = null;
    for (; e === On; ) On = Et[--Nt], Et[Nt] = null, nn = Et[--Nt], Et[Nt] = null, tn = Et[--Nt], Et[Nt] = null;
  }
  var wt = null, St = null, $e = !1, Dt = null;
  function wc(e, t) {
    var n = bt(5, null, null, 0);
    n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n);
  }
  function Sc(e, t) {
    switch (e.tag) {
      case 5:
        var n = e.type;
        return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, wt = e, St = yn(t.firstChild), !0) : !1;
      case 6:
        return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, wt = e, St = null, !0) : !1;
      case 13:
        return t = t.nodeType !== 8 ? null : t, t !== null ? (n = On !== null ? { id: tn, overflow: nn } : null, e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }, n = bt(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, wt = e, St = null, !0) : !1;
      default:
        return !1;
    }
  }
  function da(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
  }
  function fa(e) {
    if ($e) {
      var t = St;
      if (t) {
        var n = t;
        if (!Sc(e, t)) {
          if (da(e)) throw Error(i(418));
          t = yn(n.nextSibling);
          var s = wt;
          t && Sc(e, t) ? wc(s, n) : (e.flags = e.flags & -4097 | 2, $e = !1, wt = e);
        }
      } else {
        if (da(e)) throw Error(i(418));
        e.flags = e.flags & -4097 | 2, $e = !1, wt = e;
      }
    }
  }
  function kc(e) {
    for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
    wt = e;
  }
  function yo(e) {
    if (e !== wt) return !1;
    if (!$e) return kc(e), $e = !0, !1;
    var t;
    if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !ra(e.type, e.memoizedProps)), t && (t = St)) {
      if (da(e)) throw Cc(), Error(i(418));
      for (; t; ) wc(e, t), t = yn(t.nextSibling);
    }
    if (kc(e), e.tag === 13) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(i(317));
      e: {
        for (e = e.nextSibling, t = 0; e; ) {
          if (e.nodeType === 8) {
            var n = e.data;
            if (n === "/$") {
              if (t === 0) {
                St = yn(e.nextSibling);
                break e;
              }
              t--;
            } else n !== "$" && n !== "$!" && n !== "$?" || t++;
          }
          e = e.nextSibling;
        }
        St = null;
      }
    } else St = wt ? yn(e.stateNode.nextSibling) : null;
    return !0;
  }
  function Cc() {
    for (var e = St; e; ) e = yn(e.nextSibling);
  }
  function wr() {
    St = wt = null, $e = !1;
  }
  function pa(e) {
    Dt === null ? Dt = [e] : Dt.push(e);
  }
  var Uh = O.ReactCurrentBatchConfig;
  function vs(e, t, n) {
    if (e = n.ref, e !== null && typeof e != "function" && typeof e != "object") {
      if (n._owner) {
        if (n = n._owner, n) {
          if (n.tag !== 1) throw Error(i(309));
          var s = n.stateNode;
        }
        if (!s) throw Error(i(147, e));
        var l = s, u = "" + e;
        return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === u ? t.ref : (t = function(h) {
          var k = l.refs;
          h === null ? delete k[u] : k[u] = h;
        }, t._stringRef = u, t);
      }
      if (typeof e != "string") throw Error(i(284));
      if (!n._owner) throw Error(i(290, e));
    }
    return e;
  }
  function go(e, t) {
    throw e = Object.prototype.toString.call(t), Error(i(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e));
  }
  function jc(e) {
    var t = e._init;
    return t(e._payload);
  }
  function Ec(e) {
    function t($, A) {
      if (e) {
        var I = $.deletions;
        I === null ? ($.deletions = [A], $.flags |= 16) : I.push(A);
      }
    }
    function n($, A) {
      if (!e) return null;
      for (; A !== null; ) t($, A), A = A.sibling;
      return null;
    }
    function s($, A) {
      for ($ = /* @__PURE__ */ new Map(); A !== null; ) A.key !== null ? $.set(A.key, A) : $.set(A.index, A), A = A.sibling;
      return $;
    }
    function l($, A) {
      return $ = Tn($, A), $.index = 0, $.sibling = null, $;
    }
    function u($, A, I) {
      return $.index = I, e ? (I = $.alternate, I !== null ? (I = I.index, I < A ? ($.flags |= 2, A) : I) : ($.flags |= 2, A)) : ($.flags |= 1048576, A);
    }
    function h($) {
      return e && $.alternate === null && ($.flags |= 2), $;
    }
    function k($, A, I, Y) {
      return A === null || A.tag !== 6 ? (A = sl(I, $.mode, Y), A.return = $, A) : (A = l(A, I), A.return = $, A);
    }
    function T($, A, I, Y) {
      var oe = I.type;
      return oe === Z ? q($, A, I.props.children, Y, I.key) : A !== null && (A.elementType === oe || typeof oe == "object" && oe !== null && oe.$$typeof === je && jc(oe) === A.type) ? (Y = l(A, I.props), Y.ref = vs($, A, I), Y.return = $, Y) : (Y = Wo(I.type, I.key, I.props, null, $.mode, Y), Y.ref = vs($, A, I), Y.return = $, Y);
    }
    function D($, A, I, Y) {
      return A === null || A.tag !== 4 || A.stateNode.containerInfo !== I.containerInfo || A.stateNode.implementation !== I.implementation ? (A = ol(I, $.mode, Y), A.return = $, A) : (A = l(A, I.children || []), A.return = $, A);
    }
    function q($, A, I, Y, oe) {
      return A === null || A.tag !== 7 ? (A = Kn(I, $.mode, Y, oe), A.return = $, A) : (A = l(A, I), A.return = $, A);
    }
    function K($, A, I) {
      if (typeof A == "string" && A !== "" || typeof A == "number") return A = sl("" + A, $.mode, I), A.return = $, A;
      if (typeof A == "object" && A !== null) {
        switch (A.$$typeof) {
          case B:
            return I = Wo(A.type, A.key, A.props, null, $.mode, I), I.ref = vs($, null, A), I.return = $, I;
          case M:
            return A = ol(A, $.mode, I), A.return = $, A;
          case je:
            var Y = A._init;
            return K($, Y(A._payload), I);
        }
        if (Vr(A) || H(A)) return A = Kn(A, $.mode, I, null), A.return = $, A;
        go($, A);
      }
      return null;
    }
    function V($, A, I, Y) {
      var oe = A !== null ? A.key : null;
      if (typeof I == "string" && I !== "" || typeof I == "number") return oe !== null ? null : k($, A, "" + I, Y);
      if (typeof I == "object" && I !== null) {
        switch (I.$$typeof) {
          case B:
            return I.key === oe ? T($, A, I, Y) : null;
          case M:
            return I.key === oe ? D($, A, I, Y) : null;
          case je:
            return oe = I._init, V(
              $,
              A,
              oe(I._payload),
              Y
            );
        }
        if (Vr(I) || H(I)) return oe !== null ? null : q($, A, I, Y, null);
        go($, I);
      }
      return null;
    }
    function ee($, A, I, Y, oe) {
      if (typeof Y == "string" && Y !== "" || typeof Y == "number") return $ = $.get(I) || null, k(A, $, "" + Y, oe);
      if (typeof Y == "object" && Y !== null) {
        switch (Y.$$typeof) {
          case B:
            return $ = $.get(Y.key === null ? I : Y.key) || null, T(A, $, Y, oe);
          case M:
            return $ = $.get(Y.key === null ? I : Y.key) || null, D(A, $, Y, oe);
          case je:
            var le = Y._init;
            return ee($, A, I, le(Y._payload), oe);
        }
        if (Vr(Y) || H(Y)) return $ = $.get(I) || null, q(A, $, Y, oe, null);
        go(A, Y);
      }
      return null;
    }
    function re($, A, I, Y) {
      for (var oe = null, le = null, ue = A, fe = A = 0, Ye = null; ue !== null && fe < I.length; fe++) {
        ue.index > fe ? (Ye = ue, ue = null) : Ye = ue.sibling;
        var Ce = V($, ue, I[fe], Y);
        if (Ce === null) {
          ue === null && (ue = Ye);
          break;
        }
        e && ue && Ce.alternate === null && t($, ue), A = u(Ce, A, fe), le === null ? oe = Ce : le.sibling = Ce, le = Ce, ue = Ye;
      }
      if (fe === I.length) return n($, ue), $e && Hn($, fe), oe;
      if (ue === null) {
        for (; fe < I.length; fe++) ue = K($, I[fe], Y), ue !== null && (A = u(ue, A, fe), le === null ? oe = ue : le.sibling = ue, le = ue);
        return $e && Hn($, fe), oe;
      }
      for (ue = s($, ue); fe < I.length; fe++) Ye = ee(ue, $, fe, I[fe], Y), Ye !== null && (e && Ye.alternate !== null && ue.delete(Ye.key === null ? fe : Ye.key), A = u(Ye, A, fe), le === null ? oe = Ye : le.sibling = Ye, le = Ye);
      return e && ue.forEach(function(Rn) {
        return t($, Rn);
      }), $e && Hn($, fe), oe;
    }
    function se($, A, I, Y) {
      var oe = H(I);
      if (typeof oe != "function") throw Error(i(150));
      if (I = oe.call(I), I == null) throw Error(i(151));
      for (var le = oe = null, ue = A, fe = A = 0, Ye = null, Ce = I.next(); ue !== null && !Ce.done; fe++, Ce = I.next()) {
        ue.index > fe ? (Ye = ue, ue = null) : Ye = ue.sibling;
        var Rn = V($, ue, Ce.value, Y);
        if (Rn === null) {
          ue === null && (ue = Ye);
          break;
        }
        e && ue && Rn.alternate === null && t($, ue), A = u(Rn, A, fe), le === null ? oe = Rn : le.sibling = Rn, le = Rn, ue = Ye;
      }
      if (Ce.done) return n(
        $,
        ue
      ), $e && Hn($, fe), oe;
      if (ue === null) {
        for (; !Ce.done; fe++, Ce = I.next()) Ce = K($, Ce.value, Y), Ce !== null && (A = u(Ce, A, fe), le === null ? oe = Ce : le.sibling = Ce, le = Ce);
        return $e && Hn($, fe), oe;
      }
      for (ue = s($, ue); !Ce.done; fe++, Ce = I.next()) Ce = ee(ue, $, fe, Ce.value, Y), Ce !== null && (e && Ce.alternate !== null && ue.delete(Ce.key === null ? fe : Ce.key), A = u(Ce, A, fe), le === null ? oe = Ce : le.sibling = Ce, le = Ce);
      return e && ue.forEach(function(km) {
        return t($, km);
      }), $e && Hn($, fe), oe;
    }
    function Oe($, A, I, Y) {
      if (typeof I == "object" && I !== null && I.type === Z && I.key === null && (I = I.props.children), typeof I == "object" && I !== null) {
        switch (I.$$typeof) {
          case B:
            e: {
              for (var oe = I.key, le = A; le !== null; ) {
                if (le.key === oe) {
                  if (oe = I.type, oe === Z) {
                    if (le.tag === 7) {
                      n($, le.sibling), A = l(le, I.props.children), A.return = $, $ = A;
                      break e;
                    }
                  } else if (le.elementType === oe || typeof oe == "object" && oe !== null && oe.$$typeof === je && jc(oe) === le.type) {
                    n($, le.sibling), A = l(le, I.props), A.ref = vs($, le, I), A.return = $, $ = A;
                    break e;
                  }
                  n($, le);
                  break;
                } else t($, le);
                le = le.sibling;
              }
              I.type === Z ? (A = Kn(I.props.children, $.mode, Y, I.key), A.return = $, $ = A) : (Y = Wo(I.type, I.key, I.props, null, $.mode, Y), Y.ref = vs($, A, I), Y.return = $, $ = Y);
            }
            return h($);
          case M:
            e: {
              for (le = I.key; A !== null; ) {
                if (A.key === le) if (A.tag === 4 && A.stateNode.containerInfo === I.containerInfo && A.stateNode.implementation === I.implementation) {
                  n($, A.sibling), A = l(A, I.children || []), A.return = $, $ = A;
                  break e;
                } else {
                  n($, A);
                  break;
                }
                else t($, A);
                A = A.sibling;
              }
              A = ol(I, $.mode, Y), A.return = $, $ = A;
            }
            return h($);
          case je:
            return le = I._init, Oe($, A, le(I._payload), Y);
        }
        if (Vr(I)) return re($, A, I, Y);
        if (H(I)) return se($, A, I, Y);
        go($, I);
      }
      return typeof I == "string" && I !== "" || typeof I == "number" ? (I = "" + I, A !== null && A.tag === 6 ? (n($, A.sibling), A = l(A, I), A.return = $, $ = A) : (n($, A), A = sl(I, $.mode, Y), A.return = $, $ = A), h($)) : n($, A);
    }
    return Oe;
  }
  var Sr = Ec(!0), Nc = Ec(!1), _o = gn(null), xo = null, kr = null, ha = null;
  function ma() {
    ha = kr = xo = null;
  }
  function va(e) {
    var t = _o.current;
    Pe(_o), e._currentValue = t;
  }
  function ya(e, t, n) {
    for (; e !== null; ) {
      var s = e.alternate;
      if ((e.childLanes & t) !== t ? (e.childLanes |= t, s !== null && (s.childLanes |= t)) : s !== null && (s.childLanes & t) !== t && (s.childLanes |= t), e === n) break;
      e = e.return;
    }
  }
  function Cr(e, t) {
    xo = e, ha = kr = null, e = e.dependencies, e !== null && e.firstContext !== null && ((e.lanes & t) !== 0 && (ht = !0), e.firstContext = null);
  }
  function Tt(e) {
    var t = e._currentValue;
    if (ha !== e) if (e = { context: e, memoizedValue: t, next: null }, kr === null) {
      if (xo === null) throw Error(i(308));
      kr = e, xo.dependencies = { lanes: 0, firstContext: e };
    } else kr = kr.next = e;
    return t;
  }
  var Fn = null;
  function ga(e) {
    Fn === null ? Fn = [e] : Fn.push(e);
  }
  function Tc(e, t, n, s) {
    var l = t.interleaved;
    return l === null ? (n.next = n, ga(t)) : (n.next = l.next, l.next = n), t.interleaved = n, rn(e, s);
  }
  function rn(e, t) {
    e.lanes |= t;
    var n = e.alternate;
    for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; ) e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
    return n.tag === 3 ? n.stateNode : null;
  }
  var wn = !1;
  function _a(e) {
    e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
  }
  function Rc(e, t) {
    e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
  }
  function sn(e, t) {
    return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
  }
  function Sn(e, t, n) {
    var s = e.updateQueue;
    if (s === null) return null;
    if (s = s.shared, (we & 2) !== 0) {
      var l = s.pending;
      return l === null ? t.next = t : (t.next = l.next, l.next = t), s.pending = t, rn(e, n);
    }
    return l = s.interleaved, l === null ? (t.next = t, ga(s)) : (t.next = l.next, l.next = t), s.interleaved = t, rn(e, n);
  }
  function wo(e, t, n) {
    if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
      var s = t.lanes;
      s &= e.pendingLanes, n |= s, t.lanes = n, $i(e, n);
    }
  }
  function Ac(e, t) {
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
  function So(e, t, n, s) {
    var l = e.updateQueue;
    wn = !1;
    var u = l.firstBaseUpdate, h = l.lastBaseUpdate, k = l.shared.pending;
    if (k !== null) {
      l.shared.pending = null;
      var T = k, D = T.next;
      T.next = null, h === null ? u = D : h.next = D, h = T;
      var q = e.alternate;
      q !== null && (q = q.updateQueue, k = q.lastBaseUpdate, k !== h && (k === null ? q.firstBaseUpdate = D : k.next = D, q.lastBaseUpdate = T));
    }
    if (u !== null) {
      var K = l.baseState;
      h = 0, q = D = T = null, k = u;
      do {
        var V = k.lane, ee = k.eventTime;
        if ((s & V) === V) {
          q !== null && (q = q.next = {
            eventTime: ee,
            lane: 0,
            tag: k.tag,
            payload: k.payload,
            callback: k.callback,
            next: null
          });
          e: {
            var re = e, se = k;
            switch (V = t, ee = n, se.tag) {
              case 1:
                if (re = se.payload, typeof re == "function") {
                  K = re.call(ee, K, V);
                  break e;
                }
                K = re;
                break e;
              case 3:
                re.flags = re.flags & -65537 | 128;
              case 0:
                if (re = se.payload, V = typeof re == "function" ? re.call(ee, K, V) : re, V == null) break e;
                K = Q({}, K, V);
                break e;
              case 2:
                wn = !0;
            }
          }
          k.callback !== null && k.lane !== 0 && (e.flags |= 64, V = l.effects, V === null ? l.effects = [k] : V.push(k));
        } else ee = { eventTime: ee, lane: V, tag: k.tag, payload: k.payload, callback: k.callback, next: null }, q === null ? (D = q = ee, T = K) : q = q.next = ee, h |= V;
        if (k = k.next, k === null) {
          if (k = l.shared.pending, k === null) break;
          V = k, k = V.next, V.next = null, l.lastBaseUpdate = V, l.shared.pending = null;
        }
      } while (!0);
      if (q === null && (T = K), l.baseState = T, l.firstBaseUpdate = D, l.lastBaseUpdate = q, t = l.shared.interleaved, t !== null) {
        l = t;
        do
          h |= l.lane, l = l.next;
        while (l !== t);
      } else u === null && (l.shared.lanes = 0);
      Un |= h, e.lanes = h, e.memoizedState = K;
    }
  }
  function bc(e, t, n) {
    if (e = t.effects, t.effects = null, e !== null) for (t = 0; t < e.length; t++) {
      var s = e[t], l = s.callback;
      if (l !== null) {
        if (s.callback = null, s = n, typeof l != "function") throw Error(i(191, l));
        l.call(s);
      }
    }
  }
  var ys = {}, Kt = gn(ys), gs = gn(ys), _s = gn(ys);
  function Wn(e) {
    if (e === ys) throw Error(i(174));
    return e;
  }
  function xa(e, t) {
    switch (Ae(_s, t), Ae(gs, e), Ae(Kt, ys), e = t.nodeType, e) {
      case 9:
      case 11:
        t = (t = t.documentElement) ? t.namespaceURI : wi(null, "");
        break;
      default:
        e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = wi(t, e);
    }
    Pe(Kt), Ae(Kt, t);
  }
  function jr() {
    Pe(Kt), Pe(gs), Pe(_s);
  }
  function Pc(e) {
    Wn(_s.current);
    var t = Wn(Kt.current), n = wi(t, e.type);
    t !== n && (Ae(gs, e), Ae(Kt, n));
  }
  function wa(e) {
    gs.current === e && (Pe(Kt), Pe(gs));
  }
  var Ie = gn(0);
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
  var Sa = [];
  function ka() {
    for (var e = 0; e < Sa.length; e++) Sa[e]._workInProgressVersionPrimary = null;
    Sa.length = 0;
  }
  var Co = O.ReactCurrentDispatcher, Ca = O.ReactCurrentBatchConfig, Bn = 0, Le = null, Fe = null, Qe = null, jo = !1, xs = !1, ws = 0, Vh = 0;
  function tt() {
    throw Error(i(321));
  }
  function ja(e, t) {
    if (t === null) return !1;
    for (var n = 0; n < t.length && n < e.length; n++) if (!Lt(e[n], t[n])) return !1;
    return !0;
  }
  function Ea(e, t, n, s, l, u) {
    if (Bn = u, Le = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, Co.current = e === null || e.memoizedState === null ? Yh : Gh, e = n(s, l), xs) {
      u = 0;
      do {
        if (xs = !1, ws = 0, 25 <= u) throw Error(i(301));
        u += 1, Qe = Fe = null, t.updateQueue = null, Co.current = Jh, e = n(s, l);
      } while (xs);
    }
    if (Co.current = To, t = Fe !== null && Fe.next !== null, Bn = 0, Qe = Fe = Le = null, jo = !1, t) throw Error(i(300));
    return e;
  }
  function Na() {
    var e = ws !== 0;
    return ws = 0, e;
  }
  function Yt() {
    var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return Qe === null ? Le.memoizedState = Qe = e : Qe = Qe.next = e, Qe;
  }
  function Rt() {
    if (Fe === null) {
      var e = Le.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = Fe.next;
    var t = Qe === null ? Le.memoizedState : Qe.next;
    if (t !== null) Qe = t, Fe = e;
    else {
      if (e === null) throw Error(i(310));
      Fe = e, e = { memoizedState: Fe.memoizedState, baseState: Fe.baseState, baseQueue: Fe.baseQueue, queue: Fe.queue, next: null }, Qe === null ? Le.memoizedState = Qe = e : Qe = Qe.next = e;
    }
    return Qe;
  }
  function Ss(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function Ta(e) {
    var t = Rt(), n = t.queue;
    if (n === null) throw Error(i(311));
    n.lastRenderedReducer = e;
    var s = Fe, l = s.baseQueue, u = n.pending;
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
        var q = D.lane;
        if ((Bn & q) === q) T !== null && (T = T.next = { lane: 0, action: D.action, hasEagerState: D.hasEagerState, eagerState: D.eagerState, next: null }), s = D.hasEagerState ? D.eagerState : e(s, D.action);
        else {
          var K = {
            lane: q,
            action: D.action,
            hasEagerState: D.hasEagerState,
            eagerState: D.eagerState,
            next: null
          };
          T === null ? (k = T = K, h = s) : T = T.next = K, Le.lanes |= q, Un |= q;
        }
        D = D.next;
      } while (D !== null && D !== u);
      T === null ? h = s : T.next = k, Lt(s, t.memoizedState) || (ht = !0), t.memoizedState = s, t.baseState = h, t.baseQueue = T, n.lastRenderedState = s;
    }
    if (e = n.interleaved, e !== null) {
      l = e;
      do
        u = l.lane, Le.lanes |= u, Un |= u, l = l.next;
      while (l !== e);
    } else l === null && (n.lanes = 0);
    return [t.memoizedState, n.dispatch];
  }
  function Ra(e) {
    var t = Rt(), n = t.queue;
    if (n === null) throw Error(i(311));
    n.lastRenderedReducer = e;
    var s = n.dispatch, l = n.pending, u = t.memoizedState;
    if (l !== null) {
      n.pending = null;
      var h = l = l.next;
      do
        u = e(u, h.action), h = h.next;
      while (h !== l);
      Lt(u, t.memoizedState) || (ht = !0), t.memoizedState = u, t.baseQueue === null && (t.baseState = u), n.lastRenderedState = u;
    }
    return [u, s];
  }
  function $c() {
  }
  function Mc(e, t) {
    var n = Le, s = Rt(), l = t(), u = !Lt(s.memoizedState, l);
    if (u && (s.memoizedState = l, ht = !0), s = s.queue, Aa(Dc.bind(null, n, s, e), [e]), s.getSnapshot !== t || u || Qe !== null && Qe.memoizedState.tag & 1) {
      if (n.flags |= 2048, ks(9, Lc.bind(null, n, s, l, t), void 0, null), Ke === null) throw Error(i(349));
      (Bn & 30) !== 0 || Ic(n, t, l);
    }
    return l;
  }
  function Ic(e, t, n) {
    e.flags |= 16384, e = { getSnapshot: t, value: n }, t = Le.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, Le.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
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
      return !Lt(e, n);
    } catch {
      return !0;
    }
  }
  function Oc(e) {
    var t = rn(e, 1);
    t !== null && Ft(t, e, 1, -1);
  }
  function Hc(e) {
    var t = Yt();
    return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Ss, lastRenderedState: e }, t.queue = e, e = e.dispatch = Kh.bind(null, Le, e), [t.memoizedState, e];
  }
  function ks(e, t, n, s) {
    return e = { tag: e, create: t, destroy: n, deps: s, next: null }, t = Le.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, Le.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (s = n.next, n.next = e, e.next = s, t.lastEffect = e)), e;
  }
  function Fc() {
    return Rt().memoizedState;
  }
  function Eo(e, t, n, s) {
    var l = Yt();
    Le.flags |= e, l.memoizedState = ks(1 | t, n, void 0, s === void 0 ? null : s);
  }
  function No(e, t, n, s) {
    var l = Rt();
    s = s === void 0 ? null : s;
    var u = void 0;
    if (Fe !== null) {
      var h = Fe.memoizedState;
      if (u = h.destroy, s !== null && ja(s, h.deps)) {
        l.memoizedState = ks(t, n, u, s);
        return;
      }
    }
    Le.flags |= e, l.memoizedState = ks(1 | t, n, u, s);
  }
  function Wc(e, t) {
    return Eo(8390656, 8, e, t);
  }
  function Aa(e, t) {
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
  function ba() {
  }
  function Qc(e, t) {
    var n = Rt();
    t = t === void 0 ? null : t;
    var s = n.memoizedState;
    return s !== null && t !== null && ja(t, s[1]) ? s[0] : (n.memoizedState = [e, t], e);
  }
  function Kc(e, t) {
    var n = Rt();
    t = t === void 0 ? null : t;
    var s = n.memoizedState;
    return s !== null && t !== null && ja(t, s[1]) ? s[0] : (e = e(), n.memoizedState = [e, t], e);
  }
  function Yc(e, t, n) {
    return (Bn & 21) === 0 ? (e.baseState && (e.baseState = !1, ht = !0), e.memoizedState = n) : (Lt(n, t) || (n = ju(), Le.lanes |= n, Un |= n, e.baseState = !0), t);
  }
  function qh(e, t) {
    var n = Te;
    Te = n !== 0 && 4 > n ? n : 4, e(!0);
    var s = Ca.transition;
    Ca.transition = {};
    try {
      e(!1), t();
    } finally {
      Te = n, Ca.transition = s;
    }
  }
  function Gc() {
    return Rt().memoizedState;
  }
  function Qh(e, t, n) {
    var s = En(e);
    if (n = { lane: s, action: n, hasEagerState: !1, eagerState: null, next: null }, Jc(e)) Xc(t, n);
    else if (n = Tc(e, t, n, s), n !== null) {
      var l = lt();
      Ft(n, e, s, l), Zc(n, t, s);
    }
  }
  function Kh(e, t, n) {
    var s = En(e), l = { lane: s, action: n, hasEagerState: !1, eagerState: null, next: null };
    if (Jc(e)) Xc(t, l);
    else {
      var u = e.alternate;
      if (e.lanes === 0 && (u === null || u.lanes === 0) && (u = t.lastRenderedReducer, u !== null)) try {
        var h = t.lastRenderedState, k = u(h, n);
        if (l.hasEagerState = !0, l.eagerState = k, Lt(k, h)) {
          var T = t.interleaved;
          T === null ? (l.next = l, ga(t)) : (l.next = T.next, T.next = l), t.interleaved = l;
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
    return e === Le || t !== null && t === Le;
  }
  function Xc(e, t) {
    xs = jo = !0;
    var n = e.pending;
    n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
  }
  function Zc(e, t, n) {
    if ((n & 4194240) !== 0) {
      var s = t.lanes;
      s &= e.pendingLanes, n |= s, t.lanes = n, $i(e, n);
    }
  }
  var To = { readContext: Tt, useCallback: tt, useContext: tt, useEffect: tt, useImperativeHandle: tt, useInsertionEffect: tt, useLayoutEffect: tt, useMemo: tt, useReducer: tt, useRef: tt, useState: tt, useDebugValue: tt, useDeferredValue: tt, useTransition: tt, useMutableSource: tt, useSyncExternalStore: tt, useId: tt, unstable_isNewReconciler: !1 }, Yh = { readContext: Tt, useCallback: function(e, t) {
    return Yt().memoizedState = [e, t === void 0 ? null : t], e;
  }, useContext: Tt, useEffect: Wc, useImperativeHandle: function(e, t, n) {
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
    var n = Yt();
    return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e;
  }, useReducer: function(e, t, n) {
    var s = Yt();
    return t = n !== void 0 ? n(t) : t, s.memoizedState = s.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, s.queue = e, e = e.dispatch = Qh.bind(null, Le, e), [s.memoizedState, e];
  }, useRef: function(e) {
    var t = Yt();
    return e = { current: e }, t.memoizedState = e;
  }, useState: Hc, useDebugValue: ba, useDeferredValue: function(e) {
    return Yt().memoizedState = e;
  }, useTransition: function() {
    var e = Hc(!1), t = e[0];
    return e = qh.bind(null, e[1]), Yt().memoizedState = e, [t, e];
  }, useMutableSource: function() {
  }, useSyncExternalStore: function(e, t, n) {
    var s = Le, l = Yt();
    if ($e) {
      if (n === void 0) throw Error(i(407));
      n = n();
    } else {
      if (n = t(), Ke === null) throw Error(i(349));
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
    var e = Yt(), t = Ke.identifierPrefix;
    if ($e) {
      var n = nn, s = tn;
      n = (s & ~(1 << 32 - It(s) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = ws++, 0 < n && (t += "H" + n.toString(32)), t += ":";
    } else n = Vh++, t = ":" + t + "r" + n.toString(32) + ":";
    return e.memoizedState = t;
  }, unstable_isNewReconciler: !1 }, Gh = {
    readContext: Tt,
    useCallback: Qc,
    useContext: Tt,
    useEffect: Aa,
    useImperativeHandle: qc,
    useInsertionEffect: Bc,
    useLayoutEffect: Uc,
    useMemo: Kc,
    useReducer: Ta,
    useRef: Fc,
    useState: function() {
      return Ta(Ss);
    },
    useDebugValue: ba,
    useDeferredValue: function(e) {
      var t = Rt();
      return Yc(t, Fe.memoizedState, e);
    },
    useTransition: function() {
      var e = Ta(Ss)[0], t = Rt().memoizedState;
      return [e, t];
    },
    useMutableSource: $c,
    useSyncExternalStore: Mc,
    useId: Gc,
    unstable_isNewReconciler: !1
  }, Jh = { readContext: Tt, useCallback: Qc, useContext: Tt, useEffect: Aa, useImperativeHandle: qc, useInsertionEffect: Bc, useLayoutEffect: Uc, useMemo: Kc, useReducer: Ra, useRef: Fc, useState: function() {
    return Ra(Ss);
  }, useDebugValue: ba, useDeferredValue: function(e) {
    var t = Rt();
    return Fe === null ? t.memoizedState = e : Yc(t, Fe.memoizedState, e);
  }, useTransition: function() {
    var e = Ra(Ss)[0], t = Rt().memoizedState;
    return [e, t];
  }, useMutableSource: $c, useSyncExternalStore: Mc, useId: Gc, unstable_isNewReconciler: !1 };
  function zt(e, t) {
    if (e && e.defaultProps) {
      t = Q({}, t), e = e.defaultProps;
      for (var n in e) t[n] === void 0 && (t[n] = e[n]);
      return t;
    }
    return t;
  }
  function Pa(e, t, n, s) {
    t = e.memoizedState, n = n(s, t), n = n == null ? t : Q({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
  }
  var Ro = { isMounted: function(e) {
    return (e = e._reactInternals) ? Ln(e) === e : !1;
  }, enqueueSetState: function(e, t, n) {
    e = e._reactInternals;
    var s = lt(), l = En(e), u = sn(s, l);
    u.payload = t, n != null && (u.callback = n), t = Sn(e, u, l), t !== null && (Ft(t, e, l, s), wo(t, e, l));
  }, enqueueReplaceState: function(e, t, n) {
    e = e._reactInternals;
    var s = lt(), l = En(e), u = sn(s, l);
    u.tag = 1, u.payload = t, n != null && (u.callback = n), t = Sn(e, u, l), t !== null && (Ft(t, e, l, s), wo(t, e, l));
  }, enqueueForceUpdate: function(e, t) {
    e = e._reactInternals;
    var n = lt(), s = En(e), l = sn(n, s);
    l.tag = 2, t != null && (l.callback = t), t = Sn(e, l, s), t !== null && (Ft(t, e, s, n), wo(t, e, s));
  } };
  function ed(e, t, n, s, l, u, h) {
    return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(s, u, h) : t.prototype && t.prototype.isPureReactComponent ? !us(n, s) || !us(l, u) : !0;
  }
  function td(e, t, n) {
    var s = !1, l = _n, u = t.contextType;
    return typeof u == "object" && u !== null ? u = Tt(u) : (l = pt(t) ? zn : et.current, s = t.contextTypes, u = (s = s != null) ? gr(e, l) : _n), t = new t(n, u), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = Ro, e.stateNode = t, t._reactInternals = e, s && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = l, e.__reactInternalMemoizedMaskedChildContext = u), t;
  }
  function nd(e, t, n, s) {
    e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, s), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, s), t.state !== e && Ro.enqueueReplaceState(t, t.state, null);
  }
  function $a(e, t, n, s) {
    var l = e.stateNode;
    l.props = n, l.state = e.memoizedState, l.refs = {}, _a(e);
    var u = t.contextType;
    typeof u == "object" && u !== null ? l.context = Tt(u) : (u = pt(t) ? zn : et.current, l.context = gr(e, u)), l.state = e.memoizedState, u = t.getDerivedStateFromProps, typeof u == "function" && (Pa(e, t, u, n), l.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof l.getSnapshotBeforeUpdate == "function" || typeof l.UNSAFE_componentWillMount != "function" && typeof l.componentWillMount != "function" || (t = l.state, typeof l.componentWillMount == "function" && l.componentWillMount(), typeof l.UNSAFE_componentWillMount == "function" && l.UNSAFE_componentWillMount(), t !== l.state && Ro.enqueueReplaceState(l, l.state, null), So(e, n, l, s), l.state = e.memoizedState), typeof l.componentDidMount == "function" && (e.flags |= 4194308);
  }
  function Er(e, t) {
    try {
      var n = "", s = t;
      do
        n += _e(s), s = s.return;
      while (s);
      var l = n;
    } catch (u) {
      l = `
Error generating stack: ` + u.message + `
` + u.stack;
    }
    return { value: e, source: t, stack: l, digest: null };
  }
  function Ma(e, t, n) {
    return { value: e, source: null, stack: n ?? null, digest: t ?? null };
  }
  function Ia(e, t) {
    try {
      console.error(t.value);
    } catch (n) {
      setTimeout(function() {
        throw n;
      });
    }
  }
  var Xh = typeof WeakMap == "function" ? WeakMap : Map;
  function rd(e, t, n) {
    n = sn(-1, n), n.tag = 3, n.payload = { element: null };
    var s = t.value;
    return n.callback = function() {
      Lo || (Lo = !0, Ga = s), Ia(e, t);
    }, n;
  }
  function sd(e, t, n) {
    n = sn(-1, n), n.tag = 3;
    var s = e.type.getDerivedStateFromError;
    if (typeof s == "function") {
      var l = t.value;
      n.payload = function() {
        return s(l);
      }, n.callback = function() {
        Ia(e, t);
      };
    }
    var u = e.stateNode;
    return u !== null && typeof u.componentDidCatch == "function" && (n.callback = function() {
      Ia(e, t), typeof s != "function" && (Cn === null ? Cn = /* @__PURE__ */ new Set([this]) : Cn.add(this));
      var h = t.stack;
      this.componentDidCatch(t.value, { componentStack: h !== null ? h : "" });
    }), n;
  }
  function od(e, t, n) {
    var s = e.pingCache;
    if (s === null) {
      s = e.pingCache = new Xh();
      var l = /* @__PURE__ */ new Set();
      s.set(t, l);
    } else l = s.get(t), l === void 0 && (l = /* @__PURE__ */ new Set(), s.set(t, l));
    l.has(n) || (l.add(n), e = fm.bind(null, e, t, n), t.then(e, e));
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
    return (e.mode & 1) === 0 ? (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = sn(-1, 1), t.tag = 2, Sn(n, t, 1))), n.lanes |= 1), e) : (e.flags |= 65536, e.lanes = l, e);
  }
  var Zh = O.ReactCurrentOwner, ht = !1;
  function at(e, t, n, s) {
    t.child = e === null ? Nc(t, null, n, s) : Sr(t, e.child, n, s);
  }
  function ld(e, t, n, s, l) {
    n = n.render;
    var u = t.ref;
    return Cr(t, l), s = Ea(e, t, n, s, u, l), n = Na(), e !== null && !ht ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l, on(e, t, l)) : ($e && n && ua(t), t.flags |= 1, at(e, t, s, l), t.child);
  }
  function ud(e, t, n, s, l) {
    if (e === null) {
      var u = n.type;
      return typeof u == "function" && !rl(u) && u.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = u, cd(e, t, u, s, l)) : (e = Wo(n.type, null, s, t, t.mode, l), e.ref = t.ref, e.return = t, t.child = e);
    }
    if (u = e.child, (e.lanes & l) === 0) {
      var h = u.memoizedProps;
      if (n = n.compare, n = n !== null ? n : us, n(h, s) && e.ref === t.ref) return on(e, t, l);
    }
    return t.flags |= 1, e = Tn(u, s), e.ref = t.ref, e.return = t, t.child = e;
  }
  function cd(e, t, n, s, l) {
    if (e !== null) {
      var u = e.memoizedProps;
      if (us(u, s) && e.ref === t.ref) if (ht = !1, t.pendingProps = s = u, (e.lanes & l) !== 0) (e.flags & 131072) !== 0 && (ht = !0);
      else return t.lanes = e.lanes, on(e, t, l);
    }
    return La(e, t, n, s, l);
  }
  function dd(e, t, n) {
    var s = t.pendingProps, l = s.children, u = e !== null ? e.memoizedState : null;
    if (s.mode === "hidden") if ((t.mode & 1) === 0) t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, Ae(Tr, kt), kt |= n;
    else {
      if ((n & 1073741824) === 0) return e = u !== null ? u.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, Ae(Tr, kt), kt |= e, null;
      t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, s = u !== null ? u.baseLanes : n, Ae(Tr, kt), kt |= s;
    }
    else u !== null ? (s = u.baseLanes | n, t.memoizedState = null) : s = n, Ae(Tr, kt), kt |= s;
    return at(e, t, l, n), t.child;
  }
  function fd(e, t) {
    var n = t.ref;
    (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
  }
  function La(e, t, n, s, l) {
    var u = pt(n) ? zn : et.current;
    return u = gr(t, u), Cr(t, l), n = Ea(e, t, n, s, u, l), s = Na(), e !== null && !ht ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l, on(e, t, l)) : ($e && s && ua(t), t.flags |= 1, at(e, t, n, l), t.child);
  }
  function pd(e, t, n, s, l) {
    if (pt(n)) {
      var u = !0;
      po(t);
    } else u = !1;
    if (Cr(t, l), t.stateNode === null) bo(e, t), td(t, n, s), $a(t, n, s, l), s = !0;
    else if (e === null) {
      var h = t.stateNode, k = t.memoizedProps;
      h.props = k;
      var T = h.context, D = n.contextType;
      typeof D == "object" && D !== null ? D = Tt(D) : (D = pt(n) ? zn : et.current, D = gr(t, D));
      var q = n.getDerivedStateFromProps, K = typeof q == "function" || typeof h.getSnapshotBeforeUpdate == "function";
      K || typeof h.UNSAFE_componentWillReceiveProps != "function" && typeof h.componentWillReceiveProps != "function" || (k !== s || T !== D) && nd(t, h, s, D), wn = !1;
      var V = t.memoizedState;
      h.state = V, So(t, s, h, l), T = t.memoizedState, k !== s || V !== T || ft.current || wn ? (typeof q == "function" && (Pa(t, n, q, s), T = t.memoizedState), (k = wn || ed(t, n, k, s, V, T, D)) ? (K || typeof h.UNSAFE_componentWillMount != "function" && typeof h.componentWillMount != "function" || (typeof h.componentWillMount == "function" && h.componentWillMount(), typeof h.UNSAFE_componentWillMount == "function" && h.UNSAFE_componentWillMount()), typeof h.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof h.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = s, t.memoizedState = T), h.props = s, h.state = T, h.context = D, s = k) : (typeof h.componentDidMount == "function" && (t.flags |= 4194308), s = !1);
    } else {
      h = t.stateNode, Rc(e, t), k = t.memoizedProps, D = t.type === t.elementType ? k : zt(t.type, k), h.props = D, K = t.pendingProps, V = h.context, T = n.contextType, typeof T == "object" && T !== null ? T = Tt(T) : (T = pt(n) ? zn : et.current, T = gr(t, T));
      var ee = n.getDerivedStateFromProps;
      (q = typeof ee == "function" || typeof h.getSnapshotBeforeUpdate == "function") || typeof h.UNSAFE_componentWillReceiveProps != "function" && typeof h.componentWillReceiveProps != "function" || (k !== K || V !== T) && nd(t, h, s, T), wn = !1, V = t.memoizedState, h.state = V, So(t, s, h, l);
      var re = t.memoizedState;
      k !== K || V !== re || ft.current || wn ? (typeof ee == "function" && (Pa(t, n, ee, s), re = t.memoizedState), (D = wn || ed(t, n, D, s, V, re, T) || !1) ? (q || typeof h.UNSAFE_componentWillUpdate != "function" && typeof h.componentWillUpdate != "function" || (typeof h.componentWillUpdate == "function" && h.componentWillUpdate(s, re, T), typeof h.UNSAFE_componentWillUpdate == "function" && h.UNSAFE_componentWillUpdate(s, re, T)), typeof h.componentDidUpdate == "function" && (t.flags |= 4), typeof h.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof h.componentDidUpdate != "function" || k === e.memoizedProps && V === e.memoizedState || (t.flags |= 4), typeof h.getSnapshotBeforeUpdate != "function" || k === e.memoizedProps && V === e.memoizedState || (t.flags |= 1024), t.memoizedProps = s, t.memoizedState = re), h.props = s, h.state = re, h.context = T, s = D) : (typeof h.componentDidUpdate != "function" || k === e.memoizedProps && V === e.memoizedState || (t.flags |= 4), typeof h.getSnapshotBeforeUpdate != "function" || k === e.memoizedProps && V === e.memoizedState || (t.flags |= 1024), s = !1);
    }
    return Da(e, t, n, s, u, l);
  }
  function Da(e, t, n, s, l, u) {
    fd(e, t);
    var h = (t.flags & 128) !== 0;
    if (!s && !h) return l && gc(t, n, !1), on(e, t, u);
    s = t.stateNode, Zh.current = t;
    var k = h && typeof n.getDerivedStateFromError != "function" ? null : s.render();
    return t.flags |= 1, e !== null && h ? (t.child = Sr(t, e.child, null, u), t.child = Sr(t, null, k, u)) : at(e, t, k, u), t.memoizedState = s.state, l && gc(t, n, !0), t.child;
  }
  function hd(e) {
    var t = e.stateNode;
    t.pendingContext ? vc(e, t.pendingContext, t.pendingContext !== t.context) : t.context && vc(e, t.context, !1), xa(e, t.containerInfo);
  }
  function md(e, t, n, s, l) {
    return wr(), pa(l), t.flags |= 256, at(e, t, n, s), t.child;
  }
  var za = { dehydrated: null, treeContext: null, retryLane: 0 };
  function Oa(e) {
    return { baseLanes: e, cachePool: null, transitions: null };
  }
  function vd(e, t, n) {
    var s = t.pendingProps, l = Ie.current, u = !1, h = (t.flags & 128) !== 0, k;
    if ((k = h) || (k = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0), k ? (u = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (l |= 1), Ae(Ie, l & 1), e === null)
      return fa(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? ((t.mode & 1) === 0 ? t.lanes = 1 : e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824, null) : (h = s.children, e = s.fallback, u ? (s = t.mode, u = t.child, h = { mode: "hidden", children: h }, (s & 1) === 0 && u !== null ? (u.childLanes = 0, u.pendingProps = h) : u = Bo(h, s, 0, null), e = Kn(e, s, n, null), u.return = t, e.return = t, u.sibling = e, t.child = u, t.child.memoizedState = Oa(n), t.memoizedState = za, e) : Ha(t, h));
    if (l = e.memoizedState, l !== null && (k = l.dehydrated, k !== null)) return em(e, t, h, s, k, l, n);
    if (u) {
      u = s.fallback, h = t.mode, l = e.child, k = l.sibling;
      var T = { mode: "hidden", children: s.children };
      return (h & 1) === 0 && t.child !== l ? (s = t.child, s.childLanes = 0, s.pendingProps = T, t.deletions = null) : (s = Tn(l, T), s.subtreeFlags = l.subtreeFlags & 14680064), k !== null ? u = Tn(k, u) : (u = Kn(u, h, n, null), u.flags |= 2), u.return = t, s.return = t, s.sibling = u, t.child = s, s = u, u = t.child, h = e.child.memoizedState, h = h === null ? Oa(n) : { baseLanes: h.baseLanes | n, cachePool: null, transitions: h.transitions }, u.memoizedState = h, u.childLanes = e.childLanes & ~n, t.memoizedState = za, s;
    }
    return u = e.child, e = u.sibling, s = Tn(u, { mode: "visible", children: s.children }), (t.mode & 1) === 0 && (s.lanes = n), s.return = t, s.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = s, t.memoizedState = null, s;
  }
  function Ha(e, t) {
    return t = Bo({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t;
  }
  function Ao(e, t, n, s) {
    return s !== null && pa(s), Sr(t, e.child, null, n), e = Ha(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
  }
  function em(e, t, n, s, l, u, h) {
    if (n)
      return t.flags & 256 ? (t.flags &= -257, s = Ma(Error(i(422))), Ao(e, t, h, s)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (u = s.fallback, l = t.mode, s = Bo({ mode: "visible", children: s.children }, l, 0, null), u = Kn(u, l, h, null), u.flags |= 2, s.return = t, u.return = t, s.sibling = u, t.child = s, (t.mode & 1) !== 0 && Sr(t, e.child, null, h), t.child.memoizedState = Oa(h), t.memoizedState = za, u);
    if ((t.mode & 1) === 0) return Ao(e, t, h, null);
    if (l.data === "$!") {
      if (s = l.nextSibling && l.nextSibling.dataset, s) var k = s.dgst;
      return s = k, u = Error(i(419)), s = Ma(u, s, void 0), Ao(e, t, h, s);
    }
    if (k = (h & e.childLanes) !== 0, ht || k) {
      if (s = Ke, s !== null) {
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
        l = (l & (s.suspendedLanes | h)) !== 0 ? 0 : l, l !== 0 && l !== u.retryLane && (u.retryLane = l, rn(e, l), Ft(s, e, l, -1));
      }
      return nl(), s = Ma(Error(i(421))), Ao(e, t, h, s);
    }
    return l.data === "$?" ? (t.flags |= 128, t.child = e.child, t = pm.bind(null, e), l._reactRetry = t, null) : (e = u.treeContext, St = yn(l.nextSibling), wt = t, $e = !0, Dt = null, e !== null && (Et[Nt++] = tn, Et[Nt++] = nn, Et[Nt++] = On, tn = e.id, nn = e.overflow, On = t), t = Ha(t, s.children), t.flags |= 4096, t);
  }
  function yd(e, t, n) {
    e.lanes |= t;
    var s = e.alternate;
    s !== null && (s.lanes |= t), ya(e.return, t, n);
  }
  function Fa(e, t, n, s, l) {
    var u = e.memoizedState;
    u === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: s, tail: n, tailMode: l } : (u.isBackwards = t, u.rendering = null, u.renderingStartTime = 0, u.last = s, u.tail = n, u.tailMode = l);
  }
  function gd(e, t, n) {
    var s = t.pendingProps, l = s.revealOrder, u = s.tail;
    if (at(e, t, s.children, n), s = Ie.current, (s & 2) !== 0) s = s & 1 | 2, t.flags |= 128;
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
    if (Ae(Ie, s), (t.mode & 1) === 0) t.memoizedState = null;
    else switch (l) {
      case "forwards":
        for (n = t.child, l = null; n !== null; ) e = n.alternate, e !== null && ko(e) === null && (l = n), n = n.sibling;
        n = l, n === null ? (l = t.child, t.child = null) : (l = n.sibling, n.sibling = null), Fa(t, !1, l, n, u);
        break;
      case "backwards":
        for (n = null, l = t.child, t.child = null; l !== null; ) {
          if (e = l.alternate, e !== null && ko(e) === null) {
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
  function bo(e, t) {
    (t.mode & 1) === 0 && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2);
  }
  function on(e, t, n) {
    if (e !== null && (t.dependencies = e.dependencies), Un |= t.lanes, (n & t.childLanes) === 0) return null;
    if (e !== null && t.child !== e.child) throw Error(i(153));
    if (t.child !== null) {
      for (e = t.child, n = Tn(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; ) e = e.sibling, n = n.sibling = Tn(e, e.pendingProps), n.return = t;
      n.sibling = null;
    }
    return t.child;
  }
  function tm(e, t, n) {
    switch (t.tag) {
      case 3:
        hd(t), wr();
        break;
      case 5:
        Pc(t);
        break;
      case 1:
        pt(t.type) && po(t);
        break;
      case 4:
        xa(t, t.stateNode.containerInfo);
        break;
      case 10:
        var s = t.type._context, l = t.memoizedProps.value;
        Ae(_o, s._currentValue), s._currentValue = l;
        break;
      case 13:
        if (s = t.memoizedState, s !== null)
          return s.dehydrated !== null ? (Ae(Ie, Ie.current & 1), t.flags |= 128, null) : (n & t.child.childLanes) !== 0 ? vd(e, t, n) : (Ae(Ie, Ie.current & 1), e = on(e, t, n), e !== null ? e.sibling : null);
        Ae(Ie, Ie.current & 1);
        break;
      case 19:
        if (s = (n & t.childLanes) !== 0, (e.flags & 128) !== 0) {
          if (s) return gd(e, t, n);
          t.flags |= 128;
        }
        if (l = t.memoizedState, l !== null && (l.rendering = null, l.tail = null, l.lastEffect = null), Ae(Ie, Ie.current), s) break;
        return null;
      case 22:
      case 23:
        return t.lanes = 0, dd(e, t, n);
    }
    return on(e, t, n);
  }
  var _d, Wa, xd, wd;
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
  }, Wa = function() {
  }, xd = function(e, t, n, s) {
    var l = e.memoizedProps;
    if (l !== s) {
      e = t.stateNode, Wn(Kt.current);
      var u = null;
      switch (n) {
        case "input":
          l = yi(e, l), s = yi(e, s), u = [];
          break;
        case "select":
          l = Q({}, l, { value: void 0 }), s = Q({}, s, { value: void 0 }), u = [];
          break;
        case "textarea":
          l = xi(e, l), s = xi(e, s), u = [];
          break;
        default:
          typeof l.onClick != "function" && typeof s.onClick == "function" && (e.onclick = uo);
      }
      Si(n, s);
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
        else D === "dangerouslySetInnerHTML" ? (T = T ? T.__html : void 0, k = k ? k.__html : void 0, T != null && k !== T && (u = u || []).push(D, T)) : D === "children" ? typeof T != "string" && typeof T != "number" || (u = u || []).push(D, "" + T) : D !== "suppressContentEditableWarning" && D !== "suppressHydrationWarning" && (d.hasOwnProperty(D) ? (T != null && D === "onScroll" && be("scroll", e), u || k === T || (u = [])) : (u = u || []).push(D, T));
      }
      n && (u = u || []).push("style", n);
      var D = u;
      (t.updateQueue = D) && (t.flags |= 4);
    }
  }, wd = function(e, t, n, s) {
    n !== s && (t.flags |= 4);
  };
  function Cs(e, t) {
    if (!$e) switch (e.tailMode) {
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
  function nm(e, t, n) {
    var s = t.pendingProps;
    switch (ca(t), t.tag) {
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
        return s = t.stateNode, jr(), Pe(ft), Pe(et), ka(), s.pendingContext && (s.context = s.pendingContext, s.pendingContext = null), (e === null || e.child === null) && (yo(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024, Dt !== null && (Za(Dt), Dt = null))), Wa(e, t), nt(t), null;
      case 5:
        wa(t);
        var l = Wn(_s.current);
        if (n = t.type, e !== null && t.stateNode != null) xd(e, t, n, s, l), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
        else {
          if (!s) {
            if (t.stateNode === null) throw Error(i(166));
            return nt(t), null;
          }
          if (e = Wn(Kt.current), yo(t)) {
            s = t.stateNode, n = t.type;
            var u = t.memoizedProps;
            switch (s[Qt] = t, s[hs] = u, e = (t.mode & 1) !== 0, n) {
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
            Si(n, u), l = null;
            for (var h in u) if (u.hasOwnProperty(h)) {
              var k = u[h];
              h === "children" ? typeof k == "string" ? s.textContent !== k && (u.suppressHydrationWarning !== !0 && lo(s.textContent, k, e), l = ["children", k]) : typeof k == "number" && s.textContent !== "" + k && (u.suppressHydrationWarning !== !0 && lo(
                s.textContent,
                k,
                e
              ), l = ["children", "" + k]) : d.hasOwnProperty(h) && k != null && h === "onScroll" && be("scroll", s);
            }
            switch (n) {
              case "input":
                Mn(s), ru(s, u, !0);
                break;
              case "textarea":
                Mn(s), iu(s);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof u.onClick == "function" && (s.onclick = uo);
            }
            s = l, t.updateQueue = s, s !== null && (t.flags |= 4);
          } else {
            h = l.nodeType === 9 ? l : l.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = au(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = h.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof s.is == "string" ? e = h.createElement(n, { is: s.is }) : (e = h.createElement(n), n === "select" && (h = e, s.multiple ? h.multiple = !0 : s.size && (h.size = s.size))) : e = h.createElementNS(e, n), e[Qt] = t, e[hs] = s, _d(e, t, !1, !1), t.stateNode = e;
            e: {
              switch (h = ki(n, s), n) {
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
                  tu(e, s), l = yi(e, s), be("invalid", e);
                  break;
                case "option":
                  l = s;
                  break;
                case "select":
                  e._wrapperState = { wasMultiple: !!s.multiple }, l = Q({}, s, { value: void 0 }), be("invalid", e);
                  break;
                case "textarea":
                  su(e, s), l = xi(e, s), be("invalid", e);
                  break;
                default:
                  l = s;
              }
              Si(n, l), k = l;
              for (u in k) if (k.hasOwnProperty(u)) {
                var T = k[u];
                u === "style" ? cu(e, T) : u === "dangerouslySetInnerHTML" ? (T = T ? T.__html : void 0, T != null && lu(e, T)) : u === "children" ? typeof T == "string" ? (n !== "textarea" || T !== "") && qr(e, T) : typeof T == "number" && qr(e, "" + T) : u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && u !== "autoFocus" && (d.hasOwnProperty(u) ? T != null && u === "onScroll" && be("scroll", e) : T != null && b(e, u, T, h));
              }
              switch (n) {
                case "input":
                  Mn(e), ru(e, s, !1);
                  break;
                case "textarea":
                  Mn(e), iu(e);
                  break;
                case "option":
                  s.value != null && e.setAttribute("value", "" + ke(s.value));
                  break;
                case "select":
                  e.multiple = !!s.multiple, u = s.value, u != null ? ir(e, !!s.multiple, u, !1) : s.defaultValue != null && ir(
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
          if (typeof s != "string" && t.stateNode === null) throw Error(i(166));
          if (n = Wn(_s.current), Wn(Kt.current), yo(t)) {
            if (s = t.stateNode, n = t.memoizedProps, s[Qt] = t, (u = s.nodeValue !== n) && (e = wt, e !== null)) switch (e.tag) {
              case 3:
                lo(s.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 && lo(s.nodeValue, n, (e.mode & 1) !== 0);
            }
            u && (t.flags |= 4);
          } else s = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(s), s[Qt] = t, t.stateNode = s;
        }
        return nt(t), null;
      case 13:
        if (Pe(Ie), s = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
          if ($e && St !== null && (t.mode & 1) !== 0 && (t.flags & 128) === 0) Cc(), wr(), t.flags |= 98560, u = !1;
          else if (u = yo(t), s !== null && s.dehydrated !== null) {
            if (e === null) {
              if (!u) throw Error(i(318));
              if (u = t.memoizedState, u = u !== null ? u.dehydrated : null, !u) throw Error(i(317));
              u[Qt] = t;
            } else wr(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            nt(t), u = !1;
          } else Dt !== null && (Za(Dt), Dt = null), u = !0;
          if (!u) return t.flags & 65536 ? t : null;
        }
        return (t.flags & 128) !== 0 ? (t.lanes = n, t) : (s = s !== null, s !== (e !== null && e.memoizedState !== null) && s && (t.child.flags |= 8192, (t.mode & 1) !== 0 && (e === null || (Ie.current & 1) !== 0 ? We === 0 && (We = 3) : nl())), t.updateQueue !== null && (t.flags |= 4), nt(t), null);
      case 4:
        return jr(), Wa(e, t), e === null && fs(t.stateNode.containerInfo), nt(t), null;
      case 10:
        return va(t.type._context), nt(t), null;
      case 17:
        return pt(t.type) && fo(), nt(t), null;
      case 19:
        if (Pe(Ie), u = t.memoizedState, u === null) return nt(t), null;
        if (s = (t.flags & 128) !== 0, h = u.rendering, h === null) if (s) Cs(u, !1);
        else {
          if (We !== 0 || e !== null && (e.flags & 128) !== 0) for (e = t.child; e !== null; ) {
            if (h = ko(e), h !== null) {
              for (t.flags |= 128, Cs(u, !1), s = h.updateQueue, s !== null && (t.updateQueue = s, t.flags |= 4), t.subtreeFlags = 0, s = n, n = t.child; n !== null; ) u = n, e = s, u.flags &= 14680066, h = u.alternate, h === null ? (u.childLanes = 0, u.lanes = e, u.child = null, u.subtreeFlags = 0, u.memoizedProps = null, u.memoizedState = null, u.updateQueue = null, u.dependencies = null, u.stateNode = null) : (u.childLanes = h.childLanes, u.lanes = h.lanes, u.child = h.child, u.subtreeFlags = 0, u.deletions = null, u.memoizedProps = h.memoizedProps, u.memoizedState = h.memoizedState, u.updateQueue = h.updateQueue, u.type = h.type, e = h.dependencies, u.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), n = n.sibling;
              return Ae(Ie, Ie.current & 1 | 2), t.child;
            }
            e = e.sibling;
          }
          u.tail !== null && ze() > Rr && (t.flags |= 128, s = !0, Cs(u, !1), t.lanes = 4194304);
        }
        else {
          if (!s) if (e = ko(h), e !== null) {
            if (t.flags |= 128, s = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), Cs(u, !0), u.tail === null && u.tailMode === "hidden" && !h.alternate && !$e) return nt(t), null;
          } else 2 * ze() - u.renderingStartTime > Rr && n !== 1073741824 && (t.flags |= 128, s = !0, Cs(u, !1), t.lanes = 4194304);
          u.isBackwards ? (h.sibling = t.child, t.child = h) : (n = u.last, n !== null ? n.sibling = h : t.child = h, u.last = h);
        }
        return u.tail !== null ? (t = u.tail, u.rendering = t, u.tail = t.sibling, u.renderingStartTime = ze(), t.sibling = null, n = Ie.current, Ae(Ie, s ? n & 1 | 2 : n & 1), t) : (nt(t), null);
      case 22:
      case 23:
        return tl(), s = t.memoizedState !== null, e !== null && e.memoizedState !== null !== s && (t.flags |= 8192), s && (t.mode & 1) !== 0 ? (kt & 1073741824) !== 0 && (nt(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : nt(t), null;
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(i(156, t.tag));
  }
  function rm(e, t) {
    switch (ca(t), t.tag) {
      case 1:
        return pt(t.type) && fo(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 3:
        return jr(), Pe(ft), Pe(et), ka(), e = t.flags, (e & 65536) !== 0 && (e & 128) === 0 ? (t.flags = e & -65537 | 128, t) : null;
      case 5:
        return wa(t), null;
      case 13:
        if (Pe(Ie), e = t.memoizedState, e !== null && e.dehydrated !== null) {
          if (t.alternate === null) throw Error(i(340));
          wr();
        }
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 19:
        return Pe(Ie), null;
      case 4:
        return jr(), null;
      case 10:
        return va(t.type._context), null;
      case 22:
      case 23:
        return tl(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var Po = !1, rt = !1, sm = typeof WeakSet == "function" ? WeakSet : Set, ne = null;
  function Nr(e, t) {
    var n = e.ref;
    if (n !== null) if (typeof n == "function") try {
      n(null);
    } catch (s) {
      De(e, t, s);
    }
    else n.current = null;
  }
  function Ba(e, t, n) {
    try {
      n();
    } catch (s) {
      De(e, t, s);
    }
  }
  var Sd = !1;
  function om(e, t) {
    if (ta = Js, e = ec(), Qi(e)) {
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
          var h = 0, k = -1, T = -1, D = 0, q = 0, K = e, V = null;
          t: for (; ; ) {
            for (var ee; K !== n || l !== 0 && K.nodeType !== 3 || (k = h + l), K !== u || s !== 0 && K.nodeType !== 3 || (T = h + s), K.nodeType === 3 && (h += K.nodeValue.length), (ee = K.firstChild) !== null; )
              V = K, K = ee;
            for (; ; ) {
              if (K === e) break t;
              if (V === n && ++D === l && (k = h), V === u && ++q === s && (T = h), (ee = K.nextSibling) !== null) break;
              K = V, V = K.parentNode;
            }
            K = ee;
          }
          n = k === -1 || T === -1 ? null : { start: k, end: T };
        } else n = null;
      }
      n = n || { start: 0, end: 0 };
    } else n = null;
    for (na = { focusedElem: e, selectionRange: n }, Js = !1, ne = t; ne !== null; ) if (t = ne, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, ne = e;
    else for (; ne !== null; ) {
      t = ne;
      try {
        var re = t.alternate;
        if ((t.flags & 1024) !== 0) switch (t.tag) {
          case 0:
          case 11:
          case 15:
            break;
          case 1:
            if (re !== null) {
              var se = re.memoizedProps, Oe = re.memoizedState, $ = t.stateNode, A = $.getSnapshotBeforeUpdate(t.elementType === t.type ? se : zt(t.type, se), Oe);
              $.__reactInternalSnapshotBeforeUpdate = A;
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
        De(t, t.return, Y);
      }
      if (e = t.sibling, e !== null) {
        e.return = t.return, ne = e;
        break;
      }
      ne = t.return;
    }
    return re = Sd, Sd = !1, re;
  }
  function js(e, t, n) {
    var s = t.updateQueue;
    if (s = s !== null ? s.lastEffect : null, s !== null) {
      var l = s = s.next;
      do {
        if ((l.tag & e) === e) {
          var u = l.destroy;
          l.destroy = void 0, u !== void 0 && Ba(t, n, u);
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
  function kd(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null, kd(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[Qt], delete t[hs], delete t[ia], delete t[Fh], delete t[Wh])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
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
  function Va(e, t, n) {
    var s = e.tag;
    if (s === 5 || s === 6) e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = uo));
    else if (s !== 4 && (e = e.child, e !== null)) for (Va(e, t, n), e = e.sibling; e !== null; ) Va(e, t, n), e = e.sibling;
  }
  function qa(e, t, n) {
    var s = e.tag;
    if (s === 5 || s === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (s !== 4 && (e = e.child, e !== null)) for (qa(e, t, n), e = e.sibling; e !== null; ) qa(e, t, n), e = e.sibling;
  }
  var Xe = null, Ot = !1;
  function kn(e, t, n) {
    for (n = n.child; n !== null; ) Ed(e, t, n), n = n.sibling;
  }
  function Ed(e, t, n) {
    if (qt && typeof qt.onCommitFiberUnmount == "function") try {
      qt.onCommitFiberUnmount(Vs, n);
    } catch {
    }
    switch (n.tag) {
      case 5:
        rt || Nr(n, t);
      case 6:
        var s = Xe, l = Ot;
        Xe = null, kn(e, t, n), Xe = s, Ot = l, Xe !== null && (Ot ? (e = Xe, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : Xe.removeChild(n.stateNode));
        break;
      case 18:
        Xe !== null && (Ot ? (e = Xe, n = n.stateNode, e.nodeType === 8 ? oa(e.parentNode, n) : e.nodeType === 1 && oa(e, n), rs(e)) : oa(Xe, n.stateNode));
        break;
      case 4:
        s = Xe, l = Ot, Xe = n.stateNode.containerInfo, Ot = !0, kn(e, t, n), Xe = s, Ot = l;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (!rt && (s = n.updateQueue, s !== null && (s = s.lastEffect, s !== null))) {
          l = s = s.next;
          do {
            var u = l, h = u.destroy;
            u = u.tag, h !== void 0 && ((u & 2) !== 0 || (u & 4) !== 0) && Ba(n, t, h), l = l.next;
          } while (l !== s);
        }
        kn(e, t, n);
        break;
      case 1:
        if (!rt && (Nr(n, t), s = n.stateNode, typeof s.componentWillUnmount == "function")) try {
          s.props = n.memoizedProps, s.state = n.memoizedState, s.componentWillUnmount();
        } catch (k) {
          De(n, t, k);
        }
        kn(e, t, n);
        break;
      case 21:
        kn(e, t, n);
        break;
      case 22:
        n.mode & 1 ? (rt = (s = rt) || n.memoizedState !== null, kn(e, t, n), rt = s) : kn(e, t, n);
        break;
      default:
        kn(e, t, n);
    }
  }
  function Nd(e) {
    var t = e.updateQueue;
    if (t !== null) {
      e.updateQueue = null;
      var n = e.stateNode;
      n === null && (n = e.stateNode = new sm()), t.forEach(function(s) {
        var l = hm.bind(null, e, s);
        n.has(s) || (n.add(s), s.then(l, l));
      });
    }
  }
  function Ht(e, t) {
    var n = t.deletions;
    if (n !== null) for (var s = 0; s < n.length; s++) {
      var l = n[s];
      try {
        var u = e, h = t, k = h;
        e: for (; k !== null; ) {
          switch (k.tag) {
            case 5:
              Xe = k.stateNode, Ot = !1;
              break e;
            case 3:
              Xe = k.stateNode.containerInfo, Ot = !0;
              break e;
            case 4:
              Xe = k.stateNode.containerInfo, Ot = !0;
              break e;
          }
          k = k.return;
        }
        if (Xe === null) throw Error(i(160));
        Ed(u, h, l), Xe = null, Ot = !1;
        var T = l.alternate;
        T !== null && (T.return = null), l.return = null;
      } catch (D) {
        De(l, t, D);
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
        if (Ht(t, e), Gt(e), s & 4) {
          try {
            js(3, e, e.return), $o(3, e);
          } catch (se) {
            De(e, e.return, se);
          }
          try {
            js(5, e, e.return);
          } catch (se) {
            De(e, e.return, se);
          }
        }
        break;
      case 1:
        Ht(t, e), Gt(e), s & 512 && n !== null && Nr(n, n.return);
        break;
      case 5:
        if (Ht(t, e), Gt(e), s & 512 && n !== null && Nr(n, n.return), e.flags & 32) {
          var l = e.stateNode;
          try {
            qr(l, "");
          } catch (se) {
            De(e, e.return, se);
          }
        }
        if (s & 4 && (l = e.stateNode, l != null)) {
          var u = e.memoizedProps, h = n !== null ? n.memoizedProps : u, k = e.type, T = e.updateQueue;
          if (e.updateQueue = null, T !== null) try {
            k === "input" && u.type === "radio" && u.name != null && nu(l, u), ki(k, h);
            var D = ki(k, u);
            for (h = 0; h < T.length; h += 2) {
              var q = T[h], K = T[h + 1];
              q === "style" ? cu(l, K) : q === "dangerouslySetInnerHTML" ? lu(l, K) : q === "children" ? qr(l, K) : b(l, q, K, D);
            }
            switch (k) {
              case "input":
                gi(l, u);
                break;
              case "textarea":
                ou(l, u);
                break;
              case "select":
                var V = l._wrapperState.wasMultiple;
                l._wrapperState.wasMultiple = !!u.multiple;
                var ee = u.value;
                ee != null ? ir(l, !!u.multiple, ee, !1) : V !== !!u.multiple && (u.defaultValue != null ? ir(
                  l,
                  !!u.multiple,
                  u.defaultValue,
                  !0
                ) : ir(l, !!u.multiple, u.multiple ? [] : "", !1));
            }
            l[hs] = u;
          } catch (se) {
            De(e, e.return, se);
          }
        }
        break;
      case 6:
        if (Ht(t, e), Gt(e), s & 4) {
          if (e.stateNode === null) throw Error(i(162));
          l = e.stateNode, u = e.memoizedProps;
          try {
            l.nodeValue = u;
          } catch (se) {
            De(e, e.return, se);
          }
        }
        break;
      case 3:
        if (Ht(t, e), Gt(e), s & 4 && n !== null && n.memoizedState.isDehydrated) try {
          rs(t.containerInfo);
        } catch (se) {
          De(e, e.return, se);
        }
        break;
      case 4:
        Ht(t, e), Gt(e);
        break;
      case 13:
        Ht(t, e), Gt(e), l = e.child, l.flags & 8192 && (u = l.memoizedState !== null, l.stateNode.isHidden = u, !u || l.alternate !== null && l.alternate.memoizedState !== null || (Ya = ze())), s & 4 && Nd(e);
        break;
      case 22:
        if (q = n !== null && n.memoizedState !== null, e.mode & 1 ? (rt = (D = rt) || q, Ht(t, e), rt = D) : Ht(t, e), Gt(e), s & 8192) {
          if (D = e.memoizedState !== null, (e.stateNode.isHidden = D) && !q && (e.mode & 1) !== 0) for (ne = e, q = e.child; q !== null; ) {
            for (K = ne = q; ne !== null; ) {
              switch (V = ne, ee = V.child, V.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                  js(4, V, V.return);
                  break;
                case 1:
                  Nr(V, V.return);
                  var re = V.stateNode;
                  if (typeof re.componentWillUnmount == "function") {
                    s = V, n = V.return;
                    try {
                      t = s, re.props = t.memoizedProps, re.state = t.memoizedState, re.componentWillUnmount();
                    } catch (se) {
                      De(s, n, se);
                    }
                  }
                  break;
                case 5:
                  Nr(V, V.return);
                  break;
                case 22:
                  if (V.memoizedState !== null) {
                    bd(K);
                    continue;
                  }
              }
              ee !== null ? (ee.return = V, ne = ee) : bd(K);
            }
            q = q.sibling;
          }
          e: for (q = null, K = e; ; ) {
            if (K.tag === 5) {
              if (q === null) {
                q = K;
                try {
                  l = K.stateNode, D ? (u = l.style, typeof u.setProperty == "function" ? u.setProperty("display", "none", "important") : u.display = "none") : (k = K.stateNode, T = K.memoizedProps.style, h = T != null && T.hasOwnProperty("display") ? T.display : null, k.style.display = uu("display", h));
                } catch (se) {
                  De(e, e.return, se);
                }
              }
            } else if (K.tag === 6) {
              if (q === null) try {
                K.stateNode.nodeValue = D ? "" : K.memoizedProps;
              } catch (se) {
                De(e, e.return, se);
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
        Ht(t, e), Gt(e), s & 4 && Nd(e);
        break;
      case 21:
        break;
      default:
        Ht(
          t,
          e
        ), Gt(e);
    }
  }
  function Gt(e) {
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
            s.flags & 32 && (qr(l, ""), s.flags &= -33);
            var u = jd(e);
            qa(e, u, l);
            break;
          case 3:
          case 4:
            var h = s.stateNode.containerInfo, k = jd(e);
            Va(e, k, h);
            break;
          default:
            throw Error(i(161));
        }
      } catch (T) {
        De(e, e.return, T);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function im(e, t, n) {
    ne = e, Rd(e);
  }
  function Rd(e, t, n) {
    for (var s = (e.mode & 1) !== 0; ne !== null; ) {
      var l = ne, u = l.child;
      if (l.tag === 22 && s) {
        var h = l.memoizedState !== null || Po;
        if (!h) {
          var k = l.alternate, T = k !== null && k.memoizedState !== null || rt;
          k = Po;
          var D = rt;
          if (Po = h, (rt = T) && !D) for (ne = l; ne !== null; ) h = ne, T = h.child, h.tag === 22 && h.memoizedState !== null ? Pd(l) : T !== null ? (T.return = h, ne = T) : Pd(l);
          for (; u !== null; ) ne = u, Rd(u), u = u.sibling;
          ne = l, Po = k, rt = D;
        }
        Ad(e);
      } else (l.subtreeFlags & 8772) !== 0 && u !== null ? (u.return = l, ne = u) : Ad(e);
    }
  }
  function Ad(e) {
    for (; ne !== null; ) {
      var t = ne;
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
                var l = t.elementType === t.type ? n.memoizedProps : zt(t.type, n.memoizedProps);
                s.componentDidUpdate(l, n.memoizedState, s.__reactInternalSnapshotBeforeUpdate);
              }
              var u = t.updateQueue;
              u !== null && bc(t, u, s);
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
                bc(t, h, n);
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
              throw Error(i(163));
          }
          rt || t.flags & 512 && Ua(t);
        } catch (V) {
          De(t, t.return, V);
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
  function bd(e) {
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
              $o(4, t);
            } catch (T) {
              De(t, n, T);
            }
            break;
          case 1:
            var s = t.stateNode;
            if (typeof s.componentDidMount == "function") {
              var l = t.return;
              try {
                s.componentDidMount();
              } catch (T) {
                De(t, l, T);
              }
            }
            var u = t.return;
            try {
              Ua(t);
            } catch (T) {
              De(t, u, T);
            }
            break;
          case 5:
            var h = t.return;
            try {
              Ua(t);
            } catch (T) {
              De(t, h, T);
            }
        }
      } catch (T) {
        De(t, t.return, T);
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
  var am = Math.ceil, Mo = O.ReactCurrentDispatcher, Qa = O.ReactCurrentOwner, At = O.ReactCurrentBatchConfig, we = 0, Ke = null, He = null, Ze = 0, kt = 0, Tr = gn(0), We = 0, Es = null, Un = 0, Io = 0, Ka = 0, Ns = null, mt = null, Ya = 0, Rr = 1 / 0, an = null, Lo = !1, Ga = null, Cn = null, Do = !1, jn = null, zo = 0, Ts = 0, Ja = null, Oo = -1, Ho = 0;
  function lt() {
    return (we & 6) !== 0 ? ze() : Oo !== -1 ? Oo : Oo = ze();
  }
  function En(e) {
    return (e.mode & 1) === 0 ? 1 : (we & 2) !== 0 && Ze !== 0 ? Ze & -Ze : Uh.transition !== null ? (Ho === 0 && (Ho = ju()), Ho) : (e = Te, e !== 0 || (e = window.event, e = e === void 0 ? 16 : Mu(e.type)), e);
  }
  function Ft(e, t, n, s) {
    if (50 < Ts) throw Ts = 0, Ja = null, Error(i(185));
    Xr(e, n, s), ((we & 2) === 0 || e !== Ke) && (e === Ke && ((we & 2) === 0 && (Io |= n), We === 4 && Nn(e, Ze)), vt(e, s), n === 1 && we === 0 && (t.mode & 1) === 0 && (Rr = ze() + 500, ho && xn()));
  }
  function vt(e, t) {
    var n = e.callbackNode;
    Up(e, t);
    var s = Ks(e, e === Ke ? Ze : 0);
    if (s === 0) n !== null && Su(n), e.callbackNode = null, e.callbackPriority = 0;
    else if (t = s & -s, e.callbackPriority !== t) {
      if (n != null && Su(n), t === 1) e.tag === 0 ? Bh(Md.bind(null, e)) : _c(Md.bind(null, e)), Oh(function() {
        (we & 6) === 0 && xn();
      }), n = null;
      else {
        switch (Eu(s)) {
          case 1:
            n = Ai;
            break;
          case 4:
            n = ku;
            break;
          case 16:
            n = Us;
            break;
          case 536870912:
            n = Cu;
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
    if (Oo = -1, Ho = 0, (we & 6) !== 0) throw Error(i(327));
    var n = e.callbackNode;
    if (Ar() && e.callbackNode !== n) return null;
    var s = Ks(e, e === Ke ? Ze : 0);
    if (s === 0) return null;
    if ((s & 30) !== 0 || (s & e.expiredLanes) !== 0 || t) t = Fo(e, s);
    else {
      t = s;
      var l = we;
      we |= 2;
      var u = Ld();
      (Ke !== e || Ze !== t) && (an = null, Rr = ze() + 500, qn(e, t));
      do
        try {
          cm();
          break;
        } catch (k) {
          Id(e, k);
        }
      while (!0);
      ma(), Mo.current = u, we = l, He !== null ? t = 0 : (Ke = null, Ze = 0, t = We);
    }
    if (t !== 0) {
      if (t === 2 && (l = bi(e), l !== 0 && (s = l, t = Xa(e, l))), t === 1) throw n = Es, qn(e, 0), Nn(e, s), vt(e, ze()), n;
      if (t === 6) Nn(e, s);
      else {
        if (l = e.current.alternate, (s & 30) === 0 && !lm(l) && (t = Fo(e, s), t === 2 && (u = bi(e), u !== 0 && (s = u, t = Xa(e, u))), t === 1)) throw n = Es, qn(e, 0), Nn(e, s), vt(e, ze()), n;
        switch (e.finishedWork = l, e.finishedLanes = s, t) {
          case 0:
          case 1:
            throw Error(i(345));
          case 2:
            Qn(e, mt, an);
            break;
          case 3:
            if (Nn(e, s), (s & 130023424) === s && (t = Ya + 500 - ze(), 10 < t)) {
              if (Ks(e, 0) !== 0) break;
              if (l = e.suspendedLanes, (l & s) !== s) {
                lt(), e.pingedLanes |= e.suspendedLanes & l;
                break;
              }
              e.timeoutHandle = sa(Qn.bind(null, e, mt, an), t);
              break;
            }
            Qn(e, mt, an);
            break;
          case 4:
            if (Nn(e, s), (s & 4194240) === s) break;
            for (t = e.eventTimes, l = -1; 0 < s; ) {
              var h = 31 - It(s);
              u = 1 << h, h = t[h], h > l && (l = h), s &= ~u;
            }
            if (s = l, s = ze() - s, s = (120 > s ? 120 : 480 > s ? 480 : 1080 > s ? 1080 : 1920 > s ? 1920 : 3e3 > s ? 3e3 : 4320 > s ? 4320 : 1960 * am(s / 1960)) - s, 10 < s) {
              e.timeoutHandle = sa(Qn.bind(null, e, mt, an), s);
              break;
            }
            Qn(e, mt, an);
            break;
          case 5:
            Qn(e, mt, an);
            break;
          default:
            throw Error(i(329));
        }
      }
    }
    return vt(e, ze()), e.callbackNode === n ? $d.bind(null, e) : null;
  }
  function Xa(e, t) {
    var n = Ns;
    return e.current.memoizedState.isDehydrated && (qn(e, t).flags |= 256), e = Fo(e, t), e !== 2 && (t = mt, mt = n, t !== null && Za(t)), e;
  }
  function Za(e) {
    mt === null ? mt = e : mt.push.apply(mt, e);
  }
  function lm(e) {
    for (var t = e; ; ) {
      if (t.flags & 16384) {
        var n = t.updateQueue;
        if (n !== null && (n = n.stores, n !== null)) for (var s = 0; s < n.length; s++) {
          var l = n[s], u = l.getSnapshot;
          l = l.value;
          try {
            if (!Lt(u(), l)) return !1;
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
  function Nn(e, t) {
    for (t &= ~Ka, t &= ~Io, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
      var n = 31 - It(t), s = 1 << n;
      e[n] = -1, t &= ~s;
    }
  }
  function Md(e) {
    if ((we & 6) !== 0) throw Error(i(327));
    Ar();
    var t = Ks(e, 0);
    if ((t & 1) === 0) return vt(e, ze()), null;
    var n = Fo(e, t);
    if (e.tag !== 0 && n === 2) {
      var s = bi(e);
      s !== 0 && (t = s, n = Xa(e, s));
    }
    if (n === 1) throw n = Es, qn(e, 0), Nn(e, t), vt(e, ze()), n;
    if (n === 6) throw Error(i(345));
    return e.finishedWork = e.current.alternate, e.finishedLanes = t, Qn(e, mt, an), vt(e, ze()), null;
  }
  function el(e, t) {
    var n = we;
    we |= 1;
    try {
      return e(t);
    } finally {
      we = n, we === 0 && (Rr = ze() + 500, ho && xn());
    }
  }
  function Vn(e) {
    jn !== null && jn.tag === 0 && (we & 6) === 0 && Ar();
    var t = we;
    we |= 1;
    var n = At.transition, s = Te;
    try {
      if (At.transition = null, Te = 1, e) return e();
    } finally {
      Te = s, At.transition = n, we = t, (we & 6) === 0 && xn();
    }
  }
  function tl() {
    kt = Tr.current, Pe(Tr);
  }
  function qn(e, t) {
    e.finishedWork = null, e.finishedLanes = 0;
    var n = e.timeoutHandle;
    if (n !== -1 && (e.timeoutHandle = -1, zh(n)), He !== null) for (n = He.return; n !== null; ) {
      var s = n;
      switch (ca(s), s.tag) {
        case 1:
          s = s.type.childContextTypes, s != null && fo();
          break;
        case 3:
          jr(), Pe(ft), Pe(et), ka();
          break;
        case 5:
          wa(s);
          break;
        case 4:
          jr();
          break;
        case 13:
          Pe(Ie);
          break;
        case 19:
          Pe(Ie);
          break;
        case 10:
          va(s.type._context);
          break;
        case 22:
        case 23:
          tl();
      }
      n = n.return;
    }
    if (Ke = e, He = e = Tn(e.current, null), Ze = kt = t, We = 0, Es = null, Ka = Io = Un = 0, mt = Ns = null, Fn !== null) {
      for (t = 0; t < Fn.length; t++) if (n = Fn[t], s = n.interleaved, s !== null) {
        n.interleaved = null;
        var l = s.next, u = n.pending;
        if (u !== null) {
          var h = u.next;
          u.next = l, s.next = h;
        }
        n.pending = s;
      }
      Fn = null;
    }
    return e;
  }
  function Id(e, t) {
    do {
      var n = He;
      try {
        if (ma(), Co.current = To, jo) {
          for (var s = Le.memoizedState; s !== null; ) {
            var l = s.queue;
            l !== null && (l.pending = null), s = s.next;
          }
          jo = !1;
        }
        if (Bn = 0, Qe = Fe = Le = null, xs = !1, ws = 0, Qa.current = null, n === null || n.return === null) {
          We = 1, Es = t, He = null;
          break;
        }
        e: {
          var u = e, h = n.return, k = n, T = t;
          if (t = Ze, k.flags |= 32768, T !== null && typeof T == "object" && typeof T.then == "function") {
            var D = T, q = k, K = q.tag;
            if ((q.mode & 1) === 0 && (K === 0 || K === 11 || K === 15)) {
              var V = q.alternate;
              V ? (q.updateQueue = V.updateQueue, q.memoizedState = V.memoizedState, q.lanes = V.lanes) : (q.updateQueue = null, q.memoizedState = null);
            }
            var ee = id(h);
            if (ee !== null) {
              ee.flags &= -257, ad(ee, h, k, u, t), ee.mode & 1 && od(u, D, t), t = ee, T = D;
              var re = t.updateQueue;
              if (re === null) {
                var se = /* @__PURE__ */ new Set();
                se.add(T), t.updateQueue = se;
              } else re.add(T);
              break e;
            } else {
              if ((t & 1) === 0) {
                od(u, D, t), nl();
                break e;
              }
              T = Error(i(426));
            }
          } else if ($e && k.mode & 1) {
            var Oe = id(h);
            if (Oe !== null) {
              (Oe.flags & 65536) === 0 && (Oe.flags |= 256), ad(Oe, h, k, u, t), pa(Er(T, k));
              break e;
            }
          }
          u = T = Er(T, k), We !== 4 && (We = 2), Ns === null ? Ns = [u] : Ns.push(u), u = h;
          do {
            switch (u.tag) {
              case 3:
                u.flags |= 65536, t &= -t, u.lanes |= t;
                var $ = rd(u, T, t);
                Ac(u, $);
                break e;
              case 1:
                k = T;
                var A = u.type, I = u.stateNode;
                if ((u.flags & 128) === 0 && (typeof A.getDerivedStateFromError == "function" || I !== null && typeof I.componentDidCatch == "function" && (Cn === null || !Cn.has(I)))) {
                  u.flags |= 65536, t &= -t, u.lanes |= t;
                  var Y = sd(u, k, t);
                  Ac(u, Y);
                  break e;
                }
            }
            u = u.return;
          } while (u !== null);
        }
        zd(n);
      } catch (oe) {
        t = oe, He === n && n !== null && (He = n = n.return);
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
    (We === 0 || We === 3 || We === 2) && (We = 4), Ke === null || (Un & 268435455) === 0 && (Io & 268435455) === 0 || Nn(Ke, Ze);
  }
  function Fo(e, t) {
    var n = we;
    we |= 2;
    var s = Ld();
    (Ke !== e || Ze !== t) && (an = null, qn(e, t));
    do
      try {
        um();
        break;
      } catch (l) {
        Id(e, l);
      }
    while (!0);
    if (ma(), we = n, Mo.current = s, He !== null) throw Error(i(261));
    return Ke = null, Ze = 0, We;
  }
  function um() {
    for (; He !== null; ) Dd(He);
  }
  function cm() {
    for (; He !== null && !Ip(); ) Dd(He);
  }
  function Dd(e) {
    var t = Fd(e.alternate, e, kt);
    e.memoizedProps = e.pendingProps, t === null ? zd(e) : He = t, Qa.current = null;
  }
  function zd(e) {
    var t = e;
    do {
      var n = t.alternate;
      if (e = t.return, (t.flags & 32768) === 0) {
        if (n = nm(n, t, kt), n !== null) {
          He = n;
          return;
        }
      } else {
        if (n = rm(n, t), n !== null) {
          n.flags &= 32767, He = n;
          return;
        }
        if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
        else {
          We = 6, He = null;
          return;
        }
      }
      if (t = t.sibling, t !== null) {
        He = t;
        return;
      }
      He = t = e;
    } while (t !== null);
    We === 0 && (We = 5);
  }
  function Qn(e, t, n) {
    var s = Te, l = At.transition;
    try {
      At.transition = null, Te = 1, dm(e, t, n, s);
    } finally {
      At.transition = l, Te = s;
    }
    return null;
  }
  function dm(e, t, n, s) {
    do
      Ar();
    while (jn !== null);
    if ((we & 6) !== 0) throw Error(i(327));
    n = e.finishedWork;
    var l = e.finishedLanes;
    if (n === null) return null;
    if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(i(177));
    e.callbackNode = null, e.callbackPriority = 0;
    var u = n.lanes | n.childLanes;
    if (Vp(e, u), e === Ke && (He = Ke = null, Ze = 0), (n.subtreeFlags & 2064) === 0 && (n.flags & 2064) === 0 || Do || (Do = !0, Wd(Us, function() {
      return Ar(), null;
    })), u = (n.flags & 15990) !== 0, (n.subtreeFlags & 15990) !== 0 || u) {
      u = At.transition, At.transition = null;
      var h = Te;
      Te = 1;
      var k = we;
      we |= 4, Qa.current = null, om(e, n), Td(n, e), bh(na), Js = !!ta, na = ta = null, e.current = n, im(n), Lp(), we = k, Te = h, At.transition = u;
    } else e.current = n;
    if (Do && (Do = !1, jn = e, zo = l), u = e.pendingLanes, u === 0 && (Cn = null), Op(n.stateNode), vt(e, ze()), t !== null) for (s = e.onRecoverableError, n = 0; n < t.length; n++) l = t[n], s(l.value, { componentStack: l.stack, digest: l.digest });
    if (Lo) throw Lo = !1, e = Ga, Ga = null, e;
    return (zo & 1) !== 0 && e.tag !== 0 && Ar(), u = e.pendingLanes, (u & 1) !== 0 ? e === Ja ? Ts++ : (Ts = 0, Ja = e) : Ts = 0, xn(), null;
  }
  function Ar() {
    if (jn !== null) {
      var e = Eu(zo), t = At.transition, n = Te;
      try {
        if (At.transition = null, Te = 16 > e ? 16 : e, jn === null) var s = !1;
        else {
          if (e = jn, jn = null, zo = 0, (we & 6) !== 0) throw Error(i(331));
          var l = we;
          for (we |= 4, ne = e.current; ne !== null; ) {
            var u = ne, h = u.child;
            if ((ne.flags & 16) !== 0) {
              var k = u.deletions;
              if (k !== null) {
                for (var T = 0; T < k.length; T++) {
                  var D = k[T];
                  for (ne = D; ne !== null; ) {
                    var q = ne;
                    switch (q.tag) {
                      case 0:
                      case 11:
                      case 15:
                        js(8, q, u);
                    }
                    var K = q.child;
                    if (K !== null) K.return = q, ne = K;
                    else for (; ne !== null; ) {
                      q = ne;
                      var V = q.sibling, ee = q.return;
                      if (kd(q), q === D) {
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
                var re = u.alternate;
                if (re !== null) {
                  var se = re.child;
                  if (se !== null) {
                    re.child = null;
                    do {
                      var Oe = se.sibling;
                      se.sibling = null, se = Oe;
                    } while (se !== null);
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
                  js(9, u, u.return);
              }
              var $ = u.sibling;
              if ($ !== null) {
                $.return = u.return, ne = $;
                break e;
              }
              ne = u.return;
            }
          }
          var A = e.current;
          for (ne = A; ne !== null; ) {
            h = ne;
            var I = h.child;
            if ((h.subtreeFlags & 2064) !== 0 && I !== null) I.return = h, ne = I;
            else e: for (h = A; ne !== null; ) {
              if (k = ne, (k.flags & 2048) !== 0) try {
                switch (k.tag) {
                  case 0:
                  case 11:
                  case 15:
                    $o(9, k);
                }
              } catch (oe) {
                De(k, k.return, oe);
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
          if (we = l, xn(), qt && typeof qt.onPostCommitFiberRoot == "function") try {
            qt.onPostCommitFiberRoot(Vs, e);
          } catch {
          }
          s = !0;
        }
        return s;
      } finally {
        Te = n, At.transition = t;
      }
    }
    return !1;
  }
  function Od(e, t, n) {
    t = Er(n, t), t = rd(e, t, 1), e = Sn(e, t, 1), t = lt(), e !== null && (Xr(e, 1, t), vt(e, t));
  }
  function De(e, t, n) {
    if (e.tag === 3) Od(e, e, n);
    else for (; t !== null; ) {
      if (t.tag === 3) {
        Od(t, e, n);
        break;
      } else if (t.tag === 1) {
        var s = t.stateNode;
        if (typeof t.type.getDerivedStateFromError == "function" || typeof s.componentDidCatch == "function" && (Cn === null || !Cn.has(s))) {
          e = Er(n, e), e = sd(t, e, 1), t = Sn(t, e, 1), e = lt(), t !== null && (Xr(t, 1, e), vt(t, e));
          break;
        }
      }
      t = t.return;
    }
  }
  function fm(e, t, n) {
    var s = e.pingCache;
    s !== null && s.delete(t), t = lt(), e.pingedLanes |= e.suspendedLanes & n, Ke === e && (Ze & n) === n && (We === 4 || We === 3 && (Ze & 130023424) === Ze && 500 > ze() - Ya ? qn(e, 0) : Ka |= n), vt(e, t);
  }
  function Hd(e, t) {
    t === 0 && ((e.mode & 1) === 0 ? t = 1 : (t = Qs, Qs <<= 1, (Qs & 130023424) === 0 && (Qs = 4194304)));
    var n = lt();
    e = rn(e, t), e !== null && (Xr(e, t, n), vt(e, n));
  }
  function pm(e) {
    var t = e.memoizedState, n = 0;
    t !== null && (n = t.retryLane), Hd(e, n);
  }
  function hm(e, t) {
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
    if (e !== null) if (e.memoizedProps !== t.pendingProps || ft.current) ht = !0;
    else {
      if ((e.lanes & n) === 0 && (t.flags & 128) === 0) return ht = !1, tm(e, t, n);
      ht = (e.flags & 131072) !== 0;
    }
    else ht = !1, $e && (t.flags & 1048576) !== 0 && xc(t, vo, t.index);
    switch (t.lanes = 0, t.tag) {
      case 2:
        var s = t.type;
        bo(e, t), e = t.pendingProps;
        var l = gr(t, et.current);
        Cr(t, n), l = Ea(null, t, s, e, l, n);
        var u = Na();
        return t.flags |= 1, typeof l == "object" && l !== null && typeof l.render == "function" && l.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, pt(s) ? (u = !0, po(t)) : u = !1, t.memoizedState = l.state !== null && l.state !== void 0 ? l.state : null, _a(t), l.updater = Ro, t.stateNode = l, l._reactInternals = t, $a(t, s, e, n), t = Da(null, t, s, !0, u, n)) : (t.tag = 0, $e && u && ua(t), at(null, t, l, n), t = t.child), t;
      case 16:
        s = t.elementType;
        e: {
          switch (bo(e, t), e = t.pendingProps, l = s._init, s = l(s._payload), t.type = s, l = t.tag = vm(s), e = zt(s, e), l) {
            case 0:
              t = La(null, t, s, e, n);
              break e;
            case 1:
              t = pd(null, t, s, e, n);
              break e;
            case 11:
              t = ld(null, t, s, e, n);
              break e;
            case 14:
              t = ud(null, t, s, zt(s.type, e), n);
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
        return s = t.type, l = t.pendingProps, l = t.elementType === s ? l : zt(s, l), La(e, t, s, l, n);
      case 1:
        return s = t.type, l = t.pendingProps, l = t.elementType === s ? l : zt(s, l), pd(e, t, s, l, n);
      case 3:
        e: {
          if (hd(t), e === null) throw Error(i(387));
          s = t.pendingProps, u = t.memoizedState, l = u.element, Rc(e, t), So(t, s, null, n);
          var h = t.memoizedState;
          if (s = h.element, u.isDehydrated) if (u = { element: s, isDehydrated: !1, cache: h.cache, pendingSuspenseBoundaries: h.pendingSuspenseBoundaries, transitions: h.transitions }, t.updateQueue.baseState = u, t.memoizedState = u, t.flags & 256) {
            l = Er(Error(i(423)), t), t = md(e, t, s, n, l);
            break e;
          } else if (s !== l) {
            l = Er(Error(i(424)), t), t = md(e, t, s, n, l);
            break e;
          } else for (St = yn(t.stateNode.containerInfo.firstChild), wt = t, $e = !0, Dt = null, n = Nc(t, null, s, n), t.child = n; n; ) n.flags = n.flags & -3 | 4096, n = n.sibling;
          else {
            if (wr(), s === l) {
              t = on(e, t, n);
              break e;
            }
            at(e, t, s, n);
          }
          t = t.child;
        }
        return t;
      case 5:
        return Pc(t), e === null && fa(t), s = t.type, l = t.pendingProps, u = e !== null ? e.memoizedProps : null, h = l.children, ra(s, l) ? h = null : u !== null && ra(s, u) && (t.flags |= 32), fd(e, t), at(e, t, h, n), t.child;
      case 6:
        return e === null && fa(t), null;
      case 13:
        return vd(e, t, n);
      case 4:
        return xa(t, t.stateNode.containerInfo), s = t.pendingProps, e === null ? t.child = Sr(t, null, s, n) : at(e, t, s, n), t.child;
      case 11:
        return s = t.type, l = t.pendingProps, l = t.elementType === s ? l : zt(s, l), ld(e, t, s, l, n);
      case 7:
        return at(e, t, t.pendingProps, n), t.child;
      case 8:
        return at(e, t, t.pendingProps.children, n), t.child;
      case 12:
        return at(e, t, t.pendingProps.children, n), t.child;
      case 10:
        e: {
          if (s = t.type._context, l = t.pendingProps, u = t.memoizedProps, h = l.value, Ae(_o, s._currentValue), s._currentValue = h, u !== null) if (Lt(u.value, h)) {
            if (u.children === l.children && !ft.current) {
              t = on(e, t, n);
              break e;
            }
          } else for (u = t.child, u !== null && (u.return = t); u !== null; ) {
            var k = u.dependencies;
            if (k !== null) {
              h = u.child;
              for (var T = k.firstContext; T !== null; ) {
                if (T.context === s) {
                  if (u.tag === 1) {
                    T = sn(-1, n & -n), T.tag = 2;
                    var D = u.updateQueue;
                    if (D !== null) {
                      D = D.shared;
                      var q = D.pending;
                      q === null ? T.next = T : (T.next = q.next, q.next = T), D.pending = T;
                    }
                  }
                  u.lanes |= n, T = u.alternate, T !== null && (T.lanes |= n), ya(
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
              if (h = u.return, h === null) throw Error(i(341));
              h.lanes |= n, k = h.alternate, k !== null && (k.lanes |= n), ya(h, n, t), h = u.sibling;
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
          at(e, t, l.children, n), t = t.child;
        }
        return t;
      case 9:
        return l = t.type, s = t.pendingProps.children, Cr(t, n), l = Tt(l), s = s(l), t.flags |= 1, at(e, t, s, n), t.child;
      case 14:
        return s = t.type, l = zt(s, t.pendingProps), l = zt(s.type, l), ud(e, t, s, l, n);
      case 15:
        return cd(e, t, t.type, t.pendingProps, n);
      case 17:
        return s = t.type, l = t.pendingProps, l = t.elementType === s ? l : zt(s, l), bo(e, t), t.tag = 1, pt(s) ? (e = !0, po(t)) : e = !1, Cr(t, n), td(t, s, l), $a(t, s, l, n), Da(null, t, s, !0, e, n);
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
  function mm(e, t, n, s) {
    this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = s, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function bt(e, t, n, s) {
    return new mm(e, t, n, s);
  }
  function rl(e) {
    return e = e.prototype, !(!e || !e.isReactComponent);
  }
  function vm(e) {
    if (typeof e == "function") return rl(e) ? 1 : 0;
    if (e != null) {
      if (e = e.$$typeof, e === ge) return 11;
      if (e === ve) return 14;
    }
    return 2;
  }
  function Tn(e, t) {
    var n = e.alternate;
    return n === null ? (n = bt(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n;
  }
  function Wo(e, t, n, s, l, u) {
    var h = 2;
    if (s = e, typeof e == "function") rl(e) && (h = 1);
    else if (typeof e == "string") h = 5;
    else e: switch (e) {
      case Z:
        return Kn(n.children, l, u, t);
      case U:
        h = 8, l |= 8;
        break;
      case G:
        return e = bt(12, n, t, l | 2), e.elementType = G, e.lanes = u, e;
      case de:
        return e = bt(13, n, t, l), e.elementType = de, e.lanes = u, e;
      case pe:
        return e = bt(19, n, t, l), e.elementType = pe, e.lanes = u, e;
      case W:
        return Bo(n, l, u, t);
      default:
        if (typeof e == "object" && e !== null) switch (e.$$typeof) {
          case J:
            h = 10;
            break e;
          case te:
            h = 9;
            break e;
          case ge:
            h = 11;
            break e;
          case ve:
            h = 14;
            break e;
          case je:
            h = 16, s = null;
            break e;
        }
        throw Error(i(130, e == null ? e : typeof e, ""));
    }
    return t = bt(h, n, t, l), t.elementType = e, t.type = s, t.lanes = u, t;
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
  function ym(e, t, n, s, l) {
    this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Pi(0), this.expirationTimes = Pi(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Pi(0), this.identifierPrefix = s, this.onRecoverableError = l, this.mutableSourceEagerHydrationData = null;
  }
  function il(e, t, n, s, l, u, h, k, T) {
    return e = new ym(e, t, n, k, T), t === 1 ? (t = 1, u === !0 && (t |= 8)) : t = 0, u = bt(3, null, null, t), e.current = u, u.stateNode = e, u.memoizedState = { element: s, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }, _a(u), e;
  }
  function gm(e, t, n) {
    var s = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: M, key: s == null ? null : "" + s, children: e, containerInfo: t, implementation: n };
  }
  function Bd(e) {
    if (!e) return _n;
    e = e._reactInternals;
    e: {
      if (Ln(e) !== e || e.tag !== 1) throw Error(i(170));
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
      throw Error(i(171));
    }
    if (e.tag === 1) {
      var n = e.type;
      if (pt(n)) return yc(e, n, t);
    }
    return t;
  }
  function Ud(e, t, n, s, l, u, h, k, T) {
    return e = il(n, s, !0, e, l, u, h, k, T), e.context = Bd(null), n = e.current, s = lt(), l = En(n), u = sn(s, l), u.callback = t ?? null, Sn(n, u, l), e.current.lanes = l, Xr(e, l, s), vt(e, s), e;
  }
  function Uo(e, t, n, s) {
    var l = t.current, u = lt(), h = En(l);
    return n = Bd(n), t.context === null ? t.context = n : t.pendingContext = n, t = sn(u, h), t.payload = { element: e }, s = s === void 0 ? null : s, s !== null && (t.callback = s), e = Sn(l, t, h), e !== null && (Ft(e, l, h, u), wo(e, l, h)), h;
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
  function al(e, t) {
    Vd(e, t), (e = e.alternate) && Vd(e, t);
  }
  function _m() {
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
    if (t === null) throw Error(i(409));
    Uo(e, t, null, null);
  }, qo.prototype.unmount = ll.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
      this._internalRoot = null;
      var t = e.containerInfo;
      Vn(function() {
        Uo(null, e, null, null);
      }), t[Zt] = null;
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
      hn.splice(n, 0, e), n === 0 && Pu(e);
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
  function xm(e, t, n, s, l) {
    if (l) {
      if (typeof s == "function") {
        var u = s;
        s = function() {
          var D = Vo(h);
          u.call(D);
        };
      }
      var h = Ud(t, s, e, 0, null, !1, !1, "", Qd);
      return e._reactRootContainer = h, e[Zt] = h.current, fs(e.nodeType === 8 ? e.parentNode : e), Vn(), h;
    }
    for (; l = e.lastChild; ) e.removeChild(l);
    if (typeof s == "function") {
      var k = s;
      s = function() {
        var D = Vo(T);
        k.call(D);
      };
    }
    var T = il(e, 0, !1, null, null, !1, !1, "", Qd);
    return e._reactRootContainer = T, e[Zt] = T.current, fs(e.nodeType === 8 ? e.parentNode : e), Vn(function() {
      Uo(t, T, n, s);
    }), T;
  }
  function Ko(e, t, n, s, l) {
    var u = n._reactRootContainer;
    if (u) {
      var h = u;
      if (typeof l == "function") {
        var k = l;
        l = function() {
          var T = Vo(h);
          k.call(T);
        };
      }
      Uo(t, h, e, l);
    } else h = xm(n, t, e, l, s);
    return Vo(h);
  }
  Nu = function(e) {
    switch (e.tag) {
      case 3:
        var t = e.stateNode;
        if (t.current.memoizedState.isDehydrated) {
          var n = Jr(t.pendingLanes);
          n !== 0 && ($i(t, n | 1), vt(t, ze()), (we & 6) === 0 && (Rr = ze() + 500, xn()));
        }
        break;
      case 13:
        Vn(function() {
          var s = rn(e, 1);
          if (s !== null) {
            var l = lt();
            Ft(s, e, 1, l);
          }
        }), al(e, 1);
    }
  }, Mi = function(e) {
    if (e.tag === 13) {
      var t = rn(e, 134217728);
      if (t !== null) {
        var n = lt();
        Ft(t, e, 134217728, n);
      }
      al(e, 134217728);
    }
  }, Tu = function(e) {
    if (e.tag === 13) {
      var t = En(e), n = rn(e, t);
      if (n !== null) {
        var s = lt();
        Ft(n, e, t, s);
      }
      al(e, t);
    }
  }, Ru = function() {
    return Te;
  }, Au = function(e, t) {
    var n = Te;
    try {
      return Te = e, t();
    } finally {
      Te = n;
    }
  }, Ei = function(e, t, n) {
    switch (t) {
      case "input":
        if (gi(e, n), t = n.name, n.type === "radio" && t != null) {
          for (n = e; n.parentNode; ) n = n.parentNode;
          for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
            var s = n[t];
            if (s !== e && s.form === e.form) {
              var l = co(s);
              if (!l) throw Error(i(90));
              Ur(s), gi(s, l);
            }
          }
        }
        break;
      case "textarea":
        ou(e, n);
        break;
      case "select":
        t = n.value, t != null && ir(e, !!n.multiple, t, !1);
    }
  }, hu = el, mu = Vn;
  var wm = { usingClientEntryPoint: !1, Events: [ms, vr, co, fu, pu, el] }, Rs = { findFiberByHostInstance: Dn, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, Sm = { bundleType: Rs.bundleType, version: Rs.version, rendererPackageName: Rs.rendererPackageName, rendererConfig: Rs.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: O.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
    return e = _u(e), e === null ? null : e.stateNode;
  }, findFiberByHostInstance: Rs.findFiberByHostInstance || _m, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Yo = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Yo.isDisabled && Yo.supportsFiber) try {
      Vs = Yo.inject(Sm), qt = Yo;
    } catch {
    }
  }
  return yt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = wm, yt.createPortal = function(e, t) {
    var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!ul(t)) throw Error(i(200));
    return gm(e, t, null, n);
  }, yt.createRoot = function(e, t) {
    if (!ul(e)) throw Error(i(299));
    var n = !1, s = "", l = qd;
    return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (s = t.identifierPrefix), t.onRecoverableError !== void 0 && (l = t.onRecoverableError)), t = il(e, 1, !1, null, null, n, !1, s, l), e[Zt] = t.current, fs(e.nodeType === 8 ? e.parentNode : e), new ll(t);
  }, yt.findDOMNode = function(e) {
    if (e == null) return null;
    if (e.nodeType === 1) return e;
    var t = e._reactInternals;
    if (t === void 0)
      throw typeof e.render == "function" ? Error(i(188)) : (e = Object.keys(e).join(","), Error(i(268, e)));
    return e = _u(t), e = e === null ? null : e.stateNode, e;
  }, yt.flushSync = function(e) {
    return Vn(e);
  }, yt.hydrate = function(e, t, n) {
    if (!Qo(t)) throw Error(i(200));
    return Ko(null, e, t, !0, n);
  }, yt.hydrateRoot = function(e, t, n) {
    if (!ul(e)) throw Error(i(405));
    var s = n != null && n.hydratedSources || null, l = !1, u = "", h = qd;
    if (n != null && (n.unstable_strictMode === !0 && (l = !0), n.identifierPrefix !== void 0 && (u = n.identifierPrefix), n.onRecoverableError !== void 0 && (h = n.onRecoverableError)), t = Ud(t, null, e, 1, n ?? null, l, !1, u, h), e[Zt] = t.current, fs(e), s) for (e = 0; e < s.length; e++) n = s[e], l = n._getVersion, l = l(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, l] : t.mutableSourceEagerHydrationData.push(
      n,
      l
    );
    return new qo(t);
  }, yt.render = function(e, t, n) {
    if (!Qo(t)) throw Error(i(200));
    return Ko(null, e, t, !1, n);
  }, yt.unmountComponentAtNode = function(e) {
    if (!Qo(e)) throw Error(i(40));
    return e._reactRootContainer ? (Vn(function() {
      Ko(null, null, e, !1, function() {
        e._reactRootContainer = null, e[Zt] = null;
      });
    }), !0) : !1;
  }, yt.unstable_batchedUpdates = el, yt.unstable_renderSubtreeIntoContainer = function(e, t, n, s) {
    if (!Qo(n)) throw Error(i(200));
    if (e == null || e._reactInternals === void 0) throw Error(i(38));
    return Ko(e, t, n, !1, s);
  }, yt.version = "18.3.1-next-f1338f8080-20240426", yt;
}
var tf;
function bf() {
  if (tf) return fl.exports;
  tf = 1;
  function r() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r);
      } catch (a) {
        console.error(a);
      }
  }
  return r(), fl.exports = bm(), fl.exports;
}
var nf;
function Pm() {
  if (nf) return Go;
  nf = 1;
  var r = bf();
  return Go.createRoot = r.createRoot, Go.hydrateRoot = r.hydrateRoot, Go;
}
var $m = Pm();
const Mm = /* @__PURE__ */ Rf($m);
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
function Im(r = {}) {
  function a(d, f) {
    let {
      pathname: p = "/",
      search: m = "",
      hash: g = ""
    } = rr(d.location.hash.substring(1));
    return !p.startsWith("/") && !p.startsWith(".") && (p = "/" + p), jl(
      "",
      { pathname: p, search: m, hash: g },
      // state defaults to `null` because `window.history.state` does
      f.state && f.state.usr || null,
      f.state && f.state.key || "default"
    );
  }
  function i(d, f) {
    let p = d.document.querySelector("base"), m = "";
    if (p && p.getAttribute("href")) {
      let g = d.location.href, w = g.indexOf("#");
      m = w === -1 ? g : g.slice(0, w);
    }
    return m + "#" + (typeof f == "string" ? f : zs(f));
  }
  function c(d, f) {
    Mt(
      d.pathname.charAt(0) === "/",
      `relative pathnames are not supported in hash history.push(${JSON.stringify(
        f
      )})`
    );
  }
  return Dm(
    a,
    i,
    c,
    r
  );
}
function Me(r, a) {
  if (r === !1 || r === null || typeof r > "u")
    throw new Error(a);
}
function Mt(r, a) {
  if (!r) {
    typeof console < "u" && console.warn(a);
    try {
      throw new Error(a);
    } catch {
    }
  }
}
function Lm() {
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
function jl(r, a, i = null, c, d) {
  return {
    pathname: typeof r == "string" ? r : r.pathname,
    search: "",
    hash: "",
    ...typeof a == "string" ? rr(a) : a,
    state: i,
    // TODO: This could be cleaned up.  push/replace should probably just take
    // full Locations now and avoid the need to run through this flow at all
    // But that's a pretty big refactor to the current test suite so going to
    // keep as is for the time being and just let any incoming keys take precedence
    key: a && a.key || c || Lm(),
    mask: d
  };
}
function zs({
  pathname: r = "/",
  search: a = "",
  hash: i = ""
}) {
  return a && a !== "?" && (r += a.charAt(0) === "?" ? a : "?" + a), i && i !== "#" && (r += i.charAt(0) === "#" ? i : "#" + i), r;
}
function rr(r) {
  let a = {};
  if (r) {
    let i = r.indexOf("#");
    i >= 0 && (a.hash = r.substring(i), r = r.substring(0, i));
    let c = r.indexOf("?");
    c >= 0 && (a.search = r.substring(c), r = r.substring(0, c)), r && (a.pathname = r);
  }
  return a;
}
function Dm(r, a, i, c = {}) {
  let { window: d = document.defaultView, v5Compat: f = !1 } = c, p = d.history, m = "POP", g = null, w = y();
  w == null && (w = 0, p.replaceState({ ...p.state, idx: w }, ""));
  function y() {
    return (p.state || { idx: null }).idx;
  }
  function x() {
    m = "POP";
    let j = y(), P = j == null ? null : j - w;
    w = j, g && g({ action: m, location: E.location, delta: P });
  }
  function S(j, P) {
    m = "PUSH";
    let F = sf(j) ? j : jl(E.location, j, P);
    i && i(F, j), w = y() + 1;
    let b = of(F, w), O = E.createHref(F.mask || F);
    try {
      p.pushState(b, "", O);
    } catch (B) {
      if (B instanceof DOMException && B.name === "DataCloneError")
        throw B;
      d.location.assign(O);
    }
    f && g && g({ action: m, location: E.location, delta: 1 });
  }
  function C(j, P) {
    m = "REPLACE";
    let F = sf(j) ? j : jl(E.location, j, P);
    i && i(F, j), w = y();
    let b = of(F, w), O = E.createHref(F.mask || F);
    p.replaceState(b, "", O), f && g && g({ action: m, location: E.location, delta: 0 });
  }
  function N(j) {
    return zm(d, j);
  }
  let E = {
    get action() {
      return m;
    },
    get location() {
      return r(d, p);
    },
    listen(j) {
      if (g)
        throw new Error("A history only accepts one active listener");
      return d.addEventListener(rf, x), g = j, () => {
        d.removeEventListener(rf, x), g = null;
      };
    },
    createHref(j) {
      return a(d, j);
    },
    createURL: N,
    encodeLocation(j) {
      let P = N(j);
      return {
        pathname: P.pathname,
        search: P.search,
        hash: P.hash
      };
    },
    push: S,
    replace: C,
    go(j) {
      return p.go(j);
    }
  };
  return E;
}
function zm(r, a, i = !1) {
  let c = "http://localhost";
  r && (c = r.location.origin !== "null" ? r.location.origin : r.location.href), Me(c, "No window.location.(origin|href) available to create URL");
  let d = typeof a == "string" ? a : zs(a);
  return d = d.replace(/ $/, "%20"), !i && d.startsWith("//") && (d = c + d), new URL(d, c);
}
function Pf(r, a, i = "/") {
  return Om(r, a, i, !1);
}
function Om(r, a, i, c, d) {
  let f = typeof a == "string" ? rr(a) : a, p = cn(f.pathname || "/", i);
  if (p == null)
    return null;
  let m = Hm(r), g = null, w = Xm(p);
  for (let y = 0; g == null && y < m.length; ++y)
    g = Gm(
      m[y],
      w,
      c
    );
  return g;
}
function Hm(r) {
  let a = $f(r);
  return Fm(a), a;
}
function $f(r, a = [], i = [], c = "", d = !1) {
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
      Me(
        y.relativePath.startsWith(c),
        `Absolute route path "${y.relativePath}" nested under path "${c}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`
      ), y.relativePath = y.relativePath.slice(c.length);
    }
    let x = Bt([c, y.relativePath]), S = i.concat(y);
    p.children && p.children.length > 0 && (Me(
      // Our types know better, but runtime JS may not!
      // @ts-expect-error
      p.index !== !0,
      `Index routes must not have child routes. Please remove all child routes from route path "${x}".`
    ), $f(
      p.children,
      a,
      S,
      x,
      g
    )), !(p.path == null && !p.index) && a.push({
      path: x,
      score: Km(x, p.index),
      routesMeta: S
    });
  };
  return r.forEach((p, m) => {
    var g;
    if (p.path === "" || !((g = p.path) != null && g.includes("?")))
      f(p, m);
    else
      for (let w of Mf(p.path))
        f(p, m, !0, w);
  }), a;
}
function Mf(r) {
  let a = r.split("/");
  if (a.length === 0) return [];
  let [i, ...c] = a, d = i.endsWith("?"), f = i.replace(/\?$/, "");
  if (c.length === 0)
    return d ? [f, ""] : [f];
  let p = Mf(c.join("/")), m = [];
  return m.push(
    ...p.map(
      (g) => g === "" ? f : [f, g].join("/")
    )
  ), d && m.push(...p), m.map(
    (g) => r.startsWith("/") && g === "" ? "/" : g
  );
}
function Fm(r) {
  r.sort(
    (a, i) => a.score !== i.score ? i.score - a.score : Ym(
      a.routesMeta.map((c) => c.childrenIndex),
      i.routesMeta.map((c) => c.childrenIndex)
    )
  );
}
var Wm = /^:[\w-]+$/, Bm = 3, Um = 2, Vm = 1, qm = 10, Qm = -2, af = (r) => r === "*";
function Km(r, a) {
  let i = r.split("/"), c = i.length;
  return i.some(af) && (c += Qm), a && (c += Um), i.filter((d) => !af(d)).reduce(
    (d, f) => d + (Wm.test(f) ? Bm : f === "" ? Vm : qm),
    c
  );
}
function Ym(r, a) {
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
function Gm(r, a, i = !1) {
  let { routesMeta: c } = r, d = {}, f = "/", p = [];
  for (let m = 0; m < c.length; ++m) {
    let g = c[m], w = m === c.length - 1, y = f === "/" ? a : a.slice(f.length) || "/", x = oi(
      { path: g.relativePath, caseSensitive: g.caseSensitive, end: w },
      y
    ), S = g.route;
    if (!x && w && i && !c[c.length - 1].route.index && (x = oi(
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
      pathname: Bt([f, x.pathname]),
      pathnameBase: nv(
        Bt([f, x.pathnameBase])
      ),
      route: S
    }), x.pathnameBase !== "/" && (f = Bt([f, x.pathnameBase]));
  }
  return p;
}
function oi(r, a) {
  typeof r == "string" && (r = { path: r, caseSensitive: !1, end: !0 });
  let [i, c] = Jm(
    r.path,
    r.caseSensitive,
    r.end
  ), d = a.match(i);
  if (!d) return null;
  let f = d[0], p = f.replace(/(.)\/+$/, "$1"), m = d.slice(1);
  return {
    params: c.reduce(
      (w, { paramName: y, isOptional: x }, S) => {
        if (y === "*") {
          let N = m[S] || "";
          p = f.slice(0, f.length - N.length).replace(/(.)\/+$/, "$1");
        }
        const C = m[S];
        return x && !C ? w[y] = void 0 : w[y] = (C || "").replace(/%2F/g, "/"), w;
      },
      {}
    ),
    pathname: f,
    pathnameBase: p,
    pattern: r
  };
}
function Jm(r, a = !1, i = !0) {
  Mt(
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
  return r.endsWith("*") ? (c.push({ paramName: "*" }), d += r === "*" || r === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$") : i ? d += "\\/*$" : r !== "" && r !== "/" && (d += "(?:(?=\\/|$))"), [new RegExp(d, a ? void 0 : "i"), c];
}
function Xm(r) {
  try {
    return r.split("/").map((a) => decodeURIComponent(a).replace(/\//g, "%2F")).join("/");
  } catch (a) {
    return Mt(
      !1,
      `The URL path "${r}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${a}).`
    ), r;
  }
}
function cn(r, a) {
  if (a === "/") return r;
  if (!r.toLowerCase().startsWith(a.toLowerCase()))
    return null;
  let i = a.endsWith("/") ? a.length - 1 : a.length, c = r.charAt(i);
  return c && c !== "/" ? null : r.slice(i) || "/";
}
var Zm = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;
function ev(r, a = "/") {
  let {
    pathname: i,
    search: c = "",
    hash: d = ""
  } = typeof r == "string" ? rr(r) : r, f;
  return i ? (i = If(i), i.startsWith("/") ? f = lf(i.substring(1), "/") : f = lf(i, a)) : f = a, {
    pathname: f,
    search: rv(c),
    hash: sv(d)
  };
}
function lf(r, a) {
  let i = ii(a).split("/");
  return r.split("/").forEach((d) => {
    d === ".." ? i.length > 1 && i.pop() : d !== "." && i.push(d);
  }), i.length > 1 ? i.join("/") : "/";
}
function ml(r, a, i, c) {
  return `Cannot include a '${r}' character in a manually specified \`to.${a}\` field [${JSON.stringify(
    c
  )}].  Please separate it out to the \`to.${i}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`;
}
function tv(r) {
  return r.filter(
    (a, i) => i === 0 || a.route.path && a.route.path.length > 0
  );
}
function Ll(r) {
  let a = tv(r);
  return a.map(
    (i, c) => c === a.length - 1 ? i.pathname : i.pathnameBase
  );
}
function di(r, a, i, c = !1) {
  let d;
  typeof r == "string" ? d = rr(r) : (d = { ...r }, Me(
    !d.pathname || !d.pathname.includes("?"),
    ml("?", "pathname", "search", d)
  ), Me(
    !d.pathname || !d.pathname.includes("#"),
    ml("#", "pathname", "hash", d)
  ), Me(
    !d.search || !d.search.includes("#"),
    ml("#", "search", "hash", d)
  ));
  let f = r === "" || d.pathname === "", p = f ? "/" : d.pathname, m;
  if (p == null)
    m = i;
  else {
    let x = a.length - 1;
    if (!c && p.startsWith("..")) {
      let S = p.split("/");
      for (; S[0] === ".."; )
        S.shift(), x -= 1;
      d.pathname = S.join("/");
    }
    m = x >= 0 ? a[x] : "/";
  }
  let g = ev(d, m), w = p && p !== "/" && p.endsWith("/"), y = (f || p === ".") && i.endsWith("/");
  return !g.pathname.endsWith("/") && (w || y) && (g.pathname += "/"), g;
}
var If = (r) => r.replace(/\/\/+/g, "/"), Bt = (r) => If(r.join("/")), ii = (r) => r.replace(/\/+$/, ""), nv = (r) => ii(r).replace(/^\/*/, "/"), rv = (r) => !r || r === "?" ? "" : r.startsWith("?") ? r : "?" + r, sv = (r) => !r || r === "#" ? "" : r.startsWith("#") ? r : "#" + r, ov = class {
  constructor(r, a, i, c = !1) {
    this.status = r, this.statusText = a || "", this.internal = c, i instanceof Error ? (this.data = i.toString(), this.error = i) : this.data = i;
  }
};
function iv(r) {
  return r != null && typeof r.status == "number" && typeof r.statusText == "string" && typeof r.internal == "boolean" && "data" in r;
}
function av(r) {
  let a = r.map((i) => i.route.path).filter(Boolean);
  return Bt(a) || "/";
}
var Lf = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u";
function Df(r, a) {
  let i = r;
  if (typeof i != "string" || !Zm.test(i))
    return {
      absoluteURL: void 0,
      isExternal: !1,
      to: i
    };
  let c = i, d = !1;
  if (Lf)
    try {
      let f = new URL(window.location.href), p = i.startsWith("//") ? new URL(f.protocol + i) : new URL(i), m = cn(p.pathname, a);
      p.origin === f.origin && m != null ? i = m + p.search + p.hash : d = !0;
    } catch {
      Mt(
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
var zf = [
  "POST",
  "PUT",
  "PATCH",
  "DELETE"
];
new Set(
  zf
);
var lv = [
  "GET",
  ...zf
];
new Set(lv);
var Lr = v.createContext(null);
Lr.displayName = "DataRouter";
var fi = v.createContext(null);
fi.displayName = "DataRouterState";
var Of = v.createContext(!1);
function uv() {
  return v.useContext(Of);
}
var Hf = v.createContext({
  isTransitioning: !1
});
Hf.displayName = "ViewTransition";
var cv = v.createContext(
  /* @__PURE__ */ new Map()
);
cv.displayName = "Fetchers";
var dv = v.createContext(null);
dv.displayName = "Await";
var jt = v.createContext(
  null
);
jt.displayName = "Navigation";
var Os = v.createContext(
  null
);
Os.displayName = "Location";
var Xt = v.createContext({
  outlet: null,
  matches: [],
  isDataRoute: !1
});
Xt.displayName = "Route";
var Dl = v.createContext(null);
Dl.displayName = "RouteError";
var Ff = "REACT_ROUTER_ERROR", fv = "REDIRECT", pv = "ROUTE_ERROR_RESPONSE";
function hv(r) {
  if (r.startsWith(`${Ff}:${fv}:{`))
    try {
      let a = JSON.parse(r.slice(28));
      if (typeof a == "object" && a && typeof a.status == "number" && typeof a.statusText == "string" && typeof a.location == "string" && typeof a.reloadDocument == "boolean" && typeof a.replace == "boolean")
        return a;
    } catch {
    }
}
function mv(r) {
  if (r.startsWith(
    `${Ff}:${pv}:{`
  ))
    try {
      let a = JSON.parse(r.slice(40));
      if (typeof a == "object" && a && typeof a.status == "number" && typeof a.statusText == "string")
        return new ov(
          a.status,
          a.statusText,
          a.data
        );
    } catch {
    }
}
function vv(r, { relative: a } = {}) {
  Me(
    sr(),
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useHref() may be used only in the context of a <Router> component."
  );
  let { basename: i, navigator: c } = v.useContext(jt), { hash: d, pathname: f, search: p } = Hs(r, { relative: a }), m = f;
  return i !== "/" && (m = f === "/" ? i : Bt([i, f])), c.createHref({ pathname: m, search: p, hash: d });
}
function sr() {
  return v.useContext(Os) != null;
}
function _t() {
  return Me(
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
  let { isDataRoute: r } = v.useContext(Xt);
  return r ? Rv() : yv();
}
function yv() {
  Me(
    sr(),
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useNavigate() may be used only in the context of a <Router> component."
  );
  let r = v.useContext(Lr), { basename: a, navigator: i } = v.useContext(jt), { matches: c } = v.useContext(Xt), { pathname: d } = _t(), f = JSON.stringify(Ll(c)), p = v.useRef(!1);
  return Bf(() => {
    p.current = !0;
  }), v.useCallback(
    (g, w = {}) => {
      if (Mt(p.current, Wf), !p.current) return;
      if (typeof g == "number") {
        i.go(g);
        return;
      }
      let y = di(
        g,
        JSON.parse(f),
        d,
        w.relative === "path"
      );
      r == null && a !== "/" && (y.pathname = y.pathname === "/" ? a : Bt([a, y.pathname])), (w.replace ? i.replace : i.push)(
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
function Hs(r, { relative: a } = {}) {
  let { matches: i } = v.useContext(Xt), { pathname: c } = _t(), d = JSON.stringify(Ll(i));
  return v.useMemo(
    () => di(
      r,
      JSON.parse(d),
      c,
      a === "path"
    ),
    [r, d, c, a]
  );
}
function gv(r, a) {
  return Uf(r, a);
}
function Uf(r, a, i) {
  var j;
  Me(
    sr(),
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useRoutes() may be used only in the context of a <Router> component."
  );
  let { navigator: c } = v.useContext(jt), { matches: d } = v.useContext(Xt), f = d[d.length - 1], p = f ? f.params : {}, m = f ? f.pathname : "/", g = f ? f.pathnameBase : "/", w = f && f.route;
  {
    let P = w && w.path || "";
    qf(
      m,
      !w || P.endsWith("*") || P.endsWith("*?"),
      `You rendered descendant <Routes> (or called \`useRoutes()\`) at "${m}" (under <Route path="${P}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${P}"> to <Route path="${P === "/" ? "*" : `${P}/*`}">.`
    );
  }
  let y = _t(), x;
  if (a) {
    let P = typeof a == "string" ? rr(a) : a;
    Me(
      g === "/" || ((j = P.pathname) == null ? void 0 : j.startsWith(g)),
      `When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${g}" but pathname "${P.pathname}" was given in the \`location\` prop.`
    ), x = P;
  } else
    x = y;
  let S = x.pathname || "/", C = S;
  if (g !== "/") {
    let P = g.replace(/^\//, "").split("/");
    C = "/" + S.replace(/^\//, "").split("/").slice(P.length).join("/");
  }
  let N = i && i.state.matches.length ? (
    // If we're in a data router, use the matches we've already identified but ensure
    // we have the latest route instances from the manifest in case elements have changed
    i.state.matches.map(
      (P) => Object.assign(P, {
        route: i.manifest[P.route.id] || P.route
      })
    )
  ) : Pf(r, { pathname: C });
  Mt(
    w || N != null,
    `No routes matched location "${x.pathname}${x.search}${x.hash}" `
  ), Mt(
    N == null || N[N.length - 1].route.element !== void 0 || N[N.length - 1].route.Component !== void 0 || N[N.length - 1].route.lazy !== void 0,
    `Matched leaf route at location "${x.pathname}${x.search}${x.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`
  );
  let E = kv(
    N && N.map(
      (P) => Object.assign({}, P, {
        params: Object.assign({}, p, P.params),
        pathname: Bt([
          g,
          // Re-encode pathnames that were decoded inside matchRoutes.
          // Pre-encode `%`, `?` and `#` ahead of `encodeLocation` because it uses
          // `new URL()` internally and we need to prevent it from treating
          // them as separators
          c.encodeLocation ? c.encodeLocation(
            P.pathname.replace(/%/g, "%25").replace(/\?/g, "%3F").replace(/#/g, "%23")
          ).pathname : P.pathname
        ]),
        pathnameBase: P.pathnameBase === "/" ? g : Bt([
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
  return a && E ? /* @__PURE__ */ v.createElement(
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
          ...x
        },
        navigationType: "POP"
        /* Pop */
      }
    },
    E
  ) : E;
}
function _v() {
  let r = Tv(), a = iv(r) ? `${r.status} ${r.statusText}` : r instanceof Error ? r.message : JSON.stringify(r), i = r instanceof Error ? r.stack : null, c = "rgba(200,200,200, 0.5)", d = { padding: "0.5rem", backgroundColor: c }, f = { padding: "2px 4px", backgroundColor: c }, p = null;
  return console.error(
    "Error handled by React Router default ErrorBoundary:",
    r
  ), p = /* @__PURE__ */ v.createElement(v.Fragment, null, /* @__PURE__ */ v.createElement("p", null, "💿 Hey developer 👋"), /* @__PURE__ */ v.createElement("p", null, "You can provide a way better UX than this when your app throws errors by providing your own ", /* @__PURE__ */ v.createElement("code", { style: f }, "ErrorBoundary"), " or", " ", /* @__PURE__ */ v.createElement("code", { style: f }, "errorElement"), " prop on your route.")), /* @__PURE__ */ v.createElement(v.Fragment, null, /* @__PURE__ */ v.createElement("h2", null, "Unexpected Application Error!"), /* @__PURE__ */ v.createElement("h3", { style: { fontStyle: "italic" } }, a), i ? /* @__PURE__ */ v.createElement("pre", { style: d }, i) : null, p);
}
var xv = /* @__PURE__ */ v.createElement(_v, null), Vf = class extends v.Component {
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
      const i = mv(r.digest);
      i && (r = i);
    }
    let a = r !== void 0 ? /* @__PURE__ */ v.createElement(Xt.Provider, { value: this.props.routeContext }, /* @__PURE__ */ v.createElement(
      Dl.Provider,
      {
        value: r,
        children: this.props.component
      }
    )) : this.props.children;
    return this.context ? /* @__PURE__ */ v.createElement(wv, { error: r }, a) : a;
  }
};
Vf.contextType = Of;
var vl = /* @__PURE__ */ new WeakMap();
function wv({
  children: r,
  error: a
}) {
  let { basename: i } = v.useContext(jt);
  if (typeof a == "object" && a && "digest" in a && typeof a.digest == "string") {
    let c = hv(a.digest);
    if (c) {
      let d = vl.get(a);
      if (d) throw d;
      let f = Df(c.location, i);
      if (Lf && !vl.get(a))
        if (f.isExternal || c.reloadDocument)
          window.location.href = f.absoluteURL || f.to;
        else {
          const p = Promise.resolve().then(
            () => window.__reactRouterDataRouter.navigate(f.to, {
              replace: c.replace
            })
          );
          throw vl.set(a, p), p;
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
function Sv({ routeContext: r, match: a, children: i }) {
  let c = v.useContext(Lr);
  return c && c.static && c.staticContext && (a.route.errorElement || a.route.ErrorBoundary) && (c.staticContext._deepestRenderedBoundaryId = a.route.id), /* @__PURE__ */ v.createElement(Xt.Provider, { value: r }, i);
}
function kv(r, a = [], i) {
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
    Me(
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
  if (i && c) {
    p = c.renderFallback;
    for (let y = 0; y < d.length; y++) {
      let x = d[y];
      if ((x.route.HydrateFallback || x.route.hydrateFallbackElement) && (m = y), x.route.id) {
        let { loaderData: S, errors: C } = c, N = x.route.loader && !S.hasOwnProperty(x.route.id) && (!C || C[x.route.id] === void 0);
        if (x.route.lazy || N) {
          i.isStatic && (p = !0), m >= 0 ? d = d.slice(0, m + 1) : d = [d[0]];
          break;
        }
      }
    }
  }
  let g = i == null ? void 0 : i.onError, w = c && g ? (y, x) => {
    var S, C;
    g(y, {
      location: c.location,
      params: ((C = (S = c.matches) == null ? void 0 : S[0]) == null ? void 0 : C.params) ?? {},
      pattern: av(c.matches),
      errorInfo: x
    });
  } : void 0;
  return d.reduceRight(
    (y, x, S) => {
      let C, N = !1, E = null, j = null;
      c && (C = f && x.route.id ? f[x.route.id] : void 0, E = x.route.errorElement || xv, p && (m < 0 && S === 0 ? (qf(
        "route-fallback",
        !1,
        "No `HydrateFallback` element provided to render during initial hydration"
      ), N = !0, j = null) : m === S && (N = !0, j = x.route.hydrateFallbackElement || null)));
      let P = a.concat(d.slice(0, S + 1)), F = () => {
        let b;
        return C ? b = E : N ? b = j : x.route.Component ? b = /* @__PURE__ */ v.createElement(x.route.Component, null) : x.route.element ? b = x.route.element : b = y, /* @__PURE__ */ v.createElement(
          Sv,
          {
            match: x,
            routeContext: {
              outlet: y,
              matches: P,
              isDataRoute: c != null
            },
            children: b
          }
        );
      };
      return c && (x.route.ErrorBoundary || x.route.errorElement || S === 0) ? /* @__PURE__ */ v.createElement(
        Vf,
        {
          location: c.location,
          revalidation: c.revalidation,
          component: E,
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
function Ol(r) {
  return `${r} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function Cv(r) {
  let a = v.useContext(Lr);
  return Me(a, Ol(r)), a;
}
function jv(r) {
  let a = v.useContext(fi);
  return Me(a, Ol(r)), a;
}
function Ev(r) {
  let a = v.useContext(Xt);
  return Me(a, Ol(r)), a;
}
function Hl(r) {
  let a = Ev(r), i = a.matches[a.matches.length - 1];
  return Me(
    i.route.id,
    `${r} can only be used on routes that contain a unique "id"`
  ), i.route.id;
}
function Nv() {
  return Hl(
    "useRouteId"
    /* UseRouteId */
  );
}
function Tv() {
  var c;
  let r = v.useContext(Dl), a = jv(
    "useRouteError"
    /* UseRouteError */
  ), i = Hl(
    "useRouteError"
    /* UseRouteError */
  );
  return r !== void 0 ? r : (c = a.errors) == null ? void 0 : c[i];
}
function Rv() {
  let { router: r } = Cv(
    "useNavigate"
    /* UseNavigateStable */
  ), a = Hl(
    "useNavigate"
    /* UseNavigateStable */
  ), i = v.useRef(!1);
  return Bf(() => {
    i.current = !0;
  }), v.useCallback(
    async (d, f = {}) => {
      Mt(i.current, Wf), i.current && (typeof d == "number" ? await r.navigate(d) : await r.navigate(d, { fromRouteId: a, ...f }));
    },
    [r, a]
  );
}
var uf = {};
function qf(r, a, i) {
  !a && !uf[r] && (uf[r] = !0, Mt(!1, i));
}
v.memo(Av);
function Av({
  routes: r,
  manifest: a,
  future: i,
  state: c,
  isStatic: d,
  onError: f
}) {
  return Uf(r, void 0, {
    manifest: a,
    state: c,
    isStatic: d,
    onError: f
  });
}
function An({
  to: r,
  replace: a,
  state: i,
  relative: c
}) {
  Me(
    sr(),
    // TODO: This error is probably because they somehow have 2 versions of
    // the router loaded. We can help them understand how to avoid that.
    "<Navigate> may be used only in the context of a <Router> component."
  );
  let { static: d } = v.useContext(jt);
  Mt(
    !d,
    "<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change."
  );
  let { matches: f } = v.useContext(Xt), { pathname: p } = _t(), m = zl(), g = di(
    r,
    Ll(f),
    p,
    c === "path"
  ), w = JSON.stringify(g);
  return v.useEffect(() => {
    m(JSON.parse(w), { replace: a, state: i, relative: c });
  }, [m, w, c, a, i]), null;
}
function Ue(r) {
  Me(
    !1,
    "A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>."
  );
}
function bv({
  basename: r = "/",
  children: a = null,
  location: i,
  navigationType: c = "POP",
  navigator: d,
  static: f = !1,
  useTransitions: p
}) {
  Me(
    !sr(),
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
  typeof i == "string" && (i = rr(i));
  let {
    pathname: w = "/",
    search: y = "",
    hash: x = "",
    state: S = null,
    key: C = "default",
    mask: N
  } = i, E = v.useMemo(() => {
    let j = cn(w, m);
    return j == null ? null : {
      location: {
        pathname: j,
        search: y,
        hash: x,
        state: S,
        key: C,
        mask: N
      },
      navigationType: c
    };
  }, [m, w, y, x, S, C, c, N]);
  return Mt(
    E != null,
    `<Router basename="${m}"> is not able to match the URL "${w}${y}${x}" because it does not start with the basename, so the <Router> won't render anything.`
  ), E == null ? null : /* @__PURE__ */ v.createElement(jt.Provider, { value: g }, /* @__PURE__ */ v.createElement(Os.Provider, { children: a, value: E }));
}
function Pv({
  children: r,
  location: a
}) {
  return gv(El(r), a);
}
function El(r, a = []) {
  let i = [];
  return v.Children.forEach(r, (c, d) => {
    if (!v.isValidElement(c))
      return;
    let f = [...a, d];
    if (c.type === v.Fragment) {
      i.push.apply(
        i,
        El(c.props.children, f)
      );
      return;
    }
    Me(
      c.type === Ue,
      `[${typeof c.type == "string" ? c.type : c.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`
    ), Me(
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
    )), i.push(p);
  }), i;
}
var ri = "get", si = "application/x-www-form-urlencoded";
function pi(r) {
  return typeof HTMLElement < "u" && r instanceof HTMLElement;
}
function $v(r) {
  return pi(r) && r.tagName.toLowerCase() === "button";
}
function Mv(r) {
  return pi(r) && r.tagName.toLowerCase() === "form";
}
function Iv(r) {
  return pi(r) && r.tagName.toLowerCase() === "input";
}
function Lv(r) {
  return !!(r.metaKey || r.altKey || r.ctrlKey || r.shiftKey);
}
function Dv(r, a) {
  return r.button === 0 && // Ignore everything but left clicks
  (!a || a === "_self") && // Let browser handle "target=_blank" etc.
  !Lv(r);
}
var Jo = null;
function zv() {
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
var Ov = /* @__PURE__ */ new Set([
  "application/x-www-form-urlencoded",
  "multipart/form-data",
  "text/plain"
]);
function yl(r) {
  return r != null && !Ov.has(r) ? (Mt(
    !1,
    `"${r}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${si}"`
  ), null) : r;
}
function Hv(r, a) {
  let i, c, d, f, p;
  if (Mv(r)) {
    let m = r.getAttribute("action");
    c = m ? cn(m, a) : null, i = r.getAttribute("method") || ri, d = yl(r.getAttribute("enctype")) || si, f = new FormData(r);
  } else if ($v(r) || Iv(r) && (r.type === "submit" || r.type === "image")) {
    let m = r.form;
    if (m == null)
      throw new Error(
        'Cannot submit a <button> or <input type="submit"> without a <form>'
      );
    let g = r.getAttribute("formaction") || m.getAttribute("action");
    if (c = g ? cn(g, a) : null, i = r.getAttribute("formmethod") || m.getAttribute("method") || ri, d = yl(r.getAttribute("formenctype")) || yl(m.getAttribute("enctype")) || si, f = new FormData(m, r), !zv()) {
      let { name: w, type: y, value: x } = r;
      if (y === "image") {
        let S = w ? `${w}.` : "";
        f.append(`${S}x`, "0"), f.append(`${S}y`, "0");
      } else w && f.append(w, x);
    }
  } else {
    if (pi(r))
      throw new Error(
        'Cannot submit element that is not <form>, <button>, or <input type="submit|image">'
      );
    i = ri, c = null, d = si, p = r;
  }
  return f && d === "text/plain" && (p = f, f = void 0), { action: c, method: i.toLowerCase(), encType: d, formData: f, body: p };
}
Object.getOwnPropertyNames(Object.prototype).sort().join("\0");
function Fl(r, a) {
  if (r === !1 || r === null || typeof r > "u")
    throw new Error(a);
}
function Qf(r, a, i, c) {
  let d = typeof r == "string" ? new URL(
    r,
    // This can be called during the SSR flow via PrefetchPageLinksImpl so
    // don't assume window is available
    typeof window > "u" ? "server://singlefetch/" : window.location.origin
  ) : r;
  return i ? d.pathname.endsWith("/") ? d.pathname = `${d.pathname}_.${c}` : d.pathname = `${d.pathname}.${c}` : d.pathname === "/" ? d.pathname = `_root.${c}` : a && cn(d.pathname, a) === "/" ? d.pathname = `${ii(a)}/_root.${c}` : d.pathname = `${ii(d.pathname)}.${c}`, d;
}
async function Fv(r, a) {
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
function Wv(r) {
  return r == null ? !1 : r.href == null ? r.rel === "preload" && typeof r.imageSrcSet == "string" && typeof r.imageSizes == "string" : typeof r.rel == "string" && typeof r.href == "string";
}
async function Bv(r, a, i) {
  let c = await Promise.all(
    r.map(async (d) => {
      let f = a.routes[d.route.id];
      if (f) {
        let p = await Fv(f, i);
        return p.links ? p.links() : [];
      }
      return [];
    })
  );
  return Qv(
    c.flat(1).filter(Wv).filter((d) => d.rel === "stylesheet" || d.rel === "preload").map(
      (d) => d.rel === "stylesheet" ? { ...d, rel: "prefetch", as: "style" } : { ...d, rel: "prefetch" }
    )
  );
}
function cf(r, a, i, c, d, f) {
  let p = (g, w) => i[w] ? g.route.id !== i[w].route.id : !0, m = (g, w) => {
    var y;
    return (
      // param change, /users/123 -> /users/456
      i[w].pathname !== g.pathname || // splat param changed, which is not present in match.path
      // e.g. /files/images/avatar.jpg -> files/finances.xls
      ((y = i[w].route.path) == null ? void 0 : y.endsWith("*")) && i[w].params["*"] !== g.params["*"]
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
      let S = g.route.shouldRevalidate({
        currentUrl: new URL(
          d.pathname + d.search + d.hash,
          window.origin
        ),
        currentParams: ((x = i[0]) == null ? void 0 : x.params) || {},
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
function Uv(r, a, { includeHydrateFallback: i } = {}) {
  return Vv(
    r.map((c) => {
      let d = a.routes[c.route.id];
      if (!d) return [];
      let f = [d.module];
      return d.clientActionModule && (f = f.concat(d.clientActionModule)), d.clientLoaderModule && (f = f.concat(d.clientLoaderModule)), i && d.hydrateFallbackModule && (f = f.concat(d.hydrateFallbackModule)), d.imports && (f = f.concat(d.imports)), f;
    }).flat(1)
  );
}
function Vv(r) {
  return [...new Set(r)];
}
function qv(r) {
  let a = {}, i = Object.keys(r).sort();
  for (let c of i)
    a[c] = r[c];
  return a;
}
function Qv(r, a) {
  let i = /* @__PURE__ */ new Set();
  return new Set(a), r.reduce((c, d) => {
    let f = JSON.stringify(qv(d));
    return i.has(f) || (i.add(f), c.push({ key: f, link: d })), c;
  }, []);
}
function Wl() {
  let r = v.useContext(Lr);
  return Fl(
    r,
    "You must render this element inside a <DataRouterContext.Provider> element"
  ), r;
}
function Kv() {
  let r = v.useContext(fi);
  return Fl(
    r,
    "You must render this element inside a <DataRouterStateContext.Provider> element"
  ), r;
}
var Bl = v.createContext(void 0);
Bl.displayName = "FrameworkContext";
function Ul() {
  let r = v.useContext(Bl);
  return Fl(
    r,
    "You must render this element inside a <HydratedRouter> element"
  ), r;
}
function Yv(r, a) {
  let i = v.useContext(Bl), [c, d] = v.useState(!1), [f, p] = v.useState(!1), { onFocus: m, onBlur: g, onMouseEnter: w, onMouseLeave: y, onTouchStart: x } = a, S = v.useRef(null);
  v.useEffect(() => {
    if (r === "render" && p(!0), r === "viewport") {
      let E = (P) => {
        P.forEach((F) => {
          p(F.isIntersecting);
        });
      }, j = new IntersectionObserver(E, { threshold: 0.5 });
      return S.current && j.observe(S.current), () => {
        j.disconnect();
      };
    }
  }, [r]), v.useEffect(() => {
    if (c) {
      let E = setTimeout(() => {
        p(!0);
      }, 100);
      return () => {
        clearTimeout(E);
      };
    }
  }, [c]);
  let C = () => {
    d(!0);
  }, N = () => {
    d(!1), p(!1);
  };
  return i ? r !== "intent" ? [f, S, {}] : [
    f,
    S,
    {
      onFocus: bs(m, C),
      onBlur: bs(g, N),
      onMouseEnter: bs(w, C),
      onMouseLeave: bs(y, N),
      onTouchStart: bs(x, C)
    }
  ] : [!1, S, {}];
}
function bs(r, a) {
  return (i) => {
    r && r(i), i.defaultPrevented || a(i);
  };
}
function Gv({ page: r, ...a }) {
  let i = uv(), { router: c } = Wl(), d = v.useMemo(
    () => Pf(c.routes, r, c.basename),
    [c.routes, r, c.basename]
  );
  return d ? i ? /* @__PURE__ */ v.createElement(Xv, { page: r, matches: d, ...a }) : /* @__PURE__ */ v.createElement(Zv, { page: r, matches: d, ...a }) : null;
}
function Jv(r) {
  let { manifest: a, routeModules: i } = Ul(), [c, d] = v.useState([]);
  return v.useEffect(() => {
    let f = !1;
    return Bv(r, a, i).then(
      (p) => {
        f || d(p);
      }
    ), () => {
      f = !0;
    };
  }, [r, a, i]), c;
}
function Xv({
  page: r,
  matches: a,
  ...i
}) {
  let c = _t(), { future: d } = Ul(), { basename: f } = Wl(), p = v.useMemo(() => {
    if (r === c.pathname + c.search + c.hash)
      return [];
    let m = Qf(
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
  return /* @__PURE__ */ v.createElement(v.Fragment, null, p.map((m) => /* @__PURE__ */ v.createElement("link", { key: m, rel: "prefetch", as: "fetch", href: m, ...i })));
}
function Zv({
  page: r,
  matches: a,
  ...i
}) {
  let c = _t(), { future: d, manifest: f, routeModules: p } = Ul(), { basename: m } = Wl(), { loaderData: g, matches: w } = Kv(), y = v.useMemo(
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
  ), S = v.useMemo(() => {
    if (r === c.pathname + c.search + c.hash)
      return [];
    let E = /* @__PURE__ */ new Set(), j = !1;
    if (a.forEach((F) => {
      var O;
      let b = f.routes[F.route.id];
      !b || !b.hasLoader || (!y.some((B) => B.route.id === F.route.id) && F.route.id in g && ((O = p[F.route.id]) != null && O.shouldRevalidate) || b.hasClientLoader ? j = !0 : E.add(F.route.id));
    }), E.size === 0)
      return [];
    let P = Qf(
      r,
      m,
      d.v8_trailingSlashAwareDataRequests,
      "data"
    );
    return j && E.size > 0 && P.searchParams.set(
      "_routes",
      a.filter((F) => E.has(F.route.id)).map((F) => F.route.id).join(",")
    ), [P.pathname + P.search];
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
    () => Uv(x, f),
    [x, f]
  ), N = Jv(x);
  return /* @__PURE__ */ v.createElement(v.Fragment, null, S.map((E) => /* @__PURE__ */ v.createElement("link", { key: E, rel: "prefetch", as: "fetch", href: E, ...i })), C.map((E) => /* @__PURE__ */ v.createElement("link", { key: E, rel: "modulepreload", href: E, ...i })), N.map(({ key: E, link: j }) => (
    // these don't spread `linkProps` because they are full link descriptors
    // already with their own props
    /* @__PURE__ */ v.createElement(
      "link",
      {
        key: E,
        nonce: i.nonce,
        ...j,
        crossOrigin: j.crossOrigin ?? i.crossOrigin
      }
    )
  )));
}
function ey(...r) {
  return (a) => {
    r.forEach((i) => {
      typeof i == "function" ? i(a) : i != null && (i.current = a);
    });
  };
}
var ty = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u";
try {
  ty && (window.__reactRouterVersion = // @ts-expect-error
  "7.17.0");
} catch {
}
function ny({
  basename: r,
  children: a,
  useTransitions: i,
  window: c
}) {
  let d = v.useRef();
  d.current == null && (d.current = Im({ window: c, v5Compat: !0 }));
  let f = d.current, [p, m] = v.useState({
    action: f.action,
    location: f.location
  }), g = v.useCallback(
    (w) => {
      i === !1 ? m(w) : v.startTransition(() => m(w));
    },
    [i]
  );
  return v.useLayoutEffect(() => f.listen(g), [f, g]), /* @__PURE__ */ v.createElement(
    bv,
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
var Kf = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i, Yf = v.forwardRef(
  function({
    onClick: a,
    discover: i = "render",
    prefetch: c = "none",
    relative: d,
    reloadDocument: f,
    replace: p,
    mask: m,
    state: g,
    target: w,
    to: y,
    preventScrollReset: x,
    viewTransition: S,
    defaultShouldRevalidate: C,
    ...N
  }, E) {
    let { basename: j, navigator: P, useTransitions: F } = v.useContext(jt), b = typeof y == "string" && Kf.test(y), O = Df(y, j);
    y = O.to;
    let B = vv(y, { relative: d }), M = _t(), Z = null;
    if (m) {
      let ve = di(
        m,
        [],
        M.mask ? M.mask.pathname : "/",
        !0
      );
      j !== "/" && (ve.pathname = ve.pathname === "/" ? j : Bt([j, ve.pathname])), Z = P.createHref(ve);
    }
    let [U, G, J] = Yv(
      c,
      N
    ), te = oy(y, {
      replace: p,
      mask: m,
      state: g,
      target: w,
      preventScrollReset: x,
      relative: d,
      viewTransition: S,
      defaultShouldRevalidate: C,
      useTransitions: F
    });
    function ge(ve) {
      a && a(ve), ve.defaultPrevented || te(ve);
    }
    let de = !(O.isExternal || f), pe = (
      // eslint-disable-next-line jsx-a11y/anchor-has-content
      /* @__PURE__ */ v.createElement(
        "a",
        {
          ...N,
          ...J,
          href: (de ? Z : void 0) || O.absoluteURL || B,
          onClick: de ? ge : a,
          ref: ey(E, G),
          target: w,
          "data-discover": !b && i === "render" ? "true" : void 0
        }
      )
    );
    return U && !b ? /* @__PURE__ */ v.createElement(v.Fragment, null, pe, /* @__PURE__ */ v.createElement(Gv, { page: B })) : pe;
  }
);
Yf.displayName = "Link";
var ut = v.forwardRef(
  function({
    "aria-current": a = "page",
    caseSensitive: i = !1,
    className: c = "",
    end: d = !1,
    style: f,
    to: p,
    viewTransition: m,
    children: g,
    ...w
  }, y) {
    let x = Hs(p, { relative: w.relative }), S = _t(), C = v.useContext(fi), { navigator: N, basename: E } = v.useContext(jt), j = C != null && // Conditional usage is OK here because the usage of a data router is static
    // eslint-disable-next-line react-hooks/rules-of-hooks
    cy(x) && m === !0, P = N.encodeLocation ? N.encodeLocation(x).pathname : x.pathname, F = S.pathname, b = C && C.navigation && C.navigation.location ? C.navigation.location.pathname : null;
    i || (F = F.toLowerCase(), b = b ? b.toLowerCase() : null, P = P.toLowerCase()), b && E && (b = cn(b, E) || b);
    const O = P !== "/" && P.endsWith("/") ? P.length - 1 : P.length;
    let B = F === P || !d && F.startsWith(P) && F.charAt(O) === "/", M = b != null && (b === P || !d && b.startsWith(P) && b.charAt(P.length) === "/"), Z = {
      isActive: B,
      isPending: M,
      isTransitioning: j
    }, U = B ? a : void 0, G;
    typeof c == "function" ? G = c(Z) : G = [
      c,
      B ? "active" : null,
      M ? "pending" : null,
      j ? "transitioning" : null
    ].filter(Boolean).join(" ");
    let J = typeof f == "function" ? f(Z) : f;
    return /* @__PURE__ */ v.createElement(
      Yf,
      {
        ...w,
        "aria-current": U,
        className: G,
        ref: y,
        style: J,
        to: p,
        viewTransition: m
      },
      typeof g == "function" ? g(Z) : g
    );
  }
);
ut.displayName = "NavLink";
var ry = v.forwardRef(
  ({
    discover: r = "render",
    fetcherKey: a,
    navigate: i,
    reloadDocument: c,
    replace: d,
    state: f,
    method: p = ri,
    action: m,
    onSubmit: g,
    relative: w,
    preventScrollReset: y,
    viewTransition: x,
    defaultShouldRevalidate: S,
    ...C
  }, N) => {
    let { useTransitions: E } = v.useContext(jt), j = ly(), P = uy(m, { relative: w }), F = p.toLowerCase() === "get" ? "get" : "post", b = typeof m == "string" && Kf.test(m), O = (B) => {
      if (g && g(B), B.defaultPrevented) return;
      B.preventDefault();
      let M = B.nativeEvent.submitter, Z = (M == null ? void 0 : M.getAttribute("formmethod")) || p, U = () => j(M || B.currentTarget, {
        fetcherKey: a,
        method: Z,
        navigate: i,
        replace: d,
        state: f,
        relative: w,
        preventScrollReset: y,
        viewTransition: x,
        defaultShouldRevalidate: S
      });
      E && i !== !1 ? v.startTransition(() => U()) : U();
    };
    return /* @__PURE__ */ v.createElement(
      "form",
      {
        ref: N,
        method: F,
        action: P,
        onSubmit: c ? g : O,
        ...C,
        "data-discover": !b && r === "render" ? "true" : void 0
      }
    );
  }
);
ry.displayName = "Form";
function sy(r) {
  return `${r} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function Gf(r) {
  let a = v.useContext(Lr);
  return Me(a, sy(r)), a;
}
function oy(r, {
  target: a,
  replace: i,
  mask: c,
  state: d,
  preventScrollReset: f,
  relative: p,
  viewTransition: m,
  defaultShouldRevalidate: g,
  useTransitions: w
} = {}) {
  let y = zl(), x = _t(), S = Hs(r, { relative: p });
  return v.useCallback(
    (C) => {
      if (Dv(C, a)) {
        C.preventDefault();
        let N = i !== void 0 ? i : zs(x) === zs(S), E = () => y(r, {
          replace: N,
          mask: c,
          state: d,
          preventScrollReset: f,
          relative: p,
          viewTransition: m,
          defaultShouldRevalidate: g
        });
        w ? v.startTransition(() => E()) : E();
      }
    },
    [
      x,
      y,
      S,
      i,
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
var iy = 0, ay = () => `__${String(++iy)}__`;
function ly() {
  let { router: r } = Gf(
    "useSubmit"
    /* UseSubmit */
  ), { basename: a } = v.useContext(jt), i = Nv(), c = r.fetch, d = r.navigate;
  return v.useCallback(
    async (f, p = {}) => {
      let { action: m, method: g, encType: w, formData: y, body: x } = Hv(
        f,
        a
      );
      if (p.navigate === !1) {
        let S = p.fetcherKey || ay();
        await c(S, i, p.action || m, {
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
          fromRouteId: i,
          flushSync: p.flushSync,
          viewTransition: p.viewTransition
        });
    },
    [c, d, a, i]
  );
}
function uy(r, { relative: a } = {}) {
  let { basename: i } = v.useContext(jt), c = v.useContext(Xt);
  Me(c, "useFormAction must be used inside a RouteContext");
  let [d] = c.matches.slice(-1), f = { ...Hs(r || ".", { relative: a }) }, p = _t();
  if (r == null) {
    f.search = p.search;
    let m = new URLSearchParams(f.search), g = m.getAll("index");
    if (g.some((y) => y === "")) {
      m.delete("index"), g.filter((x) => x).forEach((x) => m.append("index", x));
      let y = m.toString();
      f.search = y ? `?${y}` : "";
    }
  }
  return (!r || r === ".") && d.route.index && (f.search = f.search ? f.search.replace(/^\?/, "?index&") : "?index"), i !== "/" && (f.pathname = f.pathname === "/" ? i : Bt([i, f.pathname])), zs(f);
}
function cy(r, { relative: a } = {}) {
  let i = v.useContext(Hf);
  Me(
    i != null,
    "`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?"
  );
  let { basename: c } = Gf(
    "useViewTransitionState"
    /* useViewTransitionState */
  ), d = Hs(r, { relative: a });
  if (!i.isTransitioning)
    return !1;
  let f = cn(i.currentLocation.pathname, c) || i.currentLocation.pathname, p = cn(i.nextLocation.pathname, c) || i.nextLocation.pathname;
  return oi(d.pathname, p) != null || oi(d.pathname, f) != null;
}
var Jf = bf();
/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Xf = (...r) => r.filter((a, i, c) => !!a && a.trim() !== "" && c.indexOf(a) === i).join(" ").trim();
/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const dy = (r) => r.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const fy = (r) => r.replace(
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
  const a = fy(r);
  return a.charAt(0).toUpperCase() + a.slice(1);
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
const py = (r) => {
  for (const a in r)
    if (a.startsWith("aria-") || a === "role" || a === "title")
      return !0;
  return !1;
}, hy = v.createContext({}), my = () => v.useContext(hy), vy = v.forwardRef(
  ({ color: r, size: a, strokeWidth: i, absoluteStrokeWidth: c, className: d = "", children: f, iconNode: p, ...m }, g) => {
    const {
      size: w = 24,
      strokeWidth: y = 2,
      absoluteStrokeWidth: x = !1,
      color: S = "currentColor",
      className: C = ""
    } = my() ?? {}, N = c ?? x ? Number(i ?? y) * 24 / Number(a ?? w) : i ?? y;
    return v.createElement(
      "svg",
      {
        ref: g,
        ...gl,
        width: a ?? w ?? gl.width,
        height: a ?? w ?? gl.height,
        stroke: r ?? S,
        strokeWidth: N,
        className: Xf("lucide", C, d),
        ...!f && !py(m) && { "aria-hidden": "true" },
        ...m
      },
      [
        ...p.map(([E, j]) => v.createElement(E, j)),
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
const Se = (r, a) => {
  const i = v.forwardRef(
    ({ className: c, ...d }, f) => v.createElement(vy, {
      ref: f,
      iconNode: a,
      className: Xf(
        `lucide-${dy(df(r))}`,
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
const yy = [
  ["circle", { cx: "12", cy: "13", r: "8", key: "3y4lt7" }],
  ["path", { d: "M12 9v4l2 2", key: "1c63tq" }],
  ["path", { d: "M5 3 2 6", key: "18tl5t" }],
  ["path", { d: "m22 6-3-3", key: "1opdir" }],
  ["path", { d: "M6.38 18.7 4 21", key: "17xu3x" }],
  ["path", { d: "M17.64 18.67 20 21", key: "kv2oe2" }]
], Zf = Se("alarm-clock", yy);
/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const gy = [
  ["path", { d: "m12 19-7-7 7-7", key: "1l729n" }],
  ["path", { d: "M19 12H5", key: "x3x0zl" }]
], _y = Se("arrow-left", gy);
/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const xy = [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "m12 5 7 7-7 7", key: "xquz4c" }]
], wy = Se("arrow-right", xy);
/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Sy = [
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
], Vl = Se("baby", Sy);
/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ky = [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]], Cy = Se("check", ky);
/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const jy = [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]], ep = Se("chevron-down", jy);
/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ey = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }]
], Ny = Se("circle-check", Ey);
/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ty = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3", key: "1u773s" }],
  ["path", { d: "M12 17h.01", key: "p32p05" }]
], Ry = Se("circle-question-mark", Ty);
/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ay = [["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }]], by = Se("circle", Ay);
/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Py = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M12 6v6h4", key: "135r8i" }]
], $y = Se("clock-3", Py);
/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const My = [
  [
    "path",
    { d: "M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3", key: "11bfej" }
  ]
], Iy = Se("command", My);
/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ly = [
  ["path", { d: "M12 15V3", key: "m9g1x1" }],
  ["path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4", key: "ih7n3h" }],
  ["path", { d: "m7 10 5 5 5-5", key: "brsn70" }]
], tp = Se("download", Ly);
/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Dy = [
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
], zy = Se("file-code-corner", Dy);
/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Oy = [
  ["path", { d: "M15 6a9 9 0 0 0-9 9V3", key: "1cii5b" }],
  ["circle", { cx: "18", cy: "6", r: "3", key: "1h7g24" }],
  ["circle", { cx: "6", cy: "18", r: "3", key: "fqmcym" }]
], Hy = Se("git-branch", Oy);
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
      d: "M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3",
      key: "1xhozi"
    }
  ]
], Wy = Se("headphones", Fy);
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
], Uy = Se("layers", By);
/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Vy = [
  ["rect", { width: "7", height: "7", x: "3", y: "3", rx: "1", key: "1g98yp" }],
  ["rect", { width: "7", height: "7", x: "14", y: "3", rx: "1", key: "6d4xhi" }],
  ["rect", { width: "7", height: "7", x: "14", y: "14", rx: "1", key: "nxv5o0" }],
  ["rect", { width: "7", height: "7", x: "3", y: "14", rx: "1", key: "1bb6yr" }]
], qy = Se("layout-grid", Vy);
/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Qy = [
  ["path", { d: "M4 5h16", key: "1tepv9" }],
  ["path", { d: "M4 12h16", key: "1lakjw" }],
  ["path", { d: "M4 19h16", key: "1djgab" }]
], np = Se("menu", Qy);
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
      d: "M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719",
      key: "1sd12s"
    }
  ]
], Yy = Se("message-circle", Ky);
/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Gy = [
  ["path", { d: "M12 19v3", key: "npa21l" }],
  ["path", { d: "M19 10v2a7 7 0 0 1-14 0v-2", key: "1vc78b" }],
  ["rect", { x: "9", y: "2", width: "6", height: "13", rx: "3", key: "s6n7sd" }]
], Jy = Se("mic", Gy);
/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Xy = [
  ["path", { d: "M13 2a9 9 0 0 1 9 9", key: "1itnx2" }],
  ["path", { d: "M13 6a5 5 0 0 1 5 5", key: "11nki7" }],
  [
    "path",
    {
      d: "M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384",
      key: "9njp5v"
    }
  ]
], Zy = Se("phone-call", Xy);
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
], tg = Se("phone-off", eg);
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
      d: "M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384",
      key: "9njp5v"
    }
  ]
], ql = Se("phone", ng);
/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const rg = [
  ["path", { d: "M16.247 7.761a6 6 0 0 1 0 8.478", key: "1fwjs5" }],
  ["path", { d: "M19.075 4.933a10 10 0 0 1 0 14.134", key: "ehdyv1" }],
  ["path", { d: "M4.925 19.067a10 10 0 0 1 0-14.134", key: "1q22gi" }],
  ["path", { d: "M7.753 16.239a6 6 0 0 1 0-8.478", key: "r2q7qm" }],
  ["circle", { cx: "12", cy: "12", r: "2", key: "1c9p78" }]
], sg = Se("radio", rg);
/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const og = [
  ["path", { d: "m21 21-4.34-4.34", key: "14j7rj" }],
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }]
], ig = Se("search", og);
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
      d: "M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915",
      key: "1i5ecw"
    }
  ],
  ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }]
], rp = Se("settings", ag);
/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const lg = [
  ["path", { d: "M10 5H3", key: "1qgfaw" }],
  ["path", { d: "M12 19H3", key: "yhmn1j" }],
  ["path", { d: "M14 3v4", key: "1sua03" }],
  ["path", { d: "M16 17v4", key: "1q0r14" }],
  ["path", { d: "M21 12h-9", key: "1o4lsq" }],
  ["path", { d: "M21 19h-5", key: "1rlt1p" }],
  ["path", { d: "M21 5h-7", key: "1oszz2" }],
  ["path", { d: "M8 10v4", key: "tgpxqk" }],
  ["path", { d: "M8 12H3", key: "a7s4jb" }]
], _l = Se("sliders-horizontal", lg);
/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ug = [
  ["rect", { width: "16", height: "20", x: "4", y: "2", rx: "2", key: "1nb95v" }],
  ["path", { d: "M12 6h.01", key: "1vi96p" }],
  ["circle", { cx: "12", cy: "14", r: "4", key: "1jruaj" }],
  ["path", { d: "M12 14h.01", key: "1etili" }]
], Ql = Se("speaker", ug);
/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const cg = [
  ["line", { x1: "10", x2: "14", y1: "2", y2: "2", key: "14vaq8" }],
  ["line", { x1: "12", x2: "15", y1: "14", y2: "11", key: "17fdiu" }],
  ["circle", { cx: "12", cy: "14", r: "8", key: "1e1u0o" }]
], dg = Se("timer", cg);
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
      d: "m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",
      key: "wmoenq"
    }
  ],
  ["path", { d: "M12 9v4", key: "juzpu7" }],
  ["path", { d: "M12 17h.01", key: "p32p05" }]
], pg = Se("triangle-alert", fg);
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
      d: "M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",
      key: "uqj9uw"
    }
  ],
  ["path", { d: "M16 9a5 5 0 0 1 0 6", key: "1q6k2b" }],
  ["path", { d: "M19.364 18.364a9 9 0 0 0 0-12.728", key: "ijwkga" }]
], mg = Se("volume-2", hg);
/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const vg = [
  ["rect", { width: "8", height: "8", x: "3", y: "3", rx: "2", key: "by2w9f" }],
  ["path", { d: "M7 11v4a2 2 0 0 0 2 2h4", key: "xkn7yn" }],
  ["rect", { width: "8", height: "8", x: "13", y: "13", rx: "2", key: "1cgmvn" }]
], ff = Se("workflow", vg);
/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const yg = [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
], sp = Se("x", yg), gg = { ru: "Тема", en: "Theme" }, _g = { ru: "Тёмная", en: "Dark" }, xg = { ru: "Светлая", en: "Light" }, wg = { ru: "Токен", en: "Token" }, Sg = { ru: "Тип действия", en: "Action type" }, kg = { ru: "Ветка диалога", en: "Conversation branch" }, Cg = { ru: "Текст ответа", en: "Response text" }, jg = { ru: "Команда", en: "Command" }, Eg = { ru: "Название переменной", en: "Variable name" }, Ng = { ru: "Основная команда", en: "Main command" }, Tg = { ru: "Второстепенная команда", en: "Secondary command" }, Rg = { ru: "Прямая команда", en: "Direct command" }, Ag = { ru: "Дополнительные фразы", en: "Additional phrases" }, bg = { ru: "Удалённый сервер", en: "Remote server" }, Pg = { ru: "Вложенные команды", en: "Nested commands" }, $g = { ru: "Тип вложенного значения", en: "Nested value type" }, Mg = { ru: "Тип данных", en: "Data type" }, Ig = { ru: "Вручную", en: "Manual" }, Lg = { ru: "Любой", en: "Any" }, Dg = { ru: "Любой", en: "Any" }, zg = { ru: "Текст", en: "Text" }, Og = { ru: "Число", en: "Number" }, Hg = { ru: "Дата", en: "Date" }, Fg = { ru: "Время", en: "Time" }, Wg = {
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
  Theme: gg,
  dark: _g,
  light: xg,
  "Client ID": { ru: "Идентификатор клиента", en: "Client ID" },
  "Is admin": { ru: "Администратор", en: "Administrator" },
  "Active remout": { ru: "Удалённый сервер", en: "Remote server" },
  "Enable API (/api/dialog/commands, /api/dialog/events, /api/dialog/event)": { ru: "Включить API (/api/dialog/commands, /api/dialog/events, /api/dialog/event)", en: "Enable API (/api/dialog/commands, /api/dialog/events, /api/dialog/event)" },
  "API Commands Token": { ru: "Токен API команд", en: "Commands API token" },
  "Global music timer": { ru: "Звук таймера по умолчанию", en: "Default timer sound" },
  "Global music alarm": { ru: "Звук будильника по умолчанию", en: "Default alarm sound" },
  "Timer / Alarm": { ru: "Таймеры и будильники", en: "Timers and alarms" },
  "Base URL": { ru: "Адрес сервера", en: "Server URL" },
  Token: wg,
  actionType: Sg,
  actionTypeComponent: kg,
  voiceResponse: Cg,
  uuid: jg,
  mappingType: Eg,
  parent_type: Ng,
  children_type: Tg,
  children_direct_type: Rg,
  "Язык интерфейса": { ru: "Язык интерфейса", en: "Interface language" },
  subVoiceCommands: Ag,
  "Hide password": { ru: "Скрыть пароль", en: "Hide password" },
  "Show password": { ru: "Показать пароль", en: "Show password" },
  Условие: { ru: "Условие", en: "Condition" },
  Remote: bg,
  subDirectControl: Pg,
  subMappingType: $g,
  valueType: Mg,
  manual: Ig,
  "mappingType:": { ru: "Тип значения:", en: "Value type:" },
  "Редактировать прямую команду": { ru: "Редактировать прямую команду", en: "Edit direct command" },
  "Создать прямую команду": { ru: "Создать прямую команду", en: "Create direct command" },
  all: Lg,
  All: Dg,
  string: zg,
  int: Og,
  date: Hg,
  time: Fg,
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
  "Браузер заблокировал звук. Проверьте разрешение воспроизведения и громкость телефона.": { ru: "Браузер заблокировал звук. Проверьте разрешение воспроизведения и громкость телефона.", en: "The browser blocked audio. Check playback permission and the phone volume." }
}, op = "ha-dialog-ui-language";
let Kl = localStorage.getItem(op) === "en" ? "en" : "ru";
const Nl = /* @__PURE__ */ new Set();
function Bg(r) {
  Kl = r, localStorage.setItem(op, r), Nl.forEach((a) => a());
}
function ip() {
  return v.useSyncExternalStore((r) => (Nl.add(r), () => {
    Nl.delete(r);
  }), () => Kl);
}
function _(r) {
  if (typeof r != "string") return r;
  const a = Wg[r];
  return (a == null ? void 0 : a[Kl]) ?? r;
}
const Ug = "_button_180pj_1", Vg = "_full_180pj_32", qg = "_primary_180pj_37", Qg = "_secondary_180pj_49", Kg = "_ghost_180pj_61", Yg = "_remove_180pj_83", xl = {
  button: Ug,
  full: Vg,
  primary: qg,
  secondary: Qg,
  ghost: Kg,
  remove: Yg
}, ie = ({
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
        ${xl.button}
        ${xl[a]}
        ${i ? xl.full : ""}
        ${f}
      `,
    children: [
      c,
      r,
      d
    ]
  }
), Tl = "ha-dialog-ui-api-enabled-change", ap = v.createContext(!1), Yl = () => v.useContext(ap), lp = v.createContext(!1), Gl = () => v.useContext(lp), ai = "ha-dialog-ui-remote-server-change", up = v.createContext(null), Dr = () => v.useContext(up), Je = (r = 768) => {
  const [a, i] = v.useState(
    window.innerWidth <= r
  );
  return v.useEffect(() => {
    const c = window.matchMedia(`(max-width: ${r}px)`), d = (f) => {
      i(f.matches);
    };
    return i(c.matches), c.addEventListener("change", d), () => c.removeEventListener("change", d);
  }, [r]), a;
}, Gg = "_tabs_1vwxg_1", Jg = "_dropdown_1vwxg_16", Xg = "_tab_1vwxg_1", Zg = "_active_1vwxg_49", e_ = "_menu_1vwxg_59", t_ = "_chevron_1vwxg_76", n_ = "_menuItem_1vwxg_84", he = {
  tabs: Gg,
  dropdown: Jg,
  tab: Xg,
  active: Zg,
  menu: e_,
  chevron: t_,
  menuItem: n_
}, ct = () => {
  const r = Je(), a = Yl(), i = Gl(), c = Dr(), d = _t(), [f, p] = v.useState(!1), m = v.useRef(null), g = v.useRef(null), w = v.useId();
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
    return /* @__PURE__ */ o.jsxs("div", { className: he.tabs, children: [
      c === !0 && /* @__PURE__ */ o.jsxs(
        ut,
        {
          to: "/scripts",
          className: ({ isActive: y }) => y ? `${he.tab} ${he.active}` : he.tab,
          children: [
            /* @__PURE__ */ o.jsx(zy, { size: 16, strokeWidth: 2 }),
            /* @__PURE__ */ o.jsx("span", { children: _(c ? "Действия удалённых команд" : "Запуск скриптов") })
          ]
        }
      ),
      c === !1 && /* @__PURE__ */ o.jsxs(
        "div",
        {
          className: he.dropdown,
          ref: m,
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
                className: `${he.tab} ${d.pathname.startsWith("/commands") ? he.active : ""}`,
                "aria-expanded": f,
                "aria-controls": w,
                onClick: () => p((y) => !y),
                onKeyDown: (y) => {
                  y.key === "ArrowDown" && (y.preventDefault(), p(!0), requestAnimationFrame(() => {
                    var x, S;
                    return (S = (x = m.current) == null ? void 0 : x.querySelector("a")) == null ? void 0 : S.focus();
                  }));
                },
                children: [
                  /* @__PURE__ */ o.jsx(Iy, { size: 16, strokeWidth: 2 }),
                  /* @__PURE__ */ o.jsx("span", { children: _("Команды") }),
                  /* @__PURE__ */ o.jsx(ep, { size: 14, className: he.chevron })
                ]
              }
            ),
            f && /* @__PURE__ */ o.jsxs(
              "nav",
              {
                id: w,
                className: he.menu,
                "aria-label": _("Разделы команд"),
                onClick: () => p(!1),
                children: [
                  /* @__PURE__ */ o.jsx(
                    ut,
                    {
                      to: "/commands/main",
                      className: ({ isActive: y }) => y ? `${he.menuItem} ${he.active}` : he.menuItem,
                      children: _("Основные команды")
                    }
                  ),
                  /* @__PURE__ */ o.jsx(
                    ut,
                    {
                      to: "/commands/sub",
                      className: ({ isActive: y }) => y ? `${he.menuItem} ${he.active}` : he.menuItem,
                      children: _("Второстепенные команды")
                    }
                  ),
                  /* @__PURE__ */ o.jsx(
                    ut,
                    {
                      to: "/commands/direct/main",
                      className: ({ isActive: y }) => y ? `${he.menuItem} ${he.active}` : he.menuItem,
                      children: _("Прямые команды")
                    }
                  ),
                  /* @__PURE__ */ o.jsx(
                    ut,
                    {
                      to: "/commands/settings",
                      className: ({ isActive: y }) => y ? `${he.menuItem} ${he.active}` : he.menuItem,
                      children: _("Ответы по умолчанию")
                    }
                  ),
                  i && /* @__PURE__ */ o.jsx(
                    ut,
                    {
                      to: "/commands/whisper",
                      className: ({ isActive: y }) => y ? `${he.menuItem} ${he.active}` : he.menuItem,
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
        ut,
        {
          to: "/timer",
          className: ({ isActive: y }) => y ? `${he.tab} ${he.active}` : he.tab,
          children: [
            /* @__PURE__ */ o.jsx(dg, { size: 16, strokeWidth: 2 }),
            /* @__PURE__ */ o.jsx("span", { children: _("Таймеры") })
          ]
        }
      ),
      /* @__PURE__ */ o.jsxs(
        ut,
        {
          to: "/alarm",
          className: ({ isActive: y }) => y ? `${he.tab} ${he.active}` : he.tab,
          children: [
            /* @__PURE__ */ o.jsx(Zf, { size: 16, strokeWidth: 2 }),
            /* @__PURE__ */ o.jsx("span", { children: _("Будильники") })
          ]
        }
      ),
      /* @__PURE__ */ o.jsxs(ut, { to: "/monitor", className: ({ isActive: y }) => y ? `${he.tab} ${he.active}` : he.tab, children: [
        /* @__PURE__ */ o.jsx(Vl, { size: 16 }),
        /* @__PURE__ */ o.jsx("span", { children: _("Радионяня") })
      ] }),
      /* @__PURE__ */ o.jsxs(ut, { to: "/calls", className: ({ isActive: y }) => y ? `${he.tab} ${he.active}` : he.tab, children: [
        /* @__PURE__ */ o.jsx(ql, { size: 16 }),
        /* @__PURE__ */ o.jsx("span", { children: _("Звонки") })
      ] }),
      i && /* @__PURE__ */ o.jsxs(ut, { to: "/downloads", className: ({ isActive: y }) => y ? `${he.tab} ${he.active}` : he.tab, children: [
        /* @__PURE__ */ o.jsx(tp, { size: 16 }),
        /* @__PURE__ */ o.jsx("span", { children: _("Импорт и экспорт") })
      ] }),
      a && i && /* @__PURE__ */ o.jsx(ut, { to: "/logs", className: ({ isActive: y }) => y ? `${he.tab} ${he.active}` : he.tab, children: _("Логи") }),
      /* @__PURE__ */ o.jsxs(
        ut,
        {
          to: "/settings",
          className: ({ isActive: y }) => y ? `${he.tab} ${he.active}` : he.tab,
          children: [
            /* @__PURE__ */ o.jsx(rp, { size: 16, strokeWidth: 2 }),
            /* @__PURE__ */ o.jsx("span", { children: _("Настройки") })
          ]
        }
      )
    ] });
}, Ps = "dialogCustomUiOverlay", Xo = [], li = /* @__PURE__ */ new Set();
let r_ = 0, br = null, Rl = !1;
function s_() {
  Rl = !0, window.addEventListener("popstate", () => {
    Rl = !1;
    const r = [...li];
    li.clear(), queueMicrotask(() => r.forEach((a) => a()));
  }, { once: !0 }), history.back();
}
function cp(r, a) {
  const i = Je(), c = v.useRef(a);
  c.current = a, v.useEffect(() => {
    if (!r || !i) return;
    const d = `overlay-${++r_}`;
    let f = !1, p = !1, m = !1;
    const g = () => {
      var y;
      Xo.at(-1) !== d || ((y = history.state) == null ? void 0 : y[Ps]) === d || (f = !0, c.current());
    }, w = () => {
      var x;
      if (m) return;
      p = !0, Xo.push(d);
      const y = { ...history.state, [Ps]: d };
      br && ((x = history.state) == null ? void 0 : x[Ps]) === br ? (history.replaceState(y, ""), br = null) : history.pushState(y, ""), window.addEventListener("popstate", g);
    };
    return Rl ? li.add(w) : w(), () => {
      var y;
      m = !0, li.delete(w), window.removeEventListener("popstate", g), p && (Xo.splice(Xo.indexOf(d), 1), !f && ((y = history.state) == null ? void 0 : y[Ps]) === d && (br = d, queueMicrotask(() => {
        var x;
        br === d && (br = null, ((x = history.state) == null ? void 0 : x[Ps]) === d && s_());
      })));
    };
  }, [r, i]);
}
const o_ = "_overlay_tb5vv_1", i_ = "_sheet_tb5vv_11", a_ = "_handle_tb5vv_21", Yn = {
  overlay: o_,
  sheet: i_,
  handle: a_
}, Jl = ({
  open: r,
  className: a = "",
  labelledBy: i,
  onClose: c,
  children: d
}) => {
  cp(r, c);
  const [f, p] = v.useState(r), [m, g] = v.useState(r), w = v.useRef(0), y = v.useRef(0), [x, S] = v.useState(0);
  v.useEffect(() => {
    const j = document.body.style.overflow;
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
      document.body.style.overflow = j;
    };
  }, [r]);
  const C = (j) => {
    w.current = j.touches[0].clientY;
  }, N = (j) => {
    y.current = j.touches[0].clientY;
    const P = y.current - w.current;
    P > 0 && S(P);
  }, E = () => {
    x > 120 && c(), S(0);
  };
  return v.useEffect(() => {
    const j = (P) => {
      P.key === "Escape" && c();
    };
    return r && window.addEventListener(
      "keydown",
      j
    ), () => {
      window.removeEventListener(
        "keydown",
        j
      );
    };
  }, [r, c]), f ? /* @__PURE__ */ o.jsx(
    "div",
    {
      className: `${Yn.overlay} ${m ? Yn.visible : ""} ${a}`,
      onClick: c,
      children: /* @__PURE__ */ o.jsxs(
        "section",
        {
          className: `${Yn.sheet} ${m ? Yn.open : ""}`,
          style: {
            transform: `translateY(${x}px)`,
            transition: x === 0 ? "transform .3s cubic-bezier(.32,.72,0,1)" : "none"
          },
          onClick: (j) => j.stopPropagation(),
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": i,
          children: [
            /* @__PURE__ */ o.jsx(
              "div",
              {
                className: Yn.handleArea,
                onTouchStart: C,
                onTouchMove: N,
                onTouchEnd: E,
                children: /* @__PURE__ */ o.jsx("div", { className: Yn.handle })
              }
            ),
            /* @__PURE__ */ o.jsx("div", { className: Yn.content, children: d })
          ]
        }
      )
    }
  ) : null;
}, l_ = "_overlay_avpnk_1", u_ = "_heading_avpnk_16", c_ = "_close_avpnk_32", d_ = "_nav_avpnk_45", f_ = "_item_avpnk_51", p_ = "_icon_avpnk_70", h_ = "_label_avpnk_78", m_ = "_arrow_avpnk_86", v_ = "_active_avpnk_91", ln = {
  overlay: l_,
  heading: u_,
  close: c_,
  nav: d_,
  item: f_,
  icon: p_,
  label: h_,
  arrow: m_,
  active: v_
};
function y_({ open: r, onClose: a }) {
  const i = Yl(), c = Gl(), d = Dr(), { pathname: f } = _t(), p = v.useId(), m = v.useRef(null), g = [
    ...d === !1 ? [
      { to: "/commands/main", label: "Основные команды", icon: Yy },
      { to: "/commands/sub", label: "Второстепенные команды", icon: Hy },
      { to: "/commands/direct/main", label: "Прямые команды", icon: ff },
      { to: "/commands/direct/template", label: "Вложенные команды", icon: Uy },
      { to: "/commands/settings", label: "Ответы по умолчанию", icon: _l },
      ...c ? [{ to: "/commands/whisper", label: "Промпт распознавания", icon: _l }] : []
    ] : d === !0 ? [{ to: "/scripts", label: "Действия удалённых команд", icon: ff }] : [],
    { to: "/timer", label: "Таймеры", icon: $y },
    { to: "/alarm", label: "Будильники", icon: Zf },
    { to: "/monitor", label: "Радионяня", icon: Vl },
    { to: "/calls", label: "Звонки", icon: ql },
    ...c ? [{ to: "/downloads", label: "Импорт и экспорт", icon: tp }] : [],
    ...i && c ? [{ to: "/logs", label: "Логи", icon: _l }] : [],
    { to: "/settings", label: "Настройки", icon: rp }
  ];
  return v.useEffect(() => {
    if (!r) return;
    const w = requestAnimationFrame(() => {
      var y, x, S;
      return (S = ((y = m.current) == null ? void 0 : y.querySelector('[aria-current="page"]')) ?? ((x = m.current) == null ? void 0 : x.querySelector("a"))) == null ? void 0 : S.focus();
    });
    return () => cancelAnimationFrame(w);
  }, [r]), /* @__PURE__ */ o.jsx(Jl, { open: r, onClose: a, labelledBy: p, className: ln.overlay, children: /* @__PURE__ */ o.jsxs("div", { ref: m, onKeyDown: (w) => {
    if (w.key !== "Tab") return;
    const y = [...m.current.querySelectorAll("button, a")], x = y[0], S = y[y.length - 1];
    w.shiftKey && w.target === x ? (w.preventDefault(), S.focus()) : !w.shiftKey && w.target === S && (w.preventDefault(), x.focus());
  }, children: [
    /* @__PURE__ */ o.jsxs("div", { className: ln.heading, children: [
      /* @__PURE__ */ o.jsx("h2", { id: p, children: _("Разделы") }),
      /* @__PURE__ */ o.jsx("button", { type: "button", className: ln.close, "aria-label": _("Закрыть меню разделов"), onClick: a, children: /* @__PURE__ */ o.jsx(sp, { size: 20 }) })
    ] }),
    /* @__PURE__ */ o.jsx("nav", { className: ln.nav, "aria-label": _("Навигация интеграции"), children: g.map(({ to: w, label: y, icon: x }) => /* @__PURE__ */ o.jsxs(
      ut,
      {
        to: w,
        end: !0,
        className: ({ isActive: S }) => `${ln.item} ${S ? ln.active : ""}`,
        onClick: (S) => {
          f === w && S.preventDefault(), a();
        },
        children: [
          /* @__PURE__ */ o.jsx("span", { className: ln.icon, children: /* @__PURE__ */ o.jsx(x, { size: 20, strokeWidth: 1.8 }) }),
          /* @__PURE__ */ o.jsx("span", { className: ln.label, children: _(y) }),
          f === w ? /* @__PURE__ */ o.jsx(Cy, { size: 18, "aria-hidden": "true" }) : /* @__PURE__ */ o.jsx(wy, { size: 16, className: ln.arrow, "aria-hidden": "true" })
        ]
      },
      w
    )) })
  ] }) });
}
const g_ = "_search_1h7xe_1", __ = {
  search: g_
};
function zr({ value: r, onChange: a }) {
  return /* @__PURE__ */ o.jsxs("div", { className: __.search, children: [
    /* @__PURE__ */ o.jsx(ig, { size: 18, "aria-hidden": "true" }),
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
const x_ = "_header_1pxju_1", w_ = "_bar_1pxju_9", S_ = "_tools_1pxju_18", k_ = "_title_1pxju_31", C_ = "_menuButton_1pxju_38", j_ = "_active_1pxju_76", Gn = {
  header: x_,
  bar: w_,
  tools: S_,
  title: k_,
  menuButton: C_,
  active: j_
}, dt = ({ title: r = "", search: a, beforeSearch: i }) => {
  const c = Je(), [d, f] = v.useState(!1), p = v.useRef(null), m = () => {
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
            "aria-label": _("Открыть меню Home Assistant"),
            className: Gn.menuButton,
            onClick: (g) => g.currentTarget.dispatchEvent(new CustomEvent("hass-toggle-menu", { bubbles: !0, composed: !0 })),
            children: /* @__PURE__ */ o.jsx(np, { size: 20 })
          }
        ),
        /* @__PURE__ */ o.jsx("h1", { className: Gn.title, children: _(r) }),
        /* @__PURE__ */ o.jsx(
          "button",
          {
            type: "button",
            ref: p,
            "aria-label": _("Открыть меню разделов"),
            "aria-haspopup": "dialog",
            "aria-expanded": d,
            className: `${Gn.menuButton} ${d ? Gn.active : ""}`,
            onClick: () => f(!0),
            children: /* @__PURE__ */ o.jsx(qy, { size: 20 })
          }
        )
      ] }),
      c && (i || a) && /* @__PURE__ */ o.jsxs("div", { className: Gn.tools, children: [
        i,
        a && /* @__PURE__ */ o.jsx(zr, { ...a })
      ] })
    ] }),
    c && /* @__PURE__ */ o.jsx(y_, { open: d, onClose: m })
  ] });
};
function E_({ retry: r }) {
  const a = sr();
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
          /* @__PURE__ */ o.jsx(ct, {}),
          /* @__PURE__ */ o.jsx(dt, { title: _("Панель диалога") })
        ] }) : /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
          /* @__PURE__ */ o.jsx(
            ie,
            {
              variant: "ghost",
              "aria-label": _("Открыть меню Home Assistant"),
              onClick: (c) => c.currentTarget.dispatchEvent(
                new CustomEvent("hass-toggle-menu", {
                  bubbles: !0,
                  composed: !0
                })
              ),
              children: /* @__PURE__ */ o.jsx(np, { size: 22 })
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
          /* @__PURE__ */ o.jsx(ie, { onClick: r, children: _("Открыть повторно") })
        ] }) })
      ]
    }
  );
}
class dp extends v.Component {
  constructor() {
    super(...arguments);
    Ne(this, "state", { failed: !1 });
    Ne(this, "retry", () => this.setState({ failed: !1 }));
    Ne(this, "routeChanged", () => {
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
    return this.state.failed ? /* @__PURE__ */ o.jsx(E_, { retry: this.retry }) : this.props.children;
  }
}
const N_ = "_loader_m2244_1", T_ = "_fullscreen_m2244_11", R_ = "_spinner_m2244_15", A_ = "_label_m2244_24", Zo = {
  loader: N_,
  fullscreen: T_,
  spinner: R_,
  label: A_
}, Or = ({ label: r = "Загрузка...", fullscreen: a = !1 }) => /* @__PURE__ */ o.jsxs("div", { className: `${Zo.loader} ${a ? Zo.fullscreen : ""}`, role: "status", "aria-live": "polite", children: [
  /* @__PURE__ */ o.jsx("span", { className: Zo.spinner, "aria-hidden": "true" }),
  r && /* @__PURE__ */ o.jsx("span", { className: Zo.label, children: _(r) })
] }), b_ = "_error_fi1f1_1", P_ = {
  error: b_
}, Ve = ({ error: r, retry: a, busy: i = !1 }) => r ? /* @__PURE__ */ o.jsxs("div", { role: "alert", className: P_.error, children: [
  /* @__PURE__ */ o.jsx("p", { children: _(r) }),
  a && /* @__PURE__ */ o.jsx(ie, { variant: "secondary", disabled: i, onClick: a, children: _("Повторить загрузку") })
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
function Ct(r, a = "Не удалось выполнить операцию. Проверьте журнал Home Assistant и повторите попытку.") {
  return r && typeof r == "object" && "code" in r && typeof r.code == "string" ? (r.code === "call_error" || r.code === "monitor_error" || r.code === "whisper_prompt_error") && "message" in r && typeof r.message == "string" ? r.message : pf[r.code] ?? a : r instanceof Error && /connection|network|fetch|disconnected/i.test(r.message) ? pf.connection_lost : a;
}
function Ut() {
  const [r, a] = v.useState(null), [i, c] = v.useState(!1), [d, f] = v.useState(!1), p = v.useRef(0), m = v.useRef(null), g = v.useCallback(async (x, S = {}) => {
    if (S.exclusive && p.current > 0) return !1;
    p.current += 1, c(!0), a(null), f(!1);
    try {
      return await x(), m.current = null, !0;
    } catch (C) {
      return a(Ct(C, S.fallback)), m.current = S.retryable ? x : null, f(!!S.retryable), !1;
    } finally {
      p.current -= 1, c(p.current > 0);
    }
  }, []), w = v.useCallback(() => {
    m.current && g(m.current, { retryable: !0 });
  }, [g]), y = v.useCallback(() => {
    a(null), f(!1), m.current = null;
  }, []);
  return { error: r, busy: i, retry: d ? w : void 0, run: g, clearError: y };
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
const $_ = "_toast_1g76h_1", M_ = "_warning_1g76h_43", hf = {
  toast: $_,
  warning: M_
};
function I_({ message: r, warning: a = !1, onClose: i }) {
  v.useEffect(() => {
    const d = setTimeout(i, 5e3);
    return () => clearTimeout(d);
  }, [r, a, i]);
  const c = a ? pg : Ny;
  return /* @__PURE__ */ o.jsxs("div", { role: "status", "aria-live": "polite", className: `${hf.toast} ${a ? hf.warning : ""}`, children: [
    /* @__PURE__ */ o.jsx(c, { size: 22, "aria-hidden": "true" }),
    /* @__PURE__ */ o.jsx("span", { children: r }),
    /* @__PURE__ */ o.jsx("button", { type: "button", "aria-label": _("Закрыть уведомление"), onClick: i, children: /* @__PURE__ */ o.jsx(sp, { size: 18 }) })
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
function hp(r) {
  var a;
  return (a = Object.entries(pp).find(([i]) => r === i || r === _(i))) == null ? void 0 : a[1];
}
function hi(r) {
  const a = _(pp["Название команды"]);
  return r ? `${a}
UUID: ${r}` : a;
}
const L_ = "_labelRow_1w41x_1", D_ = "_helpButton_1w41x_12", z_ = "_tooltip_1w41x_37", O_ = "_helpOverlay_1w41x_56", H_ = "_sheetContent_1w41x_60", Ds = {
  labelRow: L_,
  helpButton: D_,
  tooltip: z_,
  helpOverlay: O_,
  sheetContent: H_
};
function Xl({ label: r, htmlFor: a, className: i, hint: c }) {
  const d = c ?? hp(r);
  return /* @__PURE__ */ o.jsxs("div", { className: Ds.labelRow, children: [
    /* @__PURE__ */ o.jsx("label", { htmlFor: a, className: i, children: _(r) }),
    d && /* @__PURE__ */ o.jsx(Ir, { label: r, description: d })
  ] });
}
function Ir({ label: r, description: a = hp(r) ?? "" }) {
  var E, j;
  const i = Je(), [c, d] = v.useState(!1), [f, p] = v.useState({ left: 12, top: 12 }), m = v.useRef(null), g = v.useRef(null), w = v.useRef(), y = v.useId(), x = () => {
    var P;
    d(!1), i && ((P = m.current) == null || P.focus());
  }, S = () => {
    clearTimeout(w.current), d(!0);
  }, C = () => {
    w.current = setTimeout(() => d(!1), 150);
  };
  v.useEffect(() => () => clearTimeout(w.current), []), v.useEffect(() => {
    d(!1);
  }, [i]), v.useLayoutEffect(() => {
    if (!c || i || !m.current || !g.current) return;
    const P = m.current.getBoundingClientRect(), F = g.current.getBoundingClientRect();
    p({
      left: Math.max(12, Math.min(P.left, window.innerWidth - F.width - 12)),
      top: Math.max(12, P.bottom + 8 + F.height <= window.innerHeight - 12 ? P.bottom + 8 : P.top - F.height - 8)
    });
  }, [c, i]), v.useEffect(() => {
    if (!c) return;
    const P = (b) => {
      b.key === "Escape" ? (b.preventDefault(), b.stopImmediatePropagation(), x()) : i && b.key === "Tab" && b.preventDefault();
    };
    window.addEventListener("keydown", P, !0);
    const F = (b) => {
      var O;
      !i && !(b.target instanceof Node && ((O = g.current) != null && O.contains(b.target))) && d(!1);
    };
    return window.addEventListener("scroll", F, !0), window.addEventListener("resize", F), () => {
      window.removeEventListener("keydown", P, !0), window.removeEventListener("scroll", F, !0), window.removeEventListener("resize", F);
    };
  }, [c, i]);
  const N = ((E = m.current) == null ? void 0 : E.closest("[data-theme]")) ?? ((j = m.current) == null ? void 0 : j.getRootNode());
  return /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
    /* @__PURE__ */ o.jsx(
      "button",
      {
        ref: m,
        type: "button",
        className: Ds.helpButton,
        "aria-label": `${_("Подсказка")}: ${_(r)}`,
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
        children: /* @__PURE__ */ o.jsx(Ry, { size: 16, "aria-hidden": "true" })
      }
    ),
    c && N && Jf.createPortal(i ? /* @__PURE__ */ o.jsx(Jl, { open: !0, onClose: x, className: Ds.helpOverlay, labelledBy: y, children: /* @__PURE__ */ o.jsxs("div", { className: Ds.sheetContent, children: [
      /* @__PURE__ */ o.jsx("h3", { id: y, children: _(r) }),
      /* @__PURE__ */ o.jsx("p", { children: _(a) }),
      /* @__PURE__ */ o.jsx(ie, { autoFocus: !0, variant: "secondary", onClick: x, children: _("Закрыть подсказку") })
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
        children: _(a)
      }
    ), N)
  ] });
}
const F_ = "_field_1vuim_1", W_ = "_label_1vuim_10", B_ = "_inputWrapper_1vuim_18", U_ = "_input_1vuim_18", V_ = "_passwordInput_1vuim_40", q_ = "_passwordToggle_1vuim_66", Q_ = "_error_1vuim_95", K_ = "_errorText_1vuim_108", bn = {
  field: F_,
  label: W_,
  inputWrapper: B_,
  input: U_,
  passwordInput: V_,
  passwordToggle: q_,
  error: Q_,
  errorText: K_
}, qe = ({
  label: r,
  hint: a,
  error: i,
  disabled: c,
  className: d = "",
  id: f,
  type: p,
  ...m
}) => {
  const g = v.useId(), [w, y] = v.useState(!1), x = f ?? g, S = p === "password" && w ? "text" : p;
  return /* @__PURE__ */ o.jsxs("div", { className: bn.field, children: [
    r && /* @__PURE__ */ o.jsx(Xl, { label: r, htmlFor: x, className: bn.label, hint: a }),
    /* @__PURE__ */ o.jsxs("div", { className: bn.inputWrapper, children: [
      /* @__PURE__ */ o.jsx(
        "input",
        {
          id: x,
          disabled: c,
          type: S,
          ...m,
          "aria-invalid": i ? !0 : m["aria-invalid"],
          "aria-describedby": [m["aria-describedby"], i ? `${x}-error` : void 0].filter(Boolean).join(" ") || void 0,
          className: `
            ${bn.input}
            ${p === "password" ? bn.passwordInput : ""}
            ${i ? bn.error : ""}
            ${d}
          `
        }
      ),
      p === "password" && /* @__PURE__ */ o.jsx(
        "button",
        {
          type: "button",
          className: bn.passwordToggle,
          onClick: () => y((C) => !C),
          disabled: c,
          "aria-label": w ? "Hide password" : "Show password",
          children: w ? "🙈" : "👁"
        }
      )
    ] }),
    i && /* @__PURE__ */ o.jsx("span", { id: `${x}-error`, className: bn.errorText, children: _(i) })
  ] });
}, Y_ = "_field_1aipr_1", G_ = "_label_1aipr_8", J_ = "_textarea_1aipr_14", X_ = "_error_1aipr_46", Z_ = "_errorText_1aipr_55", $s = {
  field: Y_,
  label: G_,
  textarea: J_,
  error: X_,
  errorText: Z_
}, tr = ({
  label: r,
  hint: a,
  error: i,
  className: c = "",
  id: d,
  ...f
}) => {
  const p = v.useId(), m = d ?? p;
  return /* @__PURE__ */ o.jsxs("div", { className: $s.field, children: [
    r && /* @__PURE__ */ o.jsx(Xl, { label: r, htmlFor: m, className: $s.label, hint: a }),
    /* @__PURE__ */ o.jsx(
      "textarea",
      {
        id: m,
        ...f,
        className: `
          ${$s.textarea}
          ${i ? $s.error : ""}
          ${c}
        `
      }
    ),
    i && /* @__PURE__ */ o.jsx("span", { className: $s.errorText, children: _(i) })
  ] });
}, e1 = "_form_15zw4_1", t1 = "_actions_15zw4_8", mf = {
  form: e1,
  actions: t1
};
function n1() {
  const r = ot(), a = Ut(), [i, c] = v.useState({ url: "", initial_prompt: "", has_token: !1 }), [d, f] = v.useState(""), [p, m] = v.useState(""), [g, w] = v.useState(!1), [y, x] = v.useState(null);
  v.useEffect(() => {
    let N = !0;
    return a.run(async () => {
      const E = await r.getData("get_whisper_prompt");
      N && (c({ ...E, initial_prompt: Array.isArray(E.initial_prompt) ? E.initial_prompt.join("; ") : E.initial_prompt }), m(E.url), w(!0));
    }, { retryable: !0 }), () => {
      N = !1;
    };
  }, [r, a.run]);
  const S = (N) => {
    c((E) => ({ ...E, ...N })), x(null);
  }, C = (N) => a.run(async () => {
    const E = await r.saveData({
      url: i.url,
      token: d,
      apply: N,
      initial_prompt: i.initial_prompt
    }, "save_whisper_prompt");
    c((j) => ({ ...j, initial_prompt: Array.isArray(E.initial_prompt) ? E.initial_prompt.join("; ") : E.initial_prompt, has_token: !!(d.trim() || j.has_token && i.url === p) })), x({ message: N ? E.applied ? "Сохранено и применено в Whisper. Перезапуск контейнера не нужен." : "Сохранено в Home Assistant. Не удалось применить в Whisper. После восстановления подключения нажмите «Отправить в Whisper» повторно." : "Сохранено в Home Assistant.", warning: N && !E.applied }), m(i.url), f("");
  }, { exclusive: !0 });
  return /* @__PURE__ */ o.jsxs("section", { className: mf.form, children: [
    /* @__PURE__ */ o.jsx(Ve, { ...a }),
    !g && !a.error && /* @__PURE__ */ o.jsx(Or, {}),
    g && /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
      /* @__PURE__ */ o.jsx(
        qe,
        {
          label: _("Адрес API Whisper"),
          hint: _("Адрес контейнера Whisper с API промпта, например http://192.168.1.10:10301. Это отдельный HTTP-порт, не Wyoming-порт 10300. Для сохранения промпта в Home Assistant адрес не нужен."),
          placeholder: "http://192.168.1.10:10301",
          value: i.url,
          disabled: a.busy,
          onChange: (N) => S({ url: N.target.value })
        }
      ),
      /* @__PURE__ */ o.jsx(
        qe,
        {
          label: _("Токен API Whisper"),
          hint: _("Необязательно. Если WHISPER_PROMPT_TOKEN в контейнере не задан, оставьте поле пустым. Иначе укажите его без префикса Bearer. Сохранённый токен не показывается и используется повторно для того же адреса."),
          type: "password",
          value: d,
          disabled: a.busy,
          autoComplete: "new-password",
          placeholder: i.has_token && i.url === p ? _("Токен сохранён; оставьте пустым, чтобы сохранить его") : "",
          onChange: (N) => {
            f(N.target.value), x(null);
          }
        }
      ),
      /* @__PURE__ */ o.jsx(
        tr,
        {
          label: _("Промпт распознавания"),
          hint: _("Подсказка initial_prompt для Whisper: привычные слова, названия и примеры фраз. Укажите фразы через ; — они сохраняются массивом. Например: «Насыпь еды; Запусти пылесос; Включи свет в коридоре». Это подсказка распознавания, а не инструкция для диалога. Пустой текст отключает подсказку. После отправки в Whisper применяется со следующего распознавания, без перезапуска модели."),
          rows: 10,
          maxLength: 16e3,
          value: i.initial_prompt,
          disabled: a.busy,
          onChange: (N) => S({ initial_prompt: N.target.value })
        }
      ),
      /* @__PURE__ */ o.jsxs("div", { className: mf.actions, children: [
        /* @__PURE__ */ o.jsx(ie, { variant: "secondary", disabled: a.busy, onClick: () => void C(!1), children: _("Сохранить") }),
        /* @__PURE__ */ o.jsx(ie, { disabled: a.busy || !i.url.trim(), onClick: () => void C(!0), children: _("Отправить в Whisper") })
      ] }),
      y && /* @__PURE__ */ o.jsx(I_, { message: _(y.message), warning: y.warning, onClose: () => x(null) })
    ] })
  ] });
}
const r1 = "_page_z6937_7", s1 = "_header_z6937_19", o1 = "_headerTop_z6937_24", i1 = "_heading_z6937_31", a1 = "_title_z6937_36", l1 = "_description_z6937_45", u1 = "_actions_z6937_52", c1 = "_list_z6937_57", d1 = "_innerTabs_z6937_88", f1 = "_innerTab_z6937_88", p1 = "_activeInnerTab_z6937_121", h1 = "_settingsActions_z6937_131", m1 = "_listSentinel_z6937_141", v1 = "_settingsSections_z6937_145", y1 = "_settingsSection_z6937_145", g1 = "_settingsMobileActions_z6937_171", _1 = "_connectionFields_z6937_191", x1 = "_collectionHeader_z6937_197", X = {
  page: r1,
  header: s1,
  headerTop: o1,
  heading: i1,
  title: a1,
  description: l1,
  actions: u1,
  list: c1,
  innerTabs: d1,
  innerTab: f1,
  activeInnerTab: p1,
  settingsActions: h1,
  listSentinel: m1,
  settingsSections: v1,
  settingsSection: y1,
  settingsMobileActions: g1,
  connectionFields: _1,
  collectionHeader: x1
};
function w1() {
  const r = Je();
  return /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
    /* @__PURE__ */ o.jsx(dt, { title: "Промпт распознавания" }),
    /* @__PURE__ */ o.jsxs("div", { className: X.page, children: [
      !r && /* @__PURE__ */ o.jsx(ct, {}),
      /* @__PURE__ */ o.jsx("div", { className: `${X.header} ${X.collectionHeader}`, children: /* @__PURE__ */ o.jsx("div", { className: X.headerTop, children: /* @__PURE__ */ o.jsx("div", { className: X.heading, children: !r && /* @__PURE__ */ o.jsx("h1", { className: X.title, children: _("Промпт распознавания") }) }) }) }),
      /* @__PURE__ */ o.jsx(n1, {})
    ] })
  ] });
}
const S1 = "_heading_1w2wz_1", k1 = "_note_1w2wz_6", C1 = "_entries_1w2wz_12", j1 = "_entry_1w2wz_19", E1 = "_line_1w2wz_27", N1 = "_error_1w2wz_40", T1 = "_body_1w2wz_49", Pn = {
  heading: S1,
  note: k1,
  entries: C1,
  entry: j1,
  line: E1,
  error: N1,
  body: T1
};
function R1() {
  const r = ot(), a = Ut(), [i, c] = v.useState([]);
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
  }, [r, a.run]), /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
    /* @__PURE__ */ o.jsx(dt, { title: _("Логи") }),
    /* @__PURE__ */ o.jsxs("main", { className: X.page, children: [
      /* @__PURE__ */ o.jsx(ct, {}),
      /* @__PURE__ */ o.jsx("h1", { className: Pn.heading, children: _("Логи") }),
      /* @__PURE__ */ o.jsx("p", { className: Pn.note, children: _("Последние 200 записей API с телами запросов и ответов. Обновление каждые 3 секунды. После перезапуска журнал очищается. Секретные поля и настроенные токены скрыты.") }),
      /* @__PURE__ */ o.jsx(Ve, { ...a }),
      !i.length && !a.busy && !a.error && /* @__PURE__ */ o.jsx("p", { children: _("Запросов к API пока нет.") }),
      /* @__PURE__ */ o.jsx("div", { className: Pn.entries, children: i.map((d) => /* @__PURE__ */ o.jsxs("article", { className: Pn.entry, children: [
        /* @__PURE__ */ o.jsxs("div", { className: Pn.line, children: [
          /* @__PURE__ */ o.jsx("time", { dateTime: d.timestamp, children: new Date(d.timestamp).toLocaleString() }),
          /* @__PURE__ */ o.jsxs("strong", { children: [
            d.method,
            " ",
            d.path
          ] })
        ] }),
        /* @__PURE__ */ o.jsxs("div", { className: Pn.line, children: [
          /* @__PURE__ */ o.jsx("span", { children: _({ connected: "SSE подключён", event: "Событие SSE", completed: "Запрос завершён" }[d.phase] ?? d.phase) }),
          d.status !== null && /* @__PURE__ */ o.jsxs("span", { className: d.status >= 400 ? Pn.error : void 0, children: [
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
          ([f, p]) => p != null && /* @__PURE__ */ o.jsxs("details", { className: Pn.body, children: [
            /* @__PURE__ */ o.jsx("summary", { children: _(f) }),
            /* @__PURE__ */ o.jsx("pre", { children: JSON.stringify(p, null, 2) })
          ] }, f)
        )
      ] }, `${d.timestamp}-${d.phase}`)) })
    ] })
  ] });
}
var Al = /* @__PURE__ */ new Map(), ei = /* @__PURE__ */ new WeakMap(), vf = 0, A1;
function b1(r) {
  return r ? (ei.has(r) || (vf += 1, ei.set(r, vf.toString())), ei.get(r)) : "0";
}
function P1(r) {
  return Object.keys(r).sort().filter(
    (a) => r[a] !== void 0
  ).map((a) => `${a}_${a === "root" ? b1(r.root) : r[a]}`).toString();
}
function $1(r) {
  const a = P1(r);
  let i = Al.get(a);
  if (!i) {
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
    d = f.thresholds || (Array.isArray(r.threshold) ? r.threshold : [r.threshold || 0]), i = {
      id: a,
      observer: f,
      elements: c
    }, Al.set(a, i);
  }
  return i;
}
function M1(r, a, i = {}, c = A1) {
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
  const { id: d, observer: f, elements: p } = $1(i), m = p.get(r) || [];
  return p.has(r) || p.set(r, m), m.push(a), f.observe(r), function() {
    m.splice(m.indexOf(a), 1), m.length === 0 && (p.delete(r), f.unobserve(r)), p.size === 0 && (f.disconnect(), Al.delete(d));
  };
}
function I1({
  threshold: r,
  delay: a,
  trackVisibility: i,
  rootMargin: c,
  root: d,
  triggerOnce: f,
  skip: p,
  initialInView: m,
  fallbackInView: g,
  onChange: w
} = {}) {
  var y;
  const [x, S] = v.useState(null), C = v.useRef(w), N = v.useRef(m), [E, j] = v.useState({
    inView: !!m,
    entry: void 0
  });
  C.current = w, v.useEffect(
    () => {
      if (N.current === void 0 && (N.current = m), p || !x) return;
      let O;
      return O = M1(
        x,
        (B, M) => {
          const Z = N.current;
          N.current = B, !(Z === void 0 && !B) && (j({
            inView: B,
            entry: M
          }), C.current && C.current(B, M), M.isIntersecting && f && O && (O(), O = void 0));
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
        O && O();
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
  const P = (y = E.entry) == null ? void 0 : y.target, F = v.useRef(void 0);
  !x && P && !f && !p && F.current !== P && (F.current = P, j({
    inView: !!m,
    entry: void 0
  }), N.current = m);
  const b = [S, E.inView, E.entry];
  return b.ref = b[0], b.inView = b[1], b.entry = b[2], b;
}
function Hr(r, a, i, c) {
  const { ref: d, inView: f } = I1({ threshold: 0, rootMargin: "0px 0px 180px 0px" }), [p, m] = v.useState(!1);
  return v.useEffect(() => {
    !a && (r == null ? void 0 : r.page) === 1 && m(!0);
  }, [a, r]), v.useEffect(() => {
    p && c && f && !a && r && r.page < r.total_pages && i(r.page + 1, !0);
  }, [p, c, f, a, r, i]), d;
}
const wl = (r) => ({
  data: r.data ?? r.script_actions ?? [],
  page: r.page ?? 1,
  page_size: r.page_size ?? 10,
  total_pages: r.total_pages ?? 1,
  total_items: r.total_items ?? 0
});
function mp(r) {
  const a = ot(), [i, c] = v.useState(null), [d, f] = v.useState(""), p = v.useRef(""), m = v.useRef(0), [g, w] = v.useState(!0), [y, x] = v.useState(null), S = v.useRef(), C = v.useRef(1), N = v.useRef(!1), E = v.useRef(), j = v.useCallback(async (b, O = !1) => {
    const B = ++m.current, M = p.current.trim(), Z = b === void 0 && N.current, U = b ?? C.current;
    x(null), w(!0);
    try {
      let G = wl(await a.getPage(r, U, void 0, M));
      const J = Math.max(1, G.total_pages);
      if (U > J && (G = wl(await a.getPage(r, J, void 0, M))), Z && G.page > 1) {
        const te = await Promise.all(Array.from({ length: G.page - 1 }, (ge, de) => a.getPage(r, de + 1, void 0, M).then(wl)));
        G = { ...G, data: [...te.flatMap((ge) => ge.data), ...G.data] };
      }
      if (B !== m.current) return;
      Z || (N.current = O), S.current = void 0, C.current = G.page, c((te) => O && te ? { ...G, data: [...te.data, ...G.data] } : G);
    } catch (G) {
      if (B !== m.current) return;
      S.current = { page: b, append: O }, x(Ct(G, "Не удалось загрузить список. Проверьте подключение к Home Assistant."));
    } finally {
      B === m.current && w(!1);
    }
  }, [a, r]);
  v.useEffect(() => {
    const b = E.current !== r;
    if (E.current = r, !b && p.current === d) return;
    p.current = d, C.current = 1, N.current = !1, m.current += 1, w(!0);
    const O = window.setTimeout(() => {
      j(1);
    }, b ? 0 : 250);
    return () => window.clearTimeout(O);
  }, [r, j, d]);
  const P = v.useCallback((b) => {
    c((O) => O && { ...O, data: b(O.data) });
  }, []);
  return { query: d, setQuery: f, page: i, loading: g, loadPage: j, updateItems: P, error: y, retry: () => {
    var b, O;
    j((b = S.current) == null ? void 0 : b.page, ((O = S.current) == null ? void 0 : O.append) ?? !1);
  } };
}
function L1() {
  const r = ot(), { query: a, setQuery: i, page: c, loading: d, loadPage: f, error: p, retry: m } = mp("get_script_actions_short"), g = c ? { ...c, script_actions: c.data } : null;
  return { query: a, setQuery: i, error: p, retry: m, loading: d, scripts: g, loadScripts: f, getAvailableScripts: () => r.getScripts(), saveScript: async (N) => {
    await r.saveData(N, "save_script_action"), await f();
  }, updateScript: async (N, E) => {
    await r.updateRecord(N, "update_script_action", E), await f();
  }, getScriptAction: async (N) => (await r.getRecord(N, "get_script_action")).data, deleteScriptAction: async (N) => {
    await r.deleteRecord(N, "delete_script_action"), await f();
  } };
}
const D1 = "_subtitle_c1esh_1", z1 = "_card_c1esh_6", O1 = "_content_c1esh_32", H1 = "_title_c1esh_40", F1 = "_arrow_c1esh_46", W1 = "_titleOnly_c1esh_57", Pr = {
  subtitle: D1,
  card: z1,
  content: O1,
  title: H1,
  arrow: F1,
  titleOnly: W1
}, Fr = ({
  title: r,
  subTitle: a,
  onClick: i
}) => /* @__PURE__ */ o.jsxs(
  "button",
  {
    type: "button",
    className: `${Pr.card} ${a ? "" : Pr.titleOnly}`,
    onClick: i,
    children: [
      /* @__PURE__ */ o.jsxs("div", { className: Pr.content, children: [
        /* @__PURE__ */ o.jsx("div", { className: Pr.title, children: r }),
        a && /* @__PURE__ */ o.jsx("div", { className: Pr.subtitle, children: _(a) })
      ] }),
      /* @__PURE__ */ o.jsx("div", { className: Pr.arrow, "aria-hidden": "true", children: "→" })
    ]
  }
), B1 = "_pagination_r0e80_1", U1 = "_button_r0e80_10", V1 = "_label_r0e80_34", q1 = "_pages_r0e80_40", Q1 = "_active_r0e80_48", Jn = {
  pagination: B1,
  button: U1,
  label: V1,
  pages: q1,
  active: Q1
}, Wr = ({ page: r, totalPages: a, onChange: i }) => {
  if (a <= 1) return null;
  const c = Array.from(/* @__PURE__ */ new Set([
    1,
    ...Array.from({ length: 5 }, (f, p) => r + p - 2).filter((f) => f >= 1 && f <= a),
    a
  ])).sort((f, p) => f - p), d = (f) => {
    Number.isInteger(f) && f >= 1 && f <= a && f !== r && i(f);
  };
  return /* @__PURE__ */ o.jsx("nav", { className: Jn.pagination, "aria-label": _("Страницы списка"), children: /* @__PURE__ */ o.jsxs("div", { className: Jn.pages, children: [
    /* @__PURE__ */ o.jsx(
      "button",
      {
        type: "button",
        className: Jn.button,
        disabled: r <= 1,
        onClick: () => d(r - 1),
        "aria-label": _("Предыдущая страница"),
        children: "‹"
      }
    ),
    c.map((f, p) => /* @__PURE__ */ o.jsxs(Af.Fragment, { children: [
      p > 0 && f - c[p - 1] > 1 && /* @__PURE__ */ o.jsx("span", { className: Jn.label, "aria-hidden": "true", children: "…" }),
      /* @__PURE__ */ o.jsx(
        "button",
        {
          type: "button",
          className: `${Jn.button} ${f === r ? Jn.active : ""}`,
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
        className: Jn.button,
        disabled: r >= a,
        onClick: () => d(r + 1),
        "aria-label": _("Следующая страница"),
        children: "›"
      }
    )
  ] }) });
}, K1 = "_overlay_1m3e5_1", Y1 = "_modal_1m3e5_1", G1 = "_header_1m3e5_1", J1 = "_body_1m3e5_1", X1 = "_footer_1m3e5_1", Z1 = "_sm_1m3e5_32", e0 = "_md_1m3e5_36", t0 = "_lg_1m3e5_40", n0 = "_xl_1m3e5_44", r0 = "_title_1m3e5_59", s0 = "_close_1m3e5_86", o0 = "_fields_1m3e5_116", i0 = "_suspended_1m3e5_124", a0 = "_heading_1m3e5_128", gt = {
  overlay: K1,
  modal: Y1,
  header: G1,
  body: J1,
  footer: X1,
  sm: Z1,
  md: e0,
  lg: t0,
  xl: n0,
  title: r0,
  close: s0,
  fields: o0,
  suspended: i0,
  heading: a0
}, Vt = ({
  open: r,
  suspended: a = !1,
  feedback: i,
  onClose: c,
  onBack: d,
  title: f,
  dialogLabel: p,
  subtitle: m,
  footer: g,
  children: w,
  size: y = "md"
}) => (cp(r, c), v.useEffect(() => {
  if (!r || a) return;
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
}, [r, c, a]), r ? /* @__PURE__ */ o.jsx(
  "div",
  {
    className: `${gt.overlay} ${a ? gt.suspended : ""}`,
    "aria-hidden": a || void 0,
    onClick: c,
    children: /* @__PURE__ */ o.jsxs(
      "div",
      {
        className: `${gt.modal} ${gt[y]}`,
        role: p ? "dialog" : void 0,
        "aria-modal": p ? !0 : void 0,
        "aria-label": p,
        onClick: (x) => x.stopPropagation(),
        children: [
          /* @__PURE__ */ o.jsxs("div", { className: gt.header, children: [
            d && /* @__PURE__ */ o.jsx(
              ie,
              {
                variant: "ghost",
                className: gt.close,
                "aria-label": _("Назад к предыдущей команде"),
                onClick: d,
                children: /* @__PURE__ */ o.jsx(_y, { size: 20, "aria-hidden": "true" })
              }
            ),
            f && (m ? /* @__PURE__ */ o.jsxs("div", { className: gt.heading, children: [
              /* @__PURE__ */ o.jsx("h2", { className: gt.title, children: _(f) }),
              m
            ] }) : /* @__PURE__ */ o.jsx("h2", { className: gt.title, children: _(f) })),
            /* @__PURE__ */ o.jsx(
              ie,
              {
                variant: "ghost",
                className: gt.close,
                "aria-label": p ? _("Закрыть") : void 0,
                onClick: c,
                children: "✕"
              }
            )
          ] }),
          /* @__PURE__ */ o.jsxs("div", { className: gt.body, children: [
            /* @__PURE__ */ o.jsx(Ve, { ...i }),
            /* @__PURE__ */ o.jsx("fieldset", { className: gt.fields, disabled: i == null ? void 0 : i.busy, children: w })
          ] }),
          g && /* @__PURE__ */ o.jsx("div", { className: gt.footer, children: /* @__PURE__ */ o.jsx("fieldset", { className: gt.fields, disabled: i == null ? void 0 : i.busy, children: g }) })
        ]
      }
    )
  }
) : null), l0 = "_content_eng69_1", u0 = "_title_eng69_7", c0 = "_actions_eng69_14", d0 = "_row_eng69_20", f0 = "_identifier_eng69_31", Ms = {
  content: l0,
  title: u0,
  actions: c0,
  row: d0,
  identifier: f0
}, Zl = ({ open: r, title: a, uuid: i, onClose: c, actions: d, size: f = "md", layout: p = "column" }) => {
  const m = Je(), g = i ? /* @__PURE__ */ o.jsx("p", { className: Ms.identifier, children: i }) : null, w = /* @__PURE__ */ o.jsxs("div", { className: Ms.content, children: [
    m && /* @__PURE__ */ o.jsxs("div", { children: [
      /* @__PURE__ */ o.jsx("h3", { className: Ms.title, children: a }),
      g
    ] }),
    /* @__PURE__ */ o.jsx("div", { className: `${Ms.actions} ${p === "row" && !m ? Ms.row : ""}`, children: d.map((y) => /* @__PURE__ */ o.jsx(ie, { fullWidth: !0, variant: y.variant, onClick: () => {
      y.onClick(), c();
    }, children: _(y.label) }, y.label)) })
  ] });
  return m ? /* @__PURE__ */ o.jsx(Jl, { open: r, onClose: c, children: w }) : /* @__PURE__ */ o.jsx(Vt, { open: r, onClose: c, title: a, subtitle: g, size: f, children: w });
}, p0 = ({ uuid: r, title: a, open: i, onClose: c, onEdit: d, onDelete: f }) => r ? /* @__PURE__ */ o.jsx(Zl, { open: i, title: a, uuid: r, onClose: c, size: "sm", layout: "row", actions: [
  { label: "Изменить", onClick: () => d(r) },
  { label: "Удалить", variant: "remove", onClick: () => f(r) }
] }) : null, h0 = "_accordion_5owbj_1", m0 = "_header_5owbj_7", v0 = "_content_5owbj_20", ti = {
  accordion: h0,
  header: m0,
  content: v0
}, y0 = ({
  title: r,
  defaultOpen: a = !1,
  children: i
}) => {
  const [c, d] = v.useState(a);
  return /* @__PURE__ */ o.jsxs(
    "div",
    {
      className: ti.accordion,
      "data-open": c,
      children: [
        /* @__PURE__ */ o.jsxs(
          "button",
          {
            type: "button",
            className: ti.header,
            onClick: () => d((f) => !f),
            "aria-expanded": c,
            children: [
              /* @__PURE__ */ o.jsx("span", { children: _(r) }),
              /* @__PURE__ */ o.jsx("span", { className: ti.icon, children: c ? "−" : "+" })
            ]
          }
        ),
        c && /* @__PURE__ */ o.jsx("div", { className: ti.content, children: i })
      ]
    }
  );
}, g0 = "_wrapper_1fgdg_1", _0 = "_dropdown_1fgdg_10", x0 = "_option_1fgdg_22", w0 = "_title_1fgdg_46", S0 = "_uuid_1fgdg_51", k0 = "_hint_1fgdg_52", Xn = {
  wrapper: g0,
  dropdown: _0,
  option: x0,
  title: w0,
  uuid: S0,
  hint: k0
}, C0 = ({
  label: r = "uuid",
  value: a,
  selectedTitle: i,
  searchSource: c = ["search_assistant_commands"],
  minQueryLength: d = 2,
  onChange: f,
  onSelect: p,
  getSelectedValue: m,
  error: g
}) => {
  const w = ot(), y = JSON.stringify(c), x = v.useMemo(() => JSON.parse(y), [y]), [S, C] = v.useState(null), N = m ? "" : i || ((S == null ? void 0 : S.uuid) === a ? S.title : "");
  v.useEffect(() => {
    var H;
    if (!a || i || m || (H = te.current) != null && H.contains(document.activeElement)) return;
    let z = !1;
    return (async () => {
      var Q;
      try {
        for (const R of x) {
          const ae = (Q = (await w.searchAssistantCommands(a, R)).data) == null ? void 0 : Q.find((me) => me.uuid === a);
          if (ae) {
            z || C(ae);
            return;
          }
        }
      } catch {
      }
    })(), () => {
      z = !0;
    };
  }, [w, a, i, m, x]);
  const [E, j] = v.useState(null), [P, F] = v.useState(0), [b, O] = v.useState([]), [B, M] = v.useState(!1), [Z, U] = v.useState(!1), [G, J] = v.useState(!1), te = v.useRef(null), [ge, de] = v.useState({});
  v.useEffect(() => {
    var H, Q;
    if (!B) return;
    const z = () => {
      var Ur, In;
      const R = (In = (Ur = te.current) == null ? void 0 : Ur.querySelector("input")) == null ? void 0 : In.getBoundingClientRect();
      if (!R) return;
      const L = window.visualViewport, ae = ((L == null ? void 0 : L.offsetTop) ?? 0) + 8, me = ((L == null ? void 0 : L.offsetTop) ?? 0) + ((L == null ? void 0 : L.height) ?? window.innerHeight) - 8, _e = Math.min(me, Math.max(ae, R.bottom + 6)), xe = Math.min(me, Math.max(ae, R.top - 6)), Ee = me - _e, ke = xe - ae, Re = Ee < 180 && ke > Ee, it = Math.min(260, Re ? ke : Ee), Mn = Math.max(8, R.left);
      de({
        left: Mn,
        width: Math.max(0, Math.min(R.width, window.innerWidth - Mn - 8)),
        top: Re ? xe : _e,
        transform: Re ? "translateY(-100%)" : void 0,
        maxHeight: it
      });
    };
    return z(), window.addEventListener("scroll", z, !0), window.addEventListener("resize", z), (H = window.visualViewport) == null || H.addEventListener("resize", z), (Q = window.visualViewport) == null || Q.addEventListener("scroll", z), () => {
      var R, L;
      window.removeEventListener("scroll", z, !0), window.removeEventListener("resize", z), (R = window.visualViewport) == null || R.removeEventListener("resize", z), (L = window.visualViewport) == null || L.removeEventListener("scroll", z);
    };
  }, [B]);
  const pe = v.useRef(0), ve = v.useRef(""), je = v.useMemo(() => a.trim(), [a]);
  v.useEffect(() => {
    if (!je) {
      pe.current += 1, j(null), ve.current = "", O([]), M(!1);
      return;
    }
    if (je.length < d) {
      pe.current += 1, j(null), O([]), M(!1);
      return;
    }
    if (!G || N) {
      pe.current += 1, M(!1), U(!1);
      return;
    }
    if (ve.current === je)
      return;
    ve.current = je;
    const z = pe.current + 1;
    pe.current = z;
    const H = window.setTimeout(async () => {
      U(!0), j(null);
      try {
        let Q = [];
        for (const R of x) {
          const L = await w.searchAssistantCommands(je, R), ae = Array.isArray(L == null ? void 0 : L.data) ? L.data : [];
          Q.push(...ae);
        }
        if (pe.current !== z)
          return;
        O(Q), M(Q.length > 0);
      } catch (Q) {
        pe.current === z && (j(Ct(Q)), O([]), M(!1));
      } finally {
        pe.current === z && U(!1);
      }
    }, 250);
    return () => window.clearTimeout(H);
  }, [w, je, x, d, G, P, N]);
  const W = (z) => {
    const H = m ? m(z) : z.uuid;
    pe.current += 1, C(z), ve.current = "", U(!1), O([]), f(H), p == null || p(z), M(!1);
  };
  return /* @__PURE__ */ o.jsxs("div", { ref: te, className: Xn.wrapper, children: [
    /* @__PURE__ */ o.jsx(
      qe,
      {
        label: r,
        value: N || a,
        autoComplete: "off",
        placeholder: _("Начните вводить title или uuid"),
        error: g,
        onBlur: () => {
          J(!1), window.setTimeout(() => M(!1), 150);
        },
        onFocus: () => {
          J(!0), M(!N && b.length > 0);
        },
        onChange: (z) => {
          C(null), f(z.target.value);
        }
      }
    ),
    B && te.current && Jf.createPortal(
      /* @__PURE__ */ o.jsx("div", { role: "listbox", className: Xn.dropdown, style: ge, children: b.map((z) => /* @__PURE__ */ o.jsxs(
        "button",
        {
          role: "option",
          type: "button",
          className: Xn.option,
          onMouseDown: (H) => H.preventDefault(),
          onClick: () => W(z),
          children: [
            /* @__PURE__ */ o.jsx("span", { className: Xn.title, children: z.title || "Без названия" }),
            /* @__PURE__ */ o.jsx("span", { className: Xn.uuid, children: z.uuid }),
            z.mappingType && /* @__PURE__ */ o.jsxs("span", { className: Xn.uuid, children: [
              _("mappingType:"),
              z.mappingType
            ] })
          ]
        },
        z.uuid
      )) }),
      te.current.closest("[data-theme]") ?? te.current
    ),
    /* @__PURE__ */ o.jsx(Ve, { error: E, busy: Z, retry: () => {
      var z, H;
      ve.current = "", (H = (z = te.current) == null ? void 0 : z.querySelector("input")) == null || H.focus(), F((Q) => Q + 1);
    } }),
    Z && /* @__PURE__ */ o.jsx("span", { className: Xn.hint, children: _("Поиск...") })
  ] });
}, j0 = "_field_1esqu_1", E0 = "_row_1esqu_5", N0 = "_inputWrapper_1esqu_11", T0 = "_clearButton_1esqu_22", R0 = "_rowError_1esqu_31", Wt = {
  field: j0,
  row: E0,
  inputWrapper: N0,
  clearButton: T0,
  rowError: R0
}, A0 = {
  parent_type: "search_assistant_commands",
  children_type: "search_assistant_sub_commands",
  children_direct_type: "search_assistant_sub_direct_controls"
};
function Sl({ field: r, value: a, error: i, onChange: c }) {
  return Dr() ? /* @__PURE__ */ o.jsx(qe, { label: _(r), value: a, error: i, onChange: (f) => c(f.target.value) }) : /* @__PURE__ */ o.jsx(
    C0,
    {
      label: _(r),
      value: a,
      error: i,
      searchSource: [A0[r]],
      minQueryLength: 3,
      onChange: c,
      getSelectedValue: (f) => (r === "children_direct_type" ? f.mappingType : f.actionType) ?? f.uuid
    }
  );
}
const b0 = ({
  condition: r,
  index: a,
  defaultOpen: i,
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
  return /* @__PURE__ */ o.jsxs(
    y0,
    {
      title: `${_("Условие")} ${a + 1}`,
      defaultOpen: i,
      children: [
        /* @__PURE__ */ o.jsx("div", { className: Wt.field, children: /* @__PURE__ */ o.jsx(
          Sl,
          {
            field: "parent_type",
            value: r.parent_type ?? "",
            error: p == null ? void 0 : p.parent_type,
            onChange: (x) => c({ ...r, parent_type: x })
          }
        ) }),
        /* @__PURE__ */ o.jsx("div", { className: Wt.field, children: m ? /* @__PURE__ */ o.jsxs(
          "div",
          {
            className: `${Wt.row} ${p != null && p.children_type ? Wt.rowError : ""}`,
            children: [
              /* @__PURE__ */ o.jsx("div", { className: Wt.inputWrapper, children: /* @__PURE__ */ o.jsx(
                Sl,
                {
                  field: "children_type",
                  value: r.children_type ?? "",
                  error: p == null ? void 0 : p.children_type,
                  onChange: (x) => c({ ...r, children_type: x })
                }
              ) }),
              /* @__PURE__ */ o.jsx(
                ie,
                {
                  type: "button",
                  variant: "ghost",
                  className: Wt.clearButton,
                  "aria-label": _("Убрать второстепенную команду"),
                  onClick: w,
                  children: "×"
                }
              )
            ]
          }
        ) : /* @__PURE__ */ o.jsx(
          ie,
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
        /* @__PURE__ */ o.jsx("div", { className: Wt.field, children: g ? /* @__PURE__ */ o.jsxs(
          "div",
          {
            className: `${Wt.row} ${p != null && p.children_direct_type ? Wt.rowError : ""}`,
            children: [
              /* @__PURE__ */ o.jsx("div", { className: Wt.inputWrapper, children: /* @__PURE__ */ o.jsx(
                Sl,
                {
                  field: "children_direct_type",
                  value: r.children_direct_type ?? "",
                  error: p == null ? void 0 : p.children_direct_type,
                  onChange: (x) => c({ ...r, children_direct_type: x })
                }
              ) }),
              /* @__PURE__ */ o.jsx(
                ie,
                {
                  type: "button",
                  variant: "ghost",
                  className: Wt.clearButton,
                  "aria-label": _("Убрать прямую команду"),
                  onClick: y,
                  children: "×"
                }
              )
            ]
          }
        ) : /* @__PURE__ */ o.jsx(
          ie,
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
          ie,
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
}, P0 = "_dropdown_3mupk_2", $0 = "_label_3mupk_11", M0 = "_wrapper_3mupk_19", I0 = "_select_3mupk_23", L0 = "_arrow_3mupk_65", D0 = "_error_3mupk_85", z0 = "_errorText_3mupk_103", Zn = {
  dropdown: P0,
  label: $0,
  wrapper: M0,
  select: I0,
  arrow: L0,
  error: D0,
  errorText: z0
};
function Mr({
  label: r,
  options: a,
  value: i = "",
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
        children: _(r)
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
          value: i,
          onChange: (m) => f == null ? void 0 : f(m.target.value),
          children: [
            /* @__PURE__ */ o.jsx("option", { value: "", disabled: !0, children: _(c) }),
            a.map((m) => /* @__PURE__ */ o.jsx(
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
      /* @__PURE__ */ o.jsx(
        ep,
        {
          size: 18,
          className: Zn.arrow
        }
      )
    ] }),
    d && /* @__PURE__ */ o.jsx("span", { className: Zn.errorText, children: _(d) })
  ] });
}
const O0 = "_form_1ogov_1", H0 = "_section_1ogov_7", F0 = "_sectionTitle_1ogov_18", W0 = "_conditions_1ogov_27", B0 = "_addCondition_1ogov_33", $r = {
  form: O0,
  section: H0,
  sectionTitle: F0,
  conditions: W0,
  addCondition: B0
}, U0 = ({
  open: r,
  feedback: a,
  initialData: i,
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
  const S = (P) => {
    w(P);
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
  }, N = (P, F) => {
    const b = [...g.conditions];
    b[P] = F, S({
      ...g,
      conditions: b
    });
  }, E = (P) => {
    const F = g.conditions.filter(
      (b, O) => O !== P
    );
    S({
      ...g,
      conditions: F.length > 0 ? F : [
        {
          parent_type: ""
        }
      ]
    });
  }, j = () => {
    const P = {
      conditions: []
    };
    return g.name.trim() || (P.name = "Обязательное поле"), g.script_entity_id || (P.script_entity_id = "Обязательное поле"), g.conditions.forEach(
      (F, b) => {
        const O = {};
        F.parent_type.trim() || (O.parent_type = "Обязательное поле"), F.children_type !== void 0 && !F.children_type.trim() && (O.children_type = "Обязательное поле"), F.children_direct_type !== void 0 && !F.children_direct_type.trim() && (O.children_direct_type = "Обязательное поле"), P.conditions[b] = O;
      }
    ), x(P), !P.name && !P.script_entity_id && P.conditions.every(
      (F) => Object.keys(F).length === 0
    );
  };
  return /* @__PURE__ */ o.jsx(
    Vt,
    {
      feedback: a,
      open: r,
      onClose: m,
      title: d ? "Редактировать сценарий" : "Создать сценарий",
      footer: /* @__PURE__ */ o.jsx(
        ie,
        {
          disabled: f,
          onClick: () => {
            j() && (p == null || p(g));
          },
          children: _("Сохранить")
        }
      ),
      children: /* @__PURE__ */ o.jsxs("div", { className: $r.form, children: [
        /* @__PURE__ */ o.jsxs("div", { className: $r.section, children: [
          /* @__PURE__ */ o.jsx(
            qe,
            {
              label: _("Название"),
              value: g.name,
              error: y.name,
              onChange: (P) => S({
                ...g,
                name: P.target.value
              })
            }
          ),
          /* @__PURE__ */ o.jsx(
            Mr,
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
              onSelect: (P) => S({
                ...g,
                script_entity_id: P
              })
            }
          )
        ] }),
        /* @__PURE__ */ o.jsxs("div", { className: $r.section, children: [
          /* @__PURE__ */ o.jsx("h3", { className: $r.sectionTitle, children: _("Условия") }),
          /* @__PURE__ */ o.jsx("div", { className: $r.conditions, children: g.conditions.map(
            (P, F, b) => /* @__PURE__ */ o.jsx(
              b0,
              {
                index: F,
                condition: P,
                defaultOpen: !d,
                errors: y.conditions[F],
                onChange: (O) => N(
                  F,
                  O
                ),
                onDelete: () => E(F),
                totalCount: b.length
              },
              F
            )
          ) }),
          /* @__PURE__ */ o.jsx(
            ie,
            {
              type: "button",
              className: $r.addCondition,
              onClick: C,
              children: _("+ Добавить условие")
            }
          )
        ] })
      ] })
    }
  );
}, V0 = "_container_rqdjx_1", q0 = "_rows_rqdjx_9", Q0 = "_hidden_rqdjx_20", K0 = "_overlay_rqdjx_24", Y0 = "_card_rqdjx_32", G0 = "_title_rqdjx_51", J0 = "_subtitle_rqdjx_51", X0 = "_srOnly_rqdjx_70", un = {
  container: V0,
  rows: q0,
  hidden: Q0,
  overlay: K0,
  card: Y0,
  title: G0,
  subtitle: J0,
  srOnly: X0
};
function Br({ loading: r, itemCount: a, append: i = !1, children: c }) {
  const d = r && a > 0 && !i, f = r && /* @__PURE__ */ o.jsxs("div", { className: d ? un.overlay : un.rows, role: "status", children: [
    /* @__PURE__ */ o.jsx("span", { className: un.srOnly, children: _("Загрузка...") }),
    Array.from({ length: d ? a : i && a > 0 ? 3 : 10 }, (p, m) => /* @__PURE__ */ o.jsxs("div", { className: un.card, "aria-hidden": "true", children: [
      /* @__PURE__ */ o.jsx("span", { className: un.title }),
      /* @__PURE__ */ o.jsx("span", { className: un.subtitle })
    ] }, m))
  ] });
  return /* @__PURE__ */ o.jsxs("div", { className: un.container, "aria-busy": r, children: [
    /* @__PURE__ */ o.jsx("div", { className: `${un.rows} ${d ? un.hidden : ""}`, "aria-hidden": d || void 0, children: c }),
    f
  ] });
}
const Z0 = "_container_9wouv_1", ex = "_visible_9wouv_20", yf = {
  container: Z0,
  visible: ex
}, or = ({
  children: r,
  offset: a = 10,
  startVisible: i = !1
}) => {
  const c = v.useRef(null), [d, f] = v.useState(i);
  return v.useEffect(() => {
    var x;
    const p = (x = c.current) == null ? void 0 : x.getRootNode(), m = p instanceof ShadowRoot ? p.host : null, g = () => window.scrollY + ((m == null ? void 0 : m.scrollTop) ?? 0);
    let w = g();
    const y = () => {
      const S = g();
      S !== w && (S > w && S > a ? f(!0) : f(!1), w = S);
    };
    return m == null || m.addEventListener("scroll", y, { passive: !0 }), window.addEventListener("scroll", y, {
      passive: !0
    }), () => {
      m == null || m.removeEventListener("scroll", y), window.removeEventListener("scroll", y);
    };
  }, [a]), /* @__PURE__ */ o.jsx(
    "div",
    {
      ref: c,
      className: `${yf.container} ${d ? yf.visible : ""}`,
      children: r
    }
  );
}, tx = () => {
  const r = Ut(), a = Dr(), i = a ? "Действия удалённых команд" : "Запуск скриптов", c = Je(), [d, f] = v.useState(), [p, m] = v.useState(!1), [g, w] = v.useState(!1), [y, x] = v.useState({ uuid: "", title: "" }), [S, C] = v.useState(!1), {
    query: N,
    setQuery: E,
    error: j,
    retry: P,
    loading: F,
    scripts: b,
    getAvailableScripts: O,
    loadScripts: B,
    saveScript: M,
    updateScript: Z,
    getScriptAction: U,
    deleteScriptAction: G
  } = L1(), J = Hr(b, F || !!j, B, c), te = { error: r.error ?? j, busy: r.busy, retry: r.error ? r.retry ?? (() => {
    r.clearError(), P();
  }) : P }, ge = () => {
    r.clearError(), f(void 0), C(!1), m(!0);
  }, de = (W) => {
    w(!0), x(W);
  }, pe = (W) => r.run(async () => {
    C(!0);
    const z = await U(
      W
    );
    f(z), m(!0);
  }, { retryable: !0 }), ve = async (W) => {
    await r.run(async () => {
      if (S) {
        if (!W.uuid) return;
        const { uuid: z, ...H } = W;
        await Z(W.uuid, H);
      } else
        await M(W);
      m(!1);
    }, { exclusive: !0 });
  }, je = (W) => r.run(async () => {
    W && await G(W);
  }, { exclusive: !0 });
  return /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
    /* @__PURE__ */ o.jsx(
      dt,
      {
        search: { value: N, onChange: E },
        title: i
      }
    ),
    /* @__PURE__ */ o.jsxs("div", { className: X.page, children: [
      !p && /* @__PURE__ */ o.jsx(Ve, { ...te }),
      /* @__PURE__ */ o.jsx(ct, {}),
      /* @__PURE__ */ o.jsxs("div", { className: `${X.header} ${X.collectionHeader}`, children: [
        /* @__PURE__ */ o.jsxs("div", { className: X.heading, children: [
          c ? /* @__PURE__ */ o.jsx(o.Fragment, {}) : /* @__PURE__ */ o.jsx("h1", { className: X.title, children: _(i) }),
          /* @__PURE__ */ o.jsx("p", { className: X.description, children: _(a ? "Выберите скрипт Home Assistant и укажите типы команд, приходящие с удалённого сервера. Типы вводятся вручную." : "Свяжите распознанную команду со скриптом Home Assistant. Выберите скрипт и задайте условия его запуска.") })
        ] }),
        /* @__PURE__ */ o.jsx("div", { className: X.actions, children: c ? /* @__PURE__ */ o.jsx(or, { children: /* @__PURE__ */ o.jsx(
          ie,
          {
            variant: "primary",
            onClick: ge,
            children: _("Добавить сценарий")
          }
        ) }) : /* @__PURE__ */ o.jsx(o.Fragment, { children: /* @__PURE__ */ o.jsx(
          ie,
          {
            variant: "primary",
            onClick: ge,
            children: _("🞢 Добавить сценарий")
          }
        ) }) }),
        !c && /* @__PURE__ */ o.jsx(zr, { value: N, onChange: E })
      ] }),
      /* @__PURE__ */ o.jsxs("div", { className: X.list, children: [
        /* @__PURE__ */ o.jsx(Br, { loading: F, itemCount: (b == null ? void 0 : b.script_actions.length) ?? 0, append: c, children: b == null ? void 0 : b.script_actions.map((W) => /* @__PURE__ */ o.jsx(
          Fr,
          {
            title: W.title,
            subTitle: "Нажмите для редактирования",
            onClick: () => de(W)
          },
          W.uuid
        )) }),
        !F && !j && N.trim() && !(b != null && b.script_actions.length) && /* @__PURE__ */ o.jsx("p", { role: "status", children: _("Ничего не найдено") }),
        c ? /* @__PURE__ */ o.jsx("div", { ref: J, className: X.listSentinel }) : /* @__PURE__ */ o.jsx(o.Fragment, {})
      ] }),
      c ? /* @__PURE__ */ o.jsx(o.Fragment, {}) : /* @__PURE__ */ o.jsx(
        Wr,
        {
          page: (b == null ? void 0 : b.page) || 1,
          totalPages: (b == null ? void 0 : b.total_pages) || 1,
          onChange: B
        }
      ),
      /* @__PURE__ */ o.jsx(
        p0,
        {
          uuid: y.uuid,
          open: g,
          title: y.title,
          onClose: () => w(!1),
          onEdit: pe,
          onDelete: je
        }
      ),
      /* @__PURE__ */ o.jsx(
        U0,
        {
          feedback: te,
          open: p,
          initialData: d,
          isEdit: S,
          availableScripts: O(),
          loading: F,
          onCancel: () => m(!1),
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
  const a = ot(), { query: i, setQuery: c, page: d, loading: f, loadPage: p, updateItems: m, error: g, retry: w } = mp(r);
  return { query: i, setQuery: c, error: g, retry: w, loading: f, commands: d, loadCommands: p, saveCommand: (E, j) => a.saveData(j, E), updateCommand: async (E, j) => {
    if (!j.uuid) return;
    const { uuid: P, ...F } = j, b = await a.updateRecord(P, E, F);
    return await p(), b;
  }, deleteCommand: (E, j) => a.deleteRecord(j, E), setCommandStatus: async (E, j, P) => {
    const F = await a.updateRecordStatus(E, j, P);
    return m((b) => b.map((O) => O.uuid === j ? { ...O, status: P } : O)), F;
  }, getCommandDetails: (E, j) => a.getRecord(j, E) };
}
const nx = {
  main: { list: "get_assistant_commands_short", detail: "get_assistant_command", create: "save_assistant_command", update: "update_assistant_command", remove: "delete_assistant_command", status: "update_assistant_command_status" },
  sub: { list: "get_assistant_sub_commands_short", detail: "get_assistant_sub_command", create: "save_assistant_sub_command", update: "update_assistant_sub_command", remove: "delete_assistant_sub_command", status: "update_assistant_sub_command_status" },
  direct: { list: "get_assistant_sub_direct_controls_short", detail: "get_assistant_sub_direct_control", create: "save_assistant_sub_direct_control", update: "update_assistant_sub_direct_control", remove: "delete_assistant_sub_direct_control", status: "update_assistant_sub_direct_controls_status" },
  template: { list: "get_assistant_sub_direct_control_samples_short", detail: "get_assistant_sub_direct_control_sample", create: "save_assistant_sub_direct_control_sample", update: "update_assistant_sub_direct_control_sample", remove: "delete_assistant_sub_direct_control_sample" }
};
function mi(r, a) {
  const i = nx[r], { query: c, setQuery: d, commands: f, loading: p, loadCommands: m, getCommandDetails: g, saveCommand: w, updateCommand: y, deleteCommand: x, setCommandStatus: S, error: C, retry: N } = yp(i.list), E = Ut(), [j, P] = v.useState(!1), [F, b] = v.useState(!1), [O, B] = v.useState(a), [M, Z] = v.useState(null), U = () => {
    E.clearError(), b(!1), B(a()), P(!0);
  }, G = (pe) => E.run(async () => {
    const ve = await g(i.detail, pe);
    b(!0);
    const je = { ...ve.data, status: ve.data.status ?? !1 };
    for (const W of ["componentDialog", "subComponentDialog"]) {
      const z = je[W];
      z && (z.nextAction = (z.nextAction ?? []).filter(
        (H) => !H.actionTypeComponent || ["children", "custom"].includes(H.actionTypeComponent)
      ));
    }
    B(je), P(!0);
  }, { retryable: !0 }), J = (pe, ve) => E.run(async () => {
    i.status && await S(i.status, pe, ve);
  }, { exclusive: !0 }), te = (pe) => E.run(async () => {
    await x(i.remove, pe), await m();
  }, { exclusive: !0 }), ge = () => E.run(async () => {
    await w(i.create, O), P(!1), await m();
  }, { exclusive: !0 }), de = () => E.run(async () => {
    await y(i.update, O), P(!1);
  }, { exclusive: !0 });
  return {
    query: c,
    setQuery: d,
    feedback: { error: E.error ?? C, busy: E.busy, retry: E.error ? E.retry ?? (() => {
      E.clearError(), N();
    }) : N },
    listError: C,
    commands: f,
    loading: p,
    loadCommands: m,
    modalOpen: j,
    setModalOpen: P,
    isEdit: F,
    formData: O,
    setFormData: B,
    actionsCommand: M,
    setActionsCommand: Z,
    openCreateModal: U,
    openEditModal: G,
    handleToggleStatus: J,
    handleDelete: te,
    handleCreate: ge,
    handleUpdate: de
  };
}
const rx = "_field_1iloj_1", sx = "_label_1iloj_8", ox = "_select_1iloj_14", kl = {
  field: rx,
  label: sx,
  select: ox
}, $n = ({
  label: r,
  hint: a,
  options: i,
  className: c = "",
  id: d,
  value: f,
  ...p
}) => {
  const m = v.useId(), g = d ?? m, w = f == null ? "" : String(f), y = !w || i.some((x) => x.value === w);
  return /* @__PURE__ */ o.jsxs("div", { className: kl.field, children: [
    r && /* @__PURE__ */ o.jsx(Xl, { label: r, htmlFor: g, className: kl.label, hint: a }),
    /* @__PURE__ */ o.jsxs(
      "select",
      {
        id: g,
        ...p,
        value: w,
        className: `${kl.select} ${c}`,
        children: [
          !y && /* @__PURE__ */ o.jsx("option", { value: w, children: w }),
          i.map((x) => /* @__PURE__ */ o.jsx("option", { value: x.value, disabled: x.disabled, children: _(x.label) }, x.value))
        ]
      }
    )
  ] });
};
function bl({ kind: r, value: a, title: i, onSelect: c }) {
  const d = ot(), [f, p] = v.useState([]), [m, g] = v.useState(!0), [w, y] = v.useState(!1), [x, S] = v.useState(null), [C, N] = v.useState(0), E = v.useRef(null), j = v.useRef(0);
  v.useEffect(() => () => {
    j.current += 1;
  }, []), v.useEffect(() => {
    let O = !1;
    g(!0), S(null);
    const B = r === "nested" ? ["get_assistant_sub_direct_control_samples_short"] : r === "direct" ? ["get_assistant_sub_direct_controls_short"] : ["get_assistant_commands_short", "get_assistant_sub_commands_short"];
    return Promise.all(B.map((M) => d.getAllRecords(M))).then((M) => {
      O || p([...new Map(M.flat().map((Z) => [Z.uuid, Z])).values()]);
    }).catch((M) => {
      O || (S(Ct(M)), E.current = () => N((Z) => Z + 1));
    }).finally(() => {
      O || g(!1);
    }), () => {
      O = !0;
    };
  }, [d, r, C]), v.useEffect(() => {
    a && i && p((O) => O.map((B) => B.uuid === a ? { ...B, title: i } : B));
  }, [a, i]);
  const P = async (O) => {
    var Z;
    if (!O) {
      j.current += 1, S(null), c({ uuid: "", title: "" });
      return;
    }
    const B = f.find((U) => U.uuid === O);
    if (!B) return;
    const M = ++j.current;
    if (S(null), r !== "direct") {
      c(B);
      return;
    }
    y(!0);
    try {
      const U = await d.getRecord(O, "get_assistant_sub_direct_control");
      M === j.current && c({ ...B, mappingType: ((Z = U.data.directControl) == null ? void 0 : Z.mappingType) ?? "" });
    } catch (U) {
      M === j.current && (S(Ct(U)), E.current = () => {
        P(O);
      });
    } finally {
      M === j.current && y(!1);
    }
  }, F = f.map((O) => ({ value: O.uuid, label: O.title || _("Без названия") }));
  a && !f.some((O) => O.uuid === a) && F.unshift({ value: a, label: i || _("Выбранная команда недоступна") });
  const b = _(r === "nested" ? "subDirectControl" : "uuid");
  return /* @__PURE__ */ o.jsxs("div", { children: [
    /* @__PURE__ */ o.jsx(
      $n,
      {
        label: b,
        "aria-label": b,
        value: a,
        disabled: m || w,
        options: [{ value: "", label: _(m ? "Загрузка..." : r === "nested" ? "Без вложенных команд" : "Выберите команду") }, ...F],
        onChange: (O) => {
          P(O.target.value);
        }
      }
    ),
    /* @__PURE__ */ o.jsx(Ve, { error: x, busy: m || w, retry: () => {
      var O;
      return (O = E.current) == null ? void 0 : O.call(E);
    } })
  ] });
}
const ix = [
  { label: "Ответ из списка фраз", value: "default" },
  { label: "Ответ из скрипта", value: "script_response" }
], ax = [
  { label: "all", value: "all" },
  { label: "string", value: "string" },
  { label: "int", value: "int" },
  { label: "date", value: "date" },
  { label: "time", value: "time" },
  { label: "Вложенные команды", value: "command" }
], lx = [
  { label: "По умолчанию", value: "children" },
  { label: "По типу ответа скрипта", value: "custom" }
], ux = "_form_1a1tt_1", cx = "_field_1a1tt_7", dx = "_arrayItem_1a1tt_29", fx = "_logicTabs_1a1tt_46", px = "_sectionTitle_1a1tt_85", hx = "_footerActions_1a1tt_92", mx = "_phraseMode_1a1tt_106", vx = "_directTabLabel_1a1tt_122", yx = "_linkActions_1a1tt_126", Ge = {
  form: ux,
  field: cx,
  arrayItem: dx,
  logicTabs: fx,
  sectionTitle: px,
  footerActions: hx,
  phraseMode: mx,
  directTabLabel: vx,
  linkActions: yx
}, gf = () => ({
  mappingType: "",
  valueType: "",
  voiceCommands: [""],
  manual: !1,
  subDirectControl: ""
}), gp = ({
  open: r,
  feedback: a,
  onClose: i,
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
  }, x = v.useMemo(() => d.directControl ?? gf(), [d]), S = (C) => {
    f((N) => ({
      ...N,
      directControl: {
        ...N.directControl ?? gf(),
        ...C
      }
    }));
  };
  return /* @__PURE__ */ o.jsx(
    Vt,
    {
      feedback: a,
      open: r,
      onClose: i,
      onBack: m,
      title: c,
      footer: /* @__PURE__ */ o.jsx("div", { className: Ge.form, children: /* @__PURE__ */ o.jsx(ie, { onClick: y, children: _("Сохранить") }) }),
      children: /* @__PURE__ */ o.jsxs("div", { className: Ge.form, children: [
        /* @__PURE__ */ o.jsx(
          qe,
          {
            label: _("Название команды"),
            hint: hi(d.uuid),
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
          qe,
          {
            label: _("mappingType"),
            value: x.mappingType,
            onChange: (C) => S({
              mappingType: C.target.value
            })
          }
        ),
        /* @__PURE__ */ o.jsx(
          $n,
          {
            label: _("valueType"),
            value: x.valueType,
            options: ax,
            onChange: (C) => S({
              valueType: C.target.value
            })
          }
        ),
        x.valueType == "command" ? /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
          /* @__PURE__ */ o.jsx("div", { className: Ge.field, children: /* @__PURE__ */ o.jsx(
            tr,
            {
              label: _("Фразы для запуска"),
              hint: _("Фразы прямой команды — общая часть перед вложенными командами. Например: в основной команде «включи ${свет}», здесь — «свет», во вложенных командах — «в зале» и «в спальне». Получатся «включи свет в зале» и «включи свет в спальне».\nПоле можно оставить пустым: тогда используются только фразы вложенных команд. Один набор вложенных команд можно подключать к разным прямым командам."),
              rows: 6,
              value: (x.voiceCommands ?? []).join(`
`),
              onChange: (C) => S({
                voiceCommands: C.target.value.split(`
`)
              })
            }
          ) }),
          /* @__PURE__ */ o.jsx(
            bl,
            {
              kind: "nested",
              value: Array.isArray(x.subDirectControl) ? x.subDirectControl.length ? "__inline__" : "" : x.subDirectControl,
              title: Array.isArray(x.subDirectControl) ? _("Сохранённые вложенные команды") : x.subDirectControlTitle,
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
function gx({ target: r, onBack: a, onSaved: i }) {
  const c = ot(), d = Ut(), [f, p] = v.useState({ title: "" }), [m, g] = v.useState();
  v.useEffect(() => {
    let y = !1;
    return d.run(async () => {
      let x = r.kind === "direct" ? "direct" : "main", S;
      if (r.kind === "direct") S = await c.getRecord(r.uuid, "get_assistant_sub_direct_control");
      else
        try {
          S = await c.getRecord(r.uuid, "get_assistant_command");
        } catch (C) {
          if (!(C && typeof C == "object" && "code" in C && C.code === "not_found")) throw C;
          x = "sub", S = await c.getRecord(r.uuid, "get_assistant_sub_command");
        }
      y || (p({ ...S.data, status: S.data.status ?? !1 }), g(x));
    }, { retryable: !0 }), () => {
      y = !0;
    };
  }, [c, r.uuid, r.kind, d.run]);
  const w = () => d.run(async () => {
    if (!m) return;
    const y = m === "direct" ? "update_assistant_sub_direct_control" : m === "main" ? "update_assistant_command" : "update_assistant_sub_command", { uuid: x, ...S } = f;
    await c.updateRecord(r.uuid, y, S), i(f), a();
  }, { exclusive: !0 });
  return m ? m === "direct" ? /* @__PURE__ */ o.jsx(
    gp,
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
    eu,
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
  ) : /* @__PURE__ */ o.jsx(Vt, { open: !0, onClose: a, onBack: a, title: "Перейти к команде", feedback: d, children: d.busy && /* @__PURE__ */ o.jsx("p", { role: "status", children: _("Загрузка...") }) });
}
const _x = [
  { value: "default", label: "Основной" },
  { value: "default_next_step", label: "Ответ для продолжения диалога" },
  { value: "custom", label: "По типу результата скрипта" }
];
function xx({ response: r, onChange: a }) {
  const i = (r.actionType ?? "").trim().toLowerCase(), c = ["default", "direct", "default_direct", "next"].includes(i) ? "default" : i === "default_next_step" ? "default_next_step" : "custom";
  return /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
    /* @__PURE__ */ o.jsx(
      $n,
      {
        label: _("Типы ответов"),
        "aria-label": _("Типы ответов"),
        value: c,
        options: _x,
        onChange: (d) => a({ actionType: d.target.value === "custom" ? "" : d.target.value })
      }
    ),
    c === "custom" ? /* @__PURE__ */ o.jsx(
      qe,
      {
        label: _("Тип результата скрипта"),
        placeholder: _("Например, room_required"),
        value: r.actionType ?? "",
        onChange: (d) => a({ actionType: d.target.value })
      }
    ) : null,
    /* @__PURE__ */ o.jsx(
      tr,
      {
        label: _("voiceResponse"),
        value: r.voiceResponse,
        onChange: (d) => a({ voiceResponse: d.target.value })
      }
    )
  ] });
}
const wx = "_switchRow_1hmmz_1", Sx = "_input_1hmmz_11", kx = "_track_1hmmz_22", Cx = "_thumb_1hmmz_33", jx = "_label_1hmmz_62", Is = {
  switchRow: wx,
  input: Sx,
  track: kx,
  thumb: Cx,
  label: jx
}, nr = ({ label: r, className: a = "", ...i }) => /* @__PURE__ */ o.jsxs("label", { className: `${Is.switchRow} ${a}`, children: [
  /* @__PURE__ */ o.jsx("input", { ...i, type: "checkbox", className: Is.input }),
  /* @__PURE__ */ o.jsx("span", { className: Is.track, "aria-hidden": "true", children: /* @__PURE__ */ o.jsx("span", { className: Is.thumb }) }),
  /* @__PURE__ */ o.jsx("span", { className: Is.label, children: _(r) })
] }), Ex = [
  { key: "direct", label: "Прямые команды" },
  { key: "continuations", label: "Продолжения" }
];
function Nx({ component: r, onOpenCommand: a, updateComponentArray: i, addComponentArrayItem: c, removeComponentArrayItem: d }) {
  const f = v.useId(), [p, m] = v.useState("direct"), g = Ex.filter((y) => y.key !== "direct" || !r.forwardText), w = r.forwardText && p === "direct" ? "continuations" : p;
  return /* @__PURE__ */ o.jsxs("div", { className: Ge.form, children: [
    /* @__PURE__ */ o.jsx("div", { className: Ge.logicTabs, role: "tablist", "aria-label": _("Настройки логики"), children: g.map((y) => /* @__PURE__ */ o.jsx(
      "button",
      {
        type: "button",
        role: "tab",
        tabIndex: w === y.key ? 0 : -1,
        onKeyDown: (x) => {
          var N, E;
          const S = g.findIndex((j) => j.key === y.key), C = x.key === "ArrowRight" ? (S + 1) % g.length : x.key === "ArrowLeft" ? (S + g.length - 1) % g.length : x.key === "Home" ? 0 : x.key === "End" ? g.length - 1 : -1;
          C < 0 || (x.preventDefault(), m(g[C].key), (E = (N = x.currentTarget.parentElement) == null ? void 0 : N.querySelectorAll('[role="tab"]')[C]) == null || E.focus());
        },
        id: `${f}-command-logic-tab-${y.key}`,
        "aria-selected": w === y.key,
        "aria-controls": `${f}-command-logic-panel-${y.key}`,
        onClick: () => m(y.key),
        children: y.key === "direct" ? /* @__PURE__ */ o.jsx("span", { className: Ge.directTabLabel, children: _(y.label).replace(" ", `
`) }) : _(y.label)
      },
      y.key
    )) }),
    w === "continuations" && /* @__PURE__ */ o.jsxs("div", { role: "tabpanel", id: `${f}-command-logic-panel-continuations`, "aria-labelledby": `${f}-command-logic-tab-continuations`, children: [
      (r.nextAction ?? []).map((y, x) => /* @__PURE__ */ o.jsxs("div", { className: Ge.arrayItem, children: [
        /* @__PURE__ */ o.jsx(
          $n,
          {
            label: _("Вид продолжения"),
            value: y.actionTypeComponent || "children",
            options: lx,
            onChange: (S) => i("nextAction", x, {
              actionTypeComponent: S.target.value
            })
          }
        ),
        y.actionTypeComponent == "custom" ? /* @__PURE__ */ o.jsx(
          qe,
          {
            label: _("Тип результата скрипта"),
            placeholder: _("Например, room_required"),
            value: y.actionType ?? "",
            onChange: (S) => i("nextAction", x, {
              actionType: S.target.value
            })
          }
        ) : /* @__PURE__ */ o.jsx(o.Fragment, {}),
        /* @__PURE__ */ o.jsx(
          bl,
          {
            kind: "continuation",
            value: y.uuid,
            title: y.title,
            onSelect: (S) => i("nextAction", x, {
              uuid: S.uuid,
              title: S.title ?? "",
              actionTypeComponent: y.actionTypeComponent || "children"
            })
          }
        ),
        /* @__PURE__ */ o.jsxs("div", { className: Ge.linkActions, children: [
          y.uuid && /* @__PURE__ */ o.jsx(ie, { variant: "secondary", onClick: () => a({ uuid: y.uuid, kind: "continuation" }, x), children: _("Перейти к команде") }),
          /* @__PURE__ */ o.jsx(
            ie,
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
        ie,
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
      (r.nextDirectControl ?? []).map((y, x) => /* @__PURE__ */ o.jsxs("div", { className: Ge.arrayItem, children: [
        /* @__PURE__ */ o.jsx(
          bl,
          {
            kind: "direct",
            value: y.uuid,
            title: y.title,
            onSelect: (S) => i("nextDirectControl", x, {
              uuid: S.uuid,
              mappingType: S.mappingType ?? "",
              title: S.title ?? ""
            })
          }
        ),
        y.uuid && /* @__PURE__ */ o.jsx(
          qe,
          {
            label: _("mappingType"),
            hint: _("Переменная для фраз запуска. Например, используйте ${room} во фразе, если здесь указано room."),
            readOnly: !0,
            value: y.mappingType ?? ""
          }
        ),
        /* @__PURE__ */ o.jsxs("div", { className: Ge.linkActions, children: [
          y.uuid && /* @__PURE__ */ o.jsx(ie, { variant: "secondary", onClick: () => a({ uuid: y.uuid, kind: "direct" }, x), children: _("Перейти к команде") }),
          /* @__PURE__ */ o.jsx(
            ie,
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
        ie,
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
  feedback: a,
  isEdit: i,
  formData: c,
  componentKey: d,
  setFormData: f,
  onClose: p,
  onBack: m,
  onSave: g,
  onUpdate: w
}) => {
  const x = ot().getScripts(), S = v.useMemo(() => c[d] ?? _f(), [c, d]);
  v.useEffect(() => {
    r && f((U) => {
      var J;
      const G = U[d];
      return (J = G == null ? void 0 : G.nextAction) != null && J.some((te) => !te.actionTypeComponent) ? { ...U, [d]: {
        ...G,
        nextAction: G.nextAction.map((te) => ({ ...te, actionTypeComponent: te.actionTypeComponent || "children" }))
      } } : U;
    });
  }, [r, c.uuid, d, f]);
  const [C, N] = v.useState(null);
  v.useEffect(() => {
    r || N(null);
  }, [r]);
  const [E, j] = v.useState(!1);
  v.useEffect(() => {
    j(!1), F({});
  }, [r, c.uuid, d]);
  const [P, F] = v.useState({}), b = (U) => {
    f((G) => ({
      ...G,
      [d]: {
        ...G[d] ?? _f(),
        ...U
      }
    }));
  }, O = (U, G, J) => {
    const te = [...S[U] ?? []];
    te[G] = { ...te[G], ...J }, b({
      [U]: te
    });
  }, B = (U, G) => {
    b({
      [U]: [...S[U] ?? [], G]
    });
  }, M = (U, G) => {
    b({
      [U]: (S[U] ?? []).filter(
        (J, te) => te !== G
      )
    });
  }, Z = () => {
    const U = {};
    return c.title.trim() || (U.title = "Обязательное поле"), F(U), Object.keys(U).length === 0;
  };
  return /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
    /* @__PURE__ */ o.jsx(
      Vt,
      {
        suspended: !!C,
        feedback: a,
        open: r,
        onClose: p,
        onBack: m,
        title: E ? "Настроить логику" : i ? "Редактировать" : "Создать",
        footer: /* @__PURE__ */ o.jsx("div", { className: Ge.form, children: E ? /* @__PURE__ */ o.jsx(ie, { variant: "secondary", onClick: () => j(!1), children: _("Назад") }) : /* @__PURE__ */ o.jsxs("div", { className: Ge.footerActions, children: [
          /* @__PURE__ */ o.jsx(ie, { variant: "secondary", onClick: () => j(!0), children: _("Настроить логику") }),
          /* @__PURE__ */ o.jsx(ie, { onClick: () => {
            Z() && (i ? w() : g());
          }, children: _(i ? "Обновить" : "Сохранить") })
        ] }) }),
        children: E ? /* @__PURE__ */ o.jsx(
          Nx,
          {
            onOpenCommand: (U, G) => N({ ...U, index: G }),
            component: S,
            updateComponentArray: O,
            addComponentArrayItem: B,
            removeComponentArrayItem: M
          }
        ) : /* @__PURE__ */ o.jsxs("div", { className: Ge.form, children: [
          /* @__PURE__ */ o.jsx(
            qe,
            {
              label: _("Название команды"),
              hint: hi(c.uuid),
              value: c.title,
              error: P.title,
              onChange: (U) => f({
                ...c,
                title: U.target.value
              })
            }
          ),
          /* @__PURE__ */ o.jsx(
            $n,
            {
              label: _("Источник ответа"),
              value: ["ha_storage", "ha", "external"].includes(S.answerType) ? "script_response" : S.answerType,
              options: ix,
              onChange: (U) => b({
                answerType: U.target.value
              })
            }
          ),
          /* @__PURE__ */ o.jsx(
            $n,
            {
              label: _("Скрипт Home Assistant"),
              value: S.script_entity_id ?? "__legacy__",
              options: [
                ...S.script_entity_id === void 0 ? [{ label: _("Использовать существующие сценарии"), value: "__legacy__" }] : [],
                { label: _("Не запускать скрипт"), value: "" },
                ...x.map((U) => ({ label: U.name, value: U.entity_id }))
              ],
              onChange: (U) => b({ script_entity_id: U.target.value })
            }
          ),
          d === "subComponentDialog" && /* @__PURE__ */ o.jsxs("div", { className: Ge.phraseMode, children: [
            /* @__PURE__ */ o.jsx(
              nr,
              {
                label: _("Отправить команду как есть"),
                checked: !!S.forwardText,
                onChange: (U) => b({ forwardText: U.target.checked })
              }
            ),
            /* @__PURE__ */ o.jsx(Ir, { label: "Отправить команду как есть" })
          ] }),
          !(d === "subComponentDialog" && S.forwardText) && /* @__PURE__ */ o.jsx("div", { className: Ge.field, children: /* @__PURE__ */ o.jsx(
            tr,
            {
              label: _("Фразы для запуска"),
              value: (S.voiceCommands == null ? [] : typeof S.voiceCommands != "object" ? S == null ? void 0 : S.voiceCommands.split(";") : S == null ? void 0 : S.voiceCommands).join(`
`),
              onChange: (U) => b({
                voiceCommands: U.target.value.split(`
`)
              })
            }
          ) }),
          /* @__PURE__ */ o.jsxs("section", { className: Ge.form, "aria-label": _("Ответы"), children: [
            /* @__PURE__ */ o.jsx("h3", { className: Ge.sectionTitle, children: _("Ответы") }),
            (S.voiceResponseArray ?? []).map((U, G) => /* @__PURE__ */ o.jsxs("div", { className: Ge.arrayItem, children: [
              /* @__PURE__ */ o.jsx(
                xx,
                {
                  response: U,
                  onChange: (J) => O("voiceResponseArray", G, J)
                }
              ),
              /* @__PURE__ */ o.jsx(
                ie,
                {
                  type: "button",
                  variant: "remove",
                  onClick: () => M("voiceResponseArray", G),
                  children: _("Удалить")
                }
              )
            ] }, G)),
            /* @__PURE__ */ o.jsx(
              ie,
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
    C && /* @__PURE__ */ o.jsx(
      gx,
      {
        target: C,
        onBack: () => N(null),
        onSaved: (U) => {
          var G;
          C.kind === "direct" ? O("nextDirectControl", C.index, { title: U.title, mappingType: ((G = U.directControl) == null ? void 0 : G.mappingType) ?? "" }) : O("nextAction", C.index, { title: U.title });
        }
      },
      `${C.kind}-${C.uuid}`
    )
  ] });
}, vi = ({ command: r, open: a, onClose: i, onToggleStatus: c, onEdit: d, onDelete: f }) => r ? /* @__PURE__ */ o.jsx(Zl, { open: a, title: r.title, uuid: r.uuid, onClose: i, actions: [
  ...c ? [{ label: r.status ? "Выключить" : "Включить", onClick: () => c(r.uuid, !r.status) }] : [],
  { label: "Изменить", variant: "secondary", onClick: () => d(r.uuid) },
  { label: "Удалить", variant: "remove", onClick: () => f(r.uuid) }
] }) : null, Tx = () => vp("componentDialog"), Rx = () => {
  const r = Je(), {
    query: a,
    setQuery: i,
    feedback: c,
    listError: d,
    commands: f,
    loading: p,
    loadCommands: m,
    modalOpen: g,
    setModalOpen: w,
    isEdit: y,
    formData: x,
    setFormData: S,
    actionsCommand: C,
    setActionsCommand: N,
    openCreateModal: E,
    openEditModal: j,
    handleToggleStatus: P,
    handleDelete: F,
    handleCreate: b,
    handleUpdate: O
  } = mi("main", Tx), B = Hr(f, p || !!d, m, r);
  return /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
    /* @__PURE__ */ o.jsx(
      dt,
      {
        search: { value: a, onChange: i },
        title: "Основные команды"
      }
    ),
    /* @__PURE__ */ o.jsxs("div", { className: X.page, children: [
      !g && /* @__PURE__ */ o.jsx(Ve, { ...c }),
      /* @__PURE__ */ o.jsx(ct, {}),
      /* @__PURE__ */ o.jsxs("div", { className: `${X.header} ${X.collectionHeader}`, children: [
        /* @__PURE__ */ o.jsx("div", { className: X.heading, children: r ? /* @__PURE__ */ o.jsx(o.Fragment, {}) : /* @__PURE__ */ o.jsx("h1", { className: X.title, children: _("Основные команды") }) }),
        /* @__PURE__ */ o.jsx("div", { className: X.actions, children: r ? /* @__PURE__ */ o.jsx(or, { children: /* @__PURE__ */ o.jsx(ie, { variant: "primary", onClick: E, children: _("Добавить сценарий") }) }) : /* @__PURE__ */ o.jsx(ie, { variant: "primary", onClick: E, children: _("🞢 Добавить сценарий") }) }),
        !r && /* @__PURE__ */ o.jsx(zr, { value: a, onChange: i })
      ] }),
      /* @__PURE__ */ o.jsxs("div", { className: X.list, children: [
        /* @__PURE__ */ o.jsx(Br, { loading: p, itemCount: (f == null ? void 0 : f.data.length) ?? 0, append: r, children: f == null ? void 0 : f.data.map((M) => /* @__PURE__ */ o.jsx(
          Fr,
          {
            title: M.title,
            subTitle: M.status === !1 ? "Выключена" : "Включена",
            onClick: () => N(M)
          },
          M.uuid
        )) }),
        !p && !d && a.trim() && !(f != null && f.data.length) && /* @__PURE__ */ o.jsx("p", { role: "status", children: _("Ничего не найдено") }),
        r ? /* @__PURE__ */ o.jsx("div", { ref: B, className: X.listSentinel }) : /* @__PURE__ */ o.jsx(o.Fragment, {})
      ] }),
      r ? /* @__PURE__ */ o.jsx(o.Fragment, {}) : /* @__PURE__ */ o.jsx(
        Wr,
        {
          page: (f == null ? void 0 : f.page) || 1,
          totalPages: (f == null ? void 0 : f.total_pages) || 1,
          onChange: (M) => m(M)
        }
      ),
      /* @__PURE__ */ o.jsx(
        eu,
        {
          feedback: c,
          open: g,
          isEdit: y,
          formData: x,
          componentKey: "componentDialog",
          setFormData: S,
          onClose: () => w(!1),
          onSave: b,
          onUpdate: O
        }
      ),
      /* @__PURE__ */ o.jsx(
        vi,
        {
          open: !!C,
          command: C,
          onClose: () => N(null),
          onToggleStatus: P,
          onDelete: F,
          onEdit: (M) => j(M)
        }
      )
    ] })
  ] });
}, Ax = () => vp("subComponentDialog"), bx = () => {
  const r = Je(), {
    query: a,
    setQuery: i,
    feedback: c,
    listError: d,
    commands: f,
    loading: p,
    loadCommands: m,
    modalOpen: g,
    setModalOpen: w,
    isEdit: y,
    formData: x,
    setFormData: S,
    actionsCommand: C,
    setActionsCommand: N,
    openCreateModal: E,
    openEditModal: j,
    handleToggleStatus: P,
    handleDelete: F,
    handleCreate: b,
    handleUpdate: O
  } = mi("sub", Ax), B = Hr(f, p || !!d, m, r);
  return /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
    /* @__PURE__ */ o.jsx(
      dt,
      {
        search: { value: a, onChange: i },
        title: "Второстепенные команды"
      }
    ),
    /* @__PURE__ */ o.jsxs("div", { className: X.page, children: [
      !g && /* @__PURE__ */ o.jsx(Ve, { ...c }),
      r ? /* @__PURE__ */ o.jsx(o.Fragment, {}) : /* @__PURE__ */ o.jsx(ct, {}),
      /* @__PURE__ */ o.jsxs("div", { className: `${X.header} ${X.collectionHeader}`, children: [
        /* @__PURE__ */ o.jsx("div", { className: X.heading, children: r ? /* @__PURE__ */ o.jsx(o.Fragment, {}) : /* @__PURE__ */ o.jsx("h1", { className: X.title, children: _("Второстепенные команды") }) }),
        /* @__PURE__ */ o.jsx("div", { className: X.actions, children: r ? /* @__PURE__ */ o.jsx(or, { children: /* @__PURE__ */ o.jsx(ie, { variant: "primary", onClick: E, children: _("Добавить сценарий") }) }) : /* @__PURE__ */ o.jsx(o.Fragment, { children: /* @__PURE__ */ o.jsx(ie, { variant: "primary", onClick: E, children: _("🞢 Добавить сценарий") }) }) }),
        !r && /* @__PURE__ */ o.jsx(zr, { value: a, onChange: i })
      ] }),
      /* @__PURE__ */ o.jsxs("div", { className: X.list, children: [
        /* @__PURE__ */ o.jsx(Br, { loading: p, itemCount: (f == null ? void 0 : f.data.length) ?? 0, append: r, children: f == null ? void 0 : f.data.map((M) => /* @__PURE__ */ o.jsx(
          Fr,
          {
            title: M.title,
            subTitle: M.status === !1 ? "Выключена" : "Включена",
            onClick: () => N(M)
          },
          M.uuid
        )) }),
        !p && !d && a.trim() && !(f != null && f.data.length) && /* @__PURE__ */ o.jsx("p", { role: "status", children: _("Ничего не найдено") })
      ] }),
      r ? /* @__PURE__ */ o.jsx("div", { ref: B, className: X.listSentinel }) : /* @__PURE__ */ o.jsx(
        Wr,
        {
          page: (f == null ? void 0 : f.page) || 1,
          totalPages: (f == null ? void 0 : f.total_pages) || 1,
          onChange: (M) => m(M)
        }
      ),
      /* @__PURE__ */ o.jsx(
        eu,
        {
          feedback: c,
          open: g,
          isEdit: y,
          formData: x,
          componentKey: "subComponentDialog",
          setFormData: S,
          onClose: () => w(!1),
          onSave: b,
          onUpdate: O
        }
      ),
      /* @__PURE__ */ o.jsx(
        vi,
        {
          open: !!C,
          command: C,
          onClose: () => N(null),
          onToggleStatus: P,
          onDelete: F,
          onEdit: (M) => j(M)
        }
      )
    ] })
  ] });
}, Px = [
  { path: "/commands/direct/main", label: "Команды" },
  { path: "/commands/direct/template", label: "Вложенные команды" }
], ui = () => {
  const { pathname: r } = _t(), a = zl();
  return /* @__PURE__ */ o.jsx("div", { className: X.innerTabs, role: "group", "aria-label": _("Раздел прямых команд"), children: Px.map((i) => /* @__PURE__ */ o.jsx(
    "button",
    {
      type: "button",
      "aria-pressed": r === i.path,
      className: `${X.innerTab} ${r === i.path ? X.activeInnerTab : ""}`,
      onClick: () => a(i.path),
      children: _(i.label)
    },
    i.path
  )) });
}, $x = () => ({
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
}), Mx = () => {
  const r = Je(), {
    query: a,
    setQuery: i,
    feedback: c,
    listError: d,
    commands: f,
    loading: p,
    loadCommands: m,
    modalOpen: g,
    setModalOpen: w,
    isEdit: y,
    formData: x,
    setFormData: S,
    actionsCommand: C,
    setActionsCommand: N,
    openCreateModal: E,
    openEditModal: j,
    handleToggleStatus: P,
    handleDelete: F,
    handleCreate: b,
    handleUpdate: O
  } = mi("direct", $x), B = Hr(f, p || !!d, m, r);
  return /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
    /* @__PURE__ */ o.jsx(
      dt,
      {
        search: { value: a, onChange: i },
        beforeSearch: /* @__PURE__ */ o.jsx(ui, {}),
        title: "Прямые команды"
      }
    ),
    /* @__PURE__ */ o.jsxs("div", { className: X.page, children: [
      !g && /* @__PURE__ */ o.jsx(Ve, { ...c }),
      r ? /* @__PURE__ */ o.jsx(o.Fragment, {}) : /* @__PURE__ */ o.jsx(ct, {}),
      /* @__PURE__ */ o.jsxs("div", { className: `${X.header} ${X.collectionHeader}`, children: [
        /* @__PURE__ */ o.jsxs("div", { className: X.heading, children: [
          r ? /* @__PURE__ */ o.jsx(o.Fragment, {}) : /* @__PURE__ */ o.jsx("h1", { className: X.title, children: _("Прямые команды") }),
          !r && /* @__PURE__ */ o.jsx(ui, {})
        ] }),
        /* @__PURE__ */ o.jsx("div", { className: X.actions, children: r ? /* @__PURE__ */ o.jsx(or, { children: /* @__PURE__ */ o.jsx(ie, { variant: "primary", onClick: E, children: _("Добавить сценарий") }) }) : /* @__PURE__ */ o.jsx(ie, { variant: "primary", onClick: E, children: _("🞢 Добавить сценарий") }) }),
        !r && /* @__PURE__ */ o.jsx(zr, { value: a, onChange: i })
      ] }),
      /* @__PURE__ */ o.jsxs("div", { className: X.list, children: [
        /* @__PURE__ */ o.jsx(Br, { loading: p, itemCount: (f == null ? void 0 : f.data.length) ?? 0, append: r, children: f == null ? void 0 : f.data.map((M) => /* @__PURE__ */ o.jsx(
          Fr,
          {
            title: M.title,
            subTitle: M.status === !1 ? "Выключена" : "Включена",
            onClick: () => N(M)
          },
          M.uuid
        )) }),
        !p && !d && a.trim() && !(f != null && f.data.length) && /* @__PURE__ */ o.jsx("p", { role: "status", children: _("Ничего не найдено") })
      ] }),
      r ? /* @__PURE__ */ o.jsx("div", { ref: B, className: X.listSentinel }) : /* @__PURE__ */ o.jsx(
        Wr,
        {
          page: (f == null ? void 0 : f.page) || 1,
          totalPages: (f == null ? void 0 : f.total_pages) || 1,
          onChange: (M) => m(M)
        }
      ),
      /* @__PURE__ */ o.jsx(
        gp,
        {
          feedback: c,
          open: g,
          onClose: () => w(!1),
          title: _(y ? "Редактировать прямую команду" : "Создать прямую команду"),
          formData: x,
          setFormData: S,
          onSave: y ? O : b
        }
      ),
      /* @__PURE__ */ o.jsx(
        vi,
        {
          open: !!C,
          command: C,
          onClose: () => N(null),
          onToggleStatus: P,
          onDelete: F,
          onEdit: (M) => j(M)
        }
      )
    ] })
  ] });
}, Ix = "_form_mn1ml_1", Lx = "_arrayItem_mn1ml_8", Dx = "_sectionTitle_mn1ml_25", ni = {
  form: Ix,
  arrayItem: Lx,
  sectionTitle: Dx
}, zx = ({
  open: r,
  feedback: a,
  onClose: i,
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
    var E;
    if (!((E = d.title) != null && E.trim())) {
      g("Обязательное поле");
      return;
    }
    g(""), p();
  }, y = v.useMemo(
    () => d.subDirectControl ?? [],
    [d]
  ), x = (E) => {
    f((j) => ({
      ...j,
      subDirectControl: E
    }));
  }, S = (E, j) => {
    const P = [...y];
    P[E] = {
      ...P[E],
      ...j
    }, x(P);
  }, C = () => {
    x([
      ...y,
      {
        subMappingType: "",
        subVoiceCommands: ""
      }
    ]);
  }, N = (E) => {
    x(
      y.filter((j, P) => P !== E)
    );
  };
  return /* @__PURE__ */ o.jsx(
    Vt,
    {
      feedback: a,
      open: r,
      onClose: i,
      title: c,
      footer: /* @__PURE__ */ o.jsx(ie, { onClick: w, children: _("Сохранить") }),
      children: /* @__PURE__ */ o.jsxs("div", { className: ni.form, children: [
        /* @__PURE__ */ o.jsx(
          qe,
          {
            label: _("Название команды"),
            hint: hi(d.uuid),
            required: !0,
            error: m,
            value: d.title,
            onChange: (E) => f((j) => ({
              ...j,
              title: E.target.value
            }))
          }
        ),
        /* @__PURE__ */ o.jsxs("section", { className: ni.form, "aria-label": _("Варианты вложенных команд"), children: [
          /* @__PURE__ */ o.jsx("h3", { className: ni.sectionTitle, children: _("Варианты вложенных команд") }),
          y.map((E, j) => /* @__PURE__ */ o.jsxs(
            "div",
            {
              className: ni.arrayItem,
              children: [
                /* @__PURE__ */ o.jsx(
                  qe,
                  {
                    label: _("Код значения"),
                    value: E.subMappingType ?? "",
                    onChange: (P) => S(j, {
                      subMappingType: P.target.value
                    })
                  }
                ),
                /* @__PURE__ */ o.jsx(
                  tr,
                  {
                    label: _("Варианты произношения"),
                    rows: 3,
                    value: (Array.isArray(E.subVoiceCommands) ? E.subVoiceCommands : []).join(`
`),
                    onChange: (P) => S(j, {
                      subVoiceCommands: P.target.value.split(`
`).filter(Boolean)
                    })
                  }
                ),
                /* @__PURE__ */ o.jsx(
                  ie,
                  {
                    type: "button",
                    variant: "remove",
                    onClick: () => N(j),
                    children: _("Удалить")
                  }
                )
              ]
            },
            j
          )),
          /* @__PURE__ */ o.jsx(
            ie,
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
}, Ox = () => ({
  status: !0,
  title: "",
  subDirectControl: []
}), Hx = () => {
  const r = Je(), {
    query: a,
    setQuery: i,
    feedback: c,
    listError: d,
    commands: f,
    loading: p,
    loadCommands: m,
    modalOpen: g,
    setModalOpen: w,
    isEdit: y,
    formData: x,
    setFormData: S,
    actionsCommand: C,
    setActionsCommand: N,
    openCreateModal: E,
    openEditModal: j,
    handleDelete: P,
    handleCreate: F,
    handleUpdate: b
  } = mi("template", Ox), O = Hr(f, p || !!d, m, r);
  return /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
    /* @__PURE__ */ o.jsx(
      dt,
      {
        search: { value: a, onChange: i },
        beforeSearch: /* @__PURE__ */ o.jsx(ui, {}),
        title: "Вложенные команды"
      }
    ),
    /* @__PURE__ */ o.jsxs("div", { className: X.page, children: [
      !g && /* @__PURE__ */ o.jsx(Ve, { ...c }),
      !r && /* @__PURE__ */ o.jsx(ct, {}),
      /* @__PURE__ */ o.jsxs("div", { className: `${X.header} ${X.collectionHeader}`, children: [
        /* @__PURE__ */ o.jsxs("div", { className: X.heading, children: [
          r ? /* @__PURE__ */ o.jsx(o.Fragment, {}) : /* @__PURE__ */ o.jsx("h1", { className: X.title, children: _("Вложенные команды") }),
          !r && /* @__PURE__ */ o.jsx(ui, {})
        ] }),
        /* @__PURE__ */ o.jsx("div", { className: X.actions, children: r ? /* @__PURE__ */ o.jsx(or, { children: /* @__PURE__ */ o.jsx(ie, { variant: "primary", onClick: E, children: _("Добавить сценарий") }) }) : /* @__PURE__ */ o.jsx(ie, { variant: "primary", onClick: E, children: _("🞢 Добавить сценарий") }) }),
        !r && /* @__PURE__ */ o.jsx(zr, { value: a, onChange: i })
      ] }),
      /* @__PURE__ */ o.jsxs("div", { className: X.list, children: [
        /* @__PURE__ */ o.jsx(Br, { loading: p, itemCount: (f == null ? void 0 : f.data.length) ?? 0, append: r, children: f == null ? void 0 : f.data.map((B) => /* @__PURE__ */ o.jsx(
          Fr,
          {
            title: B.title,
            onClick: () => N(B)
          },
          B.uuid
        )) }),
        !p && !d && a.trim() && !(f != null && f.data.length) && /* @__PURE__ */ o.jsx("p", { role: "status", children: _("Ничего не найдено") })
      ] }),
      r ? /* @__PURE__ */ o.jsx(
        "div",
        {
          ref: O,
          className: X.listSentinel
        }
      ) : /* @__PURE__ */ o.jsx(
        Wr,
        {
          page: (f == null ? void 0 : f.page) ?? 1,
          totalPages: (f == null ? void 0 : f.total_pages) ?? 1,
          onChange: (B) => m(
            B
          )
        }
      ),
      /* @__PURE__ */ o.jsx(
        zx,
        {
          feedback: c,
          open: g,
          onClose: () => w(!1),
          title: y ? "Редактировать" : "Создать",
          formData: x,
          setFormData: S,
          onSave: y ? b : F
        }
      ),
      /* @__PURE__ */ o.jsx(
        vi,
        {
          open: !!C,
          command: C,
          onClose: () => N(null),
          onDelete: P,
          onEdit: (B) => j(B)
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
  return r.actionType && xf[r.actionType] ? _(xf[r.actionType]) : r.title;
}
const Fx = "_form_1i0x1_1", Wx = {
  form: Fx
}, Bx = ({
  open: r,
  feedback: a,
  isEdit: i,
  formData: c,
  setFormData: d,
  onClose: f,
  onUpdate: p
}) => {
  var x, S;
  const m = c, g = ot().getScripts(), w = m.actionType === "default_main" && !!m.forwardCommandToServer, y = (C) => {
    d((N) => ({
      ...N,
      ...C
    }));
  };
  return /* @__PURE__ */ o.jsx(
    Vt,
    {
      feedback: a,
      open: r,
      onClose: f,
      title: i ? "Редактировать" : "Создать",
      footer: /* @__PURE__ */ o.jsx(ie, { onClick: p, children: _("Обновить") }),
      children: /* @__PURE__ */ o.jsxs("div", { className: Wx.form, children: [
        /* @__PURE__ */ o.jsx(
          qe,
          {
            label: _("Название команды"),
            hint: hi(c.uuid),
            value: _p(c),
            readOnly: !0
          }
        ),
        /* @__PURE__ */ o.jsx(
          nr,
          {
            label: _("Завершать диалог"),
            checked: !!m.endStatus,
            onChange: (C) => y({
              endStatus: C.target.checked
            })
          }
        ),
        m.actionType === "default_main" && /* @__PURE__ */ o.jsx(
          nr,
          {
            label: _("Передать команду серверу"),
            checked: !!m.forwardCommandToServer,
            onChange: (C) => y({
              forwardCommandToServer: C.target.checked
            })
          }
        ),
        m.actionType === "default_main" && m.forwardCommandToServer && /* @__PURE__ */ o.jsx(
          $n,
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
        w ? /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
          /* @__PURE__ */ o.jsx(
            qe,
            {
              label: _("Тип результата скрипта"),
              value: "success",
              readOnly: !0,
              hint: _("Ожидается ответ скрипта с типом success. После его получения будет озвучен текст из поля ниже.")
            }
          ),
          /* @__PURE__ */ o.jsx(
            tr,
            {
              rows: 8,
              label: _("Текст озвучки"),
              hint: _("Можно подставить данные из скрипта через ${имя}. Например, для текста «Ответ: ${reply}» передайте reply в поле variables действия ha_dialog_ui.send_command. Имена должны совпадать. Скрипт должен вернуть тип success."),
              placeholder: _("Например: ${reply}"),
              value: ((S = (x = m.voiceResponseArray) == null ? void 0 : x.find((C) => C.actionType === "success")) == null ? void 0 : S.voiceResponse) ?? "",
              onChange: (C) => y({ voiceResponseArray: [{ actionType: "success", voiceResponse: C.target.value }] })
            }
          )
        ] }) : /* @__PURE__ */ o.jsx(
          tr,
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
}, Ux = () => {
  const r = Ut(), a = Je(), [i, c] = v.useState(!1), [d, f] = v.useState(!1), [p, m] = v.useState({ title: "" }), {
    error: g,
    retry: w,
    loading: y,
    loadCommands: x,
    getCommandDetails: S,
    updateCommand: C,
    commands: N
  } = yp("get_assistant_settings_short"), E = Hr(N, y || !!g, x, a), j = { error: r.error ?? g, busy: r.busy, retry: r.error ? r.retry ?? (() => {
    r.clearError(), w();
  }) : w }, P = (b) => r.run(async () => {
    f(!0);
    const O = await S("get_assistant_setting", b.uuid);
    m(O.data), c(!0);
  }, { retryable: !0 }), F = () => r.run(async () => {
    await C("update_assistant_setting", p), c(!1);
  }, { exclusive: !0 });
  return /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
    /* @__PURE__ */ o.jsx(
      dt,
      {
        title: "Ответы по умолчанию"
      }
    ),
    /* @__PURE__ */ o.jsxs("div", { className: X.page, children: [
      !i && /* @__PURE__ */ o.jsx(Ve, { ...j }),
      a ? /* @__PURE__ */ o.jsx(o.Fragment, {}) : /* @__PURE__ */ o.jsx(ct, {}),
      /* @__PURE__ */ o.jsx("div", { className: `${X.header} ${X.collectionHeader}`, children: /* @__PURE__ */ o.jsx("div", { className: X.headerTop, children: /* @__PURE__ */ o.jsx("div", { className: X.heading, children: !a && /* @__PURE__ */ o.jsx("h1", { className: X.title, children: _("Ответы по умолчанию") }) }) }) }),
      /* @__PURE__ */ o.jsx("div", { className: X.list, children: /* @__PURE__ */ o.jsx(Br, { loading: y, itemCount: (N == null ? void 0 : N.data.length) ?? 0, append: a, children: N == null ? void 0 : N.data.map((b) => /* @__PURE__ */ o.jsx(
        Fr,
        {
          title: _p(b),
          onClick: () => P(b)
        },
        b.uuid
      )) }) }),
      a ? /* @__PURE__ */ o.jsx("div", { ref: E, className: X.listSentinel }) : /* @__PURE__ */ o.jsx(
        Wr,
        {
          page: (N == null ? void 0 : N.page) || 1,
          totalPages: (N == null ? void 0 : N.total_pages) || 1,
          onChange: (b) => x(b)
        }
      ),
      /* @__PURE__ */ o.jsx(
        Bx,
        {
          feedback: j,
          open: i,
          isEdit: d,
          formData: p,
          setFormData: m,
          onClose: () => c(!1),
          onUpdate: F
        }
      )
    ] })
  ] });
}, Vx = (r, a) => {
  const i = new Blob([JSON.stringify(a, null, 2)], {
    type: "application/json;charset=utf-8"
  }), c = URL.createObjectURL(i), d = document.createElement("a");
  d.href = c, d.download = r, document.body.appendChild(d), d.click(), d.remove(), URL.revokeObjectURL(c);
};
class $t extends Error {
}
const xp = {
  scripts: { list: "get_script_actions_short", detail: "get_script_action", import: "import_script_actions" },
  scenarios: { list: "get_assistant_sub_commands_short", detail: "get_assistant_sub_command", import: "import_assistant_sub_commands" }
}, Jt = (r) => r !== null && typeof r == "object" && !Array.isArray(r);
async function qx(r, a) {
  if (a === "settings") {
    const d = await r.getData("get_settings"), f = Jt(d) && Jt(d.result) ? d.result : d;
    if (!Jt(f)) throw new $t("Файл не содержит корректные настройки.");
    return Object.fromEntries(["theme", "client_id", "is_admin", "active_remout", "api_commands_enabled", "api_commands_token", "remout", "timer_alarm"].filter((m) => m in f).map((m) => [m, f[m]]));
  }
  if (a === "scenarios") return r.getData("export_command_bundle");
  const i = xp[a], c = await r.getAllRecords(i.list);
  return Promise.all(c.map(async (d) => {
    const f = await r.getRecord(d.uuid, i.detail);
    return Jt(f) ? f.data : void 0;
  }));
}
function Qx(r, a) {
  let i;
  try {
    i = JSON.parse(r);
  } catch {
    throw new $t("Некорректный JSON-файл.");
  }
  if (a === "settings") {
    const d = { theme: "string", client_id: "string", is_admin: "boolean", active_remout: "boolean", api_commands_enabled: "boolean", api_commands_token: "string", remout: "object", timer_alarm: "object" };
    if (!Jt(i) || !Object.keys(i).length || Object.keys(i).some((f) => !d[f] || typeof i[f] !== d[f])) throw new $t("Файл не содержит корректные настройки.");
    if (i.theme !== void 0 && (typeof i.theme != "string" || !["dark", "light"].includes(i.theme))) throw new $t("Файл не содержит корректные настройки.");
    for (const [f, p] of [["remout", ["base_url", "token", "client_id"]], ["timer_alarm", ["global_music_timer", "global_music_alarm"]]])
      if (f in i && (!Jt(i[f]) || Object.entries(i[f]).some(([m, g]) => !p.includes(m) || typeof g != "string"))) throw new $t("Файл не содержит корректные настройки.");
    return i;
  }
  if (a === "scenarios" && Jt(i)) {
    const d = ["commands", "sub_commands", "direct_commands", "templates", "settings"];
    if (i.format !== "ha-dialog-ui-commands" || i.version !== 1 || Object.keys(i).length !== 7 || d.some((f) => !Array.isArray(i[f]))) throw new $t("Некорректный файл сценариев или неподдерживаемая версия.");
    for (const f of d) {
      const p = /* @__PURE__ */ new Set(), m = i[f];
      if (!Array.isArray(m)) throw new $t("Ожидается массив записей JSON.");
      for (const g of m) {
        if (!Jt(g) || typeof g.uuid != "string" || !g.uuid.trim() || p.has(g.uuid) || typeof g.title != "string") throw new $t("Некорректные или повторяющиеся ID записей.");
        p.add(g.uuid);
      }
    }
    return i;
  }
  if (!Array.isArray(i)) throw new $t("Ожидается массив записей JSON.");
  const c = /* @__PURE__ */ new Set();
  for (const d of i) {
    if (!Jt(d) || typeof d.uuid != "string" || !d.uuid.trim() || c.has(d.uuid)) throw new $t("Некорректные или повторяющиеся ID записей.");
    if (c.add(d.uuid), !(a === "scripts" ? typeof d.name == "string" && typeof d.script_entity_id == "string" : typeof d.title == "string" && typeof d.status == "boolean" && Jt(d.subComponentDialog) && typeof d.subComponentDialog.endStatus == "boolean" && typeof d.subComponentDialog.actionType == "string" && typeof d.subComponentDialog.answerType == "string")) throw new $t("Нужен файл с полными записями. Краткий список названий загрузить нельзя.");
  }
  return i;
}
async function Kx(r, a, i) {
  const c = Qx(i, a);
  return await r.saveData(c, a === "settings" ? "import_settings" : a === "scenarios" && !Array.isArray(c) ? "import_command_bundle" : xp[a].import), c;
}
const Yx = "_grid_fc8hl_1", Gx = "_card_fc8hl_8", Jx = "_actions_fc8hl_23", Xx = "_description_fc8hl_29", Zx = "_page_fc8hl_36", Ls = {
  grid: Yx,
  card: Gx,
  actions: Jx,
  description: Xx,
  page: Zx
}, ew = [
  { kind: "scripts", title: "Действия удалённых команд", description: "Привязки команд к скриптам Home Assistant и условия запуска. Самих скриптов HA в файле нет.", download: "Скачать скрипты", upload: "Загрузить скрипты" },
  { kind: "scenarios", title: "Сценарии", description: "Все разделы «Команды»: основные, второстепенные, прямые, шаблоны и ответы по умолчанию. ID и связи сохраняются.", download: "Скачать сценарии", upload: "Загрузить сценарии" },
  { kind: "settings", title: "Настройки интеграции", description: "Тема, параметры подключения, API и звуки таймеров и будильников. Язык интерфейса в файл не входит.", download: "Скачать настройки", upload: "Загрузить настройки" }
], tw = () => {
  const r = ot(), a = Dr(), i = Je(), [c, d] = v.useState(!1), [f, p] = v.useState(""), [m, g] = v.useState(!1), w = v.useRef(null), y = v.useRef(null), x = v.useRef("scripts"), S = async (C, N = !1) => {
    w.current = N ? C : null, d(!0), p(""), g(!1);
    try {
      await C();
    } catch (E) {
      g(!0), p(E instanceof $t ? E.message : Ct(E));
    } finally {
      d(!1);
    }
  };
  return /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
    /* @__PURE__ */ o.jsx(dt, { title: _("Импорт и экспорт") }),
    /* @__PURE__ */ o.jsxs("div", { className: `${X.page} ${Ls.page}`, children: [
      /* @__PURE__ */ o.jsx(ct, {}),
      !i && /* @__PURE__ */ o.jsx("h1", { children: _("Импорт и экспорт") }),
      /* @__PURE__ */ o.jsx("div", { className: Ls.grid, children: ew.filter((C) => C.kind === "scripts" ? a === !0 : C.kind !== "scenarios" || a === !1).map((C) => /* @__PURE__ */ o.jsxs("section", { className: Ls.card, children: [
        /* @__PURE__ */ o.jsx("h2", { children: _(C.title) }),
        /* @__PURE__ */ o.jsx("p", { className: Ls.description, children: _(C.description) }),
        /* @__PURE__ */ o.jsxs("div", { className: Ls.actions, children: [
          /* @__PURE__ */ o.jsx(ie, { disabled: c, onClick: () => S(async () => {
            Vx(`ha-dialog-ui-${C.kind}.json`, await qx(r, C.kind));
          }, !0), children: _(C.download) }),
          /* @__PURE__ */ o.jsx(ie, { variant: "secondary", disabled: c, onClick: () => {
            var N;
            x.current = C.kind, (N = y.current) == null || N.click();
          }, children: _(C.upload) })
        ] })
      ] }, C.kind)) }),
      /* @__PURE__ */ o.jsx("input", { ref: y, type: "file", accept: ".json,application/json", hidden: !0, onChange: (C) => {
        var j;
        const N = (j = C.target.files) == null ? void 0 : j[0], E = x.current;
        C.target.value = "", N && S(async () => {
          const P = await Kx(r, E, await N.text());
          E === "settings" && P !== null && typeof P == "object" && !Array.isArray(P) && (typeof P.theme == "string" && window.dispatchEvent(new CustomEvent("ha-dialog-ui-theme-change", { detail: P.theme })), typeof P.active_remout == "boolean" && window.dispatchEvent(new CustomEvent(ai, { detail: P.active_remout }))), p("Данные загружены.");
        });
      } }),
      c && /* @__PURE__ */ o.jsx("p", { role: "status", children: _("Обработка файла...") }),
      /* @__PURE__ */ o.jsx(Ve, { error: m ? f : null, busy: c, retry: w.current ? () => {
        w.current && S(w.current, !0);
      } : void 0 }),
      !m && f && /* @__PURE__ */ o.jsx("p", { role: "status", children: _(f) })
    ] })
  ] });
};
function nw() {
  const r = ot(), [a, i] = v.useState(null), [c, d] = v.useState([]), f = Ut(), p = Ut(), m = v.useCallback(() => f.run(async () => {
    i(await r.getSettings());
  }, { retryable: !0 }), [r, f.run]), g = v.useCallback(() => p.run(async () => {
    d(await r.getLocalMusicOptions());
  }, { retryable: !0 }), [r, p.run]);
  v.useEffect(() => {
    m();
  }, [m]), v.useEffect(() => {
    g();
  }, [g]);
  const w = async (y) => {
    await r.saveData(y, "save_settings"), typeof y.api_commands_enabled == "boolean" && window.dispatchEvent(new CustomEvent(Tl, { detail: y.api_commands_enabled })), typeof y.active_remout == "boolean" && window.dispatchEvent(new CustomEvent(ai, { detail: y.active_remout }));
  };
  return { loading: f.busy, settings: a, musicOptions: c, saveSettings: w, settingsFeedback: f, musicFeedback: p };
}
const rw = "_form_1ijxr_1", sw = "_field_1ijxr_7", ow = "_input_1ijxr_13", iw = "_label_1ijxr_29", aw = "_help_1ijxr_35", lw = "_toggleHelp_1ijxr_40", st = {
  form: rw,
  field: sw,
  input: ow,
  label: iw,
  help: aw,
  toggleHelp: lw
}, uw = ({ data: r, onChange: a }) => {
  const i = (c, d) => {
    a({
      ...r,
      [c]: d
    });
  };
  return /* @__PURE__ */ o.jsxs("div", { className: st.form, children: [
    /* @__PURE__ */ o.jsx(qe, { label: _("Base URL"), value: r.base_url ?? "", placeholder: _("http://192.168.31.83:9379"), onChange: (c) => i("base_url", c.target.value) }),
    /* @__PURE__ */ o.jsx(qe, { label: _("Token"), value: r.token ?? "", placeholder: _("Bearer ..."), onChange: (c) => i("token", c.target.value) })
  ] });
}, cw = ({ data: r, musicOptions: a, musicUnavailable: i, onChange: c }) => {
  const d = (p, m) => {
    c({
      ...r,
      [p]: m
    });
  }, f = (p, m, g = "") => {
    const w = a.some((y) => y.value === g);
    return /* @__PURE__ */ o.jsxs("label", { className: st.field, children: [
      /* @__PURE__ */ o.jsx("span", { className: st.label, children: _(p) }),
      /* @__PURE__ */ o.jsxs(
        "select",
        {
          className: st.input,
          value: g,
          onChange: (y) => d(m, y.target.value),
          children: [
            /* @__PURE__ */ o.jsx("option", { value: "", children: _("Не выбрано") }),
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
    a.length === 0 && !i && /* @__PURE__ */ o.jsx("span", { className: st.help, children: _("Музыка на сервере не найдена.") })
  ] });
}, dw = ({ data: r, onChange: a }) => {
  const i = ip(), c = (d, f) => {
    a({
      ...r,
      [d]: f
    });
  };
  return /* @__PURE__ */ o.jsxs("div", { className: st.form, children: [
    /* @__PURE__ */ o.jsxs("label", { className: st.field, children: [
      /* @__PURE__ */ o.jsx("span", { className: st.label, children: _("Язык интерфейса") }),
      /* @__PURE__ */ o.jsxs(
        "select",
        {
          className: st.input,
          value: i,
          onChange: (d) => Bg(d.target.value === "en" ? "en" : "ru"),
          children: [
            /* @__PURE__ */ o.jsx("option", { value: "ru", children: "Русский" }),
            /* @__PURE__ */ o.jsx("option", { value: "en", children: "English" })
          ]
        }
      )
    ] }),
    /* @__PURE__ */ o.jsx(
      qe,
      {
        label: _("Client ID"),
        value: r.client_id ?? "",
        onChange: (d) => c("client_id", d.target.value),
        placeholder: _("Уникальный идентификатор клиента")
      }
    ),
    /* @__PURE__ */ o.jsxs("label", { className: st.field, children: [
      /* @__PURE__ */ o.jsx("span", { className: st.label, children: _("Theme") }),
      /* @__PURE__ */ o.jsxs("select", { className: st.input, value: r.theme ?? "dark", onChange: (d) => c("theme", d.target.value), children: [
        /* @__PURE__ */ o.jsx("option", { value: "dark", children: _("dark") }),
        /* @__PURE__ */ o.jsx("option", { value: "light", children: _("light") })
      ] })
    ] }),
    /* @__PURE__ */ o.jsx(nr, { label: _("Is admin"), checked: !!r.is_admin, onChange: (d) => c("is_admin", d.target.checked) })
  ] });
}, fw = ({ data: r, onChange: a }) => {
  const i = (c, d) => a({ ...r, [c]: d });
  return /* @__PURE__ */ o.jsxs("div", { className: st.form, children: [
    /* @__PURE__ */ o.jsxs("div", { className: st.toggleHelp, children: [
      /* @__PURE__ */ o.jsx(nr, { label: _("Подключаться к удалённому серверу"), checked: !!r.active_remout, onChange: (c) => i("active_remout", c.target.checked) }),
      /* @__PURE__ */ o.jsx(Ir, { label: "Подключаться к удалённому серверу", description: "Интеграция подключается к существующему удалённому серверу и получает от него команды по SSE. Для их выполнения используются «Действия удалённых команд», а локальные разделы команд скрываются. Этот переключатель не запускает новый сервер." })
    ] }),
    /* @__PURE__ */ o.jsxs("div", { className: st.toggleHelp, children: [
      /* @__PURE__ */ o.jsx(nr, { label: _("Включить API"), checked: !!r.api_commands_enabled, onChange: (c) => i("api_commands_enabled", c.target.checked) }),
      /* @__PURE__ */ o.jsx(Ir, { label: "Включить API", description: "Позволяет внешним приложениям отправлять команды в интеграцию и обмениваться с ней событиями по HTTP API. Адреса: /api/dialog/commands, /api/dialog/events, /api/dialog/event. Для доступа нужен токен API команд из поля ниже." })
    ] }),
    r.api_commands_enabled && /* @__PURE__ */ o.jsx(
      qe,
      {
        label: _("API Commands Token"),
        value: r.api_commands_token ?? "",
        onChange: (c) => i("api_commands_token", c.target.value),
        placeholder: _("Ключ доступа для API endpoints"),
        type: "password"
      }
    )
  ] });
}, ci = {
  base_url: "",
  token: ""
}, pw = {
  global_music_timer: "",
  global_music_alarm: ""
}, wf = {
  remout: ci,
  timer_alarm: pw,
  theme: "dark",
  is_admin: !1,
  active_remout: !1,
  client_id: "",
  api_commands_enabled: !1,
  api_commands_token: ""
}, hw = (r) => ({
  base_url: (r == null ? void 0 : r.base_url) ?? "",
  token: (r == null ? void 0 : r.token) ?? ""
}), mw = (r) => ({
  global_music_timer: (r == null ? void 0 : r.global_music_timer) ?? "",
  global_music_alarm: (r == null ? void 0 : r.global_music_alarm) ?? ""
}), vw = (r) => ({
  remout: hw(r == null ? void 0 : r.remout),
  timer_alarm: mw(r == null ? void 0 : r.timer_alarm),
  theme: (r == null ? void 0 : r.theme) ?? "dark",
  is_admin: !!(r != null && r.is_admin),
  active_remout: !!(r != null && r.active_remout),
  client_id: (r == null ? void 0 : r.client_id) ?? "",
  api_commands_enabled: !!(r != null && r.api_commands_enabled),
  api_commands_token: (r == null ? void 0 : r.api_commands_token) ?? ""
}), Sf = (r, a) => {
  const i = {};
  return Object.keys(r).forEach((c) => {
    const d = c;
    r[d] !== a[d] && (i[d] = r[d]);
  }), i;
}, kf = (r, a) => {
  const i = {}, c = Sf(r.timer_alarm, a.timer_alarm);
  if (Object.keys(c).length > 0 && (i.timer_alarm = c), r.theme !== a.theme && (i.theme = r.theme), r.is_admin !== a.is_admin && (i.is_admin = r.is_admin), r.active_remout !== a.active_remout && (i.active_remout = r.active_remout), r.client_id !== a.client_id && (i.client_id = r.client_id), r.api_commands_enabled !== a.api_commands_enabled && (i.api_commands_enabled = r.api_commands_enabled), r.api_commands_token !== a.api_commands_token && (i.api_commands_token = r.api_commands_token), r.active_remout) {
    const d = Sf(r.remout ?? ci, a.remout ?? ci);
    Object.keys(d).length > 0 && (i.remout = d);
  }
  return i;
}, yw = () => {
  const r = Je(), [a, i] = v.useState(wf), c = Ut(), [d, f] = v.useState(wf), { settings: p, musicOptions: m, saveSettings: g, settingsFeedback: w, musicFeedback: y } = nw();
  v.useEffect(() => {
    if (!p) return;
    const N = vw(p);
    i(N), f(N), window.dispatchEvent(new CustomEvent("ha-dialog-ui-theme-change", { detail: N.theme }));
  }, [p]);
  const x = async (N) => {
    i((E) => ({ ...E, ...N })), N.theme && N.theme !== a.theme && (window.dispatchEvent(new CustomEvent("ha-dialog-ui-theme-change", { detail: N.theme })), await c.run(async () => {
      await g({ theme: N.theme }), f((E) => ({ ...E, theme: N.theme }));
    }, { exclusive: !0 }));
  }, S = () => c.run(async () => {
    await g(kf(a, d)), f(a);
  }, { exclusive: !0 }), C = !!p && Object.keys(kf(a, d)).length > 0;
  return /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
    /* @__PURE__ */ o.jsx(
      dt,
      {
        title: _("Настройки")
      }
    ),
    /* @__PURE__ */ o.jsxs("div", { className: X.page, children: [
      /* @__PURE__ */ o.jsx(ct, {}),
      r ? /* @__PURE__ */ o.jsx(o.Fragment, {}) : /* @__PURE__ */ o.jsx("h1", { children: _("Настройки") }),
      /* @__PURE__ */ o.jsxs("div", { className: X.settingsSections, children: [
        /* @__PURE__ */ o.jsx(Ve, { ...w }),
        /* @__PURE__ */ o.jsx(Ve, { ...y }),
        /* @__PURE__ */ o.jsx(Ve, { ...c }),
        /* @__PURE__ */ o.jsxs("section", { className: X.settingsSection, "aria-label": _("Общие"), children: [
          /* @__PURE__ */ o.jsx("h2", { children: _("Общие") }),
          /* @__PURE__ */ o.jsx(
            dw,
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
        /* @__PURE__ */ o.jsxs("section", { className: X.settingsSection, "aria-label": _("Подключения"), children: [
          /* @__PURE__ */ o.jsx("h2", { children: _("Подключения") }),
          /* @__PURE__ */ o.jsxs("div", { className: X.connectionFields, children: [
            /* @__PURE__ */ o.jsx(fw, { data: a, onChange: x }),
            a.active_remout && /* @__PURE__ */ o.jsx(
              uw,
              {
                data: a.remout ?? ci,
                onChange: (N) => i((E) => ({ ...E, remout: N }))
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ o.jsxs("section", { className: X.settingsSection, "aria-label": _("Timer / Alarm"), children: [
          /* @__PURE__ */ o.jsx("h2", { children: _("Timer / Alarm") }),
          /* @__PURE__ */ o.jsx(
            cw,
            {
              data: a.timer_alarm,
              musicOptions: m,
              musicUnavailable: y.busy || !!y.error,
              onChange: (N) => i({ ...a, timer_alarm: N })
            }
          )
        ] })
      ] }),
      C && (r ? /* @__PURE__ */ o.jsx("div", { className: X.settingsMobileActions, children: /* @__PURE__ */ o.jsx(
        ie,
        {
          variant: "primary",
          disabled: c.busy || w.busy || !p,
          onClick: S,
          children: _("Сохранить")
        }
      ) }) : /* @__PURE__ */ o.jsx("div", { className: X.settingsActions, children: /* @__PURE__ */ o.jsx(ie, { disabled: c.busy || w.busy || !p, onClick: S, children: _("Сохранить") }) }))
    ] })
  ] });
}, Pl = (r) => {
  if (typeof r == "number") return Math.max(0, r);
  const a = r.split(":").map(Number);
  return a.some((i) => !Number.isFinite(i) || i < 0) ? 0 : a.length === 3 ? a[0] * 3600 + a[1] * 60 + a[2] : a.length === 2 ? a[0] * 60 + a[1] : a.length === 1 ? a[0] : 0;
}, wp = (r) => typeof r == "string" || typeof r == "number" ? Pl(r) : r ? typeof r.total_seconds == "number" ? Math.max(0, r.total_seconds) : Pl(r.count_timer || "") : 0, gw = (r, a = "on", i = Date.now()) => {
  if (typeof r == "string" || typeof r == "number") return Pl(r);
  if (!r) return 0;
  if (a !== "paused" && r.date_end && /(?:Z|[+-]\d{2}:?\d{2})$/i.test(r.date_end)) {
    const c = Date.parse(r.date_end);
    if (Number.isFinite(c)) return Math.max(0, Math.ceil((c - i) / 1e3));
  }
  return typeof r.remaining_seconds == "number" ? Math.max(0, r.remaining_seconds) : wp(r);
}, $l = (r) => r !== null && typeof r == "object", er = (r) => {
  const a = $l(r) && "result" in r ? r.result : r;
  return $l(a) && "data" in a ? a.data : a;
}, _w = (r) => {
  const a = Math.max(1, Number(r) || 1);
  return new Date(Date.now() + a * 1e3).toISOString();
}, Cf = (r) => {
  const a = Math.max(1, Number(r) || 1), i = Math.floor(a / 3600), c = Math.floor(a % 3600 / 60), d = a % 60;
  return `${String(i).padStart(2, "0")}:${String(c).padStart(2, "0")}:${String(d).padStart(2, "0")}`;
}, jf = (r) => {
  const a = er(r);
  return Array.isArray(a) ? a : $l(a) && Array.isArray(a.data) ? a.data : [];
};
function Sp() {
  const r = ot(), a = Ut(), [i, c] = v.useState([]), [d, f] = v.useState([]), [p, m] = v.useState([]), [g, w] = v.useState(!0), y = v.useMemo(() => r.getDevices(), [r]), x = v.useCallback(async () => {
    const B = await r.getPage("get_timer_requests_short", 1, 100), M = await Promise.all(
      jf(B).map(async (Z) => {
        var G;
        const U = await r.getRecord(Z.uuid, "get_timer_request");
        return ((G = er(U)) == null ? void 0 : G.data) ?? er(U);
      })
    );
    c(M.filter((Z) => !!Z && Z.action_type === "create_timer"));
  }, [r]), S = v.useCallback(async () => {
    const B = await r.getPage("get_alarm_requests_short", 1, 100), M = await Promise.all(
      jf(B).map(async (Z) => {
        var G;
        const U = await r.getRecord(Z.uuid, "get_alarm_request");
        return ((G = er(U)) == null ? void 0 : G.data) ?? er(U);
      })
    );
    f(M.filter((Z) => !!Z && Z.action_type !== "delete_alarm"));
  }, [r]), C = v.useCallback(async () => {
    const B = await r.getAllRecords("get_alarm_time_widgets_short"), M = await Promise.all(
      B.map(async (Z) => {
        var G;
        const U = await r.getRecord(Z.uuid, "get_alarm_time_widget");
        return ((G = er(U)) == null ? void 0 : G.data) ?? er(U);
      })
    );
    m(M.filter(Boolean));
  }, [r]), N = v.useCallback(async () => {
    w(!0);
    try {
      await a.run(async () => {
        await Promise.all([x(), S(), C()]);
      }, { retryable: !0 });
    } finally {
      w(!1);
    }
  }, [S, C, x, a.run]);
  v.useEffect(() => {
    N();
  }, []);
  const E = async (B, M) => await a.run(async () => {
    await B();
  }, { exclusive: !0 }) ? (await a.run(M, { retryable: !0 }), !0) : !1, j = async (B, M, Z = 0.3) => {
    const U = {
      count_timer: Cf(M),
      date_end: _w(M)
    };
    return E(() => r.saveData({ name: `Таймер ${Cf(M)}`, action_type: "create_timer", device_id: B, timer_time: U, volume_start: Z }, "save_timer_request"), x);
  }, P = async (B) => E(() => r.deleteRecord(B.uuid, "delete_timer_request"), x), F = async (B, M, Z = 0.3, U = "once", G = []) => E(() => r.saveData({ name: `Будильник ${M}`, action_type: "create_alarm", device_id: B, status: "on", time: M, volume_start: Z, repeat_type: U, repeat_days: G }, "save_alarm_request"), async () => {
    await Promise.all([S(), C()]);
  }), b = async (B, M) => E(() => r.updateRecord(B.uuid, "update_alarm_request", { ...B, action_type: "edit_alarm", ...M }), async () => {
    await Promise.all([S(), C()]);
  }), O = async (B) => E(() => r.deleteRecord(B.uuid, "delete_alarm_request"), S);
  return {
    feedback: { ...a, retry: a.error ? a.retry ?? (() => {
      N();
    }) : void 0 },
    alarmTimeWidgets: p,
    refreshAlarmTimes: () => a.run(C, { retryable: !0 }),
    alarms: d,
    createAlarm: F,
    createTimer: j,
    deleteAlarm: O,
    devices: y,
    loading: g,
    stopTimer: P,
    timers: i,
    toTimerSeconds: gw,
    updateAlarm: b
  };
}
const xw = "_grid_w5y3x_31", ww = "_card_w5y3x_38", Sw = "_empty_w5y3x_38", kw = "_cardHeader_w5y3x_47", Cw = "_cardTitle_w5y3x_54", jw = "_meta_w5y3x_59", Ew = "_form_w5y3x_73", Nw = "_field_w5y3x_79", Tw = "_label_w5y3x_85", Rw = "_input_w5y3x_91", Aw = "_quickTabs_w5y3x_101", bw = "_quickTab_w5y3x_101", Pw = "_activeQuickTab_w5y3x_117", $w = "_cardLead_w5y3x_135", Mw = "_cardIcon_w5y3x_143", Iw = "_cardButton_w5y3x_148", Lw = "_wheelPicker_w5y3x_160", Dw = "_wheelColumn_w5y3x_173", zw = "_wheelSelect_w5y3x_180", Ow = "_footerActions_w5y3x_202", Hw = "_saveButton_w5y3x_208", Fw = "_volumeLabel_w5y3x_226", Ww = "_volumeValue_w5y3x_232", Bw = "_alarmTimeFields_w5y3x_237", ce = {
  grid: xw,
  card: ww,
  empty: Sw,
  cardHeader: kw,
  cardTitle: Cw,
  meta: jw,
  form: Ew,
  field: Nw,
  label: Tw,
  input: Rw,
  quickTabs: Aw,
  quickTab: bw,
  activeQuickTab: Pw,
  cardLead: $w,
  cardIcon: Mw,
  cardButton: Iw,
  wheelPicker: Lw,
  wheelColumn: Dw,
  wheelSelect: zw,
  footerActions: Ow,
  saveButton: Hw,
  volumeLabel: Fw,
  volumeValue: Ww,
  alarmTimeFields: Bw
}, Uw = [5, 10, 15, 30, 45, 60], Ef = (r) => {
  const a = Math.max(0, r), i = Math.floor(a / 3600), c = Math.floor(a % 3600 / 60), d = a % 60;
  return [i, c, d].map((f) => String(f).padStart(2, "0")).join(":");
}, Vw = (r, a, i) => Math.max(1, r * 3600 + a * 60 + i), qw = (r) => ({
  hours: Math.floor(r / 3600),
  minutes: Math.floor(r % 3600 / 60),
  seconds: r % 60
}), Qw = () => {
  const r = Je(), { feedback: a, createTimer: i, devices: c, loading: d, stopTimer: f, timers: p, toTimerSeconds: m } = Sp(), [g, w] = v.useState(!1), [y, x] = v.useState(""), [S, C] = v.useState(0.3), [N, E] = v.useState({ hours: 0, minutes: 5, seconds: 0 }), [j, P] = v.useState({});
  v.useEffect(() => {
    P(Object.fromEntries(p.map((M) => [M.uuid, m(M.timer_time, M.status)])));
  }, [p, m]), v.useEffect(() => {
    const M = window.setInterval(() => {
      P((Z) => Object.fromEntries(Object.entries(Z).map(([U, G]) => {
        var J;
        return [U, ((J = p.find((te) => te.uuid === U)) == null ? void 0 : J.status) === "paused" ? G : Math.max(0, G - 1)];
      })));
    }, 1e3);
    return () => window.clearInterval(M);
  }, [p]);
  const F = v.useMemo(() => new Map(c.map((M) => [M.id, M.name])), [c]), b = Vw(N.hours, N.minutes, N.seconds), O = async () => {
    y && await i(y, b, S) && w(!1);
  }, B = (M) => E(qw(M * 60));
  return /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
    /* @__PURE__ */ o.jsx(dt, { title: _("Таймеры") }),
    /* @__PURE__ */ o.jsxs("div", { className: X.page, children: [
      !g && /* @__PURE__ */ o.jsx(Ve, { ...a }),
      /* @__PURE__ */ o.jsx(ct, {}),
      /* @__PURE__ */ o.jsxs("div", { className: X.header, children: [
        /* @__PURE__ */ o.jsx("div", { className: X.heading, children: r ? /* @__PURE__ */ o.jsx(o.Fragment, {}) : /* @__PURE__ */ o.jsx("h1", { className: X.title, children: _("Таймеры") }) }),
        /* @__PURE__ */ o.jsx("div", { className: X.actions, children: r ? /* @__PURE__ */ o.jsx(or, { startVisible: !0, children: /* @__PURE__ */ o.jsx(
          ie,
          {
            variant: "primary",
            onClick: () => w(!0),
            children: _("Добавить сценарий")
          }
        ) }) : /* @__PURE__ */ o.jsx(
          ie,
          {
            variant: "primary",
            onClick: () => w(!0),
            children: _("🞢 Создать")
          }
        ) })
      ] }),
      d && /* @__PURE__ */ o.jsx(Or, {}),
      /* @__PURE__ */ o.jsx("div", { className: ce.grid, children: p.length ? p.map((M) => {
        const Z = m(M.timer_time, M.status), U = wp(M.timer_time);
        return /* @__PURE__ */ o.jsx("div", { className: ce.card, children: /* @__PURE__ */ o.jsxs("div", { className: ce.cardHeader, children: [
          /* @__PURE__ */ o.jsxs("div", { className: ce.cardLead, children: [
            /* @__PURE__ */ o.jsx(Ql, { className: ce.cardIcon, size: 26 }),
            /* @__PURE__ */ o.jsxs("div", { children: [
              /* @__PURE__ */ o.jsx("h2", { className: ce.cardTitle, children: Ef(j[M.uuid] ?? Z) }),
              /* @__PURE__ */ o.jsxs("div", { className: ce.meta, children: [
                _("Заведен на"),
                " ",
                Ef(U),
                " • ",
                F.get(M.device_id) || M.device_id
              ] })
            ] })
          ] }),
          /* @__PURE__ */ o.jsx(ie, { variant: "remove", onClick: () => f(M), children: _("Удалить") })
        ] }) }, M.uuid);
      }) : !d && !a.error && /* @__PURE__ */ o.jsx("div", { className: ce.empty, children: _("Нет запущенных таймеров.") }) }),
      /* @__PURE__ */ o.jsx(Vt, { feedback: a, open: g, onClose: () => w(!1), title: _("Создать таймер"), footer: /* @__PURE__ */ o.jsx("div", { className: ce.footerActions, children: /* @__PURE__ */ o.jsx(ie, { className: ce.saveButton, onClick: O, disabled: !y, children: _("Создать") }) }), children: /* @__PURE__ */ o.jsxs("div", { className: ce.form, children: [
        /* @__PURE__ */ o.jsx("div", { className: ce.wheelPicker, "aria-label": _("Длительность таймера"), children: ["hours", "minutes", "seconds"].map((M) => /* @__PURE__ */ o.jsxs("label", { className: ce.wheelColumn, children: [
          /* @__PURE__ */ o.jsx("span", { className: ce.label, children: _(M === "hours" ? "Часы" : M === "minutes" ? "Минуты" : "Секунды") }),
          /* @__PURE__ */ o.jsx(
            "input",
            {
              className: ce.wheelSelect,
              type: "number",
              min: 0,
              max: M === "hours" ? 23 : 59,
              inputMode: "numeric",
              value: N[M],
              onChange: (Z) => {
                const U = Math.max(0, Math.min(M === "hours" ? 23 : 59, Math.trunc(Number(Z.target.value) || 0)));
                E((G) => ({ ...G, [M]: U }));
              }
            }
          )
        ] }, M)) }),
        /* @__PURE__ */ o.jsxs("div", { className: ce.field, children: [
          /* @__PURE__ */ o.jsx("span", { className: ce.label, children: _("Быстрое создание") }),
          /* @__PURE__ */ o.jsx("div", { className: ce.quickTabs, children: Uw.map((M) => /* @__PURE__ */ o.jsxs("button", { type: "button", className: `${ce.quickTab} ${b === M * 60 ? ce.activeQuickTab : ""}`, onClick: () => B(M), children: [
            M,
            " ",
            _("мин")
          ] }, M)) })
        ] }),
        /* @__PURE__ */ o.jsx(
          Mr,
          {
            label: _("Устройство воспроизведения"),
            placeholder: _("Выберите устройство"),
            value: y,
            options: c.map((M) => ({ value: M.id, label: M.name })),
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
          /* @__PURE__ */ o.jsx("input", { className: ce.input, type: "range", min: "0", max: "1", step: "0.05", value: S, onChange: (M) => C(Number(M.target.value)) })
        ] })
      ] }) })
    ] })
  ] });
};
let Kw = 0;
function kp() {
  var r;
  if ((r = globalThis.crypto) != null && r.getRandomValues) {
    const a = new Uint8Array(16);
    return globalThis.crypto.getRandomValues(a), `monitor-${Array.from(a, (i) => i.toString(16).padStart(2, "0")).join("")}`;
  }
  return `monitor-${Date.now().toString(36)}-${(++Kw).toString(36)}`;
}
class Cp {
  constructor() {
    Ne(this, "context");
    Ne(this, "ownsContext", !0);
    Ne(this, "unsubscribe");
    Ne(this, "closed", !1);
    Ne(this, "nextTime", 0);
    Ne(this, "sources", /* @__PURE__ */ new Set());
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
function jp() {
  var r;
  return !!(globalThis.isSecureContext && ((r = navigator.mediaDevices) != null && r.getUserMedia));
}
function Yw(r) {
  const a = r && typeof r == "object" && "name" in r ? String(r.name) : "";
  return a === "NotAllowedError" || a === "SecurityError" ? "Разрешите доступ к микрофону в настройках браузера и откройте HA по HTTPS." : a === "NotSupportedError" ? "Этот браузер не поддерживает звонки. Откройте HA в актуальном Chrome или Safari." : a === "NotFoundError" ? "Микрофон на этом устройстве не найден." : a === "NotReadableError" ? "Микрофон занят другим приложением или недоступен." : "Не удалось подключить микрофон или звук звонка. Проверьте разрешения и подключение.";
}
class Gw {
  constructor(a, i, c) {
    Ne(this, "output", new Cp());
    Ne(this, "context");
    Ne(this, "stream");
    Ne(this, "input");
    Ne(this, "worklet");
    Ne(this, "closed", !1);
    Ne(this, "sending", !1);
    Ne(this, "inFlight", 0);
    Ne(this, "failed", !1);
    Ne(this, "api");
    Ne(this, "viewId");
    Ne(this, "onFailure");
    this.api = a, this.viewId = i, this.onFailure = c;
  }
  setSending(a) {
    this.sending = a;
  }
  async prepare() {
    if (!jp()) throw new DOMException("Secure microphone unavailable", "SecurityError");
    if (this.context = new AudioContext(), !this.context.audioWorklet || !globalThis.AudioWorkletNode) throw new DOMException("AudioWorklet unavailable", "NotSupportedError");
    if (await this.output.prepare(this.context), this.closed) throw new DOMException("Call closed", "AbortError");
    const a = await navigator.mediaDevices.getUserMedia({ audio: { channelCount: 1, echoCancellation: !0, noiseSuppression: !0, autoGainControl: !0 }, video: !1 });
    if (this.closed)
      throw a.getTracks().forEach((i) => i.stop()), new DOMException("Call closed", "AbortError");
    if (this.stream = a, await this.context.resume(), this.closed) throw new DOMException("Call closed", "AbortError");
    for (const i of a.getAudioTracks()) i.onended = () => this.fail("Микрофон отключён. Звонок завершён.");
    if (await this.context.audioWorklet.addModule("/ha_dialog_ui_static/call-capture-worklet.js"), this.closed) throw new DOMException("Call closed", "AbortError");
    this.input = this.context.createMediaStreamSource(a), this.worklet = new AudioWorkletNode(this.context, "ha-call-capture", { numberOfInputs: 1, numberOfOutputs: 1, outputChannelCount: [1] }), this.worklet.port.onmessage = (i) => {
      var f;
      if ((f = this.worklet) == null || f.port.postMessage("ack"), this.closed || !this.sending || this.inFlight >= 3) return;
      const c = new Uint8Array(i.data);
      if (c.length !== 1280) return;
      this.inFlight++;
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
const Jw = "_navigation_scuwa_1", Xw = "_page_scuwa_5", Zw = "_title_scuwa_11", eS = "_hint_scuwa_15", tS = "_grid_scuwa_20", nS = "_device_scuwa_27", rS = "_active_scuwa_56", sS = "_status_scuwa_64", oS = "_actions_scuwa_71", iS = "_origin_scuwa_100", Pt = {
  navigation: Jw,
  page: Xw,
  title: Zw,
  hint: eS,
  grid: tS,
  device: nS,
  active: rS,
  status: sS,
  actions: oS,
  origin: iS
};
function aS() {
  const r = ot(), a = Je(), [i, c] = v.useState(), [d, f] = v.useState(""), [p, m] = v.useState(""), [g, w] = v.useState(!1), [y, x] = v.useState(!1), S = v.useRef(""), C = v.useRef(), N = v.useRef(!1), E = jp();
  v.useEffect(() => {
    let J = !0;
    N.current = !0, x(!1);
    const te = kp();
    S.current = te;
    let ge;
    return r.callsWatch(te, (de) => {
      J && c(de);
    }).then((de) => {
      J ? (ge = de, x(!0)) : Promise.resolve(de()).catch(() => {
      });
    }).catch((de) => {
      J && m(Ct(de));
    }), () => {
      var de;
      J = !1, N.current = !1, (de = C.current) == null || de.close(), C.current = void 0, ge && Promise.resolve(ge()).catch(() => {
      });
    };
  }, [r]);
  const j = i == null ? void 0 : i.calls.find((J) => J.id === i.owned_call_id);
  v.useEffect(() => {
    var J, te;
    (J = C.current) == null || J.setSending((j == null ? void 0 : j.state) === "connecting" || (j == null ? void 0 : j.state) === "active"), i && !i.owned_call_id && !g && ((te = C.current) == null || te.close(), C.current = void 0);
  }, [i, j == null ? void 0 : j.state, g]);
  const P = i == null ? void 0 : i.devices.find((J) => J.id === d), F = (J) => i == null ? void 0 : i.calls.some((te) => te.source_device_id === J || te.target_device_id === J), b = i == null ? void 0 : i.calls.find((J) => J.source_device_id === d || J.target_device_id === d), O = !!(j && j.target_device_id === d), B = (J) => {
    var te;
    return ((te = i == null ? void 0 : i.devices.find((ge) => ge.id === J)) == null ? void 0 : te.name) ?? _("Колонка");
  }, M = _((b == null ? void 0 : b.state) === "active" ? "Разговор" : (b == null ? void 0 : b.state) === "connecting" ? "Соединяем…" : b ? "Ожидание ответа" : "Готово к звонку"), Z = async () => {
    var J;
    if (!g) {
      w(!0), m("");
      try {
        await r.browserCallEnd(S.current), (J = C.current) == null || J.close(), C.current = void 0;
      } catch (te) {
        N.current && m(Ct(te));
      } finally {
        N.current && w(!1);
      }
    }
  }, U = async () => {
    var ge;
    if (g || !d) return;
    w(!0), m("");
    const J = S.current, te = new Gw(r, J, (de) => {
      N.current && m(_(de)), r.browserCallEnd(J).catch(() => {
      });
    });
    (ge = C.current) == null || ge.close(), C.current = te;
    try {
      if (await te.prepare(), !N.current) {
        te.close();
        return;
      }
      const de = await r.browserCallStart(J, d);
      if (!N.current) {
        te.close();
        return;
      }
      if (await te.listen(), !N.current) {
        te.close();
        return;
      }
      c((pe) => pe && { ...pe, owned_call_id: de.call_id, calls: pe.calls.some((ve) => ve.id === de.call_id) ? pe.calls : [...pe.calls, { id: de.call_id, source_device_id: null, source_type: "browser", target_device_id: d, state: "ringing" }] });
    } catch (de) {
      te.close(), N.current && m(de instanceof DOMException ? _(Yw(de)) : Ct(de)), await r.browserCallEnd(J).catch(() => {
      });
    } finally {
      N.current && w(!1);
    }
  };
  return /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
    /* @__PURE__ */ o.jsx("div", { className: Pt.navigation, children: /* @__PURE__ */ o.jsx(ct, {}) }),
    a && /* @__PURE__ */ o.jsx(dt, { title: "Звонки" }),
    /* @__PURE__ */ o.jsxs("section", { className: Pt.page, children: [
      /* @__PURE__ */ o.jsx("h1", { className: Pt.title, children: _("Звонки") }),
      /* @__PURE__ */ o.jsx("p", { className: Pt.hint, children: _("Выберите колонку, на которую хотите позвонить с этого устройства.") }),
      !E && /* @__PURE__ */ o.jsx("p", { role: "alert", children: _("Для звонка разрешите микрофон и откройте Home Assistant по HTTPS.") }),
      p && !d && /* @__PURE__ */ o.jsx("p", { role: "alert", children: p }),
      !i && !p && /* @__PURE__ */ o.jsx("p", { role: "status", children: _("Загрузка…") }),
      i && !i.available && /* @__PURE__ */ o.jsx("p", { role: "alert", children: _("Сервер звонков недоступен. Проверьте журнал HA и TCP-порт 8125.") }),
      (i == null ? void 0 : i.available) && i.devices.length === 0 && /* @__PURE__ */ o.jsx("p", { children: _("Нет колонок с поддержкой звонков. Подключите модуль calls.yaml и обновите прошивку.") }),
      /* @__PURE__ */ o.jsx("div", { className: Pt.grid, children: i == null ? void 0 : i.devices.map((J) => /* @__PURE__ */ o.jsxs(
        "button",
        {
          className: `${Pt.device} ${F(J.id) ? Pt.active : ""}`,
          onClick: () => {
            f(J.id), m("");
          },
          children: [
            F(J.id) ? /* @__PURE__ */ o.jsx(Zy, { size: 26 }) : /* @__PURE__ */ o.jsx(ql, { size: 26 }),
            /* @__PURE__ */ o.jsx("strong", { children: J.name }),
            /* @__PURE__ */ o.jsx("span", { children: _(J.online ? F(J.id) ? "Участвует в звонке" : "Готова к звонку" : "Нет подключения") })
          ]
        },
        J.id
      )) }),
      /* @__PURE__ */ o.jsxs(Vt, { open: !!d, onClose: () => f(""), title: B(d), dialogLabel: B(d), footer: /* @__PURE__ */ o.jsx("div", { className: Pt.actions, children: O ? /* @__PURE__ */ o.jsxs(ie, { variant: "secondary", disabled: g, onClick: () => void Z(), children: [
        /* @__PURE__ */ o.jsx(tg, { size: 18 }),
        _("Положить трубку")
      ] }) : /* @__PURE__ */ o.jsx(ie, { disabled: g || !y || !E || !(i != null && i.available) || !(P != null && P.online) || !!j || !!b, onClick: () => void U(), children: _(b ? "Занято" : "Позвонить") }) }), children: [
        /* @__PURE__ */ o.jsxs("div", { className: Pt.status, children: [
          /* @__PURE__ */ o.jsx("span", { role: "status", "aria-live": "polite", children: g ? _("Подключаем микрофон…") : M }),
          /* @__PURE__ */ o.jsx(Ir, { label: "Звонки", description: "Вы звоните с микрофона этого телефона или компьютера. Закрытие окна сохраняет звонок; выход из раздела или закрытие страницы завершает звонок с этого устройства. Звонки между колонками запускаются сценариями HA." })
        ] }),
        p && /* @__PURE__ */ o.jsx("p", { role: "alert", children: p }),
        O && (j == null ? void 0 : j.state) === "active" && /* @__PURE__ */ o.jsxs(ie, { variant: "secondary", onClick: () => {
          var J;
          return void ((J = C.current) == null ? void 0 : J.resumePlayback().catch(() => m(_("Браузер заблокировал звук. Проверьте разрешение воспроизведения и громкость телефона."))));
        }, children: [
          /* @__PURE__ */ o.jsx(mg, { size: 18 }),
          _("Включить звук")
        ] }),
        /* @__PURE__ */ o.jsxs("p", { className: Pt.origin, children: [
          /* @__PURE__ */ o.jsx(Jy, { size: 20 }),
          _("Этот телефон или компьютер"),
          " → ",
          B(d)
        ] }),
        !E && /* @__PURE__ */ o.jsx("p", { role: "alert", children: _("Для звонка разрешите микрофон и откройте Home Assistant по HTTPS.") }),
        b && !O && /* @__PURE__ */ o.jsx("p", { className: Pt.hint, children: _("Колонка уже участвует в другом звонке.") }),
        j && !O && /* @__PURE__ */ o.jsx("p", { className: Pt.hint, children: _("Сначала завершите текущий звонок.") })
      ] })
    ] })
  ] });
}
const lS = "_page_12ruw_1", uS = "_heading_12ruw_8", cS = "_grid_12ruw_26", dS = "_device_12ruw_33", fS = "_deviceLive_12ruw_64", pS = "_navigation_12ruw_72", hS = "_playback_12ruw_76", mS = "_playbackSelect_12ruw_92", vS = "_statusRow_12ruw_112", yS = "_status_12ruw_112", gS = "_live_12ruw_127", _S = "_hint_12ruw_131", xS = "_footer_12ruw_137", wS = "_empty_12ruw_148", SS = "_error_12ruw_155", Be = {
  page: lS,
  heading: uS,
  grid: cS,
  device: dS,
  deviceLive: fS,
  navigation: pS,
  playback: hS,
  playbackSelect: mS,
  statusRow: vS,
  status: yS,
  live: gS,
  hint: _S,
  footer: xS,
  empty: wS,
  error: SS
};
function kS() {
  const r = ot(), a = Je(), [i, c] = v.useState(), [d, f] = v.useState(""), [p, m] = v.useState(null), [g, w] = v.useState("browser"), [y, x] = v.useState(!1), [S, C] = v.useState(!1), N = v.useRef(""), E = v.useRef(!1), j = v.useRef(), [P, F] = v.useState(0);
  v.useEffect(() => {
    E.current = !0;
    let H = !0, Q;
    const R = kp();
    return N.current = R, c(void 0), f(""), r.monitorWatch(R, (L) => {
      H && c(L);
    }).then((L) => {
      H ? Q = L : Promise.resolve(L()).catch(() => {
      });
    }).catch((L) => {
      H && f(
        Ct(
          L,
          "Не удалось открыть радионяню. Проверьте подключение к HA."
        )
      );
    }), () => {
      var L;
      H = !1, E.current = !1, (L = j.current) == null || L.close(), j.current = void 0, Q && Promise.resolve(Q()).catch(() => {
      });
    };
  }, [r, P]), v.useEffect(() => {
    var H;
    i && !i.owned_source_id && !y && ((H = j.current) == null || H.close(), j.current = void 0, C(!1));
  }, [i, y]);
  const b = i == null ? void 0 : i.devices.find((H) => H.id === p), O = (i == null ? void 0 : i.devices.filter((H) => H.source)) ?? [], B = i == null ? void 0 : i.sessions.find(
    (H) => H.source_device_id === p
  ), M = !!(b != null && b.transmitting || (b == null ? void 0 : b.source_state) === "on" || B), Z = S && (b == null ? void 0 : b.transmitting) && (i == null ? void 0 : i.owned_source_id) === p, U = !!B || Z, G = (H) => {
    const Q = i == null ? void 0 : i.sessions.find(
      (R) => R.source_device_id === H.id
    );
    w((Q == null ? void 0 : Q.listener_device_id) ?? "browser"), m(H.id), f("");
  }, J = () => m(null), te = async () => {
    var Q;
    if (!b || y) return;
    x(!0), f(""), C(!1), (Q = j.current) == null || Q.close(), j.current = void 0;
    let H;
    try {
      g === "browser" && (H = new Cp(), j.current = H, await H.prepare());
      const R = await r.monitorStart(
        N.current,
        b.id,
        g === "browser" ? void 0 : g
      );
      if (!E.current || !R.started) {
        H == null || H.close();
        return;
      }
      H && await H.listen(r, b.node_id, (L) => {
        E.current && C(L);
      }), E.current && (C(!0), c(
        (L) => L && {
          ...L,
          owned_source_id: b.id,
          devices: L.devices.map(
            (ae) => ae.id === b.id ? { ...ae, transmitting: !0, source_state: "on" } : ae
          ),
          sessions: g === "browser" ? L.sessions : [
            ...L.sessions.filter(
              (ae) => ae.source_device_id !== b.id
            ),
            {
              source_device_id: b.id,
              listener_device_id: g
            }
          ]
        }
      ));
    } catch (R) {
      if (H == null || H.close(), E.current) {
        f(
          Ct(
            R,
            "Не удалось начать прослушивание. Проверьте подключение и разрешение воспроизведения."
          )
        );
        try {
          await r.monitorStop(N.current, b.id);
        } catch {
        }
      }
    } finally {
      E.current && x(!1);
    }
  }, ge = async (H) => {
    var Q;
    x(!0), f("");
    try {
      await r.monitorStop(N.current, H), (i == null ? void 0 : i.owned_source_id) === H && ((Q = j.current) == null || Q.close(), j.current = void 0, C(!1)), c(
        (R) => R && {
          ...R,
          owned_source_id: R.owned_source_id === H ? null : R.owned_source_id,
          devices: R.devices.map(
            (L) => L.id === H ? { ...L, transmitting: !1, source_state: "off" } : L
          ),
          sessions: R.sessions.filter(
            (L) => L.source_device_id !== H && L.listener_device_id !== H
          )
        }
      );
    } catch (R) {
      E.current && f(Ct(R));
    } finally {
      E.current && x(!1);
    }
  }, de = (i == null ? void 0 : i.devices.filter(
    (H) => H.listener && H.id !== p
  )) ?? [], pe = de.find((H) => H.id === g), ve = _(
    y ? "Подключаемся…" : M ? Z || B ? "Прослушивание активно" : "Источник включён" : "Готово к запуску"
  ), je = /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
    /* @__PURE__ */ o.jsxs("div", { className: Be.statusRow, children: [
      /* @__PURE__ */ o.jsxs(
        "div",
        {
          role: "status",
          "aria-live": "polite",
          className: `${Be.status} ${M ? Be.live : ""}`,
          children: [
            /* @__PURE__ */ o.jsx(by, { size: 12, fill: "currentColor" }),
            ve
          ]
        }
      ),
      /* @__PURE__ */ o.jsx(Ir, { label: ve, description: _(
        M && (i == null ? void 0 : i.owned_source_id) !== p ? "Сеанс запущен вне этой вкладки. Закрытие окна или вкладки его не остановит. Для остановки нажмите кнопку ниже." : "Закрытие этого окна не останавливает прослушивание. Для остановки нажмите кнопку ниже или выйдите из вкладки «Радионяня»."
      ) })
    ] }),
    /* @__PURE__ */ o.jsx("p", { className: Be.hint, children: _("Где воспроизводить звук?") }),
    /* @__PURE__ */ o.jsxs("div", { className: Be.playback, children: [
      g === "browser" ? /* @__PURE__ */ o.jsx(Wy, { size: 22 }) : /* @__PURE__ */ o.jsx(Ql, { size: 22 }),
      /* @__PURE__ */ o.jsx(
        $n,
        {
          "aria-label": _("Где воспроизводить звук?"),
          className: Be.playbackSelect,
          value: g,
          onChange: (H) => w(H.target.value),
          disabled: y || U,
          options: [
            { value: "browser", label: _("На этом устройстве") },
            ...de.map((H) => ({
              value: H.id,
              label: H.online ? H.name : `${H.name} — ${_("Нет подключения")}`,
              disabled: !H.online
            }))
          ]
        }
      ),
      /* @__PURE__ */ o.jsx("small", { children: _(g === "browser" ? "Телефон или компьютер" : pe != null && pe.online ? "Колонка" : "Нет подключения") })
    ] }),
    U && /* @__PURE__ */ o.jsx("p", { className: Be.hint, children: _("Чтобы сменить устройство воспроизведения, сначала остановите сеанс.") })
  ] }), W = /* @__PURE__ */ o.jsx("div", { className: Be.footer, children: /* @__PURE__ */ o.jsx(
    ie,
    {
      onClick: M ? () => void ge(p) : () => void te(),
      disabled: y || !M && !(b != null && b.online) || !M && g !== "browser" && !(i != null && i.devices.some(
        (H) => H.id === g && H.online
      )),
      children: _(
        y ? "Подключаемся…" : M ? g === "browser" && !Z && !B ? "Начать слушать" : "Остановить" : "Старт"
      )
    }
  ) }), z = M && !U ? /* @__PURE__ */ o.jsxs("div", { className: Be.footer, children: [
    /* @__PURE__ */ o.jsx(ie, { disabled: y || !(b != null && b.online), onClick: () => void te(), children: _(g === "browser" ? "Начать слушать" : "Старт") }),
    /* @__PURE__ */ o.jsx(
      ie,
      {
        variant: "ghost",
        disabled: y,
        onClick: () => void ge(p),
        children: _("Остановить источник")
      }
    )
  ] }) : W;
  return /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
    /* @__PURE__ */ o.jsx("div", { className: Be.navigation, children: /* @__PURE__ */ o.jsx(ct, {}) }),
    a && /* @__PURE__ */ o.jsx(dt, { title: "Радионяня" }),
    /* @__PURE__ */ o.jsxs("section", { className: Be.page, children: [
      /* @__PURE__ */ o.jsxs("header", { className: Be.heading, children: [
        /* @__PURE__ */ o.jsx(Vl, { size: 30 }),
        /* @__PURE__ */ o.jsxs("div", { children: [
          /* @__PURE__ */ o.jsx("h1", { children: _("Радионяня") }),
          /* @__PURE__ */ o.jsx("p", { children: _("Выберите колонку, чтобы слышать, что происходит рядом с ней.") })
        ] })
      ] }),
      d && !p && /* @__PURE__ */ o.jsxs("div", { role: "alert", className: Be.error, children: [
        d,
        /* @__PURE__ */ o.jsx(ie, { onClick: () => F((H) => H + 1), children: _("Повторить") })
      ] }),
      !i && !d && /* @__PURE__ */ o.jsx("p", { role: "status", children: _("Загрузка…") }),
      i && !i.available && /* @__PURE__ */ o.jsx("div", { className: Be.empty, children: _(
        "Приёмник радионяни недоступен. Проверьте журнал HA и доступность TCP-порта 8124."
      ) }),
      (i == null ? void 0 : i.available) && O.length === 0 && /* @__PURE__ */ o.jsx("div", { className: Be.empty, children: _(
        "Нет колонок с поддержкой радионяни. Установите совместимую прошивку и подключите колонку к интеграции ESPHome."
      ) }),
      /* @__PURE__ */ o.jsx("div", { className: Be.grid, children: O.map((H) => {
        const Q = i == null ? void 0 : i.sessions.find(
          (L) => L.source_device_id === H.id
        ), R = i == null ? void 0 : i.devices.find(
          (L) => L.id === (Q == null ? void 0 : Q.listener_device_id)
        );
        return /* @__PURE__ */ o.jsxs(
          "button",
          {
            className: `${Be.device} ${H.transmitting ? Be.deviceLive : ""}`,
            onClick: () => G(H),
            children: [
              /* @__PURE__ */ o.jsx(sg, { size: 28 }),
              /* @__PURE__ */ o.jsx("strong", { children: H.name }),
              /* @__PURE__ */ o.jsx("span", { children: _(
                H.online ? H.transmitting ? "Источник включён" : H.source_state === "on" ? "Переподключение…" : "Готова к прослушиванию" : "Нет подключения"
              ) }),
              R && /* @__PURE__ */ o.jsxs("small", { children: [
                _("Воспроизведение:"),
                " ",
                R.name
              ] })
            ]
          },
          H.id
        );
      }) }),
      /* @__PURE__ */ o.jsxs(
        Vt,
        {
          open: p !== null,
          onClose: J,
          title: (b == null ? void 0 : b.name) ?? "Радионяня",
          dialogLabel: (b == null ? void 0 : b.name) ?? _("Радионяня"),
          footer: z,
          children: [
            d && /* @__PURE__ */ o.jsx("p", { role: "alert", className: Be.error, children: d }),
            je
          ]
        }
      )
    ] })
  ] });
}
const CS = ({ command: r, open: a, onClose: i, onToggleStatus: c, onEdit: d, onDelete: f }) => {
  if (!r) return null;
  const p = r.status === "on";
  return /* @__PURE__ */ o.jsx(Zl, { open: a, title: r.title, uuid: r.uuid, onClose: i, actions: [
    { label: p ? "Выключить" : "Включить", onClick: () => c(r, p ? "off" : "on") },
    { label: "Изменить", variant: "secondary", onClick: () => d(r) },
    { label: "Удалить", variant: "remove", onClick: () => f(r) }
  ] });
}, jS = (r) => {
  const a = /^(\d{1,2}):(\d{2})$/.exec(r.trim());
  return !a || Number(a[1]) > 23 || Number(a[2]) > 59 ? null : `${a[1].padStart(2, "0")}:${a[2]}`;
}, Ml = [
  { key: "mon", label: "Пн" },
  { key: "tue", label: "Вт" },
  { key: "wed", label: "Ср" },
  { key: "thu", label: "Чт" },
  { key: "fri", label: "Пт" },
  { key: "sat", label: "Сб" },
  { key: "sun", label: "Вс" }
], ES = [
  { value: "once", label: "Однократно" },
  { value: "daily", label: "Ежедневно" },
  { value: "weekdays", label: "По будням" },
  { value: "weekends", label: "По выходным" },
  { value: "custom", label: "Выбранные дни" }
], NS = (r = "once", a = []) => r === "daily" ? _("ежедневно") : r === "weekdays" ? _("по будням") : r === "weekends" ? _("по выходным") : r === "custom" ? a.length ? a.map((i) => {
  var c;
  return (c = Ml.find((d) => d.key === i)) != null && c.label ? _(Ml.find((d) => d.key === i).label) : i;
}).join(", ") : _("кастом") : _("однократно"), TS = () => {
  const r = Je(), { feedback: a, alarmTimeWidgets: i, refreshAlarmTimes: c, alarms: d, createAlarm: f, deleteAlarm: p, devices: m, loading: g, updateAlarm: w } = Sp(), [y, x] = v.useState(!1), [S, C] = v.useState(null), [N, E] = v.useState(null), [j, P] = v.useState(""), [F, b] = v.useState("08:00"), [O, B] = v.useState(0.3), [M, Z] = v.useState("once"), [U, G] = v.useState([]), J = v.useMemo(() => Array.from(new Set([...i.flatMap((W) => W.time || []), ...d.map((W) => W.time)].map(jS).filter((W) => W !== null))), [i, d]), te = v.useMemo(() => new Map(m.map((W) => [W.id, W.name])), [m]), ge = d.find((W) => W.uuid === S) || null, de = async () => {
    if (!j || !F) return;
    const W = d.find((z) => z.uuid === N);
    if (W) {
      if (!await w(W, { device_id: j, time: F, volume_start: O, repeat_type: M, repeat_days: U })) return;
    } else if (!await f(j, F, O, M, U)) return;
    E(null), x(!1);
  }, pe = () => {
    E(null), x(!0), c();
  }, ve = (W) => {
    b(W.time), P(W.device_id), B(W.volume_start ?? 0.3), Z(W.repeat_type ?? "once"), G(W.repeat_days ?? []), c(), E(W.uuid), C(null), x(!0);
  }, je = (W) => G((z) => z.includes(W) ? z.filter((H) => H !== W) : [...z, W]);
  return /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
    /* @__PURE__ */ o.jsx(dt, { title: _("Будильники") }),
    /* @__PURE__ */ o.jsxs("div", { className: X.page, children: [
      !y && /* @__PURE__ */ o.jsx(Ve, { ...a }),
      /* @__PURE__ */ o.jsx(ct, {}),
      /* @__PURE__ */ o.jsxs("div", { className: X.header, children: [
        /* @__PURE__ */ o.jsx("div", { className: X.heading, children: r ? /* @__PURE__ */ o.jsx(o.Fragment, {}) : /* @__PURE__ */ o.jsx("h1", { className: X.title, children: _("Будильники") }) }),
        /* @__PURE__ */ o.jsx("div", { className: X.actions, children: r ? /* @__PURE__ */ o.jsx(or, { startVisible: !0, children: /* @__PURE__ */ o.jsx(
          ie,
          {
            variant: "primary",
            onClick: pe,
            children: _("Добавить сценарий")
          }
        ) }) : /* @__PURE__ */ o.jsx(
          ie,
          {
            variant: "primary",
            onClick: pe,
            children: _("🞢 Создать")
          }
        ) })
      ] }),
      g && /* @__PURE__ */ o.jsx(Or, {}),
      /* @__PURE__ */ o.jsx("div", { className: ce.grid, children: d.length ? d.map((W) => /* @__PURE__ */ o.jsx("button", { className: `${ce.card} ${ce.cardButton}`, type: "button", onClick: () => C(W.uuid), children: /* @__PURE__ */ o.jsxs("div", { className: ce.cardHeader, children: [
        /* @__PURE__ */ o.jsxs("div", { className: ce.cardLead, children: [
          /* @__PURE__ */ o.jsx(Ql, { className: ce.cardIcon, size: 26 }),
          /* @__PURE__ */ o.jsxs("div", { children: [
            /* @__PURE__ */ o.jsx("h2", { className: ce.cardTitle, children: W.time }),
            /* @__PURE__ */ o.jsxs("div", { className: ce.meta, children: [
              NS(W.repeat_type, W.repeat_days),
              " • ",
              te.get(W.device_id) || W.device_id
            ] })
          ] })
        ] }),
        /* @__PURE__ */ o.jsx(
          "div",
          {
            onClick: (z) => z.stopPropagation(),
            onMouseDown: (z) => z.stopPropagation(),
            children: /* @__PURE__ */ o.jsx(nr, { label: _(""), checked: W.status !== "off", onClick: (z) => z.stopPropagation(), onChange: (z) => w(W, { status: z.currentTarget.checked ? "on" : "off" }) })
          }
        )
      ] }) }, W.uuid)) : !g && !a.error && /* @__PURE__ */ o.jsx("div", { className: ce.empty, children: _("Нет будильников.") }) }),
      /* @__PURE__ */ o.jsx(Vt, { feedback: a, open: y, onClose: () => {
        x(!1), E(null);
      }, title: N ? "Редактировать будильник" : "Создать будильник", footer: /* @__PURE__ */ o.jsx("div", { className: ce.footerActions, children: /* @__PURE__ */ o.jsx(ie, { className: ce.saveButton, onClick: de, disabled: !j || !F, children: _("Сохранить") }) }), children: /* @__PURE__ */ o.jsxs("div", { className: ce.form, children: [
        /* @__PURE__ */ o.jsxs("div", { className: ce.alarmTimeFields, role: "group", "aria-label": _("Время будильника"), children: [
          /* @__PURE__ */ o.jsx(
            Mr,
            {
              label: _("Часы"),
              value: F.split(":")[0],
              options: Array.from({ length: 24 }, (W, z) => ({ value: String(z).padStart(2, "0"), label: String(z).padStart(2, "0") })),
              onSelect: (W) => b(`${W}:${F.split(":")[1]}`)
            }
          ),
          /* @__PURE__ */ o.jsx(
            Mr,
            {
              label: _("Минуты"),
              value: F.split(":")[1],
              options: Array.from({ length: 60 }, (W, z) => ({ value: String(z).padStart(2, "0"), label: String(z).padStart(2, "0") })),
              onSelect: (W) => b(`${F.split(":")[0]}:${W}`)
            }
          )
        ] }),
        /* @__PURE__ */ o.jsxs("div", { className: ce.field, children: [
          /* @__PURE__ */ o.jsx("span", { className: ce.label, children: _("Ранее заданное время") }),
          /* @__PURE__ */ o.jsx("div", { className: ce.quickTabs, children: J.length ? J.map((W) => /* @__PURE__ */ o.jsx("button", { type: "button", className: `${ce.quickTab} ${F === W ? ce.activeQuickTab : ""}`, onClick: () => b(W), children: W }, W)) : /* @__PURE__ */ o.jsx("span", { className: ce.meta, children: _("Нет быстрых значений.") }) })
        ] }),
        /* @__PURE__ */ o.jsx(
          Mr,
          {
            label: _("Повторы"),
            value: M,
            options: ES.map((W) => ({ ...W, label: _(W.label) })),
            onSelect: (W) => Z(W)
          }
        ),
        M === "custom" && /* @__PURE__ */ o.jsx("div", { className: ce.quickTabs, role: "group", "aria-label": _("Дни повтора"), children: Ml.map((W) => /* @__PURE__ */ o.jsx(
          "button",
          {
            type: "button",
            "aria-pressed": U.includes(W.key),
            className: `${ce.quickTab} ${U.includes(W.key) ? ce.activeQuickTab : ""}`,
            onClick: () => je(W.key),
            children: _(W.label)
          },
          W.key
        )) }),
        /* @__PURE__ */ o.jsx(
          Mr,
          {
            label: _("Устройство воспроизведения"),
            placeholder: _("Выберите устройство"),
            value: j,
            options: m.map((W) => ({ value: W.id, label: W.name })),
            onSelect: P
          }
        ),
        /* @__PURE__ */ o.jsxs("label", { className: ce.field, children: [
          /* @__PURE__ */ o.jsxs("span", { className: `${ce.label} ${ce.volumeLabel}`, children: [
            _("Стартовая громкость"),
            " ",
            /* @__PURE__ */ o.jsxs("span", { className: ce.volumeValue, children: [
              Math.round(O * 100),
              "%"
            ] })
          ] }),
          /* @__PURE__ */ o.jsx("input", { className: ce.input, type: "range", min: "0", max: "1", step: "0.05", value: O, onChange: (W) => B(Number(W.target.value)) })
        ] })
      ] }) }),
      /* @__PURE__ */ o.jsx(
        CS,
        {
          open: !!ge,
          onClose: () => C(null),
          command: ge,
          onEdit: (W) => ve(W),
          onToggleStatus: (W, z) => w(W, { status: z }),
          onDelete: (W) => {
            p(W), C(null);
          }
        }
      )
    ] })
  ] });
}, RS = () => {
  const r = Yl(), a = Gl(), i = Dr(), { pathname: c } = _t(), d = i ? "/scripts" : "/commands/main";
  return (c === "/commands" || c.startsWith("/commands/")) && i !== !1 ? i === null ? /* @__PURE__ */ o.jsx(Or, {}) : /* @__PURE__ */ o.jsx(An, { to: "/scripts", replace: !0 }) : /* @__PURE__ */ o.jsx(dp, { resetKey: c, children: /* @__PURE__ */ o.jsxs(Pv, { children: [
    /* @__PURE__ */ o.jsx(Ue, { path: "/commands/whisper", element: a ? /* @__PURE__ */ o.jsx(w1, {}) : /* @__PURE__ */ o.jsx(An, { to: d, replace: !0 }) }),
    /* @__PURE__ */ o.jsx(Ue, { path: "/logs", element: r && a ? /* @__PURE__ */ o.jsx(R1, {}) : /* @__PURE__ */ o.jsx(An, { to: d, replace: !0 }) }),
    /* @__PURE__ */ o.jsx(Ue, { path: "/downloads", element: a ? /* @__PURE__ */ o.jsx(tw, {}) : /* @__PURE__ */ o.jsx(An, { to: d, replace: !0 }) }),
    /* @__PURE__ */ o.jsx(
      Ue,
      {
        path: "/",
        element: /* @__PURE__ */ o.jsx(
          An,
          {
            to: d,
            replace: !0
          }
        )
      }
    ),
    /* @__PURE__ */ o.jsx(
      Ue,
      {
        path: "/scripts",
        element: /* @__PURE__ */ o.jsx(tx, {})
      }
    ),
    /* @__PURE__ */ o.jsx(
      Ue,
      {
        path: "/commands",
        element: /* @__PURE__ */ o.jsx(
          An,
          {
            to: "/commands/main",
            replace: !0
          }
        )
      }
    ),
    /* @__PURE__ */ o.jsx(
      Ue,
      {
        path: "/commands/main",
        element: /* @__PURE__ */ o.jsx(Rx, {})
      }
    ),
    /* @__PURE__ */ o.jsx(
      Ue,
      {
        path: "/commands/sub",
        element: /* @__PURE__ */ o.jsx(bx, {})
      }
    ),
    /* @__PURE__ */ o.jsx(
      Ue,
      {
        path: "/commands/direct",
        element: /* @__PURE__ */ o.jsx(
          An,
          {
            to: "/commands/direct/main",
            replace: !0
          }
        )
      }
    ),
    /* @__PURE__ */ o.jsx(
      Ue,
      {
        path: "/commands/direct/main",
        element: /* @__PURE__ */ o.jsx(Mx, {})
      }
    ),
    /* @__PURE__ */ o.jsx(
      Ue,
      {
        path: "/commands/direct/template",
        element: /* @__PURE__ */ o.jsx(Hx, {})
      }
    ),
    /* @__PURE__ */ o.jsx(
      Ue,
      {
        path: "/commands/settings",
        element: /* @__PURE__ */ o.jsx(Ux, {})
      }
    ),
    /* @__PURE__ */ o.jsx(Ue, { path: "/monitor", element: /* @__PURE__ */ o.jsx(kS, {}) }),
    /* @__PURE__ */ o.jsx(Ue, { path: "/calls", element: /* @__PURE__ */ o.jsx(aS, {}) }),
    /* @__PURE__ */ o.jsx(
      Ue,
      {
        path: "/timer",
        element: /* @__PURE__ */ o.jsx(Qw, {})
      }
    ),
    /* @__PURE__ */ o.jsx(
      Ue,
      {
        path: "/alarm",
        element: /* @__PURE__ */ o.jsx(TS, {})
      }
    ),
    /* @__PURE__ */ o.jsx(
      Ue,
      {
        path: "/settings",
        element: /* @__PURE__ */ o.jsx(yw, {})
      }
    ),
    /* @__PURE__ */ o.jsx(
      Ue,
      {
        path: "*",
        element: /* @__PURE__ */ o.jsx(
          An,
          {
            to: d,
            replace: !0
          }
        )
      }
    )
  ] }) });
}, Ep = "ha-dialog-ui-theme", Cl = (r) => r === "light" ? "light" : "dark", AS = (r) => {
  document.documentElement.dataset.theme = r, document.documentElement.style.colorScheme = r, localStorage.setItem(Ep, r);
}, bS = () => {
  const r = Ut(), a = ip(), i = ot(), [c, d] = v.useState(!1), [f, p] = v.useState(null), [m, g] = v.useState(() => Cl(localStorage.getItem(Ep)));
  return v.useEffect(() => {
    AS(m);
  }, [m]), v.useEffect(() => {
    let w = !0, y = !1, x = !1, S = !1;
    r.run(async () => {
      const j = await i.getSettings();
      w && (y || g(Cl(j.theme)), S || d(!!j.api_commands_enabled), x || p(!!j.active_remout));
    }, { retryable: !0 });
    const C = (j) => {
      y = !0, g(Cl(j.detail));
    }, N = (j) => {
      x = !0, p(j.detail);
    }, E = (j) => {
      S = !0, d(!!j.detail);
    };
    return window.addEventListener(Tl, E), window.addEventListener(ai, N), window.addEventListener("ha-dialog-ui-theme-change", C), () => {
      w = !1, window.removeEventListener(Tl, E), window.removeEventListener(ai, N), window.removeEventListener("ha-dialog-ui-theme-change", C);
    };
  }, [i, r.run]), /* @__PURE__ */ o.jsx(ap.Provider, { value: c, children: /* @__PURE__ */ o.jsx(up.Provider, { value: f, children: /* @__PURE__ */ o.jsxs("div", { className: "appShell", "data-theme": m, lang: a, children: [
    /* @__PURE__ */ o.jsx(Ve, { ...r }),
    f === null ? !r.error && /* @__PURE__ */ o.jsx(Or, {}) : /* @__PURE__ */ o.jsx(RS, {})
  ] }) }) });
};
class PS {
  constructor(a) {
    Ne(this, "hass");
    this.hass = a;
  }
  callsWatch(a, i) {
    return this.monitorSubscribe(i, { type: "ha_dialog_ui/calls/watch", view_id: a });
  }
  browserCallStart(a, i) {
    return this.hass.connection.sendMessagePromise({ type: "ha_dialog_ui/calls/browser_start", view_id: a, target_device_id: i });
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
        (m, g) => this.getPage(a, g + 2, i)
      )
    )).reduce((m, g) => {
      const w = Array.isArray(g == null ? void 0 : g.data) ? g.data : Array.isArray(g == null ? void 0 : g.script_actions) ? g.script_actions : [];
      return [...m, ...w];
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
    let p = !1, m;
    const g = async (w) => {
      if (c.has(w)) return;
      c.add(w);
      const y = await this.hass.connection.sendMessagePromise({
        type: "media_source/browse_media",
        media_content_id: w
      }), x = Array.isArray(y == null ? void 0 : y.children) ? y.children : [];
      await Promise.all(x.map(async (S) => {
        var E;
        const C = String((S == null ? void 0 : S.media_content_id) || ""), N = String((S == null ? void 0 : S.title) || C);
        if (C) {
          if (S != null && S.can_expand) {
            try {
              await g(C);
            } catch (j) {
              f.push(j);
            }
            return;
          }
          if (a.test(N) || a.test(C) || (S == null ? void 0 : S.media_content_type) === "music" || (E = S == null ? void 0 : S.media_content_type) != null && E.startsWith("audio/")) {
            const j = "media-source://media_source/local/", P = C.startsWith(j) ? C.slice(j.length) : C;
            d.set(P, {
              value: P,
              label: N
            });
          }
        }
      }));
    };
    for (const w of i)
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
      var i;
      return {
        entity_id: a.entity_id,
        name: ((i = a.attributes) == null ? void 0 : i.friendly_name) ?? a.entity_id
      };
    });
  }
}
function Np(r) {
  var a;
  return (a = r == null ? void 0 : r.connection) != null && a.sendMessagePromise ? { connection: r.connection, user: r.user, states: r.states ?? {} } : r != null && r.callWS ? { connection: { sendMessagePromise: r.callWS.bind(r) }, user: r.user, states: r.states ?? {} } : {
    connection: { sendMessagePromise: async () => {
      throw new Error("Home Assistant websocket API is not available");
    } },
    states: {}
  };
}
async function $S() {
  return Np(window.hass);
}
function MS({
  children: r,
  hass: a
}) {
  const [i, c] = v.useState(null), [d, f] = v.useState(0), p = v.useRef(null), [m, g] = v.useState(!1), [w, y] = v.useState(!1);
  return v.useEffect(() => {
    let x = !0;
    c(null);
    async function S() {
      const C = a ? Np(a) : await $S();
      if (!x) return;
      p.current ? p.current.setHass(C) : p.current = new PS(C);
      const N = C.user ?? await C.connection.sendMessagePromise({ type: "auth/current_user" });
      x && (g((N == null ? void 0 : N.is_admin) === !0), y(!0));
    }
    return S().catch((C) => {
      x && c(Ct(C));
    }), () => {
      x = !1;
    };
  }, [a, d]), i ? /* @__PURE__ */ o.jsx("div", { className: "appShell panelRecovery", "data-theme": localStorage.getItem("ha-dialog-ui-theme") || "dark", children: /* @__PURE__ */ o.jsx(Ve, { error: i, retry: () => f((x) => x + 1) }) }) : !w || !p.current ? /* @__PURE__ */ o.jsx(Or, { label: _("Подключение к Home Assistant..."), fullscreen: !0 }) : /* @__PURE__ */ o.jsx(fp.Provider, { value: p.current, children: /* @__PURE__ */ o.jsx(lp.Provider, { value: m, children: r }) });
}
function IS({ hass: r }) {
  return /* @__PURE__ */ o.jsx(ny, { children: /* @__PURE__ */ o.jsx(MS, { hass: r, children: /* @__PURE__ */ o.jsx(bS, {}) }) });
}
const Nf = "ha-dialog-ui-panel", Tf = "ha-dialog-ui-style";
class LS extends HTMLElement {
  constructor() {
    super(...arguments);
    Ne(this, "root");
    Ne(this, "container");
    Ne(this, "layoutObserver");
    Ne(this, "updateViewport", () => {
      const i = Math.max(0, this.getBoundingClientRect().top + window.scrollY);
      this.style.setProperty("--ha-dialog-ui-available-height", `${Math.max(0, window.innerHeight - i)}px`);
    });
    Ne(this, "resume", () => {
      document.visibilityState !== "hidden" && this.isConnected && (this.updateViewport(), this.loadStyles(), this.render());
    });
    Ne(this, "hassValue");
    Ne(this, "renderTimer");
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
    if (i.getElementById(Tf)) return;
    const c = document.createElement("style");
    c.id = Tf, c.setAttribute("data-dialog-ui", "true"), c.textContent = "@charset \"UTF-8\";:host{display:block;height:100%;max-height:var(--ha-dialog-ui-available-height, 100dvh);min-height:0;overflow-y:auto;overflow-x:hidden;isolation:isolate}*,*:before,*:after{box-sizing:border-box}:root,[data-theme=dark]{color-scheme:dark;--danger: #f28b82;--switch-thumb: #c8ced8;--shadow-floating: rgba(0, 0, 0, .45);--app-background: #111111;--surface: #1c1c1c;--surface-elevated: #282828;--surface-hover: #333333;--border: #3b3b3b;--border-hover: #666666;--text: #e1e1e1;--text-secondary: #9b9b9b;--text-muted: #9ca3af;--primary: var(--primary-color, #03a9f4);--primary-strong: color-mix(in srgb, var(--primary) 85%, black);--loader-track: rgba(255, 255, 255, .16);--control-background: rgba(255, 255, 255, .04);--control-background-hover: rgba(255, 255, 255, .06);--shadow: rgba(0, 0, 0, .3)}[data-theme=light]{color-scheme:light;--danger: #b3261e;--switch-thumb: #64748b;--shadow-floating: rgba(32, 33, 36, .18);--app-background: #f4f5f7;--surface: #ffffff;--surface-elevated: #f7f8fa;--surface-hover: #eef0f3;--border: #dfe3e8;--border-hover: #bdbdbd;--text: #212121;--text-secondary: #5f6368;--text-muted: #64748b;--primary: var(--primary-color, #03a9f4);--primary-strong: color-mix(in srgb, var(--primary) 85%, black);--loader-track: rgba(3, 169, 244, .16);--control-background: #ffffff;--control-background-hover: #f1f3f5;--shadow: rgba(32, 33, 36, .08)}html{color-scheme:dark}body{margin:0;font-family:Inter,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,sans-serif;color:var(--text);background:var(--app-background);min-height:100vh;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;text-rendering:optimizeLegibility}#root{min-height:100vh}.appShell{--page-padding: 28px;--mobile-fixed-actions-height: 86px;font-family:Roboto,system-ui,-apple-system,Segoe UI,sans-serif;-webkit-font-smoothing:antialiased;min-height:100vh;color:var(--text);background:var(--app-background)}button,input,textarea,select{font:inherit}button{color:inherit}a{color:inherit;text-decoration:none}::selection{background:var(--accent-background)}:root,[data-theme]{--on-primary: #ffffff;--accent-background: color-mix(in srgb, var(--primary) 16%, transparent);--accent-border: color-mix(in srgb, var(--primary) 40%, transparent);--focus-ring: color-mix(in srgb, var(--primary) 18%, transparent);--danger-ring: color-mix(in srgb, var(--danger) 18%, transparent);--danger-background: color-mix(in srgb, var(--danger) 6%, var(--surface));--modal-backdrop: rgba(0, 0, 0, .72);--sheet-backdrop: rgba(0, 0, 0, .45)}.panelRecovery{padding:28px;min-height:var(--ha-dialog-ui-available-height, 100dvh)}.panelRenderRecovery{display:flex;flex-direction:column;height:var(--ha-dialog-ui-available-height, 100dvh);min-height:0;box-sizing:border-box}.panelRecoveryNavigation{flex-shrink:0;min-width:0}.panelRecoveryNavigation>nav{display:inline-flex;flex-wrap:wrap;gap:8px}.panelRecoveryNavigation>nav a{padding:10px 14px;border:1px solid var(--border);border-radius:12px}.panelRecoveryNavigation>nav a:hover,.panelRecoveryNavigation>nav a:focus-visible{background:var(--surface-hover)}.panelRecoveryContent{flex:1;min-height:0;display:flex;align-items:center;justify-content:center;padding:24px 0}.panelRecoveryMessage{width:100%;max-width:36rem;display:flex;flex-direction:column;align-items:center;gap:24px;text-align:center}.panelRecoveryMessage p{margin:0;font-size:clamp(16px,2vw,20px);line-height:1.6;overflow-wrap:anywhere}.panelRecoveryMessage>button{align-self:center;max-width:100%;min-height:46px}@media(max-width:768px){.panelRenderRecovery{padding:16px}.panelRecoveryContent{padding:20px 8px}}._button_180pj_1{position:relative;display:inline-flex;align-items:center;justify-content:center;gap:8px;height:46px;padding:0 18px;border:1px solid transparent;border-radius:14px;cursor:pointer;-webkit-user-select:none;user-select:none;font-size:14px;font-weight:600;white-space:nowrap;transition:background .18s ease,color .18s ease,border-color .18s ease,box-shadow .18s ease,transform .18s ease,opacity .18s ease}._button_180pj_1:hover{transform:translateY(-1px)}._button_180pj_1:active{transform:translateY(0) scale(.98)}._button_180pj_1:focus-visible{outline:none;box-shadow:0 0 0 4px var(--focus-ring)}._full_180pj_32{width:100%}._primary_180pj_37{color:var(--on-primary);background:var(--primary);border-color:var(--accent-border);box-shadow:none}._primary_180pj_37:hover{background:var(--primary-strong)}._secondary_180pj_49{color:var(--text);background:var(--control-background);border-color:var(--border)}._secondary_180pj_49:hover{background:var(--control-background-hover);border-color:var(--border-hover)}._ghost_180pj_61{color:var(--text-secondary);background:transparent}._ghost_180pj_61:hover{background:var(--control-background-hover);color:var(--text)}._button_180pj_1:disabled{opacity:.45;cursor:not-allowed;transform:none;box-shadow:none}._button_180pj_1:disabled:hover{transform:none}._remove_180pj_83{align-self:flex-end;justify-self:end;flex:0 0 auto;width:fit-content;color:var(--text);background:var(--control-background-hover);border-color:transparent}._remove_180pj_83:hover{background:var(--surface-hover)}._remove_180pj_83._full_180pj_32{width:100%}._tabs_1vwxg_1{display:inline-flex;flex-wrap:wrap;max-width:100%;align-items:center;gap:6px;padding:6px;background:var(--surface);-webkit-backdrop-filter:blur(18px);backdrop-filter:blur(18px);border:1px solid var(--border);border-radius:18px;box-shadow:0 2px 8px var(--shadow);z-index:9000}._dropdown_1vwxg_16{position:relative}._tab_1vwxg_1{position:relative;display:flex;align-items:center;justify-content:center;height:44px;min-width:118px;padding:0 20px;border-radius:12px;color:var(--text-secondary);text-decoration:none;border:0;background:transparent;cursor:pointer;font-family:inherit;font-size:14px;font-weight:500;transition:background .2s,color .2s,transform .2s}._tab_1vwxg_1:hover{color:var(--text);background:var(--control-background)}._tab_1vwxg_1:active{transform:scale(.98)}._active_1vwxg_49{color:var(--text);background:var(--primary);box-shadow:none}._tab_1vwxg_1>span{margin-left:5px}._menu_1vwxg_59{position:absolute;top:calc(100% + 12px);left:0;width:250px;padding:8px;display:flex;flex-direction:column;gap:4px;background:var(--surface-elevated);-webkit-backdrop-filter:blur(22px);backdrop-filter:blur(22px);border:1px solid var(--border);border-radius:16px;box-shadow:0 18px 40px var(--shadow-floating);z-index:5000}._chevron_1vwxg_76{margin-left:8px}._tab_1vwxg_1[aria-expanded=true] ._chevron_1vwxg_76{transform:rotate(180deg)}._tab_1vwxg_1:focus-visible,._menuItem_1vwxg_84:focus-visible{outline:2px solid var(--primary);outline-offset:2px}._menuItem_1vwxg_84{display:flex;align-items:center;height:42px;padding:0 14px;border-radius:10px;color:var(--text-secondary);text-decoration:none;transition:background .15s,color .15s,transform .15s}._menuItem_1vwxg_84:hover{background:var(--control-background-hover);color:var(--text);transform:translate(3px)}._menuItem_1vwxg_84._active_1vwxg_49{color:var(--text);background:var(--accent-background);border:1px solid var(--accent-border)}._tabs_1vwxg_1{flex-wrap:wrap;max-width:100%}._overlay_tb5vv_1{position:fixed;top:0;right:0;bottom:0;left:0;display:flex;align-items:flex-end;background:var(--sheet-backdrop);z-index:3000;animation:_fade_tb5vv_1 .15s ease}._sheet_tb5vv_11{width:100%;background:var(--surface-elevated);border-top:1px solid var(--border);border-radius:20px 20px 0 0;padding:16px;box-shadow:0 -16px 48px var(--shadow-floating);animation:_sheet_tb5vv_11 .18s ease}._handle_tb5vv_21{width:42px;height:4px;margin:0 auto 18px;border-radius:999px;background:var(--surface-elevated)}@keyframes _sheet_tb5vv_11{0%{opacity:0;transform:translateY(18px)}to{opacity:1;transform:translateY(0)}}@keyframes _fade_tb5vv_1{0%{opacity:0}to{opacity:1}}._overlay_avpnk_1>section{box-sizing:border-box;max-height:calc(100dvh - 20px);display:flex;flex-direction:column;padding:16px 16px calc(20px + env(safe-area-inset-bottom));border-radius:24px 24px 0 0}._overlay_avpnk_1>section>div:last-child{overflow-y:auto;overscroll-behavior:contain;min-height:0}._heading_avpnk_16{display:flex;align-items:center;justify-content:space-between;gap:16px;margin-bottom:16px;padding-left:8px}._heading_avpnk_16 h2{margin:0;color:var(--text);font-size:22px;font-weight:650}._close_avpnk_32{width:40px;height:40px;flex-shrink:0;display:grid;place-items:center;border:1px solid var(--border);border-radius:12px;color:var(--text);background:var(--control-background);cursor:pointer}._nav_avpnk_45{display:flex;flex-direction:column;gap:4px}._item_avpnk_51{display:flex;align-items:center;gap:12px;min-height:50px;box-sizing:border-box;padding:8px 12px;border:1px solid transparent;border-radius:14px;text-decoration:none;color:var(--text-secondary);transition:background .15s,color .15s}._item_avpnk_51:hover{background:var(--control-background-hover);color:var(--text)}._icon_avpnk_70{display:grid;place-items:center;width:32px;height:32px;flex-shrink:0}._label_avpnk_78{flex:1;min-width:0;font-size:15px;line-height:1.35;font-weight:500}._arrow_avpnk_86{opacity:.5;flex-shrink:0}._active_avpnk_91{color:var(--text);background:var(--accent-background);border-color:var(--accent-border)}._active_avpnk_91 ._icon_avpnk_70{color:var(--primary)}._item_avpnk_51:focus-visible,._close_avpnk_32:focus-visible{outline:2px solid var(--primary);outline-offset:-2px}@media(prefers-reduced-motion:reduce){._item_avpnk_51{transition:none}}._overlay_avpnk_1>section>div:first-child>div{background:var(--text-muted);opacity:.45}._heading_avpnk_16{position:sticky;top:0;z-index:1;padding-bottom:12px;margin-bottom:4px;background:var(--surface-elevated)}._item_avpnk_51{scroll-margin-block:72px 12px}._search_1h7xe_1{box-sizing:border-box;width:100%;grid-column:1/-1;display:flex;align-items:center;gap:12px;min-width:0;height:48px;padding:0 16px;border:1px solid var(--border);border-radius:12px;background:var(--control-background);color:var(--text-muted)}._search_1h7xe_1:focus-within{border-color:var(--primary);box-shadow:0 0 0 2px var(--focus-ring)}._search_1h7xe_1>svg{flex-shrink:0}._search_1h7xe_1 input{flex:1;width:100%;min-width:0;height:100%;border:0;outline:0;background:transparent;color:var(--text);font:inherit;font-size:15px}._search_1h7xe_1 input::placeholder{color:var(--text-muted)}._header_1pxju_1{position:sticky;top:0;background:var(--surface);border-bottom:1px solid var(--border);z-index:1000}._bar_1pxju_9{display:flex;align-items:center;justify-content:space-between;gap:10px;min-height:64px;padding:0 16px}._tools_1pxju_18{display:flex;flex-direction:column;gap:8px;padding:0 16px 12px}._tools_1pxju_18>div{box-sizing:border-box;width:100%;margin:0}._title_1pxju_31{margin:0;font-size:17px;font-weight:600;color:var(--text)}._menuButton_1pxju_38{width:40px;height:40px;display:flex;align-items:center;justify-content:center;border:1px solid var(--border);border-radius:12px;background:var(--control-background);color:var(--text);cursor:pointer;transition:background .18s ease,border-color .18s ease,transform .18s ease}._menuButton_1pxju_38:hover{background:var(--control-background-hover);border-color:var(--border)}._menuButton_1pxju_38:active{transform:scale(.96)}@media(min-width:769px){._header_1pxju_1{display:none}}._title_1pxju_31{min-width:0;text-align:center;overflow-wrap:anywhere}._menuButton_1pxju_38{flex-shrink:0}._active_1pxju_76{background:var(--accent-background);border-color:var(--accent-border)}._menuButton_1pxju_38:focus-visible{outline:2px solid var(--primary);outline-offset:2px}._tools_1pxju_18>[role=group]{padding:3px;gap:3px}._tools_1pxju_18>[role=group]>button{flex:1;min-height:36px;padding:8px 10px}._tools_1pxju_18>[role=group]>button:last-child{flex:1.8}._loader_m2244_1{width:100%;min-height:220px;display:flex;align-items:center;justify-content:center;gap:14px;color:var(--text-secondary)}._fullscreen_m2244_11{min-height:100vh}._spinner_m2244_15{width:42px;height:42px;border-radius:50%;border:4px solid var(--loader-track);border-top-color:var(--primary);animation:_spin_m2244_15 .85s linear infinite}._label_m2244_24{font-size:15px;font-weight:600}@keyframes _spin_m2244_15{to{transform:rotate(360deg)}}._error_fi1f1_1{padding:16px;margin:12px 0;border:1px solid var(--danger);border-radius:14px;background:var(--danger-background);color:var(--text);overflow-wrap:anywhere}._error_fi1f1_1 p{margin:0;line-height:1.5}._error_fi1f1_1 button{margin-top:12px}._toast_1g76h_1{position:fixed;z-index:10001;top:max(16px,env(safe-area-inset-top));left:50%;transform:translate(-50%);width:max-content;max-width:min(560px,100% - 32px);box-sizing:border-box;display:flex;align-items:center;gap:12px;padding:16px;border:1px solid var(--primary);border-radius:16px;background:var(--surface-elevated);color:var(--text);box-shadow:0 8px 32px var(--shadow-floating);line-height:1.5;overflow-wrap:anywhere}._toast_1g76h_1>svg{flex-shrink:0;color:var(--primary)}._toast_1g76h_1 button{display:flex;align-items:center;justify-content:center;flex-shrink:0;min-width:36px;min-height:36px;border:0;border-radius:8px;background:transparent;color:var(--text-secondary);cursor:pointer}._toast_1g76h_1 button:hover{background:var(--surface-hover)}._warning_1g76h_43{border-color:var(--danger)}._warning_1g76h_43>svg{color:var(--danger)}._labelRow_1w41x_1{display:flex;align-items:center;gap:6px;min-width:0}._labelRow_1w41x_1>label{min-width:0}._helpButton_1w41x_12{display:inline-flex;flex:0 0 auto;align-items:center;justify-content:center;width:24px;height:24px;padding:0;border:0;border-radius:50%;background:transparent;color:var(--text-secondary);cursor:pointer}._helpButton_1w41x_12:hover{color:var(--primary);background:var(--accent-background)}._helpButton_1w41x_12:focus-visible{outline:2px solid var(--primary);outline-offset:2px}._tooltip_1w41x_37{position:fixed;z-index:10030;width:min(340px,100vw - 24px);max-height:calc(100vh - 24px);overflow-y:auto;padding:14px 16px;border-radius:12px;border:1px solid var(--border);background:var(--surface-elevated);color:var(--text);box-shadow:0 8px 24px var(--shadow-floating);font-size:13px;font-weight:400;line-height:1.6;white-space:pre-line;overflow-wrap:anywhere}._helpOverlay_1w41x_56{z-index:10030}._sheetContent_1w41x_60{display:grid;gap:20px;padding-bottom:max(8px,env(safe-area-inset-bottom));color:var(--text)}._sheetContent_1w41x_60 h3{margin:0;font-size:18px}._sheetContent_1w41x_60 p{margin:0;max-height:60dvh;overflow-y:auto;font-size:14px;line-height:1.6;white-space:pre-line;overflow-wrap:anywhere}@media(pointer:coarse){._helpButton_1w41x_12{width:32px;height:32px}}._field_1vuim_1{display:flex;flex-direction:column;gap:10px;width:100%;min-width:0;box-sizing:border-box}._label_1vuim_10{padding-left:2px;color:var(--text-secondary);font-size:13px;font-weight:600;letter-spacing:.02em}._inputWrapper_1vuim_18{position:relative;width:100%;min-width:0;box-sizing:border-box}._input_1vuim_18{width:100%;min-width:0;box-sizing:border-box;height:50px;padding:0 16px;border-radius:14px;border:1px solid var(--border);background:var(--control-background);color:var(--text);font-size:15px;font-weight:500;transition:border-color .18s ease,background .18s ease,box-shadow .18s ease,transform .18s ease}._passwordInput_1vuim_40{padding-right:52px}._input_1vuim_18::placeholder{color:var(--text-muted)}._input_1vuim_18:hover{background:var(--control-background-hover);border-color:var(--border-hover)}._input_1vuim_18:focus{outline:none;background:var(--control-background-hover);border-color:var(--primary);box-shadow:0 0 0 4px var(--focus-ring);transform:translateY(-1px)}._input_1vuim_18:disabled{opacity:.6;cursor:not-allowed}._passwordToggle_1vuim_66{position:absolute;right:14px;top:50%;width:28px;height:28px;padding:0;display:flex;align-items:center;justify-content:center;transform:translateY(-50%);border:none;background:transparent;color:var(--text-secondary);cursor:pointer;opacity:.7;transition:opacity .18s ease,transform .18s ease}._passwordToggle_1vuim_66:hover{opacity:1;transform:translateY(-50%) scale(1.05)}._passwordToggle_1vuim_66:disabled{opacity:.4;cursor:not-allowed}._error_1vuim_95,._error_1vuim_95:hover{border-color:var(--danger)}._error_1vuim_95:focus{border-color:var(--danger);box-shadow:0 0 0 4px var(--danger-ring)}._errorText_1vuim_108{padding-left:2px;color:var(--danger);font-size:12px;font-weight:500}._field_1aipr_1{min-width:0;display:flex;flex-direction:column;gap:8px}._label_1aipr_8{color:var(--text-secondary);font-size:13px;font-weight:500}._textarea_1aipr_14{box-sizing:border-box;width:100%;min-width:0;max-width:100%;min-height:120px;padding:14px;border:1px solid var(--border);border-radius:14px;background:var(--surface);color:var(--text);font-size:14px;font-family:inherit;resize:vertical;outline:none;transition:border-color .15s ease,background .15s ease,box-shadow .15s ease}._textarea_1aipr_14::placeholder{color:var(--text-muted)}._textarea_1aipr_14:hover{border-color:var(--border-hover)}._textarea_1aipr_14:focus{outline:none;border-color:var(--primary);box-shadow:0 0 0 4px var(--focus-ring)}._error_1aipr_46{border-color:var(--danger)}._error_1aipr_46:focus{border-color:var(--danger);box-shadow:0 0 0 4px var(--danger-ring)}._errorText_1aipr_55{color:var(--danger);font-size:12px}._form_15zw4_1{display:flex;flex-direction:column;gap:20px;min-width:0}._actions_15zw4_8{display:flex;flex-wrap:wrap;gap:12px;justify-content:flex-end}@media(max-width:768px){._actions_15zw4_8>button{width:100%;white-space:normal}}:root{--mobile-fixed-actions-height: 86px;--page-padding: 28px}._page_z6937_7{display:flex;flex-direction:column;gap:32px;min-height:100vh;padding:var(--page-padding, 28px);width:100%;max-width:1440px;margin:0 auto;min-width:0}._header_z6937_19{display:flex;flex-direction:column}._headerTop_z6937_24{display:flex;align-items:flex-start;justify-content:space-between;gap:24px}._heading_z6937_31{display:flex;flex-direction:column}._title_z6937_36{margin:0;font-size:40px;font-weight:700;line-height:1.2;letter-spacing:-.04em;color:var(--text)}._description_z6937_45{margin-top:10px;color:var(--text-secondary);font-size:15px;line-height:1.5}._actions_z6937_52{display:flex;align-items:center}._list_z6937_57{display:flex;flex-direction:column;gap:12px;padding-bottom:calc(var(--mobile-fixed-actions-height) + 32px + env(safe-area-inset-bottom))}@media(max-width:768px){._page_z6937_7{padding:12px 16px 0}._headerTop_z6937_24{flex-direction:column}._title_z6937_36{font-size:32px}._list_z6937_57{padding-bottom:calc(var(--mobile-fixed-actions-height) + 32px + env(safe-area-inset-bottom))}}@media(min-width:769px){._header_z6937_19{gap:20px}._list_z6937_57{padding-bottom:0}}._innerTabs_z6937_88{display:inline-flex;align-self:flex-start;gap:4px;max-width:100%;margin-top:18px;margin-bottom:8px;padding:4px;box-sizing:border-box;border:1px solid var(--border);border-radius:14px;background:var(--surface)}._innerTab_z6937_88{min-height:40px;padding:8px 20px;border:1px solid transparent;border-radius:10px;background:transparent;color:var(--text-secondary);font:inherit;font-size:14px;font-weight:600;cursor:pointer;transition:background .15s ease,color .15s ease}._innerTab_z6937_88:hover{background:var(--surface-hover);color:var(--text)}._innerTab_z6937_88._activeInnerTab_z6937_121{background:var(--primary);color:var(--on-primary)}._innerTab_z6937_88:focus-visible{outline:2px solid var(--primary);outline-offset:2px}._settingsActions_z6937_131{display:flex;justify-content:flex-end;padding:0 0 12px}._settingsActions_z6937_131>button{min-width:160px}._listSentinel_z6937_141{height:1px}._settingsSections_z6937_145{display:flex;flex-direction:column;gap:20px;min-width:0}@media(max-width:768px){._settingsSections_z6937_145{margin-bottom:calc(100px + env(safe-area-inset-bottom))}}._settingsSection_z6937_145{min-width:0;padding:24px;border:1px solid var(--border);border-radius:16px;background:var(--surface)}._settingsSection_z6937_145>h2{margin:0 0 24px;color:var(--text);font-size:18px}._settingsMobileActions_z6937_171{position:fixed;left:16px;right:16px;bottom:calc(16px + env(safe-area-inset-bottom));display:flex;justify-content:center;z-index:1100}._settingsMobileActions_z6937_171>button{width:100%;max-width:420px}@media(max-width:768px){._settingsSection_z6937_145{padding:18px}}._connectionFields_z6937_191{display:flex;flex-direction:column;gap:24px}._collectionHeader_z6937_197{display:grid;grid-template-columns:minmax(0,1fr) auto;align-items:center;gap:20px 24px;padding:24px;border:1px solid var(--border);border-radius:18px;background:var(--surface)}._collectionHeader_z6937_197 ._title_z6937_36{font-size:32px;line-height:1.2}._collectionHeader_z6937_197>._actions_z6937_52{justify-self:end}._collectionHeader_z6937_197>._headerTop_z6937_24{grid-column:1/-1}@media(max-width:768px){._collectionHeader_z6937_197{display:contents}._collectionHeader_z6937_197>._actions_z6937_52{display:contents}._collectionHeader_z6937_197>._heading_z6937_31,._collectionHeader_z6937_197>._headerTop_z6937_24{display:none}}._heading_1w2wz_1{margin:0;color:var(--text)}._note_1w2wz_6{margin:0;color:var(--text-secondary);line-height:1.5}._entries_1w2wz_12{display:flex;flex-direction:column;gap:12px;min-width:0}._entry_1w2wz_19{padding:16px;border:1px solid var(--border);border-radius:14px;background:var(--surface);min-width:0}._line_1w2wz_27{display:flex;flex-wrap:wrap;gap:8px 16px;overflow-wrap:anywhere;font-size:14px}._line_1w2wz_27+._line_1w2wz_27{margin-top:10px;color:var(--text-secondary)}._error_1w2wz_40{color:var(--error, #dc2626)}@media(max-width:768px){._heading_1w2wz_1{display:none}}._body_1w2wz_49{margin-top:12px;min-width:0}._body_1w2wz_49 summary{cursor:pointer;color:var(--text-secondary);font-size:14px}._body_1w2wz_49 pre{margin:10px 0 0;padding:12px;border-radius:8px;background:var(--control-background);font-size:12px;line-height:1.5;white-space:pre-wrap;overflow-wrap:anywhere;color:var(--text)}._subtitle_c1esh_1{font-size:13px;color:var(--text-muted)}._card_c1esh_6{display:flex;align-items:center;gap:18px;width:100%;padding:18px 20px;border:1px solid var(--border);border-radius:18px;background:var(--surface);-webkit-backdrop-filter:blur(16px);backdrop-filter:blur(16px);cursor:pointer;text-align:left;transition:transform .18s ease,border-color .18s ease,background .18s ease,box-shadow .18s ease}._card_c1esh_6:hover{transform:translateY(-2px);background:var(--control-background);border-color:var(--border-hover);box-shadow:0 12px 28px var(--shadow)}._card_c1esh_6:active{transform:scale(.985)}._content_c1esh_32{flex:1;display:flex;flex-direction:column;gap:6px;min-width:0}._title_c1esh_40{font-size:16px;font-weight:600;color:var(--text)}._arrow_c1esh_46{color:var(--text-muted);flex-shrink:0;transition:color .2s,transform .2s}._card_c1esh_6:hover ._arrow_c1esh_46{color:var(--primary);transform:translate(4px)}._titleOnly_c1esh_57{min-height:72px}._titleOnly_c1esh_57 ._title_c1esh_40{overflow-wrap:anywhere}._pagination_r0e80_1{display:flex;align-items:center;justify-content:center;gap:12px;flex-wrap:wrap;margin-top:4px}._button_r0e80_10{min-width:36px;height:38px;padding:0 14px;border:1px solid var(--border);border-radius:10px;background:var(--surface);color:var(--text);cursor:pointer;font-size:14px;font-weight:600;transition:background .15s ease,border-color .15s ease,opacity .15s ease}._button_r0e80_10:hover:not(:disabled){background:var(--surface-hover);border-color:var(--border-hover)}._button_r0e80_10:disabled{cursor:not-allowed;opacity:.45}._label_r0e80_34{color:var(--text-secondary);font-size:14px;text-align:center}._pages_r0e80_40{display:flex;align-items:center;justify-content:center;flex-wrap:wrap;gap:4px}._active_r0e80_48{background:var(--primary);border-color:var(--primary)}._button_r0e80_10:focus-visible{outline:2px solid var(--primary);outline-offset:2px}._overlay_1m3e5_1,._modal_1m3e5_1,._header_1m3e5_1,._body_1m3e5_1,._footer_1m3e5_1{box-sizing:border-box;min-width:0}._overlay_1m3e5_1{position:fixed;top:0;right:0;bottom:0;left:0;display:flex;align-items:center;justify-content:center;padding:32px;background:var(--modal-backdrop);-webkit-backdrop-filter:blur(12px);backdrop-filter:blur(12px);z-index:10000}._modal_1m3e5_1{width:100%;display:flex;flex-direction:column;max-height:calc(100vh - 64px);overflow:hidden;border-radius:24px;background:var(--surface);-webkit-backdrop-filter:blur(24px);backdrop-filter:blur(24px);border:1px solid var(--border);box-shadow:0 24px 80px var(--shadow-floating)}._sm_1m3e5_32{max-width:560px}._md_1m3e5_36{max-width:760px}._lg_1m3e5_40{max-width:960px}._xl_1m3e5_44{max-width:1200px}._header_1m3e5_1{gap:12px;display:flex;align-items:center;justify-content:space-between;min-height:76px;padding:0 32px;border-bottom:1px solid var(--border);flex-shrink:0}._title_1m3e5_59{flex:1;min-width:0;margin:0;font-size:22px;font-weight:700;color:var(--text)}._body_1m3e5_1{flex:1;overflow-y:auto;overflow-x:hidden;padding:32px;min-height:0}._footer_1m3e5_1{display:flex;flex-direction:column;z-index:200;padding:20px 32px;background:var(--surface);-webkit-backdrop-filter:blur(18px);backdrop-filter:blur(18px);border-top:1px solid var(--border)}._close_1m3e5_86{flex-shrink:0;width:40px;height:40px;padding:0!important;border-radius:12px}@media(max-width:768px){._overlay_1m3e5_1{padding:0}._modal_1m3e5_1{width:100%;max-width:100%;height:100vh;max-height:100vh;border-radius:0;border:none}._header_1m3e5_1{padding:max(env(safe-area-inset-top),16px) 16px 16px}._body_1m3e5_1{padding:20px 16px}._footer_1m3e5_1{padding:16px 16px calc(16px + env(safe-area-inset-bottom))}}._fields_1m3e5_116{display:contents;border:0;padding:0;margin:0;min-width:0}._suspended_1m3e5_124{display:none}._heading_1m3e5_128{flex:1;min-width:0;padding:16px 0}._content_eng69_1{display:flex;flex-direction:column;gap:12px}._title_eng69_7{margin:4px 0 8px;color:var(--text);font-size:18px;font-weight:600}._actions_eng69_14{display:flex;flex-direction:column;gap:12px}._row_eng69_20{display:grid;grid-auto-flow:column;grid-auto-columns:minmax(0,1fr);gap:10px}._row_eng69_20>button{min-width:0}._identifier_eng69_31{margin:4px 0 0;font-size:11px;line-height:1.4;color:var(--text-secondary);overflow-wrap:anywhere;-webkit-user-select:text;user-select:text}._accordion_5owbj_1{border:1px solid var(--border);border-radius:12px;overflow:hidden}._header_5owbj_7{width:100%;background:var(--surface-elevated);border:none;color:var(--text);padding:16px;text-align:left;cursor:pointer;font-weight:600;display:flex;justify-content:space-between}._content_5owbj_20{padding:16px;border-top:1px solid var(--border);display:flex;flex-direction:column;gap:16px}._wrapper_1fgdg_1{min-width:0;width:100%;box-sizing:border-box;position:relative;z-index:999999;overflow:visible}._dropdown_1fgdg_10{position:fixed;z-index:9999999;max-height:260px;overflow-y:auto;overscroll-behavior:contain;border:1px solid var(--border);border-radius:12px;background:var(--surface);box-shadow:0 12px 28px var(--shadow-floating)}._option_1fgdg_22{box-sizing:border-box;overflow-wrap:anywhere;display:flex;width:100%;flex-direction:column;gap:4px;padding:10px 12px;border:0;border-bottom:1px solid var(--border);background:transparent;color:var(--text);text-align:left;cursor:pointer}._option_1fgdg_22:hover{background:var(--surface-hover)}._option_1fgdg_22:last-child{border-bottom:0}._title_1fgdg_46{font-size:14px;font-weight:600}._uuid_1fgdg_51,._hint_1fgdg_52{color:var(--text-secondary);font-size:12px}._field_1esqu_1{margin-bottom:12px}._row_1esqu_5{display:flex;align-items:flex-end;gap:8px}._inputWrapper_1esqu_11{flex:1;min-width:0}._error_1esqu_16{margin-top:4px;color:var(--danger);font-size:12px}._clearButton_1esqu_22{flex:0 0 36px;width:36px;min-width:36px;height:50px;padding:0;box-sizing:border-box}._rowError_1esqu_31{align-items:center}._dropdown_3mupk_2{display:flex;flex-direction:column;gap:10px;width:100%;min-width:0;box-sizing:border-box}._label_3mupk_11{padding-left:2px;color:var(--text-secondary);font-size:13px;font-weight:600;letter-spacing:.02em}._wrapper_3mupk_19{position:relative}._select_3mupk_23{width:100%;min-width:0;box-sizing:border-box;height:50px;padding:0 48px 0 16px;appearance:none;-webkit-appearance:none;-moz-appearance:none;border-radius:14px;border:1px solid var(--border);background:var(--control-background);color:var(--text);font-size:15px;font-weight:500;cursor:pointer;transition:border-color .18s ease,background .18s ease,box-shadow .18s ease,transform .18s ease}._select_3mupk_23:hover{background:var(--control-background-hover);border-color:var(--border-hover)}._select_3mupk_23:focus{outline:none;background:var(--control-background-hover);border-color:var(--primary);box-shadow:0 0 0 4px var(--focus-ring);transform:translateY(-1px)}._select_3mupk_23:disabled{opacity:.6;cursor:not-allowed}._select_3mupk_23 option{background:var(--surface);color:var(--text)}._arrow_3mupk_65{position:absolute;top:50%;right:16px;transform:translateY(-50%);pointer-events:none;color:var(--text-muted);transition:color .18s ease,transform .18s ease}._wrapper_3mupk_19:hover ._arrow_3mupk_65{color:var(--primary)}._select_3mupk_23:focus+._arrow_3mupk_65{color:var(--primary);transform:translateY(-50%) rotate(180deg)}._error_3mupk_85,._error_3mupk_85:hover{border-color:var(--danger)!important}._error_3mupk_85:focus{border-color:var(--danger)!important;box-shadow:0 0 0 4px var(--danger-ring);background:var(--danger-background)}._error_3mupk_85+._arrow_3mupk_65{color:var(--danger)}._errorText_3mupk_103{margin-top:-4px;padding-left:2px;color:var(--danger);font-size:12px;font-weight:500;line-height:1.4}._form_1ogov_1{display:flex;flex-direction:column;gap:28px}._section_1ogov_7{z-index:100;display:flex;flex-direction:column;gap:18px;padding:22px;border-radius:18px;background:var(--control-background);border:1px solid var(--border)}._sectionTitle_1ogov_18{margin:0;font-size:13px;font-weight:700;letter-spacing:.08em;text-transform:uppercase;color:var(--text-secondary)}._conditions_1ogov_27{display:flex;flex-direction:column;gap:14px}._addCondition_1ogov_33{width:100%;height:48px;margin-top:8px;border:1px dashed var(--border);border-radius:14px;background:transparent;color:var(--text-secondary);transition:background .18s,border-color .18s,color .18s,transform .18s}._addCondition_1ogov_33:hover{background:var(--accent-background);border-color:var(--accent-border);color:var(--text)}._addCondition_1ogov_33:active{transform:scale(.98)}._footer_1ogov_54{z-index:200;position:sticky;bottom:-32px;display:flex;justify-content:flex-end;align-items:center;gap:12px;margin:0 -32px -32px;padding:20px 32px;background:var(--surface);-webkit-backdrop-filter:blur(18px);backdrop-filter:blur(18px);border-top:1px solid var(--border)}@media(max-width:768px){._form_1ogov_1{gap:20px}._section_1ogov_7{padding:18px}._footer_1ogov_54{position:sticky;bottom:-20px;margin:0 -16px -20px;padding:16px 16px calc(16px + env(safe-area-inset-bottom));flex-direction:column}}._container_rqdjx_1{position:relative;min-width:0;display:flex;flex-direction:column;gap:12px}._rows_rqdjx_9{display:flex;flex-direction:column;gap:12px;min-width:0}._rows_rqdjx_9:empty{display:none}._hidden_rqdjx_20{visibility:hidden}._overlay_rqdjx_24{position:absolute;top:0;right:0;bottom:0;left:0;display:flex;flex-direction:column;gap:12px}._card_rqdjx_32{box-sizing:border-box;min-height:88px;padding:18px 20px;border:1px solid var(--border);border-radius:18px;background:var(--surface);display:flex;flex-direction:column;justify-content:center;gap:10px;overflow:hidden}._overlay_rqdjx_24 ._card_rqdjx_32{flex:1;min-height:0}._title_rqdjx_51,._subtitle_rqdjx_51{display:block;border-radius:4px;background:var(--control-background-hover);animation:_pulse_rqdjx_1 1.4s ease-in-out infinite}._title_rqdjx_51{width:45%;max-width:320px;height:18px}._subtitle_rqdjx_51{width:25%;max-width:180px;height:13px}._srOnly_rqdjx_70{position:absolute;width:1px;height:1px;overflow:hidden;clip-path:inset(50%);white-space:nowrap}@keyframes _pulse_rqdjx_1{50%{opacity:.45}}@media(prefers-reduced-motion:reduce){._title_rqdjx_51,._subtitle_rqdjx_51{animation:none}}._container_9wouv_1{position:fixed;left:16px;right:16px;bottom:calc(16px + env(safe-area-inset-bottom));display:flex;justify-content:center;opacity:0;pointer-events:none;transform:translateY(24px) scale(.96);transition:opacity .22s ease,transform .22s ease;z-index:1100}._container_9wouv_1>*{width:100%;max-width:420px}._visible_9wouv_20{opacity:1;transform:translateY(0) scale(1);pointer-events:auto}._visible_9wouv_20>*{pointer-events:auto}._field_1iloj_1{min-width:0;display:flex;flex-direction:column;gap:6px}._label_1iloj_8{color:var(--text);font-size:13px;font-weight:600}._select_1iloj_14{min-width:0;max-width:100%;width:100%;padding:12px 14px;border:1px solid var(--border);border-radius:12px;background:var(--surface);color:var(--text);font:inherit;box-sizing:border-box}._select_1iloj_14:focus{outline:none;border-color:var(--primary);box-shadow:0 0 0 4px var(--focus-ring)}._form_1a1tt_1{display:flex;flex-direction:column;gap:18px}._field_1a1tt_7{display:flex;flex-direction:column;gap:8px;color:var(--text);font-size:13px;font-weight:600}._textarea_1a1tt_16{width:100%;min-height:140px;padding:12px 14px;border:1px solid var(--border);border-radius:12px;background:var(--surface);color:var(--text);resize:vertical;font:inherit;box-sizing:border-box}._arrayItem_1a1tt_29{display:grid;gap:12px;padding:12px;border:1px solid var(--border);border-radius:12px;background:var(--surface);margin-bottom:12px}._form_1a1tt_1 p{margin:0;color:var(--text-secondary);font-size:13px;line-height:1.5}._logicTabs_1a1tt_46{display:flex;gap:4px;padding:4px;background:var(--surface);border:1px solid var(--border);border-radius:12px}._logicTabs_1a1tt_46 button{flex:1;min-width:0;padding:12px 8px;border:0;border-radius:8px;background:transparent;color:var(--text-secondary);font:inherit;cursor:pointer;overflow-wrap:anywhere}._logicTabs_1a1tt_46 button[aria-selected=true]{background:var(--accent-background);color:var(--text);box-shadow:inset 0 0 0 1px var(--accent-border)}._logicTabs_1a1tt_46 button:focus-visible{outline:2px solid var(--primary);outline-offset:2px}@media(max-width:400px){._logicTabs_1a1tt_46 button{padding:10px 4px;font-size:12px}}._sectionTitle_1a1tt_85{margin:0;font-size:14px;font-weight:600;color:var(--text)}._footerActions_1a1tt_92{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:12px}._footerActions_1a1tt_92>button{min-width:0;min-height:46px;height:auto;padding:12px;white-space:normal}._phraseMode_1a1tt_106{display:flex;align-items:center;gap:8px}._phraseMode_1a1tt_106>label{flex:1;min-width:0}._phraseMode_1a1tt_106>label>span:first-of-type{flex-shrink:0}@media(max-width:768px){._directTabLabel_1a1tt_122{white-space:pre-line}}._linkActions_1a1tt_126{display:flex;justify-content:flex-end;flex-wrap:wrap;gap:12px;align-items:center}._switchRow_1hmmz_1{display:inline-flex;align-items:center;gap:10px;color:var(--text);font-size:14px;cursor:pointer;-webkit-user-select:none;user-select:none}._input_1hmmz_11{position:absolute;width:1px;height:1px;padding:0;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border:0}._track_1hmmz_22{position:relative;width:46px;height:26px;flex:0 0 auto;border:1px solid var(--border);border-radius:999px;background:var(--surface-elevated);transition:background .2s ease,border-color .2s ease,box-shadow .2s ease}._thumb_1hmmz_33{position:absolute;top:3px;left:3px;width:18px;height:18px;border-radius:50%;background:var(--switch-thumb);box-shadow:0 2px 6px var(--shadow-floating);transition:transform .2s ease,background .2s ease}._input_1hmmz_11:checked+._track_1hmmz_22{border-color:var(--primary);background:var(--primary);box-shadow:none}._input_1hmmz_11:checked+._track_1hmmz_22 ._thumb_1hmmz_33{transform:translate(20px);background:var(--on-primary)}._input_1hmmz_11:focus-visible+._track_1hmmz_22{outline:2px solid var(--primary);outline-offset:2px}._input_1hmmz_11:disabled+._track_1hmmz_22,._input_1hmmz_11:disabled~._label_1hmmz_62{opacity:.55;cursor:not-allowed}._label_1hmmz_62{line-height:1.3}._form_mn1ml_1{display:flex;flex-direction:column;gap:24px;min-width:0}._arrayItem_mn1ml_8{display:flex;flex-direction:column;gap:18px;min-width:0;padding:20px;border:1px solid var(--border);border-radius:14px;background:var(--control-background);box-sizing:border-box}@media(max-width:768px){._arrayItem_mn1ml_8{padding:14px}}._sectionTitle_mn1ml_25{margin:0;font-size:14px;font-weight:600;color:var(--text)}._form_1i0x1_1{display:flex;flex-direction:column;gap:18px}._field_1i0x1_7{display:flex;flex-direction:column;gap:8px;color:var(--text);font-size:13px;font-weight:600}._textarea_1i0x1_16{width:100%;min-height:140px;padding:12px 14px;border:1px solid var(--border);border-radius:12px;background:var(--surface);color:var(--text);resize:vertical;font:inherit;box-sizing:border-box}._arrayItem_1i0x1_29{display:grid;gap:12px;padding:12px;border:1px solid var(--border);border-radius:12px;background:var(--surface);margin-bottom:12px}._grid_fc8hl_1{min-width:0;display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,280px),1fr));gap:20px}._card_fc8hl_8{box-sizing:border-box;min-width:0;padding:24px;border:1px solid var(--border);border-radius:18px;background:var(--surface)}._card_fc8hl_8 h2{overflow-wrap:anywhere;margin:0 0 20px;font-size:20px}._actions_fc8hl_23{display:flex;flex-wrap:wrap;gap:12px}._description_fc8hl_29{margin:0 0 20px;color:var(--text-secondary);line-height:1.5}@media(max-width:768px){._page_fc8hl_36{padding-bottom:calc(112px + env(safe-area-inset-bottom))}._card_fc8hl_8{padding:18px}._actions_fc8hl_23{flex-direction:column}._actions_fc8hl_23>button{width:100%;min-width:0;max-width:100%;white-space:normal;height:auto;min-height:46px;padding:12px;overflow-wrap:anywhere}}._form_1ijxr_1{display:flex;flex-direction:column;gap:24px}._field_1ijxr_7{display:flex;flex-direction:column;gap:8px}._input_1ijxr_13{box-sizing:border-box;min-width:0;width:100%;background:var(--surface);border:1px solid var(--border);border-radius:10px;padding:12px;color:var(--text)}._input_1ijxr_13:focus{outline:none;border-color:var(--primary)}._label_1ijxr_29{color:var(--text-secondary);font-size:13px;font-weight:500}._help_1ijxr_35{color:var(--text-secondary);font-size:13px}._toggleHelp_1ijxr_40{display:flex;align-items:center;gap:8px}._page_w5y3x_1{min-height:100vh;padding:28px;background:var(--surface);color:var(--text);display:flex;flex-direction:column;gap:28px}._header_w5y3x_11{display:flex;align-items:flex-end;justify-content:space-between;gap:20px}._title_w5y3x_18{margin:0;font-size:40px;line-height:1;letter-spacing:-.04em}._description_w5y3x_25{margin:10px 0 0;color:var(--text-secondary);font-size:15px}._grid_w5y3x_31{display:grid;grid-template-columns:minmax(0,1fr);min-width:0;gap:16px}._card_w5y3x_38,._empty_w5y3x_38{min-width:0;max-width:100%;padding:20px;border:1px solid var(--border);border-radius:20px;background:var(--surface-elevated)}._cardHeader_w5y3x_47{display:flex;justify-content:space-between;gap:16px;align-items:flex-start}._cardTitle_w5y3x_54{margin:0;font-size:18px}._meta_w5y3x_59{overflow-wrap:anywhere;margin-top:8px;color:var(--text-secondary);font-size:14px}._time_w5y3x_66{margin-top:18px;font-size:38px;font-weight:700;letter-spacing:-.04em}._form_w5y3x_73{display:flex;flex-direction:column;gap:18px}._field_w5y3x_79{display:flex;flex-direction:column;gap:8px}._label_w5y3x_85{color:var(--text-secondary);font-size:13px;font-weight:500}._select_w5y3x_91,._input_w5y3x_91{height:44px;padding:0 14px;border:1px solid var(--border);border-radius:14px;background:var(--surface);color:var(--text);font-size:14px}._quickTabs_w5y3x_101{display:flex;flex-wrap:wrap;gap:8px}._quickTab_w5y3x_101{height:40px;padding:0 14px;border:1px solid var(--border);border-radius:999px;background:var(--surface);color:var(--text-secondary);cursor:pointer}._activeQuickTab_w5y3x_117{background:var(--accent-background);color:var(--text)}@media(max-width:768px){._page_w5y3x_1{padding:20px;padding-bottom:calc(120px + env(safe-area-inset-bottom))}._header_w5y3x_11{align-items:stretch;flex-direction:column}._title_w5y3x_18{font-size:32px}}._cardLead_w5y3x_135{flex:1;display:flex;align-items:center;gap:14px;min-width:0}._cardIcon_w5y3x_143{flex:0 0 auto;color:var(--text-muted)}._cardButton_w5y3x_148{width:100%;text-align:left;color:inherit;cursor:pointer}._cardButton_w5y3x_148:hover{border-color:var(--border-hover);background:var(--surface-hover)}._wheelPicker_w5y3x_160{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));width:100%;min-width:0;box-sizing:border-box;gap:12px;padding:14px;border:1px solid var(--border);border-radius:0;background:var(--surface-elevated)}._wheelColumn_w5y3x_173{display:flex;flex-direction:column;align-items:center;gap:8px}._wheelSelect_w5y3x_180{width:100%;height:64px;box-sizing:border-box;border:1px solid var(--border);border-radius:10px;background:var(--control-background);color:var(--text);text-align:center;font-size:24px;font-weight:700}@media(max-width:768px){._wheelPicker_w5y3x_160{position:relative;overflow:hidden}._wheelSelect_w5y3x_180{height:72px}}._footerActions_w5y3x_202{display:flex;justify-content:flex-end;width:100%}._saveButton_w5y3x_208{min-width:160px;box-sizing:border-box}@media(max-width:768px){._saveButton_w5y3x_208{width:100%}}._cardLead_w5y3x_135>div{min-width:0}._cardHeader_w5y3x_47>:last-child:not(._cardLead_w5y3x_135){flex-shrink:0}._volumeLabel_w5y3x_226{display:flex;align-items:baseline;gap:8px}._volumeValue_w5y3x_232{color:var(--text);font-weight:600}._alarmTimeFields_w5y3x_237{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:12px}._wheelSelect_w5y3x_180:focus{outline:2px solid var(--primary);outline-offset:2px}@media(max-width:768px){._grid_w5y3x_31{padding-bottom:calc(96px + env(safe-area-inset-bottom))}}._navigation_scuwa_1{padding:24px 32px 0}._page_scuwa_5{padding:0 32px 24px;color:var(--text);min-width:0}._title_scuwa_11{margin-top:28px}._hint_scuwa_15{color:var(--text-secondary);line-height:1.6}._grid_scuwa_20{display:grid;grid-template-columns:repeat(auto-fill,minmax(min(100%,250px),1fr));gap:16px;max-width:1100px}._device_scuwa_27{display:flex;flex-direction:column;align-items:flex-start;gap:12px;text-align:left;padding:24px;border:1px solid var(--border);border-radius:20px;background:var(--surface);color:var(--text);font:inherit;cursor:pointer;min-width:0}._device_scuwa_27 strong{overflow-wrap:anywhere;font-size:18px}._device_scuwa_27 span{color:var(--text-secondary)}._device_scuwa_27:hover,._device_scuwa_27:focus-visible{border-color:var(--primary)}._active_scuwa_56{border-color:var(--primary)}._active_scuwa_56 svg{color:var(--primary)}._status_scuwa_64{display:flex;align-items:center;gap:8px;margin-bottom:24px}._actions_scuwa_71{display:flex;gap:12px;width:100%}._actions_scuwa_71>button{flex:1;min-width:0}._actions_scuwa_71 button{display:flex;align-items:center;justify-content:center;gap:8px}@media(max-width:768px){._navigation_scuwa_1{padding:0}._page_scuwa_5{padding:16px}._title_scuwa_11{display:none}}._origin_scuwa_100{display:flex;align-items:center;flex-wrap:wrap;gap:10px;line-height:1.6}._origin_scuwa_100 svg{flex-shrink:0;color:var(--primary)}._page_12ruw_1{padding:0 32px 24px;box-sizing:border-box;min-width:0;color:var(--text)}._heading_12ruw_8{display:flex;align-items:center;gap:16px;margin:28px 0}._heading_12ruw_8 h1{font-size:30px;margin:0}._heading_12ruw_8 p{color:var(--text-secondary);line-height:1.6;margin:8px 0 0}._grid_12ruw_26{display:grid;grid-template-columns:repeat(auto-fill,minmax(min(100%,250px),1fr));gap:16px;max-width:1100px}._device_12ruw_33{display:flex;flex-direction:column;align-items:flex-start;gap:12px;text-align:left;padding:24px;border:1px solid var(--border, #333);background:var(--surface, #1c1c1c);color:var(--text);border-radius:20px;font:inherit;cursor:pointer;min-width:0}._device_12ruw_33 strong{font-size:18px;overflow-wrap:anywhere}._device_12ruw_33 span,._device_12ruw_33 small{color:var(--text-secondary)}._device_12ruw_33:hover,._device_12ruw_33:focus-visible{border-color:var(--primary, #03a9f4)}._deviceLive_12ruw_64{border-color:#3da98c}._deviceLive_12ruw_64 svg{color:#3da98c}._navigation_12ruw_72{padding:24px 32px 0}._playback_12ruw_76{position:relative;border:1px solid var(--primary, #03a9f4);background:color-mix(in srgb,var(--primary, #03a9f4) 10%,transparent);border-radius:14px;overflow:hidden}._playback_12ruw_76>svg{position:absolute;left:18px;top:23px;pointer-events:none;color:var(--primary)}._playbackSelect_12ruw_92{padding:18px 40px 6px 54px;border:0;background:transparent;border-radius:14px 14px 0 0;min-height:48px;text-overflow:ellipsis}._playback_12ruw_76:has(select:disabled){opacity:.65}._playback_12ruw_76 small{display:block;padding:0 18px 18px 54px;color:var(--text-secondary);pointer-events:none}._statusRow_12ruw_112{display:flex;align-items:center;gap:8px;margin-bottom:20px}._status_12ruw_112{display:flex;gap:10px;align-items:center;padding:16px 0;color:var(--text-secondary)}._live_12ruw_127{color:#32aa87}._hint_12ruw_131{font-size:14px;color:var(--text-secondary);line-height:1.6}._footer_12ruw_137{display:flex;gap:12px;width:100%}._footer_12ruw_137>button{flex:1;min-width:0}._empty_12ruw_148{padding:28px;border:1px dashed var(--border, #333);border-radius:18px;line-height:1.7}._error_12ruw_155{color:var(--danger, #ed8291);line-height:1.5}@media(max-width:768px){._navigation_12ruw_72{padding:0}._page_12ruw_1{padding:16px}._heading_12ruw_8{margin:20px 0}._heading_12ruw_8 h1{display:none}._grid_12ruw_26{grid-template-columns:1fr}._heading_12ruw_8>svg{display:none}}\n", i.appendChild(c);
  }
  render() {
    if (!this.isConnected) return;
    const i = this.ensureShadowRoot();
    this.root || (this.container || (this.container = document.createElement("div"), i.appendChild(this.container)), this.root = Mm.createRoot(this.container)), this.root.render(
      /* @__PURE__ */ o.jsx(Af.StrictMode, { children: /* @__PURE__ */ o.jsx(dp, { children: /* @__PURE__ */ o.jsx(IS, { hass: this.hassValue }) }) })
    );
  }
}
customElements.get(Nf) || customElements.define(Nf, LS);
