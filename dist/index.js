'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var nextThemes = require('next-themes');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

var __assign = function() {
  __assign = Object.assign || function __assign(t) {
      for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
      return t;
  };
  return __assign.apply(this, arguments);
};

function __awaiter(thisArg, _arguments, P, generator) {
  function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
  return new (P || (P = Promise))(function (resolve, reject) {
      function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
      function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
      function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
}

function __generator(thisArg, body) {
  var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
  return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
  function verb(n) { return function (v) { return step([n, v]); }; }
  function step(op) {
      if (f) throw new TypeError("Generator is already executing.");
      while (g && (g = 0, op[0] && (_ = 0)), _) try {
          if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
          if (y = 0, t) op = [op[0] & 2, t.value];
          switch (op[0]) {
              case 0: case 1: t = op; break;
              case 4: _.label++; return { value: op[1], done: false };
              case 5: _.label++; y = op[1]; op = [0]; continue;
              case 7: op = _.ops.pop(); _.trys.pop(); continue;
              default:
                  if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                  if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                  if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                  if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                  if (t[2]) _.ops.pop();
                  _.trys.pop(); continue;
          }
          op = body.call(thisArg, _);
      } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
      if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
  }
}

typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
  var e = new Error(message);
  return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};

var jsxRuntime = {exports: {}};

var reactJsxRuntime_production_min = {};

/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var hasRequiredReactJsxRuntime_production_min;

function requireReactJsxRuntime_production_min () {
	if (hasRequiredReactJsxRuntime_production_min) return reactJsxRuntime_production_min;
	hasRequiredReactJsxRuntime_production_min = 1;
var f=React__default["default"],k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};
	function q(c,a,g){var b,d={},e=null,h=null;void 0!==g&&(e=""+g);void 0!==a.key&&(e=""+a.key);void 0!==a.ref&&(h=a.ref);for(b in a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps,a)void 0===d[b]&&(d[b]=a[b]);return {$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}reactJsxRuntime_production_min.Fragment=l;reactJsxRuntime_production_min.jsx=q;reactJsxRuntime_production_min.jsxs=q;
	return reactJsxRuntime_production_min;
}

var reactJsxRuntime_development = {};

/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var hasRequiredReactJsxRuntime_development;

function requireReactJsxRuntime_development () {
	if (hasRequiredReactJsxRuntime_development) return reactJsxRuntime_development;
	hasRequiredReactJsxRuntime_development = 1;

	if (process.env.NODE_ENV !== "production") {
	  (function() {

	var React = React__default["default"];

	// ATTENTION
	// When adding new symbols to this file,
	// Please consider also adding to 'react-devtools-shared/src/backend/ReactSymbols'
	// The Symbol used to tag the ReactElement-like types.
	var REACT_ELEMENT_TYPE = Symbol.for('react.element');
	var REACT_PORTAL_TYPE = Symbol.for('react.portal');
	var REACT_FRAGMENT_TYPE = Symbol.for('react.fragment');
	var REACT_STRICT_MODE_TYPE = Symbol.for('react.strict_mode');
	var REACT_PROFILER_TYPE = Symbol.for('react.profiler');
	var REACT_PROVIDER_TYPE = Symbol.for('react.provider');
	var REACT_CONTEXT_TYPE = Symbol.for('react.context');
	var REACT_FORWARD_REF_TYPE = Symbol.for('react.forward_ref');
	var REACT_SUSPENSE_TYPE = Symbol.for('react.suspense');
	var REACT_SUSPENSE_LIST_TYPE = Symbol.for('react.suspense_list');
	var REACT_MEMO_TYPE = Symbol.for('react.memo');
	var REACT_LAZY_TYPE = Symbol.for('react.lazy');
	var REACT_OFFSCREEN_TYPE = Symbol.for('react.offscreen');
	var MAYBE_ITERATOR_SYMBOL = Symbol.iterator;
	var FAUX_ITERATOR_SYMBOL = '@@iterator';
	function getIteratorFn(maybeIterable) {
	  if (maybeIterable === null || typeof maybeIterable !== 'object') {
	    return null;
	  }

	  var maybeIterator = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL];

	  if (typeof maybeIterator === 'function') {
	    return maybeIterator;
	  }

	  return null;
	}

	var ReactSharedInternals = React.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;

	function error(format) {
	  {
	    {
	      for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
	        args[_key2 - 1] = arguments[_key2];
	      }

	      printWarning('error', format, args);
	    }
	  }
	}

	function printWarning(level, format, args) {
	  // When changing this logic, you might want to also
	  // update consoleWithStackDev.www.js as well.
	  {
	    var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;
	    var stack = ReactDebugCurrentFrame.getStackAddendum();

	    if (stack !== '') {
	      format += '%s';
	      args = args.concat([stack]);
	    } // eslint-disable-next-line react-internal/safe-string-coercion


	    var argsWithFormat = args.map(function (item) {
	      return String(item);
	    }); // Careful: RN currently depends on this prefix

	    argsWithFormat.unshift('Warning: ' + format); // We intentionally don't use spread (or .apply) directly because it
	    // breaks IE9: https://github.com/facebook/react/issues/13610
	    // eslint-disable-next-line react-internal/no-production-logging

	    Function.prototype.apply.call(console[level], console, argsWithFormat);
	  }
	}

	// -----------------------------------------------------------------------------

	var enableScopeAPI = false; // Experimental Create Event Handle API.
	var enableCacheElement = false;
	var enableTransitionTracing = false; // No known bugs, but needs performance testing

	var enableLegacyHidden = false; // Enables unstable_avoidThisFallback feature in Fiber
	// stuff. Intended to enable React core members to more easily debug scheduling
	// issues in DEV builds.

	var enableDebugTracing = false; // Track which Fiber(s) schedule render work.

	var REACT_MODULE_REFERENCE;

	{
	  REACT_MODULE_REFERENCE = Symbol.for('react.module.reference');
	}

	function isValidElementType(type) {
	  if (typeof type === 'string' || typeof type === 'function') {
	    return true;
	  } // Note: typeof might be other than 'symbol' or 'number' (e.g. if it's a polyfill).


	  if (type === REACT_FRAGMENT_TYPE || type === REACT_PROFILER_TYPE || enableDebugTracing  || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || enableLegacyHidden  || type === REACT_OFFSCREEN_TYPE || enableScopeAPI  || enableCacheElement  || enableTransitionTracing ) {
	    return true;
	  }

	  if (typeof type === 'object' && type !== null) {
	    if (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || // This needs to include all possible module reference object
	    // types supported by any Flight configuration anywhere since
	    // we don't know which Flight build this will end up being used
	    // with.
	    type.$$typeof === REACT_MODULE_REFERENCE || type.getModuleId !== undefined) {
	      return true;
	    }
	  }

	  return false;
	}

	function getWrappedName(outerType, innerType, wrapperName) {
	  var displayName = outerType.displayName;

	  if (displayName) {
	    return displayName;
	  }

	  var functionName = innerType.displayName || innerType.name || '';
	  return functionName !== '' ? wrapperName + "(" + functionName + ")" : wrapperName;
	} // Keep in sync with react-reconciler/getComponentNameFromFiber


	function getContextName(type) {
	  return type.displayName || 'Context';
	} // Note that the reconciler package should generally prefer to use getComponentNameFromFiber() instead.


	function getComponentNameFromType(type) {
	  if (type == null) {
	    // Host root, text node or just invalid type.
	    return null;
	  }

	  {
	    if (typeof type.tag === 'number') {
	      error('Received an unexpected object in getComponentNameFromType(). ' + 'This is likely a bug in React. Please file an issue.');
	    }
	  }

	  if (typeof type === 'function') {
	    return type.displayName || type.name || null;
	  }

	  if (typeof type === 'string') {
	    return type;
	  }

	  switch (type) {
	    case REACT_FRAGMENT_TYPE:
	      return 'Fragment';

	    case REACT_PORTAL_TYPE:
	      return 'Portal';

	    case REACT_PROFILER_TYPE:
	      return 'Profiler';

	    case REACT_STRICT_MODE_TYPE:
	      return 'StrictMode';

	    case REACT_SUSPENSE_TYPE:
	      return 'Suspense';

	    case REACT_SUSPENSE_LIST_TYPE:
	      return 'SuspenseList';

	  }

	  if (typeof type === 'object') {
	    switch (type.$$typeof) {
	      case REACT_CONTEXT_TYPE:
	        var context = type;
	        return getContextName(context) + '.Consumer';

	      case REACT_PROVIDER_TYPE:
	        var provider = type;
	        return getContextName(provider._context) + '.Provider';

	      case REACT_FORWARD_REF_TYPE:
	        return getWrappedName(type, type.render, 'ForwardRef');

	      case REACT_MEMO_TYPE:
	        var outerName = type.displayName || null;

	        if (outerName !== null) {
	          return outerName;
	        }

	        return getComponentNameFromType(type.type) || 'Memo';

	      case REACT_LAZY_TYPE:
	        {
	          var lazyComponent = type;
	          var payload = lazyComponent._payload;
	          var init = lazyComponent._init;

	          try {
	            return getComponentNameFromType(init(payload));
	          } catch (x) {
	            return null;
	          }
	        }

	      // eslint-disable-next-line no-fallthrough
	    }
	  }

	  return null;
	}

	var assign = Object.assign;

	// Helpers to patch console.logs to avoid logging during side-effect free
	// replaying on render function. This currently only patches the object
	// lazily which won't cover if the log function was extracted eagerly.
	// We could also eagerly patch the method.
	var disabledDepth = 0;
	var prevLog;
	var prevInfo;
	var prevWarn;
	var prevError;
	var prevGroup;
	var prevGroupCollapsed;
	var prevGroupEnd;

	function disabledLog() {}

	disabledLog.__reactDisabledLog = true;
	function disableLogs() {
	  {
	    if (disabledDepth === 0) {
	      /* eslint-disable react-internal/no-production-logging */
	      prevLog = console.log;
	      prevInfo = console.info;
	      prevWarn = console.warn;
	      prevError = console.error;
	      prevGroup = console.group;
	      prevGroupCollapsed = console.groupCollapsed;
	      prevGroupEnd = console.groupEnd; // https://github.com/facebook/react/issues/19099

	      var props = {
	        configurable: true,
	        enumerable: true,
	        value: disabledLog,
	        writable: true
	      }; // $FlowFixMe Flow thinks console is immutable.

	      Object.defineProperties(console, {
	        info: props,
	        log: props,
	        warn: props,
	        error: props,
	        group: props,
	        groupCollapsed: props,
	        groupEnd: props
	      });
	      /* eslint-enable react-internal/no-production-logging */
	    }

	    disabledDepth++;
	  }
	}
	function reenableLogs() {
	  {
	    disabledDepth--;

	    if (disabledDepth === 0) {
	      /* eslint-disable react-internal/no-production-logging */
	      var props = {
	        configurable: true,
	        enumerable: true,
	        writable: true
	      }; // $FlowFixMe Flow thinks console is immutable.

	      Object.defineProperties(console, {
	        log: assign({}, props, {
	          value: prevLog
	        }),
	        info: assign({}, props, {
	          value: prevInfo
	        }),
	        warn: assign({}, props, {
	          value: prevWarn
	        }),
	        error: assign({}, props, {
	          value: prevError
	        }),
	        group: assign({}, props, {
	          value: prevGroup
	        }),
	        groupCollapsed: assign({}, props, {
	          value: prevGroupCollapsed
	        }),
	        groupEnd: assign({}, props, {
	          value: prevGroupEnd
	        })
	      });
	      /* eslint-enable react-internal/no-production-logging */
	    }

	    if (disabledDepth < 0) {
	      error('disabledDepth fell below zero. ' + 'This is a bug in React. Please file an issue.');
	    }
	  }
	}

	var ReactCurrentDispatcher = ReactSharedInternals.ReactCurrentDispatcher;
	var prefix;
	function describeBuiltInComponentFrame(name, source, ownerFn) {
	  {
	    if (prefix === undefined) {
	      // Extract the VM specific prefix used by each line.
	      try {
	        throw Error();
	      } catch (x) {
	        var match = x.stack.trim().match(/\n( *(at )?)/);
	        prefix = match && match[1] || '';
	      }
	    } // We use the prefix to ensure our stacks line up with native stack frames.


	    return '\n' + prefix + name;
	  }
	}
	var reentry = false;
	var componentFrameCache;

	{
	  var PossiblyWeakMap = typeof WeakMap === 'function' ? WeakMap : Map;
	  componentFrameCache = new PossiblyWeakMap();
	}

	function describeNativeComponentFrame(fn, construct) {
	  // If something asked for a stack inside a fake render, it should get ignored.
	  if ( !fn || reentry) {
	    return '';
	  }

	  {
	    var frame = componentFrameCache.get(fn);

	    if (frame !== undefined) {
	      return frame;
	    }
	  }

	  var control;
	  reentry = true;
	  var previousPrepareStackTrace = Error.prepareStackTrace; // $FlowFixMe It does accept undefined.

	  Error.prepareStackTrace = undefined;
	  var previousDispatcher;

	  {
	    previousDispatcher = ReactCurrentDispatcher.current; // Set the dispatcher in DEV because this might be call in the render function
	    // for warnings.

	    ReactCurrentDispatcher.current = null;
	    disableLogs();
	  }

	  try {
	    // This should throw.
	    if (construct) {
	      // Something should be setting the props in the constructor.
	      var Fake = function () {
	        throw Error();
	      }; // $FlowFixMe


	      Object.defineProperty(Fake.prototype, 'props', {
	        set: function () {
	          // We use a throwing setter instead of frozen or non-writable props
	          // because that won't throw in a non-strict mode function.
	          throw Error();
	        }
	      });

	      if (typeof Reflect === 'object' && Reflect.construct) {
	        // We construct a different control for this case to include any extra
	        // frames added by the construct call.
	        try {
	          Reflect.construct(Fake, []);
	        } catch (x) {
	          control = x;
	        }

	        Reflect.construct(fn, [], Fake);
	      } else {
	        try {
	          Fake.call();
	        } catch (x) {
	          control = x;
	        }

	        fn.call(Fake.prototype);
	      }
	    } else {
	      try {
	        throw Error();
	      } catch (x) {
	        control = x;
	      }

	      fn();
	    }
	  } catch (sample) {
	    // This is inlined manually because closure doesn't do it for us.
	    if (sample && control && typeof sample.stack === 'string') {
	      // This extracts the first frame from the sample that isn't also in the control.
	      // Skipping one frame that we assume is the frame that calls the two.
	      var sampleLines = sample.stack.split('\n');
	      var controlLines = control.stack.split('\n');
	      var s = sampleLines.length - 1;
	      var c = controlLines.length - 1;

	      while (s >= 1 && c >= 0 && sampleLines[s] !== controlLines[c]) {
	        // We expect at least one stack frame to be shared.
	        // Typically this will be the root most one. However, stack frames may be
	        // cut off due to maximum stack limits. In this case, one maybe cut off
	        // earlier than the other. We assume that the sample is longer or the same
	        // and there for cut off earlier. So we should find the root most frame in
	        // the sample somewhere in the control.
	        c--;
	      }

	      for (; s >= 1 && c >= 0; s--, c--) {
	        // Next we find the first one that isn't the same which should be the
	        // frame that called our sample function and the control.
	        if (sampleLines[s] !== controlLines[c]) {
	          // In V8, the first line is describing the message but other VMs don't.
	          // If we're about to return the first line, and the control is also on the same
	          // line, that's a pretty good indicator that our sample threw at same line as
	          // the control. I.e. before we entered the sample frame. So we ignore this result.
	          // This can happen if you passed a class to function component, or non-function.
	          if (s !== 1 || c !== 1) {
	            do {
	              s--;
	              c--; // We may still have similar intermediate frames from the construct call.
	              // The next one that isn't the same should be our match though.

	              if (c < 0 || sampleLines[s] !== controlLines[c]) {
	                // V8 adds a "new" prefix for native classes. Let's remove it to make it prettier.
	                var _frame = '\n' + sampleLines[s].replace(' at new ', ' at '); // If our component frame is labeled "<anonymous>"
	                // but we have a user-provided "displayName"
	                // splice it in to make the stack more readable.


	                if (fn.displayName && _frame.includes('<anonymous>')) {
	                  _frame = _frame.replace('<anonymous>', fn.displayName);
	                }

	                {
	                  if (typeof fn === 'function') {
	                    componentFrameCache.set(fn, _frame);
	                  }
	                } // Return the line we found.


	                return _frame;
	              }
	            } while (s >= 1 && c >= 0);
	          }

	          break;
	        }
	      }
	    }
	  } finally {
	    reentry = false;

	    {
	      ReactCurrentDispatcher.current = previousDispatcher;
	      reenableLogs();
	    }

	    Error.prepareStackTrace = previousPrepareStackTrace;
	  } // Fallback to just using the name if we couldn't make it throw.


	  var name = fn ? fn.displayName || fn.name : '';
	  var syntheticFrame = name ? describeBuiltInComponentFrame(name) : '';

	  {
	    if (typeof fn === 'function') {
	      componentFrameCache.set(fn, syntheticFrame);
	    }
	  }

	  return syntheticFrame;
	}
	function describeFunctionComponentFrame(fn, source, ownerFn) {
	  {
	    return describeNativeComponentFrame(fn, false);
	  }
	}

	function shouldConstruct(Component) {
	  var prototype = Component.prototype;
	  return !!(prototype && prototype.isReactComponent);
	}

	function describeUnknownElementTypeFrameInDEV(type, source, ownerFn) {

	  if (type == null) {
	    return '';
	  }

	  if (typeof type === 'function') {
	    {
	      return describeNativeComponentFrame(type, shouldConstruct(type));
	    }
	  }

	  if (typeof type === 'string') {
	    return describeBuiltInComponentFrame(type);
	  }

	  switch (type) {
	    case REACT_SUSPENSE_TYPE:
	      return describeBuiltInComponentFrame('Suspense');

	    case REACT_SUSPENSE_LIST_TYPE:
	      return describeBuiltInComponentFrame('SuspenseList');
	  }

	  if (typeof type === 'object') {
	    switch (type.$$typeof) {
	      case REACT_FORWARD_REF_TYPE:
	        return describeFunctionComponentFrame(type.render);

	      case REACT_MEMO_TYPE:
	        // Memo may contain any component type so we recursively resolve it.
	        return describeUnknownElementTypeFrameInDEV(type.type, source, ownerFn);

	      case REACT_LAZY_TYPE:
	        {
	          var lazyComponent = type;
	          var payload = lazyComponent._payload;
	          var init = lazyComponent._init;

	          try {
	            // Lazy may contain any component type so we recursively resolve it.
	            return describeUnknownElementTypeFrameInDEV(init(payload), source, ownerFn);
	          } catch (x) {}
	        }
	    }
	  }

	  return '';
	}

	var hasOwnProperty = Object.prototype.hasOwnProperty;

	var loggedTypeFailures = {};
	var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;

	function setCurrentlyValidatingElement(element) {
	  {
	    if (element) {
	      var owner = element._owner;
	      var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
	      ReactDebugCurrentFrame.setExtraStackFrame(stack);
	    } else {
	      ReactDebugCurrentFrame.setExtraStackFrame(null);
	    }
	  }
	}

	function checkPropTypes(typeSpecs, values, location, componentName, element) {
	  {
	    // $FlowFixMe This is okay but Flow doesn't know it.
	    var has = Function.call.bind(hasOwnProperty);

	    for (var typeSpecName in typeSpecs) {
	      if (has(typeSpecs, typeSpecName)) {
	        var error$1 = void 0; // Prop type validation may throw. In case they do, we don't want to
	        // fail the render phase where it didn't fail before. So we log it.
	        // After these have been cleaned up, we'll let them throw.

	        try {
	          // This is intentionally an invariant that gets caught. It's the same
	          // behavior as without this statement except with a better message.
	          if (typeof typeSpecs[typeSpecName] !== 'function') {
	            // eslint-disable-next-line react-internal/prod-error-codes
	            var err = Error((componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' + 'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.' + 'This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.');
	            err.name = 'Invariant Violation';
	            throw err;
	          }

	          error$1 = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED');
	        } catch (ex) {
	          error$1 = ex;
	        }

	        if (error$1 && !(error$1 instanceof Error)) {
	          setCurrentlyValidatingElement(element);

	          error('%s: type specification of %s' + ' `%s` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a %s. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).', componentName || 'React class', location, typeSpecName, typeof error$1);

	          setCurrentlyValidatingElement(null);
	        }

	        if (error$1 instanceof Error && !(error$1.message in loggedTypeFailures)) {
	          // Only monitor this failure once because there tends to be a lot of the
	          // same error.
	          loggedTypeFailures[error$1.message] = true;
	          setCurrentlyValidatingElement(element);

	          error('Failed %s type: %s', location, error$1.message);

	          setCurrentlyValidatingElement(null);
	        }
	      }
	    }
	  }
	}

	var isArrayImpl = Array.isArray; // eslint-disable-next-line no-redeclare

	function isArray(a) {
	  return isArrayImpl(a);
	}

	/*
	 * The `'' + value` pattern (used in in perf-sensitive code) throws for Symbol
	 * and Temporal.* types. See https://github.com/facebook/react/pull/22064.
	 *
	 * The functions in this module will throw an easier-to-understand,
	 * easier-to-debug exception with a clear errors message message explaining the
	 * problem. (Instead of a confusing exception thrown inside the implementation
	 * of the `value` object).
	 */
	// $FlowFixMe only called in DEV, so void return is not possible.
	function typeName(value) {
	  {
	    // toStringTag is needed for namespaced types like Temporal.Instant
	    var hasToStringTag = typeof Symbol === 'function' && Symbol.toStringTag;
	    var type = hasToStringTag && value[Symbol.toStringTag] || value.constructor.name || 'Object';
	    return type;
	  }
	} // $FlowFixMe only called in DEV, so void return is not possible.


	function willCoercionThrow(value) {
	  {
	    try {
	      testStringCoercion(value);
	      return false;
	    } catch (e) {
	      return true;
	    }
	  }
	}

	function testStringCoercion(value) {
	  // If you ended up here by following an exception call stack, here's what's
	  // happened: you supplied an object or symbol value to React (as a prop, key,
	  // DOM attribute, CSS property, string ref, etc.) and when React tried to
	  // coerce it to a string using `'' + value`, an exception was thrown.
	  //
	  // The most common types that will cause this exception are `Symbol` instances
	  // and Temporal objects like `Temporal.Instant`. But any object that has a
	  // `valueOf` or `[Symbol.toPrimitive]` method that throws will also cause this
	  // exception. (Library authors do this to prevent users from using built-in
	  // numeric operators like `+` or comparison operators like `>=` because custom
	  // methods are needed to perform accurate arithmetic or comparison.)
	  //
	  // To fix the problem, coerce this object or symbol value to a string before
	  // passing it to React. The most reliable way is usually `String(value)`.
	  //
	  // To find which value is throwing, check the browser or debugger console.
	  // Before this exception was thrown, there should be `console.error` output
	  // that shows the type (Symbol, Temporal.PlainDate, etc.) that caused the
	  // problem and how that type was used: key, atrribute, input value prop, etc.
	  // In most cases, this console output also shows the component and its
	  // ancestor components where the exception happened.
	  //
	  // eslint-disable-next-line react-internal/safe-string-coercion
	  return '' + value;
	}
	function checkKeyStringCoercion(value) {
	  {
	    if (willCoercionThrow(value)) {
	      error('The provided key is an unsupported type %s.' + ' This value must be coerced to a string before before using it here.', typeName(value));

	      return testStringCoercion(value); // throw (to help callers find troubleshooting comments)
	    }
	  }
	}

	var ReactCurrentOwner = ReactSharedInternals.ReactCurrentOwner;
	var RESERVED_PROPS = {
	  key: true,
	  ref: true,
	  __self: true,
	  __source: true
	};
	var specialPropKeyWarningShown;
	var specialPropRefWarningShown;
	var didWarnAboutStringRefs;

	{
	  didWarnAboutStringRefs = {};
	}

	function hasValidRef(config) {
	  {
	    if (hasOwnProperty.call(config, 'ref')) {
	      var getter = Object.getOwnPropertyDescriptor(config, 'ref').get;

	      if (getter && getter.isReactWarning) {
	        return false;
	      }
	    }
	  }

	  return config.ref !== undefined;
	}

	function hasValidKey(config) {
	  {
	    if (hasOwnProperty.call(config, 'key')) {
	      var getter = Object.getOwnPropertyDescriptor(config, 'key').get;

	      if (getter && getter.isReactWarning) {
	        return false;
	      }
	    }
	  }

	  return config.key !== undefined;
	}

	function warnIfStringRefCannotBeAutoConverted(config, self) {
	  {
	    if (typeof config.ref === 'string' && ReactCurrentOwner.current && self && ReactCurrentOwner.current.stateNode !== self) {
	      var componentName = getComponentNameFromType(ReactCurrentOwner.current.type);

	      if (!didWarnAboutStringRefs[componentName]) {
	        error('Component "%s" contains the string ref "%s". ' + 'Support for string refs will be removed in a future major release. ' + 'This case cannot be automatically converted to an arrow function. ' + 'We ask you to manually fix this case by using useRef() or createRef() instead. ' + 'Learn more about using refs safely here: ' + 'https://reactjs.org/link/strict-mode-string-ref', getComponentNameFromType(ReactCurrentOwner.current.type), config.ref);

	        didWarnAboutStringRefs[componentName] = true;
	      }
	    }
	  }
	}

	function defineKeyPropWarningGetter(props, displayName) {
	  {
	    var warnAboutAccessingKey = function () {
	      if (!specialPropKeyWarningShown) {
	        specialPropKeyWarningShown = true;

	        error('%s: `key` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://reactjs.org/link/special-props)', displayName);
	      }
	    };

	    warnAboutAccessingKey.isReactWarning = true;
	    Object.defineProperty(props, 'key', {
	      get: warnAboutAccessingKey,
	      configurable: true
	    });
	  }
	}

	function defineRefPropWarningGetter(props, displayName) {
	  {
	    var warnAboutAccessingRef = function () {
	      if (!specialPropRefWarningShown) {
	        specialPropRefWarningShown = true;

	        error('%s: `ref` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://reactjs.org/link/special-props)', displayName);
	      }
	    };

	    warnAboutAccessingRef.isReactWarning = true;
	    Object.defineProperty(props, 'ref', {
	      get: warnAboutAccessingRef,
	      configurable: true
	    });
	  }
	}
	/**
	 * Factory method to create a new React element. This no longer adheres to
	 * the class pattern, so do not use new to call it. Also, instanceof check
	 * will not work. Instead test $$typeof field against Symbol.for('react.element') to check
	 * if something is a React Element.
	 *
	 * @param {*} type
	 * @param {*} props
	 * @param {*} key
	 * @param {string|object} ref
	 * @param {*} owner
	 * @param {*} self A *temporary* helper to detect places where `this` is
	 * different from the `owner` when React.createElement is called, so that we
	 * can warn. We want to get rid of owner and replace string `ref`s with arrow
	 * functions, and as long as `this` and owner are the same, there will be no
	 * change in behavior.
	 * @param {*} source An annotation object (added by a transpiler or otherwise)
	 * indicating filename, line number, and/or other information.
	 * @internal
	 */


	var ReactElement = function (type, key, ref, self, source, owner, props) {
	  var element = {
	    // This tag allows us to uniquely identify this as a React Element
	    $$typeof: REACT_ELEMENT_TYPE,
	    // Built-in properties that belong on the element
	    type: type,
	    key: key,
	    ref: ref,
	    props: props,
	    // Record the component responsible for creating this element.
	    _owner: owner
	  };

	  {
	    // The validation flag is currently mutative. We put it on
	    // an external backing store so that we can freeze the whole object.
	    // This can be replaced with a WeakMap once they are implemented in
	    // commonly used development environments.
	    element._store = {}; // To make comparing ReactElements easier for testing purposes, we make
	    // the validation flag non-enumerable (where possible, which should
	    // include every environment we run tests in), so the test framework
	    // ignores it.

	    Object.defineProperty(element._store, 'validated', {
	      configurable: false,
	      enumerable: false,
	      writable: true,
	      value: false
	    }); // self and source are DEV only properties.

	    Object.defineProperty(element, '_self', {
	      configurable: false,
	      enumerable: false,
	      writable: false,
	      value: self
	    }); // Two elements created in two different places should be considered
	    // equal for testing purposes and therefore we hide it from enumeration.

	    Object.defineProperty(element, '_source', {
	      configurable: false,
	      enumerable: false,
	      writable: false,
	      value: source
	    });

	    if (Object.freeze) {
	      Object.freeze(element.props);
	      Object.freeze(element);
	    }
	  }

	  return element;
	};
	/**
	 * https://github.com/reactjs/rfcs/pull/107
	 * @param {*} type
	 * @param {object} props
	 * @param {string} key
	 */

	function jsxDEV(type, config, maybeKey, source, self) {
	  {
	    var propName; // Reserved names are extracted

	    var props = {};
	    var key = null;
	    var ref = null; // Currently, key can be spread in as a prop. This causes a potential
	    // issue if key is also explicitly declared (ie. <div {...props} key="Hi" />
	    // or <div key="Hi" {...props} /> ). We want to deprecate key spread,
	    // but as an intermediary step, we will use jsxDEV for everything except
	    // <div {...props} key="Hi" />, because we aren't currently able to tell if
	    // key is explicitly declared to be undefined or not.

	    if (maybeKey !== undefined) {
	      {
	        checkKeyStringCoercion(maybeKey);
	      }

	      key = '' + maybeKey;
	    }

	    if (hasValidKey(config)) {
	      {
	        checkKeyStringCoercion(config.key);
	      }

	      key = '' + config.key;
	    }

	    if (hasValidRef(config)) {
	      ref = config.ref;
	      warnIfStringRefCannotBeAutoConverted(config, self);
	    } // Remaining properties are added to a new props object


	    for (propName in config) {
	      if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
	        props[propName] = config[propName];
	      }
	    } // Resolve default props


	    if (type && type.defaultProps) {
	      var defaultProps = type.defaultProps;

	      for (propName in defaultProps) {
	        if (props[propName] === undefined) {
	          props[propName] = defaultProps[propName];
	        }
	      }
	    }

	    if (key || ref) {
	      var displayName = typeof type === 'function' ? type.displayName || type.name || 'Unknown' : type;

	      if (key) {
	        defineKeyPropWarningGetter(props, displayName);
	      }

	      if (ref) {
	        defineRefPropWarningGetter(props, displayName);
	      }
	    }

	    return ReactElement(type, key, ref, self, source, ReactCurrentOwner.current, props);
	  }
	}

	var ReactCurrentOwner$1 = ReactSharedInternals.ReactCurrentOwner;
	var ReactDebugCurrentFrame$1 = ReactSharedInternals.ReactDebugCurrentFrame;

	function setCurrentlyValidatingElement$1(element) {
	  {
	    if (element) {
	      var owner = element._owner;
	      var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
	      ReactDebugCurrentFrame$1.setExtraStackFrame(stack);
	    } else {
	      ReactDebugCurrentFrame$1.setExtraStackFrame(null);
	    }
	  }
	}

	var propTypesMisspellWarningShown;

	{
	  propTypesMisspellWarningShown = false;
	}
	/**
	 * Verifies the object is a ReactElement.
	 * See https://reactjs.org/docs/react-api.html#isvalidelement
	 * @param {?object} object
	 * @return {boolean} True if `object` is a ReactElement.
	 * @final
	 */


	function isValidElement(object) {
	  {
	    return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
	  }
	}

	function getDeclarationErrorAddendum() {
	  {
	    if (ReactCurrentOwner$1.current) {
	      var name = getComponentNameFromType(ReactCurrentOwner$1.current.type);

	      if (name) {
	        return '\n\nCheck the render method of `' + name + '`.';
	      }
	    }

	    return '';
	  }
	}

	function getSourceInfoErrorAddendum(source) {
	  {
	    if (source !== undefined) {
	      var fileName = source.fileName.replace(/^.*[\\\/]/, '');
	      var lineNumber = source.lineNumber;
	      return '\n\nCheck your code at ' + fileName + ':' + lineNumber + '.';
	    }

	    return '';
	  }
	}
	/**
	 * Warn if there's no key explicitly set on dynamic arrays of children or
	 * object keys are not valid. This allows us to keep track of children between
	 * updates.
	 */


	var ownerHasKeyUseWarning = {};

	function getCurrentComponentErrorInfo(parentType) {
	  {
	    var info = getDeclarationErrorAddendum();

	    if (!info) {
	      var parentName = typeof parentType === 'string' ? parentType : parentType.displayName || parentType.name;

	      if (parentName) {
	        info = "\n\nCheck the top-level render call using <" + parentName + ">.";
	      }
	    }

	    return info;
	  }
	}
	/**
	 * Warn if the element doesn't have an explicit key assigned to it.
	 * This element is in an array. The array could grow and shrink or be
	 * reordered. All children that haven't already been validated are required to
	 * have a "key" property assigned to it. Error statuses are cached so a warning
	 * will only be shown once.
	 *
	 * @internal
	 * @param {ReactElement} element Element that requires a key.
	 * @param {*} parentType element's parent's type.
	 */


	function validateExplicitKey(element, parentType) {
	  {
	    if (!element._store || element._store.validated || element.key != null) {
	      return;
	    }

	    element._store.validated = true;
	    var currentComponentErrorInfo = getCurrentComponentErrorInfo(parentType);

	    if (ownerHasKeyUseWarning[currentComponentErrorInfo]) {
	      return;
	    }

	    ownerHasKeyUseWarning[currentComponentErrorInfo] = true; // Usually the current owner is the offender, but if it accepts children as a
	    // property, it may be the creator of the child that's responsible for
	    // assigning it a key.

	    var childOwner = '';

	    if (element && element._owner && element._owner !== ReactCurrentOwner$1.current) {
	      // Give the component that originally created this child.
	      childOwner = " It was passed a child from " + getComponentNameFromType(element._owner.type) + ".";
	    }

	    setCurrentlyValidatingElement$1(element);

	    error('Each child in a list should have a unique "key" prop.' + '%s%s See https://reactjs.org/link/warning-keys for more information.', currentComponentErrorInfo, childOwner);

	    setCurrentlyValidatingElement$1(null);
	  }
	}
	/**
	 * Ensure that every element either is passed in a static location, in an
	 * array with an explicit keys property defined, or in an object literal
	 * with valid key property.
	 *
	 * @internal
	 * @param {ReactNode} node Statically passed child of any type.
	 * @param {*} parentType node's parent's type.
	 */


	function validateChildKeys(node, parentType) {
	  {
	    if (typeof node !== 'object') {
	      return;
	    }

	    if (isArray(node)) {
	      for (var i = 0; i < node.length; i++) {
	        var child = node[i];

	        if (isValidElement(child)) {
	          validateExplicitKey(child, parentType);
	        }
	      }
	    } else if (isValidElement(node)) {
	      // This element was passed in a valid location.
	      if (node._store) {
	        node._store.validated = true;
	      }
	    } else if (node) {
	      var iteratorFn = getIteratorFn(node);

	      if (typeof iteratorFn === 'function') {
	        // Entry iterators used to provide implicit keys,
	        // but now we print a separate warning for them later.
	        if (iteratorFn !== node.entries) {
	          var iterator = iteratorFn.call(node);
	          var step;

	          while (!(step = iterator.next()).done) {
	            if (isValidElement(step.value)) {
	              validateExplicitKey(step.value, parentType);
	            }
	          }
	        }
	      }
	    }
	  }
	}
	/**
	 * Given an element, validate that its props follow the propTypes definition,
	 * provided by the type.
	 *
	 * @param {ReactElement} element
	 */


	function validatePropTypes(element) {
	  {
	    var type = element.type;

	    if (type === null || type === undefined || typeof type === 'string') {
	      return;
	    }

	    var propTypes;

	    if (typeof type === 'function') {
	      propTypes = type.propTypes;
	    } else if (typeof type === 'object' && (type.$$typeof === REACT_FORWARD_REF_TYPE || // Note: Memo only checks outer props here.
	    // Inner props are checked in the reconciler.
	    type.$$typeof === REACT_MEMO_TYPE)) {
	      propTypes = type.propTypes;
	    } else {
	      return;
	    }

	    if (propTypes) {
	      // Intentionally inside to avoid triggering lazy initializers:
	      var name = getComponentNameFromType(type);
	      checkPropTypes(propTypes, element.props, 'prop', name, element);
	    } else if (type.PropTypes !== undefined && !propTypesMisspellWarningShown) {
	      propTypesMisspellWarningShown = true; // Intentionally inside to avoid triggering lazy initializers:

	      var _name = getComponentNameFromType(type);

	      error('Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?', _name || 'Unknown');
	    }

	    if (typeof type.getDefaultProps === 'function' && !type.getDefaultProps.isReactClassApproved) {
	      error('getDefaultProps is only used on classic React.createClass ' + 'definitions. Use a static property named `defaultProps` instead.');
	    }
	  }
	}
	/**
	 * Given a fragment, validate that it can only be provided with fragment props
	 * @param {ReactElement} fragment
	 */


	function validateFragmentProps(fragment) {
	  {
	    var keys = Object.keys(fragment.props);

	    for (var i = 0; i < keys.length; i++) {
	      var key = keys[i];

	      if (key !== 'children' && key !== 'key') {
	        setCurrentlyValidatingElement$1(fragment);

	        error('Invalid prop `%s` supplied to `React.Fragment`. ' + 'React.Fragment can only have `key` and `children` props.', key);

	        setCurrentlyValidatingElement$1(null);
	        break;
	      }
	    }

	    if (fragment.ref !== null) {
	      setCurrentlyValidatingElement$1(fragment);

	      error('Invalid attribute `ref` supplied to `React.Fragment`.');

	      setCurrentlyValidatingElement$1(null);
	    }
	  }
	}

	var didWarnAboutKeySpread = {};
	function jsxWithValidation(type, props, key, isStaticChildren, source, self) {
	  {
	    var validType = isValidElementType(type); // We warn in this case but don't throw. We expect the element creation to
	    // succeed and there will likely be errors in render.

	    if (!validType) {
	      var info = '';

	      if (type === undefined || typeof type === 'object' && type !== null && Object.keys(type).length === 0) {
	        info += ' You likely forgot to export your component from the file ' + "it's defined in, or you might have mixed up default and named imports.";
	      }

	      var sourceInfo = getSourceInfoErrorAddendum(source);

	      if (sourceInfo) {
	        info += sourceInfo;
	      } else {
	        info += getDeclarationErrorAddendum();
	      }

	      var typeString;

	      if (type === null) {
	        typeString = 'null';
	      } else if (isArray(type)) {
	        typeString = 'array';
	      } else if (type !== undefined && type.$$typeof === REACT_ELEMENT_TYPE) {
	        typeString = "<" + (getComponentNameFromType(type.type) || 'Unknown') + " />";
	        info = ' Did you accidentally export a JSX literal instead of a component?';
	      } else {
	        typeString = typeof type;
	      }

	      error('React.jsx: type is invalid -- expected a string (for ' + 'built-in components) or a class/function (for composite ' + 'components) but got: %s.%s', typeString, info);
	    }

	    var element = jsxDEV(type, props, key, source, self); // The result can be nullish if a mock or a custom function is used.
	    // TODO: Drop this when these are no longer allowed as the type argument.

	    if (element == null) {
	      return element;
	    } // Skip key warning if the type isn't valid since our key validation logic
	    // doesn't expect a non-string/function type and can throw confusing errors.
	    // We don't want exception behavior to differ between dev and prod.
	    // (Rendering will throw with a helpful message and as soon as the type is
	    // fixed, the key warnings will appear.)


	    if (validType) {
	      var children = props.children;

	      if (children !== undefined) {
	        if (isStaticChildren) {
	          if (isArray(children)) {
	            for (var i = 0; i < children.length; i++) {
	              validateChildKeys(children[i], type);
	            }

	            if (Object.freeze) {
	              Object.freeze(children);
	            }
	          } else {
	            error('React.jsx: Static children should always be an array. ' + 'You are likely explicitly calling React.jsxs or React.jsxDEV. ' + 'Use the Babel transform instead.');
	          }
	        } else {
	          validateChildKeys(children, type);
	        }
	      }
	    }

	    {
	      if (hasOwnProperty.call(props, 'key')) {
	        var componentName = getComponentNameFromType(type);
	        var keys = Object.keys(props).filter(function (k) {
	          return k !== 'key';
	        });
	        var beforeExample = keys.length > 0 ? '{key: someKey, ' + keys.join(': ..., ') + ': ...}' : '{key: someKey}';

	        if (!didWarnAboutKeySpread[componentName + beforeExample]) {
	          var afterExample = keys.length > 0 ? '{' + keys.join(': ..., ') + ': ...}' : '{}';

	          error('A props object containing a "key" prop is being spread into JSX:\n' + '  let props = %s;\n' + '  <%s {...props} />\n' + 'React keys must be passed directly to JSX without using spread:\n' + '  let props = %s;\n' + '  <%s key={someKey} {...props} />', beforeExample, componentName, afterExample, componentName);

	          didWarnAboutKeySpread[componentName + beforeExample] = true;
	        }
	      }
	    }

	    if (type === REACT_FRAGMENT_TYPE) {
	      validateFragmentProps(element);
	    } else {
	      validatePropTypes(element);
	    }

	    return element;
	  }
	} // These two functions exist to still get child warnings in dev
	// even with the prod transform. This means that jsxDEV is purely
	// opt-in behavior for better messages but that we won't stop
	// giving you warnings if you use production apis.

	function jsxWithValidationStatic(type, props, key) {
	  {
	    return jsxWithValidation(type, props, key, true);
	  }
	}
	function jsxWithValidationDynamic(type, props, key) {
	  {
	    return jsxWithValidation(type, props, key, false);
	  }
	}

	var jsx =  jsxWithValidationDynamic ; // we may want to special case jsxs internally to take advantage of static children.
	// for now we can ship identical prod functions

	var jsxs =  jsxWithValidationStatic ;

	reactJsxRuntime_development.Fragment = REACT_FRAGMENT_TYPE;
	reactJsxRuntime_development.jsx = jsx;
	reactJsxRuntime_development.jsxs = jsxs;
	  })();
	}
	return reactJsxRuntime_development;
}

(function (module) {

	if (process.env.NODE_ENV === 'production') {
	  module.exports = requireReactJsxRuntime_production_min();
	} else {
	  module.exports = requireReactJsxRuntime_development();
	}
} (jsxRuntime));

var styles = {"container":"virtual-keyboard-module_container__u6pRi","disabled":"virtual-keyboard-module_disabled__ERBdP","inputDisplay":"virtual-keyboard-module_inputDisplay__3pRwO","cursor":"virtual-keyboard-module_cursor__3HnkE","blink":"virtual-keyboard-module_blink__O6Gs6","inputArea":"virtual-keyboard-module_inputArea__IDrEv","displayArea":"virtual-keyboard-module_displayArea__JCMTs","confirmedText":"virtual-keyboard-module_confirmedText__mcJxM","inputText":"virtual-keyboard-module_inputText__rUpq9","keyboardWrapper":"virtual-keyboard-module_keyboardWrapper__oOURH","candidateArea":"virtual-keyboard-module_candidateArea__r6LdU","placeholderText":"virtual-keyboard-module_placeholderText__vTJGd","candidateList":"virtual-keyboard-module_candidateList__KMaxM","candidateItem":"virtual-keyboard-module_candidateItem__fDpKH","keyboard":"virtual-keyboard-module_keyboard__XMjxM","hirakey":"virtual-keyboard-module_hirakey__qCOZJ","column":"virtual-keyboard-module_column__k-jy6","key":"virtual-keyboard-module_key__f2tfO","tenkey":"virtual-keyboard-module_tenkey__7afVW","tenkeyGrid":"virtual-keyboard-module_tenkeyGrid__co3kM","tenkeyWrapper":"virtual-keyboard-module_tenkeyWrapper__BznWw","tenkeyColumn":"virtual-keyboard-module_tenkeyColumn__Taocb","tenkeyKey":"virtual-keyboard-module_tenkeyKey__N21Qe","deleteKey":"virtual-keyboard-module_deleteKey__zP3kH","row":"virtual-keyboard-module_row__DEywY","divkey":"virtual-keyboard-module_divkey__ekAqf","confirmKey":"virtual-keyboard-module_confirmKey__IzUns","functionKey":"virtual-keyboard-module_functionKey__msNCp","convertKey":"virtual-keyboard-module_convertKey__JBizs","input":"virtual-keyboard-module_input__s54u5","autoResizeFont":"virtual-keyboard-module_autoResizeFont__tpPAr","disabledKey":"virtual-keyboard-module_disabledKey__df6i5","dark":"virtual-keyboard-module_dark__LfdOy","diacriticsKey":"virtual-keyboard-module_diacriticsKey__klvTD","diacriticHalf":"virtual-keyboard-module_diacriticHalf__Wf-5i","disabledDiacritic":"virtual-keyboard-module_disabledDiacritic__VuKGB","smallKey":"virtual-keyboard-module_smallKey__GkCc2","active":"virtual-keyboard-module_active__wbs1J","diacriticsContainer":"virtual-keyboard-module_diacriticsContainer__dfWC-","diacriticKey":"virtual-keyboard-module_diacriticKey__YNy-6"};

var dakutenMap = {
    う: "ゔ",
    か: "が",
    き: "ぎ",
    く: "ぐ",
    け: "げ",
    こ: "ご",
    さ: "ざ",
    し: "じ",
    す: "ず",
    せ: "ぜ",
    そ: "ぞ",
    た: "だ",
    ち: "ぢ",
    つ: "づ",
    て: "で",
    と: "ど",
    は: "ば",
    ひ: "び",
    ふ: "ぶ",
    へ: "べ",
    ほ: "ぼ",
    ウ: "ヴ",
    カ: "ガ",
    キ: "ギ",
    ク: "グ",
    ケ: "ゲ",
    コ: "ゴ",
    サ: "ザ",
    シ: "ジ",
    ス: "ズ",
    セ: "ゼ",
    ソ: "ゾ",
    タ: "ダ",
    チ: "ヂ",
    ツ: "ヅ",
    テ: "デ",
    ト: "ド",
    ハ: "バ",
    ヒ: "ビ",
    フ: "ブ",
    ヘ: "ベ",
    ホ: "ボ",
};
var handakutenMap = {
    は: "ぱ",
    ひ: "ぴ",
    ふ: "ぷ",
    へ: "ぺ",
    ほ: "ぽ",
    ハ: "パ",
    ヒ: "ピ",
    フ: "プ",
    ヘ: "ペ",
    ホ: "ポ",
};
var komojiMap = {
    あ: "ぁ",
    い: "ぃ",
    う: "ぅ",
    え: "ぇ",
    お: "ぉ",
    か: "ゕ",
    け: "ゖ",
    つ: "っ",
    や: "ゃ",
    ゆ: "ゅ",
    よ: "ょ",
    わ: "ゎ",
    ア: "ァ",
    イ: "ィ",
    ウ: "ゥ",
    エ: "ェ",
    オ: "ォ",
    カ: "ヵ",
    ケ: "ヶ",
    ツ: "ッ",
    ヤ: "ャ",
    ユ: "ュ",
    ヨ: "ョ",
    ワ: "ヮ",
};
var hiraganaLayout = [
    ["あ", "い", "う", "え", "お"],
    ["か", "き", "く", "け", "こ"],
    ["さ", "し", "す", "せ", "そ"],
    ["た", "ち", "つ", "て", "と"],
    ["な", "に", "ぬ", "ね", "の"],
    ["は", "ひ", "ふ", "へ", "ほ"],
    ["ま", "み", "む", "め", "も"],
    ["や", "ゆ", "よ", null, "ー"],
    ["ら", "り", "る", "れ", "ろ"],
    ["わ", "を", "ん", "ABC", "カナ"],
    ["delete", "゛゜", "小", "確定"],
];
var katakanaLayout = [
    ["ア", "イ", "ウ", "エ", "オ"],
    ["カ", "キ", "ク", "ケ", "コ"],
    ["サ", "シ", "ス", "セ", "ソ"],
    ["タ", "チ", "ツ", "テ", "ト"],
    ["ナ", "ニ", "ヌ", "ネ", "ノ"],
    ["ハ", "ヒ", "フ", "ヘ", "ホ"],
    ["マ", "ミ", "ム", "メ", "モ"],
    ["ヤ", "ユ", "ヨ", null, "ー"],
    ["ラ", "リ", "ル", "レ", "ロ"],
    ["ワ", "ヲ", "ン", "ABC", "かな"],
    ["delete", "゛゜", "小", "確定"],
];
var alphabetLayout = [
    ["A", "K", "U", null, null],
    ["B", "L", "V", null, null],
    ["C", "M", "W", null, null],
    ["D", "N", "X", null, null],
    ["E", "O", "Y", null, null],
    ["F", "P", "Z", null, null],
    ["G", "Q", null, null, null],
    ["H", "R", null, null, null],
    ["I", "S", null, null, null],
    ["J", "T", null, "かな", "カナ"],
    ["delete", "Aa", null, "確定"],
];
var smallalphabetLayout = [
    ["a", "k", "u", null, null],
    ["b", "l", "v", null, null],
    ["c", "m", "w", null, null],
    ["d", "n", "x", null, null],
    ["e", "o", "y", null, null],
    ["f", "p", "z", null, null],
    ["g", "q", null, null, null],
    ["h", "r", null, null, null],
    ["i", "s", null, null, null],
    ["j", "t", null, "かな", "カナ"],
    ["delete", "Aa", null, "確定"],
];
var tenkeyLayout = [
    ["7", "4", "1", "0"],
    ["8", "5", "2", "."],
    ["9", "6", "3", "delete"],
];

var fetchCandidates = function (text) { return __awaiter(void 0, void 0, void 0, function () {
    var callbackName;
    return __generator(this, function (_a) {
        callbackName = "jsonp_callback_".concat(Date.now());
        return [2 /*return*/, new Promise(function (resolve, reject) {
                var timeout = setTimeout(function () {
                    reject(new Error("API request timed out"));
                }, 5000);
                window[callbackName] = function (data) {
                    clearTimeout(timeout);
                    if (data && Array.isArray(data)) {
                        var candidates = generateCombinedCandidates(data);
                        resolve(candidates);
                    }
                    else {
                        console.error("Invalid data structure received from API");
                        resolve([]);
                    }
                    delete window[callbackName];
                    document.body.removeChild(document.getElementById(callbackName));
                };
                var encodedText = encodeURIComponent(text);
                var script = document.createElement("script");
                script.id = callbackName;
                script.src = "https://www.google.com/transliterate?langpair=ja-Hira|ja&text=".concat(encodedText, "&jsonp=").concat(callbackName);
                script.onerror = function () {
                    clearTimeout(timeout);
                    reject(new Error("Failed to load the script"));
                };
                document.body.appendChild(script);
            })];
    });
}); };
var generateCombinedCandidates = function (data) {
    var maxCandidates = Math.max.apply(Math, data.map(function (item) { return item[1].length; }));
    var combinedCandidates = [];
    for (var i = 0; i < maxCandidates; i++) {
        var candidate = "";
        for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
            var _a = data_1[_i]; _a[0]; var candidates = _a[1];
            candidate += candidates[i] || candidates[0] || "";
        }
        combinedCandidates.push(candidate);
    }
    return combinedCandidates;
};

/**
 * useKeyboardNavigation: キーボードナビゲーションを管理するカスタムフック
 *
 * このフックは、キーボードを使用した仮想キーボード上の移動と選択を可能にします。
 */
var useKeyboardNavigation = function (layout, onKeyPress) {
    var _a = React.useState(null), focusedKey = _a[0], setFocusedKey = _a[1];
    var handleKeyDown = React.useCallback(function (event) {
        if (!focusedKey) {
            if (layout.length > 0 && layout[0].length > 0) {
                setFocusedKey("0-0");
            }
            return;
        }
        var _a = focusedKey.split("-").map(Number), row = _a[0], col = _a[1];
        switch (event.key) {
            case "ArrowUp":
                if (row > 0)
                    setFocusedKey("".concat(row - 1, "-").concat(col));
                break;
            case "ArrowDown":
                if (row < layout.length - 1)
                    setFocusedKey("".concat(row + 1, "-").concat(col));
                break;
            case "ArrowLeft":
                if (col > 0)
                    setFocusedKey("".concat(row, "-").concat(col - 1));
                break;
            case "ArrowRight":
                if (col < layout[row].length - 1)
                    setFocusedKey("".concat(row, "-").concat(col + 1));
                break;
            case "Enter":
            case " ":
                var key = layout[row][col];
                if (typeof key === "string")
                    onKeyPress(key);
                break;
        }
        event.preventDefault();
    }, [focusedKey, layout, onKeyPress]);
    return { focusedKey: focusedKey, handleKeyDown: handleKeyDown };
};

var useDiacriticState = function (inputText) {
    var _a = React.useState(false), canApplyDakuten = _a[0], setCanApplyDakuten = _a[1];
    var _b = React.useState(false), canApplyHandakuten = _b[0], setCanApplyHandakuten = _b[1];
    var _c = React.useState(false), canApplyKomoji = _c[0], setCanApplyKomoji = _c[1];
    var updateDiacriticState = React.useCallback(function (text) {
        if (text.length > 0) {
            var lastChar = text.slice(-1);
            setCanApplyDakuten(lastChar in dakutenMap);
            setCanApplyHandakuten(lastChar in handakutenMap);
            setCanApplyKomoji(lastChar in komojiMap);
        }
        else {
            setCanApplyDakuten(false);
            setCanApplyHandakuten(false);
            setCanApplyKomoji(false);
        }
    }, []);
    React.useEffect(function () {
        updateDiacriticState(inputText);
    }, [inputText, updateDiacriticState]);
    return {
        canApplyDakuten: canApplyDakuten,
        canApplyHandakuten: canApplyHandakuten,
        canApplyKomoji: canApplyKomoji,
        updateDiacriticState: updateDiacriticState,
    };
};

var HiraganaKeyboard = function (_a) {
    var inputText = _a.inputText, setInputText = _a.setInputText, onKeyPress = _a.onKeyPress, enableConversion = _a.enableConversion; _a.confirmedText; var onCandidateSelect = _a.onCandidateSelect, disabled = _a.disabled, renderKey = _a.renderKey, theme = _a.theme, kanaMode = _a.kanaMode, setKanaMode = _a.setKanaMode, alphabetCase = _a.alphabetCase, setAlphabetCase = _a.setAlphabetCase;
    var _b = React.useState(null); _b[0]; var setActiveKey = _b[1];
    var _c = React.useState([]), candidates = _c[0], setCandidates = _c[1];
    var _d = React.useState(false), showCandidates = _d[0], setShowCandidates = _d[1];
    var _e = useDiacriticState(inputText), canApplyDakuten = _e.canApplyDakuten, canApplyHandakuten = _e.canApplyHandakuten, canApplyKomoji = _e.canApplyKomoji, updateDiacriticState = _e.updateDiacriticState;
    var _f = useKeyboardNavigation(kanaMode === "hiragana" ? hiraganaLayout : kanaMode === "katakana" ? katakanaLayout : alphabetLayout, onKeyPress), focusedKey = _f.focusedKey, handleKeyDown = _f.handleKeyDown;
    var combineCharacters = React.useCallback(function (text) {
        return text.split("").reduce(function (acc, char, index, array) {
            if (index > 0) {
                var prevChar = acc.slice(-1);
                if (char === "゛" && prevChar in dakutenMap) {
                    return acc.slice(0, -1) + dakutenMap[prevChar];
                }
                else if (char === "゜" && prevChar in handakutenMap) {
                    return acc.slice(0, -1) + handakutenMap[prevChar];
                }
                else if (char === "小" && prevChar in komojiMap) {
                    return acc.slice(0, -1) + komojiMap[prevChar];
                }
            }
            return acc + char;
        }, "");
    }, []);
    var handleKeyPress = React.useCallback(function (key) {
        if (disabled)
            return;
        setActiveKey(typeof key === "string" ? key : "delete");
        var newInputText = inputText;
        if (typeof key === "string") {
            if (key === "カナ" || key === "かな" || key === "ABC") {
                setKanaMode(key === "カナ" ? "katakana" : key === "かな" ? "hiragana" : "alphabet");
                return;
            }
            else if (key === "Aa") {
                setAlphabetCase(function (prev) { return (prev === "upper" ? "lower" : "upper"); });
                return;
            }
            else if (kanaMode === "alphabet") {
                if (key !== "delete" && key !== "確定") {
                    var newKey = alphabetCase === "upper" ? key.toUpperCase() : key.toLowerCase();
                    onCandidateSelect(newKey);
                }
            }
            else if (key === "delete") {
                newInputText = newInputText.slice(0, -1);
            }
            else if (key === "確定") {
                onKeyPress("確定");
                var confirmedText_1 = combineCharacters(inputText);
                onCandidateSelect(confirmedText_1);
                setInputText("");
                setCandidates([]);
                setShowCandidates(false);
                return;
            }
            else {
                newInputText += key;
            }
        }
        var combinedText = combineCharacters(newInputText);
        setInputText(combinedText);
        onKeyPress(typeof key === "string" ? key : "delete");
        updateDiacriticState(combinedText);
        setTimeout(function () { return setActiveKey(null); }, 100);
    }, [
        inputText,
        setInputText,
        onKeyPress,
        onCandidateSelect,
        disabled,
        setKanaMode,
        kanaMode,
        alphabetCase,
        setAlphabetCase,
        updateDiacriticState,
        combineCharacters,
    ]);
    var handleCandidateSelect = React.useCallback(function (candidate) {
        if (disabled)
            return;
        console.log("選択された候補:", candidate);
        // 変換候補をそのまま使用し、combineCharacters関数を適用しない
        onCandidateSelect(candidate);
        setInputText("");
        setCandidates([]);
        setShowCandidates(false);
    }, [onCandidateSelect, setInputText, disabled]);
    React.useEffect(function () {
        if (inputText.length > 0 && enableConversion && !disabled && kanaMode !== "alphabet") {
            var combinedText_1 = combineCharacters(inputText);
            fetchCandidates(combinedText_1).then(function (data) {
                if (data && data.length > 0) {
                    setCandidates(data);
                    setShowCandidates(true);
                }
                else {
                    setCandidates([combinedText_1]);
                    setShowCandidates(true);
                }
            });
        }
        else {
            setShowCandidates(false);
        }
    }, [inputText, enableConversion, combineCharacters, disabled, kanaMode]);
    var keyboardContent = React.useMemo(function () {
        var currentLayout;
        if (kanaMode === "hiragana") {
            currentLayout = hiraganaLayout;
        }
        else if (kanaMode === "katakana") {
            currentLayout = katakanaLayout;
        }
        else {
            currentLayout = alphabetCase === "upper" ? alphabetLayout : smallalphabetLayout;
        }
        return (jsxRuntime.exports.jsx("div", __assign({ className: "".concat(styles.keyboard, " ").concat(styles.hirakey, " ").concat(theme === "dark" ? styles.dark : ""), onKeyDown: handleKeyDown, tabIndex: 0, role: "grid", "aria-label": "\u4EEE\u60F3\u30AD\u30FC\u30DC\u30FC\u30C9" }, { children: currentLayout.map(function (column, columnIndex) { return (jsxRuntime.exports.jsx("div", __assign({ className: styles.column, role: "row" }, { children: column.map(function (key, keyIndex) {
                    if (key === "゛゜") {
                        return (jsxRuntime.exports.jsxs("div", __assign({ className: "".concat(styles.divkey, " ").concat(styles.diacriticsContainer), role: "gridcell" }, { children: [jsxRuntime.exports.jsx("button", __assign({ className: "".concat(styles.diacriticKey, " ").concat(!canApplyDakuten ? styles.disabledDiacritic : ""), onClick: function () { return !disabled && canApplyDakuten && handleKeyPress("゛"); }, disabled: disabled || !canApplyDakuten, "aria-label": "\u6FC1\u70B9" }, { children: "\u309B" })), jsxRuntime.exports.jsx("button", __assign({ className: "".concat(styles.diacriticKey, " ").concat(!canApplyHandakuten ? styles.disabledDiacritic : ""), onClick: function () { return !disabled && canApplyHandakuten && handleKeyPress("゜"); }, disabled: disabled || !canApplyHandakuten, "aria-label": "\u534A\u6FC1\u70B9" }, { children: "\u309C" }))] }), "".concat(columnIndex, "-").concat(keyIndex, "-diacritics")));
                    }
                    else if (key === "小") {
                        return (jsxRuntime.exports.jsx("button", __assign({ className: "".concat(styles.key, " ").concat(styles.diacriticsKey, " ").concat(!canApplyKomoji ? styles.disabledDiacritic : ""), onClick: function () { return !disabled && canApplyKomoji && handleKeyPress("小"); }, disabled: disabled || !canApplyKomoji, role: "gridcell", "aria-label": "\u5C0F\u6587\u5B57" }, { children: "\u5C0F" }), "".concat(columnIndex, "-").concat(keyIndex, "-small")));
                    }
                    var isNull = key === null;
                    var isKanaToggleButton = key === "カナ" || key === "かな" || key === "ABC";
                    var isAlphabetCaseToggle = key === "Aa";
                    var isDisabled = disabled ||
                        isNull ||
                        (key === "゛" && !canApplyDakuten) ||
                        (key === "゜" && !canApplyHandakuten) ||
                        (key === "小" && !canApplyKomoji);
                    return (jsxRuntime.exports.jsx("button", __assign({ className: "".concat(styles.key, " ").concat(styles.autoResizeFont, " ").concat(key === "delete"
                            ? styles.deleteKey
                            : key === "確定"
                                ? styles.confirmKey
                                : isKanaToggleButton || isAlphabetCaseToggle
                                    ? styles.functionKey
                                    : "", " ").concat(isNull ? styles.nullKey : "", " ").concat(isDisabled ? styles.disabledKey : "", " ").concat(focusedKey === "".concat(columnIndex, "-").concat(keyIndex) ? styles.focused : ""), onClick: function () { return !isDisabled && key !== null && handleKeyPress(key); }, disabled: isDisabled, role: "gridcell", "aria-label": typeof key === "string" ? key : "", tabIndex: focusedKey === "".concat(columnIndex, "-").concat(keyIndex) ? 0 : -1 }, { children: isNull ? "" : isAlphabetCaseToggle ? (alphabetCase === "upper" ? "Aa" : "aA") : renderKey(key) }), "".concat(columnIndex, "-").concat(keyIndex, "-").concat(key || "empty")));
                }) }), "column-".concat(columnIndex))); }) })));
    }, [
        disabled,
        renderKey,
        theme,
        kanaMode,
        canApplyDakuten,
        canApplyHandakuten,
        canApplyKomoji,
        handleKeyPress,
        alphabetCase,
        focusedKey,
        handleKeyDown,
    ]);
    return (jsxRuntime.exports.jsxs(jsxRuntime.exports.Fragment, { children: [jsxRuntime.exports.jsxs("div", __assign({ className: "".concat(styles.inputArea, " ").concat(theme === "dark" ? styles.dark : "") }, { children: [jsxRuntime.exports.jsx("div", __assign({ className: styles.displayArea }, { children: jsxRuntime.exports.jsx("div", __assign({ className: styles.inputText, "aria-live": "polite" }, { children: combineCharacters(inputText) })) })), enableConversion && (jsxRuntime.exports.jsx("div", __assign({ className: "".concat(styles.candidateArea, " ").concat(enableConversion ? styles.enabled : styles.disabled), role: "listbox", "aria-label": "\u5909\u63DB\u5019\u88DC" }, { children: showCandidates && candidates.length > 0 ? (jsxRuntime.exports.jsx("div", __assign({ className: styles.candidateList }, { children: candidates.map(function (candidate, index) { return (jsxRuntime.exports.jsx("button", __assign({ className: styles.candidateItem, onClick: function () { return handleCandidateSelect(candidate); }, disabled: disabled, role: "option" }, { children: candidate }), index)); }) }))) : (jsxRuntime.exports.jsx("div", __assign({ className: styles.placeholderText }, { children: "\u5909\u63DB\u5019\u88DC\u304C\u3053\u3053\u306B\u8868\u793A\u3055\u308C\u307E\u3059" }))) })))] })), keyboardContent] }));
};
var HiraganaKeyboard$1 = React__default["default"].memo(HiraganaKeyboard);

/**
 * TenkeyKeyboard: テンキー入力用のキーボードコンポーネント
 *
 * このコンポーネントは、数字や記号の入力に特化したテンキーレイアウトを提供します。
 */
var TenkeyKeyboard = function (_a) {
    var onKeyPress = _a.onKeyPress, disabled = _a.disabled, _b = _a.renderKey, renderKey = _b === void 0 ? function (key) { return jsxRuntime.exports.jsx(jsxRuntime.exports.Fragment, { children: key }); } : _b, theme = _a.theme; _a.inputMode; _a.placeholder; var className = _a.className; _a.candidates;
    var _c = React.useState(null), activeKey = _c[0], setActiveKey = _c[1];
    // キー押下時の処理
    var handleKeyPress = React.useCallback(function (key) {
        if (disabled)
            return;
        var keyValue = typeof key === "string" ? key : "delete";
        setActiveKey(keyValue);
        onKeyPress(keyValue);
        setTimeout(function () { return setActiveKey(null); }, 100);
    }, [onKeyPress, disabled]);
    return (jsxRuntime.exports.jsx("div", __assign({ className: "".concat(styles.tenkeyWrapper, " ").concat(theme === "dark" ? styles.dark : "", " ").concat(className || "") }, { children: jsxRuntime.exports.jsx("div", __assign({ className: "".concat(styles.keyboard, " ").concat(styles.tenkeyGrid, " ").concat(theme === "dark" ? styles.dark : "") }, { children: tenkeyLayout.map(function (column, columnIndex) { return (jsxRuntime.exports.jsx("div", __assign({ className: styles.tenkeyColumn }, { children: column.map(function (key) {
                    var isDeleteKey = key === "delete";
                    return (jsxRuntime.exports.jsx("button", __assign({ className: "".concat(styles.tenkeyKey, " ").concat(styles.autoResizeFont, " ").concat(activeKey === (typeof key === "string" ? key : "delete") ? styles.active : "", " ").concat(isDeleteKey ? "".concat(styles.deleteKey, " ").concat(styles.functionKey) : ""), onClick: function () { return handleKeyPress(key); }, disabled: disabled, type: "button", "aria-label": typeof key === "string" ? key : "削除" }, { children: renderKey(key) }), typeof key === "string" ? key : "delete"));
                }) }), columnIndex)); }) })) })));
};
var TenkeyKeyboard$1 = React__default["default"].memo(TenkeyKeyboard);

var DeleteIcon = function (props) { return (jsxRuntime.exports.jsxs("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: "lucide lucide-delete" }, props, { children: [jsxRuntime.exports.jsx("path", { d: "M10 5a2 2 0 0 0-1.344.519l-6.328 5.74a1 1 0 0 0 0 1.481l6.328 5.741A2 2 0 0 0 10 19h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2z" }), jsxRuntime.exports.jsx("path", { d: "m12 9 6 6" }), jsxRuntime.exports.jsx("path", { d: "m18 9-6 6" })] }))); };

var DEBOUNCE_DELAY = 150; // ミリ秒に短縮
var CACHE_EXPIRATION = 5 * 60 * 1000; // 5分
var useKeyboardLogic = function (value, onChange, keyboardType, kanaMode, maxLength, disabled) {
    var _a = React.useState(""), inputText = _a[0], setInputText = _a[1];
    var _b = React.useState([]), candidates = _b[0], setCandidates = _b[1];
    var debounceTimerRef = React.useRef(null);
    var candidateCacheRef = React.useRef(new Map());
    var debouncedFetchCandidates = React.useCallback(function (text) {
        if (debounceTimerRef.current) {
            clearTimeout(debounceTimerRef.current);
        }
        debounceTimerRef.current = setTimeout(function () { return __awaiter(void 0, void 0, void 0, function () {
            var cachedItem, fetchedCandidates, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 4, , 5]);
                        cachedItem = candidateCacheRef.current.get(text);
                        if (!(cachedItem && Date.now() - cachedItem.timestamp < CACHE_EXPIRATION)) return [3 /*break*/, 1];
                        setCandidates(cachedItem.candidates);
                        return [3 /*break*/, 3];
                    case 1: return [4 /*yield*/, Promise.race([
                            fetchCandidates(text),
                            new Promise(function (_, reject) { return setTimeout(function () { return reject(new Error("Fetch timeout")); }, 3000); }),
                        ])];
                    case 2:
                        fetchedCandidates = (_a.sent());
                        setCandidates(fetchedCandidates);
                        candidateCacheRef.current.set(text, { candidates: fetchedCandidates, timestamp: Date.now() });
                        _a.label = 3;
                    case 3: return [3 /*break*/, 5];
                    case 4:
                        error_1 = _a.sent();
                        console.error("Failed to fetch candidates:", error_1);
                        setCandidates([]);
                        return [3 /*break*/, 5];
                    case 5: return [2 /*return*/];
                }
            });
        }); }, DEBOUNCE_DELAY);
    }, []);
    React.useEffect(function () {
        if (inputText && kanaMode !== "alphabet") {
            debouncedFetchCandidates(inputText);
        }
        else {
            setCandidates([]);
        }
        return function () {
            if (debounceTimerRef.current) {
                clearTimeout(debounceTimerRef.current);
            }
        };
    }, [inputText, kanaMode, debouncedFetchCandidates]);
    var handleKeyPress = React.useCallback(function (key) {
        if (disabled)
            return;
        var newValue = value;
        var newInputText = inputText;
        if (keyboardType === "hirakey" && kanaMode === "alphabet") {
            if (key !== "delete" && key !== "確定") {
                newValue += key;
                onChange(maxLength ? newValue.slice(0, maxLength) : newValue);
                return;
            }
        }
        if (keyboardType === "hirakey") {
            switch (key) {
                case "delete":
                    if (inputText.length > 0) {
                        newInputText = inputText.slice(0, -1);
                    }
                    else if (value.length > 0) {
                        newValue = value.slice(0, -1);
                    }
                    break;
                case "確定":
                    if (inputText) {
                        newValue += inputText;
                        newInputText = "";
                    }
                    break;
                default:
                    if (key.length === 1) {
                        newInputText += key;
                    }
                    else {
                        newValue += key;
                        newInputText = "";
                    }
            }
        }
        else {
            if (key === "delete") {
                newValue = value.slice(0, -1);
            }
            else if (key !== "確定") {
                newValue += key;
            }
        }
        setInputText(newInputText);
        onChange(maxLength ? newValue.slice(0, maxLength) : newValue);
        // 予測変換の基盤: 入力パターンの記録
        if (key.length === 1 && kanaMode !== "alphabet") {
            var pattern = inputText + key;
            if (pattern.length > 1) {
                var existingPatterns = localStorage.getItem("inputPatterns");
                var patterns = existingPatterns ? JSON.parse(existingPatterns) : {};
                patterns[pattern] = (patterns[pattern] || 0) + 1;
                localStorage.setItem("inputPatterns", JSON.stringify(patterns));
            }
        }
    }, [onChange, inputText, value, keyboardType, disabled, maxLength, kanaMode]);
    var handleCandidateSelect = React.useCallback(function (candidate) {
        if (disabled)
            return;
        var newValue = value + candidate;
        onChange(maxLength ? newValue.slice(0, maxLength) : newValue);
        setInputText("");
        setCandidates([]);
    }, [value, onChange, disabled, maxLength]);
    return {
        inputText: inputText,
        setInputText: setInputText,
        handleKeyPress: handleKeyPress,
        handleCandidateSelect: handleCandidateSelect,
        candidates: candidates,
    };
};

var useKeyboardState = function (autoFocus, disabled, onFocus, onBlur, onKeyDown) {
    var _a = React.useState(autoFocus), isFocused = _a[0], setIsFocused = _a[1];
    var _b = React.useState("hiragana"), kanaMode = _b[0], setKanaMode = _b[1];
    var _c = React.useState("upper"), alphabetCase = _c[0], setAlphabetCase = _c[1];
    var handleFocus = React.useCallback(function () {
        if (!disabled) {
            setIsFocused(true);
            onFocus === null || onFocus === void 0 ? void 0 : onFocus();
        }
    }, [disabled, onFocus]);
    var handleBlur = React.useCallback(function () {
        setIsFocused(false);
        onBlur === null || onBlur === void 0 ? void 0 : onBlur();
    }, [onBlur]);
    var handleKeyDown = React.useCallback(function (e) {
        onKeyDown === null || onKeyDown === void 0 ? void 0 : onKeyDown(e);
    }, [onKeyDown]);
    return {
        isFocused: isFocused,
        kanaMode: kanaMode,
        setKanaMode: setKanaMode,
        alphabetCase: alphabetCase,
        setAlphabetCase: setAlphabetCase,
        handleFocus: handleFocus,
        handleBlur: handleBlur,
        handleKeyDown: handleKeyDown,
    };
};

/**
 * VKeyboard: 仮想キーボードのメインコンポーネント
 *
 * このコンポーネントは、日本語入力用の仮想キーボードを提供します。
 * ひらがな、カタカナ、アルファベット、テンキーの入力モードをサポートしています。
 */
var VKeyboard = function (_a) {
    var value = _a.value, onChange = _a.onChange, _b = _a.keyboardType, keyboardType = _b === void 0 ? "hirakey" : _b, _c = _a.enableConversion, enableConversion = _c === void 0 ? true : _c, _d = _a.className, className = _d === void 0 ? "" : _d, _e = _a.placeholder, placeholder = _e === void 0 ? "" : _e, maxLength = _a.maxLength, _f = _a.disabled, disabled = _f === void 0 ? false : _f, _g = _a.autoFocus, autoFocus = _g === void 0 ? false : _g, onFocus = _a.onFocus, onBlur = _a.onBlur, _h = _a.inputMode, inputMode = _h === void 0 ? "text" : _h, onKeyDown = _a.onKeyDown, propTheme = _a.theme;
    var systemTheme = nextThemes.useTheme().theme;
    var theme = propTheme || systemTheme;
    var _j = useKeyboardState(autoFocus, disabled, onFocus, onBlur, onKeyDown), kanaMode = _j.kanaMode, setKanaMode = _j.setKanaMode, alphabetCase = _j.alphabetCase, setAlphabetCase = _j.setAlphabetCase, handleFocus = _j.handleFocus, handleBlur = _j.handleBlur, internalHandleKeyDown = _j.handleKeyDown;
    var _k = useKeyboardLogic(value, onChange, keyboardType, kanaMode, maxLength, disabled), inputText = _k.inputText, setInputText = _k.setInputText, handleKeyPress = _k.handleKeyPress, handleCandidateSelect = _k.handleCandidateSelect, candidates = _k.candidates;
    // キーのレンダリング
    var renderKey = function (key) {
        if (key === "delete") {
            return jsxRuntime.exports.jsx(DeleteIcon, {});
        }
        return jsxRuntime.exports.jsx(jsxRuntime.exports.Fragment, { children: key });
    };
    // キーボードのプロパティ
    var keyboardProps = React.useMemo(function () { return ({
        inputText: inputText,
        setInputText: setInputText,
        onKeyPress: handleKeyPress,
        enableConversion: enableConversion,
        confirmedText: value,
        onCandidateSelect: handleCandidateSelect,
        disabled: disabled,
        renderKey: renderKey,
        theme: theme,
        inputMode: inputMode,
        kanaMode: kanaMode,
        setKanaMode: setKanaMode,
        alphabetCase: alphabetCase,
        setAlphabetCase: setAlphabetCase,
        placeholder: placeholder,
        candidates: candidates,
    }); }, [
        inputText,
        setInputText,
        handleKeyPress,
        enableConversion,
        value,
        handleCandidateSelect,
        disabled,
        renderKey,
        theme,
        inputMode,
        kanaMode,
        setKanaMode,
        alphabetCase,
        setAlphabetCase,
        placeholder,
        candidates,
    ]);
    return (jsxRuntime.exports.jsx("div", __assign({ className: "".concat(styles.container, " ").concat(className, " ").concat(disabled ? styles.disabled : "", " ").concat(theme === "dark" ? styles.dark : ""), tabIndex: disabled ? -1 : 0, onFocus: handleFocus, onBlur: handleBlur, onKeyDown: internalHandleKeyDown, role: "application", "aria-label": "\u4EEE\u60F3\u30AD\u30FC\u30DC\u30FC\u30C9" }, { children: jsxRuntime.exports.jsx("div", __assign({ className: styles.keyboardWrapper }, { children: keyboardType === "hirakey" ? (jsxRuntime.exports.jsx(HiraganaKeyboard$1, __assign({}, keyboardProps))) : (jsxRuntime.exports.jsx(TenkeyKeyboard$1, { onKeyPress: handleKeyPress, disabled: disabled, renderKey: renderKey, theme: theme, inputMode: inputMode, placeholder: placeholder, candidates: candidates })) })) })));
};
var VirtualKeyboard = React__default["default"].memo(VKeyboard);

exports.VKeyboard = VirtualKeyboard;
//# sourceMappingURL=index.js.map
