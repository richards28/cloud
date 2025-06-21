(() => {
  "use strict";
  var e, h = {},
    g = {};

  // The Webpack runtime's require function
  function t(e) {
    var r = g[e];
    if (void 0 !== r) return r.exports;
    var a = g[e] = {
      id: e,
      loaded: !1,
      exports: {}
    };
    return h[e].call(a.exports, a, a.exports, t), a.loaded = !0, a.exports
  }

  // Define the modules
  t.m = h,

    // AMD compatibility (throws an error if define is used indirectly)
    t.amdD = function() {
      throw new Error("define cannot be used indirect")
    }, t.amdO = {}, e = [],

    // Webpack's chunk loading and execution logic
    t.O = (r, a, d, n) => {
      // If no chunks are specified, process all pending chunks
      if (!a) {
        var f = 1 / 0;
        for (c = 0; c < e.length; c++) {
          for (var [a, d, n] = e[c], s = !0, b = 0; b < a.length; b++)(!1 & n || f >= n) && Object.keys(t.O).every(p => t.O[p](a[b])) ? a.splice(b--, 1) : (s = !1, n < f && (f = n));
          if (s) {
            e.splice(c--, 1);
            var o = d();
            void 0 !== o && (r = o)
          }
        }
        return r
      }
      // Add the new chunk to the queue, maintaining order by priority
      n = n || 0;
      for (var c = e.length; c > 0 && e[c - 1][2] > n; c--) e[c] = e[c - 1];
      e[c] = [a, d, n]
    },

    // Getter for ECMAScript modules (ESM)
    t.n = e => {
      var r = e && e.__esModule ? () => e.default : () => e;
      return t.d(r, {
        a: r
      }), r
    }, (() => {
      var r, e = Object.getPrototypeOf ? a => Object.getPrototypeOf(a) : a => a.__proto__;
      // Helper for interop with different module systems
      t.t = function(a, d) {
        if (1 & d && (a = this(a)), 8 & d || "object" == typeof a && a && (4 & d && a.__esModule || 16 & d && "function" == typeof a.then)) return a;
        var n = Object.create(null);
        t.r(n);
        var c = {};
        r = r || [null, e({}), e([]), e(e)];
        for (var f = 2 & d && a; "object" == typeof f && !~r.indexOf(f); f = e(f)) Object.getOwnPropertyNames(f).forEach(s => c[s] = () => a[s]);
        return c.default = () => a, t.d(n, c), n
      }
    })(),

    // Define property getters for exports
    t.d = (e, r) => {
      for (var a in r) t.o(r, a) && !t.o(e, a) && Object.defineProperty(e, a, {
        enumerable: !0,
        get: r[a]
      })
    }, t.f = {},

    // Load chunks based on their names
    t.e = e => Promise.all(Object.keys(t.f).reduce((r, a) => (t.f[a](e, r), r), [])),

    // Generate public URL for chunks
    t.u = e => (8592 === e ? "common" : e) + "." + {
      99: "1704dd11331d349e",
      294: "f1bdec18b941eddb",
      340: "a553bd79ca68c67b",
      370: "33480548ce2baf76",
      710: "ae2e53252f1afc5a",
      890: "b0bf30352d55facf",
      1110: "0911918ec91fc703",
      1444: "0ed27ee858c6017d",
      1476: "64e15bb5bc147c1f",
      1766: "a2f313c700bb9889",
      1882: "2a7b06d1ae2bf731",
      1956: "08fed70d78e2f3f9",
      1997: "f48fcd4179ee1e00",
      2018: "ec3367859d9cde7c",
      2037: "d9eb66e2d58d5d62",
      2062: "e5555f1ad40b4719",
      2168: "f080f7091358fa5a",
      2539: "92dc43258fe0ce5b",
      2735: "d2c0347ba227edcc",
      2744: "4120dc2941341d81",
      2815: "f57c1dabc2bf2b95",
      2878: "bbd03e2569db5250",
      3167: "dd4c280818cad742",
      3236: "4e2adab7ee6f4eb9",
      3280: "7252a71f098f7df4",
      3366: "07a1b04f84b50648",
      3425: "df44a47af8ccbab3",
      3431: "51c35745291b4085",
      3455: "7cb1c8834ebecd33",
      3545: "bbdacef5765651f4",
      3642: "f8ae1c0b2ece5867",
      3668: "413b3a4e7b9df1fa",
      3787: "10a93a92416ae43b",
      3988: "19b1271650e7dca5",
      4076: "c91538205175c51a",
      4110: "d30e203ab6009593",
      4145: "01dc59aff9c62321",
      4159: "ded053264a793ec5",
      4612: "1a7ea18b31b60a0d",
      4764: "d225b4945ad8a61e",
      5056: "9a3bfae2c36d779f",
      5093: "06ab6d0d0046aa71",
      5159: "506a68e5f60645c2",
      5263: "f583234273ec544d",
      5585: "0dd8dd1441fe9358",
      5660: "d1a6c5299567b786",
      5700: "f9042fc90d608071",
      5722: "507093241ce3f72a",
      6391: "b3dbb8e238711f23",
      6489: "ab5cfe9a176292e8",
      6496: "29bac85fcf38d65d",
      6703: "c2f7f1e29d7cae1d",
      6858: "a1a39d44b161c216",
      6859: "6508900579156668",
      6894: "0e022225c6f497d2",
      6911: "1e632680ae088a59",
      6983: "809756924bcc8fc8",
      7089: "e5aafe3d748e3cfc",
      7724: "d40fb2f9725ce4d5",
      7726: "0ceb8bbf654b4b63",
      7879: "f3f1345f429bde99",
      8065: "138e432df9875d45",
      8233: "6859c3b2408d4ff2",
      8273: "3a8f612f1981073d",
      8337: "6851de71d16b19bc",
      8393: "c8182bf9398fd6aa",
      8592: "f4585b9ebab10dc6",
      8685: "3b409ba56986e2e6",
      8774: "3586b25ee4a9599a",
      8782: "f711f0e2bb8dfd47",
      8807: "e6cc0eee341e2dae",
      8858: "9230897267e3705d",
      9512: "bf48950e5a915712",
      9530: "009cc42bc7a6c48b",
      9623: "8936f14e3cfa4ed6",
      9971: "4843a6719cd51ab1"
    }[e] + ".js",

    // Mini CSS filename generator (empty in this case)
    t.miniCssF = e => {},

    // Helper for Hybrid Module Definition (HMD)
    t.hmd = e => ((e = Object.create(e)).children || (e.children = []), Object.defineProperty(e, "exports", {
      enumerable: !0,
      set: () => {
        throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: " + e.id)
      }
    }), e),

    // Has own property check
    t.o = (e, r) => Object.prototype.hasOwnProperty.call(e, r), (() => {
      var e = {},
        r = "admin-portal:";
      // Load script method for chunks
      t.l = (a, d, n, c) => {
        if (e[a]) e[a].push(d);
        else {
          var f, s;
          if (void 0 !== n)
            for (var b = document.getElementsByTagName("script"), o = 0; o < b.length; o++) {
              var i = b[o];
              if (i.getAttribute("src") == a || i.getAttribute("data-webpack") == r + n) {
                f = i;
                break
              }
            }
          // Create and append script element if not found
          f || (s = !0, (f = document.createElement("script")).type = "module", f.charset = "utf-8", f.timeout = 120, t.nc && f.setAttribute("nonce", t.nc), f.setAttribute("data-webpack", r + n), f.src = t.tu(a)), e[a] = [d];
          var l = (v, p) => {
              f.onerror = f.onload = null, clearTimeout(u);
              var _ = e[a];
              if (delete e[a], f.parentNode && f.parentNode.removeChild(f), _ && _.forEach(y => y(p)), v) return v(p)
            },
            u = setTimeout(l.bind(null, void 0, {
              type: "timeout",
              target: f
            }), 12e4);
          f.onerror = l.bind(null, f.onerror), f.onload = l.bind(null, f.onload), s && document.head.appendChild(f)
        }
      }
    })(),

    // Define __esModule for ES Modules
    t.r = e => {
      typeof Symbol < "u" && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
        value: "Module"
      }), Object.defineProperty(e, "__esModule", {
        value: !0
      })
    },

    // Node.js module definition
    t.nmd = e => (e.paths = [], e.children || (e.children = []), e), (() => {
      var e;
      // Get trusted types policy
      t.tt = () => (void 0 === e && (e = {
        createScriptURL: r => r
      }, typeof trustedTypes < "u" && trustedTypes.createPolicy && (e = trustedTypes.createPolicy("angular#bundler", e))), e)
    })(),

    // Get trusted script URL
    t.tu = e => t.tt().createScriptURL(e),

    // Public path (empty in this case)
    t.p = "", (() => {
      var e = {
        3666: 0
      };
      // Chunk loading and error handling
      t.f.j = (d, n) => {
        var c = t.o(e, d) ? e[d] : void 0;
        if (0 !== c)
          if (c) n.push(c[2]);
          else if (3666 != d) {
          var f = new Promise((i, l) => c = e[d] = [i, l]);
          n.push(c[2] = f);
          var s = t.p + t.u(d),
            b = new Error;
          t.l(s, i => {
            if (t.o(e, d) && (0 !== (c = e[d]) && (e[d] = void 0), c)) {
              var l = i && ("load" === i.type ? "missing" : i.type),
                u = i && i.target && i.target.src;
              b.message = "Loading chunk " + d + " failed.\n(" + l + ": " + u + ")", b.name = "ChunkLoadError", b.type = l, b.request = u, c[1](b)
            }
          }, "chunk-" + d, d)
        } else e[d] = 0
      }, t.O.j = d => 0 === e[d];
      var r = (d, n) => {
          var b, o, [c, f, s] = n,
            i = 0;
          for (c.some(u => 0 !== e[u]); i < c.length; i++) t.o(e, o = c[i]) && e[o] && e[o][0](), e[o] = 0;
          return t.O(s)
        },
        a = self.webpackChunkadmin_portal = self.webpackChunkadmin_portal || [];
      a.forEach(r.bind(null, 0)), a.push = r.bind(null, a.push.bind(a))
    })(), t.nc = void 0
})();
