var Rm = Object.defineProperty;
var Pm = (r, a, i) => a in r ? Rm(r, a, { enumerable: !0, configurable: !0, writable: !0, value: i }) : r[a] = i;
var be = (r, a, i) => Pm(r, typeof a != "symbol" ? a + "" : a, i);
function Df(r) {
  return r && r.__esModule && Object.prototype.hasOwnProperty.call(r, "default") ? r.default : r;
}
var ml = { exports: {} }, Ds = {}, vl = { exports: {} }, Se = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Gd;
function $m() {
  if (Gd) return Se;
  Gd = 1;
  var r = Symbol.for("react.element"), a = Symbol.for("react.portal"), i = Symbol.for("react.fragment"), u = Symbol.for("react.strict_mode"), d = Symbol.for("react.profiler"), f = Symbol.for("react.provider"), p = Symbol.for("react.context"), h = Symbol.for("react.forward_ref"), y = Symbol.for("react.suspense"), w = Symbol.for("react.memo"), g = Symbol.for("react.lazy"), x = Symbol.iterator;
  function k(N) {
    return N === null || typeof N != "object" ? null : (N = x && N[x] || N["@@iterator"], typeof N == "function" ? N : null);
  }
  var j = { isMounted: function() {
    return !1;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, b = Object.assign, C = {};
  function E(N, H, ie) {
    this.props = N, this.context = H, this.refs = C, this.updater = ie || j;
  }
  E.prototype.isReactComponent = {}, E.prototype.setState = function(N, H) {
    if (typeof N != "object" && typeof N != "function" && N != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, N, H, "setState");
  }, E.prototype.forceUpdate = function(N) {
    this.updater.enqueueForceUpdate(this, N, "forceUpdate");
  };
  function P() {
  }
  P.prototype = E.prototype;
  function F(N, H, ie) {
    this.props = N, this.context = H, this.refs = C, this.updater = ie || j;
  }
  var $ = F.prototype = new P();
  $.constructor = F, b($, E.prototype), $.isPureReactComponent = !0;
  var A = Array.isArray, z = Object.prototype.hasOwnProperty, O = { current: null }, Y = { key: !0, ref: !0, __self: !0, __source: !0 };
  function W(N, H, ie) {
    var oe, xe = {}, ke = null, Ne = null;
    if (H != null) for (oe in H.ref !== void 0 && (Ne = H.ref), H.key !== void 0 && (ke = "" + H.key), H) z.call(H, oe) && !Y.hasOwnProperty(oe) && (xe[oe] = H[oe]);
    var Ce = arguments.length - 2;
    if (Ce === 1) xe.children = ie;
    else if (1 < Ce) {
      for (var Re = Array(Ce), ut = 0; ut < Ce; ut++) Re[ut] = arguments[ut + 2];
      xe.children = Re;
    }
    if (N && N.defaultProps) for (oe in Ce = N.defaultProps, Ce) xe[oe] === void 0 && (xe[oe] = Ce[oe]);
    return { $$typeof: r, type: N, key: ke, ref: Ne, props: xe, _owner: O.current };
  }
  function X(N, H) {
    return { $$typeof: r, type: N.type, key: H, ref: N.ref, props: N.props, _owner: N._owner };
  }
  function me(N) {
    return typeof N == "object" && N !== null && N.$$typeof === r;
  }
  function pe(N) {
    var H = { "=": "=0", ":": "=2" };
    return "$" + N.replace(/[=:]/g, function(ie) {
      return H[ie];
    });
  }
  var ge = /\/+/g;
  function ye(N, H) {
    return typeof N == "object" && N !== null && N.key != null ? pe("" + N.key) : H.toString(36);
  }
  function we(N, H, ie, oe, xe) {
    var ke = typeof N;
    (ke === "undefined" || ke === "boolean") && (N = null);
    var Ne = !1;
    if (N === null) Ne = !0;
    else switch (ke) {
      case "string":
      case "number":
        Ne = !0;
        break;
      case "object":
        switch (N.$$typeof) {
          case r:
          case a:
            Ne = !0;
        }
    }
    if (Ne) return Ne = N, xe = xe(Ne), N = oe === "" ? "." + ye(Ne, 0) : oe, A(xe) ? (ie = "", N != null && (ie = N.replace(ge, "$&/") + "/"), we(xe, H, ie, "", function(ut) {
      return ut;
    })) : xe != null && (me(xe) && (xe = X(xe, ie + (!xe.key || Ne && Ne.key === xe.key ? "" : ("" + xe.key).replace(ge, "$&/") + "/") + N)), H.push(xe)), 1;
    if (Ne = 0, oe = oe === "" ? "." : oe + ":", A(N)) for (var Ce = 0; Ce < N.length; Ce++) {
      ke = N[Ce];
      var Re = oe + ye(ke, Ce);
      Ne += we(ke, H, ie, Re, xe);
    }
    else if (Re = k(N), typeof Re == "function") for (N = Re.call(N), Ce = 0; !(ke = N.next()).done; ) ke = ke.value, Re = oe + ye(ke, Ce++), Ne += we(ke, H, ie, Re, xe);
    else if (ke === "object") throw H = String(N), Error("Objects are not valid as a React child (found: " + (H === "[object Object]" ? "object with keys {" + Object.keys(N).join(", ") + "}" : H) + "). If you meant to render a collection of children, use an array instead.");
    return Ne;
  }
  function B(N, H, ie) {
    if (N == null) return N;
    var oe = [], xe = 0;
    return we(N, oe, "", "", function(ke) {
      return H.call(ie, ke, xe++);
    }), oe;
  }
  function le(N) {
    if (N._status === -1) {
      var H = N._result;
      H = H(), H.then(function(ie) {
        (N._status === 0 || N._status === -1) && (N._status = 1, N._result = ie);
      }, function(ie) {
        (N._status === 0 || N._status === -1) && (N._status = 2, N._result = ie);
      }), N._status === -1 && (N._status = 0, N._result = H);
    }
    if (N._status === 1) return N._result.default;
    throw N._result;
  }
  var fe = { current: null }, M = { transition: null }, J = { ReactCurrentDispatcher: fe, ReactCurrentBatchConfig: M, ReactCurrentOwner: O };
  function U() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  return Se.Children = { map: B, forEach: function(N, H, ie) {
    B(N, function() {
      H.apply(this, arguments);
    }, ie);
  }, count: function(N) {
    var H = 0;
    return B(N, function() {
      H++;
    }), H;
  }, toArray: function(N) {
    return B(N, function(H) {
      return H;
    }) || [];
  }, only: function(N) {
    if (!me(N)) throw Error("React.Children.only expected to receive a single React element child.");
    return N;
  } }, Se.Component = E, Se.Fragment = i, Se.Profiler = d, Se.PureComponent = F, Se.StrictMode = u, Se.Suspense = y, Se.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = J, Se.act = U, Se.cloneElement = function(N, H, ie) {
    if (N == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + N + ".");
    var oe = b({}, N.props), xe = N.key, ke = N.ref, Ne = N._owner;
    if (H != null) {
      if (H.ref !== void 0 && (ke = H.ref, Ne = O.current), H.key !== void 0 && (xe = "" + H.key), N.type && N.type.defaultProps) var Ce = N.type.defaultProps;
      for (Re in H) z.call(H, Re) && !Y.hasOwnProperty(Re) && (oe[Re] = H[Re] === void 0 && Ce !== void 0 ? Ce[Re] : H[Re]);
    }
    var Re = arguments.length - 2;
    if (Re === 1) oe.children = ie;
    else if (1 < Re) {
      Ce = Array(Re);
      for (var ut = 0; ut < Re; ut++) Ce[ut] = arguments[ut + 2];
      oe.children = Ce;
    }
    return { $$typeof: r, type: N.type, key: xe, ref: ke, props: oe, _owner: Ne };
  }, Se.createContext = function(N) {
    return N = { $$typeof: p, _currentValue: N, _currentValue2: N, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, N.Provider = { $$typeof: f, _context: N }, N.Consumer = N;
  }, Se.createElement = W, Se.createFactory = function(N) {
    var H = W.bind(null, N);
    return H.type = N, H;
  }, Se.createRef = function() {
    return { current: null };
  }, Se.forwardRef = function(N) {
    return { $$typeof: h, render: N };
  }, Se.isValidElement = me, Se.lazy = function(N) {
    return { $$typeof: g, _payload: { _status: -1, _result: N }, _init: le };
  }, Se.memo = function(N, H) {
    return { $$typeof: w, type: N, compare: H === void 0 ? null : H };
  }, Se.startTransition = function(N) {
    var H = M.transition;
    M.transition = {};
    try {
      N();
    } finally {
      M.transition = H;
    }
  }, Se.unstable_act = U, Se.useCallback = function(N, H) {
    return fe.current.useCallback(N, H);
  }, Se.useContext = function(N) {
    return fe.current.useContext(N);
  }, Se.useDebugValue = function() {
  }, Se.useDeferredValue = function(N) {
    return fe.current.useDeferredValue(N);
  }, Se.useEffect = function(N, H) {
    return fe.current.useEffect(N, H);
  }, Se.useId = function() {
    return fe.current.useId();
  }, Se.useImperativeHandle = function(N, H, ie) {
    return fe.current.useImperativeHandle(N, H, ie);
  }, Se.useInsertionEffect = function(N, H) {
    return fe.current.useInsertionEffect(N, H);
  }, Se.useLayoutEffect = function(N, H) {
    return fe.current.useLayoutEffect(N, H);
  }, Se.useMemo = function(N, H) {
    return fe.current.useMemo(N, H);
  }, Se.useReducer = function(N, H, ie) {
    return fe.current.useReducer(N, H, ie);
  }, Se.useRef = function(N) {
    return fe.current.useRef(N);
  }, Se.useState = function(N) {
    return fe.current.useState(N);
  }, Se.useSyncExternalStore = function(N, H, ie) {
    return fe.current.useSyncExternalStore(N, H, ie);
  }, Se.useTransition = function() {
    return fe.current.useTransition();
  }, Se.version = "18.3.1", Se;
}
var Xd;
function Hl() {
  return Xd || (Xd = 1, vl.exports = $m()), vl.exports;
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
var Zd;
function Mm() {
  if (Zd) return Ds;
  Zd = 1;
  var r = Hl(), a = Symbol.for("react.element"), i = Symbol.for("react.fragment"), u = Object.prototype.hasOwnProperty, d = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, f = { key: !0, ref: !0, __self: !0, __source: !0 };
  function p(h, y, w) {
    var g, x = {}, k = null, j = null;
    w !== void 0 && (k = "" + w), y.key !== void 0 && (k = "" + y.key), y.ref !== void 0 && (j = y.ref);
    for (g in y) u.call(y, g) && !f.hasOwnProperty(g) && (x[g] = y[g]);
    if (h && h.defaultProps) for (g in y = h.defaultProps, y) x[g] === void 0 && (x[g] = y[g]);
    return { $$typeof: a, type: h, key: k, ref: j, props: x, _owner: d.current };
  }
  return Ds.Fragment = i, Ds.jsx = p, Ds.jsxs = p, Ds;
}
var ef;
function Im() {
  return ef || (ef = 1, ml.exports = Mm()), ml.exports;
}
var o = Im(), v = Hl();
const Lf = /* @__PURE__ */ Df(v);
var ri = {}, gl = { exports: {} }, kt = {}, yl = { exports: {} }, _l = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var tf;
function Dm() {
  return tf || (tf = 1, (function(r) {
    function a(M, J) {
      var U = M.length;
      M.push(J);
      e: for (; 0 < U; ) {
        var N = U - 1 >>> 1, H = M[N];
        if (0 < d(H, J)) M[N] = J, M[U] = H, U = N;
        else break e;
      }
    }
    function i(M) {
      return M.length === 0 ? null : M[0];
    }
    function u(M) {
      if (M.length === 0) return null;
      var J = M[0], U = M.pop();
      if (U !== J) {
        M[0] = U;
        e: for (var N = 0, H = M.length, ie = H >>> 1; N < ie; ) {
          var oe = 2 * (N + 1) - 1, xe = M[oe], ke = oe + 1, Ne = M[ke];
          if (0 > d(xe, U)) ke < H && 0 > d(Ne, xe) ? (M[N] = Ne, M[ke] = U, N = ke) : (M[N] = xe, M[oe] = U, N = oe);
          else if (ke < H && 0 > d(Ne, U)) M[N] = Ne, M[ke] = U, N = ke;
          else break e;
        }
      }
      return J;
    }
    function d(M, J) {
      var U = M.sortIndex - J.sortIndex;
      return U !== 0 ? U : M.id - J.id;
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
    var y = [], w = [], g = 1, x = null, k = 3, j = !1, b = !1, C = !1, E = typeof setTimeout == "function" ? setTimeout : null, P = typeof clearTimeout == "function" ? clearTimeout : null, F = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function $(M) {
      for (var J = i(w); J !== null; ) {
        if (J.callback === null) u(w);
        else if (J.startTime <= M) u(w), J.sortIndex = J.expirationTime, a(y, J);
        else break;
        J = i(w);
      }
    }
    function A(M) {
      if (C = !1, $(M), !b) if (i(y) !== null) b = !0, le(z);
      else {
        var J = i(w);
        J !== null && fe(A, J.startTime - M);
      }
    }
    function z(M, J) {
      b = !1, C && (C = !1, P(W), W = -1), j = !0;
      var U = k;
      try {
        for ($(J), x = i(y); x !== null && (!(x.expirationTime > J) || M && !pe()); ) {
          var N = x.callback;
          if (typeof N == "function") {
            x.callback = null, k = x.priorityLevel;
            var H = N(x.expirationTime <= J);
            J = r.unstable_now(), typeof H == "function" ? x.callback = H : x === i(y) && u(y), $(J);
          } else u(y);
          x = i(y);
        }
        if (x !== null) var ie = !0;
        else {
          var oe = i(w);
          oe !== null && fe(A, oe.startTime - J), ie = !1;
        }
        return ie;
      } finally {
        x = null, k = U, j = !1;
      }
    }
    var O = !1, Y = null, W = -1, X = 5, me = -1;
    function pe() {
      return !(r.unstable_now() - me < X);
    }
    function ge() {
      if (Y !== null) {
        var M = r.unstable_now();
        me = M;
        var J = !0;
        try {
          J = Y(!0, M);
        } finally {
          J ? ye() : (O = !1, Y = null);
        }
      } else O = !1;
    }
    var ye;
    if (typeof F == "function") ye = function() {
      F(ge);
    };
    else if (typeof MessageChannel < "u") {
      var we = new MessageChannel(), B = we.port2;
      we.port1.onmessage = ge, ye = function() {
        B.postMessage(null);
      };
    } else ye = function() {
      E(ge, 0);
    };
    function le(M) {
      Y = M, O || (O = !0, ye());
    }
    function fe(M, J) {
      W = E(function() {
        M(r.unstable_now());
      }, J);
    }
    r.unstable_IdlePriority = 5, r.unstable_ImmediatePriority = 1, r.unstable_LowPriority = 4, r.unstable_NormalPriority = 3, r.unstable_Profiling = null, r.unstable_UserBlockingPriority = 2, r.unstable_cancelCallback = function(M) {
      M.callback = null;
    }, r.unstable_continueExecution = function() {
      b || j || (b = !0, le(z));
    }, r.unstable_forceFrameRate = function(M) {
      0 > M || 125 < M ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : X = 0 < M ? Math.floor(1e3 / M) : 5;
    }, r.unstable_getCurrentPriorityLevel = function() {
      return k;
    }, r.unstable_getFirstCallbackNode = function() {
      return i(y);
    }, r.unstable_next = function(M) {
      switch (k) {
        case 1:
        case 2:
        case 3:
          var J = 3;
          break;
        default:
          J = k;
      }
      var U = k;
      k = J;
      try {
        return M();
      } finally {
        k = U;
      }
    }, r.unstable_pauseExecution = function() {
    }, r.unstable_requestPaint = function() {
    }, r.unstable_runWithPriority = function(M, J) {
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
      var U = k;
      k = M;
      try {
        return J();
      } finally {
        k = U;
      }
    }, r.unstable_scheduleCallback = function(M, J, U) {
      var N = r.unstable_now();
      switch (typeof U == "object" && U !== null ? (U = U.delay, U = typeof U == "number" && 0 < U ? N + U : N) : U = N, M) {
        case 1:
          var H = -1;
          break;
        case 2:
          H = 250;
          break;
        case 5:
          H = 1073741823;
          break;
        case 4:
          H = 1e4;
          break;
        default:
          H = 5e3;
      }
      return H = U + H, M = { id: g++, callback: J, priorityLevel: M, startTime: U, expirationTime: H, sortIndex: -1 }, U > N ? (M.sortIndex = U, a(w, M), i(y) === null && M === i(w) && (C ? (P(W), W = -1) : C = !0, fe(A, U - N))) : (M.sortIndex = H, a(y, M), b || j || (b = !0, le(z))), M;
    }, r.unstable_shouldYield = pe, r.unstable_wrapCallback = function(M) {
      var J = k;
      return function() {
        var U = k;
        k = J;
        try {
          return M.apply(this, arguments);
        } finally {
          k = U;
        }
      };
    };
  })(_l)), _l;
}
var nf;
function Lm() {
  return nf || (nf = 1, yl.exports = Dm()), yl.exports;
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
var rf;
function Om() {
  if (rf) return kt;
  rf = 1;
  var r = Hl(), a = Lm();
  function i(e) {
    for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
    return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var u = /* @__PURE__ */ new Set(), d = {};
  function f(e, t) {
    p(e, t), p(e + "Capture", t);
  }
  function p(e, t) {
    for (d[e] = t, e = 0; e < t.length; e++) u.add(t[e]);
  }
  var h = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), y = Object.prototype.hasOwnProperty, w = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, g = {}, x = {};
  function k(e) {
    return y.call(x, e) ? !0 : y.call(g, e) ? !1 : w.test(e) ? x[e] = !0 : (g[e] = !0, !1);
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
  function C(e, t, n, s, l, c, m) {
    this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = s, this.attributeNamespace = l, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = c, this.removeEmptyString = m;
  }
  var E = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
    E[e] = new C(e, 0, !1, e, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
    var t = e[0];
    E[t] = new C(t, 1, !1, e[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
    E[e] = new C(e, 2, !1, e.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
    E[e] = new C(e, 2, !1, e, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
    E[e] = new C(e, 3, !1, e.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(e) {
    E[e] = new C(e, 3, !0, e, null, !1, !1);
  }), ["capture", "download"].forEach(function(e) {
    E[e] = new C(e, 4, !1, e, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(e) {
    E[e] = new C(e, 6, !1, e, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(e) {
    E[e] = new C(e, 5, !1, e.toLowerCase(), null, !1, !1);
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
    E[t] = new C(t, 1, !1, e, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
    var t = e.replace(P, F);
    E[t] = new C(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
    var t = e.replace(P, F);
    E[t] = new C(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(e) {
    E[e] = new C(e, 1, !1, e.toLowerCase(), null, !1, !1);
  }), E.xlinkHref = new C("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(e) {
    E[e] = new C(e, 1, !1, e.toLowerCase(), null, !0, !0);
  });
  function $(e, t, n, s) {
    var l = E.hasOwnProperty(t) ? E[t] : null;
    (l !== null ? l.type !== 0 : s || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (b(t, n, l, s) && (n = null), s || l === null ? k(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : l.mustUseProperty ? e[l.propertyName] = n === null ? l.type === 3 ? !1 : "" : n : (t = l.attributeName, s = l.attributeNamespace, n === null ? e.removeAttribute(t) : (l = l.type, n = l === 3 || l === 4 && n === !0 ? "" : "" + n, s ? e.setAttributeNS(s, t, n) : e.setAttribute(t, n))));
  }
  var A = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, z = Symbol.for("react.element"), O = Symbol.for("react.portal"), Y = Symbol.for("react.fragment"), W = Symbol.for("react.strict_mode"), X = Symbol.for("react.profiler"), me = Symbol.for("react.provider"), pe = Symbol.for("react.context"), ge = Symbol.for("react.forward_ref"), ye = Symbol.for("react.suspense"), we = Symbol.for("react.suspense_list"), B = Symbol.for("react.memo"), le = Symbol.for("react.lazy"), fe = Symbol.for("react.offscreen"), M = Symbol.iterator;
  function J(e) {
    return e === null || typeof e != "object" ? null : (e = M && e[M] || e["@@iterator"], typeof e == "function" ? e : null);
  }
  var U = Object.assign, N;
  function H(e) {
    if (N === void 0) try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      N = t && t[1] || "";
    }
    return `
` + N + e;
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
        for (var l = L.stack.split(`
`), c = s.stack.split(`
`), m = l.length - 1, S = c.length - 1; 1 <= m && 0 <= S && l[m] !== c[S]; ) S--;
        for (; 1 <= m && 0 <= S; m--, S--) if (l[m] !== c[S]) {
          if (m !== 1 || S !== 1)
            do
              if (m--, S--, 0 > S || l[m] !== c[S]) {
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
    return (e = e ? e.displayName || e.name : "") ? H(e) : "";
  }
  function xe(e) {
    switch (e.tag) {
      case 5:
        return H(e.type);
      case 16:
        return H("Lazy");
      case 13:
        return H("Suspense");
      case 19:
        return H("SuspenseList");
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
      case Y:
        return "Fragment";
      case O:
        return "Portal";
      case X:
        return "Profiler";
      case W:
        return "StrictMode";
      case ye:
        return "Suspense";
      case we:
        return "SuspenseList";
    }
    if (typeof e == "object") switch (e.$$typeof) {
      case pe:
        return (e.displayName || "Context") + ".Consumer";
      case me:
        return (e._context.displayName || "Context") + ".Provider";
      case ge:
        var t = e.render;
        return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
      case B:
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
  function ut(e) {
    var t = Re(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), s = "" + e[t];
    if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
      var l = n.get, c = n.set;
      return Object.defineProperty(e, t, { configurable: !0, get: function() {
        return l.call(this);
      }, set: function(m) {
        s = "" + m, c.call(this, m);
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
    e._valueTracker || (e._valueTracker = ut(e));
  }
  function kn(e) {
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
  function _e(e, t) {
    var n = t.checked;
    return U({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n ?? e._wrapperState.initialChecked });
  }
  function Ae(e, t) {
    var n = t.defaultValue == null ? "" : t.defaultValue, s = t.checked != null ? t.checked : t.defaultChecked;
    n = Ce(t.value != null ? t.value : n), e._wrapperState = { initialChecked: s, initialValue: n, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
  }
  function Le(e, t) {
    t = t.checked, t != null && $(e, "checked", t, !1);
  }
  function Et(e, t) {
    Le(e, t);
    var n = Ce(t.value), s = t.type;
    if (n != null) s === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
    else if (s === "submit" || s === "reset") {
      e.removeAttribute("value");
      return;
    }
    t.hasOwnProperty("value") ? Kn(e, t.type, n) : t.hasOwnProperty("defaultValue") && Kn(e, t.type, Ce(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
  }
  function Jr(e, t, n) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
      var s = t.type;
      if (!(s !== "submit" && s !== "reset" || t.value !== void 0 && t.value !== null)) return;
      t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t;
    }
    n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n);
  }
  function Kn(e, t, n) {
    (t !== "number" || Z(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
  }
  var Gr = Array.isArray;
  function vr(e, t, n, s) {
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
    return U({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
  }
  function au(e, t) {
    var n = t.value;
    if (n == null) {
      if (n = t.children, t = t.defaultValue, n != null) {
        if (t != null) throw Error(i(92));
        if (Gr(n)) {
          if (1 < n.length) throw Error(i(93));
          n = n[0];
        }
        t = n;
      }
      t == null && (t = ""), n = t;
    }
    e._wrapperState = { initialValue: Ce(n) };
  }
  function lu(e, t) {
    var n = Ce(t.value), s = Ce(t.defaultValue);
    n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), s != null && (e.defaultValue = "" + s);
  }
  function uu(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
  }
  function cu(e) {
    switch (e) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function Ei(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml" ? cu(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
  }
  var Ks, du = (function(e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, s, l) {
      MSApp.execUnsafeLocalFunction(function() {
        return e(t, n, s, l);
      });
    } : e;
  })(function(e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
    else {
      for (Ks = Ks || document.createElement("div"), Ks.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = Ks.firstChild; e.firstChild; ) e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
  function Xr(e, t) {
    if (t) {
      var n = e.firstChild;
      if (n && n === e.lastChild && n.nodeType === 3) {
        n.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var Zr = {
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
  }, Ip = ["Webkit", "ms", "Moz", "O"];
  Object.keys(Zr).forEach(function(e) {
    Ip.forEach(function(t) {
      t = t + e.charAt(0).toUpperCase() + e.substring(1), Zr[t] = Zr[e];
    });
  });
  function fu(e, t, n) {
    return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || Zr.hasOwnProperty(e) && Zr[e] ? ("" + t).trim() : t + "px";
  }
  function pu(e, t) {
    e = e.style;
    for (var n in t) if (t.hasOwnProperty(n)) {
      var s = n.indexOf("--") === 0, l = fu(n, t[n], s);
      n === "float" && (n = "cssFloat"), s ? e.setProperty(n, l) : e[n] = l;
    }
  }
  var Dp = U({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
  function Ni(e, t) {
    if (t) {
      if (Dp[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(i(137, e));
      if (t.dangerouslySetInnerHTML != null) {
        if (t.children != null) throw Error(i(60));
        if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(i(61));
      }
      if (t.style != null && typeof t.style != "object") throw Error(i(62));
    }
  }
  function Ti(e, t) {
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
  var bi = null;
  function Ai(e) {
    return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
  }
  var Ri = null, gr = null, yr = null;
  function hu(e) {
    if (e = ws(e)) {
      if (typeof Ri != "function") throw Error(i(280));
      var t = e.stateNode;
      t && (t = yo(t), Ri(e.stateNode, e.type, t));
    }
  }
  function mu(e) {
    gr ? yr ? yr.push(e) : yr = [e] : gr = e;
  }
  function vu() {
    if (gr) {
      var e = gr, t = yr;
      if (yr = gr = null, hu(e), t) for (e = 0; e < t.length; e++) hu(t[e]);
    }
  }
  function gu(e, t) {
    return e(t);
  }
  function yu() {
  }
  var Pi = !1;
  function _u(e, t, n) {
    if (Pi) return e(t, n);
    Pi = !0;
    try {
      return gu(e, t, n);
    } finally {
      Pi = !1, (gr !== null || yr !== null) && (yu(), vu());
    }
  }
  function es(e, t) {
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
  var $i = !1;
  if (h) try {
    var ts = {};
    Object.defineProperty(ts, "passive", { get: function() {
      $i = !0;
    } }), window.addEventListener("test", ts, ts), window.removeEventListener("test", ts, ts);
  } catch {
    $i = !1;
  }
  function Lp(e, t, n, s, l, c, m, S, T) {
    var L = Array.prototype.slice.call(arguments, 3);
    try {
      t.apply(n, L);
    } catch (q) {
      this.onError(q);
    }
  }
  var ns = !1, Ys = null, Js = !1, Mi = null, Op = { onError: function(e) {
    ns = !0, Ys = e;
  } };
  function zp(e, t, n, s, l, c, m, S, T) {
    ns = !1, Ys = null, Lp.apply(Op, arguments);
  }
  function Hp(e, t, n, s, l, c, m, S, T) {
    if (zp.apply(this, arguments), ns) {
      if (ns) {
        var L = Ys;
        ns = !1, Ys = null;
      } else throw Error(i(198));
      Js || (Js = !0, Mi = L);
    }
  }
  function Yn(e) {
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
  function xu(e) {
    if (e.tag === 13) {
      var t = e.memoizedState;
      if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
    }
    return null;
  }
  function wu(e) {
    if (Yn(e) !== e) throw Error(i(188));
  }
  function Fp(e) {
    var t = e.alternate;
    if (!t) {
      if (t = Yn(e), t === null) throw Error(i(188));
      return t !== e ? null : e;
    }
    for (var n = e, s = t; ; ) {
      var l = n.return;
      if (l === null) break;
      var c = l.alternate;
      if (c === null) {
        if (s = l.return, s !== null) {
          n = s;
          continue;
        }
        break;
      }
      if (l.child === c.child) {
        for (c = l.child; c; ) {
          if (c === n) return wu(l), e;
          if (c === s) return wu(l), t;
          c = c.sibling;
        }
        throw Error(i(188));
      }
      if (n.return !== s.return) n = l, s = c;
      else {
        for (var m = !1, S = l.child; S; ) {
          if (S === n) {
            m = !0, n = l, s = c;
            break;
          }
          if (S === s) {
            m = !0, s = l, n = c;
            break;
          }
          S = S.sibling;
        }
        if (!m) {
          for (S = c.child; S; ) {
            if (S === n) {
              m = !0, n = c, s = l;
              break;
            }
            if (S === s) {
              m = !0, s = c, n = l;
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
  function ku(e) {
    return e = Fp(e), e !== null ? Su(e) : null;
  }
  function Su(e) {
    if (e.tag === 5 || e.tag === 6) return e;
    for (e = e.child; e !== null; ) {
      var t = Su(e);
      if (t !== null) return t;
      e = e.sibling;
    }
    return null;
  }
  var ju = a.unstable_scheduleCallback, Cu = a.unstable_cancelCallback, Wp = a.unstable_shouldYield, Bp = a.unstable_requestPaint, Ue = a.unstable_now, Up = a.unstable_getCurrentPriorityLevel, Ii = a.unstable_ImmediatePriority, Eu = a.unstable_UserBlockingPriority, Gs = a.unstable_NormalPriority, Vp = a.unstable_LowPriority, Nu = a.unstable_IdlePriority, Xs = null, Zt = null;
  function qp(e) {
    if (Zt && typeof Zt.onCommitFiberRoot == "function") try {
      Zt.onCommitFiberRoot(Xs, e, void 0, (e.current.flags & 128) === 128);
    } catch {
    }
  }
  var Bt = Math.clz32 ? Math.clz32 : Yp, Qp = Math.log, Kp = Math.LN2;
  function Yp(e) {
    return e >>>= 0, e === 0 ? 32 : 31 - (Qp(e) / Kp | 0) | 0;
  }
  var Zs = 64, eo = 4194304;
  function rs(e) {
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
  function to(e, t) {
    var n = e.pendingLanes;
    if (n === 0) return 0;
    var s = 0, l = e.suspendedLanes, c = e.pingedLanes, m = n & 268435455;
    if (m !== 0) {
      var S = m & ~l;
      S !== 0 ? s = rs(S) : (c &= m, c !== 0 && (s = rs(c)));
    } else m = n & ~l, m !== 0 ? s = rs(m) : c !== 0 && (s = rs(c));
    if (s === 0) return 0;
    if (t !== 0 && t !== s && (t & l) === 0 && (l = s & -s, c = t & -t, l >= c || l === 16 && (c & 4194240) !== 0)) return t;
    if ((s & 4) !== 0 && (s |= n & 16), t = e.entangledLanes, t !== 0) for (e = e.entanglements, t &= s; 0 < t; ) n = 31 - Bt(t), l = 1 << n, s |= e[n], t &= ~l;
    return s;
  }
  function Jp(e, t) {
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
  function Gp(e, t) {
    for (var n = e.suspendedLanes, s = e.pingedLanes, l = e.expirationTimes, c = e.pendingLanes; 0 < c; ) {
      var m = 31 - Bt(c), S = 1 << m, T = l[m];
      T === -1 ? ((S & n) === 0 || (S & s) !== 0) && (l[m] = Jp(S, t)) : T <= t && (e.expiredLanes |= S), c &= ~S;
    }
  }
  function Di(e) {
    return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
  }
  function Tu() {
    var e = Zs;
    return Zs <<= 1, (Zs & 4194240) === 0 && (Zs = 64), e;
  }
  function Li(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t;
  }
  function ss(e, t, n) {
    e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - Bt(t), e[t] = n;
  }
  function Xp(e, t) {
    var n = e.pendingLanes & ~t;
    e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
    var s = e.eventTimes;
    for (e = e.expirationTimes; 0 < n; ) {
      var l = 31 - Bt(n), c = 1 << l;
      t[l] = 0, s[l] = -1, e[l] = -1, n &= ~c;
    }
  }
  function Oi(e, t) {
    var n = e.entangledLanes |= t;
    for (e = e.entanglements; n; ) {
      var s = 31 - Bt(n), l = 1 << s;
      l & t | e[s] & t && (e[s] |= t), n &= ~l;
    }
  }
  var Pe = 0;
  function bu(e) {
    return e &= -e, 1 < e ? 4 < e ? (e & 268435455) !== 0 ? 16 : 536870912 : 4 : 1;
  }
  var Au, zi, Ru, Pu, $u, Hi = !1, no = [], Sn = null, jn = null, Cn = null, os = /* @__PURE__ */ new Map(), is = /* @__PURE__ */ new Map(), En = [], Zp = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
  function Mu(e, t) {
    switch (e) {
      case "focusin":
      case "focusout":
        Sn = null;
        break;
      case "dragenter":
      case "dragleave":
        jn = null;
        break;
      case "mouseover":
      case "mouseout":
        Cn = null;
        break;
      case "pointerover":
      case "pointerout":
        os.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        is.delete(t.pointerId);
    }
  }
  function as(e, t, n, s, l, c) {
    return e === null || e.nativeEvent !== c ? (e = { blockedOn: t, domEventName: n, eventSystemFlags: s, nativeEvent: c, targetContainers: [l] }, t !== null && (t = ws(t), t !== null && zi(t)), e) : (e.eventSystemFlags |= s, t = e.targetContainers, l !== null && t.indexOf(l) === -1 && t.push(l), e);
  }
  function eh(e, t, n, s, l) {
    switch (t) {
      case "focusin":
        return Sn = as(Sn, e, t, n, s, l), !0;
      case "dragenter":
        return jn = as(jn, e, t, n, s, l), !0;
      case "mouseover":
        return Cn = as(Cn, e, t, n, s, l), !0;
      case "pointerover":
        var c = l.pointerId;
        return os.set(c, as(os.get(c) || null, e, t, n, s, l)), !0;
      case "gotpointercapture":
        return c = l.pointerId, is.set(c, as(is.get(c) || null, e, t, n, s, l)), !0;
    }
    return !1;
  }
  function Iu(e) {
    var t = Jn(e.target);
    if (t !== null) {
      var n = Yn(t);
      if (n !== null) {
        if (t = n.tag, t === 13) {
          if (t = xu(n), t !== null) {
            e.blockedOn = t, $u(e.priority, function() {
              Ru(n);
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
  function ro(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var n = Wi(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
      if (n === null) {
        n = e.nativeEvent;
        var s = new n.constructor(n.type, n);
        bi = s, n.target.dispatchEvent(s), bi = null;
      } else return t = ws(n), t !== null && zi(t), e.blockedOn = n, !1;
      t.shift();
    }
    return !0;
  }
  function Du(e, t, n) {
    ro(e) && n.delete(t);
  }
  function th() {
    Hi = !1, Sn !== null && ro(Sn) && (Sn = null), jn !== null && ro(jn) && (jn = null), Cn !== null && ro(Cn) && (Cn = null), os.forEach(Du), is.forEach(Du);
  }
  function ls(e, t) {
    e.blockedOn === t && (e.blockedOn = null, Hi || (Hi = !0, a.unstable_scheduleCallback(a.unstable_NormalPriority, th)));
  }
  function us(e) {
    function t(l) {
      return ls(l, e);
    }
    if (0 < no.length) {
      ls(no[0], e);
      for (var n = 1; n < no.length; n++) {
        var s = no[n];
        s.blockedOn === e && (s.blockedOn = null);
      }
    }
    for (Sn !== null && ls(Sn, e), jn !== null && ls(jn, e), Cn !== null && ls(Cn, e), os.forEach(t), is.forEach(t), n = 0; n < En.length; n++) s = En[n], s.blockedOn === e && (s.blockedOn = null);
    for (; 0 < En.length && (n = En[0], n.blockedOn === null); ) Iu(n), n.blockedOn === null && En.shift();
  }
  var _r = A.ReactCurrentBatchConfig, so = !0;
  function nh(e, t, n, s) {
    var l = Pe, c = _r.transition;
    _r.transition = null;
    try {
      Pe = 1, Fi(e, t, n, s);
    } finally {
      Pe = l, _r.transition = c;
    }
  }
  function rh(e, t, n, s) {
    var l = Pe, c = _r.transition;
    _r.transition = null;
    try {
      Pe = 4, Fi(e, t, n, s);
    } finally {
      Pe = l, _r.transition = c;
    }
  }
  function Fi(e, t, n, s) {
    if (so) {
      var l = Wi(e, t, n, s);
      if (l === null) oa(e, t, s, oo, n), Mu(e, s);
      else if (eh(l, e, t, n, s)) s.stopPropagation();
      else if (Mu(e, s), t & 4 && -1 < Zp.indexOf(e)) {
        for (; l !== null; ) {
          var c = ws(l);
          if (c !== null && Au(c), c = Wi(e, t, n, s), c === null && oa(e, t, s, oo, n), c === l) break;
          l = c;
        }
        l !== null && s.stopPropagation();
      } else oa(e, t, s, null, n);
    }
  }
  var oo = null;
  function Wi(e, t, n, s) {
    if (oo = null, e = Ai(s), e = Jn(e), e !== null) if (t = Yn(e), t === null) e = null;
    else if (n = t.tag, n === 13) {
      if (e = xu(t), e !== null) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
    return oo = e, null;
  }
  function Lu(e) {
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
        switch (Up()) {
          case Ii:
            return 1;
          case Eu:
            return 4;
          case Gs:
          case Vp:
            return 16;
          case Nu:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var Nn = null, Bi = null, io = null;
  function Ou() {
    if (io) return io;
    var e, t = Bi, n = t.length, s, l = "value" in Nn ? Nn.value : Nn.textContent, c = l.length;
    for (e = 0; e < n && t[e] === l[e]; e++) ;
    var m = n - e;
    for (s = 1; s <= m && t[n - s] === l[c - s]; s++) ;
    return io = l.slice(e, 1 < s ? 1 - s : void 0);
  }
  function ao(e) {
    var t = e.keyCode;
    return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
  }
  function lo() {
    return !0;
  }
  function zu() {
    return !1;
  }
  function Nt(e) {
    function t(n, s, l, c, m) {
      this._reactName = n, this._targetInst = l, this.type = s, this.nativeEvent = c, this.target = m, this.currentTarget = null;
      for (var S in e) e.hasOwnProperty(S) && (n = e[S], this[S] = n ? n(c) : c[S]);
      return this.isDefaultPrevented = (c.defaultPrevented != null ? c.defaultPrevented : c.returnValue === !1) ? lo : zu, this.isPropagationStopped = zu, this;
    }
    return U(t.prototype, { preventDefault: function() {
      this.defaultPrevented = !0;
      var n = this.nativeEvent;
      n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = lo);
    }, stopPropagation: function() {
      var n = this.nativeEvent;
      n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = lo);
    }, persist: function() {
    }, isPersistent: lo }), t;
  }
  var xr = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
    return e.timeStamp || Date.now();
  }, defaultPrevented: 0, isTrusted: 0 }, Ui = Nt(xr), cs = U({}, xr, { view: 0, detail: 0 }), sh = Nt(cs), Vi, qi, ds, uo = U({}, cs, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: Ki, button: 0, buttons: 0, relatedTarget: function(e) {
    return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
  }, movementX: function(e) {
    return "movementX" in e ? e.movementX : (e !== ds && (ds && e.type === "mousemove" ? (Vi = e.screenX - ds.screenX, qi = e.screenY - ds.screenY) : qi = Vi = 0, ds = e), Vi);
  }, movementY: function(e) {
    return "movementY" in e ? e.movementY : qi;
  } }), Hu = Nt(uo), oh = U({}, uo, { dataTransfer: 0 }), ih = Nt(oh), ah = U({}, cs, { relatedTarget: 0 }), Qi = Nt(ah), lh = U({}, xr, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), uh = Nt(lh), ch = U({}, xr, { clipboardData: function(e) {
    return "clipboardData" in e ? e.clipboardData : window.clipboardData;
  } }), dh = Nt(ch), fh = U({}, xr, { data: 0 }), Fu = Nt(fh), ph = {
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
  }, hh = {
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
  }, mh = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function vh(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = mh[e]) ? !!t[e] : !1;
  }
  function Ki() {
    return vh;
  }
  var gh = U({}, cs, { key: function(e) {
    if (e.key) {
      var t = ph[e.key] || e.key;
      if (t !== "Unidentified") return t;
    }
    return e.type === "keypress" ? (e = ao(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? hh[e.keyCode] || "Unidentified" : "";
  }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: Ki, charCode: function(e) {
    return e.type === "keypress" ? ao(e) : 0;
  }, keyCode: function(e) {
    return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
  }, which: function(e) {
    return e.type === "keypress" ? ao(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
  } }), yh = Nt(gh), _h = U({}, uo, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), Wu = Nt(_h), xh = U({}, cs, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: Ki }), wh = Nt(xh), kh = U({}, xr, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Sh = Nt(kh), jh = U({}, uo, {
    deltaX: function(e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function(e) {
      return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), Ch = Nt(jh), Eh = [9, 13, 27, 32], Yi = h && "CompositionEvent" in window, fs = null;
  h && "documentMode" in document && (fs = document.documentMode);
  var Nh = h && "TextEvent" in window && !fs, Bu = h && (!Yi || fs && 8 < fs && 11 >= fs), Uu = " ", Vu = !1;
  function qu(e, t) {
    switch (e) {
      case "keyup":
        return Eh.indexOf(t.keyCode) !== -1;
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
  function Qu(e) {
    return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
  }
  var wr = !1;
  function Th(e, t) {
    switch (e) {
      case "compositionend":
        return Qu(t);
      case "keypress":
        return t.which !== 32 ? null : (Vu = !0, Uu);
      case "textInput":
        return e = t.data, e === Uu && Vu ? null : e;
      default:
        return null;
    }
  }
  function bh(e, t) {
    if (wr) return e === "compositionend" || !Yi && qu(e, t) ? (e = Ou(), io = Bi = Nn = null, wr = !1, e) : null;
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
        return Bu && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var Ah = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
  function Ku(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!Ah[e.type] : t === "textarea";
  }
  function Yu(e, t, n, s) {
    mu(s), t = mo(t, "onChange"), 0 < t.length && (n = new Ui("onChange", "change", null, n, s), e.push({ event: n, listeners: t }));
  }
  var ps = null, hs = null;
  function Rh(e) {
    pc(e, 0);
  }
  function co(e) {
    var t = Er(e);
    if (kn(t)) return e;
  }
  function Ph(e, t) {
    if (e === "change") return t;
  }
  var Ju = !1;
  if (h) {
    var Ji;
    if (h) {
      var Gi = "oninput" in document;
      if (!Gi) {
        var Gu = document.createElement("div");
        Gu.setAttribute("oninput", "return;"), Gi = typeof Gu.oninput == "function";
      }
      Ji = Gi;
    } else Ji = !1;
    Ju = Ji && (!document.documentMode || 9 < document.documentMode);
  }
  function Xu() {
    ps && (ps.detachEvent("onpropertychange", Zu), hs = ps = null);
  }
  function Zu(e) {
    if (e.propertyName === "value" && co(hs)) {
      var t = [];
      Yu(t, hs, e, Ai(e)), _u(Rh, t);
    }
  }
  function $h(e, t, n) {
    e === "focusin" ? (Xu(), ps = t, hs = n, ps.attachEvent("onpropertychange", Zu)) : e === "focusout" && Xu();
  }
  function Mh(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown") return co(hs);
  }
  function Ih(e, t) {
    if (e === "click") return co(t);
  }
  function Dh(e, t) {
    if (e === "input" || e === "change") return co(t);
  }
  function Lh(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
  }
  var Ut = typeof Object.is == "function" ? Object.is : Lh;
  function ms(e, t) {
    if (Ut(e, t)) return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
    var n = Object.keys(e), s = Object.keys(t);
    if (n.length !== s.length) return !1;
    for (s = 0; s < n.length; s++) {
      var l = n[s];
      if (!y.call(t, l) || !Ut(e[l], t[l])) return !1;
    }
    return !0;
  }
  function ec(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function tc(e, t) {
    var n = ec(e);
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
      n = ec(n);
    }
  }
  function nc(e, t) {
    return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? nc(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
  }
  function rc() {
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
  function Xi(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
  }
  function Oh(e) {
    var t = rc(), n = e.focusedElem, s = e.selectionRange;
    if (t !== n && n && n.ownerDocument && nc(n.ownerDocument.documentElement, n)) {
      if (s !== null && Xi(n)) {
        if (t = s.start, e = s.end, e === void 0 && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
        else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
          e = e.getSelection();
          var l = n.textContent.length, c = Math.min(s.start, l);
          s = s.end === void 0 ? c : Math.min(s.end, l), !e.extend && c > s && (l = s, s = c, c = l), l = tc(n, c);
          var m = tc(
            n,
            s
          );
          l && m && (e.rangeCount !== 1 || e.anchorNode !== l.node || e.anchorOffset !== l.offset || e.focusNode !== m.node || e.focusOffset !== m.offset) && (t = t.createRange(), t.setStart(l.node, l.offset), e.removeAllRanges(), c > s ? (e.addRange(t), e.extend(m.node, m.offset)) : (t.setEnd(m.node, m.offset), e.addRange(t)));
        }
      }
      for (t = [], e = n; e = e.parentNode; ) e.nodeType === 1 && t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
      for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++) e = t[n], e.element.scrollLeft = e.left, e.element.scrollTop = e.top;
    }
  }
  var zh = h && "documentMode" in document && 11 >= document.documentMode, kr = null, Zi = null, vs = null, ea = !1;
  function sc(e, t, n) {
    var s = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    ea || kr == null || kr !== Z(s) || (s = kr, "selectionStart" in s && Xi(s) ? s = { start: s.selectionStart, end: s.selectionEnd } : (s = (s.ownerDocument && s.ownerDocument.defaultView || window).getSelection(), s = { anchorNode: s.anchorNode, anchorOffset: s.anchorOffset, focusNode: s.focusNode, focusOffset: s.focusOffset }), vs && ms(vs, s) || (vs = s, s = mo(Zi, "onSelect"), 0 < s.length && (t = new Ui("onSelect", "select", null, t, n), e.push({ event: t, listeners: s }), t.target = kr)));
  }
  function fo(e, t) {
    var n = {};
    return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
  }
  var Sr = { animationend: fo("Animation", "AnimationEnd"), animationiteration: fo("Animation", "AnimationIteration"), animationstart: fo("Animation", "AnimationStart"), transitionend: fo("Transition", "TransitionEnd") }, ta = {}, oc = {};
  h && (oc = document.createElement("div").style, "AnimationEvent" in window || (delete Sr.animationend.animation, delete Sr.animationiteration.animation, delete Sr.animationstart.animation), "TransitionEvent" in window || delete Sr.transitionend.transition);
  function po(e) {
    if (ta[e]) return ta[e];
    if (!Sr[e]) return e;
    var t = Sr[e], n;
    for (n in t) if (t.hasOwnProperty(n) && n in oc) return ta[e] = t[n];
    return e;
  }
  var ic = po("animationend"), ac = po("animationiteration"), lc = po("animationstart"), uc = po("transitionend"), cc = /* @__PURE__ */ new Map(), dc = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  function Tn(e, t) {
    cc.set(e, t), f(t, [e]);
  }
  for (var na = 0; na < dc.length; na++) {
    var ra = dc[na], Hh = ra.toLowerCase(), Fh = ra[0].toUpperCase() + ra.slice(1);
    Tn(Hh, "on" + Fh);
  }
  Tn(ic, "onAnimationEnd"), Tn(ac, "onAnimationIteration"), Tn(lc, "onAnimationStart"), Tn("dblclick", "onDoubleClick"), Tn("focusin", "onFocus"), Tn("focusout", "onBlur"), Tn(uc, "onTransitionEnd"), p("onMouseEnter", ["mouseout", "mouseover"]), p("onMouseLeave", ["mouseout", "mouseover"]), p("onPointerEnter", ["pointerout", "pointerover"]), p("onPointerLeave", ["pointerout", "pointerover"]), f("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), f("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), f("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), f("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), f("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), f("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var gs = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), Wh = new Set("cancel close invalid load scroll toggle".split(" ").concat(gs));
  function fc(e, t, n) {
    var s = e.type || "unknown-event";
    e.currentTarget = n, Hp(s, t, void 0, e), e.currentTarget = null;
  }
  function pc(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
      var s = e[n], l = s.event;
      s = s.listeners;
      e: {
        var c = void 0;
        if (t) for (var m = s.length - 1; 0 <= m; m--) {
          var S = s[m], T = S.instance, L = S.currentTarget;
          if (S = S.listener, T !== c && l.isPropagationStopped()) break e;
          fc(l, S, L), c = T;
        }
        else for (m = 0; m < s.length; m++) {
          if (S = s[m], T = S.instance, L = S.currentTarget, S = S.listener, T !== c && l.isPropagationStopped()) break e;
          fc(l, S, L), c = T;
        }
      }
    }
    if (Js) throw e = Mi, Js = !1, Mi = null, e;
  }
  function Ie(e, t) {
    var n = t[da];
    n === void 0 && (n = t[da] = /* @__PURE__ */ new Set());
    var s = e + "__bubble";
    n.has(s) || (hc(t, e, 2, !1), n.add(s));
  }
  function sa(e, t, n) {
    var s = 0;
    t && (s |= 4), hc(n, e, s, t);
  }
  var ho = "_reactListening" + Math.random().toString(36).slice(2);
  function ys(e) {
    if (!e[ho]) {
      e[ho] = !0, u.forEach(function(n) {
        n !== "selectionchange" && (Wh.has(n) || sa(n, !1, e), sa(n, !0, e));
      });
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[ho] || (t[ho] = !0, sa("selectionchange", !1, t));
    }
  }
  function hc(e, t, n, s) {
    switch (Lu(t)) {
      case 1:
        var l = nh;
        break;
      case 4:
        l = rh;
        break;
      default:
        l = Fi;
    }
    n = l.bind(null, t, n, e), l = void 0, !$i || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (l = !0), s ? l !== void 0 ? e.addEventListener(t, n, { capture: !0, passive: l }) : e.addEventListener(t, n, !0) : l !== void 0 ? e.addEventListener(t, n, { passive: l }) : e.addEventListener(t, n, !1);
  }
  function oa(e, t, n, s, l) {
    var c = s;
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
          if (m = Jn(S), m === null) return;
          if (T = m.tag, T === 5 || T === 6) {
            s = c = m;
            continue e;
          }
          S = S.parentNode;
        }
      }
      s = s.return;
    }
    _u(function() {
      var L = c, q = Ai(n), Q = [];
      e: {
        var V = cc.get(e);
        if (V !== void 0) {
          var ee = Ui, re = e;
          switch (e) {
            case "keypress":
              if (ao(n) === 0) break e;
            case "keydown":
            case "keyup":
              ee = yh;
              break;
            case "focusin":
              re = "focus", ee = Qi;
              break;
            case "focusout":
              re = "blur", ee = Qi;
              break;
            case "beforeblur":
            case "afterblur":
              ee = Qi;
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
              ee = Hu;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              ee = ih;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              ee = wh;
              break;
            case ic:
            case ac:
            case lc:
              ee = uh;
              break;
            case uc:
              ee = Sh;
              break;
            case "scroll":
              ee = sh;
              break;
            case "wheel":
              ee = Ch;
              break;
            case "copy":
            case "cut":
            case "paste":
              ee = dh;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              ee = Wu;
          }
          var se = (t & 4) !== 0, Ve = !se && e === "scroll", I = se ? V !== null ? V + "Capture" : null : V;
          se = [];
          for (var R = L, D; R !== null; ) {
            D = R;
            var G = D.stateNode;
            if (D.tag === 5 && G !== null && (D = G, I !== null && (G = es(R, I), G != null && se.push(_s(R, G, D)))), Ve) break;
            R = R.return;
          }
          0 < se.length && (V = new ee(V, re, null, n, q), Q.push({ event: V, listeners: se }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (V = e === "mouseover" || e === "pointerover", ee = e === "mouseout" || e === "pointerout", V && n !== bi && (re = n.relatedTarget || n.fromElement) && (Jn(re) || re[un])) break e;
          if ((ee || V) && (V = q.window === q ? q : (V = q.ownerDocument) ? V.defaultView || V.parentWindow : window, ee ? (re = n.relatedTarget || n.toElement, ee = L, re = re ? Jn(re) : null, re !== null && (Ve = Yn(re), re !== Ve || re.tag !== 5 && re.tag !== 6) && (re = null)) : (ee = null, re = L), ee !== re)) {
            if (se = Hu, G = "onMouseLeave", I = "onMouseEnter", R = "mouse", (e === "pointerout" || e === "pointerover") && (se = Wu, G = "onPointerLeave", I = "onPointerEnter", R = "pointer"), Ve = ee == null ? V : Er(ee), D = re == null ? V : Er(re), V = new se(G, R + "leave", ee, n, q), V.target = Ve, V.relatedTarget = D, G = null, Jn(q) === L && (se = new se(I, R + "enter", re, n, q), se.target = D, se.relatedTarget = Ve, G = se), Ve = G, ee && re) t: {
              for (se = ee, I = re, R = 0, D = se; D; D = jr(D)) R++;
              for (D = 0, G = I; G; G = jr(G)) D++;
              for (; 0 < R - D; ) se = jr(se), R--;
              for (; 0 < D - R; ) I = jr(I), D--;
              for (; R--; ) {
                if (se === I || I !== null && se === I.alternate) break t;
                se = jr(se), I = jr(I);
              }
              se = null;
            }
            else se = null;
            ee !== null && mc(Q, V, ee, se, !1), re !== null && Ve !== null && mc(Q, Ve, re, se, !0);
          }
        }
        e: {
          if (V = L ? Er(L) : window, ee = V.nodeName && V.nodeName.toLowerCase(), ee === "select" || ee === "input" && V.type === "file") var ae = Ph;
          else if (Ku(V)) if (Ju) ae = Dh;
          else {
            ae = Mh;
            var ue = $h;
          }
          else (ee = V.nodeName) && ee.toLowerCase() === "input" && (V.type === "checkbox" || V.type === "radio") && (ae = Ih);
          if (ae && (ae = ae(e, L))) {
            Yu(Q, ae, n, q);
            break e;
          }
          ue && ue(e, V, L), e === "focusout" && (ue = V._wrapperState) && ue.controlled && V.type === "number" && Kn(V, "number", V.value);
        }
        switch (ue = L ? Er(L) : window, e) {
          case "focusin":
            (Ku(ue) || ue.contentEditable === "true") && (kr = ue, Zi = L, vs = null);
            break;
          case "focusout":
            vs = Zi = kr = null;
            break;
          case "mousedown":
            ea = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            ea = !1, sc(Q, n, q);
            break;
          case "selectionchange":
            if (zh) break;
          case "keydown":
          case "keyup":
            sc(Q, n, q);
        }
        var ce;
        if (Yi) e: {
          switch (e) {
            case "compositionstart":
              var ve = "onCompositionStart";
              break e;
            case "compositionend":
              ve = "onCompositionEnd";
              break e;
            case "compositionupdate":
              ve = "onCompositionUpdate";
              break e;
          }
          ve = void 0;
        }
        else wr ? qu(e, n) && (ve = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (ve = "onCompositionStart");
        ve && (Bu && n.locale !== "ko" && (wr || ve !== "onCompositionStart" ? ve === "onCompositionEnd" && wr && (ce = Ou()) : (Nn = q, Bi = "value" in Nn ? Nn.value : Nn.textContent, wr = !0)), ue = mo(L, ve), 0 < ue.length && (ve = new Fu(ve, e, null, n, q), Q.push({ event: ve, listeners: ue }), ce ? ve.data = ce : (ce = Qu(n), ce !== null && (ve.data = ce)))), (ce = Nh ? Th(e, n) : bh(e, n)) && (L = mo(L, "onBeforeInput"), 0 < L.length && (q = new Fu("onBeforeInput", "beforeinput", null, n, q), Q.push({ event: q, listeners: L }), q.data = ce));
      }
      pc(Q, t);
    });
  }
  function _s(e, t, n) {
    return { instance: e, listener: t, currentTarget: n };
  }
  function mo(e, t) {
    for (var n = t + "Capture", s = []; e !== null; ) {
      var l = e, c = l.stateNode;
      l.tag === 5 && c !== null && (l = c, c = es(e, n), c != null && s.unshift(_s(e, c, l)), c = es(e, t), c != null && s.push(_s(e, c, l))), e = e.return;
    }
    return s;
  }
  function jr(e) {
    if (e === null) return null;
    do
      e = e.return;
    while (e && e.tag !== 5);
    return e || null;
  }
  function mc(e, t, n, s, l) {
    for (var c = t._reactName, m = []; n !== null && n !== s; ) {
      var S = n, T = S.alternate, L = S.stateNode;
      if (T !== null && T === s) break;
      S.tag === 5 && L !== null && (S = L, l ? (T = es(n, c), T != null && m.unshift(_s(n, T, S))) : l || (T = es(n, c), T != null && m.push(_s(n, T, S)))), n = n.return;
    }
    m.length !== 0 && e.push({ event: t, listeners: m });
  }
  var Bh = /\r\n?/g, Uh = /\u0000|\uFFFD/g;
  function vc(e) {
    return (typeof e == "string" ? e : "" + e).replace(Bh, `
`).replace(Uh, "");
  }
  function vo(e, t, n) {
    if (t = vc(t), vc(e) !== t && n) throw Error(i(425));
  }
  function go() {
  }
  var ia = null, aa = null;
  function la(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
  }
  var ua = typeof setTimeout == "function" ? setTimeout : void 0, Vh = typeof clearTimeout == "function" ? clearTimeout : void 0, gc = typeof Promise == "function" ? Promise : void 0, qh = typeof queueMicrotask == "function" ? queueMicrotask : typeof gc < "u" ? function(e) {
    return gc.resolve(null).then(e).catch(Qh);
  } : ua;
  function Qh(e) {
    setTimeout(function() {
      throw e;
    });
  }
  function ca(e, t) {
    var n = t, s = 0;
    do {
      var l = n.nextSibling;
      if (e.removeChild(n), l && l.nodeType === 8) if (n = l.data, n === "/$") {
        if (s === 0) {
          e.removeChild(l), us(t);
          return;
        }
        s--;
      } else n !== "$" && n !== "$?" && n !== "$!" || s++;
      n = l;
    } while (n);
    us(t);
  }
  function bn(e) {
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
  function yc(e) {
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
  var Cr = Math.random().toString(36).slice(2), en = "__reactFiber$" + Cr, xs = "__reactProps$" + Cr, un = "__reactContainer$" + Cr, da = "__reactEvents$" + Cr, Kh = "__reactListeners$" + Cr, Yh = "__reactHandles$" + Cr;
  function Jn(e) {
    var t = e[en];
    if (t) return t;
    for (var n = e.parentNode; n; ) {
      if (t = n[un] || n[en]) {
        if (n = t.alternate, t.child !== null || n !== null && n.child !== null) for (e = yc(e); e !== null; ) {
          if (n = e[en]) return n;
          e = yc(e);
        }
        return t;
      }
      e = n, n = e.parentNode;
    }
    return null;
  }
  function ws(e) {
    return e = e[en] || e[un], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
  }
  function Er(e) {
    if (e.tag === 5 || e.tag === 6) return e.stateNode;
    throw Error(i(33));
  }
  function yo(e) {
    return e[xs] || null;
  }
  var fa = [], Nr = -1;
  function An(e) {
    return { current: e };
  }
  function De(e) {
    0 > Nr || (e.current = fa[Nr], fa[Nr] = null, Nr--);
  }
  function Me(e, t) {
    Nr++, fa[Nr] = e.current, e.current = t;
  }
  var Rn = {}, ct = An(Rn), gt = An(!1), Gn = Rn;
  function Tr(e, t) {
    var n = e.type.contextTypes;
    if (!n) return Rn;
    var s = e.stateNode;
    if (s && s.__reactInternalMemoizedUnmaskedChildContext === t) return s.__reactInternalMemoizedMaskedChildContext;
    var l = {}, c;
    for (c in n) l[c] = t[c];
    return s && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = l), l;
  }
  function yt(e) {
    return e = e.childContextTypes, e != null;
  }
  function _o() {
    De(gt), De(ct);
  }
  function _c(e, t, n) {
    if (ct.current !== Rn) throw Error(i(168));
    Me(ct, t), Me(gt, n);
  }
  function xc(e, t, n) {
    var s = e.stateNode;
    if (t = t.childContextTypes, typeof s.getChildContext != "function") return n;
    s = s.getChildContext();
    for (var l in s) if (!(l in t)) throw Error(i(108, Ne(e) || "Unknown", l));
    return U({}, n, s);
  }
  function xo(e) {
    return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || Rn, Gn = ct.current, Me(ct, e), Me(gt, gt.current), !0;
  }
  function wc(e, t, n) {
    var s = e.stateNode;
    if (!s) throw Error(i(169));
    n ? (e = xc(e, t, Gn), s.__reactInternalMemoizedMergedChildContext = e, De(gt), De(ct), Me(ct, e)) : De(gt), Me(gt, n);
  }
  var cn = null, wo = !1, pa = !1;
  function kc(e) {
    cn === null ? cn = [e] : cn.push(e);
  }
  function Jh(e) {
    wo = !0, kc(e);
  }
  function Pn() {
    if (!pa && cn !== null) {
      pa = !0;
      var e = 0, t = Pe;
      try {
        var n = cn;
        for (Pe = 1; e < n.length; e++) {
          var s = n[e];
          do
            s = s(!0);
          while (s !== null);
        }
        cn = null, wo = !1;
      } catch (l) {
        throw cn !== null && (cn = cn.slice(e + 1)), ju(Ii, Pn), l;
      } finally {
        Pe = t, pa = !1;
      }
    }
    return null;
  }
  var br = [], Ar = 0, ko = null, So = 0, Mt = [], It = 0, Xn = null, dn = 1, fn = "";
  function Zn(e, t) {
    br[Ar++] = So, br[Ar++] = ko, ko = e, So = t;
  }
  function Sc(e, t, n) {
    Mt[It++] = dn, Mt[It++] = fn, Mt[It++] = Xn, Xn = e;
    var s = dn;
    e = fn;
    var l = 32 - Bt(s) - 1;
    s &= ~(1 << l), n += 1;
    var c = 32 - Bt(t) + l;
    if (30 < c) {
      var m = l - l % 5;
      c = (s & (1 << m) - 1).toString(32), s >>= m, l -= m, dn = 1 << 32 - Bt(t) + l | n << l | s, fn = c + e;
    } else dn = 1 << c | n << l | s, fn = e;
  }
  function ha(e) {
    e.return !== null && (Zn(e, 1), Sc(e, 1, 0));
  }
  function ma(e) {
    for (; e === ko; ) ko = br[--Ar], br[Ar] = null, So = br[--Ar], br[Ar] = null;
    for (; e === Xn; ) Xn = Mt[--It], Mt[It] = null, fn = Mt[--It], Mt[It] = null, dn = Mt[--It], Mt[It] = null;
  }
  var Tt = null, bt = null, Oe = !1, Vt = null;
  function jc(e, t) {
    var n = zt(5, null, null, 0);
    n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n);
  }
  function Cc(e, t) {
    switch (e.tag) {
      case 5:
        var n = e.type;
        return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, Tt = e, bt = bn(t.firstChild), !0) : !1;
      case 6:
        return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, Tt = e, bt = null, !0) : !1;
      case 13:
        return t = t.nodeType !== 8 ? null : t, t !== null ? (n = Xn !== null ? { id: dn, overflow: fn } : null, e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }, n = zt(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, Tt = e, bt = null, !0) : !1;
      default:
        return !1;
    }
  }
  function va(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
  }
  function ga(e) {
    if (Oe) {
      var t = bt;
      if (t) {
        var n = t;
        if (!Cc(e, t)) {
          if (va(e)) throw Error(i(418));
          t = bn(n.nextSibling);
          var s = Tt;
          t && Cc(e, t) ? jc(s, n) : (e.flags = e.flags & -4097 | 2, Oe = !1, Tt = e);
        }
      } else {
        if (va(e)) throw Error(i(418));
        e.flags = e.flags & -4097 | 2, Oe = !1, Tt = e;
      }
    }
  }
  function Ec(e) {
    for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
    Tt = e;
  }
  function jo(e) {
    if (e !== Tt) return !1;
    if (!Oe) return Ec(e), Oe = !0, !1;
    var t;
    if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !la(e.type, e.memoizedProps)), t && (t = bt)) {
      if (va(e)) throw Nc(), Error(i(418));
      for (; t; ) jc(e, t), t = bn(t.nextSibling);
    }
    if (Ec(e), e.tag === 13) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(i(317));
      e: {
        for (e = e.nextSibling, t = 0; e; ) {
          if (e.nodeType === 8) {
            var n = e.data;
            if (n === "/$") {
              if (t === 0) {
                bt = bn(e.nextSibling);
                break e;
              }
              t--;
            } else n !== "$" && n !== "$!" && n !== "$?" || t++;
          }
          e = e.nextSibling;
        }
        bt = null;
      }
    } else bt = Tt ? bn(e.stateNode.nextSibling) : null;
    return !0;
  }
  function Nc() {
    for (var e = bt; e; ) e = bn(e.nextSibling);
  }
  function Rr() {
    bt = Tt = null, Oe = !1;
  }
  function ya(e) {
    Vt === null ? Vt = [e] : Vt.push(e);
  }
  var Gh = A.ReactCurrentBatchConfig;
  function ks(e, t, n) {
    if (e = n.ref, e !== null && typeof e != "function" && typeof e != "object") {
      if (n._owner) {
        if (n = n._owner, n) {
          if (n.tag !== 1) throw Error(i(309));
          var s = n.stateNode;
        }
        if (!s) throw Error(i(147, e));
        var l = s, c = "" + e;
        return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === c ? t.ref : (t = function(m) {
          var S = l.refs;
          m === null ? delete S[c] : S[c] = m;
        }, t._stringRef = c, t);
      }
      if (typeof e != "string") throw Error(i(284));
      if (!n._owner) throw Error(i(290, e));
    }
    return e;
  }
  function Co(e, t) {
    throw e = Object.prototype.toString.call(t), Error(i(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e));
  }
  function Tc(e) {
    var t = e._init;
    return t(e._payload);
  }
  function bc(e) {
    function t(I, R) {
      if (e) {
        var D = I.deletions;
        D === null ? (I.deletions = [R], I.flags |= 16) : D.push(R);
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
      return I = Hn(I, R), I.index = 0, I.sibling = null, I;
    }
    function c(I, R, D) {
      return I.index = D, e ? (D = I.alternate, D !== null ? (D = D.index, D < R ? (I.flags |= 2, R) : D) : (I.flags |= 2, R)) : (I.flags |= 1048576, R);
    }
    function m(I) {
      return e && I.alternate === null && (I.flags |= 2), I;
    }
    function S(I, R, D, G) {
      return R === null || R.tag !== 6 ? (R = ul(D, I.mode, G), R.return = I, R) : (R = l(R, D), R.return = I, R);
    }
    function T(I, R, D, G) {
      var ae = D.type;
      return ae === Y ? q(I, R, D.props.children, G, D.key) : R !== null && (R.elementType === ae || typeof ae == "object" && ae !== null && ae.$$typeof === le && Tc(ae) === R.type) ? (G = l(R, D.props), G.ref = ks(I, R, D), G.return = I, G) : (G = Yo(D.type, D.key, D.props, null, I.mode, G), G.ref = ks(I, R, D), G.return = I, G);
    }
    function L(I, R, D, G) {
      return R === null || R.tag !== 4 || R.stateNode.containerInfo !== D.containerInfo || R.stateNode.implementation !== D.implementation ? (R = cl(D, I.mode, G), R.return = I, R) : (R = l(R, D.children || []), R.return = I, R);
    }
    function q(I, R, D, G, ae) {
      return R === null || R.tag !== 7 ? (R = ar(D, I.mode, G, ae), R.return = I, R) : (R = l(R, D), R.return = I, R);
    }
    function Q(I, R, D) {
      if (typeof R == "string" && R !== "" || typeof R == "number") return R = ul("" + R, I.mode, D), R.return = I, R;
      if (typeof R == "object" && R !== null) {
        switch (R.$$typeof) {
          case z:
            return D = Yo(R.type, R.key, R.props, null, I.mode, D), D.ref = ks(I, null, R), D.return = I, D;
          case O:
            return R = cl(R, I.mode, D), R.return = I, R;
          case le:
            var G = R._init;
            return Q(I, G(R._payload), D);
        }
        if (Gr(R) || J(R)) return R = ar(R, I.mode, D, null), R.return = I, R;
        Co(I, R);
      }
      return null;
    }
    function V(I, R, D, G) {
      var ae = R !== null ? R.key : null;
      if (typeof D == "string" && D !== "" || typeof D == "number") return ae !== null ? null : S(I, R, "" + D, G);
      if (typeof D == "object" && D !== null) {
        switch (D.$$typeof) {
          case z:
            return D.key === ae ? T(I, R, D, G) : null;
          case O:
            return D.key === ae ? L(I, R, D, G) : null;
          case le:
            return ae = D._init, V(
              I,
              R,
              ae(D._payload),
              G
            );
        }
        if (Gr(D) || J(D)) return ae !== null ? null : q(I, R, D, G, null);
        Co(I, D);
      }
      return null;
    }
    function ee(I, R, D, G, ae) {
      if (typeof G == "string" && G !== "" || typeof G == "number") return I = I.get(D) || null, S(R, I, "" + G, ae);
      if (typeof G == "object" && G !== null) {
        switch (G.$$typeof) {
          case z:
            return I = I.get(G.key === null ? D : G.key) || null, T(R, I, G, ae);
          case O:
            return I = I.get(G.key === null ? D : G.key) || null, L(R, I, G, ae);
          case le:
            var ue = G._init;
            return ee(I, R, D, ue(G._payload), ae);
        }
        if (Gr(G) || J(G)) return I = I.get(D) || null, q(R, I, G, ae, null);
        Co(R, G);
      }
      return null;
    }
    function re(I, R, D, G) {
      for (var ae = null, ue = null, ce = R, ve = R = 0, et = null; ce !== null && ve < D.length; ve++) {
        ce.index > ve ? (et = ce, ce = null) : et = ce.sibling;
        var Te = V(I, ce, D[ve], G);
        if (Te === null) {
          ce === null && (ce = et);
          break;
        }
        e && ce && Te.alternate === null && t(I, ce), R = c(Te, R, ve), ue === null ? ae = Te : ue.sibling = Te, ue = Te, ce = et;
      }
      if (ve === D.length) return n(I, ce), Oe && Zn(I, ve), ae;
      if (ce === null) {
        for (; ve < D.length; ve++) ce = Q(I, D[ve], G), ce !== null && (R = c(ce, R, ve), ue === null ? ae = ce : ue.sibling = ce, ue = ce);
        return Oe && Zn(I, ve), ae;
      }
      for (ce = s(I, ce); ve < D.length; ve++) et = ee(ce, I, ve, D[ve], G), et !== null && (e && et.alternate !== null && ce.delete(et.key === null ? ve : et.key), R = c(et, R, ve), ue === null ? ae = et : ue.sibling = et, ue = et);
      return e && ce.forEach(function(Fn) {
        return t(I, Fn);
      }), Oe && Zn(I, ve), ae;
    }
    function se(I, R, D, G) {
      var ae = J(D);
      if (typeof ae != "function") throw Error(i(150));
      if (D = ae.call(D), D == null) throw Error(i(151));
      for (var ue = ae = null, ce = R, ve = R = 0, et = null, Te = D.next(); ce !== null && !Te.done; ve++, Te = D.next()) {
        ce.index > ve ? (et = ce, ce = null) : et = ce.sibling;
        var Fn = V(I, ce, Te.value, G);
        if (Fn === null) {
          ce === null && (ce = et);
          break;
        }
        e && ce && Fn.alternate === null && t(I, ce), R = c(Fn, R, ve), ue === null ? ae = Fn : ue.sibling = Fn, ue = Fn, ce = et;
      }
      if (Te.done) return n(
        I,
        ce
      ), Oe && Zn(I, ve), ae;
      if (ce === null) {
        for (; !Te.done; ve++, Te = D.next()) Te = Q(I, Te.value, G), Te !== null && (R = c(Te, R, ve), ue === null ? ae = Te : ue.sibling = Te, ue = Te);
        return Oe && Zn(I, ve), ae;
      }
      for (ce = s(I, ce); !Te.done; ve++, Te = D.next()) Te = ee(ce, I, ve, Te.value, G), Te !== null && (e && Te.alternate !== null && ce.delete(Te.key === null ? ve : Te.key), R = c(Te, R, ve), ue === null ? ae = Te : ue.sibling = Te, ue = Te);
      return e && ce.forEach(function(Am) {
        return t(I, Am);
      }), Oe && Zn(I, ve), ae;
    }
    function Ve(I, R, D, G) {
      if (typeof D == "object" && D !== null && D.type === Y && D.key === null && (D = D.props.children), typeof D == "object" && D !== null) {
        switch (D.$$typeof) {
          case z:
            e: {
              for (var ae = D.key, ue = R; ue !== null; ) {
                if (ue.key === ae) {
                  if (ae = D.type, ae === Y) {
                    if (ue.tag === 7) {
                      n(I, ue.sibling), R = l(ue, D.props.children), R.return = I, I = R;
                      break e;
                    }
                  } else if (ue.elementType === ae || typeof ae == "object" && ae !== null && ae.$$typeof === le && Tc(ae) === ue.type) {
                    n(I, ue.sibling), R = l(ue, D.props), R.ref = ks(I, ue, D), R.return = I, I = R;
                    break e;
                  }
                  n(I, ue);
                  break;
                } else t(I, ue);
                ue = ue.sibling;
              }
              D.type === Y ? (R = ar(D.props.children, I.mode, G, D.key), R.return = I, I = R) : (G = Yo(D.type, D.key, D.props, null, I.mode, G), G.ref = ks(I, R, D), G.return = I, I = G);
            }
            return m(I);
          case O:
            e: {
              for (ue = D.key; R !== null; ) {
                if (R.key === ue) if (R.tag === 4 && R.stateNode.containerInfo === D.containerInfo && R.stateNode.implementation === D.implementation) {
                  n(I, R.sibling), R = l(R, D.children || []), R.return = I, I = R;
                  break e;
                } else {
                  n(I, R);
                  break;
                }
                else t(I, R);
                R = R.sibling;
              }
              R = cl(D, I.mode, G), R.return = I, I = R;
            }
            return m(I);
          case le:
            return ue = D._init, Ve(I, R, ue(D._payload), G);
        }
        if (Gr(D)) return re(I, R, D, G);
        if (J(D)) return se(I, R, D, G);
        Co(I, D);
      }
      return typeof D == "string" && D !== "" || typeof D == "number" ? (D = "" + D, R !== null && R.tag === 6 ? (n(I, R.sibling), R = l(R, D), R.return = I, I = R) : (n(I, R), R = ul(D, I.mode, G), R.return = I, I = R), m(I)) : n(I, R);
    }
    return Ve;
  }
  var Pr = bc(!0), Ac = bc(!1), Eo = An(null), No = null, $r = null, _a = null;
  function xa() {
    _a = $r = No = null;
  }
  function wa(e) {
    var t = Eo.current;
    De(Eo), e._currentValue = t;
  }
  function ka(e, t, n) {
    for (; e !== null; ) {
      var s = e.alternate;
      if ((e.childLanes & t) !== t ? (e.childLanes |= t, s !== null && (s.childLanes |= t)) : s !== null && (s.childLanes & t) !== t && (s.childLanes |= t), e === n) break;
      e = e.return;
    }
  }
  function Mr(e, t) {
    No = e, _a = $r = null, e = e.dependencies, e !== null && e.firstContext !== null && ((e.lanes & t) !== 0 && (_t = !0), e.firstContext = null);
  }
  function Dt(e) {
    var t = e._currentValue;
    if (_a !== e) if (e = { context: e, memoizedValue: t, next: null }, $r === null) {
      if (No === null) throw Error(i(308));
      $r = e, No.dependencies = { lanes: 0, firstContext: e };
    } else $r = $r.next = e;
    return t;
  }
  var er = null;
  function Sa(e) {
    er === null ? er = [e] : er.push(e);
  }
  function Rc(e, t, n, s) {
    var l = t.interleaved;
    return l === null ? (n.next = n, Sa(t)) : (n.next = l.next, l.next = n), t.interleaved = n, pn(e, s);
  }
  function pn(e, t) {
    e.lanes |= t;
    var n = e.alternate;
    for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; ) e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
    return n.tag === 3 ? n.stateNode : null;
  }
  var $n = !1;
  function ja(e) {
    e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
  }
  function Pc(e, t) {
    e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
  }
  function hn(e, t) {
    return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
  }
  function Mn(e, t, n) {
    var s = e.updateQueue;
    if (s === null) return null;
    if (s = s.shared, (Ee & 2) !== 0) {
      var l = s.pending;
      return l === null ? t.next = t : (t.next = l.next, l.next = t), s.pending = t, pn(e, n);
    }
    return l = s.interleaved, l === null ? (t.next = t, Sa(s)) : (t.next = l.next, l.next = t), s.interleaved = t, pn(e, n);
  }
  function To(e, t, n) {
    if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
      var s = t.lanes;
      s &= e.pendingLanes, n |= s, t.lanes = n, Oi(e, n);
    }
  }
  function $c(e, t) {
    var n = e.updateQueue, s = e.alternate;
    if (s !== null && (s = s.updateQueue, n === s)) {
      var l = null, c = null;
      if (n = n.firstBaseUpdate, n !== null) {
        do {
          var m = { eventTime: n.eventTime, lane: n.lane, tag: n.tag, payload: n.payload, callback: n.callback, next: null };
          c === null ? l = c = m : c = c.next = m, n = n.next;
        } while (n !== null);
        c === null ? l = c = t : c = c.next = t;
      } else l = c = t;
      n = { baseState: s.baseState, firstBaseUpdate: l, lastBaseUpdate: c, shared: s.shared, effects: s.effects }, e.updateQueue = n;
      return;
    }
    e = n.lastBaseUpdate, e === null ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t;
  }
  function bo(e, t, n, s) {
    var l = e.updateQueue;
    $n = !1;
    var c = l.firstBaseUpdate, m = l.lastBaseUpdate, S = l.shared.pending;
    if (S !== null) {
      l.shared.pending = null;
      var T = S, L = T.next;
      T.next = null, m === null ? c = L : m.next = L, m = T;
      var q = e.alternate;
      q !== null && (q = q.updateQueue, S = q.lastBaseUpdate, S !== m && (S === null ? q.firstBaseUpdate = L : S.next = L, q.lastBaseUpdate = T));
    }
    if (c !== null) {
      var Q = l.baseState;
      m = 0, q = L = T = null, S = c;
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
                $n = !0;
            }
          }
          S.callback !== null && S.lane !== 0 && (e.flags |= 64, V = l.effects, V === null ? l.effects = [S] : V.push(S));
        } else ee = { eventTime: ee, lane: V, tag: S.tag, payload: S.payload, callback: S.callback, next: null }, q === null ? (L = q = ee, T = Q) : q = q.next = ee, m |= V;
        if (S = S.next, S === null) {
          if (S = l.shared.pending, S === null) break;
          V = S, S = V.next, V.next = null, l.lastBaseUpdate = V, l.shared.pending = null;
        }
      } while (!0);
      if (q === null && (T = Q), l.baseState = T, l.firstBaseUpdate = L, l.lastBaseUpdate = q, t = l.shared.interleaved, t !== null) {
        l = t;
        do
          m |= l.lane, l = l.next;
        while (l !== t);
      } else c === null && (l.shared.lanes = 0);
      rr |= m, e.lanes = m, e.memoizedState = Q;
    }
  }
  function Mc(e, t, n) {
    if (e = t.effects, t.effects = null, e !== null) for (t = 0; t < e.length; t++) {
      var s = e[t], l = s.callback;
      if (l !== null) {
        if (s.callback = null, s = n, typeof l != "function") throw Error(i(191, l));
        l.call(s);
      }
    }
  }
  var Ss = {}, tn = An(Ss), js = An(Ss), Cs = An(Ss);
  function tr(e) {
    if (e === Ss) throw Error(i(174));
    return e;
  }
  function Ca(e, t) {
    switch (Me(Cs, t), Me(js, e), Me(tn, Ss), e = t.nodeType, e) {
      case 9:
      case 11:
        t = (t = t.documentElement) ? t.namespaceURI : Ei(null, "");
        break;
      default:
        e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = Ei(t, e);
    }
    De(tn), Me(tn, t);
  }
  function Ir() {
    De(tn), De(js), De(Cs);
  }
  function Ic(e) {
    tr(Cs.current);
    var t = tr(tn.current), n = Ei(t, e.type);
    t !== n && (Me(js, e), Me(tn, n));
  }
  function Ea(e) {
    js.current === e && (De(tn), De(js));
  }
  var Fe = An(0);
  function Ao(e) {
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
  var Na = [];
  function Ta() {
    for (var e = 0; e < Na.length; e++) Na[e]._workInProgressVersionPrimary = null;
    Na.length = 0;
  }
  var Ro = A.ReactCurrentDispatcher, ba = A.ReactCurrentBatchConfig, nr = 0, We = null, Je = null, Xe = null, Po = !1, Es = !1, Ns = 0, Xh = 0;
  function dt() {
    throw Error(i(321));
  }
  function Aa(e, t) {
    if (t === null) return !1;
    for (var n = 0; n < t.length && n < e.length; n++) if (!Ut(e[n], t[n])) return !1;
    return !0;
  }
  function Ra(e, t, n, s, l, c) {
    if (nr = c, We = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, Ro.current = e === null || e.memoizedState === null ? nm : rm, e = n(s, l), Es) {
      c = 0;
      do {
        if (Es = !1, Ns = 0, 25 <= c) throw Error(i(301));
        c += 1, Xe = Je = null, t.updateQueue = null, Ro.current = sm, e = n(s, l);
      } while (Es);
    }
    if (Ro.current = Io, t = Je !== null && Je.next !== null, nr = 0, Xe = Je = We = null, Po = !1, t) throw Error(i(300));
    return e;
  }
  function Pa() {
    var e = Ns !== 0;
    return Ns = 0, e;
  }
  function nn() {
    var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return Xe === null ? We.memoizedState = Xe = e : Xe = Xe.next = e, Xe;
  }
  function Lt() {
    if (Je === null) {
      var e = We.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = Je.next;
    var t = Xe === null ? We.memoizedState : Xe.next;
    if (t !== null) Xe = t, Je = e;
    else {
      if (e === null) throw Error(i(310));
      Je = e, e = { memoizedState: Je.memoizedState, baseState: Je.baseState, baseQueue: Je.baseQueue, queue: Je.queue, next: null }, Xe === null ? We.memoizedState = Xe = e : Xe = Xe.next = e;
    }
    return Xe;
  }
  function Ts(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function $a(e) {
    var t = Lt(), n = t.queue;
    if (n === null) throw Error(i(311));
    n.lastRenderedReducer = e;
    var s = Je, l = s.baseQueue, c = n.pending;
    if (c !== null) {
      if (l !== null) {
        var m = l.next;
        l.next = c.next, c.next = m;
      }
      s.baseQueue = l = c, n.pending = null;
    }
    if (l !== null) {
      c = l.next, s = s.baseState;
      var S = m = null, T = null, L = c;
      do {
        var q = L.lane;
        if ((nr & q) === q) T !== null && (T = T.next = { lane: 0, action: L.action, hasEagerState: L.hasEagerState, eagerState: L.eagerState, next: null }), s = L.hasEagerState ? L.eagerState : e(s, L.action);
        else {
          var Q = {
            lane: q,
            action: L.action,
            hasEagerState: L.hasEagerState,
            eagerState: L.eagerState,
            next: null
          };
          T === null ? (S = T = Q, m = s) : T = T.next = Q, We.lanes |= q, rr |= q;
        }
        L = L.next;
      } while (L !== null && L !== c);
      T === null ? m = s : T.next = S, Ut(s, t.memoizedState) || (_t = !0), t.memoizedState = s, t.baseState = m, t.baseQueue = T, n.lastRenderedState = s;
    }
    if (e = n.interleaved, e !== null) {
      l = e;
      do
        c = l.lane, We.lanes |= c, rr |= c, l = l.next;
      while (l !== e);
    } else l === null && (n.lanes = 0);
    return [t.memoizedState, n.dispatch];
  }
  function Ma(e) {
    var t = Lt(), n = t.queue;
    if (n === null) throw Error(i(311));
    n.lastRenderedReducer = e;
    var s = n.dispatch, l = n.pending, c = t.memoizedState;
    if (l !== null) {
      n.pending = null;
      var m = l = l.next;
      do
        c = e(c, m.action), m = m.next;
      while (m !== l);
      Ut(c, t.memoizedState) || (_t = !0), t.memoizedState = c, t.baseQueue === null && (t.baseState = c), n.lastRenderedState = c;
    }
    return [c, s];
  }
  function Dc() {
  }
  function Lc(e, t) {
    var n = We, s = Lt(), l = t(), c = !Ut(s.memoizedState, l);
    if (c && (s.memoizedState = l, _t = !0), s = s.queue, Ia(Hc.bind(null, n, s, e), [e]), s.getSnapshot !== t || c || Xe !== null && Xe.memoizedState.tag & 1) {
      if (n.flags |= 2048, bs(9, zc.bind(null, n, s, l, t), void 0, null), Ze === null) throw Error(i(349));
      (nr & 30) !== 0 || Oc(n, t, l);
    }
    return l;
  }
  function Oc(e, t, n) {
    e.flags |= 16384, e = { getSnapshot: t, value: n }, t = We.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, We.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
  }
  function zc(e, t, n, s) {
    t.value = n, t.getSnapshot = s, Fc(t) && Wc(e);
  }
  function Hc(e, t, n) {
    return n(function() {
      Fc(t) && Wc(e);
    });
  }
  function Fc(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var n = t();
      return !Ut(e, n);
    } catch {
      return !0;
    }
  }
  function Wc(e) {
    var t = pn(e, 1);
    t !== null && Yt(t, e, 1, -1);
  }
  function Bc(e) {
    var t = nn();
    return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Ts, lastRenderedState: e }, t.queue = e, e = e.dispatch = tm.bind(null, We, e), [t.memoizedState, e];
  }
  function bs(e, t, n, s) {
    return e = { tag: e, create: t, destroy: n, deps: s, next: null }, t = We.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, We.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (s = n.next, n.next = e, e.next = s, t.lastEffect = e)), e;
  }
  function Uc() {
    return Lt().memoizedState;
  }
  function $o(e, t, n, s) {
    var l = nn();
    We.flags |= e, l.memoizedState = bs(1 | t, n, void 0, s === void 0 ? null : s);
  }
  function Mo(e, t, n, s) {
    var l = Lt();
    s = s === void 0 ? null : s;
    var c = void 0;
    if (Je !== null) {
      var m = Je.memoizedState;
      if (c = m.destroy, s !== null && Aa(s, m.deps)) {
        l.memoizedState = bs(t, n, c, s);
        return;
      }
    }
    We.flags |= e, l.memoizedState = bs(1 | t, n, c, s);
  }
  function Vc(e, t) {
    return $o(8390656, 8, e, t);
  }
  function Ia(e, t) {
    return Mo(2048, 8, e, t);
  }
  function qc(e, t) {
    return Mo(4, 2, e, t);
  }
  function Qc(e, t) {
    return Mo(4, 4, e, t);
  }
  function Kc(e, t) {
    if (typeof t == "function") return e = e(), t(e), function() {
      t(null);
    };
    if (t != null) return e = e(), t.current = e, function() {
      t.current = null;
    };
  }
  function Yc(e, t, n) {
    return n = n != null ? n.concat([e]) : null, Mo(4, 4, Kc.bind(null, t, e), n);
  }
  function Da() {
  }
  function Jc(e, t) {
    var n = Lt();
    t = t === void 0 ? null : t;
    var s = n.memoizedState;
    return s !== null && t !== null && Aa(t, s[1]) ? s[0] : (n.memoizedState = [e, t], e);
  }
  function Gc(e, t) {
    var n = Lt();
    t = t === void 0 ? null : t;
    var s = n.memoizedState;
    return s !== null && t !== null && Aa(t, s[1]) ? s[0] : (e = e(), n.memoizedState = [e, t], e);
  }
  function Xc(e, t, n) {
    return (nr & 21) === 0 ? (e.baseState && (e.baseState = !1, _t = !0), e.memoizedState = n) : (Ut(n, t) || (n = Tu(), We.lanes |= n, rr |= n, e.baseState = !0), t);
  }
  function Zh(e, t) {
    var n = Pe;
    Pe = n !== 0 && 4 > n ? n : 4, e(!0);
    var s = ba.transition;
    ba.transition = {};
    try {
      e(!1), t();
    } finally {
      Pe = n, ba.transition = s;
    }
  }
  function Zc() {
    return Lt().memoizedState;
  }
  function em(e, t, n) {
    var s = On(e);
    if (n = { lane: s, action: n, hasEagerState: !1, eagerState: null, next: null }, ed(e)) td(t, n);
    else if (n = Rc(e, t, n, s), n !== null) {
      var l = vt();
      Yt(n, e, s, l), nd(n, t, s);
    }
  }
  function tm(e, t, n) {
    var s = On(e), l = { lane: s, action: n, hasEagerState: !1, eagerState: null, next: null };
    if (ed(e)) td(t, l);
    else {
      var c = e.alternate;
      if (e.lanes === 0 && (c === null || c.lanes === 0) && (c = t.lastRenderedReducer, c !== null)) try {
        var m = t.lastRenderedState, S = c(m, n);
        if (l.hasEagerState = !0, l.eagerState = S, Ut(S, m)) {
          var T = t.interleaved;
          T === null ? (l.next = l, Sa(t)) : (l.next = T.next, T.next = l), t.interleaved = l;
          return;
        }
      } catch {
      } finally {
      }
      n = Rc(e, t, l, s), n !== null && (l = vt(), Yt(n, e, s, l), nd(n, t, s));
    }
  }
  function ed(e) {
    var t = e.alternate;
    return e === We || t !== null && t === We;
  }
  function td(e, t) {
    Es = Po = !0;
    var n = e.pending;
    n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
  }
  function nd(e, t, n) {
    if ((n & 4194240) !== 0) {
      var s = t.lanes;
      s &= e.pendingLanes, n |= s, t.lanes = n, Oi(e, n);
    }
  }
  var Io = { readContext: Dt, useCallback: dt, useContext: dt, useEffect: dt, useImperativeHandle: dt, useInsertionEffect: dt, useLayoutEffect: dt, useMemo: dt, useReducer: dt, useRef: dt, useState: dt, useDebugValue: dt, useDeferredValue: dt, useTransition: dt, useMutableSource: dt, useSyncExternalStore: dt, useId: dt, unstable_isNewReconciler: !1 }, nm = { readContext: Dt, useCallback: function(e, t) {
    return nn().memoizedState = [e, t === void 0 ? null : t], e;
  }, useContext: Dt, useEffect: Vc, useImperativeHandle: function(e, t, n) {
    return n = n != null ? n.concat([e]) : null, $o(
      4194308,
      4,
      Kc.bind(null, t, e),
      n
    );
  }, useLayoutEffect: function(e, t) {
    return $o(4194308, 4, e, t);
  }, useInsertionEffect: function(e, t) {
    return $o(4, 2, e, t);
  }, useMemo: function(e, t) {
    var n = nn();
    return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e;
  }, useReducer: function(e, t, n) {
    var s = nn();
    return t = n !== void 0 ? n(t) : t, s.memoizedState = s.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, s.queue = e, e = e.dispatch = em.bind(null, We, e), [s.memoizedState, e];
  }, useRef: function(e) {
    var t = nn();
    return e = { current: e }, t.memoizedState = e;
  }, useState: Bc, useDebugValue: Da, useDeferredValue: function(e) {
    return nn().memoizedState = e;
  }, useTransition: function() {
    var e = Bc(!1), t = e[0];
    return e = Zh.bind(null, e[1]), nn().memoizedState = e, [t, e];
  }, useMutableSource: function() {
  }, useSyncExternalStore: function(e, t, n) {
    var s = We, l = nn();
    if (Oe) {
      if (n === void 0) throw Error(i(407));
      n = n();
    } else {
      if (n = t(), Ze === null) throw Error(i(349));
      (nr & 30) !== 0 || Oc(s, t, n);
    }
    l.memoizedState = n;
    var c = { value: n, getSnapshot: t };
    return l.queue = c, Vc(Hc.bind(
      null,
      s,
      c,
      e
    ), [e]), s.flags |= 2048, bs(9, zc.bind(null, s, c, n, t), void 0, null), n;
  }, useId: function() {
    var e = nn(), t = Ze.identifierPrefix;
    if (Oe) {
      var n = fn, s = dn;
      n = (s & ~(1 << 32 - Bt(s) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = Ns++, 0 < n && (t += "H" + n.toString(32)), t += ":";
    } else n = Xh++, t = ":" + t + "r" + n.toString(32) + ":";
    return e.memoizedState = t;
  }, unstable_isNewReconciler: !1 }, rm = {
    readContext: Dt,
    useCallback: Jc,
    useContext: Dt,
    useEffect: Ia,
    useImperativeHandle: Yc,
    useInsertionEffect: qc,
    useLayoutEffect: Qc,
    useMemo: Gc,
    useReducer: $a,
    useRef: Uc,
    useState: function() {
      return $a(Ts);
    },
    useDebugValue: Da,
    useDeferredValue: function(e) {
      var t = Lt();
      return Xc(t, Je.memoizedState, e);
    },
    useTransition: function() {
      var e = $a(Ts)[0], t = Lt().memoizedState;
      return [e, t];
    },
    useMutableSource: Dc,
    useSyncExternalStore: Lc,
    useId: Zc,
    unstable_isNewReconciler: !1
  }, sm = { readContext: Dt, useCallback: Jc, useContext: Dt, useEffect: Ia, useImperativeHandle: Yc, useInsertionEffect: qc, useLayoutEffect: Qc, useMemo: Gc, useReducer: Ma, useRef: Uc, useState: function() {
    return Ma(Ts);
  }, useDebugValue: Da, useDeferredValue: function(e) {
    var t = Lt();
    return Je === null ? t.memoizedState = e : Xc(t, Je.memoizedState, e);
  }, useTransition: function() {
    var e = Ma(Ts)[0], t = Lt().memoizedState;
    return [e, t];
  }, useMutableSource: Dc, useSyncExternalStore: Lc, useId: Zc, unstable_isNewReconciler: !1 };
  function qt(e, t) {
    if (e && e.defaultProps) {
      t = U({}, t), e = e.defaultProps;
      for (var n in e) t[n] === void 0 && (t[n] = e[n]);
      return t;
    }
    return t;
  }
  function La(e, t, n, s) {
    t = e.memoizedState, n = n(s, t), n = n == null ? t : U({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
  }
  var Do = { isMounted: function(e) {
    return (e = e._reactInternals) ? Yn(e) === e : !1;
  }, enqueueSetState: function(e, t, n) {
    e = e._reactInternals;
    var s = vt(), l = On(e), c = hn(s, l);
    c.payload = t, n != null && (c.callback = n), t = Mn(e, c, l), t !== null && (Yt(t, e, l, s), To(t, e, l));
  }, enqueueReplaceState: function(e, t, n) {
    e = e._reactInternals;
    var s = vt(), l = On(e), c = hn(s, l);
    c.tag = 1, c.payload = t, n != null && (c.callback = n), t = Mn(e, c, l), t !== null && (Yt(t, e, l, s), To(t, e, l));
  }, enqueueForceUpdate: function(e, t) {
    e = e._reactInternals;
    var n = vt(), s = On(e), l = hn(n, s);
    l.tag = 2, t != null && (l.callback = t), t = Mn(e, l, s), t !== null && (Yt(t, e, s, n), To(t, e, s));
  } };
  function rd(e, t, n, s, l, c, m) {
    return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(s, c, m) : t.prototype && t.prototype.isPureReactComponent ? !ms(n, s) || !ms(l, c) : !0;
  }
  function sd(e, t, n) {
    var s = !1, l = Rn, c = t.contextType;
    return typeof c == "object" && c !== null ? c = Dt(c) : (l = yt(t) ? Gn : ct.current, s = t.contextTypes, c = (s = s != null) ? Tr(e, l) : Rn), t = new t(n, c), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = Do, e.stateNode = t, t._reactInternals = e, s && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = l, e.__reactInternalMemoizedMaskedChildContext = c), t;
  }
  function od(e, t, n, s) {
    e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, s), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, s), t.state !== e && Do.enqueueReplaceState(t, t.state, null);
  }
  function Oa(e, t, n, s) {
    var l = e.stateNode;
    l.props = n, l.state = e.memoizedState, l.refs = {}, ja(e);
    var c = t.contextType;
    typeof c == "object" && c !== null ? l.context = Dt(c) : (c = yt(t) ? Gn : ct.current, l.context = Tr(e, c)), l.state = e.memoizedState, c = t.getDerivedStateFromProps, typeof c == "function" && (La(e, t, c, n), l.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof l.getSnapshotBeforeUpdate == "function" || typeof l.UNSAFE_componentWillMount != "function" && typeof l.componentWillMount != "function" || (t = l.state, typeof l.componentWillMount == "function" && l.componentWillMount(), typeof l.UNSAFE_componentWillMount == "function" && l.UNSAFE_componentWillMount(), t !== l.state && Do.enqueueReplaceState(l, l.state, null), bo(e, n, l, s), l.state = e.memoizedState), typeof l.componentDidMount == "function" && (e.flags |= 4194308);
  }
  function Dr(e, t) {
    try {
      var n = "", s = t;
      do
        n += xe(s), s = s.return;
      while (s);
      var l = n;
    } catch (c) {
      l = `
Error generating stack: ` + c.message + `
` + c.stack;
    }
    return { value: e, source: t, stack: l, digest: null };
  }
  function za(e, t, n) {
    return { value: e, source: null, stack: n ?? null, digest: t ?? null };
  }
  function Ha(e, t) {
    try {
      console.error(t.value);
    } catch (n) {
      setTimeout(function() {
        throw n;
      });
    }
  }
  var om = typeof WeakMap == "function" ? WeakMap : Map;
  function id(e, t, n) {
    n = hn(-1, n), n.tag = 3, n.payload = { element: null };
    var s = t.value;
    return n.callback = function() {
      Bo || (Bo = !0, tl = s), Ha(e, t);
    }, n;
  }
  function ad(e, t, n) {
    n = hn(-1, n), n.tag = 3;
    var s = e.type.getDerivedStateFromError;
    if (typeof s == "function") {
      var l = t.value;
      n.payload = function() {
        return s(l);
      }, n.callback = function() {
        Ha(e, t);
      };
    }
    var c = e.stateNode;
    return c !== null && typeof c.componentDidCatch == "function" && (n.callback = function() {
      Ha(e, t), typeof s != "function" && (Dn === null ? Dn = /* @__PURE__ */ new Set([this]) : Dn.add(this));
      var m = t.stack;
      this.componentDidCatch(t.value, { componentStack: m !== null ? m : "" });
    }), n;
  }
  function ld(e, t, n) {
    var s = e.pingCache;
    if (s === null) {
      s = e.pingCache = new om();
      var l = /* @__PURE__ */ new Set();
      s.set(t, l);
    } else l = s.get(t), l === void 0 && (l = /* @__PURE__ */ new Set(), s.set(t, l));
    l.has(n) || (l.add(n), e = _m.bind(null, e, t, n), t.then(e, e));
  }
  function ud(e) {
    do {
      var t;
      if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t) return e;
      e = e.return;
    } while (e !== null);
    return null;
  }
  function cd(e, t, n, s, l) {
    return (e.mode & 1) === 0 ? (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = hn(-1, 1), t.tag = 2, Mn(n, t, 1))), n.lanes |= 1), e) : (e.flags |= 65536, e.lanes = l, e);
  }
  var im = A.ReactCurrentOwner, _t = !1;
  function mt(e, t, n, s) {
    t.child = e === null ? Ac(t, null, n, s) : Pr(t, e.child, n, s);
  }
  function dd(e, t, n, s, l) {
    n = n.render;
    var c = t.ref;
    return Mr(t, l), s = Ra(e, t, n, s, c, l), n = Pa(), e !== null && !_t ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l, mn(e, t, l)) : (Oe && n && ha(t), t.flags |= 1, mt(e, t, s, l), t.child);
  }
  function fd(e, t, n, s, l) {
    if (e === null) {
      var c = n.type;
      return typeof c == "function" && !ll(c) && c.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = c, pd(e, t, c, s, l)) : (e = Yo(n.type, null, s, t, t.mode, l), e.ref = t.ref, e.return = t, t.child = e);
    }
    if (c = e.child, (e.lanes & l) === 0) {
      var m = c.memoizedProps;
      if (n = n.compare, n = n !== null ? n : ms, n(m, s) && e.ref === t.ref) return mn(e, t, l);
    }
    return t.flags |= 1, e = Hn(c, s), e.ref = t.ref, e.return = t, t.child = e;
  }
  function pd(e, t, n, s, l) {
    if (e !== null) {
      var c = e.memoizedProps;
      if (ms(c, s) && e.ref === t.ref) if (_t = !1, t.pendingProps = s = c, (e.lanes & l) !== 0) (e.flags & 131072) !== 0 && (_t = !0);
      else return t.lanes = e.lanes, mn(e, t, l);
    }
    return Fa(e, t, n, s, l);
  }
  function hd(e, t, n) {
    var s = t.pendingProps, l = s.children, c = e !== null ? e.memoizedState : null;
    if (s.mode === "hidden") if ((t.mode & 1) === 0) t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, Me(Or, At), At |= n;
    else {
      if ((n & 1073741824) === 0) return e = c !== null ? c.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, Me(Or, At), At |= e, null;
      t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, s = c !== null ? c.baseLanes : n, Me(Or, At), At |= s;
    }
    else c !== null ? (s = c.baseLanes | n, t.memoizedState = null) : s = n, Me(Or, At), At |= s;
    return mt(e, t, l, n), t.child;
  }
  function md(e, t) {
    var n = t.ref;
    (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
  }
  function Fa(e, t, n, s, l) {
    var c = yt(n) ? Gn : ct.current;
    return c = Tr(t, c), Mr(t, l), n = Ra(e, t, n, s, c, l), s = Pa(), e !== null && !_t ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l, mn(e, t, l)) : (Oe && s && ha(t), t.flags |= 1, mt(e, t, n, l), t.child);
  }
  function vd(e, t, n, s, l) {
    if (yt(n)) {
      var c = !0;
      xo(t);
    } else c = !1;
    if (Mr(t, l), t.stateNode === null) Oo(e, t), sd(t, n, s), Oa(t, n, s, l), s = !0;
    else if (e === null) {
      var m = t.stateNode, S = t.memoizedProps;
      m.props = S;
      var T = m.context, L = n.contextType;
      typeof L == "object" && L !== null ? L = Dt(L) : (L = yt(n) ? Gn : ct.current, L = Tr(t, L));
      var q = n.getDerivedStateFromProps, Q = typeof q == "function" || typeof m.getSnapshotBeforeUpdate == "function";
      Q || typeof m.UNSAFE_componentWillReceiveProps != "function" && typeof m.componentWillReceiveProps != "function" || (S !== s || T !== L) && od(t, m, s, L), $n = !1;
      var V = t.memoizedState;
      m.state = V, bo(t, s, m, l), T = t.memoizedState, S !== s || V !== T || gt.current || $n ? (typeof q == "function" && (La(t, n, q, s), T = t.memoizedState), (S = $n || rd(t, n, S, s, V, T, L)) ? (Q || typeof m.UNSAFE_componentWillMount != "function" && typeof m.componentWillMount != "function" || (typeof m.componentWillMount == "function" && m.componentWillMount(), typeof m.UNSAFE_componentWillMount == "function" && m.UNSAFE_componentWillMount()), typeof m.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof m.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = s, t.memoizedState = T), m.props = s, m.state = T, m.context = L, s = S) : (typeof m.componentDidMount == "function" && (t.flags |= 4194308), s = !1);
    } else {
      m = t.stateNode, Pc(e, t), S = t.memoizedProps, L = t.type === t.elementType ? S : qt(t.type, S), m.props = L, Q = t.pendingProps, V = m.context, T = n.contextType, typeof T == "object" && T !== null ? T = Dt(T) : (T = yt(n) ? Gn : ct.current, T = Tr(t, T));
      var ee = n.getDerivedStateFromProps;
      (q = typeof ee == "function" || typeof m.getSnapshotBeforeUpdate == "function") || typeof m.UNSAFE_componentWillReceiveProps != "function" && typeof m.componentWillReceiveProps != "function" || (S !== Q || V !== T) && od(t, m, s, T), $n = !1, V = t.memoizedState, m.state = V, bo(t, s, m, l);
      var re = t.memoizedState;
      S !== Q || V !== re || gt.current || $n ? (typeof ee == "function" && (La(t, n, ee, s), re = t.memoizedState), (L = $n || rd(t, n, L, s, V, re, T) || !1) ? (q || typeof m.UNSAFE_componentWillUpdate != "function" && typeof m.componentWillUpdate != "function" || (typeof m.componentWillUpdate == "function" && m.componentWillUpdate(s, re, T), typeof m.UNSAFE_componentWillUpdate == "function" && m.UNSAFE_componentWillUpdate(s, re, T)), typeof m.componentDidUpdate == "function" && (t.flags |= 4), typeof m.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof m.componentDidUpdate != "function" || S === e.memoizedProps && V === e.memoizedState || (t.flags |= 4), typeof m.getSnapshotBeforeUpdate != "function" || S === e.memoizedProps && V === e.memoizedState || (t.flags |= 1024), t.memoizedProps = s, t.memoizedState = re), m.props = s, m.state = re, m.context = T, s = L) : (typeof m.componentDidUpdate != "function" || S === e.memoizedProps && V === e.memoizedState || (t.flags |= 4), typeof m.getSnapshotBeforeUpdate != "function" || S === e.memoizedProps && V === e.memoizedState || (t.flags |= 1024), s = !1);
    }
    return Wa(e, t, n, s, c, l);
  }
  function Wa(e, t, n, s, l, c) {
    md(e, t);
    var m = (t.flags & 128) !== 0;
    if (!s && !m) return l && wc(t, n, !1), mn(e, t, c);
    s = t.stateNode, im.current = t;
    var S = m && typeof n.getDerivedStateFromError != "function" ? null : s.render();
    return t.flags |= 1, e !== null && m ? (t.child = Pr(t, e.child, null, c), t.child = Pr(t, null, S, c)) : mt(e, t, S, c), t.memoizedState = s.state, l && wc(t, n, !0), t.child;
  }
  function gd(e) {
    var t = e.stateNode;
    t.pendingContext ? _c(e, t.pendingContext, t.pendingContext !== t.context) : t.context && _c(e, t.context, !1), Ca(e, t.containerInfo);
  }
  function yd(e, t, n, s, l) {
    return Rr(), ya(l), t.flags |= 256, mt(e, t, n, s), t.child;
  }
  var Ba = { dehydrated: null, treeContext: null, retryLane: 0 };
  function Ua(e) {
    return { baseLanes: e, cachePool: null, transitions: null };
  }
  function _d(e, t, n) {
    var s = t.pendingProps, l = Fe.current, c = !1, m = (t.flags & 128) !== 0, S;
    if ((S = m) || (S = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0), S ? (c = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (l |= 1), Me(Fe, l & 1), e === null)
      return ga(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? ((t.mode & 1) === 0 ? t.lanes = 1 : e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824, null) : (m = s.children, e = s.fallback, c ? (s = t.mode, c = t.child, m = { mode: "hidden", children: m }, (s & 1) === 0 && c !== null ? (c.childLanes = 0, c.pendingProps = m) : c = Jo(m, s, 0, null), e = ar(e, s, n, null), c.return = t, e.return = t, c.sibling = e, t.child = c, t.child.memoizedState = Ua(n), t.memoizedState = Ba, e) : Va(t, m));
    if (l = e.memoizedState, l !== null && (S = l.dehydrated, S !== null)) return am(e, t, m, s, S, l, n);
    if (c) {
      c = s.fallback, m = t.mode, l = e.child, S = l.sibling;
      var T = { mode: "hidden", children: s.children };
      return (m & 1) === 0 && t.child !== l ? (s = t.child, s.childLanes = 0, s.pendingProps = T, t.deletions = null) : (s = Hn(l, T), s.subtreeFlags = l.subtreeFlags & 14680064), S !== null ? c = Hn(S, c) : (c = ar(c, m, n, null), c.flags |= 2), c.return = t, s.return = t, s.sibling = c, t.child = s, s = c, c = t.child, m = e.child.memoizedState, m = m === null ? Ua(n) : { baseLanes: m.baseLanes | n, cachePool: null, transitions: m.transitions }, c.memoizedState = m, c.childLanes = e.childLanes & ~n, t.memoizedState = Ba, s;
    }
    return c = e.child, e = c.sibling, s = Hn(c, { mode: "visible", children: s.children }), (t.mode & 1) === 0 && (s.lanes = n), s.return = t, s.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = s, t.memoizedState = null, s;
  }
  function Va(e, t) {
    return t = Jo({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t;
  }
  function Lo(e, t, n, s) {
    return s !== null && ya(s), Pr(t, e.child, null, n), e = Va(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
  }
  function am(e, t, n, s, l, c, m) {
    if (n)
      return t.flags & 256 ? (t.flags &= -257, s = za(Error(i(422))), Lo(e, t, m, s)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (c = s.fallback, l = t.mode, s = Jo({ mode: "visible", children: s.children }, l, 0, null), c = ar(c, l, m, null), c.flags |= 2, s.return = t, c.return = t, s.sibling = c, t.child = s, (t.mode & 1) !== 0 && Pr(t, e.child, null, m), t.child.memoizedState = Ua(m), t.memoizedState = Ba, c);
    if ((t.mode & 1) === 0) return Lo(e, t, m, null);
    if (l.data === "$!") {
      if (s = l.nextSibling && l.nextSibling.dataset, s) var S = s.dgst;
      return s = S, c = Error(i(419)), s = za(c, s, void 0), Lo(e, t, m, s);
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
        l = (l & (s.suspendedLanes | m)) !== 0 ? 0 : l, l !== 0 && l !== c.retryLane && (c.retryLane = l, pn(e, l), Yt(s, e, l, -1));
      }
      return al(), s = za(Error(i(421))), Lo(e, t, m, s);
    }
    return l.data === "$?" ? (t.flags |= 128, t.child = e.child, t = xm.bind(null, e), l._reactRetry = t, null) : (e = c.treeContext, bt = bn(l.nextSibling), Tt = t, Oe = !0, Vt = null, e !== null && (Mt[It++] = dn, Mt[It++] = fn, Mt[It++] = Xn, dn = e.id, fn = e.overflow, Xn = t), t = Va(t, s.children), t.flags |= 4096, t);
  }
  function xd(e, t, n) {
    e.lanes |= t;
    var s = e.alternate;
    s !== null && (s.lanes |= t), ka(e.return, t, n);
  }
  function qa(e, t, n, s, l) {
    var c = e.memoizedState;
    c === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: s, tail: n, tailMode: l } : (c.isBackwards = t, c.rendering = null, c.renderingStartTime = 0, c.last = s, c.tail = n, c.tailMode = l);
  }
  function wd(e, t, n) {
    var s = t.pendingProps, l = s.revealOrder, c = s.tail;
    if (mt(e, t, s.children, n), s = Fe.current, (s & 2) !== 0) s = s & 1 | 2, t.flags |= 128;
    else {
      if (e !== null && (e.flags & 128) !== 0) e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && xd(e, n, t);
        else if (e.tag === 19) xd(e, n, t);
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
    if (Me(Fe, s), (t.mode & 1) === 0) t.memoizedState = null;
    else switch (l) {
      case "forwards":
        for (n = t.child, l = null; n !== null; ) e = n.alternate, e !== null && Ao(e) === null && (l = n), n = n.sibling;
        n = l, n === null ? (l = t.child, t.child = null) : (l = n.sibling, n.sibling = null), qa(t, !1, l, n, c);
        break;
      case "backwards":
        for (n = null, l = t.child, t.child = null; l !== null; ) {
          if (e = l.alternate, e !== null && Ao(e) === null) {
            t.child = l;
            break;
          }
          e = l.sibling, l.sibling = n, n = l, l = e;
        }
        qa(t, !0, n, null, c);
        break;
      case "together":
        qa(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
    return t.child;
  }
  function Oo(e, t) {
    (t.mode & 1) === 0 && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2);
  }
  function mn(e, t, n) {
    if (e !== null && (t.dependencies = e.dependencies), rr |= t.lanes, (n & t.childLanes) === 0) return null;
    if (e !== null && t.child !== e.child) throw Error(i(153));
    if (t.child !== null) {
      for (e = t.child, n = Hn(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; ) e = e.sibling, n = n.sibling = Hn(e, e.pendingProps), n.return = t;
      n.sibling = null;
    }
    return t.child;
  }
  function lm(e, t, n) {
    switch (t.tag) {
      case 3:
        gd(t), Rr();
        break;
      case 5:
        Ic(t);
        break;
      case 1:
        yt(t.type) && xo(t);
        break;
      case 4:
        Ca(t, t.stateNode.containerInfo);
        break;
      case 10:
        var s = t.type._context, l = t.memoizedProps.value;
        Me(Eo, s._currentValue), s._currentValue = l;
        break;
      case 13:
        if (s = t.memoizedState, s !== null)
          return s.dehydrated !== null ? (Me(Fe, Fe.current & 1), t.flags |= 128, null) : (n & t.child.childLanes) !== 0 ? _d(e, t, n) : (Me(Fe, Fe.current & 1), e = mn(e, t, n), e !== null ? e.sibling : null);
        Me(Fe, Fe.current & 1);
        break;
      case 19:
        if (s = (n & t.childLanes) !== 0, (e.flags & 128) !== 0) {
          if (s) return wd(e, t, n);
          t.flags |= 128;
        }
        if (l = t.memoizedState, l !== null && (l.rendering = null, l.tail = null, l.lastEffect = null), Me(Fe, Fe.current), s) break;
        return null;
      case 22:
      case 23:
        return t.lanes = 0, hd(e, t, n);
    }
    return mn(e, t, n);
  }
  var kd, Qa, Sd, jd;
  kd = function(e, t) {
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
  }, Qa = function() {
  }, Sd = function(e, t, n, s) {
    var l = e.memoizedProps;
    if (l !== s) {
      e = t.stateNode, tr(tn.current);
      var c = null;
      switch (n) {
        case "input":
          l = _e(e, l), s = _e(e, s), c = [];
          break;
        case "select":
          l = U({}, l, { value: void 0 }), s = U({}, s, { value: void 0 }), c = [];
          break;
        case "textarea":
          l = Ci(e, l), s = Ci(e, s), c = [];
          break;
        default:
          typeof l.onClick != "function" && typeof s.onClick == "function" && (e.onclick = go);
      }
      Ni(n, s);
      var m;
      n = null;
      for (L in l) if (!s.hasOwnProperty(L) && l.hasOwnProperty(L) && l[L] != null) if (L === "style") {
        var S = l[L];
        for (m in S) S.hasOwnProperty(m) && (n || (n = {}), n[m] = "");
      } else L !== "dangerouslySetInnerHTML" && L !== "children" && L !== "suppressContentEditableWarning" && L !== "suppressHydrationWarning" && L !== "autoFocus" && (d.hasOwnProperty(L) ? c || (c = []) : (c = c || []).push(L, null));
      for (L in s) {
        var T = s[L];
        if (S = l != null ? l[L] : void 0, s.hasOwnProperty(L) && T !== S && (T != null || S != null)) if (L === "style") if (S) {
          for (m in S) !S.hasOwnProperty(m) || T && T.hasOwnProperty(m) || (n || (n = {}), n[m] = "");
          for (m in T) T.hasOwnProperty(m) && S[m] !== T[m] && (n || (n = {}), n[m] = T[m]);
        } else n || (c || (c = []), c.push(
          L,
          n
        )), n = T;
        else L === "dangerouslySetInnerHTML" ? (T = T ? T.__html : void 0, S = S ? S.__html : void 0, T != null && S !== T && (c = c || []).push(L, T)) : L === "children" ? typeof T != "string" && typeof T != "number" || (c = c || []).push(L, "" + T) : L !== "suppressContentEditableWarning" && L !== "suppressHydrationWarning" && (d.hasOwnProperty(L) ? (T != null && L === "onScroll" && Ie("scroll", e), c || S === T || (c = [])) : (c = c || []).push(L, T));
      }
      n && (c = c || []).push("style", n);
      var L = c;
      (t.updateQueue = L) && (t.flags |= 4);
    }
  }, jd = function(e, t, n, s) {
    n !== s && (t.flags |= 4);
  };
  function As(e, t) {
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
  function ft(e) {
    var t = e.alternate !== null && e.alternate.child === e.child, n = 0, s = 0;
    if (t) for (var l = e.child; l !== null; ) n |= l.lanes | l.childLanes, s |= l.subtreeFlags & 14680064, s |= l.flags & 14680064, l.return = e, l = l.sibling;
    else for (l = e.child; l !== null; ) n |= l.lanes | l.childLanes, s |= l.subtreeFlags, s |= l.flags, l.return = e, l = l.sibling;
    return e.subtreeFlags |= s, e.childLanes = n, t;
  }
  function um(e, t, n) {
    var s = t.pendingProps;
    switch (ma(t), t.tag) {
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
        return ft(t), null;
      case 1:
        return yt(t.type) && _o(), ft(t), null;
      case 3:
        return s = t.stateNode, Ir(), De(gt), De(ct), Ta(), s.pendingContext && (s.context = s.pendingContext, s.pendingContext = null), (e === null || e.child === null) && (jo(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024, Vt !== null && (sl(Vt), Vt = null))), Qa(e, t), ft(t), null;
      case 5:
        Ea(t);
        var l = tr(Cs.current);
        if (n = t.type, e !== null && t.stateNode != null) Sd(e, t, n, s, l), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
        else {
          if (!s) {
            if (t.stateNode === null) throw Error(i(166));
            return ft(t), null;
          }
          if (e = tr(tn.current), jo(t)) {
            s = t.stateNode, n = t.type;
            var c = t.memoizedProps;
            switch (s[en] = t, s[xs] = c, e = (t.mode & 1) !== 0, n) {
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
                for (l = 0; l < gs.length; l++) Ie(gs[l], s);
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
                Ae(s, c), Ie("invalid", s);
                break;
              case "select":
                s._wrapperState = { wasMultiple: !!c.multiple }, Ie("invalid", s);
                break;
              case "textarea":
                au(s, c), Ie("invalid", s);
            }
            Ni(n, c), l = null;
            for (var m in c) if (c.hasOwnProperty(m)) {
              var S = c[m];
              m === "children" ? typeof S == "string" ? s.textContent !== S && (c.suppressHydrationWarning !== !0 && vo(s.textContent, S, e), l = ["children", S]) : typeof S == "number" && s.textContent !== "" + S && (c.suppressHydrationWarning !== !0 && vo(
                s.textContent,
                S,
                e
              ), l = ["children", "" + S]) : d.hasOwnProperty(m) && S != null && m === "onScroll" && Ie("scroll", s);
            }
            switch (n) {
              case "input":
                Xt(s), Jr(s, c, !0);
                break;
              case "textarea":
                Xt(s), uu(s);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof c.onClick == "function" && (s.onclick = go);
            }
            s = l, t.updateQueue = s, s !== null && (t.flags |= 4);
          } else {
            m = l.nodeType === 9 ? l : l.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = cu(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = m.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof s.is == "string" ? e = m.createElement(n, { is: s.is }) : (e = m.createElement(n), n === "select" && (m = e, s.multiple ? m.multiple = !0 : s.size && (m.size = s.size))) : e = m.createElementNS(e, n), e[en] = t, e[xs] = s, kd(e, t, !1, !1), t.stateNode = e;
            e: {
              switch (m = Ti(n, s), n) {
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
                  for (l = 0; l < gs.length; l++) Ie(gs[l], e);
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
                  Ae(e, s), l = _e(e, s), Ie("invalid", e);
                  break;
                case "option":
                  l = s;
                  break;
                case "select":
                  e._wrapperState = { wasMultiple: !!s.multiple }, l = U({}, s, { value: void 0 }), Ie("invalid", e);
                  break;
                case "textarea":
                  au(e, s), l = Ci(e, s), Ie("invalid", e);
                  break;
                default:
                  l = s;
              }
              Ni(n, l), S = l;
              for (c in S) if (S.hasOwnProperty(c)) {
                var T = S[c];
                c === "style" ? pu(e, T) : c === "dangerouslySetInnerHTML" ? (T = T ? T.__html : void 0, T != null && du(e, T)) : c === "children" ? typeof T == "string" ? (n !== "textarea" || T !== "") && Xr(e, T) : typeof T == "number" && Xr(e, "" + T) : c !== "suppressContentEditableWarning" && c !== "suppressHydrationWarning" && c !== "autoFocus" && (d.hasOwnProperty(c) ? T != null && c === "onScroll" && Ie("scroll", e) : T != null && $(e, c, T, m));
              }
              switch (n) {
                case "input":
                  Xt(e), Jr(e, s, !1);
                  break;
                case "textarea":
                  Xt(e), uu(e);
                  break;
                case "option":
                  s.value != null && e.setAttribute("value", "" + Ce(s.value));
                  break;
                case "select":
                  e.multiple = !!s.multiple, c = s.value, c != null ? vr(e, !!s.multiple, c, !1) : s.defaultValue != null && vr(
                    e,
                    !!s.multiple,
                    s.defaultValue,
                    !0
                  );
                  break;
                default:
                  typeof l.onClick == "function" && (e.onclick = go);
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
        return ft(t), null;
      case 6:
        if (e && t.stateNode != null) jd(e, t, e.memoizedProps, s);
        else {
          if (typeof s != "string" && t.stateNode === null) throw Error(i(166));
          if (n = tr(Cs.current), tr(tn.current), jo(t)) {
            if (s = t.stateNode, n = t.memoizedProps, s[en] = t, (c = s.nodeValue !== n) && (e = Tt, e !== null)) switch (e.tag) {
              case 3:
                vo(s.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 && vo(s.nodeValue, n, (e.mode & 1) !== 0);
            }
            c && (t.flags |= 4);
          } else s = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(s), s[en] = t, t.stateNode = s;
        }
        return ft(t), null;
      case 13:
        if (De(Fe), s = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
          if (Oe && bt !== null && (t.mode & 1) !== 0 && (t.flags & 128) === 0) Nc(), Rr(), t.flags |= 98560, c = !1;
          else if (c = jo(t), s !== null && s.dehydrated !== null) {
            if (e === null) {
              if (!c) throw Error(i(318));
              if (c = t.memoizedState, c = c !== null ? c.dehydrated : null, !c) throw Error(i(317));
              c[en] = t;
            } else Rr(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            ft(t), c = !1;
          } else Vt !== null && (sl(Vt), Vt = null), c = !0;
          if (!c) return t.flags & 65536 ? t : null;
        }
        return (t.flags & 128) !== 0 ? (t.lanes = n, t) : (s = s !== null, s !== (e !== null && e.memoizedState !== null) && s && (t.child.flags |= 8192, (t.mode & 1) !== 0 && (e === null || (Fe.current & 1) !== 0 ? Ge === 0 && (Ge = 3) : al())), t.updateQueue !== null && (t.flags |= 4), ft(t), null);
      case 4:
        return Ir(), Qa(e, t), e === null && ys(t.stateNode.containerInfo), ft(t), null;
      case 10:
        return wa(t.type._context), ft(t), null;
      case 17:
        return yt(t.type) && _o(), ft(t), null;
      case 19:
        if (De(Fe), c = t.memoizedState, c === null) return ft(t), null;
        if (s = (t.flags & 128) !== 0, m = c.rendering, m === null) if (s) As(c, !1);
        else {
          if (Ge !== 0 || e !== null && (e.flags & 128) !== 0) for (e = t.child; e !== null; ) {
            if (m = Ao(e), m !== null) {
              for (t.flags |= 128, As(c, !1), s = m.updateQueue, s !== null && (t.updateQueue = s, t.flags |= 4), t.subtreeFlags = 0, s = n, n = t.child; n !== null; ) c = n, e = s, c.flags &= 14680066, m = c.alternate, m === null ? (c.childLanes = 0, c.lanes = e, c.child = null, c.subtreeFlags = 0, c.memoizedProps = null, c.memoizedState = null, c.updateQueue = null, c.dependencies = null, c.stateNode = null) : (c.childLanes = m.childLanes, c.lanes = m.lanes, c.child = m.child, c.subtreeFlags = 0, c.deletions = null, c.memoizedProps = m.memoizedProps, c.memoizedState = m.memoizedState, c.updateQueue = m.updateQueue, c.type = m.type, e = m.dependencies, c.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), n = n.sibling;
              return Me(Fe, Fe.current & 1 | 2), t.child;
            }
            e = e.sibling;
          }
          c.tail !== null && Ue() > zr && (t.flags |= 128, s = !0, As(c, !1), t.lanes = 4194304);
        }
        else {
          if (!s) if (e = Ao(m), e !== null) {
            if (t.flags |= 128, s = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), As(c, !0), c.tail === null && c.tailMode === "hidden" && !m.alternate && !Oe) return ft(t), null;
          } else 2 * Ue() - c.renderingStartTime > zr && n !== 1073741824 && (t.flags |= 128, s = !0, As(c, !1), t.lanes = 4194304);
          c.isBackwards ? (m.sibling = t.child, t.child = m) : (n = c.last, n !== null ? n.sibling = m : t.child = m, c.last = m);
        }
        return c.tail !== null ? (t = c.tail, c.rendering = t, c.tail = t.sibling, c.renderingStartTime = Ue(), t.sibling = null, n = Fe.current, Me(Fe, s ? n & 1 | 2 : n & 1), t) : (ft(t), null);
      case 22:
      case 23:
        return il(), s = t.memoizedState !== null, e !== null && e.memoizedState !== null !== s && (t.flags |= 8192), s && (t.mode & 1) !== 0 ? (At & 1073741824) !== 0 && (ft(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : ft(t), null;
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(i(156, t.tag));
  }
  function cm(e, t) {
    switch (ma(t), t.tag) {
      case 1:
        return yt(t.type) && _o(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 3:
        return Ir(), De(gt), De(ct), Ta(), e = t.flags, (e & 65536) !== 0 && (e & 128) === 0 ? (t.flags = e & -65537 | 128, t) : null;
      case 5:
        return Ea(t), null;
      case 13:
        if (De(Fe), e = t.memoizedState, e !== null && e.dehydrated !== null) {
          if (t.alternate === null) throw Error(i(340));
          Rr();
        }
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 19:
        return De(Fe), null;
      case 4:
        return Ir(), null;
      case 10:
        return wa(t.type._context), null;
      case 22:
      case 23:
        return il(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var zo = !1, pt = !1, dm = typeof WeakSet == "function" ? WeakSet : Set, te = null;
  function Lr(e, t) {
    var n = e.ref;
    if (n !== null) if (typeof n == "function") try {
      n(null);
    } catch (s) {
      Be(e, t, s);
    }
    else n.current = null;
  }
  function Ka(e, t, n) {
    try {
      n();
    } catch (s) {
      Be(e, t, s);
    }
  }
  var Cd = !1;
  function fm(e, t) {
    if (ia = so, e = rc(), Xi(e)) {
      if ("selectionStart" in e) var n = { start: e.selectionStart, end: e.selectionEnd };
      else e: {
        n = (n = e.ownerDocument) && n.defaultView || window;
        var s = n.getSelection && n.getSelection();
        if (s && s.rangeCount !== 0) {
          n = s.anchorNode;
          var l = s.anchorOffset, c = s.focusNode;
          s = s.focusOffset;
          try {
            n.nodeType, c.nodeType;
          } catch {
            n = null;
            break e;
          }
          var m = 0, S = -1, T = -1, L = 0, q = 0, Q = e, V = null;
          t: for (; ; ) {
            for (var ee; Q !== n || l !== 0 && Q.nodeType !== 3 || (S = m + l), Q !== c || s !== 0 && Q.nodeType !== 3 || (T = m + s), Q.nodeType === 3 && (m += Q.nodeValue.length), (ee = Q.firstChild) !== null; )
              V = Q, Q = ee;
            for (; ; ) {
              if (Q === e) break t;
              if (V === n && ++L === l && (S = m), V === c && ++q === s && (T = m), (ee = Q.nextSibling) !== null) break;
              Q = V, V = Q.parentNode;
            }
            Q = ee;
          }
          n = S === -1 || T === -1 ? null : { start: S, end: T };
        } else n = null;
      }
      n = n || { start: 0, end: 0 };
    } else n = null;
    for (aa = { focusedElem: e, selectionRange: n }, so = !1, te = t; te !== null; ) if (t = te, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, te = e;
    else for (; te !== null; ) {
      t = te;
      try {
        var re = t.alternate;
        if ((t.flags & 1024) !== 0) switch (t.tag) {
          case 0:
          case 11:
          case 15:
            break;
          case 1:
            if (re !== null) {
              var se = re.memoizedProps, Ve = re.memoizedState, I = t.stateNode, R = I.getSnapshotBeforeUpdate(t.elementType === t.type ? se : qt(t.type, se), Ve);
              I.__reactInternalSnapshotBeforeUpdate = R;
            }
            break;
          case 3:
            var D = t.stateNode.containerInfo;
            D.nodeType === 1 ? D.textContent = "" : D.nodeType === 9 && D.documentElement && D.removeChild(D.documentElement);
            break;
          case 5:
          case 6:
          case 4:
          case 17:
            break;
          default:
            throw Error(i(163));
        }
      } catch (G) {
        Be(t, t.return, G);
      }
      if (e = t.sibling, e !== null) {
        e.return = t.return, te = e;
        break;
      }
      te = t.return;
    }
    return re = Cd, Cd = !1, re;
  }
  function Rs(e, t, n) {
    var s = t.updateQueue;
    if (s = s !== null ? s.lastEffect : null, s !== null) {
      var l = s = s.next;
      do {
        if ((l.tag & e) === e) {
          var c = l.destroy;
          l.destroy = void 0, c !== void 0 && Ka(t, n, c);
        }
        l = l.next;
      } while (l !== s);
    }
  }
  function Ho(e, t) {
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
  function Ya(e) {
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
  function Ed(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null, Ed(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[en], delete t[xs], delete t[da], delete t[Kh], delete t[Yh])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
  }
  function Nd(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4;
  }
  function Td(e) {
    e: for (; ; ) {
      for (; e.sibling === null; ) {
        if (e.return === null || Nd(e.return)) return null;
        e = e.return;
      }
      for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
        if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
        e.child.return = e, e = e.child;
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function Ja(e, t, n) {
    var s = e.tag;
    if (s === 5 || s === 6) e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = go));
    else if (s !== 4 && (e = e.child, e !== null)) for (Ja(e, t, n), e = e.sibling; e !== null; ) Ja(e, t, n), e = e.sibling;
  }
  function Ga(e, t, n) {
    var s = e.tag;
    if (s === 5 || s === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (s !== 4 && (e = e.child, e !== null)) for (Ga(e, t, n), e = e.sibling; e !== null; ) Ga(e, t, n), e = e.sibling;
  }
  var rt = null, Qt = !1;
  function In(e, t, n) {
    for (n = n.child; n !== null; ) bd(e, t, n), n = n.sibling;
  }
  function bd(e, t, n) {
    if (Zt && typeof Zt.onCommitFiberUnmount == "function") try {
      Zt.onCommitFiberUnmount(Xs, n);
    } catch {
    }
    switch (n.tag) {
      case 5:
        pt || Lr(n, t);
      case 6:
        var s = rt, l = Qt;
        rt = null, In(e, t, n), rt = s, Qt = l, rt !== null && (Qt ? (e = rt, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : rt.removeChild(n.stateNode));
        break;
      case 18:
        rt !== null && (Qt ? (e = rt, n = n.stateNode, e.nodeType === 8 ? ca(e.parentNode, n) : e.nodeType === 1 && ca(e, n), us(e)) : ca(rt, n.stateNode));
        break;
      case 4:
        s = rt, l = Qt, rt = n.stateNode.containerInfo, Qt = !0, In(e, t, n), rt = s, Qt = l;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (!pt && (s = n.updateQueue, s !== null && (s = s.lastEffect, s !== null))) {
          l = s = s.next;
          do {
            var c = l, m = c.destroy;
            c = c.tag, m !== void 0 && ((c & 2) !== 0 || (c & 4) !== 0) && Ka(n, t, m), l = l.next;
          } while (l !== s);
        }
        In(e, t, n);
        break;
      case 1:
        if (!pt && (Lr(n, t), s = n.stateNode, typeof s.componentWillUnmount == "function")) try {
          s.props = n.memoizedProps, s.state = n.memoizedState, s.componentWillUnmount();
        } catch (S) {
          Be(n, t, S);
        }
        In(e, t, n);
        break;
      case 21:
        In(e, t, n);
        break;
      case 22:
        n.mode & 1 ? (pt = (s = pt) || n.memoizedState !== null, In(e, t, n), pt = s) : In(e, t, n);
        break;
      default:
        In(e, t, n);
    }
  }
  function Ad(e) {
    var t = e.updateQueue;
    if (t !== null) {
      e.updateQueue = null;
      var n = e.stateNode;
      n === null && (n = e.stateNode = new dm()), t.forEach(function(s) {
        var l = wm.bind(null, e, s);
        n.has(s) || (n.add(s), s.then(l, l));
      });
    }
  }
  function Kt(e, t) {
    var n = t.deletions;
    if (n !== null) for (var s = 0; s < n.length; s++) {
      var l = n[s];
      try {
        var c = e, m = t, S = m;
        e: for (; S !== null; ) {
          switch (S.tag) {
            case 5:
              rt = S.stateNode, Qt = !1;
              break e;
            case 3:
              rt = S.stateNode.containerInfo, Qt = !0;
              break e;
            case 4:
              rt = S.stateNode.containerInfo, Qt = !0;
              break e;
          }
          S = S.return;
        }
        if (rt === null) throw Error(i(160));
        bd(c, m, l), rt = null, Qt = !1;
        var T = l.alternate;
        T !== null && (T.return = null), l.return = null;
      } catch (L) {
        Be(l, t, L);
      }
    }
    if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) Rd(t, e), t = t.sibling;
  }
  function Rd(e, t) {
    var n = e.alternate, s = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if (Kt(t, e), rn(e), s & 4) {
          try {
            Rs(3, e, e.return), Ho(3, e);
          } catch (se) {
            Be(e, e.return, se);
          }
          try {
            Rs(5, e, e.return);
          } catch (se) {
            Be(e, e.return, se);
          }
        }
        break;
      case 1:
        Kt(t, e), rn(e), s & 512 && n !== null && Lr(n, n.return);
        break;
      case 5:
        if (Kt(t, e), rn(e), s & 512 && n !== null && Lr(n, n.return), e.flags & 32) {
          var l = e.stateNode;
          try {
            Xr(l, "");
          } catch (se) {
            Be(e, e.return, se);
          }
        }
        if (s & 4 && (l = e.stateNode, l != null)) {
          var c = e.memoizedProps, m = n !== null ? n.memoizedProps : c, S = e.type, T = e.updateQueue;
          if (e.updateQueue = null, T !== null) try {
            S === "input" && c.type === "radio" && c.name != null && Le(l, c), Ti(S, m);
            var L = Ti(S, c);
            for (m = 0; m < T.length; m += 2) {
              var q = T[m], Q = T[m + 1];
              q === "style" ? pu(l, Q) : q === "dangerouslySetInnerHTML" ? du(l, Q) : q === "children" ? Xr(l, Q) : $(l, q, Q, L);
            }
            switch (S) {
              case "input":
                Et(l, c);
                break;
              case "textarea":
                lu(l, c);
                break;
              case "select":
                var V = l._wrapperState.wasMultiple;
                l._wrapperState.wasMultiple = !!c.multiple;
                var ee = c.value;
                ee != null ? vr(l, !!c.multiple, ee, !1) : V !== !!c.multiple && (c.defaultValue != null ? vr(
                  l,
                  !!c.multiple,
                  c.defaultValue,
                  !0
                ) : vr(l, !!c.multiple, c.multiple ? [] : "", !1));
            }
            l[xs] = c;
          } catch (se) {
            Be(e, e.return, se);
          }
        }
        break;
      case 6:
        if (Kt(t, e), rn(e), s & 4) {
          if (e.stateNode === null) throw Error(i(162));
          l = e.stateNode, c = e.memoizedProps;
          try {
            l.nodeValue = c;
          } catch (se) {
            Be(e, e.return, se);
          }
        }
        break;
      case 3:
        if (Kt(t, e), rn(e), s & 4 && n !== null && n.memoizedState.isDehydrated) try {
          us(t.containerInfo);
        } catch (se) {
          Be(e, e.return, se);
        }
        break;
      case 4:
        Kt(t, e), rn(e);
        break;
      case 13:
        Kt(t, e), rn(e), l = e.child, l.flags & 8192 && (c = l.memoizedState !== null, l.stateNode.isHidden = c, !c || l.alternate !== null && l.alternate.memoizedState !== null || (el = Ue())), s & 4 && Ad(e);
        break;
      case 22:
        if (q = n !== null && n.memoizedState !== null, e.mode & 1 ? (pt = (L = pt) || q, Kt(t, e), pt = L) : Kt(t, e), rn(e), s & 8192) {
          if (L = e.memoizedState !== null, (e.stateNode.isHidden = L) && !q && (e.mode & 1) !== 0) for (te = e, q = e.child; q !== null; ) {
            for (Q = te = q; te !== null; ) {
              switch (V = te, ee = V.child, V.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Rs(4, V, V.return);
                  break;
                case 1:
                  Lr(V, V.return);
                  var re = V.stateNode;
                  if (typeof re.componentWillUnmount == "function") {
                    s = V, n = V.return;
                    try {
                      t = s, re.props = t.memoizedProps, re.state = t.memoizedState, re.componentWillUnmount();
                    } catch (se) {
                      Be(s, n, se);
                    }
                  }
                  break;
                case 5:
                  Lr(V, V.return);
                  break;
                case 22:
                  if (V.memoizedState !== null) {
                    Md(Q);
                    continue;
                  }
              }
              ee !== null ? (ee.return = V, te = ee) : Md(Q);
            }
            q = q.sibling;
          }
          e: for (q = null, Q = e; ; ) {
            if (Q.tag === 5) {
              if (q === null) {
                q = Q;
                try {
                  l = Q.stateNode, L ? (c = l.style, typeof c.setProperty == "function" ? c.setProperty("display", "none", "important") : c.display = "none") : (S = Q.stateNode, T = Q.memoizedProps.style, m = T != null && T.hasOwnProperty("display") ? T.display : null, S.style.display = fu("display", m));
                } catch (se) {
                  Be(e, e.return, se);
                }
              }
            } else if (Q.tag === 6) {
              if (q === null) try {
                Q.stateNode.nodeValue = L ? "" : Q.memoizedProps;
              } catch (se) {
                Be(e, e.return, se);
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
        Kt(t, e), rn(e), s & 4 && Ad(e);
        break;
      case 21:
        break;
      default:
        Kt(
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
            if (Nd(n)) {
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
            s.flags & 32 && (Xr(l, ""), s.flags &= -33);
            var c = Td(e);
            Ga(e, c, l);
            break;
          case 3:
          case 4:
            var m = s.stateNode.containerInfo, S = Td(e);
            Ja(e, S, m);
            break;
          default:
            throw Error(i(161));
        }
      } catch (T) {
        Be(e, e.return, T);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function pm(e, t, n) {
    te = e, Pd(e);
  }
  function Pd(e, t, n) {
    for (var s = (e.mode & 1) !== 0; te !== null; ) {
      var l = te, c = l.child;
      if (l.tag === 22 && s) {
        var m = l.memoizedState !== null || zo;
        if (!m) {
          var S = l.alternate, T = S !== null && S.memoizedState !== null || pt;
          S = zo;
          var L = pt;
          if (zo = m, (pt = T) && !L) for (te = l; te !== null; ) m = te, T = m.child, m.tag === 22 && m.memoizedState !== null ? Id(l) : T !== null ? (T.return = m, te = T) : Id(l);
          for (; c !== null; ) te = c, Pd(c), c = c.sibling;
          te = l, zo = S, pt = L;
        }
        $d(e);
      } else (l.subtreeFlags & 8772) !== 0 && c !== null ? (c.return = l, te = c) : $d(e);
    }
  }
  function $d(e) {
    for (; te !== null; ) {
      var t = te;
      if ((t.flags & 8772) !== 0) {
        var n = t.alternate;
        try {
          if ((t.flags & 8772) !== 0) switch (t.tag) {
            case 0:
            case 11:
            case 15:
              pt || Ho(5, t);
              break;
            case 1:
              var s = t.stateNode;
              if (t.flags & 4 && !pt) if (n === null) s.componentDidMount();
              else {
                var l = t.elementType === t.type ? n.memoizedProps : qt(t.type, n.memoizedProps);
                s.componentDidUpdate(l, n.memoizedState, s.__reactInternalSnapshotBeforeUpdate);
              }
              var c = t.updateQueue;
              c !== null && Mc(t, c, s);
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
                Mc(t, m, n);
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
                var L = t.alternate;
                if (L !== null) {
                  var q = L.memoizedState;
                  if (q !== null) {
                    var Q = q.dehydrated;
                    Q !== null && us(Q);
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
          pt || t.flags & 512 && Ya(t);
        } catch (V) {
          Be(t, t.return, V);
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
  function Md(e) {
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
  function Id(e) {
    for (; te !== null; ) {
      var t = te;
      try {
        switch (t.tag) {
          case 0:
          case 11:
          case 15:
            var n = t.return;
            try {
              Ho(4, t);
            } catch (T) {
              Be(t, n, T);
            }
            break;
          case 1:
            var s = t.stateNode;
            if (typeof s.componentDidMount == "function") {
              var l = t.return;
              try {
                s.componentDidMount();
              } catch (T) {
                Be(t, l, T);
              }
            }
            var c = t.return;
            try {
              Ya(t);
            } catch (T) {
              Be(t, c, T);
            }
            break;
          case 5:
            var m = t.return;
            try {
              Ya(t);
            } catch (T) {
              Be(t, m, T);
            }
        }
      } catch (T) {
        Be(t, t.return, T);
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
  var hm = Math.ceil, Fo = A.ReactCurrentDispatcher, Xa = A.ReactCurrentOwner, Ot = A.ReactCurrentBatchConfig, Ee = 0, Ze = null, Ke = null, st = 0, At = 0, Or = An(0), Ge = 0, Ps = null, rr = 0, Wo = 0, Za = 0, $s = null, xt = null, el = 0, zr = 1 / 0, vn = null, Bo = !1, tl = null, Dn = null, Uo = !1, Ln = null, Vo = 0, Ms = 0, nl = null, qo = -1, Qo = 0;
  function vt() {
    return (Ee & 6) !== 0 ? Ue() : qo !== -1 ? qo : qo = Ue();
  }
  function On(e) {
    return (e.mode & 1) === 0 ? 1 : (Ee & 2) !== 0 && st !== 0 ? st & -st : Gh.transition !== null ? (Qo === 0 && (Qo = Tu()), Qo) : (e = Pe, e !== 0 || (e = window.event, e = e === void 0 ? 16 : Lu(e.type)), e);
  }
  function Yt(e, t, n, s) {
    if (50 < Ms) throw Ms = 0, nl = null, Error(i(185));
    ss(e, n, s), ((Ee & 2) === 0 || e !== Ze) && (e === Ze && ((Ee & 2) === 0 && (Wo |= n), Ge === 4 && zn(e, st)), wt(e, s), n === 1 && Ee === 0 && (t.mode & 1) === 0 && (zr = Ue() + 500, wo && Pn()));
  }
  function wt(e, t) {
    var n = e.callbackNode;
    Gp(e, t);
    var s = to(e, e === Ze ? st : 0);
    if (s === 0) n !== null && Cu(n), e.callbackNode = null, e.callbackPriority = 0;
    else if (t = s & -s, e.callbackPriority !== t) {
      if (n != null && Cu(n), t === 1) e.tag === 0 ? Jh(Ld.bind(null, e)) : kc(Ld.bind(null, e)), qh(function() {
        (Ee & 6) === 0 && Pn();
      }), n = null;
      else {
        switch (bu(s)) {
          case 1:
            n = Ii;
            break;
          case 4:
            n = Eu;
            break;
          case 16:
            n = Gs;
            break;
          case 536870912:
            n = Nu;
            break;
          default:
            n = Gs;
        }
        n = Vd(n, Dd.bind(null, e));
      }
      e.callbackPriority = t, e.callbackNode = n;
    }
  }
  function Dd(e, t) {
    if (qo = -1, Qo = 0, (Ee & 6) !== 0) throw Error(i(327));
    var n = e.callbackNode;
    if (Hr() && e.callbackNode !== n) return null;
    var s = to(e, e === Ze ? st : 0);
    if (s === 0) return null;
    if ((s & 30) !== 0 || (s & e.expiredLanes) !== 0 || t) t = Ko(e, s);
    else {
      t = s;
      var l = Ee;
      Ee |= 2;
      var c = zd();
      (Ze !== e || st !== t) && (vn = null, zr = Ue() + 500, or(e, t));
      do
        try {
          gm();
          break;
        } catch (S) {
          Od(e, S);
        }
      while (!0);
      xa(), Fo.current = c, Ee = l, Ke !== null ? t = 0 : (Ze = null, st = 0, t = Ge);
    }
    if (t !== 0) {
      if (t === 2 && (l = Di(e), l !== 0 && (s = l, t = rl(e, l))), t === 1) throw n = Ps, or(e, 0), zn(e, s), wt(e, Ue()), n;
      if (t === 6) zn(e, s);
      else {
        if (l = e.current.alternate, (s & 30) === 0 && !mm(l) && (t = Ko(e, s), t === 2 && (c = Di(e), c !== 0 && (s = c, t = rl(e, c))), t === 1)) throw n = Ps, or(e, 0), zn(e, s), wt(e, Ue()), n;
        switch (e.finishedWork = l, e.finishedLanes = s, t) {
          case 0:
          case 1:
            throw Error(i(345));
          case 2:
            ir(e, xt, vn);
            break;
          case 3:
            if (zn(e, s), (s & 130023424) === s && (t = el + 500 - Ue(), 10 < t)) {
              if (to(e, 0) !== 0) break;
              if (l = e.suspendedLanes, (l & s) !== s) {
                vt(), e.pingedLanes |= e.suspendedLanes & l;
                break;
              }
              e.timeoutHandle = ua(ir.bind(null, e, xt, vn), t);
              break;
            }
            ir(e, xt, vn);
            break;
          case 4:
            if (zn(e, s), (s & 4194240) === s) break;
            for (t = e.eventTimes, l = -1; 0 < s; ) {
              var m = 31 - Bt(s);
              c = 1 << m, m = t[m], m > l && (l = m), s &= ~c;
            }
            if (s = l, s = Ue() - s, s = (120 > s ? 120 : 480 > s ? 480 : 1080 > s ? 1080 : 1920 > s ? 1920 : 3e3 > s ? 3e3 : 4320 > s ? 4320 : 1960 * hm(s / 1960)) - s, 10 < s) {
              e.timeoutHandle = ua(ir.bind(null, e, xt, vn), s);
              break;
            }
            ir(e, xt, vn);
            break;
          case 5:
            ir(e, xt, vn);
            break;
          default:
            throw Error(i(329));
        }
      }
    }
    return wt(e, Ue()), e.callbackNode === n ? Dd.bind(null, e) : null;
  }
  function rl(e, t) {
    var n = $s;
    return e.current.memoizedState.isDehydrated && (or(e, t).flags |= 256), e = Ko(e, t), e !== 2 && (t = xt, xt = n, t !== null && sl(t)), e;
  }
  function sl(e) {
    xt === null ? xt = e : xt.push.apply(xt, e);
  }
  function mm(e) {
    for (var t = e; ; ) {
      if (t.flags & 16384) {
        var n = t.updateQueue;
        if (n !== null && (n = n.stores, n !== null)) for (var s = 0; s < n.length; s++) {
          var l = n[s], c = l.getSnapshot;
          l = l.value;
          try {
            if (!Ut(c(), l)) return !1;
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
  function zn(e, t) {
    for (t &= ~Za, t &= ~Wo, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
      var n = 31 - Bt(t), s = 1 << n;
      e[n] = -1, t &= ~s;
    }
  }
  function Ld(e) {
    if ((Ee & 6) !== 0) throw Error(i(327));
    Hr();
    var t = to(e, 0);
    if ((t & 1) === 0) return wt(e, Ue()), null;
    var n = Ko(e, t);
    if (e.tag !== 0 && n === 2) {
      var s = Di(e);
      s !== 0 && (t = s, n = rl(e, s));
    }
    if (n === 1) throw n = Ps, or(e, 0), zn(e, t), wt(e, Ue()), n;
    if (n === 6) throw Error(i(345));
    return e.finishedWork = e.current.alternate, e.finishedLanes = t, ir(e, xt, vn), wt(e, Ue()), null;
  }
  function ol(e, t) {
    var n = Ee;
    Ee |= 1;
    try {
      return e(t);
    } finally {
      Ee = n, Ee === 0 && (zr = Ue() + 500, wo && Pn());
    }
  }
  function sr(e) {
    Ln !== null && Ln.tag === 0 && (Ee & 6) === 0 && Hr();
    var t = Ee;
    Ee |= 1;
    var n = Ot.transition, s = Pe;
    try {
      if (Ot.transition = null, Pe = 1, e) return e();
    } finally {
      Pe = s, Ot.transition = n, Ee = t, (Ee & 6) === 0 && Pn();
    }
  }
  function il() {
    At = Or.current, De(Or);
  }
  function or(e, t) {
    e.finishedWork = null, e.finishedLanes = 0;
    var n = e.timeoutHandle;
    if (n !== -1 && (e.timeoutHandle = -1, Vh(n)), Ke !== null) for (n = Ke.return; n !== null; ) {
      var s = n;
      switch (ma(s), s.tag) {
        case 1:
          s = s.type.childContextTypes, s != null && _o();
          break;
        case 3:
          Ir(), De(gt), De(ct), Ta();
          break;
        case 5:
          Ea(s);
          break;
        case 4:
          Ir();
          break;
        case 13:
          De(Fe);
          break;
        case 19:
          De(Fe);
          break;
        case 10:
          wa(s.type._context);
          break;
        case 22:
        case 23:
          il();
      }
      n = n.return;
    }
    if (Ze = e, Ke = e = Hn(e.current, null), st = At = t, Ge = 0, Ps = null, Za = Wo = rr = 0, xt = $s = null, er !== null) {
      for (t = 0; t < er.length; t++) if (n = er[t], s = n.interleaved, s !== null) {
        n.interleaved = null;
        var l = s.next, c = n.pending;
        if (c !== null) {
          var m = c.next;
          c.next = l, s.next = m;
        }
        n.pending = s;
      }
      er = null;
    }
    return e;
  }
  function Od(e, t) {
    do {
      var n = Ke;
      try {
        if (xa(), Ro.current = Io, Po) {
          for (var s = We.memoizedState; s !== null; ) {
            var l = s.queue;
            l !== null && (l.pending = null), s = s.next;
          }
          Po = !1;
        }
        if (nr = 0, Xe = Je = We = null, Es = !1, Ns = 0, Xa.current = null, n === null || n.return === null) {
          Ge = 1, Ps = t, Ke = null;
          break;
        }
        e: {
          var c = e, m = n.return, S = n, T = t;
          if (t = st, S.flags |= 32768, T !== null && typeof T == "object" && typeof T.then == "function") {
            var L = T, q = S, Q = q.tag;
            if ((q.mode & 1) === 0 && (Q === 0 || Q === 11 || Q === 15)) {
              var V = q.alternate;
              V ? (q.updateQueue = V.updateQueue, q.memoizedState = V.memoizedState, q.lanes = V.lanes) : (q.updateQueue = null, q.memoizedState = null);
            }
            var ee = ud(m);
            if (ee !== null) {
              ee.flags &= -257, cd(ee, m, S, c, t), ee.mode & 1 && ld(c, L, t), t = ee, T = L;
              var re = t.updateQueue;
              if (re === null) {
                var se = /* @__PURE__ */ new Set();
                se.add(T), t.updateQueue = se;
              } else re.add(T);
              break e;
            } else {
              if ((t & 1) === 0) {
                ld(c, L, t), al();
                break e;
              }
              T = Error(i(426));
            }
          } else if (Oe && S.mode & 1) {
            var Ve = ud(m);
            if (Ve !== null) {
              (Ve.flags & 65536) === 0 && (Ve.flags |= 256), cd(Ve, m, S, c, t), ya(Dr(T, S));
              break e;
            }
          }
          c = T = Dr(T, S), Ge !== 4 && (Ge = 2), $s === null ? $s = [c] : $s.push(c), c = m;
          do {
            switch (c.tag) {
              case 3:
                c.flags |= 65536, t &= -t, c.lanes |= t;
                var I = id(c, T, t);
                $c(c, I);
                break e;
              case 1:
                S = T;
                var R = c.type, D = c.stateNode;
                if ((c.flags & 128) === 0 && (typeof R.getDerivedStateFromError == "function" || D !== null && typeof D.componentDidCatch == "function" && (Dn === null || !Dn.has(D)))) {
                  c.flags |= 65536, t &= -t, c.lanes |= t;
                  var G = ad(c, S, t);
                  $c(c, G);
                  break e;
                }
            }
            c = c.return;
          } while (c !== null);
        }
        Fd(n);
      } catch (ae) {
        t = ae, Ke === n && n !== null && (Ke = n = n.return);
        continue;
      }
      break;
    } while (!0);
  }
  function zd() {
    var e = Fo.current;
    return Fo.current = Io, e === null ? Io : e;
  }
  function al() {
    (Ge === 0 || Ge === 3 || Ge === 2) && (Ge = 4), Ze === null || (rr & 268435455) === 0 && (Wo & 268435455) === 0 || zn(Ze, st);
  }
  function Ko(e, t) {
    var n = Ee;
    Ee |= 2;
    var s = zd();
    (Ze !== e || st !== t) && (vn = null, or(e, t));
    do
      try {
        vm();
        break;
      } catch (l) {
        Od(e, l);
      }
    while (!0);
    if (xa(), Ee = n, Fo.current = s, Ke !== null) throw Error(i(261));
    return Ze = null, st = 0, Ge;
  }
  function vm() {
    for (; Ke !== null; ) Hd(Ke);
  }
  function gm() {
    for (; Ke !== null && !Wp(); ) Hd(Ke);
  }
  function Hd(e) {
    var t = Ud(e.alternate, e, At);
    e.memoizedProps = e.pendingProps, t === null ? Fd(e) : Ke = t, Xa.current = null;
  }
  function Fd(e) {
    var t = e;
    do {
      var n = t.alternate;
      if (e = t.return, (t.flags & 32768) === 0) {
        if (n = um(n, t, At), n !== null) {
          Ke = n;
          return;
        }
      } else {
        if (n = cm(n, t), n !== null) {
          n.flags &= 32767, Ke = n;
          return;
        }
        if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
        else {
          Ge = 6, Ke = null;
          return;
        }
      }
      if (t = t.sibling, t !== null) {
        Ke = t;
        return;
      }
      Ke = t = e;
    } while (t !== null);
    Ge === 0 && (Ge = 5);
  }
  function ir(e, t, n) {
    var s = Pe, l = Ot.transition;
    try {
      Ot.transition = null, Pe = 1, ym(e, t, n, s);
    } finally {
      Ot.transition = l, Pe = s;
    }
    return null;
  }
  function ym(e, t, n, s) {
    do
      Hr();
    while (Ln !== null);
    if ((Ee & 6) !== 0) throw Error(i(327));
    n = e.finishedWork;
    var l = e.finishedLanes;
    if (n === null) return null;
    if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(i(177));
    e.callbackNode = null, e.callbackPriority = 0;
    var c = n.lanes | n.childLanes;
    if (Xp(e, c), e === Ze && (Ke = Ze = null, st = 0), (n.subtreeFlags & 2064) === 0 && (n.flags & 2064) === 0 || Uo || (Uo = !0, Vd(Gs, function() {
      return Hr(), null;
    })), c = (n.flags & 15990) !== 0, (n.subtreeFlags & 15990) !== 0 || c) {
      c = Ot.transition, Ot.transition = null;
      var m = Pe;
      Pe = 1;
      var S = Ee;
      Ee |= 4, Xa.current = null, fm(e, n), Rd(n, e), Oh(aa), so = !!ia, aa = ia = null, e.current = n, pm(n), Bp(), Ee = S, Pe = m, Ot.transition = c;
    } else e.current = n;
    if (Uo && (Uo = !1, Ln = e, Vo = l), c = e.pendingLanes, c === 0 && (Dn = null), qp(n.stateNode), wt(e, Ue()), t !== null) for (s = e.onRecoverableError, n = 0; n < t.length; n++) l = t[n], s(l.value, { componentStack: l.stack, digest: l.digest });
    if (Bo) throw Bo = !1, e = tl, tl = null, e;
    return (Vo & 1) !== 0 && e.tag !== 0 && Hr(), c = e.pendingLanes, (c & 1) !== 0 ? e === nl ? Ms++ : (Ms = 0, nl = e) : Ms = 0, Pn(), null;
  }
  function Hr() {
    if (Ln !== null) {
      var e = bu(Vo), t = Ot.transition, n = Pe;
      try {
        if (Ot.transition = null, Pe = 16 > e ? 16 : e, Ln === null) var s = !1;
        else {
          if (e = Ln, Ln = null, Vo = 0, (Ee & 6) !== 0) throw Error(i(331));
          var l = Ee;
          for (Ee |= 4, te = e.current; te !== null; ) {
            var c = te, m = c.child;
            if ((te.flags & 16) !== 0) {
              var S = c.deletions;
              if (S !== null) {
                for (var T = 0; T < S.length; T++) {
                  var L = S[T];
                  for (te = L; te !== null; ) {
                    var q = te;
                    switch (q.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Rs(8, q, c);
                    }
                    var Q = q.child;
                    if (Q !== null) Q.return = q, te = Q;
                    else for (; te !== null; ) {
                      q = te;
                      var V = q.sibling, ee = q.return;
                      if (Ed(q), q === L) {
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
                var re = c.alternate;
                if (re !== null) {
                  var se = re.child;
                  if (se !== null) {
                    re.child = null;
                    do {
                      var Ve = se.sibling;
                      se.sibling = null, se = Ve;
                    } while (se !== null);
                  }
                }
                te = c;
              }
            }
            if ((c.subtreeFlags & 2064) !== 0 && m !== null) m.return = c, te = m;
            else e: for (; te !== null; ) {
              if (c = te, (c.flags & 2048) !== 0) switch (c.tag) {
                case 0:
                case 11:
                case 15:
                  Rs(9, c, c.return);
              }
              var I = c.sibling;
              if (I !== null) {
                I.return = c.return, te = I;
                break e;
              }
              te = c.return;
            }
          }
          var R = e.current;
          for (te = R; te !== null; ) {
            m = te;
            var D = m.child;
            if ((m.subtreeFlags & 2064) !== 0 && D !== null) D.return = m, te = D;
            else e: for (m = R; te !== null; ) {
              if (S = te, (S.flags & 2048) !== 0) try {
                switch (S.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Ho(9, S);
                }
              } catch (ae) {
                Be(S, S.return, ae);
              }
              if (S === m) {
                te = null;
                break e;
              }
              var G = S.sibling;
              if (G !== null) {
                G.return = S.return, te = G;
                break e;
              }
              te = S.return;
            }
          }
          if (Ee = l, Pn(), Zt && typeof Zt.onPostCommitFiberRoot == "function") try {
            Zt.onPostCommitFiberRoot(Xs, e);
          } catch {
          }
          s = !0;
        }
        return s;
      } finally {
        Pe = n, Ot.transition = t;
      }
    }
    return !1;
  }
  function Wd(e, t, n) {
    t = Dr(n, t), t = id(e, t, 1), e = Mn(e, t, 1), t = vt(), e !== null && (ss(e, 1, t), wt(e, t));
  }
  function Be(e, t, n) {
    if (e.tag === 3) Wd(e, e, n);
    else for (; t !== null; ) {
      if (t.tag === 3) {
        Wd(t, e, n);
        break;
      } else if (t.tag === 1) {
        var s = t.stateNode;
        if (typeof t.type.getDerivedStateFromError == "function" || typeof s.componentDidCatch == "function" && (Dn === null || !Dn.has(s))) {
          e = Dr(n, e), e = ad(t, e, 1), t = Mn(t, e, 1), e = vt(), t !== null && (ss(t, 1, e), wt(t, e));
          break;
        }
      }
      t = t.return;
    }
  }
  function _m(e, t, n) {
    var s = e.pingCache;
    s !== null && s.delete(t), t = vt(), e.pingedLanes |= e.suspendedLanes & n, Ze === e && (st & n) === n && (Ge === 4 || Ge === 3 && (st & 130023424) === st && 500 > Ue() - el ? or(e, 0) : Za |= n), wt(e, t);
  }
  function Bd(e, t) {
    t === 0 && ((e.mode & 1) === 0 ? t = 1 : (t = eo, eo <<= 1, (eo & 130023424) === 0 && (eo = 4194304)));
    var n = vt();
    e = pn(e, t), e !== null && (ss(e, t, n), wt(e, n));
  }
  function xm(e) {
    var t = e.memoizedState, n = 0;
    t !== null && (n = t.retryLane), Bd(e, n);
  }
  function wm(e, t) {
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
    s !== null && s.delete(t), Bd(e, n);
  }
  var Ud;
  Ud = function(e, t, n) {
    if (e !== null) if (e.memoizedProps !== t.pendingProps || gt.current) _t = !0;
    else {
      if ((e.lanes & n) === 0 && (t.flags & 128) === 0) return _t = !1, lm(e, t, n);
      _t = (e.flags & 131072) !== 0;
    }
    else _t = !1, Oe && (t.flags & 1048576) !== 0 && Sc(t, So, t.index);
    switch (t.lanes = 0, t.tag) {
      case 2:
        var s = t.type;
        Oo(e, t), e = t.pendingProps;
        var l = Tr(t, ct.current);
        Mr(t, n), l = Ra(null, t, s, e, l, n);
        var c = Pa();
        return t.flags |= 1, typeof l == "object" && l !== null && typeof l.render == "function" && l.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, yt(s) ? (c = !0, xo(t)) : c = !1, t.memoizedState = l.state !== null && l.state !== void 0 ? l.state : null, ja(t), l.updater = Do, t.stateNode = l, l._reactInternals = t, Oa(t, s, e, n), t = Wa(null, t, s, !0, c, n)) : (t.tag = 0, Oe && c && ha(t), mt(null, t, l, n), t = t.child), t;
      case 16:
        s = t.elementType;
        e: {
          switch (Oo(e, t), e = t.pendingProps, l = s._init, s = l(s._payload), t.type = s, l = t.tag = Sm(s), e = qt(s, e), l) {
            case 0:
              t = Fa(null, t, s, e, n);
              break e;
            case 1:
              t = vd(null, t, s, e, n);
              break e;
            case 11:
              t = dd(null, t, s, e, n);
              break e;
            case 14:
              t = fd(null, t, s, qt(s.type, e), n);
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
        return s = t.type, l = t.pendingProps, l = t.elementType === s ? l : qt(s, l), Fa(e, t, s, l, n);
      case 1:
        return s = t.type, l = t.pendingProps, l = t.elementType === s ? l : qt(s, l), vd(e, t, s, l, n);
      case 3:
        e: {
          if (gd(t), e === null) throw Error(i(387));
          s = t.pendingProps, c = t.memoizedState, l = c.element, Pc(e, t), bo(t, s, null, n);
          var m = t.memoizedState;
          if (s = m.element, c.isDehydrated) if (c = { element: s, isDehydrated: !1, cache: m.cache, pendingSuspenseBoundaries: m.pendingSuspenseBoundaries, transitions: m.transitions }, t.updateQueue.baseState = c, t.memoizedState = c, t.flags & 256) {
            l = Dr(Error(i(423)), t), t = yd(e, t, s, n, l);
            break e;
          } else if (s !== l) {
            l = Dr(Error(i(424)), t), t = yd(e, t, s, n, l);
            break e;
          } else for (bt = bn(t.stateNode.containerInfo.firstChild), Tt = t, Oe = !0, Vt = null, n = Ac(t, null, s, n), t.child = n; n; ) n.flags = n.flags & -3 | 4096, n = n.sibling;
          else {
            if (Rr(), s === l) {
              t = mn(e, t, n);
              break e;
            }
            mt(e, t, s, n);
          }
          t = t.child;
        }
        return t;
      case 5:
        return Ic(t), e === null && ga(t), s = t.type, l = t.pendingProps, c = e !== null ? e.memoizedProps : null, m = l.children, la(s, l) ? m = null : c !== null && la(s, c) && (t.flags |= 32), md(e, t), mt(e, t, m, n), t.child;
      case 6:
        return e === null && ga(t), null;
      case 13:
        return _d(e, t, n);
      case 4:
        return Ca(t, t.stateNode.containerInfo), s = t.pendingProps, e === null ? t.child = Pr(t, null, s, n) : mt(e, t, s, n), t.child;
      case 11:
        return s = t.type, l = t.pendingProps, l = t.elementType === s ? l : qt(s, l), dd(e, t, s, l, n);
      case 7:
        return mt(e, t, t.pendingProps, n), t.child;
      case 8:
        return mt(e, t, t.pendingProps.children, n), t.child;
      case 12:
        return mt(e, t, t.pendingProps.children, n), t.child;
      case 10:
        e: {
          if (s = t.type._context, l = t.pendingProps, c = t.memoizedProps, m = l.value, Me(Eo, s._currentValue), s._currentValue = m, c !== null) if (Ut(c.value, m)) {
            if (c.children === l.children && !gt.current) {
              t = mn(e, t, n);
              break e;
            }
          } else for (c = t.child, c !== null && (c.return = t); c !== null; ) {
            var S = c.dependencies;
            if (S !== null) {
              m = c.child;
              for (var T = S.firstContext; T !== null; ) {
                if (T.context === s) {
                  if (c.tag === 1) {
                    T = hn(-1, n & -n), T.tag = 2;
                    var L = c.updateQueue;
                    if (L !== null) {
                      L = L.shared;
                      var q = L.pending;
                      q === null ? T.next = T : (T.next = q.next, q.next = T), L.pending = T;
                    }
                  }
                  c.lanes |= n, T = c.alternate, T !== null && (T.lanes |= n), ka(
                    c.return,
                    n,
                    t
                  ), S.lanes |= n;
                  break;
                }
                T = T.next;
              }
            } else if (c.tag === 10) m = c.type === t.type ? null : c.child;
            else if (c.tag === 18) {
              if (m = c.return, m === null) throw Error(i(341));
              m.lanes |= n, S = m.alternate, S !== null && (S.lanes |= n), ka(m, n, t), m = c.sibling;
            } else m = c.child;
            if (m !== null) m.return = c;
            else for (m = c; m !== null; ) {
              if (m === t) {
                m = null;
                break;
              }
              if (c = m.sibling, c !== null) {
                c.return = m.return, m = c;
                break;
              }
              m = m.return;
            }
            c = m;
          }
          mt(e, t, l.children, n), t = t.child;
        }
        return t;
      case 9:
        return l = t.type, s = t.pendingProps.children, Mr(t, n), l = Dt(l), s = s(l), t.flags |= 1, mt(e, t, s, n), t.child;
      case 14:
        return s = t.type, l = qt(s, t.pendingProps), l = qt(s.type, l), fd(e, t, s, l, n);
      case 15:
        return pd(e, t, t.type, t.pendingProps, n);
      case 17:
        return s = t.type, l = t.pendingProps, l = t.elementType === s ? l : qt(s, l), Oo(e, t), t.tag = 1, yt(s) ? (e = !0, xo(t)) : e = !1, Mr(t, n), sd(t, s, l), Oa(t, s, l, n), Wa(null, t, s, !0, e, n);
      case 19:
        return wd(e, t, n);
      case 22:
        return hd(e, t, n);
    }
    throw Error(i(156, t.tag));
  };
  function Vd(e, t) {
    return ju(e, t);
  }
  function km(e, t, n, s) {
    this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = s, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function zt(e, t, n, s) {
    return new km(e, t, n, s);
  }
  function ll(e) {
    return e = e.prototype, !(!e || !e.isReactComponent);
  }
  function Sm(e) {
    if (typeof e == "function") return ll(e) ? 1 : 0;
    if (e != null) {
      if (e = e.$$typeof, e === ge) return 11;
      if (e === B) return 14;
    }
    return 2;
  }
  function Hn(e, t) {
    var n = e.alternate;
    return n === null ? (n = zt(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n;
  }
  function Yo(e, t, n, s, l, c) {
    var m = 2;
    if (s = e, typeof e == "function") ll(e) && (m = 1);
    else if (typeof e == "string") m = 5;
    else e: switch (e) {
      case Y:
        return ar(n.children, l, c, t);
      case W:
        m = 8, l |= 8;
        break;
      case X:
        return e = zt(12, n, t, l | 2), e.elementType = X, e.lanes = c, e;
      case ye:
        return e = zt(13, n, t, l), e.elementType = ye, e.lanes = c, e;
      case we:
        return e = zt(19, n, t, l), e.elementType = we, e.lanes = c, e;
      case fe:
        return Jo(n, l, c, t);
      default:
        if (typeof e == "object" && e !== null) switch (e.$$typeof) {
          case me:
            m = 10;
            break e;
          case pe:
            m = 9;
            break e;
          case ge:
            m = 11;
            break e;
          case B:
            m = 14;
            break e;
          case le:
            m = 16, s = null;
            break e;
        }
        throw Error(i(130, e == null ? e : typeof e, ""));
    }
    return t = zt(m, n, t, l), t.elementType = e, t.type = s, t.lanes = c, t;
  }
  function ar(e, t, n, s) {
    return e = zt(7, e, s, t), e.lanes = n, e;
  }
  function Jo(e, t, n, s) {
    return e = zt(22, e, s, t), e.elementType = fe, e.lanes = n, e.stateNode = { isHidden: !1 }, e;
  }
  function ul(e, t, n) {
    return e = zt(6, e, null, t), e.lanes = n, e;
  }
  function cl(e, t, n) {
    return t = zt(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
  }
  function jm(e, t, n, s, l) {
    this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Li(0), this.expirationTimes = Li(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Li(0), this.identifierPrefix = s, this.onRecoverableError = l, this.mutableSourceEagerHydrationData = null;
  }
  function dl(e, t, n, s, l, c, m, S, T) {
    return e = new jm(e, t, n, S, T), t === 1 ? (t = 1, c === !0 && (t |= 8)) : t = 0, c = zt(3, null, null, t), e.current = c, c.stateNode = e, c.memoizedState = { element: s, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }, ja(c), e;
  }
  function Cm(e, t, n) {
    var s = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: O, key: s == null ? null : "" + s, children: e, containerInfo: t, implementation: n };
  }
  function qd(e) {
    if (!e) return Rn;
    e = e._reactInternals;
    e: {
      if (Yn(e) !== e || e.tag !== 1) throw Error(i(170));
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
      if (yt(n)) return xc(e, n, t);
    }
    return t;
  }
  function Qd(e, t, n, s, l, c, m, S, T) {
    return e = dl(n, s, !0, e, l, c, m, S, T), e.context = qd(null), n = e.current, s = vt(), l = On(n), c = hn(s, l), c.callback = t ?? null, Mn(n, c, l), e.current.lanes = l, ss(e, l, s), wt(e, s), e;
  }
  function Go(e, t, n, s) {
    var l = t.current, c = vt(), m = On(l);
    return n = qd(n), t.context === null ? t.context = n : t.pendingContext = n, t = hn(c, m), t.payload = { element: e }, s = s === void 0 ? null : s, s !== null && (t.callback = s), e = Mn(l, t, m), e !== null && (Yt(e, l, m, c), To(e, l, m)), m;
  }
  function Xo(e) {
    if (e = e.current, !e.child) return null;
    switch (e.child.tag) {
      case 5:
        return e.child.stateNode;
      default:
        return e.child.stateNode;
    }
  }
  function Kd(e, t) {
    if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
      var n = e.retryLane;
      e.retryLane = n !== 0 && n < t ? n : t;
    }
  }
  function fl(e, t) {
    Kd(e, t), (e = e.alternate) && Kd(e, t);
  }
  function Em() {
    return null;
  }
  var Yd = typeof reportError == "function" ? reportError : function(e) {
    console.error(e);
  };
  function pl(e) {
    this._internalRoot = e;
  }
  Zo.prototype.render = pl.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null) throw Error(i(409));
    Go(e, t, null, null);
  }, Zo.prototype.unmount = pl.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
      this._internalRoot = null;
      var t = e.containerInfo;
      sr(function() {
        Go(null, e, null, null);
      }), t[un] = null;
    }
  };
  function Zo(e) {
    this._internalRoot = e;
  }
  Zo.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
      var t = Pu();
      e = { blockedOn: null, target: e, priority: t };
      for (var n = 0; n < En.length && t !== 0 && t < En[n].priority; n++) ;
      En.splice(n, 0, e), n === 0 && Iu(e);
    }
  };
  function hl(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
  }
  function ei(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
  }
  function Jd() {
  }
  function Nm(e, t, n, s, l) {
    if (l) {
      if (typeof s == "function") {
        var c = s;
        s = function() {
          var L = Xo(m);
          c.call(L);
        };
      }
      var m = Qd(t, s, e, 0, null, !1, !1, "", Jd);
      return e._reactRootContainer = m, e[un] = m.current, ys(e.nodeType === 8 ? e.parentNode : e), sr(), m;
    }
    for (; l = e.lastChild; ) e.removeChild(l);
    if (typeof s == "function") {
      var S = s;
      s = function() {
        var L = Xo(T);
        S.call(L);
      };
    }
    var T = dl(e, 0, !1, null, null, !1, !1, "", Jd);
    return e._reactRootContainer = T, e[un] = T.current, ys(e.nodeType === 8 ? e.parentNode : e), sr(function() {
      Go(t, T, n, s);
    }), T;
  }
  function ti(e, t, n, s, l) {
    var c = n._reactRootContainer;
    if (c) {
      var m = c;
      if (typeof l == "function") {
        var S = l;
        l = function() {
          var T = Xo(m);
          S.call(T);
        };
      }
      Go(t, m, e, l);
    } else m = Nm(n, t, e, l, s);
    return Xo(m);
  }
  Au = function(e) {
    switch (e.tag) {
      case 3:
        var t = e.stateNode;
        if (t.current.memoizedState.isDehydrated) {
          var n = rs(t.pendingLanes);
          n !== 0 && (Oi(t, n | 1), wt(t, Ue()), (Ee & 6) === 0 && (zr = Ue() + 500, Pn()));
        }
        break;
      case 13:
        sr(function() {
          var s = pn(e, 1);
          if (s !== null) {
            var l = vt();
            Yt(s, e, 1, l);
          }
        }), fl(e, 1);
    }
  }, zi = function(e) {
    if (e.tag === 13) {
      var t = pn(e, 134217728);
      if (t !== null) {
        var n = vt();
        Yt(t, e, 134217728, n);
      }
      fl(e, 134217728);
    }
  }, Ru = function(e) {
    if (e.tag === 13) {
      var t = On(e), n = pn(e, t);
      if (n !== null) {
        var s = vt();
        Yt(n, e, t, s);
      }
      fl(e, t);
    }
  }, Pu = function() {
    return Pe;
  }, $u = function(e, t) {
    var n = Pe;
    try {
      return Pe = e, t();
    } finally {
      Pe = n;
    }
  }, Ri = function(e, t, n) {
    switch (t) {
      case "input":
        if (Et(e, n), t = n.name, n.type === "radio" && t != null) {
          for (n = e; n.parentNode; ) n = n.parentNode;
          for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
            var s = n[t];
            if (s !== e && s.form === e.form) {
              var l = yo(s);
              if (!l) throw Error(i(90));
              kn(s), Et(s, l);
            }
          }
        }
        break;
      case "textarea":
        lu(e, n);
        break;
      case "select":
        t = n.value, t != null && vr(e, !!n.multiple, t, !1);
    }
  }, gu = ol, yu = sr;
  var Tm = { usingClientEntryPoint: !1, Events: [ws, Er, yo, mu, vu, ol] }, Is = { findFiberByHostInstance: Jn, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, bm = { bundleType: Is.bundleType, version: Is.version, rendererPackageName: Is.rendererPackageName, rendererConfig: Is.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: A.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
    return e = ku(e), e === null ? null : e.stateNode;
  }, findFiberByHostInstance: Is.findFiberByHostInstance || Em, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var ni = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!ni.isDisabled && ni.supportsFiber) try {
      Xs = ni.inject(bm), Zt = ni;
    } catch {
    }
  }
  return kt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Tm, kt.createPortal = function(e, t) {
    var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!hl(t)) throw Error(i(200));
    return Cm(e, t, null, n);
  }, kt.createRoot = function(e, t) {
    if (!hl(e)) throw Error(i(299));
    var n = !1, s = "", l = Yd;
    return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (s = t.identifierPrefix), t.onRecoverableError !== void 0 && (l = t.onRecoverableError)), t = dl(e, 1, !1, null, null, n, !1, s, l), e[un] = t.current, ys(e.nodeType === 8 ? e.parentNode : e), new pl(t);
  }, kt.findDOMNode = function(e) {
    if (e == null) return null;
    if (e.nodeType === 1) return e;
    var t = e._reactInternals;
    if (t === void 0)
      throw typeof e.render == "function" ? Error(i(188)) : (e = Object.keys(e).join(","), Error(i(268, e)));
    return e = ku(t), e = e === null ? null : e.stateNode, e;
  }, kt.flushSync = function(e) {
    return sr(e);
  }, kt.hydrate = function(e, t, n) {
    if (!ei(t)) throw Error(i(200));
    return ti(null, e, t, !0, n);
  }, kt.hydrateRoot = function(e, t, n) {
    if (!hl(e)) throw Error(i(405));
    var s = n != null && n.hydratedSources || null, l = !1, c = "", m = Yd;
    if (n != null && (n.unstable_strictMode === !0 && (l = !0), n.identifierPrefix !== void 0 && (c = n.identifierPrefix), n.onRecoverableError !== void 0 && (m = n.onRecoverableError)), t = Qd(t, null, e, 1, n ?? null, l, !1, c, m), e[un] = t.current, ys(e), s) for (e = 0; e < s.length; e++) n = s[e], l = n._getVersion, l = l(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, l] : t.mutableSourceEagerHydrationData.push(
      n,
      l
    );
    return new Zo(t);
  }, kt.render = function(e, t, n) {
    if (!ei(t)) throw Error(i(200));
    return ti(null, e, t, !1, n);
  }, kt.unmountComponentAtNode = function(e) {
    if (!ei(e)) throw Error(i(40));
    return e._reactRootContainer ? (sr(function() {
      ti(null, null, e, !1, function() {
        e._reactRootContainer = null, e[un] = null;
      });
    }), !0) : !1;
  }, kt.unstable_batchedUpdates = ol, kt.unstable_renderSubtreeIntoContainer = function(e, t, n, s) {
    if (!ei(n)) throw Error(i(200));
    if (e == null || e._reactInternals === void 0) throw Error(i(38));
    return ti(e, t, n, !1, s);
  }, kt.version = "18.3.1-next-f1338f8080-20240426", kt;
}
var sf;
function Of() {
  if (sf) return gl.exports;
  sf = 1;
  function r() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r);
      } catch (a) {
        console.error(a);
      }
  }
  return r(), gl.exports = Om(), gl.exports;
}
var of;
function zm() {
  if (of) return ri;
  of = 1;
  var r = Of();
  return ri.createRoot = r.createRoot, ri.hydrateRoot = r.hydrateRoot, ri;
}
var Hm = zm();
const Fm = /* @__PURE__ */ Df(Hm);
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
var af = "popstate";
function lf(r) {
  return typeof r == "object" && r != null && "pathname" in r && "search" in r && "hash" in r && "state" in r && "key" in r;
}
function Wm(r = {}) {
  function a(d, f) {
    let {
      pathname: p = "/",
      search: h = "",
      hash: y = ""
    } = hr(d.location.hash.substring(1));
    return !p.startsWith("/") && !p.startsWith(".") && (p = "/" + p), Al(
      "",
      { pathname: p, search: h, hash: y },
      // state defaults to `null` because `window.history.state` does
      f.state && f.state.usr || null,
      f.state && f.state.key || "default"
    );
  }
  function i(d, f) {
    let p = d.document.querySelector("base"), h = "";
    if (p && p.getAttribute("href")) {
      let y = d.location.href, w = y.indexOf("#");
      h = w === -1 ? y : y.slice(0, w);
    }
    return h + "#" + (typeof f == "string" ? f : Us(f));
  }
  function u(d, f) {
    Ft(
      d.pathname.charAt(0) === "/",
      `relative pathnames are not supported in hash history.push(${JSON.stringify(
        f
      )})`
    );
  }
  return Um(
    a,
    i,
    u,
    r
  );
}
function ze(r, a) {
  if (r === !1 || r === null || typeof r > "u")
    throw new Error(a);
}
function Ft(r, a) {
  if (!r) {
    typeof console < "u" && console.warn(a);
    try {
      throw new Error(a);
    } catch {
    }
  }
}
function Bm() {
  return Math.random().toString(36).substring(2, 10);
}
function uf(r, a) {
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
function Al(r, a, i = null, u, d) {
  return {
    pathname: typeof r == "string" ? r : r.pathname,
    search: "",
    hash: "",
    ...typeof a == "string" ? hr(a) : a,
    state: i,
    // TODO: This could be cleaned up.  push/replace should probably just take
    // full Locations now and avoid the need to run through this flow at all
    // But that's a pretty big refactor to the current test suite so going to
    // keep as is for the time being and just let any incoming keys take precedence
    key: a && a.key || u || Bm(),
    mask: d
  };
}
function Us({
  pathname: r = "/",
  search: a = "",
  hash: i = ""
}) {
  return a && a !== "?" && (r += a.charAt(0) === "?" ? a : "?" + a), i && i !== "#" && (r += i.charAt(0) === "#" ? i : "#" + i), r;
}
function hr(r) {
  let a = {};
  if (r) {
    let i = r.indexOf("#");
    i >= 0 && (a.hash = r.substring(i), r = r.substring(0, i));
    let u = r.indexOf("?");
    u >= 0 && (a.search = r.substring(u), r = r.substring(0, u)), r && (a.pathname = r);
  }
  return a;
}
function Um(r, a, i, u = {}) {
  let { window: d = document.defaultView, v5Compat: f = !1 } = u, p = d.history, h = "POP", y = null, w = g();
  w == null && (w = 0, p.replaceState({ ...p.state, idx: w }, ""));
  function g() {
    return (p.state || { idx: null }).idx;
  }
  function x() {
    h = "POP";
    let E = g(), P = E == null ? null : E - w;
    w = E, y && y({ action: h, location: C.location, delta: P });
  }
  function k(E, P) {
    h = "PUSH";
    let F = lf(E) ? E : Al(C.location, E, P);
    i && i(F, E), w = g() + 1;
    let $ = uf(F, w), A = C.createHref(F.mask || F);
    try {
      p.pushState($, "", A);
    } catch (z) {
      if (z instanceof DOMException && z.name === "DataCloneError")
        throw z;
      d.location.assign(A);
    }
    f && y && y({ action: h, location: C.location, delta: 1 });
  }
  function j(E, P) {
    h = "REPLACE";
    let F = lf(E) ? E : Al(C.location, E, P);
    i && i(F, E), w = g();
    let $ = uf(F, w), A = C.createHref(F.mask || F);
    p.replaceState($, "", A), f && y && y({ action: h, location: C.location, delta: 0 });
  }
  function b(E) {
    return Vm(d, E);
  }
  let C = {
    get action() {
      return h;
    },
    get location() {
      return r(d, p);
    },
    listen(E) {
      if (y)
        throw new Error("A history only accepts one active listener");
      return d.addEventListener(af, x), y = E, () => {
        d.removeEventListener(af, x), y = null;
      };
    },
    createHref(E) {
      return a(d, E);
    },
    createURL: b,
    encodeLocation(E) {
      let P = b(E);
      return {
        pathname: P.pathname,
        search: P.search,
        hash: P.hash
      };
    },
    push: k,
    replace: j,
    go(E) {
      return p.go(E);
    }
  };
  return C;
}
function Vm(r, a, i = !1) {
  let u = "http://localhost";
  r && (u = r.location.origin !== "null" ? r.location.origin : r.location.href), ze(u, "No window.location.(origin|href) available to create URL");
  let d = typeof a == "string" ? a : Us(a);
  return d = d.replace(/ $/, "%20"), !i && d.startsWith("//") && (d = u + d), new URL(d, u);
}
function zf(r, a, i = "/") {
  return qm(r, a, i, !1);
}
function qm(r, a, i, u, d) {
  let f = typeof a == "string" ? hr(a) : a, p = xn(f.pathname || "/", i);
  if (p == null)
    return null;
  let h = Qm(r), y = null, w = ov(p);
  for (let g = 0; y == null && g < h.length; ++g)
    y = rv(
      h[g],
      w,
      u
    );
  return y;
}
function Qm(r) {
  let a = Hf(r);
  return Km(a), a;
}
function Hf(r, a = [], i = [], u = "", d = !1) {
  let f = (p, h, y = d, w) => {
    let g = {
      relativePath: w === void 0 ? p.path || "" : w,
      caseSensitive: p.caseSensitive === !0,
      childrenIndex: h,
      route: p
    };
    if (g.relativePath.startsWith("/")) {
      if (!g.relativePath.startsWith(u) && y)
        return;
      ze(
        g.relativePath.startsWith(u),
        `Absolute route path "${g.relativePath}" nested under path "${u}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`
      ), g.relativePath = g.relativePath.slice(u.length);
    }
    let x = Gt([u, g.relativePath]), k = i.concat(g);
    p.children && p.children.length > 0 && (ze(
      // Our types know better, but runtime JS may not!
      // @ts-expect-error
      p.index !== !0,
      `Index routes must not have child routes. Please remove all child routes from route path "${x}".`
    ), Hf(
      p.children,
      a,
      k,
      x,
      y
    )), !(p.path == null && !p.index) && a.push({
      path: x,
      score: tv(x, p.index),
      routesMeta: k
    });
  };
  return r.forEach((p, h) => {
    var y;
    if (p.path === "" || !((y = p.path) != null && y.includes("?")))
      f(p, h);
    else
      for (let w of Ff(p.path))
        f(p, h, !0, w);
  }), a;
}
function Ff(r) {
  let a = r.split("/");
  if (a.length === 0) return [];
  let [i, ...u] = a, d = i.endsWith("?"), f = i.replace(/\?$/, "");
  if (u.length === 0)
    return d ? [f, ""] : [f];
  let p = Ff(u.join("/")), h = [];
  return h.push(
    ...p.map(
      (y) => y === "" ? f : [f, y].join("/")
    )
  ), d && h.push(...p), h.map(
    (y) => r.startsWith("/") && y === "" ? "/" : y
  );
}
function Km(r) {
  r.sort(
    (a, i) => a.score !== i.score ? i.score - a.score : nv(
      a.routesMeta.map((u) => u.childrenIndex),
      i.routesMeta.map((u) => u.childrenIndex)
    )
  );
}
var Ym = /^:[\w-]+$/, Jm = 3, Gm = 2, Xm = 1, Zm = 10, ev = -2, cf = (r) => r === "*";
function tv(r, a) {
  let i = r.split("/"), u = i.length;
  return i.some(cf) && (u += ev), a && (u += Gm), i.filter((d) => !cf(d)).reduce(
    (d, f) => d + (Ym.test(f) ? Jm : f === "" ? Xm : Zm),
    u
  );
}
function nv(r, a) {
  return r.length === a.length && r.slice(0, -1).every((u, d) => u === a[d]) ? (
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
function rv(r, a, i = !1) {
  let { routesMeta: u } = r, d = {}, f = "/", p = [];
  for (let h = 0; h < u.length; ++h) {
    let y = u[h], w = h === u.length - 1, g = f === "/" ? a : a.slice(f.length) || "/", x = fi(
      { path: y.relativePath, caseSensitive: y.caseSensitive, end: w },
      g
    ), k = y.route;
    if (!x && w && i && !u[u.length - 1].route.index && (x = fi(
      {
        path: y.relativePath,
        caseSensitive: y.caseSensitive,
        end: !1
      },
      g
    )), !x)
      return null;
    Object.assign(d, x.params), p.push({
      // TODO: Can this as be avoided?
      params: d,
      pathname: Gt([f, x.pathname]),
      pathnameBase: uv(
        Gt([f, x.pathnameBase])
      ),
      route: k
    }), x.pathnameBase !== "/" && (f = Gt([f, x.pathnameBase]));
  }
  return p;
}
function fi(r, a) {
  typeof r == "string" && (r = { path: r, caseSensitive: !1, end: !0 });
  let [i, u] = sv(
    r.path,
    r.caseSensitive,
    r.end
  ), d = a.match(i);
  if (!d) return null;
  let f = d[0], p = f.replace(/(.)\/+$/, "$1"), h = d.slice(1);
  return {
    params: u.reduce(
      (w, { paramName: g, isOptional: x }, k) => {
        if (g === "*") {
          let b = h[k] || "";
          p = f.slice(0, f.length - b.length).replace(/(.)\/+$/, "$1");
        }
        const j = h[k];
        return x && !j ? w[g] = void 0 : w[g] = (j || "").replace(/%2F/g, "/"), w;
      },
      {}
    ),
    pathname: f,
    pathnameBase: p,
    pattern: r
  };
}
function sv(r, a = !1, i = !0) {
  Ft(
    r === "*" || !r.endsWith("*") || r.endsWith("/*"),
    `Route path "${r}" will be treated as if it were "${r.replace(/\*$/, "/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${r.replace(/\*$/, "/*")}".`
  );
  let u = [], d = "^" + r.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^${}|()[\]]/g, "\\$&").replace(
    /\/:([\w-]+)(\?)?/g,
    (p, h, y, w, g) => {
      if (u.push({ paramName: h, isOptional: y != null }), y) {
        let x = g.charAt(w + p.length);
        return x && x !== "/" ? "/([^\\/]*)" : "(?:/([^\\/]*))?";
      }
      return "/([^\\/]+)";
    }
  ).replace(/\/([\w-]+)\?(\/|$)/g, "(/$1)?$2");
  return r.endsWith("*") ? (u.push({ paramName: "*" }), d += r === "*" || r === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$") : i ? d += "\\/*$" : r !== "" && r !== "/" && (d += "(?:(?=\\/|$))"), [new RegExp(d, a ? void 0 : "i"), u];
}
function ov(r) {
  try {
    return r.split("/").map((a) => decodeURIComponent(a).replace(/\//g, "%2F")).join("/");
  } catch (a) {
    return Ft(
      !1,
      `The URL path "${r}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${a}).`
    ), r;
  }
}
function xn(r, a) {
  if (a === "/") return r;
  if (!r.toLowerCase().startsWith(a.toLowerCase()))
    return null;
  let i = a.endsWith("/") ? a.length - 1 : a.length, u = r.charAt(i);
  return u && u !== "/" ? null : r.slice(i) || "/";
}
var iv = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;
function av(r, a = "/") {
  let {
    pathname: i,
    search: u = "",
    hash: d = ""
  } = typeof r == "string" ? hr(r) : r, f;
  return i ? (i = Wf(i), i.startsWith("/") ? f = df(i.substring(1), "/") : f = df(i, a)) : f = a, {
    pathname: f,
    search: cv(u),
    hash: dv(d)
  };
}
function df(r, a) {
  let i = pi(a).split("/");
  return r.split("/").forEach((d) => {
    d === ".." ? i.length > 1 && i.pop() : d !== "." && i.push(d);
  }), i.length > 1 ? i.join("/") : "/";
}
function xl(r, a, i, u) {
  return `Cannot include a '${r}' character in a manually specified \`to.${a}\` field [${JSON.stringify(
    u
  )}].  Please separate it out to the \`to.${i}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`;
}
function lv(r) {
  return r.filter(
    (a, i) => i === 0 || a.route.path && a.route.path.length > 0
  );
}
function Fl(r) {
  let a = lv(r);
  return a.map(
    (i, u) => u === a.length - 1 ? i.pathname : i.pathnameBase
  );
}
function _i(r, a, i, u = !1) {
  let d;
  typeof r == "string" ? d = hr(r) : (d = { ...r }, ze(
    !d.pathname || !d.pathname.includes("?"),
    xl("?", "pathname", "search", d)
  ), ze(
    !d.pathname || !d.pathname.includes("#"),
    xl("#", "pathname", "hash", d)
  ), ze(
    !d.search || !d.search.includes("#"),
    xl("#", "search", "hash", d)
  ));
  let f = r === "" || d.pathname === "", p = f ? "/" : d.pathname, h;
  if (p == null)
    h = i;
  else {
    let x = a.length - 1;
    if (!u && p.startsWith("..")) {
      let k = p.split("/");
      for (; k[0] === ".."; )
        k.shift(), x -= 1;
      d.pathname = k.join("/");
    }
    h = x >= 0 ? a[x] : "/";
  }
  let y = av(d, h), w = p && p !== "/" && p.endsWith("/"), g = (f || p === ".") && i.endsWith("/");
  return !y.pathname.endsWith("/") && (w || g) && (y.pathname += "/"), y;
}
var Wf = (r) => r.replace(/\/\/+/g, "/"), Gt = (r) => Wf(r.join("/")), pi = (r) => r.replace(/\/+$/, ""), uv = (r) => pi(r).replace(/^\/*/, "/"), cv = (r) => !r || r === "?" ? "" : r.startsWith("?") ? r : "?" + r, dv = (r) => !r || r === "#" ? "" : r.startsWith("#") ? r : "#" + r, fv = class {
  constructor(r, a, i, u = !1) {
    this.status = r, this.statusText = a || "", this.internal = u, i instanceof Error ? (this.data = i.toString(), this.error = i) : this.data = i;
  }
};
function pv(r) {
  return r != null && typeof r.status == "number" && typeof r.statusText == "string" && typeof r.internal == "boolean" && "data" in r;
}
function hv(r) {
  let a = r.map((i) => i.route.path).filter(Boolean);
  return Gt(a) || "/";
}
var Bf = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u";
function Uf(r, a) {
  let i = r;
  if (typeof i != "string" || !iv.test(i))
    return {
      absoluteURL: void 0,
      isExternal: !1,
      to: i
    };
  let u = i, d = !1;
  if (Bf)
    try {
      let f = new URL(window.location.href), p = i.startsWith("//") ? new URL(f.protocol + i) : new URL(i), h = xn(p.pathname, a);
      p.origin === f.origin && h != null ? i = h + p.search + p.hash : d = !0;
    } catch {
      Ft(
        !1,
        `<Link to="${i}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`
      );
    }
  return {
    absoluteURL: u,
    isExternal: d,
    to: i
  };
}
Object.getOwnPropertyNames(Object.prototype).sort().join("\0");
var Vf = [
  "POST",
  "PUT",
  "PATCH",
  "DELETE"
];
new Set(
  Vf
);
var mv = [
  "GET",
  ...Vf
];
new Set(mv);
var Vr = v.createContext(null);
Vr.displayName = "DataRouter";
var xi = v.createContext(null);
xi.displayName = "DataRouterState";
var qf = v.createContext(!1);
function vv() {
  return v.useContext(qf);
}
var Qf = v.createContext({
  isTransitioning: !1
});
Qf.displayName = "ViewTransition";
var gv = v.createContext(
  /* @__PURE__ */ new Map()
);
gv.displayName = "Fetchers";
var yv = v.createContext(null);
yv.displayName = "Await";
var Pt = v.createContext(
  null
);
Pt.displayName = "Navigation";
var Vs = v.createContext(
  null
);
Vs.displayName = "Location";
var ln = v.createContext({
  outlet: null,
  matches: [],
  isDataRoute: !1
});
ln.displayName = "Route";
var Wl = v.createContext(null);
Wl.displayName = "RouteError";
var Kf = "REACT_ROUTER_ERROR", _v = "REDIRECT", xv = "ROUTE_ERROR_RESPONSE";
function wv(r) {
  if (r.startsWith(`${Kf}:${_v}:{`))
    try {
      let a = JSON.parse(r.slice(28));
      if (typeof a == "object" && a && typeof a.status == "number" && typeof a.statusText == "string" && typeof a.location == "string" && typeof a.reloadDocument == "boolean" && typeof a.replace == "boolean")
        return a;
    } catch {
    }
}
function kv(r) {
  if (r.startsWith(
    `${Kf}:${xv}:{`
  ))
    try {
      let a = JSON.parse(r.slice(40));
      if (typeof a == "object" && a && typeof a.status == "number" && typeof a.statusText == "string")
        return new fv(
          a.status,
          a.statusText,
          a.data
        );
    } catch {
    }
}
function Sv(r, { relative: a } = {}) {
  ze(
    mr(),
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useHref() may be used only in the context of a <Router> component."
  );
  let { basename: i, navigator: u } = v.useContext(Pt), { hash: d, pathname: f, search: p } = qs(r, { relative: a }), h = f;
  return i !== "/" && (h = f === "/" ? i : Gt([i, f])), u.createHref({ pathname: h, search: p, hash: d });
}
function mr() {
  return v.useContext(Vs) != null;
}
function Ct() {
  return ze(
    mr(),
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useLocation() may be used only in the context of a <Router> component."
  ), v.useContext(Vs).location;
}
var Yf = "You should call navigate() in a React.useEffect(), not when your component is first rendered.";
function Jf(r) {
  v.useContext(Pt).static || v.useLayoutEffect(r);
}
function Bl() {
  let { isDataRoute: r } = v.useContext(ln);
  return r ? Dv() : jv();
}
function jv() {
  ze(
    mr(),
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useNavigate() may be used only in the context of a <Router> component."
  );
  let r = v.useContext(Vr), { basename: a, navigator: i } = v.useContext(Pt), { matches: u } = v.useContext(ln), { pathname: d } = Ct(), f = JSON.stringify(Fl(u)), p = v.useRef(!1);
  return Jf(() => {
    p.current = !0;
  }), v.useCallback(
    (y, w = {}) => {
      if (Ft(p.current, Yf), !p.current) return;
      if (typeof y == "number") {
        i.go(y);
        return;
      }
      let g = _i(
        y,
        JSON.parse(f),
        d,
        w.relative === "path"
      );
      r == null && a !== "/" && (g.pathname = g.pathname === "/" ? a : Gt([a, g.pathname])), (w.replace ? i.replace : i.push)(
        g,
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
function qs(r, { relative: a } = {}) {
  let { matches: i } = v.useContext(ln), { pathname: u } = Ct(), d = JSON.stringify(Fl(i));
  return v.useMemo(
    () => _i(
      r,
      JSON.parse(d),
      u,
      a === "path"
    ),
    [r, d, u, a]
  );
}
function Cv(r, a) {
  return Gf(r, a);
}
function Gf(r, a, i) {
  var E;
  ze(
    mr(),
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useRoutes() may be used only in the context of a <Router> component."
  );
  let { navigator: u } = v.useContext(Pt), { matches: d } = v.useContext(ln), f = d[d.length - 1], p = f ? f.params : {}, h = f ? f.pathname : "/", y = f ? f.pathnameBase : "/", w = f && f.route;
  {
    let P = w && w.path || "";
    Zf(
      h,
      !w || P.endsWith("*") || P.endsWith("*?"),
      `You rendered descendant <Routes> (or called \`useRoutes()\`) at "${h}" (under <Route path="${P}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${P}"> to <Route path="${P === "/" ? "*" : `${P}/*`}">.`
    );
  }
  let g = Ct(), x;
  if (a) {
    let P = typeof a == "string" ? hr(a) : a;
    ze(
      y === "/" || ((E = P.pathname) == null ? void 0 : E.startsWith(y)),
      `When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${y}" but pathname "${P.pathname}" was given in the \`location\` prop.`
    ), x = P;
  } else
    x = g;
  let k = x.pathname || "/", j = k;
  if (y !== "/") {
    let P = y.replace(/^\//, "").split("/");
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
  ) : zf(r, { pathname: j });
  Ft(
    w || b != null,
    `No routes matched location "${x.pathname}${x.search}${x.hash}" `
  ), Ft(
    b == null || b[b.length - 1].route.element !== void 0 || b[b.length - 1].route.Component !== void 0 || b[b.length - 1].route.lazy !== void 0,
    `Matched leaf route at location "${x.pathname}${x.search}${x.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`
  );
  let C = Av(
    b && b.map(
      (P) => Object.assign({}, P, {
        params: Object.assign({}, p, P.params),
        pathname: Gt([
          y,
          // Re-encode pathnames that were decoded inside matchRoutes.
          // Pre-encode `%`, `?` and `#` ahead of `encodeLocation` because it uses
          // `new URL()` internally and we need to prevent it from treating
          // them as separators
          u.encodeLocation ? u.encodeLocation(
            P.pathname.replace(/%/g, "%25").replace(/\?/g, "%3F").replace(/#/g, "%23")
          ).pathname : P.pathname
        ]),
        pathnameBase: P.pathnameBase === "/" ? y : Gt([
          y,
          // Re-encode pathnames that were decoded inside matchRoutes
          // Pre-encode `%`, `?` and `#` ahead of `encodeLocation` because it uses
          // `new URL()` internally and we need to prevent it from treating
          // them as separators
          u.encodeLocation ? u.encodeLocation(
            P.pathnameBase.replace(/%/g, "%25").replace(/\?/g, "%3F").replace(/#/g, "%23")
          ).pathname : P.pathnameBase
        ])
      })
    ),
    d,
    i
  );
  return a && C ? /* @__PURE__ */ v.createElement(
    Vs.Provider,
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
function Ev() {
  let r = Iv(), a = pv(r) ? `${r.status} ${r.statusText}` : r instanceof Error ? r.message : JSON.stringify(r), i = r instanceof Error ? r.stack : null, u = "rgba(200,200,200, 0.5)", d = { padding: "0.5rem", backgroundColor: u }, f = { padding: "2px 4px", backgroundColor: u }, p = null;
  return console.error(
    "Error handled by React Router default ErrorBoundary:",
    r
  ), p = /* @__PURE__ */ v.createElement(v.Fragment, null, /* @__PURE__ */ v.createElement("p", null, "💿 Hey developer 👋"), /* @__PURE__ */ v.createElement("p", null, "You can provide a way better UX than this when your app throws errors by providing your own ", /* @__PURE__ */ v.createElement("code", { style: f }, "ErrorBoundary"), " or", " ", /* @__PURE__ */ v.createElement("code", { style: f }, "errorElement"), " prop on your route.")), /* @__PURE__ */ v.createElement(v.Fragment, null, /* @__PURE__ */ v.createElement("h2", null, "Unexpected Application Error!"), /* @__PURE__ */ v.createElement("h3", { style: { fontStyle: "italic" } }, a), i ? /* @__PURE__ */ v.createElement("pre", { style: d }, i) : null, p);
}
var Nv = /* @__PURE__ */ v.createElement(Ev, null), Xf = class extends v.Component {
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
      const i = kv(r.digest);
      i && (r = i);
    }
    let a = r !== void 0 ? /* @__PURE__ */ v.createElement(ln.Provider, { value: this.props.routeContext }, /* @__PURE__ */ v.createElement(
      Wl.Provider,
      {
        value: r,
        children: this.props.component
      }
    )) : this.props.children;
    return this.context ? /* @__PURE__ */ v.createElement(Tv, { error: r }, a) : a;
  }
};
Xf.contextType = qf;
var wl = /* @__PURE__ */ new WeakMap();
function Tv({
  children: r,
  error: a
}) {
  let { basename: i } = v.useContext(Pt);
  if (typeof a == "object" && a && "digest" in a && typeof a.digest == "string") {
    let u = wv(a.digest);
    if (u) {
      let d = wl.get(a);
      if (d) throw d;
      let f = Uf(u.location, i);
      if (Bf && !wl.get(a))
        if (f.isExternal || u.reloadDocument)
          window.location.href = f.absoluteURL || f.to;
        else {
          const p = Promise.resolve().then(
            () => window.__reactRouterDataRouter.navigate(f.to, {
              replace: u.replace
            })
          );
          throw wl.set(a, p), p;
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
function bv({ routeContext: r, match: a, children: i }) {
  let u = v.useContext(Vr);
  return u && u.static && u.staticContext && (a.route.errorElement || a.route.ErrorBoundary) && (u.staticContext._deepestRenderedBoundaryId = a.route.id), /* @__PURE__ */ v.createElement(ln.Provider, { value: r }, i);
}
function Av(r, a = [], i) {
  let u = i == null ? void 0 : i.state;
  if (r == null) {
    if (!u)
      return null;
    if (u.errors)
      r = u.matches;
    else if (a.length === 0 && !u.initialized && u.matches.length > 0)
      r = u.matches;
    else
      return null;
  }
  let d = r, f = u == null ? void 0 : u.errors;
  if (f != null) {
    let g = d.findIndex(
      (x) => x.route.id && (f == null ? void 0 : f[x.route.id]) !== void 0
    );
    ze(
      g >= 0,
      `Could not find a matching route for errors on route IDs: ${Object.keys(
        f
      ).join(",")}`
    ), d = d.slice(
      0,
      Math.min(d.length, g + 1)
    );
  }
  let p = !1, h = -1;
  if (i && u) {
    p = u.renderFallback;
    for (let g = 0; g < d.length; g++) {
      let x = d[g];
      if ((x.route.HydrateFallback || x.route.hydrateFallbackElement) && (h = g), x.route.id) {
        let { loaderData: k, errors: j } = u, b = x.route.loader && !k.hasOwnProperty(x.route.id) && (!j || j[x.route.id] === void 0);
        if (x.route.lazy || b) {
          i.isStatic && (p = !0), h >= 0 ? d = d.slice(0, h + 1) : d = [d[0]];
          break;
        }
      }
    }
  }
  let y = i == null ? void 0 : i.onError, w = u && y ? (g, x) => {
    var k, j;
    y(g, {
      location: u.location,
      params: ((j = (k = u.matches) == null ? void 0 : k[0]) == null ? void 0 : j.params) ?? {},
      pattern: hv(u.matches),
      errorInfo: x
    });
  } : void 0;
  return d.reduceRight(
    (g, x, k) => {
      let j, b = !1, C = null, E = null;
      u && (j = f && x.route.id ? f[x.route.id] : void 0, C = x.route.errorElement || Nv, p && (h < 0 && k === 0 ? (Zf(
        "route-fallback",
        !1,
        "No `HydrateFallback` element provided to render during initial hydration"
      ), b = !0, E = null) : h === k && (b = !0, E = x.route.hydrateFallbackElement || null)));
      let P = a.concat(d.slice(0, k + 1)), F = () => {
        let $;
        return j ? $ = C : b ? $ = E : x.route.Component ? $ = /* @__PURE__ */ v.createElement(x.route.Component, null) : x.route.element ? $ = x.route.element : $ = g, /* @__PURE__ */ v.createElement(
          bv,
          {
            match: x,
            routeContext: {
              outlet: g,
              matches: P,
              isDataRoute: u != null
            },
            children: $
          }
        );
      };
      return u && (x.route.ErrorBoundary || x.route.errorElement || k === 0) ? /* @__PURE__ */ v.createElement(
        Xf,
        {
          location: u.location,
          revalidation: u.revalidation,
          component: C,
          error: j,
          children: F(),
          routeContext: { outlet: null, matches: P, isDataRoute: !0 },
          onError: w
        }
      ) : F();
    },
    null
  );
}
function Ul(r) {
  return `${r} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function Rv(r) {
  let a = v.useContext(Vr);
  return ze(a, Ul(r)), a;
}
function Pv(r) {
  let a = v.useContext(xi);
  return ze(a, Ul(r)), a;
}
function $v(r) {
  let a = v.useContext(ln);
  return ze(a, Ul(r)), a;
}
function Vl(r) {
  let a = $v(r), i = a.matches[a.matches.length - 1];
  return ze(
    i.route.id,
    `${r} can only be used on routes that contain a unique "id"`
  ), i.route.id;
}
function Mv() {
  return Vl(
    "useRouteId"
    /* UseRouteId */
  );
}
function Iv() {
  var u;
  let r = v.useContext(Wl), a = Pv(
    "useRouteError"
    /* UseRouteError */
  ), i = Vl(
    "useRouteError"
    /* UseRouteError */
  );
  return r !== void 0 ? r : (u = a.errors) == null ? void 0 : u[i];
}
function Dv() {
  let { router: r } = Rv(
    "useNavigate"
    /* UseNavigateStable */
  ), a = Vl(
    "useNavigate"
    /* UseNavigateStable */
  ), i = v.useRef(!1);
  return Jf(() => {
    i.current = !0;
  }), v.useCallback(
    async (d, f = {}) => {
      Ft(i.current, Yf), i.current && (typeof d == "number" ? await r.navigate(d) : await r.navigate(d, { fromRouteId: a, ...f }));
    },
    [r, a]
  );
}
var ff = {};
function Zf(r, a, i) {
  !a && !ff[r] && (ff[r] = !0, Ft(!1, i));
}
v.memo(Lv);
function Lv({
  routes: r,
  manifest: a,
  future: i,
  state: u,
  isStatic: d,
  onError: f
}) {
  return Gf(r, void 0, {
    manifest: a,
    state: u,
    isStatic: d,
    onError: f
  });
}
function gn({
  to: r,
  replace: a,
  state: i,
  relative: u
}) {
  ze(
    mr(),
    // TODO: This error is probably because they somehow have 2 versions of
    // the router loaded. We can help them understand how to avoid that.
    "<Navigate> may be used only in the context of a <Router> component."
  );
  let { static: d } = v.useContext(Pt);
  Ft(
    !d,
    "<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change."
  );
  let { matches: f } = v.useContext(ln), { pathname: p } = Ct(), h = Bl(), y = _i(
    r,
    Fl(f),
    p,
    u === "path"
  ), w = JSON.stringify(y);
  return v.useEffect(() => {
    h(JSON.parse(w), { replace: a, state: i, relative: u });
  }, [h, w, u, a, i]), null;
}
function qe(r) {
  ze(
    !1,
    "A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>."
  );
}
function Ov({
  basename: r = "/",
  children: a = null,
  location: i,
  navigationType: u = "POP",
  navigator: d,
  static: f = !1,
  useTransitions: p
}) {
  ze(
    !mr(),
    "You cannot render a <Router> inside another <Router>. You should never have more than one in your app."
  );
  let h = r.replace(/^\/*/, "/"), y = v.useMemo(
    () => ({
      basename: h,
      navigator: d,
      static: f,
      useTransitions: p,
      future: {}
    }),
    [h, d, f, p]
  );
  typeof i == "string" && (i = hr(i));
  let {
    pathname: w = "/",
    search: g = "",
    hash: x = "",
    state: k = null,
    key: j = "default",
    mask: b
  } = i, C = v.useMemo(() => {
    let E = xn(w, h);
    return E == null ? null : {
      location: {
        pathname: E,
        search: g,
        hash: x,
        state: k,
        key: j,
        mask: b
      },
      navigationType: u
    };
  }, [h, w, g, x, k, j, u, b]);
  return Ft(
    C != null,
    `<Router basename="${h}"> is not able to match the URL "${w}${g}${x}" because it does not start with the basename, so the <Router> won't render anything.`
  ), C == null ? null : /* @__PURE__ */ v.createElement(Pt.Provider, { value: y }, /* @__PURE__ */ v.createElement(Vs.Provider, { children: a, value: C }));
}
function zv({
  children: r,
  location: a
}) {
  return Cv(Rl(r), a);
}
function Rl(r, a = []) {
  let i = [];
  return v.Children.forEach(r, (u, d) => {
    if (!v.isValidElement(u))
      return;
    let f = [...a, d];
    if (u.type === v.Fragment) {
      i.push.apply(
        i,
        Rl(u.props.children, f)
      );
      return;
    }
    ze(
      u.type === qe,
      `[${typeof u.type == "string" ? u.type : u.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`
    ), ze(
      !u.props.index || !u.props.children,
      "An index route cannot have child routes."
    );
    let p = {
      id: u.props.id || f.join("-"),
      caseSensitive: u.props.caseSensitive,
      element: u.props.element,
      Component: u.props.Component,
      index: u.props.index,
      path: u.props.path,
      middleware: u.props.middleware,
      loader: u.props.loader,
      action: u.props.action,
      hydrateFallbackElement: u.props.hydrateFallbackElement,
      HydrateFallback: u.props.HydrateFallback,
      errorElement: u.props.errorElement,
      ErrorBoundary: u.props.ErrorBoundary,
      hasErrorBoundary: u.props.hasErrorBoundary === !0 || u.props.ErrorBoundary != null || u.props.errorElement != null,
      shouldRevalidate: u.props.shouldRevalidate,
      handle: u.props.handle,
      lazy: u.props.lazy
    };
    u.props.children && (p.children = Rl(
      u.props.children,
      f
    )), i.push(p);
  }), i;
}
var ci = "get", di = "application/x-www-form-urlencoded";
function wi(r) {
  return typeof HTMLElement < "u" && r instanceof HTMLElement;
}
function Hv(r) {
  return wi(r) && r.tagName.toLowerCase() === "button";
}
function Fv(r) {
  return wi(r) && r.tagName.toLowerCase() === "form";
}
function Wv(r) {
  return wi(r) && r.tagName.toLowerCase() === "input";
}
function Bv(r) {
  return !!(r.metaKey || r.altKey || r.ctrlKey || r.shiftKey);
}
function Uv(r, a) {
  return r.button === 0 && // Ignore everything but left clicks
  (!a || a === "_self") && // Let browser handle "target=_blank" etc.
  !Bv(r);
}
var si = null;
function Vv() {
  if (si === null)
    try {
      new FormData(
        document.createElement("form"),
        // @ts-expect-error if FormData supports the submitter parameter, this will throw
        0
      ), si = !1;
    } catch {
      si = !0;
    }
  return si;
}
var qv = /* @__PURE__ */ new Set([
  "application/x-www-form-urlencoded",
  "multipart/form-data",
  "text/plain"
]);
function kl(r) {
  return r != null && !qv.has(r) ? (Ft(
    !1,
    `"${r}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${di}"`
  ), null) : r;
}
function Qv(r, a) {
  let i, u, d, f, p;
  if (Fv(r)) {
    let h = r.getAttribute("action");
    u = h ? xn(h, a) : null, i = r.getAttribute("method") || ci, d = kl(r.getAttribute("enctype")) || di, f = new FormData(r);
  } else if (Hv(r) || Wv(r) && (r.type === "submit" || r.type === "image")) {
    let h = r.form;
    if (h == null)
      throw new Error(
        'Cannot submit a <button> or <input type="submit"> without a <form>'
      );
    let y = r.getAttribute("formaction") || h.getAttribute("action");
    if (u = y ? xn(y, a) : null, i = r.getAttribute("formmethod") || h.getAttribute("method") || ci, d = kl(r.getAttribute("formenctype")) || kl(h.getAttribute("enctype")) || di, f = new FormData(h, r), !Vv()) {
      let { name: w, type: g, value: x } = r;
      if (g === "image") {
        let k = w ? `${w}.` : "";
        f.append(`${k}x`, "0"), f.append(`${k}y`, "0");
      } else w && f.append(w, x);
    }
  } else {
    if (wi(r))
      throw new Error(
        'Cannot submit element that is not <form>, <button>, or <input type="submit|image">'
      );
    i = ci, u = null, d = di, p = r;
  }
  return f && d === "text/plain" && (p = f, f = void 0), { action: u, method: i.toLowerCase(), encType: d, formData: f, body: p };
}
Object.getOwnPropertyNames(Object.prototype).sort().join("\0");
function ql(r, a) {
  if (r === !1 || r === null || typeof r > "u")
    throw new Error(a);
}
function ep(r, a, i, u) {
  let d = typeof r == "string" ? new URL(
    r,
    // This can be called during the SSR flow via PrefetchPageLinksImpl so
    // don't assume window is available
    typeof window > "u" ? "server://singlefetch/" : window.location.origin
  ) : r;
  return i ? d.pathname.endsWith("/") ? d.pathname = `${d.pathname}_.${u}` : d.pathname = `${d.pathname}.${u}` : d.pathname === "/" ? d.pathname = `_root.${u}` : a && xn(d.pathname, a) === "/" ? d.pathname = `${pi(a)}/_root.${u}` : d.pathname = `${pi(d.pathname)}.${u}`, d;
}
async function Kv(r, a) {
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
function Yv(r) {
  return r == null ? !1 : r.href == null ? r.rel === "preload" && typeof r.imageSrcSet == "string" && typeof r.imageSizes == "string" : typeof r.rel == "string" && typeof r.href == "string";
}
async function Jv(r, a, i) {
  let u = await Promise.all(
    r.map(async (d) => {
      let f = a.routes[d.route.id];
      if (f) {
        let p = await Kv(f, i);
        return p.links ? p.links() : [];
      }
      return [];
    })
  );
  return eg(
    u.flat(1).filter(Yv).filter((d) => d.rel === "stylesheet" || d.rel === "preload").map(
      (d) => d.rel === "stylesheet" ? { ...d, rel: "prefetch", as: "style" } : { ...d, rel: "prefetch" }
    )
  );
}
function pf(r, a, i, u, d, f) {
  let p = (y, w) => i[w] ? y.route.id !== i[w].route.id : !0, h = (y, w) => {
    var g;
    return (
      // param change, /users/123 -> /users/456
      i[w].pathname !== y.pathname || // splat param changed, which is not present in match.path
      // e.g. /files/images/avatar.jpg -> files/finances.xls
      ((g = i[w].route.path) == null ? void 0 : g.endsWith("*")) && i[w].params["*"] !== y.params["*"]
    );
  };
  return f === "assets" ? a.filter(
    (y, w) => p(y, w) || h(y, w)
  ) : f === "data" ? a.filter((y, w) => {
    var x;
    let g = u.routes[y.route.id];
    if (!g || !g.hasLoader)
      return !1;
    if (p(y, w) || h(y, w))
      return !0;
    if (y.route.shouldRevalidate) {
      let k = y.route.shouldRevalidate({
        currentUrl: new URL(
          d.pathname + d.search + d.hash,
          window.origin
        ),
        currentParams: ((x = i[0]) == null ? void 0 : x.params) || {},
        nextUrl: new URL(r, window.origin),
        nextParams: y.params,
        defaultShouldRevalidate: !0
      });
      if (typeof k == "boolean")
        return k;
    }
    return !0;
  }) : [];
}
function Gv(r, a, { includeHydrateFallback: i } = {}) {
  return Xv(
    r.map((u) => {
      let d = a.routes[u.route.id];
      if (!d) return [];
      let f = [d.module];
      return d.clientActionModule && (f = f.concat(d.clientActionModule)), d.clientLoaderModule && (f = f.concat(d.clientLoaderModule)), i && d.hydrateFallbackModule && (f = f.concat(d.hydrateFallbackModule)), d.imports && (f = f.concat(d.imports)), f;
    }).flat(1)
  );
}
function Xv(r) {
  return [...new Set(r)];
}
function Zv(r) {
  let a = {}, i = Object.keys(r).sort();
  for (let u of i)
    a[u] = r[u];
  return a;
}
function eg(r, a) {
  let i = /* @__PURE__ */ new Set();
  return new Set(a), r.reduce((u, d) => {
    let f = JSON.stringify(Zv(d));
    return i.has(f) || (i.add(f), u.push({ key: f, link: d })), u;
  }, []);
}
function Ql() {
  let r = v.useContext(Vr);
  return ql(
    r,
    "You must render this element inside a <DataRouterContext.Provider> element"
  ), r;
}
function tg() {
  let r = v.useContext(xi);
  return ql(
    r,
    "You must render this element inside a <DataRouterStateContext.Provider> element"
  ), r;
}
var Kl = v.createContext(void 0);
Kl.displayName = "FrameworkContext";
function Yl() {
  let r = v.useContext(Kl);
  return ql(
    r,
    "You must render this element inside a <HydratedRouter> element"
  ), r;
}
function ng(r, a) {
  let i = v.useContext(Kl), [u, d] = v.useState(!1), [f, p] = v.useState(!1), { onFocus: h, onBlur: y, onMouseEnter: w, onMouseLeave: g, onTouchStart: x } = a, k = v.useRef(null);
  v.useEffect(() => {
    if (r === "render" && p(!0), r === "viewport") {
      let C = (P) => {
        P.forEach((F) => {
          p(F.isIntersecting);
        });
      }, E = new IntersectionObserver(C, { threshold: 0.5 });
      return k.current && E.observe(k.current), () => {
        E.disconnect();
      };
    }
  }, [r]), v.useEffect(() => {
    if (u) {
      let C = setTimeout(() => {
        p(!0);
      }, 100);
      return () => {
        clearTimeout(C);
      };
    }
  }, [u]);
  let j = () => {
    d(!0);
  }, b = () => {
    d(!1), p(!1);
  };
  return i ? r !== "intent" ? [f, k, {}] : [
    f,
    k,
    {
      onFocus: Ls(h, j),
      onBlur: Ls(y, b),
      onMouseEnter: Ls(w, j),
      onMouseLeave: Ls(g, b),
      onTouchStart: Ls(x, j)
    }
  ] : [!1, k, {}];
}
function Ls(r, a) {
  return (i) => {
    r && r(i), i.defaultPrevented || a(i);
  };
}
function rg({ page: r, ...a }) {
  let i = vv(), { router: u } = Ql(), d = v.useMemo(
    () => zf(u.routes, r, u.basename),
    [u.routes, r, u.basename]
  );
  return d ? i ? /* @__PURE__ */ v.createElement(og, { page: r, matches: d, ...a }) : /* @__PURE__ */ v.createElement(ig, { page: r, matches: d, ...a }) : null;
}
function sg(r) {
  let { manifest: a, routeModules: i } = Yl(), [u, d] = v.useState([]);
  return v.useEffect(() => {
    let f = !1;
    return Jv(r, a, i).then(
      (p) => {
        f || d(p);
      }
    ), () => {
      f = !0;
    };
  }, [r, a, i]), u;
}
function og({
  page: r,
  matches: a,
  ...i
}) {
  let u = Ct(), { future: d } = Yl(), { basename: f } = Ql(), p = v.useMemo(() => {
    if (r === u.pathname + u.search + u.hash)
      return [];
    let h = ep(
      r,
      f,
      d.v8_trailingSlashAwareDataRequests,
      "rsc"
    ), y = !1, w = [];
    for (let g of a)
      typeof g.route.shouldRevalidate == "function" ? y = !0 : w.push(g.route.id);
    return y && w.length > 0 && h.searchParams.set("_routes", w.join(",")), [h.pathname + h.search];
  }, [
    f,
    d.v8_trailingSlashAwareDataRequests,
    r,
    u,
    a
  ]);
  return /* @__PURE__ */ v.createElement(v.Fragment, null, p.map((h) => /* @__PURE__ */ v.createElement("link", { key: h, rel: "prefetch", as: "fetch", href: h, ...i })));
}
function ig({
  page: r,
  matches: a,
  ...i
}) {
  let u = Ct(), { future: d, manifest: f, routeModules: p } = Yl(), { basename: h } = Ql(), { loaderData: y, matches: w } = tg(), g = v.useMemo(
    () => pf(
      r,
      a,
      w,
      f,
      u,
      "data"
    ),
    [r, a, w, f, u]
  ), x = v.useMemo(
    () => pf(
      r,
      a,
      w,
      f,
      u,
      "assets"
    ),
    [r, a, w, f, u]
  ), k = v.useMemo(() => {
    if (r === u.pathname + u.search + u.hash)
      return [];
    let C = /* @__PURE__ */ new Set(), E = !1;
    if (a.forEach((F) => {
      var A;
      let $ = f.routes[F.route.id];
      !$ || !$.hasLoader || (!g.some((z) => z.route.id === F.route.id) && F.route.id in y && ((A = p[F.route.id]) != null && A.shouldRevalidate) || $.hasClientLoader ? E = !0 : C.add(F.route.id));
    }), C.size === 0)
      return [];
    let P = ep(
      r,
      h,
      d.v8_trailingSlashAwareDataRequests,
      "data"
    );
    return E && C.size > 0 && P.searchParams.set(
      "_routes",
      a.filter((F) => C.has(F.route.id)).map((F) => F.route.id).join(",")
    ), [P.pathname + P.search];
  }, [
    h,
    d.v8_trailingSlashAwareDataRequests,
    y,
    u,
    f,
    g,
    a,
    r,
    p
  ]), j = v.useMemo(
    () => Gv(x, f),
    [x, f]
  ), b = sg(x);
  return /* @__PURE__ */ v.createElement(v.Fragment, null, k.map((C) => /* @__PURE__ */ v.createElement("link", { key: C, rel: "prefetch", as: "fetch", href: C, ...i })), j.map((C) => /* @__PURE__ */ v.createElement("link", { key: C, rel: "modulepreload", href: C, ...i })), b.map(({ key: C, link: E }) => (
    // these don't spread `linkProps` because they are full link descriptors
    // already with their own props
    /* @__PURE__ */ v.createElement(
      "link",
      {
        key: C,
        nonce: i.nonce,
        ...E,
        crossOrigin: E.crossOrigin ?? i.crossOrigin
      }
    )
  )));
}
function ag(...r) {
  return (a) => {
    r.forEach((i) => {
      typeof i == "function" ? i(a) : i != null && (i.current = a);
    });
  };
}
var lg = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u";
try {
  lg && (window.__reactRouterVersion = // @ts-expect-error
  "7.17.0");
} catch {
}
function ug({
  basename: r,
  children: a,
  useTransitions: i,
  window: u
}) {
  let d = v.useRef();
  d.current == null && (d.current = Wm({ window: u, v5Compat: !0 }));
  let f = d.current, [p, h] = v.useState({
    action: f.action,
    location: f.location
  }), y = v.useCallback(
    (w) => {
      i === !1 ? h(w) : v.startTransition(() => h(w));
    },
    [i]
  );
  return v.useLayoutEffect(() => f.listen(y), [f, y]), /* @__PURE__ */ v.createElement(
    Ov,
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
var tp = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i, np = v.forwardRef(
  function({
    onClick: a,
    discover: i = "render",
    prefetch: u = "none",
    relative: d,
    reloadDocument: f,
    replace: p,
    mask: h,
    state: y,
    target: w,
    to: g,
    preventScrollReset: x,
    viewTransition: k,
    defaultShouldRevalidate: j,
    ...b
  }, C) {
    let { basename: E, navigator: P, useTransitions: F } = v.useContext(Pt), $ = typeof g == "string" && tp.test(g), A = Uf(g, E);
    g = A.to;
    let z = Sv(g, { relative: d }), O = Ct(), Y = null;
    if (h) {
      let B = _i(
        h,
        [],
        O.mask ? O.mask.pathname : "/",
        !0
      );
      E !== "/" && (B.pathname = B.pathname === "/" ? E : Gt([E, B.pathname])), Y = P.createHref(B);
    }
    let [W, X, me] = ng(
      u,
      b
    ), pe = fg(g, {
      replace: p,
      mask: h,
      state: y,
      target: w,
      preventScrollReset: x,
      relative: d,
      viewTransition: k,
      defaultShouldRevalidate: j,
      useTransitions: F
    });
    function ge(B) {
      a && a(B), B.defaultPrevented || pe(B);
    }
    let ye = !(A.isExternal || f), we = (
      // eslint-disable-next-line jsx-a11y/anchor-has-content
      /* @__PURE__ */ v.createElement(
        "a",
        {
          ...b,
          ...me,
          href: (ye ? Y : void 0) || A.absoluteURL || z,
          onClick: ye ? ge : a,
          ref: ag(C, X),
          target: w,
          "data-discover": !$ && i === "render" ? "true" : void 0
        }
      )
    );
    return W && !$ ? /* @__PURE__ */ v.createElement(v.Fragment, null, we, /* @__PURE__ */ v.createElement(rg, { page: z })) : we;
  }
);
np.displayName = "Link";
var it = v.forwardRef(
  function({
    "aria-current": a = "page",
    caseSensitive: i = !1,
    className: u = "",
    end: d = !1,
    style: f,
    to: p,
    viewTransition: h,
    children: y,
    ...w
  }, g) {
    let x = qs(p, { relative: w.relative }), k = Ct(), j = v.useContext(xi), { navigator: b, basename: C } = v.useContext(Pt), E = j != null && // Conditional usage is OK here because the usage of a data router is static
    // eslint-disable-next-line react-hooks/rules-of-hooks
    gg(x) && h === !0, P = b.encodeLocation ? b.encodeLocation(x).pathname : x.pathname, F = k.pathname, $ = j && j.navigation && j.navigation.location ? j.navigation.location.pathname : null;
    i || (F = F.toLowerCase(), $ = $ ? $.toLowerCase() : null, P = P.toLowerCase()), $ && C && ($ = xn($, C) || $);
    const A = P !== "/" && P.endsWith("/") ? P.length - 1 : P.length;
    let z = F === P || !d && F.startsWith(P) && F.charAt(A) === "/", O = $ != null && ($ === P || !d && $.startsWith(P) && $.charAt(P.length) === "/"), Y = {
      isActive: z,
      isPending: O,
      isTransitioning: E
    }, W = z ? a : void 0, X;
    typeof u == "function" ? X = u(Y) : X = [
      u,
      z ? "active" : null,
      O ? "pending" : null,
      E ? "transitioning" : null
    ].filter(Boolean).join(" ");
    let me = typeof f == "function" ? f(Y) : f;
    return /* @__PURE__ */ v.createElement(
      np,
      {
        ...w,
        "aria-current": W,
        className: X,
        ref: g,
        style: me,
        to: p,
        viewTransition: h
      },
      typeof y == "function" ? y(Y) : y
    );
  }
);
it.displayName = "NavLink";
var cg = v.forwardRef(
  ({
    discover: r = "render",
    fetcherKey: a,
    navigate: i,
    reloadDocument: u,
    replace: d,
    state: f,
    method: p = ci,
    action: h,
    onSubmit: y,
    relative: w,
    preventScrollReset: g,
    viewTransition: x,
    defaultShouldRevalidate: k,
    ...j
  }, b) => {
    let { useTransitions: C } = v.useContext(Pt), E = mg(), P = vg(h, { relative: w }), F = p.toLowerCase() === "get" ? "get" : "post", $ = typeof h == "string" && tp.test(h), A = (z) => {
      if (y && y(z), z.defaultPrevented) return;
      z.preventDefault();
      let O = z.nativeEvent.submitter, Y = (O == null ? void 0 : O.getAttribute("formmethod")) || p, W = () => E(O || z.currentTarget, {
        fetcherKey: a,
        method: Y,
        navigate: i,
        replace: d,
        state: f,
        relative: w,
        preventScrollReset: g,
        viewTransition: x,
        defaultShouldRevalidate: k
      });
      C && i !== !1 ? v.startTransition(() => W()) : W();
    };
    return /* @__PURE__ */ v.createElement(
      "form",
      {
        ref: b,
        method: F,
        action: P,
        onSubmit: u ? y : A,
        ...j,
        "data-discover": !$ && r === "render" ? "true" : void 0
      }
    );
  }
);
cg.displayName = "Form";
function dg(r) {
  return `${r} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function rp(r) {
  let a = v.useContext(Vr);
  return ze(a, dg(r)), a;
}
function fg(r, {
  target: a,
  replace: i,
  mask: u,
  state: d,
  preventScrollReset: f,
  relative: p,
  viewTransition: h,
  defaultShouldRevalidate: y,
  useTransitions: w
} = {}) {
  let g = Bl(), x = Ct(), k = qs(r, { relative: p });
  return v.useCallback(
    (j) => {
      if (Uv(j, a)) {
        j.preventDefault();
        let b = i !== void 0 ? i : Us(x) === Us(k), C = () => g(r, {
          replace: b,
          mask: u,
          state: d,
          preventScrollReset: f,
          relative: p,
          viewTransition: h,
          defaultShouldRevalidate: y
        });
        w ? v.startTransition(() => C()) : C();
      }
    },
    [
      x,
      g,
      k,
      i,
      u,
      d,
      a,
      r,
      f,
      p,
      h,
      y,
      w
    ]
  );
}
var pg = 0, hg = () => `__${String(++pg)}__`;
function mg() {
  let { router: r } = rp(
    "useSubmit"
    /* UseSubmit */
  ), { basename: a } = v.useContext(Pt), i = Mv(), u = r.fetch, d = r.navigate;
  return v.useCallback(
    async (f, p = {}) => {
      let { action: h, method: y, encType: w, formData: g, body: x } = Qv(
        f,
        a
      );
      if (p.navigate === !1) {
        let k = p.fetcherKey || hg();
        await u(k, i, p.action || h, {
          defaultShouldRevalidate: p.defaultShouldRevalidate,
          preventScrollReset: p.preventScrollReset,
          formData: g,
          body: x,
          formMethod: p.method || y,
          formEncType: p.encType || w,
          flushSync: p.flushSync
        });
      } else
        await d(p.action || h, {
          defaultShouldRevalidate: p.defaultShouldRevalidate,
          preventScrollReset: p.preventScrollReset,
          formData: g,
          body: x,
          formMethod: p.method || y,
          formEncType: p.encType || w,
          replace: p.replace,
          state: p.state,
          fromRouteId: i,
          flushSync: p.flushSync,
          viewTransition: p.viewTransition
        });
    },
    [u, d, a, i]
  );
}
function vg(r, { relative: a } = {}) {
  let { basename: i } = v.useContext(Pt), u = v.useContext(ln);
  ze(u, "useFormAction must be used inside a RouteContext");
  let [d] = u.matches.slice(-1), f = { ...qs(r || ".", { relative: a }) }, p = Ct();
  if (r == null) {
    f.search = p.search;
    let h = new URLSearchParams(f.search), y = h.getAll("index");
    if (y.some((g) => g === "")) {
      h.delete("index"), y.filter((x) => x).forEach((x) => h.append("index", x));
      let g = h.toString();
      f.search = g ? `?${g}` : "";
    }
  }
  return (!r || r === ".") && d.route.index && (f.search = f.search ? f.search.replace(/^\?/, "?index&") : "?index"), i !== "/" && (f.pathname = f.pathname === "/" ? i : Gt([i, f.pathname])), Us(f);
}
function gg(r, { relative: a } = {}) {
  let i = v.useContext(Qf);
  ze(
    i != null,
    "`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?"
  );
  let { basename: u } = rp(
    "useViewTransitionState"
    /* useViewTransitionState */
  ), d = qs(r, { relative: a });
  if (!i.isTransitioning)
    return !1;
  let f = xn(i.currentLocation.pathname, u) || i.currentLocation.pathname, p = xn(i.nextLocation.pathname, u) || i.nextLocation.pathname;
  return fi(d.pathname, p) != null || fi(d.pathname, f) != null;
}
var sp = Of();
/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const op = (...r) => r.filter((a, i, u) => !!a && a.trim() !== "" && u.indexOf(a) === i).join(" ").trim();
/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const yg = (r) => r.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const _g = (r) => r.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (a, i, u) => u ? u.toUpperCase() : i.toLowerCase()
);
/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const hf = (r) => {
  const a = _g(r);
  return a.charAt(0).toUpperCase() + a.slice(1);
};
/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var Sl = {
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
const xg = (r) => {
  for (const a in r)
    if (a.startsWith("aria-") || a === "role" || a === "title")
      return !0;
  return !1;
}, wg = v.createContext({}), kg = () => v.useContext(wg), Sg = v.forwardRef(
  ({ color: r, size: a, strokeWidth: i, absoluteStrokeWidth: u, className: d = "", children: f, iconNode: p, ...h }, y) => {
    const {
      size: w = 24,
      strokeWidth: g = 2,
      absoluteStrokeWidth: x = !1,
      color: k = "currentColor",
      className: j = ""
    } = kg() ?? {}, b = u ?? x ? Number(i ?? g) * 24 / Number(a ?? w) : i ?? g;
    return v.createElement(
      "svg",
      {
        ref: y,
        ...Sl,
        width: a ?? w ?? Sl.width,
        height: a ?? w ?? Sl.height,
        stroke: r ?? k,
        strokeWidth: b,
        className: op("lucide", j, d),
        ...!f && !xg(h) && { "aria-hidden": "true" },
        ...h
      },
      [
        ...p.map(([C, E]) => v.createElement(C, E)),
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
    ({ className: u, ...d }, f) => v.createElement(Sg, {
      ref: f,
      iconNode: a,
      className: op(
        `lucide-${yg(hf(r))}`,
        `lucide-${r}`,
        u
      ),
      ...d
    })
  );
  return i.displayName = hf(r), i;
};
/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const jg = [
  ["circle", { cx: "12", cy: "13", r: "8", key: "3y4lt7" }],
  ["path", { d: "M12 9v4l2 2", key: "1c63tq" }],
  ["path", { d: "M5 3 2 6", key: "18tl5t" }],
  ["path", { d: "m22 6-3-3", key: "1opdir" }],
  ["path", { d: "M6.38 18.7 4 21", key: "17xu3x" }],
  ["path", { d: "M17.64 18.67 20 21", key: "kv2oe2" }]
], ip = je("alarm-clock", jg);
/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Cg = [
  ["path", { d: "m12 19-7-7 7-7", key: "1l729n" }],
  ["path", { d: "M19 12H5", key: "x3x0zl" }]
], Eg = je("arrow-left", Cg);
/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ng = [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "m12 5 7 7-7 7", key: "xquz4c" }]
], Tg = je("arrow-right", Ng);
/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const bg = [
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
], Jl = je("baby", bg);
/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ag = [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]], Rg = je("check", Ag);
/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Pg = [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]], ap = je("chevron-down", Pg);
/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const $g = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }]
], Mg = je("circle-check", $g);
/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ig = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3", key: "1u773s" }],
  ["path", { d: "M12 17h.01", key: "p32p05" }]
], Dg = je("circle-question-mark", Ig);
/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Lg = [["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }]], Og = je("circle", Lg);
/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const zg = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M12 6v6h4", key: "135r8i" }]
], Hg = je("clock-3", zg);
/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Fg = [
  [
    "path",
    { d: "M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3", key: "11bfej" }
  ]
], Wg = je("command", Fg);
/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Bg = [
  ["path", { d: "M12 15V3", key: "m9g1x1" }],
  ["path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4", key: "ih7n3h" }],
  ["path", { d: "m7 10 5 5 5-5", key: "brsn70" }]
], lp = je("download", Bg);
/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ug = [
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
], Vg = je("file-code-corner", Ug);
/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const qg = [
  ["path", { d: "M15 6a9 9 0 0 0-9 9V3", key: "1cii5b" }],
  ["circle", { cx: "18", cy: "6", r: "3", key: "1h7g24" }],
  ["circle", { cx: "6", cy: "18", r: "3", key: "fqmcym" }]
], Qg = je("git-branch", qg);
/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Kg = [
  [
    "path",
    {
      d: "M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3",
      key: "1xhozi"
    }
  ]
], Yg = je("headphones", Kg);
/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Jg = [
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
], Gg = je("layers", Jg);
/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Xg = [
  ["rect", { width: "7", height: "7", x: "3", y: "3", rx: "1", key: "1g98yp" }],
  ["rect", { width: "7", height: "7", x: "14", y: "3", rx: "1", key: "6d4xhi" }],
  ["rect", { width: "7", height: "7", x: "14", y: "14", rx: "1", key: "nxv5o0" }],
  ["rect", { width: "7", height: "7", x: "3", y: "14", rx: "1", key: "1bb6yr" }]
], Zg = je("layout-grid", Xg);
/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ey = [
  ["path", { d: "M4 5h16", key: "1tepv9" }],
  ["path", { d: "M4 12h16", key: "1lakjw" }],
  ["path", { d: "M4 19h16", key: "1djgab" }]
], up = je("menu", ey);
/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ty = [
  [
    "path",
    {
      d: "M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719",
      key: "1sd12s"
    }
  ]
], ny = je("message-circle", ty);
/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ry = [
  ["path", { d: "M12 19v3", key: "npa21l" }],
  ["path", { d: "M15 9.34V5a3 3 0 0 0-5.68-1.33", key: "1gzdoj" }],
  ["path", { d: "M16.95 16.95A7 7 0 0 1 5 12v-2", key: "cqa7eg" }],
  ["path", { d: "M18.89 13.23A7 7 0 0 0 19 12v-2", key: "16hl24" }],
  ["path", { d: "m2 2 20 20", key: "1ooewy" }],
  ["path", { d: "M9 9v3a3 3 0 0 0 5.12 2.12", key: "r2i35w" }]
], sy = je("mic-off", ry);
/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const oy = [
  ["path", { d: "M12 19v3", key: "npa21l" }],
  ["path", { d: "M19 10v2a7 7 0 0 1-14 0v-2", key: "1vc78b" }],
  ["rect", { x: "9", y: "2", width: "6", height: "13", rx: "3", key: "s6n7sd" }]
], iy = je("mic", oy);
/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ay = [
  ["path", { d: "M13 2a9 9 0 0 1 9 9", key: "1itnx2" }],
  ["path", { d: "M13 6a5 5 0 0 1 5 5", key: "11nki7" }],
  [
    "path",
    {
      d: "M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384",
      key: "9njp5v"
    }
  ]
], mf = je("phone-call", ay);
/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ly = [
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
], vf = je("phone-off", ly);
/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const uy = [
  [
    "path",
    {
      d: "M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384",
      key: "9njp5v"
    }
  ]
], hi = je("phone", uy);
/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const cy = [
  ["path", { d: "M16.247 7.761a6 6 0 0 1 0 8.478", key: "1fwjs5" }],
  ["path", { d: "M19.075 4.933a10 10 0 0 1 0 14.134", key: "ehdyv1" }],
  ["path", { d: "M4.925 19.067a10 10 0 0 1 0-14.134", key: "1q22gi" }],
  ["path", { d: "M7.753 16.239a6 6 0 0 1 0-8.478", key: "r2q7qm" }],
  ["circle", { cx: "12", cy: "12", r: "2", key: "1c9p78" }]
], dy = je("radio", cy);
/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const fy = [
  ["path", { d: "m21 21-4.34-4.34", key: "14j7rj" }],
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }]
], py = je("search", fy);
/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const hy = [
  [
    "path",
    {
      d: "M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915",
      key: "1i5ecw"
    }
  ],
  ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }]
], cp = je("settings", hy);
/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const my = [
  ["path", { d: "M10 5H3", key: "1qgfaw" }],
  ["path", { d: "M12 19H3", key: "yhmn1j" }],
  ["path", { d: "M14 3v4", key: "1sua03" }],
  ["path", { d: "M16 17v4", key: "1q0r14" }],
  ["path", { d: "M21 12h-9", key: "1o4lsq" }],
  ["path", { d: "M21 19h-5", key: "1rlt1p" }],
  ["path", { d: "M21 5h-7", key: "1oszz2" }],
  ["path", { d: "M8 10v4", key: "tgpxqk" }],
  ["path", { d: "M8 12H3", key: "a7s4jb" }]
], oi = je("sliders-horizontal", my);
/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const vy = [
  ["rect", { width: "16", height: "20", x: "4", y: "2", rx: "2", key: "1nb95v" }],
  ["path", { d: "M12 6h.01", key: "1vi96p" }],
  ["circle", { cx: "12", cy: "14", r: "4", key: "1jruaj" }],
  ["path", { d: "M12 14h.01", key: "1etili" }]
], Gl = je("speaker", vy);
/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const gy = [
  [
    "path",
    {
      d: "M21 9a2.4 2.4 0 0 0-.706-1.706l-3.588-3.588A2.4 2.4 0 0 0 15 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2z",
      key: "1dfntj"
    }
  ],
  ["path", { d: "M15 3v5a1 1 0 0 0 1 1h5", key: "6s6qgf" }]
], Xl = je("sticky-note", gy);
/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const yy = [
  ["line", { x1: "10", x2: "14", y1: "2", y2: "2", key: "14vaq8" }],
  ["line", { x1: "12", x2: "15", y1: "14", y2: "11", key: "17fdiu" }],
  ["circle", { cx: "12", cy: "14", r: "8", key: "1e1u0o" }]
], _y = je("timer", yy);
/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const xy = [
  [
    "path",
    {
      d: "m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",
      key: "wmoenq"
    }
  ],
  ["path", { d: "M12 9v4", key: "juzpu7" }],
  ["path", { d: "M12 17h.01", key: "p32p05" }]
], wy = je("triangle-alert", xy);
/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ky = [
  [
    "path",
    {
      d: "M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",
      key: "uqj9uw"
    }
  ],
  ["path", { d: "M16 9a5 5 0 0 1 0 6", key: "1q6k2b" }],
  ["path", { d: "M19.364 18.364a9 9 0 0 0 0-12.728", key: "ijwkga" }]
], Sy = je("volume-2", ky);
/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const jy = [
  ["rect", { width: "8", height: "8", x: "3", y: "3", rx: "2", key: "by2w9f" }],
  ["path", { d: "M7 11v4a2 2 0 0 0 2 2h4", key: "xkn7yn" }],
  ["rect", { width: "8", height: "8", x: "13", y: "13", rx: "2", key: "1cgmvn" }]
], gf = je("workflow", jy);
/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Cy = [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
], dp = je("x", Cy), Ey = { ru: "Тема", en: "Theme" }, Ny = { ru: "Тёмная", en: "Dark" }, Ty = { ru: "Светлая", en: "Light" }, by = { ru: "Токен", en: "Token" }, Ay = { ru: "Тип действия", en: "Action type" }, Ry = { ru: "Ветка диалога", en: "Conversation branch" }, Py = { ru: "Текст ответа", en: "Response text" }, $y = { ru: "Команда", en: "Command" }, My = { ru: "Название переменной", en: "Variable name" }, Iy = { ru: "Основная команда", en: "Main command" }, Dy = { ru: "Второстепенная команда", en: "Secondary command" }, Ly = { ru: "Прямая команда", en: "Direct command" }, Oy = { ru: "Дополнительные фразы", en: "Additional phrases" }, zy = { ru: "Удалённый сервер", en: "Remote server" }, Hy = { ru: "Вложенные команды", en: "Nested commands" }, Fy = { ru: "Тип вложенного значения", en: "Nested value type" }, Wy = { ru: "Тип данных", en: "Data type" }, By = { ru: "Вручную", en: "Manual" }, Uy = { ru: "Любой", en: "Any" }, Vy = { ru: "Любой", en: "Any" }, qy = { ru: "Текст", en: "Text" }, Qy = { ru: "Число", en: "Number" }, Ky = { ru: "Дата", en: "Date" }, Yy = { ru: "Время", en: "Time" }, Jy = {
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
  Theme: Ey,
  dark: Ny,
  light: Ty,
  "Client ID": { ru: "Идентификатор клиента", en: "Client ID" },
  "Is admin": { ru: "Администратор", en: "Administrator" },
  "Active remout": { ru: "Удалённый сервер", en: "Remote server" },
  "Enable API (/api/dialog/commands, /api/dialog/events, /api/dialog/event)": { ru: "Включить API (/api/dialog/commands, /api/dialog/events, /api/dialog/event)", en: "Enable API (/api/dialog/commands, /api/dialog/events, /api/dialog/event)" },
  "API Commands Token": { ru: "Токен API команд", en: "Commands API token" },
  "Global music timer": { ru: "Звук таймера по умолчанию", en: "Default timer sound" },
  "Global music alarm": { ru: "Звук будильника по умолчанию", en: "Default alarm sound" },
  "Timer / Alarm": { ru: "Таймеры и будильники", en: "Timers and alarms" },
  "Base URL": { ru: "Адрес сервера", en: "Server URL" },
  Token: by,
  actionType: Ay,
  actionTypeComponent: Ry,
  voiceResponse: Py,
  uuid: $y,
  mappingType: My,
  parent_type: Iy,
  children_type: Dy,
  children_direct_type: Ly,
  "Язык интерфейса": { ru: "Язык интерфейса", en: "Interface language" },
  subVoiceCommands: Oy,
  "Hide password": { ru: "Скрыть пароль", en: "Hide password" },
  "Show password": { ru: "Показать пароль", en: "Show password" },
  Условие: { ru: "Условие", en: "Condition" },
  Remote: zy,
  subDirectControl: Hy,
  subMappingType: Fy,
  valueType: Wy,
  manual: By,
  "mappingType:": { ru: "Тип значения:", en: "Value type:" },
  "Редактировать прямую команду": { ru: "Редактировать прямую команду", en: "Edit direct command" },
  "Создать прямую команду": { ru: "Создать прямую команду", en: "Create direct command" },
  all: Uy,
  All: Vy,
  string: qy,
  int: Qy,
  date: Ky,
  time: Yy,
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
  "Словарь сохранён и применяется без перезапуска.": { ru: "Словарь сохранён и применяется без перезапуска.", en: "Dictionary saved and applied without restarting." },
  Стоп: { ru: "Стоп", en: "Stop" },
  "Включить команду «Стоп»": { ru: "Включить команду «Стоп»", en: "Enable the Stop command" },
  "Фразы завершения диалога через ;. Работают для основных команд и продолжений. Проверяется совпадение всей фразы.": { ru: "Фразы завершения диалога через ;. Работают для основных команд и продолжений. Проверяется совпадение всей фразы.", en: "Separate phrases with ;. They end the dialogue for main commands and continuations. The entire phrase must match." },
  Напоминания: { ru: "Напоминания", en: "Reminders" },
  "Добавить напоминание": { ru: "Добавить напоминание", en: "Add reminder" },
  "Удалить напоминание": { ru: "Удалить напоминание", en: "Delete reminder" },
  "Что напомнить": { ru: "Что напомнить", en: "What to remind" },
  "Где напомнить": { ru: "Где напомнить", en: "Speaker" },
  "Когда напомнить": { ru: "Когда напомнить", en: "When to remind" },
  "Через интервал": { ru: "Через интервал", en: "After a delay" },
  "Дата и время": { ru: "Дата и время", en: "Date and time" },
  "Через сколько минут": { ru: "Через сколько минут", en: "Minutes from now" },
  "Нет напоминаний.": { ru: "Нет напоминаний.", en: "No reminders." },
  Ожидает: { ru: "Ожидает", en: "Pending" },
  Озвучивается: { ru: "Озвучивается", en: "Announcing" },
  Озвучено: { ru: "Озвучено", en: "Announced" },
  "Не удалось озвучить": { ru: "Не удалось озвучить", en: "Announcement failed" },
  "В выбранное время колонка озвучит текст напоминания целиком.": { ru: "В выбранное время колонка озвучит текст напоминания целиком.", en: "The speaker will announce the full reminder text at the scheduled time." },
  "Напомнить насыпать еды через 30 минут": { ru: "Напомнить насыпать еды через 30 минут", en: "Remind me to feed the pet in 30 minutes" },
  "Нет доступных колонок. Добавьте колонку в Home Assistant.": { ru: "Нет доступных колонок. Добавьте колонку в Home Assistant.", en: "No speakers available. Add a speaker in Home Assistant." },
  "Дата и время — в часовом поясе вашего устройства.": { ru: "Дата и время — в часовом поясе вашего устройства.", en: "Date and time use your device’s timezone." },
  "Передано на колонку": { ru: "Передано на колонку", en: "Sent to speaker" }
}, fp = "ha-dialog-ui-language";
let Zl = localStorage.getItem(fp) === "en" ? "en" : "ru";
const Pl = /* @__PURE__ */ new Set();
function Gy(r) {
  Zl = r, localStorage.setItem(fp, r), Pl.forEach((a) => a());
}
function eu() {
  return v.useSyncExternalStore((r) => (Pl.add(r), () => {
    Pl.delete(r);
  }), () => Zl);
}
function _(r) {
  if (typeof r != "string") return r;
  const a = Jy[r];
  return (a == null ? void 0 : a[Zl]) ?? r;
}
const Xy = "_button_180pj_1", Zy = "_full_180pj_32", e_ = "_primary_180pj_37", t_ = "_secondary_180pj_49", n_ = "_ghost_180pj_61", r_ = "_remove_180pj_83", jl = {
  button: Xy,
  full: Zy,
  primary: e_,
  secondary: t_,
  ghost: n_,
  remove: r_
}, ne = ({
  children: r,
  variant: a = "primary",
  fullWidth: i = !1,
  leftIcon: u,
  rightIcon: d,
  className: f = "",
  ...p
}) => /* @__PURE__ */ o.jsxs(
  "button",
  {
    ...p,
    className: `
        ${jl.button}
        ${jl[a]}
        ${i ? jl.full : ""}
        ${f}
      `,
    children: [
      u,
      r,
      d
    ]
  }
), $l = "ha-dialog-ui-api-enabled-change", pp = v.createContext(!1), tu = () => v.useContext(pp), hp = v.createContext(!1), nu = () => v.useContext(hp), mi = "ha-dialog-ui-remote-server-change", mp = v.createContext(null), qr = () => v.useContext(mp), Ye = (r = 768) => {
  const [a, i] = v.useState(
    window.innerWidth <= r
  );
  return v.useEffect(() => {
    const u = window.matchMedia(`(max-width: ${r}px)`), d = (f) => {
      i(f.matches);
    };
    return i(u.matches), u.addEventListener("change", d), () => u.removeEventListener("change", d);
  }, [r]), a;
}, s_ = "_tabs_1vwxg_1", o_ = "_dropdown_1vwxg_16", i_ = "_tab_1vwxg_1", a_ = "_active_1vwxg_49", l_ = "_menu_1vwxg_59", u_ = "_chevron_1vwxg_76", c_ = "_menuItem_1vwxg_84", de = {
  tabs: s_,
  dropdown: o_,
  tab: i_,
  active: a_,
  menu: l_,
  chevron: u_,
  menuItem: c_
}, at = () => {
  const r = Ye(), a = tu(), i = nu(), u = qr(), d = Ct(), [f, p] = v.useState(!1), h = v.useRef(null), y = v.useRef(null), w = v.useId();
  if (v.useEffect(() => {
    p(!1);
  }, [d.pathname, r, u]), v.useEffect(() => {
    if (!f) return;
    const g = (x) => {
      h.current && !x.composedPath().includes(h.current) && p(!1);
    };
    return document.addEventListener("pointerdown", g), document.addEventListener("focusin", g), () => {
      document.removeEventListener("pointerdown", g), document.removeEventListener("focusin", g);
    };
  }, [f]), !r)
    return /* @__PURE__ */ o.jsxs("div", { className: de.tabs, children: [
      u === !0 && /* @__PURE__ */ o.jsxs(
        it,
        {
          to: "/scripts",
          className: ({ isActive: g }) => g ? `${de.tab} ${de.active}` : de.tab,
          children: [
            /* @__PURE__ */ o.jsx(Vg, { size: 16, strokeWidth: 2 }),
            /* @__PURE__ */ o.jsx("span", { children: _(u ? "Действия удалённых команд" : "Запуск скриптов") })
          ]
        }
      ),
      u === !1 && /* @__PURE__ */ o.jsxs(
        "div",
        {
          className: de.dropdown,
          ref: h,
          onKeyDown: (g) => {
            var x;
            g.key === "Escape" && f && (g.stopPropagation(), p(!1), (x = y.current) == null || x.focus());
          },
          children: [
            /* @__PURE__ */ o.jsxs(
              "button",
              {
                type: "button",
                ref: y,
                className: `${de.tab} ${d.pathname.startsWith("/commands") ? de.active : ""}`,
                "aria-expanded": f,
                "aria-controls": w,
                onClick: () => p((g) => !g),
                onKeyDown: (g) => {
                  g.key === "ArrowDown" && (g.preventDefault(), p(!0), requestAnimationFrame(() => {
                    var x, k;
                    return (k = (x = h.current) == null ? void 0 : x.querySelector("a")) == null ? void 0 : k.focus();
                  }));
                },
                children: [
                  /* @__PURE__ */ o.jsx(Wg, { size: 16, strokeWidth: 2 }),
                  /* @__PURE__ */ o.jsx("span", { children: _("Команды") }),
                  /* @__PURE__ */ o.jsx(ap, { size: 14, className: de.chevron })
                ]
              }
            ),
            f && /* @__PURE__ */ o.jsxs(
              "nav",
              {
                id: w,
                className: de.menu,
                "aria-label": _("Разделы команд"),
                onClick: () => p(!1),
                children: [
                  /* @__PURE__ */ o.jsx(
                    it,
                    {
                      to: "/commands/main",
                      className: ({ isActive: g }) => g ? `${de.menuItem} ${de.active}` : de.menuItem,
                      children: _("Основные команды")
                    }
                  ),
                  /* @__PURE__ */ o.jsx(
                    it,
                    {
                      to: "/commands/sub",
                      className: ({ isActive: g }) => g ? `${de.menuItem} ${de.active}` : de.menuItem,
                      children: _("Второстепенные команды")
                    }
                  ),
                  /* @__PURE__ */ o.jsx(
                    it,
                    {
                      to: "/commands/direct/main",
                      className: ({ isActive: g }) => g ? `${de.menuItem} ${de.active}` : de.menuItem,
                      children: _("Прямые команды")
                    }
                  ),
                  /* @__PURE__ */ o.jsx(
                    it,
                    {
                      to: "/commands/settings",
                      className: ({ isActive: g }) => g ? `${de.menuItem} ${de.active}` : de.menuItem,
                      children: _("Ответы по умолчанию")
                    }
                  ),
                  i && /* @__PURE__ */ o.jsx(it, { to: "/commands/normalization", className: ({ isActive: g }) => g ? `${de.menuItem} ${de.active}` : de.menuItem, children: _("Настройки распознавания") }),
                  i && /* @__PURE__ */ o.jsx(
                    it,
                    {
                      to: "/commands/whisper",
                      className: ({ isActive: g }) => g ? `${de.menuItem} ${de.active}` : de.menuItem,
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
        it,
        {
          to: "/timer",
          className: ({ isActive: g }) => g ? `${de.tab} ${de.active}` : de.tab,
          children: [
            /* @__PURE__ */ o.jsx(_y, { size: 16, strokeWidth: 2 }),
            /* @__PURE__ */ o.jsx("span", { children: _("Таймеры") })
          ]
        }
      ),
      /* @__PURE__ */ o.jsxs(
        it,
        {
          to: "/alarm",
          className: ({ isActive: g }) => g ? `${de.tab} ${de.active}` : de.tab,
          children: [
            /* @__PURE__ */ o.jsx(ip, { size: 16, strokeWidth: 2 }),
            /* @__PURE__ */ o.jsx("span", { children: _("Будильники") })
          ]
        }
      ),
      /* @__PURE__ */ o.jsxs(it, { to: "/reminders", className: ({ isActive: g }) => g ? `${de.tab} ${de.active}` : de.tab, children: [
        /* @__PURE__ */ o.jsx(Xl, { size: 16 }),
        /* @__PURE__ */ o.jsx("span", { children: _("Напоминания") })
      ] }),
      /* @__PURE__ */ o.jsxs(it, { to: "/monitor", className: ({ isActive: g }) => g ? `${de.tab} ${de.active}` : de.tab, children: [
        /* @__PURE__ */ o.jsx(Jl, { size: 16 }),
        /* @__PURE__ */ o.jsx("span", { children: _("Радионяня") })
      ] }),
      /* @__PURE__ */ o.jsxs(it, { to: "/calls", className: ({ isActive: g }) => g ? `${de.tab} ${de.active}` : de.tab, children: [
        /* @__PURE__ */ o.jsx(hi, { size: 16 }),
        /* @__PURE__ */ o.jsx("span", { children: _("Звонки") })
      ] }),
      i && /* @__PURE__ */ o.jsxs(it, { to: "/downloads", className: ({ isActive: g }) => g ? `${de.tab} ${de.active}` : de.tab, children: [
        /* @__PURE__ */ o.jsx(lp, { size: 16 }),
        /* @__PURE__ */ o.jsx("span", { children: _("Импорт и экспорт") })
      ] }),
      a && i && /* @__PURE__ */ o.jsx(it, { to: "/logs", className: ({ isActive: g }) => g ? `${de.tab} ${de.active}` : de.tab, children: _("Логи") }),
      /* @__PURE__ */ o.jsxs(
        it,
        {
          to: "/settings",
          className: ({ isActive: g }) => g ? `${de.tab} ${de.active}` : de.tab,
          children: [
            /* @__PURE__ */ o.jsx(cp, { size: 16, strokeWidth: 2 }),
            /* @__PURE__ */ o.jsx("span", { children: _("Настройки") })
          ]
        }
      )
    ] });
}, Os = "dialogCustomUiOverlay", ii = [], vi = /* @__PURE__ */ new Set();
let d_ = 0, Fr = null, Ml = !1;
function f_() {
  Ml = !0, window.addEventListener("popstate", () => {
    Ml = !1;
    const r = [...vi];
    vi.clear(), queueMicrotask(() => r.forEach((a) => a()));
  }, { once: !0 }), history.back();
}
function vp(r, a) {
  const i = Ye(), u = v.useRef(a);
  u.current = a, v.useEffect(() => {
    if (!r || !i) return;
    const d = `overlay-${++d_}`;
    let f = !1, p = !1, h = !1;
    const y = () => {
      var g;
      ii.at(-1) !== d || ((g = history.state) == null ? void 0 : g[Os]) === d || (f = !0, u.current());
    }, w = () => {
      var x;
      if (h) return;
      p = !0, ii.push(d);
      const g = { ...history.state, [Os]: d };
      Fr && ((x = history.state) == null ? void 0 : x[Os]) === Fr ? (history.replaceState(g, ""), Fr = null) : history.pushState(g, ""), window.addEventListener("popstate", y);
    };
    return Ml ? vi.add(w) : w(), () => {
      var g;
      h = !0, vi.delete(w), window.removeEventListener("popstate", y), p && (ii.splice(ii.indexOf(d), 1), !f && ((g = history.state) == null ? void 0 : g[Os]) === d && (Fr = d, queueMicrotask(() => {
        var x;
        Fr === d && (Fr = null, ((x = history.state) == null ? void 0 : x[Os]) === d && f_());
      })));
    };
  }, [r, i]);
}
const p_ = "_overlay_tb5vv_1", h_ = "_sheet_tb5vv_11", m_ = "_handle_tb5vv_21", lr = {
  overlay: p_,
  sheet: h_,
  handle: m_
}, ru = ({
  open: r,
  className: a = "",
  labelledBy: i,
  onClose: u,
  children: d
}) => {
  vp(r, u);
  const [f, p] = v.useState(r), [h, y] = v.useState(r), w = v.useRef(0), g = v.useRef(0), [x, k] = v.useState(0);
  v.useEffect(() => {
    const E = document.body.style.overflow;
    if (r)
      p(!0), requestAnimationFrame(() => {
        y(!0);
      }), document.body.style.overflow = "hidden";
    else {
      y(!1);
      const P = setTimeout(() => {
        p(!1);
      }, 300);
      return () => clearTimeout(P);
    }
    return () => {
      document.body.style.overflow = E;
    };
  }, [r]);
  const j = (E) => {
    w.current = E.touches[0].clientY;
  }, b = (E) => {
    g.current = E.touches[0].clientY;
    const P = g.current - w.current;
    P > 0 && k(P);
  }, C = () => {
    x > 120 && u(), k(0);
  };
  return v.useEffect(() => {
    const E = (P) => {
      P.key === "Escape" && u();
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
  }, [r, u]), f ? /* @__PURE__ */ o.jsx(
    "div",
    {
      className: `${lr.overlay} ${h ? lr.visible : ""} ${a}`,
      onClick: u,
      children: /* @__PURE__ */ o.jsxs(
        "section",
        {
          className: `${lr.sheet} ${h ? lr.open : ""}`,
          style: {
            transform: `translateY(${x}px)`,
            transition: x === 0 ? "transform .3s cubic-bezier(.32,.72,0,1)" : "none"
          },
          onClick: (E) => E.stopPropagation(),
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": i,
          children: [
            /* @__PURE__ */ o.jsx(
              "div",
              {
                className: lr.handleArea,
                onTouchStart: j,
                onTouchMove: b,
                onTouchEnd: C,
                children: /* @__PURE__ */ o.jsx("div", { className: lr.handle })
              }
            ),
            /* @__PURE__ */ o.jsx("div", { className: lr.content, children: d })
          ]
        }
      )
    }
  ) : null;
}, v_ = "_overlay_avpnk_1", g_ = "_heading_avpnk_16", y_ = "_close_avpnk_32", __ = "_nav_avpnk_45", x_ = "_item_avpnk_51", w_ = "_icon_avpnk_70", k_ = "_label_avpnk_78", S_ = "_arrow_avpnk_86", j_ = "_active_avpnk_91", yn = {
  overlay: v_,
  heading: g_,
  close: y_,
  nav: __,
  item: x_,
  icon: w_,
  label: k_,
  arrow: S_,
  active: j_
};
function C_({ open: r, onClose: a }) {
  const i = tu(), u = nu(), d = qr(), { pathname: f } = Ct(), p = v.useId(), h = v.useRef(null), y = [
    ...d === !1 ? [
      { to: "/commands/main", label: "Основные команды", icon: ny },
      { to: "/commands/sub", label: "Второстепенные команды", icon: Qg },
      { to: "/commands/direct/main", label: "Прямые команды", icon: gf },
      { to: "/commands/direct/template", label: "Вложенные команды", icon: Gg },
      { to: "/commands/settings", label: "Ответы по умолчанию", icon: oi },
      ...u ? [{ to: "/commands/normalization", label: "Настройки распознавания", icon: oi }] : [],
      ...u ? [{ to: "/commands/whisper", label: "Промпт распознавания", icon: oi }] : []
    ] : d === !0 ? [{ to: "/scripts", label: "Действия удалённых команд", icon: gf }] : [],
    { to: "/timer", label: "Таймеры", icon: Hg },
    { to: "/alarm", label: "Будильники", icon: ip },
    { to: "/reminders", label: "Напоминания", icon: Xl },
    { to: "/monitor", label: "Радионяня", icon: Jl },
    { to: "/calls", label: "Звонки", icon: hi },
    ...u ? [{ to: "/downloads", label: "Импорт и экспорт", icon: lp }] : [],
    ...i && u ? [{ to: "/logs", label: "Логи", icon: oi }] : [],
    { to: "/settings", label: "Настройки", icon: cp }
  ];
  return v.useEffect(() => {
    if (!r) return;
    const w = requestAnimationFrame(() => {
      var g, x, k;
      return (k = ((g = h.current) == null ? void 0 : g.querySelector('[aria-current="page"]')) ?? ((x = h.current) == null ? void 0 : x.querySelector("a"))) == null ? void 0 : k.focus();
    });
    return () => cancelAnimationFrame(w);
  }, [r]), /* @__PURE__ */ o.jsx(ru, { open: r, onClose: a, labelledBy: p, className: yn.overlay, children: /* @__PURE__ */ o.jsxs("div", { ref: h, onKeyDown: (w) => {
    if (w.key !== "Tab") return;
    const g = [...h.current.querySelectorAll("button, a")], x = g[0], k = g[g.length - 1];
    w.shiftKey && w.target === x ? (w.preventDefault(), k.focus()) : !w.shiftKey && w.target === k && (w.preventDefault(), x.focus());
  }, children: [
    /* @__PURE__ */ o.jsxs("div", { className: yn.heading, children: [
      /* @__PURE__ */ o.jsx("h2", { id: p, children: _("Разделы") }),
      /* @__PURE__ */ o.jsx("button", { type: "button", className: yn.close, "aria-label": _("Закрыть меню разделов"), onClick: a, children: /* @__PURE__ */ o.jsx(dp, { size: 20 }) })
    ] }),
    /* @__PURE__ */ o.jsx("nav", { className: yn.nav, "aria-label": _("Навигация интеграции"), children: y.map(({ to: w, label: g, icon: x }) => /* @__PURE__ */ o.jsxs(
      it,
      {
        to: w,
        end: !0,
        className: ({ isActive: k }) => `${yn.item} ${k ? yn.active : ""}`,
        onClick: (k) => {
          f === w && k.preventDefault(), a();
        },
        children: [
          /* @__PURE__ */ o.jsx("span", { className: yn.icon, children: /* @__PURE__ */ o.jsx(x, { size: 20, strokeWidth: 1.8 }) }),
          /* @__PURE__ */ o.jsx("span", { className: yn.label, children: _(g) }),
          f === w ? /* @__PURE__ */ o.jsx(Rg, { size: 18, "aria-hidden": "true" }) : /* @__PURE__ */ o.jsx(Tg, { size: 16, className: yn.arrow, "aria-hidden": "true" })
        ]
      },
      w
    )) })
  ] }) });
}
const E_ = "_search_1h7xe_1", N_ = {
  search: E_
};
function Qr({ value: r, onChange: a }) {
  return /* @__PURE__ */ o.jsxs("div", { className: N_.search, children: [
    /* @__PURE__ */ o.jsx(py, { size: 18, "aria-hidden": "true" }),
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
const T_ = "_header_1pxju_1", b_ = "_bar_1pxju_9", A_ = "_tools_1pxju_18", R_ = "_title_1pxju_31", P_ = "_menuButton_1pxju_38", $_ = "_active_1pxju_76", ur = {
  header: T_,
  bar: b_,
  tools: A_,
  title: R_,
  menuButton: P_,
  active: $_
}, lt = ({ title: r = "", search: a, beforeSearch: i }) => {
  const u = Ye(), [d, f] = v.useState(!1), p = v.useRef(null), h = () => {
    var y;
    f(!1), (y = p.current) == null || y.focus();
  };
  return v.useEffect(() => {
    u || f(!1);
  }, [u]), /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
    /* @__PURE__ */ o.jsxs("header", { className: ur.header, children: [
      /* @__PURE__ */ o.jsxs("div", { className: ur.bar, children: [
        /* @__PURE__ */ o.jsx(
          "button",
          {
            type: "button",
            "aria-label": _("Открыть меню Home Assistant"),
            className: ur.menuButton,
            onClick: (y) => y.currentTarget.dispatchEvent(new CustomEvent("hass-toggle-menu", { bubbles: !0, composed: !0 })),
            children: /* @__PURE__ */ o.jsx(up, { size: 20 })
          }
        ),
        /* @__PURE__ */ o.jsx("h1", { className: ur.title, children: _(r) }),
        /* @__PURE__ */ o.jsx(
          "button",
          {
            type: "button",
            ref: p,
            "aria-label": _("Открыть меню разделов"),
            "aria-haspopup": "dialog",
            "aria-expanded": d,
            className: `${ur.menuButton} ${d ? ur.active : ""}`,
            onClick: () => f(!0),
            children: /* @__PURE__ */ o.jsx(Zg, { size: 20 })
          }
        )
      ] }),
      u && (i || a) && /* @__PURE__ */ o.jsxs("div", { className: ur.tools, children: [
        i,
        a && /* @__PURE__ */ o.jsx(Qr, { ...a })
      ] })
    ] }),
    u && /* @__PURE__ */ o.jsx(C_, { open: d, onClose: h })
  ] });
};
function M_({ retry: r }) {
  const a = mr();
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
          /* @__PURE__ */ o.jsx(at, {}),
          /* @__PURE__ */ o.jsx(lt, { title: _("Панель диалога") })
        ] }) : /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
          /* @__PURE__ */ o.jsx(
            ne,
            {
              variant: "ghost",
              "aria-label": _("Открыть меню Home Assistant"),
              onClick: (u) => u.currentTarget.dispatchEvent(
                new CustomEvent("hass-toggle-menu", {
                  bubbles: !0,
                  composed: !0
                })
              ),
              children: /* @__PURE__ */ o.jsx(up, { size: 22 })
            }
          ),
          /* @__PURE__ */ o.jsx("nav", { "aria-label": _("Разделы панели"), children: [
            ["/", "Главная"],
            ["/timer", "Таймеры"],
            ["/alarm", "Будильники"],
            ["/monitor", "Радионяня"],
            ["/calls", "Звонки"],
            ["/settings", "Настройки"]
          ].map(([u, d]) => /* @__PURE__ */ o.jsx(
            "a",
            {
              href: `#${u}`,
              onClick: (f) => {
                f.preventDefault(), window.location.hash = u, r();
              },
              children: _(d)
            },
            u
          )) })
        ] }) }),
        /* @__PURE__ */ o.jsx("main", { className: "panelRecoveryContent", children: /* @__PURE__ */ o.jsxs("div", { role: "alert", className: "panelRecoveryMessage", children: [
          /* @__PURE__ */ o.jsx("p", { children: _("Не удалось открыть панель. Попробуйте ещё раз.") }),
          /* @__PURE__ */ o.jsx(ne, { onClick: r, children: _("Открыть повторно") })
        ] }) })
      ]
    }
  );
}
class gp extends v.Component {
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
  componentDidCatch(i, u) {
    console.error(
      "[ha_dialog_ui] Panel render failed",
      i,
      u.componentStack
    );
  }
  render() {
    return this.state.failed ? /* @__PURE__ */ o.jsx(M_, { retry: this.retry }) : this.props.children;
  }
}
const I_ = "_container_x92qn_1", D_ = "_rows_x92qn_9", L_ = "_hidden_x92qn_20", O_ = "_overlay_x92qn_24", z_ = "_card_x92qn_32", H_ = "_title_x92qn_51", F_ = "_subtitle_x92qn_51", W_ = "_srOnly_x92qn_70", B_ = "_grid_x92qn_89", sn = {
  container: I_,
  rows: D_,
  hidden: L_,
  overlay: O_,
  card: z_,
  title: H_,
  subtitle: F_,
  srOnly: W_,
  grid: B_
};
function Wt({ loading: r, itemCount: a, append: i = !1, children: u, placeholderCount: d = 10, grid: f = !1, label: p = "Загрузка..." }) {
  const h = r && a > 0 && !i, y = r && /* @__PURE__ */ o.jsxs("div", { className: `${h ? sn.overlay : sn.rows} ${f ? sn.grid : ""}`, role: "status", "aria-live": "polite", children: [
    /* @__PURE__ */ o.jsx("span", { className: sn.srOnly, children: _(p) }),
    Array.from({ length: h ? a : i && a > 0 ? 3 : d }, (w, g) => /* @__PURE__ */ o.jsxs("div", { className: sn.card, "aria-hidden": "true", children: [
      /* @__PURE__ */ o.jsx("span", { className: sn.title }),
      /* @__PURE__ */ o.jsx("span", { className: sn.subtitle })
    ] }, g))
  ] });
  return /* @__PURE__ */ o.jsxs("div", { className: sn.container, "aria-busy": r, children: [
    /* @__PURE__ */ o.jsx("div", { className: `${sn.rows} ${h ? sn.hidden : ""}`, "aria-hidden": h || void 0, children: u }),
    y
  ] });
}
const U_ = "_loader_1tvqb_1", V_ = "_fullscreen_1tvqb_7", yf = {
  loader: U_,
  fullscreen: V_
}, Qs = ({ label: r = "Загрузка...", fullscreen: a = !1 }) => /* @__PURE__ */ o.jsx("div", { className: `${yf.loader} ${a ? yf.fullscreen : ""}`, children: /* @__PURE__ */ o.jsx(Wt, { loading: !0, itemCount: 0, placeholderCount: 4, label: r }) }), q_ = "_error_fi1f1_1", Q_ = {
  error: q_
}, Qe = ({ error: r, retry: a, busy: i = !1 }) => r ? /* @__PURE__ */ o.jsxs("div", { role: "alert", className: Q_.error, children: [
  /* @__PURE__ */ o.jsx("p", { children: _(r) }),
  a && /* @__PURE__ */ o.jsx(ne, { variant: "secondary", disabled: i, onClick: a, children: _("Повторить загрузку") })
] }) : null, _f = {
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
function jt(r, a = "Не удалось выполнить операцию. Проверьте журнал Home Assistant и повторите попытку.") {
  return r && typeof r == "object" && "code" in r && typeof r.code == "string" ? (r.code === "call_error" || r.code === "monitor_error" || r.code === "whisper_prompt_error" || r.code === "reminder_error") && "message" in r && typeof r.message == "string" ? r.message : _f[r.code] ?? a : r instanceof Error && /connection|network|fetch|disconnected/i.test(r.message) ? _f.connection_lost : a;
}
function Rt() {
  const [r, a] = v.useState(null), [i, u] = v.useState(!1), [d, f] = v.useState(!1), p = v.useRef(0), h = v.useRef(null), y = v.useCallback(async (x, k = {}) => {
    if (k.exclusive && p.current > 0) return !1;
    p.current += 1, u(!0), a(null), f(!1);
    try {
      return await x(), h.current = null, !0;
    } catch (j) {
      return a(jt(j, k.fallback)), h.current = k.retryable ? x : null, f(!!k.retryable), !1;
    } finally {
      p.current -= 1, u(p.current > 0);
    }
  }, []), w = v.useCallback(() => {
    h.current && y(h.current, { retryable: !0 });
  }, [y]), g = v.useCallback(() => {
    a(null), f(!1), h.current = null;
  }, []);
  return { error: r, busy: i, retry: d ? w : void 0, run: y, clearError: g };
}
const yp = v.createContext(null);
function nt() {
  const r = v.useContext(yp);
  if (!r)
    throw new Error(
      "DialogContext not initialized"
    );
  return r;
}
const K_ = "_subtitle_c1esh_1", Y_ = "_card_c1esh_6", J_ = "_content_c1esh_32", G_ = "_title_c1esh_40", X_ = "_arrow_c1esh_46", Z_ = "_titleOnly_c1esh_57", Wr = {
  subtitle: K_,
  card: Y_,
  content: J_,
  title: G_,
  arrow: X_,
  titleOnly: Z_
}, qn = ({
  title: r,
  subTitle: a,
  onClick: i
}) => /* @__PURE__ */ o.jsxs(
  "button",
  {
    type: "button",
    className: `${Wr.card} ${a ? "" : Wr.titleOnly}`,
    onClick: i,
    children: [
      /* @__PURE__ */ o.jsxs("div", { className: Wr.content, children: [
        /* @__PURE__ */ o.jsx("div", { className: Wr.title, children: r }),
        a && /* @__PURE__ */ o.jsx("div", { className: Wr.subtitle, children: _(a) })
      ] }),
      /* @__PURE__ */ o.jsx("div", { className: Wr.arrow, "aria-hidden": "true", children: "→" })
    ]
  }
), e1 = "_overlay_1m3e5_1", t1 = "_modal_1m3e5_1", n1 = "_header_1m3e5_1", r1 = "_body_1m3e5_1", s1 = "_footer_1m3e5_1", o1 = "_sm_1m3e5_32", i1 = "_md_1m3e5_36", a1 = "_lg_1m3e5_40", l1 = "_xl_1m3e5_44", u1 = "_title_1m3e5_59", c1 = "_close_1m3e5_86", d1 = "_fields_1m3e5_116", f1 = "_suspended_1m3e5_124", p1 = "_heading_1m3e5_128", St = {
  overlay: e1,
  modal: t1,
  header: n1,
  body: r1,
  footer: s1,
  sm: o1,
  md: i1,
  lg: a1,
  xl: l1,
  title: u1,
  close: c1,
  fields: d1,
  suspended: f1,
  heading: p1
}, $t = ({
  open: r,
  suspended: a = !1,
  feedback: i,
  onClose: u,
  onBack: d,
  title: f,
  dialogLabel: p,
  subtitle: h,
  footer: y,
  children: w,
  size: g = "md"
}) => (vp(r, u), v.useEffect(() => {
  if (!r || a) return;
  document.body.style.overflow = "hidden";
  const x = (k) => {
    k.key === "Escape" && u();
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
}, [r, u, a]), r ? /* @__PURE__ */ o.jsx(
  "div",
  {
    className: `${St.overlay} ${a ? St.suspended : ""}`,
    "aria-hidden": a || void 0,
    onClick: u,
    children: /* @__PURE__ */ o.jsxs(
      "div",
      {
        className: `${St.modal} ${St[g]}`,
        role: p ? "dialog" : void 0,
        "aria-modal": p ? !0 : void 0,
        "aria-label": p,
        onClick: (x) => x.stopPropagation(),
        children: [
          /* @__PURE__ */ o.jsxs("div", { className: St.header, children: [
            d && /* @__PURE__ */ o.jsx(
              ne,
              {
                variant: "ghost",
                className: St.close,
                "aria-label": _("Назад к предыдущей команде"),
                onClick: d,
                children: /* @__PURE__ */ o.jsx(Eg, { size: 20, "aria-hidden": "true" })
              }
            ),
            f && (h ? /* @__PURE__ */ o.jsxs("div", { className: St.heading, children: [
              /* @__PURE__ */ o.jsx("h2", { className: St.title, children: _(f) }),
              h
            ] }) : /* @__PURE__ */ o.jsx("h2", { className: St.title, children: _(f) })),
            /* @__PURE__ */ o.jsx(
              ne,
              {
                variant: "ghost",
                className: St.close,
                "aria-label": p ? _("Закрыть") : void 0,
                onClick: u,
                children: "✕"
              }
            )
          ] }),
          /* @__PURE__ */ o.jsxs("div", { className: St.body, children: [
            /* @__PURE__ */ o.jsx(Qe, { ...i }),
            /* @__PURE__ */ o.jsx("fieldset", { className: St.fields, disabled: i == null ? void 0 : i.busy, children: w })
          ] }),
          y && /* @__PURE__ */ o.jsx("div", { className: St.footer, children: /* @__PURE__ */ o.jsx("fieldset", { className: St.fields, disabled: i == null ? void 0 : i.busy, children: y }) })
        ]
      }
    )
  }
) : null), _p = {
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
function xp(r) {
  var a;
  return (a = Object.entries(_p).find(([i]) => r === i || r === _(i))) == null ? void 0 : a[1];
}
function ki(r) {
  const a = _(_p["Название команды"]);
  return r ? `${a}
UUID: ${r}` : a;
}
const h1 = "_labelRow_1w41x_1", m1 = "_helpButton_1w41x_12", v1 = "_tooltip_1w41x_37", g1 = "_helpOverlay_1w41x_56", y1 = "_sheetContent_1w41x_60", Bs = {
  labelRow: h1,
  helpButton: m1,
  tooltip: v1,
  helpOverlay: g1,
  sheetContent: y1
};
function su({ label: r, htmlFor: a, className: i, hint: u }) {
  const d = u ?? xp(r);
  return /* @__PURE__ */ o.jsxs("div", { className: Bs.labelRow, children: [
    /* @__PURE__ */ o.jsx("label", { htmlFor: a, className: i, children: _(r) }),
    d && /* @__PURE__ */ o.jsx(Ur, { label: r, description: d })
  ] });
}
function Ur({ label: r, description: a = xp(r) ?? "" }) {
  var C, E;
  const i = Ye(), [u, d] = v.useState(!1), [f, p] = v.useState({ left: 12, top: 12 }), h = v.useRef(null), y = v.useRef(null), w = v.useRef(), g = v.useId(), x = () => {
    var P;
    d(!1), i && ((P = h.current) == null || P.focus());
  }, k = () => {
    clearTimeout(w.current), d(!0);
  }, j = () => {
    w.current = setTimeout(() => d(!1), 150);
  };
  v.useEffect(() => () => clearTimeout(w.current), []), v.useEffect(() => {
    d(!1);
  }, [i]), v.useLayoutEffect(() => {
    if (!u || i || !h.current || !y.current) return;
    const P = h.current.getBoundingClientRect(), F = y.current.getBoundingClientRect();
    p({
      left: Math.max(12, Math.min(P.left, window.innerWidth - F.width - 12)),
      top: Math.max(12, P.bottom + 8 + F.height <= window.innerHeight - 12 ? P.bottom + 8 : P.top - F.height - 8)
    });
  }, [u, i]), v.useEffect(() => {
    if (!u) return;
    const P = ($) => {
      $.key === "Escape" ? ($.preventDefault(), $.stopImmediatePropagation(), x()) : i && $.key === "Tab" && $.preventDefault();
    };
    window.addEventListener("keydown", P, !0);
    const F = ($) => {
      var A;
      !i && !($.target instanceof Node && ((A = y.current) != null && A.contains($.target))) && d(!1);
    };
    return window.addEventListener("scroll", F, !0), window.addEventListener("resize", F), () => {
      window.removeEventListener("keydown", P, !0), window.removeEventListener("scroll", F, !0), window.removeEventListener("resize", F);
    };
  }, [u, i]);
  const b = ((C = h.current) == null ? void 0 : C.closest("[data-theme]")) ?? ((E = h.current) == null ? void 0 : E.getRootNode());
  return /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
    /* @__PURE__ */ o.jsx(
      "button",
      {
        ref: h,
        type: "button",
        className: Bs.helpButton,
        "aria-label": `${_("Подсказка")}: ${_(r)}`,
        "aria-describedby": u && !i ? g : void 0,
        "aria-haspopup": i ? "dialog" : void 0,
        "aria-expanded": i ? u : void 0,
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
        children: /* @__PURE__ */ o.jsx(Dg, { size: 16, "aria-hidden": "true" })
      }
    ),
    u && b && sp.createPortal(i ? /* @__PURE__ */ o.jsx(ru, { open: !0, onClose: x, className: Bs.helpOverlay, labelledBy: g, children: /* @__PURE__ */ o.jsxs("div", { className: Bs.sheetContent, children: [
      /* @__PURE__ */ o.jsx("h3", { id: g, children: _(r) }),
      /* @__PURE__ */ o.jsx("p", { children: _(a) }),
      /* @__PURE__ */ o.jsx(ne, { autoFocus: !0, variant: "secondary", onClick: x, children: _("Закрыть подсказку") })
    ] }) }) : /* @__PURE__ */ o.jsx(
      "div",
      {
        ref: y,
        id: g,
        role: "tooltip",
        className: Bs.tooltip,
        style: f,
        onMouseEnter: k,
        onMouseLeave: j,
        children: _(a)
      }
    ), b)
  ] });
}
const _1 = "_field_1vuim_1", x1 = "_label_1vuim_10", w1 = "_inputWrapper_1vuim_18", k1 = "_input_1vuim_18", S1 = "_passwordInput_1vuim_40", j1 = "_passwordToggle_1vuim_66", C1 = "_error_1vuim_95", E1 = "_errorText_1vuim_108", Wn = {
  field: _1,
  label: x1,
  inputWrapper: w1,
  input: k1,
  passwordInput: S1,
  passwordToggle: j1,
  error: C1,
  errorText: E1
}, He = ({
  label: r,
  hint: a,
  error: i,
  disabled: u,
  className: d = "",
  id: f,
  type: p,
  ...h
}) => {
  const y = v.useId(), [w, g] = v.useState(!1), x = f ?? y, k = p === "password" && w ? "text" : p;
  return /* @__PURE__ */ o.jsxs("div", { className: Wn.field, children: [
    r && /* @__PURE__ */ o.jsx(su, { label: r, htmlFor: x, className: Wn.label, hint: a }),
    /* @__PURE__ */ o.jsxs("div", { className: Wn.inputWrapper, children: [
      /* @__PURE__ */ o.jsx(
        "input",
        {
          id: x,
          disabled: u,
          type: k,
          ...h,
          "aria-invalid": i ? !0 : h["aria-invalid"],
          "aria-describedby": [h["aria-describedby"], i ? `${x}-error` : void 0].filter(Boolean).join(" ") || void 0,
          className: `
            ${Wn.input}
            ${p === "password" ? Wn.passwordInput : ""}
            ${i ? Wn.error : ""}
            ${d}
          `
        }
      ),
      p === "password" && /* @__PURE__ */ o.jsx(
        "button",
        {
          type: "button",
          className: Wn.passwordToggle,
          onClick: () => g((j) => !j),
          disabled: u,
          "aria-label": w ? "Hide password" : "Show password",
          children: w ? "🙈" : "👁"
        }
      )
    ] }),
    i && /* @__PURE__ */ o.jsx("span", { id: `${x}-error`, className: Wn.errorText, children: _(i) })
  ] });
}, N1 = "_field_1aipr_1", T1 = "_label_1aipr_8", b1 = "_textarea_1aipr_14", A1 = "_error_1aipr_46", R1 = "_errorText_1aipr_55", zs = {
  field: N1,
  label: T1,
  textarea: b1,
  error: A1,
  errorText: R1
}, _n = ({
  label: r,
  hint: a,
  error: i,
  className: u = "",
  id: d,
  ...f
}) => {
  const p = v.useId(), h = d ?? p;
  return /* @__PURE__ */ o.jsxs("div", { className: zs.field, children: [
    r && /* @__PURE__ */ o.jsx(su, { label: r, htmlFor: h, className: zs.label, hint: a }),
    /* @__PURE__ */ o.jsx(
      "textarea",
      {
        id: h,
        ...f,
        className: `
          ${zs.textarea}
          ${i ? zs.error : ""}
          ${u}
        `
      }
    ),
    i && /* @__PURE__ */ o.jsx("span", { className: zs.errorText, children: _(i) })
  ] });
}, P1 = "_toast_1g76h_1", $1 = "_warning_1g76h_43", xf = {
  toast: P1,
  warning: $1
};
function wp({ message: r, warning: a = !1, onClose: i }) {
  v.useEffect(() => {
    const d = setTimeout(i, 5e3);
    return () => clearTimeout(d);
  }, [r, a, i]);
  const u = a ? wy : Mg;
  return /* @__PURE__ */ o.jsxs("div", { role: "status", "aria-live": "polite", className: `${xf.toast} ${a ? xf.warning : ""}`, children: [
    /* @__PURE__ */ o.jsx(u, { size: 22, "aria-hidden": "true" }),
    /* @__PURE__ */ o.jsx("span", { children: r }),
    /* @__PURE__ */ o.jsx("button", { type: "button", "aria-label": _("Закрыть уведомление"), onClick: i, children: /* @__PURE__ */ o.jsx(dp, { size: 18 }) })
  ] });
}
const M1 = "_page_z6937_7", I1 = "_header_z6937_19", D1 = "_headerTop_z6937_24", L1 = "_heading_z6937_31", O1 = "_title_z6937_36", z1 = "_description_z6937_45", H1 = "_actions_z6937_52", F1 = "_list_z6937_57", W1 = "_innerTabs_z6937_88", B1 = "_innerTab_z6937_88", U1 = "_activeInnerTab_z6937_121", V1 = "_settingsActions_z6937_131", q1 = "_listSentinel_z6937_141", Q1 = "_settingsSections_z6937_145", K1 = "_settingsSection_z6937_145", Y1 = "_settingsMobileActions_z6937_171", J1 = "_connectionFields_z6937_191", G1 = "_collectionHeader_z6937_197", K = {
  page: M1,
  header: I1,
  headerTop: D1,
  heading: L1,
  title: O1,
  description: z1,
  actions: H1,
  list: F1,
  innerTabs: W1,
  innerTab: B1,
  activeInnerTab: U1,
  settingsActions: V1,
  listSentinel: q1,
  settingsSections: Q1,
  settingsSection: K1,
  settingsMobileActions: Y1,
  connectionFields: J1,
  collectionHeader: G1
}, X1 = "_fields_d4bkn_1", Z1 = {
  fields: X1
}, e0 = {
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
  date_pronunciation: "Произношение дат",
  character_replacements: "Замена символов",
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
  day_after_tomorrow: "Послезавтра",
  ordinal_units: "Порядковые числа от 1 до 9",
  month_numbers_by_name: "Номера месяцев",
  month_name_forms: "Формы названий месяцев"
}, wf = (r) => typeof r == "object" && !Array.isArray(r), Cl = (r, a) => a.reduce((i, u) => i[u], r);
function t0() {
  const r = nt(), a = Rt(), i = Ye(), [u, d] = v.useState(null), [f, p] = v.useState(null), [h, y] = v.useState([]), [w, g] = v.useState({}), [x, k] = v.useState(!1);
  v.useEffect(() => {
    a.run(async () => d(await r.getData("get_normalization_words")), { retryable: !0 });
  }, [r, a.run]);
  const j = (A, z = f ?? u) => (z == null ? void 0 : z.labels[JSON.stringify(A)]) || _(e0[A.at(-1)] ?? A.at(-1)), b = () => {
    a.busy || (y([]), p(null), a.clearError());
  }, C = (A) => {
    p(structuredClone(u)), g({}), y([A]), k(!1);
  }, E = (A, z) => p((O) => {
    if (!O) return O;
    const Y = structuredClone(O), W = Cl(Y.words, A.slice(0, -1));
    return W[A.at(-1)] = z, Y;
  }), P = () => a.run(async () => {
    const A = await r.saveData({ path: h, value: Cl(f.words, h), title: j(h) }, "save_normalization_words");
    d(A), p(null), y([]), k(!0);
  }, { exclusive: !0 }), F = (A, z) => Array.isArray(z) ? /* @__PURE__ */ o.jsx(
    _n,
    {
      label: j(A),
      rows: 3,
      disabled: a.busy,
      hint: _("Укажите варианты через ;. Например: ноль; ноля; нолю. Пустые элементы не сохраняются."),
      value: w[JSON.stringify(A)] ?? z.join("; "),
      onChange: (O) => {
        g((Y) => ({ ...Y, [JSON.stringify(A)]: O.target.value })), E(A, O.target.value.split(";").map((Y) => Y.trim()).filter(Boolean));
      }
    },
    JSON.stringify(A)
  ) : /* @__PURE__ */ o.jsx(
    He,
    {
      label: j(A),
      disabled: a.busy,
      type: typeof z == "number" ? "number" : "text",
      min: typeof z == "number" ? 1 : void 0,
      max: typeof z == "number" ? 12 : void 0,
      value: String(z),
      onChange: (O) => E(A, typeof z == "number" ? Number(O.target.value) : O.target.value)
    },
    JSON.stringify(A)
  ), $ = f && h.length ? Cl(f.words, h) : null;
  return /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
    /* @__PURE__ */ o.jsx(lt, { title: "Настройки распознавания" }),
    /* @__PURE__ */ o.jsxs("div", { className: K.page, children: [
      !i && /* @__PURE__ */ o.jsx(at, {}),
      /* @__PURE__ */ o.jsx("div", { className: `${K.header} ${K.collectionHeader}`, children: /* @__PURE__ */ o.jsx("div", { className: K.headerTop, children: /* @__PURE__ */ o.jsx("div", { className: K.heading, children: !i && /* @__PURE__ */ o.jsx("h1", { className: K.title, children: _("Настройки распознавания") }) }) }) }),
      !h.length && /* @__PURE__ */ o.jsx(Qe, { ...a }),
      !u && !a.error && /* @__PURE__ */ o.jsx(Qs, {}),
      /* @__PURE__ */ o.jsx("div", { className: K.list, children: u && Object.keys(u.words).map((A) => /* @__PURE__ */ o.jsx(qn, { title: j([A], u), subTitle: A, onClick: () => C(A) }, A)) }),
      x && /* @__PURE__ */ o.jsx(wp, { message: _("Словарь сохранён и применяется без перезапуска."), onClose: () => k(!1) })
    ] }),
    /* @__PURE__ */ o.jsx(
      $t,
      {
        dialogLabel: h.length ? j(h) : _("Настройки распознавания"),
        open: !!(h.length && f),
        title: h.length ? j(h) : "",
        subtitle: h.join(" / "),
        onClose: b,
        onBack: h.length > 1 ? () => y((A) => A.slice(0, -1)) : void 0,
        feedback: a,
        footer: /* @__PURE__ */ o.jsx(ne, { disabled: a.busy, onClick: () => void P(), children: _("Сохранить") }),
        children: f && $ !== null && /* @__PURE__ */ o.jsxs("div", { className: Z1.fields, children: [
          /* @__PURE__ */ o.jsx(
            He,
            {
              label: _("Название раздела"),
              hint: _("Это название отображается в редакторе. Технический ключ словаря не меняется."),
              disabled: a.busy,
              value: f.labels[JSON.stringify(h)] ?? j(h),
              onChange: (A) => p((z) => z && { ...z, labels: { ...z.labels, [JSON.stringify(h)]: A.target.value } })
            }
          ),
          wf($) ? Object.entries($).map(([A, z]) => wf(z) ? /* @__PURE__ */ o.jsx(qn, { title: j([...h, A]), subTitle: A, onClick: () => y((O) => [...O, A]) }, A) : F([...h, A], z)) : F(h, $)
        ] })
      }
    )
  ] });
}
const n0 = "_form_15zw4_1", r0 = "_actions_15zw4_8", kf = {
  form: n0,
  actions: r0
};
function s0() {
  const r = nt(), a = Rt(), [i, u] = v.useState({ url: "", initial_prompt: "", has_token: !1 }), [d, f] = v.useState(""), [p, h] = v.useState(""), [y, w] = v.useState(!1), [g, x] = v.useState(null);
  v.useEffect(() => {
    let b = !0;
    return a.run(async () => {
      const C = await r.getData("get_whisper_prompt");
      b && (u({ ...C, initial_prompt: Array.isArray(C.initial_prompt) ? C.initial_prompt.join("; ") : C.initial_prompt }), h(C.url), w(!0));
    }, { retryable: !0 }), () => {
      b = !1;
    };
  }, [r, a.run]);
  const k = (b) => {
    u((C) => ({ ...C, ...b })), x(null);
  }, j = (b) => a.run(async () => {
    const C = await r.saveData({
      url: i.url,
      token: d,
      apply: b,
      initial_prompt: i.initial_prompt
    }, "save_whisper_prompt");
    u((E) => ({ ...E, initial_prompt: Array.isArray(C.initial_prompt) ? C.initial_prompt.join("; ") : C.initial_prompt, has_token: !!(d.trim() || E.has_token && i.url === p) })), x({ message: b ? C.applied ? "Сохранено и применено в Whisper. Перезапуск контейнера не нужен." : "Сохранено в Home Assistant. Не удалось применить в Whisper. После восстановления подключения нажмите «Отправить в Whisper» повторно." : "Сохранено в Home Assistant.", warning: b && !C.applied }), h(i.url), f("");
  }, { exclusive: !0 });
  return /* @__PURE__ */ o.jsxs("section", { className: kf.form, children: [
    /* @__PURE__ */ o.jsx(Qe, { ...a }),
    !y && !a.error && /* @__PURE__ */ o.jsx(Qs, {}),
    y && /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
      /* @__PURE__ */ o.jsx(
        He,
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
        He,
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
        _n,
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
      /* @__PURE__ */ o.jsxs("div", { className: kf.actions, children: [
        /* @__PURE__ */ o.jsx(ne, { variant: "secondary", disabled: a.busy, onClick: () => void j(!1), children: _("Сохранить") }),
        /* @__PURE__ */ o.jsx(ne, { disabled: a.busy || !i.url.trim(), onClick: () => void j(!0), children: _("Отправить в Whisper") })
      ] }),
      g && /* @__PURE__ */ o.jsx(wp, { message: _(g.message), warning: g.warning, onClose: () => x(null) })
    ] })
  ] });
}
function o0() {
  const r = Ye();
  return /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
    /* @__PURE__ */ o.jsx(lt, { title: "Промпт распознавания" }),
    /* @__PURE__ */ o.jsxs("div", { className: K.page, children: [
      !r && /* @__PURE__ */ o.jsx(at, {}),
      /* @__PURE__ */ o.jsx("div", { className: `${K.header} ${K.collectionHeader}`, children: /* @__PURE__ */ o.jsx("div", { className: K.headerTop, children: /* @__PURE__ */ o.jsx("div", { className: K.heading, children: !r && /* @__PURE__ */ o.jsx("h1", { className: K.title, children: _("Промпт распознавания") }) }) }) }),
      /* @__PURE__ */ o.jsx(s0, {})
    ] })
  ] });
}
const i0 = "_heading_1w2wz_1", a0 = "_note_1w2wz_6", l0 = "_entries_1w2wz_12", u0 = "_entry_1w2wz_19", c0 = "_line_1w2wz_27", d0 = "_error_1w2wz_40", f0 = "_body_1w2wz_49", Bn = {
  heading: i0,
  note: a0,
  entries: l0,
  entry: u0,
  line: c0,
  error: d0,
  body: f0
};
function p0() {
  const r = nt(), a = Rt(), [i, u] = v.useState([]);
  return v.useEffect(() => {
    let d = !0, f;
    const p = async () => {
      await a.run(async () => {
        const h = await r.getData("get_api_logs");
        d && (u(h.logs), f = setTimeout(() => {
          p();
        }, 3e3));
      }, { retryable: !0 });
    };
    return p(), () => {
      d = !1, clearTimeout(f);
    };
  }, [r, a.run]), /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
    /* @__PURE__ */ o.jsx(lt, { title: _("Логи") }),
    /* @__PURE__ */ o.jsxs("main", { className: K.page, children: [
      /* @__PURE__ */ o.jsx(at, {}),
      /* @__PURE__ */ o.jsx("h1", { className: Bn.heading, children: _("Логи") }),
      /* @__PURE__ */ o.jsx("p", { className: Bn.note, children: _("Последние 200 записей API с телами запросов и ответов. Обновление каждые 3 секунды. После перезапуска журнал очищается. Секретные поля и настроенные токены скрыты.") }),
      /* @__PURE__ */ o.jsx(Qe, { ...a }),
      !i.length && !a.busy && !a.error && /* @__PURE__ */ o.jsx("p", { children: _("Запросов к API пока нет.") }),
      /* @__PURE__ */ o.jsx("div", { className: Bn.entries, children: i.map((d) => /* @__PURE__ */ o.jsxs("article", { className: Bn.entry, children: [
        /* @__PURE__ */ o.jsxs("div", { className: Bn.line, children: [
          /* @__PURE__ */ o.jsx("time", { dateTime: d.timestamp, children: new Date(d.timestamp).toLocaleString() }),
          /* @__PURE__ */ o.jsxs("strong", { children: [
            d.method,
            " ",
            d.path
          ] })
        ] }),
        /* @__PURE__ */ o.jsxs("div", { className: Bn.line, children: [
          /* @__PURE__ */ o.jsx("span", { children: _({ connected: "SSE подключён", event: "Событие SSE", completed: "Запрос завершён" }[d.phase] ?? d.phase) }),
          d.status !== null && /* @__PURE__ */ o.jsxs("span", { className: d.status >= 400 ? Bn.error : void 0, children: [
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
          ([f, p]) => p != null && /* @__PURE__ */ o.jsxs("details", { className: Bn.body, children: [
            /* @__PURE__ */ o.jsx("summary", { children: _(f) }),
            /* @__PURE__ */ o.jsx("pre", { children: JSON.stringify(p, null, 2) })
          ] }, f)
        )
      ] }, `${d.timestamp}-${d.phase}`)) })
    ] })
  ] });
}
var Il = /* @__PURE__ */ new Map(), ai = /* @__PURE__ */ new WeakMap(), Sf = 0, h0;
function m0(r) {
  return r ? (ai.has(r) || (Sf += 1, ai.set(r, Sf.toString())), ai.get(r)) : "0";
}
function v0(r) {
  return Object.keys(r).sort().filter(
    (a) => r[a] !== void 0
  ).map((a) => `${a}_${a === "root" ? m0(r.root) : r[a]}`).toString();
}
function g0(r) {
  const a = v0(r);
  let i = Il.get(a);
  if (!i) {
    const u = /* @__PURE__ */ new Map();
    let d;
    const f = new IntersectionObserver((p) => {
      p.forEach((h) => {
        var y;
        const w = h.isIntersecting && d.some((g) => h.intersectionRatio >= g);
        r.trackVisibility && typeof h.isVisible > "u" && (h.isVisible = w), [...(y = u.get(h.target)) != null ? y : []].forEach((g) => {
          g(w, h);
        });
      });
    }, r);
    d = f.thresholds || (Array.isArray(r.threshold) ? r.threshold : [r.threshold || 0]), i = {
      id: a,
      observer: f,
      elements: u
    }, Il.set(a, i);
  }
  return i;
}
function y0(r, a, i = {}, u = h0) {
  if (typeof window.IntersectionObserver > "u" && u !== void 0) {
    const y = r.getBoundingClientRect();
    return a(u, {
      isIntersecting: u,
      target: r,
      intersectionRatio: typeof i.threshold == "number" ? i.threshold : 0,
      time: 0,
      boundingClientRect: y,
      intersectionRect: y,
      rootBounds: y
    }), () => {
    };
  }
  const { id: d, observer: f, elements: p } = g0(i), h = p.get(r) || [];
  return p.has(r) || p.set(r, h), h.push(a), f.observe(r), function() {
    h.splice(h.indexOf(a), 1), h.length === 0 && (p.delete(r), f.unobserve(r)), p.size === 0 && (f.disconnect(), Il.delete(d));
  };
}
function _0({
  threshold: r,
  delay: a,
  trackVisibility: i,
  rootMargin: u,
  root: d,
  triggerOnce: f,
  skip: p,
  initialInView: h,
  fallbackInView: y,
  onChange: w
} = {}) {
  var g;
  const [x, k] = v.useState(null), j = v.useRef(w), b = v.useRef(h), [C, E] = v.useState({
    inView: !!h,
    entry: void 0
  });
  j.current = w, v.useEffect(
    () => {
      if (b.current === void 0 && (b.current = h), p || !x) return;
      let A;
      return A = y0(
        x,
        (z, O) => {
          const Y = b.current;
          b.current = z, !(Y === void 0 && !z) && (E({
            inView: z,
            entry: O
          }), j.current && j.current(z, O), O.isIntersecting && f && A && (A(), A = void 0));
        },
        {
          root: d,
          rootMargin: u,
          threshold: r,
          // @ts-expect-error
          trackVisibility: i,
          delay: a
        },
        y
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
      u,
      f,
      p,
      i,
      y,
      a
    ]
  );
  const P = (g = C.entry) == null ? void 0 : g.target, F = v.useRef(void 0);
  !x && P && !f && !p && F.current !== P && (F.current = P, E({
    inView: !!h,
    entry: void 0
  }), b.current = h);
  const $ = [k, C.inView, C.entry];
  return $.ref = $[0], $.inView = $[1], $.entry = $[2], $;
}
function Kr(r, a, i, u) {
  const { ref: d, inView: f } = _0({ threshold: 0, rootMargin: "0px 0px 180px 0px" }), [p, h] = v.useState(!1);
  return v.useEffect(() => {
    !a && (r == null ? void 0 : r.page) === 1 && h(!0);
  }, [a, r]), v.useEffect(() => {
    p && u && f && !a && r && r.page < r.total_pages && i(r.page + 1, !0);
  }, [p, u, f, a, r, i]), d;
}
const El = (r) => ({
  data: r.data ?? r.script_actions ?? [],
  page: r.page ?? 1,
  page_size: r.page_size ?? 10,
  total_pages: r.total_pages ?? 1,
  total_items: r.total_items ?? 0
});
function kp(r) {
  const a = nt(), [i, u] = v.useState(null), [d, f] = v.useState(""), p = v.useRef(""), h = v.useRef(0), [y, w] = v.useState(!0), [g, x] = v.useState(null), k = v.useRef(), j = v.useRef(1), b = v.useRef(!1), C = v.useRef(), E = v.useCallback(async ($, A = !1) => {
    const z = ++h.current, O = p.current.trim(), Y = $ === void 0 && b.current, W = $ ?? j.current;
    x(null), w(!0);
    try {
      let X = El(await a.getPage(r, W, void 0, O));
      const me = Math.max(1, X.total_pages);
      if (W > me && (X = El(await a.getPage(r, me, void 0, O))), Y && X.page > 1) {
        const pe = await Promise.all(Array.from({ length: X.page - 1 }, (ge, ye) => a.getPage(r, ye + 1, void 0, O).then(El)));
        X = { ...X, data: [...pe.flatMap((ge) => ge.data), ...X.data] };
      }
      if (z !== h.current) return;
      Y || (b.current = A), k.current = void 0, j.current = X.page, u((pe) => A && pe ? { ...X, data: [...pe.data, ...X.data] } : X);
    } catch (X) {
      if (z !== h.current) return;
      k.current = { page: $, append: A }, x(jt(X, "Не удалось загрузить список. Проверьте подключение к Home Assistant."));
    } finally {
      z === h.current && w(!1);
    }
  }, [a, r]);
  v.useEffect(() => {
    const $ = C.current !== r;
    if (C.current = r, !$ && p.current === d) return;
    p.current = d, j.current = 1, b.current = !1, h.current += 1, w(!0);
    const A = window.setTimeout(() => {
      E(1);
    }, $ ? 0 : 250);
    return () => window.clearTimeout(A);
  }, [r, E, d]);
  const P = v.useCallback(($) => {
    u((A) => A && { ...A, data: $(A.data) });
  }, []);
  return { query: d, setQuery: f, page: i, loading: y, loadPage: E, updateItems: P, error: g, retry: () => {
    var $, A;
    E(($ = k.current) == null ? void 0 : $.page, ((A = k.current) == null ? void 0 : A.append) ?? !1);
  } };
}
function x0() {
  const r = nt(), { query: a, setQuery: i, page: u, loading: d, loadPage: f, error: p, retry: h } = kp("get_script_actions_short"), y = u ? { ...u, script_actions: u.data } : null;
  return { query: a, setQuery: i, error: p, retry: h, loading: d, scripts: y, loadScripts: f, getAvailableScripts: () => r.getScripts(), saveScript: async (b) => {
    await r.saveData(b, "save_script_action"), await f();
  }, updateScript: async (b, C) => {
    await r.updateRecord(b, "update_script_action", C), await f();
  }, getScriptAction: async (b) => (await r.getRecord(b, "get_script_action")).data, deleteScriptAction: async (b) => {
    await r.deleteRecord(b, "delete_script_action"), await f();
  } };
}
const w0 = "_pagination_r0e80_1", k0 = "_button_r0e80_10", S0 = "_label_r0e80_34", j0 = "_pages_r0e80_40", C0 = "_active_r0e80_48", cr = {
  pagination: w0,
  button: k0,
  label: S0,
  pages: j0,
  active: C0
}, Yr = ({ page: r, totalPages: a, onChange: i }) => {
  if (a <= 1) return null;
  const u = Array.from(/* @__PURE__ */ new Set([
    1,
    ...Array.from({ length: 5 }, (f, p) => r + p - 2).filter((f) => f >= 1 && f <= a),
    a
  ])).sort((f, p) => f - p), d = (f) => {
    Number.isInteger(f) && f >= 1 && f <= a && f !== r && i(f);
  };
  return /* @__PURE__ */ o.jsx("nav", { className: cr.pagination, "aria-label": _("Страницы списка"), children: /* @__PURE__ */ o.jsxs("div", { className: cr.pages, children: [
    /* @__PURE__ */ o.jsx(
      "button",
      {
        type: "button",
        className: cr.button,
        disabled: r <= 1,
        onClick: () => d(r - 1),
        "aria-label": _("Предыдущая страница"),
        children: "‹"
      }
    ),
    u.map((f, p) => /* @__PURE__ */ o.jsxs(Lf.Fragment, { children: [
      p > 0 && f - u[p - 1] > 1 && /* @__PURE__ */ o.jsx("span", { className: cr.label, "aria-hidden": "true", children: "…" }),
      /* @__PURE__ */ o.jsx(
        "button",
        {
          type: "button",
          className: `${cr.button} ${f === r ? cr.active : ""}`,
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
        className: cr.button,
        disabled: r >= a,
        onClick: () => d(r + 1),
        "aria-label": _("Следующая страница"),
        children: "›"
      }
    )
  ] }) });
}, E0 = "_content_eng69_1", N0 = "_title_eng69_7", T0 = "_actions_eng69_14", b0 = "_row_eng69_20", A0 = "_identifier_eng69_31", Hs = {
  content: E0,
  title: N0,
  actions: T0,
  row: b0,
  identifier: A0
}, ou = ({ open: r, title: a, uuid: i, onClose: u, actions: d, size: f = "md", layout: p = "column" }) => {
  const h = Ye(), y = i ? /* @__PURE__ */ o.jsx("p", { className: Hs.identifier, children: i }) : null, w = /* @__PURE__ */ o.jsxs("div", { className: Hs.content, children: [
    h && /* @__PURE__ */ o.jsxs("div", { children: [
      /* @__PURE__ */ o.jsx("h3", { className: Hs.title, children: a }),
      y
    ] }),
    /* @__PURE__ */ o.jsx("div", { className: `${Hs.actions} ${p === "row" && !h ? Hs.row : ""}`, children: d.map((g) => /* @__PURE__ */ o.jsx(ne, { fullWidth: !0, variant: g.variant, onClick: () => {
      g.onClick(), u();
    }, children: _(g.label) }, g.label)) })
  ] });
  return h ? /* @__PURE__ */ o.jsx(ru, { open: r, onClose: u, children: w }) : /* @__PURE__ */ o.jsx($t, { open: r, onClose: u, title: a, subtitle: y, size: f, children: w });
}, R0 = ({ uuid: r, title: a, open: i, onClose: u, onEdit: d, onDelete: f }) => r ? /* @__PURE__ */ o.jsx(ou, { open: i, title: a, uuid: r, onClose: u, size: "sm", layout: "row", actions: [
  { label: "Изменить", onClick: () => d(r) },
  { label: "Удалить", variant: "remove", onClick: () => f(r) }
] }) : null, P0 = "_accordion_5owbj_1", $0 = "_header_5owbj_7", M0 = "_content_5owbj_20", li = {
  accordion: P0,
  header: $0,
  content: M0
}, I0 = ({
  title: r,
  defaultOpen: a = !1,
  children: i
}) => {
  const [u, d] = v.useState(a);
  return /* @__PURE__ */ o.jsxs(
    "div",
    {
      className: li.accordion,
      "data-open": u,
      children: [
        /* @__PURE__ */ o.jsxs(
          "button",
          {
            type: "button",
            className: li.header,
            onClick: () => d((f) => !f),
            "aria-expanded": u,
            children: [
              /* @__PURE__ */ o.jsx("span", { children: _(r) }),
              /* @__PURE__ */ o.jsx("span", { className: li.icon, children: u ? "−" : "+" })
            ]
          }
        ),
        u && /* @__PURE__ */ o.jsx("div", { className: li.content, children: i })
      ]
    }
  );
}, D0 = "_wrapper_1fgdg_1", L0 = "_dropdown_1fgdg_10", O0 = "_option_1fgdg_22", z0 = "_title_1fgdg_46", H0 = "_uuid_1fgdg_51", F0 = "_hint_1fgdg_52", dr = {
  wrapper: D0,
  dropdown: L0,
  option: O0,
  title: z0,
  uuid: H0,
  hint: F0
}, W0 = ({
  label: r = "uuid",
  value: a,
  selectedTitle: i,
  searchSource: u = ["search_assistant_commands"],
  minQueryLength: d = 2,
  onChange: f,
  onSelect: p,
  getSelectedValue: h,
  error: y
}) => {
  const w = nt(), g = JSON.stringify(u), x = v.useMemo(() => JSON.parse(g), [g]), [k, j] = v.useState(null), b = h ? "" : i || ((k == null ? void 0 : k.uuid) === a ? k.title : "");
  v.useEffect(() => {
    var J;
    if (!a || i || h || (J = pe.current) != null && J.contains(document.activeElement)) return;
    let M = !1;
    return (async () => {
      var U;
      try {
        for (const N of x) {
          const ie = (U = (await w.searchAssistantCommands(a, N)).data) == null ? void 0 : U.find((oe) => oe.uuid === a);
          if (ie) {
            M || j(ie);
            return;
          }
        }
      } catch {
      }
    })(), () => {
      M = !0;
    };
  }, [w, a, i, h, x]);
  const [C, E] = v.useState(null), [P, F] = v.useState(0), [$, A] = v.useState([]), [z, O] = v.useState(!1), [Y, W] = v.useState(!1), [X, me] = v.useState(!1), pe = v.useRef(null), [ge, ye] = v.useState({});
  v.useEffect(() => {
    var J, U;
    if (!z) return;
    const M = () => {
      var kn, Z;
      const N = (Z = (kn = pe.current) == null ? void 0 : kn.querySelector("input")) == null ? void 0 : Z.getBoundingClientRect();
      if (!N) return;
      const H = window.visualViewport, ie = ((H == null ? void 0 : H.offsetTop) ?? 0) + 8, oe = ((H == null ? void 0 : H.offsetTop) ?? 0) + ((H == null ? void 0 : H.height) ?? window.innerHeight) - 8, xe = Math.min(oe, Math.max(ie, N.bottom + 6)), ke = Math.min(oe, Math.max(ie, N.top - 6)), Ne = oe - xe, Ce = ke - ie, Re = Ne < 180 && Ce > Ne, ut = Math.min(260, Re ? Ce : Ne), Xt = Math.max(8, N.left);
      ye({
        left: Xt,
        width: Math.max(0, Math.min(N.width, window.innerWidth - Xt - 8)),
        top: Re ? ke : xe,
        transform: Re ? "translateY(-100%)" : void 0,
        maxHeight: ut
      });
    };
    return M(), window.addEventListener("scroll", M, !0), window.addEventListener("resize", M), (J = window.visualViewport) == null || J.addEventListener("resize", M), (U = window.visualViewport) == null || U.addEventListener("scroll", M), () => {
      var N, H;
      window.removeEventListener("scroll", M, !0), window.removeEventListener("resize", M), (N = window.visualViewport) == null || N.removeEventListener("resize", M), (H = window.visualViewport) == null || H.removeEventListener("scroll", M);
    };
  }, [z]);
  const we = v.useRef(0), B = v.useRef(""), le = v.useMemo(() => a.trim(), [a]);
  v.useEffect(() => {
    if (!le) {
      we.current += 1, E(null), B.current = "", A([]), O(!1);
      return;
    }
    if (le.length < d) {
      we.current += 1, E(null), A([]), O(!1);
      return;
    }
    if (!X || b) {
      we.current += 1, O(!1), W(!1);
      return;
    }
    if (B.current === le)
      return;
    B.current = le;
    const M = we.current + 1;
    we.current = M;
    const J = window.setTimeout(async () => {
      W(!0), E(null);
      try {
        let U = [];
        for (const N of x) {
          const H = await w.searchAssistantCommands(le, N), ie = Array.isArray(H == null ? void 0 : H.data) ? H.data : [];
          U.push(...ie);
        }
        if (we.current !== M)
          return;
        A(U), O(U.length > 0);
      } catch (U) {
        we.current === M && (E(jt(U)), A([]), O(!1));
      } finally {
        we.current === M && W(!1);
      }
    }, 250);
    return () => window.clearTimeout(J);
  }, [w, le, x, d, X, P, b]);
  const fe = (M) => {
    const J = h ? h(M) : M.uuid;
    we.current += 1, j(M), B.current = "", W(!1), A([]), f(J), p == null || p(M), O(!1);
  };
  return /* @__PURE__ */ o.jsxs("div", { ref: pe, className: dr.wrapper, children: [
    /* @__PURE__ */ o.jsx(
      He,
      {
        label: r,
        value: b || a,
        autoComplete: "off",
        placeholder: _("Начните вводить title или uuid"),
        error: y,
        onBlur: () => {
          me(!1), window.setTimeout(() => O(!1), 150);
        },
        onFocus: () => {
          me(!0), O(!b && $.length > 0);
        },
        onChange: (M) => {
          j(null), f(M.target.value);
        }
      }
    ),
    z && pe.current && sp.createPortal(
      /* @__PURE__ */ o.jsx("div", { role: "listbox", className: dr.dropdown, style: ge, children: $.map((M) => /* @__PURE__ */ o.jsxs(
        "button",
        {
          role: "option",
          type: "button",
          className: dr.option,
          onMouseDown: (J) => J.preventDefault(),
          onClick: () => fe(M),
          children: [
            /* @__PURE__ */ o.jsx("span", { className: dr.title, children: M.title || "Без названия" }),
            /* @__PURE__ */ o.jsx("span", { className: dr.uuid, children: M.uuid }),
            M.mappingType && /* @__PURE__ */ o.jsxs("span", { className: dr.uuid, children: [
              _("mappingType:"),
              M.mappingType
            ] })
          ]
        },
        M.uuid
      )) }),
      pe.current.closest("[data-theme]") ?? pe.current
    ),
    /* @__PURE__ */ o.jsx(Qe, { error: C, busy: Y, retry: () => {
      var M, J;
      B.current = "", (J = (M = pe.current) == null ? void 0 : M.querySelector("input")) == null || J.focus(), F((U) => U + 1);
    } }),
    Y && /* @__PURE__ */ o.jsx("span", { className: dr.hint, children: _("Поиск...") })
  ] });
}, B0 = "_field_1esqu_1", U0 = "_row_1esqu_5", V0 = "_inputWrapper_1esqu_11", q0 = "_clearButton_1esqu_22", Q0 = "_rowError_1esqu_31", Jt = {
  field: B0,
  row: U0,
  inputWrapper: V0,
  clearButton: q0,
  rowError: Q0
}, K0 = {
  parent_type: "search_assistant_commands",
  children_type: "search_assistant_sub_commands",
  children_direct_type: "search_assistant_sub_direct_controls"
};
function Nl({ field: r, value: a, error: i, onChange: u }) {
  return qr() ? /* @__PURE__ */ o.jsx(He, { label: _(r), value: a, error: i, onChange: (f) => u(f.target.value) }) : /* @__PURE__ */ o.jsx(
    W0,
    {
      label: _(r),
      value: a,
      error: i,
      searchSource: [K0[r]],
      minQueryLength: 3,
      onChange: u,
      getSelectedValue: (f) => (r === "children_direct_type" ? f.mappingType : f.actionType) ?? f.uuid
    }
  );
}
const Y0 = ({
  condition: r,
  index: a,
  defaultOpen: i,
  onChange: u,
  onDelete: d,
  totalCount: f,
  errors: p
}) => {
  const h = r.children_type !== void 0, y = r.children_direct_type !== void 0, w = () => {
    u({
      ...r,
      children_type: void 0
    });
  }, g = () => {
    u({
      ...r,
      children_direct_type: void 0
    });
  };
  return /* @__PURE__ */ o.jsxs(
    I0,
    {
      title: `${_("Условие")} ${a + 1}`,
      defaultOpen: i,
      children: [
        /* @__PURE__ */ o.jsx("div", { className: Jt.field, children: /* @__PURE__ */ o.jsx(
          Nl,
          {
            field: "parent_type",
            value: r.parent_type ?? "",
            error: p == null ? void 0 : p.parent_type,
            onChange: (x) => u({ ...r, parent_type: x })
          }
        ) }),
        /* @__PURE__ */ o.jsx("div", { className: Jt.field, children: h ? /* @__PURE__ */ o.jsxs(
          "div",
          {
            className: `${Jt.row} ${p != null && p.children_type ? Jt.rowError : ""}`,
            children: [
              /* @__PURE__ */ o.jsx("div", { className: Jt.inputWrapper, children: /* @__PURE__ */ o.jsx(
                Nl,
                {
                  field: "children_type",
                  value: r.children_type ?? "",
                  error: p == null ? void 0 : p.children_type,
                  onChange: (x) => u({ ...r, children_type: x })
                }
              ) }),
              /* @__PURE__ */ o.jsx(
                ne,
                {
                  type: "button",
                  variant: "ghost",
                  className: Jt.clearButton,
                  "aria-label": _("Убрать второстепенную команду"),
                  onClick: w,
                  children: "×"
                }
              )
            ]
          }
        ) : /* @__PURE__ */ o.jsx(
          ne,
          {
            type: "button",
            fullWidth: !0,
            onClick: () => u({
              ...r,
              children_type: ""
            }),
            children: _("🞢 Добавить второстепенную команду")
          }
        ) }),
        /* @__PURE__ */ o.jsx("div", { className: Jt.field, children: y ? /* @__PURE__ */ o.jsxs(
          "div",
          {
            className: `${Jt.row} ${p != null && p.children_direct_type ? Jt.rowError : ""}`,
            children: [
              /* @__PURE__ */ o.jsx("div", { className: Jt.inputWrapper, children: /* @__PURE__ */ o.jsx(
                Nl,
                {
                  field: "children_direct_type",
                  value: r.children_direct_type ?? "",
                  error: p == null ? void 0 : p.children_direct_type,
                  onChange: (x) => u({ ...r, children_direct_type: x })
                }
              ) }),
              /* @__PURE__ */ o.jsx(
                ne,
                {
                  type: "button",
                  variant: "ghost",
                  className: Jt.clearButton,
                  "aria-label": _("Убрать прямую команду"),
                  onClick: g,
                  children: "×"
                }
              )
            ]
          }
        ) : /* @__PURE__ */ o.jsx(
          ne,
          {
            type: "button",
            fullWidth: !0,
            onClick: () => u({
              ...r,
              children_direct_type: ""
            }),
            children: _("🞢 Добавить прямую команду")
          }
        ) }),
        f > 1 && /* @__PURE__ */ o.jsx(
          ne,
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
}, J0 = "_dropdown_3mupk_2", G0 = "_label_3mupk_11", X0 = "_wrapper_3mupk_19", Z0 = "_select_3mupk_23", ex = "_arrow_3mupk_65", tx = "_error_3mupk_85", nx = "_errorText_3mupk_103", fr = {
  dropdown: J0,
  label: G0,
  wrapper: X0,
  select: Z0,
  arrow: ex,
  error: tx,
  errorText: nx
};
function Un({
  label: r,
  options: a,
  value: i = "",
  placeholder: u = "Выберите",
  error: d,
  onSelect: f
}) {
  const p = v.useId();
  return /* @__PURE__ */ o.jsxs("div", { className: fr.dropdown, children: [
    r && /* @__PURE__ */ o.jsx(
      "label",
      {
        htmlFor: p,
        className: fr.label,
        children: _(r)
      }
    ),
    /* @__PURE__ */ o.jsxs("div", { className: fr.wrapper, children: [
      /* @__PURE__ */ o.jsxs(
        "select",
        {
          id: p,
          className: `
            ${fr.select}
            ${d ? fr.error : ""}
          `,
          value: i,
          onChange: (h) => f == null ? void 0 : f(h.target.value),
          children: [
            /* @__PURE__ */ o.jsx("option", { value: "", disabled: !0, children: _(u) }),
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
        ap,
        {
          size: 18,
          className: fr.arrow
        }
      )
    ] }),
    d && /* @__PURE__ */ o.jsx("span", { className: fr.errorText, children: _(d) })
  ] });
}
const rx = "_form_1ogov_1", sx = "_section_1ogov_7", ox = "_sectionTitle_1ogov_18", ix = "_conditions_1ogov_27", ax = "_addCondition_1ogov_33", Br = {
  form: rx,
  section: sx,
  sectionTitle: ox,
  conditions: ix,
  addCondition: ax
}, lx = ({
  open: r,
  feedback: a,
  initialData: i,
  availableScripts: u,
  isEdit: d = !1,
  loading: f = !1,
  onSave: p,
  onCancel: h
}) => {
  const [y, w] = v.useState({
    uuid: "",
    name: "",
    script_entity_id: "",
    conditions: [
      {
        parent_type: ""
      }
    ]
  }), [g, x] = v.useState({
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
      ...y,
      conditions: [
        ...y.conditions,
        {
          parent_type: ""
        }
      ]
    });
  }, b = (P, F) => {
    const $ = [...y.conditions];
    $[P] = F, k({
      ...y,
      conditions: $
    });
  }, C = (P) => {
    const F = y.conditions.filter(
      ($, A) => A !== P
    );
    k({
      ...y,
      conditions: F.length > 0 ? F : [
        {
          parent_type: ""
        }
      ]
    });
  }, E = () => {
    const P = {
      conditions: []
    };
    return y.name.trim() || (P.name = "Обязательное поле"), y.script_entity_id || (P.script_entity_id = "Обязательное поле"), y.conditions.forEach(
      (F, $) => {
        const A = {};
        F.parent_type.trim() || (A.parent_type = "Обязательное поле"), F.children_type !== void 0 && !F.children_type.trim() && (A.children_type = "Обязательное поле"), F.children_direct_type !== void 0 && !F.children_direct_type.trim() && (A.children_direct_type = "Обязательное поле"), P.conditions[$] = A;
      }
    ), x(P), !P.name && !P.script_entity_id && P.conditions.every(
      (F) => Object.keys(F).length === 0
    );
  };
  return /* @__PURE__ */ o.jsx(
    $t,
    {
      feedback: a,
      open: r,
      onClose: h,
      title: d ? "Редактировать сценарий" : "Создать сценарий",
      footer: /* @__PURE__ */ o.jsx(
        ne,
        {
          disabled: f,
          onClick: () => {
            E() && (p == null || p(y));
          },
          children: _("Сохранить")
        }
      ),
      children: /* @__PURE__ */ o.jsxs("div", { className: Br.form, children: [
        /* @__PURE__ */ o.jsxs("div", { className: Br.section, children: [
          /* @__PURE__ */ o.jsx(
            He,
            {
              label: _("Название"),
              value: y.name,
              error: g.name,
              onChange: (P) => k({
                ...y,
                name: P.target.value
              })
            }
          ),
          /* @__PURE__ */ o.jsx(
            Un,
            {
              label: _("Скрипт"),
              error: g.script_entity_id,
              options: u.map(
                (P) => ({
                  label: P.name,
                  value: P.entity_id
                })
              ),
              value: y.script_entity_id,
              onSelect: (P) => k({
                ...y,
                script_entity_id: P
              })
            }
          )
        ] }),
        /* @__PURE__ */ o.jsxs("div", { className: Br.section, children: [
          /* @__PURE__ */ o.jsx("h3", { className: Br.sectionTitle, children: _("Условия") }),
          /* @__PURE__ */ o.jsx("div", { className: Br.conditions, children: y.conditions.map(
            (P, F, $) => /* @__PURE__ */ o.jsx(
              Y0,
              {
                index: F,
                condition: P,
                defaultOpen: !d,
                errors: g.conditions[F],
                onChange: (A) => b(
                  F,
                  A
                ),
                onDelete: () => C(F),
                totalCount: $.length
              },
              F
            )
          ) }),
          /* @__PURE__ */ o.jsx(
            ne,
            {
              type: "button",
              className: Br.addCondition,
              onClick: j,
              children: _("+ Добавить условие")
            }
          )
        ] })
      ] })
    }
  );
}, ux = "_container_9wouv_1", cx = "_visible_9wouv_20", jf = {
  container: ux,
  visible: cx
}, Qn = ({
  children: r,
  offset: a = 10,
  startVisible: i = !1
}) => {
  const u = v.useRef(null), [d, f] = v.useState(i);
  return v.useEffect(() => {
    var x;
    const p = (x = u.current) == null ? void 0 : x.getRootNode(), h = p instanceof ShadowRoot ? p.host : null, y = () => window.scrollY + ((h == null ? void 0 : h.scrollTop) ?? 0);
    let w = y();
    const g = () => {
      const k = y();
      k !== w && (f(k <= a || k < w), w = k);
    };
    return h == null || h.addEventListener("scroll", g, { passive: !0 }), window.addEventListener("scroll", g, {
      passive: !0
    }), () => {
      h == null || h.removeEventListener("scroll", g), window.removeEventListener("scroll", g);
    };
  }, [a]), /* @__PURE__ */ o.jsx(
    "div",
    {
      ref: u,
      className: `${jf.container} ${d ? jf.visible : ""}`,
      children: r
    }
  );
}, dx = () => {
  const r = Rt(), a = qr(), i = a ? "Действия удалённых команд" : "Запуск скриптов", u = Ye(), [d, f] = v.useState(), [p, h] = v.useState(!1), [y, w] = v.useState(!1), [g, x] = v.useState({ uuid: "", title: "" }), [k, j] = v.useState(!1), {
    query: b,
    setQuery: C,
    error: E,
    retry: P,
    loading: F,
    scripts: $,
    getAvailableScripts: A,
    loadScripts: z,
    saveScript: O,
    updateScript: Y,
    getScriptAction: W,
    deleteScriptAction: X
  } = x0(), me = Kr($, F || !!E, z, u), pe = { error: r.error ?? E, busy: r.busy, retry: r.error ? r.retry ?? (() => {
    r.clearError(), P();
  }) : P }, ge = () => {
    r.clearError(), f(void 0), j(!1), h(!0);
  }, ye = (fe) => {
    w(!0), x(fe);
  }, we = (fe) => r.run(async () => {
    j(!0);
    const M = await W(
      fe
    );
    f(M), h(!0);
  }, { retryable: !0 }), B = async (fe) => {
    await r.run(async () => {
      if (k) {
        if (!fe.uuid) return;
        const { uuid: M, ...J } = fe;
        await Y(fe.uuid, J);
      } else
        await O(fe);
      h(!1);
    }, { exclusive: !0 });
  }, le = (fe) => r.run(async () => {
    fe && await X(fe);
  }, { exclusive: !0 });
  return /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
    /* @__PURE__ */ o.jsx(
      lt,
      {
        search: { value: b, onChange: C },
        title: i
      }
    ),
    /* @__PURE__ */ o.jsxs("div", { className: K.page, children: [
      !p && /* @__PURE__ */ o.jsx(Qe, { ...pe }),
      /* @__PURE__ */ o.jsx(at, {}),
      /* @__PURE__ */ o.jsxs("div", { className: `${K.header} ${K.collectionHeader}`, children: [
        /* @__PURE__ */ o.jsxs("div", { className: K.heading, children: [
          u ? /* @__PURE__ */ o.jsx(o.Fragment, {}) : /* @__PURE__ */ o.jsx("h1", { className: K.title, children: _(i) }),
          /* @__PURE__ */ o.jsx("p", { className: K.description, children: _(a ? "Выберите скрипт Home Assistant и укажите типы команд, приходящие с удалённого сервера. Типы вводятся вручную." : "Свяжите распознанную команду со скриптом Home Assistant. Выберите скрипт и задайте условия его запуска.") })
        ] }),
        /* @__PURE__ */ o.jsx("div", { className: K.actions, children: u ? /* @__PURE__ */ o.jsx(Qn, { children: /* @__PURE__ */ o.jsx(
          ne,
          {
            variant: "primary",
            onClick: ge,
            children: _("Добавить сценарий")
          }
        ) }) : /* @__PURE__ */ o.jsx(o.Fragment, { children: /* @__PURE__ */ o.jsx(
          ne,
          {
            variant: "primary",
            onClick: ge,
            children: _("🞢 Добавить сценарий")
          }
        ) }) }),
        !u && /* @__PURE__ */ o.jsx(Qr, { value: b, onChange: C })
      ] }),
      /* @__PURE__ */ o.jsxs("div", { className: K.list, children: [
        /* @__PURE__ */ o.jsx(Wt, { loading: F, itemCount: ($ == null ? void 0 : $.script_actions.length) ?? 0, append: u, children: $ == null ? void 0 : $.script_actions.map((fe) => /* @__PURE__ */ o.jsx(
          qn,
          {
            title: fe.title,
            subTitle: "Нажмите для редактирования",
            onClick: () => ye(fe)
          },
          fe.uuid
        )) }),
        !F && !E && b.trim() && !($ != null && $.script_actions.length) && /* @__PURE__ */ o.jsx("p", { role: "status", children: _("Ничего не найдено") }),
        u ? /* @__PURE__ */ o.jsx("div", { ref: me, className: K.listSentinel }) : /* @__PURE__ */ o.jsx(o.Fragment, {})
      ] }),
      u ? /* @__PURE__ */ o.jsx(o.Fragment, {}) : /* @__PURE__ */ o.jsx(
        Yr,
        {
          page: ($ == null ? void 0 : $.page) || 1,
          totalPages: ($ == null ? void 0 : $.total_pages) || 1,
          onChange: z
        }
      ),
      /* @__PURE__ */ o.jsx(
        R0,
        {
          uuid: g.uuid,
          open: y,
          title: g.title,
          onClose: () => w(!1),
          onEdit: we,
          onDelete: le
        }
      ),
      /* @__PURE__ */ o.jsx(
        lx,
        {
          feedback: pe,
          open: p,
          initialData: d,
          isEdit: k,
          availableScripts: A(),
          loading: F,
          onCancel: () => h(!1),
          onSave: async (fe) => {
            await B(fe);
          }
        }
      )
    ] })
  ] });
}, Sp = (r) => ({
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
function jp(r) {
  const a = nt(), { query: i, setQuery: u, page: d, loading: f, loadPage: p, updateItems: h, error: y, retry: w } = kp(r);
  return { query: i, setQuery: u, error: y, retry: w, loading: f, commands: d, loadCommands: p, saveCommand: (C, E) => a.saveData(E, C), updateCommand: async (C, E) => {
    if (!E.uuid) return;
    const { uuid: P, ...F } = E, $ = await a.updateRecord(P, C, F);
    return await p(), $;
  }, deleteCommand: (C, E) => a.deleteRecord(E, C), setCommandStatus: async (C, E, P) => {
    const F = await a.updateRecordStatus(C, E, P);
    return h(($) => $.map((A) => A.uuid === E ? { ...A, status: P } : A)), F;
  }, getCommandDetails: (C, E) => a.getRecord(E, C) };
}
const fx = {
  main: { list: "get_assistant_commands_short", detail: "get_assistant_command", create: "save_assistant_command", update: "update_assistant_command", remove: "delete_assistant_command", status: "update_assistant_command_status" },
  sub: { list: "get_assistant_sub_commands_short", detail: "get_assistant_sub_command", create: "save_assistant_sub_command", update: "update_assistant_sub_command", remove: "delete_assistant_sub_command", status: "update_assistant_sub_command_status" },
  direct: { list: "get_assistant_sub_direct_controls_short", detail: "get_assistant_sub_direct_control", create: "save_assistant_sub_direct_control", update: "update_assistant_sub_direct_control", remove: "delete_assistant_sub_direct_control", status: "update_assistant_sub_direct_controls_status" },
  template: { list: "get_assistant_sub_direct_control_samples_short", detail: "get_assistant_sub_direct_control_sample", create: "save_assistant_sub_direct_control_sample", update: "update_assistant_sub_direct_control_sample", remove: "delete_assistant_sub_direct_control_sample" }
};
function Si(r, a) {
  const i = fx[r], { query: u, setQuery: d, commands: f, loading: p, loadCommands: h, getCommandDetails: y, saveCommand: w, updateCommand: g, deleteCommand: x, setCommandStatus: k, error: j, retry: b } = jp(i.list), C = Rt(), [E, P] = v.useState(!1), [F, $] = v.useState(!1), [A, z] = v.useState(a), [O, Y] = v.useState(null), W = () => {
    C.clearError(), $(!1), z(a()), P(!0);
  }, X = (we) => C.run(async () => {
    const B = await y(i.detail, we);
    $(!0);
    const le = { ...B.data, status: B.data.status ?? !1 };
    for (const fe of ["componentDialog", "subComponentDialog"]) {
      const M = le[fe];
      M && (M.nextAction = (M.nextAction ?? []).filter(
        (J) => !J.actionTypeComponent || ["children", "custom"].includes(J.actionTypeComponent)
      ));
    }
    z(le), P(!0);
  }, { retryable: !0 }), me = (we, B) => C.run(async () => {
    i.status && await k(i.status, we, B);
  }, { exclusive: !0 }), pe = (we) => C.run(async () => {
    await x(i.remove, we), await h();
  }, { exclusive: !0 }), ge = () => C.run(async () => {
    await w(i.create, A), P(!1), await h();
  }, { exclusive: !0 }), ye = () => C.run(async () => {
    await g(i.update, A), P(!1);
  }, { exclusive: !0 });
  return {
    query: u,
    setQuery: d,
    feedback: { error: C.error ?? j, busy: C.busy, retry: C.error ? C.retry ?? (() => {
      C.clearError(), b();
    }) : b },
    listError: j,
    commands: f,
    loading: p,
    loadCommands: h,
    modalOpen: E,
    setModalOpen: P,
    isEdit: F,
    formData: A,
    setFormData: z,
    actionsCommand: O,
    setActionsCommand: Y,
    openCreateModal: W,
    openEditModal: X,
    handleToggleStatus: me,
    handleDelete: pe,
    handleCreate: ge,
    handleUpdate: ye
  };
}
const px = "_field_1iloj_1", hx = "_label_1iloj_8", mx = "_select_1iloj_14", Tl = {
  field: px,
  label: hx,
  select: mx
}, wn = ({
  label: r,
  hint: a,
  options: i,
  className: u = "",
  id: d,
  value: f,
  ...p
}) => {
  const h = v.useId(), y = d ?? h, w = f == null ? "" : String(f), g = !w || i.some((x) => x.value === w);
  return /* @__PURE__ */ o.jsxs("div", { className: Tl.field, children: [
    r && /* @__PURE__ */ o.jsx(su, { label: r, htmlFor: y, className: Tl.label, hint: a }),
    /* @__PURE__ */ o.jsxs(
      "select",
      {
        id: y,
        ...p,
        value: w,
        className: `${Tl.select} ${u}`,
        children: [
          !g && /* @__PURE__ */ o.jsx("option", { value: w, children: w }),
          i.map((x) => /* @__PURE__ */ o.jsx("option", { value: x.value, disabled: x.disabled, children: _(x.label) }, x.value))
        ]
      }
    )
  ] });
};
function Dl({ kind: r, value: a, title: i, onSelect: u }) {
  const d = nt(), [f, p] = v.useState([]), [h, y] = v.useState(!0), [w, g] = v.useState(!1), [x, k] = v.useState(null), [j, b] = v.useState(0), C = v.useRef(null), E = v.useRef(0);
  v.useEffect(() => () => {
    E.current += 1;
  }, []), v.useEffect(() => {
    let A = !1;
    y(!0), k(null);
    const z = r === "nested" ? ["get_assistant_sub_direct_control_samples_short"] : r === "direct" ? ["get_assistant_sub_direct_controls_short"] : ["get_assistant_commands_short", "get_assistant_sub_commands_short"];
    return Promise.all(z.map((O) => d.getAllRecords(O))).then((O) => {
      A || p([...new Map(O.flat().map((Y) => [Y.uuid, Y])).values()]);
    }).catch((O) => {
      A || (k(jt(O)), C.current = () => b((Y) => Y + 1));
    }).finally(() => {
      A || y(!1);
    }), () => {
      A = !0;
    };
  }, [d, r, j]), v.useEffect(() => {
    a && i && p((A) => A.map((z) => z.uuid === a ? { ...z, title: i } : z));
  }, [a, i]);
  const P = async (A) => {
    var Y;
    if (!A) {
      E.current += 1, k(null), u({ uuid: "", title: "" });
      return;
    }
    const z = f.find((W) => W.uuid === A);
    if (!z) return;
    const O = ++E.current;
    if (k(null), r !== "direct") {
      u(z);
      return;
    }
    g(!0);
    try {
      const W = await d.getRecord(A, "get_assistant_sub_direct_control");
      O === E.current && u({ ...z, mappingType: ((Y = W.data.directControl) == null ? void 0 : Y.mappingType) ?? "" });
    } catch (W) {
      O === E.current && (k(jt(W)), C.current = () => {
        P(A);
      });
    } finally {
      O === E.current && g(!1);
    }
  }, F = f.map((A) => ({ value: A.uuid, label: A.title || _("Без названия") }));
  a && !f.some((A) => A.uuid === a) && F.unshift({ value: a, label: i || _("Выбранная команда недоступна") });
  const $ = _(r === "nested" ? "subDirectControl" : "uuid");
  return /* @__PURE__ */ o.jsxs("div", { children: [
    /* @__PURE__ */ o.jsx(
      wn,
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
    /* @__PURE__ */ o.jsx(Qe, { error: x, busy: h || w, retry: () => {
      var A;
      return (A = C.current) == null ? void 0 : A.call(C);
    } })
  ] });
}
const vx = [
  { label: "Ответ из списка фраз", value: "default" },
  { label: "Ответ из скрипта", value: "script_response" }
], gx = [
  { label: "all", value: "all" },
  { label: "string", value: "string" },
  { label: "int", value: "int" },
  { label: "date", value: "date" },
  { label: "time", value: "time" },
  { label: "Вложенные команды", value: "command" }
], yx = [
  { label: "По умолчанию", value: "children" },
  { label: "По типу ответа скрипта", value: "custom" }
], _x = "_form_1a1tt_1", xx = "_field_1a1tt_7", wx = "_arrayItem_1a1tt_29", kx = "_logicTabs_1a1tt_46", Sx = "_sectionTitle_1a1tt_85", jx = "_footerActions_1a1tt_92", Cx = "_phraseMode_1a1tt_106", Ex = "_directTabLabel_1a1tt_122", Nx = "_linkActions_1a1tt_126", tt = {
  form: _x,
  field: xx,
  arrayItem: wx,
  logicTabs: kx,
  sectionTitle: Sx,
  footerActions: jx,
  phraseMode: Cx,
  directTabLabel: Ex,
  linkActions: Nx
}, Cf = () => ({
  mappingType: "",
  valueType: "",
  voiceCommands: [""],
  manual: !1,
  subDirectControl: ""
}), Cp = ({
  open: r,
  feedback: a,
  onClose: i,
  title: u,
  formData: d,
  setFormData: f,
  onSave: p,
  onBack: h
}) => {
  const [y, w] = v.useState("");
  v.useEffect(() => {
    w("");
  }, [r, d.uuid]);
  const g = () => {
    var j;
    if (!((j = d.title) != null && j.trim())) {
      w("Обязательное поле");
      return;
    }
    w(""), p();
  }, x = v.useMemo(() => d.directControl ?? Cf(), [d]), k = (j) => {
    f((b) => ({
      ...b,
      directControl: {
        ...b.directControl ?? Cf(),
        ...j
      }
    }));
  };
  return /* @__PURE__ */ o.jsx(
    $t,
    {
      feedback: a,
      open: r,
      onClose: i,
      onBack: h,
      title: u,
      footer: /* @__PURE__ */ o.jsx("div", { className: tt.form, children: /* @__PURE__ */ o.jsx(ne, { onClick: g, children: _("Сохранить") }) }),
      children: /* @__PURE__ */ o.jsxs("div", { className: tt.form, children: [
        /* @__PURE__ */ o.jsx(
          He,
          {
            label: _("Название команды"),
            hint: ki(d.uuid),
            required: !0,
            error: y,
            value: d.title,
            onChange: (j) => f((b) => ({
              ...b,
              title: j.target.value
            }))
          }
        ),
        /* @__PURE__ */ o.jsx(
          He,
          {
            label: _("mappingType"),
            value: x.mappingType,
            onChange: (j) => k({
              mappingType: j.target.value
            })
          }
        ),
        /* @__PURE__ */ o.jsx(
          wn,
          {
            label: _("valueType"),
            value: x.valueType,
            options: gx,
            onChange: (j) => k({
              valueType: j.target.value
            })
          }
        ),
        x.valueType == "command" ? /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
          /* @__PURE__ */ o.jsx("div", { className: tt.field, children: /* @__PURE__ */ o.jsx(
            _n,
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
            Dl,
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
function Tx({ target: r, onBack: a, onSaved: i }) {
  const u = nt(), d = Rt(), [f, p] = v.useState({ title: "" }), [h, y] = v.useState();
  v.useEffect(() => {
    let g = !1;
    return d.run(async () => {
      let x = r.kind === "direct" ? "direct" : "main", k;
      if (r.kind === "direct") k = await u.getRecord(r.uuid, "get_assistant_sub_direct_control");
      else
        try {
          k = await u.getRecord(r.uuid, "get_assistant_command");
        } catch (j) {
          if (!(j && typeof j == "object" && "code" in j && j.code === "not_found")) throw j;
          x = "sub", k = await u.getRecord(r.uuid, "get_assistant_sub_command");
        }
      g || (p({ ...k.data, status: k.data.status ?? !1 }), y(x));
    }, { retryable: !0 }), () => {
      g = !0;
    };
  }, [u, r.uuid, r.kind, d.run]);
  const w = () => d.run(async () => {
    if (!h) return;
    const g = h === "direct" ? "update_assistant_sub_direct_control" : h === "main" ? "update_assistant_command" : "update_assistant_sub_command", { uuid: x, ...k } = f;
    await u.updateRecord(r.uuid, g, k), i(f), a();
  }, { exclusive: !0 });
  return h ? h === "direct" ? /* @__PURE__ */ o.jsx(
    Cp,
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
    iu,
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
  ) : /* @__PURE__ */ o.jsx($t, { open: !0, onClose: a, onBack: a, title: "Перейти к команде", feedback: d, children: d.busy && /* @__PURE__ */ o.jsx("p", { role: "status", children: _("Загрузка...") }) });
}
const bx = [
  { value: "default", label: "Основной" },
  { value: "default_next_step", label: "Ответ для продолжения диалога" },
  { value: "custom", label: "По типу результата скрипта" }
];
function Ax({ response: r, onChange: a }) {
  const i = (r.actionType ?? "").trim().toLowerCase(), u = ["default", "direct", "default_direct", "next"].includes(i) ? "default" : i === "default_next_step" ? "default_next_step" : "custom";
  return /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
    /* @__PURE__ */ o.jsx(
      wn,
      {
        label: _("Типы ответов"),
        "aria-label": _("Типы ответов"),
        value: u,
        options: bx,
        onChange: (d) => a({ actionType: d.target.value === "custom" ? "" : d.target.value })
      }
    ),
    u === "custom" ? /* @__PURE__ */ o.jsx(
      He,
      {
        label: _("Тип результата скрипта"),
        placeholder: _("Например, room_required"),
        value: r.actionType ?? "",
        onChange: (d) => a({ actionType: d.target.value })
      }
    ) : null,
    /* @__PURE__ */ o.jsx(
      _n,
      {
        label: _("voiceResponse"),
        value: r.voiceResponse,
        onChange: (d) => a({ voiceResponse: d.target.value })
      }
    )
  ] });
}
const Rx = "_switchRow_1hmmz_1", Px = "_input_1hmmz_11", $x = "_track_1hmmz_22", Mx = "_thumb_1hmmz_33", Ix = "_label_1hmmz_62", Fs = {
  switchRow: Rx,
  input: Px,
  track: $x,
  thumb: Mx,
  label: Ix
}, Vn = ({ label: r, className: a = "", ...i }) => /* @__PURE__ */ o.jsxs("label", { className: `${Fs.switchRow} ${a}`, children: [
  /* @__PURE__ */ o.jsx("input", { ...i, type: "checkbox", className: Fs.input }),
  /* @__PURE__ */ o.jsx("span", { className: Fs.track, "aria-hidden": "true", children: /* @__PURE__ */ o.jsx("span", { className: Fs.thumb }) }),
  /* @__PURE__ */ o.jsx("span", { className: Fs.label, children: _(r) })
] }), Dx = [
  { key: "direct", label: "Прямые команды" },
  { key: "continuations", label: "Продолжения" }
];
function Lx({ component: r, onOpenCommand: a, updateComponentArray: i, addComponentArrayItem: u, removeComponentArrayItem: d }) {
  const f = v.useId(), [p, h] = v.useState("direct"), y = Dx.filter((g) => g.key !== "direct" || !r.forwardText), w = r.forwardText && p === "direct" ? "continuations" : p;
  return /* @__PURE__ */ o.jsxs("div", { className: tt.form, children: [
    /* @__PURE__ */ o.jsx("div", { className: tt.logicTabs, role: "tablist", "aria-label": _("Настройки логики"), children: y.map((g) => /* @__PURE__ */ o.jsx(
      "button",
      {
        type: "button",
        role: "tab",
        tabIndex: w === g.key ? 0 : -1,
        onKeyDown: (x) => {
          var b, C;
          const k = y.findIndex((E) => E.key === g.key), j = x.key === "ArrowRight" ? (k + 1) % y.length : x.key === "ArrowLeft" ? (k + y.length - 1) % y.length : x.key === "Home" ? 0 : x.key === "End" ? y.length - 1 : -1;
          j < 0 || (x.preventDefault(), h(y[j].key), (C = (b = x.currentTarget.parentElement) == null ? void 0 : b.querySelectorAll('[role="tab"]')[j]) == null || C.focus());
        },
        id: `${f}-command-logic-tab-${g.key}`,
        "aria-selected": w === g.key,
        "aria-controls": `${f}-command-logic-panel-${g.key}`,
        onClick: () => h(g.key),
        children: g.key === "direct" ? /* @__PURE__ */ o.jsx("span", { className: tt.directTabLabel, children: _(g.label).replace(" ", `
`) }) : _(g.label)
      },
      g.key
    )) }),
    w === "continuations" && /* @__PURE__ */ o.jsxs("div", { role: "tabpanel", id: `${f}-command-logic-panel-continuations`, "aria-labelledby": `${f}-command-logic-tab-continuations`, children: [
      (r.nextAction ?? []).map((g, x) => /* @__PURE__ */ o.jsxs("div", { className: tt.arrayItem, children: [
        /* @__PURE__ */ o.jsx(
          wn,
          {
            label: _("Вид продолжения"),
            value: g.actionTypeComponent || "children",
            options: yx,
            onChange: (k) => i("nextAction", x, {
              actionTypeComponent: k.target.value
            })
          }
        ),
        g.actionTypeComponent == "custom" ? /* @__PURE__ */ o.jsx(
          He,
          {
            label: _("Тип результата скрипта"),
            placeholder: _("Например, room_required"),
            value: g.actionType ?? "",
            onChange: (k) => i("nextAction", x, {
              actionType: k.target.value
            })
          }
        ) : /* @__PURE__ */ o.jsx(o.Fragment, {}),
        /* @__PURE__ */ o.jsx(
          Dl,
          {
            kind: "continuation",
            value: g.uuid,
            title: g.title,
            onSelect: (k) => i("nextAction", x, {
              uuid: k.uuid,
              title: k.title ?? "",
              actionTypeComponent: g.actionTypeComponent || "children"
            })
          }
        ),
        /* @__PURE__ */ o.jsxs("div", { className: tt.linkActions, children: [
          g.uuid && /* @__PURE__ */ o.jsx(ne, { variant: "secondary", onClick: () => a({ uuid: g.uuid, kind: "continuation" }, x), children: _("Перейти к команде") }),
          /* @__PURE__ */ o.jsx(
            ne,
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
        ne,
        {
          type: "button",
          variant: "secondary",
          fullWidth: !0,
          leftIcon: /* @__PURE__ */ o.jsx("span", { "aria-hidden": "true", children: "+" }),
          onClick: () => u("nextAction", {
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
      (r.nextDirectControl ?? []).map((g, x) => /* @__PURE__ */ o.jsxs("div", { className: tt.arrayItem, children: [
        /* @__PURE__ */ o.jsx(
          Dl,
          {
            kind: "direct",
            value: g.uuid,
            title: g.title,
            onSelect: (k) => i("nextDirectControl", x, {
              uuid: k.uuid,
              mappingType: k.mappingType ?? "",
              title: k.title ?? ""
            })
          }
        ),
        g.uuid && /* @__PURE__ */ o.jsx(
          He,
          {
            label: _("mappingType"),
            hint: _("Переменная для фраз запуска. Например, используйте ${room} во фразе, если здесь указано room."),
            readOnly: !0,
            value: g.mappingType ?? ""
          }
        ),
        /* @__PURE__ */ o.jsxs("div", { className: tt.linkActions, children: [
          g.uuid && /* @__PURE__ */ o.jsx(ne, { variant: "secondary", onClick: () => a({ uuid: g.uuid, kind: "direct" }, x), children: _("Перейти к команде") }),
          /* @__PURE__ */ o.jsx(
            ne,
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
        ne,
        {
          type: "button",
          variant: "secondary",
          fullWidth: !0,
          leftIcon: /* @__PURE__ */ o.jsx("span", { "aria-hidden": "true", children: "+" }),
          onClick: () => u("nextDirectControl", {
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
const Ef = () => ({
  endStatus: !0,
  script_entity_id: "",
  answerType: "default",
  voiceCommands: [""],
  nextDirectControl: [{ uuid: "", actionType: "", title: "" }],
  voiceResponseArray: [{ actionType: "default", voiceResponse: "" }],
  nextAction: [{ actionTypeComponent: "children", actionType: "", uuid: "", title: "" }]
}), iu = ({
  open: r,
  feedback: a,
  isEdit: i,
  formData: u,
  componentKey: d,
  setFormData: f,
  onClose: p,
  onBack: h,
  onSave: y,
  onUpdate: w
}) => {
  const x = nt().getScripts(), k = v.useMemo(() => u[d] ?? Ef(), [u, d]);
  v.useEffect(() => {
    r && f((W) => {
      var me;
      const X = W[d];
      return (me = X == null ? void 0 : X.nextAction) != null && me.some((pe) => !pe.actionTypeComponent) ? { ...W, [d]: {
        ...X,
        nextAction: X.nextAction.map((pe) => ({ ...pe, actionTypeComponent: pe.actionTypeComponent || "children" }))
      } } : W;
    });
  }, [r, u.uuid, d, f]);
  const [j, b] = v.useState(null);
  v.useEffect(() => {
    r || b(null);
  }, [r]);
  const [C, E] = v.useState(!1);
  v.useEffect(() => {
    E(!1), F({});
  }, [r, u.uuid, d]);
  const [P, F] = v.useState({}), $ = (W) => {
    f((X) => ({
      ...X,
      [d]: {
        ...X[d] ?? Ef(),
        ...W
      }
    }));
  }, A = (W, X, me) => {
    const pe = [...k[W] ?? []];
    pe[X] = { ...pe[X], ...me }, $({
      [W]: pe
    });
  }, z = (W, X) => {
    $({
      [W]: [...k[W] ?? [], X]
    });
  }, O = (W, X) => {
    $({
      [W]: (k[W] ?? []).filter(
        (me, pe) => pe !== X
      )
    });
  }, Y = () => {
    const W = {};
    return u.title.trim() || (W.title = "Обязательное поле"), F(W), Object.keys(W).length === 0;
  };
  return /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
    /* @__PURE__ */ o.jsx(
      $t,
      {
        suspended: !!j,
        feedback: a,
        open: r,
        onClose: p,
        onBack: h,
        title: C ? "Настроить логику" : i ? "Редактировать" : "Создать",
        footer: /* @__PURE__ */ o.jsx("div", { className: tt.form, children: C ? /* @__PURE__ */ o.jsx(ne, { variant: "secondary", onClick: () => E(!1), children: _("Назад") }) : /* @__PURE__ */ o.jsxs("div", { className: tt.footerActions, children: [
          /* @__PURE__ */ o.jsx(ne, { variant: "secondary", onClick: () => E(!0), children: _("Настроить логику") }),
          /* @__PURE__ */ o.jsx(ne, { onClick: () => {
            Y() && (i ? w() : y());
          }, children: _(i ? "Обновить" : "Сохранить") })
        ] }) }),
        children: C ? /* @__PURE__ */ o.jsx(
          Lx,
          {
            onOpenCommand: (W, X) => b({ ...W, index: X }),
            component: k,
            updateComponentArray: A,
            addComponentArrayItem: z,
            removeComponentArrayItem: O
          }
        ) : /* @__PURE__ */ o.jsxs("div", { className: tt.form, children: [
          /* @__PURE__ */ o.jsx(
            He,
            {
              label: _("Название команды"),
              hint: ki(u.uuid),
              value: u.title,
              error: P.title,
              onChange: (W) => f({
                ...u,
                title: W.target.value
              })
            }
          ),
          /* @__PURE__ */ o.jsx(
            wn,
            {
              label: _("Источник ответа"),
              value: ["ha_storage", "ha", "external"].includes(k.answerType) ? "script_response" : k.answerType,
              options: vx,
              onChange: (W) => $({
                answerType: W.target.value
              })
            }
          ),
          /* @__PURE__ */ o.jsx(
            wn,
            {
              label: _("Скрипт Home Assistant"),
              value: k.script_entity_id ?? "__legacy__",
              options: [
                ...k.script_entity_id === void 0 ? [{ label: _("Использовать существующие сценарии"), value: "__legacy__" }] : [],
                { label: _("Не запускать скрипт"), value: "" },
                ...x.map((W) => ({ label: W.name, value: W.entity_id }))
              ],
              onChange: (W) => $({ script_entity_id: W.target.value })
            }
          ),
          d === "subComponentDialog" && /* @__PURE__ */ o.jsxs("div", { className: tt.phraseMode, children: [
            /* @__PURE__ */ o.jsx(
              Vn,
              {
                label: _("Отправить команду как есть"),
                checked: !!k.forwardText,
                onChange: (W) => $({ forwardText: W.target.checked })
              }
            ),
            /* @__PURE__ */ o.jsx(Ur, { label: "Отправить команду как есть" })
          ] }),
          !(d === "subComponentDialog" && k.forwardText) && /* @__PURE__ */ o.jsx("div", { className: tt.field, children: /* @__PURE__ */ o.jsx(
            _n,
            {
              label: _("Фразы для запуска"),
              value: (k.voiceCommands == null ? [] : typeof k.voiceCommands != "object" ? k == null ? void 0 : k.voiceCommands.split(";") : k == null ? void 0 : k.voiceCommands).join(`
`),
              onChange: (W) => $({
                voiceCommands: W.target.value.split(`
`)
              })
            }
          ) }),
          /* @__PURE__ */ o.jsxs("section", { className: tt.form, "aria-label": _("Ответы"), children: [
            /* @__PURE__ */ o.jsx("h3", { className: tt.sectionTitle, children: _("Ответы") }),
            (k.voiceResponseArray ?? []).map((W, X) => /* @__PURE__ */ o.jsxs("div", { className: tt.arrayItem, children: [
              /* @__PURE__ */ o.jsx(
                Ax,
                {
                  response: W,
                  onChange: (me) => A("voiceResponseArray", X, me)
                }
              ),
              /* @__PURE__ */ o.jsx(
                ne,
                {
                  type: "button",
                  variant: "remove",
                  onClick: () => O("voiceResponseArray", X),
                  children: _("Удалить")
                }
              )
            ] }, X)),
            /* @__PURE__ */ o.jsx(
              ne,
              {
                type: "button",
                variant: "secondary",
                fullWidth: !0,
                leftIcon: /* @__PURE__ */ o.jsx("span", { "aria-hidden": "true", children: "+" }),
                onClick: () => z("voiceResponseArray", {
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
      Tx,
      {
        target: j,
        onBack: () => b(null),
        onSaved: (W) => {
          var X;
          j.kind === "direct" ? A("nextDirectControl", j.index, { title: W.title, mappingType: ((X = W.directControl) == null ? void 0 : X.mappingType) ?? "" }) : A("nextAction", j.index, { title: W.title });
        }
      },
      `${j.kind}-${j.uuid}`
    )
  ] });
}, ji = ({ command: r, open: a, onClose: i, onToggleStatus: u, onEdit: d, onDelete: f }) => r ? /* @__PURE__ */ o.jsx(ou, { open: a, title: r.title, uuid: r.uuid, onClose: i, actions: [
  ...u ? [{ label: r.status ? "Выключить" : "Включить", onClick: () => u(r.uuid, !r.status) }] : [],
  { label: "Изменить", variant: "secondary", onClick: () => d(r.uuid) },
  { label: "Удалить", variant: "remove", onClick: () => f(r.uuid) }
] }) : null, Ox = () => Sp("componentDialog"), zx = () => {
  const r = Ye(), {
    query: a,
    setQuery: i,
    feedback: u,
    listError: d,
    commands: f,
    loading: p,
    loadCommands: h,
    modalOpen: y,
    setModalOpen: w,
    isEdit: g,
    formData: x,
    setFormData: k,
    actionsCommand: j,
    setActionsCommand: b,
    openCreateModal: C,
    openEditModal: E,
    handleToggleStatus: P,
    handleDelete: F,
    handleCreate: $,
    handleUpdate: A
  } = Si("main", Ox), z = Kr(f, p || !!d, h, r);
  return /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
    /* @__PURE__ */ o.jsx(
      lt,
      {
        search: { value: a, onChange: i },
        title: "Основные команды"
      }
    ),
    /* @__PURE__ */ o.jsxs("div", { className: K.page, children: [
      !y && /* @__PURE__ */ o.jsx(Qe, { ...u }),
      /* @__PURE__ */ o.jsx(at, {}),
      /* @__PURE__ */ o.jsxs("div", { className: `${K.header} ${K.collectionHeader}`, children: [
        /* @__PURE__ */ o.jsx("div", { className: K.heading, children: r ? /* @__PURE__ */ o.jsx(o.Fragment, {}) : /* @__PURE__ */ o.jsx("h1", { className: K.title, children: _("Основные команды") }) }),
        /* @__PURE__ */ o.jsx("div", { className: K.actions, children: r ? /* @__PURE__ */ o.jsx(Qn, { startVisible: !0, children: /* @__PURE__ */ o.jsx(ne, { variant: "primary", onClick: C, children: _("Добавить сценарий") }) }) : /* @__PURE__ */ o.jsx(ne, { variant: "primary", onClick: C, children: _("🞢 Добавить сценарий") }) }),
        !r && /* @__PURE__ */ o.jsx(Qr, { value: a, onChange: i })
      ] }),
      /* @__PURE__ */ o.jsxs("div", { className: K.list, children: [
        /* @__PURE__ */ o.jsx(Wt, { loading: p, itemCount: (f == null ? void 0 : f.data.length) ?? 0, append: r, children: f == null ? void 0 : f.data.map((O) => /* @__PURE__ */ o.jsx(
          qn,
          {
            title: O.title,
            subTitle: O.status === !1 ? "Выключена" : "Включена",
            onClick: () => b(O)
          },
          O.uuid
        )) }),
        !p && !d && a.trim() && !(f != null && f.data.length) && /* @__PURE__ */ o.jsx("p", { role: "status", children: _("Ничего не найдено") }),
        r ? /* @__PURE__ */ o.jsx("div", { ref: z, className: K.listSentinel }) : /* @__PURE__ */ o.jsx(o.Fragment, {})
      ] }),
      r ? /* @__PURE__ */ o.jsx(o.Fragment, {}) : /* @__PURE__ */ o.jsx(
        Yr,
        {
          page: (f == null ? void 0 : f.page) || 1,
          totalPages: (f == null ? void 0 : f.total_pages) || 1,
          onChange: (O) => h(O)
        }
      ),
      /* @__PURE__ */ o.jsx(
        iu,
        {
          feedback: u,
          open: y,
          isEdit: g,
          formData: x,
          componentKey: "componentDialog",
          setFormData: k,
          onClose: () => w(!1),
          onSave: $,
          onUpdate: A
        }
      ),
      /* @__PURE__ */ o.jsx(
        ji,
        {
          open: !!j,
          command: j,
          onClose: () => b(null),
          onToggleStatus: P,
          onDelete: F,
          onEdit: (O) => E(O)
        }
      )
    ] })
  ] });
}, Hx = () => Sp("subComponentDialog"), Fx = () => {
  const r = Ye(), {
    query: a,
    setQuery: i,
    feedback: u,
    listError: d,
    commands: f,
    loading: p,
    loadCommands: h,
    modalOpen: y,
    setModalOpen: w,
    isEdit: g,
    formData: x,
    setFormData: k,
    actionsCommand: j,
    setActionsCommand: b,
    openCreateModal: C,
    openEditModal: E,
    handleToggleStatus: P,
    handleDelete: F,
    handleCreate: $,
    handleUpdate: A
  } = Si("sub", Hx), z = Kr(f, p || !!d, h, r);
  return /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
    /* @__PURE__ */ o.jsx(
      lt,
      {
        search: { value: a, onChange: i },
        title: "Второстепенные команды"
      }
    ),
    /* @__PURE__ */ o.jsxs("div", { className: K.page, children: [
      !y && /* @__PURE__ */ o.jsx(Qe, { ...u }),
      r ? /* @__PURE__ */ o.jsx(o.Fragment, {}) : /* @__PURE__ */ o.jsx(at, {}),
      /* @__PURE__ */ o.jsxs("div", { className: `${K.header} ${K.collectionHeader}`, children: [
        /* @__PURE__ */ o.jsx("div", { className: K.heading, children: r ? /* @__PURE__ */ o.jsx(o.Fragment, {}) : /* @__PURE__ */ o.jsx("h1", { className: K.title, children: _("Второстепенные команды") }) }),
        /* @__PURE__ */ o.jsx("div", { className: K.actions, children: r ? /* @__PURE__ */ o.jsx(Qn, { startVisible: !0, children: /* @__PURE__ */ o.jsx(ne, { variant: "primary", onClick: C, children: _("Добавить сценарий") }) }) : /* @__PURE__ */ o.jsx(o.Fragment, { children: /* @__PURE__ */ o.jsx(ne, { variant: "primary", onClick: C, children: _("🞢 Добавить сценарий") }) }) }),
        !r && /* @__PURE__ */ o.jsx(Qr, { value: a, onChange: i })
      ] }),
      /* @__PURE__ */ o.jsxs("div", { className: K.list, children: [
        /* @__PURE__ */ o.jsx(Wt, { loading: p, itemCount: (f == null ? void 0 : f.data.length) ?? 0, append: r, children: f == null ? void 0 : f.data.map((O) => /* @__PURE__ */ o.jsx(
          qn,
          {
            title: O.title,
            subTitle: O.status === !1 ? "Выключена" : "Включена",
            onClick: () => b(O)
          },
          O.uuid
        )) }),
        !p && !d && a.trim() && !(f != null && f.data.length) && /* @__PURE__ */ o.jsx("p", { role: "status", children: _("Ничего не найдено") })
      ] }),
      r ? /* @__PURE__ */ o.jsx("div", { ref: z, className: K.listSentinel }) : /* @__PURE__ */ o.jsx(
        Yr,
        {
          page: (f == null ? void 0 : f.page) || 1,
          totalPages: (f == null ? void 0 : f.total_pages) || 1,
          onChange: (O) => h(O)
        }
      ),
      /* @__PURE__ */ o.jsx(
        iu,
        {
          feedback: u,
          open: y,
          isEdit: g,
          formData: x,
          componentKey: "subComponentDialog",
          setFormData: k,
          onClose: () => w(!1),
          onSave: $,
          onUpdate: A
        }
      ),
      /* @__PURE__ */ o.jsx(
        ji,
        {
          open: !!j,
          command: j,
          onClose: () => b(null),
          onToggleStatus: P,
          onDelete: F,
          onEdit: (O) => E(O)
        }
      )
    ] })
  ] });
}, Wx = [
  { path: "/commands/direct/main", label: "Команды" },
  { path: "/commands/direct/template", label: "Вложенные команды" }
], gi = () => {
  const { pathname: r } = Ct(), a = Bl();
  return /* @__PURE__ */ o.jsx("div", { className: K.innerTabs, role: "group", "aria-label": _("Раздел прямых команд"), children: Wx.map((i) => /* @__PURE__ */ o.jsx(
    "button",
    {
      type: "button",
      "aria-pressed": r === i.path,
      className: `${K.innerTab} ${r === i.path ? K.activeInnerTab : ""}`,
      onClick: () => a(i.path),
      children: _(i.label)
    },
    i.path
  )) });
}, Bx = () => ({
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
}), Ux = () => {
  const r = Ye(), {
    query: a,
    setQuery: i,
    feedback: u,
    listError: d,
    commands: f,
    loading: p,
    loadCommands: h,
    modalOpen: y,
    setModalOpen: w,
    isEdit: g,
    formData: x,
    setFormData: k,
    actionsCommand: j,
    setActionsCommand: b,
    openCreateModal: C,
    openEditModal: E,
    handleToggleStatus: P,
    handleDelete: F,
    handleCreate: $,
    handleUpdate: A
  } = Si("direct", Bx), z = Kr(f, p || !!d, h, r);
  return /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
    /* @__PURE__ */ o.jsx(
      lt,
      {
        search: { value: a, onChange: i },
        beforeSearch: /* @__PURE__ */ o.jsx(gi, {}),
        title: "Прямые команды"
      }
    ),
    /* @__PURE__ */ o.jsxs("div", { className: K.page, children: [
      !y && /* @__PURE__ */ o.jsx(Qe, { ...u }),
      r ? /* @__PURE__ */ o.jsx(o.Fragment, {}) : /* @__PURE__ */ o.jsx(at, {}),
      /* @__PURE__ */ o.jsxs("div", { className: `${K.header} ${K.collectionHeader}`, children: [
        /* @__PURE__ */ o.jsxs("div", { className: K.heading, children: [
          r ? /* @__PURE__ */ o.jsx(o.Fragment, {}) : /* @__PURE__ */ o.jsx("h1", { className: K.title, children: _("Прямые команды") }),
          !r && /* @__PURE__ */ o.jsx(gi, {})
        ] }),
        /* @__PURE__ */ o.jsx("div", { className: K.actions, children: r ? /* @__PURE__ */ o.jsx(Qn, { startVisible: !0, children: /* @__PURE__ */ o.jsx(ne, { variant: "primary", onClick: C, children: _("Добавить сценарий") }) }) : /* @__PURE__ */ o.jsx(ne, { variant: "primary", onClick: C, children: _("🞢 Добавить сценарий") }) }),
        !r && /* @__PURE__ */ o.jsx(Qr, { value: a, onChange: i })
      ] }),
      /* @__PURE__ */ o.jsxs("div", { className: K.list, children: [
        /* @__PURE__ */ o.jsx(Wt, { loading: p, itemCount: (f == null ? void 0 : f.data.length) ?? 0, append: r, children: f == null ? void 0 : f.data.map((O) => /* @__PURE__ */ o.jsx(
          qn,
          {
            title: O.title,
            subTitle: O.status === !1 ? "Выключена" : "Включена",
            onClick: () => b(O)
          },
          O.uuid
        )) }),
        !p && !d && a.trim() && !(f != null && f.data.length) && /* @__PURE__ */ o.jsx("p", { role: "status", children: _("Ничего не найдено") })
      ] }),
      r ? /* @__PURE__ */ o.jsx("div", { ref: z, className: K.listSentinel }) : /* @__PURE__ */ o.jsx(
        Yr,
        {
          page: (f == null ? void 0 : f.page) || 1,
          totalPages: (f == null ? void 0 : f.total_pages) || 1,
          onChange: (O) => h(O)
        }
      ),
      /* @__PURE__ */ o.jsx(
        Cp,
        {
          feedback: u,
          open: y,
          onClose: () => w(!1),
          title: _(g ? "Редактировать прямую команду" : "Создать прямую команду"),
          formData: x,
          setFormData: k,
          onSave: g ? A : $
        }
      ),
      /* @__PURE__ */ o.jsx(
        ji,
        {
          open: !!j,
          command: j,
          onClose: () => b(null),
          onToggleStatus: P,
          onDelete: F,
          onEdit: (O) => E(O)
        }
      )
    ] })
  ] });
}, Vx = "_form_mn1ml_1", qx = "_arrayItem_mn1ml_8", Qx = "_sectionTitle_mn1ml_25", ui = {
  form: Vx,
  arrayItem: qx,
  sectionTitle: Qx
}, Kx = ({
  open: r,
  feedback: a,
  onClose: i,
  title: u,
  formData: d,
  setFormData: f,
  onSave: p
}) => {
  const [h, y] = v.useState("");
  v.useEffect(() => {
    y("");
  }, [r, d.uuid]);
  const w = () => {
    var C;
    if (!((C = d.title) != null && C.trim())) {
      y("Обязательное поле");
      return;
    }
    y(""), p();
  }, g = v.useMemo(
    () => d.subDirectControl ?? [],
    [d]
  ), x = (C) => {
    f((E) => ({
      ...E,
      subDirectControl: C
    }));
  }, k = (C, E) => {
    const P = [...g];
    P[C] = {
      ...P[C],
      ...E
    }, x(P);
  }, j = () => {
    x([
      ...g,
      {
        subMappingType: "",
        subVoiceCommands: ""
      }
    ]);
  }, b = (C) => {
    x(
      g.filter((E, P) => P !== C)
    );
  };
  return /* @__PURE__ */ o.jsx(
    $t,
    {
      feedback: a,
      open: r,
      onClose: i,
      title: u,
      footer: /* @__PURE__ */ o.jsx(ne, { onClick: w, children: _("Сохранить") }),
      children: /* @__PURE__ */ o.jsxs("div", { className: ui.form, children: [
        /* @__PURE__ */ o.jsx(
          He,
          {
            label: _("Название команды"),
            hint: ki(d.uuid),
            required: !0,
            error: h,
            value: d.title,
            onChange: (C) => f((E) => ({
              ...E,
              title: C.target.value
            }))
          }
        ),
        /* @__PURE__ */ o.jsxs("section", { className: ui.form, "aria-label": _("Варианты вложенных команд"), children: [
          /* @__PURE__ */ o.jsx("h3", { className: ui.sectionTitle, children: _("Варианты вложенных команд") }),
          g.map((C, E) => /* @__PURE__ */ o.jsxs(
            "div",
            {
              className: ui.arrayItem,
              children: [
                /* @__PURE__ */ o.jsx(
                  He,
                  {
                    label: _("Код значения"),
                    value: C.subMappingType ?? "",
                    onChange: (P) => k(E, {
                      subMappingType: P.target.value
                    })
                  }
                ),
                /* @__PURE__ */ o.jsx(
                  _n,
                  {
                    label: _("Варианты произношения"),
                    rows: 3,
                    value: (Array.isArray(C.subVoiceCommands) ? C.subVoiceCommands : []).join(`
`),
                    onChange: (P) => k(E, {
                      subVoiceCommands: P.target.value.split(`
`).filter(Boolean)
                    })
                  }
                ),
                /* @__PURE__ */ o.jsx(
                  ne,
                  {
                    type: "button",
                    variant: "remove",
                    onClick: () => b(E),
                    children: _("Удалить")
                  }
                )
              ]
            },
            E
          )),
          /* @__PURE__ */ o.jsx(
            ne,
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
}, Yx = () => ({
  status: !0,
  title: "",
  subDirectControl: []
}), Jx = () => {
  const r = Ye(), {
    query: a,
    setQuery: i,
    feedback: u,
    listError: d,
    commands: f,
    loading: p,
    loadCommands: h,
    modalOpen: y,
    setModalOpen: w,
    isEdit: g,
    formData: x,
    setFormData: k,
    actionsCommand: j,
    setActionsCommand: b,
    openCreateModal: C,
    openEditModal: E,
    handleDelete: P,
    handleCreate: F,
    handleUpdate: $
  } = Si("template", Yx), A = Kr(f, p || !!d, h, r);
  return /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
    /* @__PURE__ */ o.jsx(
      lt,
      {
        search: { value: a, onChange: i },
        beforeSearch: /* @__PURE__ */ o.jsx(gi, {}),
        title: "Вложенные команды"
      }
    ),
    /* @__PURE__ */ o.jsxs("div", { className: K.page, children: [
      !y && /* @__PURE__ */ o.jsx(Qe, { ...u }),
      !r && /* @__PURE__ */ o.jsx(at, {}),
      /* @__PURE__ */ o.jsxs("div", { className: `${K.header} ${K.collectionHeader}`, children: [
        /* @__PURE__ */ o.jsxs("div", { className: K.heading, children: [
          r ? /* @__PURE__ */ o.jsx(o.Fragment, {}) : /* @__PURE__ */ o.jsx("h1", { className: K.title, children: _("Вложенные команды") }),
          !r && /* @__PURE__ */ o.jsx(gi, {})
        ] }),
        /* @__PURE__ */ o.jsx("div", { className: K.actions, children: r ? /* @__PURE__ */ o.jsx(Qn, { startVisible: !0, children: /* @__PURE__ */ o.jsx(ne, { variant: "primary", onClick: C, children: _("Добавить сценарий") }) }) : /* @__PURE__ */ o.jsx(ne, { variant: "primary", onClick: C, children: _("🞢 Добавить сценарий") }) }),
        !r && /* @__PURE__ */ o.jsx(Qr, { value: a, onChange: i })
      ] }),
      /* @__PURE__ */ o.jsxs("div", { className: K.list, children: [
        /* @__PURE__ */ o.jsx(Wt, { loading: p, itemCount: (f == null ? void 0 : f.data.length) ?? 0, append: r, children: f == null ? void 0 : f.data.map((z) => /* @__PURE__ */ o.jsx(
          qn,
          {
            title: z.title,
            onClick: () => b(z)
          },
          z.uuid
        )) }),
        !p && !d && a.trim() && !(f != null && f.data.length) && /* @__PURE__ */ o.jsx("p", { role: "status", children: _("Ничего не найдено") })
      ] }),
      r ? /* @__PURE__ */ o.jsx(
        "div",
        {
          ref: A,
          className: K.listSentinel
        }
      ) : /* @__PURE__ */ o.jsx(
        Yr,
        {
          page: (f == null ? void 0 : f.page) ?? 1,
          totalPages: (f == null ? void 0 : f.total_pages) ?? 1,
          onChange: (z) => h(
            z
          )
        }
      ),
      /* @__PURE__ */ o.jsx(
        Kx,
        {
          feedback: u,
          open: y,
          onClose: () => w(!1),
          title: g ? "Редактировать" : "Создать",
          formData: x,
          setFormData: k,
          onSave: g ? $ : F
        }
      ),
      /* @__PURE__ */ o.jsx(
        ji,
        {
          open: !!j,
          command: j,
          onClose: () => b(null),
          onDelete: P,
          onEdit: (z) => E(z)
        }
      )
    ] })
  ] });
}, Nf = {
  stop: "Стоп",
  default_main: "Если ничего не нашёл",
  not_understand: "Если не распознано продолжение",
  finish_miss: "Если продолжение не распознано несколько раз"
};
function Ep(r) {
  return r.actionType && Nf[r.actionType] ? _(Nf[r.actionType]) : r.title;
}
const Gx = "_form_1i0x1_1", Xx = {
  form: Gx
}, Zx = ({
  open: r,
  feedback: a,
  isEdit: i,
  formData: u,
  setFormData: d,
  onClose: f,
  onUpdate: p
}) => {
  var x, k;
  const h = u, y = nt().getScripts(), w = h.actionType === "default_main" && !!h.forwardCommandToServer, g = (j) => {
    d((b) => ({
      ...b,
      ...j
    }));
  };
  return /* @__PURE__ */ o.jsx(
    $t,
    {
      feedback: a,
      open: r,
      onClose: f,
      title: i ? "Редактировать" : "Создать",
      footer: /* @__PURE__ */ o.jsx(ne, { onClick: p, children: _("Обновить") }),
      children: /* @__PURE__ */ o.jsxs("div", { className: Xx.form, children: [
        /* @__PURE__ */ o.jsx(
          He,
          {
            label: _("Название команды"),
            hint: ki(u.uuid),
            value: Ep(u),
            readOnly: !0
          }
        ),
        h.actionType === "stop" && /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
          /* @__PURE__ */ o.jsx(
            Vn,
            {
              label: _("Включить команду «Стоп»"),
              checked: h.status !== !1,
              onChange: (j) => g({ status: j.target.checked })
            }
          ),
          /* @__PURE__ */ o.jsx(
            _n,
            {
              label: _("Фразы для запуска"),
              rows: 4,
              hint: _("Фразы завершения диалога через ;. Работают для основных команд и продолжений. Проверяется совпадение всей фразы."),
              value: Array.isArray(h.voiceCommands) ? h.voiceCommands.join(`
`) : h.voiceCommands ?? "",
              onChange: (j) => g({ voiceCommands: j.target.value.split(`
`) })
            }
          )
        ] }),
        h.actionType !== "stop" && /* @__PURE__ */ o.jsx(
          Vn,
          {
            label: _("Завершать диалог"),
            checked: !!h.endStatus,
            onChange: (j) => g({
              endStatus: j.target.checked
            })
          }
        ),
        h.actionType === "default_main" && /* @__PURE__ */ o.jsx(
          Vn,
          {
            label: _("Передать команду серверу"),
            checked: !!h.forwardCommandToServer,
            onChange: (j) => g({
              forwardCommandToServer: j.target.checked
            })
          }
        ),
        h.actionType === "default_main" && h.forwardCommandToServer && /* @__PURE__ */ o.jsx(
          wn,
          {
            label: _("Скрипт Home Assistant"),
            value: h.script_entity_id ?? "",
            options: [
              { value: "", label: _("Использовать существующие сценарии") },
              ...y.map((j) => ({ value: j.entity_id, label: j.name })),
              ...h.script_entity_id && !y.some((j) => j.entity_id === h.script_entity_id) ? [{ value: h.script_entity_id, label: h.script_entity_id }] : []
            ],
            onChange: (j) => g({ script_entity_id: j.target.value })
          }
        ),
        w ? /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
          /* @__PURE__ */ o.jsx(
            He,
            {
              label: _("Тип результата скрипта"),
              value: "success",
              readOnly: !0,
              hint: _("Ожидается ответ скрипта с типом success. После его получения будет озвучен текст из поля ниже.")
            }
          ),
          /* @__PURE__ */ o.jsx(
            _n,
            {
              rows: 8,
              label: _("Текст озвучки"),
              hint: _("Можно подставить данные из скрипта через ${имя}. Например, для текста «Ответ: ${reply}» передайте reply в поле variables действия ha_dialog_ui.send_command. Имена должны совпадать. Скрипт должен вернуть тип success."),
              placeholder: _("Например: ${reply}"),
              value: ((k = (x = h.voiceResponseArray) == null ? void 0 : x.find((j) => j.actionType === "success")) == null ? void 0 : k.voiceResponse) ?? "",
              onChange: (j) => g({ voiceResponseArray: [{ actionType: "success", voiceResponse: j.target.value }] })
            }
          )
        ] }) : /* @__PURE__ */ o.jsx(
          _n,
          {
            rows: 8,
            "aria-label": _("Ответное сообщение"),
            label: _("Ответное сообщение"),
            value: h.voiceResponse,
            onChange: (j) => g({
              voiceResponse: j.target.value
            })
          }
        )
      ] })
    }
  );
}, ew = () => {
  const r = Rt(), a = Ye(), [i, u] = v.useState(!1), [d, f] = v.useState(!1), [p, h] = v.useState({ title: "" }), {
    error: y,
    retry: w,
    loading: g,
    loadCommands: x,
    getCommandDetails: k,
    updateCommand: j,
    commands: b
  } = jp("get_assistant_settings_short"), C = Kr(b, g || !!y, x, a), E = { error: r.error ?? y, busy: r.busy, retry: r.error ? r.retry ?? (() => {
    r.clearError(), w();
  }) : w }, P = ($) => r.run(async () => {
    f(!0);
    const A = await k("get_assistant_setting", $.uuid);
    h(A.data), u(!0);
  }, { retryable: !0 }), F = () => r.run(async () => {
    await j("update_assistant_setting", p), u(!1);
  }, { exclusive: !0 });
  return /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
    /* @__PURE__ */ o.jsx(
      lt,
      {
        title: "Ответы по умолчанию"
      }
    ),
    /* @__PURE__ */ o.jsxs("div", { className: K.page, children: [
      !i && /* @__PURE__ */ o.jsx(Qe, { ...E }),
      a ? /* @__PURE__ */ o.jsx(o.Fragment, {}) : /* @__PURE__ */ o.jsx(at, {}),
      /* @__PURE__ */ o.jsx("div", { className: `${K.header} ${K.collectionHeader}`, children: /* @__PURE__ */ o.jsx("div", { className: K.headerTop, children: /* @__PURE__ */ o.jsx("div", { className: K.heading, children: !a && /* @__PURE__ */ o.jsx("h1", { className: K.title, children: _("Ответы по умолчанию") }) }) }) }),
      /* @__PURE__ */ o.jsx("div", { className: K.list, children: /* @__PURE__ */ o.jsx(Wt, { loading: g, itemCount: (b == null ? void 0 : b.data.length) ?? 0, append: a, children: b == null ? void 0 : b.data.map(($) => /* @__PURE__ */ o.jsx(
        qn,
        {
          title: Ep($),
          onClick: () => P($)
        },
        $.uuid
      )) }) }),
      a ? /* @__PURE__ */ o.jsx("div", { ref: C, className: K.listSentinel }) : /* @__PURE__ */ o.jsx(
        Yr,
        {
          page: (b == null ? void 0 : b.page) || 1,
          totalPages: (b == null ? void 0 : b.total_pages) || 1,
          onChange: ($) => x($)
        }
      ),
      /* @__PURE__ */ o.jsx(
        Zx,
        {
          feedback: E,
          open: i,
          isEdit: d,
          formData: p,
          setFormData: h,
          onClose: () => u(!1),
          onUpdate: F
        }
      )
    ] })
  ] });
}, tw = (r, a) => {
  const i = new Blob([JSON.stringify(a, null, 2)], {
    type: "application/json;charset=utf-8"
  }), u = URL.createObjectURL(i), d = document.createElement("a");
  d.href = u, d.download = r, document.body.appendChild(d), d.click(), d.remove(), URL.revokeObjectURL(u);
};
class Ht extends Error {
}
const Np = {
  scripts: { list: "get_script_actions_short", detail: "get_script_action", import: "import_script_actions" },
  scenarios: { list: "get_assistant_sub_commands_short", detail: "get_assistant_sub_command", import: "import_assistant_sub_commands" }
}, an = (r) => r !== null && typeof r == "object" && !Array.isArray(r);
async function nw(r, a) {
  if (a === "settings") {
    const d = await r.getData("get_settings"), f = an(d) && an(d.result) ? d.result : d;
    if (!an(f)) throw new Ht("Файл не содержит корректные настройки.");
    return Object.fromEntries(["theme", "client_id", "is_admin", "active_remout", "api_commands_enabled", "api_commands_token", "call_music", "remout", "timer_alarm"].filter((h) => h in f).map((h) => [h, f[h]]));
  }
  if (a === "scenarios") return r.getData("export_command_bundle");
  const i = Np[a], u = await r.getAllRecords(i.list);
  return Promise.all(u.map(async (d) => {
    const f = await r.getRecord(d.uuid, i.detail);
    return an(f) ? f.data : void 0;
  }));
}
function rw(r, a) {
  let i;
  try {
    i = JSON.parse(r);
  } catch {
    throw new Ht("Некорректный JSON-файл.");
  }
  if (a === "settings") {
    const d = { theme: "string", client_id: "string", is_admin: "boolean", active_remout: "boolean", api_commands_enabled: "boolean", api_commands_token: "string", call_music: "string", remout: "object", timer_alarm: "object" };
    if (!an(i) || !Object.keys(i).length || Object.keys(i).some((f) => !d[f] || typeof i[f] !== d[f])) throw new Ht("Файл не содержит корректные настройки.");
    if (i.theme !== void 0 && (typeof i.theme != "string" || !["dark", "light"].includes(i.theme))) throw new Ht("Файл не содержит корректные настройки.");
    for (const [f, p] of [["remout", ["base_url", "token", "client_id"]], ["timer_alarm", ["global_music_timer", "global_music_alarm"]]])
      if (f in i && (!an(i[f]) || Object.entries(i[f]).some(([h, y]) => !p.includes(h) || typeof y != "string"))) throw new Ht("Файл не содержит корректные настройки.");
    return i;
  }
  if (a === "scenarios" && an(i)) {
    const d = ["commands", "sub_commands", "direct_commands", "templates", "settings"];
    if (i.format !== "ha-dialog-ui-commands" || i.version !== 1 || Object.keys(i).length !== 7 || d.some((f) => !Array.isArray(i[f]))) throw new Ht("Некорректный файл сценариев или неподдерживаемая версия.");
    for (const f of d) {
      const p = /* @__PURE__ */ new Set(), h = i[f];
      if (!Array.isArray(h)) throw new Ht("Ожидается массив записей JSON.");
      for (const y of h) {
        if (!an(y) || typeof y.uuid != "string" || !y.uuid.trim() || p.has(y.uuid) || typeof y.title != "string") throw new Ht("Некорректные или повторяющиеся ID записей.");
        p.add(y.uuid);
      }
    }
    return i;
  }
  if (!Array.isArray(i)) throw new Ht("Ожидается массив записей JSON.");
  const u = /* @__PURE__ */ new Set();
  for (const d of i) {
    if (!an(d) || typeof d.uuid != "string" || !d.uuid.trim() || u.has(d.uuid)) throw new Ht("Некорректные или повторяющиеся ID записей.");
    if (u.add(d.uuid), !(a === "scripts" ? typeof d.name == "string" && typeof d.script_entity_id == "string" : typeof d.title == "string" && typeof d.status == "boolean" && an(d.subComponentDialog) && typeof d.subComponentDialog.endStatus == "boolean" && typeof d.subComponentDialog.actionType == "string" && typeof d.subComponentDialog.answerType == "string")) throw new Ht("Нужен файл с полными записями. Краткий список названий загрузить нельзя.");
  }
  return i;
}
async function sw(r, a, i) {
  const u = rw(i, a);
  return await r.saveData(u, a === "settings" ? "import_settings" : a === "scenarios" && !Array.isArray(u) ? "import_command_bundle" : Np[a].import), u;
}
const ow = "_grid_fc8hl_1", iw = "_card_fc8hl_8", aw = "_actions_fc8hl_23", lw = "_description_fc8hl_29", uw = "_page_fc8hl_36", Ws = {
  grid: ow,
  card: iw,
  actions: aw,
  description: lw,
  page: uw
}, cw = [
  { kind: "scripts", title: "Действия удалённых команд", description: "Привязки команд к скриптам Home Assistant и условия запуска. Самих скриптов HA в файле нет.", download: "Скачать скрипты", upload: "Загрузить скрипты" },
  { kind: "scenarios", title: "Сценарии", description: "Все разделы «Команды»: основные, второстепенные, прямые, шаблоны и ответы по умолчанию. ID и связи сохраняются.", download: "Скачать сценарии", upload: "Загрузить сценарии" },
  { kind: "settings", title: "Настройки интеграции", description: "Тема, параметры подключения, API и звуки таймеров и будильников. Язык интерфейса в файл не входит.", download: "Скачать настройки", upload: "Загрузить настройки" }
], dw = () => {
  const r = nt(), a = qr(), i = Ye(), [u, d] = v.useState(!1), [f, p] = v.useState(""), [h, y] = v.useState(!1), w = v.useRef(null), g = v.useRef(null), x = v.useRef("scripts"), k = async (j, b = !1) => {
    w.current = b ? j : null, d(!0), p(""), y(!1);
    try {
      await j();
    } catch (C) {
      y(!0), p(C instanceof Ht ? C.message : jt(C));
    } finally {
      d(!1);
    }
  };
  return /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
    /* @__PURE__ */ o.jsx(lt, { title: _("Импорт и экспорт") }),
    /* @__PURE__ */ o.jsxs("div", { className: `${K.page} ${Ws.page}`, children: [
      /* @__PURE__ */ o.jsx(at, {}),
      !i && /* @__PURE__ */ o.jsx("h1", { children: _("Импорт и экспорт") }),
      /* @__PURE__ */ o.jsx("div", { className: Ws.grid, children: cw.filter((j) => j.kind === "scripts" ? a === !0 : j.kind !== "scenarios" || a === !1).map((j) => /* @__PURE__ */ o.jsxs("section", { className: Ws.card, children: [
        /* @__PURE__ */ o.jsx("h2", { children: _(j.title) }),
        /* @__PURE__ */ o.jsx("p", { className: Ws.description, children: _(j.description) }),
        /* @__PURE__ */ o.jsxs("div", { className: Ws.actions, children: [
          /* @__PURE__ */ o.jsx(ne, { disabled: u, onClick: () => k(async () => {
            tw(`ha-dialog-ui-${j.kind}.json`, await nw(r, j.kind));
          }, !0), children: _(j.download) }),
          /* @__PURE__ */ o.jsx(ne, { variant: "secondary", disabled: u, onClick: () => {
            var b;
            x.current = j.kind, (b = g.current) == null || b.click();
          }, children: _(j.upload) })
        ] })
      ] }, j.kind)) }),
      /* @__PURE__ */ o.jsx("input", { ref: g, type: "file", accept: ".json,application/json", hidden: !0, onChange: (j) => {
        var E;
        const b = (E = j.target.files) == null ? void 0 : E[0], C = x.current;
        j.target.value = "", b && k(async () => {
          const P = await sw(r, C, await b.text());
          C === "settings" && P !== null && typeof P == "object" && !Array.isArray(P) && (typeof P.theme == "string" && window.dispatchEvent(new CustomEvent("ha-dialog-ui-theme-change", { detail: P.theme })), typeof P.active_remout == "boolean" && window.dispatchEvent(new CustomEvent(mi, { detail: P.active_remout }))), p("Данные загружены.");
        });
      } }),
      u && /* @__PURE__ */ o.jsx("p", { role: "status", children: _("Обработка файла...") }),
      /* @__PURE__ */ o.jsx(Qe, { error: h ? f : null, busy: u, retry: w.current ? () => {
        w.current && k(w.current, !0);
      } : void 0 }),
      !h && f && /* @__PURE__ */ o.jsx("p", { role: "status", children: _(f) })
    ] })
  ] });
};
function fw() {
  const r = nt(), [a, i] = v.useState(null), [u, d] = v.useState([]), f = Rt(), p = Rt(), h = v.useCallback(() => f.run(async () => {
    i(await r.getSettings());
  }, { retryable: !0 }), [r, f.run]), y = v.useCallback(() => p.run(async () => {
    d(await r.getLocalMusicOptions());
  }, { retryable: !0 }), [r, p.run]);
  v.useEffect(() => {
    h();
  }, [h]), v.useEffect(() => {
    y();
  }, [y]);
  const w = async (g) => {
    await r.saveData(g, "save_settings"), typeof g.api_commands_enabled == "boolean" && window.dispatchEvent(new CustomEvent($l, { detail: g.api_commands_enabled })), typeof g.active_remout == "boolean" && window.dispatchEvent(new CustomEvent(mi, { detail: g.active_remout }));
  };
  return { loading: f.busy, settings: a, musicOptions: u, saveSettings: w, settingsFeedback: f, musicFeedback: p };
}
const pw = "_form_1ijxr_1", hw = "_field_1ijxr_7", mw = "_input_1ijxr_13", vw = "_label_1ijxr_29", gw = "_help_1ijxr_35", yw = "_toggleHelp_1ijxr_40", ht = {
  form: pw,
  field: hw,
  input: mw,
  label: vw,
  help: gw,
  toggleHelp: yw
}, _w = ({ data: r, onChange: a }) => {
  const i = (u, d) => {
    a({
      ...r,
      [u]: d
    });
  };
  return /* @__PURE__ */ o.jsxs("div", { className: ht.form, children: [
    /* @__PURE__ */ o.jsx(He, { label: _("Base URL"), value: r.base_url ?? "", placeholder: _("http://192.168.31.83:9379"), onChange: (u) => i("base_url", u.target.value) }),
    /* @__PURE__ */ o.jsx(He, { label: _("Token"), value: r.token ?? "", placeholder: _("Bearer ..."), onChange: (u) => i("token", u.target.value) })
  ] });
}, xw = ({ data: r, musicOptions: a, musicUnavailable: i, onChange: u, callMusic: d, onCallMusicChange: f }) => {
  const p = (y, w) => {
    u({
      ...r,
      [y]: w
    });
  }, h = (y, w, g = "", x = "Стандартная") => {
    const k = a.some((j) => j.value === g);
    return /* @__PURE__ */ o.jsxs("label", { className: ht.field, children: [
      /* @__PURE__ */ o.jsx("span", { className: ht.label, children: _(y) }),
      /* @__PURE__ */ o.jsxs(
        "select",
        {
          className: ht.input,
          value: g,
          onChange: (j) => w(j.target.value),
          children: [
            /* @__PURE__ */ o.jsx("option", { value: "", children: _(x) }),
            g && !k && /* @__PURE__ */ o.jsx("option", { value: g, children: g }),
            a.map((j) => /* @__PURE__ */ o.jsx("option", { value: j.value, children: j.label }, j.value))
          ]
        }
      )
    ] });
  };
  return /* @__PURE__ */ o.jsxs("div", { className: ht.form, children: [
    h(
      "Global music timer",
      (y) => p("global_music_timer", y),
      r.global_music_timer
    ),
    h(
      "Global music alarm",
      (y) => p("global_music_alarm", y),
      r.global_music_alarm
    ),
    f && h("Мелодия звонка", f, d, "Стандартная"),
    a.length === 0 && !i && /* @__PURE__ */ o.jsx("span", { className: ht.help, children: _("Музыка на сервере не найдена.") })
  ] });
}, ww = ({ data: r, onChange: a }) => {
  const i = eu(), u = (d, f) => {
    a({
      ...r,
      [d]: f
    });
  };
  return /* @__PURE__ */ o.jsxs("div", { className: ht.form, children: [
    /* @__PURE__ */ o.jsxs("label", { className: ht.field, children: [
      /* @__PURE__ */ o.jsx("span", { className: ht.label, children: _("Язык интерфейса") }),
      /* @__PURE__ */ o.jsxs(
        "select",
        {
          className: ht.input,
          value: i,
          onChange: (d) => Gy(d.target.value === "en" ? "en" : "ru"),
          children: [
            /* @__PURE__ */ o.jsx("option", { value: "ru", children: "Русский" }),
            /* @__PURE__ */ o.jsx("option", { value: "en", children: "English" })
          ]
        }
      )
    ] }),
    /* @__PURE__ */ o.jsx(
      He,
      {
        label: _("Client ID"),
        value: r.client_id ?? "",
        onChange: (d) => u("client_id", d.target.value),
        placeholder: _("Уникальный идентификатор клиента")
      }
    ),
    /* @__PURE__ */ o.jsxs("label", { className: ht.field, children: [
      /* @__PURE__ */ o.jsx("span", { className: ht.label, children: _("Theme") }),
      /* @__PURE__ */ o.jsxs("select", { className: ht.input, value: r.theme ?? "dark", onChange: (d) => u("theme", d.target.value), children: [
        /* @__PURE__ */ o.jsx("option", { value: "dark", children: _("dark") }),
        /* @__PURE__ */ o.jsx("option", { value: "light", children: _("light") })
      ] })
    ] }),
    /* @__PURE__ */ o.jsx(Vn, { label: _("Is admin"), checked: !!r.is_admin, onChange: (d) => u("is_admin", d.target.checked) })
  ] });
}, kw = ({ data: r, onChange: a }) => {
  const i = (u, d) => a({ ...r, [u]: d });
  return /* @__PURE__ */ o.jsxs("div", { className: ht.form, children: [
    /* @__PURE__ */ o.jsxs("div", { className: ht.toggleHelp, children: [
      /* @__PURE__ */ o.jsx(Vn, { label: _("Подключаться к удалённому серверу"), checked: !!r.active_remout, onChange: (u) => i("active_remout", u.target.checked) }),
      /* @__PURE__ */ o.jsx(Ur, { label: "Подключаться к удалённому серверу", description: "Интеграция подключается к существующему удалённому серверу и получает от него команды по SSE. Для их выполнения используются «Действия удалённых команд», а локальные разделы команд скрываются. Этот переключатель не запускает новый сервер." })
    ] }),
    /* @__PURE__ */ o.jsxs("div", { className: ht.toggleHelp, children: [
      /* @__PURE__ */ o.jsx(Vn, { label: _("Включить API"), checked: !!r.api_commands_enabled, onChange: (u) => i("api_commands_enabled", u.target.checked) }),
      /* @__PURE__ */ o.jsx(Ur, { label: "Включить API", description: "Позволяет внешним приложениям отправлять команды в интеграцию и обмениваться с ней событиями по HTTP API. Адреса: /api/dialog/commands, /api/dialog/events, /api/dialog/event. Для доступа нужен токен API команд из поля ниже." })
    ] }),
    r.api_commands_enabled && /* @__PURE__ */ o.jsx(
      He,
      {
        label: _("API Commands Token"),
        value: r.api_commands_token ?? "",
        onChange: (u) => i("api_commands_token", u.target.value),
        placeholder: _("Ключ доступа для API endpoints"),
        type: "password"
      }
    )
  ] });
}, yi = {
  base_url: "",
  token: ""
}, Sw = {
  global_music_timer: "",
  global_music_alarm: ""
}, Tf = {
  remout: yi,
  timer_alarm: Sw,
  theme: "dark",
  is_admin: !1,
  active_remout: !1,
  client_id: "",
  api_commands_enabled: !1,
  api_commands_token: ""
}, jw = (r) => ({
  base_url: (r == null ? void 0 : r.base_url) ?? "",
  token: (r == null ? void 0 : r.token) ?? ""
}), Cw = (r) => ({
  global_music_timer: (r == null ? void 0 : r.global_music_timer) ?? "",
  global_music_alarm: (r == null ? void 0 : r.global_music_alarm) ?? ""
}), Ew = (r) => ({
  call_music: (r == null ? void 0 : r.call_music) ?? "",
  remout: jw(r == null ? void 0 : r.remout),
  timer_alarm: Cw(r == null ? void 0 : r.timer_alarm),
  theme: (r == null ? void 0 : r.theme) ?? "dark",
  is_admin: !!(r != null && r.is_admin),
  active_remout: !!(r != null && r.active_remout),
  client_id: (r == null ? void 0 : r.client_id) ?? "",
  api_commands_enabled: !!(r != null && r.api_commands_enabled),
  api_commands_token: (r == null ? void 0 : r.api_commands_token) ?? ""
}), bf = (r, a) => {
  const i = {};
  return Object.keys(r).forEach((u) => {
    const d = u;
    r[d] !== a[d] && (i[d] = r[d]);
  }), i;
}, Af = (r, a) => {
  const i = {}, u = bf(r.timer_alarm, a.timer_alarm);
  if (Object.keys(u).length > 0 && (i.timer_alarm = u), r.call_music !== a.call_music && (i.call_music = r.call_music), r.theme !== a.theme && (i.theme = r.theme), r.is_admin !== a.is_admin && (i.is_admin = r.is_admin), r.active_remout !== a.active_remout && (i.active_remout = r.active_remout), r.client_id !== a.client_id && (i.client_id = r.client_id), r.api_commands_enabled !== a.api_commands_enabled && (i.api_commands_enabled = r.api_commands_enabled), r.api_commands_token !== a.api_commands_token && (i.api_commands_token = r.api_commands_token), r.active_remout) {
    const d = bf(r.remout ?? yi, a.remout ?? yi);
    Object.keys(d).length > 0 && (i.remout = d);
  }
  return i;
}, Nw = () => {
  const r = Ye(), [a, i] = v.useState(Tf), u = Rt(), [d, f] = v.useState(Tf), { settings: p, musicOptions: h, saveSettings: y, settingsFeedback: w, musicFeedback: g } = fw();
  v.useEffect(() => {
    if (!p) return;
    const b = Ew(p);
    i(b), f(b), window.dispatchEvent(new CustomEvent("ha-dialog-ui-theme-change", { detail: b.theme }));
  }, [p]);
  const x = async (b) => {
    i((C) => ({ ...C, ...b })), b.theme && b.theme !== a.theme && (window.dispatchEvent(new CustomEvent("ha-dialog-ui-theme-change", { detail: b.theme })), await u.run(async () => {
      await y({ theme: b.theme }), f((C) => ({ ...C, theme: b.theme }));
    }, { exclusive: !0 }));
  }, k = () => u.run(async () => {
    await y(Af(a, d)), f(a);
  }, { exclusive: !0 }), j = !!p && Object.keys(Af(a, d)).length > 0;
  return /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
    /* @__PURE__ */ o.jsx(
      lt,
      {
        title: _("Настройки")
      }
    ),
    /* @__PURE__ */ o.jsxs("div", { className: K.page, children: [
      /* @__PURE__ */ o.jsx(at, {}),
      r ? /* @__PURE__ */ o.jsx(o.Fragment, {}) : /* @__PURE__ */ o.jsx("h1", { children: _("Настройки") }),
      /* @__PURE__ */ o.jsxs("div", { className: K.settingsSections, children: [
        /* @__PURE__ */ o.jsx(Qe, { ...w }),
        /* @__PURE__ */ o.jsx(Qe, { ...g }),
        /* @__PURE__ */ o.jsx(Qe, { ...u }),
        /* @__PURE__ */ o.jsxs("section", { className: K.settingsSection, "aria-label": _("Общие"), children: [
          /* @__PURE__ */ o.jsx("h2", { children: _("Общие") }),
          /* @__PURE__ */ o.jsx(
            ww,
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
        /* @__PURE__ */ o.jsxs("section", { className: K.settingsSection, "aria-label": _("Подключения"), children: [
          /* @__PURE__ */ o.jsx("h2", { children: _("Подключения") }),
          /* @__PURE__ */ o.jsxs("div", { className: K.connectionFields, children: [
            /* @__PURE__ */ o.jsx(kw, { data: a, onChange: x }),
            a.active_remout && /* @__PURE__ */ o.jsx(
              _w,
              {
                data: a.remout ?? yi,
                onChange: (b) => i((C) => ({ ...C, remout: b }))
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ o.jsxs("section", { className: K.settingsSection, "aria-label": _("Timer / Alarm"), children: [
          /* @__PURE__ */ o.jsx("h2", { children: _("Timer / Alarm") }),
          /* @__PURE__ */ o.jsx(
            xw,
            {
              data: a.timer_alarm,
              callMusic: a.call_music,
              onCallMusicChange: (b) => i((C) => ({ ...C, call_music: b })),
              musicOptions: h,
              musicUnavailable: g.busy || !!g.error,
              onChange: (b) => i({ ...a, timer_alarm: b })
            }
          )
        ] })
      ] }),
      j && (r ? /* @__PURE__ */ o.jsx("div", { className: K.settingsMobileActions, children: /* @__PURE__ */ o.jsx(
        ne,
        {
          variant: "primary",
          disabled: u.busy || w.busy || !p,
          onClick: k,
          children: _("Сохранить")
        }
      ) }) : /* @__PURE__ */ o.jsx("div", { className: K.settingsActions, children: /* @__PURE__ */ o.jsx(ne, { disabled: u.busy || w.busy || !p, onClick: k, children: _("Сохранить") }) }))
    ] })
  ] });
}, Ll = (r) => {
  if (typeof r == "number") return Math.max(0, r);
  const a = r.split(":").map(Number);
  return a.some((i) => !Number.isFinite(i) || i < 0) ? 0 : a.length === 3 ? a[0] * 3600 + a[1] * 60 + a[2] : a.length === 2 ? a[0] * 60 + a[1] : a.length === 1 ? a[0] : 0;
}, Tp = (r) => typeof r == "string" || typeof r == "number" ? Ll(r) : r ? typeof r.total_seconds == "number" ? Math.max(0, r.total_seconds) : Ll(r.count_timer || "") : 0, Tw = (r, a = "on", i = Date.now()) => {
  if (typeof r == "string" || typeof r == "number") return Ll(r);
  if (!r) return 0;
  if (a !== "paused" && r.date_end && /(?:Z|[+-]\d{2}:?\d{2})$/i.test(r.date_end)) {
    const u = Date.parse(r.date_end);
    if (Number.isFinite(u)) return Math.max(0, Math.ceil((u - i) / 1e3));
  }
  return typeof r.remaining_seconds == "number" ? Math.max(0, r.remaining_seconds) : Tp(r);
}, Ol = (r) => r !== null && typeof r == "object", pr = (r) => {
  const a = Ol(r) && "result" in r ? r.result : r;
  return Ol(a) && "data" in a ? a.data : a;
}, Rf = (r) => {
  const a = Math.max(1, Number(r) || 1), i = Math.floor(a / 3600), u = Math.floor(a % 3600 / 60), d = a % 60;
  return `${String(i).padStart(2, "0")}:${String(u).padStart(2, "0")}:${String(d).padStart(2, "0")}`;
}, Pf = (r) => {
  const a = pr(r);
  return Array.isArray(a) ? a : Ol(a) && Array.isArray(a.data) ? a.data : [];
};
function bp() {
  const r = nt(), a = Rt(), [i, u] = v.useState([]), [d, f] = v.useState([]), [p, h] = v.useState([]), [y, w] = v.useState(!0), g = v.useMemo(() => r.getDevices(), [r]), x = v.useCallback(async () => {
    const z = await r.getPage("get_timer_requests_short", 1, 100), O = await Promise.all(
      Pf(z).map(async (Y) => {
        var X;
        const W = await r.getRecord(Y.uuid, "get_timer_request");
        return ((X = pr(W)) == null ? void 0 : X.data) ?? pr(W);
      })
    );
    u(O.filter((Y) => !!Y && Y.action_type === "create_timer"));
  }, [r]), k = v.useCallback(async () => {
    const z = await r.getPage("get_alarm_requests_short", 1, 100), O = await Promise.all(
      Pf(z).map(async (Y) => {
        var X;
        const W = await r.getRecord(Y.uuid, "get_alarm_request");
        return ((X = pr(W)) == null ? void 0 : X.data) ?? pr(W);
      })
    );
    f(O.filter((Y) => !!Y && Y.action_type !== "delete_alarm"));
  }, [r]), j = v.useCallback(async () => {
    const z = await r.getAllRecords("get_alarm_time_widgets_short"), O = await Promise.all(
      z.map(async (Y) => {
        var X;
        const W = await r.getRecord(Y.uuid, "get_alarm_time_widget");
        return ((X = pr(W)) == null ? void 0 : X.data) ?? pr(W);
      })
    );
    h(O.filter(Boolean));
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
  const C = async (z, O) => await a.run(async () => {
    await z();
  }, { exclusive: !0 }) ? (await a.run(O, { retryable: !0 }), !0) : !1, E = async (z, O, Y = 0.3) => {
    const W = {
      count_timer: Rf(O)
    };
    return C(() => r.saveData({ name: `Таймер ${Rf(O)}`, action_type: "create_timer", device_id: z, timer_time: W, volume_start: Y }, "save_timer_request"), x);
  }, P = async (z) => C(() => r.deleteRecord(z.uuid, "delete_timer_request"), x), F = async (z, O, Y = 0.3, W = "once", X = []) => C(() => r.saveData({ name: `Будильник ${O}`, action_type: "create_alarm", device_id: z, status: "on", time: O, volume_start: Y, repeat_type: W, repeat_days: X }, "save_alarm_request"), async () => {
    await Promise.all([k(), j()]);
  }), $ = async (z, O) => C(() => r.updateRecord(z.uuid, "update_alarm_request", { ...z, action_type: "edit_alarm", ...O }), async () => {
    await Promise.all([k(), j()]);
  }), A = async (z) => C(() => r.deleteRecord(z.uuid, "delete_alarm_request"), k);
  return {
    feedback: { ...a, retry: a.error ? a.retry ?? (() => {
      b();
    }) : void 0 },
    alarmTimeWidgets: p,
    refreshAlarmTimes: () => a.run(j, { retryable: !0 }),
    alarms: d,
    createAlarm: F,
    createTimer: E,
    deleteAlarm: A,
    devices: g,
    loading: y,
    stopTimer: P,
    timers: i,
    toTimerSeconds: Tw,
    updateAlarm: $
  };
}
const bw = "_grid_w5y3x_31", Aw = "_card_w5y3x_38", Rw = "_empty_w5y3x_38", Pw = "_cardHeader_w5y3x_47", $w = "_cardTitle_w5y3x_54", Mw = "_meta_w5y3x_59", Iw = "_form_w5y3x_73", Dw = "_field_w5y3x_79", Lw = "_label_w5y3x_85", Ow = "_quickTabs_w5y3x_101", zw = "_quickTab_w5y3x_101", Hw = "_activeQuickTab_w5y3x_117", Fw = "_cardLead_w5y3x_135", Ww = "_cardIcon_w5y3x_143", Bw = "_cardButton_w5y3x_148", Uw = "_wheelPicker_w5y3x_160", Vw = "_wheelColumn_w5y3x_173", qw = "_wheelSelect_w5y3x_180", Qw = "_footerActions_w5y3x_202", Kw = "_saveButton_w5y3x_208", Yw = "_alarmTimeFields_w5y3x_237", he = {
  grid: bw,
  card: Aw,
  empty: Rw,
  cardHeader: Pw,
  cardTitle: $w,
  meta: Mw,
  form: Iw,
  field: Dw,
  label: Lw,
  quickTabs: Ow,
  quickTab: zw,
  activeQuickTab: Hw,
  cardLead: Fw,
  cardIcon: Ww,
  cardButton: Bw,
  wheelPicker: Uw,
  wheelColumn: Vw,
  wheelSelect: qw,
  footerActions: Qw,
  saveButton: Kw,
  alarmTimeFields: Yw
}, Jw = [5, 10, 15, 30, 45, 60], $f = (r) => {
  const a = Math.max(0, r), i = Math.floor(a / 3600), u = Math.floor(a % 3600 / 60), d = a % 60;
  return [i, u, d].map((f) => String(f).padStart(2, "0")).join(":");
}, Gw = (r, a, i) => Math.max(1, r * 3600 + a * 60 + i), Xw = (r) => ({
  hours: Math.floor(r / 3600),
  minutes: Math.floor(r % 3600 / 60),
  seconds: r % 60
}), Zw = () => {
  const r = Ye(), { feedback: a, createTimer: i, devices: u, loading: d, stopTimer: f, timers: p, toTimerSeconds: h } = bp(), [y, w] = v.useState(!1), [g, x] = v.useState(""), [k, j] = v.useState({ hours: 0, minutes: 5, seconds: 0 }), [b, C] = v.useState({});
  v.useEffect(() => {
    C(Object.fromEntries(p.map((A) => [A.uuid, h(A.timer_time, A.status)])));
  }, [p, h]), v.useEffect(() => {
    const A = window.setInterval(() => {
      C((z) => Object.fromEntries(Object.entries(z).map(([O, Y]) => {
        var W;
        return [O, ((W = p.find((X) => X.uuid === O)) == null ? void 0 : W.status) === "paused" ? Y : Math.max(0, Y - 1)];
      })));
    }, 1e3);
    return () => window.clearInterval(A);
  }, [p]);
  const E = v.useMemo(() => new Map(u.map((A) => [A.id, A.name])), [u]), P = Gw(k.hours, k.minutes, k.seconds), F = async () => {
    g && await i(g, P, 0.3) && w(!1);
  }, $ = (A) => j(Xw(A * 60));
  return /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
    /* @__PURE__ */ o.jsx(lt, { title: _("Таймеры") }),
    /* @__PURE__ */ o.jsxs("div", { className: K.page, children: [
      !y && /* @__PURE__ */ o.jsx(Qe, { ...a }),
      /* @__PURE__ */ o.jsx(at, {}),
      /* @__PURE__ */ o.jsxs("div", { className: K.header, children: [
        /* @__PURE__ */ o.jsx("div", { className: K.heading, children: r ? /* @__PURE__ */ o.jsx(o.Fragment, {}) : /* @__PURE__ */ o.jsx("h1", { className: K.title, children: _("Таймеры") }) }),
        /* @__PURE__ */ o.jsx("div", { className: K.actions, children: r ? /* @__PURE__ */ o.jsx(Qn, { startVisible: !0, children: /* @__PURE__ */ o.jsx(
          ne,
          {
            variant: "primary",
            onClick: () => w(!0),
            children: _("Добавить сценарий")
          }
        ) }) : /* @__PURE__ */ o.jsx(
          ne,
          {
            variant: "primary",
            onClick: () => w(!0),
            children: _("🞢 Создать")
          }
        ) })
      ] }),
      /* @__PURE__ */ o.jsx(Wt, { loading: d, itemCount: p.length, placeholderCount: 4, children: /* @__PURE__ */ o.jsx("div", { className: he.grid, children: p.length ? p.map((A) => {
        const z = h(A.timer_time, A.status), O = Tp(A.timer_time);
        return /* @__PURE__ */ o.jsx("div", { className: he.card, children: /* @__PURE__ */ o.jsxs("div", { className: he.cardHeader, children: [
          /* @__PURE__ */ o.jsxs("div", { className: he.cardLead, children: [
            /* @__PURE__ */ o.jsx(Gl, { className: he.cardIcon, size: 26 }),
            /* @__PURE__ */ o.jsxs("div", { children: [
              /* @__PURE__ */ o.jsx("h2", { className: he.cardTitle, children: $f(b[A.uuid] ?? z) }),
              /* @__PURE__ */ o.jsxs("div", { className: he.meta, children: [
                _("Заведен на"),
                " ",
                $f(O),
                " • ",
                E.get(A.device_id) || A.device_id
              ] })
            ] })
          ] }),
          /* @__PURE__ */ o.jsx(ne, { variant: "remove", onClick: () => f(A), children: _("Удалить") })
        ] }) }, A.uuid);
      }) : !d && !a.error && /* @__PURE__ */ o.jsx("div", { className: he.empty, children: _("Нет запущенных таймеров.") }) }) }),
      /* @__PURE__ */ o.jsx($t, { feedback: a, open: y, onClose: () => w(!1), title: _("Создать таймер"), footer: /* @__PURE__ */ o.jsx("div", { className: he.footerActions, children: /* @__PURE__ */ o.jsx(ne, { className: he.saveButton, onClick: F, disabled: !g, children: _("Создать") }) }), children: /* @__PURE__ */ o.jsxs("div", { className: he.form, children: [
        /* @__PURE__ */ o.jsx("div", { className: he.wheelPicker, "aria-label": _("Длительность таймера"), children: ["hours", "minutes", "seconds"].map((A) => /* @__PURE__ */ o.jsxs("label", { className: he.wheelColumn, children: [
          /* @__PURE__ */ o.jsx("span", { className: he.label, children: _(A === "hours" ? "Часы" : A === "minutes" ? "Минуты" : "Секунды") }),
          /* @__PURE__ */ o.jsx(
            "input",
            {
              className: he.wheelSelect,
              type: "number",
              min: 0,
              max: A === "hours" ? 23 : 59,
              inputMode: "numeric",
              value: k[A],
              onChange: (z) => {
                const O = Math.max(0, Math.min(A === "hours" ? 23 : 59, Math.trunc(Number(z.target.value) || 0)));
                j((Y) => ({ ...Y, [A]: O }));
              }
            }
          )
        ] }, A)) }),
        /* @__PURE__ */ o.jsxs("div", { className: he.field, children: [
          /* @__PURE__ */ o.jsx("span", { className: he.label, children: _("Быстрое создание") }),
          /* @__PURE__ */ o.jsx("div", { className: he.quickTabs, children: Jw.map((A) => /* @__PURE__ */ o.jsxs("button", { type: "button", className: `${he.quickTab} ${P === A * 60 ? he.activeQuickTab : ""}`, onClick: () => $(A), children: [
            A,
            " ",
            _("мин")
          ] }, A)) })
        ] }),
        /* @__PURE__ */ o.jsx(
          Un,
          {
            label: _("Устройство воспроизведения"),
            placeholder: _("Выберите устройство"),
            value: g,
            options: u.map((A) => ({ value: A.id, label: A.name })),
            onSelect: x
          }
        )
      ] }) })
    ] })
  ] });
};
let ek = 0;
function Ap() {
  var r;
  if ((r = globalThis.crypto) != null && r.getRandomValues) {
    const a = new Uint8Array(16);
    return globalThis.crypto.getRandomValues(a), `monitor-${Array.from(a, (i) => i.toString(16).padStart(2, "0")).join("")}`;
  }
  return `monitor-${Date.now().toString(36)}-${(++ek).toString(36)}`;
}
class Rp {
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
  async listen(a, i, u) {
    return this.listenWith((d) => a.monitorAudio(i, d), u);
  }
  async listenWith(a, i) {
    const u = await a((d) => {
      const f = this.context;
      if (this.closed || !f) return;
      if (d.type === "status") {
        d.connected || this.clear(), i(!!d.connected);
        return;
      }
      if (d.type !== "audio" || d.rate !== 16e3 || !d.pcm) return;
      const p = Uint8Array.from(atob(d.pcm), (x) => x.charCodeAt(0)), h = new DataView(p.buffer), y = f.createBuffer(1, p.length / 2, d.rate), w = y.getChannelData(0);
      for (let x = 0; x < w.length; x++)
        w[x] = h.getInt16(x * 2, !0) / 32768;
      this.nextTime > f.currentTime + 0.3 && this.clear(), this.nextTime = Math.max(this.nextTime, f.currentTime + 0.06);
      const g = f.createBufferSource();
      g.buffer = y, g.connect(f.destination), this.sources.add(g), g.onended = () => this.sources.delete(g), g.start(this.nextTime), this.nextTime += y.duration;
    });
    this.closed ? Promise.resolve(u()).catch(() => {
    }) : this.unsubscribe = u;
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
function Pp() {
  var r;
  return !!(globalThis.isSecureContext && ((r = navigator.mediaDevices) != null && r.getUserMedia));
}
function tk(r) {
  const a = r && typeof r == "object" && "name" in r ? String(r.name) : "";
  return a === "NotAllowedError" || a === "SecurityError" ? "Разрешите доступ к микрофону в настройках браузера и откройте HA по HTTPS." : a === "NotSupportedError" ? "Этот браузер не поддерживает звонки. Откройте HA в актуальном Chrome или Safari." : a === "NotFoundError" ? "Микрофон на этом устройстве не найден." : a === "NotReadableError" ? "Микрофон занят другим приложением или недоступен." : "Не удалось подключить микрофон или звук звонка. Проверьте разрешения и подключение.";
}
class nk {
  constructor(a, i, u) {
    be(this, "output", new Rp());
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
    this.api = a, this.viewId = i, this.onFailure = u;
  }
  setSending(a) {
    this.sending = a;
  }
  setMicrophoneMuted(a) {
    var i;
    this.muted = a;
    for (const u of ((i = this.stream) == null ? void 0 : i.getAudioTracks()) ?? []) u.enabled = !a;
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
    return typeof ((a = this.context) == null ? void 0 : a.setSinkId) == "function" && (typeof ((i = navigator.mediaDevices) == null ? void 0 : i.selectAudioOutput) == "function" || this.outputs.some((u) => u.id !== "default"));
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
    if (!Pp()) throw new DOMException("Secure microphone unavailable", "SecurityError");
    if (this.context = new AudioContext(), !this.context.audioWorklet || !globalThis.AudioWorkletNode) throw new DOMException("AudioWorklet unavailable", "NotSupportedError");
    if (await this.output.prepare(this.context), this.closed) throw new DOMException("Call closed", "AbortError");
    const a = await navigator.mediaDevices.getUserMedia({ audio: { channelCount: 1, echoCancellation: !0, noiseSuppression: !0, autoGainControl: !0 }, video: !1 });
    if (this.closed)
      throw a.getTracks().forEach((i) => i.stop()), new DOMException("Call closed", "AbortError");
    if (this.stream = a, this.setMicrophoneMuted(this.muted), navigator.mediaDevices.enumerateDevices) {
      const i = await navigator.mediaDevices.enumerateDevices().catch(() => []);
      this.outputs = i.filter((u) => u.kind === "audiooutput" && u.deviceId).map((u) => ({ id: u.deviceId, label: u.label || u.deviceId }));
    }
    if (this.closed) throw new DOMException("Call closed", "AbortError");
    if (await this.context.resume(), this.closed) throw new DOMException("Call closed", "AbortError");
    for (const i of a.getAudioTracks()) i.onended = () => this.fail("Микрофон отключён. Звонок завершён.");
    if (await this.context.audioWorklet.addModule("/ha_dialog_ui_static/call-capture-worklet.js"), this.closed) throw new DOMException("Call closed", "AbortError");
    this.input = this.context.createMediaStreamSource(a), this.worklet = new AudioWorkletNode(this.context, "ha-call-capture", { numberOfInputs: 1, numberOfOutputs: 1, outputChannelCount: [1] }), this.worklet.port.onmessage = (i) => {
      var f;
      if ((f = this.worklet) == null || f.port.postMessage("ack"), this.closed || !this.sending || this.inFlight >= 3) return;
      const u = new Uint8Array(i.data);
      if (u.length !== 1280) return;
      this.muted && u.fill(0), this.inFlight++;
      let d = "";
      for (const p of u) d += String.fromCharCode(p);
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
    var a, i, u;
    this.closed = !0, this.sending = !1, this.output.close(), this.worklet && (this.worklet.port.onmessage = null, this.worklet.disconnect()), (a = this.input) == null || a.disconnect();
    for (const d of ((i = this.stream) == null ? void 0 : i.getTracks()) ?? [])
      d.onended = null, d.stop();
    this.stream = void 0, (u = this.context) == null || u.close().catch(() => {
    }), this.context = void 0;
  }
}
const rk = "_page_375kk_1", sk = "_title_375kk_6", ok = "_hint_375kk_13", ik = "_grid_375kk_18", ak = "_device_375kk_24", lk = "_active_375kk_53", uk = "_phoneStage_375kk_104", ck = "_avatar_375kk_115", dk = "_phoneStatus_375kk_132", fk = "_duration_375kk_139", pk = "_phoneFooter_375kk_150", hk = "_callControls_375kk_158", mk = "_control_375kk_164", vk = "_roundControl_375kk_177", gk = "_hangup_375kk_177", yk = "_controlSelected_375kk_187", _k = "_routeHint_375kk_205", xk = "_dial_375kk_228", $e = {
  page: rk,
  title: sk,
  hint: ok,
  grid: ik,
  device: ak,
  active: lk,
  phoneStage: uk,
  avatar: ck,
  phoneStatus: dk,
  duration: fk,
  phoneFooter: pk,
  callControls: hk,
  control: mk,
  roundControl: vk,
  hangup: gk,
  controlSelected: yk,
  routeHint: _k,
  dial: xk
};
function wk() {
  var Xt, kn;
  const r = nt(), a = Ye(), [i, u] = v.useState(), [d, f] = v.useState(""), [p, h] = v.useState(""), [y, w] = v.useState(!1), [g, x] = v.useState(!1), [k, j] = v.useState(!1), [b, C] = v.useState([]), [E, P] = v.useState(!1), [F, $] = v.useState("default"), [A, z] = v.useState(!1), [O, Y] = v.useState(!1), [W, X] = v.useState(0), me = v.useRef(), pe = v.useRef(""), ge = v.useRef(), ye = v.useRef(!1), we = Pp();
  v.useEffect(() => {
    let Z = !0;
    ye.current = !0, x(!1);
    const _e = Ap();
    pe.current = _e;
    let Ae;
    return r.callsWatch(_e, (Le) => {
      Z && u(Le);
    }).then((Le) => {
      Z ? (Ae = Le, x(!0)) : Promise.resolve(Le()).catch(() => {
      });
    }).catch((Le) => {
      Z && h(jt(Le));
    }), () => {
      var Le;
      Z = !1, ye.current = !1, (Le = ge.current) == null || Le.close(), ge.current = void 0, Ae && Promise.resolve(Ae()).catch(() => {
      });
    };
  }, [r]);
  const B = i == null ? void 0 : i.calls.find((Z) => Z.id === i.owned_call_id);
  v.useEffect(() => {
    var Z, _e;
    (Z = ge.current) == null || Z.setSending((B == null ? void 0 : B.state) === "connecting" || (B == null ? void 0 : B.state) === "active"), i && !i.owned_call_id && !y && ((_e = ge.current) == null || _e.close(), ge.current = void 0);
  }, [i, B == null ? void 0 : B.state, y]), v.useEffect(() => {
    var Ae;
    if ((B == null ? void 0 : B.state) !== "active") {
      me.current = void 0, X(0);
      return;
    }
    ((Ae = me.current) == null ? void 0 : Ae.id) !== B.id && (me.current = { id: B.id, time: Date.now() });
    const Z = () => X(Math.max(0, Math.floor((Date.now() - me.current.time) / 1e3)));
    Z();
    const _e = setInterval(Z, 1e3);
    return () => clearInterval(_e);
  }, [B == null ? void 0 : B.id, B == null ? void 0 : B.state]);
  const le = () => {
    var _e;
    if (!xe) return;
    const Z = !k;
    (_e = ge.current) == null || _e.setMicrophoneMuted(Z), j(Z);
  }, fe = async (Z) => {
    const _e = ge.current;
    if (!(!_e || O || !xe)) {
      Y(!0), h("");
      try {
        await _e.selectOutput(Z), ye.current && ge.current === _e && ($(Z), z(!1));
      } catch (Ae) {
        ye.current && !(Ae instanceof DOMException && Ae.name === "AbortError") && h(_("Не удалось переключить звук. Используйте системный выбор аудиоустройства."));
      } finally {
        ye.current && Y(!1);
      }
    }
  }, M = async () => {
    if (!xe) return;
    const Z = ge.current;
    await (Z == null ? void 0 : Z.resumePlayback()), await (Z == null ? void 0 : Z.refreshOutputDevices()), !(!ye.current || !Z || ge.current !== Z) && (C(Z.getOutputDevices()), P(Z.canSelectOutput()), z((_e) => !_e));
  }, J = async (Z) => {
    const _e = ge.current;
    if (Z !== "choose") {
      await fe(Z);
      return;
    }
    if (!(!_e || O)) {
      Y(!0);
      try {
        const Ae = await _e.promptOutput();
        ye.current && ge.current === _e && (C((Le) => [...Le.filter((Et) => Et.id !== Ae.id), Ae]), $(Ae.id), z(!1));
      } catch (Ae) {
        Ae instanceof DOMException && ["AbortError", "NotAllowedError"].includes(Ae.name) || h(_("Не удалось переключить звук. Используйте системный выбор аудиоустройства."));
      } finally {
        ye.current && Y(!1);
      }
    }
  }, U = i == null ? void 0 : i.devices.find((Z) => Z.id === d), N = (Z) => {
    var _e;
    return ((_e = i == null ? void 0 : i.incoming) == null ? void 0 : _e.some((Ae) => Ae.source_device_id === Z)) || (i == null ? void 0 : i.calls.some((Ae) => Ae.source_device_id === Z || Ae.target_device_id === Z));
  }, H = (Xt = i == null ? void 0 : i.incoming) == null ? void 0 : Xt.find((Z) => Z.source_device_id === d), ie = i == null ? void 0 : i.calls.find((Z) => Z.source_device_id === d || Z.target_device_id === d), oe = !!(B && B.target_device_id === d), xe = oe && (B == null ? void 0 : B.state) === "active" && !y, ke = (Z) => {
    var _e;
    return ((_e = i == null ? void 0 : i.devices.find((Ae) => Ae.id === Z)) == null ? void 0 : _e.name) ?? _("Колонка");
  }, Ne = _((ie == null ? void 0 : ie.state) === "active" ? "Разговор" : (ie == null ? void 0 : ie.state) === "connecting" ? "Соединяем…" : ie ? "Ожидание ответа" : H ? "Входящий звонок" : "Готово к звонку"), Ce = async () => {
    var Z;
    if (!y) {
      w(!0), h("");
      try {
        await r.browserCallEnd(pe.current), (Z = ge.current) == null || Z.close(), ge.current = void 0;
      } catch (_e) {
        ye.current && h(jt(_e));
      } finally {
        ye.current && w(!1);
      }
    }
  }, Re = async () => {
    var Ae;
    if (y || !d) return;
    w(!0), h(""), j(!1), $("default"), z(!1), C([]), P(!1);
    const Z = pe.current, _e = new nk(r, Z, (Le) => {
      ye.current && h(_(Le)), r.browserCallEnd(Z).catch(() => {
      });
    });
    (Ae = ge.current) == null || Ae.close(), ge.current = _e;
    try {
      if (await _e.prepare(), ye.current && (C(_e.getOutputDevices()), P(_e.canSelectOutput())), !ye.current) {
        _e.close();
        return;
      }
      const Le = H ? await r.browserCallAccept(Z, H.id) : await r.browserCallStart(Z, d);
      if (!ye.current) {
        _e.close();
        return;
      }
      if (await _e.listen(), !ye.current) {
        _e.close();
        return;
      }
      u((Et) => {
        var Jr;
        return Et && { ...Et, owned_call_id: Le.call_id, calls: Et.calls.some((Kn) => Kn.id === Le.call_id) ? Et.calls : [...Et.calls, { id: Le.call_id, source_device_id: null, source_type: "browser", target_device_id: d, state: H ? "active" : "ringing" }], incoming: (Jr = Et.incoming) == null ? void 0 : Jr.filter((Kn) => Kn.id !== (H == null ? void 0 : H.id)) };
      });
    } catch (Le) {
      _e.close(), ye.current && h(Le instanceof DOMException ? _(tk(Le)) : jt(Le)), await r.browserCallEnd(Z).catch(() => {
      });
    } finally {
      ye.current && w(!1);
    }
  };
  return /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
    a && /* @__PURE__ */ o.jsx(lt, { title: "Звонки" }),
    /* @__PURE__ */ o.jsxs("div", { className: K.page, children: [
      /* @__PURE__ */ o.jsx(at, {}),
      /* @__PURE__ */ o.jsxs("section", { className: $e.page, children: [
        /* @__PURE__ */ o.jsx("h1", { className: $e.title, children: _("Звонки") }),
        p && !d && /* @__PURE__ */ o.jsx("p", { role: "alert", children: p }),
        !i && !p && /* @__PURE__ */ o.jsx(Wt, { loading: !0, itemCount: 0, placeholderCount: 3, grid: !0 }),
        i && !i.available && /* @__PURE__ */ o.jsx("p", { role: "alert", children: _("Сервер звонков недоступен. Проверьте журнал HA и TCP-порт 8125.") }),
        (i == null ? void 0 : i.available) && i.devices.length === 0 && /* @__PURE__ */ o.jsx("p", { children: _("Нет колонок с поддержкой звонков. Подключите модуль calls.yaml и обновите прошивку.") }),
        /* @__PURE__ */ o.jsx("div", { className: $e.grid, children: i == null ? void 0 : i.devices.map((Z) => {
          var _e;
          return /* @__PURE__ */ o.jsxs(
            "button",
            {
              className: `${$e.device} ${N(Z.id) ? $e.active : ""}`,
              onClick: () => {
                f(Z.id), h("");
              },
              children: [
                N(Z.id) ? /* @__PURE__ */ o.jsx(mf, { size: 26 }) : /* @__PURE__ */ o.jsx(hi, { size: 26 }),
                /* @__PURE__ */ o.jsx("strong", { children: Z.name }),
                /* @__PURE__ */ o.jsx("span", { children: _(Z.online ? (_e = i == null ? void 0 : i.incoming) != null && _e.some((Ae) => Ae.source_device_id === Z.id) ? "Входящий звонок" : N(Z.id) ? "Участвует в звонке" : "Готова к звонку" : "Нет подключения") })
              ]
            },
            Z.id
          );
        }) }),
        /* @__PURE__ */ o.jsxs($t, { open: !!d, onClose: () => f(""), title: _("Звонки"), dialogLabel: ke(d), footer: /* @__PURE__ */ o.jsxs("div", { className: $e.phoneFooter, children: [
          (!H || oe) && /* @__PURE__ */ o.jsxs("div", { className: $e.callControls, children: [
            /* @__PURE__ */ o.jsxs("div", { className: $e.control, children: [
              /* @__PURE__ */ o.jsx(ne, { variant: "secondary", className: `${$e.roundControl} ${oe && k ? $e.controlSelected : ""}`, "aria-label": _(oe && k ? "Включить микрофон" : "Выключить микрофон"), "aria-pressed": oe && k, disabled: !xe, onClick: le, children: oe && k ? /* @__PURE__ */ o.jsx(sy, { size: 25 }) : /* @__PURE__ */ o.jsx(iy, { size: 25 }) }),
              /* @__PURE__ */ o.jsx("span", { children: _(oe && k ? "Микрофон выкл." : "Микрофон") })
            ] }),
            /* @__PURE__ */ o.jsxs("div", { className: $e.control, children: [
              /* @__PURE__ */ o.jsx(ne, { variant: "secondary", className: `${$e.roundControl} ${oe && F !== "default" ? $e.controlSelected : ""}`, "aria-label": _("Аудиовыход"), "aria-pressed": oe && F !== "default", disabled: !xe || O, onClick: () => void M(), children: /* @__PURE__ */ o.jsx(Sy, { size: 25 }) }),
              /* @__PURE__ */ o.jsx("span", { children: _("Аудиовыход") })
            ] })
          ] }),
          xe && A && /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
            /* @__PURE__ */ o.jsx(wn, { label: "Устройство вывода", value: F, disabled: O || !E, onChange: (Z) => void J(Z.target.value), options: [{ value: "default", label: _("По умолчанию (системный выход)") }, ...b.filter((Z) => Z.id !== "default").map((Z) => ({ value: Z.id, label: Z.label })), ...(kn = ge.current) != null && kn.canPromptOutput() ? [{ value: "choose", label: _("Выбрать другое устройство…") }] : []] }),
            !E && /* @__PURE__ */ o.jsx("p", { className: $e.routeHint, children: _("Этот браузер не позволяет выбирать аудиовыход. Переключите динамик или наушники в системном меню телефона.") })
          ] }),
          /* @__PURE__ */ o.jsxs("div", { className: $e.callControls, children: [
            H && !oe && /* @__PURE__ */ o.jsxs("div", { className: $e.control, children: [
              /* @__PURE__ */ o.jsx(ne, { className: $e.hangup, "aria-label": _("Отклонить"), disabled: y, onClick: () => void r.browserCallDecline(pe.current, H.id).catch((Z) => h(jt(Z))), children: /* @__PURE__ */ o.jsx(vf, { size: 30 }) }),
              /* @__PURE__ */ o.jsx("span", { children: _("Отклонить") })
            ] }),
            /* @__PURE__ */ o.jsxs("div", { className: $e.control, children: [
              oe ? /* @__PURE__ */ o.jsx(ne, { className: $e.hangup, disabled: y, "aria-label": _("Положить трубку"), onClick: () => void Ce(), children: /* @__PURE__ */ o.jsx(vf, { size: 30 }) }) : /* @__PURE__ */ o.jsx(ne, { className: $e.dial, "aria-label": _(ie ? "Занято" : H ? "Ответить" : "Позвонить"), disabled: y || !g || !we || !(i != null && i.available) || !(U != null && U.online) || !!B || !!ie, onClick: () => void Re(), children: /* @__PURE__ */ o.jsx(hi, { size: 30 }) }),
              /* @__PURE__ */ o.jsx("span", { children: _(oe ? "Завершить" : ie ? "Занято" : H ? "Ответить" : "Позвонить") })
            ] })
          ] })
        ] }), children: [
          /* @__PURE__ */ o.jsxs("div", { className: $e.phoneStage, children: [
            /* @__PURE__ */ o.jsx("div", { className: $e.avatar, children: /* @__PURE__ */ o.jsx(mf, { size: 46, strokeWidth: 1.4 }) }),
            /* @__PURE__ */ o.jsx("h2", { children: ke(d) }),
            /* @__PURE__ */ o.jsxs("div", { className: $e.phoneStatus, children: [
              /* @__PURE__ */ o.jsx("span", { role: "status", "aria-live": "polite", children: y && !oe ? _("Подключаем микрофон…") : Ne }),
              /* @__PURE__ */ o.jsx(Ur, { label: "Звонки", description: "Вы звоните с микрофона этого телефона или компьютера. Закрытие окна сохраняет звонок; выход из раздела или закрытие страницы завершает звонок с этого устройства. Звонки между колонками запускаются сценариями HA." })
            ] }),
            oe && (B == null ? void 0 : B.state) === "active" && /* @__PURE__ */ o.jsxs("time", { className: $e.duration, "aria-label": _("Длительность звонка"), children: [
              String(Math.floor(W / 60)).padStart(2, "0"),
              ":",
              String(W % 60).padStart(2, "0")
            ] }),
            oe && k && /* @__PURE__ */ o.jsx("p", { className: $e.hint, children: _("Ваш микрофон выключен") }),
            !we && /* @__PURE__ */ o.jsx("p", { role: "alert", children: _("Для звонка разрешите микрофон и откройте Home Assistant по HTTPS.") })
          ] }),
          p && /* @__PURE__ */ o.jsx("p", { role: "alert", children: p }),
          ie && !oe && /* @__PURE__ */ o.jsx("p", { className: $e.hint, children: _("Колонка уже участвует в другом звонке.") }),
          B && !oe && /* @__PURE__ */ o.jsx("p", { className: $e.hint, children: _("Сначала завершите текущий звонок.") })
        ] })
      ] })
    ] })
  ] });
}
const kk = "_page_10u8g_1", Sk = "_heading_10u8g_7", jk = "_grid_10u8g_27", Ck = "_device_10u8g_33", Ek = "_deviceLive_10u8g_64", Nk = "_playback_10u8g_72", Tk = "_playbackSelect_10u8g_89", bk = "_statusRow_10u8g_113", Ak = "_status_10u8g_113", Rk = "_live_10u8g_128", Pk = "_hint_10u8g_132", $k = "_footer_10u8g_138", Mk = "_empty_10u8g_149", Ik = "_error_10u8g_156", ot = {
  page: kk,
  heading: Sk,
  grid: jk,
  device: Ck,
  deviceLive: Ek,
  playback: Nk,
  playbackSelect: Tk,
  statusRow: bk,
  status: Ak,
  live: Rk,
  hint: Pk,
  footer: $k,
  empty: Mk,
  error: Ik
};
function Dk() {
  const r = nt(), a = Ye(), [i, u] = v.useState(), [d, f] = v.useState(""), [p, h] = v.useState(null), [y, w] = v.useState("browser"), [g, x] = v.useState(!1), [k, j] = v.useState(!1), b = v.useRef(""), C = v.useRef(!1), E = v.useRef(), [P, F] = v.useState(0);
  v.useEffect(() => {
    C.current = !0;
    let M = !0, J;
    const U = Ap();
    return b.current = U, u(void 0), f(""), r.monitorWatch(U, (N) => {
      M && u(N);
    }).then((N) => {
      M ? J = N : Promise.resolve(N()).catch(() => {
      });
    }).catch((N) => {
      M && f(
        jt(
          N,
          "Не удалось открыть радионяню. Проверьте подключение к HA."
        )
      );
    }), () => {
      var N;
      M = !1, C.current = !1, (N = E.current) == null || N.close(), E.current = void 0, J && Promise.resolve(J()).catch(() => {
      });
    };
  }, [r, P]), v.useEffect(() => {
    var M;
    i && !i.owned_source_id && !g && ((M = E.current) == null || M.close(), E.current = void 0, j(!1));
  }, [i, g]);
  const $ = i == null ? void 0 : i.devices.find((M) => M.id === p), A = (i == null ? void 0 : i.devices.filter((M) => M.source)) ?? [], z = i == null ? void 0 : i.sessions.find(
    (M) => M.source_device_id === p
  ), O = !!($ != null && $.transmitting || ($ == null ? void 0 : $.source_state) === "on" || z), Y = k && ($ == null ? void 0 : $.transmitting) && (i == null ? void 0 : i.owned_source_id) === p, W = !!z || Y, X = (M) => {
    const J = i == null ? void 0 : i.sessions.find(
      (U) => U.source_device_id === M.id
    );
    w((J == null ? void 0 : J.listener_device_id) ?? "browser"), h(M.id), f("");
  }, me = () => h(null), pe = async () => {
    var J;
    if (!$ || g) return;
    x(!0), f(""), j(!1), (J = E.current) == null || J.close(), E.current = void 0;
    let M;
    try {
      y === "browser" && (M = new Rp(), E.current = M, await M.prepare());
      const U = await r.monitorStart(
        b.current,
        $.id,
        y === "browser" ? void 0 : y
      );
      if (!C.current || !U.started) {
        M == null || M.close();
        return;
      }
      M && await M.listen(r, $.node_id, (N) => {
        C.current && j(N);
      }), C.current && (j(!0), u(
        (N) => N && {
          ...N,
          owned_source_id: $.id,
          devices: N.devices.map(
            (H) => H.id === $.id ? { ...H, transmitting: !0, source_state: "on" } : H
          ),
          sessions: y === "browser" ? N.sessions : [
            ...N.sessions.filter(
              (H) => H.source_device_id !== $.id
            ),
            {
              source_device_id: $.id,
              listener_device_id: y
            }
          ]
        }
      ));
    } catch (U) {
      if (M == null || M.close(), C.current) {
        f(
          jt(
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
      C.current && x(!1);
    }
  }, ge = async (M) => {
    var J;
    x(!0), f("");
    try {
      await r.monitorStop(b.current, M), (i == null ? void 0 : i.owned_source_id) === M && ((J = E.current) == null || J.close(), E.current = void 0, j(!1)), u(
        (U) => U && {
          ...U,
          owned_source_id: U.owned_source_id === M ? null : U.owned_source_id,
          devices: U.devices.map(
            (N) => N.id === M ? { ...N, transmitting: !1, source_state: "off" } : N
          ),
          sessions: U.sessions.filter(
            (N) => N.source_device_id !== M && N.listener_device_id !== M
          )
        }
      );
    } catch (U) {
      C.current && f(jt(U));
    } finally {
      C.current && x(!1);
    }
  }, ye = (i == null ? void 0 : i.devices.filter(
    (M) => M.listener && M.id !== p
  )) ?? [], we = _(
    g ? "Подключаемся…" : O ? Y || z ? "Прослушивание активно" : "Источник включён" : "Готово к запуску"
  ), B = /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
    /* @__PURE__ */ o.jsxs("div", { className: ot.statusRow, children: [
      /* @__PURE__ */ o.jsxs(
        "div",
        {
          role: "status",
          "aria-live": "polite",
          className: `${ot.status} ${O ? ot.live : ""}`,
          children: [
            /* @__PURE__ */ o.jsx(Og, { size: 12, fill: "currentColor" }),
            we
          ]
        }
      ),
      /* @__PURE__ */ o.jsx(Ur, { label: we, description: _(
        O && (i == null ? void 0 : i.owned_source_id) !== p ? "Сеанс запущен вне этой вкладки. Закрытие окна или вкладки его не остановит. Для остановки нажмите кнопку ниже. Пока прослушивание активно, сменить устройство воспроизведения нельзя." : "Закрытие этого окна не останавливает прослушивание. Для остановки нажмите кнопку ниже или выйдите из вкладки «Радионяня». Пока прослушивание активно, сменить устройство воспроизведения нельзя."
      ) })
    ] }),
    /* @__PURE__ */ o.jsx("p", { className: ot.hint, children: _("Выберите устройство") }),
    /* @__PURE__ */ o.jsxs("div", { className: ot.playback, children: [
      y === "browser" ? /* @__PURE__ */ o.jsx(Yg, { size: 22 }) : /* @__PURE__ */ o.jsx(Gl, { size: 22 }),
      /* @__PURE__ */ o.jsx(
        wn,
        {
          "aria-label": _("Выберите устройство"),
          className: ot.playbackSelect,
          value: y,
          onChange: (M) => w(M.target.value),
          disabled: g || W,
          options: [
            { value: "browser", label: _("На этом устройстве") },
            ...ye.map((M) => ({
              value: M.id,
              label: M.online ? M.name : `${M.name} — ${_("Нет подключения")}`,
              disabled: !M.online
            }))
          ]
        }
      )
    ] })
  ] }), le = /* @__PURE__ */ o.jsx("div", { className: ot.footer, children: /* @__PURE__ */ o.jsx(
    ne,
    {
      onClick: O ? () => void ge(p) : () => void pe(),
      disabled: g || !O && !($ != null && $.online) || !O && y !== "browser" && !(i != null && i.devices.some(
        (M) => M.id === y && M.online
      )),
      children: _(
        g ? "Подключаемся…" : O ? y === "browser" && !Y && !z ? "Начать слушать" : "Остановить" : "Старт"
      )
    }
  ) }), fe = O && !W ? /* @__PURE__ */ o.jsxs("div", { className: ot.footer, children: [
    /* @__PURE__ */ o.jsx(ne, { disabled: g || !($ != null && $.online), onClick: () => void pe(), children: _(y === "browser" ? "Начать слушать" : "Старт") }),
    /* @__PURE__ */ o.jsx(
      ne,
      {
        variant: "ghost",
        disabled: g,
        onClick: () => void ge(p),
        children: _("Остановить источник")
      }
    )
  ] }) : le;
  return /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
    a && /* @__PURE__ */ o.jsx(lt, { title: "Радионяня" }),
    /* @__PURE__ */ o.jsxs("div", { className: K.page, children: [
      /* @__PURE__ */ o.jsx(at, {}),
      /* @__PURE__ */ o.jsxs("section", { className: ot.page, children: [
        /* @__PURE__ */ o.jsxs("header", { className: ot.heading, children: [
          /* @__PURE__ */ o.jsx(Jl, { size: 30 }),
          /* @__PURE__ */ o.jsx("div", { children: /* @__PURE__ */ o.jsx("h1", { children: _("Радионяня") }) })
        ] }),
        d && !p && /* @__PURE__ */ o.jsxs("div", { role: "alert", className: ot.error, children: [
          d,
          /* @__PURE__ */ o.jsx(ne, { onClick: () => F((M) => M + 1), children: _("Повторить") })
        ] }),
        !i && !d && /* @__PURE__ */ o.jsx(Wt, { loading: !0, itemCount: 0, placeholderCount: 3, grid: !0 }),
        i && !i.available && /* @__PURE__ */ o.jsx("div", { className: ot.empty, children: _(
          "Приёмник радионяни недоступен. Проверьте журнал HA и доступность TCP-порта 8124."
        ) }),
        (i == null ? void 0 : i.available) && A.length === 0 && /* @__PURE__ */ o.jsx("div", { className: ot.empty, children: _(
          "Нет колонок с поддержкой радионяни. Установите совместимую прошивку и подключите колонку к интеграции ESPHome."
        ) }),
        /* @__PURE__ */ o.jsx("div", { className: ot.grid, children: A.map((M) => {
          const J = i == null ? void 0 : i.sessions.find(
            (N) => N.source_device_id === M.id
          ), U = i == null ? void 0 : i.devices.find(
            (N) => N.id === (J == null ? void 0 : J.listener_device_id)
          );
          return /* @__PURE__ */ o.jsxs(
            "button",
            {
              className: `${ot.device} ${M.transmitting ? ot.deviceLive : ""}`,
              onClick: () => X(M),
              children: [
                /* @__PURE__ */ o.jsx(dy, { size: 28 }),
                /* @__PURE__ */ o.jsx("strong", { children: M.name }),
                /* @__PURE__ */ o.jsx("span", { children: _(
                  M.online ? M.transmitting ? "Источник включён" : M.source_state === "on" ? "Переподключение…" : "Готова к прослушиванию" : "Нет подключения"
                ) }),
                U && /* @__PURE__ */ o.jsxs("small", { children: [
                  _("Воспроизведение:"),
                  " ",
                  U.name
                ] })
              ]
            },
            M.id
          );
        }) }),
        /* @__PURE__ */ o.jsxs(
          $t,
          {
            open: p !== null,
            onClose: me,
            title: ($ == null ? void 0 : $.name) ?? "Радионяня",
            dialogLabel: ($ == null ? void 0 : $.name) ?? _("Радионяня"),
            footer: fe,
            children: [
              d && /* @__PURE__ */ o.jsx("p", { role: "alert", className: ot.error, children: d }),
              B
            ]
          }
        )
      ] })
    ] })
  ] });
}
const Lk = ({ command: r, open: a, onClose: i, onToggleStatus: u, onEdit: d, onDelete: f }) => {
  if (!r) return null;
  const p = r.status === "on";
  return /* @__PURE__ */ o.jsx(ou, { open: a, title: r.title, uuid: r.uuid, onClose: i, actions: [
    { label: p ? "Выключить" : "Включить", onClick: () => u(r, p ? "off" : "on") },
    { label: "Изменить", variant: "secondary", onClick: () => d(r) },
    { label: "Удалить", variant: "remove", onClick: () => f(r) }
  ] });
}, Ok = (r) => {
  const a = /^(\d{1,2}):(\d{2})$/.exec(r.trim());
  return !a || Number(a[1]) > 23 || Number(a[2]) > 59 ? null : `${a[1].padStart(2, "0")}:${a[2]}`;
}, zl = [
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
  var u;
  return (u = zl.find((d) => d.key === i)) != null && u.label ? _(zl.find((d) => d.key === i).label) : i;
}).join(", ") : _("кастом") : _("однократно"), Fk = () => {
  const r = Ye(), { feedback: a, alarmTimeWidgets: i, refreshAlarmTimes: u, alarms: d, createAlarm: f, deleteAlarm: p, devices: h, loading: y, updateAlarm: w } = bp(), [g, x] = v.useState(!1), [k, j] = v.useState(null), [b, C] = v.useState(null), [E, P] = v.useState(""), [F, $] = v.useState("08:00"), [A, z] = v.useState("once"), [O, Y] = v.useState([]), W = v.useMemo(() => Array.from(new Set([...i.flatMap((B) => B.time || []), ...d.map((B) => B.time)].map(Ok).filter((B) => B !== null))), [i, d]), X = v.useMemo(() => new Map(h.map((B) => [B.id, B.name])), [h]), me = d.find((B) => B.uuid === k) || null, pe = async () => {
    if (!E || !F) return;
    const B = d.find((le) => le.uuid === b);
    if (B) {
      if (!await w(B, { device_id: E, time: F, volume_start: 0.3, repeat_type: A, repeat_days: O })) return;
    } else if (!await f(E, F, 0.3, A, O)) return;
    C(null), x(!1);
  }, ge = () => {
    C(null), x(!0), u();
  }, ye = (B) => {
    $(B.time), P(B.device_id), z(B.repeat_type ?? "once"), Y(B.repeat_days ?? []), u(), C(B.uuid), j(null), x(!0);
  }, we = (B) => Y((le) => le.includes(B) ? le.filter((fe) => fe !== B) : [...le, B]);
  return /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
    /* @__PURE__ */ o.jsx(lt, { title: _("Будильники") }),
    /* @__PURE__ */ o.jsxs("div", { className: K.page, children: [
      !g && /* @__PURE__ */ o.jsx(Qe, { ...a }),
      /* @__PURE__ */ o.jsx(at, {}),
      /* @__PURE__ */ o.jsxs("div", { className: K.header, children: [
        /* @__PURE__ */ o.jsx("div", { className: K.heading, children: r ? /* @__PURE__ */ o.jsx(o.Fragment, {}) : /* @__PURE__ */ o.jsx("h1", { className: K.title, children: _("Будильники") }) }),
        /* @__PURE__ */ o.jsx("div", { className: K.actions, children: r ? /* @__PURE__ */ o.jsx(Qn, { startVisible: !0, children: /* @__PURE__ */ o.jsx(
          ne,
          {
            variant: "primary",
            onClick: ge,
            children: _("Добавить сценарий")
          }
        ) }) : /* @__PURE__ */ o.jsx(
          ne,
          {
            variant: "primary",
            onClick: ge,
            children: _("🞢 Создать")
          }
        ) })
      ] }),
      /* @__PURE__ */ o.jsx(Wt, { loading: y, itemCount: d.length, placeholderCount: 4, children: /* @__PURE__ */ o.jsx("div", { className: he.grid, children: d.length ? d.map((B) => /* @__PURE__ */ o.jsx("button", { className: `${he.card} ${he.cardButton}`, type: "button", onClick: () => j(B.uuid), children: /* @__PURE__ */ o.jsxs("div", { className: he.cardHeader, children: [
        /* @__PURE__ */ o.jsxs("div", { className: he.cardLead, children: [
          /* @__PURE__ */ o.jsx(Gl, { className: he.cardIcon, size: 26 }),
          /* @__PURE__ */ o.jsxs("div", { children: [
            /* @__PURE__ */ o.jsx("h2", { className: he.cardTitle, children: B.time }),
            /* @__PURE__ */ o.jsxs("div", { className: he.meta, children: [
              Hk(B.repeat_type, B.repeat_days),
              " • ",
              X.get(B.device_id) || B.device_id
            ] })
          ] })
        ] }),
        /* @__PURE__ */ o.jsx(
          "div",
          {
            onClick: (le) => le.stopPropagation(),
            onMouseDown: (le) => le.stopPropagation(),
            children: /* @__PURE__ */ o.jsx(Vn, { label: _(""), checked: B.status !== "off", onClick: (le) => le.stopPropagation(), onChange: (le) => w(B, { status: le.currentTarget.checked ? "on" : "off" }) })
          }
        )
      ] }) }, B.uuid)) : !y && !a.error && /* @__PURE__ */ o.jsx("div", { className: he.empty, children: _("Нет будильников.") }) }) }),
      /* @__PURE__ */ o.jsx($t, { feedback: a, open: g, onClose: () => {
        x(!1), C(null);
      }, title: b ? "Редактировать будильник" : "Создать будильник", footer: /* @__PURE__ */ o.jsx("div", { className: he.footerActions, children: /* @__PURE__ */ o.jsx(ne, { className: he.saveButton, onClick: pe, disabled: !E || !F, children: _("Сохранить") }) }), children: /* @__PURE__ */ o.jsxs("div", { className: he.form, children: [
        /* @__PURE__ */ o.jsxs("div", { className: he.alarmTimeFields, role: "group", "aria-label": _("Время будильника"), children: [
          /* @__PURE__ */ o.jsx(
            Un,
            {
              label: _("Часы"),
              value: F.split(":")[0],
              options: Array.from({ length: 24 }, (B, le) => ({ value: String(le).padStart(2, "0"), label: String(le).padStart(2, "0") })),
              onSelect: (B) => $(`${B}:${F.split(":")[1]}`)
            }
          ),
          /* @__PURE__ */ o.jsx(
            Un,
            {
              label: _("Минуты"),
              value: F.split(":")[1],
              options: Array.from({ length: 60 }, (B, le) => ({ value: String(le).padStart(2, "0"), label: String(le).padStart(2, "0") })),
              onSelect: (B) => $(`${F.split(":")[0]}:${B}`)
            }
          )
        ] }),
        /* @__PURE__ */ o.jsxs("div", { className: he.field, children: [
          /* @__PURE__ */ o.jsx("span", { className: he.label, children: _("Ранее заданное время") }),
          /* @__PURE__ */ o.jsx("div", { className: he.quickTabs, children: W.length ? W.map((B) => /* @__PURE__ */ o.jsx("button", { type: "button", className: `${he.quickTab} ${F === B ? he.activeQuickTab : ""}`, onClick: () => $(B), children: B }, B)) : /* @__PURE__ */ o.jsx("span", { className: he.meta, children: _("Нет быстрых значений.") }) })
        ] }),
        /* @__PURE__ */ o.jsx(
          Un,
          {
            label: _("Повторы"),
            value: A,
            options: zk.map((B) => ({ ...B, label: _(B.label) })),
            onSelect: (B) => z(B)
          }
        ),
        A === "custom" && /* @__PURE__ */ o.jsx("div", { className: he.quickTabs, role: "group", "aria-label": _("Дни повтора"), children: zl.map((B) => /* @__PURE__ */ o.jsx(
          "button",
          {
            type: "button",
            "aria-pressed": O.includes(B.key),
            className: `${he.quickTab} ${O.includes(B.key) ? he.activeQuickTab : ""}`,
            onClick: () => we(B.key),
            children: _(B.label)
          },
          B.key
        )) }),
        /* @__PURE__ */ o.jsx(
          Un,
          {
            label: _("Устройство воспроизведения"),
            placeholder: _("Выберите устройство"),
            value: E,
            options: h.map((B) => ({ value: B.id, label: B.name })),
            onSelect: P
          }
        )
      ] }) }),
      /* @__PURE__ */ o.jsx(
        Lk,
        {
          open: !!me,
          onClose: () => j(null),
          command: me,
          onEdit: (B) => ye(B),
          onToggleStatus: (B, le) => w(B, { status: le }),
          onDelete: (B) => {
            p(B), j(null);
          }
        }
      )
    ] })
  ] });
}, Wk = "_form_1wh9a_1", Bk = "_mobilePage_1wh9a_8", Uk = "_text_1wh9a_12", Vk = "_grid_1wh9a_17", qk = "_card_1wh9a_24", Qk = "_lead_1wh9a_29", Kk = "_icon_1wh9a_34", Yk = "_meta_1wh9a_40", on = {
  form: Wk,
  mobilePage: Bk,
  text: Uk,
  grid: Vk,
  card: qk,
  lead: Qk,
  icon: Kk,
  meta: Yk
}, Jk = { pending: "Ожидает", delivering: "Озвучивается", completed: "Передано на колонку", failed: "Не удалось озвучить" };
function Gk() {
  const r = nt(), a = Rt(), i = Ye(), u = eu(), [d, f] = v.useState({ reminders: [], devices: [] }), [p, h] = v.useState(!0), [y, w] = v.useState(!1), [g, x] = v.useState(""), [k, j] = v.useState(""), [b, C] = v.useState("delay"), [E, P] = v.useState("30"), [F, $] = v.useState(""), A = v.useCallback(async () => {
    f(await r.getReminders());
  }, [r]);
  v.useEffect(() => {
    let W = !0;
    a.run(async () => {
      const me = await r.getReminders();
      W && f(me);
    }, { retryable: !0 }).finally(() => {
      W && h(!1);
    });
    const X = window.setInterval(() => {
      document.hidden || r.getReminders().then((me) => {
        W && f(me);
      }).catch(() => {
      });
    }, 1e4);
    return () => {
      W = !1, window.clearInterval(X);
    };
  }, [r, a.run]);
  const z = async () => {
    await a.run(async () => {
      await r.createReminder({
        text: g.trim(),
        device_id: k,
        ...b === "delay" ? { delay_seconds: Number(E) * 60 } : { at: new Date(F).toISOString() }
      }), w(!1), x(""), await A();
    }, { exclusive: !0 });
  }, O = b === "delay" ? Number(E) > 0 && Number(E) <= 5256e3 : !!F && new Date(F).getTime() > Date.now(), Y = /* @__PURE__ */ o.jsx(ne, { onClick: () => {
    a.clearError(), w(!0);
  }, children: _("Добавить напоминание") });
  return /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
    /* @__PURE__ */ o.jsx(lt, { title: "Напоминания" }),
    /* @__PURE__ */ o.jsxs("div", { className: `${K.page} ${i ? on.mobilePage : ""}`, children: [
      /* @__PURE__ */ o.jsx(at, {}),
      /* @__PURE__ */ o.jsxs("div", { className: K.headerTop, children: [
        !i && /* @__PURE__ */ o.jsx("h1", { className: K.title, children: _("Напоминания") }),
        i ? !y && /* @__PURE__ */ o.jsx(Qn, { startVisible: !0, children: Y }) : Y
      ] }),
      !y && /* @__PURE__ */ o.jsx(Qe, { ...a }),
      /* @__PURE__ */ o.jsx(Wt, { loading: p, itemCount: d.reminders.length, placeholderCount: 3, children: /* @__PURE__ */ o.jsxs("div", { className: on.grid, children: [
        d.reminders.map((W) => {
          var X;
          return /* @__PURE__ */ o.jsx("article", { className: `${he.card} ${on.card}`, children: /* @__PURE__ */ o.jsxs("div", { className: he.cardHeader, children: [
            /* @__PURE__ */ o.jsxs("div", { className: `${he.cardLead} ${on.lead}`, children: [
              /* @__PURE__ */ o.jsx(Xl, { size: 22, className: on.icon }),
              /* @__PURE__ */ o.jsxs("div", { children: [
                /* @__PURE__ */ o.jsx("h2", { className: `${he.cardTitle} ${on.text}`, children: W.text }),
                /* @__PURE__ */ o.jsx("p", { className: on.meta, children: new Date(W.at).toLocaleString(u === "ru" ? "ru-RU" : "en-US") }),
                /* @__PURE__ */ o.jsxs("p", { className: on.meta, children: [
                  ((X = d.devices.find((me) => me.id === W.device_id)) == null ? void 0 : X.name) || W.device_id,
                  " · ",
                  _(Jk[W.status])
                ] }),
                W.error && /* @__PURE__ */ o.jsx("p", { role: "alert", className: on.meta, children: W.error })
              ] })
            ] }),
            /* @__PURE__ */ o.jsx(
              ne,
              {
                variant: "remove",
                disabled: a.busy || W.status === "delivering",
                "aria-label": `${_("Удалить напоминание")}: ${W.text}`,
                onClick: () => void a.run(async () => {
                  await r.deleteReminder(W.id), await A();
                }, { exclusive: !0 }),
                children: _("Удалить")
              }
            )
          ] }) }, W.id);
        }),
        !d.reminders.length && !p && !a.error && /* @__PURE__ */ o.jsx("div", { className: he.empty, children: _("Нет напоминаний.") })
      ] }) }),
      /* @__PURE__ */ o.jsx(
        $t,
        {
          open: y,
          onClose: () => {
            a.busy || w(!1);
          },
          title: _("Добавить напоминание"),
          feedback: a,
          footer: /* @__PURE__ */ o.jsx(ne, { onClick: () => void z(), disabled: a.busy || !g.trim() || !k || !O, children: _("Создать") }),
          children: /* @__PURE__ */ o.jsxs("div", { className: on.form, children: [
            /* @__PURE__ */ o.jsx(
              He,
              {
                label: _("Что напомнить"),
                value: g,
                maxLength: 2e3,
                onChange: (W) => x(W.target.value),
                placeholder: _("Напомнить насыпать еды через 30 минут")
              }
            ),
            /* @__PURE__ */ o.jsx(Un, { label: "Где напомнить", value: k, options: d.devices.map((W) => ({ label: W.name, value: W.id })), onSelect: j }),
            !d.devices.length && /* @__PURE__ */ o.jsx("p", { children: _("Нет доступных колонок. Добавьте колонку в Home Assistant.") }),
            /* @__PURE__ */ o.jsx(Un, { label: "Когда напомнить", value: b, options: [{ value: "delay", label: _("Через интервал") }, { value: "at", label: _("Дата и время") }], onSelect: C }),
            b === "delay" ? /* @__PURE__ */ o.jsx(He, { label: _("Через сколько минут"), type: "number", min: "1", max: "5256000", value: E, onChange: (W) => P(W.target.value) }) : /* @__PURE__ */ o.jsx(He, { label: _("Дата и время"), type: "datetime-local", value: F, onChange: (W) => $(W.target.value) }),
            /* @__PURE__ */ o.jsx("p", { className: he.meta, children: _("Дата и время — в часовом поясе вашего устройства.") })
          ] })
        }
      )
    ] })
  ] });
}
const Xk = () => {
  const r = tu(), a = nu(), i = qr(), { pathname: u } = Ct(), d = i ? "/scripts" : "/commands/main";
  return (u === "/commands" || u.startsWith("/commands/")) && i !== !1 ? i === null ? /* @__PURE__ */ o.jsx(Qs, {}) : /* @__PURE__ */ o.jsx(gn, { to: "/scripts", replace: !0 }) : /* @__PURE__ */ o.jsx(gp, { resetKey: u, children: /* @__PURE__ */ o.jsxs(zv, { children: [
    /* @__PURE__ */ o.jsx(qe, { path: "/commands/normalization", element: a ? /* @__PURE__ */ o.jsx(t0, {}) : /* @__PURE__ */ o.jsx(gn, { to: d, replace: !0 }) }),
    /* @__PURE__ */ o.jsx(qe, { path: "/commands/whisper", element: a ? /* @__PURE__ */ o.jsx(o0, {}) : /* @__PURE__ */ o.jsx(gn, { to: d, replace: !0 }) }),
    /* @__PURE__ */ o.jsx(qe, { path: "/logs", element: r && a ? /* @__PURE__ */ o.jsx(p0, {}) : /* @__PURE__ */ o.jsx(gn, { to: d, replace: !0 }) }),
    /* @__PURE__ */ o.jsx(qe, { path: "/downloads", element: a ? /* @__PURE__ */ o.jsx(dw, {}) : /* @__PURE__ */ o.jsx(gn, { to: d, replace: !0 }) }),
    /* @__PURE__ */ o.jsx(
      qe,
      {
        path: "/",
        element: /* @__PURE__ */ o.jsx(
          gn,
          {
            to: d,
            replace: !0
          }
        )
      }
    ),
    /* @__PURE__ */ o.jsx(
      qe,
      {
        path: "/scripts",
        element: /* @__PURE__ */ o.jsx(dx, {})
      }
    ),
    /* @__PURE__ */ o.jsx(
      qe,
      {
        path: "/commands",
        element: /* @__PURE__ */ o.jsx(
          gn,
          {
            to: "/commands/main",
            replace: !0
          }
        )
      }
    ),
    /* @__PURE__ */ o.jsx(
      qe,
      {
        path: "/commands/main",
        element: /* @__PURE__ */ o.jsx(zx, {})
      }
    ),
    /* @__PURE__ */ o.jsx(
      qe,
      {
        path: "/commands/sub",
        element: /* @__PURE__ */ o.jsx(Fx, {})
      }
    ),
    /* @__PURE__ */ o.jsx(
      qe,
      {
        path: "/commands/direct",
        element: /* @__PURE__ */ o.jsx(
          gn,
          {
            to: "/commands/direct/main",
            replace: !0
          }
        )
      }
    ),
    /* @__PURE__ */ o.jsx(
      qe,
      {
        path: "/commands/direct/main",
        element: /* @__PURE__ */ o.jsx(Ux, {})
      }
    ),
    /* @__PURE__ */ o.jsx(
      qe,
      {
        path: "/commands/direct/template",
        element: /* @__PURE__ */ o.jsx(Jx, {})
      }
    ),
    /* @__PURE__ */ o.jsx(
      qe,
      {
        path: "/commands/settings",
        element: /* @__PURE__ */ o.jsx(ew, {})
      }
    ),
    /* @__PURE__ */ o.jsx(qe, { path: "/monitor", element: /* @__PURE__ */ o.jsx(Dk, {}) }),
    /* @__PURE__ */ o.jsx(qe, { path: "/reminders", element: /* @__PURE__ */ o.jsx(Gk, {}) }),
    /* @__PURE__ */ o.jsx(qe, { path: "/calls", element: /* @__PURE__ */ o.jsx(wk, {}) }),
    /* @__PURE__ */ o.jsx(
      qe,
      {
        path: "/timer",
        element: /* @__PURE__ */ o.jsx(Zw, {})
      }
    ),
    /* @__PURE__ */ o.jsx(
      qe,
      {
        path: "/alarm",
        element: /* @__PURE__ */ o.jsx(Fk, {})
      }
    ),
    /* @__PURE__ */ o.jsx(
      qe,
      {
        path: "/settings",
        element: /* @__PURE__ */ o.jsx(Nw, {})
      }
    ),
    /* @__PURE__ */ o.jsx(
      qe,
      {
        path: "*",
        element: /* @__PURE__ */ o.jsx(
          gn,
          {
            to: d,
            replace: !0
          }
        )
      }
    )
  ] }) });
}, $p = "ha-dialog-ui-theme", bl = (r) => r === "light" ? "light" : "dark", Zk = (r) => {
  document.documentElement.dataset.theme = r, document.documentElement.style.colorScheme = r, localStorage.setItem($p, r);
}, eS = () => {
  const r = Rt(), a = eu(), i = nt(), [u, d] = v.useState(!1), [f, p] = v.useState(null), [h, y] = v.useState(() => bl(localStorage.getItem($p)));
  return v.useEffect(() => {
    Zk(h);
  }, [h]), v.useEffect(() => {
    let w = !0, g = !1, x = !1, k = !1;
    r.run(async () => {
      const E = await i.getSettings();
      w && (g || y(bl(E.theme)), k || d(!!E.api_commands_enabled), x || p(!!E.active_remout));
    }, { retryable: !0 });
    const j = (E) => {
      g = !0, y(bl(E.detail));
    }, b = (E) => {
      x = !0, p(E.detail);
    }, C = (E) => {
      k = !0, d(!!E.detail);
    };
    return window.addEventListener($l, C), window.addEventListener(mi, b), window.addEventListener("ha-dialog-ui-theme-change", j), () => {
      w = !1, window.removeEventListener($l, C), window.removeEventListener(mi, b), window.removeEventListener("ha-dialog-ui-theme-change", j);
    };
  }, [i, r.run]), /* @__PURE__ */ o.jsx(pp.Provider, { value: u, children: /* @__PURE__ */ o.jsx(mp.Provider, { value: f, children: /* @__PURE__ */ o.jsxs("div", { className: "appShell", "data-theme": h, lang: a, children: [
    /* @__PURE__ */ o.jsx(Qe, { ...r }),
    f === null ? !r.error && /* @__PURE__ */ o.jsx(Qs, {}) : /* @__PURE__ */ o.jsx(Xk, {})
  ] }) }) });
};
class tS {
  constructor(a) {
    be(this, "hass");
    this.hass = a;
  }
  getReminders() {
    return this.hass.connection.sendMessagePromise({ type: "ha_dialog_ui/reminders/get" });
  }
  createReminder(a) {
    return this.hass.connection.sendMessagePromise({ type: "ha_dialog_ui/reminders/create", ...a });
  }
  deleteReminder(a) {
    return this.hass.connection.sendMessagePromise({ type: "ha_dialog_ui/reminders/delete", reminder_id: a });
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
    const u = this.hass.connection;
    return u.subscribeMessage ? u.subscribeMessage(a, i) : Promise.reject(new Error("Подписки Home Assistant недоступны"));
  }
  monitorStart(a, i, u) {
    return this.hass.connection.sendMessagePromise({ type: "ha_dialog_ui/monitor/start", view_id: a, source_device_id: i, ...u ? { listener_device_id: u } : {} });
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
  async getPage(a, i, u, d) {
    return await this.hass.connection.sendMessagePromise({
      type: `ha_dialog_ui/${a}`,
      ...i ? { page: i } : {},
      ...u ? { page_size: u } : {},
      ...d ? { query: d } : {}
    });
  }
  async getAllRecords(a, i = 100) {
    const u = await this.getPage(a, 1, i), d = (u == null ? void 0 : u.total_pages) ?? 1, f = Array.isArray(u == null ? void 0 : u.data) ? u.data : Array.isArray(u == null ? void 0 : u.script_actions) ? u.script_actions : [];
    return d <= 1 ? f : (await Promise.all(
      Array.from(
        { length: d - 1 },
        (h, y) => this.getPage(a, y + 2, i)
      )
    )).reduce((h, y) => {
      const w = Array.isArray(y == null ? void 0 : y.data) ? y.data : Array.isArray(y == null ? void 0 : y.script_actions) ? y.script_actions : [];
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
  async updateRecord(a, i, u) {
    return this.hass.connection.sendMessagePromise({
      type: `ha_dialog_ui/${i}`,
      uuid: a,
      data: u
    });
  }
  async updateRecordStatus(a, i, u) {
    return this.hass.connection.sendMessagePromise({
      type: `ha_dialog_ui/${a}`,
      uuid: i,
      status: u
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
    ], u = /* @__PURE__ */ new Set(), d = /* @__PURE__ */ new Map(), f = [];
    let p = !1, h;
    const y = async (w) => {
      if (u.has(w)) return;
      u.add(w);
      const g = await this.hass.connection.sendMessagePromise({
        type: "media_source/browse_media",
        media_content_id: w
      }), x = Array.isArray(g == null ? void 0 : g.children) ? g.children : [];
      await Promise.all(x.map(async (k) => {
        var C;
        const j = String((k == null ? void 0 : k.media_content_id) || ""), b = String((k == null ? void 0 : k.title) || j);
        if (j) {
          if (k != null && k.can_expand) {
            try {
              await y(j);
            } catch (E) {
              f.push(E);
            }
            return;
          }
          if (a.test(b) || a.test(j) || (k == null ? void 0 : k.media_content_type) === "music" || (C = k == null ? void 0 : k.media_content_type) != null && C.startsWith("audio/")) {
            const E = "media-source://media_source/local/", P = j.startsWith(E) ? j.slice(E.length) : j;
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
        await y(w), p = !0;
      } catch (g) {
        h = g;
      }
    if (d.size === 0) {
      if (f.length > 0) throw f[0];
      if (!p) throw h;
    }
    return Array.from(d.values()).sort(
      (w, g) => w.label.localeCompare(g.label)
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
function Mp(r) {
  var a;
  return (a = r == null ? void 0 : r.connection) != null && a.sendMessagePromise ? { connection: r.connection, user: r.user, states: r.states ?? {} } : r != null && r.callWS ? { connection: { sendMessagePromise: r.callWS.bind(r) }, user: r.user, states: r.states ?? {} } : {
    connection: { sendMessagePromise: async () => {
      throw new Error("Home Assistant websocket API is not available");
    } },
    states: {}
  };
}
async function nS() {
  return Mp(window.hass);
}
function rS({
  children: r,
  hass: a
}) {
  const [i, u] = v.useState(null), [d, f] = v.useState(0), p = v.useRef(null), [h, y] = v.useState(!1), [w, g] = v.useState(!1);
  return v.useEffect(() => {
    let x = !0;
    u(null);
    async function k() {
      const j = a ? Mp(a) : await nS();
      if (!x) return;
      p.current ? p.current.setHass(j) : p.current = new tS(j);
      const b = j.user ?? await j.connection.sendMessagePromise({ type: "auth/current_user" });
      x && (y((b == null ? void 0 : b.is_admin) === !0), g(!0));
    }
    return k().catch((j) => {
      x && u(jt(j));
    }), () => {
      x = !1;
    };
  }, [a, d]), i ? /* @__PURE__ */ o.jsx("div", { className: "appShell panelRecovery", "data-theme": localStorage.getItem("ha-dialog-ui-theme") || "dark", children: /* @__PURE__ */ o.jsx(Qe, { error: i, retry: () => f((x) => x + 1) }) }) : !w || !p.current ? /* @__PURE__ */ o.jsx(Qs, { label: _("Подключение к Home Assistant..."), fullscreen: !0 }) : /* @__PURE__ */ o.jsx(yp.Provider, { value: p.current, children: /* @__PURE__ */ o.jsx(hp.Provider, { value: h, children: r }) });
}
function sS({ hass: r }) {
  return /* @__PURE__ */ o.jsx(ug, { children: /* @__PURE__ */ o.jsx(rS, { hass: r, children: /* @__PURE__ */ o.jsx(eS, {}) }) });
}
const Mf = "ha-dialog-ui-panel", If = "ha-dialog-ui-style";
class oS extends HTMLElement {
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
      var u;
      this.isConnected || ((u = this.root) == null || u.unmount(), this.root = void 0);
    });
  }
  loadStyles() {
    const i = this.ensureShadowRoot();
    if (i.getElementById(If)) return;
    const u = document.createElement("style");
    u.id = If, u.setAttribute("data-dialog-ui", "true"), u.textContent = "@charset \"UTF-8\";:host{display:block;height:100%;max-height:var(--ha-dialog-ui-available-height, 100dvh);min-height:0;overflow-y:auto;overflow-x:hidden;isolation:isolate}*,*:before,*:after{box-sizing:border-box}:root,[data-theme=dark]{color-scheme:dark;--danger: #f28b82;--switch-thumb: #c8ced8;--shadow-floating: rgba(0, 0, 0, .45);--app-background: #111111;--surface: #1c1c1c;--surface-elevated: #282828;--surface-hover: #333333;--border: #3b3b3b;--border-hover: #666666;--text: #e1e1e1;--text-secondary: #9b9b9b;--text-muted: #9ca3af;--primary: var(--primary-color, #03a9f4);--primary-strong: color-mix(in srgb, var(--primary) 85%, black);--loader-track: rgba(255, 255, 255, .16);--control-background: rgba(255, 255, 255, .04);--control-background-hover: rgba(255, 255, 255, .06);--shadow: rgba(0, 0, 0, .3)}[data-theme=light]{color-scheme:light;--danger: #b3261e;--switch-thumb: #64748b;--shadow-floating: rgba(32, 33, 36, .18);--app-background: #f4f5f7;--surface: #ffffff;--surface-elevated: #f7f8fa;--surface-hover: #eef0f3;--border: #dfe3e8;--border-hover: #bdbdbd;--text: #212121;--text-secondary: #5f6368;--text-muted: #64748b;--primary: var(--primary-color, #03a9f4);--primary-strong: color-mix(in srgb, var(--primary) 85%, black);--loader-track: rgba(3, 169, 244, .16);--control-background: #ffffff;--control-background-hover: #f1f3f5;--shadow: rgba(32, 33, 36, .08)}html{color-scheme:dark}body{margin:0;font-family:Inter,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,sans-serif;color:var(--text);background:var(--app-background);min-height:100vh;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;text-rendering:optimizeLegibility}#root{min-height:100vh}.appShell{--page-padding: 28px;--mobile-fixed-actions-height: 86px;font-family:Roboto,system-ui,-apple-system,Segoe UI,sans-serif;-webkit-font-smoothing:antialiased;min-height:100vh;color:var(--text);background:var(--app-background)}button,input,textarea,select{font:inherit}button{color:inherit}a{color:inherit;text-decoration:none}::selection{background:var(--accent-background)}:root,[data-theme]{--on-primary: #ffffff;--accent-background: color-mix(in srgb, var(--primary) 16%, transparent);--accent-border: color-mix(in srgb, var(--primary) 40%, transparent);--focus-ring: color-mix(in srgb, var(--primary) 18%, transparent);--danger-ring: color-mix(in srgb, var(--danger) 18%, transparent);--danger-background: color-mix(in srgb, var(--danger) 6%, var(--surface));--modal-backdrop: rgba(0, 0, 0, .72);--sheet-backdrop: rgba(0, 0, 0, .45)}.panelRecovery{padding:28px;min-height:var(--ha-dialog-ui-available-height, 100dvh)}.panelRenderRecovery{display:flex;flex-direction:column;height:var(--ha-dialog-ui-available-height, 100dvh);min-height:0;box-sizing:border-box}.panelRecoveryNavigation{flex-shrink:0;min-width:0}.panelRecoveryNavigation>nav{display:inline-flex;flex-wrap:wrap;gap:8px}.panelRecoveryNavigation>nav a{padding:10px 14px;border:1px solid var(--border);border-radius:12px}.panelRecoveryNavigation>nav a:hover,.panelRecoveryNavigation>nav a:focus-visible{background:var(--surface-hover)}.panelRecoveryContent{flex:1;min-height:0;display:flex;align-items:center;justify-content:center;padding:24px 0}.panelRecoveryMessage{width:100%;max-width:36rem;display:flex;flex-direction:column;align-items:center;gap:24px;text-align:center}.panelRecoveryMessage p{margin:0;font-size:clamp(16px,2vw,20px);line-height:1.6;overflow-wrap:anywhere}.panelRecoveryMessage>button{align-self:center;max-width:100%;min-height:46px}@media(max-width:768px){.panelRenderRecovery{padding:16px}.panelRecoveryContent{padding:20px 8px}}._button_180pj_1{position:relative;display:inline-flex;align-items:center;justify-content:center;gap:8px;height:46px;padding:0 18px;border:1px solid transparent;border-radius:14px;cursor:pointer;-webkit-user-select:none;user-select:none;font-size:14px;font-weight:600;white-space:nowrap;transition:background .18s ease,color .18s ease,border-color .18s ease,box-shadow .18s ease,transform .18s ease,opacity .18s ease}._button_180pj_1:hover{transform:translateY(-1px)}._button_180pj_1:active{transform:translateY(0) scale(.98)}._button_180pj_1:focus-visible{outline:none;box-shadow:0 0 0 4px var(--focus-ring)}._full_180pj_32{width:100%}._primary_180pj_37{color:var(--on-primary);background:var(--primary);border-color:var(--accent-border);box-shadow:none}._primary_180pj_37:hover{background:var(--primary-strong)}._secondary_180pj_49{color:var(--text);background:var(--control-background);border-color:var(--border)}._secondary_180pj_49:hover{background:var(--control-background-hover);border-color:var(--border-hover)}._ghost_180pj_61{color:var(--text-secondary);background:transparent}._ghost_180pj_61:hover{background:var(--control-background-hover);color:var(--text)}._button_180pj_1:disabled{opacity:.45;cursor:not-allowed;transform:none;box-shadow:none}._button_180pj_1:disabled:hover{transform:none}._remove_180pj_83{align-self:flex-end;justify-self:end;flex:0 0 auto;width:fit-content;color:var(--text);background:var(--control-background-hover);border-color:transparent}._remove_180pj_83:hover{background:var(--surface-hover)}._remove_180pj_83._full_180pj_32{width:100%}._tabs_1vwxg_1{display:inline-flex;flex-wrap:wrap;max-width:100%;align-items:center;gap:6px;padding:6px;background:var(--surface);-webkit-backdrop-filter:blur(18px);backdrop-filter:blur(18px);border:1px solid var(--border);border-radius:18px;box-shadow:0 2px 8px var(--shadow);z-index:9000}._dropdown_1vwxg_16{position:relative}._tab_1vwxg_1{position:relative;display:flex;align-items:center;justify-content:center;height:44px;min-width:118px;padding:0 20px;border-radius:12px;color:var(--text-secondary);text-decoration:none;border:0;background:transparent;cursor:pointer;font-family:inherit;font-size:14px;font-weight:500;transition:background .2s,color .2s,transform .2s}._tab_1vwxg_1:hover{color:var(--text);background:var(--control-background)}._tab_1vwxg_1:active{transform:scale(.98)}._active_1vwxg_49{color:var(--text);background:var(--primary);box-shadow:none}._tab_1vwxg_1>span{margin-left:5px}._menu_1vwxg_59{position:absolute;top:calc(100% + 12px);left:0;width:250px;padding:8px;display:flex;flex-direction:column;gap:4px;background:var(--surface-elevated);-webkit-backdrop-filter:blur(22px);backdrop-filter:blur(22px);border:1px solid var(--border);border-radius:16px;box-shadow:0 18px 40px var(--shadow-floating);z-index:5000}._chevron_1vwxg_76{margin-left:8px}._tab_1vwxg_1[aria-expanded=true] ._chevron_1vwxg_76{transform:rotate(180deg)}._tab_1vwxg_1:focus-visible,._menuItem_1vwxg_84:focus-visible{outline:2px solid var(--primary);outline-offset:2px}._menuItem_1vwxg_84{display:flex;align-items:center;height:42px;padding:0 14px;border-radius:10px;color:var(--text-secondary);text-decoration:none;transition:background .15s,color .15s,transform .15s}._menuItem_1vwxg_84:hover{background:var(--control-background-hover);color:var(--text);transform:translate(3px)}._menuItem_1vwxg_84._active_1vwxg_49{color:var(--text);background:var(--accent-background);border:1px solid var(--accent-border)}._tabs_1vwxg_1{flex-wrap:wrap;max-width:100%}._overlay_tb5vv_1{position:fixed;top:0;right:0;bottom:0;left:0;display:flex;align-items:flex-end;background:var(--sheet-backdrop);z-index:3000;animation:_fade_tb5vv_1 .15s ease}._sheet_tb5vv_11{width:100%;background:var(--surface-elevated);border-top:1px solid var(--border);border-radius:20px 20px 0 0;padding:16px;box-shadow:0 -16px 48px var(--shadow-floating);animation:_sheet_tb5vv_11 .18s ease}._handle_tb5vv_21{width:42px;height:4px;margin:0 auto 18px;border-radius:999px;background:var(--surface-elevated)}@keyframes _sheet_tb5vv_11{0%{opacity:0;transform:translateY(18px)}to{opacity:1;transform:translateY(0)}}@keyframes _fade_tb5vv_1{0%{opacity:0}to{opacity:1}}._overlay_avpnk_1>section{box-sizing:border-box;max-height:calc(100dvh - 20px);display:flex;flex-direction:column;padding:16px 16px calc(20px + env(safe-area-inset-bottom));border-radius:24px 24px 0 0}._overlay_avpnk_1>section>div:last-child{overflow-y:auto;overscroll-behavior:contain;min-height:0}._heading_avpnk_16{display:flex;align-items:center;justify-content:space-between;gap:16px;margin-bottom:16px;padding-left:8px}._heading_avpnk_16 h2{margin:0;color:var(--text);font-size:22px;font-weight:650}._close_avpnk_32{width:40px;height:40px;flex-shrink:0;display:grid;place-items:center;border:1px solid var(--border);border-radius:12px;color:var(--text);background:var(--control-background);cursor:pointer}._nav_avpnk_45{display:flex;flex-direction:column;gap:4px}._item_avpnk_51{display:flex;align-items:center;gap:12px;min-height:50px;box-sizing:border-box;padding:8px 12px;border:1px solid transparent;border-radius:14px;text-decoration:none;color:var(--text-secondary);transition:background .15s,color .15s}._item_avpnk_51:hover{background:var(--control-background-hover);color:var(--text)}._icon_avpnk_70{display:grid;place-items:center;width:32px;height:32px;flex-shrink:0}._label_avpnk_78{flex:1;min-width:0;font-size:15px;line-height:1.35;font-weight:500}._arrow_avpnk_86{opacity:.5;flex-shrink:0}._active_avpnk_91{color:var(--text);background:var(--accent-background);border-color:var(--accent-border)}._active_avpnk_91 ._icon_avpnk_70{color:var(--primary)}._item_avpnk_51:focus-visible,._close_avpnk_32:focus-visible{outline:2px solid var(--primary);outline-offset:-2px}@media(prefers-reduced-motion:reduce){._item_avpnk_51{transition:none}}._overlay_avpnk_1>section>div:first-child>div{background:var(--text-muted);opacity:.45}._heading_avpnk_16{position:sticky;top:0;z-index:1;padding-bottom:12px;margin-bottom:4px;background:var(--surface-elevated)}._item_avpnk_51{scroll-margin-block:72px 12px}._search_1h7xe_1{box-sizing:border-box;width:100%;grid-column:1/-1;display:flex;align-items:center;gap:12px;min-width:0;height:48px;padding:0 16px;border:1px solid var(--border);border-radius:12px;background:var(--control-background);color:var(--text-muted)}._search_1h7xe_1:focus-within{border-color:var(--primary);box-shadow:0 0 0 2px var(--focus-ring)}._search_1h7xe_1>svg{flex-shrink:0}._search_1h7xe_1 input{flex:1;width:100%;min-width:0;height:100%;border:0;outline:0;background:transparent;color:var(--text);font:inherit;font-size:15px}._search_1h7xe_1 input::placeholder{color:var(--text-muted)}._header_1pxju_1{position:sticky;top:0;background:var(--surface);border-bottom:1px solid var(--border);z-index:1000}._bar_1pxju_9{display:flex;align-items:center;justify-content:space-between;gap:10px;min-height:64px;padding:0 16px}._tools_1pxju_18{display:flex;flex-direction:column;gap:8px;padding:0 16px 12px}._tools_1pxju_18>div{box-sizing:border-box;width:100%;margin:0}._title_1pxju_31{margin:0;font-size:17px;font-weight:600;color:var(--text)}._menuButton_1pxju_38{width:40px;height:40px;display:flex;align-items:center;justify-content:center;border:1px solid var(--border);border-radius:12px;background:var(--control-background);color:var(--text);cursor:pointer;transition:background .18s ease,border-color .18s ease,transform .18s ease}._menuButton_1pxju_38:hover{background:var(--control-background-hover);border-color:var(--border)}._menuButton_1pxju_38:active{transform:scale(.96)}@media(min-width:769px){._header_1pxju_1{display:none}}._title_1pxju_31{min-width:0;text-align:center;overflow-wrap:anywhere}._menuButton_1pxju_38{flex-shrink:0}._active_1pxju_76{background:var(--accent-background);border-color:var(--accent-border)}._menuButton_1pxju_38:focus-visible{outline:2px solid var(--primary);outline-offset:2px}._tools_1pxju_18>[role=group]{padding:3px;gap:3px}._tools_1pxju_18>[role=group]>button{flex:1;min-height:36px;padding:8px 10px}._tools_1pxju_18>[role=group]>button:last-child{flex:1.8}._container_x92qn_1{position:relative;min-width:0;display:flex;flex-direction:column;gap:12px}._rows_x92qn_9{display:flex;flex-direction:column;gap:12px;min-width:0}._rows_x92qn_9:empty{display:none}._hidden_x92qn_20{visibility:hidden}._overlay_x92qn_24{position:absolute;top:0;right:0;bottom:0;left:0;display:flex;flex-direction:column;gap:12px}._card_x92qn_32{box-sizing:border-box;min-height:88px;padding:18px 20px;border:1px solid var(--border);border-radius:18px;background:var(--surface);display:flex;flex-direction:column;justify-content:center;gap:10px;overflow:hidden}._overlay_x92qn_24 ._card_x92qn_32{flex:1;min-height:0}._title_x92qn_51,._subtitle_x92qn_51{display:block;border-radius:4px;background:var(--control-background-hover);animation:_pulse_x92qn_1 1.4s ease-in-out infinite}._title_x92qn_51{width:45%;max-width:320px;height:18px}._subtitle_x92qn_51{width:25%;max-width:180px;height:13px}._srOnly_x92qn_70{position:absolute;width:1px;height:1px;overflow:hidden;clip-path:inset(50%);white-space:nowrap}@keyframes _pulse_x92qn_1{50%{opacity:.45}}@media(prefers-reduced-motion:reduce){._title_x92qn_51,._subtitle_x92qn_51{animation:none}}._grid_x92qn_89{display:grid;grid-template-columns:repeat(auto-fill,minmax(min(100%,250px),1fr));gap:16px}._grid_x92qn_89 ._card_x92qn_32{min-height:160px}._loader_1tvqb_1{width:100%;min-width:0;box-sizing:border-box}._fullscreen_1tvqb_7{min-height:100vh;padding:28px}@media(max-width:768px){._fullscreen_1tvqb_7{padding:16px}}._error_fi1f1_1{padding:16px;margin:12px 0;border:1px solid var(--danger);border-radius:14px;background:var(--danger-background);color:var(--text);overflow-wrap:anywhere}._error_fi1f1_1 p{margin:0;line-height:1.5}._error_fi1f1_1 button{margin-top:12px}._subtitle_c1esh_1{font-size:13px;color:var(--text-muted)}._card_c1esh_6{display:flex;align-items:center;gap:18px;width:100%;padding:18px 20px;border:1px solid var(--border);border-radius:18px;background:var(--surface);-webkit-backdrop-filter:blur(16px);backdrop-filter:blur(16px);cursor:pointer;text-align:left;transition:transform .18s ease,border-color .18s ease,background .18s ease,box-shadow .18s ease}._card_c1esh_6:hover{transform:translateY(-2px);background:var(--control-background);border-color:var(--border-hover);box-shadow:0 12px 28px var(--shadow)}._card_c1esh_6:active{transform:scale(.985)}._content_c1esh_32{flex:1;display:flex;flex-direction:column;gap:6px;min-width:0}._title_c1esh_40{font-size:16px;font-weight:600;color:var(--text)}._arrow_c1esh_46{color:var(--text-muted);flex-shrink:0;transition:color .2s,transform .2s}._card_c1esh_6:hover ._arrow_c1esh_46{color:var(--primary);transform:translate(4px)}._titleOnly_c1esh_57{min-height:72px}._titleOnly_c1esh_57 ._title_c1esh_40{overflow-wrap:anywhere}._overlay_1m3e5_1,._modal_1m3e5_1,._header_1m3e5_1,._body_1m3e5_1,._footer_1m3e5_1{box-sizing:border-box;min-width:0}._overlay_1m3e5_1{position:fixed;top:0;right:0;bottom:0;left:0;display:flex;align-items:center;justify-content:center;padding:32px;background:var(--modal-backdrop);-webkit-backdrop-filter:blur(12px);backdrop-filter:blur(12px);z-index:10000}._modal_1m3e5_1{width:100%;display:flex;flex-direction:column;max-height:calc(100vh - 64px);overflow:hidden;border-radius:24px;background:var(--surface);-webkit-backdrop-filter:blur(24px);backdrop-filter:blur(24px);border:1px solid var(--border);box-shadow:0 24px 80px var(--shadow-floating)}._sm_1m3e5_32{max-width:560px}._md_1m3e5_36{max-width:760px}._lg_1m3e5_40{max-width:960px}._xl_1m3e5_44{max-width:1200px}._header_1m3e5_1{gap:12px;display:flex;align-items:center;justify-content:space-between;min-height:76px;padding:0 32px;border-bottom:1px solid var(--border);flex-shrink:0}._title_1m3e5_59{flex:1;min-width:0;margin:0;font-size:22px;font-weight:700;color:var(--text)}._body_1m3e5_1{flex:1;overflow-y:auto;overflow-x:hidden;padding:32px;min-height:0}._footer_1m3e5_1{display:flex;flex-direction:column;z-index:200;padding:20px 32px;background:var(--surface);-webkit-backdrop-filter:blur(18px);backdrop-filter:blur(18px);border-top:1px solid var(--border)}._close_1m3e5_86{flex-shrink:0;width:40px;height:40px;padding:0!important;border-radius:12px}@media(max-width:768px){._overlay_1m3e5_1{padding:0}._modal_1m3e5_1{width:100%;max-width:100%;height:100vh;max-height:100vh;border-radius:0;border:none}._header_1m3e5_1{padding:max(env(safe-area-inset-top),16px) 16px 16px}._body_1m3e5_1{padding:20px 16px}._footer_1m3e5_1{padding:16px 16px calc(16px + env(safe-area-inset-bottom))}}._fields_1m3e5_116{display:contents;border:0;padding:0;margin:0;min-width:0}._suspended_1m3e5_124{display:none}._heading_1m3e5_128{flex:1;min-width:0;padding:16px 0}._labelRow_1w41x_1{display:flex;align-items:center;gap:6px;min-width:0}._labelRow_1w41x_1>label{min-width:0}._helpButton_1w41x_12{display:inline-flex;flex:0 0 auto;align-items:center;justify-content:center;width:24px;height:24px;padding:0;border:0;border-radius:50%;background:transparent;color:var(--text-secondary);cursor:pointer}._helpButton_1w41x_12:hover{color:var(--primary);background:var(--accent-background)}._helpButton_1w41x_12:focus-visible{outline:2px solid var(--primary);outline-offset:2px}._tooltip_1w41x_37{position:fixed;z-index:10030;width:min(340px,100vw - 24px);max-height:calc(100vh - 24px);overflow-y:auto;padding:14px 16px;border-radius:12px;border:1px solid var(--border);background:var(--surface-elevated);color:var(--text);box-shadow:0 8px 24px var(--shadow-floating);font-size:13px;font-weight:400;line-height:1.6;white-space:pre-line;overflow-wrap:anywhere}._helpOverlay_1w41x_56{z-index:10030}._sheetContent_1w41x_60{display:grid;gap:20px;padding-bottom:max(8px,env(safe-area-inset-bottom));color:var(--text)}._sheetContent_1w41x_60 h3{margin:0;font-size:18px}._sheetContent_1w41x_60 p{margin:0;max-height:60dvh;overflow-y:auto;font-size:14px;line-height:1.6;white-space:pre-line;overflow-wrap:anywhere}@media(pointer:coarse){._helpButton_1w41x_12{width:32px;height:32px}}._field_1vuim_1{display:flex;flex-direction:column;gap:10px;width:100%;min-width:0;box-sizing:border-box}._label_1vuim_10{padding-left:2px;color:var(--text-secondary);font-size:13px;font-weight:600;letter-spacing:.02em}._inputWrapper_1vuim_18{position:relative;width:100%;min-width:0;box-sizing:border-box}._input_1vuim_18{width:100%;min-width:0;box-sizing:border-box;height:50px;padding:0 16px;border-radius:14px;border:1px solid var(--border);background:var(--control-background);color:var(--text);font-size:15px;font-weight:500;transition:border-color .18s ease,background .18s ease,box-shadow .18s ease,transform .18s ease}._passwordInput_1vuim_40{padding-right:52px}._input_1vuim_18::placeholder{color:var(--text-muted)}._input_1vuim_18:hover{background:var(--control-background-hover);border-color:var(--border-hover)}._input_1vuim_18:focus{outline:none;background:var(--control-background-hover);border-color:var(--primary);box-shadow:0 0 0 4px var(--focus-ring);transform:translateY(-1px)}._input_1vuim_18:disabled{opacity:.6;cursor:not-allowed}._passwordToggle_1vuim_66{position:absolute;right:14px;top:50%;width:28px;height:28px;padding:0;display:flex;align-items:center;justify-content:center;transform:translateY(-50%);border:none;background:transparent;color:var(--text-secondary);cursor:pointer;opacity:.7;transition:opacity .18s ease,transform .18s ease}._passwordToggle_1vuim_66:hover{opacity:1;transform:translateY(-50%) scale(1.05)}._passwordToggle_1vuim_66:disabled{opacity:.4;cursor:not-allowed}._error_1vuim_95,._error_1vuim_95:hover{border-color:var(--danger)}._error_1vuim_95:focus{border-color:var(--danger);box-shadow:0 0 0 4px var(--danger-ring)}._errorText_1vuim_108{padding-left:2px;color:var(--danger);font-size:12px;font-weight:500}._field_1aipr_1{min-width:0;display:flex;flex-direction:column;gap:8px}._label_1aipr_8{color:var(--text-secondary);font-size:13px;font-weight:500}._textarea_1aipr_14{box-sizing:border-box;width:100%;min-width:0;max-width:100%;min-height:120px;padding:14px;border:1px solid var(--border);border-radius:14px;background:var(--surface);color:var(--text);font-size:14px;font-family:inherit;resize:vertical;outline:none;transition:border-color .15s ease,background .15s ease,box-shadow .15s ease}._textarea_1aipr_14::placeholder{color:var(--text-muted)}._textarea_1aipr_14:hover{border-color:var(--border-hover)}._textarea_1aipr_14:focus{outline:none;border-color:var(--primary);box-shadow:0 0 0 4px var(--focus-ring)}._error_1aipr_46{border-color:var(--danger)}._error_1aipr_46:focus{border-color:var(--danger);box-shadow:0 0 0 4px var(--danger-ring)}._errorText_1aipr_55{color:var(--danger);font-size:12px}._toast_1g76h_1{position:fixed;z-index:10001;top:max(16px,env(safe-area-inset-top));left:50%;transform:translate(-50%);width:max-content;max-width:min(560px,100% - 32px);box-sizing:border-box;display:flex;align-items:center;gap:12px;padding:16px;border:1px solid var(--primary);border-radius:16px;background:var(--surface-elevated);color:var(--text);box-shadow:0 8px 32px var(--shadow-floating);line-height:1.5;overflow-wrap:anywhere}._toast_1g76h_1>svg{flex-shrink:0;color:var(--primary)}._toast_1g76h_1 button{display:flex;align-items:center;justify-content:center;flex-shrink:0;min-width:36px;min-height:36px;border:0;border-radius:8px;background:transparent;color:var(--text-secondary);cursor:pointer}._toast_1g76h_1 button:hover{background:var(--surface-hover)}._warning_1g76h_43{border-color:var(--danger)}._warning_1g76h_43>svg{color:var(--danger)}:root{--mobile-fixed-actions-height: 86px;--page-padding: 28px}._page_z6937_7{display:flex;flex-direction:column;gap:32px;min-height:100vh;padding:var(--page-padding, 28px);width:100%;max-width:1440px;margin:0 auto;min-width:0}._header_z6937_19{display:flex;flex-direction:column}._headerTop_z6937_24{display:flex;align-items:flex-start;justify-content:space-between;gap:24px}._heading_z6937_31{display:flex;flex-direction:column}._title_z6937_36{margin:0;font-size:40px;font-weight:700;line-height:1.2;letter-spacing:-.04em;color:var(--text)}._description_z6937_45{margin-top:10px;color:var(--text-secondary);font-size:15px;line-height:1.5}._actions_z6937_52{display:flex;align-items:center}._list_z6937_57{display:flex;flex-direction:column;gap:12px;padding-bottom:calc(var(--mobile-fixed-actions-height) + 32px + env(safe-area-inset-bottom))}@media(max-width:768px){._page_z6937_7{padding:12px 16px 0}._headerTop_z6937_24{flex-direction:column}._title_z6937_36{font-size:32px}._list_z6937_57{padding-bottom:calc(var(--mobile-fixed-actions-height) + 32px + env(safe-area-inset-bottom))}}@media(min-width:769px){._header_z6937_19{gap:20px}._list_z6937_57{padding-bottom:0}}._innerTabs_z6937_88{display:inline-flex;align-self:flex-start;gap:4px;max-width:100%;margin-top:18px;margin-bottom:8px;padding:4px;box-sizing:border-box;border:1px solid var(--border);border-radius:14px;background:var(--surface)}._innerTab_z6937_88{min-height:40px;padding:8px 20px;border:1px solid transparent;border-radius:10px;background:transparent;color:var(--text-secondary);font:inherit;font-size:14px;font-weight:600;cursor:pointer;transition:background .15s ease,color .15s ease}._innerTab_z6937_88:hover{background:var(--surface-hover);color:var(--text)}._innerTab_z6937_88._activeInnerTab_z6937_121{background:var(--primary);color:var(--on-primary)}._innerTab_z6937_88:focus-visible{outline:2px solid var(--primary);outline-offset:2px}._settingsActions_z6937_131{display:flex;justify-content:flex-end;padding:0 0 12px}._settingsActions_z6937_131>button{min-width:160px}._listSentinel_z6937_141{height:1px}._settingsSections_z6937_145{display:flex;flex-direction:column;gap:20px;min-width:0}@media(max-width:768px){._settingsSections_z6937_145{margin-bottom:calc(100px + env(safe-area-inset-bottom))}}._settingsSection_z6937_145{min-width:0;padding:24px;border:1px solid var(--border);border-radius:16px;background:var(--surface)}._settingsSection_z6937_145>h2{margin:0 0 24px;color:var(--text);font-size:18px}._settingsMobileActions_z6937_171{position:fixed;left:16px;right:16px;bottom:calc(16px + env(safe-area-inset-bottom));display:flex;justify-content:center;z-index:1100}._settingsMobileActions_z6937_171>button{width:100%;max-width:420px}@media(max-width:768px){._settingsSection_z6937_145{padding:18px}}._connectionFields_z6937_191{display:flex;flex-direction:column;gap:24px}._collectionHeader_z6937_197{display:grid;grid-template-columns:minmax(0,1fr) auto;align-items:center;gap:20px 24px;padding:24px;border:1px solid var(--border);border-radius:18px;background:var(--surface)}._collectionHeader_z6937_197 ._title_z6937_36{font-size:32px;line-height:1.2}._collectionHeader_z6937_197>._actions_z6937_52{justify-self:end}._collectionHeader_z6937_197>._headerTop_z6937_24{grid-column:1/-1}@media(max-width:768px){._collectionHeader_z6937_197{display:contents}._collectionHeader_z6937_197>._actions_z6937_52{display:contents}._collectionHeader_z6937_197>._heading_z6937_31,._collectionHeader_z6937_197>._headerTop_z6937_24{display:none}}._fields_d4bkn_1{display:flex;flex-direction:column;gap:24px;min-width:0}._form_15zw4_1{display:flex;flex-direction:column;gap:20px;min-width:0}._actions_15zw4_8{display:flex;flex-wrap:wrap;gap:12px;justify-content:flex-end}@media(max-width:768px){._actions_15zw4_8>button{width:100%;white-space:normal}}._heading_1w2wz_1{margin:0;color:var(--text)}._note_1w2wz_6{margin:0;color:var(--text-secondary);line-height:1.5}._entries_1w2wz_12{display:flex;flex-direction:column;gap:12px;min-width:0}._entry_1w2wz_19{padding:16px;border:1px solid var(--border);border-radius:14px;background:var(--surface);min-width:0}._line_1w2wz_27{display:flex;flex-wrap:wrap;gap:8px 16px;overflow-wrap:anywhere;font-size:14px}._line_1w2wz_27+._line_1w2wz_27{margin-top:10px;color:var(--text-secondary)}._error_1w2wz_40{color:var(--error, #dc2626)}@media(max-width:768px){._heading_1w2wz_1{display:none}}._body_1w2wz_49{margin-top:12px;min-width:0}._body_1w2wz_49 summary{cursor:pointer;color:var(--text-secondary);font-size:14px}._body_1w2wz_49 pre{margin:10px 0 0;padding:12px;border-radius:8px;background:var(--control-background);font-size:12px;line-height:1.5;white-space:pre-wrap;overflow-wrap:anywhere;color:var(--text)}._pagination_r0e80_1{display:flex;align-items:center;justify-content:center;gap:12px;flex-wrap:wrap;margin-top:4px}._button_r0e80_10{min-width:36px;height:38px;padding:0 14px;border:1px solid var(--border);border-radius:10px;background:var(--surface);color:var(--text);cursor:pointer;font-size:14px;font-weight:600;transition:background .15s ease,border-color .15s ease,opacity .15s ease}._button_r0e80_10:hover:not(:disabled){background:var(--surface-hover);border-color:var(--border-hover)}._button_r0e80_10:disabled{cursor:not-allowed;opacity:.45}._label_r0e80_34{color:var(--text-secondary);font-size:14px;text-align:center}._pages_r0e80_40{display:flex;align-items:center;justify-content:center;flex-wrap:wrap;gap:4px}._active_r0e80_48{background:var(--primary);border-color:var(--primary)}._button_r0e80_10:focus-visible{outline:2px solid var(--primary);outline-offset:2px}._content_eng69_1{display:flex;flex-direction:column;gap:12px}._title_eng69_7{margin:4px 0 8px;color:var(--text);font-size:18px;font-weight:600}._actions_eng69_14{display:flex;flex-direction:column;gap:12px}._row_eng69_20{display:grid;grid-auto-flow:column;grid-auto-columns:minmax(0,1fr);gap:10px}._row_eng69_20>button{min-width:0}._identifier_eng69_31{margin:4px 0 0;font-size:11px;line-height:1.4;color:var(--text-secondary);overflow-wrap:anywhere;-webkit-user-select:text;user-select:text}._accordion_5owbj_1{border:1px solid var(--border);border-radius:12px;overflow:hidden}._header_5owbj_7{width:100%;background:var(--surface-elevated);border:none;color:var(--text);padding:16px;text-align:left;cursor:pointer;font-weight:600;display:flex;justify-content:space-between}._content_5owbj_20{padding:16px;border-top:1px solid var(--border);display:flex;flex-direction:column;gap:16px}._wrapper_1fgdg_1{min-width:0;width:100%;box-sizing:border-box;position:relative;z-index:999999;overflow:visible}._dropdown_1fgdg_10{position:fixed;z-index:9999999;max-height:260px;overflow-y:auto;overscroll-behavior:contain;border:1px solid var(--border);border-radius:12px;background:var(--surface);box-shadow:0 12px 28px var(--shadow-floating)}._option_1fgdg_22{box-sizing:border-box;overflow-wrap:anywhere;display:flex;width:100%;flex-direction:column;gap:4px;padding:10px 12px;border:0;border-bottom:1px solid var(--border);background:transparent;color:var(--text);text-align:left;cursor:pointer}._option_1fgdg_22:hover{background:var(--surface-hover)}._option_1fgdg_22:last-child{border-bottom:0}._title_1fgdg_46{font-size:14px;font-weight:600}._uuid_1fgdg_51,._hint_1fgdg_52{color:var(--text-secondary);font-size:12px}._field_1esqu_1{margin-bottom:12px}._row_1esqu_5{display:flex;align-items:flex-end;gap:8px}._inputWrapper_1esqu_11{flex:1;min-width:0}._error_1esqu_16{margin-top:4px;color:var(--danger);font-size:12px}._clearButton_1esqu_22{flex:0 0 36px;width:36px;min-width:36px;height:50px;padding:0;box-sizing:border-box}._rowError_1esqu_31{align-items:center}._dropdown_3mupk_2{display:flex;flex-direction:column;gap:10px;width:100%;min-width:0;box-sizing:border-box}._label_3mupk_11{padding-left:2px;color:var(--text-secondary);font-size:13px;font-weight:600;letter-spacing:.02em}._wrapper_3mupk_19{position:relative}._select_3mupk_23{width:100%;min-width:0;box-sizing:border-box;height:50px;padding:0 48px 0 16px;appearance:none;-webkit-appearance:none;-moz-appearance:none;border-radius:14px;border:1px solid var(--border);background:var(--control-background);color:var(--text);font-size:15px;font-weight:500;cursor:pointer;transition:border-color .18s ease,background .18s ease,box-shadow .18s ease,transform .18s ease}._select_3mupk_23:hover{background:var(--control-background-hover);border-color:var(--border-hover)}._select_3mupk_23:focus{outline:none;background:var(--control-background-hover);border-color:var(--primary);box-shadow:0 0 0 4px var(--focus-ring);transform:translateY(-1px)}._select_3mupk_23:disabled{opacity:.6;cursor:not-allowed}._select_3mupk_23 option{background:var(--surface);color:var(--text)}._arrow_3mupk_65{position:absolute;top:50%;right:16px;transform:translateY(-50%);pointer-events:none;color:var(--text-muted);transition:color .18s ease,transform .18s ease}._wrapper_3mupk_19:hover ._arrow_3mupk_65{color:var(--primary)}._select_3mupk_23:focus+._arrow_3mupk_65{color:var(--primary);transform:translateY(-50%) rotate(180deg)}._error_3mupk_85,._error_3mupk_85:hover{border-color:var(--danger)!important}._error_3mupk_85:focus{border-color:var(--danger)!important;box-shadow:0 0 0 4px var(--danger-ring);background:var(--danger-background)}._error_3mupk_85+._arrow_3mupk_65{color:var(--danger)}._errorText_3mupk_103{margin-top:-4px;padding-left:2px;color:var(--danger);font-size:12px;font-weight:500;line-height:1.4}._form_1ogov_1{display:flex;flex-direction:column;gap:28px}._section_1ogov_7{z-index:100;display:flex;flex-direction:column;gap:18px;padding:22px;border-radius:18px;background:var(--control-background);border:1px solid var(--border)}._sectionTitle_1ogov_18{margin:0;font-size:13px;font-weight:700;letter-spacing:.08em;text-transform:uppercase;color:var(--text-secondary)}._conditions_1ogov_27{display:flex;flex-direction:column;gap:14px}._addCondition_1ogov_33{width:100%;height:48px;margin-top:8px;border:1px dashed var(--border);border-radius:14px;background:transparent;color:var(--text-secondary);transition:background .18s,border-color .18s,color .18s,transform .18s}._addCondition_1ogov_33:hover{background:var(--accent-background);border-color:var(--accent-border);color:var(--text)}._addCondition_1ogov_33:active{transform:scale(.98)}._footer_1ogov_54{z-index:200;position:sticky;bottom:-32px;display:flex;justify-content:flex-end;align-items:center;gap:12px;margin:0 -32px -32px;padding:20px 32px;background:var(--surface);-webkit-backdrop-filter:blur(18px);backdrop-filter:blur(18px);border-top:1px solid var(--border)}@media(max-width:768px){._form_1ogov_1{gap:20px}._section_1ogov_7{padding:18px}._footer_1ogov_54{position:sticky;bottom:-20px;margin:0 -16px -20px;padding:16px 16px calc(16px + env(safe-area-inset-bottom));flex-direction:column}}._container_9wouv_1{position:fixed;left:16px;right:16px;bottom:calc(16px + env(safe-area-inset-bottom));display:flex;justify-content:center;opacity:0;pointer-events:none;transform:translateY(24px) scale(.96);transition:opacity .22s ease,transform .22s ease;z-index:1100}._container_9wouv_1>*{width:100%;max-width:420px}._visible_9wouv_20{opacity:1;transform:translateY(0) scale(1);pointer-events:auto}._visible_9wouv_20>*{pointer-events:auto}._field_1iloj_1{min-width:0;display:flex;flex-direction:column;gap:6px}._label_1iloj_8{color:var(--text);font-size:13px;font-weight:600}._select_1iloj_14{min-width:0;max-width:100%;width:100%;padding:12px 14px;border:1px solid var(--border);border-radius:12px;background:var(--surface);color:var(--text);font:inherit;box-sizing:border-box}._select_1iloj_14:focus{outline:none;border-color:var(--primary);box-shadow:0 0 0 4px var(--focus-ring)}._form_1a1tt_1{display:flex;flex-direction:column;gap:18px}._field_1a1tt_7{display:flex;flex-direction:column;gap:8px;color:var(--text);font-size:13px;font-weight:600}._textarea_1a1tt_16{width:100%;min-height:140px;padding:12px 14px;border:1px solid var(--border);border-radius:12px;background:var(--surface);color:var(--text);resize:vertical;font:inherit;box-sizing:border-box}._arrayItem_1a1tt_29{display:grid;gap:12px;padding:12px;border:1px solid var(--border);border-radius:12px;background:var(--surface);margin-bottom:12px}._form_1a1tt_1 p{margin:0;color:var(--text-secondary);font-size:13px;line-height:1.5}._logicTabs_1a1tt_46{display:flex;gap:4px;padding:4px;background:var(--surface);border:1px solid var(--border);border-radius:12px}._logicTabs_1a1tt_46 button{flex:1;min-width:0;padding:12px 8px;border:0;border-radius:8px;background:transparent;color:var(--text-secondary);font:inherit;cursor:pointer;overflow-wrap:anywhere}._logicTabs_1a1tt_46 button[aria-selected=true]{background:var(--accent-background);color:var(--text);box-shadow:inset 0 0 0 1px var(--accent-border)}._logicTabs_1a1tt_46 button:focus-visible{outline:2px solid var(--primary);outline-offset:2px}@media(max-width:400px){._logicTabs_1a1tt_46 button{padding:10px 4px;font-size:12px}}._sectionTitle_1a1tt_85{margin:0;font-size:14px;font-weight:600;color:var(--text)}._footerActions_1a1tt_92{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:12px}._footerActions_1a1tt_92>button{min-width:0;min-height:46px;height:auto;padding:12px;white-space:normal}._phraseMode_1a1tt_106{display:flex;align-items:center;gap:8px}._phraseMode_1a1tt_106>label{flex:1;min-width:0}._phraseMode_1a1tt_106>label>span:first-of-type{flex-shrink:0}@media(max-width:768px){._directTabLabel_1a1tt_122{white-space:pre-line}}._linkActions_1a1tt_126{display:flex;justify-content:flex-end;flex-wrap:wrap;gap:12px;align-items:center}._switchRow_1hmmz_1{display:inline-flex;align-items:center;gap:10px;color:var(--text);font-size:14px;cursor:pointer;-webkit-user-select:none;user-select:none}._input_1hmmz_11{position:absolute;width:1px;height:1px;padding:0;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border:0}._track_1hmmz_22{position:relative;width:46px;height:26px;flex:0 0 auto;border:1px solid var(--border);border-radius:999px;background:var(--surface-elevated);transition:background .2s ease,border-color .2s ease,box-shadow .2s ease}._thumb_1hmmz_33{position:absolute;top:3px;left:3px;width:18px;height:18px;border-radius:50%;background:var(--switch-thumb);box-shadow:0 2px 6px var(--shadow-floating);transition:transform .2s ease,background .2s ease}._input_1hmmz_11:checked+._track_1hmmz_22{border-color:var(--primary);background:var(--primary);box-shadow:none}._input_1hmmz_11:checked+._track_1hmmz_22 ._thumb_1hmmz_33{transform:translate(20px);background:var(--on-primary)}._input_1hmmz_11:focus-visible+._track_1hmmz_22{outline:2px solid var(--primary);outline-offset:2px}._input_1hmmz_11:disabled+._track_1hmmz_22,._input_1hmmz_11:disabled~._label_1hmmz_62{opacity:.55;cursor:not-allowed}._label_1hmmz_62{line-height:1.3}._form_mn1ml_1{display:flex;flex-direction:column;gap:24px;min-width:0}._arrayItem_mn1ml_8{display:flex;flex-direction:column;gap:18px;min-width:0;padding:20px;border:1px solid var(--border);border-radius:14px;background:var(--control-background);box-sizing:border-box}@media(max-width:768px){._arrayItem_mn1ml_8{padding:14px}}._sectionTitle_mn1ml_25{margin:0;font-size:14px;font-weight:600;color:var(--text)}._form_1i0x1_1{display:flex;flex-direction:column;gap:18px}._field_1i0x1_7{display:flex;flex-direction:column;gap:8px;color:var(--text);font-size:13px;font-weight:600}._textarea_1i0x1_16{width:100%;min-height:140px;padding:12px 14px;border:1px solid var(--border);border-radius:12px;background:var(--surface);color:var(--text);resize:vertical;font:inherit;box-sizing:border-box}._arrayItem_1i0x1_29{display:grid;gap:12px;padding:12px;border:1px solid var(--border);border-radius:12px;background:var(--surface);margin-bottom:12px}._grid_fc8hl_1{min-width:0;display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,280px),1fr));gap:20px}._card_fc8hl_8{box-sizing:border-box;min-width:0;padding:24px;border:1px solid var(--border);border-radius:18px;background:var(--surface)}._card_fc8hl_8 h2{overflow-wrap:anywhere;margin:0 0 20px;font-size:20px}._actions_fc8hl_23{display:flex;flex-wrap:wrap;gap:12px}._description_fc8hl_29{margin:0 0 20px;color:var(--text-secondary);line-height:1.5}@media(max-width:768px){._page_fc8hl_36{padding-bottom:calc(112px + env(safe-area-inset-bottom))}._card_fc8hl_8{padding:18px}._actions_fc8hl_23{flex-direction:column}._actions_fc8hl_23>button{width:100%;min-width:0;max-width:100%;white-space:normal;height:auto;min-height:46px;padding:12px;overflow-wrap:anywhere}}._form_1ijxr_1{display:flex;flex-direction:column;gap:24px}._field_1ijxr_7{display:flex;flex-direction:column;gap:8px}._input_1ijxr_13{box-sizing:border-box;min-width:0;width:100%;background:var(--surface);border:1px solid var(--border);border-radius:10px;padding:12px;color:var(--text)}._input_1ijxr_13:focus{outline:none;border-color:var(--primary)}._label_1ijxr_29{color:var(--text-secondary);font-size:13px;font-weight:500}._help_1ijxr_35{color:var(--text-secondary);font-size:13px}._toggleHelp_1ijxr_40{display:flex;align-items:center;gap:8px}._page_w5y3x_1{min-height:100vh;padding:28px;background:var(--surface);color:var(--text);display:flex;flex-direction:column;gap:28px}._header_w5y3x_11{display:flex;align-items:flex-end;justify-content:space-between;gap:20px}._title_w5y3x_18{margin:0;font-size:40px;line-height:1;letter-spacing:-.04em}._description_w5y3x_25{margin:10px 0 0;color:var(--text-secondary);font-size:15px}._grid_w5y3x_31{display:grid;grid-template-columns:minmax(0,1fr);min-width:0;gap:16px}._card_w5y3x_38,._empty_w5y3x_38{min-width:0;max-width:100%;padding:20px;border:1px solid var(--border);border-radius:20px;background:var(--surface-elevated)}._cardHeader_w5y3x_47{display:flex;justify-content:space-between;gap:16px;align-items:flex-start}._cardTitle_w5y3x_54{margin:0;font-size:18px}._meta_w5y3x_59{overflow-wrap:anywhere;margin-top:8px;color:var(--text-secondary);font-size:14px}._time_w5y3x_66{margin-top:18px;font-size:38px;font-weight:700;letter-spacing:-.04em}._form_w5y3x_73{display:flex;flex-direction:column;gap:18px}._field_w5y3x_79{display:flex;flex-direction:column;gap:8px}._label_w5y3x_85{color:var(--text-secondary);font-size:13px;font-weight:500}._select_w5y3x_91,._input_w5y3x_91{height:44px;padding:0 14px;border:1px solid var(--border);border-radius:14px;background:var(--surface);color:var(--text);font-size:14px}._quickTabs_w5y3x_101{display:flex;flex-wrap:wrap;gap:8px}._quickTab_w5y3x_101{height:40px;padding:0 14px;border:1px solid var(--border);border-radius:999px;background:var(--surface);color:var(--text-secondary);cursor:pointer}._activeQuickTab_w5y3x_117{background:var(--accent-background);color:var(--text)}@media(max-width:768px){._page_w5y3x_1{padding:20px;padding-bottom:calc(120px + env(safe-area-inset-bottom))}._header_w5y3x_11{align-items:stretch;flex-direction:column}._title_w5y3x_18{font-size:32px}}._cardLead_w5y3x_135{flex:1;display:flex;align-items:center;gap:14px;min-width:0}._cardIcon_w5y3x_143{flex:0 0 auto;color:var(--text-muted)}._cardButton_w5y3x_148{width:100%;text-align:left;color:inherit;cursor:pointer}._cardButton_w5y3x_148:hover{border-color:var(--border-hover);background:var(--surface-hover)}._wheelPicker_w5y3x_160{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));width:100%;min-width:0;box-sizing:border-box;gap:12px;padding:14px;border:1px solid var(--border);border-radius:0;background:var(--surface-elevated)}._wheelColumn_w5y3x_173{display:flex;flex-direction:column;align-items:center;gap:8px}._wheelSelect_w5y3x_180{width:100%;height:64px;box-sizing:border-box;border:1px solid var(--border);border-radius:10px;background:var(--control-background);color:var(--text);text-align:center;font-size:24px;font-weight:700}@media(max-width:768px){._wheelPicker_w5y3x_160{position:relative;overflow:hidden}._wheelSelect_w5y3x_180{height:72px}}._footerActions_w5y3x_202{display:flex;justify-content:flex-end;width:100%}._saveButton_w5y3x_208{min-width:160px;box-sizing:border-box}@media(max-width:768px){._saveButton_w5y3x_208{width:100%}}._cardLead_w5y3x_135>div{min-width:0}._cardHeader_w5y3x_47>:last-child:not(._cardLead_w5y3x_135){flex-shrink:0}._volumeLabel_w5y3x_226{display:flex;align-items:baseline;gap:8px}._volumeValue_w5y3x_232{color:var(--text);font-weight:600}._alarmTimeFields_w5y3x_237{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:12px}._wheelSelect_w5y3x_180:focus{outline:2px solid var(--primary);outline-offset:2px}@media(max-width:768px){._grid_w5y3x_31{padding-bottom:calc(96px + env(safe-area-inset-bottom))}}._page_375kk_1{color:var(--text);min-width:0}._title_375kk_6{margin:0 0 32px;font-size:40px;line-height:1.2;letter-spacing:-.04em}._hint_375kk_13{color:var(--text-secondary);line-height:1.6}._grid_375kk_18{display:grid;grid-template-columns:repeat(auto-fill,minmax(min(100%,250px),1fr));gap:16px}._device_375kk_24{display:flex;flex-direction:column;align-items:flex-start;gap:12px;text-align:left;padding:24px;border:1px solid var(--border);border-radius:20px;background:var(--surface);color:var(--text);font:inherit;cursor:pointer;min-width:0}._device_375kk_24 strong{overflow-wrap:anywhere;font-size:18px}._device_375kk_24 span{color:var(--text-secondary)}._device_375kk_24:hover,._device_375kk_24:focus-visible{border-color:var(--primary)}._active_375kk_53{border-color:var(--primary)}._active_375kk_53 svg{color:var(--primary)}._status_375kk_61{display:flex;align-items:center;gap:8px;margin-bottom:24px}._actions_375kk_68{display:flex;gap:12px;width:100%}._actions_375kk_68>button{flex:1;min-width:0}._actions_375kk_68 button{display:flex;align-items:center;justify-content:center;gap:8px}@media(max-width:768px){._title_375kk_6{display:none}}._origin_375kk_91{display:flex;align-items:center;flex-wrap:wrap;gap:10px;line-height:1.6}._origin_375kk_91 svg{flex-shrink:0;color:var(--primary)}._phoneStage_375kk_104{display:flex;flex-direction:column;align-items:center;justify-content:center;gap:14px;text-align:center;min-height:240px;padding:24px 0}._avatar_375kk_115{display:grid;place-items:center;width:106px;height:106px;border-radius:50%;color:var(--primary);background:color-mix(in srgb,var(--primary) 12%,var(--surface));border:1px solid color-mix(in srgb,var(--primary) 25%,var(--border))}._phoneStage_375kk_104 h2{margin:10px 0 0;font-size:26px;overflow-wrap:anywhere}._phoneStatus_375kk_132{display:flex;gap:8px;align-items:center;color:var(--text-secondary)}._duration_375kk_139{font-size:20px;font-variant-numeric:tabular-nums;letter-spacing:2px}._phoneStage_375kk_104 p{margin:0;font-size:13px}._phoneFooter_375kk_150{width:100%;display:flex;flex-direction:column;align-items:stretch;gap:18px}._callControls_375kk_158{display:flex;justify-content:center;gap:clamp(16px,5vw,48px)}._control_375kk_164{display:flex;flex-direction:column;align-items:center;gap:9px;min-width:74px}._control_375kk_164>span{font-size:12px;color:var(--text-secondary)}._control_375kk_164 ._roundControl_375kk_177,._control_375kk_164 ._hangup_375kk_177{width:62px;height:62px;min-width:62px;padding:0;display:grid;place-items:center;border-radius:50%}._control_375kk_164 ._controlSelected_375kk_187{color:var(--primary);background:color-mix(in srgb,var(--primary) 18%,var(--surface));border-color:var(--primary)}._control_375kk_164 ._hangup_375kk_177{width:72px;height:72px;background:#cf3549;color:#fff;border-color:#cf3549}._control_375kk_164 ._hangup_375kk_177:hover{background:#b9273a}._routeHint_375kk_205{display:flex;justify-content:center;align-items:center;gap:6px;font-size:12px;color:var(--text-secondary)}._routeName_375kk_214{text-align:center;color:var(--text-secondary);overflow-wrap:anywhere}@media(max-width:768px){._phoneStage_375kk_104{min-height:220px}._phoneFooter_375kk_150{padding-bottom:max(8px,env(safe-area-inset-bottom))}}._control_375kk_164 ._dial_375kk_228{width:72px;height:72px;min-width:72px;padding:0;display:grid;place-items:center;border-radius:50%;background:#23875c;border-color:#23875c;color:#fff}._control_375kk_164 ._dial_375kk_228:hover:not(:disabled){background:#1a714b}._page_10u8g_1{box-sizing:border-box;min-width:0;color:var(--text)}._heading_10u8g_7{display:flex;align-items:center;gap:16px;margin:0 0 32px}._heading_10u8g_7 h1{font-size:40px;line-height:1.2;letter-spacing:-.04em;margin:0}._heading_10u8g_7 p{color:var(--text-secondary);line-height:1.6;margin:8px 0 0}._grid_10u8g_27{display:grid;grid-template-columns:repeat(auto-fill,minmax(min(100%,250px),1fr));gap:16px}._device_10u8g_33{display:flex;flex-direction:column;align-items:flex-start;gap:12px;text-align:left;padding:24px;border:1px solid var(--border, #333);background:var(--surface, #1c1c1c);color:var(--text);border-radius:20px;font:inherit;cursor:pointer;min-width:0}._device_10u8g_33 strong{font-size:18px;overflow-wrap:anywhere}._device_10u8g_33 span,._device_10u8g_33 small{color:var(--text-secondary)}._device_10u8g_33:hover,._device_10u8g_33:focus-visible{border-color:var(--primary, #03a9f4)}._deviceLive_10u8g_64{border-color:#3da98c}._deviceLive_10u8g_64 svg{color:#3da98c}._playback_10u8g_72{position:relative;border:1px solid var(--primary, #03a9f4);background:color-mix(in srgb,var(--primary, #03a9f4) 10%,transparent);border-radius:14px;overflow:hidden}._playback_10u8g_72>svg{position:absolute;left:18px;top:50%;transform:translateY(-50%);pointer-events:none;color:var(--primary)}._playback_10u8g_72 ._playbackSelect_10u8g_89{padding:20px 54px;text-align:center;text-align-last:center;border:0;background:transparent;border-radius:14px;min-height:48px;text-overflow:ellipsis}._playback_10u8g_72:has(select:disabled){opacity:.65}._playback_10u8g_72 ._playbackSelect_10u8g_89:focus{box-shadow:none}._playback_10u8g_72:focus-within{outline:2px solid var(--primary, #03a9f4);outline-offset:3px}._statusRow_10u8g_113{display:flex;align-items:center;gap:8px;margin-bottom:20px}._status_10u8g_113{display:flex;gap:10px;align-items:center;padding:16px 0;color:var(--text-secondary)}._live_10u8g_128{color:#32aa87}._hint_10u8g_132{font-size:14px;color:var(--text-secondary);line-height:1.6}._footer_10u8g_138{display:flex;gap:12px;width:100%}._footer_10u8g_138>button{flex:1;min-width:0}._empty_10u8g_149{padding:28px;border:1px dashed var(--border, #333);border-radius:18px;line-height:1.7}._error_10u8g_156{color:var(--danger, #ed8291);line-height:1.5}@media(max-width:768px){._heading_10u8g_7{margin:0}._heading_10u8g_7 h1{display:none}._grid_10u8g_27{grid-template-columns:1fr}._heading_10u8g_7>svg{display:none}}._form_1wh9a_1{display:flex;flex-direction:column;gap:20px;min-width:0}._mobilePage_1wh9a_8{padding-bottom:calc(96px + env(safe-area-inset-bottom))}._text_1wh9a_12{overflow-wrap:anywhere;white-space:pre-wrap}._grid_1wh9a_17{display:grid;grid-template-columns:repeat(auto-fill,minmax(min(100%,320px),420px));gap:12px;min-width:0}._card_1wh9a_24{padding:16px;border-radius:16px}._lead_1wh9a_29{align-items:flex-start;gap:10px}._icon_1wh9a_34{flex-shrink:0;margin-top:2px;color:var(--text-secondary)}._meta_1wh9a_40{margin:6px 0 0;font-size:13px;line-height:1.4;color:var(--text-secondary);overflow-wrap:anywhere}\n", i.appendChild(u);
  }
  render() {
    if (!this.isConnected) return;
    const i = this.ensureShadowRoot();
    this.root || (this.container || (this.container = document.createElement("div"), i.appendChild(this.container)), this.root = Fm.createRoot(this.container)), this.root.render(
      /* @__PURE__ */ o.jsx(Lf.StrictMode, { children: /* @__PURE__ */ o.jsx(gp, { children: /* @__PURE__ */ o.jsx(sS, { hass: this.hassValue }) }) })
    );
  }
}
customElements.get(Mf) || customElements.define(Mf, oS);
