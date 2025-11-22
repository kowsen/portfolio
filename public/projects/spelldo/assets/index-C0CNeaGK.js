function Mw(t, r) {
  for (var i = 0; i < r.length; i++) {
    const a = r[i];
    if (typeof a != "string" && !Array.isArray(a)) {
      for (const u in a)
        if (u !== "default" && !(u in t)) {
          const s = Object.getOwnPropertyDescriptor(a, u);
          s &&
            Object.defineProperty(
              t,
              u,
              s.get ? s : { enumerable: !0, get: () => a[u] }
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(t, Symbol.toStringTag, { value: "Module" })
  );
}
(function () {
  const r = document.createElement("link").relList;
  if (r && r.supports && r.supports("modulepreload")) return;
  for (const u of document.querySelectorAll('link[rel="modulepreload"]')) a(u);
  new MutationObserver((u) => {
    for (const s of u)
      if (s.type === "childList")
        for (const f of s.addedNodes)
          f.tagName === "LINK" && f.rel === "modulepreload" && a(f);
  }).observe(document, { childList: !0, subtree: !0 });
  function i(u) {
    const s = {};
    return (
      u.integrity && (s.integrity = u.integrity),
      u.referrerPolicy && (s.referrerPolicy = u.referrerPolicy),
      u.crossOrigin === "use-credentials"
        ? (s.credentials = "include")
        : u.crossOrigin === "anonymous"
        ? (s.credentials = "omit")
        : (s.credentials = "same-origin"),
      s
    );
  }
  function a(u) {
    if (u.ep) return;
    u.ep = !0;
    const s = i(u);
    fetch(u.href, s);
  }
})();
function Il(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default")
    ? t.default
    : t;
}
function zw(t) {
  if (Object.prototype.hasOwnProperty.call(t, "__esModule")) return t;
  var r = t.default;
  if (typeof r == "function") {
    var i = function a() {
      var u = !1;
      try {
        u = this instanceof a;
      } catch {}
      return u
        ? Reflect.construct(r, arguments, this.constructor)
        : r.apply(this, arguments);
    };
    i.prototype = r.prototype;
  } else i = {};
  return (
    Object.defineProperty(i, "__esModule", { value: !0 }),
    Object.keys(t).forEach(function (a) {
      var u = Object.getOwnPropertyDescriptor(t, a);
      Object.defineProperty(
        i,
        a,
        u.get
          ? u
          : {
              enumerable: !0,
              get: function () {
                return t[a];
              },
            }
      );
    }),
    i
  );
}
var vd = { exports: {} },
  Ia = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ly;
function Dw() {
  if (ly) return Ia;
  ly = 1;
  var t = Symbol.for("react.transitional.element"),
    r = Symbol.for("react.fragment");
  function i(a, u, s) {
    var f = null;
    if (
      (s !== void 0 && (f = "" + s),
      u.key !== void 0 && (f = "" + u.key),
      "key" in u)
    ) {
      s = {};
      for (var d in u) d !== "key" && (s[d] = u[d]);
    } else s = u;
    return (
      (u = s.ref),
      { $$typeof: t, type: a, key: f, ref: u !== void 0 ? u : null, props: s }
    );
  }
  return (Ia.Fragment = r), (Ia.jsx = i), (Ia.jsxs = i), Ia;
}
var ay;
function Nw() {
  return ay || ((ay = 1), (vd.exports = Dw())), vd.exports;
}
var ye = Nw(),
  bd = { exports: {} },
  Lt = {};
/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var oy;
function Bw() {
  if (oy) return Lt;
  oy = 1;
  var t = Symbol.for("react.transitional.element"),
    r = Symbol.for("react.portal"),
    i = Symbol.for("react.fragment"),
    a = Symbol.for("react.strict_mode"),
    u = Symbol.for("react.profiler"),
    s = Symbol.for("react.consumer"),
    f = Symbol.for("react.context"),
    d = Symbol.for("react.forward_ref"),
    h = Symbol.for("react.suspense"),
    m = Symbol.for("react.memo"),
    g = Symbol.for("react.lazy"),
    y = Symbol.iterator;
  function b(x) {
    return x === null || typeof x != "object"
      ? null
      : ((x = (y && x[y]) || x["@@iterator"]),
        typeof x == "function" ? x : null);
  }
  var v = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    O = Object.assign,
    T = {};
  function L(x, Z, J) {
    (this.props = x),
      (this.context = Z),
      (this.refs = T),
      (this.updater = J || v);
  }
  (L.prototype.isReactComponent = {}),
    (L.prototype.setState = function (x, Z) {
      if (typeof x != "object" && typeof x != "function" && x != null)
        throw Error(
          "takes an object of state variables to update or a function which returns an object of state variables."
        );
      this.updater.enqueueSetState(this, x, Z, "setState");
    }),
    (L.prototype.forceUpdate = function (x) {
      this.updater.enqueueForceUpdate(this, x, "forceUpdate");
    });
  function D() {}
  D.prototype = L.prototype;
  function G(x, Z, J) {
    (this.props = x),
      (this.context = Z),
      (this.refs = T),
      (this.updater = J || v);
  }
  var $ = (G.prototype = new D());
  ($.constructor = G), O($, L.prototype), ($.isPureReactComponent = !0);
  var H = Array.isArray,
    R = { H: null, A: null, T: null, S: null, V: null },
    k = Object.prototype.hasOwnProperty;
  function Q(x, Z, J, A, ut, st) {
    return (
      (J = st.ref),
      { $$typeof: t, type: x, key: Z, ref: J !== void 0 ? J : null, props: st }
    );
  }
  function C(x, Z) {
    return Q(x.type, Z, void 0, void 0, void 0, x.props);
  }
  function U(x) {
    return typeof x == "object" && x !== null && x.$$typeof === t;
  }
  function z(x) {
    var Z = { "=": "=0", ":": "=2" };
    return (
      "$" +
      x.replace(/[=:]/g, function (J) {
        return Z[J];
      })
    );
  }
  var q = /\/+/g;
  function w(x, Z) {
    return typeof x == "object" && x !== null && x.key != null
      ? z("" + x.key)
      : Z.toString(36);
  }
  function B() {}
  function N(x) {
    switch (x.status) {
      case "fulfilled":
        return x.value;
      case "rejected":
        throw x.reason;
      default:
        switch (
          (typeof x.status == "string"
            ? x.then(B, B)
            : ((x.status = "pending"),
              x.then(
                function (Z) {
                  x.status === "pending" &&
                    ((x.status = "fulfilled"), (x.value = Z));
                },
                function (Z) {
                  x.status === "pending" &&
                    ((x.status = "rejected"), (x.reason = Z));
                }
              )),
          x.status)
        ) {
          case "fulfilled":
            return x.value;
          case "rejected":
            throw x.reason;
        }
    }
    throw x;
  }
  function V(x, Z, J, A, ut) {
    var st = typeof x;
    (st === "undefined" || st === "boolean") && (x = null);
    var it = !1;
    if (x === null) it = !0;
    else
      switch (st) {
        case "bigint":
        case "string":
        case "number":
          it = !0;
          break;
        case "object":
          switch (x.$$typeof) {
            case t:
            case r:
              it = !0;
              break;
            case g:
              return (it = x._init), V(it(x._payload), Z, J, A, ut);
          }
      }
    if (it)
      return (
        (ut = ut(x)),
        (it = A === "" ? "." + w(x, 0) : A),
        H(ut)
          ? ((J = ""),
            it != null && (J = it.replace(q, "$&/") + "/"),
            V(ut, Z, J, "", function (Ct) {
              return Ct;
            }))
          : ut != null &&
            (U(ut) &&
              (ut = C(
                ut,
                J +
                  (ut.key == null || (x && x.key === ut.key)
                    ? ""
                    : ("" + ut.key).replace(q, "$&/") + "/") +
                  it
              )),
            Z.push(ut)),
        1
      );
    it = 0;
    var ht = A === "" ? "." : A + ":";
    if (H(x))
      for (var gt = 0; gt < x.length; gt++)
        (A = x[gt]), (st = ht + w(A, gt)), (it += V(A, Z, J, st, ut));
    else if (((gt = b(x)), typeof gt == "function"))
      for (x = gt.call(x), gt = 0; !(A = x.next()).done; )
        (A = A.value), (st = ht + w(A, gt++)), (it += V(A, Z, J, st, ut));
    else if (st === "object") {
      if (typeof x.then == "function") return V(N(x), Z, J, A, ut);
      throw (
        ((Z = String(x)),
        Error(
          "Objects are not valid as a React child (found: " +
            (Z === "[object Object]"
              ? "object with keys {" + Object.keys(x).join(", ") + "}"
              : Z) +
            "). If you meant to render a collection of children, use an array instead."
        ))
      );
    }
    return it;
  }
  function _(x, Z, J) {
    if (x == null) return x;
    var A = [],
      ut = 0;
    return (
      V(x, A, "", "", function (st) {
        return Z.call(J, st, ut++);
      }),
      A
    );
  }
  function P(x) {
    if (x._status === -1) {
      var Z = x._result;
      (Z = Z()),
        Z.then(
          function (J) {
            (x._status === 0 || x._status === -1) &&
              ((x._status = 1), (x._result = J));
          },
          function (J) {
            (x._status === 0 || x._status === -1) &&
              ((x._status = 2), (x._result = J));
          }
        ),
        x._status === -1 && ((x._status = 0), (x._result = Z));
    }
    if (x._status === 1) return x._result.default;
    throw x._result;
  }
  var nt =
    typeof reportError == "function"
      ? reportError
      : function (x) {
          if (
            typeof window == "object" &&
            typeof window.ErrorEvent == "function"
          ) {
            var Z = new window.ErrorEvent("error", {
              bubbles: !0,
              cancelable: !0,
              message:
                typeof x == "object" &&
                x !== null &&
                typeof x.message == "string"
                  ? String(x.message)
                  : String(x),
              error: x,
            });
            if (!window.dispatchEvent(Z)) return;
          } else if (
            typeof process == "object" &&
            typeof process.emit == "function"
          ) {
            process.emit("uncaughtException", x);
            return;
          }
          console.error(x);
        };
  function pt() {}
  return (
    (Lt.Children = {
      map: _,
      forEach: function (x, Z, J) {
        _(
          x,
          function () {
            Z.apply(this, arguments);
          },
          J
        );
      },
      count: function (x) {
        var Z = 0;
        return (
          _(x, function () {
            Z++;
          }),
          Z
        );
      },
      toArray: function (x) {
        return (
          _(x, function (Z) {
            return Z;
          }) || []
        );
      },
      only: function (x) {
        if (!U(x))
          throw Error(
            "React.Children.only expected to receive a single React element child."
          );
        return x;
      },
    }),
    (Lt.Component = L),
    (Lt.Fragment = i),
    (Lt.Profiler = u),
    (Lt.PureComponent = G),
    (Lt.StrictMode = a),
    (Lt.Suspense = h),
    (Lt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = R),
    (Lt.__COMPILER_RUNTIME = {
      __proto__: null,
      c: function (x) {
        return R.H.useMemoCache(x);
      },
    }),
    (Lt.cache = function (x) {
      return function () {
        return x.apply(null, arguments);
      };
    }),
    (Lt.cloneElement = function (x, Z, J) {
      if (x == null)
        throw Error(
          "The argument must be a React element, but you passed " + x + "."
        );
      var A = O({}, x.props),
        ut = x.key,
        st = void 0;
      if (Z != null)
        for (it in (Z.ref !== void 0 && (st = void 0),
        Z.key !== void 0 && (ut = "" + Z.key),
        Z))
          !k.call(Z, it) ||
            it === "key" ||
            it === "__self" ||
            it === "__source" ||
            (it === "ref" && Z.ref === void 0) ||
            (A[it] = Z[it]);
      var it = arguments.length - 2;
      if (it === 1) A.children = J;
      else if (1 < it) {
        for (var ht = Array(it), gt = 0; gt < it; gt++)
          ht[gt] = arguments[gt + 2];
        A.children = ht;
      }
      return Q(x.type, ut, void 0, void 0, st, A);
    }),
    (Lt.createContext = function (x) {
      return (
        (x = {
          $$typeof: f,
          _currentValue: x,
          _currentValue2: x,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
        }),
        (x.Provider = x),
        (x.Consumer = { $$typeof: s, _context: x }),
        x
      );
    }),
    (Lt.createElement = function (x, Z, J) {
      var A,
        ut = {},
        st = null;
      if (Z != null)
        for (A in (Z.key !== void 0 && (st = "" + Z.key), Z))
          k.call(Z, A) &&
            A !== "key" &&
            A !== "__self" &&
            A !== "__source" &&
            (ut[A] = Z[A]);
      var it = arguments.length - 2;
      if (it === 1) ut.children = J;
      else if (1 < it) {
        for (var ht = Array(it), gt = 0; gt < it; gt++)
          ht[gt] = arguments[gt + 2];
        ut.children = ht;
      }
      if (x && x.defaultProps)
        for (A in ((it = x.defaultProps), it))
          ut[A] === void 0 && (ut[A] = it[A]);
      return Q(x, st, void 0, void 0, null, ut);
    }),
    (Lt.createRef = function () {
      return { current: null };
    }),
    (Lt.forwardRef = function (x) {
      return { $$typeof: d, render: x };
    }),
    (Lt.isValidElement = U),
    (Lt.lazy = function (x) {
      return { $$typeof: g, _payload: { _status: -1, _result: x }, _init: P };
    }),
    (Lt.memo = function (x, Z) {
      return { $$typeof: m, type: x, compare: Z === void 0 ? null : Z };
    }),
    (Lt.startTransition = function (x) {
      var Z = R.T,
        J = {};
      R.T = J;
      try {
        var A = x(),
          ut = R.S;
        ut !== null && ut(J, A),
          typeof A == "object" &&
            A !== null &&
            typeof A.then == "function" &&
            A.then(pt, nt);
      } catch (st) {
        nt(st);
      } finally {
        R.T = Z;
      }
    }),
    (Lt.unstable_useCacheRefresh = function () {
      return R.H.useCacheRefresh();
    }),
    (Lt.use = function (x) {
      return R.H.use(x);
    }),
    (Lt.useActionState = function (x, Z, J) {
      return R.H.useActionState(x, Z, J);
    }),
    (Lt.useCallback = function (x, Z) {
      return R.H.useCallback(x, Z);
    }),
    (Lt.useContext = function (x) {
      return R.H.useContext(x);
    }),
    (Lt.useDebugValue = function () {}),
    (Lt.useDeferredValue = function (x, Z) {
      return R.H.useDeferredValue(x, Z);
    }),
    (Lt.useEffect = function (x, Z, J) {
      var A = R.H;
      if (typeof J == "function")
        throw Error(
          "useEffect CRUD overload is not enabled in this build of React."
        );
      return A.useEffect(x, Z);
    }),
    (Lt.useId = function () {
      return R.H.useId();
    }),
    (Lt.useImperativeHandle = function (x, Z, J) {
      return R.H.useImperativeHandle(x, Z, J);
    }),
    (Lt.useInsertionEffect = function (x, Z) {
      return R.H.useInsertionEffect(x, Z);
    }),
    (Lt.useLayoutEffect = function (x, Z) {
      return R.H.useLayoutEffect(x, Z);
    }),
    (Lt.useMemo = function (x, Z) {
      return R.H.useMemo(x, Z);
    }),
    (Lt.useOptimistic = function (x, Z) {
      return R.H.useOptimistic(x, Z);
    }),
    (Lt.useReducer = function (x, Z, J) {
      return R.H.useReducer(x, Z, J);
    }),
    (Lt.useRef = function (x) {
      return R.H.useRef(x);
    }),
    (Lt.useState = function (x) {
      return R.H.useState(x);
    }),
    (Lt.useSyncExternalStore = function (x, Z, J) {
      return R.H.useSyncExternalStore(x, Z, J);
    }),
    (Lt.useTransition = function () {
      return R.H.useTransition();
    }),
    (Lt.version = "19.1.1"),
    Lt
  );
}
var uy;
function Bs() {
  return uy || ((uy = 1), (bd.exports = Bw())), bd.exports;
}
var tt = Bs();
const ar = Il(tt),
  Fd = Mw({ __proto__: null, default: ar }, [tt]);
function Lw(t) {
  if (t.sheet) return t.sheet;
  for (var r = 0; r < document.styleSheets.length; r++)
    if (document.styleSheets[r].ownerNode === t) return document.styleSheets[r];
}
function Uw(t) {
  var r = document.createElement("style");
  return (
    r.setAttribute("data-emotion", t.key),
    t.nonce !== void 0 && r.setAttribute("nonce", t.nonce),
    r.appendChild(document.createTextNode("")),
    r.setAttribute("data-s", ""),
    r
  );
}
var jw = (function () {
    function t(i) {
      var a = this;
      (this._insertTag = function (u) {
        var s;
        a.tags.length === 0
          ? a.insertionPoint
            ? (s = a.insertionPoint.nextSibling)
            : a.prepend
            ? (s = a.container.firstChild)
            : (s = a.before)
          : (s = a.tags[a.tags.length - 1].nextSibling),
          a.container.insertBefore(u, s),
          a.tags.push(u);
      }),
        (this.isSpeedy = i.speedy === void 0 ? !0 : i.speedy),
        (this.tags = []),
        (this.ctr = 0),
        (this.nonce = i.nonce),
        (this.key = i.key),
        (this.container = i.container),
        (this.prepend = i.prepend),
        (this.insertionPoint = i.insertionPoint),
        (this.before = null);
    }
    var r = t.prototype;
    return (
      (r.hydrate = function (a) {
        a.forEach(this._insertTag);
      }),
      (r.insert = function (a) {
        this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 &&
          this._insertTag(Uw(this));
        var u = this.tags[this.tags.length - 1];
        if (this.isSpeedy) {
          var s = Lw(u);
          try {
            s.insertRule(a, s.cssRules.length);
          } catch {}
        } else u.appendChild(document.createTextNode(a));
        this.ctr++;
      }),
      (r.flush = function () {
        this.tags.forEach(function (a) {
          var u;
          return (u = a.parentNode) == null ? void 0 : u.removeChild(a);
        }),
          (this.tags = []),
          (this.ctr = 0);
      }),
      t
    );
  })(),
  Je = "-ms-",
  Ss = "-moz-",
  Zt = "-webkit-",
  kv = "comm",
  Mp = "rule",
  zp = "decl",
  Hw = "@import",
  _v = "@keyframes",
  qw = "@layer",
  Pw = Math.abs,
  Ls = String.fromCharCode,
  $w = Object.assign;
function Vw(t, r) {
  return Xe(t, 0) ^ 45
    ? (((((((r << 2) ^ Xe(t, 0)) << 2) ^ Xe(t, 1)) << 2) ^ Xe(t, 2)) << 2) ^
        Xe(t, 3)
    : 0;
}
function Rv(t) {
  return t.trim();
}
function Yw(t, r) {
  return (t = r.exec(t)) ? t[0] : t;
}
function Kt(t, r, i) {
  return t.replace(r, i);
}
function Wd(t, r) {
  return t.indexOf(r);
}
function Xe(t, r) {
  return t.charCodeAt(r) | 0;
}
function go(t, r, i) {
  return t.slice(r, i);
}
function rr(t) {
  return t.length;
}
function Dp(t) {
  return t.length;
}
function Fu(t, r) {
  return r.push(t), t;
}
function Gw(t, r) {
  return t.map(r).join("");
}
var Us = 1,
  jl = 1,
  Mv = 0,
  pn = 0,
  Be = 0,
  Zl = "";
function js(t, r, i, a, u, s, f) {
  return {
    value: t,
    root: r,
    parent: i,
    type: a,
    props: u,
    children: s,
    line: Us,
    column: jl,
    length: f,
    return: "",
  };
}
function Za(t, r) {
  return $w(js("", null, null, "", null, null, 0), t, { length: -t.length }, r);
}
function Xw() {
  return Be;
}
function Qw() {
  return (
    (Be = pn > 0 ? Xe(Zl, --pn) : 0), jl--, Be === 10 && ((jl = 1), Us--), Be
  );
}
function An() {
  return (
    (Be = pn < Mv ? Xe(Zl, pn++) : 0), jl++, Be === 10 && ((jl = 1), Us++), Be
  );
}
function or() {
  return Xe(Zl, pn);
}
function us() {
  return pn;
}
function Co(t, r) {
  return go(Zl, t, r);
}
function yo(t) {
  switch (t) {
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    case 59:
    case 123:
    case 125:
      return 4;
    case 58:
      return 3;
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function zv(t) {
  return (Us = jl = 1), (Mv = rr((Zl = t))), (pn = 0), [];
}
function Dv(t) {
  return (Zl = ""), t;
}
function ss(t) {
  return Rv(Co(pn - 1, Jd(t === 91 ? t + 2 : t === 40 ? t + 1 : t)));
}
function Iw(t) {
  for (; (Be = or()) && Be < 33; ) An();
  return yo(t) > 2 || yo(Be) > 3 ? "" : " ";
}
function Zw(t, r) {
  for (
    ;
    --r &&
    An() &&
    !(Be < 48 || Be > 102 || (Be > 57 && Be < 65) || (Be > 70 && Be < 97));

  );
  return Co(t, us() + (r < 6 && or() == 32 && An() == 32));
}
function Jd(t) {
  for (; An(); )
    switch (Be) {
      case t:
        return pn;
      case 34:
      case 39:
        t !== 34 && t !== 39 && Jd(Be);
        break;
      case 40:
        t === 41 && Jd(t);
        break;
      case 92:
        An();
        break;
    }
  return pn;
}
function Kw(t, r) {
  for (; An() && t + Be !== 57; ) if (t + Be === 84 && or() === 47) break;
  return "/*" + Co(r, pn - 1) + "*" + Ls(t === 47 ? t : An());
}
function Fw(t) {
  for (; !yo(or()); ) An();
  return Co(t, pn);
}
function Ww(t) {
  return Dv(cs("", null, null, null, [""], (t = zv(t)), 0, [0], t));
}
function cs(t, r, i, a, u, s, f, d, h) {
  for (
    var m = 0,
      g = 0,
      y = f,
      b = 0,
      v = 0,
      O = 0,
      T = 1,
      L = 1,
      D = 1,
      G = 0,
      $ = "",
      H = u,
      R = s,
      k = a,
      Q = $;
    L;

  )
    switch (((O = G), (G = An()))) {
      case 40:
        if (O != 108 && Xe(Q, y - 1) == 58) {
          Wd((Q += Kt(ss(G), "&", "&\f")), "&\f") != -1 && (D = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        Q += ss(G);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        Q += Iw(O);
        break;
      case 92:
        Q += Zw(us() - 1, 7);
        continue;
      case 47:
        switch (or()) {
          case 42:
          case 47:
            Fu(Jw(Kw(An(), us()), r, i), h);
            break;
          default:
            Q += "/";
        }
        break;
      case 123 * T:
        d[m++] = rr(Q) * D;
      case 125 * T:
      case 59:
      case 0:
        switch (G) {
          case 0:
          case 125:
            L = 0;
          case 59 + g:
            D == -1 && (Q = Kt(Q, /\f/g, "")),
              v > 0 &&
                rr(Q) - y &&
                Fu(
                  v > 32
                    ? cy(Q + ";", a, i, y - 1)
                    : cy(Kt(Q, " ", "") + ";", a, i, y - 2),
                  h
                );
            break;
          case 59:
            Q += ";";
          default:
            if (
              (Fu((k = sy(Q, r, i, m, g, u, d, $, (H = []), (R = []), y)), s),
              G === 123)
            )
              if (g === 0) cs(Q, r, k, k, H, s, y, d, R);
              else
                switch (b === 99 && Xe(Q, 3) === 110 ? 100 : b) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    cs(
                      t,
                      k,
                      k,
                      a && Fu(sy(t, k, k, 0, 0, u, d, $, u, (H = []), y), R),
                      u,
                      R,
                      y,
                      d,
                      a ? H : R
                    );
                    break;
                  default:
                    cs(Q, k, k, k, [""], R, 0, d, R);
                }
        }
        (m = g = v = 0), (T = D = 1), ($ = Q = ""), (y = f);
        break;
      case 58:
        (y = 1 + rr(Q)), (v = O);
      default:
        if (T < 1) {
          if (G == 123) --T;
          else if (G == 125 && T++ == 0 && Qw() == 125) continue;
        }
        switch (((Q += Ls(G)), G * T)) {
          case 38:
            D = g > 0 ? 1 : ((Q += "\f"), -1);
            break;
          case 44:
            (d[m++] = (rr(Q) - 1) * D), (D = 1);
            break;
          case 64:
            or() === 45 && (Q += ss(An())),
              (b = or()),
              (g = y = rr(($ = Q += Fw(us())))),
              G++;
            break;
          case 45:
            O === 45 && rr(Q) == 2 && (T = 0);
        }
    }
  return s;
}
function sy(t, r, i, a, u, s, f, d, h, m, g) {
  for (
    var y = u - 1, b = u === 0 ? s : [""], v = Dp(b), O = 0, T = 0, L = 0;
    O < a;
    ++O
  )
    for (var D = 0, G = go(t, y + 1, (y = Pw((T = f[O])))), $ = t; D < v; ++D)
      ($ = Rv(T > 0 ? b[D] + " " + G : Kt(G, /&\f/g, b[D]))) && (h[L++] = $);
  return js(t, r, i, u === 0 ? Mp : d, h, m, g);
}
function Jw(t, r, i) {
  return js(t, r, i, kv, Ls(Xw()), go(t, 2, -2), 0);
}
function cy(t, r, i, a) {
  return js(t, r, i, zp, go(t, 0, a), go(t, a + 1, -1), a);
}
function Nl(t, r) {
  for (var i = "", a = Dp(t), u = 0; u < a; u++) i += r(t[u], u, t, r) || "";
  return i;
}
function t2(t, r, i, a) {
  switch (t.type) {
    case qw:
      if (t.children.length) break;
    case Hw:
    case zp:
      return (t.return = t.return || t.value);
    case kv:
      return "";
    case _v:
      return (t.return = t.value + "{" + Nl(t.children, a) + "}");
    case Mp:
      t.value = t.props.join(",");
  }
  return rr((i = Nl(t.children, a)))
    ? (t.return = t.value + "{" + i + "}")
    : "";
}
function e2(t) {
  var r = Dp(t);
  return function (i, a, u, s) {
    for (var f = "", d = 0; d < r; d++) f += t[d](i, a, u, s) || "";
    return f;
  };
}
function n2(t) {
  return function (r) {
    r.root || ((r = r.return) && t(r));
  };
}
function Nv(t) {
  var r = Object.create(null);
  return function (i) {
    return r[i] === void 0 && (r[i] = t(i)), r[i];
  };
}
var r2 = function (r, i, a) {
    for (
      var u = 0, s = 0;
      (u = s), (s = or()), u === 38 && s === 12 && (i[a] = 1), !yo(s);

    )
      An();
    return Co(r, pn);
  },
  i2 = function (r, i) {
    var a = -1,
      u = 44;
    do
      switch (yo(u)) {
        case 0:
          u === 38 && or() === 12 && (i[a] = 1), (r[a] += r2(pn - 1, i, a));
          break;
        case 2:
          r[a] += ss(u);
          break;
        case 4:
          if (u === 44) {
            (r[++a] = or() === 58 ? "&\f" : ""), (i[a] = r[a].length);
            break;
          }
        default:
          r[a] += Ls(u);
      }
    while ((u = An()));
    return r;
  },
  l2 = function (r, i) {
    return Dv(i2(zv(r), i));
  },
  fy = new WeakMap(),
  a2 = function (r) {
    if (!(r.type !== "rule" || !r.parent || r.length < 1)) {
      for (
        var i = r.value,
          a = r.parent,
          u = r.column === a.column && r.line === a.line;
        a.type !== "rule";

      )
        if (((a = a.parent), !a)) return;
      if (
        !(r.props.length === 1 && i.charCodeAt(0) !== 58 && !fy.get(a)) &&
        !u
      ) {
        fy.set(r, !0);
        for (
          var s = [], f = l2(i, s), d = a.props, h = 0, m = 0;
          h < f.length;
          h++
        )
          for (var g = 0; g < d.length; g++, m++)
            r.props[m] = s[h] ? f[h].replace(/&\f/g, d[g]) : d[g] + " " + f[h];
      }
    }
  },
  o2 = function (r) {
    if (r.type === "decl") {
      var i = r.value;
      i.charCodeAt(0) === 108 &&
        i.charCodeAt(2) === 98 &&
        ((r.return = ""), (r.value = ""));
    }
  };
function Bv(t, r) {
  switch (Vw(t, r)) {
    case 5103:
      return Zt + "print-" + t + t;
    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921:
    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005:
    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
    case 4855:
    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
      return Zt + t + t;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return Zt + t + Ss + t + Je + t + t;
    case 6828:
    case 4268:
      return Zt + t + Je + t + t;
    case 6165:
      return Zt + t + Je + "flex-" + t + t;
    case 5187:
      return (
        Zt + t + Kt(t, /(\w+).+(:[^]+)/, Zt + "box-$1$2" + Je + "flex-$1$2") + t
      );
    case 5443:
      return Zt + t + Je + "flex-item-" + Kt(t, /flex-|-self/, "") + t;
    case 4675:
      return (
        Zt +
        t +
        Je +
        "flex-line-pack" +
        Kt(t, /align-content|flex-|-self/, "") +
        t
      );
    case 5548:
      return Zt + t + Je + Kt(t, "shrink", "negative") + t;
    case 5292:
      return Zt + t + Je + Kt(t, "basis", "preferred-size") + t;
    case 6060:
      return (
        Zt +
        "box-" +
        Kt(t, "-grow", "") +
        Zt +
        t +
        Je +
        Kt(t, "grow", "positive") +
        t
      );
    case 4554:
      return Zt + Kt(t, /([^-])(transform)/g, "$1" + Zt + "$2") + t;
    case 6187:
      return (
        Kt(
          Kt(Kt(t, /(zoom-|grab)/, Zt + "$1"), /(image-set)/, Zt + "$1"),
          t,
          ""
        ) + t
      );
    case 5495:
    case 3959:
      return Kt(t, /(image-set\([^]*)/, Zt + "$1$`$1");
    case 4968:
      return (
        Kt(
          Kt(t, /(.+:)(flex-)?(.*)/, Zt + "box-pack:$3" + Je + "flex-pack:$3"),
          /s.+-b[^;]+/,
          "justify"
        ) +
        Zt +
        t +
        t
      );
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return Kt(t, /(.+)-inline(.+)/, Zt + "$1$2") + t;
    case 8116:
    case 7059:
    case 5753:
    case 5535:
    case 5445:
    case 5701:
    case 4933:
    case 4677:
    case 5533:
    case 5789:
    case 5021:
    case 4765:
      if (rr(t) - 1 - r > 6)
        switch (Xe(t, r + 1)) {
          case 109:
            if (Xe(t, r + 4) !== 45) break;
          case 102:
            return (
              Kt(
                t,
                /(.+:)(.+)-([^]+)/,
                "$1" +
                  Zt +
                  "$2-$3$1" +
                  Ss +
                  (Xe(t, r + 3) == 108 ? "$3" : "$2-$3")
              ) + t
            );
          case 115:
            return ~Wd(t, "stretch")
              ? Bv(Kt(t, "stretch", "fill-available"), r) + t
              : t;
        }
      break;
    case 4949:
      if (Xe(t, r + 1) !== 115) break;
    case 6444:
      switch (Xe(t, rr(t) - 3 - (~Wd(t, "!important") && 10))) {
        case 107:
          return Kt(t, ":", ":" + Zt) + t;
        case 101:
          return (
            Kt(
              t,
              /(.+:)([^;!]+)(;|!.+)?/,
              "$1" +
                Zt +
                (Xe(t, 14) === 45 ? "inline-" : "") +
                "box$3$1" +
                Zt +
                "$2$3$1" +
                Je +
                "$2box$3"
            ) + t
          );
      }
      break;
    case 5936:
      switch (Xe(t, r + 11)) {
        case 114:
          return Zt + t + Je + Kt(t, /[svh]\w+-[tblr]{2}/, "tb") + t;
        case 108:
          return Zt + t + Je + Kt(t, /[svh]\w+-[tblr]{2}/, "tb-rl") + t;
        case 45:
          return Zt + t + Je + Kt(t, /[svh]\w+-[tblr]{2}/, "lr") + t;
      }
      return Zt + t + Je + t + t;
  }
  return t;
}
var u2 = function (r, i, a, u) {
    if (r.length > -1 && !r.return)
      switch (r.type) {
        case zp:
          r.return = Bv(r.value, r.length);
          break;
        case _v:
          return Nl([Za(r, { value: Kt(r.value, "@", "@" + Zt) })], u);
        case Mp:
          if (r.length)
            return Gw(r.props, function (s) {
              switch (Yw(s, /(::plac\w+|:read-\w+)/)) {
                case ":read-only":
                case ":read-write":
                  return Nl(
                    [Za(r, { props: [Kt(s, /:(read-\w+)/, ":" + Ss + "$1")] })],
                    u
                  );
                case "::placeholder":
                  return Nl(
                    [
                      Za(r, {
                        props: [Kt(s, /:(plac\w+)/, ":" + Zt + "input-$1")],
                      }),
                      Za(r, { props: [Kt(s, /:(plac\w+)/, ":" + Ss + "$1")] }),
                      Za(r, { props: [Kt(s, /:(plac\w+)/, Je + "input-$1")] }),
                    ],
                    u
                  );
              }
              return "";
            });
      }
  },
  s2 = [u2],
  c2 = function (r) {
    var i = r.key;
    if (i === "css") {
      var a = document.querySelectorAll("style[data-emotion]:not([data-s])");
      Array.prototype.forEach.call(a, function (T) {
        var L = T.getAttribute("data-emotion");
        L.indexOf(" ") !== -1 &&
          (document.head.appendChild(T), T.setAttribute("data-s", ""));
      });
    }
    var u = r.stylisPlugins || s2,
      s = {},
      f,
      d = [];
    (f = r.container || document.head),
      Array.prototype.forEach.call(
        document.querySelectorAll('style[data-emotion^="' + i + ' "]'),
        function (T) {
          for (
            var L = T.getAttribute("data-emotion").split(" "), D = 1;
            D < L.length;
            D++
          )
            s[L[D]] = !0;
          d.push(T);
        }
      );
    var h,
      m = [a2, o2];
    {
      var g,
        y = [
          t2,
          n2(function (T) {
            g.insert(T);
          }),
        ],
        b = e2(m.concat(u, y)),
        v = function (L) {
          return Nl(Ww(L), b);
        };
      h = function (L, D, G, $) {
        (g = G),
          v(L ? L + "{" + D.styles + "}" : D.styles),
          $ && (O.inserted[D.name] = !0);
      };
    }
    var O = {
      key: i,
      sheet: new jw({
        key: i,
        container: f,
        nonce: r.nonce,
        speedy: r.speedy,
        prepend: r.prepend,
        insertionPoint: r.insertionPoint,
      }),
      nonce: r.nonce,
      inserted: s,
      registered: {},
      insert: h,
    };
    return O.sheet.hydrate(d), O;
  };
function tp() {
  return (
    (tp = Object.assign
      ? Object.assign.bind()
      : function (t) {
          for (var r = 1; r < arguments.length; r++) {
            var i = arguments[r];
            for (var a in i) ({}).hasOwnProperty.call(i, a) && (t[a] = i[a]);
          }
          return t;
        }),
    tp.apply(null, arguments)
  );
}
var xd = { exports: {} },
  Wt = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var dy;
function f2() {
  if (dy) return Wt;
  dy = 1;
  var t = typeof Symbol == "function" && Symbol.for,
    r = t ? Symbol.for("react.element") : 60103,
    i = t ? Symbol.for("react.portal") : 60106,
    a = t ? Symbol.for("react.fragment") : 60107,
    u = t ? Symbol.for("react.strict_mode") : 60108,
    s = t ? Symbol.for("react.profiler") : 60114,
    f = t ? Symbol.for("react.provider") : 60109,
    d = t ? Symbol.for("react.context") : 60110,
    h = t ? Symbol.for("react.async_mode") : 60111,
    m = t ? Symbol.for("react.concurrent_mode") : 60111,
    g = t ? Symbol.for("react.forward_ref") : 60112,
    y = t ? Symbol.for("react.suspense") : 60113,
    b = t ? Symbol.for("react.suspense_list") : 60120,
    v = t ? Symbol.for("react.memo") : 60115,
    O = t ? Symbol.for("react.lazy") : 60116,
    T = t ? Symbol.for("react.block") : 60121,
    L = t ? Symbol.for("react.fundamental") : 60117,
    D = t ? Symbol.for("react.responder") : 60118,
    G = t ? Symbol.for("react.scope") : 60119;
  function $(R) {
    if (typeof R == "object" && R !== null) {
      var k = R.$$typeof;
      switch (k) {
        case r:
          switch (((R = R.type), R)) {
            case h:
            case m:
            case a:
            case s:
            case u:
            case y:
              return R;
            default:
              switch (((R = R && R.$$typeof), R)) {
                case d:
                case g:
                case O:
                case v:
                case f:
                  return R;
                default:
                  return k;
              }
          }
        case i:
          return k;
      }
    }
  }
  function H(R) {
    return $(R) === m;
  }
  return (
    (Wt.AsyncMode = h),
    (Wt.ConcurrentMode = m),
    (Wt.ContextConsumer = d),
    (Wt.ContextProvider = f),
    (Wt.Element = r),
    (Wt.ForwardRef = g),
    (Wt.Fragment = a),
    (Wt.Lazy = O),
    (Wt.Memo = v),
    (Wt.Portal = i),
    (Wt.Profiler = s),
    (Wt.StrictMode = u),
    (Wt.Suspense = y),
    (Wt.isAsyncMode = function (R) {
      return H(R) || $(R) === h;
    }),
    (Wt.isConcurrentMode = H),
    (Wt.isContextConsumer = function (R) {
      return $(R) === d;
    }),
    (Wt.isContextProvider = function (R) {
      return $(R) === f;
    }),
    (Wt.isElement = function (R) {
      return typeof R == "object" && R !== null && R.$$typeof === r;
    }),
    (Wt.isForwardRef = function (R) {
      return $(R) === g;
    }),
    (Wt.isFragment = function (R) {
      return $(R) === a;
    }),
    (Wt.isLazy = function (R) {
      return $(R) === O;
    }),
    (Wt.isMemo = function (R) {
      return $(R) === v;
    }),
    (Wt.isPortal = function (R) {
      return $(R) === i;
    }),
    (Wt.isProfiler = function (R) {
      return $(R) === s;
    }),
    (Wt.isStrictMode = function (R) {
      return $(R) === u;
    }),
    (Wt.isSuspense = function (R) {
      return $(R) === y;
    }),
    (Wt.isValidElementType = function (R) {
      return (
        typeof R == "string" ||
        typeof R == "function" ||
        R === a ||
        R === m ||
        R === s ||
        R === u ||
        R === y ||
        R === b ||
        (typeof R == "object" &&
          R !== null &&
          (R.$$typeof === O ||
            R.$$typeof === v ||
            R.$$typeof === f ||
            R.$$typeof === d ||
            R.$$typeof === g ||
            R.$$typeof === L ||
            R.$$typeof === D ||
            R.$$typeof === G ||
            R.$$typeof === T))
      );
    }),
    (Wt.typeOf = $),
    Wt
  );
}
var py;
function d2() {
  return py || ((py = 1), (xd.exports = f2())), xd.exports;
}
var Sd, hy;
function p2() {
  if (hy) return Sd;
  hy = 1;
  var t = d2(),
    r = {
      childContextTypes: !0,
      contextType: !0,
      contextTypes: !0,
      defaultProps: !0,
      displayName: !0,
      getDefaultProps: !0,
      getDerivedStateFromError: !0,
      getDerivedStateFromProps: !0,
      mixins: !0,
      propTypes: !0,
      type: !0,
    },
    i = {
      name: !0,
      length: !0,
      prototype: !0,
      caller: !0,
      callee: !0,
      arguments: !0,
      arity: !0,
    },
    a = {
      $$typeof: !0,
      render: !0,
      defaultProps: !0,
      displayName: !0,
      propTypes: !0,
    },
    u = {
      $$typeof: !0,
      compare: !0,
      defaultProps: !0,
      displayName: !0,
      propTypes: !0,
      type: !0,
    },
    s = {};
  (s[t.ForwardRef] = a), (s[t.Memo] = u);
  function f(O) {
    return t.isMemo(O) ? u : s[O.$$typeof] || r;
  }
  var d = Object.defineProperty,
    h = Object.getOwnPropertyNames,
    m = Object.getOwnPropertySymbols,
    g = Object.getOwnPropertyDescriptor,
    y = Object.getPrototypeOf,
    b = Object.prototype;
  function v(O, T, L) {
    if (typeof T != "string") {
      if (b) {
        var D = y(T);
        D && D !== b && v(O, D, L);
      }
      var G = h(T);
      m && (G = G.concat(m(T)));
      for (var $ = f(O), H = f(T), R = 0; R < G.length; ++R) {
        var k = G[R];
        if (!i[k] && !(L && L[k]) && !(H && H[k]) && !($ && $[k])) {
          var Q = g(T, k);
          try {
            d(O, k, Q);
          } catch {}
        }
      }
    }
    return O;
  }
  return (Sd = v), Sd;
}
p2();
var h2 = !0;
function Lv(t, r, i) {
  var a = "";
  return (
    i.split(" ").forEach(function (u) {
      t[u] !== void 0 ? r.push(t[u] + ";") : u && (a += u + " ");
    }),
    a
  );
}
var Np = function (r, i, a) {
    var u = r.key + "-" + i.name;
    (a === !1 || h2 === !1) &&
      r.registered[u] === void 0 &&
      (r.registered[u] = i.styles);
  },
  Uv = function (r, i, a) {
    Np(r, i, a);
    var u = r.key + "-" + i.name;
    if (r.inserted[i.name] === void 0) {
      var s = i;
      do r.insert(i === s ? "." + u : "", s, r.sheet, !0), (s = s.next);
      while (s !== void 0);
    }
  };
function m2(t) {
  for (var r = 0, i, a = 0, u = t.length; u >= 4; ++a, u -= 4)
    (i =
      (t.charCodeAt(a) & 255) |
      ((t.charCodeAt(++a) & 255) << 8) |
      ((t.charCodeAt(++a) & 255) << 16) |
      ((t.charCodeAt(++a) & 255) << 24)),
      (i = (i & 65535) * 1540483477 + (((i >>> 16) * 59797) << 16)),
      (i ^= i >>> 24),
      (r =
        ((i & 65535) * 1540483477 + (((i >>> 16) * 59797) << 16)) ^
        ((r & 65535) * 1540483477 + (((r >>> 16) * 59797) << 16)));
  switch (u) {
    case 3:
      r ^= (t.charCodeAt(a + 2) & 255) << 16;
    case 2:
      r ^= (t.charCodeAt(a + 1) & 255) << 8;
    case 1:
      (r ^= t.charCodeAt(a) & 255),
        (r = (r & 65535) * 1540483477 + (((r >>> 16) * 59797) << 16));
  }
  return (
    (r ^= r >>> 13),
    (r = (r & 65535) * 1540483477 + (((r >>> 16) * 59797) << 16)),
    ((r ^ (r >>> 15)) >>> 0).toString(36)
  );
}
var g2 = {
    animationIterationCount: 1,
    aspectRatio: 1,
    borderImageOutset: 1,
    borderImageSlice: 1,
    borderImageWidth: 1,
    boxFlex: 1,
    boxFlexGroup: 1,
    boxOrdinalGroup: 1,
    columnCount: 1,
    columns: 1,
    flex: 1,
    flexGrow: 1,
    flexPositive: 1,
    flexShrink: 1,
    flexNegative: 1,
    flexOrder: 1,
    gridRow: 1,
    gridRowEnd: 1,
    gridRowSpan: 1,
    gridRowStart: 1,
    gridColumn: 1,
    gridColumnEnd: 1,
    gridColumnSpan: 1,
    gridColumnStart: 1,
    msGridRow: 1,
    msGridRowSpan: 1,
    msGridColumn: 1,
    msGridColumnSpan: 1,
    fontWeight: 1,
    lineHeight: 1,
    opacity: 1,
    order: 1,
    orphans: 1,
    scale: 1,
    tabSize: 1,
    widows: 1,
    zIndex: 1,
    zoom: 1,
    WebkitLineClamp: 1,
    fillOpacity: 1,
    floodOpacity: 1,
    stopOpacity: 1,
    strokeDasharray: 1,
    strokeDashoffset: 1,
    strokeMiterlimit: 1,
    strokeOpacity: 1,
    strokeWidth: 1,
  },
  y2 = /[A-Z]|^ms/g,
  v2 = /_EMO_([^_]+?)_([^]*?)_EMO_/g,
  jv = function (r) {
    return r.charCodeAt(1) === 45;
  },
  my = function (r) {
    return r != null && typeof r != "boolean";
  },
  wd = Nv(function (t) {
    return jv(t) ? t : t.replace(y2, "-$&").toLowerCase();
  }),
  gy = function (r, i) {
    switch (r) {
      case "animation":
      case "animationName":
        if (typeof i == "string")
          return i.replace(v2, function (a, u, s) {
            return (ir = { name: u, styles: s, next: ir }), u;
          });
    }
    return g2[r] !== 1 && !jv(r) && typeof i == "number" && i !== 0
      ? i + "px"
      : i;
  };
function vo(t, r, i) {
  if (i == null) return "";
  var a = i;
  if (a.__emotion_styles !== void 0) return a;
  switch (typeof i) {
    case "boolean":
      return "";
    case "object": {
      var u = i;
      if (u.anim === 1)
        return (ir = { name: u.name, styles: u.styles, next: ir }), u.name;
      var s = i;
      if (s.styles !== void 0) {
        var f = s.next;
        if (f !== void 0)
          for (; f !== void 0; )
            (ir = { name: f.name, styles: f.styles, next: ir }), (f = f.next);
        var d = s.styles + ";";
        return d;
      }
      return b2(t, r, i);
    }
    case "function": {
      if (t !== void 0) {
        var h = ir,
          m = i(t);
        return (ir = h), vo(t, r, m);
      }
      break;
    }
  }
  var g = i;
  if (r == null) return g;
  var y = r[g];
  return y !== void 0 ? y : g;
}
function b2(t, r, i) {
  var a = "";
  if (Array.isArray(i))
    for (var u = 0; u < i.length; u++) a += vo(t, r, i[u]) + ";";
  else
    for (var s in i) {
      var f = i[s];
      if (typeof f != "object") {
        var d = f;
        r != null && r[d] !== void 0
          ? (a += s + "{" + r[d] + "}")
          : my(d) && (a += wd(s) + ":" + gy(s, d) + ";");
      } else if (
        Array.isArray(f) &&
        typeof f[0] == "string" &&
        (r == null || r[f[0]] === void 0)
      )
        for (var h = 0; h < f.length; h++)
          my(f[h]) && (a += wd(s) + ":" + gy(s, f[h]) + ";");
      else {
        var m = vo(t, r, f);
        switch (s) {
          case "animation":
          case "animationName": {
            a += wd(s) + ":" + m + ";";
            break;
          }
          default:
            a += s + "{" + m + "}";
        }
      }
    }
  return a;
}
var yy = /label:\s*([^\s;{]+)\s*(;|$)/g,
  ir;
function Hs(t, r, i) {
  if (
    t.length === 1 &&
    typeof t[0] == "object" &&
    t[0] !== null &&
    t[0].styles !== void 0
  )
    return t[0];
  var a = !0,
    u = "";
  ir = void 0;
  var s = t[0];
  if (s == null || s.raw === void 0) (a = !1), (u += vo(i, r, s));
  else {
    var f = s;
    u += f[0];
  }
  for (var d = 1; d < t.length; d++)
    if (((u += vo(i, r, t[d])), a)) {
      var h = s;
      u += h[d];
    }
  yy.lastIndex = 0;
  for (var m = "", g; (g = yy.exec(u)) !== null; ) m += "-" + g[1];
  var y = m2(u) + m;
  return { name: y, styles: u, next: ir };
}
var x2 = function (r) {
    return r();
  },
  S2 = Fd.useInsertionEffect ? Fd.useInsertionEffect : !1,
  Hv = S2 || x2,
  qv = tt.createContext(typeof HTMLElement < "u" ? c2({ key: "css" }) : null);
qv.Provider;
var Pv = function (r) {
    return tt.forwardRef(function (i, a) {
      var u = tt.useContext(qv);
      return r(i, u, a);
    });
  },
  Bp = tt.createContext({}),
  ko = {}.hasOwnProperty,
  ep = "__EMOTION_TYPE_PLEASE_DO_NOT_USE__",
  Lp = function (r, i) {
    var a = {};
    for (var u in i) ko.call(i, u) && (a[u] = i[u]);
    return (a[ep] = r), a;
  },
  w2 = function (r) {
    var i = r.cache,
      a = r.serialized,
      u = r.isStringTag;
    return (
      Np(i, a, u),
      Hv(function () {
        return Uv(i, a, u);
      }),
      null
    );
  },
  E2 = Pv(function (t, r, i) {
    var a = t.css;
    typeof a == "string" && r.registered[a] !== void 0 && (a = r.registered[a]);
    var u = t[ep],
      s = [a],
      f = "";
    typeof t.className == "string"
      ? (f = Lv(r.registered, s, t.className))
      : t.className != null && (f = t.className + " ");
    var d = Hs(s, void 0, tt.useContext(Bp));
    f += r.key + "-" + d.name;
    var h = {};
    for (var m in t) ko.call(t, m) && m !== "css" && m !== ep && (h[m] = t[m]);
    return (
      (h.className = f),
      i && (h.ref = i),
      tt.createElement(
        tt.Fragment,
        null,
        tt.createElement(w2, {
          cache: r,
          serialized: d,
          isStringTag: typeof u == "string",
        }),
        tt.createElement(u, h)
      )
    );
  }),
  Up = E2,
  T2 = ye.Fragment,
  dt = function (r, i, a) {
    return ko.call(i, "css") ? ye.jsx(Up, Lp(r, i), a) : ye.jsx(r, i, a);
  },
  Ce = function (r, i, a) {
    return ko.call(i, "css") ? ye.jsxs(Up, Lp(r, i), a) : ye.jsxs(r, i, a);
  },
  Ed = { exports: {} },
  Ka = {},
  Td = { exports: {} },
  Ad = {};
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var vy;
function A2() {
  return (
    vy ||
      ((vy = 1),
      (function (t) {
        function r(_, P) {
          var nt = _.length;
          _.push(P);
          t: for (; 0 < nt; ) {
            var pt = (nt - 1) >>> 1,
              x = _[pt];
            if (0 < u(x, P)) (_[pt] = P), (_[nt] = x), (nt = pt);
            else break t;
          }
        }
        function i(_) {
          return _.length === 0 ? null : _[0];
        }
        function a(_) {
          if (_.length === 0) return null;
          var P = _[0],
            nt = _.pop();
          if (nt !== P) {
            _[0] = nt;
            t: for (var pt = 0, x = _.length, Z = x >>> 1; pt < Z; ) {
              var J = 2 * (pt + 1) - 1,
                A = _[J],
                ut = J + 1,
                st = _[ut];
              if (0 > u(A, nt))
                ut < x && 0 > u(st, A)
                  ? ((_[pt] = st), (_[ut] = nt), (pt = ut))
                  : ((_[pt] = A), (_[J] = nt), (pt = J));
              else if (ut < x && 0 > u(st, nt))
                (_[pt] = st), (_[ut] = nt), (pt = ut);
              else break t;
            }
          }
          return P;
        }
        function u(_, P) {
          var nt = _.sortIndex - P.sortIndex;
          return nt !== 0 ? nt : _.id - P.id;
        }
        if (
          ((t.unstable_now = void 0),
          typeof performance == "object" &&
            typeof performance.now == "function")
        ) {
          var s = performance;
          t.unstable_now = function () {
            return s.now();
          };
        } else {
          var f = Date,
            d = f.now();
          t.unstable_now = function () {
            return f.now() - d;
          };
        }
        var h = [],
          m = [],
          g = 1,
          y = null,
          b = 3,
          v = !1,
          O = !1,
          T = !1,
          L = !1,
          D = typeof setTimeout == "function" ? setTimeout : null,
          G = typeof clearTimeout == "function" ? clearTimeout : null,
          $ = typeof setImmediate < "u" ? setImmediate : null;
        function H(_) {
          for (var P = i(m); P !== null; ) {
            if (P.callback === null) a(m);
            else if (P.startTime <= _)
              a(m), (P.sortIndex = P.expirationTime), r(h, P);
            else break;
            P = i(m);
          }
        }
        function R(_) {
          if (((T = !1), H(_), !O))
            if (i(h) !== null) (O = !0), k || ((k = !0), w());
            else {
              var P = i(m);
              P !== null && V(R, P.startTime - _);
            }
        }
        var k = !1,
          Q = -1,
          C = 5,
          U = -1;
        function z() {
          return L ? !0 : !(t.unstable_now() - U < C);
        }
        function q() {
          if (((L = !1), k)) {
            var _ = t.unstable_now();
            U = _;
            var P = !0;
            try {
              t: {
                (O = !1), T && ((T = !1), G(Q), (Q = -1)), (v = !0);
                var nt = b;
                try {
                  e: {
                    for (
                      H(_), y = i(h);
                      y !== null && !(y.expirationTime > _ && z());

                    ) {
                      var pt = y.callback;
                      if (typeof pt == "function") {
                        (y.callback = null), (b = y.priorityLevel);
                        var x = pt(y.expirationTime <= _);
                        if (((_ = t.unstable_now()), typeof x == "function")) {
                          (y.callback = x), H(_), (P = !0);
                          break e;
                        }
                        y === i(h) && a(h), H(_);
                      } else a(h);
                      y = i(h);
                    }
                    if (y !== null) P = !0;
                    else {
                      var Z = i(m);
                      Z !== null && V(R, Z.startTime - _), (P = !1);
                    }
                  }
                  break t;
                } finally {
                  (y = null), (b = nt), (v = !1);
                }
                P = void 0;
              }
            } finally {
              P ? w() : (k = !1);
            }
          }
        }
        var w;
        if (typeof $ == "function")
          w = function () {
            $(q);
          };
        else if (typeof MessageChannel < "u") {
          var B = new MessageChannel(),
            N = B.port2;
          (B.port1.onmessage = q),
            (w = function () {
              N.postMessage(null);
            });
        } else
          w = function () {
            D(q, 0);
          };
        function V(_, P) {
          Q = D(function () {
            _(t.unstable_now());
          }, P);
        }
        (t.unstable_IdlePriority = 5),
          (t.unstable_ImmediatePriority = 1),
          (t.unstable_LowPriority = 4),
          (t.unstable_NormalPriority = 3),
          (t.unstable_Profiling = null),
          (t.unstable_UserBlockingPriority = 2),
          (t.unstable_cancelCallback = function (_) {
            _.callback = null;
          }),
          (t.unstable_forceFrameRate = function (_) {
            0 > _ || 125 < _
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
                )
              : (C = 0 < _ ? Math.floor(1e3 / _) : 5);
          }),
          (t.unstable_getCurrentPriorityLevel = function () {
            return b;
          }),
          (t.unstable_next = function (_) {
            switch (b) {
              case 1:
              case 2:
              case 3:
                var P = 3;
                break;
              default:
                P = b;
            }
            var nt = b;
            b = P;
            try {
              return _();
            } finally {
              b = nt;
            }
          }),
          (t.unstable_requestPaint = function () {
            L = !0;
          }),
          (t.unstable_runWithPriority = function (_, P) {
            switch (_) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                _ = 3;
            }
            var nt = b;
            b = _;
            try {
              return P();
            } finally {
              b = nt;
            }
          }),
          (t.unstable_scheduleCallback = function (_, P, nt) {
            var pt = t.unstable_now();
            switch (
              (typeof nt == "object" && nt !== null
                ? ((nt = nt.delay),
                  (nt = typeof nt == "number" && 0 < nt ? pt + nt : pt))
                : (nt = pt),
              _)
            ) {
              case 1:
                var x = -1;
                break;
              case 2:
                x = 250;
                break;
              case 5:
                x = 1073741823;
                break;
              case 4:
                x = 1e4;
                break;
              default:
                x = 5e3;
            }
            return (
              (x = nt + x),
              (_ = {
                id: g++,
                callback: P,
                priorityLevel: _,
                startTime: nt,
                expirationTime: x,
                sortIndex: -1,
              }),
              nt > pt
                ? ((_.sortIndex = nt),
                  r(m, _),
                  i(h) === null &&
                    _ === i(m) &&
                    (T ? (G(Q), (Q = -1)) : (T = !0), V(R, nt - pt)))
                : ((_.sortIndex = x),
                  r(h, _),
                  O || v || ((O = !0), k || ((k = !0), w()))),
              _
            );
          }),
          (t.unstable_shouldYield = z),
          (t.unstable_wrapCallback = function (_) {
            var P = b;
            return function () {
              var nt = b;
              b = P;
              try {
                return _.apply(this, arguments);
              } finally {
                b = nt;
              }
            };
          });
      })(Ad)),
    Ad
  );
}
var by;
function O2() {
  return by || ((by = 1), (Td.exports = A2())), Td.exports;
}
var Od = { exports: {} },
  We = {};
/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var xy;
function C2() {
  if (xy) return We;
  xy = 1;
  var t = Bs();
  function r(h) {
    var m = "https://react.dev/errors/" + h;
    if (1 < arguments.length) {
      m += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var g = 2; g < arguments.length; g++)
        m += "&args[]=" + encodeURIComponent(arguments[g]);
    }
    return (
      "Minified React error #" +
      h +
      "; visit " +
      m +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  function i() {}
  var a = {
      d: {
        f: i,
        r: function () {
          throw Error(r(522));
        },
        D: i,
        C: i,
        L: i,
        m: i,
        X: i,
        S: i,
        M: i,
      },
      p: 0,
      findDOMNode: null,
    },
    u = Symbol.for("react.portal");
  function s(h, m, g) {
    var y =
      3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: u,
      key: y == null ? null : "" + y,
      children: h,
      containerInfo: m,
      implementation: g,
    };
  }
  var f = t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function d(h, m) {
    if (h === "font") return "";
    if (typeof m == "string") return m === "use-credentials" ? m : "";
  }
  return (
    (We.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = a),
    (We.createPortal = function (h, m) {
      var g =
        2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!m || (m.nodeType !== 1 && m.nodeType !== 9 && m.nodeType !== 11))
        throw Error(r(299));
      return s(h, m, null, g);
    }),
    (We.flushSync = function (h) {
      var m = f.T,
        g = a.p;
      try {
        if (((f.T = null), (a.p = 2), h)) return h();
      } finally {
        (f.T = m), (a.p = g), a.d.f();
      }
    }),
    (We.preconnect = function (h, m) {
      typeof h == "string" &&
        (m
          ? ((m = m.crossOrigin),
            (m =
              typeof m == "string"
                ? m === "use-credentials"
                  ? m
                  : ""
                : void 0))
          : (m = null),
        a.d.C(h, m));
    }),
    (We.prefetchDNS = function (h) {
      typeof h == "string" && a.d.D(h);
    }),
    (We.preinit = function (h, m) {
      if (typeof h == "string" && m && typeof m.as == "string") {
        var g = m.as,
          y = d(g, m.crossOrigin),
          b = typeof m.integrity == "string" ? m.integrity : void 0,
          v = typeof m.fetchPriority == "string" ? m.fetchPriority : void 0;
        g === "style"
          ? a.d.S(h, typeof m.precedence == "string" ? m.precedence : void 0, {
              crossOrigin: y,
              integrity: b,
              fetchPriority: v,
            })
          : g === "script" &&
            a.d.X(h, {
              crossOrigin: y,
              integrity: b,
              fetchPriority: v,
              nonce: typeof m.nonce == "string" ? m.nonce : void 0,
            });
      }
    }),
    (We.preinitModule = function (h, m) {
      if (typeof h == "string")
        if (typeof m == "object" && m !== null) {
          if (m.as == null || m.as === "script") {
            var g = d(m.as, m.crossOrigin);
            a.d.M(h, {
              crossOrigin: g,
              integrity: typeof m.integrity == "string" ? m.integrity : void 0,
              nonce: typeof m.nonce == "string" ? m.nonce : void 0,
            });
          }
        } else m == null && a.d.M(h);
    }),
    (We.preload = function (h, m) {
      if (
        typeof h == "string" &&
        typeof m == "object" &&
        m !== null &&
        typeof m.as == "string"
      ) {
        var g = m.as,
          y = d(g, m.crossOrigin);
        a.d.L(h, g, {
          crossOrigin: y,
          integrity: typeof m.integrity == "string" ? m.integrity : void 0,
          nonce: typeof m.nonce == "string" ? m.nonce : void 0,
          type: typeof m.type == "string" ? m.type : void 0,
          fetchPriority:
            typeof m.fetchPriority == "string" ? m.fetchPriority : void 0,
          referrerPolicy:
            typeof m.referrerPolicy == "string" ? m.referrerPolicy : void 0,
          imageSrcSet:
            typeof m.imageSrcSet == "string" ? m.imageSrcSet : void 0,
          imageSizes: typeof m.imageSizes == "string" ? m.imageSizes : void 0,
          media: typeof m.media == "string" ? m.media : void 0,
        });
      }
    }),
    (We.preloadModule = function (h, m) {
      if (typeof h == "string")
        if (m) {
          var g = d(m.as, m.crossOrigin);
          a.d.m(h, {
            as: typeof m.as == "string" && m.as !== "script" ? m.as : void 0,
            crossOrigin: g,
            integrity: typeof m.integrity == "string" ? m.integrity : void 0,
          });
        } else a.d.m(h);
    }),
    (We.requestFormReset = function (h) {
      a.d.r(h);
    }),
    (We.unstable_batchedUpdates = function (h, m) {
      return h(m);
    }),
    (We.useFormState = function (h, m, g) {
      return f.H.useFormState(h, m, g);
    }),
    (We.useFormStatus = function () {
      return f.H.useHostTransitionStatus();
    }),
    (We.version = "19.1.1"),
    We
  );
}
var Sy;
function $v() {
  if (Sy) return Od.exports;
  Sy = 1;
  function t() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t);
      } catch (r) {
        console.error(r);
      }
  }
  return t(), (Od.exports = C2()), Od.exports;
}
/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var wy;
function k2() {
  if (wy) return Ka;
  wy = 1;
  var t = O2(),
    r = Bs(),
    i = $v();
  function a(e) {
    var n = "https://react.dev/errors/" + e;
    if (1 < arguments.length) {
      n += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var l = 2; l < arguments.length; l++)
        n += "&args[]=" + encodeURIComponent(arguments[l]);
    }
    return (
      "Minified React error #" +
      e +
      "; visit " +
      n +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  function u(e) {
    return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
  }
  function s(e) {
    var n = e,
      l = e;
    if (e.alternate) for (; n.return; ) n = n.return;
    else {
      e = n;
      do (n = e), (n.flags & 4098) !== 0 && (l = n.return), (e = n.return);
      while (e);
    }
    return n.tag === 3 ? l : null;
  }
  function f(e) {
    if (e.tag === 13) {
      var n = e.memoizedState;
      if (
        (n === null && ((e = e.alternate), e !== null && (n = e.memoizedState)),
        n !== null)
      )
        return n.dehydrated;
    }
    return null;
  }
  function d(e) {
    if (s(e) !== e) throw Error(a(188));
  }
  function h(e) {
    var n = e.alternate;
    if (!n) {
      if (((n = s(e)), n === null)) throw Error(a(188));
      return n !== e ? null : e;
    }
    for (var l = e, o = n; ; ) {
      var c = l.return;
      if (c === null) break;
      var p = c.alternate;
      if (p === null) {
        if (((o = c.return), o !== null)) {
          l = o;
          continue;
        }
        break;
      }
      if (c.child === p.child) {
        for (p = c.child; p; ) {
          if (p === l) return d(c), e;
          if (p === o) return d(c), n;
          p = p.sibling;
        }
        throw Error(a(188));
      }
      if (l.return !== o.return) (l = c), (o = p);
      else {
        for (var S = !1, E = c.child; E; ) {
          if (E === l) {
            (S = !0), (l = c), (o = p);
            break;
          }
          if (E === o) {
            (S = !0), (o = c), (l = p);
            break;
          }
          E = E.sibling;
        }
        if (!S) {
          for (E = p.child; E; ) {
            if (E === l) {
              (S = !0), (l = p), (o = c);
              break;
            }
            if (E === o) {
              (S = !0), (o = p), (l = c);
              break;
            }
            E = E.sibling;
          }
          if (!S) throw Error(a(189));
        }
      }
      if (l.alternate !== o) throw Error(a(190));
    }
    if (l.tag !== 3) throw Error(a(188));
    return l.stateNode.current === l ? e : n;
  }
  function m(e) {
    var n = e.tag;
    if (n === 5 || n === 26 || n === 27 || n === 6) return e;
    for (e = e.child; e !== null; ) {
      if (((n = m(e)), n !== null)) return n;
      e = e.sibling;
    }
    return null;
  }
  var g = Object.assign,
    y = Symbol.for("react.element"),
    b = Symbol.for("react.transitional.element"),
    v = Symbol.for("react.portal"),
    O = Symbol.for("react.fragment"),
    T = Symbol.for("react.strict_mode"),
    L = Symbol.for("react.profiler"),
    D = Symbol.for("react.provider"),
    G = Symbol.for("react.consumer"),
    $ = Symbol.for("react.context"),
    H = Symbol.for("react.forward_ref"),
    R = Symbol.for("react.suspense"),
    k = Symbol.for("react.suspense_list"),
    Q = Symbol.for("react.memo"),
    C = Symbol.for("react.lazy"),
    U = Symbol.for("react.activity"),
    z = Symbol.for("react.memo_cache_sentinel"),
    q = Symbol.iterator;
  function w(e) {
    return e === null || typeof e != "object"
      ? null
      : ((e = (q && e[q]) || e["@@iterator"]),
        typeof e == "function" ? e : null);
  }
  var B = Symbol.for("react.client.reference");
  function N(e) {
    if (e == null) return null;
    if (typeof e == "function")
      return e.$$typeof === B ? null : e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case O:
        return "Fragment";
      case L:
        return "Profiler";
      case T:
        return "StrictMode";
      case R:
        return "Suspense";
      case k:
        return "SuspenseList";
      case U:
        return "Activity";
    }
    if (typeof e == "object")
      switch (e.$$typeof) {
        case v:
          return "Portal";
        case $:
          return (e.displayName || "Context") + ".Provider";
        case G:
          return (e._context.displayName || "Context") + ".Consumer";
        case H:
          var n = e.render;
          return (
            (e = e.displayName),
            e ||
              ((e = n.displayName || n.name || ""),
              (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
            e
          );
        case Q:
          return (
            (n = e.displayName || null), n !== null ? n : N(e.type) || "Memo"
          );
        case C:
          (n = e._payload), (e = e._init);
          try {
            return N(e(n));
          } catch {}
      }
    return null;
  }
  var V = Array.isArray,
    _ = r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    P = i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    nt = { pending: !1, data: null, method: null, action: null },
    pt = [],
    x = -1;
  function Z(e) {
    return { current: e };
  }
  function J(e) {
    0 > x || ((e.current = pt[x]), (pt[x] = null), x--);
  }
  function A(e, n) {
    x++, (pt[x] = e.current), (e.current = n);
  }
  var ut = Z(null),
    st = Z(null),
    it = Z(null),
    ht = Z(null);
  function gt(e, n) {
    switch ((A(it, n), A(st, e), A(ut, null), n.nodeType)) {
      case 9:
      case 11:
        e = (e = n.documentElement) && (e = e.namespaceURI) ? D0(e) : 0;
        break;
      default:
        if (((e = n.tagName), (n = n.namespaceURI)))
          (n = D0(n)), (e = N0(n, e));
        else
          switch (e) {
            case "svg":
              e = 1;
              break;
            case "math":
              e = 2;
              break;
            default:
              e = 0;
          }
    }
    J(ut), A(ut, e);
  }
  function Ct() {
    J(ut), J(st), J(it);
  }
  function Bt(e) {
    e.memoizedState !== null && A(ht, e);
    var n = ut.current,
      l = N0(n, e.type);
    n !== l && (A(st, e), A(ut, l));
  }
  function mt(e) {
    st.current === e && (J(ut), J(st)),
      ht.current === e && (J(ht), (Va._currentValue = nt));
  }
  var At = Object.prototype.hasOwnProperty,
    Yt = t.unstable_scheduleCallback,
    ce = t.unstable_cancelCallback,
    oe = t.unstable_shouldYield,
    fe = t.unstable_requestPaint,
    yt = t.unstable_now,
    xt = t.unstable_getCurrentPriorityLevel,
    vt = t.unstable_ImmediatePriority,
    ft = t.unstable_UserBlockingPriority,
    Et = t.unstable_NormalPriority,
    St = t.unstable_LowPriority,
    kt = t.unstable_IdlePriority,
    jt = t.log,
    Pt = t.unstable_setDisableYieldValue,
    F = null,
    ot = null;
  function wt(e) {
    if (
      (typeof jt == "function" && Pt(e),
      ot && typeof ot.setStrictMode == "function")
    )
      try {
        ot.setStrictMode(F, e);
      } catch {}
  }
  var Tt = Math.clz32 ? Math.clz32 : Xt,
    Dt = Math.log,
    ue = Math.LN2;
  function Xt(e) {
    return (e >>>= 0), e === 0 ? 32 : (31 - ((Dt(e) / ue) | 0)) | 0;
  }
  var me = 256,
    Le = 4194304;
  function ke(e) {
    var n = e & 42;
    if (n !== 0) return n;
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
        return 64;
      case 128:
        return 128;
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
        return e & 4194048;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return e & 62914560;
      case 67108864:
        return 67108864;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 0;
      default:
        return e;
    }
  }
  function ge(e, n, l) {
    var o = e.pendingLanes;
    if (o === 0) return 0;
    var c = 0,
      p = e.suspendedLanes,
      S = e.pingedLanes;
    e = e.warmLanes;
    var E = o & 134217727;
    return (
      E !== 0
        ? ((o = E & ~p),
          o !== 0
            ? (c = ke(o))
            : ((S &= E),
              S !== 0
                ? (c = ke(S))
                : l || ((l = E & ~e), l !== 0 && (c = ke(l)))))
        : ((E = o & ~p),
          E !== 0
            ? (c = ke(E))
            : S !== 0
            ? (c = ke(S))
            : l || ((l = o & ~e), l !== 0 && (c = ke(l)))),
      c === 0
        ? 0
        : n !== 0 &&
          n !== c &&
          (n & p) === 0 &&
          ((p = c & -c),
          (l = n & -n),
          p >= l || (p === 32 && (l & 4194048) !== 0))
        ? n
        : c
    );
  }
  function Ie(e, n) {
    return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & n) === 0;
  }
  function Ze(e, n) {
    switch (e) {
      case 1:
      case 2:
      case 4:
      case 8:
      case 64:
        return n + 250;
      case 16:
      case 32:
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
        return n + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return -1;
      case 67108864:
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function Uo() {
    var e = me;
    return (me <<= 1), (me & 4194048) === 0 && (me = 256), e;
  }
  function jo() {
    var e = Le;
    return (Le <<= 1), (Le & 62914560) === 0 && (Le = 4194304), e;
  }
  function Wl(e) {
    for (var n = [], l = 0; 31 > l; l++) n.push(e);
    return n;
  }
  function ai(e, n) {
    (e.pendingLanes |= n),
      n !== 268435456 &&
        ((e.suspendedLanes = 0), (e.pingedLanes = 0), (e.warmLanes = 0));
  }
  function uc(e, n, l, o, c, p) {
    var S = e.pendingLanes;
    (e.pendingLanes = l),
      (e.suspendedLanes = 0),
      (e.pingedLanes = 0),
      (e.warmLanes = 0),
      (e.expiredLanes &= l),
      (e.entangledLanes &= l),
      (e.errorRecoveryDisabledLanes &= l),
      (e.shellSuspendCounter = 0);
    var E = e.entanglements,
      M = e.expirationTimes,
      I = e.hiddenUpdates;
    for (l = S & ~l; 0 < l; ) {
      var rt = 31 - Tt(l),
        at = 1 << rt;
      (E[rt] = 0), (M[rt] = -1);
      var K = I[rt];
      if (K !== null)
        for (I[rt] = null, rt = 0; rt < K.length; rt++) {
          var W = K[rt];
          W !== null && (W.lane &= -536870913);
        }
      l &= ~at;
    }
    o !== 0 && Ho(e, o, 0),
      p !== 0 && c === 0 && e.tag !== 0 && (e.suspendedLanes |= p & ~(S & ~n));
  }
  function Ho(e, n, l) {
    (e.pendingLanes |= n), (e.suspendedLanes &= ~n);
    var o = 31 - Tt(n);
    (e.entangledLanes |= n),
      (e.entanglements[o] = e.entanglements[o] | 1073741824 | (l & 4194090));
  }
  function qo(e, n) {
    var l = (e.entangledLanes |= n);
    for (e = e.entanglements; l; ) {
      var o = 31 - Tt(l),
        c = 1 << o;
      (c & n) | (e[o] & n) && (e[o] |= n), (l &= ~c);
    }
  }
  function Jl(e) {
    switch (e) {
      case 2:
        e = 1;
        break;
      case 8:
        e = 4;
        break;
      case 32:
        e = 16;
        break;
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
        e = 128;
        break;
      case 268435456:
        e = 134217728;
        break;
      default:
        e = 0;
    }
    return e;
  }
  function Nt(e) {
    return (
      (e &= -e),
      2 < e ? (8 < e ? ((e & 134217727) !== 0 ? 32 : 268435456) : 8) : 2
    );
  }
  function Gn() {
    var e = P.p;
    return e !== 0 ? e : ((e = window.event), e === void 0 ? 32 : J0(e.type));
  }
  function xx(e, n) {
    var l = P.p;
    try {
      return (P.p = e), n();
    } finally {
      P.p = l;
    }
  }
  var Mr = Math.random().toString(36).slice(2),
    Ke = "__reactFiber$" + Mr,
    rn = "__reactProps$" + Mr,
    ji = "__reactContainer$" + Mr,
    sc = "__reactEvents$" + Mr,
    Sx = "__reactListeners$" + Mr,
    wx = "__reactHandles$" + Mr,
    Sh = "__reactResources$" + Mr,
    ta = "__reactMarker$" + Mr;
  function cc(e) {
    delete e[Ke], delete e[rn], delete e[sc], delete e[Sx], delete e[wx];
  }
  function Hi(e) {
    var n = e[Ke];
    if (n) return n;
    for (var l = e.parentNode; l; ) {
      if ((n = l[ji] || l[Ke])) {
        if (
          ((l = n.alternate),
          n.child !== null || (l !== null && l.child !== null))
        )
          for (e = j0(e); e !== null; ) {
            if ((l = e[Ke])) return l;
            e = j0(e);
          }
        return n;
      }
      (e = l), (l = e.parentNode);
    }
    return null;
  }
  function qi(e) {
    if ((e = e[Ke] || e[ji])) {
      var n = e.tag;
      if (n === 5 || n === 6 || n === 13 || n === 26 || n === 27 || n === 3)
        return e;
    }
    return null;
  }
  function ea(e) {
    var n = e.tag;
    if (n === 5 || n === 26 || n === 27 || n === 6) return e.stateNode;
    throw Error(a(33));
  }
  function Pi(e) {
    var n = e[Sh];
    return (
      n ||
        (n = e[Sh] =
          { hoistableStyles: new Map(), hoistableScripts: new Map() }),
      n
    );
  }
  function He(e) {
    e[ta] = !0;
  }
  var wh = new Set(),
    Eh = {};
  function oi(e, n) {
    $i(e, n), $i(e + "Capture", n);
  }
  function $i(e, n) {
    for (Eh[e] = n, e = 0; e < n.length; e++) wh.add(n[e]);
  }
  var Ex = RegExp(
      "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
    ),
    Th = {},
    Ah = {};
  function Tx(e) {
    return At.call(Ah, e)
      ? !0
      : At.call(Th, e)
      ? !1
      : Ex.test(e)
      ? (Ah[e] = !0)
      : ((Th[e] = !0), !1);
  }
  function Po(e, n, l) {
    if (Tx(n))
      if (l === null) e.removeAttribute(n);
      else {
        switch (typeof l) {
          case "undefined":
          case "function":
          case "symbol":
            e.removeAttribute(n);
            return;
          case "boolean":
            var o = n.toLowerCase().slice(0, 5);
            if (o !== "data-" && o !== "aria-") {
              e.removeAttribute(n);
              return;
            }
        }
        e.setAttribute(n, "" + l);
      }
  }
  function $o(e, n, l) {
    if (l === null) e.removeAttribute(n);
    else {
      switch (typeof l) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          e.removeAttribute(n);
          return;
      }
      e.setAttribute(n, "" + l);
    }
  }
  function fr(e, n, l, o) {
    if (o === null) e.removeAttribute(l);
    else {
      switch (typeof o) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          e.removeAttribute(l);
          return;
      }
      e.setAttributeNS(n, l, "" + o);
    }
  }
  var fc, Oh;
  function Vi(e) {
    if (fc === void 0)
      try {
        throw Error();
      } catch (l) {
        var n = l.stack.trim().match(/\n( *(at )?)/);
        (fc = (n && n[1]) || ""),
          (Oh =
            -1 <
            l.stack.indexOf(`
    at`)
              ? " (<anonymous>)"
              : -1 < l.stack.indexOf("@")
              ? "@unknown:0:0"
              : "");
      }
    return (
      `
` +
      fc +
      e +
      Oh
    );
  }
  var dc = !1;
  function pc(e, n) {
    if (!e || dc) return "";
    dc = !0;
    var l = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var o = {
        DetermineComponentFrameRoot: function () {
          try {
            if (n) {
              var at = function () {
                throw Error();
              };
              if (
                (Object.defineProperty(at.prototype, "props", {
                  set: function () {
                    throw Error();
                  },
                }),
                typeof Reflect == "object" && Reflect.construct)
              ) {
                try {
                  Reflect.construct(at, []);
                } catch (W) {
                  var K = W;
                }
                Reflect.construct(e, [], at);
              } else {
                try {
                  at.call();
                } catch (W) {
                  K = W;
                }
                e.call(at.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (W) {
                K = W;
              }
              (at = e()) &&
                typeof at.catch == "function" &&
                at.catch(function () {});
            }
          } catch (W) {
            if (W && K && typeof W.stack == "string") return [W.stack, K.stack];
          }
          return [null, null];
        },
      };
      o.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var c = Object.getOwnPropertyDescriptor(
        o.DetermineComponentFrameRoot,
        "name"
      );
      c &&
        c.configurable &&
        Object.defineProperty(o.DetermineComponentFrameRoot, "name", {
          value: "DetermineComponentFrameRoot",
        });
      var p = o.DetermineComponentFrameRoot(),
        S = p[0],
        E = p[1];
      if (S && E) {
        var M = S.split(`
`),
          I = E.split(`
`);
        for (
          c = o = 0;
          o < M.length && !M[o].includes("DetermineComponentFrameRoot");

        )
          o++;
        for (; c < I.length && !I[c].includes("DetermineComponentFrameRoot"); )
          c++;
        if (o === M.length || c === I.length)
          for (
            o = M.length - 1, c = I.length - 1;
            1 <= o && 0 <= c && M[o] !== I[c];

          )
            c--;
        for (; 1 <= o && 0 <= c; o--, c--)
          if (M[o] !== I[c]) {
            if (o !== 1 || c !== 1)
              do
                if ((o--, c--, 0 > c || M[o] !== I[c])) {
                  var rt =
                    `
` + M[o].replace(" at new ", " at ");
                  return (
                    e.displayName &&
                      rt.includes("<anonymous>") &&
                      (rt = rt.replace("<anonymous>", e.displayName)),
                    rt
                  );
                }
              while (1 <= o && 0 <= c);
            break;
          }
      }
    } finally {
      (dc = !1), (Error.prepareStackTrace = l);
    }
    return (l = e ? e.displayName || e.name : "") ? Vi(l) : "";
  }
  function Ax(e) {
    switch (e.tag) {
      case 26:
      case 27:
      case 5:
        return Vi(e.type);
      case 16:
        return Vi("Lazy");
      case 13:
        return Vi("Suspense");
      case 19:
        return Vi("SuspenseList");
      case 0:
      case 15:
        return pc(e.type, !1);
      case 11:
        return pc(e.type.render, !1);
      case 1:
        return pc(e.type, !0);
      case 31:
        return Vi("Activity");
      default:
        return "";
    }
  }
  function Ch(e) {
    try {
      var n = "";
      do (n += Ax(e)), (e = e.return);
      while (e);
      return n;
    } catch (l) {
      return (
        `
Error generating stack: ` +
        l.message +
        `
` +
        l.stack
      );
    }
  }
  function Rn(e) {
    switch (typeof e) {
      case "bigint":
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
  function kh(e) {
    var n = e.type;
    return (
      (e = e.nodeName) &&
      e.toLowerCase() === "input" &&
      (n === "checkbox" || n === "radio")
    );
  }
  function Ox(e) {
    var n = kh(e) ? "checked" : "value",
      l = Object.getOwnPropertyDescriptor(e.constructor.prototype, n),
      o = "" + e[n];
    if (
      !e.hasOwnProperty(n) &&
      typeof l < "u" &&
      typeof l.get == "function" &&
      typeof l.set == "function"
    ) {
      var c = l.get,
        p = l.set;
      return (
        Object.defineProperty(e, n, {
          configurable: !0,
          get: function () {
            return c.call(this);
          },
          set: function (S) {
            (o = "" + S), p.call(this, S);
          },
        }),
        Object.defineProperty(e, n, { enumerable: l.enumerable }),
        {
          getValue: function () {
            return o;
          },
          setValue: function (S) {
            o = "" + S;
          },
          stopTracking: function () {
            (e._valueTracker = null), delete e[n];
          },
        }
      );
    }
  }
  function Vo(e) {
    e._valueTracker || (e._valueTracker = Ox(e));
  }
  function _h(e) {
    if (!e) return !1;
    var n = e._valueTracker;
    if (!n) return !0;
    var l = n.getValue(),
      o = "";
    return (
      e && (o = kh(e) ? (e.checked ? "true" : "false") : e.value),
      (e = o),
      e !== l ? (n.setValue(e), !0) : !1
    );
  }
  function Yo(e) {
    if (
      ((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u")
    )
      return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  var Cx = /[\n"\\]/g;
  function Mn(e) {
    return e.replace(Cx, function (n) {
      return "\\" + n.charCodeAt(0).toString(16) + " ";
    });
  }
  function hc(e, n, l, o, c, p, S, E) {
    (e.name = ""),
      S != null &&
      typeof S != "function" &&
      typeof S != "symbol" &&
      typeof S != "boolean"
        ? (e.type = S)
        : e.removeAttribute("type"),
      n != null
        ? S === "number"
          ? ((n === 0 && e.value === "") || e.value != n) &&
            (e.value = "" + Rn(n))
          : e.value !== "" + Rn(n) && (e.value = "" + Rn(n))
        : (S !== "submit" && S !== "reset") || e.removeAttribute("value"),
      n != null
        ? mc(e, S, Rn(n))
        : l != null
        ? mc(e, S, Rn(l))
        : o != null && e.removeAttribute("value"),
      c == null && p != null && (e.defaultChecked = !!p),
      c != null &&
        (e.checked = c && typeof c != "function" && typeof c != "symbol"),
      E != null &&
      typeof E != "function" &&
      typeof E != "symbol" &&
      typeof E != "boolean"
        ? (e.name = "" + Rn(E))
        : e.removeAttribute("name");
  }
  function Rh(e, n, l, o, c, p, S, E) {
    if (
      (p != null &&
        typeof p != "function" &&
        typeof p != "symbol" &&
        typeof p != "boolean" &&
        (e.type = p),
      n != null || l != null)
    ) {
      if (!((p !== "submit" && p !== "reset") || n != null)) return;
      (l = l != null ? "" + Rn(l) : ""),
        (n = n != null ? "" + Rn(n) : l),
        E || n === e.value || (e.value = n),
        (e.defaultValue = n);
    }
    (o = o ?? c),
      (o = typeof o != "function" && typeof o != "symbol" && !!o),
      (e.checked = E ? e.checked : !!o),
      (e.defaultChecked = !!o),
      S != null &&
        typeof S != "function" &&
        typeof S != "symbol" &&
        typeof S != "boolean" &&
        (e.name = S);
  }
  function mc(e, n, l) {
    (n === "number" && Yo(e.ownerDocument) === e) ||
      e.defaultValue === "" + l ||
      (e.defaultValue = "" + l);
  }
  function Yi(e, n, l, o) {
    if (((e = e.options), n)) {
      n = {};
      for (var c = 0; c < l.length; c++) n["$" + l[c]] = !0;
      for (l = 0; l < e.length; l++)
        (c = n.hasOwnProperty("$" + e[l].value)),
          e[l].selected !== c && (e[l].selected = c),
          c && o && (e[l].defaultSelected = !0);
    } else {
      for (l = "" + Rn(l), n = null, c = 0; c < e.length; c++) {
        if (e[c].value === l) {
          (e[c].selected = !0), o && (e[c].defaultSelected = !0);
          return;
        }
        n !== null || e[c].disabled || (n = e[c]);
      }
      n !== null && (n.selected = !0);
    }
  }
  function Mh(e, n, l) {
    if (
      n != null &&
      ((n = "" + Rn(n)), n !== e.value && (e.value = n), l == null)
    ) {
      e.defaultValue !== n && (e.defaultValue = n);
      return;
    }
    e.defaultValue = l != null ? "" + Rn(l) : "";
  }
  function zh(e, n, l, o) {
    if (n == null) {
      if (o != null) {
        if (l != null) throw Error(a(92));
        if (V(o)) {
          if (1 < o.length) throw Error(a(93));
          o = o[0];
        }
        l = o;
      }
      l == null && (l = ""), (n = l);
    }
    (l = Rn(n)),
      (e.defaultValue = l),
      (o = e.textContent),
      o === l && o !== "" && o !== null && (e.value = o);
  }
  function Gi(e, n) {
    if (n) {
      var l = e.firstChild;
      if (l && l === e.lastChild && l.nodeType === 3) {
        l.nodeValue = n;
        return;
      }
    }
    e.textContent = n;
  }
  var kx = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function Dh(e, n, l) {
    var o = n.indexOf("--") === 0;
    l == null || typeof l == "boolean" || l === ""
      ? o
        ? e.setProperty(n, "")
        : n === "float"
        ? (e.cssFloat = "")
        : (e[n] = "")
      : o
      ? e.setProperty(n, l)
      : typeof l != "number" || l === 0 || kx.has(n)
      ? n === "float"
        ? (e.cssFloat = l)
        : (e[n] = ("" + l).trim())
      : (e[n] = l + "px");
  }
  function Nh(e, n, l) {
    if (n != null && typeof n != "object") throw Error(a(62));
    if (((e = e.style), l != null)) {
      for (var o in l)
        !l.hasOwnProperty(o) ||
          (n != null && n.hasOwnProperty(o)) ||
          (o.indexOf("--") === 0
            ? e.setProperty(o, "")
            : o === "float"
            ? (e.cssFloat = "")
            : (e[o] = ""));
      for (var c in n)
        (o = n[c]), n.hasOwnProperty(c) && l[c] !== o && Dh(e, c, o);
    } else for (var p in n) n.hasOwnProperty(p) && Dh(e, p, n[p]);
  }
  function gc(e) {
    if (e.indexOf("-") === -1) return !1;
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
  var _x = new Map([
      ["acceptCharset", "accept-charset"],
      ["htmlFor", "for"],
      ["httpEquiv", "http-equiv"],
      ["crossOrigin", "crossorigin"],
      ["accentHeight", "accent-height"],
      ["alignmentBaseline", "alignment-baseline"],
      ["arabicForm", "arabic-form"],
      ["baselineShift", "baseline-shift"],
      ["capHeight", "cap-height"],
      ["clipPath", "clip-path"],
      ["clipRule", "clip-rule"],
      ["colorInterpolation", "color-interpolation"],
      ["colorInterpolationFilters", "color-interpolation-filters"],
      ["colorProfile", "color-profile"],
      ["colorRendering", "color-rendering"],
      ["dominantBaseline", "dominant-baseline"],
      ["enableBackground", "enable-background"],
      ["fillOpacity", "fill-opacity"],
      ["fillRule", "fill-rule"],
      ["floodColor", "flood-color"],
      ["floodOpacity", "flood-opacity"],
      ["fontFamily", "font-family"],
      ["fontSize", "font-size"],
      ["fontSizeAdjust", "font-size-adjust"],
      ["fontStretch", "font-stretch"],
      ["fontStyle", "font-style"],
      ["fontVariant", "font-variant"],
      ["fontWeight", "font-weight"],
      ["glyphName", "glyph-name"],
      ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
      ["glyphOrientationVertical", "glyph-orientation-vertical"],
      ["horizAdvX", "horiz-adv-x"],
      ["horizOriginX", "horiz-origin-x"],
      ["imageRendering", "image-rendering"],
      ["letterSpacing", "letter-spacing"],
      ["lightingColor", "lighting-color"],
      ["markerEnd", "marker-end"],
      ["markerMid", "marker-mid"],
      ["markerStart", "marker-start"],
      ["overlinePosition", "overline-position"],
      ["overlineThickness", "overline-thickness"],
      ["paintOrder", "paint-order"],
      ["panose-1", "panose-1"],
      ["pointerEvents", "pointer-events"],
      ["renderingIntent", "rendering-intent"],
      ["shapeRendering", "shape-rendering"],
      ["stopColor", "stop-color"],
      ["stopOpacity", "stop-opacity"],
      ["strikethroughPosition", "strikethrough-position"],
      ["strikethroughThickness", "strikethrough-thickness"],
      ["strokeDasharray", "stroke-dasharray"],
      ["strokeDashoffset", "stroke-dashoffset"],
      ["strokeLinecap", "stroke-linecap"],
      ["strokeLinejoin", "stroke-linejoin"],
      ["strokeMiterlimit", "stroke-miterlimit"],
      ["strokeOpacity", "stroke-opacity"],
      ["strokeWidth", "stroke-width"],
      ["textAnchor", "text-anchor"],
      ["textDecoration", "text-decoration"],
      ["textRendering", "text-rendering"],
      ["transformOrigin", "transform-origin"],
      ["underlinePosition", "underline-position"],
      ["underlineThickness", "underline-thickness"],
      ["unicodeBidi", "unicode-bidi"],
      ["unicodeRange", "unicode-range"],
      ["unitsPerEm", "units-per-em"],
      ["vAlphabetic", "v-alphabetic"],
      ["vHanging", "v-hanging"],
      ["vIdeographic", "v-ideographic"],
      ["vMathematical", "v-mathematical"],
      ["vectorEffect", "vector-effect"],
      ["vertAdvY", "vert-adv-y"],
      ["vertOriginX", "vert-origin-x"],
      ["vertOriginY", "vert-origin-y"],
      ["wordSpacing", "word-spacing"],
      ["writingMode", "writing-mode"],
      ["xmlnsXlink", "xmlns:xlink"],
      ["xHeight", "x-height"],
    ]),
    Rx =
      /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function Go(e) {
    return Rx.test("" + e)
      ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')"
      : e;
  }
  var yc = null;
  function vc(e) {
    return (
      (e = e.target || e.srcElement || window),
      e.correspondingUseElement && (e = e.correspondingUseElement),
      e.nodeType === 3 ? e.parentNode : e
    );
  }
  var Xi = null,
    Qi = null;
  function Bh(e) {
    var n = qi(e);
    if (n && (e = n.stateNode)) {
      var l = e[rn] || null;
      t: switch (((e = n.stateNode), n.type)) {
        case "input":
          if (
            (hc(
              e,
              l.value,
              l.defaultValue,
              l.defaultValue,
              l.checked,
              l.defaultChecked,
              l.type,
              l.name
            ),
            (n = l.name),
            l.type === "radio" && n != null)
          ) {
            for (l = e; l.parentNode; ) l = l.parentNode;
            for (
              l = l.querySelectorAll(
                'input[name="' + Mn("" + n) + '"][type="radio"]'
              ),
                n = 0;
              n < l.length;
              n++
            ) {
              var o = l[n];
              if (o !== e && o.form === e.form) {
                var c = o[rn] || null;
                if (!c) throw Error(a(90));
                hc(
                  o,
                  c.value,
                  c.defaultValue,
                  c.defaultValue,
                  c.checked,
                  c.defaultChecked,
                  c.type,
                  c.name
                );
              }
            }
            for (n = 0; n < l.length; n++)
              (o = l[n]), o.form === e.form && _h(o);
          }
          break t;
        case "textarea":
          Mh(e, l.value, l.defaultValue);
          break t;
        case "select":
          (n = l.value), n != null && Yi(e, !!l.multiple, n, !1);
      }
    }
  }
  var bc = !1;
  function Lh(e, n, l) {
    if (bc) return e(n, l);
    bc = !0;
    try {
      var o = e(n);
      return o;
    } finally {
      if (
        ((bc = !1),
        (Xi !== null || Qi !== null) &&
          (Ru(), Xi && ((n = Xi), (e = Qi), (Qi = Xi = null), Bh(n), e)))
      )
        for (n = 0; n < e.length; n++) Bh(e[n]);
    }
  }
  function na(e, n) {
    var l = e.stateNode;
    if (l === null) return null;
    var o = l[rn] || null;
    if (o === null) return null;
    l = o[n];
    t: switch (n) {
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
        (o = !o.disabled) ||
          ((e = e.type),
          (o = !(
            e === "button" ||
            e === "input" ||
            e === "select" ||
            e === "textarea"
          ))),
          (e = !o);
        break t;
      default:
        e = !1;
    }
    if (e) return null;
    if (l && typeof l != "function") throw Error(a(231, n, typeof l));
    return l;
  }
  var dr = !(
      typeof window > "u" ||
      typeof window.document > "u" ||
      typeof window.document.createElement > "u"
    ),
    xc = !1;
  if (dr)
    try {
      var ra = {};
      Object.defineProperty(ra, "passive", {
        get: function () {
          xc = !0;
        },
      }),
        window.addEventListener("test", ra, ra),
        window.removeEventListener("test", ra, ra);
    } catch {
      xc = !1;
    }
  var zr = null,
    Sc = null,
    Xo = null;
  function Uh() {
    if (Xo) return Xo;
    var e,
      n = Sc,
      l = n.length,
      o,
      c = "value" in zr ? zr.value : zr.textContent,
      p = c.length;
    for (e = 0; e < l && n[e] === c[e]; e++);
    var S = l - e;
    for (o = 1; o <= S && n[l - o] === c[p - o]; o++);
    return (Xo = c.slice(e, 1 < o ? 1 - o : void 0));
  }
  function Qo(e) {
    var n = e.keyCode;
    return (
      "charCode" in e
        ? ((e = e.charCode), e === 0 && n === 13 && (e = 13))
        : (e = n),
      e === 10 && (e = 13),
      32 <= e || e === 13 ? e : 0
    );
  }
  function Io() {
    return !0;
  }
  function jh() {
    return !1;
  }
  function ln(e) {
    function n(l, o, c, p, S) {
      (this._reactName = l),
        (this._targetInst = c),
        (this.type = o),
        (this.nativeEvent = p),
        (this.target = S),
        (this.currentTarget = null);
      for (var E in e)
        e.hasOwnProperty(E) && ((l = e[E]), (this[E] = l ? l(p) : p[E]));
      return (
        (this.isDefaultPrevented = (
          p.defaultPrevented != null ? p.defaultPrevented : p.returnValue === !1
        )
          ? Io
          : jh),
        (this.isPropagationStopped = jh),
        this
      );
    }
    return (
      g(n.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var l = this.nativeEvent;
          l &&
            (l.preventDefault
              ? l.preventDefault()
              : typeof l.returnValue != "unknown" && (l.returnValue = !1),
            (this.isDefaultPrevented = Io));
        },
        stopPropagation: function () {
          var l = this.nativeEvent;
          l &&
            (l.stopPropagation
              ? l.stopPropagation()
              : typeof l.cancelBubble != "unknown" && (l.cancelBubble = !0),
            (this.isPropagationStopped = Io));
        },
        persist: function () {},
        isPersistent: Io,
      }),
      n
    );
  }
  var ui = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    Zo = ln(ui),
    ia = g({}, ui, { view: 0, detail: 0 }),
    Mx = ln(ia),
    wc,
    Ec,
    la,
    Ko = g({}, ia, {
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
      getModifierState: Ac,
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
          : (e !== la &&
              (la && e.type === "mousemove"
                ? ((wc = e.screenX - la.screenX), (Ec = e.screenY - la.screenY))
                : (Ec = wc = 0),
              (la = e)),
            wc);
      },
      movementY: function (e) {
        return "movementY" in e ? e.movementY : Ec;
      },
    }),
    Hh = ln(Ko),
    zx = g({}, Ko, { dataTransfer: 0 }),
    Dx = ln(zx),
    Nx = g({}, ia, { relatedTarget: 0 }),
    Tc = ln(Nx),
    Bx = g({}, ui, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    Lx = ln(Bx),
    Ux = g({}, ui, {
      clipboardData: function (e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      },
    }),
    jx = ln(Ux),
    Hx = g({}, ui, { data: 0 }),
    qh = ln(Hx),
    qx = {
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
    Px = {
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
    $x = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey",
    };
  function Vx(e) {
    var n = this.nativeEvent;
    return n.getModifierState
      ? n.getModifierState(e)
      : (e = $x[e])
      ? !!n[e]
      : !1;
  }
  function Ac() {
    return Vx;
  }
  var Yx = g({}, ia, {
      key: function (e) {
        if (e.key) {
          var n = qx[e.key] || e.key;
          if (n !== "Unidentified") return n;
        }
        return e.type === "keypress"
          ? ((e = Qo(e)), e === 13 ? "Enter" : String.fromCharCode(e))
          : e.type === "keydown" || e.type === "keyup"
          ? Px[e.keyCode] || "Unidentified"
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
      getModifierState: Ac,
      charCode: function (e) {
        return e.type === "keypress" ? Qo(e) : 0;
      },
      keyCode: function (e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      },
      which: function (e) {
        return e.type === "keypress"
          ? Qo(e)
          : e.type === "keydown" || e.type === "keyup"
          ? e.keyCode
          : 0;
      },
    }),
    Gx = ln(Yx),
    Xx = g({}, Ko, {
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
    Ph = ln(Xx),
    Qx = g({}, ia, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: Ac,
    }),
    Ix = ln(Qx),
    Zx = g({}, ui, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    Kx = ln(Zx),
    Fx = g({}, Ko, {
      deltaX: function (e) {
        return "deltaX" in e
          ? e.deltaX
          : "wheelDeltaX" in e
          ? -e.wheelDeltaX
          : 0;
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
    Wx = ln(Fx),
    Jx = g({}, ui, { newState: 0, oldState: 0 }),
    tS = ln(Jx),
    eS = [9, 13, 27, 32],
    Oc = dr && "CompositionEvent" in window,
    aa = null;
  dr && "documentMode" in document && (aa = document.documentMode);
  var nS = dr && "TextEvent" in window && !aa,
    $h = dr && (!Oc || (aa && 8 < aa && 11 >= aa)),
    Vh = " ",
    Yh = !1;
  function Gh(e, n) {
    switch (e) {
      case "keyup":
        return eS.indexOf(n.keyCode) !== -1;
      case "keydown":
        return n.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function Xh(e) {
    return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
  }
  var Ii = !1;
  function rS(e, n) {
    switch (e) {
      case "compositionend":
        return Xh(n);
      case "keypress":
        return n.which !== 32 ? null : ((Yh = !0), Vh);
      case "textInput":
        return (e = n.data), e === Vh && Yh ? null : e;
      default:
        return null;
    }
  }
  function iS(e, n) {
    if (Ii)
      return e === "compositionend" || (!Oc && Gh(e, n))
        ? ((e = Uh()), (Xo = Sc = zr = null), (Ii = !1), e)
        : null;
    switch (e) {
      case "paste":
        return null;
      case "keypress":
        if (!(n.ctrlKey || n.altKey || n.metaKey) || (n.ctrlKey && n.altKey)) {
          if (n.char && 1 < n.char.length) return n.char;
          if (n.which) return String.fromCharCode(n.which);
        }
        return null;
      case "compositionend":
        return $h && n.locale !== "ko" ? null : n.data;
      default:
        return null;
    }
  }
  var lS = {
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
  function Qh(e) {
    var n = e && e.nodeName && e.nodeName.toLowerCase();
    return n === "input" ? !!lS[e.type] : n === "textarea";
  }
  function Ih(e, n, l, o) {
    Xi ? (Qi ? Qi.push(o) : (Qi = [o])) : (Xi = o),
      (n = Lu(n, "onChange")),
      0 < n.length &&
        ((l = new Zo("onChange", "change", null, l, o)),
        e.push({ event: l, listeners: n }));
  }
  var oa = null,
    ua = null;
  function aS(e) {
    k0(e, 0);
  }
  function Fo(e) {
    var n = ea(e);
    if (_h(n)) return e;
  }
  function Zh(e, n) {
    if (e === "change") return n;
  }
  var Kh = !1;
  if (dr) {
    var Cc;
    if (dr) {
      var kc = "oninput" in document;
      if (!kc) {
        var Fh = document.createElement("div");
        Fh.setAttribute("oninput", "return;"),
          (kc = typeof Fh.oninput == "function");
      }
      Cc = kc;
    } else Cc = !1;
    Kh = Cc && (!document.documentMode || 9 < document.documentMode);
  }
  function Wh() {
    oa && (oa.detachEvent("onpropertychange", Jh), (ua = oa = null));
  }
  function Jh(e) {
    if (e.propertyName === "value" && Fo(ua)) {
      var n = [];
      Ih(n, ua, e, vc(e)), Lh(aS, n);
    }
  }
  function oS(e, n, l) {
    e === "focusin"
      ? (Wh(), (oa = n), (ua = l), oa.attachEvent("onpropertychange", Jh))
      : e === "focusout" && Wh();
  }
  function uS(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
      return Fo(ua);
  }
  function sS(e, n) {
    if (e === "click") return Fo(n);
  }
  function cS(e, n) {
    if (e === "input" || e === "change") return Fo(n);
  }
  function fS(e, n) {
    return (e === n && (e !== 0 || 1 / e === 1 / n)) || (e !== e && n !== n);
  }
  var mn = typeof Object.is == "function" ? Object.is : fS;
  function sa(e, n) {
    if (mn(e, n)) return !0;
    if (
      typeof e != "object" ||
      e === null ||
      typeof n != "object" ||
      n === null
    )
      return !1;
    var l = Object.keys(e),
      o = Object.keys(n);
    if (l.length !== o.length) return !1;
    for (o = 0; o < l.length; o++) {
      var c = l[o];
      if (!At.call(n, c) || !mn(e[c], n[c])) return !1;
    }
    return !0;
  }
  function tm(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function em(e, n) {
    var l = tm(e);
    e = 0;
    for (var o; l; ) {
      if (l.nodeType === 3) {
        if (((o = e + l.textContent.length), e <= n && o >= n))
          return { node: l, offset: n - e };
        e = o;
      }
      t: {
        for (; l; ) {
          if (l.nextSibling) {
            l = l.nextSibling;
            break t;
          }
          l = l.parentNode;
        }
        l = void 0;
      }
      l = tm(l);
    }
  }
  function nm(e, n) {
    return e && n
      ? e === n
        ? !0
        : e && e.nodeType === 3
        ? !1
        : n && n.nodeType === 3
        ? nm(e, n.parentNode)
        : "contains" in e
        ? e.contains(n)
        : e.compareDocumentPosition
        ? !!(e.compareDocumentPosition(n) & 16)
        : !1
      : !1;
  }
  function rm(e) {
    e =
      e != null &&
      e.ownerDocument != null &&
      e.ownerDocument.defaultView != null
        ? e.ownerDocument.defaultView
        : window;
    for (var n = Yo(e.document); n instanceof e.HTMLIFrameElement; ) {
      try {
        var l = typeof n.contentWindow.location.href == "string";
      } catch {
        l = !1;
      }
      if (l) e = n.contentWindow;
      else break;
      n = Yo(e.document);
    }
    return n;
  }
  function _c(e) {
    var n = e && e.nodeName && e.nodeName.toLowerCase();
    return (
      n &&
      ((n === "input" &&
        (e.type === "text" ||
          e.type === "search" ||
          e.type === "tel" ||
          e.type === "url" ||
          e.type === "password")) ||
        n === "textarea" ||
        e.contentEditable === "true")
    );
  }
  var dS = dr && "documentMode" in document && 11 >= document.documentMode,
    Zi = null,
    Rc = null,
    ca = null,
    Mc = !1;
  function im(e, n, l) {
    var o =
      l.window === l ? l.document : l.nodeType === 9 ? l : l.ownerDocument;
    Mc ||
      Zi == null ||
      Zi !== Yo(o) ||
      ((o = Zi),
      "selectionStart" in o && _c(o)
        ? (o = { start: o.selectionStart, end: o.selectionEnd })
        : ((o = (
            (o.ownerDocument && o.ownerDocument.defaultView) ||
            window
          ).getSelection()),
          (o = {
            anchorNode: o.anchorNode,
            anchorOffset: o.anchorOffset,
            focusNode: o.focusNode,
            focusOffset: o.focusOffset,
          })),
      (ca && sa(ca, o)) ||
        ((ca = o),
        (o = Lu(Rc, "onSelect")),
        0 < o.length &&
          ((n = new Zo("onSelect", "select", null, n, l)),
          e.push({ event: n, listeners: o }),
          (n.target = Zi))));
  }
  function si(e, n) {
    var l = {};
    return (
      (l[e.toLowerCase()] = n.toLowerCase()),
      (l["Webkit" + e] = "webkit" + n),
      (l["Moz" + e] = "moz" + n),
      l
    );
  }
  var Ki = {
      animationend: si("Animation", "AnimationEnd"),
      animationiteration: si("Animation", "AnimationIteration"),
      animationstart: si("Animation", "AnimationStart"),
      transitionrun: si("Transition", "TransitionRun"),
      transitionstart: si("Transition", "TransitionStart"),
      transitioncancel: si("Transition", "TransitionCancel"),
      transitionend: si("Transition", "TransitionEnd"),
    },
    zc = {},
    lm = {};
  dr &&
    ((lm = document.createElement("div").style),
    "AnimationEvent" in window ||
      (delete Ki.animationend.animation,
      delete Ki.animationiteration.animation,
      delete Ki.animationstart.animation),
    "TransitionEvent" in window || delete Ki.transitionend.transition);
  function ci(e) {
    if (zc[e]) return zc[e];
    if (!Ki[e]) return e;
    var n = Ki[e],
      l;
    for (l in n) if (n.hasOwnProperty(l) && l in lm) return (zc[e] = n[l]);
    return e;
  }
  var am = ci("animationend"),
    om = ci("animationiteration"),
    um = ci("animationstart"),
    pS = ci("transitionrun"),
    hS = ci("transitionstart"),
    mS = ci("transitioncancel"),
    sm = ci("transitionend"),
    cm = new Map(),
    Dc =
      "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
        " "
      );
  Dc.push("scrollEnd");
  function Xn(e, n) {
    cm.set(e, n), oi(n, [e]);
  }
  var fm = new WeakMap();
  function zn(e, n) {
    if (typeof e == "object" && e !== null) {
      var l = fm.get(e);
      return l !== void 0
        ? l
        : ((n = { value: e, source: n, stack: Ch(n) }), fm.set(e, n), n);
    }
    return { value: e, source: n, stack: Ch(n) };
  }
  var Dn = [],
    Fi = 0,
    Nc = 0;
  function Wo() {
    for (var e = Fi, n = (Nc = Fi = 0); n < e; ) {
      var l = Dn[n];
      Dn[n++] = null;
      var o = Dn[n];
      Dn[n++] = null;
      var c = Dn[n];
      Dn[n++] = null;
      var p = Dn[n];
      if (((Dn[n++] = null), o !== null && c !== null)) {
        var S = o.pending;
        S === null ? (c.next = c) : ((c.next = S.next), (S.next = c)),
          (o.pending = c);
      }
      p !== 0 && dm(l, c, p);
    }
  }
  function Jo(e, n, l, o) {
    (Dn[Fi++] = e),
      (Dn[Fi++] = n),
      (Dn[Fi++] = l),
      (Dn[Fi++] = o),
      (Nc |= o),
      (e.lanes |= o),
      (e = e.alternate),
      e !== null && (e.lanes |= o);
  }
  function Bc(e, n, l, o) {
    return Jo(e, n, l, o), tu(e);
  }
  function Wi(e, n) {
    return Jo(e, null, null, n), tu(e);
  }
  function dm(e, n, l) {
    e.lanes |= l;
    var o = e.alternate;
    o !== null && (o.lanes |= l);
    for (var c = !1, p = e.return; p !== null; )
      (p.childLanes |= l),
        (o = p.alternate),
        o !== null && (o.childLanes |= l),
        p.tag === 22 &&
          ((e = p.stateNode), e === null || e._visibility & 1 || (c = !0)),
        (e = p),
        (p = p.return);
    return e.tag === 3
      ? ((p = e.stateNode),
        c &&
          n !== null &&
          ((c = 31 - Tt(l)),
          (e = p.hiddenUpdates),
          (o = e[c]),
          o === null ? (e[c] = [n]) : o.push(n),
          (n.lane = l | 536870912)),
        p)
      : null;
  }
  function tu(e) {
    if (50 < Ba) throw ((Ba = 0), ($f = null), Error(a(185)));
    for (var n = e.return; n !== null; ) (e = n), (n = e.return);
    return e.tag === 3 ? e.stateNode : null;
  }
  var Ji = {};
  function gS(e, n, l, o) {
    (this.tag = e),
      (this.key = l),
      (this.sibling =
        this.child =
        this.return =
        this.stateNode =
        this.type =
        this.elementType =
          null),
      (this.index = 0),
      (this.refCleanup = this.ref = null),
      (this.pendingProps = n),
      (this.dependencies =
        this.memoizedState =
        this.updateQueue =
        this.memoizedProps =
          null),
      (this.mode = o),
      (this.subtreeFlags = this.flags = 0),
      (this.deletions = null),
      (this.childLanes = this.lanes = 0),
      (this.alternate = null);
  }
  function gn(e, n, l, o) {
    return new gS(e, n, l, o);
  }
  function Lc(e) {
    return (e = e.prototype), !(!e || !e.isReactComponent);
  }
  function pr(e, n) {
    var l = e.alternate;
    return (
      l === null
        ? ((l = gn(e.tag, n, e.key, e.mode)),
          (l.elementType = e.elementType),
          (l.type = e.type),
          (l.stateNode = e.stateNode),
          (l.alternate = e),
          (e.alternate = l))
        : ((l.pendingProps = n),
          (l.type = e.type),
          (l.flags = 0),
          (l.subtreeFlags = 0),
          (l.deletions = null)),
      (l.flags = e.flags & 65011712),
      (l.childLanes = e.childLanes),
      (l.lanes = e.lanes),
      (l.child = e.child),
      (l.memoizedProps = e.memoizedProps),
      (l.memoizedState = e.memoizedState),
      (l.updateQueue = e.updateQueue),
      (n = e.dependencies),
      (l.dependencies =
        n === null ? null : { lanes: n.lanes, firstContext: n.firstContext }),
      (l.sibling = e.sibling),
      (l.index = e.index),
      (l.ref = e.ref),
      (l.refCleanup = e.refCleanup),
      l
    );
  }
  function pm(e, n) {
    e.flags &= 65011714;
    var l = e.alternate;
    return (
      l === null
        ? ((e.childLanes = 0),
          (e.lanes = n),
          (e.child = null),
          (e.subtreeFlags = 0),
          (e.memoizedProps = null),
          (e.memoizedState = null),
          (e.updateQueue = null),
          (e.dependencies = null),
          (e.stateNode = null))
        : ((e.childLanes = l.childLanes),
          (e.lanes = l.lanes),
          (e.child = l.child),
          (e.subtreeFlags = 0),
          (e.deletions = null),
          (e.memoizedProps = l.memoizedProps),
          (e.memoizedState = l.memoizedState),
          (e.updateQueue = l.updateQueue),
          (e.type = l.type),
          (n = l.dependencies),
          (e.dependencies =
            n === null
              ? null
              : { lanes: n.lanes, firstContext: n.firstContext })),
      e
    );
  }
  function eu(e, n, l, o, c, p) {
    var S = 0;
    if (((o = e), typeof e == "function")) Lc(e) && (S = 1);
    else if (typeof e == "string")
      S = vw(e, l, ut.current)
        ? 26
        : e === "html" || e === "head" || e === "body"
        ? 27
        : 5;
    else
      t: switch (e) {
        case U:
          return (e = gn(31, l, n, c)), (e.elementType = U), (e.lanes = p), e;
        case O:
          return fi(l.children, c, p, n);
        case T:
          (S = 8), (c |= 24);
          break;
        case L:
          return (
            (e = gn(12, l, n, c | 2)), (e.elementType = L), (e.lanes = p), e
          );
        case R:
          return (e = gn(13, l, n, c)), (e.elementType = R), (e.lanes = p), e;
        case k:
          return (e = gn(19, l, n, c)), (e.elementType = k), (e.lanes = p), e;
        default:
          if (typeof e == "object" && e !== null)
            switch (e.$$typeof) {
              case D:
              case $:
                S = 10;
                break t;
              case G:
                S = 9;
                break t;
              case H:
                S = 11;
                break t;
              case Q:
                S = 14;
                break t;
              case C:
                (S = 16), (o = null);
                break t;
            }
          (S = 29),
            (l = Error(a(130, e === null ? "null" : typeof e, ""))),
            (o = null);
      }
    return (
      (n = gn(S, l, n, c)), (n.elementType = e), (n.type = o), (n.lanes = p), n
    );
  }
  function fi(e, n, l, o) {
    return (e = gn(7, e, o, n)), (e.lanes = l), e;
  }
  function Uc(e, n, l) {
    return (e = gn(6, e, null, n)), (e.lanes = l), e;
  }
  function jc(e, n, l) {
    return (
      (n = gn(4, e.children !== null ? e.children : [], e.key, n)),
      (n.lanes = l),
      (n.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation,
      }),
      n
    );
  }
  var tl = [],
    el = 0,
    nu = null,
    ru = 0,
    Nn = [],
    Bn = 0,
    di = null,
    hr = 1,
    mr = "";
  function pi(e, n) {
    (tl[el++] = ru), (tl[el++] = nu), (nu = e), (ru = n);
  }
  function hm(e, n, l) {
    (Nn[Bn++] = hr), (Nn[Bn++] = mr), (Nn[Bn++] = di), (di = e);
    var o = hr;
    e = mr;
    var c = 32 - Tt(o) - 1;
    (o &= ~(1 << c)), (l += 1);
    var p = 32 - Tt(n) + c;
    if (30 < p) {
      var S = c - (c % 5);
      (p = (o & ((1 << S) - 1)).toString(32)),
        (o >>= S),
        (c -= S),
        (hr = (1 << (32 - Tt(n) + c)) | (l << c) | o),
        (mr = p + e);
    } else (hr = (1 << p) | (l << c) | o), (mr = e);
  }
  function Hc(e) {
    e.return !== null && (pi(e, 1), hm(e, 1, 0));
  }
  function qc(e) {
    for (; e === nu; )
      (nu = tl[--el]), (tl[el] = null), (ru = tl[--el]), (tl[el] = null);
    for (; e === di; )
      (di = Nn[--Bn]),
        (Nn[Bn] = null),
        (mr = Nn[--Bn]),
        (Nn[Bn] = null),
        (hr = Nn[--Bn]),
        (Nn[Bn] = null);
  }
  var en = null,
    Ee = null,
    It = !1,
    hi = null,
    Kn = !1,
    Pc = Error(a(519));
  function mi(e) {
    var n = Error(a(418, ""));
    throw (pa(zn(n, e)), Pc);
  }
  function mm(e) {
    var n = e.stateNode,
      l = e.type,
      o = e.memoizedProps;
    switch (((n[Ke] = e), (n[rn] = o), l)) {
      case "dialog":
        Vt("cancel", n), Vt("close", n);
        break;
      case "iframe":
      case "object":
      case "embed":
        Vt("load", n);
        break;
      case "video":
      case "audio":
        for (l = 0; l < Ua.length; l++) Vt(Ua[l], n);
        break;
      case "source":
        Vt("error", n);
        break;
      case "img":
      case "image":
      case "link":
        Vt("error", n), Vt("load", n);
        break;
      case "details":
        Vt("toggle", n);
        break;
      case "input":
        Vt("invalid", n),
          Rh(
            n,
            o.value,
            o.defaultValue,
            o.checked,
            o.defaultChecked,
            o.type,
            o.name,
            !0
          ),
          Vo(n);
        break;
      case "select":
        Vt("invalid", n);
        break;
      case "textarea":
        Vt("invalid", n), zh(n, o.value, o.defaultValue, o.children), Vo(n);
    }
    (l = o.children),
      (typeof l != "string" && typeof l != "number" && typeof l != "bigint") ||
      n.textContent === "" + l ||
      o.suppressHydrationWarning === !0 ||
      z0(n.textContent, l)
        ? (o.popover != null && (Vt("beforetoggle", n), Vt("toggle", n)),
          o.onScroll != null && Vt("scroll", n),
          o.onScrollEnd != null && Vt("scrollend", n),
          o.onClick != null && (n.onclick = Uu),
          (n = !0))
        : (n = !1),
      n || mi(e);
  }
  function gm(e) {
    for (en = e.return; en; )
      switch (en.tag) {
        case 5:
        case 13:
          Kn = !1;
          return;
        case 27:
        case 3:
          Kn = !0;
          return;
        default:
          en = en.return;
      }
  }
  function fa(e) {
    if (e !== en) return !1;
    if (!It) return gm(e), (It = !0), !1;
    var n = e.tag,
      l;
    if (
      ((l = n !== 3 && n !== 27) &&
        ((l = n === 5) &&
          ((l = e.type),
          (l =
            !(l !== "form" && l !== "button") || id(e.type, e.memoizedProps))),
        (l = !l)),
      l && Ee && mi(e),
      gm(e),
      n === 13)
    ) {
      if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
        throw Error(a(317));
      t: {
        for (e = e.nextSibling, n = 0; e; ) {
          if (e.nodeType === 8)
            if (((l = e.data), l === "/$")) {
              if (n === 0) {
                Ee = In(e.nextSibling);
                break t;
              }
              n--;
            } else (l !== "$" && l !== "$!" && l !== "$?") || n++;
          e = e.nextSibling;
        }
        Ee = null;
      }
    } else
      n === 27
        ? ((n = Ee), Ir(e.type) ? ((e = ud), (ud = null), (Ee = e)) : (Ee = n))
        : (Ee = en ? In(e.stateNode.nextSibling) : null);
    return !0;
  }
  function da() {
    (Ee = en = null), (It = !1);
  }
  function ym() {
    var e = hi;
    return (
      e !== null &&
        (un === null ? (un = e) : un.push.apply(un, e), (hi = null)),
      e
    );
  }
  function pa(e) {
    hi === null ? (hi = [e]) : hi.push(e);
  }
  var $c = Z(null),
    gi = null,
    gr = null;
  function Dr(e, n, l) {
    A($c, n._currentValue), (n._currentValue = l);
  }
  function yr(e) {
    (e._currentValue = $c.current), J($c);
  }
  function Vc(e, n, l) {
    for (; e !== null; ) {
      var o = e.alternate;
      if (
        ((e.childLanes & n) !== n
          ? ((e.childLanes |= n), o !== null && (o.childLanes |= n))
          : o !== null && (o.childLanes & n) !== n && (o.childLanes |= n),
        e === l)
      )
        break;
      e = e.return;
    }
  }
  function Yc(e, n, l, o) {
    var c = e.child;
    for (c !== null && (c.return = e); c !== null; ) {
      var p = c.dependencies;
      if (p !== null) {
        var S = c.child;
        p = p.firstContext;
        t: for (; p !== null; ) {
          var E = p;
          p = c;
          for (var M = 0; M < n.length; M++)
            if (E.context === n[M]) {
              (p.lanes |= l),
                (E = p.alternate),
                E !== null && (E.lanes |= l),
                Vc(p.return, l, e),
                o || (S = null);
              break t;
            }
          p = E.next;
        }
      } else if (c.tag === 18) {
        if (((S = c.return), S === null)) throw Error(a(341));
        (S.lanes |= l),
          (p = S.alternate),
          p !== null && (p.lanes |= l),
          Vc(S, l, e),
          (S = null);
      } else S = c.child;
      if (S !== null) S.return = c;
      else
        for (S = c; S !== null; ) {
          if (S === e) {
            S = null;
            break;
          }
          if (((c = S.sibling), c !== null)) {
            (c.return = S.return), (S = c);
            break;
          }
          S = S.return;
        }
      c = S;
    }
  }
  function ha(e, n, l, o) {
    e = null;
    for (var c = n, p = !1; c !== null; ) {
      if (!p) {
        if ((c.flags & 524288) !== 0) p = !0;
        else if ((c.flags & 262144) !== 0) break;
      }
      if (c.tag === 10) {
        var S = c.alternate;
        if (S === null) throw Error(a(387));
        if (((S = S.memoizedProps), S !== null)) {
          var E = c.type;
          mn(c.pendingProps.value, S.value) ||
            (e !== null ? e.push(E) : (e = [E]));
        }
      } else if (c === ht.current) {
        if (((S = c.alternate), S === null)) throw Error(a(387));
        S.memoizedState.memoizedState !== c.memoizedState.memoizedState &&
          (e !== null ? e.push(Va) : (e = [Va]));
      }
      c = c.return;
    }
    e !== null && Yc(n, e, l, o), (n.flags |= 262144);
  }
  function iu(e) {
    for (e = e.firstContext; e !== null; ) {
      if (!mn(e.context._currentValue, e.memoizedValue)) return !0;
      e = e.next;
    }
    return !1;
  }
  function yi(e) {
    (gi = e),
      (gr = null),
      (e = e.dependencies),
      e !== null && (e.firstContext = null);
  }
  function Fe(e) {
    return vm(gi, e);
  }
  function lu(e, n) {
    return gi === null && yi(e), vm(e, n);
  }
  function vm(e, n) {
    var l = n._currentValue;
    if (((n = { context: n, memoizedValue: l, next: null }), gr === null)) {
      if (e === null) throw Error(a(308));
      (gr = n),
        (e.dependencies = { lanes: 0, firstContext: n }),
        (e.flags |= 524288);
    } else gr = gr.next = n;
    return l;
  }
  var yS =
      typeof AbortController < "u"
        ? AbortController
        : function () {
            var e = [],
              n = (this.signal = {
                aborted: !1,
                addEventListener: function (l, o) {
                  e.push(o);
                },
              });
            this.abort = function () {
              (n.aborted = !0),
                e.forEach(function (l) {
                  return l();
                });
            };
          },
    vS = t.unstable_scheduleCallback,
    bS = t.unstable_NormalPriority,
    Ue = {
      $$typeof: $,
      Consumer: null,
      Provider: null,
      _currentValue: null,
      _currentValue2: null,
      _threadCount: 0,
    };
  function Gc() {
    return { controller: new yS(), data: new Map(), refCount: 0 };
  }
  function ma(e) {
    e.refCount--,
      e.refCount === 0 &&
        vS(bS, function () {
          e.controller.abort();
        });
  }
  var ga = null,
    Xc = 0,
    nl = 0,
    rl = null;
  function xS(e, n) {
    if (ga === null) {
      var l = (ga = []);
      (Xc = 0),
        (nl = Zf()),
        (rl = {
          status: "pending",
          value: void 0,
          then: function (o) {
            l.push(o);
          },
        });
    }
    return Xc++, n.then(bm, bm), n;
  }
  function bm() {
    if (--Xc === 0 && ga !== null) {
      rl !== null && (rl.status = "fulfilled");
      var e = ga;
      (ga = null), (nl = 0), (rl = null);
      for (var n = 0; n < e.length; n++) (0, e[n])();
    }
  }
  function SS(e, n) {
    var l = [],
      o = {
        status: "pending",
        value: null,
        reason: null,
        then: function (c) {
          l.push(c);
        },
      };
    return (
      e.then(
        function () {
          (o.status = "fulfilled"), (o.value = n);
          for (var c = 0; c < l.length; c++) (0, l[c])(n);
        },
        function (c) {
          for (o.status = "rejected", o.reason = c, c = 0; c < l.length; c++)
            (0, l[c])(void 0);
        }
      ),
      o
    );
  }
  var xm = _.S;
  _.S = function (e, n) {
    typeof n == "object" &&
      n !== null &&
      typeof n.then == "function" &&
      xS(e, n),
      xm !== null && xm(e, n);
  };
  var vi = Z(null);
  function Qc() {
    var e = vi.current;
    return e !== null ? e : de.pooledCache;
  }
  function au(e, n) {
    n === null ? A(vi, vi.current) : A(vi, n.pool);
  }
  function Sm() {
    var e = Qc();
    return e === null ? null : { parent: Ue._currentValue, pool: e };
  }
  var ya = Error(a(460)),
    wm = Error(a(474)),
    ou = Error(a(542)),
    Ic = { then: function () {} };
  function Em(e) {
    return (e = e.status), e === "fulfilled" || e === "rejected";
  }
  function uu() {}
  function Tm(e, n, l) {
    switch (
      ((l = e[l]),
      l === void 0 ? e.push(n) : l !== n && (n.then(uu, uu), (n = l)),
      n.status)
    ) {
      case "fulfilled":
        return n.value;
      case "rejected":
        throw ((e = n.reason), Om(e), e);
      default:
        if (typeof n.status == "string") n.then(uu, uu);
        else {
          if (((e = de), e !== null && 100 < e.shellSuspendCounter))
            throw Error(a(482));
          (e = n),
            (e.status = "pending"),
            e.then(
              function (o) {
                if (n.status === "pending") {
                  var c = n;
                  (c.status = "fulfilled"), (c.value = o);
                }
              },
              function (o) {
                if (n.status === "pending") {
                  var c = n;
                  (c.status = "rejected"), (c.reason = o);
                }
              }
            );
        }
        switch (n.status) {
          case "fulfilled":
            return n.value;
          case "rejected":
            throw ((e = n.reason), Om(e), e);
        }
        throw ((va = n), ya);
    }
  }
  var va = null;
  function Am() {
    if (va === null) throw Error(a(459));
    var e = va;
    return (va = null), e;
  }
  function Om(e) {
    if (e === ya || e === ou) throw Error(a(483));
  }
  var Nr = !1;
  function Zc(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null,
    };
  }
  function Kc(e, n) {
    (e = e.updateQueue),
      n.updateQueue === e &&
        (n.updateQueue = {
          baseState: e.baseState,
          firstBaseUpdate: e.firstBaseUpdate,
          lastBaseUpdate: e.lastBaseUpdate,
          shared: e.shared,
          callbacks: null,
        });
  }
  function Br(e) {
    return { lane: e, tag: 0, payload: null, callback: null, next: null };
  }
  function Lr(e, n, l) {
    var o = e.updateQueue;
    if (o === null) return null;
    if (((o = o.shared), (Jt & 2) !== 0)) {
      var c = o.pending;
      return (
        c === null ? (n.next = n) : ((n.next = c.next), (c.next = n)),
        (o.pending = n),
        (n = tu(e)),
        dm(e, null, l),
        n
      );
    }
    return Jo(e, o, n, l), tu(e);
  }
  function ba(e, n, l) {
    if (
      ((n = n.updateQueue), n !== null && ((n = n.shared), (l & 4194048) !== 0))
    ) {
      var o = n.lanes;
      (o &= e.pendingLanes), (l |= o), (n.lanes = l), qo(e, l);
    }
  }
  function Fc(e, n) {
    var l = e.updateQueue,
      o = e.alternate;
    if (o !== null && ((o = o.updateQueue), l === o)) {
      var c = null,
        p = null;
      if (((l = l.firstBaseUpdate), l !== null)) {
        do {
          var S = {
            lane: l.lane,
            tag: l.tag,
            payload: l.payload,
            callback: null,
            next: null,
          };
          p === null ? (c = p = S) : (p = p.next = S), (l = l.next);
        } while (l !== null);
        p === null ? (c = p = n) : (p = p.next = n);
      } else c = p = n;
      (l = {
        baseState: o.baseState,
        firstBaseUpdate: c,
        lastBaseUpdate: p,
        shared: o.shared,
        callbacks: o.callbacks,
      }),
        (e.updateQueue = l);
      return;
    }
    (e = l.lastBaseUpdate),
      e === null ? (l.firstBaseUpdate = n) : (e.next = n),
      (l.lastBaseUpdate = n);
  }
  var Wc = !1;
  function xa() {
    if (Wc) {
      var e = rl;
      if (e !== null) throw e;
    }
  }
  function Sa(e, n, l, o) {
    Wc = !1;
    var c = e.updateQueue;
    Nr = !1;
    var p = c.firstBaseUpdate,
      S = c.lastBaseUpdate,
      E = c.shared.pending;
    if (E !== null) {
      c.shared.pending = null;
      var M = E,
        I = M.next;
      (M.next = null), S === null ? (p = I) : (S.next = I), (S = M);
      var rt = e.alternate;
      rt !== null &&
        ((rt = rt.updateQueue),
        (E = rt.lastBaseUpdate),
        E !== S &&
          (E === null ? (rt.firstBaseUpdate = I) : (E.next = I),
          (rt.lastBaseUpdate = M)));
    }
    if (p !== null) {
      var at = c.baseState;
      (S = 0), (rt = I = M = null), (E = p);
      do {
        var K = E.lane & -536870913,
          W = K !== E.lane;
        if (W ? (Gt & K) === K : (o & K) === K) {
          K !== 0 && K === nl && (Wc = !0),
            rt !== null &&
              (rt = rt.next =
                {
                  lane: 0,
                  tag: E.tag,
                  payload: E.payload,
                  callback: null,
                  next: null,
                });
          t: {
            var Mt = e,
              _t = E;
            K = n;
            var le = l;
            switch (_t.tag) {
              case 1:
                if (((Mt = _t.payload), typeof Mt == "function")) {
                  at = Mt.call(le, at, K);
                  break t;
                }
                at = Mt;
                break t;
              case 3:
                Mt.flags = (Mt.flags & -65537) | 128;
              case 0:
                if (
                  ((Mt = _t.payload),
                  (K = typeof Mt == "function" ? Mt.call(le, at, K) : Mt),
                  K == null)
                )
                  break t;
                at = g({}, at, K);
                break t;
              case 2:
                Nr = !0;
            }
          }
          (K = E.callback),
            K !== null &&
              ((e.flags |= 64),
              W && (e.flags |= 8192),
              (W = c.callbacks),
              W === null ? (c.callbacks = [K]) : W.push(K));
        } else
          (W = {
            lane: K,
            tag: E.tag,
            payload: E.payload,
            callback: E.callback,
            next: null,
          }),
            rt === null ? ((I = rt = W), (M = at)) : (rt = rt.next = W),
            (S |= K);
        if (((E = E.next), E === null)) {
          if (((E = c.shared.pending), E === null)) break;
          (W = E),
            (E = W.next),
            (W.next = null),
            (c.lastBaseUpdate = W),
            (c.shared.pending = null);
        }
      } while (!0);
      rt === null && (M = at),
        (c.baseState = M),
        (c.firstBaseUpdate = I),
        (c.lastBaseUpdate = rt),
        p === null && (c.shared.lanes = 0),
        (Yr |= S),
        (e.lanes = S),
        (e.memoizedState = at);
    }
  }
  function Cm(e, n) {
    if (typeof e != "function") throw Error(a(191, e));
    e.call(n);
  }
  function km(e, n) {
    var l = e.callbacks;
    if (l !== null)
      for (e.callbacks = null, e = 0; e < l.length; e++) Cm(l[e], n);
  }
  var il = Z(null),
    su = Z(0);
  function _m(e, n) {
    (e = Tr), A(su, e), A(il, n), (Tr = e | n.baseLanes);
  }
  function Jc() {
    A(su, Tr), A(il, il.current);
  }
  function tf() {
    (Tr = su.current), J(il), J(su);
  }
  var Ur = 0,
    Ht = null,
    re = null,
    ze = null,
    cu = !1,
    ll = !1,
    bi = !1,
    fu = 0,
    wa = 0,
    al = null,
    wS = 0;
  function _e() {
    throw Error(a(321));
  }
  function ef(e, n) {
    if (n === null) return !1;
    for (var l = 0; l < n.length && l < e.length; l++)
      if (!mn(e[l], n[l])) return !1;
    return !0;
  }
  function nf(e, n, l, o, c, p) {
    return (
      (Ur = p),
      (Ht = n),
      (n.memoizedState = null),
      (n.updateQueue = null),
      (n.lanes = 0),
      (_.H = e === null || e.memoizedState === null ? dg : pg),
      (bi = !1),
      (p = l(o, c)),
      (bi = !1),
      ll && (p = Mm(n, l, o, c)),
      Rm(e),
      p
    );
  }
  function Rm(e) {
    _.H = yu;
    var n = re !== null && re.next !== null;
    if (((Ur = 0), (ze = re = Ht = null), (cu = !1), (wa = 0), (al = null), n))
      throw Error(a(300));
    e === null ||
      qe ||
      ((e = e.dependencies), e !== null && iu(e) && (qe = !0));
  }
  function Mm(e, n, l, o) {
    Ht = e;
    var c = 0;
    do {
      if ((ll && (al = null), (wa = 0), (ll = !1), 25 <= c))
        throw Error(a(301));
      if (((c += 1), (ze = re = null), e.updateQueue != null)) {
        var p = e.updateQueue;
        (p.lastEffect = null),
          (p.events = null),
          (p.stores = null),
          p.memoCache != null && (p.memoCache.index = 0);
      }
      (_.H = _S), (p = n(l, o));
    } while (ll);
    return p;
  }
  function ES() {
    var e = _.H,
      n = e.useState()[0];
    return (
      (n = typeof n.then == "function" ? Ea(n) : n),
      (e = e.useState()[0]),
      (re !== null ? re.memoizedState : null) !== e && (Ht.flags |= 1024),
      n
    );
  }
  function rf() {
    var e = fu !== 0;
    return (fu = 0), e;
  }
  function lf(e, n, l) {
    (n.updateQueue = e.updateQueue), (n.flags &= -2053), (e.lanes &= ~l);
  }
  function af(e) {
    if (cu) {
      for (e = e.memoizedState; e !== null; ) {
        var n = e.queue;
        n !== null && (n.pending = null), (e = e.next);
      }
      cu = !1;
    }
    (Ur = 0), (ze = re = Ht = null), (ll = !1), (wa = fu = 0), (al = null);
  }
  function an() {
    var e = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null,
    };
    return ze === null ? (Ht.memoizedState = ze = e) : (ze = ze.next = e), ze;
  }
  function De() {
    if (re === null) {
      var e = Ht.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = re.next;
    var n = ze === null ? Ht.memoizedState : ze.next;
    if (n !== null) (ze = n), (re = e);
    else {
      if (e === null)
        throw Ht.alternate === null ? Error(a(467)) : Error(a(310));
      (re = e),
        (e = {
          memoizedState: re.memoizedState,
          baseState: re.baseState,
          baseQueue: re.baseQueue,
          queue: re.queue,
          next: null,
        }),
        ze === null ? (Ht.memoizedState = ze = e) : (ze = ze.next = e);
    }
    return ze;
  }
  function of() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function Ea(e) {
    var n = wa;
    return (
      (wa += 1),
      al === null && (al = []),
      (e = Tm(al, e, n)),
      (n = Ht),
      (ze === null ? n.memoizedState : ze.next) === null &&
        ((n = n.alternate),
        (_.H = n === null || n.memoizedState === null ? dg : pg)),
      e
    );
  }
  function du(e) {
    if (e !== null && typeof e == "object") {
      if (typeof e.then == "function") return Ea(e);
      if (e.$$typeof === $) return Fe(e);
    }
    throw Error(a(438, String(e)));
  }
  function uf(e) {
    var n = null,
      l = Ht.updateQueue;
    if ((l !== null && (n = l.memoCache), n == null)) {
      var o = Ht.alternate;
      o !== null &&
        ((o = o.updateQueue),
        o !== null &&
          ((o = o.memoCache),
          o != null &&
            (n = {
              data: o.data.map(function (c) {
                return c.slice();
              }),
              index: 0,
            })));
    }
    if (
      (n == null && (n = { data: [], index: 0 }),
      l === null && ((l = of()), (Ht.updateQueue = l)),
      (l.memoCache = n),
      (l = n.data[n.index]),
      l === void 0)
    )
      for (l = n.data[n.index] = Array(e), o = 0; o < e; o++) l[o] = z;
    return n.index++, l;
  }
  function vr(e, n) {
    return typeof n == "function" ? n(e) : n;
  }
  function pu(e) {
    var n = De();
    return sf(n, re, e);
  }
  function sf(e, n, l) {
    var o = e.queue;
    if (o === null) throw Error(a(311));
    o.lastRenderedReducer = l;
    var c = e.baseQueue,
      p = o.pending;
    if (p !== null) {
      if (c !== null) {
        var S = c.next;
        (c.next = p.next), (p.next = S);
      }
      (n.baseQueue = c = p), (o.pending = null);
    }
    if (((p = e.baseState), c === null)) e.memoizedState = p;
    else {
      n = c.next;
      var E = (S = null),
        M = null,
        I = n,
        rt = !1;
      do {
        var at = I.lane & -536870913;
        if (at !== I.lane ? (Gt & at) === at : (Ur & at) === at) {
          var K = I.revertLane;
          if (K === 0)
            M !== null &&
              (M = M.next =
                {
                  lane: 0,
                  revertLane: 0,
                  action: I.action,
                  hasEagerState: I.hasEagerState,
                  eagerState: I.eagerState,
                  next: null,
                }),
              at === nl && (rt = !0);
          else if ((Ur & K) === K) {
            (I = I.next), K === nl && (rt = !0);
            continue;
          } else
            (at = {
              lane: 0,
              revertLane: I.revertLane,
              action: I.action,
              hasEagerState: I.hasEagerState,
              eagerState: I.eagerState,
              next: null,
            }),
              M === null ? ((E = M = at), (S = p)) : (M = M.next = at),
              (Ht.lanes |= K),
              (Yr |= K);
          (at = I.action),
            bi && l(p, at),
            (p = I.hasEagerState ? I.eagerState : l(p, at));
        } else
          (K = {
            lane: at,
            revertLane: I.revertLane,
            action: I.action,
            hasEagerState: I.hasEagerState,
            eagerState: I.eagerState,
            next: null,
          }),
            M === null ? ((E = M = K), (S = p)) : (M = M.next = K),
            (Ht.lanes |= at),
            (Yr |= at);
        I = I.next;
      } while (I !== null && I !== n);
      if (
        (M === null ? (S = p) : (M.next = E),
        !mn(p, e.memoizedState) && ((qe = !0), rt && ((l = rl), l !== null)))
      )
        throw l;
      (e.memoizedState = p),
        (e.baseState = S),
        (e.baseQueue = M),
        (o.lastRenderedState = p);
    }
    return c === null && (o.lanes = 0), [e.memoizedState, o.dispatch];
  }
  function cf(e) {
    var n = De(),
      l = n.queue;
    if (l === null) throw Error(a(311));
    l.lastRenderedReducer = e;
    var o = l.dispatch,
      c = l.pending,
      p = n.memoizedState;
    if (c !== null) {
      l.pending = null;
      var S = (c = c.next);
      do (p = e(p, S.action)), (S = S.next);
      while (S !== c);
      mn(p, n.memoizedState) || (qe = !0),
        (n.memoizedState = p),
        n.baseQueue === null && (n.baseState = p),
        (l.lastRenderedState = p);
    }
    return [p, o];
  }
  function zm(e, n, l) {
    var o = Ht,
      c = De(),
      p = It;
    if (p) {
      if (l === void 0) throw Error(a(407));
      l = l();
    } else l = n();
    var S = !mn((re || c).memoizedState, l);
    S && ((c.memoizedState = l), (qe = !0)), (c = c.queue);
    var E = Bm.bind(null, o, c, e);
    if (
      (Ta(2048, 8, E, [e]),
      c.getSnapshot !== n || S || (ze !== null && ze.memoizedState.tag & 1))
    ) {
      if (
        ((o.flags |= 2048),
        ol(9, hu(), Nm.bind(null, o, c, l, n), null),
        de === null)
      )
        throw Error(a(349));
      p || (Ur & 124) !== 0 || Dm(o, n, l);
    }
    return l;
  }
  function Dm(e, n, l) {
    (e.flags |= 16384),
      (e = { getSnapshot: n, value: l }),
      (n = Ht.updateQueue),
      n === null
        ? ((n = of()), (Ht.updateQueue = n), (n.stores = [e]))
        : ((l = n.stores), l === null ? (n.stores = [e]) : l.push(e));
  }
  function Nm(e, n, l, o) {
    (n.value = l), (n.getSnapshot = o), Lm(n) && Um(e);
  }
  function Bm(e, n, l) {
    return l(function () {
      Lm(n) && Um(e);
    });
  }
  function Lm(e) {
    var n = e.getSnapshot;
    e = e.value;
    try {
      var l = n();
      return !mn(e, l);
    } catch {
      return !0;
    }
  }
  function Um(e) {
    var n = Wi(e, 2);
    n !== null && Sn(n, e, 2);
  }
  function ff(e) {
    var n = an();
    if (typeof e == "function") {
      var l = e;
      if (((e = l()), bi)) {
        wt(!0);
        try {
          l();
        } finally {
          wt(!1);
        }
      }
    }
    return (
      (n.memoizedState = n.baseState = e),
      (n.queue = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: vr,
        lastRenderedState: e,
      }),
      n
    );
  }
  function jm(e, n, l, o) {
    return (e.baseState = l), sf(e, re, typeof o == "function" ? o : vr);
  }
  function TS(e, n, l, o, c) {
    if (gu(e)) throw Error(a(485));
    if (((e = n.action), e !== null)) {
      var p = {
        payload: c,
        action: e,
        next: null,
        isTransition: !0,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then: function (S) {
          p.listeners.push(S);
        },
      };
      _.T !== null ? l(!0) : (p.isTransition = !1),
        o(p),
        (l = n.pending),
        l === null
          ? ((p.next = n.pending = p), Hm(n, p))
          : ((p.next = l.next), (n.pending = l.next = p));
    }
  }
  function Hm(e, n) {
    var l = n.action,
      o = n.payload,
      c = e.state;
    if (n.isTransition) {
      var p = _.T,
        S = {};
      _.T = S;
      try {
        var E = l(c, o),
          M = _.S;
        M !== null && M(S, E), qm(e, n, E);
      } catch (I) {
        df(e, n, I);
      } finally {
        _.T = p;
      }
    } else
      try {
        (p = l(c, o)), qm(e, n, p);
      } catch (I) {
        df(e, n, I);
      }
  }
  function qm(e, n, l) {
    l !== null && typeof l == "object" && typeof l.then == "function"
      ? l.then(
          function (o) {
            Pm(e, n, o);
          },
          function (o) {
            return df(e, n, o);
          }
        )
      : Pm(e, n, l);
  }
  function Pm(e, n, l) {
    (n.status = "fulfilled"),
      (n.value = l),
      $m(n),
      (e.state = l),
      (n = e.pending),
      n !== null &&
        ((l = n.next),
        l === n ? (e.pending = null) : ((l = l.next), (n.next = l), Hm(e, l)));
  }
  function df(e, n, l) {
    var o = e.pending;
    if (((e.pending = null), o !== null)) {
      o = o.next;
      do (n.status = "rejected"), (n.reason = l), $m(n), (n = n.next);
      while (n !== o);
    }
    e.action = null;
  }
  function $m(e) {
    e = e.listeners;
    for (var n = 0; n < e.length; n++) (0, e[n])();
  }
  function Vm(e, n) {
    return n;
  }
  function Ym(e, n) {
    if (It) {
      var l = de.formState;
      if (l !== null) {
        t: {
          var o = Ht;
          if (It) {
            if (Ee) {
              e: {
                for (var c = Ee, p = Kn; c.nodeType !== 8; ) {
                  if (!p) {
                    c = null;
                    break e;
                  }
                  if (((c = In(c.nextSibling)), c === null)) {
                    c = null;
                    break e;
                  }
                }
                (p = c.data), (c = p === "F!" || p === "F" ? c : null);
              }
              if (c) {
                (Ee = In(c.nextSibling)), (o = c.data === "F!");
                break t;
              }
            }
            mi(o);
          }
          o = !1;
        }
        o && (n = l[0]);
      }
    }
    return (
      (l = an()),
      (l.memoizedState = l.baseState = n),
      (o = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Vm,
        lastRenderedState: n,
      }),
      (l.queue = o),
      (l = sg.bind(null, Ht, o)),
      (o.dispatch = l),
      (o = ff(!1)),
      (p = yf.bind(null, Ht, !1, o.queue)),
      (o = an()),
      (c = { state: n, dispatch: null, action: e, pending: null }),
      (o.queue = c),
      (l = TS.bind(null, Ht, c, p, l)),
      (c.dispatch = l),
      (o.memoizedState = e),
      [n, l, !1]
    );
  }
  function Gm(e) {
    var n = De();
    return Xm(n, re, e);
  }
  function Xm(e, n, l) {
    if (
      ((n = sf(e, n, Vm)[0]),
      (e = pu(vr)[0]),
      typeof n == "object" && n !== null && typeof n.then == "function")
    )
      try {
        var o = Ea(n);
      } catch (S) {
        throw S === ya ? ou : S;
      }
    else o = n;
    n = De();
    var c = n.queue,
      p = c.dispatch;
    return (
      l !== n.memoizedState &&
        ((Ht.flags |= 2048), ol(9, hu(), AS.bind(null, c, l), null)),
      [o, p, e]
    );
  }
  function AS(e, n) {
    e.action = n;
  }
  function Qm(e) {
    var n = De(),
      l = re;
    if (l !== null) return Xm(n, l, e);
    De(), (n = n.memoizedState), (l = De());
    var o = l.queue.dispatch;
    return (l.memoizedState = e), [n, o, !1];
  }
  function ol(e, n, l, o) {
    return (
      (e = { tag: e, create: l, deps: o, inst: n, next: null }),
      (n = Ht.updateQueue),
      n === null && ((n = of()), (Ht.updateQueue = n)),
      (l = n.lastEffect),
      l === null
        ? (n.lastEffect = e.next = e)
        : ((o = l.next), (l.next = e), (e.next = o), (n.lastEffect = e)),
      e
    );
  }
  function hu() {
    return { destroy: void 0, resource: void 0 };
  }
  function Im() {
    return De().memoizedState;
  }
  function mu(e, n, l, o) {
    var c = an();
    (o = o === void 0 ? null : o),
      (Ht.flags |= e),
      (c.memoizedState = ol(1 | n, hu(), l, o));
  }
  function Ta(e, n, l, o) {
    var c = De();
    o = o === void 0 ? null : o;
    var p = c.memoizedState.inst;
    re !== null && o !== null && ef(o, re.memoizedState.deps)
      ? (c.memoizedState = ol(n, p, l, o))
      : ((Ht.flags |= e), (c.memoizedState = ol(1 | n, p, l, o)));
  }
  function Zm(e, n) {
    mu(8390656, 8, e, n);
  }
  function Km(e, n) {
    Ta(2048, 8, e, n);
  }
  function Fm(e, n) {
    return Ta(4, 2, e, n);
  }
  function Wm(e, n) {
    return Ta(4, 4, e, n);
  }
  function Jm(e, n) {
    if (typeof n == "function") {
      e = e();
      var l = n(e);
      return function () {
        typeof l == "function" ? l() : n(null);
      };
    }
    if (n != null)
      return (
        (e = e()),
        (n.current = e),
        function () {
          n.current = null;
        }
      );
  }
  function tg(e, n, l) {
    (l = l != null ? l.concat([e]) : null), Ta(4, 4, Jm.bind(null, n, e), l);
  }
  function pf() {}
  function eg(e, n) {
    var l = De();
    n = n === void 0 ? null : n;
    var o = l.memoizedState;
    return n !== null && ef(n, o[1]) ? o[0] : ((l.memoizedState = [e, n]), e);
  }
  function ng(e, n) {
    var l = De();
    n = n === void 0 ? null : n;
    var o = l.memoizedState;
    if (n !== null && ef(n, o[1])) return o[0];
    if (((o = e()), bi)) {
      wt(!0);
      try {
        e();
      } finally {
        wt(!1);
      }
    }
    return (l.memoizedState = [o, n]), o;
  }
  function hf(e, n, l) {
    return l === void 0 || (Ur & 1073741824) !== 0
      ? (e.memoizedState = n)
      : ((e.memoizedState = l), (e = l0()), (Ht.lanes |= e), (Yr |= e), l);
  }
  function rg(e, n, l, o) {
    return mn(l, n)
      ? l
      : il.current !== null
      ? ((e = hf(e, l, o)), mn(e, n) || (qe = !0), e)
      : (Ur & 42) === 0
      ? ((qe = !0), (e.memoizedState = l))
      : ((e = l0()), (Ht.lanes |= e), (Yr |= e), n);
  }
  function ig(e, n, l, o, c) {
    var p = P.p;
    P.p = p !== 0 && 8 > p ? p : 8;
    var S = _.T,
      E = {};
    (_.T = E), yf(e, !1, n, l);
    try {
      var M = c(),
        I = _.S;
      if (
        (I !== null && I(E, M),
        M !== null && typeof M == "object" && typeof M.then == "function")
      ) {
        var rt = SS(M, o);
        Aa(e, n, rt, xn(e));
      } else Aa(e, n, o, xn(e));
    } catch (at) {
      Aa(e, n, { then: function () {}, status: "rejected", reason: at }, xn());
    } finally {
      (P.p = p), (_.T = S);
    }
  }
  function OS() {}
  function mf(e, n, l, o) {
    if (e.tag !== 5) throw Error(a(476));
    var c = lg(e).queue;
    ig(
      e,
      c,
      n,
      nt,
      l === null
        ? OS
        : function () {
            return ag(e), l(o);
          }
    );
  }
  function lg(e) {
    var n = e.memoizedState;
    if (n !== null) return n;
    n = {
      memoizedState: nt,
      baseState: nt,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: vr,
        lastRenderedState: nt,
      },
      next: null,
    };
    var l = {};
    return (
      (n.next = {
        memoizedState: l,
        baseState: l,
        baseQueue: null,
        queue: {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: vr,
          lastRenderedState: l,
        },
        next: null,
      }),
      (e.memoizedState = n),
      (e = e.alternate),
      e !== null && (e.memoizedState = n),
      n
    );
  }
  function ag(e) {
    var n = lg(e).next.queue;
    Aa(e, n, {}, xn());
  }
  function gf() {
    return Fe(Va);
  }
  function og() {
    return De().memoizedState;
  }
  function ug() {
    return De().memoizedState;
  }
  function CS(e) {
    for (var n = e.return; n !== null; ) {
      switch (n.tag) {
        case 24:
        case 3:
          var l = xn();
          e = Br(l);
          var o = Lr(n, e, l);
          o !== null && (Sn(o, n, l), ba(o, n, l)),
            (n = { cache: Gc() }),
            (e.payload = n);
          return;
      }
      n = n.return;
    }
  }
  function kS(e, n, l) {
    var o = xn();
    (l = {
      lane: o,
      revertLane: 0,
      action: l,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
      gu(e)
        ? cg(n, l)
        : ((l = Bc(e, n, l, o)), l !== null && (Sn(l, e, o), fg(l, n, o)));
  }
  function sg(e, n, l) {
    var o = xn();
    Aa(e, n, l, o);
  }
  function Aa(e, n, l, o) {
    var c = {
      lane: o,
      revertLane: 0,
      action: l,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    };
    if (gu(e)) cg(n, c);
    else {
      var p = e.alternate;
      if (
        e.lanes === 0 &&
        (p === null || p.lanes === 0) &&
        ((p = n.lastRenderedReducer), p !== null)
      )
        try {
          var S = n.lastRenderedState,
            E = p(S, l);
          if (((c.hasEagerState = !0), (c.eagerState = E), mn(E, S)))
            return Jo(e, n, c, 0), de === null && Wo(), !1;
        } catch {
        } finally {
        }
      if (((l = Bc(e, n, c, o)), l !== null))
        return Sn(l, e, o), fg(l, n, o), !0;
    }
    return !1;
  }
  function yf(e, n, l, o) {
    if (
      ((o = {
        lane: 2,
        revertLane: Zf(),
        action: o,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
      gu(e))
    ) {
      if (n) throw Error(a(479));
    } else (n = Bc(e, l, o, 2)), n !== null && Sn(n, e, 2);
  }
  function gu(e) {
    var n = e.alternate;
    return e === Ht || (n !== null && n === Ht);
  }
  function cg(e, n) {
    ll = cu = !0;
    var l = e.pending;
    l === null ? (n.next = n) : ((n.next = l.next), (l.next = n)),
      (e.pending = n);
  }
  function fg(e, n, l) {
    if ((l & 4194048) !== 0) {
      var o = n.lanes;
      (o &= e.pendingLanes), (l |= o), (n.lanes = l), qo(e, l);
    }
  }
  var yu = {
      readContext: Fe,
      use: du,
      useCallback: _e,
      useContext: _e,
      useEffect: _e,
      useImperativeHandle: _e,
      useLayoutEffect: _e,
      useInsertionEffect: _e,
      useMemo: _e,
      useReducer: _e,
      useRef: _e,
      useState: _e,
      useDebugValue: _e,
      useDeferredValue: _e,
      useTransition: _e,
      useSyncExternalStore: _e,
      useId: _e,
      useHostTransitionStatus: _e,
      useFormState: _e,
      useActionState: _e,
      useOptimistic: _e,
      useMemoCache: _e,
      useCacheRefresh: _e,
    },
    dg = {
      readContext: Fe,
      use: du,
      useCallback: function (e, n) {
        return (an().memoizedState = [e, n === void 0 ? null : n]), e;
      },
      useContext: Fe,
      useEffect: Zm,
      useImperativeHandle: function (e, n, l) {
        (l = l != null ? l.concat([e]) : null),
          mu(4194308, 4, Jm.bind(null, n, e), l);
      },
      useLayoutEffect: function (e, n) {
        return mu(4194308, 4, e, n);
      },
      useInsertionEffect: function (e, n) {
        mu(4, 2, e, n);
      },
      useMemo: function (e, n) {
        var l = an();
        n = n === void 0 ? null : n;
        var o = e();
        if (bi) {
          wt(!0);
          try {
            e();
          } finally {
            wt(!1);
          }
        }
        return (l.memoizedState = [o, n]), o;
      },
      useReducer: function (e, n, l) {
        var o = an();
        if (l !== void 0) {
          var c = l(n);
          if (bi) {
            wt(!0);
            try {
              l(n);
            } finally {
              wt(!1);
            }
          }
        } else c = n;
        return (
          (o.memoizedState = o.baseState = c),
          (e = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: e,
            lastRenderedState: c,
          }),
          (o.queue = e),
          (e = e.dispatch = kS.bind(null, Ht, e)),
          [o.memoizedState, e]
        );
      },
      useRef: function (e) {
        var n = an();
        return (e = { current: e }), (n.memoizedState = e);
      },
      useState: function (e) {
        e = ff(e);
        var n = e.queue,
          l = sg.bind(null, Ht, n);
        return (n.dispatch = l), [e.memoizedState, l];
      },
      useDebugValue: pf,
      useDeferredValue: function (e, n) {
        var l = an();
        return hf(l, e, n);
      },
      useTransition: function () {
        var e = ff(!1);
        return (
          (e = ig.bind(null, Ht, e.queue, !0, !1)),
          (an().memoizedState = e),
          [!1, e]
        );
      },
      useSyncExternalStore: function (e, n, l) {
        var o = Ht,
          c = an();
        if (It) {
          if (l === void 0) throw Error(a(407));
          l = l();
        } else {
          if (((l = n()), de === null)) throw Error(a(349));
          (Gt & 124) !== 0 || Dm(o, n, l);
        }
        c.memoizedState = l;
        var p = { value: l, getSnapshot: n };
        return (
          (c.queue = p),
          Zm(Bm.bind(null, o, p, e), [e]),
          (o.flags |= 2048),
          ol(9, hu(), Nm.bind(null, o, p, l, n), null),
          l
        );
      },
      useId: function () {
        var e = an(),
          n = de.identifierPrefix;
        if (It) {
          var l = mr,
            o = hr;
          (l = (o & ~(1 << (32 - Tt(o) - 1))).toString(32) + l),
            (n = "«" + n + "R" + l),
            (l = fu++),
            0 < l && (n += "H" + l.toString(32)),
            (n += "»");
        } else (l = wS++), (n = "«" + n + "r" + l.toString(32) + "»");
        return (e.memoizedState = n);
      },
      useHostTransitionStatus: gf,
      useFormState: Ym,
      useActionState: Ym,
      useOptimistic: function (e) {
        var n = an();
        n.memoizedState = n.baseState = e;
        var l = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: null,
          lastRenderedState: null,
        };
        return (
          (n.queue = l),
          (n = yf.bind(null, Ht, !0, l)),
          (l.dispatch = n),
          [e, n]
        );
      },
      useMemoCache: uf,
      useCacheRefresh: function () {
        return (an().memoizedState = CS.bind(null, Ht));
      },
    },
    pg = {
      readContext: Fe,
      use: du,
      useCallback: eg,
      useContext: Fe,
      useEffect: Km,
      useImperativeHandle: tg,
      useInsertionEffect: Fm,
      useLayoutEffect: Wm,
      useMemo: ng,
      useReducer: pu,
      useRef: Im,
      useState: function () {
        return pu(vr);
      },
      useDebugValue: pf,
      useDeferredValue: function (e, n) {
        var l = De();
        return rg(l, re.memoizedState, e, n);
      },
      useTransition: function () {
        var e = pu(vr)[0],
          n = De().memoizedState;
        return [typeof e == "boolean" ? e : Ea(e), n];
      },
      useSyncExternalStore: zm,
      useId: og,
      useHostTransitionStatus: gf,
      useFormState: Gm,
      useActionState: Gm,
      useOptimistic: function (e, n) {
        var l = De();
        return jm(l, re, e, n);
      },
      useMemoCache: uf,
      useCacheRefresh: ug,
    },
    _S = {
      readContext: Fe,
      use: du,
      useCallback: eg,
      useContext: Fe,
      useEffect: Km,
      useImperativeHandle: tg,
      useInsertionEffect: Fm,
      useLayoutEffect: Wm,
      useMemo: ng,
      useReducer: cf,
      useRef: Im,
      useState: function () {
        return cf(vr);
      },
      useDebugValue: pf,
      useDeferredValue: function (e, n) {
        var l = De();
        return re === null ? hf(l, e, n) : rg(l, re.memoizedState, e, n);
      },
      useTransition: function () {
        var e = cf(vr)[0],
          n = De().memoizedState;
        return [typeof e == "boolean" ? e : Ea(e), n];
      },
      useSyncExternalStore: zm,
      useId: og,
      useHostTransitionStatus: gf,
      useFormState: Qm,
      useActionState: Qm,
      useOptimistic: function (e, n) {
        var l = De();
        return re !== null
          ? jm(l, re, e, n)
          : ((l.baseState = e), [e, l.queue.dispatch]);
      },
      useMemoCache: uf,
      useCacheRefresh: ug,
    },
    ul = null,
    Oa = 0;
  function vu(e) {
    var n = Oa;
    return (Oa += 1), ul === null && (ul = []), Tm(ul, e, n);
  }
  function Ca(e, n) {
    (n = n.props.ref), (e.ref = n !== void 0 ? n : null);
  }
  function bu(e, n) {
    throw n.$$typeof === y
      ? Error(a(525))
      : ((e = Object.prototype.toString.call(n)),
        Error(
          a(
            31,
            e === "[object Object]"
              ? "object with keys {" + Object.keys(n).join(", ") + "}"
              : e
          )
        ));
  }
  function hg(e) {
    var n = e._init;
    return n(e._payload);
  }
  function mg(e) {
    function n(Y, j) {
      if (e) {
        var X = Y.deletions;
        X === null ? ((Y.deletions = [j]), (Y.flags |= 16)) : X.push(j);
      }
    }
    function l(Y, j) {
      if (!e) return null;
      for (; j !== null; ) n(Y, j), (j = j.sibling);
      return null;
    }
    function o(Y) {
      for (var j = new Map(); Y !== null; )
        Y.key !== null ? j.set(Y.key, Y) : j.set(Y.index, Y), (Y = Y.sibling);
      return j;
    }
    function c(Y, j) {
      return (Y = pr(Y, j)), (Y.index = 0), (Y.sibling = null), Y;
    }
    function p(Y, j, X) {
      return (
        (Y.index = X),
        e
          ? ((X = Y.alternate),
            X !== null
              ? ((X = X.index), X < j ? ((Y.flags |= 67108866), j) : X)
              : ((Y.flags |= 67108866), j))
          : ((Y.flags |= 1048576), j)
      );
    }
    function S(Y) {
      return e && Y.alternate === null && (Y.flags |= 67108866), Y;
    }
    function E(Y, j, X, lt) {
      return j === null || j.tag !== 6
        ? ((j = Uc(X, Y.mode, lt)), (j.return = Y), j)
        : ((j = c(j, X)), (j.return = Y), j);
    }
    function M(Y, j, X, lt) {
      var bt = X.type;
      return bt === O
        ? rt(Y, j, X.props.children, lt, X.key)
        : j !== null &&
          (j.elementType === bt ||
            (typeof bt == "object" &&
              bt !== null &&
              bt.$$typeof === C &&
              hg(bt) === j.type))
        ? ((j = c(j, X.props)), Ca(j, X), (j.return = Y), j)
        : ((j = eu(X.type, X.key, X.props, null, Y.mode, lt)),
          Ca(j, X),
          (j.return = Y),
          j);
    }
    function I(Y, j, X, lt) {
      return j === null ||
        j.tag !== 4 ||
        j.stateNode.containerInfo !== X.containerInfo ||
        j.stateNode.implementation !== X.implementation
        ? ((j = jc(X, Y.mode, lt)), (j.return = Y), j)
        : ((j = c(j, X.children || [])), (j.return = Y), j);
    }
    function rt(Y, j, X, lt, bt) {
      return j === null || j.tag !== 7
        ? ((j = fi(X, Y.mode, lt, bt)), (j.return = Y), j)
        : ((j = c(j, X)), (j.return = Y), j);
    }
    function at(Y, j, X) {
      if (
        (typeof j == "string" && j !== "") ||
        typeof j == "number" ||
        typeof j == "bigint"
      )
        return (j = Uc("" + j, Y.mode, X)), (j.return = Y), j;
      if (typeof j == "object" && j !== null) {
        switch (j.$$typeof) {
          case b:
            return (
              (X = eu(j.type, j.key, j.props, null, Y.mode, X)),
              Ca(X, j),
              (X.return = Y),
              X
            );
          case v:
            return (j = jc(j, Y.mode, X)), (j.return = Y), j;
          case C:
            var lt = j._init;
            return (j = lt(j._payload)), at(Y, j, X);
        }
        if (V(j) || w(j))
          return (j = fi(j, Y.mode, X, null)), (j.return = Y), j;
        if (typeof j.then == "function") return at(Y, vu(j), X);
        if (j.$$typeof === $) return at(Y, lu(Y, j), X);
        bu(Y, j);
      }
      return null;
    }
    function K(Y, j, X, lt) {
      var bt = j !== null ? j.key : null;
      if (
        (typeof X == "string" && X !== "") ||
        typeof X == "number" ||
        typeof X == "bigint"
      )
        return bt !== null ? null : E(Y, j, "" + X, lt);
      if (typeof X == "object" && X !== null) {
        switch (X.$$typeof) {
          case b:
            return X.key === bt ? M(Y, j, X, lt) : null;
          case v:
            return X.key === bt ? I(Y, j, X, lt) : null;
          case C:
            return (bt = X._init), (X = bt(X._payload)), K(Y, j, X, lt);
        }
        if (V(X) || w(X)) return bt !== null ? null : rt(Y, j, X, lt, null);
        if (typeof X.then == "function") return K(Y, j, vu(X), lt);
        if (X.$$typeof === $) return K(Y, j, lu(Y, X), lt);
        bu(Y, X);
      }
      return null;
    }
    function W(Y, j, X, lt, bt) {
      if (
        (typeof lt == "string" && lt !== "") ||
        typeof lt == "number" ||
        typeof lt == "bigint"
      )
        return (Y = Y.get(X) || null), E(j, Y, "" + lt, bt);
      if (typeof lt == "object" && lt !== null) {
        switch (lt.$$typeof) {
          case b:
            return (
              (Y = Y.get(lt.key === null ? X : lt.key) || null), M(j, Y, lt, bt)
            );
          case v:
            return (
              (Y = Y.get(lt.key === null ? X : lt.key) || null), I(j, Y, lt, bt)
            );
          case C:
            var qt = lt._init;
            return (lt = qt(lt._payload)), W(Y, j, X, lt, bt);
        }
        if (V(lt) || w(lt))
          return (Y = Y.get(X) || null), rt(j, Y, lt, bt, null);
        if (typeof lt.then == "function") return W(Y, j, X, vu(lt), bt);
        if (lt.$$typeof === $) return W(Y, j, X, lu(j, lt), bt);
        bu(j, lt);
      }
      return null;
    }
    function Mt(Y, j, X, lt) {
      for (
        var bt = null, qt = null, Ot = j, Rt = (j = 0), $e = null;
        Ot !== null && Rt < X.length;
        Rt++
      ) {
        Ot.index > Rt ? (($e = Ot), (Ot = null)) : ($e = Ot.sibling);
        var Qt = K(Y, Ot, X[Rt], lt);
        if (Qt === null) {
          Ot === null && (Ot = $e);
          break;
        }
        e && Ot && Qt.alternate === null && n(Y, Ot),
          (j = p(Qt, j, Rt)),
          qt === null ? (bt = Qt) : (qt.sibling = Qt),
          (qt = Qt),
          (Ot = $e);
      }
      if (Rt === X.length) return l(Y, Ot), It && pi(Y, Rt), bt;
      if (Ot === null) {
        for (; Rt < X.length; Rt++)
          (Ot = at(Y, X[Rt], lt)),
            Ot !== null &&
              ((j = p(Ot, j, Rt)),
              qt === null ? (bt = Ot) : (qt.sibling = Ot),
              (qt = Ot));
        return It && pi(Y, Rt), bt;
      }
      for (Ot = o(Ot); Rt < X.length; Rt++)
        ($e = W(Ot, Y, Rt, X[Rt], lt)),
          $e !== null &&
            (e &&
              $e.alternate !== null &&
              Ot.delete($e.key === null ? Rt : $e.key),
            (j = p($e, j, Rt)),
            qt === null ? (bt = $e) : (qt.sibling = $e),
            (qt = $e));
      return (
        e &&
          Ot.forEach(function (Jr) {
            return n(Y, Jr);
          }),
        It && pi(Y, Rt),
        bt
      );
    }
    function _t(Y, j, X, lt) {
      if (X == null) throw Error(a(151));
      for (
        var bt = null,
          qt = null,
          Ot = j,
          Rt = (j = 0),
          $e = null,
          Qt = X.next();
        Ot !== null && !Qt.done;
        Rt++, Qt = X.next()
      ) {
        Ot.index > Rt ? (($e = Ot), (Ot = null)) : ($e = Ot.sibling);
        var Jr = K(Y, Ot, Qt.value, lt);
        if (Jr === null) {
          Ot === null && (Ot = $e);
          break;
        }
        e && Ot && Jr.alternate === null && n(Y, Ot),
          (j = p(Jr, j, Rt)),
          qt === null ? (bt = Jr) : (qt.sibling = Jr),
          (qt = Jr),
          (Ot = $e);
      }
      if (Qt.done) return l(Y, Ot), It && pi(Y, Rt), bt;
      if (Ot === null) {
        for (; !Qt.done; Rt++, Qt = X.next())
          (Qt = at(Y, Qt.value, lt)),
            Qt !== null &&
              ((j = p(Qt, j, Rt)),
              qt === null ? (bt = Qt) : (qt.sibling = Qt),
              (qt = Qt));
        return It && pi(Y, Rt), bt;
      }
      for (Ot = o(Ot); !Qt.done; Rt++, Qt = X.next())
        (Qt = W(Ot, Y, Rt, Qt.value, lt)),
          Qt !== null &&
            (e &&
              Qt.alternate !== null &&
              Ot.delete(Qt.key === null ? Rt : Qt.key),
            (j = p(Qt, j, Rt)),
            qt === null ? (bt = Qt) : (qt.sibling = Qt),
            (qt = Qt));
      return (
        e &&
          Ot.forEach(function (Rw) {
            return n(Y, Rw);
          }),
        It && pi(Y, Rt),
        bt
      );
    }
    function le(Y, j, X, lt) {
      if (
        (typeof X == "object" &&
          X !== null &&
          X.type === O &&
          X.key === null &&
          (X = X.props.children),
        typeof X == "object" && X !== null)
      ) {
        switch (X.$$typeof) {
          case b:
            t: {
              for (var bt = X.key; j !== null; ) {
                if (j.key === bt) {
                  if (((bt = X.type), bt === O)) {
                    if (j.tag === 7) {
                      l(Y, j.sibling),
                        (lt = c(j, X.props.children)),
                        (lt.return = Y),
                        (Y = lt);
                      break t;
                    }
                  } else if (
                    j.elementType === bt ||
                    (typeof bt == "object" &&
                      bt !== null &&
                      bt.$$typeof === C &&
                      hg(bt) === j.type)
                  ) {
                    l(Y, j.sibling),
                      (lt = c(j, X.props)),
                      Ca(lt, X),
                      (lt.return = Y),
                      (Y = lt);
                    break t;
                  }
                  l(Y, j);
                  break;
                } else n(Y, j);
                j = j.sibling;
              }
              X.type === O
                ? ((lt = fi(X.props.children, Y.mode, lt, X.key)),
                  (lt.return = Y),
                  (Y = lt))
                : ((lt = eu(X.type, X.key, X.props, null, Y.mode, lt)),
                  Ca(lt, X),
                  (lt.return = Y),
                  (Y = lt));
            }
            return S(Y);
          case v:
            t: {
              for (bt = X.key; j !== null; ) {
                if (j.key === bt)
                  if (
                    j.tag === 4 &&
                    j.stateNode.containerInfo === X.containerInfo &&
                    j.stateNode.implementation === X.implementation
                  ) {
                    l(Y, j.sibling),
                      (lt = c(j, X.children || [])),
                      (lt.return = Y),
                      (Y = lt);
                    break t;
                  } else {
                    l(Y, j);
                    break;
                  }
                else n(Y, j);
                j = j.sibling;
              }
              (lt = jc(X, Y.mode, lt)), (lt.return = Y), (Y = lt);
            }
            return S(Y);
          case C:
            return (bt = X._init), (X = bt(X._payload)), le(Y, j, X, lt);
        }
        if (V(X)) return Mt(Y, j, X, lt);
        if (w(X)) {
          if (((bt = w(X)), typeof bt != "function")) throw Error(a(150));
          return (X = bt.call(X)), _t(Y, j, X, lt);
        }
        if (typeof X.then == "function") return le(Y, j, vu(X), lt);
        if (X.$$typeof === $) return le(Y, j, lu(Y, X), lt);
        bu(Y, X);
      }
      return (typeof X == "string" && X !== "") ||
        typeof X == "number" ||
        typeof X == "bigint"
        ? ((X = "" + X),
          j !== null && j.tag === 6
            ? (l(Y, j.sibling), (lt = c(j, X)), (lt.return = Y), (Y = lt))
            : (l(Y, j), (lt = Uc(X, Y.mode, lt)), (lt.return = Y), (Y = lt)),
          S(Y))
        : l(Y, j);
    }
    return function (Y, j, X, lt) {
      try {
        Oa = 0;
        var bt = le(Y, j, X, lt);
        return (ul = null), bt;
      } catch (Ot) {
        if (Ot === ya || Ot === ou) throw Ot;
        var qt = gn(29, Ot, null, Y.mode);
        return (qt.lanes = lt), (qt.return = Y), qt;
      } finally {
      }
    };
  }
  var sl = mg(!0),
    gg = mg(!1),
    Ln = Z(null),
    Fn = null;
  function jr(e) {
    var n = e.alternate;
    A(je, je.current & 1),
      A(Ln, e),
      Fn === null &&
        (n === null || il.current !== null || n.memoizedState !== null) &&
        (Fn = e);
  }
  function yg(e) {
    if (e.tag === 22) {
      if ((A(je, je.current), A(Ln, e), Fn === null)) {
        var n = e.alternate;
        n !== null && n.memoizedState !== null && (Fn = e);
      }
    } else Hr();
  }
  function Hr() {
    A(je, je.current), A(Ln, Ln.current);
  }
  function br(e) {
    J(Ln), Fn === e && (Fn = null), J(je);
  }
  var je = Z(0);
  function xu(e) {
    for (var n = e; n !== null; ) {
      if (n.tag === 13) {
        var l = n.memoizedState;
        if (
          l !== null &&
          ((l = l.dehydrated), l === null || l.data === "$?" || od(l))
        )
          return n;
      } else if (n.tag === 19 && n.memoizedProps.revealOrder !== void 0) {
        if ((n.flags & 128) !== 0) return n;
      } else if (n.child !== null) {
        (n.child.return = n), (n = n.child);
        continue;
      }
      if (n === e) break;
      for (; n.sibling === null; ) {
        if (n.return === null || n.return === e) return null;
        n = n.return;
      }
      (n.sibling.return = n.return), (n = n.sibling);
    }
    return null;
  }
  function vf(e, n, l, o) {
    (n = e.memoizedState),
      (l = l(o, n)),
      (l = l == null ? n : g({}, n, l)),
      (e.memoizedState = l),
      e.lanes === 0 && (e.updateQueue.baseState = l);
  }
  var bf = {
    enqueueSetState: function (e, n, l) {
      e = e._reactInternals;
      var o = xn(),
        c = Br(o);
      (c.payload = n),
        l != null && (c.callback = l),
        (n = Lr(e, c, o)),
        n !== null && (Sn(n, e, o), ba(n, e, o));
    },
    enqueueReplaceState: function (e, n, l) {
      e = e._reactInternals;
      var o = xn(),
        c = Br(o);
      (c.tag = 1),
        (c.payload = n),
        l != null && (c.callback = l),
        (n = Lr(e, c, o)),
        n !== null && (Sn(n, e, o), ba(n, e, o));
    },
    enqueueForceUpdate: function (e, n) {
      e = e._reactInternals;
      var l = xn(),
        o = Br(l);
      (o.tag = 2),
        n != null && (o.callback = n),
        (n = Lr(e, o, l)),
        n !== null && (Sn(n, e, l), ba(n, e, l));
    },
  };
  function vg(e, n, l, o, c, p, S) {
    return (
      (e = e.stateNode),
      typeof e.shouldComponentUpdate == "function"
        ? e.shouldComponentUpdate(o, p, S)
        : n.prototype && n.prototype.isPureReactComponent
        ? !sa(l, o) || !sa(c, p)
        : !0
    );
  }
  function bg(e, n, l, o) {
    (e = n.state),
      typeof n.componentWillReceiveProps == "function" &&
        n.componentWillReceiveProps(l, o),
      typeof n.UNSAFE_componentWillReceiveProps == "function" &&
        n.UNSAFE_componentWillReceiveProps(l, o),
      n.state !== e && bf.enqueueReplaceState(n, n.state, null);
  }
  function xi(e, n) {
    var l = n;
    if ("ref" in n) {
      l = {};
      for (var o in n) o !== "ref" && (l[o] = n[o]);
    }
    if ((e = e.defaultProps)) {
      l === n && (l = g({}, l));
      for (var c in e) l[c] === void 0 && (l[c] = e[c]);
    }
    return l;
  }
  var Su =
    typeof reportError == "function"
      ? reportError
      : function (e) {
          if (
            typeof window == "object" &&
            typeof window.ErrorEvent == "function"
          ) {
            var n = new window.ErrorEvent("error", {
              bubbles: !0,
              cancelable: !0,
              message:
                typeof e == "object" &&
                e !== null &&
                typeof e.message == "string"
                  ? String(e.message)
                  : String(e),
              error: e,
            });
            if (!window.dispatchEvent(n)) return;
          } else if (
            typeof process == "object" &&
            typeof process.emit == "function"
          ) {
            process.emit("uncaughtException", e);
            return;
          }
          console.error(e);
        };
  function xg(e) {
    Su(e);
  }
  function Sg(e) {
    console.error(e);
  }
  function wg(e) {
    Su(e);
  }
  function wu(e, n) {
    try {
      var l = e.onUncaughtError;
      l(n.value, { componentStack: n.stack });
    } catch (o) {
      setTimeout(function () {
        throw o;
      });
    }
  }
  function Eg(e, n, l) {
    try {
      var o = e.onCaughtError;
      o(l.value, {
        componentStack: l.stack,
        errorBoundary: n.tag === 1 ? n.stateNode : null,
      });
    } catch (c) {
      setTimeout(function () {
        throw c;
      });
    }
  }
  function xf(e, n, l) {
    return (
      (l = Br(l)),
      (l.tag = 3),
      (l.payload = { element: null }),
      (l.callback = function () {
        wu(e, n);
      }),
      l
    );
  }
  function Tg(e) {
    return (e = Br(e)), (e.tag = 3), e;
  }
  function Ag(e, n, l, o) {
    var c = l.type.getDerivedStateFromError;
    if (typeof c == "function") {
      var p = o.value;
      (e.payload = function () {
        return c(p);
      }),
        (e.callback = function () {
          Eg(n, l, o);
        });
    }
    var S = l.stateNode;
    S !== null &&
      typeof S.componentDidCatch == "function" &&
      (e.callback = function () {
        Eg(n, l, o),
          typeof c != "function" &&
            (Gr === null ? (Gr = new Set([this])) : Gr.add(this));
        var E = o.stack;
        this.componentDidCatch(o.value, {
          componentStack: E !== null ? E : "",
        });
      });
  }
  function RS(e, n, l, o, c) {
    if (
      ((l.flags |= 32768),
      o !== null && typeof o == "object" && typeof o.then == "function")
    ) {
      if (
        ((n = l.alternate),
        n !== null && ha(n, l, c, !0),
        (l = Ln.current),
        l !== null)
      ) {
        switch (l.tag) {
          case 13:
            return (
              Fn === null ? Yf() : l.alternate === null && Te === 0 && (Te = 3),
              (l.flags &= -257),
              (l.flags |= 65536),
              (l.lanes = c),
              o === Ic
                ? (l.flags |= 16384)
                : ((n = l.updateQueue),
                  n === null ? (l.updateQueue = new Set([o])) : n.add(o),
                  Xf(e, o, c)),
              !1
            );
          case 22:
            return (
              (l.flags |= 65536),
              o === Ic
                ? (l.flags |= 16384)
                : ((n = l.updateQueue),
                  n === null
                    ? ((n = {
                        transitions: null,
                        markerInstances: null,
                        retryQueue: new Set([o]),
                      }),
                      (l.updateQueue = n))
                    : ((l = n.retryQueue),
                      l === null ? (n.retryQueue = new Set([o])) : l.add(o)),
                  Xf(e, o, c)),
              !1
            );
        }
        throw Error(a(435, l.tag));
      }
      return Xf(e, o, c), Yf(), !1;
    }
    if (It)
      return (
        (n = Ln.current),
        n !== null
          ? ((n.flags & 65536) === 0 && (n.flags |= 256),
            (n.flags |= 65536),
            (n.lanes = c),
            o !== Pc && ((e = Error(a(422), { cause: o })), pa(zn(e, l))))
          : (o !== Pc && ((n = Error(a(423), { cause: o })), pa(zn(n, l))),
            (e = e.current.alternate),
            (e.flags |= 65536),
            (c &= -c),
            (e.lanes |= c),
            (o = zn(o, l)),
            (c = xf(e.stateNode, o, c)),
            Fc(e, c),
            Te !== 4 && (Te = 2)),
        !1
      );
    var p = Error(a(520), { cause: o });
    if (
      ((p = zn(p, l)),
      Na === null ? (Na = [p]) : Na.push(p),
      Te !== 4 && (Te = 2),
      n === null)
    )
      return !0;
    (o = zn(o, l)), (l = n);
    do {
      switch (l.tag) {
        case 3:
          return (
            (l.flags |= 65536),
            (e = c & -c),
            (l.lanes |= e),
            (e = xf(l.stateNode, o, e)),
            Fc(l, e),
            !1
          );
        case 1:
          if (
            ((n = l.type),
            (p = l.stateNode),
            (l.flags & 128) === 0 &&
              (typeof n.getDerivedStateFromError == "function" ||
                (p !== null &&
                  typeof p.componentDidCatch == "function" &&
                  (Gr === null || !Gr.has(p)))))
          )
            return (
              (l.flags |= 65536),
              (c &= -c),
              (l.lanes |= c),
              (c = Tg(c)),
              Ag(c, e, l, o),
              Fc(l, c),
              !1
            );
      }
      l = l.return;
    } while (l !== null);
    return !1;
  }
  var Og = Error(a(461)),
    qe = !1;
  function Ve(e, n, l, o) {
    n.child = e === null ? gg(n, null, l, o) : sl(n, e.child, l, o);
  }
  function Cg(e, n, l, o, c) {
    l = l.render;
    var p = n.ref;
    if ("ref" in o) {
      var S = {};
      for (var E in o) E !== "ref" && (S[E] = o[E]);
    } else S = o;
    return (
      yi(n),
      (o = nf(e, n, l, S, p, c)),
      (E = rf()),
      e !== null && !qe
        ? (lf(e, n, c), xr(e, n, c))
        : (It && E && Hc(n), (n.flags |= 1), Ve(e, n, o, c), n.child)
    );
  }
  function kg(e, n, l, o, c) {
    if (e === null) {
      var p = l.type;
      return typeof p == "function" &&
        !Lc(p) &&
        p.defaultProps === void 0 &&
        l.compare === null
        ? ((n.tag = 15), (n.type = p), _g(e, n, p, o, c))
        : ((e = eu(l.type, null, o, n, n.mode, c)),
          (e.ref = n.ref),
          (e.return = n),
          (n.child = e));
    }
    if (((p = e.child), !kf(e, c))) {
      var S = p.memoizedProps;
      if (
        ((l = l.compare), (l = l !== null ? l : sa), l(S, o) && e.ref === n.ref)
      )
        return xr(e, n, c);
    }
    return (
      (n.flags |= 1),
      (e = pr(p, o)),
      (e.ref = n.ref),
      (e.return = n),
      (n.child = e)
    );
  }
  function _g(e, n, l, o, c) {
    if (e !== null) {
      var p = e.memoizedProps;
      if (sa(p, o) && e.ref === n.ref)
        if (((qe = !1), (n.pendingProps = o = p), kf(e, c)))
          (e.flags & 131072) !== 0 && (qe = !0);
        else return (n.lanes = e.lanes), xr(e, n, c);
    }
    return Sf(e, n, l, o, c);
  }
  function Rg(e, n, l) {
    var o = n.pendingProps,
      c = o.children,
      p = e !== null ? e.memoizedState : null;
    if (o.mode === "hidden") {
      if ((n.flags & 128) !== 0) {
        if (((o = p !== null ? p.baseLanes | l : l), e !== null)) {
          for (c = n.child = e.child, p = 0; c !== null; )
            (p = p | c.lanes | c.childLanes), (c = c.sibling);
          n.childLanes = p & ~o;
        } else (n.childLanes = 0), (n.child = null);
        return Mg(e, n, o, l);
      }
      if ((l & 536870912) !== 0)
        (n.memoizedState = { baseLanes: 0, cachePool: null }),
          e !== null && au(n, p !== null ? p.cachePool : null),
          p !== null ? _m(n, p) : Jc(),
          yg(n);
      else
        return (
          (n.lanes = n.childLanes = 536870912),
          Mg(e, n, p !== null ? p.baseLanes | l : l, l)
        );
    } else
      p !== null
        ? (au(n, p.cachePool), _m(n, p), Hr(), (n.memoizedState = null))
        : (e !== null && au(n, null), Jc(), Hr());
    return Ve(e, n, c, l), n.child;
  }
  function Mg(e, n, l, o) {
    var c = Qc();
    return (
      (c = c === null ? null : { parent: Ue._currentValue, pool: c }),
      (n.memoizedState = { baseLanes: l, cachePool: c }),
      e !== null && au(n, null),
      Jc(),
      yg(n),
      e !== null && ha(e, n, o, !0),
      null
    );
  }
  function Eu(e, n) {
    var l = n.ref;
    if (l === null) e !== null && e.ref !== null && (n.flags |= 4194816);
    else {
      if (typeof l != "function" && typeof l != "object") throw Error(a(284));
      (e === null || e.ref !== l) && (n.flags |= 4194816);
    }
  }
  function Sf(e, n, l, o, c) {
    return (
      yi(n),
      (l = nf(e, n, l, o, void 0, c)),
      (o = rf()),
      e !== null && !qe
        ? (lf(e, n, c), xr(e, n, c))
        : (It && o && Hc(n), (n.flags |= 1), Ve(e, n, l, c), n.child)
    );
  }
  function zg(e, n, l, o, c, p) {
    return (
      yi(n),
      (n.updateQueue = null),
      (l = Mm(n, o, l, c)),
      Rm(e),
      (o = rf()),
      e !== null && !qe
        ? (lf(e, n, p), xr(e, n, p))
        : (It && o && Hc(n), (n.flags |= 1), Ve(e, n, l, p), n.child)
    );
  }
  function Dg(e, n, l, o, c) {
    if ((yi(n), n.stateNode === null)) {
      var p = Ji,
        S = l.contextType;
      typeof S == "object" && S !== null && (p = Fe(S)),
        (p = new l(o, p)),
        (n.memoizedState =
          p.state !== null && p.state !== void 0 ? p.state : null),
        (p.updater = bf),
        (n.stateNode = p),
        (p._reactInternals = n),
        (p = n.stateNode),
        (p.props = o),
        (p.state = n.memoizedState),
        (p.refs = {}),
        Zc(n),
        (S = l.contextType),
        (p.context = typeof S == "object" && S !== null ? Fe(S) : Ji),
        (p.state = n.memoizedState),
        (S = l.getDerivedStateFromProps),
        typeof S == "function" && (vf(n, l, S, o), (p.state = n.memoizedState)),
        typeof l.getDerivedStateFromProps == "function" ||
          typeof p.getSnapshotBeforeUpdate == "function" ||
          (typeof p.UNSAFE_componentWillMount != "function" &&
            typeof p.componentWillMount != "function") ||
          ((S = p.state),
          typeof p.componentWillMount == "function" && p.componentWillMount(),
          typeof p.UNSAFE_componentWillMount == "function" &&
            p.UNSAFE_componentWillMount(),
          S !== p.state && bf.enqueueReplaceState(p, p.state, null),
          Sa(n, o, p, c),
          xa(),
          (p.state = n.memoizedState)),
        typeof p.componentDidMount == "function" && (n.flags |= 4194308),
        (o = !0);
    } else if (e === null) {
      p = n.stateNode;
      var E = n.memoizedProps,
        M = xi(l, E);
      p.props = M;
      var I = p.context,
        rt = l.contextType;
      (S = Ji), typeof rt == "object" && rt !== null && (S = Fe(rt));
      var at = l.getDerivedStateFromProps;
      (rt =
        typeof at == "function" ||
        typeof p.getSnapshotBeforeUpdate == "function"),
        (E = n.pendingProps !== E),
        rt ||
          (typeof p.UNSAFE_componentWillReceiveProps != "function" &&
            typeof p.componentWillReceiveProps != "function") ||
          ((E || I !== S) && bg(n, p, o, S)),
        (Nr = !1);
      var K = n.memoizedState;
      (p.state = K),
        Sa(n, o, p, c),
        xa(),
        (I = n.memoizedState),
        E || K !== I || Nr
          ? (typeof at == "function" &&
              (vf(n, l, at, o), (I = n.memoizedState)),
            (M = Nr || vg(n, l, M, o, K, I, S))
              ? (rt ||
                  (typeof p.UNSAFE_componentWillMount != "function" &&
                    typeof p.componentWillMount != "function") ||
                  (typeof p.componentWillMount == "function" &&
                    p.componentWillMount(),
                  typeof p.UNSAFE_componentWillMount == "function" &&
                    p.UNSAFE_componentWillMount()),
                typeof p.componentDidMount == "function" &&
                  (n.flags |= 4194308))
              : (typeof p.componentDidMount == "function" &&
                  (n.flags |= 4194308),
                (n.memoizedProps = o),
                (n.memoizedState = I)),
            (p.props = o),
            (p.state = I),
            (p.context = S),
            (o = M))
          : (typeof p.componentDidMount == "function" && (n.flags |= 4194308),
            (o = !1));
    } else {
      (p = n.stateNode),
        Kc(e, n),
        (S = n.memoizedProps),
        (rt = xi(l, S)),
        (p.props = rt),
        (at = n.pendingProps),
        (K = p.context),
        (I = l.contextType),
        (M = Ji),
        typeof I == "object" && I !== null && (M = Fe(I)),
        (E = l.getDerivedStateFromProps),
        (I =
          typeof E == "function" ||
          typeof p.getSnapshotBeforeUpdate == "function") ||
          (typeof p.UNSAFE_componentWillReceiveProps != "function" &&
            typeof p.componentWillReceiveProps != "function") ||
          ((S !== at || K !== M) && bg(n, p, o, M)),
        (Nr = !1),
        (K = n.memoizedState),
        (p.state = K),
        Sa(n, o, p, c),
        xa();
      var W = n.memoizedState;
      S !== at ||
      K !== W ||
      Nr ||
      (e !== null && e.dependencies !== null && iu(e.dependencies))
        ? (typeof E == "function" && (vf(n, l, E, o), (W = n.memoizedState)),
          (rt =
            Nr ||
            vg(n, l, rt, o, K, W, M) ||
            (e !== null && e.dependencies !== null && iu(e.dependencies)))
            ? (I ||
                (typeof p.UNSAFE_componentWillUpdate != "function" &&
                  typeof p.componentWillUpdate != "function") ||
                (typeof p.componentWillUpdate == "function" &&
                  p.componentWillUpdate(o, W, M),
                typeof p.UNSAFE_componentWillUpdate == "function" &&
                  p.UNSAFE_componentWillUpdate(o, W, M)),
              typeof p.componentDidUpdate == "function" && (n.flags |= 4),
              typeof p.getSnapshotBeforeUpdate == "function" &&
                (n.flags |= 1024))
            : (typeof p.componentDidUpdate != "function" ||
                (S === e.memoizedProps && K === e.memoizedState) ||
                (n.flags |= 4),
              typeof p.getSnapshotBeforeUpdate != "function" ||
                (S === e.memoizedProps && K === e.memoizedState) ||
                (n.flags |= 1024),
              (n.memoizedProps = o),
              (n.memoizedState = W)),
          (p.props = o),
          (p.state = W),
          (p.context = M),
          (o = rt))
        : (typeof p.componentDidUpdate != "function" ||
            (S === e.memoizedProps && K === e.memoizedState) ||
            (n.flags |= 4),
          typeof p.getSnapshotBeforeUpdate != "function" ||
            (S === e.memoizedProps && K === e.memoizedState) ||
            (n.flags |= 1024),
          (o = !1));
    }
    return (
      (p = o),
      Eu(e, n),
      (o = (n.flags & 128) !== 0),
      p || o
        ? ((p = n.stateNode),
          (l =
            o && typeof l.getDerivedStateFromError != "function"
              ? null
              : p.render()),
          (n.flags |= 1),
          e !== null && o
            ? ((n.child = sl(n, e.child, null, c)),
              (n.child = sl(n, null, l, c)))
            : Ve(e, n, l, c),
          (n.memoizedState = p.state),
          (e = n.child))
        : (e = xr(e, n, c)),
      e
    );
  }
  function Ng(e, n, l, o) {
    return da(), (n.flags |= 256), Ve(e, n, l, o), n.child;
  }
  var wf = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null,
  };
  function Ef(e) {
    return { baseLanes: e, cachePool: Sm() };
  }
  function Tf(e, n, l) {
    return (e = e !== null ? e.childLanes & ~l : 0), n && (e |= Un), e;
  }
  function Bg(e, n, l) {
    var o = n.pendingProps,
      c = !1,
      p = (n.flags & 128) !== 0,
      S;
    if (
      ((S = p) ||
        (S =
          e !== null && e.memoizedState === null ? !1 : (je.current & 2) !== 0),
      S && ((c = !0), (n.flags &= -129)),
      (S = (n.flags & 32) !== 0),
      (n.flags &= -33),
      e === null)
    ) {
      if (It) {
        if ((c ? jr(n) : Hr(), It)) {
          var E = Ee,
            M;
          if ((M = E)) {
            t: {
              for (M = E, E = Kn; M.nodeType !== 8; ) {
                if (!E) {
                  E = null;
                  break t;
                }
                if (((M = In(M.nextSibling)), M === null)) {
                  E = null;
                  break t;
                }
              }
              E = M;
            }
            E !== null
              ? ((n.memoizedState = {
                  dehydrated: E,
                  treeContext: di !== null ? { id: hr, overflow: mr } : null,
                  retryLane: 536870912,
                  hydrationErrors: null,
                }),
                (M = gn(18, null, null, 0)),
                (M.stateNode = E),
                (M.return = n),
                (n.child = M),
                (en = n),
                (Ee = null),
                (M = !0))
              : (M = !1);
          }
          M || mi(n);
        }
        if (
          ((E = n.memoizedState),
          E !== null && ((E = E.dehydrated), E !== null))
        )
          return od(E) ? (n.lanes = 32) : (n.lanes = 536870912), null;
        br(n);
      }
      return (
        (E = o.children),
        (o = o.fallback),
        c
          ? (Hr(),
            (c = n.mode),
            (E = Tu({ mode: "hidden", children: E }, c)),
            (o = fi(o, c, l, null)),
            (E.return = n),
            (o.return = n),
            (E.sibling = o),
            (n.child = E),
            (c = n.child),
            (c.memoizedState = Ef(l)),
            (c.childLanes = Tf(e, S, l)),
            (n.memoizedState = wf),
            o)
          : (jr(n), Af(n, E))
      );
    }
    if (
      ((M = e.memoizedState), M !== null && ((E = M.dehydrated), E !== null))
    ) {
      if (p)
        n.flags & 256
          ? (jr(n), (n.flags &= -257), (n = Of(e, n, l)))
          : n.memoizedState !== null
          ? (Hr(), (n.child = e.child), (n.flags |= 128), (n = null))
          : (Hr(),
            (c = o.fallback),
            (E = n.mode),
            (o = Tu({ mode: "visible", children: o.children }, E)),
            (c = fi(c, E, l, null)),
            (c.flags |= 2),
            (o.return = n),
            (c.return = n),
            (o.sibling = c),
            (n.child = o),
            sl(n, e.child, null, l),
            (o = n.child),
            (o.memoizedState = Ef(l)),
            (o.childLanes = Tf(e, S, l)),
            (n.memoizedState = wf),
            (n = c));
      else if ((jr(n), od(E))) {
        if (((S = E.nextSibling && E.nextSibling.dataset), S)) var I = S.dgst;
        (S = I),
          (o = Error(a(419))),
          (o.stack = ""),
          (o.digest = S),
          pa({ value: o, source: null, stack: null }),
          (n = Of(e, n, l));
      } else if (
        (qe || ha(e, n, l, !1), (S = (l & e.childLanes) !== 0), qe || S)
      ) {
        if (
          ((S = de),
          S !== null &&
            ((o = l & -l),
            (o = (o & 42) !== 0 ? 1 : Jl(o)),
            (o = (o & (S.suspendedLanes | l)) !== 0 ? 0 : o),
            o !== 0 && o !== M.retryLane))
        )
          throw ((M.retryLane = o), Wi(e, o), Sn(S, e, o), Og);
        E.data === "$?" || Yf(), (n = Of(e, n, l));
      } else
        E.data === "$?"
          ? ((n.flags |= 192), (n.child = e.child), (n = null))
          : ((e = M.treeContext),
            (Ee = In(E.nextSibling)),
            (en = n),
            (It = !0),
            (hi = null),
            (Kn = !1),
            e !== null &&
              ((Nn[Bn++] = hr),
              (Nn[Bn++] = mr),
              (Nn[Bn++] = di),
              (hr = e.id),
              (mr = e.overflow),
              (di = n)),
            (n = Af(n, o.children)),
            (n.flags |= 4096));
      return n;
    }
    return c
      ? (Hr(),
        (c = o.fallback),
        (E = n.mode),
        (M = e.child),
        (I = M.sibling),
        (o = pr(M, { mode: "hidden", children: o.children })),
        (o.subtreeFlags = M.subtreeFlags & 65011712),
        I !== null ? (c = pr(I, c)) : ((c = fi(c, E, l, null)), (c.flags |= 2)),
        (c.return = n),
        (o.return = n),
        (o.sibling = c),
        (n.child = o),
        (o = c),
        (c = n.child),
        (E = e.child.memoizedState),
        E === null
          ? (E = Ef(l))
          : ((M = E.cachePool),
            M !== null
              ? ((I = Ue._currentValue),
                (M = M.parent !== I ? { parent: I, pool: I } : M))
              : (M = Sm()),
            (E = { baseLanes: E.baseLanes | l, cachePool: M })),
        (c.memoizedState = E),
        (c.childLanes = Tf(e, S, l)),
        (n.memoizedState = wf),
        o)
      : (jr(n),
        (l = e.child),
        (e = l.sibling),
        (l = pr(l, { mode: "visible", children: o.children })),
        (l.return = n),
        (l.sibling = null),
        e !== null &&
          ((S = n.deletions),
          S === null ? ((n.deletions = [e]), (n.flags |= 16)) : S.push(e)),
        (n.child = l),
        (n.memoizedState = null),
        l);
  }
  function Af(e, n) {
    return (
      (n = Tu({ mode: "visible", children: n }, e.mode)),
      (n.return = e),
      (e.child = n)
    );
  }
  function Tu(e, n) {
    return (
      (e = gn(22, e, null, n)),
      (e.lanes = 0),
      (e.stateNode = {
        _visibility: 1,
        _pendingMarkers: null,
        _retryCache: null,
        _transitions: null,
      }),
      e
    );
  }
  function Of(e, n, l) {
    return (
      sl(n, e.child, null, l),
      (e = Af(n, n.pendingProps.children)),
      (e.flags |= 2),
      (n.memoizedState = null),
      e
    );
  }
  function Lg(e, n, l) {
    e.lanes |= n;
    var o = e.alternate;
    o !== null && (o.lanes |= n), Vc(e.return, n, l);
  }
  function Cf(e, n, l, o, c) {
    var p = e.memoizedState;
    p === null
      ? (e.memoizedState = {
          isBackwards: n,
          rendering: null,
          renderingStartTime: 0,
          last: o,
          tail: l,
          tailMode: c,
        })
      : ((p.isBackwards = n),
        (p.rendering = null),
        (p.renderingStartTime = 0),
        (p.last = o),
        (p.tail = l),
        (p.tailMode = c));
  }
  function Ug(e, n, l) {
    var o = n.pendingProps,
      c = o.revealOrder,
      p = o.tail;
    if ((Ve(e, n, o.children, l), (o = je.current), (o & 2) !== 0))
      (o = (o & 1) | 2), (n.flags |= 128);
    else {
      if (e !== null && (e.flags & 128) !== 0)
        t: for (e = n.child; e !== null; ) {
          if (e.tag === 13) e.memoizedState !== null && Lg(e, l, n);
          else if (e.tag === 19) Lg(e, l, n);
          else if (e.child !== null) {
            (e.child.return = e), (e = e.child);
            continue;
          }
          if (e === n) break t;
          for (; e.sibling === null; ) {
            if (e.return === null || e.return === n) break t;
            e = e.return;
          }
          (e.sibling.return = e.return), (e = e.sibling);
        }
      o &= 1;
    }
    switch ((A(je, o), c)) {
      case "forwards":
        for (l = n.child, c = null; l !== null; )
          (e = l.alternate),
            e !== null && xu(e) === null && (c = l),
            (l = l.sibling);
        (l = c),
          l === null
            ? ((c = n.child), (n.child = null))
            : ((c = l.sibling), (l.sibling = null)),
          Cf(n, !1, c, l, p);
        break;
      case "backwards":
        for (l = null, c = n.child, n.child = null; c !== null; ) {
          if (((e = c.alternate), e !== null && xu(e) === null)) {
            n.child = c;
            break;
          }
          (e = c.sibling), (c.sibling = l), (l = c), (c = e);
        }
        Cf(n, !0, l, null, p);
        break;
      case "together":
        Cf(n, !1, null, null, void 0);
        break;
      default:
        n.memoizedState = null;
    }
    return n.child;
  }
  function xr(e, n, l) {
    if (
      (e !== null && (n.dependencies = e.dependencies),
      (Yr |= n.lanes),
      (l & n.childLanes) === 0)
    )
      if (e !== null) {
        if ((ha(e, n, l, !1), (l & n.childLanes) === 0)) return null;
      } else return null;
    if (e !== null && n.child !== e.child) throw Error(a(153));
    if (n.child !== null) {
      for (
        e = n.child, l = pr(e, e.pendingProps), n.child = l, l.return = n;
        e.sibling !== null;

      )
        (e = e.sibling),
          (l = l.sibling = pr(e, e.pendingProps)),
          (l.return = n);
      l.sibling = null;
    }
    return n.child;
  }
  function kf(e, n) {
    return (e.lanes & n) !== 0
      ? !0
      : ((e = e.dependencies), !!(e !== null && iu(e)));
  }
  function MS(e, n, l) {
    switch (n.tag) {
      case 3:
        gt(n, n.stateNode.containerInfo),
          Dr(n, Ue, e.memoizedState.cache),
          da();
        break;
      case 27:
      case 5:
        Bt(n);
        break;
      case 4:
        gt(n, n.stateNode.containerInfo);
        break;
      case 10:
        Dr(n, n.type, n.memoizedProps.value);
        break;
      case 13:
        var o = n.memoizedState;
        if (o !== null)
          return o.dehydrated !== null
            ? (jr(n), (n.flags |= 128), null)
            : (l & n.child.childLanes) !== 0
            ? Bg(e, n, l)
            : (jr(n), (e = xr(e, n, l)), e !== null ? e.sibling : null);
        jr(n);
        break;
      case 19:
        var c = (e.flags & 128) !== 0;
        if (
          ((o = (l & n.childLanes) !== 0),
          o || (ha(e, n, l, !1), (o = (l & n.childLanes) !== 0)),
          c)
        ) {
          if (o) return Ug(e, n, l);
          n.flags |= 128;
        }
        if (
          ((c = n.memoizedState),
          c !== null &&
            ((c.rendering = null), (c.tail = null), (c.lastEffect = null)),
          A(je, je.current),
          o)
        )
          break;
        return null;
      case 22:
      case 23:
        return (n.lanes = 0), Rg(e, n, l);
      case 24:
        Dr(n, Ue, e.memoizedState.cache);
    }
    return xr(e, n, l);
  }
  function jg(e, n, l) {
    if (e !== null)
      if (e.memoizedProps !== n.pendingProps) qe = !0;
      else {
        if (!kf(e, l) && (n.flags & 128) === 0) return (qe = !1), MS(e, n, l);
        qe = (e.flags & 131072) !== 0;
      }
    else (qe = !1), It && (n.flags & 1048576) !== 0 && hm(n, ru, n.index);
    switch (((n.lanes = 0), n.tag)) {
      case 16:
        t: {
          e = n.pendingProps;
          var o = n.elementType,
            c = o._init;
          if (((o = c(o._payload)), (n.type = o), typeof o == "function"))
            Lc(o)
              ? ((e = xi(o, e)), (n.tag = 1), (n = Dg(null, n, o, e, l)))
              : ((n.tag = 0), (n = Sf(null, n, o, e, l)));
          else {
            if (o != null) {
              if (((c = o.$$typeof), c === H)) {
                (n.tag = 11), (n = Cg(null, n, o, e, l));
                break t;
              } else if (c === Q) {
                (n.tag = 14), (n = kg(null, n, o, e, l));
                break t;
              }
            }
            throw ((n = N(o) || o), Error(a(306, n, "")));
          }
        }
        return n;
      case 0:
        return Sf(e, n, n.type, n.pendingProps, l);
      case 1:
        return (o = n.type), (c = xi(o, n.pendingProps)), Dg(e, n, o, c, l);
      case 3:
        t: {
          if ((gt(n, n.stateNode.containerInfo), e === null))
            throw Error(a(387));
          o = n.pendingProps;
          var p = n.memoizedState;
          (c = p.element), Kc(e, n), Sa(n, o, null, l);
          var S = n.memoizedState;
          if (
            ((o = S.cache),
            Dr(n, Ue, o),
            o !== p.cache && Yc(n, [Ue], l, !0),
            xa(),
            (o = S.element),
            p.isDehydrated)
          )
            if (
              ((p = { element: o, isDehydrated: !1, cache: S.cache }),
              (n.updateQueue.baseState = p),
              (n.memoizedState = p),
              n.flags & 256)
            ) {
              n = Ng(e, n, o, l);
              break t;
            } else if (o !== c) {
              (c = zn(Error(a(424)), n)), pa(c), (n = Ng(e, n, o, l));
              break t;
            } else {
              switch (((e = n.stateNode.containerInfo), e.nodeType)) {
                case 9:
                  e = e.body;
                  break;
                default:
                  e = e.nodeName === "HTML" ? e.ownerDocument.body : e;
              }
              for (
                Ee = In(e.firstChild),
                  en = n,
                  It = !0,
                  hi = null,
                  Kn = !0,
                  l = gg(n, null, o, l),
                  n.child = l;
                l;

              )
                (l.flags = (l.flags & -3) | 4096), (l = l.sibling);
            }
          else {
            if ((da(), o === c)) {
              n = xr(e, n, l);
              break t;
            }
            Ve(e, n, o, l);
          }
          n = n.child;
        }
        return n;
      case 26:
        return (
          Eu(e, n),
          e === null
            ? (l = $0(n.type, null, n.pendingProps, null))
              ? (n.memoizedState = l)
              : It ||
                ((l = n.type),
                (e = n.pendingProps),
                (o = ju(it.current).createElement(l)),
                (o[Ke] = n),
                (o[rn] = e),
                Ge(o, l, e),
                He(o),
                (n.stateNode = o))
            : (n.memoizedState = $0(
                n.type,
                e.memoizedProps,
                n.pendingProps,
                e.memoizedState
              )),
          null
        );
      case 27:
        return (
          Bt(n),
          e === null &&
            It &&
            ((o = n.stateNode = H0(n.type, n.pendingProps, it.current)),
            (en = n),
            (Kn = !0),
            (c = Ee),
            Ir(n.type) ? ((ud = c), (Ee = In(o.firstChild))) : (Ee = c)),
          Ve(e, n, n.pendingProps.children, l),
          Eu(e, n),
          e === null && (n.flags |= 4194304),
          n.child
        );
      case 5:
        return (
          e === null &&
            It &&
            ((c = o = Ee) &&
              ((o = lw(o, n.type, n.pendingProps, Kn)),
              o !== null
                ? ((n.stateNode = o),
                  (en = n),
                  (Ee = In(o.firstChild)),
                  (Kn = !1),
                  (c = !0))
                : (c = !1)),
            c || mi(n)),
          Bt(n),
          (c = n.type),
          (p = n.pendingProps),
          (S = e !== null ? e.memoizedProps : null),
          (o = p.children),
          id(c, p) ? (o = null) : S !== null && id(c, S) && (n.flags |= 32),
          n.memoizedState !== null &&
            ((c = nf(e, n, ES, null, null, l)), (Va._currentValue = c)),
          Eu(e, n),
          Ve(e, n, o, l),
          n.child
        );
      case 6:
        return (
          e === null &&
            It &&
            ((e = l = Ee) &&
              ((l = aw(l, n.pendingProps, Kn)),
              l !== null
                ? ((n.stateNode = l), (en = n), (Ee = null), (e = !0))
                : (e = !1)),
            e || mi(n)),
          null
        );
      case 13:
        return Bg(e, n, l);
      case 4:
        return (
          gt(n, n.stateNode.containerInfo),
          (o = n.pendingProps),
          e === null ? (n.child = sl(n, null, o, l)) : Ve(e, n, o, l),
          n.child
        );
      case 11:
        return Cg(e, n, n.type, n.pendingProps, l);
      case 7:
        return Ve(e, n, n.pendingProps, l), n.child;
      case 8:
        return Ve(e, n, n.pendingProps.children, l), n.child;
      case 12:
        return Ve(e, n, n.pendingProps.children, l), n.child;
      case 10:
        return (
          (o = n.pendingProps),
          Dr(n, n.type, o.value),
          Ve(e, n, o.children, l),
          n.child
        );
      case 9:
        return (
          (c = n.type._context),
          (o = n.pendingProps.children),
          yi(n),
          (c = Fe(c)),
          (o = o(c)),
          (n.flags |= 1),
          Ve(e, n, o, l),
          n.child
        );
      case 14:
        return kg(e, n, n.type, n.pendingProps, l);
      case 15:
        return _g(e, n, n.type, n.pendingProps, l);
      case 19:
        return Ug(e, n, l);
      case 31:
        return (
          (o = n.pendingProps),
          (l = n.mode),
          (o = { mode: o.mode, children: o.children }),
          e === null
            ? ((l = Tu(o, l)),
              (l.ref = n.ref),
              (n.child = l),
              (l.return = n),
              (n = l))
            : ((l = pr(e.child, o)),
              (l.ref = n.ref),
              (n.child = l),
              (l.return = n),
              (n = l)),
          n
        );
      case 22:
        return Rg(e, n, l);
      case 24:
        return (
          yi(n),
          (o = Fe(Ue)),
          e === null
            ? ((c = Qc()),
              c === null &&
                ((c = de),
                (p = Gc()),
                (c.pooledCache = p),
                p.refCount++,
                p !== null && (c.pooledCacheLanes |= l),
                (c = p)),
              (n.memoizedState = { parent: o, cache: c }),
              Zc(n),
              Dr(n, Ue, c))
            : ((e.lanes & l) !== 0 && (Kc(e, n), Sa(n, null, null, l), xa()),
              (c = e.memoizedState),
              (p = n.memoizedState),
              c.parent !== o
                ? ((c = { parent: o, cache: o }),
                  (n.memoizedState = c),
                  n.lanes === 0 &&
                    (n.memoizedState = n.updateQueue.baseState = c),
                  Dr(n, Ue, o))
                : ((o = p.cache),
                  Dr(n, Ue, o),
                  o !== c.cache && Yc(n, [Ue], l, !0))),
          Ve(e, n, n.pendingProps.children, l),
          n.child
        );
      case 29:
        throw n.pendingProps;
    }
    throw Error(a(156, n.tag));
  }
  function Sr(e) {
    e.flags |= 4;
  }
  function Hg(e, n) {
    if (n.type !== "stylesheet" || (n.state.loading & 4) !== 0)
      e.flags &= -16777217;
    else if (((e.flags |= 16777216), !Q0(n))) {
      if (
        ((n = Ln.current),
        n !== null &&
          ((Gt & 4194048) === Gt
            ? Fn !== null
            : ((Gt & 62914560) !== Gt && (Gt & 536870912) === 0) || n !== Fn))
      )
        throw ((va = Ic), wm);
      e.flags |= 8192;
    }
  }
  function Au(e, n) {
    n !== null && (e.flags |= 4),
      e.flags & 16384 &&
        ((n = e.tag !== 22 ? jo() : 536870912), (e.lanes |= n), (pl |= n));
  }
  function ka(e, n) {
    if (!It)
      switch (e.tailMode) {
        case "hidden":
          n = e.tail;
          for (var l = null; n !== null; )
            n.alternate !== null && (l = n), (n = n.sibling);
          l === null ? (e.tail = null) : (l.sibling = null);
          break;
        case "collapsed":
          l = e.tail;
          for (var o = null; l !== null; )
            l.alternate !== null && (o = l), (l = l.sibling);
          o === null
            ? n || e.tail === null
              ? (e.tail = null)
              : (e.tail.sibling = null)
            : (o.sibling = null);
      }
  }
  function Se(e) {
    var n = e.alternate !== null && e.alternate.child === e.child,
      l = 0,
      o = 0;
    if (n)
      for (var c = e.child; c !== null; )
        (l |= c.lanes | c.childLanes),
          (o |= c.subtreeFlags & 65011712),
          (o |= c.flags & 65011712),
          (c.return = e),
          (c = c.sibling);
    else
      for (c = e.child; c !== null; )
        (l |= c.lanes | c.childLanes),
          (o |= c.subtreeFlags),
          (o |= c.flags),
          (c.return = e),
          (c = c.sibling);
    return (e.subtreeFlags |= o), (e.childLanes = l), n;
  }
  function zS(e, n, l) {
    var o = n.pendingProps;
    switch ((qc(n), n.tag)) {
      case 31:
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return Se(n), null;
      case 1:
        return Se(n), null;
      case 3:
        return (
          (l = n.stateNode),
          (o = null),
          e !== null && (o = e.memoizedState.cache),
          n.memoizedState.cache !== o && (n.flags |= 2048),
          yr(Ue),
          Ct(),
          l.pendingContext &&
            ((l.context = l.pendingContext), (l.pendingContext = null)),
          (e === null || e.child === null) &&
            (fa(n)
              ? Sr(n)
              : e === null ||
                (e.memoizedState.isDehydrated && (n.flags & 256) === 0) ||
                ((n.flags |= 1024), ym())),
          Se(n),
          null
        );
      case 26:
        return (
          (l = n.memoizedState),
          e === null
            ? (Sr(n),
              l !== null ? (Se(n), Hg(n, l)) : (Se(n), (n.flags &= -16777217)))
            : l
            ? l !== e.memoizedState
              ? (Sr(n), Se(n), Hg(n, l))
              : (Se(n), (n.flags &= -16777217))
            : (e.memoizedProps !== o && Sr(n), Se(n), (n.flags &= -16777217)),
          null
        );
      case 27:
        mt(n), (l = it.current);
        var c = n.type;
        if (e !== null && n.stateNode != null) e.memoizedProps !== o && Sr(n);
        else {
          if (!o) {
            if (n.stateNode === null) throw Error(a(166));
            return Se(n), null;
          }
          (e = ut.current),
            fa(n) ? mm(n) : ((e = H0(c, o, l)), (n.stateNode = e), Sr(n));
        }
        return Se(n), null;
      case 5:
        if ((mt(n), (l = n.type), e !== null && n.stateNode != null))
          e.memoizedProps !== o && Sr(n);
        else {
          if (!o) {
            if (n.stateNode === null) throw Error(a(166));
            return Se(n), null;
          }
          if (((e = ut.current), fa(n))) mm(n);
          else {
            switch (((c = ju(it.current)), e)) {
              case 1:
                e = c.createElementNS("http://www.w3.org/2000/svg", l);
                break;
              case 2:
                e = c.createElementNS("http://www.w3.org/1998/Math/MathML", l);
                break;
              default:
                switch (l) {
                  case "svg":
                    e = c.createElementNS("http://www.w3.org/2000/svg", l);
                    break;
                  case "math":
                    e = c.createElementNS(
                      "http://www.w3.org/1998/Math/MathML",
                      l
                    );
                    break;
                  case "script":
                    (e = c.createElement("div")),
                      (e.innerHTML = "<script></script>"),
                      (e = e.removeChild(e.firstChild));
                    break;
                  case "select":
                    (e =
                      typeof o.is == "string"
                        ? c.createElement("select", { is: o.is })
                        : c.createElement("select")),
                      o.multiple
                        ? (e.multiple = !0)
                        : o.size && (e.size = o.size);
                    break;
                  default:
                    e =
                      typeof o.is == "string"
                        ? c.createElement(l, { is: o.is })
                        : c.createElement(l);
                }
            }
            (e[Ke] = n), (e[rn] = o);
            t: for (c = n.child; c !== null; ) {
              if (c.tag === 5 || c.tag === 6) e.appendChild(c.stateNode);
              else if (c.tag !== 4 && c.tag !== 27 && c.child !== null) {
                (c.child.return = c), (c = c.child);
                continue;
              }
              if (c === n) break t;
              for (; c.sibling === null; ) {
                if (c.return === null || c.return === n) break t;
                c = c.return;
              }
              (c.sibling.return = c.return), (c = c.sibling);
            }
            n.stateNode = e;
            t: switch ((Ge(e, l, o), l)) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                e = !!o.autoFocus;
                break t;
              case "img":
                e = !0;
                break t;
              default:
                e = !1;
            }
            e && Sr(n);
          }
        }
        return Se(n), (n.flags &= -16777217), null;
      case 6:
        if (e && n.stateNode != null) e.memoizedProps !== o && Sr(n);
        else {
          if (typeof o != "string" && n.stateNode === null) throw Error(a(166));
          if (((e = it.current), fa(n))) {
            if (
              ((e = n.stateNode),
              (l = n.memoizedProps),
              (o = null),
              (c = en),
              c !== null)
            )
              switch (c.tag) {
                case 27:
                case 5:
                  o = c.memoizedProps;
              }
            (e[Ke] = n),
              (e = !!(
                e.nodeValue === l ||
                (o !== null && o.suppressHydrationWarning === !0) ||
                z0(e.nodeValue, l)
              )),
              e || mi(n);
          } else (e = ju(e).createTextNode(o)), (e[Ke] = n), (n.stateNode = e);
        }
        return Se(n), null;
      case 13:
        if (
          ((o = n.memoizedState),
          e === null ||
            (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
        ) {
          if (((c = fa(n)), o !== null && o.dehydrated !== null)) {
            if (e === null) {
              if (!c) throw Error(a(318));
              if (
                ((c = n.memoizedState),
                (c = c !== null ? c.dehydrated : null),
                !c)
              )
                throw Error(a(317));
              c[Ke] = n;
            } else
              da(),
                (n.flags & 128) === 0 && (n.memoizedState = null),
                (n.flags |= 4);
            Se(n), (c = !1);
          } else
            (c = ym()),
              e !== null &&
                e.memoizedState !== null &&
                (e.memoizedState.hydrationErrors = c),
              (c = !0);
          if (!c) return n.flags & 256 ? (br(n), n) : (br(n), null);
        }
        if ((br(n), (n.flags & 128) !== 0)) return (n.lanes = l), n;
        if (
          ((l = o !== null), (e = e !== null && e.memoizedState !== null), l)
        ) {
          (o = n.child),
            (c = null),
            o.alternate !== null &&
              o.alternate.memoizedState !== null &&
              o.alternate.memoizedState.cachePool !== null &&
              (c = o.alternate.memoizedState.cachePool.pool);
          var p = null;
          o.memoizedState !== null &&
            o.memoizedState.cachePool !== null &&
            (p = o.memoizedState.cachePool.pool),
            p !== c && (o.flags |= 2048);
        }
        return (
          l !== e && l && (n.child.flags |= 8192),
          Au(n, n.updateQueue),
          Se(n),
          null
        );
      case 4:
        return Ct(), e === null && Jf(n.stateNode.containerInfo), Se(n), null;
      case 10:
        return yr(n.type), Se(n), null;
      case 19:
        if ((J(je), (c = n.memoizedState), c === null)) return Se(n), null;
        if (((o = (n.flags & 128) !== 0), (p = c.rendering), p === null))
          if (o) ka(c, !1);
          else {
            if (Te !== 0 || (e !== null && (e.flags & 128) !== 0))
              for (e = n.child; e !== null; ) {
                if (((p = xu(e)), p !== null)) {
                  for (
                    n.flags |= 128,
                      ka(c, !1),
                      e = p.updateQueue,
                      n.updateQueue = e,
                      Au(n, e),
                      n.subtreeFlags = 0,
                      e = l,
                      l = n.child;
                    l !== null;

                  )
                    pm(l, e), (l = l.sibling);
                  return A(je, (je.current & 1) | 2), n.child;
                }
                e = e.sibling;
              }
            c.tail !== null &&
              yt() > ku &&
              ((n.flags |= 128), (o = !0), ka(c, !1), (n.lanes = 4194304));
          }
        else {
          if (!o)
            if (((e = xu(p)), e !== null)) {
              if (
                ((n.flags |= 128),
                (o = !0),
                (e = e.updateQueue),
                (n.updateQueue = e),
                Au(n, e),
                ka(c, !0),
                c.tail === null &&
                  c.tailMode === "hidden" &&
                  !p.alternate &&
                  !It)
              )
                return Se(n), null;
            } else
              2 * yt() - c.renderingStartTime > ku &&
                l !== 536870912 &&
                ((n.flags |= 128), (o = !0), ka(c, !1), (n.lanes = 4194304));
          c.isBackwards
            ? ((p.sibling = n.child), (n.child = p))
            : ((e = c.last),
              e !== null ? (e.sibling = p) : (n.child = p),
              (c.last = p));
        }
        return c.tail !== null
          ? ((n = c.tail),
            (c.rendering = n),
            (c.tail = n.sibling),
            (c.renderingStartTime = yt()),
            (n.sibling = null),
            (e = je.current),
            A(je, o ? (e & 1) | 2 : e & 1),
            n)
          : (Se(n), null);
      case 22:
      case 23:
        return (
          br(n),
          tf(),
          (o = n.memoizedState !== null),
          e !== null
            ? (e.memoizedState !== null) !== o && (n.flags |= 8192)
            : o && (n.flags |= 8192),
          o
            ? (l & 536870912) !== 0 &&
              (n.flags & 128) === 0 &&
              (Se(n), n.subtreeFlags & 6 && (n.flags |= 8192))
            : Se(n),
          (l = n.updateQueue),
          l !== null && Au(n, l.retryQueue),
          (l = null),
          e !== null &&
            e.memoizedState !== null &&
            e.memoizedState.cachePool !== null &&
            (l = e.memoizedState.cachePool.pool),
          (o = null),
          n.memoizedState !== null &&
            n.memoizedState.cachePool !== null &&
            (o = n.memoizedState.cachePool.pool),
          o !== l && (n.flags |= 2048),
          e !== null && J(vi),
          null
        );
      case 24:
        return (
          (l = null),
          e !== null && (l = e.memoizedState.cache),
          n.memoizedState.cache !== l && (n.flags |= 2048),
          yr(Ue),
          Se(n),
          null
        );
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(a(156, n.tag));
  }
  function DS(e, n) {
    switch ((qc(n), n.tag)) {
      case 1:
        return (
          (e = n.flags), e & 65536 ? ((n.flags = (e & -65537) | 128), n) : null
        );
      case 3:
        return (
          yr(Ue),
          Ct(),
          (e = n.flags),
          (e & 65536) !== 0 && (e & 128) === 0
            ? ((n.flags = (e & -65537) | 128), n)
            : null
        );
      case 26:
      case 27:
      case 5:
        return mt(n), null;
      case 13:
        if (
          (br(n), (e = n.memoizedState), e !== null && e.dehydrated !== null)
        ) {
          if (n.alternate === null) throw Error(a(340));
          da();
        }
        return (
          (e = n.flags), e & 65536 ? ((n.flags = (e & -65537) | 128), n) : null
        );
      case 19:
        return J(je), null;
      case 4:
        return Ct(), null;
      case 10:
        return yr(n.type), null;
      case 22:
      case 23:
        return (
          br(n),
          tf(),
          e !== null && J(vi),
          (e = n.flags),
          e & 65536 ? ((n.flags = (e & -65537) | 128), n) : null
        );
      case 24:
        return yr(Ue), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function qg(e, n) {
    switch ((qc(n), n.tag)) {
      case 3:
        yr(Ue), Ct();
        break;
      case 26:
      case 27:
      case 5:
        mt(n);
        break;
      case 4:
        Ct();
        break;
      case 13:
        br(n);
        break;
      case 19:
        J(je);
        break;
      case 10:
        yr(n.type);
        break;
      case 22:
      case 23:
        br(n), tf(), e !== null && J(vi);
        break;
      case 24:
        yr(Ue);
    }
  }
  function _a(e, n) {
    try {
      var l = n.updateQueue,
        o = l !== null ? l.lastEffect : null;
      if (o !== null) {
        var c = o.next;
        l = c;
        do {
          if ((l.tag & e) === e) {
            o = void 0;
            var p = l.create,
              S = l.inst;
            (o = p()), (S.destroy = o);
          }
          l = l.next;
        } while (l !== c);
      }
    } catch (E) {
      se(n, n.return, E);
    }
  }
  function qr(e, n, l) {
    try {
      var o = n.updateQueue,
        c = o !== null ? o.lastEffect : null;
      if (c !== null) {
        var p = c.next;
        o = p;
        do {
          if ((o.tag & e) === e) {
            var S = o.inst,
              E = S.destroy;
            if (E !== void 0) {
              (S.destroy = void 0), (c = n);
              var M = l,
                I = E;
              try {
                I();
              } catch (rt) {
                se(c, M, rt);
              }
            }
          }
          o = o.next;
        } while (o !== p);
      }
    } catch (rt) {
      se(n, n.return, rt);
    }
  }
  function Pg(e) {
    var n = e.updateQueue;
    if (n !== null) {
      var l = e.stateNode;
      try {
        km(n, l);
      } catch (o) {
        se(e, e.return, o);
      }
    }
  }
  function $g(e, n, l) {
    (l.props = xi(e.type, e.memoizedProps)), (l.state = e.memoizedState);
    try {
      l.componentWillUnmount();
    } catch (o) {
      se(e, n, o);
    }
  }
  function Ra(e, n) {
    try {
      var l = e.ref;
      if (l !== null) {
        switch (e.tag) {
          case 26:
          case 27:
          case 5:
            var o = e.stateNode;
            break;
          case 30:
            o = e.stateNode;
            break;
          default:
            o = e.stateNode;
        }
        typeof l == "function" ? (e.refCleanup = l(o)) : (l.current = o);
      }
    } catch (c) {
      se(e, n, c);
    }
  }
  function Wn(e, n) {
    var l = e.ref,
      o = e.refCleanup;
    if (l !== null)
      if (typeof o == "function")
        try {
          o();
        } catch (c) {
          se(e, n, c);
        } finally {
          (e.refCleanup = null),
            (e = e.alternate),
            e != null && (e.refCleanup = null);
        }
      else if (typeof l == "function")
        try {
          l(null);
        } catch (c) {
          se(e, n, c);
        }
      else l.current = null;
  }
  function Vg(e) {
    var n = e.type,
      l = e.memoizedProps,
      o = e.stateNode;
    try {
      t: switch (n) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          l.autoFocus && o.focus();
          break t;
        case "img":
          l.src ? (o.src = l.src) : l.srcSet && (o.srcset = l.srcSet);
      }
    } catch (c) {
      se(e, e.return, c);
    }
  }
  function _f(e, n, l) {
    try {
      var o = e.stateNode;
      tw(o, e.type, l, n), (o[rn] = n);
    } catch (c) {
      se(e, e.return, c);
    }
  }
  function Yg(e) {
    return (
      e.tag === 5 ||
      e.tag === 3 ||
      e.tag === 26 ||
      (e.tag === 27 && Ir(e.type)) ||
      e.tag === 4
    );
  }
  function Rf(e) {
    t: for (;;) {
      for (; e.sibling === null; ) {
        if (e.return === null || Yg(e.return)) return null;
        e = e.return;
      }
      for (
        e.sibling.return = e.return, e = e.sibling;
        e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

      ) {
        if (
          (e.tag === 27 && Ir(e.type)) ||
          e.flags & 2 ||
          e.child === null ||
          e.tag === 4
        )
          continue t;
        (e.child.return = e), (e = e.child);
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function Mf(e, n, l) {
    var o = e.tag;
    if (o === 5 || o === 6)
      (e = e.stateNode),
        n
          ? (l.nodeType === 9
              ? l.body
              : l.nodeName === "HTML"
              ? l.ownerDocument.body
              : l
            ).insertBefore(e, n)
          : ((n =
              l.nodeType === 9
                ? l.body
                : l.nodeName === "HTML"
                ? l.ownerDocument.body
                : l),
            n.appendChild(e),
            (l = l._reactRootContainer),
            l != null || n.onclick !== null || (n.onclick = Uu));
    else if (
      o !== 4 &&
      (o === 27 && Ir(e.type) && ((l = e.stateNode), (n = null)),
      (e = e.child),
      e !== null)
    )
      for (Mf(e, n, l), e = e.sibling; e !== null; )
        Mf(e, n, l), (e = e.sibling);
  }
  function Ou(e, n, l) {
    var o = e.tag;
    if (o === 5 || o === 6)
      (e = e.stateNode), n ? l.insertBefore(e, n) : l.appendChild(e);
    else if (
      o !== 4 &&
      (o === 27 && Ir(e.type) && (l = e.stateNode), (e = e.child), e !== null)
    )
      for (Ou(e, n, l), e = e.sibling; e !== null; )
        Ou(e, n, l), (e = e.sibling);
  }
  function Gg(e) {
    var n = e.stateNode,
      l = e.memoizedProps;
    try {
      for (var o = e.type, c = n.attributes; c.length; )
        n.removeAttributeNode(c[0]);
      Ge(n, o, l), (n[Ke] = e), (n[rn] = l);
    } catch (p) {
      se(e, e.return, p);
    }
  }
  var wr = !1,
    Re = !1,
    zf = !1,
    Xg = typeof WeakSet == "function" ? WeakSet : Set,
    Pe = null;
  function NS(e, n) {
    if (((e = e.containerInfo), (nd = Yu), (e = rm(e)), _c(e))) {
      if ("selectionStart" in e)
        var l = { start: e.selectionStart, end: e.selectionEnd };
      else
        t: {
          l = ((l = e.ownerDocument) && l.defaultView) || window;
          var o = l.getSelection && l.getSelection();
          if (o && o.rangeCount !== 0) {
            l = o.anchorNode;
            var c = o.anchorOffset,
              p = o.focusNode;
            o = o.focusOffset;
            try {
              l.nodeType, p.nodeType;
            } catch {
              l = null;
              break t;
            }
            var S = 0,
              E = -1,
              M = -1,
              I = 0,
              rt = 0,
              at = e,
              K = null;
            e: for (;;) {
              for (
                var W;
                at !== l || (c !== 0 && at.nodeType !== 3) || (E = S + c),
                  at !== p || (o !== 0 && at.nodeType !== 3) || (M = S + o),
                  at.nodeType === 3 && (S += at.nodeValue.length),
                  (W = at.firstChild) !== null;

              )
                (K = at), (at = W);
              for (;;) {
                if (at === e) break e;
                if (
                  (K === l && ++I === c && (E = S),
                  K === p && ++rt === o && (M = S),
                  (W = at.nextSibling) !== null)
                )
                  break;
                (at = K), (K = at.parentNode);
              }
              at = W;
            }
            l = E === -1 || M === -1 ? null : { start: E, end: M };
          } else l = null;
        }
      l = l || { start: 0, end: 0 };
    } else l = null;
    for (
      rd = { focusedElem: e, selectionRange: l }, Yu = !1, Pe = n;
      Pe !== null;

    )
      if (
        ((n = Pe), (e = n.child), (n.subtreeFlags & 1024) !== 0 && e !== null)
      )
        (e.return = n), (Pe = e);
      else
        for (; Pe !== null; ) {
          switch (((n = Pe), (p = n.alternate), (e = n.flags), n.tag)) {
            case 0:
              break;
            case 11:
            case 15:
              break;
            case 1:
              if ((e & 1024) !== 0 && p !== null) {
                (e = void 0),
                  (l = n),
                  (c = p.memoizedProps),
                  (p = p.memoizedState),
                  (o = l.stateNode);
                try {
                  var Mt = xi(l.type, c, l.elementType === l.type);
                  (e = o.getSnapshotBeforeUpdate(Mt, p)),
                    (o.__reactInternalSnapshotBeforeUpdate = e);
                } catch (_t) {
                  se(l, l.return, _t);
                }
              }
              break;
            case 3:
              if ((e & 1024) !== 0) {
                if (
                  ((e = n.stateNode.containerInfo), (l = e.nodeType), l === 9)
                )
                  ad(e);
                else if (l === 1)
                  switch (e.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      ad(e);
                      break;
                    default:
                      e.textContent = "";
                  }
              }
              break;
            case 5:
            case 26:
            case 27:
            case 6:
            case 4:
            case 17:
              break;
            default:
              if ((e & 1024) !== 0) throw Error(a(163));
          }
          if (((e = n.sibling), e !== null)) {
            (e.return = n.return), (Pe = e);
            break;
          }
          Pe = n.return;
        }
  }
  function Qg(e, n, l) {
    var o = l.flags;
    switch (l.tag) {
      case 0:
      case 11:
      case 15:
        Pr(e, l), o & 4 && _a(5, l);
        break;
      case 1:
        if ((Pr(e, l), o & 4))
          if (((e = l.stateNode), n === null))
            try {
              e.componentDidMount();
            } catch (S) {
              se(l, l.return, S);
            }
          else {
            var c = xi(l.type, n.memoizedProps);
            n = n.memoizedState;
            try {
              e.componentDidUpdate(c, n, e.__reactInternalSnapshotBeforeUpdate);
            } catch (S) {
              se(l, l.return, S);
            }
          }
        o & 64 && Pg(l), o & 512 && Ra(l, l.return);
        break;
      case 3:
        if ((Pr(e, l), o & 64 && ((e = l.updateQueue), e !== null))) {
          if (((n = null), l.child !== null))
            switch (l.child.tag) {
              case 27:
              case 5:
                n = l.child.stateNode;
                break;
              case 1:
                n = l.child.stateNode;
            }
          try {
            km(e, n);
          } catch (S) {
            se(l, l.return, S);
          }
        }
        break;
      case 27:
        n === null && o & 4 && Gg(l);
      case 26:
      case 5:
        Pr(e, l), n === null && o & 4 && Vg(l), o & 512 && Ra(l, l.return);
        break;
      case 12:
        Pr(e, l);
        break;
      case 13:
        Pr(e, l),
          o & 4 && Kg(e, l),
          o & 64 &&
            ((e = l.memoizedState),
            e !== null &&
              ((e = e.dehydrated),
              e !== null && ((l = VS.bind(null, l)), ow(e, l))));
        break;
      case 22:
        if (((o = l.memoizedState !== null || wr), !o)) {
          (n = (n !== null && n.memoizedState !== null) || Re), (c = wr);
          var p = Re;
          (wr = o),
            (Re = n) && !p ? $r(e, l, (l.subtreeFlags & 8772) !== 0) : Pr(e, l),
            (wr = c),
            (Re = p);
        }
        break;
      case 30:
        break;
      default:
        Pr(e, l);
    }
  }
  function Ig(e) {
    var n = e.alternate;
    n !== null && ((e.alternate = null), Ig(n)),
      (e.child = null),
      (e.deletions = null),
      (e.sibling = null),
      e.tag === 5 && ((n = e.stateNode), n !== null && cc(n)),
      (e.stateNode = null),
      (e.return = null),
      (e.dependencies = null),
      (e.memoizedProps = null),
      (e.memoizedState = null),
      (e.pendingProps = null),
      (e.stateNode = null),
      (e.updateQueue = null);
  }
  var be = null,
    on = !1;
  function Er(e, n, l) {
    for (l = l.child; l !== null; ) Zg(e, n, l), (l = l.sibling);
  }
  function Zg(e, n, l) {
    if (ot && typeof ot.onCommitFiberUnmount == "function")
      try {
        ot.onCommitFiberUnmount(F, l);
      } catch {}
    switch (l.tag) {
      case 26:
        Re || Wn(l, n),
          Er(e, n, l),
          l.memoizedState
            ? l.memoizedState.count--
            : l.stateNode && ((l = l.stateNode), l.parentNode.removeChild(l));
        break;
      case 27:
        Re || Wn(l, n);
        var o = be,
          c = on;
        Ir(l.type) && ((be = l.stateNode), (on = !1)),
          Er(e, n, l),
          Ha(l.stateNode),
          (be = o),
          (on = c);
        break;
      case 5:
        Re || Wn(l, n);
      case 6:
        if (
          ((o = be),
          (c = on),
          (be = null),
          Er(e, n, l),
          (be = o),
          (on = c),
          be !== null)
        )
          if (on)
            try {
              (be.nodeType === 9
                ? be.body
                : be.nodeName === "HTML"
                ? be.ownerDocument.body
                : be
              ).removeChild(l.stateNode);
            } catch (p) {
              se(l, n, p);
            }
          else
            try {
              be.removeChild(l.stateNode);
            } catch (p) {
              se(l, n, p);
            }
        break;
      case 18:
        be !== null &&
          (on
            ? ((e = be),
              U0(
                e.nodeType === 9
                  ? e.body
                  : e.nodeName === "HTML"
                  ? e.ownerDocument.body
                  : e,
                l.stateNode
              ),
              Qa(e))
            : U0(be, l.stateNode));
        break;
      case 4:
        (o = be),
          (c = on),
          (be = l.stateNode.containerInfo),
          (on = !0),
          Er(e, n, l),
          (be = o),
          (on = c);
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        Re || qr(2, l, n), Re || qr(4, l, n), Er(e, n, l);
        break;
      case 1:
        Re ||
          (Wn(l, n),
          (o = l.stateNode),
          typeof o.componentWillUnmount == "function" && $g(l, n, o)),
          Er(e, n, l);
        break;
      case 21:
        Er(e, n, l);
        break;
      case 22:
        (Re = (o = Re) || l.memoizedState !== null), Er(e, n, l), (Re = o);
        break;
      default:
        Er(e, n, l);
    }
  }
  function Kg(e, n) {
    if (
      n.memoizedState === null &&
      ((e = n.alternate),
      e !== null &&
        ((e = e.memoizedState), e !== null && ((e = e.dehydrated), e !== null)))
    )
      try {
        Qa(e);
      } catch (l) {
        se(n, n.return, l);
      }
  }
  function BS(e) {
    switch (e.tag) {
      case 13:
      case 19:
        var n = e.stateNode;
        return n === null && (n = e.stateNode = new Xg()), n;
      case 22:
        return (
          (e = e.stateNode),
          (n = e._retryCache),
          n === null && (n = e._retryCache = new Xg()),
          n
        );
      default:
        throw Error(a(435, e.tag));
    }
  }
  function Df(e, n) {
    var l = BS(e);
    n.forEach(function (o) {
      var c = YS.bind(null, e, o);
      l.has(o) || (l.add(o), o.then(c, c));
    });
  }
  function yn(e, n) {
    var l = n.deletions;
    if (l !== null)
      for (var o = 0; o < l.length; o++) {
        var c = l[o],
          p = e,
          S = n,
          E = S;
        t: for (; E !== null; ) {
          switch (E.tag) {
            case 27:
              if (Ir(E.type)) {
                (be = E.stateNode), (on = !1);
                break t;
              }
              break;
            case 5:
              (be = E.stateNode), (on = !1);
              break t;
            case 3:
            case 4:
              (be = E.stateNode.containerInfo), (on = !0);
              break t;
          }
          E = E.return;
        }
        if (be === null) throw Error(a(160));
        Zg(p, S, c),
          (be = null),
          (on = !1),
          (p = c.alternate),
          p !== null && (p.return = null),
          (c.return = null);
      }
    if (n.subtreeFlags & 13878)
      for (n = n.child; n !== null; ) Fg(n, e), (n = n.sibling);
  }
  var Qn = null;
  function Fg(e, n) {
    var l = e.alternate,
      o = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        yn(n, e),
          vn(e),
          o & 4 && (qr(3, e, e.return), _a(3, e), qr(5, e, e.return));
        break;
      case 1:
        yn(n, e),
          vn(e),
          o & 512 && (Re || l === null || Wn(l, l.return)),
          o & 64 &&
            wr &&
            ((e = e.updateQueue),
            e !== null &&
              ((o = e.callbacks),
              o !== null &&
                ((l = e.shared.hiddenCallbacks),
                (e.shared.hiddenCallbacks = l === null ? o : l.concat(o)))));
        break;
      case 26:
        var c = Qn;
        if (
          (yn(n, e),
          vn(e),
          o & 512 && (Re || l === null || Wn(l, l.return)),
          o & 4)
        ) {
          var p = l !== null ? l.memoizedState : null;
          if (((o = e.memoizedState), l === null))
            if (o === null)
              if (e.stateNode === null) {
                t: {
                  (o = e.type),
                    (l = e.memoizedProps),
                    (c = c.ownerDocument || c);
                  e: switch (o) {
                    case "title":
                      (p = c.getElementsByTagName("title")[0]),
                        (!p ||
                          p[ta] ||
                          p[Ke] ||
                          p.namespaceURI === "http://www.w3.org/2000/svg" ||
                          p.hasAttribute("itemprop")) &&
                          ((p = c.createElement(o)),
                          c.head.insertBefore(
                            p,
                            c.querySelector("head > title")
                          )),
                        Ge(p, o, l),
                        (p[Ke] = e),
                        He(p),
                        (o = p);
                      break t;
                    case "link":
                      var S = G0("link", "href", c).get(o + (l.href || ""));
                      if (S) {
                        for (var E = 0; E < S.length; E++)
                          if (
                            ((p = S[E]),
                            p.getAttribute("href") ===
                              (l.href == null || l.href === ""
                                ? null
                                : l.href) &&
                              p.getAttribute("rel") ===
                                (l.rel == null ? null : l.rel) &&
                              p.getAttribute("title") ===
                                (l.title == null ? null : l.title) &&
                              p.getAttribute("crossorigin") ===
                                (l.crossOrigin == null ? null : l.crossOrigin))
                          ) {
                            S.splice(E, 1);
                            break e;
                          }
                      }
                      (p = c.createElement(o)),
                        Ge(p, o, l),
                        c.head.appendChild(p);
                      break;
                    case "meta":
                      if (
                        (S = G0("meta", "content", c).get(
                          o + (l.content || "")
                        ))
                      ) {
                        for (E = 0; E < S.length; E++)
                          if (
                            ((p = S[E]),
                            p.getAttribute("content") ===
                              (l.content == null ? null : "" + l.content) &&
                              p.getAttribute("name") ===
                                (l.name == null ? null : l.name) &&
                              p.getAttribute("property") ===
                                (l.property == null ? null : l.property) &&
                              p.getAttribute("http-equiv") ===
                                (l.httpEquiv == null ? null : l.httpEquiv) &&
                              p.getAttribute("charset") ===
                                (l.charSet == null ? null : l.charSet))
                          ) {
                            S.splice(E, 1);
                            break e;
                          }
                      }
                      (p = c.createElement(o)),
                        Ge(p, o, l),
                        c.head.appendChild(p);
                      break;
                    default:
                      throw Error(a(468, o));
                  }
                  (p[Ke] = e), He(p), (o = p);
                }
                e.stateNode = o;
              } else X0(c, e.type, e.stateNode);
            else e.stateNode = Y0(c, o, e.memoizedProps);
          else
            p !== o
              ? (p === null
                  ? l.stateNode !== null &&
                    ((l = l.stateNode), l.parentNode.removeChild(l))
                  : p.count--,
                o === null
                  ? X0(c, e.type, e.stateNode)
                  : Y0(c, o, e.memoizedProps))
              : o === null &&
                e.stateNode !== null &&
                _f(e, e.memoizedProps, l.memoizedProps);
        }
        break;
      case 27:
        yn(n, e),
          vn(e),
          o & 512 && (Re || l === null || Wn(l, l.return)),
          l !== null && o & 4 && _f(e, e.memoizedProps, l.memoizedProps);
        break;
      case 5:
        if (
          (yn(n, e),
          vn(e),
          o & 512 && (Re || l === null || Wn(l, l.return)),
          e.flags & 32)
        ) {
          c = e.stateNode;
          try {
            Gi(c, "");
          } catch (W) {
            se(e, e.return, W);
          }
        }
        o & 4 &&
          e.stateNode != null &&
          ((c = e.memoizedProps), _f(e, c, l !== null ? l.memoizedProps : c)),
          o & 1024 && (zf = !0);
        break;
      case 6:
        if ((yn(n, e), vn(e), o & 4)) {
          if (e.stateNode === null) throw Error(a(162));
          (o = e.memoizedProps), (l = e.stateNode);
          try {
            l.nodeValue = o;
          } catch (W) {
            se(e, e.return, W);
          }
        }
        break;
      case 3:
        if (
          ((Pu = null),
          (c = Qn),
          (Qn = Hu(n.containerInfo)),
          yn(n, e),
          (Qn = c),
          vn(e),
          o & 4 && l !== null && l.memoizedState.isDehydrated)
        )
          try {
            Qa(n.containerInfo);
          } catch (W) {
            se(e, e.return, W);
          }
        zf && ((zf = !1), Wg(e));
        break;
      case 4:
        (o = Qn),
          (Qn = Hu(e.stateNode.containerInfo)),
          yn(n, e),
          vn(e),
          (Qn = o);
        break;
      case 12:
        yn(n, e), vn(e);
        break;
      case 13:
        yn(n, e),
          vn(e),
          e.child.flags & 8192 &&
            (e.memoizedState !== null) !=
              (l !== null && l.memoizedState !== null) &&
            (Hf = yt()),
          o & 4 &&
            ((o = e.updateQueue),
            o !== null && ((e.updateQueue = null), Df(e, o)));
        break;
      case 22:
        c = e.memoizedState !== null;
        var M = l !== null && l.memoizedState !== null,
          I = wr,
          rt = Re;
        if (
          ((wr = I || c),
          (Re = rt || M),
          yn(n, e),
          (Re = rt),
          (wr = I),
          vn(e),
          o & 8192)
        )
          t: for (
            n = e.stateNode,
              n._visibility = c ? n._visibility & -2 : n._visibility | 1,
              c && (l === null || M || wr || Re || Si(e)),
              l = null,
              n = e;
            ;

          ) {
            if (n.tag === 5 || n.tag === 26) {
              if (l === null) {
                M = l = n;
                try {
                  if (((p = M.stateNode), c))
                    (S = p.style),
                      typeof S.setProperty == "function"
                        ? S.setProperty("display", "none", "important")
                        : (S.display = "none");
                  else {
                    E = M.stateNode;
                    var at = M.memoizedProps.style,
                      K =
                        at != null && at.hasOwnProperty("display")
                          ? at.display
                          : null;
                    E.style.display =
                      K == null || typeof K == "boolean" ? "" : ("" + K).trim();
                  }
                } catch (W) {
                  se(M, M.return, W);
                }
              }
            } else if (n.tag === 6) {
              if (l === null) {
                M = n;
                try {
                  M.stateNode.nodeValue = c ? "" : M.memoizedProps;
                } catch (W) {
                  se(M, M.return, W);
                }
              }
            } else if (
              ((n.tag !== 22 && n.tag !== 23) ||
                n.memoizedState === null ||
                n === e) &&
              n.child !== null
            ) {
              (n.child.return = n), (n = n.child);
              continue;
            }
            if (n === e) break t;
            for (; n.sibling === null; ) {
              if (n.return === null || n.return === e) break t;
              l === n && (l = null), (n = n.return);
            }
            l === n && (l = null),
              (n.sibling.return = n.return),
              (n = n.sibling);
          }
        o & 4 &&
          ((o = e.updateQueue),
          o !== null &&
            ((l = o.retryQueue),
            l !== null && ((o.retryQueue = null), Df(e, l))));
        break;
      case 19:
        yn(n, e),
          vn(e),
          o & 4 &&
            ((o = e.updateQueue),
            o !== null && ((e.updateQueue = null), Df(e, o)));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        yn(n, e), vn(e);
    }
  }
  function vn(e) {
    var n = e.flags;
    if (n & 2) {
      try {
        for (var l, o = e.return; o !== null; ) {
          if (Yg(o)) {
            l = o;
            break;
          }
          o = o.return;
        }
        if (l == null) throw Error(a(160));
        switch (l.tag) {
          case 27:
            var c = l.stateNode,
              p = Rf(e);
            Ou(e, p, c);
            break;
          case 5:
            var S = l.stateNode;
            l.flags & 32 && (Gi(S, ""), (l.flags &= -33));
            var E = Rf(e);
            Ou(e, E, S);
            break;
          case 3:
          case 4:
            var M = l.stateNode.containerInfo,
              I = Rf(e);
            Mf(e, I, M);
            break;
          default:
            throw Error(a(161));
        }
      } catch (rt) {
        se(e, e.return, rt);
      }
      e.flags &= -3;
    }
    n & 4096 && (e.flags &= -4097);
  }
  function Wg(e) {
    if (e.subtreeFlags & 1024)
      for (e = e.child; e !== null; ) {
        var n = e;
        Wg(n),
          n.tag === 5 && n.flags & 1024 && n.stateNode.reset(),
          (e = e.sibling);
      }
  }
  function Pr(e, n) {
    if (n.subtreeFlags & 8772)
      for (n = n.child; n !== null; ) Qg(e, n.alternate, n), (n = n.sibling);
  }
  function Si(e) {
    for (e = e.child; e !== null; ) {
      var n = e;
      switch (n.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          qr(4, n, n.return), Si(n);
          break;
        case 1:
          Wn(n, n.return);
          var l = n.stateNode;
          typeof l.componentWillUnmount == "function" && $g(n, n.return, l),
            Si(n);
          break;
        case 27:
          Ha(n.stateNode);
        case 26:
        case 5:
          Wn(n, n.return), Si(n);
          break;
        case 22:
          n.memoizedState === null && Si(n);
          break;
        case 30:
          Si(n);
          break;
        default:
          Si(n);
      }
      e = e.sibling;
    }
  }
  function $r(e, n, l) {
    for (l = l && (n.subtreeFlags & 8772) !== 0, n = n.child; n !== null; ) {
      var o = n.alternate,
        c = e,
        p = n,
        S = p.flags;
      switch (p.tag) {
        case 0:
        case 11:
        case 15:
          $r(c, p, l), _a(4, p);
          break;
        case 1:
          if (
            ($r(c, p, l),
            (o = p),
            (c = o.stateNode),
            typeof c.componentDidMount == "function")
          )
            try {
              c.componentDidMount();
            } catch (I) {
              se(o, o.return, I);
            }
          if (((o = p), (c = o.updateQueue), c !== null)) {
            var E = o.stateNode;
            try {
              var M = c.shared.hiddenCallbacks;
              if (M !== null)
                for (c.shared.hiddenCallbacks = null, c = 0; c < M.length; c++)
                  Cm(M[c], E);
            } catch (I) {
              se(o, o.return, I);
            }
          }
          l && S & 64 && Pg(p), Ra(p, p.return);
          break;
        case 27:
          Gg(p);
        case 26:
        case 5:
          $r(c, p, l), l && o === null && S & 4 && Vg(p), Ra(p, p.return);
          break;
        case 12:
          $r(c, p, l);
          break;
        case 13:
          $r(c, p, l), l && S & 4 && Kg(c, p);
          break;
        case 22:
          p.memoizedState === null && $r(c, p, l), Ra(p, p.return);
          break;
        case 30:
          break;
        default:
          $r(c, p, l);
      }
      n = n.sibling;
    }
  }
  function Nf(e, n) {
    var l = null;
    e !== null &&
      e.memoizedState !== null &&
      e.memoizedState.cachePool !== null &&
      (l = e.memoizedState.cachePool.pool),
      (e = null),
      n.memoizedState !== null &&
        n.memoizedState.cachePool !== null &&
        (e = n.memoizedState.cachePool.pool),
      e !== l && (e != null && e.refCount++, l != null && ma(l));
  }
  function Bf(e, n) {
    (e = null),
      n.alternate !== null && (e = n.alternate.memoizedState.cache),
      (n = n.memoizedState.cache),
      n !== e && (n.refCount++, e != null && ma(e));
  }
  function Jn(e, n, l, o) {
    if (n.subtreeFlags & 10256)
      for (n = n.child; n !== null; ) Jg(e, n, l, o), (n = n.sibling);
  }
  function Jg(e, n, l, o) {
    var c = n.flags;
    switch (n.tag) {
      case 0:
      case 11:
      case 15:
        Jn(e, n, l, o), c & 2048 && _a(9, n);
        break;
      case 1:
        Jn(e, n, l, o);
        break;
      case 3:
        Jn(e, n, l, o),
          c & 2048 &&
            ((e = null),
            n.alternate !== null && (e = n.alternate.memoizedState.cache),
            (n = n.memoizedState.cache),
            n !== e && (n.refCount++, e != null && ma(e)));
        break;
      case 12:
        if (c & 2048) {
          Jn(e, n, l, o), (e = n.stateNode);
          try {
            var p = n.memoizedProps,
              S = p.id,
              E = p.onPostCommit;
            typeof E == "function" &&
              E(
                S,
                n.alternate === null ? "mount" : "update",
                e.passiveEffectDuration,
                -0
              );
          } catch (M) {
            se(n, n.return, M);
          }
        } else Jn(e, n, l, o);
        break;
      case 13:
        Jn(e, n, l, o);
        break;
      case 23:
        break;
      case 22:
        (p = n.stateNode),
          (S = n.alternate),
          n.memoizedState !== null
            ? p._visibility & 2
              ? Jn(e, n, l, o)
              : Ma(e, n)
            : p._visibility & 2
            ? Jn(e, n, l, o)
            : ((p._visibility |= 2),
              cl(e, n, l, o, (n.subtreeFlags & 10256) !== 0)),
          c & 2048 && Nf(S, n);
        break;
      case 24:
        Jn(e, n, l, o), c & 2048 && Bf(n.alternate, n);
        break;
      default:
        Jn(e, n, l, o);
    }
  }
  function cl(e, n, l, o, c) {
    for (c = c && (n.subtreeFlags & 10256) !== 0, n = n.child; n !== null; ) {
      var p = e,
        S = n,
        E = l,
        M = o,
        I = S.flags;
      switch (S.tag) {
        case 0:
        case 11:
        case 15:
          cl(p, S, E, M, c), _a(8, S);
          break;
        case 23:
          break;
        case 22:
          var rt = S.stateNode;
          S.memoizedState !== null
            ? rt._visibility & 2
              ? cl(p, S, E, M, c)
              : Ma(p, S)
            : ((rt._visibility |= 2), cl(p, S, E, M, c)),
            c && I & 2048 && Nf(S.alternate, S);
          break;
        case 24:
          cl(p, S, E, M, c), c && I & 2048 && Bf(S.alternate, S);
          break;
        default:
          cl(p, S, E, M, c);
      }
      n = n.sibling;
    }
  }
  function Ma(e, n) {
    if (n.subtreeFlags & 10256)
      for (n = n.child; n !== null; ) {
        var l = e,
          o = n,
          c = o.flags;
        switch (o.tag) {
          case 22:
            Ma(l, o), c & 2048 && Nf(o.alternate, o);
            break;
          case 24:
            Ma(l, o), c & 2048 && Bf(o.alternate, o);
            break;
          default:
            Ma(l, o);
        }
        n = n.sibling;
      }
  }
  var za = 8192;
  function fl(e) {
    if (e.subtreeFlags & za)
      for (e = e.child; e !== null; ) t0(e), (e = e.sibling);
  }
  function t0(e) {
    switch (e.tag) {
      case 26:
        fl(e),
          e.flags & za &&
            e.memoizedState !== null &&
            xw(Qn, e.memoizedState, e.memoizedProps);
        break;
      case 5:
        fl(e);
        break;
      case 3:
      case 4:
        var n = Qn;
        (Qn = Hu(e.stateNode.containerInfo)), fl(e), (Qn = n);
        break;
      case 22:
        e.memoizedState === null &&
          ((n = e.alternate),
          n !== null && n.memoizedState !== null
            ? ((n = za), (za = 16777216), fl(e), (za = n))
            : fl(e));
        break;
      default:
        fl(e);
    }
  }
  function e0(e) {
    var n = e.alternate;
    if (n !== null && ((e = n.child), e !== null)) {
      n.child = null;
      do (n = e.sibling), (e.sibling = null), (e = n);
      while (e !== null);
    }
  }
  function Da(e) {
    var n = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (n !== null)
        for (var l = 0; l < n.length; l++) {
          var o = n[l];
          (Pe = o), r0(o, e);
        }
      e0(e);
    }
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; ) n0(e), (e = e.sibling);
  }
  function n0(e) {
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        Da(e), e.flags & 2048 && qr(9, e, e.return);
        break;
      case 3:
        Da(e);
        break;
      case 12:
        Da(e);
        break;
      case 22:
        var n = e.stateNode;
        e.memoizedState !== null &&
        n._visibility & 2 &&
        (e.return === null || e.return.tag !== 13)
          ? ((n._visibility &= -3), Cu(e))
          : Da(e);
        break;
      default:
        Da(e);
    }
  }
  function Cu(e) {
    var n = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (n !== null)
        for (var l = 0; l < n.length; l++) {
          var o = n[l];
          (Pe = o), r0(o, e);
        }
      e0(e);
    }
    for (e = e.child; e !== null; ) {
      switch (((n = e), n.tag)) {
        case 0:
        case 11:
        case 15:
          qr(8, n, n.return), Cu(n);
          break;
        case 22:
          (l = n.stateNode),
            l._visibility & 2 && ((l._visibility &= -3), Cu(n));
          break;
        default:
          Cu(n);
      }
      e = e.sibling;
    }
  }
  function r0(e, n) {
    for (; Pe !== null; ) {
      var l = Pe;
      switch (l.tag) {
        case 0:
        case 11:
        case 15:
          qr(8, l, n);
          break;
        case 23:
        case 22:
          if (l.memoizedState !== null && l.memoizedState.cachePool !== null) {
            var o = l.memoizedState.cachePool.pool;
            o != null && o.refCount++;
          }
          break;
        case 24:
          ma(l.memoizedState.cache);
      }
      if (((o = l.child), o !== null)) (o.return = l), (Pe = o);
      else
        t: for (l = e; Pe !== null; ) {
          o = Pe;
          var c = o.sibling,
            p = o.return;
          if ((Ig(o), o === l)) {
            Pe = null;
            break t;
          }
          if (c !== null) {
            (c.return = p), (Pe = c);
            break t;
          }
          Pe = p;
        }
    }
  }
  var LS = {
      getCacheForType: function (e) {
        var n = Fe(Ue),
          l = n.data.get(e);
        return l === void 0 && ((l = e()), n.data.set(e, l)), l;
      },
    },
    US = typeof WeakMap == "function" ? WeakMap : Map,
    Jt = 0,
    de = null,
    $t = null,
    Gt = 0,
    te = 0,
    bn = null,
    Vr = !1,
    dl = !1,
    Lf = !1,
    Tr = 0,
    Te = 0,
    Yr = 0,
    wi = 0,
    Uf = 0,
    Un = 0,
    pl = 0,
    Na = null,
    un = null,
    jf = !1,
    Hf = 0,
    ku = 1 / 0,
    _u = null,
    Gr = null,
    Ye = 0,
    Xr = null,
    hl = null,
    ml = 0,
    qf = 0,
    Pf = null,
    i0 = null,
    Ba = 0,
    $f = null;
  function xn() {
    if ((Jt & 2) !== 0 && Gt !== 0) return Gt & -Gt;
    if (_.T !== null) {
      var e = nl;
      return e !== 0 ? e : Zf();
    }
    return Gn();
  }
  function l0() {
    Un === 0 && (Un = (Gt & 536870912) === 0 || It ? Uo() : 536870912);
    var e = Ln.current;
    return e !== null && (e.flags |= 32), Un;
  }
  function Sn(e, n, l) {
    ((e === de && (te === 2 || te === 9)) || e.cancelPendingCommit !== null) &&
      (gl(e, 0), Qr(e, Gt, Un, !1)),
      ai(e, l),
      ((Jt & 2) === 0 || e !== de) &&
        (e === de &&
          ((Jt & 2) === 0 && (wi |= l), Te === 4 && Qr(e, Gt, Un, !1)),
        tr(e));
  }
  function a0(e, n, l) {
    if ((Jt & 6) !== 0) throw Error(a(327));
    var o = (!l && (n & 124) === 0 && (n & e.expiredLanes) === 0) || Ie(e, n),
      c = o ? qS(e, n) : Gf(e, n, !0),
      p = o;
    do {
      if (c === 0) {
        dl && !o && Qr(e, n, 0, !1);
        break;
      } else {
        if (((l = e.current.alternate), p && !jS(l))) {
          (c = Gf(e, n, !1)), (p = !1);
          continue;
        }
        if (c === 2) {
          if (((p = n), e.errorRecoveryDisabledLanes & p)) var S = 0;
          else
            (S = e.pendingLanes & -536870913),
              (S = S !== 0 ? S : S & 536870912 ? 536870912 : 0);
          if (S !== 0) {
            n = S;
            t: {
              var E = e;
              c = Na;
              var M = E.current.memoizedState.isDehydrated;
              if ((M && (gl(E, S).flags |= 256), (S = Gf(E, S, !1)), S !== 2)) {
                if (Lf && !M) {
                  (E.errorRecoveryDisabledLanes |= p), (wi |= p), (c = 4);
                  break t;
                }
                (p = un),
                  (un = c),
                  p !== null && (un === null ? (un = p) : un.push.apply(un, p));
              }
              c = S;
            }
            if (((p = !1), c !== 2)) continue;
          }
        }
        if (c === 1) {
          gl(e, 0), Qr(e, n, 0, !0);
          break;
        }
        t: {
          switch (((o = e), (p = c), p)) {
            case 0:
            case 1:
              throw Error(a(345));
            case 4:
              if ((n & 4194048) !== n) break;
            case 6:
              Qr(o, n, Un, !Vr);
              break t;
            case 2:
              un = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(a(329));
          }
          if ((n & 62914560) === n && ((c = Hf + 300 - yt()), 10 < c)) {
            if ((Qr(o, n, Un, !Vr), ge(o, 0, !0) !== 0)) break t;
            o.timeoutHandle = B0(
              o0.bind(null, o, l, un, _u, jf, n, Un, wi, pl, Vr, p, 2, -0, 0),
              c
            );
            break t;
          }
          o0(o, l, un, _u, jf, n, Un, wi, pl, Vr, p, 0, -0, 0);
        }
      }
      break;
    } while (!0);
    tr(e);
  }
  function o0(e, n, l, o, c, p, S, E, M, I, rt, at, K, W) {
    if (
      ((e.timeoutHandle = -1),
      (at = n.subtreeFlags),
      (at & 8192 || (at & 16785408) === 16785408) &&
        (($a = { stylesheets: null, count: 0, unsuspend: bw }),
        t0(n),
        (at = Sw()),
        at !== null))
    ) {
      (e.cancelPendingCommit = at(
        h0.bind(null, e, n, p, l, o, c, S, E, M, rt, 1, K, W)
      )),
        Qr(e, p, S, !I);
      return;
    }
    h0(e, n, p, l, o, c, S, E, M);
  }
  function jS(e) {
    for (var n = e; ; ) {
      var l = n.tag;
      if (
        (l === 0 || l === 11 || l === 15) &&
        n.flags & 16384 &&
        ((l = n.updateQueue), l !== null && ((l = l.stores), l !== null))
      )
        for (var o = 0; o < l.length; o++) {
          var c = l[o],
            p = c.getSnapshot;
          c = c.value;
          try {
            if (!mn(p(), c)) return !1;
          } catch {
            return !1;
          }
        }
      if (((l = n.child), n.subtreeFlags & 16384 && l !== null))
        (l.return = n), (n = l);
      else {
        if (n === e) break;
        for (; n.sibling === null; ) {
          if (n.return === null || n.return === e) return !0;
          n = n.return;
        }
        (n.sibling.return = n.return), (n = n.sibling);
      }
    }
    return !0;
  }
  function Qr(e, n, l, o) {
    (n &= ~Uf),
      (n &= ~wi),
      (e.suspendedLanes |= n),
      (e.pingedLanes &= ~n),
      o && (e.warmLanes |= n),
      (o = e.expirationTimes);
    for (var c = n; 0 < c; ) {
      var p = 31 - Tt(c),
        S = 1 << p;
      (o[p] = -1), (c &= ~S);
    }
    l !== 0 && Ho(e, l, n);
  }
  function Ru() {
    return (Jt & 6) === 0 ? (La(0), !1) : !0;
  }
  function Vf() {
    if ($t !== null) {
      if (te === 0) var e = $t.return;
      else (e = $t), (gr = gi = null), af(e), (ul = null), (Oa = 0), (e = $t);
      for (; e !== null; ) qg(e.alternate, e), (e = e.return);
      $t = null;
    }
  }
  function gl(e, n) {
    var l = e.timeoutHandle;
    l !== -1 && ((e.timeoutHandle = -1), nw(l)),
      (l = e.cancelPendingCommit),
      l !== null && ((e.cancelPendingCommit = null), l()),
      Vf(),
      (de = e),
      ($t = l = pr(e.current, null)),
      (Gt = n),
      (te = 0),
      (bn = null),
      (Vr = !1),
      (dl = Ie(e, n)),
      (Lf = !1),
      (pl = Un = Uf = wi = Yr = Te = 0),
      (un = Na = null),
      (jf = !1),
      (n & 8) !== 0 && (n |= n & 32);
    var o = e.entangledLanes;
    if (o !== 0)
      for (e = e.entanglements, o &= n; 0 < o; ) {
        var c = 31 - Tt(o),
          p = 1 << c;
        (n |= e[c]), (o &= ~p);
      }
    return (Tr = n), Wo(), l;
  }
  function u0(e, n) {
    (Ht = null),
      (_.H = yu),
      n === ya || n === ou
        ? ((n = Am()), (te = 3))
        : n === wm
        ? ((n = Am()), (te = 4))
        : (te =
            n === Og
              ? 8
              : n !== null &&
                typeof n == "object" &&
                typeof n.then == "function"
              ? 6
              : 1),
      (bn = n),
      $t === null && ((Te = 1), wu(e, zn(n, e.current)));
  }
  function s0() {
    var e = _.H;
    return (_.H = yu), e === null ? yu : e;
  }
  function c0() {
    var e = _.A;
    return (_.A = LS), e;
  }
  function Yf() {
    (Te = 4),
      Vr || ((Gt & 4194048) !== Gt && Ln.current !== null) || (dl = !0),
      ((Yr & 134217727) === 0 && (wi & 134217727) === 0) ||
        de === null ||
        Qr(de, Gt, Un, !1);
  }
  function Gf(e, n, l) {
    var o = Jt;
    Jt |= 2;
    var c = s0(),
      p = c0();
    (de !== e || Gt !== n) && ((_u = null), gl(e, n)), (n = !1);
    var S = Te;
    t: do
      try {
        if (te !== 0 && $t !== null) {
          var E = $t,
            M = bn;
          switch (te) {
            case 8:
              Vf(), (S = 6);
              break t;
            case 3:
            case 2:
            case 9:
            case 6:
              Ln.current === null && (n = !0);
              var I = te;
              if (((te = 0), (bn = null), yl(e, E, M, I), l && dl)) {
                S = 0;
                break t;
              }
              break;
            default:
              (I = te), (te = 0), (bn = null), yl(e, E, M, I);
          }
        }
        HS(), (S = Te);
        break;
      } catch (rt) {
        u0(e, rt);
      }
    while (!0);
    return (
      n && e.shellSuspendCounter++,
      (gr = gi = null),
      (Jt = o),
      (_.H = c),
      (_.A = p),
      $t === null && ((de = null), (Gt = 0), Wo()),
      S
    );
  }
  function HS() {
    for (; $t !== null; ) f0($t);
  }
  function qS(e, n) {
    var l = Jt;
    Jt |= 2;
    var o = s0(),
      c = c0();
    de !== e || Gt !== n
      ? ((_u = null), (ku = yt() + 500), gl(e, n))
      : (dl = Ie(e, n));
    t: do
      try {
        if (te !== 0 && $t !== null) {
          n = $t;
          var p = bn;
          e: switch (te) {
            case 1:
              (te = 0), (bn = null), yl(e, n, p, 1);
              break;
            case 2:
            case 9:
              if (Em(p)) {
                (te = 0), (bn = null), d0(n);
                break;
              }
              (n = function () {
                (te !== 2 && te !== 9) || de !== e || (te = 7), tr(e);
              }),
                p.then(n, n);
              break t;
            case 3:
              te = 7;
              break t;
            case 4:
              te = 5;
              break t;
            case 7:
              Em(p)
                ? ((te = 0), (bn = null), d0(n))
                : ((te = 0), (bn = null), yl(e, n, p, 7));
              break;
            case 5:
              var S = null;
              switch ($t.tag) {
                case 26:
                  S = $t.memoizedState;
                case 5:
                case 27:
                  var E = $t;
                  if (!S || Q0(S)) {
                    (te = 0), (bn = null);
                    var M = E.sibling;
                    if (M !== null) $t = M;
                    else {
                      var I = E.return;
                      I !== null ? (($t = I), Mu(I)) : ($t = null);
                    }
                    break e;
                  }
              }
              (te = 0), (bn = null), yl(e, n, p, 5);
              break;
            case 6:
              (te = 0), (bn = null), yl(e, n, p, 6);
              break;
            case 8:
              Vf(), (Te = 6);
              break t;
            default:
              throw Error(a(462));
          }
        }
        PS();
        break;
      } catch (rt) {
        u0(e, rt);
      }
    while (!0);
    return (
      (gr = gi = null),
      (_.H = o),
      (_.A = c),
      (Jt = l),
      $t !== null ? 0 : ((de = null), (Gt = 0), Wo(), Te)
    );
  }
  function PS() {
    for (; $t !== null && !oe(); ) f0($t);
  }
  function f0(e) {
    var n = jg(e.alternate, e, Tr);
    (e.memoizedProps = e.pendingProps), n === null ? Mu(e) : ($t = n);
  }
  function d0(e) {
    var n = e,
      l = n.alternate;
    switch (n.tag) {
      case 15:
      case 0:
        n = zg(l, n, n.pendingProps, n.type, void 0, Gt);
        break;
      case 11:
        n = zg(l, n, n.pendingProps, n.type.render, n.ref, Gt);
        break;
      case 5:
        af(n);
      default:
        qg(l, n), (n = $t = pm(n, Tr)), (n = jg(l, n, Tr));
    }
    (e.memoizedProps = e.pendingProps), n === null ? Mu(e) : ($t = n);
  }
  function yl(e, n, l, o) {
    (gr = gi = null), af(n), (ul = null), (Oa = 0);
    var c = n.return;
    try {
      if (RS(e, c, n, l, Gt)) {
        (Te = 1), wu(e, zn(l, e.current)), ($t = null);
        return;
      }
    } catch (p) {
      if (c !== null) throw (($t = c), p);
      (Te = 1), wu(e, zn(l, e.current)), ($t = null);
      return;
    }
    n.flags & 32768
      ? (It || o === 1
          ? (e = !0)
          : dl || (Gt & 536870912) !== 0
          ? (e = !1)
          : ((Vr = e = !0),
            (o === 2 || o === 9 || o === 3 || o === 6) &&
              ((o = Ln.current),
              o !== null && o.tag === 13 && (o.flags |= 16384))),
        p0(n, e))
      : Mu(n);
  }
  function Mu(e) {
    var n = e;
    do {
      if ((n.flags & 32768) !== 0) {
        p0(n, Vr);
        return;
      }
      e = n.return;
      var l = zS(n.alternate, n, Tr);
      if (l !== null) {
        $t = l;
        return;
      }
      if (((n = n.sibling), n !== null)) {
        $t = n;
        return;
      }
      $t = n = e;
    } while (n !== null);
    Te === 0 && (Te = 5);
  }
  function p0(e, n) {
    do {
      var l = DS(e.alternate, e);
      if (l !== null) {
        (l.flags &= 32767), ($t = l);
        return;
      }
      if (
        ((l = e.return),
        l !== null &&
          ((l.flags |= 32768), (l.subtreeFlags = 0), (l.deletions = null)),
        !n && ((e = e.sibling), e !== null))
      ) {
        $t = e;
        return;
      }
      $t = e = l;
    } while (e !== null);
    (Te = 6), ($t = null);
  }
  function h0(e, n, l, o, c, p, S, E, M) {
    e.cancelPendingCommit = null;
    do zu();
    while (Ye !== 0);
    if ((Jt & 6) !== 0) throw Error(a(327));
    if (n !== null) {
      if (n === e.current) throw Error(a(177));
      if (
        ((p = n.lanes | n.childLanes),
        (p |= Nc),
        uc(e, l, p, S, E, M),
        e === de && (($t = de = null), (Gt = 0)),
        (hl = n),
        (Xr = e),
        (ml = l),
        (qf = p),
        (Pf = c),
        (i0 = o),
        (n.subtreeFlags & 10256) !== 0 || (n.flags & 10256) !== 0
          ? ((e.callbackNode = null),
            (e.callbackPriority = 0),
            GS(Et, function () {
              return b0(), null;
            }))
          : ((e.callbackNode = null), (e.callbackPriority = 0)),
        (o = (n.flags & 13878) !== 0),
        (n.subtreeFlags & 13878) !== 0 || o)
      ) {
        (o = _.T), (_.T = null), (c = P.p), (P.p = 2), (S = Jt), (Jt |= 4);
        try {
          NS(e, n, l);
        } finally {
          (Jt = S), (P.p = c), (_.T = o);
        }
      }
      (Ye = 1), m0(), g0(), y0();
    }
  }
  function m0() {
    if (Ye === 1) {
      Ye = 0;
      var e = Xr,
        n = hl,
        l = (n.flags & 13878) !== 0;
      if ((n.subtreeFlags & 13878) !== 0 || l) {
        (l = _.T), (_.T = null);
        var o = P.p;
        P.p = 2;
        var c = Jt;
        Jt |= 4;
        try {
          Fg(n, e);
          var p = rd,
            S = rm(e.containerInfo),
            E = p.focusedElem,
            M = p.selectionRange;
          if (
            S !== E &&
            E &&
            E.ownerDocument &&
            nm(E.ownerDocument.documentElement, E)
          ) {
            if (M !== null && _c(E)) {
              var I = M.start,
                rt = M.end;
              if ((rt === void 0 && (rt = I), "selectionStart" in E))
                (E.selectionStart = I),
                  (E.selectionEnd = Math.min(rt, E.value.length));
              else {
                var at = E.ownerDocument || document,
                  K = (at && at.defaultView) || window;
                if (K.getSelection) {
                  var W = K.getSelection(),
                    Mt = E.textContent.length,
                    _t = Math.min(M.start, Mt),
                    le = M.end === void 0 ? _t : Math.min(M.end, Mt);
                  !W.extend && _t > le && ((S = le), (le = _t), (_t = S));
                  var Y = em(E, _t),
                    j = em(E, le);
                  if (
                    Y &&
                    j &&
                    (W.rangeCount !== 1 ||
                      W.anchorNode !== Y.node ||
                      W.anchorOffset !== Y.offset ||
                      W.focusNode !== j.node ||
                      W.focusOffset !== j.offset)
                  ) {
                    var X = at.createRange();
                    X.setStart(Y.node, Y.offset),
                      W.removeAllRanges(),
                      _t > le
                        ? (W.addRange(X), W.extend(j.node, j.offset))
                        : (X.setEnd(j.node, j.offset), W.addRange(X));
                  }
                }
              }
            }
            for (at = [], W = E; (W = W.parentNode); )
              W.nodeType === 1 &&
                at.push({ element: W, left: W.scrollLeft, top: W.scrollTop });
            for (
              typeof E.focus == "function" && E.focus(), E = 0;
              E < at.length;
              E++
            ) {
              var lt = at[E];
              (lt.element.scrollLeft = lt.left),
                (lt.element.scrollTop = lt.top);
            }
          }
          (Yu = !!nd), (rd = nd = null);
        } finally {
          (Jt = c), (P.p = o), (_.T = l);
        }
      }
      (e.current = n), (Ye = 2);
    }
  }
  function g0() {
    if (Ye === 2) {
      Ye = 0;
      var e = Xr,
        n = hl,
        l = (n.flags & 8772) !== 0;
      if ((n.subtreeFlags & 8772) !== 0 || l) {
        (l = _.T), (_.T = null);
        var o = P.p;
        P.p = 2;
        var c = Jt;
        Jt |= 4;
        try {
          Qg(e, n.alternate, n);
        } finally {
          (Jt = c), (P.p = o), (_.T = l);
        }
      }
      Ye = 3;
    }
  }
  function y0() {
    if (Ye === 4 || Ye === 3) {
      (Ye = 0), fe();
      var e = Xr,
        n = hl,
        l = ml,
        o = i0;
      (n.subtreeFlags & 10256) !== 0 || (n.flags & 10256) !== 0
        ? (Ye = 5)
        : ((Ye = 0), (hl = Xr = null), v0(e, e.pendingLanes));
      var c = e.pendingLanes;
      if (
        (c === 0 && (Gr = null),
        Nt(l),
        (n = n.stateNode),
        ot && typeof ot.onCommitFiberRoot == "function")
      )
        try {
          ot.onCommitFiberRoot(F, n, void 0, (n.current.flags & 128) === 128);
        } catch {}
      if (o !== null) {
        (n = _.T), (c = P.p), (P.p = 2), (_.T = null);
        try {
          for (var p = e.onRecoverableError, S = 0; S < o.length; S++) {
            var E = o[S];
            p(E.value, { componentStack: E.stack });
          }
        } finally {
          (_.T = n), (P.p = c);
        }
      }
      (ml & 3) !== 0 && zu(),
        tr(e),
        (c = e.pendingLanes),
        (l & 4194090) !== 0 && (c & 42) !== 0
          ? e === $f
            ? Ba++
            : ((Ba = 0), ($f = e))
          : (Ba = 0),
        La(0);
    }
  }
  function v0(e, n) {
    (e.pooledCacheLanes &= n) === 0 &&
      ((n = e.pooledCache), n != null && ((e.pooledCache = null), ma(n)));
  }
  function zu(e) {
    return m0(), g0(), y0(), b0();
  }
  function b0() {
    if (Ye !== 5) return !1;
    var e = Xr,
      n = qf;
    qf = 0;
    var l = Nt(ml),
      o = _.T,
      c = P.p;
    try {
      (P.p = 32 > l ? 32 : l), (_.T = null), (l = Pf), (Pf = null);
      var p = Xr,
        S = ml;
      if (((Ye = 0), (hl = Xr = null), (ml = 0), (Jt & 6) !== 0))
        throw Error(a(331));
      var E = Jt;
      if (
        ((Jt |= 4),
        n0(p.current),
        Jg(p, p.current, S, l),
        (Jt = E),
        La(0, !1),
        ot && typeof ot.onPostCommitFiberRoot == "function")
      )
        try {
          ot.onPostCommitFiberRoot(F, p);
        } catch {}
      return !0;
    } finally {
      (P.p = c), (_.T = o), v0(e, n);
    }
  }
  function x0(e, n, l) {
    (n = zn(l, n)),
      (n = xf(e.stateNode, n, 2)),
      (e = Lr(e, n, 2)),
      e !== null && (ai(e, 2), tr(e));
  }
  function se(e, n, l) {
    if (e.tag === 3) x0(e, e, l);
    else
      for (; n !== null; ) {
        if (n.tag === 3) {
          x0(n, e, l);
          break;
        } else if (n.tag === 1) {
          var o = n.stateNode;
          if (
            typeof n.type.getDerivedStateFromError == "function" ||
            (typeof o.componentDidCatch == "function" &&
              (Gr === null || !Gr.has(o)))
          ) {
            (e = zn(l, e)),
              (l = Tg(2)),
              (o = Lr(n, l, 2)),
              o !== null && (Ag(l, o, n, e), ai(o, 2), tr(o));
            break;
          }
        }
        n = n.return;
      }
  }
  function Xf(e, n, l) {
    var o = e.pingCache;
    if (o === null) {
      o = e.pingCache = new US();
      var c = new Set();
      o.set(n, c);
    } else (c = o.get(n)), c === void 0 && ((c = new Set()), o.set(n, c));
    c.has(l) ||
      ((Lf = !0), c.add(l), (e = $S.bind(null, e, n, l)), n.then(e, e));
  }
  function $S(e, n, l) {
    var o = e.pingCache;
    o !== null && o.delete(n),
      (e.pingedLanes |= e.suspendedLanes & l),
      (e.warmLanes &= ~l),
      de === e &&
        (Gt & l) === l &&
        (Te === 4 || (Te === 3 && (Gt & 62914560) === Gt && 300 > yt() - Hf)
          ? (Jt & 2) === 0 && gl(e, 0)
          : (Uf |= l),
        pl === Gt && (pl = 0)),
      tr(e);
  }
  function S0(e, n) {
    n === 0 && (n = jo()), (e = Wi(e, n)), e !== null && (ai(e, n), tr(e));
  }
  function VS(e) {
    var n = e.memoizedState,
      l = 0;
    n !== null && (l = n.retryLane), S0(e, l);
  }
  function YS(e, n) {
    var l = 0;
    switch (e.tag) {
      case 13:
        var o = e.stateNode,
          c = e.memoizedState;
        c !== null && (l = c.retryLane);
        break;
      case 19:
        o = e.stateNode;
        break;
      case 22:
        o = e.stateNode._retryCache;
        break;
      default:
        throw Error(a(314));
    }
    o !== null && o.delete(n), S0(e, l);
  }
  function GS(e, n) {
    return Yt(e, n);
  }
  var Du = null,
    vl = null,
    Qf = !1,
    Nu = !1,
    If = !1,
    Ei = 0;
  function tr(e) {
    e !== vl &&
      e.next === null &&
      (vl === null ? (Du = vl = e) : (vl = vl.next = e)),
      (Nu = !0),
      Qf || ((Qf = !0), QS());
  }
  function La(e, n) {
    if (!If && Nu) {
      If = !0;
      do
        for (var l = !1, o = Du; o !== null; ) {
          if (e !== 0) {
            var c = o.pendingLanes;
            if (c === 0) var p = 0;
            else {
              var S = o.suspendedLanes,
                E = o.pingedLanes;
              (p = (1 << (31 - Tt(42 | e) + 1)) - 1),
                (p &= c & ~(S & ~E)),
                (p = p & 201326741 ? (p & 201326741) | 1 : p ? p | 2 : 0);
            }
            p !== 0 && ((l = !0), A0(o, p));
          } else
            (p = Gt),
              (p = ge(
                o,
                o === de ? p : 0,
                o.cancelPendingCommit !== null || o.timeoutHandle !== -1
              )),
              (p & 3) === 0 || Ie(o, p) || ((l = !0), A0(o, p));
          o = o.next;
        }
      while (l);
      If = !1;
    }
  }
  function XS() {
    w0();
  }
  function w0() {
    Nu = Qf = !1;
    var e = 0;
    Ei !== 0 && (ew() && (e = Ei), (Ei = 0));
    for (var n = yt(), l = null, o = Du; o !== null; ) {
      var c = o.next,
        p = E0(o, n);
      p === 0
        ? ((o.next = null),
          l === null ? (Du = c) : (l.next = c),
          c === null && (vl = l))
        : ((l = o), (e !== 0 || (p & 3) !== 0) && (Nu = !0)),
        (o = c);
    }
    La(e);
  }
  function E0(e, n) {
    for (
      var l = e.suspendedLanes,
        o = e.pingedLanes,
        c = e.expirationTimes,
        p = e.pendingLanes & -62914561;
      0 < p;

    ) {
      var S = 31 - Tt(p),
        E = 1 << S,
        M = c[S];
      M === -1
        ? ((E & l) === 0 || (E & o) !== 0) && (c[S] = Ze(E, n))
        : M <= n && (e.expiredLanes |= E),
        (p &= ~E);
    }
    if (
      ((n = de),
      (l = Gt),
      (l = ge(
        e,
        e === n ? l : 0,
        e.cancelPendingCommit !== null || e.timeoutHandle !== -1
      )),
      (o = e.callbackNode),
      l === 0 ||
        (e === n && (te === 2 || te === 9)) ||
        e.cancelPendingCommit !== null)
    )
      return (
        o !== null && o !== null && ce(o),
        (e.callbackNode = null),
        (e.callbackPriority = 0)
      );
    if ((l & 3) === 0 || Ie(e, l)) {
      if (((n = l & -l), n === e.callbackPriority)) return n;
      switch ((o !== null && ce(o), Nt(l))) {
        case 2:
        case 8:
          l = ft;
          break;
        case 32:
          l = Et;
          break;
        case 268435456:
          l = kt;
          break;
        default:
          l = Et;
      }
      return (
        (o = T0.bind(null, e)),
        (l = Yt(l, o)),
        (e.callbackPriority = n),
        (e.callbackNode = l),
        n
      );
    }
    return (
      o !== null && o !== null && ce(o),
      (e.callbackPriority = 2),
      (e.callbackNode = null),
      2
    );
  }
  function T0(e, n) {
    if (Ye !== 0 && Ye !== 5)
      return (e.callbackNode = null), (e.callbackPriority = 0), null;
    var l = e.callbackNode;
    if (zu() && e.callbackNode !== l) return null;
    var o = Gt;
    return (
      (o = ge(
        e,
        e === de ? o : 0,
        e.cancelPendingCommit !== null || e.timeoutHandle !== -1
      )),
      o === 0
        ? null
        : (a0(e, o, n),
          E0(e, yt()),
          e.callbackNode != null && e.callbackNode === l
            ? T0.bind(null, e)
            : null)
    );
  }
  function A0(e, n) {
    if (zu()) return null;
    a0(e, n, !0);
  }
  function QS() {
    rw(function () {
      (Jt & 6) !== 0 ? Yt(vt, XS) : w0();
    });
  }
  function Zf() {
    return Ei === 0 && (Ei = Uo()), Ei;
  }
  function O0(e) {
    return e == null || typeof e == "symbol" || typeof e == "boolean"
      ? null
      : typeof e == "function"
      ? e
      : Go("" + e);
  }
  function C0(e, n) {
    var l = n.ownerDocument.createElement("input");
    return (
      (l.name = n.name),
      (l.value = n.value),
      e.id && l.setAttribute("form", e.id),
      n.parentNode.insertBefore(l, n),
      (e = new FormData(e)),
      l.parentNode.removeChild(l),
      e
    );
  }
  function IS(e, n, l, o, c) {
    if (n === "submit" && l && l.stateNode === c) {
      var p = O0((c[rn] || null).action),
        S = o.submitter;
      S &&
        ((n = (n = S[rn] || null)
          ? O0(n.formAction)
          : S.getAttribute("formAction")),
        n !== null && ((p = n), (S = null)));
      var E = new Zo("action", "action", null, o, c);
      e.push({
        event: E,
        listeners: [
          {
            instance: null,
            listener: function () {
              if (o.defaultPrevented) {
                if (Ei !== 0) {
                  var M = S ? C0(c, S) : new FormData(c);
                  mf(
                    l,
                    { pending: !0, data: M, method: c.method, action: p },
                    null,
                    M
                  );
                }
              } else
                typeof p == "function" &&
                  (E.preventDefault(),
                  (M = S ? C0(c, S) : new FormData(c)),
                  mf(
                    l,
                    { pending: !0, data: M, method: c.method, action: p },
                    p,
                    M
                  ));
            },
            currentTarget: c,
          },
        ],
      });
    }
  }
  for (var Kf = 0; Kf < Dc.length; Kf++) {
    var Ff = Dc[Kf],
      ZS = Ff.toLowerCase(),
      KS = Ff[0].toUpperCase() + Ff.slice(1);
    Xn(ZS, "on" + KS);
  }
  Xn(am, "onAnimationEnd"),
    Xn(om, "onAnimationIteration"),
    Xn(um, "onAnimationStart"),
    Xn("dblclick", "onDoubleClick"),
    Xn("focusin", "onFocus"),
    Xn("focusout", "onBlur"),
    Xn(pS, "onTransitionRun"),
    Xn(hS, "onTransitionStart"),
    Xn(mS, "onTransitionCancel"),
    Xn(sm, "onTransitionEnd"),
    $i("onMouseEnter", ["mouseout", "mouseover"]),
    $i("onMouseLeave", ["mouseout", "mouseover"]),
    $i("onPointerEnter", ["pointerout", "pointerover"]),
    $i("onPointerLeave", ["pointerout", "pointerover"]),
    oi(
      "onChange",
      "change click focusin focusout input keydown keyup selectionchange".split(
        " "
      )
    ),
    oi(
      "onSelect",
      "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
        " "
      )
    ),
    oi("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
    oi(
      "onCompositionEnd",
      "compositionend focusout keydown keypress keyup mousedown".split(" ")
    ),
    oi(
      "onCompositionStart",
      "compositionstart focusout keydown keypress keyup mousedown".split(" ")
    ),
    oi(
      "onCompositionUpdate",
      "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
    );
  var Ua =
      "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
        " "
      ),
    FS = new Set(
      "beforetoggle cancel close invalid load scroll scrollend toggle"
        .split(" ")
        .concat(Ua)
    );
  function k0(e, n) {
    n = (n & 4) !== 0;
    for (var l = 0; l < e.length; l++) {
      var o = e[l],
        c = o.event;
      o = o.listeners;
      t: {
        var p = void 0;
        if (n)
          for (var S = o.length - 1; 0 <= S; S--) {
            var E = o[S],
              M = E.instance,
              I = E.currentTarget;
            if (((E = E.listener), M !== p && c.isPropagationStopped()))
              break t;
            (p = E), (c.currentTarget = I);
            try {
              p(c);
            } catch (rt) {
              Su(rt);
            }
            (c.currentTarget = null), (p = M);
          }
        else
          for (S = 0; S < o.length; S++) {
            if (
              ((E = o[S]),
              (M = E.instance),
              (I = E.currentTarget),
              (E = E.listener),
              M !== p && c.isPropagationStopped())
            )
              break t;
            (p = E), (c.currentTarget = I);
            try {
              p(c);
            } catch (rt) {
              Su(rt);
            }
            (c.currentTarget = null), (p = M);
          }
      }
    }
  }
  function Vt(e, n) {
    var l = n[sc];
    l === void 0 && (l = n[sc] = new Set());
    var o = e + "__bubble";
    l.has(o) || (_0(n, e, 2, !1), l.add(o));
  }
  function Wf(e, n, l) {
    var o = 0;
    n && (o |= 4), _0(l, e, o, n);
  }
  var Bu = "_reactListening" + Math.random().toString(36).slice(2);
  function Jf(e) {
    if (!e[Bu]) {
      (e[Bu] = !0),
        wh.forEach(function (l) {
          l !== "selectionchange" && (FS.has(l) || Wf(l, !1, e), Wf(l, !0, e));
        });
      var n = e.nodeType === 9 ? e : e.ownerDocument;
      n === null || n[Bu] || ((n[Bu] = !0), Wf("selectionchange", !1, n));
    }
  }
  function _0(e, n, l, o) {
    switch (J0(n)) {
      case 2:
        var c = Tw;
        break;
      case 8:
        c = Aw;
        break;
      default:
        c = pd;
    }
    (l = c.bind(null, n, l, e)),
      (c = void 0),
      !xc ||
        (n !== "touchstart" && n !== "touchmove" && n !== "wheel") ||
        (c = !0),
      o
        ? c !== void 0
          ? e.addEventListener(n, l, { capture: !0, passive: c })
          : e.addEventListener(n, l, !0)
        : c !== void 0
        ? e.addEventListener(n, l, { passive: c })
        : e.addEventListener(n, l, !1);
  }
  function td(e, n, l, o, c) {
    var p = o;
    if ((n & 1) === 0 && (n & 2) === 0 && o !== null)
      t: for (;;) {
        if (o === null) return;
        var S = o.tag;
        if (S === 3 || S === 4) {
          var E = o.stateNode.containerInfo;
          if (E === c) break;
          if (S === 4)
            for (S = o.return; S !== null; ) {
              var M = S.tag;
              if ((M === 3 || M === 4) && S.stateNode.containerInfo === c)
                return;
              S = S.return;
            }
          for (; E !== null; ) {
            if (((S = Hi(E)), S === null)) return;
            if (((M = S.tag), M === 5 || M === 6 || M === 26 || M === 27)) {
              o = p = S;
              continue t;
            }
            E = E.parentNode;
          }
        }
        o = o.return;
      }
    Lh(function () {
      var I = p,
        rt = vc(l),
        at = [];
      t: {
        var K = cm.get(e);
        if (K !== void 0) {
          var W = Zo,
            Mt = e;
          switch (e) {
            case "keypress":
              if (Qo(l) === 0) break t;
            case "keydown":
            case "keyup":
              W = Gx;
              break;
            case "focusin":
              (Mt = "focus"), (W = Tc);
              break;
            case "focusout":
              (Mt = "blur"), (W = Tc);
              break;
            case "beforeblur":
            case "afterblur":
              W = Tc;
              break;
            case "click":
              if (l.button === 2) break t;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              W = Hh;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              W = Dx;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              W = Ix;
              break;
            case am:
            case om:
            case um:
              W = Lx;
              break;
            case sm:
              W = Kx;
              break;
            case "scroll":
            case "scrollend":
              W = Mx;
              break;
            case "wheel":
              W = Wx;
              break;
            case "copy":
            case "cut":
            case "paste":
              W = jx;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              W = Ph;
              break;
            case "toggle":
            case "beforetoggle":
              W = tS;
          }
          var _t = (n & 4) !== 0,
            le = !_t && (e === "scroll" || e === "scrollend"),
            Y = _t ? (K !== null ? K + "Capture" : null) : K;
          _t = [];
          for (var j = I, X; j !== null; ) {
            var lt = j;
            if (
              ((X = lt.stateNode),
              (lt = lt.tag),
              (lt !== 5 && lt !== 26 && lt !== 27) ||
                X === null ||
                Y === null ||
                ((lt = na(j, Y)), lt != null && _t.push(ja(j, lt, X))),
              le)
            )
              break;
            j = j.return;
          }
          0 < _t.length &&
            ((K = new W(K, Mt, null, l, rt)),
            at.push({ event: K, listeners: _t }));
        }
      }
      if ((n & 7) === 0) {
        t: {
          if (
            ((K = e === "mouseover" || e === "pointerover"),
            (W = e === "mouseout" || e === "pointerout"),
            K &&
              l !== yc &&
              (Mt = l.relatedTarget || l.fromElement) &&
              (Hi(Mt) || Mt[ji]))
          )
            break t;
          if (
            (W || K) &&
            ((K =
              rt.window === rt
                ? rt
                : (K = rt.ownerDocument)
                ? K.defaultView || K.parentWindow
                : window),
            W
              ? ((Mt = l.relatedTarget || l.toElement),
                (W = I),
                (Mt = Mt ? Hi(Mt) : null),
                Mt !== null &&
                  ((le = s(Mt)),
                  (_t = Mt.tag),
                  Mt !== le || (_t !== 5 && _t !== 27 && _t !== 6)) &&
                  (Mt = null))
              : ((W = null), (Mt = I)),
            W !== Mt)
          ) {
            if (
              ((_t = Hh),
              (lt = "onMouseLeave"),
              (Y = "onMouseEnter"),
              (j = "mouse"),
              (e === "pointerout" || e === "pointerover") &&
                ((_t = Ph),
                (lt = "onPointerLeave"),
                (Y = "onPointerEnter"),
                (j = "pointer")),
              (le = W == null ? K : ea(W)),
              (X = Mt == null ? K : ea(Mt)),
              (K = new _t(lt, j + "leave", W, l, rt)),
              (K.target = le),
              (K.relatedTarget = X),
              (lt = null),
              Hi(rt) === I &&
                ((_t = new _t(Y, j + "enter", Mt, l, rt)),
                (_t.target = X),
                (_t.relatedTarget = le),
                (lt = _t)),
              (le = lt),
              W && Mt)
            )
              e: {
                for (_t = W, Y = Mt, j = 0, X = _t; X; X = bl(X)) j++;
                for (X = 0, lt = Y; lt; lt = bl(lt)) X++;
                for (; 0 < j - X; ) (_t = bl(_t)), j--;
                for (; 0 < X - j; ) (Y = bl(Y)), X--;
                for (; j--; ) {
                  if (_t === Y || (Y !== null && _t === Y.alternate)) break e;
                  (_t = bl(_t)), (Y = bl(Y));
                }
                _t = null;
              }
            else _t = null;
            W !== null && R0(at, K, W, _t, !1),
              Mt !== null && le !== null && R0(at, le, Mt, _t, !0);
          }
        }
        t: {
          if (
            ((K = I ? ea(I) : window),
            (W = K.nodeName && K.nodeName.toLowerCase()),
            W === "select" || (W === "input" && K.type === "file"))
          )
            var bt = Zh;
          else if (Qh(K))
            if (Kh) bt = cS;
            else {
              bt = uS;
              var qt = oS;
            }
          else
            (W = K.nodeName),
              !W ||
              W.toLowerCase() !== "input" ||
              (K.type !== "checkbox" && K.type !== "radio")
                ? I && gc(I.elementType) && (bt = Zh)
                : (bt = sS);
          if (bt && (bt = bt(e, I))) {
            Ih(at, bt, l, rt);
            break t;
          }
          qt && qt(e, K, I),
            e === "focusout" &&
              I &&
              K.type === "number" &&
              I.memoizedProps.value != null &&
              mc(K, "number", K.value);
        }
        switch (((qt = I ? ea(I) : window), e)) {
          case "focusin":
            (Qh(qt) || qt.contentEditable === "true") &&
              ((Zi = qt), (Rc = I), (ca = null));
            break;
          case "focusout":
            ca = Rc = Zi = null;
            break;
          case "mousedown":
            Mc = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            (Mc = !1), im(at, l, rt);
            break;
          case "selectionchange":
            if (dS) break;
          case "keydown":
          case "keyup":
            im(at, l, rt);
        }
        var Ot;
        if (Oc)
          t: {
            switch (e) {
              case "compositionstart":
                var Rt = "onCompositionStart";
                break t;
              case "compositionend":
                Rt = "onCompositionEnd";
                break t;
              case "compositionupdate":
                Rt = "onCompositionUpdate";
                break t;
            }
            Rt = void 0;
          }
        else
          Ii
            ? Gh(e, l) && (Rt = "onCompositionEnd")
            : e === "keydown" &&
              l.keyCode === 229 &&
              (Rt = "onCompositionStart");
        Rt &&
          ($h &&
            l.locale !== "ko" &&
            (Ii || Rt !== "onCompositionStart"
              ? Rt === "onCompositionEnd" && Ii && (Ot = Uh())
              : ((zr = rt),
                (Sc = "value" in zr ? zr.value : zr.textContent),
                (Ii = !0))),
          (qt = Lu(I, Rt)),
          0 < qt.length &&
            ((Rt = new qh(Rt, e, null, l, rt)),
            at.push({ event: Rt, listeners: qt }),
            Ot
              ? (Rt.data = Ot)
              : ((Ot = Xh(l)), Ot !== null && (Rt.data = Ot)))),
          (Ot = nS ? rS(e, l) : iS(e, l)) &&
            ((Rt = Lu(I, "onBeforeInput")),
            0 < Rt.length &&
              ((qt = new qh("onBeforeInput", "beforeinput", null, l, rt)),
              at.push({ event: qt, listeners: Rt }),
              (qt.data = Ot))),
          IS(at, e, I, l, rt);
      }
      k0(at, n);
    });
  }
  function ja(e, n, l) {
    return { instance: e, listener: n, currentTarget: l };
  }
  function Lu(e, n) {
    for (var l = n + "Capture", o = []; e !== null; ) {
      var c = e,
        p = c.stateNode;
      if (
        ((c = c.tag),
        (c !== 5 && c !== 26 && c !== 27) ||
          p === null ||
          ((c = na(e, l)),
          c != null && o.unshift(ja(e, c, p)),
          (c = na(e, n)),
          c != null && o.push(ja(e, c, p))),
        e.tag === 3)
      )
        return o;
      e = e.return;
    }
    return [];
  }
  function bl(e) {
    if (e === null) return null;
    do e = e.return;
    while (e && e.tag !== 5 && e.tag !== 27);
    return e || null;
  }
  function R0(e, n, l, o, c) {
    for (var p = n._reactName, S = []; l !== null && l !== o; ) {
      var E = l,
        M = E.alternate,
        I = E.stateNode;
      if (((E = E.tag), M !== null && M === o)) break;
      (E !== 5 && E !== 26 && E !== 27) ||
        I === null ||
        ((M = I),
        c
          ? ((I = na(l, p)), I != null && S.unshift(ja(l, I, M)))
          : c || ((I = na(l, p)), I != null && S.push(ja(l, I, M)))),
        (l = l.return);
    }
    S.length !== 0 && e.push({ event: n, listeners: S });
  }
  var WS = /\r\n?/g,
    JS = /\u0000|\uFFFD/g;
  function M0(e) {
    return (typeof e == "string" ? e : "" + e)
      .replace(
        WS,
        `
`
      )
      .replace(JS, "");
  }
  function z0(e, n) {
    return (n = M0(n)), M0(e) === n;
  }
  function Uu() {}
  function ie(e, n, l, o, c, p) {
    switch (l) {
      case "children":
        typeof o == "string"
          ? n === "body" || (n === "textarea" && o === "") || Gi(e, o)
          : (typeof o == "number" || typeof o == "bigint") &&
            n !== "body" &&
            Gi(e, "" + o);
        break;
      case "className":
        $o(e, "class", o);
        break;
      case "tabIndex":
        $o(e, "tabindex", o);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        $o(e, l, o);
        break;
      case "style":
        Nh(e, o, p);
        break;
      case "data":
        if (n !== "object") {
          $o(e, "data", o);
          break;
        }
      case "src":
      case "href":
        if (o === "" && (n !== "a" || l !== "href")) {
          e.removeAttribute(l);
          break;
        }
        if (
          o == null ||
          typeof o == "function" ||
          typeof o == "symbol" ||
          typeof o == "boolean"
        ) {
          e.removeAttribute(l);
          break;
        }
        (o = Go("" + o)), e.setAttribute(l, o);
        break;
      case "action":
      case "formAction":
        if (typeof o == "function") {
          e.setAttribute(
            l,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
          );
          break;
        } else
          typeof p == "function" &&
            (l === "formAction"
              ? (n !== "input" && ie(e, n, "name", c.name, c, null),
                ie(e, n, "formEncType", c.formEncType, c, null),
                ie(e, n, "formMethod", c.formMethod, c, null),
                ie(e, n, "formTarget", c.formTarget, c, null))
              : (ie(e, n, "encType", c.encType, c, null),
                ie(e, n, "method", c.method, c, null),
                ie(e, n, "target", c.target, c, null)));
        if (o == null || typeof o == "symbol" || typeof o == "boolean") {
          e.removeAttribute(l);
          break;
        }
        (o = Go("" + o)), e.setAttribute(l, o);
        break;
      case "onClick":
        o != null && (e.onclick = Uu);
        break;
      case "onScroll":
        o != null && Vt("scroll", e);
        break;
      case "onScrollEnd":
        o != null && Vt("scrollend", e);
        break;
      case "dangerouslySetInnerHTML":
        if (o != null) {
          if (typeof o != "object" || !("__html" in o)) throw Error(a(61));
          if (((l = o.__html), l != null)) {
            if (c.children != null) throw Error(a(60));
            e.innerHTML = l;
          }
        }
        break;
      case "multiple":
        e.multiple = o && typeof o != "function" && typeof o != "symbol";
        break;
      case "muted":
        e.muted = o && typeof o != "function" && typeof o != "symbol";
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "ref":
        break;
      case "autoFocus":
        break;
      case "xlinkHref":
        if (
          o == null ||
          typeof o == "function" ||
          typeof o == "boolean" ||
          typeof o == "symbol"
        ) {
          e.removeAttribute("xlink:href");
          break;
        }
        (l = Go("" + o)),
          e.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", l);
        break;
      case "contentEditable":
      case "spellCheck":
      case "draggable":
      case "value":
      case "autoReverse":
      case "externalResourcesRequired":
      case "focusable":
      case "preserveAlpha":
        o != null && typeof o != "function" && typeof o != "symbol"
          ? e.setAttribute(l, "" + o)
          : e.removeAttribute(l);
        break;
      case "inert":
      case "allowFullScreen":
      case "async":
      case "autoPlay":
      case "controls":
      case "default":
      case "defer":
      case "disabled":
      case "disablePictureInPicture":
      case "disableRemotePlayback":
      case "formNoValidate":
      case "hidden":
      case "loop":
      case "noModule":
      case "noValidate":
      case "open":
      case "playsInline":
      case "readOnly":
      case "required":
      case "reversed":
      case "scoped":
      case "seamless":
      case "itemScope":
        o && typeof o != "function" && typeof o != "symbol"
          ? e.setAttribute(l, "")
          : e.removeAttribute(l);
        break;
      case "capture":
      case "download":
        o === !0
          ? e.setAttribute(l, "")
          : o !== !1 &&
            o != null &&
            typeof o != "function" &&
            typeof o != "symbol"
          ? e.setAttribute(l, o)
          : e.removeAttribute(l);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        o != null &&
        typeof o != "function" &&
        typeof o != "symbol" &&
        !isNaN(o) &&
        1 <= o
          ? e.setAttribute(l, o)
          : e.removeAttribute(l);
        break;
      case "rowSpan":
      case "start":
        o == null || typeof o == "function" || typeof o == "symbol" || isNaN(o)
          ? e.removeAttribute(l)
          : e.setAttribute(l, o);
        break;
      case "popover":
        Vt("beforetoggle", e), Vt("toggle", e), Po(e, "popover", o);
        break;
      case "xlinkActuate":
        fr(e, "http://www.w3.org/1999/xlink", "xlink:actuate", o);
        break;
      case "xlinkArcrole":
        fr(e, "http://www.w3.org/1999/xlink", "xlink:arcrole", o);
        break;
      case "xlinkRole":
        fr(e, "http://www.w3.org/1999/xlink", "xlink:role", o);
        break;
      case "xlinkShow":
        fr(e, "http://www.w3.org/1999/xlink", "xlink:show", o);
        break;
      case "xlinkTitle":
        fr(e, "http://www.w3.org/1999/xlink", "xlink:title", o);
        break;
      case "xlinkType":
        fr(e, "http://www.w3.org/1999/xlink", "xlink:type", o);
        break;
      case "xmlBase":
        fr(e, "http://www.w3.org/XML/1998/namespace", "xml:base", o);
        break;
      case "xmlLang":
        fr(e, "http://www.w3.org/XML/1998/namespace", "xml:lang", o);
        break;
      case "xmlSpace":
        fr(e, "http://www.w3.org/XML/1998/namespace", "xml:space", o);
        break;
      case "is":
        Po(e, "is", o);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < l.length) ||
          (l[0] !== "o" && l[0] !== "O") ||
          (l[1] !== "n" && l[1] !== "N")) &&
          ((l = _x.get(l) || l), Po(e, l, o));
    }
  }
  function ed(e, n, l, o, c, p) {
    switch (l) {
      case "style":
        Nh(e, o, p);
        break;
      case "dangerouslySetInnerHTML":
        if (o != null) {
          if (typeof o != "object" || !("__html" in o)) throw Error(a(61));
          if (((l = o.__html), l != null)) {
            if (c.children != null) throw Error(a(60));
            e.innerHTML = l;
          }
        }
        break;
      case "children":
        typeof o == "string"
          ? Gi(e, o)
          : (typeof o == "number" || typeof o == "bigint") && Gi(e, "" + o);
        break;
      case "onScroll":
        o != null && Vt("scroll", e);
        break;
      case "onScrollEnd":
        o != null && Vt("scrollend", e);
        break;
      case "onClick":
        o != null && (e.onclick = Uu);
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "innerHTML":
      case "ref":
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        if (!Eh.hasOwnProperty(l))
          t: {
            if (
              l[0] === "o" &&
              l[1] === "n" &&
              ((c = l.endsWith("Capture")),
              (n = l.slice(2, c ? l.length - 7 : void 0)),
              (p = e[rn] || null),
              (p = p != null ? p[l] : null),
              typeof p == "function" && e.removeEventListener(n, p, c),
              typeof o == "function")
            ) {
              typeof p != "function" &&
                p !== null &&
                (l in e
                  ? (e[l] = null)
                  : e.hasAttribute(l) && e.removeAttribute(l)),
                e.addEventListener(n, o, c);
              break t;
            }
            l in e
              ? (e[l] = o)
              : o === !0
              ? e.setAttribute(l, "")
              : Po(e, l, o);
          }
    }
  }
  function Ge(e, n, l) {
    switch (n) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "img":
        Vt("error", e), Vt("load", e);
        var o = !1,
          c = !1,
          p;
        for (p in l)
          if (l.hasOwnProperty(p)) {
            var S = l[p];
            if (S != null)
              switch (p) {
                case "src":
                  o = !0;
                  break;
                case "srcSet":
                  c = !0;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(a(137, n));
                default:
                  ie(e, n, p, S, l, null);
              }
          }
        c && ie(e, n, "srcSet", l.srcSet, l, null),
          o && ie(e, n, "src", l.src, l, null);
        return;
      case "input":
        Vt("invalid", e);
        var E = (p = S = c = null),
          M = null,
          I = null;
        for (o in l)
          if (l.hasOwnProperty(o)) {
            var rt = l[o];
            if (rt != null)
              switch (o) {
                case "name":
                  c = rt;
                  break;
                case "type":
                  S = rt;
                  break;
                case "checked":
                  M = rt;
                  break;
                case "defaultChecked":
                  I = rt;
                  break;
                case "value":
                  p = rt;
                  break;
                case "defaultValue":
                  E = rt;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (rt != null) throw Error(a(137, n));
                  break;
                default:
                  ie(e, n, o, rt, l, null);
              }
          }
        Rh(e, p, E, M, I, S, c, !1), Vo(e);
        return;
      case "select":
        Vt("invalid", e), (o = S = p = null);
        for (c in l)
          if (l.hasOwnProperty(c) && ((E = l[c]), E != null))
            switch (c) {
              case "value":
                p = E;
                break;
              case "defaultValue":
                S = E;
                break;
              case "multiple":
                o = E;
              default:
                ie(e, n, c, E, l, null);
            }
        (n = p),
          (l = S),
          (e.multiple = !!o),
          n != null ? Yi(e, !!o, n, !1) : l != null && Yi(e, !!o, l, !0);
        return;
      case "textarea":
        Vt("invalid", e), (p = c = o = null);
        for (S in l)
          if (l.hasOwnProperty(S) && ((E = l[S]), E != null))
            switch (S) {
              case "value":
                o = E;
                break;
              case "defaultValue":
                c = E;
                break;
              case "children":
                p = E;
                break;
              case "dangerouslySetInnerHTML":
                if (E != null) throw Error(a(91));
                break;
              default:
                ie(e, n, S, E, l, null);
            }
        zh(e, o, c, p), Vo(e);
        return;
      case "option":
        for (M in l)
          if (l.hasOwnProperty(M) && ((o = l[M]), o != null))
            switch (M) {
              case "selected":
                e.selected =
                  o && typeof o != "function" && typeof o != "symbol";
                break;
              default:
                ie(e, n, M, o, l, null);
            }
        return;
      case "dialog":
        Vt("beforetoggle", e), Vt("toggle", e), Vt("cancel", e), Vt("close", e);
        break;
      case "iframe":
      case "object":
        Vt("load", e);
        break;
      case "video":
      case "audio":
        for (o = 0; o < Ua.length; o++) Vt(Ua[o], e);
        break;
      case "image":
        Vt("error", e), Vt("load", e);
        break;
      case "details":
        Vt("toggle", e);
        break;
      case "embed":
      case "source":
      case "link":
        Vt("error", e), Vt("load", e);
      case "area":
      case "base":
      case "br":
      case "col":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "track":
      case "wbr":
      case "menuitem":
        for (I in l)
          if (l.hasOwnProperty(I) && ((o = l[I]), o != null))
            switch (I) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(a(137, n));
              default:
                ie(e, n, I, o, l, null);
            }
        return;
      default:
        if (gc(n)) {
          for (rt in l)
            l.hasOwnProperty(rt) &&
              ((o = l[rt]), o !== void 0 && ed(e, n, rt, o, l, void 0));
          return;
        }
    }
    for (E in l)
      l.hasOwnProperty(E) && ((o = l[E]), o != null && ie(e, n, E, o, l, null));
  }
  function tw(e, n, l, o) {
    switch (n) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "input":
        var c = null,
          p = null,
          S = null,
          E = null,
          M = null,
          I = null,
          rt = null;
        for (W in l) {
          var at = l[W];
          if (l.hasOwnProperty(W) && at != null)
            switch (W) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                M = at;
              default:
                o.hasOwnProperty(W) || ie(e, n, W, null, o, at);
            }
        }
        for (var K in o) {
          var W = o[K];
          if (((at = l[K]), o.hasOwnProperty(K) && (W != null || at != null)))
            switch (K) {
              case "type":
                p = W;
                break;
              case "name":
                c = W;
                break;
              case "checked":
                I = W;
                break;
              case "defaultChecked":
                rt = W;
                break;
              case "value":
                S = W;
                break;
              case "defaultValue":
                E = W;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (W != null) throw Error(a(137, n));
                break;
              default:
                W !== at && ie(e, n, K, W, o, at);
            }
        }
        hc(e, S, E, M, I, rt, p, c);
        return;
      case "select":
        W = S = E = K = null;
        for (p in l)
          if (((M = l[p]), l.hasOwnProperty(p) && M != null))
            switch (p) {
              case "value":
                break;
              case "multiple":
                W = M;
              default:
                o.hasOwnProperty(p) || ie(e, n, p, null, o, M);
            }
        for (c in o)
          if (
            ((p = o[c]),
            (M = l[c]),
            o.hasOwnProperty(c) && (p != null || M != null))
          )
            switch (c) {
              case "value":
                K = p;
                break;
              case "defaultValue":
                E = p;
                break;
              case "multiple":
                S = p;
              default:
                p !== M && ie(e, n, c, p, o, M);
            }
        (n = E),
          (l = S),
          (o = W),
          K != null
            ? Yi(e, !!l, K, !1)
            : !!o != !!l &&
              (n != null ? Yi(e, !!l, n, !0) : Yi(e, !!l, l ? [] : "", !1));
        return;
      case "textarea":
        W = K = null;
        for (E in l)
          if (
            ((c = l[E]),
            l.hasOwnProperty(E) && c != null && !o.hasOwnProperty(E))
          )
            switch (E) {
              case "value":
                break;
              case "children":
                break;
              default:
                ie(e, n, E, null, o, c);
            }
        for (S in o)
          if (
            ((c = o[S]),
            (p = l[S]),
            o.hasOwnProperty(S) && (c != null || p != null))
          )
            switch (S) {
              case "value":
                K = c;
                break;
              case "defaultValue":
                W = c;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (c != null) throw Error(a(91));
                break;
              default:
                c !== p && ie(e, n, S, c, o, p);
            }
        Mh(e, K, W);
        return;
      case "option":
        for (var Mt in l)
          if (
            ((K = l[Mt]),
            l.hasOwnProperty(Mt) && K != null && !o.hasOwnProperty(Mt))
          )
            switch (Mt) {
              case "selected":
                e.selected = !1;
                break;
              default:
                ie(e, n, Mt, null, o, K);
            }
        for (M in o)
          if (
            ((K = o[M]),
            (W = l[M]),
            o.hasOwnProperty(M) && K !== W && (K != null || W != null))
          )
            switch (M) {
              case "selected":
                e.selected =
                  K && typeof K != "function" && typeof K != "symbol";
                break;
              default:
                ie(e, n, M, K, o, W);
            }
        return;
      case "img":
      case "link":
      case "area":
      case "base":
      case "br":
      case "col":
      case "embed":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "source":
      case "track":
      case "wbr":
      case "menuitem":
        for (var _t in l)
          (K = l[_t]),
            l.hasOwnProperty(_t) &&
              K != null &&
              !o.hasOwnProperty(_t) &&
              ie(e, n, _t, null, o, K);
        for (I in o)
          if (
            ((K = o[I]),
            (W = l[I]),
            o.hasOwnProperty(I) && K !== W && (K != null || W != null))
          )
            switch (I) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (K != null) throw Error(a(137, n));
                break;
              default:
                ie(e, n, I, K, o, W);
            }
        return;
      default:
        if (gc(n)) {
          for (var le in l)
            (K = l[le]),
              l.hasOwnProperty(le) &&
                K !== void 0 &&
                !o.hasOwnProperty(le) &&
                ed(e, n, le, void 0, o, K);
          for (rt in o)
            (K = o[rt]),
              (W = l[rt]),
              !o.hasOwnProperty(rt) ||
                K === W ||
                (K === void 0 && W === void 0) ||
                ed(e, n, rt, K, o, W);
          return;
        }
    }
    for (var Y in l)
      (K = l[Y]),
        l.hasOwnProperty(Y) &&
          K != null &&
          !o.hasOwnProperty(Y) &&
          ie(e, n, Y, null, o, K);
    for (at in o)
      (K = o[at]),
        (W = l[at]),
        !o.hasOwnProperty(at) ||
          K === W ||
          (K == null && W == null) ||
          ie(e, n, at, K, o, W);
  }
  var nd = null,
    rd = null;
  function ju(e) {
    return e.nodeType === 9 ? e : e.ownerDocument;
  }
  function D0(e) {
    switch (e) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function N0(e, n) {
    if (e === 0)
      switch (n) {
        case "svg":
          return 1;
        case "math":
          return 2;
        default:
          return 0;
      }
    return e === 1 && n === "foreignObject" ? 0 : e;
  }
  function id(e, n) {
    return (
      e === "textarea" ||
      e === "noscript" ||
      typeof n.children == "string" ||
      typeof n.children == "number" ||
      typeof n.children == "bigint" ||
      (typeof n.dangerouslySetInnerHTML == "object" &&
        n.dangerouslySetInnerHTML !== null &&
        n.dangerouslySetInnerHTML.__html != null)
    );
  }
  var ld = null;
  function ew() {
    var e = window.event;
    return e && e.type === "popstate"
      ? e === ld
        ? !1
        : ((ld = e), !0)
      : ((ld = null), !1);
  }
  var B0 = typeof setTimeout == "function" ? setTimeout : void 0,
    nw = typeof clearTimeout == "function" ? clearTimeout : void 0,
    L0 = typeof Promise == "function" ? Promise : void 0,
    rw =
      typeof queueMicrotask == "function"
        ? queueMicrotask
        : typeof L0 < "u"
        ? function (e) {
            return L0.resolve(null).then(e).catch(iw);
          }
        : B0;
  function iw(e) {
    setTimeout(function () {
      throw e;
    });
  }
  function Ir(e) {
    return e === "head";
  }
  function U0(e, n) {
    var l = n,
      o = 0,
      c = 0;
    do {
      var p = l.nextSibling;
      if ((e.removeChild(l), p && p.nodeType === 8))
        if (((l = p.data), l === "/$")) {
          if (0 < o && 8 > o) {
            l = o;
            var S = e.ownerDocument;
            if ((l & 1 && Ha(S.documentElement), l & 2 && Ha(S.body), l & 4))
              for (l = S.head, Ha(l), S = l.firstChild; S; ) {
                var E = S.nextSibling,
                  M = S.nodeName;
                S[ta] ||
                  M === "SCRIPT" ||
                  M === "STYLE" ||
                  (M === "LINK" && S.rel.toLowerCase() === "stylesheet") ||
                  l.removeChild(S),
                  (S = E);
              }
          }
          if (c === 0) {
            e.removeChild(p), Qa(n);
            return;
          }
          c--;
        } else
          l === "$" || l === "$?" || l === "$!"
            ? c++
            : (o = l.charCodeAt(0) - 48);
      else o = 0;
      l = p;
    } while (l);
    Qa(n);
  }
  function ad(e) {
    var n = e.firstChild;
    for (n && n.nodeType === 10 && (n = n.nextSibling); n; ) {
      var l = n;
      switch (((n = n.nextSibling), l.nodeName)) {
        case "HTML":
        case "HEAD":
        case "BODY":
          ad(l), cc(l);
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (l.rel.toLowerCase() === "stylesheet") continue;
      }
      e.removeChild(l);
    }
  }
  function lw(e, n, l, o) {
    for (; e.nodeType === 1; ) {
      var c = l;
      if (e.nodeName.toLowerCase() !== n.toLowerCase()) {
        if (!o && (e.nodeName !== "INPUT" || e.type !== "hidden")) break;
      } else if (o) {
        if (!e[ta])
          switch (n) {
            case "meta":
              if (!e.hasAttribute("itemprop")) break;
              return e;
            case "link":
              if (
                ((p = e.getAttribute("rel")),
                p === "stylesheet" && e.hasAttribute("data-precedence"))
              )
                break;
              if (
                p !== c.rel ||
                e.getAttribute("href") !==
                  (c.href == null || c.href === "" ? null : c.href) ||
                e.getAttribute("crossorigin") !==
                  (c.crossOrigin == null ? null : c.crossOrigin) ||
                e.getAttribute("title") !== (c.title == null ? null : c.title)
              )
                break;
              return e;
            case "style":
              if (e.hasAttribute("data-precedence")) break;
              return e;
            case "script":
              if (
                ((p = e.getAttribute("src")),
                (p !== (c.src == null ? null : c.src) ||
                  e.getAttribute("type") !== (c.type == null ? null : c.type) ||
                  e.getAttribute("crossorigin") !==
                    (c.crossOrigin == null ? null : c.crossOrigin)) &&
                  p &&
                  e.hasAttribute("async") &&
                  !e.hasAttribute("itemprop"))
              )
                break;
              return e;
            default:
              return e;
          }
      } else if (n === "input" && e.type === "hidden") {
        var p = c.name == null ? null : "" + c.name;
        if (c.type === "hidden" && e.getAttribute("name") === p) return e;
      } else return e;
      if (((e = In(e.nextSibling)), e === null)) break;
    }
    return null;
  }
  function aw(e, n, l) {
    if (n === "") return null;
    for (; e.nodeType !== 3; )
      if (
        ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") &&
          !l) ||
        ((e = In(e.nextSibling)), e === null)
      )
        return null;
    return e;
  }
  function od(e) {
    return (
      e.data === "$!" ||
      (e.data === "$?" && e.ownerDocument.readyState === "complete")
    );
  }
  function ow(e, n) {
    var l = e.ownerDocument;
    if (e.data !== "$?" || l.readyState === "complete") n();
    else {
      var o = function () {
        n(), l.removeEventListener("DOMContentLoaded", o);
      };
      l.addEventListener("DOMContentLoaded", o), (e._reactRetry = o);
    }
  }
  function In(e) {
    for (; e != null; e = e.nextSibling) {
      var n = e.nodeType;
      if (n === 1 || n === 3) break;
      if (n === 8) {
        if (
          ((n = e.data),
          n === "$" || n === "$!" || n === "$?" || n === "F!" || n === "F")
        )
          break;
        if (n === "/$") return null;
      }
    }
    return e;
  }
  var ud = null;
  function j0(e) {
    e = e.previousSibling;
    for (var n = 0; e; ) {
      if (e.nodeType === 8) {
        var l = e.data;
        if (l === "$" || l === "$!" || l === "$?") {
          if (n === 0) return e;
          n--;
        } else l === "/$" && n++;
      }
      e = e.previousSibling;
    }
    return null;
  }
  function H0(e, n, l) {
    switch (((n = ju(l)), e)) {
      case "html":
        if (((e = n.documentElement), !e)) throw Error(a(452));
        return e;
      case "head":
        if (((e = n.head), !e)) throw Error(a(453));
        return e;
      case "body":
        if (((e = n.body), !e)) throw Error(a(454));
        return e;
      default:
        throw Error(a(451));
    }
  }
  function Ha(e) {
    for (var n = e.attributes; n.length; ) e.removeAttributeNode(n[0]);
    cc(e);
  }
  var jn = new Map(),
    q0 = new Set();
  function Hu(e) {
    return typeof e.getRootNode == "function"
      ? e.getRootNode()
      : e.nodeType === 9
      ? e
      : e.ownerDocument;
  }
  var Ar = P.d;
  P.d = { f: uw, r: sw, D: cw, C: fw, L: dw, m: pw, X: mw, S: hw, M: gw };
  function uw() {
    var e = Ar.f(),
      n = Ru();
    return e || n;
  }
  function sw(e) {
    var n = qi(e);
    n !== null && n.tag === 5 && n.type === "form" ? ag(n) : Ar.r(e);
  }
  var xl = typeof document > "u" ? null : document;
  function P0(e, n, l) {
    var o = xl;
    if (o && typeof n == "string" && n) {
      var c = Mn(n);
      (c = 'link[rel="' + e + '"][href="' + c + '"]'),
        typeof l == "string" && (c += '[crossorigin="' + l + '"]'),
        q0.has(c) ||
          (q0.add(c),
          (e = { rel: e, crossOrigin: l, href: n }),
          o.querySelector(c) === null &&
            ((n = o.createElement("link")),
            Ge(n, "link", e),
            He(n),
            o.head.appendChild(n)));
    }
  }
  function cw(e) {
    Ar.D(e), P0("dns-prefetch", e, null);
  }
  function fw(e, n) {
    Ar.C(e, n), P0("preconnect", e, n);
  }
  function dw(e, n, l) {
    Ar.L(e, n, l);
    var o = xl;
    if (o && e && n) {
      var c = 'link[rel="preload"][as="' + Mn(n) + '"]';
      n === "image" && l && l.imageSrcSet
        ? ((c += '[imagesrcset="' + Mn(l.imageSrcSet) + '"]'),
          typeof l.imageSizes == "string" &&
            (c += '[imagesizes="' + Mn(l.imageSizes) + '"]'))
        : (c += '[href="' + Mn(e) + '"]');
      var p = c;
      switch (n) {
        case "style":
          p = Sl(e);
          break;
        case "script":
          p = wl(e);
      }
      jn.has(p) ||
        ((e = g(
          {
            rel: "preload",
            href: n === "image" && l && l.imageSrcSet ? void 0 : e,
            as: n,
          },
          l
        )),
        jn.set(p, e),
        o.querySelector(c) !== null ||
          (n === "style" && o.querySelector(qa(p))) ||
          (n === "script" && o.querySelector(Pa(p))) ||
          ((n = o.createElement("link")),
          Ge(n, "link", e),
          He(n),
          o.head.appendChild(n)));
    }
  }
  function pw(e, n) {
    Ar.m(e, n);
    var l = xl;
    if (l && e) {
      var o = n && typeof n.as == "string" ? n.as : "script",
        c =
          'link[rel="modulepreload"][as="' + Mn(o) + '"][href="' + Mn(e) + '"]',
        p = c;
      switch (o) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          p = wl(e);
      }
      if (
        !jn.has(p) &&
        ((e = g({ rel: "modulepreload", href: e }, n)),
        jn.set(p, e),
        l.querySelector(c) === null)
      ) {
        switch (o) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (l.querySelector(Pa(p))) return;
        }
        (o = l.createElement("link")),
          Ge(o, "link", e),
          He(o),
          l.head.appendChild(o);
      }
    }
  }
  function hw(e, n, l) {
    Ar.S(e, n, l);
    var o = xl;
    if (o && e) {
      var c = Pi(o).hoistableStyles,
        p = Sl(e);
      n = n || "default";
      var S = c.get(p);
      if (!S) {
        var E = { loading: 0, preload: null };
        if ((S = o.querySelector(qa(p)))) E.loading = 5;
        else {
          (e = g({ rel: "stylesheet", href: e, "data-precedence": n }, l)),
            (l = jn.get(p)) && sd(e, l);
          var M = (S = o.createElement("link"));
          He(M),
            Ge(M, "link", e),
            (M._p = new Promise(function (I, rt) {
              (M.onload = I), (M.onerror = rt);
            })),
            M.addEventListener("load", function () {
              E.loading |= 1;
            }),
            M.addEventListener("error", function () {
              E.loading |= 2;
            }),
            (E.loading |= 4),
            qu(S, n, o);
        }
        (S = { type: "stylesheet", instance: S, count: 1, state: E }),
          c.set(p, S);
      }
    }
  }
  function mw(e, n) {
    Ar.X(e, n);
    var l = xl;
    if (l && e) {
      var o = Pi(l).hoistableScripts,
        c = wl(e),
        p = o.get(c);
      p ||
        ((p = l.querySelector(Pa(c))),
        p ||
          ((e = g({ src: e, async: !0 }, n)),
          (n = jn.get(c)) && cd(e, n),
          (p = l.createElement("script")),
          He(p),
          Ge(p, "link", e),
          l.head.appendChild(p)),
        (p = { type: "script", instance: p, count: 1, state: null }),
        o.set(c, p));
    }
  }
  function gw(e, n) {
    Ar.M(e, n);
    var l = xl;
    if (l && e) {
      var o = Pi(l).hoistableScripts,
        c = wl(e),
        p = o.get(c);
      p ||
        ((p = l.querySelector(Pa(c))),
        p ||
          ((e = g({ src: e, async: !0, type: "module" }, n)),
          (n = jn.get(c)) && cd(e, n),
          (p = l.createElement("script")),
          He(p),
          Ge(p, "link", e),
          l.head.appendChild(p)),
        (p = { type: "script", instance: p, count: 1, state: null }),
        o.set(c, p));
    }
  }
  function $0(e, n, l, o) {
    var c = (c = it.current) ? Hu(c) : null;
    if (!c) throw Error(a(446));
    switch (e) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof l.precedence == "string" && typeof l.href == "string"
          ? ((n = Sl(l.href)),
            (l = Pi(c).hoistableStyles),
            (o = l.get(n)),
            o ||
              ((o = { type: "style", instance: null, count: 0, state: null }),
              l.set(n, o)),
            o)
          : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (
          l.rel === "stylesheet" &&
          typeof l.href == "string" &&
          typeof l.precedence == "string"
        ) {
          e = Sl(l.href);
          var p = Pi(c).hoistableStyles,
            S = p.get(e);
          if (
            (S ||
              ((c = c.ownerDocument || c),
              (S = {
                type: "stylesheet",
                instance: null,
                count: 0,
                state: { loading: 0, preload: null },
              }),
              p.set(e, S),
              (p = c.querySelector(qa(e))) &&
                !p._p &&
                ((S.instance = p), (S.state.loading = 5)),
              jn.has(e) ||
                ((l = {
                  rel: "preload",
                  as: "style",
                  href: l.href,
                  crossOrigin: l.crossOrigin,
                  integrity: l.integrity,
                  media: l.media,
                  hrefLang: l.hrefLang,
                  referrerPolicy: l.referrerPolicy,
                }),
                jn.set(e, l),
                p || yw(c, e, l, S.state))),
            n && o === null)
          )
            throw Error(a(528, ""));
          return S;
        }
        if (n && o !== null) throw Error(a(529, ""));
        return null;
      case "script":
        return (
          (n = l.async),
          (l = l.src),
          typeof l == "string" &&
          n &&
          typeof n != "function" &&
          typeof n != "symbol"
            ? ((n = wl(l)),
              (l = Pi(c).hoistableScripts),
              (o = l.get(n)),
              o ||
                ((o = {
                  type: "script",
                  instance: null,
                  count: 0,
                  state: null,
                }),
                l.set(n, o)),
              o)
            : { type: "void", instance: null, count: 0, state: null }
        );
      default:
        throw Error(a(444, e));
    }
  }
  function Sl(e) {
    return 'href="' + Mn(e) + '"';
  }
  function qa(e) {
    return 'link[rel="stylesheet"][' + e + "]";
  }
  function V0(e) {
    return g({}, e, { "data-precedence": e.precedence, precedence: null });
  }
  function yw(e, n, l, o) {
    e.querySelector('link[rel="preload"][as="style"][' + n + "]")
      ? (o.loading = 1)
      : ((n = e.createElement("link")),
        (o.preload = n),
        n.addEventListener("load", function () {
          return (o.loading |= 1);
        }),
        n.addEventListener("error", function () {
          return (o.loading |= 2);
        }),
        Ge(n, "link", l),
        He(n),
        e.head.appendChild(n));
  }
  function wl(e) {
    return '[src="' + Mn(e) + '"]';
  }
  function Pa(e) {
    return "script[async]" + e;
  }
  function Y0(e, n, l) {
    if ((n.count++, n.instance === null))
      switch (n.type) {
        case "style":
          var o = e.querySelector('style[data-href~="' + Mn(l.href) + '"]');
          if (o) return (n.instance = o), He(o), o;
          var c = g({}, l, {
            "data-href": l.href,
            "data-precedence": l.precedence,
            href: null,
            precedence: null,
          });
          return (
            (o = (e.ownerDocument || e).createElement("style")),
            He(o),
            Ge(o, "style", c),
            qu(o, l.precedence, e),
            (n.instance = o)
          );
        case "stylesheet":
          c = Sl(l.href);
          var p = e.querySelector(qa(c));
          if (p) return (n.state.loading |= 4), (n.instance = p), He(p), p;
          (o = V0(l)),
            (c = jn.get(c)) && sd(o, c),
            (p = (e.ownerDocument || e).createElement("link")),
            He(p);
          var S = p;
          return (
            (S._p = new Promise(function (E, M) {
              (S.onload = E), (S.onerror = M);
            })),
            Ge(p, "link", o),
            (n.state.loading |= 4),
            qu(p, l.precedence, e),
            (n.instance = p)
          );
        case "script":
          return (
            (p = wl(l.src)),
            (c = e.querySelector(Pa(p)))
              ? ((n.instance = c), He(c), c)
              : ((o = l),
                (c = jn.get(p)) && ((o = g({}, l)), cd(o, c)),
                (e = e.ownerDocument || e),
                (c = e.createElement("script")),
                He(c),
                Ge(c, "link", o),
                e.head.appendChild(c),
                (n.instance = c))
          );
        case "void":
          return null;
        default:
          throw Error(a(443, n.type));
      }
    else
      n.type === "stylesheet" &&
        (n.state.loading & 4) === 0 &&
        ((o = n.instance), (n.state.loading |= 4), qu(o, l.precedence, e));
    return n.instance;
  }
  function qu(e, n, l) {
    for (
      var o = l.querySelectorAll(
          'link[rel="stylesheet"][data-precedence],style[data-precedence]'
        ),
        c = o.length ? o[o.length - 1] : null,
        p = c,
        S = 0;
      S < o.length;
      S++
    ) {
      var E = o[S];
      if (E.dataset.precedence === n) p = E;
      else if (p !== c) break;
    }
    p
      ? p.parentNode.insertBefore(e, p.nextSibling)
      : ((n = l.nodeType === 9 ? l.head : l), n.insertBefore(e, n.firstChild));
  }
  function sd(e, n) {
    e.crossOrigin == null && (e.crossOrigin = n.crossOrigin),
      e.referrerPolicy == null && (e.referrerPolicy = n.referrerPolicy),
      e.title == null && (e.title = n.title);
  }
  function cd(e, n) {
    e.crossOrigin == null && (e.crossOrigin = n.crossOrigin),
      e.referrerPolicy == null && (e.referrerPolicy = n.referrerPolicy),
      e.integrity == null && (e.integrity = n.integrity);
  }
  var Pu = null;
  function G0(e, n, l) {
    if (Pu === null) {
      var o = new Map(),
        c = (Pu = new Map());
      c.set(l, o);
    } else (c = Pu), (o = c.get(l)), o || ((o = new Map()), c.set(l, o));
    if (o.has(e)) return o;
    for (
      o.set(e, null), l = l.getElementsByTagName(e), c = 0;
      c < l.length;
      c++
    ) {
      var p = l[c];
      if (
        !(
          p[ta] ||
          p[Ke] ||
          (e === "link" && p.getAttribute("rel") === "stylesheet")
        ) &&
        p.namespaceURI !== "http://www.w3.org/2000/svg"
      ) {
        var S = p.getAttribute(n) || "";
        S = e + S;
        var E = o.get(S);
        E ? E.push(p) : o.set(S, [p]);
      }
    }
    return o;
  }
  function X0(e, n, l) {
    (e = e.ownerDocument || e),
      e.head.insertBefore(
        l,
        n === "title" ? e.querySelector("head > title") : null
      );
  }
  function vw(e, n, l) {
    if (l === 1 || n.itemProp != null) return !1;
    switch (e) {
      case "meta":
      case "title":
        return !0;
      case "style":
        if (
          typeof n.precedence != "string" ||
          typeof n.href != "string" ||
          n.href === ""
        )
          break;
        return !0;
      case "link":
        if (
          typeof n.rel != "string" ||
          typeof n.href != "string" ||
          n.href === "" ||
          n.onLoad ||
          n.onError
        )
          break;
        switch (n.rel) {
          case "stylesheet":
            return (
              (e = n.disabled), typeof n.precedence == "string" && e == null
            );
          default:
            return !0;
        }
      case "script":
        if (
          n.async &&
          typeof n.async != "function" &&
          typeof n.async != "symbol" &&
          !n.onLoad &&
          !n.onError &&
          n.src &&
          typeof n.src == "string"
        )
          return !0;
    }
    return !1;
  }
  function Q0(e) {
    return !(e.type === "stylesheet" && (e.state.loading & 3) === 0);
  }
  var $a = null;
  function bw() {}
  function xw(e, n, l) {
    if ($a === null) throw Error(a(475));
    var o = $a;
    if (
      n.type === "stylesheet" &&
      (typeof l.media != "string" || matchMedia(l.media).matches !== !1) &&
      (n.state.loading & 4) === 0
    ) {
      if (n.instance === null) {
        var c = Sl(l.href),
          p = e.querySelector(qa(c));
        if (p) {
          (e = p._p),
            e !== null &&
              typeof e == "object" &&
              typeof e.then == "function" &&
              (o.count++, (o = $u.bind(o)), e.then(o, o)),
            (n.state.loading |= 4),
            (n.instance = p),
            He(p);
          return;
        }
        (p = e.ownerDocument || e),
          (l = V0(l)),
          (c = jn.get(c)) && sd(l, c),
          (p = p.createElement("link")),
          He(p);
        var S = p;
        (S._p = new Promise(function (E, M) {
          (S.onload = E), (S.onerror = M);
        })),
          Ge(p, "link", l),
          (n.instance = p);
      }
      o.stylesheets === null && (o.stylesheets = new Map()),
        o.stylesheets.set(n, e),
        (e = n.state.preload) &&
          (n.state.loading & 3) === 0 &&
          (o.count++,
          (n = $u.bind(o)),
          e.addEventListener("load", n),
          e.addEventListener("error", n));
    }
  }
  function Sw() {
    if ($a === null) throw Error(a(475));
    var e = $a;
    return (
      e.stylesheets && e.count === 0 && fd(e, e.stylesheets),
      0 < e.count
        ? function (n) {
            var l = setTimeout(function () {
              if ((e.stylesheets && fd(e, e.stylesheets), e.unsuspend)) {
                var o = e.unsuspend;
                (e.unsuspend = null), o();
              }
            }, 6e4);
            return (
              (e.unsuspend = n),
              function () {
                (e.unsuspend = null), clearTimeout(l);
              }
            );
          }
        : null
    );
  }
  function $u() {
    if ((this.count--, this.count === 0)) {
      if (this.stylesheets) fd(this, this.stylesheets);
      else if (this.unsuspend) {
        var e = this.unsuspend;
        (this.unsuspend = null), e();
      }
    }
  }
  var Vu = null;
  function fd(e, n) {
    (e.stylesheets = null),
      e.unsuspend !== null &&
        (e.count++,
        (Vu = new Map()),
        n.forEach(ww, e),
        (Vu = null),
        $u.call(e));
  }
  function ww(e, n) {
    if (!(n.state.loading & 4)) {
      var l = Vu.get(e);
      if (l) var o = l.get(null);
      else {
        (l = new Map()), Vu.set(e, l);
        for (
          var c = e.querySelectorAll(
              "link[data-precedence],style[data-precedence]"
            ),
            p = 0;
          p < c.length;
          p++
        ) {
          var S = c[p];
          (S.nodeName === "LINK" || S.getAttribute("media") !== "not all") &&
            (l.set(S.dataset.precedence, S), (o = S));
        }
        o && l.set(null, o);
      }
      (c = n.instance),
        (S = c.getAttribute("data-precedence")),
        (p = l.get(S) || o),
        p === o && l.set(null, c),
        l.set(S, c),
        this.count++,
        (o = $u.bind(this)),
        c.addEventListener("load", o),
        c.addEventListener("error", o),
        p
          ? p.parentNode.insertBefore(c, p.nextSibling)
          : ((e = e.nodeType === 9 ? e.head : e),
            e.insertBefore(c, e.firstChild)),
        (n.state.loading |= 4);
    }
  }
  var Va = {
    $$typeof: $,
    Provider: null,
    Consumer: null,
    _currentValue: nt,
    _currentValue2: nt,
    _threadCount: 0,
  };
  function Ew(e, n, l, o, c, p, S, E) {
    (this.tag = 1),
      (this.containerInfo = e),
      (this.pingCache = this.current = this.pendingChildren = null),
      (this.timeoutHandle = -1),
      (this.callbackNode =
        this.next =
        this.pendingContext =
        this.context =
        this.cancelPendingCommit =
          null),
      (this.callbackPriority = 0),
      (this.expirationTimes = Wl(-1)),
      (this.entangledLanes =
        this.shellSuspendCounter =
        this.errorRecoveryDisabledLanes =
        this.expiredLanes =
        this.warmLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = Wl(0)),
      (this.hiddenUpdates = Wl(null)),
      (this.identifierPrefix = o),
      (this.onUncaughtError = c),
      (this.onCaughtError = p),
      (this.onRecoverableError = S),
      (this.pooledCache = null),
      (this.pooledCacheLanes = 0),
      (this.formState = E),
      (this.incompleteTransitions = new Map());
  }
  function I0(e, n, l, o, c, p, S, E, M, I, rt, at) {
    return (
      (e = new Ew(e, n, l, S, E, M, I, at)),
      (n = 1),
      p === !0 && (n |= 24),
      (p = gn(3, null, null, n)),
      (e.current = p),
      (p.stateNode = e),
      (n = Gc()),
      n.refCount++,
      (e.pooledCache = n),
      n.refCount++,
      (p.memoizedState = { element: o, isDehydrated: l, cache: n }),
      Zc(p),
      e
    );
  }
  function Z0(e) {
    return e ? ((e = Ji), e) : Ji;
  }
  function K0(e, n, l, o, c, p) {
    (c = Z0(c)),
      o.context === null ? (o.context = c) : (o.pendingContext = c),
      (o = Br(n)),
      (o.payload = { element: l }),
      (p = p === void 0 ? null : p),
      p !== null && (o.callback = p),
      (l = Lr(e, o, n)),
      l !== null && (Sn(l, e, n), ba(l, e, n));
  }
  function F0(e, n) {
    if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
      var l = e.retryLane;
      e.retryLane = l !== 0 && l < n ? l : n;
    }
  }
  function dd(e, n) {
    F0(e, n), (e = e.alternate) && F0(e, n);
  }
  function W0(e) {
    if (e.tag === 13) {
      var n = Wi(e, 67108864);
      n !== null && Sn(n, e, 67108864), dd(e, 67108864);
    }
  }
  var Yu = !0;
  function Tw(e, n, l, o) {
    var c = _.T;
    _.T = null;
    var p = P.p;
    try {
      (P.p = 2), pd(e, n, l, o);
    } finally {
      (P.p = p), (_.T = c);
    }
  }
  function Aw(e, n, l, o) {
    var c = _.T;
    _.T = null;
    var p = P.p;
    try {
      (P.p = 8), pd(e, n, l, o);
    } finally {
      (P.p = p), (_.T = c);
    }
  }
  function pd(e, n, l, o) {
    if (Yu) {
      var c = hd(o);
      if (c === null) td(e, n, o, Gu, l), ty(e, o);
      else if (Cw(c, e, n, l, o)) o.stopPropagation();
      else if ((ty(e, o), n & 4 && -1 < Ow.indexOf(e))) {
        for (; c !== null; ) {
          var p = qi(c);
          if (p !== null)
            switch (p.tag) {
              case 3:
                if (((p = p.stateNode), p.current.memoizedState.isDehydrated)) {
                  var S = ke(p.pendingLanes);
                  if (S !== 0) {
                    var E = p;
                    for (E.pendingLanes |= 2, E.entangledLanes |= 2; S; ) {
                      var M = 1 << (31 - Tt(S));
                      (E.entanglements[1] |= M), (S &= ~M);
                    }
                    tr(p), (Jt & 6) === 0 && ((ku = yt() + 500), La(0));
                  }
                }
                break;
              case 13:
                (E = Wi(p, 2)), E !== null && Sn(E, p, 2), Ru(), dd(p, 2);
            }
          if (((p = hd(o)), p === null && td(e, n, o, Gu, l), p === c)) break;
          c = p;
        }
        c !== null && o.stopPropagation();
      } else td(e, n, o, null, l);
    }
  }
  function hd(e) {
    return (e = vc(e)), md(e);
  }
  var Gu = null;
  function md(e) {
    if (((Gu = null), (e = Hi(e)), e !== null)) {
      var n = s(e);
      if (n === null) e = null;
      else {
        var l = n.tag;
        if (l === 13) {
          if (((e = f(n)), e !== null)) return e;
          e = null;
        } else if (l === 3) {
          if (n.stateNode.current.memoizedState.isDehydrated)
            return n.tag === 3 ? n.stateNode.containerInfo : null;
          e = null;
        } else n !== e && (e = null);
      }
    }
    return (Gu = e), null;
  }
  function J0(e) {
    switch (e) {
      case "beforetoggle":
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
      case "toggle":
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
        return 2;
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
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 8;
      case "message":
        switch (xt()) {
          case vt:
            return 2;
          case ft:
            return 8;
          case Et:
          case St:
            return 32;
          case kt:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var gd = !1,
    Zr = null,
    Kr = null,
    Fr = null,
    Ya = new Map(),
    Ga = new Map(),
    Wr = [],
    Ow =
      "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
        " "
      );
  function ty(e, n) {
    switch (e) {
      case "focusin":
      case "focusout":
        Zr = null;
        break;
      case "dragenter":
      case "dragleave":
        Kr = null;
        break;
      case "mouseover":
      case "mouseout":
        Fr = null;
        break;
      case "pointerover":
      case "pointerout":
        Ya.delete(n.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Ga.delete(n.pointerId);
    }
  }
  function Xa(e, n, l, o, c, p) {
    return e === null || e.nativeEvent !== p
      ? ((e = {
          blockedOn: n,
          domEventName: l,
          eventSystemFlags: o,
          nativeEvent: p,
          targetContainers: [c],
        }),
        n !== null && ((n = qi(n)), n !== null && W0(n)),
        e)
      : ((e.eventSystemFlags |= o),
        (n = e.targetContainers),
        c !== null && n.indexOf(c) === -1 && n.push(c),
        e);
  }
  function Cw(e, n, l, o, c) {
    switch (n) {
      case "focusin":
        return (Zr = Xa(Zr, e, n, l, o, c)), !0;
      case "dragenter":
        return (Kr = Xa(Kr, e, n, l, o, c)), !0;
      case "mouseover":
        return (Fr = Xa(Fr, e, n, l, o, c)), !0;
      case "pointerover":
        var p = c.pointerId;
        return Ya.set(p, Xa(Ya.get(p) || null, e, n, l, o, c)), !0;
      case "gotpointercapture":
        return (
          (p = c.pointerId), Ga.set(p, Xa(Ga.get(p) || null, e, n, l, o, c)), !0
        );
    }
    return !1;
  }
  function ey(e) {
    var n = Hi(e.target);
    if (n !== null) {
      var l = s(n);
      if (l !== null) {
        if (((n = l.tag), n === 13)) {
          if (((n = f(l)), n !== null)) {
            (e.blockedOn = n),
              xx(e.priority, function () {
                if (l.tag === 13) {
                  var o = xn();
                  o = Jl(o);
                  var c = Wi(l, o);
                  c !== null && Sn(c, l, o), dd(l, o);
                }
              });
            return;
          }
        } else if (n === 3 && l.stateNode.current.memoizedState.isDehydrated) {
          e.blockedOn = l.tag === 3 ? l.stateNode.containerInfo : null;
          return;
        }
      }
    }
    e.blockedOn = null;
  }
  function Xu(e) {
    if (e.blockedOn !== null) return !1;
    for (var n = e.targetContainers; 0 < n.length; ) {
      var l = hd(e.nativeEvent);
      if (l === null) {
        l = e.nativeEvent;
        var o = new l.constructor(l.type, l);
        (yc = o), l.target.dispatchEvent(o), (yc = null);
      } else return (n = qi(l)), n !== null && W0(n), (e.blockedOn = l), !1;
      n.shift();
    }
    return !0;
  }
  function ny(e, n, l) {
    Xu(e) && l.delete(n);
  }
  function kw() {
    (gd = !1),
      Zr !== null && Xu(Zr) && (Zr = null),
      Kr !== null && Xu(Kr) && (Kr = null),
      Fr !== null && Xu(Fr) && (Fr = null),
      Ya.forEach(ny),
      Ga.forEach(ny);
  }
  function Qu(e, n) {
    e.blockedOn === n &&
      ((e.blockedOn = null),
      gd ||
        ((gd = !0),
        t.unstable_scheduleCallback(t.unstable_NormalPriority, kw)));
  }
  var Iu = null;
  function ry(e) {
    Iu !== e &&
      ((Iu = e),
      t.unstable_scheduleCallback(t.unstable_NormalPriority, function () {
        Iu === e && (Iu = null);
        for (var n = 0; n < e.length; n += 3) {
          var l = e[n],
            o = e[n + 1],
            c = e[n + 2];
          if (typeof o != "function") {
            if (md(o || l) === null) continue;
            break;
          }
          var p = qi(l);
          p !== null &&
            (e.splice(n, 3),
            (n -= 3),
            mf(p, { pending: !0, data: c, method: l.method, action: o }, o, c));
        }
      }));
  }
  function Qa(e) {
    function n(M) {
      return Qu(M, e);
    }
    Zr !== null && Qu(Zr, e),
      Kr !== null && Qu(Kr, e),
      Fr !== null && Qu(Fr, e),
      Ya.forEach(n),
      Ga.forEach(n);
    for (var l = 0; l < Wr.length; l++) {
      var o = Wr[l];
      o.blockedOn === e && (o.blockedOn = null);
    }
    for (; 0 < Wr.length && ((l = Wr[0]), l.blockedOn === null); )
      ey(l), l.blockedOn === null && Wr.shift();
    if (((l = (e.ownerDocument || e).$$reactFormReplay), l != null))
      for (o = 0; o < l.length; o += 3) {
        var c = l[o],
          p = l[o + 1],
          S = c[rn] || null;
        if (typeof p == "function") S || ry(l);
        else if (S) {
          var E = null;
          if (p && p.hasAttribute("formAction")) {
            if (((c = p), (S = p[rn] || null))) E = S.formAction;
            else if (md(c) !== null) continue;
          } else E = S.action;
          typeof E == "function" ? (l[o + 1] = E) : (l.splice(o, 3), (o -= 3)),
            ry(l);
        }
      }
  }
  function yd(e) {
    this._internalRoot = e;
  }
  (Zu.prototype.render = yd.prototype.render =
    function (e) {
      var n = this._internalRoot;
      if (n === null) throw Error(a(409));
      var l = n.current,
        o = xn();
      K0(l, o, e, n, null, null);
    }),
    (Zu.prototype.unmount = yd.prototype.unmount =
      function () {
        var e = this._internalRoot;
        if (e !== null) {
          this._internalRoot = null;
          var n = e.containerInfo;
          K0(e.current, 2, null, e, null, null), Ru(), (n[ji] = null);
        }
      });
  function Zu(e) {
    this._internalRoot = e;
  }
  Zu.prototype.unstable_scheduleHydration = function (e) {
    if (e) {
      var n = Gn();
      e = { blockedOn: null, target: e, priority: n };
      for (var l = 0; l < Wr.length && n !== 0 && n < Wr[l].priority; l++);
      Wr.splice(l, 0, e), l === 0 && ey(e);
    }
  };
  var iy = r.version;
  if (iy !== "19.1.1") throw Error(a(527, iy, "19.1.1"));
  P.findDOMNode = function (e) {
    var n = e._reactInternals;
    if (n === void 0)
      throw typeof e.render == "function"
        ? Error(a(188))
        : ((e = Object.keys(e).join(",")), Error(a(268, e)));
    return (
      (e = h(n)),
      (e = e !== null ? m(e) : null),
      (e = e === null ? null : e.stateNode),
      e
    );
  };
  var _w = {
    bundleType: 0,
    version: "19.1.1",
    rendererPackageName: "react-dom",
    currentDispatcherRef: _,
    reconcilerVersion: "19.1.1",
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Ku = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Ku.isDisabled && Ku.supportsFiber)
      try {
        (F = Ku.inject(_w)), (ot = Ku);
      } catch {}
  }
  return (
    (Ka.createRoot = function (e, n) {
      if (!u(e)) throw Error(a(299));
      var l = !1,
        o = "",
        c = xg,
        p = Sg,
        S = wg,
        E = null;
      return (
        n != null &&
          (n.unstable_strictMode === !0 && (l = !0),
          n.identifierPrefix !== void 0 && (o = n.identifierPrefix),
          n.onUncaughtError !== void 0 && (c = n.onUncaughtError),
          n.onCaughtError !== void 0 && (p = n.onCaughtError),
          n.onRecoverableError !== void 0 && (S = n.onRecoverableError),
          n.unstable_transitionCallbacks !== void 0 &&
            (E = n.unstable_transitionCallbacks)),
        (n = I0(e, 1, !1, null, null, l, o, c, p, S, E, null)),
        (e[ji] = n.current),
        Jf(e),
        new yd(n)
      );
    }),
    (Ka.hydrateRoot = function (e, n, l) {
      if (!u(e)) throw Error(a(299));
      var o = !1,
        c = "",
        p = xg,
        S = Sg,
        E = wg,
        M = null,
        I = null;
      return (
        l != null &&
          (l.unstable_strictMode === !0 && (o = !0),
          l.identifierPrefix !== void 0 && (c = l.identifierPrefix),
          l.onUncaughtError !== void 0 && (p = l.onUncaughtError),
          l.onCaughtError !== void 0 && (S = l.onCaughtError),
          l.onRecoverableError !== void 0 && (E = l.onRecoverableError),
          l.unstable_transitionCallbacks !== void 0 &&
            (M = l.unstable_transitionCallbacks),
          l.formState !== void 0 && (I = l.formState)),
        (n = I0(e, 1, !0, n, l ?? null, o, c, p, S, E, M, I)),
        (n.context = Z0(null)),
        (l = n.current),
        (o = xn()),
        (o = Jl(o)),
        (c = Br(o)),
        (c.callback = null),
        Lr(l, c, o),
        (l = o),
        (n.current.lanes = l),
        ai(n, l),
        tr(n),
        (e[ji] = n.current),
        Jf(e),
        new Zu(n)
      );
    }),
    (Ka.version = "19.1.1"),
    Ka
  );
}
var Ey;
function _2() {
  if (Ey) return Ed.exports;
  Ey = 1;
  function t() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t);
      } catch (r) {
        console.error(r);
      }
  }
  return t(), (Ed.exports = k2()), Ed.exports;
}
var R2 = _2();
const M2 = "common-wordlist.txt",
  z2 = "wordlist.txt";
let Vv = "",
  Yv = "";
async function Ty(t) {
  return (await fetch(t)).text();
}
const D2 = (async () => {
  const t = await Promise.all([Ty(z2), Ty(M2)]);
  (Yv = t[0]), (Vv = t[1]);
})();
function N2(t) {
  return Es(ws(t, "word")).length > 0;
}
function Gv(t) {
  for (; t.length > 0; ) {
    const r = Es(ws(t, "word"));
    if (r.length > 0) return r;
    t = t.slice(0, t.length - 1);
  }
  return [];
}
function Hl(t, r) {
  const i = new Set(Es(ws(t, "prefix"), !0)),
    a = Es(ws(t, "prefix")),
    u = new Map(),
    s = r && (Gv(t)[0] ?? []).length < r;
  for (const d of a) {
    const h = d[t.length];
    if (h) {
      let m = u.get(h) ?? 0;
      (m += 1),
        i.has(d) && (m += 40),
        r &&
          s &&
          d.length === t.length + 1 &&
          d.length >= r &&
          ((m += 5e3), i.has(d) && (m += 5e4)),
        u.set(h, m);
    }
  }
  const f = Array.from(u.entries())
    .sort((d, h) => h[1] - d[1])
    .map((d) => d[0]);
  return t === "q" ? ["u"].concat(f.filter((d) => d !== "u")) : f;
}
function ws(t, r) {
  const i = r === "prefix" ? ".*" : "$";
  return new RegExp(`^${t}${i}`, "gm");
}
function Es(t, r) {
  const i = [];
  for (const a of (r ? Vv : Yv).matchAll(t)) i.push(a[0]);
  return i;
}
var Ay = function (r, i) {
  var a = arguments;
  if (i == null || !ko.call(i, "css")) return tt.createElement.apply(void 0, a);
  var u = a.length,
    s = new Array(u);
  (s[0] = Up), (s[1] = Lp(r, i));
  for (var f = 2; f < u; f++) s[f] = a[f];
  return tt.createElement.apply(null, s);
};
(function (t) {
  var r;
  r || (r = t.JSX || (t.JSX = {}));
})(Ay || (Ay = {}));
function ve() {
  for (var t = arguments.length, r = new Array(t), i = 0; i < t; i++)
    r[i] = arguments[i];
  return Hs(r);
}
var Cd = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/ var Oy;
function B2() {
  return (
    Oy ||
      ((Oy = 1),
      (function (t) {
        (function () {
          var r = {}.hasOwnProperty;
          function i() {
            for (var s = "", f = 0; f < arguments.length; f++) {
              var d = arguments[f];
              d && (s = u(s, a(d)));
            }
            return s;
          }
          function a(s) {
            if (typeof s == "string" || typeof s == "number") return s;
            if (typeof s != "object") return "";
            if (Array.isArray(s)) return i.apply(null, s);
            if (
              s.toString !== Object.prototype.toString &&
              !s.toString.toString().includes("[native code]")
            )
              return s.toString();
            var f = "";
            for (var d in s) r.call(s, d) && s[d] && (f = u(f, d));
            return f;
          }
          function u(s, f) {
            return f ? (s ? s + " " + f : s + f) : s;
          }
          t.exports
            ? ((i.default = i), (t.exports = i))
            : (window.classNames = i);
        })();
      })(Cd)),
    Cd.exports
  );
}
var L2 = B2();
const Qe = Il(L2);
function U2() {
  const [t, r] = tt.useState(""),
    i = tt.useMemo(() => {
      const u = Hl(t.toLocaleLowerCase(), 3),
        s = u[0];
      u.sort();
      const f = u.indexOf(s);
      return u.slice(f, u.length).concat(u.slice(0, f));
    }, [t]),
    a = tt.useMemo(() => t.length >= 3 && N2(t.toLocaleLowerCase()), [t]);
  return Ce("div", {
    css: j2,
    className: Qe({ valid: a }),
    children: [
      dt("input", {
        value: t,
        onChange: (u) => {
          r(u.target.value);
        },
      }),
      dt("div", { children: i.map((u) => dt("span", { children: u })) }),
    ],
  });
}
const j2 = ve`
  display: flex;
  flex-direction: column;
  margin: 24px;
  gap: 32px;

  input {
    font-size: 24px;
    padding: 12px;
    text-transform: uppercase;
  }

  &.valid input {
    background-color: #3d9970;
  }

  div {
    display: flex;
    gap: 12px;
    flex-wrap: wrap;

    span {
      display: flex;
      width: 48px;
      height: 48px;
      font-size: 24px;
      text-transform: uppercase;
      background-color: #333;
      color: #ccc;
      align-items: center;
      justify-content: center;
    }
  }
`,
  Cy = (t) => {
    let r;
    const i = new Set(),
      a = (m, g) => {
        const y = typeof m == "function" ? m(r) : m;
        if (!Object.is(y, r)) {
          const b = r;
          (r =
            g ?? (typeof y != "object" || y === null)
              ? y
              : Object.assign({}, r, y)),
            i.forEach((v) => v(r, b));
        }
      },
      u = () => r,
      d = {
        setState: a,
        getState: u,
        getInitialState: () => h,
        subscribe: (m) => (i.add(m), () => i.delete(m)),
      },
      h = (r = t(a, u, d));
    return d;
  },
  H2 = (t) => (t ? Cy(t) : Cy),
  q2 = (t) => t;
function P2(t, r = q2) {
  const i = ar.useSyncExternalStore(
    t.subscribe,
    ar.useCallback(() => r(t.getState()), [t, r]),
    ar.useCallback(() => r(t.getInitialState()), [t, r])
  );
  return ar.useDebugValue(i), i;
}
const $2 = (t) => {
    const r = H2(t),
      i = (a) => P2(r, a);
    return Object.assign(i, r), i;
  },
  jp = (t) => $2;
var Xv = Symbol.for("immer-nothing"),
  ky = Symbol.for("immer-draftable"),
  Cn = Symbol.for("immer-state");
function Zn(t, ...r) {
  throw new Error(
    `[Immer] minified error nr: ${t}. Full error at: https://bit.ly/3cXEKWf`
  );
}
var ql = Object.getPrototypeOf;
function Pl(t) {
  return !!t && !!t[Cn];
}
function zi(t) {
  return t
    ? Qv(t) ||
        Array.isArray(t) ||
        !!t[ky] ||
        !!t.constructor?.[ky] ||
        Ps(t) ||
        $s(t)
    : !1;
}
var V2 = Object.prototype.constructor.toString();
function Qv(t) {
  if (!t || typeof t != "object") return !1;
  const r = ql(t);
  if (r === null) return !0;
  const i = Object.hasOwnProperty.call(r, "constructor") && r.constructor;
  return i === Object
    ? !0
    : typeof i == "function" && Function.toString.call(i) === V2;
}
function Ts(t, r) {
  qs(t) === 0
    ? Reflect.ownKeys(t).forEach((i) => {
        r(i, t[i], t);
      })
    : t.forEach((i, a) => r(a, i, t));
}
function qs(t) {
  const r = t[Cn];
  return r ? r.type_ : Array.isArray(t) ? 1 : Ps(t) ? 2 : $s(t) ? 3 : 0;
}
function np(t, r) {
  return qs(t) === 2 ? t.has(r) : Object.prototype.hasOwnProperty.call(t, r);
}
function Iv(t, r, i) {
  const a = qs(t);
  a === 2 ? t.set(r, i) : a === 3 ? t.add(i) : (t[r] = i);
}
function Y2(t, r) {
  return t === r ? t !== 0 || 1 / t === 1 / r : t !== t && r !== r;
}
function Ps(t) {
  return t instanceof Map;
}
function $s(t) {
  return t instanceof Set;
}
function Oi(t) {
  return t.copy_ || t.base_;
}
function rp(t, r) {
  if (Ps(t)) return new Map(t);
  if ($s(t)) return new Set(t);
  if (Array.isArray(t)) return Array.prototype.slice.call(t);
  const i = Qv(t);
  if (r === !0 || (r === "class_only" && !i)) {
    const a = Object.getOwnPropertyDescriptors(t);
    delete a[Cn];
    let u = Reflect.ownKeys(a);
    for (let s = 0; s < u.length; s++) {
      const f = u[s],
        d = a[f];
      d.writable === !1 && ((d.writable = !0), (d.configurable = !0)),
        (d.get || d.set) &&
          (a[f] = {
            configurable: !0,
            writable: !0,
            enumerable: d.enumerable,
            value: t[f],
          });
    }
    return Object.create(ql(t), a);
  } else {
    const a = ql(t);
    if (a !== null && i) return { ...t };
    const u = Object.create(a);
    return Object.assign(u, t);
  }
}
function Hp(t, r = !1) {
  return (
    Vs(t) ||
      Pl(t) ||
      !zi(t) ||
      (qs(t) > 1 && (t.set = t.add = t.clear = t.delete = G2),
      Object.freeze(t),
      r && Object.entries(t).forEach(([i, a]) => Hp(a, !0))),
    t
  );
}
function G2() {
  Zn(2);
}
function Vs(t) {
  return Object.isFrozen(t);
}
var X2 = {};
function Di(t) {
  const r = X2[t];
  return r || Zn(0, t), r;
}
var bo;
function Zv() {
  return bo;
}
function Q2(t, r) {
  return {
    drafts_: [],
    parent_: t,
    immer_: r,
    canAutoFreeze_: !0,
    unfinalizedDrafts_: 0,
  };
}
function _y(t, r) {
  r &&
    (Di("Patches"),
    (t.patches_ = []),
    (t.inversePatches_ = []),
    (t.patchListener_ = r));
}
function ip(t) {
  lp(t), t.drafts_.forEach(I2), (t.drafts_ = null);
}
function lp(t) {
  t === bo && (bo = t.parent_);
}
function Ry(t) {
  return (bo = Q2(bo, t));
}
function I2(t) {
  const r = t[Cn];
  r.type_ === 0 || r.type_ === 1 ? r.revoke_() : (r.revoked_ = !0);
}
function My(t, r) {
  r.unfinalizedDrafts_ = r.drafts_.length;
  const i = r.drafts_[0];
  return (
    t !== void 0 && t !== i
      ? (i[Cn].modified_ && (ip(r), Zn(4)),
        zi(t) && ((t = As(r, t)), r.parent_ || Os(r, t)),
        r.patches_ &&
          Di("Patches").generateReplacementPatches_(
            i[Cn].base_,
            t,
            r.patches_,
            r.inversePatches_
          ))
      : (t = As(r, i, [])),
    ip(r),
    r.patches_ && r.patchListener_(r.patches_, r.inversePatches_),
    t !== Xv ? t : void 0
  );
}
function As(t, r, i) {
  if (Vs(r)) return r;
  const a = r[Cn];
  if (!a) return Ts(r, (u, s) => zy(t, a, r, u, s, i)), r;
  if (a.scope_ !== t) return r;
  if (!a.modified_) return Os(t, a.base_, !0), a.base_;
  if (!a.finalized_) {
    (a.finalized_ = !0), a.scope_.unfinalizedDrafts_--;
    const u = a.copy_;
    let s = u,
      f = !1;
    a.type_ === 3 && ((s = new Set(u)), u.clear(), (f = !0)),
      Ts(s, (d, h) => zy(t, a, u, d, h, i, f)),
      Os(t, u, !1),
      i &&
        t.patches_ &&
        Di("Patches").generatePatches_(a, i, t.patches_, t.inversePatches_);
  }
  return a.copy_;
}
function zy(t, r, i, a, u, s, f) {
  if (Pl(u)) {
    const d =
        s && r && r.type_ !== 3 && !np(r.assigned_, a) ? s.concat(a) : void 0,
      h = As(t, u, d);
    if ((Iv(i, a, h), Pl(h))) t.canAutoFreeze_ = !1;
    else return;
  } else f && i.add(u);
  if (zi(u) && !Vs(u)) {
    if (!t.immer_.autoFreeze_ && t.unfinalizedDrafts_ < 1) return;
    As(t, u),
      (!r || !r.scope_.parent_) &&
        typeof a != "symbol" &&
        Object.prototype.propertyIsEnumerable.call(i, a) &&
        Os(t, u);
  }
}
function Os(t, r, i = !1) {
  !t.parent_ && t.immer_.autoFreeze_ && t.canAutoFreeze_ && Hp(r, i);
}
function Z2(t, r) {
  const i = Array.isArray(t),
    a = {
      type_: i ? 1 : 0,
      scope_: r ? r.scope_ : Zv(),
      modified_: !1,
      finalized_: !1,
      assigned_: {},
      parent_: r,
      base_: t,
      draft_: null,
      copy_: null,
      revoke_: null,
      isManual_: !1,
    };
  let u = a,
    s = qp;
  i && ((u = [a]), (s = xo));
  const { revoke: f, proxy: d } = Proxy.revocable(u, s);
  return (a.draft_ = d), (a.revoke_ = f), d;
}
var qp = {
    get(t, r) {
      if (r === Cn) return t;
      const i = Oi(t);
      if (!np(i, r)) return K2(t, i, r);
      const a = i[r];
      return t.finalized_ || !zi(a)
        ? a
        : a === kd(t.base_, r)
        ? (_d(t), (t.copy_[r] = op(a, t)))
        : a;
    },
    has(t, r) {
      return r in Oi(t);
    },
    ownKeys(t) {
      return Reflect.ownKeys(Oi(t));
    },
    set(t, r, i) {
      const a = Kv(Oi(t), r);
      if (a?.set) return a.set.call(t.draft_, i), !0;
      if (!t.modified_) {
        const u = kd(Oi(t), r),
          s = u?.[Cn];
        if (s && s.base_ === i)
          return (t.copy_[r] = i), (t.assigned_[r] = !1), !0;
        if (Y2(i, u) && (i !== void 0 || np(t.base_, r))) return !0;
        _d(t), ap(t);
      }
      return (
        (t.copy_[r] === i && (i !== void 0 || r in t.copy_)) ||
          (Number.isNaN(i) && Number.isNaN(t.copy_[r])) ||
          ((t.copy_[r] = i), (t.assigned_[r] = !0)),
        !0
      );
    },
    deleteProperty(t, r) {
      return (
        kd(t.base_, r) !== void 0 || r in t.base_
          ? ((t.assigned_[r] = !1), _d(t), ap(t))
          : delete t.assigned_[r],
        t.copy_ && delete t.copy_[r],
        !0
      );
    },
    getOwnPropertyDescriptor(t, r) {
      const i = Oi(t),
        a = Reflect.getOwnPropertyDescriptor(i, r);
      return (
        a && {
          writable: !0,
          configurable: t.type_ !== 1 || r !== "length",
          enumerable: a.enumerable,
          value: i[r],
        }
      );
    },
    defineProperty() {
      Zn(11);
    },
    getPrototypeOf(t) {
      return ql(t.base_);
    },
    setPrototypeOf() {
      Zn(12);
    },
  },
  xo = {};
Ts(qp, (t, r) => {
  xo[t] = function () {
    return (arguments[0] = arguments[0][0]), r.apply(this, arguments);
  };
});
xo.deleteProperty = function (t, r) {
  return xo.set.call(this, t, r, void 0);
};
xo.set = function (t, r, i) {
  return qp.set.call(this, t[0], r, i, t[0]);
};
function kd(t, r) {
  const i = t[Cn];
  return (i ? Oi(i) : t)[r];
}
function K2(t, r, i) {
  const a = Kv(r, i);
  return a ? ("value" in a ? a.value : a.get?.call(t.draft_)) : void 0;
}
function Kv(t, r) {
  if (!(r in t)) return;
  let i = ql(t);
  for (; i; ) {
    const a = Object.getOwnPropertyDescriptor(i, r);
    if (a) return a;
    i = ql(i);
  }
}
function ap(t) {
  t.modified_ || ((t.modified_ = !0), t.parent_ && ap(t.parent_));
}
function _d(t) {
  t.copy_ || (t.copy_ = rp(t.base_, t.scope_.immer_.useStrictShallowCopy_));
}
var F2 = class {
  constructor(t) {
    (this.autoFreeze_ = !0),
      (this.useStrictShallowCopy_ = !1),
      (this.produce = (r, i, a) => {
        if (typeof r == "function" && typeof i != "function") {
          const s = i;
          i = r;
          const f = this;
          return function (h = s, ...m) {
            return f.produce(h, (g) => i.call(this, g, ...m));
          };
        }
        typeof i != "function" && Zn(6),
          a !== void 0 && typeof a != "function" && Zn(7);
        let u;
        if (zi(r)) {
          const s = Ry(this),
            f = op(r, void 0);
          let d = !0;
          try {
            (u = i(f)), (d = !1);
          } finally {
            d ? ip(s) : lp(s);
          }
          return _y(s, a), My(u, s);
        } else if (!r || typeof r != "object") {
          if (
            ((u = i(r)),
            u === void 0 && (u = r),
            u === Xv && (u = void 0),
            this.autoFreeze_ && Hp(u, !0),
            a)
          ) {
            const s = [],
              f = [];
            Di("Patches").generateReplacementPatches_(r, u, s, f), a(s, f);
          }
          return u;
        } else Zn(1, r);
      }),
      (this.produceWithPatches = (r, i) => {
        if (typeof r == "function")
          return (f, ...d) => this.produceWithPatches(f, (h) => r(h, ...d));
        let a, u;
        return [
          this.produce(r, i, (f, d) => {
            (a = f), (u = d);
          }),
          a,
          u,
        ];
      }),
      typeof t?.autoFreeze == "boolean" && this.setAutoFreeze(t.autoFreeze),
      typeof t?.useStrictShallowCopy == "boolean" &&
        this.setUseStrictShallowCopy(t.useStrictShallowCopy);
  }
  createDraft(t) {
    zi(t) || Zn(8), Pl(t) && (t = W2(t));
    const r = Ry(this),
      i = op(t, void 0);
    return (i[Cn].isManual_ = !0), lp(r), i;
  }
  finishDraft(t, r) {
    const i = t && t[Cn];
    (!i || !i.isManual_) && Zn(9);
    const { scope_: a } = i;
    return _y(a, r), My(void 0, a);
  }
  setAutoFreeze(t) {
    this.autoFreeze_ = t;
  }
  setUseStrictShallowCopy(t) {
    this.useStrictShallowCopy_ = t;
  }
  applyPatches(t, r) {
    let i;
    for (i = r.length - 1; i >= 0; i--) {
      const u = r[i];
      if (u.path.length === 0 && u.op === "replace") {
        t = u.value;
        break;
      }
    }
    i > -1 && (r = r.slice(i + 1));
    const a = Di("Patches").applyPatches_;
    return Pl(t) ? a(t, r) : this.produce(t, (u) => a(u, r));
  }
};
function op(t, r) {
  const i = Ps(t)
    ? Di("MapSet").proxyMap_(t, r)
    : $s(t)
    ? Di("MapSet").proxySet_(t, r)
    : Z2(t, r);
  return (r ? r.scope_ : Zv()).drafts_.push(i), i;
}
function W2(t) {
  return Pl(t) || Zn(10, t), Fv(t);
}
function Fv(t) {
  if (!zi(t) || Vs(t)) return t;
  const r = t[Cn];
  let i;
  if (r) {
    if (!r.modified_) return r.base_;
    (r.finalized_ = !0), (i = rp(t, r.scope_.immer_.useStrictShallowCopy_));
  } else i = rp(t, !0);
  return (
    Ts(i, (a, u) => {
      Iv(i, a, Fv(u));
    }),
    r && (r.finalized_ = !1),
    i
  );
}
var kn = new F2(),
  J2 = kn.produce;
kn.produceWithPatches.bind(kn);
kn.setAutoFreeze.bind(kn);
kn.setUseStrictShallowCopy.bind(kn);
kn.applyPatches.bind(kn);
kn.createDraft.bind(kn);
kn.finishDraft.bind(kn);
const tE = (t) => (r, i, a) => (
    (a.setState = (u, s, ...f) => {
      const d = typeof u == "function" ? J2(u) : u;
      return r(d, s, ...f);
    }),
    t(a.setState, i, a)
  ),
  Pp = tE;
var fs = { exports: {} },
  eE = fs.exports,
  Dy;
function nE() {
  return (
    Dy ||
      ((Dy = 1),
      (function (t) {
        (function (r, i, a) {
          function u(h) {
            var m = this,
              g = d();
            (m.next = function () {
              var y = 2091639 * m.s0 + m.c * 23283064365386963e-26;
              return (m.s0 = m.s1), (m.s1 = m.s2), (m.s2 = y - (m.c = y | 0));
            }),
              (m.c = 1),
              (m.s0 = g(" ")),
              (m.s1 = g(" ")),
              (m.s2 = g(" ")),
              (m.s0 -= g(h)),
              m.s0 < 0 && (m.s0 += 1),
              (m.s1 -= g(h)),
              m.s1 < 0 && (m.s1 += 1),
              (m.s2 -= g(h)),
              m.s2 < 0 && (m.s2 += 1),
              (g = null);
          }
          function s(h, m) {
            return (m.c = h.c), (m.s0 = h.s0), (m.s1 = h.s1), (m.s2 = h.s2), m;
          }
          function f(h, m) {
            var g = new u(h),
              y = m && m.state,
              b = g.next;
            return (
              (b.int32 = function () {
                return (g.next() * 4294967296) | 0;
              }),
              (b.double = function () {
                return b() + ((b() * 2097152) | 0) * 11102230246251565e-32;
              }),
              (b.quick = b),
              y &&
                (typeof y == "object" && s(y, g),
                (b.state = function () {
                  return s(g, {});
                })),
              b
            );
          }
          function d() {
            var h = 4022871197,
              m = function (g) {
                g = String(g);
                for (var y = 0; y < g.length; y++) {
                  h += g.charCodeAt(y);
                  var b = 0.02519603282416938 * h;
                  (h = b >>> 0),
                    (b -= h),
                    (b *= h),
                    (h = b >>> 0),
                    (b -= h),
                    (h += b * 4294967296);
                }
                return (h >>> 0) * 23283064365386963e-26;
              };
            return m;
          }
          i && i.exports ? (i.exports = f) : (this.alea = f);
        })(eE, t);
      })(fs)),
    fs.exports
  );
}
var ds = { exports: {} },
  rE = ds.exports,
  Ny;
function iE() {
  return (
    Ny ||
      ((Ny = 1),
      (function (t) {
        (function (r, i, a) {
          function u(d) {
            var h = this,
              m = "";
            (h.x = 0),
              (h.y = 0),
              (h.z = 0),
              (h.w = 0),
              (h.next = function () {
                var y = h.x ^ (h.x << 11);
                return (
                  (h.x = h.y),
                  (h.y = h.z),
                  (h.z = h.w),
                  (h.w ^= (h.w >>> 19) ^ y ^ (y >>> 8))
                );
              }),
              d === (d | 0) ? (h.x = d) : (m += d);
            for (var g = 0; g < m.length + 64; g++)
              (h.x ^= m.charCodeAt(g) | 0), h.next();
          }
          function s(d, h) {
            return (h.x = d.x), (h.y = d.y), (h.z = d.z), (h.w = d.w), h;
          }
          function f(d, h) {
            var m = new u(d),
              g = h && h.state,
              y = function () {
                return (m.next() >>> 0) / 4294967296;
              };
            return (
              (y.double = function () {
                do
                  var b = m.next() >>> 11,
                    v = (m.next() >>> 0) / 4294967296,
                    O = (b + v) / (1 << 21);
                while (O === 0);
                return O;
              }),
              (y.int32 = m.next),
              (y.quick = y),
              g &&
                (typeof g == "object" && s(g, m),
                (y.state = function () {
                  return s(m, {});
                })),
              y
            );
          }
          i && i.exports ? (i.exports = f) : (this.xor128 = f);
        })(rE, t);
      })(ds)),
    ds.exports
  );
}
var ps = { exports: {} },
  lE = ps.exports,
  By;
function aE() {
  return (
    By ||
      ((By = 1),
      (function (t) {
        (function (r, i, a) {
          function u(d) {
            var h = this,
              m = "";
            (h.next = function () {
              var y = h.x ^ (h.x >>> 2);
              return (
                (h.x = h.y),
                (h.y = h.z),
                (h.z = h.w),
                (h.w = h.v),
                ((h.d = (h.d + 362437) | 0) +
                  (h.v = h.v ^ (h.v << 4) ^ (y ^ (y << 1)))) |
                  0
              );
            }),
              (h.x = 0),
              (h.y = 0),
              (h.z = 0),
              (h.w = 0),
              (h.v = 0),
              d === (d | 0) ? (h.x = d) : (m += d);
            for (var g = 0; g < m.length + 64; g++)
              (h.x ^= m.charCodeAt(g) | 0),
                g == m.length && (h.d = (h.x << 10) ^ (h.x >>> 4)),
                h.next();
          }
          function s(d, h) {
            return (
              (h.x = d.x),
              (h.y = d.y),
              (h.z = d.z),
              (h.w = d.w),
              (h.v = d.v),
              (h.d = d.d),
              h
            );
          }
          function f(d, h) {
            var m = new u(d),
              g = h && h.state,
              y = function () {
                return (m.next() >>> 0) / 4294967296;
              };
            return (
              (y.double = function () {
                do
                  var b = m.next() >>> 11,
                    v = (m.next() >>> 0) / 4294967296,
                    O = (b + v) / (1 << 21);
                while (O === 0);
                return O;
              }),
              (y.int32 = m.next),
              (y.quick = y),
              g &&
                (typeof g == "object" && s(g, m),
                (y.state = function () {
                  return s(m, {});
                })),
              y
            );
          }
          i && i.exports ? (i.exports = f) : (this.xorwow = f);
        })(lE, t);
      })(ps)),
    ps.exports
  );
}
var hs = { exports: {} },
  oE = hs.exports,
  Ly;
function uE() {
  return (
    Ly ||
      ((Ly = 1),
      (function (t) {
        (function (r, i, a) {
          function u(d) {
            var h = this;
            h.next = function () {
              var g = h.x,
                y = h.i,
                b,
                v;
              return (
                (b = g[y]),
                (b ^= b >>> 7),
                (v = b ^ (b << 24)),
                (b = g[(y + 1) & 7]),
                (v ^= b ^ (b >>> 10)),
                (b = g[(y + 3) & 7]),
                (v ^= b ^ (b >>> 3)),
                (b = g[(y + 4) & 7]),
                (v ^= b ^ (b << 7)),
                (b = g[(y + 7) & 7]),
                (b = b ^ (b << 13)),
                (v ^= b ^ (b << 9)),
                (g[y] = v),
                (h.i = (y + 1) & 7),
                v
              );
            };
            function m(g, y) {
              var b,
                v = [];
              if (y === (y | 0)) v[0] = y;
              else
                for (y = "" + y, b = 0; b < y.length; ++b)
                  v[b & 7] =
                    (v[b & 7] << 15) ^
                    ((y.charCodeAt(b) + v[(b + 1) & 7]) << 13);
              for (; v.length < 8; ) v.push(0);
              for (b = 0; b < 8 && v[b] === 0; ++b);
              for (
                b == 8 ? (v[7] = -1) : v[b], g.x = v, g.i = 0, b = 256;
                b > 0;
                --b
              )
                g.next();
            }
            m(h, d);
          }
          function s(d, h) {
            return (h.x = d.x.slice()), (h.i = d.i), h;
          }
          function f(d, h) {
            d == null && (d = +new Date());
            var m = new u(d),
              g = h && h.state,
              y = function () {
                return (m.next() >>> 0) / 4294967296;
              };
            return (
              (y.double = function () {
                do
                  var b = m.next() >>> 11,
                    v = (m.next() >>> 0) / 4294967296,
                    O = (b + v) / (1 << 21);
                while (O === 0);
                return O;
              }),
              (y.int32 = m.next),
              (y.quick = y),
              g &&
                (g.x && s(g, m),
                (y.state = function () {
                  return s(m, {});
                })),
              y
            );
          }
          i && i.exports ? (i.exports = f) : (this.xorshift7 = f);
        })(oE, t);
      })(hs)),
    hs.exports
  );
}
var ms = { exports: {} },
  sE = ms.exports,
  Uy;
function cE() {
  return (
    Uy ||
      ((Uy = 1),
      (function (t) {
        (function (r, i, a) {
          function u(d) {
            var h = this;
            h.next = function () {
              var g = h.w,
                y = h.X,
                b = h.i,
                v,
                O;
              return (
                (h.w = g = (g + 1640531527) | 0),
                (O = y[(b + 34) & 127]),
                (v = y[(b = (b + 1) & 127)]),
                (O ^= O << 13),
                (v ^= v << 17),
                (O ^= O >>> 15),
                (v ^= v >>> 12),
                (O = y[b] = O ^ v),
                (h.i = b),
                (O + (g ^ (g >>> 16))) | 0
              );
            };
            function m(g, y) {
              var b,
                v,
                O,
                T,
                L,
                D = [],
                G = 128;
              for (
                y === (y | 0)
                  ? ((v = y), (y = null))
                  : ((y = y + "\0"), (v = 0), (G = Math.max(G, y.length))),
                  O = 0,
                  T = -32;
                T < G;
                ++T
              )
                y && (v ^= y.charCodeAt((T + 32) % y.length)),
                  T === 0 && (L = v),
                  (v ^= v << 10),
                  (v ^= v >>> 15),
                  (v ^= v << 4),
                  (v ^= v >>> 13),
                  T >= 0 &&
                    ((L = (L + 1640531527) | 0),
                    (b = D[T & 127] ^= v + L),
                    (O = b == 0 ? O + 1 : 0));
              for (
                O >= 128 && (D[((y && y.length) || 0) & 127] = -1),
                  O = 127,
                  T = 512;
                T > 0;
                --T
              )
                (v = D[(O + 34) & 127]),
                  (b = D[(O = (O + 1) & 127)]),
                  (v ^= v << 13),
                  (b ^= b << 17),
                  (v ^= v >>> 15),
                  (b ^= b >>> 12),
                  (D[O] = v ^ b);
              (g.w = L), (g.X = D), (g.i = O);
            }
            m(h, d);
          }
          function s(d, h) {
            return (h.i = d.i), (h.w = d.w), (h.X = d.X.slice()), h;
          }
          function f(d, h) {
            d == null && (d = +new Date());
            var m = new u(d),
              g = h && h.state,
              y = function () {
                return (m.next() >>> 0) / 4294967296;
              };
            return (
              (y.double = function () {
                do
                  var b = m.next() >>> 11,
                    v = (m.next() >>> 0) / 4294967296,
                    O = (b + v) / (1 << 21);
                while (O === 0);
                return O;
              }),
              (y.int32 = m.next),
              (y.quick = y),
              g &&
                (g.X && s(g, m),
                (y.state = function () {
                  return s(m, {});
                })),
              y
            );
          }
          i && i.exports ? (i.exports = f) : (this.xor4096 = f);
        })(sE, t);
      })(ms)),
    ms.exports
  );
}
var gs = { exports: {} },
  fE = gs.exports,
  jy;
function dE() {
  return (
    jy ||
      ((jy = 1),
      (function (t) {
        (function (r, i, a) {
          function u(d) {
            var h = this,
              m = "";
            (h.next = function () {
              var y = h.b,
                b = h.c,
                v = h.d,
                O = h.a;
              return (
                (y = (y << 25) ^ (y >>> 7) ^ b),
                (b = (b - v) | 0),
                (v = (v << 24) ^ (v >>> 8) ^ O),
                (O = (O - y) | 0),
                (h.b = y = (y << 20) ^ (y >>> 12) ^ b),
                (h.c = b = (b - v) | 0),
                (h.d = (v << 16) ^ (b >>> 16) ^ O),
                (h.a = (O - y) | 0)
              );
            }),
              (h.a = 0),
              (h.b = 0),
              (h.c = -1640531527),
              (h.d = 1367130551),
              d === Math.floor(d)
                ? ((h.a = (d / 4294967296) | 0), (h.b = d | 0))
                : (m += d);
            for (var g = 0; g < m.length + 20; g++)
              (h.b ^= m.charCodeAt(g) | 0), h.next();
          }
          function s(d, h) {
            return (h.a = d.a), (h.b = d.b), (h.c = d.c), (h.d = d.d), h;
          }
          function f(d, h) {
            var m = new u(d),
              g = h && h.state,
              y = function () {
                return (m.next() >>> 0) / 4294967296;
              };
            return (
              (y.double = function () {
                do
                  var b = m.next() >>> 11,
                    v = (m.next() >>> 0) / 4294967296,
                    O = (b + v) / (1 << 21);
                while (O === 0);
                return O;
              }),
              (y.int32 = m.next),
              (y.quick = y),
              g &&
                (typeof g == "object" && s(g, m),
                (y.state = function () {
                  return s(m, {});
                })),
              y
            );
          }
          i && i.exports ? (i.exports = f) : (this.tychei = f);
        })(fE, t);
      })(gs)),
    gs.exports
  );
}
var ys = { exports: {} };
const pE = {},
  hE = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: pE },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  mE = zw(hE);
var gE = ys.exports,
  Hy;
function yE() {
  return (
    Hy ||
      ((Hy = 1),
      (function (t) {
        (function (r, i, a) {
          var u = 256,
            s = 6,
            f = 52,
            d = "random",
            h = a.pow(u, s),
            m = a.pow(2, f),
            g = m * 2,
            y = u - 1,
            b;
          function v(H, R, k) {
            var Q = [];
            R = R == !0 ? { entropy: !0 } : R || {};
            var C = D(L(R.entropy ? [H, $(i)] : H ?? G(), 3), Q),
              U = new O(Q),
              z = function () {
                for (var q = U.g(s), w = h, B = 0; q < m; )
                  (q = (q + B) * u), (w *= u), (B = U.g(1));
                for (; q >= g; ) (q /= 2), (w /= 2), (B >>>= 1);
                return (q + B) / w;
              };
            return (
              (z.int32 = function () {
                return U.g(4) | 0;
              }),
              (z.quick = function () {
                return U.g(4) / 4294967296;
              }),
              (z.double = z),
              D($(U.S), i),
              (
                R.pass ||
                k ||
                function (q, w, B, N) {
                  return (
                    N &&
                      (N.S && T(N, U),
                      (q.state = function () {
                        return T(U, {});
                      })),
                    B ? ((a[d] = q), w) : q
                  );
                }
              )(z, C, "global" in R ? R.global : this == a, R.state)
            );
          }
          function O(H) {
            var R,
              k = H.length,
              Q = this,
              C = 0,
              U = (Q.i = Q.j = 0),
              z = (Q.S = []);
            for (k || (H = [k++]); C < u; ) z[C] = C++;
            for (C = 0; C < u; C++)
              (z[C] = z[(U = y & (U + H[C % k] + (R = z[C])))]), (z[U] = R);
            (Q.g = function (q) {
              for (var w, B = 0, N = Q.i, V = Q.j, _ = Q.S; q--; )
                (w = _[(N = y & (N + 1))]),
                  (B =
                    B * u +
                    _[y & ((_[N] = _[(V = y & (V + w))]) + (_[V] = w))]);
              return (Q.i = N), (Q.j = V), B;
            })(u);
          }
          function T(H, R) {
            return (R.i = H.i), (R.j = H.j), (R.S = H.S.slice()), R;
          }
          function L(H, R) {
            var k = [],
              Q = typeof H,
              C;
            if (R && Q == "object")
              for (C in H)
                try {
                  k.push(L(H[C], R - 1));
                } catch {}
            return k.length ? k : Q == "string" ? H : H + "\0";
          }
          function D(H, R) {
            for (var k = H + "", Q, C = 0; C < k.length; )
              R[y & C] = y & ((Q ^= R[y & C] * 19) + k.charCodeAt(C++));
            return $(R);
          }
          function G() {
            try {
              var H;
              return (
                b && (H = b.randomBytes)
                  ? (H = H(u))
                  : ((H = new Uint8Array(u)),
                    (r.crypto || r.msCrypto).getRandomValues(H)),
                $(H)
              );
            } catch {
              var R = r.navigator,
                k = R && R.plugins;
              return [+new Date(), r, k, r.screen, $(i)];
            }
          }
          function $(H) {
            return String.fromCharCode.apply(0, H);
          }
          if ((D(a.random(), i), t.exports)) {
            t.exports = v;
            try {
              b = mE;
            } catch {}
          } else a["seed" + d] = v;
        })(typeof self < "u" ? self : gE, [], Math);
      })(ys)),
    ys.exports
  );
}
var Rd, qy;
function vE() {
  if (qy) return Rd;
  qy = 1;
  var t = nE(),
    r = iE(),
    i = aE(),
    a = uE(),
    u = cE(),
    s = dE(),
    f = yE();
  return (
    (f.alea = t),
    (f.xor128 = r),
    (f.xorwow = i),
    (f.xorshift7 = a),
    (f.xor4096 = u),
    (f.tychei = s),
    (Rd = f),
    Rd
  );
}
var bE = vE();
const Wv = Il(bE),
  Jv = eb([
    0, 1, 1, 3, 0, 1, 2, 1, 0, 1, 1, 2, 1, 4, 0, 1, 1, 4, 3, 4, 0, 1, 1, 1, 1,
    1,
  ]),
  tb = eb([
    2, 0, 0, 0, 3, 0, 0, 0, 2, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0,
    0,
  ]);
window.vowelList = tb;
window.consList = Jv;
function eb(t) {
  const r = [];
  for (let i = 0; i < t.length; i++) {
    const a = String.fromCharCode(97 + i);
    for (let u = 0; u < t[i]; u++) r.push(a);
  }
  return r;
}
function xE(t, r) {
  const i = Wv(`${r}`);
  t = [...t];
  let a = t.length;
  for (; a != 0; ) {
    const u = Math.floor(i() * a);
    a--, ([t[a], t[u]] = [t[u], t[a]]);
  }
  return t;
}
const SE = {
    a: 0,
    b: 2,
    c: 2,
    d: 1,
    e: 0,
    f: 2,
    g: 1,
    h: 2,
    i: 0,
    j: 4,
    k: 3,
    l: 0,
    m: 2,
    n: 0,
    o: 0,
    p: 2,
    q: 5,
    r: 0,
    s: 0,
    t: 0,
    u: 0,
    v: 3,
    w: 3,
    x: 4,
    y: 3,
    z: 5,
  },
  wE = [1, 2, 3, 4, 5, 6],
  nb = {
    bags: [tb, Jv],
    letterBonusTiers: SE,
    letterBonusTierValues: wE,
    minWordLength: 1,
    initialTileBank: 25,
    tileRecharge: 10,
    maxTileBank: 50,
    dumpCost: 1,
    wildCost: 3,
    missPenalty: 0,
    wordStrikes: 0,
    maxWildsPerWord: 999,
    unusedTileBonus: 2,
    leftTiles: 2,
    rightTiles: 2,
    previewTiles: 3,
    wildCadence: 12,
    firstWildCadence: 3,
    hasStarterWord: 1,
    scoringSystem: "balatro",
    lengthScores: [1, 1, 1, 1, 2, 2, 2, 3],
    goalScores: [40, 60, 80, 100, 120, 140, 160, 160, 160, 160, 160, 200],
  };
function EE() {
  const t = new URLSearchParams(window.location.search),
    r = JSON.parse(JSON.stringify(nb));
  for (const [i, a] of t.entries()) {
    if (i.length === 1) {
      const u = parseInt(a);
      if (isNaN(u)) continue;
      r.letterBonuses[i] = u;
      continue;
    }
    if (i === "seed") {
      r.seed = a;
      continue;
    }
    if (
      i === "lengthScores" ||
      i === "goalScores" ||
      i === "letterBonusTierValues"
    ) {
      r[i] = a.split(",").map((u) => parseInt(u));
      continue;
    }
    if (i === "leftBag") {
      r.bags[0] = a.split("");
      continue;
    }
    if (i === "rightBag") {
      r.bags[1] = a.split("");
      continue;
    }
    if (a.length > 0 && !isNaN(parseInt(a))) {
      r[i] = parseInt(a);
      continue;
    }
  }
  return r;
}
class TE {
  goalScores;
  endlessGoalInterval;
  constructor(r) {
    (this.goalScores = AE(r)), (this.endlessGoalInterval = r[r.length - 1]);
  }
  getLevel(r) {
    if (r >= this.goalScores[this.goalScores.length - 1]) {
      const i = r - this.goalScores[this.goalScores.length - 1],
        a = Math.floor(i / this.endlessGoalInterval);
      return this.goalScores.length + a;
    } else
      for (let i = this.goalScores.length - 1; i >= 0; i--)
        if (r >= this.goalScores[i]) return i + 1;
    return 0;
  }
  getLevelBounds(r) {
    const i = this.getLevel(r);
    if (i < this.goalScores.length)
      return { last: this.goalScores[i - 1] ?? 0, next: this.goalScores[i] };
    {
      const a = i - this.goalScores.length + 1,
        u =
          this.goalScores[this.goalScores.length - 1] +
          a * this.endlessGoalInterval;
      return { last: u - this.endlessGoalInterval, next: u };
    }
  }
}
function AE(t) {
  t = [...t];
  for (let r = 0; r < t.length; r++) t[r] += t[r - 1] ?? 0;
  return t;
}
let Py = 1;
function Cs() {
  const t = `${Py}`;
  return (Py += 1), t;
}
const $y = [0, 0, 1, 2];
function OE(t) {
  const r = [0, 1, 2],
    i = (d) => r[$y[d]],
    a = Vy[Math.floor(t.random() * Vy.length)];
  for (let d = 0; d < a.length; d++) {
    const h = Cs();
    (t.tileMap[h] = {
      kind: "normal",
      value: a.charAt(d),
      pointValue: a.charAt(d),
    }),
      t.words[i(d)].tiles.push(h);
  }
  const u = Hl(a.charAt(a.length - 1)),
    s = u[Math.floor(t.random() * Math.min(u.length, 3))],
    f = Cs();
  (t.tileMap[f] = { kind: "normal", value: s, pointValue: s }),
    t.words[i($y.length - 1)].tiles.push(f);
}
const Vy = [
    "able",
    "also",
    "area",
    "atom",
    "back",
    "ball",
    "bank",
    "base",
    "bear",
    "beat",
    "best",
    "bird",
    "blow",
    "blue",
    "boat",
    "body",
    "bone",
    "book",
    "both",
    "burn",
    "busy",
    "came",
    "care",
    "case",
    "city",
    "cold",
    "come",
    "copy",
    "cost",
    "crop",
    "dark",
    "deep",
    "does",
    "done",
    "door",
    "draw",
    "drop",
    "face",
    "fact",
    "fair",
    "farm",
    "fast",
    "felt",
    "find",
    "fine",
    "fire",
    "fish",
    "flat",
    "flow",
    "form",
    "four",
    "from",
    "game",
    "girl",
    "gold",
    "gone",
    "grow",
    "hair",
    "half",
    "hand",
    "head",
    "hear",
    "heat",
    "help",
    "hold",
    "hole",
    "home",
    "hope",
    "hour",
    "hunt",
    "lady",
    "land",
    "last",
    "late",
    "lead",
    "line",
    "list",
    "lone",
    "long",
    "lost",
    "loud",
    "made",
    "main",
    "many",
    "mark",
    "mean",
    "mile",
    "milk",
    "mind",
    "miss",
    "more",
    "most",
    "much",
    "must",
    "name",
    "near",
    "note",
    "pair",
    "part",
    "past",
    "pick",
    "plan",
    "play",
    "port",
    "pose",
    "push",
    "race",
    "rail",
    "rain",
    "read",
    "real",
    "rest",
    "ride",
    "ring",
    "rise",
    "road",
    "rock",
    "rule",
    "said",
    "same",
    "sand",
    "self",
    "sent",
    "ship",
    "show",
    "side",
    "sing",
    "slow",
    "snow",
    "soil",
    "some",
    "song",
    "star",
    "stay",
    "step",
    "stop",
    "such",
    "sure",
    "tail",
    "talk",
    "team",
    "test",
    "this",
    "time",
    "tiny",
    "tire",
    "told",
    "trip",
    "true",
    "turn",
    "type",
    "wait",
    "walk",
    "want",
    "warm",
    "wear",
    "went",
    "were",
    "west",
    "when",
    "wide",
    "wild",
    "wind",
    "wire",
    "wish",
    "word",
    "work",
    "yard",
    "year",
  ],
  CE = 40,
  kE = 3;
function Yy(t) {
  Gy(t, 0), Gy(t, 1);
}
function Gy(t, r) {
  const i = t.bags[r];
  for (; i.length < CE; ) {
    const a = t.settings.bags[r],
      u = xE(a, t.random());
    for (const s of u) {
      const f = Cs();
      i.push(f), (t.tileMap[f] = { kind: "normal", value: s, pointValue: s });
    }
  }
}
const nn = jp()(
  Pp((t) => ({
    settings: nb,
    score: 0,
    level: 0,
    lastLevelScore: 0,
    nextLevelScore: 0,
    completedWords: [],
    tileMap: {},
    words: [],
    bags: [],
    trashTiles: [],
    wildCounter: 0,
    goals: [],
    tileBank: 0,
    dumpPool: 0,
    isGameOver: !1,
    showHand: !1,
    seed: "",
    random: () => 0,
    init: async (r) => (
      await D2,
      t((i) => {
        (i.settings = { ...r }),
          (i.seed = i.settings.seed ?? `${Math.floor(Math.random() * 1e6)}`),
          (i.random = Wv(i.seed)),
          (i.nextLevelScore = i.settings.goalScores[0]),
          (i.tileMap = {}),
          (i.bags = [[], []]),
          Yy(i),
          (i.words = []);
        for (let a = 0; a < kE; a++)
          i.words.push({
            tiles: [],
            isLocked: !1,
            strikes: 0,
            currentScore: 0,
            currentLength: 0,
            currentMultiplier: 0,
            maxWordLength: 0,
          });
        (i.tileBank = r.initialTileBank),
          i.settings.hasStarterWord ? OE(i) : (i.showHand = !0);
      })
    ),
    updateTile: (r, i) =>
      t((a) => {
        a.tileMap[r].value = i;
        for (let u = 0; u < a.words.length; u++)
          a.words[u].tiles.includes(r) && Ti(a, u);
        Fa(a);
      }),
    addToWord: (r, i) =>
      t((a) => {
        if (a.words[i].isLocked || a.words[i].tiles.includes(r)) return;
        const u = a.tileMap[r],
          s = ks(a, i);
        if (
          !(
            Hl(s, a.settings.minWordLength).includes(u.value) ||
            (u.kind === "wild" && u.value === ".")
          )
        )
          if (a.words.filter((d) => d.tiles.includes(r)).length > 0) {
            (a.words[i].lastRejectedTileId = { id: r }),
              a.showHand && ((a.tileBank -= a.settings.missPenalty), Md(a, i)),
              Fa(a);
            return;
          } else {
            (a.tileBank -= a.settings.missPenalty),
              (a.words[i].lastRejectedTileId = { id: r }),
              Md(a, i),
              Fa(a);
            return;
          }
        for (let d = 0; d < a.bags.length; d++) {
          const h = a.bags[d],
            m = h.indexOf(r);
          if (m !== -1) {
            const g = d === 0 ? a.settings.leftTiles : a.settings.rightTiles;
            (h[m] = h[g]), h.splice(g, 1), zE(a, d), (a.tileBank -= 1);
          }
        }
        if (u.kind === "wild") {
          if (
            a.words[i].tiles.filter((h) => a.tileMap[h].kind === "wild")
              .length >= a.settings.maxWildsPerWord
          ) {
            a.words[i].lastRejectedTileId = { id: r };
            return;
          }
          if (Hl(ks(a, i)).length === 0) {
            (a.words[i].lastRejectedTileId = { id: r }), Md(a, i);
            return;
          }
        }
        for (let d = 0; d < a.words.length; d++) {
          const h = a.words[d],
            m = h.tiles.indexOf(r);
          m !== -1 && (h.tiles.splice(m, 1), Ti(a, d));
        }
        a.words[i].tiles.push(r), Ti(a, i), Yy(a), Fa(a);
      }),
    backspaceWord: (r) =>
      t((i) => {
        const u = i.words[r].tiles.pop();
        u && (i.trashTiles.push(u), Ti(i, r));
      }),
    submitWord: (r) =>
      t((i) => {
        _E(i, r) && ((i.showHand = !0), Ti(i, 0), Ti(i, 1), Ti(i, 2)), Fa(i);
      }),
  }))
);
function _E(t, r) {
  const i = t.words[r];
  if (i.tiles.length === 0 || i.tiles.length !== i.maxWordLength) return !1;
  const a = ks(t, r);
  t.score += i.currentScore;
  let u = 0;
  const s = () => {
    const f = ME(t),
      d = Math.min(f.getLevel(t.score), t.level + 1);
    if (t.level !== d) {
      t.tileBank += t.settings.tileRecharge;
      const h = Math.max(t.tileBank - t.settings.maxTileBank, 0);
      (t.tileBank = Math.min(t.tileBank, t.settings.maxTileBank)),
        (t.level = d);
      const m = f.getLevelBounds(t.score);
      (t.nextLevelScore = m.next),
        (t.lastLevelScore = m.last),
        (t.score += h * t.settings.unusedTileBonus),
        (u += h * t.settings.unusedTileBonus),
        s();
    }
  };
  return (
    s(),
    (i.lastScore = { text: `+${i.currentScore}`, subtext: u ? `+${u}` : "" }),
    t.completedWords.push({
      word: a,
      score: i.currentScore,
      wilds: i.tiles
        .map((f, d) => (t.tileMap[f].kind === "wild" ? d : null))
        .filter((f) => f !== null),
    }),
    (i.tiles = []),
    (i.isLocked = !1),
    (i.currentScore = 0),
    (i.currentLength = 0),
    (i.currentMultiplier = 0),
    (i.strikes = 0),
    !0
  );
}
function Ti(t, r) {
  const i = ks(t, r).replaceAll(".", ""),
    a = Hl(i),
    u = Gv(i),
    s = u[0]?.length ?? 0;
  t.words[r].maxWordLength = s >= t.settings.minWordLength ? s : 0;
  const f = t.words[r].tiles
    .map((m) => t.tileMap[m].pointValue)
    .map(
      (m) =>
        t.settings.letterBonusTierValues[t.settings.letterBonusTiers[m]] ?? 0
    )
    .reduce((m, g) => m + g, 0);
  let d = 0;
  for (let m = 0; m < t.words[r].tiles.length; m++)
    d +=
      t.settings.lengthScores[Math.min(m, t.settings.lengthScores.length - 1)];
  const h = t.settings.scoringSystem === "balatro" ? d * f : d + f;
  if (
    ((t.words[r].currentLength = d),
    (t.words[r].currentMultiplier = f),
    (t.words[r].currentScore = h),
    a.length === 0)
  ) {
    const m =
      u.length === 0 || u[0].length < t.settings.minWordLength ? "" : u[0];
    if (m.length === i.length) return;
    const g = t.words[r].tiles.map((y) => t.tileMap[y]);
    for (let y = 0; y < g.length; y++)
      m[y] ? (g[y].value = m[y]) : (g[y].isInvalid = !0);
    t.words[r].isLocked = !0;
  }
}
function ks(t, r) {
  return t.words[r].tiles
    .map((a) => t.tileMap[a])
    .map((a) => a.value)
    .join("");
}
function Fa(t) {
  t.isGameOver = RE(t);
}
function RE(t) {
  return t.words.filter(
    (r) =>
      (r.tiles.length > 0 &&
        r.tiles.length === r.maxWordLength &&
        r.tiles.length >= t.settings.minWordLength) ||
      r.tiles.filter((i) => t.tileMap[i].value === ".").length > 0
  ).length > 0
    ? !1
    : t.tileBank <= 0;
}
function ME(t) {
  return new TE(t.settings.goalScores);
}
function zE(t, r) {
  if (
    t.wildCounter < t.settings.firstWildCadence ||
    (t.wildCounter - t.settings.firstWildCadence) % t.settings.wildCadence !== 0
  ) {
    t.wildCounter += 1;
    return;
  }
  const i = 2 + (r === 0 ? t.settings.leftTiles : t.settings.rightTiles),
    a = t.bags[r],
    u = a[i],
    s = Cs();
  (t.tileMap[s] = t.tileMap[u]),
    a.splice(i + 1, 0, s),
    (t.tileMap[u] = { kind: "wild", value: ".", pointValue: "." }),
    (t.wildCounter += 1);
}
function Md(t, r) {
  if (t.settings.wordStrikes === 0) return;
  const i = t.words[r];
  (i.strikes += 1),
    i.strikes >= t.settings.wordStrikes &&
      ((i.strikes = 0),
      (i.tiles = []),
      (i.currentScore = 0),
      (i.maxWordLength = 0),
      (i.isLocked = !1));
}
const _o = jp()(
  Pp((t) => ({
    isDragging: !1,
    pointerDelta: { x: 0, y: 0 },
    setSelectedTileId: (r) =>
      t((i) => {
        (i.selectedTileId = r),
          (i.pointerDelta = { x: 0, y: 0 }),
          r && (i.isDragging = !0);
      }),
    onPointerUp: () => (
      t((r) => {
        (r.selectedTileId = void 0), (r.pointerDelta = { x: 0, y: 0 });
      }),
      !1
    ),
    setPointerDelta: (r, i) =>
      t((a) => {
        a.isDragging && ((a.pointerDelta.x += r), (a.pointerDelta.y += i));
      }),
    wordShades: [0, 0, 0],
    moveWordShade: (r, i) =>
      t((a) => {
        a.wordShades[r] = i;
      }),
  }))
);
function DE(t, r) {
  const i = r.getBoundingClientRect();
  return !(
    t.clientX < i.left ||
    t.clientX > i.left + i.width ||
    t.clientY < i.top ||
    t.clientY > i.top + i.height
  );
}
function NE() {
  const { addToWord: t } = nn(),
    {
      selectedTileId: r,
      setSelectedTileId: i,
      setPointerDelta: a,
      onPointerUp: u,
    } = _o();
  tt.useEffect(() => {
    if (!r) return;
    let s = null;
    const f = (h) => {
        s !== null && a(h.clientX - s.x, h.clientY - s.y),
          (s = { x: h.clientX, y: h.clientY });
      },
      d = (h) => {
        if (u()) return;
        const g = Array.from(document.querySelectorAll(".word"));
        for (let y = 0; y < g.length; y++) DE(h, g[y]) && (t(r, y), i(void 0));
      };
    return (
      window.addEventListener("pointermove", f),
      window.addEventListener("pointerup", d),
      () => {
        window.removeEventListener("pointermove", f),
          window.removeEventListener("pointerup", d);
      }
    );
  }, [t, u, r, a, i]);
}
function BE(t, r) {
  const i = {};
  return (t[t.length - 1] === "" ? [...t, ""] : t)
    .join((i.padRight ? " " : "") + "," + (i.padLeft === !1 ? "" : " "))
    .trim();
}
const LE = /^[$_\p{ID_Start}][$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,
  UE = /^[$_\p{ID_Start}][-$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,
  jE = {};
function Xy(t, r) {
  return (jE.jsx ? UE : LE).test(t);
}
const HE = /[ \t\n\f\r]/g;
function qE(t) {
  return typeof t == "object" ? (t.type === "text" ? Qy(t.value) : !1) : Qy(t);
}
function Qy(t) {
  return t.replace(HE, "") === "";
}
class Ro {
  constructor(r, i, a) {
    (this.normal = i), (this.property = r), a && (this.space = a);
  }
}
Ro.prototype.normal = {};
Ro.prototype.property = {};
Ro.prototype.space = void 0;
function rb(t, r) {
  const i = {},
    a = {};
  for (const u of t) Object.assign(i, u.property), Object.assign(a, u.normal);
  return new Ro(i, a, r);
}
function up(t) {
  return t.toLowerCase();
}
class hn {
  constructor(r, i) {
    (this.attribute = i), (this.property = r);
  }
}
hn.prototype.attribute = "";
hn.prototype.booleanish = !1;
hn.prototype.boolean = !1;
hn.prototype.commaOrSpaceSeparated = !1;
hn.prototype.commaSeparated = !1;
hn.prototype.defined = !1;
hn.prototype.mustUseProperty = !1;
hn.prototype.number = !1;
hn.prototype.overloadedBoolean = !1;
hn.prototype.property = "";
hn.prototype.spaceSeparated = !1;
hn.prototype.space = void 0;
let PE = 0;
const Ut = Ui(),
  Ne = Ui(),
  sp = Ui(),
  ct = Ui(),
  pe = Ui(),
  Bl = Ui(),
  wn = Ui();
function Ui() {
  return 2 ** ++PE;
}
const cp = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        boolean: Ut,
        booleanish: Ne,
        commaOrSpaceSeparated: wn,
        commaSeparated: Bl,
        number: ct,
        overloadedBoolean: sp,
        spaceSeparated: pe,
      },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  zd = Object.keys(cp);
class $p extends hn {
  constructor(r, i, a, u) {
    let s = -1;
    if ((super(r, i), Iy(this, "space", u), typeof a == "number"))
      for (; ++s < zd.length; ) {
        const f = zd[s];
        Iy(this, zd[s], (a & cp[f]) === cp[f]);
      }
  }
}
$p.prototype.defined = !0;
function Iy(t, r, i) {
  i && (t[r] = i);
}
function Kl(t) {
  const r = {},
    i = {};
  for (const [a, u] of Object.entries(t.properties)) {
    const s = new $p(a, t.transform(t.attributes || {}, a), u, t.space);
    t.mustUseProperty &&
      t.mustUseProperty.includes(a) &&
      (s.mustUseProperty = !0),
      (r[a] = s),
      (i[up(a)] = a),
      (i[up(s.attribute)] = a);
  }
  return new Ro(r, i, t.space);
}
const ib = Kl({
  properties: {
    ariaActiveDescendant: null,
    ariaAtomic: Ne,
    ariaAutoComplete: null,
    ariaBusy: Ne,
    ariaChecked: Ne,
    ariaColCount: ct,
    ariaColIndex: ct,
    ariaColSpan: ct,
    ariaControls: pe,
    ariaCurrent: null,
    ariaDescribedBy: pe,
    ariaDetails: null,
    ariaDisabled: Ne,
    ariaDropEffect: pe,
    ariaErrorMessage: null,
    ariaExpanded: Ne,
    ariaFlowTo: pe,
    ariaGrabbed: Ne,
    ariaHasPopup: null,
    ariaHidden: Ne,
    ariaInvalid: null,
    ariaKeyShortcuts: null,
    ariaLabel: null,
    ariaLabelledBy: pe,
    ariaLevel: ct,
    ariaLive: null,
    ariaModal: Ne,
    ariaMultiLine: Ne,
    ariaMultiSelectable: Ne,
    ariaOrientation: null,
    ariaOwns: pe,
    ariaPlaceholder: null,
    ariaPosInSet: ct,
    ariaPressed: Ne,
    ariaReadOnly: Ne,
    ariaRelevant: null,
    ariaRequired: Ne,
    ariaRoleDescription: pe,
    ariaRowCount: ct,
    ariaRowIndex: ct,
    ariaRowSpan: ct,
    ariaSelected: Ne,
    ariaSetSize: ct,
    ariaSort: null,
    ariaValueMax: ct,
    ariaValueMin: ct,
    ariaValueNow: ct,
    ariaValueText: null,
    role: null,
  },
  transform(t, r) {
    return r === "role" ? r : "aria-" + r.slice(4).toLowerCase();
  },
});
function lb(t, r) {
  return r in t ? t[r] : r;
}
function ab(t, r) {
  return lb(t, r.toLowerCase());
}
const $E = Kl({
    attributes: {
      acceptcharset: "accept-charset",
      classname: "class",
      htmlfor: "for",
      httpequiv: "http-equiv",
    },
    mustUseProperty: ["checked", "multiple", "muted", "selected"],
    properties: {
      abbr: null,
      accept: Bl,
      acceptCharset: pe,
      accessKey: pe,
      action: null,
      allow: null,
      allowFullScreen: Ut,
      allowPaymentRequest: Ut,
      allowUserMedia: Ut,
      alt: null,
      as: null,
      async: Ut,
      autoCapitalize: null,
      autoComplete: pe,
      autoFocus: Ut,
      autoPlay: Ut,
      blocking: pe,
      capture: null,
      charSet: null,
      checked: Ut,
      cite: null,
      className: pe,
      cols: ct,
      colSpan: null,
      content: null,
      contentEditable: Ne,
      controls: Ut,
      controlsList: pe,
      coords: ct | Bl,
      crossOrigin: null,
      data: null,
      dateTime: null,
      decoding: null,
      default: Ut,
      defer: Ut,
      dir: null,
      dirName: null,
      disabled: Ut,
      download: sp,
      draggable: Ne,
      encType: null,
      enterKeyHint: null,
      fetchPriority: null,
      form: null,
      formAction: null,
      formEncType: null,
      formMethod: null,
      formNoValidate: Ut,
      formTarget: null,
      headers: pe,
      height: ct,
      hidden: sp,
      high: ct,
      href: null,
      hrefLang: null,
      htmlFor: pe,
      httpEquiv: pe,
      id: null,
      imageSizes: null,
      imageSrcSet: null,
      inert: Ut,
      inputMode: null,
      integrity: null,
      is: null,
      isMap: Ut,
      itemId: null,
      itemProp: pe,
      itemRef: pe,
      itemScope: Ut,
      itemType: pe,
      kind: null,
      label: null,
      lang: null,
      language: null,
      list: null,
      loading: null,
      loop: Ut,
      low: ct,
      manifest: null,
      max: null,
      maxLength: ct,
      media: null,
      method: null,
      min: null,
      minLength: ct,
      multiple: Ut,
      muted: Ut,
      name: null,
      nonce: null,
      noModule: Ut,
      noValidate: Ut,
      onAbort: null,
      onAfterPrint: null,
      onAuxClick: null,
      onBeforeMatch: null,
      onBeforePrint: null,
      onBeforeToggle: null,
      onBeforeUnload: null,
      onBlur: null,
      onCancel: null,
      onCanPlay: null,
      onCanPlayThrough: null,
      onChange: null,
      onClick: null,
      onClose: null,
      onContextLost: null,
      onContextMenu: null,
      onContextRestored: null,
      onCopy: null,
      onCueChange: null,
      onCut: null,
      onDblClick: null,
      onDrag: null,
      onDragEnd: null,
      onDragEnter: null,
      onDragExit: null,
      onDragLeave: null,
      onDragOver: null,
      onDragStart: null,
      onDrop: null,
      onDurationChange: null,
      onEmptied: null,
      onEnded: null,
      onError: null,
      onFocus: null,
      onFormData: null,
      onHashChange: null,
      onInput: null,
      onInvalid: null,
      onKeyDown: null,
      onKeyPress: null,
      onKeyUp: null,
      onLanguageChange: null,
      onLoad: null,
      onLoadedData: null,
      onLoadedMetadata: null,
      onLoadEnd: null,
      onLoadStart: null,
      onMessage: null,
      onMessageError: null,
      onMouseDown: null,
      onMouseEnter: null,
      onMouseLeave: null,
      onMouseMove: null,
      onMouseOut: null,
      onMouseOver: null,
      onMouseUp: null,
      onOffline: null,
      onOnline: null,
      onPageHide: null,
      onPageShow: null,
      onPaste: null,
      onPause: null,
      onPlay: null,
      onPlaying: null,
      onPopState: null,
      onProgress: null,
      onRateChange: null,
      onRejectionHandled: null,
      onReset: null,
      onResize: null,
      onScroll: null,
      onScrollEnd: null,
      onSecurityPolicyViolation: null,
      onSeeked: null,
      onSeeking: null,
      onSelect: null,
      onSlotChange: null,
      onStalled: null,
      onStorage: null,
      onSubmit: null,
      onSuspend: null,
      onTimeUpdate: null,
      onToggle: null,
      onUnhandledRejection: null,
      onUnload: null,
      onVolumeChange: null,
      onWaiting: null,
      onWheel: null,
      open: Ut,
      optimum: ct,
      pattern: null,
      ping: pe,
      placeholder: null,
      playsInline: Ut,
      popover: null,
      popoverTarget: null,
      popoverTargetAction: null,
      poster: null,
      preload: null,
      readOnly: Ut,
      referrerPolicy: null,
      rel: pe,
      required: Ut,
      reversed: Ut,
      rows: ct,
      rowSpan: ct,
      sandbox: pe,
      scope: null,
      scoped: Ut,
      seamless: Ut,
      selected: Ut,
      shadowRootClonable: Ut,
      shadowRootDelegatesFocus: Ut,
      shadowRootMode: null,
      shape: null,
      size: ct,
      sizes: null,
      slot: null,
      span: ct,
      spellCheck: Ne,
      src: null,
      srcDoc: null,
      srcLang: null,
      srcSet: null,
      start: ct,
      step: null,
      style: null,
      tabIndex: ct,
      target: null,
      title: null,
      translate: null,
      type: null,
      typeMustMatch: Ut,
      useMap: null,
      value: Ne,
      width: ct,
      wrap: null,
      writingSuggestions: null,
      align: null,
      aLink: null,
      archive: pe,
      axis: null,
      background: null,
      bgColor: null,
      border: ct,
      borderColor: null,
      bottomMargin: ct,
      cellPadding: null,
      cellSpacing: null,
      char: null,
      charOff: null,
      classId: null,
      clear: null,
      code: null,
      codeBase: null,
      codeType: null,
      color: null,
      compact: Ut,
      declare: Ut,
      event: null,
      face: null,
      frame: null,
      frameBorder: null,
      hSpace: ct,
      leftMargin: ct,
      link: null,
      longDesc: null,
      lowSrc: null,
      marginHeight: ct,
      marginWidth: ct,
      noResize: Ut,
      noHref: Ut,
      noShade: Ut,
      noWrap: Ut,
      object: null,
      profile: null,
      prompt: null,
      rev: null,
      rightMargin: ct,
      rules: null,
      scheme: null,
      scrolling: Ne,
      standby: null,
      summary: null,
      text: null,
      topMargin: ct,
      valueType: null,
      version: null,
      vAlign: null,
      vLink: null,
      vSpace: ct,
      allowTransparency: null,
      autoCorrect: null,
      autoSave: null,
      disablePictureInPicture: Ut,
      disableRemotePlayback: Ut,
      prefix: null,
      property: null,
      results: ct,
      security: null,
      unselectable: null,
    },
    space: "html",
    transform: ab,
  }),
  VE = Kl({
    attributes: {
      accentHeight: "accent-height",
      alignmentBaseline: "alignment-baseline",
      arabicForm: "arabic-form",
      baselineShift: "baseline-shift",
      capHeight: "cap-height",
      className: "class",
      clipPath: "clip-path",
      clipRule: "clip-rule",
      colorInterpolation: "color-interpolation",
      colorInterpolationFilters: "color-interpolation-filters",
      colorProfile: "color-profile",
      colorRendering: "color-rendering",
      crossOrigin: "crossorigin",
      dataType: "datatype",
      dominantBaseline: "dominant-baseline",
      enableBackground: "enable-background",
      fillOpacity: "fill-opacity",
      fillRule: "fill-rule",
      floodColor: "flood-color",
      floodOpacity: "flood-opacity",
      fontFamily: "font-family",
      fontSize: "font-size",
      fontSizeAdjust: "font-size-adjust",
      fontStretch: "font-stretch",
      fontStyle: "font-style",
      fontVariant: "font-variant",
      fontWeight: "font-weight",
      glyphName: "glyph-name",
      glyphOrientationHorizontal: "glyph-orientation-horizontal",
      glyphOrientationVertical: "glyph-orientation-vertical",
      hrefLang: "hreflang",
      horizAdvX: "horiz-adv-x",
      horizOriginX: "horiz-origin-x",
      horizOriginY: "horiz-origin-y",
      imageRendering: "image-rendering",
      letterSpacing: "letter-spacing",
      lightingColor: "lighting-color",
      markerEnd: "marker-end",
      markerMid: "marker-mid",
      markerStart: "marker-start",
      navDown: "nav-down",
      navDownLeft: "nav-down-left",
      navDownRight: "nav-down-right",
      navLeft: "nav-left",
      navNext: "nav-next",
      navPrev: "nav-prev",
      navRight: "nav-right",
      navUp: "nav-up",
      navUpLeft: "nav-up-left",
      navUpRight: "nav-up-right",
      onAbort: "onabort",
      onActivate: "onactivate",
      onAfterPrint: "onafterprint",
      onBeforePrint: "onbeforeprint",
      onBegin: "onbegin",
      onCancel: "oncancel",
      onCanPlay: "oncanplay",
      onCanPlayThrough: "oncanplaythrough",
      onChange: "onchange",
      onClick: "onclick",
      onClose: "onclose",
      onCopy: "oncopy",
      onCueChange: "oncuechange",
      onCut: "oncut",
      onDblClick: "ondblclick",
      onDrag: "ondrag",
      onDragEnd: "ondragend",
      onDragEnter: "ondragenter",
      onDragExit: "ondragexit",
      onDragLeave: "ondragleave",
      onDragOver: "ondragover",
      onDragStart: "ondragstart",
      onDrop: "ondrop",
      onDurationChange: "ondurationchange",
      onEmptied: "onemptied",
      onEnd: "onend",
      onEnded: "onended",
      onError: "onerror",
      onFocus: "onfocus",
      onFocusIn: "onfocusin",
      onFocusOut: "onfocusout",
      onHashChange: "onhashchange",
      onInput: "oninput",
      onInvalid: "oninvalid",
      onKeyDown: "onkeydown",
      onKeyPress: "onkeypress",
      onKeyUp: "onkeyup",
      onLoad: "onload",
      onLoadedData: "onloadeddata",
      onLoadedMetadata: "onloadedmetadata",
      onLoadStart: "onloadstart",
      onMessage: "onmessage",
      onMouseDown: "onmousedown",
      onMouseEnter: "onmouseenter",
      onMouseLeave: "onmouseleave",
      onMouseMove: "onmousemove",
      onMouseOut: "onmouseout",
      onMouseOver: "onmouseover",
      onMouseUp: "onmouseup",
      onMouseWheel: "onmousewheel",
      onOffline: "onoffline",
      onOnline: "ononline",
      onPageHide: "onpagehide",
      onPageShow: "onpageshow",
      onPaste: "onpaste",
      onPause: "onpause",
      onPlay: "onplay",
      onPlaying: "onplaying",
      onPopState: "onpopstate",
      onProgress: "onprogress",
      onRateChange: "onratechange",
      onRepeat: "onrepeat",
      onReset: "onreset",
      onResize: "onresize",
      onScroll: "onscroll",
      onSeeked: "onseeked",
      onSeeking: "onseeking",
      onSelect: "onselect",
      onShow: "onshow",
      onStalled: "onstalled",
      onStorage: "onstorage",
      onSubmit: "onsubmit",
      onSuspend: "onsuspend",
      onTimeUpdate: "ontimeupdate",
      onToggle: "ontoggle",
      onUnload: "onunload",
      onVolumeChange: "onvolumechange",
      onWaiting: "onwaiting",
      onZoom: "onzoom",
      overlinePosition: "overline-position",
      overlineThickness: "overline-thickness",
      paintOrder: "paint-order",
      panose1: "panose-1",
      pointerEvents: "pointer-events",
      referrerPolicy: "referrerpolicy",
      renderingIntent: "rendering-intent",
      shapeRendering: "shape-rendering",
      stopColor: "stop-color",
      stopOpacity: "stop-opacity",
      strikethroughPosition: "strikethrough-position",
      strikethroughThickness: "strikethrough-thickness",
      strokeDashArray: "stroke-dasharray",
      strokeDashOffset: "stroke-dashoffset",
      strokeLineCap: "stroke-linecap",
      strokeLineJoin: "stroke-linejoin",
      strokeMiterLimit: "stroke-miterlimit",
      strokeOpacity: "stroke-opacity",
      strokeWidth: "stroke-width",
      tabIndex: "tabindex",
      textAnchor: "text-anchor",
      textDecoration: "text-decoration",
      textRendering: "text-rendering",
      transformOrigin: "transform-origin",
      typeOf: "typeof",
      underlinePosition: "underline-position",
      underlineThickness: "underline-thickness",
      unicodeBidi: "unicode-bidi",
      unicodeRange: "unicode-range",
      unitsPerEm: "units-per-em",
      vAlphabetic: "v-alphabetic",
      vHanging: "v-hanging",
      vIdeographic: "v-ideographic",
      vMathematical: "v-mathematical",
      vectorEffect: "vector-effect",
      vertAdvY: "vert-adv-y",
      vertOriginX: "vert-origin-x",
      vertOriginY: "vert-origin-y",
      wordSpacing: "word-spacing",
      writingMode: "writing-mode",
      xHeight: "x-height",
      playbackOrder: "playbackorder",
      timelineBegin: "timelinebegin",
    },
    properties: {
      about: wn,
      accentHeight: ct,
      accumulate: null,
      additive: null,
      alignmentBaseline: null,
      alphabetic: ct,
      amplitude: ct,
      arabicForm: null,
      ascent: ct,
      attributeName: null,
      attributeType: null,
      azimuth: ct,
      bandwidth: null,
      baselineShift: null,
      baseFrequency: null,
      baseProfile: null,
      bbox: null,
      begin: null,
      bias: ct,
      by: null,
      calcMode: null,
      capHeight: ct,
      className: pe,
      clip: null,
      clipPath: null,
      clipPathUnits: null,
      clipRule: null,
      color: null,
      colorInterpolation: null,
      colorInterpolationFilters: null,
      colorProfile: null,
      colorRendering: null,
      content: null,
      contentScriptType: null,
      contentStyleType: null,
      crossOrigin: null,
      cursor: null,
      cx: null,
      cy: null,
      d: null,
      dataType: null,
      defaultAction: null,
      descent: ct,
      diffuseConstant: ct,
      direction: null,
      display: null,
      dur: null,
      divisor: ct,
      dominantBaseline: null,
      download: Ut,
      dx: null,
      dy: null,
      edgeMode: null,
      editable: null,
      elevation: ct,
      enableBackground: null,
      end: null,
      event: null,
      exponent: ct,
      externalResourcesRequired: null,
      fill: null,
      fillOpacity: ct,
      fillRule: null,
      filter: null,
      filterRes: null,
      filterUnits: null,
      floodColor: null,
      floodOpacity: null,
      focusable: null,
      focusHighlight: null,
      fontFamily: null,
      fontSize: null,
      fontSizeAdjust: null,
      fontStretch: null,
      fontStyle: null,
      fontVariant: null,
      fontWeight: null,
      format: null,
      fr: null,
      from: null,
      fx: null,
      fy: null,
      g1: Bl,
      g2: Bl,
      glyphName: Bl,
      glyphOrientationHorizontal: null,
      glyphOrientationVertical: null,
      glyphRef: null,
      gradientTransform: null,
      gradientUnits: null,
      handler: null,
      hanging: ct,
      hatchContentUnits: null,
      hatchUnits: null,
      height: null,
      href: null,
      hrefLang: null,
      horizAdvX: ct,
      horizOriginX: ct,
      horizOriginY: ct,
      id: null,
      ideographic: ct,
      imageRendering: null,
      initialVisibility: null,
      in: null,
      in2: null,
      intercept: ct,
      k: ct,
      k1: ct,
      k2: ct,
      k3: ct,
      k4: ct,
      kernelMatrix: wn,
      kernelUnitLength: null,
      keyPoints: null,
      keySplines: null,
      keyTimes: null,
      kerning: null,
      lang: null,
      lengthAdjust: null,
      letterSpacing: null,
      lightingColor: null,
      limitingConeAngle: ct,
      local: null,
      markerEnd: null,
      markerMid: null,
      markerStart: null,
      markerHeight: null,
      markerUnits: null,
      markerWidth: null,
      mask: null,
      maskContentUnits: null,
      maskUnits: null,
      mathematical: null,
      max: null,
      media: null,
      mediaCharacterEncoding: null,
      mediaContentEncodings: null,
      mediaSize: ct,
      mediaTime: null,
      method: null,
      min: null,
      mode: null,
      name: null,
      navDown: null,
      navDownLeft: null,
      navDownRight: null,
      navLeft: null,
      navNext: null,
      navPrev: null,
      navRight: null,
      navUp: null,
      navUpLeft: null,
      navUpRight: null,
      numOctaves: null,
      observer: null,
      offset: null,
      onAbort: null,
      onActivate: null,
      onAfterPrint: null,
      onBeforePrint: null,
      onBegin: null,
      onCancel: null,
      onCanPlay: null,
      onCanPlayThrough: null,
      onChange: null,
      onClick: null,
      onClose: null,
      onCopy: null,
      onCueChange: null,
      onCut: null,
      onDblClick: null,
      onDrag: null,
      onDragEnd: null,
      onDragEnter: null,
      onDragExit: null,
      onDragLeave: null,
      onDragOver: null,
      onDragStart: null,
      onDrop: null,
      onDurationChange: null,
      onEmptied: null,
      onEnd: null,
      onEnded: null,
      onError: null,
      onFocus: null,
      onFocusIn: null,
      onFocusOut: null,
      onHashChange: null,
      onInput: null,
      onInvalid: null,
      onKeyDown: null,
      onKeyPress: null,
      onKeyUp: null,
      onLoad: null,
      onLoadedData: null,
      onLoadedMetadata: null,
      onLoadStart: null,
      onMessage: null,
      onMouseDown: null,
      onMouseEnter: null,
      onMouseLeave: null,
      onMouseMove: null,
      onMouseOut: null,
      onMouseOver: null,
      onMouseUp: null,
      onMouseWheel: null,
      onOffline: null,
      onOnline: null,
      onPageHide: null,
      onPageShow: null,
      onPaste: null,
      onPause: null,
      onPlay: null,
      onPlaying: null,
      onPopState: null,
      onProgress: null,
      onRateChange: null,
      onRepeat: null,
      onReset: null,
      onResize: null,
      onScroll: null,
      onSeeked: null,
      onSeeking: null,
      onSelect: null,
      onShow: null,
      onStalled: null,
      onStorage: null,
      onSubmit: null,
      onSuspend: null,
      onTimeUpdate: null,
      onToggle: null,
      onUnload: null,
      onVolumeChange: null,
      onWaiting: null,
      onZoom: null,
      opacity: null,
      operator: null,
      order: null,
      orient: null,
      orientation: null,
      origin: null,
      overflow: null,
      overlay: null,
      overlinePosition: ct,
      overlineThickness: ct,
      paintOrder: null,
      panose1: null,
      path: null,
      pathLength: ct,
      patternContentUnits: null,
      patternTransform: null,
      patternUnits: null,
      phase: null,
      ping: pe,
      pitch: null,
      playbackOrder: null,
      pointerEvents: null,
      points: null,
      pointsAtX: ct,
      pointsAtY: ct,
      pointsAtZ: ct,
      preserveAlpha: null,
      preserveAspectRatio: null,
      primitiveUnits: null,
      propagate: null,
      property: wn,
      r: null,
      radius: null,
      referrerPolicy: null,
      refX: null,
      refY: null,
      rel: wn,
      rev: wn,
      renderingIntent: null,
      repeatCount: null,
      repeatDur: null,
      requiredExtensions: wn,
      requiredFeatures: wn,
      requiredFonts: wn,
      requiredFormats: wn,
      resource: null,
      restart: null,
      result: null,
      rotate: null,
      rx: null,
      ry: null,
      scale: null,
      seed: null,
      shapeRendering: null,
      side: null,
      slope: null,
      snapshotTime: null,
      specularConstant: ct,
      specularExponent: ct,
      spreadMethod: null,
      spacing: null,
      startOffset: null,
      stdDeviation: null,
      stemh: null,
      stemv: null,
      stitchTiles: null,
      stopColor: null,
      stopOpacity: null,
      strikethroughPosition: ct,
      strikethroughThickness: ct,
      string: null,
      stroke: null,
      strokeDashArray: wn,
      strokeDashOffset: null,
      strokeLineCap: null,
      strokeLineJoin: null,
      strokeMiterLimit: ct,
      strokeOpacity: ct,
      strokeWidth: null,
      style: null,
      surfaceScale: ct,
      syncBehavior: null,
      syncBehaviorDefault: null,
      syncMaster: null,
      syncTolerance: null,
      syncToleranceDefault: null,
      systemLanguage: wn,
      tabIndex: ct,
      tableValues: null,
      target: null,
      targetX: ct,
      targetY: ct,
      textAnchor: null,
      textDecoration: null,
      textRendering: null,
      textLength: null,
      timelineBegin: null,
      title: null,
      transformBehavior: null,
      type: null,
      typeOf: wn,
      to: null,
      transform: null,
      transformOrigin: null,
      u1: null,
      u2: null,
      underlinePosition: ct,
      underlineThickness: ct,
      unicode: null,
      unicodeBidi: null,
      unicodeRange: null,
      unitsPerEm: ct,
      values: null,
      vAlphabetic: ct,
      vMathematical: ct,
      vectorEffect: null,
      vHanging: ct,
      vIdeographic: ct,
      version: null,
      vertAdvY: ct,
      vertOriginX: ct,
      vertOriginY: ct,
      viewBox: null,
      viewTarget: null,
      visibility: null,
      width: null,
      widths: null,
      wordSpacing: null,
      writingMode: null,
      x: null,
      x1: null,
      x2: null,
      xChannelSelector: null,
      xHeight: ct,
      y: null,
      y1: null,
      y2: null,
      yChannelSelector: null,
      z: null,
      zoomAndPan: null,
    },
    space: "svg",
    transform: lb,
  }),
  ob = Kl({
    properties: {
      xLinkActuate: null,
      xLinkArcRole: null,
      xLinkHref: null,
      xLinkRole: null,
      xLinkShow: null,
      xLinkTitle: null,
      xLinkType: null,
    },
    space: "xlink",
    transform(t, r) {
      return "xlink:" + r.slice(5).toLowerCase();
    },
  }),
  ub = Kl({
    attributes: { xmlnsxlink: "xmlns:xlink" },
    properties: { xmlnsXLink: null, xmlns: null },
    space: "xmlns",
    transform: ab,
  }),
  sb = Kl({
    properties: { xmlBase: null, xmlLang: null, xmlSpace: null },
    space: "xml",
    transform(t, r) {
      return "xml:" + r.slice(3).toLowerCase();
    },
  }),
  YE = {
    classId: "classID",
    dataType: "datatype",
    itemId: "itemID",
    strokeDashArray: "strokeDasharray",
    strokeDashOffset: "strokeDashoffset",
    strokeLineCap: "strokeLinecap",
    strokeLineJoin: "strokeLinejoin",
    strokeMiterLimit: "strokeMiterlimit",
    typeOf: "typeof",
    xLinkActuate: "xlinkActuate",
    xLinkArcRole: "xlinkArcrole",
    xLinkHref: "xlinkHref",
    xLinkRole: "xlinkRole",
    xLinkShow: "xlinkShow",
    xLinkTitle: "xlinkTitle",
    xLinkType: "xlinkType",
    xmlnsXLink: "xmlnsXlink",
  },
  GE = /[A-Z]/g,
  Zy = /-[a-z]/g,
  XE = /^data[-\w.:]+$/i;
function QE(t, r) {
  const i = up(r);
  let a = r,
    u = hn;
  if (i in t.normal) return t.property[t.normal[i]];
  if (i.length > 4 && i.slice(0, 4) === "data" && XE.test(r)) {
    if (r.charAt(4) === "-") {
      const s = r.slice(5).replace(Zy, ZE);
      a = "data" + s.charAt(0).toUpperCase() + s.slice(1);
    } else {
      const s = r.slice(4);
      if (!Zy.test(s)) {
        let f = s.replace(GE, IE);
        f.charAt(0) !== "-" && (f = "-" + f), (r = "data" + f);
      }
    }
    u = $p;
  }
  return new u(a, r);
}
function IE(t) {
  return "-" + t.toLowerCase();
}
function ZE(t) {
  return t.charAt(1).toUpperCase();
}
const KE = rb([ib, $E, ob, ub, sb], "html"),
  Vp = rb([ib, VE, ob, ub, sb], "svg");
function FE(t) {
  return t.join(" ").trim();
}
var El = {},
  Dd,
  Ky;
function WE() {
  if (Ky) return Dd;
  Ky = 1;
  var t = /\/\*[^*]*\*+([^/*][^*]*\*+)*\//g,
    r = /\n/g,
    i = /^\s*/,
    a = /^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/,
    u = /^:\s*/,
    s = /^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/,
    f = /^[;\s]*/,
    d = /^\s+|\s+$/g,
    h = `
`,
    m = "/",
    g = "*",
    y = "",
    b = "comment",
    v = "declaration";
  Dd = function (T, L) {
    if (typeof T != "string")
      throw new TypeError("First argument must be a string");
    if (!T) return [];
    L = L || {};
    var D = 1,
      G = 1;
    function $(B) {
      var N = B.match(r);
      N && (D += N.length);
      var V = B.lastIndexOf(h);
      G = ~V ? B.length - V : G + B.length;
    }
    function H() {
      var B = { line: D, column: G };
      return function (N) {
        return (N.position = new R(B)), C(), N;
      };
    }
    function R(B) {
      (this.start = B),
        (this.end = { line: D, column: G }),
        (this.source = L.source);
    }
    R.prototype.content = T;
    function k(B) {
      var N = new Error(L.source + ":" + D + ":" + G + ": " + B);
      if (
        ((N.reason = B),
        (N.filename = L.source),
        (N.line = D),
        (N.column = G),
        (N.source = T),
        !L.silent)
      )
        throw N;
    }
    function Q(B) {
      var N = B.exec(T);
      if (N) {
        var V = N[0];
        return $(V), (T = T.slice(V.length)), N;
      }
    }
    function C() {
      Q(i);
    }
    function U(B) {
      var N;
      for (B = B || []; (N = z()); ) N !== !1 && B.push(N);
      return B;
    }
    function z() {
      var B = H();
      if (!(m != T.charAt(0) || g != T.charAt(1))) {
        for (
          var N = 2;
          y != T.charAt(N) && (g != T.charAt(N) || m != T.charAt(N + 1));

        )
          ++N;
        if (((N += 2), y === T.charAt(N - 1)))
          return k("End of comment missing");
        var V = T.slice(2, N - 2);
        return (
          (G += 2), $(V), (T = T.slice(N)), (G += 2), B({ type: b, comment: V })
        );
      }
    }
    function q() {
      var B = H(),
        N = Q(a);
      if (N) {
        if ((z(), !Q(u))) return k("property missing ':'");
        var V = Q(s),
          _ = B({
            type: v,
            property: O(N[0].replace(t, y)),
            value: V ? O(V[0].replace(t, y)) : y,
          });
        return Q(f), _;
      }
    }
    function w() {
      var B = [];
      U(B);
      for (var N; (N = q()); ) N !== !1 && (B.push(N), U(B));
      return B;
    }
    return C(), w();
  };
  function O(T) {
    return T ? T.replace(d, y) : y;
  }
  return Dd;
}
var Fy;
function JE() {
  if (Fy) return El;
  Fy = 1;
  var t =
    (El && El.__importDefault) ||
    function (a) {
      return a && a.__esModule ? a : { default: a };
    };
  Object.defineProperty(El, "__esModule", { value: !0 }), (El.default = i);
  var r = t(WE());
  function i(a, u) {
    var s = null;
    if (!a || typeof a != "string") return s;
    var f = (0, r.default)(a),
      d = typeof u == "function";
    return (
      f.forEach(function (h) {
        if (h.type === "declaration") {
          var m = h.property,
            g = h.value;
          d ? u(m, g, h) : g && ((s = s || {}), (s[m] = g));
        }
      }),
      s
    );
  }
  return El;
}
var Wa = {},
  Wy;
function tT() {
  if (Wy) return Wa;
  (Wy = 1),
    Object.defineProperty(Wa, "__esModule", { value: !0 }),
    (Wa.camelCase = void 0);
  var t = /^--[a-zA-Z0-9_-]+$/,
    r = /-([a-z])/g,
    i = /^[^-]+$/,
    a = /^-(webkit|moz|ms|o|khtml)-/,
    u = /^-(ms)-/,
    s = function (m) {
      return !m || i.test(m) || t.test(m);
    },
    f = function (m, g) {
      return g.toUpperCase();
    },
    d = function (m, g) {
      return "".concat(g, "-");
    },
    h = function (m, g) {
      return (
        g === void 0 && (g = {}),
        s(m)
          ? m
          : ((m = m.toLowerCase()),
            g.reactCompat ? (m = m.replace(u, d)) : (m = m.replace(a, d)),
            m.replace(r, f))
      );
    };
  return (Wa.camelCase = h), Wa;
}
var Ja, Jy;
function eT() {
  if (Jy) return Ja;
  Jy = 1;
  var t =
      (Ja && Ja.__importDefault) ||
      function (u) {
        return u && u.__esModule ? u : { default: u };
      },
    r = t(JE()),
    i = tT();
  function a(u, s) {
    var f = {};
    return (
      !u ||
        typeof u != "string" ||
        (0, r.default)(u, function (d, h) {
          d && h && (f[(0, i.camelCase)(d, s)] = h);
        }),
      f
    );
  }
  return (a.default = a), (Ja = a), Ja;
}
var nT = eT();
const rT = Il(nT),
  cb = fb("end"),
  Yp = fb("start");
function fb(t) {
  return r;
  function r(i) {
    const a = (i && i.position && i.position[t]) || {};
    if (
      typeof a.line == "number" &&
      a.line > 0 &&
      typeof a.column == "number" &&
      a.column > 0
    )
      return {
        line: a.line,
        column: a.column,
        offset:
          typeof a.offset == "number" && a.offset > -1 ? a.offset : void 0,
      };
  }
}
function iT(t) {
  const r = Yp(t),
    i = cb(t);
  if (r && i) return { start: r, end: i };
}
function so(t) {
  return !t || typeof t != "object"
    ? ""
    : "position" in t || "type" in t
    ? t1(t.position)
    : "start" in t || "end" in t
    ? t1(t)
    : "line" in t || "column" in t
    ? fp(t)
    : "";
}
function fp(t) {
  return e1(t && t.line) + ":" + e1(t && t.column);
}
function t1(t) {
  return fp(t && t.start) + "-" + fp(t && t.end);
}
function e1(t) {
  return t && typeof t == "number" ? t : 1;
}
class tn extends Error {
  constructor(r, i, a) {
    super(), typeof i == "string" && ((a = i), (i = void 0));
    let u = "",
      s = {},
      f = !1;
    if (
      (i &&
        ("line" in i && "column" in i
          ? (s = { place: i })
          : "start" in i && "end" in i
          ? (s = { place: i })
          : "type" in i
          ? (s = { ancestors: [i], place: i.position })
          : (s = { ...i })),
      typeof r == "string"
        ? (u = r)
        : !s.cause && r && ((f = !0), (u = r.message), (s.cause = r)),
      !s.ruleId && !s.source && typeof a == "string")
    ) {
      const h = a.indexOf(":");
      h === -1
        ? (s.ruleId = a)
        : ((s.source = a.slice(0, h)), (s.ruleId = a.slice(h + 1)));
    }
    if (!s.place && s.ancestors && s.ancestors) {
      const h = s.ancestors[s.ancestors.length - 1];
      h && (s.place = h.position);
    }
    const d = s.place && "start" in s.place ? s.place.start : s.place;
    (this.ancestors = s.ancestors || void 0),
      (this.cause = s.cause || void 0),
      (this.column = d ? d.column : void 0),
      (this.fatal = void 0),
      (this.file = ""),
      (this.message = u),
      (this.line = d ? d.line : void 0),
      (this.name = so(s.place) || "1:1"),
      (this.place = s.place || void 0),
      (this.reason = this.message),
      (this.ruleId = s.ruleId || void 0),
      (this.source = s.source || void 0),
      (this.stack =
        f && s.cause && typeof s.cause.stack == "string" ? s.cause.stack : ""),
      (this.actual = void 0),
      (this.expected = void 0),
      (this.note = void 0),
      (this.url = void 0);
  }
}
tn.prototype.file = "";
tn.prototype.name = "";
tn.prototype.reason = "";
tn.prototype.message = "";
tn.prototype.stack = "";
tn.prototype.column = void 0;
tn.prototype.line = void 0;
tn.prototype.ancestors = void 0;
tn.prototype.cause = void 0;
tn.prototype.fatal = void 0;
tn.prototype.place = void 0;
tn.prototype.ruleId = void 0;
tn.prototype.source = void 0;
const Gp = {}.hasOwnProperty,
  lT = new Map(),
  aT = /[A-Z]/g,
  oT = new Set(["table", "tbody", "thead", "tfoot", "tr"]),
  uT = new Set(["td", "th"]),
  db = "https://github.com/syntax-tree/hast-util-to-jsx-runtime";
function sT(t, r) {
  if (!r || r.Fragment === void 0)
    throw new TypeError("Expected `Fragment` in options");
  const i = r.filePath || void 0;
  let a;
  if (r.development) {
    if (typeof r.jsxDEV != "function")
      throw new TypeError(
        "Expected `jsxDEV` in options when `development: true`"
      );
    a = yT(i, r.jsxDEV);
  } else {
    if (typeof r.jsx != "function")
      throw new TypeError("Expected `jsx` in production options");
    if (typeof r.jsxs != "function")
      throw new TypeError("Expected `jsxs` in production options");
    a = gT(i, r.jsx, r.jsxs);
  }
  const u = {
      Fragment: r.Fragment,
      ancestors: [],
      components: r.components || {},
      create: a,
      elementAttributeNameCase: r.elementAttributeNameCase || "react",
      evaluater: r.createEvaluater ? r.createEvaluater() : void 0,
      filePath: i,
      ignoreInvalidStyle: r.ignoreInvalidStyle || !1,
      passKeys: r.passKeys !== !1,
      passNode: r.passNode || !1,
      schema: r.space === "svg" ? Vp : KE,
      stylePropertyNameCase: r.stylePropertyNameCase || "dom",
      tableCellAlignToStyle: r.tableCellAlignToStyle !== !1,
    },
    s = pb(u, t, void 0);
  return s && typeof s != "string"
    ? s
    : u.create(t, u.Fragment, { children: s || void 0 }, void 0);
}
function pb(t, r, i) {
  if (r.type === "element") return cT(t, r, i);
  if (r.type === "mdxFlowExpression" || r.type === "mdxTextExpression")
    return fT(t, r);
  if (r.type === "mdxJsxFlowElement" || r.type === "mdxJsxTextElement")
    return pT(t, r, i);
  if (r.type === "mdxjsEsm") return dT(t, r);
  if (r.type === "root") return hT(t, r, i);
  if (r.type === "text") return mT(t, r);
}
function cT(t, r, i) {
  const a = t.schema;
  let u = a;
  r.tagName.toLowerCase() === "svg" &&
    a.space === "html" &&
    ((u = Vp), (t.schema = u)),
    t.ancestors.push(r);
  const s = mb(t, r.tagName, !1),
    f = vT(t, r);
  let d = Qp(t, r);
  return (
    oT.has(r.tagName) &&
      (d = d.filter(function (h) {
        return typeof h == "string" ? !qE(h) : !0;
      })),
    hb(t, f, s, r),
    Xp(f, d),
    t.ancestors.pop(),
    (t.schema = a),
    t.create(r, s, f, i)
  );
}
function fT(t, r) {
  if (r.data && r.data.estree && t.evaluater) {
    const a = r.data.estree.body[0];
    return a.type, t.evaluater.evaluateExpression(a.expression);
  }
  So(t, r.position);
}
function dT(t, r) {
  if (r.data && r.data.estree && t.evaluater)
    return t.evaluater.evaluateProgram(r.data.estree);
  So(t, r.position);
}
function pT(t, r, i) {
  const a = t.schema;
  let u = a;
  r.name === "svg" && a.space === "html" && ((u = Vp), (t.schema = u)),
    t.ancestors.push(r);
  const s = r.name === null ? t.Fragment : mb(t, r.name, !0),
    f = bT(t, r),
    d = Qp(t, r);
  return (
    hb(t, f, s, r),
    Xp(f, d),
    t.ancestors.pop(),
    (t.schema = a),
    t.create(r, s, f, i)
  );
}
function hT(t, r, i) {
  const a = {};
  return Xp(a, Qp(t, r)), t.create(r, t.Fragment, a, i);
}
function mT(t, r) {
  return r.value;
}
function hb(t, r, i, a) {
  typeof i != "string" && i !== t.Fragment && t.passNode && (r.node = a);
}
function Xp(t, r) {
  if (r.length > 0) {
    const i = r.length > 1 ? r : r[0];
    i && (t.children = i);
  }
}
function gT(t, r, i) {
  return a;
  function a(u, s, f, d) {
    const m = Array.isArray(f.children) ? i : r;
    return d ? m(s, f, d) : m(s, f);
  }
}
function yT(t, r) {
  return i;
  function i(a, u, s, f) {
    const d = Array.isArray(s.children),
      h = Yp(a);
    return r(
      u,
      s,
      f,
      d,
      {
        columnNumber: h ? h.column - 1 : void 0,
        fileName: t,
        lineNumber: h ? h.line : void 0,
      },
      void 0
    );
  }
}
function vT(t, r) {
  const i = {};
  let a, u;
  for (u in r.properties)
    if (u !== "children" && Gp.call(r.properties, u)) {
      const s = xT(t, u, r.properties[u]);
      if (s) {
        const [f, d] = s;
        t.tableCellAlignToStyle &&
        f === "align" &&
        typeof d == "string" &&
        uT.has(r.tagName)
          ? (a = d)
          : (i[f] = d);
      }
    }
  if (a) {
    const s = i.style || (i.style = {});
    s[t.stylePropertyNameCase === "css" ? "text-align" : "textAlign"] = a;
  }
  return i;
}
function bT(t, r) {
  const i = {};
  for (const a of r.attributes)
    if (a.type === "mdxJsxExpressionAttribute")
      if (a.data && a.data.estree && t.evaluater) {
        const s = a.data.estree.body[0];
        s.type;
        const f = s.expression;
        f.type;
        const d = f.properties[0];
        d.type, Object.assign(i, t.evaluater.evaluateExpression(d.argument));
      } else So(t, r.position);
    else {
      const u = a.name;
      let s;
      if (a.value && typeof a.value == "object")
        if (a.value.data && a.value.data.estree && t.evaluater) {
          const d = a.value.data.estree.body[0];
          d.type, (s = t.evaluater.evaluateExpression(d.expression));
        } else So(t, r.position);
      else s = a.value === null ? !0 : a.value;
      i[u] = s;
    }
  return i;
}
function Qp(t, r) {
  const i = [];
  let a = -1;
  const u = t.passKeys ? new Map() : lT;
  for (; ++a < r.children.length; ) {
    const s = r.children[a];
    let f;
    if (t.passKeys) {
      const h =
        s.type === "element"
          ? s.tagName
          : s.type === "mdxJsxFlowElement" || s.type === "mdxJsxTextElement"
          ? s.name
          : void 0;
      if (h) {
        const m = u.get(h) || 0;
        (f = h + "-" + m), u.set(h, m + 1);
      }
    }
    const d = pb(t, s, f);
    d !== void 0 && i.push(d);
  }
  return i;
}
function xT(t, r, i) {
  const a = QE(t.schema, r);
  if (!(i == null || (typeof i == "number" && Number.isNaN(i)))) {
    if (
      (Array.isArray(i) && (i = a.commaSeparated ? BE(i) : FE(i)),
      a.property === "style")
    ) {
      let u = typeof i == "object" ? i : ST(t, String(i));
      return t.stylePropertyNameCase === "css" && (u = wT(u)), ["style", u];
    }
    return [
      t.elementAttributeNameCase === "react" && a.space
        ? YE[a.property] || a.property
        : a.attribute,
      i,
    ];
  }
}
function ST(t, r) {
  try {
    return rT(r, { reactCompat: !0 });
  } catch (i) {
    if (t.ignoreInvalidStyle) return {};
    const a = i,
      u = new tn("Cannot parse `style` attribute", {
        ancestors: t.ancestors,
        cause: a,
        ruleId: "style",
        source: "hast-util-to-jsx-runtime",
      });
    throw (
      ((u.file = t.filePath || void 0),
      (u.url = db + "#cannot-parse-style-attribute"),
      u)
    );
  }
}
function mb(t, r, i) {
  let a;
  if (!i) a = { type: "Literal", value: r };
  else if (r.includes(".")) {
    const u = r.split(".");
    let s = -1,
      f;
    for (; ++s < u.length; ) {
      const d = Xy(u[s])
        ? { type: "Identifier", name: u[s] }
        : { type: "Literal", value: u[s] };
      f = f
        ? {
            type: "MemberExpression",
            object: f,
            property: d,
            computed: !!(s && d.type === "Literal"),
            optional: !1,
          }
        : d;
    }
    a = f;
  } else
    a =
      Xy(r) && !/^[a-z]/.test(r)
        ? { type: "Identifier", name: r }
        : { type: "Literal", value: r };
  if (a.type === "Literal") {
    const u = a.value;
    return Gp.call(t.components, u) ? t.components[u] : u;
  }
  if (t.evaluater) return t.evaluater.evaluateExpression(a);
  So(t);
}
function So(t, r) {
  const i = new tn("Cannot handle MDX estrees without `createEvaluater`", {
    ancestors: t.ancestors,
    place: r,
    ruleId: "mdx-estree",
    source: "hast-util-to-jsx-runtime",
  });
  throw (
    ((i.file = t.filePath || void 0),
    (i.url = db + "#cannot-handle-mdx-estrees-without-createevaluater"),
    i)
  );
}
function wT(t) {
  const r = {};
  let i;
  for (i in t) Gp.call(t, i) && (r[ET(i)] = t[i]);
  return r;
}
function ET(t) {
  let r = t.replace(aT, TT);
  return r.slice(0, 3) === "ms-" && (r = "-" + r), r;
}
function TT(t) {
  return "-" + t.toLowerCase();
}
const Nd = {
    action: ["form"],
    cite: ["blockquote", "del", "ins", "q"],
    data: ["object"],
    formAction: ["button", "input"],
    href: ["a", "area", "base", "link"],
    icon: ["menuitem"],
    itemId: null,
    manifest: ["html"],
    ping: ["a", "area"],
    poster: ["video"],
    src: [
      "audio",
      "embed",
      "iframe",
      "img",
      "input",
      "script",
      "source",
      "track",
      "video",
    ],
  },
  AT = {};
function OT(t, r) {
  const i = AT,
    a = typeof i.includeImageAlt == "boolean" ? i.includeImageAlt : !0,
    u = typeof i.includeHtml == "boolean" ? i.includeHtml : !0;
  return gb(t, a, u);
}
function gb(t, r, i) {
  if (CT(t)) {
    if ("value" in t) return t.type === "html" && !i ? "" : t.value;
    if (r && "alt" in t && t.alt) return t.alt;
    if ("children" in t) return n1(t.children, r, i);
  }
  return Array.isArray(t) ? n1(t, r, i) : "";
}
function n1(t, r, i) {
  const a = [];
  let u = -1;
  for (; ++u < t.length; ) a[u] = gb(t[u], r, i);
  return a.join("");
}
function CT(t) {
  return !!(t && typeof t == "object");
}
const r1 = document.createElement("i");
function Ip(t) {
  const r = "&" + t + ";";
  r1.innerHTML = r;
  const i = r1.textContent;
  return (i.charCodeAt(i.length - 1) === 59 && t !== "semi") || i === r
    ? !1
    : i;
}
function sr(t, r, i, a) {
  const u = t.length;
  let s = 0,
    f;
  if (
    (r < 0 ? (r = -r > u ? 0 : u + r) : (r = r > u ? u : r),
    (i = i > 0 ? i : 0),
    a.length < 1e4)
  )
    (f = Array.from(a)), f.unshift(r, i), t.splice(...f);
  else
    for (i && t.splice(r, i); s < a.length; )
      (f = a.slice(s, s + 1e4)),
        f.unshift(r, 0),
        t.splice(...f),
        (s += 1e4),
        (r += 1e4);
}
function Hn(t, r) {
  return t.length > 0 ? (sr(t, t.length, 0, r), t) : r;
}
const i1 = {}.hasOwnProperty;
function kT(t) {
  const r = {};
  let i = -1;
  for (; ++i < t.length; ) _T(r, t[i]);
  return r;
}
function _T(t, r) {
  let i;
  for (i in r) {
    const u = (i1.call(t, i) ? t[i] : void 0) || (t[i] = {}),
      s = r[i];
    let f;
    if (s)
      for (f in s) {
        i1.call(u, f) || (u[f] = []);
        const d = s[f];
        RT(u[f], Array.isArray(d) ? d : d ? [d] : []);
      }
  }
}
function RT(t, r) {
  let i = -1;
  const a = [];
  for (; ++i < r.length; ) (r[i].add === "after" ? t : a).push(r[i]);
  sr(t, 0, 0, a);
}
function yb(t, r) {
  const i = Number.parseInt(t, r);
  return i < 9 ||
    i === 11 ||
    (i > 13 && i < 32) ||
    (i > 126 && i < 160) ||
    (i > 55295 && i < 57344) ||
    (i > 64975 && i < 65008) ||
    (i & 65535) === 65535 ||
    (i & 65535) === 65534 ||
    i > 1114111
    ? "�"
    : String.fromCodePoint(i);
}
function Ll(t) {
  return t
    .replace(/[\t\n\r ]+/g, " ")
    .replace(/^ | $/g, "")
    .toLowerCase()
    .toUpperCase();
}
const lr = ii(/[A-Za-z]/),
  Tn = ii(/[\dA-Za-z]/),
  MT = ii(/[#-'*+\--9=?A-Z^-~]/);
function dp(t) {
  return t !== null && (t < 32 || t === 127);
}
const pp = ii(/\d/),
  zT = ii(/[\dA-Fa-f]/),
  DT = ii(/[!-/:-@[-`{-~]/);
function zt(t) {
  return t !== null && t < -2;
}
function cn(t) {
  return t !== null && (t < 0 || t === 32);
}
function Ft(t) {
  return t === -2 || t === -1 || t === 32;
}
const NT = ii(new RegExp("\\p{P}|\\p{S}", "u")),
  BT = ii(/\s/);
function ii(t) {
  return r;
  function r(i) {
    return i !== null && i > -1 && t.test(String.fromCharCode(i));
  }
}
function Fl(t) {
  const r = [];
  let i = -1,
    a = 0,
    u = 0;
  for (; ++i < t.length; ) {
    const s = t.charCodeAt(i);
    let f = "";
    if (s === 37 && Tn(t.charCodeAt(i + 1)) && Tn(t.charCodeAt(i + 2))) u = 2;
    else if (s < 128)
      /[!#$&-;=?-Z_a-z~]/.test(String.fromCharCode(s)) ||
        (f = String.fromCharCode(s));
    else if (s > 55295 && s < 57344) {
      const d = t.charCodeAt(i + 1);
      s < 56320 && d > 56319 && d < 57344
        ? ((f = String.fromCharCode(s, d)), (u = 1))
        : (f = "�");
    } else f = String.fromCharCode(s);
    f &&
      (r.push(t.slice(a, i), encodeURIComponent(f)), (a = i + u + 1), (f = "")),
      u && ((i += u), (u = 0));
  }
  return r.join("") + t.slice(a);
}
function he(t, r, i, a) {
  const u = a ? a - 1 : Number.POSITIVE_INFINITY;
  let s = 0;
  return f;
  function f(h) {
    return Ft(h) ? (t.enter(i), d(h)) : r(h);
  }
  function d(h) {
    return Ft(h) && s++ < u ? (t.consume(h), d) : (t.exit(i), r(h));
  }
}
const LT = { tokenize: UT };
function UT(t) {
  const r = t.attempt(this.parser.constructs.contentInitial, a, u);
  let i;
  return r;
  function a(d) {
    if (d === null) {
      t.consume(d);
      return;
    }
    return (
      t.enter("lineEnding"),
      t.consume(d),
      t.exit("lineEnding"),
      he(t, r, "linePrefix")
    );
  }
  function u(d) {
    return t.enter("paragraph"), s(d);
  }
  function s(d) {
    const h = t.enter("chunkText", { contentType: "text", previous: i });
    return i && (i.next = h), (i = h), f(d);
  }
  function f(d) {
    if (d === null) {
      t.exit("chunkText"), t.exit("paragraph"), t.consume(d);
      return;
    }
    return zt(d) ? (t.consume(d), t.exit("chunkText"), s) : (t.consume(d), f);
  }
}
const jT = { tokenize: HT },
  l1 = { tokenize: qT };
function HT(t) {
  const r = this,
    i = [];
  let a = 0,
    u,
    s,
    f;
  return d;
  function d($) {
    if (a < i.length) {
      const H = i[a];
      return (r.containerState = H[1]), t.attempt(H[0].continuation, h, m)($);
    }
    return m($);
  }
  function h($) {
    if ((a++, r.containerState._closeFlow)) {
      (r.containerState._closeFlow = void 0), u && G();
      const H = r.events.length;
      let R = H,
        k;
      for (; R--; )
        if (r.events[R][0] === "exit" && r.events[R][1].type === "chunkFlow") {
          k = r.events[R][1].end;
          break;
        }
      D(a);
      let Q = H;
      for (; Q < r.events.length; ) (r.events[Q][1].end = { ...k }), Q++;
      return (
        sr(r.events, R + 1, 0, r.events.slice(H)), (r.events.length = Q), m($)
      );
    }
    return d($);
  }
  function m($) {
    if (a === i.length) {
      if (!u) return b($);
      if (u.currentConstruct && u.currentConstruct.concrete) return O($);
      r.interrupt = !!(u.currentConstruct && !u._gfmTableDynamicInterruptHack);
    }
    return (r.containerState = {}), t.check(l1, g, y)($);
  }
  function g($) {
    return u && G(), D(a), b($);
  }
  function y($) {
    return (
      (r.parser.lazy[r.now().line] = a !== i.length), (f = r.now().offset), O($)
    );
  }
  function b($) {
    return (r.containerState = {}), t.attempt(l1, v, O)($);
  }
  function v($) {
    return a++, i.push([r.currentConstruct, r.containerState]), b($);
  }
  function O($) {
    if ($ === null) {
      u && G(), D(0), t.consume($);
      return;
    }
    return (
      (u = u || r.parser.flow(r.now())),
      t.enter("chunkFlow", { _tokenizer: u, contentType: "flow", previous: s }),
      T($)
    );
  }
  function T($) {
    if ($ === null) {
      L(t.exit("chunkFlow"), !0), D(0), t.consume($);
      return;
    }
    return zt($)
      ? (t.consume($),
        L(t.exit("chunkFlow")),
        (a = 0),
        (r.interrupt = void 0),
        d)
      : (t.consume($), T);
  }
  function L($, H) {
    const R = r.sliceStream($);
    if (
      (H && R.push(null),
      ($.previous = s),
      s && (s.next = $),
      (s = $),
      u.defineSkip($.start),
      u.write(R),
      r.parser.lazy[$.start.line])
    ) {
      let k = u.events.length;
      for (; k--; )
        if (
          u.events[k][1].start.offset < f &&
          (!u.events[k][1].end || u.events[k][1].end.offset > f)
        )
          return;
      const Q = r.events.length;
      let C = Q,
        U,
        z;
      for (; C--; )
        if (r.events[C][0] === "exit" && r.events[C][1].type === "chunkFlow") {
          if (U) {
            z = r.events[C][1].end;
            break;
          }
          U = !0;
        }
      for (D(a), k = Q; k < r.events.length; )
        (r.events[k][1].end = { ...z }), k++;
      sr(r.events, C + 1, 0, r.events.slice(Q)), (r.events.length = k);
    }
  }
  function D($) {
    let H = i.length;
    for (; H-- > $; ) {
      const R = i[H];
      (r.containerState = R[1]), R[0].exit.call(r, t);
    }
    i.length = $;
  }
  function G() {
    u.write([null]),
      (s = void 0),
      (u = void 0),
      (r.containerState._closeFlow = void 0);
  }
}
function qT(t, r, i) {
  return he(
    t,
    t.attempt(this.parser.constructs.document, r, i),
    "linePrefix",
    this.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4
  );
}
function a1(t) {
  if (t === null || cn(t) || BT(t)) return 1;
  if (NT(t)) return 2;
}
function Zp(t, r, i) {
  const a = [];
  let u = -1;
  for (; ++u < t.length; ) {
    const s = t[u].resolveAll;
    s && !a.includes(s) && ((r = s(r, i)), a.push(s));
  }
  return r;
}
const hp = { name: "attention", resolveAll: PT, tokenize: $T };
function PT(t, r) {
  let i = -1,
    a,
    u,
    s,
    f,
    d,
    h,
    m,
    g;
  for (; ++i < t.length; )
    if (
      t[i][0] === "enter" &&
      t[i][1].type === "attentionSequence" &&
      t[i][1]._close
    ) {
      for (a = i; a--; )
        if (
          t[a][0] === "exit" &&
          t[a][1].type === "attentionSequence" &&
          t[a][1]._open &&
          r.sliceSerialize(t[a][1]).charCodeAt(0) ===
            r.sliceSerialize(t[i][1]).charCodeAt(0)
        ) {
          if (
            (t[a][1]._close || t[i][1]._open) &&
            (t[i][1].end.offset - t[i][1].start.offset) % 3 &&
            !(
              (t[a][1].end.offset -
                t[a][1].start.offset +
                t[i][1].end.offset -
                t[i][1].start.offset) %
              3
            )
          )
            continue;
          h =
            t[a][1].end.offset - t[a][1].start.offset > 1 &&
            t[i][1].end.offset - t[i][1].start.offset > 1
              ? 2
              : 1;
          const y = { ...t[a][1].end },
            b = { ...t[i][1].start };
          o1(y, -h),
            o1(b, h),
            (f = {
              type: h > 1 ? "strongSequence" : "emphasisSequence",
              start: y,
              end: { ...t[a][1].end },
            }),
            (d = {
              type: h > 1 ? "strongSequence" : "emphasisSequence",
              start: { ...t[i][1].start },
              end: b,
            }),
            (s = {
              type: h > 1 ? "strongText" : "emphasisText",
              start: { ...t[a][1].end },
              end: { ...t[i][1].start },
            }),
            (u = {
              type: h > 1 ? "strong" : "emphasis",
              start: { ...f.start },
              end: { ...d.end },
            }),
            (t[a][1].end = { ...f.start }),
            (t[i][1].start = { ...d.end }),
            (m = []),
            t[a][1].end.offset - t[a][1].start.offset &&
              (m = Hn(m, [
                ["enter", t[a][1], r],
                ["exit", t[a][1], r],
              ])),
            (m = Hn(m, [
              ["enter", u, r],
              ["enter", f, r],
              ["exit", f, r],
              ["enter", s, r],
            ])),
            (m = Hn(
              m,
              Zp(r.parser.constructs.insideSpan.null, t.slice(a + 1, i), r)
            )),
            (m = Hn(m, [
              ["exit", s, r],
              ["enter", d, r],
              ["exit", d, r],
              ["exit", u, r],
            ])),
            t[i][1].end.offset - t[i][1].start.offset
              ? ((g = 2),
                (m = Hn(m, [
                  ["enter", t[i][1], r],
                  ["exit", t[i][1], r],
                ])))
              : (g = 0),
            sr(t, a - 1, i - a + 3, m),
            (i = a + m.length - g - 2);
          break;
        }
    }
  for (i = -1; ++i < t.length; )
    t[i][1].type === "attentionSequence" && (t[i][1].type = "data");
  return t;
}
function $T(t, r) {
  const i = this.parser.constructs.attentionMarkers.null,
    a = this.previous,
    u = a1(a);
  let s;
  return f;
  function f(h) {
    return (s = h), t.enter("attentionSequence"), d(h);
  }
  function d(h) {
    if (h === s) return t.consume(h), d;
    const m = t.exit("attentionSequence"),
      g = a1(h),
      y = !g || (g === 2 && u) || i.includes(h),
      b = !u || (u === 2 && g) || i.includes(a);
    return (
      (m._open = !!(s === 42 ? y : y && (u || !b))),
      (m._close = !!(s === 42 ? b : b && (g || !y))),
      r(h)
    );
  }
}
function o1(t, r) {
  (t.column += r), (t.offset += r), (t._bufferIndex += r);
}
const VT = { name: "autolink", tokenize: YT };
function YT(t, r, i) {
  let a = 0;
  return u;
  function u(v) {
    return (
      t.enter("autolink"),
      t.enter("autolinkMarker"),
      t.consume(v),
      t.exit("autolinkMarker"),
      t.enter("autolinkProtocol"),
      s
    );
  }
  function s(v) {
    return lr(v) ? (t.consume(v), f) : v === 64 ? i(v) : m(v);
  }
  function f(v) {
    return v === 43 || v === 45 || v === 46 || Tn(v) ? ((a = 1), d(v)) : m(v);
  }
  function d(v) {
    return v === 58
      ? (t.consume(v), (a = 0), h)
      : (v === 43 || v === 45 || v === 46 || Tn(v)) && a++ < 32
      ? (t.consume(v), d)
      : ((a = 0), m(v));
  }
  function h(v) {
    return v === 62
      ? (t.exit("autolinkProtocol"),
        t.enter("autolinkMarker"),
        t.consume(v),
        t.exit("autolinkMarker"),
        t.exit("autolink"),
        r)
      : v === null || v === 32 || v === 60 || dp(v)
      ? i(v)
      : (t.consume(v), h);
  }
  function m(v) {
    return v === 64 ? (t.consume(v), g) : MT(v) ? (t.consume(v), m) : i(v);
  }
  function g(v) {
    return Tn(v) ? y(v) : i(v);
  }
  function y(v) {
    return v === 46
      ? (t.consume(v), (a = 0), g)
      : v === 62
      ? ((t.exit("autolinkProtocol").type = "autolinkEmail"),
        t.enter("autolinkMarker"),
        t.consume(v),
        t.exit("autolinkMarker"),
        t.exit("autolink"),
        r)
      : b(v);
  }
  function b(v) {
    if ((v === 45 || Tn(v)) && a++ < 63) {
      const O = v === 45 ? b : y;
      return t.consume(v), O;
    }
    return i(v);
  }
}
const Ys = { partial: !0, tokenize: GT };
function GT(t, r, i) {
  return a;
  function a(s) {
    return Ft(s) ? he(t, u, "linePrefix")(s) : u(s);
  }
  function u(s) {
    return s === null || zt(s) ? r(s) : i(s);
  }
}
const vb = {
  continuation: { tokenize: QT },
  exit: IT,
  name: "blockQuote",
  tokenize: XT,
};
function XT(t, r, i) {
  const a = this;
  return u;
  function u(f) {
    if (f === 62) {
      const d = a.containerState;
      return (
        d.open || (t.enter("blockQuote", { _container: !0 }), (d.open = !0)),
        t.enter("blockQuotePrefix"),
        t.enter("blockQuoteMarker"),
        t.consume(f),
        t.exit("blockQuoteMarker"),
        s
      );
    }
    return i(f);
  }
  function s(f) {
    return Ft(f)
      ? (t.enter("blockQuotePrefixWhitespace"),
        t.consume(f),
        t.exit("blockQuotePrefixWhitespace"),
        t.exit("blockQuotePrefix"),
        r)
      : (t.exit("blockQuotePrefix"), r(f));
  }
}
function QT(t, r, i) {
  const a = this;
  return u;
  function u(f) {
    return Ft(f)
      ? he(
          t,
          s,
          "linePrefix",
          a.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4
        )(f)
      : s(f);
  }
  function s(f) {
    return t.attempt(vb, r, i)(f);
  }
}
function IT(t) {
  t.exit("blockQuote");
}
const bb = { name: "characterEscape", tokenize: ZT };
function ZT(t, r, i) {
  return a;
  function a(s) {
    return (
      t.enter("characterEscape"),
      t.enter("escapeMarker"),
      t.consume(s),
      t.exit("escapeMarker"),
      u
    );
  }
  function u(s) {
    return DT(s)
      ? (t.enter("characterEscapeValue"),
        t.consume(s),
        t.exit("characterEscapeValue"),
        t.exit("characterEscape"),
        r)
      : i(s);
  }
}
const xb = { name: "characterReference", tokenize: KT };
function KT(t, r, i) {
  const a = this;
  let u = 0,
    s,
    f;
  return d;
  function d(y) {
    return (
      t.enter("characterReference"),
      t.enter("characterReferenceMarker"),
      t.consume(y),
      t.exit("characterReferenceMarker"),
      h
    );
  }
  function h(y) {
    return y === 35
      ? (t.enter("characterReferenceMarkerNumeric"),
        t.consume(y),
        t.exit("characterReferenceMarkerNumeric"),
        m)
      : (t.enter("characterReferenceValue"), (s = 31), (f = Tn), g(y));
  }
  function m(y) {
    return y === 88 || y === 120
      ? (t.enter("characterReferenceMarkerHexadecimal"),
        t.consume(y),
        t.exit("characterReferenceMarkerHexadecimal"),
        t.enter("characterReferenceValue"),
        (s = 6),
        (f = zT),
        g)
      : (t.enter("characterReferenceValue"), (s = 7), (f = pp), g(y));
  }
  function g(y) {
    if (y === 59 && u) {
      const b = t.exit("characterReferenceValue");
      return f === Tn && !Ip(a.sliceSerialize(b))
        ? i(y)
        : (t.enter("characterReferenceMarker"),
          t.consume(y),
          t.exit("characterReferenceMarker"),
          t.exit("characterReference"),
          r);
    }
    return f(y) && u++ < s ? (t.consume(y), g) : i(y);
  }
}
const u1 = { partial: !0, tokenize: WT },
  s1 = { concrete: !0, name: "codeFenced", tokenize: FT };
function FT(t, r, i) {
  const a = this,
    u = { partial: !0, tokenize: R };
  let s = 0,
    f = 0,
    d;
  return h;
  function h(k) {
    return m(k);
  }
  function m(k) {
    const Q = a.events[a.events.length - 1];
    return (
      (s =
        Q && Q[1].type === "linePrefix"
          ? Q[2].sliceSerialize(Q[1], !0).length
          : 0),
      (d = k),
      t.enter("codeFenced"),
      t.enter("codeFencedFence"),
      t.enter("codeFencedFenceSequence"),
      g(k)
    );
  }
  function g(k) {
    return k === d
      ? (f++, t.consume(k), g)
      : f < 3
      ? i(k)
      : (t.exit("codeFencedFenceSequence"),
        Ft(k) ? he(t, y, "whitespace")(k) : y(k));
  }
  function y(k) {
    return k === null || zt(k)
      ? (t.exit("codeFencedFence"), a.interrupt ? r(k) : t.check(u1, T, H)(k))
      : (t.enter("codeFencedFenceInfo"),
        t.enter("chunkString", { contentType: "string" }),
        b(k));
  }
  function b(k) {
    return k === null || zt(k)
      ? (t.exit("chunkString"), t.exit("codeFencedFenceInfo"), y(k))
      : Ft(k)
      ? (t.exit("chunkString"),
        t.exit("codeFencedFenceInfo"),
        he(t, v, "whitespace")(k))
      : k === 96 && k === d
      ? i(k)
      : (t.consume(k), b);
  }
  function v(k) {
    return k === null || zt(k)
      ? y(k)
      : (t.enter("codeFencedFenceMeta"),
        t.enter("chunkString", { contentType: "string" }),
        O(k));
  }
  function O(k) {
    return k === null || zt(k)
      ? (t.exit("chunkString"), t.exit("codeFencedFenceMeta"), y(k))
      : k === 96 && k === d
      ? i(k)
      : (t.consume(k), O);
  }
  function T(k) {
    return t.attempt(u, H, L)(k);
  }
  function L(k) {
    return t.enter("lineEnding"), t.consume(k), t.exit("lineEnding"), D;
  }
  function D(k) {
    return s > 0 && Ft(k) ? he(t, G, "linePrefix", s + 1)(k) : G(k);
  }
  function G(k) {
    return k === null || zt(k)
      ? t.check(u1, T, H)(k)
      : (t.enter("codeFlowValue"), $(k));
  }
  function $(k) {
    return k === null || zt(k)
      ? (t.exit("codeFlowValue"), G(k))
      : (t.consume(k), $);
  }
  function H(k) {
    return t.exit("codeFenced"), r(k);
  }
  function R(k, Q, C) {
    let U = 0;
    return z;
    function z(V) {
      return k.enter("lineEnding"), k.consume(V), k.exit("lineEnding"), q;
    }
    function q(V) {
      return (
        k.enter("codeFencedFence"),
        Ft(V)
          ? he(
              k,
              w,
              "linePrefix",
              a.parser.constructs.disable.null.includes("codeIndented")
                ? void 0
                : 4
            )(V)
          : w(V)
      );
    }
    function w(V) {
      return V === d ? (k.enter("codeFencedFenceSequence"), B(V)) : C(V);
    }
    function B(V) {
      return V === d
        ? (U++, k.consume(V), B)
        : U >= f
        ? (k.exit("codeFencedFenceSequence"),
          Ft(V) ? he(k, N, "whitespace")(V) : N(V))
        : C(V);
    }
    function N(V) {
      return V === null || zt(V) ? (k.exit("codeFencedFence"), Q(V)) : C(V);
    }
  }
}
function WT(t, r, i) {
  const a = this;
  return u;
  function u(f) {
    return f === null
      ? i(f)
      : (t.enter("lineEnding"), t.consume(f), t.exit("lineEnding"), s);
  }
  function s(f) {
    return a.parser.lazy[a.now().line] ? i(f) : r(f);
  }
}
const Bd = { name: "codeIndented", tokenize: tA },
  JT = { partial: !0, tokenize: eA };
function tA(t, r, i) {
  const a = this;
  return u;
  function u(m) {
    return t.enter("codeIndented"), he(t, s, "linePrefix", 5)(m);
  }
  function s(m) {
    const g = a.events[a.events.length - 1];
    return g &&
      g[1].type === "linePrefix" &&
      g[2].sliceSerialize(g[1], !0).length >= 4
      ? f(m)
      : i(m);
  }
  function f(m) {
    return m === null
      ? h(m)
      : zt(m)
      ? t.attempt(JT, f, h)(m)
      : (t.enter("codeFlowValue"), d(m));
  }
  function d(m) {
    return m === null || zt(m)
      ? (t.exit("codeFlowValue"), f(m))
      : (t.consume(m), d);
  }
  function h(m) {
    return t.exit("codeIndented"), r(m);
  }
}
function eA(t, r, i) {
  const a = this;
  return u;
  function u(f) {
    return a.parser.lazy[a.now().line]
      ? i(f)
      : zt(f)
      ? (t.enter("lineEnding"), t.consume(f), t.exit("lineEnding"), u)
      : he(t, s, "linePrefix", 5)(f);
  }
  function s(f) {
    const d = a.events[a.events.length - 1];
    return d &&
      d[1].type === "linePrefix" &&
      d[2].sliceSerialize(d[1], !0).length >= 4
      ? r(f)
      : zt(f)
      ? u(f)
      : i(f);
  }
}
const nA = { name: "codeText", previous: iA, resolve: rA, tokenize: lA };
function rA(t) {
  let r = t.length - 4,
    i = 3,
    a,
    u;
  if (
    (t[i][1].type === "lineEnding" || t[i][1].type === "space") &&
    (t[r][1].type === "lineEnding" || t[r][1].type === "space")
  ) {
    for (a = i; ++a < r; )
      if (t[a][1].type === "codeTextData") {
        (t[i][1].type = "codeTextPadding"),
          (t[r][1].type = "codeTextPadding"),
          (i += 2),
          (r -= 2);
        break;
      }
  }
  for (a = i - 1, r++; ++a <= r; )
    u === void 0
      ? a !== r && t[a][1].type !== "lineEnding" && (u = a)
      : (a === r || t[a][1].type === "lineEnding") &&
        ((t[u][1].type = "codeTextData"),
        a !== u + 2 &&
          ((t[u][1].end = t[a - 1][1].end),
          t.splice(u + 2, a - u - 2),
          (r -= a - u - 2),
          (a = u + 2)),
        (u = void 0));
  return t;
}
function iA(t) {
  return (
    t !== 96 ||
    this.events[this.events.length - 1][1].type === "characterEscape"
  );
}
function lA(t, r, i) {
  let a = 0,
    u,
    s;
  return f;
  function f(y) {
    return t.enter("codeText"), t.enter("codeTextSequence"), d(y);
  }
  function d(y) {
    return y === 96
      ? (t.consume(y), a++, d)
      : (t.exit("codeTextSequence"), h(y));
  }
  function h(y) {
    return y === null
      ? i(y)
      : y === 32
      ? (t.enter("space"), t.consume(y), t.exit("space"), h)
      : y === 96
      ? ((s = t.enter("codeTextSequence")), (u = 0), g(y))
      : zt(y)
      ? (t.enter("lineEnding"), t.consume(y), t.exit("lineEnding"), h)
      : (t.enter("codeTextData"), m(y));
  }
  function m(y) {
    return y === null || y === 32 || y === 96 || zt(y)
      ? (t.exit("codeTextData"), h(y))
      : (t.consume(y), m);
  }
  function g(y) {
    return y === 96
      ? (t.consume(y), u++, g)
      : u === a
      ? (t.exit("codeTextSequence"), t.exit("codeText"), r(y))
      : ((s.type = "codeTextData"), m(y));
  }
}
class aA {
  constructor(r) {
    (this.left = r ? [...r] : []), (this.right = []);
  }
  get(r) {
    if (r < 0 || r >= this.left.length + this.right.length)
      throw new RangeError(
        "Cannot access index `" +
          r +
          "` in a splice buffer of size `" +
          (this.left.length + this.right.length) +
          "`"
      );
    return r < this.left.length
      ? this.left[r]
      : this.right[this.right.length - r + this.left.length - 1];
  }
  get length() {
    return this.left.length + this.right.length;
  }
  shift() {
    return this.setCursor(0), this.right.pop();
  }
  slice(r, i) {
    const a = i ?? Number.POSITIVE_INFINITY;
    return a < this.left.length
      ? this.left.slice(r, a)
      : r > this.left.length
      ? this.right
          .slice(
            this.right.length - a + this.left.length,
            this.right.length - r + this.left.length
          )
          .reverse()
      : this.left
          .slice(r)
          .concat(
            this.right.slice(this.right.length - a + this.left.length).reverse()
          );
  }
  splice(r, i, a) {
    const u = i || 0;
    this.setCursor(Math.trunc(r));
    const s = this.right.splice(
      this.right.length - u,
      Number.POSITIVE_INFINITY
    );
    return a && to(this.left, a), s.reverse();
  }
  pop() {
    return this.setCursor(Number.POSITIVE_INFINITY), this.left.pop();
  }
  push(r) {
    this.setCursor(Number.POSITIVE_INFINITY), this.left.push(r);
  }
  pushMany(r) {
    this.setCursor(Number.POSITIVE_INFINITY), to(this.left, r);
  }
  unshift(r) {
    this.setCursor(0), this.right.push(r);
  }
  unshiftMany(r) {
    this.setCursor(0), to(this.right, r.reverse());
  }
  setCursor(r) {
    if (
      !(
        r === this.left.length ||
        (r > this.left.length && this.right.length === 0) ||
        (r < 0 && this.left.length === 0)
      )
    )
      if (r < this.left.length) {
        const i = this.left.splice(r, Number.POSITIVE_INFINITY);
        to(this.right, i.reverse());
      } else {
        const i = this.right.splice(
          this.left.length + this.right.length - r,
          Number.POSITIVE_INFINITY
        );
        to(this.left, i.reverse());
      }
  }
}
function to(t, r) {
  let i = 0;
  if (r.length < 1e4) t.push(...r);
  else for (; i < r.length; ) t.push(...r.slice(i, i + 1e4)), (i += 1e4);
}
function Sb(t) {
  const r = {};
  let i = -1,
    a,
    u,
    s,
    f,
    d,
    h,
    m;
  const g = new aA(t);
  for (; ++i < g.length; ) {
    for (; i in r; ) i = r[i];
    if (
      ((a = g.get(i)),
      i &&
        a[1].type === "chunkFlow" &&
        g.get(i - 1)[1].type === "listItemPrefix" &&
        ((h = a[1]._tokenizer.events),
        (s = 0),
        s < h.length && h[s][1].type === "lineEndingBlank" && (s += 2),
        s < h.length && h[s][1].type === "content"))
    )
      for (; ++s < h.length && h[s][1].type !== "content"; )
        h[s][1].type === "chunkText" &&
          ((h[s][1]._isInFirstContentOfListItem = !0), s++);
    if (a[0] === "enter")
      a[1].contentType && (Object.assign(r, oA(g, i)), (i = r[i]), (m = !0));
    else if (a[1]._container) {
      for (s = i, u = void 0; s--; )
        if (
          ((f = g.get(s)),
          f[1].type === "lineEnding" || f[1].type === "lineEndingBlank")
        )
          f[0] === "enter" &&
            (u && (g.get(u)[1].type = "lineEndingBlank"),
            (f[1].type = "lineEnding"),
            (u = s));
        else if (
          !(f[1].type === "linePrefix" || f[1].type === "listItemIndent")
        )
          break;
      u &&
        ((a[1].end = { ...g.get(u)[1].start }),
        (d = g.slice(u, i)),
        d.unshift(a),
        g.splice(u, i - u + 1, d));
    }
  }
  return sr(t, 0, Number.POSITIVE_INFINITY, g.slice(0)), !m;
}
function oA(t, r) {
  const i = t.get(r)[1],
    a = t.get(r)[2];
  let u = r - 1;
  const s = [];
  let f = i._tokenizer;
  f ||
    ((f = a.parser[i.contentType](i.start)),
    i._contentTypeTextTrailing && (f._contentTypeTextTrailing = !0));
  const d = f.events,
    h = [],
    m = {};
  let g,
    y,
    b = -1,
    v = i,
    O = 0,
    T = 0;
  const L = [T];
  for (; v; ) {
    for (; t.get(++u)[1] !== v; );
    s.push(u),
      v._tokenizer ||
        ((g = a.sliceStream(v)),
        v.next || g.push(null),
        y && f.defineSkip(v.start),
        v._isInFirstContentOfListItem &&
          (f._gfmTasklistFirstContentOfListItem = !0),
        f.write(g),
        v._isInFirstContentOfListItem &&
          (f._gfmTasklistFirstContentOfListItem = void 0)),
      (y = v),
      (v = v.next);
  }
  for (v = i; ++b < d.length; )
    d[b][0] === "exit" &&
      d[b - 1][0] === "enter" &&
      d[b][1].type === d[b - 1][1].type &&
      d[b][1].start.line !== d[b][1].end.line &&
      ((T = b + 1),
      L.push(T),
      (v._tokenizer = void 0),
      (v.previous = void 0),
      (v = v.next));
  for (
    f.events = [],
      v ? ((v._tokenizer = void 0), (v.previous = void 0)) : L.pop(),
      b = L.length;
    b--;

  ) {
    const D = d.slice(L[b], L[b + 1]),
      G = s.pop();
    h.push([G, G + D.length - 1]), t.splice(G, 2, D);
  }
  for (h.reverse(), b = -1; ++b < h.length; )
    (m[O + h[b][0]] = O + h[b][1]), (O += h[b][1] - h[b][0] - 1);
  return m;
}
const uA = { resolve: cA, tokenize: fA },
  sA = { partial: !0, tokenize: dA };
function cA(t) {
  return Sb(t), t;
}
function fA(t, r) {
  let i;
  return a;
  function a(d) {
    return (
      t.enter("content"),
      (i = t.enter("chunkContent", { contentType: "content" })),
      u(d)
    );
  }
  function u(d) {
    return d === null ? s(d) : zt(d) ? t.check(sA, f, s)(d) : (t.consume(d), u);
  }
  function s(d) {
    return t.exit("chunkContent"), t.exit("content"), r(d);
  }
  function f(d) {
    return (
      t.consume(d),
      t.exit("chunkContent"),
      (i.next = t.enter("chunkContent", {
        contentType: "content",
        previous: i,
      })),
      (i = i.next),
      u
    );
  }
}
function dA(t, r, i) {
  const a = this;
  return u;
  function u(f) {
    return (
      t.exit("chunkContent"),
      t.enter("lineEnding"),
      t.consume(f),
      t.exit("lineEnding"),
      he(t, s, "linePrefix")
    );
  }
  function s(f) {
    if (f === null || zt(f)) return i(f);
    const d = a.events[a.events.length - 1];
    return !a.parser.constructs.disable.null.includes("codeIndented") &&
      d &&
      d[1].type === "linePrefix" &&
      d[2].sliceSerialize(d[1], !0).length >= 4
      ? r(f)
      : t.interrupt(a.parser.constructs.flow, i, r)(f);
  }
}
function wb(t, r, i, a, u, s, f, d, h) {
  const m = h || Number.POSITIVE_INFINITY;
  let g = 0;
  return y;
  function y(D) {
    return D === 60
      ? (t.enter(a), t.enter(u), t.enter(s), t.consume(D), t.exit(s), b)
      : D === null || D === 32 || D === 41 || dp(D)
      ? i(D)
      : (t.enter(a),
        t.enter(f),
        t.enter(d),
        t.enter("chunkString", { contentType: "string" }),
        T(D));
  }
  function b(D) {
    return D === 62
      ? (t.enter(s), t.consume(D), t.exit(s), t.exit(u), t.exit(a), r)
      : (t.enter(d), t.enter("chunkString", { contentType: "string" }), v(D));
  }
  function v(D) {
    return D === 62
      ? (t.exit("chunkString"), t.exit(d), b(D))
      : D === null || D === 60 || zt(D)
      ? i(D)
      : (t.consume(D), D === 92 ? O : v);
  }
  function O(D) {
    return D === 60 || D === 62 || D === 92 ? (t.consume(D), v) : v(D);
  }
  function T(D) {
    return !g && (D === null || D === 41 || cn(D))
      ? (t.exit("chunkString"), t.exit(d), t.exit(f), t.exit(a), r(D))
      : g < m && D === 40
      ? (t.consume(D), g++, T)
      : D === 41
      ? (t.consume(D), g--, T)
      : D === null || D === 32 || D === 40 || dp(D)
      ? i(D)
      : (t.consume(D), D === 92 ? L : T);
  }
  function L(D) {
    return D === 40 || D === 41 || D === 92 ? (t.consume(D), T) : T(D);
  }
}
function Eb(t, r, i, a, u, s) {
  const f = this;
  let d = 0,
    h;
  return m;
  function m(v) {
    return t.enter(a), t.enter(u), t.consume(v), t.exit(u), t.enter(s), g;
  }
  function g(v) {
    return d > 999 ||
      v === null ||
      v === 91 ||
      (v === 93 && !h) ||
      (v === 94 && !d && "_hiddenFootnoteSupport" in f.parser.constructs)
      ? i(v)
      : v === 93
      ? (t.exit(s), t.enter(u), t.consume(v), t.exit(u), t.exit(a), r)
      : zt(v)
      ? (t.enter("lineEnding"), t.consume(v), t.exit("lineEnding"), g)
      : (t.enter("chunkString", { contentType: "string" }), y(v));
  }
  function y(v) {
    return v === null || v === 91 || v === 93 || zt(v) || d++ > 999
      ? (t.exit("chunkString"), g(v))
      : (t.consume(v), h || (h = !Ft(v)), v === 92 ? b : y);
  }
  function b(v) {
    return v === 91 || v === 92 || v === 93 ? (t.consume(v), d++, y) : y(v);
  }
}
function Tb(t, r, i, a, u, s) {
  let f;
  return d;
  function d(b) {
    return b === 34 || b === 39 || b === 40
      ? (t.enter(a),
        t.enter(u),
        t.consume(b),
        t.exit(u),
        (f = b === 40 ? 41 : b),
        h)
      : i(b);
  }
  function h(b) {
    return b === f
      ? (t.enter(u), t.consume(b), t.exit(u), t.exit(a), r)
      : (t.enter(s), m(b));
  }
  function m(b) {
    return b === f
      ? (t.exit(s), h(f))
      : b === null
      ? i(b)
      : zt(b)
      ? (t.enter("lineEnding"),
        t.consume(b),
        t.exit("lineEnding"),
        he(t, m, "linePrefix"))
      : (t.enter("chunkString", { contentType: "string" }), g(b));
  }
  function g(b) {
    return b === f || b === null || zt(b)
      ? (t.exit("chunkString"), m(b))
      : (t.consume(b), b === 92 ? y : g);
  }
  function y(b) {
    return b === f || b === 92 ? (t.consume(b), g) : g(b);
  }
}
function co(t, r) {
  let i;
  return a;
  function a(u) {
    return zt(u)
      ? (t.enter("lineEnding"), t.consume(u), t.exit("lineEnding"), (i = !0), a)
      : Ft(u)
      ? he(t, a, i ? "linePrefix" : "lineSuffix")(u)
      : r(u);
  }
}
const pA = { name: "definition", tokenize: mA },
  hA = { partial: !0, tokenize: gA };
function mA(t, r, i) {
  const a = this;
  let u;
  return s;
  function s(v) {
    return t.enter("definition"), f(v);
  }
  function f(v) {
    return Eb.call(
      a,
      t,
      d,
      i,
      "definitionLabel",
      "definitionLabelMarker",
      "definitionLabelString"
    )(v);
  }
  function d(v) {
    return (
      (u = Ll(a.sliceSerialize(a.events[a.events.length - 1][1]).slice(1, -1))),
      v === 58
        ? (t.enter("definitionMarker"),
          t.consume(v),
          t.exit("definitionMarker"),
          h)
        : i(v)
    );
  }
  function h(v) {
    return cn(v) ? co(t, m)(v) : m(v);
  }
  function m(v) {
    return wb(
      t,
      g,
      i,
      "definitionDestination",
      "definitionDestinationLiteral",
      "definitionDestinationLiteralMarker",
      "definitionDestinationRaw",
      "definitionDestinationString"
    )(v);
  }
  function g(v) {
    return t.attempt(hA, y, y)(v);
  }
  function y(v) {
    return Ft(v) ? he(t, b, "whitespace")(v) : b(v);
  }
  function b(v) {
    return v === null || zt(v)
      ? (t.exit("definition"), a.parser.defined.push(u), r(v))
      : i(v);
  }
}
function gA(t, r, i) {
  return a;
  function a(d) {
    return cn(d) ? co(t, u)(d) : i(d);
  }
  function u(d) {
    return Tb(
      t,
      s,
      i,
      "definitionTitle",
      "definitionTitleMarker",
      "definitionTitleString"
    )(d);
  }
  function s(d) {
    return Ft(d) ? he(t, f, "whitespace")(d) : f(d);
  }
  function f(d) {
    return d === null || zt(d) ? r(d) : i(d);
  }
}
const yA = { name: "hardBreakEscape", tokenize: vA };
function vA(t, r, i) {
  return a;
  function a(s) {
    return t.enter("hardBreakEscape"), t.consume(s), u;
  }
  function u(s) {
    return zt(s) ? (t.exit("hardBreakEscape"), r(s)) : i(s);
  }
}
const bA = { name: "headingAtx", resolve: xA, tokenize: SA };
function xA(t, r) {
  let i = t.length - 2,
    a = 3,
    u,
    s;
  return (
    t[a][1].type === "whitespace" && (a += 2),
    i - 2 > a && t[i][1].type === "whitespace" && (i -= 2),
    t[i][1].type === "atxHeadingSequence" &&
      (a === i - 1 || (i - 4 > a && t[i - 2][1].type === "whitespace")) &&
      (i -= a + 1 === i ? 2 : 4),
    i > a &&
      ((u = { type: "atxHeadingText", start: t[a][1].start, end: t[i][1].end }),
      (s = {
        type: "chunkText",
        start: t[a][1].start,
        end: t[i][1].end,
        contentType: "text",
      }),
      sr(t, a, i - a + 1, [
        ["enter", u, r],
        ["enter", s, r],
        ["exit", s, r],
        ["exit", u, r],
      ])),
    t
  );
}
function SA(t, r, i) {
  let a = 0;
  return u;
  function u(g) {
    return t.enter("atxHeading"), s(g);
  }
  function s(g) {
    return t.enter("atxHeadingSequence"), f(g);
  }
  function f(g) {
    return g === 35 && a++ < 6
      ? (t.consume(g), f)
      : g === null || cn(g)
      ? (t.exit("atxHeadingSequence"), d(g))
      : i(g);
  }
  function d(g) {
    return g === 35
      ? (t.enter("atxHeadingSequence"), h(g))
      : g === null || zt(g)
      ? (t.exit("atxHeading"), r(g))
      : Ft(g)
      ? he(t, d, "whitespace")(g)
      : (t.enter("atxHeadingText"), m(g));
  }
  function h(g) {
    return g === 35 ? (t.consume(g), h) : (t.exit("atxHeadingSequence"), d(g));
  }
  function m(g) {
    return g === null || g === 35 || cn(g)
      ? (t.exit("atxHeadingText"), d(g))
      : (t.consume(g), m);
  }
}
const wA = [
    "address",
    "article",
    "aside",
    "base",
    "basefont",
    "blockquote",
    "body",
    "caption",
    "center",
    "col",
    "colgroup",
    "dd",
    "details",
    "dialog",
    "dir",
    "div",
    "dl",
    "dt",
    "fieldset",
    "figcaption",
    "figure",
    "footer",
    "form",
    "frame",
    "frameset",
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "head",
    "header",
    "hr",
    "html",
    "iframe",
    "legend",
    "li",
    "link",
    "main",
    "menu",
    "menuitem",
    "nav",
    "noframes",
    "ol",
    "optgroup",
    "option",
    "p",
    "param",
    "search",
    "section",
    "summary",
    "table",
    "tbody",
    "td",
    "tfoot",
    "th",
    "thead",
    "title",
    "tr",
    "track",
    "ul",
  ],
  c1 = ["pre", "script", "style", "textarea"],
  EA = { concrete: !0, name: "htmlFlow", resolveTo: OA, tokenize: CA },
  TA = { partial: !0, tokenize: _A },
  AA = { partial: !0, tokenize: kA };
function OA(t) {
  let r = t.length;
  for (; r-- && !(t[r][0] === "enter" && t[r][1].type === "htmlFlow"); );
  return (
    r > 1 &&
      t[r - 2][1].type === "linePrefix" &&
      ((t[r][1].start = t[r - 2][1].start),
      (t[r + 1][1].start = t[r - 2][1].start),
      t.splice(r - 2, 2)),
    t
  );
}
function CA(t, r, i) {
  const a = this;
  let u, s, f, d, h;
  return m;
  function m(A) {
    return g(A);
  }
  function g(A) {
    return t.enter("htmlFlow"), t.enter("htmlFlowData"), t.consume(A), y;
  }
  function y(A) {
    return A === 33
      ? (t.consume(A), b)
      : A === 47
      ? (t.consume(A), (s = !0), T)
      : A === 63
      ? (t.consume(A), (u = 3), a.interrupt ? r : x)
      : lr(A)
      ? (t.consume(A), (f = String.fromCharCode(A)), L)
      : i(A);
  }
  function b(A) {
    return A === 45
      ? (t.consume(A), (u = 2), v)
      : A === 91
      ? (t.consume(A), (u = 5), (d = 0), O)
      : lr(A)
      ? (t.consume(A), (u = 4), a.interrupt ? r : x)
      : i(A);
  }
  function v(A) {
    return A === 45 ? (t.consume(A), a.interrupt ? r : x) : i(A);
  }
  function O(A) {
    const ut = "CDATA[";
    return A === ut.charCodeAt(d++)
      ? (t.consume(A), d === ut.length ? (a.interrupt ? r : w) : O)
      : i(A);
  }
  function T(A) {
    return lr(A) ? (t.consume(A), (f = String.fromCharCode(A)), L) : i(A);
  }
  function L(A) {
    if (A === null || A === 47 || A === 62 || cn(A)) {
      const ut = A === 47,
        st = f.toLowerCase();
      return !ut && !s && c1.includes(st)
        ? ((u = 1), a.interrupt ? r(A) : w(A))
        : wA.includes(f.toLowerCase())
        ? ((u = 6), ut ? (t.consume(A), D) : a.interrupt ? r(A) : w(A))
        : ((u = 7),
          a.interrupt && !a.parser.lazy[a.now().line] ? i(A) : s ? G(A) : $(A));
    }
    return A === 45 || Tn(A)
      ? (t.consume(A), (f += String.fromCharCode(A)), L)
      : i(A);
  }
  function D(A) {
    return A === 62 ? (t.consume(A), a.interrupt ? r : w) : i(A);
  }
  function G(A) {
    return Ft(A) ? (t.consume(A), G) : z(A);
  }
  function $(A) {
    return A === 47
      ? (t.consume(A), z)
      : A === 58 || A === 95 || lr(A)
      ? (t.consume(A), H)
      : Ft(A)
      ? (t.consume(A), $)
      : z(A);
  }
  function H(A) {
    return A === 45 || A === 46 || A === 58 || A === 95 || Tn(A)
      ? (t.consume(A), H)
      : R(A);
  }
  function R(A) {
    return A === 61 ? (t.consume(A), k) : Ft(A) ? (t.consume(A), R) : $(A);
  }
  function k(A) {
    return A === null || A === 60 || A === 61 || A === 62 || A === 96
      ? i(A)
      : A === 34 || A === 39
      ? (t.consume(A), (h = A), Q)
      : Ft(A)
      ? (t.consume(A), k)
      : C(A);
  }
  function Q(A) {
    return A === h
      ? (t.consume(A), (h = null), U)
      : A === null || zt(A)
      ? i(A)
      : (t.consume(A), Q);
  }
  function C(A) {
    return A === null ||
      A === 34 ||
      A === 39 ||
      A === 47 ||
      A === 60 ||
      A === 61 ||
      A === 62 ||
      A === 96 ||
      cn(A)
      ? R(A)
      : (t.consume(A), C);
  }
  function U(A) {
    return A === 47 || A === 62 || Ft(A) ? $(A) : i(A);
  }
  function z(A) {
    return A === 62 ? (t.consume(A), q) : i(A);
  }
  function q(A) {
    return A === null || zt(A) ? w(A) : Ft(A) ? (t.consume(A), q) : i(A);
  }
  function w(A) {
    return A === 45 && u === 2
      ? (t.consume(A), _)
      : A === 60 && u === 1
      ? (t.consume(A), P)
      : A === 62 && u === 4
      ? (t.consume(A), Z)
      : A === 63 && u === 3
      ? (t.consume(A), x)
      : A === 93 && u === 5
      ? (t.consume(A), pt)
      : zt(A) && (u === 6 || u === 7)
      ? (t.exit("htmlFlowData"), t.check(TA, J, B)(A))
      : A === null || zt(A)
      ? (t.exit("htmlFlowData"), B(A))
      : (t.consume(A), w);
  }
  function B(A) {
    return t.check(AA, N, J)(A);
  }
  function N(A) {
    return t.enter("lineEnding"), t.consume(A), t.exit("lineEnding"), V;
  }
  function V(A) {
    return A === null || zt(A) ? B(A) : (t.enter("htmlFlowData"), w(A));
  }
  function _(A) {
    return A === 45 ? (t.consume(A), x) : w(A);
  }
  function P(A) {
    return A === 47 ? (t.consume(A), (f = ""), nt) : w(A);
  }
  function nt(A) {
    if (A === 62) {
      const ut = f.toLowerCase();
      return c1.includes(ut) ? (t.consume(A), Z) : w(A);
    }
    return lr(A) && f.length < 8
      ? (t.consume(A), (f += String.fromCharCode(A)), nt)
      : w(A);
  }
  function pt(A) {
    return A === 93 ? (t.consume(A), x) : w(A);
  }
  function x(A) {
    return A === 62
      ? (t.consume(A), Z)
      : A === 45 && u === 2
      ? (t.consume(A), x)
      : w(A);
  }
  function Z(A) {
    return A === null || zt(A)
      ? (t.exit("htmlFlowData"), J(A))
      : (t.consume(A), Z);
  }
  function J(A) {
    return t.exit("htmlFlow"), r(A);
  }
}
function kA(t, r, i) {
  const a = this;
  return u;
  function u(f) {
    return zt(f)
      ? (t.enter("lineEnding"), t.consume(f), t.exit("lineEnding"), s)
      : i(f);
  }
  function s(f) {
    return a.parser.lazy[a.now().line] ? i(f) : r(f);
  }
}
function _A(t, r, i) {
  return a;
  function a(u) {
    return (
      t.enter("lineEnding"),
      t.consume(u),
      t.exit("lineEnding"),
      t.attempt(Ys, r, i)
    );
  }
}
const RA = { name: "htmlText", tokenize: MA };
function MA(t, r, i) {
  const a = this;
  let u, s, f;
  return d;
  function d(x) {
    return t.enter("htmlText"), t.enter("htmlTextData"), t.consume(x), h;
  }
  function h(x) {
    return x === 33
      ? (t.consume(x), m)
      : x === 47
      ? (t.consume(x), R)
      : x === 63
      ? (t.consume(x), $)
      : lr(x)
      ? (t.consume(x), C)
      : i(x);
  }
  function m(x) {
    return x === 45
      ? (t.consume(x), g)
      : x === 91
      ? (t.consume(x), (s = 0), O)
      : lr(x)
      ? (t.consume(x), G)
      : i(x);
  }
  function g(x) {
    return x === 45 ? (t.consume(x), v) : i(x);
  }
  function y(x) {
    return x === null
      ? i(x)
      : x === 45
      ? (t.consume(x), b)
      : zt(x)
      ? ((f = y), P(x))
      : (t.consume(x), y);
  }
  function b(x) {
    return x === 45 ? (t.consume(x), v) : y(x);
  }
  function v(x) {
    return x === 62 ? _(x) : x === 45 ? b(x) : y(x);
  }
  function O(x) {
    const Z = "CDATA[";
    return x === Z.charCodeAt(s++)
      ? (t.consume(x), s === Z.length ? T : O)
      : i(x);
  }
  function T(x) {
    return x === null
      ? i(x)
      : x === 93
      ? (t.consume(x), L)
      : zt(x)
      ? ((f = T), P(x))
      : (t.consume(x), T);
  }
  function L(x) {
    return x === 93 ? (t.consume(x), D) : T(x);
  }
  function D(x) {
    return x === 62 ? _(x) : x === 93 ? (t.consume(x), D) : T(x);
  }
  function G(x) {
    return x === null || x === 62
      ? _(x)
      : zt(x)
      ? ((f = G), P(x))
      : (t.consume(x), G);
  }
  function $(x) {
    return x === null
      ? i(x)
      : x === 63
      ? (t.consume(x), H)
      : zt(x)
      ? ((f = $), P(x))
      : (t.consume(x), $);
  }
  function H(x) {
    return x === 62 ? _(x) : $(x);
  }
  function R(x) {
    return lr(x) ? (t.consume(x), k) : i(x);
  }
  function k(x) {
    return x === 45 || Tn(x) ? (t.consume(x), k) : Q(x);
  }
  function Q(x) {
    return zt(x) ? ((f = Q), P(x)) : Ft(x) ? (t.consume(x), Q) : _(x);
  }
  function C(x) {
    return x === 45 || Tn(x)
      ? (t.consume(x), C)
      : x === 47 || x === 62 || cn(x)
      ? U(x)
      : i(x);
  }
  function U(x) {
    return x === 47
      ? (t.consume(x), _)
      : x === 58 || x === 95 || lr(x)
      ? (t.consume(x), z)
      : zt(x)
      ? ((f = U), P(x))
      : Ft(x)
      ? (t.consume(x), U)
      : _(x);
  }
  function z(x) {
    return x === 45 || x === 46 || x === 58 || x === 95 || Tn(x)
      ? (t.consume(x), z)
      : q(x);
  }
  function q(x) {
    return x === 61
      ? (t.consume(x), w)
      : zt(x)
      ? ((f = q), P(x))
      : Ft(x)
      ? (t.consume(x), q)
      : U(x);
  }
  function w(x) {
    return x === null || x === 60 || x === 61 || x === 62 || x === 96
      ? i(x)
      : x === 34 || x === 39
      ? (t.consume(x), (u = x), B)
      : zt(x)
      ? ((f = w), P(x))
      : Ft(x)
      ? (t.consume(x), w)
      : (t.consume(x), N);
  }
  function B(x) {
    return x === u
      ? (t.consume(x), (u = void 0), V)
      : x === null
      ? i(x)
      : zt(x)
      ? ((f = B), P(x))
      : (t.consume(x), B);
  }
  function N(x) {
    return x === null ||
      x === 34 ||
      x === 39 ||
      x === 60 ||
      x === 61 ||
      x === 96
      ? i(x)
      : x === 47 || x === 62 || cn(x)
      ? U(x)
      : (t.consume(x), N);
  }
  function V(x) {
    return x === 47 || x === 62 || cn(x) ? U(x) : i(x);
  }
  function _(x) {
    return x === 62
      ? (t.consume(x), t.exit("htmlTextData"), t.exit("htmlText"), r)
      : i(x);
  }
  function P(x) {
    return (
      t.exit("htmlTextData"),
      t.enter("lineEnding"),
      t.consume(x),
      t.exit("lineEnding"),
      nt
    );
  }
  function nt(x) {
    return Ft(x)
      ? he(
          t,
          pt,
          "linePrefix",
          a.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4
        )(x)
      : pt(x);
  }
  function pt(x) {
    return t.enter("htmlTextData"), f(x);
  }
}
const Kp = { name: "labelEnd", resolveAll: BA, resolveTo: LA, tokenize: UA },
  zA = { tokenize: jA },
  DA = { tokenize: HA },
  NA = { tokenize: qA };
function BA(t) {
  let r = -1;
  const i = [];
  for (; ++r < t.length; ) {
    const a = t[r][1];
    if (
      (i.push(t[r]),
      a.type === "labelImage" ||
        a.type === "labelLink" ||
        a.type === "labelEnd")
    ) {
      const u = a.type === "labelImage" ? 4 : 2;
      (a.type = "data"), (r += u);
    }
  }
  return t.length !== i.length && sr(t, 0, t.length, i), t;
}
function LA(t, r) {
  let i = t.length,
    a = 0,
    u,
    s,
    f,
    d;
  for (; i--; )
    if (((u = t[i][1]), s)) {
      if (u.type === "link" || (u.type === "labelLink" && u._inactive)) break;
      t[i][0] === "enter" && u.type === "labelLink" && (u._inactive = !0);
    } else if (f) {
      if (
        t[i][0] === "enter" &&
        (u.type === "labelImage" || u.type === "labelLink") &&
        !u._balanced &&
        ((s = i), u.type !== "labelLink")
      ) {
        a = 2;
        break;
      }
    } else u.type === "labelEnd" && (f = i);
  const h = {
      type: t[s][1].type === "labelLink" ? "link" : "image",
      start: { ...t[s][1].start },
      end: { ...t[t.length - 1][1].end },
    },
    m = { type: "label", start: { ...t[s][1].start }, end: { ...t[f][1].end } },
    g = {
      type: "labelText",
      start: { ...t[s + a + 2][1].end },
      end: { ...t[f - 2][1].start },
    };
  return (
    (d = [
      ["enter", h, r],
      ["enter", m, r],
    ]),
    (d = Hn(d, t.slice(s + 1, s + a + 3))),
    (d = Hn(d, [["enter", g, r]])),
    (d = Hn(
      d,
      Zp(r.parser.constructs.insideSpan.null, t.slice(s + a + 4, f - 3), r)
    )),
    (d = Hn(d, [["exit", g, r], t[f - 2], t[f - 1], ["exit", m, r]])),
    (d = Hn(d, t.slice(f + 1))),
    (d = Hn(d, [["exit", h, r]])),
    sr(t, s, t.length, d),
    t
  );
}
function UA(t, r, i) {
  const a = this;
  let u = a.events.length,
    s,
    f;
  for (; u--; )
    if (
      (a.events[u][1].type === "labelImage" ||
        a.events[u][1].type === "labelLink") &&
      !a.events[u][1]._balanced
    ) {
      s = a.events[u][1];
      break;
    }
  return d;
  function d(b) {
    return s
      ? s._inactive
        ? y(b)
        : ((f = a.parser.defined.includes(
            Ll(a.sliceSerialize({ start: s.end, end: a.now() }))
          )),
          t.enter("labelEnd"),
          t.enter("labelMarker"),
          t.consume(b),
          t.exit("labelMarker"),
          t.exit("labelEnd"),
          h)
      : i(b);
  }
  function h(b) {
    return b === 40
      ? t.attempt(zA, g, f ? g : y)(b)
      : b === 91
      ? t.attempt(DA, g, f ? m : y)(b)
      : f
      ? g(b)
      : y(b);
  }
  function m(b) {
    return t.attempt(NA, g, y)(b);
  }
  function g(b) {
    return r(b);
  }
  function y(b) {
    return (s._balanced = !0), i(b);
  }
}
function jA(t, r, i) {
  return a;
  function a(y) {
    return (
      t.enter("resource"),
      t.enter("resourceMarker"),
      t.consume(y),
      t.exit("resourceMarker"),
      u
    );
  }
  function u(y) {
    return cn(y) ? co(t, s)(y) : s(y);
  }
  function s(y) {
    return y === 41
      ? g(y)
      : wb(
          t,
          f,
          d,
          "resourceDestination",
          "resourceDestinationLiteral",
          "resourceDestinationLiteralMarker",
          "resourceDestinationRaw",
          "resourceDestinationString",
          32
        )(y);
  }
  function f(y) {
    return cn(y) ? co(t, h)(y) : g(y);
  }
  function d(y) {
    return i(y);
  }
  function h(y) {
    return y === 34 || y === 39 || y === 40
      ? Tb(
          t,
          m,
          i,
          "resourceTitle",
          "resourceTitleMarker",
          "resourceTitleString"
        )(y)
      : g(y);
  }
  function m(y) {
    return cn(y) ? co(t, g)(y) : g(y);
  }
  function g(y) {
    return y === 41
      ? (t.enter("resourceMarker"),
        t.consume(y),
        t.exit("resourceMarker"),
        t.exit("resource"),
        r)
      : i(y);
  }
}
function HA(t, r, i) {
  const a = this;
  return u;
  function u(d) {
    return Eb.call(
      a,
      t,
      s,
      f,
      "reference",
      "referenceMarker",
      "referenceString"
    )(d);
  }
  function s(d) {
    return a.parser.defined.includes(
      Ll(a.sliceSerialize(a.events[a.events.length - 1][1]).slice(1, -1))
    )
      ? r(d)
      : i(d);
  }
  function f(d) {
    return i(d);
  }
}
function qA(t, r, i) {
  return a;
  function a(s) {
    return (
      t.enter("reference"),
      t.enter("referenceMarker"),
      t.consume(s),
      t.exit("referenceMarker"),
      u
    );
  }
  function u(s) {
    return s === 93
      ? (t.enter("referenceMarker"),
        t.consume(s),
        t.exit("referenceMarker"),
        t.exit("reference"),
        r)
      : i(s);
  }
}
const PA = { name: "labelStartImage", resolveAll: Kp.resolveAll, tokenize: $A };
function $A(t, r, i) {
  const a = this;
  return u;
  function u(d) {
    return (
      t.enter("labelImage"),
      t.enter("labelImageMarker"),
      t.consume(d),
      t.exit("labelImageMarker"),
      s
    );
  }
  function s(d) {
    return d === 91
      ? (t.enter("labelMarker"),
        t.consume(d),
        t.exit("labelMarker"),
        t.exit("labelImage"),
        f)
      : i(d);
  }
  function f(d) {
    return d === 94 && "_hiddenFootnoteSupport" in a.parser.constructs
      ? i(d)
      : r(d);
  }
}
const VA = { name: "labelStartLink", resolveAll: Kp.resolveAll, tokenize: YA };
function YA(t, r, i) {
  const a = this;
  return u;
  function u(f) {
    return (
      t.enter("labelLink"),
      t.enter("labelMarker"),
      t.consume(f),
      t.exit("labelMarker"),
      t.exit("labelLink"),
      s
    );
  }
  function s(f) {
    return f === 94 && "_hiddenFootnoteSupport" in a.parser.constructs
      ? i(f)
      : r(f);
  }
}
const Ld = { name: "lineEnding", tokenize: GA };
function GA(t, r) {
  return i;
  function i(a) {
    return (
      t.enter("lineEnding"),
      t.consume(a),
      t.exit("lineEnding"),
      he(t, r, "linePrefix")
    );
  }
}
const vs = { name: "thematicBreak", tokenize: XA };
function XA(t, r, i) {
  let a = 0,
    u;
  return s;
  function s(m) {
    return t.enter("thematicBreak"), f(m);
  }
  function f(m) {
    return (u = m), d(m);
  }
  function d(m) {
    return m === u
      ? (t.enter("thematicBreakSequence"), h(m))
      : a >= 3 && (m === null || zt(m))
      ? (t.exit("thematicBreak"), r(m))
      : i(m);
  }
  function h(m) {
    return m === u
      ? (t.consume(m), a++, h)
      : (t.exit("thematicBreakSequence"),
        Ft(m) ? he(t, d, "whitespace")(m) : d(m));
  }
}
const sn = {
    continuation: { tokenize: KA },
    exit: WA,
    name: "list",
    tokenize: ZA,
  },
  QA = { partial: !0, tokenize: JA },
  IA = { partial: !0, tokenize: FA };
function ZA(t, r, i) {
  const a = this,
    u = a.events[a.events.length - 1];
  let s =
      u && u[1].type === "linePrefix"
        ? u[2].sliceSerialize(u[1], !0).length
        : 0,
    f = 0;
  return d;
  function d(v) {
    const O =
      a.containerState.type ||
      (v === 42 || v === 43 || v === 45 ? "listUnordered" : "listOrdered");
    if (
      O === "listUnordered"
        ? !a.containerState.marker || v === a.containerState.marker
        : pp(v)
    ) {
      if (
        (a.containerState.type ||
          ((a.containerState.type = O), t.enter(O, { _container: !0 })),
        O === "listUnordered")
      )
        return (
          t.enter("listItemPrefix"),
          v === 42 || v === 45 ? t.check(vs, i, m)(v) : m(v)
        );
      if (!a.interrupt || v === 49)
        return t.enter("listItemPrefix"), t.enter("listItemValue"), h(v);
    }
    return i(v);
  }
  function h(v) {
    return pp(v) && ++f < 10
      ? (t.consume(v), h)
      : (!a.interrupt || f < 2) &&
        (a.containerState.marker
          ? v === a.containerState.marker
          : v === 41 || v === 46)
      ? (t.exit("listItemValue"), m(v))
      : i(v);
  }
  function m(v) {
    return (
      t.enter("listItemMarker"),
      t.consume(v),
      t.exit("listItemMarker"),
      (a.containerState.marker = a.containerState.marker || v),
      t.check(Ys, a.interrupt ? i : g, t.attempt(QA, b, y))
    );
  }
  function g(v) {
    return (a.containerState.initialBlankLine = !0), s++, b(v);
  }
  function y(v) {
    return Ft(v)
      ? (t.enter("listItemPrefixWhitespace"),
        t.consume(v),
        t.exit("listItemPrefixWhitespace"),
        b)
      : i(v);
  }
  function b(v) {
    return (
      (a.containerState.size =
        s + a.sliceSerialize(t.exit("listItemPrefix"), !0).length),
      r(v)
    );
  }
}
function KA(t, r, i) {
  const a = this;
  return (a.containerState._closeFlow = void 0), t.check(Ys, u, s);
  function u(d) {
    return (
      (a.containerState.furtherBlankLines =
        a.containerState.furtherBlankLines ||
        a.containerState.initialBlankLine),
      he(t, r, "listItemIndent", a.containerState.size + 1)(d)
    );
  }
  function s(d) {
    return a.containerState.furtherBlankLines || !Ft(d)
      ? ((a.containerState.furtherBlankLines = void 0),
        (a.containerState.initialBlankLine = void 0),
        f(d))
      : ((a.containerState.furtherBlankLines = void 0),
        (a.containerState.initialBlankLine = void 0),
        t.attempt(IA, r, f)(d));
  }
  function f(d) {
    return (
      (a.containerState._closeFlow = !0),
      (a.interrupt = void 0),
      he(
        t,
        t.attempt(sn, r, i),
        "linePrefix",
        a.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4
      )(d)
    );
  }
}
function FA(t, r, i) {
  const a = this;
  return he(t, u, "listItemIndent", a.containerState.size + 1);
  function u(s) {
    const f = a.events[a.events.length - 1];
    return f &&
      f[1].type === "listItemIndent" &&
      f[2].sliceSerialize(f[1], !0).length === a.containerState.size
      ? r(s)
      : i(s);
  }
}
function WA(t) {
  t.exit(this.containerState.type);
}
function JA(t, r, i) {
  const a = this;
  return he(
    t,
    u,
    "listItemPrefixWhitespace",
    a.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 5
  );
  function u(s) {
    const f = a.events[a.events.length - 1];
    return !Ft(s) && f && f[1].type === "listItemPrefixWhitespace"
      ? r(s)
      : i(s);
  }
}
const f1 = { name: "setextUnderline", resolveTo: tO, tokenize: eO };
function tO(t, r) {
  let i = t.length,
    a,
    u,
    s;
  for (; i--; )
    if (t[i][0] === "enter") {
      if (t[i][1].type === "content") {
        a = i;
        break;
      }
      t[i][1].type === "paragraph" && (u = i);
    } else
      t[i][1].type === "content" && t.splice(i, 1),
        !s && t[i][1].type === "definition" && (s = i);
  const f = {
    type: "setextHeading",
    start: { ...t[a][1].start },
    end: { ...t[t.length - 1][1].end },
  };
  return (
    (t[u][1].type = "setextHeadingText"),
    s
      ? (t.splice(u, 0, ["enter", f, r]),
        t.splice(s + 1, 0, ["exit", t[a][1], r]),
        (t[a][1].end = { ...t[s][1].end }))
      : (t[a][1] = f),
    t.push(["exit", f, r]),
    t
  );
}
function eO(t, r, i) {
  const a = this;
  let u;
  return s;
  function s(m) {
    let g = a.events.length,
      y;
    for (; g--; )
      if (
        a.events[g][1].type !== "lineEnding" &&
        a.events[g][1].type !== "linePrefix" &&
        a.events[g][1].type !== "content"
      ) {
        y = a.events[g][1].type === "paragraph";
        break;
      }
    return !a.parser.lazy[a.now().line] && (a.interrupt || y)
      ? (t.enter("setextHeadingLine"), (u = m), f(m))
      : i(m);
  }
  function f(m) {
    return t.enter("setextHeadingLineSequence"), d(m);
  }
  function d(m) {
    return m === u
      ? (t.consume(m), d)
      : (t.exit("setextHeadingLineSequence"),
        Ft(m) ? he(t, h, "lineSuffix")(m) : h(m));
  }
  function h(m) {
    return m === null || zt(m) ? (t.exit("setextHeadingLine"), r(m)) : i(m);
  }
}
const nO = { tokenize: rO };
function rO(t) {
  const r = this,
    i = t.attempt(
      Ys,
      a,
      t.attempt(
        this.parser.constructs.flowInitial,
        u,
        he(
          t,
          t.attempt(this.parser.constructs.flow, u, t.attempt(uA, u)),
          "linePrefix"
        )
      )
    );
  return i;
  function a(s) {
    if (s === null) {
      t.consume(s);
      return;
    }
    return (
      t.enter("lineEndingBlank"),
      t.consume(s),
      t.exit("lineEndingBlank"),
      (r.currentConstruct = void 0),
      i
    );
  }
  function u(s) {
    if (s === null) {
      t.consume(s);
      return;
    }
    return (
      t.enter("lineEnding"),
      t.consume(s),
      t.exit("lineEnding"),
      (r.currentConstruct = void 0),
      i
    );
  }
}
const iO = { resolveAll: Ob() },
  lO = Ab("string"),
  aO = Ab("text");
function Ab(t) {
  return { resolveAll: Ob(t === "text" ? oO : void 0), tokenize: r };
  function r(i) {
    const a = this,
      u = this.parser.constructs[t],
      s = i.attempt(u, f, d);
    return f;
    function f(g) {
      return m(g) ? s(g) : d(g);
    }
    function d(g) {
      if (g === null) {
        i.consume(g);
        return;
      }
      return i.enter("data"), i.consume(g), h;
    }
    function h(g) {
      return m(g) ? (i.exit("data"), s(g)) : (i.consume(g), h);
    }
    function m(g) {
      if (g === null) return !0;
      const y = u[g];
      let b = -1;
      if (y)
        for (; ++b < y.length; ) {
          const v = y[b];
          if (!v.previous || v.previous.call(a, a.previous)) return !0;
        }
      return !1;
    }
  }
}
function Ob(t) {
  return r;
  function r(i, a) {
    let u = -1,
      s;
    for (; ++u <= i.length; )
      s === void 0
        ? i[u] && i[u][1].type === "data" && ((s = u), u++)
        : (!i[u] || i[u][1].type !== "data") &&
          (u !== s + 2 &&
            ((i[s][1].end = i[u - 1][1].end),
            i.splice(s + 2, u - s - 2),
            (u = s + 2)),
          (s = void 0));
    return t ? t(i, a) : i;
  }
}
function oO(t, r) {
  let i = 0;
  for (; ++i <= t.length; )
    if (
      (i === t.length || t[i][1].type === "lineEnding") &&
      t[i - 1][1].type === "data"
    ) {
      const a = t[i - 1][1],
        u = r.sliceStream(a);
      let s = u.length,
        f = -1,
        d = 0,
        h;
      for (; s--; ) {
        const m = u[s];
        if (typeof m == "string") {
          for (f = m.length; m.charCodeAt(f - 1) === 32; ) d++, f--;
          if (f) break;
          f = -1;
        } else if (m === -2) (h = !0), d++;
        else if (m !== -1) {
          s++;
          break;
        }
      }
      if ((r._contentTypeTextTrailing && i === t.length && (d = 0), d)) {
        const m = {
          type:
            i === t.length || h || d < 2 ? "lineSuffix" : "hardBreakTrailing",
          start: {
            _bufferIndex: s ? f : a.start._bufferIndex + f,
            _index: a.start._index + s,
            line: a.end.line,
            column: a.end.column - d,
            offset: a.end.offset - d,
          },
          end: { ...a.end },
        };
        (a.end = { ...m.start }),
          a.start.offset === a.end.offset
            ? Object.assign(a, m)
            : (t.splice(i, 0, ["enter", m, r], ["exit", m, r]), (i += 2));
      }
      i++;
    }
  return t;
}
const uO = {
    42: sn,
    43: sn,
    45: sn,
    48: sn,
    49: sn,
    50: sn,
    51: sn,
    52: sn,
    53: sn,
    54: sn,
    55: sn,
    56: sn,
    57: sn,
    62: vb,
  },
  sO = { 91: pA },
  cO = { [-2]: Bd, [-1]: Bd, 32: Bd },
  fO = {
    35: bA,
    42: vs,
    45: [f1, vs],
    60: EA,
    61: f1,
    95: vs,
    96: s1,
    126: s1,
  },
  dO = { 38: xb, 92: bb },
  pO = {
    [-5]: Ld,
    [-4]: Ld,
    [-3]: Ld,
    33: PA,
    38: xb,
    42: hp,
    60: [VT, RA],
    91: VA,
    92: [yA, bb],
    93: Kp,
    95: hp,
    96: nA,
  },
  hO = { null: [hp, iO] },
  mO = { null: [42, 95] },
  gO = { null: [] },
  yO = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        attentionMarkers: mO,
        contentInitial: sO,
        disable: gO,
        document: uO,
        flow: fO,
        flowInitial: cO,
        insideSpan: hO,
        string: dO,
        text: pO,
      },
      Symbol.toStringTag,
      { value: "Module" }
    )
  );
function vO(t, r, i) {
  let a = {
    _bufferIndex: -1,
    _index: 0,
    line: (i && i.line) || 1,
    column: (i && i.column) || 1,
    offset: (i && i.offset) || 0,
  };
  const u = {},
    s = [];
  let f = [],
    d = [];
  const h = {
      attempt: Q(R),
      check: Q(k),
      consume: G,
      enter: $,
      exit: H,
      interrupt: Q(k, { interrupt: !0 }),
    },
    m = {
      code: null,
      containerState: {},
      defineSkip: T,
      events: [],
      now: O,
      parser: t,
      previous: null,
      sliceSerialize: b,
      sliceStream: v,
      write: y,
    };
  let g = r.tokenize.call(m, h);
  return r.resolveAll && s.push(r), m;
  function y(q) {
    return (
      (f = Hn(f, q)),
      L(),
      f[f.length - 1] !== null
        ? []
        : (C(r, 0), (m.events = Zp(s, m.events, m)), m.events)
    );
  }
  function b(q, w) {
    return xO(v(q), w);
  }
  function v(q) {
    return bO(f, q);
  }
  function O() {
    const { _bufferIndex: q, _index: w, line: B, column: N, offset: V } = a;
    return { _bufferIndex: q, _index: w, line: B, column: N, offset: V };
  }
  function T(q) {
    (u[q.line] = q.column), z();
  }
  function L() {
    let q;
    for (; a._index < f.length; ) {
      const w = f[a._index];
      if (typeof w == "string")
        for (
          q = a._index, a._bufferIndex < 0 && (a._bufferIndex = 0);
          a._index === q && a._bufferIndex < w.length;

        )
          D(w.charCodeAt(a._bufferIndex));
      else D(w);
    }
  }
  function D(q) {
    g = g(q);
  }
  function G(q) {
    zt(q)
      ? (a.line++, (a.column = 1), (a.offset += q === -3 ? 2 : 1), z())
      : q !== -1 && (a.column++, a.offset++),
      a._bufferIndex < 0
        ? a._index++
        : (a._bufferIndex++,
          a._bufferIndex === f[a._index].length &&
            ((a._bufferIndex = -1), a._index++)),
      (m.previous = q);
  }
  function $(q, w) {
    const B = w || {};
    return (
      (B.type = q),
      (B.start = O()),
      m.events.push(["enter", B, m]),
      d.push(B),
      B
    );
  }
  function H(q) {
    const w = d.pop();
    return (w.end = O()), m.events.push(["exit", w, m]), w;
  }
  function R(q, w) {
    C(q, w.from);
  }
  function k(q, w) {
    w.restore();
  }
  function Q(q, w) {
    return B;
    function B(N, V, _) {
      let P, nt, pt, x;
      return Array.isArray(N) ? J(N) : "tokenize" in N ? J([N]) : Z(N);
      function Z(it) {
        return ht;
        function ht(gt) {
          const Ct = gt !== null && it[gt],
            Bt = gt !== null && it.null,
            mt = [
              ...(Array.isArray(Ct) ? Ct : Ct ? [Ct] : []),
              ...(Array.isArray(Bt) ? Bt : Bt ? [Bt] : []),
            ];
          return J(mt)(gt);
        }
      }
      function J(it) {
        return (P = it), (nt = 0), it.length === 0 ? _ : A(it[nt]);
      }
      function A(it) {
        return ht;
        function ht(gt) {
          return (
            (x = U()),
            (pt = it),
            it.partial || (m.currentConstruct = it),
            it.name && m.parser.constructs.disable.null.includes(it.name)
              ? st()
              : it.tokenize.call(
                  w ? Object.assign(Object.create(m), w) : m,
                  h,
                  ut,
                  st
                )(gt)
          );
        }
      }
      function ut(it) {
        return q(pt, x), V;
      }
      function st(it) {
        return x.restore(), ++nt < P.length ? A(P[nt]) : _;
      }
    }
  }
  function C(q, w) {
    q.resolveAll && !s.includes(q) && s.push(q),
      q.resolve &&
        sr(m.events, w, m.events.length - w, q.resolve(m.events.slice(w), m)),
      q.resolveTo && (m.events = q.resolveTo(m.events, m));
  }
  function U() {
    const q = O(),
      w = m.previous,
      B = m.currentConstruct,
      N = m.events.length,
      V = Array.from(d);
    return { from: N, restore: _ };
    function _() {
      (a = q),
        (m.previous = w),
        (m.currentConstruct = B),
        (m.events.length = N),
        (d = V),
        z();
    }
  }
  function z() {
    a.line in u &&
      a.column < 2 &&
      ((a.column = u[a.line]), (a.offset += u[a.line] - 1));
  }
}
function bO(t, r) {
  const i = r.start._index,
    a = r.start._bufferIndex,
    u = r.end._index,
    s = r.end._bufferIndex;
  let f;
  if (i === u) f = [t[i].slice(a, s)];
  else {
    if (((f = t.slice(i, u)), a > -1)) {
      const d = f[0];
      typeof d == "string" ? (f[0] = d.slice(a)) : f.shift();
    }
    s > 0 && f.push(t[u].slice(0, s));
  }
  return f;
}
function xO(t, r) {
  let i = -1;
  const a = [];
  let u;
  for (; ++i < t.length; ) {
    const s = t[i];
    let f;
    if (typeof s == "string") f = s;
    else
      switch (s) {
        case -5: {
          f = "\r";
          break;
        }
        case -4: {
          f = `
`;
          break;
        }
        case -3: {
          f = `\r
`;
          break;
        }
        case -2: {
          f = r ? " " : "	";
          break;
        }
        case -1: {
          if (!r && u) continue;
          f = " ";
          break;
        }
        default:
          f = String.fromCharCode(s);
      }
    (u = s === -2), a.push(f);
  }
  return a.join("");
}
function SO(t) {
  const a = {
    constructs: kT([yO, ...((t || {}).extensions || [])]),
    content: u(LT),
    defined: [],
    document: u(jT),
    flow: u(nO),
    lazy: {},
    string: u(lO),
    text: u(aO),
  };
  return a;
  function u(s) {
    return f;
    function f(d) {
      return vO(a, s, d);
    }
  }
}
function wO(t) {
  for (; !Sb(t); );
  return t;
}
const d1 = /[\0\t\n\r]/g;
function EO() {
  let t = 1,
    r = "",
    i = !0,
    a;
  return u;
  function u(s, f, d) {
    const h = [];
    let m, g, y, b, v;
    for (
      s =
        r +
        (typeof s == "string"
          ? s.toString()
          : new TextDecoder(f || void 0).decode(s)),
        y = 0,
        r = "",
        i && (s.charCodeAt(0) === 65279 && y++, (i = void 0));
      y < s.length;

    ) {
      if (
        ((d1.lastIndex = y),
        (m = d1.exec(s)),
        (b = m && m.index !== void 0 ? m.index : s.length),
        (v = s.charCodeAt(b)),
        !m)
      ) {
        r = s.slice(y);
        break;
      }
      if (v === 10 && y === b && a) h.push(-3), (a = void 0);
      else
        switch (
          (a && (h.push(-5), (a = void 0)),
          y < b && (h.push(s.slice(y, b)), (t += b - y)),
          v)
        ) {
          case 0: {
            h.push(65533), t++;
            break;
          }
          case 9: {
            for (g = Math.ceil(t / 4) * 4, h.push(-2); t++ < g; ) h.push(-1);
            break;
          }
          case 10: {
            h.push(-4), (t = 1);
            break;
          }
          default:
            (a = !0), (t = 1);
        }
      y = b + 1;
    }
    return d && (a && h.push(-5), r && h.push(r), h.push(null)), h;
  }
}
const TO = /\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;
function AO(t) {
  return t.replace(TO, OO);
}
function OO(t, r, i) {
  if (r) return r;
  if (i.charCodeAt(0) === 35) {
    const u = i.charCodeAt(1),
      s = u === 120 || u === 88;
    return yb(i.slice(s ? 2 : 1), s ? 16 : 10);
  }
  return Ip(i) || t;
}
const Cb = {}.hasOwnProperty;
function CO(t, r, i) {
  return (
    typeof r != "string" && ((i = r), (r = void 0)),
    kO(i)(wO(SO(i).document().write(EO()(t, r, !0))))
  );
}
function kO(t) {
  const r = {
    transforms: [],
    canContainEols: ["emphasis", "fragment", "heading", "paragraph", "strong"],
    enter: {
      autolink: s(vt),
      autolinkProtocol: U,
      autolinkEmail: U,
      atxHeading: s(oe),
      blockQuote: s(Bt),
      characterEscape: U,
      characterReference: U,
      codeFenced: s(mt),
      codeFencedFenceInfo: f,
      codeFencedFenceMeta: f,
      codeIndented: s(mt, f),
      codeText: s(At, f),
      codeTextData: U,
      data: U,
      codeFlowValue: U,
      definition: s(Yt),
      definitionDestinationString: f,
      definitionLabelString: f,
      definitionTitleString: f,
      emphasis: s(ce),
      hardBreakEscape: s(fe),
      hardBreakTrailing: s(fe),
      htmlFlow: s(yt, f),
      htmlFlowData: U,
      htmlText: s(yt, f),
      htmlTextData: U,
      image: s(xt),
      label: f,
      link: s(vt),
      listItem: s(Et),
      listItemValue: b,
      listOrdered: s(ft, y),
      listUnordered: s(ft),
      paragraph: s(St),
      reference: A,
      referenceString: f,
      resourceDestinationString: f,
      resourceTitleString: f,
      setextHeading: s(oe),
      strong: s(kt),
      thematicBreak: s(Pt),
    },
    exit: {
      atxHeading: h(),
      atxHeadingSequence: R,
      autolink: h(),
      autolinkEmail: Ct,
      autolinkProtocol: gt,
      blockQuote: h(),
      characterEscapeValue: z,
      characterReferenceMarkerHexadecimal: st,
      characterReferenceMarkerNumeric: st,
      characterReferenceValue: it,
      characterReference: ht,
      codeFenced: h(L),
      codeFencedFence: T,
      codeFencedFenceInfo: v,
      codeFencedFenceMeta: O,
      codeFlowValue: z,
      codeIndented: h(D),
      codeText: h(V),
      codeTextData: z,
      data: z,
      definition: h(),
      definitionDestinationString: H,
      definitionLabelString: G,
      definitionTitleString: $,
      emphasis: h(),
      hardBreakEscape: h(w),
      hardBreakTrailing: h(w),
      htmlFlow: h(B),
      htmlFlowData: z,
      htmlText: h(N),
      htmlTextData: z,
      image: h(P),
      label: pt,
      labelText: nt,
      lineEnding: q,
      link: h(_),
      listItem: h(),
      listOrdered: h(),
      listUnordered: h(),
      paragraph: h(),
      referenceString: ut,
      resourceDestinationString: x,
      resourceTitleString: Z,
      resource: J,
      setextHeading: h(C),
      setextHeadingLineSequence: Q,
      setextHeadingText: k,
      strong: h(),
      thematicBreak: h(),
    },
  };
  kb(r, (t || {}).mdastExtensions || []);
  const i = {};
  return a;
  function a(F) {
    let ot = { type: "root", children: [] };
    const wt = {
        stack: [ot],
        tokenStack: [],
        config: r,
        enter: d,
        exit: m,
        buffer: f,
        resume: g,
        data: i,
      },
      Tt = [];
    let Dt = -1;
    for (; ++Dt < F.length; )
      if (F[Dt][1].type === "listOrdered" || F[Dt][1].type === "listUnordered")
        if (F[Dt][0] === "enter") Tt.push(Dt);
        else {
          const ue = Tt.pop();
          Dt = u(F, ue, Dt);
        }
    for (Dt = -1; ++Dt < F.length; ) {
      const ue = r[F[Dt][0]];
      Cb.call(ue, F[Dt][1].type) &&
        ue[F[Dt][1].type].call(
          Object.assign({ sliceSerialize: F[Dt][2].sliceSerialize }, wt),
          F[Dt][1]
        );
    }
    if (wt.tokenStack.length > 0) {
      const ue = wt.tokenStack[wt.tokenStack.length - 1];
      (ue[1] || p1).call(wt, void 0, ue[0]);
    }
    for (
      ot.position = {
        start: ti(
          F.length > 0 ? F[0][1].start : { line: 1, column: 1, offset: 0 }
        ),
        end: ti(
          F.length > 0
            ? F[F.length - 2][1].end
            : { line: 1, column: 1, offset: 0 }
        ),
      },
        Dt = -1;
      ++Dt < r.transforms.length;

    )
      ot = r.transforms[Dt](ot) || ot;
    return ot;
  }
  function u(F, ot, wt) {
    let Tt = ot - 1,
      Dt = -1,
      ue = !1,
      Xt,
      me,
      Le,
      ke;
    for (; ++Tt <= wt; ) {
      const ge = F[Tt];
      switch (ge[1].type) {
        case "listUnordered":
        case "listOrdered":
        case "blockQuote": {
          ge[0] === "enter" ? Dt++ : Dt--, (ke = void 0);
          break;
        }
        case "lineEndingBlank": {
          ge[0] === "enter" &&
            (Xt && !ke && !Dt && !Le && (Le = Tt), (ke = void 0));
          break;
        }
        case "linePrefix":
        case "listItemValue":
        case "listItemMarker":
        case "listItemPrefix":
        case "listItemPrefixWhitespace":
          break;
        default:
          ke = void 0;
      }
      if (
        (!Dt && ge[0] === "enter" && ge[1].type === "listItemPrefix") ||
        (Dt === -1 &&
          ge[0] === "exit" &&
          (ge[1].type === "listUnordered" || ge[1].type === "listOrdered"))
      ) {
        if (Xt) {
          let Ie = Tt;
          for (me = void 0; Ie--; ) {
            const Ze = F[Ie];
            if (
              Ze[1].type === "lineEnding" ||
              Ze[1].type === "lineEndingBlank"
            ) {
              if (Ze[0] === "exit") continue;
              me && ((F[me][1].type = "lineEndingBlank"), (ue = !0)),
                (Ze[1].type = "lineEnding"),
                (me = Ie);
            } else if (
              !(
                Ze[1].type === "linePrefix" ||
                Ze[1].type === "blockQuotePrefix" ||
                Ze[1].type === "blockQuotePrefixWhitespace" ||
                Ze[1].type === "blockQuoteMarker" ||
                Ze[1].type === "listItemIndent"
              )
            )
              break;
          }
          Le && (!me || Le < me) && (Xt._spread = !0),
            (Xt.end = Object.assign({}, me ? F[me][1].start : ge[1].end)),
            F.splice(me || Tt, 0, ["exit", Xt, ge[2]]),
            Tt++,
            wt++;
        }
        if (ge[1].type === "listItemPrefix") {
          const Ie = {
            type: "listItem",
            _spread: !1,
            start: Object.assign({}, ge[1].start),
            end: void 0,
          };
          (Xt = Ie),
            F.splice(Tt, 0, ["enter", Ie, ge[2]]),
            Tt++,
            wt++,
            (Le = void 0),
            (ke = !0);
        }
      }
    }
    return (F[ot][1]._spread = ue), wt;
  }
  function s(F, ot) {
    return wt;
    function wt(Tt) {
      d.call(this, F(Tt), Tt), ot && ot.call(this, Tt);
    }
  }
  function f() {
    this.stack.push({ type: "fragment", children: [] });
  }
  function d(F, ot, wt) {
    this.stack[this.stack.length - 1].children.push(F),
      this.stack.push(F),
      this.tokenStack.push([ot, wt || void 0]),
      (F.position = { start: ti(ot.start), end: void 0 });
  }
  function h(F) {
    return ot;
    function ot(wt) {
      F && F.call(this, wt), m.call(this, wt);
    }
  }
  function m(F, ot) {
    const wt = this.stack.pop(),
      Tt = this.tokenStack.pop();
    if (Tt)
      Tt[0].type !== F.type &&
        (ot ? ot.call(this, F, Tt[0]) : (Tt[1] || p1).call(this, F, Tt[0]));
    else
      throw new Error(
        "Cannot close `" +
          F.type +
          "` (" +
          so({ start: F.start, end: F.end }) +
          "): it’s not open"
      );
    wt.position.end = ti(F.end);
  }
  function g() {
    return OT(this.stack.pop());
  }
  function y() {
    this.data.expectingFirstListItemValue = !0;
  }
  function b(F) {
    if (this.data.expectingFirstListItemValue) {
      const ot = this.stack[this.stack.length - 2];
      (ot.start = Number.parseInt(this.sliceSerialize(F), 10)),
        (this.data.expectingFirstListItemValue = void 0);
    }
  }
  function v() {
    const F = this.resume(),
      ot = this.stack[this.stack.length - 1];
    ot.lang = F;
  }
  function O() {
    const F = this.resume(),
      ot = this.stack[this.stack.length - 1];
    ot.meta = F;
  }
  function T() {
    this.data.flowCodeInside ||
      (this.buffer(), (this.data.flowCodeInside = !0));
  }
  function L() {
    const F = this.resume(),
      ot = this.stack[this.stack.length - 1];
    (ot.value = F.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g, "")),
      (this.data.flowCodeInside = void 0);
  }
  function D() {
    const F = this.resume(),
      ot = this.stack[this.stack.length - 1];
    ot.value = F.replace(/(\r?\n|\r)$/g, "");
  }
  function G(F) {
    const ot = this.resume(),
      wt = this.stack[this.stack.length - 1];
    (wt.label = ot), (wt.identifier = Ll(this.sliceSerialize(F)).toLowerCase());
  }
  function $() {
    const F = this.resume(),
      ot = this.stack[this.stack.length - 1];
    ot.title = F;
  }
  function H() {
    const F = this.resume(),
      ot = this.stack[this.stack.length - 1];
    ot.url = F;
  }
  function R(F) {
    const ot = this.stack[this.stack.length - 1];
    if (!ot.depth) {
      const wt = this.sliceSerialize(F).length;
      ot.depth = wt;
    }
  }
  function k() {
    this.data.setextHeadingSlurpLineEnding = !0;
  }
  function Q(F) {
    const ot = this.stack[this.stack.length - 1];
    ot.depth = this.sliceSerialize(F).codePointAt(0) === 61 ? 1 : 2;
  }
  function C() {
    this.data.setextHeadingSlurpLineEnding = void 0;
  }
  function U(F) {
    const wt = this.stack[this.stack.length - 1].children;
    let Tt = wt[wt.length - 1];
    (!Tt || Tt.type !== "text") &&
      ((Tt = jt()),
      (Tt.position = { start: ti(F.start), end: void 0 }),
      wt.push(Tt)),
      this.stack.push(Tt);
  }
  function z(F) {
    const ot = this.stack.pop();
    (ot.value += this.sliceSerialize(F)), (ot.position.end = ti(F.end));
  }
  function q(F) {
    const ot = this.stack[this.stack.length - 1];
    if (this.data.atHardBreak) {
      const wt = ot.children[ot.children.length - 1];
      (wt.position.end = ti(F.end)), (this.data.atHardBreak = void 0);
      return;
    }
    !this.data.setextHeadingSlurpLineEnding &&
      r.canContainEols.includes(ot.type) &&
      (U.call(this, F), z.call(this, F));
  }
  function w() {
    this.data.atHardBreak = !0;
  }
  function B() {
    const F = this.resume(),
      ot = this.stack[this.stack.length - 1];
    ot.value = F;
  }
  function N() {
    const F = this.resume(),
      ot = this.stack[this.stack.length - 1];
    ot.value = F;
  }
  function V() {
    const F = this.resume(),
      ot = this.stack[this.stack.length - 1];
    ot.value = F;
  }
  function _() {
    const F = this.stack[this.stack.length - 1];
    if (this.data.inReference) {
      const ot = this.data.referenceType || "shortcut";
      (F.type += "Reference"),
        (F.referenceType = ot),
        delete F.url,
        delete F.title;
    } else delete F.identifier, delete F.label;
    this.data.referenceType = void 0;
  }
  function P() {
    const F = this.stack[this.stack.length - 1];
    if (this.data.inReference) {
      const ot = this.data.referenceType || "shortcut";
      (F.type += "Reference"),
        (F.referenceType = ot),
        delete F.url,
        delete F.title;
    } else delete F.identifier, delete F.label;
    this.data.referenceType = void 0;
  }
  function nt(F) {
    const ot = this.sliceSerialize(F),
      wt = this.stack[this.stack.length - 2];
    (wt.label = AO(ot)), (wt.identifier = Ll(ot).toLowerCase());
  }
  function pt() {
    const F = this.stack[this.stack.length - 1],
      ot = this.resume(),
      wt = this.stack[this.stack.length - 1];
    if (((this.data.inReference = !0), wt.type === "link")) {
      const Tt = F.children;
      wt.children = Tt;
    } else wt.alt = ot;
  }
  function x() {
    const F = this.resume(),
      ot = this.stack[this.stack.length - 1];
    ot.url = F;
  }
  function Z() {
    const F = this.resume(),
      ot = this.stack[this.stack.length - 1];
    ot.title = F;
  }
  function J() {
    this.data.inReference = void 0;
  }
  function A() {
    this.data.referenceType = "collapsed";
  }
  function ut(F) {
    const ot = this.resume(),
      wt = this.stack[this.stack.length - 1];
    (wt.label = ot),
      (wt.identifier = Ll(this.sliceSerialize(F)).toLowerCase()),
      (this.data.referenceType = "full");
  }
  function st(F) {
    this.data.characterReferenceType = F.type;
  }
  function it(F) {
    const ot = this.sliceSerialize(F),
      wt = this.data.characterReferenceType;
    let Tt;
    wt
      ? ((Tt = yb(ot, wt === "characterReferenceMarkerNumeric" ? 10 : 16)),
        (this.data.characterReferenceType = void 0))
      : (Tt = Ip(ot));
    const Dt = this.stack[this.stack.length - 1];
    Dt.value += Tt;
  }
  function ht(F) {
    const ot = this.stack.pop();
    ot.position.end = ti(F.end);
  }
  function gt(F) {
    z.call(this, F);
    const ot = this.stack[this.stack.length - 1];
    ot.url = this.sliceSerialize(F);
  }
  function Ct(F) {
    z.call(this, F);
    const ot = this.stack[this.stack.length - 1];
    ot.url = "mailto:" + this.sliceSerialize(F);
  }
  function Bt() {
    return { type: "blockquote", children: [] };
  }
  function mt() {
    return { type: "code", lang: null, meta: null, value: "" };
  }
  function At() {
    return { type: "inlineCode", value: "" };
  }
  function Yt() {
    return {
      type: "definition",
      identifier: "",
      label: null,
      title: null,
      url: "",
    };
  }
  function ce() {
    return { type: "emphasis", children: [] };
  }
  function oe() {
    return { type: "heading", depth: 0, children: [] };
  }
  function fe() {
    return { type: "break" };
  }
  function yt() {
    return { type: "html", value: "" };
  }
  function xt() {
    return { type: "image", title: null, url: "", alt: null };
  }
  function vt() {
    return { type: "link", title: null, url: "", children: [] };
  }
  function ft(F) {
    return {
      type: "list",
      ordered: F.type === "listOrdered",
      start: null,
      spread: F._spread,
      children: [],
    };
  }
  function Et(F) {
    return { type: "listItem", spread: F._spread, checked: null, children: [] };
  }
  function St() {
    return { type: "paragraph", children: [] };
  }
  function kt() {
    return { type: "strong", children: [] };
  }
  function jt() {
    return { type: "text", value: "" };
  }
  function Pt() {
    return { type: "thematicBreak" };
  }
}
function ti(t) {
  return { line: t.line, column: t.column, offset: t.offset };
}
function kb(t, r) {
  let i = -1;
  for (; ++i < r.length; ) {
    const a = r[i];
    Array.isArray(a) ? kb(t, a) : _O(t, a);
  }
}
function _O(t, r) {
  let i;
  for (i in r)
    if (Cb.call(r, i))
      switch (i) {
        case "canContainEols": {
          const a = r[i];
          a && t[i].push(...a);
          break;
        }
        case "transforms": {
          const a = r[i];
          a && t[i].push(...a);
          break;
        }
        case "enter":
        case "exit": {
          const a = r[i];
          a && Object.assign(t[i], a);
          break;
        }
      }
}
function p1(t, r) {
  throw t
    ? new Error(
        "Cannot close `" +
          t.type +
          "` (" +
          so({ start: t.start, end: t.end }) +
          "): a different token (`" +
          r.type +
          "`, " +
          so({ start: r.start, end: r.end }) +
          ") is open"
      )
    : new Error(
        "Cannot close document, a token (`" +
          r.type +
          "`, " +
          so({ start: r.start, end: r.end }) +
          ") is still open"
      );
}
function RO(t) {
  const r = this;
  r.parser = i;
  function i(a) {
    return CO(a, {
      ...r.data("settings"),
      ...t,
      extensions: r.data("micromarkExtensions") || [],
      mdastExtensions: r.data("fromMarkdownExtensions") || [],
    });
  }
}
function MO(t, r) {
  const i = {
    type: "element",
    tagName: "blockquote",
    properties: {},
    children: t.wrap(t.all(r), !0),
  };
  return t.patch(r, i), t.applyData(r, i);
}
function zO(t, r) {
  const i = { type: "element", tagName: "br", properties: {}, children: [] };
  return (
    t.patch(r, i),
    [
      t.applyData(r, i),
      {
        type: "text",
        value: `
`,
      },
    ]
  );
}
function DO(t, r) {
  const i = r.value
      ? r.value +
        `
`
      : "",
    a = {};
  r.lang && (a.className = ["language-" + r.lang]);
  let u = {
    type: "element",
    tagName: "code",
    properties: a,
    children: [{ type: "text", value: i }],
  };
  return (
    r.meta && (u.data = { meta: r.meta }),
    t.patch(r, u),
    (u = t.applyData(r, u)),
    (u = { type: "element", tagName: "pre", properties: {}, children: [u] }),
    t.patch(r, u),
    u
  );
}
function NO(t, r) {
  const i = {
    type: "element",
    tagName: "del",
    properties: {},
    children: t.all(r),
  };
  return t.patch(r, i), t.applyData(r, i);
}
function BO(t, r) {
  const i = {
    type: "element",
    tagName: "em",
    properties: {},
    children: t.all(r),
  };
  return t.patch(r, i), t.applyData(r, i);
}
function LO(t, r) {
  const i =
      typeof t.options.clobberPrefix == "string"
        ? t.options.clobberPrefix
        : "user-content-",
    a = String(r.identifier).toUpperCase(),
    u = Fl(a.toLowerCase()),
    s = t.footnoteOrder.indexOf(a);
  let f,
    d = t.footnoteCounts.get(a);
  d === void 0
    ? ((d = 0), t.footnoteOrder.push(a), (f = t.footnoteOrder.length))
    : (f = s + 1),
    (d += 1),
    t.footnoteCounts.set(a, d);
  const h = {
    type: "element",
    tagName: "a",
    properties: {
      href: "#" + i + "fn-" + u,
      id: i + "fnref-" + u + (d > 1 ? "-" + d : ""),
      dataFootnoteRef: !0,
      ariaDescribedBy: ["footnote-label"],
    },
    children: [{ type: "text", value: String(f) }],
  };
  t.patch(r, h);
  const m = { type: "element", tagName: "sup", properties: {}, children: [h] };
  return t.patch(r, m), t.applyData(r, m);
}
function UO(t, r) {
  const i = {
    type: "element",
    tagName: "h" + r.depth,
    properties: {},
    children: t.all(r),
  };
  return t.patch(r, i), t.applyData(r, i);
}
function jO(t, r) {
  if (t.options.allowDangerousHtml) {
    const i = { type: "raw", value: r.value };
    return t.patch(r, i), t.applyData(r, i);
  }
}
function _b(t, r) {
  const i = r.referenceType;
  let a = "]";
  if (
    (i === "collapsed"
      ? (a += "[]")
      : i === "full" && (a += "[" + (r.label || r.identifier) + "]"),
    r.type === "imageReference")
  )
    return [{ type: "text", value: "![" + r.alt + a }];
  const u = t.all(r),
    s = u[0];
  s && s.type === "text"
    ? (s.value = "[" + s.value)
    : u.unshift({ type: "text", value: "[" });
  const f = u[u.length - 1];
  return (
    f && f.type === "text"
      ? (f.value += a)
      : u.push({ type: "text", value: a }),
    u
  );
}
function HO(t, r) {
  const i = String(r.identifier).toUpperCase(),
    a = t.definitionById.get(i);
  if (!a) return _b(t, r);
  const u = { src: Fl(a.url || ""), alt: r.alt };
  a.title !== null && a.title !== void 0 && (u.title = a.title);
  const s = { type: "element", tagName: "img", properties: u, children: [] };
  return t.patch(r, s), t.applyData(r, s);
}
function qO(t, r) {
  const i = { src: Fl(r.url) };
  r.alt !== null && r.alt !== void 0 && (i.alt = r.alt),
    r.title !== null && r.title !== void 0 && (i.title = r.title);
  const a = { type: "element", tagName: "img", properties: i, children: [] };
  return t.patch(r, a), t.applyData(r, a);
}
function PO(t, r) {
  const i = { type: "text", value: r.value.replace(/\r?\n|\r/g, " ") };
  t.patch(r, i);
  const a = { type: "element", tagName: "code", properties: {}, children: [i] };
  return t.patch(r, a), t.applyData(r, a);
}
function $O(t, r) {
  const i = String(r.identifier).toUpperCase(),
    a = t.definitionById.get(i);
  if (!a) return _b(t, r);
  const u = { href: Fl(a.url || "") };
  a.title !== null && a.title !== void 0 && (u.title = a.title);
  const s = {
    type: "element",
    tagName: "a",
    properties: u,
    children: t.all(r),
  };
  return t.patch(r, s), t.applyData(r, s);
}
function VO(t, r) {
  const i = { href: Fl(r.url) };
  r.title !== null && r.title !== void 0 && (i.title = r.title);
  const a = {
    type: "element",
    tagName: "a",
    properties: i,
    children: t.all(r),
  };
  return t.patch(r, a), t.applyData(r, a);
}
function YO(t, r, i) {
  const a = t.all(r),
    u = i ? GO(i) : Rb(r),
    s = {},
    f = [];
  if (typeof r.checked == "boolean") {
    const g = a[0];
    let y;
    g && g.type === "element" && g.tagName === "p"
      ? (y = g)
      : ((y = { type: "element", tagName: "p", properties: {}, children: [] }),
        a.unshift(y)),
      y.children.length > 0 && y.children.unshift({ type: "text", value: " " }),
      y.children.unshift({
        type: "element",
        tagName: "input",
        properties: { type: "checkbox", checked: r.checked, disabled: !0 },
        children: [],
      }),
      (s.className = ["task-list-item"]);
  }
  let d = -1;
  for (; ++d < a.length; ) {
    const g = a[d];
    (u || d !== 0 || g.type !== "element" || g.tagName !== "p") &&
      f.push({
        type: "text",
        value: `
`,
      }),
      g.type === "element" && g.tagName === "p" && !u
        ? f.push(...g.children)
        : f.push(g);
  }
  const h = a[a.length - 1];
  h &&
    (u || h.type !== "element" || h.tagName !== "p") &&
    f.push({
      type: "text",
      value: `
`,
    });
  const m = { type: "element", tagName: "li", properties: s, children: f };
  return t.patch(r, m), t.applyData(r, m);
}
function GO(t) {
  let r = !1;
  if (t.type === "list") {
    r = t.spread || !1;
    const i = t.children;
    let a = -1;
    for (; !r && ++a < i.length; ) r = Rb(i[a]);
  }
  return r;
}
function Rb(t) {
  const r = t.spread;
  return r ?? t.children.length > 1;
}
function XO(t, r) {
  const i = {},
    a = t.all(r);
  let u = -1;
  for (
    typeof r.start == "number" && r.start !== 1 && (i.start = r.start);
    ++u < a.length;

  ) {
    const f = a[u];
    if (
      f.type === "element" &&
      f.tagName === "li" &&
      f.properties &&
      Array.isArray(f.properties.className) &&
      f.properties.className.includes("task-list-item")
    ) {
      i.className = ["contains-task-list"];
      break;
    }
  }
  const s = {
    type: "element",
    tagName: r.ordered ? "ol" : "ul",
    properties: i,
    children: t.wrap(a, !0),
  };
  return t.patch(r, s), t.applyData(r, s);
}
function QO(t, r) {
  const i = {
    type: "element",
    tagName: "p",
    properties: {},
    children: t.all(r),
  };
  return t.patch(r, i), t.applyData(r, i);
}
function IO(t, r) {
  const i = { type: "root", children: t.wrap(t.all(r)) };
  return t.patch(r, i), t.applyData(r, i);
}
function ZO(t, r) {
  const i = {
    type: "element",
    tagName: "strong",
    properties: {},
    children: t.all(r),
  };
  return t.patch(r, i), t.applyData(r, i);
}
function KO(t, r) {
  const i = t.all(r),
    a = i.shift(),
    u = [];
  if (a) {
    const f = {
      type: "element",
      tagName: "thead",
      properties: {},
      children: t.wrap([a], !0),
    };
    t.patch(r.children[0], f), u.push(f);
  }
  if (i.length > 0) {
    const f = {
        type: "element",
        tagName: "tbody",
        properties: {},
        children: t.wrap(i, !0),
      },
      d = Yp(r.children[1]),
      h = cb(r.children[r.children.length - 1]);
    d && h && (f.position = { start: d, end: h }), u.push(f);
  }
  const s = {
    type: "element",
    tagName: "table",
    properties: {},
    children: t.wrap(u, !0),
  };
  return t.patch(r, s), t.applyData(r, s);
}
function FO(t, r, i) {
  const a = i ? i.children : void 0,
    s = (a ? a.indexOf(r) : 1) === 0 ? "th" : "td",
    f = i && i.type === "table" ? i.align : void 0,
    d = f ? f.length : r.children.length;
  let h = -1;
  const m = [];
  for (; ++h < d; ) {
    const y = r.children[h],
      b = {},
      v = f ? f[h] : void 0;
    v && (b.align = v);
    let O = { type: "element", tagName: s, properties: b, children: [] };
    y && ((O.children = t.all(y)), t.patch(y, O), (O = t.applyData(y, O))),
      m.push(O);
  }
  const g = {
    type: "element",
    tagName: "tr",
    properties: {},
    children: t.wrap(m, !0),
  };
  return t.patch(r, g), t.applyData(r, g);
}
function WO(t, r) {
  const i = {
    type: "element",
    tagName: "td",
    properties: {},
    children: t.all(r),
  };
  return t.patch(r, i), t.applyData(r, i);
}
const h1 = 9,
  m1 = 32;
function JO(t) {
  const r = String(t),
    i = /\r?\n|\r/g;
  let a = i.exec(r),
    u = 0;
  const s = [];
  for (; a; )
    s.push(g1(r.slice(u, a.index), u > 0, !0), a[0]),
      (u = a.index + a[0].length),
      (a = i.exec(r));
  return s.push(g1(r.slice(u), u > 0, !1)), s.join("");
}
function g1(t, r, i) {
  let a = 0,
    u = t.length;
  if (r) {
    let s = t.codePointAt(a);
    for (; s === h1 || s === m1; ) a++, (s = t.codePointAt(a));
  }
  if (i) {
    let s = t.codePointAt(u - 1);
    for (; s === h1 || s === m1; ) u--, (s = t.codePointAt(u - 1));
  }
  return u > a ? t.slice(a, u) : "";
}
function tC(t, r) {
  const i = { type: "text", value: JO(String(r.value)) };
  return t.patch(r, i), t.applyData(r, i);
}
function eC(t, r) {
  const i = { type: "element", tagName: "hr", properties: {}, children: [] };
  return t.patch(r, i), t.applyData(r, i);
}
const nC = {
  blockquote: MO,
  break: zO,
  code: DO,
  delete: NO,
  emphasis: BO,
  footnoteReference: LO,
  heading: UO,
  html: jO,
  imageReference: HO,
  image: qO,
  inlineCode: PO,
  linkReference: $O,
  link: VO,
  listItem: YO,
  list: XO,
  paragraph: QO,
  root: IO,
  strong: ZO,
  table: KO,
  tableCell: WO,
  tableRow: FO,
  text: tC,
  thematicBreak: eC,
  toml: Wu,
  yaml: Wu,
  definition: Wu,
  footnoteDefinition: Wu,
};
function Wu() {}
const Mb = -1,
  Gs = 0,
  fo = 1,
  _s = 2,
  Fp = 3,
  Wp = 4,
  Jp = 5,
  th = 6,
  zb = 7,
  Db = 8,
  y1 = typeof self == "object" ? self : globalThis,
  rC = (t, r) => {
    const i = (u, s) => (t.set(s, u), u),
      a = (u) => {
        if (t.has(u)) return t.get(u);
        const [s, f] = r[u];
        switch (s) {
          case Gs:
          case Mb:
            return i(f, u);
          case fo: {
            const d = i([], u);
            for (const h of f) d.push(a(h));
            return d;
          }
          case _s: {
            const d = i({}, u);
            for (const [h, m] of f) d[a(h)] = a(m);
            return d;
          }
          case Fp:
            return i(new Date(f), u);
          case Wp: {
            const { source: d, flags: h } = f;
            return i(new RegExp(d, h), u);
          }
          case Jp: {
            const d = i(new Map(), u);
            for (const [h, m] of f) d.set(a(h), a(m));
            return d;
          }
          case th: {
            const d = i(new Set(), u);
            for (const h of f) d.add(a(h));
            return d;
          }
          case zb: {
            const { name: d, message: h } = f;
            return i(new y1[d](h), u);
          }
          case Db:
            return i(BigInt(f), u);
          case "BigInt":
            return i(Object(BigInt(f)), u);
          case "ArrayBuffer":
            return i(new Uint8Array(f).buffer, f);
          case "DataView": {
            const { buffer: d } = new Uint8Array(f);
            return i(new DataView(d), f);
          }
        }
        return i(new y1[s](f), u);
      };
    return a;
  },
  v1 = (t) => rC(new Map(), t)(0),
  Tl = "",
  { toString: iC } = {},
  { keys: lC } = Object,
  eo = (t) => {
    const r = typeof t;
    if (r !== "object" || !t) return [Gs, r];
    const i = iC.call(t).slice(8, -1);
    switch (i) {
      case "Array":
        return [fo, Tl];
      case "Object":
        return [_s, Tl];
      case "Date":
        return [Fp, Tl];
      case "RegExp":
        return [Wp, Tl];
      case "Map":
        return [Jp, Tl];
      case "Set":
        return [th, Tl];
      case "DataView":
        return [fo, i];
    }
    return i.includes("Array")
      ? [fo, i]
      : i.includes("Error")
      ? [zb, i]
      : [_s, i];
  },
  Ju = ([t, r]) => t === Gs && (r === "function" || r === "symbol"),
  aC = (t, r, i, a) => {
    const u = (f, d) => {
        const h = a.push(f) - 1;
        return i.set(d, h), h;
      },
      s = (f) => {
        if (i.has(f)) return i.get(f);
        let [d, h] = eo(f);
        switch (d) {
          case Gs: {
            let g = f;
            switch (h) {
              case "bigint":
                (d = Db), (g = f.toString());
                break;
              case "function":
              case "symbol":
                if (t) throw new TypeError("unable to serialize " + h);
                g = null;
                break;
              case "undefined":
                return u([Mb], f);
            }
            return u([d, g], f);
          }
          case fo: {
            if (h) {
              let b = f;
              return (
                h === "DataView"
                  ? (b = new Uint8Array(f.buffer))
                  : h === "ArrayBuffer" && (b = new Uint8Array(f)),
                u([h, [...b]], f)
              );
            }
            const g = [],
              y = u([d, g], f);
            for (const b of f) g.push(s(b));
            return y;
          }
          case _s: {
            if (h)
              switch (h) {
                case "BigInt":
                  return u([h, f.toString()], f);
                case "Boolean":
                case "Number":
                case "String":
                  return u([h, f.valueOf()], f);
              }
            if (r && "toJSON" in f) return s(f.toJSON());
            const g = [],
              y = u([d, g], f);
            for (const b of lC(f))
              (t || !Ju(eo(f[b]))) && g.push([s(b), s(f[b])]);
            return y;
          }
          case Fp:
            return u([d, f.toISOString()], f);
          case Wp: {
            const { source: g, flags: y } = f;
            return u([d, { source: g, flags: y }], f);
          }
          case Jp: {
            const g = [],
              y = u([d, g], f);
            for (const [b, v] of f)
              (t || !(Ju(eo(b)) || Ju(eo(v)))) && g.push([s(b), s(v)]);
            return y;
          }
          case th: {
            const g = [],
              y = u([d, g], f);
            for (const b of f) (t || !Ju(eo(b))) && g.push(s(b));
            return y;
          }
        }
        const { message: m } = f;
        return u([d, { name: h, message: m }], f);
      };
    return s;
  },
  b1 = (t, { json: r, lossy: i } = {}) => {
    const a = [];
    return aC(!(r || i), !!r, new Map(), a)(t), a;
  },
  Rs =
    typeof structuredClone == "function"
      ? (t, r) =>
          r && ("json" in r || "lossy" in r) ? v1(b1(t, r)) : structuredClone(t)
      : (t, r) => v1(b1(t, r));
function oC(t, r) {
  const i = [{ type: "text", value: "↩" }];
  return (
    r > 1 &&
      i.push({
        type: "element",
        tagName: "sup",
        properties: {},
        children: [{ type: "text", value: String(r) }],
      }),
    i
  );
}
function uC(t, r) {
  return "Back to reference " + (t + 1) + (r > 1 ? "-" + r : "");
}
function sC(t) {
  const r =
      typeof t.options.clobberPrefix == "string"
        ? t.options.clobberPrefix
        : "user-content-",
    i = t.options.footnoteBackContent || oC,
    a = t.options.footnoteBackLabel || uC,
    u = t.options.footnoteLabel || "Footnotes",
    s = t.options.footnoteLabelTagName || "h2",
    f = t.options.footnoteLabelProperties || { className: ["sr-only"] },
    d = [];
  let h = -1;
  for (; ++h < t.footnoteOrder.length; ) {
    const m = t.footnoteById.get(t.footnoteOrder[h]);
    if (!m) continue;
    const g = t.all(m),
      y = String(m.identifier).toUpperCase(),
      b = Fl(y.toLowerCase());
    let v = 0;
    const O = [],
      T = t.footnoteCounts.get(y);
    for (; T !== void 0 && ++v <= T; ) {
      O.length > 0 && O.push({ type: "text", value: " " });
      let G = typeof i == "string" ? i : i(h, v);
      typeof G == "string" && (G = { type: "text", value: G }),
        O.push({
          type: "element",
          tagName: "a",
          properties: {
            href: "#" + r + "fnref-" + b + (v > 1 ? "-" + v : ""),
            dataFootnoteBackref: "",
            ariaLabel: typeof a == "string" ? a : a(h, v),
            className: ["data-footnote-backref"],
          },
          children: Array.isArray(G) ? G : [G],
        });
    }
    const L = g[g.length - 1];
    if (L && L.type === "element" && L.tagName === "p") {
      const G = L.children[L.children.length - 1];
      G && G.type === "text"
        ? (G.value += " ")
        : L.children.push({ type: "text", value: " " }),
        L.children.push(...O);
    } else g.push(...O);
    const D = {
      type: "element",
      tagName: "li",
      properties: { id: r + "fn-" + b },
      children: t.wrap(g, !0),
    };
    t.patch(m, D), d.push(D);
  }
  if (d.length !== 0)
    return {
      type: "element",
      tagName: "section",
      properties: { dataFootnotes: !0, className: ["footnotes"] },
      children: [
        {
          type: "element",
          tagName: s,
          properties: { ...Rs(f), id: "footnote-label" },
          children: [{ type: "text", value: u }],
        },
        {
          type: "text",
          value: `
`,
        },
        {
          type: "element",
          tagName: "ol",
          properties: {},
          children: t.wrap(d, !0),
        },
        {
          type: "text",
          value: `
`,
        },
      ],
    };
}
const Nb = function (t) {
  if (t == null) return pC;
  if (typeof t == "function") return Xs(t);
  if (typeof t == "object") return Array.isArray(t) ? cC(t) : fC(t);
  if (typeof t == "string") return dC(t);
  throw new Error("Expected function, string, or object as test");
};
function cC(t) {
  const r = [];
  let i = -1;
  for (; ++i < t.length; ) r[i] = Nb(t[i]);
  return Xs(a);
  function a(...u) {
    let s = -1;
    for (; ++s < r.length; ) if (r[s].apply(this, u)) return !0;
    return !1;
  }
}
function fC(t) {
  const r = t;
  return Xs(i);
  function i(a) {
    const u = a;
    let s;
    for (s in t) if (u[s] !== r[s]) return !1;
    return !0;
  }
}
function dC(t) {
  return Xs(r);
  function r(i) {
    return i && i.type === t;
  }
}
function Xs(t) {
  return r;
  function r(i, a, u) {
    return !!(
      hC(i) && t.call(this, i, typeof a == "number" ? a : void 0, u || void 0)
    );
  }
}
function pC() {
  return !0;
}
function hC(t) {
  return t !== null && typeof t == "object" && "type" in t;
}
const Bb = [],
  mC = !0,
  x1 = !1,
  gC = "skip";
function yC(t, r, i, a) {
  let u;
  typeof r == "function" && typeof i != "function"
    ? ((a = i), (i = r))
    : (u = r);
  const s = Nb(u),
    f = a ? -1 : 1;
  d(t, void 0, [])();
  function d(h, m, g) {
    const y = h && typeof h == "object" ? h : {};
    if (typeof y.type == "string") {
      const v =
        typeof y.tagName == "string"
          ? y.tagName
          : typeof y.name == "string"
          ? y.name
          : void 0;
      Object.defineProperty(b, "name", {
        value: "node (" + (h.type + (v ? "<" + v + ">" : "")) + ")",
      });
    }
    return b;
    function b() {
      let v = Bb,
        O,
        T,
        L;
      if (
        (!r || s(h, m, g[g.length - 1] || void 0)) &&
        ((v = vC(i(h, g))), v[0] === x1)
      )
        return v;
      if ("children" in h && h.children) {
        const D = h;
        if (D.children && v[0] !== gC)
          for (
            T = (a ? D.children.length : -1) + f, L = g.concat(D);
            T > -1 && T < D.children.length;

          ) {
            const G = D.children[T];
            if (((O = d(G, T, L)()), O[0] === x1)) return O;
            T = typeof O[1] == "number" ? O[1] : T + f;
          }
      }
      return v;
    }
  }
}
function vC(t) {
  return Array.isArray(t)
    ? t
    : typeof t == "number"
    ? [mC, t]
    : t == null
    ? Bb
    : [t];
}
function Lb(t, r, i, a) {
  let u, s, f;
  typeof r == "function" && typeof i != "function"
    ? ((s = void 0), (f = r), (u = i))
    : ((s = r), (f = i), (u = a)),
    yC(t, s, d, u);
  function d(h, m) {
    const g = m[m.length - 1],
      y = g ? g.children.indexOf(h) : void 0;
    return f(h, y, g);
  }
}
const mp = {}.hasOwnProperty,
  bC = {};
function xC(t, r) {
  const i = r || bC,
    a = new Map(),
    u = new Map(),
    s = new Map(),
    f = { ...nC, ...i.handlers },
    d = {
      all: m,
      applyData: wC,
      definitionById: a,
      footnoteById: u,
      footnoteCounts: s,
      footnoteOrder: [],
      handlers: f,
      one: h,
      options: i,
      patch: SC,
      wrap: TC,
    };
  return (
    Lb(t, function (g) {
      if (g.type === "definition" || g.type === "footnoteDefinition") {
        const y = g.type === "definition" ? a : u,
          b = String(g.identifier).toUpperCase();
        y.has(b) || y.set(b, g);
      }
    }),
    d
  );
  function h(g, y) {
    const b = g.type,
      v = d.handlers[b];
    if (mp.call(d.handlers, b) && v) return v(d, g, y);
    if (d.options.passThrough && d.options.passThrough.includes(b)) {
      if ("children" in g) {
        const { children: T, ...L } = g,
          D = Rs(L);
        return (D.children = d.all(g)), D;
      }
      return Rs(g);
    }
    return (d.options.unknownHandler || EC)(d, g, y);
  }
  function m(g) {
    const y = [];
    if ("children" in g) {
      const b = g.children;
      let v = -1;
      for (; ++v < b.length; ) {
        const O = d.one(b[v], g);
        if (O) {
          if (
            v &&
            b[v - 1].type === "break" &&
            (!Array.isArray(O) && O.type === "text" && (O.value = S1(O.value)),
            !Array.isArray(O) && O.type === "element")
          ) {
            const T = O.children[0];
            T && T.type === "text" && (T.value = S1(T.value));
          }
          Array.isArray(O) ? y.push(...O) : y.push(O);
        }
      }
    }
    return y;
  }
}
function SC(t, r) {
  t.position && (r.position = iT(t));
}
function wC(t, r) {
  let i = r;
  if (t && t.data) {
    const a = t.data.hName,
      u = t.data.hChildren,
      s = t.data.hProperties;
    if (typeof a == "string")
      if (i.type === "element") i.tagName = a;
      else {
        const f = "children" in i ? i.children : [i];
        i = { type: "element", tagName: a, properties: {}, children: f };
      }
    i.type === "element" && s && Object.assign(i.properties, Rs(s)),
      "children" in i &&
        i.children &&
        u !== null &&
        u !== void 0 &&
        (i.children = u);
  }
  return i;
}
function EC(t, r) {
  const i = r.data || {},
    a =
      "value" in r && !(mp.call(i, "hProperties") || mp.call(i, "hChildren"))
        ? { type: "text", value: r.value }
        : {
            type: "element",
            tagName: "div",
            properties: {},
            children: t.all(r),
          };
  return t.patch(r, a), t.applyData(r, a);
}
function TC(t, r) {
  const i = [];
  let a = -1;
  for (
    r &&
    i.push({
      type: "text",
      value: `
`,
    });
    ++a < t.length;

  )
    a &&
      i.push({
        type: "text",
        value: `
`,
      }),
      i.push(t[a]);
  return (
    r &&
      t.length > 0 &&
      i.push({
        type: "text",
        value: `
`,
      }),
    i
  );
}
function S1(t) {
  let r = 0,
    i = t.charCodeAt(r);
  for (; i === 9 || i === 32; ) r++, (i = t.charCodeAt(r));
  return t.slice(r);
}
function w1(t, r) {
  const i = xC(t, r),
    a = i.one(t, void 0),
    u = sC(i),
    s = Array.isArray(a)
      ? { type: "root", children: a }
      : a || { type: "root", children: [] };
  return (
    u &&
      s.children.push(
        {
          type: "text",
          value: `
`,
        },
        u
      ),
    s
  );
}
function AC(t, r) {
  return t && "run" in t
    ? async function (i, a) {
        const u = w1(i, { file: a, ...r });
        await t.run(u, a);
      }
    : function (i, a) {
        return w1(i, { file: a, ...(t || r) });
      };
}
function E1(t) {
  if (t) throw t;
}
var Ud, T1;
function OC() {
  if (T1) return Ud;
  T1 = 1;
  var t = Object.prototype.hasOwnProperty,
    r = Object.prototype.toString,
    i = Object.defineProperty,
    a = Object.getOwnPropertyDescriptor,
    u = function (m) {
      return typeof Array.isArray == "function"
        ? Array.isArray(m)
        : r.call(m) === "[object Array]";
    },
    s = function (m) {
      if (!m || r.call(m) !== "[object Object]") return !1;
      var g = t.call(m, "constructor"),
        y =
          m.constructor &&
          m.constructor.prototype &&
          t.call(m.constructor.prototype, "isPrototypeOf");
      if (m.constructor && !g && !y) return !1;
      var b;
      for (b in m);
      return typeof b > "u" || t.call(m, b);
    },
    f = function (m, g) {
      i && g.name === "__proto__"
        ? i(m, g.name, {
            enumerable: !0,
            configurable: !0,
            value: g.newValue,
            writable: !0,
          })
        : (m[g.name] = g.newValue);
    },
    d = function (m, g) {
      if (g === "__proto__")
        if (t.call(m, g)) {
          if (a) return a(m, g).value;
        } else return;
      return m[g];
    };
  return (
    (Ud = function h() {
      var m,
        g,
        y,
        b,
        v,
        O,
        T = arguments[0],
        L = 1,
        D = arguments.length,
        G = !1;
      for (
        typeof T == "boolean" && ((G = T), (T = arguments[1] || {}), (L = 2)),
          (T == null || (typeof T != "object" && typeof T != "function")) &&
            (T = {});
        L < D;
        ++L
      )
        if (((m = arguments[L]), m != null))
          for (g in m)
            (y = d(T, g)),
              (b = d(m, g)),
              T !== b &&
                (G && b && (s(b) || (v = u(b)))
                  ? (v
                      ? ((v = !1), (O = y && u(y) ? y : []))
                      : (O = y && s(y) ? y : {}),
                    f(T, { name: g, newValue: h(G, O, b) }))
                  : typeof b < "u" && f(T, { name: g, newValue: b }));
      return T;
    }),
    Ud
  );
}
var CC = OC();
const jd = Il(CC);
function gp(t) {
  if (typeof t != "object" || t === null) return !1;
  const r = Object.getPrototypeOf(t);
  return (
    (r === null ||
      r === Object.prototype ||
      Object.getPrototypeOf(r) === null) &&
    !(Symbol.toStringTag in t) &&
    !(Symbol.iterator in t)
  );
}
function kC() {
  const t = [],
    r = { run: i, use: a };
  return r;
  function i(...u) {
    let s = -1;
    const f = u.pop();
    if (typeof f != "function")
      throw new TypeError("Expected function as last argument, not " + f);
    d(null, ...u);
    function d(h, ...m) {
      const g = t[++s];
      let y = -1;
      if (h) {
        f(h);
        return;
      }
      for (; ++y < u.length; )
        (m[y] === null || m[y] === void 0) && (m[y] = u[y]);
      (u = m), g ? _C(g, d)(...m) : f(null, ...m);
    }
  }
  function a(u) {
    if (typeof u != "function")
      throw new TypeError("Expected `middelware` to be a function, not " + u);
    return t.push(u), r;
  }
}
function _C(t, r) {
  let i;
  return a;
  function a(...f) {
    const d = t.length > f.length;
    let h;
    d && f.push(u);
    try {
      h = t.apply(this, f);
    } catch (m) {
      const g = m;
      if (d && i) throw g;
      return u(g);
    }
    d ||
      (h && h.then && typeof h.then == "function"
        ? h.then(s, u)
        : h instanceof Error
        ? u(h)
        : s(h));
  }
  function u(f, ...d) {
    i || ((i = !0), r(f, ...d));
  }
  function s(f) {
    u(null, f);
  }
}
const nr = { basename: RC, dirname: MC, extname: zC, join: DC, sep: "/" };
function RC(t, r) {
  if (r !== void 0 && typeof r != "string")
    throw new TypeError('"ext" argument must be a string');
  Mo(t);
  let i = 0,
    a = -1,
    u = t.length,
    s;
  if (r === void 0 || r.length === 0 || r.length > t.length) {
    for (; u--; )
      if (t.codePointAt(u) === 47) {
        if (s) {
          i = u + 1;
          break;
        }
      } else a < 0 && ((s = !0), (a = u + 1));
    return a < 0 ? "" : t.slice(i, a);
  }
  if (r === t) return "";
  let f = -1,
    d = r.length - 1;
  for (; u--; )
    if (t.codePointAt(u) === 47) {
      if (s) {
        i = u + 1;
        break;
      }
    } else
      f < 0 && ((s = !0), (f = u + 1)),
        d > -1 &&
          (t.codePointAt(u) === r.codePointAt(d--)
            ? d < 0 && (a = u)
            : ((d = -1), (a = f)));
  return i === a ? (a = f) : a < 0 && (a = t.length), t.slice(i, a);
}
function MC(t) {
  if ((Mo(t), t.length === 0)) return ".";
  let r = -1,
    i = t.length,
    a;
  for (; --i; )
    if (t.codePointAt(i) === 47) {
      if (a) {
        r = i;
        break;
      }
    } else a || (a = !0);
  return r < 0
    ? t.codePointAt(0) === 47
      ? "/"
      : "."
    : r === 1 && t.codePointAt(0) === 47
    ? "//"
    : t.slice(0, r);
}
function zC(t) {
  Mo(t);
  let r = t.length,
    i = -1,
    a = 0,
    u = -1,
    s = 0,
    f;
  for (; r--; ) {
    const d = t.codePointAt(r);
    if (d === 47) {
      if (f) {
        a = r + 1;
        break;
      }
      continue;
    }
    i < 0 && ((f = !0), (i = r + 1)),
      d === 46 ? (u < 0 ? (u = r) : s !== 1 && (s = 1)) : u > -1 && (s = -1);
  }
  return u < 0 || i < 0 || s === 0 || (s === 1 && u === i - 1 && u === a + 1)
    ? ""
    : t.slice(u, i);
}
function DC(...t) {
  let r = -1,
    i;
  for (; ++r < t.length; )
    Mo(t[r]), t[r] && (i = i === void 0 ? t[r] : i + "/" + t[r]);
  return i === void 0 ? "." : NC(i);
}
function NC(t) {
  Mo(t);
  const r = t.codePointAt(0) === 47;
  let i = BC(t, !r);
  return (
    i.length === 0 && !r && (i = "."),
    i.length > 0 && t.codePointAt(t.length - 1) === 47 && (i += "/"),
    r ? "/" + i : i
  );
}
function BC(t, r) {
  let i = "",
    a = 0,
    u = -1,
    s = 0,
    f = -1,
    d,
    h;
  for (; ++f <= t.length; ) {
    if (f < t.length) d = t.codePointAt(f);
    else {
      if (d === 47) break;
      d = 47;
    }
    if (d === 47) {
      if (!(u === f - 1 || s === 1))
        if (u !== f - 1 && s === 2) {
          if (
            i.length < 2 ||
            a !== 2 ||
            i.codePointAt(i.length - 1) !== 46 ||
            i.codePointAt(i.length - 2) !== 46
          ) {
            if (i.length > 2) {
              if (((h = i.lastIndexOf("/")), h !== i.length - 1)) {
                h < 0
                  ? ((i = ""), (a = 0))
                  : ((i = i.slice(0, h)),
                    (a = i.length - 1 - i.lastIndexOf("/"))),
                  (u = f),
                  (s = 0);
                continue;
              }
            } else if (i.length > 0) {
              (i = ""), (a = 0), (u = f), (s = 0);
              continue;
            }
          }
          r && ((i = i.length > 0 ? i + "/.." : ".."), (a = 2));
        } else
          i.length > 0
            ? (i += "/" + t.slice(u + 1, f))
            : (i = t.slice(u + 1, f)),
            (a = f - u - 1);
      (u = f), (s = 0);
    } else d === 46 && s > -1 ? s++ : (s = -1);
  }
  return i;
}
function Mo(t) {
  if (typeof t != "string")
    throw new TypeError("Path must be a string. Received " + JSON.stringify(t));
}
const LC = { cwd: UC };
function UC() {
  return "/";
}
function yp(t) {
  return !!(
    t !== null &&
    typeof t == "object" &&
    "href" in t &&
    t.href &&
    "protocol" in t &&
    t.protocol &&
    t.auth === void 0
  );
}
function jC(t) {
  if (typeof t == "string") t = new URL(t);
  else if (!yp(t)) {
    const r = new TypeError(
      'The "path" argument must be of type string or an instance of URL. Received `' +
        t +
        "`"
    );
    throw ((r.code = "ERR_INVALID_ARG_TYPE"), r);
  }
  if (t.protocol !== "file:") {
    const r = new TypeError("The URL must be of scheme file");
    throw ((r.code = "ERR_INVALID_URL_SCHEME"), r);
  }
  return HC(t);
}
function HC(t) {
  if (t.hostname !== "") {
    const a = new TypeError(
      'File URL host must be "localhost" or empty on darwin'
    );
    throw ((a.code = "ERR_INVALID_FILE_URL_HOST"), a);
  }
  const r = t.pathname;
  let i = -1;
  for (; ++i < r.length; )
    if (r.codePointAt(i) === 37 && r.codePointAt(i + 1) === 50) {
      const a = r.codePointAt(i + 2);
      if (a === 70 || a === 102) {
        const u = new TypeError(
          "File URL path must not include encoded / characters"
        );
        throw ((u.code = "ERR_INVALID_FILE_URL_PATH"), u);
      }
    }
  return decodeURIComponent(r);
}
const Hd = ["history", "path", "basename", "stem", "extname", "dirname"];
class Ub {
  constructor(r) {
    let i;
    r
      ? yp(r)
        ? (i = { path: r })
        : typeof r == "string" || qC(r)
        ? (i = { value: r })
        : (i = r)
      : (i = {}),
      (this.cwd = "cwd" in i ? "" : LC.cwd()),
      (this.data = {}),
      (this.history = []),
      (this.messages = []),
      this.value,
      this.map,
      this.result,
      this.stored;
    let a = -1;
    for (; ++a < Hd.length; ) {
      const s = Hd[a];
      s in i &&
        i[s] !== void 0 &&
        i[s] !== null &&
        (this[s] = s === "history" ? [...i[s]] : i[s]);
    }
    let u;
    for (u in i) Hd.includes(u) || (this[u] = i[u]);
  }
  get basename() {
    return typeof this.path == "string" ? nr.basename(this.path) : void 0;
  }
  set basename(r) {
    Pd(r, "basename"),
      qd(r, "basename"),
      (this.path = nr.join(this.dirname || "", r));
  }
  get dirname() {
    return typeof this.path == "string" ? nr.dirname(this.path) : void 0;
  }
  set dirname(r) {
    A1(this.basename, "dirname"), (this.path = nr.join(r || "", this.basename));
  }
  get extname() {
    return typeof this.path == "string" ? nr.extname(this.path) : void 0;
  }
  set extname(r) {
    if ((qd(r, "extname"), A1(this.dirname, "extname"), r)) {
      if (r.codePointAt(0) !== 46)
        throw new Error("`extname` must start with `.`");
      if (r.includes(".", 1))
        throw new Error("`extname` cannot contain multiple dots");
    }
    this.path = nr.join(this.dirname, this.stem + (r || ""));
  }
  get path() {
    return this.history[this.history.length - 1];
  }
  set path(r) {
    yp(r) && (r = jC(r)),
      Pd(r, "path"),
      this.path !== r && this.history.push(r);
  }
  get stem() {
    return typeof this.path == "string"
      ? nr.basename(this.path, this.extname)
      : void 0;
  }
  set stem(r) {
    Pd(r, "stem"),
      qd(r, "stem"),
      (this.path = nr.join(this.dirname || "", r + (this.extname || "")));
  }
  fail(r, i, a) {
    const u = this.message(r, i, a);
    throw ((u.fatal = !0), u);
  }
  info(r, i, a) {
    const u = this.message(r, i, a);
    return (u.fatal = void 0), u;
  }
  message(r, i, a) {
    const u = new tn(r, i, a);
    return (
      this.path && ((u.name = this.path + ":" + u.name), (u.file = this.path)),
      (u.fatal = !1),
      this.messages.push(u),
      u
    );
  }
  toString(r) {
    return this.value === void 0
      ? ""
      : typeof this.value == "string"
      ? this.value
      : new TextDecoder(r || void 0).decode(this.value);
  }
}
function qd(t, r) {
  if (t && t.includes(nr.sep))
    throw new Error(
      "`" + r + "` cannot be a path: did not expect `" + nr.sep + "`"
    );
}
function Pd(t, r) {
  if (!t) throw new Error("`" + r + "` cannot be empty");
}
function A1(t, r) {
  if (!t) throw new Error("Setting `" + r + "` requires `path` to be set too");
}
function qC(t) {
  return !!(
    t &&
    typeof t == "object" &&
    "byteLength" in t &&
    "byteOffset" in t
  );
}
const PC = function (t) {
    const a = this.constructor.prototype,
      u = a[t],
      s = function () {
        return u.apply(s, arguments);
      };
    return Object.setPrototypeOf(s, a), s;
  },
  $C = {}.hasOwnProperty;
class eh extends PC {
  constructor() {
    super("copy"),
      (this.Compiler = void 0),
      (this.Parser = void 0),
      (this.attachers = []),
      (this.compiler = void 0),
      (this.freezeIndex = -1),
      (this.frozen = void 0),
      (this.namespace = {}),
      (this.parser = void 0),
      (this.transformers = kC());
  }
  copy() {
    const r = new eh();
    let i = -1;
    for (; ++i < this.attachers.length; ) {
      const a = this.attachers[i];
      r.use(...a);
    }
    return r.data(jd(!0, {}, this.namespace)), r;
  }
  data(r, i) {
    return typeof r == "string"
      ? arguments.length === 2
        ? (Yd("data", this.frozen), (this.namespace[r] = i), this)
        : ($C.call(this.namespace, r) && this.namespace[r]) || void 0
      : r
      ? (Yd("data", this.frozen), (this.namespace = r), this)
      : this.namespace;
  }
  freeze() {
    if (this.frozen) return this;
    const r = this;
    for (; ++this.freezeIndex < this.attachers.length; ) {
      const [i, ...a] = this.attachers[this.freezeIndex];
      if (a[0] === !1) continue;
      a[0] === !0 && (a[0] = void 0);
      const u = i.call(r, ...a);
      typeof u == "function" && this.transformers.use(u);
    }
    return (
      (this.frozen = !0), (this.freezeIndex = Number.POSITIVE_INFINITY), this
    );
  }
  parse(r) {
    this.freeze();
    const i = ts(r),
      a = this.parser || this.Parser;
    return $d("parse", a), a(String(i), i);
  }
  process(r, i) {
    const a = this;
    return (
      this.freeze(),
      $d("process", this.parser || this.Parser),
      Vd("process", this.compiler || this.Compiler),
      i ? u(void 0, i) : new Promise(u)
    );
    function u(s, f) {
      const d = ts(r),
        h = a.parse(d);
      a.run(h, d, function (g, y, b) {
        if (g || !y || !b) return m(g);
        const v = y,
          O = a.stringify(v, b);
        GC(O) ? (b.value = O) : (b.result = O), m(g, b);
      });
      function m(g, y) {
        g || !y ? f(g) : s ? s(y) : i(void 0, y);
      }
    }
  }
  processSync(r) {
    let i = !1,
      a;
    return (
      this.freeze(),
      $d("processSync", this.parser || this.Parser),
      Vd("processSync", this.compiler || this.Compiler),
      this.process(r, u),
      C1("processSync", "process", i),
      a
    );
    function u(s, f) {
      (i = !0), E1(s), (a = f);
    }
  }
  run(r, i, a) {
    O1(r), this.freeze();
    const u = this.transformers;
    return (
      !a && typeof i == "function" && ((a = i), (i = void 0)),
      a ? s(void 0, a) : new Promise(s)
    );
    function s(f, d) {
      const h = ts(i);
      u.run(r, h, m);
      function m(g, y, b) {
        const v = y || r;
        g ? d(g) : f ? f(v) : a(void 0, v, b);
      }
    }
  }
  runSync(r, i) {
    let a = !1,
      u;
    return this.run(r, i, s), C1("runSync", "run", a), u;
    function s(f, d) {
      E1(f), (u = d), (a = !0);
    }
  }
  stringify(r, i) {
    this.freeze();
    const a = ts(i),
      u = this.compiler || this.Compiler;
    return Vd("stringify", u), O1(r), u(r, a);
  }
  use(r, ...i) {
    const a = this.attachers,
      u = this.namespace;
    if ((Yd("use", this.frozen), r != null))
      if (typeof r == "function") h(r, i);
      else if (typeof r == "object") Array.isArray(r) ? d(r) : f(r);
      else throw new TypeError("Expected usable value, not `" + r + "`");
    return this;
    function s(m) {
      if (typeof m == "function") h(m, []);
      else if (typeof m == "object")
        if (Array.isArray(m)) {
          const [g, ...y] = m;
          h(g, y);
        } else f(m);
      else throw new TypeError("Expected usable value, not `" + m + "`");
    }
    function f(m) {
      if (!("plugins" in m) && !("settings" in m))
        throw new Error(
          "Expected usable value but received an empty preset, which is probably a mistake: presets typically come with `plugins` and sometimes with `settings`, but this has neither"
        );
      d(m.plugins), m.settings && (u.settings = jd(!0, u.settings, m.settings));
    }
    function d(m) {
      let g = -1;
      if (m != null)
        if (Array.isArray(m))
          for (; ++g < m.length; ) {
            const y = m[g];
            s(y);
          }
        else throw new TypeError("Expected a list of plugins, not `" + m + "`");
    }
    function h(m, g) {
      let y = -1,
        b = -1;
      for (; ++y < a.length; )
        if (a[y][0] === m) {
          b = y;
          break;
        }
      if (b === -1) a.push([m, ...g]);
      else if (g.length > 0) {
        let [v, ...O] = g;
        const T = a[b][1];
        gp(T) && gp(v) && (v = jd(!0, T, v)), (a[b] = [m, v, ...O]);
      }
    }
  }
}
const VC = new eh().freeze();
function $d(t, r) {
  if (typeof r != "function")
    throw new TypeError("Cannot `" + t + "` without `parser`");
}
function Vd(t, r) {
  if (typeof r != "function")
    throw new TypeError("Cannot `" + t + "` without `compiler`");
}
function Yd(t, r) {
  if (r)
    throw new Error(
      "Cannot call `" +
        t +
        "` on a frozen processor.\nCreate a new processor first, by calling it: use `processor()` instead of `processor`."
    );
}
function O1(t) {
  if (!gp(t) || typeof t.type != "string")
    throw new TypeError("Expected node, got `" + t + "`");
}
function C1(t, r, i) {
  if (!i)
    throw new Error("`" + t + "` finished async. Use `" + r + "` instead");
}
function ts(t) {
  return YC(t) ? t : new Ub(t);
}
function YC(t) {
  return !!(t && typeof t == "object" && "message" in t && "messages" in t);
}
function GC(t) {
  return typeof t == "string" || XC(t);
}
function XC(t) {
  return !!(
    t &&
    typeof t == "object" &&
    "byteLength" in t &&
    "byteOffset" in t
  );
}
const QC = "https://github.com/remarkjs/react-markdown/blob/main/changelog.md",
  k1 = [],
  _1 = { allowDangerousHtml: !0 },
  IC = /^(https?|ircs?|mailto|xmpp)$/i,
  ZC = [
    { from: "astPlugins", id: "remove-buggy-html-in-markdown-parser" },
    { from: "allowDangerousHtml", id: "remove-buggy-html-in-markdown-parser" },
    {
      from: "allowNode",
      id: "replace-allownode-allowedtypes-and-disallowedtypes",
      to: "allowElement",
    },
    {
      from: "allowedTypes",
      id: "replace-allownode-allowedtypes-and-disallowedtypes",
      to: "allowedElements",
    },
    { from: "className", id: "remove-classname" },
    {
      from: "disallowedTypes",
      id: "replace-allownode-allowedtypes-and-disallowedtypes",
      to: "disallowedElements",
    },
    { from: "escapeHtml", id: "remove-buggy-html-in-markdown-parser" },
    { from: "includeElementIndex", id: "#remove-includeelementindex" },
    {
      from: "includeNodeIndex",
      id: "change-includenodeindex-to-includeelementindex",
    },
    { from: "linkTarget", id: "remove-linktarget" },
    {
      from: "plugins",
      id: "change-plugins-to-remarkplugins",
      to: "remarkPlugins",
    },
    { from: "rawSourcePos", id: "#remove-rawsourcepos" },
    {
      from: "renderers",
      id: "change-renderers-to-components",
      to: "components",
    },
    { from: "source", id: "change-source-to-children", to: "children" },
    { from: "sourcePos", id: "#remove-sourcepos" },
    { from: "transformImageUri", id: "#add-urltransform", to: "urlTransform" },
    { from: "transformLinkUri", id: "#add-urltransform", to: "urlTransform" },
  ];
function R1(t) {
  const r = KC(t),
    i = FC(t);
  return WC(r.runSync(r.parse(i), i), t);
}
function KC(t) {
  const r = t.rehypePlugins || k1,
    i = t.remarkPlugins || k1,
    a = t.remarkRehypeOptions ? { ...t.remarkRehypeOptions, ..._1 } : _1;
  return VC().use(RO).use(i).use(AC, a).use(r);
}
function FC(t) {
  const r = t.children || "",
    i = new Ub();
  return typeof r == "string" && (i.value = r), i;
}
function WC(t, r) {
  const i = r.allowedElements,
    a = r.allowElement,
    u = r.components,
    s = r.disallowedElements,
    f = r.skipHtml,
    d = r.unwrapDisallowed,
    h = r.urlTransform || JC;
  for (const g of ZC)
    Object.hasOwn(r, g.from) &&
      ("" +
        g.from +
        (g.to ? "use `" + g.to + "` instead" : "remove it") +
        QC +
        g.id,
      void 0);
  return (
    Lb(t, m),
    sT(t, {
      Fragment: ye.Fragment,
      components: u,
      ignoreInvalidStyle: !0,
      jsx: ye.jsx,
      jsxs: ye.jsxs,
      passKeys: !0,
      passNode: !0,
    })
  );
  function m(g, y, b) {
    if (g.type === "raw" && b && typeof y == "number")
      return (
        f
          ? b.children.splice(y, 1)
          : (b.children[y] = { type: "text", value: g.value }),
        y
      );
    if (g.type === "element") {
      let v;
      for (v in Nd)
        if (Object.hasOwn(Nd, v) && Object.hasOwn(g.properties, v)) {
          const O = g.properties[v],
            T = Nd[v];
          (T === null || T.includes(g.tagName)) &&
            (g.properties[v] = h(String(O || ""), v, g));
        }
    }
    if (g.type === "element") {
      let v = i ? !i.includes(g.tagName) : s ? s.includes(g.tagName) : !1;
      if (
        (!v && a && typeof y == "number" && (v = !a(g, y, b)),
        v && b && typeof y == "number")
      )
        return (
          d && g.children
            ? b.children.splice(y, 1, ...g.children)
            : b.children.splice(y, 1),
          y
        );
    }
  }
}
function JC(t) {
  const r = t.indexOf(":"),
    i = t.indexOf("?"),
    a = t.indexOf("#"),
    u = t.indexOf("/");
  return r === -1 ||
    (u !== -1 && r > u) ||
    (i !== -1 && r > i) ||
    (a !== -1 && r > a) ||
    IC.test(t.slice(0, r))
    ? t
    : "";
}
function t3() {
  const { score: t, completedWords: r } = nn(),
    i = tt
      .useMemo(
        () =>
          [...r]
            .sort((u, s) => s.word.length - u.word.length)
            .sort((u, s) => s.score - u.score),
        [r]
      )
      .slice(0, 10),
    a = `Score: ${r3("wordScoreV5", t)}`;
  return Ce("div", {
    css: n3,
    children: [
      dt(R1, { children: a }),
      dt(R1, {
        children: `Best Words: ${i
          .map(
            ({ word: u, score: s, wilds: f }) =>
              `**${e3(u, f).toLocaleUpperCase()}** *(${s})*`
          )
          .join(", ")}`,
      }),
      dt("button", {
        onClick: () => window.location.reload(),
        children: "Play Again",
      }),
    ],
  });
}
function e3(t, r) {
  return t
    .split("")
    .map((i, a) => {
      if (r.includes(a)) {
        const u = i.charCodeAt(0) - 97;
        return String.fromCharCode(9398 + u);
      } else return i;
    })
    .join("");
}
const n3 = ve`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
  font-family: monospace;
  color: #ccc;
  text-align: center;
  height: 100%;

  font-size: 32px;

  .words {
    display: flex;
    flex-wrap: wrap;
    gap: 16px;
  }

  p {
    margin: 0;
    padding: 0;
  }

  .header {
    font-size: 72px;
  }

  button {
    padding: 12px 32px;
    font-family: monospace;
    border: 4px solid #ccc;
    background-color: transparent;
    color: #ccc;
    font-weight: bold;
    font-size: 48px;
    border-radius: 12px;
    cursor: pointer;

    &:hover {
      background-color: rgba(255, 255, 255, 0.2);
    }
  }

  em {
    color: #aaa;
  }

  strong {
    color: #2ecc40;
  }
`;
function r3(t, r) {
  const [i, a] = i3(t, 0),
    [u] = tt.useState(i);
  return (
    tt.useEffect(() => {
      r > i && a(r);
    }, [i, a, r]),
    r > u ? `**${r} (New High Score!)**` : `**${r}** *(High: ${i})*`
  );
}
function i3(t, r) {
  const [i, a] = tt.useState(() => {
    const u = window.localStorage.getItem(t);
    return u ? JSON.parse(u) : r;
  });
  return (
    tt.useEffect(() => {
      window.localStorage.setItem(t, JSON.stringify(i));
    }, [t, i]),
    [i, a]
  );
}
var es = {},
  M1;
function l3() {
  if (M1) return es;
  (M1 = 1), Object.defineProperty(es, "__esModule", { value: !0 });
  var t = Bs();
  function r(C) {
    return Array.prototype.slice.call(C);
  }
  function i(C, U) {
    var z = Math.floor(C);
    return z === U || z + 1 === U ? C : U;
  }
  function a() {
    return Date.now();
  }
  function u(C, U, z) {
    if (((U = "data-keen-slider-" + U), z === null))
      return C.removeAttribute(U);
    C.setAttribute(U, z || "");
  }
  function s(C, U) {
    return (
      (U = U || document),
      typeof C == "function" && (C = C(U)),
      Array.isArray(C)
        ? C
        : typeof C == "string"
        ? r(U.querySelectorAll(C))
        : C instanceof HTMLElement
        ? [C]
        : C instanceof NodeList
        ? r(C)
        : []
    );
  }
  function f(C) {
    C.raw && (C = C.raw),
      C.cancelable && !C.defaultPrevented && C.preventDefault();
  }
  function d(C) {
    C.raw && (C = C.raw), C.stopPropagation && C.stopPropagation();
  }
  function h() {
    var C = [];
    return {
      add: function (U, z, q, w) {
        U.addListener ? U.addListener(q) : U.addEventListener(z, q, w),
          C.push([U, z, q, w]);
      },
      input: function (U, z, q, w) {
        this.add(
          U,
          z,
          (function (B) {
            return function (N) {
              N.nativeEvent && (N = N.nativeEvent);
              var V = N.changedTouches || [],
                _ = N.targetTouches || [],
                P = N.detail && N.detail.x ? N.detail : null;
              return B({
                id: P
                  ? P.identifier
                    ? P.identifier
                    : "i"
                  : _[0]
                  ? _[0]
                    ? _[0].identifier
                    : "e"
                  : "d",
                idChanged: P
                  ? P.identifier
                    ? P.identifier
                    : "i"
                  : V[0]
                  ? V[0]
                    ? V[0].identifier
                    : "e"
                  : "d",
                raw: N,
                x: P && P.x ? P.x : _[0] ? _[0].screenX : P ? P.x : N.pageX,
                y: P && P.y ? P.y : _[0] ? _[0].screenY : P ? P.y : N.pageY,
              });
            };
          })(q),
          w
        );
      },
      purge: function () {
        C.forEach(function (U) {
          U[0].removeListener
            ? U[0].removeListener(U[2])
            : U[0].removeEventListener(U[1], U[2], U[3]);
        }),
          (C = []);
      },
    };
  }
  function m(C, U, z) {
    return Math.min(Math.max(C, U), z);
  }
  function g(C) {
    return (C > 0 ? 1 : 0) - (C < 0 ? 1 : 0) || +C;
  }
  function y(C) {
    var U = C.getBoundingClientRect();
    return {
      height: i(U.height, C.offsetHeight),
      width: i(U.width, C.offsetWidth),
    };
  }
  function b(C, U, z, q) {
    var w = C && C[U];
    return w == null ? z : q && typeof w == "function" ? w() : w;
  }
  function v(C) {
    return Math.round(1e6 * C) / 1e6;
  }
  function O(C, U) {
    if (C === U) return !0;
    var z = typeof C;
    if (z !== typeof U) return !1;
    if (z !== "object" || C === null || U === null)
      return z === "function" && C.toString() === U.toString();
    if (
      C.length !== U.length ||
      Object.getOwnPropertyNames(C).length !==
        Object.getOwnPropertyNames(U).length
    )
      return !1;
    for (var q in C) if (!O(C[q], U[q])) return !1;
    return !0;
  }
  var T = function () {
    return (
      (T =
        Object.assign ||
        function (C) {
          for (var U, z = 1, q = arguments.length; z < q; z++)
            for (var w in (U = arguments[z]))
              Object.prototype.hasOwnProperty.call(U, w) && (C[w] = U[w]);
          return C;
        }),
      T.apply(this, arguments)
    );
  };
  function L(C, U, z) {
    for (var q, w = 0, B = U.length; w < B; w++)
      (!q && w in U) ||
        (q || (q = Array.prototype.slice.call(U, 0, w)), (q[w] = U[w]));
    return C.concat(q || Array.prototype.slice.call(U));
  }
  function D(C) {
    var U, z, q, w, B, N;
    function V(x) {
      N || (N = x), _(!0);
      var Z = x - N;
      Z > q && (Z = q);
      var J = w[z];
      if (J[3] < Z) return z++, V(x);
      var A = J[2],
        ut = J[4],
        st = J[0],
        it = J[1] * (0, J[5])(ut === 0 ? 1 : (Z - A) / ut);
      if ((it && C.track.to(st + it), Z < q)) return nt();
      (N = null), _(!1), P(null), C.emit("animationEnded");
    }
    function _(x) {
      U.active = x;
    }
    function P(x) {
      U.targetIdx = x;
    }
    function nt() {
      var x;
      (x = V), (B = window.requestAnimationFrame(x));
    }
    function pt() {
      var x;
      (x = B),
        window.cancelAnimationFrame(x),
        _(!1),
        P(null),
        N && C.emit("animationStopped"),
        (N = null);
    }
    return (U = {
      active: !1,
      start: function (x) {
        if ((pt(), C.track.details)) {
          var Z = 0,
            J = C.track.details.position;
          (z = 0),
            (q = 0),
            (w = x.map(function (A) {
              var ut,
                st = Number(J),
                it =
                  (ut = A.earlyExit) !== null && ut !== void 0
                    ? ut
                    : A.duration,
                ht = A.easing,
                gt = A.distance * ht(it / A.duration) || 0;
              J += gt;
              var Ct = q;
              return (
                (q += it), (Z += gt), [st, A.distance, Ct, q, A.duration, ht]
              );
            })),
            P(C.track.distToIdx(Z)),
            nt(),
            C.emit("animationStarted");
        }
      },
      stop: pt,
      targetIdx: null,
    });
  }
  function G(C) {
    var U,
      z,
      q,
      w,
      B,
      N,
      V,
      _,
      P,
      nt,
      pt,
      x,
      Z,
      J,
      A = 1 / 0,
      ut = [],
      st = null,
      it = 0;
    function ht(xt) {
      fe(it + xt);
    }
    function gt(xt) {
      var vt = Ct(it + xt).abs;
      return At(vt) ? vt : null;
    }
    function Ct(xt) {
      var vt = Math.floor(Math.abs(v(xt / z))),
        ft = v(((xt % z) + z) % z);
      ft === z && (ft = 0);
      var Et = g(xt),
        St = V.indexOf(
          L([], V).reduce(function (jt, Pt) {
            return Math.abs(Pt - ft) < Math.abs(jt - ft) ? Pt : jt;
          })
        ),
        kt = St;
      return (
        Et < 0 && vt++,
        St === N && ((kt = 0), (vt += Et > 0 ? 1 : -1)),
        { abs: kt + vt * N * Et, origin: St, rel: kt }
      );
    }
    function Bt(xt, vt, ft) {
      var Et;
      if (vt || !ce()) return mt(xt, ft);
      if (!At(xt)) return null;
      var St = Ct(ft ?? it),
        kt = St.abs,
        jt = xt - St.rel,
        Pt = kt + jt;
      Et = mt(Pt);
      var F = mt(Pt - N * g(jt));
      return (
        ((F !== null && Math.abs(F) < Math.abs(Et)) || Et === null) && (Et = F),
        v(Et)
      );
    }
    function mt(xt, vt) {
      if ((vt == null && (vt = v(it)), !At(xt) || xt === null)) return null;
      xt = Math.round(xt);
      var ft = Ct(vt),
        Et = ft.abs,
        St = ft.rel,
        kt = ft.origin,
        jt = oe(xt),
        Pt = ((vt % z) + z) % z,
        F = V[kt],
        ot = Math.floor((xt - (Et - St)) / N) * z;
      return v(F - Pt - F + V[jt] + ot + (kt === N ? z : 0));
    }
    function At(xt) {
      return Yt(xt) === xt;
    }
    function Yt(xt) {
      return m(xt, P, nt);
    }
    function ce() {
      return w.loop;
    }
    function oe(xt) {
      return ((xt % N) + N) % N;
    }
    function fe(xt) {
      var vt;
      (vt = xt - it),
        ut.push({ distance: vt, timestamp: a() }),
        ut.length > 6 && (ut = ut.slice(-6)),
        (it = v(xt));
      var ft = yt().abs;
      if (ft !== st) {
        var Et = st !== null;
        (st = ft), Et && C.emit("slideChanged");
      }
    }
    function yt(xt) {
      var vt = xt
        ? null
        : (function () {
            if (N) {
              var ft = ce(),
                Et = ft ? ((it % z) + z) % z : it,
                St = (ft ? it % z : it) - B[0][2],
                kt = 0 - (St < 0 && ft ? z - Math.abs(St) : St),
                jt = 0,
                Pt = Ct(it),
                F = Pt.abs,
                ot = Pt.rel,
                wt = B[ot][2],
                Tt = B.map(function (Dt, ue) {
                  var Xt = kt + jt;
                  (Xt < 0 - Dt[0] || Xt > 1) &&
                    (Xt += (Math.abs(Xt) > z - 1 && ft ? z : 0) * g(-Xt));
                  var me = ue - ot,
                    Le = g(me),
                    ke = me + F;
                  ft &&
                    (Le === -1 && Xt > wt && (ke += N),
                    Le === 1 && Xt < wt && (ke -= N),
                    pt !== null && ke < pt && (Xt += z),
                    x !== null && ke > x && (Xt -= z));
                  var ge = Xt + Dt[0] + Dt[1],
                    Ie = Math.max(
                      Xt >= 0 && ge <= 1
                        ? 1
                        : ge < 0 || Xt > 1
                        ? 0
                        : Xt < 0
                        ? Math.min(1, (Dt[0] + Xt) / Dt[0])
                        : (1 - Xt) / Dt[0],
                      0
                    );
                  return (
                    (jt += Dt[0] + Dt[1]),
                    {
                      abs: ke,
                      distance: w.rtl ? -1 * Xt + 1 - Dt[0] : Xt,
                      portion: Ie,
                      size: Dt[0],
                    }
                  );
                });
              return (
                (F = Yt(F)),
                (ot = oe(F)),
                {
                  abs: Yt(F),
                  length: q,
                  max: J,
                  maxIdx: nt,
                  min: Z,
                  minIdx: P,
                  position: it,
                  progress: ft ? Et / z : it / q,
                  rel: ot,
                  slides: Tt,
                  slidesLength: z,
                }
              );
            }
          })();
      return (U.details = vt), C.emit("detailsChanged"), vt;
    }
    return (U = {
      absToRel: oe,
      add: ht,
      details: null,
      distToIdx: gt,
      idxToDist: Bt,
      init: function (xt) {
        if (
          ((function () {
            if (
              ((w = C.options),
              (B = (w.trackConfig || []).map(function (St) {
                return [
                  b(St, "size", 1),
                  b(St, "spacing", 0),
                  b(St, "origin", 0),
                ];
              })),
              (N = B.length))
            ) {
              z = v(
                B.reduce(function (St, kt) {
                  return St + kt[0] + kt[1];
                }, 0)
              );
              var ft,
                Et = N - 1;
              (q = v(z + B[0][2] - B[Et][0] - B[Et][2] - B[Et][1])),
                (V = B.reduce(function (St, kt) {
                  if (!St) return [0];
                  var jt = B[St.length - 1],
                    Pt = St[St.length - 1] + (jt[0] + jt[2]) + jt[1];
                  return (
                    (Pt -= kt[2]),
                    St[St.length - 1] > Pt && (Pt = St[St.length - 1]),
                    (Pt = v(Pt)),
                    St.push(Pt),
                    (!ft || ft < Pt) && (_ = St.length - 1),
                    (ft = Pt),
                    St
                  );
                }, null)),
                q === 0 && (_ = 0),
                V.push(v(z));
            }
          })(),
          !N)
        )
          return yt(!0);
        var vt;
        (function () {
          var ft = C.options.range,
            Et = C.options.loop;
          (pt = P = Et ? b(Et, "min", -1 / 0) : 0),
            (x = nt = Et ? b(Et, "max", A) : _);
          var St = b(ft, "min", null),
            kt = b(ft, "max", null);
          St !== null && (P = St),
            kt !== null && (nt = kt),
            (Z = P === -1 / 0 ? P : C.track.idxToDist(P || 0, !0, 0)),
            (J = nt === A ? nt : Bt(nt, !0, 0)),
            kt === null && (x = nt),
            b(ft, "align", !1) &&
              nt !== A &&
              B[oe(nt)][2] === 0 &&
              ((J -= 1 - B[oe(nt)][0]), (nt = gt(J - it))),
            (Z = v(Z)),
            (J = v(J));
        })(),
          (vt = xt),
          Number(vt) === vt ? ht(mt(Yt(xt))) : yt();
      },
      to: fe,
      velocity: function () {
        var xt = a(),
          vt = ut.reduce(
            function (ft, Et) {
              var St = Et.distance,
                kt = Et.timestamp;
              return (
                xt - kt > 200 ||
                  (g(St) !== g(ft.distance) &&
                    ft.distance &&
                    (ft = { distance: 0, lastTimestamp: 0, time: 0 }),
                  ft.time && (ft.distance += St),
                  ft.lastTimestamp && (ft.time += kt - ft.lastTimestamp),
                  (ft.lastTimestamp = kt)),
                ft
              );
            },
            { distance: 0, lastTimestamp: 0, time: 0 }
          );
        return vt.distance / vt.time || 0;
      },
    });
  }
  function $(C) {
    var U, z, q, w, B, N, V, _;
    function P(st) {
      return 2 * st;
    }
    function nt(st) {
      return m(st, V, _);
    }
    function pt(st) {
      return 1 - Math.pow(1 - st, 3);
    }
    function x() {
      return q ? C.track.velocity() : 0;
    }
    function Z() {
      ut();
      var st = C.options.mode === "free-snap",
        it = C.track,
        ht = x();
      w = g(ht);
      var gt = C.track.details,
        Ct = [];
      if (ht || !st) {
        var Bt = J(ht),
          mt = Bt.dist,
          At = Bt.dur;
        if (((At = P(At)), (mt *= w), st)) {
          var Yt = it.idxToDist(it.distToIdx(mt), !0);
          Yt && (mt = Yt);
        }
        Ct.push({ distance: mt, duration: At, easing: pt });
        var ce = gt.position,
          oe = ce + mt;
        if (oe < B || oe > N) {
          var fe = oe < B ? B - ce : N - ce,
            yt = 0,
            xt = ht;
          if (g(fe) === w) {
            var vt = Math.min(Math.abs(fe) / Math.abs(mt), 1),
              ft =
                (function (kt) {
                  return 1 - Math.pow(1 - kt, 1 / 3);
                })(vt) * At;
            (Ct[0].earlyExit = ft), (xt = ht * (1 - vt));
          } else (Ct[0].earlyExit = 0), (yt += fe);
          var Et = J(xt, 100),
            St = Et.dist * w;
          C.options.rubberband &&
            (Ct.push({ distance: St, duration: P(Et.dur), easing: pt }),
            Ct.push({ distance: -St + yt, duration: 500, easing: pt }));
        }
        C.animator.start(Ct);
      } else
        C.moveToIdx(nt(gt.abs), !0, {
          duration: 500,
          easing: function (kt) {
            return 1 + --kt * kt * kt * kt * kt;
          },
        });
    }
    function J(st, it) {
      it === void 0 && (it = 1e3);
      var ht = 147e-9 + (st = Math.abs(st)) / it;
      return { dist: Math.pow(st, 2) / ht, dur: st / ht };
    }
    function A() {
      var st = C.track.details;
      st && ((B = st.min), (N = st.max), (V = st.minIdx), (_ = st.maxIdx));
    }
    function ut() {
      C.animator.stop();
    }
    C.on("updated", A),
      C.on("optionsChanged", A),
      C.on("created", A),
      C.on("dragStarted", function () {
        (q = !1), ut(), (U = z = C.track.details.abs);
      }),
      C.on("dragChecked", function () {
        q = !0;
      }),
      C.on("dragEnded", function () {
        var st = C.options.mode;
        st === "snap" &&
          (function () {
            var it = C.track,
              ht = C.track.details,
              gt = ht.position,
              Ct = g(x());
            (gt > N || gt < B) && (Ct = 0);
            var Bt = U + Ct;
            ht.slides[it.absToRel(Bt)].portion === 0 && (Bt -= Ct),
              U !== z && (Bt = z),
              g(it.idxToDist(Bt, !0)) !== Ct && (Bt += Ct),
              (Bt = nt(Bt));
            var mt = it.idxToDist(Bt, !0);
            C.animator.start([
              {
                distance: mt,
                duration: 500,
                easing: function (At) {
                  return 1 + --At * At * At * At * At;
                },
              },
            ]);
          })(),
          (st !== "free" && st !== "free-snap") || Z();
      }),
      C.on("dragged", function () {
        z = C.track.details.abs;
      });
  }
  function H(C) {
    var U,
      z,
      q,
      w,
      B,
      N,
      V,
      _,
      P,
      nt,
      pt,
      x,
      Z,
      J,
      A,
      ut,
      st,
      it,
      ht = h();
    function gt(yt) {
      if (N && _ === yt.id) {
        var xt = At(yt);
        if (P) {
          if (!mt(yt)) return Bt(yt);
          (nt = xt), (P = !1), C.emit("dragChecked");
        }
        if (ut) return (nt = xt);
        f(yt);
        var vt = (function (Et) {
          if (st === -1 / 0 && it === 1 / 0) return Et;
          var St = C.track.details,
            kt = St.length,
            jt = St.position,
            Pt = m(Et, st - jt, it - jt);
          if (kt === 0) return 0;
          if (!C.options.rubberband) return Pt;
          if (
            (jt <= it && jt >= st) ||
            (jt < st && z > 0) ||
            (jt > it && z < 0)
          )
            return Et;
          var F = (jt < st ? jt - st : jt - it) / kt,
            ot = w * kt,
            wt = Math.abs(F * ot),
            Tt = Math.max(0, 1 - (wt / B) * 2);
          return Tt * Tt * Et;
        })((V(nt - xt) / w) * q);
        z = g(vt);
        var ft = C.track.details.position;
        ((ft > st && ft < it) ||
          (ft === st && z > 0) ||
          (ft === it && z < 0)) &&
          d(yt),
          (pt += vt),
          !x && Math.abs(pt * w) > 5 && (x = !0),
          C.track.add(vt),
          (nt = xt),
          C.emit("dragged");
      }
    }
    function Ct(yt) {
      !N &&
        C.track.details &&
        C.track.details.length &&
        ((pt = 0),
        (N = !0),
        (x = !1),
        (P = !0),
        (_ = yt.id),
        mt(yt),
        (nt = At(yt)),
        C.emit("dragStarted"));
    }
    function Bt(yt) {
      N && _ === yt.idChanged && ((N = !1), C.emit("dragEnded"));
    }
    function mt(yt) {
      var xt = Yt(),
        vt = xt ? yt.y : yt.x,
        ft = xt ? yt.x : yt.y,
        Et =
          Z !== void 0 && J !== void 0 && Math.abs(J - ft) <= Math.abs(Z - vt);
      return (Z = vt), (J = ft), Et;
    }
    function At(yt) {
      return Yt() ? yt.y : yt.x;
    }
    function Yt() {
      return C.options.vertical;
    }
    function ce() {
      (w = C.size), (B = Yt() ? window.innerHeight : window.innerWidth);
      var yt = C.track.details;
      yt && ((st = yt.min), (it = yt.max));
    }
    function oe(yt) {
      x && (d(yt), f(yt));
    }
    function fe() {
      if ((ht.purge(), C.options.drag && !C.options.disabled)) {
        var yt;
        (yt = C.options.dragSpeed || 1),
          (V =
            typeof yt == "function"
              ? yt
              : function (vt) {
                  return vt * yt;
                }),
          (q = C.options.rtl ? -1 : 1),
          ce(),
          (U = C.container),
          (function () {
            var vt = "data-keen-slider-clickable";
            s("[".concat(vt, "]:not([").concat(vt, "=false])"), U).map(
              function (ft) {
                ht.add(ft, "dragstart", d),
                  ht.add(ft, "mousedown", d),
                  ht.add(ft, "touchstart", d);
              }
            );
          })(),
          ht.add(U, "dragstart", function (vt) {
            f(vt);
          }),
          ht.add(U, "click", oe, { capture: !0 }),
          ht.input(U, "ksDragStart", Ct),
          ht.input(U, "ksDrag", gt),
          ht.input(U, "ksDragEnd", Bt),
          ht.input(U, "mousedown", Ct),
          ht.input(U, "mousemove", gt),
          ht.input(U, "mouseleave", Bt),
          ht.input(U, "mouseup", Bt),
          ht.input(U, "touchstart", Ct, { passive: !0 }),
          ht.input(U, "touchmove", gt, { passive: !1 }),
          ht.input(U, "touchend", Bt),
          ht.input(U, "touchcancel", Bt),
          ht.add(window, "wheel", function (vt) {
            N && f(vt);
          });
        var xt = "data-keen-slider-scrollable";
        s("[".concat(xt, "]:not([").concat(xt, "=false])"), C.container).map(
          function (vt) {
            return (function (ft) {
              var Et;
              ht.input(
                ft,
                "touchstart",
                function (St) {
                  (Et = At(St)), (ut = !0), (A = !0);
                },
                { passive: !0 }
              ),
                ht.input(ft, "touchmove", function (St) {
                  var kt = Yt(),
                    jt = kt
                      ? ft.scrollHeight - ft.clientHeight
                      : ft.scrollWidth - ft.clientWidth,
                    Pt = Et - At(St),
                    F = kt ? ft.scrollTop : ft.scrollLeft,
                    ot =
                      (kt && ft.style.overflowY === "scroll") ||
                      (!kt && ft.style.overflowX === "scroll");
                  if (
                    ((Et = At(St)),
                    ((Pt < 0 && F > 0) || (Pt > 0 && F < jt)) && A && ot)
                  )
                    return (ut = !0);
                  (A = !1), f(St), (ut = !1);
                }),
                ht.input(ft, "touchend", function () {
                  ut = !1;
                });
            })(vt);
          }
        );
      }
    }
    C.on("updated", ce),
      C.on("optionsChanged", fe),
      C.on("created", fe),
      C.on("destroyed", ht.purge);
  }
  function R(C) {
    var U,
      z,
      q = null;
    function w(Z, J, A) {
      C.animator.active
        ? N(Z, J, A)
        : requestAnimationFrame(function () {
            return N(Z, J, A);
          });
    }
    function B() {
      w(!1, !1, z);
    }
    function N(Z, J, A) {
      var ut = 0,
        st = C.size,
        it = C.track.details;
      if (it && U) {
        var ht = it.slides;
        U.forEach(function (gt, Ct) {
          if (Z) !q && J && _(gt, null, A), P(gt, null, A);
          else {
            if (!ht[Ct]) return;
            var Bt = ht[Ct].size * st;
            !q && J && _(gt, Bt, A),
              P(gt, ht[Ct].distance * st - ut, A),
              (ut += Bt);
          }
        });
      }
    }
    function V(Z) {
      return C.options.renderMode === "performance" ? Math.round(Z) : Z;
    }
    function _(Z, J, A) {
      var ut = A ? "height" : "width";
      J !== null && (J = V(J) + "px"),
        (Z.style["min-" + ut] = J),
        (Z.style["max-" + ut] = J);
    }
    function P(Z, J, A) {
      if (J !== null) {
        J = V(J);
        var ut = A ? J : 0;
        J = "translate3d(".concat(A ? 0 : J, "px, ").concat(ut, "px, 0)");
      }
      (Z.style.transform = J), (Z.style["-webkit-transform"] = J);
    }
    function nt() {
      U && (N(!0, !0, z), (U = null)), C.on("detailsChanged", B, !0);
    }
    function pt() {
      w(!1, !0, z);
    }
    function x() {
      nt(),
        (z = C.options.vertical),
        C.options.disabled ||
          C.options.renderMode === "custom" ||
          ((q = b(C.options.slides, "perView", null) === "auto"),
          C.on("detailsChanged", B),
          (U = C.slides).length && pt());
    }
    C.on("created", x),
      C.on("optionsChanged", x),
      C.on("beforeOptionsChanged", function () {
        nt();
      }),
      C.on("updated", pt),
      C.on("destroyed", nt);
  }
  function k(C, U) {
    return function (z) {
      var q,
        w,
        B,
        N,
        V,
        _ = h();
      function P(mt) {
        var At;
        u(
          z.container,
          "reverse",
          ((At = z.container),
          window.getComputedStyle(At, null).getPropertyValue("direction") !==
            "rtl" || mt
            ? null
            : "")
        ),
          u(z.container, "v", z.options.vertical && !mt ? "" : null),
          u(z.container, "disabled", z.options.disabled && !mt ? "" : null);
      }
      function nt() {
        pt() && ut();
      }
      function pt() {
        var mt = null;
        if (
          (N.forEach(function (Yt) {
            Yt.matches && (mt = Yt.__media);
          }),
          mt === q)
        )
          return !1;
        q || z.emit("beforeOptionsChanged"), (q = mt);
        var At = mt ? B.breakpoints[mt] : B;
        return (z.options = T(T({}, B), At)), P(), Ct(), Bt(), it(), !0;
      }
      function x(mt) {
        var At = y(mt);
        return (z.options.vertical ? At.height : At.width) / z.size || 1;
      }
      function Z() {
        return z.options.trackConfig.length;
      }
      function J(mt) {
        for (var At in ((q = !1),
        (B = T(T({}, U), mt)),
        _.purge(),
        (w = z.size),
        (N = []),
        B.breakpoints || [])) {
          var Yt = window.matchMedia(At);
          (Yt.__media = At), N.push(Yt), _.add(Yt, "change", nt);
        }
        _.add(window, "orientationchange", gt),
          _.add(window, "resize", ht),
          pt();
      }
      function A(mt) {
        z.animator.stop();
        var At = z.track.details;
        z.track.init(mt ?? (At ? At.abs : 0));
      }
      function ut(mt) {
        A(mt), z.emit("optionsChanged");
      }
      function st(mt, At) {
        if (mt) return J(mt), void ut(At);
        Ct(), Bt();
        var Yt = Z();
        it(), Z() !== Yt ? ut(At) : A(At), z.emit("updated");
      }
      function it() {
        var mt = z.options.slides;
        if (typeof mt == "function")
          return (z.options.trackConfig = mt(z.size, z.slides));
        for (
          var At = z.slides,
            Yt = At.length,
            ce = typeof mt == "number" ? mt : b(mt, "number", Yt, !0),
            oe = [],
            fe = b(mt, "perView", 1, !0),
            yt = b(mt, "spacing", 0, !0) / z.size || 0,
            xt = fe === "auto" ? yt : yt / fe,
            vt = b(mt, "origin", "auto"),
            ft = 0,
            Et = 0;
          Et < ce;
          Et++
        ) {
          var St = fe === "auto" ? x(At[Et]) : 1 / fe - yt + xt,
            kt = vt === "center" ? 0.5 - St / 2 : vt === "auto" ? 0 : vt;
          oe.push({ origin: kt, size: St, spacing: yt }), (ft += St);
        }
        if (
          ((ft += yt * (ce - 1)), vt === "auto" && !z.options.loop && fe !== 1)
        ) {
          var jt = 0;
          oe.map(function (Pt) {
            var F = ft - jt;
            return (
              (jt += Pt.size + yt),
              F >= 1 || (Pt.origin = 1 - F - (ft > 1 ? 0 : 1 - ft)),
              Pt
            );
          });
        }
        z.options.trackConfig = oe;
      }
      function ht() {
        Ct();
        var mt = z.size;
        z.options.disabled || mt === w || ((w = mt), st());
      }
      function gt() {
        ht(), setTimeout(ht, 500), setTimeout(ht, 2e3);
      }
      function Ct() {
        var mt = y(z.container);
        z.size = (z.options.vertical ? mt.height : mt.width) || 1;
      }
      function Bt() {
        z.slides = s(z.options.selector, z.container);
      }
      (z.container = (V = s(C, document)).length ? V[0] : null),
        (z.destroy = function () {
          _.purge(), z.emit("destroyed"), P(!0);
        }),
        (z.prev = function () {
          z.moveToIdx(z.track.details.abs - 1, !0);
        }),
        (z.next = function () {
          z.moveToIdx(z.track.details.abs + 1, !0);
        }),
        (z.update = st),
        J(z.options);
    };
  }
  var Q = function (C, U, z) {
    try {
      return (function (q, w) {
        var B,
          N = {};
        return (
          (B = {
            emit: function (V) {
              N[V] &&
                N[V].forEach(function (P) {
                  P(B);
                });
              var _ = B.options && B.options[V];
              _ && _(B);
            },
            moveToIdx: function (V, _, P) {
              var nt = B.track.idxToDist(V, _);
              if (nt) {
                var pt = B.options.defaultAnimation;
                B.animator.start([
                  {
                    distance: nt,
                    duration: b(P || pt, "duration", 500),
                    easing: b(P || pt, "easing", function (x) {
                      return 1 + --x * x * x * x * x;
                    }),
                  },
                ]);
              }
            },
            on: function (V, _, P) {
              P === void 0 && (P = !1), N[V] || (N[V] = []);
              var nt = N[V].indexOf(_);
              nt > -1 ? P && delete N[V][nt] : P || N[V].push(_);
            },
            options: q,
          }),
          (function () {
            if (((B.track = G(B)), (B.animator = D(B)), w))
              for (var V = 0, _ = w; V < _.length; V++) (0, _[V])(B);
            B.track.init(B.options.initial || 0), B.emit("created");
          })(),
          B
        );
      })(
        U,
        L(
          [
            k(C, {
              drag: !0,
              mode: "snap",
              renderMode: "precision",
              rubberband: !0,
              selector: ".keen-slider__slide",
            }),
            R,
            H,
            $,
          ],
          z || [],
          !0
        )
      );
    } catch (q) {
      console.error(q);
    }
  };
  return (
    (es.useKeenSlider = function (C, U) {
      var z = t.useRef(null),
        q = t.useRef(!1),
        w = t.useRef(C),
        B = t.useCallback(function (N) {
          N
            ? ((w.current = C), (z.current = new Q(N, C, U)), (q.current = !1))
            : (z.current && z.current.destroy && z.current.destroy(),
              (z.current = null));
        }, []);
      return (
        t.useEffect(
          function () {
            O(w.current, C) ||
              ((w.current = C), z.current && z.current.update(w.current));
          },
          [C]
        ),
        [B, z]
      );
    }),
    es
  );
}
var a3 = l3();
function o3(t) {
  const r = tt.useRef(null),
    [i, a] = tt.useState(!1);
  return (
    tt.useEffect(() => {
      if (r.current !== null && t > r.current) {
        a(!0);
        const u = setTimeout(() => {
          a(!1);
        }, 500);
        return (
          (r.current = t),
          () => {
            clearTimeout(u);
          }
        );
      }
      r.current = t;
    }, [t]),
    i
  );
}
function u3(t, r) {
  const i = tt.useRef(null),
    [a, u] = tt.useState(!1);
  return (
    tt.useEffect(() => {
      if (i.current !== null && r(i.current, t)) {
        u(!0);
        const s = setTimeout(() => {
          u(!1);
        }, 500);
        return (
          (i.current = t),
          () => {
            clearTimeout(s);
          }
        );
      }
      i.current = t;
    }, [r, t]),
    a
  );
}
const z1 = 20;
function Ms(t, r) {
  const [i, a] = tt.useState(r),
    u = tt.useRef(r);
  return (
    tt.useEffect(() => {
      if (u.current !== t) {
        if (Math.abs(t - u.current) < 2) {
          a(t), (u.current = t);
          return;
        }
        const s = (t - u.current) / z1;
        let f = 0;
        const d = setInterval(() => {
          a((h) => {
            const m = h + s;
            return (u.current = m), m;
          }),
            (f += 1),
            f >= z1 && (a(t), (u.current = t), clearInterval(d));
        }, 1e3 / 60);
        return () => {
          clearInterval(d);
        };
      }
    }, [t]),
    Math.floor(i)
  );
}
const s3 = 1080,
  c3 = 1920;
function f3() {
  const [t, r] = tt.useState(1);
  return (
    tt.useEffect(() => {
      const i = () => {
        r(Math.min(window.innerWidth / s3, window.innerHeight / c3));
      };
      return (
        window.addEventListener("resize", i),
        i(),
        () => {
          window.removeEventListener("resize", i);
        }
      );
    }, []),
    t
  );
}
function D1({ bagIndex: t }) {
  const { selectedTileId: r } = _o(),
    { bags: i, settings: a, tileBank: u, showHand: s } = nn(),
    f = t === 0 ? a.leftTiles : a.rightTiles,
    d = tt.useMemo(() => new Array(f).fill(0), [f]),
    h = tt.useMemo(
      () => new Array(Math.max(a.previewTiles, 3)).fill(0),
      [a.previewTiles]
    );
  return i[t]
    ? Ce("div", {
        css: y3,
        children: [
          dt("div", {
            className: `bigRow bag-${t}`,
            children: d.map((m, g) => {
              const y = i[t][g];
              return dt(
                "div",
                {
                  css: N1,
                  children: dt("div", {
                    className: y === r ? "selected" : "",
                    css: B1,
                    children: dt("div", {
                      className: "inner",
                      children: dt(
                        wo,
                        {
                          placeId: ei("bag", t, g),
                          interactable: u > 0 && s,
                          opacity: s ? 1 : 0,
                        },
                        g
                      ),
                    }),
                  }),
                },
                g
              );
            }),
          }),
          dt("div", {
            className: `littleRow bag-${t}`,
            children: h.map((m, g) => {
              const y = d.length + g;
              return dt(
                "div",
                {
                  css: N1,
                  children: dt("div", {
                    className: `place-${g}`,
                    css: B1,
                    children: dt(
                      wo,
                      {
                        placeId: ei("bag", t, y),
                        opacity: s && g < a.previewTiles ? d3(g) : 0,
                      },
                      y
                    ),
                  }),
                },
                y
              );
            }),
          }),
        ],
      })
    : null;
}
function d3(t) {
  return t === 0 ? 0.7 : t === 1 ? 0.58 : t === 2 ? 0.48 : 0.3;
}
const p3 = (t, r) => t - r >= 1;
function h3() {
  const {
      tileBank: t,
      settings: r,
      isGameOver: i,
      words: a,
      showHand: u,
    } = nn(),
    s = a.map((m) => m.tiles.length).reduce((m, g) => m + g, 0),
    f = o3(t);
  u3(t + s, p3);
  const d = Ms(Math.max(t, 0), r.initialTileBank),
    h = jb();
  return Ce("div", {
    className: Qe({ wrapup: i, pick: h, visible: u }),
    css: v3,
    children: [
      Ce("div", {
        className: "bags",
        children: [
          dt(D1, { bagIndex: 0 }),
          dt("div", { className: "divider" }),
          dt(D1, { bagIndex: 1 }),
          dt("div", { className: "vert-divider" }),
          dt("div", {
            className: Qe("tile-display", { animating: f, decreasing: d < 10 }),
            children: d,
          }),
        ],
      }),
      dt("div", {
        className: Qe({ wrapup: i }),
        css: x3,
        children: i && dt(t3, {}),
      }),
      dt("div", {
        className: Qe({ picking: h }),
        css: b3,
        children: h && dt(m3, { tileId: h }),
      }),
    ],
  });
}
function m3({ tileId: t }) {
  const { words: r, updateTile: i, tileMap: a, settings: u } = nn(),
    s = f3(),
    f = tt.useMemo(() => {
      for (const m of r)
        if (m.tiles.includes(t)) {
          const g = m.tiles
              .map((T) => a[T])
              .map((T) => T.value)
              .map((T) => (T === "." ? "" : T))
              .join(""),
            y = Hl(g, u.minWordLength),
            b = y[0];
          y.sort();
          const v = y.indexOf(b),
            O = y.slice(v, y.length).concat(y.slice(0, v));
          return O.length === 0 ? ["x", "x", "x"] : [...O, ...O, ...O];
        }
      return [];
    }, [u.minWordLength, t, a, r]),
    [d, h] = a3.useKeenSlider({
      loop: !0,
      slides: { origin: "center", perView: 2, spacing: 16 },
      dragSpeed: 1 / s,
      vertical: !0,
    });
  return Ce("div", {
    css: g3,
    children: [
      dt("div", {
        ref: d,
        className: "keen-slider",
        children: f.map((m, g) =>
          dt("div", { className: "keen-slider__slide", children: m }, g)
        ),
      }),
      dt("button", {
        onClick: () => {
          let m = h.current?.track.details.abs;
          if (m === void 0) return;
          for (; m < 0; ) m += f.length;
          const g = f[m % f.length];
          g && i(t, g);
        },
        children: "✓",
      }),
    ],
  });
}
const g3 = ve`
  display: flex;
  width: 100%;
  height: 100%;
  gap: 16px;

  .keen-slider {
    flex-grow: 4;
  }

  button {
    flex-grow: 1;
    min-width: 0;
    background-color: #05396f;
    font-size: 64px;
    padding-right: 48px;
    padding-left: 32px;
    text-align: center;
    margin: 0;
  }
`;
function jb() {
  const { words: t, tileMap: r } = nn();
  for (const i of t) for (const a of i.tiles) if (r[a].value === ".") return a;
}
const y3 = ve`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  gap: 32px;

  .bigRow {
    flex-grow: 7;
    display: flex;
    justify-content: center;
    width: 100%;
    gap: 32px;

    &.bag-0 {
      flex-direction: row-reverse;
    }
  }

  .littleRow {
    &.bag-1 {
      flex-direction: row-reverse;
    }

    flex-grow: 2;
    display: flex;
    justify-content: center;
    width: 100%;
    gap: 0px;

    .place-0 {
      top: -12px;
    }

    .place-1 {
      top: 0px;
    }

    .place-2 {
      top: 12px;
    }
  }
`,
  v3 = ve`
  position: relative;
  height: 420px;
  /* max-width: 640px; */
  width: 800px;

  /* transition: height 250ms ease; */

  opacity: 0;
  transition: opacity 800ms ease;

  &.visible {
    opacity: 1;
  }

  .bags {
    position: absolute;
    display: flex;
    justify-content: center;
    gap: 40px;
    width: 100%;
    height: 100%;
    top: -40px;

    .vert-divider {
      position: absolute;
      top: 280px;
      width: 550px;
      height: 8px;
      border-radius: 4px;
      background-color: #666;
    }

    .tile-display {
      position: absolute;
      top: 250px;
      width: 96px;
      height: 72px;
      border-radius: 12px;
      /* background-color: #a9badd; */
      background-color: #999;
      border: 8px solid #666;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 48px;
      font-family: monospace;
      font-weight: bold;

      transition: background-color 500ms ease;
      &.animating {
        background-color: #3d9970;
      }

      &.decreasing {
        background-color: #f35e4b;
      }
    }
  }

  &.wrapup .bags {
    transform: translate(0px, 1000px);
  }

  &.pick {
    /* transform: translate(0px, 60px); */
  }

  &.pick .bags {
    transform: translate(0px, 380px) scale(0.5);
    pointer-events: none;
  }

  .divider {
    width: 8px;
    background-color: #666;
    margin-top: 64px;
    box-sizing: border-box;
    border-radius: 4px;
  }
`,
  b3 = ve`
  position: absolute;
  left: 0px;
  top: 0px;
  width: 100%;
  height: 100%;
  border: 8px solid black;
  border-radius: 12px;
  background-color: #888;
  box-sizing: border-box;
  z-index: 1000;
  opacity: 0;
  transition: opacity 200ms ease;
  pointer-events: none;

  &.picking {
    opacity: 1;
    pointer-events: auto;
  }
`,
  x3 = ve`
  position: absolute;
  left: 0px;
  top: 0px;
  width: 100%;
  height: 600px;
  border: 8px solid black;
  border-radius: 12px;
  background-color: #333;
  box-sizing: border-box;
  z-index: 1000;
  opacity: 0;
  transition: opacity 500ms ease;
  pointer-events: none;

  &.wrapup {
    opacity: 1;
    pointer-events: auto;
  }
`,
  N1 = ve`
  position: relative;
  flex-grow: 1;
`,
  B1 = ve`
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;

  transition: background-color 250ms ease-in-out, box-shadow 250ms ease-in-out;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  .inner {
    flex-grow: 1;
    max-height: 170px;
    width: 100%;
  }
`;
function wo({ placeId: t, opacity: r, interactable: i }) {
  const [a, u] = tt.useState(null),
    { register: s, remove: f } = Hb(),
    d = !!jb(),
    h = i && !d;
  return (
    tt.useEffect(
      () => (
        a && s(t, { element: a, opacity: r, interactable: h }),
        () => {
          f(t);
        }
      ),
      [t, a, s, f, r, h]
    ),
    dt("div", { ref: u, css: S3 })
  );
}
const S3 = ve`
  pointer-events: none;
  width: 100%;
  height: 100%;
`,
  Hb = jp()(
    Pp((t) => ({
      placeMap: {},
      register: (r, i) =>
        t((a) => {
          a.placeMap[r] = i;
        }),
      remove: (r) =>
        t((i) => {
          delete i.placeMap[r];
        }),
    }))
  );
function ei(t, r, i) {
  let a = t;
  return r === void 0 || ((a += `.${r}`), i === void 0) || (a += `.${i}`), a;
}
var w3 =
    /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,
  E3 = Nv(function (t) {
    return (
      w3.test(t) ||
      (t.charCodeAt(0) === 111 &&
        t.charCodeAt(1) === 110 &&
        t.charCodeAt(2) < 91)
    );
  }),
  T3 = E3,
  A3 = function (r) {
    return r !== "theme";
  },
  L1 = function (r) {
    return typeof r == "string" && r.charCodeAt(0) > 96 ? T3 : A3;
  },
  U1 = function (r, i, a) {
    var u;
    if (i) {
      var s = i.shouldForwardProp;
      u =
        r.__emotion_forwardProp && s
          ? function (f) {
              return r.__emotion_forwardProp(f) && s(f);
            }
          : s;
    }
    return typeof u != "function" && a && (u = r.__emotion_forwardProp), u;
  },
  O3 = function (r) {
    var i = r.cache,
      a = r.serialized,
      u = r.isStringTag;
    return (
      Np(i, a, u),
      Hv(function () {
        return Uv(i, a, u);
      }),
      null
    );
  },
  C3 = function t(r, i) {
    var a = r.__emotion_real === r,
      u = (a && r.__emotion_base) || r,
      s,
      f;
    i !== void 0 && ((s = i.label), (f = i.target));
    var d = U1(r, i, a),
      h = d || L1(u),
      m = !h("as");
    return function () {
      var g = arguments,
        y =
          a && r.__emotion_styles !== void 0 ? r.__emotion_styles.slice(0) : [];
      if (
        (s !== void 0 && y.push("label:" + s + ";"),
        g[0] == null || g[0].raw === void 0)
      )
        y.push.apply(y, g);
      else {
        var b = g[0];
        y.push(b[0]);
        for (var v = g.length, O = 1; O < v; O++) y.push(g[O], b[O]);
      }
      var T = Pv(function (L, D, G) {
        var $ = (m && L.as) || u,
          H = "",
          R = [],
          k = L;
        if (L.theme == null) {
          k = {};
          for (var Q in L) k[Q] = L[Q];
          k.theme = tt.useContext(Bp);
        }
        typeof L.className == "string"
          ? (H = Lv(D.registered, R, L.className))
          : L.className != null && (H = L.className + " ");
        var C = Hs(y.concat(R), D.registered, k);
        (H += D.key + "-" + C.name), f !== void 0 && (H += " " + f);
        var U = m && d === void 0 ? L1($) : h,
          z = {};
        for (var q in L) (m && q === "as") || (U(q) && (z[q] = L[q]));
        return (
          (z.className = H),
          G && (z.ref = G),
          tt.createElement(
            tt.Fragment,
            null,
            tt.createElement(O3, {
              cache: D,
              serialized: C,
              isStringTag: typeof $ == "string",
            }),
            tt.createElement($, z)
          )
        );
      });
      return (
        (T.displayName =
          s !== void 0
            ? s
            : "Styled(" +
              (typeof u == "string"
                ? u
                : u.displayName || u.name || "Component") +
              ")"),
        (T.defaultProps = r.defaultProps),
        (T.__emotion_real = T),
        (T.__emotion_base = u),
        (T.__emotion_styles = y),
        (T.__emotion_forwardProp = d),
        Object.defineProperty(T, "toString", {
          value: function () {
            return "." + f;
          },
        }),
        (T.withComponent = function (L, D) {
          var G = t(L, tp({}, i, D, { shouldForwardProp: U1(T, D, !0) }));
          return G.apply(void 0, y);
        }),
        T
      );
    };
  },
  k3 = [
    "a",
    "abbr",
    "address",
    "area",
    "article",
    "aside",
    "audio",
    "b",
    "base",
    "bdi",
    "bdo",
    "big",
    "blockquote",
    "body",
    "br",
    "button",
    "canvas",
    "caption",
    "cite",
    "code",
    "col",
    "colgroup",
    "data",
    "datalist",
    "dd",
    "del",
    "details",
    "dfn",
    "dialog",
    "div",
    "dl",
    "dt",
    "em",
    "embed",
    "fieldset",
    "figcaption",
    "figure",
    "footer",
    "form",
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "head",
    "header",
    "hgroup",
    "hr",
    "html",
    "i",
    "iframe",
    "img",
    "input",
    "ins",
    "kbd",
    "keygen",
    "label",
    "legend",
    "li",
    "link",
    "main",
    "map",
    "mark",
    "marquee",
    "menu",
    "menuitem",
    "meta",
    "meter",
    "nav",
    "noscript",
    "object",
    "ol",
    "optgroup",
    "option",
    "output",
    "p",
    "param",
    "picture",
    "pre",
    "progress",
    "q",
    "rp",
    "rt",
    "ruby",
    "s",
    "samp",
    "script",
    "section",
    "select",
    "small",
    "source",
    "span",
    "strong",
    "style",
    "sub",
    "summary",
    "sup",
    "table",
    "tbody",
    "td",
    "textarea",
    "tfoot",
    "th",
    "thead",
    "time",
    "title",
    "tr",
    "track",
    "u",
    "ul",
    "var",
    "video",
    "wbr",
    "circle",
    "clipPath",
    "defs",
    "ellipse",
    "foreignObject",
    "g",
    "image",
    "line",
    "linearGradient",
    "mask",
    "path",
    "pattern",
    "polygon",
    "polyline",
    "radialGradient",
    "rect",
    "stop",
    "svg",
    "text",
    "tspan",
  ],
  zs = C3.bind(null);
k3.forEach(function (t) {
  zs[t] = zs(t);
});
const j1 = (t) => t,
  _3 = () => {
    let t = j1;
    return {
      configure(r) {
        t = r;
      },
      generate(r) {
        return t(r);
      },
      reset() {
        t = j1;
      },
    };
  },
  R3 = _3();
function Ni(t, ...r) {
  const i = new URL(`https://mui.com/production-error/?code=${t}`);
  return (
    r.forEach((a) => i.searchParams.append("args[]", a)),
    `Minified MUI error #${t}; visit ${i} for the full message.`
  );
}
function ni(t) {
  if (typeof t != "string") throw new Error(Ni(7));
  return t.charAt(0).toUpperCase() + t.slice(1);
}
function qb(t) {
  var r,
    i,
    a = "";
  if (typeof t == "string" || typeof t == "number") a += t;
  else if (typeof t == "object")
    if (Array.isArray(t)) {
      var u = t.length;
      for (r = 0; r < u; r++)
        t[r] && (i = qb(t[r])) && (a && (a += " "), (a += i));
    } else for (i in t) t[i] && (a && (a += " "), (a += i));
  return a;
}
function $l() {
  for (var t, r, i = 0, a = "", u = arguments.length; i < u; i++)
    (t = arguments[i]) && (r = qb(t)) && (a && (a += " "), (a += r));
  return a;
}
function nh(t, r, i = void 0) {
  const a = {};
  for (const u in t) {
    const s = t[u];
    let f = "",
      d = !0;
    for (let h = 0; h < s.length; h += 1) {
      const m = s[h];
      m &&
        ((f += (d === !0 ? "" : " ") + r(m)),
        (d = !1),
        i && i[m] && (f += " " + i[m]));
    }
    a[u] = f;
  }
  return a;
}
var Gd = { exports: {} },
  ae = {};
/**
 * @license React
 * react-is.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var H1;
function M3() {
  if (H1) return ae;
  H1 = 1;
  var t = Symbol.for("react.transitional.element"),
    r = Symbol.for("react.portal"),
    i = Symbol.for("react.fragment"),
    a = Symbol.for("react.strict_mode"),
    u = Symbol.for("react.profiler"),
    s = Symbol.for("react.consumer"),
    f = Symbol.for("react.context"),
    d = Symbol.for("react.forward_ref"),
    h = Symbol.for("react.suspense"),
    m = Symbol.for("react.suspense_list"),
    g = Symbol.for("react.memo"),
    y = Symbol.for("react.lazy"),
    b = Symbol.for("react.view_transition"),
    v = Symbol.for("react.client.reference");
  function O(T) {
    if (typeof T == "object" && T !== null) {
      var L = T.$$typeof;
      switch (L) {
        case t:
          switch (((T = T.type), T)) {
            case i:
            case u:
            case a:
            case h:
            case m:
            case b:
              return T;
            default:
              switch (((T = T && T.$$typeof), T)) {
                case f:
                case d:
                case y:
                case g:
                  return T;
                case s:
                  return T;
                default:
                  return L;
              }
          }
        case r:
          return L;
      }
    }
  }
  return (
    (ae.ContextConsumer = s),
    (ae.ContextProvider = f),
    (ae.Element = t),
    (ae.ForwardRef = d),
    (ae.Fragment = i),
    (ae.Lazy = y),
    (ae.Memo = g),
    (ae.Portal = r),
    (ae.Profiler = u),
    (ae.StrictMode = a),
    (ae.Suspense = h),
    (ae.SuspenseList = m),
    (ae.isContextConsumer = function (T) {
      return O(T) === s;
    }),
    (ae.isContextProvider = function (T) {
      return O(T) === f;
    }),
    (ae.isElement = function (T) {
      return typeof T == "object" && T !== null && T.$$typeof === t;
    }),
    (ae.isForwardRef = function (T) {
      return O(T) === d;
    }),
    (ae.isFragment = function (T) {
      return O(T) === i;
    }),
    (ae.isLazy = function (T) {
      return O(T) === y;
    }),
    (ae.isMemo = function (T) {
      return O(T) === g;
    }),
    (ae.isPortal = function (T) {
      return O(T) === r;
    }),
    (ae.isProfiler = function (T) {
      return O(T) === u;
    }),
    (ae.isStrictMode = function (T) {
      return O(T) === a;
    }),
    (ae.isSuspense = function (T) {
      return O(T) === h;
    }),
    (ae.isSuspenseList = function (T) {
      return O(T) === m;
    }),
    (ae.isValidElementType = function (T) {
      return (
        typeof T == "string" ||
        typeof T == "function" ||
        T === i ||
        T === u ||
        T === a ||
        T === h ||
        T === m ||
        (typeof T == "object" &&
          T !== null &&
          (T.$$typeof === y ||
            T.$$typeof === g ||
            T.$$typeof === f ||
            T.$$typeof === s ||
            T.$$typeof === d ||
            T.$$typeof === v ||
            T.getModuleId !== void 0))
      );
    }),
    (ae.typeOf = O),
    ae
  );
}
var q1;
function z3() {
  return q1 || ((q1 = 1), (Gd.exports = M3())), Gd.exports;
}
var Pb = z3();
function Cr(t) {
  if (typeof t != "object" || t === null) return !1;
  const r = Object.getPrototypeOf(t);
  return (
    (r === null ||
      r === Object.prototype ||
      Object.getPrototypeOf(r) === null) &&
    !(Symbol.toStringTag in t) &&
    !(Symbol.iterator in t)
  );
}
function $b(t) {
  if (tt.isValidElement(t) || Pb.isValidElementType(t) || !Cr(t)) return t;
  const r = {};
  return (
    Object.keys(t).forEach((i) => {
      r[i] = $b(t[i]);
    }),
    r
  );
}
function On(t, r, i = { clone: !0 }) {
  const a = i.clone ? { ...t } : t;
  return (
    Cr(t) &&
      Cr(r) &&
      Object.keys(r).forEach((u) => {
        tt.isValidElement(r[u]) || Pb.isValidElementType(r[u])
          ? (a[u] = r[u])
          : Cr(r[u]) && Object.prototype.hasOwnProperty.call(t, u) && Cr(t[u])
          ? (a[u] = On(t[u], r[u], i))
          : i.clone
          ? (a[u] = Cr(r[u]) ? $b(r[u]) : r[u])
          : (a[u] = r[u]);
      }),
    a
  );
}
function po(t, r) {
  return r ? On(t, r, { clone: !1 }) : t;
}
function P1(t, r) {
  if (!t.containerQueries) return r;
  const i = Object.keys(r)
    .filter((a) => a.startsWith("@container"))
    .sort((a, u) => {
      const s = /min-width:\s*([0-9.]+)/;
      return +(a.match(s)?.[1] || 0) - +(u.match(s)?.[1] || 0);
    });
  return i.length
    ? i.reduce(
        (a, u) => {
          const s = r[u];
          return delete a[u], (a[u] = s), a;
        },
        { ...r }
      )
    : r;
}
function D3(t, r) {
  return (
    r === "@" ||
    (r.startsWith("@") &&
      (t.some((i) => r.startsWith(`@${i}`)) || !!r.match(/^@\d/)))
  );
}
function N3(t, r) {
  const i = r.match(/^@([^/]+)?\/?(.+)?$/);
  if (!i) return null;
  const [, a, u] = i,
    s = Number.isNaN(+a) ? a || 0 : +a;
  return t.containerQueries(u).up(s);
}
function B3(t) {
  const r = (s, f) => s.replace("@media", f ? `@container ${f}` : "@container");
  function i(s, f) {
    (s.up = (...d) => r(t.breakpoints.up(...d), f)),
      (s.down = (...d) => r(t.breakpoints.down(...d), f)),
      (s.between = (...d) => r(t.breakpoints.between(...d), f)),
      (s.only = (...d) => r(t.breakpoints.only(...d), f)),
      (s.not = (...d) => {
        const h = r(t.breakpoints.not(...d), f);
        return h.includes("not all and")
          ? h
              .replace("not all and ", "")
              .replace("min-width:", "width<")
              .replace("max-width:", "width>")
              .replace("and", "or")
          : h;
      });
  }
  const a = {},
    u = (s) => (i(a, s), a);
  return i(u), { ...t, containerQueries: u };
}
const Qs = { xs: 0, sm: 600, md: 900, lg: 1200, xl: 1536 },
  $1 = {
    keys: ["xs", "sm", "md", "lg", "xl"],
    up: (t) => `@media (min-width:${Qs[t]}px)`,
  },
  L3 = {
    containerQueries: (t) => ({
      up: (r) => {
        let i = typeof r == "number" ? r : Qs[r] || r;
        return (
          typeof i == "number" && (i = `${i}px`),
          t ? `@container ${t} (min-width:${i})` : `@container (min-width:${i})`
        );
      },
    }),
  };
function kr(t, r, i) {
  const a = t.theme || {};
  if (Array.isArray(r)) {
    const s = a.breakpoints || $1;
    return r.reduce((f, d, h) => ((f[s.up(s.keys[h])] = i(r[h])), f), {});
  }
  if (typeof r == "object") {
    const s = a.breakpoints || $1;
    return Object.keys(r).reduce((f, d) => {
      if (D3(s.keys, d)) {
        const h = N3(a.containerQueries ? a : L3, d);
        h && (f[h] = i(r[d], d));
      } else if (Object.keys(s.values || Qs).includes(d)) {
        const h = s.up(d);
        f[h] = i(r[d], d);
      } else {
        const h = d;
        f[h] = r[h];
      }
      return f;
    }, {});
  }
  return i(r);
}
function U3(t = {}) {
  return (
    t.keys?.reduce((i, a) => {
      const u = t.up(a);
      return (i[u] = {}), i;
    }, {}) || {}
  );
}
function V1(t, r) {
  return t.reduce((i, a) => {
    const u = i[a];
    return (!u || Object.keys(u).length === 0) && delete i[a], i;
  }, r);
}
function Is(t, r, i = !0) {
  if (!r || typeof r != "string") return null;
  if (t && t.vars && i) {
    const a = `vars.${r}`
      .split(".")
      .reduce((u, s) => (u && u[s] ? u[s] : null), t);
    if (a != null) return a;
  }
  return r.split(".").reduce((a, u) => (a && a[u] != null ? a[u] : null), t);
}
function Ds(t, r, i, a = i) {
  let u;
  return (
    typeof t == "function"
      ? (u = t(i))
      : Array.isArray(t)
      ? (u = t[i] || a)
      : (u = Is(t, i) || a),
    r && (u = r(u, a, t)),
    u
  );
}
function Me(t) {
  const { prop: r, cssProperty: i = t.prop, themeKey: a, transform: u } = t,
    s = (f) => {
      if (f[r] == null) return null;
      const d = f[r],
        h = f.theme,
        m = Is(h, a) || {};
      return kr(f, d, (y) => {
        let b = Ds(m, u, y);
        return (
          y === b &&
            typeof y == "string" &&
            (b = Ds(m, u, `${r}${y === "default" ? "" : ni(y)}`, y)),
          i === !1 ? b : { [i]: b }
        );
      });
    };
  return (s.propTypes = {}), (s.filterProps = [r]), s;
}
function j3(t) {
  const r = {};
  return (i) => (r[i] === void 0 && (r[i] = t(i)), r[i]);
}
const H3 = { m: "margin", p: "padding" },
  q3 = {
    t: "Top",
    r: "Right",
    b: "Bottom",
    l: "Left",
    x: ["Left", "Right"],
    y: ["Top", "Bottom"],
  },
  Y1 = { marginX: "mx", marginY: "my", paddingX: "px", paddingY: "py" },
  P3 = j3((t) => {
    if (t.length > 2)
      if (Y1[t]) t = Y1[t];
      else return [t];
    const [r, i] = t.split(""),
      a = H3[r],
      u = q3[i] || "";
    return Array.isArray(u) ? u.map((s) => a + s) : [a + u];
  }),
  rh = [
    "m",
    "mt",
    "mr",
    "mb",
    "ml",
    "mx",
    "my",
    "margin",
    "marginTop",
    "marginRight",
    "marginBottom",
    "marginLeft",
    "marginX",
    "marginY",
    "marginInline",
    "marginInlineStart",
    "marginInlineEnd",
    "marginBlock",
    "marginBlockStart",
    "marginBlockEnd",
  ],
  ih = [
    "p",
    "pt",
    "pr",
    "pb",
    "pl",
    "px",
    "py",
    "padding",
    "paddingTop",
    "paddingRight",
    "paddingBottom",
    "paddingLeft",
    "paddingX",
    "paddingY",
    "paddingInline",
    "paddingInlineStart",
    "paddingInlineEnd",
    "paddingBlock",
    "paddingBlockStart",
    "paddingBlockEnd",
  ];
[...rh, ...ih];
function zo(t, r, i, a) {
  const u = Is(t, r, !0) ?? i;
  return typeof u == "number" || typeof u == "string"
    ? (s) =>
        typeof s == "string"
          ? s
          : typeof u == "string"
          ? u.startsWith("var(") && s === 0
            ? 0
            : u.startsWith("var(") && s === 1
            ? u
            : `calc(${s} * ${u})`
          : u * s
    : Array.isArray(u)
    ? (s) => {
        if (typeof s == "string") return s;
        const f = Math.abs(s),
          d = u[f];
        return s >= 0
          ? d
          : typeof d == "number"
          ? -d
          : typeof d == "string" && d.startsWith("var(")
          ? `calc(-1 * ${d})`
          : `-${d}`;
      }
    : typeof u == "function"
    ? u
    : () => {};
}
function lh(t) {
  return zo(t, "spacing", 8);
}
function Do(t, r) {
  return typeof r == "string" || r == null ? r : t(r);
}
function $3(t, r) {
  return (i) => t.reduce((a, u) => ((a[u] = Do(r, i)), a), {});
}
function V3(t, r, i, a) {
  if (!r.includes(i)) return null;
  const u = P3(i),
    s = $3(u, a),
    f = t[i];
  return kr(t, f, s);
}
function Vb(t, r) {
  const i = lh(t.theme);
  return Object.keys(t)
    .map((a) => V3(t, r, a, i))
    .reduce(po, {});
}
function Ae(t) {
  return Vb(t, rh);
}
Ae.propTypes = {};
Ae.filterProps = rh;
function Oe(t) {
  return Vb(t, ih);
}
Oe.propTypes = {};
Oe.filterProps = ih;
function Zs(...t) {
  const r = t.reduce(
      (a, u) => (
        u.filterProps.forEach((s) => {
          a[s] = u;
        }),
        a
      ),
      {}
    ),
    i = (a) => Object.keys(a).reduce((u, s) => (r[s] ? po(u, r[s](a)) : u), {});
  return (
    (i.propTypes = {}),
    (i.filterProps = t.reduce((a, u) => a.concat(u.filterProps), [])),
    i
  );
}
function qn(t) {
  return typeof t != "number" ? t : `${t}px solid`;
}
function Yn(t, r) {
  return Me({ prop: t, themeKey: "borders", transform: r });
}
const Y3 = Yn("border", qn),
  G3 = Yn("borderTop", qn),
  X3 = Yn("borderRight", qn),
  Q3 = Yn("borderBottom", qn),
  I3 = Yn("borderLeft", qn),
  Z3 = Yn("borderColor"),
  K3 = Yn("borderTopColor"),
  F3 = Yn("borderRightColor"),
  W3 = Yn("borderBottomColor"),
  J3 = Yn("borderLeftColor"),
  tk = Yn("outline", qn),
  ek = Yn("outlineColor"),
  Ks = (t) => {
    if (t.borderRadius !== void 0 && t.borderRadius !== null) {
      const r = zo(t.theme, "shape.borderRadius", 4),
        i = (a) => ({ borderRadius: Do(r, a) });
      return kr(t, t.borderRadius, i);
    }
    return null;
  };
Ks.propTypes = {};
Ks.filterProps = ["borderRadius"];
Zs(Y3, G3, X3, Q3, I3, Z3, K3, F3, W3, J3, Ks, tk, ek);
const Fs = (t) => {
  if (t.gap !== void 0 && t.gap !== null) {
    const r = zo(t.theme, "spacing", 8),
      i = (a) => ({ gap: Do(r, a) });
    return kr(t, t.gap, i);
  }
  return null;
};
Fs.propTypes = {};
Fs.filterProps = ["gap"];
const Ws = (t) => {
  if (t.columnGap !== void 0 && t.columnGap !== null) {
    const r = zo(t.theme, "spacing", 8),
      i = (a) => ({ columnGap: Do(r, a) });
    return kr(t, t.columnGap, i);
  }
  return null;
};
Ws.propTypes = {};
Ws.filterProps = ["columnGap"];
const Js = (t) => {
  if (t.rowGap !== void 0 && t.rowGap !== null) {
    const r = zo(t.theme, "spacing", 8),
      i = (a) => ({ rowGap: Do(r, a) });
    return kr(t, t.rowGap, i);
  }
  return null;
};
Js.propTypes = {};
Js.filterProps = ["rowGap"];
const nk = Me({ prop: "gridColumn" }),
  rk = Me({ prop: "gridRow" }),
  ik = Me({ prop: "gridAutoFlow" }),
  lk = Me({ prop: "gridAutoColumns" }),
  ak = Me({ prop: "gridAutoRows" }),
  ok = Me({ prop: "gridTemplateColumns" }),
  uk = Me({ prop: "gridTemplateRows" }),
  sk = Me({ prop: "gridTemplateAreas" }),
  ck = Me({ prop: "gridArea" });
Zs(Fs, Ws, Js, nk, rk, ik, lk, ak, ok, uk, sk, ck);
function Ul(t, r) {
  return r === "grey" ? r : t;
}
const fk = Me({ prop: "color", themeKey: "palette", transform: Ul }),
  dk = Me({
    prop: "bgcolor",
    cssProperty: "backgroundColor",
    themeKey: "palette",
    transform: Ul,
  }),
  pk = Me({ prop: "backgroundColor", themeKey: "palette", transform: Ul });
Zs(fk, dk, pk);
function En(t) {
  return t <= 1 && t !== 0 ? `${t * 100}%` : t;
}
const hk = Me({ prop: "width", transform: En }),
  ah = (t) => {
    if (t.maxWidth !== void 0 && t.maxWidth !== null) {
      const r = (i) => {
        const a = t.theme?.breakpoints?.values?.[i] || Qs[i];
        return a
          ? t.theme?.breakpoints?.unit !== "px"
            ? { maxWidth: `${a}${t.theme.breakpoints.unit}` }
            : { maxWidth: a }
          : { maxWidth: En(i) };
      };
      return kr(t, t.maxWidth, r);
    }
    return null;
  };
ah.filterProps = ["maxWidth"];
const mk = Me({ prop: "minWidth", transform: En }),
  gk = Me({ prop: "height", transform: En }),
  yk = Me({ prop: "maxHeight", transform: En }),
  vk = Me({ prop: "minHeight", transform: En });
Me({ prop: "size", cssProperty: "width", transform: En });
Me({ prop: "size", cssProperty: "height", transform: En });
const bk = Me({ prop: "boxSizing" });
Zs(hk, ah, mk, gk, yk, vk, bk);
const tc = {
  border: { themeKey: "borders", transform: qn },
  borderTop: { themeKey: "borders", transform: qn },
  borderRight: { themeKey: "borders", transform: qn },
  borderBottom: { themeKey: "borders", transform: qn },
  borderLeft: { themeKey: "borders", transform: qn },
  borderColor: { themeKey: "palette" },
  borderTopColor: { themeKey: "palette" },
  borderRightColor: { themeKey: "palette" },
  borderBottomColor: { themeKey: "palette" },
  borderLeftColor: { themeKey: "palette" },
  outline: { themeKey: "borders", transform: qn },
  outlineColor: { themeKey: "palette" },
  borderRadius: { themeKey: "shape.borderRadius", style: Ks },
  color: { themeKey: "palette", transform: Ul },
  bgcolor: {
    themeKey: "palette",
    cssProperty: "backgroundColor",
    transform: Ul,
  },
  backgroundColor: { themeKey: "palette", transform: Ul },
  p: { style: Oe },
  pt: { style: Oe },
  pr: { style: Oe },
  pb: { style: Oe },
  pl: { style: Oe },
  px: { style: Oe },
  py: { style: Oe },
  padding: { style: Oe },
  paddingTop: { style: Oe },
  paddingRight: { style: Oe },
  paddingBottom: { style: Oe },
  paddingLeft: { style: Oe },
  paddingX: { style: Oe },
  paddingY: { style: Oe },
  paddingInline: { style: Oe },
  paddingInlineStart: { style: Oe },
  paddingInlineEnd: { style: Oe },
  paddingBlock: { style: Oe },
  paddingBlockStart: { style: Oe },
  paddingBlockEnd: { style: Oe },
  m: { style: Ae },
  mt: { style: Ae },
  mr: { style: Ae },
  mb: { style: Ae },
  ml: { style: Ae },
  mx: { style: Ae },
  my: { style: Ae },
  margin: { style: Ae },
  marginTop: { style: Ae },
  marginRight: { style: Ae },
  marginBottom: { style: Ae },
  marginLeft: { style: Ae },
  marginX: { style: Ae },
  marginY: { style: Ae },
  marginInline: { style: Ae },
  marginInlineStart: { style: Ae },
  marginInlineEnd: { style: Ae },
  marginBlock: { style: Ae },
  marginBlockStart: { style: Ae },
  marginBlockEnd: { style: Ae },
  displayPrint: {
    cssProperty: !1,
    transform: (t) => ({ "@media print": { display: t } }),
  },
  display: {},
  overflow: {},
  textOverflow: {},
  visibility: {},
  whiteSpace: {},
  flexBasis: {},
  flexDirection: {},
  flexWrap: {},
  justifyContent: {},
  alignItems: {},
  alignContent: {},
  order: {},
  flex: {},
  flexGrow: {},
  flexShrink: {},
  alignSelf: {},
  justifyItems: {},
  justifySelf: {},
  gap: { style: Fs },
  rowGap: { style: Js },
  columnGap: { style: Ws },
  gridColumn: {},
  gridRow: {},
  gridAutoFlow: {},
  gridAutoColumns: {},
  gridAutoRows: {},
  gridTemplateColumns: {},
  gridTemplateRows: {},
  gridTemplateAreas: {},
  gridArea: {},
  position: {},
  zIndex: { themeKey: "zIndex" },
  top: {},
  right: {},
  bottom: {},
  left: {},
  boxShadow: { themeKey: "shadows" },
  width: { transform: En },
  maxWidth: { style: ah },
  minWidth: { transform: En },
  height: { transform: En },
  maxHeight: { transform: En },
  minHeight: { transform: En },
  boxSizing: {},
  font: { themeKey: "font" },
  fontFamily: { themeKey: "typography" },
  fontSize: { themeKey: "typography" },
  fontStyle: { themeKey: "typography" },
  fontWeight: { themeKey: "typography" },
  letterSpacing: {},
  textTransform: {},
  lineHeight: {},
  textAlign: {},
  typography: { cssProperty: !1, themeKey: "typography" },
};
function xk(...t) {
  const r = t.reduce((a, u) => a.concat(Object.keys(u)), []),
    i = new Set(r);
  return t.every((a) => i.size === Object.keys(a).length);
}
function Sk(t, r) {
  return typeof t == "function" ? t(r) : t;
}
function wk() {
  function t(i, a, u, s) {
    const f = { [i]: a, theme: u },
      d = s[i];
    if (!d) return { [i]: a };
    const { cssProperty: h = i, themeKey: m, transform: g, style: y } = d;
    if (a == null) return null;
    if (m === "typography" && a === "inherit") return { [i]: a };
    const b = Is(u, m) || {};
    return y
      ? y(f)
      : kr(f, a, (O) => {
          let T = Ds(b, g, O);
          return (
            O === T &&
              typeof O == "string" &&
              (T = Ds(b, g, `${i}${O === "default" ? "" : ni(O)}`, O)),
            h === !1 ? T : { [h]: T }
          );
        });
  }
  function r(i) {
    const { sx: a, theme: u = {}, nested: s } = i || {};
    if (!a) return null;
    const f = u.unstable_sxConfig ?? tc;
    function d(h) {
      let m = h;
      if (typeof h == "function") m = h(u);
      else if (typeof h != "object") return h;
      if (!m) return null;
      const g = U3(u.breakpoints),
        y = Object.keys(g);
      let b = g;
      return (
        Object.keys(m).forEach((v) => {
          const O = Sk(m[v], u);
          if (O != null)
            if (typeof O == "object")
              if (f[v]) b = po(b, t(v, O, u, f));
              else {
                const T = kr({ theme: u }, O, (L) => ({ [v]: L }));
                xk(T, O)
                  ? (b[v] = r({ sx: O, theme: u, nested: !0 }))
                  : (b = po(b, T));
              }
            else b = po(b, t(v, O, u, f));
        }),
        !s && u.modularCssLayers
          ? { "@layer sx": P1(u, V1(y, b)) }
          : P1(u, V1(y, b))
      );
    }
    return Array.isArray(a) ? a.map(d) : d(a);
  }
  return r;
}
const Vl = wk();
Vl.filterProps = ["sx"];
function Ek(t, r) {
  return zs(t, r);
}
function Tk(t, r) {
  Array.isArray(t.__emotion_styles) &&
    (t.__emotion_styles = r(t.__emotion_styles));
}
const G1 = [];
function Ri(t) {
  return (G1[0] = t), Hs(G1);
}
const Ak = (t) => {
  const r = Object.keys(t).map((i) => ({ key: i, val: t[i] })) || [];
  return (
    r.sort((i, a) => i.val - a.val),
    r.reduce((i, a) => ({ ...i, [a.key]: a.val }), {})
  );
};
function Ok(t) {
  const {
      values: r = { xs: 0, sm: 600, md: 900, lg: 1200, xl: 1536 },
      unit: i = "px",
      step: a = 5,
      ...u
    } = t,
    s = Ak(r),
    f = Object.keys(s);
  function d(b) {
    return `@media (min-width:${typeof r[b] == "number" ? r[b] : b}${i})`;
  }
  function h(b) {
    return `@media (max-width:${
      (typeof r[b] == "number" ? r[b] : b) - a / 100
    }${i})`;
  }
  function m(b, v) {
    const O = f.indexOf(v);
    return `@media (min-width:${
      typeof r[b] == "number" ? r[b] : b
    }${i}) and (max-width:${
      (O !== -1 && typeof r[f[O]] == "number" ? r[f[O]] : v) - a / 100
    }${i})`;
  }
  function g(b) {
    return f.indexOf(b) + 1 < f.length ? m(b, f[f.indexOf(b) + 1]) : d(b);
  }
  function y(b) {
    const v = f.indexOf(b);
    return v === 0
      ? d(f[1])
      : v === f.length - 1
      ? h(f[v])
      : m(b, f[f.indexOf(b) + 1]).replace("@media", "@media not all and");
  }
  return {
    keys: f,
    values: s,
    up: d,
    down: h,
    between: m,
    only: g,
    not: y,
    unit: i,
    ...u,
  };
}
const Ck = { borderRadius: 4 };
function Yb(t = 8, r = lh({ spacing: t })) {
  if (t.mui) return t;
  const i = (...a) =>
    (a.length === 0 ? [1] : a)
      .map((s) => {
        const f = r(s);
        return typeof f == "number" ? `${f}px` : f;
      })
      .join(" ");
  return (i.mui = !0), i;
}
function kk(t, r) {
  const i = this;
  if (i.vars) {
    if (!i.colorSchemes?.[t] || typeof i.getColorSchemeSelector != "function")
      return {};
    let a = i.getColorSchemeSelector(t);
    return a === "&"
      ? r
      : ((a.includes("data-") || a.includes(".")) &&
          (a = `*:where(${a.replace(/\s*&$/, "")}) &`),
        { [a]: r });
  }
  return i.palette.mode === t ? r : {};
}
function oh(t = {}, ...r) {
  const {
      breakpoints: i = {},
      palette: a = {},
      spacing: u,
      shape: s = {},
      ...f
    } = t,
    d = Ok(i),
    h = Yb(u);
  let m = On(
    {
      breakpoints: d,
      direction: "ltr",
      components: {},
      palette: { mode: "light", ...a },
      spacing: h,
      shape: { ...Ck, ...s },
    },
    f
  );
  return (
    (m = B3(m)),
    (m.applyStyles = kk),
    (m = r.reduce((g, y) => On(g, y), m)),
    (m.unstable_sxConfig = { ...tc, ...f?.unstable_sxConfig }),
    (m.unstable_sx = function (y) {
      return Vl({ sx: y, theme: this });
    }),
    m
  );
}
function _k(t) {
  return Object.keys(t).length === 0;
}
function Rk(t = null) {
  const r = tt.useContext(Bp);
  return !r || _k(r) ? t : r;
}
const Mk = oh();
function zk(t = Mk) {
  return Rk(t);
}
const Dk = {
  active: "active",
  checked: "checked",
  completed: "completed",
  disabled: "disabled",
  error: "error",
  expanded: "expanded",
  focused: "focused",
  focusVisible: "focusVisible",
  open: "open",
  readOnly: "readOnly",
  required: "required",
  selected: "selected",
};
function ec(t, r, i = "Mui") {
  const a = Dk[r];
  return a ? `${i}-${a}` : `${R3.generate(t)}-${r}`;
}
function uh(t, r, i = "Mui") {
  const a = {};
  return (
    r.forEach((u) => {
      a[u] = ec(t, u, i);
    }),
    a
  );
}
function Gb(t) {
  const { variants: r, ...i } = t,
    a = { variants: r, style: Ri(i), isProcessed: !0 };
  return (
    a.style === i ||
      (r &&
        r.forEach((u) => {
          typeof u.style != "function" && (u.style = Ri(u.style));
        })),
    a
  );
}
const Nk = oh();
function Xd(t) {
  return t !== "ownerState" && t !== "theme" && t !== "sx" && t !== "as";
}
function _i(t, r) {
  return (
    r &&
      t &&
      typeof t == "object" &&
      t.styles &&
      !t.styles.startsWith("@layer") &&
      (t.styles = `@layer ${r}{${String(t.styles)}}`),
    t
  );
}
function Bk(t) {
  return t ? (r, i) => i[t] : null;
}
function Lk(t, r, i) {
  t.theme = Hk(t.theme) ? i : t.theme[r] || t.theme;
}
function bs(t, r, i) {
  const a = typeof r == "function" ? r(t) : r;
  if (Array.isArray(a)) return a.flatMap((u) => bs(t, u, i));
  if (Array.isArray(a?.variants)) {
    let u;
    if (a.isProcessed) u = i ? _i(a.style, i) : a.style;
    else {
      const { variants: s, ...f } = a;
      u = i ? _i(Ri(f), i) : f;
    }
    return Xb(t, a.variants, [u], i);
  }
  return a?.isProcessed
    ? i
      ? _i(Ri(a.style), i)
      : a.style
    : i
    ? _i(Ri(a), i)
    : a;
}
function Xb(t, r, i = [], a = void 0) {
  let u;
  t: for (let s = 0; s < r.length; s += 1) {
    const f = r[s];
    if (typeof f.props == "function") {
      if (
        ((u ??= { ...t, ...t.ownerState, ownerState: t.ownerState }),
        !f.props(u))
      )
        continue;
    } else
      for (const d in f.props)
        if (t[d] !== f.props[d] && t.ownerState?.[d] !== f.props[d]) continue t;
    typeof f.style == "function"
      ? ((u ??= { ...t, ...t.ownerState, ownerState: t.ownerState }),
        i.push(a ? _i(Ri(f.style(u)), a) : f.style(u)))
      : i.push(a ? _i(Ri(f.style), a) : f.style);
  }
  return i;
}
function Uk(t = {}) {
  const {
    themeId: r,
    defaultTheme: i = Nk,
    rootShouldForwardProp: a = Xd,
    slotShouldForwardProp: u = Xd,
  } = t;
  function s(d) {
    Lk(d, r, i);
  }
  return (d, h = {}) => {
    Tk(d, (k) => k.filter((Q) => Q !== Vl));
    const {
        name: m,
        slot: g,
        skipVariantsResolver: y,
        skipSx: b,
        overridesResolver: v = Bk(Pk(g)),
        ...O
      } = h,
      T = (m && m.startsWith("Mui")) || g ? "components" : "custom",
      L = y !== void 0 ? y : (g && g !== "Root" && g !== "root") || !1,
      D = b || !1;
    let G = Xd;
    g === "Root" || g === "root"
      ? (G = a)
      : g
      ? (G = u)
      : qk(d) && (G = void 0);
    const $ = Ek(d, { shouldForwardProp: G, label: jk(), ...O }),
      H = (k) => {
        if (k.__emotion_real === k) return k;
        if (typeof k == "function")
          return function (C) {
            return bs(C, k, C.theme.modularCssLayers ? T : void 0);
          };
        if (Cr(k)) {
          const Q = Gb(k);
          return function (U) {
            return Q.variants
              ? bs(U, Q, U.theme.modularCssLayers ? T : void 0)
              : U.theme.modularCssLayers
              ? _i(Q.style, T)
              : Q.style;
          };
        }
        return k;
      },
      R = (...k) => {
        const Q = [],
          C = k.map(H),
          U = [];
        if (
          (Q.push(s),
          m &&
            v &&
            U.push(function (B) {
              const V = B.theme.components?.[m]?.styleOverrides;
              if (!V) return null;
              const _ = {};
              for (const P in V)
                _[P] = bs(B, V[P], B.theme.modularCssLayers ? "theme" : void 0);
              return v(B, _);
            }),
          m &&
            !L &&
            U.push(function (B) {
              const V = B.theme?.components?.[m]?.variants;
              return V
                ? Xb(B, V, [], B.theme.modularCssLayers ? "theme" : void 0)
                : null;
            }),
          D || U.push(Vl),
          Array.isArray(C[0]))
        ) {
          const w = C.shift(),
            B = new Array(Q.length).fill(""),
            N = new Array(U.length).fill("");
          let V;
          (V = [...B, ...w, ...N]),
            (V.raw = [...B, ...w.raw, ...N]),
            Q.unshift(V);
        }
        const z = [...Q, ...C, ...U],
          q = $(...z);
        return d.muiName && (q.muiName = d.muiName), q;
      };
    return $.withConfig && (R.withConfig = $.withConfig), R;
  };
}
function jk(t, r) {
  return void 0;
}
function Hk(t) {
  for (const r in t) return !1;
  return !0;
}
function qk(t) {
  return typeof t == "string" && t.charCodeAt(0) > 96;
}
function Pk(t) {
  return t && t.charAt(0).toLowerCase() + t.slice(1);
}
function vp(t, r, i = !1) {
  const a = { ...r };
  for (const u in t)
    if (Object.prototype.hasOwnProperty.call(t, u)) {
      const s = u;
      if (s === "components" || s === "slots") a[s] = { ...t[s], ...a[s] };
      else if (s === "componentsProps" || s === "slotProps") {
        const f = t[s],
          d = r[s];
        if (!d) a[s] = f || {};
        else if (!f) a[s] = d;
        else {
          a[s] = { ...d };
          for (const h in f)
            if (Object.prototype.hasOwnProperty.call(f, h)) {
              const m = h;
              a[s][m] = vp(f[m], d[m], i);
            }
        }
      } else
        s === "className" && i && r.className
          ? (a.className = $l(t?.className, r?.className))
          : s === "style" && i && r.style
          ? (a.style = { ...t?.style, ...r?.style })
          : a[s] === void 0 && (a[s] = t[s]);
    }
  return a;
}
const Eo = typeof window < "u" ? tt.useLayoutEffect : tt.useEffect;
function $k(t, r = Number.MIN_SAFE_INTEGER, i = Number.MAX_SAFE_INTEGER) {
  return Math.max(r, Math.min(t, i));
}
function sh(t, r = 0, i = 1) {
  return $k(t, r, i);
}
function Vk(t) {
  t = t.slice(1);
  const r = new RegExp(`.{1,${t.length >= 6 ? 2 : 1}}`, "g");
  let i = t.match(r);
  return (
    i && i[0].length === 1 && (i = i.map((a) => a + a)),
    i
      ? `rgb${i.length === 4 ? "a" : ""}(${i
          .map((a, u) =>
            u < 3
              ? parseInt(a, 16)
              : Math.round((parseInt(a, 16) / 255) * 1e3) / 1e3
          )
          .join(", ")})`
      : ""
  );
}
function ri(t) {
  if (t.type) return t;
  if (t.charAt(0) === "#") return ri(Vk(t));
  const r = t.indexOf("("),
    i = t.substring(0, r);
  if (!["rgb", "rgba", "hsl", "hsla", "color"].includes(i))
    throw new Error(Ni(9, t));
  let a = t.substring(r + 1, t.length - 1),
    u;
  if (i === "color") {
    if (
      ((a = a.split(" ")),
      (u = a.shift()),
      a.length === 4 && a[3].charAt(0) === "/" && (a[3] = a[3].slice(1)),
      !["srgb", "display-p3", "a98-rgb", "prophoto-rgb", "rec-2020"].includes(
        u
      ))
    )
      throw new Error(Ni(10, u));
  } else a = a.split(",");
  return (
    (a = a.map((s) => parseFloat(s))), { type: i, values: a, colorSpace: u }
  );
}
const Yk = (t) => {
    const r = ri(t);
    return r.values
      .slice(0, 3)
      .map((i, a) => (r.type.includes("hsl") && a !== 0 ? `${i}%` : i))
      .join(" ");
  },
  lo = (t, r) => {
    try {
      return Yk(t);
    } catch {
      return t;
    }
  };
function nc(t) {
  const { type: r, colorSpace: i } = t;
  let { values: a } = t;
  return (
    r.includes("rgb")
      ? (a = a.map((u, s) => (s < 3 ? parseInt(u, 10) : u)))
      : r.includes("hsl") && ((a[1] = `${a[1]}%`), (a[2] = `${a[2]}%`)),
    r.includes("color") ? (a = `${i} ${a.join(" ")}`) : (a = `${a.join(", ")}`),
    `${r}(${a})`
  );
}
function Qb(t) {
  t = ri(t);
  const { values: r } = t,
    i = r[0],
    a = r[1] / 100,
    u = r[2] / 100,
    s = a * Math.min(u, 1 - u),
    f = (m, g = (m + i / 30) % 12) =>
      u - s * Math.max(Math.min(g - 3, 9 - g, 1), -1);
  let d = "rgb";
  const h = [
    Math.round(f(0) * 255),
    Math.round(f(8) * 255),
    Math.round(f(4) * 255),
  ];
  return (
    t.type === "hsla" && ((d += "a"), h.push(r[3])), nc({ type: d, values: h })
  );
}
function bp(t) {
  t = ri(t);
  let r = t.type === "hsl" || t.type === "hsla" ? ri(Qb(t)).values : t.values;
  return (
    (r = r.map(
      (i) => (
        t.type !== "color" && (i /= 255),
        i <= 0.03928 ? i / 12.92 : ((i + 0.055) / 1.055) ** 2.4
      )
    )),
    Number((0.2126 * r[0] + 0.7152 * r[1] + 0.0722 * r[2]).toFixed(3))
  );
}
function Gk(t, r) {
  const i = bp(t),
    a = bp(r);
  return (Math.max(i, a) + 0.05) / (Math.min(i, a) + 0.05);
}
function Ib(t, r) {
  return (
    (t = ri(t)),
    (r = sh(r)),
    (t.type === "rgb" || t.type === "hsl") && (t.type += "a"),
    t.type === "color" ? (t.values[3] = `/${r}`) : (t.values[3] = r),
    nc(t)
  );
}
function Ai(t, r, i) {
  try {
    return Ib(t, r);
  } catch {
    return t;
  }
}
function rc(t, r) {
  if (((t = ri(t)), (r = sh(r)), t.type.includes("hsl"))) t.values[2] *= 1 - r;
  else if (t.type.includes("rgb") || t.type.includes("color"))
    for (let i = 0; i < 3; i += 1) t.values[i] *= 1 - r;
  return nc(t);
}
function ee(t, r, i) {
  try {
    return rc(t, r);
  } catch {
    return t;
  }
}
function ic(t, r) {
  if (((t = ri(t)), (r = sh(r)), t.type.includes("hsl")))
    t.values[2] += (100 - t.values[2]) * r;
  else if (t.type.includes("rgb"))
    for (let i = 0; i < 3; i += 1) t.values[i] += (255 - t.values[i]) * r;
  else if (t.type.includes("color"))
    for (let i = 0; i < 3; i += 1) t.values[i] += (1 - t.values[i]) * r;
  return nc(t);
}
function ne(t, r, i) {
  try {
    return ic(t, r);
  } catch {
    return t;
  }
}
function Xk(t, r = 0.15) {
  return bp(t) > 0.5 ? rc(t, r) : ic(t, r);
}
function ns(t, r, i) {
  try {
    return Xk(t, r);
  } catch {
    return t;
  }
}
const Qk = tt.createContext(),
  Zb = () => tt.useContext(Qk) ?? !1,
  Ik = tt.createContext(void 0);
function Zk(t) {
  const { theme: r, name: i, props: a } = t;
  if (!r || !r.components || !r.components[i]) return a;
  const u = r.components[i];
  return u.defaultProps
    ? vp(u.defaultProps, a, r.components.mergeClassNameAndStyle)
    : !u.styleOverrides && !u.variants
    ? vp(u, a, r.components.mergeClassNameAndStyle)
    : a;
}
function Kk({ props: t, name: r }) {
  const i = tt.useContext(Ik);
  return Zk({ props: t, name: r, theme: { components: i } });
}
let X1 = 0;
function Fk(t) {
  const [r, i] = tt.useState(t),
    a = t || r;
  return (
    tt.useEffect(() => {
      r == null && ((X1 += 1), i(`mui-${X1}`));
    }, [r]),
    a
  );
}
const Wk = { ...Fd },
  Q1 = Wk.useId;
function Jk(t) {
  if (Q1 !== void 0) {
    const r = Q1();
    return t ?? r;
  }
  return Fk(t);
}
const I1 = { theme: void 0 };
function t4(t) {
  let r, i;
  return function (u) {
    let s = r;
    return (
      (s === void 0 || u.theme !== i) &&
        ((I1.theme = u.theme), (s = Gb(t(I1))), (r = s), (i = u.theme)),
      s
    );
  };
}
function e4(t = "") {
  function r(...a) {
    if (!a.length) return "";
    const u = a[0];
    return typeof u == "string" &&
      !u.match(
        /(#|\(|\)|(-?(\d*\.)?\d+)(px|em|%|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc))|^(-?(\d*\.)?\d+)$|(\d+ \d+ \d+)/
      )
      ? `, var(--${t ? `${t}-` : ""}${u}${r(...a.slice(1))})`
      : `, ${u}`;
  }
  return (a, ...u) => `var(--${t ? `${t}-` : ""}${a}${r(...u)})`;
}
const Z1 = (t, r, i, a = []) => {
    let u = t;
    r.forEach((s, f) => {
      f === r.length - 1
        ? Array.isArray(u)
          ? (u[Number(s)] = i)
          : u && typeof u == "object" && (u[s] = i)
        : u &&
          typeof u == "object" &&
          (u[s] || (u[s] = a.includes(s) ? [] : {}), (u = u[s]));
    });
  },
  n4 = (t, r, i) => {
    function a(u, s = [], f = []) {
      Object.entries(u).forEach(([d, h]) => {
        (!i || (i && !i([...s, d]))) &&
          h != null &&
          (typeof h == "object" && Object.keys(h).length > 0
            ? a(h, [...s, d], Array.isArray(h) ? [...f, d] : f)
            : r([...s, d], h, f));
      });
    }
    a(t);
  },
  r4 = (t, r) =>
    typeof r == "number"
      ? ["lineHeight", "fontWeight", "opacity", "zIndex"].some((a) =>
          t.includes(a)
        ) || t[t.length - 1].toLowerCase().includes("opacity")
        ? r
        : `${r}px`
      : r;
function Qd(t, r) {
  const { prefix: i, shouldSkipGeneratingVar: a } = r || {},
    u = {},
    s = {},
    f = {};
  return (
    n4(
      t,
      (d, h, m) => {
        if (
          (typeof h == "string" || typeof h == "number") &&
          (!a || !a(d, h))
        ) {
          const g = `--${i ? `${i}-` : ""}${d.join("-")}`,
            y = r4(d, h);
          Object.assign(u, { [g]: y }),
            Z1(s, d, `var(${g})`, m),
            Z1(f, d, `var(${g}, ${y})`, m);
        }
      },
      (d) => d[0] === "vars"
    ),
    { css: u, vars: s, varsWithDefaults: f }
  );
}
function i4(t, r = {}) {
  const {
      getSelector: i = D,
      disableCssColorScheme: a,
      colorSchemeSelector: u,
      enableContrastVars: s,
    } = r,
    {
      colorSchemes: f = {},
      components: d,
      defaultColorScheme: h = "light",
      ...m
    } = t,
    { vars: g, css: y, varsWithDefaults: b } = Qd(m, r);
  let v = b;
  const O = {},
    { [h]: T, ...L } = f;
  if (
    (Object.entries(L || {}).forEach(([H, R]) => {
      const { vars: k, css: Q, varsWithDefaults: C } = Qd(R, r);
      (v = On(v, C)), (O[H] = { css: Q, vars: k });
    }),
    T)
  ) {
    const { css: H, vars: R, varsWithDefaults: k } = Qd(T, r);
    (v = On(v, k)), (O[h] = { css: H, vars: R });
  }
  function D(H, R) {
    let k = u;
    if (
      (u === "class" && (k = ".%s"),
      u === "data" && (k = "[data-%s]"),
      u?.startsWith("data-") && !u.includes("%s") && (k = `[${u}="%s"]`),
      H)
    ) {
      if (k === "media")
        return t.defaultColorScheme === H
          ? ":root"
          : {
              [`@media (prefers-color-scheme: ${f[H]?.palette?.mode || H})`]: {
                ":root": R,
              },
            };
      if (k)
        return t.defaultColorScheme === H
          ? `:root, ${k.replace("%s", String(H))}`
          : k.replace("%s", String(H));
    }
    return ":root";
  }
  return {
    vars: v,
    generateThemeVars: () => {
      let H = { ...g };
      return (
        Object.entries(O).forEach(([, { vars: R }]) => {
          H = On(H, R);
        }),
        H
      );
    },
    generateStyleSheets: () => {
      const H = [],
        R = t.defaultColorScheme || "light";
      function k(U, z) {
        Object.keys(z).length &&
          H.push(typeof U == "string" ? { [U]: { ...z } } : U);
      }
      k(i(void 0, { ...y }), y);
      const { [R]: Q, ...C } = O;
      if (Q) {
        const { css: U } = Q,
          z = f[R]?.palette?.mode,
          q = !a && z ? { colorScheme: z, ...U } : { ...U };
        k(i(R, { ...q }), q);
      }
      return (
        Object.entries(C).forEach(([U, { css: z }]) => {
          const q = f[U]?.palette?.mode,
            w = !a && q ? { colorScheme: q, ...z } : { ...z };
          k(i(U, { ...w }), w);
        }),
        s &&
          H.push({
            ":root": {
              "--__l-threshold": "0.7",
              "--__l":
                "clamp(0, (l / var(--__l-threshold) - 1) * -infinity, 1)",
              "--__a":
                "clamp(0.87, (l / var(--__l-threshold) - 1) * -infinity, 1)",
            },
          }),
        H
      );
    },
  };
}
function l4(t) {
  return function (i) {
    return t === "media"
      ? `@media (prefers-color-scheme: ${i})`
      : t
      ? t.startsWith("data-") && !t.includes("%s")
        ? `[${t}="${i}"] &`
        : t === "class"
        ? `.${i} &`
        : t === "data"
        ? `[data-${i}] &`
        : `${t.replace("%s", i)} &`
      : "&";
  };
}
const To = { black: "#000", white: "#fff" },
  a4 = {
    50: "#fafafa",
    100: "#f5f5f5",
    200: "#eeeeee",
    300: "#e0e0e0",
    400: "#bdbdbd",
    500: "#9e9e9e",
    600: "#757575",
    700: "#616161",
    800: "#424242",
    900: "#212121",
    A100: "#f5f5f5",
    A200: "#eeeeee",
    A400: "#bdbdbd",
    A700: "#616161",
  },
  Al = {
    50: "#f3e5f5",
    200: "#ce93d8",
    300: "#ba68c8",
    400: "#ab47bc",
    500: "#9c27b0",
    700: "#7b1fa2",
  },
  Ol = {
    300: "#e57373",
    400: "#ef5350",
    500: "#f44336",
    700: "#d32f2f",
    800: "#c62828",
  },
  no = {
    300: "#ffb74d",
    400: "#ffa726",
    500: "#ff9800",
    700: "#f57c00",
    900: "#e65100",
  },
  Cl = {
    50: "#e3f2fd",
    200: "#90caf9",
    400: "#42a5f5",
    700: "#1976d2",
    800: "#1565c0",
  },
  kl = {
    300: "#4fc3f7",
    400: "#29b6f6",
    500: "#03a9f4",
    700: "#0288d1",
    900: "#01579b",
  },
  _l = {
    300: "#81c784",
    400: "#66bb6a",
    500: "#4caf50",
    700: "#388e3c",
    800: "#2e7d32",
    900: "#1b5e20",
  };
function Kb() {
  return {
    text: {
      primary: "rgba(0, 0, 0, 0.87)",
      secondary: "rgba(0, 0, 0, 0.6)",
      disabled: "rgba(0, 0, 0, 0.38)",
    },
    divider: "rgba(0, 0, 0, 0.12)",
    background: { paper: To.white, default: To.white },
    action: {
      active: "rgba(0, 0, 0, 0.54)",
      hover: "rgba(0, 0, 0, 0.04)",
      hoverOpacity: 0.04,
      selected: "rgba(0, 0, 0, 0.08)",
      selectedOpacity: 0.08,
      disabled: "rgba(0, 0, 0, 0.26)",
      disabledBackground: "rgba(0, 0, 0, 0.12)",
      disabledOpacity: 0.38,
      focus: "rgba(0, 0, 0, 0.12)",
      focusOpacity: 0.12,
      activatedOpacity: 0.12,
    },
  };
}
const Fb = Kb();
function Wb() {
  return {
    text: {
      primary: To.white,
      secondary: "rgba(255, 255, 255, 0.7)",
      disabled: "rgba(255, 255, 255, 0.5)",
      icon: "rgba(255, 255, 255, 0.5)",
    },
    divider: "rgba(255, 255, 255, 0.12)",
    background: { paper: "#121212", default: "#121212" },
    action: {
      active: To.white,
      hover: "rgba(255, 255, 255, 0.08)",
      hoverOpacity: 0.08,
      selected: "rgba(255, 255, 255, 0.16)",
      selectedOpacity: 0.16,
      disabled: "rgba(255, 255, 255, 0.3)",
      disabledBackground: "rgba(255, 255, 255, 0.12)",
      disabledOpacity: 0.38,
      focus: "rgba(255, 255, 255, 0.12)",
      focusOpacity: 0.12,
      activatedOpacity: 0.24,
    },
  };
}
const xp = Wb();
function K1(t, r, i, a) {
  const u = a.light || a,
    s = a.dark || a * 1.5;
  t[r] ||
    (t.hasOwnProperty(i)
      ? (t[r] = t[i])
      : r === "light"
      ? (t.light = ic(t.main, u))
      : r === "dark" && (t.dark = rc(t.main, s)));
}
function F1(t, r, i, a, u) {
  const s = u.light || u,
    f = u.dark || u * 1.5;
  r[i] ||
    (r.hasOwnProperty(a)
      ? (r[i] = r[a])
      : i === "light"
      ? (r.light = `color-mix(in ${t}, ${r.main}, #fff ${(s * 100).toFixed(
          0
        )}%)`)
      : i === "dark" &&
        (r.dark = `color-mix(in ${t}, ${r.main}, #000 ${(f * 100).toFixed(
          0
        )}%)`));
}
function o4(t = "light") {
  return t === "dark"
    ? { main: Cl[200], light: Cl[50], dark: Cl[400] }
    : { main: Cl[700], light: Cl[400], dark: Cl[800] };
}
function u4(t = "light") {
  return t === "dark"
    ? { main: Al[200], light: Al[50], dark: Al[400] }
    : { main: Al[500], light: Al[300], dark: Al[700] };
}
function s4(t = "light") {
  return t === "dark"
    ? { main: Ol[500], light: Ol[300], dark: Ol[700] }
    : { main: Ol[700], light: Ol[400], dark: Ol[800] };
}
function c4(t = "light") {
  return t === "dark"
    ? { main: kl[400], light: kl[300], dark: kl[700] }
    : { main: kl[700], light: kl[500], dark: kl[900] };
}
function f4(t = "light") {
  return t === "dark"
    ? { main: _l[400], light: _l[300], dark: _l[700] }
    : { main: _l[800], light: _l[500], dark: _l[900] };
}
function d4(t = "light") {
  return t === "dark"
    ? { main: no[400], light: no[300], dark: no[700] }
    : { main: "#ed6c02", light: no[500], dark: no[900] };
}
function p4(t) {
  return `oklch(from ${t} var(--__l) 0 h / var(--__a))`;
}
function ch(t) {
  const {
      mode: r = "light",
      contrastThreshold: i = 3,
      tonalOffset: a = 0.2,
      colorSpace: u,
      ...s
    } = t,
    f = t.primary || o4(r),
    d = t.secondary || u4(r),
    h = t.error || s4(r),
    m = t.info || c4(r),
    g = t.success || f4(r),
    y = t.warning || d4(r);
  function b(L) {
    return u
      ? p4(L)
      : Gk(L, xp.text.primary) >= i
      ? xp.text.primary
      : Fb.text.primary;
  }
  const v = ({
    color: L,
    name: D,
    mainShade: G = 500,
    lightShade: $ = 300,
    darkShade: H = 700,
  }) => {
    if (
      ((L = { ...L }),
      !L.main && L[G] && (L.main = L[G]),
      !L.hasOwnProperty("main"))
    )
      throw new Error(Ni(11, D ? ` (${D})` : "", G));
    if (typeof L.main != "string")
      throw new Error(Ni(12, D ? ` (${D})` : "", JSON.stringify(L.main)));
    return (
      u
        ? (F1(u, L, "light", $, a), F1(u, L, "dark", H, a))
        : (K1(L, "light", $, a), K1(L, "dark", H, a)),
      L.contrastText || (L.contrastText = b(L.main)),
      L
    );
  };
  let O;
  return (
    r === "light" ? (O = Kb()) : r === "dark" && (O = Wb()),
    On(
      {
        common: { ...To },
        mode: r,
        primary: v({ color: f, name: "primary" }),
        secondary: v({
          color: d,
          name: "secondary",
          mainShade: "A400",
          lightShade: "A200",
          darkShade: "A700",
        }),
        error: v({ color: h, name: "error" }),
        warning: v({ color: y, name: "warning" }),
        info: v({ color: m, name: "info" }),
        success: v({ color: g, name: "success" }),
        grey: a4,
        contrastThreshold: i,
        getContrastText: b,
        augmentColor: v,
        tonalOffset: a,
        ...O,
      },
      s
    )
  );
}
function h4(t) {
  const r = {};
  return (
    Object.entries(t).forEach((a) => {
      const [u, s] = a;
      typeof s == "object" &&
        (r[u] = `${s.fontStyle ? `${s.fontStyle} ` : ""}${
          s.fontVariant ? `${s.fontVariant} ` : ""
        }${s.fontWeight ? `${s.fontWeight} ` : ""}${
          s.fontStretch ? `${s.fontStretch} ` : ""
        }${s.fontSize || ""}${s.lineHeight ? `/${s.lineHeight} ` : ""}${
          s.fontFamily || ""
        }`);
    }),
    r
  );
}
function m4(t, r) {
  return {
    toolbar: {
      minHeight: 56,
      [t.up("xs")]: { "@media (orientation: landscape)": { minHeight: 48 } },
      [t.up("sm")]: { minHeight: 64 },
    },
    ...r,
  };
}
function g4(t) {
  return Math.round(t * 1e5) / 1e5;
}
const W1 = { textTransform: "uppercase" },
  J1 = '"Roboto", "Helvetica", "Arial", sans-serif';
function y4(t, r) {
  const {
      fontFamily: i = J1,
      fontSize: a = 14,
      fontWeightLight: u = 300,
      fontWeightRegular: s = 400,
      fontWeightMedium: f = 500,
      fontWeightBold: d = 700,
      htmlFontSize: h = 16,
      allVariants: m,
      pxToRem: g,
      ...y
    } = typeof r == "function" ? r(t) : r,
    b = a / 14,
    v = g || ((L) => `${(L / h) * b}rem`),
    O = (L, D, G, $, H) => ({
      fontFamily: i,
      fontWeight: L,
      fontSize: v(D),
      lineHeight: G,
      ...(i === J1 ? { letterSpacing: `${g4($ / D)}em` } : {}),
      ...H,
      ...m,
    }),
    T = {
      h1: O(u, 96, 1.167, -1.5),
      h2: O(u, 60, 1.2, -0.5),
      h3: O(s, 48, 1.167, 0),
      h4: O(s, 34, 1.235, 0.25),
      h5: O(s, 24, 1.334, 0),
      h6: O(f, 20, 1.6, 0.15),
      subtitle1: O(s, 16, 1.75, 0.15),
      subtitle2: O(f, 14, 1.57, 0.1),
      body1: O(s, 16, 1.5, 0.15),
      body2: O(s, 14, 1.43, 0.15),
      button: O(f, 14, 1.75, 0.4, W1),
      caption: O(s, 12, 1.66, 0.4),
      overline: O(s, 12, 2.66, 1, W1),
      inherit: {
        fontFamily: "inherit",
        fontWeight: "inherit",
        fontSize: "inherit",
        lineHeight: "inherit",
        letterSpacing: "inherit",
      },
    };
  return On(
    {
      htmlFontSize: h,
      pxToRem: v,
      fontFamily: i,
      fontSize: a,
      fontWeightLight: u,
      fontWeightRegular: s,
      fontWeightMedium: f,
      fontWeightBold: d,
      ...T,
    },
    y,
    { clone: !1 }
  );
}
const v4 = 0.2,
  b4 = 0.14,
  x4 = 0.12;
function xe(...t) {
  return [
    `${t[0]}px ${t[1]}px ${t[2]}px ${t[3]}px rgba(0,0,0,${v4})`,
    `${t[4]}px ${t[5]}px ${t[6]}px ${t[7]}px rgba(0,0,0,${b4})`,
    `${t[8]}px ${t[9]}px ${t[10]}px ${t[11]}px rgba(0,0,0,${x4})`,
  ].join(",");
}
const S4 = [
    "none",
    xe(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0),
    xe(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0),
    xe(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0),
    xe(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0),
    xe(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0),
    xe(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0),
    xe(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1),
    xe(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2),
    xe(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2),
    xe(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3),
    xe(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3),
    xe(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4),
    xe(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4),
    xe(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4),
    xe(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5),
    xe(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5),
    xe(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5),
    xe(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6),
    xe(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6),
    xe(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7),
    xe(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7),
    xe(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7),
    xe(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8),
    xe(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8),
  ],
  w4 = {
    easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
    easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
    easeIn: "cubic-bezier(0.4, 0, 1, 1)",
    sharp: "cubic-bezier(0.4, 0, 0.6, 1)",
  },
  E4 = {
    shortest: 150,
    shorter: 200,
    short: 250,
    standard: 300,
    complex: 375,
    enteringScreen: 225,
    leavingScreen: 195,
  };
function tv(t) {
  return `${Math.round(t)}ms`;
}
function T4(t) {
  if (!t) return 0;
  const r = t / 36;
  return Math.min(Math.round((4 + 15 * r ** 0.25 + r / 5) * 10), 3e3);
}
function A4(t) {
  const r = { ...w4, ...t.easing },
    i = { ...E4, ...t.duration };
  return {
    getAutoHeightDuration: T4,
    create: (u = ["all"], s = {}) => {
      const {
        duration: f = i.standard,
        easing: d = r.easeInOut,
        delay: h = 0,
        ...m
      } = s;
      return (Array.isArray(u) ? u : [u])
        .map(
          (g) =>
            `${g} ${typeof f == "string" ? f : tv(f)} ${d} ${
              typeof h == "string" ? h : tv(h)
            }`
        )
        .join(",");
    },
    ...t,
    easing: r,
    duration: i,
  };
}
const O4 = {
  mobileStepper: 1e3,
  fab: 1050,
  speedDial: 1050,
  appBar: 1100,
  drawer: 1200,
  modal: 1300,
  snackbar: 1400,
  tooltip: 1500,
};
function C4(t) {
  return (
    Cr(t) ||
    typeof t > "u" ||
    typeof t == "string" ||
    typeof t == "boolean" ||
    typeof t == "number" ||
    Array.isArray(t)
  );
}
function Jb(t = {}) {
  const r = { ...t };
  function i(a) {
    const u = Object.entries(a);
    for (let s = 0; s < u.length; s++) {
      const [f, d] = u[s];
      !C4(d) || f.startsWith("unstable_")
        ? delete a[f]
        : Cr(d) && ((a[f] = { ...d }), i(a[f]));
    }
  }
  return (
    i(r),
    `import { unstable_createBreakpoints as createBreakpoints, createTransitions } from '@mui/material/styles';

const theme = ${JSON.stringify(r, null, 2)};

theme.breakpoints = createBreakpoints(theme.breakpoints || {});
theme.transitions = createTransitions(theme.transitions || {});

export default theme;`
  );
}
function ev(t) {
  return typeof t == "number"
    ? `${(t * 100).toFixed(0)}%`
    : `calc((${t}) * 100%)`;
}
const k4 = (t) => {
  if (!Number.isNaN(+t)) return +t;
  const r = t.match(/\d*\.?\d+/g);
  if (!r) return 0;
  let i = 0;
  for (let a = 0; a < r.length; a += 1) i += +r[a];
  return i;
};
function _4(t) {
  Object.assign(t, {
    alpha(r, i) {
      const a = this || t;
      return a.colorSpace
        ? `oklch(from ${r} l c h / ${typeof i == "string" ? `calc(${i})` : i})`
        : a.vars
        ? `rgba(${r.replace(
            /var\(--([^,\s)]+)(?:,[^)]+)?\)+/g,
            "var(--$1Channel)"
          )} / ${typeof i == "string" ? `calc(${i})` : i})`
        : Ib(r, k4(i));
    },
    lighten(r, i) {
      const a = this || t;
      return a.colorSpace
        ? `color-mix(in ${a.colorSpace}, ${r}, #fff ${ev(i)})`
        : ic(r, i);
    },
    darken(r, i) {
      const a = this || t;
      return a.colorSpace
        ? `color-mix(in ${a.colorSpace}, ${r}, #000 ${ev(i)})`
        : rc(r, i);
    },
  });
}
function Sp(t = {}, ...r) {
  const {
    breakpoints: i,
    mixins: a = {},
    spacing: u,
    palette: s = {},
    transitions: f = {},
    typography: d = {},
    shape: h,
    colorSpace: m,
    ...g
  } = t;
  if (t.vars && t.generateThemeVars === void 0) throw new Error(Ni(20));
  const y = ch({ ...s, colorSpace: m }),
    b = oh(t);
  let v = On(b, {
    mixins: m4(b.breakpoints, a),
    palette: y,
    shadows: S4.slice(),
    typography: y4(y, d),
    transitions: A4(f),
    zIndex: { ...O4 },
  });
  return (
    (v = On(v, g)),
    (v = r.reduce((O, T) => On(O, T), v)),
    (v.unstable_sxConfig = { ...tc, ...g?.unstable_sxConfig }),
    (v.unstable_sx = function (T) {
      return Vl({ sx: T, theme: this });
    }),
    (v.toRuntimeSource = Jb),
    _4(v),
    v
  );
}
function R4(t) {
  let r;
  return (
    t < 1 ? (r = 5.11916 * t ** 2) : (r = 4.5 * Math.log(t + 1) + 2),
    Math.round(r * 10) / 1e3
  );
}
const M4 = [...Array(25)].map((t, r) => {
  if (r === 0) return "none";
  const i = R4(r);
  return `linear-gradient(rgba(255 255 255 / ${i}), rgba(255 255 255 / ${i}))`;
});
function tx(t) {
  return {
    inputPlaceholder: t === "dark" ? 0.5 : 0.42,
    inputUnderline: t === "dark" ? 0.7 : 0.42,
    switchTrackDisabled: t === "dark" ? 0.2 : 0.12,
    switchTrack: t === "dark" ? 0.3 : 0.38,
  };
}
function ex(t) {
  return t === "dark" ? M4 : [];
}
function z4(t) {
  const {
      palette: r = { mode: "light" },
      opacity: i,
      overlays: a,
      colorSpace: u,
      ...s
    } = t,
    f = ch({ ...r, colorSpace: u });
  return {
    palette: f,
    opacity: { ...tx(f.mode), ...i },
    overlays: a || ex(f.mode),
    ...s,
  };
}
function D4(t) {
  return (
    !!t[0].match(
      /(cssVarPrefix|colorSchemeSelector|modularCssLayers|rootSelector|typography|mixins|breakpoints|direction|transitions)/
    ) ||
    !!t[0].match(/sxConfig$/) ||
    (t[0] === "palette" &&
      !!t[1]?.match(/(mode|contrastThreshold|tonalOffset)/))
  );
}
const N4 = (t) => [
    ...[...Array(25)].map((r, i) => `--${t ? `${t}-` : ""}overlays-${i}`),
    `--${t ? `${t}-` : ""}palette-AppBar-darkBg`,
    `--${t ? `${t}-` : ""}palette-AppBar-darkColor`,
  ],
  B4 = (t) => (r, i) => {
    const a = t.rootSelector || ":root",
      u = t.colorSchemeSelector;
    let s = u;
    if (
      (u === "class" && (s = ".%s"),
      u === "data" && (s = "[data-%s]"),
      u?.startsWith("data-") && !u.includes("%s") && (s = `[${u}="%s"]`),
      t.defaultColorScheme === r)
    ) {
      if (r === "dark") {
        const f = {};
        return (
          N4(t.cssVarPrefix).forEach((d) => {
            (f[d] = i[d]), delete i[d];
          }),
          s === "media"
            ? { [a]: i, "@media (prefers-color-scheme: dark)": { [a]: f } }
            : s
            ? { [s.replace("%s", r)]: f, [`${a}, ${s.replace("%s", r)}`]: i }
            : { [a]: { ...i, ...f } }
        );
      }
      if (s && s !== "media") return `${a}, ${s.replace("%s", String(r))}`;
    } else if (r) {
      if (s === "media")
        return { [`@media (prefers-color-scheme: ${String(r)})`]: { [a]: i } };
      if (s) return s.replace("%s", String(r));
    }
    return a;
  };
function L4(t, r) {
  r.forEach((i) => {
    t[i] || (t[i] = {});
  });
}
function et(t, r, i) {
  !t[r] && i && (t[r] = i);
}
function ao(t) {
  return typeof t != "string" || !t.startsWith("hsl") ? t : Qb(t);
}
function Or(t, r) {
  `${r}Channel` in t || (t[`${r}Channel`] = lo(ao(t[r])));
}
function U4(t) {
  return typeof t == "number"
    ? `${t}px`
    : typeof t == "string" || typeof t == "function" || Array.isArray(t)
    ? t
    : "8px";
}
const er = (t) => {
    try {
      return t();
    } catch {}
  },
  j4 = (t = "mui") => e4(t);
function Id(t, r, i, a, u) {
  if (!i) return;
  i = i === !0 ? {} : i;
  const s = u === "dark" ? "dark" : "light";
  if (!a) {
    r[u] = z4({ ...i, palette: { mode: s, ...i?.palette }, colorSpace: t });
    return;
  }
  const { palette: f, ...d } = Sp({
    ...a,
    palette: { mode: s, ...i?.palette },
    colorSpace: t,
  });
  return (
    (r[u] = {
      ...i,
      palette: f,
      opacity: { ...tx(s), ...i?.opacity },
      overlays: i?.overlays || ex(s),
    }),
    d
  );
}
function H4(t = {}, ...r) {
  const {
      colorSchemes: i = { light: !0 },
      defaultColorScheme: a,
      disableCssColorScheme: u = !1,
      cssVarPrefix: s = "mui",
      nativeColor: f = !1,
      shouldSkipGeneratingVar: d = D4,
      colorSchemeSelector: h = i.light && i.dark ? "media" : void 0,
      rootSelector: m = ":root",
      ...g
    } = t,
    y = Object.keys(i)[0],
    b = a || (i.light && y !== "light" ? "light" : y),
    v = j4(s),
    { [b]: O, light: T, dark: L, ...D } = i,
    G = { ...D };
  let $ = O;
  if (
    (((b === "dark" && !("dark" in i)) || (b === "light" && !("light" in i))) &&
      ($ = !0),
    !$)
  )
    throw new Error(Ni(21, b));
  let H;
  f && (H = "oklch");
  const R = Id(H, G, $, g, b);
  T && !G.light && Id(H, G, T, void 0, "light"),
    L && !G.dark && Id(H, G, L, void 0, "dark");
  let k = {
    defaultColorScheme: b,
    ...R,
    cssVarPrefix: s,
    colorSchemeSelector: h,
    rootSelector: m,
    getCssVar: v,
    colorSchemes: G,
    font: { ...h4(R.typography), ...R.font },
    spacing: U4(g.spacing),
  };
  Object.keys(k.colorSchemes).forEach((q) => {
    const w = k.colorSchemes[q].palette,
      B = (V) => {
        const _ = V.split("-"),
          P = _[1],
          nt = _[2];
        return v(V, w[P][nt]);
      };
    w.mode === "light" &&
      (et(w.common, "background", "#fff"),
      et(w.common, "onBackground", "#000")),
      w.mode === "dark" &&
        (et(w.common, "background", "#000"),
        et(w.common, "onBackground", "#fff"));
    function N(V, _, P) {
      if (H) {
        let nt;
        return (
          V === Ai && (nt = `transparent ${((1 - P) * 100).toFixed(0)}%`),
          V === ee && (nt = `#000 ${(P * 100).toFixed(0)}%`),
          V === ne && (nt = `#fff ${(P * 100).toFixed(0)}%`),
          `color-mix(in ${H}, ${_}, ${nt})`
        );
      }
      return V(_, P);
    }
    if (
      (L4(w, [
        "Alert",
        "AppBar",
        "Avatar",
        "Button",
        "Chip",
        "FilledInput",
        "LinearProgress",
        "Skeleton",
        "Slider",
        "SnackbarContent",
        "SpeedDialAction",
        "StepConnector",
        "StepContent",
        "Switch",
        "TableCell",
        "Tooltip",
      ]),
      w.mode === "light")
    ) {
      et(w.Alert, "errorColor", N(ee, w.error.light, 0.6)),
        et(w.Alert, "infoColor", N(ee, w.info.light, 0.6)),
        et(w.Alert, "successColor", N(ee, w.success.light, 0.6)),
        et(w.Alert, "warningColor", N(ee, w.warning.light, 0.6)),
        et(w.Alert, "errorFilledBg", B("palette-error-main")),
        et(w.Alert, "infoFilledBg", B("palette-info-main")),
        et(w.Alert, "successFilledBg", B("palette-success-main")),
        et(w.Alert, "warningFilledBg", B("palette-warning-main")),
        et(
          w.Alert,
          "errorFilledColor",
          er(() => w.getContrastText(w.error.main))
        ),
        et(
          w.Alert,
          "infoFilledColor",
          er(() => w.getContrastText(w.info.main))
        ),
        et(
          w.Alert,
          "successFilledColor",
          er(() => w.getContrastText(w.success.main))
        ),
        et(
          w.Alert,
          "warningFilledColor",
          er(() => w.getContrastText(w.warning.main))
        ),
        et(w.Alert, "errorStandardBg", N(ne, w.error.light, 0.9)),
        et(w.Alert, "infoStandardBg", N(ne, w.info.light, 0.9)),
        et(w.Alert, "successStandardBg", N(ne, w.success.light, 0.9)),
        et(w.Alert, "warningStandardBg", N(ne, w.warning.light, 0.9)),
        et(w.Alert, "errorIconColor", B("palette-error-main")),
        et(w.Alert, "infoIconColor", B("palette-info-main")),
        et(w.Alert, "successIconColor", B("palette-success-main")),
        et(w.Alert, "warningIconColor", B("palette-warning-main")),
        et(w.AppBar, "defaultBg", B("palette-grey-100")),
        et(w.Avatar, "defaultBg", B("palette-grey-400")),
        et(w.Button, "inheritContainedBg", B("palette-grey-300")),
        et(w.Button, "inheritContainedHoverBg", B("palette-grey-A100")),
        et(w.Chip, "defaultBorder", B("palette-grey-400")),
        et(w.Chip, "defaultAvatarColor", B("palette-grey-700")),
        et(w.Chip, "defaultIconColor", B("palette-grey-700")),
        et(w.FilledInput, "bg", "rgba(0, 0, 0, 0.06)"),
        et(w.FilledInput, "hoverBg", "rgba(0, 0, 0, 0.09)"),
        et(w.FilledInput, "disabledBg", "rgba(0, 0, 0, 0.12)"),
        et(w.LinearProgress, "primaryBg", N(ne, w.primary.main, 0.62)),
        et(w.LinearProgress, "secondaryBg", N(ne, w.secondary.main, 0.62)),
        et(w.LinearProgress, "errorBg", N(ne, w.error.main, 0.62)),
        et(w.LinearProgress, "infoBg", N(ne, w.info.main, 0.62)),
        et(w.LinearProgress, "successBg", N(ne, w.success.main, 0.62)),
        et(w.LinearProgress, "warningBg", N(ne, w.warning.main, 0.62)),
        et(
          w.Skeleton,
          "bg",
          H
            ? N(Ai, w.text.primary, 0.11)
            : `rgba(${B("palette-text-primaryChannel")} / 0.11)`
        ),
        et(w.Slider, "primaryTrack", N(ne, w.primary.main, 0.62)),
        et(w.Slider, "secondaryTrack", N(ne, w.secondary.main, 0.62)),
        et(w.Slider, "errorTrack", N(ne, w.error.main, 0.62)),
        et(w.Slider, "infoTrack", N(ne, w.info.main, 0.62)),
        et(w.Slider, "successTrack", N(ne, w.success.main, 0.62)),
        et(w.Slider, "warningTrack", N(ne, w.warning.main, 0.62));
      const V = H
        ? N(ee, w.background.default, 0.6825)
        : ns(w.background.default, 0.8);
      et(w.SnackbarContent, "bg", V),
        et(
          w.SnackbarContent,
          "color",
          er(() => (H ? xp.text.primary : w.getContrastText(V)))
        ),
        et(w.SpeedDialAction, "fabHoverBg", ns(w.background.paper, 0.15)),
        et(w.StepConnector, "border", B("palette-grey-400")),
        et(w.StepContent, "border", B("palette-grey-400")),
        et(w.Switch, "defaultColor", B("palette-common-white")),
        et(w.Switch, "defaultDisabledColor", B("palette-grey-100")),
        et(w.Switch, "primaryDisabledColor", N(ne, w.primary.main, 0.62)),
        et(w.Switch, "secondaryDisabledColor", N(ne, w.secondary.main, 0.62)),
        et(w.Switch, "errorDisabledColor", N(ne, w.error.main, 0.62)),
        et(w.Switch, "infoDisabledColor", N(ne, w.info.main, 0.62)),
        et(w.Switch, "successDisabledColor", N(ne, w.success.main, 0.62)),
        et(w.Switch, "warningDisabledColor", N(ne, w.warning.main, 0.62)),
        et(w.TableCell, "border", N(ne, N(Ai, w.divider, 1), 0.88)),
        et(w.Tooltip, "bg", N(Ai, w.grey[700], 0.92));
    }
    if (w.mode === "dark") {
      et(w.Alert, "errorColor", N(ne, w.error.light, 0.6)),
        et(w.Alert, "infoColor", N(ne, w.info.light, 0.6)),
        et(w.Alert, "successColor", N(ne, w.success.light, 0.6)),
        et(w.Alert, "warningColor", N(ne, w.warning.light, 0.6)),
        et(w.Alert, "errorFilledBg", B("palette-error-dark")),
        et(w.Alert, "infoFilledBg", B("palette-info-dark")),
        et(w.Alert, "successFilledBg", B("palette-success-dark")),
        et(w.Alert, "warningFilledBg", B("palette-warning-dark")),
        et(
          w.Alert,
          "errorFilledColor",
          er(() => w.getContrastText(w.error.dark))
        ),
        et(
          w.Alert,
          "infoFilledColor",
          er(() => w.getContrastText(w.info.dark))
        ),
        et(
          w.Alert,
          "successFilledColor",
          er(() => w.getContrastText(w.success.dark))
        ),
        et(
          w.Alert,
          "warningFilledColor",
          er(() => w.getContrastText(w.warning.dark))
        ),
        et(w.Alert, "errorStandardBg", N(ee, w.error.light, 0.9)),
        et(w.Alert, "infoStandardBg", N(ee, w.info.light, 0.9)),
        et(w.Alert, "successStandardBg", N(ee, w.success.light, 0.9)),
        et(w.Alert, "warningStandardBg", N(ee, w.warning.light, 0.9)),
        et(w.Alert, "errorIconColor", B("palette-error-main")),
        et(w.Alert, "infoIconColor", B("palette-info-main")),
        et(w.Alert, "successIconColor", B("palette-success-main")),
        et(w.Alert, "warningIconColor", B("palette-warning-main")),
        et(w.AppBar, "defaultBg", B("palette-grey-900")),
        et(w.AppBar, "darkBg", B("palette-background-paper")),
        et(w.AppBar, "darkColor", B("palette-text-primary")),
        et(w.Avatar, "defaultBg", B("palette-grey-600")),
        et(w.Button, "inheritContainedBg", B("palette-grey-800")),
        et(w.Button, "inheritContainedHoverBg", B("palette-grey-700")),
        et(w.Chip, "defaultBorder", B("palette-grey-700")),
        et(w.Chip, "defaultAvatarColor", B("palette-grey-300")),
        et(w.Chip, "defaultIconColor", B("palette-grey-300")),
        et(w.FilledInput, "bg", "rgba(255, 255, 255, 0.09)"),
        et(w.FilledInput, "hoverBg", "rgba(255, 255, 255, 0.13)"),
        et(w.FilledInput, "disabledBg", "rgba(255, 255, 255, 0.12)"),
        et(w.LinearProgress, "primaryBg", N(ee, w.primary.main, 0.5)),
        et(w.LinearProgress, "secondaryBg", N(ee, w.secondary.main, 0.5)),
        et(w.LinearProgress, "errorBg", N(ee, w.error.main, 0.5)),
        et(w.LinearProgress, "infoBg", N(ee, w.info.main, 0.5)),
        et(w.LinearProgress, "successBg", N(ee, w.success.main, 0.5)),
        et(w.LinearProgress, "warningBg", N(ee, w.warning.main, 0.5)),
        et(
          w.Skeleton,
          "bg",
          H
            ? N(Ai, w.text.primary, 0.13)
            : `rgba(${B("palette-text-primaryChannel")} / 0.13)`
        ),
        et(w.Slider, "primaryTrack", N(ee, w.primary.main, 0.5)),
        et(w.Slider, "secondaryTrack", N(ee, w.secondary.main, 0.5)),
        et(w.Slider, "errorTrack", N(ee, w.error.main, 0.5)),
        et(w.Slider, "infoTrack", N(ee, w.info.main, 0.5)),
        et(w.Slider, "successTrack", N(ee, w.success.main, 0.5)),
        et(w.Slider, "warningTrack", N(ee, w.warning.main, 0.5));
      const V = H
        ? N(ne, w.background.default, 0.985)
        : ns(w.background.default, 0.98);
      et(w.SnackbarContent, "bg", V),
        et(
          w.SnackbarContent,
          "color",
          er(() => (H ? Fb.text.primary : w.getContrastText(V)))
        ),
        et(w.SpeedDialAction, "fabHoverBg", ns(w.background.paper, 0.15)),
        et(w.StepConnector, "border", B("palette-grey-600")),
        et(w.StepContent, "border", B("palette-grey-600")),
        et(w.Switch, "defaultColor", B("palette-grey-300")),
        et(w.Switch, "defaultDisabledColor", B("palette-grey-600")),
        et(w.Switch, "primaryDisabledColor", N(ee, w.primary.main, 0.55)),
        et(w.Switch, "secondaryDisabledColor", N(ee, w.secondary.main, 0.55)),
        et(w.Switch, "errorDisabledColor", N(ee, w.error.main, 0.55)),
        et(w.Switch, "infoDisabledColor", N(ee, w.info.main, 0.55)),
        et(w.Switch, "successDisabledColor", N(ee, w.success.main, 0.55)),
        et(w.Switch, "warningDisabledColor", N(ee, w.warning.main, 0.55)),
        et(w.TableCell, "border", N(ee, N(Ai, w.divider, 1), 0.68)),
        et(w.Tooltip, "bg", N(Ai, w.grey[700], 0.92));
    }
    Or(w.background, "default"),
      Or(w.background, "paper"),
      Or(w.common, "background"),
      Or(w.common, "onBackground"),
      Or(w, "divider"),
      Object.keys(w).forEach((V) => {
        const _ = w[V];
        V !== "tonalOffset" &&
          _ &&
          typeof _ == "object" &&
          (_.main && et(w[V], "mainChannel", lo(ao(_.main))),
          _.light && et(w[V], "lightChannel", lo(ao(_.light))),
          _.dark && et(w[V], "darkChannel", lo(ao(_.dark))),
          _.contrastText &&
            et(w[V], "contrastTextChannel", lo(ao(_.contrastText))),
          V === "text" && (Or(w[V], "primary"), Or(w[V], "secondary")),
          V === "action" &&
            (_.active && Or(w[V], "active"),
            _.selected && Or(w[V], "selected")));
      });
  }),
    (k = r.reduce((q, w) => On(q, w), k));
  const Q = {
      prefix: s,
      disableCssColorScheme: u,
      shouldSkipGeneratingVar: d,
      getSelector: B4(k),
      enableContrastVars: f,
    },
    { vars: C, generateThemeVars: U, generateStyleSheets: z } = i4(k, Q);
  return (
    (k.vars = C),
    Object.entries(k.colorSchemes[k.defaultColorScheme]).forEach(([q, w]) => {
      k[q] = w;
    }),
    (k.generateThemeVars = U),
    (k.generateStyleSheets = z),
    (k.generateSpacing = function () {
      return Yb(g.spacing, lh(this));
    }),
    (k.getColorSchemeSelector = l4(h)),
    (k.spacing = k.generateSpacing()),
    (k.shouldSkipGeneratingVar = d),
    (k.unstable_sxConfig = { ...tc, ...g?.unstable_sxConfig }),
    (k.unstable_sx = function (w) {
      return Vl({ sx: w, theme: this });
    }),
    (k.toRuntimeSource = Jb),
    k
  );
}
function nv(t, r, i) {
  t.colorSchemes &&
    i &&
    (t.colorSchemes[r] = {
      ...(i !== !0 && i),
      palette: ch({ ...(i === !0 ? {} : i.palette), mode: r }),
    });
}
function q4(t = {}, ...r) {
  const {
      palette: i,
      cssVariables: a = !1,
      colorSchemes: u = i ? void 0 : { light: !0 },
      defaultColorScheme: s = i?.mode,
      ...f
    } = t,
    d = s || "light",
    h = u?.[d],
    m = {
      ...u,
      ...(i
        ? { [d]: { ...(typeof h != "boolean" && h), palette: i } }
        : void 0),
    };
  if (a === !1) {
    if (!("colorSchemes" in t)) return Sp(t, ...r);
    let g = i;
    "palette" in t ||
      (m[d] &&
        (m[d] !== !0
          ? (g = m[d].palette)
          : d === "dark" && (g = { mode: "dark" })));
    const y = Sp({ ...t, palette: g }, ...r);
    return (
      (y.defaultColorScheme = d),
      (y.colorSchemes = m),
      y.palette.mode === "light" &&
        ((y.colorSchemes.light = {
          ...(m.light !== !0 && m.light),
          palette: y.palette,
        }),
        nv(y, "dark", m.dark)),
      y.palette.mode === "dark" &&
        ((y.colorSchemes.dark = {
          ...(m.dark !== !0 && m.dark),
          palette: y.palette,
        }),
        nv(y, "light", m.light)),
      y
    );
  }
  return (
    !i && !("light" in m) && d === "light" && (m.light = !0),
    H4(
      {
        ...f,
        colorSchemes: m,
        defaultColorScheme: d,
        ...(typeof a != "boolean" && a),
      },
      ...r
    )
  );
}
const nx = q4(),
  rx = "$$material";
function ix() {
  const t = zk(nx);
  return t[rx] || t;
}
function P4(t) {
  return t !== "ownerState" && t !== "theme" && t !== "sx" && t !== "as";
}
const $4 = (t) => P4(t) && t !== "classes",
  No = Uk({ themeId: rx, defaultTheme: nx, rootShouldForwardProp: $4 }),
  lc = t4;
function fh(t) {
  return Kk(t);
}
function V4(t) {
  return ec("MuiSvgIcon", t);
}
uh("MuiSvgIcon", [
  "root",
  "colorPrimary",
  "colorSecondary",
  "colorAction",
  "colorError",
  "colorDisabled",
  "fontSizeInherit",
  "fontSizeSmall",
  "fontSizeMedium",
  "fontSizeLarge",
]);
const Y4 = (t) => {
    const { color: r, fontSize: i, classes: a } = t,
      u = {
        root: ["root", r !== "inherit" && `color${ni(r)}`, `fontSize${ni(i)}`],
      };
    return nh(u, V4, a);
  },
  G4 = No("svg", {
    name: "MuiSvgIcon",
    slot: "Root",
    overridesResolver: (t, r) => {
      const { ownerState: i } = t;
      return [
        r.root,
        i.color !== "inherit" && r[`color${ni(i.color)}`],
        r[`fontSize${ni(i.fontSize)}`],
      ];
    },
  })(
    lc(({ theme: t }) => ({
      userSelect: "none",
      width: "1em",
      height: "1em",
      display: "inline-block",
      flexShrink: 0,
      transition: t.transitions?.create?.("fill", {
        duration: (t.vars ?? t).transitions?.duration?.shorter,
      }),
      variants: [
        { props: (r) => !r.hasSvgAsChild, style: { fill: "currentColor" } },
        { props: { fontSize: "inherit" }, style: { fontSize: "inherit" } },
        {
          props: { fontSize: "small" },
          style: { fontSize: t.typography?.pxToRem?.(20) || "1.25rem" },
        },
        {
          props: { fontSize: "medium" },
          style: { fontSize: t.typography?.pxToRem?.(24) || "1.5rem" },
        },
        {
          props: { fontSize: "large" },
          style: { fontSize: t.typography?.pxToRem?.(35) || "2.1875rem" },
        },
        ...Object.entries((t.vars ?? t).palette)
          .filter(([, r]) => r && r.main)
          .map(([r]) => ({
            props: { color: r },
            style: { color: (t.vars ?? t).palette?.[r]?.main },
          })),
        {
          props: { color: "action" },
          style: { color: (t.vars ?? t).palette?.action?.active },
        },
        {
          props: { color: "disabled" },
          style: { color: (t.vars ?? t).palette?.action?.disabled },
        },
        { props: { color: "inherit" }, style: { color: void 0 } },
      ],
    }))
  ),
  wp = tt.forwardRef(function (r, i) {
    const a = fh({ props: r, name: "MuiSvgIcon" }),
      {
        children: u,
        className: s,
        color: f = "inherit",
        component: d = "svg",
        fontSize: h = "medium",
        htmlColor: m,
        inheritViewBox: g = !1,
        titleAccess: y,
        viewBox: b = "0 0 24 24",
        ...v
      } = a,
      O = tt.isValidElement(u) && u.type === "svg",
      T = {
        ...a,
        color: f,
        component: d,
        fontSize: h,
        instanceFontSize: r.fontSize,
        inheritViewBox: g,
        viewBox: b,
        hasSvgAsChild: O,
      },
      L = {};
    g || (L.viewBox = b);
    const D = Y4(T);
    return ye.jsxs(G4, {
      as: d,
      className: $l(D.root, s),
      focusable: "false",
      color: m,
      "aria-hidden": y ? void 0 : !0,
      role: y ? "img" : void 0,
      ref: i,
      ...L,
      ...v,
      ...(O && u.props),
      ownerState: T,
      children: [
        O ? u.props.children : u,
        y ? ye.jsx("title", { children: y }) : null,
      ],
    });
  });
wp.muiName = "SvgIcon";
function dh(t, r) {
  function i(a, u) {
    return ye.jsx(wp, { "data-testid": void 0, ref: u, ...a, children: t });
  }
  return (i.muiName = wp.muiName), tt.memo(tt.forwardRef(i));
}
function rv(t) {
  return (t && t.ownerDocument) || document;
}
function iv(t, r) {
  typeof t == "function" ? t(r) : t && (t.current = r);
}
function X4(t) {
  const { controlled: r, default: i } = t,
    { current: a } = tt.useRef(r !== void 0),
    [u, s] = tt.useState(i),
    f = a ? r : u,
    d = tt.useCallback((h) => {
      a || s(h);
    }, []);
  return [f, d];
}
function lv(t) {
  const r = tt.useRef(t);
  return (
    Eo(() => {
      r.current = t;
    }),
    tt.useRef((...i) => (0, r.current)(...i)).current
  );
}
function Bi(...t) {
  const r = tt.useRef(void 0),
    i = tt.useCallback((a) => {
      const u = t.map((s) => {
        if (s == null) return null;
        if (typeof s == "function") {
          const f = s,
            d = f(a);
          return typeof d == "function"
            ? d
            : () => {
                f(null);
              };
        }
        return (
          (s.current = a),
          () => {
            s.current = null;
          }
        );
      });
      return () => {
        u.forEach((s) => s?.());
      };
    }, t);
  return tt.useMemo(
    () =>
      t.every((a) => a == null)
        ? null
        : (a) => {
            r.current && (r.current(), (r.current = void 0)),
              a != null && (r.current = i(a));
          },
    t
  );
}
const Q4 = dh(
    ye.jsx("path", {
      d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m1 17h-2v-2h2zm2.07-7.75-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25",
    })
  ),
  av = {};
function I4(t, r) {
  const i = tt.useRef(av);
  return i.current === av && (i.current = t(r)), i;
}
const Z4 = [];
function K4(t) {
  tt.useEffect(t, Z4);
}
class ac {
  static create() {
    return new ac();
  }
  currentId = null;
  start(r, i) {
    this.clear(),
      (this.currentId = setTimeout(() => {
        (this.currentId = null), i();
      }, r));
  }
  clear = () => {
    this.currentId !== null &&
      (clearTimeout(this.currentId), (this.currentId = null));
  };
  disposeEffect = () => this.clear;
}
function oo() {
  const t = I4(ac.create).current;
  return K4(t.disposeEffect), t;
}
function ov(t) {
  try {
    return t.matches(":focus-visible");
  } catch {}
  return !1;
}
function ph(t) {
  return parseInt(tt.version, 10) >= 19
    ? t?.props?.ref || null
    : t?.ref || null;
}
function F4(t, r) {
  if (t == null) return {};
  var i = {};
  for (var a in t)
    if ({}.hasOwnProperty.call(t, a)) {
      if (r.indexOf(a) !== -1) continue;
      i[a] = t[a];
    }
  return i;
}
function Ep(t, r) {
  return (
    (Ep = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (i, a) {
          return (i.__proto__ = a), i;
        }),
    Ep(t, r)
  );
}
function W4(t, r) {
  (t.prototype = Object.create(r.prototype)),
    (t.prototype.constructor = t),
    Ep(t, r);
}
var lx = $v();
const rs = Il(lx),
  uv = { disabled: !1 },
  ax = ar.createContext(null);
var J4 = function (r) {
    return r.scrollTop;
  },
  uo = "unmounted",
  Ci = "exited",
  ki = "entering",
  Ml = "entered",
  Tp = "exiting",
  Rr = (function (t) {
    W4(r, t);
    function r(a, u) {
      var s;
      s = t.call(this, a, u) || this;
      var f = u,
        d = f && !f.isMounting ? a.enter : a.appear,
        h;
      return (
        (s.appearStatus = null),
        a.in
          ? d
            ? ((h = Ci), (s.appearStatus = ki))
            : (h = Ml)
          : a.unmountOnExit || a.mountOnEnter
          ? (h = uo)
          : (h = Ci),
        (s.state = { status: h }),
        (s.nextCallback = null),
        s
      );
    }
    r.getDerivedStateFromProps = function (u, s) {
      var f = u.in;
      return f && s.status === uo ? { status: Ci } : null;
    };
    var i = r.prototype;
    return (
      (i.componentDidMount = function () {
        this.updateStatus(!0, this.appearStatus);
      }),
      (i.componentDidUpdate = function (u) {
        var s = null;
        if (u !== this.props) {
          var f = this.state.status;
          this.props.in
            ? f !== ki && f !== Ml && (s = ki)
            : (f === ki || f === Ml) && (s = Tp);
        }
        this.updateStatus(!1, s);
      }),
      (i.componentWillUnmount = function () {
        this.cancelNextCallback();
      }),
      (i.getTimeouts = function () {
        var u = this.props.timeout,
          s,
          f,
          d;
        return (
          (s = f = d = u),
          u != null &&
            typeof u != "number" &&
            ((s = u.exit),
            (f = u.enter),
            (d = u.appear !== void 0 ? u.appear : f)),
          { exit: s, enter: f, appear: d }
        );
      }),
      (i.updateStatus = function (u, s) {
        if ((u === void 0 && (u = !1), s !== null))
          if ((this.cancelNextCallback(), s === ki)) {
            if (this.props.unmountOnExit || this.props.mountOnEnter) {
              var f = this.props.nodeRef
                ? this.props.nodeRef.current
                : rs.findDOMNode(this);
              f && J4(f);
            }
            this.performEnter(u);
          } else this.performExit();
        else
          this.props.unmountOnExit &&
            this.state.status === Ci &&
            this.setState({ status: uo });
      }),
      (i.performEnter = function (u) {
        var s = this,
          f = this.props.enter,
          d = this.context ? this.context.isMounting : u,
          h = this.props.nodeRef ? [d] : [rs.findDOMNode(this), d],
          m = h[0],
          g = h[1],
          y = this.getTimeouts(),
          b = d ? y.appear : y.enter;
        if ((!u && !f) || uv.disabled) {
          this.safeSetState({ status: Ml }, function () {
            s.props.onEntered(m);
          });
          return;
        }
        this.props.onEnter(m, g),
          this.safeSetState({ status: ki }, function () {
            s.props.onEntering(m, g),
              s.onTransitionEnd(b, function () {
                s.safeSetState({ status: Ml }, function () {
                  s.props.onEntered(m, g);
                });
              });
          });
      }),
      (i.performExit = function () {
        var u = this,
          s = this.props.exit,
          f = this.getTimeouts(),
          d = this.props.nodeRef ? void 0 : rs.findDOMNode(this);
        if (!s || uv.disabled) {
          this.safeSetState({ status: Ci }, function () {
            u.props.onExited(d);
          });
          return;
        }
        this.props.onExit(d),
          this.safeSetState({ status: Tp }, function () {
            u.props.onExiting(d),
              u.onTransitionEnd(f.exit, function () {
                u.safeSetState({ status: Ci }, function () {
                  u.props.onExited(d);
                });
              });
          });
      }),
      (i.cancelNextCallback = function () {
        this.nextCallback !== null &&
          (this.nextCallback.cancel(), (this.nextCallback = null));
      }),
      (i.safeSetState = function (u, s) {
        (s = this.setNextCallback(s)), this.setState(u, s);
      }),
      (i.setNextCallback = function (u) {
        var s = this,
          f = !0;
        return (
          (this.nextCallback = function (d) {
            f && ((f = !1), (s.nextCallback = null), u(d));
          }),
          (this.nextCallback.cancel = function () {
            f = !1;
          }),
          this.nextCallback
        );
      }),
      (i.onTransitionEnd = function (u, s) {
        this.setNextCallback(s);
        var f = this.props.nodeRef
            ? this.props.nodeRef.current
            : rs.findDOMNode(this),
          d = u == null && !this.props.addEndListener;
        if (!f || d) {
          setTimeout(this.nextCallback, 0);
          return;
        }
        if (this.props.addEndListener) {
          var h = this.props.nodeRef
              ? [this.nextCallback]
              : [f, this.nextCallback],
            m = h[0],
            g = h[1];
          this.props.addEndListener(m, g);
        }
        u != null && setTimeout(this.nextCallback, u);
      }),
      (i.render = function () {
        var u = this.state.status;
        if (u === uo) return null;
        var s = this.props,
          f = s.children;
        s.in,
          s.mountOnEnter,
          s.unmountOnExit,
          s.appear,
          s.enter,
          s.exit,
          s.timeout,
          s.addEndListener,
          s.onEnter,
          s.onEntering,
          s.onEntered,
          s.onExit,
          s.onExiting,
          s.onExited,
          s.nodeRef;
        var d = F4(s, [
          "children",
          "in",
          "mountOnEnter",
          "unmountOnExit",
          "appear",
          "enter",
          "exit",
          "timeout",
          "addEndListener",
          "onEnter",
          "onEntering",
          "onEntered",
          "onExit",
          "onExiting",
          "onExited",
          "nodeRef",
        ]);
        return ar.createElement(
          ax.Provider,
          { value: null },
          typeof f == "function"
            ? f(u, d)
            : ar.cloneElement(ar.Children.only(f), d)
        );
      }),
      r
    );
  })(ar.Component);
Rr.contextType = ax;
Rr.propTypes = {};
function Rl() {}
Rr.defaultProps = {
  in: !1,
  mountOnEnter: !1,
  unmountOnExit: !1,
  appear: !1,
  enter: !0,
  exit: !0,
  onEnter: Rl,
  onEntering: Rl,
  onEntered: Rl,
  onExit: Rl,
  onExiting: Rl,
  onExited: Rl,
};
Rr.UNMOUNTED = uo;
Rr.EXITED = Ci;
Rr.ENTERING = ki;
Rr.ENTERED = Ml;
Rr.EXITING = Tp;
const t_ = (t) => t.scrollTop;
function sv(t, r) {
  const { timeout: i, easing: a, style: u = {} } = t;
  return {
    duration:
      u.transitionDuration ?? (typeof i == "number" ? i : i[r.mode] || 0),
    easing:
      u.transitionTimingFunction ?? (typeof a == "object" ? a[r.mode] : a),
    delay: u.transitionDelay,
  };
}
function Ap(t) {
  return `scale(${t}, ${t ** 2})`;
}
const e_ = {
    entering: { opacity: 1, transform: Ap(1) },
    entered: { opacity: 1, transform: "none" },
  },
  Zd =
    typeof navigator < "u" &&
    /^((?!chrome|android).)*(safari|mobile)/i.test(navigator.userAgent) &&
    /(os |version\/)15(.|_)4/i.test(navigator.userAgent),
  Op = tt.forwardRef(function (r, i) {
    const {
        addEndListener: a,
        appear: u = !0,
        children: s,
        easing: f,
        in: d,
        onEnter: h,
        onEntered: m,
        onEntering: g,
        onExit: y,
        onExited: b,
        onExiting: v,
        style: O,
        timeout: T = "auto",
        TransitionComponent: L = Rr,
        ...D
      } = r,
      G = oo(),
      $ = tt.useRef(),
      H = ix(),
      R = tt.useRef(null),
      k = Bi(R, ph(s), i),
      Q = (V) => (_) => {
        if (V) {
          const P = R.current;
          _ === void 0 ? V(P) : V(P, _);
        }
      },
      C = Q(g),
      U = Q((V, _) => {
        t_(V);
        const {
          duration: P,
          delay: nt,
          easing: pt,
        } = sv({ style: O, timeout: T, easing: f }, { mode: "enter" });
        let x;
        T === "auto"
          ? ((x = H.transitions.getAutoHeightDuration(V.clientHeight)),
            ($.current = x))
          : (x = P),
          (V.style.transition = [
            H.transitions.create("opacity", { duration: x, delay: nt }),
            H.transitions.create("transform", {
              duration: Zd ? x : x * 0.666,
              delay: nt,
              easing: pt,
            }),
          ].join(",")),
          h && h(V, _);
      }),
      z = Q(m),
      q = Q(v),
      w = Q((V) => {
        const {
          duration: _,
          delay: P,
          easing: nt,
        } = sv({ style: O, timeout: T, easing: f }, { mode: "exit" });
        let pt;
        T === "auto"
          ? ((pt = H.transitions.getAutoHeightDuration(V.clientHeight)),
            ($.current = pt))
          : (pt = _),
          (V.style.transition = [
            H.transitions.create("opacity", { duration: pt, delay: P }),
            H.transitions.create("transform", {
              duration: Zd ? pt : pt * 0.666,
              delay: Zd ? P : P || pt * 0.333,
              easing: nt,
            }),
          ].join(",")),
          (V.style.opacity = 0),
          (V.style.transform = Ap(0.75)),
          y && y(V);
      }),
      B = Q(b),
      N = (V) => {
        T === "auto" && G.start($.current || 0, V), a && a(R.current, V);
      };
    return ye.jsx(L, {
      appear: u,
      in: d,
      nodeRef: R,
      onEnter: U,
      onEntered: z,
      onEntering: C,
      onExit: w,
      onExited: B,
      onExiting: q,
      addEndListener: N,
      timeout: T === "auto" ? null : T,
      ...D,
      children: (V, { ownerState: _, ...P }) =>
        tt.cloneElement(s, {
          style: {
            opacity: 0,
            transform: Ap(0.75),
            visibility: V === "exited" && !d ? "hidden" : void 0,
            ...e_[V],
            ...O,
            ...s.props.style,
          },
          ref: k,
          ...P,
        }),
    });
  });
Op && (Op.muiSupportAuto = !0);
var fn = "top",
  $n = "bottom",
  Vn = "right",
  dn = "left",
  hh = "auto",
  Bo = [fn, $n, Vn, dn],
  Yl = "start",
  Ao = "end",
  n_ = "clippingParents",
  ox = "viewport",
  ro = "popper",
  r_ = "reference",
  cv = Bo.reduce(function (t, r) {
    return t.concat([r + "-" + Yl, r + "-" + Ao]);
  }, []),
  ux = [].concat(Bo, [hh]).reduce(function (t, r) {
    return t.concat([r, r + "-" + Yl, r + "-" + Ao]);
  }, []),
  i_ = "beforeRead",
  l_ = "read",
  a_ = "afterRead",
  o_ = "beforeMain",
  u_ = "main",
  s_ = "afterMain",
  c_ = "beforeWrite",
  f_ = "write",
  d_ = "afterWrite",
  p_ = [i_, l_, a_, o_, u_, s_, c_, f_, d_];
function cr(t) {
  return t ? (t.nodeName || "").toLowerCase() : null;
}
function _n(t) {
  if (t == null) return window;
  if (t.toString() !== "[object Window]") {
    var r = t.ownerDocument;
    return (r && r.defaultView) || window;
  }
  return t;
}
function Li(t) {
  var r = _n(t).Element;
  return t instanceof r || t instanceof Element;
}
function Pn(t) {
  var r = _n(t).HTMLElement;
  return t instanceof r || t instanceof HTMLElement;
}
function mh(t) {
  if (typeof ShadowRoot > "u") return !1;
  var r = _n(t).ShadowRoot;
  return t instanceof r || t instanceof ShadowRoot;
}
function h_(t) {
  var r = t.state;
  Object.keys(r.elements).forEach(function (i) {
    var a = r.styles[i] || {},
      u = r.attributes[i] || {},
      s = r.elements[i];
    !Pn(s) ||
      !cr(s) ||
      (Object.assign(s.style, a),
      Object.keys(u).forEach(function (f) {
        var d = u[f];
        d === !1 ? s.removeAttribute(f) : s.setAttribute(f, d === !0 ? "" : d);
      }));
  });
}
function m_(t) {
  var r = t.state,
    i = {
      popper: {
        position: r.options.strategy,
        left: "0",
        top: "0",
        margin: "0",
      },
      arrow: { position: "absolute" },
      reference: {},
    };
  return (
    Object.assign(r.elements.popper.style, i.popper),
    (r.styles = i),
    r.elements.arrow && Object.assign(r.elements.arrow.style, i.arrow),
    function () {
      Object.keys(r.elements).forEach(function (a) {
        var u = r.elements[a],
          s = r.attributes[a] || {},
          f = Object.keys(r.styles.hasOwnProperty(a) ? r.styles[a] : i[a]),
          d = f.reduce(function (h, m) {
            return (h[m] = ""), h;
          }, {});
        !Pn(u) ||
          !cr(u) ||
          (Object.assign(u.style, d),
          Object.keys(s).forEach(function (h) {
            u.removeAttribute(h);
          }));
      });
    }
  );
}
const g_ = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: h_,
  effect: m_,
  requires: ["computeStyles"],
};
function ur(t) {
  return t.split("-")[0];
}
var Mi = Math.max,
  Ns = Math.min,
  Gl = Math.round;
function Cp() {
  var t = navigator.userAgentData;
  return t != null && t.brands && Array.isArray(t.brands)
    ? t.brands
        .map(function (r) {
          return r.brand + "/" + r.version;
        })
        .join(" ")
    : navigator.userAgent;
}
function sx() {
  return !/^((?!chrome|android).)*safari/i.test(Cp());
}
function Xl(t, r, i) {
  r === void 0 && (r = !1), i === void 0 && (i = !1);
  var a = t.getBoundingClientRect(),
    u = 1,
    s = 1;
  r &&
    Pn(t) &&
    ((u = (t.offsetWidth > 0 && Gl(a.width) / t.offsetWidth) || 1),
    (s = (t.offsetHeight > 0 && Gl(a.height) / t.offsetHeight) || 1));
  var f = Li(t) ? _n(t) : window,
    d = f.visualViewport,
    h = !sx() && i,
    m = (a.left + (h && d ? d.offsetLeft : 0)) / u,
    g = (a.top + (h && d ? d.offsetTop : 0)) / s,
    y = a.width / u,
    b = a.height / s;
  return {
    width: y,
    height: b,
    top: g,
    right: m + y,
    bottom: g + b,
    left: m,
    x: m,
    y: g,
  };
}
function gh(t) {
  var r = Xl(t),
    i = t.offsetWidth,
    a = t.offsetHeight;
  return (
    Math.abs(r.width - i) <= 1 && (i = r.width),
    Math.abs(r.height - a) <= 1 && (a = r.height),
    { x: t.offsetLeft, y: t.offsetTop, width: i, height: a }
  );
}
function cx(t, r) {
  var i = r.getRootNode && r.getRootNode();
  if (t.contains(r)) return !0;
  if (i && mh(i)) {
    var a = r;
    do {
      if (a && t.isSameNode(a)) return !0;
      a = a.parentNode || a.host;
    } while (a);
  }
  return !1;
}
function _r(t) {
  return _n(t).getComputedStyle(t);
}
function y_(t) {
  return ["table", "td", "th"].indexOf(cr(t)) >= 0;
}
function li(t) {
  return ((Li(t) ? t.ownerDocument : t.document) || window.document)
    .documentElement;
}
function oc(t) {
  return cr(t) === "html"
    ? t
    : t.assignedSlot || t.parentNode || (mh(t) ? t.host : null) || li(t);
}
function fv(t) {
  return !Pn(t) || _r(t).position === "fixed" ? null : t.offsetParent;
}
function v_(t) {
  var r = /firefox/i.test(Cp()),
    i = /Trident/i.test(Cp());
  if (i && Pn(t)) {
    var a = _r(t);
    if (a.position === "fixed") return null;
  }
  var u = oc(t);
  for (mh(u) && (u = u.host); Pn(u) && ["html", "body"].indexOf(cr(u)) < 0; ) {
    var s = _r(u);
    if (
      s.transform !== "none" ||
      s.perspective !== "none" ||
      s.contain === "paint" ||
      ["transform", "perspective"].indexOf(s.willChange) !== -1 ||
      (r && s.willChange === "filter") ||
      (r && s.filter && s.filter !== "none")
    )
      return u;
    u = u.parentNode;
  }
  return null;
}
function Lo(t) {
  for (var r = _n(t), i = fv(t); i && y_(i) && _r(i).position === "static"; )
    i = fv(i);
  return i &&
    (cr(i) === "html" || (cr(i) === "body" && _r(i).position === "static"))
    ? r
    : i || v_(t) || r;
}
function yh(t) {
  return ["top", "bottom"].indexOf(t) >= 0 ? "x" : "y";
}
function ho(t, r, i) {
  return Mi(t, Ns(r, i));
}
function b_(t, r, i) {
  var a = ho(t, r, i);
  return a > i ? i : a;
}
function fx() {
  return { top: 0, right: 0, bottom: 0, left: 0 };
}
function dx(t) {
  return Object.assign({}, fx(), t);
}
function px(t, r) {
  return r.reduce(function (i, a) {
    return (i[a] = t), i;
  }, {});
}
var x_ = function (r, i) {
  return (
    (r =
      typeof r == "function"
        ? r(Object.assign({}, i.rects, { placement: i.placement }))
        : r),
    dx(typeof r != "number" ? r : px(r, Bo))
  );
};
function S_(t) {
  var r,
    i = t.state,
    a = t.name,
    u = t.options,
    s = i.elements.arrow,
    f = i.modifiersData.popperOffsets,
    d = ur(i.placement),
    h = yh(d),
    m = [dn, Vn].indexOf(d) >= 0,
    g = m ? "height" : "width";
  if (!(!s || !f)) {
    var y = x_(u.padding, i),
      b = gh(s),
      v = h === "y" ? fn : dn,
      O = h === "y" ? $n : Vn,
      T =
        i.rects.reference[g] + i.rects.reference[h] - f[h] - i.rects.popper[g],
      L = f[h] - i.rects.reference[h],
      D = Lo(s),
      G = D ? (h === "y" ? D.clientHeight || 0 : D.clientWidth || 0) : 0,
      $ = T / 2 - L / 2,
      H = y[v],
      R = G - b[g] - y[O],
      k = G / 2 - b[g] / 2 + $,
      Q = ho(H, k, R),
      C = h;
    i.modifiersData[a] = ((r = {}), (r[C] = Q), (r.centerOffset = Q - k), r);
  }
}
function w_(t) {
  var r = t.state,
    i = t.options,
    a = i.element,
    u = a === void 0 ? "[data-popper-arrow]" : a;
  u != null &&
    ((typeof u == "string" && ((u = r.elements.popper.querySelector(u)), !u)) ||
      (cx(r.elements.popper, u) && (r.elements.arrow = u)));
}
const E_ = {
  name: "arrow",
  enabled: !0,
  phase: "main",
  fn: S_,
  effect: w_,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"],
};
function Ql(t) {
  return t.split("-")[1];
}
var T_ = { top: "auto", right: "auto", bottom: "auto", left: "auto" };
function A_(t, r) {
  var i = t.x,
    a = t.y,
    u = r.devicePixelRatio || 1;
  return { x: Gl(i * u) / u || 0, y: Gl(a * u) / u || 0 };
}
function dv(t) {
  var r,
    i = t.popper,
    a = t.popperRect,
    u = t.placement,
    s = t.variation,
    f = t.offsets,
    d = t.position,
    h = t.gpuAcceleration,
    m = t.adaptive,
    g = t.roundOffsets,
    y = t.isFixed,
    b = f.x,
    v = b === void 0 ? 0 : b,
    O = f.y,
    T = O === void 0 ? 0 : O,
    L = typeof g == "function" ? g({ x: v, y: T }) : { x: v, y: T };
  (v = L.x), (T = L.y);
  var D = f.hasOwnProperty("x"),
    G = f.hasOwnProperty("y"),
    $ = dn,
    H = fn,
    R = window;
  if (m) {
    var k = Lo(i),
      Q = "clientHeight",
      C = "clientWidth";
    if (
      (k === _n(i) &&
        ((k = li(i)),
        _r(k).position !== "static" &&
          d === "absolute" &&
          ((Q = "scrollHeight"), (C = "scrollWidth"))),
      (k = k),
      u === fn || ((u === dn || u === Vn) && s === Ao))
    ) {
      H = $n;
      var U = y && k === R && R.visualViewport ? R.visualViewport.height : k[Q];
      (T -= U - a.height), (T *= h ? 1 : -1);
    }
    if (u === dn || ((u === fn || u === $n) && s === Ao)) {
      $ = Vn;
      var z = y && k === R && R.visualViewport ? R.visualViewport.width : k[C];
      (v -= z - a.width), (v *= h ? 1 : -1);
    }
  }
  var q = Object.assign({ position: d }, m && T_),
    w = g === !0 ? A_({ x: v, y: T }, _n(i)) : { x: v, y: T };
  if (((v = w.x), (T = w.y), h)) {
    var B;
    return Object.assign(
      {},
      q,
      ((B = {}),
      (B[H] = G ? "0" : ""),
      (B[$] = D ? "0" : ""),
      (B.transform =
        (R.devicePixelRatio || 1) <= 1
          ? "translate(" + v + "px, " + T + "px)"
          : "translate3d(" + v + "px, " + T + "px, 0)"),
      B)
    );
  }
  return Object.assign(
    {},
    q,
    ((r = {}),
    (r[H] = G ? T + "px" : ""),
    (r[$] = D ? v + "px" : ""),
    (r.transform = ""),
    r)
  );
}
function O_(t) {
  var r = t.state,
    i = t.options,
    a = i.gpuAcceleration,
    u = a === void 0 ? !0 : a,
    s = i.adaptive,
    f = s === void 0 ? !0 : s,
    d = i.roundOffsets,
    h = d === void 0 ? !0 : d,
    m = {
      placement: ur(r.placement),
      variation: Ql(r.placement),
      popper: r.elements.popper,
      popperRect: r.rects.popper,
      gpuAcceleration: u,
      isFixed: r.options.strategy === "fixed",
    };
  r.modifiersData.popperOffsets != null &&
    (r.styles.popper = Object.assign(
      {},
      r.styles.popper,
      dv(
        Object.assign({}, m, {
          offsets: r.modifiersData.popperOffsets,
          position: r.options.strategy,
          adaptive: f,
          roundOffsets: h,
        })
      )
    )),
    r.modifiersData.arrow != null &&
      (r.styles.arrow = Object.assign(
        {},
        r.styles.arrow,
        dv(
          Object.assign({}, m, {
            offsets: r.modifiersData.arrow,
            position: "absolute",
            adaptive: !1,
            roundOffsets: h,
          })
        )
      )),
    (r.attributes.popper = Object.assign({}, r.attributes.popper, {
      "data-popper-placement": r.placement,
    }));
}
const C_ = {
  name: "computeStyles",
  enabled: !0,
  phase: "beforeWrite",
  fn: O_,
  data: {},
};
var is = { passive: !0 };
function k_(t) {
  var r = t.state,
    i = t.instance,
    a = t.options,
    u = a.scroll,
    s = u === void 0 ? !0 : u,
    f = a.resize,
    d = f === void 0 ? !0 : f,
    h = _n(r.elements.popper),
    m = [].concat(r.scrollParents.reference, r.scrollParents.popper);
  return (
    s &&
      m.forEach(function (g) {
        g.addEventListener("scroll", i.update, is);
      }),
    d && h.addEventListener("resize", i.update, is),
    function () {
      s &&
        m.forEach(function (g) {
          g.removeEventListener("scroll", i.update, is);
        }),
        d && h.removeEventListener("resize", i.update, is);
    }
  );
}
const __ = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function () {},
  effect: k_,
  data: {},
};
var R_ = { left: "right", right: "left", bottom: "top", top: "bottom" };
function xs(t) {
  return t.replace(/left|right|bottom|top/g, function (r) {
    return R_[r];
  });
}
var M_ = { start: "end", end: "start" };
function pv(t) {
  return t.replace(/start|end/g, function (r) {
    return M_[r];
  });
}
function vh(t) {
  var r = _n(t),
    i = r.pageXOffset,
    a = r.pageYOffset;
  return { scrollLeft: i, scrollTop: a };
}
function bh(t) {
  return Xl(li(t)).left + vh(t).scrollLeft;
}
function z_(t, r) {
  var i = _n(t),
    a = li(t),
    u = i.visualViewport,
    s = a.clientWidth,
    f = a.clientHeight,
    d = 0,
    h = 0;
  if (u) {
    (s = u.width), (f = u.height);
    var m = sx();
    (m || (!m && r === "fixed")) && ((d = u.offsetLeft), (h = u.offsetTop));
  }
  return { width: s, height: f, x: d + bh(t), y: h };
}
function D_(t) {
  var r,
    i = li(t),
    a = vh(t),
    u = (r = t.ownerDocument) == null ? void 0 : r.body,
    s = Mi(
      i.scrollWidth,
      i.clientWidth,
      u ? u.scrollWidth : 0,
      u ? u.clientWidth : 0
    ),
    f = Mi(
      i.scrollHeight,
      i.clientHeight,
      u ? u.scrollHeight : 0,
      u ? u.clientHeight : 0
    ),
    d = -a.scrollLeft + bh(t),
    h = -a.scrollTop;
  return (
    _r(u || i).direction === "rtl" &&
      (d += Mi(i.clientWidth, u ? u.clientWidth : 0) - s),
    { width: s, height: f, x: d, y: h }
  );
}
function xh(t) {
  var r = _r(t),
    i = r.overflow,
    a = r.overflowX,
    u = r.overflowY;
  return /auto|scroll|overlay|hidden/.test(i + u + a);
}
function hx(t) {
  return ["html", "body", "#document"].indexOf(cr(t)) >= 0
    ? t.ownerDocument.body
    : Pn(t) && xh(t)
    ? t
    : hx(oc(t));
}
function mo(t, r) {
  var i;
  r === void 0 && (r = []);
  var a = hx(t),
    u = a === ((i = t.ownerDocument) == null ? void 0 : i.body),
    s = _n(a),
    f = u ? [s].concat(s.visualViewport || [], xh(a) ? a : []) : a,
    d = r.concat(f);
  return u ? d : d.concat(mo(oc(f)));
}
function kp(t) {
  return Object.assign({}, t, {
    left: t.x,
    top: t.y,
    right: t.x + t.width,
    bottom: t.y + t.height,
  });
}
function N_(t, r) {
  var i = Xl(t, !1, r === "fixed");
  return (
    (i.top = i.top + t.clientTop),
    (i.left = i.left + t.clientLeft),
    (i.bottom = i.top + t.clientHeight),
    (i.right = i.left + t.clientWidth),
    (i.width = t.clientWidth),
    (i.height = t.clientHeight),
    (i.x = i.left),
    (i.y = i.top),
    i
  );
}
function hv(t, r, i) {
  return r === ox ? kp(z_(t, i)) : Li(r) ? N_(r, i) : kp(D_(li(t)));
}
function B_(t) {
  var r = mo(oc(t)),
    i = ["absolute", "fixed"].indexOf(_r(t).position) >= 0,
    a = i && Pn(t) ? Lo(t) : t;
  return Li(a)
    ? r.filter(function (u) {
        return Li(u) && cx(u, a) && cr(u) !== "body";
      })
    : [];
}
function L_(t, r, i, a) {
  var u = r === "clippingParents" ? B_(t) : [].concat(r),
    s = [].concat(u, [i]),
    f = s[0],
    d = s.reduce(function (h, m) {
      var g = hv(t, m, a);
      return (
        (h.top = Mi(g.top, h.top)),
        (h.right = Ns(g.right, h.right)),
        (h.bottom = Ns(g.bottom, h.bottom)),
        (h.left = Mi(g.left, h.left)),
        h
      );
    }, hv(t, f, a));
  return (
    (d.width = d.right - d.left),
    (d.height = d.bottom - d.top),
    (d.x = d.left),
    (d.y = d.top),
    d
  );
}
function mx(t) {
  var r = t.reference,
    i = t.element,
    a = t.placement,
    u = a ? ur(a) : null,
    s = a ? Ql(a) : null,
    f = r.x + r.width / 2 - i.width / 2,
    d = r.y + r.height / 2 - i.height / 2,
    h;
  switch (u) {
    case fn:
      h = { x: f, y: r.y - i.height };
      break;
    case $n:
      h = { x: f, y: r.y + r.height };
      break;
    case Vn:
      h = { x: r.x + r.width, y: d };
      break;
    case dn:
      h = { x: r.x - i.width, y: d };
      break;
    default:
      h = { x: r.x, y: r.y };
  }
  var m = u ? yh(u) : null;
  if (m != null) {
    var g = m === "y" ? "height" : "width";
    switch (s) {
      case Yl:
        h[m] = h[m] - (r[g] / 2 - i[g] / 2);
        break;
      case Ao:
        h[m] = h[m] + (r[g] / 2 - i[g] / 2);
        break;
    }
  }
  return h;
}
function Oo(t, r) {
  r === void 0 && (r = {});
  var i = r,
    a = i.placement,
    u = a === void 0 ? t.placement : a,
    s = i.strategy,
    f = s === void 0 ? t.strategy : s,
    d = i.boundary,
    h = d === void 0 ? n_ : d,
    m = i.rootBoundary,
    g = m === void 0 ? ox : m,
    y = i.elementContext,
    b = y === void 0 ? ro : y,
    v = i.altBoundary,
    O = v === void 0 ? !1 : v,
    T = i.padding,
    L = T === void 0 ? 0 : T,
    D = dx(typeof L != "number" ? L : px(L, Bo)),
    G = b === ro ? r_ : ro,
    $ = t.rects.popper,
    H = t.elements[O ? G : b],
    R = L_(Li(H) ? H : H.contextElement || li(t.elements.popper), h, g, f),
    k = Xl(t.elements.reference),
    Q = mx({ reference: k, element: $, placement: u }),
    C = kp(Object.assign({}, $, Q)),
    U = b === ro ? C : k,
    z = {
      top: R.top - U.top + D.top,
      bottom: U.bottom - R.bottom + D.bottom,
      left: R.left - U.left + D.left,
      right: U.right - R.right + D.right,
    },
    q = t.modifiersData.offset;
  if (b === ro && q) {
    var w = q[u];
    Object.keys(z).forEach(function (B) {
      var N = [Vn, $n].indexOf(B) >= 0 ? 1 : -1,
        V = [fn, $n].indexOf(B) >= 0 ? "y" : "x";
      z[B] += w[V] * N;
    });
  }
  return z;
}
function U_(t, r) {
  r === void 0 && (r = {});
  var i = r,
    a = i.placement,
    u = i.boundary,
    s = i.rootBoundary,
    f = i.padding,
    d = i.flipVariations,
    h = i.allowedAutoPlacements,
    m = h === void 0 ? ux : h,
    g = Ql(a),
    y = g
      ? d
        ? cv
        : cv.filter(function (O) {
            return Ql(O) === g;
          })
      : Bo,
    b = y.filter(function (O) {
      return m.indexOf(O) >= 0;
    });
  b.length === 0 && (b = y);
  var v = b.reduce(function (O, T) {
    return (
      (O[T] = Oo(t, { placement: T, boundary: u, rootBoundary: s, padding: f })[
        ur(T)
      ]),
      O
    );
  }, {});
  return Object.keys(v).sort(function (O, T) {
    return v[O] - v[T];
  });
}
function j_(t) {
  if (ur(t) === hh) return [];
  var r = xs(t);
  return [pv(t), r, pv(r)];
}
function H_(t) {
  var r = t.state,
    i = t.options,
    a = t.name;
  if (!r.modifiersData[a]._skip) {
    for (
      var u = i.mainAxis,
        s = u === void 0 ? !0 : u,
        f = i.altAxis,
        d = f === void 0 ? !0 : f,
        h = i.fallbackPlacements,
        m = i.padding,
        g = i.boundary,
        y = i.rootBoundary,
        b = i.altBoundary,
        v = i.flipVariations,
        O = v === void 0 ? !0 : v,
        T = i.allowedAutoPlacements,
        L = r.options.placement,
        D = ur(L),
        G = D === L,
        $ = h || (G || !O ? [xs(L)] : j_(L)),
        H = [L].concat($).reduce(function (ut, st) {
          return ut.concat(
            ur(st) === hh
              ? U_(r, {
                  placement: st,
                  boundary: g,
                  rootBoundary: y,
                  padding: m,
                  flipVariations: O,
                  allowedAutoPlacements: T,
                })
              : st
          );
        }, []),
        R = r.rects.reference,
        k = r.rects.popper,
        Q = new Map(),
        C = !0,
        U = H[0],
        z = 0;
      z < H.length;
      z++
    ) {
      var q = H[z],
        w = ur(q),
        B = Ql(q) === Yl,
        N = [fn, $n].indexOf(w) >= 0,
        V = N ? "width" : "height",
        _ = Oo(r, {
          placement: q,
          boundary: g,
          rootBoundary: y,
          altBoundary: b,
          padding: m,
        }),
        P = N ? (B ? Vn : dn) : B ? $n : fn;
      R[V] > k[V] && (P = xs(P));
      var nt = xs(P),
        pt = [];
      if (
        (s && pt.push(_[w] <= 0),
        d && pt.push(_[P] <= 0, _[nt] <= 0),
        pt.every(function (ut) {
          return ut;
        }))
      ) {
        (U = q), (C = !1);
        break;
      }
      Q.set(q, pt);
    }
    if (C)
      for (
        var x = O ? 3 : 1,
          Z = function (st) {
            var it = H.find(function (ht) {
              var gt = Q.get(ht);
              if (gt)
                return gt.slice(0, st).every(function (Ct) {
                  return Ct;
                });
            });
            if (it) return (U = it), "break";
          },
          J = x;
        J > 0;
        J--
      ) {
        var A = Z(J);
        if (A === "break") break;
      }
    r.placement !== U &&
      ((r.modifiersData[a]._skip = !0), (r.placement = U), (r.reset = !0));
  }
}
const q_ = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: H_,
  requiresIfExists: ["offset"],
  data: { _skip: !1 },
};
function mv(t, r, i) {
  return (
    i === void 0 && (i = { x: 0, y: 0 }),
    {
      top: t.top - r.height - i.y,
      right: t.right - r.width + i.x,
      bottom: t.bottom - r.height + i.y,
      left: t.left - r.width - i.x,
    }
  );
}
function gv(t) {
  return [fn, Vn, $n, dn].some(function (r) {
    return t[r] >= 0;
  });
}
function P_(t) {
  var r = t.state,
    i = t.name,
    a = r.rects.reference,
    u = r.rects.popper,
    s = r.modifiersData.preventOverflow,
    f = Oo(r, { elementContext: "reference" }),
    d = Oo(r, { altBoundary: !0 }),
    h = mv(f, a),
    m = mv(d, u, s),
    g = gv(h),
    y = gv(m);
  (r.modifiersData[i] = {
    referenceClippingOffsets: h,
    popperEscapeOffsets: m,
    isReferenceHidden: g,
    hasPopperEscaped: y,
  }),
    (r.attributes.popper = Object.assign({}, r.attributes.popper, {
      "data-popper-reference-hidden": g,
      "data-popper-escaped": y,
    }));
}
const $_ = {
  name: "hide",
  enabled: !0,
  phase: "main",
  requiresIfExists: ["preventOverflow"],
  fn: P_,
};
function V_(t, r, i) {
  var a = ur(t),
    u = [dn, fn].indexOf(a) >= 0 ? -1 : 1,
    s = typeof i == "function" ? i(Object.assign({}, r, { placement: t })) : i,
    f = s[0],
    d = s[1];
  return (
    (f = f || 0),
    (d = (d || 0) * u),
    [dn, Vn].indexOf(a) >= 0 ? { x: d, y: f } : { x: f, y: d }
  );
}
function Y_(t) {
  var r = t.state,
    i = t.options,
    a = t.name,
    u = i.offset,
    s = u === void 0 ? [0, 0] : u,
    f = ux.reduce(function (g, y) {
      return (g[y] = V_(y, r.rects, s)), g;
    }, {}),
    d = f[r.placement],
    h = d.x,
    m = d.y;
  r.modifiersData.popperOffsets != null &&
    ((r.modifiersData.popperOffsets.x += h),
    (r.modifiersData.popperOffsets.y += m)),
    (r.modifiersData[a] = f);
}
const G_ = {
  name: "offset",
  enabled: !0,
  phase: "main",
  requires: ["popperOffsets"],
  fn: Y_,
};
function X_(t) {
  var r = t.state,
    i = t.name;
  r.modifiersData[i] = mx({
    reference: r.rects.reference,
    element: r.rects.popper,
    placement: r.placement,
  });
}
const Q_ = {
  name: "popperOffsets",
  enabled: !0,
  phase: "read",
  fn: X_,
  data: {},
};
function I_(t) {
  return t === "x" ? "y" : "x";
}
function Z_(t) {
  var r = t.state,
    i = t.options,
    a = t.name,
    u = i.mainAxis,
    s = u === void 0 ? !0 : u,
    f = i.altAxis,
    d = f === void 0 ? !1 : f,
    h = i.boundary,
    m = i.rootBoundary,
    g = i.altBoundary,
    y = i.padding,
    b = i.tether,
    v = b === void 0 ? !0 : b,
    O = i.tetherOffset,
    T = O === void 0 ? 0 : O,
    L = Oo(r, { boundary: h, rootBoundary: m, padding: y, altBoundary: g }),
    D = ur(r.placement),
    G = Ql(r.placement),
    $ = !G,
    H = yh(D),
    R = I_(H),
    k = r.modifiersData.popperOffsets,
    Q = r.rects.reference,
    C = r.rects.popper,
    U =
      typeof T == "function"
        ? T(Object.assign({}, r.rects, { placement: r.placement }))
        : T,
    z =
      typeof U == "number"
        ? { mainAxis: U, altAxis: U }
        : Object.assign({ mainAxis: 0, altAxis: 0 }, U),
    q = r.modifiersData.offset ? r.modifiersData.offset[r.placement] : null,
    w = { x: 0, y: 0 };
  if (k) {
    if (s) {
      var B,
        N = H === "y" ? fn : dn,
        V = H === "y" ? $n : Vn,
        _ = H === "y" ? "height" : "width",
        P = k[H],
        nt = P + L[N],
        pt = P - L[V],
        x = v ? -C[_] / 2 : 0,
        Z = G === Yl ? Q[_] : C[_],
        J = G === Yl ? -C[_] : -Q[_],
        A = r.elements.arrow,
        ut = v && A ? gh(A) : { width: 0, height: 0 },
        st = r.modifiersData["arrow#persistent"]
          ? r.modifiersData["arrow#persistent"].padding
          : fx(),
        it = st[N],
        ht = st[V],
        gt = ho(0, Q[_], ut[_]),
        Ct = $ ? Q[_] / 2 - x - gt - it - z.mainAxis : Z - gt - it - z.mainAxis,
        Bt = $
          ? -Q[_] / 2 + x + gt + ht + z.mainAxis
          : J + gt + ht + z.mainAxis,
        mt = r.elements.arrow && Lo(r.elements.arrow),
        At = mt ? (H === "y" ? mt.clientTop || 0 : mt.clientLeft || 0) : 0,
        Yt = (B = q?.[H]) != null ? B : 0,
        ce = P + Ct - Yt - At,
        oe = P + Bt - Yt,
        fe = ho(v ? Ns(nt, ce) : nt, P, v ? Mi(pt, oe) : pt);
      (k[H] = fe), (w[H] = fe - P);
    }
    if (d) {
      var yt,
        xt = H === "x" ? fn : dn,
        vt = H === "x" ? $n : Vn,
        ft = k[R],
        Et = R === "y" ? "height" : "width",
        St = ft + L[xt],
        kt = ft - L[vt],
        jt = [fn, dn].indexOf(D) !== -1,
        Pt = (yt = q?.[R]) != null ? yt : 0,
        F = jt ? St : ft - Q[Et] - C[Et] - Pt + z.altAxis,
        ot = jt ? ft + Q[Et] + C[Et] - Pt - z.altAxis : kt,
        wt = v && jt ? b_(F, ft, ot) : ho(v ? F : St, ft, v ? ot : kt);
      (k[R] = wt), (w[R] = wt - ft);
    }
    r.modifiersData[a] = w;
  }
}
const K_ = {
  name: "preventOverflow",
  enabled: !0,
  phase: "main",
  fn: Z_,
  requiresIfExists: ["offset"],
};
function F_(t) {
  return { scrollLeft: t.scrollLeft, scrollTop: t.scrollTop };
}
function W_(t) {
  return t === _n(t) || !Pn(t) ? vh(t) : F_(t);
}
function J_(t) {
  var r = t.getBoundingClientRect(),
    i = Gl(r.width) / t.offsetWidth || 1,
    a = Gl(r.height) / t.offsetHeight || 1;
  return i !== 1 || a !== 1;
}
function t5(t, r, i) {
  i === void 0 && (i = !1);
  var a = Pn(r),
    u = Pn(r) && J_(r),
    s = li(r),
    f = Xl(t, u, i),
    d = { scrollLeft: 0, scrollTop: 0 },
    h = { x: 0, y: 0 };
  return (
    (a || (!a && !i)) &&
      ((cr(r) !== "body" || xh(s)) && (d = W_(r)),
      Pn(r)
        ? ((h = Xl(r, !0)), (h.x += r.clientLeft), (h.y += r.clientTop))
        : s && (h.x = bh(s))),
    {
      x: f.left + d.scrollLeft - h.x,
      y: f.top + d.scrollTop - h.y,
      width: f.width,
      height: f.height,
    }
  );
}
function e5(t) {
  var r = new Map(),
    i = new Set(),
    a = [];
  t.forEach(function (s) {
    r.set(s.name, s);
  });
  function u(s) {
    i.add(s.name);
    var f = [].concat(s.requires || [], s.requiresIfExists || []);
    f.forEach(function (d) {
      if (!i.has(d)) {
        var h = r.get(d);
        h && u(h);
      }
    }),
      a.push(s);
  }
  return (
    t.forEach(function (s) {
      i.has(s.name) || u(s);
    }),
    a
  );
}
function n5(t) {
  var r = e5(t);
  return p_.reduce(function (i, a) {
    return i.concat(
      r.filter(function (u) {
        return u.phase === a;
      })
    );
  }, []);
}
function r5(t) {
  var r;
  return function () {
    return (
      r ||
        (r = new Promise(function (i) {
          Promise.resolve().then(function () {
            (r = void 0), i(t());
          });
        })),
      r
    );
  };
}
function i5(t) {
  var r = t.reduce(function (i, a) {
    var u = i[a.name];
    return (
      (i[a.name] = u
        ? Object.assign({}, u, a, {
            options: Object.assign({}, u.options, a.options),
            data: Object.assign({}, u.data, a.data),
          })
        : a),
      i
    );
  }, {});
  return Object.keys(r).map(function (i) {
    return r[i];
  });
}
var yv = { placement: "bottom", modifiers: [], strategy: "absolute" };
function vv() {
  for (var t = arguments.length, r = new Array(t), i = 0; i < t; i++)
    r[i] = arguments[i];
  return !r.some(function (a) {
    return !(a && typeof a.getBoundingClientRect == "function");
  });
}
function l5(t) {
  t === void 0 && (t = {});
  var r = t,
    i = r.defaultModifiers,
    a = i === void 0 ? [] : i,
    u = r.defaultOptions,
    s = u === void 0 ? yv : u;
  return function (d, h, m) {
    m === void 0 && (m = s);
    var g = {
        placement: "bottom",
        orderedModifiers: [],
        options: Object.assign({}, yv, s),
        modifiersData: {},
        elements: { reference: d, popper: h },
        attributes: {},
        styles: {},
      },
      y = [],
      b = !1,
      v = {
        state: g,
        setOptions: function (D) {
          var G = typeof D == "function" ? D(g.options) : D;
          T(),
            (g.options = Object.assign({}, s, g.options, G)),
            (g.scrollParents = {
              reference: Li(d)
                ? mo(d)
                : d.contextElement
                ? mo(d.contextElement)
                : [],
              popper: mo(h),
            });
          var $ = n5(i5([].concat(a, g.options.modifiers)));
          return (
            (g.orderedModifiers = $.filter(function (H) {
              return H.enabled;
            })),
            O(),
            v.update()
          );
        },
        forceUpdate: function () {
          if (!b) {
            var D = g.elements,
              G = D.reference,
              $ = D.popper;
            if (vv(G, $)) {
              (g.rects = {
                reference: t5(G, Lo($), g.options.strategy === "fixed"),
                popper: gh($),
              }),
                (g.reset = !1),
                (g.placement = g.options.placement),
                g.orderedModifiers.forEach(function (z) {
                  return (g.modifiersData[z.name] = Object.assign({}, z.data));
                });
              for (var H = 0; H < g.orderedModifiers.length; H++) {
                if (g.reset === !0) {
                  (g.reset = !1), (H = -1);
                  continue;
                }
                var R = g.orderedModifiers[H],
                  k = R.fn,
                  Q = R.options,
                  C = Q === void 0 ? {} : Q,
                  U = R.name;
                typeof k == "function" &&
                  (g = k({ state: g, options: C, name: U, instance: v }) || g);
              }
            }
          }
        },
        update: r5(function () {
          return new Promise(function (L) {
            v.forceUpdate(), L(g);
          });
        }),
        destroy: function () {
          T(), (b = !0);
        },
      };
    if (!vv(d, h)) return v;
    v.setOptions(m).then(function (L) {
      !b && m.onFirstUpdate && m.onFirstUpdate(L);
    });
    function O() {
      g.orderedModifiers.forEach(function (L) {
        var D = L.name,
          G = L.options,
          $ = G === void 0 ? {} : G,
          H = L.effect;
        if (typeof H == "function") {
          var R = H({ state: g, name: D, instance: v, options: $ }),
            k = function () {};
          y.push(R || k);
        }
      });
    }
    function T() {
      y.forEach(function (L) {
        return L();
      }),
        (y = []);
    }
    return v;
  };
}
var a5 = [__, Q_, C_, g_, G_, q_, K_, E_, $_],
  o5 = l5({ defaultModifiers: a5 });
function u5(t) {
  return typeof t == "string";
}
function gx(t, r, i) {
  return t === void 0 || u5(t)
    ? r
    : { ...r, ownerState: { ...r.ownerState, ...i } };
}
function s5(t, r = []) {
  if (t === void 0) return {};
  const i = {};
  return (
    Object.keys(t)
      .filter(
        (a) =>
          a.match(/^on[A-Z]/) && typeof t[a] == "function" && !r.includes(a)
      )
      .forEach((a) => {
        i[a] = t[a];
      }),
    i
  );
}
function bv(t) {
  if (t === void 0) return {};
  const r = {};
  return (
    Object.keys(t)
      .filter((i) => !(i.match(/^on[A-Z]/) && typeof t[i] == "function"))
      .forEach((i) => {
        r[i] = t[i];
      }),
    r
  );
}
function yx(t) {
  const {
    getSlotProps: r,
    additionalProps: i,
    externalSlotProps: a,
    externalForwardedProps: u,
    className: s,
  } = t;
  if (!r) {
    const v = $l(i?.className, s, u?.className, a?.className),
      O = { ...i?.style, ...u?.style, ...a?.style },
      T = { ...i, ...u, ...a };
    return (
      v.length > 0 && (T.className = v),
      Object.keys(O).length > 0 && (T.style = O),
      { props: T, internalRef: void 0 }
    );
  }
  const f = s5({ ...u, ...a }),
    d = bv(a),
    h = bv(u),
    m = r(f),
    g = $l(m?.className, i?.className, s, u?.className, a?.className),
    y = { ...m?.style, ...i?.style, ...u?.style, ...a?.style },
    b = { ...m, ...i, ...h, ...d };
  return (
    g.length > 0 && (b.className = g),
    Object.keys(y).length > 0 && (b.style = y),
    { props: b, internalRef: m.ref }
  );
}
function vx(t, r, i) {
  return typeof t == "function" ? t(r, i) : t;
}
function c5(t) {
  const {
      elementType: r,
      externalSlotProps: i,
      ownerState: a,
      skipResolvingSlotProps: u = !1,
      ...s
    } = t,
    f = u ? {} : vx(i, a),
    { props: d, internalRef: h } = yx({ ...s, externalSlotProps: f }),
    m = Bi(h, f?.ref, t.additionalProps?.ref);
  return gx(r, { ...d, ref: m }, a);
}
function f5(t) {
  return typeof t == "function" ? t() : t;
}
const d5 = tt.forwardRef(function (r, i) {
  const { children: a, container: u, disablePortal: s = !1 } = r,
    [f, d] = tt.useState(null),
    h = Bi(tt.isValidElement(a) ? ph(a) : null, i);
  if (
    (Eo(() => {
      s || d(f5(u) || document.body);
    }, [u, s]),
    Eo(() => {
      if (f && !s)
        return (
          iv(i, f),
          () => {
            iv(i, null);
          }
        );
    }, [i, f, s]),
    s)
  ) {
    if (tt.isValidElement(a)) {
      const m = { ref: h };
      return tt.cloneElement(a, m);
    }
    return a;
  }
  return f && lx.createPortal(a, f);
});
function p5(t) {
  return ec("MuiPopper", t);
}
uh("MuiPopper", ["root"]);
function h5(t, r) {
  if (r === "ltr") return t;
  switch (t) {
    case "bottom-end":
      return "bottom-start";
    case "bottom-start":
      return "bottom-end";
    case "top-end":
      return "top-start";
    case "top-start":
      return "top-end";
    default:
      return t;
  }
}
function _p(t) {
  return typeof t == "function" ? t() : t;
}
function m5(t) {
  return t.nodeType !== void 0;
}
const g5 = (t) => {
    const { classes: r } = t;
    return nh({ root: ["root"] }, p5, r);
  },
  y5 = {},
  v5 = tt.forwardRef(function (r, i) {
    const {
        anchorEl: a,
        children: u,
        direction: s,
        disablePortal: f,
        modifiers: d,
        open: h,
        placement: m,
        popperOptions: g,
        popperRef: y,
        slotProps: b = {},
        slots: v = {},
        TransitionProps: O,
        ownerState: T,
        ...L
      } = r,
      D = tt.useRef(null),
      G = Bi(D, i),
      $ = tt.useRef(null),
      H = Bi($, y),
      R = tt.useRef(H);
    Eo(() => {
      R.current = H;
    }, [H]),
      tt.useImperativeHandle(y, () => $.current, []);
    const k = h5(m, s),
      [Q, C] = tt.useState(k),
      [U, z] = tt.useState(_p(a));
    tt.useEffect(() => {
      $.current && $.current.forceUpdate();
    }),
      tt.useEffect(() => {
        a && z(_p(a));
      }, [a]),
      Eo(() => {
        if (!U || !h) return;
        const V = (nt) => {
          C(nt.placement);
        };
        let _ = [
          { name: "preventOverflow", options: { altBoundary: f } },
          { name: "flip", options: { altBoundary: f } },
          {
            name: "onUpdate",
            enabled: !0,
            phase: "afterWrite",
            fn: ({ state: nt }) => {
              V(nt);
            },
          },
        ];
        d != null && (_ = _.concat(d)),
          g && g.modifiers != null && (_ = _.concat(g.modifiers));
        const P = o5(U, D.current, { placement: k, ...g, modifiers: _ });
        return (
          R.current(P),
          () => {
            P.destroy(), R.current(null);
          }
        );
      }, [U, f, d, h, g, k]);
    const q = { placement: Q };
    O !== null && (q.TransitionProps = O);
    const w = g5(r),
      B = v.root ?? "div",
      N = c5({
        elementType: B,
        externalSlotProps: b.root,
        externalForwardedProps: L,
        additionalProps: { role: "tooltip", ref: G },
        ownerState: r,
        className: w.root,
      });
    return ye.jsx(B, { ...N, children: typeof u == "function" ? u(q) : u });
  }),
  b5 = tt.forwardRef(function (r, i) {
    const {
        anchorEl: a,
        children: u,
        container: s,
        direction: f = "ltr",
        disablePortal: d = !1,
        keepMounted: h = !1,
        modifiers: m,
        open: g,
        placement: y = "bottom",
        popperOptions: b = y5,
        popperRef: v,
        style: O,
        transition: T = !1,
        slotProps: L = {},
        slots: D = {},
        ...G
      } = r,
      [$, H] = tt.useState(!0),
      R = () => {
        H(!1);
      },
      k = () => {
        H(!0);
      };
    if (!h && !g && (!T || $)) return null;
    let Q;
    if (s) Q = s;
    else if (a) {
      const z = _p(a);
      Q = z && m5(z) ? rv(z).body : rv(null).body;
    }
    const C = !g && h && (!T || $) ? "none" : void 0,
      U = T ? { in: g, onEnter: R, onExited: k } : void 0;
    return ye.jsx(d5, {
      disablePortal: d,
      container: Q,
      children: ye.jsx(v5, {
        anchorEl: a,
        direction: f,
        disablePortal: d,
        modifiers: m,
        ref: i,
        open: T ? !$ : g,
        placement: y,
        popperOptions: b,
        popperRef: v,
        slotProps: L,
        slots: D,
        ...G,
        style: { position: "fixed", top: 0, left: 0, display: C, ...O },
        TransitionProps: U,
        children: u,
      }),
    });
  }),
  x5 = No(b5, { name: "MuiPopper", slot: "Root" })({}),
  bx = tt.forwardRef(function (r, i) {
    const a = Zb(),
      u = fh({ props: r, name: "MuiPopper" }),
      {
        anchorEl: s,
        component: f,
        components: d,
        componentsProps: h,
        container: m,
        disablePortal: g,
        keepMounted: y,
        modifiers: b,
        open: v,
        placement: O,
        popperOptions: T,
        popperRef: L,
        transition: D,
        slots: G,
        slotProps: $,
        ...H
      } = u,
      R = G?.root ?? d?.Root,
      k = {
        anchorEl: s,
        container: m,
        disablePortal: g,
        keepMounted: y,
        modifiers: b,
        open: v,
        placement: O,
        popperOptions: T,
        popperRef: L,
        transition: D,
        ...H,
      };
    return ye.jsx(x5, {
      as: f,
      direction: a ? "rtl" : "ltr",
      slots: { root: R },
      slotProps: $ ?? h,
      ...k,
      ref: i,
    });
  });
function ls(t, r) {
  const {
      className: i,
      elementType: a,
      ownerState: u,
      externalForwardedProps: s,
      internalForwardedProps: f,
      shouldForwardComponentProp: d = !1,
      ...h
    } = r,
    {
      component: m,
      slots: g = { [t]: void 0 },
      slotProps: y = { [t]: void 0 },
      ...b
    } = s,
    v = g[t] || a,
    O = vx(y[t], u),
    {
      props: { component: T, ...L },
      internalRef: D,
    } = yx({
      className: i,
      ...h,
      externalForwardedProps: t === "root" ? b : void 0,
      externalSlotProps: O,
    }),
    G = Bi(D, O?.ref, r.ref),
    $ = t === "root" ? T || m : T,
    H = gx(
      v,
      {
        ...(t === "root" && !m && !g[t] && f),
        ...(t !== "root" && !g[t] && f),
        ...L,
        ...($ && !d && { as: $ }),
        ...($ && d && { component: $ }),
        ref: G,
      },
      u
    );
  return [v, H];
}
function S5(t) {
  return ec("MuiTooltip", t);
}
const we = uh("MuiTooltip", [
  "popper",
  "popperInteractive",
  "popperArrow",
  "popperClose",
  "tooltip",
  "tooltipArrow",
  "touch",
  "tooltipPlacementLeft",
  "tooltipPlacementRight",
  "tooltipPlacementTop",
  "tooltipPlacementBottom",
  "arrow",
]);
function w5(t) {
  return Math.round(t * 1e5) / 1e5;
}
const E5 = (t) => {
    const {
        classes: r,
        disableInteractive: i,
        arrow: a,
        touch: u,
        placement: s,
      } = t,
      f = {
        popper: ["popper", !i && "popperInteractive", a && "popperArrow"],
        tooltip: [
          "tooltip",
          a && "tooltipArrow",
          u && "touch",
          `tooltipPlacement${ni(s.split("-")[0])}`,
        ],
        arrow: ["arrow"],
      };
    return nh(f, S5, r);
  },
  T5 = No(bx, {
    name: "MuiTooltip",
    slot: "Popper",
    overridesResolver: (t, r) => {
      const { ownerState: i } = t;
      return [
        r.popper,
        !i.disableInteractive && r.popperInteractive,
        i.arrow && r.popperArrow,
        !i.open && r.popperClose,
      ];
    },
  })(
    lc(({ theme: t }) => ({
      zIndex: (t.vars || t).zIndex.tooltip,
      pointerEvents: "none",
      variants: [
        {
          props: ({ ownerState: r }) => !r.disableInteractive,
          style: { pointerEvents: "auto" },
        },
        { props: ({ open: r }) => !r, style: { pointerEvents: "none" } },
        {
          props: ({ ownerState: r }) => r.arrow,
          style: {
            [`&[data-popper-placement*="bottom"] .${we.arrow}`]: {
              top: 0,
              marginTop: "-0.71em",
              "&::before": { transformOrigin: "0 100%" },
            },
            [`&[data-popper-placement*="top"] .${we.arrow}`]: {
              bottom: 0,
              marginBottom: "-0.71em",
              "&::before": { transformOrigin: "100% 0" },
            },
            [`&[data-popper-placement*="right"] .${we.arrow}`]: {
              height: "1em",
              width: "0.71em",
              "&::before": { transformOrigin: "100% 100%" },
            },
            [`&[data-popper-placement*="left"] .${we.arrow}`]: {
              height: "1em",
              width: "0.71em",
              "&::before": { transformOrigin: "0 0" },
            },
          },
        },
        {
          props: ({ ownerState: r }) => r.arrow && !r.isRtl,
          style: {
            [`&[data-popper-placement*="right"] .${we.arrow}`]: {
              left: 0,
              marginLeft: "-0.71em",
            },
          },
        },
        {
          props: ({ ownerState: r }) => r.arrow && !!r.isRtl,
          style: {
            [`&[data-popper-placement*="right"] .${we.arrow}`]: {
              right: 0,
              marginRight: "-0.71em",
            },
          },
        },
        {
          props: ({ ownerState: r }) => r.arrow && !r.isRtl,
          style: {
            [`&[data-popper-placement*="left"] .${we.arrow}`]: {
              right: 0,
              marginRight: "-0.71em",
            },
          },
        },
        {
          props: ({ ownerState: r }) => r.arrow && !!r.isRtl,
          style: {
            [`&[data-popper-placement*="left"] .${we.arrow}`]: {
              left: 0,
              marginLeft: "-0.71em",
            },
          },
        },
      ],
    }))
  ),
  A5 = No("div", {
    name: "MuiTooltip",
    slot: "Tooltip",
    overridesResolver: (t, r) => {
      const { ownerState: i } = t;
      return [
        r.tooltip,
        i.touch && r.touch,
        i.arrow && r.tooltipArrow,
        r[`tooltipPlacement${ni(i.placement.split("-")[0])}`],
      ];
    },
  })(
    lc(({ theme: t }) => ({
      backgroundColor: t.vars
        ? t.vars.palette.Tooltip.bg
        : t.alpha(t.palette.grey[700], 0.92),
      borderRadius: (t.vars || t).shape.borderRadius,
      color: (t.vars || t).palette.common.white,
      fontFamily: t.typography.fontFamily,
      padding: "4px 8px",
      fontSize: t.typography.pxToRem(11),
      maxWidth: 300,
      margin: 2,
      wordWrap: "break-word",
      fontWeight: t.typography.fontWeightMedium,
      [`.${we.popper}[data-popper-placement*="left"] &`]: {
        transformOrigin: "right center",
      },
      [`.${we.popper}[data-popper-placement*="right"] &`]: {
        transformOrigin: "left center",
      },
      [`.${we.popper}[data-popper-placement*="top"] &`]: {
        transformOrigin: "center bottom",
        marginBottom: "14px",
      },
      [`.${we.popper}[data-popper-placement*="bottom"] &`]: {
        transformOrigin: "center top",
        marginTop: "14px",
      },
      variants: [
        {
          props: ({ ownerState: r }) => r.arrow,
          style: { position: "relative", margin: 0 },
        },
        {
          props: ({ ownerState: r }) => r.touch,
          style: {
            padding: "8px 16px",
            fontSize: t.typography.pxToRem(14),
            lineHeight: `${w5(16 / 14)}em`,
            fontWeight: t.typography.fontWeightRegular,
          },
        },
        {
          props: ({ ownerState: r }) => !r.isRtl,
          style: {
            [`.${we.popper}[data-popper-placement*="left"] &`]: {
              marginRight: "14px",
            },
            [`.${we.popper}[data-popper-placement*="right"] &`]: {
              marginLeft: "14px",
            },
          },
        },
        {
          props: ({ ownerState: r }) => !r.isRtl && r.touch,
          style: {
            [`.${we.popper}[data-popper-placement*="left"] &`]: {
              marginRight: "24px",
            },
            [`.${we.popper}[data-popper-placement*="right"] &`]: {
              marginLeft: "24px",
            },
          },
        },
        {
          props: ({ ownerState: r }) => !!r.isRtl,
          style: {
            [`.${we.popper}[data-popper-placement*="left"] &`]: {
              marginLeft: "14px",
            },
            [`.${we.popper}[data-popper-placement*="right"] &`]: {
              marginRight: "14px",
            },
          },
        },
        {
          props: ({ ownerState: r }) => !!r.isRtl && r.touch,
          style: {
            [`.${we.popper}[data-popper-placement*="left"] &`]: {
              marginLeft: "24px",
            },
            [`.${we.popper}[data-popper-placement*="right"] &`]: {
              marginRight: "24px",
            },
          },
        },
        {
          props: ({ ownerState: r }) => r.touch,
          style: {
            [`.${we.popper}[data-popper-placement*="top"] &`]: {
              marginBottom: "24px",
            },
          },
        },
        {
          props: ({ ownerState: r }) => r.touch,
          style: {
            [`.${we.popper}[data-popper-placement*="bottom"] &`]: {
              marginTop: "24px",
            },
          },
        },
      ],
    }))
  ),
  O5 = No("span", { name: "MuiTooltip", slot: "Arrow" })(
    lc(({ theme: t }) => ({
      overflow: "hidden",
      position: "absolute",
      width: "1em",
      height: "0.71em",
      boxSizing: "border-box",
      color: t.vars
        ? t.vars.palette.Tooltip.bg
        : t.alpha(t.palette.grey[700], 0.9),
      "&::before": {
        content: '""',
        margin: "auto",
        display: "block",
        width: "100%",
        height: "100%",
        backgroundColor: "currentColor",
        transform: "rotate(45deg)",
      },
    }))
  );
let as = !1;
const xv = new ac();
let io = { x: 0, y: 0 };
function os(t, r) {
  return (i, ...a) => {
    r && r(i, ...a), t(i, ...a);
  };
}
const C5 = tt.forwardRef(function (r, i) {
  const a = fh({ props: r, name: "MuiTooltip" }),
    {
      arrow: u = !1,
      children: s,
      classes: f,
      components: d = {},
      componentsProps: h = {},
      describeChild: m = !1,
      disableFocusListener: g = !1,
      disableHoverListener: y = !1,
      disableInteractive: b = !1,
      disableTouchListener: v = !1,
      enterDelay: O = 100,
      enterNextDelay: T = 0,
      enterTouchDelay: L = 700,
      followCursor: D = !1,
      id: G,
      leaveDelay: $ = 0,
      leaveTouchDelay: H = 1500,
      onClose: R,
      onOpen: k,
      open: Q,
      placement: C = "bottom",
      PopperComponent: U,
      PopperProps: z = {},
      slotProps: q = {},
      slots: w = {},
      title: B,
      TransitionComponent: N,
      TransitionProps: V,
      ..._
    } = a,
    P = tt.isValidElement(s) ? s : ye.jsx("span", { children: s }),
    nt = ix(),
    pt = Zb(),
    [x, Z] = tt.useState(),
    [J, A] = tt.useState(null),
    ut = tt.useRef(!1),
    st = b || D,
    it = oo(),
    ht = oo(),
    gt = oo(),
    Ct = oo(),
    [Bt, mt] = X4({ controlled: Q, default: !1 });
  let At = Bt;
  const Yt = Jk(G),
    ce = tt.useRef(),
    oe = lv(() => {
      ce.current !== void 0 &&
        ((document.body.style.WebkitUserSelect = ce.current),
        (ce.current = void 0)),
        Ct.clear();
    });
  tt.useEffect(() => oe, [oe]);
  const fe = (Nt) => {
      xv.clear(), (as = !0), mt(!0), k && !At && k(Nt);
    },
    yt = lv((Nt) => {
      xv.start(800 + $, () => {
        as = !1;
      }),
        mt(!1),
        R && At && R(Nt),
        it.start(nt.transitions.duration.shortest, () => {
          ut.current = !1;
        });
    }),
    xt = (Nt) => {
      (ut.current && Nt.type !== "touchstart") ||
        (x && x.removeAttribute("title"),
        ht.clear(),
        gt.clear(),
        O || (as && T)
          ? ht.start(as ? T : O, () => {
              fe(Nt);
            })
          : fe(Nt));
    },
    vt = (Nt) => {
      ht.clear(),
        gt.start($, () => {
          yt(Nt);
        });
    },
    [, ft] = tt.useState(!1),
    Et = (Nt) => {
      ov(Nt.target) || (ft(!1), vt(Nt));
    },
    St = (Nt) => {
      x || Z(Nt.currentTarget), ov(Nt.target) && (ft(!0), xt(Nt));
    },
    kt = (Nt) => {
      ut.current = !0;
      const Gn = P.props;
      Gn.onTouchStart && Gn.onTouchStart(Nt);
    },
    jt = (Nt) => {
      kt(Nt),
        gt.clear(),
        it.clear(),
        oe(),
        (ce.current = document.body.style.WebkitUserSelect),
        (document.body.style.WebkitUserSelect = "none"),
        Ct.start(L, () => {
          (document.body.style.WebkitUserSelect = ce.current), xt(Nt);
        });
    },
    Pt = (Nt) => {
      P.props.onTouchEnd && P.props.onTouchEnd(Nt),
        oe(),
        gt.start(H, () => {
          yt(Nt);
        });
    };
  tt.useEffect(() => {
    if (!At) return;
    function Nt(Gn) {
      Gn.key === "Escape" && yt(Gn);
    }
    return (
      document.addEventListener("keydown", Nt),
      () => {
        document.removeEventListener("keydown", Nt);
      }
    );
  }, [yt, At]);
  const F = Bi(ph(P), Z, i);
  !B && B !== 0 && (At = !1);
  const ot = tt.useRef(),
    wt = (Nt) => {
      const Gn = P.props;
      Gn.onMouseMove && Gn.onMouseMove(Nt),
        (io = { x: Nt.clientX, y: Nt.clientY }),
        ot.current && ot.current.update();
    },
    Tt = {},
    Dt = typeof B == "string";
  m
    ? ((Tt.title = !At && Dt && !y ? B : null),
      (Tt["aria-describedby"] = At ? Yt : null))
    : ((Tt["aria-label"] = Dt ? B : null),
      (Tt["aria-labelledby"] = At && !Dt ? Yt : null));
  const ue = {
      ...Tt,
      ..._,
      ...P.props,
      className: $l(_.className, P.props.className),
      onTouchStart: kt,
      ref: F,
      ...(D ? { onMouseMove: wt } : {}),
    },
    Xt = {};
  v || ((ue.onTouchStart = jt), (ue.onTouchEnd = Pt)),
    y ||
      ((ue.onMouseOver = os(xt, ue.onMouseOver)),
      (ue.onMouseLeave = os(vt, ue.onMouseLeave)),
      st || ((Xt.onMouseOver = xt), (Xt.onMouseLeave = vt))),
    g ||
      ((ue.onFocus = os(St, ue.onFocus)),
      (ue.onBlur = os(Et, ue.onBlur)),
      st || ((Xt.onFocus = St), (Xt.onBlur = Et)));
  const me = {
      ...a,
      isRtl: pt,
      arrow: u,
      disableInteractive: st,
      placement: C,
      PopperComponentProp: U,
      touch: ut.current,
    },
    Le = typeof q.popper == "function" ? q.popper(me) : q.popper,
    ke = tt.useMemo(() => {
      let Nt = [
        { name: "arrow", enabled: !!J, options: { element: J, padding: 4 } },
      ];
      return (
        z.popperOptions?.modifiers &&
          (Nt = Nt.concat(z.popperOptions.modifiers)),
        Le?.popperOptions?.modifiers &&
          (Nt = Nt.concat(Le.popperOptions.modifiers)),
        { ...z.popperOptions, ...Le?.popperOptions, modifiers: Nt }
      );
    }, [J, z.popperOptions, Le?.popperOptions]),
    ge = E5(me),
    Ie = typeof q.transition == "function" ? q.transition(me) : q.transition,
    Ze = {
      slots: {
        popper: d.Popper,
        transition: d.Transition ?? N,
        tooltip: d.Tooltip,
        arrow: d.Arrow,
        ...w,
      },
      slotProps: {
        arrow: q.arrow ?? h.arrow,
        popper: { ...z, ...(Le ?? h.popper) },
        tooltip: q.tooltip ?? h.tooltip,
        transition: { ...V, ...(Ie ?? h.transition) },
      },
    },
    [Uo, jo] = ls("popper", {
      elementType: T5,
      externalForwardedProps: Ze,
      ownerState: me,
      className: $l(ge.popper, z?.className),
    }),
    [Wl, ai] = ls("transition", {
      elementType: Op,
      externalForwardedProps: Ze,
      ownerState: me,
    }),
    [uc, Ho] = ls("tooltip", {
      elementType: A5,
      className: ge.tooltip,
      externalForwardedProps: Ze,
      ownerState: me,
    }),
    [qo, Jl] = ls("arrow", {
      elementType: O5,
      className: ge.arrow,
      externalForwardedProps: Ze,
      ownerState: me,
      ref: A,
    });
  return ye.jsxs(tt.Fragment, {
    children: [
      tt.cloneElement(P, ue),
      ye.jsx(Uo, {
        as: U ?? bx,
        placement: C,
        anchorEl: D
          ? {
              getBoundingClientRect: () => ({
                top: io.y,
                left: io.x,
                right: io.x,
                bottom: io.y,
                width: 0,
                height: 0,
              }),
            }
          : x,
        popperRef: ot,
        open: x ? At : !1,
        id: Yt,
        transition: !0,
        ...Xt,
        ...jo,
        popperOptions: ke,
        children: ({ TransitionProps: Nt }) =>
          ye.jsx(Wl, {
            timeout: nt.transitions.duration.shorter,
            ...Nt,
            ...ai,
            children: ye.jsxs(uc, {
              ...Ho,
              children: [B, u ? ye.jsx(qo, { ...Jl }) : null],
            }),
          }),
      }),
    ],
  });
});
function k5(t) {
  return new DOMParser().parseFromString(t, "text/html").body.textContent;
}
async function _5(t) {
  try {
    const i = await (
      await fetch(
        `https://en.wiktionary.org/api/rest_v1/page/definition/${t}?redirect=false`
      )
    ).json();
    i.en?.sort((s, f) =>
      s.partOfSpeech === "Symbol" && f.partOfSpeech !== "Symbol"
        ? 1
        : s.partOfSpeech !== "Symbol" && f.partOfSpeech === "Symbol"
        ? -1
        : 0
    );
    const u = i.en[0].definitions.find((s) => !!s.definition)?.definition;
    return (u && k5(u)) || void 0;
  } catch {
    return;
  }
}
function R5({ word: t }) {
  const [r, i] = tt.useState({}),
    a = r[t],
    u = tt.useCallback(async () => {
      if (!r[t])
        try {
          const s = (await _5(t)) ?? "Unable to find definition";
          i((f) => ({ ...f, [t]: s }));
        } catch {
          i((s) => ({ ...s, [t]: "Unable to fetch definition" }));
        }
    }, [r, t]);
  return dt("div", {
    className: "definition",
    css: z5,
    children: dt(M5, {
      title: a ?? "...",
      enterTouchDelay: 0,
      leaveTouchDelay: 7e3,
      onOpen: u,
      children: dt("button", { children: dt(Q4, {}) }),
    }),
  });
}
const M5 = zs(({ className: t, ...r }) =>
    dt(C5, { ...r, classes: { popper: t } })
  )(() => ({
    [`& .${we.tooltip}`]: {
      backgroundColor: "#ccc",
      color: "rgba(0, 0, 0, 0.87)",
      fontSize: 16,
      marginRight: 12,
    },
  })),
  z5 = ve`
  position: absolute;
  right: 16px;
  top: 16px;
  z-index: 1000;
  width: 42px;
  height: 42px;

  button {
    min-width: 0px;
    width: 100%;
    height: 100%;
    background: none;
    border: none;
    margin: 0;
    padding: 0;
  }

  svg {
    width: 100%;
    height: 100%;
    color: #444;
  }
`,
  Sv = dh(
    ye.jsx("path", {
      d: "M11.59 7.41 15.17 11H1v2h14.17l-3.59 3.59L13 18l6-6-6-6zM20 6v12h2V6z",
    })
  ),
  D5 = "Left",
  N5 = "Right",
  B5 = "Up",
  L5 = "Down",
  zl = {
    delta: 10,
    preventScrollOnSwipe: !1,
    rotationAngle: 0,
    trackMouse: !1,
    trackTouch: !0,
    swipeDuration: 1 / 0,
    touchEventOptions: { passive: !0 },
  },
  Rp = { first: !0, initial: [0, 0], start: 0, swiping: !1, xy: [0, 0] },
  wv = "mousemove",
  Ev = "mouseup",
  U5 = "touchend",
  j5 = "touchmove",
  H5 = "touchstart";
function q5(t, r, i, a) {
  return t > r ? (i > 0 ? N5 : D5) : a > 0 ? L5 : B5;
}
function Tv(t, r) {
  if (r === 0) return t;
  const i = (Math.PI / 180) * r,
    a = t[0] * Math.cos(i) + t[1] * Math.sin(i),
    u = t[1] * Math.cos(i) - t[0] * Math.sin(i);
  return [a, u];
}
function P5(t, r) {
  const i = (g) => {
      const y = "touches" in g;
      (y && g.touches.length > 1) ||
        t((b, v) => {
          v.trackMouse &&
            !y &&
            (document.addEventListener(wv, a),
            document.addEventListener(Ev, f));
          const { clientX: O, clientY: T } = y ? g.touches[0] : g,
            L = Tv([O, T], v.rotationAngle);
          return (
            v.onTouchStartOrOnMouseDown &&
              v.onTouchStartOrOnMouseDown({ event: g }),
            Object.assign(Object.assign(Object.assign({}, b), Rp), {
              initial: L.slice(),
              xy: L,
              start: g.timeStamp || 0,
            })
          );
        });
    },
    a = (g) => {
      t((y, b) => {
        const v = "touches" in g;
        if (v && g.touches.length > 1) return y;
        if (g.timeStamp - y.start > b.swipeDuration)
          return y.swiping
            ? Object.assign(Object.assign({}, y), { swiping: !1 })
            : y;
        const { clientX: O, clientY: T } = v ? g.touches[0] : g,
          [L, D] = Tv([O, T], b.rotationAngle),
          G = L - y.xy[0],
          $ = D - y.xy[1],
          H = Math.abs(G),
          R = Math.abs($),
          k = (g.timeStamp || 0) - y.start,
          Q = Math.sqrt(H * H + R * R) / (k || 1),
          C = [G / (k || 1), $ / (k || 1)],
          U = q5(H, R, G, $),
          z =
            typeof b.delta == "number"
              ? b.delta
              : b.delta[U.toLowerCase()] || zl.delta;
        if (H < z && R < z && !y.swiping) return y;
        const q = {
          absX: H,
          absY: R,
          deltaX: G,
          deltaY: $,
          dir: U,
          event: g,
          first: y.first,
          initial: y.initial,
          velocity: Q,
          vxvy: C,
        };
        q.first && b.onSwipeStart && b.onSwipeStart(q),
          b.onSwiping && b.onSwiping(q);
        let w = !1;
        return (
          (b.onSwiping || b.onSwiped || b[`onSwiped${U}`]) && (w = !0),
          w &&
            b.preventScrollOnSwipe &&
            b.trackTouch &&
            g.cancelable &&
            g.preventDefault(),
          Object.assign(Object.assign({}, y), {
            first: !1,
            eventData: q,
            swiping: !0,
          })
        );
      });
    },
    u = (g) => {
      t((y, b) => {
        let v;
        if (y.swiping && y.eventData) {
          if (g.timeStamp - y.start < b.swipeDuration) {
            (v = Object.assign(Object.assign({}, y.eventData), { event: g })),
              b.onSwiped && b.onSwiped(v);
            const O = b[`onSwiped${v.dir}`];
            O && O(v);
          }
        } else b.onTap && b.onTap({ event: g });
        return (
          b.onTouchEndOrOnMouseUp && b.onTouchEndOrOnMouseUp({ event: g }),
          Object.assign(Object.assign(Object.assign({}, y), Rp), {
            eventData: v,
          })
        );
      });
    },
    s = () => {
      document.removeEventListener(wv, a), document.removeEventListener(Ev, f);
    },
    f = (g) => {
      s(), u(g);
    },
    d = (g, y) => {
      let b = () => {};
      if (g && g.addEventListener) {
        const v = Object.assign(
            Object.assign({}, zl.touchEventOptions),
            y.touchEventOptions
          ),
          O = [
            [H5, i, v],
            [
              j5,
              a,
              Object.assign(
                Object.assign({}, v),
                y.preventScrollOnSwipe ? { passive: !1 } : {}
              ),
            ],
            [U5, u, v],
          ];
        O.forEach(([T, L, D]) => g.addEventListener(T, L, D)),
          (b = () => O.forEach(([T, L]) => g.removeEventListener(T, L)));
      }
      return b;
    },
    m = {
      ref: (g) => {
        g !== null &&
          t((y, b) => {
            if (y.el === g) return y;
            const v = {};
            return (
              y.el &&
                y.el !== g &&
                y.cleanUpTouch &&
                (y.cleanUpTouch(), (v.cleanUpTouch = void 0)),
              b.trackTouch && g && (v.cleanUpTouch = d(g, b)),
              Object.assign(Object.assign(Object.assign({}, y), { el: g }), v)
            );
          });
      },
    };
  return r.trackMouse && (m.onMouseDown = i), [m, d];
}
function $5(t, r, i, a) {
  return !r.trackTouch || !t.el
    ? (t.cleanUpTouch && t.cleanUpTouch(),
      Object.assign(Object.assign({}, t), { cleanUpTouch: void 0 }))
    : t.cleanUpTouch
    ? r.preventScrollOnSwipe !== i.preventScrollOnSwipe ||
      r.touchEventOptions.passive !== i.touchEventOptions.passive
      ? (t.cleanUpTouch(),
        Object.assign(Object.assign({}, t), { cleanUpTouch: a(t.el, r) }))
      : t
    : Object.assign(Object.assign({}, t), { cleanUpTouch: a(t.el, r) });
}
function V5(t) {
  const { trackMouse: r } = t,
    i = tt.useRef(Object.assign({}, Rp)),
    a = tt.useRef(Object.assign({}, zl)),
    u = tt.useRef(Object.assign({}, a.current));
  (u.current = Object.assign({}, a.current)),
    (a.current = Object.assign(Object.assign({}, zl), t));
  let s;
  for (s in zl) a.current[s] === void 0 && (a.current[s] = zl[s]);
  const [f, d] = tt.useMemo(
    () => P5((h) => (i.current = h(i.current, a.current)), { trackMouse: r }),
    [r]
  );
  return (i.current = $5(i.current, a.current, u.current, d)), f;
}
function Y5() {
  const t = tt.useState(!1),
    [r, i] = t;
  return (
    tt.useEffect(() => {
      if (r) {
        const a = setTimeout(() => {
          i(!1);
        }, 600);
        return () => {
          clearTimeout(a);
        };
      }
    }, [r, i]),
    t
  );
}
function G5({ index: t }) {
  const {
      words: r,
      submitWord: i,
      score: a,
      nextLevelScore: u,
      settings: s,
      showHand: f,
    } = nn(),
    d = r[t],
    [h, m] = Y5(),
    g = () => {
      d.maxWordLength > 0 &&
        d.tiles.length === d.maxWordLength &&
        (i(t), m(!0));
    },
    y = V5({
      onSwiped: (D) => {
        D.dir === "Right" && g();
      },
      onTap: () => g(),
      trackMouse: !0,
    }),
    b = Ms(d.currentLength, 0),
    v = Ms(d.currentMultiplier, 0);
  if (!d) return null;
  const O = d.tiles.length > 0 && d.tiles.length === d.maxWordLength,
    T = O && d.currentScore >= u - a,
    L = d.isLocked;
  return dt("div", {
    css: I5,
    className: Qe({ shutter: h }),
    children: Ce("div", {
      className: Qe("handle", { valid: O, good: T, blocked: L }),
      ...y,
      children: [
        dt("span", { className: "current-score", children: b }),
        dt("div", { className: Qe("arrow"), children: dt(X5, { count: 1 }) }),
        Ce("span", { className: "current-multiplier", children: ["x", v] }),
        !!s.wordStrikes &&
          dt("span", {
            className: "strikes",
            children: new Array(s.wordStrikes).fill(0).map((D, G) => {
              if (!f) return null;
              const $ = G < d.strikes;
              return dt(
                "span",
                {
                  className: Qe({ failure: $ && d.strikes > 1 }),
                  children: $ ? "X" : " ",
                },
                G
              );
            }),
          }),
      ],
    }),
  });
}
function X5({ count: t }) {
  const r = tt.useMemo(() => new Array(Math.max(t - 1, 0)).fill(0), [t]);
  return Ce("div", {
    css: Q5,
    children: [
      t > 1 &&
        dt("div", {
          className: "reserve",
          children: r.map((i, a) => dt(Sv, {}, a)),
        }),
      t > 0 && dt("div", { className: "current", children: dt(Sv, {}) }),
    ],
  });
}
const Q5 = ve`
  display: flex;
  flex-grow: 1;
  align-items: center;
  height: 100%;
  width: 100%;

  svg {
    display: block;
    color: #333;
  }

  .reserve {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    height: 100%;
    justify-content: center;
    gap: 8px;
  }

  .current {
    display: flex;
    align-items: center;
    flex-grow: 4;
    height: 100%;

    svg {
      flex-grow: 1;
      height: 100%;
    }
  }
`,
  I5 = ve`
  display: flex;
  position: absolute;
  width: 100%;
  height: 100%;
  right: calc(100% - 96px);
  border-right: 8px solid #333;
  justify-content: end;
  background-color: #aaa;

  transition: right 600ms ease, border-right 600ms ease;

  &.shutter {
    right: 0;
  }

  &.shop-mode {
    right: 0;
    border-right: none;
    background-color: #3d9970;
  }

  .shop {
    display: flex;
    flex-grow: 1;
    flex-direction: column;
    padding: 0 12px;

    span {
      font-size: 32px;
      padding: 12px 0;
      text-align: center;
    }

    .inventory {
      display: flex;
      justify-content: space-between;
    }
  }

  .powerup-drop {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 6px;
    .icon-container {
      width: 80px;
      height: 80px;
      border: 4px dotted #333;

      svg {
        width: 80%;
        height: 80%;
        padding: 10%;
        color: #333;
      }
    }

    &.disabled {
      opacity: 0.3;
    }

    span {
      font-size: 32px;
      color: #333;
      font-family: monospace;
      padding: 0;
    }
  }

  .handle {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    width: 96px;
    height: 100%;
    padding: 12px;
    border-left: 8px solid #333;
    box-sizing: border-box;

    transition: background-color 500ms ease;
    background-color: rgba(0, 0, 0, 0);

    &.isShop {
      .word-score {
        opacity: 0;
      }

      .arrow {
        opacity: 1;
      }

      .word-money {
        opacity: 0;
      }
    }

    &.valid {
      background-color: #3d9970;

      .arrow {
        opacity: 1;
      }
    }

    &.good {
      background-color: #3d9970;

      .arrow {
        opacity: 1;
      }
    }

    &.blocked {
      opacity: 0.5;
      background-color: rgba(0, 0, 0, 0.4);
    }
  }

  .word-score {
    font-family: monospace;
    font-size: 32px;
    color: #333;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .word-money {
    font-family: monospace;
    font-size: 28px;
    color: #333;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .powerup-holder {
    background-color: rgba(0, 0, 0, 0.1);

    svg {
      width: 100%;
      height: 100%;
      color: #333;
    }
  }

  .arrow {
    opacity: 0.3;
    flex-grow: 1;
    width: 100%;

    &.close svg {
      height: 100%;
      flex-grow: 1;
      width: 100%;
    }
  }

  .current-score {
    font-size: 36px;
    font-family: monospace;
    background-color: rgba(0, 0, 0, 0.2);
    border-radius: 8px;
    color: #333;
    width: 50px;
    height: 50px;
    /* margin-top: 20px; */
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
  }

  .current-multiplier {
    font-size: 24px;
    font-family: monospace;
    background-color: rgba(0, 0, 0, 0.2);
    border-radius: 8px;
    color: #333;
    width: 50px;
    height: 50px;
    /* margin-top: 20px; */
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
  }

  .strikes {
    font-size: 30px;
    font-family: monospace;
    color: #333;
    width: 50px;
    height: 24px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;

    .failure {
      color: #942910;
    }
  }

  .word-score,
  .powerup-holder {
    border: 4px solid rgba(0, 0, 0, 0.2);
    width: 48px;
    height: 48px;
  }
`,
  Z5 = dh(
    ye.jsx("path", {
      d: "M22 3H7c-.69 0-1.23.35-1.59.88L0 12l5.41 8.11c.36.53.9.89 1.59.89h15c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m-3 12.59L17.59 17 14 13.41 10.41 17 9 15.59 12.59 12 9 8.41 10.41 7 14 10.59 17.59 7 19 8.41 15.41 12z",
    })
  );
function K5({ index: t }) {
  const { backspaceWord: r, showHand: i, words: a } = nn(),
    u = i && a[t].tiles.length > 0,
    s = () => {
      r(t);
    };
  return dt("div", {
    css: F5,
    className: Qe({ hidden: !u }),
    onClick: s,
    children: dt(Z5, {}),
  });
}
const F5 = ve`
  position: absolute;
  right: 16px;
  bottom: 16px;
  z-index: 1000;
  width: 42px;
  height: 42px;

  opacity: 1;
  transition: opacity 400ms ease;
  &.hidden {
    opacity: 0;
    pointer-events: none;
  }

  svg {
    width: 100%;
    height: 100%;
    color: #444;
  }
`,
  W5 = 5;
function Kd({ index: t }) {
  const {
      score: r,
      nextLevelScore: i,
      tileMap: a,
      words: u,
      addToWord: s,
      settings: f,
      showHand: d,
    } = nn(),
    { selectedTileId: h, setSelectedTileId: m } = _o(),
    g = u[t],
    [y, b] = tt.useState(!1);
  tt.useEffect(() => {
    if (g?.lastRejectedTileId) {
      b(!0);
      const D = setTimeout(() => {
        b(!1);
      }, 500);
      return () => {
        clearTimeout(D);
      };
    }
  }, [g?.lastRejectedTileId]);
  const v = tt.useMemo(() => {
    const D = Math.max(W5, (g?.tiles.length ?? 0) + 1);
    return new Array(D).fill(0);
  }, [g?.tiles.length]);
  if (!g) return null;
  const O =
      g.maxWordLength >= f.minWordLength && g.maxWordLength === g.tiles.length,
    T = O && g.currentScore >= i - r,
    L =
      g.maxWordLength >= f.minWordLength && g.maxWordLength === g.tiles.length
        ? g.tiles
            .map((D) => a[D].value)
            .slice(0, g.maxWordLength)
            .join("")
        : "";
  return Ce("div", {
    className: Qe(
      { locked: g.isLocked, valid: O, good: T, rejected: y },
      "word"
    ),
    css: e6,
    onClick: (D) => {
      (D.target instanceof Element &&
        (D.target.closest(".definition") !== null ||
          D.target.closest(".handle") !== null)) ||
        g.isLocked ||
        (h !== void 0 && (s(h, t), m(void 0)));
    },
    children: [
      dt("div", {
        className: "tiles",
        children: v.map((D, G) => {
          const $ = f.lengthScores[Math.min(G, f.lengthScores.length - 1)];
          return dt(
            "div",
            {
              css: n6,
              className: Qe({
                filled: g.tiles[G] && g.tiles[G] !== h,
                focused: G === g.tiles.length,
              }),
              children: Ce("div", {
                css: r6,
                children: [
                  dt(wo, {
                    placeId: ei("word", t, G),
                    interactable: G === g.tiles.length - 1,
                  }),
                  dt("p", { className: "points", children: "" }),
                  $ > 1 &&
                    dt("p", {
                      className: Qe("scoreValue", { handVisible: d }),
                      children: $,
                    }),
                  dt("div", { className: "border-inset" }),
                ],
              }),
            },
            G
          );
        }),
      }),
      dt(G5, { index: t }),
      dt(K5, { index: t }),
      L && dt(R5, { word: L }),
      dt(J5, { lastScore: g.lastScore }),
    ],
  });
}
function J5({ lastScore: t }) {
  const [r, i] = tt.useState();
  return (
    tt.useEffect(() => {
      i(t);
      const a = setTimeout(() => {
        i(void 0);
      }, 2e3);
      return () => {
        clearTimeout(a);
      };
    }, [t]),
    Ce("div", {
      css: t6,
      className: Qe({ active: !!r }),
      children: [
        dt("div", { className: "text", children: r?.text }),
        r?.subtext &&
          Ce("div", {
            className: "subtext",
            children: [
              dt("div", { children: r.subtext }),
              dt("div", {
                className: "description",
                children: "Tile Overflow Bonus",
              }),
            ],
          }),
      ],
    })
  );
}
const t6 = ve`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  font-size: 64px;
  opacity: 0;
  color: #ccc;
  font-family: monospace;
  paint-order: stroke fill;
  -webkit-text-stroke: 16px #333;

  @keyframes custom-fade-move {
    0% {
      opacity: 0;
      transform: translateY(0);
    }

    15% {
      opacity: 1;
    }

    30% {
    }

    80% {
      opacity: 1;
    }

    100% {
      opacity: 0;
      transform: translateY(-16px);
    }
  }

  &.active {
    animation-name: custom-fade-move;
    animation-duration: 2000ms;
    animation-timing-function: ease-in-out;
    animation-iteration-count: 1;
  }

  .text {
    flex-grow: 2;
    text-align: center;
  }

  .subtext {
    display: flex;
    flex-direction: column;
    width: 350px;
    font-size: 48px;
    margin-right: 96px;

    .description {
      font-size: 24px;
    }
  }
`,
  e6 = ve`
  position: relative;
  overflow: hidden;
  height: 200px;
  width: 940px;
  border: 8px solid black;
  border-radius: 12px;
  margin: 0 48px;

  .tiles {
    position: absolute;
    left: 96px;
    top: 0;
    width: calc(100% - 96px);
    height: 100%;
    display: flex;
    justify-content: left;
    align-items: center;
    gap: 12px;
    padding: 0 16px;
    box-sizing: border-box;

    &.powerup {
      left: 100%;
    }
  }

  transition: background-color 500ms ease;

  &.locked {
    background-color: rgba(0, 0, 0, 0.2);
  }

  &.valid {
    background-color: #86a191;
  }

  &.good {
    background-color: #86a191;
  }

  &.rejected {
    background-color: #f35e4b;
  }
  /* 



  &.locked.valid {
    background-color: #3d9970;
  }

  &.locked.valid.good {
    background-color: #3d9970;
  } */
`,
  n6 = ve`
  position: relative;
  max-width: 160px;
  /* flex-grow: 1;
  height: 100%; */
  flex: 1 1 0;
  min-width: 0; /* allows the item to shrink */
  position: relative;
  transition: opacity 600ms ease;

  &.filled {
    opacity: 0;
  }

  &.focused {
    .scoreValue {
      &.handVisible {
        opacity: 1;
      }
    }
  }

  &.focused .border-inset {
    /* border-style: solid; */
    background-color: rgba(0, 0, 0, 0.1);
  }

  .points {
    position: absolute;
    left: 0;
    top: 0;
    margin: 0;
    padding-left: 8px;
    padding-top: 4px;
    font-size: 32px;
    color: #666;
    font-family: monospace;
  }

  .scoreValue {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 48px;
    color: #777;
    font-family: monospace;
    margin: 0;
    opacity: 0;
    transition: opacity 800ms ease;

    &.handVisible {
      opacity: 0.35;
    }
  }

  .powerup {
    position: absolute;
    left: 0;
    top: 0;
    width: 95%;
    height: 95%;
    box-sizing: border-box;
    padding: 16%;
    color: #666;

    svg {
      width: 100%;
      height: 100%;
    }
  }

  &::before {
    content: "";
    display: block;
    padding-top: 100%; /* creates the 1:1 aspect ratio */
  }
`,
  r6 = ve`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;

  .border-inset {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    border: 4px dotted #666;
    pointer-events: none;
    transition: background-color 300ms ease;
  }
`,
  i6 = [
    [],
    [5],
    [3, 7],
    [3, 5, 7],
    [1, 3, 7, 9],
    [1, 3, 5, 7, 9],
    [0, 2, 4, 6, 8, 10],
  ];
function l6({ score: t }) {
  return dt("div", {
    css: u6,
    children: i6[t].map((r) => dt(o6, { index: r }, r)),
  });
}
const a6 = [
  { left: 20, top: 15 },
  { left: 20, top: 20 },
  { left: 20, top: 40 },
  { left: 20, top: 60 },
  { left: 20, top: 65 },
  { left: 40, top: 40 },
  { left: 60, top: 15 },
  { left: 60, top: 20 },
  { left: 60, top: 40 },
  { left: 60, top: 60 },
  { left: 60, top: 65 },
].map((t) => ({ left: `${t.left}%`, top: `${t.top}%` }));
function o6({ index: t }) {
  return dt("div", { className: "pip", style: a6[t] });
}
const u6 = ve`
  position: relative;
  width: 1000%;
  height: 1000%;
  pointer-events: none;
  transform: scale(0.1);
  transform-origin: top left;

  .pip {
    position: absolute;
    width: 15%;
    height: 15%;
    background-color: rgba(255, 255, 255, 0.3);
    border-radius: 50%;
    transform: scale(1.3);
  }
`,
  s6 = { x: 490, y: 2e3, width: 100, height: 100 },
  Dl = 100;
function c6(t, r) {
  return { x: t.x - r.x, y: t.y - r.y, width: t.width, height: t.height };
}
function f6(t) {
  const r = nn(),
    i = _o(),
    [a, u] = tt.useState(0),
    [s, f] = tt.useState(s6);
  return (
    tt.useEffect(() => {
      u((d) => d + 1);
    }, [r, i]),
    tt.useEffect(() => {
      const d = () => {
        u((h) => h + 1);
      };
      return (
        window.addEventListener("resize", d),
        () => {
          window.removeEventListener("resize", d);
        }
      );
    }, []),
    tt.useEffect(() => {
      t &&
        f(
          c6(
            t.getBoundingClientRect(),
            document.getElementById("world-container").getBoundingClientRect()
          )
        );
    }, [t, a]),
    s
  );
}
const Av = 0.7256;
function d6(t, r) {
  if (!r || t > Av) return t;
  const i = Math.sqrt(r.x * r.x + r.y * r.y),
    a = Av - t,
    u = Math.min(i / 40, 1) * a;
  return t + u;
}
function p6(t, r) {
  const i = d6(Math.min(t.width / Dl, t.height / Dl), r),
    a = (t.width - Dl * i) / 2 + (r?.x ?? 0),
    u = (t.height - Dl * i) / 2 + (r?.y ?? 0);
  return `translate(${t.x + a}px, ${t.y + u}px) scale(${i})`;
}
function h6({ tileId: t, placeId: r }) {
  const { tileMap: i, settings: a } = nn(),
    { placeMap: u } = Hb(),
    s = u[r] ?? u.queue,
    f = i[t],
    d = f.kind === "wild",
    h = a.letterBonusTierValues[a.letterBonusTiers[f.pointValue]] ?? 0,
    { selectedTileId: m, pointerDelta: g, setSelectedTileId: y } = _o(),
    b = m === t,
    v = b ? g : void 0,
    O = f6(s.element),
    T = !u[r],
    L = f.value === "." ? "" : f.value,
    D = tt.useMemo(
      () => ({ transform: p6(O, v), opacity: s.opacity ?? 1 }),
      [O, v, s.opacity]
    );
  return Ce("div", {
    className: Qe({
      wild: d,
      emptyWild: d && f.value === ".",
      selected: b,
      hidden: T,
      interactable: s.interactable,
    }),
    css: g6,
    style: D,
    onPointerDown: () => {
      s.interactable && y(t);
    },
    children: [L, dt(m6, { score: h })],
  });
}
function m6({ score: t }) {
  const { settings: r } = nn();
  return t === 0
    ? null
    : r.scoringSystem === "classic"
    ? Ce("span", { className: "score", children: ["+", t] })
    : dt("div", { className: "dice", children: dt(l6, { score: t }) });
}
const g6 = ve`
  position: absolute;
  z-index: 1;
  left: 0;
  top: 0;
  width: ${Dl}px;
  height: ${Dl}px;
  font-size: 56px;
  color: #ccc;
  background-color: #333;
  /* border-color: #333; */
  border-radius: 4px;
  transition: transform 400ms ease-in-out, border 400ms ease-in-out,
    opacity 800ms ease-in-out, box-shadow 400ms ease;
  transform-origin: top left;
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
  box-sizing: border-box;

  .score {
    position: absolute;
    right: 8px;
    bottom: 4px;
    font-size: 24px;
    font-family: monospace;
    color: #999;
  }

  .dice {
    position: absolute;
    width: 32px;
    height: 32px;
    right: 0;
    bottom: 0;
  }

  &.emptyWild {
    font-size: 32px;
    /* background-color: #055254 !important; */
  }

  &.interactable {
    box-shadow: 0px 6px 11px 2px #444;
    background-color: #0e2741;
  }

  &.wild {
    /* background-color: #055254; */
  }

  &.selected {
    box-shadow: 0px 0px 11px 2px #0074d9;
    z-index: 100000;
    transition: border 400ms ease-in-out, opacity 400ms ease-in-out,
      box-shadow 400ms ease;
  }

  &.deemphasized {
    opacity: 0.7;
  }

  &.bag-position-3 {
    opacity: 0.58;
  }

  &.bag-position-4 {
    opacity: 0.48;
  }

  &.hidden {
    opacity: 0 !important;
  }
`;
function y6() {
  const { words: t, bags: r, trashTiles: i } = nn();
  return tt.useMemo(() => {
    const a = [];
    for (let u = 0; u < r.length; u++)
      for (let s = 0; s < r[u].length; s++)
        a.push({ tileId: r[u][s], placeId: ei("bag", u, s) });
    for (let u = 0; u < t.length; u++)
      for (let s = 0; s < t[u].tiles.length; s++)
        a.push({ tileId: t[u].tiles[s], placeId: ei("word", u, s) });
    for (const u of i) a.push({ tileId: u, placeId: ei("trash") });
    return a.sort((u, s) => u.tileId.localeCompare(s.tileId)), a;
  }, [r, i, t]);
}
function v6() {
  const t = y6();
  return dt(T2, {
    children: t.map(({ tileId: r, placeId: i }) =>
      dt(h6, { tileId: r, placeId: i }, r)
    ),
  });
}
function b6() {
  return dt("div", { css: x6, children: dt(wo, { placeId: ei("queue") }) });
}
const x6 = ve`
  position: absolute;
  bottom: -200px;
  left: 490px;
  width: 100px;
  height: 100px;
`;
function S6() {
  const { score: t, level: r, lastLevelScore: i, nextLevelScore: a } = nn(),
    u = Ms(t, 0),
    s = (t - i) / (a - i),
    f = tt.useMemo(() => new Array(r + 1).fill(0), [r]);
  return Ce("div", {
    css: E6,
    children: [
      dt("div", {
        className: "bar",
        children: f.map((d, h) => {
          const m = r > h ? 1 : r === h ? s : 0;
          return dt(w6, { isDead: r > h, progress: m }, h);
        }),
      }),
      Ce("div", {
        className: "content",
        children: [
          Ce("div", {
            className: "top-row",
            children: [
              Ce("strong", {
                className: "level",
                children: ["Level: ", r + 1],
              }),
              Ce("span", { className: "next", children: ["Next: ", a - t] }),
            ],
          }),
          dt("div", { className: "score", children: u }),
        ],
      }),
    ],
  });
}
function w6({ progress: t, isDead: r }) {
  const [i, a] = tt.useState(!1);
  return (
    tt.useEffect(() => {
      const u = setTimeout(() => {
        a(!0);
      }, 600);
      return () => {
        clearTimeout(u);
      };
    }, []),
    dt("div", {
      className: Qe("progress", { dead: r }),
      style: { width: i ? `${t * 100}%` : 0 },
    })
  );
}
const E6 = ve`
  position: relative;
  width: 920px;
  height: 180px;
  /* border: 8px solid #333; */
  font-family: monospace;

  .content {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    color: #333;
    padding: 24px;
    box-sizing: border-box;
  }

  .bar {
    position: absolute;
    background-color: #999;
    border-radius: 16px;
    left: -12px;
    top: -12px;
    width: calc(100% + 24px);
    height: calc(100% + 24px);
    overflow: hidden;

    .progress {
      position: absolute;
      left: 0;
      top: 0;
      height: 100%;
      background-color: #3d9970;

      transition: width 400ms ease;

      @keyframes make-dead {
        0% {
          background-color: #3d9970;
        }

        66% {
          background-color: #3d9970;
        }

        100% {
          background-color: #999;
        }
      }

      &.dead {
        animation-name: make-dead;
        animation-duration: 800ms;
        animation-timing-function: ease-in-out;
        animation-iteration-count: 1;
        animation-fill-mode: forwards;
      }
    }
  }

  .top-row {
    display: flex;
    justify-content: space-between;
    font-size: 48px;

    span {
      margin: 0;
    }
  }

  .score {
    display: flex;
    flex-grow: 1;
    justify-content: center;
    align-items: center;
    font-size: 92px;
    font-weight: bold;
    margin-top: -12px;
  }
`;
function T6() {
  return dt("div", {
    css: A6,
    children: dt(wo, { placeId: ei("trash"), opacity: 0 }),
  });
}
const A6 = ve`
  position: absolute;
  left: -2000px;
  top: 50%;
  width: 100px;
  height: 100px;
`,
  Ov = 1080,
  Cv = 1920;
function O6() {
  const [t, r] = tt.useState("");
  return (
    tt.useEffect(() => {
      const i = () => {
        const u = Math.min(window.innerWidth / Ov, window.innerHeight / Cv),
          s = (window.innerWidth - u * Ov) / 2,
          f = (window.innerHeight - u * Cv) / 2;
        r(`translate(${s}px, ${f}px) scale(${u})`);
      };
      window.addEventListener("resize", i), i();
      const a = setInterval(() => {
        i();
      }, 2e3);
      return () => {
        window.removeEventListener("resize", i), clearInterval(a);
      };
    }, []),
    t
  );
}
function C6() {
  NE();
  const t = O6(),
    { init: r, showHand: i } = nn();
  return (
    tt.useEffect(() => {
      (async () => (
        await r(EE()),
        await new Promise((a) => {
          setTimeout(a, 0);
        })
      ))();
    }, [r]),
    Ce("div", {
      id: "world-container",
      css: k6,
      className: Qe({ handVisible: i }),
      children: [
        Ce("div", {
          css: _6,
          style: { transform: t },
          children: [
            dt(S6, {}),
            dt(Kd, { index: 0 }),
            dt(Kd, { index: 1 }),
            dt(Kd, { index: 2 }),
            dt(h3, {}),
            dt(b6, {}),
            dt(T6, {}),
          ],
        }),
        dt(v6, {}),
      ],
    })
  );
}
const k6 = ve`
  position: absolute;
  left: 0;
  /* top: 0; */
  top: 50px;
  width: 100%;
  height: 100%;

  transition: top 800ms ease;

  &.handVisible {
    top: 0;
  }
`,
  _6 = ve`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 64px;
  justify-content: center;
  position: relative;
  background-color: #aaa;
  padding: 32px;
  box-sizing: border-box;

  width: 1080px;
  height: 1920px;
  position: absolute;
  left: 0;
  top: 0;
  transform-origin: top left;
  /* transform: scale(0.5) translate(-500px, -800px); */
`,
  R6 = new URLSearchParams(window.location.search),
  M6 = R6.has("checker") ? U2 : C6;
R2.createRoot(document.getElementById("root")).render(dt(M6, {}));
