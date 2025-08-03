var Uf = Object.defineProperty;
var $f = (e, t, n) =>
  t in e
    ? Uf(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
    : (e[t] = n);
var Wu = (e, t, n) => ($f(e, typeof t != "symbol" ? t + "" : t, n), n);
(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const i of document.querySelectorAll('link[rel="modulepreload"]')) r(i);
  new MutationObserver((i) => {
    for (const l of i)
      if (l.type === "childList")
        for (const c of l.addedNodes)
          c.tagName === "LINK" && c.rel === "modulepreload" && r(c);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(i) {
    const l = {};
    return (
      i.integrity && (l.integrity = i.integrity),
      i.referrerPolicy && (l.referrerPolicy = i.referrerPolicy),
      i.crossOrigin === "use-credentials"
        ? (l.credentials = "include")
        : i.crossOrigin === "anonymous"
        ? (l.credentials = "omit")
        : (l.credentials = "same-origin"),
      l
    );
  }
  function r(i) {
    if (i.ep) return;
    i.ep = !0;
    const l = n(i);
    fetch(i.href, l);
  }
})();
var ws =
  typeof globalThis < "u"
    ? globalThis
    : typeof window < "u"
    ? window
    : typeof global < "u"
    ? global
    : typeof self < "u"
    ? self
    : {};
function Vl(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var xs = { exports: {} },
  ei = {},
  ks = { exports: {} },
  pe = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Wr = Symbol.for("react.element"),
  Hf = Symbol.for("react.portal"),
  Kf = Symbol.for("react.fragment"),
  Vf = Symbol.for("react.strict_mode"),
  Xf = Symbol.for("react.profiler"),
  Wf = Symbol.for("react.provider"),
  Qf = Symbol.for("react.context"),
  Gf = Symbol.for("react.forward_ref"),
  Yf = Symbol.for("react.suspense"),
  Zf = Symbol.for("react.memo"),
  qf = Symbol.for("react.lazy"),
  Qu = Symbol.iterator;
function Jf(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Qu && e[Qu]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var Ss = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  Es = Object.assign,
  Cs = {};
function ir(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Cs),
    (this.updater = n || Ss);
}
ir.prototype.isReactComponent = {};
ir.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
ir.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function Os() {}
Os.prototype = ir.prototype;
function Xl(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Cs),
    (this.updater = n || Ss);
}
var Wl = (Xl.prototype = new Os());
Wl.constructor = Xl;
Es(Wl, ir.prototype);
Wl.isPureReactComponent = !0;
var Gu = Array.isArray,
  Ps = Object.prototype.hasOwnProperty,
  Ql = { current: null },
  bs = { key: !0, ref: !0, __self: !0, __source: !0 };
function _s(e, t, n) {
  var r,
    i = {},
    l = null,
    c = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (c = t.ref),
    t.key !== void 0 && (l = "" + t.key),
    t))
      Ps.call(t, r) && !bs.hasOwnProperty(r) && (i[r] = t[r]);
  var y = arguments.length - 2;
  if (y === 1) i.children = n;
  else if (1 < y) {
    for (var x = Array(y), b = 0; b < y; b++) x[b] = arguments[b + 2];
    i.children = x;
  }
  if (e && e.defaultProps)
    for (r in ((y = e.defaultProps), y)) i[r] === void 0 && (i[r] = y[r]);
  return {
    $$typeof: Wr,
    type: e,
    key: l,
    ref: c,
    props: i,
    _owner: Ql.current,
  };
}
function ed(e, t) {
  return {
    $$typeof: Wr,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function Gl(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Wr;
}
function td(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var Yu = /\/+/g;
function gi(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? td("" + e.key)
    : t.toString(36);
}
function yo(e, t, n, r, i) {
  var l = typeof e;
  (l === "undefined" || l === "boolean") && (e = null);
  var c = !1;
  if (e === null) c = !0;
  else
    switch (l) {
      case "string":
      case "number":
        c = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case Wr:
          case Hf:
            c = !0;
        }
    }
  if (c)
    return (
      (c = e),
      (i = i(c)),
      (e = r === "" ? "." + gi(c, 0) : r),
      Gu(i)
        ? ((n = ""),
          e != null && (n = e.replace(Yu, "$&/") + "/"),
          yo(i, t, n, "", function (b) {
            return b;
          }))
        : i != null &&
          (Gl(i) &&
            (i = ed(
              i,
              n +
                (!i.key || (c && c.key === i.key)
                  ? ""
                  : ("" + i.key).replace(Yu, "$&/") + "/") +
                e
            )),
          t.push(i)),
      1
    );
  if (((c = 0), (r = r === "" ? "." : r + ":"), Gu(e)))
    for (var y = 0; y < e.length; y++) {
      l = e[y];
      var x = r + gi(l, y);
      c += yo(l, t, n, x, i);
    }
  else if (((x = Jf(e)), typeof x == "function"))
    for (e = x.call(e), y = 0; !(l = e.next()).done; )
      (l = l.value), (x = r + gi(l, y++)), (c += yo(l, t, n, x, i));
  else if (l === "object")
    throw (
      ((t = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (t === "[object Object]"
            ? "object with keys {" + Object.keys(e).join(", ") + "}"
            : t) +
          "). If you meant to render a collection of children, use an array instead."
      ))
    );
  return c;
}
function qr(e, t, n) {
  if (e == null) return e;
  var r = [],
    i = 0;
  return (
    yo(e, r, "", "", function (l) {
      return t.call(n, l, i++);
    }),
    r
  );
}
function nd(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = n));
        }
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var Ye = { current: null },
  go = { transition: null },
  rd = {
    ReactCurrentDispatcher: Ye,
    ReactCurrentBatchConfig: go,
    ReactCurrentOwner: Ql,
  };
pe.Children = {
  map: qr,
  forEach: function (e, t, n) {
    qr(
      e,
      function () {
        t.apply(this, arguments);
      },
      n
    );
  },
  count: function (e) {
    var t = 0;
    return (
      qr(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      qr(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!Gl(e))
      throw Error(
        "React.Children.only expected to receive a single React element child."
      );
    return e;
  },
};
pe.Component = ir;
pe.Fragment = Kf;
pe.Profiler = Xf;
pe.PureComponent = Xl;
pe.StrictMode = Vf;
pe.Suspense = Yf;
pe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = rd;
pe.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        "."
    );
  var r = Es({}, e.props),
    i = e.key,
    l = e.ref,
    c = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((l = t.ref), (c = Ql.current)),
      t.key !== void 0 && (i = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var y = e.type.defaultProps;
    for (x in t)
      Ps.call(t, x) &&
        !bs.hasOwnProperty(x) &&
        (r[x] = t[x] === void 0 && y !== void 0 ? y[x] : t[x]);
  }
  var x = arguments.length - 2;
  if (x === 1) r.children = n;
  else if (1 < x) {
    y = Array(x);
    for (var b = 0; b < x; b++) y[b] = arguments[b + 2];
    r.children = y;
  }
  return { $$typeof: Wr, type: e.type, key: i, ref: l, props: r, _owner: c };
};
pe.createContext = function (e) {
  return (
    (e = {
      $$typeof: Qf,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: Wf, _context: e }),
    (e.Consumer = e)
  );
};
pe.createElement = _s;
pe.createFactory = function (e) {
  var t = _s.bind(null, e);
  return (t.type = e), t;
};
pe.createRef = function () {
  return { current: null };
};
pe.forwardRef = function (e) {
  return { $$typeof: Gf, render: e };
};
pe.isValidElement = Gl;
pe.lazy = function (e) {
  return { $$typeof: qf, _payload: { _status: -1, _result: e }, _init: nd };
};
pe.memo = function (e, t) {
  return { $$typeof: Zf, type: e, compare: t === void 0 ? null : t };
};
pe.startTransition = function (e) {
  var t = go.transition;
  go.transition = {};
  try {
    e();
  } finally {
    go.transition = t;
  }
};
pe.unstable_act = function () {
  throw Error("act(...) is not supported in production builds of React.");
};
pe.useCallback = function (e, t) {
  return Ye.current.useCallback(e, t);
};
pe.useContext = function (e) {
  return Ye.current.useContext(e);
};
pe.useDebugValue = function () {};
pe.useDeferredValue = function (e) {
  return Ye.current.useDeferredValue(e);
};
pe.useEffect = function (e, t) {
  return Ye.current.useEffect(e, t);
};
pe.useId = function () {
  return Ye.current.useId();
};
pe.useImperativeHandle = function (e, t, n) {
  return Ye.current.useImperativeHandle(e, t, n);
};
pe.useInsertionEffect = function (e, t) {
  return Ye.current.useInsertionEffect(e, t);
};
pe.useLayoutEffect = function (e, t) {
  return Ye.current.useLayoutEffect(e, t);
};
pe.useMemo = function (e, t) {
  return Ye.current.useMemo(e, t);
};
pe.useReducer = function (e, t, n) {
  return Ye.current.useReducer(e, t, n);
};
pe.useRef = function (e) {
  return Ye.current.useRef(e);
};
pe.useState = function (e) {
  return Ye.current.useState(e);
};
pe.useSyncExternalStore = function (e, t, n) {
  return Ye.current.useSyncExternalStore(e, t, n);
};
pe.useTransition = function () {
  return Ye.current.useTransition();
};
pe.version = "18.2.0";
ks.exports = pe;
var ee = ks.exports;
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var od = ee,
  id = Symbol.for("react.element"),
  ld = Symbol.for("react.fragment"),
  ud = Object.prototype.hasOwnProperty,
  ad = od.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  sd = { key: !0, ref: !0, __self: !0, __source: !0 };
function Ns(e, t, n) {
  var r,
    i = {},
    l = null,
    c = null;
  n !== void 0 && (l = "" + n),
    t.key !== void 0 && (l = "" + t.key),
    t.ref !== void 0 && (c = t.ref);
  for (r in t) ud.call(t, r) && !sd.hasOwnProperty(r) && (i[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) i[r] === void 0 && (i[r] = t[r]);
  return {
    $$typeof: id,
    type: e,
    key: l,
    ref: c,
    props: i,
    _owner: ad.current,
  };
}
ei.Fragment = ld;
ei.jsx = Ns;
ei.jsxs = Ns;
xs.exports = ei;
var ue = xs.exports,
  Gi = {},
  Ts = { exports: {} },
  ut = {},
  Is = { exports: {} },
  Ms = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(B, $) {
    var V = B.length;
    B.push($);
    e: for (; 0 < V; ) {
      var X = (V - 1) >>> 1,
        J = B[X];
      if (0 < i(J, $)) (B[X] = $), (B[V] = J), (V = X);
      else break e;
    }
  }
  function n(B) {
    return B.length === 0 ? null : B[0];
  }
  function r(B) {
    if (B.length === 0) return null;
    var $ = B[0],
      V = B.pop();
    if (V !== $) {
      B[0] = V;
      e: for (var X = 0, J = B.length, ne = J >>> 1; X < ne; ) {
        var ae = 2 * (X + 1) - 1,
          ie = B[ae],
          z = ae + 1,
          L = B[z];
        if (0 > i(ie, V))
          z < J && 0 > i(L, ie)
            ? ((B[X] = L), (B[z] = V), (X = z))
            : ((B[X] = ie), (B[ae] = V), (X = ae));
        else if (z < J && 0 > i(L, V)) (B[X] = L), (B[z] = V), (X = z);
        else break e;
      }
    }
    return $;
  }
  function i(B, $) {
    var V = B.sortIndex - $.sortIndex;
    return V !== 0 ? V : B.id - $.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var l = performance;
    e.unstable_now = function () {
      return l.now();
    };
  } else {
    var c = Date,
      y = c.now();
    e.unstable_now = function () {
      return c.now() - y;
    };
  }
  var x = [],
    b = [],
    R = 1,
    F = null,
    f = 3,
    k = !1,
    o = !1,
    s = !1,
    h = typeof setTimeout == "function" ? setTimeout : null,
    u = typeof clearTimeout == "function" ? clearTimeout : null,
    a = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function p(B) {
    for (var $ = n(b); $ !== null; ) {
      if ($.callback === null) r(b);
      else if ($.startTime <= B)
        r(b), ($.sortIndex = $.expirationTime), t(x, $);
      else break;
      $ = n(b);
    }
  }
  function m(B) {
    if (((s = !1), p(B), !o))
      if (n(x) !== null) (o = !0), Z(d);
      else {
        var $ = n(b);
        $ !== null && W(m, $.startTime - B);
      }
  }
  function d(B, $) {
    (o = !1), s && ((s = !1), u(E), (E = -1)), (k = !0);
    var V = f;
    try {
      for (
        p($), F = n(x);
        F !== null && (!(F.expirationTime > $) || (B && !j()));

      ) {
        var X = F.callback;
        if (typeof X == "function") {
          (F.callback = null), (f = F.priorityLevel);
          var J = X(F.expirationTime <= $);
          ($ = e.unstable_now()),
            typeof J == "function" ? (F.callback = J) : F === n(x) && r(x),
            p($);
        } else r(x);
        F = n(x);
      }
      if (F !== null) var ne = !0;
      else {
        var ae = n(b);
        ae !== null && W(m, ae.startTime - $), (ne = !1);
      }
      return ne;
    } finally {
      (F = null), (f = V), (k = !1);
    }
  }
  var w = !1,
    g = null,
    E = -1,
    _ = 5,
    I = -1;
  function j() {
    return !(e.unstable_now() - I < _);
  }
  function N() {
    if (g !== null) {
      var B = e.unstable_now();
      I = B;
      var $ = !0;
      try {
        $ = g(!0, B);
      } finally {
        $ ? C() : ((w = !1), (g = null));
      }
    } else w = !1;
  }
  var C;
  if (typeof a == "function")
    C = function () {
      a(N);
    };
  else if (typeof MessageChannel < "u") {
    var T = new MessageChannel(),
      M = T.port2;
    (T.port1.onmessage = N),
      (C = function () {
        M.postMessage(null);
      });
  } else
    C = function () {
      h(N, 0);
    };
  function Z(B) {
    (g = B), w || ((w = !0), C());
  }
  function W(B, $) {
    E = h(function () {
      B(e.unstable_now());
    }, $);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (B) {
      B.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      o || k || ((o = !0), Z(d));
    }),
    (e.unstable_forceFrameRate = function (B) {
      0 > B || 125 < B
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
          )
        : (_ = 0 < B ? Math.floor(1e3 / B) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return f;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(x);
    }),
    (e.unstable_next = function (B) {
      switch (f) {
        case 1:
        case 2:
        case 3:
          var $ = 3;
          break;
        default:
          $ = f;
      }
      var V = f;
      f = $;
      try {
        return B();
      } finally {
        f = V;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (B, $) {
      switch (B) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          B = 3;
      }
      var V = f;
      f = B;
      try {
        return $();
      } finally {
        f = V;
      }
    }),
    (e.unstable_scheduleCallback = function (B, $, V) {
      var X = e.unstable_now();
      switch (
        (typeof V == "object" && V !== null
          ? ((V = V.delay), (V = typeof V == "number" && 0 < V ? X + V : X))
          : (V = X),
        B)
      ) {
        case 1:
          var J = -1;
          break;
        case 2:
          J = 250;
          break;
        case 5:
          J = 1073741823;
          break;
        case 4:
          J = 1e4;
          break;
        default:
          J = 5e3;
      }
      return (
        (J = V + J),
        (B = {
          id: R++,
          callback: $,
          priorityLevel: B,
          startTime: V,
          expirationTime: J,
          sortIndex: -1,
        }),
        V > X
          ? ((B.sortIndex = V),
            t(b, B),
            n(x) === null &&
              B === n(b) &&
              (s ? (u(E), (E = -1)) : (s = !0), W(m, V - X)))
          : ((B.sortIndex = J), t(x, B), o || k || ((o = !0), Z(d))),
        B
      );
    }),
    (e.unstable_shouldYield = j),
    (e.unstable_wrapCallback = function (B) {
      var $ = f;
      return function () {
        var V = f;
        f = $;
        try {
          return B.apply(this, arguments);
        } finally {
          f = V;
        }
      };
    });
})(Ms);
Is.exports = Ms;
var cd = Is.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Rs = ee,
  lt = cd;
function te(e) {
  for (
    var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1;
    n < arguments.length;
    n++
  )
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return (
    "Minified React error #" +
    e +
    "; visit " +
    t +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var Ls = new Set(),
  Nr = {};
function On(e, t) {
  Yn(e, t), Yn(e + "Capture", t);
}
function Yn(e, t) {
  for (Nr[e] = t, e = 0; e < t.length; e++) Ls.add(t[e]);
}
var zt = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  Yi = Object.prototype.hasOwnProperty,
  fd =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  Zu = {},
  qu = {};
function dd(e) {
  return Yi.call(qu, e)
    ? !0
    : Yi.call(Zu, e)
    ? !1
    : fd.test(e)
    ? (qu[e] = !0)
    : ((Zu[e] = !0), !1);
}
function pd(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r
        ? !1
        : n !== null
        ? !n.acceptsBooleans
        : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function hd(e, t, n, r) {
  if (t === null || typeof t > "u" || pd(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
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
function Ze(e, t, n, r, i, l, c) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = i),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = l),
    (this.removeEmptyString = c);
}
var $e = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    $e[e] = new Ze(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  $e[t] = new Ze(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  $e[e] = new Ze(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  $e[e] = new Ze(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    $e[e] = new Ze(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  $e[e] = new Ze(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  $e[e] = new Ze(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  $e[e] = new Ze(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  $e[e] = new Ze(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Yl = /[\-:]([a-z])/g;
function Zl(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Yl, Zl);
    $e[t] = new Ze(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Yl, Zl);
    $e[t] = new Ze(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(Yl, Zl);
  $e[t] = new Ze(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  $e[e] = new Ze(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
$e.xlinkHref = new Ze(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1
);
["src", "href", "action", "formAction"].forEach(function (e) {
  $e[e] = new Ze(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function ql(e, t, n, r) {
  var i = $e.hasOwnProperty(t) ? $e[t] : null;
  (i !== null
    ? i.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (hd(t, n, i, r) && (n = null),
    r || i === null
      ? dd(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
      : i.mustUseProperty
      ? (e[i.propertyName] = n === null ? (i.type === 3 ? !1 : "") : n)
      : ((t = i.attributeName),
        (r = i.attributeNamespace),
        n === null
          ? e.removeAttribute(t)
          : ((i = i.type),
            (n = i === 3 || (i === 4 && n === !0) ? "" : "" + n),
            r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var Ut = Rs.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  Jr = Symbol.for("react.element"),
  In = Symbol.for("react.portal"),
  Mn = Symbol.for("react.fragment"),
  Jl = Symbol.for("react.strict_mode"),
  Zi = Symbol.for("react.profiler"),
  js = Symbol.for("react.provider"),
  Ds = Symbol.for("react.context"),
  eu = Symbol.for("react.forward_ref"),
  qi = Symbol.for("react.suspense"),
  Ji = Symbol.for("react.suspense_list"),
  tu = Symbol.for("react.memo"),
  Vt = Symbol.for("react.lazy"),
  zs = Symbol.for("react.offscreen"),
  Ju = Symbol.iterator;
function ar(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Ju && e[Ju]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var be = Object.assign,
  wi;
function vr(e) {
  if (wi === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      wi = (t && t[1]) || "";
    }
  return (
    `
` +
    wi +
    e
  );
}
var xi = !1;
function ki(e, t) {
  if (!e || xi) return "";
  xi = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (b) {
          var r = b;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (b) {
          r = b;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (b) {
        r = b;
      }
      e();
    }
  } catch (b) {
    if (b && r && typeof b.stack == "string") {
      for (
        var i = b.stack.split(`
`),
          l = r.stack.split(`
`),
          c = i.length - 1,
          y = l.length - 1;
        1 <= c && 0 <= y && i[c] !== l[y];

      )
        y--;
      for (; 1 <= c && 0 <= y; c--, y--)
        if (i[c] !== l[y]) {
          if (c !== 1 || y !== 1)
            do
              if ((c--, y--, 0 > y || i[c] !== l[y])) {
                var x =
                  `
` + i[c].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    x.includes("<anonymous>") &&
                    (x = x.replace("<anonymous>", e.displayName)),
                  x
                );
              }
            while (1 <= c && 0 <= y);
          break;
        }
    }
  } finally {
    (xi = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "") ? vr(e) : "";
}
function md(e) {
  switch (e.tag) {
    case 5:
      return vr(e.type);
    case 16:
      return vr("Lazy");
    case 13:
      return vr("Suspense");
    case 19:
      return vr("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = ki(e.type, !1)), e;
    case 11:
      return (e = ki(e.type.render, !1)), e;
    case 1:
      return (e = ki(e.type, !0)), e;
    default:
      return "";
  }
}
function el(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case Mn:
      return "Fragment";
    case In:
      return "Portal";
    case Zi:
      return "Profiler";
    case Jl:
      return "StrictMode";
    case qi:
      return "Suspense";
    case Ji:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case Ds:
        return (e.displayName || "Context") + ".Consumer";
      case js:
        return (e._context.displayName || "Context") + ".Provider";
      case eu:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case tu:
        return (
          (t = e.displayName || null), t !== null ? t : el(e.type) || "Memo"
        );
      case Vt:
        (t = e._payload), (e = e._init);
        try {
          return el(e(t));
        } catch {}
    }
  return null;
}
function vd(e) {
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
      return (
        (e = t.render),
        (e = e.displayName || e.name || ""),
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
      );
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
      return el(t);
    case 8:
      return t === Jl ? "StrictMode" : "Mode";
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
function ln(e) {
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
function As(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function yd(e) {
  var t = As(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < "u" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var i = n.get,
      l = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return i.call(this);
        },
        set: function (c) {
          (r = "" + c), l.call(this, c);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (c) {
          r = "" + c;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function eo(e) {
  e._valueTracker || (e._valueTracker = yd(e));
}
function Fs(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = As(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function No(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function tl(e, t) {
  var n = t.checked;
  return be({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function ea(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = ln(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    });
}
function Bs(e, t) {
  (t = t.checked), t != null && ql(e, "checked", t, !1);
}
function nl(e, t) {
  Bs(e, t);
  var n = ln(t.value),
    r = t.type;
  if (n != null)
    r === "number"
      ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
      : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value")
    ? rl(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && rl(e, t.type, ln(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function ta(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (
      !(
        (r !== "submit" && r !== "reset") ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    (t = "" + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t);
  }
  (n = e.name),
    n !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== "" && (e.name = n);
}
function rl(e, t, n) {
  (t !== "number" || No(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var yr = Array.isArray;
function Hn(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var i = 0; i < n.length; i++) t["$" + n[i]] = !0;
    for (n = 0; n < e.length; n++)
      (i = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== i && (e[n].selected = i),
        i && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + ln(n), t = null, i = 0; i < e.length; i++) {
      if (e[i].value === n) {
        (e[i].selected = !0), r && (e[i].defaultSelected = !0);
        return;
      }
      t !== null || e[i].disabled || (t = e[i]);
    }
    t !== null && (t.selected = !0);
  }
}
function ol(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(te(91));
  return be({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function na(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(te(92));
      if (yr(n)) {
        if (1 < n.length) throw Error(te(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), (n = t);
  }
  e._wrapperState = { initialValue: ln(n) };
}
function Us(e, t) {
  var n = ln(t.value),
    r = ln(t.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r);
}
function ra(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function $s(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function il(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? $s(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : e;
}
var to,
  Hs = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, i) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, i);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = t;
    else {
      for (
        to = to || document.createElement("div"),
          to.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = to.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function Tr(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var xr = {
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
    strokeWidth: !0,
  },
  gd = ["Webkit", "ms", "Moz", "O"];
Object.keys(xr).forEach(function (e) {
  gd.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (xr[t] = xr[e]);
  });
});
function Ks(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (xr.hasOwnProperty(e) && xr[e])
    ? ("" + t).trim()
    : t + "px";
}
function Vs(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        i = Ks(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, i) : (e[n] = i);
    }
}
var wd = be(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  }
);
function ll(e, t) {
  if (t) {
    if (wd[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(te(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(te(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(te(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(te(62));
  }
}
function ul(e, t) {
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
var al = null;
function nu(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var sl = null,
  Kn = null,
  Vn = null;
function oa(e) {
  if ((e = Yr(e))) {
    if (typeof sl != "function") throw Error(te(280));
    var t = e.stateNode;
    t && ((t = ii(t)), sl(e.stateNode, e.type, t));
  }
}
function Xs(e) {
  Kn ? (Vn ? Vn.push(e) : (Vn = [e])) : (Kn = e);
}
function Ws() {
  if (Kn) {
    var e = Kn,
      t = Vn;
    if (((Vn = Kn = null), oa(e), t)) for (e = 0; e < t.length; e++) oa(t[e]);
  }
}
function Qs(e, t) {
  return e(t);
}
function Gs() {}
var Si = !1;
function Ys(e, t, n) {
  if (Si) return e(t, n);
  Si = !0;
  try {
    return Qs(e, t, n);
  } finally {
    (Si = !1), (Kn !== null || Vn !== null) && (Gs(), Ws());
  }
}
function Ir(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = ii(n);
  if (r === null) return null;
  n = r[t];
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
      (r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === "button" ||
          e === "input" ||
          e === "select" ||
          e === "textarea"
        ))),
        (e = !r);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(te(231, t, typeof n));
  return n;
}
var cl = !1;
if (zt)
  try {
    var sr = {};
    Object.defineProperty(sr, "passive", {
      get: function () {
        cl = !0;
      },
    }),
      window.addEventListener("test", sr, sr),
      window.removeEventListener("test", sr, sr);
  } catch {
    cl = !1;
  }
function xd(e, t, n, r, i, l, c, y, x) {
  var b = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, b);
  } catch (R) {
    this.onError(R);
  }
}
var kr = !1,
  To = null,
  Io = !1,
  fl = null,
  kd = {
    onError: function (e) {
      (kr = !0), (To = e);
    },
  };
function Sd(e, t, n, r, i, l, c, y, x) {
  (kr = !1), (To = null), xd.apply(kd, arguments);
}
function Ed(e, t, n, r, i, l, c, y, x) {
  if ((Sd.apply(this, arguments), kr)) {
    if (kr) {
      var b = To;
      (kr = !1), (To = null);
    } else throw Error(te(198));
    Io || ((Io = !0), (fl = b));
  }
}
function Pn(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function Zs(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated;
  }
  return null;
}
function ia(e) {
  if (Pn(e) !== e) throw Error(te(188));
}
function Cd(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = Pn(e)), t === null)) throw Error(te(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var i = n.return;
    if (i === null) break;
    var l = i.alternate;
    if (l === null) {
      if (((r = i.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (i.child === l.child) {
      for (l = i.child; l; ) {
        if (l === n) return ia(i), e;
        if (l === r) return ia(i), t;
        l = l.sibling;
      }
      throw Error(te(188));
    }
    if (n.return !== r.return) (n = i), (r = l);
    else {
      for (var c = !1, y = i.child; y; ) {
        if (y === n) {
          (c = !0), (n = i), (r = l);
          break;
        }
        if (y === r) {
          (c = !0), (r = i), (n = l);
          break;
        }
        y = y.sibling;
      }
      if (!c) {
        for (y = l.child; y; ) {
          if (y === n) {
            (c = !0), (n = l), (r = i);
            break;
          }
          if (y === r) {
            (c = !0), (r = l), (n = i);
            break;
          }
          y = y.sibling;
        }
        if (!c) throw Error(te(189));
      }
    }
    if (n.alternate !== r) throw Error(te(190));
  }
  if (n.tag !== 3) throw Error(te(188));
  return n.stateNode.current === n ? e : t;
}
function qs(e) {
  return (e = Cd(e)), e !== null ? Js(e) : null;
}
function Js(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = Js(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var ec = lt.unstable_scheduleCallback,
  la = lt.unstable_cancelCallback,
  Od = lt.unstable_shouldYield,
  Pd = lt.unstable_requestPaint,
  Ie = lt.unstable_now,
  bd = lt.unstable_getCurrentPriorityLevel,
  ru = lt.unstable_ImmediatePriority,
  tc = lt.unstable_UserBlockingPriority,
  Mo = lt.unstable_NormalPriority,
  _d = lt.unstable_LowPriority,
  nc = lt.unstable_IdlePriority,
  ti = null,
  Nt = null;
function Nd(e) {
  if (Nt && typeof Nt.onCommitFiberRoot == "function")
    try {
      Nt.onCommitFiberRoot(ti, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var kt = Math.clz32 ? Math.clz32 : Md,
  Td = Math.log,
  Id = Math.LN2;
function Md(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((Td(e) / Id) | 0)) | 0;
}
var no = 64,
  ro = 4194304;
function gr(e) {
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
function Ro(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    i = e.suspendedLanes,
    l = e.pingedLanes,
    c = n & 268435455;
  if (c !== 0) {
    var y = c & ~i;
    y !== 0 ? (r = gr(y)) : ((l &= c), l !== 0 && (r = gr(l)));
  } else (c = n & ~i), c !== 0 ? (r = gr(c)) : l !== 0 && (r = gr(l));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & i) &&
    ((i = r & -r), (l = t & -t), i >= l || (i === 16 && (l & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - kt(t)), (i = 1 << n), (r |= e[n]), (t &= ~i);
  return r;
}
function Rd(e, t) {
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
function Ld(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      i = e.expirationTimes,
      l = e.pendingLanes;
    0 < l;

  ) {
    var c = 31 - kt(l),
      y = 1 << c,
      x = i[c];
    x === -1
      ? (!(y & n) || y & r) && (i[c] = Rd(y, t))
      : x <= t && (e.expiredLanes |= y),
      (l &= ~y);
  }
}
function dl(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function rc() {
  var e = no;
  return (no <<= 1), !(no & 4194240) && (no = 64), e;
}
function Ei(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function Qr(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - kt(t)),
    (e[t] = n);
}
function jd(e, t) {
  var n = e.pendingLanes & ~t;
  (e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements);
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var i = 31 - kt(n),
      l = 1 << i;
    (t[i] = 0), (r[i] = -1), (e[i] = -1), (n &= ~l);
  }
}
function ou(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - kt(n),
      i = 1 << r;
    (i & t) | (e[r] & t) && (e[r] |= t), (n &= ~i);
  }
}
var ye = 0;
function oc(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var ic,
  iu,
  lc,
  uc,
  ac,
  pl = !1,
  oo = [],
  Zt = null,
  qt = null,
  Jt = null,
  Mr = new Map(),
  Rr = new Map(),
  Wt = [],
  Dd =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function ua(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      Zt = null;
      break;
    case "dragenter":
    case "dragleave":
      qt = null;
      break;
    case "mouseover":
    case "mouseout":
      Jt = null;
      break;
    case "pointerover":
    case "pointerout":
      Mr.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Rr.delete(t.pointerId);
  }
}
function cr(e, t, n, r, i, l) {
  return e === null || e.nativeEvent !== l
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: l,
        targetContainers: [i],
      }),
      t !== null && ((t = Yr(t)), t !== null && iu(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      i !== null && t.indexOf(i) === -1 && t.push(i),
      e);
}
function zd(e, t, n, r, i) {
  switch (t) {
    case "focusin":
      return (Zt = cr(Zt, e, t, n, r, i)), !0;
    case "dragenter":
      return (qt = cr(qt, e, t, n, r, i)), !0;
    case "mouseover":
      return (Jt = cr(Jt, e, t, n, r, i)), !0;
    case "pointerover":
      var l = i.pointerId;
      return Mr.set(l, cr(Mr.get(l) || null, e, t, n, r, i)), !0;
    case "gotpointercapture":
      return (
        (l = i.pointerId), Rr.set(l, cr(Rr.get(l) || null, e, t, n, r, i)), !0
      );
  }
  return !1;
}
function sc(e) {
  var t = mn(e.target);
  if (t !== null) {
    var n = Pn(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = Zs(n)), t !== null)) {
          (e.blockedOn = t),
            ac(e.priority, function () {
              lc(n);
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
function wo(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = hl(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (al = r), n.target.dispatchEvent(r), (al = null);
    } else return (t = Yr(n)), t !== null && iu(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function aa(e, t, n) {
  wo(e) && n.delete(t);
}
function Ad() {
  (pl = !1),
    Zt !== null && wo(Zt) && (Zt = null),
    qt !== null && wo(qt) && (qt = null),
    Jt !== null && wo(Jt) && (Jt = null),
    Mr.forEach(aa),
    Rr.forEach(aa);
}
function fr(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    pl ||
      ((pl = !0),
      lt.unstable_scheduleCallback(lt.unstable_NormalPriority, Ad)));
}
function Lr(e) {
  function t(i) {
    return fr(i, e);
  }
  if (0 < oo.length) {
    fr(oo[0], e);
    for (var n = 1; n < oo.length; n++) {
      var r = oo[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    Zt !== null && fr(Zt, e),
      qt !== null && fr(qt, e),
      Jt !== null && fr(Jt, e),
      Mr.forEach(t),
      Rr.forEach(t),
      n = 0;
    n < Wt.length;
    n++
  )
    (r = Wt[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < Wt.length && ((n = Wt[0]), n.blockedOn === null); )
    sc(n), n.blockedOn === null && Wt.shift();
}
var Xn = Ut.ReactCurrentBatchConfig,
  Lo = !0;
function Fd(e, t, n, r) {
  var i = ye,
    l = Xn.transition;
  Xn.transition = null;
  try {
    (ye = 1), lu(e, t, n, r);
  } finally {
    (ye = i), (Xn.transition = l);
  }
}
function Bd(e, t, n, r) {
  var i = ye,
    l = Xn.transition;
  Xn.transition = null;
  try {
    (ye = 4), lu(e, t, n, r);
  } finally {
    (ye = i), (Xn.transition = l);
  }
}
function lu(e, t, n, r) {
  if (Lo) {
    var i = hl(e, t, n, r);
    if (i === null) Ri(e, t, r, jo, n), ua(e, r);
    else if (zd(i, e, t, n, r)) r.stopPropagation();
    else if ((ua(e, r), t & 4 && -1 < Dd.indexOf(e))) {
      for (; i !== null; ) {
        var l = Yr(i);
        if (
          (l !== null && ic(l),
          (l = hl(e, t, n, r)),
          l === null && Ri(e, t, r, jo, n),
          l === i)
        )
          break;
        i = l;
      }
      i !== null && r.stopPropagation();
    } else Ri(e, t, r, null, n);
  }
}
var jo = null;
function hl(e, t, n, r) {
  if (((jo = null), (e = nu(r)), (e = mn(e)), e !== null))
    if (((t = Pn(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = Zs(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (jo = e), null;
}
function cc(e) {
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
      switch (bd()) {
        case ru:
          return 1;
        case tc:
          return 4;
        case Mo:
        case _d:
          return 16;
        case nc:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var Gt = null,
  uu = null,
  xo = null;
function fc() {
  if (xo) return xo;
  var e,
    t = uu,
    n = t.length,
    r,
    i = "value" in Gt ? Gt.value : Gt.textContent,
    l = i.length;
  for (e = 0; e < n && t[e] === i[e]; e++);
  var c = n - e;
  for (r = 1; r <= c && t[n - r] === i[l - r]; r++);
  return (xo = i.slice(e, 1 < r ? 1 - r : void 0));
}
function ko(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function io() {
  return !0;
}
function sa() {
  return !1;
}
function at(e) {
  function t(n, r, i, l, c) {
    (this._reactName = n),
      (this._targetInst = i),
      (this.type = r),
      (this.nativeEvent = l),
      (this.target = c),
      (this.currentTarget = null);
    for (var y in e)
      e.hasOwnProperty(y) && ((n = e[y]), (this[y] = n ? n(l) : l[y]));
    return (
      (this.isDefaultPrevented = (
        l.defaultPrevented != null ? l.defaultPrevented : l.returnValue === !1
      )
        ? io
        : sa),
      (this.isPropagationStopped = sa),
      this
    );
  }
  return (
    be(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = io));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = io));
      },
      persist: function () {},
      isPersistent: io,
    }),
    t
  );
}
var lr = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  au = at(lr),
  Gr = be({}, lr, { view: 0, detail: 0 }),
  Ud = at(Gr),
  Ci,
  Oi,
  dr,
  ni = be({}, Gr, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: su,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return "movementX" in e
        ? e.movementX
        : (e !== dr &&
            (dr && e.type === "mousemove"
              ? ((Ci = e.screenX - dr.screenX), (Oi = e.screenY - dr.screenY))
              : (Oi = Ci = 0),
            (dr = e)),
          Ci);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : Oi;
    },
  }),
  ca = at(ni),
  $d = be({}, ni, { dataTransfer: 0 }),
  Hd = at($d),
  Kd = be({}, Gr, { relatedTarget: 0 }),
  Pi = at(Kd),
  Vd = be({}, lr, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Xd = at(Vd),
  Wd = be({}, lr, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  Qd = at(Wd),
  Gd = be({}, lr, { data: 0 }),
  fa = at(Gd),
  Yd = {
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
    MozPrintableKey: "Unidentified",
  },
  Zd = {
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
    224: "Meta",
  },
  qd = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function Jd(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = qd[e]) ? !!t[e] : !1;
}
function su() {
  return Jd;
}
var ep = be({}, Gr, {
    key: function (e) {
      if (e.key) {
        var t = Yd[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = ko(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
        ? Zd[e.keyCode] || "Unidentified"
        : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: su,
    charCode: function (e) {
      return e.type === "keypress" ? ko(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? ko(e)
        : e.type === "keydown" || e.type === "keyup"
        ? e.keyCode
        : 0;
    },
  }),
  tp = at(ep),
  np = be({}, ni, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  da = at(np),
  rp = be({}, Gr, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: su,
  }),
  op = at(rp),
  ip = be({}, lr, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  lp = at(ip),
  up = be({}, ni, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return "deltaY" in e
        ? e.deltaY
        : "wheelDeltaY" in e
        ? -e.wheelDeltaY
        : "wheelDelta" in e
        ? -e.wheelDelta
        : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  ap = at(up),
  sp = [9, 13, 27, 32],
  cu = zt && "CompositionEvent" in window,
  Sr = null;
zt && "documentMode" in document && (Sr = document.documentMode);
var cp = zt && "TextEvent" in window && !Sr,
  dc = zt && (!cu || (Sr && 8 < Sr && 11 >= Sr)),
  pa = " ",
  ha = !1;
function pc(e, t) {
  switch (e) {
    case "keyup":
      return sp.indexOf(t.keyCode) !== -1;
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
function hc(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var Rn = !1;
function fp(e, t) {
  switch (e) {
    case "compositionend":
      return hc(t);
    case "keypress":
      return t.which !== 32 ? null : ((ha = !0), pa);
    case "textInput":
      return (e = t.data), e === pa && ha ? null : e;
    default:
      return null;
  }
}
function dp(e, t) {
  if (Rn)
    return e === "compositionend" || (!cu && pc(e, t))
      ? ((e = fc()), (xo = uu = Gt = null), (Rn = !1), e)
      : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return dc && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var pp = {
  color: !0,
  date: !0,
  datetime: !0,
  "datetime-local": !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
};
function ma(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!pp[e.type] : t === "textarea";
}
function mc(e, t, n, r) {
  Xs(r),
    (t = Do(t, "onChange")),
    0 < t.length &&
      ((n = new au("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t }));
}
var Er = null,
  jr = null;
function hp(e) {
  Pc(e, 0);
}
function ri(e) {
  var t = Dn(e);
  if (Fs(t)) return e;
}
function mp(e, t) {
  if (e === "change") return t;
}
var vc = !1;
if (zt) {
  var bi;
  if (zt) {
    var _i = "oninput" in document;
    if (!_i) {
      var va = document.createElement("div");
      va.setAttribute("oninput", "return;"),
        (_i = typeof va.oninput == "function");
    }
    bi = _i;
  } else bi = !1;
  vc = bi && (!document.documentMode || 9 < document.documentMode);
}
function ya() {
  Er && (Er.detachEvent("onpropertychange", yc), (jr = Er = null));
}
function yc(e) {
  if (e.propertyName === "value" && ri(jr)) {
    var t = [];
    mc(t, jr, e, nu(e)), Ys(hp, t);
  }
}
function vp(e, t, n) {
  e === "focusin"
    ? (ya(), (Er = t), (jr = n), Er.attachEvent("onpropertychange", yc))
    : e === "focusout" && ya();
}
function yp(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return ri(jr);
}
function gp(e, t) {
  if (e === "click") return ri(t);
}
function wp(e, t) {
  if (e === "input" || e === "change") return ri(t);
}
function xp(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var Et = typeof Object.is == "function" ? Object.is : xp;
function Dr(e, t) {
  if (Et(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var i = n[r];
    if (!Yi.call(t, i) || !Et(e[i], t[i])) return !1;
  }
  return !0;
}
function ga(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function wa(e, t) {
  var n = ga(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t))
        return { node: n, offset: t - e };
      e = r;
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
    n = ga(n);
  }
}
function gc(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? gc(e, t.parentNode)
      : "contains" in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function wc() {
  for (var e = window, t = No(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = No(e.document);
  }
  return t;
}
function fu(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === "input" &&
      (e.type === "text" ||
        e.type === "search" ||
        e.type === "tel" ||
        e.type === "url" ||
        e.type === "password")) ||
      t === "textarea" ||
      e.contentEditable === "true")
  );
}
function kp(e) {
  var t = wc(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    gc(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && fu(n)) {
      if (
        ((t = r.start),
        (e = r.end),
        e === void 0 && (e = t),
        "selectionStart" in n)
      )
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var i = n.textContent.length,
          l = Math.min(r.start, i);
        (r = r.end === void 0 ? l : Math.min(r.end, i)),
          !e.extend && l > r && ((i = r), (r = l), (l = i)),
          (i = wa(n, l));
        var c = wa(n, r);
        i &&
          c &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== i.node ||
            e.anchorOffset !== i.offset ||
            e.focusNode !== c.node ||
            e.focusOffset !== c.offset) &&
          ((t = t.createRange()),
          t.setStart(i.node, i.offset),
          e.removeAllRanges(),
          l > r
            ? (e.addRange(t), e.extend(c.node, c.offset))
            : (t.setEnd(c.node, c.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
      (e = t[n]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top);
  }
}
var Sp = zt && "documentMode" in document && 11 >= document.documentMode,
  Ln = null,
  ml = null,
  Cr = null,
  vl = !1;
function xa(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  vl ||
    Ln == null ||
    Ln !== No(r) ||
    ((r = Ln),
    "selectionStart" in r && fu(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (Cr && Dr(Cr, r)) ||
      ((Cr = r),
      (r = Do(ml, "onSelect")),
      0 < r.length &&
        ((t = new au("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = Ln))));
}
function lo(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var jn = {
    animationend: lo("Animation", "AnimationEnd"),
    animationiteration: lo("Animation", "AnimationIteration"),
    animationstart: lo("Animation", "AnimationStart"),
    transitionend: lo("Transition", "TransitionEnd"),
  },
  Ni = {},
  xc = {};
zt &&
  ((xc = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete jn.animationend.animation,
    delete jn.animationiteration.animation,
    delete jn.animationstart.animation),
  "TransitionEvent" in window || delete jn.transitionend.transition);
function oi(e) {
  if (Ni[e]) return Ni[e];
  if (!jn[e]) return e;
  var t = jn[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in xc) return (Ni[e] = t[n]);
  return e;
}
var kc = oi("animationend"),
  Sc = oi("animationiteration"),
  Ec = oi("animationstart"),
  Cc = oi("transitionend"),
  Oc = new Map(),
  ka =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function an(e, t) {
  Oc.set(e, t), On(t, [e]);
}
for (var Ti = 0; Ti < ka.length; Ti++) {
  var Ii = ka[Ti],
    Ep = Ii.toLowerCase(),
    Cp = Ii[0].toUpperCase() + Ii.slice(1);
  an(Ep, "on" + Cp);
}
an(kc, "onAnimationEnd");
an(Sc, "onAnimationIteration");
an(Ec, "onAnimationStart");
an("dblclick", "onDoubleClick");
an("focusin", "onFocus");
an("focusout", "onBlur");
an(Cc, "onTransitionEnd");
Yn("onMouseEnter", ["mouseout", "mouseover"]);
Yn("onMouseLeave", ["mouseout", "mouseover"]);
Yn("onPointerEnter", ["pointerout", "pointerover"]);
Yn("onPointerLeave", ["pointerout", "pointerover"]);
On(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(" ")
);
On(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " "
  )
);
On("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
On(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
On(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
On(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var wr =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  Op = new Set("cancel close invalid load scroll toggle".split(" ").concat(wr));
function Sa(e, t, n) {
  var r = e.type || "unknown-event";
  (e.currentTarget = n), Ed(r, t, void 0, e), (e.currentTarget = null);
}
function Pc(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      i = r.event;
    r = r.listeners;
    e: {
      var l = void 0;
      if (t)
        for (var c = r.length - 1; 0 <= c; c--) {
          var y = r[c],
            x = y.instance,
            b = y.currentTarget;
          if (((y = y.listener), x !== l && i.isPropagationStopped())) break e;
          Sa(i, y, b), (l = x);
        }
      else
        for (c = 0; c < r.length; c++) {
          if (
            ((y = r[c]),
            (x = y.instance),
            (b = y.currentTarget),
            (y = y.listener),
            x !== l && i.isPropagationStopped())
          )
            break e;
          Sa(i, y, b), (l = x);
        }
    }
  }
  if (Io) throw ((e = fl), (Io = !1), (fl = null), e);
}
function xe(e, t) {
  var n = t[kl];
  n === void 0 && (n = t[kl] = new Set());
  var r = e + "__bubble";
  n.has(r) || (bc(t, e, 2, !1), n.add(r));
}
function Mi(e, t, n) {
  var r = 0;
  t && (r |= 4), bc(n, e, r, t);
}
var uo = "_reactListening" + Math.random().toString(36).slice(2);
function zr(e) {
  if (!e[uo]) {
    (e[uo] = !0),
      Ls.forEach(function (n) {
        n !== "selectionchange" && (Op.has(n) || Mi(n, !1, e), Mi(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[uo] || ((t[uo] = !0), Mi("selectionchange", !1, t));
  }
}
function bc(e, t, n, r) {
  switch (cc(t)) {
    case 1:
      var i = Fd;
      break;
    case 4:
      i = Bd;
      break;
    default:
      i = lu;
  }
  (n = i.bind(null, t, n, e)),
    (i = void 0),
    !cl ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (i = !0),
    r
      ? i !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: i })
        : e.addEventListener(t, n, !0)
      : i !== void 0
      ? e.addEventListener(t, n, { passive: i })
      : e.addEventListener(t, n, !1);
}
function Ri(e, t, n, r, i) {
  var l = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var c = r.tag;
      if (c === 3 || c === 4) {
        var y = r.stateNode.containerInfo;
        if (y === i || (y.nodeType === 8 && y.parentNode === i)) break;
        if (c === 4)
          for (c = r.return; c !== null; ) {
            var x = c.tag;
            if (
              (x === 3 || x === 4) &&
              ((x = c.stateNode.containerInfo),
              x === i || (x.nodeType === 8 && x.parentNode === i))
            )
              return;
            c = c.return;
          }
        for (; y !== null; ) {
          if (((c = mn(y)), c === null)) return;
          if (((x = c.tag), x === 5 || x === 6)) {
            r = l = c;
            continue e;
          }
          y = y.parentNode;
        }
      }
      r = r.return;
    }
  Ys(function () {
    var b = l,
      R = nu(n),
      F = [];
    e: {
      var f = Oc.get(e);
      if (f !== void 0) {
        var k = au,
          o = e;
        switch (e) {
          case "keypress":
            if (ko(n) === 0) break e;
          case "keydown":
          case "keyup":
            k = tp;
            break;
          case "focusin":
            (o = "focus"), (k = Pi);
            break;
          case "focusout":
            (o = "blur"), (k = Pi);
            break;
          case "beforeblur":
          case "afterblur":
            k = Pi;
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
            k = ca;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            k = Hd;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            k = op;
            break;
          case kc:
          case Sc:
          case Ec:
            k = Xd;
            break;
          case Cc:
            k = lp;
            break;
          case "scroll":
            k = Ud;
            break;
          case "wheel":
            k = ap;
            break;
          case "copy":
          case "cut":
          case "paste":
            k = Qd;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            k = da;
        }
        var s = (t & 4) !== 0,
          h = !s && e === "scroll",
          u = s ? (f !== null ? f + "Capture" : null) : f;
        s = [];
        for (var a = b, p; a !== null; ) {
          p = a;
          var m = p.stateNode;
          if (
            (p.tag === 5 &&
              m !== null &&
              ((p = m),
              u !== null && ((m = Ir(a, u)), m != null && s.push(Ar(a, m, p)))),
            h)
          )
            break;
          a = a.return;
        }
        0 < s.length &&
          ((f = new k(f, o, null, n, R)), F.push({ event: f, listeners: s }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((f = e === "mouseover" || e === "pointerover"),
          (k = e === "mouseout" || e === "pointerout"),
          f &&
            n !== al &&
            (o = n.relatedTarget || n.fromElement) &&
            (mn(o) || o[At]))
        )
          break e;
        if (
          (k || f) &&
          ((f =
            R.window === R
              ? R
              : (f = R.ownerDocument)
              ? f.defaultView || f.parentWindow
              : window),
          k
            ? ((o = n.relatedTarget || n.toElement),
              (k = b),
              (o = o ? mn(o) : null),
              o !== null &&
                ((h = Pn(o)), o !== h || (o.tag !== 5 && o.tag !== 6)) &&
                (o = null))
            : ((k = null), (o = b)),
          k !== o)
        ) {
          if (
            ((s = ca),
            (m = "onMouseLeave"),
            (u = "onMouseEnter"),
            (a = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((s = da),
              (m = "onPointerLeave"),
              (u = "onPointerEnter"),
              (a = "pointer")),
            (h = k == null ? f : Dn(k)),
            (p = o == null ? f : Dn(o)),
            (f = new s(m, a + "leave", k, n, R)),
            (f.target = h),
            (f.relatedTarget = p),
            (m = null),
            mn(R) === b &&
              ((s = new s(u, a + "enter", o, n, R)),
              (s.target = p),
              (s.relatedTarget = h),
              (m = s)),
            (h = m),
            k && o)
          )
            t: {
              for (s = k, u = o, a = 0, p = s; p; p = Tn(p)) a++;
              for (p = 0, m = u; m; m = Tn(m)) p++;
              for (; 0 < a - p; ) (s = Tn(s)), a--;
              for (; 0 < p - a; ) (u = Tn(u)), p--;
              for (; a--; ) {
                if (s === u || (u !== null && s === u.alternate)) break t;
                (s = Tn(s)), (u = Tn(u));
              }
              s = null;
            }
          else s = null;
          k !== null && Ea(F, f, k, s, !1),
            o !== null && h !== null && Ea(F, h, o, s, !0);
        }
      }
      e: {
        if (
          ((f = b ? Dn(b) : window),
          (k = f.nodeName && f.nodeName.toLowerCase()),
          k === "select" || (k === "input" && f.type === "file"))
        )
          var d = mp;
        else if (ma(f))
          if (vc) d = wp;
          else {
            d = yp;
            var w = vp;
          }
        else
          (k = f.nodeName) &&
            k.toLowerCase() === "input" &&
            (f.type === "checkbox" || f.type === "radio") &&
            (d = gp);
        if (d && (d = d(e, b))) {
          mc(F, d, n, R);
          break e;
        }
        w && w(e, f, b),
          e === "focusout" &&
            (w = f._wrapperState) &&
            w.controlled &&
            f.type === "number" &&
            rl(f, "number", f.value);
      }
      switch (((w = b ? Dn(b) : window), e)) {
        case "focusin":
          (ma(w) || w.contentEditable === "true") &&
            ((Ln = w), (ml = b), (Cr = null));
          break;
        case "focusout":
          Cr = ml = Ln = null;
          break;
        case "mousedown":
          vl = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (vl = !1), xa(F, n, R);
          break;
        case "selectionchange":
          if (Sp) break;
        case "keydown":
        case "keyup":
          xa(F, n, R);
      }
      var g;
      if (cu)
        e: {
          switch (e) {
            case "compositionstart":
              var E = "onCompositionStart";
              break e;
            case "compositionend":
              E = "onCompositionEnd";
              break e;
            case "compositionupdate":
              E = "onCompositionUpdate";
              break e;
          }
          E = void 0;
        }
      else
        Rn
          ? pc(e, n) && (E = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (E = "onCompositionStart");
      E &&
        (dc &&
          n.locale !== "ko" &&
          (Rn || E !== "onCompositionStart"
            ? E === "onCompositionEnd" && Rn && (g = fc())
            : ((Gt = R),
              (uu = "value" in Gt ? Gt.value : Gt.textContent),
              (Rn = !0))),
        (w = Do(b, E)),
        0 < w.length &&
          ((E = new fa(E, e, null, n, R)),
          F.push({ event: E, listeners: w }),
          g ? (E.data = g) : ((g = hc(n)), g !== null && (E.data = g)))),
        (g = cp ? fp(e, n) : dp(e, n)) &&
          ((b = Do(b, "onBeforeInput")),
          0 < b.length &&
            ((R = new fa("onBeforeInput", "beforeinput", null, n, R)),
            F.push({ event: R, listeners: b }),
            (R.data = g)));
    }
    Pc(F, t);
  });
}
function Ar(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function Do(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var i = e,
      l = i.stateNode;
    i.tag === 5 &&
      l !== null &&
      ((i = l),
      (l = Ir(e, n)),
      l != null && r.unshift(Ar(e, l, i)),
      (l = Ir(e, t)),
      l != null && r.push(Ar(e, l, i))),
      (e = e.return);
  }
  return r;
}
function Tn(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function Ea(e, t, n, r, i) {
  for (var l = t._reactName, c = []; n !== null && n !== r; ) {
    var y = n,
      x = y.alternate,
      b = y.stateNode;
    if (x !== null && x === r) break;
    y.tag === 5 &&
      b !== null &&
      ((y = b),
      i
        ? ((x = Ir(n, l)), x != null && c.unshift(Ar(n, x, y)))
        : i || ((x = Ir(n, l)), x != null && c.push(Ar(n, x, y)))),
      (n = n.return);
  }
  c.length !== 0 && e.push({ event: t, listeners: c });
}
var Pp = /\r\n?/g,
  bp = /\u0000|\uFFFD/g;
function Ca(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      Pp,
      `
`
    )
    .replace(bp, "");
}
function ao(e, t, n) {
  if (((t = Ca(t)), Ca(e) !== t && n)) throw Error(te(425));
}
function zo() {}
var yl = null,
  gl = null;
function wl(e, t) {
  return (
    e === "textarea" ||
    e === "noscript" ||
    typeof t.children == "string" ||
    typeof t.children == "number" ||
    (typeof t.dangerouslySetInnerHTML == "object" &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var xl = typeof setTimeout == "function" ? setTimeout : void 0,
  _p = typeof clearTimeout == "function" ? clearTimeout : void 0,
  Oa = typeof Promise == "function" ? Promise : void 0,
  Np =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof Oa < "u"
      ? function (e) {
          return Oa.resolve(null).then(e).catch(Tp);
        }
      : xl;
function Tp(e) {
  setTimeout(function () {
    throw e;
  });
}
function Li(e, t) {
  var n = t,
    r = 0;
  do {
    var i = n.nextSibling;
    if ((e.removeChild(n), i && i.nodeType === 8))
      if (((n = i.data), n === "/$")) {
        if (r === 0) {
          e.removeChild(i), Lr(t);
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = i;
  } while (n);
  Lr(t);
}
function en(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function Pa(e) {
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
var ur = Math.random().toString(36).slice(2),
  _t = "__reactFiber$" + ur,
  Fr = "__reactProps$" + ur,
  At = "__reactContainer$" + ur,
  kl = "__reactEvents$" + ur,
  Ip = "__reactListeners$" + ur,
  Mp = "__reactHandles$" + ur;
function mn(e) {
  var t = e[_t];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[At] || n[_t])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = Pa(e); e !== null; ) {
          if ((n = e[_t])) return n;
          e = Pa(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function Yr(e) {
  return (
    (e = e[_t] || e[At]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function Dn(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(te(33));
}
function ii(e) {
  return e[Fr] || null;
}
var Sl = [],
  zn = -1;
function sn(e) {
  return { current: e };
}
function ke(e) {
  0 > zn || ((e.current = Sl[zn]), (Sl[zn] = null), zn--);
}
function we(e, t) {
  zn++, (Sl[zn] = e.current), (e.current = t);
}
var un = {},
  Xe = sn(un),
  et = sn(!1),
  xn = un;
function Zn(e, t) {
  var n = e.type.contextTypes;
  if (!n) return un;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var i = {},
    l;
  for (l in n) i[l] = t[l];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    i
  );
}
function tt(e) {
  return (e = e.childContextTypes), e != null;
}
function Ao() {
  ke(et), ke(Xe);
}
function ba(e, t, n) {
  if (Xe.current !== un) throw Error(te(168));
  we(Xe, t), we(et, n);
}
function _c(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var i in r) if (!(i in t)) throw Error(te(108, vd(e) || "Unknown", i));
  return be({}, n, r);
}
function Fo(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || un),
    (xn = Xe.current),
    we(Xe, e),
    we(et, et.current),
    !0
  );
}
function _a(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(te(169));
  n
    ? ((e = _c(e, t, xn)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      ke(et),
      ke(Xe),
      we(Xe, e))
    : ke(et),
    we(et, n);
}
var Rt = null,
  li = !1,
  ji = !1;
function Nc(e) {
  Rt === null ? (Rt = [e]) : Rt.push(e);
}
function Rp(e) {
  (li = !0), Nc(e);
}
function cn() {
  if (!ji && Rt !== null) {
    ji = !0;
    var e = 0,
      t = ye;
    try {
      var n = Rt;
      for (ye = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (Rt = null), (li = !1);
    } catch (i) {
      throw (Rt !== null && (Rt = Rt.slice(e + 1)), ec(ru, cn), i);
    } finally {
      (ye = t), (ji = !1);
    }
  }
  return null;
}
var An = [],
  Fn = 0,
  Bo = null,
  Uo = 0,
  st = [],
  ct = 0,
  kn = null,
  Lt = 1,
  jt = "";
function pn(e, t) {
  (An[Fn++] = Uo), (An[Fn++] = Bo), (Bo = e), (Uo = t);
}
function Tc(e, t, n) {
  (st[ct++] = Lt), (st[ct++] = jt), (st[ct++] = kn), (kn = e);
  var r = Lt;
  e = jt;
  var i = 32 - kt(r) - 1;
  (r &= ~(1 << i)), (n += 1);
  var l = 32 - kt(t) + i;
  if (30 < l) {
    var c = i - (i % 5);
    (l = (r & ((1 << c) - 1)).toString(32)),
      (r >>= c),
      (i -= c),
      (Lt = (1 << (32 - kt(t) + i)) | (n << i) | r),
      (jt = l + e);
  } else (Lt = (1 << l) | (n << i) | r), (jt = e);
}
function du(e) {
  e.return !== null && (pn(e, 1), Tc(e, 1, 0));
}
function pu(e) {
  for (; e === Bo; )
    (Bo = An[--Fn]), (An[Fn] = null), (Uo = An[--Fn]), (An[Fn] = null);
  for (; e === kn; )
    (kn = st[--ct]),
      (st[ct] = null),
      (jt = st[--ct]),
      (st[ct] = null),
      (Lt = st[--ct]),
      (st[ct] = null);
}
var it = null,
  ot = null,
  Ce = !1,
  xt = null;
function Ic(e, t) {
  var n = ft(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function Na(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (it = e), (ot = en(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (it = e), (ot = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = kn !== null ? { id: Lt, overflow: jt } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = ft(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (it = e),
            (ot = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function El(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Cl(e) {
  if (Ce) {
    var t = ot;
    if (t) {
      var n = t;
      if (!Na(e, t)) {
        if (El(e)) throw Error(te(418));
        t = en(n.nextSibling);
        var r = it;
        t && Na(e, t)
          ? Ic(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (Ce = !1), (it = e));
      }
    } else {
      if (El(e)) throw Error(te(418));
      (e.flags = (e.flags & -4097) | 2), (Ce = !1), (it = e);
    }
  }
}
function Ta(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  it = e;
}
function so(e) {
  if (e !== it) return !1;
  if (!Ce) return Ta(e), (Ce = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !wl(e.type, e.memoizedProps))),
    t && (t = ot))
  ) {
    if (El(e)) throw (Mc(), Error(te(418)));
    for (; t; ) Ic(e, t), (t = en(t.nextSibling));
  }
  if ((Ta(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(te(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              ot = en(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      ot = null;
    }
  } else ot = it ? en(e.stateNode.nextSibling) : null;
  return !0;
}
function Mc() {
  for (var e = ot; e; ) e = en(e.nextSibling);
}
function qn() {
  (ot = it = null), (Ce = !1);
}
function hu(e) {
  xt === null ? (xt = [e]) : xt.push(e);
}
var Lp = Ut.ReactCurrentBatchConfig;
function gt(e, t) {
  if (e && e.defaultProps) {
    (t = be({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
var $o = sn(null),
  Ho = null,
  Bn = null,
  mu = null;
function vu() {
  mu = Bn = Ho = null;
}
function yu(e) {
  var t = $o.current;
  ke($o), (e._currentValue = t);
}
function Ol(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function Wn(e, t) {
  (Ho = e),
    (mu = Bn = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (Je = !0), (e.firstContext = null));
}
function pt(e) {
  var t = e._currentValue;
  if (mu !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), Bn === null)) {
      if (Ho === null) throw Error(te(308));
      (Bn = e), (Ho.dependencies = { lanes: 0, firstContext: e });
    } else Bn = Bn.next = e;
  return t;
}
var vn = null;
function gu(e) {
  vn === null ? (vn = [e]) : vn.push(e);
}
function Rc(e, t, n, r) {
  var i = t.interleaved;
  return (
    i === null ? ((n.next = n), gu(t)) : ((n.next = i.next), (i.next = n)),
    (t.interleaved = n),
    Ft(e, r)
  );
}
function Ft(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return);
  return n.tag === 3 ? n.stateNode : null;
}
var Xt = !1;
function wu(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function Lc(e, t) {
  (e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function Dt(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function tn(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), ve & 2)) {
    var i = r.pending;
    return (
      i === null ? (t.next = t) : ((t.next = i.next), (i.next = t)),
      (r.pending = t),
      Ft(e, n)
    );
  }
  return (
    (i = r.interleaved),
    i === null ? ((t.next = t), gu(r)) : ((t.next = i.next), (i.next = t)),
    (r.interleaved = t),
    Ft(e, n)
  );
}
function So(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), ou(e, n);
  }
}
function Ia(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var i = null,
      l = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var c = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        l === null ? (i = l = c) : (l = l.next = c), (n = n.next);
      } while (n !== null);
      l === null ? (i = l = t) : (l = l.next = t);
    } else i = l = t;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: i,
      lastBaseUpdate: l,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n);
    return;
  }
  (e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t);
}
function Ko(e, t, n, r) {
  var i = e.updateQueue;
  Xt = !1;
  var l = i.firstBaseUpdate,
    c = i.lastBaseUpdate,
    y = i.shared.pending;
  if (y !== null) {
    i.shared.pending = null;
    var x = y,
      b = x.next;
    (x.next = null), c === null ? (l = b) : (c.next = b), (c = x);
    var R = e.alternate;
    R !== null &&
      ((R = R.updateQueue),
      (y = R.lastBaseUpdate),
      y !== c &&
        (y === null ? (R.firstBaseUpdate = b) : (y.next = b),
        (R.lastBaseUpdate = x)));
  }
  if (l !== null) {
    var F = i.baseState;
    (c = 0), (R = b = x = null), (y = l);
    do {
      var f = y.lane,
        k = y.eventTime;
      if ((r & f) === f) {
        R !== null &&
          (R = R.next =
            {
              eventTime: k,
              lane: 0,
              tag: y.tag,
              payload: y.payload,
              callback: y.callback,
              next: null,
            });
        e: {
          var o = e,
            s = y;
          switch (((f = t), (k = n), s.tag)) {
            case 1:
              if (((o = s.payload), typeof o == "function")) {
                F = o.call(k, F, f);
                break e;
              }
              F = o;
              break e;
            case 3:
              o.flags = (o.flags & -65537) | 128;
            case 0:
              if (
                ((o = s.payload),
                (f = typeof o == "function" ? o.call(k, F, f) : o),
                f == null)
              )
                break e;
              F = be({}, F, f);
              break e;
            case 2:
              Xt = !0;
          }
        }
        y.callback !== null &&
          y.lane !== 0 &&
          ((e.flags |= 64),
          (f = i.effects),
          f === null ? (i.effects = [y]) : f.push(y));
      } else
        (k = {
          eventTime: k,
          lane: f,
          tag: y.tag,
          payload: y.payload,
          callback: y.callback,
          next: null,
        }),
          R === null ? ((b = R = k), (x = F)) : (R = R.next = k),
          (c |= f);
      if (((y = y.next), y === null)) {
        if (((y = i.shared.pending), y === null)) break;
        (f = y),
          (y = f.next),
          (f.next = null),
          (i.lastBaseUpdate = f),
          (i.shared.pending = null);
      }
    } while (!0);
    if (
      (R === null && (x = F),
      (i.baseState = x),
      (i.firstBaseUpdate = b),
      (i.lastBaseUpdate = R),
      (t = i.shared.interleaved),
      t !== null)
    ) {
      i = t;
      do (c |= i.lane), (i = i.next);
      while (i !== t);
    } else l === null && (i.shared.lanes = 0);
    (En |= c), (e.lanes = c), (e.memoizedState = F);
  }
}
function Ma(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        i = r.callback;
      if (i !== null) {
        if (((r.callback = null), (r = n), typeof i != "function"))
          throw Error(te(191, i));
        i.call(r);
      }
    }
}
var jc = new Rs.Component().refs;
function Pl(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : be({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var ui = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? Pn(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = Ge(),
      i = rn(e),
      l = Dt(r, i);
    (l.payload = t),
      n != null && (l.callback = n),
      (t = tn(e, l, i)),
      t !== null && (St(t, e, i, r), So(t, e, i));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = Ge(),
      i = rn(e),
      l = Dt(r, i);
    (l.tag = 1),
      (l.payload = t),
      n != null && (l.callback = n),
      (t = tn(e, l, i)),
      t !== null && (St(t, e, i, r), So(t, e, i));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = Ge(),
      r = rn(e),
      i = Dt(n, r);
    (i.tag = 2),
      t != null && (i.callback = t),
      (t = tn(e, i, r)),
      t !== null && (St(t, e, r, n), So(t, e, r));
  },
};
function Ra(e, t, n, r, i, l, c) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, l, c)
      : t.prototype && t.prototype.isPureReactComponent
      ? !Dr(n, r) || !Dr(i, l)
      : !0
  );
}
function Dc(e, t, n) {
  var r = !1,
    i = un,
    l = t.contextType;
  return (
    typeof l == "object" && l !== null
      ? (l = pt(l))
      : ((i = tt(t) ? xn : Xe.current),
        (r = t.contextTypes),
        (l = (r = r != null) ? Zn(e, i) : un)),
    (t = new t(n, l)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = ui),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = i),
      (e.__reactInternalMemoizedMaskedChildContext = l)),
    t
  );
}
function La(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && ui.enqueueReplaceState(t, t.state, null);
}
function bl(e, t, n, r) {
  var i = e.stateNode;
  (i.props = n), (i.state = e.memoizedState), (i.refs = jc), wu(e);
  var l = t.contextType;
  typeof l == "object" && l !== null
    ? (i.context = pt(l))
    : ((l = tt(t) ? xn : Xe.current), (i.context = Zn(e, l))),
    (i.state = e.memoizedState),
    (l = t.getDerivedStateFromProps),
    typeof l == "function" && (Pl(e, t, l, n), (i.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof i.getSnapshotBeforeUpdate == "function" ||
      (typeof i.UNSAFE_componentWillMount != "function" &&
        typeof i.componentWillMount != "function") ||
      ((t = i.state),
      typeof i.componentWillMount == "function" && i.componentWillMount(),
      typeof i.UNSAFE_componentWillMount == "function" &&
        i.UNSAFE_componentWillMount(),
      t !== i.state && ui.enqueueReplaceState(i, i.state, null),
      Ko(e, n, i, r),
      (i.state = e.memoizedState)),
    typeof i.componentDidMount == "function" && (e.flags |= 4194308);
}
function pr(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(te(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(te(147, e));
      var i = r,
        l = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === l
        ? t.ref
        : ((t = function (c) {
            var y = i.refs;
            y === jc && (y = i.refs = {}),
              c === null ? delete y[l] : (y[l] = c);
          }),
          (t._stringRef = l),
          t);
    }
    if (typeof e != "string") throw Error(te(284));
    if (!n._owner) throw Error(te(290, e));
  }
  return e;
}
function co(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      te(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e
      )
    ))
  );
}
function ja(e) {
  var t = e._init;
  return t(e._payload);
}
function zc(e) {
  function t(u, a) {
    if (e) {
      var p = u.deletions;
      p === null ? ((u.deletions = [a]), (u.flags |= 16)) : p.push(a);
    }
  }
  function n(u, a) {
    if (!e) return null;
    for (; a !== null; ) t(u, a), (a = a.sibling);
    return null;
  }
  function r(u, a) {
    for (u = new Map(); a !== null; )
      a.key !== null ? u.set(a.key, a) : u.set(a.index, a), (a = a.sibling);
    return u;
  }
  function i(u, a) {
    return (u = on(u, a)), (u.index = 0), (u.sibling = null), u;
  }
  function l(u, a, p) {
    return (
      (u.index = p),
      e
        ? ((p = u.alternate),
          p !== null
            ? ((p = p.index), p < a ? ((u.flags |= 2), a) : p)
            : ((u.flags |= 2), a))
        : ((u.flags |= 1048576), a)
    );
  }
  function c(u) {
    return e && u.alternate === null && (u.flags |= 2), u;
  }
  function y(u, a, p, m) {
    return a === null || a.tag !== 6
      ? ((a = $i(p, u.mode, m)), (a.return = u), a)
      : ((a = i(a, p)), (a.return = u), a);
  }
  function x(u, a, p, m) {
    var d = p.type;
    return d === Mn
      ? R(u, a, p.props.children, m, p.key)
      : a !== null &&
        (a.elementType === d ||
          (typeof d == "object" &&
            d !== null &&
            d.$$typeof === Vt &&
            ja(d) === a.type))
      ? ((m = i(a, p.props)), (m.ref = pr(u, a, p)), (m.return = u), m)
      : ((m = _o(p.type, p.key, p.props, null, u.mode, m)),
        (m.ref = pr(u, a, p)),
        (m.return = u),
        m);
  }
  function b(u, a, p, m) {
    return a === null ||
      a.tag !== 4 ||
      a.stateNode.containerInfo !== p.containerInfo ||
      a.stateNode.implementation !== p.implementation
      ? ((a = Hi(p, u.mode, m)), (a.return = u), a)
      : ((a = i(a, p.children || [])), (a.return = u), a);
  }
  function R(u, a, p, m, d) {
    return a === null || a.tag !== 7
      ? ((a = wn(p, u.mode, m, d)), (a.return = u), a)
      : ((a = i(a, p)), (a.return = u), a);
  }
  function F(u, a, p) {
    if ((typeof a == "string" && a !== "") || typeof a == "number")
      return (a = $i("" + a, u.mode, p)), (a.return = u), a;
    if (typeof a == "object" && a !== null) {
      switch (a.$$typeof) {
        case Jr:
          return (
            (p = _o(a.type, a.key, a.props, null, u.mode, p)),
            (p.ref = pr(u, null, a)),
            (p.return = u),
            p
          );
        case In:
          return (a = Hi(a, u.mode, p)), (a.return = u), a;
        case Vt:
          var m = a._init;
          return F(u, m(a._payload), p);
      }
      if (yr(a) || ar(a))
        return (a = wn(a, u.mode, p, null)), (a.return = u), a;
      co(u, a);
    }
    return null;
  }
  function f(u, a, p, m) {
    var d = a !== null ? a.key : null;
    if ((typeof p == "string" && p !== "") || typeof p == "number")
      return d !== null ? null : y(u, a, "" + p, m);
    if (typeof p == "object" && p !== null) {
      switch (p.$$typeof) {
        case Jr:
          return p.key === d ? x(u, a, p, m) : null;
        case In:
          return p.key === d ? b(u, a, p, m) : null;
        case Vt:
          return (d = p._init), f(u, a, d(p._payload), m);
      }
      if (yr(p) || ar(p)) return d !== null ? null : R(u, a, p, m, null);
      co(u, p);
    }
    return null;
  }
  function k(u, a, p, m, d) {
    if ((typeof m == "string" && m !== "") || typeof m == "number")
      return (u = u.get(p) || null), y(a, u, "" + m, d);
    if (typeof m == "object" && m !== null) {
      switch (m.$$typeof) {
        case Jr:
          return (u = u.get(m.key === null ? p : m.key) || null), x(a, u, m, d);
        case In:
          return (u = u.get(m.key === null ? p : m.key) || null), b(a, u, m, d);
        case Vt:
          var w = m._init;
          return k(u, a, p, w(m._payload), d);
      }
      if (yr(m) || ar(m)) return (u = u.get(p) || null), R(a, u, m, d, null);
      co(a, m);
    }
    return null;
  }
  function o(u, a, p, m) {
    for (
      var d = null, w = null, g = a, E = (a = 0), _ = null;
      g !== null && E < p.length;
      E++
    ) {
      g.index > E ? ((_ = g), (g = null)) : (_ = g.sibling);
      var I = f(u, g, p[E], m);
      if (I === null) {
        g === null && (g = _);
        break;
      }
      e && g && I.alternate === null && t(u, g),
        (a = l(I, a, E)),
        w === null ? (d = I) : (w.sibling = I),
        (w = I),
        (g = _);
    }
    if (E === p.length) return n(u, g), Ce && pn(u, E), d;
    if (g === null) {
      for (; E < p.length; E++)
        (g = F(u, p[E], m)),
          g !== null &&
            ((a = l(g, a, E)), w === null ? (d = g) : (w.sibling = g), (w = g));
      return Ce && pn(u, E), d;
    }
    for (g = r(u, g); E < p.length; E++)
      (_ = k(g, u, E, p[E], m)),
        _ !== null &&
          (e && _.alternate !== null && g.delete(_.key === null ? E : _.key),
          (a = l(_, a, E)),
          w === null ? (d = _) : (w.sibling = _),
          (w = _));
    return (
      e &&
        g.forEach(function (j) {
          return t(u, j);
        }),
      Ce && pn(u, E),
      d
    );
  }
  function s(u, a, p, m) {
    var d = ar(p);
    if (typeof d != "function") throw Error(te(150));
    if (((p = d.call(p)), p == null)) throw Error(te(151));
    for (
      var w = (d = null), g = a, E = (a = 0), _ = null, I = p.next();
      g !== null && !I.done;
      E++, I = p.next()
    ) {
      g.index > E ? ((_ = g), (g = null)) : (_ = g.sibling);
      var j = f(u, g, I.value, m);
      if (j === null) {
        g === null && (g = _);
        break;
      }
      e && g && j.alternate === null && t(u, g),
        (a = l(j, a, E)),
        w === null ? (d = j) : (w.sibling = j),
        (w = j),
        (g = _);
    }
    if (I.done) return n(u, g), Ce && pn(u, E), d;
    if (g === null) {
      for (; !I.done; E++, I = p.next())
        (I = F(u, I.value, m)),
          I !== null &&
            ((a = l(I, a, E)), w === null ? (d = I) : (w.sibling = I), (w = I));
      return Ce && pn(u, E), d;
    }
    for (g = r(u, g); !I.done; E++, I = p.next())
      (I = k(g, u, E, I.value, m)),
        I !== null &&
          (e && I.alternate !== null && g.delete(I.key === null ? E : I.key),
          (a = l(I, a, E)),
          w === null ? (d = I) : (w.sibling = I),
          (w = I));
    return (
      e &&
        g.forEach(function (N) {
          return t(u, N);
        }),
      Ce && pn(u, E),
      d
    );
  }
  function h(u, a, p, m) {
    if (
      (typeof p == "object" &&
        p !== null &&
        p.type === Mn &&
        p.key === null &&
        (p = p.props.children),
      typeof p == "object" && p !== null)
    ) {
      switch (p.$$typeof) {
        case Jr:
          e: {
            for (var d = p.key, w = a; w !== null; ) {
              if (w.key === d) {
                if (((d = p.type), d === Mn)) {
                  if (w.tag === 7) {
                    n(u, w.sibling),
                      (a = i(w, p.props.children)),
                      (a.return = u),
                      (u = a);
                    break e;
                  }
                } else if (
                  w.elementType === d ||
                  (typeof d == "object" &&
                    d !== null &&
                    d.$$typeof === Vt &&
                    ja(d) === w.type)
                ) {
                  n(u, w.sibling),
                    (a = i(w, p.props)),
                    (a.ref = pr(u, w, p)),
                    (a.return = u),
                    (u = a);
                  break e;
                }
                n(u, w);
                break;
              } else t(u, w);
              w = w.sibling;
            }
            p.type === Mn
              ? ((a = wn(p.props.children, u.mode, m, p.key)),
                (a.return = u),
                (u = a))
              : ((m = _o(p.type, p.key, p.props, null, u.mode, m)),
                (m.ref = pr(u, a, p)),
                (m.return = u),
                (u = m));
          }
          return c(u);
        case In:
          e: {
            for (w = p.key; a !== null; ) {
              if (a.key === w)
                if (
                  a.tag === 4 &&
                  a.stateNode.containerInfo === p.containerInfo &&
                  a.stateNode.implementation === p.implementation
                ) {
                  n(u, a.sibling),
                    (a = i(a, p.children || [])),
                    (a.return = u),
                    (u = a);
                  break e;
                } else {
                  n(u, a);
                  break;
                }
              else t(u, a);
              a = a.sibling;
            }
            (a = Hi(p, u.mode, m)), (a.return = u), (u = a);
          }
          return c(u);
        case Vt:
          return (w = p._init), h(u, a, w(p._payload), m);
      }
      if (yr(p)) return o(u, a, p, m);
      if (ar(p)) return s(u, a, p, m);
      co(u, p);
    }
    return (typeof p == "string" && p !== "") || typeof p == "number"
      ? ((p = "" + p),
        a !== null && a.tag === 6
          ? (n(u, a.sibling), (a = i(a, p)), (a.return = u), (u = a))
          : (n(u, a), (a = $i(p, u.mode, m)), (a.return = u), (u = a)),
        c(u))
      : n(u, a);
  }
  return h;
}
var Jn = zc(!0),
  Ac = zc(!1),
  Zr = {},
  Tt = sn(Zr),
  Br = sn(Zr),
  Ur = sn(Zr);
function yn(e) {
  if (e === Zr) throw Error(te(174));
  return e;
}
function xu(e, t) {
  switch ((we(Ur, t), we(Br, e), we(Tt, Zr), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : il(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = il(t, e));
  }
  ke(Tt), we(Tt, t);
}
function er() {
  ke(Tt), ke(Br), ke(Ur);
}
function Fc(e) {
  yn(Ur.current);
  var t = yn(Tt.current),
    n = il(t, e.type);
  t !== n && (we(Br, e), we(Tt, n));
}
function ku(e) {
  Br.current === e && (ke(Tt), ke(Br));
}
var Oe = sn(0);
function Vo(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
  return null;
}
var Di = [];
function Su() {
  for (var e = 0; e < Di.length; e++)
    Di[e]._workInProgressVersionPrimary = null;
  Di.length = 0;
}
var Eo = Ut.ReactCurrentDispatcher,
  zi = Ut.ReactCurrentBatchConfig,
  Sn = 0,
  Pe = null,
  Re = null,
  Ae = null,
  Xo = !1,
  Or = !1,
  $r = 0,
  jp = 0;
function He() {
  throw Error(te(321));
}
function Eu(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!Et(e[n], t[n])) return !1;
  return !0;
}
function Cu(e, t, n, r, i, l) {
  if (
    ((Sn = l),
    (Pe = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (Eo.current = e === null || e.memoizedState === null ? Fp : Bp),
    (e = n(r, i)),
    Or)
  ) {
    l = 0;
    do {
      if (((Or = !1), ($r = 0), 25 <= l)) throw Error(te(301));
      (l += 1),
        (Ae = Re = null),
        (t.updateQueue = null),
        (Eo.current = Up),
        (e = n(r, i));
    } while (Or);
  }
  if (
    ((Eo.current = Wo),
    (t = Re !== null && Re.next !== null),
    (Sn = 0),
    (Ae = Re = Pe = null),
    (Xo = !1),
    t)
  )
    throw Error(te(300));
  return e;
}
function Ou() {
  var e = $r !== 0;
  return ($r = 0), e;
}
function Pt() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return Ae === null ? (Pe.memoizedState = Ae = e) : (Ae = Ae.next = e), Ae;
}
function ht() {
  if (Re === null) {
    var e = Pe.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = Re.next;
  var t = Ae === null ? Pe.memoizedState : Ae.next;
  if (t !== null) (Ae = t), (Re = e);
  else {
    if (e === null) throw Error(te(310));
    (Re = e),
      (e = {
        memoizedState: Re.memoizedState,
        baseState: Re.baseState,
        baseQueue: Re.baseQueue,
        queue: Re.queue,
        next: null,
      }),
      Ae === null ? (Pe.memoizedState = Ae = e) : (Ae = Ae.next = e);
  }
  return Ae;
}
function Hr(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function Ai(e) {
  var t = ht(),
    n = t.queue;
  if (n === null) throw Error(te(311));
  n.lastRenderedReducer = e;
  var r = Re,
    i = r.baseQueue,
    l = n.pending;
  if (l !== null) {
    if (i !== null) {
      var c = i.next;
      (i.next = l.next), (l.next = c);
    }
    (r.baseQueue = i = l), (n.pending = null);
  }
  if (i !== null) {
    (l = i.next), (r = r.baseState);
    var y = (c = null),
      x = null,
      b = l;
    do {
      var R = b.lane;
      if ((Sn & R) === R)
        x !== null &&
          (x = x.next =
            {
              lane: 0,
              action: b.action,
              hasEagerState: b.hasEagerState,
              eagerState: b.eagerState,
              next: null,
            }),
          (r = b.hasEagerState ? b.eagerState : e(r, b.action));
      else {
        var F = {
          lane: R,
          action: b.action,
          hasEagerState: b.hasEagerState,
          eagerState: b.eagerState,
          next: null,
        };
        x === null ? ((y = x = F), (c = r)) : (x = x.next = F),
          (Pe.lanes |= R),
          (En |= R);
      }
      b = b.next;
    } while (b !== null && b !== l);
    x === null ? (c = r) : (x.next = y),
      Et(r, t.memoizedState) || (Je = !0),
      (t.memoizedState = r),
      (t.baseState = c),
      (t.baseQueue = x),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    i = e;
    do (l = i.lane), (Pe.lanes |= l), (En |= l), (i = i.next);
    while (i !== e);
  } else i === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function Fi(e) {
  var t = ht(),
    n = t.queue;
  if (n === null) throw Error(te(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    i = n.pending,
    l = t.memoizedState;
  if (i !== null) {
    n.pending = null;
    var c = (i = i.next);
    do (l = e(l, c.action)), (c = c.next);
    while (c !== i);
    Et(l, t.memoizedState) || (Je = !0),
      (t.memoizedState = l),
      t.baseQueue === null && (t.baseState = l),
      (n.lastRenderedState = l);
  }
  return [l, r];
}
function Bc() {}
function Uc(e, t) {
  var n = Pe,
    r = ht(),
    i = t(),
    l = !Et(r.memoizedState, i);
  if (
    (l && ((r.memoizedState = i), (Je = !0)),
    (r = r.queue),
    Pu(Kc.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || l || (Ae !== null && Ae.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      Kr(9, Hc.bind(null, n, r, i, t), void 0, null),
      Fe === null)
    )
      throw Error(te(349));
    Sn & 30 || $c(n, t, i);
  }
  return i;
}
function $c(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = Pe.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (Pe.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function Hc(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), Vc(t) && Xc(e);
}
function Kc(e, t, n) {
  return n(function () {
    Vc(t) && Xc(e);
  });
}
function Vc(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !Et(e, n);
  } catch {
    return !0;
  }
}
function Xc(e) {
  var t = Ft(e, 1);
  t !== null && St(t, e, 1, -1);
}
function Da(e) {
  var t = Pt();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Hr,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = Ap.bind(null, Pe, e)),
    [t.memoizedState, e]
  );
}
function Kr(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = Pe.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (Pe.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function Wc() {
  return ht().memoizedState;
}
function Co(e, t, n, r) {
  var i = Pt();
  (Pe.flags |= e),
    (i.memoizedState = Kr(1 | t, n, void 0, r === void 0 ? null : r));
}
function ai(e, t, n, r) {
  var i = ht();
  r = r === void 0 ? null : r;
  var l = void 0;
  if (Re !== null) {
    var c = Re.memoizedState;
    if (((l = c.destroy), r !== null && Eu(r, c.deps))) {
      i.memoizedState = Kr(t, n, l, r);
      return;
    }
  }
  (Pe.flags |= e), (i.memoizedState = Kr(1 | t, n, l, r));
}
function za(e, t) {
  return Co(8390656, 8, e, t);
}
function Pu(e, t) {
  return ai(2048, 8, e, t);
}
function Qc(e, t) {
  return ai(4, 2, e, t);
}
function Gc(e, t) {
  return ai(4, 4, e, t);
}
function Yc(e, t) {
  if (typeof t == "function")
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function Zc(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), ai(4, 4, Yc.bind(null, t, e), n)
  );
}
function bu() {}
function qc(e, t) {
  var n = ht();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Eu(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function Jc(e, t) {
  var n = ht();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Eu(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function ef(e, t, n) {
  return Sn & 21
    ? (Et(n, t) || ((n = rc()), (Pe.lanes |= n), (En |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (Je = !0)), (e.memoizedState = n));
}
function Dp(e, t) {
  var n = ye;
  (ye = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = zi.transition;
  zi.transition = {};
  try {
    e(!1), t();
  } finally {
    (ye = n), (zi.transition = r);
  }
}
function tf() {
  return ht().memoizedState;
}
function zp(e, t, n) {
  var r = rn(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    nf(e))
  )
    rf(t, n);
  else if (((n = Rc(e, t, n, r)), n !== null)) {
    var i = Ge();
    St(n, e, r, i), of(n, t, r);
  }
}
function Ap(e, t, n) {
  var r = rn(e),
    i = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (nf(e)) rf(t, i);
  else {
    var l = e.alternate;
    if (
      e.lanes === 0 &&
      (l === null || l.lanes === 0) &&
      ((l = t.lastRenderedReducer), l !== null)
    )
      try {
        var c = t.lastRenderedState,
          y = l(c, n);
        if (((i.hasEagerState = !0), (i.eagerState = y), Et(y, c))) {
          var x = t.interleaved;
          x === null
            ? ((i.next = i), gu(t))
            : ((i.next = x.next), (x.next = i)),
            (t.interleaved = i);
          return;
        }
      } catch {
      } finally {
      }
    (n = Rc(e, t, i, r)),
      n !== null && ((i = Ge()), St(n, e, r, i), of(n, t, r));
  }
}
function nf(e) {
  var t = e.alternate;
  return e === Pe || (t !== null && t === Pe);
}
function rf(e, t) {
  Or = Xo = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function of(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), ou(e, n);
  }
}
var Wo = {
    readContext: pt,
    useCallback: He,
    useContext: He,
    useEffect: He,
    useImperativeHandle: He,
    useInsertionEffect: He,
    useLayoutEffect: He,
    useMemo: He,
    useReducer: He,
    useRef: He,
    useState: He,
    useDebugValue: He,
    useDeferredValue: He,
    useTransition: He,
    useMutableSource: He,
    useSyncExternalStore: He,
    useId: He,
    unstable_isNewReconciler: !1,
  },
  Fp = {
    readContext: pt,
    useCallback: function (e, t) {
      return (Pt().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: pt,
    useEffect: za,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        Co(4194308, 4, Yc.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return Co(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return Co(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = Pt();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = Pt();
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (r.queue = e),
        (e = e.dispatch = zp.bind(null, Pe, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = Pt();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: Da,
    useDebugValue: bu,
    useDeferredValue: function (e) {
      return (Pt().memoizedState = e);
    },
    useTransition: function () {
      var e = Da(!1),
        t = e[0];
      return (e = Dp.bind(null, e[1])), (Pt().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = Pe,
        i = Pt();
      if (Ce) {
        if (n === void 0) throw Error(te(407));
        n = n();
      } else {
        if (((n = t()), Fe === null)) throw Error(te(349));
        Sn & 30 || $c(r, t, n);
      }
      i.memoizedState = n;
      var l = { value: n, getSnapshot: t };
      return (
        (i.queue = l),
        za(Kc.bind(null, r, l, e), [e]),
        (r.flags |= 2048),
        Kr(9, Hc.bind(null, r, l, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = Pt(),
        t = Fe.identifierPrefix;
      if (Ce) {
        var n = jt,
          r = Lt;
        (n = (r & ~(1 << (32 - kt(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = $r++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":");
      } else (n = jp++), (t = ":" + t + "r" + n.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  Bp = {
    readContext: pt,
    useCallback: qc,
    useContext: pt,
    useEffect: Pu,
    useImperativeHandle: Zc,
    useInsertionEffect: Qc,
    useLayoutEffect: Gc,
    useMemo: Jc,
    useReducer: Ai,
    useRef: Wc,
    useState: function () {
      return Ai(Hr);
    },
    useDebugValue: bu,
    useDeferredValue: function (e) {
      var t = ht();
      return ef(t, Re.memoizedState, e);
    },
    useTransition: function () {
      var e = Ai(Hr)[0],
        t = ht().memoizedState;
      return [e, t];
    },
    useMutableSource: Bc,
    useSyncExternalStore: Uc,
    useId: tf,
    unstable_isNewReconciler: !1,
  },
  Up = {
    readContext: pt,
    useCallback: qc,
    useContext: pt,
    useEffect: Pu,
    useImperativeHandle: Zc,
    useInsertionEffect: Qc,
    useLayoutEffect: Gc,
    useMemo: Jc,
    useReducer: Fi,
    useRef: Wc,
    useState: function () {
      return Fi(Hr);
    },
    useDebugValue: bu,
    useDeferredValue: function (e) {
      var t = ht();
      return Re === null ? (t.memoizedState = e) : ef(t, Re.memoizedState, e);
    },
    useTransition: function () {
      var e = Fi(Hr)[0],
        t = ht().memoizedState;
      return [e, t];
    },
    useMutableSource: Bc,
    useSyncExternalStore: Uc,
    useId: tf,
    unstable_isNewReconciler: !1,
  };
function tr(e, t) {
  try {
    var n = "",
      r = t;
    do (n += md(r)), (r = r.return);
    while (r);
    var i = n;
  } catch (l) {
    i =
      `
Error generating stack: ` +
      l.message +
      `
` +
      l.stack;
  }
  return { value: e, source: t, stack: i, digest: null };
}
function Bi(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function _l(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var $p = typeof WeakMap == "function" ? WeakMap : Map;
function lf(e, t, n) {
  (n = Dt(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      Go || ((Go = !0), (Al = r)), _l(e, t);
    }),
    n
  );
}
function uf(e, t, n) {
  (n = Dt(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var i = t.value;
    (n.payload = function () {
      return r(i);
    }),
      (n.callback = function () {
        _l(e, t);
      });
  }
  var l = e.stateNode;
  return (
    l !== null &&
      typeof l.componentDidCatch == "function" &&
      (n.callback = function () {
        _l(e, t),
          typeof r != "function" &&
            (nn === null ? (nn = new Set([this])) : nn.add(this));
        var c = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: c !== null ? c : "",
        });
      }),
    n
  );
}
function Aa(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new $p();
    var i = new Set();
    r.set(t, i);
  } else (i = r.get(t)), i === void 0 && ((i = new Set()), r.set(t, i));
  i.has(n) || (i.add(n), (e = nh.bind(null, e, t, n)), t.then(e, e));
}
function Fa(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function Ba(e, t, n, r, i) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = i), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = Dt(-1, 1)), (t.tag = 2), tn(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var Hp = Ut.ReactCurrentOwner,
  Je = !1;
function Qe(e, t, n, r) {
  t.child = e === null ? Ac(t, null, n, r) : Jn(t, e.child, n, r);
}
function Ua(e, t, n, r, i) {
  n = n.render;
  var l = t.ref;
  return (
    Wn(t, i),
    (r = Cu(e, t, n, r, l, i)),
    (n = Ou()),
    e !== null && !Je
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~i),
        Bt(e, t, i))
      : (Ce && n && du(t), (t.flags |= 1), Qe(e, t, r, i), t.child)
  );
}
function $a(e, t, n, r, i) {
  if (e === null) {
    var l = n.type;
    return typeof l == "function" &&
      !ju(l) &&
      l.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = l), af(e, t, l, r, i))
      : ((e = _o(n.type, null, r, t, t.mode, i)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((l = e.child), !(e.lanes & i))) {
    var c = l.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : Dr), n(c, r) && e.ref === t.ref)
    )
      return Bt(e, t, i);
  }
  return (
    (t.flags |= 1),
    (e = on(l, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function af(e, t, n, r, i) {
  if (e !== null) {
    var l = e.memoizedProps;
    if (Dr(l, r) && e.ref === t.ref)
      if (((Je = !1), (t.pendingProps = r = l), (e.lanes & i) !== 0))
        e.flags & 131072 && (Je = !0);
      else return (t.lanes = e.lanes), Bt(e, t, i);
  }
  return Nl(e, t, n, r, i);
}
function sf(e, t, n) {
  var r = t.pendingProps,
    i = r.children,
    l = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        we($n, rt),
        (rt |= n);
    else {
      if (!(n & 1073741824))
        return (
          (e = l !== null ? l.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          we($n, rt),
          (rt |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = l !== null ? l.baseLanes : n),
        we($n, rt),
        (rt |= r);
    }
  else
    l !== null ? ((r = l.baseLanes | n), (t.memoizedState = null)) : (r = n),
      we($n, rt),
      (rt |= r);
  return Qe(e, t, i, n), t.child;
}
function cf(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function Nl(e, t, n, r, i) {
  var l = tt(n) ? xn : Xe.current;
  return (
    (l = Zn(t, l)),
    Wn(t, i),
    (n = Cu(e, t, n, r, l, i)),
    (r = Ou()),
    e !== null && !Je
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~i),
        Bt(e, t, i))
      : (Ce && r && du(t), (t.flags |= 1), Qe(e, t, n, i), t.child)
  );
}
function Ha(e, t, n, r, i) {
  if (tt(n)) {
    var l = !0;
    Fo(t);
  } else l = !1;
  if ((Wn(t, i), t.stateNode === null))
    Oo(e, t), Dc(t, n, r), bl(t, n, r, i), (r = !0);
  else if (e === null) {
    var c = t.stateNode,
      y = t.memoizedProps;
    c.props = y;
    var x = c.context,
      b = n.contextType;
    typeof b == "object" && b !== null
      ? (b = pt(b))
      : ((b = tt(n) ? xn : Xe.current), (b = Zn(t, b)));
    var R = n.getDerivedStateFromProps,
      F =
        typeof R == "function" ||
        typeof c.getSnapshotBeforeUpdate == "function";
    F ||
      (typeof c.UNSAFE_componentWillReceiveProps != "function" &&
        typeof c.componentWillReceiveProps != "function") ||
      ((y !== r || x !== b) && La(t, c, r, b)),
      (Xt = !1);
    var f = t.memoizedState;
    (c.state = f),
      Ko(t, r, c, i),
      (x = t.memoizedState),
      y !== r || f !== x || et.current || Xt
        ? (typeof R == "function" && (Pl(t, n, R, r), (x = t.memoizedState)),
          (y = Xt || Ra(t, n, y, r, f, x, b))
            ? (F ||
                (typeof c.UNSAFE_componentWillMount != "function" &&
                  typeof c.componentWillMount != "function") ||
                (typeof c.componentWillMount == "function" &&
                  c.componentWillMount(),
                typeof c.UNSAFE_componentWillMount == "function" &&
                  c.UNSAFE_componentWillMount()),
              typeof c.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof c.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = x)),
          (c.props = r),
          (c.state = x),
          (c.context = b),
          (r = y))
        : (typeof c.componentDidMount == "function" && (t.flags |= 4194308),
          (r = !1));
  } else {
    (c = t.stateNode),
      Lc(e, t),
      (y = t.memoizedProps),
      (b = t.type === t.elementType ? y : gt(t.type, y)),
      (c.props = b),
      (F = t.pendingProps),
      (f = c.context),
      (x = n.contextType),
      typeof x == "object" && x !== null
        ? (x = pt(x))
        : ((x = tt(n) ? xn : Xe.current), (x = Zn(t, x)));
    var k = n.getDerivedStateFromProps;
    (R =
      typeof k == "function" ||
      typeof c.getSnapshotBeforeUpdate == "function") ||
      (typeof c.UNSAFE_componentWillReceiveProps != "function" &&
        typeof c.componentWillReceiveProps != "function") ||
      ((y !== F || f !== x) && La(t, c, r, x)),
      (Xt = !1),
      (f = t.memoizedState),
      (c.state = f),
      Ko(t, r, c, i);
    var o = t.memoizedState;
    y !== F || f !== o || et.current || Xt
      ? (typeof k == "function" && (Pl(t, n, k, r), (o = t.memoizedState)),
        (b = Xt || Ra(t, n, b, r, f, o, x) || !1)
          ? (R ||
              (typeof c.UNSAFE_componentWillUpdate != "function" &&
                typeof c.componentWillUpdate != "function") ||
              (typeof c.componentWillUpdate == "function" &&
                c.componentWillUpdate(r, o, x),
              typeof c.UNSAFE_componentWillUpdate == "function" &&
                c.UNSAFE_componentWillUpdate(r, o, x)),
            typeof c.componentDidUpdate == "function" && (t.flags |= 4),
            typeof c.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof c.componentDidUpdate != "function" ||
              (y === e.memoizedProps && f === e.memoizedState) ||
              (t.flags |= 4),
            typeof c.getSnapshotBeforeUpdate != "function" ||
              (y === e.memoizedProps && f === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = o)),
        (c.props = r),
        (c.state = o),
        (c.context = x),
        (r = b))
      : (typeof c.componentDidUpdate != "function" ||
          (y === e.memoizedProps && f === e.memoizedState) ||
          (t.flags |= 4),
        typeof c.getSnapshotBeforeUpdate != "function" ||
          (y === e.memoizedProps && f === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return Tl(e, t, n, r, l, i);
}
function Tl(e, t, n, r, i, l) {
  cf(e, t);
  var c = (t.flags & 128) !== 0;
  if (!r && !c) return i && _a(t, n, !1), Bt(e, t, l);
  (r = t.stateNode), (Hp.current = t);
  var y =
    c && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && c
      ? ((t.child = Jn(t, e.child, null, l)), (t.child = Jn(t, null, y, l)))
      : Qe(e, t, y, l),
    (t.memoizedState = r.state),
    i && _a(t, n, !0),
    t.child
  );
}
function ff(e) {
  var t = e.stateNode;
  t.pendingContext
    ? ba(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && ba(e, t.context, !1),
    xu(e, t.containerInfo);
}
function Ka(e, t, n, r, i) {
  return qn(), hu(i), (t.flags |= 256), Qe(e, t, n, r), t.child;
}
var Il = { dehydrated: null, treeContext: null, retryLane: 0 };
function Ml(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function df(e, t, n) {
  var r = t.pendingProps,
    i = Oe.current,
    l = !1,
    c = (t.flags & 128) !== 0,
    y;
  if (
    ((y = c) ||
      (y = e !== null && e.memoizedState === null ? !1 : (i & 2) !== 0),
    y
      ? ((l = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (i |= 1),
    we(Oe, i & 1),
    e === null)
  )
    return (
      Cl(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === "$!"
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((c = r.children),
          (e = r.fallback),
          l
            ? ((r = t.mode),
              (l = t.child),
              (c = { mode: "hidden", children: c }),
              !(r & 1) && l !== null
                ? ((l.childLanes = 0), (l.pendingProps = c))
                : (l = fi(c, r, 0, null)),
              (e = wn(e, r, n, null)),
              (l.return = t),
              (e.return = t),
              (l.sibling = e),
              (t.child = l),
              (t.child.memoizedState = Ml(n)),
              (t.memoizedState = Il),
              e)
            : _u(t, c))
    );
  if (((i = e.memoizedState), i !== null && ((y = i.dehydrated), y !== null)))
    return Kp(e, t, c, r, y, i, n);
  if (l) {
    (l = r.fallback), (c = t.mode), (i = e.child), (y = i.sibling);
    var x = { mode: "hidden", children: r.children };
    return (
      !(c & 1) && t.child !== i
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = x),
          (t.deletions = null))
        : ((r = on(i, x)), (r.subtreeFlags = i.subtreeFlags & 14680064)),
      y !== null ? (l = on(y, l)) : ((l = wn(l, c, n, null)), (l.flags |= 2)),
      (l.return = t),
      (r.return = t),
      (r.sibling = l),
      (t.child = r),
      (r = l),
      (l = t.child),
      (c = e.child.memoizedState),
      (c =
        c === null
          ? Ml(n)
          : {
              baseLanes: c.baseLanes | n,
              cachePool: null,
              transitions: c.transitions,
            }),
      (l.memoizedState = c),
      (l.childLanes = e.childLanes & ~n),
      (t.memoizedState = Il),
      r
    );
  }
  return (
    (l = e.child),
    (e = l.sibling),
    (r = on(l, { mode: "visible", children: r.children })),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null &&
      ((n = t.deletions),
      n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  );
}
function _u(e, t) {
  return (
    (t = fi({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function fo(e, t, n, r) {
  return (
    r !== null && hu(r),
    Jn(t, e.child, null, n),
    (e = _u(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function Kp(e, t, n, r, i, l, c) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = Bi(Error(te(422)))), fo(e, t, c, r))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((l = r.fallback),
        (i = t.mode),
        (r = fi({ mode: "visible", children: r.children }, i, 0, null)),
        (l = wn(l, i, c, null)),
        (l.flags |= 2),
        (r.return = t),
        (l.return = t),
        (r.sibling = l),
        (t.child = r),
        t.mode & 1 && Jn(t, e.child, null, c),
        (t.child.memoizedState = Ml(c)),
        (t.memoizedState = Il),
        l);
  if (!(t.mode & 1)) return fo(e, t, c, null);
  if (i.data === "$!") {
    if (((r = i.nextSibling && i.nextSibling.dataset), r)) var y = r.dgst;
    return (
      (r = y), (l = Error(te(419))), (r = Bi(l, r, void 0)), fo(e, t, c, r)
    );
  }
  if (((y = (c & e.childLanes) !== 0), Je || y)) {
    if (((r = Fe), r !== null)) {
      switch (c & -c) {
        case 4:
          i = 2;
          break;
        case 16:
          i = 8;
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
          i = 32;
          break;
        case 536870912:
          i = 268435456;
          break;
        default:
          i = 0;
      }
      (i = i & (r.suspendedLanes | c) ? 0 : i),
        i !== 0 &&
          i !== l.retryLane &&
          ((l.retryLane = i), Ft(e, i), St(r, e, i, -1));
    }
    return Lu(), (r = Bi(Error(te(421)))), fo(e, t, c, r);
  }
  return i.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = rh.bind(null, e)),
      (i._reactRetry = t),
      null)
    : ((e = l.treeContext),
      (ot = en(i.nextSibling)),
      (it = t),
      (Ce = !0),
      (xt = null),
      e !== null &&
        ((st[ct++] = Lt),
        (st[ct++] = jt),
        (st[ct++] = kn),
        (Lt = e.id),
        (jt = e.overflow),
        (kn = t)),
      (t = _u(t, r.children)),
      (t.flags |= 4096),
      t);
}
function Va(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), Ol(e.return, t, n);
}
function Ui(e, t, n, r, i) {
  var l = e.memoizedState;
  l === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: i,
      })
    : ((l.isBackwards = t),
      (l.rendering = null),
      (l.renderingStartTime = 0),
      (l.last = r),
      (l.tail = n),
      (l.tailMode = i));
}
function pf(e, t, n) {
  var r = t.pendingProps,
    i = r.revealOrder,
    l = r.tail;
  if ((Qe(e, t, r.children, n), (r = Oe.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && Va(e, n, t);
        else if (e.tag === 19) Va(e, n, t);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    r &= 1;
  }
  if ((we(Oe, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (i) {
      case "forwards":
        for (n = t.child, i = null; n !== null; )
          (e = n.alternate),
            e !== null && Vo(e) === null && (i = n),
            (n = n.sibling);
        (n = i),
          n === null
            ? ((i = t.child), (t.child = null))
            : ((i = n.sibling), (n.sibling = null)),
          Ui(t, !1, i, n, l);
        break;
      case "backwards":
        for (n = null, i = t.child, t.child = null; i !== null; ) {
          if (((e = i.alternate), e !== null && Vo(e) === null)) {
            t.child = i;
            break;
          }
          (e = i.sibling), (i.sibling = n), (n = i), (i = e);
        }
        Ui(t, !0, n, null, l);
        break;
      case "together":
        Ui(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function Oo(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function Bt(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (En |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(te(153));
  if (t.child !== null) {
    for (
      e = t.child, n = on(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = on(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function Vp(e, t, n) {
  switch (t.tag) {
    case 3:
      ff(t), qn();
      break;
    case 5:
      Fc(t);
      break;
    case 1:
      tt(t.type) && Fo(t);
      break;
    case 4:
      xu(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        i = t.memoizedProps.value;
      we($o, r._currentValue), (r._currentValue = i);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (we(Oe, Oe.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
          ? df(e, t, n)
          : (we(Oe, Oe.current & 1),
            (e = Bt(e, t, n)),
            e !== null ? e.sibling : null);
      we(Oe, Oe.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return pf(e, t, n);
        t.flags |= 128;
      }
      if (
        ((i = t.memoizedState),
        i !== null &&
          ((i.rendering = null), (i.tail = null), (i.lastEffect = null)),
        we(Oe, Oe.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), sf(e, t, n);
  }
  return Bt(e, t, n);
}
var hf, Rl, mf, vf;
hf = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
};
Rl = function () {};
mf = function (e, t, n, r) {
  var i = e.memoizedProps;
  if (i !== r) {
    (e = t.stateNode), yn(Tt.current);
    var l = null;
    switch (n) {
      case "input":
        (i = tl(e, i)), (r = tl(e, r)), (l = []);
        break;
      case "select":
        (i = be({}, i, { value: void 0 })),
          (r = be({}, r, { value: void 0 })),
          (l = []);
        break;
      case "textarea":
        (i = ol(e, i)), (r = ol(e, r)), (l = []);
        break;
      default:
        typeof i.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = zo);
    }
    ll(n, r);
    var c;
    n = null;
    for (b in i)
      if (!r.hasOwnProperty(b) && i.hasOwnProperty(b) && i[b] != null)
        if (b === "style") {
          var y = i[b];
          for (c in y) y.hasOwnProperty(c) && (n || (n = {}), (n[c] = ""));
        } else
          b !== "dangerouslySetInnerHTML" &&
            b !== "children" &&
            b !== "suppressContentEditableWarning" &&
            b !== "suppressHydrationWarning" &&
            b !== "autoFocus" &&
            (Nr.hasOwnProperty(b)
              ? l || (l = [])
              : (l = l || []).push(b, null));
    for (b in r) {
      var x = r[b];
      if (
        ((y = i != null ? i[b] : void 0),
        r.hasOwnProperty(b) && x !== y && (x != null || y != null))
      )
        if (b === "style")
          if (y) {
            for (c in y)
              !y.hasOwnProperty(c) ||
                (x && x.hasOwnProperty(c)) ||
                (n || (n = {}), (n[c] = ""));
            for (c in x)
              x.hasOwnProperty(c) &&
                y[c] !== x[c] &&
                (n || (n = {}), (n[c] = x[c]));
          } else n || (l || (l = []), l.push(b, n)), (n = x);
        else
          b === "dangerouslySetInnerHTML"
            ? ((x = x ? x.__html : void 0),
              (y = y ? y.__html : void 0),
              x != null && y !== x && (l = l || []).push(b, x))
            : b === "children"
            ? (typeof x != "string" && typeof x != "number") ||
              (l = l || []).push(b, "" + x)
            : b !== "suppressContentEditableWarning" &&
              b !== "suppressHydrationWarning" &&
              (Nr.hasOwnProperty(b)
                ? (x != null && b === "onScroll" && xe("scroll", e),
                  l || y === x || (l = []))
                : (l = l || []).push(b, x));
    }
    n && (l = l || []).push("style", n);
    var b = l;
    (t.updateQueue = b) && (t.flags |= 4);
  }
};
vf = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function hr(e, t) {
  if (!Ce)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; )
          t.alternate !== null && (n = t), (t = t.sibling);
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case "collapsed":
        n = e.tail;
        for (var r = null; n !== null; )
          n.alternate !== null && (r = n), (n = n.sibling);
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function Ke(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var i = e.child; i !== null; )
      (n |= i.lanes | i.childLanes),
        (r |= i.subtreeFlags & 14680064),
        (r |= i.flags & 14680064),
        (i.return = e),
        (i = i.sibling);
  else
    for (i = e.child; i !== null; )
      (n |= i.lanes | i.childLanes),
        (r |= i.subtreeFlags),
        (r |= i.flags),
        (i.return = e),
        (i = i.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function Xp(e, t, n) {
  var r = t.pendingProps;
  switch ((pu(t), t.tag)) {
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
      return Ke(t), null;
    case 1:
      return tt(t.type) && Ao(), Ke(t), null;
    case 3:
      return (
        (r = t.stateNode),
        er(),
        ke(et),
        ke(Xe),
        Su(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (so(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), xt !== null && (Ul(xt), (xt = null)))),
        Rl(e, t),
        Ke(t),
        null
      );
    case 5:
      ku(t);
      var i = yn(Ur.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        mf(e, t, n, r, i),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(te(166));
          return Ke(t), null;
        }
        if (((e = yn(Tt.current)), so(t))) {
          (r = t.stateNode), (n = t.type);
          var l = t.memoizedProps;
          switch (((r[_t] = t), (r[Fr] = l), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              xe("cancel", r), xe("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              xe("load", r);
              break;
            case "video":
            case "audio":
              for (i = 0; i < wr.length; i++) xe(wr[i], r);
              break;
            case "source":
              xe("error", r);
              break;
            case "img":
            case "image":
            case "link":
              xe("error", r), xe("load", r);
              break;
            case "details":
              xe("toggle", r);
              break;
            case "input":
              ea(r, l), xe("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!l.multiple }),
                xe("invalid", r);
              break;
            case "textarea":
              na(r, l), xe("invalid", r);
          }
          ll(n, l), (i = null);
          for (var c in l)
            if (l.hasOwnProperty(c)) {
              var y = l[c];
              c === "children"
                ? typeof y == "string"
                  ? r.textContent !== y &&
                    (l.suppressHydrationWarning !== !0 &&
                      ao(r.textContent, y, e),
                    (i = ["children", y]))
                  : typeof y == "number" &&
                    r.textContent !== "" + y &&
                    (l.suppressHydrationWarning !== !0 &&
                      ao(r.textContent, y, e),
                    (i = ["children", "" + y]))
                : Nr.hasOwnProperty(c) &&
                  y != null &&
                  c === "onScroll" &&
                  xe("scroll", r);
            }
          switch (n) {
            case "input":
              eo(r), ta(r, l, !0);
              break;
            case "textarea":
              eo(r), ra(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof l.onClick == "function" && (r.onclick = zo);
          }
          (r = i), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (c = i.nodeType === 9 ? i : i.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = $s(n)),
            e === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((e = c.createElement("div")),
                  (e.innerHTML = "<script></script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == "string"
                ? (e = c.createElement(n, { is: r.is }))
                : ((e = c.createElement(n)),
                  n === "select" &&
                    ((c = e),
                    r.multiple
                      ? (c.multiple = !0)
                      : r.size && (c.size = r.size)))
              : (e = c.createElementNS(e, n)),
            (e[_t] = t),
            (e[Fr] = r),
            hf(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((c = ul(n, r)), n)) {
              case "dialog":
                xe("cancel", e), xe("close", e), (i = r);
                break;
              case "iframe":
              case "object":
              case "embed":
                xe("load", e), (i = r);
                break;
              case "video":
              case "audio":
                for (i = 0; i < wr.length; i++) xe(wr[i], e);
                i = r;
                break;
              case "source":
                xe("error", e), (i = r);
                break;
              case "img":
              case "image":
              case "link":
                xe("error", e), xe("load", e), (i = r);
                break;
              case "details":
                xe("toggle", e), (i = r);
                break;
              case "input":
                ea(e, r), (i = tl(e, r)), xe("invalid", e);
                break;
              case "option":
                i = r;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (i = be({}, r, { value: void 0 })),
                  xe("invalid", e);
                break;
              case "textarea":
                na(e, r), (i = ol(e, r)), xe("invalid", e);
                break;
              default:
                i = r;
            }
            ll(n, i), (y = i);
            for (l in y)
              if (y.hasOwnProperty(l)) {
                var x = y[l];
                l === "style"
                  ? Vs(e, x)
                  : l === "dangerouslySetInnerHTML"
                  ? ((x = x ? x.__html : void 0), x != null && Hs(e, x))
                  : l === "children"
                  ? typeof x == "string"
                    ? (n !== "textarea" || x !== "") && Tr(e, x)
                    : typeof x == "number" && Tr(e, "" + x)
                  : l !== "suppressContentEditableWarning" &&
                    l !== "suppressHydrationWarning" &&
                    l !== "autoFocus" &&
                    (Nr.hasOwnProperty(l)
                      ? x != null && l === "onScroll" && xe("scroll", e)
                      : x != null && ql(e, l, x, c));
              }
            switch (n) {
              case "input":
                eo(e), ta(e, r, !1);
                break;
              case "textarea":
                eo(e), ra(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + ln(r.value));
                break;
              case "select":
                (e.multiple = !!r.multiple),
                  (l = r.value),
                  l != null
                    ? Hn(e, !!r.multiple, l, !1)
                    : r.defaultValue != null &&
                      Hn(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof i.onClick == "function" && (e.onclick = zo);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return Ke(t), null;
    case 6:
      if (e && t.stateNode != null) vf(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(te(166));
        if (((n = yn(Ur.current)), yn(Tt.current), so(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[_t] = t),
            (l = r.nodeValue !== n) && ((e = it), e !== null))
          )
            switch (e.tag) {
              case 3:
                ao(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  ao(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          l && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[_t] = t),
            (t.stateNode = r);
      }
      return Ke(t), null;
    case 13:
      if (
        (ke(Oe),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (Ce && ot !== null && t.mode & 1 && !(t.flags & 128))
          Mc(), qn(), (t.flags |= 98560), (l = !1);
        else if (((l = so(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!l) throw Error(te(318));
            if (
              ((l = t.memoizedState),
              (l = l !== null ? l.dehydrated : null),
              !l)
            )
              throw Error(te(317));
            l[_t] = t;
          } else
            qn(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          Ke(t), (l = !1);
        } else xt !== null && (Ul(xt), (xt = null)), (l = !0);
        if (!l) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || Oe.current & 1 ? Le === 0 && (Le = 3) : Lu())),
          t.updateQueue !== null && (t.flags |= 4),
          Ke(t),
          null);
    case 4:
      return (
        er(), Rl(e, t), e === null && zr(t.stateNode.containerInfo), Ke(t), null
      );
    case 10:
      return yu(t.type._context), Ke(t), null;
    case 17:
      return tt(t.type) && Ao(), Ke(t), null;
    case 19:
      if ((ke(Oe), (l = t.memoizedState), l === null)) return Ke(t), null;
      if (((r = (t.flags & 128) !== 0), (c = l.rendering), c === null))
        if (r) hr(l, !1);
        else {
          if (Le !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((c = Vo(e)), c !== null)) {
                for (
                  t.flags |= 128,
                    hr(l, !1),
                    r = c.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (l = n),
                    (e = r),
                    (l.flags &= 14680066),
                    (c = l.alternate),
                    c === null
                      ? ((l.childLanes = 0),
                        (l.lanes = e),
                        (l.child = null),
                        (l.subtreeFlags = 0),
                        (l.memoizedProps = null),
                        (l.memoizedState = null),
                        (l.updateQueue = null),
                        (l.dependencies = null),
                        (l.stateNode = null))
                      : ((l.childLanes = c.childLanes),
                        (l.lanes = c.lanes),
                        (l.child = c.child),
                        (l.subtreeFlags = 0),
                        (l.deletions = null),
                        (l.memoizedProps = c.memoizedProps),
                        (l.memoizedState = c.memoizedState),
                        (l.updateQueue = c.updateQueue),
                        (l.type = c.type),
                        (e = c.dependencies),
                        (l.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling);
                return we(Oe, (Oe.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          l.tail !== null &&
            Ie() > nr &&
            ((t.flags |= 128), (r = !0), hr(l, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = Vo(c)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              hr(l, !0),
              l.tail === null && l.tailMode === "hidden" && !c.alternate && !Ce)
            )
              return Ke(t), null;
          } else
            2 * Ie() - l.renderingStartTime > nr &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), hr(l, !1), (t.lanes = 4194304));
        l.isBackwards
          ? ((c.sibling = t.child), (t.child = c))
          : ((n = l.last),
            n !== null ? (n.sibling = c) : (t.child = c),
            (l.last = c));
      }
      return l.tail !== null
        ? ((t = l.tail),
          (l.rendering = t),
          (l.tail = t.sibling),
          (l.renderingStartTime = Ie()),
          (t.sibling = null),
          (n = Oe.current),
          we(Oe, r ? (n & 1) | 2 : n & 1),
          t)
        : (Ke(t), null);
    case 22:
    case 23:
      return (
        Ru(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? rt & 1073741824 && (Ke(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : Ke(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(te(156, t.tag));
}
function Wp(e, t) {
  switch ((pu(t), t.tag)) {
    case 1:
      return (
        tt(t.type) && Ao(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        er(),
        ke(et),
        ke(Xe),
        Su(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return ku(t), null;
    case 13:
      if (
        (ke(Oe), (e = t.memoizedState), e !== null && e.dehydrated !== null)
      ) {
        if (t.alternate === null) throw Error(te(340));
        qn();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return ke(Oe), null;
    case 4:
      return er(), null;
    case 10:
      return yu(t.type._context), null;
    case 22:
    case 23:
      return Ru(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var po = !1,
  Ve = !1,
  Qp = typeof WeakSet == "function" ? WeakSet : Set,
  le = null;
function Un(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        Te(e, t, r);
      }
    else n.current = null;
}
function Ll(e, t, n) {
  try {
    n();
  } catch (r) {
    Te(e, t, r);
  }
}
var Xa = !1;
function Gp(e, t) {
  if (((yl = Lo), (e = wc()), fu(e))) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var i = r.anchorOffset,
            l = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, l.nodeType;
          } catch {
            n = null;
            break e;
          }
          var c = 0,
            y = -1,
            x = -1,
            b = 0,
            R = 0,
            F = e,
            f = null;
          t: for (;;) {
            for (
              var k;
              F !== n || (i !== 0 && F.nodeType !== 3) || (y = c + i),
                F !== l || (r !== 0 && F.nodeType !== 3) || (x = c + r),
                F.nodeType === 3 && (c += F.nodeValue.length),
                (k = F.firstChild) !== null;

            )
              (f = F), (F = k);
            for (;;) {
              if (F === e) break t;
              if (
                (f === n && ++b === i && (y = c),
                f === l && ++R === r && (x = c),
                (k = F.nextSibling) !== null)
              )
                break;
              (F = f), (f = F.parentNode);
            }
            F = k;
          }
          n = y === -1 || x === -1 ? null : { start: y, end: x };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (
    gl = { focusedElem: e, selectionRange: n }, Lo = !1, le = t;
    le !== null;

  )
    if (((t = le), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (le = e);
    else
      for (; le !== null; ) {
        t = le;
        try {
          var o = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (o !== null) {
                  var s = o.memoizedProps,
                    h = o.memoizedState,
                    u = t.stateNode,
                    a = u.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? s : gt(t.type, s),
                      h
                    );
                  u.__reactInternalSnapshotBeforeUpdate = a;
                }
                break;
              case 3:
                var p = t.stateNode.containerInfo;
                p.nodeType === 1
                  ? (p.textContent = "")
                  : p.nodeType === 9 &&
                    p.documentElement &&
                    p.removeChild(p.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(te(163));
            }
        } catch (m) {
          Te(t, t.return, m);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (le = e);
          break;
        }
        le = t.return;
      }
  return (o = Xa), (Xa = !1), o;
}
function Pr(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var i = (r = r.next);
    do {
      if ((i.tag & e) === e) {
        var l = i.destroy;
        (i.destroy = void 0), l !== void 0 && Ll(t, n, l);
      }
      i = i.next;
    } while (i !== r);
  }
}
function si(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function jl(e) {
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
    typeof t == "function" ? t(e) : (t.current = e);
  }
}
function yf(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), yf(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[_t], delete t[Fr], delete t[kl], delete t[Ip], delete t[Mp])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function gf(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Wa(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || gf(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function Dl(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = zo));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Dl(e, t, n), e = e.sibling; e !== null; ) Dl(e, t, n), (e = e.sibling);
}
function zl(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (zl(e, t, n), e = e.sibling; e !== null; ) zl(e, t, n), (e = e.sibling);
}
var Be = null,
  wt = !1;
function Kt(e, t, n) {
  for (n = n.child; n !== null; ) wf(e, t, n), (n = n.sibling);
}
function wf(e, t, n) {
  if (Nt && typeof Nt.onCommitFiberUnmount == "function")
    try {
      Nt.onCommitFiberUnmount(ti, n);
    } catch {}
  switch (n.tag) {
    case 5:
      Ve || Un(n, t);
    case 6:
      var r = Be,
        i = wt;
      (Be = null),
        Kt(e, t, n),
        (Be = r),
        (wt = i),
        Be !== null &&
          (wt
            ? ((e = Be),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : Be.removeChild(n.stateNode));
      break;
    case 18:
      Be !== null &&
        (wt
          ? ((e = Be),
            (n = n.stateNode),
            e.nodeType === 8
              ? Li(e.parentNode, n)
              : e.nodeType === 1 && Li(e, n),
            Lr(e))
          : Li(Be, n.stateNode));
      break;
    case 4:
      (r = Be),
        (i = wt),
        (Be = n.stateNode.containerInfo),
        (wt = !0),
        Kt(e, t, n),
        (Be = r),
        (wt = i);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !Ve &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        i = r = r.next;
        do {
          var l = i,
            c = l.destroy;
          (l = l.tag),
            c !== void 0 && (l & 2 || l & 4) && Ll(n, t, c),
            (i = i.next);
        } while (i !== r);
      }
      Kt(e, t, n);
      break;
    case 1:
      if (
        !Ve &&
        (Un(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (y) {
          Te(n, t, y);
        }
      Kt(e, t, n);
      break;
    case 21:
      Kt(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((Ve = (r = Ve) || n.memoizedState !== null), Kt(e, t, n), (Ve = r))
        : Kt(e, t, n);
      break;
    default:
      Kt(e, t, n);
  }
}
function Qa(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new Qp()),
      t.forEach(function (r) {
        var i = oh.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(i, i));
      });
  }
}
function yt(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var i = n[r];
      try {
        var l = e,
          c = t,
          y = c;
        e: for (; y !== null; ) {
          switch (y.tag) {
            case 5:
              (Be = y.stateNode), (wt = !1);
              break e;
            case 3:
              (Be = y.stateNode.containerInfo), (wt = !0);
              break e;
            case 4:
              (Be = y.stateNode.containerInfo), (wt = !0);
              break e;
          }
          y = y.return;
        }
        if (Be === null) throw Error(te(160));
        wf(l, c, i), (Be = null), (wt = !1);
        var x = i.alternate;
        x !== null && (x.return = null), (i.return = null);
      } catch (b) {
        Te(i, t, b);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) xf(t, e), (t = t.sibling);
}
function xf(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((yt(t, e), Ot(e), r & 4)) {
        try {
          Pr(3, e, e.return), si(3, e);
        } catch (s) {
          Te(e, e.return, s);
        }
        try {
          Pr(5, e, e.return);
        } catch (s) {
          Te(e, e.return, s);
        }
      }
      break;
    case 1:
      yt(t, e), Ot(e), r & 512 && n !== null && Un(n, n.return);
      break;
    case 5:
      if (
        (yt(t, e),
        Ot(e),
        r & 512 && n !== null && Un(n, n.return),
        e.flags & 32)
      ) {
        var i = e.stateNode;
        try {
          Tr(i, "");
        } catch (s) {
          Te(e, e.return, s);
        }
      }
      if (r & 4 && ((i = e.stateNode), i != null)) {
        var l = e.memoizedProps,
          c = n !== null ? n.memoizedProps : l,
          y = e.type,
          x = e.updateQueue;
        if (((e.updateQueue = null), x !== null))
          try {
            y === "input" && l.type === "radio" && l.name != null && Bs(i, l),
              ul(y, c);
            var b = ul(y, l);
            for (c = 0; c < x.length; c += 2) {
              var R = x[c],
                F = x[c + 1];
              R === "style"
                ? Vs(i, F)
                : R === "dangerouslySetInnerHTML"
                ? Hs(i, F)
                : R === "children"
                ? Tr(i, F)
                : ql(i, R, F, b);
            }
            switch (y) {
              case "input":
                nl(i, l);
                break;
              case "textarea":
                Us(i, l);
                break;
              case "select":
                var f = i._wrapperState.wasMultiple;
                i._wrapperState.wasMultiple = !!l.multiple;
                var k = l.value;
                k != null
                  ? Hn(i, !!l.multiple, k, !1)
                  : f !== !!l.multiple &&
                    (l.defaultValue != null
                      ? Hn(i, !!l.multiple, l.defaultValue, !0)
                      : Hn(i, !!l.multiple, l.multiple ? [] : "", !1));
            }
            i[Fr] = l;
          } catch (s) {
            Te(e, e.return, s);
          }
      }
      break;
    case 6:
      if ((yt(t, e), Ot(e), r & 4)) {
        if (e.stateNode === null) throw Error(te(162));
        (i = e.stateNode), (l = e.memoizedProps);
        try {
          i.nodeValue = l;
        } catch (s) {
          Te(e, e.return, s);
        }
      }
      break;
    case 3:
      if (
        (yt(t, e), Ot(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          Lr(t.containerInfo);
        } catch (s) {
          Te(e, e.return, s);
        }
      break;
    case 4:
      yt(t, e), Ot(e);
      break;
    case 13:
      yt(t, e),
        Ot(e),
        (i = e.child),
        i.flags & 8192 &&
          ((l = i.memoizedState !== null),
          (i.stateNode.isHidden = l),
          !l ||
            (i.alternate !== null && i.alternate.memoizedState !== null) ||
            (Iu = Ie())),
        r & 4 && Qa(e);
      break;
    case 22:
      if (
        ((R = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((Ve = (b = Ve) || R), yt(t, e), (Ve = b)) : yt(t, e),
        Ot(e),
        r & 8192)
      ) {
        if (
          ((b = e.memoizedState !== null),
          (e.stateNode.isHidden = b) && !R && e.mode & 1)
        )
          for (le = e, R = e.child; R !== null; ) {
            for (F = le = R; le !== null; ) {
              switch (((f = le), (k = f.child), f.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Pr(4, f, f.return);
                  break;
                case 1:
                  Un(f, f.return);
                  var o = f.stateNode;
                  if (typeof o.componentWillUnmount == "function") {
                    (r = f), (n = f.return);
                    try {
                      (t = r),
                        (o.props = t.memoizedProps),
                        (o.state = t.memoizedState),
                        o.componentWillUnmount();
                    } catch (s) {
                      Te(r, n, s);
                    }
                  }
                  break;
                case 5:
                  Un(f, f.return);
                  break;
                case 22:
                  if (f.memoizedState !== null) {
                    Ya(F);
                    continue;
                  }
              }
              k !== null ? ((k.return = f), (le = k)) : Ya(F);
            }
            R = R.sibling;
          }
        e: for (R = null, F = e; ; ) {
          if (F.tag === 5) {
            if (R === null) {
              R = F;
              try {
                (i = F.stateNode),
                  b
                    ? ((l = i.style),
                      typeof l.setProperty == "function"
                        ? l.setProperty("display", "none", "important")
                        : (l.display = "none"))
                    : ((y = F.stateNode),
                      (x = F.memoizedProps.style),
                      (c =
                        x != null && x.hasOwnProperty("display")
                          ? x.display
                          : null),
                      (y.style.display = Ks("display", c)));
              } catch (s) {
                Te(e, e.return, s);
              }
            }
          } else if (F.tag === 6) {
            if (R === null)
              try {
                F.stateNode.nodeValue = b ? "" : F.memoizedProps;
              } catch (s) {
                Te(e, e.return, s);
              }
          } else if (
            ((F.tag !== 22 && F.tag !== 23) ||
              F.memoizedState === null ||
              F === e) &&
            F.child !== null
          ) {
            (F.child.return = F), (F = F.child);
            continue;
          }
          if (F === e) break e;
          for (; F.sibling === null; ) {
            if (F.return === null || F.return === e) break e;
            R === F && (R = null), (F = F.return);
          }
          R === F && (R = null), (F.sibling.return = F.return), (F = F.sibling);
        }
      }
      break;
    case 19:
      yt(t, e), Ot(e), r & 4 && Qa(e);
      break;
    case 21:
      break;
    default:
      yt(t, e), Ot(e);
  }
}
function Ot(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (gf(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(te(160));
      }
      switch (r.tag) {
        case 5:
          var i = r.stateNode;
          r.flags & 32 && (Tr(i, ""), (r.flags &= -33));
          var l = Wa(e);
          zl(e, l, i);
          break;
        case 3:
        case 4:
          var c = r.stateNode.containerInfo,
            y = Wa(e);
          Dl(e, y, c);
          break;
        default:
          throw Error(te(161));
      }
    } catch (x) {
      Te(e, e.return, x);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function Yp(e, t, n) {
  (le = e), kf(e);
}
function kf(e, t, n) {
  for (var r = (e.mode & 1) !== 0; le !== null; ) {
    var i = le,
      l = i.child;
    if (i.tag === 22 && r) {
      var c = i.memoizedState !== null || po;
      if (!c) {
        var y = i.alternate,
          x = (y !== null && y.memoizedState !== null) || Ve;
        y = po;
        var b = Ve;
        if (((po = c), (Ve = x) && !b))
          for (le = i; le !== null; )
            (c = le),
              (x = c.child),
              c.tag === 22 && c.memoizedState !== null
                ? Za(i)
                : x !== null
                ? ((x.return = c), (le = x))
                : Za(i);
        for (; l !== null; ) (le = l), kf(l), (l = l.sibling);
        (le = i), (po = y), (Ve = b);
      }
      Ga(e);
    } else
      i.subtreeFlags & 8772 && l !== null ? ((l.return = i), (le = l)) : Ga(e);
  }
}
function Ga(e) {
  for (; le !== null; ) {
    var t = le;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              Ve || si(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !Ve)
                if (n === null) r.componentDidMount();
                else {
                  var i =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : gt(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    i,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var l = t.updateQueue;
              l !== null && Ma(t, l, r);
              break;
            case 3:
              var c = t.updateQueue;
              if (c !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                Ma(t, c, n);
              }
              break;
            case 5:
              var y = t.stateNode;
              if (n === null && t.flags & 4) {
                n = y;
                var x = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    x.autoFocus && n.focus();
                    break;
                  case "img":
                    x.src && (n.src = x.src);
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
                var b = t.alternate;
                if (b !== null) {
                  var R = b.memoizedState;
                  if (R !== null) {
                    var F = R.dehydrated;
                    F !== null && Lr(F);
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
              throw Error(te(163));
          }
        Ve || (t.flags & 512 && jl(t));
      } catch (f) {
        Te(t, t.return, f);
      }
    }
    if (t === e) {
      le = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (le = n);
      break;
    }
    le = t.return;
  }
}
function Ya(e) {
  for (; le !== null; ) {
    var t = le;
    if (t === e) {
      le = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (le = n);
      break;
    }
    le = t.return;
  }
}
function Za(e) {
  for (; le !== null; ) {
    var t = le;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            si(4, t);
          } catch (x) {
            Te(t, n, x);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var i = t.return;
            try {
              r.componentDidMount();
            } catch (x) {
              Te(t, i, x);
            }
          }
          var l = t.return;
          try {
            jl(t);
          } catch (x) {
            Te(t, l, x);
          }
          break;
        case 5:
          var c = t.return;
          try {
            jl(t);
          } catch (x) {
            Te(t, c, x);
          }
      }
    } catch (x) {
      Te(t, t.return, x);
    }
    if (t === e) {
      le = null;
      break;
    }
    var y = t.sibling;
    if (y !== null) {
      (y.return = t.return), (le = y);
      break;
    }
    le = t.return;
  }
}
var Zp = Math.ceil,
  Qo = Ut.ReactCurrentDispatcher,
  Nu = Ut.ReactCurrentOwner,
  dt = Ut.ReactCurrentBatchConfig,
  ve = 0,
  Fe = null,
  Me = null,
  Ue = 0,
  rt = 0,
  $n = sn(0),
  Le = 0,
  Vr = null,
  En = 0,
  ci = 0,
  Tu = 0,
  br = null,
  qe = null,
  Iu = 0,
  nr = 1 / 0,
  Mt = null,
  Go = !1,
  Al = null,
  nn = null,
  ho = !1,
  Yt = null,
  Yo = 0,
  _r = 0,
  Fl = null,
  Po = -1,
  bo = 0;
function Ge() {
  return ve & 6 ? Ie() : Po !== -1 ? Po : (Po = Ie());
}
function rn(e) {
  return e.mode & 1
    ? ve & 2 && Ue !== 0
      ? Ue & -Ue
      : Lp.transition !== null
      ? (bo === 0 && (bo = rc()), bo)
      : ((e = ye),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : cc(e.type))),
        e)
    : 1;
}
function St(e, t, n, r) {
  if (50 < _r) throw ((_r = 0), (Fl = null), Error(te(185)));
  Qr(e, n, r),
    (!(ve & 2) || e !== Fe) &&
      (e === Fe && (!(ve & 2) && (ci |= n), Le === 4 && Qt(e, Ue)),
      nt(e, r),
      n === 1 && ve === 0 && !(t.mode & 1) && ((nr = Ie() + 500), li && cn()));
}
function nt(e, t) {
  var n = e.callbackNode;
  Ld(e, t);
  var r = Ro(e, e === Fe ? Ue : 0);
  if (r === 0)
    n !== null && la(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && la(n), t === 1))
      e.tag === 0 ? Rp(qa.bind(null, e)) : Nc(qa.bind(null, e)),
        Np(function () {
          !(ve & 6) && cn();
        }),
        (n = null);
    else {
      switch (oc(r)) {
        case 1:
          n = ru;
          break;
        case 4:
          n = tc;
          break;
        case 16:
          n = Mo;
          break;
        case 536870912:
          n = nc;
          break;
        default:
          n = Mo;
      }
      n = Nf(n, Sf.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function Sf(e, t) {
  if (((Po = -1), (bo = 0), ve & 6)) throw Error(te(327));
  var n = e.callbackNode;
  if (Qn() && e.callbackNode !== n) return null;
  var r = Ro(e, e === Fe ? Ue : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = Zo(e, r);
  else {
    t = r;
    var i = ve;
    ve |= 2;
    var l = Cf();
    (Fe !== e || Ue !== t) && ((Mt = null), (nr = Ie() + 500), gn(e, t));
    do
      try {
        eh();
        break;
      } catch (y) {
        Ef(e, y);
      }
    while (!0);
    vu(),
      (Qo.current = l),
      (ve = i),
      Me !== null ? (t = 0) : ((Fe = null), (Ue = 0), (t = Le));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((i = dl(e)), i !== 0 && ((r = i), (t = Bl(e, i)))), t === 1)
    )
      throw ((n = Vr), gn(e, 0), Qt(e, r), nt(e, Ie()), n);
    if (t === 6) Qt(e, r);
    else {
      if (
        ((i = e.current.alternate),
        !(r & 30) &&
          !qp(i) &&
          ((t = Zo(e, r)),
          t === 2 && ((l = dl(e)), l !== 0 && ((r = l), (t = Bl(e, l)))),
          t === 1))
      )
        throw ((n = Vr), gn(e, 0), Qt(e, r), nt(e, Ie()), n);
      switch (((e.finishedWork = i), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(te(345));
        case 2:
          hn(e, qe, Mt);
          break;
        case 3:
          if (
            (Qt(e, r), (r & 130023424) === r && ((t = Iu + 500 - Ie()), 10 < t))
          ) {
            if (Ro(e, 0) !== 0) break;
            if (((i = e.suspendedLanes), (i & r) !== r)) {
              Ge(), (e.pingedLanes |= e.suspendedLanes & i);
              break;
            }
            e.timeoutHandle = xl(hn.bind(null, e, qe, Mt), t);
            break;
          }
          hn(e, qe, Mt);
          break;
        case 4:
          if ((Qt(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, i = -1; 0 < r; ) {
            var c = 31 - kt(r);
            (l = 1 << c), (c = t[c]), c > i && (i = c), (r &= ~l);
          }
          if (
            ((r = i),
            (r = Ie() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                ? 480
                : 1080 > r
                ? 1080
                : 1920 > r
                ? 1920
                : 3e3 > r
                ? 3e3
                : 4320 > r
                ? 4320
                : 1960 * Zp(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = xl(hn.bind(null, e, qe, Mt), r);
            break;
          }
          hn(e, qe, Mt);
          break;
        case 5:
          hn(e, qe, Mt);
          break;
        default:
          throw Error(te(329));
      }
    }
  }
  return nt(e, Ie()), e.callbackNode === n ? Sf.bind(null, e) : null;
}
function Bl(e, t) {
  var n = br;
  return (
    e.current.memoizedState.isDehydrated && (gn(e, t).flags |= 256),
    (e = Zo(e, t)),
    e !== 2 && ((t = qe), (qe = n), t !== null && Ul(t)),
    e
  );
}
function Ul(e) {
  qe === null ? (qe = e) : qe.push.apply(qe, e);
}
function qp(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var i = n[r],
            l = i.getSnapshot;
          i = i.value;
          try {
            if (!Et(l(), i)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
      (n.return = t), (t = n);
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
  }
  return !0;
}
function Qt(e, t) {
  for (
    t &= ~Tu,
      t &= ~ci,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - kt(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function qa(e) {
  if (ve & 6) throw Error(te(327));
  Qn();
  var t = Ro(e, 0);
  if (!(t & 1)) return nt(e, Ie()), null;
  var n = Zo(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = dl(e);
    r !== 0 && ((t = r), (n = Bl(e, r)));
  }
  if (n === 1) throw ((n = Vr), gn(e, 0), Qt(e, t), nt(e, Ie()), n);
  if (n === 6) throw Error(te(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    hn(e, qe, Mt),
    nt(e, Ie()),
    null
  );
}
function Mu(e, t) {
  var n = ve;
  ve |= 1;
  try {
    return e(t);
  } finally {
    (ve = n), ve === 0 && ((nr = Ie() + 500), li && cn());
  }
}
function Cn(e) {
  Yt !== null && Yt.tag === 0 && !(ve & 6) && Qn();
  var t = ve;
  ve |= 1;
  var n = dt.transition,
    r = ye;
  try {
    if (((dt.transition = null), (ye = 1), e)) return e();
  } finally {
    (ye = r), (dt.transition = n), (ve = t), !(ve & 6) && cn();
  }
}
function Ru() {
  (rt = $n.current), ke($n);
}
function gn(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), _p(n)), Me !== null))
    for (n = Me.return; n !== null; ) {
      var r = n;
      switch ((pu(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && Ao();
          break;
        case 3:
          er(), ke(et), ke(Xe), Su();
          break;
        case 5:
          ku(r);
          break;
        case 4:
          er();
          break;
        case 13:
          ke(Oe);
          break;
        case 19:
          ke(Oe);
          break;
        case 10:
          yu(r.type._context);
          break;
        case 22:
        case 23:
          Ru();
      }
      n = n.return;
    }
  if (
    ((Fe = e),
    (Me = e = on(e.current, null)),
    (Ue = rt = t),
    (Le = 0),
    (Vr = null),
    (Tu = ci = En = 0),
    (qe = br = null),
    vn !== null)
  ) {
    for (t = 0; t < vn.length; t++)
      if (((n = vn[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var i = r.next,
          l = n.pending;
        if (l !== null) {
          var c = l.next;
          (l.next = i), (r.next = c);
        }
        n.pending = r;
      }
    vn = null;
  }
  return e;
}
function Ef(e, t) {
  do {
    var n = Me;
    try {
      if ((vu(), (Eo.current = Wo), Xo)) {
        for (var r = Pe.memoizedState; r !== null; ) {
          var i = r.queue;
          i !== null && (i.pending = null), (r = r.next);
        }
        Xo = !1;
      }
      if (
        ((Sn = 0),
        (Ae = Re = Pe = null),
        (Or = !1),
        ($r = 0),
        (Nu.current = null),
        n === null || n.return === null)
      ) {
        (Le = 1), (Vr = t), (Me = null);
        break;
      }
      e: {
        var l = e,
          c = n.return,
          y = n,
          x = t;
        if (
          ((t = Ue),
          (y.flags |= 32768),
          x !== null && typeof x == "object" && typeof x.then == "function")
        ) {
          var b = x,
            R = y,
            F = R.tag;
          if (!(R.mode & 1) && (F === 0 || F === 11 || F === 15)) {
            var f = R.alternate;
            f
              ? ((R.updateQueue = f.updateQueue),
                (R.memoizedState = f.memoizedState),
                (R.lanes = f.lanes))
              : ((R.updateQueue = null), (R.memoizedState = null));
          }
          var k = Fa(c);
          if (k !== null) {
            (k.flags &= -257),
              Ba(k, c, y, l, t),
              k.mode & 1 && Aa(l, b, t),
              (t = k),
              (x = b);
            var o = t.updateQueue;
            if (o === null) {
              var s = new Set();
              s.add(x), (t.updateQueue = s);
            } else o.add(x);
            break e;
          } else {
            if (!(t & 1)) {
              Aa(l, b, t), Lu();
              break e;
            }
            x = Error(te(426));
          }
        } else if (Ce && y.mode & 1) {
          var h = Fa(c);
          if (h !== null) {
            !(h.flags & 65536) && (h.flags |= 256),
              Ba(h, c, y, l, t),
              hu(tr(x, y));
            break e;
          }
        }
        (l = x = tr(x, y)),
          Le !== 4 && (Le = 2),
          br === null ? (br = [l]) : br.push(l),
          (l = c);
        do {
          switch (l.tag) {
            case 3:
              (l.flags |= 65536), (t &= -t), (l.lanes |= t);
              var u = lf(l, x, t);
              Ia(l, u);
              break e;
            case 1:
              y = x;
              var a = l.type,
                p = l.stateNode;
              if (
                !(l.flags & 128) &&
                (typeof a.getDerivedStateFromError == "function" ||
                  (p !== null &&
                    typeof p.componentDidCatch == "function" &&
                    (nn === null || !nn.has(p))))
              ) {
                (l.flags |= 65536), (t &= -t), (l.lanes |= t);
                var m = uf(l, y, t);
                Ia(l, m);
                break e;
              }
          }
          l = l.return;
        } while (l !== null);
      }
      Pf(n);
    } catch (d) {
      (t = d), Me === n && n !== null && (Me = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function Cf() {
  var e = Qo.current;
  return (Qo.current = Wo), e === null ? Wo : e;
}
function Lu() {
  (Le === 0 || Le === 3 || Le === 2) && (Le = 4),
    Fe === null || (!(En & 268435455) && !(ci & 268435455)) || Qt(Fe, Ue);
}
function Zo(e, t) {
  var n = ve;
  ve |= 2;
  var r = Cf();
  (Fe !== e || Ue !== t) && ((Mt = null), gn(e, t));
  do
    try {
      Jp();
      break;
    } catch (i) {
      Ef(e, i);
    }
  while (!0);
  if ((vu(), (ve = n), (Qo.current = r), Me !== null)) throw Error(te(261));
  return (Fe = null), (Ue = 0), Le;
}
function Jp() {
  for (; Me !== null; ) Of(Me);
}
function eh() {
  for (; Me !== null && !Od(); ) Of(Me);
}
function Of(e) {
  var t = _f(e.alternate, e, rt);
  (e.memoizedProps = e.pendingProps),
    t === null ? Pf(e) : (Me = t),
    (Nu.current = null);
}
function Pf(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = Wp(n, t)), n !== null)) {
        (n.flags &= 32767), (Me = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (Le = 6), (Me = null);
        return;
      }
    } else if (((n = Xp(n, t, rt)), n !== null)) {
      Me = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      Me = t;
      return;
    }
    Me = t = e;
  } while (t !== null);
  Le === 0 && (Le = 5);
}
function hn(e, t, n) {
  var r = ye,
    i = dt.transition;
  try {
    (dt.transition = null), (ye = 1), th(e, t, n, r);
  } finally {
    (dt.transition = i), (ye = r);
  }
  return null;
}
function th(e, t, n, r) {
  do Qn();
  while (Yt !== null);
  if (ve & 6) throw Error(te(327));
  n = e.finishedWork;
  var i = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(te(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var l = n.lanes | n.childLanes;
  if (
    (jd(e, l),
    e === Fe && ((Me = Fe = null), (Ue = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      ho ||
      ((ho = !0),
      Nf(Mo, function () {
        return Qn(), null;
      })),
    (l = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || l)
  ) {
    (l = dt.transition), (dt.transition = null);
    var c = ye;
    ye = 1;
    var y = ve;
    (ve |= 4),
      (Nu.current = null),
      Gp(e, n),
      xf(n, e),
      kp(gl),
      (Lo = !!yl),
      (gl = yl = null),
      (e.current = n),
      Yp(n),
      Pd(),
      (ve = y),
      (ye = c),
      (dt.transition = l);
  } else e.current = n;
  if (
    (ho && ((ho = !1), (Yt = e), (Yo = i)),
    (l = e.pendingLanes),
    l === 0 && (nn = null),
    Nd(n.stateNode),
    nt(e, Ie()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (i = t[n]), r(i.value, { componentStack: i.stack, digest: i.digest });
  if (Go) throw ((Go = !1), (e = Al), (Al = null), e);
  return (
    Yo & 1 && e.tag !== 0 && Qn(),
    (l = e.pendingLanes),
    l & 1 ? (e === Fl ? _r++ : ((_r = 0), (Fl = e))) : (_r = 0),
    cn(),
    null
  );
}
function Qn() {
  if (Yt !== null) {
    var e = oc(Yo),
      t = dt.transition,
      n = ye;
    try {
      if (((dt.transition = null), (ye = 16 > e ? 16 : e), Yt === null))
        var r = !1;
      else {
        if (((e = Yt), (Yt = null), (Yo = 0), ve & 6)) throw Error(te(331));
        var i = ve;
        for (ve |= 4, le = e.current; le !== null; ) {
          var l = le,
            c = l.child;
          if (le.flags & 16) {
            var y = l.deletions;
            if (y !== null) {
              for (var x = 0; x < y.length; x++) {
                var b = y[x];
                for (le = b; le !== null; ) {
                  var R = le;
                  switch (R.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Pr(8, R, l);
                  }
                  var F = R.child;
                  if (F !== null) (F.return = R), (le = F);
                  else
                    for (; le !== null; ) {
                      R = le;
                      var f = R.sibling,
                        k = R.return;
                      if ((yf(R), R === b)) {
                        le = null;
                        break;
                      }
                      if (f !== null) {
                        (f.return = k), (le = f);
                        break;
                      }
                      le = k;
                    }
                }
              }
              var o = l.alternate;
              if (o !== null) {
                var s = o.child;
                if (s !== null) {
                  o.child = null;
                  do {
                    var h = s.sibling;
                    (s.sibling = null), (s = h);
                  } while (s !== null);
                }
              }
              le = l;
            }
          }
          if (l.subtreeFlags & 2064 && c !== null) (c.return = l), (le = c);
          else
            e: for (; le !== null; ) {
              if (((l = le), l.flags & 2048))
                switch (l.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Pr(9, l, l.return);
                }
              var u = l.sibling;
              if (u !== null) {
                (u.return = l.return), (le = u);
                break e;
              }
              le = l.return;
            }
        }
        var a = e.current;
        for (le = a; le !== null; ) {
          c = le;
          var p = c.child;
          if (c.subtreeFlags & 2064 && p !== null) (p.return = c), (le = p);
          else
            e: for (c = a; le !== null; ) {
              if (((y = le), y.flags & 2048))
                try {
                  switch (y.tag) {
                    case 0:
                    case 11:
                    case 15:
                      si(9, y);
                  }
                } catch (d) {
                  Te(y, y.return, d);
                }
              if (y === c) {
                le = null;
                break e;
              }
              var m = y.sibling;
              if (m !== null) {
                (m.return = y.return), (le = m);
                break e;
              }
              le = y.return;
            }
        }
        if (
          ((ve = i), cn(), Nt && typeof Nt.onPostCommitFiberRoot == "function")
        )
          try {
            Nt.onPostCommitFiberRoot(ti, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (ye = n), (dt.transition = t);
    }
  }
  return !1;
}
function Ja(e, t, n) {
  (t = tr(n, t)),
    (t = lf(e, t, 1)),
    (e = tn(e, t, 1)),
    (t = Ge()),
    e !== null && (Qr(e, 1, t), nt(e, t));
}
function Te(e, t, n) {
  if (e.tag === 3) Ja(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        Ja(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (nn === null || !nn.has(r)))
        ) {
          (e = tr(n, e)),
            (e = uf(t, e, 1)),
            (t = tn(t, e, 1)),
            (e = Ge()),
            t !== null && (Qr(t, 1, e), nt(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function nh(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = Ge()),
    (e.pingedLanes |= e.suspendedLanes & n),
    Fe === e &&
      (Ue & n) === n &&
      (Le === 4 || (Le === 3 && (Ue & 130023424) === Ue && 500 > Ie() - Iu)
        ? gn(e, 0)
        : (Tu |= n)),
    nt(e, t);
}
function bf(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = ro), (ro <<= 1), !(ro & 130023424) && (ro = 4194304))
      : (t = 1));
  var n = Ge();
  (e = Ft(e, t)), e !== null && (Qr(e, t, n), nt(e, n));
}
function rh(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), bf(e, n);
}
function oh(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        i = e.memoizedState;
      i !== null && (n = i.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(te(314));
  }
  r !== null && r.delete(t), bf(e, n);
}
var _f;
_f = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || et.current) Je = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (Je = !1), Vp(e, t, n);
      Je = !!(e.flags & 131072);
    }
  else (Je = !1), Ce && t.flags & 1048576 && Tc(t, Uo, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      Oo(e, t), (e = t.pendingProps);
      var i = Zn(t, Xe.current);
      Wn(t, n), (i = Cu(null, t, r, e, i, n));
      var l = Ou();
      return (
        (t.flags |= 1),
        typeof i == "object" &&
        i !== null &&
        typeof i.render == "function" &&
        i.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            tt(r) ? ((l = !0), Fo(t)) : (l = !1),
            (t.memoizedState =
              i.state !== null && i.state !== void 0 ? i.state : null),
            wu(t),
            (i.updater = ui),
            (t.stateNode = i),
            (i._reactInternals = t),
            bl(t, r, e, n),
            (t = Tl(null, t, r, !0, l, n)))
          : ((t.tag = 0), Ce && l && du(t), Qe(null, t, i, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (Oo(e, t),
          (e = t.pendingProps),
          (i = r._init),
          (r = i(r._payload)),
          (t.type = r),
          (i = t.tag = lh(r)),
          (e = gt(r, e)),
          i)
        ) {
          case 0:
            t = Nl(null, t, r, e, n);
            break e;
          case 1:
            t = Ha(null, t, r, e, n);
            break e;
          case 11:
            t = Ua(null, t, r, e, n);
            break e;
          case 14:
            t = $a(null, t, r, gt(r.type, e), n);
            break e;
        }
        throw Error(te(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : gt(r, i)),
        Nl(e, t, r, i, n)
      );
    case 1:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : gt(r, i)),
        Ha(e, t, r, i, n)
      );
    case 3:
      e: {
        if ((ff(t), e === null)) throw Error(te(387));
        (r = t.pendingProps),
          (l = t.memoizedState),
          (i = l.element),
          Lc(e, t),
          Ko(t, r, null, n);
        var c = t.memoizedState;
        if (((r = c.element), l.isDehydrated))
          if (
            ((l = {
              element: r,
              isDehydrated: !1,
              cache: c.cache,
              pendingSuspenseBoundaries: c.pendingSuspenseBoundaries,
              transitions: c.transitions,
            }),
            (t.updateQueue.baseState = l),
            (t.memoizedState = l),
            t.flags & 256)
          ) {
            (i = tr(Error(te(423)), t)), (t = Ka(e, t, r, n, i));
            break e;
          } else if (r !== i) {
            (i = tr(Error(te(424)), t)), (t = Ka(e, t, r, n, i));
            break e;
          } else
            for (
              ot = en(t.stateNode.containerInfo.firstChild),
                it = t,
                Ce = !0,
                xt = null,
                n = Ac(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((qn(), r === i)) {
            t = Bt(e, t, n);
            break e;
          }
          Qe(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        Fc(t),
        e === null && Cl(t),
        (r = t.type),
        (i = t.pendingProps),
        (l = e !== null ? e.memoizedProps : null),
        (c = i.children),
        wl(r, i) ? (c = null) : l !== null && wl(r, l) && (t.flags |= 32),
        cf(e, t),
        Qe(e, t, c, n),
        t.child
      );
    case 6:
      return e === null && Cl(t), null;
    case 13:
      return df(e, t, n);
    case 4:
      return (
        xu(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = Jn(t, null, r, n)) : Qe(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : gt(r, i)),
        Ua(e, t, r, i, n)
      );
    case 7:
      return Qe(e, t, t.pendingProps, n), t.child;
    case 8:
      return Qe(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return Qe(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (i = t.pendingProps),
          (l = t.memoizedProps),
          (c = i.value),
          we($o, r._currentValue),
          (r._currentValue = c),
          l !== null)
        )
          if (Et(l.value, c)) {
            if (l.children === i.children && !et.current) {
              t = Bt(e, t, n);
              break e;
            }
          } else
            for (l = t.child, l !== null && (l.return = t); l !== null; ) {
              var y = l.dependencies;
              if (y !== null) {
                c = l.child;
                for (var x = y.firstContext; x !== null; ) {
                  if (x.context === r) {
                    if (l.tag === 1) {
                      (x = Dt(-1, n & -n)), (x.tag = 2);
                      var b = l.updateQueue;
                      if (b !== null) {
                        b = b.shared;
                        var R = b.pending;
                        R === null
                          ? (x.next = x)
                          : ((x.next = R.next), (R.next = x)),
                          (b.pending = x);
                      }
                    }
                    (l.lanes |= n),
                      (x = l.alternate),
                      x !== null && (x.lanes |= n),
                      Ol(l.return, n, t),
                      (y.lanes |= n);
                    break;
                  }
                  x = x.next;
                }
              } else if (l.tag === 10) c = l.type === t.type ? null : l.child;
              else if (l.tag === 18) {
                if (((c = l.return), c === null)) throw Error(te(341));
                (c.lanes |= n),
                  (y = c.alternate),
                  y !== null && (y.lanes |= n),
                  Ol(c, n, t),
                  (c = l.sibling);
              } else c = l.child;
              if (c !== null) c.return = l;
              else
                for (c = l; c !== null; ) {
                  if (c === t) {
                    c = null;
                    break;
                  }
                  if (((l = c.sibling), l !== null)) {
                    (l.return = c.return), (c = l);
                    break;
                  }
                  c = c.return;
                }
              l = c;
            }
        Qe(e, t, i.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (i = t.type),
        (r = t.pendingProps.children),
        Wn(t, n),
        (i = pt(i)),
        (r = r(i)),
        (t.flags |= 1),
        Qe(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (i = gt(r, t.pendingProps)),
        (i = gt(r.type, i)),
        $a(e, t, r, i, n)
      );
    case 15:
      return af(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : gt(r, i)),
        Oo(e, t),
        (t.tag = 1),
        tt(r) ? ((e = !0), Fo(t)) : (e = !1),
        Wn(t, n),
        Dc(t, r, i),
        bl(t, r, i, n),
        Tl(null, t, r, !0, e, n)
      );
    case 19:
      return pf(e, t, n);
    case 22:
      return sf(e, t, n);
  }
  throw Error(te(156, t.tag));
};
function Nf(e, t) {
  return ec(e, t);
}
function ih(e, t, n, r) {
  (this.tag = e),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function ft(e, t, n, r) {
  return new ih(e, t, n, r);
}
function ju(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function lh(e) {
  if (typeof e == "function") return ju(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === eu)) return 11;
    if (e === tu) return 14;
  }
  return 2;
}
function on(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = ft(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function _o(e, t, n, r, i, l) {
  var c = 2;
  if (((r = e), typeof e == "function")) ju(e) && (c = 1);
  else if (typeof e == "string") c = 5;
  else
    e: switch (e) {
      case Mn:
        return wn(n.children, i, l, t);
      case Jl:
        (c = 8), (i |= 8);
        break;
      case Zi:
        return (
          (e = ft(12, n, t, i | 2)), (e.elementType = Zi), (e.lanes = l), e
        );
      case qi:
        return (e = ft(13, n, t, i)), (e.elementType = qi), (e.lanes = l), e;
      case Ji:
        return (e = ft(19, n, t, i)), (e.elementType = Ji), (e.lanes = l), e;
      case zs:
        return fi(n, i, l, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case js:
              c = 10;
              break e;
            case Ds:
              c = 9;
              break e;
            case eu:
              c = 11;
              break e;
            case tu:
              c = 14;
              break e;
            case Vt:
              (c = 16), (r = null);
              break e;
          }
        throw Error(te(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = ft(c, n, t, i)), (t.elementType = e), (t.type = r), (t.lanes = l), t
  );
}
function wn(e, t, n, r) {
  return (e = ft(7, e, r, t)), (e.lanes = n), e;
}
function fi(e, t, n, r) {
  return (
    (e = ft(22, e, r, t)),
    (e.elementType = zs),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function $i(e, t, n) {
  return (e = ft(6, e, null, t)), (e.lanes = n), e;
}
function Hi(e, t, n) {
  return (
    (t = ft(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function uh(e, t, n, r, i) {
  (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = Ei(0)),
    (this.expirationTimes = Ei(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = Ei(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = i),
    (this.mutableSourceEagerHydrationData = null);
}
function Du(e, t, n, r, i, l, c, y, x) {
  return (
    (e = new uh(e, t, n, y, x)),
    t === 1 ? ((t = 1), l === !0 && (t |= 8)) : (t = 0),
    (l = ft(3, null, null, t)),
    (e.current = l),
    (l.stateNode = e),
    (l.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    wu(l),
    e
  );
}
function ah(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: In,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function Tf(e) {
  if (!e) return un;
  e = e._reactInternals;
  e: {
    if (Pn(e) !== e || e.tag !== 1) throw Error(te(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (tt(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(te(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (tt(n)) return _c(e, n, t);
  }
  return t;
}
function If(e, t, n, r, i, l, c, y, x) {
  return (
    (e = Du(n, r, !0, e, i, l, c, y, x)),
    (e.context = Tf(null)),
    (n = e.current),
    (r = Ge()),
    (i = rn(n)),
    (l = Dt(r, i)),
    (l.callback = t ?? null),
    tn(n, l, i),
    (e.current.lanes = i),
    Qr(e, i, r),
    nt(e, r),
    e
  );
}
function di(e, t, n, r) {
  var i = t.current,
    l = Ge(),
    c = rn(i);
  return (
    (n = Tf(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = Dt(l, c)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = tn(i, t, c)),
    e !== null && (St(e, i, c, l), So(e, i, c)),
    c
  );
}
function qo(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function es(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function zu(e, t) {
  es(e, t), (e = e.alternate) && es(e, t);
}
function sh() {
  return null;
}
var Mf =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function Au(e) {
  this._internalRoot = e;
}
pi.prototype.render = Au.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(te(409));
  di(e, t, null, null);
};
pi.prototype.unmount = Au.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    Cn(function () {
      di(null, e, null, null);
    }),
      (t[At] = null);
  }
};
function pi(e) {
  this._internalRoot = e;
}
pi.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = uc();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < Wt.length && t !== 0 && t < Wt[n].priority; n++);
    Wt.splice(n, 0, e), n === 0 && sc(e);
  }
};
function Fu(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function hi(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function ts() {}
function ch(e, t, n, r, i) {
  if (i) {
    if (typeof r == "function") {
      var l = r;
      r = function () {
        var b = qo(c);
        l.call(b);
      };
    }
    var c = If(t, r, e, 0, null, !1, !1, "", ts);
    return (
      (e._reactRootContainer = c),
      (e[At] = c.current),
      zr(e.nodeType === 8 ? e.parentNode : e),
      Cn(),
      c
    );
  }
  for (; (i = e.lastChild); ) e.removeChild(i);
  if (typeof r == "function") {
    var y = r;
    r = function () {
      var b = qo(x);
      y.call(b);
    };
  }
  var x = Du(e, 0, !1, null, null, !1, !1, "", ts);
  return (
    (e._reactRootContainer = x),
    (e[At] = x.current),
    zr(e.nodeType === 8 ? e.parentNode : e),
    Cn(function () {
      di(t, x, n, r);
    }),
    x
  );
}
function mi(e, t, n, r, i) {
  var l = n._reactRootContainer;
  if (l) {
    var c = l;
    if (typeof i == "function") {
      var y = i;
      i = function () {
        var x = qo(c);
        y.call(x);
      };
    }
    di(t, c, e, i);
  } else c = ch(n, t, e, i, r);
  return qo(c);
}
ic = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = gr(t.pendingLanes);
        n !== 0 &&
          (ou(t, n | 1), nt(t, Ie()), !(ve & 6) && ((nr = Ie() + 500), cn()));
      }
      break;
    case 13:
      Cn(function () {
        var r = Ft(e, 1);
        if (r !== null) {
          var i = Ge();
          St(r, e, 1, i);
        }
      }),
        zu(e, 1);
  }
};
iu = function (e) {
  if (e.tag === 13) {
    var t = Ft(e, 134217728);
    if (t !== null) {
      var n = Ge();
      St(t, e, 134217728, n);
    }
    zu(e, 134217728);
  }
};
lc = function (e) {
  if (e.tag === 13) {
    var t = rn(e),
      n = Ft(e, t);
    if (n !== null) {
      var r = Ge();
      St(n, e, t, r);
    }
    zu(e, t);
  }
};
uc = function () {
  return ye;
};
ac = function (e, t) {
  var n = ye;
  try {
    return (ye = e), t();
  } finally {
    ye = n;
  }
};
sl = function (e, t, n) {
  switch (t) {
    case "input":
      if ((nl(e, n), (t = n.name), n.type === "radio" && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var i = ii(r);
            if (!i) throw Error(te(90));
            Fs(r), nl(r, i);
          }
        }
      }
      break;
    case "textarea":
      Us(e, n);
      break;
    case "select":
      (t = n.value), t != null && Hn(e, !!n.multiple, t, !1);
  }
};
Qs = Mu;
Gs = Cn;
var fh = { usingClientEntryPoint: !1, Events: [Yr, Dn, ii, Xs, Ws, Mu] },
  mr = {
    findFiberByHostInstance: mn,
    bundleType: 0,
    version: "18.2.0",
    rendererPackageName: "react-dom",
  },
  dh = {
    bundleType: mr.bundleType,
    version: mr.version,
    rendererPackageName: mr.rendererPackageName,
    rendererConfig: mr.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: Ut.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = qs(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: mr.findFiberByHostInstance || sh,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.2.0-next-9e3b772b8-20220608",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var mo = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!mo.isDisabled && mo.supportsFiber)
    try {
      (ti = mo.inject(dh)), (Nt = mo);
    } catch {}
}
ut.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = fh;
ut.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Fu(t)) throw Error(te(200));
  return ah(e, t, null, n);
};
ut.createRoot = function (e, t) {
  if (!Fu(e)) throw Error(te(299));
  var n = !1,
    r = "",
    i = Mf;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (i = t.onRecoverableError)),
    (t = Du(e, 1, !1, null, null, n, !1, r, i)),
    (e[At] = t.current),
    zr(e.nodeType === 8 ? e.parentNode : e),
    new Au(t)
  );
};
ut.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(te(188))
      : ((e = Object.keys(e).join(",")), Error(te(268, e)));
  return (e = qs(t)), (e = e === null ? null : e.stateNode), e;
};
ut.flushSync = function (e) {
  return Cn(e);
};
ut.hydrate = function (e, t, n) {
  if (!hi(t)) throw Error(te(200));
  return mi(null, e, t, !0, n);
};
ut.hydrateRoot = function (e, t, n) {
  if (!Fu(e)) throw Error(te(405));
  var r = (n != null && n.hydratedSources) || null,
    i = !1,
    l = "",
    c = Mf;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (i = !0),
      n.identifierPrefix !== void 0 && (l = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (c = n.onRecoverableError)),
    (t = If(t, null, e, 1, n ?? null, i, !1, l, c)),
    (e[At] = t.current),
    zr(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (i = n._getVersion),
        (i = i(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, i])
          : t.mutableSourceEagerHydrationData.push(n, i);
  return new pi(t);
};
ut.render = function (e, t, n) {
  if (!hi(t)) throw Error(te(200));
  return mi(null, e, t, !1, n);
};
ut.unmountComponentAtNode = function (e) {
  if (!hi(e)) throw Error(te(40));
  return e._reactRootContainer
    ? (Cn(function () {
        mi(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[At] = null);
        });
      }),
      !0)
    : !1;
};
ut.unstable_batchedUpdates = Mu;
ut.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!hi(n)) throw Error(te(200));
  if (e == null || e._reactInternals === void 0) throw Error(te(38));
  return mi(e, t, n, !1, r);
};
ut.version = "18.2.0-next-9e3b772b8-20220608";
function Rf() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Rf);
    } catch (e) {
      console.error(e);
    }
}
Rf(), (Ts.exports = ut);
var ph = Ts.exports,
  ns = ph;
(Gi.createRoot = ns.createRoot), (Gi.hydrateRoot = ns.hydrateRoot);
const hh = "_outer_9fext_1",
  mh = "_inner_9fext_9",
  rs = { outer: hh, inner: mh };
function vh({ children: e }) {
  return ue.jsx("div", {
    className: rs.outer,
    children: ue.jsx("div", { className: rs.inner, children: e }),
  });
}
const yh = "_grid_1xgaf_1",
  gh = { grid: yh };
function wh(e, t) {
  var n = ee.useRef(null),
    r = ee.useRef(null);
  r.current = t;
  var i = ee.useRef(null);
  ee.useEffect(function () {
    l();
  });
  var l = ee.useCallback(
    function () {
      var c = i.current,
        y = r.current,
        x = c || (y ? (y instanceof Element ? y : y.current) : null);
      (n.current && n.current.element === x && n.current.subscriber === e) ||
        (n.current && n.current.cleanup && n.current.cleanup(),
        (n.current = {
          element: x,
          subscriber: e,
          cleanup: x ? e(x) : void 0,
        }));
    },
    [e]
  );
  return (
    ee.useEffect(function () {
      return function () {
        n.current &&
          n.current.cleanup &&
          (n.current.cleanup(), (n.current = null));
      };
    }, []),
    ee.useCallback(
      function (c) {
        (i.current = c), l();
      },
      [l]
    )
  );
}
function os(e, t, n) {
  return e[t]
    ? e[t][0]
      ? e[t][0][n]
      : e[t][n]
    : t === "contentBoxSize"
    ? e.contentRect[n === "inlineSize" ? "width" : "height"]
    : void 0;
}
function Lf(e) {
  e === void 0 && (e = {});
  var t = e.onResize,
    n = ee.useRef(void 0);
  n.current = t;
  var r = e.round || Math.round,
    i = ee.useRef(),
    l = ee.useState({ width: void 0, height: void 0 }),
    c = l[0],
    y = l[1],
    x = ee.useRef(!1);
  ee.useEffect(function () {
    return (
      (x.current = !1),
      function () {
        x.current = !0;
      }
    );
  }, []);
  var b = ee.useRef({ width: void 0, height: void 0 }),
    R = wh(
      ee.useCallback(
        function (F) {
          return (
            (!i.current || i.current.box !== e.box || i.current.round !== r) &&
              (i.current = {
                box: e.box,
                round: r,
                instance: new ResizeObserver(function (f) {
                  var k = f[0],
                    o =
                      e.box === "border-box"
                        ? "borderBoxSize"
                        : e.box === "device-pixel-content-box"
                        ? "devicePixelContentBoxSize"
                        : "contentBoxSize",
                    s = os(k, o, "inlineSize"),
                    h = os(k, o, "blockSize"),
                    u = s ? r(s) : void 0,
                    a = h ? r(h) : void 0;
                  if (b.current.width !== u || b.current.height !== a) {
                    var p = { width: u, height: a };
                    (b.current.width = u),
                      (b.current.height = a),
                      n.current ? n.current(p) : x.current || y(p);
                  }
                }),
              }),
            i.current.instance.observe(F, { box: e.box }),
            function () {
              i.current && i.current.instance.unobserve(F);
            }
          );
        },
        [e.box, r]
      ),
      e.ref
    );
  return ee.useMemo(
    function () {
      return { ref: R, width: c.width, height: c.height };
    },
    [R, c.width, c.height]
  );
}
const $l = 0.05;
function is({ fullSizePx: e, cellCount: t }) {
  return e / (t + $l * t - $l);
}
function xh({ width: e, height: t, children: n }) {
  const r = ee.useRef(null),
    [i, l] = ee.useState(0),
    c = ee.useMemo(
      () => ({
        gridTemplateRows: `repeat(${t}, 1fr)`,
        gridTemplateColumns: `repeat(${e}, 1fr)`,
        fontSize: i,
        "--gap-em": `${$l}em`,
      }),
      [i, t, e]
    ),
    y = ee.useCallback(
      (x) => {
        if (!x.width || !x.height) return;
        const b = Math.min(
          is({ fullSizePx: x.width, cellCount: e }),
          is({ fullSizePx: x.height, cellCount: t })
        );
        l(b);
      },
      [t, e]
    );
  return (
    Lf({ ref: r, onResize: y }),
    ue.jsx("div", { ref: r, className: gh.grid, style: c, children: n })
  );
}
const kh = "_letter_19yfn_1",
  Sh = "_marker_19yfn_14",
  Eh = "_cursor_19yfn_24",
  Ch = "_cursorOn_19yfn_32",
  Jo = { letter: kh, marker: Sh, cursor: Eh, cursorOn: Ch };
var jf = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/ (function (e) {
  (function () {
    var t = {}.hasOwnProperty;
    function n() {
      for (var l = "", c = 0; c < arguments.length; c++) {
        var y = arguments[c];
        y && (l = i(l, r(y)));
      }
      return l;
    }
    function r(l) {
      if (typeof l == "string" || typeof l == "number") return l;
      if (typeof l != "object") return "";
      if (Array.isArray(l)) return n.apply(null, l);
      if (
        l.toString !== Object.prototype.toString &&
        !l.toString.toString().includes("[native code]")
      )
        return l.toString();
      var c = "";
      for (var y in l) t.call(l, y) && l[y] && (c = i(c, y));
      return c;
    }
    function i(l, c) {
      return c ? (l ? l + " " + c : l + c) : l;
    }
    e.exports ? ((n.default = n), (e.exports = n)) : (window.classNames = n);
  })();
})(jf);
var Oh = jf.exports;
const bn = Vl(Oh),
  Df = Date.now(),
  Hl = 820,
  Ph = 500;
function bh() {
  return Hl - ((Date.now() - Df) % Hl);
}
function _h(e) {
  return Math.floor((e - Df) / Hl) % 2 === 0;
}
function Nh() {
  const [e, t] = ee.useState(Date.now()),
    [n] = ee.useState(Date.now() + Ph);
  return (
    ee.useEffect(() => {
      const r = setTimeout(() => {
        t(Date.now());
      }, bh());
      return () => {
        clearTimeout(r);
      };
    }, [e]),
    _h(e) || e < n
  );
}
const zf = ee.createContext(null);
function Bu() {
  const e = ee.useContext(zf);
  return ee.useMemo(() => e ?? new Th(), [e]);
}
class Th {
  constructor() {
    Wu(this, "letters", new Map());
  }
  register(t, n, r) {
    this.letters.set(ls(t, n), r);
  }
  getPosition(t, n) {
    const r = this.letters.get(ls(t, n));
    if (!r) throw new Error("NO ELEMENT AT POSITION");
    const i = r.offsetParent;
    return {
      x: r.offsetLeft / i.offsetWidth,
      y: r.offsetTop / i.offsetHeight,
      width: r.offsetWidth / i.offsetWidth,
      height: r.offsetHeight / i.offsetHeight,
    };
  }
}
function ls(e, t) {
  return `${e},${t}`;
}
function Ih({ text: e, marker: t, cursor: n, x: r, y: i, onClick: l }) {
  const c = Bu(),
    y = ee.useCallback(
      (R) => {
        R && c.register(r, i, R);
      },
      [c, r, i]
    ),
    x = ee.useMemo(
      () => ({ gridArea: `${i + 1} / ${r + 1} / ${i + 2} / ${r + 2}` }),
      [r, i]
    ),
    b = ee.useCallback(
      (R) => {
        R.stopPropagation(), l(r, i);
      },
      [l, r, i]
    );
  return ue.jsxs("div", {
    className: Jo.letter,
    style: x,
    ref: y,
    onClick: b,
    children: [
      e,
      t && ue.jsx("span", { className: Jo.marker, children: t }),
      n && ue.jsx(Mh, {}),
    ],
  });
}
function Mh() {
  const e = Nh();
  return ue.jsx("div", { className: bn(Jo.cursor, { [Jo.cursorOn]: e }) });
}
const Rh = "_zoomContainer_1w37i_1",
  Lh = "_zoomSheet_1w37i_7",
  us = { zoomContainer: Rh, zoomSheet: Lh },
  jh = 100,
  as = 0.05,
  Dh = [
    { x: 8, y: 0 },
    { x: 0, y: 4 },
    { x: 21, y: 8 },
    { x: 6, y: 26 },
  ];
function zh({ gridEl: e, selectedWord: t }) {
  const [n, r] = ee.useState({ offsetX: 0, offsetY: 0, zoom: 1, visible: !1 }),
    [i, l] = ee.useState(0),
    c = ee.useCallback(() => {
      l((b) => b + 1);
    }, []);
  Lf({ ref: e, onResize: c });
  const y = Bu(),
    x = ee.useCallback(() => {
      const b = ss(
          t
            ? t.map((F) => y.getPosition(F.x, F.y))
            : Dh.map((F) => y.getPosition(F.x, F.y))
        ),
        R = Math.min(1 / (b.width + as), 1 / (b.height + as));
      return {
        offsetX: -b.x * R - (b.width * R) / 2 + 0.5,
        offsetY: -b.y * R - (b.height * R) / 2 + 0.5,
        zoom: R,
        visible: !0,
      };
    }, [y, t]);
  return (
    ee.useEffect(() => {
      const b = setTimeout(() => {
        r(x());
      }, jh);
      return () => {
        clearTimeout(b);
      };
    }, [x, i]),
    n
  );
}
function ss(e) {
  let t = e[0].x,
    n = t + e[0].width,
    r = e[0].y,
    i = r + e[0].height;
  for (let l = 0; l < e.length; l++)
    (t = Math.min(t, e[l].x)),
      (n = Math.max(n, e[l].x + e[l].width)),
      (r = Math.min(r, e[l].y)),
      (i = Math.max(i, e[l].y + e[l].height));
  return { x: t, y: r, width: n - t, height: i - r };
}
function Ah({ selectedWord: e, children: t }) {
  const [n, r] = ee.useState(null),
    {
      offsetX: i,
      offsetY: l,
      zoom: c,
      visible: y,
    } = zh({ gridEl: n, selectedWord: e }),
    x = ee.useMemo(
      () => ({
        left: `${i * 100}%`,
        top: `${l * 100}%`,
        width: `${c * 100}%`,
        height: `${c * 100}%`,
        opacity: y ? 1 : 0,
      }),
      [i, l, y, c]
    );
  return ue.jsx("div", {
    ref: r,
    className: us.zoomContainer,
    children: ue.jsx("div", { className: us.zoomSheet, style: x, children: t }),
  });
}
const bt = [
    [
      { x: 8, y: 0 },
      { x: 8, y: 1 },
      { x: 8, y: 2 },
      { x: 8, y: 3 },
      { x: 8, y: 4 },
      { x: 8, y: 5 },
      { x: 8, y: 6 },
      { x: 8, y: 7 },
      { x: 8, y: 8 },
    ],
    [
      { x: 11, y: 1 },
      { x: 11, y: 2 },
      { x: 11, y: 3 },
      { x: 11, y: 4 },
      { x: 11, y: 5 },
      { x: 11, y: 6 },
      { x: 11, y: 7 },
      { x: 11, y: 8 },
    ],
    [
      { x: 11, y: 2 },
      { x: 12, y: 2 },
      { x: 13, y: 2 },
      { x: 14, y: 2 },
      { x: 15, y: 2 },
      { x: 16, y: 2 },
      { x: 17, y: 2 },
      { x: 18, y: 2 },
      { x: 19, y: 2 },
      { x: 20, y: 2 },
    ],
    [
      { x: 0, y: 4 },
      { x: 1, y: 4 },
      { x: 2, y: 4 },
      { x: 3, y: 4 },
      { x: 4, y: 4 },
      { x: 5, y: 4 },
      { x: 6, y: 4 },
      { x: 7, y: 4 },
      { x: 8, y: 4 },
      { x: 9, y: 4 },
    ],
    [
      { x: 14, y: 5 },
      { x: 14, y: 6 },
      { x: 14, y: 7 },
      { x: 14, y: 8 },
      { x: 14, y: 9 },
      { x: 14, y: 10 },
      { x: 14, y: 11 },
      { x: 14, y: 12 },
      { x: 14, y: 13 },
      { x: 14, y: 14 },
      { x: 14, y: 15 },
      { x: 14, y: 16 },
      { x: 14, y: 17 },
      { x: 14, y: 18 },
      { x: 14, y: 19 },
    ],
    [
      { x: 4, y: 6 },
      { x: 4, y: 7 },
      { x: 4, y: 8 },
      { x: 4, y: 9 },
      { x: 4, y: 10 },
      { x: 4, y: 11 },
      { x: 4, y: 12 },
      { x: 4, y: 13 },
      { x: 4, y: 14 },
      { x: 4, y: 15 },
      { x: 4, y: 16 },
    ],
    [
      { x: 17, y: 7 },
      { x: 17, y: 8 },
      { x: 17, y: 9 },
      { x: 17, y: 10 },
      { x: 17, y: 11 },
      { x: 17, y: 12 },
      { x: 17, y: 13 },
      { x: 17, y: 14 },
      { x: 17, y: 15 },
      { x: 17, y: 16 },
      { x: 17, y: 17 },
    ],
    [
      { x: 4, y: 8 },
      { x: 5, y: 8 },
      { x: 6, y: 8 },
      { x: 7, y: 8 },
      { x: 8, y: 8 },
      { x: 9, y: 8 },
      { x: 10, y: 8 },
      { x: 11, y: 8 },
      { x: 12, y: 8 },
      { x: 13, y: 8 },
      { x: 14, y: 8 },
      { x: 15, y: 8 },
      { x: 16, y: 8 },
      { x: 17, y: 8 },
      { x: 18, y: 8 },
      { x: 19, y: 8 },
      { x: 20, y: 8 },
      { x: 21, y: 8 },
    ],
    [
      { x: 6, y: 8 },
      { x: 6, y: 9 },
      { x: 6, y: 10 },
    ],
    [
      { x: 12, y: 13 },
      { x: 13, y: 13 },
      { x: 14, y: 13 },
      { x: 15, y: 13 },
      { x: 16, y: 13 },
      { x: 17, y: 13 },
      { x: 18, y: 13 },
      { x: 19, y: 13 },
    ],
    [
      { x: 6, y: 14 },
      { x: 6, y: 15 },
      { x: 6, y: 16 },
      { x: 6, y: 17 },
      { x: 6, y: 18 },
      { x: 6, y: 19 },
      { x: 6, y: 20 },
      { x: 6, y: 21 },
      { x: 6, y: 22 },
      { x: 6, y: 23 },
      { x: 6, y: 24 },
      { x: 6, y: 25 },
      { x: 6, y: 26 },
    ],
    [
      { x: 2, y: 16 },
      { x: 3, y: 16 },
      { x: 4, y: 16 },
      { x: 5, y: 16 },
      { x: 6, y: 16 },
      { x: 7, y: 16 },
    ],
    [
      { x: 11, y: 16 },
      { x: 11, y: 17 },
      { x: 11, y: 18 },
      { x: 11, y: 19 },
      { x: 11, y: 20 },
      { x: 11, y: 21 },
      { x: 11, y: 22 },
      { x: 11, y: 23 },
      { x: 11, y: 24 },
    ],
    [
      { x: 10, y: 18 },
      { x: 11, y: 18 },
      { x: 12, y: 18 },
      { x: 13, y: 18 },
      { x: 14, y: 18 },
    ],
    [
      { x: 5, y: 23 },
      { x: 6, y: 23 },
      { x: 7, y: 23 },
      { x: 8, y: 23 },
      { x: 9, y: 23 },
      { x: 10, y: 23 },
      { x: 11, y: 23 },
      { x: 12, y: 23 },
      { x: 13, y: 23 },
      { x: 14, y: 23 },
      { x: 15, y: 23 },
      { x: 16, y: 23 },
      { x: 17, y: 23 },
    ],
  ],
  rr = [];
for (const e of bt)
  for (const t of e) rr.find((n) => n.x === t.x && n.y === t.y) || rr.push(t);
const Fh = bt.map((e) => e[0]),
  Bh = "_grid_fr50g_1",
  Uh = "_controls_fr50g_12",
  $h = "_hidden_fr50g_19",
  Hh = "_frozen_fr50g_24",
  vo = { grid: Bh, controls: Uh, hidden: $h, frozen: Hh },
  Kh = 500;
function or(e, t) {
  const [n, r] = ee.useState(() => {
      const l = localStorage.getItem(e);
      return l ? (l === "undefined" ? void 0 : JSON.parse(l)) : t;
    }),
    i = ee.useCallback((l) => {
      r(l);
    }, []);
  return (
    ee.useEffect(() => {
      const l = setTimeout(() => {
        localStorage.setItem(e, JSON.stringify(n));
      }, Kh);
      return () => {
        clearTimeout(l);
      };
    }, [n, e]),
    [n, i]
  );
}
const Kl = rr.map((e) => Xr(e.x, e.y)).sort(),
  Ki = rr.sort((e, t) => Kl.indexOf(Xr(e.x, e.y)) - Kl.indexOf(Xr(t.x, t.y)));
function Vh() {
  const { letterMap: e, updateLetterMap: t } = Xh(),
    n = ee.useCallback((y, x) => e[Xr(y, x)] ?? "", [e]),
    r = ee.useCallback(
      (y, x, b) => {
        t((R) => {
          R[Xr(y, x)] = b.toUpperCase();
        });
      },
      [t]
    ),
    i = ee.useCallback(() => Kl.map((y) => e[y] || "*").join(""), [e]),
    l = ee.useCallback(
      (y) => {
        for (let x = 0; x < Ki.length; x++) {
          const b = y[x] === "*" ? "" : y[x];
          r(Ki[x].x, Ki[x].y, b);
        }
      },
      [r]
    ),
    c = ee.useCallback(() => {
      for (const y of rr) r(y.x, y.y, "");
    }, [r]);
  return {
    getLetter: n,
    setLetter: r,
    getBoard: i,
    setBoard: l,
    clearBoard: c,
  };
}
function Xh() {
  const [e, t] = or("letterMap", {}),
    n = ee.useCallback(
      (r) => {
        t((i) => {
          const l = { ...i };
          return r(l), l;
        });
      },
      [t]
    );
  return { letterMap: e, updateLetterMap: n };
}
function Xr(e, t) {
  return `${e.toString().padStart(2, "0")},${t.toString().padStart(2, "0")}`;
}
const Wh = "_clue_10bww_1",
  Qh = "_full_10bww_19",
  cs = { clue: Wh, full: Qh },
  Gh = [
    "XXXXX",
    "XXXXX",
    "XXXXX",
    "XXXXX",
    "XXXXX",
    "XXXXX",
    "XXXXX",
    "XXXXX",
    "XXXXX",
    "XXXXX",
    "XXXXX",
    "XXXXX",
    "XXXXX",
    "XXXXX",
    "XXXXX",
  ],
  vi = ee.createContext(Gh);
function Yh({ index: e, getLetter: t, onClick: n }) {
  const r = ee.useContext(vi),
    i = ee.useCallback(() => {
      n(e);
    }, [e, n]),
    l = bt[e],
    c = ee.useMemo(() => {
      for (const y of l) if (!t(y.x, y.y)) return !1;
      return !0;
    }, [t, l]);
  return ue.jsxs("div", {
    className: bn(cs.clue, { [cs.full]: c }),
    tabIndex: 0,
    onClick: i,
    children: [
      ue.jsxs("span", { children: [(e + 1).toString().padStart(2, " "), "."] }),
      " ",
      r[e],
    ],
  });
}
const Zh = "_clueList_1fofz_1",
  qh = "_disclaimer_1fofz_6",
  fs = { clueList: Zh, disclaimer: qh };
function Jh({ getLetter: e, onClick: t }) {
  const n = ee.useContext(vi);
  return ue.jsxs("div", {
    className: fs.clueList,
    children: [
      n.map((r, i) => ue.jsx(Yh, { index: i, getLetter: e, onClick: t }, i)),
      ue.jsx("span", {
        className: fs.disclaimer,
        children: "This game is unaffiliated with Dr. Exoskeleton",
      }),
    ],
  });
}
const em = "_hiddenInput_y3xk0_1",
  tm = "_curtain_y3xk0_11",
  ds = { hiddenInput: em, curtain: tm };
var yi = { exports: {} };
yi.exports = Uu;
yi.exports.isMobile = Uu;
yi.exports.default = Uu;
const nm =
    /(android|bb\d+|meego).+mobile|armv7l|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series[46]0|samsungbrowser.*mobile|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i,
  rm = /CrOS/,
  om = /android|ipad|playbook|silk/i;
function Uu(e) {
  e || (e = {});
  let t = e.ua;
  if (
    (!t && typeof navigator < "u" && (t = navigator.userAgent),
    t &&
      t.headers &&
      typeof t.headers["user-agent"] == "string" &&
      (t = t.headers["user-agent"]),
    typeof t != "string")
  )
    return !1;
  let n = (nm.test(t) && !rm.test(t)) || (!!e.tablet && om.test(t));
  return (
    !n &&
      e.tablet &&
      e.featureDetect &&
      navigator &&
      navigator.maxTouchPoints > 1 &&
      t.indexOf("Macintosh") !== -1 &&
      t.indexOf("Safari") !== -1 &&
      (n = !0),
    n
  );
}
var im = yi.exports;
const $u = Vl(im);
var Af = { exports: {} };
/*!
 *
 *   react-simple-keyboard v3.7.57
 *   https://github.com/hodgef/react-simple-keyboard
 *
 *   Copyright (c) Francisco Hodge (https://github.com/hodgef) and project contributors.
 *
 *   This source code is licensed under the MIT license found in the
 *   LICENSE file in the root directory of this source tree.
 *
 */ (function (e, t) {
  (function (n, r) {
    e.exports = r(ee);
  })(ws, function (n) {
    return (function () {
      var r = {
          752: function () {
            typeof Element > "u" ||
              "remove" in Element.prototype ||
              (Element.prototype.remove = function () {
                this.parentNode && this.parentNode.removeChild(this);
              }),
              typeof self < "u" &&
                "document" in self &&
                ((!("classList" in document.createElement("_")) ||
                  (document.createElementNS &&
                    !(
                      "classList" in
                      document.createElementNS(
                        "http://www.w3.org/2000/svg",
                        "g"
                      )
                    ))) &&
                  (function (y) {
                    if ("Element" in y) {
                      var x = "classList",
                        b = "prototype",
                        R = y.Element[b],
                        F = Object,
                        f =
                          String[b].trim ||
                          function () {
                            return this.replace(/^\s+|\s+$/g, "");
                          },
                        k =
                          Array[b].indexOf ||
                          function (m) {
                            for (var d = 0, w = this.length; d < w; d++)
                              if (d in this && this[d] === m) return d;
                            return -1;
                          },
                        o = function (m, d) {
                          (this.name = m),
                            (this.code = DOMException[m]),
                            (this.message = d);
                        },
                        s = function (m, d) {
                          if (d === "")
                            throw new o(
                              "SYNTAX_ERR",
                              "The token must not be empty."
                            );
                          if (/\s/.test(d))
                            throw new o(
                              "INVALID_CHARACTER_ERR",
                              "The token must not contain space characters."
                            );
                          return k.call(m, d);
                        },
                        h = function (m) {
                          for (
                            var d = f.call(m.getAttribute("class") || ""),
                              w = d ? d.split(/\s+/) : [],
                              g = 0,
                              E = w.length;
                            g < E;
                            g++
                          )
                            this.push(w[g]);
                          this._updateClassName = function () {
                            m.setAttribute("class", this.toString());
                          };
                        },
                        u = (h[b] = []),
                        a = function () {
                          return new h(this);
                        };
                      if (
                        ((o[b] = Error[b]),
                        (u.item = function (m) {
                          return this[m] || null;
                        }),
                        (u.contains = function (m) {
                          return ~s(this, m + "");
                        }),
                        (u.add = function () {
                          var m,
                            d = arguments,
                            w = 0,
                            g = d.length,
                            E = !1;
                          do
                            ~s(this, (m = d[w] + "")) ||
                              (this.push(m), (E = !0));
                          while (++w < g);
                          E && this._updateClassName();
                        }),
                        (u.remove = function () {
                          var m,
                            d,
                            w = arguments,
                            g = 0,
                            E = w.length,
                            _ = !1;
                          do
                            for (d = s(this, (m = w[g] + "")); ~d; )
                              this.splice(d, 1), (_ = !0), (d = s(this, m));
                          while (++g < E);
                          _ && this._updateClassName();
                        }),
                        (u.toggle = function (m, d) {
                          var w = this.contains(m),
                            g = w ? d !== !0 && "remove" : d !== !1 && "add";
                          return g && this[g](m), d === !0 || d === !1 ? d : !w;
                        }),
                        (u.replace = function (m, d) {
                          var w = s(m + "");
                          ~w && (this.splice(w, 1, d), this._updateClassName());
                        }),
                        (u.toString = function () {
                          return this.join(" ");
                        }),
                        F.defineProperty)
                      ) {
                        var p = { get: a, enumerable: !0, configurable: !0 };
                        try {
                          F.defineProperty(R, x, p);
                        } catch (m) {
                          (m.number !== void 0 && m.number !== -2146823252) ||
                            ((p.enumerable = !1), F.defineProperty(R, x, p));
                        }
                      } else F[b].__defineGetter__ && R.__defineGetter__(x, a);
                    }
                  })(self),
                (function () {
                  var y = document.createElement("_");
                  if (
                    (y.classList.add("c1", "c2"), !y.classList.contains("c2"))
                  ) {
                    var x = function (R) {
                      var F = DOMTokenList.prototype[R];
                      DOMTokenList.prototype[R] = function (f) {
                        var k,
                          o = arguments.length;
                        for (k = 0; k < o; k++)
                          (f = arguments[k]), F.call(this, f);
                      };
                    };
                    x("add"), x("remove");
                  }
                  if (
                    (y.classList.toggle("c3", !1), y.classList.contains("c3"))
                  ) {
                    var b = DOMTokenList.prototype.toggle;
                    DOMTokenList.prototype.toggle = function (R, F) {
                      return 1 in arguments && !this.contains(R) == !F
                        ? F
                        : b.call(this, R);
                    };
                  }
                  "replace" in document.createElement("_").classList ||
                    (DOMTokenList.prototype.replace = function (R, F) {
                      var f = this.toString().split(" "),
                        k = f.indexOf(R + "");
                      ~k &&
                        ((f = f.slice(k)),
                        this.remove.apply(this, f),
                        this.add(F),
                        this.add.apply(this, f.slice(1)));
                    }),
                    (y = null);
                })());
          },
          86: function (y) {
            y.exports = (function () {
              var x = {
                  509: function (f, k, o) {
                    var s = o(9985),
                      h = o(3691),
                      u = TypeError;
                    f.exports = function (a) {
                      if (s(a)) return a;
                      throw new u(h(a) + " is not a function");
                    };
                  },
                  2655: function (f, k, o) {
                    var s = o(9429),
                      h = o(3691),
                      u = TypeError;
                    f.exports = function (a) {
                      if (s(a)) return a;
                      throw new u(h(a) + " is not a constructor");
                    };
                  },
                  3550: function (f, k, o) {
                    var s = o(598),
                      h = String,
                      u = TypeError;
                    f.exports = function (a) {
                      if (s(a)) return a;
                      throw new u("Can't set " + h(a) + " as a prototype");
                    };
                  },
                  7370: function (f, k, o) {
                    var s = o(4201),
                      h = o(5391),
                      u = o(2560).f,
                      a = s("unscopables"),
                      p = Array.prototype;
                    p[a] === void 0 &&
                      u(p, a, { configurable: !0, value: h(null) }),
                      (f.exports = function (m) {
                        p[a][m] = !0;
                      });
                  },
                  1514: function (f, k, o) {
                    var s = o(730).charAt;
                    f.exports = function (h, u, a) {
                      return u + (a ? s(h, u).length : 1);
                    };
                  },
                  5027: function (f, k, o) {
                    var s = o(8999),
                      h = String,
                      u = TypeError;
                    f.exports = function (a) {
                      if (s(a)) return a;
                      throw new u(h(a) + " is not an object");
                    };
                  },
                  7612: function (f, k, o) {
                    var s = o(2960).forEach,
                      h = o(6834)("forEach");
                    f.exports = h
                      ? [].forEach
                      : function (u) {
                          return s(
                            this,
                            u,
                            arguments.length > 1 ? arguments[1] : void 0
                          );
                        };
                  },
                  1055: function (f, k, o) {
                    var s = o(4071),
                      h = o(2615),
                      u = o(690),
                      a = o(1228),
                      p = o(3292),
                      m = o(9429),
                      d = o(6310),
                      w = o(6522),
                      g = o(5185),
                      E = o(1664),
                      _ = Array;
                    f.exports = function (I) {
                      var j = u(I),
                        N = m(this),
                        C = arguments.length,
                        T = C > 1 ? arguments[1] : void 0,
                        M = T !== void 0;
                      M && (T = s(T, C > 2 ? arguments[2] : void 0));
                      var Z,
                        W,
                        B,
                        $,
                        V,
                        X,
                        J = E(j),
                        ne = 0;
                      if (!J || (this === _ && p(J)))
                        for (Z = d(j), W = N ? new this(Z) : _(Z); Z > ne; ne++)
                          (X = M ? T(j[ne], ne) : j[ne]), w(W, ne, X);
                      else
                        for (
                          V = ($ = g(j, J)).next, W = N ? new this() : [];
                          !(B = h(V, $)).done;
                          ne++
                        )
                          (X = M ? a($, T, [B.value, ne], !0) : B.value),
                            w(W, ne, X);
                      return (W.length = ne), W;
                    };
                  },
                  4328: function (f, k, o) {
                    var s = o(5290),
                      h = o(7578),
                      u = o(6310),
                      a = function (p) {
                        return function (m, d, w) {
                          var g,
                            E = s(m),
                            _ = u(E),
                            I = h(w, _);
                          if (p && d != d) {
                            for (; _ > I; ) if ((g = E[I++]) != g) return !0;
                          } else
                            for (; _ > I; I++)
                              if ((p || I in E) && E[I] === d)
                                return p || I || 0;
                          return !p && -1;
                        };
                      };
                    f.exports = { includes: a(!0), indexOf: a(!1) };
                  },
                  2960: function (f, k, o) {
                    var s = o(4071),
                      h = o(8844),
                      u = o(4413),
                      a = o(690),
                      p = o(6310),
                      m = o(7120),
                      d = h([].push),
                      w = function (g) {
                        var E = g === 1,
                          _ = g === 2,
                          I = g === 3,
                          j = g === 4,
                          N = g === 6,
                          C = g === 7,
                          T = g === 5 || N;
                        return function (M, Z, W, B) {
                          for (
                            var $,
                              V,
                              X = a(M),
                              J = u(X),
                              ne = p(J),
                              ae = s(Z, W),
                              ie = 0,
                              z = B || m,
                              L = E ? z(M, ne) : _ || C ? z(M, 0) : void 0;
                            ne > ie;
                            ie++
                          )
                            if (
                              (T || ie in J) &&
                              ((V = ae(($ = J[ie]), ie, X)), g)
                            )
                              if (E) L[ie] = V;
                              else if (V)
                                switch (g) {
                                  case 3:
                                    return !0;
                                  case 5:
                                    return $;
                                  case 6:
                                    return ie;
                                  case 2:
                                    d(L, $);
                                }
                              else
                                switch (g) {
                                  case 4:
                                    return !1;
                                  case 7:
                                    d(L, $);
                                }
                          return N ? -1 : I || j ? j : L;
                        };
                      };
                    f.exports = {
                      forEach: w(0),
                      map: w(1),
                      filter: w(2),
                      some: w(3),
                      every: w(4),
                      find: w(5),
                      findIndex: w(6),
                      filterReject: w(7),
                    };
                  },
                  9042: function (f, k, o) {
                    var s = o(3689),
                      h = o(4201),
                      u = o(3615),
                      a = h("species");
                    f.exports = function (p) {
                      return (
                        u >= 51 ||
                        !s(function () {
                          var m = [];
                          return (
                            ((m.constructor = {})[a] = function () {
                              return { foo: 1 };
                            }),
                            m[p](Boolean).foo !== 1
                          );
                        })
                      );
                    };
                  },
                  6834: function (f, k, o) {
                    var s = o(3689);
                    f.exports = function (h, u) {
                      var a = [][h];
                      return (
                        !!a &&
                        s(function () {
                          a.call(
                            null,
                            u ||
                              function () {
                                return 1;
                              },
                            1
                          );
                        })
                      );
                    };
                  },
                  8820: function (f, k, o) {
                    var s = o(509),
                      h = o(690),
                      u = o(4413),
                      a = o(6310),
                      p = TypeError,
                      m = function (d) {
                        return function (w, g, E, _) {
                          var I = h(w),
                            j = u(I),
                            N = a(I);
                          s(g);
                          var C = d ? N - 1 : 0,
                            T = d ? -1 : 1;
                          if (E < 2)
                            for (;;) {
                              if (C in j) {
                                (_ = j[C]), (C += T);
                                break;
                              }
                              if (((C += T), d ? C < 0 : N <= C))
                                throw new p(
                                  "Reduce of empty array with no initial value"
                                );
                            }
                          for (; d ? C >= 0 : N > C; C += T)
                            C in j && (_ = g(_, j[C], C, I));
                          return _;
                        };
                      };
                    f.exports = { left: m(!1), right: m(!0) };
                  },
                  5649: function (f, k, o) {
                    var s = o(7697),
                      h = o(2297),
                      u = TypeError,
                      a = Object.getOwnPropertyDescriptor,
                      p =
                        s &&
                        !(function () {
                          if (this !== void 0) return !0;
                          try {
                            Object.defineProperty([], "length", {
                              writable: !1,
                            }).length = 1;
                          } catch (m) {
                            return m instanceof TypeError;
                          }
                        })();
                    f.exports = p
                      ? function (m, d) {
                          if (h(m) && !a(m, "length").writable)
                            throw new u("Cannot set read only .length");
                          return (m.length = d);
                        }
                      : function (m, d) {
                          return (m.length = d);
                        };
                  },
                  6004: function (f, k, o) {
                    var s = o(8844);
                    f.exports = s([].slice);
                  },
                  382: function (f, k, o) {
                    var s = o(6004),
                      h = Math.floor,
                      u = function (a, p) {
                        var m = a.length;
                        if (m < 8)
                          for (var d, w, g = 1; g < m; ) {
                            for (w = g, d = a[g]; w && p(a[w - 1], d) > 0; )
                              a[w] = a[--w];
                            w !== g++ && (a[w] = d);
                          }
                        else
                          for (
                            var E = h(m / 2),
                              _ = u(s(a, 0, E), p),
                              I = u(s(a, E), p),
                              j = _.length,
                              N = I.length,
                              C = 0,
                              T = 0;
                            C < j || T < N;

                          )
                            a[C + T] =
                              C < j && T < N
                                ? p(_[C], I[T]) <= 0
                                  ? _[C++]
                                  : I[T++]
                                : C < j
                                ? _[C++]
                                : I[T++];
                        return a;
                      };
                    f.exports = u;
                  },
                  5271: function (f, k, o) {
                    var s = o(2297),
                      h = o(9429),
                      u = o(8999),
                      a = o(4201)("species"),
                      p = Array;
                    f.exports = function (m) {
                      var d;
                      return (
                        s(m) &&
                          ((d = m.constructor),
                          ((h(d) && (d === p || s(d.prototype))) ||
                            (u(d) && (d = d[a]) === null)) &&
                            (d = void 0)),
                        d === void 0 ? p : d
                      );
                    };
                  },
                  7120: function (f, k, o) {
                    var s = o(5271);
                    f.exports = function (h, u) {
                      return new (s(h))(u === 0 ? 0 : u);
                    };
                  },
                  1228: function (f, k, o) {
                    var s = o(5027),
                      h = o(2125);
                    f.exports = function (u, a, p, m) {
                      try {
                        return m ? a(s(p)[0], p[1]) : a(p);
                      } catch (d) {
                        h(u, "throw", d);
                      }
                    };
                  },
                  6431: function (f, k, o) {
                    var s = o(4201)("iterator"),
                      h = !1;
                    try {
                      var u = 0,
                        a = {
                          next: function () {
                            return { done: !!u++ };
                          },
                          return: function () {
                            h = !0;
                          },
                        };
                      (a[s] = function () {
                        return this;
                      }),
                        Array.from(a, function () {
                          throw 2;
                        });
                    } catch {}
                    f.exports = function (p, m) {
                      try {
                        if (!m && !h) return !1;
                      } catch {
                        return !1;
                      }
                      var d = !1;
                      try {
                        var w = {};
                        (w[s] = function () {
                          return {
                            next: function () {
                              return { done: (d = !0) };
                            },
                          };
                        }),
                          p(w);
                      } catch {}
                      return d;
                    };
                  },
                  6648: function (f, k, o) {
                    var s = o(8844),
                      h = s({}.toString),
                      u = s("".slice);
                    f.exports = function (a) {
                      return u(h(a), 8, -1);
                    };
                  },
                  926: function (f, k, o) {
                    var s = o(3043),
                      h = o(9985),
                      u = o(6648),
                      a = o(4201)("toStringTag"),
                      p = Object,
                      m =
                        u(
                          (function () {
                            return arguments;
                          })()
                        ) === "Arguments";
                    f.exports = s
                      ? u
                      : function (d) {
                          var w, g, E;
                          return d === void 0
                            ? "Undefined"
                            : d === null
                            ? "Null"
                            : typeof (g = (function (_, I) {
                                try {
                                  return _[I];
                                } catch {}
                              })((w = p(d)), a)) == "string"
                            ? g
                            : m
                            ? u(w)
                            : (E = u(w)) === "Object" && h(w.callee)
                            ? "Arguments"
                            : E;
                        };
                  },
                  8758: function (f, k, o) {
                    var s = o(6812),
                      h = o(9152),
                      u = o(2474),
                      a = o(2560);
                    f.exports = function (p, m, d) {
                      for (
                        var w = h(m), g = a.f, E = u.f, _ = 0;
                        _ < w.length;
                        _++
                      ) {
                        var I = w[_];
                        s(p, I) || (d && s(d, I)) || g(p, I, E(m, I));
                      }
                    };
                  },
                  7413: function (f, k, o) {
                    var s = o(4201)("match");
                    f.exports = function (h) {
                      var u = /./;
                      try {
                        "/./"[h](u);
                      } catch {
                        try {
                          return (u[s] = !1), "/./"[h](u);
                        } catch {}
                      }
                      return !1;
                    };
                  },
                  1748: function (f, k, o) {
                    var s = o(3689);
                    f.exports = !s(function () {
                      function h() {}
                      return (
                        (h.prototype.constructor = null),
                        Object.getPrototypeOf(new h()) !== h.prototype
                      );
                    });
                  },
                  7807: function (f) {
                    f.exports = function (k, o) {
                      return { value: k, done: o };
                    };
                  },
                  5773: function (f, k, o) {
                    var s = o(7697),
                      h = o(2560),
                      u = o(5684);
                    f.exports = s
                      ? function (a, p, m) {
                          return h.f(a, p, u(1, m));
                        }
                      : function (a, p, m) {
                          return (a[p] = m), a;
                        };
                  },
                  5684: function (f) {
                    f.exports = function (k, o) {
                      return {
                        enumerable: !(1 & k),
                        configurable: !(2 & k),
                        writable: !(4 & k),
                        value: o,
                      };
                    };
                  },
                  6522: function (f, k, o) {
                    var s = o(8360),
                      h = o(2560),
                      u = o(5684);
                    f.exports = function (a, p, m) {
                      var d = s(p);
                      d in a ? h.f(a, d, u(0, m)) : (a[d] = m);
                    };
                  },
                  1797: function (f, k, o) {
                    var s = o(5027),
                      h = o(5899),
                      u = TypeError;
                    f.exports = function (a) {
                      if ((s(this), a === "string" || a === "default"))
                        a = "string";
                      else if (a !== "number") throw new u("Incorrect hint");
                      return h(this, a);
                    };
                  },
                  2148: function (f, k, o) {
                    var s = o(8702),
                      h = o(2560);
                    f.exports = function (u, a, p) {
                      return (
                        p.get && s(p.get, a, { getter: !0 }),
                        p.set && s(p.set, a, { setter: !0 }),
                        h.f(u, a, p)
                      );
                    };
                  },
                  1880: function (f, k, o) {
                    var s = o(9985),
                      h = o(2560),
                      u = o(8702),
                      a = o(5014);
                    f.exports = function (p, m, d, w) {
                      w || (w = {});
                      var g = w.enumerable,
                        E = w.name !== void 0 ? w.name : m;
                      if ((s(d) && u(d, E, w), w.global))
                        g ? (p[m] = d) : a(m, d);
                      else {
                        try {
                          w.unsafe ? p[m] && (g = !0) : delete p[m];
                        } catch {}
                        g
                          ? (p[m] = d)
                          : h.f(p, m, {
                              value: d,
                              enumerable: !1,
                              configurable: !w.nonConfigurable,
                              writable: !w.nonWritable,
                            });
                      }
                      return p;
                    };
                  },
                  5014: function (f, k, o) {
                    var s = o(9037),
                      h = Object.defineProperty;
                    f.exports = function (u, a) {
                      try {
                        h(s, u, { value: a, configurable: !0, writable: !0 });
                      } catch {
                        s[u] = a;
                      }
                      return a;
                    };
                  },
                  8494: function (f, k, o) {
                    var s = o(3691),
                      h = TypeError;
                    f.exports = function (u, a) {
                      if (!delete u[a])
                        throw new h(
                          "Cannot delete property " + s(a) + " of " + s(u)
                        );
                    };
                  },
                  7697: function (f, k, o) {
                    var s = o(3689);
                    f.exports = !s(function () {
                      return (
                        Object.defineProperty({}, 1, {
                          get: function () {
                            return 7;
                          },
                        })[1] !== 7
                      );
                    });
                  },
                  6420: function (f, k, o) {
                    var s = o(9037),
                      h = o(8999),
                      u = s.document,
                      a = h(u) && h(u.createElement);
                    f.exports = function (p) {
                      return a ? u.createElement(p) : {};
                    };
                  },
                  5565: function (f) {
                    var k = TypeError;
                    f.exports = function (o) {
                      if (o > 9007199254740991)
                        throw k("Maximum allowed index exceeded");
                      return o;
                    };
                  },
                  6338: function (f) {
                    f.exports = {
                      CSSRuleList: 0,
                      CSSStyleDeclaration: 0,
                      CSSValueList: 0,
                      ClientRectList: 0,
                      DOMRectList: 0,
                      DOMStringList: 0,
                      DOMTokenList: 1,
                      DataTransferItemList: 0,
                      FileList: 0,
                      HTMLAllCollection: 0,
                      HTMLCollection: 0,
                      HTMLFormElement: 0,
                      HTMLSelectElement: 0,
                      MediaList: 0,
                      MimeTypeArray: 0,
                      NamedNodeMap: 0,
                      NodeList: 1,
                      PaintRequestList: 0,
                      Plugin: 0,
                      PluginArray: 0,
                      SVGLengthList: 0,
                      SVGNumberList: 0,
                      SVGPathSegList: 0,
                      SVGPointList: 0,
                      SVGStringList: 0,
                      SVGTransformList: 0,
                      SourceBufferList: 0,
                      StyleSheetList: 0,
                      TextTrackCueList: 0,
                      TextTrackList: 0,
                      TouchList: 0,
                    };
                  },
                  3265: function (f, k, o) {
                    var s = o(6420)("span").classList,
                      h = s && s.constructor && s.constructor.prototype;
                    f.exports = h === Object.prototype ? void 0 : h;
                  },
                  7365: function (f, k, o) {
                    var s = o(71).match(/firefox\/(\d+)/i);
                    f.exports = !!s && +s[1];
                  },
                  7298: function (f, k, o) {
                    var s = o(71);
                    f.exports = /MSIE|Trident/.test(s);
                  },
                  806: function (f, k, o) {
                    var s = o(9037),
                      h = o(6648);
                    f.exports = h(s.process) === "process";
                  },
                  71: function (f) {
                    f.exports =
                      (typeof navigator < "u" && String(navigator.userAgent)) ||
                      "";
                  },
                  3615: function (f, k, o) {
                    var s,
                      h,
                      u = o(9037),
                      a = o(71),
                      p = u.process,
                      m = u.Deno,
                      d = (p && p.versions) || (m && m.version),
                      w = d && d.v8;
                    w &&
                      (h =
                        (s = w.split("."))[0] > 0 && s[0] < 4
                          ? 1
                          : +(s[0] + s[1])),
                      !h &&
                        a &&
                        (!(s = a.match(/Edge\/(\d+)/)) || s[1] >= 74) &&
                        (s = a.match(/Chrome\/(\d+)/)) &&
                        (h = +s[1]),
                      (f.exports = h);
                  },
                  7922: function (f, k, o) {
                    var s = o(71).match(/AppleWebKit\/(\d+)\./);
                    f.exports = !!s && +s[1];
                  },
                  2739: function (f) {
                    f.exports = [
                      "constructor",
                      "hasOwnProperty",
                      "isPrototypeOf",
                      "propertyIsEnumerable",
                      "toLocaleString",
                      "toString",
                      "valueOf",
                    ];
                  },
                  9989: function (f, k, o) {
                    var s = o(9037),
                      h = o(2474).f,
                      u = o(5773),
                      a = o(1880),
                      p = o(5014),
                      m = o(8758),
                      d = o(5266);
                    f.exports = function (w, g) {
                      var E,
                        _,
                        I,
                        j,
                        N,
                        C = w.target,
                        T = w.global,
                        M = w.stat;
                      if (
                        (E = T
                          ? s
                          : M
                          ? s[C] || p(C, {})
                          : (s[C] || {}).prototype)
                      )
                        for (_ in g) {
                          if (
                            ((j = g[_]),
                            (I = w.dontCallGetSet
                              ? (N = h(E, _)) && N.value
                              : E[_]),
                            !d(T ? _ : C + (M ? "." : "#") + _, w.forced) &&
                              I !== void 0)
                          ) {
                            if (typeof j == typeof I) continue;
                            m(j, I);
                          }
                          (w.sham || (I && I.sham)) && u(j, "sham", !0),
                            a(E, _, j, w);
                        }
                    };
                  },
                  3689: function (f) {
                    f.exports = function (k) {
                      try {
                        return !!k();
                      } catch {
                        return !0;
                      }
                    };
                  },
                  8678: function (f, k, o) {
                    o(4043);
                    var s = o(6576),
                      h = o(1880),
                      u = o(6308),
                      a = o(3689),
                      p = o(4201),
                      m = o(5773),
                      d = p("species"),
                      w = RegExp.prototype;
                    f.exports = function (g, E, _, I) {
                      var j = p(g),
                        N = !a(function () {
                          var Z = {};
                          return (
                            (Z[j] = function () {
                              return 7;
                            }),
                            ""[g](Z) !== 7
                          );
                        }),
                        C =
                          N &&
                          !a(function () {
                            var Z = !1,
                              W = /a/;
                            return (
                              g === "split" &&
                                (((W = {}).constructor = {}),
                                (W.constructor[d] = function () {
                                  return W;
                                }),
                                (W.flags = ""),
                                (W[j] = /./[j])),
                              (W.exec = function () {
                                return (Z = !0), null;
                              }),
                              W[j](""),
                              !Z
                            );
                          });
                      if (!N || !C || _) {
                        var T = s(/./[j]),
                          M = E(j, ""[g], function (Z, W, B, $, V) {
                            var X = s(Z),
                              J = W.exec;
                            return J === u || J === w.exec
                              ? N && !V
                                ? { done: !0, value: T(W, B, $) }
                                : { done: !0, value: X(B, W, $) }
                              : { done: !1 };
                          });
                        h(String.prototype, g, M[0]), h(w, j, M[1]);
                      }
                      I && m(w[j], "sham", !0);
                    };
                  },
                  1735: function (f, k, o) {
                    var s = o(7215),
                      h = Function.prototype,
                      u = h.apply,
                      a = h.call;
                    f.exports =
                      (typeof Reflect == "object" && Reflect.apply) ||
                      (s
                        ? a.bind(u)
                        : function () {
                            return a.apply(u, arguments);
                          });
                  },
                  4071: function (f, k, o) {
                    var s = o(6576),
                      h = o(509),
                      u = o(7215),
                      a = s(s.bind);
                    f.exports = function (p, m) {
                      return (
                        h(p),
                        m === void 0
                          ? p
                          : u
                          ? a(p, m)
                          : function () {
                              return p.apply(m, arguments);
                            }
                      );
                    };
                  },
                  7215: function (f, k, o) {
                    var s = o(3689);
                    f.exports = !s(function () {
                      var h = function () {}.bind();
                      return (
                        typeof h != "function" || h.hasOwnProperty("prototype")
                      );
                    });
                  },
                  2615: function (f, k, o) {
                    var s = o(7215),
                      h = Function.prototype.call;
                    f.exports = s
                      ? h.bind(h)
                      : function () {
                          return h.apply(h, arguments);
                        };
                  },
                  1236: function (f, k, o) {
                    var s = o(7697),
                      h = o(6812),
                      u = Function.prototype,
                      a = s && Object.getOwnPropertyDescriptor,
                      p = h(u, "name"),
                      m = p && function () {}.name === "something",
                      d = p && (!s || (s && a(u, "name").configurable));
                    f.exports = { EXISTS: p, PROPER: m, CONFIGURABLE: d };
                  },
                  2743: function (f, k, o) {
                    var s = o(8844),
                      h = o(509);
                    f.exports = function (u, a, p) {
                      try {
                        return s(h(Object.getOwnPropertyDescriptor(u, a)[p]));
                      } catch {}
                    };
                  },
                  6576: function (f, k, o) {
                    var s = o(6648),
                      h = o(8844);
                    f.exports = function (u) {
                      if (s(u) === "Function") return h(u);
                    };
                  },
                  8844: function (f, k, o) {
                    var s = o(7215),
                      h = Function.prototype,
                      u = h.call,
                      a = s && h.bind.bind(u, u);
                    f.exports = s
                      ? a
                      : function (p) {
                          return function () {
                            return u.apply(p, arguments);
                          };
                        };
                  },
                  6058: function (f, k, o) {
                    var s = o(9037),
                      h = o(9985);
                    f.exports = function (u, a) {
                      return arguments.length < 2
                        ? ((p = s[u]), h(p) ? p : void 0)
                        : s[u] && s[u][a];
                      var p;
                    };
                  },
                  1664: function (f, k, o) {
                    var s = o(926),
                      h = o(4849),
                      u = o(981),
                      a = o(9478),
                      p = o(4201)("iterator");
                    f.exports = function (m) {
                      if (!u(m))
                        return h(m, p) || h(m, "@@iterator") || a[s(m)];
                    };
                  },
                  5185: function (f, k, o) {
                    var s = o(2615),
                      h = o(509),
                      u = o(5027),
                      a = o(3691),
                      p = o(1664),
                      m = TypeError;
                    f.exports = function (d, w) {
                      var g = arguments.length < 2 ? p(d) : w;
                      if (h(g)) return u(s(g, d));
                      throw new m(a(d) + " is not iterable");
                    };
                  },
                  2643: function (f, k, o) {
                    var s = o(8844),
                      h = o(2297),
                      u = o(9985),
                      a = o(6648),
                      p = o(4327),
                      m = s([].push);
                    f.exports = function (d) {
                      if (u(d)) return d;
                      if (h(d)) {
                        for (var w = d.length, g = [], E = 0; E < w; E++) {
                          var _ = d[E];
                          typeof _ == "string"
                            ? m(g, _)
                            : (typeof _ != "number" &&
                                a(_) !== "Number" &&
                                a(_) !== "String") ||
                              m(g, p(_));
                        }
                        var I = g.length,
                          j = !0;
                        return function (N, C) {
                          if (j) return (j = !1), C;
                          if (h(this)) return C;
                          for (var T = 0; T < I; T++) if (g[T] === N) return C;
                        };
                      }
                    };
                  },
                  4849: function (f, k, o) {
                    var s = o(509),
                      h = o(981);
                    f.exports = function (u, a) {
                      var p = u[a];
                      return h(p) ? void 0 : s(p);
                    };
                  },
                  7017: function (f, k, o) {
                    var s = o(8844),
                      h = o(690),
                      u = Math.floor,
                      a = s("".charAt),
                      p = s("".replace),
                      m = s("".slice),
                      d = /\$([$&'`]|\d{1,2}|<[^>]*>)/g,
                      w = /\$([$&'`]|\d{1,2})/g;
                    f.exports = function (g, E, _, I, j, N) {
                      var C = _ + g.length,
                        T = I.length,
                        M = w;
                      return (
                        j !== void 0 && ((j = h(j)), (M = d)),
                        p(N, M, function (Z, W) {
                          var B;
                          switch (a(W, 0)) {
                            case "$":
                              return "$";
                            case "&":
                              return g;
                            case "`":
                              return m(E, 0, _);
                            case "'":
                              return m(E, C);
                            case "<":
                              B = j[m(W, 1, -1)];
                              break;
                            default:
                              var $ = +W;
                              if ($ === 0) return Z;
                              if ($ > T) {
                                var V = u($ / 10);
                                return V === 0
                                  ? Z
                                  : V <= T
                                  ? I[V - 1] === void 0
                                    ? a(W, 1)
                                    : I[V - 1] + a(W, 1)
                                  : Z;
                              }
                              B = I[$ - 1];
                          }
                          return B === void 0 ? "" : B;
                        })
                      );
                    };
                  },
                  9037: function (f, k, o) {
                    var s = function (h) {
                      return h && h.Math === Math && h;
                    };
                    f.exports =
                      s(typeof globalThis == "object" && globalThis) ||
                      s(typeof window == "object" && window) ||
                      s(typeof self == "object" && self) ||
                      s(typeof o.g == "object" && o.g) ||
                      s(typeof this == "object" && this) ||
                      (function () {
                        return this;
                      })() ||
                      Function("return this")();
                  },
                  6812: function (f, k, o) {
                    var s = o(8844),
                      h = o(690),
                      u = s({}.hasOwnProperty);
                    f.exports =
                      Object.hasOwn ||
                      function (a, p) {
                        return u(h(a), p);
                      };
                  },
                  7248: function (f) {
                    f.exports = {};
                  },
                  2688: function (f, k, o) {
                    var s = o(6058);
                    f.exports = s("document", "documentElement");
                  },
                  8506: function (f, k, o) {
                    var s = o(7697),
                      h = o(3689),
                      u = o(6420);
                    f.exports =
                      !s &&
                      !h(function () {
                        return (
                          Object.defineProperty(u("div"), "a", {
                            get: function () {
                              return 7;
                            },
                          }).a !== 7
                        );
                      });
                  },
                  4413: function (f, k, o) {
                    var s = o(8844),
                      h = o(3689),
                      u = o(6648),
                      a = Object,
                      p = s("".split);
                    f.exports = h(function () {
                      return !a("z").propertyIsEnumerable(0);
                    })
                      ? function (m) {
                          return u(m) === "String" ? p(m, "") : a(m);
                        }
                      : a;
                  },
                  3457: function (f, k, o) {
                    var s = o(9985),
                      h = o(8999),
                      u = o(9385);
                    f.exports = function (a, p, m) {
                      var d, w;
                      return (
                        u &&
                          s((d = p.constructor)) &&
                          d !== m &&
                          h((w = d.prototype)) &&
                          w !== m.prototype &&
                          u(a, w),
                        a
                      );
                    };
                  },
                  6738: function (f, k, o) {
                    var s = o(8844),
                      h = o(9985),
                      u = o(4091),
                      a = s(Function.toString);
                    h(u.inspectSource) ||
                      (u.inspectSource = function (p) {
                        return a(p);
                      }),
                      (f.exports = u.inspectSource);
                  },
                  618: function (f, k, o) {
                    var s,
                      h,
                      u,
                      a = o(9834),
                      p = o(9037),
                      m = o(8999),
                      d = o(5773),
                      w = o(6812),
                      g = o(4091),
                      E = o(2713),
                      _ = o(7248),
                      I = "Object already initialized",
                      j = p.TypeError,
                      N = p.WeakMap;
                    if (a || g.state) {
                      var C = g.state || (g.state = new N());
                      (C.get = C.get),
                        (C.has = C.has),
                        (C.set = C.set),
                        (s = function (M, Z) {
                          if (C.has(M)) throw new j(I);
                          return (Z.facade = M), C.set(M, Z), Z;
                        }),
                        (h = function (M) {
                          return C.get(M) || {};
                        }),
                        (u = function (M) {
                          return C.has(M);
                        });
                    } else {
                      var T = E("state");
                      (_[T] = !0),
                        (s = function (M, Z) {
                          if (w(M, T)) throw new j(I);
                          return (Z.facade = M), d(M, T, Z), Z;
                        }),
                        (h = function (M) {
                          return w(M, T) ? M[T] : {};
                        }),
                        (u = function (M) {
                          return w(M, T);
                        });
                    }
                    f.exports = {
                      set: s,
                      get: h,
                      has: u,
                      enforce: function (M) {
                        return u(M) ? h(M) : s(M, {});
                      },
                      getterFor: function (M) {
                        return function (Z) {
                          var W;
                          if (!m(Z) || (W = h(Z)).type !== M)
                            throw new j(
                              "Incompatible receiver, " + M + " required"
                            );
                          return W;
                        };
                      },
                    };
                  },
                  3292: function (f, k, o) {
                    var s = o(4201),
                      h = o(9478),
                      u = s("iterator"),
                      a = Array.prototype;
                    f.exports = function (p) {
                      return p !== void 0 && (h.Array === p || a[u] === p);
                    };
                  },
                  2297: function (f, k, o) {
                    var s = o(6648);
                    f.exports =
                      Array.isArray ||
                      function (h) {
                        return s(h) === "Array";
                      };
                  },
                  9985: function (f) {
                    var k = typeof document == "object" && document.all;
                    f.exports =
                      k === void 0 && k !== void 0
                        ? function (o) {
                            return typeof o == "function" || o === k;
                          }
                        : function (o) {
                            return typeof o == "function";
                          };
                  },
                  9429: function (f, k, o) {
                    var s = o(8844),
                      h = o(3689),
                      u = o(9985),
                      a = o(926),
                      p = o(6058),
                      m = o(6738),
                      d = function () {},
                      w = [],
                      g = p("Reflect", "construct"),
                      E = /^\s*(?:class|function)\b/,
                      _ = s(E.exec),
                      I = !E.test(d),
                      j = function (C) {
                        if (!u(C)) return !1;
                        try {
                          return g(d, w, C), !0;
                        } catch {
                          return !1;
                        }
                      },
                      N = function (C) {
                        if (!u(C)) return !1;
                        switch (a(C)) {
                          case "AsyncFunction":
                          case "GeneratorFunction":
                          case "AsyncGeneratorFunction":
                            return !1;
                        }
                        try {
                          return I || !!_(E, m(C));
                        } catch {
                          return !0;
                        }
                      };
                    (N.sham = !0),
                      (f.exports =
                        !g ||
                        h(function () {
                          var C;
                          return (
                            j(j.call) ||
                            !j(Object) ||
                            !j(function () {
                              C = !0;
                            }) ||
                            C
                          );
                        })
                          ? N
                          : j);
                  },
                  5266: function (f, k, o) {
                    var s = o(3689),
                      h = o(9985),
                      u = /#|\.prototype\./,
                      a = function (g, E) {
                        var _ = m[p(g)];
                        return _ === w || (_ !== d && (h(E) ? s(E) : !!E));
                      },
                      p = (a.normalize = function (g) {
                        return String(g).replace(u, ".").toLowerCase();
                      }),
                      m = (a.data = {}),
                      d = (a.NATIVE = "N"),
                      w = (a.POLYFILL = "P");
                    f.exports = a;
                  },
                  1973: function (f, k, o) {
                    var s = o(8999),
                      h = Math.floor;
                    f.exports =
                      Number.isInteger ||
                      function (u) {
                        return !s(u) && isFinite(u) && h(u) === u;
                      };
                  },
                  981: function (f) {
                    f.exports = function (k) {
                      return k == null;
                    };
                  },
                  8999: function (f, k, o) {
                    var s = o(9985);
                    f.exports = function (h) {
                      return typeof h == "object" ? h !== null : s(h);
                    };
                  },
                  598: function (f, k, o) {
                    var s = o(8999);
                    f.exports = function (h) {
                      return s(h) || h === null;
                    };
                  },
                  3931: function (f) {
                    f.exports = !1;
                  },
                  1245: function (f, k, o) {
                    var s = o(8999),
                      h = o(6648),
                      u = o(4201)("match");
                    f.exports = function (a) {
                      var p;
                      return (
                        s(a) &&
                        ((p = a[u]) !== void 0 ? !!p : h(a) === "RegExp")
                      );
                    };
                  },
                  734: function (f, k, o) {
                    var s = o(6058),
                      h = o(9985),
                      u = o(3622),
                      a = o(9525),
                      p = Object;
                    f.exports = a
                      ? function (m) {
                          return typeof m == "symbol";
                        }
                      : function (m) {
                          var d = s("Symbol");
                          return h(d) && u(d.prototype, p(m));
                        };
                  },
                  2125: function (f, k, o) {
                    var s = o(2615),
                      h = o(5027),
                      u = o(4849);
                    f.exports = function (a, p, m) {
                      var d, w;
                      h(a);
                      try {
                        if (!(d = u(a, "return"))) {
                          if (p === "throw") throw m;
                          return m;
                        }
                        d = s(d, a);
                      } catch (g) {
                        (w = !0), (d = g);
                      }
                      if (p === "throw") throw m;
                      if (w) throw d;
                      return h(d), m;
                    };
                  },
                  974: function (f, k, o) {
                    var s = o(2013).IteratorPrototype,
                      h = o(5391),
                      u = o(5684),
                      a = o(5997),
                      p = o(9478),
                      m = function () {
                        return this;
                      };
                    f.exports = function (d, w, g, E) {
                      var _ = w + " Iterator";
                      return (
                        (d.prototype = h(s, { next: u(+!E, g) })),
                        a(d, _, !1, !0),
                        (p[_] = m),
                        d
                      );
                    };
                  },
                  1934: function (f, k, o) {
                    var s = o(9989),
                      h = o(2615),
                      u = o(3931),
                      a = o(1236),
                      p = o(9985),
                      m = o(974),
                      d = o(1868),
                      w = o(9385),
                      g = o(5997),
                      E = o(5773),
                      _ = o(1880),
                      I = o(4201),
                      j = o(9478),
                      N = o(2013),
                      C = a.PROPER,
                      T = a.CONFIGURABLE,
                      M = N.IteratorPrototype,
                      Z = N.BUGGY_SAFARI_ITERATORS,
                      W = I("iterator"),
                      B = "keys",
                      $ = "values",
                      V = "entries",
                      X = function () {
                        return this;
                      };
                    f.exports = function (J, ne, ae, ie, z, L, U) {
                      m(ae, ne, ie);
                      var v,
                        S,
                        P,
                        O = function (Q) {
                          if (Q === z && K) return K;
                          if (!Z && Q && Q in H) return H[Q];
                          switch (Q) {
                            case B:
                            case $:
                            case V:
                              return function () {
                                return new ae(this, Q);
                              };
                          }
                          return function () {
                            return new ae(this);
                          };
                        },
                        D = ne + " Iterator",
                        G = !1,
                        H = J.prototype,
                        A = H[W] || H["@@iterator"] || (z && H[z]),
                        K = (!Z && A) || O(z),
                        oe = (ne === "Array" && H.entries) || A;
                      if (
                        (oe &&
                          (v = d(oe.call(new J()))) !== Object.prototype &&
                          v.next &&
                          (u ||
                            d(v) === M ||
                            (w ? w(v, M) : p(v[W]) || _(v, W, X)),
                          g(v, D, !0, !0),
                          u && (j[D] = X)),
                        C &&
                          z === $ &&
                          A &&
                          A.name !== $ &&
                          (!u && T
                            ? E(H, "name", $)
                            : ((G = !0),
                              (K = function () {
                                return h(A, this);
                              }))),
                        z)
                      )
                        if (
                          ((S = {
                            values: O($),
                            keys: L ? K : O(B),
                            entries: O(V),
                          }),
                          U)
                        )
                          for (P in S) (Z || G || !(P in H)) && _(H, P, S[P]);
                        else s({ target: ne, proto: !0, forced: Z || G }, S);
                      return (
                        (u && !U) || H[W] === K || _(H, W, K, { name: z }),
                        (j[ne] = K),
                        S
                      );
                    };
                  },
                  2013: function (f, k, o) {
                    var s,
                      h,
                      u,
                      a = o(3689),
                      p = o(9985),
                      m = o(8999),
                      d = o(5391),
                      w = o(1868),
                      g = o(1880),
                      E = o(4201),
                      _ = o(3931),
                      I = E("iterator"),
                      j = !1;
                    [].keys &&
                      ("next" in (u = [].keys())
                        ? (h = w(w(u))) !== Object.prototype && (s = h)
                        : (j = !0)),
                      !m(s) ||
                      a(function () {
                        var N = {};
                        return s[I].call(N) !== N;
                      })
                        ? (s = {})
                        : _ && (s = d(s)),
                      p(s[I]) ||
                        g(s, I, function () {
                          return this;
                        }),
                      (f.exports = {
                        IteratorPrototype: s,
                        BUGGY_SAFARI_ITERATORS: j,
                      });
                  },
                  9478: function (f) {
                    f.exports = {};
                  },
                  6310: function (f, k, o) {
                    var s = o(3126);
                    f.exports = function (h) {
                      return s(h.length);
                    };
                  },
                  8702: function (f, k, o) {
                    var s = o(8844),
                      h = o(3689),
                      u = o(9985),
                      a = o(6812),
                      p = o(7697),
                      m = o(1236).CONFIGURABLE,
                      d = o(6738),
                      w = o(618),
                      g = w.enforce,
                      E = w.get,
                      _ = String,
                      I = Object.defineProperty,
                      j = s("".slice),
                      N = s("".replace),
                      C = s([].join),
                      T =
                        p &&
                        !h(function () {
                          return (
                            I(function () {}, "length", { value: 8 }).length !==
                            8
                          );
                        }),
                      M = String(String).split("String"),
                      Z = (f.exports = function (W, B, $) {
                        j(_(B), 0, 7) === "Symbol(" &&
                          (B = "[" + N(_(B), /^Symbol\(([^)]*)\)/, "$1") + "]"),
                          $ && $.getter && (B = "get " + B),
                          $ && $.setter && (B = "set " + B),
                          (!a(W, "name") || (m && W.name !== B)) &&
                            (p
                              ? I(W, "name", { value: B, configurable: !0 })
                              : (W.name = B)),
                          T &&
                            $ &&
                            a($, "arity") &&
                            W.length !== $.arity &&
                            I(W, "length", { value: $.arity });
                        try {
                          $ && a($, "constructor") && $.constructor
                            ? p && I(W, "prototype", { writable: !1 })
                            : W.prototype && (W.prototype = void 0);
                        } catch {}
                        var V = g(W);
                        return (
                          a(V, "source") ||
                            (V.source = C(M, typeof B == "string" ? B : "")),
                          W
                        );
                      });
                    Function.prototype.toString = Z(function () {
                      return (u(this) && E(this).source) || d(this);
                    }, "toString");
                  },
                  8828: function (f) {
                    var k = Math.ceil,
                      o = Math.floor;
                    f.exports =
                      Math.trunc ||
                      function (s) {
                        var h = +s;
                        return (h > 0 ? o : k)(h);
                      };
                  },
                  2124: function (f, k, o) {
                    var s = o(1245),
                      h = TypeError;
                    f.exports = function (u) {
                      if (s(u))
                        throw new h(
                          "The method doesn't accept regular expressions"
                        );
                      return u;
                    };
                  },
                  5394: function (f, k, o) {
                    var s = o(7697),
                      h = o(8844),
                      u = o(2615),
                      a = o(3689),
                      p = o(300),
                      m = o(7518),
                      d = o(9556),
                      w = o(690),
                      g = o(4413),
                      E = Object.assign,
                      _ = Object.defineProperty,
                      I = h([].concat);
                    f.exports =
                      !E ||
                      a(function () {
                        if (
                          s &&
                          E(
                            { b: 1 },
                            E(
                              _({}, "a", {
                                enumerable: !0,
                                get: function () {
                                  _(this, "b", { value: 3, enumerable: !1 });
                                },
                              }),
                              { b: 2 }
                            )
                          ).b !== 1
                        )
                          return !0;
                        var j = {},
                          N = {},
                          C = Symbol("assign detection"),
                          T = "abcdefghijklmnopqrst";
                        return (
                          (j[C] = 7),
                          T.split("").forEach(function (M) {
                            N[M] = M;
                          }),
                          E({}, j)[C] !== 7 || p(E({}, N)).join("") !== T
                        );
                      })
                        ? function (j, N) {
                            for (
                              var C = w(j),
                                T = arguments.length,
                                M = 1,
                                Z = m.f,
                                W = d.f;
                              T > M;

                            )
                              for (
                                var B,
                                  $ = g(arguments[M++]),
                                  V = Z ? I(p($), Z($)) : p($),
                                  X = V.length,
                                  J = 0;
                                X > J;

                              )
                                (B = V[J++]),
                                  (s && !u(W, $, B)) || (C[B] = $[B]);
                            return C;
                          }
                        : E;
                  },
                  5391: function (f, k, o) {
                    var s,
                      h = o(5027),
                      u = o(8920),
                      a = o(2739),
                      p = o(7248),
                      m = o(2688),
                      d = o(6420),
                      w = o(2713),
                      g = "prototype",
                      E = "script",
                      _ = w("IE_PROTO"),
                      I = function () {},
                      j = function (T) {
                        return "<" + E + ">" + T + "</" + E + ">";
                      },
                      N = function (T) {
                        T.write(j("")), T.close();
                        var M = T.parentWindow.Object;
                        return (T = null), M;
                      },
                      C = function () {
                        try {
                          s = new ActiveXObject("htmlfile");
                        } catch {}
                        var T, M, Z;
                        C =
                          typeof document < "u"
                            ? document.domain && s
                              ? N(s)
                              : ((M = d("iframe")),
                                (Z = "java" + E + ":"),
                                (M.style.display = "none"),
                                m.appendChild(M),
                                (M.src = String(Z)),
                                (T = M.contentWindow.document).open(),
                                T.write(j("document.F=Object")),
                                T.close(),
                                T.F)
                            : N(s);
                        for (var W = a.length; W--; ) delete C[g][a[W]];
                        return C();
                      };
                    (p[_] = !0),
                      (f.exports =
                        Object.create ||
                        function (T, M) {
                          var Z;
                          return (
                            T !== null
                              ? ((I[g] = h(T)),
                                (Z = new I()),
                                (I[g] = null),
                                (Z[_] = T))
                              : (Z = C()),
                            M === void 0 ? Z : u.f(Z, M)
                          );
                        });
                  },
                  8920: function (f, k, o) {
                    var s = o(7697),
                      h = o(5648),
                      u = o(2560),
                      a = o(5027),
                      p = o(5290),
                      m = o(300);
                    k.f =
                      s && !h
                        ? Object.defineProperties
                        : function (d, w) {
                            a(d);
                            for (
                              var g, E = p(w), _ = m(w), I = _.length, j = 0;
                              I > j;

                            )
                              u.f(d, (g = _[j++]), E[g]);
                            return d;
                          };
                  },
                  2560: function (f, k, o) {
                    var s = o(7697),
                      h = o(8506),
                      u = o(5648),
                      a = o(5027),
                      p = o(8360),
                      m = TypeError,
                      d = Object.defineProperty,
                      w = Object.getOwnPropertyDescriptor,
                      g = "enumerable",
                      E = "configurable",
                      _ = "writable";
                    k.f = s
                      ? u
                        ? function (I, j, N) {
                            if (
                              (a(I),
                              (j = p(j)),
                              a(N),
                              typeof I == "function" &&
                                j === "prototype" &&
                                "value" in N &&
                                _ in N &&
                                !N[_])
                            ) {
                              var C = w(I, j);
                              C &&
                                C[_] &&
                                ((I[j] = N.value),
                                (N = {
                                  configurable: E in N ? N[E] : C[E],
                                  enumerable: g in N ? N[g] : C[g],
                                  writable: !1,
                                }));
                            }
                            return d(I, j, N);
                          }
                        : d
                      : function (I, j, N) {
                          if ((a(I), (j = p(j)), a(N), h))
                            try {
                              return d(I, j, N);
                            } catch {}
                          if ("get" in N || "set" in N)
                            throw new m("Accessors not supported");
                          return "value" in N && (I[j] = N.value), I;
                        };
                  },
                  2474: function (f, k, o) {
                    var s = o(7697),
                      h = o(2615),
                      u = o(9556),
                      a = o(5684),
                      p = o(5290),
                      m = o(8360),
                      d = o(6812),
                      w = o(8506),
                      g = Object.getOwnPropertyDescriptor;
                    k.f = s
                      ? g
                      : function (E, _) {
                          if (((E = p(E)), (_ = m(_)), w))
                            try {
                              return g(E, _);
                            } catch {}
                          if (d(E, _)) return a(!h(u.f, E, _), E[_]);
                        };
                  },
                  6062: function (f, k, o) {
                    var s = o(6648),
                      h = o(5290),
                      u = o(2741).f,
                      a = o(6004),
                      p =
                        typeof window == "object" &&
                        window &&
                        Object.getOwnPropertyNames
                          ? Object.getOwnPropertyNames(window)
                          : [];
                    f.exports.f = function (m) {
                      return p && s(m) === "Window"
                        ? (function (d) {
                            try {
                              return u(d);
                            } catch {
                              return a(p);
                            }
                          })(m)
                        : u(h(m));
                    };
                  },
                  2741: function (f, k, o) {
                    var s = o(4948),
                      h = o(2739).concat("length", "prototype");
                    k.f =
                      Object.getOwnPropertyNames ||
                      function (u) {
                        return s(u, h);
                      };
                  },
                  7518: function (f, k) {
                    k.f = Object.getOwnPropertySymbols;
                  },
                  1868: function (f, k, o) {
                    var s = o(6812),
                      h = o(9985),
                      u = o(690),
                      a = o(2713),
                      p = o(1748),
                      m = a("IE_PROTO"),
                      d = Object,
                      w = d.prototype;
                    f.exports = p
                      ? d.getPrototypeOf
                      : function (g) {
                          var E = u(g);
                          if (s(E, m)) return E[m];
                          var _ = E.constructor;
                          return h(_) && E instanceof _
                            ? _.prototype
                            : E instanceof d
                            ? w
                            : null;
                        };
                  },
                  3622: function (f, k, o) {
                    var s = o(8844);
                    f.exports = s({}.isPrototypeOf);
                  },
                  4948: function (f, k, o) {
                    var s = o(8844),
                      h = o(6812),
                      u = o(5290),
                      a = o(4328).indexOf,
                      p = o(7248),
                      m = s([].push);
                    f.exports = function (d, w) {
                      var g,
                        E = u(d),
                        _ = 0,
                        I = [];
                      for (g in E) !h(p, g) && h(E, g) && m(I, g);
                      for (; w.length > _; )
                        h(E, (g = w[_++])) && (~a(I, g) || m(I, g));
                      return I;
                    };
                  },
                  300: function (f, k, o) {
                    var s = o(4948),
                      h = o(2739);
                    f.exports =
                      Object.keys ||
                      function (u) {
                        return s(u, h);
                      };
                  },
                  9556: function (f, k) {
                    var o = {}.propertyIsEnumerable,
                      s = Object.getOwnPropertyDescriptor,
                      h = s && !o.call({ 1: 2 }, 1);
                    k.f = h
                      ? function (u) {
                          var a = s(this, u);
                          return !!a && a.enumerable;
                        }
                      : o;
                  },
                  600: function (f, k, o) {
                    var s = o(3931),
                      h = o(9037),
                      u = o(3689),
                      a = o(7922);
                    f.exports =
                      s ||
                      !u(function () {
                        if (!(a && a < 535)) {
                          var p = Math.random();
                          __defineSetter__.call(null, p, function () {}),
                            delete h[p];
                        }
                      });
                  },
                  9385: function (f, k, o) {
                    var s = o(2743),
                      h = o(5027),
                      u = o(3550);
                    f.exports =
                      Object.setPrototypeOf ||
                      ("__proto__" in {}
                        ? (function () {
                            var a,
                              p = !1,
                              m = {};
                            try {
                              (a = s(Object.prototype, "__proto__", "set"))(
                                m,
                                []
                              ),
                                (p = m instanceof Array);
                            } catch {}
                            return function (d, w) {
                              return (
                                h(d), u(w), p ? a(d, w) : (d.__proto__ = w), d
                              );
                            };
                          })()
                        : void 0);
                  },
                  5073: function (f, k, o) {
                    var s = o(3043),
                      h = o(926);
                    f.exports = s
                      ? {}.toString
                      : function () {
                          return "[object " + h(this) + "]";
                        };
                  },
                  5899: function (f, k, o) {
                    var s = o(2615),
                      h = o(9985),
                      u = o(8999),
                      a = TypeError;
                    f.exports = function (p, m) {
                      var d, w;
                      if (
                        (m === "string" &&
                          h((d = p.toString)) &&
                          !u((w = s(d, p)))) ||
                        (h((d = p.valueOf)) && !u((w = s(d, p)))) ||
                        (m !== "string" &&
                          h((d = p.toString)) &&
                          !u((w = s(d, p))))
                      )
                        return w;
                      throw new a("Can't convert object to primitive value");
                    };
                  },
                  9152: function (f, k, o) {
                    var s = o(6058),
                      h = o(8844),
                      u = o(2741),
                      a = o(7518),
                      p = o(5027),
                      m = h([].concat);
                    f.exports =
                      s("Reflect", "ownKeys") ||
                      function (d) {
                        var w = u.f(p(d)),
                          g = a.f;
                        return g ? m(w, g(d)) : w;
                      };
                  },
                  496: function (f, k, o) {
                    var s = o(9037);
                    f.exports = s;
                  },
                  8055: function (f, k, o) {
                    var s = o(2560).f;
                    f.exports = function (h, u, a) {
                      a in h ||
                        s(h, a, {
                          configurable: !0,
                          get: function () {
                            return u[a];
                          },
                          set: function (p) {
                            u[a] = p;
                          },
                        });
                    };
                  },
                  6100: function (f, k, o) {
                    var s = o(2615),
                      h = o(5027),
                      u = o(9985),
                      a = o(6648),
                      p = o(6308),
                      m = TypeError;
                    f.exports = function (d, w) {
                      var g = d.exec;
                      if (u(g)) {
                        var E = s(g, d, w);
                        return E !== null && h(E), E;
                      }
                      if (a(d) === "RegExp") return s(p, d, w);
                      throw new m(
                        "RegExp#exec called on incompatible receiver"
                      );
                    };
                  },
                  6308: function (f, k, o) {
                    var s,
                      h,
                      u = o(2615),
                      a = o(8844),
                      p = o(4327),
                      m = o(9633),
                      d = o(7901),
                      w = o(3430),
                      g = o(5391),
                      E = o(618).get,
                      _ = o(2100),
                      I = o(6422),
                      j = w("native-string-replace", String.prototype.replace),
                      N = RegExp.prototype.exec,
                      C = N,
                      T = a("".charAt),
                      M = a("".indexOf),
                      Z = a("".replace),
                      W = a("".slice),
                      B =
                        ((h = /b*/g),
                        u(N, (s = /a/), "a"),
                        u(N, h, "a"),
                        s.lastIndex !== 0 || h.lastIndex !== 0),
                      $ = d.BROKEN_CARET,
                      V = /()??/.exec("")[1] !== void 0;
                    (B || V || $ || _ || I) &&
                      (C = function (X) {
                        var J,
                          ne,
                          ae,
                          ie,
                          z,
                          L,
                          U,
                          v = this,
                          S = E(v),
                          P = p(X),
                          O = S.raw;
                        if (O)
                          return (
                            (O.lastIndex = v.lastIndex),
                            (J = u(C, O, P)),
                            (v.lastIndex = O.lastIndex),
                            J
                          );
                        var D = S.groups,
                          G = $ && v.sticky,
                          H = u(m, v),
                          A = v.source,
                          K = 0,
                          oe = P;
                        if (
                          (G &&
                            ((H = Z(H, "y", "")),
                            M(H, "g") === -1 && (H += "g"),
                            (oe = W(P, v.lastIndex)),
                            v.lastIndex > 0 &&
                              (!v.multiline ||
                                (v.multiline &&
                                  T(P, v.lastIndex - 1) !==
                                    `
`)) &&
                              ((A = "(?: " + A + ")"), (oe = " " + oe), K++),
                            (ne = new RegExp("^(?:" + A + ")", H))),
                          V && (ne = new RegExp("^" + A + "$(?!\\s)", H)),
                          B && (ae = v.lastIndex),
                          (ie = u(N, G ? ne : v, oe)),
                          G
                            ? ie
                              ? ((ie.input = W(ie.input, K)),
                                (ie[0] = W(ie[0], K)),
                                (ie.index = v.lastIndex),
                                (v.lastIndex += ie[0].length))
                              : (v.lastIndex = 0)
                            : B &&
                              ie &&
                              (v.lastIndex = v.global
                                ? ie.index + ie[0].length
                                : ae),
                          V &&
                            ie &&
                            ie.length > 1 &&
                            u(j, ie[0], ne, function () {
                              for (z = 1; z < arguments.length - 2; z++)
                                arguments[z] === void 0 && (ie[z] = void 0);
                            }),
                          ie && D)
                        )
                          for (
                            ie.groups = L = g(null), z = 0;
                            z < D.length;
                            z++
                          )
                            L[(U = D[z])[0]] = ie[U[1]];
                        return ie;
                      }),
                      (f.exports = C);
                  },
                  9633: function (f, k, o) {
                    var s = o(5027);
                    f.exports = function () {
                      var h = s(this),
                        u = "";
                      return (
                        h.hasIndices && (u += "d"),
                        h.global && (u += "g"),
                        h.ignoreCase && (u += "i"),
                        h.multiline && (u += "m"),
                        h.dotAll && (u += "s"),
                        h.unicode && (u += "u"),
                        h.unicodeSets && (u += "v"),
                        h.sticky && (u += "y"),
                        u
                      );
                    };
                  },
                  3477: function (f, k, o) {
                    var s = o(2615),
                      h = o(6812),
                      u = o(3622),
                      a = o(9633),
                      p = RegExp.prototype;
                    f.exports = function (m) {
                      var d = m.flags;
                      return d !== void 0 ||
                        "flags" in p ||
                        h(m, "flags") ||
                        !u(p, m)
                        ? d
                        : s(a, m);
                    };
                  },
                  7901: function (f, k, o) {
                    var s = o(3689),
                      h = o(9037).RegExp,
                      u = s(function () {
                        var m = h("a", "y");
                        return (m.lastIndex = 2), m.exec("abcd") !== null;
                      }),
                      a =
                        u ||
                        s(function () {
                          return !h("a", "y").sticky;
                        }),
                      p =
                        u ||
                        s(function () {
                          var m = h("^r", "gy");
                          return (m.lastIndex = 2), m.exec("str") !== null;
                        });
                    f.exports = {
                      BROKEN_CARET: p,
                      MISSED_STICKY: a,
                      UNSUPPORTED_Y: u,
                    };
                  },
                  2100: function (f, k, o) {
                    var s = o(3689),
                      h = o(9037).RegExp;
                    f.exports = s(function () {
                      var u = h(".", "s");
                      return !(
                        u.dotAll &&
                        u.test(`
`) &&
                        u.flags === "s"
                      );
                    });
                  },
                  6422: function (f, k, o) {
                    var s = o(3689),
                      h = o(9037).RegExp;
                    f.exports = s(function () {
                      var u = h("(?<a>b)", "g");
                      return (
                        u.exec("b").groups.a !== "b" ||
                        "b".replace(u, "$<a>c") !== "bc"
                      );
                    });
                  },
                  4684: function (f, k, o) {
                    var s = o(981),
                      h = TypeError;
                    f.exports = function (u) {
                      if (s(u)) throw new h("Can't call method on " + u);
                      return u;
                    };
                  },
                  4241: function (f, k, o) {
                    var s = o(6058),
                      h = o(2148),
                      u = o(4201),
                      a = o(7697),
                      p = u("species");
                    f.exports = function (m) {
                      var d = s(m);
                      a &&
                        d &&
                        !d[p] &&
                        h(d, p, {
                          configurable: !0,
                          get: function () {
                            return this;
                          },
                        });
                    };
                  },
                  5997: function (f, k, o) {
                    var s = o(2560).f,
                      h = o(6812),
                      u = o(4201)("toStringTag");
                    f.exports = function (a, p, m) {
                      a && !m && (a = a.prototype),
                        a &&
                          !h(a, u) &&
                          s(a, u, { configurable: !0, value: p });
                    };
                  },
                  2713: function (f, k, o) {
                    var s = o(3430),
                      h = o(4630),
                      u = s("keys");
                    f.exports = function (a) {
                      return u[a] || (u[a] = h(a));
                    };
                  },
                  4091: function (f, k, o) {
                    var s = o(9037),
                      h = o(5014),
                      u = "__core-js_shared__",
                      a = s[u] || h(u, {});
                    f.exports = a;
                  },
                  3430: function (f, k, o) {
                    var s = o(3931),
                      h = o(4091);
                    (f.exports = function (u, a) {
                      return h[u] || (h[u] = a !== void 0 ? a : {});
                    })("versions", []).push({
                      version: "3.35.0",
                      mode: s ? "pure" : "global",
                      copyright: "© 2014-2023 Denis Pushkarev (zloirock.ru)",
                      license:
                        "https://github.com/zloirock/core-js/blob/v3.35.0/LICENSE",
                      source: "https://github.com/zloirock/core-js",
                    });
                  },
                  6373: function (f, k, o) {
                    var s = o(5027),
                      h = o(2655),
                      u = o(981),
                      a = o(4201)("species");
                    f.exports = function (p, m) {
                      var d,
                        w = s(p).constructor;
                      return w === void 0 || u((d = s(w)[a])) ? m : h(d);
                    };
                  },
                  730: function (f, k, o) {
                    var s = o(8844),
                      h = o(8700),
                      u = o(4327),
                      a = o(4684),
                      p = s("".charAt),
                      m = s("".charCodeAt),
                      d = s("".slice),
                      w = function (g) {
                        return function (E, _) {
                          var I,
                            j,
                            N = u(a(E)),
                            C = h(_),
                            T = N.length;
                          return C < 0 || C >= T
                            ? g
                              ? ""
                              : void 0
                            : (I = m(N, C)) < 55296 ||
                              I > 56319 ||
                              C + 1 === T ||
                              (j = m(N, C + 1)) < 56320 ||
                              j > 57343
                            ? g
                              ? p(N, C)
                              : I
                            : g
                            ? d(N, C, C + 2)
                            : j - 56320 + ((I - 55296) << 10) + 65536;
                        };
                      };
                    f.exports = { codeAt: w(!1), charAt: w(!0) };
                  },
                  5984: function (f, k, o) {
                    var s = o(1236).PROPER,
                      h = o(3689),
                      u = o(6350);
                    f.exports = function (a) {
                      return h(function () {
                        return (
                          !!u[a]() ||
                          "​᠎"[a]() !== "​᠎" ||
                          (s && u[a].name !== a)
                        );
                      });
                    };
                  },
                  1435: function (f, k, o) {
                    var s = o(8844),
                      h = o(4684),
                      u = o(4327),
                      a = o(6350),
                      p = s("".replace),
                      m = RegExp("^[" + a + "]+"),
                      d = RegExp("(^|[^" + a + "])[" + a + "]+$"),
                      w = function (g) {
                        return function (E) {
                          var _ = u(h(E));
                          return (
                            1 & g && (_ = p(_, m, "")),
                            2 & g && (_ = p(_, d, "$1")),
                            _
                          );
                        };
                      };
                    f.exports = { start: w(1), end: w(2), trim: w(3) };
                  },
                  146: function (f, k, o) {
                    var s = o(3615),
                      h = o(3689),
                      u = o(9037).String;
                    f.exports =
                      !!Object.getOwnPropertySymbols &&
                      !h(function () {
                        var a = Symbol("symbol detection");
                        return (
                          !u(a) ||
                          !(Object(a) instanceof Symbol) ||
                          (!Symbol.sham && s && s < 41)
                        );
                      });
                  },
                  3032: function (f, k, o) {
                    var s = o(2615),
                      h = o(6058),
                      u = o(4201),
                      a = o(1880);
                    f.exports = function () {
                      var p = h("Symbol"),
                        m = p && p.prototype,
                        d = m && m.valueOf,
                        w = u("toPrimitive");
                      m &&
                        !m[w] &&
                        a(
                          m,
                          w,
                          function (g) {
                            return s(d, this);
                          },
                          { arity: 1 }
                        );
                    };
                  },
                  6549: function (f, k, o) {
                    var s = o(146);
                    f.exports = s && !!Symbol.for && !!Symbol.keyFor;
                  },
                  3648: function (f, k, o) {
                    var s = o(8844);
                    f.exports = s((1).valueOf);
                  },
                  7578: function (f, k, o) {
                    var s = o(8700),
                      h = Math.max,
                      u = Math.min;
                    f.exports = function (a, p) {
                      var m = s(a);
                      return m < 0 ? h(m + p, 0) : u(m, p);
                    };
                  },
                  5290: function (f, k, o) {
                    var s = o(4413),
                      h = o(4684);
                    f.exports = function (u) {
                      return s(h(u));
                    };
                  },
                  8700: function (f, k, o) {
                    var s = o(8828);
                    f.exports = function (h) {
                      var u = +h;
                      return u != u || u === 0 ? 0 : s(u);
                    };
                  },
                  3126: function (f, k, o) {
                    var s = o(8700),
                      h = Math.min;
                    f.exports = function (u) {
                      return u > 0 ? h(s(u), 9007199254740991) : 0;
                    };
                  },
                  690: function (f, k, o) {
                    var s = o(4684),
                      h = Object;
                    f.exports = function (u) {
                      return h(s(u));
                    };
                  },
                  8732: function (f, k, o) {
                    var s = o(2615),
                      h = o(8999),
                      u = o(734),
                      a = o(4849),
                      p = o(5899),
                      m = o(4201),
                      d = TypeError,
                      w = m("toPrimitive");
                    f.exports = function (g, E) {
                      if (!h(g) || u(g)) return g;
                      var _,
                        I = a(g, w);
                      if (I) {
                        if (
                          (E === void 0 && (E = "default"),
                          (_ = s(I, g, E)),
                          !h(_) || u(_))
                        )
                          return _;
                        throw new d("Can't convert object to primitive value");
                      }
                      return E === void 0 && (E = "number"), p(g, E);
                    };
                  },
                  8360: function (f, k, o) {
                    var s = o(8732),
                      h = o(734);
                    f.exports = function (u) {
                      var a = s(u, "string");
                      return h(a) ? a : a + "";
                    };
                  },
                  3043: function (f, k, o) {
                    var s = {};
                    (s[o(4201)("toStringTag")] = "z"),
                      (f.exports = String(s) === "[object z]");
                  },
                  4327: function (f, k, o) {
                    var s = o(926),
                      h = String;
                    f.exports = function (u) {
                      if (s(u) === "Symbol")
                        throw new TypeError(
                          "Cannot convert a Symbol value to a string"
                        );
                      return h(u);
                    };
                  },
                  3691: function (f) {
                    var k = String;
                    f.exports = function (o) {
                      try {
                        return k(o);
                      } catch {
                        return "Object";
                      }
                    };
                  },
                  4630: function (f, k, o) {
                    var s = o(8844),
                      h = 0,
                      u = Math.random(),
                      a = s((1).toString);
                    f.exports = function (p) {
                      return (
                        "Symbol(" +
                        (p === void 0 ? "" : p) +
                        ")_" +
                        a(++h + u, 36)
                      );
                    };
                  },
                  9525: function (f, k, o) {
                    var s = o(146);
                    f.exports =
                      s && !Symbol.sham && typeof Symbol.iterator == "symbol";
                  },
                  5648: function (f, k, o) {
                    var s = o(7697),
                      h = o(3689);
                    f.exports =
                      s &&
                      h(function () {
                        return (
                          Object.defineProperty(function () {}, "prototype", {
                            value: 42,
                            writable: !1,
                          }).prototype !== 42
                        );
                      });
                  },
                  9834: function (f, k, o) {
                    var s = o(9037),
                      h = o(9985),
                      u = s.WeakMap;
                    f.exports = h(u) && /native code/.test(String(u));
                  },
                  5405: function (f, k, o) {
                    var s = o(496),
                      h = o(6812),
                      u = o(6145),
                      a = o(2560).f;
                    f.exports = function (p) {
                      var m = s.Symbol || (s.Symbol = {});
                      h(m, p) || a(m, p, { value: u.f(p) });
                    };
                  },
                  6145: function (f, k, o) {
                    var s = o(4201);
                    k.f = s;
                  },
                  4201: function (f, k, o) {
                    var s = o(9037),
                      h = o(3430),
                      u = o(6812),
                      a = o(4630),
                      p = o(146),
                      m = o(9525),
                      d = s.Symbol,
                      w = h("wks"),
                      g = m ? d.for || d : (d && d.withoutSetter) || a;
                    f.exports = function (E) {
                      return (
                        u(w, E) ||
                          (w[E] = p && u(d, E) ? d[E] : g("Symbol." + E)),
                        w[E]
                      );
                    };
                  },
                  6350: function (f) {
                    f.exports = `	
\v\f\r                　\u2028\u2029\uFEFF`;
                  },
                  4338: function (f, k, o) {
                    var s = o(9989),
                      h = o(3689),
                      u = o(2297),
                      a = o(8999),
                      p = o(690),
                      m = o(6310),
                      d = o(5565),
                      w = o(6522),
                      g = o(7120),
                      E = o(9042),
                      _ = o(4201),
                      I = o(3615),
                      j = _("isConcatSpreadable"),
                      N =
                        I >= 51 ||
                        !h(function () {
                          var T = [];
                          return (T[j] = !1), T.concat()[0] !== T;
                        }),
                      C = function (T) {
                        if (!a(T)) return !1;
                        var M = T[j];
                        return M !== void 0 ? !!M : u(T);
                      };
                    s(
                      {
                        target: "Array",
                        proto: !0,
                        arity: 1,
                        forced: !N || !E("concat"),
                      },
                      {
                        concat: function (T) {
                          var M,
                            Z,
                            W,
                            B,
                            $,
                            V = p(this),
                            X = g(V, 0),
                            J = 0;
                          for (M = -1, W = arguments.length; M < W; M++)
                            if (C(($ = M === -1 ? V : arguments[M])))
                              for (B = m($), d(J + B), Z = 0; Z < B; Z++, J++)
                                Z in $ && w(X, J, $[Z]);
                            else d(J + 1), w(X, J++, $);
                          return (X.length = J), X;
                        },
                      }
                    );
                  },
                  8077: function (f, k, o) {
                    var s = o(9989),
                      h = o(2960).filter;
                    s(
                      {
                        target: "Array",
                        proto: !0,
                        forced: !o(9042)("filter"),
                      },
                      {
                        filter: function (u) {
                          return h(
                            this,
                            u,
                            arguments.length > 1 ? arguments[1] : void 0
                          );
                        },
                      }
                    );
                  },
                  7049: function (f, k, o) {
                    var s = o(9989),
                      h = o(1055);
                    s(
                      {
                        target: "Array",
                        stat: !0,
                        forced: !o(6431)(function (u) {
                          Array.from(u);
                        }),
                      },
                      { from: h }
                    );
                  },
                  6801: function (f, k, o) {
                    var s = o(9989),
                      h = o(4328).includes,
                      u = o(3689),
                      a = o(7370);
                    s(
                      {
                        target: "Array",
                        proto: !0,
                        forced: u(function () {
                          return !Array(1).includes();
                        }),
                      },
                      {
                        includes: function (p) {
                          return h(
                            this,
                            p,
                            arguments.length > 1 ? arguments[1] : void 0
                          );
                        },
                      }
                    ),
                      a("includes");
                  },
                  7195: function (f, k, o) {
                    var s = o(9989),
                      h = o(6576),
                      u = o(4328).indexOf,
                      a = o(6834),
                      p = h([].indexOf),
                      m = !!p && 1 / p([1], 1, -0) < 0;
                    s(
                      {
                        target: "Array",
                        proto: !0,
                        forced: m || !a("indexOf"),
                      },
                      {
                        indexOf: function (d) {
                          var w = arguments.length > 1 ? arguments[1] : void 0;
                          return m ? p(this, d, w) || 0 : u(this, d, w);
                        },
                      }
                    );
                  },
                  752: function (f, k, o) {
                    var s = o(5290),
                      h = o(7370),
                      u = o(9478),
                      a = o(618),
                      p = o(2560).f,
                      m = o(1934),
                      d = o(7807),
                      w = o(3931),
                      g = o(7697),
                      E = "Array Iterator",
                      _ = a.set,
                      I = a.getterFor(E);
                    f.exports = m(
                      Array,
                      "Array",
                      function (N, C) {
                        _(this, { type: E, target: s(N), index: 0, kind: C });
                      },
                      function () {
                        var N = I(this),
                          C = N.target,
                          T = N.index++;
                        if (!C || T >= C.length)
                          return (N.target = void 0), d(void 0, !0);
                        switch (N.kind) {
                          case "keys":
                            return d(T, !1);
                          case "values":
                            return d(C[T], !1);
                        }
                        return d([T, C[T]], !1);
                      },
                      "values"
                    );
                    var j = (u.Arguments = u.Array);
                    if (
                      (h("keys"),
                      h("values"),
                      h("entries"),
                      !w && g && j.name !== "values")
                    )
                      try {
                        p(j, "name", { value: "values" });
                      } catch {}
                  },
                  6203: function (f, k, o) {
                    var s = o(9989),
                      h = o(8844),
                      u = o(4413),
                      a = o(5290),
                      p = o(6834),
                      m = h([].join);
                    s(
                      {
                        target: "Array",
                        proto: !0,
                        forced: u !== Object || !p("join", ","),
                      },
                      {
                        join: function (d) {
                          return m(a(this), d === void 0 ? "," : d);
                        },
                      }
                    );
                  },
                  886: function (f, k, o) {
                    var s = o(9989),
                      h = o(2960).map;
                    s(
                      { target: "Array", proto: !0, forced: !o(9042)("map") },
                      {
                        map: function (u) {
                          return h(
                            this,
                            u,
                            arguments.length > 1 ? arguments[1] : void 0
                          );
                        },
                      }
                    );
                  },
                  278: function (f, k, o) {
                    var s = o(9989),
                      h = o(8820).left,
                      u = o(6834),
                      a = o(3615);
                    s(
                      {
                        target: "Array",
                        proto: !0,
                        forced: (!o(806) && a > 79 && a < 83) || !u("reduce"),
                      },
                      {
                        reduce: function (p) {
                          var m = arguments.length;
                          return h(this, p, m, m > 1 ? arguments[1] : void 0);
                        },
                      }
                    );
                  },
                  9730: function (f, k, o) {
                    var s = o(9989),
                      h = o(2297),
                      u = o(9429),
                      a = o(8999),
                      p = o(7578),
                      m = o(6310),
                      d = o(5290),
                      w = o(6522),
                      g = o(4201),
                      E = o(9042),
                      _ = o(6004),
                      I = E("slice"),
                      j = g("species"),
                      N = Array,
                      C = Math.max;
                    s(
                      { target: "Array", proto: !0, forced: !I },
                      {
                        slice: function (T, M) {
                          var Z,
                            W,
                            B,
                            $ = d(this),
                            V = m($),
                            X = p(T, V),
                            J = p(M === void 0 ? V : M, V);
                          if (
                            h($) &&
                            ((Z = $.constructor),
                            ((u(Z) && (Z === N || h(Z.prototype))) ||
                              (a(Z) && (Z = Z[j]) === null)) &&
                              (Z = void 0),
                            Z === N || Z === void 0)
                          )
                            return _($, X, J);
                          for (
                            W = new (Z === void 0 ? N : Z)(C(J - X, 0)), B = 0;
                            X < J;
                            X++, B++
                          )
                            X in $ && w(W, B, $[X]);
                          return (W.length = B), W;
                        },
                      }
                    );
                  },
                  5137: function (f, k, o) {
                    var s = o(9989),
                      h = o(8844),
                      u = o(509),
                      a = o(690),
                      p = o(6310),
                      m = o(8494),
                      d = o(4327),
                      w = o(3689),
                      g = o(382),
                      E = o(6834),
                      _ = o(7365),
                      I = o(7298),
                      j = o(3615),
                      N = o(7922),
                      C = [],
                      T = h(C.sort),
                      M = h(C.push),
                      Z = w(function () {
                        C.sort(void 0);
                      }),
                      W = w(function () {
                        C.sort(null);
                      }),
                      B = E("sort"),
                      $ = !w(function () {
                        if (j) return j < 70;
                        if (!(_ && _ > 3)) {
                          if (I) return !0;
                          if (N) return N < 603;
                          var V,
                            X,
                            J,
                            ne,
                            ae = "";
                          for (V = 65; V < 76; V++) {
                            switch (((X = String.fromCharCode(V)), V)) {
                              case 66:
                              case 69:
                              case 70:
                              case 72:
                                J = 3;
                                break;
                              case 68:
                              case 71:
                                J = 4;
                                break;
                              default:
                                J = 2;
                            }
                            for (ne = 0; ne < 47; ne++)
                              C.push({ k: X + ne, v: J });
                          }
                          for (
                            C.sort(function (ie, z) {
                              return z.v - ie.v;
                            }),
                              ne = 0;
                            ne < C.length;
                            ne++
                          )
                            (X = C[ne].k.charAt(0)),
                              ae.charAt(ae.length - 1) !== X && (ae += X);
                          return ae !== "DGBEFHACIJK";
                        }
                      });
                    s(
                      {
                        target: "Array",
                        proto: !0,
                        forced: Z || !W || !B || !$,
                      },
                      {
                        sort: function (V) {
                          V !== void 0 && u(V);
                          var X = a(this);
                          if ($) return V === void 0 ? T(X) : T(X, V);
                          var J,
                            ne,
                            ae = [],
                            ie = p(X);
                          for (ne = 0; ne < ie; ne++) ne in X && M(ae, X[ne]);
                          for (
                            g(
                              ae,
                              (function (z) {
                                return function (L, U) {
                                  return U === void 0
                                    ? -1
                                    : L === void 0
                                    ? 1
                                    : z !== void 0
                                    ? +z(L, U) || 0
                                    : d(L) > d(U)
                                    ? 1
                                    : -1;
                                };
                              })(V)
                            ),
                              J = p(ae),
                              ne = 0;
                            ne < J;

                          )
                            X[ne] = ae[ne++];
                          for (; ne < ie; ) m(X, ne++);
                          return X;
                        },
                      }
                    );
                  },
                  2506: function (f, k, o) {
                    var s = o(9989),
                      h = o(690),
                      u = o(7578),
                      a = o(8700),
                      p = o(6310),
                      m = o(5649),
                      d = o(5565),
                      w = o(7120),
                      g = o(6522),
                      E = o(8494),
                      _ = o(9042)("splice"),
                      I = Math.max,
                      j = Math.min;
                    s(
                      { target: "Array", proto: !0, forced: !_ },
                      {
                        splice: function (N, C) {
                          var T,
                            M,
                            Z,
                            W,
                            B,
                            $,
                            V = h(this),
                            X = p(V),
                            J = u(N, X),
                            ne = arguments.length;
                          for (
                            ne === 0
                              ? (T = M = 0)
                              : ne === 1
                              ? ((T = 0), (M = X - J))
                              : ((T = ne - 2), (M = j(I(a(C), 0), X - J))),
                              d(X + T - M),
                              Z = w(V, M),
                              W = 0;
                            W < M;
                            W++
                          )
                            (B = J + W) in V && g(Z, W, V[B]);
                          if (((Z.length = M), T < M)) {
                            for (W = J; W < X - M; W++)
                              ($ = W + T),
                                (B = W + M) in V ? (V[$] = V[B]) : E(V, $);
                            for (W = X; W > X - M + T; W--) E(V, W - 1);
                          } else if (T > M)
                            for (W = X - M; W > J; W--)
                              ($ = W + T - 1),
                                (B = W + M - 1) in V ? (V[$] = V[B]) : E(V, $);
                          for (W = 0; W < T; W++) V[W + J] = arguments[W + 2];
                          return m(V, X - M + T), Z;
                        },
                      }
                    );
                  },
                  9903: function (f, k, o) {
                    var s = o(6812),
                      h = o(1880),
                      u = o(1797),
                      a = o(4201)("toPrimitive"),
                      p = Date.prototype;
                    s(p, a) || h(p, a, u);
                  },
                  4284: function (f, k, o) {
                    var s = o(7697),
                      h = o(1236).EXISTS,
                      u = o(8844),
                      a = o(2148),
                      p = Function.prototype,
                      m = u(p.toString),
                      d =
                        /function\b(?:\s|\/\*[\S\s]*?\*\/|\/\/[^\n\r]*[\n\r]+)*([^\s(/]*)/,
                      w = u(d.exec);
                    s &&
                      !h &&
                      a(p, "name", {
                        configurable: !0,
                        get: function () {
                          try {
                            return w(d, m(this))[1];
                          } catch {
                            return "";
                          }
                        },
                      });
                  },
                  8324: function (f, k, o) {
                    var s = o(9989),
                      h = o(6058),
                      u = o(1735),
                      a = o(2615),
                      p = o(8844),
                      m = o(3689),
                      d = o(9985),
                      w = o(734),
                      g = o(6004),
                      E = o(2643),
                      _ = o(146),
                      I = String,
                      j = h("JSON", "stringify"),
                      N = p(/./.exec),
                      C = p("".charAt),
                      T = p("".charCodeAt),
                      M = p("".replace),
                      Z = p((1).toString),
                      W = /[\uD800-\uDFFF]/g,
                      B = /^[\uD800-\uDBFF]$/,
                      $ = /^[\uDC00-\uDFFF]$/,
                      V =
                        !_ ||
                        m(function () {
                          var ae = h("Symbol")("stringify detection");
                          return (
                            j([ae]) !== "[null]" ||
                            j({ a: ae }) !== "{}" ||
                            j(Object(ae)) !== "{}"
                          );
                        }),
                      X = m(function () {
                        return (
                          j("\uDF06\uD834") !== '"\\udf06\\ud834"' ||
                          j("\uDEAD") !== '"\\udead"'
                        );
                      }),
                      J = function (ae, ie) {
                        var z = g(arguments),
                          L = E(ie);
                        if (d(L) || (ae !== void 0 && !w(ae)))
                          return (
                            (z[1] = function (U, v) {
                              if ((d(L) && (v = a(L, this, I(U), v)), !w(v)))
                                return v;
                            }),
                            u(j, null, z)
                          );
                      },
                      ne = function (ae, ie, z) {
                        var L = C(z, ie - 1),
                          U = C(z, ie + 1);
                        return (N(B, ae) && !N($, U)) || (N($, ae) && !N(B, L))
                          ? "\\u" + Z(T(ae, 0), 16)
                          : ae;
                      };
                    j &&
                      s(
                        { target: "JSON", stat: !0, arity: 3, forced: V || X },
                        {
                          stringify: function (ae, ie, z) {
                            var L = g(arguments),
                              U = u(V ? J : j, null, L);
                            return X && typeof U == "string" ? M(U, W, ne) : U;
                          },
                        }
                      );
                  },
                  9288: function (f, k, o) {
                    var s = o(9989),
                      h = o(3931),
                      u = o(7697),
                      a = o(9037),
                      p = o(496),
                      m = o(8844),
                      d = o(5266),
                      w = o(6812),
                      g = o(3457),
                      E = o(3622),
                      _ = o(734),
                      I = o(8732),
                      j = o(3689),
                      N = o(2741).f,
                      C = o(2474).f,
                      T = o(2560).f,
                      M = o(3648),
                      Z = o(1435).trim,
                      W = "Number",
                      B = a[W],
                      $ = p[W],
                      V = B.prototype,
                      X = a.TypeError,
                      J = m("".slice),
                      ne = m("".charCodeAt),
                      ae = function (U) {
                        var v,
                          S,
                          P,
                          O,
                          D,
                          G,
                          H,
                          A,
                          K = I(U, "number");
                        if (_(K))
                          throw new X(
                            "Cannot convert a Symbol value to a number"
                          );
                        if (typeof K == "string" && K.length > 2) {
                          if (((K = Z(K)), (v = ne(K, 0)) === 43 || v === 45)) {
                            if ((S = ne(K, 2)) === 88 || S === 120) return NaN;
                          } else if (v === 48) {
                            switch (ne(K, 1)) {
                              case 66:
                              case 98:
                                (P = 2), (O = 49);
                                break;
                              case 79:
                              case 111:
                                (P = 8), (O = 55);
                                break;
                              default:
                                return +K;
                            }
                            for (G = (D = J(K, 2)).length, H = 0; H < G; H++)
                              if ((A = ne(D, H)) < 48 || A > O) return NaN;
                            return parseInt(D, P);
                          }
                        }
                        return +K;
                      },
                      ie = d(W, !B(" 0o1") || !B("0b1") || B("+0x1")),
                      z = function (U) {
                        var v,
                          S =
                            arguments.length < 1
                              ? 0
                              : B(
                                  (function (P) {
                                    var O = I(P, "number");
                                    return typeof O == "bigint" ? O : ae(O);
                                  })(U)
                                );
                        return E(V, (v = this)) &&
                          j(function () {
                            M(v);
                          })
                          ? g(Object(S), this, z)
                          : S;
                      };
                    (z.prototype = V),
                      ie && !h && (V.constructor = z),
                      s(
                        { global: !0, constructor: !0, wrap: !0, forced: ie },
                        { Number: z }
                      );
                    var L = function (U, v) {
                      for (
                        var S,
                          P = u
                            ? N(v)
                            : "MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,fromString,range".split(
                                ","
                              ),
                          O = 0;
                        P.length > O;
                        O++
                      )
                        w(v, (S = P[O])) && !w(U, S) && T(U, S, C(v, S));
                    };
                    h && $ && L(p[W], $), (ie || h) && L(p[W], B);
                  },
                  5765: function (f, k, o) {
                    o(9989)(
                      { target: "Number", stat: !0 },
                      { isInteger: o(1973) }
                    );
                  },
                  429: function (f, k, o) {
                    var s = o(9989),
                      h = o(5394);
                    s(
                      {
                        target: "Object",
                        stat: !0,
                        arity: 2,
                        forced: Object.assign !== h,
                      },
                      { assign: h }
                    );
                  },
                  3994: function (f, k, o) {
                    var s = o(9989),
                      h = o(7697),
                      u = o(600),
                      a = o(509),
                      p = o(690),
                      m = o(2560);
                    h &&
                      s(
                        { target: "Object", proto: !0, forced: u },
                        {
                          __defineGetter__: function (d, w) {
                            m.f(p(this), d, {
                              get: a(w),
                              enumerable: !0,
                              configurable: !0,
                            });
                          },
                        }
                      );
                  },
                  1919: function (f, k, o) {
                    var s = o(9989),
                      h = o(3689),
                      u = o(5290),
                      a = o(2474).f,
                      p = o(7697);
                    s(
                      {
                        target: "Object",
                        stat: !0,
                        forced:
                          !p ||
                          h(function () {
                            a(1);
                          }),
                        sham: !p,
                      },
                      {
                        getOwnPropertyDescriptor: function (m, d) {
                          return a(u(m), d);
                        },
                      }
                    );
                  },
                  9474: function (f, k, o) {
                    var s = o(9989),
                      h = o(7697),
                      u = o(9152),
                      a = o(5290),
                      p = o(2474),
                      m = o(6522);
                    s(
                      { target: "Object", stat: !0, sham: !h },
                      {
                        getOwnPropertyDescriptors: function (d) {
                          for (
                            var w,
                              g,
                              E = a(d),
                              _ = p.f,
                              I = u(E),
                              j = {},
                              N = 0;
                            I.length > N;

                          )
                            (g = _(E, (w = I[N++]))) !== void 0 && m(j, w, g);
                          return j;
                        },
                      }
                    );
                  },
                  9997: function (f, k, o) {
                    var s = o(9989),
                      h = o(3689),
                      u = o(6062).f;
                    s(
                      {
                        target: "Object",
                        stat: !0,
                        forced: h(function () {
                          return !Object.getOwnPropertyNames(1);
                        }),
                      },
                      { getOwnPropertyNames: u }
                    );
                  },
                  9434: function (f, k, o) {
                    var s = o(9989),
                      h = o(146),
                      u = o(3689),
                      a = o(7518),
                      p = o(690);
                    s(
                      {
                        target: "Object",
                        stat: !0,
                        forced:
                          !h ||
                          u(function () {
                            a.f(1);
                          }),
                      },
                      {
                        getOwnPropertySymbols: function (m) {
                          var d = a.f;
                          return d ? d(p(m)) : [];
                        },
                      }
                    );
                  },
                  9358: function (f, k, o) {
                    var s = o(9989),
                      h = o(690),
                      u = o(300);
                    s(
                      {
                        target: "Object",
                        stat: !0,
                        forced: o(3689)(function () {
                          u(1);
                        }),
                      },
                      {
                        keys: function (a) {
                          return u(h(a));
                        },
                      }
                    );
                  },
                  228: function (f, k, o) {
                    var s = o(3043),
                      h = o(1880),
                      u = o(5073);
                    s || h(Object.prototype, "toString", u, { unsafe: !0 });
                  },
                  2003: function (f, k, o) {
                    var s = o(7697),
                      h = o(9037),
                      u = o(8844),
                      a = o(5266),
                      p = o(3457),
                      m = o(5773),
                      d = o(5391),
                      w = o(2741).f,
                      g = o(3622),
                      E = o(1245),
                      _ = o(4327),
                      I = o(3477),
                      j = o(7901),
                      N = o(8055),
                      C = o(1880),
                      T = o(3689),
                      M = o(6812),
                      Z = o(618).enforce,
                      W = o(4241),
                      B = o(4201),
                      $ = o(2100),
                      V = o(6422),
                      X = B("match"),
                      J = h.RegExp,
                      ne = J.prototype,
                      ae = h.SyntaxError,
                      ie = u(ne.exec),
                      z = u("".charAt),
                      L = u("".replace),
                      U = u("".indexOf),
                      v = u("".slice),
                      S = /^\?<[^\s\d!#%&*+<=>@^][^\s!#%&*+<=>@^]*>/,
                      P = /a/g,
                      O = /a/g,
                      D = new J(P) !== P,
                      G = j.MISSED_STICKY,
                      H = j.UNSUPPORTED_Y;
                    if (
                      a(
                        "RegExp",
                        s &&
                          (!D ||
                            G ||
                            $ ||
                            V ||
                            T(function () {
                              return (
                                (O[X] = !1),
                                J(P) !== P ||
                                  J(O) === O ||
                                  String(J(P, "i")) !== "/a/i"
                              );
                            }))
                      )
                    ) {
                      for (
                        var A = function (Q, Y) {
                            var re,
                              q,
                              se,
                              me,
                              je,
                              Se,
                              De = g(ne, this),
                              _e = E(Q),
                              fn = Y === void 0,
                              Ee = [],
                              Ct = Q;
                            if (!De && _e && fn && Q.constructor === A)
                              return Q;
                            if (
                              ((_e || g(ne, Q)) &&
                                ((Q = Q.source), fn && (Y = I(Ct))),
                              (Q = Q === void 0 ? "" : _(Q)),
                              (Y = Y === void 0 ? "" : _(Y)),
                              (Ct = Q),
                              $ &&
                                ("dotAll" in P) &&
                                (q = !!Y && U(Y, "s") > -1) &&
                                (Y = L(Y, /s/g, "")),
                              (re = Y),
                              G &&
                                ("sticky" in P) &&
                                (se = !!Y && U(Y, "y") > -1) &&
                                H &&
                                (Y = L(Y, /y/g, "")),
                              V &&
                                ((me = (function (Ne) {
                                  for (
                                    var ce,
                                      dn = Ne.length,
                                      We = 0,
                                      mt = "",
                                      vt = [],
                                      _n = d(null),
                                      $t = !1,
                                      Ht = !1,
                                      Nn = 0,
                                      It = "";
                                    We <= dn;
                                    We++
                                  ) {
                                    if ((ce = z(Ne, We)) === "\\")
                                      ce += z(Ne, ++We);
                                    else if (ce === "]") $t = !1;
                                    else if (!$t)
                                      switch (!0) {
                                        case ce === "[":
                                          $t = !0;
                                          break;
                                        case ce === "(":
                                          ie(S, v(Ne, We + 1)) &&
                                            ((We += 2), (Ht = !0)),
                                            (mt += ce),
                                            Nn++;
                                          continue;
                                        case ce === ">" && Ht:
                                          if (It === "" || M(_n, It))
                                            throw new ae(
                                              "Invalid capture group name"
                                            );
                                          (_n[It] = !0),
                                            (vt[vt.length] = [It, Nn]),
                                            (Ht = !1),
                                            (It = "");
                                          continue;
                                      }
                                    Ht ? (It += ce) : (mt += ce);
                                  }
                                  return [mt, vt];
                                })(Q)),
                                (Q = me[0]),
                                (Ee = me[1])),
                              (je = p(J(Q, Y), De ? this : ne, A)),
                              (q || se || Ee.length) &&
                                ((Se = Z(je)),
                                q &&
                                  ((Se.dotAll = !0),
                                  (Se.raw = A(
                                    (function (Ne) {
                                      for (
                                        var ce,
                                          dn = Ne.length,
                                          We = 0,
                                          mt = "",
                                          vt = !1;
                                        We <= dn;
                                        We++
                                      )
                                        (ce = z(Ne, We)) !== "\\"
                                          ? vt || ce !== "."
                                            ? (ce === "["
                                                ? (vt = !0)
                                                : ce === "]" && (vt = !1),
                                              (mt += ce))
                                            : (mt += "[\\s\\S]")
                                          : (mt += ce + z(Ne, ++We));
                                      return mt;
                                    })(Q),
                                    re
                                  ))),
                                se && (Se.sticky = !0),
                                Ee.length && (Se.groups = Ee)),
                              Q !== Ct)
                            )
                              try {
                                m(je, "source", Ct === "" ? "(?:)" : Ct);
                              } catch {}
                            return je;
                          },
                          K = w(J),
                          oe = 0;
                        K.length > oe;

                      )
                        N(A, J, K[oe++]);
                      (ne.constructor = A),
                        (A.prototype = ne),
                        C(h, "RegExp", A, { constructor: !0 });
                    }
                    W("RegExp");
                  },
                  4043: function (f, k, o) {
                    var s = o(9989),
                      h = o(6308);
                    s(
                      { target: "RegExp", proto: !0, forced: /./.exec !== h },
                      { exec: h }
                    );
                  },
                  2826: function (f, k, o) {
                    var s = o(1236).PROPER,
                      h = o(1880),
                      u = o(5027),
                      a = o(4327),
                      p = o(3689),
                      m = o(3477),
                      d = "toString",
                      w = RegExp.prototype,
                      g = w[d],
                      E = p(function () {
                        return g.call({ source: "a", flags: "b" }) !== "/a/b";
                      }),
                      _ = s && g.name !== d;
                    (E || _) &&
                      h(
                        w,
                        d,
                        function () {
                          var I = u(this);
                          return "/" + a(I.source) + "/" + a(m(I));
                        },
                        { unsafe: !0 }
                      );
                  },
                  3843: function (f, k, o) {
                    var s = o(9989),
                      h = o(8844),
                      u = o(2124),
                      a = o(4684),
                      p = o(4327),
                      m = o(7413),
                      d = h("".indexOf);
                    s(
                      { target: "String", proto: !0, forced: !m("includes") },
                      {
                        includes: function (w) {
                          return !!~d(
                            p(a(this)),
                            p(u(w)),
                            arguments.length > 1 ? arguments[1] : void 0
                          );
                        },
                      }
                    );
                  },
                  1694: function (f, k, o) {
                    var s = o(730).charAt,
                      h = o(4327),
                      u = o(618),
                      a = o(1934),
                      p = o(7807),
                      m = "String Iterator",
                      d = u.set,
                      w = u.getterFor(m);
                    a(
                      String,
                      "String",
                      function (g) {
                        d(this, { type: m, string: h(g), index: 0 });
                      },
                      function () {
                        var g,
                          E = w(this),
                          _ = E.string,
                          I = E.index;
                        return I >= _.length
                          ? p(void 0, !0)
                          : ((g = s(_, I)), (E.index += g.length), p(g, !1));
                      }
                    );
                  },
                  9866: function (f, k, o) {
                    var s = o(9989),
                      h = o(2615),
                      u = o(6576),
                      a = o(974),
                      p = o(7807),
                      m = o(4684),
                      d = o(3126),
                      w = o(4327),
                      g = o(5027),
                      E = o(981),
                      _ = o(6648),
                      I = o(1245),
                      j = o(3477),
                      N = o(4849),
                      C = o(1880),
                      T = o(3689),
                      M = o(4201),
                      Z = o(6373),
                      W = o(1514),
                      B = o(6100),
                      $ = o(618),
                      V = o(3931),
                      X = M("matchAll"),
                      J = "RegExp String",
                      ne = J + " Iterator",
                      ae = $.set,
                      ie = $.getterFor(ne),
                      z = RegExp.prototype,
                      L = TypeError,
                      U = u("".indexOf),
                      v = u("".matchAll),
                      S =
                        !!v &&
                        !T(function () {
                          v("a", /./);
                        }),
                      P = a(
                        function (D, G, H, A) {
                          ae(this, {
                            type: ne,
                            regexp: D,
                            string: G,
                            global: H,
                            unicode: A,
                            done: !1,
                          });
                        },
                        J,
                        function () {
                          var D = ie(this);
                          if (D.done) return p(void 0, !0);
                          var G = D.regexp,
                            H = D.string,
                            A = B(G, H);
                          return A === null
                            ? ((D.done = !0), p(void 0, !0))
                            : D.global
                            ? (w(A[0]) === "" &&
                                (G.lastIndex = W(H, d(G.lastIndex), D.unicode)),
                              p(A, !1))
                            : ((D.done = !0), p(A, !1));
                        }
                      ),
                      O = function (D) {
                        var G,
                          H,
                          A,
                          K = g(this),
                          oe = w(D),
                          Q = Z(K, RegExp),
                          Y = w(j(K));
                        return (
                          (G = new Q(Q === RegExp ? K.source : K, Y)),
                          (H = !!~U(Y, "g")),
                          (A = !!~U(Y, "u")),
                          (G.lastIndex = d(K.lastIndex)),
                          new P(G, oe, H, A)
                        );
                      };
                    s(
                      { target: "String", proto: !0, forced: S },
                      {
                        matchAll: function (D) {
                          var G,
                            H,
                            A,
                            K,
                            oe = m(this);
                          if (E(D)) {
                            if (S) return v(oe, D);
                          } else {
                            if (I(D) && ((G = w(m(j(D)))), !~U(G, "g")))
                              throw new L(
                                "`.matchAll` does not allow non-global regexes"
                              );
                            if (S) return v(oe, D);
                            if (
                              ((A = N(D, X)) === void 0 &&
                                V &&
                                _(D) === "RegExp" &&
                                (A = O),
                              A)
                            )
                              return h(A, D, oe);
                          }
                          return (
                            (H = w(oe)),
                            (K = new RegExp(D, "g")),
                            V ? h(O, K, H) : K[X](H)
                          );
                        },
                      }
                    ),
                      V || X in z || C(z, X, O);
                  },
                  2462: function (f, k, o) {
                    var s = o(2615),
                      h = o(8678),
                      u = o(5027),
                      a = o(981),
                      p = o(3126),
                      m = o(4327),
                      d = o(4684),
                      w = o(4849),
                      g = o(1514),
                      E = o(6100);
                    h("match", function (_, I, j) {
                      return [
                        function (N) {
                          var C = d(this),
                            T = a(N) ? void 0 : w(N, _);
                          return T ? s(T, N, C) : new RegExp(N)[_](m(C));
                        },
                        function (N) {
                          var C = u(this),
                            T = m(N),
                            M = j(I, C, T);
                          if (M.done) return M.value;
                          if (!C.global) return E(C, T);
                          var Z = C.unicode;
                          C.lastIndex = 0;
                          for (var W, B = [], $ = 0; (W = E(C, T)) !== null; ) {
                            var V = m(W[0]);
                            (B[$] = V),
                              V === "" &&
                                (C.lastIndex = g(T, p(C.lastIndex), Z)),
                              $++;
                          }
                          return $ === 0 ? null : B;
                        },
                      ];
                    });
                  },
                  7267: function (f, k, o) {
                    var s = o(1735),
                      h = o(2615),
                      u = o(8844),
                      a = o(8678),
                      p = o(3689),
                      m = o(5027),
                      d = o(9985),
                      w = o(981),
                      g = o(8700),
                      E = o(3126),
                      _ = o(4327),
                      I = o(4684),
                      j = o(1514),
                      N = o(4849),
                      C = o(7017),
                      T = o(6100),
                      M = o(4201)("replace"),
                      Z = Math.max,
                      W = Math.min,
                      B = u([].concat),
                      $ = u([].push),
                      V = u("".indexOf),
                      X = u("".slice),
                      J = "a".replace(/./, "$0") === "$0",
                      ne = !!/./[M] && /./[M]("a", "$0") === "";
                    a(
                      "replace",
                      function (ae, ie, z) {
                        var L = ne ? "$" : "$0";
                        return [
                          function (U, v) {
                            var S = I(this),
                              P = w(U) ? void 0 : N(U, M);
                            return P ? h(P, U, S, v) : h(ie, _(S), U, v);
                          },
                          function (U, v) {
                            var S = m(this),
                              P = _(U);
                            if (
                              typeof v == "string" &&
                              V(v, L) === -1 &&
                              V(v, "$<") === -1
                            ) {
                              var O = z(ie, S, P, v);
                              if (O.done) return O.value;
                            }
                            var D = d(v);
                            D || (v = _(v));
                            var G,
                              H = S.global;
                            H && ((G = S.unicode), (S.lastIndex = 0));
                            for (
                              var A, K = [];
                              (A = T(S, P)) !== null && ($(K, A), H);

                            )
                              _(A[0]) === "" &&
                                (S.lastIndex = j(P, E(S.lastIndex), G));
                            for (
                              var oe, Q = "", Y = 0, re = 0;
                              re < K.length;
                              re++
                            ) {
                              for (
                                var q,
                                  se = _((A = K[re])[0]),
                                  me = Z(W(g(A.index), P.length), 0),
                                  je = [],
                                  Se = 1;
                                Se < A.length;
                                Se++
                              )
                                $(
                                  je,
                                  (oe = A[Se]) === void 0 ? oe : String(oe)
                                );
                              var De = A.groups;
                              if (D) {
                                var _e = B([se], je, me, P);
                                De !== void 0 && $(_e, De),
                                  (q = _(s(v, void 0, _e)));
                              } else q = C(se, P, me, je, De, v);
                              me >= Y &&
                                ((Q += X(P, Y, me) + q), (Y = me + se.length));
                            }
                            return Q + X(P, Y);
                          },
                        ];
                      },
                      !!p(function () {
                        var ae = /./;
                        return (
                          (ae.exec = function () {
                            var ie = [];
                            return (ie.groups = { a: "7" }), ie;
                          }),
                          "".replace(ae, "$<a>") !== "7"
                        );
                      }) ||
                        !J ||
                        ne
                    );
                  },
                  9873: function (f, k, o) {
                    var s = o(1735),
                      h = o(2615),
                      u = o(8844),
                      a = o(8678),
                      p = o(5027),
                      m = o(981),
                      d = o(1245),
                      w = o(4684),
                      g = o(6373),
                      E = o(1514),
                      _ = o(3126),
                      I = o(4327),
                      j = o(4849),
                      N = o(6004),
                      C = o(6100),
                      T = o(6308),
                      M = o(7901),
                      Z = o(3689),
                      W = M.UNSUPPORTED_Y,
                      B = 4294967295,
                      $ = Math.min,
                      V = [].push,
                      X = u(/./.exec),
                      J = u(V),
                      ne = u("".slice),
                      ae = !Z(function () {
                        var ie = /(?:)/,
                          z = ie.exec;
                        ie.exec = function () {
                          return z.apply(this, arguments);
                        };
                        var L = "ab".split(ie);
                        return L.length !== 2 || L[0] !== "a" || L[1] !== "b";
                      });
                    a(
                      "split",
                      function (ie, z, L) {
                        var U;
                        return (
                          (U =
                            "abbc".split(/(b)*/)[1] === "c" ||
                            "test".split(/(?:)/, -1).length !== 4 ||
                            "ab".split(/(?:ab)*/).length !== 2 ||
                            ".".split(/(.?)(.?)/).length !== 4 ||
                            ".".split(/()()/).length > 1 ||
                            "".split(/.?/).length
                              ? function (v, S) {
                                  var P = I(w(this)),
                                    O = S === void 0 ? B : S >>> 0;
                                  if (O === 0) return [];
                                  if (v === void 0) return [P];
                                  if (!d(v)) return h(z, P, v, O);
                                  for (
                                    var D,
                                      G,
                                      H,
                                      A = [],
                                      K =
                                        (v.ignoreCase ? "i" : "") +
                                        (v.multiline ? "m" : "") +
                                        (v.unicode ? "u" : "") +
                                        (v.sticky ? "y" : ""),
                                      oe = 0,
                                      Q = new RegExp(v.source, K + "g");
                                    (D = h(T, Q, P)) &&
                                    !(
                                      (G = Q.lastIndex) > oe &&
                                      (J(A, ne(P, oe, D.index)),
                                      D.length > 1 &&
                                        D.index < P.length &&
                                        s(V, A, N(D, 1)),
                                      (H = D[0].length),
                                      (oe = G),
                                      A.length >= O)
                                    );

                                  )
                                    Q.lastIndex === D.index && Q.lastIndex++;
                                  return (
                                    oe === P.length
                                      ? (!H && X(Q, "")) || J(A, "")
                                      : J(A, ne(P, oe)),
                                    A.length > O ? N(A, 0, O) : A
                                  );
                                }
                              : "0".split(void 0, 0).length
                              ? function (v, S) {
                                  return v === void 0 && S === 0
                                    ? []
                                    : h(z, this, v, S);
                                }
                              : z),
                          [
                            function (v, S) {
                              var P = w(this),
                                O = m(v) ? void 0 : j(v, ie);
                              return O ? h(O, v, P, S) : h(U, I(P), v, S);
                            },
                            function (v, S) {
                              var P = p(this),
                                O = I(v),
                                D = L(U, P, O, S, U !== z);
                              if (D.done) return D.value;
                              var G = g(P, RegExp),
                                H = P.unicode,
                                A =
                                  (P.ignoreCase ? "i" : "") +
                                  (P.multiline ? "m" : "") +
                                  (P.unicode ? "u" : "") +
                                  (W ? "g" : "y"),
                                K = new G(W ? "^(?:" + P.source + ")" : P, A),
                                oe = S === void 0 ? B : S >>> 0;
                              if (oe === 0) return [];
                              if (O.length === 0)
                                return C(K, O) === null ? [O] : [];
                              for (var Q = 0, Y = 0, re = []; Y < O.length; ) {
                                K.lastIndex = W ? 0 : Y;
                                var q,
                                  se = C(K, W ? ne(O, Y) : O);
                                if (
                                  se === null ||
                                  (q = $(
                                    _(K.lastIndex + (W ? Y : 0)),
                                    O.length
                                  )) === Q
                                )
                                  Y = E(O, Y, H);
                                else {
                                  if ((J(re, ne(O, Q, Y)), re.length === oe))
                                    return re;
                                  for (var me = 1; me <= se.length - 1; me++)
                                    if ((J(re, se[me]), re.length === oe))
                                      return re;
                                  Y = Q = q;
                                }
                              }
                              return J(re, ne(O, Q)), re;
                            },
                          ]
                        );
                      },
                      !ae,
                      W
                    );
                  },
                  8436: function (f, k, o) {
                    var s = o(9989),
                      h = o(1435).trim;
                    s(
                      { target: "String", proto: !0, forced: o(5984)("trim") },
                      {
                        trim: function () {
                          return h(this);
                        },
                      }
                    );
                  },
                  7855: function (f, k, o) {
                    var s = o(9989),
                      h = o(9037),
                      u = o(2615),
                      a = o(8844),
                      p = o(3931),
                      m = o(7697),
                      d = o(146),
                      w = o(3689),
                      g = o(6812),
                      E = o(3622),
                      _ = o(5027),
                      I = o(5290),
                      j = o(8360),
                      N = o(4327),
                      C = o(5684),
                      T = o(5391),
                      M = o(300),
                      Z = o(2741),
                      W = o(6062),
                      B = o(7518),
                      $ = o(2474),
                      V = o(2560),
                      X = o(8920),
                      J = o(9556),
                      ne = o(1880),
                      ae = o(2148),
                      ie = o(3430),
                      z = o(2713),
                      L = o(7248),
                      U = o(4630),
                      v = o(4201),
                      S = o(6145),
                      P = o(5405),
                      O = o(3032),
                      D = o(5997),
                      G = o(618),
                      H = o(2960).forEach,
                      A = z("hidden"),
                      K = "Symbol",
                      oe = "prototype",
                      Q = G.set,
                      Y = G.getterFor(K),
                      re = Object[oe],
                      q = h.Symbol,
                      se = q && q[oe],
                      me = h.RangeError,
                      je = h.TypeError,
                      Se = h.QObject,
                      De = $.f,
                      _e = V.f,
                      fn = W.f,
                      Ee = J.f,
                      Ct = a([].push),
                      Ne = ie("symbols"),
                      ce = ie("op-symbols"),
                      dn = ie("wks"),
                      We = !Se || !Se[oe] || !Se[oe].findChild,
                      mt = function (fe, de, he) {
                        var ge = De(re, de);
                        ge && delete re[de],
                          _e(fe, de, he),
                          ge && fe !== re && _e(re, de, ge);
                      },
                      vt =
                        m &&
                        w(function () {
                          return (
                            T(
                              _e({}, "a", {
                                get: function () {
                                  return _e(this, "a", { value: 7 }).a;
                                },
                              })
                            ).a !== 7
                          );
                        })
                          ? mt
                          : _e,
                      _n = function (fe, de) {
                        var he = (Ne[fe] = T(se));
                        return (
                          Q(he, { type: K, tag: fe, description: de }),
                          m || (he.description = de),
                          he
                        );
                      },
                      $t = function (fe, de, he) {
                        fe === re && $t(ce, de, he), _(fe);
                        var ge = j(de);
                        return (
                          _(he),
                          g(Ne, ge)
                            ? (he.enumerable
                                ? (g(fe, A) && fe[A][ge] && (fe[A][ge] = !1),
                                  (he = T(he, { enumerable: C(0, !1) })))
                                : (g(fe, A) || _e(fe, A, C(1, T(null))),
                                  (fe[A][ge] = !0)),
                              vt(fe, ge, he))
                            : _e(fe, ge, he)
                        );
                      },
                      Ht = function (fe, de) {
                        _(fe);
                        var he = I(de),
                          ge = M(he).concat(Ku(he));
                        return (
                          H(ge, function (ze) {
                            (m && !u(Nn, he, ze)) || $t(fe, ze, he[ze]);
                          }),
                          fe
                        );
                      },
                      Nn = function (fe) {
                        var de = j(fe),
                          he = u(Ee, this, de);
                        return (
                          !(this === re && g(Ne, de) && !g(ce, de)) &&
                          (!(
                            he ||
                            !g(this, de) ||
                            !g(Ne, de) ||
                            (g(this, A) && this[A][de])
                          ) ||
                            he)
                        );
                      },
                      It = function (fe, de) {
                        var he = I(fe),
                          ge = j(de);
                        if (he !== re || !g(Ne, ge) || g(ce, ge)) {
                          var ze = De(he, ge);
                          return (
                            !ze ||
                              !g(Ne, ge) ||
                              (g(he, A) && he[A][ge]) ||
                              (ze.enumerable = !0),
                            ze
                          );
                        }
                      },
                      Hu = function (fe) {
                        var de = fn(I(fe)),
                          he = [];
                        return (
                          H(de, function (ge) {
                            g(Ne, ge) || g(L, ge) || Ct(he, ge);
                          }),
                          he
                        );
                      },
                      Ku = function (fe) {
                        var de = fe === re,
                          he = fn(de ? ce : I(fe)),
                          ge = [];
                        return (
                          H(he, function (ze) {
                            !g(Ne, ze) || (de && !g(re, ze)) || Ct(ge, Ne[ze]);
                          }),
                          ge
                        );
                      };
                    d ||
                      ((q = function () {
                        if (E(se, this))
                          throw new je("Symbol is not a constructor");
                        var fe =
                            arguments.length && arguments[0] !== void 0
                              ? N(arguments[0])
                              : void 0,
                          de = U(fe),
                          he = function (ge) {
                            var ze = this === void 0 ? h : this;
                            ze === re && u(he, ce, ge),
                              g(ze, A) && g(ze[A], de) && (ze[A][de] = !1);
                            var Vu = C(1, ge);
                            try {
                              vt(ze, de, Vu);
                            } catch (Xu) {
                              if (!(Xu instanceof me)) throw Xu;
                              mt(ze, de, Vu);
                            }
                          };
                        return (
                          m && We && vt(re, de, { configurable: !0, set: he }),
                          _n(de, fe)
                        );
                      }),
                      ne((se = q[oe]), "toString", function () {
                        return Y(this).tag;
                      }),
                      ne(q, "withoutSetter", function (fe) {
                        return _n(U(fe), fe);
                      }),
                      (J.f = Nn),
                      (V.f = $t),
                      (X.f = Ht),
                      ($.f = It),
                      (Z.f = W.f = Hu),
                      (B.f = Ku),
                      (S.f = function (fe) {
                        return _n(v(fe), fe);
                      }),
                      m &&
                        (ae(se, "description", {
                          configurable: !0,
                          get: function () {
                            return Y(this).description;
                          },
                        }),
                        p ||
                          ne(re, "propertyIsEnumerable", Nn, { unsafe: !0 }))),
                      s(
                        {
                          global: !0,
                          constructor: !0,
                          wrap: !0,
                          forced: !d,
                          sham: !d,
                        },
                        { Symbol: q }
                      ),
                      H(M(dn), function (fe) {
                        P(fe);
                      }),
                      s(
                        { target: K, stat: !0, forced: !d },
                        {
                          useSetter: function () {
                            We = !0;
                          },
                          useSimple: function () {
                            We = !1;
                          },
                        }
                      ),
                      s(
                        { target: "Object", stat: !0, forced: !d, sham: !m },
                        {
                          create: function (fe, de) {
                            return de === void 0 ? T(fe) : Ht(T(fe), de);
                          },
                          defineProperty: $t,
                          defineProperties: Ht,
                          getOwnPropertyDescriptor: It,
                        }
                      ),
                      s(
                        { target: "Object", stat: !0, forced: !d },
                        { getOwnPropertyNames: Hu }
                      ),
                      O(),
                      D(q, K),
                      (L[A] = !0);
                  },
                  6544: function (f, k, o) {
                    var s = o(9989),
                      h = o(7697),
                      u = o(9037),
                      a = o(8844),
                      p = o(6812),
                      m = o(9985),
                      d = o(3622),
                      w = o(4327),
                      g = o(2148),
                      E = o(8758),
                      _ = u.Symbol,
                      I = _ && _.prototype;
                    if (
                      h &&
                      m(_) &&
                      (!("description" in I) || _().description !== void 0)
                    ) {
                      var j = {},
                        N = function () {
                          var $ =
                              arguments.length < 1 || arguments[0] === void 0
                                ? void 0
                                : w(arguments[0]),
                            V = d(I, this)
                              ? new _($)
                              : $ === void 0
                              ? _()
                              : _($);
                          return $ === "" && (j[V] = !0), V;
                        };
                      E(N, _), (N.prototype = I), (I.constructor = N);
                      var C =
                          String(_("description detection")) ===
                          "Symbol(description detection)",
                        T = a(I.valueOf),
                        M = a(I.toString),
                        Z = /^Symbol\((.*)\)[^)]+$/,
                        W = a("".replace),
                        B = a("".slice);
                      g(I, "description", {
                        configurable: !0,
                        get: function () {
                          var $ = T(this);
                          if (p(j, $)) return "";
                          var V = M($),
                            X = C ? B(V, 7, -1) : W(V, Z, "$1");
                          return X === "" ? void 0 : X;
                        },
                      }),
                        s(
                          { global: !0, constructor: !0, forced: !0 },
                          { Symbol: N }
                        );
                    }
                  },
                  3975: function (f, k, o) {
                    var s = o(9989),
                      h = o(6058),
                      u = o(6812),
                      a = o(4327),
                      p = o(3430),
                      m = o(6549),
                      d = p("string-to-symbol-registry"),
                      w = p("symbol-to-string-registry");
                    s(
                      { target: "Symbol", stat: !0, forced: !m },
                      {
                        for: function (g) {
                          var E = a(g);
                          if (u(d, E)) return d[E];
                          var _ = h("Symbol")(E);
                          return (d[E] = _), (w[_] = E), _;
                        },
                      }
                    );
                  },
                  4254: function (f, k, o) {
                    o(5405)("iterator");
                  },
                  9749: function (f, k, o) {
                    o(7855), o(3975), o(1445), o(8324), o(9434);
                  },
                  1445: function (f, k, o) {
                    var s = o(9989),
                      h = o(6812),
                      u = o(734),
                      a = o(3691),
                      p = o(3430),
                      m = o(6549),
                      d = p("symbol-to-string-registry");
                    s(
                      { target: "Symbol", stat: !0, forced: !m },
                      {
                        keyFor: function (w) {
                          if (!u(w))
                            throw new TypeError(a(w) + " is not a symbol");
                          if (h(d, w)) return d[w];
                        },
                      }
                    );
                  },
                  9373: function (f, k, o) {
                    var s = o(5405),
                      h = o(3032);
                    s("toPrimitive"), h();
                  },
                  9012: function (f, k, o) {
                    o(9866);
                  },
                  7522: function (f, k, o) {
                    var s = o(9037),
                      h = o(6338),
                      u = o(3265),
                      a = o(7612),
                      p = o(5773),
                      m = function (w) {
                        if (w && w.forEach !== a)
                          try {
                            p(w, "forEach", a);
                          } catch {
                            w.forEach = a;
                          }
                      };
                    for (var d in h) h[d] && m(s[d] && s[d].prototype);
                    m(u);
                  },
                  6265: function (f, k, o) {
                    var s = o(9037),
                      h = o(6338),
                      u = o(3265),
                      a = o(752),
                      p = o(5773),
                      m = o(5997),
                      d = o(4201)("iterator"),
                      w = a.values,
                      g = function (_, I) {
                        if (_) {
                          if (_[d] !== w)
                            try {
                              p(_, d, w);
                            } catch {
                              _[d] = w;
                            }
                          if ((m(_, I, !0), h[I])) {
                            for (var j in a)
                              if (_[j] !== a[j])
                                try {
                                  p(_, j, a[j]);
                                } catch {
                                  _[j] = a[j];
                                }
                          }
                        }
                      };
                    for (var E in h) g(s[E] && s[E].prototype, E);
                    g(u, "DOMTokenList");
                  },
                },
                b = {};
              function R(f) {
                var k = b[f];
                if (k !== void 0) return k.exports;
                var o = (b[f] = { exports: {} });
                return x[f].call(o.exports, o, o.exports, R), o.exports;
              }
              (R.d = function (f, k) {
                for (var o in k)
                  R.o(k, o) &&
                    !R.o(f, o) &&
                    Object.defineProperty(f, o, { enumerable: !0, get: k[o] });
              }),
                (R.g = (function () {
                  if (typeof globalThis == "object") return globalThis;
                  try {
                    return this || new Function("return this")();
                  } catch {
                    if (typeof window == "object") return window;
                  }
                })()),
                (R.o = function (f, k) {
                  return Object.prototype.hasOwnProperty.call(f, k);
                }),
                (R.r = function (f) {
                  typeof Symbol < "u" &&
                    Symbol.toStringTag &&
                    Object.defineProperty(f, Symbol.toStringTag, {
                      value: "Module",
                    }),
                    Object.defineProperty(f, "__esModule", { value: !0 });
                });
              var F = {};
              return (
                (function () {
                  function f(z) {
                    return (
                      (function (L) {
                        if (Array.isArray(L)) return o(L);
                      })(z) ||
                      (function (L) {
                        if (
                          (typeof Symbol < "u" && L[Symbol.iterator] != null) ||
                          L["@@iterator"] != null
                        )
                          return Array.from(L);
                      })(z) ||
                      k(z) ||
                      (function () {
                        throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
                      })()
                    );
                  }
                  function k(z, L) {
                    if (z) {
                      if (typeof z == "string") return o(z, L);
                      var U = Object.prototype.toString.call(z).slice(8, -1);
                      return (
                        U === "Object" &&
                          z.constructor &&
                          (U = z.constructor.name),
                        U === "Map" || U === "Set"
                          ? Array.from(z)
                          : U === "Arguments" ||
                            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(U)
                          ? o(z, L)
                          : void 0
                      );
                    }
                  }
                  function o(z, L) {
                    (L == null || L > z.length) && (L = z.length);
                    for (var U = 0, v = new Array(L); U < L; U++) v[U] = z[U];
                    return v;
                  }
                  function s(z) {
                    return (
                      (s =
                        typeof Symbol == "function" &&
                        typeof Symbol.iterator == "symbol"
                          ? function (L) {
                              return typeof L;
                            }
                          : function (L) {
                              return L &&
                                typeof Symbol == "function" &&
                                L.constructor === Symbol &&
                                L !== Symbol.prototype
                                ? "symbol"
                                : typeof L;
                            }),
                      s(z)
                    );
                  }
                  function h(z, L) {
                    for (var U = 0; U < L.length; U++) {
                      var v = L[U];
                      (v.enumerable = v.enumerable || !1),
                        (v.configurable = !0),
                        "value" in v && (v.writable = !0),
                        Object.defineProperty(z, a(v.key), v);
                    }
                  }
                  function u(z, L, U) {
                    return (
                      (L = a(L)) in z
                        ? Object.defineProperty(z, L, {
                            value: U,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0,
                          })
                        : (z[L] = U),
                      z
                    );
                  }
                  function a(z) {
                    var L = (function (U, v) {
                      if (s(U) != "object" || !U) return U;
                      var S = U[Symbol.toPrimitive];
                      if (S !== void 0) {
                        var P = S.call(U, v || "default");
                        if (s(P) != "object") return P;
                        throw new TypeError(
                          "@@toPrimitive must return a primitive value."
                        );
                      }
                      return (v === "string" ? String : Number)(U);
                    })(z, "string");
                    return s(L) == "symbol" ? L : String(L);
                  }
                  R.r(F),
                    R.d(F, {
                      SimpleKeyboard: function () {
                        return ae;
                      },
                      default: function () {
                        return ie;
                      },
                    }),
                    R(8436),
                    R(4043),
                    R(7267),
                    R(7195),
                    R(4284),
                    R(9873),
                    R(228),
                    R(2826),
                    R(2506),
                    R(6203),
                    R(3994),
                    R(9730),
                    typeof Element > "u" ||
                      "remove" in Element.prototype ||
                      (Element.prototype.remove = function () {
                        this.parentNode && this.parentNode.removeChild(this);
                      }),
                    typeof self < "u" &&
                      "document" in self &&
                      ((!("classList" in document.createElement("_")) ||
                        (document.createElementNS &&
                          !(
                            "classList" in
                            document.createElementNS(
                              "http://www.w3.org/2000/svg",
                              "g"
                            )
                          ))) &&
                        (function (z) {
                          if ("Element" in z) {
                            var L = "classList",
                              U = "prototype",
                              v = z.Element[U],
                              S = Object,
                              P =
                                String[U].trim ||
                                function () {
                                  return this.replace(/^\s+|\s+$/g, "");
                                },
                              O =
                                Array[U].indexOf ||
                                function (Q) {
                                  for (var Y = 0, re = this.length; Y < re; Y++)
                                    if (Y in this && this[Y] === Q) return Y;
                                  return -1;
                                },
                              D = function (Q, Y) {
                                (this.name = Q),
                                  (this.code = DOMException[Q]),
                                  (this.message = Y);
                              },
                              G = function (Q, Y) {
                                if (Y === "")
                                  throw new D(
                                    "SYNTAX_ERR",
                                    "The token must not be empty."
                                  );
                                if (/\s/.test(Y))
                                  throw new D(
                                    "INVALID_CHARACTER_ERR",
                                    "The token must not contain space characters."
                                  );
                                return O.call(Q, Y);
                              },
                              H = function (Q) {
                                for (
                                  var Y = P.call(Q.getAttribute("class") || ""),
                                    re = Y ? Y.split(/\s+/) : [],
                                    q = 0,
                                    se = re.length;
                                  q < se;
                                  q++
                                )
                                  this.push(re[q]);
                                this._updateClassName = function () {
                                  Q.setAttribute("class", this.toString());
                                };
                              },
                              A = (H[U] = []),
                              K = function () {
                                return new H(this);
                              };
                            if (
                              ((D[U] = Error[U]),
                              (A.item = function (Q) {
                                return this[Q] || null;
                              }),
                              (A.contains = function (Q) {
                                return ~G(this, Q + "");
                              }),
                              (A.add = function () {
                                var Q,
                                  Y = arguments,
                                  re = 0,
                                  q = Y.length,
                                  se = !1;
                                do
                                  ~G(this, (Q = Y[re] + "")) ||
                                    (this.push(Q), (se = !0));
                                while (++re < q);
                                se && this._updateClassName();
                              }),
                              (A.remove = function () {
                                var Q,
                                  Y,
                                  re = arguments,
                                  q = 0,
                                  se = re.length,
                                  me = !1;
                                do
                                  for (Y = G(this, (Q = re[q] + "")); ~Y; )
                                    this.splice(Y, 1),
                                      (me = !0),
                                      (Y = G(this, Q));
                                while (++q < se);
                                me && this._updateClassName();
                              }),
                              (A.toggle = function (Q, Y) {
                                var re = this.contains(Q),
                                  q = re
                                    ? Y !== !0 && "remove"
                                    : Y !== !1 && "add";
                                return (
                                  q && this[q](Q),
                                  Y === !0 || Y === !1 ? Y : !re
                                );
                              }),
                              (A.replace = function (Q, Y) {
                                var re = G(Q + "");
                                ~re &&
                                  (this.splice(re, 1, Y),
                                  this._updateClassName());
                              }),
                              (A.toString = function () {
                                return this.join(" ");
                              }),
                              S.defineProperty)
                            ) {
                              var oe = {
                                get: K,
                                enumerable: !0,
                                configurable: !0,
                              };
                              try {
                                S.defineProperty(v, L, oe);
                              } catch (Q) {
                                (Q.number !== void 0 &&
                                  Q.number !== -2146823252) ||
                                  ((oe.enumerable = !1),
                                  S.defineProperty(v, L, oe));
                              }
                            } else
                              S[U].__defineGetter__ && v.__defineGetter__(L, K);
                          }
                        })(self),
                      (function () {
                        var z = document.createElement("_");
                        if (
                          (z.classList.add("c1", "c2"),
                          !z.classList.contains("c2"))
                        ) {
                          var L = function (v) {
                            var S = DOMTokenList.prototype[v];
                            DOMTokenList.prototype[v] = function (P) {
                              var O,
                                D = arguments.length;
                              for (O = 0; O < D; O++)
                                (P = arguments[O]), S.call(this, P);
                            };
                          };
                          L("add"), L("remove");
                        }
                        if (
                          (z.classList.toggle("c3", !1),
                          z.classList.contains("c3"))
                        ) {
                          var U = DOMTokenList.prototype.toggle;
                          DOMTokenList.prototype.toggle = function (v, S) {
                            return 1 in arguments && !this.contains(v) == !S
                              ? S
                              : U.call(this, v);
                          };
                        }
                        "replace" in document.createElement("_").classList ||
                          (DOMTokenList.prototype.replace = function (v, S) {
                            var P = this.toString().split(" "),
                              O = P.indexOf(v + "");
                            ~O &&
                              ((P = P.slice(O)),
                              this.remove.apply(this, P),
                              this.add(S),
                              this.add.apply(this, P.slice(1)));
                          }),
                          (z = null);
                      })()),
                    R(8077),
                    R(4338),
                    R(9358),
                    R(2003),
                    R(9012),
                    R(5137),
                    R(6801),
                    R(3843),
                    R(7522),
                    R(429),
                    R(886),
                    R(7049),
                    R(1694),
                    R(9373),
                    R(9903),
                    R(9749),
                    R(6544),
                    R(9288),
                    R(1919),
                    R(9474),
                    R(4254),
                    R(752),
                    R(6265),
                    R(5765),
                    R(2462),
                    R(278),
                    R(9997);
                  var p = (function () {
                    function z(S) {
                      var P = S.getOptions,
                        O = S.getCaretPosition,
                        D = S.getCaretPositionEnd,
                        G = S.dispatch;
                      (function (H, A) {
                        if (!(H instanceof A))
                          throw new TypeError(
                            "Cannot call a class as a function"
                          );
                      })(this, z),
                        u(this, "getOptions", void 0),
                        u(this, "getCaretPosition", void 0),
                        u(this, "getCaretPositionEnd", void 0),
                        u(this, "dispatch", void 0),
                        u(this, "maxLengthReached", void 0),
                        u(this, "isStandardButton", function (H) {
                          return (
                            H && !(H[0] === "{" && H[H.length - 1] === "}")
                          );
                        }),
                        (this.getOptions = P),
                        (this.getCaretPosition = O),
                        (this.getCaretPositionEnd = D),
                        (this.dispatch = G),
                        z.bindMethods(z, this);
                    }
                    var L, U, v;
                    return (
                      (L = z),
                      (U = [
                        {
                          key: "getButtonType",
                          value: function (S) {
                            return S.includes("{") &&
                              S.includes("}") &&
                              S !== "{//}"
                              ? "functionBtn"
                              : "standardBtn";
                          },
                        },
                        {
                          key: "getButtonClass",
                          value: function (S) {
                            var P = this.getButtonType(S),
                              O = S.replace("{", "").replace("}", ""),
                              D = "";
                            return (
                              P !== "standardBtn" &&
                                (D = " hg-button-".concat(O)),
                              "hg-".concat(P).concat(D)
                            );
                          },
                        },
                        {
                          key: "getDefaultDiplay",
                          value: function () {
                            return {
                              "{bksp}": "backspace",
                              "{backspace}": "backspace",
                              "{enter}": "< enter",
                              "{shift}": "shift",
                              "{shiftleft}": "shift",
                              "{shiftright}": "shift",
                              "{alt}": "alt",
                              "{s}": "shift",
                              "{tab}": "tab",
                              "{lock}": "caps",
                              "{capslock}": "caps",
                              "{accept}": "Submit",
                              "{space}": " ",
                              "{//}": " ",
                              "{esc}": "esc",
                              "{escape}": "esc",
                              "{f1}": "f1",
                              "{f2}": "f2",
                              "{f3}": "f3",
                              "{f4}": "f4",
                              "{f5}": "f5",
                              "{f6}": "f6",
                              "{f7}": "f7",
                              "{f8}": "f8",
                              "{f9}": "f9",
                              "{f10}": "f10",
                              "{f11}": "f11",
                              "{f12}": "f12",
                              "{numpaddivide}": "/",
                              "{numlock}": "lock",
                              "{arrowup}": "↑",
                              "{arrowleft}": "←",
                              "{arrowdown}": "↓",
                              "{arrowright}": "→",
                              "{prtscr}": "print",
                              "{scrolllock}": "scroll",
                              "{pause}": "pause",
                              "{insert}": "ins",
                              "{home}": "home",
                              "{pageup}": "up",
                              "{delete}": "del",
                              "{forwarddelete}": "del",
                              "{end}": "end",
                              "{pagedown}": "down",
                              "{numpadmultiply}": "*",
                              "{numpadsubtract}": "-",
                              "{numpadadd}": "+",
                              "{numpadenter}": "enter",
                              "{period}": ".",
                              "{numpaddecimal}": ".",
                              "{numpad0}": "0",
                              "{numpad1}": "1",
                              "{numpad2}": "2",
                              "{numpad3}": "3",
                              "{numpad4}": "4",
                              "{numpad5}": "5",
                              "{numpad6}": "6",
                              "{numpad7}": "7",
                              "{numpad8}": "8",
                              "{numpad9}": "9",
                            };
                          },
                        },
                        {
                          key: "getButtonDisplayName",
                          value: function (S, P) {
                            return (
                              (P =
                                arguments.length > 2 &&
                                arguments[2] !== void 0 &&
                                arguments[2]
                                  ? Object.assign(
                                      {},
                                      this.getDefaultDiplay(),
                                      P
                                    )
                                  : P || this.getDefaultDiplay())[S] || S
                            );
                          },
                        },
                        {
                          key: "getUpdatedInput",
                          value: function (S, P, O) {
                            var D =
                                arguments.length > 3 && arguments[3] !== void 0
                                  ? arguments[3]
                                  : O,
                              G =
                                arguments.length > 4 &&
                                arguments[4] !== void 0 &&
                                arguments[4],
                              H = this.getOptions(),
                              A = [O, D, G],
                              K = P;
                            return (
                              (S === "{bksp}" || S === "{backspace}") &&
                              K.length > 0
                                ? (K = this.removeAt.apply(this, [K].concat(A)))
                                : (S === "{delete}" ||
                                    S === "{forwarddelete}") &&
                                  K.length > 0
                                ? (K = this.removeForwardsAt.apply(
                                    this,
                                    [K].concat(A)
                                  ))
                                : S === "{space}"
                                ? (K = this.addStringAt.apply(
                                    this,
                                    [K, " "].concat(A)
                                  ))
                                : S !== "{tab}" ||
                                  (typeof H.tabCharOnTab == "boolean" &&
                                    H.tabCharOnTab === !1)
                                ? (S !== "{enter}" && S !== "{numpadenter}") ||
                                  !H.newLineOnEnter
                                  ? S.includes("numpad") &&
                                    Number.isInteger(Number(S[S.length - 2]))
                                    ? (K = this.addStringAt.apply(
                                        this,
                                        [K, S[S.length - 2]].concat(A)
                                      ))
                                    : S === "{numpaddivide}"
                                    ? (K = this.addStringAt.apply(
                                        this,
                                        [K, "/"].concat(A)
                                      ))
                                    : S === "{numpadmultiply}"
                                    ? (K = this.addStringAt.apply(
                                        this,
                                        [K, "*"].concat(A)
                                      ))
                                    : S === "{numpadsubtract}"
                                    ? (K = this.addStringAt.apply(
                                        this,
                                        [K, "-"].concat(A)
                                      ))
                                    : S === "{numpadadd}"
                                    ? (K = this.addStringAt.apply(
                                        this,
                                        [K, "+"].concat(A)
                                      ))
                                    : S === "{numpaddecimal}"
                                    ? (K = this.addStringAt.apply(
                                        this,
                                        [K, "."].concat(A)
                                      ))
                                    : S === "{" || S === "}"
                                    ? (K = this.addStringAt.apply(
                                        this,
                                        [K, S].concat(A)
                                      ))
                                    : S.includes("{") ||
                                      S.includes("}") ||
                                      (K = this.addStringAt.apply(
                                        this,
                                        [K, S].concat(A)
                                      ))
                                  : (K = this.addStringAt.apply(
                                      this,
                                      [
                                        K,
                                        `
`,
                                      ].concat(A)
                                    ))
                                : (K = this.addStringAt.apply(
                                    this,
                                    [K, "	"].concat(A)
                                  )),
                              H.debug && console.log("Input will be: " + K),
                              K
                            );
                          },
                        },
                        {
                          key: "updateCaretPos",
                          value: function (S) {
                            var P =
                                arguments.length > 1 &&
                                arguments[1] !== void 0 &&
                                arguments[1],
                              O = this.updateCaretPosAction(S, P);
                            this.dispatch(function (D) {
                              D.setCaretPosition(O);
                            });
                          },
                        },
                        {
                          key: "updateCaretPosAction",
                          value: function (S) {
                            var P =
                                arguments.length > 1 &&
                                arguments[1] !== void 0 &&
                                arguments[1],
                              O = this.getOptions(),
                              D = this.getCaretPosition();
                            return (
                              D != null && (P ? D > 0 && (D -= S) : (D += S)),
                              O.debug && console.log("Caret at:", D),
                              D
                            );
                          },
                        },
                        {
                          key: "addStringAt",
                          value: function (S, P) {
                            var O,
                              D =
                                arguments.length > 2 && arguments[2] !== void 0
                                  ? arguments[2]
                                  : S.length,
                              G =
                                arguments.length > 3 && arguments[3] !== void 0
                                  ? arguments[3]
                                  : S.length,
                              H =
                                arguments.length > 4 &&
                                arguments[4] !== void 0 &&
                                arguments[4];
                            return (
                              D || D === 0
                                ? ((O = [S.slice(0, D), P, S.slice(G)].join(
                                    ""
                                  )),
                                  this.isMaxLengthReached() ||
                                    (H && this.updateCaretPos(P.length)))
                                : (O = S + P),
                              O
                            );
                          },
                        },
                        {
                          key: "removeAt",
                          value: function (S) {
                            var P,
                              O =
                                arguments.length > 1 && arguments[1] !== void 0
                                  ? arguments[1]
                                  : S.length,
                              D =
                                arguments.length > 2 && arguments[2] !== void 0
                                  ? arguments[2]
                                  : S.length,
                              G =
                                arguments.length > 3 &&
                                arguments[3] !== void 0 &&
                                arguments[3];
                            if (O === 0 && D === 0) return S;
                            if (O === D) {
                              var H = /([\uD800-\uDBFF][\uDC00-\uDFFF])/g;
                              O && O >= 0
                                ? S.substring(O - 2, O).match(H)
                                  ? ((P = S.substr(0, O - 2) + S.substr(O)),
                                    G && this.updateCaretPos(2, !0))
                                  : ((P = S.substr(0, O - 1) + S.substr(O)),
                                    G && this.updateCaretPos(1, !0))
                                : S.slice(-2).match(H)
                                ? ((P = S.slice(0, -2)),
                                  G && this.updateCaretPos(2, !0))
                                : ((P = S.slice(0, -1)),
                                  G && this.updateCaretPos(1, !0));
                            } else
                              (P = S.slice(0, O) + S.slice(D)),
                                G &&
                                  this.dispatch(function (A) {
                                    A.setCaretPosition(O);
                                  });
                            return P;
                          },
                        },
                        {
                          key: "removeForwardsAt",
                          value: function (S) {
                            var P,
                              O =
                                arguments.length > 1 && arguments[1] !== void 0
                                  ? arguments[1]
                                  : S.length,
                              D =
                                arguments.length > 2 && arguments[2] !== void 0
                                  ? arguments[2]
                                  : S.length,
                              G =
                                arguments.length > 3 &&
                                arguments[3] !== void 0 &&
                                arguments[3];
                            return S != null && S.length && O !== null
                              ? (O === D
                                  ? (P = S.substring(O, O + 2).match(
                                      /([\uD800-\uDBFF][\uDC00-\uDFFF])/g
                                    )
                                      ? S.substr(0, O) + S.substr(O + 2)
                                      : S.substr(0, O) + S.substr(O + 1))
                                  : ((P = S.slice(0, O) + S.slice(D)),
                                    G &&
                                      this.dispatch(function (H) {
                                        H.setCaretPosition(O);
                                      })),
                                P)
                              : S;
                          },
                        },
                        {
                          key: "handleMaxLength",
                          value: function (S, P) {
                            var O = this.getOptions(),
                              D = O.maxLength,
                              G = S[O.inputName || "default"],
                              H = P.length - 1 >= D;
                            if (P.length <= G.length) return !1;
                            if (Number.isInteger(D))
                              return (
                                O.debug &&
                                  console.log("maxLength (num) reached:", H),
                                H
                                  ? ((this.maxLengthReached = !0), !0)
                                  : ((this.maxLengthReached = !1), !1)
                              );
                            if (s(D) === "object") {
                              var A =
                                P.length - 1 >= D[O.inputName || "default"];
                              return (
                                O.debug &&
                                  console.log("maxLength (obj) reached:", A),
                                A
                                  ? ((this.maxLengthReached = !0), !0)
                                  : ((this.maxLengthReached = !1), !1)
                              );
                            }
                          },
                        },
                        {
                          key: "isMaxLengthReached",
                          value: function () {
                            return !!this.maxLengthReached;
                          },
                        },
                        {
                          key: "isTouchDevice",
                          value: function () {
                            return (
                              "ontouchstart" in window ||
                              navigator.maxTouchPoints
                            );
                          },
                        },
                        {
                          key: "pointerEventsSupported",
                          value: function () {
                            return !!window.PointerEvent;
                          },
                        },
                        {
                          key: "camelCase",
                          value: function (S) {
                            return S
                              ? S.toLowerCase()
                                  .trim()
                                  .split(/[.\-_\s]/g)
                                  .reduce(function (P, O) {
                                    return O.length
                                      ? P + O[0].toUpperCase() + O.slice(1)
                                      : P;
                                  })
                              : "";
                          },
                        },
                        {
                          key: "chunkArray",
                          value: function (S, P) {
                            return f(Array(Math.ceil(S.length / P))).map(
                              function (O, D) {
                                return S.slice(P * D, P + P * D);
                              }
                            );
                          },
                        },
                        {
                          key: "escapeRegex",
                          value: function (S) {
                            return S.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");
                          },
                        },
                        {
                          key: "getRtlOffset",
                          value: function (S, P) {
                            var O = S,
                              D = P.indexOf("‫");
                            return (
                              D < S && D != -1 && O--,
                              P.indexOf("‬") < S && D != -1 && O--,
                              O < 0 ? 0 : O
                            );
                          },
                        },
                      ]),
                      (v = [
                        {
                          key: "bindMethods",
                          value: function (S, P) {
                            var O,
                              D = (function (H, A) {
                                var K =
                                  (typeof Symbol < "u" && H[Symbol.iterator]) ||
                                  H["@@iterator"];
                                if (!K) {
                                  if (
                                    Array.isArray(H) ||
                                    (K = k(H)) ||
                                    (A && H && typeof H.length == "number")
                                  ) {
                                    K && (H = K);
                                    var oe = 0,
                                      Q = function () {};
                                    return {
                                      s: Q,
                                      n: function () {
                                        return oe >= H.length
                                          ? { done: !0 }
                                          : { done: !1, value: H[oe++] };
                                      },
                                      e: function (se) {
                                        throw se;
                                      },
                                      f: Q,
                                    };
                                  }
                                  throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
                                }
                                var Y,
                                  re = !0,
                                  q = !1;
                                return {
                                  s: function () {
                                    K = K.call(H);
                                  },
                                  n: function () {
                                    var se = K.next();
                                    return (re = se.done), se;
                                  },
                                  e: function (se) {
                                    (q = !0), (Y = se);
                                  },
                                  f: function () {
                                    try {
                                      re || K.return == null || K.return();
                                    } finally {
                                      if (q) throw Y;
                                    }
                                  },
                                };
                              })(Object.getOwnPropertyNames(S.prototype));
                            try {
                              for (D.s(); !(O = D.n()).done; ) {
                                var G = O.value;
                                G === "constructor" ||
                                  G === "bindMethods" ||
                                  (P[G] = P[G].bind(P));
                              }
                            } catch (H) {
                              D.e(H);
                            } finally {
                              D.f();
                            }
                          },
                        },
                      ]),
                      U && h(L.prototype, U),
                      v && h(L, v),
                      Object.defineProperty(L, "prototype", { writable: !1 }),
                      z
                    );
                  })();
                  u(p, "noop", function () {});
                  var m = p;
                  function d(z) {
                    return (
                      (d =
                        typeof Symbol == "function" &&
                        typeof Symbol.iterator == "symbol"
                          ? function (L) {
                              return typeof L;
                            }
                          : function (L) {
                              return L &&
                                typeof Symbol == "function" &&
                                L.constructor === Symbol &&
                                L !== Symbol.prototype
                                ? "symbol"
                                : typeof L;
                            }),
                      d(z)
                    );
                  }
                  function w(z, L) {
                    for (var U = 0; U < L.length; U++) {
                      var v = L[U];
                      (v.enumerable = v.enumerable || !1),
                        (v.configurable = !0),
                        "value" in v && (v.writable = !0),
                        Object.defineProperty(z, E(v.key), v);
                    }
                  }
                  function g(z, L, U) {
                    return (
                      (L = E(L)) in z
                        ? Object.defineProperty(z, L, {
                            value: U,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0,
                          })
                        : (z[L] = U),
                      z
                    );
                  }
                  function E(z) {
                    var L = (function (U, v) {
                      if (d(U) != "object" || !U) return U;
                      var S = U[Symbol.toPrimitive];
                      if (S !== void 0) {
                        var P = S.call(U, v || "default");
                        if (d(P) != "object") return P;
                        throw new TypeError(
                          "@@toPrimitive must return a primitive value."
                        );
                      }
                      return (v === "string" ? String : Number)(U);
                    })(z, "string");
                    return d(L) == "symbol" ? L : String(L);
                  }
                  var _ = (function () {
                    function z(v) {
                      var S = this,
                        P = v.dispatch,
                        O = v.getOptions;
                      (function (D, G) {
                        if (!(D instanceof G))
                          throw new TypeError(
                            "Cannot call a class as a function"
                          );
                      })(this, z),
                        g(this, "getOptions", void 0),
                        g(this, "dispatch", void 0),
                        g(this, "isMofifierKey", function (D) {
                          return (
                            D.altKey ||
                            D.ctrlKey ||
                            D.shiftKey ||
                            [
                              "Tab",
                              "CapsLock",
                              "Esc",
                              "ArrowUp",
                              "ArrowDown",
                              "ArrowLeft",
                              "ArrowRight",
                            ].includes(
                              D.code ||
                                D.key ||
                                S.keyCodeToKey(D == null ? void 0 : D.keyCode)
                            )
                          );
                        }),
                        (this.dispatch = P),
                        (this.getOptions = O),
                        m.bindMethods(z, this);
                    }
                    var L, U;
                    return (
                      (L = z),
                      (U = [
                        {
                          key: "handleHighlightKeyDown",
                          value: function (v) {
                            var S = this.getOptions();
                            S.physicalKeyboardHighlightPreventDefault &&
                              this.isMofifierKey(v) &&
                              (v.preventDefault(),
                              v.stopImmediatePropagation());
                            var P = this.getSimpleKeyboardLayoutKey(v);
                            this.dispatch(function (O) {
                              var D,
                                G,
                                H = O.getButtonElement(P),
                                A = O.getButtonElement("{".concat(P, "}"));
                              if (H) (D = H), (G = P);
                              else {
                                if (!A) return;
                                (D = A), (G = "{".concat(P, "}"));
                              }
                              var K,
                                oe,
                                Q,
                                Y,
                                re = function (se) {
                                  (se.style.background =
                                    S.physicalKeyboardHighlightBgColor ||
                                    "#dadce4"),
                                    (se.style.color =
                                      S.physicalKeyboardHighlightTextColor ||
                                      "black");
                                };
                              if (D)
                                if (Array.isArray(D)) {
                                  if (
                                    (D.forEach(function (se) {
                                      return re(se);
                                    }),
                                    S.physicalKeyboardHighlightPress)
                                  )
                                    if (
                                      S.physicalKeyboardHighlightPressUsePointerEvents
                                    )
                                      (K = D[0]) === null ||
                                        K === void 0 ||
                                        (oe = K.onpointerdown) === null ||
                                        oe === void 0 ||
                                        oe.call(K, v);
                                    else if (
                                      S.physicalKeyboardHighlightPressUseClick
                                    ) {
                                      var q;
                                      (q = D[0]) === null ||
                                        q === void 0 ||
                                        q.click();
                                    } else O.handleButtonClicked(G, v);
                                } else
                                  re(D),
                                    S.physicalKeyboardHighlightPress &&
                                      (S.physicalKeyboardHighlightPressUsePointerEvents
                                        ? (Q = D) === null ||
                                          Q === void 0 ||
                                          (Y = Q.onpointerdown) === null ||
                                          Y === void 0 ||
                                          Y.call(Q, v)
                                        : S.physicalKeyboardHighlightPressUseClick
                                        ? D.click()
                                        : O.handleButtonClicked(G, v));
                            });
                          },
                        },
                        {
                          key: "handleHighlightKeyUp",
                          value: function (v) {
                            var S = this.getOptions();
                            S.physicalKeyboardHighlightPreventDefault &&
                              this.isMofifierKey(v) &&
                              (v.preventDefault(),
                              v.stopImmediatePropagation());
                            var P = this.getSimpleKeyboardLayoutKey(v);
                            this.dispatch(function (O) {
                              var D,
                                G,
                                H,
                                A =
                                  O.getButtonElement(P) ||
                                  O.getButtonElement("{".concat(P, "}")),
                                K = function (oe) {
                                  oe.removeAttribute &&
                                    oe.removeAttribute("style");
                                };
                              A &&
                                (Array.isArray(A)
                                  ? (A.forEach(function (oe) {
                                      return K(oe);
                                    }),
                                    S.physicalKeyboardHighlightPressUsePointerEvents &&
                                      ((D = A[0]) === null ||
                                        D === void 0 ||
                                        (G = D.onpointerup) === null ||
                                        G === void 0 ||
                                        G.call(D, v)))
                                  : (K(A),
                                    S.physicalKeyboardHighlightPressUsePointerEvents &&
                                      (A == null ||
                                        (H = A.onpointerup) === null ||
                                        H === void 0 ||
                                        H.call(A, v))));
                            });
                          },
                        },
                        {
                          key: "getSimpleKeyboardLayoutKey",
                          value: function (v) {
                            var S,
                              P = "",
                              O =
                                v.code ||
                                v.key ||
                                this.keyCodeToKey(
                                  v == null ? void 0 : v.keyCode
                                );
                            return (P =
                              (O != null && O.includes("Numpad")) ||
                              (O != null && O.includes("Shift")) ||
                              (O != null && O.includes("Space")) ||
                              (O != null && O.includes("Backspace")) ||
                              (O != null && O.includes("Control")) ||
                              (O != null && O.includes("Alt")) ||
                              (O != null && O.includes("Meta"))
                                ? v.code || ""
                                : v.key ||
                                  this.keyCodeToKey(
                                    v == null ? void 0 : v.keyCode
                                  ) ||
                                  "").length > 1
                              ? (S = P) === null || S === void 0
                                ? void 0
                                : S.toLowerCase()
                              : P;
                          },
                        },
                        {
                          key: "keyCodeToKey",
                          value: function (v) {
                            return (
                              {
                                8: "Backspace",
                                9: "Tab",
                                13: "Enter",
                                16: "Shift",
                                17: "Ctrl",
                                18: "Alt",
                                19: "Pause",
                                20: "CapsLock",
                                27: "Esc",
                                32: "Space",
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
                                48: "0",
                                49: "1",
                                50: "2",
                                51: "3",
                                52: "4",
                                53: "5",
                                54: "6",
                                55: "7",
                                56: "8",
                                57: "9",
                                65: "A",
                                66: "B",
                                67: "C",
                                68: "D",
                                69: "E",
                                70: "F",
                                71: "G",
                                72: "H",
                                73: "I",
                                74: "J",
                                75: "K",
                                76: "L",
                                77: "M",
                                78: "N",
                                79: "O",
                                80: "P",
                                81: "Q",
                                82: "R",
                                83: "S",
                                84: "T",
                                85: "U",
                                86: "V",
                                87: "W",
                                88: "X",
                                89: "Y",
                                90: "Z",
                                91: "Meta",
                                96: "Numpad0",
                                97: "Numpad1",
                                98: "Numpad2",
                                99: "Numpad3",
                                100: "Numpad4",
                                101: "Numpad5",
                                102: "Numpad6",
                                103: "Numpad7",
                                104: "Numpad8",
                                105: "Numpad9",
                                106: "NumpadMultiply",
                                107: "NumpadAdd",
                                109: "NumpadSubtract",
                                110: "NumpadDecimal",
                                111: "NumpadDivide",
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
                                186: ";",
                                187: "=",
                                188: ",",
                                189: "-",
                                190: ".",
                                191: "/",
                                192: "`",
                                219: "[",
                                220: "\\",
                                221: "]",
                                222: "'",
                              }[v] || ""
                            );
                          },
                        },
                      ]) && w(L.prototype, U),
                      Object.defineProperty(L, "prototype", { writable: !1 }),
                      z
                    );
                  })();
                  function I(z) {
                    return (
                      (I =
                        typeof Symbol == "function" &&
                        typeof Symbol.iterator == "symbol"
                          ? function (L) {
                              return typeof L;
                            }
                          : function (L) {
                              return L &&
                                typeof Symbol == "function" &&
                                L.constructor === Symbol &&
                                L !== Symbol.prototype
                                ? "symbol"
                                : typeof L;
                            }),
                      I(z)
                    );
                  }
                  function j(z, L) {
                    for (var U = 0; U < L.length; U++) {
                      var v = L[U];
                      (v.enumerable = v.enumerable || !1),
                        (v.configurable = !0),
                        "value" in v && (v.writable = !0),
                        Object.defineProperty(z, C(v.key), v);
                    }
                  }
                  function N(z, L, U) {
                    return (
                      (L = C(L)) in z
                        ? Object.defineProperty(z, L, {
                            value: U,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0,
                          })
                        : (z[L] = U),
                      z
                    );
                  }
                  function C(z) {
                    var L = (function (U, v) {
                      if (I(U) != "object" || !U) return U;
                      var S = U[Symbol.toPrimitive];
                      if (S !== void 0) {
                        var P = S.call(U, v || "default");
                        if (I(P) != "object") return P;
                        throw new TypeError(
                          "@@toPrimitive must return a primitive value."
                        );
                      }
                      return (v === "string" ? String : Number)(U);
                    })(z, "string");
                    return I(L) == "symbol" ? L : String(L);
                  }
                  var T = (function () {
                      function z(v) {
                        var S = v.utilities,
                          P = v.options;
                        (function (O, D) {
                          if (!(O instanceof D))
                            throw new TypeError(
                              "Cannot call a class as a function"
                            );
                        })(this, z),
                          N(this, "utilities", void 0),
                          N(this, "options", void 0),
                          N(this, "candidateBoxElement", void 0),
                          N(this, "pageIndex", 0),
                          N(this, "pageSize", void 0),
                          (this.utilities = S),
                          (this.options = P),
                          m.bindMethods(z, this),
                          (this.pageSize =
                            this.utilities.getOptions()
                              .layoutCandidatesPageSize || 5);
                      }
                      var L, U;
                      return (
                        (L = z),
                        (U = [
                          {
                            key: "destroy",
                            value: function () {
                              this.candidateBoxElement &&
                                (this.candidateBoxElement.remove(),
                                (this.pageIndex = 0));
                            },
                          },
                          {
                            key: "show",
                            value: function (v) {
                              var S = this,
                                P = v.candidateValue,
                                O = v.targetElement,
                                D = v.onSelect;
                              if (P && P.length) {
                                var G = this.utilities.chunkArray(
                                  P.split(" "),
                                  this.pageSize
                                );
                                this.renderPage({
                                  candidateListPages: G,
                                  targetElement: O,
                                  pageIndex: this.pageIndex,
                                  nbPages: G.length,
                                  onItemSelected: function (H, A) {
                                    D(H, A), S.destroy();
                                  },
                                });
                              }
                            },
                          },
                          {
                            key: "renderPage",
                            value: function (v) {
                              var S,
                                P = this,
                                O = v.candidateListPages,
                                D = v.targetElement,
                                G = v.pageIndex,
                                H = v.nbPages,
                                A = v.onItemSelected;
                              (S = this.candidateBoxElement) === null ||
                                S === void 0 ||
                                S.remove(),
                                (this.candidateBoxElement =
                                  document.createElement("div")),
                                (this.candidateBoxElement.className =
                                  "hg-candidate-box");
                              var K = document.createElement("ul");
                              (K.className = "hg-candidate-box-list"),
                                O[G].forEach(function (me) {
                                  var je,
                                    Se = document.createElement("li"),
                                    De = function () {
                                      var _e = new (
                                        P.options.useTouchEvents
                                          ? TouchEvent
                                          : MouseEvent
                                      )("click");
                                      return (
                                        Object.defineProperty(_e, "target", {
                                          value: Se,
                                        }),
                                        _e
                                      );
                                    };
                                  (Se.className = "hg-candidate-box-list-item"),
                                    (Se.innerHTML =
                                      ((je = P.options.display) === null ||
                                      je === void 0
                                        ? void 0
                                        : je[me]) || me),
                                    P.options.useTouchEvents
                                      ? (Se.ontouchstart = function (_e) {
                                          return A(me, _e || De());
                                        })
                                      : (Se.onclick = function () {
                                          var _e =
                                            arguments.length > 0 &&
                                            arguments[0] !== void 0
                                              ? arguments[0]
                                              : De();
                                          return A(me, _e);
                                        }),
                                    K.appendChild(Se);
                                });
                              var oe = G > 0,
                                Q = document.createElement("div");
                              Q.classList.add("hg-candidate-box-prev"),
                                oe &&
                                  Q.classList.add(
                                    "hg-candidate-box-btn-active"
                                  );
                              var Y = function () {
                                oe &&
                                  P.renderPage({
                                    candidateListPages: O,
                                    targetElement: D,
                                    pageIndex: G - 1,
                                    nbPages: H,
                                    onItemSelected: A,
                                  });
                              };
                              this.options.useTouchEvents
                                ? (Q.ontouchstart = Y)
                                : (Q.onclick = Y),
                                this.candidateBoxElement.appendChild(Q),
                                this.candidateBoxElement.appendChild(K);
                              var re = G < H - 1,
                                q = document.createElement("div");
                              q.classList.add("hg-candidate-box-next"),
                                re &&
                                  q.classList.add(
                                    "hg-candidate-box-btn-active"
                                  );
                              var se = function () {
                                re &&
                                  P.renderPage({
                                    candidateListPages: O,
                                    targetElement: D,
                                    pageIndex: G + 1,
                                    nbPages: H,
                                    onItemSelected: A,
                                  });
                              };
                              this.options.useTouchEvents
                                ? (q.ontouchstart = se)
                                : (q.onclick = se),
                                this.candidateBoxElement.appendChild(q),
                                D.prepend(this.candidateBoxElement);
                            },
                          },
                        ]),
                        U && j(L.prototype, U),
                        Object.defineProperty(L, "prototype", { writable: !1 }),
                        z
                      );
                    })(),
                    M = T;
                  function Z(z) {
                    return (
                      (function (L) {
                        if (Array.isArray(L)) return W(L);
                      })(z) ||
                      (function (L) {
                        if (
                          (typeof Symbol < "u" && L[Symbol.iterator] != null) ||
                          L["@@iterator"] != null
                        )
                          return Array.from(L);
                      })(z) ||
                      (function (L, U) {
                        if (L) {
                          if (typeof L == "string") return W(L, U);
                          var v = Object.prototype.toString
                            .call(L)
                            .slice(8, -1);
                          return (
                            v === "Object" &&
                              L.constructor &&
                              (v = L.constructor.name),
                            v === "Map" || v === "Set"
                              ? Array.from(L)
                              : v === "Arguments" ||
                                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(
                                  v
                                )
                              ? W(L, U)
                              : void 0
                          );
                        }
                      })(z) ||
                      (function () {
                        throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
                      })()
                    );
                  }
                  function W(z, L) {
                    (L == null || L > z.length) && (L = z.length);
                    for (var U = 0, v = new Array(L); U < L; U++) v[U] = z[U];
                    return v;
                  }
                  function B(z) {
                    return (
                      (B =
                        typeof Symbol == "function" &&
                        typeof Symbol.iterator == "symbol"
                          ? function (L) {
                              return typeof L;
                            }
                          : function (L) {
                              return L &&
                                typeof Symbol == "function" &&
                                L.constructor === Symbol &&
                                L !== Symbol.prototype
                                ? "symbol"
                                : typeof L;
                            }),
                      B(z)
                    );
                  }
                  function $(z, L) {
                    var U = Object.keys(z);
                    if (Object.getOwnPropertySymbols) {
                      var v = Object.getOwnPropertySymbols(z);
                      L &&
                        (v = v.filter(function (S) {
                          return Object.getOwnPropertyDescriptor(
                            z,
                            S
                          ).enumerable;
                        })),
                        U.push.apply(U, v);
                    }
                    return U;
                  }
                  function V(z, L) {
                    for (var U = 0; U < L.length; U++) {
                      var v = L[U];
                      (v.enumerable = v.enumerable || !1),
                        (v.configurable = !0),
                        "value" in v && (v.writable = !0),
                        Object.defineProperty(z, J(v.key), v);
                    }
                  }
                  function X(z, L, U) {
                    return (
                      (L = J(L)) in z
                        ? Object.defineProperty(z, L, {
                            value: U,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0,
                          })
                        : (z[L] = U),
                      z
                    );
                  }
                  function J(z) {
                    var L = (function (U, v) {
                      if (B(U) != "object" || !U) return U;
                      var S = U[Symbol.toPrimitive];
                      if (S !== void 0) {
                        var P = S.call(U, v || "default");
                        if (B(P) != "object") return P;
                        throw new TypeError(
                          "@@toPrimitive must return a primitive value."
                        );
                      }
                      return (v === "string" ? String : Number)(U);
                    })(z, "string");
                    return B(L) == "symbol" ? L : String(L);
                  }
                  var ne = (function () {
                      function z(v, S) {
                        var P = this;
                        if (
                          ((function (Q, Y) {
                            if (!(Q instanceof Y))
                              throw new TypeError(
                                "Cannot call a class as a function"
                              );
                          })(this, z),
                          X(this, "input", void 0),
                          X(this, "options", void 0),
                          X(this, "utilities", void 0),
                          X(this, "caretPosition", void 0),
                          X(this, "caretPositionEnd", void 0),
                          X(this, "keyboardDOM", void 0),
                          X(this, "keyboardPluginClasses", void 0),
                          X(this, "keyboardDOMClass", void 0),
                          X(this, "buttonElements", void 0),
                          X(this, "currentInstanceName", void 0),
                          X(this, "allKeyboardInstances", void 0),
                          X(this, "keyboardInstanceNames", void 0),
                          X(this, "isFirstKeyboardInstance", void 0),
                          X(this, "physicalKeyboard", void 0),
                          X(this, "modules", void 0),
                          X(this, "activeButtonClass", void 0),
                          X(this, "holdInteractionTimeout", void 0),
                          X(this, "holdTimeout", void 0),
                          X(this, "isMouseHold", void 0),
                          X(this, "initialized", void 0),
                          X(this, "candidateBox", void 0),
                          X(this, "keyboardRowsDOM", void 0),
                          X(this, "defaultName", "default"),
                          X(this, "activeInputElement", null),
                          X(this, "handleParams", function (Q, Y) {
                            var re, q, se;
                            if (typeof Q == "string")
                              (re = Q.split(".").join("")),
                                (q = document.querySelector(".".concat(re))),
                                (se = Y);
                            else if (Q instanceof HTMLDivElement) {
                              if (!Q.className)
                                throw (
                                  (console.warn(
                                    "Any DOM element passed as parameter must have a class."
                                  ),
                                  new Error("KEYBOARD_DOM_CLASS_ERROR"))
                                );
                              (re = Q.className.split(" ")[0]),
                                (q = Q),
                                (se = Y);
                            } else
                              (re = "simple-keyboard"),
                                (q = document.querySelector(".".concat(re))),
                                (se = Q);
                            return {
                              keyboardDOMClass: re,
                              keyboardDOM: q,
                              options: se,
                            };
                          }),
                          X(this, "getOptions", function () {
                            return P.options;
                          }),
                          X(this, "getCaretPosition", function () {
                            return P.caretPosition;
                          }),
                          X(this, "getCaretPositionEnd", function () {
                            return P.caretPositionEnd;
                          }),
                          X(this, "registerModule", function (Q, Y) {
                            P.modules[Q] || (P.modules[Q] = {}),
                              Y(P.modules[Q]);
                          }),
                          X(this, "getKeyboardClassString", function () {
                            for (
                              var Q = arguments.length,
                                Y = new Array(Q),
                                re = 0;
                              re < Q;
                              re++
                            )
                              Y[re] = arguments[re];
                            return [P.keyboardDOMClass]
                              .concat(Y)
                              .filter(function (q) {
                                return !!q;
                              })
                              .join(" ");
                          }),
                          typeof window < "u")
                        ) {
                          var O = this.handleParams(v, S),
                            D = O.keyboardDOMClass,
                            G = O.keyboardDOM,
                            H = O.options,
                            A = H === void 0 ? {} : H;
                          (this.utilities = new m({
                            getOptions: this.getOptions,
                            getCaretPosition: this.getCaretPosition,
                            getCaretPositionEnd: this.getCaretPositionEnd,
                            dispatch: this.dispatch,
                          })),
                            (this.caretPosition = null),
                            (this.caretPositionEnd = null),
                            (this.keyboardDOM = G),
                            (this.options = (function (Q) {
                              for (var Y = 1; Y < arguments.length; Y++) {
                                var re =
                                  arguments[Y] != null ? arguments[Y] : {};
                                Y % 2
                                  ? $(Object(re), !0).forEach(function (q) {
                                      X(Q, q, re[q]);
                                    })
                                  : Object.getOwnPropertyDescriptors
                                  ? Object.defineProperties(
                                      Q,
                                      Object.getOwnPropertyDescriptors(re)
                                    )
                                  : $(Object(re)).forEach(function (q) {
                                      Object.defineProperty(
                                        Q,
                                        q,
                                        Object.getOwnPropertyDescriptor(re, q)
                                      );
                                    });
                              }
                              return Q;
                            })(
                              {
                                layoutName: "default",
                                theme: "hg-theme-default",
                                inputName: "default",
                                preventMouseDownDefault: !1,
                                enableLayoutCandidates: !0,
                                excludeFromLayout: {},
                              },
                              A
                            )),
                            (this.keyboardPluginClasses = ""),
                            m.bindMethods(z, this);
                          var K = this.options.inputName,
                            oe = K === void 0 ? this.defaultName : K;
                          if (
                            ((this.input = {}),
                            (this.input[oe] = ""),
                            (this.keyboardDOMClass = D),
                            (this.buttonElements = {}),
                            window.SimpleKeyboardInstances ||
                              (window.SimpleKeyboardInstances = {}),
                            (this.currentInstanceName =
                              this.utilities.camelCase(this.keyboardDOMClass)),
                            (window.SimpleKeyboardInstances[
                              this.currentInstanceName
                            ] = this),
                            (this.allKeyboardInstances =
                              window.SimpleKeyboardInstances),
                            (this.keyboardInstanceNames = Object.keys(
                              window.SimpleKeyboardInstances
                            )),
                            (this.isFirstKeyboardInstance =
                              this.keyboardInstanceNames[0] ===
                              this.currentInstanceName),
                            (this.physicalKeyboard = new _({
                              dispatch: this.dispatch,
                              getOptions: this.getOptions,
                            })),
                            (this.candidateBox = this.options
                              .enableLayoutCandidates
                              ? new M({
                                  utilities: this.utilities,
                                  options: this.options,
                                })
                              : null),
                            !this.keyboardDOM)
                          )
                            throw (
                              (console.warn(
                                '".'.concat(D, '" was not found in the DOM.')
                              ),
                              new Error("KEYBOARD_DOM_ERROR"))
                            );
                          this.render(),
                            (this.modules = {}),
                            this.loadModules();
                        }
                      }
                      var L, U;
                      return (
                        (L = z),
                        (U = [
                          {
                            key: "setCaretPosition",
                            value: function (v) {
                              var S =
                                arguments.length > 1 && arguments[1] !== void 0
                                  ? arguments[1]
                                  : v;
                              (this.caretPosition = v),
                                (this.caretPositionEnd = S);
                            },
                          },
                          {
                            key: "getInputCandidates",
                            value: function (v) {
                              var S = this,
                                P = this.options,
                                O = P.layoutCandidates,
                                D = P.layoutCandidatesCaseSensitiveMatch;
                              if (!O || B(O) !== "object") return {};
                              var G = Object.keys(O).filter(function (K) {
                                var oe =
                                    v.substring(
                                      0,
                                      S.getCaretPositionEnd() || 0
                                    ) || v,
                                  Q = new RegExp(
                                    "".concat(S.utilities.escapeRegex(K), "$"),
                                    D ? "g" : "gi"
                                  );
                                return !!Z(oe.matchAll(Q)).length;
                              });
                              if (G.length > 1) {
                                var H = G.sort(function (K, oe) {
                                  return oe.length - K.length;
                                })[0];
                                return {
                                  candidateKey: H,
                                  candidateValue: O[H],
                                };
                              }
                              if (G.length) {
                                var A = G[0];
                                return {
                                  candidateKey: A,
                                  candidateValue: O[A],
                                };
                              }
                              return {};
                            },
                          },
                          {
                            key: "showCandidatesBox",
                            value: function (v, S, P) {
                              var O = this;
                              this.candidateBox &&
                                this.candidateBox.show({
                                  candidateValue: S,
                                  targetElement: P,
                                  onSelect: function (D, G) {
                                    var H = O.options,
                                      A = H.layoutCandidatesCaseSensitiveMatch,
                                      K = H.disableCandidateNormalization,
                                      oe = H.enableLayoutCandidatesKeyPress,
                                      Q = D;
                                    K || (Q = D.normalize("NFD"));
                                    var Y = O.getInput(O.options.inputName, !0),
                                      re = O.getCaretPositionEnd() || 0,
                                      q = Y.substring(0, re || 0) || Y,
                                      se = new RegExp(
                                        "".concat(
                                          O.utilities.escapeRegex(v),
                                          "$"
                                        ),
                                        A ? "g" : "gi"
                                      ),
                                      me = q.replace(se, Q),
                                      je = Y.replace(q, me),
                                      Se = me.length - q.length,
                                      De = (re || Y.length) + Se;
                                    De < 0 && (De = 0),
                                      O.setInput(je, O.options.inputName, !0),
                                      O.setCaretPosition(De),
                                      oe &&
                                        typeof O.options.onKeyPress ==
                                          "function" &&
                                        O.options.onKeyPress(D, G),
                                      typeof O.options.onChange == "function" &&
                                        O.options.onChange(
                                          O.getInput(O.options.inputName, !0),
                                          G
                                        ),
                                      typeof O.options.onChangeAll ==
                                        "function" &&
                                        O.options.onChangeAll(
                                          O.getAllInputs(),
                                          G
                                        );
                                  },
                                });
                            },
                          },
                          {
                            key: "handleButtonClicked",
                            value: function (v, S) {
                              var P = this.options,
                                O = P.inputName,
                                D = O === void 0 ? this.defaultName : O,
                                G = P.debug;
                              if (v !== "{//}") {
                                this.input[D] || (this.input[D] = "");
                                var H = this.utilities.getUpdatedInput(
                                  v,
                                  this.input[D],
                                  this.caretPosition,
                                  this.caretPositionEnd
                                );
                                if (
                                  this.utilities.isStandardButton(v) &&
                                  this.activeInputElement &&
                                  this.input[D] &&
                                  this.input[D] === H &&
                                  this.caretPosition === 0 &&
                                  this.caretPositionEnd === H.length
                                )
                                  return (
                                    this.setInput(
                                      "",
                                      this.options.inputName,
                                      !0
                                    ),
                                    this.setCaretPosition(0),
                                    (this.activeInputElement.value = ""),
                                    this.activeInputElement.setSelectionRange(
                                      0,
                                      0
                                    ),
                                    void this.handleButtonClicked(v, S)
                                  );
                                if (
                                  (typeof this.options.onKeyPress ==
                                    "function" && this.options.onKeyPress(v, S),
                                  this.input[D] !== H &&
                                    (!this.options.inputPattern ||
                                      (this.options.inputPattern &&
                                        this.inputPatternIsValid(H))))
                                ) {
                                  if (
                                    this.options.maxLength &&
                                    this.utilities.handleMaxLength(
                                      this.input,
                                      H
                                    )
                                  )
                                    return;
                                  var A = this.utilities.getUpdatedInput(
                                    v,
                                    this.input[D],
                                    this.caretPosition,
                                    this.caretPositionEnd,
                                    !0
                                  );
                                  if (
                                    (this.setInput(
                                      A,
                                      this.options.inputName,
                                      !0
                                    ),
                                    G &&
                                      console.log(
                                        "Input changed:",
                                        this.getAllInputs()
                                      ),
                                    this.options.debug &&
                                      console.log(
                                        "Caret at: ",
                                        this.getCaretPosition(),
                                        this.getCaretPositionEnd(),
                                        "(".concat(this.keyboardDOMClass, ")"),
                                        S == null ? void 0 : S.type
                                      ),
                                    this.options.syncInstanceInputs &&
                                      this.syncInstanceInputs(),
                                    typeof this.options.onChange ==
                                      "function" &&
                                      this.options.onChange(
                                        this.getInput(
                                          this.options.inputName,
                                          !0
                                        ),
                                        S
                                      ),
                                    typeof this.options.onChangeAll ==
                                      "function" &&
                                      this.options.onChangeAll(
                                        this.getAllInputs(),
                                        S
                                      ),
                                    S != null &&
                                      S.target &&
                                      this.options.enableLayoutCandidates)
                                  ) {
                                    var K,
                                      oe = this.getInputCandidates(H),
                                      Q = oe.candidateKey,
                                      Y = oe.candidateValue;
                                    Q && Y
                                      ? this.showCandidatesBox(
                                          Q,
                                          Y,
                                          this.keyboardDOM
                                        )
                                      : (K = this.candidateBox) === null ||
                                        K === void 0 ||
                                        K.destroy();
                                  }
                                }
                                this.caretPositionEnd &&
                                  this.caretPosition !==
                                    this.caretPositionEnd &&
                                  (this.setCaretPosition(
                                    this.caretPositionEnd,
                                    this.caretPositionEnd
                                  ),
                                  this.activeInputElement &&
                                    this.activeInputElement.setSelectionRange(
                                      this.caretPositionEnd,
                                      this.caretPositionEnd
                                    ),
                                  this.options.debug &&
                                    console.log(
                                      "Caret position aligned",
                                      this.caretPosition
                                    )),
                                  G && console.log("Key pressed:", v);
                              }
                            },
                          },
                          {
                            key: "getMouseHold",
                            value: function () {
                              return this.isMouseHold;
                            },
                          },
                          {
                            key: "setMouseHold",
                            value: function (v) {
                              this.options.syncInstanceInputs
                                ? this.dispatch(function (S) {
                                    S.isMouseHold = v;
                                  })
                                : (this.isMouseHold = v);
                            },
                          },
                          {
                            key: "handleButtonMouseDown",
                            value: function (v, S) {
                              var P = this;
                              S &&
                                (this.options.preventMouseDownDefault &&
                                  S.preventDefault(),
                                this.options.stopMouseDownPropagation &&
                                  S.stopPropagation(),
                                S.target.classList.add(this.activeButtonClass)),
                                this.holdInteractionTimeout &&
                                  clearTimeout(this.holdInteractionTimeout),
                                this.holdTimeout &&
                                  clearTimeout(this.holdTimeout),
                                this.setMouseHold(!0),
                                this.options.disableButtonHold ||
                                  (this.holdTimeout = window.setTimeout(
                                    function () {
                                      ((P.getMouseHold() &&
                                        ((!v.includes("{") &&
                                          !v.includes("}")) ||
                                          v === "{delete}" ||
                                          v === "{backspace}" ||
                                          v === "{bksp}" ||
                                          v === "{space}" ||
                                          v === "{tab}")) ||
                                        v === "{arrowright}" ||
                                        v === "{arrowleft}" ||
                                        v === "{arrowup}" ||
                                        v === "{arrowdown}") &&
                                        (P.options.debug &&
                                          console.log("Button held:", v),
                                        P.handleButtonHold(v)),
                                        clearTimeout(P.holdTimeout);
                                    },
                                    500
                                  ));
                            },
                          },
                          {
                            key: "handleButtonMouseUp",
                            value: function (v, S) {
                              var P = this;
                              S &&
                                (this.options.preventMouseUpDefault &&
                                  S.preventDefault &&
                                  S.preventDefault(),
                                this.options.stopMouseUpPropagation &&
                                  S.stopPropagation &&
                                  S.stopPropagation(),
                                !(
                                  S.target === this.keyboardDOM ||
                                  (S.target &&
                                    this.keyboardDOM.contains(S.target)) ||
                                  (this.candidateBox &&
                                    this.candidateBox.candidateBoxElement &&
                                    (S.target ===
                                      this.candidateBox.candidateBoxElement ||
                                      (S.target &&
                                        this.candidateBox.candidateBoxElement.contains(
                                          S.target
                                        ))))
                                ) &&
                                  this.candidateBox &&
                                  this.candidateBox.destroy()),
                                this.recurseButtons(function (O) {
                                  O.classList.remove(P.activeButtonClass);
                                }),
                                this.setMouseHold(!1),
                                this.holdInteractionTimeout &&
                                  clearTimeout(this.holdInteractionTimeout),
                                v &&
                                  typeof this.options.onKeyReleased ==
                                    "function" &&
                                  this.options.onKeyReleased(v, S);
                            },
                          },
                          {
                            key: "handleKeyboardContainerMouseDown",
                            value: function (v) {
                              this.options.preventMouseDownDefault &&
                                v.preventDefault();
                            },
                          },
                          {
                            key: "handleButtonHold",
                            value: function (v) {
                              var S = this;
                              this.holdInteractionTimeout &&
                                clearTimeout(this.holdInteractionTimeout),
                                (this.holdInteractionTimeout =
                                  window.setTimeout(function () {
                                    S.getMouseHold()
                                      ? (S.handleButtonClicked(v),
                                        S.handleButtonHold(v))
                                      : clearTimeout(S.holdInteractionTimeout);
                                  }, 100));
                            },
                          },
                          {
                            key: "syncInstanceInputs",
                            value: function () {
                              var v = this;
                              this.dispatch(function (S) {
                                S.replaceInput(v.input),
                                  S.setCaretPosition(
                                    v.caretPosition,
                                    v.caretPositionEnd
                                  );
                              });
                            },
                          },
                          {
                            key: "clearInput",
                            value: function () {
                              var v =
                                arguments.length > 0 && arguments[0] !== void 0
                                  ? arguments[0]
                                  : this.options.inputName || this.defaultName;
                              (this.input[v] = ""),
                                this.setCaretPosition(0),
                                this.options.syncInstanceInputs &&
                                  this.syncInstanceInputs();
                            },
                          },
                          {
                            key: "getInput",
                            value: function () {
                              var v =
                                  arguments.length > 0 &&
                                  arguments[0] !== void 0
                                    ? arguments[0]
                                    : this.options.inputName ||
                                      this.defaultName,
                                S =
                                  arguments.length > 1 &&
                                  arguments[1] !== void 0 &&
                                  arguments[1];
                              return (
                                this.options.syncInstanceInputs &&
                                  !S &&
                                  this.syncInstanceInputs(),
                                this.options.rtl
                                  ? "‫" +
                                    this.input[v]
                                      .replace("‫", "")
                                      .replace("‬", "") +
                                    "‬"
                                  : this.input[v]
                              );
                            },
                          },
                          {
                            key: "getAllInputs",
                            value: function () {
                              var v = this,
                                S = {};
                              return (
                                Object.keys(this.input).forEach(function (P) {
                                  S[P] = v.getInput(P, !0);
                                }),
                                S
                              );
                            },
                          },
                          {
                            key: "setInput",
                            value: function (v) {
                              var S =
                                  arguments.length > 1 &&
                                  arguments[1] !== void 0
                                    ? arguments[1]
                                    : this.options.inputName ||
                                      this.defaultName,
                                P =
                                  arguments.length > 2 ? arguments[2] : void 0;
                              (this.input[S] = v),
                                !P &&
                                  this.options.syncInstanceInputs &&
                                  this.syncInstanceInputs();
                            },
                          },
                          {
                            key: "replaceInput",
                            value: function (v) {
                              this.input = v;
                            },
                          },
                          {
                            key: "setOptions",
                            value: function () {
                              var v =
                                  arguments.length > 0 &&
                                  arguments[0] !== void 0
                                    ? arguments[0]
                                    : {},
                                S = this.changedOptions(v);
                              (this.options = Object.assign(this.options, v)),
                                S.length &&
                                  (this.options.debug &&
                                    console.log("changedOptions", S),
                                  this.onSetOptions(S),
                                  this.render());
                            },
                          },
                          {
                            key: "changedOptions",
                            value: function (v) {
                              var S = this;
                              return Object.keys(v).filter(function (P) {
                                return (
                                  JSON.stringify(v[P]) !==
                                  JSON.stringify(S.options[P])
                                );
                              });
                            },
                          },
                          {
                            key: "onSetOptions",
                            value: function () {
                              var v =
                                arguments.length > 0 && arguments[0] !== void 0
                                  ? arguments[0]
                                  : [];
                              v.includes("layoutName") &&
                                this.candidateBox &&
                                this.candidateBox.destroy(),
                                (v.includes("layoutCandidatesPageSize") ||
                                  v.includes("layoutCandidates")) &&
                                  this.candidateBox &&
                                  (this.candidateBox.destroy(),
                                  (this.candidateBox = new M({
                                    utilities: this.utilities,
                                    options: this.options,
                                  })));
                            },
                          },
                          {
                            key: "resetRows",
                            value: function () {
                              this.keyboardRowsDOM &&
                                this.keyboardRowsDOM.remove(),
                                (this.keyboardDOM.className =
                                  this.keyboardDOMClass),
                                this.keyboardDOM.setAttribute(
                                  "data-skInstance",
                                  this.currentInstanceName
                                ),
                                (this.buttonElements = {});
                            },
                          },
                          {
                            key: "dispatch",
                            value: function (v) {
                              if (!window.SimpleKeyboardInstances)
                                throw (
                                  (console.warn(
                                    "SimpleKeyboardInstances is not defined. Dispatch cannot be called."
                                  ),
                                  new Error("INSTANCES_VAR_ERROR"))
                                );
                              return Object.keys(
                                window.SimpleKeyboardInstances
                              ).forEach(function (S) {
                                v(window.SimpleKeyboardInstances[S], S);
                              });
                            },
                          },
                          {
                            key: "addButtonTheme",
                            value: function (v, S) {
                              var P = this;
                              S &&
                                v &&
                                (v.split(" ").forEach(function (O) {
                                  S.split(" ").forEach(function (D) {
                                    P.options.buttonTheme ||
                                      (P.options.buttonTheme = []);
                                    var G = !1;
                                    P.options.buttonTheme.map(function (H) {
                                      if (
                                        H != null &&
                                        H.class.split(" ").includes(D)
                                      ) {
                                        G = !0;
                                        var A = H.buttons.split(" ");
                                        A.includes(O) ||
                                          ((G = !0),
                                          A.push(O),
                                          (H.buttons = A.join(" ")));
                                      }
                                      return H;
                                    }),
                                      G ||
                                        P.options.buttonTheme.push({
                                          class: D,
                                          buttons: v,
                                        });
                                  });
                                }),
                                this.render());
                            },
                          },
                          {
                            key: "removeButtonTheme",
                            value: function (v, S) {
                              var P = this;
                              if (!v && !S)
                                return (
                                  (this.options.buttonTheme = []),
                                  void this.render()
                                );
                              v &&
                                Array.isArray(this.options.buttonTheme) &&
                                this.options.buttonTheme.length &&
                                (v.split(" ").forEach(function (O) {
                                  var D;
                                  (D = P.options) === null ||
                                    D === void 0 ||
                                    (D = D.buttonTheme) === null ||
                                    D === void 0 ||
                                    D.map(function (G, H) {
                                      if (
                                        (G && S && S.includes(G.class)) ||
                                        !S
                                      ) {
                                        var A,
                                          K,
                                          oe =
                                            (A = G) === null || A === void 0
                                              ? void 0
                                              : A.buttons
                                                  .split(" ")
                                                  .filter(function (Q) {
                                                    return Q !== O;
                                                  });
                                        G && oe != null && oe.length
                                          ? (G.buttons = oe.join(" "))
                                          : ((K = P.options.buttonTheme) ===
                                              null ||
                                              K === void 0 ||
                                              K.splice(H, 1),
                                            (G = null));
                                      }
                                      return G;
                                    });
                                }),
                                this.render());
                            },
                          },
                          {
                            key: "getButtonElement",
                            value: function (v) {
                              var S,
                                P = this.buttonElements[v];
                              return P && (S = P.length > 1 ? P : P[0]), S;
                            },
                          },
                          {
                            key: "inputPatternIsValid",
                            value: function (v) {
                              var S,
                                P = this.options.inputPattern;
                              if (
                                (S =
                                  P instanceof RegExp
                                    ? P
                                    : P[
                                        this.options.inputName ||
                                          this.defaultName
                                      ]) &&
                                v
                              ) {
                                var O = S.test(v);
                                return (
                                  this.options.debug &&
                                    console.log(
                                      'inputPattern ("'
                                        .concat(S, '"): ')
                                        .concat(O ? "passed" : "did not pass!")
                                    ),
                                  O
                                );
                              }
                              return !0;
                            },
                          },
                          {
                            key: "setEventListeners",
                            value: function () {
                              if (
                                this.isFirstKeyboardInstance ||
                                !this.allKeyboardInstances
                              ) {
                                this.options.debug &&
                                  console.log(
                                    "Caret handling started (".concat(
                                      this.keyboardDOMClass,
                                      ")"
                                    )
                                  );
                                var v =
                                    this.options
                                      .physicalKeyboardHighlightPreventDefault,
                                  S = v !== void 0 && v;
                                document.addEventListener(
                                  "keyup",
                                  this.handleKeyUp,
                                  S
                                ),
                                  document.addEventListener(
                                    "keydown",
                                    this.handleKeyDown,
                                    S
                                  ),
                                  document.addEventListener(
                                    "mouseup",
                                    this.handleMouseUp
                                  ),
                                  document.addEventListener(
                                    "touchend",
                                    this.handleTouchEnd
                                  ),
                                  document.addEventListener(
                                    "selectionchange",
                                    this.handleSelectionChange
                                  ),
                                  document.addEventListener(
                                    "select",
                                    this.handleSelect
                                  );
                              }
                            },
                          },
                          {
                            key: "handleKeyUp",
                            value: function (v) {
                              this.caretEventHandler(v),
                                this.options.physicalKeyboardHighlight &&
                                  this.physicalKeyboard.handleHighlightKeyUp(v);
                            },
                          },
                          {
                            key: "handleKeyDown",
                            value: function (v) {
                              this.options.physicalKeyboardHighlight &&
                                this.physicalKeyboard.handleHighlightKeyDown(v);
                            },
                          },
                          {
                            key: "handleMouseUp",
                            value: function (v) {
                              this.caretEventHandler(v);
                            },
                          },
                          {
                            key: "handleTouchEnd",
                            value: function (v) {
                              this.caretEventHandler(v);
                            },
                          },
                          {
                            key: "handleSelect",
                            value: function (v) {
                              this.caretEventHandler(v);
                            },
                          },
                          {
                            key: "handleSelectionChange",
                            value: function (v) {
                              navigator.userAgent.includes("Firefox") ||
                                this.caretEventHandler(v);
                            },
                          },
                          {
                            key: "caretEventHandler",
                            value: function (v) {
                              var S,
                                P = this;
                              v.target.tagName &&
                                (S = v.target.tagName.toLowerCase()),
                                this.dispatch(function (O) {
                                  var D =
                                    v.target === O.keyboardDOM ||
                                    (v.target &&
                                      O.keyboardDOM.contains(v.target));
                                  if (
                                    (P.options.syncInstanceInputs &&
                                      Array.isArray(v.path) &&
                                      (D = v.path.some(function (A) {
                                        var K;
                                        return A == null ||
                                          (K = A.hasAttribute) === null ||
                                          K === void 0
                                          ? void 0
                                          : K.call(A, "data-skInstance");
                                      })),
                                    (S === "textarea" ||
                                      (S === "input" &&
                                        [
                                          "text",
                                          "search",
                                          "url",
                                          "tel",
                                          "password",
                                        ].includes(v.target.type))) &&
                                      !O.options.disableCaretPositioning)
                                  ) {
                                    var G = v.target.selectionStart,
                                      H = v.target.selectionEnd;
                                    O.options.rtl &&
                                      ((G = O.utilities.getRtlOffset(
                                        G,
                                        O.getInput()
                                      )),
                                      (H = O.utilities.getRtlOffset(
                                        H,
                                        O.getInput()
                                      ))),
                                      O.setCaretPosition(G, H),
                                      (P.activeInputElement = v.target),
                                      O.options.debug &&
                                        console.log(
                                          "Caret at: ",
                                          O.getCaretPosition(),
                                          O.getCaretPositionEnd(),
                                          v && v.target.tagName.toLowerCase(),
                                          "(".concat(O.keyboardDOMClass, ")"),
                                          v == null ? void 0 : v.type
                                        );
                                  } else (!O.options.disableCaretPositioning && D) || (v == null ? void 0 : v.type) === "selectionchange" || (O.setCaretPosition(null), (P.activeInputElement = null), O.options.debug && console.log('Caret position reset due to "'.concat(v == null ? void 0 : v.type, '" event'), v));
                                });
                            },
                          },
                          {
                            key: "recurseButtons",
                            value: function (v) {
                              var S = this;
                              v &&
                                Object.keys(this.buttonElements).forEach(
                                  function (P) {
                                    return S.buttonElements[P].forEach(v);
                                  }
                                );
                            },
                          },
                          {
                            key: "destroy",
                            value: function () {
                              this.options.debug &&
                                console.log(
                                  "Destroying simple-keyboard instance: ".concat(
                                    this.currentInstanceName
                                  )
                                );
                              var v =
                                  this.options
                                    .physicalKeyboardHighlightPreventDefault,
                                S = v !== void 0 && v;
                              document.removeEventListener(
                                "keyup",
                                this.handleKeyUp,
                                S
                              ),
                                document.removeEventListener(
                                  "keydown",
                                  this.handleKeyDown,
                                  S
                                ),
                                document.removeEventListener(
                                  "mouseup",
                                  this.handleMouseUp
                                ),
                                document.removeEventListener(
                                  "touchend",
                                  this.handleTouchEnd
                                ),
                                document.removeEventListener(
                                  "select",
                                  this.handleSelect
                                ),
                                document.removeEventListener(
                                  "selectionchange",
                                  this.handleSelectionChange
                                ),
                                (document.onpointerup = null),
                                (document.ontouchend = null),
                                (document.ontouchcancel = null),
                                (document.onmouseup = null),
                                this.recurseButtons(function (P) {
                                  P &&
                                    ((P.onpointerdown = null),
                                    (P.onpointerup = null),
                                    (P.onpointercancel = null),
                                    (P.ontouchstart = null),
                                    (P.ontouchend = null),
                                    (P.ontouchcancel = null),
                                    (P.onclick = null),
                                    (P.onmousedown = null),
                                    (P.onmouseup = null),
                                    P.remove(),
                                    (P = null));
                                }),
                                (this.keyboardDOM.onpointerdown = null),
                                (this.keyboardDOM.ontouchstart = null),
                                (this.keyboardDOM.onmousedown = null),
                                this.resetRows(),
                                this.candidateBox &&
                                  (this.candidateBox.destroy(),
                                  (this.candidateBox = null)),
                                (this.activeInputElement = null),
                                this.keyboardDOM.removeAttribute(
                                  "data-skInstance"
                                ),
                                (this.keyboardDOM.innerHTML = ""),
                                (window.SimpleKeyboardInstances[
                                  this.currentInstanceName
                                ] = null),
                                delete window.SimpleKeyboardInstances[
                                  this.currentInstanceName
                                ],
                                (this.initialized = !1);
                            },
                          },
                          {
                            key: "getButtonThemeClasses",
                            value: function (v) {
                              var S = this.options.buttonTheme,
                                P = [];
                              return (
                                Array.isArray(S) &&
                                  S.forEach(function (O) {
                                    if (
                                      O &&
                                      O.class &&
                                      typeof O.class == "string" &&
                                      O.buttons &&
                                      typeof O.buttons == "string"
                                    ) {
                                      var D = O.class.split(" ");
                                      O.buttons.split(" ").includes(v) &&
                                        (P = [].concat(Z(P), Z(D)));
                                    } else console.warn('Incorrect "buttonTheme". Please check the documentation.', O);
                                  }),
                                P
                              );
                            },
                          },
                          {
                            key: "setDOMButtonAttributes",
                            value: function (v, S) {
                              var P = this.options.buttonAttributes;
                              Array.isArray(P) &&
                                P.forEach(function (O) {
                                  O.attribute &&
                                  typeof O.attribute == "string" &&
                                  O.value &&
                                  typeof O.value == "string" &&
                                  O.buttons &&
                                  typeof O.buttons == "string"
                                    ? O.buttons.split(" ").includes(v) &&
                                      S(O.attribute, O.value)
                                    : console.warn(
                                        'Incorrect "buttonAttributes". Please check the documentation.',
                                        O
                                      );
                                });
                            },
                          },
                          {
                            key: "onTouchDeviceDetected",
                            value: function () {
                              this.processAutoTouchEvents(),
                                this.disableContextualWindow();
                            },
                          },
                          {
                            key: "disableContextualWindow",
                            value: function () {
                              window.oncontextmenu = function (v) {
                                if (v.target.classList.contains("hg-button"))
                                  return (
                                    v.preventDefault(), v.stopPropagation(), !1
                                  );
                              };
                            },
                          },
                          {
                            key: "processAutoTouchEvents",
                            value: function () {
                              this.options.autoUseTouchEvents &&
                                ((this.options.useTouchEvents = !0),
                                this.options.debug &&
                                  console.log(
                                    "autoUseTouchEvents: Touch device detected, useTouchEvents enabled."
                                  ));
                            },
                          },
                          {
                            key: "onInit",
                            value: function () {
                              this.options.debug &&
                                console.log(
                                  "".concat(
                                    this.keyboardDOMClass,
                                    " Initialized"
                                  )
                                ),
                                this.setEventListeners(),
                                typeof this.options.onInit == "function" &&
                                  this.options.onInit(this);
                            },
                          },
                          {
                            key: "beforeFirstRender",
                            value: function () {
                              this.utilities.isTouchDevice() &&
                                this.onTouchDeviceDetected(),
                                typeof this.options.beforeFirstRender ==
                                  "function" &&
                                  this.options.beforeFirstRender(this),
                                this.isFirstKeyboardInstance &&
                                  this.utilities.pointerEventsSupported() &&
                                  !this.options.useTouchEvents &&
                                  !this.options.useMouseEvents &&
                                  this.options.debug &&
                                  console.log(
                                    "Using PointerEvents as it is supported by this browser"
                                  ),
                                this.options.useTouchEvents &&
                                  this.options.debug &&
                                  console.log(
                                    "useTouchEvents has been enabled. Only touch events will be used."
                                  );
                            },
                          },
                          {
                            key: "beforeRender",
                            value: function () {
                              typeof this.options.beforeRender == "function" &&
                                this.options.beforeRender(this);
                            },
                          },
                          {
                            key: "onRender",
                            value: function () {
                              typeof this.options.onRender == "function" &&
                                this.options.onRender(this);
                            },
                          },
                          {
                            key: "onModulesLoaded",
                            value: function () {
                              typeof this.options.onModulesLoaded ==
                                "function" &&
                                this.options.onModulesLoaded(this);
                            },
                          },
                          {
                            key: "loadModules",
                            value: function () {
                              var v = this;
                              Array.isArray(this.options.modules) &&
                                (this.options.modules.forEach(function (S) {
                                  var P = new S(v);
                                  P.init && P.init(v);
                                }),
                                (this.keyboardPluginClasses = "modules-loaded"),
                                this.render(),
                                this.onModulesLoaded());
                            },
                          },
                          {
                            key: "getModuleProp",
                            value: function (v, S) {
                              return !!this.modules[v] && this.modules[v][S];
                            },
                          },
                          {
                            key: "getModulesList",
                            value: function () {
                              return Object.keys(this.modules);
                            },
                          },
                          {
                            key: "parseRowDOMContainers",
                            value: function (v, S, P, O) {
                              var D = this,
                                G = Array.from(v.children),
                                H = 0;
                              return (
                                G.length &&
                                  P.forEach(function (A, K) {
                                    var oe = O[K];
                                    if (!(oe && oe > A)) return !1;
                                    var Q = A - H,
                                      Y = oe - H,
                                      re = document.createElement("div");
                                    re.className += "hg-button-container";
                                    var q = ""
                                      .concat(D.options.layoutName, "-r")
                                      .concat(S, "c")
                                      .concat(K);
                                    re.setAttribute("data-skUID", q);
                                    var se = G.splice(Q, Y - Q + 1);
                                    (H = Y - Q),
                                      se.forEach(function (me) {
                                        return re.appendChild(me);
                                      }),
                                      G.splice(Q, 0, re),
                                      (v.innerHTML = ""),
                                      G.forEach(function (me) {
                                        return v.appendChild(me);
                                      }),
                                      D.options.debug &&
                                        console.log(
                                          "rowDOMContainer",
                                          se,
                                          Q,
                                          Y,
                                          H + 1
                                        );
                                  }),
                                v
                              );
                            },
                          },
                          {
                            key: "render",
                            value: function () {
                              var v = this;
                              this.resetRows(),
                                this.initialized || this.beforeFirstRender(),
                                this.beforeRender();
                              var S = "hg-layout-".concat(
                                  this.options.layoutName
                                ),
                                P = this.options.layout || {
                                  default: [
                                    "` 1 2 3 4 5 6 7 8 9 0 - = {bksp}",
                                    "{tab} q w e r t y u i o p [ ] \\",
                                    "{lock} a s d f g h j k l ; ' {enter}",
                                    "{shift} z x c v b n m , . / {shift}",
                                    ".com @ {space}",
                                  ],
                                  shift: [
                                    "~ ! @ # $ % ^ & * ( ) _ + {bksp}",
                                    "{tab} Q W E R T Y U I O P { } |",
                                    '{lock} A S D F G H J K L : " {enter}',
                                    "{shift} Z X C V B N M < > ? {shift}",
                                    ".com @ {space}",
                                  ],
                                },
                                O = this.options.useTouchEvents || !1,
                                D = O ? "hg-touch-events" : "",
                                G = this.options.useMouseEvents || !1,
                                H = this.options.disableRowButtonContainers;
                              (this.keyboardDOM.className =
                                this.getKeyboardClassString(
                                  this.options.theme,
                                  S,
                                  this.keyboardPluginClasses,
                                  D
                                )),
                                this.keyboardDOM.setAttribute(
                                  "data-skInstance",
                                  this.currentInstanceName
                                ),
                                (this.keyboardRowsDOM =
                                  document.createElement("div")),
                                (this.keyboardRowsDOM.className = "hg-rows"),
                                P[
                                  this.options.layoutName || this.defaultName
                                ].forEach(function (A, K) {
                                  var oe = A.split(" ");
                                  v.options.excludeFromLayout &&
                                    v.options.excludeFromLayout[
                                      v.options.layoutName || v.defaultName
                                    ] &&
                                    (oe = oe.filter(function (q) {
                                      return (
                                        v.options.excludeFromLayout &&
                                        !v.options.excludeFromLayout[
                                          v.options.layoutName || v.defaultName
                                        ].includes(q)
                                      );
                                    }));
                                  var Q = document.createElement("div");
                                  Q.className += "hg-row";
                                  var Y = [],
                                    re = [];
                                  oe.forEach(function (q, se) {
                                    var me,
                                      je =
                                        !H &&
                                        typeof q == "string" &&
                                        q.length > 1 &&
                                        q.indexOf("[") === 0,
                                      Se =
                                        !H &&
                                        typeof q == "string" &&
                                        q.length > 1 &&
                                        q.indexOf("]") === q.length - 1;
                                    je &&
                                      (Y.push(se), (q = q.replace(/\[/g, ""))),
                                      Se &&
                                        (re.push(se),
                                        (q = q.replace(/\]/g, "")));
                                    var De = v.utilities.getButtonClass(q),
                                      _e = v.utilities.getButtonDisplayName(
                                        q,
                                        v.options.display,
                                        v.options.mergeDisplay
                                      ),
                                      fn = v.options.useButtonTag
                                        ? "button"
                                        : "div",
                                      Ee = document.createElement(fn);
                                    (Ee.className += "hg-button ".concat(De)),
                                      (me = Ee.classList).add.apply(
                                        me,
                                        Z(v.getButtonThemeClasses(q))
                                      ),
                                      v.setDOMButtonAttributes(
                                        q,
                                        function (ce, dn) {
                                          Ee.setAttribute(ce, dn);
                                        }
                                      ),
                                      (v.activeButtonClass = "hg-activeButton"),
                                      !v.utilities.pointerEventsSupported() ||
                                      O ||
                                      G
                                        ? O
                                          ? ((Ee.ontouchstart = function (ce) {
                                              v.handleButtonClicked(q, ce),
                                                v.handleButtonMouseDown(q, ce);
                                            }),
                                            (Ee.ontouchend = function (ce) {
                                              v.handleButtonMouseUp(q, ce);
                                            }),
                                            (Ee.ontouchcancel = function (ce) {
                                              v.handleButtonMouseUp(q, ce);
                                            }))
                                          : ((Ee.onclick = function (ce) {
                                              v.setMouseHold(!1),
                                                typeof v.options
                                                  .onKeyReleased !=
                                                  "function" &&
                                                  v.handleButtonClicked(q, ce);
                                            }),
                                            (Ee.onmousedown = function (ce) {
                                              typeof v.options.onKeyReleased !=
                                                "function" ||
                                                v.isMouseHold ||
                                                v.handleButtonClicked(q, ce),
                                                v.handleButtonMouseDown(q, ce);
                                            }),
                                            (Ee.onmouseup = function (ce) {
                                              v.handleButtonMouseUp(q, ce);
                                            }))
                                        : ((Ee.onpointerdown = function (ce) {
                                            v.handleButtonClicked(q, ce),
                                              v.handleButtonMouseDown(q, ce);
                                          }),
                                          (Ee.onpointerup = function (ce) {
                                            v.handleButtonMouseUp(q, ce);
                                          }),
                                          (Ee.onpointercancel = function (ce) {
                                            v.handleButtonMouseUp(q, ce);
                                          })),
                                      Ee.setAttribute("data-skBtn", q);
                                    var Ct = ""
                                      .concat(v.options.layoutName, "-r")
                                      .concat(K, "b")
                                      .concat(se);
                                    Ee.setAttribute("data-skBtnUID", Ct);
                                    var Ne = document.createElement("span");
                                    (Ne.innerHTML = _e),
                                      Ee.appendChild(Ne),
                                      v.buttonElements[q] ||
                                        (v.buttonElements[q] = []),
                                      v.buttonElements[q].push(Ee),
                                      Q.appendChild(Ee);
                                  }),
                                    (Q = v.parseRowDOMContainers(Q, K, Y, re)),
                                    v.keyboardRowsDOM.appendChild(Q);
                                }),
                                this.keyboardDOM.appendChild(
                                  this.keyboardRowsDOM
                                ),
                                this.onRender(),
                                this.initialized ||
                                  ((this.initialized = !0),
                                  !this.utilities.pointerEventsSupported() ||
                                  O ||
                                  G
                                    ? O
                                      ? ((document.ontouchend = function (A) {
                                          return v.handleButtonMouseUp(
                                            void 0,
                                            A
                                          );
                                        }),
                                        (document.ontouchcancel = function (A) {
                                          return v.handleButtonMouseUp(
                                            void 0,
                                            A
                                          );
                                        }),
                                        (this.keyboardDOM.ontouchstart =
                                          function (A) {
                                            return v.handleKeyboardContainerMouseDown(
                                              A
                                            );
                                          }))
                                      : O ||
                                        ((document.onmouseup = function (A) {
                                          return v.handleButtonMouseUp(
                                            void 0,
                                            A
                                          );
                                        }),
                                        (this.keyboardDOM.onmousedown =
                                          function (A) {
                                            return v.handleKeyboardContainerMouseDown(
                                              A
                                            );
                                          }))
                                    : ((document.onpointerup = function (A) {
                                        return v.handleButtonMouseUp(void 0, A);
                                      }),
                                      (this.keyboardDOM.onpointerdown =
                                        function (A) {
                                          return v.handleKeyboardContainerMouseDown(
                                            A
                                          );
                                        })),
                                  this.onInit());
                            },
                          },
                        ]),
                        U && V(L.prototype, U),
                        Object.defineProperty(L, "prototype", { writable: !1 }),
                        z
                      );
                    })(),
                    ae = ne,
                    ie = ne;
                })(),
                F
              );
            })();
          },
          787: function (y) {
            y.exports = n;
          },
        },
        i = {};
      function l(y) {
        var x = i[y];
        if (x !== void 0) return x.exports;
        var b = (i[y] = { exports: {} });
        return r[y].call(b.exports, b, b.exports, l), b.exports;
      }
      (l.n = function (y) {
        var x =
          y && y.__esModule
            ? function () {
                return y.default;
              }
            : function () {
                return y;
              };
        return l.d(x, { a: x }), x;
      }),
        (l.d = function (y, x) {
          for (var b in x)
            l.o(x, b) &&
              !l.o(y, b) &&
              Object.defineProperty(y, b, { enumerable: !0, get: x[b] });
        }),
        (l.o = function (y, x) {
          return Object.prototype.hasOwnProperty.call(y, x);
        }),
        (l.r = function (y) {
          typeof Symbol < "u" &&
            Symbol.toStringTag &&
            Object.defineProperty(y, Symbol.toStringTag, { value: "Module" }),
            Object.defineProperty(y, "__esModule", { value: !0 });
        });
      var c = {};
      return (
        (function () {
          l.r(c),
            l.d(c, {
              KeyboardReact: function () {
                return s;
              },
              default: function () {
                return h;
              },
            }),
            l(752);
          var y = l(787),
            x = l(86),
            b = l.n(x);
          function R(u) {
            return (
              (R =
                typeof Symbol == "function" &&
                typeof Symbol.iterator == "symbol"
                  ? function (a) {
                      return typeof a;
                    }
                  : function (a) {
                      return a &&
                        typeof Symbol == "function" &&
                        a.constructor === Symbol &&
                        a !== Symbol.prototype
                        ? "symbol"
                        : typeof a;
                    }),
              R(u)
            );
          }
          function F(u, a) {
            var p = Object.keys(u);
            if (Object.getOwnPropertySymbols) {
              var m = Object.getOwnPropertySymbols(u);
              a &&
                (m = m.filter(function (d) {
                  return Object.getOwnPropertyDescriptor(u, d).enumerable;
                })),
                p.push.apply(p, m);
            }
            return p;
          }
          function f(u) {
            for (var a = 1; a < arguments.length; a++) {
              var p = arguments[a] != null ? arguments[a] : {};
              a % 2
                ? F(Object(p), !0).forEach(function (m) {
                    k(u, m, p[m]);
                  })
                : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(
                    u,
                    Object.getOwnPropertyDescriptors(p)
                  )
                : F(Object(p)).forEach(function (m) {
                    Object.defineProperty(
                      u,
                      m,
                      Object.getOwnPropertyDescriptor(p, m)
                    );
                  });
            }
            return u;
          }
          function k(u, a, p) {
            var m;
            return (
              (m = (function (d, w) {
                if (R(d) != "object" || !d) return d;
                var g = d[Symbol.toPrimitive];
                if (g !== void 0) {
                  var E = g.call(d, w || "default");
                  if (R(E) != "object") return E;
                  throw new TypeError(
                    "@@toPrimitive must return a primitive value."
                  );
                }
                return (w === "string" ? String : Number)(d);
              })(a, "string")),
              (a = R(m) == "symbol" ? m : String(m)) in u
                ? Object.defineProperty(u, a, {
                    value: p,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                  })
                : (u[a] = p),
              u
            );
          }
          var o = function (u) {
              return f(f({}, u), {}, { keyboardRef: null });
            },
            s = function (u) {
              var a = u.baseClass || "react-simple-keyboard",
                p = y.useRef(null),
                m = y.useRef(null),
                d = y.useRef(null),
                w = y.useRef(u);
              return (
                y.useEffect(function () {
                  return function () {
                    d.current && d.current.destroy(), (p.current = !1);
                  };
                }, []),
                y.useEffect(
                  function () {
                    var g = (function (N) {
                      return f(
                        f({}, N),
                        {},
                        {
                          theme: "simple-keyboard ".concat(
                            N.theme || "hg-theme-default"
                          ),
                        }
                      );
                    })(u);
                    if (!p.current) {
                      (p.current = !0),
                        g.debug && console.log("ReactSimpleKeyboard: Init");
                      var E = m.current,
                        _ = ".".concat(a);
                      (d.current = new (b())(E || _, g)),
                        g.keyboardRef && g.keyboardRef(d.current);
                    }
                    var I = (function (N, C) {
                      var T = o(C),
                        M = o(N);
                      return Object.keys(T).filter(function (Z) {
                        return T[Z] !== M[Z];
                      });
                    })(w.current, g);
                    if (I.length) {
                      var j = d.current;
                      (w.current = g),
                        j == null || j.setOptions(g),
                        g.debug &&
                          console.log(
                            "ReactSimpleKeyboard - setOptions called due to updated props:",
                            I
                          );
                    }
                  },
                  [p, a, w, u]
                ),
                y.createElement("div", { className: a, ref: m })
              );
            },
            h = s;
        })(),
        c
      );
    })();
  });
})(Af);
var lm = Af.exports;
const um = "_keyboard_1mlsg_1",
  am = { keyboard: um },
  sm = {
    default: [
      "1 2 3 4 5 6 7 8 9 0 -",
      "q w e r t y u i o p",
      "a s d f g h j k l",
      "{enter} z x c v b n m {backspace}",
    ],
  },
  cm = { "{backspace}": "⌫", "{enter}": "⏎" };
function fm({ handleKey: e }) {
  const t = ee.useCallback(
    (n) => {
      switch (n) {
        case "{backspace}":
          e("Backspace");
          break;
        case "{enter}":
          e("Enter");
          break;
        default:
          e(n);
      }
    },
    [e]
  );
  return ue.jsx(lm.KeyboardReact, {
    layoutName: "default",
    layout: sm,
    display: cm,
    onKeyReleased: t,
    theme: bn("hg-theme-default", am.keyboard),
  });
}
const dm = /[a-zA-Z0-9-]/;
function pm({
  word: e,
  startIndex: t,
  getLetter: n,
  setLetter: r,
  setCursorPoint: i,
  exit: l,
}) {
  const [c, y] = ee.useState(t ?? 0),
    [x, b] = ee.useState(!1);
  ee.useEffect(() => {
    t !== void 0 && y(t);
  }, [t]),
    ee.useEffect(() => {
      i(e[c]);
    }, [c, i, e]);
  const R = ee.useCallback(
    (F) => {
      const f = e[c];
      if (((F === "Enter" || F === "Escape") && b(!0), F === "Backspace")) {
        if (n(f.x, f.y).trim()) r(f.x, f.y, "");
        else if (c === 0) b(!0);
        else {
          const k = e[c - 1];
          r(k.x, k.y, "");
        }
        y(Math.max(0, c - 1));
      }
      (F === "ArrowLeft" || F === "ArrowUp") && c > 0 && y(c - 1),
        (F === "ArrowRight" || F === "ArrowDown") &&
          c < e.length - 1 &&
          y(c + 1),
        F.length === 1 &&
          dm.test(F) &&
          (r(f.x, f.y, F.toUpperCase()), c >= e.length - 1 ? b(!0) : y(c + 1));
    },
    [c, n, r, e]
  );
  return (
    ee.useEffect(() => {
      x && l();
    }, [l, x]),
    $u() ? ue.jsx(fm, { handleKey: R }) : ue.jsx(hm, { handleKey: R, exit: l })
  );
}
function hm({ handleKey: e, exit: t }) {
  const n = ee.useRef(null);
  ee.useEffect(() => {
    var i;
    (i = n.current) == null || i.focus();
  }, []);
  const r = ee.useCallback(
    (i) => {
      i.preventDefault(), i.stopPropagation(), e(i.key);
    },
    [e]
  );
  return ue.jsxs(ue.Fragment, {
    children: [
      ue.jsx("input", {
        className: ds.hiddenInput,
        ref: n,
        onKeyDown: r,
        onBlur: t,
        type: "text",
        autoComplete: "false",
        autoCorrect: "false",
      }),
      ue.jsx("div", { className: ds.curtain }),
    ],
  });
}
var Ff = { exports: {} };
(function (e) {
  (function (t) {
    function n(d, w) {
      var g = (d & 65535) + (w & 65535),
        E = (d >> 16) + (w >> 16) + (g >> 16);
      return (E << 16) | (g & 65535);
    }
    function r(d, w) {
      return (d << w) | (d >>> (32 - w));
    }
    function i(d, w, g, E, _, I) {
      return n(r(n(n(w, d), n(E, I)), _), g);
    }
    function l(d, w, g, E, _, I, j) {
      return i((w & g) | (~w & E), d, w, _, I, j);
    }
    function c(d, w, g, E, _, I, j) {
      return i((w & E) | (g & ~E), d, w, _, I, j);
    }
    function y(d, w, g, E, _, I, j) {
      return i(w ^ g ^ E, d, w, _, I, j);
    }
    function x(d, w, g, E, _, I, j) {
      return i(g ^ (w | ~E), d, w, _, I, j);
    }
    function b(d, w) {
      (d[w >> 5] |= 128 << w % 32), (d[(((w + 64) >>> 9) << 4) + 14] = w);
      var g,
        E,
        _,
        I,
        j,
        N = 1732584193,
        C = -271733879,
        T = -1732584194,
        M = 271733878;
      for (g = 0; g < d.length; g += 16)
        (E = N),
          (_ = C),
          (I = T),
          (j = M),
          (N = l(N, C, T, M, d[g], 7, -680876936)),
          (M = l(M, N, C, T, d[g + 1], 12, -389564586)),
          (T = l(T, M, N, C, d[g + 2], 17, 606105819)),
          (C = l(C, T, M, N, d[g + 3], 22, -1044525330)),
          (N = l(N, C, T, M, d[g + 4], 7, -176418897)),
          (M = l(M, N, C, T, d[g + 5], 12, 1200080426)),
          (T = l(T, M, N, C, d[g + 6], 17, -1473231341)),
          (C = l(C, T, M, N, d[g + 7], 22, -45705983)),
          (N = l(N, C, T, M, d[g + 8], 7, 1770035416)),
          (M = l(M, N, C, T, d[g + 9], 12, -1958414417)),
          (T = l(T, M, N, C, d[g + 10], 17, -42063)),
          (C = l(C, T, M, N, d[g + 11], 22, -1990404162)),
          (N = l(N, C, T, M, d[g + 12], 7, 1804603682)),
          (M = l(M, N, C, T, d[g + 13], 12, -40341101)),
          (T = l(T, M, N, C, d[g + 14], 17, -1502002290)),
          (C = l(C, T, M, N, d[g + 15], 22, 1236535329)),
          (N = c(N, C, T, M, d[g + 1], 5, -165796510)),
          (M = c(M, N, C, T, d[g + 6], 9, -1069501632)),
          (T = c(T, M, N, C, d[g + 11], 14, 643717713)),
          (C = c(C, T, M, N, d[g], 20, -373897302)),
          (N = c(N, C, T, M, d[g + 5], 5, -701558691)),
          (M = c(M, N, C, T, d[g + 10], 9, 38016083)),
          (T = c(T, M, N, C, d[g + 15], 14, -660478335)),
          (C = c(C, T, M, N, d[g + 4], 20, -405537848)),
          (N = c(N, C, T, M, d[g + 9], 5, 568446438)),
          (M = c(M, N, C, T, d[g + 14], 9, -1019803690)),
          (T = c(T, M, N, C, d[g + 3], 14, -187363961)),
          (C = c(C, T, M, N, d[g + 8], 20, 1163531501)),
          (N = c(N, C, T, M, d[g + 13], 5, -1444681467)),
          (M = c(M, N, C, T, d[g + 2], 9, -51403784)),
          (T = c(T, M, N, C, d[g + 7], 14, 1735328473)),
          (C = c(C, T, M, N, d[g + 12], 20, -1926607734)),
          (N = y(N, C, T, M, d[g + 5], 4, -378558)),
          (M = y(M, N, C, T, d[g + 8], 11, -2022574463)),
          (T = y(T, M, N, C, d[g + 11], 16, 1839030562)),
          (C = y(C, T, M, N, d[g + 14], 23, -35309556)),
          (N = y(N, C, T, M, d[g + 1], 4, -1530992060)),
          (M = y(M, N, C, T, d[g + 4], 11, 1272893353)),
          (T = y(T, M, N, C, d[g + 7], 16, -155497632)),
          (C = y(C, T, M, N, d[g + 10], 23, -1094730640)),
          (N = y(N, C, T, M, d[g + 13], 4, 681279174)),
          (M = y(M, N, C, T, d[g], 11, -358537222)),
          (T = y(T, M, N, C, d[g + 3], 16, -722521979)),
          (C = y(C, T, M, N, d[g + 6], 23, 76029189)),
          (N = y(N, C, T, M, d[g + 9], 4, -640364487)),
          (M = y(M, N, C, T, d[g + 12], 11, -421815835)),
          (T = y(T, M, N, C, d[g + 15], 16, 530742520)),
          (C = y(C, T, M, N, d[g + 2], 23, -995338651)),
          (N = x(N, C, T, M, d[g], 6, -198630844)),
          (M = x(M, N, C, T, d[g + 7], 10, 1126891415)),
          (T = x(T, M, N, C, d[g + 14], 15, -1416354905)),
          (C = x(C, T, M, N, d[g + 5], 21, -57434055)),
          (N = x(N, C, T, M, d[g + 12], 6, 1700485571)),
          (M = x(M, N, C, T, d[g + 3], 10, -1894986606)),
          (T = x(T, M, N, C, d[g + 10], 15, -1051523)),
          (C = x(C, T, M, N, d[g + 1], 21, -2054922799)),
          (N = x(N, C, T, M, d[g + 8], 6, 1873313359)),
          (M = x(M, N, C, T, d[g + 15], 10, -30611744)),
          (T = x(T, M, N, C, d[g + 6], 15, -1560198380)),
          (C = x(C, T, M, N, d[g + 13], 21, 1309151649)),
          (N = x(N, C, T, M, d[g + 4], 6, -145523070)),
          (M = x(M, N, C, T, d[g + 11], 10, -1120210379)),
          (T = x(T, M, N, C, d[g + 2], 15, 718787259)),
          (C = x(C, T, M, N, d[g + 9], 21, -343485551)),
          (N = n(N, E)),
          (C = n(C, _)),
          (T = n(T, I)),
          (M = n(M, j));
      return [N, C, T, M];
    }
    function R(d) {
      var w,
        g = "",
        E = d.length * 32;
      for (w = 0; w < E; w += 8)
        g += String.fromCharCode((d[w >> 5] >>> w % 32) & 255);
      return g;
    }
    function F(d) {
      var w,
        g = [];
      for (g[(d.length >> 2) - 1] = void 0, w = 0; w < g.length; w += 1)
        g[w] = 0;
      var E = d.length * 8;
      for (w = 0; w < E; w += 8)
        g[w >> 5] |= (d.charCodeAt(w / 8) & 255) << w % 32;
      return g;
    }
    function f(d) {
      return R(b(F(d), d.length * 8));
    }
    function k(d, w) {
      var g,
        E = F(d),
        _ = [],
        I = [],
        j;
      for (
        _[15] = I[15] = void 0,
          E.length > 16 && (E = b(E, d.length * 8)),
          g = 0;
        g < 16;
        g += 1
      )
        (_[g] = E[g] ^ 909522486), (I[g] = E[g] ^ 1549556828);
      return (
        (j = b(_.concat(F(w)), 512 + w.length * 8)), R(b(I.concat(j), 640))
      );
    }
    function o(d) {
      var w = "0123456789abcdef",
        g = "",
        E,
        _;
      for (_ = 0; _ < d.length; _ += 1)
        (E = d.charCodeAt(_)),
          (g += w.charAt((E >>> 4) & 15) + w.charAt(E & 15));
      return g;
    }
    function s(d) {
      return unescape(encodeURIComponent(d));
    }
    function h(d) {
      return f(s(d));
    }
    function u(d) {
      return o(h(d));
    }
    function a(d, w) {
      return k(s(d), s(w));
    }
    function p(d, w) {
      return o(a(d, w));
    }
    function m(d, w, g) {
      return w ? (g ? a(w, d) : p(w, d)) : g ? h(d) : u(d);
    }
    e.exports ? (e.exports = m) : (t.md5 = m);
  })(ws);
})(Ff);
var mm = Ff.exports;
const vm = Vl(mm),
  ym = "3f2495dbcea4bdf810bdf48ea8b93ffd",
  gm = "983fd005d4967506855aebfc2b809506";
function wm(e) {
  const t = vm(e);
  return t === gm ? "hard-win" : t === ym ? "easy-win" : "loss";
}
const xm = "_lock_aohje_1",
  km = "_hard_aohje_11",
  Sm = "_open_aohje_17",
  Vi = { lock: xm, hard: km, open: Sm };
function ps({ open: e, hard: t }) {
  return ue.jsx("img", {
    className: bn(Vi.lock, { [Vi.hard]: !!t, [Vi.open]: !!e }),
    src: e ? "./unlock.png" : "./lock.png",
  });
}
const Em = "_win_1tmkx_1",
  Cm = "_visible_1tmkx_20",
  Om = "_form_1tmkx_24",
  Xi = { win: Em, visible: Cm, form: Om },
  hs = (e) => {
    e = (1831565813 + (e |= 0)) | 0;
    let t = Math.imul(e ^ (e >>> 15), 1 | e);
    return (
      (t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t),
      ((t ^ (t >>> 14)) >>> 0) / 4294967296
    );
  };
class Pm {
  constructor(t) {
    (this.dictionaries = void 0),
      (this.length = void 0),
      (this.separator = void 0),
      (this.style = void 0),
      (this.seed = void 0);
    const { length: n, separator: r, dictionaries: i, style: l, seed: c } = t;
    (this.dictionaries = i),
      (this.separator = r),
      (this.length = n),
      (this.style = l),
      (this.seed = c);
  }
  generate() {
    if (!this.dictionaries)
      throw new Error(
        'Cannot find any dictionary. Please provide at least one, or leave the "dictionary" field empty in the config object'
      );
    if (this.length <= 0) throw new Error("Invalid length provided");
    if (this.length > this.dictionaries.length)
      throw new Error(`The length cannot be bigger than the number of dictionaries.
Length provided: ${this.length}. Number of dictionaries provided: ${this.dictionaries.length}`);
    let t = this.seed;
    return this.dictionaries.slice(0, this.length).reduce((n, r) => {
      let i;
      t
        ? ((i = ((c) => {
            if (typeof c == "string") {
              const y = c
                  .split("")
                  .map((b) => b.charCodeAt(0))
                  .reduce((b, R) => b + R, 1),
                x = Math.floor(Number(y));
              return hs(x);
            }
            return hs(c);
          })(t)),
          (t = 4294967296 * i))
        : (i = Math.random());
      let l = r[Math.floor(i * r.length)] || "";
      if (this.style === "lowerCase") l = l.toLowerCase();
      else if (this.style === "capital") {
        const [c, ...y] = l.split("");
        l = c.toUpperCase() + y.join("");
      } else this.style === "upperCase" && (l = l.toUpperCase());
      return n ? `${n}${this.separator}${l}` : `${l}`;
    }, "");
  }
}
const ms = { separator: "_", dictionaries: [] },
  bm = (e) => {
    const t = [...((e && e.dictionaries) || ms.dictionaries)],
      n = { ...ms, ...e, length: (e && e.length) || t.length, dictionaries: t };
    if (!e || !e.dictionaries || !e.dictionaries.length)
      throw new Error(
        'A "dictionaries" array must be provided. This is a breaking change introduced starting from Unique Name Generator v4. Read more about the breaking change here: https://github.com/andreasonny83/unique-names-generator#migration-guide'
      );
    return new Pm(n).generate();
  };
var _m = [
    "able",
    "above",
    "absent",
    "absolute",
    "abstract",
    "abundant",
    "academic",
    "acceptable",
    "accepted",
    "accessible",
    "accurate",
    "accused",
    "active",
    "actual",
    "acute",
    "added",
    "additional",
    "adequate",
    "adjacent",
    "administrative",
    "adorable",
    "advanced",
    "adverse",
    "advisory",
    "aesthetic",
    "afraid",
    "aggregate",
    "aggressive",
    "agreeable",
    "agreed",
    "agricultural",
    "alert",
    "alive",
    "alleged",
    "allied",
    "alone",
    "alright",
    "alternative",
    "amateur",
    "amazing",
    "ambitious",
    "amused",
    "ancient",
    "angry",
    "annoyed",
    "annual",
    "anonymous",
    "anxious",
    "appalling",
    "apparent",
    "applicable",
    "appropriate",
    "arbitrary",
    "architectural",
    "armed",
    "arrogant",
    "artificial",
    "artistic",
    "ashamed",
    "asleep",
    "assistant",
    "associated",
    "atomic",
    "attractive",
    "automatic",
    "autonomous",
    "available",
    "average",
    "awake",
    "aware",
    "awful",
    "awkward",
    "back",
    "bad",
    "balanced",
    "bare",
    "basic",
    "beautiful",
    "beneficial",
    "better",
    "bewildered",
    "big",
    "binding",
    "biological",
    "bitter",
    "bizarre",
    "blank",
    "blind",
    "blonde",
    "bloody",
    "blushing",
    "boiling",
    "bold",
    "bored",
    "boring",
    "bottom",
    "brainy",
    "brave",
    "breakable",
    "breezy",
    "brief",
    "bright",
    "brilliant",
    "broad",
    "broken",
    "bumpy",
    "burning",
    "busy",
    "calm",
    "capable",
    "capitalist",
    "careful",
    "casual",
    "causal",
    "cautious",
    "central",
    "certain",
    "changing",
    "characteristic",
    "charming",
    "cheap",
    "cheerful",
    "chemical",
    "chief",
    "chilly",
    "chosen",
    "christian",
    "chronic",
    "chubby",
    "circular",
    "civic",
    "civil",
    "civilian",
    "classic",
    "classical",
    "clean",
    "clear",
    "clever",
    "clinical",
    "close",
    "closed",
    "cloudy",
    "clumsy",
    "coastal",
    "cognitive",
    "coherent",
    "cold",
    "collective",
    "colonial",
    "colorful",
    "colossal",
    "coloured",
    "colourful",
    "combative",
    "combined",
    "comfortable",
    "coming",
    "commercial",
    "common",
    "communist",
    "compact",
    "comparable",
    "comparative",
    "compatible",
    "competent",
    "competitive",
    "complete",
    "complex",
    "complicated",
    "comprehensive",
    "compulsory",
    "conceptual",
    "concerned",
    "concrete",
    "condemned",
    "confident",
    "confidential",
    "confused",
    "conscious",
    "conservation",
    "conservative",
    "considerable",
    "consistent",
    "constant",
    "constitutional",
    "contemporary",
    "content",
    "continental",
    "continued",
    "continuing",
    "continuous",
    "controlled",
    "controversial",
    "convenient",
    "conventional",
    "convinced",
    "convincing",
    "cooing",
    "cool",
    "cooperative",
    "corporate",
    "correct",
    "corresponding",
    "costly",
    "courageous",
    "crazy",
    "creative",
    "creepy",
    "criminal",
    "critical",
    "crooked",
    "crowded",
    "crucial",
    "crude",
    "cruel",
    "cuddly",
    "cultural",
    "curious",
    "curly",
    "current",
    "curved",
    "cute",
    "daily",
    "damaged",
    "damp",
    "dangerous",
    "dark",
    "dead",
    "deaf",
    "deafening",
    "dear",
    "decent",
    "decisive",
    "deep",
    "defeated",
    "defensive",
    "defiant",
    "definite",
    "deliberate",
    "delicate",
    "delicious",
    "delighted",
    "delightful",
    "democratic",
    "dependent",
    "depressed",
    "desirable",
    "desperate",
    "detailed",
    "determined",
    "developed",
    "developing",
    "devoted",
    "different",
    "difficult",
    "digital",
    "diplomatic",
    "direct",
    "dirty",
    "disabled",
    "disappointed",
    "disastrous",
    "disciplinary",
    "disgusted",
    "distant",
    "distinct",
    "distinctive",
    "distinguished",
    "disturbed",
    "disturbing",
    "diverse",
    "divine",
    "dizzy",
    "domestic",
    "dominant",
    "double",
    "doubtful",
    "drab",
    "dramatic",
    "dreadful",
    "driving",
    "drunk",
    "dry",
    "dual",
    "due",
    "dull",
    "dusty",
    "dutch",
    "dying",
    "dynamic",
    "eager",
    "early",
    "eastern",
    "easy",
    "economic",
    "educational",
    "eerie",
    "effective",
    "efficient",
    "elaborate",
    "elated",
    "elderly",
    "eldest",
    "electoral",
    "electric",
    "electrical",
    "electronic",
    "elegant",
    "eligible",
    "embarrassed",
    "embarrassing",
    "emotional",
    "empirical",
    "empty",
    "enchanting",
    "encouraging",
    "endless",
    "energetic",
    "enormous",
    "enthusiastic",
    "entire",
    "entitled",
    "envious",
    "environmental",
    "equal",
    "equivalent",
    "essential",
    "established",
    "estimated",
    "ethical",
    "ethnic",
    "eventual",
    "everyday",
    "evident",
    "evil",
    "evolutionary",
    "exact",
    "excellent",
    "exceptional",
    "excess",
    "excessive",
    "excited",
    "exciting",
    "exclusive",
    "existing",
    "exotic",
    "expected",
    "expensive",
    "experienced",
    "experimental",
    "explicit",
    "extended",
    "extensive",
    "external",
    "extra",
    "extraordinary",
    "extreme",
    "exuberant",
    "faint",
    "fair",
    "faithful",
    "familiar",
    "famous",
    "fancy",
    "fantastic",
    "far",
    "fascinating",
    "fashionable",
    "fast",
    "fat",
    "fatal",
    "favourable",
    "favourite",
    "federal",
    "fellow",
    "female",
    "feminist",
    "few",
    "fierce",
    "filthy",
    "final",
    "financial",
    "fine",
    "firm",
    "fiscal",
    "fit",
    "fixed",
    "flaky",
    "flat",
    "flexible",
    "fluffy",
    "fluttering",
    "flying",
    "following",
    "fond",
    "foolish",
    "foreign",
    "formal",
    "formidable",
    "forthcoming",
    "fortunate",
    "forward",
    "fragile",
    "frail",
    "frantic",
    "free",
    "frequent",
    "fresh",
    "friendly",
    "frightened",
    "front",
    "frozen",
    "full",
    "fun",
    "functional",
    "fundamental",
    "funny",
    "furious",
    "future",
    "fuzzy",
    "gastric",
    "gay",
    "general",
    "generous",
    "genetic",
    "gentle",
    "genuine",
    "geographical",
    "giant",
    "gigantic",
    "given",
    "glad",
    "glamorous",
    "gleaming",
    "global",
    "glorious",
    "golden",
    "good",
    "gorgeous",
    "gothic",
    "governing",
    "graceful",
    "gradual",
    "grand",
    "grateful",
    "greasy",
    "great",
    "grieving",
    "grim",
    "gross",
    "grotesque",
    "growing",
    "grubby",
    "grumpy",
    "guilty",
    "handicapped",
    "handsome",
    "happy",
    "hard",
    "harsh",
    "head",
    "healthy",
    "heavy",
    "helpful",
    "helpless",
    "hidden",
    "high",
    "hilarious",
    "hissing",
    "historic",
    "historical",
    "hollow",
    "holy",
    "homeless",
    "homely",
    "hon",
    "honest",
    "horizontal",
    "horrible",
    "hostile",
    "hot",
    "huge",
    "human",
    "hungry",
    "hurt",
    "hushed",
    "husky",
    "icy",
    "ideal",
    "identical",
    "ideological",
    "ill",
    "illegal",
    "imaginative",
    "immediate",
    "immense",
    "imperial",
    "implicit",
    "important",
    "impossible",
    "impressed",
    "impressive",
    "improved",
    "inadequate",
    "inappropriate",
    "inc",
    "inclined",
    "increased",
    "increasing",
    "incredible",
    "independent",
    "indirect",
    "individual",
    "industrial",
    "inevitable",
    "influential",
    "informal",
    "inherent",
    "initial",
    "injured",
    "inland",
    "inner",
    "innocent",
    "innovative",
    "inquisitive",
    "instant",
    "institutional",
    "insufficient",
    "intact",
    "integral",
    "integrated",
    "intellectual",
    "intelligent",
    "intense",
    "intensive",
    "interested",
    "interesting",
    "interim",
    "interior",
    "intermediate",
    "internal",
    "international",
    "intimate",
    "invisible",
    "involved",
    "irrelevant",
    "isolated",
    "itchy",
    "jealous",
    "jittery",
    "joint",
    "jolly",
    "joyous",
    "judicial",
    "juicy",
    "junior",
    "just",
    "keen",
    "key",
    "kind",
    "known",
    "labour",
    "large",
    "late",
    "latin",
    "lazy",
    "leading",
    "left",
    "legal",
    "legislative",
    "legitimate",
    "lengthy",
    "lesser",
    "level",
    "lexical",
    "liable",
    "liberal",
    "light",
    "like",
    "likely",
    "limited",
    "linear",
    "linguistic",
    "liquid",
    "literary",
    "little",
    "live",
    "lively",
    "living",
    "local",
    "logical",
    "lonely",
    "long",
    "loose",
    "lost",
    "loud",
    "lovely",
    "low",
    "loyal",
    "ltd",
    "lucky",
    "mad",
    "magic",
    "magnetic",
    "magnificent",
    "main",
    "major",
    "male",
    "mammoth",
    "managerial",
    "managing",
    "manual",
    "many",
    "marginal",
    "marine",
    "marked",
    "married",
    "marvellous",
    "marxist",
    "mass",
    "massive",
    "mathematical",
    "mature",
    "maximum",
    "mean",
    "meaningful",
    "mechanical",
    "medical",
    "medieval",
    "melodic",
    "melted",
    "mental",
    "mere",
    "metropolitan",
    "mid",
    "middle",
    "mighty",
    "mild",
    "military",
    "miniature",
    "minimal",
    "minimum",
    "ministerial",
    "minor",
    "miserable",
    "misleading",
    "missing",
    "misty",
    "mixed",
    "moaning",
    "mobile",
    "moderate",
    "modern",
    "modest",
    "molecular",
    "monetary",
    "monthly",
    "moral",
    "motionless",
    "muddy",
    "multiple",
    "mushy",
    "musical",
    "mute",
    "mutual",
    "mysterious",
    "naked",
    "narrow",
    "nasty",
    "national",
    "native",
    "natural",
    "naughty",
    "naval",
    "near",
    "nearby",
    "neat",
    "necessary",
    "negative",
    "neighbouring",
    "nervous",
    "net",
    "neutral",
    "new",
    "nice",
    "noble",
    "noisy",
    "normal",
    "northern",
    "nosy",
    "notable",
    "novel",
    "nuclear",
    "numerous",
    "nursing",
    "nutritious",
    "nutty",
    "obedient",
    "objective",
    "obliged",
    "obnoxious",
    "obvious",
    "occasional",
    "occupational",
    "odd",
    "official",
    "ok",
    "okay",
    "old",
    "olympic",
    "only",
    "open",
    "operational",
    "opposite",
    "optimistic",
    "oral",
    "ordinary",
    "organic",
    "organisational",
    "original",
    "orthodox",
    "other",
    "outdoor",
    "outer",
    "outrageous",
    "outside",
    "outstanding",
    "overall",
    "overseas",
    "overwhelming",
    "painful",
    "pale",
    "panicky",
    "parallel",
    "parental",
    "parliamentary",
    "partial",
    "particular",
    "passing",
    "passive",
    "past",
    "patient",
    "payable",
    "peaceful",
    "peculiar",
    "perfect",
    "permanent",
    "persistent",
    "personal",
    "petite",
    "philosophical",
    "physical",
    "plain",
    "planned",
    "plastic",
    "pleasant",
    "pleased",
    "poised",
    "polite",
    "political",
    "poor",
    "popular",
    "positive",
    "possible",
    "potential",
    "powerful",
    "practical",
    "precious",
    "precise",
    "preferred",
    "pregnant",
    "preliminary",
    "premier",
    "prepared",
    "present",
    "presidential",
    "pretty",
    "previous",
    "prickly",
    "primary",
    "prime",
    "primitive",
    "principal",
    "printed",
    "prior",
    "private",
    "probable",
    "productive",
    "professional",
    "profitable",
    "profound",
    "progressive",
    "prominent",
    "promising",
    "proper",
    "proposed",
    "prospective",
    "protective",
    "protestant",
    "proud",
    "provincial",
    "psychiatric",
    "psychological",
    "public",
    "puny",
    "pure",
    "purring",
    "puzzled",
    "quaint",
    "qualified",
    "quarrelsome",
    "querulous",
    "quick",
    "quickest",
    "quiet",
    "quintessential",
    "quixotic",
    "racial",
    "radical",
    "rainy",
    "random",
    "rapid",
    "rare",
    "raspy",
    "rational",
    "ratty",
    "raw",
    "ready",
    "real",
    "realistic",
    "rear",
    "reasonable",
    "recent",
    "reduced",
    "redundant",
    "regional",
    "registered",
    "regular",
    "regulatory",
    "related",
    "relative",
    "relaxed",
    "relevant",
    "reliable",
    "relieved",
    "religious",
    "reluctant",
    "remaining",
    "remarkable",
    "remote",
    "renewed",
    "representative",
    "repulsive",
    "required",
    "resident",
    "residential",
    "resonant",
    "respectable",
    "respective",
    "responsible",
    "resulting",
    "retail",
    "retired",
    "revolutionary",
    "rich",
    "ridiculous",
    "right",
    "rigid",
    "ripe",
    "rising",
    "rival",
    "roasted",
    "robust",
    "rolling",
    "romantic",
    "rotten",
    "rough",
    "round",
    "royal",
    "rubber",
    "rude",
    "ruling",
    "running",
    "rural",
    "sacred",
    "sad",
    "safe",
    "salty",
    "satisfactory",
    "satisfied",
    "scared",
    "scary",
    "scattered",
    "scientific",
    "scornful",
    "scrawny",
    "screeching",
    "secondary",
    "secret",
    "secure",
    "select",
    "selected",
    "selective",
    "selfish",
    "semantic",
    "senior",
    "sensible",
    "sensitive",
    "separate",
    "serious",
    "severe",
    "sexual",
    "shaggy",
    "shaky",
    "shallow",
    "shared",
    "sharp",
    "sheer",
    "shiny",
    "shivering",
    "shocked",
    "short",
    "shrill",
    "shy",
    "sick",
    "significant",
    "silent",
    "silky",
    "silly",
    "similar",
    "simple",
    "single",
    "skilled",
    "skinny",
    "sleepy",
    "slight",
    "slim",
    "slimy",
    "slippery",
    "slow",
    "small",
    "smart",
    "smiling",
    "smoggy",
    "smooth",
    "social",
    "socialist",
    "soft",
    "solar",
    "sole",
    "solid",
    "sophisticated",
    "sore",
    "sorry",
    "sound",
    "sour",
    "southern",
    "soviet",
    "spare",
    "sparkling",
    "spatial",
    "special",
    "specific",
    "specified",
    "spectacular",
    "spicy",
    "spiritual",
    "splendid",
    "spontaneous",
    "sporting",
    "spotless",
    "spotty",
    "square",
    "squealing",
    "stable",
    "stale",
    "standard",
    "static",
    "statistical",
    "statutory",
    "steady",
    "steep",
    "sticky",
    "stiff",
    "still",
    "stingy",
    "stormy",
    "straight",
    "straightforward",
    "strange",
    "strategic",
    "strict",
    "striking",
    "striped",
    "strong",
    "structural",
    "stuck",
    "stupid",
    "subjective",
    "subsequent",
    "substantial",
    "subtle",
    "successful",
    "successive",
    "sudden",
    "sufficient",
    "suitable",
    "sunny",
    "super",
    "superb",
    "superior",
    "supporting",
    "supposed",
    "supreme",
    "sure",
    "surprised",
    "surprising",
    "surrounding",
    "surviving",
    "suspicious",
    "sweet",
    "swift",
    "symbolic",
    "sympathetic",
    "systematic",
    "tall",
    "tame",
    "tart",
    "tasteless",
    "tasty",
    "technical",
    "technological",
    "teenage",
    "temporary",
    "tender",
    "tense",
    "terrible",
    "territorial",
    "testy",
    "then",
    "theoretical",
    "thick",
    "thin",
    "thirsty",
    "thorough",
    "thoughtful",
    "thoughtless",
    "thundering",
    "tight",
    "tiny",
    "tired",
    "top",
    "tory",
    "total",
    "tough",
    "toxic",
    "traditional",
    "tragic",
    "tremendous",
    "tricky",
    "tropical",
    "troubled",
    "typical",
    "ugliest",
    "ugly",
    "ultimate",
    "unable",
    "unacceptable",
    "unaware",
    "uncertain",
    "unchanged",
    "uncomfortable",
    "unconscious",
    "underground",
    "underlying",
    "unemployed",
    "uneven",
    "unexpected",
    "unfair",
    "unfortunate",
    "unhappy",
    "uniform",
    "uninterested",
    "unique",
    "united",
    "universal",
    "unknown",
    "unlikely",
    "unnecessary",
    "unpleasant",
    "unsightly",
    "unusual",
    "unwilling",
    "upper",
    "upset",
    "uptight",
    "urban",
    "urgent",
    "used",
    "useful",
    "useless",
    "usual",
    "vague",
    "valid",
    "valuable",
    "variable",
    "varied",
    "various",
    "varying",
    "vast",
    "verbal",
    "vertical",
    "very",
    "vicarious",
    "vicious",
    "victorious",
    "violent",
    "visible",
    "visiting",
    "visual",
    "vital",
    "vitreous",
    "vivacious",
    "vivid",
    "vocal",
    "vocational",
    "voiceless",
    "voluminous",
    "voluntary",
    "vulnerable",
    "wandering",
    "warm",
    "wasteful",
    "watery",
    "weak",
    "wealthy",
    "weary",
    "wee",
    "weekly",
    "weird",
    "welcome",
    "well",
    "western",
    "wet",
    "whispering",
    "whole",
    "wicked",
    "wide",
    "widespread",
    "wild",
    "wilful",
    "willing",
    "willowy",
    "wily",
    "wise",
    "wispy",
    "wittering",
    "witty",
    "wonderful",
    "wooden",
    "working",
    "worldwide",
    "worried",
    "worrying",
    "worthwhile",
    "worthy",
    "written",
    "wrong",
    "xenacious",
    "xenial",
    "xenogeneic",
    "xenophobic",
    "xeric",
    "xerothermic",
    "yabbering",
    "yammering",
    "yappiest",
    "yappy",
    "yawning",
    "yearling",
    "yearning",
    "yeasty",
    "yelling",
    "yelping",
    "yielding",
    "yodelling",
    "young",
    "youngest",
    "youthful",
    "ytterbic",
    "yucky",
    "yummy",
    "zany",
    "zealous",
    "zeroth",
    "zestful",
    "zesty",
    "zippy",
    "zonal",
    "zoophagous",
    "zygomorphic",
    "zygotic",
  ],
  Nm = [
    "aardvark",
    "aardwolf",
    "albatross",
    "alligator",
    "alpaca",
    "amphibian",
    "anaconda",
    "angelfish",
    "anglerfish",
    "ant",
    "anteater",
    "antelope",
    "antlion",
    "ape",
    "aphid",
    "armadillo",
    "asp",
    "baboon",
    "badger",
    "bandicoot",
    "barnacle",
    "barracuda",
    "basilisk",
    "bass",
    "bat",
    "bear",
    "beaver",
    "bedbug",
    "bee",
    "beetle",
    "bird",
    "bison",
    "blackbird",
    "boa",
    "boar",
    "bobcat",
    "bobolink",
    "bonobo",
    "booby",
    "bovid",
    "bug",
    "butterfly",
    "buzzard",
    "camel",
    "canid",
    "canidae",
    "capybara",
    "cardinal",
    "caribou",
    "carp",
    "cat",
    "caterpillar",
    "catfish",
    "catshark",
    "cattle",
    "centipede",
    "cephalopod",
    "chameleon",
    "cheetah",
    "chickadee",
    "chicken",
    "chimpanzee",
    "chinchilla",
    "chipmunk",
    "cicada",
    "clam",
    "clownfish",
    "cobra",
    "cockroach",
    "cod",
    "condor",
    "constrictor",
    "coral",
    "cougar",
    "cow",
    "coyote",
    "crab",
    "crane",
    "crawdad",
    "crayfish",
    "cricket",
    "crocodile",
    "crow",
    "cuckoo",
    "damselfly",
    "deer",
    "dingo",
    "dinosaur",
    "dog",
    "dolphin",
    "donkey",
    "dormouse",
    "dove",
    "dragon",
    "dragonfly",
    "duck",
    "eagle",
    "earthworm",
    "earwig",
    "echidna",
    "eel",
    "egret",
    "elephant",
    "elk",
    "emu",
    "ermine",
    "falcon",
    "felidae",
    "ferret",
    "finch",
    "firefly",
    "fish",
    "flamingo",
    "flea",
    "fly",
    "flyingfish",
    "fowl",
    "fox",
    "frog",
    "galliform",
    "gamefowl",
    "gayal",
    "gazelle",
    "gecko",
    "gerbil",
    "gibbon",
    "giraffe",
    "goat",
    "goldfish",
    "goose",
    "gopher",
    "gorilla",
    "grasshopper",
    "grouse",
    "guan",
    "guanaco",
    "guineafowl",
    "gull",
    "guppy",
    "haddock",
    "halibut",
    "hamster",
    "hare",
    "harrier",
    "hawk",
    "hedgehog",
    "heron",
    "herring",
    "hippopotamus",
    "hookworm",
    "hornet",
    "horse",
    "hoverfly",
    "hummingbird",
    "hyena",
    "iguana",
    "impala",
    "jackal",
    "jaguar",
    "jay",
    "jellyfish",
    "junglefowl",
    "kangaroo",
    "kingfisher",
    "kite",
    "kiwi",
    "koala",
    "koi",
    "krill",
    "ladybug",
    "lamprey",
    "landfowl",
    "lark",
    "leech",
    "lemming",
    "lemur",
    "leopard",
    "leopon",
    "limpet",
    "lion",
    "lizard",
    "llama",
    "lobster",
    "locust",
    "loon",
    "louse",
    "lungfish",
    "lynx",
    "macaw",
    "mackerel",
    "magpie",
    "mammal",
    "manatee",
    "mandrill",
    "marlin",
    "marmoset",
    "marmot",
    "marsupial",
    "marten",
    "mastodon",
    "meadowlark",
    "meerkat",
    "mink",
    "minnow",
    "mite",
    "mockingbird",
    "mole",
    "mollusk",
    "mongoose",
    "monkey",
    "moose",
    "mosquito",
    "moth",
    "mouse",
    "mule",
    "muskox",
    "narwhal",
    "newt",
    "nightingale",
    "ocelot",
    "octopus",
    "opossum",
    "orangutan",
    "orca",
    "ostrich",
    "otter",
    "owl",
    "ox",
    "panda",
    "panther",
    "parakeet",
    "parrot",
    "parrotfish",
    "partridge",
    "peacock",
    "peafowl",
    "pelican",
    "penguin",
    "perch",
    "pheasant",
    "pig",
    "pigeon",
    "pike",
    "pinniped",
    "piranha",
    "planarian",
    "platypus",
    "pony",
    "porcupine",
    "porpoise",
    "possum",
    "prawn",
    "primate",
    "ptarmigan",
    "puffin",
    "puma",
    "python",
    "quail",
    "quelea",
    "quokka",
    "rabbit",
    "raccoon",
    "rat",
    "rattlesnake",
    "raven",
    "reindeer",
    "reptile",
    "rhinoceros",
    "roadrunner",
    "rodent",
    "rook",
    "rooster",
    "roundworm",
    "sailfish",
    "salamander",
    "salmon",
    "sawfish",
    "scallop",
    "scorpion",
    "seahorse",
    "shark",
    "sheep",
    "shrew",
    "shrimp",
    "silkworm",
    "silverfish",
    "skink",
    "skunk",
    "sloth",
    "slug",
    "smelt",
    "snail",
    "snake",
    "snipe",
    "sole",
    "sparrow",
    "spider",
    "spoonbill",
    "squid",
    "squirrel",
    "starfish",
    "stingray",
    "stoat",
    "stork",
    "sturgeon",
    "swallow",
    "swan",
    "swift",
    "swordfish",
    "swordtail",
    "tahr",
    "takin",
    "tapir",
    "tarantula",
    "tarsier",
    "termite",
    "tern",
    "thrush",
    "tick",
    "tiger",
    "tiglon",
    "toad",
    "tortoise",
    "toucan",
    "trout",
    "tuna",
    "turkey",
    "turtle",
    "tyrannosaurus",
    "unicorn",
    "urial",
    "vicuna",
    "viper",
    "vole",
    "vulture",
    "wallaby",
    "walrus",
    "warbler",
    "wasp",
    "weasel",
    "whale",
    "whippet",
    "whitefish",
    "wildcat",
    "wildebeest",
    "wildfowl",
    "wolf",
    "wolverine",
    "wombat",
    "woodpecker",
    "worm",
    "wren",
    "xerinae",
    "yak",
    "zebra",
  ],
  Tm = [
    "amaranth",
    "amber",
    "amethyst",
    "apricot",
    "aqua",
    "aquamarine",
    "azure",
    "beige",
    "black",
    "blue",
    "blush",
    "bronze",
    "brown",
    "chocolate",
    "coffee",
    "copper",
    "coral",
    "crimson",
    "cyan",
    "emerald",
    "fuchsia",
    "gold",
    "gray",
    "green",
    "harlequin",
    "indigo",
    "ivory",
    "jade",
    "lavender",
    "lime",
    "magenta",
    "maroon",
    "moccasin",
    "olive",
    "orange",
    "peach",
    "pink",
    "plum",
    "purple",
    "red",
    "rose",
    "salmon",
    "sapphire",
    "scarlet",
    "silver",
    "tan",
    "teal",
    "tomato",
    "turquoise",
    "violet",
    "white",
    "yellow",
  ];
const Im = 1e4,
  Mm = "https://sendboard-sy3z2ctula-uc.a.run.app/",
  Bf = bm({ dictionaries: [_m, Tm, Nm] });
function Rm() {
  const [e] = or("randomName", Bf);
  return e;
}
function Lm() {
  const e = ee.useRef(),
    t = ee.useRef(""),
    [n] = or("randomName", Bf),
    [r, i] = ee.useState(!1);
  return (
    ee.useEffect(() => {
      if (r) {
        const l = setTimeout(() => {
          i(!1);
          try {
            fetch(Mm, {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                data: { randomName: n, board: t.current },
              }),
            }).catch(() => {});
          } catch {}
        }, Im);
        return () => {
          clearTimeout(l);
        };
      }
    }, [n, r]),
    ee.useCallback((l) => {
      t.current === l ||
        new URLSearchParams(window.location.search).get("board") ||
        ((e.current = Date.now()), (t.current = l), i(!0));
    }, [])
  );
}
const jm = "https://entername-sy3z2ctula-uc.a.run.app";
function Dm({ code: e }) {
  const [t, n] = ee.useState(!1),
    [r, i] = or("input-name", void 0),
    l = Rm(),
    [c, y] = ee.useState(""),
    x = ee.useCallback((R) => {
      y(R.target.value);
    }, []);
  ee.useEffect(() => {
    n(!0);
  }, []);
  const b = ee.useCallback(async () => {
    c.trim() &&
      (await fetch(jm, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ data: { randomName: l, answer: e, name: c } }),
      }),
      i(() => c));
  }, [e, c, l, i]);
  return ue.jsxs("div", {
    className: bn(Xi.win, { [Xi.visible]: t }),
    children: [
      !r &&
        ue.jsxs("div", {
          className: Xi.form,
          children: [
            ue.jsx("span", { children: "ENTER YOUR NAME" }),
            ue.jsx("input", {
              type: "text",
              onChange: x,
              value: c,
              maxLength: 18,
            }),
            ue.jsx("button", { onClick: b, children: "SUBMIT" }),
          ],
        }),
      r && ue.jsx(Am, {}),
    ],
  });
}
const zm = "https://getwinners-sy3z2ctula-uc.a.run.app/";
function Am() {
  const [e, t] = ee.useState();
  return (
    ee.useEffect(() => {
      fetch(zm)
        .then((n) => n.json())
        .then((n) => t(n));
    }, []),
    ue.jsx(ue.Fragment, {
      children:
        e &&
        ue.jsx("iframe", {
          src: `/congrats.html?winners=${JSON.stringify(e)}`,
        }),
    })
  );
}
const Fm = "_container_rs8hx_1",
  Bm = "_disclaimer_rs8hx_10",
  Um = "_mainText_rs8hx_20",
  Gn = { container: Fm, disclaimer: Bm, mainText: Um },
  $m = "https://getclues-sy3z2ctula-uc.a.run.app";
function Hm({ children: e }) {
  const t = Gm();
  switch (t.kind) {
    case "loading":
      return ue.jsx(Km, {});
    case "wait":
      return ue.jsx(Vm, { startTime: t.startTime });
    case "start":
      return ue.jsx(vi.Provider, { value: t.clues, children: e });
  }
}
function Km() {
  const [e, t] = ee.useState(!1);
  return (
    ee.useEffect(() => {
      const n = setTimeout(() => {
        t(!0);
      }, 500);
      return () => {
        clearTimeout(n);
      };
    }, []),
    ue.jsxs("div", {
      className: Gn.container,
      children: [
        e && ue.jsx("span", { className: Gn.mainText, children: "..." }),
        ue.jsx("span", {
          className: Gn.disclaimer,
          children: "We are unaffiliated with Dr. Exoskeleton",
        }),
      ],
    })
  );
}
function Vm({ startTime: e }) {
  const t = Xm(e);
  return ue.jsxs("div", {
    className: Gn.container,
    children: [
      ue.jsx("span", { className: Gn.mainText, children: t }),
      ue.jsx("span", {
        className: Gn.disclaimer,
        children: "We are unaffiliated with Dr. Exoskeleton",
      }),
    ],
  });
}
function Xm(e) {
  const [t, n] = ee.useState(0);
  return (
    ee.useEffect(() => {
      const r = setTimeout(() => {
        n((i) => i + 1);
      }, 1e3);
      return () => {
        clearTimeout(r);
      };
    }, [t]),
    Qm(Math.max(e - Date.now(), 0))
  );
}
const Wi = 1e3 * 60 * 60,
  vs = 1e3 * 60,
  Wm = 1e3;
function Qi(e) {
  return e.toString().padStart(2, "0");
}
function Qm(e) {
  const t = Math.floor(e / Wi),
    n = Math.floor((e % Wi) / vs),
    r = Math.floor(((e % Wi) % vs) / Wm);
  return `${Qi(t)}:${Qi(n)}:${Qi(r)}`;
}
function Gm() {
  const [e, t] = ee.useState({ kind: "loading" });
  return (
    ee.useEffect(() => {
      let n = !0;
      const r = async () => {
        const l = await (await fetch($m)).json();
        n && t(l);
      };
      return (
        e.kind === "loading" && r(),
        () => {
          n = !1;
        }
      );
    }, [e.kind]),
    ee.useEffect(() => {
      if (e.kind === "wait") {
        const n = setTimeout(() => {
          t({ kind: "loading" });
        }, e.startTime - Date.now() + 1e3);
        return () => {
          clearTimeout(n);
        };
      }
    }, [e]),
    e
  );
}
const Ym = "_clue_1ar3m_1",
  Zm = "_desktop_1ar3m_13",
  ys = { clue: Ym, desktop: Zm };
function qm({ word: e }) {
  const t = ee.useContext(vi),
    n = ee.useMemo(() => bt.indexOf(e), [e]),
    r = ee.useMemo(() => t[n], [n, t]);
  return ue.jsxs("div", {
    className: bn(ys.clue, { [ys.desktop]: !$u() }),
    children: [ue.jsxs("span", { children: [n + 1, "."] }), r],
  });
}
const Jm = 22,
  ev = 27;
function gs() {
  history.state.clueIndex && history.back();
}
function tv() {
  const e = Bu(),
    {
      getLetter: t,
      setLetter: n,
      getBoard: r,
      setBoard: i,
      clearBoard: l,
    } = Vh(),
    [c, y] = ee.useState(),
    [x, b] = ee.useState(),
    [R, F] = ee.useState(),
    [f, k] = ee.useState(!1),
    o = Lm(),
    [s, h] = or("easyLock", void 0),
    [u, a] = or("hardLock", void 0),
    p = !!s && !!u;
  ee.useEffect(() => {
    var I;
    window.addEventListener("popstate", () => {
      y(void 0), b(void 0), F(void 0);
    });
    const E = (I = history.state) == null ? void 0 : I.clueIndex;
    typeof E == "number" && (y(bt[E]), b(0));
    const _ = new URLSearchParams(window.location.search).get("board");
    _ && i(_);
  }, [i]),
    ee.useEffect(() => {
      if (c) k(!0);
      else {
        const E = setTimeout(() => {
          k(!1);
        }, 250);
        return () => {
          clearTimeout(E);
        };
      }
    }, [c]);
  const m = ee.useCallback((E) => {
      y(bt[E]), history.pushState({ clueIndex: E }, ""), b(void 0);
    }, []),
    d = ee.useCallback(() => {
      y(void 0), b(void 0), F(void 0), gs();
    }, []);
  ee.useEffect(() => {
    const E = r();
    if ((o(E), E.includes(" "))) return;
    const _ = wm(E);
    _ === "easy-win" && (h(() => E), l()),
      _ === "hard-win" && (a(() => E), l());
  }, [l, r, h, a, o]);
  const w = ee.useCallback(
      (E, _) => {
        const I =
          bt.find((j) => j !== c && !!j.find((N) => N.x === E && N.y === _)) ??
          bt.find((j) => !!j.find((N) => N.x === E && N.y === _));
        I &&
          (c
            ? history.replaceState({ clueIndex: bt.indexOf(I) }, "")
            : history.pushState({ clueIndex: bt.indexOf(I) }, ""),
          y(I),
          b(I.findIndex((j) => j.x === E && j.y === _)));
      },
      [c]
    ),
    g = ee.useCallback(() => {
      $u() && c && (y(void 0), b(void 0), F(void 0), gs());
    }, [c]);
  return ue.jsx(Hm, {
    children: ue.jsxs(zf.Provider, {
      value: e,
      children: [
        ue.jsxs(vh, {
          children: [
            ue.jsxs("div", {
              className: vo.grid,
              onClick: g,
              children: [
                ue.jsx(Ah, {
                  selectedWord: c,
                  children: ue.jsx(xh, {
                    width: Jm,
                    height: ev,
                    children: rr.map(({ x: E, y: _ }, I) => {
                      const j = Fh.findIndex((N) => N.x === E && N.y === _);
                      return ue.jsx(
                        Ih,
                        {
                          text: t(E, _),
                          x: E,
                          y: _,
                          marker: j === -1 ? void 0 : `${j + 1}`,
                          cursor: R && R.x === E && R.y === _,
                          onClick: w,
                        },
                        I
                      );
                    }),
                  }),
                }),
                ue.jsx(ps, { open: !!s }),
                ue.jsx(ps, { open: !!u, hard: !0 }),
              ],
            }),
            ue.jsx("div", {
              className: bn(vo.controls, {
                [vo.hidden]: !!c,
                [vo.frozen]: !!f,
              }),
              children: ue.jsx(Jh, { getLetter: t, onClick: m }),
            }),
            c && ue.jsx(qm, { word: c }),
            c &&
              !p &&
              ue.jsx(pm, {
                word: c,
                startIndex: x,
                getLetter: t,
                setLetter: n,
                setCursorPoint: F,
                exit: d,
              }),
          ],
        }),
        p && ue.jsx(Dm, { code: `${s}|${u}` }),
      ],
    }),
  });
}
Gi.createRoot(document.getElementById("root")).render(ue.jsx(tv, {}));
