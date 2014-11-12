!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var f;"undefined"!=typeof window?f=window:"undefined"!=typeof global?f=global:"undefined"!=typeof self&&(f=self),f.di=e()}}(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";
Object.defineProperties(exports, {
  annotate: {get: function() {
      return annotate;
    }},
  hasAnnotation: {get: function() {
      return hasAnnotation;
    }},
  readAnnotations: {get: function() {
      return readAnnotations;
    }},
  SuperConstructor: {get: function() {
      return SuperConstructor;
    }},
  TransientScope: {get: function() {
      return TransientScope;
    }},
  Inject: {get: function() {
      return Inject;
    }},
  InjectPromise: {get: function() {
      return InjectPromise;
    }},
  InjectLazy: {get: function() {
      return InjectLazy;
    }},
  Provide: {get: function() {
      return Provide;
    }},
  ProvidePromise: {get: function() {
      return ProvidePromise;
    }},
  __esModule: {value: true}
});
var $__util__;
var isFunction = ($__util__ = require("./util"), $__util__ && $__util__.__esModule && $__util__ || {default: $__util__}).isFunction;
var SuperConstructor = function SuperConstructor() {};
($traceurRuntime.createClass)(SuperConstructor, {}, {});
var TransientScope = function TransientScope() {};
($traceurRuntime.createClass)(TransientScope, {}, {});
var Inject = function Inject() {
  for (var tokens = [],
      $__6 = 0; $__6 < arguments.length; $__6++)
    tokens[$__6] = arguments[$__6];
  this.tokens = tokens;
  this.isPromise = false;
  this.isLazy = false;
};
($traceurRuntime.createClass)(Inject, {}, {});
var InjectPromise = function InjectPromise() {
  for (var tokens = [],
      $__7 = 0; $__7 < arguments.length; $__7++)
    tokens[$__7] = arguments[$__7];
  this.tokens = tokens;
  this.isPromise = true;
  this.isLazy = false;
};
($traceurRuntime.createClass)(InjectPromise, {}, {}, Inject);
var InjectLazy = function InjectLazy() {
  for (var tokens = [],
      $__8 = 0; $__8 < arguments.length; $__8++)
    tokens[$__8] = arguments[$__8];
  this.tokens = tokens;
  this.isPromise = false;
  this.isLazy = true;
};
($traceurRuntime.createClass)(InjectLazy, {}, {}, Inject);
var Provide = function Provide(token) {
  this.token = token;
  this.isPromise = false;
};
($traceurRuntime.createClass)(Provide, {}, {});
var ProvidePromise = function ProvidePromise(token) {
  this.token = token;
  this.isPromise = true;
};
($traceurRuntime.createClass)(ProvidePromise, {}, {}, Provide);
function annotate(fn, annotation) {
  fn.annotations = fn.annotations || [];
  fn.annotations.push(annotation);
}
function hasAnnotation(fn, annotationClass) {
  if (!fn.annotations || fn.annotations.length === 0) {
    return false;
  }
  for (var $__2 = fn.annotations[Symbol.iterator](),
      $__3; !($__3 = $__2.next()).done; ) {
    var annotation = $__3.value;
    {
      if (annotation instanceof annotationClass) {
        return true;
      }
    }
  }
  return false;
}
function readAnnotations(fn) {
  var collectedAnnotations = {
    provide: {
      token: null,
      isPromise: false
    },
    params: []
  };
  if (fn.annotations && fn.annotations.length) {
    for (var $__2 = fn.annotations[Symbol.iterator](),
        $__3; !($__3 = $__2.next()).done; ) {
      var annotation = $__3.value;
      {
        if (annotation instanceof Inject) {
          collectedAnnotations.params = annotation.tokens.map((function(token) {
            return {
              token: token,
              isPromise: annotation.isPromise,
              isLazy: annotation.isLazy
            };
          }));
        }
        if (annotation instanceof Provide) {
          collectedAnnotations.provide.token = annotation.token;
          collectedAnnotations.provide.isPromise = annotation.isPromise;
        }
      }
    }
  }
  if (fn.parameters) {
    fn.parameters.forEach((function(param, idx) {
      for (var $__4 = param[Symbol.iterator](),
          $__5; !($__5 = $__4.next()).done; ) {
        var paramAnnotation = $__5.value;
        {
          if (isFunction(paramAnnotation) && !collectedAnnotations.params[idx]) {
            collectedAnnotations.params[idx] = {
              token: paramAnnotation,
              isPromise: false,
              isLazy: false
            };
          } else if (paramAnnotation instanceof Inject) {
            collectedAnnotations.params[idx] = {
              token: paramAnnotation.tokens[0],
              isPromise: paramAnnotation.isPromise,
              isLazy: paramAnnotation.isLazy
            };
          }
        }
      }
    }));
  }
  return collectedAnnotations;
}
;

},{"./util":6}],2:[function(require,module,exports){
"use strict";
Object.defineProperties(exports, {
  Injector: {get: function() {
      return $__injector__.Injector;
    }},
  annotate: {get: function() {
      return $__annotations__.annotate;
    }},
  Inject: {get: function() {
      return $__annotations__.Inject;
    }},
  InjectPromise: {get: function() {
      return $__annotations__.InjectPromise;
    }},
  Provide: {get: function() {
      return $__annotations__.Provide;
    }},
  ProvidePromise: {get: function() {
      return $__annotations__.ProvidePromise;
    }},
  SuperConstructor: {get: function() {
      return $__annotations__.SuperConstructor;
    }},
  TransientScope: {get: function() {
      return $__annotations__.TransientScope;
    }},
  __esModule: {value: true}
});
var $__injector__,
    $__annotations__;
var $__injector__ = ($__injector__ = require("./injector"), $__injector__ && $__injector__.__esModule && $__injector__ || {default: $__injector__});
var $__annotations__ = ($__annotations__ = require("./annotations"), $__annotations__ && $__annotations__.__esModule && $__annotations__ || {default: $__annotations__});

},{"./annotations":1,"./injector":3}],3:[function(require,module,exports){
"use strict";
Object.defineProperties(exports, {
  Injector: {get: function() {
      return Injector;
    }},
  __esModule: {value: true}
});
var $__annotations__,
    $__util__,
    $__profiler__,
    $__providers__;
var $__0 = ($__annotations__ = require("./annotations"), $__annotations__ && $__annotations__.__esModule && $__annotations__ || {default: $__annotations__}),
    annotate = $__0.annotate,
    readAnnotations = $__0.readAnnotations,
    hasAnnotation = $__0.hasAnnotation,
    ProvideAnnotation = $__0.Provide,
    TransientScopeAnnotation = $__0.TransientScope;
var $__1 = ($__util__ = require("./util"), $__util__ && $__util__.__esModule && $__util__ || {default: $__util__}),
    isFunction = $__1.isFunction,
    toString = $__1.toString;
var getUniqueId = ($__profiler__ = require("./profiler"), $__profiler__ && $__profiler__.__esModule && $__profiler__ || {default: $__profiler__}).getUniqueId;
var createProviderFromFnOrClass = ($__providers__ = require("./providers"), $__providers__ && $__providers__.__esModule && $__providers__ || {default: $__providers__}).createProviderFromFnOrClass;
function constructResolvingMessage(resolving) {
  var token = arguments[1] !== (void 0) ? arguments[1] : null;
  if (token) {
    resolving.push(token);
  }
  if (resolving.length > 1) {
    return (" (" + resolving.map(toString).join(' -> ') + ")");
  }
  return '';
}
var Injector = function Injector() {
  var modules = arguments[0] !== (void 0) ? arguments[0] : [];
  var parentInjector = arguments[1] !== (void 0) ? arguments[1] : null;
  var providers = arguments[2] !== (void 0) ? arguments[2] : new Map();
  this.cache = new Map();
  this.providers = providers;
  this.parent = parentInjector;
  this.id = getUniqueId();
  this._loadModules(modules);
};
var $Injector = Injector;
($traceurRuntime.createClass)(Injector, {
  _collectProvidersWithAnnotation: function(annotationClass, collectedProviders) {
    this.providers.forEach((function(provider, token) {
      if (!collectedProviders.has(token) && hasAnnotation(provider.provider, annotationClass)) {
        collectedProviders.set(token, provider);
      }
    }));
    if (this.parent) {
      this.parent._collectProvidersWithAnnotation(annotationClass, collectedProviders);
    }
  },
  _loadModules: function(modules) {
    var $__4 = this;
    for (var $__6 = modules[Symbol.iterator](),
        $__7; !($__7 = $__6.next()).done; ) {
      var module = $__7.value;
      {
        if (isFunction(module)) {
          this._loadFnOrClass(module);
          continue;
        }
        Object.keys(module).forEach((function(key) {
          if (isFunction(module[key])) {
            $__4._loadFnOrClass(module[key], key);
          }
        }));
      }
    }
  },
  _loadFnOrClass: function(fnOrClass, key) {
    var annotations = readAnnotations(fnOrClass);
    var token = annotations.provide.token || key || fnOrClass;
    var provider = createProviderFromFnOrClass(fnOrClass, annotations);
    this.providers.set(token, provider);
  },
  _hasProviderFor: function(token) {
    if (this.providers.has(token)) {
      return true;
    }
    if (this.parent) {
      return this.parent._hasProviderFor(token);
    }
    return false;
  },
  get: function(token) {
    var resolving = arguments[1] !== (void 0) ? arguments[1] : [];
    var wantPromise = arguments[2] !== (void 0) ? arguments[2] : false;
    var wantLazy = arguments[3] !== (void 0) ? arguments[3] : false;
    var $__4 = this;
    var resolvingMsg = '';
    var instance;
    var injector = this;
    if (token === $Injector) {
      if (wantPromise) {
        return Promise.resolve(this);
      }
      return this;
    }
    if (wantLazy) {
      return function createLazyInstance() {
        var lazyInjector = injector;
        if (arguments.length) {
          var locals = [];
          var args = arguments;
          for (var i = 0; i < args.length; i += 2) {
            locals.push((function(ii) {
              var fn = function createLocalInstance() {
                return args[ii + 1];
              };
              annotate(fn, new ProvideAnnotation(args[ii]));
              return fn;
            })(i));
          }
          lazyInjector = injector.createChild(locals);
        }
        return lazyInjector.get(token, resolving, wantPromise, false);
      };
    }
    if (this.cache.has(token)) {
      instance = this.cache.get(token);
      if (this.providers.get(token).isPromise) {
        if (!wantPromise) {
          resolvingMsg = constructResolvingMessage(resolving, token);
          throw new Error(("Cannot instantiate " + toString(token) + " synchronously. It is provided as a promise!" + resolvingMsg));
        }
      } else {
        if (wantPromise) {
          return Promise.resolve(instance);
        }
      }
      return instance;
    }
    var provider = this.providers.get(token);
    if (!provider && isFunction(token) && !this._hasProviderFor(token)) {
      provider = createProviderFromFnOrClass(token, readAnnotations(token));
      this.providers.set(token, provider);
    }
    if (!provider) {
      if (!this.parent) {
        resolvingMsg = constructResolvingMessage(resolving, token);
        throw new Error(("No provider for " + toString(token) + "!" + resolvingMsg));
      }
      return this.parent.get(token, resolving, wantPromise, wantLazy);
    }
    if (resolving.indexOf(token) !== -1) {
      resolvingMsg = constructResolvingMessage(resolving, token);
      throw new Error(("Cannot instantiate cyclic dependency!" + resolvingMsg));
    }
    resolving.push(token);
    var delayingInstantiation = wantPromise && provider.params.some((function(param) {
      return !param.isPromise;
    }));
    var args = provider.params.map((function(param) {
      if (delayingInstantiation) {
        return $__4.get(param.token, resolving, true, param.isLazy);
      }
      return $__4.get(param.token, resolving, param.isPromise, param.isLazy);
    }));
    if (delayingInstantiation) {
      var delayedResolving = resolving.slice();
      resolving.pop();
      return Promise.all(args).then(function(args) {
        try {
          instance = provider.create(args);
        } catch (e) {
          resolvingMsg = constructResolvingMessage(delayedResolving);
          var originalMsg = 'ORIGINAL ERROR: ' + e.message;
          e.message = ("Error during instantiation of " + toString(token) + "!" + resolvingMsg + "\n" + originalMsg);
          throw e;
        }
        if (!hasAnnotation(provider.provider, TransientScopeAnnotation)) {
          injector.cache.set(token, instance);
        }
        return instance;
      });
    }
    try {
      instance = provider.create(args);
    } catch (e) {
      resolvingMsg = constructResolvingMessage(resolving);
      var originalMsg = 'ORIGINAL ERROR: ' + e.message;
      e.message = ("Error during instantiation of " + toString(token) + "!" + resolvingMsg + "\n" + originalMsg);
      throw e;
    }
    if (!hasAnnotation(provider.provider, TransientScopeAnnotation)) {
      this.cache.set(token, instance);
    }
    if (!wantPromise && provider.isPromise) {
      resolvingMsg = constructResolvingMessage(resolving);
      throw new Error(("Cannot instantiate " + toString(token) + " synchronously. It is provided as a promise!" + resolvingMsg));
    }
    if (wantPromise && !provider.isPromise) {
      instance = Promise.resolve(instance);
    }
    resolving.pop();
    return instance;
  },
  getPromise: function(token) {
    return this.get(token, [], true);
  },
  createChild: function() {
    var modules = arguments[0] !== (void 0) ? arguments[0] : [];
    var forceNewInstancesOf = arguments[1] !== (void 0) ? arguments[1] : [];
    var forcedProviders = new Map();
    for (var $__6 = forceNewInstancesOf[Symbol.iterator](),
        $__7; !($__7 = $__6.next()).done; ) {
      var annotation = $__7.value;
      {
        this._collectProvidersWithAnnotation(annotation, forcedProviders);
      }
    }
    return new $Injector(modules, this, forcedProviders);
  },
  dump: function() {
    var $__4 = this;
    var serialized = {
      id: this.id,
      parent_id: this.parent ? this.parent.id : null,
      providers: {}
    };
    Object.keys(this.providers).forEach((function(token) {
      serialized.providers[token] = {
        name: token,
        dependencies: $__4.providers[token].params
      };
    }));
    return serialized;
  }
}, {});
;

},{"./annotations":1,"./profiler":4,"./providers":5,"./util":6}],4:[function(require,module,exports){
"use strict";
Object.defineProperties(exports, {
  getUniqueId: {get: function() {
      return getUniqueId;
    }},
  __esModule: {value: true}
});
var globalCounter = 0;
function getUniqueId() {
  return ++globalCounter;
}
;

},{}],5:[function(require,module,exports){
"use strict";
Object.defineProperties(exports, {
  createProviderFromFnOrClass: {get: function() {
      return createProviderFromFnOrClass;
    }},
  __esModule: {value: true}
});
var $__annotations__,
    $__util__;
var $__0 = ($__annotations__ = require("./annotations"), $__annotations__ && $__annotations__.__esModule && $__annotations__ || {default: $__annotations__}),
    SuperConstructorAnnotation = $__0.SuperConstructor,
    readAnnotations = $__0.readAnnotations;
var $__1 = ($__util__ = require("./util"), $__util__ && $__util__.__esModule && $__util__ || {default: $__util__}),
    isClass = $__1.isClass,
    isFunction = $__1.isFunction,
    isObject = $__1.isObject,
    toString = $__1.toString;
var EmptyFunction = Object.getPrototypeOf(Function);
var ClassProvider = function ClassProvider(clazz, params, isPromise) {
  this.provider = clazz;
  this.isPromise = isPromise;
  this.params = [];
  this.constructors = [];
  this._flattenParams(clazz, params);
  this.constructors.unshift([clazz, 0, this.params.length - 1]);
};
($traceurRuntime.createClass)(ClassProvider, {
  _flattenParams: function(constructor, params) {
    var SuperConstructor;
    var constructorInfo;
    for (var $__3 = params[Symbol.iterator](),
        $__4; !($__4 = $__3.next()).done; ) {
      var param = $__4.value;
      {
        if (param.token === SuperConstructorAnnotation) {
          SuperConstructor = Object.getPrototypeOf(constructor);
          if (SuperConstructor === EmptyFunction) {
            throw new Error((toString(constructor) + " does not have a parent constructor. Only classes with a parent can ask for SuperConstructor!"));
          }
          constructorInfo = [SuperConstructor, this.params.length];
          this.constructors.push(constructorInfo);
          this._flattenParams(SuperConstructor, readAnnotations(SuperConstructor).params);
          constructorInfo.push(this.params.length - 1);
        } else {
          this.params.push(param);
        }
      }
    }
  },
  _createConstructor: function(currentConstructorIdx, context, allArguments) {
    var constructorInfo = this.constructors[currentConstructorIdx];
    var nextConstructorInfo = this.constructors[currentConstructorIdx + 1];
    var argsForCurrentConstructor;
    if (nextConstructorInfo) {
      argsForCurrentConstructor = allArguments.slice(constructorInfo[1], nextConstructorInfo[1]).concat([this._createConstructor(currentConstructorIdx + 1, context, allArguments)]).concat(allArguments.slice(nextConstructorInfo[2] + 1, constructorInfo[2] + 1));
    } else {
      argsForCurrentConstructor = allArguments.slice(constructorInfo[1], constructorInfo[2] + 1);
    }
    return function InjectedAndBoundSuperConstructor() {
      return constructorInfo[0].apply(context, argsForCurrentConstructor);
    };
  },
  create: function(args) {
    var context = Object.create(this.provider.prototype);
    var constructor = this._createConstructor(0, context, args);
    var returnedValue = constructor();
    if (isFunction(returnedValue) || isObject(returnedValue)) {
      return returnedValue;
    }
    return context;
  }
}, {});
var FactoryProvider = function FactoryProvider(factoryFunction, params, isPromise) {
  this.provider = factoryFunction;
  this.params = params;
  this.isPromise = isPromise;
  for (var $__3 = params[Symbol.iterator](),
      $__4; !($__4 = $__3.next()).done; ) {
    var param = $__4.value;
    {
      if (param.token === SuperConstructorAnnotation) {
        throw new Error((toString(factoryFunction) + " is not a class. Only classes with a parent can ask for SuperConstructor!"));
      }
    }
  }
};
($traceurRuntime.createClass)(FactoryProvider, {create: function(args) {
    return this.provider.apply(undefined, args);
  }}, {});
function createProviderFromFnOrClass(fnOrClass, annotations) {
  if (isClass(fnOrClass)) {
    return new ClassProvider(fnOrClass, annotations.params, annotations.provide.isPromise);
  }
  return new FactoryProvider(fnOrClass, annotations.params, annotations.provide.isPromise);
}

},{"./annotations":1,"./util":6}],6:[function(require,module,exports){
"use strict";
Object.defineProperties(exports, {
  isUpperCase: {get: function() {
      return isUpperCase;
    }},
  isClass: {get: function() {
      return isClass;
    }},
  isFunction: {get: function() {
      return isFunction;
    }},
  isObject: {get: function() {
      return isObject;
    }},
  toString: {get: function() {
      return toString;
    }},
  __esModule: {value: true}
});
function isUpperCase(char) {
  return char.toUpperCase() === char;
}
function isClass(clsOrFunction) {
  if (clsOrFunction.name) {
    return isUpperCase(clsOrFunction.name.charAt(0));
  }
  return Object.keys(clsOrFunction.prototype).length > 0;
}
function isFunction(value) {
  return typeof value === 'function';
}
function isObject(value) {
  return typeof value === 'object';
}
function toString(token) {
  if (typeof token === 'string') {
    return token;
  }
  if (token.name) {
    return token.name;
  }
  return token.toString();
}
;

},{}]},{},[2])(2)
});