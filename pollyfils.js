(self.webpackChunkng_aviator = self.webpackChunkng_aviator || []).push(
  [[429],
  {
    8955: (x, N, n) => {
      'use strict';
      n(1817),
      n(8583);
      const p = 'undefined' != typeof globalThis &&
      globalThis,
      l = 'undefined' != typeof window &&
      window,
      v = 'undefined' != typeof self &&
      'undefined' != typeof WorkerGlobalScope &&
      self instanceof WorkerGlobalScope &&
      self,
      c = p ||
      'undefined' != typeof global &&
      global ||
      l ||
      v,
      g = function (a, ...r) {
        if (g.translate) {
          const i = g.translate(a, r);
          a = i[0],
          r = i[1]
        }
        let s = y(a[0], a.raw[0]);
        for (let i = 1; i < a.length; i++) s += r[i - 1] + y(a[i], a.raw[i]);
        return s
      };
      function y(a, r) {
        return ':' === r.charAt(0) ? a.substring(
          function t(a, r) {
            for (let s = 1, i = 1; s < a.length; s++, i++) if ('\\' === r[i]) i++;
             else if (':' === a[s]) return s;
            throw new Error(`Unterminated $localize metadata block in "${ r }".`)
          }(a, r) + 1
        ) : a
      }
      c.$localize = g,
      n(4124),
      window.global = window
    },
    8583: () => {
      'use strict';
      !function (f) {
        const E = f.performance;
        function O(ge) {
          E &&
          E.mark &&
          E.mark(ge)
        }
        function _(ge, K) {
          E &&
          E.measure &&
          E.measure(ge, K)
        }
        O('Zone');
        const M = f.__Zone_symbol_prefix ||
        '__zone_symbol__';
        function F(ge) {
          return M + ge
        }
        const j = !0 === f[F('forceDuplicateZoneCheck')];
        if (f.Zone) {
          if (j || 'function' != typeof f.Zone.__symbol__) throw new Error('Zone already loaded.');
          return f.Zone
        }
        let V = (
          () => {
            class ge {
              constructor(h, b) {
                this._parent = h,
                this._name = b ? b.name ||
                'unnamed' : '<root>',
                this._properties = b &&
                b.properties ||
                {
                },
                this._zoneDelegate = new J(this, this._parent && this._parent._zoneDelegate, b)
              }
              static assertZonePatched() {
                if (f.Promise !== He.ZoneAwarePromise) throw new Error(
                  'Zone.js has detected that ZoneAwarePromise `(window|global).Promise` has been overwritten.\nMost likely cause is that a Promise polyfill has been loaded after Zone.js (Polyfilling Promise api is not necessary when zone.js is loaded. If you must load one, do so before loading zone.js.)'
                )
              }
              static get root() {
                let h = ge.current;
                for (; h.parent; ) h = h.parent;
                return h
              }
              static get current() {
                return ke.zone
              }
              static get currentTask() {
                return Ge
              }
              static __load_patch(h, b, q = !1) {
                if (He.hasOwnProperty(h)) {
                  if (!q && j) throw Error('Already loaded patch: ' + h)
                } else if (!f['__Zone_disable_' + h]) {
                  const ae = 'Zone:' + h;
                  O(ae),
                  He[h] = b(f, ge, Ye),
                  _(ae, ae)
                }
              }
              get parent() {
                return this._parent
              }
              get name() {
                return this._name
              }
              get(h) {
                const b = this.getZoneWith(h);
                if (b) return b._properties[h]
              }
              getZoneWith(h) {
                let b = this;
                for (; b; ) {
                  if (b._properties.hasOwnProperty(h)) return b;
                  b = b._parent
                }
                return null
              }
              fork(h) {
                if (!h) throw new Error('ZoneSpec required!');
                return this._zoneDelegate.fork(this, h)
              }
              wrap(h, b) {
                if ('function' != typeof h) throw new Error('Expecting function got: ' + h);
                const q = this._zoneDelegate.intercept(this, h, b),
                ae = this;
                return function () {
                  return ae.runGuarded(q, this, arguments, b)
                }
              }
              run(h, b, q, ae) {
                ke = {
                  parent: ke,
                  zone: this
                };
                try {
                  return this._zoneDelegate.invoke(this, h, b, q, ae)
                } finally {
                  ke = ke.parent
                }
              }
              runGuarded(h, b = null, q, ae) {
                ke = {
                  parent: ke,
                  zone: this
                };
                try {
                  try {
                    return this._zoneDelegate.invoke(this, h, b, q, ae)
                  } catch (Fe) {
                    if (this._zoneDelegate.handleError(this, Fe)) throw Fe
                  }
                } finally {
                  ke = ke.parent
                }
              }
              runTask(h, b, q) {
                if (h.zone != this) throw new Error(
                  'A task can only be run in the zone of creation! (Creation: ' + (h.zone || Pe).name + '; Execution: ' + this.name + ')'
                );
                if (h.state === _e && (h.type === ue || h.type === Te)) return;
                const ae = h.state != Ae;
                ae &&
                h._transitionTo(Ae, pe),
                h.runCount++;
                const Fe = Ge;
                Ge = h,
                ke = {
                  parent: ke,
                  zone: this
                };
                try {
                  h.type == Te &&
                  h.data &&
                  !h.data.isPeriodic &&
                  (h.cancelFn = void 0);
                  try {
                    return this._zoneDelegate.invokeTask(this, h, b, q)
                  } catch (Z) {
                    if (this._zoneDelegate.handleError(this, Z)) throw Z
                  }
                } finally {
                  h.state !== _e &&
                  h.state !== Ze &&
                  (
                    h.type == ue ||
                    h.data &&
                    h.data.isPeriodic ? ae &&
                    h._transitionTo(pe, Ae) : (
                      h.runCount = 0,
                      this._updateTaskCount(h, - 1),
                      ae &&
                      h._transitionTo(_e, Ae, _e)
                    )
                  ),
                  ke = ke.parent,
                  Ge = Fe
                }
              }
              scheduleTask(h) {
                if (h.zone && h.zone !== this) {
                  let q = this;
                  for (; q; ) {
                    if (q === h.zone) throw Error(
                      `can not reschedule task to ${ this.name } which is descendants of the original zone ${ h.zone.name }`
                    );
                    q = q.parent
                  }
                }
                h._transitionTo(Le, _e);
                const b = [];
                h._zoneDelegates = b,
                h._zone = this;
                try {
                  h = this._zoneDelegate.scheduleTask(this, h)
                } catch (q) {
                  throw h._transitionTo(Ze, Le, _e),
                  this._zoneDelegate.handleError(this, q),
                  q
                }
                return h._zoneDelegates === b &&
                this._updateTaskCount(h, 1),
                h.state == Le &&
                h._transitionTo(pe, Le),
                h
              }
              scheduleMicroTask(h, b, q, ae) {
                return this.scheduleTask(new $(re, h, b, q, ae, void 0))
              }
              scheduleMacroTask(h, b, q, ae, Fe) {
                return this.scheduleTask(new $(Te, h, b, q, ae, Fe))
              }
              scheduleEventTask(h, b, q, ae, Fe) {
                return this.scheduleTask(new $(ue, h, b, q, ae, Fe))
              }
              cancelTask(h) {
                if (h.zone != this) throw new Error(
                  'A task can only be cancelled in the zone of creation! (Creation: ' + (h.zone || Pe).name + '; Execution: ' + this.name + ')'
                );
                h._transitionTo(Ee, pe, Ae);
                try {
                  this._zoneDelegate.cancelTask(this, h)
                } catch (b) {
                  throw h._transitionTo(Ze, Ee),
                  this._zoneDelegate.handleError(this, b),
                  b
                }
                return this._updateTaskCount(h, - 1),
                h._transitionTo(_e, Ee),
                h.runCount = 0,
                h
              }
              _updateTaskCount(h, b) {
                const q = h._zoneDelegates;
                - 1 == b &&
                (h._zoneDelegates = null);
                for (let ae = 0; ae < q.length; ae++) q[ae]._updateTaskCount(h.type, b)
              }
            }
            return ge.__symbol__ = F,
            ge
          }
        ) ();
        const ee = {
          name: '',
          onHasTask: (ge, K, h, b) => ge.hasTask(h, b),
          onScheduleTask: (ge, K, h, b) => ge.scheduleTask(h, b),
          onInvokeTask: (ge, K, h, b, q, ae) => ge.invokeTask(h, b, q, ae),
          onCancelTask: (ge, K, h, b) => ge.cancelTask(h, b)
        };
        class J {
          constructor(K, h, b) {
            this._taskCounts = {
              microTask: 0,
              macroTask: 0,
              eventTask: 0
            },
            this.zone = K,
            this._parentDelegate = h,
            this._forkZS = b &&
            (b && b.onFork ? b : h._forkZS),
            this._forkDlgt = b &&
            (b.onFork ? h : h._forkDlgt),
            this._forkCurrZone = b &&
            (b.onFork ? this.zone : h._forkCurrZone),
            this._interceptZS = b &&
            (b.onIntercept ? b : h._interceptZS),
            this._interceptDlgt = b &&
            (b.onIntercept ? h : h._interceptDlgt),
            this._interceptCurrZone = b &&
            (b.onIntercept ? this.zone : h._interceptCurrZone),
            this._invokeZS = b &&
            (b.onInvoke ? b : h._invokeZS),
            this._invokeDlgt = b &&
            (b.onInvoke ? h : h._invokeDlgt),
            this._invokeCurrZone = b &&
            (b.onInvoke ? this.zone : h._invokeCurrZone),
            this._handleErrorZS = b &&
            (b.onHandleError ? b : h._handleErrorZS),
            this._handleErrorDlgt = b &&
            (b.onHandleError ? h : h._handleErrorDlgt),
            this._handleErrorCurrZone = b &&
            (b.onHandleError ? this.zone : h._handleErrorCurrZone),
            this._scheduleTaskZS = b &&
            (b.onScheduleTask ? b : h._scheduleTaskZS),
            this._scheduleTaskDlgt = b &&
            (b.onScheduleTask ? h : h._scheduleTaskDlgt),
            this._scheduleTaskCurrZone = b &&
            (b.onScheduleTask ? this.zone : h._scheduleTaskCurrZone),
            this._invokeTaskZS = b &&
            (b.onInvokeTask ? b : h._invokeTaskZS),
            this._invokeTaskDlgt = b &&
            (b.onInvokeTask ? h : h._invokeTaskDlgt),
            this._invokeTaskCurrZone = b &&
            (b.onInvokeTask ? this.zone : h._invokeTaskCurrZone),
            this._cancelTaskZS = b &&
            (b.onCancelTask ? b : h._cancelTaskZS),
            this._cancelTaskDlgt = b &&
            (b.onCancelTask ? h : h._cancelTaskDlgt),
            this._cancelTaskCurrZone = b &&
            (b.onCancelTask ? this.zone : h._cancelTaskCurrZone),
            this._hasTaskZS = null,
            this._hasTaskDlgt = null,
            this._hasTaskDlgtOwner = null,
            this._hasTaskCurrZone = null;
            const q = b &&
            b.onHasTask;
            (q || h && h._hasTaskZS) &&
            (
              this._hasTaskZS = q ? b : ee,
              this._hasTaskDlgt = h,
              this._hasTaskDlgtOwner = this,
              this._hasTaskCurrZone = K,
              b.onScheduleTask ||
              (
                this._scheduleTaskZS = ee,
                this._scheduleTaskDlgt = h,
                this._scheduleTaskCurrZone = this.zone
              ),
              b.onInvokeTask ||
              (
                this._invokeTaskZS = ee,
                this._invokeTaskDlgt = h,
                this._invokeTaskCurrZone = this.zone
              ),
              b.onCancelTask ||
              (
                this._cancelTaskZS = ee,
                this._cancelTaskDlgt = h,
                this._cancelTaskCurrZone = this.zone
              )
            )
          }
          fork(K, h) {
            return this._forkZS ? this._forkZS.onFork(this._forkDlgt, this.zone, K, h) : new V(K, h)
          }
          intercept(K, h, b) {
            return this._interceptZS ? this._interceptZS.onIntercept(this._interceptDlgt, this._interceptCurrZone, K, h, b) : h
          }
          invoke(K, h, b, q, ae) {
            return this._invokeZS ? this._invokeZS.onInvoke(this._invokeDlgt, this._invokeCurrZone, K, h, b, q, ae) : h.apply(b, q)
          }
          handleError(K, h) {
            return !this._handleErrorZS ||
            this._handleErrorZS.onHandleError(this._handleErrorDlgt, this._handleErrorCurrZone, K, h)
          }
          scheduleTask(K, h) {
            let b = h;
            if (this._scheduleTaskZS) this._hasTaskZS &&
            b._zoneDelegates.push(this._hasTaskDlgtOwner),
            b = this._scheduleTaskZS.onScheduleTask(this._scheduleTaskDlgt, this._scheduleTaskCurrZone, K, h),
            b ||
            (b = h);
             else if (h.scheduleFn) h.scheduleFn(h);
             else {
              if (h.type != re) throw new Error('Task is missing scheduleFn.');
              W(h)
            }
            return b
          }
          invokeTask(K, h, b, q) {
            return this._invokeTaskZS ? this._invokeTaskZS.onInvokeTask(this._invokeTaskDlgt, this._invokeTaskCurrZone, K, h, b, q) : h.callback.apply(b, q)
          }
          cancelTask(K, h) {
            let b;
            if (this._cancelTaskZS) b = this._cancelTaskZS.onCancelTask(this._cancelTaskDlgt, this._cancelTaskCurrZone, K, h);
             else {
              if (!h.cancelFn) throw Error('Task is not cancelable');
              b = h.cancelFn(h)
            }
            return b
          }
          hasTask(K, h) {
            try {
              this._hasTaskZS &&
              this._hasTaskZS.onHasTask(this._hasTaskDlgt, this._hasTaskCurrZone, K, h)
            } catch (b) {
              this.handleError(K, b)
            }
          }
          _updateTaskCount(K, h) {
            const b = this._taskCounts,
            q = b[K],
            ae = b[K] = q + h;
            if (ae < 0) throw new Error('More tasks executed then were scheduled.');
            0 != q &&
            0 != ae ||
            this.hasTask(
              this.zone,
              {
                microTask: b.microTask > 0,
                macroTask: b.macroTask > 0,
                eventTask: b.eventTask > 0,
                change: K
              }
            )
          }
        }
        class $ {
          constructor(K, h, b, q, ae, Fe) {
            if (
              this._zone = null,
              this.runCount = 0,
              this._zoneDelegates = null,
              this._state = 'notScheduled',
              this.type = K,
              this.source = h,
              this.data = q,
              this.scheduleFn = ae,
              this.cancelFn = Fe,
              !b
            ) throw new Error('callback is not defined');
            this.callback = b;
            const Z = this;
            this.invoke = K === ue &&
            q &&
            q.useG ? $.invokeTask : function () {
              return $.invokeTask.call(f, Z, this, arguments)
            }
          }
          static invokeTask(K, h, b) {
            K ||
            (K = this),
            Ve++;
            try {
              return K.runCount++,
              K.zone.runTask(K, h, b)
            } finally {
              1 == Ve &&
              ye(),
              Ve--
            }
          }
          get zone() {
            return this._zone
          }
          get state() {
            return this._state
          }
          cancelScheduleRequest() {
            this._transitionTo(_e, Le)
          }
          _transitionTo(K, h, b) {
            if (this._state !== h && this._state !== b) throw new Error(
              `${ this.type } '${ this.source }': can not transition to '${ K }', expecting state '${ h }'${ b ? ' or \'' + b + '\'' : '' }, was '${ this._state }'.`
            );
            this._state = K,
            K == _e &&
            (this._zoneDelegates = null)
          }
          toString() {
            return this.data &&
            void 0 !== this.data.handleId ? this.data.handleId.toString() : Object.prototype.toString.call(this)
          }
          toJSON() {
            return {
              type: this.type,
              state: this.state,
              source: this.source,
              zone: this.zone.name,
              runCount: this.runCount
            }
          }
        }
        const de = F('setTimeout'),
        he = F('Promise'),
        ve = F('then');
        let X,
        Re = [],
        we = !1;
        function W(ge) {
          if (0 === Ve && 0 === Re.length) if (X || f[he] && (X = f[he].resolve(0)), X) {
            let K = X[ve];
            K ||
            (K = X.then),
            K.call(X, ye)
          } else f[de](ye, 0);
          ge &&
          Re.push(ge)
        }
        function ye() {
          if (!we) {
            for (we = !0; Re.length; ) {
              const ge = Re;
              Re = [];
              for (let K = 0; K < ge.length; K++) {
                const h = ge[K];
                try {
                  h.zone.runTask(h, null, null)
                } catch (b) {
                  Ye.onUnhandledError(b)
                }
              }
            }
            Ye.microtaskDrainDone(),
            we = !1
          }
        }
        const Pe = {
          name: 'NO ZONE'
        },
        _e = 'notScheduled',
        Le = 'scheduling',
        pe = 'scheduled',
        Ae = 'running',
        Ee = 'canceling',
        Ze = 'unknown',
        re = 'microTask',
        Te = 'macroTask',
        ue = 'eventTask',
        He = {},
        Ye = {
          symbol: F,
          currentZoneFrame: () => ke,
          onUnhandledError: Ne,
          microtaskDrainDone: Ne,
          scheduleMicroTask: W,
          showUncaughtError: () => !V[F('ignoreConsoleErrorUncaughtError')],
          patchEventTarget: () => [],
          patchOnProperties: Ne,
          patchMethod: () => Ne,
          bindArguments: () => [],
          patchThen: () => Ne,
          patchMacroTask: () => Ne,
          patchEventPrototype: () => Ne,
          isIEOrEdge: () => !1,
          getGlobalObjects: () => {
          },
          ObjectDefineProperty: () => Ne,
          ObjectGetOwnPropertyDescriptor: () => {
          },
          ObjectCreate: () => {
          },
          ArraySlice: () => [],
          patchClass: () => Ne,
          wrapWithCurrentZone: () => Ne,
          filterProperties: () => [],
          attachOriginToPatched: () => Ne,
          _redefineProperty: () => Ne,
          patchCallbacks: () => Ne
        };
        let ke = {
          parent: null,
          zone: new V(null, null)
        },
        Ge = null,
        Ve = 0;
        function Ne() {
        }
        _('Zone', 'Zone'),
        f.Zone = V
      }(
        'undefined' != typeof window &&
        window ||
        'undefined' != typeof self &&
        self ||
        global
      );
      const N = Object.getOwnPropertyDescriptor,
      n = Object.defineProperty,
      T = Object.getPrototypeOf,
      e = Object.create,
      p = Array.prototype.slice,
      l = 'addEventListener',
      v = 'removeEventListener',
      u = Zone.__symbol__(l),
      c = Zone.__symbol__(v),
      g = 'true',
      m = 'false',
      y = Zone.__symbol__('');
      function t(f, E) {
        return Zone.current.wrap(f, E)
      }
      function o(f, E, O, _, M) {
        return Zone.current.scheduleMacroTask(f, E, O, _, M)
      }
      const a = Zone.__symbol__,
      r = 'undefined' != typeof window,
      s = r ? window : void 0,
      i = r &&
      s ||
      'object' == typeof self &&
      self ||
      global,
      R = [
        null
      ];
      function w(f, E) {
        for (let O = f.length - 1; O >= 0; O--) 'function' == typeof f[O] &&
        (f[O] = t(f[O], E + '_' + O));
        return f
      }
      function S(f) {
        return !f ||
        !1 !== f.writable &&
        !('function' == typeof f.get && void 0 === f.set)
      }
      const L = 'undefined' != typeof WorkerGlobalScope &&
      self instanceof WorkerGlobalScope,
      I = !('nw' in i) &&
      void 0 !== i.process &&
      '[object process]' === {
      }.toString.call(i.process),
      H = !I &&
      !L &&
      !(!r || !s.HTMLElement),
      Q = void 0 !== i.process &&
      '[object process]' === {
      }.toString.call(i.process) &&
      !L &&
      !(!r || !s.HTMLElement),
      z = {},
      C = function (f) {
        if (!(f = f || i.event)) return;
        let E = z[f.type];
        E ||
        (E = z[f.type] = a('ON_PROPERTY' + f.type));
        const O = this ||
        f.target ||
        i,
        _ = O[E];
        let M;
        if (H && O === s && 'error' === f.type) {
          const F = f;
          M = _ &&
          _.call(this, F.message, F.filename, F.lineno, F.colno, F.error),
          !0 === M &&
          f.preventDefault()
        } else M = _ &&
        _.apply(this, arguments),
        null != M &&
        !M &&
        f.preventDefault();
        return M
      };
      function te(f, E, O) {
        let _ = N(f, E);
        if (
          !_ &&
          O &&
          N(O, E) &&
          (_ = {
            enumerable: !0,
            configurable: !0
          }),
          !_ ||
          !_.configurable
        ) return;
        const M = a('on' + E + 'patched');
        if (f.hasOwnProperty(M) && f[M]) return;
        delete _.writable,
        delete _.value;
        const F = _.get,
        j = _.set,
        V = E.substr(2);
        let ee = z[V];
        ee ||
        (ee = z[V] = a('ON_PROPERTY' + V)),
        _.set = function (J) {
          let $ = this;
          !$ &&
          f === i &&
          ($ = i),
          $ &&
          (
            $[ee] &&
            $.removeEventListener(V, C),
            j &&
            j.apply($, R),
            'function' == typeof J ? ($[ee] = J, $.addEventListener(V, C, !1)) : $[ee] = null
          )
        },
        _.get = function () {
          let J = this;
          if (!J && f === i && (J = i), !J) return null;
          const $ = J[ee];
          if ($) return $;
          if (F) {
            let de = F &&
            F.call(this);
            if (de) return _.set.call(this, de),
            'function' == typeof J.removeAttribute &&
            J.removeAttribute(E),
            de
          }
          return null
        },
        n(f, E, _),
        f[M] = !0
      }
      function me(f, E, O) {
        if (E) for (let _ = 0; _ < E.length; _++) te(f, 'on' + E[_], O);
         else {
          const _ = [];
          for (const M in f) 'on' == M.substr(0, 2) &&
          _.push(M);
          for (let M = 0; M < _.length; M++) te(f, _[M], O)
        }
      }
      const be = a('originalInstance');
      function le(f) {
        const E = i[f];
        if (!E) return;
        i[a(f)] = E,
        i[f] = function () {
          const M = w(arguments, f);
          switch (M.length) {
            case 0:
              this[be] = new E;
              break;
            case 1:
              this[be] = new E(M[0]);
              break;
            case 2:
              this[be] = new E(M[0], M[1]);
              break;
            case 3:
              this[be] = new E(M[0], M[1], M[2]);
              break;
            case 4:
              this[be] = new E(M[0], M[1], M[2], M[3]);
              break;
            default:
              throw new Error('Arg list too long.')
          }
        },
        Ce(i[f], E);
        const O = new E(function () {
        });
        let _;
        for (_ in O) 'XMLHttpRequest' === f &&
        'responseBlob' === _ ||
        function (M) {
          'function' == typeof O[M] ? i[f].prototype[M] = function () {
            return this[be][M].apply(this[be], arguments)
          }
           : n(
            i[f].prototype,
            M,
            {
              set: function (F) {
                'function' == typeof F ? (this[be][M] = t(F, f + '.' + M), Ce(this[be][M], F)) : this[be][M] = F
              },
              get: function () {
                return this[be][M]
              }
            }
          )
        }(_);
        for (_ in E) 'prototype' !== _ &&
        E.hasOwnProperty(_) &&
        (i[f][_] = E[_])
      }
      function Se(f, E, O) {
        let _ = f;
        for (; _ && !_.hasOwnProperty(E); ) _ = T(_);
        !_ &&
        f[E] &&
        (_ = f);
        const M = a(E);
        let F = null;
        if (
          _ &&
          (!(F = _[M]) || !_.hasOwnProperty(M)) &&
          (F = _[M] = _[E], S(_ && N(_, E)))
        ) {
          const V = O(F, M, E);
          _[E] = function () {
            return V(this, arguments)
          },
          Ce(_[E], F)
        }
        return F
      }
      function je(f, E, O) {
        let _ = null;
        function M(F) {
          const j = F.data;
          return j.args[j.cbIdx] = function () {
            F.invoke.apply(this, arguments)
          },
          _.apply(j.target, j.args),
          F
        }
        _ = Se(
          f,
          E,
          F => function (j, V) {
            const ee = O(j, V);
            return ee.cbIdx >= 0 &&
            'function' == typeof V[ee.cbIdx] ? o(ee.name, V[ee.cbIdx], ee, M) : F.apply(j, V)
          }
        )
      }
      function Ce(f, E) {
        f[a('OriginalDelegate')] = E
      }
      let ze = !1,
      Xe = !1;
      function Y() {
        if (ze) return Xe;
        ze = !0;
        try {
          const f = s.navigator.userAgent;
          (
            - 1 !== f.indexOf('MSIE ') ||
            - 1 !== f.indexOf('Trident/') ||
            - 1 !== f.indexOf('Edge/')
          ) &&
          (Xe = !0)
        } catch (f) {
        }
        return Xe
      }
      Zone.__load_patch(
        'ZoneAwarePromise',
        (f, E, O) => {
          const _ = Object.getOwnPropertyDescriptor,
          M = Object.defineProperty,
          j = O.symbol,
          V = [],
          ee = !0 === f[j('DISABLE_WRAPPING_UNCAUGHT_PROMISE_REJECTION')],
          J = j('Promise'),
          $ = j('then');
          O.onUnhandledError = Z => {
            if (O.showUncaughtError()) {
              const P = Z &&
              Z.rejection;
              P ? console.error(
                'Unhandled Promise rejection:',
                P instanceof Error ? P.message : P,
                '; Zone:',
                Z.zone.name,
                '; Task:',
                Z.task &&
                Z.task.source,
                '; Value:',
                P,
                P instanceof Error ? P.stack : void 0
              ) : console.error(Z)
            }
          },
          O.microtaskDrainDone = () => {
            for (; V.length; ) {
              const Z = V.shift();
              try {
                Z.zone.runGuarded(() => {
                  throw Z.throwOriginal ? Z.rejection : Z
                })
              } catch (P) {
                ve(P)
              }
            }
          };
          const he = j('unhandledPromiseRejectionHandler');
          function ve(Z) {
            O.onUnhandledError(Z);
            try {
              const P = E[he];
              'function' == typeof P &&
              P.call(this, Z)
            } catch (P) {
            }
          }
          function Re(Z) {
            return Z &&
            Z.then
          }
          function we(Z) {
            return Z
          }
          function X(Z) {
            return h.reject(Z)
          }
          const W = j('state'),
          ye = j('value'),
          Pe = j('finally'),
          _e = j('parentPromiseValue'),
          Le = j('parentPromiseState'),
          Ae = null,
          Ze = !1;
          function Te(Z, P) {
            return A => {
              try {
                ke(Z, P, A)
              } catch (B) {
                ke(Z, !1, B)
              }
            }
          }
          const Ye = j('currentTaskTrace');
          function ke(Z, P, A) {
            const B = function () {
              let Z = !1;
              return function (A) {
                return function () {
                  Z ||
                  (Z = !0, A.apply(null, arguments))
                }
              }
            }();
            if (Z === A) throw new TypeError('Promise resolved with itself');
            if (Z[W] === Ae) {
              let se = null;
              try {
                ('object' == typeof A || 'function' == typeof A) &&
                (se = A && A.then)
              } catch (ce) {
                return B(() => {
                  ke(Z, !1, ce)
                }) (),
                Z
              }
              if (
                P !== Ze &&
                A instanceof h &&
                A.hasOwnProperty(W) &&
                A.hasOwnProperty(ye) &&
                A[W] !== Ae
              ) Ve(A),
              ke(Z, A[W], A[ye]);
               else if (P !== Ze && 'function' == typeof se) try {
                se.call(A, B(Te(Z, P)), B(Te(Z, !1)))
              } catch (ce) {
                B(() => {
                  ke(Z, !1, ce)
                }) ()
              } else {
                Z[W] = P;
                const ce = Z[ye];
                if (
                  Z[ye] = A,
                  Z[Pe] === Pe &&
                  !0 === P &&
                  (Z[W] = Z[Le], Z[ye] = Z[_e]),
                  P === Ze &&
                  A instanceof Error
                ) {
                  const ne = E.currentTask &&
                  E.currentTask.data &&
                  E.currentTask.data.__creationTrace__;
                  ne &&
                  M(A, Ye, {
                    configurable: !0,
                    enumerable: !1,
                    writable: !0,
                    value: ne
                  })
                }
                for (let ne = 0; ne < ce.length; ) Ne(Z, ce[ne++], ce[ne++], ce[ne++], ce[ne++]);
                if (0 == ce.length && P == Ze) {
                  Z[W] = 0;
                  let ne = A;
                  try {
                    throw new Error(
                      'Uncaught (in promise): ' + function F(Z) {
                        return Z &&
                        Z.toString === Object.prototype.toString ? (Z.constructor && Z.constructor.name || '') + ': ' + JSON.stringify(Z) : Z ? Z.toString() : Object.prototype.toString.call(Z)
                      }(A) + (A && A.stack ? '\n' + A.stack : '')
                    )
                  } catch (oe) {
                    ne = oe
                  }
                  ee &&
                  (ne.throwOriginal = !0),
                  ne.rejection = A,
                  ne.promise = Z,
                  ne.zone = E.current,
                  ne.task = E.currentTask,
                  V.push(ne),
                  O.scheduleMicroTask()
                }
              }
            }
            return Z
          }
          const Ge = j('rejectionHandledHandler');
          function Ve(Z) {
            if (0 === Z[W]) {
              try {
                const P = E[Ge];
                P &&
                'function' == typeof P &&
                P.call(this, {
                  rejection: Z[ye],
                  promise: Z
                })
              } catch (P) {
              }
              Z[W] = Ze;
              for (let P = 0; P < V.length; P++) Z === V[P].promise &&
              V.splice(P, 1)
            }
          }
          function Ne(Z, P, A, B, se) {
            Ve(Z);
            const ce = Z[W],
            ne = ce ? 'function' == typeof B ? B : we : 'function' == typeof se ? se : X;
            P.scheduleMicroTask(
              'Promise.then',
              () => {
                try {
                  const oe = Z[ye],
                  fe = !!A &&
                  Pe === A[Pe];
                  fe &&
                  (A[_e] = oe, A[Le] = ce);
                  const xe = P.run(ne, void 0, fe && ne !== X && ne !== we ? [] : [
                    oe
                  ]);
                  ke(A, !0, xe)
                } catch (oe) {
                  ke(A, !1, oe)
                }
              },
              A
            )
          }
          const K = function () {
          };
          class h {
            static toString() {
              return 'function ZoneAwarePromise() { [native code] }'
            }
            static resolve(P) {
              return ke(new this(null), !0, P)
            }
            static reject(P) {
              return ke(new this(null), Ze, P)
            }
            static race(P) {
              let A,
              B,
              se = new this((oe, fe) => {
                A = oe,
                B = fe
              });
              function ce(oe) {
                A(oe)
              }
              function ne(oe) {
                B(oe)
              }
              for (let oe of P) Re(oe) ||
              (oe = this.resolve(oe)),
              oe.then(ce, ne);
              return se
            }
            static all(P) {
              return h.allWithCallback(P)
            }
            static allSettled(P) {
              return (this && this.prototype instanceof h ? this : h).allWithCallback(
                P,
                {
                  thenCallback: B => ({
                    status: 'fulfilled',
                    value: B
                  }),
                  errorCallback: B => ({
                    status: 'rejected',
                    reason: B
                  })
                }
              )
            }
            static allWithCallback(P, A) {
              let B,
              se,
              ce = new this((xe, De) => {
                B = xe,
                se = De
              }),
              ne = 2,
              oe = 0;
              const fe = [];
              for (let xe of P) {
                Re(xe) ||
                (xe = this.resolve(xe));
                const De = oe;
                try {
                  xe.then(
                    Be => {
                      fe[De] = A ? A.thenCallback(Be) : Be,
                      ne--,
                      0 === ne &&
                      B(fe)
                    },
                    Be => {
                      A ? (fe[De] = A.errorCallback(Be), ne--, 0 === ne && B(fe)) : se(Be)
                    }
                  )
                } catch (Be) {
                  se(Be)
                }
                ne++,
                oe++
              }
              return ne -= 2,
              0 === ne &&
              B(fe),
              ce
            }
            constructor(P) {
              const A = this;
              if (!(A instanceof h)) throw new Error('Must be an instanceof Promise.');
              A[W] = Ae,
              A[ye] = [];
              try {
                P &&
                P(Te(A, !0), Te(A, Ze))
              } catch (B) {
                ke(A, !1, B)
              }
            }
            get[Symbol.toStringTag]() {
              return 'Promise'
            }
            get[Symbol.species]() {
              return h
            }
            then(P, A) {
              let B = this.constructor[Symbol.species];
              (!B || 'function' != typeof B) &&
              (B = this.constructor || h);
              const se = new B(K),
              ce = E.current;
              return this[W] == Ae ? this[ye].push(ce, se, P, A) : Ne(this, ce, se, P, A),
              se
            } catch (P) {
              return this.then(null, P)
            } finally (P) {
              let A = this.constructor[Symbol.species];
              (!A || 'function' != typeof A) &&
              (A = h);
              const B = new A(K);
              B[Pe] = Pe;
              const se = E.current;
              return this[W] == Ae ? this[ye].push(se, B, P, P) : Ne(this, se, B, P, P),
              B
            }
          }
          h.resolve = h.resolve,
          h.reject = h.reject,
          h.race = h.race,
          h.all = h.all;
          const b = f[J] = f.Promise;
          f.Promise = h;
          const q = j('thenPatched');
          function ae(Z) {
            const P = Z.prototype,
            A = _(P, 'then');
            if (A && (!1 === A.writable || !A.configurable)) return;
            const B = P.then;
            P[$] = B,
            Z.prototype.then = function (se, ce) {
              return new h((oe, fe) => {
                B.call(this, oe, fe)
              }).then(se, ce)
            },
            Z[q] = !0
          }
          return O.patchThen = ae,
          b &&
          (
            ae(b),
            Se(
              f,
              'fetch',
              Z => function Fe(Z) {
                return function (P, A) {
                  let B = Z.apply(P, A);
                  if (B instanceof h) return B;
                  let se = B.constructor;
                  return se[q] ||
                  ae(se),
                  B
                }
              }(Z)
            )
          ),
          Promise[E.__symbol__('uncaughtPromiseErrors')] = V,
          h
        }
      ),
      Zone.__load_patch(
        'toString',
        f => {
          const E = Function.prototype.toString,
          O = a('OriginalDelegate'),
          _ = a('Promise'),
          M = a('Error'),
          F = function () {
            if ('function' == typeof this) {
              const J = this[O];
              if (J) return 'function' == typeof J ? E.call(J) : Object.prototype.toString.call(J);
              if (this === Promise) {
                const $ = f[_];
                if ($) return E.call($)
              }
              if (this === Error) {
                const $ = f[M];
                if ($) return E.call($)
              }
            }
            return E.call(this)
          };
          F[O] = E,
          Function.prototype.toString = F;
          const j = Object.prototype.toString;
          Object.prototype.toString = function () {
            return 'function' == typeof Promise &&
            this instanceof Promise ? '[object Promise]' : j.call(this)
          }
        }
      );
      let G = !1;
      if ('undefined' != typeof window) try {
        const f = Object.defineProperty({
        }, 'passive', {
          get: function () {
            G = !0
          }
        });
        window.addEventListener('test', f, f),
        window.removeEventListener('test', f, f)
      } catch (f) {
        G = !1
      }
      const ie = {
        useG: !0
      },
      U = {},
      Oe = {},
      Me = new RegExp('^' + y + '(\\w+)(true|false)$'),
      We = a('propagationStopped');
      function Ke(f, E) {
        const O = (E ? E(f) : f) + m,
        _ = (E ? E(f) : f) + g,
        M = y + O,
        F = y + _;
        U[f] = {},
        U[f][m] = M,
        U[f][g] = F
      }
      function qe(f, E, O) {
        const _ = O &&
        O.add ||
        l,
        M = O &&
        O.rm ||
        v,
        F = O &&
        O.listeners ||
        'eventListeners',
        j = O &&
        O.rmAll ||
        'removeAllListeners',
        V = a(_),
        ee = '.' + _ + ':',
        de = function (X, W, ye) {
          if (X.isRemoved) return;
          const Pe = X.callback;
          'object' == typeof Pe &&
          Pe.handleEvent &&
          (X.callback = Le => Pe.handleEvent(Le), X.originalDelegate = Pe),
          X.invoke(X, W, [
            ye
          ]);
          const _e = X.options;
          _e &&
          'object' == typeof _e &&
          _e.once &&
          W[M].call(
            W,
            ye.type,
            X.originalDelegate ? X.originalDelegate : X.callback,
            _e
          )
        },
        he = function (X) {
          if (!(X = X || f.event)) return;
          const W = this ||
          X.target ||
          f,
          ye = W[U[X.type][m]];
          if (ye) if (1 === ye.length) de(ye[0], W, X);
           else {
            const Pe = ye.slice();
            for (let _e = 0; _e < Pe.length && (!X || !0 !== X[We]); _e++) de(Pe[_e], W, X)
          }
        },
        ve = function (X) {
          if (!(X = X || f.event)) return;
          const W = this ||
          X.target ||
          f,
          ye = W[U[X.type][g]];
          if (ye) if (1 === ye.length) de(ye[0], W, X);
           else {
            const Pe = ye.slice();
            for (let _e = 0; _e < Pe.length && (!X || !0 !== X[We]); _e++) de(Pe[_e], W, X)
          }
        };
        function Re(X, W) {
          if (!X) return !1;
          let ye = !0;
          W &&
          void 0 !== W.useG &&
          (ye = W.useG);
          const Pe = W &&
          W.vh;
          let _e = !0;
          W &&
          void 0 !== W.chkDup &&
          (_e = W.chkDup);
          let Le = !1;
          W &&
          void 0 !== W.rt &&
          (Le = W.rt);
          let pe = X;
          for (; pe && !pe.hasOwnProperty(_); ) pe = T(pe);
          if (!pe && X[_] && (pe = X), !pe || pe[V]) return !1;
          const Ae = W &&
          W.eventNameToString,
          Ee = {},
          Ze = pe[V] = pe[_],
          re = pe[a(M)] = pe[M],
          Te = pe[a(F)] = pe[F],
          ue = pe[a(j)] = pe[j];
          let He;
          function Ye(P, A) {
            return !G &&
            'object' == typeof P &&
            P ? !!P.capture : G &&
            A ? 'boolean' == typeof P ? {
              capture: P,
              passive: !0
            }
             : P ? 'object' == typeof P &&
            !1 !== P.passive ? Object.assign(Object.assign({
            }, P), {
              passive: !0
            }) : P : {
              passive: !0
            }
             : P
          }
          W &&
          W.prepend &&
          (He = pe[a(W.prepend)] = pe[W.prepend]);
          const K = ye ? function (P) {
            if (!Ee.isExisting) return Ze.call(Ee.target, Ee.eventName, Ee.capture ? ve : he, Ee.options)
          }
           : function (P) {
            return Ze.call(Ee.target, Ee.eventName, P.invoke, Ee.options)
          },
          h = ye ? function (P) {
            if (!P.isRemoved) {
              const A = U[P.eventName];
              let B;
              A &&
              (B = A[P.capture ? g : m]);
              const se = B &&
              P.target[B];
              if (se) for (let ce = 0; ce < se.length; ce++) if (se[ce] === P) {
                se.splice(ce, 1),
                P.isRemoved = !0,
                0 === se.length &&
                (P.allRemoved = !0, P.target[B] = null);
                break
              }
            }
            if (P.allRemoved) return re.call(P.target, P.eventName, P.capture ? ve : he, P.options)
          }
           : function (P) {
            return re.call(P.target, P.eventName, P.invoke, P.options)
          },
          q = W &&
          W.diff ? W.diff : function (P, A) {
            const B = typeof A;
            return 'function' === B &&
            P.callback === A ||
            'object' === B &&
            P.originalDelegate === A
          },
          ae = Zone[a('UNPATCHED_EVENTS')],
          Fe = f[a('PASSIVE_EVENTS')],
          Z = function (P, A, B, se, ce = !1, ne = !1) {
            return function () {
              const oe = this ||
              f;
              let fe = arguments[0];
              W &&
              W.transferEventName &&
              (fe = W.transferEventName(fe));
              let xe = arguments[1];
              if (!xe) return P.apply(this, arguments);
              if (I && 'uncaughtException' === fe) return P.apply(this, arguments);
              let De = !1;
              if ('function' != typeof xe) {
                if (!xe.handleEvent) return P.apply(this, arguments);
                De = !0
              }
              if (Pe && !Pe(P, xe, oe, arguments)) return;
              const Be = G &&
              !!Fe &&
              - 1 !== Fe.indexOf(fe),
              $e = Ye(arguments[2], Be);
              if (ae) for (let et = 0; et < ae.length; et++) if (fe === ae[et]) return Be ? P.call(oe, fe, xe, $e) : P.apply(this, arguments);
              const ht = !!$e &&
              ('boolean' == typeof $e || $e.capture),
              yt = !(!$e || 'object' != typeof $e) &&
              $e.once,
              At = Zone.current;
              let dt = U[fe];
              dt ||
              (Ke(fe, Ae), dt = U[fe]);
              const Tt = dt[ht ? g : m];
              let ut,
              ot = oe[Tt],
              Et = !1;
              if (ot) {
                if (Et = !0, _e) for (let et = 0; et < ot.length; et++) if (q(ot[et], xe)) return
              } else ot = oe[Tt] = [];
              const _t = oe.constructor.name,
              xt = Oe[_t];
              xt &&
              (ut = xt[fe]),
              ut ||
              (ut = _t + A + (Ae ? Ae(fe) : fe)),
              Ee.options = $e,
              yt &&
              (Ee.options.once = !1),
              Ee.target = oe,
              Ee.capture = ht,
              Ee.eventName = fe,
              Ee.isExisting = Et;
              const it = ye ? ie : void 0;
              it &&
              (it.taskData = Ee);
              const Qe = At.scheduleEventTask(ut, xe, it, B, se);
              return Ee.target = null,
              it &&
              (it.taskData = null),
              yt &&
              ($e.once = !0),
              !G &&
              'boolean' == typeof Qe.options ||
              (Qe.options = $e),
              Qe.target = oe,
              Qe.capture = ht,
              Qe.eventName = fe,
              De &&
              (Qe.originalDelegate = xe),
              ne ? ot.unshift(Qe) : ot.push(Qe),
              ce ? oe : void 0
            }
          };
          return pe[_] = Z(Ze, ee, K, h, Le),
          He &&
          (
            pe.prependListener = Z(
              He,
              '.prependListener:',
              function (P) {
                return He.call(Ee.target, Ee.eventName, P.invoke, Ee.options)
              },
              h,
              Le,
              !0
            )
          ),
          pe[M] = function () {
            const P = this ||
            f;
            let A = arguments[0];
            W &&
            W.transferEventName &&
            (A = W.transferEventName(A));
            const B = arguments[2],
            se = !!B &&
            ('boolean' == typeof B || B.capture),
            ce = arguments[1];
            if (!ce) return re.apply(this, arguments);
            if (Pe && !Pe(re, ce, P, arguments)) return;
            const ne = U[A];
            let oe;
            ne &&
            (oe = ne[se ? g : m]);
            const fe = oe &&
            P[oe];
            if (fe) for (let xe = 0; xe < fe.length; xe++) {
              const De = fe[xe];
              if (q(De, ce)) return fe.splice(xe, 1),
              De.isRemoved = !0,
              0 === fe.length &&
              (De.allRemoved = !0, P[oe] = null, 'string' == typeof A) &&
              (P[y + 'ON_PROPERTY' + A] = null),
              De.zone.cancelTask(De),
              Le ? P : void 0
            }
            return re.apply(this, arguments)
          },
          pe[F] = function () {
            const P = this ||
            f;
            let A = arguments[0];
            W &&
            W.transferEventName &&
            (A = W.transferEventName(A));
            const B = [],
            se = Je(P, Ae ? Ae(A) : A);
            for (let ce = 0; ce < se.length; ce++) {
              const ne = se[ce];
              B.push(ne.originalDelegate ? ne.originalDelegate : ne.callback)
            }
            return B
          },
          pe[j] = function () {
            const P = this ||
            f;
            let A = arguments[0];
            if (A) {
              W &&
              W.transferEventName &&
              (A = W.transferEventName(A));
              const B = U[A];
              if (B) {
                const ne = P[B[m]],
                oe = P[B[g]];
                if (ne) {
                  const fe = ne.slice();
                  for (let xe = 0; xe < fe.length; xe++) {
                    const De = fe[xe];
                    this[M].call(
                      this,
                      A,
                      De.originalDelegate ? De.originalDelegate : De.callback,
                      De.options
                    )
                  }
                }
                if (oe) {
                  const fe = oe.slice();
                  for (let xe = 0; xe < fe.length; xe++) {
                    const De = fe[xe];
                    this[M].call(
                      this,
                      A,
                      De.originalDelegate ? De.originalDelegate : De.callback,
                      De.options
                    )
                  }
                }
              }
            } else {
              const B = Object.keys(P);
              for (let se = 0; se < B.length; se++) {
                const ne = Me.exec(B[se]);
                let oe = ne &&
                ne[1];
                oe &&
                'removeListener' !== oe &&
                this[j].call(this, oe)
              }
              this[j].call(this, 'removeListener')
            }
            if (Le) return this
          },
          Ce(pe[_], Ze),
          Ce(pe[M], re),
          ue &&
          Ce(pe[j], ue),
          Te &&
          Ce(pe[F], Te),
          !0
        }
        let we = [];
        for (let X = 0; X < E.length; X++) we[X] = Re(E[X], O);
        return we
      }
      function Je(f, E) {
        if (!E) {
          const F = [];
          for (let j in f) {
            const V = Me.exec(j);
            let ee = V &&
            V[1];
            if (ee && (!E || ee === E)) {
              const J = f[j];
              if (J) for (let $ = 0; $ < J.length; $++) F.push(J[$])
            }
          }
          return F
        }
        let O = U[E];
        O ||
        (Ke(E), O = U[E]);
        const _ = f[O[m]],
        M = f[O[g]];
        return _ ? M ? _.concat(M) : _.slice() : M ? M.slice() : []
      }
      function st(f, E) {
        const O = f.Event;
        O &&
        O.prototype &&
        E.patchMethod(
          O.prototype,
          'stopImmediatePropagation',
          _ => function (M, F) {
            M[We] = !0,
            _ &&
            _.apply(M, F)
          }
        )
      }
      function ct(f, E, O, _, M) {
        const F = Zone.__symbol__(_);
        if (E[F]) return;
        const j = E[F] = E[_];
        E[_] = function (V, ee, J) {
          return ee &&
          ee.prototype &&
          M.forEach(
            function ($) {
              const de = `${ O }.${ _ }::` + $,
              he = ee.prototype;
              if (he.hasOwnProperty($)) {
                const ve = f.ObjectGetOwnPropertyDescriptor(he, $);
                ve &&
                ve.value ? (
                  ve.value = f.wrapWithCurrentZone(ve.value, de),
                  f._redefineProperty(ee.prototype, $, ve)
                ) : he[$] &&
                (he[$] = f.wrapWithCurrentZone(he[$], de))
              } else he[$] &&
              (he[$] = f.wrapWithCurrentZone(he[$], de))
            }
          ),
          j.call(E, V, ee, J)
        },
        f.attachOriginToPatched(E[_], j)
      }
      const ft = [
        'absolutedeviceorientation',
        'afterinput',
        'afterprint',
        'appinstalled',
        'beforeinstallprompt',
        'beforeprint',
        'beforeunload',
        'devicelight',
        'devicemotion',
        'deviceorientation',
        'deviceorientationabsolute',
        'deviceproximity',
        'hashchange',
        'languagechange',
        'message',
        'mozbeforepaint',
        'offline',
        'online',
        'paint',
        'pageshow',
        'pagehide',
        'popstate',
        'rejectionhandled',
        'storage',
        'unhandledrejection',
        'unload',
        'userproximity',
        'vrdisplayconnected',
        'vrdisplaydisconnected',
        'vrdisplaypresentchange'
      ],
      wt = [
        'encrypted',
        'waitingforkey',
        'msneedkey',
        'mozinterruptbegin',
        'mozinterruptend'
      ],
      pt = [
        'load'
      ],
      mt = [
        'blur',
        'error',
        'focus',
        'load',
        'resize',
        'scroll',
        'messageerror'
      ],
      Rt = [
        'bounce',
        'finish',
        'start'
      ],
      vt = [
        'loadstart',
        'progress',
        'abort',
        'error',
        'load',
        'progress',
        'timeout',
        'loadend',
        'readystatechange'
      ],
      tt = [
        'upgradeneeded',
        'complete',
        'abort',
        'success',
        'error',
        'blocked',
        'versionchange',
        'close'
      ],
      Nt = [
        'close',
        'error',
        'open',
        'message'
      ],
      Dt = [
        'error',
        'message'
      ],
      nt = [
        'abort',
        'animationcancel',
        'animationend',
        'animationiteration',
        'auxclick',
        'beforeinput',
        'blur',
        'cancel',
        'canplay',
        'canplaythrough',
        'change',
        'compositionstart',
        'compositionupdate',
        'compositionend',
        'cuechange',
        'click',
        'close',
        'contextmenu',
        'curechange',
        'dblclick',
        'drag',
        'dragend',
        'dragenter',
        'dragexit',
        'dragleave',
        'dragover',
        'drop',
        'durationchange',
        'emptied',
        'ended',
        'error',
        'focus',
        'focusin',
        'focusout',
        'gotpointercapture',
        'input',
        'invalid',
        'keydown',
        'keypress',
        'keyup',
        'load',
        'loadstart',
        'loadeddata',
        'loadedmetadata',
        'lostpointercapture',
        'mousedown',
        'mouseenter',
        'mouseleave',
        'mousemove',
        'mouseout',
        'mouseover',
        'mouseup',
        'mousewheel',
        'orientationchange',
        'pause',
        'play',
        'playing',
        'pointercancel',
        'pointerdown',
        'pointerenter',
        'pointerleave',
        'pointerlockchange',
        'mozpointerlockchange',
        'webkitpointerlockerchange',
        'pointerlockerror',
        'mozpointerlockerror',
        'webkitpointerlockerror',
        'pointermove',
        'pointout',
        'pointerover',
        'pointerup',
        'progress',
        'ratechange',
        'reset',
        'resize',
        'scroll',
        'seeked',
        'seeking',
        'select',
        'selectionchange',
        'selectstart',
        'show',
        'sort',
        'stalled',
        'submit',
        'suspend',
        'timeupdate',
        'volumechange',
        'touchcancel',
        'touchmove',
        'touchstart',
        'touchend',
        'transitioncancel',
        'transitionend',
        'waiting',
        'wheel'
      ].concat(
        ['webglcontextrestored',
        'webglcontextlost',
        'webglcontextcreationerror'],
        [
          'autocomplete',
          'autocompleteerror'
        ],
        [
          'toggle'
        ],
        [
          'afterscriptexecute',
          'beforescriptexecute',
          'DOMContentLoaded',
          'freeze',
          'fullscreenchange',
          'mozfullscreenchange',
          'webkitfullscreenchange',
          'msfullscreenchange',
          'fullscreenerror',
          'mozfullscreenerror',
          'webkitfullscreenerror',
          'msfullscreenerror',
          'readystatechange',
          'visibilitychange',
          'resume'
        ],
        ft,
        [
          'beforecopy',
          'beforecut',
          'beforepaste',
          'copy',
          'cut',
          'paste',
          'dragstart',
          'loadend',
          'animationstart',
          'search',
          'transitionrun',
          'transitionstart',
          'webkitanimationend',
          'webkitanimationiteration',
          'webkitanimationstart',
          'webkittransitionend'
        ],
        [
          'activate',
          'afterupdate',
          'ariarequest',
          'beforeactivate',
          'beforedeactivate',
          'beforeeditfocus',
          'beforeupdate',
          'cellchange',
          'controlselect',
          'dataavailable',
          'datasetchanged',
          'datasetcomplete',
          'errorupdate',
          'filterchange',
          'layoutcomplete',
          'losecapture',
          'move',
          'moveend',
          'movestart',
          'propertychange',
          'resizeend',
          'resizestart',
          'rowenter',
          'rowexit',
          'rowsdelete',
          'rowsinserted',
          'command',
          'compassneedscalibration',
          'deactivate',
          'help',
          'mscontentzoom',
          'msmanipulationstatechanged',
          'msgesturechange',
          'msgesturedoubletap',
          'msgestureend',
          'msgesturehold',
          'msgesturestart',
          'msgesturetap',
          'msgotpointercapture',
          'msinertiastart',
          'mslostpointercapture',
          'mspointercancel',
          'mspointerdown',
          'mspointerenter',
          'mspointerhover',
          'mspointerleave',
          'mspointermove',
          'mspointerout',
          'mspointerover',
          'mspointerup',
          'pointerout',
          'mssitemodejumplistitemremoved',
          'msthumbnailclick',
          'stop',
          'storagecommit'
        ]
      );
      function gt(f, E, O) {
        if (!O || 0 === O.length) return E;
        const _ = O.filter(F => F.target === f);
        if (!_ || 0 === _.length) return E;
        const M = _[0].ignoreProperties;
        return E.filter(F => - 1 === M.indexOf(F))
      }
      function Ie(f, E, O, _) {
        f &&
        me(f, gt(f, E, O), _)
      }
      Zone.__load_patch(
        'util',
        (f, E, O) => {
          O.patchOnProperties = me,
          O.patchMethod = Se,
          O.bindArguments = w,
          O.patchMacroTask = je;
          const _ = E.__symbol__('BLACK_LISTED_EVENTS'),
          M = E.__symbol__('UNPATCHED_EVENTS');
          f[M] &&
          (f[_] = f[M]),
          f[_] &&
          (E[_] = E[M] = f[_]),
          O.patchEventPrototype = st,
          O.patchEventTarget = qe,
          O.isIEOrEdge = Y,
          O.ObjectDefineProperty = n,
          O.ObjectGetOwnPropertyDescriptor = N,
          O.ObjectCreate = e,
          O.ArraySlice = p,
          O.patchClass = le,
          O.wrapWithCurrentZone = t,
          O.filterProperties = gt,
          O.attachOriginToPatched = Ce,
          O._redefineProperty = Object.defineProperty,
          O.patchCallbacks = ct,
          O.getGlobalObjects = () => ({
            globalSources: Oe,
            zoneSymbolEventNames: U,
            eventNames: nt,
            isBrowser: H,
            isMix: Q,
            isNode: I,
            TRUE_STR: g,
            FALSE_STR: m,
            ZONE_SYMBOL_PREFIX: y,
            ADD_EVENT_LISTENER_STR: l,
            REMOVE_EVENT_LISTENER_STR: v
          })
        }
      );
      const at = a('zoneTask');
      function rt(f, E, O, _) {
        let M = null,
        F = null;
        O += _;
        const j = {};
        function V(J) {
          const $ = J.data;
          return $.args[0] = function () {
            return J.invoke.apply(this, arguments)
          },
          $.handleId = M.apply(f, $.args),
          J
        }
        function ee(J) {
          return F.call(f, J.data.handleId)
        }
        M = Se(
          f,
          E += _,
          J => function ($, de) {
            if ('function' == typeof de[0]) {
              const he = {
                isPeriodic: 'Interval' === _,
                delay: 'Timeout' === _ ||
                'Interval' === _ ? de[1] ||
                0 : void 0,
                args: de
              },
              ve = de[0];
              de[0] = function () {
                try {
                  return ve.apply(this, arguments)
                } finally {
                  he.isPeriodic ||
                  (
                    'number' == typeof he.handleId ? delete j[he.handleId] : he.handleId &&
                    (he.handleId[at] = null)
                  )
                }
              };
              const Re = o(E, de[0], he, V, ee);
              if (!Re) return Re;
              const we = Re.data.handleId;
              return 'number' == typeof we ? j[we] = Re : we &&
              (we[at] = Re),
              we &&
              we.ref &&
              we.unref &&
              'function' == typeof we.ref &&
              'function' == typeof we.unref &&
              (Re.ref = we.ref.bind(we), Re.unref = we.unref.bind(we)),
              'number' == typeof we ||
              we ? we : Re
            }
            return J.apply(f, de)
          }
        ),
        F = Se(
          f,
          O,
          J => function ($, de) {
            const he = de[0];
            let ve;
            'number' == typeof he ? ve = j[he] : (ve = he && he[at], ve || (ve = he)),
            ve &&
            'string' == typeof ve.type ? 'notScheduled' !== ve.state &&
            (ve.cancelFn && ve.data.isPeriodic || 0 === ve.runCount) &&
            (
              'number' == typeof he ? delete j[he] : he &&
              (he[at] = null),
              ve.zone.cancelTask(ve)
            ) : J.apply(f, de)
          }
        )
      }
      Zone.__load_patch(
        'legacy',
        f => {
          const E = f[Zone.__symbol__('legacyPatch')];
          E &&
          E()
        }
      ),
      Zone.__load_patch(
        'queueMicrotask',
        (f, E, O) => {
          O.patchMethod(
            f,
            'queueMicrotask',
            _ => function (M, F) {
              E.current.scheduleMicroTask('queueMicrotask', F[0])
            }
          )
        }
      ),
      Zone.__load_patch(
        'timers',
        f => {
          const E = 'set',
          O = 'clear';
          rt(f, E, O, 'Timeout'),
          rt(f, E, O, 'Interval'),
          rt(f, E, O, 'Immediate')
        }
      ),
      Zone.__load_patch(
        'requestAnimationFrame',
        f => {
          rt(f, 'request', 'cancel', 'AnimationFrame'),
          rt(f, 'mozRequest', 'mozCancel', 'AnimationFrame'),
          rt(f, 'webkitRequest', 'webkitCancel', 'AnimationFrame')
        }
      ),
      Zone.__load_patch(
        'blocking',
        (f, E) => {
          const O = [
            'alert',
            'prompt',
            'confirm'
          ];
          for (let _ = 0; _ < O.length; _++) Se(f, O[_], (F, j, V) => function (ee, J) {
            return E.current.run(F, f, J, V)
          })
        }
      ),
      Zone.__load_patch(
        'EventTarget',
        (f, E, O) => {
          (function Lt(f, E) {
            E.patchEventPrototype(f, E)
          }) (f, O),
          function Mt(f, E) {
            if (Zone[E.symbol('patchEventTarget')]) return;
            const {
              eventNames: O,
              zoneSymbolEventNames: _,
              TRUE_STR: M,
              FALSE_STR: F,
              ZONE_SYMBOL_PREFIX: j
            }
            = E.getGlobalObjects();
            for (let ee = 0; ee < O.length; ee++) {
              const J = O[ee],
              he = j + (J + F),
              ve = j + (J + M);
              _[J] = {},
              _[J][F] = he,
              _[J][M] = ve
            }
            const V = f.EventTarget;
            V &&
            V.prototype &&
            E.patchEventTarget(f, [
              V &&
              V.prototype
            ])
          }(f, O);
          const _ = f.XMLHttpRequestEventTarget;
          _ &&
          _.prototype &&
          O.patchEventTarget(f, [
            _.prototype
          ])
        }
      ),
      Zone.__load_patch(
        'MutationObserver',
        (f, E, O) => {
          le('MutationObserver'),
          le('WebKitMutationObserver')
        }
      ),
      Zone.__load_patch('IntersectionObserver', (f, E, O) => {
        le('IntersectionObserver')
      }),
      Zone.__load_patch('FileReader', (f, E, O) => {
        le('FileReader')
      }),
      Zone.__load_patch(
        'on_property',
        (f, E, O) => {
          !function Ct(f, E) {
            if (I && !Q || Zone[f.symbol('patchEvents')]) return;
            const O = 'undefined' != typeof WebSocket,
            _ = E.__Zone_ignore_on_properties;
            if (H) {
              const j = window,
              V = function D() {
                try {
                  const f = s.navigator.userAgent;
                  if ( - 1 !== f.indexOf('MSIE ') || - 1 !== f.indexOf('Trident/')) return !0
                } catch (f) {
                }
                return !1
              }() ? [
                {
                  target: j,
                  ignoreProperties: [
                    'error'
                  ]
                }
              ] : [];
              Ie(j, nt.concat(['messageerror']), _ && _.concat(V), T(j)),
              Ie(Document.prototype, nt, _),
              void 0 !== j.SVGElement &&
              Ie(j.SVGElement.prototype, nt, _),
              Ie(Element.prototype, nt, _),
              Ie(HTMLElement.prototype, nt, _),
              Ie(HTMLMediaElement.prototype, wt, _),
              Ie(HTMLFrameSetElement.prototype, ft.concat(mt), _),
              Ie(HTMLBodyElement.prototype, ft.concat(mt), _),
              Ie(HTMLFrameElement.prototype, pt, _),
              Ie(HTMLIFrameElement.prototype, pt, _);
              const ee = j.HTMLMarqueeElement;
              ee &&
              Ie(ee.prototype, Rt, _);
              const J = j.Worker;
              J &&
              Ie(J.prototype, Dt, _)
            }
            const M = E.XMLHttpRequest;
            M &&
            Ie(M.prototype, vt, _);
            const F = E.XMLHttpRequestEventTarget;
            F &&
            Ie(F && F.prototype, vt, _),
            'undefined' != typeof IDBIndex &&
            (
              Ie(IDBIndex.prototype, tt, _),
              Ie(IDBRequest.prototype, tt, _),
              Ie(IDBOpenDBRequest.prototype, tt, _),
              Ie(IDBDatabase.prototype, tt, _),
              Ie(IDBTransaction.prototype, tt, _),
              Ie(IDBCursor.prototype, tt, _)
            ),
            O &&
            Ie(WebSocket.prototype, Nt, _)
          }(O, f)
        }
      ),
      Zone.__load_patch(
        'customElements',
        (f, E, O) => {
          !function It(f, E) {
            const {
              isBrowser: O,
              isMix: _
            }
            = E.getGlobalObjects();
            (O || _) &&
            f.customElements &&
            'customElements' in f &&
            E.patchCallbacks(
              E,
              f.customElements,
              'customElements',
              'define',
              [
                'connectedCallback',
                'disconnectedCallback',
                'adoptedCallback',
                'attributeChangedCallback'
              ]
            )
          }(f, O)
        }
      ),
      Zone.__load_patch(
        'XHR',
        (f, E) => {
          !function ee(J) {
            const $ = J.XMLHttpRequest;
            if (!$) return;
            const de = $.prototype;
            let ve = de[u],
            Re = de[c];
            if (!ve) {
              const re = J.XMLHttpRequestEventTarget;
              if (re) {
                const Te = re.prototype;
                ve = Te[u],
                Re = Te[c]
              }
            }
            const we = 'readystatechange',
            X = 'scheduled';
            function W(re) {
              const Te = re.data,
              ue = Te.target;
              ue[F] = !1,
              ue[V] = !1;
              const He = ue[M];
              ve ||
              (ve = ue[u], Re = ue[c]),
              He &&
              Re.call(ue, we, He);
              const Ye = ue[M] = () => {
                if (ue.readyState === ue.DONE) if (!Te.aborted && ue[F] && re.state === X) {
                  const Ge = ue[E.__symbol__('loadfalse')];
                  if (0 !== ue.status && Ge && Ge.length > 0) {
                    const Ve = re.invoke;
                    re.invoke = function () {
                      const Ne = ue[E.__symbol__('loadfalse')];
                      for (let ge = 0; ge < Ne.length; ge++) Ne[ge] === re &&
                      Ne.splice(ge, 1);
                      !Te.aborted &&
                      re.state === X &&
                      Ve.call(re)
                    },
                    Ge.push(re)
                  } else re.invoke()
                } else !Te.aborted &&
                !1 === ue[F] &&
                (ue[V] = !0)
              };
              return ve.call(ue, we, Ye),
              ue[O] ||
              (ue[O] = re),
              Ee.apply(ue, Te.args),
              ue[F] = !0,
              re
            }
            function ye() {
            }
            function Pe(re) {
              const Te = re.data;
              return Te.aborted = !0,
              Ze.apply(Te.target, Te.args)
            }
            const _e = Se(
              de,
              'open',
              () => function (re, Te) {
                return re[_] = 0 == Te[2],
                re[j] = Te[1],
                _e.apply(re, Te)
              }
            ),
            pe = a('fetchTaskAborting'),
            Ae = a('fetchTaskScheduling'),
            Ee = Se(
              de,
              'send',
              () => function (re, Te) {
                if (!0 === E.current[Ae] || re[_]) return Ee.apply(re, Te);
                {
                  const ue = {
                    target: re,
                    url: re[j],
                    isPeriodic: !1,
                    args: Te,
                    aborted: !1
                  },
                  He = o('XMLHttpRequest.send', ye, ue, W, Pe);
                  re &&
                  !0 === re[V] &&
                  !ue.aborted &&
                  He.state === X &&
                  He.invoke()
                }
              }
            ),
            Ze = Se(
              de,
              'abort',
              () => function (re, Te) {
                const ue = function he(re) {
                  return re[O]
                }(re);
                if (ue && 'string' == typeof ue.type) {
                  if (null == ue.cancelFn || ue.data && ue.data.aborted) return;
                  ue.zone.cancelTask(ue)
                } else if (!0 === E.current[pe]) return Ze.apply(re, Te)
              }
            )
          }(f);
          const O = a('xhrTask'),
          _ = a('xhrSync'),
          M = a('xhrListener'),
          F = a('xhrScheduled'),
          j = a('xhrURL'),
          V = a('xhrErrorBeforeScheduled')
        }
      ),
      Zone.__load_patch(
        'geolocation',
        f => {
          f.navigator &&
          f.navigator.geolocation &&
          function d(f, E) {
            const O = f.constructor.name;
            for (let _ = 0; _ < E.length; _++) {
              const M = E[_],
              F = f[M];
              if (F) {
                if (!S(N(f, M))) continue;
                f[M] = (
                  V => {
                    const ee = function () {
                      return V.apply(this, w(arguments, O + '.' + M))
                    };
                    return Ce(ee, V),
                    ee
                  }
                ) (F)
              }
            }
          }(
            f.navigator.geolocation,
            [
              'getCurrentPosition',
              'watchPosition'
            ]
          )
        }
      ),
      Zone.__load_patch(
        'PromiseRejectionEvent',
        (f, E) => {
          function O(_) {
            return function (M) {
              Je(f, _).forEach(
                j => {
                  const V = f.PromiseRejectionEvent;
                  if (V) {
                    const ee = new V(_, {
                      promise: M.promise,
                      reason: M.rejection
                    });
                    j.invoke(ee)
                  }
                }
              )
            }
          }
          f.PromiseRejectionEvent &&
          (
            E[a('unhandledPromiseRejectionHandler')] = O('unhandledrejection'),
            E[a('rejectionHandledHandler')] = O('rejectionhandled')
          )
        }
      )
    },
    5687: (x, N, n) => {
      var T = n(6583);
      x.exports = T
    },
    4667: (x, N, n) => {
      n(6833);
      var T = n(857);
      x.exports = T.Object.values
    },
    1817: (x, N, n) => {
      var T = n(5687);
      x.exports = T
    },
    9662: (x, N, n) => {
      var T = n(7854),
      e = n(614),
      p = n(6330),
      l = T.TypeError;
      x.exports = function (v) {
        if (e(v)) return v;
        throw l(p(v) + ' is not a function')
      }
    },
    9670: (x, N, n) => {
      var T = n(7854),
      e = n(111),
      p = T.String,
      l = T.TypeError;
      x.exports = function (v) {
        if (e(v)) return v;
        throw l(p(v) + ' is not an object')
      }
    },
    1318: (x, N, n) => {
      var T = n(5656),
      e = n(1400),
      p = n(6244),
      l = function (v) {
        return function (u, c, g) {
          var o,
          m = T(u),
          y = p(m),
          t = e(g, y);
          if (v && c != c) {
            for (; y > t; ) if ((o = m[t++]) != o) return !0
          } else for (; y > t; t++) if ((v || t in m) && m[t] === c) return v ||
          t ||
          0;
          return !v &&
          - 1
        }
      };
      x.exports = {
        includes: l(!0),
        indexOf: l(!1)
      }
    },
    4326: (x, N, n) => {
      var T = n(1702),
      e = T({
      }.toString),
      p = T(''.slice);
      x.exports = function (l) {
        return p(e(l), 8, - 1)
      }
    },
    9920: (x, N, n) => {
      var T = n(2597),
      e = n(3887),
      p = n(1236),
      l = n(3070);
      x.exports = function (v, u, c) {
        for (var g = e(u), m = l.f, y = p.f, t = 0; t < g.length; t++) {
          var o = g[t];
          !T(v, o) &&
          (!c || !T(c, o)) &&
          m(v, o, y(u, o))
        }
      }
    },
    8880: (x, N, n) => {
      var T = n(9781),
      e = n(3070),
      p = n(9114);
      x.exports = T ? function (l, v, u) {
        return e.f(l, v, p(1, u))
      }
       : function (l, v, u) {
        return l[v] = u,
        l
      }
    },
    9114: x => {
      x.exports = function (N, n) {
        return {
          enumerable: !(1 & N),
          configurable: !(2 & N),
          writable: !(4 & N),
          value: n
        }
      }
    },
    9781: (x, N, n) => {
      var T = n(7293);
      x.exports = !T(
        function () {
          return 7 != Object.defineProperty({
          }, 1, {
            get: function () {
              return 7
            }
          }) [1]
        }
      )
    },
    317: (x, N, n) => {
      var T = n(7854),
      e = n(111),
      p = T.document,
      l = e(p) &&
      e(p.createElement);
      x.exports = function (v) {
        return l ? p.createElement(v) : {
        }
      }
    },
    8113: (x, N, n) => {
      var T = n(5005);
      x.exports = T('navigator', 'userAgent') ||
      ''
    },
    7392: (x, N, n) => {
      var c,
      g,
      T = n(7854),
      e = n(8113),
      p = T.process,
      l = T.Deno,
      v = p &&
      p.versions ||
      l &&
      l.version,
      u = v &&
      v.v8;
      u &&
      (g = (c = u.split('.')) [0] > 0 && c[0] < 4 ? 1 : + (c[0] + c[1])),
      !g &&
      e &&
      (!(c = e.match(/Edge\/(\d+)/)) || c[1] >= 74) &&
      (c = e.match(/Chrome\/(\d+)/)) &&
      (g = + c[1]),
      x.exports = g
    },
    748: x => {
      x.exports = [
        'constructor',
        'hasOwnProperty',
        'isPrototypeOf',
        'propertyIsEnumerable',
        'toLocaleString',
        'toString',
        'valueOf'
      ]
    },
    2109: (x, N, n) => {
      var T = n(7854),
      e = n(1236).f,
      p = n(8880),
      l = n(1320),
      v = n(3505),
      u = n(9920),
      c = n(4705);
      x.exports = function (g, m) {
        var r,
        s,
        i,
        k,
        R,
        y = g.target,
        t = g.global,
        o = g.stat;
        if (r = t ? T : o ? T[y] ||
        v(y, {
        }) : (T[y] || {
        }).prototype) for (s in m) {
          if (
            k = m[s],
            i = g.noTargetGet ? (R = e(r, s)) &&
            R.value : r[s],
            !c(t ? s : y + (o ? '.' : '#') + s, g.forced) &&
            void 0 !== i
          ) {
            if (typeof k == typeof i) continue;
            u(k, i)
          }(g.sham || i && i.sham) &&
          p(k, 'sham', !0),
          l(r, s, k, g)
        }
      }
    },
    7293: x => {
      x.exports = function (N) {
        try {
          return !!N()
        } catch (n) {
          return !0
        }
      }
    },
    4374: (x, N, n) => {
      var T = n(7293);
      x.exports = !T(
        function () {
          var e = function () {
          }.bind();
          return 'function' != typeof e ||
          e.hasOwnProperty('prototype')
        }
      )
    },
    6916: (x, N, n) => {
      var T = n(4374),
      e = Function.prototype.call;
      x.exports = T ? e.bind(e) : function () {
        return e.apply(e, arguments)
      }
    },
    6530: (x, N, n) => {
      var T = n(9781),
      e = n(2597),
      p = Function.prototype,
      l = T &&
      Object.getOwnPropertyDescriptor,
      v = e(p, 'name'),
      u = v &&
      'something' === function () {
      }.name,
      c = v &&
      (!T || T && l(p, 'name').configurable);
      x.exports = {
        EXISTS: v,
        PROPER: u,
        CONFIGURABLE: c
      }
    },
    1702: (x, N, n) => {
      var T = n(4374),
      e = Function.prototype,
      l = e.call,
      v = T &&
      e.bind.bind(l, l);
      x.exports = T ? function (u) {
        return u &&
        v(u)
      }
       : function (u) {
        return u &&
        function () {
          return l.apply(u, arguments)
        }
      }
    },
    5005: (x, N, n) => {
      var T = n(7854),
      e = n(614),
      p = function (l) {
        return e(l) ? l : void 0
      };
      x.exports = function (l, v) {
        return arguments.length < 2 ? p(T[l]) : T[l] &&
        T[l][v]
      }
    },
    8173: (x, N, n) => {
      var T = n(9662);
      x.exports = function (e, p) {
        var l = e[p];
        return null == l ? void 0 : T(l)
      }
    },
    7854: x => {
      var N = function (n) {
        return n &&
        n.Math == Math &&
        n
      };
      x.exports = N('object' == typeof globalThis && globalThis) ||
      N('object' == typeof window && window) ||
      N('object' == typeof self && self) ||
      N('object' == typeof global && global) ||
      function () {
        return this
      }() ||
      Function('return this') ()
    },
    2597: (x, N, n) => {
      var T = n(1702),
      e = n(7908),
      p = T({
      }.hasOwnProperty);
      x.exports = Object.hasOwn ||
      function (v, u) {
        return p(e(v), u)
      }
    },
    3501: x => {
      x.exports = {}
    },
    4664: (x, N, n) => {
      var T = n(9781),
      e = n(7293),
      p = n(317);
      x.exports = !T &&
      !e(
        function () {
          return 7 != Object.defineProperty(p('div'), 'a', {
            get: function () {
              return 7
            }
          }).a
        }
      )
    },
    8361: (x, N, n) => {
      var T = n(7854),
      e = n(1702),
      p = n(7293),
      l = n(4326),
      v = T.Object,
      u = e(''.split);
      x.exports = p(function () {
        return !v('z').propertyIsEnumerable(0)
      }) ? function (c) {
        return 'String' == l(c) ? u(c, '') : v(c)
      }
       : v
    },
    2788: (x, N, n) => {
      var T = n(1702),
      e = n(614),
      p = n(5465),
      l = T(Function.toString);
      e(p.inspectSource) ||
      (p.inspectSource = function (v) {
        return l(v)
      }),
      x.exports = p.inspectSource
    },
    9909: (x, N, n) => {
      var a,
      r,
      s,
      T = n(8536),
      e = n(7854),
      p = n(1702),
      l = n(111),
      v = n(8880),
      u = n(2597),
      c = n(5465),
      g = n(6200),
      m = n(3501),
      y = 'Object already initialized',
      t = e.TypeError;
      if (T || c.state) {
        var R = c.state ||
        (c.state = new (0, e.WeakMap)),
        w = p(R.get),
        d = p(R.has),
        S = p(R.set);
        a = function (I, H) {
          if (d(R, I)) throw new t(y);
          return H.facade = I,
          S(R, I, H),
          H
        },
        r = function (I) {
          return w(R, I) ||
          {
          }
        },
        s = function (I) {
          return d(R, I)
        }
      } else {
        var L = g('state');
        m[L] = !0,
        a = function (I, H) {
          if (u(I, L)) throw new t(y);
          return H.facade = I,
          v(I, L, H),
          H
        },
        r = function (I) {
          return u(I, L) ? I[L] : {
          }
        },
        s = function (I) {
          return u(I, L)
        }
      }
      x.exports = {
        set: a,
        get: r,
        has: s,
        enforce: function (I) {
          return s(I) ? r(I) : a(I, {
          })
        },
        getterFor: function (I) {
          return function (H) {
            var Q;
            if (!l(H) || (Q = r(H)).type !== I) throw t('Incompatible receiver, ' + I + ' required');
            return Q
          }
        }
      }
    },
    614: x => {
      x.exports = function (N) {
        return 'function' == typeof N
      }
    },
    4705: (x, N, n) => {
      var T = n(7293),
      e = n(614),
      p = /#|\.prototype\./,
      l = function (m, y) {
        var t = u[v(m)];
        return t == g ||
        t != c &&
        (e(y) ? T(y) : !!y)
      },
      v = l.normalize = function (m) {
        return String(m).replace(p, '.').toLowerCase()
      },
      u = l.data = {},
      c = l.NATIVE = 'N',
      g = l.POLYFILL = 'P';
      x.exports = l
    },
    111: (x, N, n) => {
      var T = n(614);
      x.exports = function (e) {
        return 'object' == typeof e ? null !== e : T(e)
      }
    },
    1913: x => {
      x.exports = !1
    },
    2190: (x, N, n) => {
      var T = n(7854),
      e = n(5005),
      p = n(614),
      l = n(7976),
      v = n(3307),
      u = T.Object;
      x.exports = v ? function (c) {
        return 'symbol' == typeof c
      }
       : function (c) {
        var g = e('Symbol');
        return p(g) &&
        l(g.prototype, u(c))
      }
    },
    6244: (x, N, n) => {
      var T = n(7466);
      x.exports = function (e) {
        return T(e.length)
      }
    },
    133: (x, N, n) => {
      var T = n(7392),
      e = n(7293);
      x.exports = !!Object.getOwnPropertySymbols &&
      !e(
        function () {
          var p = Symbol();
          return !String(p) ||
          !(Object(p) instanceof Symbol) ||
          !Symbol.sham &&
          T &&
          T < 41
        }
      )
    },
    8536: (x, N, n) => {
      var T = n(7854),
      e = n(614),
      p = n(2788),
      l = T.WeakMap;
      x.exports = e(l) &&
      /native code/.test(p(l))
    },
    3070: (x, N, n) => {
      var T = n(7854),
      e = n(9781),
      p = n(4664),
      l = n(3353),
      v = n(9670),
      u = n(4948),
      c = T.TypeError,
      g = Object.defineProperty,
      m = Object.getOwnPropertyDescriptor,
      y = 'enumerable',
      t = 'configurable',
      o = 'writable';
      N.f = e ? l ? function (r, s, i) {
        if (
          v(r),
          s = u(s),
          v(i),
          'function' == typeof r &&
          'prototype' === s &&
          'value' in i &&
          o in i &&
          !i[o]
        ) {
          var k = m(r, s);
          k &&
          k[o] &&
          (
            r[s] = i.value,
            i = {
              configurable: t in i ? i[t] : k[t],
              enumerable: y in i ? i[y] : k[y],
              writable: !1
            }
          )
        }
        return g(r, s, i)
      }
       : g : function (r, s, i) {
        if (v(r), s = u(s), v(i), p) try {
          return g(r, s, i)
        } catch (k) {
        }
        if ('get' in i || 'set' in i) throw c('Accessors not supported');
        return 'value' in i &&
        (r[s] = i.value),
        r
      }
    },
    1236: (x, N, n) => {
      var T = n(9781),
      e = n(6916),
      p = n(5296),
      l = n(9114),
      v = n(5656),
      u = n(4948),
      c = n(2597),
      g = n(4664),
      m = Object.getOwnPropertyDescriptor;
      N.f = T ? m : function (t, o) {
        if (t = v(t), o = u(o), g) try {
          return m(t, o)
        } catch (a) {
        }
        if (c(t, o)) return l(!e(p.f, t, o), t[o])
      }
    },
    8006: (x, N, n) => {
      var T = n(6324),
      p = n(748).concat('length', 'prototype');
      N.f = Object.getOwnPropertyNames ||
      function (v) {
        return T(v, p)
      }
    },
    5181: (x, N) => {
      N.f = Object.getOwnPropertySymbols
    },
    7976: (x, N, n) => {
      var T = n(1702);
      x.exports = T({
      }.isPrototypeOf)
    },
    6324: (x, N, n) => {
      var T = n(1702),
      e = n(2597),
      p = n(5656),
      l = n(1318).indexOf,
      v = n(3501),
      u = T([].push);
      x.exports = function (c, g) {
        var o,
        m = p(c),
        y = 0,
        t = [];
        for (o in m) !e(v, o) &&
        e(m, o) &&
        u(t, o);
        for (; g.length > y; ) e(m, o = g[y++]) &&
        (~l(t, o) || u(t, o));
        return t
      }
    },
    1956: (x, N, n) => {
      var T = n(6324),
      e = n(748);
      x.exports = Object.keys ||
      function (l) {
        return T(l, e)
      }
    },
    5296: (x, N) => {
      'use strict';
      var n = {}.propertyIsEnumerable,
      T = Object.getOwnPropertyDescriptor,
      e = T &&
      !n.call({
        1: 2
      }, 1);
      N.f = e ? function (l) {
        var v = T(this, l);
        return !!v &&
        v.enumerable
      }
       : n
    },
    4699: (x, N, n) => {
      var T = n(9781),
      e = n(1702),
      p = n(1956),
      l = n(5656),
      u = e(n(5296).f),
      c = e([].push),
      g = function (m) {
        return function (y) {
          for (var i, t = l(y), o = p(t), a = o.length, r = 0, s = []; a > r; ) i = o[r++],
          (!T || u(t, i)) &&
          c(s, m ? [
            i,
            t[i]
          ] : t[i]);
          return s
        }
      };
      x.exports = {
        entries: g(!0),
        values: g(!1)
      }
    },
    2140: (x, N, n) => {
      var T = n(7854),
      e = n(6916),
      p = n(614),
      l = n(111),
      v = T.TypeError;
      x.exports = function (u, c) {
        var g,
        m;
        if (
          'string' === c &&
          p(g = u.toString) &&
          !l(m = e(g, u)) ||
          p(g = u.valueOf) &&
          !l(m = e(g, u)) ||
          'string' !== c &&
          p(g = u.toString) &&
          !l(m = e(g, u))
        ) return m;
        throw v('Can\'t convert object to primitive value')
      }
    },
    3887: (x, N, n) => {
      var T = n(5005),
      e = n(1702),
      p = n(8006),
      l = n(5181),
      v = n(9670),
      u = e([].concat);
      x.exports = T('Reflect', 'ownKeys') ||
      function (g) {
        var m = p.f(v(g)),
        y = l.f;
        return y ? u(m, y(g)) : m
      }
    },
    857: (x, N, n) => {
      var T = n(7854);
      x.exports = T
    },
    1320: (x, N, n) => {
      var T = n(7854),
      e = n(614),
      p = n(2597),
      l = n(8880),
      v = n(3505),
      u = n(2788),
      c = n(9909),
      g = n(6530).CONFIGURABLE,
      m = c.get,
      y = c.enforce,
      t = String(String).split('String');
      (
        x.exports = function (o, a, r, s) {
          var d,
          i = !!s &&
          !!s.unsafe,
          k = !!s &&
          !!s.enumerable,
          R = !!s &&
          !!s.noTargetGet,
          w = s &&
          void 0 !== s.name ? s.name : a;
          e(r) &&
          (
            'Symbol(' === String(w).slice(0, 7) &&
            (w = '[' + String(w).replace(/^Symbol\(([^)]*)\)/, '$1') + ']'),
            (!p(r, 'name') || g && r.name !== w) &&
            l(r, 'name', w),
            (d = y(r)).source ||
            (d.source = t.join('string' == typeof w ? w : ''))
          ),
          o !== T ? (i ? !R &&
          o[a] &&
          (k = !0) : delete o[a], k ? o[a] = r : l(o, a, r)) : k ? o[a] = r : v(a, r)
        }
      ) (
        Function.prototype,
        'toString',
        function () {
          return e(this) &&
          m(this).source ||
          u(this)
        }
      )
    },
    4488: (x, N, n) => {
      var e = n(7854).TypeError;
      x.exports = function (p) {
        if (null == p) throw e('Can\'t call method on ' + p);
        return p
      }
    },
    3505: (x, N, n) => {
      var T = n(7854),
      e = Object.defineProperty;
      x.exports = function (p, l) {
        try {
          e(T, p, {
            value: l,
            configurable: !0,
            writable: !0
          })
        } catch (v) {
          T[p] = l
        }
        return l
      }
    },
    6200: (x, N, n) => {
      var T = n(2309),
      e = n(9711),
      p = T('keys');
      x.exports = function (l) {
        return p[l] ||
        (p[l] = e(l))
      }
    },
    5465: (x, N, n) => {
      var T = n(7854),
      e = n(3505),
      p = '__core-js_shared__',
      l = T[p] ||
      e(p, {
      });
      x.exports = l
    },
    2309: (x, N, n) => {
      var T = n(1913),
      e = n(5465);
      (x.exports = function (p, l) {
        return e[p] ||
        (e[p] = void 0 !== l ? l : {
        })
      }) ('versions', []).push({
        version: '3.20.3',
        mode: T ? 'pure' : 'global',
        copyright: '© 2014-2022 Denis Pushkarev (zloirock.ru)',
        license: 'https://github.com/zloirock/core-js/blob/v3.20.3/LICENSE',
        source: 'https://github.com/zloirock/core-js'
      })
    },
    1400: (x, N, n) => {
      var T = n(9303),
      e = Math.max,
      p = Math.min;
      x.exports = function (l, v) {
        var u = T(l);
        return u < 0 ? e(u + v, 0) : p(u, v)
      }
    },
    5656: (x, N, n) => {
      var T = n(8361),
      e = n(4488);
      x.exports = function (p) {
        return T(e(p))
      }
    },
    9303: x => {
      var N = Math.ceil,
      n = Math.floor;
      x.exports = function (T) {
        var e = + T;
        return e != e ||
        0 === e ? 0 : (e > 0 ? n : N) (e)
      }
    },
    7466: (x, N, n) => {
      var T = n(9303),
      e = Math.min;
      x.exports = function (p) {
        return p > 0 ? e(T(p), 9007199254740991) : 0
      }
    },
    7908: (x, N, n) => {
      var T = n(7854),
      e = n(4488),
      p = T.Object;
      x.exports = function (l) {
        return p(e(l))
      }
    },
    7593: (x, N, n) => {
      var T = n(7854),
      e = n(6916),
      p = n(111),
      l = n(2190),
      v = n(8173),
      u = n(2140),
      c = n(5112),
      g = T.TypeError,
      m = c('toPrimitive');
      x.exports = function (y, t) {
        if (!p(y) || l(y)) return y;
        var a,
        o = v(y, m);
        if (o) {
          if (void 0 === t && (t = 'default'), a = e(o, y, t), !p(a) || l(a)) return a;
          throw g('Can\'t convert object to primitive value')
        }
        return void 0 === t &&
        (t = 'number'),
        u(y, t)
      }
    },
    4948: (x, N, n) => {
      var T = n(7593),
      e = n(2190);
      x.exports = function (p) {
        var l = T(p, 'string');
        return e(l) ? l : l + ''
      }
    },
    6330: (x, N, n) => {
      var e = n(7854).String;
      x.exports = function (p) {
        try {
          return e(p)
        } catch (l) {
          return 'Object'
        }
      }
    },
    9711: (x, N, n) => {
      var T = n(1702),
      e = 0,
      p = Math.random(),
      l = T(1 .toString);
      x.exports = function (v) {
        return 'Symbol(' + (void 0 === v ? '' : v) + ')_' + l(++e + p, 36)
      }
    },
    3307: (x, N, n) => {
      var T = n(133);
      x.exports = T &&
      !Symbol.sham &&
      'symbol' == typeof Symbol.iterator
    },
    3353: (x, N, n) => {
      var T = n(9781),
      e = n(7293);
      x.exports = T &&
      e(
        function () {
          return 42 != Object.defineProperty(function () {
          }, 'prototype', {
            value: 42,
            writable: !1
          }).prototype
        }
      )
    },
    5112: (x, N, n) => {
      var T = n(7854),
      e = n(2309),
      p = n(2597),
      l = n(9711),
      v = n(133),
      u = n(3307),
      c = e('wks'),
      g = T.Symbol,
      m = g &&
      g.for,
      y = u ? g : g &&
      g.withoutSetter ||
      l;
      x.exports = function (t) {
        if (!p(c, t) || !v && 'string' != typeof c[t]) {
          var o = 'Symbol.' + t;
          c[t] = v &&
          p(g, t) ? g[t] : u &&
          m ? m(o) : y(o)
        }
        return c[t]
      }
    },
    6833: (x, N, n) => {
      var T = n(2109),
      e = n(4699).values;
      T({
        target: 'Object',
        stat: !0
      }, {
        values: function (l) {
          return e(l)
        }
      })
    },
    6583: (x, N, n) => {
      var T = n(4667);
      x.exports = T
    },
    4124: () => {
      var n,
      T,
      x,
      N;
      N = {},
      function (n, T) {
        function p() {
          this._delay = 0,
          this._endDelay = 0,
          this._fill = 'none',
          this._iterationStart = 0,
          this._iterations = 1,
          this._duration = 0,
          this._playbackRate = 1,
          this._direction = 'normal',
          this._easing = 'linear',
          this._easingFunction = I
        }
        function l() {
          return n.isDeprecated(
            'Invalid timing inputs',
            '2016-03-02',
            'TypeError exceptions will be thrown instead.',
            !0
          )
        }
        function v(D, Y, G) {
          var ie = new p;
          return Y &&
          (ie.fill = 'both', ie.duration = 'auto'),
          'number' != typeof D ||
          isNaN(D) ? void 0 !== D &&
          Object.getOwnPropertyNames(D).forEach(
            function (U) {
              if ('auto' != D[U]) {
                if (
                  ('number' == typeof ie[U] || 'duration' == U) &&
                  ('number' != typeof D[U] || isNaN(D[U])) ||
                  'fill' == U &&
                  - 1 == S.indexOf(D[U]) ||
                  'direction' == U &&
                  - 1 == L.indexOf(D[U]) ||
                  'playbackRate' == U &&
                  1 !== D[U] &&
                  n.isDeprecated(
                    'AnimationEffectTiming.playbackRate',
                    '2014-11-28',
                    'Use Animation.playbackRate instead.'
                  )
                ) return;
                ie[U] = D[U]
              }
            }
          ) : ie.duration = D,
          ie
        }
        function g(D, Y, G, ie) {
          return D < 0 ||
          D > 1 ||
          G < 0 ||
          G > 1 ? I : function (U) {
            function Oe(ct, lt, Ue) {
              return 3 * ct * (1 - Ue) * (1 - Ue) * Ue + 3 * lt * (1 - Ue) * Ue * Ue + Ue * Ue * Ue
            }
            if (U <= 0) {
              var Me = 0;
              return D > 0 ? Me = Y / D : !Y &&
              G > 0 &&
              (Me = ie / G),
              Me * U
            }
            if (U >= 1) {
              var We = 0;
              return G < 1 ? We = (ie - 1) / (G - 1) : 1 == G &&
              D < 1 &&
              (We = (Y - 1) / (D - 1)),
              1 + We * (U - 1)
            }
            for (var Ke = 0, qe = 1; Ke < qe; ) {
              var Je = (Ke + qe) / 2,
              st = Oe(D, G, Je);
              if (Math.abs(U - st) < 0.00001) return Oe(Y, ie, Je);
              st < U ? Ke = Je : qe = Je
            }
            return Oe(Y, ie, Je)
          }
        }
        function m(D, Y) {
          return function (G) {
            if (G >= 1) return 1;
            var ie = 1 / D;
            return (G += Y * ie) - G % ie
          }
        }
        function y(D) {
          te ||
          (te = document.createElement('div').style),
          te.animationTimingFunction = '',
          te.animationTimingFunction = D;
          var Y = te.animationTimingFunction;
          if ('' == Y && l()) throw new TypeError(D + ' is not a valid value for easing');
          return Y
        }
        function t(D) {
          if ('linear' == D) return I;
          var Y = be.exec(D);
          if (Y) return g.apply(this, Y.slice(1).map(Number));
          var G = le.exec(D);
          if (G) return m(Number(G[1]), z);
          var ie = Se.exec(D);
          return ie ? m(Number(ie[1]), {
            start: H,
            middle: Q,
            end: z
          }
          [
            ie[2]
          ]) : C[D] ||
          I
        }
        function r(D, Y, G) {
          if (null == Y) return je;
          var ie = G.delay + D + G.endDelay;
          return Y < Math.min(G.delay, ie) ? Ce : Y >= Math.min(G.delay + D, ie) ? ze : Xe
        }
        var S = 'backwards|forwards|both|none'.split('|'),
        L = 'reverse|alternate|alternate-reverse'.split('|'),
        I = function (D) {
          return D
        };
        p.prototype = {
          _setMember: function (D, Y) {
            this['_' + D] = Y,
            this._effect &&
            (
              this._effect._timingInput[D] = Y,
              this._effect._timing = n.normalizeTimingInput(this._effect._timingInput),
              this._effect.activeDuration = n.calculateActiveDuration(this._effect._timing),
              this._effect._animation &&
              this._effect._animation._rebuildUnderlyingAnimation()
            )
          },
          get playbackRate() {
            return this._playbackRate
          },
          set delay(D) {
            this._setMember('delay', D)
          },
          get delay() {
            return this._delay
          },
          set endDelay(D) {
            this._setMember('endDelay', D)
          },
          get endDelay() {
            return this._endDelay
          },
          set fill(D) {
            this._setMember('fill', D)
          },
          get fill() {
            return this._fill
          },
          set iterationStart(D) {
            if ((isNaN(D) || D < 0) && l()) throw new TypeError('iterationStart must be a non-negative number, received: ' + D);
            this._setMember('iterationStart', D)
          },
          get iterationStart() {
            return this._iterationStart
          },
          set duration(D) {
            if ('auto' != D && (isNaN(D) || D < 0) && l()) throw new TypeError('duration must be non-negative or auto, received: ' + D);
            this._setMember('duration', D)
          },
          get duration() {
            return this._duration
          },
          set direction(D) {
            this._setMember('direction', D)
          },
          get direction() {
            return this._direction
          },
          set easing(D) {
            this._easingFunction = t(y(D)),
            this._setMember('easing', D)
          },
          get easing() {
            return this._easing
          },
          set iterations(D) {
            if ((isNaN(D) || D < 0) && l()) throw new TypeError('iterations must be non-negative, received: ' + D);
            this._setMember('iterations', D)
          },
          get iterations() {
            return this._iterations
          }
        };
        var H = 1,
        Q = 0.5,
        z = 0,
        C = {
          ease: g(0.25, 0.1, 0.25, 1),
          'ease-in': g(0.42, 0, 1, 1),
          'ease-out': g(0, 0, 0.58, 1),
          'ease-in-out': g(0.42, 0, 0.58, 1),
          'step-start': m(1, H),
          'step-middle': m(1, Q),
          'step-end': m(1, z)
        },
        te = null,
        me = '\\s*(-?\\d+\\.?\\d*|-?\\.\\d+)\\s*',
        be = new RegExp('cubic-bezier\\(' + me + ',' + me + ',' + me + ',' + me + '\\)'),
        le = /steps\(\s*(\d+)\s*\)/,
        Se = /steps\(\s*(\d+)\s*,\s*(start|middle|end)\s*\)/,
        je = 0,
        Ce = 1,
        ze = 2,
        Xe = 3;
        n.cloneTimingInput = function e(D) {
          if ('number' == typeof D) return D;
          var Y = {};
          for (var G in D) Y[G] = D[G];
          return Y
        },
        n.makeTiming = v,
        n.numericTimingToObject = function u(D) {
          return 'number' == typeof D &&
          (D = isNaN(D) ? {
            duration: 0
          }
           : {
            duration: D
          }),
          D
        },
        n.normalizeTimingInput = function c(D, Y) {
          return v(D = n.numericTimingToObject(D), Y)
        },
        n.calculateActiveDuration = function o(D) {
          return Math.abs(
            function a(D) {
              return 0 === D.duration ||
              0 === D.iterations ? 0 : D.duration * D.iterations
            }(D) / D.playbackRate
          )
        },
        n.calculateIterationProgress = function d(D, Y, G) {
          var ie = r(D, Y, G),
          U = function s(D, Y, G, ie, U) {
            switch (ie) {
              case Ce:
                return 'backwards' == Y ||
                'both' == Y ? 0 : null;
              case Xe:
                return G - U;
              case ze:
                return 'forwards' == Y ||
                'both' == Y ? D : null;
              case je:
                return null
            }
          }(D, G.fill, Y, ie, G.delay);
          if (null === U) return null;
          var Oe = function i(D, Y, G, ie, U) {
            var Oe = U;
            return 0 === D ? Y !== Ce &&
            (Oe += G) : Oe += ie / D,
            Oe
          }(G.duration, ie, G.iterations, U, G.iterationStart),
          Me = function k(D, Y, G, ie, U, Oe) {
            var Me = D === 1 / 0 ? Y % 1 : D % 1;
            return 0 !== Me ||
            G !== ze ||
            0 === ie ||
            0 === U &&
            0 !== Oe ||
            (Me = 1),
            Me
          }(Oe, G.iterationStart, ie, G.iterations, U, G.duration),
          We = function R(D, Y, G, ie) {
            return D === ze &&
            Y === 1 / 0 ? 1 / 0 : 1 === G ? Math.floor(ie) - 1 : Math.floor(ie)
          }(ie, G.iterations, Me, Oe),
          Ke = function w(D, Y, G) {
            var ie = D;
            if ('normal' !== D && 'reverse' !== D) {
              var U = Y;
              'alternate-reverse' === D &&
              (U += 1),
              ie = 'normal',
              U !== 1 / 0 &&
              U % 2 != 0 &&
              (ie = 'reverse')
            }
            return 'normal' === ie ? G : 1 - G
          }(G.direction, We, Me);
          return G._easingFunction(Ke)
        },
        n.calculatePhase = r,
        n.normalizeEasing = y,
        n.parseEasingFunction = t
      }(x = {}),
      function (n, T) {
        function e(t, o) {
          return t in y &&
          y[t][o] ||
          o
        }
        function l(t, o, a) {
          if (
            !function p(t) {
              return 'display' === t ||
              0 === t.lastIndexOf('animation', 0) ||
              0 === t.lastIndexOf('transition', 0)
            }(t)
          ) {
            var r = c[t];
            if (r) for (var s in g.style[t] = o, r) {
              var i = r[s];
              a[i] = e(i, g.style[i])
            } else a[t] = e(t, o)
          }
        }
        function v(t) {
          var o = [];
          for (var a in t) if (!(a in [
            'easing',
            'offset',
            'composite'
          ])) {
            var r = t[a];
            Array.isArray(r) ||
            (r = [
              r
            ]);
            for (var s, i = r.length, k = 0; k < i; k++) (s = {}).offset = 'offset' in t ? t.offset : 1 == i ? 1 : k / (i - 1),
            'easing' in t &&
            (s.easing = t.easing),
            'composite' in t &&
            (s.composite = t.composite),
            s[a] = r[k],
            o.push(s)
          }
          return o.sort(function (R, w) {
            return R.offset - w.offset
          }),
          o
        }
        var c = {
          background: [
            'backgroundImage',
            'backgroundPosition',
            'backgroundSize',
            'backgroundRepeat',
            'backgroundAttachment',
            'backgroundOrigin',
            'backgroundClip',
            'backgroundColor'
          ],
          border: [
            'borderTopColor',
            'borderTopStyle',
            'borderTopWidth',
            'borderRightColor',
            'borderRightStyle',
            'borderRightWidth',
            'borderBottomColor',
            'borderBottomStyle',
            'borderBottomWidth',
            'borderLeftColor',
            'borderLeftStyle',
            'borderLeftWidth'
          ],
          borderBottom: [
            'borderBottomWidth',
            'borderBottomStyle',
            'borderBottomColor'
          ],
          borderColor: [
            'borderTopColor',
            'borderRightColor',
            'borderBottomColor',
            'borderLeftColor'
          ],
          borderLeft: [
            'borderLeftWidth',
            'borderLeftStyle',
            'borderLeftColor'
          ],
          borderRadius: [
            'borderTopLeftRadius',
            'borderTopRightRadius',
            'borderBottomRightRadius',
            'borderBottomLeftRadius'
          ],
          borderRight: [
            'borderRightWidth',
            'borderRightStyle',
            'borderRightColor'
          ],
          borderTop: [
            'borderTopWidth',
            'borderTopStyle',
            'borderTopColor'
          ],
          borderWidth: [
            'borderTopWidth',
            'borderRightWidth',
            'borderBottomWidth',
            'borderLeftWidth'
          ],
          flex: [
            'flexGrow',
            'flexShrink',
            'flexBasis'
          ],
          font: [
            'fontFamily',
            'fontSize',
            'fontStyle',
            'fontVariant',
            'fontWeight',
            'lineHeight'
          ],
          margin: [
            'marginTop',
            'marginRight',
            'marginBottom',
            'marginLeft'
          ],
          outline: [
            'outlineColor',
            'outlineStyle',
            'outlineWidth'
          ],
          padding: [
            'paddingTop',
            'paddingRight',
            'paddingBottom',
            'paddingLeft'
          ]
        },
        g = document.createElementNS('http://www.w3.org/1999/xhtml', 'div'),
        m = {
          thin: '1px',
          medium: '3px',
          thick: '5px'
        },
        y = {
          borderBottomWidth: m,
          borderLeftWidth: m,
          borderRightWidth: m,
          borderTopWidth: m,
          fontSize: {
            'xx-small': '60%',
            'x-small': '75%',
            small: '89%',
            medium: '100%',
            large: '120%',
            'x-large': '150%',
            'xx-large': '200%'
          },
          fontWeight: {
            normal: '400',
            bold: '700'
          },
          outlineWidth: m,
          textShadow: {
            none: '0px 0px 0px transparent'
          },
          boxShadow: {
            none: '0px 0px 0px 0px transparent'
          }
        };
        n.convertToArrayForm = v,
        n.normalizeKeyframes = function u(t) {
          if (null == t) return [];
          window.Symbol &&
          Symbol.iterator &&
          Array.prototype.from &&
          t[Symbol.iterator] &&
          (t = Array.from(t)),
          Array.isArray(t) ||
          (t = v(t));
          for (
            var a = t.map(
              function (R) {
                var w = {};
                for (var d in R) {
                  var S = R[d];
                  if ('offset' == d) {
                    if (null != S) {
                      if (S = Number(S), !isFinite(S)) throw new TypeError('Keyframe offsets must be numbers.');
                      if (S < 0 || S > 1) throw new TypeError('Keyframe offsets must be between 0 and 1.')
                    }
                  } else if ('composite' == d) {
                    if ('add' == S || 'accumulate' == S) throw {
                      type: DOMException.NOT_SUPPORTED_ERR,
                      name: 'NotSupportedError',
                      message: 'add compositing is not supported'
                    };
                    if ('replace' != S) throw new TypeError('Invalid composite mode ' + S + '.')
                  } else S = 'easing' == d ? n.normalizeEasing(S) : '' + S;
                  l(d, S, w)
                }
                return null == w.offset &&
                (w.offset = null),
                null == w.easing &&
                (w.easing = 'linear'),
                w
              }
            ),
            r = !0,
            s = - 1 / 0,
            i = 0;
            i < a.length;
            i++
          ) {
            var k = a[i].offset;
            if (null != k) {
              if (k < s) throw new TypeError(
                'Keyframes are not loosely sorted by offset. Sort or specify offsets.'
              );
              s = k
            } else r = !1
          }
          return a = a.filter(function (R) {
            return R.offset >= 0 &&
            R.offset <= 1
          }),
          r ||
          function o() {
            var R = a.length;
            null == a[R - 1].offset &&
            (a[R - 1].offset = 1),
            R > 1 &&
            null == a[0].offset &&
            (a[0].offset = 0);
            for (var w = 0, d = a[0].offset, S = 1; S < R; S++) {
              var L = a[S].offset;
              if (null != L) {
                for (var I = 1; I < S - w; I++) a[w + I].offset = d + (L - d) * I / (S - w);
                w = S,
                d = L
              }
            }
          }(),
          a
        }
      }(x),
      T = {},
      (n = x).isDeprecated = function (e, p, l, v) {
        var u = v ? 'are' : 'is',
        c = new Date,
        g = new Date(p);
        return g.setMonth(g.getMonth() + 3),
        !(
          c < g &&
          (
            e in T ||
            console.warn(
              'Web Animations: ' + e + ' ' + u + ' deprecated and will stop working on ' + g.toDateString() + '. ' + l
            ),
            T[e] = !0,
            1
          )
        )
      },
      n.deprecated = function (e, p, l, v) {
        var u = v ? 'are' : 'is';
        if (n.isDeprecated(e, p, l, v)) throw new Error(e + ' ' + u + ' no longer supported. ' + l)
      },
      function () {
        if (document.documentElement.animate) {
          var n = document.documentElement.animate([], 0),
          T = !0;
          if (
            n &&
            (
              T = !1,
              'play|currentTime|pause|reverse|playbackRate|cancel|finish|startTime|playState'.split('|').forEach(function (e) {
                void 0 === n[e] &&
                (T = !0)
              })
            ),
            !T
          ) return
        }
        var e,
        p;
        e = x,
        (p = N).convertEffectInput = function (c) {
          var m = function v(c) {
            for (var g = {}, m = 0; m < c.length; m++) for (var y in c[m]) if ('offset' != y && 'easing' != y && 'composite' != y) {
              var t = {
                offset: c[m].offset,
                easing: c[m].easing,
                value: c[m][y]
              };
              g[y] = g[y] ||
              [],
              g[y].push(t)
            }
            for (var o in g) {
              var a = g[o];
              if (0 != a[0].offset || 1 != a[a.length - 1].offset) throw {
                type: DOMException.NOT_SUPPORTED_ERR,
                name: 'NotSupportedError',
                message: 'Partial keyframes are not supported'
              }
            }
            return g
          }(e.normalizeKeyframes(c)),
          y = function u(c) {
            var g = [];
            for (var m in c) for (var y = c[m], t = 0; t < y.length - 1; t++) {
              var o = t,
              a = t + 1,
              r = y[o].offset,
              s = y[a].offset,
              i = r,
              k = s;
              0 == t &&
              (i = - 1 / 0, 0 == s && (a = o)),
              t == y.length - 2 &&
              (k = 1 / 0, 1 == r && (o = a)),
              g.push({
                applyFrom: i,
                applyTo: k,
                startOffset: y[o].offset,
                endOffset: y[a].offset,
                easingFunction: e.parseEasingFunction(y[o].easing),
                property: m,
                interpolation: p.propertyInterpolation(m, y[o].value, y[a].value)
              })
            }
            return g.sort(function (R, w) {
              return R.startOffset - w.startOffset
            }),
            g
          }(m);
          return function (t, o) {
            if (null != o) y.filter(function (r) {
              return o >= r.applyFrom &&
              o < r.applyTo
            }).forEach(
              function (r) {
                var i = r.endOffset - r.startOffset,
                k = 0 == i ? 0 : r.easingFunction((o - r.startOffset) / i);
                p.apply(t, r.property, r.interpolation(k))
              }
            );
             else for (var a in m) 'offset' != a &&
            'easing' != a &&
            'composite' != a &&
            p.clear(t, a)
          }
        },
        function (e, p, l) {
          function v(t) {
            return t.replace(/-(.)/g, function (o, a) {
              return a.toUpperCase()
            })
          }
          function u(t, o, a) {
            m[a] = m[a] ||
            [],
            m[a].push([t,
            o])
          }
          var m = {};
          p.addPropertiesHandler = function c(t, o, a) {
            for (var r = 0; r < a.length; r++) u(t, o, v(a[r]))
          };
          var y = {
            backgroundColor: 'transparent',
            backgroundPosition: '0% 0%',
            borderBottomColor: 'currentColor',
            borderBottomLeftRadius: '0px',
            borderBottomRightRadius: '0px',
            borderBottomWidth: '3px',
            borderLeftColor: 'currentColor',
            borderLeftWidth: '3px',
            borderRightColor: 'currentColor',
            borderRightWidth: '3px',
            borderSpacing: '2px',
            borderTopColor: 'currentColor',
            borderTopLeftRadius: '0px',
            borderTopRightRadius: '0px',
            borderTopWidth: '3px',
            bottom: 'auto',
            clip: 'rect(0px, 0px, 0px, 0px)',
            color: 'black',
            fontSize: '100%',
            fontWeight: '400',
            height: 'auto',
            left: 'auto',
            letterSpacing: 'normal',
            lineHeight: '120%',
            marginBottom: '0px',
            marginLeft: '0px',
            marginRight: '0px',
            marginTop: '0px',
            maxHeight: 'none',
            maxWidth: 'none',
            minHeight: '0px',
            minWidth: '0px',
            opacity: '1.0',
            outlineColor: 'invert',
            outlineOffset: '0px',
            outlineWidth: '3px',
            paddingBottom: '0px',
            paddingLeft: '0px',
            paddingRight: '0px',
            paddingTop: '0px',
            right: 'auto',
            strokeDasharray: 'none',
            strokeDashoffset: '0px',
            textIndent: '0px',
            textShadow: '0px 0px 0px transparent',
            top: 'auto',
            transform: '',
            verticalAlign: '0px',
            visibility: 'visible',
            width: 'auto',
            wordSpacing: 'normal',
            zIndex: 'auto'
          };
          p.propertyInterpolation = function g(t, o, a) {
            var r = t;
            /-/.test(t) &&
            !e.isDeprecated(
              'Hyphenated property names',
              '2016-03-22',
              'Use camelCase instead.',
              !0
            ) &&
            (r = v(t)),
            'initial' != o &&
            'initial' != a ||
            ('initial' == o && (o = y[r]), 'initial' == a && (a = y[r]));
            for (var s = o == a ? [] : m[r], i = 0; s && i < s.length; i++) {
              var k = s[i][0](o),
              R = s[i][0](a);
              if (void 0 !== k && void 0 !== R) {
                var w = s[i][1](k, R);
                if (w) {
                  var d = p.Interpolation.apply(null, w);
                  return function (S) {
                    return 0 == S ? o : 1 == S ? a : d(S)
                  }
                }
              }
            }
            return p.Interpolation(!1, !0, function (S) {
              return S ? a : o
            })
          }
        }(x, N),
        function (e, p, l) {
          p.KeyframeEffect = function (u, c, g, m) {
            var y,
            t = function v(u) {
              var c = e.calculateActiveDuration(u),
              g = function (m) {
                return e.calculateIterationProgress(c, m, u)
              };
              return g._totalDuration = u.delay + c + u.endDelay,
              g
            }(e.normalizeTimingInput(g)),
            o = p.convertEffectInput(c),
            a = function () {
              o(u, y)
            };
            return a._update = function (r) {
              return null !== (y = t(r))
            },
            a._clear = function () {
              o(u, null)
            },
            a._hasSameTarget = function (r) {
              return u === r
            },
            a._target = u,
            a._totalDuration = t._totalDuration,
            a._id = m,
            a
          }
        }(x, N),
        function (e, p) {
          function v(r, s, i) {
            i.enumerable = !0,
            i.configurable = !0,
            Object.defineProperty(r, s, i)
          }
          function u(r) {
            this._element = r,
            this._surrogateStyle = document.createElementNS('http://www.w3.org/1999/xhtml', 'div').style,
            this._style = r.style,
            this._length = 0,
            this._isAnimatedProperty = {},
            this._updateSvgTransformAttr = function l(r, s) {
              return !(!s.namespaceURI || - 1 == s.namespaceURI.indexOf('/svg')) &&
              (
                g in r ||
                (
                  r[g] = /Trident|MSIE|IEMobile|Edge|Android 4/i.test(r.navigator.userAgent)
                ),
                r[g]
              )
            }(window, r),
            this._savedTransformAttr = null;
            for (var s = 0; s < this._style.length; s++) {
              var i = this._style[s];
              this._surrogateStyle[i] = this._style[i]
            }
            this._updateIndices()
          }
          var g = '_webAnimationsUpdateSvgTransformAttr',
          m = {
            cssText: 1,
            length: 1,
            parentRule: 1
          },
          y = {
            getPropertyCSSValue: 1,
            getPropertyPriority: 1,
            getPropertyValue: 1,
            item: 1,
            removeProperty: 1,
            setProperty: 1
          },
          t = {
            removeProperty: 1,
            setProperty: 1
          };
          for (
            var o in u.prototype = {
              get cssText() {
                return this._surrogateStyle.cssText
              },
              set cssText(r) {
                for (var s = {}, i = 0; i < this._surrogateStyle.length; i++) s[this._surrogateStyle[i]] = !0;
                for (
                  this._surrogateStyle.cssText = r,
                  this._updateIndices(),
                  i = 0;
                  i < this._surrogateStyle.length;
                  i++
                ) s[this._surrogateStyle[i]] = !0;
                for (var k in s) this._isAnimatedProperty[k] ||
                this._style.setProperty(k, this._surrogateStyle.getPropertyValue(k))
              },
              get length() {
                return this._surrogateStyle.length
              },
              get parentRule() {
                return this._style.parentRule
              },
              _updateIndices: function () {
                for (; this._length < this._surrogateStyle.length; ) Object.defineProperty(
                  this,
                  this._length,
                  {
                    configurable: !0,
                    enumerable: !1,
                    get: function (r) {
                      return function () {
                        return this._surrogateStyle[r]
                      }
                    }(this._length)
                  }
                ),
                this._length++;
                for (; this._length > this._surrogateStyle.length; ) this._length--,
                Object.defineProperty(
                  this,
                  this._length,
                  {
                    configurable: !0,
                    enumerable: !1,
                    value: void 0
                  }
                )
              },
              _set: function (r, s) {
                this._style[r] = s,
                this._isAnimatedProperty[r] = !0,
                this._updateSvgTransformAttr &&
                'transform' == e.unprefixedPropertyName(r) &&
                (
                  null == this._savedTransformAttr &&
                  (
                    this._savedTransformAttr = this._element.getAttribute('transform')
                  ),
                  this._element.setAttribute('transform', e.transformToSvgMatrix(s))
                )
              },
              _clear: function (r) {
                this._style[r] = this._surrogateStyle[r],
                this._updateSvgTransformAttr &&
                'transform' == e.unprefixedPropertyName(r) &&
                (
                  this._savedTransformAttr ? this._element.setAttribute('transform', this._savedTransformAttr) : this._element.removeAttribute('transform'),
                  this._savedTransformAttr = null
                ),
                delete this._isAnimatedProperty[r]
              }
            },
            y
          ) u.prototype[o] = function (r, s) {
            return function () {
              var i = this._surrogateStyle[r].apply(this._surrogateStyle, arguments);
              return s &&
              (
                this._isAnimatedProperty[arguments[0]] ||
                this._style[r].apply(this._style, arguments),
                this._updateIndices()
              ),
              i
            }
          }(o, o in t);
          for (var a in document.documentElement.style) a in m ||
          a in y ||
          function (r) {
            v(
              u.prototype,
              r,
              {
                get: function () {
                  return this._surrogateStyle[r]
                },
                set: function (s) {
                  this._surrogateStyle[r] = s,
                  this._updateIndices(),
                  this._isAnimatedProperty[r] ||
                  (this._style[r] = s)
                }
              }
            )
          }(a);
          e.apply = function (r, s, i) {
            (
              function c(r) {
                if (!r._webAnimationsPatchedStyle) {
                  var s = new u(r);
                  try {
                    v(r, 'style', {
                      get: function () {
                        return s
                      }
                    })
                  } catch (i) {
                    r.style._set = function (k, R) {
                      r.style[k] = R
                    },
                    r.style._clear = function (k) {
                      r.style[k] = ''
                    }
                  }
                  r._webAnimationsPatchedStyle = r.style
                }
              }
            ) (r),
            r.style._set(e.propertyName(s), i)
          },
          e.clear = function (r, s) {
            r._webAnimationsPatchedStyle &&
            r.style._clear(e.propertyName(s))
          }
        }(N),
        function (e) {
          window.Element.prototype.animate = function (p, l) {
            var v = '';
            return l &&
            l.id &&
            (v = l.id),
            e.timeline._play(e.KeyframeEffect(this, p, l, v))
          }
        }(N),
        function (e, p) {
          function l(v, u, c) {
            if ('number' == typeof v && 'number' == typeof u) return v * (1 - c) + u * c;
            if ('boolean' == typeof v && 'boolean' == typeof u) return c < 0.5 ? v : u;
            if (v.length == u.length) {
              for (var g = [], m = 0; m < v.length; m++) g.push(l(v[m], u[m], c));
              return g
            }
            throw 'Mismatched interpolation arguments ' + v + ':' + u
          }
          e.Interpolation = function (v, u, c) {
            return function (g) {
              return c(l(v, u, g))
            }
          }
        }(N),
        function (e, p) {
          var u = function () {
            function c(y, t) {
              for (var o = [
                [0,
                0,
                0,
                0],
                [
                  0,
                  0,
                  0,
                  0
                ],
                [
                  0,
                  0,
                  0,
                  0
                ],
                [
                  0,
                  0,
                  0,
                  0
                ]
              ], a = 0; a < 4; a++) for (var r = 0; r < 4; r++) for (var s = 0; s < 4; s++) o[a][r] += t[a][s] * y[s][r];
              return o
            }
            return function m(y, t, o, a, r) {
              for (var s = [
                [1,
                0,
                0,
                0],
                [
                  0,
                  1,
                  0,
                  0
                ],
                [
                  0,
                  0,
                  1,
                  0
                ],
                [
                  0,
                  0,
                  0,
                  1
                ]
              ], i = 0; i < 4; i++) s[i][3] = r[i];
              for (i = 0; i < 3; i++) for (var k = 0; k < 3; k++) s[3][i] += y[k] * s[k][i];
              var R = a[0],
              w = a[1],
              d = a[2],
              S = a[3],
              L = [
                [1,
                0,
                0,
                0],
                [
                  0,
                  1,
                  0,
                  0
                ],
                [
                  0,
                  0,
                  1,
                  0
                ],
                [
                  0,
                  0,
                  0,
                  1
                ]
              ];
              L[0][0] = 1 - 2 * (w * w + d * d),
              L[0][1] = 2 * (R * w - d * S),
              L[0][2] = 2 * (R * d + w * S),
              L[1][0] = 2 * (R * w + d * S),
              L[1][1] = 1 - 2 * (R * R + d * d),
              L[1][2] = 2 * (w * d - R * S),
              L[2][0] = 2 * (R * d - w * S),
              L[2][1] = 2 * (w * d + R * S),
              L[2][2] = 1 - 2 * (R * R + w * w),
              s = c(s, L);
              var I = [
                [1,
                0,
                0,
                0],
                [
                  0,
                  1,
                  0,
                  0
                ],
                [
                  0,
                  0,
                  1,
                  0
                ],
                [
                  0,
                  0,
                  0,
                  1
                ]
              ];
              for (
                o[2] &&
                (I[2][1] = o[2], s = c(s, I)),
                o[1] &&
                (I[2][1] = 0, I[2][0] = o[0], s = c(s, I)),
                o[0] &&
                (I[2][0] = 0, I[1][0] = o[0], s = c(s, I)),
                i = 0;
                i < 3;
                i++
              ) for (k = 0; k < 3; k++) s[i][k] *= t[i];
              return function g(y) {
                return 0 == y[0][2] &&
                0 == y[0][3] &&
                0 == y[1][2] &&
                0 == y[1][3] &&
                0 == y[2][0] &&
                0 == y[2][1] &&
                1 == y[2][2] &&
                0 == y[2][3] &&
                0 == y[3][2] &&
                1 == y[3][3]
              }(s) ? [
                s[0][0],
                s[0][1],
                s[1][0],
                s[1][1],
                s[3][0],
                s[3][1]
              ] : s[0].concat(s[1], s[2], s[3])
            }
          }();
          e.composeMatrix = u,
          e.quat = function v(c, g, m) {
            var y = e.dot(c, g);
            y = function l(c, g, m) {
              return Math.max(Math.min(c, m), g)
            }(y, - 1, 1);
            var t = [];
            if (1 === y) t = c;
             else for (
              var o = Math.acos(y),
              a = 1 * Math.sin(m * o) / Math.sqrt(1 - y * y),
              r = 0;
              r < 4;
              r++
            ) t.push(c[r] * (Math.cos(m * o) - y * a) + g[r] * a);
            return t
          }
        }(N),
        function (e, p, l) {
          e.sequenceNumber = 0;
          var v = function (u, c, g) {
            this.target = u,
            this.currentTime = c,
            this.timelineTime = g,
            this.type = 'finish',
            this.bubbles = !1,
            this.cancelable = !1,
            this.currentTarget = u,
            this.defaultPrevented = !1,
            this.eventPhase = Event.AT_TARGET,
            this.timeStamp = Date.now()
          };
          p.Animation = function (u) {
            this.id = '',
            u &&
            u._id &&
            (this.id = u._id),
            this._sequenceNumber = e.sequenceNumber++,
            this._currentTime = 0,
            this._startTime = null,
            this._paused = !1,
            this._playbackRate = 1,
            this._inTimeline = !0,
            this._finishedFlag = !0,
            this.onfinish = null,
            this._finishHandlers = [],
            this._effect = u,
            this._inEffect = this._effect._update(0),
            this._idle = !0,
            this._currentTimePending = !1
          },
          p.Animation.prototype = {
            _ensureAlive: function () {
              this._inEffect = this._effect._update(
                this.playbackRate < 0 &&
                0 === this.currentTime ? - 1 : this.currentTime
              ),
              this._inTimeline ||
              !this._inEffect &&
              this._finishedFlag ||
              (this._inTimeline = !0, p.timeline._animations.push(this))
            },
            _tickCurrentTime: function (u, c) {
              u != this._currentTime &&
              (
                this._currentTime = u,
                this._isFinished &&
                !c &&
                (this._currentTime = this._playbackRate > 0 ? this._totalDuration : 0),
                this._ensureAlive()
              )
            },
            get currentTime() {
              return this._idle ||
              this._currentTimePending ? null : this._currentTime
            },
            set currentTime(u) {
              u = + u,
              isNaN(u) ||
              (
                p.restart(),
                this._paused ||
                null == this._startTime ||
                (
                  this._startTime = this._timeline.currentTime - u / this._playbackRate
                ),
                this._currentTimePending = !1,
                this._currentTime != u &&
                (
                  this._idle &&
                  (this._idle = !1, this._paused = !0),
                  this._tickCurrentTime(u, !0),
                  p.applyDirtiedAnimation(this)
                )
              )
            },
            get startTime() {
              return this._startTime
            },
            set startTime(u) {
              u = + u,
              isNaN(u) ||
              this._paused ||
              this._idle ||
              (
                this._startTime = u,
                this._tickCurrentTime(
                  (this._timeline.currentTime - this._startTime) * this.playbackRate
                ),
                p.applyDirtiedAnimation(this)
              )
            },
            get playbackRate() {
              return this._playbackRate
            },
            set playbackRate(u) {
              if (u != this._playbackRate) {
                var c = this.currentTime;
                this._playbackRate = u,
                this._startTime = null,
                'paused' != this.playState &&
                'idle' != this.playState &&
                (
                  this._finishedFlag = !1,
                  this._idle = !1,
                  this._ensureAlive(),
                  p.applyDirtiedAnimation(this)
                ),
                null != c &&
                (this.currentTime = c)
              }
            },
            get _isFinished() {
              return !this._idle &&
              (
                this._playbackRate > 0 &&
                this._currentTime >= this._totalDuration ||
                this._playbackRate < 0 &&
                this._currentTime <= 0
              )
            },
            get _totalDuration() {
              return this._effect._totalDuration
            },
            get playState() {
              return this._idle ? 'idle' : null == this._startTime &&
              !this._paused &&
              0 != this.playbackRate ||
              this._currentTimePending ? 'pending' : this._paused ? 'paused' : this._isFinished ? 'finished' : 'running'
            },
            _rewind: function () {
              if (this._playbackRate >= 0) this._currentTime = 0;
               else {
                if (!(this._totalDuration < 1 / 0)) throw new DOMException(
                  'Unable to rewind negative playback rate animation with infinite duration',
                  'InvalidStateError'
                );
                this._currentTime = this._totalDuration
              }
            },
            play: function () {
              this._paused = !1,
              (this._isFinished || this._idle) &&
              (this._rewind(), this._startTime = null),
              this._finishedFlag = !1,
              this._idle = !1,
              this._ensureAlive(),
              p.applyDirtiedAnimation(this)
            },
            pause: function () {
              this._isFinished ||
              this._paused ||
              this._idle ? this._idle &&
              (this._rewind(), this._idle = !1) : this._currentTimePending = !0,
              this._startTime = null,
              this._paused = !0
            },
            finish: function () {
              this._idle ||
              (
                this.currentTime = this._playbackRate > 0 ? this._totalDuration : 0,
                this._startTime = this._totalDuration - this.currentTime,
                this._currentTimePending = !1,
                p.applyDirtiedAnimation(this)
              )
            },
            cancel: function () {
              this._inEffect &&
              (
                this._inEffect = !1,
                this._idle = !0,
                this._paused = !1,
                this._finishedFlag = !0,
                this._currentTime = 0,
                this._startTime = null,
                this._effect._update(null),
                p.applyDirtiedAnimation(this)
              )
            },
            reverse: function () {
              this.playbackRate *= - 1,
              this.play()
            },
            addEventListener: function (u, c) {
              'function' == typeof c &&
              'finish' == u &&
              this._finishHandlers.push(c)
            },
            removeEventListener: function (u, c) {
              if ('finish' == u) {
                var g = this._finishHandlers.indexOf(c);
                g >= 0 &&
                this._finishHandlers.splice(g, 1)
              }
            },
            _fireEvents: function (u) {
              if (this._isFinished) {
                if (!this._finishedFlag) {
                  var c = new v(this, this._currentTime, u),
                  g = this._finishHandlers.concat(this.onfinish ? [
                    this.onfinish
                  ] : []);
                  setTimeout(function () {
                    g.forEach(function (m) {
                      m.call(c.target, c)
                    })
                  }, 0),
                  this._finishedFlag = !0
                }
              } else this._finishedFlag = !1
            },
            _tick: function (u, c) {
              this._idle ||
              this._paused ||
              (
                null == this._startTime ? c &&
                (this.startTime = u - this._currentTime / this.playbackRate) : this._isFinished ||
                this._tickCurrentTime((u - this._startTime) * this.playbackRate)
              ),
              c &&
              (this._currentTimePending = !1, this._fireEvents(u))
            },
            get _needsTick() {
              return this.playState in {
                pending: 1,
                running: 1
              }
              ||
              !this._finishedFlag
            },
            _targetAnimations: function () {
              var u = this._effect._target;
              return u._activeAnimations ||
              (u._activeAnimations = []),
              u._activeAnimations
            },
            _markTarget: function () {
              var u = this._targetAnimations();
              - 1 === u.indexOf(this) &&
              u.push(this)
            },
            _unmarkTarget: function () {
              var u = this._targetAnimations(),
              c = u.indexOf(this);
              - 1 !== c &&
              u.splice(c, 1)
            }
          }
        }(x, N),
        function (e, p, l) {
          function v(w) {
            var d = t;
            t = [],
            w < R.currentTime &&
            (w = R.currentTime),
            R._animations.sort(u),
            R._animations = m(w, !0, R._animations) [0],
            d.forEach(function (S) {
              S[1](w)
            }),
            g()
          }
          function u(w, d) {
            return w._sequenceNumber - d._sequenceNumber
          }
          function c() {
            this._animations = [],
            this.currentTime = window.performance &&
            performance.now ? performance.now() : 0
          }
          function g() {
            i.forEach(function (w) {
              w()
            }),
            i.length = 0
          }
          function m(w, d, S) {
            k = !0,
            s = !1,
            p.timeline.currentTime = w,
            r = !1;
            var L = [],
            I = [],
            H = [],
            Q = [];
            return S.forEach(
              function (z) {
                z._tick(w, d),
                z._inEffect ? (I.push(z._effect), z._markTarget()) : (L.push(z._effect), z._unmarkTarget()),
                z._needsTick &&
                (r = !0);
                var C = z._inEffect ||
                z._needsTick;
                z._inTimeline = C,
                C ? H.push(z) : Q.push(z)
              }
            ),
            i.push.apply(i, L),
            i.push.apply(i, I),
            r &&
            requestAnimationFrame(function () {
            }),
            k = !1,
            [
              H,
              Q
            ]
          }
          var y = window.requestAnimationFrame,
          t = [],
          o = 0;
          window.requestAnimationFrame = function (w) {
            var d = o++;
            return 0 == t.length &&
            y(v),
            t.push([d,
            w]),
            d
          },
          window.cancelAnimationFrame = function (w) {
            t.forEach(function (d) {
              d[0] == w &&
              (d[1] = function () {
              })
            })
          },
          c.prototype = {
            _play: function (w) {
              w._timing = e.normalizeTimingInput(w.timing);
              var d = new p.Animation(w);
              return d._idle = !1,
              d._timeline = this,
              this._animations.push(d),
              p.restart(),
              p.applyDirtiedAnimation(d),
              d
            }
          };
          var r = !1,
          s = !1;
          p.restart = function () {
            return r ||
            (r = !0, requestAnimationFrame(function () {
            }), s = !0),
            s
          },
          p.applyDirtiedAnimation = function (w) {
            if (!k) {
              w._markTarget();
              var d = w._targetAnimations();
              d.sort(u),
              m(p.timeline.currentTime, !1, d.slice()) [1].forEach(
                function (S) {
                  var L = R._animations.indexOf(S);
                  - 1 !== L &&
                  R._animations.splice(L, 1)
                }
              ),
              g()
            }
          };
          var i = [],
          k = !1,
          R = new c;
          p.timeline = R
        }(x, N),
        function (e, p) {
          function l(t, o) {
            for (var a = 0, r = 0; r < t.length; r++) a += t[r] * o[r];
            return a
          }
          function v(t, o) {
            return [t[0] * o[0] + t[4] * o[1] + t[8] * o[2] + t[12] * o[3],
            t[1] * o[0] + t[5] * o[1] + t[9] * o[2] + t[13] * o[3],
            t[2] * o[0] + t[6] * o[1] + t[10] * o[2] + t[14] * o[3],
            t[3] * o[0] + t[7] * o[1] + t[11] * o[2] + t[15] * o[3],
            t[0] * o[4] + t[4] * o[5] + t[8] * o[6] + t[12] * o[7],
            t[1] * o[4] + t[5] * o[5] + t[9] * o[6] + t[13] * o[7],
            t[2] * o[4] + t[6] * o[5] + t[10] * o[6] + t[14] * o[7],
            t[3] * o[4] + t[7] * o[5] + t[11] * o[6] + t[15] * o[7],
            t[0] * o[8] + t[4] * o[9] + t[8] * o[10] + t[12] * o[11],
            t[1] * o[8] + t[5] * o[9] + t[9] * o[10] + t[13] * o[11],
            t[2] * o[8] + t[6] * o[9] + t[10] * o[10] + t[14] * o[11],
            t[3] * o[8] + t[7] * o[9] + t[11] * o[10] + t[15] * o[11],
            t[0] * o[12] + t[4] * o[13] + t[8] * o[14] + t[12] * o[15],
            t[1] * o[12] + t[5] * o[13] + t[9] * o[14] + t[13] * o[15],
            t[2] * o[12] + t[6] * o[13] + t[10] * o[14] + t[14] * o[15],
            t[3] * o[12] + t[7] * o[13] + t[11] * o[14] + t[15] * o[15]]
          }
          function u(t) {
            return ((t.deg || 0) / 360 + (t.grad || 0) / 400 + (t.turn || 0)) * (2 * Math.PI) + (t.rad || 0)
          }
          function c(t) {
            switch (t.t) {
              case 'rotatex':
                var w = u(t.d[0]);
                return [1,
                0,
                0,
                0,
                0,
                Math.cos(w),
                Math.sin(w),
                0,
                0,
                - Math.sin(w),
                Math.cos(w),
                0,
                0,
                0,
                0,
                1];
              case 'rotatey':
                return w = u(t.d[0]),
                [
                  Math.cos(w),
                  0,
                  - Math.sin(w),
                  0,
                  0,
                  1,
                  0,
                  0,
                  Math.sin(w),
                  0,
                  Math.cos(w),
                  0,
                  0,
                  0,
                  0,
                  1
                ];
              case 'rotate':
              case 'rotatez':
                return w = u(t.d[0]),
                [
                  Math.cos(w),
                  Math.sin(w),
                  0,
                  0,
                  - Math.sin(w),
                  Math.cos(w),
                  0,
                  0,
                  0,
                  0,
                  1,
                  0,
                  0,
                  0,
                  0,
                  1
                ];
              case 'rotate3d':
                var d = t.d[0],
                S = t.d[1],
                L = t.d[2],
                o = (w = u(t.d[3]), d * d + S * S + L * L);
                if (0 === o) d = 1,
                S = 0,
                L = 0;
                 else if (1 !== o) {
                  var a = Math.sqrt(o);
                  d /= a,
                  S /= a,
                  L /= a
                }
                var r = Math.sin(w / 2),
                s = r * Math.cos(w / 2),
                i = r * r;
                return [1 - 2 * (S * S + L * L) * i,
                2 * (d * S * i + L * s),
                2 * (d * L * i - S * s),
                0,
                2 * (d * S * i - L * s),
                1 - 2 * (d * d + L * L) * i,
                2 * (S * L * i + d * s),
                0,
                2 * (d * L * i + S * s),
                2 * (S * L * i - d * s),
                1 - 2 * (d * d + S * S) * i,
                0,
                0,
                0,
                0,
                1];
              case 'scale':
                return [t.d[0],
                0,
                0,
                0,
                0,
                t.d[1],
                0,
                0,
                0,
                0,
                1,
                0,
                0,
                0,
                0,
                1];
              case 'scalex':
                return [t.d[0],
                0,
                0,
                0,
                0,
                1,
                0,
                0,
                0,
                0,
                1,
                0,
                0,
                0,
                0,
                1];
              case 'scaley':
                return [1,
                0,
                0,
                0,
                0,
                t.d[0],
                0,
                0,
                0,
                0,
                1,
                0,
                0,
                0,
                0,
                1];
              case 'scalez':
                return [1,
                0,
                0,
                0,
                0,
                1,
                0,
                0,
                0,
                0,
                t.d[0],
                0,
                0,
                0,
                0,
                1];
              case 'scale3d':
                return [t.d[0],
                0,
                0,
                0,
                0,
                t.d[1],
                0,
                0,
                0,
                0,
                t.d[2],
                0,
                0,
                0,
                0,
                1];
              case 'skew':
                var k = u(t.d[0]),
                R = u(t.d[1]);
                return [1,
                Math.tan(R),
                0,
                0,
                Math.tan(k),
                1,
                0,
                0,
                0,
                0,
                1,
                0,
                0,
                0,
                0,
                1];
              case 'skewx':
                return w = u(t.d[0]),
                [
                  1,
                  0,
                  0,
                  0,
                  Math.tan(w),
                  1,
                  0,
                  0,
                  0,
                  0,
                  1,
                  0,
                  0,
                  0,
                  0,
                  1
                ];
              case 'skewy':
                return w = u(t.d[0]),
                [
                  1,
                  Math.tan(w),
                  0,
                  0,
                  0,
                  1,
                  0,
                  0,
                  0,
                  0,
                  1,
                  0,
                  0,
                  0,
                  0,
                  1
                ];
              case 'translate':
                return [1,
                0,
                0,
                0,
                0,
                1,
                0,
                0,
                0,
                0,
                1,
                0,
                d = t.d[0].px ||
                0,
                S = t.d[1].px ||
                0,
                0,
                1];
              case 'translatex':
                return [1,
                0,
                0,
                0,
                0,
                1,
                0,
                0,
                0,
                0,
                1,
                0,
                d = t.d[0].px ||
                0,
                0,
                0,
                1];
              case 'translatey':
                return [1,
                0,
                0,
                0,
                0,
                1,
                0,
                0,
                0,
                0,
                1,
                0,
                0,
                S = t.d[0].px ||
                0,
                0,
                1];
              case 'translatez':
                return [1,
                0,
                0,
                0,
                0,
                1,
                0,
                0,
                0,
                0,
                1,
                0,
                0,
                0,
                L = t.d[0].px ||
                0,
                1];
              case 'translate3d':
                return [1,
                0,
                0,
                0,
                0,
                1,
                0,
                0,
                0,
                0,
                1,
                0,
                d = t.d[0].px ||
                0,
                S = t.d[1].px ||
                0,
                L = t.d[2].px ||
                0,
                1];
              case 'perspective':
                return [1,
                0,
                0,
                0,
                0,
                1,
                0,
                0,
                0,
                0,
                1,
                t.d[0].px ? - 1 / t.d[0].px : 0,
                0,
                0,
                0,
                1];
              case 'matrix':
                return [t.d[0],
                t.d[1],
                0,
                0,
                t.d[2],
                t.d[3],
                0,
                0,
                0,
                0,
                1,
                0,
                t.d[4],
                t.d[5],
                0,
                1];
              case 'matrix3d':
                return t.d
            }
          }
          function g(t) {
            return 0 === t.length ? [
              1,
              0,
              0,
              0,
              0,
              1,
              0,
              0,
              0,
              0,
              1,
              0,
              0,
              0,
              0,
              1
            ] : t.map(c).reduce(v)
          }
          var y = function () {
            function t(d) {
              return d[0][0] * d[1][1] * d[2][2] + d[1][0] * d[2][1] * d[0][2] + d[2][0] * d[0][1] * d[1][2] - d[0][2] * d[1][1] * d[2][0] - d[1][2] * d[2][1] * d[0][0] - d[2][2] * d[0][1] * d[1][0]
            }
            function s(d) {
              var S = i(d);
              return [d[0] / S,
              d[1] / S,
              d[2] / S]
            }
            function i(d) {
              return Math.sqrt(d[0] * d[0] + d[1] * d[1] + d[2] * d[2])
            }
            function k(d, S, L, I) {
              return [L * d[0] + I * S[0],
              L * d[1] + I * S[1],
              L * d[2] + I * S[2]]
            }
            return function w(d) {
              var S = [
                d.slice(0, 4),
                d.slice(4, 8),
                d.slice(8, 12),
                d.slice(12, 16)
              ];
              if (1 !== S[3][3]) return null;
              for (var L = [], I = 0; I < 4; I++) L.push(S[I].slice());
              for (I = 0; I < 3; I++) L[I][3] = 0;
              if (0 === t(L)) return null;
              var H,
              Q = [];
              S[0][3] ||
              S[1][3] ||
              S[2][3] ? (
                Q.push(S[0][3]),
                Q.push(S[1][3]),
                Q.push(S[2][3]),
                Q.push(S[3][3]),
                H = function r(d, S) {
                  for (var L = [], I = 0; I < 4; I++) {
                    for (var H = 0, Q = 0; Q < 4; Q++) H += d[Q] * S[Q][I];
                    L.push(H)
                  }
                  return L
                }(
                  Q,
                  function a(d) {
                    return [[d[0][0],
                    d[1][0],
                    d[2][0],
                    d[3][0]],
                    [
                      d[0][1],
                      d[1][1],
                      d[2][1],
                      d[3][1]
                    ],
                    [
                      d[0][2],
                      d[1][2],
                      d[2][2],
                      d[3][2]
                    ],
                    [
                      d[0][3],
                      d[1][3],
                      d[2][3],
                      d[3][3]
                    ]]
                  }(
                    function o(d) {
                      for (
                        var S = 1 / t(d),
                        L = d[0][0],
                        I = d[0][1],
                        H = d[0][2],
                        Q = d[1][0],
                        z = d[1][1],
                        C = d[1][2],
                        te = d[2][0],
                        me = d[2][1],
                        be = d[2][2],
                        le = [
                          [(z * be - C * me) * S,
                          (H * me - I * be) * S,
                          (I * C - H * z) * S,
                          0],
                          [
                            (C * te - Q * be) * S,
                            (L * be - H * te) * S,
                            (H * Q - L * C) * S,
                            0
                          ],
                          [
                            (Q * me - z * te) * S,
                            (te * I - L * me) * S,
                            (L * z - I * Q) * S,
                            0
                          ]
                        ],
                        Se = [],
                        je = 0;
                        je < 3;
                        je++
                      ) {
                        for (var Ce = 0, ze = 0; ze < 3; ze++) Ce += d[3][ze] * le[ze][je];
                        Se.push(Ce)
                      }
                      return Se.push(1),
                      le.push(Se),
                      le
                    }(L)
                  )
                )
              ) : H = [
                0,
                0,
                0,
                1
              ];
              var z = S[3].slice(0, 3),
              C = [];
              C.push(S[0].slice(0, 3));
              var te = [];
              te.push(i(C[0])),
              C[0] = s(C[0]);
              var me = [];
              C.push(S[1].slice(0, 3)),
              me.push(l(C[0], C[1])),
              C[1] = k(C[1], C[0], 1, - me[0]),
              te.push(i(C[1])),
              C[1] = s(C[1]),
              me[0] /= te[1],
              C.push(S[2].slice(0, 3)),
              me.push(l(C[0], C[2])),
              C[2] = k(C[2], C[0], 1, - me[1]),
              me.push(l(C[1], C[2])),
              C[2] = k(C[2], C[1], 1, - me[2]),
              te.push(i(C[2])),
              C[2] = s(C[2]),
              me[1] /= te[2],
              me[2] /= te[2];
              var be = function R(d, S) {
                return [d[1] * S[2] - d[2] * S[1],
                d[2] * S[0] - d[0] * S[2],
                d[0] * S[1] - d[1] * S[0]]
              }(C[1], C[2]);
              if (l(C[0], be) < 0) for (I = 0; I < 3; I++) te[I] *= - 1,
              C[I][0] *= - 1,
              C[I][1] *= - 1,
              C[I][2] *= - 1;
              var le,
              Se,
              je = C[0][0] + C[1][1] + C[2][2] + 1;
              return je > 0.0001 ? (
                le = 0.5 / Math.sqrt(je),
                Se = [
                  (C[2][1] - C[1][2]) * le,
                  (C[0][2] - C[2][0]) * le,
                  (C[1][0] - C[0][1]) * le,
                  0.25 / le
                ]
              ) : C[0][0] > C[1][1] &&
              C[0][0] > C[2][2] ? Se = [
                0.25 * (le = 2 * Math.sqrt(1 + C[0][0] - C[1][1] - C[2][2])),
                (C[0][1] + C[1][0]) / le,
                (C[0][2] + C[2][0]) / le,
                (C[2][1] - C[1][2]) / le
              ] : C[1][1] > C[2][2] ? (
                le = 2 * Math.sqrt(1 + C[1][1] - C[0][0] - C[2][2]),
                Se = [
                  (C[0][1] + C[1][0]) / le,
                  0.25 * le,
                  (C[1][2] + C[2][1]) / le,
                  (C[0][2] - C[2][0]) / le
                ]
              ) : (
                le = 2 * Math.sqrt(1 + C[2][2] - C[0][0] - C[1][1]),
                Se = [
                  (C[0][2] + C[2][0]) / le,
                  (C[1][2] + C[2][1]) / le,
                  0.25 * le,
                  (C[1][0] - C[0][1]) / le
                ]
              ),
              [
                z,
                te,
                me,
                Se,
                H
              ]
            }
          }();
          e.dot = l,
          e.makeMatrixDecomposition = function m(t) {
            return [y(g(t))]
          },
          e.transformListToMatrix = g
        }(N),
        function (e) {
          function p(a, r) {
            var s = a.exec(r);
            if (s) return [s = a.ignoreCase ? s[0].toLowerCase() : s[0],
            r.substr(s.length)]
          }
          function l(a, r) {
            var s = a(r = r.replace(/^\s*/, ''));
            if (s) return [s[0],
            s[1].replace(/^\s*/, '')]
          }
          function t(a, r, s, i, k) {
            for (
              var R = [],
              w = [],
              d = [],
              S = function c(a, r) {
                for (var s = a, i = r; s && i; ) s > i ? s %= i : i %= s;
                return a * r / (s + i)
              }(i.length, k.length),
              L = 0;
              L < S;
              L++
            ) {
              var I = r(i[L % i.length], k[L % k.length]);
              if (!I) return;
              R.push(I[0]),
              w.push(I[1]),
              d.push(I[2])
            }
            return [R,
            w,
            function (H) {
              var Q = H.map(function (z, C) {
                return d[C](z)
              }).join(s);
              return a ? a(Q) : Q
            }
            ]
          }
          e.consumeToken = p,
          e.consumeTrimmed = l,
          e.consumeRepeated = function v(a, r, s) {
            a = l.bind(null, a);
            for (var i = []; ; ) {
              var k = a(s);
              if (!k) return [i,
              s];
              if (i.push(k[0]), !(k = p(r, s = k[1])) || '' == k[1]) return [i,
              s];
              s = k[1]
            }
          },
          e.consumeParenthesised = function u(a, r) {
            for (var s = 0, i = 0; i < r.length && (!/\s|,/.test(r[i]) || 0 != s); i++) if ('(' == r[i]) s++;
             else if (')' == r[i] && (0 == --s && i++, s <= 0)) break;
            var k = a(r.substr(0, i));
            return null == k ? void 0 : [
              k,
              r.substr(i)
            ]
          },
          e.ignore = function g(a) {
            return function (r) {
              var s = a(r);
              return s &&
              (s[0] = void 0),
              s
            }
          },
          e.optional = function m(a, r) {
            return function (s) {
              return a(s) ||
              [
                r,
                s
              ]
            }
          },
          e.consumeList = function y(a, r) {
            for (var s = [], i = 0; i < a.length; i++) {
              var k = e.consumeTrimmed(a[i], r);
              if (!k || '' == k[0]) return;
              void 0 !== k[0] &&
              s.push(k[0]),
              r = k[1]
            }
            if ('' == r) return s
          },
          e.mergeNestedRepeated = t.bind(null, null),
          e.mergeWrappedNestedRepeated = t,
          e.mergeList = function o(a, r, s) {
            for (var i = [], k = [], R = [], w = 0, d = 0; d < s.length; d++) if ('function' == typeof s[d]) {
              var S = s[d](a[w], r[w++]);
              i.push(S[0]),
              k.push(S[1]),
              R.push(S[2])
            } else !function (L) {
              i.push(!1),
              k.push(!1),
              R.push(function () {
                return s[L]
              })
            }(d);
            return [i,
            k,
            function (L) {
              for (var I = '', H = 0; H < L.length; H++) I += R[H](L[H]);
              return I
            }
            ]
          }
        }(N),
        function (e) {
          function p(g) {
            var y = {
              inset: !1,
              lengths: [],
              color: null
            },
            t = e.consumeRepeated(
              function m(o) {
                var a = e.consumeToken(/^inset/i, o);
                return a ? (y.inset = !0, a) : (a = e.consumeLengthOrPercent(o)) ? (y.lengths.push(a[0]), a) : (a = e.consumeColor(o)) ? (y.color = a[0], a) : void 0
              },
              /^/,
              g
            );
            if (t && t[0].length) return [y,
            t[1]]
          }
          var c = function u(g, m, y, t) {
            function o(R) {
              return {
                inset: R,
                color: [
                  0,
                  0,
                  0,
                  0
                ],
                lengths: [
                  {
                    px: 0
                  },
                  {
                    px: 0
                  },
                  {
                    px: 0
                  },
                  {
                    px: 0
                  }
                ]
              }
            }
            for (var a = [], r = [], s = 0; s < y.length || s < t.length; s++) {
              var i = y[s] ||
              o(t[s].inset),
              k = t[s] ||
              o(y[s].inset);
              a.push(i),
              r.push(k)
            }
            return e.mergeNestedRepeated(g, m, a, r)
          }.bind(
            null,
            function v(g, m) {
              for (
                ;
                g.lengths.length < Math.max(g.lengths.length, m.lengths.length);
              ) g.lengths.push({
                px: 0
              });
              for (
                ;
                m.lengths.length < Math.max(g.lengths.length, m.lengths.length);
              ) m.lengths.push({
                px: 0
              });
              if (g.inset == m.inset && !!g.color == !!m.color) {
                for (var y, t = [], o = [
                  [],
                  0
                ], a = [
                  [],
                  0
                ], r = 0; r < g.lengths.length; r++) {
                  var s = e.mergeDimensions(g.lengths[r], m.lengths[r], 2 == r);
                  o[0].push(s[0]),
                  a[0].push(s[1]),
                  t.push(s[2])
                }
                if (g.color && m.color) {
                  var i = e.mergeColors(g.color, m.color);
                  o[1] = i[0],
                  a[1] = i[1],
                  y = i[2]
                }
                return [o,
                a,
                function (k) {
                  for (var R = g.inset ? 'inset ' : ' ', w = 0; w < t.length; w++) R += t[w](k[0][w]) + ' ';
                  return y &&
                  (R += y(k[1])),
                  R
                }
                ]
              }
            },
            ', '
          );
          e.addPropertiesHandler(
            function l(g) {
              var m = e.consumeRepeated(p, /^,/, g);
              if (m && '' == m[1]) return m[0]
            },
            c,
            [
              'box-shadow',
              'text-shadow'
            ]
          )
        }(N),
        function (e, p) {
          function l(r) {
            return r.toFixed(3).replace(/0+$/, '').replace(/\.$/, '')
          }
          function v(r, s, i) {
            return Math.min(s, Math.max(r, i))
          }
          function u(r) {
            if (/^\s*[-+]?(\d*\.)?\d+\s*$/.test(r)) return Number(r)
          }
          function y(r, s) {
            return function (i, k) {
              return [i,
              k,
              function (R) {
                return l(v(r, s, R))
              }
              ]
            }
          }
          function t(r) {
            var s = r.trim().split(/\s*[\s,]\s*/);
            if (0 !== s.length) {
              for (var i = [], k = 0; k < s.length; k++) {
                var R = u(s[k]);
                if (void 0 === R) return;
                i.push(R)
              }
              return i
            }
          }
          e.clamp = v,
          e.addPropertiesHandler(
            t,
            function o(r, s) {
              if (r.length == s.length) return [r,
              s,
              function (i) {
                return i.map(l).join(' ')
              }
              ]
            },
            [
              'stroke-dasharray'
            ]
          ),
          e.addPropertiesHandler(u, y(0, 1 / 0), [
            'border-image-width',
            'line-height'
          ]),
          e.addPropertiesHandler(u, y(0, 1), [
            'opacity',
            'shape-image-threshold'
          ]),
          e.addPropertiesHandler(
            u,
            function g(r, s) {
              if (0 != r) return y(0, 1 / 0) (r, s)
            },
            [
              'flex-grow',
              'flex-shrink'
            ]
          ),
          e.addPropertiesHandler(
            u,
            function m(r, s) {
              return [r,
              s,
              function (i) {
                return Math.round(v(1, 1 / 0, i))
              }
              ]
            },
            [
              'orphans',
              'widows'
            ]
          ),
          e.addPropertiesHandler(u, function a(r, s) {
            return [r,
            s,
            Math.round]
          }, [
            'z-index'
          ]),
          e.parseNumber = u,
          e.parseNumberList = t,
          e.mergeNumbers = function c(r, s) {
            return [r,
            s,
            l]
          },
          e.numberToString = l
        }(N),
        function (e, p) {
          e.addPropertiesHandler(
            String,
            function l(v, u) {
              if ('visible' == v || 'visible' == u) return [0,
              1,
              function (c) {
                return c <= 0 ? v : c >= 1 ? u : 'visible'
              }
              ]
            },
            [
              'visibility'
            ]
          )
        }(N),
        function (e, p) {
          function l(g) {
            g = g.trim(),
            c.fillStyle = '#000',
            c.fillStyle = g;
            var m = c.fillStyle;
            if (c.fillStyle = '#fff', c.fillStyle = g, m == c.fillStyle) {
              c.fillRect(0, 0, 1, 1);
              var y = c.getImageData(0, 0, 1, 1).data;
              c.clearRect(0, 0, 1, 1);
              var t = y[3] / 255;
              return [y[0] * t,
              y[1] * t,
              y[2] * t,
              t]
            }
          }
          function v(g, m) {
            return [g,
            m,
            function (y) {
              if (y[3]) for (var o = 0; o < 3; o++) y[o] = Math.round(Math.max(0, Math.min(255, y[o] / y[3])));
              return y[3] = e.numberToString(e.clamp(0, 1, y[3])),
              'rgba(' + y.join(',') + ')'
            }
            ]
          }
          var u = document.createElementNS('http://www.w3.org/1999/xhtml', 'canvas');
          u.width = u.height = 1;
          var c = u.getContext('2d');
          e.addPropertiesHandler(
            l,
            v,
            [
              'background-color',
              'border-bottom-color',
              'border-left-color',
              'border-right-color',
              'border-top-color',
              'color',
              'fill',
              'flood-color',
              'lighting-color',
              'outline-color',
              'stop-color',
              'stroke',
              'text-decoration-color'
            ]
          ),
          e.consumeColor = e.consumeParenthesised.bind(null, l),
          e.mergeColors = v
        }(N),
        function (e, p) {
          function l(R) {
            function w() {
              var z = Q.exec(R);
              H = z ? z[0] : void 0
            }
            function S() {
              if ('(' !== H) return function d() {
                var z = Number(H);
                return w(),
                z
              }();
              w();
              var z = I();
              return ')' !== H ? NaN : (w(), z)
            }
            function L() {
              for (var z = S(); '*' === H || '/' === H; ) {
                var C = H;
                w();
                var te = S();
                '*' === C ? z *= te : z /= te
              }
              return z
            }
            function I() {
              for (var z = L(); '+' === H || '-' === H; ) {
                var C = H;
                w();
                var te = L();
                '+' === C ? z += te : z -= te
              }
              return z
            }
            var H,
            Q = /([\+\-\w\.]+|[\(\)\*\/])/g;
            return w(),
            I()
          }
          function v(R, w) {
            if ('0' == (w = w.trim().toLowerCase()) && 'px'.search(R) >= 0) return {
              px: 0
            };
            if (/^[^(]*$|^calc/.test(w)) {
              w = w.replace(/calc\(/g, '(');
              var d = {};
              w = w.replace(R, function (C) {
                return d[C] = null,
                'U' + C
              });
              for (
                var S = 'U(' + R.source + ')',
                L = w.replace(/[-+]?(\d*\.)?\d+([Ee][-+]?\d+)?/g, 'N').replace(new RegExp('N' + S, 'g'), 'D').replace(/\s[+-]\s/g, 'O').replace(/\s/g, ''),
                I = [
                  /N\*(D)/g,
                  /(N|D)[*\/]N/g,
                  /(N|D)O\1/g,
                  /\((N|D)\)/g
                ],
                H = 0;
                H < I.length;
              ) I[H].test(L) ? (L = L.replace(I[H], '$1'), H = 0) : H++;
              if ('D' == L) {
                for (var Q in d) {
                  var z = l(
                    w.replace(new RegExp('U' + Q, 'g'), '').replace(new RegExp(S, 'g'), '*0')
                  );
                  if (!isFinite(z)) return;
                  d[Q] = z
                }
                return d
              }
            }
          }
          function u(R, w) {
            return c(R, w, !0)
          }
          function c(R, w, d) {
            var S,
            L = [];
            for (S in R) L.push(S);
            for (S in w) L.indexOf(S) < 0 &&
            L.push(S);
            return R = L.map(function (I) {
              return R[I] ||
              0
            }),
            w = L.map(function (I) {
              return w[I] ||
              0
            }),
            [
              R,
              w,
              function (I) {
                var H = I.map(
                  function (Q, z) {
                    return 1 == I.length &&
                    d &&
                    (Q = Math.max(Q, 0)),
                    e.numberToString(Q) + L[z]
                  }
                ).join(' + ');
                return I.length > 1 ? 'calc(' + H + ')' : H
              }
            ]
          }
          var g = 'px|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc',
          m = v.bind(null, new RegExp(g, 'g')),
          y = v.bind(null, new RegExp(g + '|%', 'g')),
          t = v.bind(null, /deg|rad|grad|turn/g);
          e.parseLength = m,
          e.parseLengthOrPercent = y,
          e.consumeLengthOrPercent = e.consumeParenthesised.bind(null, y),
          e.parseAngle = t,
          e.mergeDimensions = c;
          var o = e.consumeParenthesised.bind(null, m),
          a = e.consumeRepeated.bind(void 0, o, /^/),
          r = e.consumeRepeated.bind(void 0, a, /^,/);
          e.consumeSizePairList = r;
          var i = e.mergeNestedRepeated.bind(void 0, u, ' '),
          k = e.mergeNestedRepeated.bind(void 0, i, ',');
          e.mergeNonNegativeSizePair = i,
          e.addPropertiesHandler(
            function (R) {
              var w = r(R);
              if (w && '' == w[1]) return w[0]
            },
            k,
            [
              'background-size'
            ]
          ),
          e.addPropertiesHandler(
            y,
            u,
            [
              'border-bottom-width',
              'border-image-width',
              'border-left-width',
              'border-right-width',
              'border-top-width',
              'flex-basis',
              'font-size',
              'height',
              'line-height',
              'max-height',
              'max-width',
              'outline-width',
              'width'
            ]
          ),
          e.addPropertiesHandler(
            y,
            c,
            [
              'border-bottom-left-radius',
              'border-bottom-right-radius',
              'border-top-left-radius',
              'border-top-right-radius',
              'bottom',
              'left',
              'letter-spacing',
              'margin-bottom',
              'margin-left',
              'margin-right',
              'margin-top',
              'min-height',
              'min-width',
              'outline-offset',
              'padding-bottom',
              'padding-left',
              'padding-right',
              'padding-top',
              'perspective',
              'right',
              'shape-margin',
              'stroke-dashoffset',
              'text-indent',
              'top',
              'vertical-align',
              'word-spacing'
            ]
          )
        }(N),
        function (e, p) {
          function l(m) {
            return e.consumeLengthOrPercent(m) ||
            e.consumeToken(/^auto/, m)
          }
          function v(m) {
            var y = e.consumeList(
              [e.ignore(e.consumeToken.bind(null, /^rect/)),
              e.ignore(e.consumeToken.bind(null, /^\(/)),
              e.consumeRepeated.bind(null, l, /^,/),
              e.ignore(e.consumeToken.bind(null, /^\)/))],
              m
            );
            if (y && 4 == y[0].length) return y[0]
          }
          var g = e.mergeWrappedNestedRepeated.bind(
            null,
            function c(m) {
              return 'rect(' + m + ')'
            },
            function u(m, y) {
              return 'auto' == m ||
              'auto' == y ? [
                !0,
                !1,
                function (t) {
                  var o = t ? m : y;
                  if ('auto' == o) return 'auto';
                  var a = e.mergeDimensions(o, o);
                  return a[2](a[0])
                }
              ] : e.mergeDimensions(m, y)
            },
            ', '
          );
          e.parseBox = v,
          e.mergeBoxes = g,
          e.addPropertiesHandler(v, g, [
            'clip'
          ])
        }(N),
        function (e, p) {
          function l(i) {
            return function (k) {
              var R = 0;
              return i.map(function (w) {
                return w === o ? k[R++] : w
              })
            }
          }
          function v(i) {
            return i
          }
          function u(i) {
            if ('none' == (i = i.toLowerCase().trim())) return [];
            for (var k, R = /\s*(\w+)\(([^)]*)\)/g, w = [], d = 0; k = R.exec(i); ) {
              if (k.index != d) return;
              d = k.index + k[0].length;
              var S = k[1],
              L = s[S];
              if (!L) return;
              var I = k[2].split(','),
              H = L[0];
              if (H.length < I.length) return;
              for (var Q = [], z = 0; z < H.length; z++) {
                var C,
                te = I[z],
                me = H[z];
                if (
                  void 0 === (
                    C = te ? {
                      A: function (be) {
                        return '0' == be.trim() ? r : e.parseAngle(be)
                      },
                      N: e.parseNumber,
                      T: e.parseLengthOrPercent,
                      L: e.parseLength
                    }
                    [
                      me.toUpperCase()
                    ](te) : {
                      a: r,
                      n: Q[0],
                      t: a
                    }
                    [
                      me
                    ]
                  )
                ) return;
                Q.push(C)
              }
              if (w.push({
                t: S,
                d: Q
              }), R.lastIndex == i.length) return w
            }
          }
          function c(i) {
            return i.toFixed(6).replace('.000000', '')
          }
          function g(i, k) {
            if (i.decompositionPair !== k) {
              i.decompositionPair = k;
              var R = e.makeMatrixDecomposition(i)
            }
            if (k.decompositionPair !== i) {
              k.decompositionPair = i;
              var w = e.makeMatrixDecomposition(k)
            }
            return null == R[0] ||
            null == w[0] ? [
              [!1],
              [
                !0
              ],
              function (d) {
                return d ? k[0].d : i[0].d
              }
            ] : (
              R[0].push(0),
              w[0].push(1),
              [
                R,
                w,
                function (d) {
                  var S = e.quat(R[0][3], w[0][3], d[5]);
                  return e.composeMatrix(d[0], d[1], d[2], S, d[4]).map(c).join(',')
                }
              ]
            )
          }
          function m(i) {
            return i.replace(/[xy]/, '')
          }
          function y(i) {
            return i.replace(/(x|y|z|3d)?$/, '3d')
          }
          var o = null,
          a = {
            px: 0
          },
          r = {
            deg: 0
          },
          s = {
            matrix: [
              'NNNNNN',
              [
                o,
                o,
                0,
                0,
                o,
                o,
                0,
                0,
                0,
                0,
                1,
                0,
                o,
                o,
                0,
                1
              ],
              v
            ],
            matrix3d: [
              'NNNNNNNNNNNNNNNN',
              v
            ],
            rotate: [
              'A'
            ],
            rotatex: [
              'A'
            ],
            rotatey: [
              'A'
            ],
            rotatez: [
              'A'
            ],
            rotate3d: [
              'NNNA'
            ],
            perspective: [
              'L'
            ],
            scale: [
              'Nn',
              l([o,
              o,
              1]),
              v
            ],
            scalex: [
              'N',
              l([o,
              1,
              1]),
              l([o,
              1])
            ],
            scaley: [
              'N',
              l([1,
              o,
              1]),
              l([1,
              o])
            ],
            scalez: [
              'N',
              l([1,
              1,
              o])
            ],
            scale3d: [
              'NNN',
              v
            ],
            skew: [
              'Aa',
              null,
              v
            ],
            skewx: [
              'A',
              null,
              l([o,
              r])
            ],
            skewy: [
              'A',
              null,
              l([r,
              o])
            ],
            translate: [
              'Tt',
              l([o,
              o,
              a]),
              v
            ],
            translatex: [
              'T',
              l([o,
              a,
              a]),
              l([o,
              a])
            ],
            translatey: [
              'T',
              l([a,
              o,
              a]),
              l([a,
              o])
            ],
            translatez: [
              'L',
              l([a,
              a,
              o])
            ],
            translate3d: [
              'TTL',
              v
            ]
          };
          e.addPropertiesHandler(
            u,
            function t(i, k) {
              var R = e.makeMatrixDecomposition &&
              !0,
              w = !1;
              if (!i.length || !k.length) {
                i.length ||
                (w = !0, i = k, k = []);
                for (var d = 0; d < i.length; d++) {
                  var L = i[d].d,
                  I = 'scale' == (S = i[d].t).substr(0, 5) ? 1 : 0;
                  k.push({
                    t: S,
                    d: L.map(
                      function (U) {
                        if ('number' == typeof U) return I;
                        var Oe = {};
                        for (var Me in U) Oe[Me] = I;
                        return Oe
                      }
                    )
                  })
                }
              }
              var U,
              Oe,
              Q = [],
              z = [],
              C = [];
              if (i.length != k.length) {
                if (!R) return;
                Q = [
                  (te = g(i, k)) [0]
                ],
                z = [
                  te[1]
                ],
                C = [
                  ['matrix',
                  [
                    te[2]
                  ]]
                ]
              } else for (d = 0; d < i.length; d++) {
                var S,
                me = i[d].t,
                be = k[d].t,
                le = i[d].d,
                Se = k[d].d,
                je = s[me],
                Ce = s[be];
                if (
                  Oe = be,
                  'perspective' == (U = me) &&
                  'perspective' == Oe ||
                  ('matrix' == U || 'matrix3d' == U) &&
                  ('matrix' == Oe || 'matrix3d' == Oe)
                ) {
                  if (!R) return;
                  var te = g([i[d]], [
                    k[d]
                  ]);
                  Q.push(te[0]),
                  z.push(te[1]),
                  C.push(['matrix',
                  [
                    te[2]
                  ]])
                } else {
                  if (me == be) S = me;
                   else if (je[2] && Ce[2] && m(me) == m(be)) S = m(me),
                  le = je[2](le),
                  Se = Ce[2](Se);
                   else {
                    if (!je[1] || !Ce[1] || y(me) != y(be)) {
                      if (!R) return;
                      Q = [
                        (te = g(i, k)) [0]
                      ],
                      z = [
                        te[1]
                      ],
                      C = [
                        ['matrix',
                        [
                          te[2]
                        ]]
                      ];
                      break
                    }
                    S = y(me),
                    le = je[1](le),
                    Se = Ce[1](Se)
                  }
                  for (var ze = [], Xe = [], D = [], Y = 0; Y < le.length; Y++) te = ('number' == typeof le[Y] ? e.mergeNumbers : e.mergeDimensions) (le[Y], Se[Y]),
                  ze[Y] = te[0],
                  Xe[Y] = te[1],
                  D.push(te[2]);
                  Q.push(ze),
                  z.push(Xe),
                  C.push([S,
                  D])
                }
              }
              if (w) {
                var ie = Q;
                Q = z,
                z = ie
              }
              return [Q,
              z,
              function (U) {
                return U.map(
                  function (Oe, Me) {
                    var We = Oe.map(function (Ke, qe) {
                      return C[Me][1][qe](Ke)
                    }).join(',');
                    return 'matrix' == C[Me][0] &&
                    16 == We.split(',').length &&
                    (C[Me][0] = 'matrix3d'),
                    C[Me][0] + '(' + We + ')'
                  }
                ).join(' ')
              }
              ]
            },
            [
              'transform'
            ]
          ),
          e.transformToSvgMatrix = function (i) {
            var k = e.transformListToMatrix(u(i));
            return 'matrix(' + c(k[0]) + ' ' + c(k[1]) + ' ' + c(k[4]) + ' ' + c(k[5]) + ' ' + c(k[12]) + ' ' + c(k[13]) + ')'
          }
        }(N),
        function (e) {
          function l(u) {
            return u = 100 * Math.round(u / 100),
            400 === (u = e.clamp(100, 900, u)) ? 'normal' : 700 === u ? 'bold' : String(u)
          }
          e.addPropertiesHandler(
            function p(u) {
              var c = Number(u);
              if (!(isNaN(c) || c < 100 || c > 900 || c % 100 != 0)) return c
            },
            function v(u, c) {
              return [u,
              c,
              l]
            },
            [
              'font-weight'
            ]
          )
        }(N),
        function (e) {
          function p(t) {
            var o = {};
            for (var a in t) o[a] = - t[a];
            return o
          }
          function l(t) {
            return e.consumeToken(/^(left|center|right|top|bottom)\b/i, t) ||
            e.consumeLengthOrPercent(t)
          }
          function v(t, o) {
            var a = e.consumeRepeated(l, /^/, o);
            if (a && '' == a[1]) {
              var r = a[0];
              if (
                r[0] = r[0] ||
                'center',
                r[1] = r[1] ||
                'center',
                3 == t &&
                (r[2] = r[2] || {
                  px: 0
                }),
                r.length == t
              ) {
                if (/top|bottom/.test(r[0]) || /left|right/.test(r[1])) {
                  var s = r[0];
                  r[0] = r[1],
                  r[1] = s
                }
                if (
                  /left|right|center|Object/.test(r[0]) &&
                  /top|bottom|center|Object/.test(r[1])
                ) return r.map(function (i) {
                  return 'object' == typeof i ? i : g[i]
                })
              }
            }
          }
          function u(t) {
            var o = e.consumeRepeated(l, /^/, t);
            if (o) {
              for (var a = o[0], r = [
                {
                  '%': 50
                },
                {
                  '%': 50
                }
              ], s = 0, i = !1, k = 0; k < a.length; k++) {
                var R = a[k];
                'string' == typeof R ? (
                  i = /bottom|right/.test(R),
                  r[s = {
                    left: 0,
                    right: 0,
                    center: s,
                    top: 1,
                    bottom: 1
                  }
                  [
                    R
                  ]] = g[R],
                  'center' == R &&
                  s++
                ) : (i && ((R = p(R)) ['%'] = (R['%'] || 0) + 100), r[s] = R, s++, i = !1)
              }
              return [r,
              o[1]]
            }
          }
          var g = {
            left: {
              '%': 0
            },
            center: {
              '%': 50
            },
            right: {
              '%': 100
            },
            top: {
              '%': 0
            },
            bottom: {
              '%': 100
            }
          },
          m = e.mergeNestedRepeated.bind(null, e.mergeDimensions, ' ');
          e.addPropertiesHandler(v.bind(null, 3), m, [
            'transform-origin'
          ]),
          e.addPropertiesHandler(v.bind(null, 2), m, [
            'perspective-origin'
          ]),
          e.consumePosition = u,
          e.mergeOffsetList = m;
          var y = e.mergeNestedRepeated.bind(null, m, ', ');
          e.addPropertiesHandler(
            function c(t) {
              var o = e.consumeRepeated(u, /^,/, t);
              if (o && '' == o[1]) return o[0]
            },
            y,
            [
              'background-position',
              'object-position'
            ]
          )
        }(N),
        function (e) {
          var v = e.consumeParenthesised.bind(null, e.parseLengthOrPercent),
          u = e.consumeRepeated.bind(void 0, v, /^/),
          c = e.mergeNestedRepeated.bind(void 0, e.mergeDimensions, ' '),
          g = e.mergeNestedRepeated.bind(void 0, c, ',');
          e.addPropertiesHandler(
            function p(m) {
              var y = e.consumeToken(/^circle/, m);
              if (y && y[0]) return ['circle'].concat(
                e.consumeList(
                  [e.ignore(e.consumeToken.bind(void 0, /^\(/)),
                  v,
                  e.ignore(e.consumeToken.bind(void 0, /^at/)),
                  e.consumePosition,
                  e.ignore(e.consumeToken.bind(void 0, /^\)/))],
                  y[1]
                )
              );
              var t = e.consumeToken(/^ellipse/, m);
              if (t && t[0]) return ['ellipse'].concat(
                e.consumeList(
                  [e.ignore(e.consumeToken.bind(void 0, /^\(/)),
                  u,
                  e.ignore(e.consumeToken.bind(void 0, /^at/)),
                  e.consumePosition,
                  e.ignore(e.consumeToken.bind(void 0, /^\)/))],
                  t[1]
                )
              );
              var o = e.consumeToken(/^polygon/, m);
              return o &&
              o[0] ? [
                'polygon'
              ].concat(
                e.consumeList(
                  [e.ignore(e.consumeToken.bind(void 0, /^\(/)),
                  e.optional(
                    e.consumeToken.bind(void 0, /^nonzero\s*,|^evenodd\s*,/),
                    'nonzero,'
                  ),
                  e.consumeSizePairList,
                  e.ignore(e.consumeToken.bind(void 0, /^\)/))],
                  o[1]
                )
              ) : void 0
            },
            function l(m, y) {
              if (m[0] === y[0]) return 'circle' == m[0] ? e.mergeList(
                m.slice(1),
                y.slice(1),
                [
                  'circle(',
                  e.mergeDimensions,
                  ' at ',
                  e.mergeOffsetList,
                  ')'
                ]
              ) : 'ellipse' == m[0] ? e.mergeList(
                m.slice(1),
                y.slice(1),
                [
                  'ellipse(',
                  e.mergeNonNegativeSizePair,
                  ' at ',
                  e.mergeOffsetList,
                  ')'
                ]
              ) : 'polygon' == m[0] &&
              m[1] == y[1] ? e.mergeList(m.slice(2), y.slice(2), [
                'polygon(',
                m[1],
                g,
                ')'
              ]) : void 0
            },
            [
              'shape-outside'
            ]
          )
        }(N),
        function (e, p) {
          function l(c, g) {
            g.concat([c]).forEach(
              function (m) {
                m in document.documentElement.style &&
                (v[c] = m),
                u[m] = c
              }
            )
          }
          var v = {},
          u = {};
          l('transform', [
            'webkitTransform',
            'msTransform'
          ]),
          l('transformOrigin', [
            'webkitTransformOrigin'
          ]),
          l('perspective', [
            'webkitPerspective'
          ]),
          l('perspectiveOrigin', [
            'webkitPerspectiveOrigin'
          ]),
          e.propertyName = function (c) {
            return v[c] ||
            c
          },
          e.unprefixedPropertyName = function (c) {
            return u[c] ||
            c
          }
        }(N)
      }(),
      function () {
        if (void 0 === document.createElement('div').animate([]).oncancel) {
          if (window.performance && performance.now) var n = function () {
            return performance.now()
          };
           else n = function () {
            return Date.now()
          };
          var T = function (p, l, v) {
            this.target = p,
            this.currentTime = l,
            this.timelineTime = v,
            this.type = 'cancel',
            this.bubbles = !1,
            this.cancelable = !1,
            this.currentTarget = p,
            this.defaultPrevented = !1,
            this.eventPhase = Event.AT_TARGET,
            this.timeStamp = Date.now()
          },
          e = window.Element.prototype.animate;
          window.Element.prototype.animate = function (p, l) {
            var v = e.call(this, p, l);
            v._cancelHandlers = [],
            v.oncancel = null;
            var u = v.cancel;
            v.cancel = function () {
              u.call(this);
              var m = new T(this, null, n()),
              y = this._cancelHandlers.concat(this.oncancel ? [
                this.oncancel
              ] : []);
              setTimeout(function () {
                y.forEach(function (t) {
                  t.call(m.target, m)
                })
              }, 0)
            };
            var c = v.addEventListener;
            v.addEventListener = function (m, y) {
              'function' == typeof y &&
              'cancel' == m ? this._cancelHandlers.push(y) : c.call(this, m, y)
            };
            var g = v.removeEventListener;
            return v.removeEventListener = function (m, y) {
              if ('cancel' == m) {
                var t = this._cancelHandlers.indexOf(y);
                t >= 0 &&
                this._cancelHandlers.splice(t, 1)
              } else g.call(this, m, y)
            },
            v
          }
        }
      }(),
      function (n) {
        var T = document.documentElement,
        e = null,
        p = !1;
        try {
          var v = '0' == getComputedStyle(T).getPropertyValue('opacity') ? '1' : '0';
          (e = T.animate({
            opacity: [
              v,
              v
            ]
          }, {
            duration: 1
          })).currentTime = 0,
          p = getComputedStyle(T).getPropertyValue('opacity') == v
        } catch (c) {
        } finally {
          e &&
          e.cancel()
        }
        if (!p) {
          var u = window.Element.prototype.animate;
          window.Element.prototype.animate = function (c, g) {
            return window.Symbol &&
            Symbol.iterator &&
            Array.prototype.from &&
            c[Symbol.iterator] &&
            (c = Array.from(c)),
            Array.isArray(c) ||
            null === c ||
            (c = n.convertToArrayForm(c)),
            u.call(this, c, g)
          }
        }
      }(x)
    }
  },
  x => {
    x(x.s = 8955)
  }
  ]
);
