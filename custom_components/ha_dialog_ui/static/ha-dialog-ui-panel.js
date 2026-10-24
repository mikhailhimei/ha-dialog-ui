var jm = Object.defineProperty;
var Em = (r, a, i) => a in r ? jm(r, a, { enumerable: !0, configurable: !0, writable: !0, value: i }) : r[a] = i;
var be = (r, a, i) => Em(r, typeof a != "symbol" ? a + "" : a, i);
function Rf(r) {
  return r && r.__esModule && Object.prototype.hasOwnProperty.call(r, "default") ? r.default : r;
}
var dl = { exports: {} }, Rs = {}, fl = { exports: {} }, xe = {};
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
function Nm() {
  if (Qd) return xe;
  Qd = 1;
  var r = Symbol.for("react.element"), a = Symbol.for("react.portal"), i = Symbol.for("react.fragment"), c = Symbol.for("react.strict_mode"), d = Symbol.for("react.profiler"), f = Symbol.for("react.provider"), p = Symbol.for("react.context"), m = Symbol.for("react.forward_ref"), g = Symbol.for("react.suspense"), w = Symbol.for("react.memo"), y = Symbol.for("react.lazy"), x = Symbol.iterator;
  function k(C) {
    return C === null || typeof C != "object" ? null : (C = x && C[x] || C["@@iterator"], typeof C == "function" ? C : null);
  }
  var j = { isMounted: function() {
    return !1;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, b = Object.assign, E = {};
  function N(C, O, ae) {
    this.props = C, this.context = O, this.refs = E, this.updater = ae || j;
  }
  N.prototype.isReactComponent = {}, N.prototype.setState = function(C, O) {
    if (typeof C != "object" && typeof C != "function" && C != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, C, O, "setState");
  }, N.prototype.forceUpdate = function(C) {
    this.updater.enqueueForceUpdate(this, C, "forceUpdate");
  };
  function P() {
  }
  P.prototype = N.prototype;
  function H(C, O, ae) {
    this.props = C, this.context = O, this.refs = E, this.updater = ae || j;
  }
  var $ = H.prototype = new P();
  $.constructor = H, b($, N.prototype), $.isPureReactComponent = !0;
  var z = Array.isArray, W = Object.prototype.hasOwnProperty, I = { current: null }, J = { key: !0, ref: !0, __self: !0, __source: !0 };
  function B(C, O, ae) {
    var me, we = {}, ke = null, Ne = null;
    if (O != null) for (me in O.ref !== void 0 && (Ne = O.ref), O.key !== void 0 && (ke = "" + O.key), O) W.call(O, me) && !J.hasOwnProperty(me) && (we[me] = O[me]);
    var Ce = arguments.length - 2;
    if (Ce === 1) we.children = ae;
    else if (1 < Ce) {
      for (var Re = Array(Ce), Z = 0; Z < Ce; Z++) Re[Z] = arguments[Z + 2];
      we.children = Re;
    }
    if (C && C.defaultProps) for (me in Ce = C.defaultProps, Ce) we[me] === void 0 && (we[me] = Ce[me]);
    return { $$typeof: r, type: C, key: ke, ref: Ne, props: we, _owner: I.current };
  }
  function G(C, O) {
    return { $$typeof: r, type: C.type, key: O, ref: C.ref, props: C.props, _owner: C._owner };
  }
  function ye(C) {
    return typeof C == "object" && C !== null && C.$$typeof === r;
  }
  function de(C) {
    var O = { "=": "=0", ":": "=2" };
    return "$" + C.replace(/[=:]/g, function(ae) {
      return O[ae];
    });
  }
  var ge = /\/+/g;
  function he(C, O) {
    return typeof C == "object" && C !== null && C.key != null ? de("" + C.key) : O.toString(36);
  }
  function _e(C, O, ae, me, we) {
    var ke = typeof C;
    (ke === "undefined" || ke === "boolean") && (C = null);
    var Ne = !1;
    if (C === null) Ne = !0;
    else switch (ke) {
      case "string":
      case "number":
        Ne = !0;
        break;
      case "object":
        switch (C.$$typeof) {
          case r:
          case a:
            Ne = !0;
        }
    }
    if (Ne) return Ne = C, we = we(Ne), C = me === "" ? "." + he(Ne, 0) : me, z(we) ? (ae = "", C != null && (ae = C.replace(ge, "$&/") + "/"), _e(we, O, ae, "", function(Z) {
      return Z;
    })) : we != null && (ye(we) && (we = G(we, ae + (!we.key || Ne && Ne.key === we.key ? "" : ("" + we.key).replace(ge, "$&/") + "/") + C)), O.push(we)), 1;
    if (Ne = 0, me = me === "" ? "." : me + ":", z(C)) for (var Ce = 0; Ce < C.length; Ce++) {
      ke = C[Ce];
      var Re = me + he(ke, Ce);
      Ne += _e(ke, O, ae, Re, we);
    }
    else if (Re = k(C), typeof Re == "function") for (C = Re.call(C), Ce = 0; !(ke = C.next()).done; ) ke = ke.value, Re = me + he(ke, Ce++), Ne += _e(ke, O, ae, Re, we);
    else if (ke === "object") throw O = String(C), Error("Objects are not valid as a React child (found: " + (O === "[object Object]" ? "object with keys {" + Object.keys(C).join(", ") + "}" : O) + "). If you meant to render a collection of children, use an array instead.");
    return Ne;
  }
  function te(C, O, ae) {
    if (C == null) return C;
    var me = [], we = 0;
    return _e(C, me, "", "", function(ke) {
      return O.call(ae, ke, we++);
    }), me;
  }
  function Ee(C) {
    if (C._status === -1) {
      var O = C._result;
      O = O(), O.then(function(ae) {
        (C._status === 0 || C._status === -1) && (C._status = 1, C._result = ae);
      }, function(ae) {
        (C._status === 0 || C._status === -1) && (C._status = 2, C._result = ae);
      }), C._status === -1 && (C._status = 0, C._result = O);
    }
    if (C._status === 1) return C._result.default;
    throw C._result;
  }
  var F = { current: null }, R = { transition: null }, K = { ReactCurrentDispatcher: F, ReactCurrentBatchConfig: R, ReactCurrentOwner: I };
  function U() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  return xe.Children = { map: te, forEach: function(C, O, ae) {
    te(C, function() {
      O.apply(this, arguments);
    }, ae);
  }, count: function(C) {
    var O = 0;
    return te(C, function() {
      O++;
    }), O;
  }, toArray: function(C) {
    return te(C, function(O) {
      return O;
    }) || [];
  }, only: function(C) {
    if (!ye(C)) throw Error("React.Children.only expected to receive a single React element child.");
    return C;
  } }, xe.Component = N, xe.Fragment = i, xe.Profiler = d, xe.PureComponent = H, xe.StrictMode = c, xe.Suspense = g, xe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = K, xe.act = U, xe.cloneElement = function(C, O, ae) {
    if (C == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + C + ".");
    var me = b({}, C.props), we = C.key, ke = C.ref, Ne = C._owner;
    if (O != null) {
      if (O.ref !== void 0 && (ke = O.ref, Ne = I.current), O.key !== void 0 && (we = "" + O.key), C.type && C.type.defaultProps) var Ce = C.type.defaultProps;
      for (Re in O) W.call(O, Re) && !J.hasOwnProperty(Re) && (me[Re] = O[Re] === void 0 && Ce !== void 0 ? Ce[Re] : O[Re]);
    }
    var Re = arguments.length - 2;
    if (Re === 1) me.children = ae;
    else if (1 < Re) {
      Ce = Array(Re);
      for (var Z = 0; Z < Re; Z++) Ce[Z] = arguments[Z + 2];
      me.children = Ce;
    }
    return { $$typeof: r, type: C.type, key: we, ref: ke, props: me, _owner: Ne };
  }, xe.createContext = function(C) {
    return C = { $$typeof: p, _currentValue: C, _currentValue2: C, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, C.Provider = { $$typeof: f, _context: C }, C.Consumer = C;
  }, xe.createElement = B, xe.createFactory = function(C) {
    var O = B.bind(null, C);
    return O.type = C, O;
  }, xe.createRef = function() {
    return { current: null };
  }, xe.forwardRef = function(C) {
    return { $$typeof: m, render: C };
  }, xe.isValidElement = ye, xe.lazy = function(C) {
    return { $$typeof: y, _payload: { _status: -1, _result: C }, _init: Ee };
  }, xe.memo = function(C, O) {
    return { $$typeof: w, type: C, compare: O === void 0 ? null : O };
  }, xe.startTransition = function(C) {
    var O = R.transition;
    R.transition = {};
    try {
      C();
    } finally {
      R.transition = O;
    }
  }, xe.unstable_act = U, xe.useCallback = function(C, O) {
    return F.current.useCallback(C, O);
  }, xe.useContext = function(C) {
    return F.current.useContext(C);
  }, xe.useDebugValue = function() {
  }, xe.useDeferredValue = function(C) {
    return F.current.useDeferredValue(C);
  }, xe.useEffect = function(C, O) {
    return F.current.useEffect(C, O);
  }, xe.useId = function() {
    return F.current.useId();
  }, xe.useImperativeHandle = function(C, O, ae) {
    return F.current.useImperativeHandle(C, O, ae);
  }, xe.useInsertionEffect = function(C, O) {
    return F.current.useInsertionEffect(C, O);
  }, xe.useLayoutEffect = function(C, O) {
    return F.current.useLayoutEffect(C, O);
  }, xe.useMemo = function(C, O) {
    return F.current.useMemo(C, O);
  }, xe.useReducer = function(C, O, ae) {
    return F.current.useReducer(C, O, ae);
  }, xe.useRef = function(C) {
    return F.current.useRef(C);
  }, xe.useState = function(C) {
    return F.current.useState(C);
  }, xe.useSyncExternalStore = function(C, O, ae) {
    return F.current.useSyncExternalStore(C, O, ae);
  }, xe.useTransition = function() {
    return F.current.useTransition();
  }, xe.version = "18.3.1", xe;
}
var Kd;
function Ll() {
  return Kd || (Kd = 1, fl.exports = Nm()), fl.exports;
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
function Tm() {
  if (Yd) return Rs;
  Yd = 1;
  var r = Ll(), a = Symbol.for("react.element"), i = Symbol.for("react.fragment"), c = Object.prototype.hasOwnProperty, d = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, f = { key: !0, ref: !0, __self: !0, __source: !0 };
  function p(m, g, w) {
    var y, x = {}, k = null, j = null;
    w !== void 0 && (k = "" + w), g.key !== void 0 && (k = "" + g.key), g.ref !== void 0 && (j = g.ref);
    for (y in g) c.call(g, y) && !f.hasOwnProperty(y) && (x[y] = g[y]);
    if (m && m.defaultProps) for (y in g = m.defaultProps, g) x[y] === void 0 && (x[y] = g[y]);
    return { $$typeof: a, type: m, key: k, ref: j, props: x, _owner: d.current };
  }
  return Rs.Fragment = i, Rs.jsx = p, Rs.jsxs = p, Rs;
}
var Gd;
function bm() {
  return Gd || (Gd = 1, dl.exports = Tm()), dl.exports;
}
var o = bm(), v = Ll();
const Af = /* @__PURE__ */ Rf(v);
var Jo = {}, pl = { exports: {} }, wt = {}, hl = { exports: {} }, ml = {};
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
function Rm() {
  return Jd || (Jd = 1, (function(r) {
    function a(R, K) {
      var U = R.length;
      R.push(K);
      e: for (; 0 < U; ) {
        var C = U - 1 >>> 1, O = R[C];
        if (0 < d(O, K)) R[C] = K, R[U] = O, U = C;
        else break e;
      }
    }
    function i(R) {
      return R.length === 0 ? null : R[0];
    }
    function c(R) {
      if (R.length === 0) return null;
      var K = R[0], U = R.pop();
      if (U !== K) {
        R[0] = U;
        e: for (var C = 0, O = R.length, ae = O >>> 1; C < ae; ) {
          var me = 2 * (C + 1) - 1, we = R[me], ke = me + 1, Ne = R[ke];
          if (0 > d(we, U)) ke < O && 0 > d(Ne, we) ? (R[C] = Ne, R[ke] = U, C = ke) : (R[C] = we, R[me] = U, C = me);
          else if (ke < O && 0 > d(Ne, U)) R[C] = Ne, R[ke] = U, C = ke;
          else break e;
        }
      }
      return K;
    }
    function d(R, K) {
      var U = R.sortIndex - K.sortIndex;
      return U !== 0 ? U : R.id - K.id;
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
    var g = [], w = [], y = 1, x = null, k = 3, j = !1, b = !1, E = !1, N = typeof setTimeout == "function" ? setTimeout : null, P = typeof clearTimeout == "function" ? clearTimeout : null, H = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function $(R) {
      for (var K = i(w); K !== null; ) {
        if (K.callback === null) c(w);
        else if (K.startTime <= R) c(w), K.sortIndex = K.expirationTime, a(g, K);
        else break;
        K = i(w);
      }
    }
    function z(R) {
      if (E = !1, $(R), !b) if (i(g) !== null) b = !0, Ee(W);
      else {
        var K = i(w);
        K !== null && F(z, K.startTime - R);
      }
    }
    function W(R, K) {
      b = !1, E && (E = !1, P(B), B = -1), j = !0;
      var U = k;
      try {
        for ($(K), x = i(g); x !== null && (!(x.expirationTime > K) || R && !de()); ) {
          var C = x.callback;
          if (typeof C == "function") {
            x.callback = null, k = x.priorityLevel;
            var O = C(x.expirationTime <= K);
            K = r.unstable_now(), typeof O == "function" ? x.callback = O : x === i(g) && c(g), $(K);
          } else c(g);
          x = i(g);
        }
        if (x !== null) var ae = !0;
        else {
          var me = i(w);
          me !== null && F(z, me.startTime - K), ae = !1;
        }
        return ae;
      } finally {
        x = null, k = U, j = !1;
      }
    }
    var I = !1, J = null, B = -1, G = 5, ye = -1;
    function de() {
      return !(r.unstable_now() - ye < G);
    }
    function ge() {
      if (J !== null) {
        var R = r.unstable_now();
        ye = R;
        var K = !0;
        try {
          K = J(!0, R);
        } finally {
          K ? he() : (I = !1, J = null);
        }
      } else I = !1;
    }
    var he;
    if (typeof H == "function") he = function() {
      H(ge);
    };
    else if (typeof MessageChannel < "u") {
      var _e = new MessageChannel(), te = _e.port2;
      _e.port1.onmessage = ge, he = function() {
        te.postMessage(null);
      };
    } else he = function() {
      N(ge, 0);
    };
    function Ee(R) {
      J = R, I || (I = !0, he());
    }
    function F(R, K) {
      B = N(function() {
        R(r.unstable_now());
      }, K);
    }
    r.unstable_IdlePriority = 5, r.unstable_ImmediatePriority = 1, r.unstable_LowPriority = 4, r.unstable_NormalPriority = 3, r.unstable_Profiling = null, r.unstable_UserBlockingPriority = 2, r.unstable_cancelCallback = function(R) {
      R.callback = null;
    }, r.unstable_continueExecution = function() {
      b || j || (b = !0, Ee(W));
    }, r.unstable_forceFrameRate = function(R) {
      0 > R || 125 < R ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : G = 0 < R ? Math.floor(1e3 / R) : 5;
    }, r.unstable_getCurrentPriorityLevel = function() {
      return k;
    }, r.unstable_getFirstCallbackNode = function() {
      return i(g);
    }, r.unstable_next = function(R) {
      switch (k) {
        case 1:
        case 2:
        case 3:
          var K = 3;
          break;
        default:
          K = k;
      }
      var U = k;
      k = K;
      try {
        return R();
      } finally {
        k = U;
      }
    }, r.unstable_pauseExecution = function() {
    }, r.unstable_requestPaint = function() {
    }, r.unstable_runWithPriority = function(R, K) {
      switch (R) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          R = 3;
      }
      var U = k;
      k = R;
      try {
        return K();
      } finally {
        k = U;
      }
    }, r.unstable_scheduleCallback = function(R, K, U) {
      var C = r.unstable_now();
      switch (typeof U == "object" && U !== null ? (U = U.delay, U = typeof U == "number" && 0 < U ? C + U : C) : U = C, R) {
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
      return O = U + O, R = { id: y++, callback: K, priorityLevel: R, startTime: U, expirationTime: O, sortIndex: -1 }, U > C ? (R.sortIndex = U, a(w, R), i(g) === null && R === i(w) && (E ? (P(B), B = -1) : E = !0, F(z, U - C))) : (R.sortIndex = O, a(g, R), b || j || (b = !0, Ee(W))), R;
    }, r.unstable_shouldYield = de, r.unstable_wrapCallback = function(R) {
      var K = k;
      return function() {
        var U = k;
        k = K;
        try {
          return R.apply(this, arguments);
        } finally {
          k = U;
        }
      };
    };
  })(ml)), ml;
}
var Xd;
function Am() {
  return Xd || (Xd = 1, hl.exports = Rm()), hl.exports;
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
function Pm() {
  if (Zd) return wt;
  Zd = 1;
  var r = Ll(), a = Am();
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
  function k(e) {
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
  function E(e, t, n, s, l, u, h) {
    this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = s, this.attributeNamespace = l, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = u, this.removeEmptyString = h;
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
  var P = /[\-:]([a-z])/g;
  function H(e) {
    return e[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
    var t = e.replace(
      P,
      H
    );
    N[t] = new E(t, 1, !1, e, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
    var t = e.replace(P, H);
    N[t] = new E(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
    var t = e.replace(P, H);
    N[t] = new E(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(e) {
    N[e] = new E(e, 1, !1, e.toLowerCase(), null, !1, !1);
  }), N.xlinkHref = new E("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(e) {
    N[e] = new E(e, 1, !1, e.toLowerCase(), null, !0, !0);
  });
  function $(e, t, n, s) {
    var l = N.hasOwnProperty(t) ? N[t] : null;
    (l !== null ? l.type !== 0 : s || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (b(t, n, l, s) && (n = null), s || l === null ? k(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : l.mustUseProperty ? e[l.propertyName] = n === null ? l.type === 3 ? !1 : "" : n : (t = l.attributeName, s = l.attributeNamespace, n === null ? e.removeAttribute(t) : (l = l.type, n = l === 3 || l === 4 && n === !0 ? "" : "" + n, s ? e.setAttributeNS(s, t, n) : e.setAttribute(t, n))));
  }
  var z = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, W = Symbol.for("react.element"), I = Symbol.for("react.portal"), J = Symbol.for("react.fragment"), B = Symbol.for("react.strict_mode"), G = Symbol.for("react.profiler"), ye = Symbol.for("react.provider"), de = Symbol.for("react.context"), ge = Symbol.for("react.forward_ref"), he = Symbol.for("react.suspense"), _e = Symbol.for("react.suspense_list"), te = Symbol.for("react.memo"), Ee = Symbol.for("react.lazy"), F = Symbol.for("react.offscreen"), R = Symbol.iterator;
  function K(e) {
    return e === null || typeof e != "object" ? null : (e = R && e[R] || e["@@iterator"], typeof e == "function" ? e : null);
  }
  var U = Object.assign, C;
  function O(e) {
    if (C === void 0) try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      C = t && t[1] || "";
    }
    return `
` + C + e;
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
      ae = !1, Error.prepareStackTrace = n;
    }
    return (e = e ? e.displayName || e.name : "") ? O(e) : "";
  }
  function we(e) {
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
        return e = me(e.type, !1), e;
      case 11:
        return e = me(e.type.render, !1), e;
      case 1:
        return e = me(e.type, !0), e;
      default:
        return "";
    }
  }
  function ke(e) {
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
      case B:
        return "StrictMode";
      case he:
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
        return t = e.displayName || null, t !== null ? t : ke(e.type) || "Memo";
      case Ee:
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
  function Gt(e, t) {
    var n = t.checked;
    return U({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n ?? e._wrapperState.initialChecked });
  }
  function Fs(e, t) {
    var n = t.defaultValue == null ? "" : t.defaultValue, s = t.checked != null ? t.checked : t.defaultChecked;
    n = Ce(t.value != null ? t.value : n), e._wrapperState = { initialChecked: s, initialValue: n, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
  }
  function tu(e, t) {
    t = t.checked, t != null && $(e, "checked", t, !1);
  }
  function _i(e, t) {
    tu(e, t);
    var n = Ce(t.value), s = t.type;
    if (n != null) s === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
    else if (s === "submit" || s === "reset") {
      e.removeAttribute("value");
      return;
    }
    t.hasOwnProperty("value") ? xi(e, t.type, n) : t.hasOwnProperty("defaultValue") && xi(e, t.type, Ce(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
  }
  function nu(e, t, n) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
      var s = t.type;
      if (!(s !== "submit" && s !== "reset" || t.value !== void 0 && t.value !== null)) return;
      t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t;
    }
    n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n);
  }
  function xi(e, t, n) {
    (t !== "number" || Ae(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
  }
  var Vr = Array.isArray;
  function cr(e, t, n, s) {
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
  function wi(e, t) {
    if (t.dangerouslySetInnerHTML != null) throw Error(i(91));
    return U({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
  }
  function ru(e, t) {
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
  function ki(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml" ? iu(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
  }
  var Ws, au = (function(e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, s, l) {
      MSApp.execUnsafeLocalFunction(function() {
        return e(t, n, s, l);
      });
    } : e;
  })(function(e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
    else {
      for (Ws = Ws || document.createElement("div"), Ws.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = Ws.firstChild; e.firstChild; ) e.removeChild(e.firstChild);
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
  }, bp = ["Webkit", "ms", "Moz", "O"];
  Object.keys(Qr).forEach(function(e) {
    bp.forEach(function(t) {
      t = t + e.charAt(0).toUpperCase() + e.substring(1), Qr[t] = Qr[e];
    });
  });
  function lu(e, t, n) {
    return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || Qr.hasOwnProperty(e) && Qr[e] ? ("" + t).trim() : t + "px";
  }
  function uu(e, t) {
    e = e.style;
    for (var n in t) if (t.hasOwnProperty(n)) {
      var s = n.indexOf("--") === 0, l = lu(n, t[n], s);
      n === "float" && (n = "cssFloat"), s ? e.setProperty(n, l) : e[n] = l;
    }
  }
  var Rp = U({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
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
  function Ci(e, t) {
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
  var ji = null;
  function Ei(e) {
    return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
  }
  var Ni = null, dr = null, fr = null;
  function cu(e) {
    if (e = ms(e)) {
      if (typeof Ni != "function") throw Error(i(280));
      var t = e.stateNode;
      t && (t = fo(t), Ni(e.stateNode, e.type, t));
    }
  }
  function du(e) {
    dr ? fr ? fr.push(e) : fr = [e] : dr = e;
  }
  function fu() {
    if (dr) {
      var e = dr, t = fr;
      if (fr = dr = null, cu(e), t) for (e = 0; e < t.length; e++) cu(t[e]);
    }
  }
  function pu(e, t) {
    return e(t);
  }
  function hu() {
  }
  var Ti = !1;
  function mu(e, t, n) {
    if (Ti) return e(t, n);
    Ti = !0;
    try {
      return pu(e, t, n);
    } finally {
      Ti = !1, (dr !== null || fr !== null) && (hu(), fu());
    }
  }
  function Kr(e, t) {
    var n = e.stateNode;
    if (n === null) return null;
    var s = fo(n);
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
  var bi = !1;
  if (m) try {
    var Yr = {};
    Object.defineProperty(Yr, "passive", { get: function() {
      bi = !0;
    } }), window.addEventListener("test", Yr, Yr), window.removeEventListener("test", Yr, Yr);
  } catch {
    bi = !1;
  }
  function Ap(e, t, n, s, l, u, h, S, T) {
    var D = Array.prototype.slice.call(arguments, 3);
    try {
      t.apply(n, D);
    } catch (q) {
      this.onError(q);
    }
  }
  var Gr = !1, Bs = null, Us = !1, Ri = null, Pp = { onError: function(e) {
    Gr = !0, Bs = e;
  } };
  function $p(e, t, n, s, l, u, h, S, T) {
    Gr = !1, Bs = null, Ap.apply(Pp, arguments);
  }
  function Mp(e, t, n, s, l, u, h, S, T) {
    if ($p.apply(this, arguments), Gr) {
      if (Gr) {
        var D = Bs;
        Gr = !1, Bs = null;
      } else throw Error(i(198));
      Us || (Us = !0, Ri = D);
    }
  }
  function zn(e) {
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
    if (zn(e) !== e) throw Error(i(188));
  }
  function Ip(e) {
    var t = e.alternate;
    if (!t) {
      if (t = zn(e), t === null) throw Error(i(188));
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
        throw Error(i(188));
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
          if (!h) throw Error(i(189));
        }
      }
      if (n.alternate !== s) throw Error(i(190));
    }
    if (n.tag !== 3) throw Error(i(188));
    return n.stateNode.current === n ? e : t;
  }
  function gu(e) {
    return e = Ip(e), e !== null ? _u(e) : null;
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
  var xu = a.unstable_scheduleCallback, wu = a.unstable_cancelCallback, Lp = a.unstable_shouldYield, Dp = a.unstable_requestPaint, Be = a.unstable_now, Op = a.unstable_getCurrentPriorityLevel, Ai = a.unstable_ImmediatePriority, ku = a.unstable_UserBlockingPriority, Vs = a.unstable_NormalPriority, zp = a.unstable_LowPriority, Su = a.unstable_IdlePriority, qs = null, Jt = null;
  function Hp(e) {
    if (Jt && typeof Jt.onCommitFiberRoot == "function") try {
      Jt.onCommitFiberRoot(qs, e, void 0, (e.current.flags & 128) === 128);
    } catch {
    }
  }
  var Ot = Math.clz32 ? Math.clz32 : Bp, Fp = Math.log, Wp = Math.LN2;
  function Bp(e) {
    return e >>>= 0, e === 0 ? 32 : 31 - (Fp(e) / Wp | 0) | 0;
  }
  var Qs = 64, Ks = 4194304;
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
  function Ys(e, t) {
    var n = e.pendingLanes;
    if (n === 0) return 0;
    var s = 0, l = e.suspendedLanes, u = e.pingedLanes, h = n & 268435455;
    if (h !== 0) {
      var S = h & ~l;
      S !== 0 ? s = Jr(S) : (u &= h, u !== 0 && (s = Jr(u)));
    } else h = n & ~l, h !== 0 ? s = Jr(h) : u !== 0 && (s = Jr(u));
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
      var h = 31 - Ot(u), S = 1 << h, T = l[h];
      T === -1 ? ((S & n) === 0 || (S & s) !== 0) && (l[h] = Up(S, t)) : T <= t && (e.expiredLanes |= S), u &= ~S;
    }
  }
  function Pi(e) {
    return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
  }
  function Cu() {
    var e = Qs;
    return Qs <<= 1, (Qs & 4194240) === 0 && (Qs = 64), e;
  }
  function $i(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t;
  }
  function Xr(e, t, n) {
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
  function Mi(e, t) {
    var n = e.entangledLanes |= t;
    for (e = e.entanglements; n; ) {
      var s = 31 - Ot(n), l = 1 << s;
      l & t | e[s] & t && (e[s] |= t), n &= ~l;
    }
  }
  var Pe = 0;
  function ju(e) {
    return e &= -e, 1 < e ? 4 < e ? (e & 268435455) !== 0 ? 16 : 536870912 : 4 : 1;
  }
  var Eu, Ii, Nu, Tu, bu, Li = !1, Gs = [], yn = null, gn = null, _n = null, Zr = /* @__PURE__ */ new Map(), es = /* @__PURE__ */ new Map(), xn = [], Qp = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
  function Ru(e, t) {
    switch (e) {
      case "focusin":
      case "focusout":
        yn = null;
        break;
      case "dragenter":
      case "dragleave":
        gn = null;
        break;
      case "mouseover":
      case "mouseout":
        _n = null;
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
    return e === null || e.nativeEvent !== u ? (e = { blockedOn: t, domEventName: n, eventSystemFlags: s, nativeEvent: u, targetContainers: [l] }, t !== null && (t = ms(t), t !== null && Ii(t)), e) : (e.eventSystemFlags |= s, t = e.targetContainers, l !== null && t.indexOf(l) === -1 && t.push(l), e);
  }
  function Kp(e, t, n, s, l) {
    switch (t) {
      case "focusin":
        return yn = ts(yn, e, t, n, s, l), !0;
      case "dragenter":
        return gn = ts(gn, e, t, n, s, l), !0;
      case "mouseover":
        return _n = ts(_n, e, t, n, s, l), !0;
      case "pointerover":
        var u = l.pointerId;
        return Zr.set(u, ts(Zr.get(u) || null, e, t, n, s, l)), !0;
      case "gotpointercapture":
        return u = l.pointerId, es.set(u, ts(es.get(u) || null, e, t, n, s, l)), !0;
    }
    return !1;
  }
  function Au(e) {
    var t = Hn(e.target);
    if (t !== null) {
      var n = zn(t);
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
  function Js(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var n = Oi(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
      if (n === null) {
        n = e.nativeEvent;
        var s = new n.constructor(n.type, n);
        ji = s, n.target.dispatchEvent(s), ji = null;
      } else return t = ms(n), t !== null && Ii(t), e.blockedOn = n, !1;
      t.shift();
    }
    return !0;
  }
  function Pu(e, t, n) {
    Js(e) && n.delete(t);
  }
  function Yp() {
    Li = !1, yn !== null && Js(yn) && (yn = null), gn !== null && Js(gn) && (gn = null), _n !== null && Js(_n) && (_n = null), Zr.forEach(Pu), es.forEach(Pu);
  }
  function ns(e, t) {
    e.blockedOn === t && (e.blockedOn = null, Li || (Li = !0, a.unstable_scheduleCallback(a.unstable_NormalPriority, Yp)));
  }
  function rs(e) {
    function t(l) {
      return ns(l, e);
    }
    if (0 < Gs.length) {
      ns(Gs[0], e);
      for (var n = 1; n < Gs.length; n++) {
        var s = Gs[n];
        s.blockedOn === e && (s.blockedOn = null);
      }
    }
    for (yn !== null && ns(yn, e), gn !== null && ns(gn, e), _n !== null && ns(_n, e), Zr.forEach(t), es.forEach(t), n = 0; n < xn.length; n++) s = xn[n], s.blockedOn === e && (s.blockedOn = null);
    for (; 0 < xn.length && (n = xn[0], n.blockedOn === null); ) Au(n), n.blockedOn === null && xn.shift();
  }
  var pr = z.ReactCurrentBatchConfig, Xs = !0;
  function Gp(e, t, n, s) {
    var l = Pe, u = pr.transition;
    pr.transition = null;
    try {
      Pe = 1, Di(e, t, n, s);
    } finally {
      Pe = l, pr.transition = u;
    }
  }
  function Jp(e, t, n, s) {
    var l = Pe, u = pr.transition;
    pr.transition = null;
    try {
      Pe = 4, Di(e, t, n, s);
    } finally {
      Pe = l, pr.transition = u;
    }
  }
  function Di(e, t, n, s) {
    if (Xs) {
      var l = Oi(e, t, n, s);
      if (l === null) ta(e, t, s, Zs, n), Ru(e, s);
      else if (Kp(l, e, t, n, s)) s.stopPropagation();
      else if (Ru(e, s), t & 4 && -1 < Qp.indexOf(e)) {
        for (; l !== null; ) {
          var u = ms(l);
          if (u !== null && Eu(u), u = Oi(e, t, n, s), u === null && ta(e, t, s, Zs, n), u === l) break;
          l = u;
        }
        l !== null && s.stopPropagation();
      } else ta(e, t, s, null, n);
    }
  }
  var Zs = null;
  function Oi(e, t, n, s) {
    if (Zs = null, e = Ei(s), e = Hn(e), e !== null) if (t = zn(e), t === null) e = null;
    else if (n = t.tag, n === 13) {
      if (e = vu(t), e !== null) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
    return Zs = e, null;
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
        switch (Op()) {
          case Ai:
            return 1;
          case ku:
            return 4;
          case Vs:
          case zp:
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
  var wn = null, zi = null, eo = null;
  function Mu() {
    if (eo) return eo;
    var e, t = zi, n = t.length, s, l = "value" in wn ? wn.value : wn.textContent, u = l.length;
    for (e = 0; e < n && t[e] === l[e]; e++) ;
    var h = n - e;
    for (s = 1; s <= h && t[n - s] === l[u - s]; s++) ;
    return eo = l.slice(e, 1 < s ? 1 - s : void 0);
  }
  function to(e) {
    var t = e.keyCode;
    return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
  }
  function no() {
    return !0;
  }
  function Iu() {
    return !1;
  }
  function Ct(e) {
    function t(n, s, l, u, h) {
      this._reactName = n, this._targetInst = l, this.type = s, this.nativeEvent = u, this.target = h, this.currentTarget = null;
      for (var S in e) e.hasOwnProperty(S) && (n = e[S], this[S] = n ? n(u) : u[S]);
      return this.isDefaultPrevented = (u.defaultPrevented != null ? u.defaultPrevented : u.returnValue === !1) ? no : Iu, this.isPropagationStopped = Iu, this;
    }
    return U(t.prototype, { preventDefault: function() {
      this.defaultPrevented = !0;
      var n = this.nativeEvent;
      n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = no);
    }, stopPropagation: function() {
      var n = this.nativeEvent;
      n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = no);
    }, persist: function() {
    }, isPersistent: no }), t;
  }
  var hr = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
    return e.timeStamp || Date.now();
  }, defaultPrevented: 0, isTrusted: 0 }, Hi = Ct(hr), ss = U({}, hr, { view: 0, detail: 0 }), Xp = Ct(ss), Fi, Wi, os, ro = U({}, ss, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: Ui, button: 0, buttons: 0, relatedTarget: function(e) {
    return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
  }, movementX: function(e) {
    return "movementX" in e ? e.movementX : (e !== os && (os && e.type === "mousemove" ? (Fi = e.screenX - os.screenX, Wi = e.screenY - os.screenY) : Wi = Fi = 0, os = e), Fi);
  }, movementY: function(e) {
    return "movementY" in e ? e.movementY : Wi;
  } }), Lu = Ct(ro), Zp = U({}, ro, { dataTransfer: 0 }), eh = Ct(Zp), th = U({}, ss, { relatedTarget: 0 }), Bi = Ct(th), nh = U({}, hr, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), rh = Ct(nh), sh = U({}, hr, { clipboardData: function(e) {
    return "clipboardData" in e ? e.clipboardData : window.clipboardData;
  } }), oh = Ct(sh), ih = U({}, hr, { data: 0 }), Du = Ct(ih), ah = {
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
  function Ui() {
    return ch;
  }
  var dh = U({}, ss, { key: function(e) {
    if (e.key) {
      var t = ah[e.key] || e.key;
      if (t !== "Unidentified") return t;
    }
    return e.type === "keypress" ? (e = to(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? lh[e.keyCode] || "Unidentified" : "";
  }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: Ui, charCode: function(e) {
    return e.type === "keypress" ? to(e) : 0;
  }, keyCode: function(e) {
    return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
  }, which: function(e) {
    return e.type === "keypress" ? to(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
  } }), fh = Ct(dh), ph = U({}, ro, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), Ou = Ct(ph), hh = U({}, ss, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: Ui }), mh = Ct(hh), vh = U({}, hr, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), yh = Ct(vh), gh = U({}, ro, {
    deltaX: function(e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function(e) {
      return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), _h = Ct(gh), xh = [9, 13, 27, 32], Vi = m && "CompositionEvent" in window, is = null;
  m && "documentMode" in document && (is = document.documentMode);
  var wh = m && "TextEvent" in window && !is, zu = m && (!Vi || is && 8 < is && 11 >= is), Hu = " ", Fu = !1;
  function Wu(e, t) {
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
  function Bu(e) {
    return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
  }
  var mr = !1;
  function kh(e, t) {
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
  function Sh(e, t) {
    if (mr) return e === "compositionend" || !Vi && Wu(e, t) ? (e = Mu(), eo = zi = wn = null, mr = !1, e) : null;
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
  var Ch = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
  function Uu(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!Ch[e.type] : t === "textarea";
  }
  function Vu(e, t, n, s) {
    du(s), t = lo(t, "onChange"), 0 < t.length && (n = new Hi("onChange", "change", null, n, s), e.push({ event: n, listeners: t }));
  }
  var as = null, ls = null;
  function jh(e) {
    uc(e, 0);
  }
  function so(e) {
    var t = xr(e);
    if (De(t)) return e;
  }
  function Eh(e, t) {
    if (e === "change") return t;
  }
  var qu = !1;
  if (m) {
    var qi;
    if (m) {
      var Qi = "oninput" in document;
      if (!Qi) {
        var Qu = document.createElement("div");
        Qu.setAttribute("oninput", "return;"), Qi = typeof Qu.oninput == "function";
      }
      qi = Qi;
    } else qi = !1;
    qu = qi && (!document.documentMode || 9 < document.documentMode);
  }
  function Ku() {
    as && (as.detachEvent("onpropertychange", Yu), ls = as = null);
  }
  function Yu(e) {
    if (e.propertyName === "value" && so(ls)) {
      var t = [];
      Vu(t, ls, e, Ei(e)), mu(jh, t);
    }
  }
  function Nh(e, t, n) {
    e === "focusin" ? (Ku(), as = t, ls = n, as.attachEvent("onpropertychange", Yu)) : e === "focusout" && Ku();
  }
  function Th(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown") return so(ls);
  }
  function bh(e, t) {
    if (e === "click") return so(t);
  }
  function Rh(e, t) {
    if (e === "input" || e === "change") return so(t);
  }
  function Ah(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
  }
  var zt = typeof Object.is == "function" ? Object.is : Ah;
  function us(e, t) {
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
  function Ki(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
  }
  function Ph(e) {
    var t = Zu(), n = e.focusedElem, s = e.selectionRange;
    if (t !== n && n && n.ownerDocument && Xu(n.ownerDocument.documentElement, n)) {
      if (s !== null && Ki(n)) {
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
  var $h = m && "documentMode" in document && 11 >= document.documentMode, vr = null, Yi = null, cs = null, Gi = !1;
  function ec(e, t, n) {
    var s = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    Gi || vr == null || vr !== Ae(s) || (s = vr, "selectionStart" in s && Ki(s) ? s = { start: s.selectionStart, end: s.selectionEnd } : (s = (s.ownerDocument && s.ownerDocument.defaultView || window).getSelection(), s = { anchorNode: s.anchorNode, anchorOffset: s.anchorOffset, focusNode: s.focusNode, focusOffset: s.focusOffset }), cs && us(cs, s) || (cs = s, s = lo(Yi, "onSelect"), 0 < s.length && (t = new Hi("onSelect", "select", null, t, n), e.push({ event: t, listeners: s }), t.target = vr)));
  }
  function oo(e, t) {
    var n = {};
    return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
  }
  var yr = { animationend: oo("Animation", "AnimationEnd"), animationiteration: oo("Animation", "AnimationIteration"), animationstart: oo("Animation", "AnimationStart"), transitionend: oo("Transition", "TransitionEnd") }, Ji = {}, tc = {};
  m && (tc = document.createElement("div").style, "AnimationEvent" in window || (delete yr.animationend.animation, delete yr.animationiteration.animation, delete yr.animationstart.animation), "TransitionEvent" in window || delete yr.transitionend.transition);
  function io(e) {
    if (Ji[e]) return Ji[e];
    if (!yr[e]) return e;
    var t = yr[e], n;
    for (n in t) if (t.hasOwnProperty(n) && n in tc) return Ji[e] = t[n];
    return e;
  }
  var nc = io("animationend"), rc = io("animationiteration"), sc = io("animationstart"), oc = io("transitionend"), ic = /* @__PURE__ */ new Map(), ac = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  function kn(e, t) {
    ic.set(e, t), f(t, [e]);
  }
  for (var Xi = 0; Xi < ac.length; Xi++) {
    var Zi = ac[Xi], Mh = Zi.toLowerCase(), Ih = Zi[0].toUpperCase() + Zi.slice(1);
    kn(Mh, "on" + Ih);
  }
  kn(nc, "onAnimationEnd"), kn(rc, "onAnimationIteration"), kn(sc, "onAnimationStart"), kn("dblclick", "onDoubleClick"), kn("focusin", "onFocus"), kn("focusout", "onBlur"), kn(oc, "onTransitionEnd"), p("onMouseEnter", ["mouseout", "mouseover"]), p("onMouseLeave", ["mouseout", "mouseover"]), p("onPointerEnter", ["pointerout", "pointerover"]), p("onPointerLeave", ["pointerout", "pointerover"]), f("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), f("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), f("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), f("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), f("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), f("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var ds = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), Lh = new Set("cancel close invalid load scroll toggle".split(" ").concat(ds));
  function lc(e, t, n) {
    var s = e.type || "unknown-event";
    e.currentTarget = n, Mp(s, t, void 0, e), e.currentTarget = null;
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
    if (Us) throw e = Ri, Us = !1, Ri = null, e;
  }
  function Ie(e, t) {
    var n = t[aa];
    n === void 0 && (n = t[aa] = /* @__PURE__ */ new Set());
    var s = e + "__bubble";
    n.has(s) || (cc(t, e, 2, !1), n.add(s));
  }
  function ea(e, t, n) {
    var s = 0;
    t && (s |= 4), cc(n, e, s, t);
  }
  var ao = "_reactListening" + Math.random().toString(36).slice(2);
  function fs(e) {
    if (!e[ao]) {
      e[ao] = !0, c.forEach(function(n) {
        n !== "selectionchange" && (Lh.has(n) || ea(n, !1, e), ea(n, !0, e));
      });
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[ao] || (t[ao] = !0, ea("selectionchange", !1, t));
    }
  }
  function cc(e, t, n, s) {
    switch ($u(t)) {
      case 1:
        var l = Gp;
        break;
      case 4:
        l = Jp;
        break;
      default:
        l = Di;
    }
    n = l.bind(null, t, n, e), l = void 0, !bi || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (l = !0), s ? l !== void 0 ? e.addEventListener(t, n, { capture: !0, passive: l }) : e.addEventListener(t, n, !0) : l !== void 0 ? e.addEventListener(t, n, { passive: l }) : e.addEventListener(t, n, !1);
  }
  function ta(e, t, n, s, l) {
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
          if (h = Hn(S), h === null) return;
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
      var D = u, q = Ei(n), Q = [];
      e: {
        var V = ic.get(e);
        if (V !== void 0) {
          var ee = Hi, re = e;
          switch (e) {
            case "keypress":
              if (to(n) === 0) break e;
            case "keydown":
            case "keyup":
              ee = fh;
              break;
            case "focusin":
              re = "focus", ee = Bi;
              break;
            case "focusout":
              re = "blur", ee = Bi;
              break;
            case "beforeblur":
            case "afterblur":
              ee = Bi;
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
              ee = eh;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              ee = mh;
              break;
            case nc:
            case rc:
            case sc:
              ee = rh;
              break;
            case oc:
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
              ee = Ou;
          }
          var se = (t & 4) !== 0, Ue = !se && e === "scroll", M = se ? V !== null ? V + "Capture" : null : V;
          se = [];
          for (var A = D, L; A !== null; ) {
            L = A;
            var Y = L.stateNode;
            if (L.tag === 5 && Y !== null && (L = Y, M !== null && (Y = Kr(A, M), Y != null && se.push(ps(A, Y, L)))), Ue) break;
            A = A.return;
          }
          0 < se.length && (V = new ee(V, re, null, n, q), Q.push({ event: V, listeners: se }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (V = e === "mouseover" || e === "pointerover", ee = e === "mouseout" || e === "pointerout", V && n !== ji && (re = n.relatedTarget || n.fromElement) && (Hn(re) || re[on])) break e;
          if ((ee || V) && (V = q.window === q ? q : (V = q.ownerDocument) ? V.defaultView || V.parentWindow : window, ee ? (re = n.relatedTarget || n.toElement, ee = D, re = re ? Hn(re) : null, re !== null && (Ue = zn(re), re !== Ue || re.tag !== 5 && re.tag !== 6) && (re = null)) : (ee = null, re = D), ee !== re)) {
            if (se = Lu, Y = "onMouseLeave", M = "onMouseEnter", A = "mouse", (e === "pointerout" || e === "pointerover") && (se = Ou, Y = "onPointerLeave", M = "onPointerEnter", A = "pointer"), Ue = ee == null ? V : xr(ee), L = re == null ? V : xr(re), V = new se(Y, A + "leave", ee, n, q), V.target = Ue, V.relatedTarget = L, Y = null, Hn(q) === D && (se = new se(M, A + "enter", re, n, q), se.target = L, se.relatedTarget = Ue, Y = se), Ue = Y, ee && re) t: {
              for (se = ee, M = re, A = 0, L = se; L; L = gr(L)) A++;
              for (L = 0, Y = M; Y; Y = gr(Y)) L++;
              for (; 0 < A - L; ) se = gr(se), A--;
              for (; 0 < L - A; ) M = gr(M), L--;
              for (; A--; ) {
                if (se === M || M !== null && se === M.alternate) break t;
                se = gr(se), M = gr(M);
              }
              se = null;
            }
            else se = null;
            ee !== null && dc(Q, V, ee, se, !1), re !== null && Ue !== null && dc(Q, Ue, re, se, !0);
          }
        }
        e: {
          if (V = D ? xr(D) : window, ee = V.nodeName && V.nodeName.toLowerCase(), ee === "select" || ee === "input" && V.type === "file") var ie = Eh;
          else if (Uu(V)) if (qu) ie = Rh;
          else {
            ie = Th;
            var le = Nh;
          }
          else (ee = V.nodeName) && ee.toLowerCase() === "input" && (V.type === "checkbox" || V.type === "radio") && (ie = bh);
          if (ie && (ie = ie(e, D))) {
            Vu(Q, ie, n, q);
            break e;
          }
          le && le(e, V, D), e === "focusout" && (le = V._wrapperState) && le.controlled && V.type === "number" && xi(V, "number", V.value);
        }
        switch (le = D ? xr(D) : window, e) {
          case "focusin":
            (Uu(le) || le.contentEditable === "true") && (vr = le, Yi = D, cs = null);
            break;
          case "focusout":
            cs = Yi = vr = null;
            break;
          case "mousedown":
            Gi = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            Gi = !1, ec(Q, n, q);
            break;
          case "selectionchange":
            if ($h) break;
          case "keydown":
          case "keyup":
            ec(Q, n, q);
        }
        var ue;
        if (Vi) e: {
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
        else mr ? Wu(e, n) && (pe = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (pe = "onCompositionStart");
        pe && (zu && n.locale !== "ko" && (mr || pe !== "onCompositionStart" ? pe === "onCompositionEnd" && mr && (ue = Mu()) : (wn = q, zi = "value" in wn ? wn.value : wn.textContent, mr = !0)), le = lo(D, pe), 0 < le.length && (pe = new Du(pe, e, null, n, q), Q.push({ event: pe, listeners: le }), ue ? pe.data = ue : (ue = Bu(n), ue !== null && (pe.data = ue)))), (ue = wh ? kh(e, n) : Sh(e, n)) && (D = lo(D, "onBeforeInput"), 0 < D.length && (q = new Du("onBeforeInput", "beforeinput", null, n, q), Q.push({ event: q, listeners: D }), q.data = ue));
      }
      uc(Q, t);
    });
  }
  function ps(e, t, n) {
    return { instance: e, listener: t, currentTarget: n };
  }
  function lo(e, t) {
    for (var n = t + "Capture", s = []; e !== null; ) {
      var l = e, u = l.stateNode;
      l.tag === 5 && u !== null && (l = u, u = Kr(e, n), u != null && s.unshift(ps(e, u, l)), u = Kr(e, t), u != null && s.push(ps(e, u, l))), e = e.return;
    }
    return s;
  }
  function gr(e) {
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
      S.tag === 5 && D !== null && (S = D, l ? (T = Kr(n, u), T != null && h.unshift(ps(n, T, S))) : l || (T = Kr(n, u), T != null && h.push(ps(n, T, S)))), n = n.return;
    }
    h.length !== 0 && e.push({ event: t, listeners: h });
  }
  var Dh = /\r\n?/g, Oh = /\u0000|\uFFFD/g;
  function fc(e) {
    return (typeof e == "string" ? e : "" + e).replace(Dh, `
`).replace(Oh, "");
  }
  function uo(e, t, n) {
    if (t = fc(t), fc(e) !== t && n) throw Error(i(425));
  }
  function co() {
  }
  var na = null, ra = null;
  function sa(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
  }
  var oa = typeof setTimeout == "function" ? setTimeout : void 0, zh = typeof clearTimeout == "function" ? clearTimeout : void 0, pc = typeof Promise == "function" ? Promise : void 0, Hh = typeof queueMicrotask == "function" ? queueMicrotask : typeof pc < "u" ? function(e) {
    return pc.resolve(null).then(e).catch(Fh);
  } : oa;
  function Fh(e) {
    setTimeout(function() {
      throw e;
    });
  }
  function ia(e, t) {
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
  var _r = Math.random().toString(36).slice(2), Xt = "__reactFiber$" + _r, hs = "__reactProps$" + _r, on = "__reactContainer$" + _r, aa = "__reactEvents$" + _r, Wh = "__reactListeners$" + _r, Bh = "__reactHandles$" + _r;
  function Hn(e) {
    var t = e[Xt];
    if (t) return t;
    for (var n = e.parentNode; n; ) {
      if (t = n[on] || n[Xt]) {
        if (n = t.alternate, t.child !== null || n !== null && n.child !== null) for (e = hc(e); e !== null; ) {
          if (n = e[Xt]) return n;
          e = hc(e);
        }
        return t;
      }
      e = n, n = e.parentNode;
    }
    return null;
  }
  function ms(e) {
    return e = e[Xt] || e[on], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
  }
  function xr(e) {
    if (e.tag === 5 || e.tag === 6) return e.stateNode;
    throw Error(i(33));
  }
  function fo(e) {
    return e[hs] || null;
  }
  var la = [], wr = -1;
  function Cn(e) {
    return { current: e };
  }
  function Le(e) {
    0 > wr || (e.current = la[wr], la[wr] = null, wr--);
  }
  function Me(e, t) {
    wr++, la[wr] = e.current, e.current = t;
  }
  var jn = {}, ot = Cn(jn), vt = Cn(!1), Fn = jn;
  function kr(e, t) {
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
  function po() {
    Le(vt), Le(ot);
  }
  function mc(e, t, n) {
    if (ot.current !== jn) throw Error(i(168));
    Me(ot, t), Me(vt, n);
  }
  function vc(e, t, n) {
    var s = e.stateNode;
    if (t = t.childContextTypes, typeof s.getChildContext != "function") return n;
    s = s.getChildContext();
    for (var l in s) if (!(l in t)) throw Error(i(108, Ne(e) || "Unknown", l));
    return U({}, n, s);
  }
  function ho(e) {
    return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || jn, Fn = ot.current, Me(ot, e), Me(vt, vt.current), !0;
  }
  function yc(e, t, n) {
    var s = e.stateNode;
    if (!s) throw Error(i(169));
    n ? (e = vc(e, t, Fn), s.__reactInternalMemoizedMergedChildContext = e, Le(vt), Le(ot), Me(ot, e)) : Le(vt), Me(vt, n);
  }
  var an = null, mo = !1, ua = !1;
  function gc(e) {
    an === null ? an = [e] : an.push(e);
  }
  function Uh(e) {
    mo = !0, gc(e);
  }
  function En() {
    if (!ua && an !== null) {
      ua = !0;
      var e = 0, t = Pe;
      try {
        var n = an;
        for (Pe = 1; e < n.length; e++) {
          var s = n[e];
          do
            s = s(!0);
          while (s !== null);
        }
        an = null, mo = !1;
      } catch (l) {
        throw an !== null && (an = an.slice(e + 1)), xu(Ai, En), l;
      } finally {
        Pe = t, ua = !1;
      }
    }
    return null;
  }
  var Sr = [], Cr = 0, vo = null, yo = 0, Rt = [], At = 0, Wn = null, ln = 1, un = "";
  function Bn(e, t) {
    Sr[Cr++] = yo, Sr[Cr++] = vo, vo = e, yo = t;
  }
  function _c(e, t, n) {
    Rt[At++] = ln, Rt[At++] = un, Rt[At++] = Wn, Wn = e;
    var s = ln;
    e = un;
    var l = 32 - Ot(s) - 1;
    s &= ~(1 << l), n += 1;
    var u = 32 - Ot(t) + l;
    if (30 < u) {
      var h = l - l % 5;
      u = (s & (1 << h) - 1).toString(32), s >>= h, l -= h, ln = 1 << 32 - Ot(t) + l | n << l | s, un = u + e;
    } else ln = 1 << u | n << l | s, un = e;
  }
  function ca(e) {
    e.return !== null && (Bn(e, 1), _c(e, 1, 0));
  }
  function da(e) {
    for (; e === vo; ) vo = Sr[--Cr], Sr[Cr] = null, yo = Sr[--Cr], Sr[Cr] = null;
    for (; e === Wn; ) Wn = Rt[--At], Rt[At] = null, un = Rt[--At], Rt[At] = null, ln = Rt[--At], Rt[At] = null;
  }
  var jt = null, Et = null, Oe = !1, Ht = null;
  function xc(e, t) {
    var n = It(5, null, null, 0);
    n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n);
  }
  function wc(e, t) {
    switch (e.tag) {
      case 5:
        var n = e.type;
        return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, jt = e, Et = Sn(t.firstChild), !0) : !1;
      case 6:
        return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, jt = e, Et = null, !0) : !1;
      case 13:
        return t = t.nodeType !== 8 ? null : t, t !== null ? (n = Wn !== null ? { id: ln, overflow: un } : null, e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }, n = It(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, jt = e, Et = null, !0) : !1;
      default:
        return !1;
    }
  }
  function fa(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
  }
  function pa(e) {
    if (Oe) {
      var t = Et;
      if (t) {
        var n = t;
        if (!wc(e, t)) {
          if (fa(e)) throw Error(i(418));
          t = Sn(n.nextSibling);
          var s = jt;
          t && wc(e, t) ? xc(s, n) : (e.flags = e.flags & -4097 | 2, Oe = !1, jt = e);
        }
      } else {
        if (fa(e)) throw Error(i(418));
        e.flags = e.flags & -4097 | 2, Oe = !1, jt = e;
      }
    }
  }
  function kc(e) {
    for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
    jt = e;
  }
  function go(e) {
    if (e !== jt) return !1;
    if (!Oe) return kc(e), Oe = !0, !1;
    var t;
    if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !sa(e.type, e.memoizedProps)), t && (t = Et)) {
      if (fa(e)) throw Sc(), Error(i(418));
      for (; t; ) xc(e, t), t = Sn(t.nextSibling);
    }
    if (kc(e), e.tag === 13) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(i(317));
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
    } else Et = jt ? Sn(e.stateNode.nextSibling) : null;
    return !0;
  }
  function Sc() {
    for (var e = Et; e; ) e = Sn(e.nextSibling);
  }
  function jr() {
    Et = jt = null, Oe = !1;
  }
  function ha(e) {
    Ht === null ? Ht = [e] : Ht.push(e);
  }
  var Vh = z.ReactCurrentBatchConfig;
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
          var S = l.refs;
          h === null ? delete S[u] : S[u] = h;
        }, t._stringRef = u, t);
      }
      if (typeof e != "string") throw Error(i(284));
      if (!n._owner) throw Error(i(290, e));
    }
    return e;
  }
  function _o(e, t) {
    throw e = Object.prototype.toString.call(t), Error(i(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e));
  }
  function Cc(e) {
    var t = e._init;
    return t(e._payload);
  }
  function jc(e) {
    function t(M, A) {
      if (e) {
        var L = M.deletions;
        L === null ? (M.deletions = [A], M.flags |= 16) : L.push(A);
      }
    }
    function n(M, A) {
      if (!e) return null;
      for (; A !== null; ) t(M, A), A = A.sibling;
      return null;
    }
    function s(M, A) {
      for (M = /* @__PURE__ */ new Map(); A !== null; ) A.key !== null ? M.set(A.key, A) : M.set(A.index, A), A = A.sibling;
      return M;
    }
    function l(M, A) {
      return M = Mn(M, A), M.index = 0, M.sibling = null, M;
    }
    function u(M, A, L) {
      return M.index = L, e ? (L = M.alternate, L !== null ? (L = L.index, L < A ? (M.flags |= 2, A) : L) : (M.flags |= 2, A)) : (M.flags |= 1048576, A);
    }
    function h(M) {
      return e && M.alternate === null && (M.flags |= 2), M;
    }
    function S(M, A, L, Y) {
      return A === null || A.tag !== 6 ? (A = ol(L, M.mode, Y), A.return = M, A) : (A = l(A, L), A.return = M, A);
    }
    function T(M, A, L, Y) {
      var ie = L.type;
      return ie === J ? q(M, A, L.props.children, Y, L.key) : A !== null && (A.elementType === ie || typeof ie == "object" && ie !== null && ie.$$typeof === Ee && Cc(ie) === A.type) ? (Y = l(A, L.props), Y.ref = vs(M, A, L), Y.return = M, Y) : (Y = Bo(L.type, L.key, L.props, null, M.mode, Y), Y.ref = vs(M, A, L), Y.return = M, Y);
    }
    function D(M, A, L, Y) {
      return A === null || A.tag !== 4 || A.stateNode.containerInfo !== L.containerInfo || A.stateNode.implementation !== L.implementation ? (A = il(L, M.mode, Y), A.return = M, A) : (A = l(A, L.children || []), A.return = M, A);
    }
    function q(M, A, L, Y, ie) {
      return A === null || A.tag !== 7 ? (A = Jn(L, M.mode, Y, ie), A.return = M, A) : (A = l(A, L), A.return = M, A);
    }
    function Q(M, A, L) {
      if (typeof A == "string" && A !== "" || typeof A == "number") return A = ol("" + A, M.mode, L), A.return = M, A;
      if (typeof A == "object" && A !== null) {
        switch (A.$$typeof) {
          case W:
            return L = Bo(A.type, A.key, A.props, null, M.mode, L), L.ref = vs(M, null, A), L.return = M, L;
          case I:
            return A = il(A, M.mode, L), A.return = M, A;
          case Ee:
            var Y = A._init;
            return Q(M, Y(A._payload), L);
        }
        if (Vr(A) || K(A)) return A = Jn(A, M.mode, L, null), A.return = M, A;
        _o(M, A);
      }
      return null;
    }
    function V(M, A, L, Y) {
      var ie = A !== null ? A.key : null;
      if (typeof L == "string" && L !== "" || typeof L == "number") return ie !== null ? null : S(M, A, "" + L, Y);
      if (typeof L == "object" && L !== null) {
        switch (L.$$typeof) {
          case W:
            return L.key === ie ? T(M, A, L, Y) : null;
          case I:
            return L.key === ie ? D(M, A, L, Y) : null;
          case Ee:
            return ie = L._init, V(
              M,
              A,
              ie(L._payload),
              Y
            );
        }
        if (Vr(L) || K(L)) return ie !== null ? null : q(M, A, L, Y, null);
        _o(M, L);
      }
      return null;
    }
    function ee(M, A, L, Y, ie) {
      if (typeof Y == "string" && Y !== "" || typeof Y == "number") return M = M.get(L) || null, S(A, M, "" + Y, ie);
      if (typeof Y == "object" && Y !== null) {
        switch (Y.$$typeof) {
          case W:
            return M = M.get(Y.key === null ? L : Y.key) || null, T(A, M, Y, ie);
          case I:
            return M = M.get(Y.key === null ? L : Y.key) || null, D(A, M, Y, ie);
          case Ee:
            var le = Y._init;
            return ee(M, A, L, le(Y._payload), ie);
        }
        if (Vr(Y) || K(Y)) return M = M.get(L) || null, q(A, M, Y, ie, null);
        _o(A, Y);
      }
      return null;
    }
    function re(M, A, L, Y) {
      for (var ie = null, le = null, ue = A, pe = A = 0, et = null; ue !== null && pe < L.length; pe++) {
        ue.index > pe ? (et = ue, ue = null) : et = ue.sibling;
        var Te = V(M, ue, L[pe], Y);
        if (Te === null) {
          ue === null && (ue = et);
          break;
        }
        e && ue && Te.alternate === null && t(M, ue), A = u(Te, A, pe), le === null ? ie = Te : le.sibling = Te, le = Te, ue = et;
      }
      if (pe === L.length) return n(M, ue), Oe && Bn(M, pe), ie;
      if (ue === null) {
        for (; pe < L.length; pe++) ue = Q(M, L[pe], Y), ue !== null && (A = u(ue, A, pe), le === null ? ie = ue : le.sibling = ue, le = ue);
        return Oe && Bn(M, pe), ie;
      }
      for (ue = s(M, ue); pe < L.length; pe++) et = ee(ue, M, pe, L[pe], Y), et !== null && (e && et.alternate !== null && ue.delete(et.key === null ? pe : et.key), A = u(et, A, pe), le === null ? ie = et : le.sibling = et, le = et);
      return e && ue.forEach(function(In) {
        return t(M, In);
      }), Oe && Bn(M, pe), ie;
    }
    function se(M, A, L, Y) {
      var ie = K(L);
      if (typeof ie != "function") throw Error(i(150));
      if (L = ie.call(L), L == null) throw Error(i(151));
      for (var le = ie = null, ue = A, pe = A = 0, et = null, Te = L.next(); ue !== null && !Te.done; pe++, Te = L.next()) {
        ue.index > pe ? (et = ue, ue = null) : et = ue.sibling;
        var In = V(M, ue, Te.value, Y);
        if (In === null) {
          ue === null && (ue = et);
          break;
        }
        e && ue && In.alternate === null && t(M, ue), A = u(In, A, pe), le === null ? ie = In : le.sibling = In, le = In, ue = et;
      }
      if (Te.done) return n(
        M,
        ue
      ), Oe && Bn(M, pe), ie;
      if (ue === null) {
        for (; !Te.done; pe++, Te = L.next()) Te = Q(M, Te.value, Y), Te !== null && (A = u(Te, A, pe), le === null ? ie = Te : le.sibling = Te, le = Te);
        return Oe && Bn(M, pe), ie;
      }
      for (ue = s(M, ue); !Te.done; pe++, Te = L.next()) Te = ee(ue, M, pe, Te.value, Y), Te !== null && (e && Te.alternate !== null && ue.delete(Te.key === null ? pe : Te.key), A = u(Te, A, pe), le === null ? ie = Te : le.sibling = Te, le = Te);
      return e && ue.forEach(function(Cm) {
        return t(M, Cm);
      }), Oe && Bn(M, pe), ie;
    }
    function Ue(M, A, L, Y) {
      if (typeof L == "object" && L !== null && L.type === J && L.key === null && (L = L.props.children), typeof L == "object" && L !== null) {
        switch (L.$$typeof) {
          case W:
            e: {
              for (var ie = L.key, le = A; le !== null; ) {
                if (le.key === ie) {
                  if (ie = L.type, ie === J) {
                    if (le.tag === 7) {
                      n(M, le.sibling), A = l(le, L.props.children), A.return = M, M = A;
                      break e;
                    }
                  } else if (le.elementType === ie || typeof ie == "object" && ie !== null && ie.$$typeof === Ee && Cc(ie) === le.type) {
                    n(M, le.sibling), A = l(le, L.props), A.ref = vs(M, le, L), A.return = M, M = A;
                    break e;
                  }
                  n(M, le);
                  break;
                } else t(M, le);
                le = le.sibling;
              }
              L.type === J ? (A = Jn(L.props.children, M.mode, Y, L.key), A.return = M, M = A) : (Y = Bo(L.type, L.key, L.props, null, M.mode, Y), Y.ref = vs(M, A, L), Y.return = M, M = Y);
            }
            return h(M);
          case I:
            e: {
              for (le = L.key; A !== null; ) {
                if (A.key === le) if (A.tag === 4 && A.stateNode.containerInfo === L.containerInfo && A.stateNode.implementation === L.implementation) {
                  n(M, A.sibling), A = l(A, L.children || []), A.return = M, M = A;
                  break e;
                } else {
                  n(M, A);
                  break;
                }
                else t(M, A);
                A = A.sibling;
              }
              A = il(L, M.mode, Y), A.return = M, M = A;
            }
            return h(M);
          case Ee:
            return le = L._init, Ue(M, A, le(L._payload), Y);
        }
        if (Vr(L)) return re(M, A, L, Y);
        if (K(L)) return se(M, A, L, Y);
        _o(M, L);
      }
      return typeof L == "string" && L !== "" || typeof L == "number" ? (L = "" + L, A !== null && A.tag === 6 ? (n(M, A.sibling), A = l(A, L), A.return = M, M = A) : (n(M, A), A = ol(L, M.mode, Y), A.return = M, M = A), h(M)) : n(M, A);
    }
    return Ue;
  }
  var Er = jc(!0), Ec = jc(!1), xo = Cn(null), wo = null, Nr = null, ma = null;
  function va() {
    ma = Nr = wo = null;
  }
  function ya(e) {
    var t = xo.current;
    Le(xo), e._currentValue = t;
  }
  function ga(e, t, n) {
    for (; e !== null; ) {
      var s = e.alternate;
      if ((e.childLanes & t) !== t ? (e.childLanes |= t, s !== null && (s.childLanes |= t)) : s !== null && (s.childLanes & t) !== t && (s.childLanes |= t), e === n) break;
      e = e.return;
    }
  }
  function Tr(e, t) {
    wo = e, ma = Nr = null, e = e.dependencies, e !== null && e.firstContext !== null && ((e.lanes & t) !== 0 && (gt = !0), e.firstContext = null);
  }
  function Pt(e) {
    var t = e._currentValue;
    if (ma !== e) if (e = { context: e, memoizedValue: t, next: null }, Nr === null) {
      if (wo === null) throw Error(i(308));
      Nr = e, wo.dependencies = { lanes: 0, firstContext: e };
    } else Nr = Nr.next = e;
    return t;
  }
  var Un = null;
  function _a(e) {
    Un === null ? Un = [e] : Un.push(e);
  }
  function Nc(e, t, n, s) {
    var l = t.interleaved;
    return l === null ? (n.next = n, _a(t)) : (n.next = l.next, l.next = n), t.interleaved = n, cn(e, s);
  }
  function cn(e, t) {
    e.lanes |= t;
    var n = e.alternate;
    for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; ) e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
    return n.tag === 3 ? n.stateNode : null;
  }
  var Nn = !1;
  function xa(e) {
    e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
  }
  function Tc(e, t) {
    e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
  }
  function dn(e, t) {
    return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
  }
  function Tn(e, t, n) {
    var s = e.updateQueue;
    if (s === null) return null;
    if (s = s.shared, (je & 2) !== 0) {
      var l = s.pending;
      return l === null ? t.next = t : (t.next = l.next, l.next = t), s.pending = t, cn(e, n);
    }
    return l = s.interleaved, l === null ? (t.next = t, _a(s)) : (t.next = l.next, l.next = t), s.interleaved = t, cn(e, n);
  }
  function ko(e, t, n) {
    if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
      var s = t.lanes;
      s &= e.pendingLanes, n |= s, t.lanes = n, Mi(e, n);
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
  function So(e, t, n, s) {
    var l = e.updateQueue;
    Nn = !1;
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
            var re = e, se = S;
            switch (V = t, ee = n, se.tag) {
              case 1:
                if (re = se.payload, typeof re == "function") {
                  Q = re.call(ee, Q, V);
                  break e;
                }
                Q = re;
                break e;
              case 3:
                re.flags = re.flags & -65537 | 128;
              case 0:
                if (re = se.payload, V = typeof re == "function" ? re.call(ee, Q, V) : re, V == null) break e;
                Q = U({}, Q, V);
                break e;
              case 2:
                Nn = !0;
            }
          }
          S.callback !== null && S.lane !== 0 && (e.flags |= 64, V = l.effects, V === null ? l.effects = [S] : V.push(S));
        } else ee = { eventTime: ee, lane: V, tag: S.tag, payload: S.payload, callback: S.callback, next: null }, q === null ? (D = q = ee, T = Q) : q = q.next = ee, h |= V;
        if (S = S.next, S === null) {
          if (S = l.shared.pending, S === null) break;
          V = S, S = V.next, V.next = null, l.lastBaseUpdate = V, l.shared.pending = null;
        }
      } while (!0);
      if (q === null && (T = Q), l.baseState = T, l.firstBaseUpdate = D, l.lastBaseUpdate = q, t = l.shared.interleaved, t !== null) {
        l = t;
        do
          h |= l.lane, l = l.next;
        while (l !== t);
      } else u === null && (l.shared.lanes = 0);
      Qn |= h, e.lanes = h, e.memoizedState = Q;
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
  var ys = {}, Zt = Cn(ys), gs = Cn(ys), _s = Cn(ys);
  function Vn(e) {
    if (e === ys) throw Error(i(174));
    return e;
  }
  function wa(e, t) {
    switch (Me(_s, t), Me(gs, e), Me(Zt, ys), e = t.nodeType, e) {
      case 9:
      case 11:
        t = (t = t.documentElement) ? t.namespaceURI : ki(null, "");
        break;
      default:
        e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = ki(t, e);
    }
    Le(Zt), Me(Zt, t);
  }
  function br() {
    Le(Zt), Le(gs), Le(_s);
  }
  function Ac(e) {
    Vn(_s.current);
    var t = Vn(Zt.current), n = ki(t, e.type);
    t !== n && (Me(gs, e), Me(Zt, n));
  }
  function ka(e) {
    gs.current === e && (Le(Zt), Le(gs));
  }
  var He = Cn(0);
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
  var Sa = [];
  function Ca() {
    for (var e = 0; e < Sa.length; e++) Sa[e]._workInProgressVersionPrimary = null;
    Sa.length = 0;
  }
  var jo = z.ReactCurrentDispatcher, ja = z.ReactCurrentBatchConfig, qn = 0, Fe = null, qe = null, Xe = null, Eo = !1, xs = !1, ws = 0, qh = 0;
  function it() {
    throw Error(i(321));
  }
  function Ea(e, t) {
    if (t === null) return !1;
    for (var n = 0; n < t.length && n < e.length; n++) if (!zt(e[n], t[n])) return !1;
    return !0;
  }
  function Na(e, t, n, s, l, u) {
    if (qn = u, Fe = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, jo.current = e === null || e.memoizedState === null ? Gh : Jh, e = n(s, l), xs) {
      u = 0;
      do {
        if (xs = !1, ws = 0, 25 <= u) throw Error(i(301));
        u += 1, Xe = qe = null, t.updateQueue = null, jo.current = Xh, e = n(s, l);
      } while (xs);
    }
    if (jo.current = bo, t = qe !== null && qe.next !== null, qn = 0, Xe = qe = Fe = null, Eo = !1, t) throw Error(i(300));
    return e;
  }
  function Ta() {
    var e = ws !== 0;
    return ws = 0, e;
  }
  function en() {
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
      if (e === null) throw Error(i(310));
      qe = e, e = { memoizedState: qe.memoizedState, baseState: qe.baseState, baseQueue: qe.baseQueue, queue: qe.queue, next: null }, Xe === null ? Fe.memoizedState = Xe = e : Xe = Xe.next = e;
    }
    return Xe;
  }
  function ks(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function ba(e) {
    var t = $t(), n = t.queue;
    if (n === null) throw Error(i(311));
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
        if ((qn & q) === q) T !== null && (T = T.next = { lane: 0, action: D.action, hasEagerState: D.hasEagerState, eagerState: D.eagerState, next: null }), s = D.hasEagerState ? D.eagerState : e(s, D.action);
        else {
          var Q = {
            lane: q,
            action: D.action,
            hasEagerState: D.hasEagerState,
            eagerState: D.eagerState,
            next: null
          };
          T === null ? (S = T = Q, h = s) : T = T.next = Q, Fe.lanes |= q, Qn |= q;
        }
        D = D.next;
      } while (D !== null && D !== u);
      T === null ? h = s : T.next = S, zt(s, t.memoizedState) || (gt = !0), t.memoizedState = s, t.baseState = h, t.baseQueue = T, n.lastRenderedState = s;
    }
    if (e = n.interleaved, e !== null) {
      l = e;
      do
        u = l.lane, Fe.lanes |= u, Qn |= u, l = l.next;
      while (l !== e);
    } else l === null && (n.lanes = 0);
    return [t.memoizedState, n.dispatch];
  }
  function Ra(e) {
    var t = $t(), n = t.queue;
    if (n === null) throw Error(i(311));
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
  function Pc() {
  }
  function $c(e, t) {
    var n = Fe, s = $t(), l = t(), u = !zt(s.memoizedState, l);
    if (u && (s.memoizedState = l, gt = !0), s = s.queue, Aa(Lc.bind(null, n, s, e), [e]), s.getSnapshot !== t || u || Xe !== null && Xe.memoizedState.tag & 1) {
      if (n.flags |= 2048, Ss(9, Ic.bind(null, n, s, l, t), void 0, null), Ze === null) throw Error(i(349));
      (qn & 30) !== 0 || Mc(n, t, l);
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
      return !zt(e, n);
    } catch {
      return !0;
    }
  }
  function Oc(e) {
    var t = cn(e, 1);
    t !== null && Ut(t, e, 1, -1);
  }
  function zc(e) {
    var t = en();
    return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: ks, lastRenderedState: e }, t.queue = e, e = e.dispatch = Yh.bind(null, Fe, e), [t.memoizedState, e];
  }
  function Ss(e, t, n, s) {
    return e = { tag: e, create: t, destroy: n, deps: s, next: null }, t = Fe.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, Fe.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (s = n.next, n.next = e, e.next = s, t.lastEffect = e)), e;
  }
  function Hc() {
    return $t().memoizedState;
  }
  function No(e, t, n, s) {
    var l = en();
    Fe.flags |= e, l.memoizedState = Ss(1 | t, n, void 0, s === void 0 ? null : s);
  }
  function To(e, t, n, s) {
    var l = $t();
    s = s === void 0 ? null : s;
    var u = void 0;
    if (qe !== null) {
      var h = qe.memoizedState;
      if (u = h.destroy, s !== null && Ea(s, h.deps)) {
        l.memoizedState = Ss(t, n, u, s);
        return;
      }
    }
    Fe.flags |= e, l.memoizedState = Ss(1 | t, n, u, s);
  }
  function Fc(e, t) {
    return No(8390656, 8, e, t);
  }
  function Aa(e, t) {
    return To(2048, 8, e, t);
  }
  function Wc(e, t) {
    return To(4, 2, e, t);
  }
  function Bc(e, t) {
    return To(4, 4, e, t);
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
    return n = n != null ? n.concat([e]) : null, To(4, 4, Uc.bind(null, t, e), n);
  }
  function Pa() {
  }
  function qc(e, t) {
    var n = $t();
    t = t === void 0 ? null : t;
    var s = n.memoizedState;
    return s !== null && t !== null && Ea(t, s[1]) ? s[0] : (n.memoizedState = [e, t], e);
  }
  function Qc(e, t) {
    var n = $t();
    t = t === void 0 ? null : t;
    var s = n.memoizedState;
    return s !== null && t !== null && Ea(t, s[1]) ? s[0] : (e = e(), n.memoizedState = [e, t], e);
  }
  function Kc(e, t, n) {
    return (qn & 21) === 0 ? (e.baseState && (e.baseState = !1, gt = !0), e.memoizedState = n) : (zt(n, t) || (n = Cu(), Fe.lanes |= n, Qn |= n, e.baseState = !0), t);
  }
  function Qh(e, t) {
    var n = Pe;
    Pe = n !== 0 && 4 > n ? n : 4, e(!0);
    var s = ja.transition;
    ja.transition = {};
    try {
      e(!1), t();
    } finally {
      Pe = n, ja.transition = s;
    }
  }
  function Yc() {
    return $t().memoizedState;
  }
  function Kh(e, t, n) {
    var s = Pn(e);
    if (n = { lane: s, action: n, hasEagerState: !1, eagerState: null, next: null }, Gc(e)) Jc(t, n);
    else if (n = Nc(e, t, n, s), n !== null) {
      var l = ft();
      Ut(n, e, s, l), Xc(n, t, s);
    }
  }
  function Yh(e, t, n) {
    var s = Pn(e), l = { lane: s, action: n, hasEagerState: !1, eagerState: null, next: null };
    if (Gc(e)) Jc(t, l);
    else {
      var u = e.alternate;
      if (e.lanes === 0 && (u === null || u.lanes === 0) && (u = t.lastRenderedReducer, u !== null)) try {
        var h = t.lastRenderedState, S = u(h, n);
        if (l.hasEagerState = !0, l.eagerState = S, zt(S, h)) {
          var T = t.interleaved;
          T === null ? (l.next = l, _a(t)) : (l.next = T.next, T.next = l), t.interleaved = l;
          return;
        }
      } catch {
      } finally {
      }
      n = Nc(e, t, l, s), n !== null && (l = ft(), Ut(n, e, s, l), Xc(n, t, s));
    }
  }
  function Gc(e) {
    var t = e.alternate;
    return e === Fe || t !== null && t === Fe;
  }
  function Jc(e, t) {
    xs = Eo = !0;
    var n = e.pending;
    n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
  }
  function Xc(e, t, n) {
    if ((n & 4194240) !== 0) {
      var s = t.lanes;
      s &= e.pendingLanes, n |= s, t.lanes = n, Mi(e, n);
    }
  }
  var bo = { readContext: Pt, useCallback: it, useContext: it, useEffect: it, useImperativeHandle: it, useInsertionEffect: it, useLayoutEffect: it, useMemo: it, useReducer: it, useRef: it, useState: it, useDebugValue: it, useDeferredValue: it, useTransition: it, useMutableSource: it, useSyncExternalStore: it, useId: it, unstable_isNewReconciler: !1 }, Gh = { readContext: Pt, useCallback: function(e, t) {
    return en().memoizedState = [e, t === void 0 ? null : t], e;
  }, useContext: Pt, useEffect: Fc, useImperativeHandle: function(e, t, n) {
    return n = n != null ? n.concat([e]) : null, No(
      4194308,
      4,
      Uc.bind(null, t, e),
      n
    );
  }, useLayoutEffect: function(e, t) {
    return No(4194308, 4, e, t);
  }, useInsertionEffect: function(e, t) {
    return No(4, 2, e, t);
  }, useMemo: function(e, t) {
    var n = en();
    return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e;
  }, useReducer: function(e, t, n) {
    var s = en();
    return t = n !== void 0 ? n(t) : t, s.memoizedState = s.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, s.queue = e, e = e.dispatch = Kh.bind(null, Fe, e), [s.memoizedState, e];
  }, useRef: function(e) {
    var t = en();
    return e = { current: e }, t.memoizedState = e;
  }, useState: zc, useDebugValue: Pa, useDeferredValue: function(e) {
    return en().memoizedState = e;
  }, useTransition: function() {
    var e = zc(!1), t = e[0];
    return e = Qh.bind(null, e[1]), en().memoizedState = e, [t, e];
  }, useMutableSource: function() {
  }, useSyncExternalStore: function(e, t, n) {
    var s = Fe, l = en();
    if (Oe) {
      if (n === void 0) throw Error(i(407));
      n = n();
    } else {
      if (n = t(), Ze === null) throw Error(i(349));
      (qn & 30) !== 0 || Mc(s, t, n);
    }
    l.memoizedState = n;
    var u = { value: n, getSnapshot: t };
    return l.queue = u, Fc(Lc.bind(
      null,
      s,
      u,
      e
    ), [e]), s.flags |= 2048, Ss(9, Ic.bind(null, s, u, n, t), void 0, null), n;
  }, useId: function() {
    var e = en(), t = Ze.identifierPrefix;
    if (Oe) {
      var n = un, s = ln;
      n = (s & ~(1 << 32 - Ot(s) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = ws++, 0 < n && (t += "H" + n.toString(32)), t += ":";
    } else n = qh++, t = ":" + t + "r" + n.toString(32) + ":";
    return e.memoizedState = t;
  }, unstable_isNewReconciler: !1 }, Jh = {
    readContext: Pt,
    useCallback: qc,
    useContext: Pt,
    useEffect: Aa,
    useImperativeHandle: Vc,
    useInsertionEffect: Wc,
    useLayoutEffect: Bc,
    useMemo: Qc,
    useReducer: ba,
    useRef: Hc,
    useState: function() {
      return ba(ks);
    },
    useDebugValue: Pa,
    useDeferredValue: function(e) {
      var t = $t();
      return Kc(t, qe.memoizedState, e);
    },
    useTransition: function() {
      var e = ba(ks)[0], t = $t().memoizedState;
      return [e, t];
    },
    useMutableSource: Pc,
    useSyncExternalStore: $c,
    useId: Yc,
    unstable_isNewReconciler: !1
  }, Xh = { readContext: Pt, useCallback: qc, useContext: Pt, useEffect: Aa, useImperativeHandle: Vc, useInsertionEffect: Wc, useLayoutEffect: Bc, useMemo: Qc, useReducer: Ra, useRef: Hc, useState: function() {
    return Ra(ks);
  }, useDebugValue: Pa, useDeferredValue: function(e) {
    var t = $t();
    return qe === null ? t.memoizedState = e : Kc(t, qe.memoizedState, e);
  }, useTransition: function() {
    var e = Ra(ks)[0], t = $t().memoizedState;
    return [e, t];
  }, useMutableSource: Pc, useSyncExternalStore: $c, useId: Yc, unstable_isNewReconciler: !1 };
  function Ft(e, t) {
    if (e && e.defaultProps) {
      t = U({}, t), e = e.defaultProps;
      for (var n in e) t[n] === void 0 && (t[n] = e[n]);
      return t;
    }
    return t;
  }
  function $a(e, t, n, s) {
    t = e.memoizedState, n = n(s, t), n = n == null ? t : U({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
  }
  var Ro = { isMounted: function(e) {
    return (e = e._reactInternals) ? zn(e) === e : !1;
  }, enqueueSetState: function(e, t, n) {
    e = e._reactInternals;
    var s = ft(), l = Pn(e), u = dn(s, l);
    u.payload = t, n != null && (u.callback = n), t = Tn(e, u, l), t !== null && (Ut(t, e, l, s), ko(t, e, l));
  }, enqueueReplaceState: function(e, t, n) {
    e = e._reactInternals;
    var s = ft(), l = Pn(e), u = dn(s, l);
    u.tag = 1, u.payload = t, n != null && (u.callback = n), t = Tn(e, u, l), t !== null && (Ut(t, e, l, s), ko(t, e, l));
  }, enqueueForceUpdate: function(e, t) {
    e = e._reactInternals;
    var n = ft(), s = Pn(e), l = dn(n, s);
    l.tag = 2, t != null && (l.callback = t), t = Tn(e, l, s), t !== null && (Ut(t, e, s, n), ko(t, e, s));
  } };
  function Zc(e, t, n, s, l, u, h) {
    return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(s, u, h) : t.prototype && t.prototype.isPureReactComponent ? !us(n, s) || !us(l, u) : !0;
  }
  function ed(e, t, n) {
    var s = !1, l = jn, u = t.contextType;
    return typeof u == "object" && u !== null ? u = Pt(u) : (l = yt(t) ? Fn : ot.current, s = t.contextTypes, u = (s = s != null) ? kr(e, l) : jn), t = new t(n, u), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = Ro, e.stateNode = t, t._reactInternals = e, s && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = l, e.__reactInternalMemoizedMaskedChildContext = u), t;
  }
  function td(e, t, n, s) {
    e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, s), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, s), t.state !== e && Ro.enqueueReplaceState(t, t.state, null);
  }
  function Ma(e, t, n, s) {
    var l = e.stateNode;
    l.props = n, l.state = e.memoizedState, l.refs = {}, xa(e);
    var u = t.contextType;
    typeof u == "object" && u !== null ? l.context = Pt(u) : (u = yt(t) ? Fn : ot.current, l.context = kr(e, u)), l.state = e.memoizedState, u = t.getDerivedStateFromProps, typeof u == "function" && ($a(e, t, u, n), l.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof l.getSnapshotBeforeUpdate == "function" || typeof l.UNSAFE_componentWillMount != "function" && typeof l.componentWillMount != "function" || (t = l.state, typeof l.componentWillMount == "function" && l.componentWillMount(), typeof l.UNSAFE_componentWillMount == "function" && l.UNSAFE_componentWillMount(), t !== l.state && Ro.enqueueReplaceState(l, l.state, null), So(e, n, l, s), l.state = e.memoizedState), typeof l.componentDidMount == "function" && (e.flags |= 4194308);
  }
  function Rr(e, t) {
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
  function Ia(e, t, n) {
    return { value: e, source: null, stack: n ?? null, digest: t ?? null };
  }
  function La(e, t) {
    try {
      console.error(t.value);
    } catch (n) {
      setTimeout(function() {
        throw n;
      });
    }
  }
  var Zh = typeof WeakMap == "function" ? WeakMap : Map;
  function nd(e, t, n) {
    n = dn(-1, n), n.tag = 3, n.payload = { element: null };
    var s = t.value;
    return n.callback = function() {
      Do || (Do = !0, Ja = s), La(e, t);
    }, n;
  }
  function rd(e, t, n) {
    n = dn(-1, n), n.tag = 3;
    var s = e.type.getDerivedStateFromError;
    if (typeof s == "function") {
      var l = t.value;
      n.payload = function() {
        return s(l);
      }, n.callback = function() {
        La(e, t);
      };
    }
    var u = e.stateNode;
    return u !== null && typeof u.componentDidCatch == "function" && (n.callback = function() {
      La(e, t), typeof s != "function" && (Rn === null ? Rn = /* @__PURE__ */ new Set([this]) : Rn.add(this));
      var h = t.stack;
      this.componentDidCatch(t.value, { componentStack: h !== null ? h : "" });
    }), n;
  }
  function sd(e, t, n) {
    var s = e.pingCache;
    if (s === null) {
      s = e.pingCache = new Zh();
      var l = /* @__PURE__ */ new Set();
      s.set(t, l);
    } else l = s.get(t), l === void 0 && (l = /* @__PURE__ */ new Set(), s.set(t, l));
    l.has(n) || (l.add(n), e = pm.bind(null, e, t, n), t.then(e, e));
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
    return (e.mode & 1) === 0 ? (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = dn(-1, 1), t.tag = 2, Tn(n, t, 1))), n.lanes |= 1), e) : (e.flags |= 65536, e.lanes = l, e);
  }
  var em = z.ReactCurrentOwner, gt = !1;
  function dt(e, t, n, s) {
    t.child = e === null ? Ec(t, null, n, s) : Er(t, e.child, n, s);
  }
  function ad(e, t, n, s, l) {
    n = n.render;
    var u = t.ref;
    return Tr(t, l), s = Na(e, t, n, s, u, l), n = Ta(), e !== null && !gt ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l, fn(e, t, l)) : (Oe && n && ca(t), t.flags |= 1, dt(e, t, s, l), t.child);
  }
  function ld(e, t, n, s, l) {
    if (e === null) {
      var u = n.type;
      return typeof u == "function" && !sl(u) && u.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = u, ud(e, t, u, s, l)) : (e = Bo(n.type, null, s, t, t.mode, l), e.ref = t.ref, e.return = t, t.child = e);
    }
    if (u = e.child, (e.lanes & l) === 0) {
      var h = u.memoizedProps;
      if (n = n.compare, n = n !== null ? n : us, n(h, s) && e.ref === t.ref) return fn(e, t, l);
    }
    return t.flags |= 1, e = Mn(u, s), e.ref = t.ref, e.return = t, t.child = e;
  }
  function ud(e, t, n, s, l) {
    if (e !== null) {
      var u = e.memoizedProps;
      if (us(u, s) && e.ref === t.ref) if (gt = !1, t.pendingProps = s = u, (e.lanes & l) !== 0) (e.flags & 131072) !== 0 && (gt = !0);
      else return t.lanes = e.lanes, fn(e, t, l);
    }
    return Da(e, t, n, s, l);
  }
  function cd(e, t, n) {
    var s = t.pendingProps, l = s.children, u = e !== null ? e.memoizedState : null;
    if (s.mode === "hidden") if ((t.mode & 1) === 0) t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, Me(Pr, Nt), Nt |= n;
    else {
      if ((n & 1073741824) === 0) return e = u !== null ? u.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, Me(Pr, Nt), Nt |= e, null;
      t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, s = u !== null ? u.baseLanes : n, Me(Pr, Nt), Nt |= s;
    }
    else u !== null ? (s = u.baseLanes | n, t.memoizedState = null) : s = n, Me(Pr, Nt), Nt |= s;
    return dt(e, t, l, n), t.child;
  }
  function dd(e, t) {
    var n = t.ref;
    (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
  }
  function Da(e, t, n, s, l) {
    var u = yt(n) ? Fn : ot.current;
    return u = kr(t, u), Tr(t, l), n = Na(e, t, n, s, u, l), s = Ta(), e !== null && !gt ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l, fn(e, t, l)) : (Oe && s && ca(t), t.flags |= 1, dt(e, t, n, l), t.child);
  }
  function fd(e, t, n, s, l) {
    if (yt(n)) {
      var u = !0;
      ho(t);
    } else u = !1;
    if (Tr(t, l), t.stateNode === null) Po(e, t), ed(t, n, s), Ma(t, n, s, l), s = !0;
    else if (e === null) {
      var h = t.stateNode, S = t.memoizedProps;
      h.props = S;
      var T = h.context, D = n.contextType;
      typeof D == "object" && D !== null ? D = Pt(D) : (D = yt(n) ? Fn : ot.current, D = kr(t, D));
      var q = n.getDerivedStateFromProps, Q = typeof q == "function" || typeof h.getSnapshotBeforeUpdate == "function";
      Q || typeof h.UNSAFE_componentWillReceiveProps != "function" && typeof h.componentWillReceiveProps != "function" || (S !== s || T !== D) && td(t, h, s, D), Nn = !1;
      var V = t.memoizedState;
      h.state = V, So(t, s, h, l), T = t.memoizedState, S !== s || V !== T || vt.current || Nn ? (typeof q == "function" && ($a(t, n, q, s), T = t.memoizedState), (S = Nn || Zc(t, n, S, s, V, T, D)) ? (Q || typeof h.UNSAFE_componentWillMount != "function" && typeof h.componentWillMount != "function" || (typeof h.componentWillMount == "function" && h.componentWillMount(), typeof h.UNSAFE_componentWillMount == "function" && h.UNSAFE_componentWillMount()), typeof h.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof h.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = s, t.memoizedState = T), h.props = s, h.state = T, h.context = D, s = S) : (typeof h.componentDidMount == "function" && (t.flags |= 4194308), s = !1);
    } else {
      h = t.stateNode, Tc(e, t), S = t.memoizedProps, D = t.type === t.elementType ? S : Ft(t.type, S), h.props = D, Q = t.pendingProps, V = h.context, T = n.contextType, typeof T == "object" && T !== null ? T = Pt(T) : (T = yt(n) ? Fn : ot.current, T = kr(t, T));
      var ee = n.getDerivedStateFromProps;
      (q = typeof ee == "function" || typeof h.getSnapshotBeforeUpdate == "function") || typeof h.UNSAFE_componentWillReceiveProps != "function" && typeof h.componentWillReceiveProps != "function" || (S !== Q || V !== T) && td(t, h, s, T), Nn = !1, V = t.memoizedState, h.state = V, So(t, s, h, l);
      var re = t.memoizedState;
      S !== Q || V !== re || vt.current || Nn ? (typeof ee == "function" && ($a(t, n, ee, s), re = t.memoizedState), (D = Nn || Zc(t, n, D, s, V, re, T) || !1) ? (q || typeof h.UNSAFE_componentWillUpdate != "function" && typeof h.componentWillUpdate != "function" || (typeof h.componentWillUpdate == "function" && h.componentWillUpdate(s, re, T), typeof h.UNSAFE_componentWillUpdate == "function" && h.UNSAFE_componentWillUpdate(s, re, T)), typeof h.componentDidUpdate == "function" && (t.flags |= 4), typeof h.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof h.componentDidUpdate != "function" || S === e.memoizedProps && V === e.memoizedState || (t.flags |= 4), typeof h.getSnapshotBeforeUpdate != "function" || S === e.memoizedProps && V === e.memoizedState || (t.flags |= 1024), t.memoizedProps = s, t.memoizedState = re), h.props = s, h.state = re, h.context = T, s = D) : (typeof h.componentDidUpdate != "function" || S === e.memoizedProps && V === e.memoizedState || (t.flags |= 4), typeof h.getSnapshotBeforeUpdate != "function" || S === e.memoizedProps && V === e.memoizedState || (t.flags |= 1024), s = !1);
    }
    return Oa(e, t, n, s, u, l);
  }
  function Oa(e, t, n, s, l, u) {
    dd(e, t);
    var h = (t.flags & 128) !== 0;
    if (!s && !h) return l && yc(t, n, !1), fn(e, t, u);
    s = t.stateNode, em.current = t;
    var S = h && typeof n.getDerivedStateFromError != "function" ? null : s.render();
    return t.flags |= 1, e !== null && h ? (t.child = Er(t, e.child, null, u), t.child = Er(t, null, S, u)) : dt(e, t, S, u), t.memoizedState = s.state, l && yc(t, n, !0), t.child;
  }
  function pd(e) {
    var t = e.stateNode;
    t.pendingContext ? mc(e, t.pendingContext, t.pendingContext !== t.context) : t.context && mc(e, t.context, !1), wa(e, t.containerInfo);
  }
  function hd(e, t, n, s, l) {
    return jr(), ha(l), t.flags |= 256, dt(e, t, n, s), t.child;
  }
  var za = { dehydrated: null, treeContext: null, retryLane: 0 };
  function Ha(e) {
    return { baseLanes: e, cachePool: null, transitions: null };
  }
  function md(e, t, n) {
    var s = t.pendingProps, l = He.current, u = !1, h = (t.flags & 128) !== 0, S;
    if ((S = h) || (S = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0), S ? (u = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (l |= 1), Me(He, l & 1), e === null)
      return pa(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? ((t.mode & 1) === 0 ? t.lanes = 1 : e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824, null) : (h = s.children, e = s.fallback, u ? (s = t.mode, u = t.child, h = { mode: "hidden", children: h }, (s & 1) === 0 && u !== null ? (u.childLanes = 0, u.pendingProps = h) : u = Uo(h, s, 0, null), e = Jn(e, s, n, null), u.return = t, e.return = t, u.sibling = e, t.child = u, t.child.memoizedState = Ha(n), t.memoizedState = za, e) : Fa(t, h));
    if (l = e.memoizedState, l !== null && (S = l.dehydrated, S !== null)) return tm(e, t, h, s, S, l, n);
    if (u) {
      u = s.fallback, h = t.mode, l = e.child, S = l.sibling;
      var T = { mode: "hidden", children: s.children };
      return (h & 1) === 0 && t.child !== l ? (s = t.child, s.childLanes = 0, s.pendingProps = T, t.deletions = null) : (s = Mn(l, T), s.subtreeFlags = l.subtreeFlags & 14680064), S !== null ? u = Mn(S, u) : (u = Jn(u, h, n, null), u.flags |= 2), u.return = t, s.return = t, s.sibling = u, t.child = s, s = u, u = t.child, h = e.child.memoizedState, h = h === null ? Ha(n) : { baseLanes: h.baseLanes | n, cachePool: null, transitions: h.transitions }, u.memoizedState = h, u.childLanes = e.childLanes & ~n, t.memoizedState = za, s;
    }
    return u = e.child, e = u.sibling, s = Mn(u, { mode: "visible", children: s.children }), (t.mode & 1) === 0 && (s.lanes = n), s.return = t, s.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = s, t.memoizedState = null, s;
  }
  function Fa(e, t) {
    return t = Uo({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t;
  }
  function Ao(e, t, n, s) {
    return s !== null && ha(s), Er(t, e.child, null, n), e = Fa(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
  }
  function tm(e, t, n, s, l, u, h) {
    if (n)
      return t.flags & 256 ? (t.flags &= -257, s = Ia(Error(i(422))), Ao(e, t, h, s)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (u = s.fallback, l = t.mode, s = Uo({ mode: "visible", children: s.children }, l, 0, null), u = Jn(u, l, h, null), u.flags |= 2, s.return = t, u.return = t, s.sibling = u, t.child = s, (t.mode & 1) !== 0 && Er(t, e.child, null, h), t.child.memoizedState = Ha(h), t.memoizedState = za, u);
    if ((t.mode & 1) === 0) return Ao(e, t, h, null);
    if (l.data === "$!") {
      if (s = l.nextSibling && l.nextSibling.dataset, s) var S = s.dgst;
      return s = S, u = Error(i(419)), s = Ia(u, s, void 0), Ao(e, t, h, s);
    }
    if (S = (h & e.childLanes) !== 0, gt || S) {
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
        l = (l & (s.suspendedLanes | h)) !== 0 ? 0 : l, l !== 0 && l !== u.retryLane && (u.retryLane = l, cn(e, l), Ut(s, e, l, -1));
      }
      return rl(), s = Ia(Error(i(421))), Ao(e, t, h, s);
    }
    return l.data === "$?" ? (t.flags |= 128, t.child = e.child, t = hm.bind(null, e), l._reactRetry = t, null) : (e = u.treeContext, Et = Sn(l.nextSibling), jt = t, Oe = !0, Ht = null, e !== null && (Rt[At++] = ln, Rt[At++] = un, Rt[At++] = Wn, ln = e.id, un = e.overflow, Wn = t), t = Fa(t, s.children), t.flags |= 4096, t);
  }
  function vd(e, t, n) {
    e.lanes |= t;
    var s = e.alternate;
    s !== null && (s.lanes |= t), ga(e.return, t, n);
  }
  function Wa(e, t, n, s, l) {
    var u = e.memoizedState;
    u === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: s, tail: n, tailMode: l } : (u.isBackwards = t, u.rendering = null, u.renderingStartTime = 0, u.last = s, u.tail = n, u.tailMode = l);
  }
  function yd(e, t, n) {
    var s = t.pendingProps, l = s.revealOrder, u = s.tail;
    if (dt(e, t, s.children, n), s = He.current, (s & 2) !== 0) s = s & 1 | 2, t.flags |= 128;
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
        for (n = t.child, l = null; n !== null; ) e = n.alternate, e !== null && Co(e) === null && (l = n), n = n.sibling;
        n = l, n === null ? (l = t.child, t.child = null) : (l = n.sibling, n.sibling = null), Wa(t, !1, l, n, u);
        break;
      case "backwards":
        for (n = null, l = t.child, t.child = null; l !== null; ) {
          if (e = l.alternate, e !== null && Co(e) === null) {
            t.child = l;
            break;
          }
          e = l.sibling, l.sibling = n, n = l, l = e;
        }
        Wa(t, !0, n, null, u);
        break;
      case "together":
        Wa(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
    return t.child;
  }
  function Po(e, t) {
    (t.mode & 1) === 0 && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2);
  }
  function fn(e, t, n) {
    if (e !== null && (t.dependencies = e.dependencies), Qn |= t.lanes, (n & t.childLanes) === 0) return null;
    if (e !== null && t.child !== e.child) throw Error(i(153));
    if (t.child !== null) {
      for (e = t.child, n = Mn(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; ) e = e.sibling, n = n.sibling = Mn(e, e.pendingProps), n.return = t;
      n.sibling = null;
    }
    return t.child;
  }
  function nm(e, t, n) {
    switch (t.tag) {
      case 3:
        pd(t), jr();
        break;
      case 5:
        Ac(t);
        break;
      case 1:
        yt(t.type) && ho(t);
        break;
      case 4:
        wa(t, t.stateNode.containerInfo);
        break;
      case 10:
        var s = t.type._context, l = t.memoizedProps.value;
        Me(xo, s._currentValue), s._currentValue = l;
        break;
      case 13:
        if (s = t.memoizedState, s !== null)
          return s.dehydrated !== null ? (Me(He, He.current & 1), t.flags |= 128, null) : (n & t.child.childLanes) !== 0 ? md(e, t, n) : (Me(He, He.current & 1), e = fn(e, t, n), e !== null ? e.sibling : null);
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
    return fn(e, t, n);
  }
  var gd, Ba, _d, xd;
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
  }, Ba = function() {
  }, _d = function(e, t, n, s) {
    var l = e.memoizedProps;
    if (l !== s) {
      e = t.stateNode, Vn(Zt.current);
      var u = null;
      switch (n) {
        case "input":
          l = Gt(e, l), s = Gt(e, s), u = [];
          break;
        case "select":
          l = U({}, l, { value: void 0 }), s = U({}, s, { value: void 0 }), u = [];
          break;
        case "textarea":
          l = wi(e, l), s = wi(e, s), u = [];
          break;
        default:
          typeof l.onClick != "function" && typeof s.onClick == "function" && (e.onclick = co);
      }
      Si(n, s);
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
  function at(e) {
    var t = e.alternate !== null && e.alternate.child === e.child, n = 0, s = 0;
    if (t) for (var l = e.child; l !== null; ) n |= l.lanes | l.childLanes, s |= l.subtreeFlags & 14680064, s |= l.flags & 14680064, l.return = e, l = l.sibling;
    else for (l = e.child; l !== null; ) n |= l.lanes | l.childLanes, s |= l.subtreeFlags, s |= l.flags, l.return = e, l = l.sibling;
    return e.subtreeFlags |= s, e.childLanes = n, t;
  }
  function rm(e, t, n) {
    var s = t.pendingProps;
    switch (da(t), t.tag) {
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
        return at(t), null;
      case 1:
        return yt(t.type) && po(), at(t), null;
      case 3:
        return s = t.stateNode, br(), Le(vt), Le(ot), Ca(), s.pendingContext && (s.context = s.pendingContext, s.pendingContext = null), (e === null || e.child === null) && (go(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024, Ht !== null && (el(Ht), Ht = null))), Ba(e, t), at(t), null;
      case 5:
        ka(t);
        var l = Vn(_s.current);
        if (n = t.type, e !== null && t.stateNode != null) _d(e, t, n, s, l), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
        else {
          if (!s) {
            if (t.stateNode === null) throw Error(i(166));
            return at(t), null;
          }
          if (e = Vn(Zt.current), go(t)) {
            s = t.stateNode, n = t.type;
            var u = t.memoizedProps;
            switch (s[Xt] = t, s[hs] = u, e = (t.mode & 1) !== 0, n) {
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
                for (l = 0; l < ds.length; l++) Ie(ds[l], s);
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
                Fs(s, u), Ie("invalid", s);
                break;
              case "select":
                s._wrapperState = { wasMultiple: !!u.multiple }, Ie("invalid", s);
                break;
              case "textarea":
                ru(s, u), Ie("invalid", s);
            }
            Si(n, u), l = null;
            for (var h in u) if (u.hasOwnProperty(h)) {
              var S = u[h];
              h === "children" ? typeof S == "string" ? s.textContent !== S && (u.suppressHydrationWarning !== !0 && uo(s.textContent, S, e), l = ["children", S]) : typeof S == "number" && s.textContent !== "" + S && (u.suppressHydrationWarning !== !0 && uo(
                s.textContent,
                S,
                e
              ), l = ["children", "" + S]) : d.hasOwnProperty(h) && S != null && h === "onScroll" && Ie("scroll", s);
            }
            switch (n) {
              case "input":
                fe(s), nu(s, u, !0);
                break;
              case "textarea":
                fe(s), ou(s);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof u.onClick == "function" && (s.onclick = co);
            }
            s = l, t.updateQueue = s, s !== null && (t.flags |= 4);
          } else {
            h = l.nodeType === 9 ? l : l.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = iu(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = h.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof s.is == "string" ? e = h.createElement(n, { is: s.is }) : (e = h.createElement(n), n === "select" && (h = e, s.multiple ? h.multiple = !0 : s.size && (h.size = s.size))) : e = h.createElementNS(e, n), e[Xt] = t, e[hs] = s, gd(e, t, !1, !1), t.stateNode = e;
            e: {
              switch (h = Ci(n, s), n) {
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
                  for (l = 0; l < ds.length; l++) Ie(ds[l], e);
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
                  Fs(e, s), l = Gt(e, s), Ie("invalid", e);
                  break;
                case "option":
                  l = s;
                  break;
                case "select":
                  e._wrapperState = { wasMultiple: !!s.multiple }, l = U({}, s, { value: void 0 }), Ie("invalid", e);
                  break;
                case "textarea":
                  ru(e, s), l = wi(e, s), Ie("invalid", e);
                  break;
                default:
                  l = s;
              }
              Si(n, l), S = l;
              for (u in S) if (S.hasOwnProperty(u)) {
                var T = S[u];
                u === "style" ? uu(e, T) : u === "dangerouslySetInnerHTML" ? (T = T ? T.__html : void 0, T != null && au(e, T)) : u === "children" ? typeof T == "string" ? (n !== "textarea" || T !== "") && qr(e, T) : typeof T == "number" && qr(e, "" + T) : u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && u !== "autoFocus" && (d.hasOwnProperty(u) ? T != null && u === "onScroll" && Ie("scroll", e) : T != null && $(e, u, T, h));
              }
              switch (n) {
                case "input":
                  fe(e), nu(e, s, !1);
                  break;
                case "textarea":
                  fe(e), ou(e);
                  break;
                case "option":
                  s.value != null && e.setAttribute("value", "" + Ce(s.value));
                  break;
                case "select":
                  e.multiple = !!s.multiple, u = s.value, u != null ? cr(e, !!s.multiple, u, !1) : s.defaultValue != null && cr(
                    e,
                    !!s.multiple,
                    s.defaultValue,
                    !0
                  );
                  break;
                default:
                  typeof l.onClick == "function" && (e.onclick = co);
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
        return at(t), null;
      case 6:
        if (e && t.stateNode != null) xd(e, t, e.memoizedProps, s);
        else {
          if (typeof s != "string" && t.stateNode === null) throw Error(i(166));
          if (n = Vn(_s.current), Vn(Zt.current), go(t)) {
            if (s = t.stateNode, n = t.memoizedProps, s[Xt] = t, (u = s.nodeValue !== n) && (e = jt, e !== null)) switch (e.tag) {
              case 3:
                uo(s.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 && uo(s.nodeValue, n, (e.mode & 1) !== 0);
            }
            u && (t.flags |= 4);
          } else s = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(s), s[Xt] = t, t.stateNode = s;
        }
        return at(t), null;
      case 13:
        if (Le(He), s = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
          if (Oe && Et !== null && (t.mode & 1) !== 0 && (t.flags & 128) === 0) Sc(), jr(), t.flags |= 98560, u = !1;
          else if (u = go(t), s !== null && s.dehydrated !== null) {
            if (e === null) {
              if (!u) throw Error(i(318));
              if (u = t.memoizedState, u = u !== null ? u.dehydrated : null, !u) throw Error(i(317));
              u[Xt] = t;
            } else jr(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            at(t), u = !1;
          } else Ht !== null && (el(Ht), Ht = null), u = !0;
          if (!u) return t.flags & 65536 ? t : null;
        }
        return (t.flags & 128) !== 0 ? (t.lanes = n, t) : (s = s !== null, s !== (e !== null && e.memoizedState !== null) && s && (t.child.flags |= 8192, (t.mode & 1) !== 0 && (e === null || (He.current & 1) !== 0 ? Qe === 0 && (Qe = 3) : rl())), t.updateQueue !== null && (t.flags |= 4), at(t), null);
      case 4:
        return br(), Ba(e, t), e === null && fs(t.stateNode.containerInfo), at(t), null;
      case 10:
        return ya(t.type._context), at(t), null;
      case 17:
        return yt(t.type) && po(), at(t), null;
      case 19:
        if (Le(He), u = t.memoizedState, u === null) return at(t), null;
        if (s = (t.flags & 128) !== 0, h = u.rendering, h === null) if (s) Cs(u, !1);
        else {
          if (Qe !== 0 || e !== null && (e.flags & 128) !== 0) for (e = t.child; e !== null; ) {
            if (h = Co(e), h !== null) {
              for (t.flags |= 128, Cs(u, !1), s = h.updateQueue, s !== null && (t.updateQueue = s, t.flags |= 4), t.subtreeFlags = 0, s = n, n = t.child; n !== null; ) u = n, e = s, u.flags &= 14680066, h = u.alternate, h === null ? (u.childLanes = 0, u.lanes = e, u.child = null, u.subtreeFlags = 0, u.memoizedProps = null, u.memoizedState = null, u.updateQueue = null, u.dependencies = null, u.stateNode = null) : (u.childLanes = h.childLanes, u.lanes = h.lanes, u.child = h.child, u.subtreeFlags = 0, u.deletions = null, u.memoizedProps = h.memoizedProps, u.memoizedState = h.memoizedState, u.updateQueue = h.updateQueue, u.type = h.type, e = h.dependencies, u.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), n = n.sibling;
              return Me(He, He.current & 1 | 2), t.child;
            }
            e = e.sibling;
          }
          u.tail !== null && Be() > $r && (t.flags |= 128, s = !0, Cs(u, !1), t.lanes = 4194304);
        }
        else {
          if (!s) if (e = Co(h), e !== null) {
            if (t.flags |= 128, s = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), Cs(u, !0), u.tail === null && u.tailMode === "hidden" && !h.alternate && !Oe) return at(t), null;
          } else 2 * Be() - u.renderingStartTime > $r && n !== 1073741824 && (t.flags |= 128, s = !0, Cs(u, !1), t.lanes = 4194304);
          u.isBackwards ? (h.sibling = t.child, t.child = h) : (n = u.last, n !== null ? n.sibling = h : t.child = h, u.last = h);
        }
        return u.tail !== null ? (t = u.tail, u.rendering = t, u.tail = t.sibling, u.renderingStartTime = Be(), t.sibling = null, n = He.current, Me(He, s ? n & 1 | 2 : n & 1), t) : (at(t), null);
      case 22:
      case 23:
        return nl(), s = t.memoizedState !== null, e !== null && e.memoizedState !== null !== s && (t.flags |= 8192), s && (t.mode & 1) !== 0 ? (Nt & 1073741824) !== 0 && (at(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : at(t), null;
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(i(156, t.tag));
  }
  function sm(e, t) {
    switch (da(t), t.tag) {
      case 1:
        return yt(t.type) && po(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 3:
        return br(), Le(vt), Le(ot), Ca(), e = t.flags, (e & 65536) !== 0 && (e & 128) === 0 ? (t.flags = e & -65537 | 128, t) : null;
      case 5:
        return ka(t), null;
      case 13:
        if (Le(He), e = t.memoizedState, e !== null && e.dehydrated !== null) {
          if (t.alternate === null) throw Error(i(340));
          jr();
        }
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 19:
        return Le(He), null;
      case 4:
        return br(), null;
      case 10:
        return ya(t.type._context), null;
      case 22:
      case 23:
        return nl(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var $o = !1, lt = !1, om = typeof WeakSet == "function" ? WeakSet : Set, ne = null;
  function Ar(e, t) {
    var n = e.ref;
    if (n !== null) if (typeof n == "function") try {
      n(null);
    } catch (s) {
      We(e, t, s);
    }
    else n.current = null;
  }
  function Ua(e, t, n) {
    try {
      n();
    } catch (s) {
      We(e, t, s);
    }
  }
  var wd = !1;
  function im(e, t) {
    if (na = Xs, e = Zu(), Ki(e)) {
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
          var h = 0, S = -1, T = -1, D = 0, q = 0, Q = e, V = null;
          t: for (; ; ) {
            for (var ee; Q !== n || l !== 0 && Q.nodeType !== 3 || (S = h + l), Q !== u || s !== 0 && Q.nodeType !== 3 || (T = h + s), Q.nodeType === 3 && (h += Q.nodeValue.length), (ee = Q.firstChild) !== null; )
              V = Q, Q = ee;
            for (; ; ) {
              if (Q === e) break t;
              if (V === n && ++D === l && (S = h), V === u && ++q === s && (T = h), (ee = Q.nextSibling) !== null) break;
              Q = V, V = Q.parentNode;
            }
            Q = ee;
          }
          n = S === -1 || T === -1 ? null : { start: S, end: T };
        } else n = null;
      }
      n = n || { start: 0, end: 0 };
    } else n = null;
    for (ra = { focusedElem: e, selectionRange: n }, Xs = !1, ne = t; ne !== null; ) if (t = ne, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, ne = e;
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
              var se = re.memoizedProps, Ue = re.memoizedState, M = t.stateNode, A = M.getSnapshotBeforeUpdate(t.elementType === t.type ? se : Ft(t.type, se), Ue);
              M.__reactInternalSnapshotBeforeUpdate = A;
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
        e.return = t.return, ne = e;
        break;
      }
      ne = t.return;
    }
    return re = wd, wd = !1, re;
  }
  function js(e, t, n) {
    var s = t.updateQueue;
    if (s = s !== null ? s.lastEffect : null, s !== null) {
      var l = s = s.next;
      do {
        if ((l.tag & e) === e) {
          var u = l.destroy;
          l.destroy = void 0, u !== void 0 && Ua(t, n, u);
        }
        l = l.next;
      } while (l !== s);
    }
  }
  function Mo(e, t) {
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
  function Va(e) {
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
    t !== null && (e.alternate = null, kd(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[Xt], delete t[hs], delete t[aa], delete t[Wh], delete t[Bh])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
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
  function qa(e, t, n) {
    var s = e.tag;
    if (s === 5 || s === 6) e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = co));
    else if (s !== 4 && (e = e.child, e !== null)) for (qa(e, t, n), e = e.sibling; e !== null; ) qa(e, t, n), e = e.sibling;
  }
  function Qa(e, t, n) {
    var s = e.tag;
    if (s === 5 || s === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (s !== 4 && (e = e.child, e !== null)) for (Qa(e, t, n), e = e.sibling; e !== null; ) Qa(e, t, n), e = e.sibling;
  }
  var rt = null, Wt = !1;
  function bn(e, t, n) {
    for (n = n.child; n !== null; ) jd(e, t, n), n = n.sibling;
  }
  function jd(e, t, n) {
    if (Jt && typeof Jt.onCommitFiberUnmount == "function") try {
      Jt.onCommitFiberUnmount(qs, n);
    } catch {
    }
    switch (n.tag) {
      case 5:
        lt || Ar(n, t);
      case 6:
        var s = rt, l = Wt;
        rt = null, bn(e, t, n), rt = s, Wt = l, rt !== null && (Wt ? (e = rt, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : rt.removeChild(n.stateNode));
        break;
      case 18:
        rt !== null && (Wt ? (e = rt, n = n.stateNode, e.nodeType === 8 ? ia(e.parentNode, n) : e.nodeType === 1 && ia(e, n), rs(e)) : ia(rt, n.stateNode));
        break;
      case 4:
        s = rt, l = Wt, rt = n.stateNode.containerInfo, Wt = !0, bn(e, t, n), rt = s, Wt = l;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (!lt && (s = n.updateQueue, s !== null && (s = s.lastEffect, s !== null))) {
          l = s = s.next;
          do {
            var u = l, h = u.destroy;
            u = u.tag, h !== void 0 && ((u & 2) !== 0 || (u & 4) !== 0) && Ua(n, t, h), l = l.next;
          } while (l !== s);
        }
        bn(e, t, n);
        break;
      case 1:
        if (!lt && (Ar(n, t), s = n.stateNode, typeof s.componentWillUnmount == "function")) try {
          s.props = n.memoizedProps, s.state = n.memoizedState, s.componentWillUnmount();
        } catch (S) {
          We(n, t, S);
        }
        bn(e, t, n);
        break;
      case 21:
        bn(e, t, n);
        break;
      case 22:
        n.mode & 1 ? (lt = (s = lt) || n.memoizedState !== null, bn(e, t, n), lt = s) : bn(e, t, n);
        break;
      default:
        bn(e, t, n);
    }
  }
  function Ed(e) {
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
        var u = e, h = t, S = h;
        e: for (; S !== null; ) {
          switch (S.tag) {
            case 5:
              rt = S.stateNode, Wt = !1;
              break e;
            case 3:
              rt = S.stateNode.containerInfo, Wt = !0;
              break e;
            case 4:
              rt = S.stateNode.containerInfo, Wt = !0;
              break e;
          }
          S = S.return;
        }
        if (rt === null) throw Error(i(160));
        jd(u, h, l), rt = null, Wt = !1;
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
        if (Bt(t, e), tn(e), s & 4) {
          try {
            js(3, e, e.return), Mo(3, e);
          } catch (se) {
            We(e, e.return, se);
          }
          try {
            js(5, e, e.return);
          } catch (se) {
            We(e, e.return, se);
          }
        }
        break;
      case 1:
        Bt(t, e), tn(e), s & 512 && n !== null && Ar(n, n.return);
        break;
      case 5:
        if (Bt(t, e), tn(e), s & 512 && n !== null && Ar(n, n.return), e.flags & 32) {
          var l = e.stateNode;
          try {
            qr(l, "");
          } catch (se) {
            We(e, e.return, se);
          }
        }
        if (s & 4 && (l = e.stateNode, l != null)) {
          var u = e.memoizedProps, h = n !== null ? n.memoizedProps : u, S = e.type, T = e.updateQueue;
          if (e.updateQueue = null, T !== null) try {
            S === "input" && u.type === "radio" && u.name != null && tu(l, u), Ci(S, h);
            var D = Ci(S, u);
            for (h = 0; h < T.length; h += 2) {
              var q = T[h], Q = T[h + 1];
              q === "style" ? uu(l, Q) : q === "dangerouslySetInnerHTML" ? au(l, Q) : q === "children" ? qr(l, Q) : $(l, q, Q, D);
            }
            switch (S) {
              case "input":
                _i(l, u);
                break;
              case "textarea":
                su(l, u);
                break;
              case "select":
                var V = l._wrapperState.wasMultiple;
                l._wrapperState.wasMultiple = !!u.multiple;
                var ee = u.value;
                ee != null ? cr(l, !!u.multiple, ee, !1) : V !== !!u.multiple && (u.defaultValue != null ? cr(
                  l,
                  !!u.multiple,
                  u.defaultValue,
                  !0
                ) : cr(l, !!u.multiple, u.multiple ? [] : "", !1));
            }
            l[hs] = u;
          } catch (se) {
            We(e, e.return, se);
          }
        }
        break;
      case 6:
        if (Bt(t, e), tn(e), s & 4) {
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
        if (Bt(t, e), tn(e), s & 4 && n !== null && n.memoizedState.isDehydrated) try {
          rs(t.containerInfo);
        } catch (se) {
          We(e, e.return, se);
        }
        break;
      case 4:
        Bt(t, e), tn(e);
        break;
      case 13:
        Bt(t, e), tn(e), l = e.child, l.flags & 8192 && (u = l.memoizedState !== null, l.stateNode.isHidden = u, !u || l.alternate !== null && l.alternate.memoizedState !== null || (Ga = Be())), s & 4 && Ed(e);
        break;
      case 22:
        if (q = n !== null && n.memoizedState !== null, e.mode & 1 ? (lt = (D = lt) || q, Bt(t, e), lt = D) : Bt(t, e), tn(e), s & 8192) {
          if (D = e.memoizedState !== null, (e.stateNode.isHidden = D) && !q && (e.mode & 1) !== 0) for (ne = e, q = e.child; q !== null; ) {
            for (Q = ne = q; ne !== null; ) {
              switch (V = ne, ee = V.child, V.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                  js(4, V, V.return);
                  break;
                case 1:
                  Ar(V, V.return);
                  var re = V.stateNode;
                  if (typeof re.componentWillUnmount == "function") {
                    s = V, n = V.return;
                    try {
                      t = s, re.props = t.memoizedProps, re.state = t.memoizedState, re.componentWillUnmount();
                    } catch (se) {
                      We(s, n, se);
                    }
                  }
                  break;
                case 5:
                  Ar(V, V.return);
                  break;
                case 22:
                  if (V.memoizedState !== null) {
                    Rd(Q);
                    continue;
                  }
              }
              ee !== null ? (ee.return = V, ne = ee) : Rd(Q);
            }
            q = q.sibling;
          }
          e: for (q = null, Q = e; ; ) {
            if (Q.tag === 5) {
              if (q === null) {
                q = Q;
                try {
                  l = Q.stateNode, D ? (u = l.style, typeof u.setProperty == "function" ? u.setProperty("display", "none", "important") : u.display = "none") : (S = Q.stateNode, T = Q.memoizedProps.style, h = T != null && T.hasOwnProperty("display") ? T.display : null, S.style.display = lu("display", h));
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
        Bt(t, e), tn(e), s & 4 && Ed(e);
        break;
      case 21:
        break;
      default:
        Bt(
          t,
          e
        ), tn(e);
    }
  }
  function tn(e) {
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
            s.flags & 32 && (qr(l, ""), s.flags &= -33);
            var u = Cd(e);
            Qa(e, u, l);
            break;
          case 3:
          case 4:
            var h = s.stateNode.containerInfo, S = Cd(e);
            qa(e, S, h);
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
  function am(e, t, n) {
    ne = e, Td(e);
  }
  function Td(e, t, n) {
    for (var s = (e.mode & 1) !== 0; ne !== null; ) {
      var l = ne, u = l.child;
      if (l.tag === 22 && s) {
        var h = l.memoizedState !== null || $o;
        if (!h) {
          var S = l.alternate, T = S !== null && S.memoizedState !== null || lt;
          S = $o;
          var D = lt;
          if ($o = h, (lt = T) && !D) for (ne = l; ne !== null; ) h = ne, T = h.child, h.tag === 22 && h.memoizedState !== null ? Ad(l) : T !== null ? (T.return = h, ne = T) : Ad(l);
          for (; u !== null; ) ne = u, Td(u), u = u.sibling;
          ne = l, $o = S, lt = D;
        }
        bd(e);
      } else (l.subtreeFlags & 8772) !== 0 && u !== null ? (u.return = l, ne = u) : bd(e);
    }
  }
  function bd(e) {
    for (; ne !== null; ) {
      var t = ne;
      if ((t.flags & 8772) !== 0) {
        var n = t.alternate;
        try {
          if ((t.flags & 8772) !== 0) switch (t.tag) {
            case 0:
            case 11:
            case 15:
              lt || Mo(5, t);
              break;
            case 1:
              var s = t.stateNode;
              if (t.flags & 4 && !lt) if (n === null) s.componentDidMount();
              else {
                var l = t.elementType === t.type ? n.memoizedProps : Ft(t.type, n.memoizedProps);
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
                    Q !== null && rs(Q);
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
          lt || t.flags & 512 && Va(t);
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
  function Rd(e) {
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
  function Ad(e) {
    for (; ne !== null; ) {
      var t = ne;
      try {
        switch (t.tag) {
          case 0:
          case 11:
          case 15:
            var n = t.return;
            try {
              Mo(4, t);
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
              Va(t);
            } catch (T) {
              We(t, u, T);
            }
            break;
          case 5:
            var h = t.return;
            try {
              Va(t);
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
      var S = t.sibling;
      if (S !== null) {
        S.return = t.return, ne = S;
        break;
      }
      ne = t.return;
    }
  }
  var lm = Math.ceil, Io = z.ReactCurrentDispatcher, Ka = z.ReactCurrentOwner, Mt = z.ReactCurrentBatchConfig, je = 0, Ze = null, Ve = null, st = 0, Nt = 0, Pr = Cn(0), Qe = 0, Es = null, Qn = 0, Lo = 0, Ya = 0, Ns = null, _t = null, Ga = 0, $r = 1 / 0, pn = null, Do = !1, Ja = null, Rn = null, Oo = !1, An = null, zo = 0, Ts = 0, Xa = null, Ho = -1, Fo = 0;
  function ft() {
    return (je & 6) !== 0 ? Be() : Ho !== -1 ? Ho : Ho = Be();
  }
  function Pn(e) {
    return (e.mode & 1) === 0 ? 1 : (je & 2) !== 0 && st !== 0 ? st & -st : Vh.transition !== null ? (Fo === 0 && (Fo = Cu()), Fo) : (e = Pe, e !== 0 || (e = window.event, e = e === void 0 ? 16 : $u(e.type)), e);
  }
  function Ut(e, t, n, s) {
    if (50 < Ts) throw Ts = 0, Xa = null, Error(i(185));
    Xr(e, n, s), ((je & 2) === 0 || e !== Ze) && (e === Ze && ((je & 2) === 0 && (Lo |= n), Qe === 4 && $n(e, st)), xt(e, s), n === 1 && je === 0 && (t.mode & 1) === 0 && ($r = Be() + 500, mo && En()));
  }
  function xt(e, t) {
    var n = e.callbackNode;
    Vp(e, t);
    var s = Ys(e, e === Ze ? st : 0);
    if (s === 0) n !== null && wu(n), e.callbackNode = null, e.callbackPriority = 0;
    else if (t = s & -s, e.callbackPriority !== t) {
      if (n != null && wu(n), t === 1) e.tag === 0 ? Uh($d.bind(null, e)) : gc($d.bind(null, e)), Hh(function() {
        (je & 6) === 0 && En();
      }), n = null;
      else {
        switch (ju(s)) {
          case 1:
            n = Ai;
            break;
          case 4:
            n = ku;
            break;
          case 16:
            n = Vs;
            break;
          case 536870912:
            n = Su;
            break;
          default:
            n = Vs;
        }
        n = Fd(n, Pd.bind(null, e));
      }
      e.callbackPriority = t, e.callbackNode = n;
    }
  }
  function Pd(e, t) {
    if (Ho = -1, Fo = 0, (je & 6) !== 0) throw Error(i(327));
    var n = e.callbackNode;
    if (Mr() && e.callbackNode !== n) return null;
    var s = Ys(e, e === Ze ? st : 0);
    if (s === 0) return null;
    if ((s & 30) !== 0 || (s & e.expiredLanes) !== 0 || t) t = Wo(e, s);
    else {
      t = s;
      var l = je;
      je |= 2;
      var u = Id();
      (Ze !== e || st !== t) && (pn = null, $r = Be() + 500, Yn(e, t));
      do
        try {
          dm();
          break;
        } catch (S) {
          Md(e, S);
        }
      while (!0);
      va(), Io.current = u, je = l, Ve !== null ? t = 0 : (Ze = null, st = 0, t = Qe);
    }
    if (t !== 0) {
      if (t === 2 && (l = Pi(e), l !== 0 && (s = l, t = Za(e, l))), t === 1) throw n = Es, Yn(e, 0), $n(e, s), xt(e, Be()), n;
      if (t === 6) $n(e, s);
      else {
        if (l = e.current.alternate, (s & 30) === 0 && !um(l) && (t = Wo(e, s), t === 2 && (u = Pi(e), u !== 0 && (s = u, t = Za(e, u))), t === 1)) throw n = Es, Yn(e, 0), $n(e, s), xt(e, Be()), n;
        switch (e.finishedWork = l, e.finishedLanes = s, t) {
          case 0:
          case 1:
            throw Error(i(345));
          case 2:
            Gn(e, _t, pn);
            break;
          case 3:
            if ($n(e, s), (s & 130023424) === s && (t = Ga + 500 - Be(), 10 < t)) {
              if (Ys(e, 0) !== 0) break;
              if (l = e.suspendedLanes, (l & s) !== s) {
                ft(), e.pingedLanes |= e.suspendedLanes & l;
                break;
              }
              e.timeoutHandle = oa(Gn.bind(null, e, _t, pn), t);
              break;
            }
            Gn(e, _t, pn);
            break;
          case 4:
            if ($n(e, s), (s & 4194240) === s) break;
            for (t = e.eventTimes, l = -1; 0 < s; ) {
              var h = 31 - Ot(s);
              u = 1 << h, h = t[h], h > l && (l = h), s &= ~u;
            }
            if (s = l, s = Be() - s, s = (120 > s ? 120 : 480 > s ? 480 : 1080 > s ? 1080 : 1920 > s ? 1920 : 3e3 > s ? 3e3 : 4320 > s ? 4320 : 1960 * lm(s / 1960)) - s, 10 < s) {
              e.timeoutHandle = oa(Gn.bind(null, e, _t, pn), s);
              break;
            }
            Gn(e, _t, pn);
            break;
          case 5:
            Gn(e, _t, pn);
            break;
          default:
            throw Error(i(329));
        }
      }
    }
    return xt(e, Be()), e.callbackNode === n ? Pd.bind(null, e) : null;
  }
  function Za(e, t) {
    var n = Ns;
    return e.current.memoizedState.isDehydrated && (Yn(e, t).flags |= 256), e = Wo(e, t), e !== 2 && (t = _t, _t = n, t !== null && el(t)), e;
  }
  function el(e) {
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
  function $n(e, t) {
    for (t &= ~Ya, t &= ~Lo, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
      var n = 31 - Ot(t), s = 1 << n;
      e[n] = -1, t &= ~s;
    }
  }
  function $d(e) {
    if ((je & 6) !== 0) throw Error(i(327));
    Mr();
    var t = Ys(e, 0);
    if ((t & 1) === 0) return xt(e, Be()), null;
    var n = Wo(e, t);
    if (e.tag !== 0 && n === 2) {
      var s = Pi(e);
      s !== 0 && (t = s, n = Za(e, s));
    }
    if (n === 1) throw n = Es, Yn(e, 0), $n(e, t), xt(e, Be()), n;
    if (n === 6) throw Error(i(345));
    return e.finishedWork = e.current.alternate, e.finishedLanes = t, Gn(e, _t, pn), xt(e, Be()), null;
  }
  function tl(e, t) {
    var n = je;
    je |= 1;
    try {
      return e(t);
    } finally {
      je = n, je === 0 && ($r = Be() + 500, mo && En());
    }
  }
  function Kn(e) {
    An !== null && An.tag === 0 && (je & 6) === 0 && Mr();
    var t = je;
    je |= 1;
    var n = Mt.transition, s = Pe;
    try {
      if (Mt.transition = null, Pe = 1, e) return e();
    } finally {
      Pe = s, Mt.transition = n, je = t, (je & 6) === 0 && En();
    }
  }
  function nl() {
    Nt = Pr.current, Le(Pr);
  }
  function Yn(e, t) {
    e.finishedWork = null, e.finishedLanes = 0;
    var n = e.timeoutHandle;
    if (n !== -1 && (e.timeoutHandle = -1, zh(n)), Ve !== null) for (n = Ve.return; n !== null; ) {
      var s = n;
      switch (da(s), s.tag) {
        case 1:
          s = s.type.childContextTypes, s != null && po();
          break;
        case 3:
          br(), Le(vt), Le(ot), Ca();
          break;
        case 5:
          ka(s);
          break;
        case 4:
          br();
          break;
        case 13:
          Le(He);
          break;
        case 19:
          Le(He);
          break;
        case 10:
          ya(s.type._context);
          break;
        case 22:
        case 23:
          nl();
      }
      n = n.return;
    }
    if (Ze = e, Ve = e = Mn(e.current, null), st = Nt = t, Qe = 0, Es = null, Ya = Lo = Qn = 0, _t = Ns = null, Un !== null) {
      for (t = 0; t < Un.length; t++) if (n = Un[t], s = n.interleaved, s !== null) {
        n.interleaved = null;
        var l = s.next, u = n.pending;
        if (u !== null) {
          var h = u.next;
          u.next = l, s.next = h;
        }
        n.pending = s;
      }
      Un = null;
    }
    return e;
  }
  function Md(e, t) {
    do {
      var n = Ve;
      try {
        if (va(), jo.current = bo, Eo) {
          for (var s = Fe.memoizedState; s !== null; ) {
            var l = s.queue;
            l !== null && (l.pending = null), s = s.next;
          }
          Eo = !1;
        }
        if (qn = 0, Xe = qe = Fe = null, xs = !1, ws = 0, Ka.current = null, n === null || n.return === null) {
          Qe = 1, Es = t, Ve = null;
          break;
        }
        e: {
          var u = e, h = n.return, S = n, T = t;
          if (t = st, S.flags |= 32768, T !== null && typeof T == "object" && typeof T.then == "function") {
            var D = T, q = S, Q = q.tag;
            if ((q.mode & 1) === 0 && (Q === 0 || Q === 11 || Q === 15)) {
              var V = q.alternate;
              V ? (q.updateQueue = V.updateQueue, q.memoizedState = V.memoizedState, q.lanes = V.lanes) : (q.updateQueue = null, q.memoizedState = null);
            }
            var ee = od(h);
            if (ee !== null) {
              ee.flags &= -257, id(ee, h, S, u, t), ee.mode & 1 && sd(u, D, t), t = ee, T = D;
              var re = t.updateQueue;
              if (re === null) {
                var se = /* @__PURE__ */ new Set();
                se.add(T), t.updateQueue = se;
              } else re.add(T);
              break e;
            } else {
              if ((t & 1) === 0) {
                sd(u, D, t), rl();
                break e;
              }
              T = Error(i(426));
            }
          } else if (Oe && S.mode & 1) {
            var Ue = od(h);
            if (Ue !== null) {
              (Ue.flags & 65536) === 0 && (Ue.flags |= 256), id(Ue, h, S, u, t), ha(Rr(T, S));
              break e;
            }
          }
          u = T = Rr(T, S), Qe !== 4 && (Qe = 2), Ns === null ? Ns = [u] : Ns.push(u), u = h;
          do {
            switch (u.tag) {
              case 3:
                u.flags |= 65536, t &= -t, u.lanes |= t;
                var M = nd(u, T, t);
                bc(u, M);
                break e;
              case 1:
                S = T;
                var A = u.type, L = u.stateNode;
                if ((u.flags & 128) === 0 && (typeof A.getDerivedStateFromError == "function" || L !== null && typeof L.componentDidCatch == "function" && (Rn === null || !Rn.has(L)))) {
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
      } catch (ie) {
        t = ie, Ve === n && n !== null && (Ve = n = n.return);
        continue;
      }
      break;
    } while (!0);
  }
  function Id() {
    var e = Io.current;
    return Io.current = bo, e === null ? bo : e;
  }
  function rl() {
    (Qe === 0 || Qe === 3 || Qe === 2) && (Qe = 4), Ze === null || (Qn & 268435455) === 0 && (Lo & 268435455) === 0 || $n(Ze, st);
  }
  function Wo(e, t) {
    var n = je;
    je |= 2;
    var s = Id();
    (Ze !== e || st !== t) && (pn = null, Yn(e, t));
    do
      try {
        cm();
        break;
      } catch (l) {
        Md(e, l);
      }
    while (!0);
    if (va(), je = n, Io.current = s, Ve !== null) throw Error(i(261));
    return Ze = null, st = 0, Qe;
  }
  function cm() {
    for (; Ve !== null; ) Ld(Ve);
  }
  function dm() {
    for (; Ve !== null && !Lp(); ) Ld(Ve);
  }
  function Ld(e) {
    var t = Hd(e.alternate, e, Nt);
    e.memoizedProps = e.pendingProps, t === null ? Dd(e) : Ve = t, Ka.current = null;
  }
  function Dd(e) {
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
  function Gn(e, t, n) {
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
      Mr();
    while (An !== null);
    if ((je & 6) !== 0) throw Error(i(327));
    n = e.finishedWork;
    var l = e.finishedLanes;
    if (n === null) return null;
    if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(i(177));
    e.callbackNode = null, e.callbackPriority = 0;
    var u = n.lanes | n.childLanes;
    if (qp(e, u), e === Ze && (Ve = Ze = null, st = 0), (n.subtreeFlags & 2064) === 0 && (n.flags & 2064) === 0 || Oo || (Oo = !0, Fd(Vs, function() {
      return Mr(), null;
    })), u = (n.flags & 15990) !== 0, (n.subtreeFlags & 15990) !== 0 || u) {
      u = Mt.transition, Mt.transition = null;
      var h = Pe;
      Pe = 1;
      var S = je;
      je |= 4, Ka.current = null, im(e, n), Nd(n, e), Ph(ra), Xs = !!na, ra = na = null, e.current = n, am(n), Dp(), je = S, Pe = h, Mt.transition = u;
    } else e.current = n;
    if (Oo && (Oo = !1, An = e, zo = l), u = e.pendingLanes, u === 0 && (Rn = null), Hp(n.stateNode), xt(e, Be()), t !== null) for (s = e.onRecoverableError, n = 0; n < t.length; n++) l = t[n], s(l.value, { componentStack: l.stack, digest: l.digest });
    if (Do) throw Do = !1, e = Ja, Ja = null, e;
    return (zo & 1) !== 0 && e.tag !== 0 && Mr(), u = e.pendingLanes, (u & 1) !== 0 ? e === Xa ? Ts++ : (Ts = 0, Xa = e) : Ts = 0, En(), null;
  }
  function Mr() {
    if (An !== null) {
      var e = ju(zo), t = Mt.transition, n = Pe;
      try {
        if (Mt.transition = null, Pe = 16 > e ? 16 : e, An === null) var s = !1;
        else {
          if (e = An, An = null, zo = 0, (je & 6) !== 0) throw Error(i(331));
          var l = je;
          for (je |= 4, ne = e.current; ne !== null; ) {
            var u = ne, h = u.child;
            if ((ne.flags & 16) !== 0) {
              var S = u.deletions;
              if (S !== null) {
                for (var T = 0; T < S.length; T++) {
                  var D = S[T];
                  for (ne = D; ne !== null; ) {
                    var q = ne;
                    switch (q.tag) {
                      case 0:
                      case 11:
                      case 15:
                        js(8, q, u);
                    }
                    var Q = q.child;
                    if (Q !== null) Q.return = q, ne = Q;
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
                      var Ue = se.sibling;
                      se.sibling = null, se = Ue;
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
              var M = u.sibling;
              if (M !== null) {
                M.return = u.return, ne = M;
                break e;
              }
              ne = u.return;
            }
          }
          var A = e.current;
          for (ne = A; ne !== null; ) {
            h = ne;
            var L = h.child;
            if ((h.subtreeFlags & 2064) !== 0 && L !== null) L.return = h, ne = L;
            else e: for (h = A; ne !== null; ) {
              if (S = ne, (S.flags & 2048) !== 0) try {
                switch (S.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Mo(9, S);
                }
              } catch (ie) {
                We(S, S.return, ie);
              }
              if (S === h) {
                ne = null;
                break e;
              }
              var Y = S.sibling;
              if (Y !== null) {
                Y.return = S.return, ne = Y;
                break e;
              }
              ne = S.return;
            }
          }
          if (je = l, En(), Jt && typeof Jt.onPostCommitFiberRoot == "function") try {
            Jt.onPostCommitFiberRoot(qs, e);
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
  function Od(e, t, n) {
    t = Rr(n, t), t = nd(e, t, 1), e = Tn(e, t, 1), t = ft(), e !== null && (Xr(e, 1, t), xt(e, t));
  }
  function We(e, t, n) {
    if (e.tag === 3) Od(e, e, n);
    else for (; t !== null; ) {
      if (t.tag === 3) {
        Od(t, e, n);
        break;
      } else if (t.tag === 1) {
        var s = t.stateNode;
        if (typeof t.type.getDerivedStateFromError == "function" || typeof s.componentDidCatch == "function" && (Rn === null || !Rn.has(s))) {
          e = Rr(n, e), e = rd(t, e, 1), t = Tn(t, e, 1), e = ft(), t !== null && (Xr(t, 1, e), xt(t, e));
          break;
        }
      }
      t = t.return;
    }
  }
  function pm(e, t, n) {
    var s = e.pingCache;
    s !== null && s.delete(t), t = ft(), e.pingedLanes |= e.suspendedLanes & n, Ze === e && (st & n) === n && (Qe === 4 || Qe === 3 && (st & 130023424) === st && 500 > Be() - Ga ? Yn(e, 0) : Ya |= n), xt(e, t);
  }
  function zd(e, t) {
    t === 0 && ((e.mode & 1) === 0 ? t = 1 : (t = Ks, Ks <<= 1, (Ks & 130023424) === 0 && (Ks = 4194304)));
    var n = ft();
    e = cn(e, t), e !== null && (Xr(e, t, n), xt(e, n));
  }
  function hm(e) {
    var t = e.memoizedState, n = 0;
    t !== null && (n = t.retryLane), zd(e, n);
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
        throw Error(i(314));
    }
    s !== null && s.delete(t), zd(e, n);
  }
  var Hd;
  Hd = function(e, t, n) {
    if (e !== null) if (e.memoizedProps !== t.pendingProps || vt.current) gt = !0;
    else {
      if ((e.lanes & n) === 0 && (t.flags & 128) === 0) return gt = !1, nm(e, t, n);
      gt = (e.flags & 131072) !== 0;
    }
    else gt = !1, Oe && (t.flags & 1048576) !== 0 && _c(t, yo, t.index);
    switch (t.lanes = 0, t.tag) {
      case 2:
        var s = t.type;
        Po(e, t), e = t.pendingProps;
        var l = kr(t, ot.current);
        Tr(t, n), l = Na(null, t, s, e, l, n);
        var u = Ta();
        return t.flags |= 1, typeof l == "object" && l !== null && typeof l.render == "function" && l.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, yt(s) ? (u = !0, ho(t)) : u = !1, t.memoizedState = l.state !== null && l.state !== void 0 ? l.state : null, xa(t), l.updater = Ro, t.stateNode = l, l._reactInternals = t, Ma(t, s, e, n), t = Oa(null, t, s, !0, u, n)) : (t.tag = 0, Oe && u && ca(t), dt(null, t, l, n), t = t.child), t;
      case 16:
        s = t.elementType;
        e: {
          switch (Po(e, t), e = t.pendingProps, l = s._init, s = l(s._payload), t.type = s, l = t.tag = ym(s), e = Ft(s, e), l) {
            case 0:
              t = Da(null, t, s, e, n);
              break e;
            case 1:
              t = fd(null, t, s, e, n);
              break e;
            case 11:
              t = ad(null, t, s, e, n);
              break e;
            case 14:
              t = ld(null, t, s, Ft(s.type, e), n);
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
        return s = t.type, l = t.pendingProps, l = t.elementType === s ? l : Ft(s, l), Da(e, t, s, l, n);
      case 1:
        return s = t.type, l = t.pendingProps, l = t.elementType === s ? l : Ft(s, l), fd(e, t, s, l, n);
      case 3:
        e: {
          if (pd(t), e === null) throw Error(i(387));
          s = t.pendingProps, u = t.memoizedState, l = u.element, Tc(e, t), So(t, s, null, n);
          var h = t.memoizedState;
          if (s = h.element, u.isDehydrated) if (u = { element: s, isDehydrated: !1, cache: h.cache, pendingSuspenseBoundaries: h.pendingSuspenseBoundaries, transitions: h.transitions }, t.updateQueue.baseState = u, t.memoizedState = u, t.flags & 256) {
            l = Rr(Error(i(423)), t), t = hd(e, t, s, n, l);
            break e;
          } else if (s !== l) {
            l = Rr(Error(i(424)), t), t = hd(e, t, s, n, l);
            break e;
          } else for (Et = Sn(t.stateNode.containerInfo.firstChild), jt = t, Oe = !0, Ht = null, n = Ec(t, null, s, n), t.child = n; n; ) n.flags = n.flags & -3 | 4096, n = n.sibling;
          else {
            if (jr(), s === l) {
              t = fn(e, t, n);
              break e;
            }
            dt(e, t, s, n);
          }
          t = t.child;
        }
        return t;
      case 5:
        return Ac(t), e === null && pa(t), s = t.type, l = t.pendingProps, u = e !== null ? e.memoizedProps : null, h = l.children, sa(s, l) ? h = null : u !== null && sa(s, u) && (t.flags |= 32), dd(e, t), dt(e, t, h, n), t.child;
      case 6:
        return e === null && pa(t), null;
      case 13:
        return md(e, t, n);
      case 4:
        return wa(t, t.stateNode.containerInfo), s = t.pendingProps, e === null ? t.child = Er(t, null, s, n) : dt(e, t, s, n), t.child;
      case 11:
        return s = t.type, l = t.pendingProps, l = t.elementType === s ? l : Ft(s, l), ad(e, t, s, l, n);
      case 7:
        return dt(e, t, t.pendingProps, n), t.child;
      case 8:
        return dt(e, t, t.pendingProps.children, n), t.child;
      case 12:
        return dt(e, t, t.pendingProps.children, n), t.child;
      case 10:
        e: {
          if (s = t.type._context, l = t.pendingProps, u = t.memoizedProps, h = l.value, Me(xo, s._currentValue), s._currentValue = h, u !== null) if (zt(u.value, h)) {
            if (u.children === l.children && !vt.current) {
              t = fn(e, t, n);
              break e;
            }
          } else for (u = t.child, u !== null && (u.return = t); u !== null; ) {
            var S = u.dependencies;
            if (S !== null) {
              h = u.child;
              for (var T = S.firstContext; T !== null; ) {
                if (T.context === s) {
                  if (u.tag === 1) {
                    T = dn(-1, n & -n), T.tag = 2;
                    var D = u.updateQueue;
                    if (D !== null) {
                      D = D.shared;
                      var q = D.pending;
                      q === null ? T.next = T : (T.next = q.next, q.next = T), D.pending = T;
                    }
                  }
                  u.lanes |= n, T = u.alternate, T !== null && (T.lanes |= n), ga(
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
              if (h = u.return, h === null) throw Error(i(341));
              h.lanes |= n, S = h.alternate, S !== null && (S.lanes |= n), ga(h, n, t), h = u.sibling;
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
        return l = t.type, s = t.pendingProps.children, Tr(t, n), l = Pt(l), s = s(l), t.flags |= 1, dt(e, t, s, n), t.child;
      case 14:
        return s = t.type, l = Ft(s, t.pendingProps), l = Ft(s.type, l), ld(e, t, s, l, n);
      case 15:
        return ud(e, t, t.type, t.pendingProps, n);
      case 17:
        return s = t.type, l = t.pendingProps, l = t.elementType === s ? l : Ft(s, l), Po(e, t), t.tag = 1, yt(s) ? (e = !0, ho(t)) : e = !1, Tr(t, n), ed(t, s, l), Ma(t, s, l, n), Oa(null, t, s, !0, e, n);
      case 19:
        return yd(e, t, n);
      case 22:
        return cd(e, t, n);
    }
    throw Error(i(156, t.tag));
  };
  function Fd(e, t) {
    return xu(e, t);
  }
  function vm(e, t, n, s) {
    this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = s, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function It(e, t, n, s) {
    return new vm(e, t, n, s);
  }
  function sl(e) {
    return e = e.prototype, !(!e || !e.isReactComponent);
  }
  function ym(e) {
    if (typeof e == "function") return sl(e) ? 1 : 0;
    if (e != null) {
      if (e = e.$$typeof, e === ge) return 11;
      if (e === te) return 14;
    }
    return 2;
  }
  function Mn(e, t) {
    var n = e.alternate;
    return n === null ? (n = It(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n;
  }
  function Bo(e, t, n, s, l, u) {
    var h = 2;
    if (s = e, typeof e == "function") sl(e) && (h = 1);
    else if (typeof e == "string") h = 5;
    else e: switch (e) {
      case J:
        return Jn(n.children, l, u, t);
      case B:
        h = 8, l |= 8;
        break;
      case G:
        return e = It(12, n, t, l | 2), e.elementType = G, e.lanes = u, e;
      case he:
        return e = It(13, n, t, l), e.elementType = he, e.lanes = u, e;
      case _e:
        return e = It(19, n, t, l), e.elementType = _e, e.lanes = u, e;
      case F:
        return Uo(n, l, u, t);
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
        throw Error(i(130, e == null ? e : typeof e, ""));
    }
    return t = It(h, n, t, l), t.elementType = e, t.type = s, t.lanes = u, t;
  }
  function Jn(e, t, n, s) {
    return e = It(7, e, s, t), e.lanes = n, e;
  }
  function Uo(e, t, n, s) {
    return e = It(22, e, s, t), e.elementType = F, e.lanes = n, e.stateNode = { isHidden: !1 }, e;
  }
  function ol(e, t, n) {
    return e = It(6, e, null, t), e.lanes = n, e;
  }
  function il(e, t, n) {
    return t = It(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
  }
  function gm(e, t, n, s, l) {
    this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = $i(0), this.expirationTimes = $i(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = $i(0), this.identifierPrefix = s, this.onRecoverableError = l, this.mutableSourceEagerHydrationData = null;
  }
  function al(e, t, n, s, l, u, h, S, T) {
    return e = new gm(e, t, n, S, T), t === 1 ? (t = 1, u === !0 && (t |= 8)) : t = 0, u = It(3, null, null, t), e.current = u, u.stateNode = e, u.memoizedState = { element: s, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }, xa(u), e;
  }
  function _m(e, t, n) {
    var s = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: I, key: s == null ? null : "" + s, children: e, containerInfo: t, implementation: n };
  }
  function Wd(e) {
    if (!e) return jn;
    e = e._reactInternals;
    e: {
      if (zn(e) !== e || e.tag !== 1) throw Error(i(170));
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
      throw Error(i(171));
    }
    if (e.tag === 1) {
      var n = e.type;
      if (yt(n)) return vc(e, n, t);
    }
    return t;
  }
  function Bd(e, t, n, s, l, u, h, S, T) {
    return e = al(n, s, !0, e, l, u, h, S, T), e.context = Wd(null), n = e.current, s = ft(), l = Pn(n), u = dn(s, l), u.callback = t ?? null, Tn(n, u, l), e.current.lanes = l, Xr(e, l, s), xt(e, s), e;
  }
  function Vo(e, t, n, s) {
    var l = t.current, u = ft(), h = Pn(l);
    return n = Wd(n), t.context === null ? t.context = n : t.pendingContext = n, t = dn(u, h), t.payload = { element: e }, s = s === void 0 ? null : s, s !== null && (t.callback = s), e = Tn(l, t, h), e !== null && (Ut(e, l, h, u), ko(e, l, h)), h;
  }
  function qo(e) {
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
  function ll(e, t) {
    Ud(e, t), (e = e.alternate) && Ud(e, t);
  }
  function xm() {
    return null;
  }
  var Vd = typeof reportError == "function" ? reportError : function(e) {
    console.error(e);
  };
  function ul(e) {
    this._internalRoot = e;
  }
  Qo.prototype.render = ul.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null) throw Error(i(409));
    Vo(e, t, null, null);
  }, Qo.prototype.unmount = ul.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
      this._internalRoot = null;
      var t = e.containerInfo;
      Kn(function() {
        Vo(null, e, null, null);
      }), t[on] = null;
    }
  };
  function Qo(e) {
    this._internalRoot = e;
  }
  Qo.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
      var t = Tu();
      e = { blockedOn: null, target: e, priority: t };
      for (var n = 0; n < xn.length && t !== 0 && t < xn[n].priority; n++) ;
      xn.splice(n, 0, e), n === 0 && Au(e);
    }
  };
  function cl(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
  }
  function Ko(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
  }
  function qd() {
  }
  function wm(e, t, n, s, l) {
    if (l) {
      if (typeof s == "function") {
        var u = s;
        s = function() {
          var D = qo(h);
          u.call(D);
        };
      }
      var h = Bd(t, s, e, 0, null, !1, !1, "", qd);
      return e._reactRootContainer = h, e[on] = h.current, fs(e.nodeType === 8 ? e.parentNode : e), Kn(), h;
    }
    for (; l = e.lastChild; ) e.removeChild(l);
    if (typeof s == "function") {
      var S = s;
      s = function() {
        var D = qo(T);
        S.call(D);
      };
    }
    var T = al(e, 0, !1, null, null, !1, !1, "", qd);
    return e._reactRootContainer = T, e[on] = T.current, fs(e.nodeType === 8 ? e.parentNode : e), Kn(function() {
      Vo(t, T, n, s);
    }), T;
  }
  function Yo(e, t, n, s, l) {
    var u = n._reactRootContainer;
    if (u) {
      var h = u;
      if (typeof l == "function") {
        var S = l;
        l = function() {
          var T = qo(h);
          S.call(T);
        };
      }
      Vo(t, h, e, l);
    } else h = wm(n, t, e, l, s);
    return qo(h);
  }
  Eu = function(e) {
    switch (e.tag) {
      case 3:
        var t = e.stateNode;
        if (t.current.memoizedState.isDehydrated) {
          var n = Jr(t.pendingLanes);
          n !== 0 && (Mi(t, n | 1), xt(t, Be()), (je & 6) === 0 && ($r = Be() + 500, En()));
        }
        break;
      case 13:
        Kn(function() {
          var s = cn(e, 1);
          if (s !== null) {
            var l = ft();
            Ut(s, e, 1, l);
          }
        }), ll(e, 1);
    }
  }, Ii = function(e) {
    if (e.tag === 13) {
      var t = cn(e, 134217728);
      if (t !== null) {
        var n = ft();
        Ut(t, e, 134217728, n);
      }
      ll(e, 134217728);
    }
  }, Nu = function(e) {
    if (e.tag === 13) {
      var t = Pn(e), n = cn(e, t);
      if (n !== null) {
        var s = ft();
        Ut(n, e, t, s);
      }
      ll(e, t);
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
  }, Ni = function(e, t, n) {
    switch (t) {
      case "input":
        if (_i(e, n), t = n.name, n.type === "radio" && t != null) {
          for (n = e; n.parentNode; ) n = n.parentNode;
          for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
            var s = n[t];
            if (s !== e && s.form === e.form) {
              var l = fo(s);
              if (!l) throw Error(i(90));
              De(s), _i(s, l);
            }
          }
        }
        break;
      case "textarea":
        su(e, n);
        break;
      case "select":
        t = n.value, t != null && cr(e, !!n.multiple, t, !1);
    }
  }, pu = tl, hu = Kn;
  var km = { usingClientEntryPoint: !1, Events: [ms, xr, fo, du, fu, tl] }, bs = { findFiberByHostInstance: Hn, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, Sm = { bundleType: bs.bundleType, version: bs.version, rendererPackageName: bs.rendererPackageName, rendererConfig: bs.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: z.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
    return e = gu(e), e === null ? null : e.stateNode;
  }, findFiberByHostInstance: bs.findFiberByHostInstance || xm, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Go = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Go.isDisabled && Go.supportsFiber) try {
      qs = Go.inject(Sm), Jt = Go;
    } catch {
    }
  }
  return wt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = km, wt.createPortal = function(e, t) {
    var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!cl(t)) throw Error(i(200));
    return _m(e, t, null, n);
  }, wt.createRoot = function(e, t) {
    if (!cl(e)) throw Error(i(299));
    var n = !1, s = "", l = Vd;
    return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (s = t.identifierPrefix), t.onRecoverableError !== void 0 && (l = t.onRecoverableError)), t = al(e, 1, !1, null, null, n, !1, s, l), e[on] = t.current, fs(e.nodeType === 8 ? e.parentNode : e), new ul(t);
  }, wt.findDOMNode = function(e) {
    if (e == null) return null;
    if (e.nodeType === 1) return e;
    var t = e._reactInternals;
    if (t === void 0)
      throw typeof e.render == "function" ? Error(i(188)) : (e = Object.keys(e).join(","), Error(i(268, e)));
    return e = gu(t), e = e === null ? null : e.stateNode, e;
  }, wt.flushSync = function(e) {
    return Kn(e);
  }, wt.hydrate = function(e, t, n) {
    if (!Ko(t)) throw Error(i(200));
    return Yo(null, e, t, !0, n);
  }, wt.hydrateRoot = function(e, t, n) {
    if (!cl(e)) throw Error(i(405));
    var s = n != null && n.hydratedSources || null, l = !1, u = "", h = Vd;
    if (n != null && (n.unstable_strictMode === !0 && (l = !0), n.identifierPrefix !== void 0 && (u = n.identifierPrefix), n.onRecoverableError !== void 0 && (h = n.onRecoverableError)), t = Bd(t, null, e, 1, n ?? null, l, !1, u, h), e[on] = t.current, fs(e), s) for (e = 0; e < s.length; e++) n = s[e], l = n._getVersion, l = l(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, l] : t.mutableSourceEagerHydrationData.push(
      n,
      l
    );
    return new Qo(t);
  }, wt.render = function(e, t, n) {
    if (!Ko(t)) throw Error(i(200));
    return Yo(null, e, t, !1, n);
  }, wt.unmountComponentAtNode = function(e) {
    if (!Ko(e)) throw Error(i(40));
    return e._reactRootContainer ? (Kn(function() {
      Yo(null, null, e, !1, function() {
        e._reactRootContainer = null, e[on] = null;
      });
    }), !0) : !1;
  }, wt.unstable_batchedUpdates = tl, wt.unstable_renderSubtreeIntoContainer = function(e, t, n, s) {
    if (!Ko(n)) throw Error(i(200));
    if (e == null || e._reactInternals === void 0) throw Error(i(38));
    return Yo(e, t, n, !1, s);
  }, wt.version = "18.3.1-next-f1338f8080-20240426", wt;
}
var ef;
function Pf() {
  if (ef) return pl.exports;
  ef = 1;
  function r() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r);
      } catch (a) {
        console.error(a);
      }
  }
  return r(), pl.exports = Pm(), pl.exports;
}
var tf;
function $m() {
  if (tf) return Jo;
  tf = 1;
  var r = Pf();
  return Jo.createRoot = r.createRoot, Jo.hydrateRoot = r.hydrateRoot, Jo;
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
var nf = "popstate";
function rf(r) {
  return typeof r == "object" && r != null && "pathname" in r && "search" in r && "hash" in r && "state" in r && "key" in r;
}
function Lm(r = {}) {
  function a(d, f) {
    let {
      pathname: p = "/",
      search: m = "",
      hash: g = ""
    } = ar(d.location.hash.substring(1));
    return !p.startsWith("/") && !p.startsWith(".") && (p = "/" + p), El(
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
    return m + "#" + (typeof f == "string" ? f : Os(f));
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
function Dt(r, a) {
  if (!r) {
    typeof console < "u" && console.warn(a);
    try {
      throw new Error(a);
    } catch {
    }
  }
}
function Dm() {
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
function El(r, a, i = null, c, d) {
  return {
    pathname: typeof r == "string" ? r : r.pathname,
    search: "",
    hash: "",
    ...typeof a == "string" ? ar(a) : a,
    state: i,
    // TODO: This could be cleaned up.  push/replace should probably just take
    // full Locations now and avoid the need to run through this flow at all
    // But that's a pretty big refactor to the current test suite so going to
    // keep as is for the time being and just let any incoming keys take precedence
    key: a && a.key || c || Dm(),
    mask: d
  };
}
function Os({
  pathname: r = "/",
  search: a = "",
  hash: i = ""
}) {
  return a && a !== "?" && (r += a.charAt(0) === "?" ? a : "?" + a), i && i !== "#" && (r += i.charAt(0) === "#" ? i : "#" + i), r;
}
function ar(r) {
  let a = {};
  if (r) {
    let i = r.indexOf("#");
    i >= 0 && (a.hash = r.substring(i), r = r.substring(0, i));
    let c = r.indexOf("?");
    c >= 0 && (a.search = r.substring(c), r = r.substring(0, c)), r && (a.pathname = r);
  }
  return a;
}
function Om(r, a, i, c = {}) {
  let { window: d = document.defaultView, v5Compat: f = !1 } = c, p = d.history, m = "POP", g = null, w = y();
  w == null && (w = 0, p.replaceState({ ...p.state, idx: w }, ""));
  function y() {
    return (p.state || { idx: null }).idx;
  }
  function x() {
    m = "POP";
    let N = y(), P = N == null ? null : N - w;
    w = N, g && g({ action: m, location: E.location, delta: P });
  }
  function k(N, P) {
    m = "PUSH";
    let H = rf(N) ? N : El(E.location, N, P);
    i && i(H, N), w = y() + 1;
    let $ = sf(H, w), z = E.createHref(H.mask || H);
    try {
      p.pushState($, "", z);
    } catch (W) {
      if (W instanceof DOMException && W.name === "DataCloneError")
        throw W;
      d.location.assign(z);
    }
    f && g && g({ action: m, location: E.location, delta: 1 });
  }
  function j(N, P) {
    m = "REPLACE";
    let H = rf(N) ? N : El(E.location, N, P);
    i && i(H, N), w = y();
    let $ = sf(H, w), z = E.createHref(H.mask || H);
    p.replaceState($, "", z), f && g && g({ action: m, location: E.location, delta: 0 });
  }
  function b(N) {
    return zm(d, N);
  }
  let E = {
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
      let P = b(N);
      return {
        pathname: P.pathname,
        search: P.search,
        hash: P.hash
      };
    },
    push: k,
    replace: j,
    go(N) {
      return p.go(N);
    }
  };
  return E;
}
function zm(r, a, i = !1) {
  let c = "http://localhost";
  r && (c = r.location.origin !== "null" ? r.location.origin : r.location.href), ze(c, "No window.location.(origin|href) available to create URL");
  let d = typeof a == "string" ? a : Os(a);
  return d = d.replace(/ $/, "%20"), !i && d.startsWith("//") && (d = c + d), new URL(d, c);
}
function $f(r, a, i = "/") {
  return Hm(r, a, i, !1);
}
function Hm(r, a, i, c, d) {
  let f = typeof a == "string" ? ar(a) : a, p = mn(f.pathname || "/", i);
  if (p == null)
    return null;
  let m = Fm(r), g = null, w = Zm(p);
  for (let y = 0; g == null && y < m.length; ++y)
    g = Jm(
      m[y],
      w,
      c
    );
  return g;
}
function Fm(r) {
  let a = Mf(r);
  return Wm(a), a;
}
function Mf(r, a = [], i = [], c = "", d = !1) {
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
    let x = qt([c, y.relativePath]), k = i.concat(y);
    p.children && p.children.length > 0 && (ze(
      // Our types know better, but runtime JS may not!
      // @ts-expect-error
      p.index !== !0,
      `Index routes must not have child routes. Please remove all child routes from route path "${x}".`
    ), Mf(
      p.children,
      a,
      k,
      x,
      g
    )), !(p.path == null && !p.index) && a.push({
      path: x,
      score: Ym(x, p.index),
      routesMeta: k
    });
  };
  return r.forEach((p, m) => {
    var g;
    if (p.path === "" || !((g = p.path) != null && g.includes("?")))
      f(p, m);
    else
      for (let w of If(p.path))
        f(p, m, !0, w);
  }), a;
}
function If(r) {
  let a = r.split("/");
  if (a.length === 0) return [];
  let [i, ...c] = a, d = i.endsWith("?"), f = i.replace(/\?$/, "");
  if (c.length === 0)
    return d ? [f, ""] : [f];
  let p = If(c.join("/")), m = [];
  return m.push(
    ...p.map(
      (g) => g === "" ? f : [f, g].join("/")
    )
  ), d && m.push(...p), m.map(
    (g) => r.startsWith("/") && g === "" ? "/" : g
  );
}
function Wm(r) {
  r.sort(
    (a, i) => a.score !== i.score ? i.score - a.score : Gm(
      a.routesMeta.map((c) => c.childrenIndex),
      i.routesMeta.map((c) => c.childrenIndex)
    )
  );
}
var Bm = /^:[\w-]+$/, Um = 3, Vm = 2, qm = 1, Qm = 10, Km = -2, of = (r) => r === "*";
function Ym(r, a) {
  let i = r.split("/"), c = i.length;
  return i.some(of) && (c += Km), a && (c += Vm), i.filter((d) => !of(d)).reduce(
    (d, f) => d + (Bm.test(f) ? Um : f === "" ? qm : Qm),
    c
  );
}
function Gm(r, a) {
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
function Jm(r, a, i = !1) {
  let { routesMeta: c } = r, d = {}, f = "/", p = [];
  for (let m = 0; m < c.length; ++m) {
    let g = c[m], w = m === c.length - 1, y = f === "/" ? a : a.slice(f.length) || "/", x = oi(
      { path: g.relativePath, caseSensitive: g.caseSensitive, end: w },
      y
    ), k = g.route;
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
      pathname: qt([f, x.pathname]),
      pathnameBase: rv(
        qt([f, x.pathnameBase])
      ),
      route: k
    }), x.pathnameBase !== "/" && (f = qt([f, x.pathnameBase]));
  }
  return p;
}
function oi(r, a) {
  typeof r == "string" && (r = { path: r, caseSensitive: !1, end: !0 });
  let [i, c] = Xm(
    r.path,
    r.caseSensitive,
    r.end
  ), d = a.match(i);
  if (!d) return null;
  let f = d[0], p = f.replace(/(.)\/+$/, "$1"), m = d.slice(1);
  return {
    params: c.reduce(
      (w, { paramName: y, isOptional: x }, k) => {
        if (y === "*") {
          let b = m[k] || "";
          p = f.slice(0, f.length - b.length).replace(/(.)\/+$/, "$1");
        }
        const j = m[k];
        return x && !j ? w[y] = void 0 : w[y] = (j || "").replace(/%2F/g, "/"), w;
      },
      {}
    ),
    pathname: f,
    pathnameBase: p,
    pattern: r
  };
}
function Xm(r, a = !1, i = !0) {
  Dt(
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
function Zm(r) {
  try {
    return r.split("/").map((a) => decodeURIComponent(a).replace(/\//g, "%2F")).join("/");
  } catch (a) {
    return Dt(
      !1,
      `The URL path "${r}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${a}).`
    ), r;
  }
}
function mn(r, a) {
  if (a === "/") return r;
  if (!r.toLowerCase().startsWith(a.toLowerCase()))
    return null;
  let i = a.endsWith("/") ? a.length - 1 : a.length, c = r.charAt(i);
  return c && c !== "/" ? null : r.slice(i) || "/";
}
var ev = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;
function tv(r, a = "/") {
  let {
    pathname: i,
    search: c = "",
    hash: d = ""
  } = typeof r == "string" ? ar(r) : r, f;
  return i ? (i = Lf(i), i.startsWith("/") ? f = af(i.substring(1), "/") : f = af(i, a)) : f = a, {
    pathname: f,
    search: sv(c),
    hash: ov(d)
  };
}
function af(r, a) {
  let i = ii(a).split("/");
  return r.split("/").forEach((d) => {
    d === ".." ? i.length > 1 && i.pop() : d !== "." && i.push(d);
  }), i.length > 1 ? i.join("/") : "/";
}
function vl(r, a, i, c) {
  return `Cannot include a '${r}' character in a manually specified \`to.${a}\` field [${JSON.stringify(
    c
  )}].  Please separate it out to the \`to.${i}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`;
}
function nv(r) {
  return r.filter(
    (a, i) => i === 0 || a.route.path && a.route.path.length > 0
  );
}
function Dl(r) {
  let a = nv(r);
  return a.map(
    (i, c) => c === a.length - 1 ? i.pathname : i.pathnameBase
  );
}
function fi(r, a, i, c = !1) {
  let d;
  typeof r == "string" ? d = ar(r) : (d = { ...r }, ze(
    !d.pathname || !d.pathname.includes("?"),
    vl("?", "pathname", "search", d)
  ), ze(
    !d.pathname || !d.pathname.includes("#"),
    vl("#", "pathname", "hash", d)
  ), ze(
    !d.search || !d.search.includes("#"),
    vl("#", "search", "hash", d)
  ));
  let f = r === "" || d.pathname === "", p = f ? "/" : d.pathname, m;
  if (p == null)
    m = i;
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
  let g = tv(d, m), w = p && p !== "/" && p.endsWith("/"), y = (f || p === ".") && i.endsWith("/");
  return !g.pathname.endsWith("/") && (w || y) && (g.pathname += "/"), g;
}
var Lf = (r) => r.replace(/\/\/+/g, "/"), qt = (r) => Lf(r.join("/")), ii = (r) => r.replace(/\/+$/, ""), rv = (r) => ii(r).replace(/^\/*/, "/"), sv = (r) => !r || r === "?" ? "" : r.startsWith("?") ? r : "?" + r, ov = (r) => !r || r === "#" ? "" : r.startsWith("#") ? r : "#" + r, iv = class {
  constructor(r, a, i, c = !1) {
    this.status = r, this.statusText = a || "", this.internal = c, i instanceof Error ? (this.data = i.toString(), this.error = i) : this.data = i;
  }
};
function av(r) {
  return r != null && typeof r.status == "number" && typeof r.statusText == "string" && typeof r.internal == "boolean" && "data" in r;
}
function lv(r) {
  let a = r.map((i) => i.route.path).filter(Boolean);
  return qt(a) || "/";
}
var Df = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u";
function Of(r, a) {
  let i = r;
  if (typeof i != "string" || !ev.test(i))
    return {
      absoluteURL: void 0,
      isExternal: !1,
      to: i
    };
  let c = i, d = !1;
  if (Df)
    try {
      let f = new URL(window.location.href), p = i.startsWith("//") ? new URL(f.protocol + i) : new URL(i), m = mn(p.pathname, a);
      p.origin === f.origin && m != null ? i = m + p.search + p.hash : d = !0;
    } catch {
      Dt(
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
var uv = [
  "GET",
  ...zf
];
new Set(uv);
var zr = v.createContext(null);
zr.displayName = "DataRouter";
var pi = v.createContext(null);
pi.displayName = "DataRouterState";
var Hf = v.createContext(!1);
function cv() {
  return v.useContext(Hf);
}
var Ff = v.createContext({
  isTransitioning: !1
});
Ff.displayName = "ViewTransition";
var dv = v.createContext(
  /* @__PURE__ */ new Map()
);
dv.displayName = "Fetchers";
var fv = v.createContext(null);
fv.displayName = "Await";
var bt = v.createContext(
  null
);
bt.displayName = "Navigation";
var zs = v.createContext(
  null
);
zs.displayName = "Location";
var sn = v.createContext({
  outlet: null,
  matches: [],
  isDataRoute: !1
});
sn.displayName = "Route";
var Ol = v.createContext(null);
Ol.displayName = "RouteError";
var Wf = "REACT_ROUTER_ERROR", pv = "REDIRECT", hv = "ROUTE_ERROR_RESPONSE";
function mv(r) {
  if (r.startsWith(`${Wf}:${pv}:{`))
    try {
      let a = JSON.parse(r.slice(28));
      if (typeof a == "object" && a && typeof a.status == "number" && typeof a.statusText == "string" && typeof a.location == "string" && typeof a.reloadDocument == "boolean" && typeof a.replace == "boolean")
        return a;
    } catch {
    }
}
function vv(r) {
  if (r.startsWith(
    `${Wf}:${hv}:{`
  ))
    try {
      let a = JSON.parse(r.slice(40));
      if (typeof a == "object" && a && typeof a.status == "number" && typeof a.statusText == "string")
        return new iv(
          a.status,
          a.statusText,
          a.data
        );
    } catch {
    }
}
function yv(r, { relative: a } = {}) {
  ze(
    lr(),
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useHref() may be used only in the context of a <Router> component."
  );
  let { basename: i, navigator: c } = v.useContext(bt), { hash: d, pathname: f, search: p } = Hs(r, { relative: a }), m = f;
  return i !== "/" && (m = f === "/" ? i : qt([i, f])), c.createHref({ pathname: m, search: p, hash: d });
}
function lr() {
  return v.useContext(zs) != null;
}
function St() {
  return ze(
    lr(),
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useLocation() may be used only in the context of a <Router> component."
  ), v.useContext(zs).location;
}
var Bf = "You should call navigate() in a React.useEffect(), not when your component is first rendered.";
function Uf(r) {
  v.useContext(bt).static || v.useLayoutEffect(r);
}
function zl() {
  let { isDataRoute: r } = v.useContext(sn);
  return r ? Rv() : gv();
}
function gv() {
  ze(
    lr(),
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useNavigate() may be used only in the context of a <Router> component."
  );
  let r = v.useContext(zr), { basename: a, navigator: i } = v.useContext(bt), { matches: c } = v.useContext(sn), { pathname: d } = St(), f = JSON.stringify(Dl(c)), p = v.useRef(!1);
  return Uf(() => {
    p.current = !0;
  }), v.useCallback(
    (g, w = {}) => {
      if (Dt(p.current, Bf), !p.current) return;
      if (typeof g == "number") {
        i.go(g);
        return;
      }
      let y = fi(
        g,
        JSON.parse(f),
        d,
        w.relative === "path"
      );
      r == null && a !== "/" && (y.pathname = y.pathname === "/" ? a : qt([a, y.pathname])), (w.replace ? i.replace : i.push)(
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
  let { matches: i } = v.useContext(sn), { pathname: c } = St(), d = JSON.stringify(Dl(i));
  return v.useMemo(
    () => fi(
      r,
      JSON.parse(d),
      c,
      a === "path"
    ),
    [r, d, c, a]
  );
}
function _v(r, a) {
  return Vf(r, a);
}
function Vf(r, a, i) {
  var N;
  ze(
    lr(),
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useRoutes() may be used only in the context of a <Router> component."
  );
  let { navigator: c } = v.useContext(bt), { matches: d } = v.useContext(sn), f = d[d.length - 1], p = f ? f.params : {}, m = f ? f.pathname : "/", g = f ? f.pathnameBase : "/", w = f && f.route;
  {
    let P = w && w.path || "";
    Qf(
      m,
      !w || P.endsWith("*") || P.endsWith("*?"),
      `You rendered descendant <Routes> (or called \`useRoutes()\`) at "${m}" (under <Route path="${P}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${P}"> to <Route path="${P === "/" ? "*" : `${P}/*`}">.`
    );
  }
  let y = St(), x;
  if (a) {
    let P = typeof a == "string" ? ar(a) : a;
    ze(
      g === "/" || ((N = P.pathname) == null ? void 0 : N.startsWith(g)),
      `When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${g}" but pathname "${P.pathname}" was given in the \`location\` prop.`
    ), x = P;
  } else
    x = y;
  let k = x.pathname || "/", j = k;
  if (g !== "/") {
    let P = g.replace(/^\//, "").split("/");
    j = "/" + k.replace(/^\//, "").split("/").slice(P.length).join("/");
  }
  let b = i && i.state.matches.length ? (
    // If we're in a data router, use the matches we've already identified but ensure
    // we have the latest route instances from the manifest in case elements have changed
    i.state.matches.map(
      (P) => Object.assign(P, {
        route: i.manifest[P.route.id] || P.route
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
  let E = Cv(
    b && b.map(
      (P) => Object.assign({}, P, {
        params: Object.assign({}, p, P.params),
        pathname: qt([
          g,
          // Re-encode pathnames that were decoded inside matchRoutes.
          // Pre-encode `%`, `?` and `#` ahead of `encodeLocation` because it uses
          // `new URL()` internally and we need to prevent it from treating
          // them as separators
          c.encodeLocation ? c.encodeLocation(
            P.pathname.replace(/%/g, "%25").replace(/\?/g, "%3F").replace(/#/g, "%23")
          ).pathname : P.pathname
        ]),
        pathnameBase: P.pathnameBase === "/" ? g : qt([
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
          ...x
        },
        navigationType: "POP"
        /* Pop */
      }
    },
    E
  ) : E;
}
function xv() {
  let r = bv(), a = av(r) ? `${r.status} ${r.statusText}` : r instanceof Error ? r.message : JSON.stringify(r), i = r instanceof Error ? r.stack : null, c = "rgba(200,200,200, 0.5)", d = { padding: "0.5rem", backgroundColor: c }, f = { padding: "2px 4px", backgroundColor: c }, p = null;
  return console.error(
    "Error handled by React Router default ErrorBoundary:",
    r
  ), p = /* @__PURE__ */ v.createElement(v.Fragment, null, /* @__PURE__ */ v.createElement("p", null, "💿 Hey developer 👋"), /* @__PURE__ */ v.createElement("p", null, "You can provide a way better UX than this when your app throws errors by providing your own ", /* @__PURE__ */ v.createElement("code", { style: f }, "ErrorBoundary"), " or", " ", /* @__PURE__ */ v.createElement("code", { style: f }, "errorElement"), " prop on your route.")), /* @__PURE__ */ v.createElement(v.Fragment, null, /* @__PURE__ */ v.createElement("h2", null, "Unexpected Application Error!"), /* @__PURE__ */ v.createElement("h3", { style: { fontStyle: "italic" } }, a), i ? /* @__PURE__ */ v.createElement("pre", { style: d }, i) : null, p);
}
var wv = /* @__PURE__ */ v.createElement(xv, null), qf = class extends v.Component {
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
      const i = vv(r.digest);
      i && (r = i);
    }
    let a = r !== void 0 ? /* @__PURE__ */ v.createElement(sn.Provider, { value: this.props.routeContext }, /* @__PURE__ */ v.createElement(
      Ol.Provider,
      {
        value: r,
        children: this.props.component
      }
    )) : this.props.children;
    return this.context ? /* @__PURE__ */ v.createElement(kv, { error: r }, a) : a;
  }
};
qf.contextType = Hf;
var yl = /* @__PURE__ */ new WeakMap();
function kv({
  children: r,
  error: a
}) {
  let { basename: i } = v.useContext(bt);
  if (typeof a == "object" && a && "digest" in a && typeof a.digest == "string") {
    let c = mv(a.digest);
    if (c) {
      let d = yl.get(a);
      if (d) throw d;
      let f = Of(c.location, i);
      if (Df && !yl.get(a))
        if (f.isExternal || c.reloadDocument)
          window.location.href = f.absoluteURL || f.to;
        else {
          const p = Promise.resolve().then(
            () => window.__reactRouterDataRouter.navigate(f.to, {
              replace: c.replace
            })
          );
          throw yl.set(a, p), p;
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
  let c = v.useContext(zr);
  return c && c.static && c.staticContext && (a.route.errorElement || a.route.ErrorBoundary) && (c.staticContext._deepestRenderedBoundaryId = a.route.id), /* @__PURE__ */ v.createElement(sn.Provider, { value: r }, i);
}
function Cv(r, a = [], i) {
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
  let p = !1, m = -1;
  if (i && c) {
    p = c.renderFallback;
    for (let y = 0; y < d.length; y++) {
      let x = d[y];
      if ((x.route.HydrateFallback || x.route.hydrateFallbackElement) && (m = y), x.route.id) {
        let { loaderData: k, errors: j } = c, b = x.route.loader && !k.hasOwnProperty(x.route.id) && (!j || j[x.route.id] === void 0);
        if (x.route.lazy || b) {
          i.isStatic && (p = !0), m >= 0 ? d = d.slice(0, m + 1) : d = [d[0]];
          break;
        }
      }
    }
  }
  let g = i == null ? void 0 : i.onError, w = c && g ? (y, x) => {
    var k, j;
    g(y, {
      location: c.location,
      params: ((j = (k = c.matches) == null ? void 0 : k[0]) == null ? void 0 : j.params) ?? {},
      pattern: lv(c.matches),
      errorInfo: x
    });
  } : void 0;
  return d.reduceRight(
    (y, x, k) => {
      let j, b = !1, E = null, N = null;
      c && (j = f && x.route.id ? f[x.route.id] : void 0, E = x.route.errorElement || wv, p && (m < 0 && k === 0 ? (Qf(
        "route-fallback",
        !1,
        "No `HydrateFallback` element provided to render during initial hydration"
      ), b = !0, N = null) : m === k && (b = !0, N = x.route.hydrateFallbackElement || null)));
      let P = a.concat(d.slice(0, k + 1)), H = () => {
        let $;
        return j ? $ = E : b ? $ = N : x.route.Component ? $ = /* @__PURE__ */ v.createElement(x.route.Component, null) : x.route.element ? $ = x.route.element : $ = y, /* @__PURE__ */ v.createElement(
          Sv,
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
        qf,
        {
          location: c.location,
          revalidation: c.revalidation,
          component: E,
          error: j,
          children: H(),
          routeContext: { outlet: null, matches: P, isDataRoute: !0 },
          onError: w
        }
      ) : H();
    },
    null
  );
}
function Hl(r) {
  return `${r} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function jv(r) {
  let a = v.useContext(zr);
  return ze(a, Hl(r)), a;
}
function Ev(r) {
  let a = v.useContext(pi);
  return ze(a, Hl(r)), a;
}
function Nv(r) {
  let a = v.useContext(sn);
  return ze(a, Hl(r)), a;
}
function Fl(r) {
  let a = Nv(r), i = a.matches[a.matches.length - 1];
  return ze(
    i.route.id,
    `${r} can only be used on routes that contain a unique "id"`
  ), i.route.id;
}
function Tv() {
  return Fl(
    "useRouteId"
    /* UseRouteId */
  );
}
function bv() {
  var c;
  let r = v.useContext(Ol), a = Ev(
    "useRouteError"
    /* UseRouteError */
  ), i = Fl(
    "useRouteError"
    /* UseRouteError */
  );
  return r !== void 0 ? r : (c = a.errors) == null ? void 0 : c[i];
}
function Rv() {
  let { router: r } = jv(
    "useNavigate"
    /* UseNavigateStable */
  ), a = Fl(
    "useNavigate"
    /* UseNavigateStable */
  ), i = v.useRef(!1);
  return Uf(() => {
    i.current = !0;
  }), v.useCallback(
    async (d, f = {}) => {
      Dt(i.current, Bf), i.current && (typeof d == "number" ? await r.navigate(d) : await r.navigate(d, { fromRouteId: a, ...f }));
    },
    [r, a]
  );
}
var lf = {};
function Qf(r, a, i) {
  !a && !lf[r] && (lf[r] = !0, Dt(!1, i));
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
  return Vf(r, void 0, {
    manifest: a,
    state: c,
    isStatic: d,
    onError: f
  });
}
function Ln({
  to: r,
  replace: a,
  state: i,
  relative: c
}) {
  ze(
    lr(),
    // TODO: This error is probably because they somehow have 2 versions of
    // the router loaded. We can help them understand how to avoid that.
    "<Navigate> may be used only in the context of a <Router> component."
  );
  let { static: d } = v.useContext(bt);
  Dt(
    !d,
    "<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change."
  );
  let { matches: f } = v.useContext(sn), { pathname: p } = St(), m = zl(), g = fi(
    r,
    Dl(f),
    p,
    c === "path"
  ), w = JSON.stringify(g);
  return v.useEffect(() => {
    m(JSON.parse(w), { replace: a, state: i, relative: c });
  }, [m, w, c, a, i]), null;
}
function Ye(r) {
  ze(
    !1,
    "A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>."
  );
}
function Pv({
  basename: r = "/",
  children: a = null,
  location: i,
  navigationType: c = "POP",
  navigator: d,
  static: f = !1,
  useTransitions: p
}) {
  ze(
    !lr(),
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
  typeof i == "string" && (i = ar(i));
  let {
    pathname: w = "/",
    search: y = "",
    hash: x = "",
    state: k = null,
    key: j = "default",
    mask: b
  } = i, E = v.useMemo(() => {
    let N = mn(w, m);
    return N == null ? null : {
      location: {
        pathname: N,
        search: y,
        hash: x,
        state: k,
        key: j,
        mask: b
      },
      navigationType: c
    };
  }, [m, w, y, x, k, j, c, b]);
  return Dt(
    E != null,
    `<Router basename="${m}"> is not able to match the URL "${w}${y}${x}" because it does not start with the basename, so the <Router> won't render anything.`
  ), E == null ? null : /* @__PURE__ */ v.createElement(bt.Provider, { value: g }, /* @__PURE__ */ v.createElement(zs.Provider, { children: a, value: E }));
}
function $v({
  children: r,
  location: a
}) {
  return _v(Nl(r), a);
}
function Nl(r, a = []) {
  let i = [];
  return v.Children.forEach(r, (c, d) => {
    if (!v.isValidElement(c))
      return;
    let f = [...a, d];
    if (c.type === v.Fragment) {
      i.push.apply(
        i,
        Nl(c.props.children, f)
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
    c.props.children && (p.children = Nl(
      c.props.children,
      f
    )), i.push(p);
  }), i;
}
var ri = "get", si = "application/x-www-form-urlencoded";
function hi(r) {
  return typeof HTMLElement < "u" && r instanceof HTMLElement;
}
function Mv(r) {
  return hi(r) && r.tagName.toLowerCase() === "button";
}
function Iv(r) {
  return hi(r) && r.tagName.toLowerCase() === "form";
}
function Lv(r) {
  return hi(r) && r.tagName.toLowerCase() === "input";
}
function Dv(r) {
  return !!(r.metaKey || r.altKey || r.ctrlKey || r.shiftKey);
}
function Ov(r, a) {
  return r.button === 0 && // Ignore everything but left clicks
  (!a || a === "_self") && // Let browser handle "target=_blank" etc.
  !Dv(r);
}
var Xo = null;
function zv() {
  if (Xo === null)
    try {
      new FormData(
        document.createElement("form"),
        // @ts-expect-error if FormData supports the submitter parameter, this will throw
        0
      ), Xo = !1;
    } catch {
      Xo = !0;
    }
  return Xo;
}
var Hv = /* @__PURE__ */ new Set([
  "application/x-www-form-urlencoded",
  "multipart/form-data",
  "text/plain"
]);
function gl(r) {
  return r != null && !Hv.has(r) ? (Dt(
    !1,
    `"${r}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${si}"`
  ), null) : r;
}
function Fv(r, a) {
  let i, c, d, f, p;
  if (Iv(r)) {
    let m = r.getAttribute("action");
    c = m ? mn(m, a) : null, i = r.getAttribute("method") || ri, d = gl(r.getAttribute("enctype")) || si, f = new FormData(r);
  } else if (Mv(r) || Lv(r) && (r.type === "submit" || r.type === "image")) {
    let m = r.form;
    if (m == null)
      throw new Error(
        'Cannot submit a <button> or <input type="submit"> without a <form>'
      );
    let g = r.getAttribute("formaction") || m.getAttribute("action");
    if (c = g ? mn(g, a) : null, i = r.getAttribute("formmethod") || m.getAttribute("method") || ri, d = gl(r.getAttribute("formenctype")) || gl(m.getAttribute("enctype")) || si, f = new FormData(m, r), !zv()) {
      let { name: w, type: y, value: x } = r;
      if (y === "image") {
        let k = w ? `${w}.` : "";
        f.append(`${k}x`, "0"), f.append(`${k}y`, "0");
      } else w && f.append(w, x);
    }
  } else {
    if (hi(r))
      throw new Error(
        'Cannot submit element that is not <form>, <button>, or <input type="submit|image">'
      );
    i = ri, c = null, d = si, p = r;
  }
  return f && d === "text/plain" && (p = f, f = void 0), { action: c, method: i.toLowerCase(), encType: d, formData: f, body: p };
}
Object.getOwnPropertyNames(Object.prototype).sort().join("\0");
function Wl(r, a) {
  if (r === !1 || r === null || typeof r > "u")
    throw new Error(a);
}
function Kf(r, a, i, c) {
  let d = typeof r == "string" ? new URL(
    r,
    // This can be called during the SSR flow via PrefetchPageLinksImpl so
    // don't assume window is available
    typeof window > "u" ? "server://singlefetch/" : window.location.origin
  ) : r;
  return i ? d.pathname.endsWith("/") ? d.pathname = `${d.pathname}_.${c}` : d.pathname = `${d.pathname}.${c}` : d.pathname === "/" ? d.pathname = `_root.${c}` : a && mn(d.pathname, a) === "/" ? d.pathname = `${ii(a)}/_root.${c}` : d.pathname = `${ii(d.pathname)}.${c}`, d;
}
async function Wv(r, a) {
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
function Bv(r) {
  return r == null ? !1 : r.href == null ? r.rel === "preload" && typeof r.imageSrcSet == "string" && typeof r.imageSizes == "string" : typeof r.rel == "string" && typeof r.href == "string";
}
async function Uv(r, a, i) {
  let c = await Promise.all(
    r.map(async (d) => {
      let f = a.routes[d.route.id];
      if (f) {
        let p = await Wv(f, i);
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
function uf(r, a, i, c, d, f) {
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
function Vv(r, a, { includeHydrateFallback: i } = {}) {
  return qv(
    r.map((c) => {
      let d = a.routes[c.route.id];
      if (!d) return [];
      let f = [d.module];
      return d.clientActionModule && (f = f.concat(d.clientActionModule)), d.clientLoaderModule && (f = f.concat(d.clientLoaderModule)), i && d.hydrateFallbackModule && (f = f.concat(d.hydrateFallbackModule)), d.imports && (f = f.concat(d.imports)), f;
    }).flat(1)
  );
}
function qv(r) {
  return [...new Set(r)];
}
function Qv(r) {
  let a = {}, i = Object.keys(r).sort();
  for (let c of i)
    a[c] = r[c];
  return a;
}
function Kv(r, a) {
  let i = /* @__PURE__ */ new Set();
  return new Set(a), r.reduce((c, d) => {
    let f = JSON.stringify(Qv(d));
    return i.has(f) || (i.add(f), c.push({ key: f, link: d })), c;
  }, []);
}
function Bl() {
  let r = v.useContext(zr);
  return Wl(
    r,
    "You must render this element inside a <DataRouterContext.Provider> element"
  ), r;
}
function Yv() {
  let r = v.useContext(pi);
  return Wl(
    r,
    "You must render this element inside a <DataRouterStateContext.Provider> element"
  ), r;
}
var Ul = v.createContext(void 0);
Ul.displayName = "FrameworkContext";
function Vl() {
  let r = v.useContext(Ul);
  return Wl(
    r,
    "You must render this element inside a <HydratedRouter> element"
  ), r;
}
function Gv(r, a) {
  let i = v.useContext(Ul), [c, d] = v.useState(!1), [f, p] = v.useState(!1), { onFocus: m, onBlur: g, onMouseEnter: w, onMouseLeave: y, onTouchStart: x } = a, k = v.useRef(null);
  v.useEffect(() => {
    if (r === "render" && p(!0), r === "viewport") {
      let E = (P) => {
        P.forEach((H) => {
          p(H.isIntersecting);
        });
      }, N = new IntersectionObserver(E, { threshold: 0.5 });
      return k.current && N.observe(k.current), () => {
        N.disconnect();
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
  let j = () => {
    d(!0);
  }, b = () => {
    d(!1), p(!1);
  };
  return i ? r !== "intent" ? [f, k, {}] : [
    f,
    k,
    {
      onFocus: As(m, j),
      onBlur: As(g, b),
      onMouseEnter: As(w, j),
      onMouseLeave: As(y, b),
      onTouchStart: As(x, j)
    }
  ] : [!1, k, {}];
}
function As(r, a) {
  return (i) => {
    r && r(i), i.defaultPrevented || a(i);
  };
}
function Jv({ page: r, ...a }) {
  let i = cv(), { router: c } = Bl(), d = v.useMemo(
    () => $f(c.routes, r, c.basename),
    [c.routes, r, c.basename]
  );
  return d ? i ? /* @__PURE__ */ v.createElement(Zv, { page: r, matches: d, ...a }) : /* @__PURE__ */ v.createElement(ey, { page: r, matches: d, ...a }) : null;
}
function Xv(r) {
  let { manifest: a, routeModules: i } = Vl(), [c, d] = v.useState([]);
  return v.useEffect(() => {
    let f = !1;
    return Uv(r, a, i).then(
      (p) => {
        f || d(p);
      }
    ), () => {
      f = !0;
    };
  }, [r, a, i]), c;
}
function Zv({
  page: r,
  matches: a,
  ...i
}) {
  let c = St(), { future: d } = Vl(), { basename: f } = Bl(), p = v.useMemo(() => {
    if (r === c.pathname + c.search + c.hash)
      return [];
    let m = Kf(
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
function ey({
  page: r,
  matches: a,
  ...i
}) {
  let c = St(), { future: d, manifest: f, routeModules: p } = Vl(), { basename: m } = Bl(), { loaderData: g, matches: w } = Yv(), y = v.useMemo(
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
    let E = /* @__PURE__ */ new Set(), N = !1;
    if (a.forEach((H) => {
      var z;
      let $ = f.routes[H.route.id];
      !$ || !$.hasLoader || (!y.some((W) => W.route.id === H.route.id) && H.route.id in g && ((z = p[H.route.id]) != null && z.shouldRevalidate) || $.hasClientLoader ? N = !0 : E.add(H.route.id));
    }), E.size === 0)
      return [];
    let P = Kf(
      r,
      m,
      d.v8_trailingSlashAwareDataRequests,
      "data"
    );
    return N && E.size > 0 && P.searchParams.set(
      "_routes",
      a.filter((H) => E.has(H.route.id)).map((H) => H.route.id).join(",")
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
  ]), j = v.useMemo(
    () => Vv(x, f),
    [x, f]
  ), b = Xv(x);
  return /* @__PURE__ */ v.createElement(v.Fragment, null, k.map((E) => /* @__PURE__ */ v.createElement("link", { key: E, rel: "prefetch", as: "fetch", href: E, ...i })), j.map((E) => /* @__PURE__ */ v.createElement("link", { key: E, rel: "modulepreload", href: E, ...i })), b.map(({ key: E, link: N }) => (
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
function ty(...r) {
  return (a) => {
    r.forEach((i) => {
      typeof i == "function" ? i(a) : i != null && (i.current = a);
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
  children: a,
  useTransitions: i,
  window: c
}) {
  let d = v.useRef();
  d.current == null && (d.current = Lm({ window: c, v5Compat: !0 }));
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
    Pv,
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
var Yf = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i, Gf = v.forwardRef(
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
    viewTransition: k,
    defaultShouldRevalidate: j,
    ...b
  }, E) {
    let { basename: N, navigator: P, useTransitions: H } = v.useContext(bt), $ = typeof y == "string" && Yf.test(y), z = Of(y, N);
    y = z.to;
    let W = yv(y, { relative: d }), I = St(), J = null;
    if (m) {
      let te = fi(
        m,
        [],
        I.mask ? I.mask.pathname : "/",
        !0
      );
      N !== "/" && (te.pathname = te.pathname === "/" ? N : qt([N, te.pathname])), J = P.createHref(te);
    }
    let [B, G, ye] = Gv(
      c,
      b
    ), de = iy(y, {
      replace: p,
      mask: m,
      state: g,
      target: w,
      preventScrollReset: x,
      relative: d,
      viewTransition: k,
      defaultShouldRevalidate: j,
      useTransitions: H
    });
    function ge(te) {
      a && a(te), te.defaultPrevented || de(te);
    }
    let he = !(z.isExternal || f), _e = (
      // eslint-disable-next-line jsx-a11y/anchor-has-content
      /* @__PURE__ */ v.createElement(
        "a",
        {
          ...b,
          ...ye,
          href: (he ? J : void 0) || z.absoluteURL || W,
          onClick: he ? ge : a,
          ref: ty(E, G),
          target: w,
          "data-discover": !$ && i === "render" ? "true" : void 0
        }
      )
    );
    return B && !$ ? /* @__PURE__ */ v.createElement(v.Fragment, null, _e, /* @__PURE__ */ v.createElement(Jv, { page: W })) : _e;
  }
);
Gf.displayName = "Link";
var pt = v.forwardRef(
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
    let x = Hs(p, { relative: w.relative }), k = St(), j = v.useContext(pi), { navigator: b, basename: E } = v.useContext(bt), N = j != null && // Conditional usage is OK here because the usage of a data router is static
    // eslint-disable-next-line react-hooks/rules-of-hooks
    dy(x) && m === !0, P = b.encodeLocation ? b.encodeLocation(x).pathname : x.pathname, H = k.pathname, $ = j && j.navigation && j.navigation.location ? j.navigation.location.pathname : null;
    i || (H = H.toLowerCase(), $ = $ ? $.toLowerCase() : null, P = P.toLowerCase()), $ && E && ($ = mn($, E) || $);
    const z = P !== "/" && P.endsWith("/") ? P.length - 1 : P.length;
    let W = H === P || !d && H.startsWith(P) && H.charAt(z) === "/", I = $ != null && ($ === P || !d && $.startsWith(P) && $.charAt(P.length) === "/"), J = {
      isActive: W,
      isPending: I,
      isTransitioning: N
    }, B = W ? a : void 0, G;
    typeof c == "function" ? G = c(J) : G = [
      c,
      W ? "active" : null,
      I ? "pending" : null,
      N ? "transitioning" : null
    ].filter(Boolean).join(" ");
    let ye = typeof f == "function" ? f(J) : f;
    return /* @__PURE__ */ v.createElement(
      Gf,
      {
        ...w,
        "aria-current": B,
        className: G,
        ref: y,
        style: ye,
        to: p,
        viewTransition: m
      },
      typeof g == "function" ? g(J) : g
    );
  }
);
pt.displayName = "NavLink";
var sy = v.forwardRef(
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
    defaultShouldRevalidate: k,
    ...j
  }, b) => {
    let { useTransitions: E } = v.useContext(bt), N = uy(), P = cy(m, { relative: w }), H = p.toLowerCase() === "get" ? "get" : "post", $ = typeof m == "string" && Yf.test(m), z = (W) => {
      if (g && g(W), W.defaultPrevented) return;
      W.preventDefault();
      let I = W.nativeEvent.submitter, J = (I == null ? void 0 : I.getAttribute("formmethod")) || p, B = () => N(I || W.currentTarget, {
        fetcherKey: a,
        method: J,
        navigate: i,
        replace: d,
        state: f,
        relative: w,
        preventScrollReset: y,
        viewTransition: x,
        defaultShouldRevalidate: k
      });
      E && i !== !1 ? v.startTransition(() => B()) : B();
    };
    return /* @__PURE__ */ v.createElement(
      "form",
      {
        ref: b,
        method: H,
        action: P,
        onSubmit: c ? g : z,
        ...j,
        "data-discover": !$ && r === "render" ? "true" : void 0
      }
    );
  }
);
sy.displayName = "Form";
function oy(r) {
  return `${r} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function Jf(r) {
  let a = v.useContext(zr);
  return ze(a, oy(r)), a;
}
function iy(r, {
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
  let y = zl(), x = St(), k = Hs(r, { relative: p });
  return v.useCallback(
    (j) => {
      if (Ov(j, a)) {
        j.preventDefault();
        let b = i !== void 0 ? i : Os(x) === Os(k), E = () => y(r, {
          replace: b,
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
      k,
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
var ay = 0, ly = () => `__${String(++ay)}__`;
function uy() {
  let { router: r } = Jf(
    "useSubmit"
    /* UseSubmit */
  ), { basename: a } = v.useContext(bt), i = Tv(), c = r.fetch, d = r.navigate;
  return v.useCallback(
    async (f, p = {}) => {
      let { action: m, method: g, encType: w, formData: y, body: x } = Fv(
        f,
        a
      );
      if (p.navigate === !1) {
        let k = p.fetcherKey || ly();
        await c(k, i, p.action || m, {
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
function cy(r, { relative: a } = {}) {
  let { basename: i } = v.useContext(bt), c = v.useContext(sn);
  ze(c, "useFormAction must be used inside a RouteContext");
  let [d] = c.matches.slice(-1), f = { ...Hs(r || ".", { relative: a }) }, p = St();
  if (r == null) {
    f.search = p.search;
    let m = new URLSearchParams(f.search), g = m.getAll("index");
    if (g.some((y) => y === "")) {
      m.delete("index"), g.filter((x) => x).forEach((x) => m.append("index", x));
      let y = m.toString();
      f.search = y ? `?${y}` : "";
    }
  }
  return (!r || r === ".") && d.route.index && (f.search = f.search ? f.search.replace(/^\?/, "?index&") : "?index"), i !== "/" && (f.pathname = f.pathname === "/" ? i : qt([i, f.pathname])), Os(f);
}
function dy(r, { relative: a } = {}) {
  let i = v.useContext(Ff);
  ze(
    i != null,
    "`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?"
  );
  let { basename: c } = Jf(
    "useViewTransitionState"
    /* useViewTransitionState */
  ), d = Hs(r, { relative: a });
  if (!i.isTransitioning)
    return !1;
  let f = mn(i.currentLocation.pathname, c) || i.currentLocation.pathname, p = mn(i.nextLocation.pathname, c) || i.nextLocation.pathname;
  return oi(d.pathname, p) != null || oi(d.pathname, f) != null;
}
var Xf = Pf();
/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Zf = (...r) => r.filter((a, i, c) => !!a && a.trim() !== "" && c.indexOf(a) === i).join(" ").trim();
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
  (a, i, c) => c ? c.toUpperCase() : i.toLowerCase()
);
/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const cf = (r) => {
  const a = py(r);
  return a.charAt(0).toUpperCase() + a.slice(1);
};
/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var _l = {
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
  for (const a in r)
    if (a.startsWith("aria-") || a === "role" || a === "title")
      return !0;
  return !1;
}, my = v.createContext({}), vy = () => v.useContext(my), yy = v.forwardRef(
  ({ color: r, size: a, strokeWidth: i, absoluteStrokeWidth: c, className: d = "", children: f, iconNode: p, ...m }, g) => {
    const {
      size: w = 24,
      strokeWidth: y = 2,
      absoluteStrokeWidth: x = !1,
      color: k = "currentColor",
      className: j = ""
    } = vy() ?? {}, b = c ?? x ? Number(i ?? y) * 24 / Number(a ?? w) : i ?? y;
    return v.createElement(
      "svg",
      {
        ref: g,
        ..._l,
        width: a ?? w ?? _l.width,
        height: a ?? w ?? _l.height,
        stroke: r ?? k,
        strokeWidth: b,
        className: Zf("lucide", j, d),
        ...!f && !hy(m) && { "aria-hidden": "true" },
        ...m
      },
      [
        ...p.map(([E, N]) => v.createElement(E, N)),
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
    ({ className: c, ...d }, f) => v.createElement(yy, {
      ref: f,
      iconNode: a,
      className: Zf(
        `lucide-${fy(cf(r))}`,
        `lucide-${r}`,
        c
      ),
      ...d
    })
  );
  return i.displayName = cf(r), i;
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
], ep = Se("alarm-clock", gy);
/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const _y = [
  ["path", { d: "m12 19-7-7 7-7", key: "1l729n" }],
  ["path", { d: "M19 12H5", key: "x3x0zl" }]
], xy = Se("arrow-left", _y);
/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const wy = [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "m12 5 7 7-7 7", key: "xquz4c" }]
], ky = Se("arrow-right", wy);
/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Sy = [
  ["path", { d: "M2 10v3", key: "1fnikh" }],
  ["path", { d: "M6 6v11", key: "11sgs0" }],
  ["path", { d: "M10 3v18", key: "yhl04a" }],
  ["path", { d: "M14 8v7", key: "3a1oy3" }],
  ["path", { d: "M18 5v13", key: "123xd1" }],
  ["path", { d: "M22 10v3", key: "154ddg" }]
], Cy = Se("audio-lines", Sy);
/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const jy = [
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
], ql = Se("baby", jy);
/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ey = [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]], Ny = Se("check", Ey);
/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ty = [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]], tp = Se("chevron-down", Ty);
/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const by = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }]
], Ry = Se("circle-check", by);
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
], Py = Se("circle-question-mark", Ay);
/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const $y = [["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }]], My = Se("circle", $y);
/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Iy = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M12 6v6h4", key: "135r8i" }]
], Ly = Se("clock-3", Iy);
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
], Oy = Se("command", Dy);
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
], np = Se("download", zy);
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
], Fy = Se("file-code-corner", Hy);
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
], By = Se("git-branch", Wy);
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
], Vy = Se("headphones", Uy);
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
], Qy = Se("layers", qy);
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
], Yy = Se("layout-grid", Ky);
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
], rp = Se("menu", Gy);
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
], Xy = Se("message-circle", Jy);
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
], eg = Se("mic-off", Zy);
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
], ng = Se("mic", tg);
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
], df = Se("phone-call", rg);
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
], og = Se("phone-off", sg);
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
      d: "M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384",
      key: "9njp5v"
    }
  ]
], ai = Se("phone", ig);
/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ag = [
  ["path", { d: "M16.247 7.761a6 6 0 0 1 0 8.478", key: "1fwjs5" }],
  ["path", { d: "M19.075 4.933a10 10 0 0 1 0 14.134", key: "ehdyv1" }],
  ["path", { d: "M4.925 19.067a10 10 0 0 1 0-14.134", key: "1q22gi" }],
  ["path", { d: "M7.753 16.239a6 6 0 0 1 0-8.478", key: "r2q7qm" }],
  ["circle", { cx: "12", cy: "12", r: "2", key: "1c9p78" }]
], lg = Se("radio", ag);
/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ug = [
  ["path", { d: "m21 21-4.34-4.34", key: "14j7rj" }],
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }]
], cg = Se("search", ug);
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
], sp = Se("settings", dg);
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
], xl = Se("sliders-horizontal", fg);
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
], Ql = Se("speaker", pg);
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
], mg = Se("timer", hg);
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
], yg = Se("triangle-alert", vg);
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
], _g = Se("volume-2", gg);
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
], ff = Se("workflow", xg);
/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const wg = [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
], op = Se("x", wg), kg = { ru: "Тема", en: "Theme" }, Sg = { ru: "Тёмная", en: "Dark" }, Cg = { ru: "Светлая", en: "Light" }, jg = { ru: "Токен", en: "Token" }, Eg = { ru: "Тип действия", en: "Action type" }, Ng = { ru: "Ветка диалога", en: "Conversation branch" }, Tg = { ru: "Текст ответа", en: "Response text" }, bg = { ru: "Команда", en: "Command" }, Rg = { ru: "Название переменной", en: "Variable name" }, Ag = { ru: "Основная команда", en: "Main command" }, Pg = { ru: "Второстепенная команда", en: "Secondary command" }, $g = { ru: "Прямая команда", en: "Direct command" }, Mg = { ru: "Дополнительные фразы", en: "Additional phrases" }, Ig = { ru: "Удалённый сервер", en: "Remote server" }, Lg = { ru: "Вложенные команды", en: "Nested commands" }, Dg = { ru: "Тип вложенного значения", en: "Nested value type" }, Og = { ru: "Тип данных", en: "Data type" }, zg = { ru: "Вручную", en: "Manual" }, Hg = { ru: "Любой", en: "Any" }, Fg = { ru: "Любой", en: "Any" }, Wg = { ru: "Текст", en: "Text" }, Bg = { ru: "Число", en: "Number" }, Ug = { ru: "Дата", en: "Date" }, Vg = { ru: "Время", en: "Time" }, qg = {
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
  Theme: kg,
  dark: Sg,
  light: Cg,
  "Client ID": { ru: "Идентификатор клиента", en: "Client ID" },
  "Is admin": { ru: "Администратор", en: "Administrator" },
  "Active remout": { ru: "Удалённый сервер", en: "Remote server" },
  "Enable API (/api/dialog/commands, /api/dialog/events, /api/dialog/event)": { ru: "Включить API (/api/dialog/commands, /api/dialog/events, /api/dialog/event)", en: "Enable API (/api/dialog/commands, /api/dialog/events, /api/dialog/event)" },
  "API Commands Token": { ru: "Токен API команд", en: "Commands API token" },
  "Global music timer": { ru: "Звук таймера по умолчанию", en: "Default timer sound" },
  "Global music alarm": { ru: "Звук будильника по умолчанию", en: "Default alarm sound" },
  "Timer / Alarm": { ru: "Таймеры и будильники", en: "Timers and alarms" },
  "Base URL": { ru: "Адрес сервера", en: "Server URL" },
  Token: jg,
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
}, ip = "ha-dialog-ui-language";
let Kl = localStorage.getItem(ip) === "en" ? "en" : "ru";
const Tl = /* @__PURE__ */ new Set();
function Qg(r) {
  Kl = r, localStorage.setItem(ip, r), Tl.forEach((a) => a());
}
function ap() {
  return v.useSyncExternalStore((r) => (Tl.add(r), () => {
    Tl.delete(r);
  }), () => Kl);
}
function _(r) {
  if (typeof r != "string") return r;
  const a = qg[r];
  return (a == null ? void 0 : a[Kl]) ?? r;
}
const Kg = "_button_180pj_1", Yg = "_full_180pj_32", Gg = "_primary_180pj_37", Jg = "_secondary_180pj_49", Xg = "_ghost_180pj_61", Zg = "_remove_180pj_83", wl = {
  button: Kg,
  full: Yg,
  primary: Gg,
  secondary: Jg,
  ghost: Xg,
  remove: Zg
}, oe = ({
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
        ${wl.button}
        ${wl[a]}
        ${i ? wl.full : ""}
        ${f}
      `,
    children: [
      c,
      r,
      d
    ]
  }
), bl = "ha-dialog-ui-api-enabled-change", lp = v.createContext(!1), Yl = () => v.useContext(lp), up = v.createContext(!1), Gl = () => v.useContext(up), li = "ha-dialog-ui-remote-server-change", cp = v.createContext(null), Hr = () => v.useContext(cp), nt = (r = 768) => {
  const [a, i] = v.useState(
    window.innerWidth <= r
  );
  return v.useEffect(() => {
    const c = window.matchMedia(`(max-width: ${r}px)`), d = (f) => {
      i(f.matches);
    };
    return i(c.matches), c.addEventListener("change", d), () => c.removeEventListener("change", d);
  }, [r]), a;
}, e_ = "_tabs_1vwxg_1", t_ = "_dropdown_1vwxg_16", n_ = "_tab_1vwxg_1", r_ = "_active_1vwxg_49", s_ = "_menu_1vwxg_59", o_ = "_chevron_1vwxg_76", i_ = "_menuItem_1vwxg_84", ve = {
  tabs: e_,
  dropdown: t_,
  tab: n_,
  active: r_,
  menu: s_,
  chevron: o_,
  menuItem: i_
}, ht = () => {
  const r = nt(), a = Yl(), i = Gl(), c = Hr(), d = St(), [f, p] = v.useState(!1), m = v.useRef(null), g = v.useRef(null), w = v.useId();
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
                className: `${ve.tab} ${d.pathname.startsWith("/commands") ? ve.active : ""}`,
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
                  i && /* @__PURE__ */ o.jsx(
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
        /* @__PURE__ */ o.jsx(ql, { size: 16 }),
        /* @__PURE__ */ o.jsx("span", { children: _("Радионяня") })
      ] }),
      /* @__PURE__ */ o.jsxs(pt, { to: "/calls", className: ({ isActive: y }) => y ? `${ve.tab} ${ve.active}` : ve.tab, children: [
        /* @__PURE__ */ o.jsx(ai, { size: 16 }),
        /* @__PURE__ */ o.jsx("span", { children: _("Звонки") })
      ] }),
      i && /* @__PURE__ */ o.jsxs(pt, { to: "/downloads", className: ({ isActive: y }) => y ? `${ve.tab} ${ve.active}` : ve.tab, children: [
        /* @__PURE__ */ o.jsx(np, { size: 16 }),
        /* @__PURE__ */ o.jsx("span", { children: _("Импорт и экспорт") })
      ] }),
      a && i && /* @__PURE__ */ o.jsx(pt, { to: "/logs", className: ({ isActive: y }) => y ? `${ve.tab} ${ve.active}` : ve.tab, children: _("Логи") }),
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
}, Ps = "dialogCustomUiOverlay", Zo = [], ui = /* @__PURE__ */ new Set();
let a_ = 0, Ir = null, Rl = !1;
function l_() {
  Rl = !0, window.addEventListener("popstate", () => {
    Rl = !1;
    const r = [...ui];
    ui.clear(), queueMicrotask(() => r.forEach((a) => a()));
  }, { once: !0 }), history.back();
}
function dp(r, a) {
  const i = nt(), c = v.useRef(a);
  c.current = a, v.useEffect(() => {
    if (!r || !i) return;
    const d = `overlay-${++a_}`;
    let f = !1, p = !1, m = !1;
    const g = () => {
      var y;
      Zo.at(-1) !== d || ((y = history.state) == null ? void 0 : y[Ps]) === d || (f = !0, c.current());
    }, w = () => {
      var x;
      if (m) return;
      p = !0, Zo.push(d);
      const y = { ...history.state, [Ps]: d };
      Ir && ((x = history.state) == null ? void 0 : x[Ps]) === Ir ? (history.replaceState(y, ""), Ir = null) : history.pushState(y, ""), window.addEventListener("popstate", g);
    };
    return Rl ? ui.add(w) : w(), () => {
      var y;
      m = !0, ui.delete(w), window.removeEventListener("popstate", g), p && (Zo.splice(Zo.indexOf(d), 1), !f && ((y = history.state) == null ? void 0 : y[Ps]) === d && (Ir = d, queueMicrotask(() => {
        var x;
        Ir === d && (Ir = null, ((x = history.state) == null ? void 0 : x[Ps]) === d && l_());
      })));
    };
  }, [r, i]);
}
const u_ = "_overlay_tb5vv_1", c_ = "_sheet_tb5vv_11", d_ = "_handle_tb5vv_21", Xn = {
  overlay: u_,
  sheet: c_,
  handle: d_
}, Jl = ({
  open: r,
  className: a = "",
  labelledBy: i,
  onClose: c,
  children: d
}) => {
  dp(r, c);
  const [f, p] = v.useState(r), [m, g] = v.useState(r), w = v.useRef(0), y = v.useRef(0), [x, k] = v.useState(0);
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
  const j = (N) => {
    w.current = N.touches[0].clientY;
  }, b = (N) => {
    y.current = N.touches[0].clientY;
    const P = y.current - w.current;
    P > 0 && k(P);
  }, E = () => {
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
      className: `${Xn.overlay} ${m ? Xn.visible : ""} ${a}`,
      onClick: c,
      children: /* @__PURE__ */ o.jsxs(
        "section",
        {
          className: `${Xn.sheet} ${m ? Xn.open : ""}`,
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
                className: Xn.handleArea,
                onTouchStart: j,
                onTouchMove: b,
                onTouchEnd: E,
                children: /* @__PURE__ */ o.jsx("div", { className: Xn.handle })
              }
            ),
            /* @__PURE__ */ o.jsx("div", { className: Xn.content, children: d })
          ]
        }
      )
    }
  ) : null;
}, f_ = "_overlay_avpnk_1", p_ = "_heading_avpnk_16", h_ = "_close_avpnk_32", m_ = "_nav_avpnk_45", v_ = "_item_avpnk_51", y_ = "_icon_avpnk_70", g_ = "_label_avpnk_78", __ = "_arrow_avpnk_86", x_ = "_active_avpnk_91", hn = {
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
function w_({ open: r, onClose: a }) {
  const i = Yl(), c = Gl(), d = Hr(), { pathname: f } = St(), p = v.useId(), m = v.useRef(null), g = [
    ...d === !1 ? [
      { to: "/commands/main", label: "Основные команды", icon: Xy },
      { to: "/commands/sub", label: "Второстепенные команды", icon: By },
      { to: "/commands/direct/main", label: "Прямые команды", icon: ff },
      { to: "/commands/direct/template", label: "Вложенные команды", icon: Qy },
      { to: "/commands/settings", label: "Ответы по умолчанию", icon: xl },
      ...c ? [{ to: "/commands/whisper", label: "Промпт распознавания", icon: xl }] : []
    ] : d === !0 ? [{ to: "/scripts", label: "Действия удалённых команд", icon: ff }] : [],
    { to: "/timer", label: "Таймеры", icon: Ly },
    { to: "/alarm", label: "Будильники", icon: ep },
    { to: "/monitor", label: "Радионяня", icon: ql },
    { to: "/calls", label: "Звонки", icon: ai },
    ...c ? [{ to: "/downloads", label: "Импорт и экспорт", icon: np }] : [],
    ...i && c ? [{ to: "/logs", label: "Логи", icon: xl }] : [],
    { to: "/settings", label: "Настройки", icon: sp }
  ];
  return v.useEffect(() => {
    if (!r) return;
    const w = requestAnimationFrame(() => {
      var y, x, k;
      return (k = ((y = m.current) == null ? void 0 : y.querySelector('[aria-current="page"]')) ?? ((x = m.current) == null ? void 0 : x.querySelector("a"))) == null ? void 0 : k.focus();
    });
    return () => cancelAnimationFrame(w);
  }, [r]), /* @__PURE__ */ o.jsx(Jl, { open: r, onClose: a, labelledBy: p, className: hn.overlay, children: /* @__PURE__ */ o.jsxs("div", { ref: m, onKeyDown: (w) => {
    if (w.key !== "Tab") return;
    const y = [...m.current.querySelectorAll("button, a")], x = y[0], k = y[y.length - 1];
    w.shiftKey && w.target === x ? (w.preventDefault(), k.focus()) : !w.shiftKey && w.target === k && (w.preventDefault(), x.focus());
  }, children: [
    /* @__PURE__ */ o.jsxs("div", { className: hn.heading, children: [
      /* @__PURE__ */ o.jsx("h2", { id: p, children: _("Разделы") }),
      /* @__PURE__ */ o.jsx("button", { type: "button", className: hn.close, "aria-label": _("Закрыть меню разделов"), onClick: a, children: /* @__PURE__ */ o.jsx(op, { size: 20 }) })
    ] }),
    /* @__PURE__ */ o.jsx("nav", { className: hn.nav, "aria-label": _("Навигация интеграции"), children: g.map(({ to: w, label: y, icon: x }) => /* @__PURE__ */ o.jsxs(
      pt,
      {
        to: w,
        end: !0,
        className: ({ isActive: k }) => `${hn.item} ${k ? hn.active : ""}`,
        onClick: (k) => {
          f === w && k.preventDefault(), a();
        },
        children: [
          /* @__PURE__ */ o.jsx("span", { className: hn.icon, children: /* @__PURE__ */ o.jsx(x, { size: 20, strokeWidth: 1.8 }) }),
          /* @__PURE__ */ o.jsx("span", { className: hn.label, children: _(y) }),
          f === w ? /* @__PURE__ */ o.jsx(Ny, { size: 18, "aria-hidden": "true" }) : /* @__PURE__ */ o.jsx(ky, { size: 16, className: hn.arrow, "aria-hidden": "true" })
        ]
      },
      w
    )) })
  ] }) });
}
const k_ = "_search_1h7xe_1", S_ = {
  search: k_
};
function Fr({ value: r, onChange: a }) {
  return /* @__PURE__ */ o.jsxs("div", { className: S_.search, children: [
    /* @__PURE__ */ o.jsx(cg, { size: 18, "aria-hidden": "true" }),
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
const C_ = "_header_1pxju_1", j_ = "_bar_1pxju_9", E_ = "_tools_1pxju_18", N_ = "_title_1pxju_31", T_ = "_menuButton_1pxju_38", b_ = "_active_1pxju_76", Zn = {
  header: C_,
  bar: j_,
  tools: E_,
  title: N_,
  menuButton: T_,
  active: b_
}, mt = ({ title: r = "", search: a, beforeSearch: i }) => {
  const c = nt(), [d, f] = v.useState(!1), p = v.useRef(null), m = () => {
    var g;
    f(!1), (g = p.current) == null || g.focus();
  };
  return v.useEffect(() => {
    c || f(!1);
  }, [c]), /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
    /* @__PURE__ */ o.jsxs("header", { className: Zn.header, children: [
      /* @__PURE__ */ o.jsxs("div", { className: Zn.bar, children: [
        /* @__PURE__ */ o.jsx(
          "button",
          {
            type: "button",
            "aria-label": _("Открыть меню Home Assistant"),
            className: Zn.menuButton,
            onClick: (g) => g.currentTarget.dispatchEvent(new CustomEvent("hass-toggle-menu", { bubbles: !0, composed: !0 })),
            children: /* @__PURE__ */ o.jsx(rp, { size: 20 })
          }
        ),
        /* @__PURE__ */ o.jsx("h1", { className: Zn.title, children: _(r) }),
        /* @__PURE__ */ o.jsx(
          "button",
          {
            type: "button",
            ref: p,
            "aria-label": _("Открыть меню разделов"),
            "aria-haspopup": "dialog",
            "aria-expanded": d,
            className: `${Zn.menuButton} ${d ? Zn.active : ""}`,
            onClick: () => f(!0),
            children: /* @__PURE__ */ o.jsx(Yy, { size: 20 })
          }
        )
      ] }),
      c && (i || a) && /* @__PURE__ */ o.jsxs("div", { className: Zn.tools, children: [
        i,
        a && /* @__PURE__ */ o.jsx(Fr, { ...a })
      ] })
    ] }),
    c && /* @__PURE__ */ o.jsx(w_, { open: d, onClose: m })
  ] });
};
function R_({ retry: r }) {
  const a = lr();
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
          /* @__PURE__ */ o.jsx(ht, {}),
          /* @__PURE__ */ o.jsx(mt, { title: _("Панель диалога") })
        ] }) : /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
          /* @__PURE__ */ o.jsx(
            oe,
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
          /* @__PURE__ */ o.jsx(oe, { onClick: r, children: _("Открыть повторно") })
        ] }) })
      ]
    }
  );
}
class fp extends v.Component {
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
const A_ = "_container_x92qn_1", P_ = "_rows_x92qn_9", $_ = "_hidden_x92qn_20", M_ = "_overlay_x92qn_24", I_ = "_card_x92qn_32", L_ = "_title_x92qn_51", D_ = "_subtitle_x92qn_51", O_ = "_srOnly_x92qn_70", z_ = "_grid_x92qn_89", nn = {
  container: A_,
  rows: P_,
  hidden: $_,
  overlay: M_,
  card: I_,
  title: L_,
  subtitle: D_,
  srOnly: O_,
  grid: z_
};
function Kt({ loading: r, itemCount: a, append: i = !1, children: c, placeholderCount: d = 10, grid: f = !1, label: p = "Загрузка..." }) {
  const m = r && a > 0 && !i, g = r && /* @__PURE__ */ o.jsxs("div", { className: `${m ? nn.overlay : nn.rows} ${f ? nn.grid : ""}`, role: "status", "aria-live": "polite", children: [
    /* @__PURE__ */ o.jsx("span", { className: nn.srOnly, children: _(p) }),
    Array.from({ length: m ? a : i && a > 0 ? 3 : d }, (w, y) => /* @__PURE__ */ o.jsxs("div", { className: nn.card, "aria-hidden": "true", children: [
      /* @__PURE__ */ o.jsx("span", { className: nn.title }),
      /* @__PURE__ */ o.jsx("span", { className: nn.subtitle })
    ] }, y))
  ] });
  return /* @__PURE__ */ o.jsxs("div", { className: nn.container, "aria-busy": r, children: [
    /* @__PURE__ */ o.jsx("div", { className: `${nn.rows} ${m ? nn.hidden : ""}`, "aria-hidden": m || void 0, children: c }),
    g
  ] });
}
const H_ = "_loader_1tvqb_1", F_ = "_fullscreen_1tvqb_7", pf = {
  loader: H_,
  fullscreen: F_
}, mi = ({ label: r = "Загрузка...", fullscreen: a = !1 }) => /* @__PURE__ */ o.jsx("div", { className: `${pf.loader} ${a ? pf.fullscreen : ""}`, children: /* @__PURE__ */ o.jsx(Kt, { loading: !0, itemCount: 0, placeholderCount: 4, label: r }) }), W_ = "_error_fi1f1_1", B_ = {
  error: W_
}, Ge = ({ error: r, retry: a, busy: i = !1 }) => r ? /* @__PURE__ */ o.jsxs("div", { role: "alert", className: B_.error, children: [
  /* @__PURE__ */ o.jsx("p", { children: _(r) }),
  a && /* @__PURE__ */ o.jsx(oe, { variant: "secondary", disabled: i, onClick: a, children: _("Повторить загрузку") })
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
function Tt(r, a = "Не удалось выполнить операцию. Проверьте журнал Home Assistant и повторите попытку.") {
  return r && typeof r == "object" && "code" in r && typeof r.code == "string" ? (r.code === "call_error" || r.code === "monitor_error" || r.code === "whisper_prompt_error") && "message" in r && typeof r.message == "string" ? r.message : hf[r.code] ?? a : r instanceof Error && /connection|network|fetch|disconnected/i.test(r.message) ? hf.connection_lost : a;
}
function Qt() {
  const [r, a] = v.useState(null), [i, c] = v.useState(!1), [d, f] = v.useState(!1), p = v.useRef(0), m = v.useRef(null), g = v.useCallback(async (x, k = {}) => {
    if (k.exclusive && p.current > 0) return !1;
    p.current += 1, c(!0), a(null), f(!1);
    try {
      return await x(), m.current = null, !0;
    } catch (j) {
      return a(Tt(j, k.fallback)), m.current = k.retryable ? x : null, f(!!k.retryable), !1;
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
const pp = v.createContext(null);
function ct() {
  const r = v.useContext(pp);
  if (!r)
    throw new Error(
      "DialogContext not initialized"
    );
  return r;
}
const U_ = "_toast_1g76h_1", V_ = "_warning_1g76h_43", mf = {
  toast: U_,
  warning: V_
};
function q_({ message: r, warning: a = !1, onClose: i }) {
  v.useEffect(() => {
    const d = setTimeout(i, 5e3);
    return () => clearTimeout(d);
  }, [r, a, i]);
  const c = a ? yg : Ry;
  return /* @__PURE__ */ o.jsxs("div", { role: "status", "aria-live": "polite", className: `${mf.toast} ${a ? mf.warning : ""}`, children: [
    /* @__PURE__ */ o.jsx(c, { size: 22, "aria-hidden": "true" }),
    /* @__PURE__ */ o.jsx("span", { children: r }),
    /* @__PURE__ */ o.jsx("button", { type: "button", "aria-label": _("Закрыть уведомление"), onClick: i, children: /* @__PURE__ */ o.jsx(op, { size: 18 }) })
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
  var a;
  return (a = Object.entries(hp).find(([i]) => r === i || r === _(i))) == null ? void 0 : a[1];
}
function vi(r) {
  const a = _(hp["Название команды"]);
  return r ? `${a}
UUID: ${r}` : a;
}
const Q_ = "_labelRow_1w41x_1", K_ = "_helpButton_1w41x_12", Y_ = "_tooltip_1w41x_37", G_ = "_helpOverlay_1w41x_56", J_ = "_sheetContent_1w41x_60", Ds = {
  labelRow: Q_,
  helpButton: K_,
  tooltip: Y_,
  helpOverlay: G_,
  sheetContent: J_
};
function Xl({ label: r, htmlFor: a, className: i, hint: c }) {
  const d = c ?? mp(r);
  return /* @__PURE__ */ o.jsxs("div", { className: Ds.labelRow, children: [
    /* @__PURE__ */ o.jsx("label", { htmlFor: a, className: i, children: _(r) }),
    d && /* @__PURE__ */ o.jsx(sr, { label: r, description: d })
  ] });
}
function sr({ label: r, description: a = mp(r) ?? "" }) {
  var E, N;
  const i = nt(), [c, d] = v.useState(!1), [f, p] = v.useState({ left: 12, top: 12 }), m = v.useRef(null), g = v.useRef(null), w = v.useRef(), y = v.useId(), x = () => {
    var P;
    d(!1), i && ((P = m.current) == null || P.focus());
  }, k = () => {
    clearTimeout(w.current), d(!0);
  }, j = () => {
    w.current = setTimeout(() => d(!1), 150);
  };
  v.useEffect(() => () => clearTimeout(w.current), []), v.useEffect(() => {
    d(!1);
  }, [i]), v.useLayoutEffect(() => {
    if (!c || i || !m.current || !g.current) return;
    const P = m.current.getBoundingClientRect(), H = g.current.getBoundingClientRect();
    p({
      left: Math.max(12, Math.min(P.left, window.innerWidth - H.width - 12)),
      top: Math.max(12, P.bottom + 8 + H.height <= window.innerHeight - 12 ? P.bottom + 8 : P.top - H.height - 8)
    });
  }, [c, i]), v.useEffect(() => {
    if (!c) return;
    const P = ($) => {
      $.key === "Escape" ? ($.preventDefault(), $.stopImmediatePropagation(), x()) : i && $.key === "Tab" && $.preventDefault();
    };
    window.addEventListener("keydown", P, !0);
    const H = ($) => {
      var z;
      !i && !($.target instanceof Node && ((z = g.current) != null && z.contains($.target))) && d(!1);
    };
    return window.addEventListener("scroll", H, !0), window.addEventListener("resize", H), () => {
      window.removeEventListener("keydown", P, !0), window.removeEventListener("scroll", H, !0), window.removeEventListener("resize", H);
    };
  }, [c, i]);
  const b = ((E = m.current) == null ? void 0 : E.closest("[data-theme]")) ?? ((N = m.current) == null ? void 0 : N.getRootNode());
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
          i || k();
        },
        onMouseLeave: () => {
          i || j();
        },
        onFocus: () => {
          i || k();
        },
        onBlur: () => {
          i || j();
        },
        onClick: k,
        children: /* @__PURE__ */ o.jsx(Py, { size: 16, "aria-hidden": "true" })
      }
    ),
    c && b && Xf.createPortal(i ? /* @__PURE__ */ o.jsx(Jl, { open: !0, onClose: x, className: Ds.helpOverlay, labelledBy: y, children: /* @__PURE__ */ o.jsxs("div", { className: Ds.sheetContent, children: [
      /* @__PURE__ */ o.jsx("h3", { id: y, children: _(r) }),
      /* @__PURE__ */ o.jsx("p", { children: _(a) }),
      /* @__PURE__ */ o.jsx(oe, { autoFocus: !0, variant: "secondary", onClick: x, children: _("Закрыть подсказку") })
    ] }) }) : /* @__PURE__ */ o.jsx(
      "div",
      {
        ref: g,
        id: y,
        role: "tooltip",
        className: Ds.tooltip,
        style: f,
        onMouseEnter: k,
        onMouseLeave: j,
        children: _(a)
      }
    ), b)
  ] });
}
const X_ = "_field_1vuim_1", Z_ = "_label_1vuim_10", e1 = "_inputWrapper_1vuim_18", t1 = "_input_1vuim_18", n1 = "_passwordInput_1vuim_40", r1 = "_passwordToggle_1vuim_66", s1 = "_error_1vuim_95", o1 = "_errorText_1vuim_108", Dn = {
  field: X_,
  label: Z_,
  inputWrapper: e1,
  input: t1,
  passwordInput: n1,
  passwordToggle: r1,
  error: s1,
  errorText: o1
}, Je = ({
  label: r,
  hint: a,
  error: i,
  disabled: c,
  className: d = "",
  id: f,
  type: p,
  ...m
}) => {
  const g = v.useId(), [w, y] = v.useState(!1), x = f ?? g, k = p === "password" && w ? "text" : p;
  return /* @__PURE__ */ o.jsxs("div", { className: Dn.field, children: [
    r && /* @__PURE__ */ o.jsx(Xl, { label: r, htmlFor: x, className: Dn.label, hint: a }),
    /* @__PURE__ */ o.jsxs("div", { className: Dn.inputWrapper, children: [
      /* @__PURE__ */ o.jsx(
        "input",
        {
          id: x,
          disabled: c,
          type: k,
          ...m,
          "aria-invalid": i ? !0 : m["aria-invalid"],
          "aria-describedby": [m["aria-describedby"], i ? `${x}-error` : void 0].filter(Boolean).join(" ") || void 0,
          className: `
            ${Dn.input}
            ${p === "password" ? Dn.passwordInput : ""}
            ${i ? Dn.error : ""}
            ${d}
          `
        }
      ),
      p === "password" && /* @__PURE__ */ o.jsx(
        "button",
        {
          type: "button",
          className: Dn.passwordToggle,
          onClick: () => y((j) => !j),
          disabled: c,
          "aria-label": w ? "Hide password" : "Show password",
          children: w ? "🙈" : "👁"
        }
      )
    ] }),
    i && /* @__PURE__ */ o.jsx("span", { id: `${x}-error`, className: Dn.errorText, children: _(i) })
  ] });
}, i1 = "_field_1aipr_1", a1 = "_label_1aipr_8", l1 = "_textarea_1aipr_14", u1 = "_error_1aipr_46", c1 = "_errorText_1aipr_55", $s = {
  field: i1,
  label: a1,
  textarea: l1,
  error: u1,
  errorText: c1
}, or = ({
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
}, d1 = "_form_15zw4_1", f1 = "_actions_15zw4_8", vf = {
  form: d1,
  actions: f1
};
function p1() {
  const r = ct(), a = Qt(), [i, c] = v.useState({ url: "", initial_prompt: "", has_token: !1 }), [d, f] = v.useState(""), [p, m] = v.useState(""), [g, w] = v.useState(!1), [y, x] = v.useState(null);
  v.useEffect(() => {
    let b = !0;
    return a.run(async () => {
      const E = await r.getData("get_whisper_prompt");
      b && (c({ ...E, initial_prompt: Array.isArray(E.initial_prompt) ? E.initial_prompt.join("; ") : E.initial_prompt }), m(E.url), w(!0));
    }, { retryable: !0 }), () => {
      b = !1;
    };
  }, [r, a.run]);
  const k = (b) => {
    c((E) => ({ ...E, ...b })), x(null);
  }, j = (b) => a.run(async () => {
    const E = await r.saveData({
      url: i.url,
      token: d,
      apply: b,
      initial_prompt: i.initial_prompt
    }, "save_whisper_prompt");
    c((N) => ({ ...N, initial_prompt: Array.isArray(E.initial_prompt) ? E.initial_prompt.join("; ") : E.initial_prompt, has_token: !!(d.trim() || N.has_token && i.url === p) })), x({ message: b ? E.applied ? "Сохранено и применено в Whisper. Перезапуск контейнера не нужен." : "Сохранено в Home Assistant. Не удалось применить в Whisper. После восстановления подключения нажмите «Отправить в Whisper» повторно." : "Сохранено в Home Assistant.", warning: b && !E.applied }), m(i.url), f("");
  }, { exclusive: !0 });
  return /* @__PURE__ */ o.jsxs("section", { className: vf.form, children: [
    /* @__PURE__ */ o.jsx(Ge, { ...a }),
    !g && !a.error && /* @__PURE__ */ o.jsx(mi, {}),
    g && /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
      /* @__PURE__ */ o.jsx(
        Je,
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
        Je,
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
        or,
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
      /* @__PURE__ */ o.jsxs("div", { className: vf.actions, children: [
        /* @__PURE__ */ o.jsx(oe, { variant: "secondary", disabled: a.busy, onClick: () => void j(!1), children: _("Сохранить") }),
        /* @__PURE__ */ o.jsx(oe, { disabled: a.busy || !i.url.trim(), onClick: () => void j(!0), children: _("Отправить в Whisper") })
      ] }),
      y && /* @__PURE__ */ o.jsx(q_, { message: _(y.message), warning: y.warning, onClose: () => x(null) })
    ] })
  ] });
}
const h1 = "_page_z6937_7", m1 = "_header_z6937_19", v1 = "_headerTop_z6937_24", y1 = "_heading_z6937_31", g1 = "_title_z6937_36", _1 = "_description_z6937_45", x1 = "_actions_z6937_52", w1 = "_list_z6937_57", k1 = "_innerTabs_z6937_88", S1 = "_innerTab_z6937_88", C1 = "_activeInnerTab_z6937_121", j1 = "_settingsActions_z6937_131", E1 = "_listSentinel_z6937_141", N1 = "_settingsSections_z6937_145", T1 = "_settingsSection_z6937_145", b1 = "_settingsMobileActions_z6937_171", R1 = "_connectionFields_z6937_191", A1 = "_collectionHeader_z6937_197", X = {
  page: h1,
  header: m1,
  headerTop: v1,
  heading: y1,
  title: g1,
  description: _1,
  actions: x1,
  list: w1,
  innerTabs: k1,
  innerTab: S1,
  activeInnerTab: C1,
  settingsActions: j1,
  listSentinel: E1,
  settingsSections: N1,
  settingsSection: T1,
  settingsMobileActions: b1,
  connectionFields: R1,
  collectionHeader: A1
};
function P1() {
  const r = nt();
  return /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
    /* @__PURE__ */ o.jsx(mt, { title: "Промпт распознавания" }),
    /* @__PURE__ */ o.jsxs("div", { className: X.page, children: [
      !r && /* @__PURE__ */ o.jsx(ht, {}),
      /* @__PURE__ */ o.jsx("div", { className: `${X.header} ${X.collectionHeader}`, children: /* @__PURE__ */ o.jsx("div", { className: X.headerTop, children: /* @__PURE__ */ o.jsx("div", { className: X.heading, children: !r && /* @__PURE__ */ o.jsx("h1", { className: X.title, children: _("Промпт распознавания") }) }) }) }),
      /* @__PURE__ */ o.jsx(p1, {})
    ] })
  ] });
}
const $1 = "_heading_1w2wz_1", M1 = "_note_1w2wz_6", I1 = "_entries_1w2wz_12", L1 = "_entry_1w2wz_19", D1 = "_line_1w2wz_27", O1 = "_error_1w2wz_40", z1 = "_body_1w2wz_49", On = {
  heading: $1,
  note: M1,
  entries: I1,
  entry: L1,
  line: D1,
  error: O1,
  body: z1
};
function H1() {
  const r = ct(), a = Qt(), [i, c] = v.useState([]);
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
    /* @__PURE__ */ o.jsx(mt, { title: _("Логи") }),
    /* @__PURE__ */ o.jsxs("main", { className: X.page, children: [
      /* @__PURE__ */ o.jsx(ht, {}),
      /* @__PURE__ */ o.jsx("h1", { className: On.heading, children: _("Логи") }),
      /* @__PURE__ */ o.jsx("p", { className: On.note, children: _("Последние 200 записей API с телами запросов и ответов. Обновление каждые 3 секунды. После перезапуска журнал очищается. Секретные поля и настроенные токены скрыты.") }),
      /* @__PURE__ */ o.jsx(Ge, { ...a }),
      !i.length && !a.busy && !a.error && /* @__PURE__ */ o.jsx("p", { children: _("Запросов к API пока нет.") }),
      /* @__PURE__ */ o.jsx("div", { className: On.entries, children: i.map((d) => /* @__PURE__ */ o.jsxs("article", { className: On.entry, children: [
        /* @__PURE__ */ o.jsxs("div", { className: On.line, children: [
          /* @__PURE__ */ o.jsx("time", { dateTime: d.timestamp, children: new Date(d.timestamp).toLocaleString() }),
          /* @__PURE__ */ o.jsxs("strong", { children: [
            d.method,
            " ",
            d.path
          ] })
        ] }),
        /* @__PURE__ */ o.jsxs("div", { className: On.line, children: [
          /* @__PURE__ */ o.jsx("span", { children: _({ connected: "SSE подключён", event: "Событие SSE", completed: "Запрос завершён" }[d.phase] ?? d.phase) }),
          d.status !== null && /* @__PURE__ */ o.jsxs("span", { className: d.status >= 400 ? On.error : void 0, children: [
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
          ([f, p]) => p != null && /* @__PURE__ */ o.jsxs("details", { className: On.body, children: [
            /* @__PURE__ */ o.jsx("summary", { children: _(f) }),
            /* @__PURE__ */ o.jsx("pre", { children: JSON.stringify(p, null, 2) })
          ] }, f)
        )
      ] }, `${d.timestamp}-${d.phase}`)) })
    ] })
  ] });
}
var Al = /* @__PURE__ */ new Map(), ei = /* @__PURE__ */ new WeakMap(), yf = 0, F1;
function W1(r) {
  return r ? (ei.has(r) || (yf += 1, ei.set(r, yf.toString())), ei.get(r)) : "0";
}
function B1(r) {
  return Object.keys(r).sort().filter(
    (a) => r[a] !== void 0
  ).map((a) => `${a}_${a === "root" ? W1(r.root) : r[a]}`).toString();
}
function U1(r) {
  const a = B1(r);
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
function V1(r, a, i = {}, c = F1) {
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
  const { id: d, observer: f, elements: p } = U1(i), m = p.get(r) || [];
  return p.has(r) || p.set(r, m), m.push(a), f.observe(r), function() {
    m.splice(m.indexOf(a), 1), m.length === 0 && (p.delete(r), f.unobserve(r)), p.size === 0 && (f.disconnect(), Al.delete(d));
  };
}
function q1({
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
  const [x, k] = v.useState(null), j = v.useRef(w), b = v.useRef(m), [E, N] = v.useState({
    inView: !!m,
    entry: void 0
  });
  j.current = w, v.useEffect(
    () => {
      if (b.current === void 0 && (b.current = m), p || !x) return;
      let z;
      return z = V1(
        x,
        (W, I) => {
          const J = b.current;
          b.current = W, !(J === void 0 && !W) && (N({
            inView: W,
            entry: I
          }), j.current && j.current(W, I), I.isIntersecting && f && z && (z(), z = void 0));
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
        z && z();
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
  const P = (y = E.entry) == null ? void 0 : y.target, H = v.useRef(void 0);
  !x && P && !f && !p && H.current !== P && (H.current = P, N({
    inView: !!m,
    entry: void 0
  }), b.current = m);
  const $ = [k, E.inView, E.entry];
  return $.ref = $[0], $.inView = $[1], $.entry = $[2], $;
}
function Wr(r, a, i, c) {
  const { ref: d, inView: f } = q1({ threshold: 0, rootMargin: "0px 0px 180px 0px" }), [p, m] = v.useState(!1);
  return v.useEffect(() => {
    !a && (r == null ? void 0 : r.page) === 1 && m(!0);
  }, [a, r]), v.useEffect(() => {
    p && c && f && !a && r && r.page < r.total_pages && i(r.page + 1, !0);
  }, [p, c, f, a, r, i]), d;
}
const kl = (r) => ({
  data: r.data ?? r.script_actions ?? [],
  page: r.page ?? 1,
  page_size: r.page_size ?? 10,
  total_pages: r.total_pages ?? 1,
  total_items: r.total_items ?? 0
});
function vp(r) {
  const a = ct(), [i, c] = v.useState(null), [d, f] = v.useState(""), p = v.useRef(""), m = v.useRef(0), [g, w] = v.useState(!0), [y, x] = v.useState(null), k = v.useRef(), j = v.useRef(1), b = v.useRef(!1), E = v.useRef(), N = v.useCallback(async ($, z = !1) => {
    const W = ++m.current, I = p.current.trim(), J = $ === void 0 && b.current, B = $ ?? j.current;
    x(null), w(!0);
    try {
      let G = kl(await a.getPage(r, B, void 0, I));
      const ye = Math.max(1, G.total_pages);
      if (B > ye && (G = kl(await a.getPage(r, ye, void 0, I))), J && G.page > 1) {
        const de = await Promise.all(Array.from({ length: G.page - 1 }, (ge, he) => a.getPage(r, he + 1, void 0, I).then(kl)));
        G = { ...G, data: [...de.flatMap((ge) => ge.data), ...G.data] };
      }
      if (W !== m.current) return;
      J || (b.current = z), k.current = void 0, j.current = G.page, c((de) => z && de ? { ...G, data: [...de.data, ...G.data] } : G);
    } catch (G) {
      if (W !== m.current) return;
      k.current = { page: $, append: z }, x(Tt(G, "Не удалось загрузить список. Проверьте подключение к Home Assistant."));
    } finally {
      W === m.current && w(!1);
    }
  }, [a, r]);
  v.useEffect(() => {
    const $ = E.current !== r;
    if (E.current = r, !$ && p.current === d) return;
    p.current = d, j.current = 1, b.current = !1, m.current += 1, w(!0);
    const z = window.setTimeout(() => {
      N(1);
    }, $ ? 0 : 250);
    return () => window.clearTimeout(z);
  }, [r, N, d]);
  const P = v.useCallback(($) => {
    c((z) => z && { ...z, data: $(z.data) });
  }, []);
  return { query: d, setQuery: f, page: i, loading: g, loadPage: N, updateItems: P, error: y, retry: () => {
    var $, z;
    N(($ = k.current) == null ? void 0 : $.page, ((z = k.current) == null ? void 0 : z.append) ?? !1);
  } };
}
function Q1() {
  const r = ct(), { query: a, setQuery: i, page: c, loading: d, loadPage: f, error: p, retry: m } = vp("get_script_actions_short"), g = c ? { ...c, script_actions: c.data } : null;
  return { query: a, setQuery: i, error: p, retry: m, loading: d, scripts: g, loadScripts: f, getAvailableScripts: () => r.getScripts(), saveScript: async (b) => {
    await r.saveData(b, "save_script_action"), await f();
  }, updateScript: async (b, E) => {
    await r.updateRecord(b, "update_script_action", E), await f();
  }, getScriptAction: async (b) => (await r.getRecord(b, "get_script_action")).data, deleteScriptAction: async (b) => {
    await r.deleteRecord(b, "delete_script_action"), await f();
  } };
}
const K1 = "_subtitle_c1esh_1", Y1 = "_card_c1esh_6", G1 = "_content_c1esh_32", J1 = "_title_c1esh_40", X1 = "_arrow_c1esh_46", Z1 = "_titleOnly_c1esh_57", Lr = {
  subtitle: K1,
  card: Y1,
  content: G1,
  title: J1,
  arrow: X1,
  titleOnly: Z1
}, Br = ({
  title: r,
  subTitle: a,
  onClick: i
}) => /* @__PURE__ */ o.jsxs(
  "button",
  {
    type: "button",
    className: `${Lr.card} ${a ? "" : Lr.titleOnly}`,
    onClick: i,
    children: [
      /* @__PURE__ */ o.jsxs("div", { className: Lr.content, children: [
        /* @__PURE__ */ o.jsx("div", { className: Lr.title, children: r }),
        a && /* @__PURE__ */ o.jsx("div", { className: Lr.subtitle, children: _(a) })
      ] }),
      /* @__PURE__ */ o.jsx("div", { className: Lr.arrow, "aria-hidden": "true", children: "→" })
    ]
  }
), e0 = "_pagination_r0e80_1", t0 = "_button_r0e80_10", n0 = "_label_r0e80_34", r0 = "_pages_r0e80_40", s0 = "_active_r0e80_48", er = {
  pagination: e0,
  button: t0,
  label: n0,
  pages: r0,
  active: s0
}, Ur = ({ page: r, totalPages: a, onChange: i }) => {
  if (a <= 1) return null;
  const c = Array.from(/* @__PURE__ */ new Set([
    1,
    ...Array.from({ length: 5 }, (f, p) => r + p - 2).filter((f) => f >= 1 && f <= a),
    a
  ])).sort((f, p) => f - p), d = (f) => {
    Number.isInteger(f) && f >= 1 && f <= a && f !== r && i(f);
  };
  return /* @__PURE__ */ o.jsx("nav", { className: er.pagination, "aria-label": _("Страницы списка"), children: /* @__PURE__ */ o.jsxs("div", { className: er.pages, children: [
    /* @__PURE__ */ o.jsx(
      "button",
      {
        type: "button",
        className: er.button,
        disabled: r <= 1,
        onClick: () => d(r - 1),
        "aria-label": _("Предыдущая страница"),
        children: "‹"
      }
    ),
    c.map((f, p) => /* @__PURE__ */ o.jsxs(Af.Fragment, { children: [
      p > 0 && f - c[p - 1] > 1 && /* @__PURE__ */ o.jsx("span", { className: er.label, "aria-hidden": "true", children: "…" }),
      /* @__PURE__ */ o.jsx(
        "button",
        {
          type: "button",
          className: `${er.button} ${f === r ? er.active : ""}`,
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
        className: er.button,
        disabled: r >= a,
        onClick: () => d(r + 1),
        "aria-label": _("Следующая страница"),
        children: "›"
      }
    )
  ] }) });
}, o0 = "_overlay_1m3e5_1", i0 = "_modal_1m3e5_1", a0 = "_header_1m3e5_1", l0 = "_body_1m3e5_1", u0 = "_footer_1m3e5_1", c0 = "_sm_1m3e5_32", d0 = "_md_1m3e5_36", f0 = "_lg_1m3e5_40", p0 = "_xl_1m3e5_44", h0 = "_title_1m3e5_59", m0 = "_close_1m3e5_86", v0 = "_fields_1m3e5_116", y0 = "_suspended_1m3e5_124", g0 = "_heading_1m3e5_128", kt = {
  overlay: o0,
  modal: i0,
  header: a0,
  body: l0,
  footer: u0,
  sm: c0,
  md: d0,
  lg: f0,
  xl: p0,
  title: h0,
  close: m0,
  fields: v0,
  suspended: y0,
  heading: g0
}, Yt = ({
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
}) => (dp(r, c), v.useEffect(() => {
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
    className: `${kt.overlay} ${a ? kt.suspended : ""}`,
    "aria-hidden": a || void 0,
    onClick: c,
    children: /* @__PURE__ */ o.jsxs(
      "div",
      {
        className: `${kt.modal} ${kt[y]}`,
        role: p ? "dialog" : void 0,
        "aria-modal": p ? !0 : void 0,
        "aria-label": p,
        onClick: (x) => x.stopPropagation(),
        children: [
          /* @__PURE__ */ o.jsxs("div", { className: kt.header, children: [
            d && /* @__PURE__ */ o.jsx(
              oe,
              {
                variant: "ghost",
                className: kt.close,
                "aria-label": _("Назад к предыдущей команде"),
                onClick: d,
                children: /* @__PURE__ */ o.jsx(xy, { size: 20, "aria-hidden": "true" })
              }
            ),
            f && (m ? /* @__PURE__ */ o.jsxs("div", { className: kt.heading, children: [
              /* @__PURE__ */ o.jsx("h2", { className: kt.title, children: _(f) }),
              m
            ] }) : /* @__PURE__ */ o.jsx("h2", { className: kt.title, children: _(f) })),
            /* @__PURE__ */ o.jsx(
              oe,
              {
                variant: "ghost",
                className: kt.close,
                "aria-label": p ? _("Закрыть") : void 0,
                onClick: c,
                children: "✕"
              }
            )
          ] }),
          /* @__PURE__ */ o.jsxs("div", { className: kt.body, children: [
            /* @__PURE__ */ o.jsx(Ge, { ...i }),
            /* @__PURE__ */ o.jsx("fieldset", { className: kt.fields, disabled: i == null ? void 0 : i.busy, children: w })
          ] }),
          g && /* @__PURE__ */ o.jsx("div", { className: kt.footer, children: /* @__PURE__ */ o.jsx("fieldset", { className: kt.fields, disabled: i == null ? void 0 : i.busy, children: g }) })
        ]
      }
    )
  }
) : null), _0 = "_content_eng69_1", x0 = "_title_eng69_7", w0 = "_actions_eng69_14", k0 = "_row_eng69_20", S0 = "_identifier_eng69_31", Ms = {
  content: _0,
  title: x0,
  actions: w0,
  row: k0,
  identifier: S0
}, Zl = ({ open: r, title: a, uuid: i, onClose: c, actions: d, size: f = "md", layout: p = "column" }) => {
  const m = nt(), g = i ? /* @__PURE__ */ o.jsx("p", { className: Ms.identifier, children: i }) : null, w = /* @__PURE__ */ o.jsxs("div", { className: Ms.content, children: [
    m && /* @__PURE__ */ o.jsxs("div", { children: [
      /* @__PURE__ */ o.jsx("h3", { className: Ms.title, children: a }),
      g
    ] }),
    /* @__PURE__ */ o.jsx("div", { className: `${Ms.actions} ${p === "row" && !m ? Ms.row : ""}`, children: d.map((y) => /* @__PURE__ */ o.jsx(oe, { fullWidth: !0, variant: y.variant, onClick: () => {
      y.onClick(), c();
    }, children: _(y.label) }, y.label)) })
  ] });
  return m ? /* @__PURE__ */ o.jsx(Jl, { open: r, onClose: c, children: w }) : /* @__PURE__ */ o.jsx(Yt, { open: r, onClose: c, title: a, subtitle: g, size: f, children: w });
}, C0 = ({ uuid: r, title: a, open: i, onClose: c, onEdit: d, onDelete: f }) => r ? /* @__PURE__ */ o.jsx(Zl, { open: i, title: a, uuid: r, onClose: c, size: "sm", layout: "row", actions: [
  { label: "Изменить", onClick: () => d(r) },
  { label: "Удалить", variant: "remove", onClick: () => f(r) }
] }) : null, j0 = "_accordion_5owbj_1", E0 = "_header_5owbj_7", N0 = "_content_5owbj_20", ti = {
  accordion: j0,
  header: E0,
  content: N0
}, T0 = ({
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
}, b0 = "_wrapper_1fgdg_1", R0 = "_dropdown_1fgdg_10", A0 = "_option_1fgdg_22", P0 = "_title_1fgdg_46", $0 = "_uuid_1fgdg_51", M0 = "_hint_1fgdg_52", tr = {
  wrapper: b0,
  dropdown: R0,
  option: A0,
  title: P0,
  uuid: $0,
  hint: M0
}, I0 = ({
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
  const w = ct(), y = JSON.stringify(c), x = v.useMemo(() => JSON.parse(y), [y]), [k, j] = v.useState(null), b = m ? "" : i || ((k == null ? void 0 : k.uuid) === a ? k.title : "");
  v.useEffect(() => {
    var K;
    if (!a || i || m || (K = de.current) != null && K.contains(document.activeElement)) return;
    let R = !1;
    return (async () => {
      var U;
      try {
        for (const C of x) {
          const ae = (U = (await w.searchAssistantCommands(a, C)).data) == null ? void 0 : U.find((me) => me.uuid === a);
          if (ae) {
            R || j(ae);
            return;
          }
        }
      } catch {
      }
    })(), () => {
      R = !0;
    };
  }, [w, a, i, m, x]);
  const [E, N] = v.useState(null), [P, H] = v.useState(0), [$, z] = v.useState([]), [W, I] = v.useState(!1), [J, B] = v.useState(!1), [G, ye] = v.useState(!1), de = v.useRef(null), [ge, he] = v.useState({});
  v.useEffect(() => {
    var K, U;
    if (!W) return;
    const R = () => {
      var De, Ae;
      const C = (Ae = (De = de.current) == null ? void 0 : De.querySelector("input")) == null ? void 0 : Ae.getBoundingClientRect();
      if (!C) return;
      const O = window.visualViewport, ae = ((O == null ? void 0 : O.offsetTop) ?? 0) + 8, me = ((O == null ? void 0 : O.offsetTop) ?? 0) + ((O == null ? void 0 : O.height) ?? window.innerHeight) - 8, we = Math.min(me, Math.max(ae, C.bottom + 6)), ke = Math.min(me, Math.max(ae, C.top - 6)), Ne = me - we, Ce = ke - ae, Re = Ne < 180 && Ce > Ne, Z = Math.min(260, Re ? Ce : Ne), fe = Math.max(8, C.left);
      he({
        left: fe,
        width: Math.max(0, Math.min(C.width, window.innerWidth - fe - 8)),
        top: Re ? ke : we,
        transform: Re ? "translateY(-100%)" : void 0,
        maxHeight: Z
      });
    };
    return R(), window.addEventListener("scroll", R, !0), window.addEventListener("resize", R), (K = window.visualViewport) == null || K.addEventListener("resize", R), (U = window.visualViewport) == null || U.addEventListener("scroll", R), () => {
      var C, O;
      window.removeEventListener("scroll", R, !0), window.removeEventListener("resize", R), (C = window.visualViewport) == null || C.removeEventListener("resize", R), (O = window.visualViewport) == null || O.removeEventListener("scroll", R);
    };
  }, [W]);
  const _e = v.useRef(0), te = v.useRef(""), Ee = v.useMemo(() => a.trim(), [a]);
  v.useEffect(() => {
    if (!Ee) {
      _e.current += 1, N(null), te.current = "", z([]), I(!1);
      return;
    }
    if (Ee.length < d) {
      _e.current += 1, N(null), z([]), I(!1);
      return;
    }
    if (!G || b) {
      _e.current += 1, I(!1), B(!1);
      return;
    }
    if (te.current === Ee)
      return;
    te.current = Ee;
    const R = _e.current + 1;
    _e.current = R;
    const K = window.setTimeout(async () => {
      B(!0), N(null);
      try {
        let U = [];
        for (const C of x) {
          const O = await w.searchAssistantCommands(Ee, C), ae = Array.isArray(O == null ? void 0 : O.data) ? O.data : [];
          U.push(...ae);
        }
        if (_e.current !== R)
          return;
        z(U), I(U.length > 0);
      } catch (U) {
        _e.current === R && (N(Tt(U)), z([]), I(!1));
      } finally {
        _e.current === R && B(!1);
      }
    }, 250);
    return () => window.clearTimeout(K);
  }, [w, Ee, x, d, G, P, b]);
  const F = (R) => {
    const K = m ? m(R) : R.uuid;
    _e.current += 1, j(R), te.current = "", B(!1), z([]), f(K), p == null || p(R), I(!1);
  };
  return /* @__PURE__ */ o.jsxs("div", { ref: de, className: tr.wrapper, children: [
    /* @__PURE__ */ o.jsx(
      Je,
      {
        label: r,
        value: b || a,
        autoComplete: "off",
        placeholder: _("Начните вводить title или uuid"),
        error: g,
        onBlur: () => {
          ye(!1), window.setTimeout(() => I(!1), 150);
        },
        onFocus: () => {
          ye(!0), I(!b && $.length > 0);
        },
        onChange: (R) => {
          j(null), f(R.target.value);
        }
      }
    ),
    W && de.current && Xf.createPortal(
      /* @__PURE__ */ o.jsx("div", { role: "listbox", className: tr.dropdown, style: ge, children: $.map((R) => /* @__PURE__ */ o.jsxs(
        "button",
        {
          role: "option",
          type: "button",
          className: tr.option,
          onMouseDown: (K) => K.preventDefault(),
          onClick: () => F(R),
          children: [
            /* @__PURE__ */ o.jsx("span", { className: tr.title, children: R.title || "Без названия" }),
            /* @__PURE__ */ o.jsx("span", { className: tr.uuid, children: R.uuid }),
            R.mappingType && /* @__PURE__ */ o.jsxs("span", { className: tr.uuid, children: [
              _("mappingType:"),
              R.mappingType
            ] })
          ]
        },
        R.uuid
      )) }),
      de.current.closest("[data-theme]") ?? de.current
    ),
    /* @__PURE__ */ o.jsx(Ge, { error: E, busy: J, retry: () => {
      var R, K;
      te.current = "", (K = (R = de.current) == null ? void 0 : R.querySelector("input")) == null || K.focus(), H((U) => U + 1);
    } }),
    J && /* @__PURE__ */ o.jsx("span", { className: tr.hint, children: _("Поиск...") })
  ] });
}, L0 = "_field_1esqu_1", D0 = "_row_1esqu_5", O0 = "_inputWrapper_1esqu_11", z0 = "_clearButton_1esqu_22", H0 = "_rowError_1esqu_31", Vt = {
  field: L0,
  row: D0,
  inputWrapper: O0,
  clearButton: z0,
  rowError: H0
}, F0 = {
  parent_type: "search_assistant_commands",
  children_type: "search_assistant_sub_commands",
  children_direct_type: "search_assistant_sub_direct_controls"
};
function Sl({ field: r, value: a, error: i, onChange: c }) {
  return Hr() ? /* @__PURE__ */ o.jsx(Je, { label: _(r), value: a, error: i, onChange: (f) => c(f.target.value) }) : /* @__PURE__ */ o.jsx(
    I0,
    {
      label: _(r),
      value: a,
      error: i,
      searchSource: [F0[r]],
      minQueryLength: 3,
      onChange: c,
      getSelectedValue: (f) => (r === "children_direct_type" ? f.mappingType : f.actionType) ?? f.uuid
    }
  );
}
const W0 = ({
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
    T0,
    {
      title: `${_("Условие")} ${a + 1}`,
      defaultOpen: i,
      children: [
        /* @__PURE__ */ o.jsx("div", { className: Vt.field, children: /* @__PURE__ */ o.jsx(
          Sl,
          {
            field: "parent_type",
            value: r.parent_type ?? "",
            error: p == null ? void 0 : p.parent_type,
            onChange: (x) => c({ ...r, parent_type: x })
          }
        ) }),
        /* @__PURE__ */ o.jsx("div", { className: Vt.field, children: m ? /* @__PURE__ */ o.jsxs(
          "div",
          {
            className: `${Vt.row} ${p != null && p.children_type ? Vt.rowError : ""}`,
            children: [
              /* @__PURE__ */ o.jsx("div", { className: Vt.inputWrapper, children: /* @__PURE__ */ o.jsx(
                Sl,
                {
                  field: "children_type",
                  value: r.children_type ?? "",
                  error: p == null ? void 0 : p.children_type,
                  onChange: (x) => c({ ...r, children_type: x })
                }
              ) }),
              /* @__PURE__ */ o.jsx(
                oe,
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
          oe,
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
                Sl,
                {
                  field: "children_direct_type",
                  value: r.children_direct_type ?? "",
                  error: p == null ? void 0 : p.children_direct_type,
                  onChange: (x) => c({ ...r, children_direct_type: x })
                }
              ) }),
              /* @__PURE__ */ o.jsx(
                oe,
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
          oe,
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
          oe,
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
}, B0 = "_dropdown_3mupk_2", U0 = "_label_3mupk_11", V0 = "_wrapper_3mupk_19", q0 = "_select_3mupk_23", Q0 = "_arrow_3mupk_65", K0 = "_error_3mupk_85", Y0 = "_errorText_3mupk_103", nr = {
  dropdown: B0,
  label: U0,
  wrapper: V0,
  select: q0,
  arrow: Q0,
  error: K0,
  errorText: Y0
};
function Or({
  label: r,
  options: a,
  value: i = "",
  placeholder: c = "Выберите",
  error: d,
  onSelect: f
}) {
  const p = v.useId();
  return /* @__PURE__ */ o.jsxs("div", { className: nr.dropdown, children: [
    r && /* @__PURE__ */ o.jsx(
      "label",
      {
        htmlFor: p,
        className: nr.label,
        children: _(r)
      }
    ),
    /* @__PURE__ */ o.jsxs("div", { className: nr.wrapper, children: [
      /* @__PURE__ */ o.jsxs(
        "select",
        {
          id: p,
          className: `
            ${nr.select}
            ${d ? nr.error : ""}
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
        tp,
        {
          size: 18,
          className: nr.arrow
        }
      )
    ] }),
    d && /* @__PURE__ */ o.jsx("span", { className: nr.errorText, children: _(d) })
  ] });
}
const G0 = "_form_1ogov_1", J0 = "_section_1ogov_7", X0 = "_sectionTitle_1ogov_18", Z0 = "_conditions_1ogov_27", ex = "_addCondition_1ogov_33", Dr = {
  form: G0,
  section: J0,
  sectionTitle: X0,
  conditions: Z0,
  addCondition: ex
}, tx = ({
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
  const k = (P) => {
    w(P);
  }, j = () => {
    k({
      ...g,
      conditions: [
        ...g.conditions,
        {
          parent_type: ""
        }
      ]
    });
  }, b = (P, H) => {
    const $ = [...g.conditions];
    $[P] = H, k({
      ...g,
      conditions: $
    });
  }, E = (P) => {
    const H = g.conditions.filter(
      ($, z) => z !== P
    );
    k({
      ...g,
      conditions: H.length > 0 ? H : [
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
      (H, $) => {
        const z = {};
        H.parent_type.trim() || (z.parent_type = "Обязательное поле"), H.children_type !== void 0 && !H.children_type.trim() && (z.children_type = "Обязательное поле"), H.children_direct_type !== void 0 && !H.children_direct_type.trim() && (z.children_direct_type = "Обязательное поле"), P.conditions[$] = z;
      }
    ), x(P), !P.name && !P.script_entity_id && P.conditions.every(
      (H) => Object.keys(H).length === 0
    );
  };
  return /* @__PURE__ */ o.jsx(
    Yt,
    {
      feedback: a,
      open: r,
      onClose: m,
      title: d ? "Редактировать сценарий" : "Создать сценарий",
      footer: /* @__PURE__ */ o.jsx(
        oe,
        {
          disabled: f,
          onClick: () => {
            N() && (p == null || p(g));
          },
          children: _("Сохранить")
        }
      ),
      children: /* @__PURE__ */ o.jsxs("div", { className: Dr.form, children: [
        /* @__PURE__ */ o.jsxs("div", { className: Dr.section, children: [
          /* @__PURE__ */ o.jsx(
            Je,
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
            Or,
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
        /* @__PURE__ */ o.jsxs("div", { className: Dr.section, children: [
          /* @__PURE__ */ o.jsx("h3", { className: Dr.sectionTitle, children: _("Условия") }),
          /* @__PURE__ */ o.jsx("div", { className: Dr.conditions, children: g.conditions.map(
            (P, H, $) => /* @__PURE__ */ o.jsx(
              W0,
              {
                index: H,
                condition: P,
                defaultOpen: !d,
                errors: y.conditions[H],
                onChange: (z) => b(
                  H,
                  z
                ),
                onDelete: () => E(H),
                totalCount: $.length
              },
              H
            )
          ) }),
          /* @__PURE__ */ o.jsx(
            oe,
            {
              type: "button",
              className: Dr.addCondition,
              onClick: j,
              children: _("+ Добавить условие")
            }
          )
        ] })
      ] })
    }
  );
}, nx = "_container_9wouv_1", rx = "_visible_9wouv_20", gf = {
  container: nx,
  visible: rx
}, ur = ({
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
      const k = g();
      k !== w && (k > w && k > a ? f(!0) : f(!1), w = k);
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
      className: `${gf.container} ${d ? gf.visible : ""}`,
      children: r
    }
  );
}, sx = () => {
  const r = Qt(), a = Hr(), i = a ? "Действия удалённых команд" : "Запуск скриптов", c = nt(), [d, f] = v.useState(), [p, m] = v.useState(!1), [g, w] = v.useState(!1), [y, x] = v.useState({ uuid: "", title: "" }), [k, j] = v.useState(!1), {
    query: b,
    setQuery: E,
    error: N,
    retry: P,
    loading: H,
    scripts: $,
    getAvailableScripts: z,
    loadScripts: W,
    saveScript: I,
    updateScript: J,
    getScriptAction: B,
    deleteScriptAction: G
  } = Q1(), ye = Wr($, H || !!N, W, c), de = { error: r.error ?? N, busy: r.busy, retry: r.error ? r.retry ?? (() => {
    r.clearError(), P();
  }) : P }, ge = () => {
    r.clearError(), f(void 0), j(!1), m(!0);
  }, he = (F) => {
    w(!0), x(F);
  }, _e = (F) => r.run(async () => {
    j(!0);
    const R = await B(
      F
    );
    f(R), m(!0);
  }, { retryable: !0 }), te = async (F) => {
    await r.run(async () => {
      if (k) {
        if (!F.uuid) return;
        const { uuid: R, ...K } = F;
        await J(F.uuid, K);
      } else
        await I(F);
      m(!1);
    }, { exclusive: !0 });
  }, Ee = (F) => r.run(async () => {
    F && await G(F);
  }, { exclusive: !0 });
  return /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
    /* @__PURE__ */ o.jsx(
      mt,
      {
        search: { value: b, onChange: E },
        title: i
      }
    ),
    /* @__PURE__ */ o.jsxs("div", { className: X.page, children: [
      !p && /* @__PURE__ */ o.jsx(Ge, { ...de }),
      /* @__PURE__ */ o.jsx(ht, {}),
      /* @__PURE__ */ o.jsxs("div", { className: `${X.header} ${X.collectionHeader}`, children: [
        /* @__PURE__ */ o.jsxs("div", { className: X.heading, children: [
          c ? /* @__PURE__ */ o.jsx(o.Fragment, {}) : /* @__PURE__ */ o.jsx("h1", { className: X.title, children: _(i) }),
          /* @__PURE__ */ o.jsx("p", { className: X.description, children: _(a ? "Выберите скрипт Home Assistant и укажите типы команд, приходящие с удалённого сервера. Типы вводятся вручную." : "Свяжите распознанную команду со скриптом Home Assistant. Выберите скрипт и задайте условия его запуска.") })
        ] }),
        /* @__PURE__ */ o.jsx("div", { className: X.actions, children: c ? /* @__PURE__ */ o.jsx(ur, { children: /* @__PURE__ */ o.jsx(
          oe,
          {
            variant: "primary",
            onClick: ge,
            children: _("Добавить сценарий")
          }
        ) }) : /* @__PURE__ */ o.jsx(o.Fragment, { children: /* @__PURE__ */ o.jsx(
          oe,
          {
            variant: "primary",
            onClick: ge,
            children: _("🞢 Добавить сценарий")
          }
        ) }) }),
        !c && /* @__PURE__ */ o.jsx(Fr, { value: b, onChange: E })
      ] }),
      /* @__PURE__ */ o.jsxs("div", { className: X.list, children: [
        /* @__PURE__ */ o.jsx(Kt, { loading: H, itemCount: ($ == null ? void 0 : $.script_actions.length) ?? 0, append: c, children: $ == null ? void 0 : $.script_actions.map((F) => /* @__PURE__ */ o.jsx(
          Br,
          {
            title: F.title,
            subTitle: "Нажмите для редактирования",
            onClick: () => he(F)
          },
          F.uuid
        )) }),
        !H && !N && b.trim() && !($ != null && $.script_actions.length) && /* @__PURE__ */ o.jsx("p", { role: "status", children: _("Ничего не найдено") }),
        c ? /* @__PURE__ */ o.jsx("div", { ref: ye, className: X.listSentinel }) : /* @__PURE__ */ o.jsx(o.Fragment, {})
      ] }),
      c ? /* @__PURE__ */ o.jsx(o.Fragment, {}) : /* @__PURE__ */ o.jsx(
        Ur,
        {
          page: ($ == null ? void 0 : $.page) || 1,
          totalPages: ($ == null ? void 0 : $.total_pages) || 1,
          onChange: W
        }
      ),
      /* @__PURE__ */ o.jsx(
        C0,
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
        tx,
        {
          feedback: de,
          open: p,
          initialData: d,
          isEdit: k,
          availableScripts: z(),
          loading: H,
          onCancel: () => m(!1),
          onSave: async (F) => {
            await te(F);
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
  const a = ct(), { query: i, setQuery: c, page: d, loading: f, loadPage: p, updateItems: m, error: g, retry: w } = vp(r);
  return { query: i, setQuery: c, error: g, retry: w, loading: f, commands: d, loadCommands: p, saveCommand: (E, N) => a.saveData(N, E), updateCommand: async (E, N) => {
    if (!N.uuid) return;
    const { uuid: P, ...H } = N, $ = await a.updateRecord(P, E, H);
    return await p(), $;
  }, deleteCommand: (E, N) => a.deleteRecord(N, E), setCommandStatus: async (E, N, P) => {
    const H = await a.updateRecordStatus(E, N, P);
    return m(($) => $.map((z) => z.uuid === N ? { ...z, status: P } : z)), H;
  }, getCommandDetails: (E, N) => a.getRecord(N, E) };
}
const ox = {
  main: { list: "get_assistant_commands_short", detail: "get_assistant_command", create: "save_assistant_command", update: "update_assistant_command", remove: "delete_assistant_command", status: "update_assistant_command_status" },
  sub: { list: "get_assistant_sub_commands_short", detail: "get_assistant_sub_command", create: "save_assistant_sub_command", update: "update_assistant_sub_command", remove: "delete_assistant_sub_command", status: "update_assistant_sub_command_status" },
  direct: { list: "get_assistant_sub_direct_controls_short", detail: "get_assistant_sub_direct_control", create: "save_assistant_sub_direct_control", update: "update_assistant_sub_direct_control", remove: "delete_assistant_sub_direct_control", status: "update_assistant_sub_direct_controls_status" },
  template: { list: "get_assistant_sub_direct_control_samples_short", detail: "get_assistant_sub_direct_control_sample", create: "save_assistant_sub_direct_control_sample", update: "update_assistant_sub_direct_control_sample", remove: "delete_assistant_sub_direct_control_sample" }
};
function yi(r, a) {
  const i = ox[r], { query: c, setQuery: d, commands: f, loading: p, loadCommands: m, getCommandDetails: g, saveCommand: w, updateCommand: y, deleteCommand: x, setCommandStatus: k, error: j, retry: b } = gp(i.list), E = Qt(), [N, P] = v.useState(!1), [H, $] = v.useState(!1), [z, W] = v.useState(a), [I, J] = v.useState(null), B = () => {
    E.clearError(), $(!1), W(a()), P(!0);
  }, G = (_e) => E.run(async () => {
    const te = await g(i.detail, _e);
    $(!0);
    const Ee = { ...te.data, status: te.data.status ?? !1 };
    for (const F of ["componentDialog", "subComponentDialog"]) {
      const R = Ee[F];
      R && (R.nextAction = (R.nextAction ?? []).filter(
        (K) => !K.actionTypeComponent || ["children", "custom"].includes(K.actionTypeComponent)
      ));
    }
    W(Ee), P(!0);
  }, { retryable: !0 }), ye = (_e, te) => E.run(async () => {
    i.status && await k(i.status, _e, te);
  }, { exclusive: !0 }), de = (_e) => E.run(async () => {
    await x(i.remove, _e), await m();
  }, { exclusive: !0 }), ge = () => E.run(async () => {
    await w(i.create, z), P(!1), await m();
  }, { exclusive: !0 }), he = () => E.run(async () => {
    await y(i.update, z), P(!1);
  }, { exclusive: !0 });
  return {
    query: c,
    setQuery: d,
    feedback: { error: E.error ?? j, busy: E.busy, retry: E.error ? E.retry ?? (() => {
      E.clearError(), b();
    }) : b },
    listError: j,
    commands: f,
    loading: p,
    loadCommands: m,
    modalOpen: N,
    setModalOpen: P,
    isEdit: H,
    formData: z,
    setFormData: W,
    actionsCommand: I,
    setActionsCommand: J,
    openCreateModal: B,
    openEditModal: G,
    handleToggleStatus: ye,
    handleDelete: de,
    handleCreate: ge,
    handleUpdate: he
  };
}
const ix = "_field_1iloj_1", ax = "_label_1iloj_8", lx = "_select_1iloj_14", Cl = {
  field: ix,
  label: ax,
  select: lx
}, vn = ({
  label: r,
  hint: a,
  options: i,
  className: c = "",
  id: d,
  value: f,
  ...p
}) => {
  const m = v.useId(), g = d ?? m, w = f == null ? "" : String(f), y = !w || i.some((x) => x.value === w);
  return /* @__PURE__ */ o.jsxs("div", { className: Cl.field, children: [
    r && /* @__PURE__ */ o.jsx(Xl, { label: r, htmlFor: g, className: Cl.label, hint: a }),
    /* @__PURE__ */ o.jsxs(
      "select",
      {
        id: g,
        ...p,
        value: w,
        className: `${Cl.select} ${c}`,
        children: [
          !y && /* @__PURE__ */ o.jsx("option", { value: w, children: w }),
          i.map((x) => /* @__PURE__ */ o.jsx("option", { value: x.value, disabled: x.disabled, children: _(x.label) }, x.value))
        ]
      }
    )
  ] });
};
function Pl({ kind: r, value: a, title: i, onSelect: c }) {
  const d = ct(), [f, p] = v.useState([]), [m, g] = v.useState(!0), [w, y] = v.useState(!1), [x, k] = v.useState(null), [j, b] = v.useState(0), E = v.useRef(null), N = v.useRef(0);
  v.useEffect(() => () => {
    N.current += 1;
  }, []), v.useEffect(() => {
    let z = !1;
    g(!0), k(null);
    const W = r === "nested" ? ["get_assistant_sub_direct_control_samples_short"] : r === "direct" ? ["get_assistant_sub_direct_controls_short"] : ["get_assistant_commands_short", "get_assistant_sub_commands_short"];
    return Promise.all(W.map((I) => d.getAllRecords(I))).then((I) => {
      z || p([...new Map(I.flat().map((J) => [J.uuid, J])).values()]);
    }).catch((I) => {
      z || (k(Tt(I)), E.current = () => b((J) => J + 1));
    }).finally(() => {
      z || g(!1);
    }), () => {
      z = !0;
    };
  }, [d, r, j]), v.useEffect(() => {
    a && i && p((z) => z.map((W) => W.uuid === a ? { ...W, title: i } : W));
  }, [a, i]);
  const P = async (z) => {
    var J;
    if (!z) {
      N.current += 1, k(null), c({ uuid: "", title: "" });
      return;
    }
    const W = f.find((B) => B.uuid === z);
    if (!W) return;
    const I = ++N.current;
    if (k(null), r !== "direct") {
      c(W);
      return;
    }
    y(!0);
    try {
      const B = await d.getRecord(z, "get_assistant_sub_direct_control");
      I === N.current && c({ ...W, mappingType: ((J = B.data.directControl) == null ? void 0 : J.mappingType) ?? "" });
    } catch (B) {
      I === N.current && (k(Tt(B)), E.current = () => {
        P(z);
      });
    } finally {
      I === N.current && y(!1);
    }
  }, H = f.map((z) => ({ value: z.uuid, label: z.title || _("Без названия") }));
  a && !f.some((z) => z.uuid === a) && H.unshift({ value: a, label: i || _("Выбранная команда недоступна") });
  const $ = _(r === "nested" ? "subDirectControl" : "uuid");
  return /* @__PURE__ */ o.jsxs("div", { children: [
    /* @__PURE__ */ o.jsx(
      vn,
      {
        label: $,
        "aria-label": $,
        value: a,
        disabled: m || w,
        options: [{ value: "", label: _(m ? "Загрузка..." : r === "nested" ? "Без вложенных команд" : "Выберите команду") }, ...H],
        onChange: (z) => {
          P(z.target.value);
        }
      }
    ),
    /* @__PURE__ */ o.jsx(Ge, { error: x, busy: m || w, retry: () => {
      var z;
      return (z = E.current) == null ? void 0 : z.call(E);
    } })
  ] });
}
const ux = [
  { label: "Ответ из списка фраз", value: "default" },
  { label: "Ответ из скрипта", value: "script_response" }
], cx = [
  { label: "all", value: "all" },
  { label: "string", value: "string" },
  { label: "int", value: "int" },
  { label: "date", value: "date" },
  { label: "time", value: "time" },
  { label: "Вложенные команды", value: "command" }
], dx = [
  { label: "По умолчанию", value: "children" },
  { label: "По типу ответа скрипта", value: "custom" }
], fx = "_form_1a1tt_1", px = "_field_1a1tt_7", hx = "_arrayItem_1a1tt_29", mx = "_logicTabs_1a1tt_46", vx = "_sectionTitle_1a1tt_85", yx = "_footerActions_1a1tt_92", gx = "_phraseMode_1a1tt_106", _x = "_directTabLabel_1a1tt_122", xx = "_linkActions_1a1tt_126", tt = {
  form: fx,
  field: px,
  arrayItem: hx,
  logicTabs: mx,
  sectionTitle: vx,
  footerActions: yx,
  phraseMode: gx,
  directTabLabel: _x,
  linkActions: xx
}, _f = () => ({
  mappingType: "",
  valueType: "",
  voiceCommands: [""],
  manual: !1,
  subDirectControl: ""
}), _p = ({
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
    var j;
    if (!((j = d.title) != null && j.trim())) {
      w("Обязательное поле");
      return;
    }
    w(""), p();
  }, x = v.useMemo(() => d.directControl ?? _f(), [d]), k = (j) => {
    f((b) => ({
      ...b,
      directControl: {
        ...b.directControl ?? _f(),
        ...j
      }
    }));
  };
  return /* @__PURE__ */ o.jsx(
    Yt,
    {
      feedback: a,
      open: r,
      onClose: i,
      onBack: m,
      title: c,
      footer: /* @__PURE__ */ o.jsx("div", { className: tt.form, children: /* @__PURE__ */ o.jsx(oe, { onClick: y, children: _("Сохранить") }) }),
      children: /* @__PURE__ */ o.jsxs("div", { className: tt.form, children: [
        /* @__PURE__ */ o.jsx(
          Je,
          {
            label: _("Название команды"),
            hint: vi(d.uuid),
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
            onChange: (j) => k({
              mappingType: j.target.value
            })
          }
        ),
        /* @__PURE__ */ o.jsx(
          vn,
          {
            label: _("valueType"),
            value: x.valueType,
            options: cx,
            onChange: (j) => k({
              valueType: j.target.value
            })
          }
        ),
        x.valueType == "command" ? /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
          /* @__PURE__ */ o.jsx("div", { className: tt.field, children: /* @__PURE__ */ o.jsx(
            or,
            {
              label: _("Фразы для запуска"),
              hint: _("Фразы прямой команды — общая часть перед вложенными командами. Например: в основной команде «включи ${свет}», здесь — «свет», во вложенных командах — «в зале» и «в спальне». Получатся «включи свет в зале» и «включи свет в спальне».\nПоле можно оставить пустым: тогда используются только фразы вложенных команд. Один набор вложенных команд можно подключать к разным прямым командам."),
              rows: 6,
              value: (x.voiceCommands ?? []).join(`
`),
              onChange: (j) => k({
                voiceCommands: j.target.value.split(`
`)
              })
            }
          ) }),
          /* @__PURE__ */ o.jsx(
            Pl,
            {
              kind: "nested",
              value: Array.isArray(x.subDirectControl) ? x.subDirectControl.length ? "__inline__" : "" : x.subDirectControl,
              title: Array.isArray(x.subDirectControl) ? _("Сохранённые вложенные команды") : x.subDirectControlTitle,
              onSelect: (j) => k({
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
function wx({ target: r, onBack: a, onSaved: i }) {
  const c = ct(), d = Qt(), [f, p] = v.useState({ title: "" }), [m, g] = v.useState();
  v.useEffect(() => {
    let y = !1;
    return d.run(async () => {
      let x = r.kind === "direct" ? "direct" : "main", k;
      if (r.kind === "direct") k = await c.getRecord(r.uuid, "get_assistant_sub_direct_control");
      else
        try {
          k = await c.getRecord(r.uuid, "get_assistant_command");
        } catch (j) {
          if (!(j && typeof j == "object" && "code" in j && j.code === "not_found")) throw j;
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
    await c.updateRecord(r.uuid, y, k), i(f), a();
  }, { exclusive: !0 });
  return m ? m === "direct" ? /* @__PURE__ */ o.jsx(
    _p,
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
  ) : /* @__PURE__ */ o.jsx(Yt, { open: !0, onClose: a, onBack: a, title: "Перейти к команде", feedback: d, children: d.busy && /* @__PURE__ */ o.jsx("p", { role: "status", children: _("Загрузка...") }) });
}
const kx = [
  { value: "default", label: "Основной" },
  { value: "default_next_step", label: "Ответ для продолжения диалога" },
  { value: "custom", label: "По типу результата скрипта" }
];
function Sx({ response: r, onChange: a }) {
  const i = (r.actionType ?? "").trim().toLowerCase(), c = ["default", "direct", "default_direct", "next"].includes(i) ? "default" : i === "default_next_step" ? "default_next_step" : "custom";
  return /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
    /* @__PURE__ */ o.jsx(
      vn,
      {
        label: _("Типы ответов"),
        "aria-label": _("Типы ответов"),
        value: c,
        options: kx,
        onChange: (d) => a({ actionType: d.target.value === "custom" ? "" : d.target.value })
      }
    ),
    c === "custom" ? /* @__PURE__ */ o.jsx(
      Je,
      {
        label: _("Тип результата скрипта"),
        placeholder: _("Например, room_required"),
        value: r.actionType ?? "",
        onChange: (d) => a({ actionType: d.target.value })
      }
    ) : null,
    /* @__PURE__ */ o.jsx(
      or,
      {
        label: _("voiceResponse"),
        value: r.voiceResponse,
        onChange: (d) => a({ voiceResponse: d.target.value })
      }
    )
  ] });
}
const Cx = "_switchRow_1hmmz_1", jx = "_input_1hmmz_11", Ex = "_track_1hmmz_22", Nx = "_thumb_1hmmz_33", Tx = "_label_1hmmz_62", Is = {
  switchRow: Cx,
  input: jx,
  track: Ex,
  thumb: Nx,
  label: Tx
}, ir = ({ label: r, className: a = "", ...i }) => /* @__PURE__ */ o.jsxs("label", { className: `${Is.switchRow} ${a}`, children: [
  /* @__PURE__ */ o.jsx("input", { ...i, type: "checkbox", className: Is.input }),
  /* @__PURE__ */ o.jsx("span", { className: Is.track, "aria-hidden": "true", children: /* @__PURE__ */ o.jsx("span", { className: Is.thumb }) }),
  /* @__PURE__ */ o.jsx("span", { className: Is.label, children: _(r) })
] }), bx = [
  { key: "direct", label: "Прямые команды" },
  { key: "continuations", label: "Продолжения" }
];
function Rx({ component: r, onOpenCommand: a, updateComponentArray: i, addComponentArrayItem: c, removeComponentArrayItem: d }) {
  const f = v.useId(), [p, m] = v.useState("direct"), g = bx.filter((y) => y.key !== "direct" || !r.forwardText), w = r.forwardText && p === "direct" ? "continuations" : p;
  return /* @__PURE__ */ o.jsxs("div", { className: tt.form, children: [
    /* @__PURE__ */ o.jsx("div", { className: tt.logicTabs, role: "tablist", "aria-label": _("Настройки логики"), children: g.map((y) => /* @__PURE__ */ o.jsx(
      "button",
      {
        type: "button",
        role: "tab",
        tabIndex: w === y.key ? 0 : -1,
        onKeyDown: (x) => {
          var b, E;
          const k = g.findIndex((N) => N.key === y.key), j = x.key === "ArrowRight" ? (k + 1) % g.length : x.key === "ArrowLeft" ? (k + g.length - 1) % g.length : x.key === "Home" ? 0 : x.key === "End" ? g.length - 1 : -1;
          j < 0 || (x.preventDefault(), m(g[j].key), (E = (b = x.currentTarget.parentElement) == null ? void 0 : b.querySelectorAll('[role="tab"]')[j]) == null || E.focus());
        },
        id: `${f}-command-logic-tab-${y.key}`,
        "aria-selected": w === y.key,
        "aria-controls": `${f}-command-logic-panel-${y.key}`,
        onClick: () => m(y.key),
        children: y.key === "direct" ? /* @__PURE__ */ o.jsx("span", { className: tt.directTabLabel, children: _(y.label).replace(" ", `
`) }) : _(y.label)
      },
      y.key
    )) }),
    w === "continuations" && /* @__PURE__ */ o.jsxs("div", { role: "tabpanel", id: `${f}-command-logic-panel-continuations`, "aria-labelledby": `${f}-command-logic-tab-continuations`, children: [
      (r.nextAction ?? []).map((y, x) => /* @__PURE__ */ o.jsxs("div", { className: tt.arrayItem, children: [
        /* @__PURE__ */ o.jsx(
          vn,
          {
            label: _("Вид продолжения"),
            value: y.actionTypeComponent || "children",
            options: dx,
            onChange: (k) => i("nextAction", x, {
              actionTypeComponent: k.target.value
            })
          }
        ),
        y.actionTypeComponent == "custom" ? /* @__PURE__ */ o.jsx(
          Je,
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
          Pl,
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
          y.uuid && /* @__PURE__ */ o.jsx(oe, { variant: "secondary", onClick: () => a({ uuid: y.uuid, kind: "continuation" }, x), children: _("Перейти к команде") }),
          /* @__PURE__ */ o.jsx(
            oe,
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
        oe,
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
          Pl,
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
          Je,
          {
            label: _("mappingType"),
            hint: _("Переменная для фраз запуска. Например, используйте ${room} во фразе, если здесь указано room."),
            readOnly: !0,
            value: y.mappingType ?? ""
          }
        ),
        /* @__PURE__ */ o.jsxs("div", { className: tt.linkActions, children: [
          y.uuid && /* @__PURE__ */ o.jsx(oe, { variant: "secondary", onClick: () => a({ uuid: y.uuid, kind: "direct" }, x), children: _("Перейти к команде") }),
          /* @__PURE__ */ o.jsx(
            oe,
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
        oe,
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
  const x = ct().getScripts(), k = v.useMemo(() => c[d] ?? xf(), [c, d]);
  v.useEffect(() => {
    r && f((B) => {
      var ye;
      const G = B[d];
      return (ye = G == null ? void 0 : G.nextAction) != null && ye.some((de) => !de.actionTypeComponent) ? { ...B, [d]: {
        ...G,
        nextAction: G.nextAction.map((de) => ({ ...de, actionTypeComponent: de.actionTypeComponent || "children" }))
      } } : B;
    });
  }, [r, c.uuid, d, f]);
  const [j, b] = v.useState(null);
  v.useEffect(() => {
    r || b(null);
  }, [r]);
  const [E, N] = v.useState(!1);
  v.useEffect(() => {
    N(!1), H({});
  }, [r, c.uuid, d]);
  const [P, H] = v.useState({}), $ = (B) => {
    f((G) => ({
      ...G,
      [d]: {
        ...G[d] ?? xf(),
        ...B
      }
    }));
  }, z = (B, G, ye) => {
    const de = [...k[B] ?? []];
    de[G] = { ...de[G], ...ye }, $({
      [B]: de
    });
  }, W = (B, G) => {
    $({
      [B]: [...k[B] ?? [], G]
    });
  }, I = (B, G) => {
    $({
      [B]: (k[B] ?? []).filter(
        (ye, de) => de !== G
      )
    });
  }, J = () => {
    const B = {};
    return c.title.trim() || (B.title = "Обязательное поле"), H(B), Object.keys(B).length === 0;
  };
  return /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
    /* @__PURE__ */ o.jsx(
      Yt,
      {
        suspended: !!j,
        feedback: a,
        open: r,
        onClose: p,
        onBack: m,
        title: E ? "Настроить логику" : i ? "Редактировать" : "Создать",
        footer: /* @__PURE__ */ o.jsx("div", { className: tt.form, children: E ? /* @__PURE__ */ o.jsx(oe, { variant: "secondary", onClick: () => N(!1), children: _("Назад") }) : /* @__PURE__ */ o.jsxs("div", { className: tt.footerActions, children: [
          /* @__PURE__ */ o.jsx(oe, { variant: "secondary", onClick: () => N(!0), children: _("Настроить логику") }),
          /* @__PURE__ */ o.jsx(oe, { onClick: () => {
            J() && (i ? w() : g());
          }, children: _(i ? "Обновить" : "Сохранить") })
        ] }) }),
        children: E ? /* @__PURE__ */ o.jsx(
          Rx,
          {
            onOpenCommand: (B, G) => b({ ...B, index: G }),
            component: k,
            updateComponentArray: z,
            addComponentArrayItem: W,
            removeComponentArrayItem: I
          }
        ) : /* @__PURE__ */ o.jsxs("div", { className: tt.form, children: [
          /* @__PURE__ */ o.jsx(
            Je,
            {
              label: _("Название команды"),
              hint: vi(c.uuid),
              value: c.title,
              error: P.title,
              onChange: (B) => f({
                ...c,
                title: B.target.value
              })
            }
          ),
          /* @__PURE__ */ o.jsx(
            vn,
            {
              label: _("Источник ответа"),
              value: ["ha_storage", "ha", "external"].includes(k.answerType) ? "script_response" : k.answerType,
              options: ux,
              onChange: (B) => $({
                answerType: B.target.value
              })
            }
          ),
          /* @__PURE__ */ o.jsx(
            vn,
            {
              label: _("Скрипт Home Assistant"),
              value: k.script_entity_id ?? "__legacy__",
              options: [
                ...k.script_entity_id === void 0 ? [{ label: _("Использовать существующие сценарии"), value: "__legacy__" }] : [],
                { label: _("Не запускать скрипт"), value: "" },
                ...x.map((B) => ({ label: B.name, value: B.entity_id }))
              ],
              onChange: (B) => $({ script_entity_id: B.target.value })
            }
          ),
          d === "subComponentDialog" && /* @__PURE__ */ o.jsxs("div", { className: tt.phraseMode, children: [
            /* @__PURE__ */ o.jsx(
              ir,
              {
                label: _("Отправить команду как есть"),
                checked: !!k.forwardText,
                onChange: (B) => $({ forwardText: B.target.checked })
              }
            ),
            /* @__PURE__ */ o.jsx(sr, { label: "Отправить команду как есть" })
          ] }),
          !(d === "subComponentDialog" && k.forwardText) && /* @__PURE__ */ o.jsx("div", { className: tt.field, children: /* @__PURE__ */ o.jsx(
            or,
            {
              label: _("Фразы для запуска"),
              value: (k.voiceCommands == null ? [] : typeof k.voiceCommands != "object" ? k == null ? void 0 : k.voiceCommands.split(";") : k == null ? void 0 : k.voiceCommands).join(`
`),
              onChange: (B) => $({
                voiceCommands: B.target.value.split(`
`)
              })
            }
          ) }),
          /* @__PURE__ */ o.jsxs("section", { className: tt.form, "aria-label": _("Ответы"), children: [
            /* @__PURE__ */ o.jsx("h3", { className: tt.sectionTitle, children: _("Ответы") }),
            (k.voiceResponseArray ?? []).map((B, G) => /* @__PURE__ */ o.jsxs("div", { className: tt.arrayItem, children: [
              /* @__PURE__ */ o.jsx(
                Sx,
                {
                  response: B,
                  onChange: (ye) => z("voiceResponseArray", G, ye)
                }
              ),
              /* @__PURE__ */ o.jsx(
                oe,
                {
                  type: "button",
                  variant: "remove",
                  onClick: () => I("voiceResponseArray", G),
                  children: _("Удалить")
                }
              )
            ] }, G)),
            /* @__PURE__ */ o.jsx(
              oe,
              {
                type: "button",
                variant: "secondary",
                fullWidth: !0,
                leftIcon: /* @__PURE__ */ o.jsx("span", { "aria-hidden": "true", children: "+" }),
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
    j && /* @__PURE__ */ o.jsx(
      wx,
      {
        target: j,
        onBack: () => b(null),
        onSaved: (B) => {
          var G;
          j.kind === "direct" ? z("nextDirectControl", j.index, { title: B.title, mappingType: ((G = B.directControl) == null ? void 0 : G.mappingType) ?? "" }) : z("nextAction", j.index, { title: B.title });
        }
      },
      `${j.kind}-${j.uuid}`
    )
  ] });
}, gi = ({ command: r, open: a, onClose: i, onToggleStatus: c, onEdit: d, onDelete: f }) => r ? /* @__PURE__ */ o.jsx(Zl, { open: a, title: r.title, uuid: r.uuid, onClose: i, actions: [
  ...c ? [{ label: r.status ? "Выключить" : "Включить", onClick: () => c(r.uuid, !r.status) }] : [],
  { label: "Изменить", variant: "secondary", onClick: () => d(r.uuid) },
  { label: "Удалить", variant: "remove", onClick: () => f(r.uuid) }
] }) : null, Ax = () => yp("componentDialog"), Px = () => {
  const r = nt(), {
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
    setFormData: k,
    actionsCommand: j,
    setActionsCommand: b,
    openCreateModal: E,
    openEditModal: N,
    handleToggleStatus: P,
    handleDelete: H,
    handleCreate: $,
    handleUpdate: z
  } = yi("main", Ax), W = Wr(f, p || !!d, m, r);
  return /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
    /* @__PURE__ */ o.jsx(
      mt,
      {
        search: { value: a, onChange: i },
        title: "Основные команды"
      }
    ),
    /* @__PURE__ */ o.jsxs("div", { className: X.page, children: [
      !g && /* @__PURE__ */ o.jsx(Ge, { ...c }),
      /* @__PURE__ */ o.jsx(ht, {}),
      /* @__PURE__ */ o.jsxs("div", { className: `${X.header} ${X.collectionHeader}`, children: [
        /* @__PURE__ */ o.jsx("div", { className: X.heading, children: r ? /* @__PURE__ */ o.jsx(o.Fragment, {}) : /* @__PURE__ */ o.jsx("h1", { className: X.title, children: _("Основные команды") }) }),
        /* @__PURE__ */ o.jsx("div", { className: X.actions, children: r ? /* @__PURE__ */ o.jsx(ur, { children: /* @__PURE__ */ o.jsx(oe, { variant: "primary", onClick: E, children: _("Добавить сценарий") }) }) : /* @__PURE__ */ o.jsx(oe, { variant: "primary", onClick: E, children: _("🞢 Добавить сценарий") }) }),
        !r && /* @__PURE__ */ o.jsx(Fr, { value: a, onChange: i })
      ] }),
      /* @__PURE__ */ o.jsxs("div", { className: X.list, children: [
        /* @__PURE__ */ o.jsx(Kt, { loading: p, itemCount: (f == null ? void 0 : f.data.length) ?? 0, append: r, children: f == null ? void 0 : f.data.map((I) => /* @__PURE__ */ o.jsx(
          Br,
          {
            title: I.title,
            subTitle: I.status === !1 ? "Выключена" : "Включена",
            onClick: () => b(I)
          },
          I.uuid
        )) }),
        !p && !d && a.trim() && !(f != null && f.data.length) && /* @__PURE__ */ o.jsx("p", { role: "status", children: _("Ничего не найдено") }),
        r ? /* @__PURE__ */ o.jsx("div", { ref: W, className: X.listSentinel }) : /* @__PURE__ */ o.jsx(o.Fragment, {})
      ] }),
      r ? /* @__PURE__ */ o.jsx(o.Fragment, {}) : /* @__PURE__ */ o.jsx(
        Ur,
        {
          page: (f == null ? void 0 : f.page) || 1,
          totalPages: (f == null ? void 0 : f.total_pages) || 1,
          onChange: (I) => m(I)
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
          setFormData: k,
          onClose: () => w(!1),
          onSave: $,
          onUpdate: z
        }
      ),
      /* @__PURE__ */ o.jsx(
        gi,
        {
          open: !!j,
          command: j,
          onClose: () => b(null),
          onToggleStatus: P,
          onDelete: H,
          onEdit: (I) => N(I)
        }
      )
    ] })
  ] });
}, $x = () => yp("subComponentDialog"), Mx = () => {
  const r = nt(), {
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
    setFormData: k,
    actionsCommand: j,
    setActionsCommand: b,
    openCreateModal: E,
    openEditModal: N,
    handleToggleStatus: P,
    handleDelete: H,
    handleCreate: $,
    handleUpdate: z
  } = yi("sub", $x), W = Wr(f, p || !!d, m, r);
  return /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
    /* @__PURE__ */ o.jsx(
      mt,
      {
        search: { value: a, onChange: i },
        title: "Второстепенные команды"
      }
    ),
    /* @__PURE__ */ o.jsxs("div", { className: X.page, children: [
      !g && /* @__PURE__ */ o.jsx(Ge, { ...c }),
      r ? /* @__PURE__ */ o.jsx(o.Fragment, {}) : /* @__PURE__ */ o.jsx(ht, {}),
      /* @__PURE__ */ o.jsxs("div", { className: `${X.header} ${X.collectionHeader}`, children: [
        /* @__PURE__ */ o.jsx("div", { className: X.heading, children: r ? /* @__PURE__ */ o.jsx(o.Fragment, {}) : /* @__PURE__ */ o.jsx("h1", { className: X.title, children: _("Второстепенные команды") }) }),
        /* @__PURE__ */ o.jsx("div", { className: X.actions, children: r ? /* @__PURE__ */ o.jsx(ur, { children: /* @__PURE__ */ o.jsx(oe, { variant: "primary", onClick: E, children: _("Добавить сценарий") }) }) : /* @__PURE__ */ o.jsx(o.Fragment, { children: /* @__PURE__ */ o.jsx(oe, { variant: "primary", onClick: E, children: _("🞢 Добавить сценарий") }) }) }),
        !r && /* @__PURE__ */ o.jsx(Fr, { value: a, onChange: i })
      ] }),
      /* @__PURE__ */ o.jsxs("div", { className: X.list, children: [
        /* @__PURE__ */ o.jsx(Kt, { loading: p, itemCount: (f == null ? void 0 : f.data.length) ?? 0, append: r, children: f == null ? void 0 : f.data.map((I) => /* @__PURE__ */ o.jsx(
          Br,
          {
            title: I.title,
            subTitle: I.status === !1 ? "Выключена" : "Включена",
            onClick: () => b(I)
          },
          I.uuid
        )) }),
        !p && !d && a.trim() && !(f != null && f.data.length) && /* @__PURE__ */ o.jsx("p", { role: "status", children: _("Ничего не найдено") })
      ] }),
      r ? /* @__PURE__ */ o.jsx("div", { ref: W, className: X.listSentinel }) : /* @__PURE__ */ o.jsx(
        Ur,
        {
          page: (f == null ? void 0 : f.page) || 1,
          totalPages: (f == null ? void 0 : f.total_pages) || 1,
          onChange: (I) => m(I)
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
          setFormData: k,
          onClose: () => w(!1),
          onSave: $,
          onUpdate: z
        }
      ),
      /* @__PURE__ */ o.jsx(
        gi,
        {
          open: !!j,
          command: j,
          onClose: () => b(null),
          onToggleStatus: P,
          onDelete: H,
          onEdit: (I) => N(I)
        }
      )
    ] })
  ] });
}, Ix = [
  { path: "/commands/direct/main", label: "Команды" },
  { path: "/commands/direct/template", label: "Вложенные команды" }
], ci = () => {
  const { pathname: r } = St(), a = zl();
  return /* @__PURE__ */ o.jsx("div", { className: X.innerTabs, role: "group", "aria-label": _("Раздел прямых команд"), children: Ix.map((i) => /* @__PURE__ */ o.jsx(
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
}, Lx = () => ({
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
}), Dx = () => {
  const r = nt(), {
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
    setFormData: k,
    actionsCommand: j,
    setActionsCommand: b,
    openCreateModal: E,
    openEditModal: N,
    handleToggleStatus: P,
    handleDelete: H,
    handleCreate: $,
    handleUpdate: z
  } = yi("direct", Lx), W = Wr(f, p || !!d, m, r);
  return /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
    /* @__PURE__ */ o.jsx(
      mt,
      {
        search: { value: a, onChange: i },
        beforeSearch: /* @__PURE__ */ o.jsx(ci, {}),
        title: "Прямые команды"
      }
    ),
    /* @__PURE__ */ o.jsxs("div", { className: X.page, children: [
      !g && /* @__PURE__ */ o.jsx(Ge, { ...c }),
      r ? /* @__PURE__ */ o.jsx(o.Fragment, {}) : /* @__PURE__ */ o.jsx(ht, {}),
      /* @__PURE__ */ o.jsxs("div", { className: `${X.header} ${X.collectionHeader}`, children: [
        /* @__PURE__ */ o.jsxs("div", { className: X.heading, children: [
          r ? /* @__PURE__ */ o.jsx(o.Fragment, {}) : /* @__PURE__ */ o.jsx("h1", { className: X.title, children: _("Прямые команды") }),
          !r && /* @__PURE__ */ o.jsx(ci, {})
        ] }),
        /* @__PURE__ */ o.jsx("div", { className: X.actions, children: r ? /* @__PURE__ */ o.jsx(ur, { children: /* @__PURE__ */ o.jsx(oe, { variant: "primary", onClick: E, children: _("Добавить сценарий") }) }) : /* @__PURE__ */ o.jsx(oe, { variant: "primary", onClick: E, children: _("🞢 Добавить сценарий") }) }),
        !r && /* @__PURE__ */ o.jsx(Fr, { value: a, onChange: i })
      ] }),
      /* @__PURE__ */ o.jsxs("div", { className: X.list, children: [
        /* @__PURE__ */ o.jsx(Kt, { loading: p, itemCount: (f == null ? void 0 : f.data.length) ?? 0, append: r, children: f == null ? void 0 : f.data.map((I) => /* @__PURE__ */ o.jsx(
          Br,
          {
            title: I.title,
            subTitle: I.status === !1 ? "Выключена" : "Включена",
            onClick: () => b(I)
          },
          I.uuid
        )) }),
        !p && !d && a.trim() && !(f != null && f.data.length) && /* @__PURE__ */ o.jsx("p", { role: "status", children: _("Ничего не найдено") })
      ] }),
      r ? /* @__PURE__ */ o.jsx("div", { ref: W, className: X.listSentinel }) : /* @__PURE__ */ o.jsx(
        Ur,
        {
          page: (f == null ? void 0 : f.page) || 1,
          totalPages: (f == null ? void 0 : f.total_pages) || 1,
          onChange: (I) => m(I)
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
          setFormData: k,
          onSave: y ? z : $
        }
      ),
      /* @__PURE__ */ o.jsx(
        gi,
        {
          open: !!j,
          command: j,
          onClose: () => b(null),
          onToggleStatus: P,
          onDelete: H,
          onEdit: (I) => N(I)
        }
      )
    ] })
  ] });
}, Ox = "_form_mn1ml_1", zx = "_arrayItem_mn1ml_8", Hx = "_sectionTitle_mn1ml_25", ni = {
  form: Ox,
  arrayItem: zx,
  sectionTitle: Hx
}, Fx = ({
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
    f((N) => ({
      ...N,
      subDirectControl: E
    }));
  }, k = (E, N) => {
    const P = [...y];
    P[E] = {
      ...P[E],
      ...N
    }, x(P);
  }, j = () => {
    x([
      ...y,
      {
        subMappingType: "",
        subVoiceCommands: ""
      }
    ]);
  }, b = (E) => {
    x(
      y.filter((N, P) => P !== E)
    );
  };
  return /* @__PURE__ */ o.jsx(
    Yt,
    {
      feedback: a,
      open: r,
      onClose: i,
      title: c,
      footer: /* @__PURE__ */ o.jsx(oe, { onClick: w, children: _("Сохранить") }),
      children: /* @__PURE__ */ o.jsxs("div", { className: ni.form, children: [
        /* @__PURE__ */ o.jsx(
          Je,
          {
            label: _("Название команды"),
            hint: vi(d.uuid),
            required: !0,
            error: m,
            value: d.title,
            onChange: (E) => f((N) => ({
              ...N,
              title: E.target.value
            }))
          }
        ),
        /* @__PURE__ */ o.jsxs("section", { className: ni.form, "aria-label": _("Варианты вложенных команд"), children: [
          /* @__PURE__ */ o.jsx("h3", { className: ni.sectionTitle, children: _("Варианты вложенных команд") }),
          y.map((E, N) => /* @__PURE__ */ o.jsxs(
            "div",
            {
              className: ni.arrayItem,
              children: [
                /* @__PURE__ */ o.jsx(
                  Je,
                  {
                    label: _("Код значения"),
                    value: E.subMappingType ?? "",
                    onChange: (P) => k(N, {
                      subMappingType: P.target.value
                    })
                  }
                ),
                /* @__PURE__ */ o.jsx(
                  or,
                  {
                    label: _("Варианты произношения"),
                    rows: 3,
                    value: (Array.isArray(E.subVoiceCommands) ? E.subVoiceCommands : []).join(`
`),
                    onChange: (P) => k(N, {
                      subVoiceCommands: P.target.value.split(`
`).filter(Boolean)
                    })
                  }
                ),
                /* @__PURE__ */ o.jsx(
                  oe,
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
            oe,
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
}, Wx = () => ({
  status: !0,
  title: "",
  subDirectControl: []
}), Bx = () => {
  const r = nt(), {
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
    setFormData: k,
    actionsCommand: j,
    setActionsCommand: b,
    openCreateModal: E,
    openEditModal: N,
    handleDelete: P,
    handleCreate: H,
    handleUpdate: $
  } = yi("template", Wx), z = Wr(f, p || !!d, m, r);
  return /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
    /* @__PURE__ */ o.jsx(
      mt,
      {
        search: { value: a, onChange: i },
        beforeSearch: /* @__PURE__ */ o.jsx(ci, {}),
        title: "Вложенные команды"
      }
    ),
    /* @__PURE__ */ o.jsxs("div", { className: X.page, children: [
      !g && /* @__PURE__ */ o.jsx(Ge, { ...c }),
      !r && /* @__PURE__ */ o.jsx(ht, {}),
      /* @__PURE__ */ o.jsxs("div", { className: `${X.header} ${X.collectionHeader}`, children: [
        /* @__PURE__ */ o.jsxs("div", { className: X.heading, children: [
          r ? /* @__PURE__ */ o.jsx(o.Fragment, {}) : /* @__PURE__ */ o.jsx("h1", { className: X.title, children: _("Вложенные команды") }),
          !r && /* @__PURE__ */ o.jsx(ci, {})
        ] }),
        /* @__PURE__ */ o.jsx("div", { className: X.actions, children: r ? /* @__PURE__ */ o.jsx(ur, { children: /* @__PURE__ */ o.jsx(oe, { variant: "primary", onClick: E, children: _("Добавить сценарий") }) }) : /* @__PURE__ */ o.jsx(oe, { variant: "primary", onClick: E, children: _("🞢 Добавить сценарий") }) }),
        !r && /* @__PURE__ */ o.jsx(Fr, { value: a, onChange: i })
      ] }),
      /* @__PURE__ */ o.jsxs("div", { className: X.list, children: [
        /* @__PURE__ */ o.jsx(Kt, { loading: p, itemCount: (f == null ? void 0 : f.data.length) ?? 0, append: r, children: f == null ? void 0 : f.data.map((W) => /* @__PURE__ */ o.jsx(
          Br,
          {
            title: W.title,
            onClick: () => b(W)
          },
          W.uuid
        )) }),
        !p && !d && a.trim() && !(f != null && f.data.length) && /* @__PURE__ */ o.jsx("p", { role: "status", children: _("Ничего не найдено") })
      ] }),
      r ? /* @__PURE__ */ o.jsx(
        "div",
        {
          ref: z,
          className: X.listSentinel
        }
      ) : /* @__PURE__ */ o.jsx(
        Ur,
        {
          page: (f == null ? void 0 : f.page) ?? 1,
          totalPages: (f == null ? void 0 : f.total_pages) ?? 1,
          onChange: (W) => m(
            W
          )
        }
      ),
      /* @__PURE__ */ o.jsx(
        Fx,
        {
          feedback: c,
          open: g,
          onClose: () => w(!1),
          title: y ? "Редактировать" : "Создать",
          formData: x,
          setFormData: k,
          onSave: y ? $ : H
        }
      ),
      /* @__PURE__ */ o.jsx(
        gi,
        {
          open: !!j,
          command: j,
          onClose: () => b(null),
          onDelete: P,
          onEdit: (W) => N(W)
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
const Ux = "_form_1i0x1_1", Vx = {
  form: Ux
}, qx = ({
  open: r,
  feedback: a,
  isEdit: i,
  formData: c,
  setFormData: d,
  onClose: f,
  onUpdate: p
}) => {
  var x, k;
  const m = c, g = ct().getScripts(), w = m.actionType === "default_main" && !!m.forwardCommandToServer, y = (j) => {
    d((b) => ({
      ...b,
      ...j
    }));
  };
  return /* @__PURE__ */ o.jsx(
    Yt,
    {
      feedback: a,
      open: r,
      onClose: f,
      title: i ? "Редактировать" : "Создать",
      footer: /* @__PURE__ */ o.jsx(oe, { onClick: p, children: _("Обновить") }),
      children: /* @__PURE__ */ o.jsxs("div", { className: Vx.form, children: [
        /* @__PURE__ */ o.jsx(
          Je,
          {
            label: _("Название команды"),
            hint: vi(c.uuid),
            value: xp(c),
            readOnly: !0
          }
        ),
        /* @__PURE__ */ o.jsx(
          ir,
          {
            label: _("Завершать диалог"),
            checked: !!m.endStatus,
            onChange: (j) => y({
              endStatus: j.target.checked
            })
          }
        ),
        m.actionType === "default_main" && /* @__PURE__ */ o.jsx(
          ir,
          {
            label: _("Передать команду серверу"),
            checked: !!m.forwardCommandToServer,
            onChange: (j) => y({
              forwardCommandToServer: j.target.checked
            })
          }
        ),
        m.actionType === "default_main" && m.forwardCommandToServer && /* @__PURE__ */ o.jsx(
          vn,
          {
            label: _("Скрипт Home Assistant"),
            value: m.script_entity_id ?? "",
            options: [
              { value: "", label: _("Использовать существующие сценарии") },
              ...g.map((j) => ({ value: j.entity_id, label: j.name })),
              ...m.script_entity_id && !g.some((j) => j.entity_id === m.script_entity_id) ? [{ value: m.script_entity_id, label: m.script_entity_id }] : []
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
            or,
            {
              rows: 8,
              label: _("Текст озвучки"),
              hint: _("Можно подставить данные из скрипта через ${имя}. Например, для текста «Ответ: ${reply}» передайте reply в поле variables действия ha_dialog_ui.send_command. Имена должны совпадать. Скрипт должен вернуть тип success."),
              placeholder: _("Например: ${reply}"),
              value: ((k = (x = m.voiceResponseArray) == null ? void 0 : x.find((j) => j.actionType === "success")) == null ? void 0 : k.voiceResponse) ?? "",
              onChange: (j) => y({ voiceResponseArray: [{ actionType: "success", voiceResponse: j.target.value }] })
            }
          )
        ] }) : /* @__PURE__ */ o.jsx(
          or,
          {
            rows: 8,
            "aria-label": _("Ответное сообщение"),
            label: _("Ответное сообщение"),
            value: m.voiceResponse,
            onChange: (j) => y({
              voiceResponse: j.target.value
            })
          }
        )
      ] })
    }
  );
}, Qx = () => {
  const r = Qt(), a = nt(), [i, c] = v.useState(!1), [d, f] = v.useState(!1), [p, m] = v.useState({ title: "" }), {
    error: g,
    retry: w,
    loading: y,
    loadCommands: x,
    getCommandDetails: k,
    updateCommand: j,
    commands: b
  } = gp("get_assistant_settings_short"), E = Wr(b, y || !!g, x, a), N = { error: r.error ?? g, busy: r.busy, retry: r.error ? r.retry ?? (() => {
    r.clearError(), w();
  }) : w }, P = ($) => r.run(async () => {
    f(!0);
    const z = await k("get_assistant_setting", $.uuid);
    m(z.data), c(!0);
  }, { retryable: !0 }), H = () => r.run(async () => {
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
      !i && /* @__PURE__ */ o.jsx(Ge, { ...N }),
      a ? /* @__PURE__ */ o.jsx(o.Fragment, {}) : /* @__PURE__ */ o.jsx(ht, {}),
      /* @__PURE__ */ o.jsx("div", { className: `${X.header} ${X.collectionHeader}`, children: /* @__PURE__ */ o.jsx("div", { className: X.headerTop, children: /* @__PURE__ */ o.jsx("div", { className: X.heading, children: !a && /* @__PURE__ */ o.jsx("h1", { className: X.title, children: _("Ответы по умолчанию") }) }) }) }),
      /* @__PURE__ */ o.jsx("div", { className: X.list, children: /* @__PURE__ */ o.jsx(Kt, { loading: y, itemCount: (b == null ? void 0 : b.data.length) ?? 0, append: a, children: b == null ? void 0 : b.data.map(($) => /* @__PURE__ */ o.jsx(
        Br,
        {
          title: xp($),
          onClick: () => P($)
        },
        $.uuid
      )) }) }),
      a ? /* @__PURE__ */ o.jsx("div", { ref: E, className: X.listSentinel }) : /* @__PURE__ */ o.jsx(
        Ur,
        {
          page: (b == null ? void 0 : b.page) || 1,
          totalPages: (b == null ? void 0 : b.total_pages) || 1,
          onChange: ($) => x($)
        }
      ),
      /* @__PURE__ */ o.jsx(
        qx,
        {
          feedback: N,
          open: i,
          isEdit: d,
          formData: p,
          setFormData: m,
          onClose: () => c(!1),
          onUpdate: H
        }
      )
    ] })
  ] });
}, Kx = (r, a) => {
  const i = new Blob([JSON.stringify(a, null, 2)], {
    type: "application/json;charset=utf-8"
  }), c = URL.createObjectURL(i), d = document.createElement("a");
  d.href = c, d.download = r, document.body.appendChild(d), d.click(), d.remove(), URL.revokeObjectURL(c);
};
class Lt extends Error {
}
const wp = {
  scripts: { list: "get_script_actions_short", detail: "get_script_action", import: "import_script_actions" },
  scenarios: { list: "get_assistant_sub_commands_short", detail: "get_assistant_sub_command", import: "import_assistant_sub_commands" }
}, rn = (r) => r !== null && typeof r == "object" && !Array.isArray(r);
async function Yx(r, a) {
  if (a === "settings") {
    const d = await r.getData("get_settings"), f = rn(d) && rn(d.result) ? d.result : d;
    if (!rn(f)) throw new Lt("Файл не содержит корректные настройки.");
    return Object.fromEntries(["theme", "client_id", "is_admin", "active_remout", "api_commands_enabled", "api_commands_token", "remout", "timer_alarm"].filter((m) => m in f).map((m) => [m, f[m]]));
  }
  if (a === "scenarios") return r.getData("export_command_bundle");
  const i = wp[a], c = await r.getAllRecords(i.list);
  return Promise.all(c.map(async (d) => {
    const f = await r.getRecord(d.uuid, i.detail);
    return rn(f) ? f.data : void 0;
  }));
}
function Gx(r, a) {
  let i;
  try {
    i = JSON.parse(r);
  } catch {
    throw new Lt("Некорректный JSON-файл.");
  }
  if (a === "settings") {
    const d = { theme: "string", client_id: "string", is_admin: "boolean", active_remout: "boolean", api_commands_enabled: "boolean", api_commands_token: "string", remout: "object", timer_alarm: "object" };
    if (!rn(i) || !Object.keys(i).length || Object.keys(i).some((f) => !d[f] || typeof i[f] !== d[f])) throw new Lt("Файл не содержит корректные настройки.");
    if (i.theme !== void 0 && (typeof i.theme != "string" || !["dark", "light"].includes(i.theme))) throw new Lt("Файл не содержит корректные настройки.");
    for (const [f, p] of [["remout", ["base_url", "token", "client_id"]], ["timer_alarm", ["global_music_timer", "global_music_alarm"]]])
      if (f in i && (!rn(i[f]) || Object.entries(i[f]).some(([m, g]) => !p.includes(m) || typeof g != "string"))) throw new Lt("Файл не содержит корректные настройки.");
    return i;
  }
  if (a === "scenarios" && rn(i)) {
    const d = ["commands", "sub_commands", "direct_commands", "templates", "settings"];
    if (i.format !== "ha-dialog-ui-commands" || i.version !== 1 || Object.keys(i).length !== 7 || d.some((f) => !Array.isArray(i[f]))) throw new Lt("Некорректный файл сценариев или неподдерживаемая версия.");
    for (const f of d) {
      const p = /* @__PURE__ */ new Set(), m = i[f];
      if (!Array.isArray(m)) throw new Lt("Ожидается массив записей JSON.");
      for (const g of m) {
        if (!rn(g) || typeof g.uuid != "string" || !g.uuid.trim() || p.has(g.uuid) || typeof g.title != "string") throw new Lt("Некорректные или повторяющиеся ID записей.");
        p.add(g.uuid);
      }
    }
    return i;
  }
  if (!Array.isArray(i)) throw new Lt("Ожидается массив записей JSON.");
  const c = /* @__PURE__ */ new Set();
  for (const d of i) {
    if (!rn(d) || typeof d.uuid != "string" || !d.uuid.trim() || c.has(d.uuid)) throw new Lt("Некорректные или повторяющиеся ID записей.");
    if (c.add(d.uuid), !(a === "scripts" ? typeof d.name == "string" && typeof d.script_entity_id == "string" : typeof d.title == "string" && typeof d.status == "boolean" && rn(d.subComponentDialog) && typeof d.subComponentDialog.endStatus == "boolean" && typeof d.subComponentDialog.actionType == "string" && typeof d.subComponentDialog.answerType == "string")) throw new Lt("Нужен файл с полными записями. Краткий список названий загрузить нельзя.");
  }
  return i;
}
async function Jx(r, a, i) {
  const c = Gx(i, a);
  return await r.saveData(c, a === "settings" ? "import_settings" : a === "scenarios" && !Array.isArray(c) ? "import_command_bundle" : wp[a].import), c;
}
const Xx = "_grid_fc8hl_1", Zx = "_card_fc8hl_8", ew = "_actions_fc8hl_23", tw = "_description_fc8hl_29", nw = "_page_fc8hl_36", Ls = {
  grid: Xx,
  card: Zx,
  actions: ew,
  description: tw,
  page: nw
}, rw = [
  { kind: "scripts", title: "Действия удалённых команд", description: "Привязки команд к скриптам Home Assistant и условия запуска. Самих скриптов HA в файле нет.", download: "Скачать скрипты", upload: "Загрузить скрипты" },
  { kind: "scenarios", title: "Сценарии", description: "Все разделы «Команды»: основные, второстепенные, прямые, шаблоны и ответы по умолчанию. ID и связи сохраняются.", download: "Скачать сценарии", upload: "Загрузить сценарии" },
  { kind: "settings", title: "Настройки интеграции", description: "Тема, параметры подключения, API и звуки таймеров и будильников. Язык интерфейса в файл не входит.", download: "Скачать настройки", upload: "Загрузить настройки" }
], sw = () => {
  const r = ct(), a = Hr(), i = nt(), [c, d] = v.useState(!1), [f, p] = v.useState(""), [m, g] = v.useState(!1), w = v.useRef(null), y = v.useRef(null), x = v.useRef("scripts"), k = async (j, b = !1) => {
    w.current = b ? j : null, d(!0), p(""), g(!1);
    try {
      await j();
    } catch (E) {
      g(!0), p(E instanceof Lt ? E.message : Tt(E));
    } finally {
      d(!1);
    }
  };
  return /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
    /* @__PURE__ */ o.jsx(mt, { title: _("Импорт и экспорт") }),
    /* @__PURE__ */ o.jsxs("div", { className: `${X.page} ${Ls.page}`, children: [
      /* @__PURE__ */ o.jsx(ht, {}),
      !i && /* @__PURE__ */ o.jsx("h1", { children: _("Импорт и экспорт") }),
      /* @__PURE__ */ o.jsx("div", { className: Ls.grid, children: rw.filter((j) => j.kind === "scripts" ? a === !0 : j.kind !== "scenarios" || a === !1).map((j) => /* @__PURE__ */ o.jsxs("section", { className: Ls.card, children: [
        /* @__PURE__ */ o.jsx("h2", { children: _(j.title) }),
        /* @__PURE__ */ o.jsx("p", { className: Ls.description, children: _(j.description) }),
        /* @__PURE__ */ o.jsxs("div", { className: Ls.actions, children: [
          /* @__PURE__ */ o.jsx(oe, { disabled: c, onClick: () => k(async () => {
            Kx(`ha-dialog-ui-${j.kind}.json`, await Yx(r, j.kind));
          }, !0), children: _(j.download) }),
          /* @__PURE__ */ o.jsx(oe, { variant: "secondary", disabled: c, onClick: () => {
            var b;
            x.current = j.kind, (b = y.current) == null || b.click();
          }, children: _(j.upload) })
        ] })
      ] }, j.kind)) }),
      /* @__PURE__ */ o.jsx("input", { ref: y, type: "file", accept: ".json,application/json", hidden: !0, onChange: (j) => {
        var N;
        const b = (N = j.target.files) == null ? void 0 : N[0], E = x.current;
        j.target.value = "", b && k(async () => {
          const P = await Jx(r, E, await b.text());
          E === "settings" && P !== null && typeof P == "object" && !Array.isArray(P) && (typeof P.theme == "string" && window.dispatchEvent(new CustomEvent("ha-dialog-ui-theme-change", { detail: P.theme })), typeof P.active_remout == "boolean" && window.dispatchEvent(new CustomEvent(li, { detail: P.active_remout }))), p("Данные загружены.");
        });
      } }),
      c && /* @__PURE__ */ o.jsx("p", { role: "status", children: _("Обработка файла...") }),
      /* @__PURE__ */ o.jsx(Ge, { error: m ? f : null, busy: c, retry: w.current ? () => {
        w.current && k(w.current, !0);
      } : void 0 }),
      !m && f && /* @__PURE__ */ o.jsx("p", { role: "status", children: _(f) })
    ] })
  ] });
};
function ow() {
  const r = ct(), [a, i] = v.useState(null), [c, d] = v.useState([]), f = Qt(), p = Qt(), m = v.useCallback(() => f.run(async () => {
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
    await r.saveData(y, "save_settings"), typeof y.api_commands_enabled == "boolean" && window.dispatchEvent(new CustomEvent(bl, { detail: y.api_commands_enabled })), typeof y.active_remout == "boolean" && window.dispatchEvent(new CustomEvent(li, { detail: y.active_remout }));
  };
  return { loading: f.busy, settings: a, musicOptions: c, saveSettings: w, settingsFeedback: f, musicFeedback: p };
}
const iw = "_form_1ijxr_1", aw = "_field_1ijxr_7", lw = "_input_1ijxr_13", uw = "_label_1ijxr_29", cw = "_help_1ijxr_35", dw = "_toggleHelp_1ijxr_40", ut = {
  form: iw,
  field: aw,
  input: lw,
  label: uw,
  help: cw,
  toggleHelp: dw
}, fw = ({ data: r, onChange: a }) => {
  const i = (c, d) => {
    a({
      ...r,
      [c]: d
    });
  };
  return /* @__PURE__ */ o.jsxs("div", { className: ut.form, children: [
    /* @__PURE__ */ o.jsx(Je, { label: _("Base URL"), value: r.base_url ?? "", placeholder: _("http://192.168.31.83:9379"), onChange: (c) => i("base_url", c.target.value) }),
    /* @__PURE__ */ o.jsx(Je, { label: _("Token"), value: r.token ?? "", placeholder: _("Bearer ..."), onChange: (c) => i("token", c.target.value) })
  ] });
}, pw = ({ data: r, musicOptions: a, musicUnavailable: i, onChange: c }) => {
  const d = (p, m) => {
    c({
      ...r,
      [p]: m
    });
  }, f = (p, m, g = "") => {
    const w = a.some((y) => y.value === g);
    return /* @__PURE__ */ o.jsxs("label", { className: ut.field, children: [
      /* @__PURE__ */ o.jsx("span", { className: ut.label, children: _(p) }),
      /* @__PURE__ */ o.jsxs(
        "select",
        {
          className: ut.input,
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
    a.length === 0 && !i && /* @__PURE__ */ o.jsx("span", { className: ut.help, children: _("Музыка на сервере не найдена.") })
  ] });
}, hw = ({ data: r, onChange: a }) => {
  const i = ap(), c = (d, f) => {
    a({
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
          value: i,
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
    /* @__PURE__ */ o.jsx(ir, { label: _("Is admin"), checked: !!r.is_admin, onChange: (d) => c("is_admin", d.target.checked) })
  ] });
}, mw = ({ data: r, onChange: a }) => {
  const i = (c, d) => a({ ...r, [c]: d });
  return /* @__PURE__ */ o.jsxs("div", { className: ut.form, children: [
    /* @__PURE__ */ o.jsxs("div", { className: ut.toggleHelp, children: [
      /* @__PURE__ */ o.jsx(ir, { label: _("Подключаться к удалённому серверу"), checked: !!r.active_remout, onChange: (c) => i("active_remout", c.target.checked) }),
      /* @__PURE__ */ o.jsx(sr, { label: "Подключаться к удалённому серверу", description: "Интеграция подключается к существующему удалённому серверу и получает от него команды по SSE. Для их выполнения используются «Действия удалённых команд», а локальные разделы команд скрываются. Этот переключатель не запускает новый сервер." })
    ] }),
    /* @__PURE__ */ o.jsxs("div", { className: ut.toggleHelp, children: [
      /* @__PURE__ */ o.jsx(ir, { label: _("Включить API"), checked: !!r.api_commands_enabled, onChange: (c) => i("api_commands_enabled", c.target.checked) }),
      /* @__PURE__ */ o.jsx(sr, { label: "Включить API", description: "Позволяет внешним приложениям отправлять команды в интеграцию и обмениваться с ней событиями по HTTP API. Адреса: /api/dialog/commands, /api/dialog/events, /api/dialog/event. Для доступа нужен токен API команд из поля ниже." })
    ] }),
    r.api_commands_enabled && /* @__PURE__ */ o.jsx(
      Je,
      {
        label: _("API Commands Token"),
        value: r.api_commands_token ?? "",
        onChange: (c) => i("api_commands_token", c.target.value),
        placeholder: _("Ключ доступа для API endpoints"),
        type: "password"
      }
    )
  ] });
}, di = {
  base_url: "",
  token: ""
}, vw = {
  global_music_timer: "",
  global_music_alarm: ""
}, kf = {
  remout: di,
  timer_alarm: vw,
  theme: "dark",
  is_admin: !1,
  active_remout: !1,
  client_id: "",
  api_commands_enabled: !1,
  api_commands_token: ""
}, yw = (r) => ({
  base_url: (r == null ? void 0 : r.base_url) ?? "",
  token: (r == null ? void 0 : r.token) ?? ""
}), gw = (r) => ({
  global_music_timer: (r == null ? void 0 : r.global_music_timer) ?? "",
  global_music_alarm: (r == null ? void 0 : r.global_music_alarm) ?? ""
}), _w = (r) => ({
  remout: yw(r == null ? void 0 : r.remout),
  timer_alarm: gw(r == null ? void 0 : r.timer_alarm),
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
}, Cf = (r, a) => {
  const i = {}, c = Sf(r.timer_alarm, a.timer_alarm);
  if (Object.keys(c).length > 0 && (i.timer_alarm = c), r.theme !== a.theme && (i.theme = r.theme), r.is_admin !== a.is_admin && (i.is_admin = r.is_admin), r.active_remout !== a.active_remout && (i.active_remout = r.active_remout), r.client_id !== a.client_id && (i.client_id = r.client_id), r.api_commands_enabled !== a.api_commands_enabled && (i.api_commands_enabled = r.api_commands_enabled), r.api_commands_token !== a.api_commands_token && (i.api_commands_token = r.api_commands_token), r.active_remout) {
    const d = Sf(r.remout ?? di, a.remout ?? di);
    Object.keys(d).length > 0 && (i.remout = d);
  }
  return i;
}, xw = () => {
  const r = nt(), [a, i] = v.useState(kf), c = Qt(), [d, f] = v.useState(kf), { settings: p, musicOptions: m, saveSettings: g, settingsFeedback: w, musicFeedback: y } = ow();
  v.useEffect(() => {
    if (!p) return;
    const b = _w(p);
    i(b), f(b), window.dispatchEvent(new CustomEvent("ha-dialog-ui-theme-change", { detail: b.theme }));
  }, [p]);
  const x = async (b) => {
    i((E) => ({ ...E, ...b })), b.theme && b.theme !== a.theme && (window.dispatchEvent(new CustomEvent("ha-dialog-ui-theme-change", { detail: b.theme })), await c.run(async () => {
      await g({ theme: b.theme }), f((E) => ({ ...E, theme: b.theme }));
    }, { exclusive: !0 }));
  }, k = () => c.run(async () => {
    await g(Cf(a, d)), f(a);
  }, { exclusive: !0 }), j = !!p && Object.keys(Cf(a, d)).length > 0;
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
            hw,
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
            /* @__PURE__ */ o.jsx(mw, { data: a, onChange: x }),
            a.active_remout && /* @__PURE__ */ o.jsx(
              fw,
              {
                data: a.remout ?? di,
                onChange: (b) => i((E) => ({ ...E, remout: b }))
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ o.jsxs("section", { className: X.settingsSection, "aria-label": _("Timer / Alarm"), children: [
          /* @__PURE__ */ o.jsx("h2", { children: _("Timer / Alarm") }),
          /* @__PURE__ */ o.jsx(
            pw,
            {
              data: a.timer_alarm,
              musicOptions: m,
              musicUnavailable: y.busy || !!y.error,
              onChange: (b) => i({ ...a, timer_alarm: b })
            }
          )
        ] })
      ] }),
      j && (r ? /* @__PURE__ */ o.jsx("div", { className: X.settingsMobileActions, children: /* @__PURE__ */ o.jsx(
        oe,
        {
          variant: "primary",
          disabled: c.busy || w.busy || !p,
          onClick: k,
          children: _("Сохранить")
        }
      ) }) : /* @__PURE__ */ o.jsx("div", { className: X.settingsActions, children: /* @__PURE__ */ o.jsx(oe, { disabled: c.busy || w.busy || !p, onClick: k, children: _("Сохранить") }) }))
    ] })
  ] });
}, $l = (r) => {
  if (typeof r == "number") return Math.max(0, r);
  const a = r.split(":").map(Number);
  return a.some((i) => !Number.isFinite(i) || i < 0) ? 0 : a.length === 3 ? a[0] * 3600 + a[1] * 60 + a[2] : a.length === 2 ? a[0] * 60 + a[1] : a.length === 1 ? a[0] : 0;
}, kp = (r) => typeof r == "string" || typeof r == "number" ? $l(r) : r ? typeof r.total_seconds == "number" ? Math.max(0, r.total_seconds) : $l(r.count_timer || "") : 0, ww = (r, a = "on", i = Date.now()) => {
  if (typeof r == "string" || typeof r == "number") return $l(r);
  if (!r) return 0;
  if (a !== "paused" && r.date_end && /(?:Z|[+-]\d{2}:?\d{2})$/i.test(r.date_end)) {
    const c = Date.parse(r.date_end);
    if (Number.isFinite(c)) return Math.max(0, Math.ceil((c - i) / 1e3));
  }
  return typeof r.remaining_seconds == "number" ? Math.max(0, r.remaining_seconds) : kp(r);
}, Ml = (r) => r !== null && typeof r == "object", rr = (r) => {
  const a = Ml(r) && "result" in r ? r.result : r;
  return Ml(a) && "data" in a ? a.data : a;
}, kw = (r) => {
  const a = Math.max(1, Number(r) || 1);
  return new Date(Date.now() + a * 1e3).toISOString();
}, jf = (r) => {
  const a = Math.max(1, Number(r) || 1), i = Math.floor(a / 3600), c = Math.floor(a % 3600 / 60), d = a % 60;
  return `${String(i).padStart(2, "0")}:${String(c).padStart(2, "0")}:${String(d).padStart(2, "0")}`;
}, Ef = (r) => {
  const a = rr(r);
  return Array.isArray(a) ? a : Ml(a) && Array.isArray(a.data) ? a.data : [];
};
function Sp() {
  const r = ct(), a = Qt(), [i, c] = v.useState([]), [d, f] = v.useState([]), [p, m] = v.useState([]), [g, w] = v.useState(!0), y = v.useMemo(() => r.getDevices(), [r]), x = v.useCallback(async () => {
    const W = await r.getPage("get_timer_requests_short", 1, 100), I = await Promise.all(
      Ef(W).map(async (J) => {
        var G;
        const B = await r.getRecord(J.uuid, "get_timer_request");
        return ((G = rr(B)) == null ? void 0 : G.data) ?? rr(B);
      })
    );
    c(I.filter((J) => !!J && J.action_type === "create_timer"));
  }, [r]), k = v.useCallback(async () => {
    const W = await r.getPage("get_alarm_requests_short", 1, 100), I = await Promise.all(
      Ef(W).map(async (J) => {
        var G;
        const B = await r.getRecord(J.uuid, "get_alarm_request");
        return ((G = rr(B)) == null ? void 0 : G.data) ?? rr(B);
      })
    );
    f(I.filter((J) => !!J && J.action_type !== "delete_alarm"));
  }, [r]), j = v.useCallback(async () => {
    const W = await r.getAllRecords("get_alarm_time_widgets_short"), I = await Promise.all(
      W.map(async (J) => {
        var G;
        const B = await r.getRecord(J.uuid, "get_alarm_time_widget");
        return ((G = rr(B)) == null ? void 0 : G.data) ?? rr(B);
      })
    );
    m(I.filter(Boolean));
  }, [r]), b = v.useCallback(async () => {
    w(!0);
    try {
      await a.run(async () => {
        await Promise.all([x(), k(), j()]);
      }, { retryable: !0 });
    } finally {
      w(!1);
    }
  }, [k, j, x, a.run]);
  v.useEffect(() => {
    b();
  }, []);
  const E = async (W, I) => await a.run(async () => {
    await W();
  }, { exclusive: !0 }) ? (await a.run(I, { retryable: !0 }), !0) : !1, N = async (W, I, J = 0.3) => {
    const B = {
      count_timer: jf(I),
      date_end: kw(I)
    };
    return E(() => r.saveData({ name: `Таймер ${jf(I)}`, action_type: "create_timer", device_id: W, timer_time: B, volume_start: J }, "save_timer_request"), x);
  }, P = async (W) => E(() => r.deleteRecord(W.uuid, "delete_timer_request"), x), H = async (W, I, J = 0.3, B = "once", G = []) => E(() => r.saveData({ name: `Будильник ${I}`, action_type: "create_alarm", device_id: W, status: "on", time: I, volume_start: J, repeat_type: B, repeat_days: G }, "save_alarm_request"), async () => {
    await Promise.all([k(), j()]);
  }), $ = async (W, I) => E(() => r.updateRecord(W.uuid, "update_alarm_request", { ...W, action_type: "edit_alarm", ...I }), async () => {
    await Promise.all([k(), j()]);
  }), z = async (W) => E(() => r.deleteRecord(W.uuid, "delete_alarm_request"), k);
  return {
    feedback: { ...a, retry: a.error ? a.retry ?? (() => {
      b();
    }) : void 0 },
    alarmTimeWidgets: p,
    refreshAlarmTimes: () => a.run(j, { retryable: !0 }),
    alarms: d,
    createAlarm: H,
    createTimer: N,
    deleteAlarm: z,
    devices: y,
    loading: g,
    stopTimer: P,
    timers: i,
    toTimerSeconds: ww,
    updateAlarm: $
  };
}
const Sw = "_grid_w5y3x_31", Cw = "_card_w5y3x_38", jw = "_empty_w5y3x_38", Ew = "_cardHeader_w5y3x_47", Nw = "_cardTitle_w5y3x_54", Tw = "_meta_w5y3x_59", bw = "_form_w5y3x_73", Rw = "_field_w5y3x_79", Aw = "_label_w5y3x_85", Pw = "_input_w5y3x_91", $w = "_quickTabs_w5y3x_101", Mw = "_quickTab_w5y3x_101", Iw = "_activeQuickTab_w5y3x_117", Lw = "_cardLead_w5y3x_135", Dw = "_cardIcon_w5y3x_143", Ow = "_cardButton_w5y3x_148", zw = "_wheelPicker_w5y3x_160", Hw = "_wheelColumn_w5y3x_173", Fw = "_wheelSelect_w5y3x_180", Ww = "_footerActions_w5y3x_202", Bw = "_saveButton_w5y3x_208", Uw = "_volumeLabel_w5y3x_226", Vw = "_volumeValue_w5y3x_232", qw = "_alarmTimeFields_w5y3x_237", ce = {
  grid: Sw,
  card: Cw,
  empty: jw,
  cardHeader: Ew,
  cardTitle: Nw,
  meta: Tw,
  form: bw,
  field: Rw,
  label: Aw,
  input: Pw,
  quickTabs: $w,
  quickTab: Mw,
  activeQuickTab: Iw,
  cardLead: Lw,
  cardIcon: Dw,
  cardButton: Ow,
  wheelPicker: zw,
  wheelColumn: Hw,
  wheelSelect: Fw,
  footerActions: Ww,
  saveButton: Bw,
  volumeLabel: Uw,
  volumeValue: Vw,
  alarmTimeFields: qw
}, Qw = [5, 10, 15, 30, 45, 60], Nf = (r) => {
  const a = Math.max(0, r), i = Math.floor(a / 3600), c = Math.floor(a % 3600 / 60), d = a % 60;
  return [i, c, d].map((f) => String(f).padStart(2, "0")).join(":");
}, Kw = (r, a, i) => Math.max(1, r * 3600 + a * 60 + i), Yw = (r) => ({
  hours: Math.floor(r / 3600),
  minutes: Math.floor(r % 3600 / 60),
  seconds: r % 60
}), Gw = () => {
  const r = nt(), { feedback: a, createTimer: i, devices: c, loading: d, stopTimer: f, timers: p, toTimerSeconds: m } = Sp(), [g, w] = v.useState(!1), [y, x] = v.useState(""), [k, j] = v.useState(0.3), [b, E] = v.useState({ hours: 0, minutes: 5, seconds: 0 }), [N, P] = v.useState({});
  v.useEffect(() => {
    P(Object.fromEntries(p.map((I) => [I.uuid, m(I.timer_time, I.status)])));
  }, [p, m]), v.useEffect(() => {
    const I = window.setInterval(() => {
      P((J) => Object.fromEntries(Object.entries(J).map(([B, G]) => {
        var ye;
        return [B, ((ye = p.find((de) => de.uuid === B)) == null ? void 0 : ye.status) === "paused" ? G : Math.max(0, G - 1)];
      })));
    }, 1e3);
    return () => window.clearInterval(I);
  }, [p]);
  const H = v.useMemo(() => new Map(c.map((I) => [I.id, I.name])), [c]), $ = Kw(b.hours, b.minutes, b.seconds), z = async () => {
    y && await i(y, $, k) && w(!1);
  }, W = (I) => E(Yw(I * 60));
  return /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
    /* @__PURE__ */ o.jsx(mt, { title: _("Таймеры") }),
    /* @__PURE__ */ o.jsxs("div", { className: X.page, children: [
      !g && /* @__PURE__ */ o.jsx(Ge, { ...a }),
      /* @__PURE__ */ o.jsx(ht, {}),
      /* @__PURE__ */ o.jsxs("div", { className: X.header, children: [
        /* @__PURE__ */ o.jsx("div", { className: X.heading, children: r ? /* @__PURE__ */ o.jsx(o.Fragment, {}) : /* @__PURE__ */ o.jsx("h1", { className: X.title, children: _("Таймеры") }) }),
        /* @__PURE__ */ o.jsx("div", { className: X.actions, children: r ? /* @__PURE__ */ o.jsx(ur, { startVisible: !0, children: /* @__PURE__ */ o.jsx(
          oe,
          {
            variant: "primary",
            onClick: () => w(!0),
            children: _("Добавить сценарий")
          }
        ) }) : /* @__PURE__ */ o.jsx(
          oe,
          {
            variant: "primary",
            onClick: () => w(!0),
            children: _("🞢 Создать")
          }
        ) })
      ] }),
      /* @__PURE__ */ o.jsx(Kt, { loading: d, itemCount: p.length, placeholderCount: 4, children: /* @__PURE__ */ o.jsx("div", { className: ce.grid, children: p.length ? p.map((I) => {
        const J = m(I.timer_time, I.status), B = kp(I.timer_time);
        return /* @__PURE__ */ o.jsx("div", { className: ce.card, children: /* @__PURE__ */ o.jsxs("div", { className: ce.cardHeader, children: [
          /* @__PURE__ */ o.jsxs("div", { className: ce.cardLead, children: [
            /* @__PURE__ */ o.jsx(Ql, { className: ce.cardIcon, size: 26 }),
            /* @__PURE__ */ o.jsxs("div", { children: [
              /* @__PURE__ */ o.jsx("h2", { className: ce.cardTitle, children: Nf(N[I.uuid] ?? J) }),
              /* @__PURE__ */ o.jsxs("div", { className: ce.meta, children: [
                _("Заведен на"),
                " ",
                Nf(B),
                " • ",
                H.get(I.device_id) || I.device_id
              ] })
            ] })
          ] }),
          /* @__PURE__ */ o.jsx(oe, { variant: "remove", onClick: () => f(I), children: _("Удалить") })
        ] }) }, I.uuid);
      }) : !d && !a.error && /* @__PURE__ */ o.jsx("div", { className: ce.empty, children: _("Нет запущенных таймеров.") }) }) }),
      /* @__PURE__ */ o.jsx(Yt, { feedback: a, open: g, onClose: () => w(!1), title: _("Создать таймер"), footer: /* @__PURE__ */ o.jsx("div", { className: ce.footerActions, children: /* @__PURE__ */ o.jsx(oe, { className: ce.saveButton, onClick: z, disabled: !y, children: _("Создать") }) }), children: /* @__PURE__ */ o.jsxs("div", { className: ce.form, children: [
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
                const B = Math.max(0, Math.min(I === "hours" ? 23 : 59, Math.trunc(Number(J.target.value) || 0)));
                E((G) => ({ ...G, [I]: B }));
              }
            }
          )
        ] }, I)) }),
        /* @__PURE__ */ o.jsxs("div", { className: ce.field, children: [
          /* @__PURE__ */ o.jsx("span", { className: ce.label, children: _("Быстрое создание") }),
          /* @__PURE__ */ o.jsx("div", { className: ce.quickTabs, children: Qw.map((I) => /* @__PURE__ */ o.jsxs("button", { type: "button", className: `${ce.quickTab} ${$ === I * 60 ? ce.activeQuickTab : ""}`, onClick: () => W(I), children: [
            I,
            " ",
            _("мин")
          ] }, I)) })
        ] }),
        /* @__PURE__ */ o.jsx(
          Or,
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
              Math.round(k * 100),
              "%"
            ] })
          ] }),
          /* @__PURE__ */ o.jsx("input", { className: ce.input, type: "range", min: "0", max: "1", step: "0.05", value: k, onChange: (I) => j(Number(I.target.value)) })
        ] })
      ] }) })
    ] })
  ] });
};
let Jw = 0;
function Cp() {
  var r;
  if ((r = globalThis.crypto) != null && r.getRandomValues) {
    const a = new Uint8Array(16);
    return globalThis.crypto.getRandomValues(a), `monitor-${Array.from(a, (i) => i.toString(16).padStart(2, "0")).join("")}`;
  }
  return `monitor-${Date.now().toString(36)}-${(++Jw).toString(36)}`;
}
class jp {
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
function Ep() {
  var r;
  return !!(globalThis.isSecureContext && ((r = navigator.mediaDevices) != null && r.getUserMedia));
}
function Xw(r) {
  const a = r && typeof r == "object" && "name" in r ? String(r.name) : "";
  return a === "NotAllowedError" || a === "SecurityError" ? "Разрешите доступ к микрофону в настройках браузера и откройте HA по HTTPS." : a === "NotSupportedError" ? "Этот браузер не поддерживает звонки. Откройте HA в актуальном Chrome или Safari." : a === "NotFoundError" ? "Микрофон на этом устройстве не найден." : a === "NotReadableError" ? "Микрофон занят другим приложением или недоступен." : "Не удалось подключить микрофон или звук звонка. Проверьте разрешения и подключение.";
}
class Zw {
  constructor(a, i, c) {
    be(this, "output", new jp());
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
    if (!Ep()) throw new DOMException("Secure microphone unavailable", "SecurityError");
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
const ek = "_navigation_mjbb7_1", tk = "_page_mjbb7_5", nk = "_title_mjbb7_11", rk = "_hint_mjbb7_15", sk = "_grid_mjbb7_20", ok = "_device_mjbb7_27", ik = "_active_mjbb7_56", ak = "_phoneStage_mjbb7_113", lk = "_avatar_mjbb7_124", uk = "_phoneStatus_mjbb7_141", ck = "_duration_mjbb7_148", dk = "_phoneFooter_mjbb7_159", fk = "_callControls_mjbb7_167", pk = "_control_mjbb7_173", hk = "_roundControl_mjbb7_186", mk = "_hangup_mjbb7_186", vk = "_controlSelected_mjbb7_196", yk = "_routeHint_mjbb7_214", gk = "_routeName_mjbb7_223", _k = "_dial_mjbb7_237", $e = {
  navigation: ek,
  page: tk,
  title: nk,
  hint: rk,
  grid: sk,
  device: ok,
  active: ik,
  phoneStage: ak,
  avatar: lk,
  phoneStatus: uk,
  duration: ck,
  phoneFooter: dk,
  callControls: fk,
  control: pk,
  roundControl: hk,
  hangup: mk,
  controlSelected: vk,
  routeHint: yk,
  routeName: gk,
  dial: _k
};
function xk() {
  var Re;
  const r = ct(), a = nt(), [i, c] = v.useState(), [d, f] = v.useState(""), [p, m] = v.useState(""), [g, w] = v.useState(!1), [y, x] = v.useState(!1), [k, j] = v.useState(!1), [b, E] = v.useState([]), [N, P] = v.useState(!1), [H, $] = v.useState("default"), [z, W] = v.useState(!1), [I, J] = v.useState(!1), [B, G] = v.useState(0), ye = v.useRef(), de = v.useRef(""), ge = v.useRef(), he = v.useRef(!1), _e = Ep();
  v.useEffect(() => {
    let Z = !0;
    he.current = !0, x(!1);
    const fe = Cp();
    de.current = fe;
    let De;
    return r.callsWatch(fe, (Ae) => {
      Z && c(Ae);
    }).then((Ae) => {
      Z ? (De = Ae, x(!0)) : Promise.resolve(Ae()).catch(() => {
      });
    }).catch((Ae) => {
      Z && m(Tt(Ae));
    }), () => {
      var Ae;
      Z = !1, he.current = !1, (Ae = ge.current) == null || Ae.close(), ge.current = void 0, De && Promise.resolve(De()).catch(() => {
      });
    };
  }, [r]);
  const te = i == null ? void 0 : i.calls.find((Z) => Z.id === i.owned_call_id);
  v.useEffect(() => {
    var Z, fe;
    (Z = ge.current) == null || Z.setSending((te == null ? void 0 : te.state) === "connecting" || (te == null ? void 0 : te.state) === "active"), i && !i.owned_call_id && !g && ((fe = ge.current) == null || fe.close(), ge.current = void 0);
  }, [i, te == null ? void 0 : te.state, g]), v.useEffect(() => {
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
    if (!ae) return;
    const Z = !k;
    (fe = ge.current) == null || fe.setMicrophoneMuted(Z), j(Z);
  }, F = async (Z) => {
    const fe = ge.current;
    if (!(!fe || I || !ae)) {
      J(!0), m("");
      try {
        await fe.selectOutput(Z), he.current && ge.current === fe && ($(Z), W(!1));
      } catch (De) {
        he.current && !(De instanceof DOMException && De.name === "AbortError") && m(_("Не удалось переключить звук. Используйте системный выбор аудиоустройства."));
      } finally {
        he.current && J(!1);
      }
    }
  }, R = async () => {
    const Z = ge.current;
    if (!(!Z || I || !ae)) {
      if (H !== "default") {
        await F("default");
        return;
      }
      if (!Z.canPromptOutput()) {
        W((fe) => !fe);
        return;
      }
      J(!0), m("");
      try {
        const fe = await Z.promptOutput();
        he.current && ge.current === Z && ($(fe.id), E((De) => De.some((Ae) => Ae.id === fe.id) ? De : [...De, fe]));
      } catch (fe) {
        he.current && !(fe instanceof DOMException && ["AbortError", "NotAllowedError"].includes(fe.name)) && m(_("Не удалось переключить звук. Используйте системный выбор аудиоустройства."));
      } finally {
        he.current && J(!1);
      }
    }
  }, K = i == null ? void 0 : i.devices.find((Z) => Z.id === d), U = (Z) => i == null ? void 0 : i.calls.some((fe) => fe.source_device_id === Z || fe.target_device_id === Z), C = i == null ? void 0 : i.calls.find((Z) => Z.source_device_id === d || Z.target_device_id === d), O = !!(te && te.target_device_id === d), ae = O && (te == null ? void 0 : te.state) === "active" && !g, me = (Z) => {
    var fe;
    return ((fe = i == null ? void 0 : i.devices.find((De) => De.id === Z)) == null ? void 0 : fe.name) ?? _("Колонка");
  }, we = _((C == null ? void 0 : C.state) === "active" ? "Разговор" : (C == null ? void 0 : C.state) === "connecting" ? "Соединяем…" : C ? "Ожидание ответа" : "Готово к звонку"), ke = async () => {
    var Z;
    if (!g) {
      w(!0), m("");
      try {
        await r.browserCallEnd(de.current), (Z = ge.current) == null || Z.close(), ge.current = void 0;
      } catch (fe) {
        he.current && m(Tt(fe));
      } finally {
        he.current && w(!1);
      }
    }
  }, Ne = async () => {
    var De;
    if (g || !d) return;
    w(!0), m(""), j(!1), $("default"), W(!1), E([]), P(!1);
    const Z = de.current, fe = new Zw(r, Z, (Ae) => {
      he.current && m(_(Ae)), r.browserCallEnd(Z).catch(() => {
      });
    });
    (De = ge.current) == null || De.close(), ge.current = fe;
    try {
      if (await fe.prepare(), he.current && (E(fe.getOutputDevices()), P(fe.canSelectOutput())), !he.current) {
        fe.close();
        return;
      }
      const Ae = await r.browserCallStart(Z, d);
      if (!he.current) {
        fe.close();
        return;
      }
      if (await fe.listen(), !he.current) {
        fe.close();
        return;
      }
      c((Gt) => Gt && { ...Gt, owned_call_id: Ae.call_id, calls: Gt.calls.some((Fs) => Fs.id === Ae.call_id) ? Gt.calls : [...Gt.calls, { id: Ae.call_id, source_device_id: null, source_type: "browser", target_device_id: d, state: "ringing" }] });
    } catch (Ae) {
      fe.close(), he.current && m(Ae instanceof DOMException ? _(Xw(Ae)) : Tt(Ae)), await r.browserCallEnd(Z).catch(() => {
      });
    } finally {
      he.current && w(!1);
    }
  };
  return /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
    /* @__PURE__ */ o.jsx("div", { className: $e.navigation, children: /* @__PURE__ */ o.jsx(ht, {}) }),
    a && /* @__PURE__ */ o.jsx(mt, { title: "Звонки" }),
    /* @__PURE__ */ o.jsxs("section", { className: $e.page, children: [
      /* @__PURE__ */ o.jsx("h1", { className: $e.title, children: _("Звонки") }),
      p && !d && /* @__PURE__ */ o.jsx("p", { role: "alert", children: p }),
      !i && !p && /* @__PURE__ */ o.jsx(Kt, { loading: !0, itemCount: 0, placeholderCount: 3, grid: !0 }),
      i && !i.available && /* @__PURE__ */ o.jsx("p", { role: "alert", children: _("Сервер звонков недоступен. Проверьте журнал HA и TCP-порт 8125.") }),
      (i == null ? void 0 : i.available) && i.devices.length === 0 && /* @__PURE__ */ o.jsx("p", { children: _("Нет колонок с поддержкой звонков. Подключите модуль calls.yaml и обновите прошивку.") }),
      /* @__PURE__ */ o.jsx("div", { className: $e.grid, children: i == null ? void 0 : i.devices.map((Z) => /* @__PURE__ */ o.jsxs(
        "button",
        {
          className: `${$e.device} ${U(Z.id) ? $e.active : ""}`,
          onClick: () => {
            f(Z.id), m("");
          },
          children: [
            U(Z.id) ? /* @__PURE__ */ o.jsx(df, { size: 26 }) : /* @__PURE__ */ o.jsx(ai, { size: 26 }),
            /* @__PURE__ */ o.jsx("strong", { children: Z.name }),
            /* @__PURE__ */ o.jsx("span", { children: _(Z.online ? U(Z.id) ? "Участвует в звонке" : "Готова к звонку" : "Нет подключения") })
          ]
        },
        Z.id
      )) }),
      /* @__PURE__ */ o.jsxs(Yt, { open: !!d, onClose: () => f(""), title: _("Звонки"), dialogLabel: me(d), footer: /* @__PURE__ */ o.jsxs("div", { className: $e.phoneFooter, children: [
        /* @__PURE__ */ o.jsxs("div", { className: $e.callControls, children: [
          /* @__PURE__ */ o.jsxs("div", { className: $e.control, children: [
            /* @__PURE__ */ o.jsx(oe, { variant: "secondary", className: `${$e.roundControl} ${O && k ? $e.controlSelected : ""}`, "aria-label": _(O && k ? "Включить микрофон" : "Выключить микрофон"), "aria-pressed": O && k, disabled: !ae, onClick: Ee, children: O && k ? /* @__PURE__ */ o.jsx(eg, { size: 25 }) : /* @__PURE__ */ o.jsx(ng, { size: 25 }) }),
            /* @__PURE__ */ o.jsx("span", { children: _(O && k ? "Микрофон выкл." : "Микрофон") })
          ] }),
          /* @__PURE__ */ o.jsxs("div", { className: $e.control, children: [
            /* @__PURE__ */ o.jsx(oe, { variant: "secondary", className: `${$e.roundControl} ${O && H !== "default" ? $e.controlSelected : ""}`, "aria-label": _("Динамик"), "aria-pressed": O && H !== "default", disabled: !ae || !N || I, onClick: () => void R(), children: /* @__PURE__ */ o.jsx(_g, { size: 25 }) }),
            /* @__PURE__ */ o.jsx("span", { children: _("Динамик") })
          ] }),
          /* @__PURE__ */ o.jsxs("div", { className: $e.control, children: [
            /* @__PURE__ */ o.jsx(oe, { variant: "secondary", className: $e.roundControl, "aria-label": _("Включить звук"), disabled: !ae, onClick: () => {
              var Z;
              return void ((Z = ge.current) == null ? void 0 : Z.resumePlayback().catch(() => m(_("Браузер заблокировал звук. Проверьте разрешение воспроизведения и громкость телефона."))));
            }, children: /* @__PURE__ */ o.jsx(Cy, { size: 25 }) }),
            /* @__PURE__ */ o.jsx("span", { children: _("Звук") })
          ] })
        ] }),
        ae && !N && /* @__PURE__ */ o.jsxs("div", { className: $e.routeHint, children: [
          /* @__PURE__ */ o.jsx("span", { children: _("Выход звука — через настройки телефона") }),
          /* @__PURE__ */ o.jsx(sr, { label: "Динамик", description: "Этот браузер не разрешает переключать разговорный динамик и громкую связь из сайта. Выберите динамик или наушники в системном меню телефона. Кнопка «Звук» повторно включает воспроизведение." })
        ] }),
        ae && z && /* @__PURE__ */ o.jsx(vn, { label: "Устройство вывода", value: H, disabled: I, onChange: (Z) => void F(Z.target.value), options: [{ value: "default", label: _("По умолчанию") }, ...b.filter((Z) => Z.id !== "default").map((Z) => ({ value: Z.id, label: Z.label }))] }),
        ae && H !== "default" && /* @__PURE__ */ o.jsx("small", { className: $e.routeName, children: (Re = b.find((Z) => Z.id === H)) == null ? void 0 : Re.label }),
        /* @__PURE__ */ o.jsxs("div", { className: $e.control, children: [
          O ? /* @__PURE__ */ o.jsx(oe, { className: $e.hangup, disabled: g, "aria-label": _("Положить трубку"), onClick: () => void ke(), children: /* @__PURE__ */ o.jsx(og, { size: 30 }) }) : /* @__PURE__ */ o.jsx(oe, { className: $e.dial, "aria-label": _(C ? "Занято" : "Позвонить"), disabled: g || !y || !_e || !(i != null && i.available) || !(K != null && K.online) || !!te || !!C, onClick: () => void Ne(), children: /* @__PURE__ */ o.jsx(ai, { size: 30 }) }),
          /* @__PURE__ */ o.jsx("span", { children: _(O ? "Завершить" : C ? "Занято" : "Позвонить") })
        ] })
      ] }), children: [
        /* @__PURE__ */ o.jsxs("div", { className: $e.phoneStage, children: [
          /* @__PURE__ */ o.jsx("div", { className: $e.avatar, children: /* @__PURE__ */ o.jsx(df, { size: 46, strokeWidth: 1.4 }) }),
          /* @__PURE__ */ o.jsx("h2", { children: me(d) }),
          /* @__PURE__ */ o.jsxs("div", { className: $e.phoneStatus, children: [
            /* @__PURE__ */ o.jsx("span", { role: "status", "aria-live": "polite", children: g && !O ? _("Подключаем микрофон…") : we }),
            /* @__PURE__ */ o.jsx(sr, { label: "Звонки", description: "Вы звоните с микрофона этого телефона или компьютера. Закрытие окна сохраняет звонок; выход из раздела или закрытие страницы завершает звонок с этого устройства. Звонки между колонками запускаются сценариями HA." })
          ] }),
          O && (te == null ? void 0 : te.state) === "active" && /* @__PURE__ */ o.jsxs("time", { className: $e.duration, "aria-label": _("Длительность звонка"), children: [
            String(Math.floor(B / 60)).padStart(2, "0"),
            ":",
            String(B % 60).padStart(2, "0")
          ] }),
          O && k && /* @__PURE__ */ o.jsx("p", { className: $e.hint, children: _("Ваш микрофон выключен") }),
          !_e && /* @__PURE__ */ o.jsx("p", { role: "alert", children: _("Для звонка разрешите микрофон и откройте Home Assistant по HTTPS.") })
        ] }),
        p && /* @__PURE__ */ o.jsx("p", { role: "alert", children: p }),
        C && !O && /* @__PURE__ */ o.jsx("p", { className: $e.hint, children: _("Колонка уже участвует в другом звонке.") }),
        te && !O && /* @__PURE__ */ o.jsx("p", { className: $e.hint, children: _("Сначала завершите текущий звонок.") })
      ] })
    ] })
  ] });
}
const wk = "_page_1k5zr_1", kk = "_heading_1k5zr_8", Sk = "_grid_1k5zr_26", Ck = "_device_1k5zr_33", jk = "_deviceLive_1k5zr_64", Ek = "_navigation_1k5zr_72", Nk = "_playback_1k5zr_76", Tk = "_playbackSelect_1k5zr_93", bk = "_statusRow_1k5zr_117", Rk = "_status_1k5zr_117", Ak = "_live_1k5zr_132", Pk = "_hint_1k5zr_136", $k = "_footer_1k5zr_142", Mk = "_empty_1k5zr_153", Ik = "_error_1k5zr_160", Ke = {
  page: wk,
  heading: kk,
  grid: Sk,
  device: Ck,
  deviceLive: jk,
  navigation: Ek,
  playback: Nk,
  playbackSelect: Tk,
  statusRow: bk,
  status: Rk,
  live: Ak,
  hint: Pk,
  footer: $k,
  empty: Mk,
  error: Ik
};
function Lk() {
  const r = ct(), a = nt(), [i, c] = v.useState(), [d, f] = v.useState(""), [p, m] = v.useState(null), [g, w] = v.useState("browser"), [y, x] = v.useState(!1), [k, j] = v.useState(!1), b = v.useRef(""), E = v.useRef(!1), N = v.useRef(), [P, H] = v.useState(0);
  v.useEffect(() => {
    E.current = !0;
    let R = !0, K;
    const U = Cp();
    return b.current = U, c(void 0), f(""), r.monitorWatch(U, (C) => {
      R && c(C);
    }).then((C) => {
      R ? K = C : Promise.resolve(C()).catch(() => {
      });
    }).catch((C) => {
      R && f(
        Tt(
          C,
          "Не удалось открыть радионяню. Проверьте подключение к HA."
        )
      );
    }), () => {
      var C;
      R = !1, E.current = !1, (C = N.current) == null || C.close(), N.current = void 0, K && Promise.resolve(K()).catch(() => {
      });
    };
  }, [r, P]), v.useEffect(() => {
    var R;
    i && !i.owned_source_id && !y && ((R = N.current) == null || R.close(), N.current = void 0, j(!1));
  }, [i, y]);
  const $ = i == null ? void 0 : i.devices.find((R) => R.id === p), z = (i == null ? void 0 : i.devices.filter((R) => R.source)) ?? [], W = i == null ? void 0 : i.sessions.find(
    (R) => R.source_device_id === p
  ), I = !!($ != null && $.transmitting || ($ == null ? void 0 : $.source_state) === "on" || W), J = k && ($ == null ? void 0 : $.transmitting) && (i == null ? void 0 : i.owned_source_id) === p, B = !!W || J, G = (R) => {
    const K = i == null ? void 0 : i.sessions.find(
      (U) => U.source_device_id === R.id
    );
    w((K == null ? void 0 : K.listener_device_id) ?? "browser"), m(R.id), f("");
  }, ye = () => m(null), de = async () => {
    var K;
    if (!$ || y) return;
    x(!0), f(""), j(!1), (K = N.current) == null || K.close(), N.current = void 0;
    let R;
    try {
      g === "browser" && (R = new jp(), N.current = R, await R.prepare());
      const U = await r.monitorStart(
        b.current,
        $.id,
        g === "browser" ? void 0 : g
      );
      if (!E.current || !U.started) {
        R == null || R.close();
        return;
      }
      R && await R.listen(r, $.node_id, (C) => {
        E.current && j(C);
      }), E.current && (j(!0), c(
        (C) => C && {
          ...C,
          owned_source_id: $.id,
          devices: C.devices.map(
            (O) => O.id === $.id ? { ...O, transmitting: !0, source_state: "on" } : O
          ),
          sessions: g === "browser" ? C.sessions : [
            ...C.sessions.filter(
              (O) => O.source_device_id !== $.id
            ),
            {
              source_device_id: $.id,
              listener_device_id: g
            }
          ]
        }
      ));
    } catch (U) {
      if (R == null || R.close(), E.current) {
        f(
          Tt(
            U,
            "Не удалось начать прослушивание. Проверьте подключение и разрешение воспроизведения."
          )
        );
        try {
          await r.monitorStop(b.current, $.id);
        } catch {
        }
      }
    } finally {
      E.current && x(!1);
    }
  }, ge = async (R) => {
    var K;
    x(!0), f("");
    try {
      await r.monitorStop(b.current, R), (i == null ? void 0 : i.owned_source_id) === R && ((K = N.current) == null || K.close(), N.current = void 0, j(!1)), c(
        (U) => U && {
          ...U,
          owned_source_id: U.owned_source_id === R ? null : U.owned_source_id,
          devices: U.devices.map(
            (C) => C.id === R ? { ...C, transmitting: !1, source_state: "off" } : C
          ),
          sessions: U.sessions.filter(
            (C) => C.source_device_id !== R && C.listener_device_id !== R
          )
        }
      );
    } catch (U) {
      E.current && f(Tt(U));
    } finally {
      E.current && x(!1);
    }
  }, he = (i == null ? void 0 : i.devices.filter(
    (R) => R.listener && R.id !== p
  )) ?? [], _e = _(
    y ? "Подключаемся…" : I ? J || W ? "Прослушивание активно" : "Источник включён" : "Готово к запуску"
  ), te = /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
    /* @__PURE__ */ o.jsxs("div", { className: Ke.statusRow, children: [
      /* @__PURE__ */ o.jsxs(
        "div",
        {
          role: "status",
          "aria-live": "polite",
          className: `${Ke.status} ${I ? Ke.live : ""}`,
          children: [
            /* @__PURE__ */ o.jsx(My, { size: 12, fill: "currentColor" }),
            _e
          ]
        }
      ),
      /* @__PURE__ */ o.jsx(sr, { label: _e, description: _(
        I && (i == null ? void 0 : i.owned_source_id) !== p ? "Сеанс запущен вне этой вкладки. Закрытие окна или вкладки его не остановит. Для остановки нажмите кнопку ниже." : "Закрытие этого окна не останавливает прослушивание. Для остановки нажмите кнопку ниже или выйдите из вкладки «Радионяня»."
      ) })
    ] }),
    /* @__PURE__ */ o.jsx("p", { className: Ke.hint, children: _("Где воспроизводить звук?") }),
    /* @__PURE__ */ o.jsxs("div", { className: Ke.playback, children: [
      g === "browser" ? /* @__PURE__ */ o.jsx(Vy, { size: 22 }) : /* @__PURE__ */ o.jsx(Ql, { size: 22 }),
      /* @__PURE__ */ o.jsx(
        vn,
        {
          "aria-label": _("Где воспроизводить звук?"),
          className: Ke.playbackSelect,
          value: g,
          onChange: (R) => w(R.target.value),
          disabled: y || B,
          options: [
            { value: "browser", label: _("На этом устройстве") },
            ...he.map((R) => ({
              value: R.id,
              label: R.online ? R.name : `${R.name} — ${_("Нет подключения")}`,
              disabled: !R.online
            }))
          ]
        }
      )
    ] }),
    B && /* @__PURE__ */ o.jsx("p", { className: Ke.hint, children: _("Чтобы сменить устройство воспроизведения, сначала остановите сеанс.") })
  ] }), Ee = /* @__PURE__ */ o.jsx("div", { className: Ke.footer, children: /* @__PURE__ */ o.jsx(
    oe,
    {
      onClick: I ? () => void ge(p) : () => void de(),
      disabled: y || !I && !($ != null && $.online) || !I && g !== "browser" && !(i != null && i.devices.some(
        (R) => R.id === g && R.online
      )),
      children: _(
        y ? "Подключаемся…" : I ? g === "browser" && !J && !W ? "Начать слушать" : "Остановить" : "Старт"
      )
    }
  ) }), F = I && !B ? /* @__PURE__ */ o.jsxs("div", { className: Ke.footer, children: [
    /* @__PURE__ */ o.jsx(oe, { disabled: y || !($ != null && $.online), onClick: () => void de(), children: _(g === "browser" ? "Начать слушать" : "Старт") }),
    /* @__PURE__ */ o.jsx(
      oe,
      {
        variant: "ghost",
        disabled: y,
        onClick: () => void ge(p),
        children: _("Остановить источник")
      }
    )
  ] }) : Ee;
  return /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
    /* @__PURE__ */ o.jsx("div", { className: Ke.navigation, children: /* @__PURE__ */ o.jsx(ht, {}) }),
    a && /* @__PURE__ */ o.jsx(mt, { title: "Радионяня" }),
    /* @__PURE__ */ o.jsxs("section", { className: Ke.page, children: [
      /* @__PURE__ */ o.jsxs("header", { className: Ke.heading, children: [
        /* @__PURE__ */ o.jsx(ql, { size: 30 }),
        /* @__PURE__ */ o.jsx("div", { children: /* @__PURE__ */ o.jsx("h1", { children: _("Радионяня") }) })
      ] }),
      d && !p && /* @__PURE__ */ o.jsxs("div", { role: "alert", className: Ke.error, children: [
        d,
        /* @__PURE__ */ o.jsx(oe, { onClick: () => H((R) => R + 1), children: _("Повторить") })
      ] }),
      !i && !d && /* @__PURE__ */ o.jsx(Kt, { loading: !0, itemCount: 0, placeholderCount: 3, grid: !0 }),
      i && !i.available && /* @__PURE__ */ o.jsx("div", { className: Ke.empty, children: _(
        "Приёмник радионяни недоступен. Проверьте журнал HA и доступность TCP-порта 8124."
      ) }),
      (i == null ? void 0 : i.available) && z.length === 0 && /* @__PURE__ */ o.jsx("div", { className: Ke.empty, children: _(
        "Нет колонок с поддержкой радионяни. Установите совместимую прошивку и подключите колонку к интеграции ESPHome."
      ) }),
      /* @__PURE__ */ o.jsx("div", { className: Ke.grid, children: z.map((R) => {
        const K = i == null ? void 0 : i.sessions.find(
          (C) => C.source_device_id === R.id
        ), U = i == null ? void 0 : i.devices.find(
          (C) => C.id === (K == null ? void 0 : K.listener_device_id)
        );
        return /* @__PURE__ */ o.jsxs(
          "button",
          {
            className: `${Ke.device} ${R.transmitting ? Ke.deviceLive : ""}`,
            onClick: () => G(R),
            children: [
              /* @__PURE__ */ o.jsx(lg, { size: 28 }),
              /* @__PURE__ */ o.jsx("strong", { children: R.name }),
              /* @__PURE__ */ o.jsx("span", { children: _(
                R.online ? R.transmitting ? "Источник включён" : R.source_state === "on" ? "Переподключение…" : "Готова к прослушиванию" : "Нет подключения"
              ) }),
              U && /* @__PURE__ */ o.jsxs("small", { children: [
                _("Воспроизведение:"),
                " ",
                U.name
              ] })
            ]
          },
          R.id
        );
      }) }),
      /* @__PURE__ */ o.jsxs(
        Yt,
        {
          open: p !== null,
          onClose: ye,
          title: ($ == null ? void 0 : $.name) ?? "Радионяня",
          dialogLabel: ($ == null ? void 0 : $.name) ?? _("Радионяня"),
          footer: F,
          children: [
            d && /* @__PURE__ */ o.jsx("p", { role: "alert", className: Ke.error, children: d }),
            te
          ]
        }
      )
    ] })
  ] });
}
const Dk = ({ command: r, open: a, onClose: i, onToggleStatus: c, onEdit: d, onDelete: f }) => {
  if (!r) return null;
  const p = r.status === "on";
  return /* @__PURE__ */ o.jsx(Zl, { open: a, title: r.title, uuid: r.uuid, onClose: i, actions: [
    { label: p ? "Выключить" : "Включить", onClick: () => c(r, p ? "off" : "on") },
    { label: "Изменить", variant: "secondary", onClick: () => d(r) },
    { label: "Удалить", variant: "remove", onClick: () => f(r) }
  ] });
}, Ok = (r) => {
  const a = /^(\d{1,2}):(\d{2})$/.exec(r.trim());
  return !a || Number(a[1]) > 23 || Number(a[2]) > 59 ? null : `${a[1].padStart(2, "0")}:${a[2]}`;
}, Il = [
  { key: "mon", label: "Пн" },
  { key: "tue", label: "Вт" },
  { key: "wed", label: "Ср" },
  { key: "thu", label: "Чт" },
  { key: "fri", label: "Пт" },
  { key: "sat", label: "Сб" },
  { key: "sun", label: "Вс" }
], zk = [
  { value: "once", label: "Однократно" },
  { value: "daily", label: "Ежедневно" },
  { value: "weekdays", label: "По будням" },
  { value: "weekends", label: "По выходным" },
  { value: "custom", label: "Выбранные дни" }
], Hk = (r = "once", a = []) => r === "daily" ? _("ежедневно") : r === "weekdays" ? _("по будням") : r === "weekends" ? _("по выходным") : r === "custom" ? a.length ? a.map((i) => {
  var c;
  return (c = Il.find((d) => d.key === i)) != null && c.label ? _(Il.find((d) => d.key === i).label) : i;
}).join(", ") : _("кастом") : _("однократно"), Fk = () => {
  const r = nt(), { feedback: a, alarmTimeWidgets: i, refreshAlarmTimes: c, alarms: d, createAlarm: f, deleteAlarm: p, devices: m, loading: g, updateAlarm: w } = Sp(), [y, x] = v.useState(!1), [k, j] = v.useState(null), [b, E] = v.useState(null), [N, P] = v.useState(""), [H, $] = v.useState("08:00"), [z, W] = v.useState(0.3), [I, J] = v.useState("once"), [B, G] = v.useState([]), ye = v.useMemo(() => Array.from(new Set([...i.flatMap((F) => F.time || []), ...d.map((F) => F.time)].map(Ok).filter((F) => F !== null))), [i, d]), de = v.useMemo(() => new Map(m.map((F) => [F.id, F.name])), [m]), ge = d.find((F) => F.uuid === k) || null, he = async () => {
    if (!N || !H) return;
    const F = d.find((R) => R.uuid === b);
    if (F) {
      if (!await w(F, { device_id: N, time: H, volume_start: z, repeat_type: I, repeat_days: B })) return;
    } else if (!await f(N, H, z, I, B)) return;
    E(null), x(!1);
  }, _e = () => {
    E(null), x(!0), c();
  }, te = (F) => {
    $(F.time), P(F.device_id), W(F.volume_start ?? 0.3), J(F.repeat_type ?? "once"), G(F.repeat_days ?? []), c(), E(F.uuid), j(null), x(!0);
  }, Ee = (F) => G((R) => R.includes(F) ? R.filter((K) => K !== F) : [...R, F]);
  return /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
    /* @__PURE__ */ o.jsx(mt, { title: _("Будильники") }),
    /* @__PURE__ */ o.jsxs("div", { className: X.page, children: [
      !y && /* @__PURE__ */ o.jsx(Ge, { ...a }),
      /* @__PURE__ */ o.jsx(ht, {}),
      /* @__PURE__ */ o.jsxs("div", { className: X.header, children: [
        /* @__PURE__ */ o.jsx("div", { className: X.heading, children: r ? /* @__PURE__ */ o.jsx(o.Fragment, {}) : /* @__PURE__ */ o.jsx("h1", { className: X.title, children: _("Будильники") }) }),
        /* @__PURE__ */ o.jsx("div", { className: X.actions, children: r ? /* @__PURE__ */ o.jsx(ur, { startVisible: !0, children: /* @__PURE__ */ o.jsx(
          oe,
          {
            variant: "primary",
            onClick: _e,
            children: _("Добавить сценарий")
          }
        ) }) : /* @__PURE__ */ o.jsx(
          oe,
          {
            variant: "primary",
            onClick: _e,
            children: _("🞢 Создать")
          }
        ) })
      ] }),
      /* @__PURE__ */ o.jsx(Kt, { loading: g, itemCount: d.length, placeholderCount: 4, children: /* @__PURE__ */ o.jsx("div", { className: ce.grid, children: d.length ? d.map((F) => /* @__PURE__ */ o.jsx("button", { className: `${ce.card} ${ce.cardButton}`, type: "button", onClick: () => j(F.uuid), children: /* @__PURE__ */ o.jsxs("div", { className: ce.cardHeader, children: [
        /* @__PURE__ */ o.jsxs("div", { className: ce.cardLead, children: [
          /* @__PURE__ */ o.jsx(Ql, { className: ce.cardIcon, size: 26 }),
          /* @__PURE__ */ o.jsxs("div", { children: [
            /* @__PURE__ */ o.jsx("h2", { className: ce.cardTitle, children: F.time }),
            /* @__PURE__ */ o.jsxs("div", { className: ce.meta, children: [
              Hk(F.repeat_type, F.repeat_days),
              " • ",
              de.get(F.device_id) || F.device_id
            ] })
          ] })
        ] }),
        /* @__PURE__ */ o.jsx(
          "div",
          {
            onClick: (R) => R.stopPropagation(),
            onMouseDown: (R) => R.stopPropagation(),
            children: /* @__PURE__ */ o.jsx(ir, { label: _(""), checked: F.status !== "off", onClick: (R) => R.stopPropagation(), onChange: (R) => w(F, { status: R.currentTarget.checked ? "on" : "off" }) })
          }
        )
      ] }) }, F.uuid)) : !g && !a.error && /* @__PURE__ */ o.jsx("div", { className: ce.empty, children: _("Нет будильников.") }) }) }),
      /* @__PURE__ */ o.jsx(Yt, { feedback: a, open: y, onClose: () => {
        x(!1), E(null);
      }, title: b ? "Редактировать будильник" : "Создать будильник", footer: /* @__PURE__ */ o.jsx("div", { className: ce.footerActions, children: /* @__PURE__ */ o.jsx(oe, { className: ce.saveButton, onClick: he, disabled: !N || !H, children: _("Сохранить") }) }), children: /* @__PURE__ */ o.jsxs("div", { className: ce.form, children: [
        /* @__PURE__ */ o.jsxs("div", { className: ce.alarmTimeFields, role: "group", "aria-label": _("Время будильника"), children: [
          /* @__PURE__ */ o.jsx(
            Or,
            {
              label: _("Часы"),
              value: H.split(":")[0],
              options: Array.from({ length: 24 }, (F, R) => ({ value: String(R).padStart(2, "0"), label: String(R).padStart(2, "0") })),
              onSelect: (F) => $(`${F}:${H.split(":")[1]}`)
            }
          ),
          /* @__PURE__ */ o.jsx(
            Or,
            {
              label: _("Минуты"),
              value: H.split(":")[1],
              options: Array.from({ length: 60 }, (F, R) => ({ value: String(R).padStart(2, "0"), label: String(R).padStart(2, "0") })),
              onSelect: (F) => $(`${H.split(":")[0]}:${F}`)
            }
          )
        ] }),
        /* @__PURE__ */ o.jsxs("div", { className: ce.field, children: [
          /* @__PURE__ */ o.jsx("span", { className: ce.label, children: _("Ранее заданное время") }),
          /* @__PURE__ */ o.jsx("div", { className: ce.quickTabs, children: ye.length ? ye.map((F) => /* @__PURE__ */ o.jsx("button", { type: "button", className: `${ce.quickTab} ${H === F ? ce.activeQuickTab : ""}`, onClick: () => $(F), children: F }, F)) : /* @__PURE__ */ o.jsx("span", { className: ce.meta, children: _("Нет быстрых значений.") }) })
        ] }),
        /* @__PURE__ */ o.jsx(
          Or,
          {
            label: _("Повторы"),
            value: I,
            options: zk.map((F) => ({ ...F, label: _(F.label) })),
            onSelect: (F) => J(F)
          }
        ),
        I === "custom" && /* @__PURE__ */ o.jsx("div", { className: ce.quickTabs, role: "group", "aria-label": _("Дни повтора"), children: Il.map((F) => /* @__PURE__ */ o.jsx(
          "button",
          {
            type: "button",
            "aria-pressed": B.includes(F.key),
            className: `${ce.quickTab} ${B.includes(F.key) ? ce.activeQuickTab : ""}`,
            onClick: () => Ee(F.key),
            children: _(F.label)
          },
          F.key
        )) }),
        /* @__PURE__ */ o.jsx(
          Or,
          {
            label: _("Устройство воспроизведения"),
            placeholder: _("Выберите устройство"),
            value: N,
            options: m.map((F) => ({ value: F.id, label: F.name })),
            onSelect: P
          }
        ),
        /* @__PURE__ */ o.jsxs("label", { className: ce.field, children: [
          /* @__PURE__ */ o.jsxs("span", { className: `${ce.label} ${ce.volumeLabel}`, children: [
            _("Стартовая громкость"),
            " ",
            /* @__PURE__ */ o.jsxs("span", { className: ce.volumeValue, children: [
              Math.round(z * 100),
              "%"
            ] })
          ] }),
          /* @__PURE__ */ o.jsx("input", { className: ce.input, type: "range", min: "0", max: "1", step: "0.05", value: z, onChange: (F) => W(Number(F.target.value)) })
        ] })
      ] }) }),
      /* @__PURE__ */ o.jsx(
        Dk,
        {
          open: !!ge,
          onClose: () => j(null),
          command: ge,
          onEdit: (F) => te(F),
          onToggleStatus: (F, R) => w(F, { status: R }),
          onDelete: (F) => {
            p(F), j(null);
          }
        }
      )
    ] })
  ] });
}, Wk = () => {
  const r = Yl(), a = Gl(), i = Hr(), { pathname: c } = St(), d = i ? "/scripts" : "/commands/main";
  return (c === "/commands" || c.startsWith("/commands/")) && i !== !1 ? i === null ? /* @__PURE__ */ o.jsx(mi, {}) : /* @__PURE__ */ o.jsx(Ln, { to: "/scripts", replace: !0 }) : /* @__PURE__ */ o.jsx(fp, { resetKey: c, children: /* @__PURE__ */ o.jsxs($v, { children: [
    /* @__PURE__ */ o.jsx(Ye, { path: "/commands/whisper", element: a ? /* @__PURE__ */ o.jsx(P1, {}) : /* @__PURE__ */ o.jsx(Ln, { to: d, replace: !0 }) }),
    /* @__PURE__ */ o.jsx(Ye, { path: "/logs", element: r && a ? /* @__PURE__ */ o.jsx(H1, {}) : /* @__PURE__ */ o.jsx(Ln, { to: d, replace: !0 }) }),
    /* @__PURE__ */ o.jsx(Ye, { path: "/downloads", element: a ? /* @__PURE__ */ o.jsx(sw, {}) : /* @__PURE__ */ o.jsx(Ln, { to: d, replace: !0 }) }),
    /* @__PURE__ */ o.jsx(
      Ye,
      {
        path: "/",
        element: /* @__PURE__ */ o.jsx(
          Ln,
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
        element: /* @__PURE__ */ o.jsx(sx, {})
      }
    ),
    /* @__PURE__ */ o.jsx(
      Ye,
      {
        path: "/commands",
        element: /* @__PURE__ */ o.jsx(
          Ln,
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
        element: /* @__PURE__ */ o.jsx(Px, {})
      }
    ),
    /* @__PURE__ */ o.jsx(
      Ye,
      {
        path: "/commands/sub",
        element: /* @__PURE__ */ o.jsx(Mx, {})
      }
    ),
    /* @__PURE__ */ o.jsx(
      Ye,
      {
        path: "/commands/direct",
        element: /* @__PURE__ */ o.jsx(
          Ln,
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
        element: /* @__PURE__ */ o.jsx(Dx, {})
      }
    ),
    /* @__PURE__ */ o.jsx(
      Ye,
      {
        path: "/commands/direct/template",
        element: /* @__PURE__ */ o.jsx(Bx, {})
      }
    ),
    /* @__PURE__ */ o.jsx(
      Ye,
      {
        path: "/commands/settings",
        element: /* @__PURE__ */ o.jsx(Qx, {})
      }
    ),
    /* @__PURE__ */ o.jsx(Ye, { path: "/monitor", element: /* @__PURE__ */ o.jsx(Lk, {}) }),
    /* @__PURE__ */ o.jsx(Ye, { path: "/calls", element: /* @__PURE__ */ o.jsx(xk, {}) }),
    /* @__PURE__ */ o.jsx(
      Ye,
      {
        path: "/timer",
        element: /* @__PURE__ */ o.jsx(Gw, {})
      }
    ),
    /* @__PURE__ */ o.jsx(
      Ye,
      {
        path: "/alarm",
        element: /* @__PURE__ */ o.jsx(Fk, {})
      }
    ),
    /* @__PURE__ */ o.jsx(
      Ye,
      {
        path: "/settings",
        element: /* @__PURE__ */ o.jsx(xw, {})
      }
    ),
    /* @__PURE__ */ o.jsx(
      Ye,
      {
        path: "*",
        element: /* @__PURE__ */ o.jsx(
          Ln,
          {
            to: d,
            replace: !0
          }
        )
      }
    )
  ] }) });
}, Np = "ha-dialog-ui-theme", jl = (r) => r === "light" ? "light" : "dark", Bk = (r) => {
  document.documentElement.dataset.theme = r, document.documentElement.style.colorScheme = r, localStorage.setItem(Np, r);
}, Uk = () => {
  const r = Qt(), a = ap(), i = ct(), [c, d] = v.useState(!1), [f, p] = v.useState(null), [m, g] = v.useState(() => jl(localStorage.getItem(Np)));
  return v.useEffect(() => {
    Bk(m);
  }, [m]), v.useEffect(() => {
    let w = !0, y = !1, x = !1, k = !1;
    r.run(async () => {
      const N = await i.getSettings();
      w && (y || g(jl(N.theme)), k || d(!!N.api_commands_enabled), x || p(!!N.active_remout));
    }, { retryable: !0 });
    const j = (N) => {
      y = !0, g(jl(N.detail));
    }, b = (N) => {
      x = !0, p(N.detail);
    }, E = (N) => {
      k = !0, d(!!N.detail);
    };
    return window.addEventListener(bl, E), window.addEventListener(li, b), window.addEventListener("ha-dialog-ui-theme-change", j), () => {
      w = !1, window.removeEventListener(bl, E), window.removeEventListener(li, b), window.removeEventListener("ha-dialog-ui-theme-change", j);
    };
  }, [i, r.run]), /* @__PURE__ */ o.jsx(lp.Provider, { value: c, children: /* @__PURE__ */ o.jsx(cp.Provider, { value: f, children: /* @__PURE__ */ o.jsxs("div", { className: "appShell", "data-theme": m, lang: a, children: [
    /* @__PURE__ */ o.jsx(Ge, { ...r }),
    f === null ? !r.error && /* @__PURE__ */ o.jsx(mi, {}) : /* @__PURE__ */ o.jsx(Wk, {})
  ] }) }) });
};
class Vk {
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
      await Promise.all(x.map(async (k) => {
        var E;
        const j = String((k == null ? void 0 : k.media_content_id) || ""), b = String((k == null ? void 0 : k.title) || j);
        if (j) {
          if (k != null && k.can_expand) {
            try {
              await g(j);
            } catch (N) {
              f.push(N);
            }
            return;
          }
          if (a.test(b) || a.test(j) || (k == null ? void 0 : k.media_content_type) === "music" || (E = k == null ? void 0 : k.media_content_type) != null && E.startsWith("audio/")) {
            const N = "media-source://media_source/local/", P = j.startsWith(N) ? j.slice(N.length) : j;
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
function Tp(r) {
  var a;
  return (a = r == null ? void 0 : r.connection) != null && a.sendMessagePromise ? { connection: r.connection, user: r.user, states: r.states ?? {} } : r != null && r.callWS ? { connection: { sendMessagePromise: r.callWS.bind(r) }, user: r.user, states: r.states ?? {} } : {
    connection: { sendMessagePromise: async () => {
      throw new Error("Home Assistant websocket API is not available");
    } },
    states: {}
  };
}
async function qk() {
  return Tp(window.hass);
}
function Qk({
  children: r,
  hass: a
}) {
  const [i, c] = v.useState(null), [d, f] = v.useState(0), p = v.useRef(null), [m, g] = v.useState(!1), [w, y] = v.useState(!1);
  return v.useEffect(() => {
    let x = !0;
    c(null);
    async function k() {
      const j = a ? Tp(a) : await qk();
      if (!x) return;
      p.current ? p.current.setHass(j) : p.current = new Vk(j);
      const b = j.user ?? await j.connection.sendMessagePromise({ type: "auth/current_user" });
      x && (g((b == null ? void 0 : b.is_admin) === !0), y(!0));
    }
    return k().catch((j) => {
      x && c(Tt(j));
    }), () => {
      x = !1;
    };
  }, [a, d]), i ? /* @__PURE__ */ o.jsx("div", { className: "appShell panelRecovery", "data-theme": localStorage.getItem("ha-dialog-ui-theme") || "dark", children: /* @__PURE__ */ o.jsx(Ge, { error: i, retry: () => f((x) => x + 1) }) }) : !w || !p.current ? /* @__PURE__ */ o.jsx(mi, { label: _("Подключение к Home Assistant..."), fullscreen: !0 }) : /* @__PURE__ */ o.jsx(pp.Provider, { value: p.current, children: /* @__PURE__ */ o.jsx(up.Provider, { value: m, children: r }) });
}
function Kk({ hass: r }) {
  return /* @__PURE__ */ o.jsx(ry, { children: /* @__PURE__ */ o.jsx(Qk, { hass: r, children: /* @__PURE__ */ o.jsx(Uk, {}) }) });
}
const Tf = "ha-dialog-ui-panel", bf = "ha-dialog-ui-style";
class Yk extends HTMLElement {
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
    if (i.getElementById(bf)) return;
    const c = document.createElement("style");
    c.id = bf, c.setAttribute("data-dialog-ui", "true"), c.textContent = "@charset \"UTF-8\";:host{display:block;height:100%;max-height:var(--ha-dialog-ui-available-height, 100dvh);min-height:0;overflow-y:auto;overflow-x:hidden;isolation:isolate}*,*:before,*:after{box-sizing:border-box}:root,[data-theme=dark]{color-scheme:dark;--danger: #f28b82;--switch-thumb: #c8ced8;--shadow-floating: rgba(0, 0, 0, .45);--app-background: #111111;--surface: #1c1c1c;--surface-elevated: #282828;--surface-hover: #333333;--border: #3b3b3b;--border-hover: #666666;--text: #e1e1e1;--text-secondary: #9b9b9b;--text-muted: #9ca3af;--primary: var(--primary-color, #03a9f4);--primary-strong: color-mix(in srgb, var(--primary) 85%, black);--loader-track: rgba(255, 255, 255, .16);--control-background: rgba(255, 255, 255, .04);--control-background-hover: rgba(255, 255, 255, .06);--shadow: rgba(0, 0, 0, .3)}[data-theme=light]{color-scheme:light;--danger: #b3261e;--switch-thumb: #64748b;--shadow-floating: rgba(32, 33, 36, .18);--app-background: #f4f5f7;--surface: #ffffff;--surface-elevated: #f7f8fa;--surface-hover: #eef0f3;--border: #dfe3e8;--border-hover: #bdbdbd;--text: #212121;--text-secondary: #5f6368;--text-muted: #64748b;--primary: var(--primary-color, #03a9f4);--primary-strong: color-mix(in srgb, var(--primary) 85%, black);--loader-track: rgba(3, 169, 244, .16);--control-background: #ffffff;--control-background-hover: #f1f3f5;--shadow: rgba(32, 33, 36, .08)}html{color-scheme:dark}body{margin:0;font-family:Inter,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,sans-serif;color:var(--text);background:var(--app-background);min-height:100vh;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;text-rendering:optimizeLegibility}#root{min-height:100vh}.appShell{--page-padding: 28px;--mobile-fixed-actions-height: 86px;font-family:Roboto,system-ui,-apple-system,Segoe UI,sans-serif;-webkit-font-smoothing:antialiased;min-height:100vh;color:var(--text);background:var(--app-background)}button,input,textarea,select{font:inherit}button{color:inherit}a{color:inherit;text-decoration:none}::selection{background:var(--accent-background)}:root,[data-theme]{--on-primary: #ffffff;--accent-background: color-mix(in srgb, var(--primary) 16%, transparent);--accent-border: color-mix(in srgb, var(--primary) 40%, transparent);--focus-ring: color-mix(in srgb, var(--primary) 18%, transparent);--danger-ring: color-mix(in srgb, var(--danger) 18%, transparent);--danger-background: color-mix(in srgb, var(--danger) 6%, var(--surface));--modal-backdrop: rgba(0, 0, 0, .72);--sheet-backdrop: rgba(0, 0, 0, .45)}.panelRecovery{padding:28px;min-height:var(--ha-dialog-ui-available-height, 100dvh)}.panelRenderRecovery{display:flex;flex-direction:column;height:var(--ha-dialog-ui-available-height, 100dvh);min-height:0;box-sizing:border-box}.panelRecoveryNavigation{flex-shrink:0;min-width:0}.panelRecoveryNavigation>nav{display:inline-flex;flex-wrap:wrap;gap:8px}.panelRecoveryNavigation>nav a{padding:10px 14px;border:1px solid var(--border);border-radius:12px}.panelRecoveryNavigation>nav a:hover,.panelRecoveryNavigation>nav a:focus-visible{background:var(--surface-hover)}.panelRecoveryContent{flex:1;min-height:0;display:flex;align-items:center;justify-content:center;padding:24px 0}.panelRecoveryMessage{width:100%;max-width:36rem;display:flex;flex-direction:column;align-items:center;gap:24px;text-align:center}.panelRecoveryMessage p{margin:0;font-size:clamp(16px,2vw,20px);line-height:1.6;overflow-wrap:anywhere}.panelRecoveryMessage>button{align-self:center;max-width:100%;min-height:46px}@media(max-width:768px){.panelRenderRecovery{padding:16px}.panelRecoveryContent{padding:20px 8px}}._button_180pj_1{position:relative;display:inline-flex;align-items:center;justify-content:center;gap:8px;height:46px;padding:0 18px;border:1px solid transparent;border-radius:14px;cursor:pointer;-webkit-user-select:none;user-select:none;font-size:14px;font-weight:600;white-space:nowrap;transition:background .18s ease,color .18s ease,border-color .18s ease,box-shadow .18s ease,transform .18s ease,opacity .18s ease}._button_180pj_1:hover{transform:translateY(-1px)}._button_180pj_1:active{transform:translateY(0) scale(.98)}._button_180pj_1:focus-visible{outline:none;box-shadow:0 0 0 4px var(--focus-ring)}._full_180pj_32{width:100%}._primary_180pj_37{color:var(--on-primary);background:var(--primary);border-color:var(--accent-border);box-shadow:none}._primary_180pj_37:hover{background:var(--primary-strong)}._secondary_180pj_49{color:var(--text);background:var(--control-background);border-color:var(--border)}._secondary_180pj_49:hover{background:var(--control-background-hover);border-color:var(--border-hover)}._ghost_180pj_61{color:var(--text-secondary);background:transparent}._ghost_180pj_61:hover{background:var(--control-background-hover);color:var(--text)}._button_180pj_1:disabled{opacity:.45;cursor:not-allowed;transform:none;box-shadow:none}._button_180pj_1:disabled:hover{transform:none}._remove_180pj_83{align-self:flex-end;justify-self:end;flex:0 0 auto;width:fit-content;color:var(--text);background:var(--control-background-hover);border-color:transparent}._remove_180pj_83:hover{background:var(--surface-hover)}._remove_180pj_83._full_180pj_32{width:100%}._tabs_1vwxg_1{display:inline-flex;flex-wrap:wrap;max-width:100%;align-items:center;gap:6px;padding:6px;background:var(--surface);-webkit-backdrop-filter:blur(18px);backdrop-filter:blur(18px);border:1px solid var(--border);border-radius:18px;box-shadow:0 2px 8px var(--shadow);z-index:9000}._dropdown_1vwxg_16{position:relative}._tab_1vwxg_1{position:relative;display:flex;align-items:center;justify-content:center;height:44px;min-width:118px;padding:0 20px;border-radius:12px;color:var(--text-secondary);text-decoration:none;border:0;background:transparent;cursor:pointer;font-family:inherit;font-size:14px;font-weight:500;transition:background .2s,color .2s,transform .2s}._tab_1vwxg_1:hover{color:var(--text);background:var(--control-background)}._tab_1vwxg_1:active{transform:scale(.98)}._active_1vwxg_49{color:var(--text);background:var(--primary);box-shadow:none}._tab_1vwxg_1>span{margin-left:5px}._menu_1vwxg_59{position:absolute;top:calc(100% + 12px);left:0;width:250px;padding:8px;display:flex;flex-direction:column;gap:4px;background:var(--surface-elevated);-webkit-backdrop-filter:blur(22px);backdrop-filter:blur(22px);border:1px solid var(--border);border-radius:16px;box-shadow:0 18px 40px var(--shadow-floating);z-index:5000}._chevron_1vwxg_76{margin-left:8px}._tab_1vwxg_1[aria-expanded=true] ._chevron_1vwxg_76{transform:rotate(180deg)}._tab_1vwxg_1:focus-visible,._menuItem_1vwxg_84:focus-visible{outline:2px solid var(--primary);outline-offset:2px}._menuItem_1vwxg_84{display:flex;align-items:center;height:42px;padding:0 14px;border-radius:10px;color:var(--text-secondary);text-decoration:none;transition:background .15s,color .15s,transform .15s}._menuItem_1vwxg_84:hover{background:var(--control-background-hover);color:var(--text);transform:translate(3px)}._menuItem_1vwxg_84._active_1vwxg_49{color:var(--text);background:var(--accent-background);border:1px solid var(--accent-border)}._tabs_1vwxg_1{flex-wrap:wrap;max-width:100%}._overlay_tb5vv_1{position:fixed;top:0;right:0;bottom:0;left:0;display:flex;align-items:flex-end;background:var(--sheet-backdrop);z-index:3000;animation:_fade_tb5vv_1 .15s ease}._sheet_tb5vv_11{width:100%;background:var(--surface-elevated);border-top:1px solid var(--border);border-radius:20px 20px 0 0;padding:16px;box-shadow:0 -16px 48px var(--shadow-floating);animation:_sheet_tb5vv_11 .18s ease}._handle_tb5vv_21{width:42px;height:4px;margin:0 auto 18px;border-radius:999px;background:var(--surface-elevated)}@keyframes _sheet_tb5vv_11{0%{opacity:0;transform:translateY(18px)}to{opacity:1;transform:translateY(0)}}@keyframes _fade_tb5vv_1{0%{opacity:0}to{opacity:1}}._overlay_avpnk_1>section{box-sizing:border-box;max-height:calc(100dvh - 20px);display:flex;flex-direction:column;padding:16px 16px calc(20px + env(safe-area-inset-bottom));border-radius:24px 24px 0 0}._overlay_avpnk_1>section>div:last-child{overflow-y:auto;overscroll-behavior:contain;min-height:0}._heading_avpnk_16{display:flex;align-items:center;justify-content:space-between;gap:16px;margin-bottom:16px;padding-left:8px}._heading_avpnk_16 h2{margin:0;color:var(--text);font-size:22px;font-weight:650}._close_avpnk_32{width:40px;height:40px;flex-shrink:0;display:grid;place-items:center;border:1px solid var(--border);border-radius:12px;color:var(--text);background:var(--control-background);cursor:pointer}._nav_avpnk_45{display:flex;flex-direction:column;gap:4px}._item_avpnk_51{display:flex;align-items:center;gap:12px;min-height:50px;box-sizing:border-box;padding:8px 12px;border:1px solid transparent;border-radius:14px;text-decoration:none;color:var(--text-secondary);transition:background .15s,color .15s}._item_avpnk_51:hover{background:var(--control-background-hover);color:var(--text)}._icon_avpnk_70{display:grid;place-items:center;width:32px;height:32px;flex-shrink:0}._label_avpnk_78{flex:1;min-width:0;font-size:15px;line-height:1.35;font-weight:500}._arrow_avpnk_86{opacity:.5;flex-shrink:0}._active_avpnk_91{color:var(--text);background:var(--accent-background);border-color:var(--accent-border)}._active_avpnk_91 ._icon_avpnk_70{color:var(--primary)}._item_avpnk_51:focus-visible,._close_avpnk_32:focus-visible{outline:2px solid var(--primary);outline-offset:-2px}@media(prefers-reduced-motion:reduce){._item_avpnk_51{transition:none}}._overlay_avpnk_1>section>div:first-child>div{background:var(--text-muted);opacity:.45}._heading_avpnk_16{position:sticky;top:0;z-index:1;padding-bottom:12px;margin-bottom:4px;background:var(--surface-elevated)}._item_avpnk_51{scroll-margin-block:72px 12px}._search_1h7xe_1{box-sizing:border-box;width:100%;grid-column:1/-1;display:flex;align-items:center;gap:12px;min-width:0;height:48px;padding:0 16px;border:1px solid var(--border);border-radius:12px;background:var(--control-background);color:var(--text-muted)}._search_1h7xe_1:focus-within{border-color:var(--primary);box-shadow:0 0 0 2px var(--focus-ring)}._search_1h7xe_1>svg{flex-shrink:0}._search_1h7xe_1 input{flex:1;width:100%;min-width:0;height:100%;border:0;outline:0;background:transparent;color:var(--text);font:inherit;font-size:15px}._search_1h7xe_1 input::placeholder{color:var(--text-muted)}._header_1pxju_1{position:sticky;top:0;background:var(--surface);border-bottom:1px solid var(--border);z-index:1000}._bar_1pxju_9{display:flex;align-items:center;justify-content:space-between;gap:10px;min-height:64px;padding:0 16px}._tools_1pxju_18{display:flex;flex-direction:column;gap:8px;padding:0 16px 12px}._tools_1pxju_18>div{box-sizing:border-box;width:100%;margin:0}._title_1pxju_31{margin:0;font-size:17px;font-weight:600;color:var(--text)}._menuButton_1pxju_38{width:40px;height:40px;display:flex;align-items:center;justify-content:center;border:1px solid var(--border);border-radius:12px;background:var(--control-background);color:var(--text);cursor:pointer;transition:background .18s ease,border-color .18s ease,transform .18s ease}._menuButton_1pxju_38:hover{background:var(--control-background-hover);border-color:var(--border)}._menuButton_1pxju_38:active{transform:scale(.96)}@media(min-width:769px){._header_1pxju_1{display:none}}._title_1pxju_31{min-width:0;text-align:center;overflow-wrap:anywhere}._menuButton_1pxju_38{flex-shrink:0}._active_1pxju_76{background:var(--accent-background);border-color:var(--accent-border)}._menuButton_1pxju_38:focus-visible{outline:2px solid var(--primary);outline-offset:2px}._tools_1pxju_18>[role=group]{padding:3px;gap:3px}._tools_1pxju_18>[role=group]>button{flex:1;min-height:36px;padding:8px 10px}._tools_1pxju_18>[role=group]>button:last-child{flex:1.8}._container_x92qn_1{position:relative;min-width:0;display:flex;flex-direction:column;gap:12px}._rows_x92qn_9{display:flex;flex-direction:column;gap:12px;min-width:0}._rows_x92qn_9:empty{display:none}._hidden_x92qn_20{visibility:hidden}._overlay_x92qn_24{position:absolute;top:0;right:0;bottom:0;left:0;display:flex;flex-direction:column;gap:12px}._card_x92qn_32{box-sizing:border-box;min-height:88px;padding:18px 20px;border:1px solid var(--border);border-radius:18px;background:var(--surface);display:flex;flex-direction:column;justify-content:center;gap:10px;overflow:hidden}._overlay_x92qn_24 ._card_x92qn_32{flex:1;min-height:0}._title_x92qn_51,._subtitle_x92qn_51{display:block;border-radius:4px;background:var(--control-background-hover);animation:_pulse_x92qn_1 1.4s ease-in-out infinite}._title_x92qn_51{width:45%;max-width:320px;height:18px}._subtitle_x92qn_51{width:25%;max-width:180px;height:13px}._srOnly_x92qn_70{position:absolute;width:1px;height:1px;overflow:hidden;clip-path:inset(50%);white-space:nowrap}@keyframes _pulse_x92qn_1{50%{opacity:.45}}@media(prefers-reduced-motion:reduce){._title_x92qn_51,._subtitle_x92qn_51{animation:none}}._grid_x92qn_89{display:grid;grid-template-columns:repeat(auto-fill,minmax(min(100%,250px),1fr));gap:16px}._grid_x92qn_89 ._card_x92qn_32{min-height:160px}._loader_1tvqb_1{width:100%;min-width:0;box-sizing:border-box}._fullscreen_1tvqb_7{min-height:100vh;padding:28px}@media(max-width:768px){._fullscreen_1tvqb_7{padding:16px}}._error_fi1f1_1{padding:16px;margin:12px 0;border:1px solid var(--danger);border-radius:14px;background:var(--danger-background);color:var(--text);overflow-wrap:anywhere}._error_fi1f1_1 p{margin:0;line-height:1.5}._error_fi1f1_1 button{margin-top:12px}._toast_1g76h_1{position:fixed;z-index:10001;top:max(16px,env(safe-area-inset-top));left:50%;transform:translate(-50%);width:max-content;max-width:min(560px,100% - 32px);box-sizing:border-box;display:flex;align-items:center;gap:12px;padding:16px;border:1px solid var(--primary);border-radius:16px;background:var(--surface-elevated);color:var(--text);box-shadow:0 8px 32px var(--shadow-floating);line-height:1.5;overflow-wrap:anywhere}._toast_1g76h_1>svg{flex-shrink:0;color:var(--primary)}._toast_1g76h_1 button{display:flex;align-items:center;justify-content:center;flex-shrink:0;min-width:36px;min-height:36px;border:0;border-radius:8px;background:transparent;color:var(--text-secondary);cursor:pointer}._toast_1g76h_1 button:hover{background:var(--surface-hover)}._warning_1g76h_43{border-color:var(--danger)}._warning_1g76h_43>svg{color:var(--danger)}._labelRow_1w41x_1{display:flex;align-items:center;gap:6px;min-width:0}._labelRow_1w41x_1>label{min-width:0}._helpButton_1w41x_12{display:inline-flex;flex:0 0 auto;align-items:center;justify-content:center;width:24px;height:24px;padding:0;border:0;border-radius:50%;background:transparent;color:var(--text-secondary);cursor:pointer}._helpButton_1w41x_12:hover{color:var(--primary);background:var(--accent-background)}._helpButton_1w41x_12:focus-visible{outline:2px solid var(--primary);outline-offset:2px}._tooltip_1w41x_37{position:fixed;z-index:10030;width:min(340px,100vw - 24px);max-height:calc(100vh - 24px);overflow-y:auto;padding:14px 16px;border-radius:12px;border:1px solid var(--border);background:var(--surface-elevated);color:var(--text);box-shadow:0 8px 24px var(--shadow-floating);font-size:13px;font-weight:400;line-height:1.6;white-space:pre-line;overflow-wrap:anywhere}._helpOverlay_1w41x_56{z-index:10030}._sheetContent_1w41x_60{display:grid;gap:20px;padding-bottom:max(8px,env(safe-area-inset-bottom));color:var(--text)}._sheetContent_1w41x_60 h3{margin:0;font-size:18px}._sheetContent_1w41x_60 p{margin:0;max-height:60dvh;overflow-y:auto;font-size:14px;line-height:1.6;white-space:pre-line;overflow-wrap:anywhere}@media(pointer:coarse){._helpButton_1w41x_12{width:32px;height:32px}}._field_1vuim_1{display:flex;flex-direction:column;gap:10px;width:100%;min-width:0;box-sizing:border-box}._label_1vuim_10{padding-left:2px;color:var(--text-secondary);font-size:13px;font-weight:600;letter-spacing:.02em}._inputWrapper_1vuim_18{position:relative;width:100%;min-width:0;box-sizing:border-box}._input_1vuim_18{width:100%;min-width:0;box-sizing:border-box;height:50px;padding:0 16px;border-radius:14px;border:1px solid var(--border);background:var(--control-background);color:var(--text);font-size:15px;font-weight:500;transition:border-color .18s ease,background .18s ease,box-shadow .18s ease,transform .18s ease}._passwordInput_1vuim_40{padding-right:52px}._input_1vuim_18::placeholder{color:var(--text-muted)}._input_1vuim_18:hover{background:var(--control-background-hover);border-color:var(--border-hover)}._input_1vuim_18:focus{outline:none;background:var(--control-background-hover);border-color:var(--primary);box-shadow:0 0 0 4px var(--focus-ring);transform:translateY(-1px)}._input_1vuim_18:disabled{opacity:.6;cursor:not-allowed}._passwordToggle_1vuim_66{position:absolute;right:14px;top:50%;width:28px;height:28px;padding:0;display:flex;align-items:center;justify-content:center;transform:translateY(-50%);border:none;background:transparent;color:var(--text-secondary);cursor:pointer;opacity:.7;transition:opacity .18s ease,transform .18s ease}._passwordToggle_1vuim_66:hover{opacity:1;transform:translateY(-50%) scale(1.05)}._passwordToggle_1vuim_66:disabled{opacity:.4;cursor:not-allowed}._error_1vuim_95,._error_1vuim_95:hover{border-color:var(--danger)}._error_1vuim_95:focus{border-color:var(--danger);box-shadow:0 0 0 4px var(--danger-ring)}._errorText_1vuim_108{padding-left:2px;color:var(--danger);font-size:12px;font-weight:500}._field_1aipr_1{min-width:0;display:flex;flex-direction:column;gap:8px}._label_1aipr_8{color:var(--text-secondary);font-size:13px;font-weight:500}._textarea_1aipr_14{box-sizing:border-box;width:100%;min-width:0;max-width:100%;min-height:120px;padding:14px;border:1px solid var(--border);border-radius:14px;background:var(--surface);color:var(--text);font-size:14px;font-family:inherit;resize:vertical;outline:none;transition:border-color .15s ease,background .15s ease,box-shadow .15s ease}._textarea_1aipr_14::placeholder{color:var(--text-muted)}._textarea_1aipr_14:hover{border-color:var(--border-hover)}._textarea_1aipr_14:focus{outline:none;border-color:var(--primary);box-shadow:0 0 0 4px var(--focus-ring)}._error_1aipr_46{border-color:var(--danger)}._error_1aipr_46:focus{border-color:var(--danger);box-shadow:0 0 0 4px var(--danger-ring)}._errorText_1aipr_55{color:var(--danger);font-size:12px}._form_15zw4_1{display:flex;flex-direction:column;gap:20px;min-width:0}._actions_15zw4_8{display:flex;flex-wrap:wrap;gap:12px;justify-content:flex-end}@media(max-width:768px){._actions_15zw4_8>button{width:100%;white-space:normal}}:root{--mobile-fixed-actions-height: 86px;--page-padding: 28px}._page_z6937_7{display:flex;flex-direction:column;gap:32px;min-height:100vh;padding:var(--page-padding, 28px);width:100%;max-width:1440px;margin:0 auto;min-width:0}._header_z6937_19{display:flex;flex-direction:column}._headerTop_z6937_24{display:flex;align-items:flex-start;justify-content:space-between;gap:24px}._heading_z6937_31{display:flex;flex-direction:column}._title_z6937_36{margin:0;font-size:40px;font-weight:700;line-height:1.2;letter-spacing:-.04em;color:var(--text)}._description_z6937_45{margin-top:10px;color:var(--text-secondary);font-size:15px;line-height:1.5}._actions_z6937_52{display:flex;align-items:center}._list_z6937_57{display:flex;flex-direction:column;gap:12px;padding-bottom:calc(var(--mobile-fixed-actions-height) + 32px + env(safe-area-inset-bottom))}@media(max-width:768px){._page_z6937_7{padding:12px 16px 0}._headerTop_z6937_24{flex-direction:column}._title_z6937_36{font-size:32px}._list_z6937_57{padding-bottom:calc(var(--mobile-fixed-actions-height) + 32px + env(safe-area-inset-bottom))}}@media(min-width:769px){._header_z6937_19{gap:20px}._list_z6937_57{padding-bottom:0}}._innerTabs_z6937_88{display:inline-flex;align-self:flex-start;gap:4px;max-width:100%;margin-top:18px;margin-bottom:8px;padding:4px;box-sizing:border-box;border:1px solid var(--border);border-radius:14px;background:var(--surface)}._innerTab_z6937_88{min-height:40px;padding:8px 20px;border:1px solid transparent;border-radius:10px;background:transparent;color:var(--text-secondary);font:inherit;font-size:14px;font-weight:600;cursor:pointer;transition:background .15s ease,color .15s ease}._innerTab_z6937_88:hover{background:var(--surface-hover);color:var(--text)}._innerTab_z6937_88._activeInnerTab_z6937_121{background:var(--primary);color:var(--on-primary)}._innerTab_z6937_88:focus-visible{outline:2px solid var(--primary);outline-offset:2px}._settingsActions_z6937_131{display:flex;justify-content:flex-end;padding:0 0 12px}._settingsActions_z6937_131>button{min-width:160px}._listSentinel_z6937_141{height:1px}._settingsSections_z6937_145{display:flex;flex-direction:column;gap:20px;min-width:0}@media(max-width:768px){._settingsSections_z6937_145{margin-bottom:calc(100px + env(safe-area-inset-bottom))}}._settingsSection_z6937_145{min-width:0;padding:24px;border:1px solid var(--border);border-radius:16px;background:var(--surface)}._settingsSection_z6937_145>h2{margin:0 0 24px;color:var(--text);font-size:18px}._settingsMobileActions_z6937_171{position:fixed;left:16px;right:16px;bottom:calc(16px + env(safe-area-inset-bottom));display:flex;justify-content:center;z-index:1100}._settingsMobileActions_z6937_171>button{width:100%;max-width:420px}@media(max-width:768px){._settingsSection_z6937_145{padding:18px}}._connectionFields_z6937_191{display:flex;flex-direction:column;gap:24px}._collectionHeader_z6937_197{display:grid;grid-template-columns:minmax(0,1fr) auto;align-items:center;gap:20px 24px;padding:24px;border:1px solid var(--border);border-radius:18px;background:var(--surface)}._collectionHeader_z6937_197 ._title_z6937_36{font-size:32px;line-height:1.2}._collectionHeader_z6937_197>._actions_z6937_52{justify-self:end}._collectionHeader_z6937_197>._headerTop_z6937_24{grid-column:1/-1}@media(max-width:768px){._collectionHeader_z6937_197{display:contents}._collectionHeader_z6937_197>._actions_z6937_52{display:contents}._collectionHeader_z6937_197>._heading_z6937_31,._collectionHeader_z6937_197>._headerTop_z6937_24{display:none}}._heading_1w2wz_1{margin:0;color:var(--text)}._note_1w2wz_6{margin:0;color:var(--text-secondary);line-height:1.5}._entries_1w2wz_12{display:flex;flex-direction:column;gap:12px;min-width:0}._entry_1w2wz_19{padding:16px;border:1px solid var(--border);border-radius:14px;background:var(--surface);min-width:0}._line_1w2wz_27{display:flex;flex-wrap:wrap;gap:8px 16px;overflow-wrap:anywhere;font-size:14px}._line_1w2wz_27+._line_1w2wz_27{margin-top:10px;color:var(--text-secondary)}._error_1w2wz_40{color:var(--error, #dc2626)}@media(max-width:768px){._heading_1w2wz_1{display:none}}._body_1w2wz_49{margin-top:12px;min-width:0}._body_1w2wz_49 summary{cursor:pointer;color:var(--text-secondary);font-size:14px}._body_1w2wz_49 pre{margin:10px 0 0;padding:12px;border-radius:8px;background:var(--control-background);font-size:12px;line-height:1.5;white-space:pre-wrap;overflow-wrap:anywhere;color:var(--text)}._subtitle_c1esh_1{font-size:13px;color:var(--text-muted)}._card_c1esh_6{display:flex;align-items:center;gap:18px;width:100%;padding:18px 20px;border:1px solid var(--border);border-radius:18px;background:var(--surface);-webkit-backdrop-filter:blur(16px);backdrop-filter:blur(16px);cursor:pointer;text-align:left;transition:transform .18s ease,border-color .18s ease,background .18s ease,box-shadow .18s ease}._card_c1esh_6:hover{transform:translateY(-2px);background:var(--control-background);border-color:var(--border-hover);box-shadow:0 12px 28px var(--shadow)}._card_c1esh_6:active{transform:scale(.985)}._content_c1esh_32{flex:1;display:flex;flex-direction:column;gap:6px;min-width:0}._title_c1esh_40{font-size:16px;font-weight:600;color:var(--text)}._arrow_c1esh_46{color:var(--text-muted);flex-shrink:0;transition:color .2s,transform .2s}._card_c1esh_6:hover ._arrow_c1esh_46{color:var(--primary);transform:translate(4px)}._titleOnly_c1esh_57{min-height:72px}._titleOnly_c1esh_57 ._title_c1esh_40{overflow-wrap:anywhere}._pagination_r0e80_1{display:flex;align-items:center;justify-content:center;gap:12px;flex-wrap:wrap;margin-top:4px}._button_r0e80_10{min-width:36px;height:38px;padding:0 14px;border:1px solid var(--border);border-radius:10px;background:var(--surface);color:var(--text);cursor:pointer;font-size:14px;font-weight:600;transition:background .15s ease,border-color .15s ease,opacity .15s ease}._button_r0e80_10:hover:not(:disabled){background:var(--surface-hover);border-color:var(--border-hover)}._button_r0e80_10:disabled{cursor:not-allowed;opacity:.45}._label_r0e80_34{color:var(--text-secondary);font-size:14px;text-align:center}._pages_r0e80_40{display:flex;align-items:center;justify-content:center;flex-wrap:wrap;gap:4px}._active_r0e80_48{background:var(--primary);border-color:var(--primary)}._button_r0e80_10:focus-visible{outline:2px solid var(--primary);outline-offset:2px}._overlay_1m3e5_1,._modal_1m3e5_1,._header_1m3e5_1,._body_1m3e5_1,._footer_1m3e5_1{box-sizing:border-box;min-width:0}._overlay_1m3e5_1{position:fixed;top:0;right:0;bottom:0;left:0;display:flex;align-items:center;justify-content:center;padding:32px;background:var(--modal-backdrop);-webkit-backdrop-filter:blur(12px);backdrop-filter:blur(12px);z-index:10000}._modal_1m3e5_1{width:100%;display:flex;flex-direction:column;max-height:calc(100vh - 64px);overflow:hidden;border-radius:24px;background:var(--surface);-webkit-backdrop-filter:blur(24px);backdrop-filter:blur(24px);border:1px solid var(--border);box-shadow:0 24px 80px var(--shadow-floating)}._sm_1m3e5_32{max-width:560px}._md_1m3e5_36{max-width:760px}._lg_1m3e5_40{max-width:960px}._xl_1m3e5_44{max-width:1200px}._header_1m3e5_1{gap:12px;display:flex;align-items:center;justify-content:space-between;min-height:76px;padding:0 32px;border-bottom:1px solid var(--border);flex-shrink:0}._title_1m3e5_59{flex:1;min-width:0;margin:0;font-size:22px;font-weight:700;color:var(--text)}._body_1m3e5_1{flex:1;overflow-y:auto;overflow-x:hidden;padding:32px;min-height:0}._footer_1m3e5_1{display:flex;flex-direction:column;z-index:200;padding:20px 32px;background:var(--surface);-webkit-backdrop-filter:blur(18px);backdrop-filter:blur(18px);border-top:1px solid var(--border)}._close_1m3e5_86{flex-shrink:0;width:40px;height:40px;padding:0!important;border-radius:12px}@media(max-width:768px){._overlay_1m3e5_1{padding:0}._modal_1m3e5_1{width:100%;max-width:100%;height:100vh;max-height:100vh;border-radius:0;border:none}._header_1m3e5_1{padding:max(env(safe-area-inset-top),16px) 16px 16px}._body_1m3e5_1{padding:20px 16px}._footer_1m3e5_1{padding:16px 16px calc(16px + env(safe-area-inset-bottom))}}._fields_1m3e5_116{display:contents;border:0;padding:0;margin:0;min-width:0}._suspended_1m3e5_124{display:none}._heading_1m3e5_128{flex:1;min-width:0;padding:16px 0}._content_eng69_1{display:flex;flex-direction:column;gap:12px}._title_eng69_7{margin:4px 0 8px;color:var(--text);font-size:18px;font-weight:600}._actions_eng69_14{display:flex;flex-direction:column;gap:12px}._row_eng69_20{display:grid;grid-auto-flow:column;grid-auto-columns:minmax(0,1fr);gap:10px}._row_eng69_20>button{min-width:0}._identifier_eng69_31{margin:4px 0 0;font-size:11px;line-height:1.4;color:var(--text-secondary);overflow-wrap:anywhere;-webkit-user-select:text;user-select:text}._accordion_5owbj_1{border:1px solid var(--border);border-radius:12px;overflow:hidden}._header_5owbj_7{width:100%;background:var(--surface-elevated);border:none;color:var(--text);padding:16px;text-align:left;cursor:pointer;font-weight:600;display:flex;justify-content:space-between}._content_5owbj_20{padding:16px;border-top:1px solid var(--border);display:flex;flex-direction:column;gap:16px}._wrapper_1fgdg_1{min-width:0;width:100%;box-sizing:border-box;position:relative;z-index:999999;overflow:visible}._dropdown_1fgdg_10{position:fixed;z-index:9999999;max-height:260px;overflow-y:auto;overscroll-behavior:contain;border:1px solid var(--border);border-radius:12px;background:var(--surface);box-shadow:0 12px 28px var(--shadow-floating)}._option_1fgdg_22{box-sizing:border-box;overflow-wrap:anywhere;display:flex;width:100%;flex-direction:column;gap:4px;padding:10px 12px;border:0;border-bottom:1px solid var(--border);background:transparent;color:var(--text);text-align:left;cursor:pointer}._option_1fgdg_22:hover{background:var(--surface-hover)}._option_1fgdg_22:last-child{border-bottom:0}._title_1fgdg_46{font-size:14px;font-weight:600}._uuid_1fgdg_51,._hint_1fgdg_52{color:var(--text-secondary);font-size:12px}._field_1esqu_1{margin-bottom:12px}._row_1esqu_5{display:flex;align-items:flex-end;gap:8px}._inputWrapper_1esqu_11{flex:1;min-width:0}._error_1esqu_16{margin-top:4px;color:var(--danger);font-size:12px}._clearButton_1esqu_22{flex:0 0 36px;width:36px;min-width:36px;height:50px;padding:0;box-sizing:border-box}._rowError_1esqu_31{align-items:center}._dropdown_3mupk_2{display:flex;flex-direction:column;gap:10px;width:100%;min-width:0;box-sizing:border-box}._label_3mupk_11{padding-left:2px;color:var(--text-secondary);font-size:13px;font-weight:600;letter-spacing:.02em}._wrapper_3mupk_19{position:relative}._select_3mupk_23{width:100%;min-width:0;box-sizing:border-box;height:50px;padding:0 48px 0 16px;appearance:none;-webkit-appearance:none;-moz-appearance:none;border-radius:14px;border:1px solid var(--border);background:var(--control-background);color:var(--text);font-size:15px;font-weight:500;cursor:pointer;transition:border-color .18s ease,background .18s ease,box-shadow .18s ease,transform .18s ease}._select_3mupk_23:hover{background:var(--control-background-hover);border-color:var(--border-hover)}._select_3mupk_23:focus{outline:none;background:var(--control-background-hover);border-color:var(--primary);box-shadow:0 0 0 4px var(--focus-ring);transform:translateY(-1px)}._select_3mupk_23:disabled{opacity:.6;cursor:not-allowed}._select_3mupk_23 option{background:var(--surface);color:var(--text)}._arrow_3mupk_65{position:absolute;top:50%;right:16px;transform:translateY(-50%);pointer-events:none;color:var(--text-muted);transition:color .18s ease,transform .18s ease}._wrapper_3mupk_19:hover ._arrow_3mupk_65{color:var(--primary)}._select_3mupk_23:focus+._arrow_3mupk_65{color:var(--primary);transform:translateY(-50%) rotate(180deg)}._error_3mupk_85,._error_3mupk_85:hover{border-color:var(--danger)!important}._error_3mupk_85:focus{border-color:var(--danger)!important;box-shadow:0 0 0 4px var(--danger-ring);background:var(--danger-background)}._error_3mupk_85+._arrow_3mupk_65{color:var(--danger)}._errorText_3mupk_103{margin-top:-4px;padding-left:2px;color:var(--danger);font-size:12px;font-weight:500;line-height:1.4}._form_1ogov_1{display:flex;flex-direction:column;gap:28px}._section_1ogov_7{z-index:100;display:flex;flex-direction:column;gap:18px;padding:22px;border-radius:18px;background:var(--control-background);border:1px solid var(--border)}._sectionTitle_1ogov_18{margin:0;font-size:13px;font-weight:700;letter-spacing:.08em;text-transform:uppercase;color:var(--text-secondary)}._conditions_1ogov_27{display:flex;flex-direction:column;gap:14px}._addCondition_1ogov_33{width:100%;height:48px;margin-top:8px;border:1px dashed var(--border);border-radius:14px;background:transparent;color:var(--text-secondary);transition:background .18s,border-color .18s,color .18s,transform .18s}._addCondition_1ogov_33:hover{background:var(--accent-background);border-color:var(--accent-border);color:var(--text)}._addCondition_1ogov_33:active{transform:scale(.98)}._footer_1ogov_54{z-index:200;position:sticky;bottom:-32px;display:flex;justify-content:flex-end;align-items:center;gap:12px;margin:0 -32px -32px;padding:20px 32px;background:var(--surface);-webkit-backdrop-filter:blur(18px);backdrop-filter:blur(18px);border-top:1px solid var(--border)}@media(max-width:768px){._form_1ogov_1{gap:20px}._section_1ogov_7{padding:18px}._footer_1ogov_54{position:sticky;bottom:-20px;margin:0 -16px -20px;padding:16px 16px calc(16px + env(safe-area-inset-bottom));flex-direction:column}}._container_9wouv_1{position:fixed;left:16px;right:16px;bottom:calc(16px + env(safe-area-inset-bottom));display:flex;justify-content:center;opacity:0;pointer-events:none;transform:translateY(24px) scale(.96);transition:opacity .22s ease,transform .22s ease;z-index:1100}._container_9wouv_1>*{width:100%;max-width:420px}._visible_9wouv_20{opacity:1;transform:translateY(0) scale(1);pointer-events:auto}._visible_9wouv_20>*{pointer-events:auto}._field_1iloj_1{min-width:0;display:flex;flex-direction:column;gap:6px}._label_1iloj_8{color:var(--text);font-size:13px;font-weight:600}._select_1iloj_14{min-width:0;max-width:100%;width:100%;padding:12px 14px;border:1px solid var(--border);border-radius:12px;background:var(--surface);color:var(--text);font:inherit;box-sizing:border-box}._select_1iloj_14:focus{outline:none;border-color:var(--primary);box-shadow:0 0 0 4px var(--focus-ring)}._form_1a1tt_1{display:flex;flex-direction:column;gap:18px}._field_1a1tt_7{display:flex;flex-direction:column;gap:8px;color:var(--text);font-size:13px;font-weight:600}._textarea_1a1tt_16{width:100%;min-height:140px;padding:12px 14px;border:1px solid var(--border);border-radius:12px;background:var(--surface);color:var(--text);resize:vertical;font:inherit;box-sizing:border-box}._arrayItem_1a1tt_29{display:grid;gap:12px;padding:12px;border:1px solid var(--border);border-radius:12px;background:var(--surface);margin-bottom:12px}._form_1a1tt_1 p{margin:0;color:var(--text-secondary);font-size:13px;line-height:1.5}._logicTabs_1a1tt_46{display:flex;gap:4px;padding:4px;background:var(--surface);border:1px solid var(--border);border-radius:12px}._logicTabs_1a1tt_46 button{flex:1;min-width:0;padding:12px 8px;border:0;border-radius:8px;background:transparent;color:var(--text-secondary);font:inherit;cursor:pointer;overflow-wrap:anywhere}._logicTabs_1a1tt_46 button[aria-selected=true]{background:var(--accent-background);color:var(--text);box-shadow:inset 0 0 0 1px var(--accent-border)}._logicTabs_1a1tt_46 button:focus-visible{outline:2px solid var(--primary);outline-offset:2px}@media(max-width:400px){._logicTabs_1a1tt_46 button{padding:10px 4px;font-size:12px}}._sectionTitle_1a1tt_85{margin:0;font-size:14px;font-weight:600;color:var(--text)}._footerActions_1a1tt_92{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:12px}._footerActions_1a1tt_92>button{min-width:0;min-height:46px;height:auto;padding:12px;white-space:normal}._phraseMode_1a1tt_106{display:flex;align-items:center;gap:8px}._phraseMode_1a1tt_106>label{flex:1;min-width:0}._phraseMode_1a1tt_106>label>span:first-of-type{flex-shrink:0}@media(max-width:768px){._directTabLabel_1a1tt_122{white-space:pre-line}}._linkActions_1a1tt_126{display:flex;justify-content:flex-end;flex-wrap:wrap;gap:12px;align-items:center}._switchRow_1hmmz_1{display:inline-flex;align-items:center;gap:10px;color:var(--text);font-size:14px;cursor:pointer;-webkit-user-select:none;user-select:none}._input_1hmmz_11{position:absolute;width:1px;height:1px;padding:0;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border:0}._track_1hmmz_22{position:relative;width:46px;height:26px;flex:0 0 auto;border:1px solid var(--border);border-radius:999px;background:var(--surface-elevated);transition:background .2s ease,border-color .2s ease,box-shadow .2s ease}._thumb_1hmmz_33{position:absolute;top:3px;left:3px;width:18px;height:18px;border-radius:50%;background:var(--switch-thumb);box-shadow:0 2px 6px var(--shadow-floating);transition:transform .2s ease,background .2s ease}._input_1hmmz_11:checked+._track_1hmmz_22{border-color:var(--primary);background:var(--primary);box-shadow:none}._input_1hmmz_11:checked+._track_1hmmz_22 ._thumb_1hmmz_33{transform:translate(20px);background:var(--on-primary)}._input_1hmmz_11:focus-visible+._track_1hmmz_22{outline:2px solid var(--primary);outline-offset:2px}._input_1hmmz_11:disabled+._track_1hmmz_22,._input_1hmmz_11:disabled~._label_1hmmz_62{opacity:.55;cursor:not-allowed}._label_1hmmz_62{line-height:1.3}._form_mn1ml_1{display:flex;flex-direction:column;gap:24px;min-width:0}._arrayItem_mn1ml_8{display:flex;flex-direction:column;gap:18px;min-width:0;padding:20px;border:1px solid var(--border);border-radius:14px;background:var(--control-background);box-sizing:border-box}@media(max-width:768px){._arrayItem_mn1ml_8{padding:14px}}._sectionTitle_mn1ml_25{margin:0;font-size:14px;font-weight:600;color:var(--text)}._form_1i0x1_1{display:flex;flex-direction:column;gap:18px}._field_1i0x1_7{display:flex;flex-direction:column;gap:8px;color:var(--text);font-size:13px;font-weight:600}._textarea_1i0x1_16{width:100%;min-height:140px;padding:12px 14px;border:1px solid var(--border);border-radius:12px;background:var(--surface);color:var(--text);resize:vertical;font:inherit;box-sizing:border-box}._arrayItem_1i0x1_29{display:grid;gap:12px;padding:12px;border:1px solid var(--border);border-radius:12px;background:var(--surface);margin-bottom:12px}._grid_fc8hl_1{min-width:0;display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,280px),1fr));gap:20px}._card_fc8hl_8{box-sizing:border-box;min-width:0;padding:24px;border:1px solid var(--border);border-radius:18px;background:var(--surface)}._card_fc8hl_8 h2{overflow-wrap:anywhere;margin:0 0 20px;font-size:20px}._actions_fc8hl_23{display:flex;flex-wrap:wrap;gap:12px}._description_fc8hl_29{margin:0 0 20px;color:var(--text-secondary);line-height:1.5}@media(max-width:768px){._page_fc8hl_36{padding-bottom:calc(112px + env(safe-area-inset-bottom))}._card_fc8hl_8{padding:18px}._actions_fc8hl_23{flex-direction:column}._actions_fc8hl_23>button{width:100%;min-width:0;max-width:100%;white-space:normal;height:auto;min-height:46px;padding:12px;overflow-wrap:anywhere}}._form_1ijxr_1{display:flex;flex-direction:column;gap:24px}._field_1ijxr_7{display:flex;flex-direction:column;gap:8px}._input_1ijxr_13{box-sizing:border-box;min-width:0;width:100%;background:var(--surface);border:1px solid var(--border);border-radius:10px;padding:12px;color:var(--text)}._input_1ijxr_13:focus{outline:none;border-color:var(--primary)}._label_1ijxr_29{color:var(--text-secondary);font-size:13px;font-weight:500}._help_1ijxr_35{color:var(--text-secondary);font-size:13px}._toggleHelp_1ijxr_40{display:flex;align-items:center;gap:8px}._page_w5y3x_1{min-height:100vh;padding:28px;background:var(--surface);color:var(--text);display:flex;flex-direction:column;gap:28px}._header_w5y3x_11{display:flex;align-items:flex-end;justify-content:space-between;gap:20px}._title_w5y3x_18{margin:0;font-size:40px;line-height:1;letter-spacing:-.04em}._description_w5y3x_25{margin:10px 0 0;color:var(--text-secondary);font-size:15px}._grid_w5y3x_31{display:grid;grid-template-columns:minmax(0,1fr);min-width:0;gap:16px}._card_w5y3x_38,._empty_w5y3x_38{min-width:0;max-width:100%;padding:20px;border:1px solid var(--border);border-radius:20px;background:var(--surface-elevated)}._cardHeader_w5y3x_47{display:flex;justify-content:space-between;gap:16px;align-items:flex-start}._cardTitle_w5y3x_54{margin:0;font-size:18px}._meta_w5y3x_59{overflow-wrap:anywhere;margin-top:8px;color:var(--text-secondary);font-size:14px}._time_w5y3x_66{margin-top:18px;font-size:38px;font-weight:700;letter-spacing:-.04em}._form_w5y3x_73{display:flex;flex-direction:column;gap:18px}._field_w5y3x_79{display:flex;flex-direction:column;gap:8px}._label_w5y3x_85{color:var(--text-secondary);font-size:13px;font-weight:500}._select_w5y3x_91,._input_w5y3x_91{height:44px;padding:0 14px;border:1px solid var(--border);border-radius:14px;background:var(--surface);color:var(--text);font-size:14px}._quickTabs_w5y3x_101{display:flex;flex-wrap:wrap;gap:8px}._quickTab_w5y3x_101{height:40px;padding:0 14px;border:1px solid var(--border);border-radius:999px;background:var(--surface);color:var(--text-secondary);cursor:pointer}._activeQuickTab_w5y3x_117{background:var(--accent-background);color:var(--text)}@media(max-width:768px){._page_w5y3x_1{padding:20px;padding-bottom:calc(120px + env(safe-area-inset-bottom))}._header_w5y3x_11{align-items:stretch;flex-direction:column}._title_w5y3x_18{font-size:32px}}._cardLead_w5y3x_135{flex:1;display:flex;align-items:center;gap:14px;min-width:0}._cardIcon_w5y3x_143{flex:0 0 auto;color:var(--text-muted)}._cardButton_w5y3x_148{width:100%;text-align:left;color:inherit;cursor:pointer}._cardButton_w5y3x_148:hover{border-color:var(--border-hover);background:var(--surface-hover)}._wheelPicker_w5y3x_160{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));width:100%;min-width:0;box-sizing:border-box;gap:12px;padding:14px;border:1px solid var(--border);border-radius:0;background:var(--surface-elevated)}._wheelColumn_w5y3x_173{display:flex;flex-direction:column;align-items:center;gap:8px}._wheelSelect_w5y3x_180{width:100%;height:64px;box-sizing:border-box;border:1px solid var(--border);border-radius:10px;background:var(--control-background);color:var(--text);text-align:center;font-size:24px;font-weight:700}@media(max-width:768px){._wheelPicker_w5y3x_160{position:relative;overflow:hidden}._wheelSelect_w5y3x_180{height:72px}}._footerActions_w5y3x_202{display:flex;justify-content:flex-end;width:100%}._saveButton_w5y3x_208{min-width:160px;box-sizing:border-box}@media(max-width:768px){._saveButton_w5y3x_208{width:100%}}._cardLead_w5y3x_135>div{min-width:0}._cardHeader_w5y3x_47>:last-child:not(._cardLead_w5y3x_135){flex-shrink:0}._volumeLabel_w5y3x_226{display:flex;align-items:baseline;gap:8px}._volumeValue_w5y3x_232{color:var(--text);font-weight:600}._alarmTimeFields_w5y3x_237{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:12px}._wheelSelect_w5y3x_180:focus{outline:2px solid var(--primary);outline-offset:2px}@media(max-width:768px){._grid_w5y3x_31{padding-bottom:calc(96px + env(safe-area-inset-bottom))}}._navigation_mjbb7_1{padding:24px 32px 0}._page_mjbb7_5{padding:0 32px 24px;color:var(--text);min-width:0}._title_mjbb7_11{margin-top:28px}._hint_mjbb7_15{color:var(--text-secondary);line-height:1.6}._grid_mjbb7_20{display:grid;grid-template-columns:repeat(auto-fill,minmax(min(100%,250px),1fr));gap:16px;max-width:1100px}._device_mjbb7_27{display:flex;flex-direction:column;align-items:flex-start;gap:12px;text-align:left;padding:24px;border:1px solid var(--border);border-radius:20px;background:var(--surface);color:var(--text);font:inherit;cursor:pointer;min-width:0}._device_mjbb7_27 strong{overflow-wrap:anywhere;font-size:18px}._device_mjbb7_27 span{color:var(--text-secondary)}._device_mjbb7_27:hover,._device_mjbb7_27:focus-visible{border-color:var(--primary)}._active_mjbb7_56{border-color:var(--primary)}._active_mjbb7_56 svg{color:var(--primary)}._status_mjbb7_64{display:flex;align-items:center;gap:8px;margin-bottom:24px}._actions_mjbb7_71{display:flex;gap:12px;width:100%}._actions_mjbb7_71>button{flex:1;min-width:0}._actions_mjbb7_71 button{display:flex;align-items:center;justify-content:center;gap:8px}@media(max-width:768px){._navigation_mjbb7_1{padding:0}._page_mjbb7_5{padding:16px}._title_mjbb7_11{display:none}}._origin_mjbb7_100{display:flex;align-items:center;flex-wrap:wrap;gap:10px;line-height:1.6}._origin_mjbb7_100 svg{flex-shrink:0;color:var(--primary)}._phoneStage_mjbb7_113{display:flex;flex-direction:column;align-items:center;justify-content:center;gap:14px;text-align:center;min-height:240px;padding:24px 0}._avatar_mjbb7_124{display:grid;place-items:center;width:106px;height:106px;border-radius:50%;color:var(--primary);background:color-mix(in srgb,var(--primary) 12%,var(--surface));border:1px solid color-mix(in srgb,var(--primary) 25%,var(--border))}._phoneStage_mjbb7_113 h2{margin:10px 0 0;font-size:26px;overflow-wrap:anywhere}._phoneStatus_mjbb7_141{display:flex;gap:8px;align-items:center;color:var(--text-secondary)}._duration_mjbb7_148{font-size:20px;font-variant-numeric:tabular-nums;letter-spacing:2px}._phoneStage_mjbb7_113 p{margin:0;font-size:13px}._phoneFooter_mjbb7_159{width:100%;display:flex;flex-direction:column;align-items:stretch;gap:18px}._callControls_mjbb7_167{display:flex;justify-content:center;gap:clamp(16px,5vw,48px)}._control_mjbb7_173{display:flex;flex-direction:column;align-items:center;gap:9px;min-width:74px}._control_mjbb7_173>span{font-size:12px;color:var(--text-secondary)}._control_mjbb7_173 ._roundControl_mjbb7_186,._control_mjbb7_173 ._hangup_mjbb7_186{width:62px;height:62px;min-width:62px;padding:0;display:grid;place-items:center;border-radius:50%}._control_mjbb7_173 ._controlSelected_mjbb7_196{color:var(--primary);background:color-mix(in srgb,var(--primary) 18%,var(--surface));border-color:var(--primary)}._control_mjbb7_173 ._hangup_mjbb7_186{width:72px;height:72px;background:#cf3549;color:#fff;border-color:#cf3549}._control_mjbb7_173 ._hangup_mjbb7_186:hover{background:#b9273a}._routeHint_mjbb7_214{display:flex;justify-content:center;align-items:center;gap:6px;font-size:12px;color:var(--text-secondary)}._routeName_mjbb7_223{text-align:center;color:var(--text-secondary);overflow-wrap:anywhere}@media(max-width:768px){._phoneStage_mjbb7_113{min-height:220px}._phoneFooter_mjbb7_159{padding-bottom:max(8px,env(safe-area-inset-bottom))}}._control_mjbb7_173 ._dial_mjbb7_237{width:72px;height:72px;min-width:72px;padding:0;display:grid;place-items:center;border-radius:50%;background:#23875c;border-color:#23875c;color:#fff}._control_mjbb7_173 ._dial_mjbb7_237:hover:not(:disabled){background:#1a714b}._page_1k5zr_1{padding:0 32px 24px;box-sizing:border-box;min-width:0;color:var(--text)}._heading_1k5zr_8{display:flex;align-items:center;gap:16px;margin:28px 0}._heading_1k5zr_8 h1{font-size:30px;margin:0}._heading_1k5zr_8 p{color:var(--text-secondary);line-height:1.6;margin:8px 0 0}._grid_1k5zr_26{display:grid;grid-template-columns:repeat(auto-fill,minmax(min(100%,250px),1fr));gap:16px;max-width:1100px}._device_1k5zr_33{display:flex;flex-direction:column;align-items:flex-start;gap:12px;text-align:left;padding:24px;border:1px solid var(--border, #333);background:var(--surface, #1c1c1c);color:var(--text);border-radius:20px;font:inherit;cursor:pointer;min-width:0}._device_1k5zr_33 strong{font-size:18px;overflow-wrap:anywhere}._device_1k5zr_33 span,._device_1k5zr_33 small{color:var(--text-secondary)}._device_1k5zr_33:hover,._device_1k5zr_33:focus-visible{border-color:var(--primary, #03a9f4)}._deviceLive_1k5zr_64{border-color:#3da98c}._deviceLive_1k5zr_64 svg{color:#3da98c}._navigation_1k5zr_72{padding:24px 32px 0}._playback_1k5zr_76{position:relative;border:1px solid var(--primary, #03a9f4);background:color-mix(in srgb,var(--primary, #03a9f4) 10%,transparent);border-radius:14px;overflow:hidden}._playback_1k5zr_76>svg{position:absolute;left:18px;top:50%;transform:translateY(-50%);pointer-events:none;color:var(--primary)}._playback_1k5zr_76 ._playbackSelect_1k5zr_93{padding:20px 54px;text-align:center;text-align-last:center;border:0;background:transparent;border-radius:14px;min-height:48px;text-overflow:ellipsis}._playback_1k5zr_76:has(select:disabled){opacity:.65}._playback_1k5zr_76 ._playbackSelect_1k5zr_93:focus{box-shadow:none}._playback_1k5zr_76:focus-within{outline:2px solid var(--primary, #03a9f4);outline-offset:3px}._statusRow_1k5zr_117{display:flex;align-items:center;gap:8px;margin-bottom:20px}._status_1k5zr_117{display:flex;gap:10px;align-items:center;padding:16px 0;color:var(--text-secondary)}._live_1k5zr_132{color:#32aa87}._hint_1k5zr_136{font-size:14px;color:var(--text-secondary);line-height:1.6}._footer_1k5zr_142{display:flex;gap:12px;width:100%}._footer_1k5zr_142>button{flex:1;min-width:0}._empty_1k5zr_153{padding:28px;border:1px dashed var(--border, #333);border-radius:18px;line-height:1.7}._error_1k5zr_160{color:var(--danger, #ed8291);line-height:1.5}@media(max-width:768px){._navigation_1k5zr_72{padding:0}._page_1k5zr_1{padding:16px}._heading_1k5zr_8{margin:20px 0}._heading_1k5zr_8 h1{display:none}._grid_1k5zr_26{grid-template-columns:1fr}._heading_1k5zr_8>svg{display:none}}\n", i.appendChild(c);
  }
  render() {
    if (!this.isConnected) return;
    const i = this.ensureShadowRoot();
    this.root || (this.container || (this.container = document.createElement("div"), i.appendChild(this.container)), this.root = Im.createRoot(this.container)), this.root.render(
      /* @__PURE__ */ o.jsx(Af.StrictMode, { children: /* @__PURE__ */ o.jsx(fp, { children: /* @__PURE__ */ o.jsx(Kk, { hass: this.hassValue }) }) })
    );
  }
}
customElements.get(Tf) || customElements.define(Tf, Yk);
