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

function __spreadArray(to, from, pack) {
  if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
      if (ar || !(i in from)) {
          if (!ar) ar = Array.prototype.slice.call(from, 0, i);
          ar[i] = from[i];
      }
  }
  return to.concat(ar || Array.prototype.slice.call(from));
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

var customConversionList = [
	{
		original: "ヤマト運輸",
		hiragana: "やまとうんゆ"
	},
	{
		original: "日本通運",
		hiragana: "にほんつううん"
	},
	{
		original: "西濃運輸",
		hiragana: "せいのううんゆ"
	},
	{
		original: "福山通運",
		hiragana: "ふくやまつううん"
	},
	{
		original: "日本梱包運輸倉庫",
		hiragana: "にっぽんこんぽううんゆそうこ"
	},
	{
		original: "第一貨物",
		hiragana: "だいいちかもつ"
	},
	{
		original: "アサヒロジスティクス",
		hiragana: "あさひろじすてぃくす"
	},
	{
		original: "ムロオ",
		hiragana: "むろお"
	},
	{
		original: "佐川グローバルロジスティクス",
		hiragana: "さがわぐろーばるろじすてぃくす"
	},
	{
		original: "シモハナ物流",
		hiragana: "しもはなぶつりゅう"
	},
	{
		original: "ＳＢＳロジコム",
		hiragana: "ＳＢＳろじこむ"
	},
	{
		original: "名鉄ＮＸ運輸",
		hiragana: "めいてつＮＸうんゆ"
	},
	{
		original: "ＪＰロジスティクス",
		hiragana: "ＪＰろじすてぃくす"
	},
	{
		original: "シーエックスカーゴ",
		hiragana: "しーえっくすかーご"
	},
	{
		original: "新潟運輸",
		hiragana: "にいがたうんゆ"
	},
	{
		original: "ヒューテックノオリン",
		hiragana: "ひゅーてっくのおりん"
	},
	{
		original: "カリツー",
		hiragana: "かりつー"
	},
	{
		original: "ランテック",
		hiragana: "らんてっく"
	},
	{
		original: "近物レックス",
		hiragana: "きんものれっくす"
	},
	{
		original: "フジトランスポート",
		hiragana: "ふじとらんすぽーと"
	},
	{
		original: "ロジスティード首都圏",
		hiragana: "ろじすてぃーどしゅとけん"
	},
	{
		original: "ロジスティード西日本",
		hiragana: "ろじすてぃーどにしにほん"
	},
	{
		original: "サンファミリー",
		hiragana: "さんふぁみりー"
	},
	{
		original: "名糖運輸",
		hiragana: "めいとううんゆ"
	},
	{
		original: "亀田製菓",
		hiragana: "かめだせいか"
	},
	{
		original: "ロジスティード中部",
		hiragana: "ろじすてぃーどちゅうぶ"
	},
	{
		original: "ＳＢＳゼンツウ",
		hiragana: "ＳＢＳぜんつう"
	},
	{
		original: "ロジスティード関東",
		hiragana: "ろじすてぃーどかんとう"
	},
	{
		original: "楠原輸送",
		hiragana: "くすはらゆそう"
	},
	{
		original: "大和物流",
		hiragana: "やまとぶつりゅう"
	},
	{
		original: "日本ロジテム",
		hiragana: "にっぽんろじてむ"
	},
	{
		original: "郵船ロジスティクス",
		hiragana: "ゆうせんろじすてぃくす"
	},
	{
		original: "アルプス物流",
		hiragana: "あるぷすぶつりゅう"
	},
	{
		original: "関東西濃運輸",
		hiragana: "かんとうせいのううんゆ"
	},
	{
		original: "大興運輸",
		hiragana: "たいこううんゆ"
	},
	{
		original: "九州福山通運",
		hiragana: "きゅうしゅうふくやまつううん"
	},
	{
		original: "関西丸和ロジスティクス",
		hiragana: "かんさいまるわろじすてぃくす"
	},
	{
		original: "日本郵船",
		hiragana: "にっぽんゆうせん"
	},
	{
		original: "両備ホールディングス",
		hiragana: "りょうびほーるでぃんぐす"
	},
	{
		original: "レンゴーロジスティクス",
		hiragana: "れんごーろじすてぃくす"
	},
	{
		original: "トラストシップ",
		hiragana: "とらすとしっぷ"
	},
	{
		original: "ＳＢＳ三愛ロジスティクス",
		hiragana: "ＳＢＳさんあいろじすてぃくす"
	},
	{
		original: "ディー・エイチ・エル・ジャパン",
		hiragana: "でぃー・えいち・える・じゃぱん"
	},
	{
		original: "マルアイユニティー",
		hiragana: "まるあいゆにてぃー"
	},
	{
		original: "双葉運輸",
		hiragana: "ふたばうんゆ"
	},
	{
		original: "三菱倉庫",
		hiragana: "みつびしそうこ"
	},
	{
		original: "遠州トラック",
		hiragana: "えんしゅうとらっく"
	},
	{
		original: "愛知陸運",
		hiragana: "あいちりくうん"
	},
	{
		original: "物産ロジスティクスソリューションズ",
		hiragana: "ぶっさんろじすてぃくすそりゅーしょんず"
	},
	{
		original: "高末",
		hiragana: "たかまつ"
	},
	{
		original: "菱化ロジテック",
		hiragana: "ひしかろじてっく"
	},
	{
		original: "中谷興運",
		hiragana: "なかたにきょううん"
	},
	{
		original: "ライフサポート・エガワ",
		hiragana: "らいふさぽーと・えがわ"
	},
	{
		original: "泉海商運",
		hiragana: "いずみかいしょううん"
	},
	{
		original: "東北センコー運輸",
		hiragana: "とうほくせんこーうんゆ"
	},
	{
		original: "関東福山通運",
		hiragana: "かんとうふくやまつううん"
	},
	{
		original: "アクロストランスポート",
		hiragana: "あくろすとらんすぽーと"
	},
	{
		original: "井ノ瀬運送",
		hiragana: "いのせうんそう"
	},
	{
		original: "イトー急行",
		hiragana: "いとーきゅうこう"
	},
	{
		original: "日鉄物流鹿島",
		hiragana: "にってつぶつりゅうかしま"
	},
	{
		original: "ダイオーロジスティクス",
		hiragana: "だいおーろじすてぃくす"
	},
	{
		original: "ロジスティード北日本",
		hiragana: "ろじすてぃーどきたにほん"
	},
	{
		original: "関西トランスウェイ",
		hiragana: "かんさいとらんすうぇい"
	},
	{
		original: "倉敷運輸",
		hiragana: "くらしきうんゆ"
	},
	{
		original: "ケイヒン配送",
		hiragana: "けいひんはいそう"
	},
	{
		original: "サクセス",
		hiragana: "さくせす"
	},
	{
		original: "全農物流",
		hiragana: "ぜんのうぶつりゅう"
	},
	{
		original: "ベストランス",
		hiragana: "べすとらんす"
	},
	{
		original: "日商",
		hiragana: "にっしょう"
	},
	{
		original: "南東北福山通運",
		hiragana: "みなみとうほくふくやまつううん"
	},
	{
		original: "ロジスティード九州",
		hiragana: "ろじすてぃーどきゅうしゅう"
	},
	{
		original: "丸協運輸",
		hiragana: "まるきょううんゆ"
	},
	{
		original: "東京納品代行",
		hiragana: "とうきょうのうひんだいこう"
	},
	{
		original: "名阪急配",
		hiragana: "めいはんきゅうはい"
	},
	{
		original: "東陽物流",
		hiragana: "とうようぶつりゅう"
	},
	{
		original: "埼玉センコーロジサービス",
		hiragana: "さいたませんこーろじさーびす"
	},
	{
		original: "カンダコーポレーション",
		hiragana: "かんだこーぽれーしょん"
	},
	{
		original: "共同物流サービス",
		hiragana: "きょうどうぶつりゅうさーびす"
	},
	{
		original: "スリーエス・サンキュウ",
		hiragana: "すりーえす・さんきゅう"
	},
	{
		original: "武蔵貨物自動車",
		hiragana: "むさしかもつじどうしゃ"
	},
	{
		original: "日本運輸",
		hiragana: "にっぽんうんゆ"
	},
	{
		original: "日硝ハイウエー",
		hiragana: "にちしょうはいうえー"
	},
	{
		original: "福岡運輸",
		hiragana: "ふくおかうんゆ"
	},
	{
		original: "王子物流",
		hiragana: "おうじぶつりゅう"
	},
	{
		original: "ホッコウ物流",
		hiragana: "ほっこうぶつりゅう"
	},
	{
		original: "北海道西濃運輸",
		hiragana: "ほっかいどうせいのううんゆ"
	},
	{
		original: "鮫川運送",
		hiragana: "さめかわうんそう"
	},
	{
		original: "共通運送",
		hiragana: "きょうつううんそう"
	},
	{
		original: "ＬＮＪさくらスマイル",
		hiragana: "ＬＮＪさくらすまいる"
	},
	{
		original: "ニッポンロジ",
		hiragana: "にっぽんろじ"
	},
	{
		original: "デイリートランスポート",
		hiragana: "でいりーとらんすぽーと"
	},
	{
		original: "アーク引越センター",
		hiragana: "あーくひっこしせんたー"
	},
	{
		original: "岡崎通運",
		hiragana: "おかざきつううん"
	},
	{
		original: "日新運輸工業",
		hiragana: "にっしんうんゆこうぎょう"
	},
	{
		original: "山陰福山通運",
		hiragana: "さんいんふくやまつううん"
	},
	{
		original: "カメイ物流サービス",
		hiragana: "かめいぶつりゅうさーびす"
	},
	{
		original: "サンワネッツ",
		hiragana: "さんわねっつ"
	},
	{
		original: "ディ・エス物流",
		hiragana: "でぃ・えすぶつりゅう"
	},
	{
		original: "コーワン",
		hiragana: "こーわん"
	},
	{
		original: "日通佐倉運輸",
		hiragana: "にっつうさくらうんゆ"
	},
	{
		original: "ロジストラスト・パートナーズ",
		hiragana: "ろじすとらすと・ぱーとなーず"
	},
	{
		original: "南光運輸",
		hiragana: "なんこううんゆ"
	},
	{
		original: "澁澤倉庫",
		hiragana: "しぶさわそうこ"
	},
	{
		original: "アクト",
		hiragana: "あくと"
	},
	{
		original: "ヒタチ",
		hiragana: "ひたち"
	},
	{
		original: "盛運輸",
		hiragana: "せいうんゆ"
	},
	{
		original: "札樽自動車運輸",
		hiragana: "さつたるじどうしゃうんゆ"
	},
	{
		original: "ロジカル",
		hiragana: "ろじかる"
	},
	{
		original: "直販配送",
		hiragana: "ちょくはんはいそう"
	},
	{
		original: "アキタ",
		hiragana: "あきた"
	},
	{
		original: "丸伊運輸",
		hiragana: "まるいうんゆ"
	},
	{
		original: "ＮＢＳロジソル",
		hiragana: "ＮＢＳろじそる"
	},
	{
		original: "丸全昭和運輸",
		hiragana: "まるぜんしょうわうんゆ"
	},
	{
		original: "ロジパルエクスプレス",
		hiragana: "ろじぱるえくすぷれす"
	},
	{
		original: "ロジスティクス・ネットワーク",
		hiragana: "ろじすてぃくす・ねっとわーく"
	},
	{
		original: "ヨコタエンタープライズ",
		hiragana: "よこたえんたーぷらいず"
	},
	{
		original: "中越通運",
		hiragana: "なかごしつううん"
	},
	{
		original: "ロジスティードコラボネクスト",
		hiragana: "ろじすてぃーどこらぼねくすと"
	},
	{
		original: "ブリヂストン物流",
		hiragana: "ぶりぢすとんぶつりゅう"
	},
	{
		original: "南九州福山通運",
		hiragana: "みなみきゅうしゅうふくやまつううん"
	},
	{
		original: "新開トランスポートシステムズ",
		hiragana: "しんかいとらんすぽーとしすてむず"
	},
	{
		original: "大東実業",
		hiragana: "だいとうじつぎょう"
	},
	{
		original: "北星産業",
		hiragana: "ほくせいさんぎょう"
	},
	{
		original: "東北福山通運",
		hiragana: "とうほくふくやまつううん"
	},
	{
		original: "キユーソー流通システム",
		hiragana: "きゆーそーりゅうつうしすてむ"
	},
	{
		original: "浪速運送",
		hiragana: "なにわうんそう"
	},
	{
		original: "富岳通運",
		hiragana: "とみたけつううん"
	},
	{
		original: "湊組",
		hiragana: "みなとくみ"
	},
	{
		original: "松岡満運輸",
		hiragana: "まつおかまんうんゆ"
	},
	{
		original: "甲信越福山通運",
		hiragana: "こうしんえつふくやまつううん"
	},
	{
		original: "多摩運送",
		hiragana: "たまうんそう"
	},
	{
		original: "辰巳商会",
		hiragana: "たつみしょうかい"
	},
	{
		original: "四国西濃運輸",
		hiragana: "しこくせいのううんゆ"
	},
	{
		original: "西部運輸",
		hiragana: "せいぶうんゆ"
	},
	{
		original: "ヤマガタ",
		hiragana: "やまがた"
	},
	{
		original: "日之出運輸",
		hiragana: "ひのでうんゆ"
	},
	{
		original: "東ソー物流",
		hiragana: "ひがしそーぶつりゅう"
	},
	{
		original: "梅田運輸倉庫",
		hiragana: "うめだうんゆそうこ"
	},
	{
		original: "大阪運輸",
		hiragana: "おおさかうんゆ"
	},
	{
		original: "日本トランスシティ",
		hiragana: "にっぽんとらんすしてぃ"
	},
	{
		original: "トーウン",
		hiragana: "とーうん"
	},
	{
		original: "西鉄運輸",
		hiragana: "にしてつうんゆ"
	},
	{
		original: "ティーユーロジネット",
		hiragana: "てぃーゆーろじねっと"
	},
	{
		original: "カワタキコーポレーション",
		hiragana: "かわたきこーぽれーしょん"
	},
	{
		original: "荒木運輸",
		hiragana: "あらきうんゆ"
	},
	{
		original: "姫路合同貨物自動車",
		hiragana: "ひめじごうどうかもつじどうしゃ"
	},
	{
		original: "四国名鉄運輸",
		hiragana: "しこくめいてつうんゆ"
	},
	{
		original: "エース",
		hiragana: "えーす"
	},
	{
		original: "エーブル",
		hiragana: "えーぶる"
	},
	{
		original: "サンリツ",
		hiragana: "さんりつ"
	},
	{
		original: "シーアール物流",
		hiragana: "しーあーるぶつりゅう"
	},
	{
		original: "五十嵐冷藏",
		hiragana: "いがらしれいぞう"
	},
	{
		original: "苫小牧埠頭",
		hiragana: "とまこまいふとう"
	},
	{
		original: "東和運輸倉庫",
		hiragana: "とうわうんゆそうこ"
	},
	{
		original: "東部運送",
		hiragana: "とうぶうんそう"
	},
	{
		original: "プリヴェ運輸",
		hiragana: "ぷりゔぇうんゆ"
	},
	{
		original: "ＭＤロジス商品サービス",
		hiragana: "ＭＤろじすしょうひんさーびす"
	},
	{
		original: "尾張陸運",
		hiragana: "おわりりくうん"
	},
	{
		original: "鶴丸海運",
		hiragana: "つるまるかいうん"
	},
	{
		original: "丸玉運送",
		hiragana: "まるたまうんそう"
	},
	{
		original: "ＳＢＳホールディングス",
		hiragana: "ＳＢＳほーるでぃんぐす"
	},
	{
		original: "ブルーエキスプレス",
		hiragana: "ぶるーえきすぷれす"
	},
	{
		original: "ヤマトマルチチャーター",
		hiragana: "やまとまるちちゃーたー"
	},
	{
		original: "滋賀センコー運輸整備",
		hiragana: "しがせんこーうんゆせいび"
	},
	{
		original: "ふそう陸送",
		hiragana: "ふそうりくそう"
	},
	{
		original: "東北三八五流通",
		hiragana: "とうほくさんぱちごりゅうつう"
	},
	{
		original: "三豊運送",
		hiragana: "みとようんそう"
	},
	{
		original: "ハマダ",
		hiragana: "はまだ"
	},
	{
		original: "青伸産業運輸",
		hiragana: "あおしんさんぎょううんゆ"
	},
	{
		original: "横浜低温ロジスティック",
		hiragana: "よこはまていおんろじすてぃっく"
	},
	{
		original: "京極運輸商事",
		hiragana: "きょうごくうんゆしょうじ"
	},
	{
		original: "瀬戸内陸運",
		hiragana: "せとうちりくうん"
	},
	{
		original: "南九州センコー",
		hiragana: "みなみきゅうしゅうせんこー"
	},
	{
		original: "大洋荷役",
		hiragana: "たいようにやく"
	},
	{
		original: "丸和運送",
		hiragana: "まるわうんそう"
	},
	{
		original: "マルイチ・ロジスティクス・サービス",
		hiragana: "まるいち・ろじすてぃくす・さーびす"
	},
	{
		original: "イビデン産業",
		hiragana: "いびでんさんぎょう"
	},
	{
		original: "ジャパンパレック",
		hiragana: "じゃぱんぱれっく"
	},
	{
		original: "水間急配",
		hiragana: "みずまきゅうはい"
	},
	{
		original: "東伸運輸",
		hiragana: "とうしんうんゆ"
	},
	{
		original: "日本チルド物流",
		hiragana: "にっぽんちるどぶつりゅう"
	},
	{
		original: "フジトランスライナー",
		hiragana: "ふじとらんすらいなー"
	},
	{
		original: "富士センコー運輸",
		hiragana: "ふじせんこーうんゆ"
	},
	{
		original: "新井商運",
		hiragana: "あらいしょううん"
	},
	{
		original: "ハナワトランスポート",
		hiragana: "はなわとらんすぽーと"
	},
	{
		original: "杉崎運輸",
		hiragana: "すぎさきうんゆ"
	},
	{
		original: "肥後産業",
		hiragana: "ひごさんぎょう"
	},
	{
		original: "翔運輸",
		hiragana: "しょううんゆ"
	},
	{
		original: "サンエー物流",
		hiragana: "さんえーぶつりゅう"
	},
	{
		original: "村山運送",
		hiragana: "むらやまうんそう"
	},
	{
		original: "ホクガン運輸",
		hiragana: "ほくがんうんゆ"
	},
	{
		original: "ロジス・ワークス",
		hiragana: "ろじす・わーくす"
	},
	{
		original: "南貨物自動車",
		hiragana: "みなみかもつじどうしゃ"
	},
	{
		original: "ヤマックス",
		hiragana: "やまっくす"
	},
	{
		original: "三越伊勢丹ビジネス・サポート",
		hiragana: "みつこしいせたんびじねす・さぽーと"
	},
	{
		original: "アート梱包運輸",
		hiragana: "あーとこんぽううんゆ"
	},
	{
		original: "新成企業",
		hiragana: "しんせいきぎょう"
	},
	{
		original: "東部ネットワーク",
		hiragana: "とうぶねっとわーく"
	},
	{
		original: "東邦運輸倉庫",
		hiragana: "とうほううんゆそうこ"
	},
	{
		original: "丸共通運",
		hiragana: "まるきょうつううん"
	},
	{
		original: "トッキュウ",
		hiragana: "とっきゅう"
	},
	{
		original: "サンエー運輸",
		hiragana: "さんえーうんゆ"
	},
	{
		original: "オーナミ",
		hiragana: "おーなみ"
	},
	{
		original: "澁澤陸運",
		hiragana: "しぶさわりくうん"
	},
	{
		original: "川重車両コンポ",
		hiragana: "かわしげしゃりょうこんぽ"
	},
	{
		original: "フィールドネットワーク",
		hiragana: "ふぃーるどねっとわーく"
	},
	{
		original: "三重西濃運輸",
		hiragana: "みえせいのううんゆ"
	},
	{
		original: "小名浜海陸運送",
		hiragana: "おなはまかいりくうんそう"
	},
	{
		original: "関西名鉄運輸",
		hiragana: "かんさいめいてつうんゆ"
	},
	{
		original: "ケーエルサービス西日本",
		hiragana: "けーえるさーびすにしにほん"
	},
	{
		original: "宮田運輸",
		hiragana: "みやたうんゆ"
	},
	{
		original: "カンダ物流",
		hiragana: "かんだぶつりゅう"
	},
	{
		original: "富士宮通運",
		hiragana: "ふじのみやつううん"
	},
	{
		original: "アサガミ",
		hiragana: "あさがみ"
	},
	{
		original: "首都圏物流",
		hiragana: "しゅとけんぶつりゅう"
	},
	{
		original: "北港運輸",
		hiragana: "きたこううんゆ"
	},
	{
		original: "日本図書輸送",
		hiragana: "にっぽんとしょゆそう"
	},
	{
		original: "日之出運輸",
		hiragana: "ひのでうんゆ"
	},
	{
		original: "丸協運輸",
		hiragana: "まるきょううんゆ"
	},
	{
		original: "北東北福山通運",
		hiragana: "ほくとうきたふくやまつううん"
	},
	{
		original: "樋口物流サービス",
		hiragana: "ひぐちぶつりゅうさーびす"
	},
	{
		original: "八戸通運",
		hiragana: "はちのへつううん"
	},
	{
		original: "フジノ食品",
		hiragana: "ふじのしょくひん"
	},
	{
		original: "鈴与カーゴネット北関東",
		hiragana: "すずよかーごねっときたかんとう"
	},
	{
		original: "鹿児島荷役海陸運輸",
		hiragana: "かこしまにやくかいりくうんゆ"
	},
	{
		original: "大衡運送",
		hiragana: "おおひらうんそう"
	},
	{
		original: "日之出運輸",
		hiragana: "ひのでうんゆ"
	},
	{
		original: "ポーターズ",
		hiragana: "ぽーたーず"
	},
	{
		original: "ロジテム九州",
		hiragana: "ろじてむきゅうしゅう"
	},
	{
		original: "ハピネット・ロジスティクスサービス",
		hiragana: "はぴねっと・ろじすてぃくすさーびす"
	},
	{
		original: "エスラインヒダ",
		hiragana: "えすらいんひだ"
	},
	{
		original: "吉沢運送",
		hiragana: "よしざわうんそう"
	},
	{
		original: "群馬ロジテム",
		hiragana: "ぐんまろじてむ"
	},
	{
		original: "阪神ロジテム",
		hiragana: "はんしんろじてむ"
	},
	{
		original: "法成寺運輸",
		hiragana: "ほうじょうじうんゆ"
	},
	{
		original: "岡田商運",
		hiragana: "おかだしょううん"
	},
	{
		original: "第一運輸",
		hiragana: "だいいちうんゆ"
	},
	{
		original: "東海海運",
		hiragana: "とうかいかいうん"
	},
	{
		original: "パナシアロジ",
		hiragana: "ぱなしあろじ"
	},
	{
		original: "十和運送",
		hiragana: "とうわうんそう"
	},
	{
		original: "北越メタル",
		hiragana: "ほくえつめたる"
	},
	{
		original: "ＫＹＯＴＳＵ",
		hiragana: "ＫＹＯＴＳＵ"
	},
	{
		original: "青木運輸倉庫",
		hiragana: "あおきうんゆそうこ"
	},
	{
		original: "西濃エキスプレス",
		hiragana: "せいのうえきすぷれす"
	},
	{
		original: "光昭",
		hiragana: "みつあき"
	},
	{
		original: "名古屋東部陸運",
		hiragana: "なごやとうぶりくうん"
	},
	{
		original: "ハートランス",
		hiragana: "はーとらんす"
	},
	{
		original: "丸運",
		hiragana: "まるうん"
	},
	{
		original: "野口興産",
		hiragana: "のぐちこうさん"
	},
	{
		original: "共立輸送",
		hiragana: "きょうりつゆそう"
	},
	{
		original: "ジェネック",
		hiragana: "じぇねっく"
	},
	{
		original: "中四国丸和ロジスティクス",
		hiragana: "ちゅうしこくまるわろじすてぃくす"
	},
	{
		original: "スリーエス物流",
		hiragana: "すりーえすぶつりゅう"
	},
	{
		original: "新潟名鉄運輸",
		hiragana: "にいがためいてつうんゆ"
	},
	{
		original: "東陸ロジテック",
		hiragana: "ひがしりくろじてっく"
	},
	{
		original: "ロジコム",
		hiragana: "ろじこむ"
	},
	{
		original: "大成運輸",
		hiragana: "たいせいうんゆ"
	},
	{
		original: "北海道丸和ロジスティクス",
		hiragana: "ほっかいどうまるわろじすてぃくす"
	},
	{
		original: "加悦",
		hiragana: "かや"
	},
	{
		original: "松浦通運",
		hiragana: "まつうらつううん"
	},
	{
		original: "ウヤマ産業",
		hiragana: "うやまさんぎょう"
	},
	{
		original: "ヒカリ産業",
		hiragana: "ひかりさんぎょう"
	},
	{
		original: "ジャパネットロジスティクスサービス",
		hiragana: "じゃぱねっとろじすてぃくすさーびす"
	},
	{
		original: "伊予商運",
		hiragana: "いよしょううん"
	},
	{
		original: "セルート",
		hiragana: "せるーと"
	},
	{
		original: "浜松興運",
		hiragana: "はままつきょううん"
	},
	{
		original: "トナミ運輸中国",
		hiragana: "となみうんゆちゅうごく"
	},
	{
		original: "新三興物流",
		hiragana: "しんぞうきょうぶつりゅう"
	},
	{
		original: "ＭＦＬ",
		hiragana: "ＭＦＬ"
	},
	{
		original: "ネキスト",
		hiragana: "ねきすと"
	},
	{
		original: "沖縄西濃運輸",
		hiragana: "おきなわせいのううんゆ"
	},
	{
		original: "グリーン輸送サービス",
		hiragana: "ぐりーんゆそうさーびす"
	},
	{
		original: "宇徳",
		hiragana: "うとく"
	},
	{
		original: "ラニイ福井貨物",
		hiragana: "らにいふくいかもつ"
	},
	{
		original: "北海道センコー",
		hiragana: "ほっかいどうせんこー"
	},
	{
		original: "川崎陸送",
		hiragana: "かわさきりくそう"
	},
	{
		original: "岐阜県ＪＡビジネスサポート",
		hiragana: "ぎふけんＪＡびじねすさぽーと"
	},
	{
		original: "宮岡",
		hiragana: "みやおか"
	},
	{
		original: "新日本流通サービス",
		hiragana: "しんにほんりゅうつうさーびす"
	},
	{
		original: "フィット",
		hiragana: "ふぃっと"
	},
	{
		original: "丸祐運送",
		hiragana: "まるすけうんそう"
	},
	{
		original: "カネヨシ",
		hiragana: "かねよし"
	},
	{
		original: "ＹＫロジスティックス",
		hiragana: "ＹＫろじすてぃっくす"
	},
	{
		original: "ウエルストンエキスプレス",
		hiragana: "うえるすとんえきすぷれす"
	},
	{
		original: "北陸トラック運送",
		hiragana: "ほくりくとらっくうんそう"
	},
	{
		original: "厚木センコー運輸",
		hiragana: "あつぎせんこーうんゆ"
	},
	{
		original: "ＪＦＥ物流京浜",
		hiragana: "ＪＦＥぶつりゅうけいひん"
	},
	{
		original: "日晶運輸",
		hiragana: "にちあきうんゆ"
	},
	{
		original: "大塚倉庫",
		hiragana: "おおつかそうこ"
	},
	{
		original: "丸全関西流通",
		hiragana: "まるぜんかんさいりゅうとおり"
	},
	{
		original: "マルタケ運輸",
		hiragana: "まるたけうんゆ"
	},
	{
		original: "中国陸運",
		hiragana: "ちゅうごくりくうん"
	},
	{
		original: "伏木海陸運送",
		hiragana: "ふしきかいりくうんそう"
	},
	{
		original: "鹿児島急送",
		hiragana: "かこしまきゅうそう"
	},
	{
		original: "菊池運輸",
		hiragana: "きくちうんゆ"
	},
	{
		original: "ナガヤマ物流",
		hiragana: "ながやまぶつりゅう"
	},
	{
		original: "ジェイアール西日本マルニックス",
		hiragana: "じぇいあーるにしにほんまるにっくす"
	},
	{
		original: "タカキ物流サービス",
		hiragana: "たかきぶつりゅうさーびす"
	},
	{
		original: "商船三井ロジスティクス",
		hiragana: "しょうせんみついろじすてぃくす"
	},
	{
		original: "神山運輸",
		hiragana: "かみやまうんゆ"
	},
	{
		original: "エコ配",
		hiragana: "えこはい"
	},
	{
		original: "大富",
		hiragana: "たいふ"
	},
	{
		original: "四国運輸",
		hiragana: "しこくうんゆ"
	},
	{
		original: "ＤＨＬグローバルフォワーディングジャパン",
		hiragana: "ＤＨＬぐろーばるふぉわーでぃんぐじゃぱん"
	},
	{
		original: "日通関西物流",
		hiragana: "にっつうかんさいぶつりゅう"
	},
	{
		original: "マルソー",
		hiragana: "まるそー"
	},
	{
		original: "山村倉庫",
		hiragana: "さんそんそうこ"
	},
	{
		original: "トランスウェブ",
		hiragana: "とらんすうぇぶ"
	},
	{
		original: "ジェーラインエクスプレス",
		hiragana: "じぇーらいんえくすぷれす"
	},
	{
		original: "東山物流",
		hiragana: "ひがしやまぶつりゅう"
	},
	{
		original: "サンキ",
		hiragana: "さんき"
	},
	{
		original: "コダマサービス",
		hiragana: "こだまさーびす"
	},
	{
		original: "白金運輸",
		hiragana: "しろがねうんゆ"
	},
	{
		original: "セイセイトラフィック",
		hiragana: "せいせいとらふぃっく"
	},
	{
		original: "塩谷運輸建設",
		hiragana: "しおやうんゆけんせつ"
	},
	{
		original: "九州栄孝エキスプレス",
		hiragana: "きゅうしゅうひでたかえきすぷれす"
	},
	{
		original: "向島運送",
		hiragana: "こうしまうんそう"
	},
	{
		original: "二本松物流",
		hiragana: "にほんまつぶつりゅう"
	},
	{
		original: "高千穂倉庫運輸",
		hiragana: "たかちほそうこうんゆ"
	},
	{
		original: "西多摩運送",
		hiragana: "にしたまうんそう"
	},
	{
		original: "日東富士製粉",
		hiragana: "にっとうふじせいふん"
	},
	{
		original: "ＴＢロジスティクス",
		hiragana: "ＴＢろじすてぃくす"
	},
	{
		original: "ボルテックスセイグン",
		hiragana: "ぼるてっくすせいぐん"
	},
	{
		original: "北海道東北名鉄運輸",
		hiragana: "ほっかいどうとうほくめいてつうんゆ"
	},
	{
		original: "シグマベンディングサービス",
		hiragana: "しぐまべんでぃんぐさーびす"
	},
	{
		original: "大東港運",
		hiragana: "だいとうみなとうん"
	},
	{
		original: "ダイセル物流",
		hiragana: "だいせるぶつりゅう"
	},
	{
		original: "横浜ＬＳＰ",
		hiragana: "よこはまＬＳＰ"
	},
	{
		original: "渥美運輸",
		hiragana: "あつみうんゆ"
	},
	{
		original: "ホイテクノ物流",
		hiragana: "ほいてくのぶつりゅう"
	},
	{
		original: "北海道トナミ運輸",
		hiragana: "ほっかいどうとなみうんゆ"
	},
	{
		original: "園田陸運",
		hiragana: "そのだりくうん"
	},
	{
		original: "昇栄",
		hiragana: "しょうえい"
	},
	{
		original: "信濃運輸",
		hiragana: "しなのうんゆ"
	},
	{
		original: "リンコーコーポレーション",
		hiragana: "りんこーこーぽれーしょん"
	},
	{
		original: "菱東運輸倉庫",
		hiragana: "ひしひがしうんゆそうこ"
	},
	{
		original: "サンワ",
		hiragana: "さんわ"
	},
	{
		original: "コフジ物流",
		hiragana: "こふじぶつりゅう"
	},
	{
		original: "フレッシュ物流",
		hiragana: "ふれっしゅぶつりゅう"
	},
	{
		original: "関東名鉄運輸",
		hiragana: "かんとうめいてつうんゆ"
	},
	{
		original: "ヤクルトロジスティクス",
		hiragana: "やくるとろじすてぃくす"
	},
	{
		original: "マルカミ物流",
		hiragana: "まるかみぶつりゅう"
	},
	{
		original: "ＳＢＳフレイトサービス",
		hiragana: "ＳＢＳふれいとさーびす"
	},
	{
		original: "郡山運送",
		hiragana: "こうりやまうんそう"
	},
	{
		original: "勅使川原産業",
		hiragana: "てしがわらさんぎょう"
	},
	{
		original: "大西運輸",
		hiragana: "おおにしうんゆ"
	},
	{
		original: "清興運輸",
		hiragana: "せいきょううんゆ"
	},
	{
		original: "福岡ソノリク",
		hiragana: "ふくおかそのりく"
	},
	{
		original: "日通東京運輸",
		hiragana: "にっつうとうきょううんゆ"
	},
	{
		original: "月島物流サービス",
		hiragana: "がつしまぶつりゅうさーびす"
	},
	{
		original: "タイヘイ物流システム",
		hiragana: "たいへいぶつりゅうしすてむ"
	},
	{
		original: "安房運輸",
		hiragana: "あわうんゆ"
	},
	{
		original: "パスコ・ロジスティクス",
		hiragana: "ぱすこ・ろじすてぃくす"
	},
	{
		original: "大和通商",
		hiragana: "やまとつうしょう"
	},
	{
		original: "ロジメディカル",
		hiragana: "ろじめでぃかる"
	},
	{
		original: "ＳＧホールディングス",
		hiragana: "ＳＧほーるでぃんぐす"
	},
	{
		original: "日本トランスネット",
		hiragana: "にっぽんとらんすねっと"
	},
	{
		original: "あんしん",
		hiragana: "あんしん"
	},
	{
		original: "日立建機ロジテック",
		hiragana: "ひたちけんきろじてっく"
	},
	{
		original: "つばめ急便",
		hiragana: "つばめきゅうびん"
	},
	{
		original: "丸野",
		hiragana: "まるの"
	},
	{
		original: "丸太運輸",
		hiragana: "まるたうんゆ"
	},
	{
		original: "柏センコー運輸",
		hiragana: "かしわせんこーうんゆ"
	},
	{
		original: "清和海運",
		hiragana: "きよかずかいうん"
	},
	{
		original: "Ｌ物流",
		hiragana: "Ｌぶつりゅう"
	},
	{
		original: "大阪運輸倉庫",
		hiragana: "おおさかうんゆそうこ"
	},
	{
		original: "ムソー",
		hiragana: "むそー"
	},
	{
		original: "東邦興産",
		hiragana: "とうほうこうさん"
	},
	{
		original: "セントラル・タンクターミナル",
		hiragana: "せんとらる・たんくたーみなる"
	},
	{
		original: "東栄興業",
		hiragana: "とうえいこうぎょう"
	},
	{
		original: "米澤通商",
		hiragana: "よねざわつうしょう"
	},
	{
		original: "札幌通運",
		hiragana: "さっぽろつううん"
	},
	{
		original: "エルス",
		hiragana: "えるす"
	},
	{
		original: "ナカムラロジスティクス",
		hiragana: "なかむらろじすてぃくす"
	},
	{
		original: "間口北近畿",
		hiragana: "まぐちきたきんき"
	},
	{
		original: "双葉運輸",
		hiragana: "ふたばうんゆ"
	},
	{
		original: "三協輸送サービス",
		hiragana: "さんきょうゆそうさーびす"
	},
	{
		original: "鈴江コーポレーション",
		hiragana: "すずえこーぽれーしょん"
	},
	{
		original: "東配",
		hiragana: "ひがしはい"
	},
	{
		original: "丸全電産ロジステック",
		hiragana: "まるぜんでんさんろじすてっく"
	},
	{
		original: "北見通運",
		hiragana: "きたみつううん"
	},
	{
		original: "大坂屋運送",
		hiragana: "おおさかやうんそう"
	},
	{
		original: "共通商事",
		hiragana: "きょうつうしょうじ"
	},
	{
		original: "タカラ倉庫運輸サービス",
		hiragana: "たからそうこうんゆさーびす"
	},
	{
		original: "阿南自動車",
		hiragana: "あなんじどうしゃ"
	},
	{
		original: "日本フレートライナー",
		hiragana: "にっぽんふれーとらいなー"
	},
	{
		original: "ＮＸトランスポート",
		hiragana: "ＮＸとらんすぽーと"
	},
	{
		original: "谷口運送",
		hiragana: "たにぐちうんそう"
	},
	{
		original: "二葉運送",
		hiragana: "ふたばうんそう"
	},
	{
		original: "ケイシン",
		hiragana: "けいしん"
	},
	{
		original: "ＹＡＭＡＴＥ",
		hiragana: "ＹＡＭＡＴＥ"
	},
	{
		original: "サントス",
		hiragana: "さんとす"
	},
	{
		original: "米山運送",
		hiragana: "よねやまうんそう"
	},
	{
		original: "碧南運送",
		hiragana: "へきなんうんそう"
	},
	{
		original: "中京陸運",
		hiragana: "ちゅうきょうりくうん"
	},
	{
		original: "西物流兵庫",
		hiragana: "にしぶつりゅうひょうご"
	},
	{
		original: "ワイズ・プラスワン",
		hiragana: "わいず・ぷらすわん"
	},
	{
		original: "さくら運輸",
		hiragana: "さくらうんゆ"
	},
	{
		original: "アップル",
		hiragana: "あっぷる"
	},
	{
		original: "朝日物流",
		hiragana: "あさひぶつりゅう"
	},
	{
		original: "日立ビルシステムビジネスサポート",
		hiragana: "ひたちびるしすてむびじねすさぽーと"
	},
	{
		original: "誠和梱枹運輸",
		hiragana: "せいわこんならうんゆ"
	},
	{
		original: "ケイロジ",
		hiragana: "けいろじ"
	},
	{
		original: "東京トラック運送",
		hiragana: "とうきょうとらっくうんそう"
	},
	{
		original: "長崎運送",
		hiragana: "ながさきうんそう"
	},
	{
		original: "青森定期自動車",
		hiragana: "あおもりていきじどうしゃ"
	},
	{
		original: "日本製紙物流",
		hiragana: "にほんせいかみぶつりゅう"
	},
	{
		original: "北陸トナミ運輸",
		hiragana: "ほくりくとなみうんゆ"
	},
	{
		original: "京阪久宝",
		hiragana: "けいはんくぼう"
	},
	{
		original: "中山運輸",
		hiragana: "なかやまうんゆ"
	},
	{
		original: "大翔トランスポート",
		hiragana: "ひろととらんすぽーと"
	},
	{
		original: "淡路共正陸運",
		hiragana: "あわじともせいりくうん"
	},
	{
		original: "伊藤忠ロジスティクス",
		hiragana: "いとうちゅうろじすてぃくす"
	},
	{
		original: "太平洋陸送",
		hiragana: "たいへいようりくそう"
	},
	{
		original: "四国高速運輸",
		hiragana: "しこくこうそくうんゆ"
	},
	{
		original: "山崎物流サービス",
		hiragana: "やまざきぶつりゅうさーびす"
	},
	{
		original: "東北丸和ロジスティクス",
		hiragana: "とうほくまるわろじすてぃくす"
	},
	{
		original: "三協運輸サービス",
		hiragana: "さんきょううんゆさーびす"
	},
	{
		original: "幸運トラック",
		hiragana: "こううんとらっく"
	},
	{
		original: "篠崎運輸",
		hiragana: "しのざきうんゆ"
	},
	{
		original: "琉球通運",
		hiragana: "りゅうきゅうつううん"
	},
	{
		original: "日新",
		hiragana: "にっしん"
	},
	{
		original: "大村総業",
		hiragana: "おおむらそうぎょう"
	},
	{
		original: "新日本物流",
		hiragana: "しんにほんぶつりゅう"
	},
	{
		original: "凸版物流",
		hiragana: "とっぱんぶつりゅう"
	},
	{
		original: "名古屋陸送",
		hiragana: "なごやりくそう"
	},
	{
		original: "ロジテック",
		hiragana: "ろじてっく"
	},
	{
		original: "トーショー",
		hiragana: "とーしょー"
	},
	{
		original: "東京南福山通運",
		hiragana: "とうきょうみなみふくやまつううん"
	},
	{
		original: "ダイセイ",
		hiragana: "だいせい"
	},
	{
		original: "サンライズ産業",
		hiragana: "さんらいずさんぎょう"
	},
	{
		original: "ＮＸ徳通",
		hiragana: "ＮＸとくとおり"
	},
	{
		original: "宇和島自動車運送",
		hiragana: "うわしまじどうしゃうんそう"
	},
	{
		original: "マルハニチロ物流",
		hiragana: "まるはにちろぶつりゅう"
	},
	{
		original: "マルイ運輸",
		hiragana: "まるいうんゆ"
	},
	{
		original: "周防運輸",
		hiragana: "すおううんゆ"
	},
	{
		original: "ＪＸ金属プレシジョンテクノロジー",
		hiragana: "ＪＸきんぞくぷれしじょんてくのろじー"
	},
	{
		original: "永山運送",
		hiragana: "ながやまうんそう"
	},
	{
		original: "山田運送",
		hiragana: "やまだうんそう"
	},
	{
		original: "和喜輸送",
		hiragana: "かずよしゆそう"
	},
	{
		original: "旭運輸",
		hiragana: "あさひうんゆ"
	},
	{
		original: "ニチモウロジスティクス",
		hiragana: "にちもうろじすてぃくす"
	},
	{
		original: "ユービーエム",
		hiragana: "ゆーびーえむ"
	},
	{
		original: "ギオンデリバリーサービス",
		hiragana: "ぎおんでりばりーさーびす"
	},
	{
		original: "愛宕倉庫",
		hiragana: "あたごそうこ"
	},
	{
		original: "東海運",
		hiragana: "とうかいうん"
	},
	{
		original: "名豊興運",
		hiragana: "めいほうきょううん"
	},
	{
		original: "中津急行",
		hiragana: "なかつきゅうこう"
	},
	{
		original: "ＳＢＳロジコム関東",
		hiragana: "ＳＢＳろじこむかんとう"
	},
	{
		original: "フコックス",
		hiragana: "ふこっくす"
	},
	{
		original: "北海小型運輸",
		hiragana: "ほっかいこがたうんゆ"
	},
	{
		original: "北海道福山通運",
		hiragana: "ほっかいどうふくやまつううん"
	},
	{
		original: "関商ネットワーク",
		hiragana: "かんしょうねっとわーく"
	},
	{
		original: "関東トナミ運輸",
		hiragana: "かんとうとなみうんゆ"
	},
	{
		original: "司企業",
		hiragana: "つかさきぎょう"
	},
	{
		original: "アサガミ物流",
		hiragana: "あさがみぶつりゅう"
	},
	{
		original: "東岐運輸",
		hiragana: "ひがししうんゆ"
	},
	{
		original: "みなと運送",
		hiragana: "みなとうんそう"
	},
	{
		original: "鹿沼梱包運輸",
		hiragana: "かぬまこんぽううんゆ"
	},
	{
		original: "ヤギヌマ流通サービス",
		hiragana: "やぎぬまりゅうつうさーびす"
	},
	{
		original: "ＮＸ備通",
		hiragana: "ＮＸびとおり"
	},
	{
		original: "つばさロジスティクス",
		hiragana: "つばさろじすてぃくす"
	},
	{
		original: "川合運輸",
		hiragana: "かわいうんゆ"
	},
	{
		original: "名海運輸作業",
		hiragana: "めいかいうんゆさぎょう"
	},
	{
		original: "摂津倉庫",
		hiragana: "せっつそうこ"
	},
	{
		original: "後藤回漕店",
		hiragana: "ごとうかいそうみせ"
	},
	{
		original: "日ノ丸西濃運輸",
		hiragana: "にちのまるせいのううんゆ"
	},
	{
		original: "日本物流センター",
		hiragana: "にほんものりゅうせんたー"
	},
	{
		original: "太田運輸",
		hiragana: "おおたうんゆ"
	},
	{
		original: "トーエイ物流",
		hiragana: "とーえいぶつりゅう"
	},
	{
		original: "根本運送",
		hiragana: "こんぽんうんそう"
	},
	{
		original: "河野",
		hiragana: "こうの"
	},
	{
		original: "日通湘南物流",
		hiragana: "にっつうしょうなんぶつりゅう"
	},
	{
		original: "辻野",
		hiragana: "つじの"
	},
	{
		original: "システムライン",
		hiragana: "しすてむらいん"
	},
	{
		original: "テラモト",
		hiragana: "てらもと"
	},
	{
		original: "明雪運輸",
		hiragana: "めいゆきうんゆ"
	},
	{
		original: "南信貨物自動車",
		hiragana: "なんしんかもつじどうしゃ"
	},
	{
		original: "ナカウン",
		hiragana: "なかうん"
	},
	{
		original: "拓洋",
		hiragana: "たくひろし"
	},
	{
		original: "岩手三八五流通",
		hiragana: "いわてさんぱちごりゅうつう"
	},
	{
		original: "プラスカーゴサービス",
		hiragana: "ぷらすかーごさーびす"
	},
	{
		original: "田口運送",
		hiragana: "たぐちうんそう"
	},
	{
		original: "藤城運輸",
		hiragana: "ふじしろうんゆ"
	},
	{
		original: "亀甲通運",
		hiragana: "きっこうつううん"
	},
	{
		original: "マスダ運輸",
		hiragana: "ますだうんゆ"
	},
	{
		original: "熊本通運",
		hiragana: "くまもとつううん"
	},
	{
		original: "ナラサキスタックス",
		hiragana: "ならさきすたっくす"
	},
	{
		original: "ロジスコムＱ",
		hiragana: "ろじすこむＱ"
	},
	{
		original: "山清倉庫",
		hiragana: "さんせいそうこ"
	},
	{
		original: "福糧運輸",
		hiragana: "ふくかてうんゆ"
	},
	{
		original: "富士運送",
		hiragana: "ふじうんそう"
	},
	{
		original: "プラスキャリー",
		hiragana: "ぷらすきゃりー"
	},
	{
		original: "新星運輸商事",
		hiragana: "しんせいうんゆしょうじ"
	},
	{
		original: "横浜低温流通",
		hiragana: "よこはまていおんりゅうつう"
	},
	{
		original: "札幌軽量急送",
		hiragana: "さっぽろけいりょうきゅうそう"
	},
	{
		original: "信越定期自動車",
		hiragana: "しんえつていきじどうしゃ"
	},
	{
		original: "丸運輸送",
		hiragana: "まるうんゆそう"
	},
	{
		original: "竹内運輸工業",
		hiragana: "たけうちうんゆこうぎょう"
	},
	{
		original: "有限会社扶桑物流",
		hiragana: "ゆうげんがいしゃふそうぶつりゅう"
	},
	{
		original: "石部運輸倉庫",
		hiragana: "いしべうんゆそうこ"
	},
	{
		original: "ジーマック",
		hiragana: "じーまっく"
	},
	{
		original: "熊本交通運輸",
		hiragana: "くまもとこうつううんゆ"
	},
	{
		original: "アネックス",
		hiragana: "あねっくす"
	},
	{
		original: "昭和冷凍",
		hiragana: "しょうわれいとう"
	},
	{
		original: "まるだい運輸倉庫",
		hiragana: "まるだいうんゆそうこ"
	},
	{
		original: "サンエツ運輸",
		hiragana: "さんえつうんゆ"
	},
	{
		original: "新日本ガス",
		hiragana: "しんにほんがす"
	},
	{
		original: "旭新運輸",
		hiragana: "あさひしんうんゆ"
	},
	{
		original: "丸徳輸送",
		hiragana: "まるとくゆそう"
	},
	{
		original: "エージーエス",
		hiragana: "えーじーえす"
	},
	{
		original: "ゆだ",
		hiragana: "ゆだ"
	},
	{
		original: "日通宇都宮運輸",
		hiragana: "にっつううつのみやうんゆ"
	},
	{
		original: "鈴鹿インター",
		hiragana: "すずかいんたー"
	},
	{
		original: "大虎運輸東北",
		hiragana: "おおとらうんゆとうほく"
	},
	{
		original: "北越物流",
		hiragana: "ほくえつぶつりゅう"
	},
	{
		original: "東洋運輸",
		hiragana: "とうよううんゆ"
	},
	{
		original: "ＵＡＣＪ物流",
		hiragana: "ＵＡＣＪぶつりゅう"
	},
	{
		original: "エムケー",
		hiragana: "えむけー"
	},
	{
		original: "沖縄急送",
		hiragana: "おきなわきゅうそう"
	},
	{
		original: "マキタ運輸",
		hiragana: "まきたうんゆ"
	},
	{
		original: "今井運送",
		hiragana: "いまいうんそう"
	},
	{
		original: "旭",
		hiragana: "あさひ"
	},
	{
		original: "ユニプレス物流",
		hiragana: "ゆにぷれすぶつりゅう"
	},
	{
		original: "静谷製絲",
		hiragana: "しずやせいし"
	},
	{
		original: "中山運送",
		hiragana: "なかやまうんそう"
	},
	{
		original: "德三運輸倉庫",
		hiragana: "うんゆそうこ"
	},
	{
		original: "小野寺商事",
		hiragana: "おのでらしょうじ"
	},
	{
		original: "エフエスロジスティックス",
		hiragana: "えふえすろじすてぃっくす"
	},
	{
		original: "ネストロジスティクス",
		hiragana: "ねすとろじすてぃくす"
	},
	{
		original: "マイスター",
		hiragana: "まいすたー"
	},
	{
		original: "首都圏ロジスティクス",
		hiragana: "しゅとけんろじすてぃくす"
	},
	{
		original: "星川産業",
		hiragana: "ほしかわさんぎょう"
	},
	{
		original: "暁運送",
		hiragana: "あかつきうんそう"
	},
	{
		original: "共進組",
		hiragana: "きょうしんくみ"
	},
	{
		original: "磐栄運送",
		hiragana: "いわえいうんそう"
	},
	{
		original: "東山",
		hiragana: "ひがしやま"
	},
	{
		original: "ファースト運輸",
		hiragana: "ふぁーすとうんゆ"
	},
	{
		original: "東北第一物流",
		hiragana: "とうほくだいいちぶつりゅう"
	},
	{
		original: "城西物流倉庫",
		hiragana: "じょうさいぶつりゅうそうこ"
	},
	{
		original: "青山運送",
		hiragana: "あおやまうんそう"
	},
	{
		original: "東洋商事",
		hiragana: "とうようしょうじ"
	},
	{
		original: "トランスポート・エースアンドエース",
		hiragana: "とらんすぽーと・えーすあんどえーす"
	},
	{
		original: "広島急送",
		hiragana: "ひろしまきゅうそう"
	},
	{
		original: "フクワ物流",
		hiragana: "ふくわぶつりゅう"
	},
	{
		original: "ベストライン",
		hiragana: "べすとらいん"
	},
	{
		original: "メイコン",
		hiragana: "めいこん"
	},
	{
		original: "ワールドトランス",
		hiragana: "わーるどとらんす"
	},
	{
		original: "大虎運輸北東北",
		hiragana: "おおとらうんゆほくとうきた"
	},
	{
		original: "田中産業",
		hiragana: "たなかさんぎょう"
	},
	{
		original: "福山瑞穂運輸",
		hiragana: "ふくやまみずほうんゆ"
	},
	{
		original: "ムービング",
		hiragana: "むーびんぐ"
	},
	{
		original: "グリーン物流",
		hiragana: "ぐりーんぶつりゅう"
	},
	{
		original: "三蔵",
		hiragana: "さんぞう"
	},
	{
		original: "東武物流サービス",
		hiragana: "とうぶぶつりゅうさーびす"
	},
	{
		original: "辰巳運輸",
		hiragana: "たつみうんゆ"
	},
	{
		original: "ジャステム",
		hiragana: "じゃすてむ"
	},
	{
		original: "エービーカーゴ東日本",
		hiragana: "えーびーかーごひがしにほん"
	},
	{
		original: "西川海陸輸送",
		hiragana: "にしかわかいりくゆそう"
	},
	{
		original: "シンケン",
		hiragana: "しんけん"
	},
	{
		original: "兵庫トランスポート",
		hiragana: "ひょうごとらんすぽーと"
	},
	{
		original: "琉海ロジスティクス",
		hiragana: "りゅううみろじすてぃくす"
	},
	{
		original: "城北運輸",
		hiragana: "じょうほくうんゆ"
	},
	{
		original: "丸総",
		hiragana: "まるそう"
	},
	{
		original: "静岡紙運輸",
		hiragana: "しずおかかみうんゆ"
	},
	{
		original: "マルク運輸",
		hiragana: "まるくうんゆ"
	},
	{
		original: "エスユーロジ",
		hiragana: "えすゆーろじ"
	},
	{
		original: "大阪大松運輸",
		hiragana: "おおさかだいまつうんゆ"
	},
	{
		original: "テジマ",
		hiragana: "てじま"
	},
	{
		original: "トヨナカ",
		hiragana: "とよなか"
	},
	{
		original: "中越ロジスティクス",
		hiragana: "なかごしろじすてぃくす"
	},
	{
		original: "上田コールド",
		hiragana: "うえだこーるど"
	},
	{
		original: "福井アクティー",
		hiragana: "ふくいあくてぃー"
	},
	{
		original: "ジャパンロジ",
		hiragana: "じゃぱんろじ"
	},
	{
		original: "京葉流通倉庫",
		hiragana: "けいようりゅうつうそうこ"
	},
	{
		original: "ロジックス",
		hiragana: "ろじっくす"
	},
	{
		original: "三和倉庫",
		hiragana: "さんわそうこ"
	},
	{
		original: "日本植物運輸",
		hiragana: "にっぽんしょくぶつうんゆ"
	},
	{
		original: "迫トラック",
		hiragana: "さことらっく"
	},
	{
		original: "岡山福山通運",
		hiragana: "おかやまふくやまつううん"
	},
	{
		original: "齋藤商運",
		hiragana: "さいとうしょううん"
	},
	{
		original: "テスココンポ",
		hiragana: "てすここんぽ"
	},
	{
		original: "三八五流通",
		hiragana: "さんぱちごりゅうつう"
	},
	{
		original: "ユート運輸倉庫",
		hiragana: "ゆーとうんゆそうこ"
	},
	{
		original: "共同物流",
		hiragana: "きょうどうぶつりゅう"
	},
	{
		original: "岡山通運",
		hiragana: "おかやまつううん"
	},
	{
		original: "八潮運輸",
		hiragana: "やしおうんゆ"
	},
	{
		original: "山岸運送",
		hiragana: "やまぎしうんそう"
	},
	{
		original: "国際エキスプレス",
		hiragana: "こくさいえきすぷれす"
	},
	{
		original: "全農サイロ",
		hiragana: "ぜんのうさいろ"
	},
	{
		original: "三光運輸",
		hiragana: "さんこううんゆ"
	},
	{
		original: "ミナト流通サービス",
		hiragana: "みなとりゅうつうさーびす"
	},
	{
		original: "山本水産輸送",
		hiragana: "やまもとすいさんゆそう"
	},
	{
		original: "ティーロジエクスプレス",
		hiragana: "てぃーろじえくすぷれす"
	},
	{
		original: "サザントランスポートサービス",
		hiragana: "さざんとらんすぽーとさーびす"
	},
	{
		original: "埼九運輸",
		hiragana: "さききゅううんゆ"
	},
	{
		original: "ＮＴＰセブンス",
		hiragana: "ＮＴＰせぶんす"
	},
	{
		original: "前山倉庫",
		hiragana: "まえやまそうこ"
	},
	{
		original: "関東交通",
		hiragana: "かんとうこうつう"
	},
	{
		original: "エヌズ・ゲーム",
		hiragana: "えぬず・げーむ"
	},
	{
		original: "中野運送",
		hiragana: "なかのうんそう"
	},
	{
		original: "日通群馬物流",
		hiragana: "にっつうぐんまぶつりゅう"
	},
	{
		original: "仁和運送",
		hiragana: "にわうんそう"
	},
	{
		original: "丸伝運送",
		hiragana: "まるでんうんそう"
	},
	{
		original: "八楠",
		hiragana: "はちくすのき"
	},
	{
		original: "富田運輸",
		hiragana: "とみたうんゆ"
	},
	{
		original: "北部港運",
		hiragana: "ほくぶみなとうん"
	},
	{
		original: "希望運輸",
		hiragana: "きぼううんゆ"
	},
	{
		original: "サッポログループ物流",
		hiragana: "さっぽろぐるーぷぶつりゅう"
	},
	{
		original: "鈴與自動車運送",
		hiragana: "すずよじどうしゃうんそう"
	},
	{
		original: "新東海ロジスティクス",
		hiragana: "しんとううみろじすてぃくす"
	},
	{
		original: "沖縄物流",
		hiragana: "おきなわものりゅう"
	},
	{
		original: "ロジネットジャパン",
		hiragana: "ろじねっとじゃぱん"
	},
	{
		original: "翔和サービス",
		hiragana: "しょうわさーびす"
	},
	{
		original: "太陽流通サービス",
		hiragana: "たいようりゅうつうさーびす"
	},
	{
		original: "江坂運輸",
		hiragana: "えさかうんゆ"
	},
	{
		original: "エスライン九州",
		hiragana: "えすらいんきゅうしゅう"
	},
	{
		original: "関光汽船",
		hiragana: "かんひかりきせん"
	},
	{
		original: "旭企業",
		hiragana: "あさひきぎょう"
	},
	{
		original: "北海道車輌運送",
		hiragana: "ほっかいどうしゃりょううんそう"
	},
	{
		original: "初見運輸倉庫",
		hiragana: "しょけんうんゆそうこ"
	},
	{
		original: "河島運輸",
		hiragana: "かわしまうんゆ"
	},
	{
		original: "大和高速運輸",
		hiragana: "やまとこうそくうんゆ"
	},
	{
		original: "ファイズトランスポートサービス",
		hiragana: "ふぁいずとらんすぽーとさーびす"
	},
	{
		original: "エス",
		hiragana: "えす"
	},
	{
		original: "港トラック運送",
		hiragana: "みなととらっくうんそう"
	},
	{
		original: "炭平ロジスティクス",
		hiragana: "すみたいらろじすてぃくす"
	},
	{
		original: "丹羽興業",
		hiragana: "たんばこうぎょう"
	},
	{
		original: "キャリムエンジニアリング",
		hiragana: "きゃりむえんじにありんぐ"
	},
	{
		original: "ヤマサ",
		hiragana: "やまさ"
	},
	{
		original: "昌栄運輸",
		hiragana: "しょうえいうんゆ"
	},
	{
		original: "コープネットワークサービス",
		hiragana: "こーぷねっとわーくさーびす"
	},
	{
		original: "東海運",
		hiragana: "とうかいうん"
	},
	{
		original: "メジャーサービスジャパン",
		hiragana: "めじゃーさーびすじゃぱん"
	},
	{
		original: "ＮＲＳ物流",
		hiragana: "ＮＲＳぶつりゅう"
	},
	{
		original: "山田運輸店",
		hiragana: "やまだうんゆみせ"
	},
	{
		original: "岡通運輸",
		hiragana: "おかつううんゆ"
	},
	{
		original: "永井運輸",
		hiragana: "ながいうんゆ"
	},
	{
		original: "日通東京西運輸",
		hiragana: "にっつうとうきょうにしうんゆ"
	},
	{
		original: "村山運輸",
		hiragana: "むらやまうんゆ"
	},
	{
		original: "マルセイカンパニー",
		hiragana: "まるせいかんぱにー"
	},
	{
		original: "西播通運",
		hiragana: "にしばんつううん"
	},
	{
		original: "下関海陸運送",
		hiragana: "しものせきかいりくうんそう"
	},
	{
		original: "丸の内運送",
		hiragana: "まるのうちうんそう"
	},
	{
		original: "日通横浜運輸",
		hiragana: "にっつうよこはまうんゆ"
	},
	{
		original: "ケイアイ",
		hiragana: "けいあい"
	},
	{
		original: "マクサム通運",
		hiragana: "まくさむつううん"
	},
	{
		original: "長野第一物流",
		hiragana: "ながのだいいちぶつりゅう"
	},
	{
		original: "三笠運輸",
		hiragana: "みかさうんゆ"
	},
	{
		original: "フリゴ",
		hiragana: "ふりご"
	},
	{
		original: "新三協物流",
		hiragana: "しんぞうきょうぶつりゅう"
	},
	{
		original: "ロジコム",
		hiragana: "ろじこむ"
	},
	{
		original: "セイコー運輸",
		hiragana: "せいこーうんゆ"
	},
	{
		original: "太陽工業",
		hiragana: "たいようこうぎょう"
	},
	{
		original: "サンキュウ・トランスポート・中国",
		hiragana: "さんきゅう・とらんすぽーと・ちゅうごく"
	},
	{
		original: "倉本運送",
		hiragana: "くらもとうんそう"
	},
	{
		original: "ラクダ運輸",
		hiragana: "らくだうんゆ"
	},
	{
		original: "菊竹産業",
		hiragana: "きくたけさんぎょう"
	},
	{
		original: "遠野運送",
		hiragana: "とおのうんそう"
	},
	{
		original: "アストラックス",
		hiragana: "あすとらっくす"
	},
	{
		original: "タイカワ運輸",
		hiragana: "たいかわうんゆ"
	},
	{
		original: "大虎運輸中四国",
		hiragana: "おおとらうんゆちゅうしこく"
	},
	{
		original: "苫小牧栗林運輸",
		hiragana: "とまこまいくりばやしうんゆ"
	},
	{
		original: "神戸市場通運",
		hiragana: "こうべしばつううん"
	},
	{
		original: "弘立倉庫",
		hiragana: "こうりつそうこ"
	},
	{
		original: "トランスポート金沢",
		hiragana: "とらんすぽーとかなざわ"
	},
	{
		original: "秀和運輸",
		hiragana: "しゅうわうんゆ"
	},
	{
		original: "ウエストアクティブトランスポート",
		hiragana: "うえすとあくてぃぶとらんすぽーと"
	},
	{
		original: "平和みらい",
		hiragana: "へいわみらい"
	},
	{
		original: "北海道通運",
		hiragana: "ほっかいどうつううん"
	},
	{
		original: "ハナワ物流",
		hiragana: "はなわぶつりゅう"
	},
	{
		original: "中部急送",
		hiragana: "ちゅうぶきゅうそう"
	},
	{
		original: "曙運輸",
		hiragana: "あけぼのうんゆ"
	},
	{
		original: "北央貨物運輸",
		hiragana: "きたおうかもつうんゆ"
	},
	{
		original: "東海ローディング",
		hiragana: "とうかいろーでぃんぐ"
	},
	{
		original: "福岡センコー運輸",
		hiragana: "ふくおかせんこーうんゆ"
	},
	{
		original: "相馬輸送",
		hiragana: "そうまゆそう"
	},
	{
		original: "須賀川東部運送",
		hiragana: "すかがわとうぶうんそう"
	},
	{
		original: "八下田陸運",
		hiragana: "はちしもだりくうん"
	},
	{
		original: "凪物流",
		hiragana: "なぎぶつりゅう"
	},
	{
		original: "鈴与カーゴネット静岡",
		hiragana: "すずよかーごねっとしずおか"
	},
	{
		original: "三和ロジコム",
		hiragana: "さんわろじこむ"
	},
	{
		original: "スカイインテック",
		hiragana: "すかいいんてっく"
	},
	{
		original: "森洋運輸",
		hiragana: "もりひろしうんゆ"
	},
	{
		original: "明送",
		hiragana: "めいそう"
	},
	{
		original: "柳川合同トランスポート",
		hiragana: "やながわごうどうとらんすぽーと"
	},
	{
		original: "ＮＺサービス",
		hiragana: "ＮＺさーびす"
	},
	{
		original: "鹿児島海陸運送",
		hiragana: "かこしまかいりくうんそう"
	},
	{
		original: "名孝高速",
		hiragana: "めいよしたかそく"
	},
	{
		original: "丸喜運輸",
		hiragana: "まるきうんゆ"
	},
	{
		original: "三池港物流",
		hiragana: "みいけこうぶつりゅう"
	},
	{
		original: "クミカ物流",
		hiragana: "くみかぶつりゅう"
	},
	{
		original: "東西運輸",
		hiragana: "とうざいうんゆ"
	},
	{
		original: "柳田運輸",
		hiragana: "やなぎだうんゆ"
	},
	{
		original: "石松商会",
		hiragana: "いしまつしょうかい"
	},
	{
		original: "喜美運送",
		hiragana: "きみうんそう"
	},
	{
		original: "ハーコブ",
		hiragana: "はーこぶ"
	},
	{
		original: "クレハ運輸",
		hiragana: "くれはうんゆ"
	},
	{
		original: "滋賀近交運輸倉庫",
		hiragana: "しがきんこううんゆそうこ"
	},
	{
		original: "豪美",
		hiragana: "ごうび"
	},
	{
		original: "シーバロジスティクスジャパン",
		hiragana: "しーばろじすてぃくすじゃぱん"
	},
	{
		original: "上伊那貨物自動車",
		hiragana: "かみいなかもつじどうしゃ"
	},
	{
		original: "丸文",
		hiragana: "まるぶん"
	},
	{
		original: "ムロオ北海道",
		hiragana: "むろおほっかいどう"
	},
	{
		original: "諏訪梱包運輸",
		hiragana: "すわこんぽううんゆ"
	},
	{
		original: "福岡トランス",
		hiragana: "ふくおかとらんす"
	},
	{
		original: "ニッポー",
		hiragana: "にっぽー"
	},
	{
		original: "南商事",
		hiragana: "みなみしょうじ"
	},
	{
		original: "しらいトランク・サポート",
		hiragana: "しらいとらんく・さぽーと"
	},
	{
		original: "日通名古屋運輸",
		hiragana: "にっつうなごやうんゆ"
	},
	{
		original: "有限会社山城陸運",
		hiragana: "ゆうげんがいしゃやましろりくうん"
	},
	{
		original: "東京アンデス物流",
		hiragana: "とうきょうあんですぶつりゅう"
	},
	{
		original: "滋賀運送甲賀",
		hiragana: "しがうんそうこうか"
	},
	{
		original: "武知",
		hiragana: "たけち"
	},
	{
		original: "ミタカロジスティクス",
		hiragana: "みたかろじすてぃくす"
	},
	{
		original: "広菱倉庫運輸",
		hiragana: "こうひしそうこうんゆ"
	},
	{
		original: "北関東陸運",
		hiragana: "きたかんとうりくうん"
	},
	{
		original: "カネヨ運輸",
		hiragana: "かねようんゆ"
	},
	{
		original: "エス・ケー・ライン",
		hiragana: "えす・けー・らいん"
	},
	{
		original: "タイヨウ",
		hiragana: "たいよう"
	},
	{
		original: "三友物流",
		hiragana: "みつともぶつりゅう"
	},
	{
		original: "三和運送事業",
		hiragana: "さんわうんそうじぎょう"
	},
	{
		original: "マイシン",
		hiragana: "まいしん"
	},
	{
		original: "桑原運輸",
		hiragana: "くわはらうんゆ"
	},
	{
		original: "藤川商運",
		hiragana: "ふじかわしょううん"
	},
	{
		original: "讀宣運輸",
		hiragana: "どくせんうんゆ"
	},
	{
		original: "エフティーライン",
		hiragana: "えふてぃーらいん"
	},
	{
		original: "ベア・ロジコ",
		hiragana: "べあ・ろじこ"
	},
	{
		original: "エー・ディー・エス",
		hiragana: "えー・でぃー・えす"
	},
	{
		original: "西部ガス都市開発",
		hiragana: "せいぶがすとしかいはつ"
	},
	{
		original: "大阪西部運輸",
		hiragana: "おおさかせいぶうんゆ"
	},
	{
		original: "宮崎運輸",
		hiragana: "みやざきうんゆ"
	},
	{
		original: "共栄運輸",
		hiragana: "きょうえいうんゆ"
	},
	{
		original: "東武デリバリー",
		hiragana: "とうぶでりばりー"
	},
	{
		original: "小島",
		hiragana: "こじま"
	},
	{
		original: "川一産業",
		hiragana: "かわいちさんぎょう"
	},
	{
		original: "エクセディ物流",
		hiragana: "えくせでぃぶつりゅう"
	},
	{
		original: "東京三友",
		hiragana: "とうきょうみつとも"
	},
	{
		original: "タイセイ",
		hiragana: "たいせい"
	},
	{
		original: "池田自動車運輸",
		hiragana: "いけだじどうしゃうんゆ"
	},
	{
		original: "善光寺白馬電鉄",
		hiragana: "ぜんこうじはくばでんてつ"
	},
	{
		original: "丸新舎",
		hiragana: "まるしんしゃ"
	},
	{
		original: "シャープジャスダロジスティクス",
		hiragana: "しゃーぷじゃすだろじすてぃくす"
	},
	{
		original: "ビルディング・ブックセンター",
		hiragana: "びるでぃんぐ・ぶっくせんたー"
	},
	{
		original: "大阪北陸急配",
		hiragana: "おおさかほくりくきゅうはい"
	},
	{
		original: "ジャパンロジコム",
		hiragana: "じゃぱんろじこむ"
	},
	{
		original: "イースタン・カーライナー",
		hiragana: "いーすたん・かーらいなー"
	},
	{
		original: "早川運輸",
		hiragana: "はやかわうんゆ"
	},
	{
		original: "大森運送",
		hiragana: "おおもりうんそう"
	},
	{
		original: "日本ＷｅＰ流通",
		hiragana: "にっぽんＷｅＰりゅうつう"
	},
	{
		original: "吉田運輸倉庫",
		hiragana: "よしだうんゆそうこ"
	},
	{
		original: "有限会社大輪輸送",
		hiragana: "ゆうげんがいしゃたいりんゆそう"
	},
	{
		original: "Ｊ・ＦＡＩＲ",
		hiragana: "Ｊ・ＦＡＩＲ"
	},
	{
		original: "浜田運送",
		hiragana: "はまだうんそう"
	},
	{
		original: "藤伸",
		hiragana: "ふじしん"
	},
	{
		original: "ＯＴＫ",
		hiragana: "ＯＴＫ"
	},
	{
		original: "興和ロジスティクス",
		hiragana: "こうわろじすてぃくす"
	},
	{
		original: "西田商運",
		hiragana: "にしだしょううん"
	},
	{
		original: "フードレック",
		hiragana: "ふーどれっく"
	},
	{
		original: "エヌエヌ商事",
		hiragana: "えぬえぬしょうじ"
	},
	{
		original: "日通宮崎運輸",
		hiragana: "にっつうみやざきうんゆ"
	},
	{
		original: "有限会社天申運輸",
		hiragana: "ゆうげんがいしゃてんさるうんゆ"
	},
	{
		original: "実勝運輸有限会社",
		hiragana: "みしょううんゆゆうげんがいしゃ"
	},
	{
		original: "北海運輸",
		hiragana: "ほっかいうんゆ"
	},
	{
		original: "センコー住宅物流",
		hiragana: "せんこーじゅうたくぶつりゅう"
	},
	{
		original: "サンエックス",
		hiragana: "さんえっくす"
	},
	{
		original: "八女急送",
		hiragana: "やめきゅうそう"
	},
	{
		original: "アクティオトランスポート",
		hiragana: "あくてぃおとらんすぽーと"
	},
	{
		original: "生興運送",
		hiragana: "なまきょううんそう"
	},
	{
		original: "サンワテクニカルパートナーズ",
		hiragana: "さんわてくにかるぱーとなーず"
	},
	{
		original: "東日本エース",
		hiragana: "ひがしにほんえーす"
	},
	{
		original: "筑波物流",
		hiragana: "つくばぶつりゅう"
	},
	{
		original: "ペガサス運輸",
		hiragana: "ぺがさすうんゆ"
	},
	{
		original: "ＳＢＳグローバルネットワーク",
		hiragana: "ＳＢＳぐろーばるねっとわーく"
	},
	{
		original: "伊藤陸運",
		hiragana: "いとうりくうん"
	},
	{
		original: "栃雪",
		hiragana: "とちゆき"
	},
	{
		original: "東京港運送",
		hiragana: "とうきょうこううんそう"
	},
	{
		original: "帝人物流",
		hiragana: "ていじんぶつりゅう"
	},
	{
		original: "ＪＡアグリライン石川",
		hiragana: "ＪＡあぐりらいんいしかわ"
	},
	{
		original: "新日本ロジ",
		hiragana: "しんにほんろじ"
	},
	{
		original: "ナチロジスティクス",
		hiragana: "なちろじすてぃくす"
	},
	{
		original: "旭川通運",
		hiragana: "あさひかわつううん"
	},
	{
		original: "仙台運送",
		hiragana: "せんだいうんそう"
	},
	{
		original: "福井トナミ運輸",
		hiragana: "ふくいとなみうんゆ"
	},
	{
		original: "毎通運輸",
		hiragana: "まいつううんゆ"
	},
	{
		original: "岡山西部運輸",
		hiragana: "おかやませいぶうんゆ"
	},
	{
		original: "星和",
		hiragana: "せいわ"
	},
	{
		original: "総武物流",
		hiragana: "そうぶぶつりゅう"
	},
	{
		original: "栄進物流",
		hiragana: "えいしんぶつりゅう"
	},
	{
		original: "サカシード運輸",
		hiragana: "さかしーどうんゆ"
	},
	{
		original: "二葉物流システム",
		hiragana: "ふたばぶつりゅうしすてむ"
	},
	{
		original: "タキザキロジスティクス",
		hiragana: "たきざきろじすてぃくす"
	},
	{
		original: "大王海運物流",
		hiragana: "だいおうかいうんぶつりゅう"
	},
	{
		original: "ハンワ",
		hiragana: "はんわ"
	},
	{
		original: "司西日本",
		hiragana: "つかさにしにほん"
	},
	{
		original: "ランドキャリー",
		hiragana: "らんどきゃりー"
	},
	{
		original: "ヤマタネロジスティクス",
		hiragana: "やまたねろじすてぃくす"
	},
	{
		original: "昌栄高速運輸",
		hiragana: "しょうえいこうそくうんゆ"
	},
	{
		original: "アヤカエキスプレス",
		hiragana: "あやかえきすぷれす"
	},
	{
		original: "スターゼンロジスティクス",
		hiragana: "すたーぜんろじすてぃくす"
	},
	{
		original: "西濃通運",
		hiragana: "せいのうつううん"
	},
	{
		original: "九栄運輸倉庫",
		hiragana: "きゅうえいうんゆそうこ"
	},
	{
		original: "大王海運",
		hiragana: "だいおうかいうん"
	},
	{
		original: "小笠運送",
		hiragana: "おがさうんそう"
	},
	{
		original: "京葉ロジコ",
		hiragana: "けいようろじこ"
	},
	{
		original: "太平運輸",
		hiragana: "たいへいうんゆ"
	},
	{
		original: "菱中海陸運輸",
		hiragana: "ひしなかうみりくうんゆ"
	},
	{
		original: "日清エンタープライズ",
		hiragana: "にっしんえんたーぷらいず"
	},
	{
		original: "藤友物流サービス",
		hiragana: "ふじともぶつりゅうさーびす"
	},
	{
		original: "岩井田運送",
		hiragana: "いわいたうんそう"
	},
	{
		original: "浜松倉庫",
		hiragana: "はままつそうこ"
	},
	{
		original: "尼高運輸",
		hiragana: "あまたかうんゆ"
	},
	{
		original: "丸重商事",
		hiragana: "まるじゅうしょうこと"
	},
	{
		original: "ひかり物流",
		hiragana: "ひかりぶつりゅう"
	},
	{
		original: "藤井運送",
		hiragana: "ふじいうんそう"
	},
	{
		original: "アイビーデリバリー",
		hiragana: "あいびーでりばりー"
	},
	{
		original: "藤木運送",
		hiragana: "ふじきうんそう"
	},
	{
		original: "ハンナ",
		hiragana: "はんな"
	},
	{
		original: "有限会社井上",
		hiragana: "ゆうげんがいしゃいのうえ"
	},
	{
		original: "日本運輸荷造",
		hiragana: "にっぽんうんゆにづくり"
	},
	{
		original: "帝北ロジスティックス",
		hiragana: "みかどきたろじすてぃっくす"
	},
	{
		original: "渡辺産業運輸",
		hiragana: "わたなべさんぎょううんゆ"
	},
	{
		original: "京浜ライン",
		hiragana: "けいひんらいん"
	},
	{
		original: "仙台日通運輸",
		hiragana: "せんだいにっつううんゆ"
	},
	{
		original: "九州プレス・サービス",
		hiragana: "きゅうしゅうぷれす・さーびす"
	},
	{
		original: "ジョイックス",
		hiragana: "じょいっくす"
	},
	{
		original: "アスクトランスポート",
		hiragana: "あすくとらんすぽーと"
	},
	{
		original: "マルエイトランスポート",
		hiragana: "まるえいとらんすぽーと"
	},
	{
		original: "福島運送",
		hiragana: "ふくしまうんそう"
	},
	{
		original: "親和工産",
		hiragana: "しんわこうさん"
	},
	{
		original: "山菱水産",
		hiragana: "やまびしすいさん"
	},
	{
		original: "大運",
		hiragana: "だいうん"
	},
	{
		original: "クラレイ",
		hiragana: "くられい"
	},
	{
		original: "熊谷産業",
		hiragana: "くまがやさんぎょう"
	},
	{
		original: "九州西部運輸",
		hiragana: "きゅうしゅうせいぶうんゆ"
	},
	{
		original: "有限会社丸野バンライン",
		hiragana: "ゆうげんがいしゃまるのばんらいん"
	},
	{
		original: "有限会社コーダ・ジャパン",
		hiragana: "ゆうげんがいしゃこーだ・じゃぱん"
	},
	{
		original: "三栄工業所",
		hiragana: "さんえいこうぎょうところ"
	},
	{
		original: "ナライ産業",
		hiragana: "ならいさんぎょう"
	},
	{
		original: "山中運輸",
		hiragana: "さんちゅううんゆ"
	},
	{
		original: "ユーティー・サービス",
		hiragana: "ゆーてぃー・さーびす"
	},
	{
		original: "斉藤商事",
		hiragana: "さいとうしょうじ"
	},
	{
		original: "武州運輸倉庫",
		hiragana: "ぶしゅううんゆそうこ"
	},
	{
		original: "シコクセイカ高速",
		hiragana: "しこくせいかこうそく"
	},
	{
		original: "セガ・ロジスティクスサービス",
		hiragana: "せが・ろじすてぃくすさーびす"
	},
	{
		original: "佐賀運輸",
		hiragana: "さがうんゆ"
	},
	{
		original: "ダイニチ",
		hiragana: "だいにち"
	},
	{
		original: "郡東エクスプレス",
		hiragana: "ぐんひがしえくすぷれす"
	},
	{
		original: "平賀運送",
		hiragana: "ひらがうんそう"
	},
	{
		original: "トヨタ輸送東北センター",
		hiragana: "とよたゆそうとうほくせんたー"
	},
	{
		original: "丸吉ロジ",
		hiragana: "まるよしろじ"
	},
	{
		original: "東電運輸",
		hiragana: "とうでんうんゆ"
	},
	{
		original: "サンキュウ・トランスポート・東京",
		hiragana: "さんきゅう・とらんすぽーと・とうきょう"
	},
	{
		original: "草水運送",
		hiragana: "そうすいうんそう"
	},
	{
		original: "セイコー物流",
		hiragana: "せいこーぶつりゅう"
	},
	{
		original: "岩崎運送",
		hiragana: "いわさきうんそう"
	},
	{
		original: "井阪運輸",
		hiragana: "いさかうんゆ"
	},
	{
		original: "高出運輸有限会社",
		hiragana: "たかしゅつうんゆゆうげんがいしゃ"
	},
	{
		original: "仙台オート輸送",
		hiragana: "せんだいおーとゆそう"
	},
	{
		original: "沓名産業",
		hiragana: "くつなさんぎょう"
	},
	{
		original: "明石デリバリー",
		hiragana: "あかしでりばりー"
	},
	{
		original: "萬運輸",
		hiragana: "まんうんゆ"
	},
	{
		original: "丸周運送",
		hiragana: "まるしゅううんそう"
	},
	{
		original: "スカイ運輸",
		hiragana: "すかいうんゆ"
	},
	{
		original: "三代サービス",
		hiragana: "さんだいさーびす"
	},
	{
		original: "丸運トラック",
		hiragana: "まるうんとらっく"
	},
	{
		original: "協和運輸倉庫",
		hiragana: "きょうわうんゆそうこ"
	},
	{
		original: "比良松",
		hiragana: "ひらまつ"
	},
	{
		original: "東海興運",
		hiragana: "とうかいきょううん"
	},
	{
		original: "全日本ライン",
		hiragana: "ぜんにほんらいん"
	},
	{
		original: "サクラ",
		hiragana: "さくら"
	},
	{
		original: "大友ロジスティクスサービス",
		hiragana: "おおともろじすてぃくすさーびす"
	},
	{
		original: "トラストシステム",
		hiragana: "とらすとしすてむ"
	},
	{
		original: "オオタカ",
		hiragana: "おおたか"
	},
	{
		original: "大宮通運",
		hiragana: "おおみやつううん"
	},
	{
		original: "ニシヒロ",
		hiragana: "にしひろ"
	},
	{
		original: "サンコー運輸",
		hiragana: "さんこーうんゆ"
	},
	{
		original: "有限会社徳友エクスプレス",
		hiragana: "ゆうげんがいしゃとくともえくすぷれす"
	},
	{
		original: "豊橋港陸運",
		hiragana: "とよはしみなとりくうん"
	},
	{
		original: "有限会社ケーティーエス",
		hiragana: "ゆうげんがいしゃけーてぃーえす"
	},
	{
		original: "啓和運輸",
		hiragana: "ひろかずうんゆ"
	},
	{
		original: "環境通信輸送",
		hiragana: "かんきょうつうしんゆそう"
	},
	{
		original: "日正運輸",
		hiragana: "にちしょううんゆ"
	},
	{
		original: "橋爪運輸",
		hiragana: "はしづめうんゆ"
	},
	{
		original: "埼玉西濃運輸",
		hiragana: "さいたませいのううんゆ"
	},
	{
		original: "岩見沢通運",
		hiragana: "いわみざわつううん"
	},
	{
		original: "浪速通運",
		hiragana: "なにわつううん"
	},
	{
		original: "トーワカーゴ",
		hiragana: "とーわかーご"
	},
	{
		original: "小田運輸",
		hiragana: "おだうんゆ"
	},
	{
		original: "キチナンロジスティクス",
		hiragana: "きちなんろじすてぃくす"
	},
	{
		original: "ヘルティー",
		hiragana: "へるてぃー"
	},
	{
		original: "旭器機サービス",
		hiragana: "あさひききさーびす"
	},
	{
		original: "スワンサービス",
		hiragana: "すわんさーびす"
	},
	{
		original: "エフピコ物流",
		hiragana: "えふぴこぶつりゅう"
	},
	{
		original: "秋元運輸倉庫",
		hiragana: "あきもとうんゆそうこ"
	},
	{
		original: "兵食運輸",
		hiragana: "へいしょくうんゆ"
	},
	{
		original: "コバヤシユニオン",
		hiragana: "こばやしゆにおん"
	},
	{
		original: "長谷川運輸",
		hiragana: "はせがわうんゆ"
	},
	{
		original: "日通川崎運輸",
		hiragana: "にっつうかわさきうんゆ"
	},
	{
		original: "丸一運輸",
		hiragana: "まるいちうんゆ"
	},
	{
		original: "ＣＢｃｌｏｕｄ",
		hiragana: "ＣＢｃｌｏｕｄ"
	},
	{
		original: "光運輸",
		hiragana: "ひかりうんゆ"
	},
	{
		original: "是則北陸運輸",
		hiragana: "これのりほくりくうんゆ"
	},
	{
		original: "オリタ物流",
		hiragana: "おりたぶつりゅう"
	},
	{
		original: "チクホー",
		hiragana: "ちくほー"
	},
	{
		original: "マルフク産業",
		hiragana: "まるふくさんぎょう"
	},
	{
		original: "日酸運輸",
		hiragana: "にちさんうんゆ"
	},
	{
		original: "三進運送",
		hiragana: "さっちうんそう"
	},
	{
		original: "ＯＤＡ",
		hiragana: "ＯＤＡ"
	},
	{
		original: "東邦運輸",
		hiragana: "とうほううんゆ"
	},
	{
		original: "大浜運輸",
		hiragana: "おおはまうんゆ"
	},
	{
		original: "相模運輸倉庫",
		hiragana: "さがみうんゆそうこ"
	},
	{
		original: "埼玉配送",
		hiragana: "さいたまはいそう"
	},
	{
		original: "円谷運送店",
		hiragana: "つぶらやうんそうてん"
	},
	{
		original: "城東トランスポート",
		hiragana: "じょうとうとらんすぽーと"
	},
	{
		original: "山梨名鉄運輸",
		hiragana: "やまなしめいてつうんゆ"
	},
	{
		original: "三八五通運",
		hiragana: "さんぱちごつううん"
	},
	{
		original: "栗林海陸輸送",
		hiragana: "くりばやしかいりくゆそう"
	},
	{
		original: "ＬＮＪ小泉",
		hiragana: "ＬＮＪこいずみ"
	},
	{
		original: "サンワリューツー",
		hiragana: "さんわりゅーつー"
	},
	{
		original: "白馬物流",
		hiragana: "はくばぶつりゅう"
	},
	{
		original: "有限会社届晋運輸",
		hiragana: "ゆうげんがいしゃとどけすすむうんゆ"
	},
	{
		original: "有沢総業",
		hiragana: "ありさわそうぎょう"
	},
	{
		original: "イトキュー",
		hiragana: "いときゅー"
	},
	{
		original: "釜渕運送有限会社",
		hiragana: "かまぶちうんそうゆうげんがいしゃ"
	},
	{
		original: "岡山県貨物運送",
		hiragana: "おかやまけんかもつうんそう"
	},
	{
		original: "不二倉業",
		hiragana: "ふじくらぎょう"
	},
	{
		original: "ビートレーディング",
		hiragana: "びーとれーでぃんぐ"
	},
	{
		original: "日本塩回送",
		hiragana: "にっぽんしおかいそう"
	},
	{
		original: "宮崎センコー運輸整備",
		hiragana: "みやざきせんこーうんゆせいび"
	},
	{
		original: "京都通運",
		hiragana: "きょうとつううん"
	},
	{
		original: "ＷＯＲＫＳ",
		hiragana: "ＷＯＲＫＳ"
	},
	{
		original: "サンライン",
		hiragana: "さんらいん"
	},
	{
		original: "大松運輸",
		hiragana: "おおまつうんゆ"
	},
	{
		original: "大谷総業運輸倉庫",
		hiragana: "おおたにそうぎょううんゆそうこ"
	},
	{
		original: "幸和運輸",
		hiragana: "ゆきかずうんゆ"
	},
	{
		original: "角榮運搬有限会社",
		hiragana: "かくえいうんぱんゆうげんがいしゃ"
	},
	{
		original: "Ｍ’ｓ",
		hiragana: "Ｍ’ｓ"
	},
	{
		original: "鬼怒川運輸",
		hiragana: "きぬがわうんゆ"
	},
	{
		original: "東群エクスプレス",
		hiragana: "ひがしぐんえくすぷれす"
	},
	{
		original: "沖縄ロジテム",
		hiragana: "おきなわろじてむ"
	},
	{
		original: "宮田運送",
		hiragana: "みやたうんそう"
	},
	{
		original: "新潟カーゴサービス",
		hiragana: "にいがたかーごさーびす"
	},
	{
		original: "塩釜陸運",
		hiragana: "しおがまりくうん"
	},
	{
		original: "鹿児島トランスポート",
		hiragana: "かこしまとらんすぽーと"
	},
	{
		original: "オカゼン",
		hiragana: "おかぜん"
	},
	{
		original: "寿ロジコム",
		hiragana: "ひさしろじこむ"
	},
	{
		original: "トランコムＴＳ",
		hiragana: "とらんこむＴＳ"
	},
	{
		original: "クリアライン",
		hiragana: "くりあらいん"
	},
	{
		original: "立川運輸",
		hiragana: "たちかわうんゆ"
	},
	{
		original: "日本ロジコム",
		hiragana: "にっぽんろじこむ"
	},
	{
		original: "富士電物流",
		hiragana: "ふじでんぶつりゅう"
	},
	{
		original: "エービーカーゴ西日本",
		hiragana: "えーびーかーごにしにほん"
	},
	{
		original: "麒麟倉庫",
		hiragana: "きりんそうこ"
	},
	{
		original: "植西運送",
		hiragana: "しょくにしうんそう"
	},
	{
		original: "ブルーライン",
		hiragana: "ぶるーらいん"
	},
	{
		original: "沖縄ＮＸエアカーゴサービス",
		hiragana: "おきなわＮＸえあかーごさーびす"
	},
	{
		original: "常陽運送",
		hiragana: "じょうよううんそう"
	},
	{
		original: "物流システム",
		hiragana: "ぶつりゅうしすてむ"
	},
	{
		original: "ヨシケイ富山",
		hiragana: "よしけいとやま"
	},
	{
		original: "有限会社𣳾興運輸",
		hiragana: "ゆうげんがいしゃゆうげんがいしゃきょううんゆ"
	},
	{
		original: "三条日通運輸",
		hiragana: "さんじょうにっつううんゆ"
	},
	{
		original: "共立運輸",
		hiragana: "きょうりつうんゆ"
	},
	{
		original: "室山運輸",
		hiragana: "むろやまうんゆ"
	},
	{
		original: "篠崎運送倉庫",
		hiragana: "しのざきうんそうそうこ"
	},
	{
		original: "中国物流サービス",
		hiragana: "ちゅうごくぶつりゅうさーびす"
	},
	{
		original: "有限会社共成物流",
		hiragana: "ゆうげんがいしゃともせいぶつりゅう"
	},
	{
		original: "森井運送有限会社",
		hiragana: "もりいうんそうゆうげんがいしゃ"
	},
	{
		original: "常南通運",
		hiragana: "じょうなんつううん"
	},
	{
		original: "秋田三八五流通",
		hiragana: "あきたさんぱちごりゅうつう"
	},
	{
		original: "巻運送",
		hiragana: "かんうんそう"
	},
	{
		original: "ニッカコーポレーション",
		hiragana: "にっかこーぽれーしょん"
	},
	{
		original: "ＫＵＢＯＸＴ",
		hiragana: "ＫＵＢＯＸＴ"
	},
	{
		original: "上組陸運",
		hiragana: "かみぐみりくうん"
	},
	{
		original: "春日井運輸",
		hiragana: "かすがいうんゆ"
	},
	{
		original: "三重近物通運",
		hiragana: "みえきんものつううん"
	},
	{
		original: "下松運輸",
		hiragana: "くだまつうんゆ"
	},
	{
		original: "ＳＡＮＷＡ・ＴＲＡＮＳ・ＮＥＴ",
		hiragana: "ＳＡＮＷＡ・ＴＲＡＮＳ・ＮＥＴ"
	},
	{
		original: "新生倉庫運輸",
		hiragana: "しんせいそうこうんゆ"
	},
	{
		original: "浜松委托運送",
		hiragana: "はままついたくうんそう"
	},
	{
		original: "関東トーウン",
		hiragana: "かんとうとーうん"
	},
	{
		original: "中央運送",
		hiragana: "ちゅうおううんそう"
	},
	{
		original: "谷川運輸倉庫",
		hiragana: "たにがわうんゆそうこ"
	},
	{
		original: "鹿島港湾運送",
		hiragana: "かしまこうわんうんそう"
	},
	{
		original: "共同陸運",
		hiragana: "きょうどうりくうん"
	},
	{
		original: "新潟栄運輸",
		hiragana: "にいがたえいうんゆ"
	},
	{
		original: "サクマ運輸",
		hiragana: "さくまうんゆ"
	},
	{
		original: "サンライズ",
		hiragana: "さんらいず"
	},
	{
		original: "大昇物流",
		hiragana: "だいのぼるぶつりゅう"
	},
	{
		original: "山三",
		hiragana: "さんざ"
	},
	{
		original: "佐野物流センター",
		hiragana: "さのぶつりゅうせんたー"
	},
	{
		original: "日通山形運輸",
		hiragana: "にっつうやまがたうんゆ"
	},
	{
		original: "信濃陸送",
		hiragana: "しなのりくそう"
	},
	{
		original: "エムケー物流",
		hiragana: "えむけーぶつりゅう"
	},
	{
		original: "マルモト",
		hiragana: "まるもと"
	},
	{
		original: "タカスズ",
		hiragana: "たかすず"
	},
	{
		original: "瀬戸運輸",
		hiragana: "せとうんゆ"
	},
	{
		original: "ニチレイロジグループ本社",
		hiragana: "にちれいろじぐるーぷほんしゃ"
	},
	{
		original: "太陽サカコー",
		hiragana: "たいようさかこー"
	},
	{
		original: "ツバメロジス",
		hiragana: "つばめろじす"
	},
	{
		original: "オカゼン",
		hiragana: "おかぜん"
	},
	{
		original: "エース総合運輸",
		hiragana: "えーすそうごううんゆ"
	},
	{
		original: "井口産交",
		hiragana: "いのくちさんこう"
	},
	{
		original: "ジェイアール貨物・南関東ロジスティクス",
		hiragana: "じぇいあーるかもつ・みなみかんとうろじすてぃくす"
	},
	{
		original: "竹田運輸",
		hiragana: "たけだうんゆ"
	},
	{
		original: "有限会社梶運送",
		hiragana: "ゆうげんがいしゃかじうんそう"
	},
	{
		original: "奥堀",
		hiragana: "おくほり"
	},
	{
		original: "西宮高速運輸",
		hiragana: "にしのみやこうそくうんゆ"
	},
	{
		original: "松木運輸",
		hiragana: "まつきうんゆ"
	},
	{
		original: "肥前通運",
		hiragana: "ひぜんつううん"
	},
	{
		original: "ミツノリ",
		hiragana: "みつのり"
	},
	{
		original: "鈴信運送",
		hiragana: "すずしんうんそう"
	},
	{
		original: "伊藤運輸倉庫",
		hiragana: "いとううんゆそうこ"
	},
	{
		original: "南信重機興業",
		hiragana: "なんしんじゅうきこうぎょう"
	},
	{
		original: "愛東運輸",
		hiragana: "あいとううんゆ"
	},
	{
		original: "神港通運",
		hiragana: "しんこうつううん"
	},
	{
		original: "有田陸運",
		hiragana: "ありだりくうん"
	},
	{
		original: "東京運搬社",
		hiragana: "とうきょううんぱんしゃ"
	},
	{
		original: "札幌急配",
		hiragana: "さっぽろきゅうはい"
	},
	{
		original: "志和貨物自動車",
		hiragana: "しわかもつじどうしゃ"
	},
	{
		original: "東海ワークス",
		hiragana: "とうかいわーくす"
	},
	{
		original: "関東いづみ運輸",
		hiragana: "かんとういづみうんゆ"
	},
	{
		original: "水島運輸",
		hiragana: "みずしまうんゆ"
	},
	{
		original: "中央高速運輸",
		hiragana: "ちゅうおうこうそくうんゆ"
	},
	{
		original: "旭陸運倉庫",
		hiragana: "あさひりくうんそうこ"
	},
	{
		original: "ヒダ物流",
		hiragana: "ひだぶつりゅう"
	},
	{
		original: "ニチニチ物流",
		hiragana: "にちにちぶつりゅう"
	},
	{
		original: "コンポート",
		hiragana: "こんぽーと"
	},
	{
		original: "ノーススタートランスポート",
		hiragana: "のーすすたーとらんすぽーと"
	},
	{
		original: "ヤマゼンロジスティクス",
		hiragana: "やまぜんろじすてぃくす"
	},
	{
		original: "ネットワークス",
		hiragana: "ねっとわーくす"
	},
	{
		original: "いちば流通",
		hiragana: "いちばりゅうつう"
	},
	{
		original: "有限会社ワンプラスワン",
		hiragana: "ゆうげんがいしゃわんぷらすわん"
	},
	{
		original: "富国運輸",
		hiragana: "ふこくうんゆ"
	},
	{
		original: "増山貨物自動車",
		hiragana: "ますやまかもつじどうしゃ"
	},
	{
		original: "常磐運送",
		hiragana: "じょうばんうんそう"
	},
	{
		original: "日鉄物流釜石",
		hiragana: "にってつぶつりゅうかまいし"
	},
	{
		original: "トーショー九州",
		hiragana: "とーしょーきゅうしゅう"
	},
	{
		original: "西福運送",
		hiragana: "さいふくうんそう"
	},
	{
		original: "上電通運",
		hiragana: "うえでんつううん"
	},
	{
		original: "三重センコーロジ",
		hiragana: "みえせんこーろじ"
	},
	{
		original: "サンエーサービス",
		hiragana: "さんえーさーびす"
	},
	{
		original: "有限会社エース",
		hiragana: "ゆうげんがいしゃえーす"
	},
	{
		original: "ニップンロジス",
		hiragana: "にっぷんろじす"
	},
	{
		original: "ヨシダ商事運輸",
		hiragana: "よしだしょうじうんゆ"
	},
	{
		original: "旭運輸",
		hiragana: "あさひうんゆ"
	},
	{
		original: "栗東総合産業",
		hiragana: "りっとうそうごうさんぎょう"
	},
	{
		original: "頸城運送倉庫",
		hiragana: "くびきうんそうそうこ"
	},
	{
		original: "スリーティ運輸",
		hiragana: "すりーてぃうんゆ"
	},
	{
		original: "池島運輸",
		hiragana: "いけじまうんゆ"
	},
	{
		original: "シンコー",
		hiragana: "しんこー"
	},
	{
		original: "ダイワ産業",
		hiragana: "だいわさんぎょう"
	},
	{
		original: "松栄運輸",
		hiragana: "しょうえいうんゆ"
	},
	{
		original: "室蘭海陸通運",
		hiragana: "むろらんかいりくつううん"
	},
	{
		original: "ホーシン",
		hiragana: "ほーしん"
	},
	{
		original: "イワハシエキスプレス",
		hiragana: "いわはしえきすぷれす"
	},
	{
		original: "北関東啓和運輸",
		hiragana: "きたかんとうひろかずうんゆ"
	},
	{
		original: "新運輸",
		hiragana: "しんうんゆ"
	},
	{
		original: "中越ロジテム",
		hiragana: "なかごしろじてむ"
	},
	{
		original: "丸和通運",
		hiragana: "まるわつううん"
	},
	{
		original: "あじふく",
		hiragana: "あじふく"
	},
	{
		original: "関東サンギ",
		hiragana: "かんとうさんぎ"
	},
	{
		original: "札幌定温運輸",
		hiragana: "さっぽろていおんうんゆ"
	},
	{
		original: "八潮運輸",
		hiragana: "やしおうんゆ"
	},
	{
		original: "八洲陸運",
		hiragana: "はっしゅうりくうん"
	},
	{
		original: "伊勢湾倉庫",
		hiragana: "いせわんそうこ"
	},
	{
		original: "ティラドロジスティクス",
		hiragana: "てぃらどろじすてぃくす"
	},
	{
		original: "宮石運輸",
		hiragana: "みやいしうんゆ"
	},
	{
		original: "福岡ひまわり運送",
		hiragana: "ふくおかひまわりうんそう"
	},
	{
		original: "陣上工業",
		hiragana: "じんうえこうぎょう"
	},
	{
		original: "東京第一物流",
		hiragana: "とうきょうだいいちぶつりゅう"
	},
	{
		original: "和幸流通サービス",
		hiragana: "かずゆきりゅうつうさーびす"
	},
	{
		original: "吉川",
		hiragana: "よしかわ"
	},
	{
		original: "三和陸運",
		hiragana: "さんわりくうん"
	},
	{
		original: "ＬＪＰ",
		hiragana: "ＬＪＰ"
	},
	{
		original: "是則運輸倉庫",
		hiragana: "これのりうんゆそうこ"
	},
	{
		original: "ヨシケイライフスタイル",
		hiragana: "よしけいらいふすたいる"
	},
	{
		original: "宝和運輸",
		hiragana: "たからわうんゆ"
	},
	{
		original: "シンポジューム",
		hiragana: "しんぽじゅーむ"
	},
	{
		original: "ヤマカ山加運輸",
		hiragana: "やまかやまかうんゆ"
	},
	{
		original: "入丸",
		hiragana: "にゅうまる"
	},
	{
		original: "高野総合運輸",
		hiragana: "たかのそうごううんゆ"
	},
	{
		original: "北十",
		hiragana: "きたじゅう"
	},
	{
		original: "生沼運輸倉庫",
		hiragana: "なまぬまうんゆそうこ"
	},
	{
		original: "日通つくば運輸",
		hiragana: "にっつうつくばうんゆ"
	},
	{
		original: "ダイコー商運",
		hiragana: "だいこーしょううん"
	},
	{
		original: "大三運輸",
		hiragana: "おおみうんゆ"
	},
	{
		original: "三昭運輸",
		hiragana: "さんあきらうんゆ"
	},
	{
		original: "ダイセー日研",
		hiragana: "だいせーにちけん"
	},
	{
		original: "ジャスト物流",
		hiragana: "じゃすとぶつりゅう"
	},
	{
		original: "平野カーゴ",
		hiragana: "へいやかーご"
	},
	{
		original: "トーヨー・ロジテック",
		hiragana: "とーよー・ろじてっく"
	},
	{
		original: "ＬＮＪ神戸",
		hiragana: "ＬＮＪこうべ"
	},
	{
		original: "シンヨウ・ロジ",
		hiragana: "しんよう・ろじ"
	},
	{
		original: "戸塚運送",
		hiragana: "とつかうんそう"
	},
	{
		original: "東罐ロジテック",
		hiragana: "ひがしかんろじてっく"
	},
	{
		original: "理化トランスポート",
		hiragana: "りかとらんすぽーと"
	},
	{
		original: "トーシンロジテク",
		hiragana: "とーしんろじてく"
	},
	{
		original: "ウェルポート",
		hiragana: "うぇるぽーと"
	},
	{
		original: "光運輸",
		hiragana: "ひかりうんゆ"
	},
	{
		original: "京浜サプライズ",
		hiragana: "けいひんさぷらいず"
	},
	{
		original: "日成運輸",
		hiragana: "にっせいうんゆ"
	},
	{
		original: "大北運輸",
		hiragana: "おおきたうんゆ"
	},
	{
		original: "協和輸送",
		hiragana: "きょうわゆそう"
	},
	{
		original: "元木物流",
		hiragana: "もときぶつりゅう"
	},
	{
		original: "スワロートラック",
		hiragana: "すわろーとらっく"
	},
	{
		original: "石橋梱包運輸",
		hiragana: "いしばしこんぽううんゆ"
	},
	{
		original: "湊海運",
		hiragana: "みなとかいうん"
	},
	{
		original: "西東京ライナー",
		hiragana: "にしとうきょうらいなー"
	},
	{
		original: "サンネット物流",
		hiragana: "さんねっとぶつりゅう"
	},
	{
		original: "物流春日",
		hiragana: "ぶつりゅうかすが"
	},
	{
		original: "元気ジャパン",
		hiragana: "げんきじゃぱん"
	},
	{
		original: "スタンダード運輸",
		hiragana: "すたんだーどうんゆ"
	},
	{
		original: "福井口運送",
		hiragana: "ふくいくちうんそう"
	},
	{
		original: "コーヨー産業",
		hiragana: "こーよーさんぎょう"
	},
	{
		original: "ロジフォワード",
		hiragana: "ろじふぉわーど"
	},
	{
		original: "Ｋ．Ｕコーポレーション",
		hiragana: "Ｋ．Ｕこーぽれーしょん"
	},
	{
		original: "物流サポート",
		hiragana: "ぶつりゅうさぽーと"
	},
	{
		original: "ＨＳアローズ",
		hiragana: "ＨＳあろーず"
	},
	{
		original: "アオイトランスポート",
		hiragana: "あおいとらんすぽーと"
	},
	{
		original: "八代港運",
		hiragana: "やつしろみなとうん"
	},
	{
		original: "丸運ロジスティクス東海",
		hiragana: "まるうんろじすてぃくすとうかい"
	},
	{
		original: "魚沼運輸",
		hiragana: "うおぬまうんゆ"
	},
	{
		original: "東海通商",
		hiragana: "とうかいつうしょう"
	},
	{
		original: "飛鳥運輸",
		hiragana: "あすかうんゆ"
	},
	{
		original: "池島運輸",
		hiragana: "いけじまうんゆ"
	},
	{
		original: "南国輸送",
		hiragana: "なんごくゆそう"
	},
	{
		original: "三星海運",
		hiragana: "みつぼしかいうん"
	},
	{
		original: "セキトランスシステム",
		hiragana: "せきとらんすしすてむ"
	},
	{
		original: "西松浦通運",
		hiragana: "にしまつうらつううん"
	},
	{
		original: "豊里運輸",
		hiragana: "とよさとうんゆ"
	},
	{
		original: "サザン",
		hiragana: "さざん"
	},
	{
		original: "昌和商事",
		hiragana: "しょうわしょうじ"
	},
	{
		original: "ルート",
		hiragana: "るーと"
	},
	{
		original: "長野運送",
		hiragana: "ながのうんそう"
	},
	{
		original: "新潟鉄道荷物",
		hiragana: "にいがたてつどうにもつ"
	},
	{
		original: "新興運輸",
		hiragana: "しんこううんゆ"
	},
	{
		original: "ヨシノロジコ",
		hiragana: "よしのろじこ"
	},
	{
		original: "有限会社柏屋運送",
		hiragana: "ゆうげんがいしゃかしわやうんそう"
	},
	{
		original: "エムアンドジーロジスティクス",
		hiragana: "えむあんどじーろじすてぃくす"
	},
	{
		original: "神静流通センター",
		hiragana: "かみしずるとおりせんたー"
	},
	{
		original: "洛西貨物自動車",
		hiragana: "らくせいかもつじどうしゃ"
	},
	{
		original: "新生物流サービス",
		hiragana: "しんせいぶつりゅうさーびす"
	},
	{
		original: "秋印",
		hiragana: "あきいん"
	},
	{
		original: "ナニワ急便",
		hiragana: "なにわきゅうびん"
	},
	{
		original: "おもと急送",
		hiragana: "おもときゅうそう"
	},
	{
		original: "東京タイセイ",
		hiragana: "とうきょうたいせい"
	},
	{
		original: "青木運輸倉庫",
		hiragana: "あおきうんゆそうこ"
	},
	{
		original: "シンワ",
		hiragana: "しんわ"
	},
	{
		original: "有限会社堀兄弟運送",
		hiragana: "ゆうげんがいしゃほりきょうだいうんそう"
	},
	{
		original: "カリツー東日本",
		hiragana: "かりつーひがしにほん"
	},
	{
		original: "丸久運輸",
		hiragana: "まるきゅううんゆ"
	},
	{
		original: "エス陸送",
		hiragana: "えすりくそう"
	},
	{
		original: "甲府通運",
		hiragana: "こうふつううん"
	},
	{
		original: "サンエストランテック",
		hiragana: "さんえすとらんてっく"
	},
	{
		original: "丸徳運送",
		hiragana: "まるとくうんそう"
	},
	{
		original: "白鷹運送",
		hiragana: "しらたかうんそう"
	},
	{
		original: "ワカスギ",
		hiragana: "わかすぎ"
	},
	{
		original: "ワイケイ・コーポレイション有限会社",
		hiragana: "わいけい・こーぽれいしょんゆうげんがいしゃ"
	},
	{
		original: "三和梱包運輸",
		hiragana: "さんわこんぽううんゆ"
	},
	{
		original: "笠子流通",
		hiragana: "かさごりゅうつう"
	},
	{
		original: "東基サービス",
		hiragana: "ひがしもとさーびす"
	},
	{
		original: "関越物流",
		hiragana: "かんえつぶつりゅう"
	},
	{
		original: "マルイワ",
		hiragana: "まるいわ"
	},
	{
		original: "日豊輸送",
		hiragana: "にっぽうゆそう"
	},
	{
		original: "エスライン各務原",
		hiragana: "えすらいんかかみがはら"
	},
	{
		original: "カンナナ流通運輸",
		hiragana: "かんななりゅうつううんゆ"
	},
	{
		original: "国勝運送",
		hiragana: "くにかつうんそう"
	},
	{
		original: "大信物流輸送",
		hiragana: "たいしんぶつりゅうゆそう"
	},
	{
		original: "三生運輸",
		hiragana: "さんなまうんゆ"
	},
	{
		original: "明穂輸送",
		hiragana: "あきほゆそう"
	},
	{
		original: "ティーアールエス",
		hiragana: "てぃーあーるえす"
	},
	{
		original: "エーシーネットワーク",
		hiragana: "えーしーねっとわーく"
	},
	{
		original: "大高運輸",
		hiragana: "おおだかうんゆ"
	},
	{
		original: "ＭＧＣトランスポート",
		hiragana: "ＭＧＣとらんすぽーと"
	},
	{
		original: "ＧＫＵ",
		hiragana: "ＧＫＵ"
	},
	{
		original: "シナノライン",
		hiragana: "しなのらいん"
	},
	{
		original: "西博運輸",
		hiragana: "にしひろしうんゆ"
	},
	{
		original: "大剛運輸",
		hiragana: "たいごううんゆ"
	},
	{
		original: "トラスト物流",
		hiragana: "とらすとぶつりゅう"
	},
	{
		original: "丸喜運輸",
		hiragana: "まるきうんゆ"
	},
	{
		original: "芳和輸送",
		hiragana: "よしかずゆそう"
	},
	{
		original: "グンリック",
		hiragana: "ぐんりっく"
	},
	{
		original: "静岡三和梱包運輸",
		hiragana: "しずおかさんわこんぽううんゆ"
	},
	{
		original: "ＫＥＩＹＯ",
		hiragana: "ＫＥＩＹＯ"
	},
	{
		original: "有限会社藤沢急送",
		hiragana: "ゆうげんがいしゃふじさわきゅうそう"
	},
	{
		original: "エフビーエス",
		hiragana: "えふびーえす"
	},
	{
		original: "山里物流サービス",
		hiragana: "やまざとぶつりゅうさーびす"
	},
	{
		original: "相互運輸",
		hiragana: "そうごうんゆ"
	},
	{
		original: "渡辺運輸",
		hiragana: "わたなべうんゆ"
	},
	{
		original: "鈴与カーゴネット",
		hiragana: "すずよかーごねっと"
	},
	{
		original: "山一陸送産業",
		hiragana: "やまいちりくそうさんぎょう"
	},
	{
		original: "寒河江物流",
		hiragana: "さがえぶつりゅう"
	},
	{
		original: "京藤梱包運輸",
		hiragana: "きょうとうこんぽううんゆ"
	},
	{
		original: "シンワ流通",
		hiragana: "しんわりゅうつう"
	},
	{
		original: "長野フロー",
		hiragana: "ながのふろー"
	},
	{
		original: "松菱運輸",
		hiragana: "まつびしうんゆ"
	},
	{
		original: "アイザック・トランスポート",
		hiragana: "あいざっく・とらんすぽーと"
	},
	{
		original: "五洋ロジテック",
		hiragana: "ごひろしろじてっく"
	},
	{
		original: "中部",
		hiragana: "ちゅうぶ"
	},
	{
		original: "アトラス陸運",
		hiragana: "あとらすりくうん"
	},
	{
		original: "日本鉄鋼物流",
		hiragana: "にっぽんてっこうぶつりゅう"
	},
	{
		original: "長野陸送",
		hiragana: "ながのりくそう"
	},
	{
		original: "小山田電業",
		hiragana: "おやまだでんぎょう"
	},
	{
		original: "日本カーゴエキスプレス",
		hiragana: "にっぽんかーごえきすぷれす"
	},
	{
		original: "京浜トレーディング",
		hiragana: "けいひんとれーでぃんぐ"
	},
	{
		original: "栁川運輸",
		hiragana: "うんゆ"
	},
	{
		original: "ダイオーエクスプレス",
		hiragana: "だいおーえくすぷれす"
	},
	{
		original: "エーアイ・コーポレーション",
		hiragana: "えーあい・こーぽれーしょん"
	},
	{
		original: "横浜特殊作業",
		hiragana: "よこはまとくしゅさぎょう"
	},
	{
		original: "野村運送",
		hiragana: "のむらうんそう"
	},
	{
		original: "ハコベル",
		hiragana: "はこべる"
	},
	{
		original: "黒川商事",
		hiragana: "くろかわしょうじ"
	},
	{
		original: "ジェイ・ロジコム",
		hiragana: "じぇい・ろじこむ"
	},
	{
		original: "躍進運輸",
		hiragana: "やくしんうんゆ"
	},
	{
		original: "浜庄運輸",
		hiragana: "はましょううんゆ"
	},
	{
		original: "新丸港運",
		hiragana: "しんまるみなとうん"
	},
	{
		original: "トランスパック",
		hiragana: "とらんすぱっく"
	},
	{
		original: "ダイカツ",
		hiragana: "だいかつ"
	},
	{
		original: "誠和",
		hiragana: "せいわ"
	},
	{
		original: "根本運送",
		hiragana: "こんぽんうんそう"
	},
	{
		original: "士別運送",
		hiragana: "しべつうんそう"
	},
	{
		original: "今成運送",
		hiragana: "いまなりうんそう"
	},
	{
		original: "小禄運輸",
		hiragana: "おろくうんゆ"
	},
	{
		original: "札幌新聞輸送",
		hiragana: "さっぽろしんぶんゆそう"
	},
	{
		original: "アジェクト",
		hiragana: "あじぇくと"
	},
	{
		original: "東北新潟運輸",
		hiragana: "とうほくにいがたうんゆ"
	},
	{
		original: "大昭運輸",
		hiragana: "だいあきらうんゆ"
	},
	{
		original: "秀峰",
		hiragana: "しゅうほう"
	},
	{
		original: "遠州西濃運輸",
		hiragana: "えんしゅうせいのううんゆ"
	},
	{
		original: "丸善海陸運輸",
		hiragana: "まるぜんかいりくうんゆ"
	},
	{
		original: "知多産業運輸",
		hiragana: "ちたさんぎょううんゆ"
	},
	{
		original: "西川運輸",
		hiragana: "にしかわうんゆ"
	},
	{
		original: "オストリッチ運輸",
		hiragana: "おすとりっちうんゆ"
	},
	{
		original: "有限会社福富運送",
		hiragana: "ゆうげんがいしゃふくとみうんそう"
	},
	{
		original: "ススム",
		hiragana: "すすむ"
	},
	{
		original: "有限会社扶桑エキスプレス",
		hiragana: "ゆうげんがいしゃふそうえきすぷれす"
	},
	{
		original: "岩田運輸",
		hiragana: "いわたうんゆ"
	},
	{
		original: "丸大運輸",
		hiragana: "まるだいうんゆ"
	},
	{
		original: "京阪運輸",
		hiragana: "けいはんうんゆ"
	},
	{
		original: "山栄運輸",
		hiragana: "やまえいうんゆ"
	},
	{
		original: "朝日陸運",
		hiragana: "あさひりくうん"
	},
	{
		original: "朋友",
		hiragana: "ほうゆう"
	},
	{
		original: "越美通運",
		hiragana: "えつみつううん"
	},
	{
		original: "芸北急送",
		hiragana: "げいほくきゅうそう"
	},
	{
		original: "五光物流",
		hiragana: "ごひかりぶつりゅう"
	},
	{
		original: "日成運輸",
		hiragana: "にっせいうんゆ"
	},
	{
		original: "エー・シー・トランスポート",
		hiragana: "えー・しー・とらんすぽーと"
	},
	{
		original: "大北運輸",
		hiragana: "おおきたうんゆ"
	},
	{
		original: "阿久比運輸",
		hiragana: "あぐいうんゆ"
	},
	{
		original: "長良通運",
		hiragana: "ながらつううん"
	},
	{
		original: "群馬通商",
		hiragana: "ぐんまつうしょう"
	},
	{
		original: "新三善",
		hiragana: "しんぞうぜん"
	},
	{
		original: "有限会社山中運送",
		hiragana: "ゆうげんがいしゃさんちゅううんそう"
	},
	{
		original: "大運",
		hiragana: "だいうん"
	},
	{
		original: "ゼネラル・カーゴ・サービス",
		hiragana: "ぜねらる・かーご・さーびす"
	},
	{
		original: "三喜産業",
		hiragana: "さんきさんぎょう"
	},
	{
		original: "郵船港運",
		hiragana: "ゆうせんみなとうん"
	},
	{
		original: "松久総合",
		hiragana: "まつひさそうごう"
	},
	{
		original: "関東商事",
		hiragana: "かんとうしょうじ"
	},
	{
		original: "アスロード物流",
		hiragana: "あすろーどぶつりゅう"
	},
	{
		original: "大牟田運送",
		hiragana: "おおむたうんそう"
	},
	{
		original: "マースクロジスティクス＆サービスジャパン",
		hiragana: "まーすくろじすてぃくす＆さーびすじゃぱん"
	},
	{
		original: "日祥ロジサービス",
		hiragana: "にちしょうろじさーびす"
	},
	{
		original: "創建運輸",
		hiragana: "そうけんうんゆ"
	},
	{
		original: "道央通商旭川",
		hiragana: "どうおうつうしょうあさひかわ"
	},
	{
		original: "イソトミ産業",
		hiragana: "いそとみさんぎょう"
	},
	{
		original: "トーハンロジテックス",
		hiragana: "とーはんろじてっくす"
	},
	{
		original: "石川トナミ運輸",
		hiragana: "いしかわとなみうんゆ"
	},
	{
		original: "読売ＮＥＸＴ",
		hiragana: "よみうりＮＥＸＴ"
	},
	{
		original: "北四国運輸倉庫",
		hiragana: "きたしこくうんゆそうこ"
	},
	{
		original: "宇東梱包運輸",
		hiragana: "うひがしこんぽううんゆ"
	},
	{
		original: "北松通運",
		hiragana: "きたまつつううん"
	},
	{
		original: "杉浦運送",
		hiragana: "すぎうらうんそう"
	},
	{
		original: "東信梱包",
		hiragana: "とうしんこんぽう"
	},
	{
		original: "甲陸ロジスティクス",
		hiragana: "かぶとりくろじすてぃくす"
	},
	{
		original: "上野商会",
		hiragana: "うえのしょうかい"
	},
	{
		original: "飯田運送",
		hiragana: "いいだうんそう"
	},
	{
		original: "丸運十和田運送",
		hiragana: "まるうんとわだうんそう"
	},
	{
		original: "井手運送有限会社",
		hiragana: "いでうんそうゆうげんがいしゃ"
	},
	{
		original: "東ケ峰運輸",
		hiragana: "ひがしけみねうんゆ"
	},
	{
		original: "山一運輸倉庫",
		hiragana: "やまいちうんゆそうこ"
	},
	{
		original: "今村運送",
		hiragana: "いまむらうんそう"
	},
	{
		original: "光徳産業",
		hiragana: "みつのりさんぎょう"
	},
	{
		original: "東広商事",
		hiragana: "ひがしこうしょうじ"
	},
	{
		original: "ユーエムロジ",
		hiragana: "ゆーえむろじ"
	},
	{
		original: "冨士商事",
		hiragana: "ふじしょうじ"
	},
	{
		original: "ツカサ",
		hiragana: "つかさ"
	},
	{
		original: "名古屋貨物運輸倉庫",
		hiragana: "なごやかもつうんゆそうこ"
	},
	{
		original: "堀内商事",
		hiragana: "ほりうちしょうじ"
	},
	{
		original: "藤武運送",
		hiragana: "とうぶうんそう"
	},
	{
		original: "北関東タイセイ",
		hiragana: "きたかんとうたいせい"
	},
	{
		original: "ロジエンス北海道",
		hiragana: "ろじえんすほっかいどう"
	},
	{
		original: "栃木県北通運",
		hiragana: "とちぎけんきたつううん"
	},
	{
		original: "京和運輸",
		hiragana: "きょうわうんゆ"
	},
	{
		original: "三和物流サービス",
		hiragana: "さんわぶつりゅうさーびす"
	},
	{
		original: "森実タウンサービス",
		hiragana: "もりみたうんさーびす"
	},
	{
		original: "富士陸送",
		hiragana: "ふじりくそう"
	},
	{
		original: "野村運送",
		hiragana: "のむらうんそう"
	},
	{
		original: "長野陸送",
		hiragana: "ながのりくそう"
	},
	{
		original: "三和梱包運輸",
		hiragana: "さんわこんぽううんゆ"
	},
	{
		original: "栃木ロジテム",
		hiragana: "とちぎろじてむ"
	},
	{
		original: "ワイケイ・コーポレイション有限会社",
		hiragana: "わいけい・こーぽれいしょんゆうげんがいしゃ"
	},
	{
		original: "西博運輸",
		hiragana: "にしひろしうんゆ"
	},
	{
		original: "菊丸商事運輸倉庫",
		hiragana: "きくまるしょうじうんゆそうこ"
	},
	{
		original: "滋賀石油",
		hiragana: "しがせきゆ"
	},
	{
		original: "シナノライン",
		hiragana: "しなのらいん"
	},
	{
		original: "九州産業運輸",
		hiragana: "きゅうしゅうさんぎょううんゆ"
	},
	{
		original: "ニイガタキャリイ",
		hiragana: "にいがたきゃりい"
	},
	{
		original: "都市貨物輸送",
		hiragana: "としかもつゆそう"
	},
	{
		original: "東新運輸",
		hiragana: "ひがししんうんゆ"
	},
	{
		original: "奈良センコー物流",
		hiragana: "ならせんこーぶつりゅう"
	},
	{
		original: "藤木陸運",
		hiragana: "ふじきりくうん"
	},
	{
		original: "ＲＥＸ",
		hiragana: "ＲＥＸ"
	},
	{
		original: "豊友輸送",
		hiragana: "ゆたかともゆそう"
	},
	{
		original: "ＩＰＤロジスティクス",
		hiragana: "ＩＰＤろじすてぃくす"
	},
	{
		original: "西元運輸",
		hiragana: "にしもとうんゆ"
	},
	{
		original: "ジェイティ物流",
		hiragana: "じぇいてぃぶつりゅう"
	},
	{
		original: "アサヒロジスト",
		hiragana: "あさひろじすと"
	},
	{
		original: "サンキュウ・トランスポート・中部",
		hiragana: "さんきゅう・とらんすぽーと・ちゅうぶ"
	},
	{
		original: "日本高速運輸",
		hiragana: "にっぽんこうそくうんゆ"
	},
	{
		original: "東伸産業",
		hiragana: "とうしんさんぎょう"
	},
	{
		original: "丸一運輸",
		hiragana: "まるいちうんゆ"
	},
	{
		original: "城北流通",
		hiragana: "じょうほくりゅうつう"
	},
	{
		original: "第一運送",
		hiragana: "だいいちうんそう"
	},
	{
		original: "日の出運輸企業",
		hiragana: "ひのでうんゆきぎょう"
	},
	{
		original: "有限会社田仲商事",
		hiragana: "ゆうげんがいしゃたなかしょうじ"
	},
	{
		original: "ジャパンクイックサービス",
		hiragana: "じゃぱんくいっくさーびす"
	},
	{
		original: "有限会社開陽総業",
		hiragana: "ゆうげんがいしゃかいようそうぎょう"
	},
	{
		original: "鈴江陸運",
		hiragana: "すずえりくうん"
	},
	{
		original: "みちのく陸運",
		hiragana: "みちのくりくうん"
	},
	{
		original: "中京物流",
		hiragana: "ちゅうきょうぶつりゅう"
	},
	{
		original: "有限会社奥島商事",
		hiragana: "ゆうげんがいしゃおくしましょうじ"
	},
	{
		original: "有限会社ワーク",
		hiragana: "ゆうげんがいしゃわーく"
	},
	{
		original: "九州協栄",
		hiragana: "きゅうしゅうきょうえい"
	},
	{
		original: "大翔",
		hiragana: "ひろと"
	},
	{
		original: "宇徳ロジスティクス",
		hiragana: "うとくろじすてぃくす"
	},
	{
		original: "ケイティライン",
		hiragana: "けいてぃらいん"
	},
	{
		original: "福島北桑運輸",
		hiragana: "ふくしまきたくわうんゆ"
	},
	{
		original: "有限会社丸和運輸",
		hiragana: "ゆうげんがいしゃまるわうんゆ"
	},
	{
		original: "三陽陸運",
		hiragana: "さんようりくうん"
	},
	{
		original: "Ｊａｐａｎ　Ｌｏｇｉｓｔｉｃｓ　Ｐａｒｔｎｅｒｓ",
		hiragana: "Ｊａｐａｎ　Ｌｏｇｉｓｔｉｃｓ　Ｐａｒｔｎｅｒｓ"
	},
	{
		original: "コトー",
		hiragana: "ことー"
	},
	{
		original: "キョウワロジックス",
		hiragana: "きょうわろじっくす"
	},
	{
		original: "双日ロジスティクス",
		hiragana: "そうじつろじすてぃくす"
	},
	{
		original: "西濃名古屋エキスプレス",
		hiragana: "せいのうなごやえきすぷれす"
	},
	{
		original: "シャチライン",
		hiragana: "しゃちらいん"
	},
	{
		original: "小倉運輸有限会社",
		hiragana: "おぐらうんゆゆうげんがいしゃ"
	},
	{
		original: "田中運輸",
		hiragana: "たなかうんゆ"
	},
	{
		original: "渡辺産業",
		hiragana: "わたなべさんぎょう"
	},
	{
		original: "東和ロジスティクス",
		hiragana: "とうわろじすてぃくす"
	},
	{
		original: "日本馬匹輸送自動車",
		hiragana: "にほんばひきゆそうじどうしゃ"
	},
	{
		original: "日翔物流",
		hiragana: "にちかぶつりゅう"
	},
	{
		original: "日東物流",
		hiragana: "にっとうぶつりゅう"
	},
	{
		original: "エムエスシステム",
		hiragana: "えむえすしすてむ"
	},
	{
		original: "七尾海陸運送",
		hiragana: "ななおかいりくうんそう"
	},
	{
		original: "名古屋第一物流",
		hiragana: "なごやだいいちぶつりゅう"
	},
	{
		original: "福岡熊交",
		hiragana: "ふくおかくまこう"
	},
	{
		original: "岡田運輸",
		hiragana: "おかだうんゆ"
	},
	{
		original: "カジロジスティックス",
		hiragana: "かじろじすてぃっくす"
	},
	{
		original: "挾間物流サービス",
		hiragana: "はざまぶつりゅうさーびす"
	},
	{
		original: "ゲートオンロジスティクス",
		hiragana: "げーとおんろじすてぃくす"
	},
	{
		original: "仙台中央運送",
		hiragana: "せんだいちゅうおううんそう"
	},
	{
		original: "丸玉運送豊橋",
		hiragana: "まるたまうんそうとよはし"
	},
	{
		original: "菊池商事",
		hiragana: "きくちしょうじ"
	},
	{
		original: "小林製薬物流",
		hiragana: "こばやしせいやくぶつりゅう"
	},
	{
		original: "ハルテ物流サービス",
		hiragana: "はるてぶつりゅうさーびす"
	},
	{
		original: "ヒラマツ",
		hiragana: "ひらまつ"
	},
	{
		original: "日本興運",
		hiragana: "にっぽんきょううん"
	},
	{
		original: "栗山ノーサン",
		hiragana: "くりやまのーさん"
	},
	{
		original: "日本搬送",
		hiragana: "にっぽんはんそう"
	},
	{
		original: "有限会社蓼沼商事",
		hiragana: "ゆうげんがいしゃたでぬましょうじ"
	},
	{
		original: "オカダ・エキスプレス",
		hiragana: "おかだ・えきすぷれす"
	},
	{
		original: "佐原運輸倉庫",
		hiragana: "さわらうんゆそうこ"
	},
	{
		original: "木島陸運",
		hiragana: "きじまりくうん"
	},
	{
		original: "エムワン",
		hiragana: "えむわん"
	},
	{
		original: "サン・ブリッジ",
		hiragana: "さん・ぶりっじ"
	},
	{
		original: "ランビック",
		hiragana: "らんびっく"
	},
	{
		original: "青葉運輸",
		hiragana: "あおばうんゆ"
	},
	{
		original: "ドーネル運輸有限会社",
		hiragana: "どーねるうんゆゆうげんがいしゃ"
	},
	{
		original: "菱進運輸倉庫",
		hiragana: "ひししんうんゆそうこ"
	},
	{
		original: "山信運輸",
		hiragana: "やましんうんゆ"
	},
	{
		original: "むつば物流",
		hiragana: "むつばぶつりゅう"
	},
	{
		original: "茨城通運",
		hiragana: "いばらきつううん"
	},
	{
		original: "高松商運",
		hiragana: "たかまつしょううん"
	},
	{
		original: "水島臨海通運",
		hiragana: "みずしまりんかいつううん"
	},
	{
		original: "第一海運",
		hiragana: "だいいちかいうん"
	},
	{
		original: "有限会社弘西運輸",
		hiragana: "ゆうげんがいしゃこうさいうんゆ"
	},
	{
		original: "大東梱包",
		hiragana: "だいとうこんぽう"
	},
	{
		original: "みつわ運輸",
		hiragana: "みつわうんゆ"
	},
	{
		original: "四国トランスポート",
		hiragana: "しこくとらんすぽーと"
	},
	{
		original: "平凡運輸",
		hiragana: "へいぼんうんゆ"
	},
	{
		original: "伸和トラスト",
		hiragana: "のぶかずとらすと"
	},
	{
		original: "中川運輸",
		hiragana: "なかがわうんゆ"
	},
	{
		original: "大島運輸",
		hiragana: "おおしまうんゆ"
	},
	{
		original: "丸善配送",
		hiragana: "まるぜんはいそう"
	},
	{
		original: "サンシャイン",
		hiragana: "さんしゃいん"
	},
	{
		original: "松本倉庫",
		hiragana: "まつもとそうこ"
	},
	{
		original: "共同",
		hiragana: "きょうどう"
	},
	{
		original: "城戸運送有限会社",
		hiragana: "きどうんそうゆうげんがいしゃ"
	},
	{
		original: "小林運輸",
		hiragana: "こばやしうんゆ"
	},
	{
		original: "芙蓉",
		hiragana: "ふよう"
	},
	{
		original: "千代田運輸",
		hiragana: "ちよだうんゆ"
	},
	{
		original: "トランシス",
		hiragana: "とらんしす"
	},
	{
		original: "秩父運輸",
		hiragana: "ちちぶうんゆ"
	},
	{
		original: "前橋南部運送",
		hiragana: "まえばしなんぶうんそう"
	},
	{
		original: "ＫＡＩＳＨＩＮ",
		hiragana: "ＫＡＩＳＨＩＮ"
	},
	{
		original: "狭山貨物運輸",
		hiragana: "さやまかもつうんゆ"
	},
	{
		original: "小出運送",
		hiragana: "こいでうんそう"
	},
	{
		original: "タクシン",
		hiragana: "たくしん"
	},
	{
		original: "清水運送",
		hiragana: "しみずうんそう"
	},
	{
		original: "琉球海運",
		hiragana: "りゅうきゅうかいうん"
	},
	{
		original: "山一運送",
		hiragana: "やまいちうんそう"
	},
	{
		original: "大通",
		hiragana: "おおどおり"
	},
	{
		original: "輪島屋鮮冷",
		hiragana: "わしまやせんれい"
	},
	{
		original: "石見サービス",
		hiragana: "いわみさーびす"
	},
	{
		original: "タカサカ青果",
		hiragana: "たかさかせいか"
	},
	{
		original: "まるよ運送",
		hiragana: "まるようんそう"
	},
	{
		original: "上信トラック",
		hiragana: "うえしんとらっく"
	},
	{
		original: "岸和田運輸",
		hiragana: "きしわだうんゆ"
	},
	{
		original: "アスリート",
		hiragana: "あすりーと"
	},
	{
		original: "有限会社昭和運輸",
		hiragana: "ゆうげんがいしゃしょうわうんゆ"
	},
	{
		original: "藤原重機",
		hiragana: "ふじわらじゅうき"
	},
	{
		original: "キッズ商事",
		hiragana: "きっずしょうじ"
	},
	{
		original: "マルナカロジスティクス",
		hiragana: "まるなかろじすてぃくす"
	},
	{
		original: "奥出屋運送",
		hiragana: "おくでやうんそう"
	},
	{
		original: "滋賀ユニック",
		hiragana: "しがゆにっく"
	},
	{
		original: "協和冷蔵",
		hiragana: "きょうわれいぞう"
	},
	{
		original: "千照運輸",
		hiragana: "せんしょううんゆ"
	},
	{
		original: "古川運輸",
		hiragana: "ふるかわうんゆ"
	},
	{
		original: "有限会社渡辺運送",
		hiragana: "ゆうげんがいしゃわたなべうんそう"
	},
	{
		original: "刈急運輸",
		hiragana: "かりきゅううんゆ"
	},
	{
		original: "三陸輸送",
		hiragana: "さんりくゆそう"
	},
	{
		original: "花王ロジスティクス",
		hiragana: "かおうろじすてぃくす"
	},
	{
		original: "相和流通",
		hiragana: "そうわりゅうつう"
	},
	{
		original: "ダイセー物流",
		hiragana: "だいせーぶつりゅう"
	},
	{
		original: "北温運送",
		hiragana: "きたおんうんそう"
	},
	{
		original: "星田商運",
		hiragana: "ほしだしょううん"
	},
	{
		original: "ケーツー企画",
		hiragana: "けーつーきかく"
	},
	{
		original: "有限会社小林運送店",
		hiragana: "ゆうげんがいしゃこばやしうんそうてん"
	},
	{
		original: "大藤運輸",
		hiragana: "おおとううんゆ"
	},
	{
		original: "岡野運送",
		hiragana: "おかのうんそう"
	},
	{
		original: "サトランス",
		hiragana: "さとらんす"
	},
	{
		original: "野出運輸",
		hiragana: "のでうんゆ"
	},
	{
		original: "ブロード",
		hiragana: "ぶろーど"
	},
	{
		original: "丸栄ニューウェーブ",
		hiragana: "まるえいにゅーうぇーぶ"
	},
	{
		original: "共立マイラ",
		hiragana: "きょうりつまいら"
	},
	{
		original: "インターオート",
		hiragana: "いんたーおーと"
	},
	{
		original: "大通運送",
		hiragana: "おおどおりうんそう"
	},
	{
		original: "大洋運輸",
		hiragana: "たいよううんゆ"
	},
	{
		original: "平凡運輸",
		hiragana: "へいぼんうんゆ"
	},
	{
		original: "中川運輸",
		hiragana: "なかがわうんゆ"
	},
	{
		original: "共同",
		hiragana: "きょうどう"
	},
	{
		original: "新宮運送",
		hiragana: "しんぐううんそう"
	},
	{
		original: "松本倉庫",
		hiragana: "まつもとそうこ"
	},
	{
		original: "八戸急行",
		hiragana: "はちのへきゅうこう"
	},
	{
		original: "東京日食",
		hiragana: "とうきょうにっしょく"
	},
	{
		original: "常滑運輸",
		hiragana: "とこなめうんゆ"
	},
	{
		original: "栃南通運",
		hiragana: "とちみなみつううん"
	},
	{
		original: "キョクイチロジ",
		hiragana: "きょくいちろじ"
	},
	{
		original: "あやせ興産有限会社",
		hiragana: "あやせこうさんゆうげんがいしゃ"
	},
	{
		original: "日之出運輸",
		hiragana: "ひのでうんゆ"
	},
	{
		original: "林田物流",
		hiragana: "はやしだぶつりゅう"
	},
	{
		original: "直江津海陸運送",
		hiragana: "なおえつかいりくうんそう"
	},
	{
		original: "Ｔ・トレジャー",
		hiragana: "Ｔ・とれじゃー"
	},
	{
		original: "あいあいトータルサポート",
		hiragana: "あいあいとーたるさぽーと"
	},
	{
		original: "弥生運輸",
		hiragana: "やよいうんゆ"
	},
	{
		original: "信光物流",
		hiragana: "のぶみつぶつりゅう"
	},
	{
		original: "酒寄商事",
		hiragana: "さかよりしょうじ"
	},
	{
		original: "丸ヵ運送",
		hiragana: "まるゕうんそう"
	},
	{
		original: "ＳＡＳロジスティックス",
		hiragana: "ＳＡＳろじすてぃっくす"
	},
	{
		original: "上高運輸",
		hiragana: "うえたかうんゆ"
	},
	{
		original: "前田運送",
		hiragana: "まえだうんそう"
	},
	{
		original: "ジェイエイしみずサービス",
		hiragana: "じぇいえいしみずさーびす"
	},
	{
		original: "衣浦物流",
		hiragana: "きぬうらぶつりゅう"
	},
	{
		original: "ロジフレックス",
		hiragana: "ろじふれっくす"
	},
	{
		original: "東札幌日通輸送",
		hiragana: "ひがしさっぽろにっつうゆそう"
	},
	{
		original: "メイツセレクト",
		hiragana: "めいつせれくと"
	},
	{
		original: "リクサス",
		hiragana: "りくさす"
	},
	{
		original: "ケイヒン陸運",
		hiragana: "けいひんりくうん"
	},
	{
		original: "藤森運輸",
		hiragana: "ふじもりうんゆ"
	},
	{
		original: "サネット",
		hiragana: "さねっと"
	},
	{
		original: "燕運送",
		hiragana: "つばめうんそう"
	},
	{
		original: "日榮商事",
		hiragana: "にちえいしょうじ"
	},
	{
		original: "柳川合同",
		hiragana: "やながわごうどう"
	},
	{
		original: "尼崎南運輸",
		hiragana: "あまがさきみなみうんゆ"
	},
	{
		original: "大分物流サービス",
		hiragana: "おおいたぶつりゅうさーびす"
	},
	{
		original: "安心院運輸",
		hiragana: "あじむうんゆ"
	},
	{
		original: "名古屋市場運輸",
		hiragana: "なごやしばうんゆ"
	},
	{
		original: "伊万里運輸",
		hiragana: "いまりうんゆ"
	},
	{
		original: "森下企業",
		hiragana: "もりしたきぎょう"
	},
	{
		original: "有限会社成洋商事",
		hiragana: "ゆうげんがいしゃなりひろしょうじ"
	},
	{
		original: "名和運輸",
		hiragana: "なわうんゆ"
	},
	{
		original: "高砂通運",
		hiragana: "たかさごつううん"
	},
	{
		original: "沖縄荷役サービス",
		hiragana: "おきなわにやくさーびす"
	},
	{
		original: "アペニンコーポレーション",
		hiragana: "あぺにんこーぽれーしょん"
	},
	{
		original: "ジヤパンエキスプレス",
		hiragana: "じやぱんえきすぷれす"
	},
	{
		original: "ジェイエム",
		hiragana: "じぇいえむ"
	},
	{
		original: "毎日急行",
		hiragana: "まいにちきゅうこう"
	},
	{
		original: "トランシス",
		hiragana: "とらんしす"
	},
	{
		original: "神戸ヤマト運輸",
		hiragana: "こうべやまとうんゆ"
	},
	{
		original: "渡邉物流",
		hiragana: "わたなべぶつりゅう"
	},
	{
		original: "ファイブスターロジ",
		hiragana: "ふぁいぶすたーろじ"
	},
	{
		original: "坂田流通",
		hiragana: "さかたりゅうつう"
	},
	{
		original: "ＪＡえひめ物流",
		hiragana: "ＪＡえひめぶつりゅう"
	},
	{
		original: "ロジネクス",
		hiragana: "ろじねくす"
	},
	{
		original: "九州アイエヌライン",
		hiragana: "きゅうしゅうあいえぬらいん"
	},
	{
		original: "手塚運輸",
		hiragana: "てづかうんゆ"
	},
	{
		original: "ノースライナー",
		hiragana: "のーすらいなー"
	},
	{
		original: "協栄ライン",
		hiragana: "きょうえいらいん"
	},
	{
		original: "有限会社エキスプレス",
		hiragana: "ゆうげんがいしゃえきすぷれす"
	},
	{
		original: "前橋運輸",
		hiragana: "まえばしうんゆ"
	},
	{
		original: "フジライン",
		hiragana: "ふじらいん"
	},
	{
		original: "キャリーハンズ",
		hiragana: "きゃりーはんず"
	},
	{
		original: "日塩",
		hiragana: "にちしお"
	},
	{
		original: "千里運輸",
		hiragana: "せんりうんゆ"
	},
	{
		original: "佐々木興業",
		hiragana: "ささきこうぎょう"
	},
	{
		original: "縫友運送",
		hiragana: "ほうともうんそう"
	},
	{
		original: "森田運送",
		hiragana: "もりたうんそう"
	},
	{
		original: "シンエイ",
		hiragana: "しんえい"
	},
	{
		original: "いわき建設運輸有限会社",
		hiragana: "いわきけんせつうんゆゆうげんがいしゃ"
	},
	{
		original: "日恵物流",
		hiragana: "にちめぐみぶつりゅう"
	},
	{
		original: "グランツ",
		hiragana: "ぐらんつ"
	},
	{
		original: "大都運送",
		hiragana: "だいとうんそう"
	},
	{
		original: "アツミニエキ",
		hiragana: "あつみにえき"
	},
	{
		original: "明日香運送",
		hiragana: "あすかうんそう"
	},
	{
		original: "ＲＥＳＰＥＣＴ",
		hiragana: "ＲＥＳＰＥＣＴ"
	},
	{
		original: "三昇",
		hiragana: "さんのぼる"
	},
	{
		original: "浜松運送",
		hiragana: "はままつうんそう"
	},
	{
		original: "東札幌輸送",
		hiragana: "ひがしさっぽろゆそう"
	},
	{
		original: "内山運送",
		hiragana: "うちやまうんそう"
	},
	{
		original: "ワークステーション",
		hiragana: "わーくすてーしょん"
	},
	{
		original: "オージー物流",
		hiragana: "おーじーぶつりゅう"
	},
	{
		original: "山陰オート供給",
		hiragana: "さんいんおーときょうきゅう"
	},
	{
		original: "山栄",
		hiragana: "やまさかえ"
	},
	{
		original: "小樽倉庫",
		hiragana: "おたるそうこ"
	},
	{
		original: "関宿急便",
		hiragana: "せきやどきゅうびん"
	},
	{
		original: "オカモト通商",
		hiragana: "おかもとつうしょう"
	},
	{
		original: "浅田商事",
		hiragana: "あさだしょうじ"
	},
	{
		original: "西川運輸興業",
		hiragana: "にしかわうんゆこうぎょう"
	},
	{
		original: "武蔵通商",
		hiragana: "むさしつうしょう"
	},
	{
		original: "有限会社森商事",
		hiragana: "ゆうげんがいしゃもりしょうじ"
	},
	{
		original: "丸孝運輸倉庫",
		hiragana: "まるこううんゆそうこ"
	},
	{
		original: "昭和梱包",
		hiragana: "しょうわこんぽう"
	},
	{
		original: "Ｓｕｎ．Ｋ物流",
		hiragana: "Ｓｕｎ．Ｋぶつりゅう"
	},
	{
		original: "三ツ矢物産",
		hiragana: "さんつやぶっさん"
	},
	{
		original: "ケー・ワイ・ティー",
		hiragana: "けー・わい・てぃー"
	},
	{
		original: "国東輸送",
		hiragana: "くにさきゆそう"
	},
	{
		original: "中央運輸",
		hiragana: "ちゅうおううんゆ"
	},
	{
		original: "ビーサポート",
		hiragana: "びーさぽーと"
	},
	{
		original: "北陸大池運送",
		hiragana: "ほくりくおおいけうんそう"
	},
	{
		original: "柚野産業有限会社",
		hiragana: "ゆずのさんぎょうゆうげんがいしゃ"
	},
	{
		original: "藤本重機",
		hiragana: "ふじもとじゅうき"
	},
	{
		original: "有限会社小泉運輸関東",
		hiragana: "ゆうげんがいしゃこいずみうんゆかんとう"
	},
	{
		original: "ソニア物流",
		hiragana: "そにあぶつりゅう"
	},
	{
		original: "八武崎運送",
		hiragana: "はちたけしさきうんそう"
	},
	{
		original: "柏栄トランス",
		hiragana: "はくえいとらんす"
	},
	{
		original: "栗田運輸",
		hiragana: "くりたうんゆ"
	},
	{
		original: "フェニックス急行",
		hiragana: "ふぇにっくすきゅうこう"
	},
	{
		original: "白井機材工業",
		hiragana: "しらいきざいこうぎょう"
	},
	{
		original: "ロードカンパニー",
		hiragana: "ろーどかんぱにー"
	},
	{
		original: "丸運ロジスティクス東北",
		hiragana: "まるうんろじすてぃくすとうほく"
	},
	{
		original: "上州貨物自動車",
		hiragana: "じょうしゅうかもつじどうしゃ"
	},
	{
		original: "ヤグチ物流",
		hiragana: "やぐちぶつりゅう"
	},
	{
		original: "十勝鉄道",
		hiragana: "とかちてつどう"
	},
	{
		original: "日東富士運輸",
		hiragana: "にっとうふじうんゆ"
	},
	{
		original: "ジャスト・カーゴ",
		hiragana: "じゃすと・かーご"
	},
	{
		original: "スゴー運送",
		hiragana: "すごーうんそう"
	},
	{
		original: "興産運輸",
		hiragana: "こうさんうんゆ"
	},
	{
		original: "丸菱運輸",
		hiragana: "まるびしうんゆ"
	},
	{
		original: "内田陸運",
		hiragana: "うちだりくうん"
	},
	{
		original: "大利運輸",
		hiragana: "だいりうんゆ"
	},
	{
		original: "丸五運送",
		hiragana: "まるごうんそう"
	},
	{
		original: "アスカ",
		hiragana: "あすか"
	},
	{
		original: "中国通運",
		hiragana: "ちゅうごくつううん"
	},
	{
		original: "會津通運",
		hiragana: "あいづつううん"
	},
	{
		original: "渡部物産",
		hiragana: "わたなべぶっさん"
	},
	{
		original: "ウイング",
		hiragana: "ういんぐ"
	},
	{
		original: "中島運輸機工",
		hiragana: "なかじまうんゆきこう"
	},
	{
		original: "大阪旭陸運",
		hiragana: "おおさかあさひりくうん"
	},
	{
		original: "ジャパンエクスプレス",
		hiragana: "じゃぱんえくすぷれす"
	},
	{
		original: "東商テクノ",
		hiragana: "とうしょうてくの"
	},
	{
		original: "太伸興業",
		hiragana: "たしんこうぎょう"
	},
	{
		original: "司",
		hiragana: "つかさ"
	},
	{
		original: "豊浜運輸",
		hiragana: "とよはまうんゆ"
	},
	{
		original: "誠和",
		hiragana: "せいわ"
	},
	{
		original: "アンノウ",
		hiragana: "あんのう"
	},
	{
		original: "山梨第一貨物",
		hiragana: "やまなしだいいちかもつ"
	},
	{
		original: "武蔵野運送",
		hiragana: "むさしのうんそう"
	},
	{
		original: "インター物流",
		hiragana: "いんたーぶつりゅう"
	},
	{
		original: "大日運輸",
		hiragana: "だいにちうんゆ"
	},
	{
		original: "習志野トラックセンター",
		hiragana: "ならしのとらっくせんたー"
	},
	{
		original: "小野リース",
		hiragana: "おのりーす"
	},
	{
		original: "清栄",
		hiragana: "せいえい"
	},
	{
		original: "有限会社Ｍｉｙａｍａコーポレーション",
		hiragana: "ゆうげんがいしゃＭｉｙａｍａこーぽれーしょん"
	},
	{
		original: "山口県中央貨物",
		hiragana: "やまぐちけんちゅうおうかもつ"
	},
	{
		original: "グリーンパックス",
		hiragana: "ぐりーんぱっくす"
	},
	{
		original: "学研ロジスティクス",
		hiragana: "がっけんろじすてぃくす"
	},
	{
		original: "又新運輸",
		hiragana: "またしんうんゆ"
	},
	{
		original: "マルエー物流",
		hiragana: "まるえーぶつりゅう"
	},
	{
		original: "昭和梱包",
		hiragana: "しょうわこんぽう"
	},
	{
		original: "渡邊倉庫運送",
		hiragana: "わたなべそうこうんそう"
	},
	{
		original: "佐世保港湾運輸",
		hiragana: "させぼこうわんうんゆ"
	},
	{
		original: "雄山陸運",
		hiragana: "おやまりくうん"
	},
	{
		original: "サンエーロジコム",
		hiragana: "さんえーろじこむ"
	},
	{
		original: "富良野通運",
		hiragana: "ふらのつううん"
	},
	{
		original: "大東貨物自動車",
		hiragana: "だいとうかもつじどうしゃ"
	},
	{
		original: "茂広組",
		hiragana: "しげるこうくみ"
	},
	{
		original: "平成輸送サービス",
		hiragana: "へいせいゆそうさーびす"
	},
	{
		original: "丸ト",
		hiragana: "まると"
	},
	{
		original: "錦江",
		hiragana: "きんこう"
	},
	{
		original: "石黒物流",
		hiragana: "いしぐろぶつりゅう"
	},
	{
		original: "山進運輸",
		hiragana: "やましんうんゆ"
	},
	{
		original: "エーエムエー",
		hiragana: "えーえむえー"
	},
	{
		original: "協同商事",
		hiragana: "きょうどうしょうじ"
	},
	{
		original: "朝日運輸",
		hiragana: "あさひうんゆ"
	},
	{
		original: "有限会社本澤運送",
		hiragana: "ゆうげんがいしゃほんざわうんそう"
	},
	{
		original: "中村産業輸送",
		hiragana: "なかむらさんぎょうゆそう"
	},
	{
		original: "クリエイト",
		hiragana: "くりえいと"
	},
	{
		original: "磐梯貨物",
		hiragana: "ばんだいかもつ"
	},
	{
		original: "東北丸八運輸",
		hiragana: "とうほくまるはちうんゆ"
	},
	{
		original: "フットワークエクスプレス関東",
		hiragana: "ふっとわーくえくすぷれすかんとう"
	},
	{
		original: "ＳＫ日陸エーライン",
		hiragana: "ＳＫにちりくえーらいん"
	},
	{
		original: "アルム不動産運輸",
		hiragana: "あるむふどうさんうんゆ"
	},
	{
		original: "萩浦興産",
		hiragana: "はぎうらこうさん"
	},
	{
		original: "山崎商事運輸",
		hiragana: "やまざきしょうじうんゆ"
	},
	{
		original: "有限会社浜運物流サービス",
		hiragana: "ゆうげんがいしゃはまうんぶつりゅうさーびす"
	},
	{
		original: "マルコ物流",
		hiragana: "まるこぶつりゅう"
	},
	{
		original: "有限会社サンキョウ",
		hiragana: "ゆうげんがいしゃさんきょう"
	},
	{
		original: "北日本運輸",
		hiragana: "きたにほんうんゆ"
	},
	{
		original: "赤城山運輸",
		hiragana: "あかぎやまうんゆ"
	},
	{
		original: "丹羽商",
		hiragana: "たんばしょう"
	},
	{
		original: "茨城県貨物自動車運送",
		hiragana: "いばらきけんかもつじどうしゃうんそう"
	},
	{
		original: "桶本興業",
		hiragana: "おけほんこうぎょう"
	},
	{
		original: "五興運輸",
		hiragana: "ごきょううんゆ"
	},
	{
		original: "ダイハート物流",
		hiragana: "だいはーとぶつりゅう"
	},
	{
		original: "テーオー運輸",
		hiragana: "てーおーうんゆ"
	},
	{
		original: "スペースプランニング",
		hiragana: "すぺーすぷらんにんぐ"
	},
	{
		original: "千曲運輸",
		hiragana: "ちくまうんゆ"
	},
	{
		original: "太陽運輸",
		hiragana: "たいよううんゆ"
	},
	{
		original: "小田川運輸有限会社",
		hiragana: "おだがわうんゆゆうげんがいしゃ"
	},
	{
		original: "アドバンス芙蓉",
		hiragana: "あどばんすふよう"
	},
	{
		original: "丸栄運輸",
		hiragana: "まるえいうんゆ"
	},
	{
		original: "東北日貨運輸",
		hiragana: "とうほくにっかうんゆ"
	},
	{
		original: "窪商運",
		hiragana: "くぼしょううん"
	},
	{
		original: "エムズトランスポート",
		hiragana: "えむずとらんすぽーと"
	},
	{
		original: "福岡運輸システムネット",
		hiragana: "ふくおかうんゆしすてむねっと"
	},
	{
		original: "小林運送",
		hiragana: "こばやしうんそう"
	},
	{
		original: "アサカワトランテック",
		hiragana: "あさかわとらんてっく"
	},
	{
		original: "藤通",
		hiragana: "ふじとおり"
	},
	{
		original: "橋本運輸",
		hiragana: "はしもとうんゆ"
	},
	{
		original: "学研ロジスティクス",
		hiragana: "がっけんろじすてぃくす"
	},
	{
		original: "誠和",
		hiragana: "せいわ"
	},
	{
		original: "山ス流通サービス",
		hiragana: "やますりゅうつうさーびす"
	},
	{
		original: "山口県中央貨物",
		hiragana: "やまぐちけんちゅうおうかもつ"
	},
	{
		original: "アンノウ",
		hiragana: "あんのう"
	},
	{
		original: "上昇運輸",
		hiragana: "じょうしょううんゆ"
	},
	{
		original: "小野リース",
		hiragana: "おのりーす"
	},
	{
		original: "ジェイネットライン",
		hiragana: "じぇいねっとらいん"
	},
	{
		original: "日本商運",
		hiragana: "にっぽんしょううん"
	},
	{
		original: "有限会社國伸運輸",
		hiragana: "ゆうげんがいしゃくにしんうんゆ"
	},
	{
		original: "グリーンライズ",
		hiragana: "ぐりーんらいず"
	},
	{
		original: "有限会社川崎屋運送",
		hiragana: "ゆうげんがいしゃかわさきやうんそう"
	},
	{
		original: "倉吉運輸",
		hiragana: "くらよしうんゆ"
	},
	{
		original: "ライズトランスポート",
		hiragana: "らいずとらんすぽーと"
	},
	{
		original: "しんけん",
		hiragana: "しんけん"
	},
	{
		original: "クラウドライク",
		hiragana: "くらうどらいく"
	},
	{
		original: "宗像陸運",
		hiragana: "むなかたりくうん"
	},
	{
		original: "高塚運送",
		hiragana: "たかつかうんそう"
	},
	{
		original: "三木鋼業",
		hiragana: "みきこうぎょう"
	},
	{
		original: "旭川物流",
		hiragana: "あさひかわぶつりゅう"
	},
	{
		original: "琴崎産業",
		hiragana: "こんさきさんぎょう"
	},
	{
		original: "村正運輸",
		hiragana: "むらまさうんゆ"
	},
	{
		original: "ＯＡＳ運輸",
		hiragana: "ＯＡＳうんゆ"
	},
	{
		original: "高山運輸建設",
		hiragana: "こうざんうんゆけんせつ"
	},
	{
		original: "有限会社サンクロトランスポート",
		hiragana: "ゆうげんがいしゃさんくろとらんすぽーと"
	},
	{
		original: "青森東邦運輸倉庫",
		hiragana: "あおもりとうほううんゆそうこ"
	},
	{
		original: "函館運輸サービス",
		hiragana: "はこだてうんゆさーびす"
	},
	{
		original: "ビーアールエス",
		hiragana: "びーあーるえす"
	},
	{
		original: "丸回企業",
		hiragana: "まるかいきぎょう"
	},
	{
		original: "エヌ・シー・ユー物流",
		hiragana: "えぬ・しー・ゆーぶつりゅう"
	},
	{
		original: "水上三洋商会",
		hiragana: "すいじょうさんようしょうかい"
	},
	{
		original: "鈴与カーゴネット浜松",
		hiragana: "すずよかーごねっとはままつ"
	},
	{
		original: "有限会社松本商事",
		hiragana: "ゆうげんがいしゃまつもとしょうじ"
	},
	{
		original: "日之出運輸",
		hiragana: "ひのでうんゆ"
	},
	{
		original: "新興運送",
		hiragana: "しんこううんそう"
	},
	{
		original: "大八運送有限会社",
		hiragana: "だいはちうんそうゆうげんがいしゃ"
	},
	{
		original: "令和熊交",
		hiragana: "れいわくまこう"
	},
	{
		original: "笠原産業",
		hiragana: "かさはらさんぎょう"
	},
	{
		original: "トーウンロジテム",
		hiragana: "とーうんろじてむ"
	},
	{
		original: "トキハ物流サービス",
		hiragana: "ときはぶつりゅうさーびす"
	},
	{
		original: "日鋼トラック",
		hiragana: "にっこうとらっく"
	},
	{
		original: "相和物産",
		hiragana: "そうわぶっさん"
	},
	{
		original: "ＭＩＴＡＫＥ",
		hiragana: "ＭＩＴＡＫＥ"
	},
	{
		original: "名陸流通",
		hiragana: "めいりくりゅうつう"
	},
	{
		original: "有限会社植田商運",
		hiragana: "ゆうげんがいしゃうえだしょううん"
	},
	{
		original: "トーシン",
		hiragana: "とーしん"
	},
	{
		original: "築山運送",
		hiragana: "つきやまうんそう"
	},
	{
		original: "下館地区通運",
		hiragana: "しもだてちくつううん"
	},
	{
		original: "スターライン",
		hiragana: "すたーらいん"
	},
	{
		original: "築山運送",
		hiragana: "つきやまうんそう"
	},
	{
		original: "有限会社植田商運",
		hiragana: "ゆうげんがいしゃうえだしょううん"
	},
	{
		original: "ニシナカ物流",
		hiragana: "にしなかぶつりゅう"
	},
	{
		original: "都城ダイキュー運輸",
		hiragana: "とみしろだいきゅーうんゆ"
	},
	{
		original: "深町組",
		hiragana: "ふかまちくみ"
	},
	{
		original: "自動車輸送興業",
		hiragana: "じどうしゃゆそうこうぎょう"
	},
	{
		original: "トランスシティロジスティクス中部",
		hiragana: "とらんすしてぃろじすてぃくすちゅうぶ"
	},
	{
		original: "福島臨海鉄道",
		hiragana: "ふくしまりんかいてつどう"
	},
	{
		original: "高通サービス",
		hiragana: "たかとおりさーびす"
	},
	{
		original: "沼田運輸倉庫",
		hiragana: "ぬまたうんゆそうこ"
	},
	{
		original: "北信運送",
		hiragana: "ほくしんうんそう"
	},
	{
		original: "愛知ミタカ運輸",
		hiragana: "あいちみたかうんゆ"
	},
	{
		original: "大徳運輸",
		hiragana: "だいとくうんゆ"
	},
	{
		original: "タカセ",
		hiragana: "たかせ"
	},
	{
		original: "内山",
		hiragana: "うちやま"
	},
	{
		original: "サンインテルネット",
		hiragana: "さんいんてるねっと"
	},
	{
		original: "油屋運送有限会社",
		hiragana: "あぶらやうんそうゆうげんがいしゃ"
	},
	{
		original: "群馬グリーン配送",
		hiragana: "ぐんまぐりーんはいそう"
	},
	{
		original: "泉川運輸",
		hiragana: "いずみかわうんゆ"
	},
	{
		original: "嶋崎運送",
		hiragana: "しまざきうんそう"
	},
	{
		original: "大川陸運",
		hiragana: "おおかわりくうん"
	},
	{
		original: "多治見通運",
		hiragana: "たじみつううん"
	},
	{
		original: "大商運輸",
		hiragana: "だいしょううんゆ"
	},
	{
		original: "日鋼運輸",
		hiragana: "にっこううんゆ"
	},
	{
		original: "日彰運輸有限会社",
		hiragana: "にちあきらうんゆゆうげんがいしゃ"
	},
	{
		original: "中川工業所",
		hiragana: "なかがわこうぎょうところ"
	},
	{
		original: "平松運輸",
		hiragana: "ひらまつうんゆ"
	},
	{
		original: "三陸運送",
		hiragana: "さんりくうんそう"
	},
	{
		original: "伸誠運輸有限会社",
		hiragana: "しんまことうんゆゆうげんがいしゃ"
	},
	{
		original: "真岡運送",
		hiragana: "もおかうんそう"
	},
	{
		original: "鈴木工業",
		hiragana: "すずきこうぎょう"
	},
	{
		original: "タマ通商",
		hiragana: "たまつうしょう"
	},
	{
		original: "シンノウ",
		hiragana: "しんのう"
	},
	{
		original: "バルコエキスプレス",
		hiragana: "ばるこえきすぷれす"
	},
	{
		original: "有限会社ＳＡＮＹＯ　Ｌｏｇｉｓｔｉｃｓ",
		hiragana: "ゆうげんがいしゃＳＡＮＹＯ　Ｌｏｇｉｓｔｉｃｓ"
	},
	{
		original: "日通水島運輸",
		hiragana: "にっつうみずしまうんゆ"
	},
	{
		original: "九州都南輸送",
		hiragana: "きゅうしゅうとなんゆそう"
	},
	{
		original: "宮本陸運",
		hiragana: "みやもとりくうん"
	},
	{
		original: "有限会社八千代運送",
		hiragana: "ゆうげんがいしゃやちようんそう"
	},
	{
		original: "長岡運送",
		hiragana: "ながおかうんそう"
	},
	{
		original: "丸嶋運送",
		hiragana: "まるしまうんそう"
	},
	{
		original: "友田運送",
		hiragana: "ともだうんそう"
	},
	{
		original: "リュウオー",
		hiragana: "りゅうおー"
	},
	{
		original: "フジショウ",
		hiragana: "ふじしょう"
	},
	{
		original: "ナンニチ流通",
		hiragana: "なんにちりゅうつう"
	},
	{
		original: "川翔プログレス",
		hiragana: "かわしょうぷろぐれす"
	},
	{
		original: "キクチメッセンジャー",
		hiragana: "きくちめっせんじゃー"
	},
	{
		original: "有限会社八千代運輸倉庫",
		hiragana: "ゆうげんがいしゃやちようんゆそうこ"
	},
	{
		original: "ウインローダー",
		hiragana: "ういんろーだー"
	},
	{
		original: "キョーネン",
		hiragana: "きょーねん"
	},
	{
		original: "テーオー運輸",
		hiragana: "てーおーうんゆ"
	},
	{
		original: "岡昇",
		hiragana: "おかのぼる"
	},
	{
		original: "ロジテム",
		hiragana: "ろじてむ"
	},
	{
		original: "深谷倉庫",
		hiragana: "ふかやそうこ"
	},
	{
		original: "トップ通商",
		hiragana: "とっぷつうしょう"
	},
	{
		original: "三喜運輸",
		hiragana: "さんきうんゆ"
	},
	{
		original: "荻布倉庫",
		hiragana: "おぎのそうこ"
	},
	{
		original: "富士レッカー",
		hiragana: "ふじれっかー"
	},
	{
		original: "北陸日本海油送",
		hiragana: "ほくりくにほんかいゆそう"
	},
	{
		original: "ラッキー運輸",
		hiragana: "らっきーうんゆ"
	},
	{
		original: "タカラサービス",
		hiragana: "たからさーびす"
	},
	{
		original: "マルコウ運輸",
		hiragana: "まるこううんゆ"
	},
	{
		original: "マルソー物流サービス",
		hiragana: "まるそーぶつりゅうさーびす"
	},
	{
		original: "ベーシック",
		hiragana: "べーしっく"
	},
	{
		original: "丸五運輸",
		hiragana: "まるごうんゆ"
	},
	{
		original: "阪南流通",
		hiragana: "はんなんりゅうつう"
	},
	{
		original: "山神運輸工業",
		hiragana: "さんしんうんゆこうぎょう"
	},
	{
		original: "日通富山運輸",
		hiragana: "にっつうとやまうんゆ"
	},
	{
		original: "日電徳島",
		hiragana: "にちでんとくしま"
	},
	{
		original: "横堀商事運輸",
		hiragana: "よこぼりしょうじうんゆ"
	},
	{
		original: "鶴見運送",
		hiragana: "つるみうんそう"
	},
	{
		original: "びわ貨物運送",
		hiragana: "びわかもつうんそう"
	},
	{
		original: "友和物流",
		hiragana: "ともかずぶつりゅう"
	},
	{
		original: "豊嶋運送",
		hiragana: "とよしまうんそう"
	},
	{
		original: "鋼ライン",
		hiragana: "こうらいん"
	},
	{
		original: "下関通運",
		hiragana: "しものせきつううん"
	},
	{
		original: "ショーゼン",
		hiragana: "しょーぜん"
	},
	{
		original: "ＴＩＥＳ",
		hiragana: "ＴＩＥＳ"
	},
	{
		original: "ナガシマ物流サービス",
		hiragana: "ながしまぶつりゅうさーびす"
	},
	{
		original: "札幌物流",
		hiragana: "さっぽろぶつりゅう"
	},
	{
		original: "大和トランスポート",
		hiragana: "やまととらんすぽーと"
	},
	{
		original: "毘双運輸",
		hiragana: "びそううんゆ"
	},
	{
		original: "秋山逓送",
		hiragana: "あきやまていそう"
	},
	{
		original: "中日運送",
		hiragana: "ちゅうにちうんそう"
	},
	{
		original: "キョーフク",
		hiragana: "きょーふく"
	},
	{
		original: "坂元運送",
		hiragana: "さかもとうんそう"
	},
	{
		original: "柚野産業有限会社",
		hiragana: "ゆずのさんぎょうゆうげんがいしゃ"
	},
	{
		original: "石岡地区通運",
		hiragana: "いしおかちくつううん"
	},
	{
		original: "誠和運輸",
		hiragana: "せいわうんゆ"
	},
	{
		original: "筑後運送",
		hiragana: "ちくごうんそう"
	},
	{
		original: "東豊運輸",
		hiragana: "とうほううんゆ"
	},
	{
		original: "エイワン物流",
		hiragana: "えいわんぶつりゅう"
	},
	{
		original: "西宮カーゴ",
		hiragana: "にしのみやかーご"
	},
	{
		original: "有限会社谷運輸",
		hiragana: "ゆうげんがいしゃたにうんゆ"
	},
	{
		original: "二葉物産",
		hiragana: "ふたばぶっさん"
	},
	{
		original: "防府通運",
		hiragana: "ほうふつううん"
	},
	{
		original: "長野通運",
		hiragana: "ながのつううん"
	},
	{
		original: "トーシン社",
		hiragana: "とーしんしゃ"
	},
	{
		original: "東静運送",
		hiragana: "ひがしせいうんそう"
	},
	{
		original: "ＣＬＯ",
		hiragana: "ＣＬＯ"
	},
	{
		original: "ウインローダー",
		hiragana: "ういんろーだー"
	},
	{
		original: "キョーネン",
		hiragana: "きょーねん"
	},
	{
		original: "有限会社八千代運送",
		hiragana: "ゆうげんがいしゃやちようんそう"
	},
	{
		original: "鶴山運送",
		hiragana: "つるやまうんそう"
	},
	{
		original: "宮本陸運",
		hiragana: "みやもとりくうん"
	},
	{
		original: "リュウオー",
		hiragana: "りゅうおー"
	},
	{
		original: "加茂谷運送",
		hiragana: "かもたにうんそう"
	},
	{
		original: "友田運送",
		hiragana: "ともだうんそう"
	},
	{
		original: "長岡運送",
		hiragana: "ながおかうんそう"
	},
	{
		original: "丸中運送",
		hiragana: "まるなかうんそう"
	},
	{
		original: "関東物流",
		hiragana: "かんとうぶつりゅう"
	},
	{
		original: "飾磨海運",
		hiragana: "しかまかいうん"
	},
	{
		original: "両備高速",
		hiragana: "りょうびこうそく"
	},
	{
		original: "パッシブル有限会社",
		hiragana: "ぱっしぶるゆうげんがいしゃ"
	},
	{
		original: "協和輸送",
		hiragana: "きょうわゆそう"
	},
	{
		original: "東海エクスプレス",
		hiragana: "とうかいえくすぷれす"
	},
	{
		original: "冨樫運輸",
		hiragana: "とがしうんゆ"
	},
	{
		original: "日置運送",
		hiragana: "ひおきうんそう"
	},
	{
		original: "大洋運輸",
		hiragana: "たいよううんゆ"
	},
	{
		original: "旭梱包運輸",
		hiragana: "あさひこんぽううんゆ"
	},
	{
		original: "ワタコー",
		hiragana: "わたこー"
	},
	{
		original: "福住運輸倉庫",
		hiragana: "ふくずみうんゆそうこ"
	},
	{
		original: "下電運輸",
		hiragana: "したでんうんゆ"
	},
	{
		original: "サッポロ流通システム",
		hiragana: "さっぽろりゅうつうしすてむ"
	},
	{
		original: "北斗システム輸送",
		hiragana: "ほくとしすてむゆそう"
	},
	{
		original: "エスアンドエー",
		hiragana: "えすあんどえー"
	},
	{
		original: "大栄運輸",
		hiragana: "だいえいうんゆ"
	},
	{
		original: "３Ｄ",
		hiragana: "３Ｄ"
	},
	{
		original: "エヌ産業有限会社",
		hiragana: "えぬさんぎょうゆうげんがいしゃ"
	},
	{
		original: "山梨通運",
		hiragana: "やまなしつううん"
	},
	{
		original: "細野運送",
		hiragana: "ほそのうんそう"
	},
	{
		original: "石川アサヒ運送",
		hiragana: "いしかわあさひうんそう"
	},
	{
		original: "ヤマヒロ運輸",
		hiragana: "やまひろうんゆ"
	},
	{
		original: "有限会社東豊産業",
		hiragana: "ゆうげんがいしゃとうほうさんぎょう"
	},
	{
		original: "アーティクルキャリートーコー",
		hiragana: "あーてぃくるきゃりーとーこー"
	},
	{
		original: "丸勢運輸",
		hiragana: "まるせうんゆ"
	},
	{
		original: "道央通商",
		hiragana: "どうおうつうしょう"
	},
	{
		original: "さきがけ物流",
		hiragana: "さきがけぶつりゅう"
	},
	{
		original: "原口商事",
		hiragana: "はらぐちしょうじ"
	},
	{
		original: "小坂運材",
		hiragana: "こさかうんざい"
	},
	{
		original: "ＪＡＰＡＮ　ＥＸＰＲＥＳＳ",
		hiragana: "ＪＡＰＡＮ　ＥＸＰＲＥＳＳ"
	},
	{
		original: "丸美急配",
		hiragana: "まるみきゅうはい"
	},
	{
		original: "大幸運輸",
		hiragana: "だいこううんゆ"
	},
	{
		original: "日通三重自動車運送",
		hiragana: "にっつうみえじどうしゃうんそう"
	},
	{
		original: "総合運送有限会社",
		hiragana: "そうごううんそうゆうげんがいしゃ"
	},
	{
		original: "ＡＺＵＭＡ",
		hiragana: "ＡＺＵＭＡ"
	},
	{
		original: "桐生小型運送",
		hiragana: "きりゅうこがたうんそう"
	},
	{
		original: "ＳＫライン南九州",
		hiragana: "ＳＫらいんみなみきゅうしゅう"
	},
	{
		original: "金生運輸",
		hiragana: "きんなまうんゆ"
	},
	{
		original: "金子運送",
		hiragana: "かねこうんそう"
	},
	{
		original: "沖縄郵便逓送",
		hiragana: "おきなわゆうびんていそう"
	},
	{
		original: "由良陸運",
		hiragana: "ゆらりくうん"
	},
	{
		original: "浅野運輸",
		hiragana: "あさのうんゆ"
	},
	{
		original: "丸中倉庫運輸",
		hiragana: "まるなかくらこうんゆ"
	},
	{
		original: "北海興業",
		hiragana: "ほっかいこうぎょう"
	},
	{
		original: "引越革命",
		hiragana: "ひっこしかくめい"
	},
	{
		original: "東端運輸",
		hiragana: "とうたんうんゆ"
	},
	{
		original: "西村運輸倉庫",
		hiragana: "にしむらうんゆそうこ"
	},
	{
		original: "磯部運輸倉庫",
		hiragana: "いそべうんゆそうこ"
	},
	{
		original: "マルソウ物流",
		hiragana: "まるそうぶつりゅう"
	},
	{
		original: "有限会社浜北ロジステック",
		hiragana: "ゆうげんがいしゃはまきたろじすてっく"
	},
	{
		original: "やまと運輸",
		hiragana: "やまとうんゆ"
	},
	{
		original: "大和通商",
		hiragana: "やまとつうしょう"
	},
	{
		original: "有限会社弥栄通運",
		hiragana: "ゆうげんがいしゃいやさかつううん"
	},
	{
		original: "松下運輸",
		hiragana: "まつしたうんゆ"
	},
	{
		original: "ティール",
		hiragana: "てぃーる"
	},
	{
		original: "東北カーゴ",
		hiragana: "とうほくかーご"
	},
	{
		original: "京浜運送",
		hiragana: "けいひんうんそう"
	},
	{
		original: "丸急物流",
		hiragana: "まるきゅうぶつりゅう"
	},
	{
		original: "島中商事",
		hiragana: "しまなかしょうじ"
	},
	{
		original: "東海丸和ロジスティクス",
		hiragana: "とうかいまるわろじすてぃくす"
	},
	{
		original: "ゲイソー・ロジスティクス",
		hiragana: "げいそー・ろじすてぃくす"
	},
	{
		original: "エイエスエムトランスポート",
		hiragana: "えいえすえむとらんすぽーと"
	},
	{
		original: "共立空輸",
		hiragana: "きょうりつくうゆ"
	},
	{
		original: "ちゅうえき",
		hiragana: "ちゅうえき"
	},
	{
		original: "ワイズ・パーソン",
		hiragana: "わいず・ぱーそん"
	},
	{
		original: "大樹運輸",
		hiragana: "たいじゅうんゆ"
	},
	{
		original: "遠州梱包運輸",
		hiragana: "えんしゅうこんぽううんゆ"
	},
	{
		original: "ヤシマコンテナサービス",
		hiragana: "やしまこんてなさーびす"
	},
	{
		original: "健翔",
		hiragana: "けんしょう"
	},
	{
		original: "エービーシー商会ホールディングス",
		hiragana: "えーびーしーしょうかいほーるでぃんぐす"
	},
	{
		original: "エフ・シー・ティー",
		hiragana: "えふ・しー・てぃー"
	},
	{
		original: "トキワ運輸",
		hiragana: "ときわうんゆ"
	},
	{
		original: "有限会社トス・エクスプレス",
		hiragana: "ゆうげんがいしゃとす・えくすぷれす"
	},
	{
		original: "太陽運輸",
		hiragana: "たいよううんゆ"
	},
	{
		original: "有限会社菅原物流",
		hiragana: "ゆうげんがいしゃすがわらぶつりゅう"
	},
	{
		original: "ラインサービス",
		hiragana: "らいんさーびす"
	},
	{
		original: "大垣愛陸運送",
		hiragana: "おおがきあいりくうんそう"
	},
	{
		original: "北日本運輸",
		hiragana: "きたにほんうんゆ"
	},
	{
		original: "コバシ物流",
		hiragana: "こばしぶつりゅう"
	},
	{
		original: "三共運送",
		hiragana: "さんきょううんそう"
	},
	{
		original: "サンキュウ・トランスポート・関西",
		hiragana: "さんきゅう・とらんすぽーと・かんさい"
	},
	{
		original: "山広運輸",
		hiragana: "やまひろうんゆ"
	},
	{
		original: "吉秀トラフィック",
		hiragana: "よしひでとらふぃっく"
	},
	{
		original: "大安",
		hiragana: "たいあん"
	},
	{
		original: "宮崎配送",
		hiragana: "みやざきはいそう"
	},
	{
		original: "水郷物流サービス",
		hiragana: "すいごうぶつりゅうさーびす"
	},
	{
		original: "アスカ・コーポレーション",
		hiragana: "あすか・こーぽれーしょん"
	},
	{
		original: "ＭＡＲＵＧＯ",
		hiragana: "ＭＡＲＵＧＯ"
	},
	{
		original: "東洋社",
		hiragana: "とうようしゃ"
	},
	{
		original: "さきがけ物流",
		hiragana: "さきがけぶつりゅう"
	},
	{
		original: "アサヒ通運",
		hiragana: "あさひつううん"
	},
	{
		original: "やま司運輸有限会社",
		hiragana: "やまつかさうんゆゆうげんがいしゃ"
	},
	{
		original: "日通三重自動車運送",
		hiragana: "にっつうみえじどうしゃうんそう"
	},
	{
		original: "大阪石油工運",
		hiragana: "おおさかせきゆこううん"
	},
	{
		original: "下伊那自動車",
		hiragana: "しもいなじどうしゃ"
	},
	{
		original: "金生運輸",
		hiragana: "きんなまうんゆ"
	},
	{
		original: "原口商事",
		hiragana: "はらぐちしょうじ"
	},
	{
		original: "東貨流通",
		hiragana: "ひがしかりゅうつう"
	},
	{
		original: "中国新潟運輸",
		hiragana: "ちゅうごくにいがたうんゆ"
	},
	{
		original: "第一港運",
		hiragana: "だいいちみなとうん"
	},
	{
		original: "エーディジャパン",
		hiragana: "えーでぃじゃぱん"
	},
	{
		original: "大一倉庫",
		hiragana: "ひろかずそうこ"
	},
	{
		original: "木下運送",
		hiragana: "きのしたうんそう"
	},
	{
		original: "東北流通運送",
		hiragana: "とうほくりゅうつううんそう"
	},
	{
		original: "都運輸",
		hiragana: "みやこうんゆ"
	},
	{
		original: "大石梱包",
		hiragana: "おおいしこんぽう"
	},
	{
		original: "有限会社みなみ産業",
		hiragana: "ゆうげんがいしゃみなみさんぎょう"
	},
	{
		original: "伸光堂物流",
		hiragana: "のぶみつどうぶつりゅう"
	},
	{
		original: "鈴鹿日梱",
		hiragana: "すずかにちこん"
	},
	{
		original: "静岡ロジスティクス",
		hiragana: "しずおかろじすてぃくす"
	},
	{
		original: "ロイヤルサービス",
		hiragana: "ろいやるさーびす"
	},
	{
		original: "リンコー港運倉庫",
		hiragana: "りんこーみなとうんそうこ"
	},
	{
		original: "交神運輸",
		hiragana: "こうかみうんゆ"
	},
	{
		original: "和弘運輸",
		hiragana: "かずひろうんゆ"
	},
	{
		original: "日東企業",
		hiragana: "にっとうきぎょう"
	},
	{
		original: "飯田運送",
		hiragana: "いいだうんそう"
	},
	{
		original: "大阪進和運輸",
		hiragana: "おおさかしんわうんゆ"
	},
	{
		original: "トランスポートアトミック",
		hiragana: "とらんすぽーとあとみっく"
	},
	{
		original: "鈴健興業",
		hiragana: "すずたけしこうぎょう"
	},
	{
		original: "オネテック",
		hiragana: "おねてっく"
	},
	{
		original: "有限会社いなべ物流サービス",
		hiragana: "ゆうげんがいしゃいなべぶつりゅうさーびす"
	},
	{
		original: "西頸城運送",
		hiragana: "にしくびきうんそう"
	},
	{
		original: "ＫＩＴＳライン",
		hiragana: "ＫＩＴＳらいん"
	},
	{
		original: "トーコー",
		hiragana: "とーこー"
	},
	{
		original: "カネコ運輸",
		hiragana: "かねこうんゆ"
	},
	{
		original: "有限会社弥栄通運",
		hiragana: "ゆうげんがいしゃいやさかつううん"
	},
	{
		original: "丸田運送",
		hiragana: "まるたうんそう"
	},
	{
		original: "泰平運送",
		hiragana: "たいへいうんそう"
	},
	{
		original: "富山通運",
		hiragana: "とやまつううん"
	},
	{
		original: "松下運輸",
		hiragana: "まつしたうんゆ"
	},
	{
		original: "八信陸運",
		hiragana: "はちしんりくうん"
	},
	{
		original: "丸中倉庫運輸",
		hiragana: "まるなかくらこうんゆ"
	},
	{
		original: "産愛運送",
		hiragana: "さんあいうんそう"
	},
	{
		original: "有限会社浜北ロジステック",
		hiragana: "ゆうげんがいしゃはまきたろじすてっく"
	},
	{
		original: "有限会社七福運送",
		hiragana: "ゆうげんがいしゃしちふくうんそう"
	},
	{
		original: "東端運輸",
		hiragana: "とうたんうんゆ"
	},
	{
		original: "沖縄郵便逓送",
		hiragana: "おきなわゆうびんていそう"
	},
	{
		original: "大和通商",
		hiragana: "やまとつうしょう"
	},
	{
		original: "清水運送",
		hiragana: "しみずうんそう"
	},
	{
		original: "水郷物流サービス",
		hiragana: "すいごうぶつりゅうさーびす"
	},
	{
		original: "東栄運送",
		hiragana: "とうえいうんそう"
	},
	{
		original: "ＭＡＲＵＧＯ",
		hiragana: "ＭＡＲＵＧＯ"
	},
	{
		original: "宮崎配送",
		hiragana: "みやざきはいそう"
	},
	{
		original: "吉秀トラフィック",
		hiragana: "よしひでとらふぃっく"
	},
	{
		original: "大安",
		hiragana: "たいあん"
	},
	{
		original: "岩手中央運輸",
		hiragana: "いわてちゅうおううんゆ"
	},
	{
		original: "太陽商会",
		hiragana: "たいようしょうかい"
	},
	{
		original: "山広運輸",
		hiragana: "やまひろうんゆ"
	},
	{
		original: "鈴三興業",
		hiragana: "すずさんこうぎょう"
	},
	{
		original: "会津通商",
		hiragana: "あいづつうしょう"
	},
	{
		original: "東洋社",
		hiragana: "とうようしゃ"
	},
	{
		original: "大賀運輸",
		hiragana: "おおがうんゆ"
	},
	{
		original: "ケー・ツー",
		hiragana: "けー・つー"
	},
	{
		original: "前田物流サービス",
		hiragana: "まえだぶつりゅうさーびす"
	},
	{
		original: "ヨシアース",
		hiragana: "よしあーす"
	},
	{
		original: "協立運輸",
		hiragana: "きょうりつうんゆ"
	},
	{
		original: "松岡運送",
		hiragana: "まつおかうんそう"
	},
	{
		original: "平野商運",
		hiragana: "へいやしょううん"
	},
	{
		original: "山梨配送有限会社",
		hiragana: "やまなしはいそうゆうげんがいしゃ"
	},
	{
		original: "多荷物流",
		hiragana: "たにもつりゅう"
	},
	{
		original: "東海商運",
		hiragana: "とうかいしょううん"
	},
	{
		original: "イヌイ運送",
		hiragana: "いぬいうんそう"
	},
	{
		original: "伊藤運送",
		hiragana: "いとううんそう"
	},
	{
		original: "日立地区通運",
		hiragana: "ひたちちくつううん"
	},
	{
		original: "カタオカロジックス",
		hiragana: "かたおかろじっくす"
	},
	{
		original: "富士ミルク",
		hiragana: "ふじみるく"
	},
	{
		original: "小山産業",
		hiragana: "おやまさんぎょう"
	},
	{
		original: "アライアンス・コーポレーション",
		hiragana: "あらいあんす・こーぽれーしょん"
	},
	{
		original: "新流通運輸",
		hiragana: "しんりゅうつううんゆ"
	},
	{
		original: "有限会社新興運輸",
		hiragana: "ゆうげんがいしゃしんこううんゆ"
	},
	{
		original: "福山ドリーム運輸",
		hiragana: "ふくやまどりーむうんゆ"
	},
	{
		original: "並松運送",
		hiragana: "なみまつうんそう"
	},
	{
		original: "岡崎運輸",
		hiragana: "おかざきうんゆ"
	},
	{
		original: "アクティブプランニング",
		hiragana: "あくてぃぶぷらんにんぐ"
	},
	{
		original: "吉澤運送",
		hiragana: "よしざわうんそう"
	},
	{
		original: "リュウオーロジスティックス",
		hiragana: "りゅうおーろじすてぃっくす"
	},
	{
		original: "メイコウサポート",
		hiragana: "めいこうさぽーと"
	},
	{
		original: "美吉野運輸",
		hiragana: "みよしのうんゆ"
	},
	{
		original: "翔樹",
		hiragana: "しょうき"
	},
	{
		original: "小前田運輸",
		hiragana: "おまえだうんゆ"
	},
	{
		original: "サン・ロジテム",
		hiragana: "さん・ろじてむ"
	},
	{
		original: "クニヨシ",
		hiragana: "くによし"
	},
	{
		original: "愛寿物流",
		hiragana: "あいひさしぶつりゅう"
	},
	{
		original: "幸新陸送",
		hiragana: "さちしんりくそう"
	},
	{
		original: "中西総合運輸",
		hiragana: "なかにしそうごううんゆ"
	},
	{
		original: "マルコ運輸",
		hiragana: "まるこうんゆ"
	},
	{
		original: "オートクラフト",
		hiragana: "おーとくらふと"
	},
	{
		original: "ピーアール物流",
		hiragana: "ぴーあーるぶつりゅう"
	},
	{
		original: "湘南東海運輸",
		hiragana: "しょうなんとうかいうんゆ"
	},
	{
		original: "エイチイム",
		hiragana: "えいちいむ"
	},
	{
		original: "マルトク",
		hiragana: "まるとく"
	},
	{
		original: "有限会社ロードマンエクスプレス",
		hiragana: "ゆうげんがいしゃろーどまんえくすぷれす"
	},
	{
		original: "コイト運輸",
		hiragana: "こいとうんゆ"
	},
	{
		original: "小田運輸倉庫",
		hiragana: "おだうんゆそうこ"
	},
	{
		original: "ホクトミ運輸",
		hiragana: "ほくとみうんゆ"
	},
	{
		original: "岸貝物流",
		hiragana: "きしかいぶつりゅう"
	},
	{
		original: "福岡小型陸運",
		hiragana: "ふくおかこがたりくうん"
	},
	{
		original: "あかとき物流",
		hiragana: "あかときぶつりゅう"
	},
	{
		original: "有限会社ミスター",
		hiragana: "ゆうげんがいしゃみすたー"
	},
	{
		original: "金沢実業",
		hiragana: "かなざわじつぎょう"
	},
	{
		original: "台東運輸",
		hiragana: "たいとううんゆ"
	},
	{
		original: "小川産業",
		hiragana: "おがわさんぎょう"
	},
	{
		original: "アイエムエキスプレス",
		hiragana: "あいえむえきすぷれす"
	},
	{
		original: "野村綜合商事",
		hiragana: "のむらそうごうしょうじ"
	},
	{
		original: "合同会社スマイルエクスプレス",
		hiragana: "ごうどうかいしゃすまいるえくすぷれす"
	},
	{
		original: "有幸運輸",
		hiragana: "ありこううんゆ"
	},
	{
		original: "ロジコムサポート",
		hiragana: "ろじこむさぽーと"
	},
	{
		original: "有限会社望栄",
		hiragana: "ゆうげんがいしゃぼうさかえ"
	},
	{
		original: "千葉スワロートラック",
		hiragana: "ちばすわろーとらっく"
	},
	{
		original: "山久陸運",
		hiragana: "やまきゅうりくうん"
	},
	{
		original: "ランクルーズ",
		hiragana: "らんくるーず"
	},
	{
		original: "ディスウェイ",
		hiragana: "でぃすうぇい"
	},
	{
		original: "ブライト",
		hiragana: "ぶらいと"
	},
	{
		original: "成田運送",
		hiragana: "なりたうんそう"
	},
	{
		original: "サイキ食品",
		hiragana: "さいきしょくひん"
	},
	{
		original: "大光産業輸送",
		hiragana: "おおみつさんぎょうゆそう"
	},
	{
		original: "植木回漕店",
		hiragana: "うえきかいそうみせ"
	},
	{
		original: "サンシンエキスプレス",
		hiragana: "さんしんえきすぷれす"
	},
	{
		original: "静岡トランスポート",
		hiragana: "しずおかとらんすぽーと"
	},
	{
		original: "マルアサ梱包商会有限会社",
		hiragana: "まるあさこんぽうしょうかいゆうげんがいしゃ"
	},
	{
		original: "栃木運輸",
		hiragana: "とちぎうんゆ"
	},
	{
		original: "司商事",
		hiragana: "つかさしょうじ"
	},
	{
		original: "カミシマ運輸",
		hiragana: "かみしまうんゆ"
	},
	{
		original: "日通多治見運輸",
		hiragana: "にっつうたじみうんゆ"
	},
	{
		original: "リソー・ロジック",
		hiragana: "りそー・ろじっく"
	},
	{
		original: "ラントランス",
		hiragana: "らんとらんす"
	},
	{
		original: "熱海運送",
		hiragana: "あたみうんそう"
	},
	{
		original: "大富運輸",
		hiragana: "たいふうんゆ"
	},
	{
		original: "荻生運輸倉庫",
		hiragana: "おぎゅううんゆそうこ"
	},
	{
		original: "幸和運輸",
		hiragana: "ゆきかずうんゆ"
	},
	{
		original: "新日本輸送",
		hiragana: "しんにほんゆそう"
	},
	{
		original: "安藤運輸",
		hiragana: "あんどううんゆ"
	},
	{
		original: "ツネイシカムテックス陸運",
		hiragana: "つねいしかむてっくすりくうん"
	},
	{
		original: "丸一輸送興業",
		hiragana: "まるいちゆそうこうぎょう"
	},
	{
		original: "郡山観光運輸",
		hiragana: "こうりやまかんこううんゆ"
	},
	{
		original: "ノバ・エキスプレス",
		hiragana: "のば・えきすぷれす"
	},
	{
		original: "ティー・ピー・サービス",
		hiragana: "てぃー・ぴー・さーびす"
	},
	{
		original: "ナワショウ",
		hiragana: "なわしょう"
	},
	{
		original: "山田商店",
		hiragana: "やまだしょうてん"
	},
	{
		original: "アルファライン",
		hiragana: "あるふぁらいん"
	},
	{
		original: "アクティブトライ",
		hiragana: "あくてぃぶとらい"
	},
	{
		original: "伸栄冷蔵",
		hiragana: "しんえいれいぞう"
	},
	{
		original: "東都運搬社",
		hiragana: "とうとうんぱんしゃ"
	},
	{
		original: "碧南小型運送",
		hiragana: "へきなんこがたうんそう"
	},
	{
		original: "ユーネットランス",
		hiragana: "ゆーねっとらんす"
	},
	{
		original: "名光急送",
		hiragana: "めいひかりきゅうそう"
	},
	{
		original: "戸髙物流",
		hiragana: "こりゅう"
	},
	{
		original: "田和通商",
		hiragana: "たわつうしょう"
	},
	{
		original: "サンコー",
		hiragana: "さんこー"
	},
	{
		original: "八木運送",
		hiragana: "やぎうんそう"
	},
	{
		original: "坪本運送",
		hiragana: "つぼもとうんそう"
	},
	{
		original: "大畑運輸",
		hiragana: "おおはたうんゆ"
	},
	{
		original: "大宝レックス",
		hiragana: "たいほうれっくす"
	},
	{
		original: "忠功",
		hiragana: "ただしこう"
	},
	{
		original: "秋田エスエス商運",
		hiragana: "あきたえすえすしょううん"
	},
	{
		original: "参商輸送",
		hiragana: "さんしょうゆそう"
	},
	{
		original: "ツカサ",
		hiragana: "つかさ"
	},
	{
		original: "円山運送",
		hiragana: "まるやまうんそう"
	},
	{
		original: "長良通商",
		hiragana: "ながらつうしょう"
	},
	{
		original: "東都配送",
		hiragana: "とうとはいそう"
	},
	{
		original: "フジエクスプレス",
		hiragana: "ふじえくすぷれす"
	},
	{
		original: "東開物流",
		hiragana: "ひがしかいぶつりゅう"
	},
	{
		original: "久居運送",
		hiragana: "ひさいうんそう"
	},
	{
		original: "サンコー",
		hiragana: "さんこー"
	},
	{
		original: "ロジサポート",
		hiragana: "ろじさぽーと"
	},
	{
		original: "高雄運送",
		hiragana: "たかおうんそう"
	},
	{
		original: "富士運輸",
		hiragana: "ふじうんゆ"
	},
	{
		original: "カインズ・ロジ",
		hiragana: "かいんず・ろじ"
	},
	{
		original: "日通三河運輸",
		hiragana: "にっつうみかわうんゆ"
	},
	{
		original: "東京ロジネッツ",
		hiragana: "とうきょうろじねっつ"
	},
	{
		original: "京阪神運輸倉庫",
		hiragana: "けいはんしんうんゆそうこ"
	},
	{
		original: "野洲サルベージ",
		hiragana: "やすさるべーじ"
	},
	{
		original: "ファルマン運輸",
		hiragana: "ふぁるまんうんゆ"
	},
	{
		original: "イサゴ流通サービス",
		hiragana: "いさごりゅうつうさーびす"
	},
	{
		original: "有限会社渡利商事",
		hiragana: "ゆうげんがいしゃわたりしょうじ"
	},
	{
		original: "インターネット",
		hiragana: "いんたーねっと"
	},
	{
		original: "みちのく流通",
		hiragana: "みちのくりゅうつう"
	},
	{
		original: "岩崎運送",
		hiragana: "いわさきうんそう"
	},
	{
		original: "丸山運輸倉庫",
		hiragana: "まるやまうんゆそうこ"
	},
	{
		original: "ラックサービス",
		hiragana: "らっくさーびす"
	},
	{
		original: "豊世運輸",
		hiragana: "ゆたかようんゆ"
	},
	{
		original: "北海道日新",
		hiragana: "ほっかいどうにっしん"
	},
	{
		original: "マリネックストランスポートサービス",
		hiragana: "まりねっくすとらんすぽーとさーびす"
	},
	{
		original: "福島輸送",
		hiragana: "ふくしまゆそう"
	},
	{
		original: "ＮＸ東北トラック",
		hiragana: "ＮＸとうほくとらっく"
	},
	{
		original: "三富運送",
		hiragana: "みとみうんそう"
	},
	{
		original: "モンリク",
		hiragana: "もんりく"
	},
	{
		original: "やまひろ運輸",
		hiragana: "やまひろうんゆ"
	},
	{
		original: "梅田運輸",
		hiragana: "うめだうんゆ"
	},
	{
		original: "アドレスサービス",
		hiragana: "あどれすさーびす"
	},
	{
		original: "有限会社エヌ・ティ・エル",
		hiragana: "ゆうげんがいしゃえぬ・てぃ・える"
	},
	{
		original: "ロットサービス有限会社",
		hiragana: "ろっとさーびすゆうげんがいしゃ"
	},
	{
		original: "合同物流",
		hiragana: "ごうどうぶつりゅう"
	},
	{
		original: "エムラインズ",
		hiragana: "えむらいんず"
	},
	{
		original: "北海定温運輸",
		hiragana: "ほっかいていおんうんゆ"
	},
	{
		original: "瀧本運送",
		hiragana: "たきもとうんそう"
	},
	{
		original: "北三運輸",
		hiragana: "きたさんうんゆ"
	},
	{
		original: "オヤマグループ",
		hiragana: "おやまぐるーぷ"
	},
	{
		original: "寺田組運輸",
		hiragana: "てらだくみうんゆ"
	},
	{
		original: "サンテックサービス",
		hiragana: "さんてっくさーびす"
	},
	{
		original: "クロノス",
		hiragana: "くろのす"
	},
	{
		original: "福島ロジネット",
		hiragana: "ふくしまろじねっと"
	},
	{
		original: "ヤタガワ物流サービス",
		hiragana: "やたがわぶつりゅうさーびす"
	},
	{
		original: "日原運輸",
		hiragana: "ひはらうんゆ"
	},
	{
		original: "雅屋冷送有限会社",
		hiragana: "まさやれいそうゆうげんがいしゃ"
	},
	{
		original: "昌栄",
		hiragana: "しょうえい"
	},
	{
		original: "福岡食品サービス",
		hiragana: "ふくおかしょくひんさーびす"
	},
	{
		original: "リープ",
		hiragana: "りーぷ"
	},
	{
		original: "岩代運送",
		hiragana: "いわしろうんそう"
	},
	{
		original: "モス物流プランニング",
		hiragana: "もすぶつりゅうぷらんにんぐ"
	},
	{
		original: "南里運送",
		hiragana: "なんりうんそう"
	},
	{
		original: "三浦運輸",
		hiragana: "みうらうんゆ"
	},
	{
		original: "甘木合同運輸",
		hiragana: "あまぎごうどううんゆ"
	},
	{
		original: "遠州トラック関西",
		hiragana: "えんしゅうとらっくかんさい"
	},
	{
		original: "久安重機運輸",
		hiragana: "きゅうあんじゅうきうんゆ"
	},
	{
		original: "富士運送",
		hiragana: "ふじうんそう"
	},
	{
		original: "八光社梱包運輸",
		hiragana: "はっこうしゃこんぽううんゆ"
	},
	{
		original: "日標運輸",
		hiragana: "にちしるべうんゆ"
	},
	{
		original: "ダイヤライン",
		hiragana: "だいやらいん"
	},
	{
		original: "正運",
		hiragana: "しょううん"
	},
	{
		original: "播州商運倉庫",
		hiragana: "ばんしゅうしょううんそうこ"
	},
	{
		original: "日豊運輸",
		hiragana: "にっぽううんゆ"
	},
	{
		original: "マホリ",
		hiragana: "まほり"
	},
	{
		original: "信成",
		hiragana: "のぶなり"
	},
	{
		original: "クィーントランスポート",
		hiragana: "くぃーんとらんすぽーと"
	},
	{
		original: "宮古港湾運送",
		hiragana: "みやここうわんうんそう"
	},
	{
		original: "新潟トランスポート",
		hiragana: "にいがたとらんすぽーと"
	},
	{
		original: "Ｔ．Ａ．Ｔ",
		hiragana: "Ｔ．Ａ．Ｔ"
	},
	{
		original: "山陰物流サービス",
		hiragana: "さんいんぶつりゅうさーびす"
	},
	{
		original: "オダコーポレーション",
		hiragana: "おだこーぽれーしょん"
	},
	{
		original: "朝日町運輸倉庫",
		hiragana: "あさひまちうんゆそうこ"
	},
	{
		original: "侑弘物流",
		hiragana: "ゆうこうぶつりゅう"
	},
	{
		original: "茨城倉庫",
		hiragana: "いばらきそうこ"
	},
	{
		original: "沖津運輸",
		hiragana: "おきつうんゆ"
	},
	{
		original: "大信運輸倉庫",
		hiragana: "たいしんうんゆそうこ"
	},
	{
		original: "福富運送",
		hiragana: "ふくとみうんそう"
	},
	{
		original: "新井グループ運輸",
		hiragana: "あらいぐるーぷうんゆ"
	},
	{
		original: "新野運送",
		hiragana: "しんのうんそう"
	},
	{
		original: "愛運輸",
		hiragana: "あいうんゆ"
	},
	{
		original: "臼津鉱運",
		hiragana: "うすつこううん"
	},
	{
		original: "ランドネット",
		hiragana: "らんどねっと"
	},
	{
		original: "高知福山通運",
		hiragana: "こうちふくやまつううん"
	},
	{
		original: "ミッドバードトランス",
		hiragana: "みっどばーどとらんす"
	},
	{
		original: "城南物産運輸",
		hiragana: "じょうなんぶっさんうんゆ"
	},
	{
		original: "葵ロジスティクス",
		hiragana: "あおいろじすてぃくす"
	},
	{
		original: "フジモト運輸",
		hiragana: "ふじもとうんゆ"
	},
	{
		original: "ムラカタ流通",
		hiragana: "むらかたりゅうつう"
	},
	{
		original: "水野運輸",
		hiragana: "みずのうんゆ"
	},
	{
		original: "鶴崎林商運輸",
		hiragana: "つるさきはやししょううんゆ"
	},
	{
		original: "藤原運輸",
		hiragana: "ふじわらうんゆ"
	},
	{
		original: "四国高速",
		hiragana: "しこくこうそく"
	},
	{
		original: "久山流通運輸",
		hiragana: "ひさやまりゅうつううんゆ"
	},
	{
		original: "シュタープ",
		hiragana: "しゅたーぷ"
	},
	{
		original: "中田商事",
		hiragana: "なかだしょうじ"
	},
	{
		original: "トクラ運輸",
		hiragana: "とくらうんゆ"
	},
	{
		original: "報友梱包運輸",
		hiragana: "ほうともこんぽううんゆ"
	},
	{
		original: "昭英物流",
		hiragana: "あきひでぶつりゅう"
	},
	{
		original: "高瀬運送",
		hiragana: "たかせうんそう"
	},
	{
		original: "高木運輸",
		hiragana: "たかぎうんゆ"
	},
	{
		original: "クールテックサガワ",
		hiragana: "くーるてっくさがわ"
	},
	{
		original: "山下運輸",
		hiragana: "やましたうんゆ"
	},
	{
		original: "鮎陸運倉庫",
		hiragana: "あゆりくうんそうこ"
	},
	{
		original: "有限会社青井運送",
		hiragana: "ゆうげんがいしゃあおいうんそう"
	},
	{
		original: "トラックス",
		hiragana: "とらっくす"
	},
	{
		original: "飯田運輸",
		hiragana: "いいだうんゆ"
	},
	{
		original: "北海コンノ急送",
		hiragana: "ほっかいこんのきゅうそう"
	},
	{
		original: "小坂通運",
		hiragana: "こさかつううん"
	},
	{
		original: "岩倉海陸運輸",
		hiragana: "いわくらかいりくうんゆ"
	},
	{
		original: "日通郡山運輸",
		hiragana: "にっつうこうりやまうんゆ"
	},
	{
		original: "ロジックス近畿",
		hiragana: "ろじっくすきんき"
	},
	{
		original: "河合コーポレーション",
		hiragana: "かわいこーぽれーしょん"
	},
	{
		original: "ロジネットジャパン東日本",
		hiragana: "ろじねっとじゃぱんひがしにほん"
	},
	{
		original: "中山運輸機工",
		hiragana: "なかやまうんゆきこう"
	},
	{
		original: "ナガオ",
		hiragana: "ながお"
	},
	{
		original: "ＬＡＮ",
		hiragana: "ＬＡＮ"
	},
	{
		original: "有限会社左近商店",
		hiragana: "ゆうげんがいしゃさこんしょうてん"
	},
	{
		original: "ニシアツ",
		hiragana: "にしあつ"
	},
	{
		original: "フジデン運送",
		hiragana: "ふじでんうんそう"
	},
	{
		original: "成和産業",
		hiragana: "しげかずさんぎょう"
	},
	{
		original: "ニックフレート",
		hiragana: "にっくふれーと"
	},
	{
		original: "システム物流",
		hiragana: "しすてむぶつりゅう"
	},
	{
		original: "共進ソリューションズ",
		hiragana: "きょうしんそりゅーしょんず"
	},
	{
		original: "新富運輸",
		hiragana: "しんとみうんゆ"
	},
	{
		original: "照栄物流",
		hiragana: "しょうさかえぶつりゅう"
	},
	{
		original: "東亜物産",
		hiragana: "とうあぶっさん"
	},
	{
		original: "アテックライン",
		hiragana: "あてっくらいん"
	},
	{
		original: "ロジスペック",
		hiragana: "ろじすぺっく"
	},
	{
		original: "飯野港運",
		hiragana: "いいのみなとうん"
	},
	{
		original: "倉本運送",
		hiragana: "くらもとうんそう"
	},
	{
		original: "脇田運輸",
		hiragana: "わきたうんゆ"
	},
	{
		original: "清翔産業",
		hiragana: "きよししょうさんぎょう"
	},
	{
		original: "グローバルライン",
		hiragana: "ぐろーばるらいん"
	},
	{
		original: "福島陸運",
		hiragana: "ふくしまりくうん"
	},
	{
		original: "誠運輸",
		hiragana: "まことうんゆ"
	},
	{
		original: "関東ロジテック",
		hiragana: "かんとうろじてっく"
	},
	{
		original: "新潟道徳運輸",
		hiragana: "にいがたどうとくうんゆ"
	},
	{
		original: "両毛運輸",
		hiragana: "りょうもううんゆ"
	},
	{
		original: "フクダ運輸倉庫",
		hiragana: "ふくだうんゆそうこ"
	},
	{
		original: "大島産業",
		hiragana: "おおしまさんぎょう"
	},
	{
		original: "長福運送",
		hiragana: "ちょうふくうんそう"
	},
	{
		original: "山藤運送",
		hiragana: "やまふじうんそう"
	},
	{
		original: "大浪陸運",
		hiragana: "おおなみりくうん"
	},
	{
		original: "花村運送",
		hiragana: "はなむらうんそう"
	},
	{
		original: "ロジネットジャパン九州",
		hiragana: "ろじねっとじゃぱんきゅうしゅう"
	},
	{
		original: "フジイ",
		hiragana: "ふじい"
	},
	{
		original: "新城商運",
		hiragana: "しんじょうしょううん"
	},
	{
		original: "大阪新運輸",
		hiragana: "おおさかしんうんゆ"
	},
	{
		original: "あおきフード",
		hiragana: "あおきふーど"
	},
	{
		original: "大進運輸",
		hiragana: "たいしんうんゆ"
	},
	{
		original: "秋田物流センター",
		hiragana: "あきたぶつりゅうせんたー"
	},
	{
		original: "北旭物流",
		hiragana: "きたあさひぶつりゅう"
	},
	{
		original: "大長運輸",
		hiragana: "たいちょううんゆ"
	},
	{
		original: "花島運輸",
		hiragana: "はなしまうんゆ"
	},
	{
		original: "明仙運輸",
		hiragana: "めいせんうんゆ"
	},
	{
		original: "嶋本運送",
		hiragana: "しまもとうんそう"
	},
	{
		original: "徳島特急輸送",
		hiragana: "とくしまとっきゅうゆそう"
	},
	{
		original: "有限会社米盛運送",
		hiragana: "ゆうげんがいしゃこめせいうんそう"
	},
	{
		original: "農協物流わかやま",
		hiragana: "のうきょうぶつりゅうわかやま"
	},
	{
		original: "サンコーロジテック",
		hiragana: "さんこーろじてっく"
	},
	{
		original: "つるとみ運輸",
		hiragana: "つるとみうんゆ"
	},
	{
		original: "イディアトランスポートサービス",
		hiragana: "いでぃあとらんすぽーとさーびす"
	},
	{
		original: "アイ・エス・ライン",
		hiragana: "あい・えす・らいん"
	},
	{
		original: "フジフィールド",
		hiragana: "ふじふぃーるど"
	},
	{
		original: "田地川運送",
		hiragana: "たじかわうんそう"
	},
	{
		original: "鈴商",
		hiragana: "すずしょう"
	},
	{
		original: "牛走運送",
		hiragana: "うしそううんそう"
	},
	{
		original: "有限会社パースル・ライン・ジャパン",
		hiragana: "ゆうげんがいしゃぱーする・らいん・じゃぱん"
	},
	{
		original: "柏原物流",
		hiragana: "かしわばらぶつりゅう"
	},
	{
		original: "大新運輸有限会社",
		hiragana: "だいしんうんゆゆうげんがいしゃ"
	},
	{
		original: "有限会社丸重清川",
		hiragana: "ゆうげんがいしゃまるじゅうきよかわ"
	},
	{
		original: "有限会社林商会",
		hiragana: "ゆうげんがいしゃはやししょうかい"
	},
	{
		original: "多田物流",
		hiragana: "ただぶつりゅう"
	},
	{
		original: "ヤマラク運輸",
		hiragana: "やまらくうんゆ"
	},
	{
		original: "有限会社鍛代商事",
		hiragana: "ゆうげんがいしゃきたいしょうじ"
	},
	{
		original: "相生運送有限会社",
		hiragana: "あいおいうんそうゆうげんがいしゃ"
	},
	{
		original: "みのり運輸",
		hiragana: "みのりうんゆ"
	},
	{
		original: "エイト商会",
		hiragana: "えいとしょうかい"
	},
	{
		original: "蔵前運輸倉庫",
		hiragana: "くらまえうんゆそうこ"
	},
	{
		original: "ケーライン",
		hiragana: "けーらいん"
	},
	{
		original: "フライスター物流",
		hiragana: "ふらいすたーぶつりゅう"
	},
	{
		original: "ワイケーサービス",
		hiragana: "わいけーさーびす"
	},
	{
		original: "北陸センコー運輸",
		hiragana: "ほくりくせんこーうんゆ"
	},
	{
		original: "博多海陸運送",
		hiragana: "はかたかいりくうんそう"
	},
	{
		original: "中野運送",
		hiragana: "なかのうんそう"
	},
	{
		original: "有限会社大進商運",
		hiragana: "ゆうげんがいしゃたいしんしょううん"
	},
	{
		original: "国際運輸",
		hiragana: "こくさいうんゆ"
	},
	{
		original: "Ｎワークス",
		hiragana: "Ｎわーくす"
	},
	{
		original: "小林流通",
		hiragana: "こばやしりゅうつう"
	},
	{
		original: "大亀運輸",
		hiragana: "おおがめうんゆ"
	},
	{
		original: "くみあい運輸",
		hiragana: "くみあいうんゆ"
	},
	{
		original: "奈良郵便輸送",
		hiragana: "ならゆうびんゆそう"
	},
	{
		original: "物流サービス",
		hiragana: "ぶつりゅうさーびす"
	},
	{
		original: "サンデン・ロジスティクス＆リユース",
		hiragana: "さんでん・ろじすてぃくす＆りゆーす"
	},
	{
		original: "吉川運送",
		hiragana: "よしかわうんそう"
	},
	{
		original: "カンリクＥＸＰＲＥＳＳ関西",
		hiragana: "かんりくＥＸＰＲＥＳＳかんさい"
	},
	{
		original: "奥洲物産運輸",
		hiragana: "おくすぶっさんうんゆ"
	},
	{
		original: "土屋産業",
		hiragana: "つちやさんぎょう"
	},
	{
		original: "荒川瀧石",
		hiragana: "あらかわたきいし"
	},
	{
		original: "北陸七福運送",
		hiragana: "ほくりくしちふくうんそう"
	},
	{
		original: "門正運輸倉庫",
		hiragana: "もんしょううんゆそうこ"
	},
	{
		original: "南海サービス",
		hiragana: "なんかいさーびす"
	},
	{
		original: "電気硝子物流サービス",
		hiragana: "でんきがらすぶつりゅうさーびす"
	},
	{
		original: "丸山物流",
		hiragana: "まるやまぶつりゅう"
	},
	{
		original: "丸玉運送名古屋",
		hiragana: "まるたまうんそうなごや"
	},
	{
		original: "アシュア",
		hiragana: "あしゅあ"
	},
	{
		original: "木佐森",
		hiragana: "きさもり"
	},
	{
		original: "長野トランスポート",
		hiragana: "ながのとらんすぽーと"
	},
	{
		original: "北都高速運輸倉庫金沢",
		hiragana: "ほくとこうそくうんゆそうこかなざわ"
	},
	{
		original: "岩手紫波運輸有限会社",
		hiragana: "いわてしわうんゆゆうげんがいしゃ"
	},
	{
		original: "藤和産業",
		hiragana: "とうわさんぎょう"
	},
	{
		original: "有限会社武元重機",
		hiragana: "ゆうげんがいしゃたけもとじゅうき"
	},
	{
		original: "野々山運輸",
		hiragana: "ののやまうんゆ"
	},
	{
		original: "ハート急便",
		hiragana: "はーときゅうびん"
	},
	{
		original: "和香商事",
		hiragana: "わかしょうじ"
	},
	{
		original: "有限会社中浩運輸",
		hiragana: "ゆうげんがいしゃなかこううんゆ"
	},
	{
		original: "名古屋物流サービス",
		hiragana: "なごやぶつりゅうさーびす"
	},
	{
		original: "扇町運送",
		hiragana: "おうぎまちうんそう"
	},
	{
		original: "トラスト",
		hiragana: "とらすと"
	},
	{
		original: "天星製油",
		hiragana: "てんほしせいゆ"
	},
	{
		original: "エーライン",
		hiragana: "えーらいん"
	},
	{
		original: "山昌",
		hiragana: "やままさ"
	},
	{
		original: "鹿島物流",
		hiragana: "かしまぶつりゅう"
	},
	{
		original: "関西物流",
		hiragana: "かんさいぶつりゅう"
	},
	{
		original: "伊達重機",
		hiragana: "だてじゅうき"
	},
	{
		original: "新晃運輸",
		hiragana: "しんこううんゆ"
	},
	{
		original: "唐津港運輸",
		hiragana: "からつみなとうんゆ"
	},
	{
		original: "光洋運輸",
		hiragana: "こうよううんゆ"
	},
	{
		original: "有限会社アクティブ",
		hiragana: "ゆうげんがいしゃあくてぃぶ"
	},
	{
		original: "橋口運輸",
		hiragana: "はしぐちうんゆ"
	},
	{
		original: "久星物流",
		hiragana: "きゅうほしぶつりゅう"
	},
	{
		original: "リンコー運輸",
		hiragana: "りんこーうんゆ"
	},
	{
		original: "ＷＯＲＬＤｉｎｇ",
		hiragana: "ＷＯＲＬＤｉｎｇ"
	},
	{
		original: "栄和港運",
		hiragana: "えいわみなとうん"
	},
	{
		original: "米沢合同運送",
		hiragana: "よねざわごうどううんそう"
	},
	{
		original: "園田運送有限会社",
		hiragana: "そのだうんそうゆうげんがいしゃ"
	},
	{
		original: "名古屋低温物流",
		hiragana: "なごやていおんぶつりゅう"
	},
	{
		original: "東晋",
		hiragana: "とうしん"
	},
	{
		original: "西濃東京エキスプレス",
		hiragana: "せいのうとうきょうえきすぷれす"
	},
	{
		original: "トムスエンタープライズ",
		hiragana: "とむすえんたーぷらいず"
	},
	{
		original: "スギヤマ",
		hiragana: "すぎやま"
	},
	{
		original: "三協通産",
		hiragana: "さんきょうつうさん"
	},
	{
		original: "有限会社県内貨物サービス",
		hiragana: "ゆうげんがいしゃけんないかもつさーびす"
	},
	{
		original: "岡野運送",
		hiragana: "おかのうんそう"
	},
	{
		original: "共同サービス",
		hiragana: "きょうどうさーびす"
	},
	{
		original: "秋田港北トラック",
		hiragana: "あきたこうほくとらっく"
	},
	{
		original: "県西運輸",
		hiragana: "けんせいうんゆ"
	},
	{
		original: "西運",
		hiragana: "にしうん"
	},
	{
		original: "三八五トランスポート",
		hiragana: "さんぱちごとらんすぽーと"
	},
	{
		original: "ミカワ",
		hiragana: "みかわ"
	},
	{
		original: "松島運送",
		hiragana: "まつしまうんそう"
	},
	{
		original: "有限会社孝富運輸",
		hiragana: "ゆうげんがいしゃたかとみうんゆ"
	},
	{
		original: "光洋運輸",
		hiragana: "こうよううんゆ"
	},
	{
		original: "ＩＳＭ",
		hiragana: "ＩＳＭ"
	},
	{
		original: "エスライン羽島",
		hiragana: "えすらいんはねしま"
	},
	{
		original: "高見起業",
		hiragana: "たかみきぎょう"
	},
	{
		original: "山形運送",
		hiragana: "やまがたうんそう"
	},
	{
		original: "高田運輸",
		hiragana: "たかだうんゆ"
	},
	{
		original: "久留生商事運輸",
		hiragana: "くるなましょうじうんゆ"
	},
	{
		original: "新興運輸",
		hiragana: "しんこううんゆ"
	},
	{
		original: "富士運輸",
		hiragana: "ふじうんゆ"
	},
	{
		original: "エムエスビー",
		hiragana: "えむえすびー"
	},
	{
		original: "クローバーズ",
		hiragana: "くろーばーず"
	},
	{
		original: "釧路倉庫",
		hiragana: "くしろそうこ"
	},
	{
		original: "柴田運送",
		hiragana: "しばたうんそう"
	},
	{
		original: "陸前運送",
		hiragana: "りくぜんうんそう"
	},
	{
		original: "東福運送",
		hiragana: "とうふくうんそう"
	},
	{
		original: "関東システムサービス",
		hiragana: "かんとうしすてむさーびす"
	},
	{
		original: "美才治運輸",
		hiragana: "びさいおさむうんゆ"
	},
	{
		original: "三定物流",
		hiragana: "さんていぶつりゅう"
	},
	{
		original: "藤栄輸送",
		hiragana: "ふじえゆそう"
	},
	{
		original: "手束商事",
		hiragana: "てづかしょうじ"
	},
	{
		original: "松原組運送",
		hiragana: "まつばらくみうんそう"
	},
	{
		original: "椿田興業",
		hiragana: "つばきだこうぎょう"
	},
	{
		original: "相馬港湾運送",
		hiragana: "そうまこうわんうんそう"
	},
	{
		original: "日西物流",
		hiragana: "にっせいぶつりゅう"
	},
	{
		original: "流星物流",
		hiragana: "りゅうせいぶつりゅう"
	},
	{
		original: "有限会社白河東西運輸",
		hiragana: "ゆうげんがいしゃしらかわとうざいうんゆ"
	},
	{
		original: "ビッグワン・コバヤシ",
		hiragana: "びっぐわん・こばやし"
	},
	{
		original: "ヒカミ",
		hiragana: "ひかみ"
	},
	{
		original: "イヌイ倉庫オペレーションズ",
		hiragana: "いぬいそうこおぺれーしょんず"
	},
	{
		original: "長崎雲仙運輸",
		hiragana: "ながさきうんぜんうんゆ"
	},
	{
		original: "川菱産業",
		hiragana: "かわひしさんぎょう"
	},
	{
		original: "新急",
		hiragana: "しんきゅう"
	},
	{
		original: "有限会社愛知高速運輸",
		hiragana: "ゆうげんがいしゃあいちこうそくうんゆ"
	},
	{
		original: "キューブツ",
		hiragana: "きゅーぶつ"
	},
	{
		original: "谷田川運送",
		hiragana: "たにたかわうんそう"
	},
	{
		original: "ケーライン",
		hiragana: "けーらいん"
	},
	{
		original: "大貫運送",
		hiragana: "おおぬきうんそう"
	},
	{
		original: "池上通運",
		hiragana: "いけがみつううん"
	},
	{
		original: "美瑛通運",
		hiragana: "びえいつううん"
	},
	{
		original: "仙台配送",
		hiragana: "せんだいはいそう"
	},
	{
		original: "舞鶴運輸",
		hiragana: "まいづるうんゆ"
	},
	{
		original: "又新トランスポート",
		hiragana: "またしんとらんすぽーと"
	},
	{
		original: "飛越運送",
		hiragana: "とびこしうんそう"
	},
	{
		original: "西日本急送",
		hiragana: "にしにほんきゅうそう"
	},
	{
		original: "鷹野運送",
		hiragana: "たかのうんそう"
	},
	{
		original: "丸五運輸",
		hiragana: "まるごうんゆ"
	},
	{
		original: "有限会社金本運輸",
		hiragana: "ゆうげんがいしゃかねもとうんゆ"
	},
	{
		original: "中一陸運",
		hiragana: "ちゅういちりくうん"
	},
	{
		original: "有限会社足立運送",
		hiragana: "ゆうげんがいしゃあだちうんそう"
	},
	{
		original: "安信運輸",
		hiragana: "やすのぶうんゆ"
	},
	{
		original: "丸和運輸",
		hiragana: "まるわうんゆ"
	},
	{
		original: "有限会社土佐商事",
		hiragana: "ゆうげんがいしゃとさしょうじ"
	},
	{
		original: "小高商事",
		hiragana: "おだかしょうじ"
	},
	{
		original: "中津貨物自動車",
		hiragana: "なかつかもつじどうしゃ"
	},
	{
		original: "関東通運",
		hiragana: "かんとうつううん"
	},
	{
		original: "熊本西濃運輸",
		hiragana: "くまもとせいのううんゆ"
	},
	{
		original: "福岡陸運",
		hiragana: "ふくおかりくうん"
	},
	{
		original: "ティ・エス・ロジコム",
		hiragana: "てぃ・えす・ろじこむ"
	},
	{
		original: "センヨシロジスティクス",
		hiragana: "せんよしろじすてぃくす"
	},
	{
		original: "三協運輸",
		hiragana: "さんきょううんゆ"
	},
	{
		original: "北海道家具輸送",
		hiragana: "ほっかいどうかぐゆそう"
	},
	{
		original: "ハネイシ",
		hiragana: "はねいし"
	},
	{
		original: "エムティーロジ",
		hiragana: "えむてぃーろじ"
	},
	{
		original: "三星運送",
		hiragana: "みつぼしうんそう"
	},
	{
		original: "新潟市場運送",
		hiragana: "にいがたしばうんそう"
	},
	{
		original: "ケイラインロジコム",
		hiragana: "けいらいんろじこむ"
	},
	{
		original: "キチナントランスポート",
		hiragana: "きちなんとらんすぽーと"
	},
	{
		original: "丸磯運輸",
		hiragana: "まるいそうんゆ"
	},
	{
		original: "共同",
		hiragana: "きょうどう"
	},
	{
		original: "平正技研サービス",
		hiragana: "たいらせいぎけんさーびす"
	},
	{
		original: "新潟トナミ運輸",
		hiragana: "にいがたとなみうんゆ"
	},
	{
		original: "豊島急送",
		hiragana: "とよしまきゅうそう"
	},
	{
		original: "因伯通運",
		hiragana: "いんはくつううん"
	},
	{
		original: "日の丸運輸",
		hiragana: "ひのまるうんゆ"
	},
	{
		original: "佐藤運輸有限会社",
		hiragana: "さとううんゆゆうげんがいしゃ"
	},
	{
		original: "川俣貨物",
		hiragana: "かわまたかもつ"
	},
	{
		original: "有限会社ドリームコーポレーション",
		hiragana: "ゆうげんがいしゃどりーむこーぽれーしょん"
	},
	{
		original: "函館運送",
		hiragana: "はこだてうんそう"
	},
	{
		original: "アイケン",
		hiragana: "あいけん"
	},
	{
		original: "ゑびす興運有限会社",
		hiragana: "ゑびすきょううんゆうげんがいしゃ"
	},
	{
		original: "東松企業",
		hiragana: "ひがしまつきぎょう"
	},
	{
		original: "和泉産業",
		hiragana: "いずみさんぎょう"
	},
	{
		original: "有限会社大石運輸",
		hiragana: "ゆうげんがいしゃおおいしうんゆ"
	},
	{
		original: "フレッシュ物流",
		hiragana: "ふれっしゅぶつりゅう"
	},
	{
		original: "桜花運輸",
		hiragana: "おうかうんゆ"
	},
	{
		original: "魚津海陸運輸倉庫",
		hiragana: "うおづかいりくうんゆそうこ"
	},
	{
		original: "上栄陸運",
		hiragana: "うえさかえりくうん"
	},
	{
		original: "山梨総合運輸",
		hiragana: "やまなしそうごううんゆ"
	},
	{
		original: "アールケイ商会",
		hiragana: "あーるけいしょうかい"
	},
	{
		original: "エコウイング物流",
		hiragana: "えこういんぐぶつりゅう"
	},
	{
		original: "スズシン物流システム",
		hiragana: "すずしんぶつりゅうしすてむ"
	},
	{
		original: "ロードリーム",
		hiragana: "ろーどりーむ"
	},
	{
		original: "豊栄運輸倉庫",
		hiragana: "とよさかうんゆそうこ"
	},
	{
		original: "白根運送",
		hiragana: "しろねうんそう"
	},
	{
		original: "トミレ運輸",
		hiragana: "とみれうんゆ"
	},
	{
		original: "第一工流",
		hiragana: "だいいちこうりゅう"
	},
	{
		original: "松戸運送",
		hiragana: "まつどうんそう"
	},
	{
		original: "昭和運送興業",
		hiragana: "しょうわうんそうこうぎょう"
	},
	{
		original: "ムービングサポート",
		hiragana: "むーびんぐさぽーと"
	},
	{
		original: "有限会社アシスト物流",
		hiragana: "ゆうげんがいしゃあしすとぶつりゅう"
	},
	{
		original: "豊商運",
		hiragana: "ゆたかしょううん"
	},
	{
		original: "江戸町運送",
		hiragana: "えどまちうんそう"
	},
	{
		original: "日通長崎運輸",
		hiragana: "にっつうながさきうんゆ"
	},
	{
		original: "ベン・ライン・エージェンシーズ・ジャパン",
		hiragana: "べん・らいん・えーじぇんしーず・じゃぱん"
	},
	{
		original: "ゼロ・プラスＢＨＳ",
		hiragana: "ぜろ・ぷらすＢＨＳ"
	},
	{
		original: "中川運輸",
		hiragana: "なかがわうんゆ"
	},
	{
		original: "ＡＲＫ",
		hiragana: "ＡＲＫ"
	},
	{
		original: "根室清掃有限会社",
		hiragana: "ねむろせいそうゆうげんがいしゃ"
	},
	{
		original: "敦賀セメント運輸",
		hiragana: "つるがせめんとうんゆ"
	},
	{
		original: "有限会社宮窪総合運送",
		hiragana: "ゆうげんがいしゃみやくぼそうごううんそう"
	},
	{
		original: "太陽興産有限会社",
		hiragana: "たいようこうさんゆうげんがいしゃ"
	},
	{
		original: "関東建運",
		hiragana: "かんとうけんうん"
	},
	{
		original: "東洋社物流",
		hiragana: "とうようしゃぶつりゅう"
	},
	{
		original: "久岐通商",
		hiragana: "きゅうしつうしょう"
	},
	{
		original: "東立運輸",
		hiragana: "ひがしりつうんゆ"
	},
	{
		original: "城南交易運輸",
		hiragana: "じょうなんこうえきうんゆ"
	},
	{
		original: "楠町運送有限会社",
		hiragana: "くすのきまちうんそうゆうげんがいしゃ"
	},
	{
		original: "クラショウ",
		hiragana: "くらしょう"
	},
	{
		original: "秀和物流",
		hiragana: "しゅうわぶつりゅう"
	},
	{
		original: "丸仲運輸",
		hiragana: "まるなかうんゆ"
	},
	{
		original: "ジャパンウエストトラフィック",
		hiragana: "じゃぱんうえすととらふぃっく"
	},
	{
		original: "落合運送",
		hiragana: "おちあいうんそう"
	},
	{
		original: "タイコーエクスプレス",
		hiragana: "たいこーえくすぷれす"
	},
	{
		original: "山一物流",
		hiragana: "やまいちぶつりゅう"
	},
	{
		original: "三多摩トランスポート",
		hiragana: "さんたまとらんすぽーと"
	},
	{
		original: "やまのべ",
		hiragana: "やまのべ"
	},
	{
		original: "大進運輸",
		hiragana: "たいしんうんゆ"
	},
	{
		original: "アントレー物流",
		hiragana: "あんとれーぶつりゅう"
	},
	{
		original: "マルエス",
		hiragana: "まるえす"
	},
	{
		original: "湘南ネットワークス",
		hiragana: "しょうなんねっとわーくす"
	},
	{
		original: "用宗運輸",
		hiragana: "もちむねうんゆ"
	},
	{
		original: "旭川郵便輸送",
		hiragana: "あさひかわゆうびんゆそう"
	},
	{
		original: "久光物流",
		hiragana: "ひさみつぶつりゅう"
	},
	{
		original: "都運送",
		hiragana: "みやこうんそう"
	},
	{
		original: "ウナン",
		hiragana: "うなん"
	},
	{
		original: "帝蚕運輸",
		hiragana: "みかどかいこうんゆ"
	},
	{
		original: "サン・エキスプレス",
		hiragana: "さん・えきすぷれす"
	},
	{
		original: "栄冠運輸",
		hiragana: "えいかんうんゆ"
	},
	{
		original: "クレハ運輸トラック",
		hiragana: "くれはうんゆとらっく"
	},
	{
		original: "リクサス静岡",
		hiragana: "りくさすしずおか"
	},
	{
		original: "北関東ナック",
		hiragana: "きたかんとうなっく"
	},
	{
		original: "ロジコア",
		hiragana: "ろじこあ"
	},
	{
		original: "第一梱包運輸",
		hiragana: "だいいちこんぽううんゆ"
	},
	{
		original: "大広運輸",
		hiragana: "だいこううんゆ"
	},
	{
		original: "物流ネットワーク関西",
		hiragana: "ぶつりゅうねっとわーくかんさい"
	},
	{
		original: "尾上運送",
		hiragana: "おのえうんそう"
	},
	{
		original: "丸福運送",
		hiragana: "まるふくうんそう"
	},
	{
		original: "道勝運輸",
		hiragana: "みちしょううんゆ"
	},
	{
		original: "静浜ロジネット",
		hiragana: "せいはまろじねっと"
	},
	{
		original: "東洋ロジテム",
		hiragana: "とうようろじてむ"
	},
	{
		original: "有限会社谷口陸海",
		hiragana: "ゆうげんがいしゃたにぐちりくかい"
	},
	{
		original: "ケイアイ物流",
		hiragana: "けいあいぶつりゅう"
	},
	{
		original: "ＣＬＩＰ",
		hiragana: "ＣＬＩＰ"
	},
	{
		original: "日新社",
		hiragana: "にっしんしゃ"
	},
	{
		original: "キュリアス",
		hiragana: "きゅりあす"
	},
	{
		original: "伊豫海運",
		hiragana: "いよかいうん"
	},
	{
		original: "田村運輸",
		hiragana: "たむらうんゆ"
	},
	{
		original: "ヤマヨ運輸",
		hiragana: "やまようんゆ"
	},
	{
		original: "鳥海リース",
		hiragana: "ちょうかいりーす"
	},
	{
		original: "スリーボンドサポート",
		hiragana: "すりーぼんどさぽーと"
	},
	{
		original: "北洋運輸",
		hiragana: "ほくよううんゆ"
	},
	{
		original: "ダイワ",
		hiragana: "だいわ"
	},
	{
		original: "大和陸運",
		hiragana: "やまとりくうん"
	},
	{
		original: "久日本流通",
		hiragana: "きゅうにほんりゅうとおり"
	},
	{
		original: "木沢産業",
		hiragana: "きさわさんぎょう"
	},
	{
		original: "サエキ輸送",
		hiragana: "さえきゆそう"
	},
	{
		original: "天真エンタープライズ有限会社",
		hiragana: "てんしんえんたーぷらいずゆうげんがいしゃ"
	},
	{
		original: "ニーズ輸送",
		hiragana: "にーずゆそう"
	},
	{
		original: "名古屋埠頭",
		hiragana: "なごやふとう"
	},
	{
		original: "啓生運輸",
		hiragana: "けいなまうんゆ"
	},
	{
		original: "土屋運輸",
		hiragana: "つちやうんゆ"
	},
	{
		original: "丸横運送",
		hiragana: "まるよこうんそう"
	},
	{
		original: "正和運輸",
		hiragana: "まさかずうんゆ"
	},
	{
		original: "山谷運送",
		hiragana: "やまたにうんそう"
	},
	{
		original: "長岡運輸",
		hiragana: "ながおかうんゆ"
	},
	{
		original: "村岡運輸",
		hiragana: "むらおかうんゆ"
	},
	{
		original: "滝川通運",
		hiragana: "たきかわつううん"
	},
	{
		original: "興隆運輸",
		hiragana: "こうりゅううんゆ"
	},
	{
		original: "有限会社佐藤商事運輸",
		hiragana: "ゆうげんがいしゃさとうしょうじうんゆ"
	},
	{
		original: "タイチ物流",
		hiragana: "たいちぶつりゅう"
	},
	{
		original: "サンユー商事",
		hiragana: "さんゆーしょうじ"
	},
	{
		original: "有限会社桜急送",
		hiragana: "ゆうげんがいしゃさくらきゅうそう"
	},
	{
		original: "鎗田運輸有限会社",
		hiragana: "やりたうんゆゆうげんがいしゃ"
	},
	{
		original: "マルヤス物流サービス",
		hiragana: "まるやすぶつりゅうさーびす"
	},
	{
		original: "アジア物流",
		hiragana: "あじあぶつりゅう"
	},
	{
		original: "福島倉庫",
		hiragana: "ふくしまそうこ"
	},
	{
		original: "有限会社倉田運送",
		hiragana: "ゆうげんがいしゃくらたうんそう"
	},
	{
		original: "仲央運送",
		hiragana: "なかおううんそう"
	},
	{
		original: "シティー急送",
		hiragana: "してぃーきゅうそう"
	},
	{
		original: "エムラインサービス",
		hiragana: "えむらいんさーびす"
	},
	{
		original: "淀川海運",
		hiragana: "よどがわかいうん"
	},
	{
		original: "メイシン運輸",
		hiragana: "めいしんうんゆ"
	},
	{
		original: "稲葉運送",
		hiragana: "いなばうんそう"
	},
	{
		original: "グローバル運輸",
		hiragana: "ぐろーばるうんゆ"
	},
	{
		original: "斎藤運輸",
		hiragana: "さいとううんゆ"
	},
	{
		original: "丸善運輸",
		hiragana: "まるぜんうんゆ"
	},
	{
		original: "中田運送",
		hiragana: "なかだうんそう"
	},
	{
		original: "工藤工業",
		hiragana: "くどうこうぎょう"
	},
	{
		original: "前田運輸倉庫",
		hiragana: "まえだうんゆそうこ"
	},
	{
		original: "東北開発運輸",
		hiragana: "とうほくかいはつうんゆ"
	},
	{
		original: "グラッドサービス",
		hiragana: "ぐらっどさーびす"
	},
	{
		original: "新川運輸",
		hiragana: "しんかわうんゆ"
	},
	{
		original: "佐藤運送店",
		hiragana: "さとううんそうてん"
	},
	{
		original: "エフォート",
		hiragana: "えふぉーと"
	},
	{
		original: "大阪陸運",
		hiragana: "おおさかりくうん"
	},
	{
		original: "本宮運輸",
		hiragana: "もとみやうんゆ"
	},
	{
		original: "ホットライナー",
		hiragana: "ほっとらいなー"
	},
	{
		original: "有限会社藤建",
		hiragana: "ゆうげんがいしゃふじけん"
	},
	{
		original: "武州運輸",
		hiragana: "ぶしゅううんゆ"
	},
	{
		original: "アサノ通運",
		hiragana: "あさのつううん"
	},
	{
		original: "トミナガ",
		hiragana: "とみなが"
	},
	{
		original: "オーティーロジサービス",
		hiragana: "おーてぃーろじさーびす"
	},
	{
		original: "山登運輸",
		hiragana: "やまとううんゆ"
	},
	{
		original: "丸庄運輸",
		hiragana: "まるしょううんゆ"
	},
	{
		original: "昭和合同貨物",
		hiragana: "しょうわごうどうかもつ"
	},
	{
		original: "桐畑",
		hiragana: "きりばたけ"
	},
	{
		original: "タカラ物流システム",
		hiragana: "たからぶつりゅうしすてむ"
	},
	{
		original: "有限会社鶴丸商事",
		hiragana: "ゆうげんがいしゃつるまるしょうじ"
	},
	{
		original: "弘済運輸",
		hiragana: "こうさいうんゆ"
	},
	{
		original: "ベストカーゴ",
		hiragana: "べすとかーご"
	},
	{
		original: "札幌開成輸送",
		hiragana: "さっぽろかいせいゆそう"
	},
	{
		original: "熊本ダイキュー運輸",
		hiragana: "くまもとだいきゅーうんゆ"
	},
	{
		original: "白谷運輸",
		hiragana: "しらたにうんゆ"
	},
	{
		original: "有限会社井手梱包",
		hiragana: "ゆうげんがいしゃいでこんぽう"
	},
	{
		original: "栄光運輸",
		hiragana: "えいこううんゆ"
	},
	{
		original: "トラストライン",
		hiragana: "とらすとらいん"
	},
	{
		original: "やまひろ運輸",
		hiragana: "やまひろうんゆ"
	},
	{
		original: "ココロジ",
		hiragana: "こころじ"
	},
	{
		original: "東起業",
		hiragana: "ひがしきぎょう"
	},
	{
		original: "カネマタオフィスサービス",
		hiragana: "かねまたおふぃすさーびす"
	},
	{
		original: "有限会社山広運輸興業",
		hiragana: "ゆうげんがいしゃやまひろうんゆこうぎょう"
	},
	{
		original: "ＳＳトランスポート",
		hiragana: "ＳＳとらんすぽーと"
	},
	{
		original: "函館小型運送",
		hiragana: "はこだてこがたうんそう"
	},
	{
		original: "ＪＥＴＬＩＮＫ",
		hiragana: "ＪＥＴＬＩＮＫ"
	},
	{
		original: "大一物流",
		hiragana: "ひろかずぶつりゅう"
	},
	{
		original: "ケーアイ運輸",
		hiragana: "けーあいうんゆ"
	},
	{
		original: "山川運輸",
		hiragana: "やまかわうんゆ"
	},
	{
		original: "フェニックスソリューションズ",
		hiragana: "ふぇにっくすそりゅーしょんず"
	},
	{
		original: "日通岐阜運輸",
		hiragana: "にっつうぎふうんゆ"
	},
	{
		original: "大西運輸",
		hiragana: "おおにしうんゆ"
	},
	{
		original: "有限会社北立",
		hiragana: "ゆうげんがいしゃきたりつ"
	},
	{
		original: "ヒロクラ",
		hiragana: "ひろくら"
	},
	{
		original: "太陽運輸",
		hiragana: "たいよううんゆ"
	},
	{
		original: "阿部運送",
		hiragana: "あべうんそう"
	},
	{
		original: "野々市運輸機工",
		hiragana: "ののいちうんゆきこう"
	},
	{
		original: "ランナップ",
		hiragana: "らんなっぷ"
	},
	{
		original: "神協運輸",
		hiragana: "かみきょううんゆ"
	},
	{
		original: "岩木開発",
		hiragana: "いわきかいはつ"
	},
	{
		original: "有限会社大原運送",
		hiragana: "ゆうげんがいしゃおおはらうんそう"
	},
	{
		original: "だるま屋運輸",
		hiragana: "だるまやうんゆ"
	},
	{
		original: "電通資材",
		hiragana: "でんつうしざい"
	},
	{
		original: "宇部小型運送",
		hiragana: "うべこがたうんそう"
	},
	{
		original: "紺野企業",
		hiragana: "こんのきぎょう"
	},
	{
		original: "仙台ミトモ",
		hiragana: "せんだいみとも"
	},
	{
		original: "東海車輌",
		hiragana: "とうかいしゃりょう"
	},
	{
		original: "東京キャレーヂ",
		hiragana: "とうきょうきゃれーぢ"
	},
	{
		original: "サンケイ物流",
		hiragana: "さんけいぶつりゅう"
	},
	{
		original: "クールライン",
		hiragana: "くーるらいん"
	},
	{
		original: "佐志田倉庫",
		hiragana: "さしたくらこ"
	},
	{
		original: "エスティサービス",
		hiragana: "えすてぃさーびす"
	},
	{
		original: "郡山物流有限会社",
		hiragana: "こうりやまぶつりゅうゆうげんがいしゃ"
	},
	{
		original: "オプラスウエスト",
		hiragana: "おぷらすうえすと"
	},
	{
		original: "新潟郵便輸送",
		hiragana: "にいがたゆうびんゆそう"
	},
	{
		original: "有限会社白石産業",
		hiragana: "ゆうげんがいしゃしろいしさんぎょう"
	},
	{
		original: "新日本海トラック",
		hiragana: "しんにほんうみとらっく"
	},
	{
		original: "名波陸送",
		hiragana: "ななみりくそう"
	},
	{
		original: "野村貨物",
		hiragana: "のむらかもつ"
	},
	{
		original: "和光輸送",
		hiragana: "わこうゆそう"
	},
	{
		original: "ＮＳＵ物流サービス",
		hiragana: "ＮＳＵぶつりゅうさーびす"
	},
	{
		original: "藤田",
		hiragana: "ふじた"
	},
	{
		original: "ソーコー",
		hiragana: "そーこー"
	},
	{
		original: "昭和橋急配",
		hiragana: "しょうわはしきゅうはい"
	},
	{
		original: "ユーエスロジテック",
		hiragana: "ゆーえすろじてっく"
	},
	{
		original: "白井通運",
		hiragana: "しらいつううん"
	},
	{
		original: "大竹運送",
		hiragana: "おおたけうんそう"
	},
	{
		original: "エムツー静岡",
		hiragana: "えむつーしずおか"
	},
	{
		original: "市川運送",
		hiragana: "いちかわうんそう"
	},
	{
		original: "有限会社大木紙運輸",
		hiragana: "ゆうげんがいしゃたいぼくかみうんゆ"
	},
	{
		original: "ナカニシ運輸",
		hiragana: "なかにしうんゆ"
	},
	{
		original: "セイト物流",
		hiragana: "せいとぶつりゅう"
	},
	{
		original: "立川運送",
		hiragana: "たちかわうんそう"
	},
	{
		original: "共同運送",
		hiragana: "きょうどううんそう"
	},
	{
		original: "有限会社南陽運送",
		hiragana: "ゆうげんがいしゃなんよううんそう"
	},
	{
		original: "長田運輸産業",
		hiragana: "ながたうんゆさんぎょう"
	},
	{
		original: "福栄産業",
		hiragana: "ふくえさんぎょう"
	},
	{
		original: "ミサキ運送",
		hiragana: "みさきうんそう"
	},
	{
		original: "有限会社ダディ物流",
		hiragana: "ゆうげんがいしゃだでぃぶつりゅう"
	},
	{
		original: "ケーロッド",
		hiragana: "けーろっど"
	},
	{
		original: "林運輸",
		hiragana: "はやしうんゆ"
	},
	{
		original: "ヤナギＥＸＰＲＥＳＳ",
		hiragana: "やなぎＥＸＰＲＥＳＳ"
	},
	{
		original: "白木運送有限会社",
		hiragana: "しらきうんそうゆうげんがいしゃ"
	},
	{
		original: "ティーユーサービス",
		hiragana: "てぃーゆーさーびす"
	},
	{
		original: "田中運送",
		hiragana: "たなかうんそう"
	},
	{
		original: "有限会社好川商運",
		hiragana: "ゆうげんがいしゃよしかわしょううん"
	},
	{
		original: "有限会社藤枝農園",
		hiragana: "ゆうげんがいしゃふじえだのうえん"
	},
	{
		original: "此花運輸",
		hiragana: "このはなうんゆ"
	},
	{
		original: "武市運輸",
		hiragana: "たけいちうんゆ"
	},
	{
		original: "栄吉海運",
		hiragana: "えいきちかいうん"
	},
	{
		original: "ひかりソフトエクスプレス",
		hiragana: "ひかりそふとえくすぷれす"
	},
	{
		original: "大沼運輸倉庫",
		hiragana: "おおぬまうんゆそうこ"
	},
	{
		original: "伊丹陸運",
		hiragana: "いたみりくうん"
	},
	{
		original: "中部サービス",
		hiragana: "ちゅうぶさーびす"
	},
	{
		original: "津田商店",
		hiragana: "つだしょうてん"
	},
	{
		original: "清水屋運輸倉庫",
		hiragana: "しみずやうんゆそうこ"
	},
	{
		original: "オコノギ運輸有限会社",
		hiragana: "おこのぎうんゆゆうげんがいしゃ"
	},
	{
		original: "大野運送",
		hiragana: "おおのうんそう"
	},
	{
		original: "サンブツ",
		hiragana: "さんぶつ"
	},
	{
		original: "ミナト運輸",
		hiragana: "みなとうんゆ"
	},
	{
		original: "大昇運輸",
		hiragana: "だいのぼるうんゆ"
	},
	{
		original: "三島物流",
		hiragana: "みしまぶつりゅう"
	},
	{
		original: "ヤマト物流",
		hiragana: "やまとぶつりゅう"
	},
	{
		original: "アイエス物流",
		hiragana: "あいえすぶつりゅう"
	},
	{
		original: "有限会社中村急送",
		hiragana: "ゆうげんがいしゃなかむらきゅうそう"
	},
	{
		original: "ソーワトランスポート",
		hiragana: "そーわとらんすぽーと"
	},
	{
		original: "丸正運送",
		hiragana: "まるしょううんそう"
	},
	{
		original: "東磐運輸",
		hiragana: "ひがしいわうんゆ"
	},
	{
		original: "トーショー丸貨",
		hiragana: "とーしょーまるか"
	},
	{
		original: "シティーアクト",
		hiragana: "してぃーあくと"
	},
	{
		original: "秀商",
		hiragana: "しゅうしょう"
	},
	{
		original: "関本組",
		hiragana: "せきもとくみ"
	},
	{
		original: "ホーコー",
		hiragana: "ほーこー"
	},
	{
		original: "サンワ運輸",
		hiragana: "さんわうんゆ"
	},
	{
		original: "草津倉庫",
		hiragana: "くさつそうこ"
	},
	{
		original: "春名産業",
		hiragana: "はるなさんぎょう"
	},
	{
		original: "沼津通運倉庫",
		hiragana: "ぬまづつううんそうこ"
	},
	{
		original: "スリーエスライン流通",
		hiragana: "すりーえすらいんりゅうつう"
	},
	{
		original: "野辺山産業",
		hiragana: "のべやまさんぎょう"
	},
	{
		original: "シンワ運輸東京",
		hiragana: "しんわうんゆとうきょう"
	},
	{
		original: "桜運輸",
		hiragana: "さくらうんゆ"
	},
	{
		original: "Ｆ．Ｔａｍａｙａ",
		hiragana: "Ｆ．Ｔａｍａｙａ"
	},
	{
		original: "三河西濃運輸",
		hiragana: "みかわせいのううんゆ"
	},
	{
		original: "小川運送",
		hiragana: "おがわうんそう"
	},
	{
		original: "岡西運輸",
		hiragana: "おかにしうんゆ"
	},
	{
		original: "トランネクスト",
		hiragana: "とらんねくすと"
	},
	{
		original: "浦和運輸",
		hiragana: "うらわうんゆ"
	},
	{
		original: "静岡石油輸送",
		hiragana: "しずおかせきゆゆそう"
	},
	{
		original: "福島日配運輸",
		hiragana: "ふくしまにっぱいうんゆ"
	},
	{
		original: "夏目運輸",
		hiragana: "なつめうんゆ"
	},
	{
		original: "有限会社ミヤコロジ",
		hiragana: "ゆうげんがいしゃみやころじ"
	},
	{
		original: "四国開発フェリー",
		hiragana: "しこくかいはつふぇりー"
	},
	{
		original: "藤進運輸",
		hiragana: "ふじしんうんゆ"
	},
	{
		original: "阿賀北運輸",
		hiragana: "あがきたうんゆ"
	},
	{
		original: "公南山明建設",
		hiragana: "こうなんざんめいけんせつ"
	},
	{
		original: "イーストロジテック",
		hiragana: "いーすとろじてっく"
	},
	{
		original: "田辺運輸商事",
		hiragana: "たなべうんゆしょうじ"
	},
	{
		original: "近菱陸送",
		hiragana: "きんひしりくそう"
	},
	{
		original: "青南運送",
		hiragana: "せいなんうんそう"
	},
	{
		original: "高田通運",
		hiragana: "たかだつううん"
	},
	{
		original: "丸調運輸",
		hiragana: "まるちょううんゆ"
	},
	{
		original: "インフラテックサービス",
		hiragana: "いんふらてっくさーびす"
	},
	{
		original: "有限会社中浜運輸",
		hiragana: "ゆうげんがいしゃなかはまうんゆ"
	},
	{
		original: "ヤマテック",
		hiragana: "やまてっく"
	},
	{
		original: "ブルーム",
		hiragana: "ぶるーむ"
	},
	{
		original: "有限会社愛媛ロジスティクスシステム",
		hiragana: "ゆうげんがいしゃえひめろじすてぃくすしすてむ"
	},
	{
		original: "ジャストロジスティクス",
		hiragana: "じゃすとろじすてぃくす"
	},
	{
		original: "丸一ロジテック",
		hiragana: "まるいちろじてっく"
	},
	{
		original: "マルヨ産業運送",
		hiragana: "まるよさんぎょううんそう"
	},
	{
		original: "ＧＡＴ企画",
		hiragana: "ＧＡＴきかく"
	},
	{
		original: "トランスポート宮城",
		hiragana: "とらんすぽーとみやぎ"
	},
	{
		original: "長谷川運輸",
		hiragana: "はせがわうんゆ"
	},
	{
		original: "マルハン倉庫",
		hiragana: "まるはんそうこ"
	},
	{
		original: "都城運輸",
		hiragana: "とみしろうんゆ"
	},
	{
		original: "東北新開",
		hiragana: "とうほくしんかい"
	},
	{
		original: "水本工務店",
		hiragana: "みずもとこうむてん"
	},
	{
		original: "太基運輸",
		hiragana: "たもとうんゆ"
	},
	{
		original: "協和陸運",
		hiragana: "きょうわりくうん"
	},
	{
		original: "安江運輸",
		hiragana: "やすえうんゆ"
	},
	{
		original: "いわき陸運",
		hiragana: "いわきりくうん"
	},
	{
		original: "デイオー運輸",
		hiragana: "でいおーうんゆ"
	},
	{
		original: "栄運輸",
		hiragana: "えいうんゆ"
	},
	{
		original: "有限会社美松運送",
		hiragana: "ゆうげんがいしゃびしょううんそう"
	},
	{
		original: "アイル",
		hiragana: "あいる"
	},
	{
		original: "諏訪貨物自動車",
		hiragana: "すわかもつじどうしゃ"
	},
	{
		original: "長野運輸",
		hiragana: "ながのうんゆ"
	},
	{
		original: "ホクリョウ物流",
		hiragana: "ほくりょうぶつりゅう"
	},
	{
		original: "関東総合輸送",
		hiragana: "かんとうそうごうゆそう"
	},
	{
		original: "筑豊通運",
		hiragana: "ちくほうつううん"
	},
	{
		original: "ＺＥＮ",
		hiragana: "ＺＥＮ"
	},
	{
		original: "デリバリー",
		hiragana: "でりばりー"
	},
	{
		original: "新生食品",
		hiragana: "しんせいしょくひん"
	},
	{
		original: "グリーンライントラスト",
		hiragana: "ぐりーんらいんとらすと"
	},
	{
		original: "迫田運送",
		hiragana: "さこだうんそう"
	},
	{
		original: "福田運輸",
		hiragana: "ふくだうんゆ"
	},
	{
		original: "川島運送",
		hiragana: "かわしまうんそう"
	},
	{
		original: "加藤梱包運輸",
		hiragana: "かとうこんぽううんゆ"
	},
	{
		original: "北東開発工業",
		hiragana: "ほくとうかいはつこうぎょう"
	},
	{
		original: "山陽運輸",
		hiragana: "さんよううんゆ"
	},
	{
		original: "三陽輸送",
		hiragana: "さんようゆそう"
	},
	{
		original: "有限会社ネクスト物流",
		hiragana: "ゆうげんがいしゃねくすとぶつりゅう"
	},
	{
		original: "マルホ運輸",
		hiragana: "まるほうんゆ"
	},
	{
		original: "たつみ運輸",
		hiragana: "たつみうんゆ"
	},
	{
		original: "浅倉商事",
		hiragana: "あさくらしょうじ"
	},
	{
		original: "タイコウ物流",
		hiragana: "たいこうぶつりゅう"
	},
	{
		original: "山栄物資運輸",
		hiragana: "やまさかえぶっしうんゆ"
	},
	{
		original: "有限会社美藤流通システム",
		hiragana: "ゆうげんがいしゃびふじりゅうつうしすてむ"
	},
	{
		original: "マルニ運輸",
		hiragana: "まるにうんゆ"
	},
	{
		original: "札幌三信運輸",
		hiragana: "さっぽろさんしんうんゆ"
	},
	{
		original: "村上重機",
		hiragana: "むらかみじゅうき"
	},
	{
		original: "大塚組",
		hiragana: "おおつかくみ"
	},
	{
		original: "樋口運送",
		hiragana: "ひぐちうんそう"
	},
	{
		original: "ヤマサ物流",
		hiragana: "やまさぶつりゅう"
	},
	{
		original: "金城商会",
		hiragana: "きんじょうしょうかい"
	},
	{
		original: "有限会社東部運輸",
		hiragana: "ゆうげんがいしゃとうぶうんゆ"
	},
	{
		original: "有限会社川辺運輸",
		hiragana: "ゆうげんがいしゃかわべうんゆ"
	},
	{
		original: "島田協同運輸",
		hiragana: "しまだきょうどううんゆ"
	},
	{
		original: "有限会社マルイ運送",
		hiragana: "ゆうげんがいしゃまるいうんそう"
	},
	{
		original: "キャリスター",
		hiragana: "きゃりすたー"
	},
	{
		original: "有限会社広域運輸",
		hiragana: "ゆうげんがいしゃこういきうんゆ"
	},
	{
		original: "永楽運輸",
		hiragana: "えいらくうんゆ"
	},
	{
		original: "ＬＯＯＰネットワーク",
		hiragana: "ＬＯＯＰねっとわーく"
	},
	{
		original: "三工興産",
		hiragana: "さんこうこうさん"
	},
	{
		original: "丸七運輸",
		hiragana: "まるしちうんゆ"
	},
	{
		original: "いわきカーゴ",
		hiragana: "いわきかーご"
	},
	{
		original: "野瀬産業",
		hiragana: "のせさんぎょう"
	},
	{
		original: "大畠産業",
		hiragana: "おおはたさんぎょう"
	},
	{
		original: "塩田運輸有限会社",
		hiragana: "しおだうんゆゆうげんがいしゃ"
	},
	{
		original: "和晃運輸",
		hiragana: "かずあきうんゆ"
	},
	{
		original: "アクティチャレンジ",
		hiragana: "あくてぃちゃれんじ"
	},
	{
		original: "有限会社アサヒライン",
		hiragana: "ゆうげんがいしゃあさひらいん"
	},
	{
		original: "アスカロード",
		hiragana: "あすかろーど"
	},
	{
		original: "サカモトロジ",
		hiragana: "さかもとろじ"
	},
	{
		original: "エル・ティー・コーポレーション",
		hiragana: "える・てぃー・こーぽれーしょん"
	},
	{
		original: "守エクスプレス",
		hiragana: "しゅえくすぷれす"
	},
	{
		original: "本荘運送",
		hiragana: "ほんじょううんそう"
	},
	{
		original: "トラックス",
		hiragana: "とらっくす"
	},
	{
		original: "Ｓ・Ｋクリエーション",
		hiragana: "Ｓ・Ｋくりえーしょん"
	},
	{
		original: "マルコー・トランスポート",
		hiragana: "まるこー・とらんすぽーと"
	},
	{
		original: "宝角合金製作所",
		hiragana: "たからかくごうきんせいさくところ"
	},
	{
		original: "近藤運送",
		hiragana: "こんどううんそう"
	},
	{
		original: "大翔運輸",
		hiragana: "ひろとうんゆ"
	},
	{
		original: "伸光運輸",
		hiragana: "のぶみつうんゆ"
	},
	{
		original: "アートラック・シマダ",
		hiragana: "あーとらっく・しまだ"
	},
	{
		original: "神奈川運送",
		hiragana: "かながわうんそう"
	},
	{
		original: "綿引運送",
		hiragana: "わたびきうんそう"
	},
	{
		original: "広原海陸運輸",
		hiragana: "ひろはらかいりくうんゆ"
	},
	{
		original: "マルワ急配",
		hiragana: "まるわきゅうはい"
	},
	{
		original: "有限会社昌隆運輸",
		hiragana: "ゆうげんがいしゃまさたかうんゆ"
	},
	{
		original: "金澤物流サービス",
		hiragana: "かなざわぶつりゅうさーびす"
	},
	{
		original: "島清運送",
		hiragana: "しまきよしうんそう"
	},
	{
		original: "有限会社東浜陸運",
		hiragana: "ゆうげんがいしゃひがしはまりくうん"
	},
	{
		original: "有限会社協立運送",
		hiragana: "ゆうげんがいしゃきょうりつうんそう"
	},
	{
		original: "丸水運輸",
		hiragana: "まるすいうんゆ"
	},
	{
		original: "マルタアマゾン",
		hiragana: "まるたあまぞん"
	},
	{
		original: "日隆産業",
		hiragana: "にちたかしさんぎょう"
	},
	{
		original: "優伸運輸",
		hiragana: "ゆうしんうんゆ"
	},
	{
		original: "橋本運輸",
		hiragana: "はしもとうんゆ"
	},
	{
		original: "有限会社人吉急便",
		hiragana: "ゆうげんがいしゃひとよしきゅうびん"
	},
	{
		original: "藤澤環境開発",
		hiragana: "ふじさわかんきょうかいはつ"
	},
	{
		original: "豊島運送",
		hiragana: "とよしまうんそう"
	},
	{
		original: "不破貨物運輸",
		hiragana: "ふわかもつうんゆ"
	},
	{
		original: "藤商",
		hiragana: "ふじしょう"
	},
	{
		original: "Ｔｒａｎｓ　Ｖａｌｕｅ",
		hiragana: "Ｔｒａｎｓ　Ｖａｌｕｅ"
	},
	{
		original: "伸栄総合物流",
		hiragana: "しんえいそうごうぶつりゅう"
	},
	{
		original: "有限会社阿部商事",
		hiragana: "ゆうげんがいしゃあべしょうじ"
	},
	{
		original: "大照",
		hiragana: "おおてる"
	},
	{
		original: "北越水運",
		hiragana: "ほくえつすいうん"
	},
	{
		original: "ムラグチ運送",
		hiragana: "むらぐちうんそう"
	},
	{
		original: "関東伏見運送",
		hiragana: "かんとうふしみうんそう"
	},
	{
		original: "まるあ",
		hiragana: "まるあ"
	},
	{
		original: "ウッドベル",
		hiragana: "うっどべる"
	},
	{
		original: "マリンブルー",
		hiragana: "まりんぶるー"
	},
	{
		original: "タカムラトランスポート",
		hiragana: "たかむらとらんすぽーと"
	},
	{
		original: "遠州急行",
		hiragana: "えんしゅうきゅうこう"
	},
	{
		original: "大誠運輸",
		hiragana: "たいせいうんゆ"
	},
	{
		original: "南予名鉄急配",
		hiragana: "なんよめいてつきゅうはい"
	},
	{
		original: "武澤運送",
		hiragana: "たけざわうんそう"
	},
	{
		original: "山陽トラック",
		hiragana: "さんようとらっく"
	},
	{
		original: "山勝商事",
		hiragana: "やまかつあきこと"
	},
	{
		original: "ホウワ",
		hiragana: "ほうわ"
	},
	{
		original: "本州運輸",
		hiragana: "ほんしゅううんゆ"
	},
	{
		original: "鹿追協同運輸",
		hiragana: "しかおいきょうどううんゆ"
	},
	{
		original: "ブルーカーゴ",
		hiragana: "ぶるーかーご"
	},
	{
		original: "有限会社コマツ運輸",
		hiragana: "ゆうげんがいしゃこまつうんゆ"
	},
	{
		original: "サンライズ運輸",
		hiragana: "さんらいずうんゆ"
	},
	{
		original: "エスプリ",
		hiragana: "えすぷり"
	},
	{
		original: "三洋運輸",
		hiragana: "さんよううんゆ"
	},
	{
		original: "鮎川産業",
		hiragana: "あゆかわさんぎょう"
	},
	{
		original: "アトラス",
		hiragana: "あとらす"
	},
	{
		original: "協立運送",
		hiragana: "きょうりつうんそう"
	},
	{
		original: "ロードランナー",
		hiragana: "ろーどらんなー"
	},
	{
		original: "サツキ運送",
		hiragana: "さつきうんそう"
	},
	{
		original: "大晃運送",
		hiragana: "だいこううんそう"
	},
	{
		original: "宮島運輸",
		hiragana: "みやじまうんゆ"
	},
	{
		original: "新栄陸運",
		hiragana: "しんえいりくうん"
	},
	{
		original: "岡山港湾運送",
		hiragana: "おかやまこうわんうんそう"
	},
	{
		original: "ロードリーム札幌",
		hiragana: "ろーどりーむさっぽろ"
	},
	{
		original: "岩田酒販",
		hiragana: "いわたしゅはん"
	},
	{
		original: "東京ピアノ運送",
		hiragana: "とうきょうぴあのうんそう"
	},
	{
		original: "ニコム物流",
		hiragana: "にこむぶつりゅう"
	},
	{
		original: "マルモ運輸",
		hiragana: "まるもうんゆ"
	},
	{
		original: "九州金澤運輸",
		hiragana: "きゅうしゅうかなざわうんゆ"
	},
	{
		original: "高伸物流",
		hiragana: "こうしんぶつりゅう"
	},
	{
		original: "江波運送",
		hiragana: "えなみうんそう"
	},
	{
		original: "ホクトラ石川",
		hiragana: "ほくとらいしかわ"
	},
	{
		original: "ジャパントータルサービス",
		hiragana: "じゃぱんとーたるさーびす"
	},
	{
		original: "マルショウ運輸",
		hiragana: "まるしょううんゆ"
	},
	{
		original: "御厨運送",
		hiragana: "みくりやうんそう"
	},
	{
		original: "八德運送",
		hiragana: "はちそう"
	},
	{
		original: "有限会社東京運送",
		hiragana: "ゆうげんがいしゃとうきょううんそう"
	},
	{
		original: "北越運送",
		hiragana: "ほくえつうんそう"
	},
	{
		original: "有限会社雅商事",
		hiragana: "ゆうげんがいしゃまさしょうじ"
	},
	{
		original: "舞洲流通センター",
		hiragana: "まいしまりゅうつうせんたー"
	},
	{
		original: "さくら物流",
		hiragana: "さくらぶつりゅう"
	},
	{
		original: "大輝",
		hiragana: "だいき"
	},
	{
		original: "御幸トラック",
		hiragana: "みゆきとらっく"
	},
	{
		original: "協進運輸",
		hiragana: "きょうしんうんゆ"
	},
	{
		original: "セトライン",
		hiragana: "せとらいん"
	},
	{
		original: "協和運輸",
		hiragana: "きょうわうんゆ"
	},
	{
		original: "ファイブスターライン",
		hiragana: "ふぁいぶすたーらいん"
	},
	{
		original: "南砺物流",
		hiragana: "なんとぶつりゅう"
	},
	{
		original: "エクシード",
		hiragana: "えくしーど"
	},
	{
		original: "ヤシバ運輸",
		hiragana: "やしばうんゆ"
	},
	{
		original: "アクセル松本",
		hiragana: "あくせるまつもと"
	},
	{
		original: "新潟総合物流",
		hiragana: "にいがたそうごうぶつりゅう"
	},
	{
		original: "ワーク物流",
		hiragana: "わーくぶつりゅう"
	},
	{
		original: "マツダ物流",
		hiragana: "まつだぶつりゅう"
	},
	{
		original: "ヤマセイ商事",
		hiragana: "やませいしょうじ"
	},
	{
		original: "アシスト物流",
		hiragana: "あしすとぶつりゅう"
	},
	{
		original: "東京商運",
		hiragana: "とうきょうしょううん"
	},
	{
		original: "鳥羽運送",
		hiragana: "とばうんそう"
	},
	{
		original: "有限会社ヤマト重機",
		hiragana: "ゆうげんがいしゃやまとじゅうき"
	},
	{
		original: "石井サポート",
		hiragana: "いしいさぽーと"
	},
	{
		original: "ペイフォワード",
		hiragana: "ぺいふぉわーど"
	},
	{
		original: "丸山商運",
		hiragana: "まるやましょううん"
	},
	{
		original: "生田梱包",
		hiragana: "いくたこんぽう"
	},
	{
		original: "ヤマショウ物流",
		hiragana: "やましょうぶつりゅう"
	},
	{
		original: "山建運輸",
		hiragana: "やまけんうんゆ"
	},
	{
		original: "榛原自動車",
		hiragana: "はいばらじどうしゃ"
	},
	{
		original: "有限会社山海興産",
		hiragana: "ゆうげんがいしゃさんかいこうさん"
	},
	{
		original: "庵原運送有限会社",
		hiragana: "いはらうんそうゆうげんがいしゃ"
	},
	{
		original: "サカイ産業静岡",
		hiragana: "さかいさんぎょうしずおか"
	},
	{
		original: "沼垂運輸",
		hiragana: "ぬたりうんゆ"
	},
	{
		original: "トランスファシステムサポート",
		hiragana: "とらんすふぁしすてむさぽーと"
	},
	{
		original: "高山運輸",
		hiragana: "こうざんうんゆ"
	},
	{
		original: "岡田運送",
		hiragana: "おかだうんそう"
	},
	{
		original: "阪和流通センター名古屋",
		hiragana: "はんわりゅうつうせんたーなごや"
	},
	{
		original: "金子金物",
		hiragana: "かねこかなもの"
	},
	{
		original: "和泉運送",
		hiragana: "いずみうんそう"
	},
	{
		original: "丸長運送",
		hiragana: "まるちょううんそう"
	},
	{
		original: "エフ・ケイ・エス・ネットワーク",
		hiragana: "えふ・けい・えす・ねっとわーく"
	},
	{
		original: "日之出運輸",
		hiragana: "ひのでうんゆ"
	},
	{
		original: "名備運輸",
		hiragana: "めいびうんゆ"
	},
	{
		original: "アクトライン",
		hiragana: "あくとらいん"
	},
	{
		original: "イワシタ",
		hiragana: "いわした"
	},
	{
		original: "丸善商事",
		hiragana: "まるぜんしょうじ"
	},
	{
		original: "天下一天晴",
		hiragana: "てんかいってんせい"
	},
	{
		original: "板橋商事",
		hiragana: "いたばししょうじ"
	},
	{
		original: "千葉三港運輸",
		hiragana: "ちばさんみなとうんゆ"
	},
	{
		original: "小冨士運送",
		hiragana: "しょうふじうんそう"
	},
	{
		original: "前原運送",
		hiragana: "まえはらうんそう"
	},
	{
		original: "高伸サービス",
		hiragana: "こうしんさーびす"
	},
	{
		original: "飛田運送",
		hiragana: "ひだうんそう"
	},
	{
		original: "生田川通商",
		hiragana: "いくたかわつうしょう"
	},
	{
		original: "八紘運輸",
		hiragana: "はっこううんゆ"
	},
	{
		original: "ハイエストトランスポート",
		hiragana: "はいえすととらんすぽーと"
	},
	{
		original: "根岸運輸",
		hiragana: "ねぎしうんゆ"
	},
	{
		original: "コーウン流通",
		hiragana: "こーうんりゅうつう"
	},
	{
		original: "東総システム輸送",
		hiragana: "とうそうしすてむゆそう"
	},
	{
		original: "ブレイズ",
		hiragana: "ぶれいず"
	},
	{
		original: "反町運送有限会社",
		hiragana: "たんまちうんそうゆうげんがいしゃ"
	},
	{
		original: "西日本トランスポート",
		hiragana: "にしにほんとらんすぽーと"
	},
	{
		original: "サンレックス",
		hiragana: "さんれっくす"
	},
	{
		original: "オータカ",
		hiragana: "おーたか"
	},
	{
		original: "遠州運輸",
		hiragana: "えんしゅううんゆ"
	},
	{
		original: "アポロス",
		hiragana: "あぽろす"
	},
	{
		original: "吉岡",
		hiragana: "よしおか"
	},
	{
		original: "ツーケン工業",
		hiragana: "つーけんこうぎょう"
	},
	{
		original: "Ｆ．ＣＡＲＲＹ",
		hiragana: "Ｆ．ＣＡＲＲＹ"
	},
	{
		original: "有限会社牧山商事",
		hiragana: "ゆうげんがいしゃまきやましょうじ"
	},
	{
		original: "織田運送",
		hiragana: "おだうんそう"
	},
	{
		original: "田中重機運輸",
		hiragana: "たなかじゅうきうんゆ"
	},
	{
		original: "エスライン郡上",
		hiragana: "えすらいんぐじょう"
	},
	{
		original: "三和ロジスティクス",
		hiragana: "さんわろじすてぃくす"
	},
	{
		original: "三和運輸",
		hiragana: "さんわうんゆ"
	},
	{
		original: "丸鈴運輸",
		hiragana: "まるすずうんゆ"
	},
	{
		original: "静岡ダイキュー運輸",
		hiragana: "しずおかだいきゅーうんゆ"
	},
	{
		original: "優共運輸",
		hiragana: "ゆうともうんゆ"
	},
	{
		original: "キョーエイコーポレーション",
		hiragana: "きょーえいこーぽれーしょん"
	},
	{
		original: "小鴨",
		hiragana: "こかも"
	},
	{
		original: "西小倉運輸",
		hiragana: "にしこくらうんゆ"
	},
	{
		original: "村上運輸倉庫",
		hiragana: "むらかみうんゆそうこ"
	},
	{
		original: "銀河エクスプレス",
		hiragana: "ぎんがえくすぷれす"
	},
	{
		original: "交野運送",
		hiragana: "かたのうんそう"
	},
	{
		original: "徳島急送",
		hiragana: "とくしまきゅうそう"
	},
	{
		original: "岡崎運送",
		hiragana: "おかざきうんそう"
	},
	{
		original: "三栄急送",
		hiragana: "さんえいきゅうそう"
	},
	{
		original: "坂上運輸倉庫",
		hiragana: "さかうえうんゆそうこ"
	},
	{
		original: "日高トータルサービス",
		hiragana: "ひだかとーたるさーびす"
	},
	{
		original: "ロイヤルコーポレーション",
		hiragana: "ろいやるこーぽれーしょん"
	},
	{
		original: "橋和工業",
		hiragana: "はしわこうぎょう"
	},
	{
		original: "太宰府運輸",
		hiragana: "だざいふうんゆ"
	},
	{
		original: "大樹貨物",
		hiragana: "たいじゅかもつ"
	},
	{
		original: "東豊配送",
		hiragana: "とうほうはいそう"
	},
	{
		original: "福岡ケイエス物流",
		hiragana: "ふくおかけいえすぶつりゅう"
	},
	{
		original: "加納運輸",
		hiragana: "かのううんゆ"
	},
	{
		original: "富士トラック",
		hiragana: "ふじとらっく"
	},
	{
		original: "南国運送",
		hiragana: "なんごくうんそう"
	},
	{
		original: "宝物流サービス",
		hiragana: "たからものりゅうさーびす"
	},
	{
		original: "弘和",
		hiragana: "こうわ"
	},
	{
		original: "ＭＭＣ",
		hiragana: "ＭＭＣ"
	},
	{
		original: "有限会社セントラルカーゴ",
		hiragana: "ゆうげんがいしゃせんとらるかーご"
	},
	{
		original: "クオリティライン",
		hiragana: "くおりてぃらいん"
	},
	{
		original: "前橋定期運送",
		hiragana: "まえばしていきうんそう"
	},
	{
		original: "四国運送",
		hiragana: "しこくうんそう"
	},
	{
		original: "福岡シティ物流",
		hiragana: "ふくおかしてぃぶつりゅう"
	},
	{
		original: "山武運輸",
		hiragana: "さんぶうんゆ"
	},
	{
		original: "日新物流",
		hiragana: "にっしんぶつりゅう"
	},
	{
		original: "ダッシュ速配",
		hiragana: "だっしゅそくはい"
	},
	{
		original: "南部急送有限会社",
		hiragana: "なんぶきゅうそうゆうげんがいしゃ"
	},
	{
		original: "上武物流",
		hiragana: "うえたけぶつりゅう"
	},
	{
		original: "李候実業",
		hiragana: "すももそうろうじつぎょう"
	},
	{
		original: "大盛運輸",
		hiragana: "おおもりうんゆ"
	},
	{
		original: "トランスネット",
		hiragana: "とらんすねっと"
	},
	{
		original: "巴川物流サービス",
		hiragana: "ともえがわぶつりゅうさーびす"
	},
	{
		original: "ＹＲシステムズ",
		hiragana: "ＹＲしすてむず"
	},
	{
		original: "藤井運輸倉庫",
		hiragana: "ふじいうんゆそうこ"
	},
	{
		original: "三共運送",
		hiragana: "さんきょううんそう"
	},
	{
		original: "大斗運輸",
		hiragana: "だいとうんゆ"
	},
	{
		original: "岡谷運輸",
		hiragana: "おかやうんゆ"
	},
	{
		original: "加瀬興業運輸",
		hiragana: "かせこうぎょううんゆ"
	},
	{
		original: "海邦サントリーロジスティクス",
		hiragana: "かいほうさんとりーろじすてぃくす"
	},
	{
		original: "福松屋運送",
		hiragana: "ふくまつやうんそう"
	},
	{
		original: "有限会社田野辺運送店",
		hiragana: "ゆうげんがいしゃたのへんうんそうてん"
	},
	{
		original: "亀城運輸",
		hiragana: "きじょううんゆ"
	},
	{
		original: "明和石膏運送",
		hiragana: "めいわせっこううんそう"
	},
	{
		original: "エバーエキスプレス",
		hiragana: "えばーえきすぷれす"
	},
	{
		original: "片岡運送",
		hiragana: "かたおかうんそう"
	},
	{
		original: "ナカノ九州運輸",
		hiragana: "なかのきゅうしゅううんゆ"
	},
	{
		original: "八千代運輸",
		hiragana: "やちようんゆ"
	},
	{
		original: "新生運送",
		hiragana: "しんせいうんそう"
	},
	{
		original: "エムライン",
		hiragana: "えむらいん"
	},
	{
		original: "九州産業",
		hiragana: "きゅうしゅうさんぎょう"
	},
	{
		original: "戸田運輸",
		hiragana: "とだうんゆ"
	},
	{
		original: "晴海レミコン輸送",
		hiragana: "はるみれみこんゆそう"
	},
	{
		original: "仙台運輸",
		hiragana: "せんだいうんゆ"
	},
	{
		original: "さくら運輸",
		hiragana: "さくらうんゆ"
	},
	{
		original: "トランスネットワーク",
		hiragana: "とらんすねっとわーく"
	},
	{
		original: "増田運送",
		hiragana: "ますだうんそう"
	},
	{
		original: "シーエストランスポート",
		hiragana: "しーえすとらんすぽーと"
	},
	{
		original: "日之出運輸",
		hiragana: "ひのでうんゆ"
	},
	{
		original: "伊吹運輸",
		hiragana: "いぶきうんゆ"
	},
	{
		original: "丸二運輸",
		hiragana: "まるにうんゆ"
	},
	{
		original: "ヤナイ",
		hiragana: "やない"
	},
	{
		original: "コーエイ",
		hiragana: "こーえい"
	},
	{
		original: "藤原運送",
		hiragana: "ふじわらうんそう"
	},
	{
		original: "木村運輸",
		hiragana: "きむらうんゆ"
	},
	{
		original: "アールズ",
		hiragana: "あーるず"
	},
	{
		original: "有限会社慎洸",
		hiragana: "ゆうげんがいしゃしんこう"
	},
	{
		original: "丹後西濃運輸",
		hiragana: "たんごせいのううんゆ"
	},
	{
		original: "ヤマシン物流",
		hiragana: "やましんぶつりゅう"
	},
	{
		original: "オネスティー",
		hiragana: "おねすてぃー"
	},
	{
		original: "松栄運輸",
		hiragana: "しょうえいうんゆ"
	},
	{
		original: "東光運輸",
		hiragana: "とうこううんゆ"
	},
	{
		original: "エムシーライン",
		hiragana: "えむしーらいん"
	},
	{
		original: "上神谷運送",
		hiragana: "うえかみやうんそう"
	},
	{
		original: "エムティーサービス",
		hiragana: "えむてぃーさーびす"
	},
	{
		original: "奄美コーポレーション",
		hiragana: "あまみこーぽれーしょん"
	},
	{
		original: "有限会社あけぼの運輸",
		hiragana: "ゆうげんがいしゃあけぼのうんゆ"
	},
	{
		original: "富士興業",
		hiragana: "ふじこうぎょう"
	},
	{
		original: "南郷運輸有限会社",
		hiragana: "なんごううんゆゆうげんがいしゃ"
	},
	{
		original: "ビッグ・カーゴ",
		hiragana: "びっぐ・かーご"
	},
	{
		original: "中村エンタープライズ",
		hiragana: "なかむらえんたーぷらいず"
	},
	{
		original: "牟岐線通運",
		hiragana: "むぎせんつううん"
	},
	{
		original: "岡通九州",
		hiragana: "おかとおりきゅうしゅう"
	},
	{
		original: "ニビシ運輸",
		hiragana: "にびしうんゆ"
	},
	{
		original: "伊原運送",
		hiragana: "いはらうんそう"
	},
	{
		original: "中津ダイキュー運輸",
		hiragana: "なかつだいきゅーうんゆ"
	},
	{
		original: "原川倉庫運輸",
		hiragana: "はらかわそうこうんゆ"
	},
	{
		original: "平成運輸有限会社",
		hiragana: "へいせいうんゆゆうげんがいしゃ"
	},
	{
		original: "オールワークデリバリー",
		hiragana: "おーるわーくでりばりー"
	},
	{
		original: "多賀谷運送",
		hiragana: "たがやうんそう"
	},
	{
		original: "東京輸送",
		hiragana: "とうきょうゆそう"
	},
	{
		original: "旭興産運輸",
		hiragana: "あさひこうさんうんゆ"
	},
	{
		original: "日凸運送",
		hiragana: "にちとつうんそう"
	},
	{
		original: "淺野運輸倉庫",
		hiragana: "あさのうんゆそうこ"
	},
	{
		original: "伊藤運送",
		hiragana: "いとううんそう"
	},
	{
		original: "堀尾物産",
		hiragana: "ほりおぶっさん"
	},
	{
		original: "本田運送",
		hiragana: "ほんだうんそう"
	},
	{
		original: "ケイヒン陸運",
		hiragana: "けいひんりくうん"
	},
	{
		original: "丸正運輸",
		hiragana: "まるしょううんゆ"
	},
	{
		original: "不二倉庫運輸",
		hiragana: "ふじそうこうんゆ"
	},
	{
		original: "北尾運送",
		hiragana: "きたおうんそう"
	},
	{
		original: "銀河急送",
		hiragana: "ぎんがきゅうそう"
	},
	{
		original: "スピン",
		hiragana: "すぴん"
	},
	{
		original: "富士山運輸",
		hiragana: "ふじさんうんゆ"
	},
	{
		original: "星和ロジテム",
		hiragana: "せいわろじてむ"
	},
	{
		original: "ガイヤエクスプレス",
		hiragana: "がいやえくすぷれす"
	},
	{
		original: "光陽運輸",
		hiragana: "こうよううんゆ"
	},
	{
		original: "豊洋産業",
		hiragana: "ゆたかひろしさんぎょう"
	},
	{
		original: "北大",
		hiragana: "ほくだい"
	},
	{
		original: "有限会社カクタス",
		hiragana: "ゆうげんがいしゃかくたす"
	},
	{
		original: "丸善運輸関西",
		hiragana: "まるぜんうんゆかんさい"
	},
	{
		original: "丸う運輸",
		hiragana: "まるううんゆ"
	},
	{
		original: "有限会社圓藤物流",
		hiragana: "ゆうげんがいしゃえんふじぶつりゅう"
	},
	{
		original: "ゴトウ",
		hiragana: "ごとう"
	},
	{
		original: "安蘇産業",
		hiragana: "あそさんぎょう"
	},
	{
		original: "熊本くみあい運輸",
		hiragana: "くまもとくみあいうんゆ"
	},
	{
		original: "富士商運",
		hiragana: "ふじしょううん"
	},
	{
		original: "有限会社伸幸運輸梱包",
		hiragana: "ゆうげんがいしゃのぶゆきうんゆこんぽう"
	},
	{
		original: "ラップタイマー",
		hiragana: "らっぷたいまー"
	},
	{
		original: "向野商事",
		hiragana: "むかいのしょうじ"
	},
	{
		original: "タートルロード",
		hiragana: "たーとるろーど"
	},
	{
		original: "みずしま急配",
		hiragana: "みずしまきゅうはい"
	},
	{
		original: "ＳＫコーポレーション",
		hiragana: "ＳＫこーぽれーしょん"
	},
	{
		original: "山川運輸",
		hiragana: "やまかわうんゆ"
	},
	{
		original: "丸協運輸開発",
		hiragana: "まるきょううんゆかいはつ"
	},
	{
		original: "ミーノ",
		hiragana: "みーの"
	},
	{
		original: "産業運輸",
		hiragana: "さんぎょううんゆ"
	},
	{
		original: "アースクリエイト",
		hiragana: "あーすくりえいと"
	},
	{
		original: "丸八倉庫",
		hiragana: "まるはちそうこ"
	},
	{
		original: "井川商会",
		hiragana: "いかわしょうかい"
	},
	{
		original: "有限会社畑中運送",
		hiragana: "ゆうげんがいしゃはたなかうんそう"
	},
	{
		original: "中京ライナー",
		hiragana: "ちゅうきょうらいなー"
	},
	{
		original: "磯部興業",
		hiragana: "いそべこうぎょう"
	},
	{
		original: "赤田運輸産業",
		hiragana: "あかだうんゆさんぎょう"
	},
	{
		original: "有限会社山下商事",
		hiragana: "ゆうげんがいしゃやましたしょうじ"
	},
	{
		original: "日野陸運有限会社",
		hiragana: "ひのりくうんゆうげんがいしゃ"
	},
	{
		original: "隆弘運輸",
		hiragana: "たかひろうんゆ"
	},
	{
		original: "沖縄輸送サービス",
		hiragana: "おきなわゆそうさーびす"
	},
	{
		original: "港運送",
		hiragana: "みなとうんそう"
	},
	{
		original: "久慈港運",
		hiragana: "くじみなとうん"
	},
	{
		original: "ロジフル・トランポ",
		hiragana: "ろじふる・とらんぽ"
	},
	{
		original: "有限会社乾商店",
		hiragana: "ゆうげんがいしゃいぬいしょうてん"
	},
	{
		original: "奈雅井物流",
		hiragana: "なまさいぶつりゅう"
	},
	{
		original: "大日本倉庫",
		hiragana: "だいにっぽんそうこ"
	},
	{
		original: "三雪運輸",
		hiragana: "みゆきうんゆ"
	},
	{
		original: "エスワイ物流",
		hiragana: "えすわいぶつりゅう"
	},
	{
		original: "三新運輸",
		hiragana: "さんしんうんゆ"
	},
	{
		original: "相互トラック",
		hiragana: "そうごとらっく"
	},
	{
		original: "コイデ運輸",
		hiragana: "こいでうんゆ"
	},
	{
		original: "有限会社北栄商事",
		hiragana: "ゆうげんがいしゃほくえいしょうじ"
	},
	{
		original: "フジライン",
		hiragana: "ふじらいん"
	},
	{
		original: "ビクトリー",
		hiragana: "びくとりー"
	},
	{
		original: "Ｔａｍａ・Ｕｎ",
		hiragana: "Ｔａｍａ・Ｕｎ"
	},
	{
		original: "大光輸送",
		hiragana: "おおみつゆそう"
	},
	{
		original: "熊本丸善海陸運輸",
		hiragana: "くまもとまるぜんかいりくうんゆ"
	},
	{
		original: "丸新運輸倉庫",
		hiragana: "まるしんうんゆそうこ"
	},
	{
		original: "カンリクＥＸＰＲＥＳＳ中京",
		hiragana: "かんりくＥＸＰＲＥＳＳちゅうきょう"
	},
	{
		original: "カモライン",
		hiragana: "かもらいん"
	},
	{
		original: "有限会社田中運送",
		hiragana: "ゆうげんがいしゃたなかうんそう"
	},
	{
		original: "ケー・ライン",
		hiragana: "けー・らいん"
	},
	{
		original: "共立運輸",
		hiragana: "きょうりつうんゆ"
	},
	{
		original: "大豊物流システム",
		hiragana: "たいほうぶつりゅうしすてむ"
	},
	{
		original: "有限会社末広運輸サービス",
		hiragana: "ゆうげんがいしゃすえひろうんゆさーびす"
	},
	{
		original: "グリーン・テック",
		hiragana: "ぐりーん・てっく"
	},
	{
		original: "大竹配送有限会社",
		hiragana: "おおたけはいそうゆうげんがいしゃ"
	},
	{
		original: "統商運輸",
		hiragana: "とうしょううんゆ"
	},
	{
		original: "信州西部陸送",
		hiragana: "しんしゅうせいぶりくそう"
	},
	{
		original: "田中運輸",
		hiragana: "たなかうんゆ"
	},
	{
		original: "日恵運輸",
		hiragana: "にちけいうんゆ"
	},
	{
		original: "遊佐運輸倉庫",
		hiragana: "ゆさうんゆそうこ"
	},
	{
		original: "安中運輸",
		hiragana: "あんなかうんゆ"
	},
	{
		original: "若林運送",
		hiragana: "わかばやしうんそう"
	},
	{
		original: "エムテックサービス",
		hiragana: "えむてっくさーびす"
	},
	{
		original: "新山運送",
		hiragana: "しんざんうんそう"
	},
	{
		original: "有限会社南海サービス",
		hiragana: "ゆうげんがいしゃなんかいさーびす"
	},
	{
		original: "ビッグバン",
		hiragana: "びっぐばん"
	},
	{
		original: "栗木運輸",
		hiragana: "くりきうんゆ"
	},
	{
		original: "有限会社昇栄運送",
		hiragana: "ゆうげんがいしゃしょうえいうんそう"
	},
	{
		original: "岡大物流",
		hiragana: "おかだいぶつりゅう"
	},
	{
		original: "トラスト・エキスプレス",
		hiragana: "とらすと・えきすぷれす"
	},
	{
		original: "有限会社北川ライン",
		hiragana: "ゆうげんがいしゃきたがわらいん"
	},
	{
		original: "協和工業",
		hiragana: "きょうわこうぎょう"
	},
	{
		original: "岡田運輸",
		hiragana: "おかだうんゆ"
	},
	{
		original: "三尚運輸",
		hiragana: "さんたかしうんゆ"
	},
	{
		original: "松元サービス",
		hiragana: "まつもとさーびす"
	},
	{
		original: "日通鹿島輸送",
		hiragana: "にっつうかしまゆそう"
	},
	{
		original: "ＬＮＪ名古屋",
		hiragana: "ＬＮＪなごや"
	},
	{
		original: "ナカムラ",
		hiragana: "なかむら"
	},
	{
		original: "陸照運輸",
		hiragana: "あつのぶうんゆ"
	},
	{
		original: "共栄運送",
		hiragana: "きょうえいうんそう"
	},
	{
		original: "昭和サービス",
		hiragana: "しょうわさーびす"
	},
	{
		original: "インターナショナルカンパニー",
		hiragana: "いんたーなしょなるかんぱにー"
	},
	{
		original: "日光陸運",
		hiragana: "にっこうりくうん"
	},
	{
		original: "山口郵便逓送",
		hiragana: "やまぐちゆうびんていそう"
	},
	{
		original: "ビーエスロジスティクス",
		hiragana: "びーえすろじすてぃくす"
	},
	{
		original: "堀部運送",
		hiragana: "ほりべうんそう"
	},
	{
		original: "プロジェクト",
		hiragana: "ぷろじぇくと"
	},
	{
		original: "フジエアカーゴ",
		hiragana: "ふじえあかーご"
	},
	{
		original: "イトウ運送",
		hiragana: "いとううんそう"
	},
	{
		original: "大神",
		hiragana: "だいじん"
	},
	{
		original: "有限会社リングトランスポート",
		hiragana: "ゆうげんがいしゃりんぐとらんすぽーと"
	},
	{
		original: "ひかり陸運",
		hiragana: "ひかりりくうん"
	},
	{
		original: "有限会社丸新商会",
		hiragana: "ゆうげんがいしゃまるしんしょうかい"
	},
	{
		original: "トランスター",
		hiragana: "とらんすたー"
	},
	{
		original: "太平陸送運輸",
		hiragana: "たいへいりくそううんゆ"
	},
	{
		original: "名豊運輸",
		hiragana: "めいほううんゆ"
	},
	{
		original: "伸和",
		hiragana: "のぶかず"
	},
	{
		original: "日本ポート産業",
		hiragana: "にっぽんぽーとさんぎょう"
	},
	{
		original: "ジャパン・エム・ロジックス",
		hiragana: "じゃぱん・えむ・ろじっくす"
	},
	{
		original: "芙蓉流通",
		hiragana: "ふようりゅうつう"
	},
	{
		original: "アンビシャス",
		hiragana: "あんびしゃす"
	},
	{
		original: "東海運輸",
		hiragana: "とうかいうんゆ"
	},
	{
		original: "阿倉川運送",
		hiragana: "あくらかわうんそう"
	},
	{
		original: "スズタニ",
		hiragana: "すずたに"
	},
	{
		original: "加藤産業",
		hiragana: "かとうさんぎょう"
	},
	{
		original: "田中運送",
		hiragana: "たなかうんそう"
	},
	{
		original: "トラストシステム物流有限会社",
		hiragana: "とらすとしすてむぶつりゅうゆうげんがいしゃ"
	},
	{
		original: "有限会社イムラ運送",
		hiragana: "ゆうげんがいしゃいむらうんそう"
	},
	{
		original: "秋田運輸",
		hiragana: "あきたうんゆ"
	},
	{
		original: "塩原貨物",
		hiragana: "しおばらかもつ"
	},
	{
		original: "岡本産業",
		hiragana: "おかもとさんぎょう"
	},
	{
		original: "アオイ",
		hiragana: "あおい"
	},
	{
		original: "協栄運輸",
		hiragana: "きょうえいうんゆ"
	},
	{
		original: "ジュネス運輸",
		hiragana: "じゅねすうんゆ"
	},
	{
		original: "菅原工業",
		hiragana: "すがわらこうぎょう"
	},
	{
		original: "桂商会",
		hiragana: "かつらしょうかい"
	},
	{
		original: "ファインロジテック",
		hiragana: "ふぁいんろじてっく"
	},
	{
		original: "福岡ロジテック",
		hiragana: "ふくおかろじてっく"
	},
	{
		original: "橋元運輸",
		hiragana: "はしもとうんゆ"
	},
	{
		original: "日精興産",
		hiragana: "にっせいこうさん"
	},
	{
		original: "有限会社リバップ",
		hiragana: "ゆうげんがいしゃりばっぷ"
	},
	{
		original: "富士サービス",
		hiragana: "ふじさーびす"
	},
	{
		original: "堀内運送",
		hiragana: "ほりうちうんそう"
	},
	{
		original: "東和運輸",
		hiragana: "とうわうんゆ"
	},
	{
		original: "日の出貨物有限会社",
		hiragana: "ひのでかもつゆうげんがいしゃ"
	},
	{
		original: "ジェイカス",
		hiragana: "じぇいかす"
	},
	{
		original: "三和運輸",
		hiragana: "さんわうんゆ"
	},
	{
		original: "荒木運輸倉庫",
		hiragana: "あらきうんゆそうこ"
	},
	{
		original: "エスユーライン",
		hiragana: "えすゆーらいん"
	},
	{
		original: "豊橋センコー運輸",
		hiragana: "とよはしせんこーうんゆ"
	},
	{
		original: "フジミブックライナー",
		hiragana: "ふじみぶっくらいなー"
	},
	{
		original: "ティービー",
		hiragana: "てぃーびー"
	},
	{
		original: "ミコー総合開発",
		hiragana: "みこーそうごうかいはつ"
	},
	{
		original: "くるしま運送有限会社",
		hiragana: "くるしまうんそうゆうげんがいしゃ"
	},
	{
		original: "丸山物流",
		hiragana: "まるやまぶつりゅう"
	},
	{
		original: "三原物流",
		hiragana: "みはらぶつりゅう"
	},
	{
		original: "コウノイケ・エキスプレス",
		hiragana: "こうのいけ・えきすぷれす"
	},
	{
		original: "有限会社トキキャリーサービス",
		hiragana: "ゆうげんがいしゃとききゃりーさーびす"
	},
	{
		original: "有限会社エキスパート",
		hiragana: "ゆうげんがいしゃえきすぱーと"
	},
	{
		original: "鈴村梱包運輸",
		hiragana: "すずむらこんぽううんゆ"
	},
	{
		original: "有限会社三共青果",
		hiragana: "ゆうげんがいしゃさんきょうせいか"
	},
	{
		original: "ＡＳＴＲＡ",
		hiragana: "ＡＳＴＲＡ"
	},
	{
		original: "エースムービング",
		hiragana: "えーすむーびんぐ"
	},
	{
		original: "丸三海運",
		hiragana: "まるさんかいうん"
	},
	{
		original: "塚原運送",
		hiragana: "つかはらうんそう"
	},
	{
		original: "マヒロ",
		hiragana: "まひろ"
	},
	{
		original: "生野運送",
		hiragana: "いくのうんそう"
	},
	{
		original: "彦新",
		hiragana: "ひこしん"
	},
	{
		original: "諸冨運送有限会社",
		hiragana: "もろとみうんそうゆうげんがいしゃ"
	},
	{
		original: "有限会社長崎諏訪運輸",
		hiragana: "ゆうげんがいしゃながさきすわうんゆ"
	},
	{
		original: "日本ピープラス物流",
		hiragana: "にっぽんぴーぷらすぶつりゅう"
	},
	{
		original: "小池スチロール",
		hiragana: "こいけすちろーる"
	},
	{
		original: "三原運送",
		hiragana: "みはらうんそう"
	},
	{
		original: "丸進運油",
		hiragana: "まるしんうんあぶら"
	},
	{
		original: "此川運輸",
		hiragana: "これかわうんゆ"
	},
	{
		original: "侑羽ロジスティクス",
		hiragana: "ゆうはねろじすてぃくす"
	},
	{
		original: "セイワ運輸",
		hiragana: "せいわうんゆ"
	},
	{
		original: "マイニチ物流",
		hiragana: "まいにちぶつりゅう"
	},
	{
		original: "プロフィット",
		hiragana: "ぷろふぃっと"
	},
	{
		original: "西本急送",
		hiragana: "にしもときゅうそう"
	},
	{
		original: "丸栄エクスプレス",
		hiragana: "まるえいえくすぷれす"
	},
	{
		original: "宝生流通システム",
		hiragana: "ほうしょうりゅうとおりしすてむ"
	},
	{
		original: "磯村運輸有限会社",
		hiragana: "いそむらうんゆゆうげんがいしゃ"
	},
	{
		original: "共栄",
		hiragana: "きょうえい"
	},
	{
		original: "イーロジックス",
		hiragana: "いーろじっくす"
	},
	{
		original: "スズヨシ",
		hiragana: "すずよし"
	},
	{
		original: "三陽建設工業",
		hiragana: "さんようけんせつこうぎょう"
	},
	{
		original: "清水運送有限会社",
		hiragana: "しみずうんそうゆうげんがいしゃ"
	},
	{
		original: "アンカーライン東北",
		hiragana: "あんかーらいんとうほく"
	},
	{
		original: "有限会社ラウンドワーク",
		hiragana: "ゆうげんがいしゃらうんどわーく"
	},
	{
		original: "コネクト物流",
		hiragana: "こねくとぶつりゅう"
	},
	{
		original: "四国梱包運送",
		hiragana: "しこくこんぽううんそう"
	},
	{
		original: "トーヨー",
		hiragana: "とーよー"
	},
	{
		original: "ベルエクスプレス",
		hiragana: "べるえくすぷれす"
	},
	{
		original: "共同運送",
		hiragana: "きょうどううんそう"
	},
	{
		original: "富士エクスプレス",
		hiragana: "ふじえくすぷれす"
	},
	{
		original: "クリーンアイジャパン",
		hiragana: "くりーんあいじゃぱん"
	},
	{
		original: "平川運輸",
		hiragana: "ひらかわうんゆ"
	},
	{
		original: "羽賀運輸商会",
		hiragana: "はがうんゆしょうかい"
	},
	{
		original: "幸德運輸有限会社",
		hiragana: "さちゆゆうげんがいしゃ"
	},
	{
		original: "フジ運輸",
		hiragana: "ふじうんゆ"
	},
	{
		original: "瑞穂商事",
		hiragana: "みずほしょうじ"
	},
	{
		original: "栄組運送",
		hiragana: "さかえくみうんそう"
	},
	{
		original: "有限会社高山ユニック興業",
		hiragana: "ゆうげんがいしゃこうざんゆにっくこうぎょう"
	},
	{
		original: "日本急配",
		hiragana: "にっぽんきゅうはい"
	},
	{
		original: "三凌ロジスティクス",
		hiragana: "さんりょうろじすてぃくす"
	},
	{
		original: "ＳＨＯＥＩロジカルロジスティクス",
		hiragana: "ＳＨＯＥＩろじかるろじすてぃくす"
	},
	{
		original: "エース運輸",
		hiragana: "えーすうんゆ"
	},
	{
		original: "大丸倉庫運輸",
		hiragana: "だいまるそうこうんゆ"
	},
	{
		original: "桐原商事",
		hiragana: "きりはらしょうじ"
	},
	{
		original: "ふじもと運送",
		hiragana: "ふじもとうんそう"
	},
	{
		original: "プレシス",
		hiragana: "ぷれしす"
	},
	{
		original: "閖上トラック",
		hiragana: "ゆりあげとらっく"
	},
	{
		original: "フジセーレック",
		hiragana: "ふじせーれっく"
	},
	{
		original: "浅野運送",
		hiragana: "あさのうんそう"
	},
	{
		original: "高知トラックサービス",
		hiragana: "こうちとらっくさーびす"
	},
	{
		original: "西和物流",
		hiragana: "せいわぶつりゅう"
	},
	{
		original: "村上石油",
		hiragana: "むらかみせきゆ"
	},
	{
		original: "颯エンタープライズ",
		hiragana: "さつえんたーぷらいず"
	},
	{
		original: "有限会社大成物流",
		hiragana: "ゆうげんがいしゃたいせいぶつりゅう"
	},
	{
		original: "日本物流システム",
		hiragana: "にほんものりゅうしすてむ"
	},
	{
		original: "クリエート・バリュー",
		hiragana: "くりえーと・ばりゅー"
	},
	{
		original: "ファースト・ロジスティックス",
		hiragana: "ふぁーすと・ろじすてぃっくす"
	},
	{
		original: "吉美商事",
		hiragana: "よしみしょうじ"
	},
	{
		original: "関東冷凍運輸",
		hiragana: "かんとうれいとううんゆ"
	},
	{
		original: "グリーンステージ",
		hiragana: "ぐりーんすてーじ"
	},
	{
		original: "丸菱運輸",
		hiragana: "まるびしうんゆ"
	},
	{
		original: "城東運輸",
		hiragana: "じょうとううんゆ"
	},
	{
		original: "セイワロジスティクス",
		hiragana: "せいわろじすてぃくす"
	},
	{
		original: "三紀運輸九州",
		hiragana: "みきうんゆきゅうしゅう"
	},
	{
		original: "旭東運送",
		hiragana: "あさひひがしうんそう"
	},
	{
		original: "有限会社大熊運送",
		hiragana: "ゆうげんがいしゃおおくまうんそう"
	},
	{
		original: "有限会社佐取運送",
		hiragana: "ゆうげんがいしゃさとりうんそう"
	},
	{
		original: "岬陽運送",
		hiragana: "みさきよううんそう"
	},
	{
		original: "トチホク",
		hiragana: "とちほく"
	},
	{
		original: "丸信商会運輸",
		hiragana: "まるしんしょうかいうんゆ"
	},
	{
		original: "ＡＲＫ運輸",
		hiragana: "ＡＲＫうんゆ"
	},
	{
		original: "石原物流",
		hiragana: "いしはらぶつりゅう"
	},
	{
		original: "彩京トランス",
		hiragana: "さいきょうとらんす"
	},
	{
		original: "マーメイドデリバリー有限会社",
		hiragana: "まーめいどでりばりーゆうげんがいしゃ"
	},
	{
		original: "常磐郵便輸送",
		hiragana: "じょうばんゆうびんゆそう"
	},
	{
		original: "北海万豊運輸",
		hiragana: "ほっかいかずとようんゆ"
	},
	{
		original: "春日運送",
		hiragana: "かすがうんそう"
	},
	{
		original: "有限会社スリーピース",
		hiragana: "ゆうげんがいしゃすりーぴーす"
	},
	{
		original: "天馬",
		hiragana: "てんま"
	},
	{
		original: "有限会社飯田市場運輸",
		hiragana: "ゆうげんがいしゃいいだしばうんゆ"
	},
	{
		original: "中沢運輸",
		hiragana: "なかざわうんゆ"
	},
	{
		original: "光和輸送",
		hiragana: "こうわゆそう"
	},
	{
		original: "昭和運輸",
		hiragana: "しょうわうんゆ"
	},
	{
		original: "イノウ運輸",
		hiragana: "いのううんゆ"
	},
	{
		original: "丸両自動車運送",
		hiragana: "まるりょうじどうしゃうんそう"
	},
	{
		original: "峯岸運輸",
		hiragana: "みねぎしうんゆ"
	},
	{
		original: "ビィー・ワイ・ライン",
		hiragana: "びぃー・わい・らいん"
	},
	{
		original: "深田運送",
		hiragana: "ふかだうんそう"
	},
	{
		original: "新潟県牛乳輸送",
		hiragana: "にいがたけんぎゅうにゅうゆそう"
	},
	{
		original: "有限会社青木産業",
		hiragana: "ゆうげんがいしゃあおきさんぎょう"
	},
	{
		original: "八島運送",
		hiragana: "やしまうんそう"
	},
	{
		original: "ササキ通商",
		hiragana: "ささきつうしょう"
	},
	{
		original: "日昇運輸",
		hiragana: "にっしょううんゆ"
	},
	{
		original: "酒井運送",
		hiragana: "さかいうんそう"
	},
	{
		original: "有限会社北野運輸",
		hiragana: "ゆうげんがいしゃきたのうんゆ"
	},
	{
		original: "原口運輸商事",
		hiragana: "はらぐちうんゆしょうじ"
	},
	{
		original: "北日本物流",
		hiragana: "きたにほんぶつりゅう"
	},
	{
		original: "柳井産業運輸",
		hiragana: "やないさんぎょううんゆ"
	},
	{
		original: "山急",
		hiragana: "やまきゅう"
	},
	{
		original: "田中商店",
		hiragana: "たなかしょうてん"
	},
	{
		original: "丸伸運送",
		hiragana: "まるしんうんそう"
	},
	{
		original: "臼眞倉庫",
		hiragana: "うすまことそうこ"
	},
	{
		original: "菅野梱包運輸・ＳＫ観光",
		hiragana: "かんのこんぽううんゆ・ＳＫかんこう"
	},
	{
		original: "有限会社北修",
		hiragana: "ゆうげんがいしゃきたおさむ"
	},
	{
		original: "物流なかま",
		hiragana: "ぶつりゅうなかま"
	},
	{
		original: "近畿エキスプレス",
		hiragana: "きんきえきすぷれす"
	},
	{
		original: "有限会社丸千急送",
		hiragana: "ゆうげんがいしゃまるせんきゅうそう"
	},
	{
		original: "新居建設運輸",
		hiragana: "しんきょけんせつうんゆ"
	},
	{
		original: "システムトランスポート有限会社",
		hiragana: "しすてむとらんすぽーとゆうげんがいしゃ"
	},
	{
		original: "中京運輸",
		hiragana: "ちゅうきょううんゆ"
	},
	{
		original: "鴻大運輸",
		hiragana: "こうだいうんゆ"
	},
	{
		original: "牧野運送",
		hiragana: "まきのうんそう"
	},
	{
		original: "九州運輸",
		hiragana: "きゅうしゅううんゆ"
	},
	{
		original: "一印旭川魚卸売市場",
		hiragana: "いちいんあさひかわさかなおろしうりしじょう"
	},
	{
		original: "大阪トラック",
		hiragana: "おおさかとらっく"
	},
	{
		original: "ワタナベトランスポート",
		hiragana: "わたなべとらんすぽーと"
	},
	{
		original: "関東トラスト・キャリー",
		hiragana: "かんとうとらすと・きゃりー"
	},
	{
		original: "昭和運輸",
		hiragana: "しょうわうんゆ"
	},
	{
		original: "内外液輸",
		hiragana: "ないがいえきゆ"
	},
	{
		original: "西濃大阪エキスプレス",
		hiragana: "せいのうおおさかえきすぷれす"
	},
	{
		original: "共立運送",
		hiragana: "きょうりつうんそう"
	},
	{
		original: "市野輸送",
		hiragana: "いちのゆそう"
	},
	{
		original: "玉運輸",
		hiragana: "たまうんゆ"
	},
	{
		original: "毛利運送",
		hiragana: "もうりうんそう"
	},
	{
		original: "小田忠運輸",
		hiragana: "おだちゅううんゆ"
	},
	{
		original: "ヒップスタイル北海道",
		hiragana: "ひっぷすたいるほっかいどう"
	},
	{
		original: "トータル・ワークス",
		hiragana: "とーたる・わーくす"
	},
	{
		original: "アークユニオン",
		hiragana: "あーくゆにおん"
	},
	{
		original: "三正商事",
		hiragana: "さんせいしょうじ"
	},
	{
		original: "丸高運輸",
		hiragana: "まるたかうんゆ"
	},
	{
		original: "イーライン",
		hiragana: "いーらいん"
	},
	{
		original: "大和梱包運輸",
		hiragana: "やまとこんぽううんゆ"
	},
	{
		original: "カネタケ",
		hiragana: "かねたけ"
	},
	{
		original: "横浜急送",
		hiragana: "よこはまきゅうそう"
	},
	{
		original: "三恵物流センター",
		hiragana: "さんけいぶつりゅうせんたー"
	},
	{
		original: "浜中運輸",
		hiragana: "はまなかうんゆ"
	},
	{
		original: "藤田商事",
		hiragana: "ふじたしょうじ"
	},
	{
		original: "関東流通サービス",
		hiragana: "かんとうりゅうとおりさーびす"
	},
	{
		original: "ホームカーゴ",
		hiragana: "ほーむかーご"
	},
	{
		original: "有限会社フジ広益",
		hiragana: "ゆうげんがいしゃふじこうえき"
	},
	{
		original: "有限会社成田商事",
		hiragana: "ゆうげんがいしゃなりたしょうじ"
	},
	{
		original: "福島貨物有限会社",
		hiragana: "ふくしまかもつゆうげんがいしゃ"
	},
	{
		original: "ＩＫトランスポート",
		hiragana: "ＩＫとらんすぽーと"
	},
	{
		original: "大東通運",
		hiragana: "だいとうつううん"
	},
	{
		original: "ビー・カーゴワークス",
		hiragana: "びー・かーごわーくす"
	},
	{
		original: "吉田運輸",
		hiragana: "よしだうんゆ"
	},
	{
		original: "ＴＡＭＡＹＡ",
		hiragana: "ＴＡＭＡＹＡ"
	},
	{
		original: "大日産業",
		hiragana: "だいにちさんぎょう"
	},
	{
		original: "アスト・トランスポート",
		hiragana: "あすと・とらんすぽーと"
	},
	{
		original: "若生技建",
		hiragana: "わこうぎけん"
	},
	{
		original: "天野運送",
		hiragana: "あまのうんそう"
	},
	{
		original: "平成産業",
		hiragana: "へいせいさんぎょう"
	},
	{
		original: "有限会社トップス・カンパニー",
		hiragana: "ゆうげんがいしゃとっぷす・かんぱにー"
	},
	{
		original: "三和工業",
		hiragana: "さんわこうぎょう"
	},
	{
		original: "サークルライナーズ",
		hiragana: "さーくるらいなーず"
	},
	{
		original: "福井埠頭",
		hiragana: "ふくいふとう"
	},
	{
		original: "ストーク",
		hiragana: "すとーく"
	},
	{
		original: "みなと梱包運送",
		hiragana: "みなとこんぽううんそう"
	},
	{
		original: "吉藤運送",
		hiragana: "よしふじうんそう"
	},
	{
		original: "ヒカリエンタープライズ",
		hiragana: "ひかりえんたーぷらいず"
	},
	{
		original: "堀内運送",
		hiragana: "ほりうちうんそう"
	},
	{
		original: "奥州物流",
		hiragana: "おうしゅうぶつりゅう"
	},
	{
		original: "松本運輸機工",
		hiragana: "まつもとうんゆきこう"
	},
	{
		original: "上野",
		hiragana: "うえの"
	},
	{
		original: "有限会社タカツノ運輸",
		hiragana: "ゆうげんがいしゃたかつのうんゆ"
	},
	{
		original: "国広倉庫運輸",
		hiragana: "くにひろそうこうんゆ"
	},
	{
		original: "土屋水産",
		hiragana: "つちやすいさん"
	},
	{
		original: "第一製品流通",
		hiragana: "だいいちせいひんりゅうつう"
	},
	{
		original: "アサクラ",
		hiragana: "あさくら"
	},
	{
		original: "丸ヨ運輸倉庫",
		hiragana: "まるようんゆそうこ"
	},
	{
		original: "阪神金属興業",
		hiragana: "はんしんきんぞくこうぎょう"
	},
	{
		original: "三九運輸",
		hiragana: "さんきゅううんゆ"
	},
	{
		original: "Ｉ－Ｋｒａｆｔ",
		hiragana: "Ｉ－Ｋｒａｆｔ"
	},
	{
		original: "有限会社ビーアイ通商",
		hiragana: "ゆうげんがいしゃびーあいつうしょう"
	},
	{
		original: "高山運輸有限会社",
		hiragana: "こうざんうんゆゆうげんがいしゃ"
	},
	{
		original: "東海運輸",
		hiragana: "とうかいうんゆ"
	},
	{
		original: "丸輝ライン",
		hiragana: "まるてるらいん"
	},
	{
		original: "有限会社オノデラ",
		hiragana: "ゆうげんがいしゃおのでら"
	},
	{
		original: "伏木貨物自動車",
		hiragana: "ふしきかもつじどうしゃ"
	},
	{
		original: "柴田運送",
		hiragana: "しばたうんそう"
	},
	{
		original: "日本運送",
		hiragana: "にっぽんうんそう"
	},
	{
		original: "ビー・エス・エー",
		hiragana: "びー・えす・えー"
	},
	{
		original: "丸増",
		hiragana: "まるぞう"
	},
	{
		original: "イーピーエス商運",
		hiragana: "いーぴーえすしょううん"
	},
	{
		original: "五興運輸有限会社",
		hiragana: "ごきょううんゆゆうげんがいしゃ"
	},
	{
		original: "ブルーライン",
		hiragana: "ぶるーらいん"
	},
	{
		original: "マルカ運輸",
		hiragana: "まるかうんゆ"
	},
	{
		original: "佃運輸",
		hiragana: "つくだうんゆ"
	},
	{
		original: "東邦海陸運輸",
		hiragana: "とうほうかいりくうんゆ"
	},
	{
		original: "石塚運送有限会社",
		hiragana: "いしづかうんそうゆうげんがいしゃ"
	},
	{
		original: "勝組",
		hiragana: "かちぐみ"
	},
	{
		original: "ヤマウチ",
		hiragana: "やまうち"
	},
	{
		original: "有限会社北札幌小型運送社",
		hiragana: "ゆうげんがいしゃきたさっぽろこがたうんそうしゃ"
	},
	{
		original: "有限会社廣田商事",
		hiragana: "ゆうげんがいしゃひろたしょうじ"
	},
	{
		original: "荒木運輸",
		hiragana: "あらきうんゆ"
	},
	{
		original: "マックス運輸",
		hiragana: "まっくすうんゆ"
	},
	{
		original: "有限会社丸善総業",
		hiragana: "ゆうげんがいしゃまるぜんそうぎょう"
	},
	{
		original: "成田トランスポート",
		hiragana: "なりたとらんすぽーと"
	},
	{
		original: "有限会社吉田商事",
		hiragana: "ゆうげんがいしゃよしだしょうじ"
	},
	{
		original: "アイビーシーアクセス",
		hiragana: "あいびーしーあくせす"
	},
	{
		original: "ミライノ",
		hiragana: "みらいの"
	},
	{
		original: "魚津運輸",
		hiragana: "うおづうんゆ"
	},
	{
		original: "東海実業",
		hiragana: "とうかいじつぎょう"
	},
	{
		original: "横浜商工ロジスティクス",
		hiragana: "よこはましょうこうろじすてぃくす"
	},
	{
		original: "有限会社滝川運輸",
		hiragana: "ゆうげんがいしゃたきかわうんゆ"
	},
	{
		original: "ナミツー",
		hiragana: "なみつー"
	},
	{
		original: "八森運輸",
		hiragana: "はちもりうんゆ"
	},
	{
		original: "岡村運送",
		hiragana: "おかむらうんそう"
	},
	{
		original: "フジコー",
		hiragana: "ふじこー"
	},
	{
		original: "八幡運送",
		hiragana: "はちまんうんそう"
	},
	{
		original: "岐阜マルナカ",
		hiragana: "ぎふまるなか"
	},
	{
		original: "大誠",
		hiragana: "たいせい"
	},
	{
		original: "シンコー運輸倉庫有限会社",
		hiragana: "しんこーうんゆそうこゆうげんがいしゃ"
	},
	{
		original: "丸松急行",
		hiragana: "まるまつきゅうこう"
	},
	{
		original: "大江運送",
		hiragana: "おおえうんそう"
	},
	{
		original: "八木運送",
		hiragana: "やぎうんそう"
	},
	{
		original: "プリマス",
		hiragana: "ぷります"
	},
	{
		original: "湘南カーゴ",
		hiragana: "しょうなんかーご"
	},
	{
		original: "篠崎運送有限会社",
		hiragana: "しのざきうんそうゆうげんがいしゃ"
	},
	{
		original: "今井重機",
		hiragana: "いまいじゅうき"
	},
	{
		original: "有限会社高田商店",
		hiragana: "ゆうげんがいしゃたかだしょうてん"
	},
	{
		original: "塩沢",
		hiragana: "しおざわ"
	},
	{
		original: "レックス",
		hiragana: "れっくす"
	},
	{
		original: "霧島商事",
		hiragana: "きりしましょうじ"
	},
	{
		original: "魚沼陸送整備",
		hiragana: "うおぬまりくそうせいび"
	},
	{
		original: "イージーライン",
		hiragana: "いーじーらいん"
	},
	{
		original: "林工業所",
		hiragana: "りんこうぎょうところ"
	},
	{
		original: "トップライン",
		hiragana: "とっぷらいん"
	},
	{
		original: "山崎運送",
		hiragana: "やまざきうんそう"
	},
	{
		original: "シンク",
		hiragana: "しんく"
	},
	{
		original: "太陽運輸",
		hiragana: "たいよううんゆ"
	},
	{
		original: "上神谷運送厚木",
		hiragana: "うえかみやうんそうあつぎ"
	},
	{
		original: "旭光商運",
		hiragana: "きょっこうしょううん"
	},
	{
		original: "アオシマ",
		hiragana: "あおしま"
	},
	{
		original: "グローバル・トレーディング",
		hiragana: "ぐろーばる・とれーでぃんぐ"
	},
	{
		original: "三矢運送",
		hiragana: "みつやうんそう"
	},
	{
		original: "ダイヤ流通",
		hiragana: "だいやりゅうつう"
	},
	{
		original: "ＫＴＬ",
		hiragana: "ＫＴＬ"
	},
	{
		original: "九州パッケージ工業",
		hiragana: "きゅうしゅうぱっけーじこうぎょう"
	},
	{
		original: "興津貨物自動車運輸",
		hiragana: "おきつかもつじどうしゃうんゆ"
	},
	{
		original: "ミヤビ・コーポレーション",
		hiragana: "みやび・こーぽれーしょん"
	},
	{
		original: "長谷川物流",
		hiragana: "はせがわぶつりゅう"
	},
	{
		original: "阿波丸一運送",
		hiragana: "あわまるいちうんそう"
	},
	{
		original: "セオ運輸",
		hiragana: "せおうんゆ"
	},
	{
		original: "東洋陸運",
		hiragana: "とうようりくうん"
	},
	{
		original: "用瀬運送有限会社",
		hiragana: "もちがせうんそうゆうげんがいしゃ"
	},
	{
		original: "昭和運輸",
		hiragana: "しょうわうんゆ"
	},
	{
		original: "ダイヤ運輸",
		hiragana: "だいやうんゆ"
	},
	{
		original: "松阪運輸",
		hiragana: "まつさかうんゆ"
	},
	{
		original: "阪神ロジサポート",
		hiragana: "はんしんろじさぽーと"
	},
	{
		original: "菱和運輸",
		hiragana: "りょうわうんゆ"
	},
	{
		original: "サワイ通運倉庫",
		hiragana: "さわいつううんそうこ"
	},
	{
		original: "ターボ商事",
		hiragana: "たーぼしょうじ"
	},
	{
		original: "滋賀中央物流",
		hiragana: "しがちゅうおうぶつりゅう"
	},
	{
		original: "東京宅配事業",
		hiragana: "とうきょうたくはいじぎょう"
	},
	{
		original: "有限会社アスリート",
		hiragana: "ゆうげんがいしゃあすりーと"
	},
	{
		original: "阿久津運送",
		hiragana: "あくつうんそう"
	},
	{
		original: "有限会社丸十運輸",
		hiragana: "ゆうげんがいしゃまるじゅううんゆ"
	},
	{
		original: "野中産業",
		hiragana: "のなかさんぎょう"
	},
	{
		original: "有限会社中部車輌運輸",
		hiragana: "ゆうげんがいしゃちゅうぶしゃりょううんゆ"
	},
	{
		original: "かぶと運送",
		hiragana: "かぶとうんそう"
	},
	{
		original: "愛幸",
		hiragana: "よしゆき"
	},
	{
		original: "エースライン",
		hiragana: "えーすらいん"
	},
	{
		original: "門真陸運",
		hiragana: "かどまりくうん"
	},
	{
		original: "茂木運送",
		hiragana: "もてぎうんそう"
	},
	{
		original: "中央運送",
		hiragana: "ちゅうおううんそう"
	},
	{
		original: "ＳＲ物流",
		hiragana: "ＳＲぶつりゅう"
	},
	{
		original: "大生物流",
		hiragana: "だいせいぶつりゅう"
	},
	{
		original: "坂本商管有限会社",
		hiragana: "さかもとしょうかんゆうげんがいしゃ"
	},
	{
		original: "角商会",
		hiragana: "かくしょうかい"
	},
	{
		original: "ＡＳＫ金澤",
		hiragana: "ＡＳＫかなざわ"
	},
	{
		original: "伸和運輸",
		hiragana: "のぶかずうんゆ"
	},
	{
		original: "松藤運輸倉庫",
		hiragana: "まつふじうんゆそうこ"
	},
	{
		original: "ハクセン貨物運送",
		hiragana: "はくせんかもつうんそう"
	},
	{
		original: "タマシステムサービス",
		hiragana: "たましすてむさーびす"
	},
	{
		original: "前田運輸",
		hiragana: "まえだうんゆ"
	},
	{
		original: "有限会社楓商会",
		hiragana: "ゆうげんがいしゃもみじしょうかい"
	},
	{
		original: "ニッコン北物",
		hiragana: "にっこんきたもの"
	},
	{
		original: "丸百運送",
		hiragana: "まるひゃくうんそう"
	},
	{
		original: "マルト物流",
		hiragana: "まるとぶつりゅう"
	},
	{
		original: "東港運輸",
		hiragana: "ひがしみなとうんゆ"
	},
	{
		original: "エー・ライン物流",
		hiragana: "えー・らいんぶつりゅう"
	},
	{
		original: "大松運輸",
		hiragana: "おおまつうんゆ"
	},
	{
		original: "未来運輸",
		hiragana: "みらいうんゆ"
	},
	{
		original: "島田産業",
		hiragana: "しまださんぎょう"
	},
	{
		original: "日新物流",
		hiragana: "にっしんぶつりゅう"
	},
	{
		original: "根本運送",
		hiragana: "こんぽんうんそう"
	},
	{
		original: "ＹＭ　ＬＩＮＥ",
		hiragana: "ＹＭ　ＬＩＮＥ"
	},
	{
		original: "ＳＡＴ",
		hiragana: "ＳＡＴ"
	},
	{
		original: "有限会社ケイライン",
		hiragana: "ゆうげんがいしゃけいらいん"
	},
	{
		original: "成運",
		hiragana: "せいうん"
	},
	{
		original: "吉岡運輸",
		hiragana: "よしおかうんゆ"
	},
	{
		original: "梶本運輸倉庫",
		hiragana: "かじもとうんゆそうこ"
	},
	{
		original: "植田運送",
		hiragana: "うえだうんそう"
	},
	{
		original: "光成物流",
		hiragana: "みつなりぶつりゅう"
	},
	{
		original: "エスユーコールド",
		hiragana: "えすゆーこーるど"
	},
	{
		original: "東和物流",
		hiragana: "とうわぶつりゅう"
	},
	{
		original: "ヒカリエキスプレス",
		hiragana: "ひかりえきすぷれす"
	},
	{
		original: "有限会社優美運送",
		hiragana: "ゆうげんがいしゃゆみうんそう"
	},
	{
		original: "フアースト・カーゴ",
		hiragana: "ふあーすと・かーご"
	},
	{
		original: "水野運送",
		hiragana: "みずのうんそう"
	},
	{
		original: "新興運送",
		hiragana: "しんこううんそう"
	},
	{
		original: "ホシノ",
		hiragana: "ほしの"
	},
	{
		original: "日の出運輸",
		hiragana: "ひのでうんゆ"
	},
	{
		original: "有限会社こもれび運送",
		hiragana: "ゆうげんがいしゃこもれびうんそう"
	},
	{
		original: "有限会社アイトシステム",
		hiragana: "ゆうげんがいしゃあいとしすてむ"
	},
	{
		original: "高岡通運",
		hiragana: "たかおかつううん"
	},
	{
		original: "有限会社佐藤運送",
		hiragana: "ゆうげんがいしゃさとううんそう"
	},
	{
		original: "山与運送",
		hiragana: "やまようんそう"
	},
	{
		original: "Ｊｎｅｔ",
		hiragana: "Ｊｎｅｔ"
	},
	{
		original: "日配企画",
		hiragana: "にっぱいきかく"
	},
	{
		original: "オンライン",
		hiragana: "おんらいん"
	},
	{
		original: "新聞発送サービスセンター",
		hiragana: "しんぶんはっそうさーびすせんたー"
	},
	{
		original: "千里通商",
		hiragana: "せんりつうしょう"
	},
	{
		original: "福山福運輸有限会社",
		hiragana: "ふくやまふくうんゆゆうげんがいしゃ"
	},
	{
		original: "堀切運輸",
		hiragana: "ほりきりうんゆ"
	},
	{
		original: "守屋運輸",
		hiragana: "もりやうんゆ"
	},
	{
		original: "神奈川臨海通運",
		hiragana: "かながわりんかいつううん"
	},
	{
		original: "有限会社松崎商事",
		hiragana: "ゆうげんがいしゃまつざきしょうじ"
	},
	{
		original: "タケチ運輸有限会社",
		hiragana: "たけちうんゆゆうげんがいしゃ"
	},
	{
		original: "アクト",
		hiragana: "あくと"
	},
	{
		original: "ラインアップ",
		hiragana: "らいんあっぷ"
	},
	{
		original: "茨木運輸",
		hiragana: "いばらきうんゆ"
	},
	{
		original: "宝運輸",
		hiragana: "たからうんゆ"
	},
	{
		original: "キャリーメイト",
		hiragana: "きゃりーめいと"
	},
	{
		original: "浜名コーポレーション",
		hiragana: "はまなこーぽれーしょん"
	},
	{
		original: "ノーヒ・ロジテック関東",
		hiragana: "のーひ・ろじてっくかんとう"
	},
	{
		original: "四国レッグズ",
		hiragana: "しこくれっぐず"
	},
	{
		original: "石原運輸",
		hiragana: "いしはらうんゆ"
	},
	{
		original: "大道",
		hiragana: "だいどう"
	},
	{
		original: "ＨＩＲＯ",
		hiragana: "ＨＩＲＯ"
	},
	{
		original: "アクティブ・１",
		hiragana: "あくてぃぶ・１"
	},
	{
		original: "Ｆ・Ｃライン",
		hiragana: "Ｆ・Ｃらいん"
	},
	{
		original: "リープラインロジスティクス",
		hiragana: "りーぷらいんろじすてぃくす"
	},
	{
		original: "ふじや急行",
		hiragana: "ふじやきゅうこう"
	},
	{
		original: "北九州ダイキュー運輸",
		hiragana: "きたきゅうしゅうだいきゅーうんゆ"
	},
	{
		original: "湯浅商運",
		hiragana: "ゆあさしょううん"
	},
	{
		original: "マルト運送有限会社",
		hiragana: "まるとうんそうゆうげんがいしゃ"
	},
	{
		original: "美野里物流サービス",
		hiragana: "みのりぶつりゅうさーびす"
	},
	{
		original: "Ｒｅｂｉｃ",
		hiragana: "Ｒｅｂｉｃ"
	},
	{
		original: "小宮山運送",
		hiragana: "こみやまうんそう"
	},
	{
		original: "滝田産業",
		hiragana: "たきたさんぎょう"
	},
	{
		original: "常南運送",
		hiragana: "じょうなんうんそう"
	},
	{
		original: "有限会社一山運送店",
		hiragana: "ゆうげんがいしゃひとやまうんそうてん"
	},
	{
		original: "東興輸送",
		hiragana: "とうこうゆそう"
	},
	{
		original: "三晃運輸",
		hiragana: "さんこううんゆ"
	},
	{
		original: "ＮＴコーポレーション",
		hiragana: "ＮＴこーぽれーしょん"
	},
	{
		original: "滝川自動車運輸",
		hiragana: "たきかわじどうしゃうんゆ"
	},
	{
		original: "東名倉庫",
		hiragana: "とうめいそうこ"
	},
	{
		original: "旭運輸",
		hiragana: "あさひうんゆ"
	},
	{
		original: "ミヤコ陸運",
		hiragana: "みやこりくうん"
	},
	{
		original: "立川運送",
		hiragana: "たちかわうんそう"
	},
	{
		original: "丸憲運輸有限会社",
		hiragana: "まるのりうんゆゆうげんがいしゃ"
	},
	{
		original: "関東貨物",
		hiragana: "かんとうかもつ"
	},
	{
		original: "愛農運輸有限会社",
		hiragana: "あいのううんゆゆうげんがいしゃ"
	},
	{
		original: "ＫＢ　ＬＩＮＥ",
		hiragana: "ＫＢ　ＬＩＮＥ"
	},
	{
		original: "マルハコーポレーション",
		hiragana: "まるはこーぽれーしょん"
	},
	{
		original: "鈴鹿配送",
		hiragana: "すずかはいそう"
	},
	{
		original: "高増運送有限会社",
		hiragana: "たかぞううんそうゆうげんがいしゃ"
	},
	{
		original: "井出綜合建設",
		hiragana: "いでそうごうけんせつ"
	},
	{
		original: "ダイリン",
		hiragana: "だいりん"
	},
	{
		original: "相光",
		hiragana: "そうひかり"
	},
	{
		original: "有限会社フレンズ運送",
		hiragana: "ゆうげんがいしゃふれんずうんそう"
	},
	{
		original: "有限会社物流センター",
		hiragana: "ゆうげんがいしゃぶつりゅうせんたー"
	},
	{
		original: "武州",
		hiragana: "ぶしゅう"
	},
	{
		original: "ビヨンズトランズ",
		hiragana: "びよんずとらんず"
	},
	{
		original: "松田商事",
		hiragana: "まつだしょうじ"
	},
	{
		original: "二葉興運",
		hiragana: "ふたばきょううん"
	},
	{
		original: "有限会社石井運輸",
		hiragana: "ゆうげんがいしゃいしいうんゆ"
	},
	{
		original: "第一名誠",
		hiragana: "だいいちめいまこと"
	},
	{
		original: "防通トランスポート",
		hiragana: "ぼうとおりとらんすぽーと"
	},
	{
		original: "日興運輸倉庫",
		hiragana: "にっこううんゆそうこ"
	},
	{
		original: "菊川輸送センター有限会社",
		hiragana: "きくがわゆそうせんたーゆうげんがいしゃ"
	},
	{
		original: "松運",
		hiragana: "まつうん"
	},
	{
		original: "中野商会",
		hiragana: "なかのしょうかい"
	},
	{
		original: "吉田運輸",
		hiragana: "よしだうんゆ"
	},
	{
		original: "インパクト",
		hiragana: "いんぱくと"
	},
	{
		original: "大福",
		hiragana: "だいふく"
	},
	{
		original: "有限会社Ｉ－Ｌｉｎｅ",
		hiragana: "ゆうげんがいしゃＩ－Ｌｉｎｅ"
	},
	{
		original: "中部アイピー",
		hiragana: "ちゅうぶあいぴー"
	},
	{
		original: "大伸",
		hiragana: "たいしん"
	},
	{
		original: "ドリームライン",
		hiragana: "どりーむらいん"
	},
	{
		original: "中部運輸荷役",
		hiragana: "ちゅうぶうんゆにやく"
	},
	{
		original: "山信運送有限会社",
		hiragana: "やましんうんそうゆうげんがいしゃ"
	},
	{
		original: "有限会社幸栄流通サービス",
		hiragana: "ゆうげんがいしゃゆきえりゅうつうさーびす"
	},
	{
		original: "嵯峨運輸",
		hiragana: "さがうんゆ"
	},
	{
		original: "有楽運送",
		hiragana: "ゆうらくうんそう"
	},
	{
		original: "有限会社ＳＪ輸送",
		hiragana: "ゆうげんがいしゃＳＪゆそう"
	},
	{
		original: "中村陸送",
		hiragana: "なかむらりくそう"
	},
	{
		original: "オオトリ物流",
		hiragana: "おおとりぶつりゅう"
	},
	{
		original: "タツミトランスポート",
		hiragana: "たつみとらんすぽーと"
	},
	{
		original: "アドバンス流通",
		hiragana: "あどばんすりゅうつう"
	},
	{
		original: "徳沢運輸",
		hiragana: "とくさわうんゆ"
	},
	{
		original: "Ｋ’ｓ物流",
		hiragana: "Ｋ’ｓぶつりゅう"
	},
	{
		original: "池田開発",
		hiragana: "いけだかいはつ"
	},
	{
		original: "大虎運輸",
		hiragana: "おおとらうんゆ"
	},
	{
		original: "エコーロジテム",
		hiragana: "えこーろじてむ"
	},
	{
		original: "大阪此花運送",
		hiragana: "おおさかこのはなうんそう"
	},
	{
		original: "春原運輸",
		hiragana: "すのはらうんゆ"
	},
	{
		original: "有限会社松北ラインサービス",
		hiragana: "ゆうげんがいしゃまつきたらいんさーびす"
	},
	{
		original: "富士運送",
		hiragana: "ふじうんそう"
	},
	{
		original: "市川運送",
		hiragana: "いちかわうんそう"
	},
	{
		original: "白河運輸",
		hiragana: "しらかわうんゆ"
	},
	{
		original: "宗谷トラック",
		hiragana: "そうやとらっく"
	},
	{
		original: "神戸高速運輸",
		hiragana: "こうべこうそくうんゆ"
	},
	{
		original: "東栄運送",
		hiragana: "とうえいうんそう"
	},
	{
		original: "愛豊重機",
		hiragana: "あいとよしげき"
	},
	{
		original: "小岩倉庫運輸",
		hiragana: "こいわそうこうんゆ"
	},
	{
		original: "アルファ運輸",
		hiragana: "あるふぁうんゆ"
	},
	{
		original: "有限会社インターネット物流",
		hiragana: "ゆうげんがいしゃいんたーねっとぶつりゅう"
	},
	{
		original: "有限会社千葉シマダ運輸",
		hiragana: "ゆうげんがいしゃちばしまだうんゆ"
	},
	{
		original: "吉福運送",
		hiragana: "よしふくうんそう"
	},
	{
		original: "秀栄",
		hiragana: "よしえ"
	},
	{
		original: "エヌピー運輸関東",
		hiragana: "えぬぴーうんゆかんとう"
	},
	{
		original: "新興商運",
		hiragana: "しんこうしょううん"
	},
	{
		original: "篠原陸運",
		hiragana: "しのはらりくうん"
	},
	{
		original: "佐藤商事",
		hiragana: "さとうしょうじ"
	},
	{
		original: "片岡運輸",
		hiragana: "かたおかうんゆ"
	},
	{
		original: "有限会社原留運輸",
		hiragana: "ゆうげんがいしゃはらりゅううんゆ"
	},
	{
		original: "北陸運送",
		hiragana: "ほくりくうんそう"
	},
	{
		original: "有限会社アスカ物流",
		hiragana: "ゆうげんがいしゃあすかぶつりゅう"
	},
	{
		original: "東北酸素",
		hiragana: "とうほくさんそ"
	},
	{
		original: "ミヤサキ流通",
		hiragana: "みやさきりゅうつう"
	},
	{
		original: "有限会社標栄運輸",
		hiragana: "ゆうげんがいしゃしるべえいうんゆ"
	},
	{
		original: "柏尾運輸",
		hiragana: "かしおうんゆ"
	},
	{
		original: "ＩＲＳエキスプレス",
		hiragana: "ＩＲＳえきすぷれす"
	},
	{
		original: "三紀運輸大阪",
		hiragana: "みきうんゆおおさか"
	},
	{
		original: "アルメイト",
		hiragana: "あるめいと"
	},
	{
		original: "東京運輸",
		hiragana: "とうきょううんゆ"
	},
	{
		original: "藤梱包物流",
		hiragana: "ふじこんぽうぶつりゅう"
	},
	{
		original: "フジネットワークス",
		hiragana: "ふじねっとわーくす"
	},
	{
		original: "横急",
		hiragana: "よこきゅう"
	},
	{
		original: "ジーエフホールディングス",
		hiragana: "じーえふほーるでぃんぐす"
	},
	{
		original: "西尾運送",
		hiragana: "にしおうんそう"
	},
	{
		original: "有限会社堀運送",
		hiragana: "ゆうげんがいしゃほりうんそう"
	},
	{
		original: "中国保安警備",
		hiragana: "ちゅうごくほあんけいび"
	},
	{
		original: "有限会社エム・オー・サービス",
		hiragana: "ゆうげんがいしゃえむ・おー・さーびす"
	},
	{
		original: "松陸運輸",
		hiragana: "まつりくうんゆ"
	},
	{
		original: "広島資材",
		hiragana: "ひろしましざい"
	},
	{
		original: "誠実業",
		hiragana: "せいじつぎょう"
	},
	{
		original: "辰未トランスポート",
		hiragana: "たつひつじとらんすぽーと"
	},
	{
		original: "北関東スワロートラック",
		hiragana: "きたかんとうすわろーとらっく"
	},
	{
		original: "ニュー多摩運輸",
		hiragana: "にゅーたまうんゆ"
	},
	{
		original: "バンボード運輸",
		hiragana: "ばんぼーどうんゆ"
	},
	{
		original: "有限会社トウタツ",
		hiragana: "ゆうげんがいしゃとうたつ"
	},
	{
		original: "光駿輸送",
		hiragana: "ひかりしゅんゆそう"
	},
	{
		original: "愛南",
		hiragana: "あいなん"
	},
	{
		original: "丸友青果",
		hiragana: "まるともせいか"
	},
	{
		original: "三急運輸",
		hiragana: "さんきゅううんゆ"
	},
	{
		original: "久留米梱包運輸",
		hiragana: "くるめこんぽううんゆ"
	},
	{
		original: "丸三",
		hiragana: "まるさん"
	},
	{
		original: "丸全水戸運輸",
		hiragana: "まるぜんみとうんゆ"
	},
	{
		original: "アクト",
		hiragana: "あくと"
	},
	{
		original: "牧迫運輸",
		hiragana: "まきさこうんゆ"
	},
	{
		original: "聖菱運輸",
		hiragana: "ひじりひしうんゆ"
	},
	{
		original: "長生産業",
		hiragana: "ちょうせいさんぎょう"
	},
	{
		original: "ますや急配",
		hiragana: "ますやきゅうはい"
	},
	{
		original: "丸島運輸",
		hiragana: "まるしまうんゆ"
	},
	{
		original: "マルスネイト",
		hiragana: "まるすねいと"
	},
	{
		original: "善光寺運送",
		hiragana: "ぜんこうじうんそう"
	},
	{
		original: "旭川ロテック",
		hiragana: "あさひかわろてっく"
	},
	{
		original: "シキトウサービス",
		hiragana: "しきとうさーびす"
	},
	{
		original: "大通運輸",
		hiragana: "おおどおりうんゆ"
	},
	{
		original: "東和運輸",
		hiragana: "とうわうんゆ"
	},
	{
		original: "タムラシステムサービス",
		hiragana: "たむらしすてむさーびす"
	},
	{
		original: "清水",
		hiragana: "しみず"
	},
	{
		original: "野村運送",
		hiragana: "のむらうんそう"
	},
	{
		original: "ＨＲＳ",
		hiragana: "ＨＲＳ"
	},
	{
		original: "港南運輸",
		hiragana: "こうなんうんゆ"
	},
	{
		original: "神栄運輸",
		hiragana: "しんえいうんゆ"
	},
	{
		original: "竹通物流",
		hiragana: "たけゆきぶつりゅう"
	},
	{
		original: "宇田川運送",
		hiragana: "うだがわうんそう"
	},
	{
		original: "マルタカ",
		hiragana: "まるたか"
	},
	{
		original: "松原商会",
		hiragana: "まつばらしょうかい"
	},
	{
		original: "ヤカタ興運",
		hiragana: "やかたきょううん"
	},
	{
		original: "クリーン商会",
		hiragana: "くりーんしょうかい"
	},
	{
		original: "真和運送",
		hiragana: "まさかずうんそう"
	},
	{
		original: "総合物流サービス",
		hiragana: "そうごうぶつりゅうさーびす"
	},
	{
		original: "藤栄運輸",
		hiragana: "ふじえうんゆ"
	},
	{
		original: "越秀運輸倉庫",
		hiragana: "えつしゅううんゆそうこ"
	},
	{
		original: "関野運輸",
		hiragana: "せきのうんゆ"
	},
	{
		original: "第一運輸",
		hiragana: "だいいちうんゆ"
	},
	{
		original: "プラスライントランスポート",
		hiragana: "ぷらすらいんとらんすぽーと"
	},
	{
		original: "森興業有限会社",
		hiragana: "もりこうぎょうゆうげんがいしゃ"
	},
	{
		original: "カシックス",
		hiragana: "かしっくす"
	},
	{
		original: "ビックネット",
		hiragana: "びっくねっと"
	},
	{
		original: "丸文運輸",
		hiragana: "まるぶんうんゆ"
	},
	{
		original: "アイ・エス・ロジスティクス",
		hiragana: "あい・えす・ろじすてぃくす"
	},
	{
		original: "ヤマタツ商事",
		hiragana: "やまたつしょうじ"
	},
	{
		original: "樋口運輸",
		hiragana: "ひぐちうんゆ"
	},
	{
		original: "ナニワ企業",
		hiragana: "なにわきぎょう"
	},
	{
		original: "嶌本運輸",
		hiragana: "しまもとうんゆ"
	},
	{
		original: "安東運送",
		hiragana: "あんとううんそう"
	},
	{
		original: "京町堀運輸倉庫",
		hiragana: "きょうまちほりうんゆそうこ"
	},
	{
		original: "小林配送サービス",
		hiragana: "こばやしはいそうさーびす"
	},
	{
		original: "正和物流",
		hiragana: "まさかずぶつりゅう"
	},
	{
		original: "龍己運輸",
		hiragana: "りゅうおのれうんゆ"
	},
	{
		original: "明光運輸",
		hiragana: "あきみつうんゆ"
	},
	{
		original: "光陽陸運",
		hiragana: "こうようりくうん"
	},
	{
		original: "リーブ",
		hiragana: "りーぶ"
	},
	{
		original: "出岡重量運輸",
		hiragana: "しゅつおかじゅうりょううんゆ"
	},
	{
		original: "朝日輸送",
		hiragana: "あさひゆそう"
	},
	{
		original: "北新",
		hiragana: "きたしん"
	},
	{
		original: "共同物流",
		hiragana: "きょうどうぶつりゅう"
	},
	{
		original: "北陸湊運輸",
		hiragana: "ほくりくみなとうんゆ"
	},
	{
		original: "長谷川運輸",
		hiragana: "はせがわうんゆ"
	},
	{
		original: "有限会社中山運送",
		hiragana: "ゆうげんがいしゃなかやまうんそう"
	},
	{
		original: "アートバンライン",
		hiragana: "あーとばんらいん"
	},
	{
		original: "谷川製凾有限会社",
		hiragana: "たにがわせいかんゆうげんがいしゃ"
	},
	{
		original: "センターリバー",
		hiragana: "せんたーりばー"
	},
	{
		original: "有限会社松本商運",
		hiragana: "ゆうげんがいしゃまつもとしょううん"
	},
	{
		original: "船川港通運",
		hiragana: "ふながわみなとつううん"
	},
	{
		original: "立山陸送",
		hiragana: "たてやまりくそう"
	},
	{
		original: "新栄物流サービス",
		hiragana: "しんえいぶつりゅうさーびす"
	},
	{
		original: "新池田",
		hiragana: "あらいけた"
	},
	{
		original: "カープトラック",
		hiragana: "かーぷとらっく"
	},
	{
		original: "別海貨物",
		hiragana: "べっかいかもつ"
	},
	{
		original: "東海急送",
		hiragana: "とうかいきゅうそう"
	},
	{
		original: "有限会社恒和配送",
		hiragana: "ゆうげんがいしゃつねかずはいそう"
	},
	{
		original: "祐誠",
		hiragana: "すけまこと"
	},
	{
		original: "美原工業",
		hiragana: "みはらこうぎょう"
	},
	{
		original: "西新運輸",
		hiragana: "にししんうんゆ"
	},
	{
		original: "東海ロジテム",
		hiragana: "とうかいろじてむ"
	},
	{
		original: "エクセレント物流",
		hiragana: "えくせれんとぶつりゅう"
	},
	{
		original: "小林倉運",
		hiragana: "こばやしくらうん"
	},
	{
		original: "坂部運送",
		hiragana: "さかべうんそう"
	},
	{
		original: "愛媛急配",
		hiragana: "えひめきゅうはい"
	},
	{
		original: "名岐トラックオート",
		hiragana: "めいしとらっくおーと"
	},
	{
		original: "マルゼン",
		hiragana: "まるぜん"
	},
	{
		original: "シングン物流",
		hiragana: "しんぐんぶつりゅう"
	},
	{
		original: "東陸運",
		hiragana: "ひがしりくうん"
	},
	{
		original: "増田運送",
		hiragana: "ますだうんそう"
	},
	{
		original: "有限会社トランスポート・サービス",
		hiragana: "ゆうげんがいしゃとらんすぽーと・さーびす"
	},
	{
		original: "新日本運輸",
		hiragana: "しんにほんうんゆ"
	},
	{
		original: "北海道三八五流通",
		hiragana: "ほっかいどうさんぱちごりゅうつう"
	},
	{
		original: "的場運送",
		hiragana: "まとばうんそう"
	},
	{
		original: "寺崎運輸",
		hiragana: "てらさきうんゆ"
	},
	{
		original: "ダイキュー運輸",
		hiragana: "だいきゅーうんゆ"
	},
	{
		original: "サンビルド",
		hiragana: "さんびるど"
	},
	{
		original: "合同会社都島自動車商会",
		hiragana: "ごうどうかいしゃみやこしまじどうしゃしょうかい"
	},
	{
		original: "有限会社結城商事輸送",
		hiragana: "ゆうげんがいしゃゆうきしょうじゆそう"
	},
	{
		original: "センターズ",
		hiragana: "せんたーず"
	},
	{
		original: "有限会社エスケーライン横浜",
		hiragana: "ゆうげんがいしゃえすけーらいんよこはま"
	},
	{
		original: "有限会社湘南運搬サービス",
		hiragana: "ゆうげんがいしゃしょうなんうんぱんさーびす"
	},
	{
		original: "宮下運輸",
		hiragana: "みやしたうんゆ"
	},
	{
		original: "四国運輪有限会社",
		hiragana: "しこくうんわゆうげんがいしゃ"
	},
	{
		original: "東群運送",
		hiragana: "ひがしぐんうんそう"
	},
	{
		original: "翔永輸送",
		hiragana: "しょうえいゆそう"
	},
	{
		original: "丸昇",
		hiragana: "まるしょう"
	},
	{
		original: "広和運輸",
		hiragana: "ひろかずうんゆ"
	},
	{
		original: "有限会社森通商",
		hiragana: "ゆうげんがいしゃもりつうしょう"
	},
	{
		original: "ケーエス",
		hiragana: "けーえす"
	},
	{
		original: "白石運輸",
		hiragana: "しろいしうんゆ"
	},
	{
		original: "大牟田トラック運送有限会社",
		hiragana: "おおむたとらっくうんそうゆうげんがいしゃ"
	},
	{
		original: "玉成運送",
		hiragana: "ぎょくせいうんそう"
	},
	{
		original: "三八五トラフィック",
		hiragana: "さんぱちごとらふぃっく"
	},
	{
		original: "関東ロジコム",
		hiragana: "かんとうろじこむ"
	},
	{
		original: "山陽陸運",
		hiragana: "さんようりくうん"
	},
	{
		original: "海老屋運送",
		hiragana: "えびやうんそう"
	},
	{
		original: "京北サービス",
		hiragana: "けいほくさーびす"
	},
	{
		original: "星煌",
		hiragana: "ほしこう"
	},
	{
		original: "セブン",
		hiragana: "せぶん"
	},
	{
		original: "オキマストランスポート",
		hiragana: "おきますとらんすぽーと"
	},
	{
		original: "つしま運輸有限会社",
		hiragana: "つしまうんゆゆうげんがいしゃ"
	},
	{
		original: "有限会社ケイズジャパン",
		hiragana: "ゆうげんがいしゃけいずじゃぱん"
	},
	{
		original: "福島東邦運輸倉庫",
		hiragana: "ふくしまとうほううんゆそうこ"
	},
	{
		original: "住吉運輸産業",
		hiragana: "すみよしうんゆさんぎょう"
	},
	{
		original: "新潟通運",
		hiragana: "にいがたつううん"
	},
	{
		original: "テイクオン",
		hiragana: "ていくおん"
	},
	{
		original: "川野運輸",
		hiragana: "かわのうんゆ"
	},
	{
		original: "タニハナ物流",
		hiragana: "たにはなぶつりゅう"
	},
	{
		original: "中尾運輸",
		hiragana: "なかおうんゆ"
	},
	{
		original: "アクセスライン",
		hiragana: "あくせすらいん"
	},
	{
		original: "四国家具運送有限会社",
		hiragana: "しこくかぐうんそうゆうげんがいしゃ"
	},
	{
		original: "ワイエー物流",
		hiragana: "わいえーぶつりゅう"
	},
	{
		original: "豊運輸",
		hiragana: "ゆたかうんゆ"
	},
	{
		original: "大森運輸商会",
		hiragana: "おおもりうんゆしょうかい"
	},
	{
		original: "若月商運",
		hiragana: "わかつきしょううん"
	},
	{
		original: "キャリオン",
		hiragana: "きゃりおん"
	},
	{
		original: "カネフジ運輸",
		hiragana: "かねふじうんゆ"
	},
	{
		original: "ＴＥＳ",
		hiragana: "ＴＥＳ"
	},
	{
		original: "高崎通運",
		hiragana: "たかさきつううん"
	},
	{
		original: "第一自動車運送",
		hiragana: "だいいちじどうしゃうんそう"
	},
	{
		original: "ティーウエスト",
		hiragana: "てぃーうえすと"
	},
	{
		original: "大一運輸",
		hiragana: "ひろかずうんゆ"
	},
	{
		original: "有限会社関越食品運輸",
		hiragana: "ゆうげんがいしゃかんえつしょくひんうんゆ"
	},
	{
		original: "ワールドライン",
		hiragana: "わーるどらいん"
	},
	{
		original: "福屋工業",
		hiragana: "ふくやこうぎょう"
	},
	{
		original: "カド",
		hiragana: "かど"
	},
	{
		original: "広島運送",
		hiragana: "ひろしまうんそう"
	},
	{
		original: "飯田運送",
		hiragana: "いいだうんそう"
	},
	{
		original: "八洲輸送",
		hiragana: "はっしゅうゆそう"
	},
	{
		original: "東九総合運輸",
		hiragana: "ひがしきゅうそうごううんゆ"
	},
	{
		original: "高陽運輸",
		hiragana: "かやうんゆ"
	},
	{
		original: "大志商運",
		hiragana: "たいししょううん"
	},
	{
		original: "マルカワ新港運輸倉庫",
		hiragana: "まるかわしんこううんゆそうこ"
	},
	{
		original: "栃木曙運輸",
		hiragana: "とちぎあけぼのうんゆ"
	},
	{
		original: "さんけい",
		hiragana: "さんけい"
	},
	{
		original: "和興",
		hiragana: "わきょう"
	},
	{
		original: "猪野商事",
		hiragana: "いのしょうじ"
	},
	{
		original: "有限会社三協運輸",
		hiragana: "ゆうげんがいしゃさんきょううんゆ"
	},
	{
		original: "新産運送",
		hiragana: "しんさんうんそう"
	},
	{
		original: "梶運送",
		hiragana: "かじうんそう"
	},
	{
		original: "岩渕建設",
		hiragana: "いわぶちけんせつ"
	},
	{
		original: "有限会社ニューテック",
		hiragana: "ゆうげんがいしゃにゅーてっく"
	},
	{
		original: "鈴木運輸",
		hiragana: "すずきうんゆ"
	},
	{
		original: "日豊運送",
		hiragana: "にっぽううんそう"
	},
	{
		original: "叶運輸",
		hiragana: "かのううんゆ"
	},
	{
		original: "北進運輸",
		hiragana: "ほくしんうんゆ"
	},
	{
		original: "協和運送有限会社",
		hiragana: "きょうわうんそうゆうげんがいしゃ"
	},
	{
		original: "日興運輸",
		hiragana: "にっこううんゆ"
	},
	{
		original: "新和運輸",
		hiragana: "しんわうんゆ"
	},
	{
		original: "横田梱包",
		hiragana: "よこたこんぽう"
	},
	{
		original: "広島相互運輸",
		hiragana: "ひろしまそうごうんゆ"
	},
	{
		original: "アスカ",
		hiragana: "あすか"
	},
	{
		original: "三山運輸",
		hiragana: "みやまうんゆ"
	},
	{
		original: "タキトラフィック",
		hiragana: "たきとらふぃっく"
	},
	{
		original: "Ａーｓｔａｆｆ",
		hiragana: "Ａーｓｔａｆｆ"
	},
	{
		original: "和歌山西部運輸",
		hiragana: "わかやませいぶうんゆ"
	},
	{
		original: "有限会社エムアイ・トランスポートサービス",
		hiragana: "ゆうげんがいしゃえむあい・とらんすぽーとさーびす"
	},
	{
		original: "Ｆ　ＬＩＮＥ",
		hiragana: "Ｆ　ＬＩＮＥ"
	},
	{
		original: "木村運輸",
		hiragana: "きむらうんゆ"
	},
	{
		original: "大陽運送",
		hiragana: "たいよううんそう"
	},
	{
		original: "関西キヤリイサービス",
		hiragana: "かんさいきやりいさーびす"
	},
	{
		original: "小林運送",
		hiragana: "こばやしうんそう"
	},
	{
		original: "清光運輸有限会社",
		hiragana: "きよみつうんゆゆうげんがいしゃ"
	},
	{
		original: "道前運送",
		hiragana: "みちまえうんそう"
	},
	{
		original: "有限会社シンコー運送サービス",
		hiragana: "ゆうげんがいしゃしんこーうんそうさーびす"
	},
	{
		original: "村田急送",
		hiragana: "むらたきゅうそう"
	},
	{
		original: "三栄港運",
		hiragana: "さんえいみなとうん"
	},
	{
		original: "群馬急送",
		hiragana: "ぐんまきゅうそう"
	},
	{
		original: "イワサキ",
		hiragana: "いわさき"
	},
	{
		original: "野﨑クレーン",
		hiragana: "ののくれーん"
	},
	{
		original: "かねゑ運輸",
		hiragana: "かねゑうんゆ"
	},
	{
		original: "スターダストライン",
		hiragana: "すたーだすとらいん"
	},
	{
		original: "久富産業",
		hiragana: "ひさとみさんぎょう"
	},
	{
		original: "輝竜運輸倉庫",
		hiragana: "てるりゅううんゆそうこ"
	},
	{
		original: "高千穂運輸",
		hiragana: "たかちほうんゆ"
	},
	{
		original: "鍛治谷運輸",
		hiragana: "かじたにうんゆ"
	},
	{
		original: "大原運輸",
		hiragana: "おおはらうんゆ"
	},
	{
		original: "新町運輸",
		hiragana: "しんまちうんゆ"
	},
	{
		original: "ＳＣＲＥＥＮロジスティクス",
		hiragana: "ＳＣＲＥＥＮろじすてぃくす"
	},
	{
		original: "広芸運輸",
		hiragana: "こうげいうんゆ"
	},
	{
		original: "光陽ライン",
		hiragana: "こうようらいん"
	},
	{
		original: "静岡近交運輸",
		hiragana: "しずおかきんこううんゆ"
	},
	{
		original: "手島梱包輸送",
		hiragana: "てじまこんぽうゆそう"
	},
	{
		original: "香川運送",
		hiragana: "かがわうんそう"
	},
	{
		original: "タムラ",
		hiragana: "たむら"
	},
	{
		original: "蓮沼商運",
		hiragana: "はすぬましょううん"
	},
	{
		original: "冨岡資材",
		hiragana: "とみおかしざい"
	},
	{
		original: "合同呉運送",
		hiragana: "ごうどうくれうんそう"
	},
	{
		original: "有限会社大創",
		hiragana: "ゆうげんがいしゃだいそう"
	},
	{
		original: "扇物流サービス",
		hiragana: "おうぎぶつりゅうさーびす"
	},
	{
		original: "成和運輸商事",
		hiragana: "しげかずうんゆしょうじ"
	},
	{
		original: "有限会社くぼしょう",
		hiragana: "ゆうげんがいしゃくぼしょう"
	},
	{
		original: "コーナン物流",
		hiragana: "こーなんぶつりゅう"
	},
	{
		original: "ＰＵＲＥ　ＦＲＩＥＮＤ’ｓ",
		hiragana: "ＰＵＲＥ　ＦＲＩＥＮＤ’ｓ"
	},
	{
		original: "有限会社ケイホク運輸",
		hiragana: "ゆうげんがいしゃけいほくうんゆ"
	},
	{
		original: "兵庫中部運輸",
		hiragana: "ひょうごちゅうぶうんゆ"
	},
	{
		original: "仙台陸運",
		hiragana: "せんだいりくうん"
	},
	{
		original: "紀の川運輸",
		hiragana: "きのかわうんゆ"
	},
	{
		original: "丸越運輸倉庫",
		hiragana: "まるこしうんゆそうこ"
	},
	{
		original: "有限会社ティー・ウィステリア",
		hiragana: "ゆうげんがいしゃてぃー・うぃすてりあ"
	},
	{
		original: "ヤマス商店",
		hiragana: "やますしょうてん"
	},
	{
		original: "ＭＫライン",
		hiragana: "ＭＫらいん"
	},
	{
		original: "ダイセー阿波急行",
		hiragana: "だいせーあわきゅうこう"
	},
	{
		original: "北野運輸",
		hiragana: "きたのうんゆ"
	},
	{
		original: "東海梱包",
		hiragana: "とうかいこんぽう"
	},
	{
		original: "廣和運輸",
		hiragana: "ひろかずうんゆ"
	},
	{
		original: "スワロー物流岐阜",
		hiragana: "すわろーぶつりゅうぎふ"
	},
	{
		original: "福間運輸",
		hiragana: "ふくまうんゆ"
	},
	{
		original: "浜昇物流",
		hiragana: "はまのぼるぶつりゅう"
	},
	{
		original: "アータイ",
		hiragana: "あーたい"
	},
	{
		original: "鈴昭運輸",
		hiragana: "すずあきらうんゆ"
	},
	{
		original: "ダイワロジテム",
		hiragana: "だいわろじてむ"
	},
	{
		original: "群馬中央運送",
		hiragana: "ぐんまちゅうおううんそう"
	},
	{
		original: "ケイユウロジスティクス",
		hiragana: "けいゆうろじすてぃくす"
	},
	{
		original: "マルマツ運送",
		hiragana: "まるまつうんそう"
	},
	{
		original: "有限会社長運輸",
		hiragana: "ゆうげんがいしゃちょううんゆ"
	},
	{
		original: "サン・エクス",
		hiragana: "さん・えくす"
	},
	{
		original: "有限会社長洲産業",
		hiragana: "ゆうげんがいしゃちょうしゅうさんぎょう"
	},
	{
		original: "泉州物流サービス",
		hiragana: "せんしゅうぶつりゅうさーびす"
	},
	{
		original: "丸廣運輸",
		hiragana: "まるひろうんゆ"
	},
	{
		original: "岡部興業",
		hiragana: "おかべこうぎょう"
	},
	{
		original: "丸正運送",
		hiragana: "まるしょううんそう"
	},
	{
		original: "寒川運送",
		hiragana: "さむかわうんそう"
	},
	{
		original: "山武運輸",
		hiragana: "さんぶうんゆ"
	},
	{
		original: "永世屋運送",
		hiragana: "えいせいやうんそう"
	},
	{
		original: "コロナ物流",
		hiragana: "ころなぶつりゅう"
	},
	{
		original: "港運輸",
		hiragana: "みなとうんゆ"
	},
	{
		original: "パートナーコーポレーション",
		hiragana: "ぱーとなーこーぽれーしょん"
	},
	{
		original: "古賀物流",
		hiragana: "こがぶつりゅう"
	},
	{
		original: "ミツワ運輸有限会社",
		hiragana: "みつわうんゆゆうげんがいしゃ"
	},
	{
		original: "ビック・ブリッジ",
		hiragana: "びっく・ぶりっじ"
	},
	{
		original: "有限会社美里商事",
		hiragana: "ゆうげんがいしゃみさとしょうじ"
	},
	{
		original: "新聞発送センター",
		hiragana: "しんぶんはっそうせんたー"
	},
	{
		original: "北星運輸",
		hiragana: "ほくせいうんゆ"
	},
	{
		original: "マルシメ",
		hiragana: "まるしめ"
	},
	{
		original: "宇徳通運",
		hiragana: "うとくつううん"
	},
	{
		original: "佐倉急送",
		hiragana: "さくらきゅうそう"
	},
	{
		original: "ＹＫＧ物流",
		hiragana: "ＹＫＧぶつりゅう"
	},
	{
		original: "横浜運送",
		hiragana: "よこはまうんそう"
	},
	{
		original: "九州ネギシ",
		hiragana: "きゅうしゅうねぎし"
	},
	{
		original: "有限会社西野運送",
		hiragana: "ゆうげんがいしゃにしのうんそう"
	},
	{
		original: "有限会社ピーシー・コックセンター",
		hiragana: "ゆうげんがいしゃぴーしー・こっくせんたー"
	},
	{
		original: "南豫通運",
		hiragana: "なんよつううん"
	},
	{
		original: "有限会社ワールド物流",
		hiragana: "ゆうげんがいしゃわーるどぶつりゅう"
	},
	{
		original: "協和陸運",
		hiragana: "きょうわりくうん"
	},
	{
		original: "ウェーブライン",
		hiragana: "うぇーぶらいん"
	},
	{
		original: "ナカムラ運送有限会社",
		hiragana: "なかむらうんそうゆうげんがいしゃ"
	},
	{
		original: "横川貨物",
		hiragana: "よこかわかもつ"
	},
	{
		original: "リサイクル事業団",
		hiragana: "りさいくるじぎょうだん"
	},
	{
		original: "まるや商事",
		hiragana: "まるやしょうじ"
	},
	{
		original: "新和サービス",
		hiragana: "しんわさーびす"
	},
	{
		original: "大栄産業",
		hiragana: "だいえいさんぎょう"
	},
	{
		original: "太平洋運輸",
		hiragana: "たいへいよううんゆ"
	},
	{
		original: "昭和冷蔵",
		hiragana: "しょうわれいぞう"
	},
	{
		original: "トリニティ",
		hiragana: "とりにてぃ"
	},
	{
		original: "加藤運輸",
		hiragana: "かとううんゆ"
	},
	{
		original: "東光",
		hiragana: "とうこう"
	},
	{
		original: "有限会社イングス",
		hiragana: "ゆうげんがいしゃいんぐす"
	},
	{
		original: "三次貨物運送有限会社",
		hiragana: "さんじかもつうんそうゆうげんがいしゃ"
	},
	{
		original: "丸忠運送",
		hiragana: "まるちゅううんそう"
	},
	{
		original: "高麗川通運",
		hiragana: "こまがわつううん"
	},
	{
		original: "上田新聞発送",
		hiragana: "うえだしんぶんはっそう"
	},
	{
		original: "神石共同運送",
		hiragana: "じんせききょうどううんそう"
	},
	{
		original: "日通黒部運輸",
		hiragana: "にっつうくろべうんゆ"
	},
	{
		original: "長沼運送",
		hiragana: "ながぬまうんそう"
	},
	{
		original: "金田運輸",
		hiragana: "かねだうんゆ"
	},
	{
		original: "ムツミ物流",
		hiragana: "むつみぶつりゅう"
	},
	{
		original: "中長運送",
		hiragana: "なかちょううんそう"
	},
	{
		original: "丸エス運送",
		hiragana: "まるえすうんそう"
	},
	{
		original: "小泉運輸信越",
		hiragana: "こいずみうんゆしんえつ"
	},
	{
		original: "北神戸運輸",
		hiragana: "きたこうべうんゆ"
	},
	{
		original: "有限会社ひきち運送",
		hiragana: "ゆうげんがいしゃひきちうんそう"
	},
	{
		original: "日新自動車運送",
		hiragana: "にっしんじどうしゃうんそう"
	},
	{
		original: "田崎運送",
		hiragana: "たざきうんそう"
	},
	{
		original: "有限会社群新物流",
		hiragana: "ゆうげんがいしゃぐんあらものりゅう"
	},
	{
		original: "翼運輸",
		hiragana: "つばさうんゆ"
	},
	{
		original: "エートランス",
		hiragana: "えーとらんす"
	},
	{
		original: "安全運輸",
		hiragana: "あんぜんうんゆ"
	},
	{
		original: "福岡陽晃運輸",
		hiragana: "ふくおかようこううんゆ"
	},
	{
		original: "河北新報輸送",
		hiragana: "かほくしんぽうゆそう"
	},
	{
		original: "有限会社溝口急送",
		hiragana: "ゆうげんがいしゃみぞぐちきゅうそう"
	},
	{
		original: "安倍運輸",
		hiragana: "あべうんゆ"
	},
	{
		original: "ホーメイ",
		hiragana: "ほーめい"
	},
	{
		original: "片桐運輸",
		hiragana: "かたぎりうんゆ"
	},
	{
		original: "関西トランスポート",
		hiragana: "かんさいとらんすぽーと"
	},
	{
		original: "九州物流サービス",
		hiragana: "きゅうしゅうぶつりゅうさーびす"
	},
	{
		original: "高光産業",
		hiragana: "たかみつさんぎょう"
	},
	{
		original: "栄運輸",
		hiragana: "えいうんゆ"
	},
	{
		original: "高木バルブ",
		hiragana: "たかぎばるぶ"
	},
	{
		original: "トータルサポート",
		hiragana: "とーたるさぽーと"
	},
	{
		original: "出版配送",
		hiragana: "しゅっぱんはいそう"
	},
	{
		original: "大和工業",
		hiragana: "やまとこうぎょう"
	},
	{
		original: "大野運輸",
		hiragana: "おおのうんゆ"
	},
	{
		original: "ファイン流通",
		hiragana: "ふぁいんりゅうつう"
	},
	{
		original: "アックス",
		hiragana: "あっくす"
	},
	{
		original: "ロンド",
		hiragana: "ろんど"
	},
	{
		original: "日翔物流",
		hiragana: "にちかぶつりゅう"
	},
	{
		original: "アヤセ物流倉庫",
		hiragana: "あやせぶつりゅうそうこ"
	},
	{
		original: "商都通信",
		hiragana: "しょうとつうしん"
	},
	{
		original: "北越配送",
		hiragana: "ほくえつはいそう"
	},
	{
		original: "芸備運輸",
		hiragana: "げいびうんゆ"
	},
	{
		original: "有限会社山一運送",
		hiragana: "ゆうげんがいしゃやまいちうんそう"
	},
	{
		original: "愛翔商運",
		hiragana: "あいしょうしょううん"
	},
	{
		original: "ジャパンライン",
		hiragana: "じゃぱんらいん"
	},
	{
		original: "ムラシマ",
		hiragana: "むらしま"
	},
	{
		original: "東北エクスプレス",
		hiragana: "とうほくえくすぷれす"
	},
	{
		original: "神石テック",
		hiragana: "じんせきてっく"
	},
	{
		original: "三京運輸",
		hiragana: "さんきょううんゆ"
	},
	{
		original: "大真運輸",
		hiragana: "だいまことうんゆ"
	},
	{
		original: "ＨＩＮＯＤＥ＆ＳＯＮＳ",
		hiragana: "ＨＩＮＯＤＥ＆ＳＯＮＳ"
	},
	{
		original: "ＳＡＮ－ＫＥＩ",
		hiragana: "ＳＡＮ－ＫＥＩ"
	},
	{
		original: "有限会社スリーエス神戸",
		hiragana: "ゆうげんがいしゃすりーえすこうべ"
	},
	{
		original: "槙本運送",
		hiragana: "まきもとうんそう"
	},
	{
		original: "ミツミ",
		hiragana: "みつみ"
	},
	{
		original: "オーケートランスポート",
		hiragana: "おーけーとらんすぽーと"
	},
	{
		original: "マルシンレッカー運輸",
		hiragana: "まるしんれっかーうんゆ"
	},
	{
		original: "有限会社ビリュウアライブ",
		hiragana: "ゆうげんがいしゃびりゅうあらいぶ"
	},
	{
		original: "有限会社トランスポートサービス・ミエノ",
		hiragana: "ゆうげんがいしゃとらんすぽーとさーびす・みえの"
	},
	{
		original: "東洋運輸",
		hiragana: "とうよううんゆ"
	},
	{
		original: "ライフアトラス",
		hiragana: "らいふあとらす"
	},
	{
		original: "船穂運送",
		hiragana: "ふなおうんそう"
	},
	{
		original: "福泉運送有限会社",
		hiragana: "ふくせんうんそうゆうげんがいしゃ"
	},
	{
		original: "オー・エヌ・オー・バンテック",
		hiragana: "おー・えぬ・おー・ばんてっく"
	},
	{
		original: "山岡運輸",
		hiragana: "やまおかうんゆ"
	},
	{
		original: "ニューイースト",
		hiragana: "にゅーいーすと"
	},
	{
		original: "石原運輸",
		hiragana: "いしはらうんゆ"
	},
	{
		original: "ロジスティクス道央",
		hiragana: "ろじすてぃくすどうおう"
	},
	{
		original: "島田トラック運輸",
		hiragana: "しまだとらっくうんゆ"
	},
	{
		original: "ホッコー建設運輸",
		hiragana: "ほっこーけんせつうんゆ"
	},
	{
		original: "新潟共立運輸",
		hiragana: "にいがたきょうりつうんゆ"
	},
	{
		original: "鉢盛運送",
		hiragana: "はちせいうんそう"
	},
	{
		original: "甲府トラック運送",
		hiragana: "こうふとらっくうんそう"
	},
	{
		original: "浜北トランスポート",
		hiragana: "はまきたとらんすぽーと"
	},
	{
		original: "ケイテック",
		hiragana: "けいてっく"
	},
	{
		original: "ツバサエクスプレス",
		hiragana: "つばさえくすぷれす"
	},
	{
		original: "大津紙運輸",
		hiragana: "おおつかみうんゆ"
	},
	{
		original: "東丸運輸",
		hiragana: "ひがしまるうんゆ"
	},
	{
		original: "加勢デリバリーサービス",
		hiragana: "かせいでりばりーさーびす"
	},
	{
		original: "一丸九通商",
		hiragana: "いちがんきゅうつうしょう"
	},
	{
		original: "トップスロジ",
		hiragana: "とっぷすろじ"
	},
	{
		original: "御前崎港運",
		hiragana: "おまえざきみなとうん"
	},
	{
		original: "グランドライン",
		hiragana: "ぐらんどらいん"
	},
	{
		original: "有限会社ハッスイトランスポート",
		hiragana: "ゆうげんがいしゃはっすいとらんすぽーと"
	},
	{
		original: "有限会社福永レッカーサービス",
		hiragana: "ゆうげんがいしゃふくながれっかーさーびす"
	},
	{
		original: "オー・エス・ライン",
		hiragana: "おー・えす・らいん"
	},
	{
		original: "サカモト",
		hiragana: "さかもと"
	},
	{
		original: "新生物流有限会社",
		hiragana: "しんせいぶつりゅうゆうげんがいしゃ"
	},
	{
		original: "日本冠亜物流",
		hiragana: "にっぽんかんあぶつりゅう"
	},
	{
		original: "有限会社小関商事",
		hiragana: "ゆうげんがいしゃおぜきしょうじ"
	},
	{
		original: "有限会社小山運送",
		hiragana: "ゆうげんがいしゃおやまうんそう"
	},
	{
		original: "有限会社前川運送",
		hiragana: "ゆうげんがいしゃまえかわうんそう"
	},
	{
		original: "キング運輸",
		hiragana: "きんぐうんゆ"
	},
	{
		original: "北海道毎日輸送",
		hiragana: "ほっかいどうまいにちゆそう"
	},
	{
		original: "堂島運輸",
		hiragana: "どうしまうんゆ"
	},
	{
		original: "メロス",
		hiragana: "めろす"
	},
	{
		original: "マルミネ田中運輸",
		hiragana: "まるみねたなかうんゆ"
	},
	{
		original: "有限会社亀甲運輸",
		hiragana: "ゆうげんがいしゃきっこううんゆ"
	},
	{
		original: "三信運輸有限会社",
		hiragana: "さんしんうんゆゆうげんがいしゃ"
	},
	{
		original: "マサフミ",
		hiragana: "まさふみ"
	},
	{
		original: "小柳運送",
		hiragana: "おやなぎうんそう"
	},
	{
		original: "丸一物流",
		hiragana: "まるいちぶつりゅう"
	},
	{
		original: "三輪貨物自動車",
		hiragana: "みわかもつじどうしゃ"
	},
	{
		original: "フェニックス",
		hiragana: "ふぇにっくす"
	},
	{
		original: "長岡陸送",
		hiragana: "ながおかりくそう"
	},
	{
		original: "有限会社加納商事",
		hiragana: "ゆうげんがいしゃかのうしょうじ"
	},
	{
		original: "丸富流通",
		hiragana: "まるとみりゅうつう"
	},
	{
		original: "南流勢運輸",
		hiragana: "なんりゅうせいうんゆ"
	},
	{
		original: "ヒロライン",
		hiragana: "ひろらいん"
	},
	{
		original: "壬輸送",
		hiragana: "じんゆそう"
	},
	{
		original: "東都物流",
		hiragana: "とうとぶつりゅう"
	},
	{
		original: "クリーン開発",
		hiragana: "くりーんかいはつ"
	},
	{
		original: "有限会社ハシコー梱包運輸",
		hiragana: "ゆうげんがいしゃはしこーこんぽううんゆ"
	},
	{
		original: "東北急送",
		hiragana: "とうほくきゅうそう"
	},
	{
		original: "ハヤシ",
		hiragana: "はやし"
	},
	{
		original: "有限会社イノウエ運輸",
		hiragana: "ゆうげんがいしゃいのうえうんゆ"
	},
	{
		original: "有限会社宝光運送",
		hiragana: "ゆうげんがいしゃたからひかりうんそう"
	},
	{
		original: "フィフティーワン",
		hiragana: "ふぃふてぃーわん"
	},
	{
		original: "ひなたライン",
		hiragana: "ひなたらいん"
	},
	{
		original: "ワイエイロジスティックス",
		hiragana: "わいえいろじすてぃっくす"
	},
	{
		original: "太平洋エクスプレス",
		hiragana: "たいへいようえくすぷれす"
	},
	{
		original: "日田クレーン工業",
		hiragana: "ひたくれーんこうぎょう"
	},
	{
		original: "アジテーターサービス有限会社",
		hiragana: "あじてーたーさーびすゆうげんがいしゃ"
	},
	{
		original: "タナカ",
		hiragana: "たなか"
	},
	{
		original: "大正貨物",
		hiragana: "たいしょうかもつ"
	},
	{
		original: "有限会社ジャスト",
		hiragana: "ゆうげんがいしゃじゃすと"
	},
	{
		original: "札幌輸送サービス",
		hiragana: "さっぽろゆそうさーびす"
	},
	{
		original: "藤田企業",
		hiragana: "ふじたきぎょう"
	},
	{
		original: "有限会社小松工業企画",
		hiragana: "ゆうげんがいしゃこまつこうぎょうきかく"
	},
	{
		original: "丸中",
		hiragana: "まるなか"
	},
	{
		original: "宮本運輸",
		hiragana: "みやもとうんゆ"
	},
	{
		original: "ハゴロモ",
		hiragana: "はごろも"
	},
	{
		original: "蔵王興業",
		hiragana: "ざおうこうぎょう"
	},
	{
		original: "優真工業",
		hiragana: "ゆうまこうぎょう"
	},
	{
		original: "尾張旭運輸",
		hiragana: "おわりあさひうんゆ"
	},
	{
		original: "森商",
		hiragana: "もりしょう"
	},
	{
		original: "丸善急行",
		hiragana: "まるぜんきゅうこう"
	},
	{
		original: "三星運輸",
		hiragana: "みつぼしうんゆ"
	},
	{
		original: "有限会社原田運送",
		hiragana: "ゆうげんがいしゃはらだうんそう"
	},
	{
		original: "サカエ",
		hiragana: "さかえ"
	},
	{
		original: "ジャパン流通プランニング",
		hiragana: "じゃぱんりゅうつうぷらんにんぐ"
	},
	{
		original: "麻生運送",
		hiragana: "あそううんそう"
	},
	{
		original: "山定物流",
		hiragana: "やまていぶつりゅう"
	},
	{
		original: "住吉運輸",
		hiragana: "すみよしうんゆ"
	},
	{
		original: "有限会社合田運送",
		hiragana: "ゆうげんがいしゃごうだうんそう"
	},
	{
		original: "有限会社前川運送",
		hiragana: "ゆうげんがいしゃまえかわうんそう"
	},
	{
		original: "丸運ロジスティクス西日本",
		hiragana: "まるうんろじすてぃくすにしにほん"
	},
	{
		original: "有限会社松田青果店",
		hiragana: "ゆうげんがいしゃまつだせいかみせ"
	},
	{
		original: "森下商事",
		hiragana: "もりしたしょうじ"
	},
	{
		original: "静北運輸",
		hiragana: "せいきたうんゆ"
	},
	{
		original: "アペック",
		hiragana: "あぺっく"
	},
	{
		original: "アルク",
		hiragana: "あるく"
	},
	{
		original: "富士急送",
		hiragana: "ふじきゅうそう"
	},
	{
		original: "博多井住",
		hiragana: "はかたいじゅう"
	},
	{
		original: "九州錦運輸",
		hiragana: "きゅうしゅうにしきうんゆ"
	},
	{
		original: "カワキタエクスプレス",
		hiragana: "かわきたえくすぷれす"
	},
	{
		original: "有限会社サカエ商事",
		hiragana: "ゆうげんがいしゃさかえしょうじ"
	},
	{
		original: "有限会社日大運輸",
		hiragana: "ゆうげんがいしゃにちだいうんゆ"
	},
	{
		original: "中組",
		hiragana: "なかくみ"
	},
	{
		original: "有限会社昭栄運輸",
		hiragana: "ゆうげんがいしゃしょうえいうんゆ"
	},
	{
		original: "ナカハラ",
		hiragana: "なかはら"
	},
	{
		original: "大一運送",
		hiragana: "ひろかずうんそう"
	},
	{
		original: "カクイ貨物急送有限会社",
		hiragana: "かくいかもつきゅうそうゆうげんがいしゃ"
	},
	{
		original: "有限会社後藤運送",
		hiragana: "ゆうげんがいしゃごとううんそう"
	},
	{
		original: "有限会社瀬戸内急便",
		hiragana: "ゆうげんがいしゃせとうちきゅうびん"
	},
	{
		original: "島村運輸倉庫",
		hiragana: "しまむらうんゆそうこ"
	},
	{
		original: "只見郵便運送有限会社",
		hiragana: "ただみゆうびんうんそうゆうげんがいしゃ"
	},
	{
		original: "丸伊運輸",
		hiragana: "まるいうんゆ"
	},
	{
		original: "サラブエクスプレス",
		hiragana: "さらぶえくすぷれす"
	},
	{
		original: "三谷運輸",
		hiragana: "みたにうんゆ"
	},
	{
		original: "野村運送",
		hiragana: "のむらうんそう"
	},
	{
		original: "エス・ビー・エス物流",
		hiragana: "えす・びー・えすぶつりゅう"
	},
	{
		original: "有限会社大川運輸",
		hiragana: "ゆうげんがいしゃおおかわうんゆ"
	},
	{
		original: "にしき運送",
		hiragana: "にしきうんそう"
	},
	{
		original: "大富運輸",
		hiragana: "たいふうんゆ"
	},
	{
		original: "利根西部運送",
		hiragana: "とねせいぶうんそう"
	},
	{
		original: "シーディーエス神奈川",
		hiragana: "しーでぃーえすかながわ"
	},
	{
		original: "Ｑｕｅｓｔ",
		hiragana: "Ｑｕｅｓｔ"
	},
	{
		original: "板橋運送",
		hiragana: "いたばしうんそう"
	},
	{
		original: "東京丸善運輸",
		hiragana: "とうきょうまるぜんうんゆ"
	},
	{
		original: "宝運送",
		hiragana: "たからうんそう"
	},
	{
		original: "永山運輸",
		hiragana: "ながやまうんゆ"
	},
	{
		original: "有限会社炭谷運送",
		hiragana: "ゆうげんがいしゃすみたにうんそう"
	},
	{
		original: "大平興業舎",
		hiragana: "おおひらこうぎょうしゃ"
	},
	{
		original: "サンヨーエキスプレス",
		hiragana: "さんよーえきすぷれす"
	},
	{
		original: "安治川ライン",
		hiragana: "あじがわらいん"
	},
	{
		original: "栄信興運",
		hiragana: "えいしんきょううん"
	},
	{
		original: "有限会社サトウ商事",
		hiragana: "ゆうげんがいしゃさとうしょうじ"
	},
	{
		original: "有限会社神誠商事",
		hiragana: "ゆうげんがいしゃかみまことしょうじ"
	},
	{
		original: "汐留運送",
		hiragana: "しおどめうんそう"
	},
	{
		original: "ダイショーライン",
		hiragana: "だいしょーらいん"
	},
	{
		original: "高橋水産運輸",
		hiragana: "たかはしすいさんうんゆ"
	},
	{
		original: "仙台トーウン",
		hiragana: "せんだいとーうん"
	},
	{
		original: "名古屋隔離板製作所",
		hiragana: "なごやかくりいたせいさくしょ"
	},
	{
		original: "伊那陸送",
		hiragana: "いなりくそう"
	},
	{
		original: "東洋運輸",
		hiragana: "とうよううんゆ"
	},
	{
		original: "菊池輸送",
		hiragana: "きくちゆそう"
	},
	{
		original: "アルプスエムライン",
		hiragana: "あるぷすえむらいん"
	},
	{
		original: "トスドライブシステム",
		hiragana: "とすどらいぶしすてむ"
	},
	{
		original: "四国兵紙運輸",
		hiragana: "しこくへいかみうんゆ"
	},
	{
		original: "エス・ワールド",
		hiragana: "えす・わーるど"
	},
	{
		original: "羽島エキスプレス",
		hiragana: "はねしまえきすぷれす"
	},
	{
		original: "アイロジ",
		hiragana: "あいろじ"
	},
	{
		original: "小城倉庫",
		hiragana: "おぎそうこ"
	},
	{
		original: "ウサ美物流",
		hiragana: "うさびぶつりゅう"
	},
	{
		original: "彦根倉庫",
		hiragana: "ひこねそうこ"
	},
	{
		original: "太平商会",
		hiragana: "たいへいしょうかい"
	},
	{
		original: "川元運送有限会社",
		hiragana: "かわもとうんそうゆうげんがいしゃ"
	},
	{
		original: "ソリタ運輸",
		hiragana: "そりたうんゆ"
	},
	{
		original: "依里運輸",
		hiragana: "よりうんゆ"
	},
	{
		original: "王将運輸",
		hiragana: "おうしょううんゆ"
	},
	{
		original: "丸和",
		hiragana: "まるわ"
	},
	{
		original: "エフライン",
		hiragana: "えふらいん"
	},
	{
		original: "京葉グループ",
		hiragana: "けいようぐるーぷ"
	},
	{
		original: "サンネット",
		hiragana: "さんねっと"
	},
	{
		original: "ユーカリ物流",
		hiragana: "ゆーかりぶつりゅう"
	},
	{
		original: "ナカモト",
		hiragana: "なかもと"
	},
	{
		original: "愛東物流",
		hiragana: "あいとうぶつりゅう"
	},
	{
		original: "有限会社高橋運輸",
		hiragana: "ゆうげんがいしゃたかはしうんゆ"
	},
	{
		original: "エイエムコーポレーション",
		hiragana: "えいえむこーぽれーしょん"
	},
	{
		original: "有限会社ミタカ",
		hiragana: "ゆうげんがいしゃみたか"
	},
	{
		original: "小川運送",
		hiragana: "おがわうんそう"
	},
	{
		original: "有限会社竹井商事",
		hiragana: "ゆうげんがいしゃたけいしょうじ"
	},
	{
		original: "辻本運輸",
		hiragana: "つじもとうんゆ"
	},
	{
		original: "有限会社佐土原運送",
		hiragana: "ゆうげんがいしゃさどわらうんそう"
	},
	{
		original: "ＦＩＲＳＴ・ＬＩＮＥ",
		hiragana: "ＦＩＲＳＴ・ＬＩＮＥ"
	},
	{
		original: "望月工業",
		hiragana: "もちづきこうぎょう"
	},
	{
		original: "川友",
		hiragana: "かわとも"
	},
	{
		original: "西浦貨物運送",
		hiragana: "にしうらかもつうんそう"
	},
	{
		original: "丸大青果",
		hiragana: "まるだいせいか"
	},
	{
		original: "成商運輸有限会社",
		hiragana: "せいしょううんゆゆうげんがいしゃ"
	},
	{
		original: "三共陸上輸送",
		hiragana: "さんきょうりくじょうゆそう"
	},
	{
		original: "船村興産倉庫",
		hiragana: "ふなむらこうさんそうこ"
	},
	{
		original: "オーエム運送",
		hiragana: "おーえむうんそう"
	},
	{
		original: "ハロー運輸",
		hiragana: "はろーうんゆ"
	},
	{
		original: "福野運送",
		hiragana: "ふくのうんそう"
	},
	{
		original: "有村運送",
		hiragana: "ありむらうんそう"
	},
	{
		original: "白河通運",
		hiragana: "しらかわつううん"
	},
	{
		original: "湖東物流",
		hiragana: "ことうぶつりゅう"
	},
	{
		original: "有限会社中本鐵工所",
		hiragana: "ゆうげんがいしゃなかもとてっこうしょ"
	},
	{
		original: "中村運送",
		hiragana: "なかむらうんそう"
	},
	{
		original: "ネットワークサービス",
		hiragana: "ねっとわーくさーびす"
	},
	{
		original: "山梨牛乳運送",
		hiragana: "やまなしぎゅうにゅううんそう"
	},
	{
		original: "トランサット",
		hiragana: "とらんさっと"
	},
	{
		original: "一関配送",
		hiragana: "いちのせきはいそう"
	},
	{
		original: "エイ・エス・エクスプレス",
		hiragana: "えい・えす・えくすぷれす"
	},
	{
		original: "Ｓファミリー",
		hiragana: "Ｓふぁみりー"
	},
	{
		original: "酒由運送",
		hiragana: "さけゆうんそう"
	},
	{
		original: "上小運輸",
		hiragana: "うえしょううんゆ"
	},
	{
		original: "有限会社折爪運送",
		hiragana: "ゆうげんがいしゃおりつめうんそう"
	},
	{
		original: "有限会社埼北陸自",
		hiragana: "ゆうげんがいしゃさきほくりくじ"
	},
	{
		original: "ジェットライン・ワールド",
		hiragana: "じぇっとらいん・わーるど"
	},
	{
		original: "狩野運送",
		hiragana: "かのうんそう"
	},
	{
		original: "日本エコロジック",
		hiragana: "にっぽんえころじっく"
	},
	{
		original: "大栄海運",
		hiragana: "だいえいかいうん"
	},
	{
		original: "第一青果",
		hiragana: "だいいちせいか"
	},
	{
		original: "サワ・コーポレーション",
		hiragana: "さわ・こーぽれーしょん"
	},
	{
		original: "マスコー運輸有限会社",
		hiragana: "ますこーうんゆゆうげんがいしゃ"
	},
	{
		original: "中央運輸倉庫有限会社",
		hiragana: "ちゅうおううんゆそうこゆうげんがいしゃ"
	},
	{
		original: "ケイエム運輸有限会社",
		hiragana: "けいえむうんゆゆうげんがいしゃ"
	},
	{
		original: "マルジョウ",
		hiragana: "まるじょう"
	},
	{
		original: "有限会社新開貨物",
		hiragana: "ゆうげんがいしゃしんかいかもつ"
	},
	{
		original: "加藤運送",
		hiragana: "かとううんそう"
	},
	{
		original: "アイシー物流",
		hiragana: "あいしーぶつりゅう"
	},
	{
		original: "キャリー",
		hiragana: "きゃりー"
	},
	{
		original: "清栄物流",
		hiragana: "せいえいぶつりゅう"
	},
	{
		original: "ＩＫトランス有限会社",
		hiragana: "ＩＫとらんすゆうげんがいしゃ"
	},
	{
		original: "安佐物流",
		hiragana: "あさぶつりゅう"
	},
	{
		original: "滋賀貨物運輸",
		hiragana: "しがかもつうんゆ"
	},
	{
		original: "下館陸運",
		hiragana: "しもだてりくうん"
	},
	{
		original: "ニッケル．エンド．ライオンス",
		hiragana: "にっける．えんど．らいおんす"
	},
	{
		original: "有限会社五日市青果",
		hiragana: "ゆうげんがいしゃいつかいちせいか"
	},
	{
		original: "タマックス",
		hiragana: "たまっくす"
	},
	{
		original: "河本",
		hiragana: "かわもと"
	},
	{
		original: "新和運輸",
		hiragana: "しんわうんゆ"
	},
	{
		original: "北総通運",
		hiragana: "ほくそうつううん"
	},
	{
		original: "富田林運送",
		hiragana: "とんだばやしうんそう"
	},
	{
		original: "丸石運輸有限会社",
		hiragana: "まるいしうんゆゆうげんがいしゃ"
	},
	{
		original: "富士見鉄工",
		hiragana: "ふじみてっこう"
	},
	{
		original: "ＩＴ企画物流",
		hiragana: "ＩＴきかくぶつりゅう"
	},
	{
		original: "有限会社キットエクスプレス",
		hiragana: "ゆうげんがいしゃきっとえくすぷれす"
	},
	{
		original: "山伝運送",
		hiragana: "やまでんうんそう"
	},
	{
		original: "野村運送有限会社",
		hiragana: "のむらうんそうゆうげんがいしゃ"
	},
	{
		original: "サンコープログレス",
		hiragana: "さんこーぷろぐれす"
	},
	{
		original: "アツアイロジシステムズ",
		hiragana: "あつあいろじしすてむず"
	},
	{
		original: "第一物流",
		hiragana: "だいいちぶつりゅう"
	},
	{
		original: "日新",
		hiragana: "にっしん"
	},
	{
		original: "エスペラント",
		hiragana: "えすぺらんと"
	},
	{
		original: "山本運送",
		hiragana: "やまもとうんそう"
	},
	{
		original: "興和運輸",
		hiragana: "こうわうんゆ"
	},
	{
		original: "林商運",
		hiragana: "はやししょううん"
	},
	{
		original: "東名急送",
		hiragana: "とうめいきゅうそう"
	},
	{
		original: "アイマックス",
		hiragana: "あいまっくす"
	},
	{
		original: "有限会社朝倉共同運輸",
		hiragana: "ゆうげんがいしゃあさくらきょうどううんゆ"
	},
	{
		original: "新光運送",
		hiragana: "しんこううんそう"
	},
	{
		original: "飯島運輸物流",
		hiragana: "いいじまうんゆぶつりゅう"
	},
	{
		original: "石巻みなと商運",
		hiragana: "いしのまきみなとしょううん"
	},
	{
		original: "豊運輸",
		hiragana: "ゆたかうんゆ"
	},
	{
		original: "ユタカ産業運輸",
		hiragana: "ゆたかさんぎょううんゆ"
	},
	{
		original: "ドリーム・エクスプレス",
		hiragana: "どりーむ・えくすぷれす"
	},
	{
		original: "新和ロジテム",
		hiragana: "しんわろじてむ"
	},
	{
		original: "公平商事",
		hiragana: "こうへいしょうじ"
	},
	{
		original: "高山梱包",
		hiragana: "こうざんこんぽう"
	},
	{
		original: "鷲宮運輸",
		hiragana: "わしみやうんゆ"
	},
	{
		original: "太章興産",
		hiragana: "たしょうこうさん"
	},
	{
		original: "大浜運輸",
		hiragana: "おおはまうんゆ"
	},
	{
		original: "新生運輸",
		hiragana: "しんせいうんゆ"
	},
	{
		original: "松潮物流",
		hiragana: "まつしおぶつりゅう"
	},
	{
		original: "小倉運輸",
		hiragana: "おぐらうんゆ"
	},
	{
		original: "栄光物流有限会社",
		hiragana: "えいこうぶつりゅうゆうげんがいしゃ"
	},
	{
		original: "神戸運送自動車",
		hiragana: "こうべうんそうじどうしゃ"
	},
	{
		original: "総合トラック",
		hiragana: "そうごうとらっく"
	},
	{
		original: "三興陸運",
		hiragana: "さんこうりくうん"
	},
	{
		original: "有限会社松栄商事",
		hiragana: "ゆうげんがいしゃしょうえいしょうじ"
	},
	{
		original: "神谷運送",
		hiragana: "かみやうんそう"
	},
	{
		original: "インフィールド",
		hiragana: "いんふぃーるど"
	},
	{
		original: "キューブコーポレーション",
		hiragana: "きゅーぶこーぽれーしょん"
	},
	{
		original: "神奈川エルシー",
		hiragana: "かながわえるしー"
	},
	{
		original: "横清運輸有限会社",
		hiragana: "よこきよしうんゆゆうげんがいしゃ"
	},
	{
		original: "エヌピー運輸富士",
		hiragana: "えぬぴーうんゆふじ"
	},
	{
		original: "海成工業",
		hiragana: "かいせいこうぎょう"
	},
	{
		original: "山鈴運輸",
		hiragana: "やますずうんゆ"
	},
	{
		original: "高山運輸",
		hiragana: "こうざんうんゆ"
	},
	{
		original: "ファンタジスタプロダクション",
		hiragana: "ふぁんたじすたぷろだくしょん"
	},
	{
		original: "櫻井運輸",
		hiragana: "さくらいうんゆ"
	},
	{
		original: "有限会社アクティヴ",
		hiragana: "ゆうげんがいしゃあくてぃゔ"
	},
	{
		original: "都々城運送",
		hiragana: "みやこ々しろうんそう"
	},
	{
		original: "丸勝渡辺運輸",
		hiragana: "まるかちわたなべうんゆ"
	},
	{
		original: "有限会社高橋運送店",
		hiragana: "ゆうげんがいしゃたかはしうんそうてん"
	},
	{
		original: "和幸",
		hiragana: "かずゆき"
	},
	{
		original: "岩手特殊",
		hiragana: "いわてとくしゅ"
	},
	{
		original: "坂本",
		hiragana: "さかもと"
	},
	{
		original: "セントラルサービス",
		hiragana: "せんとらるさーびす"
	},
	{
		original: "安佐運送",
		hiragana: "あさうんそう"
	},
	{
		original: "有限会社菊池商運",
		hiragana: "ゆうげんがいしゃきくちしょううん"
	},
	{
		original: "有限会社奥村運送",
		hiragana: "ゆうげんがいしゃおくむらうんそう"
	},
	{
		original: "木村",
		hiragana: "きむら"
	},
	{
		original: "川北運輸",
		hiragana: "かわきたうんゆ"
	},
	{
		original: "アサヒロジスティックス",
		hiragana: "あさひろじすてぃっくす"
	},
	{
		original: "秋山商運",
		hiragana: "あきやましょううん"
	},
	{
		original: "桜南運輸有限会社",
		hiragana: "さくらみなみうんゆゆうげんがいしゃ"
	},
	{
		original: "関西運送",
		hiragana: "かんさいうんそう"
	},
	{
		original: "有限会社西富運送",
		hiragana: "ゆうげんがいしゃにしとみうんそう"
	},
	{
		original: "新潟日和",
		hiragana: "にいがたひより"
	},
	{
		original: "ミツミ",
		hiragana: "みつみ"
	},
	{
		original: "有限会社宇堅総合開発",
		hiragana: "ゆうげんがいしゃうけんそうごうかいはつ"
	},
	{
		original: "亀岡配送センター",
		hiragana: "かめおかはいそうせんたー"
	},
	{
		original: "貝塚物流",
		hiragana: "かいづかぶつりゅう"
	},
	{
		original: "有限会社東北産業",
		hiragana: "ゆうげんがいしゃとうほくさんぎょう"
	},
	{
		original: "オーシーシー",
		hiragana: "おーしーしー"
	},
	{
		original: "今野運輸",
		hiragana: "こんのうんゆ"
	},
	{
		original: "永井運輸",
		hiragana: "ながいうんゆ"
	},
	{
		original: "中部運送有限会社",
		hiragana: "ちゅうぶうんそうゆうげんがいしゃ"
	},
	{
		original: "アスカ運輸",
		hiragana: "あすかうんゆ"
	},
	{
		original: "ランドポート",
		hiragana: "らんどぽーと"
	},
	{
		original: "ＧＯＤＡＩ",
		hiragana: "ＧＯＤＡＩ"
	},
	{
		original: "関東重機運送有限会社",
		hiragana: "かんとうじゅうきうんそうゆうげんがいしゃ"
	},
	{
		original: "殖産運輸",
		hiragana: "しょくさんうんゆ"
	},
	{
		original: "大丸運送",
		hiragana: "だいまるうんそう"
	},
	{
		original: "末広物流サービス",
		hiragana: "すえひろぶつりゅうさーびす"
	},
	{
		original: "有限会社あづま運輸",
		hiragana: "ゆうげんがいしゃあづまうんゆ"
	},
	{
		original: "ベイライン",
		hiragana: "べいらいん"
	},
	{
		original: "折笠",
		hiragana: "おりかさ"
	},
	{
		original: "神谷運送",
		hiragana: "かみやうんそう"
	},
	{
		original: "トーコー",
		hiragana: "とーこー"
	},
	{
		original: "三友運送",
		hiragana: "みつともうんそう"
	},
	{
		original: "有限会社木島運輸",
		hiragana: "ゆうげんがいしゃきじまうんゆ"
	},
	{
		original: "沼津協栄運輸有限会社",
		hiragana: "ぬまづきょうえいうんゆゆうげんがいしゃ"
	},
	{
		original: "大阪内外液輸",
		hiragana: "おおさかないがいえきゆ"
	},
	{
		original: "岩上運輸",
		hiragana: "いわかみうんゆ"
	},
	{
		original: "常磐運輸",
		hiragana: "じょうばんうんゆ"
	},
	{
		original: "泉屋急配",
		hiragana: "せんおくきゅうはい"
	},
	{
		original: "鹿児島通運",
		hiragana: "かこしまつううん"
	},
	{
		original: "センターユース",
		hiragana: "せんたーゆーす"
	},
	{
		original: "伊勢湾陸運",
		hiragana: "いせわんりくうん"
	},
	{
		original: "和田貿易運送",
		hiragana: "わだぼうえきうんそう"
	},
	{
		original: "ピースカンパニー",
		hiragana: "ぴーすかんぱにー"
	},
	{
		original: "有限会社大厚運輸",
		hiragana: "ゆうげんがいしゃだいあつしうんゆ"
	},
	{
		original: "戸田倉庫",
		hiragana: "とだそうこ"
	},
	{
		original: "一関糧運",
		hiragana: "いちのせきかてうん"
	},
	{
		original: "有限会社平伸運輸",
		hiragana: "ゆうげんがいしゃたいらしんうんゆ"
	},
	{
		original: "ミドリ運輸",
		hiragana: "みどりうんゆ"
	},
	{
		original: "倉庫サービス",
		hiragana: "そうこさーびす"
	},
	{
		original: "蛭間運送",
		hiragana: "ひるかんうんそう"
	},
	{
		original: "エヌティロジスティクス",
		hiragana: "えぬてぃろじすてぃくす"
	},
	{
		original: "有限会社群馬物流企画",
		hiragana: "ゆうげんがいしゃぐんまぶつりゅうきかく"
	},
	{
		original: "日翔通商",
		hiragana: "にちかつうしょう"
	},
	{
		original: "和光運輸",
		hiragana: "わこううんゆ"
	},
	{
		original: "有限会社一力運輸",
		hiragana: "ゆうげんがいしゃいちりきうんゆ"
	},
	{
		original: "朝日フロンティア",
		hiragana: "あさひふろんてぃあ"
	},
	{
		original: "丸五急送",
		hiragana: "まるごきゅうそう"
	},
	{
		original: "有限会社県北プラスチック運送",
		hiragana: "ゆうげんがいしゃけんぽくぷらすちっくうんそう"
	},
	{
		original: "イエローサービス",
		hiragana: "いえろーさーびす"
	},
	{
		original: "九州小田運輸",
		hiragana: "きゅうしゅうおだうんゆ"
	},
	{
		original: "有限会社井上産業運輸",
		hiragana: "ゆうげんがいしゃいのうえさんぎょううんゆ"
	},
	{
		original: "さくらカーゴサービス",
		hiragana: "さくらかーごさーびす"
	},
	{
		original: "山口碓永自動車",
		hiragana: "やまぐちうすえいじどうしゃ"
	},
	{
		original: "ノジマ",
		hiragana: "のじま"
	},
	{
		original: "岡山中央陸運倉庫",
		hiragana: "おかやまちゅうおうりくうんそうこ"
	},
	{
		original: "徳山トラック",
		hiragana: "とくやまとらっく"
	},
	{
		original: "泉エキスプレス",
		hiragana: "いずみえきすぷれす"
	},
	{
		original: "スワロートラフィック",
		hiragana: "すわろーとらふぃっく"
	},
	{
		original: "有限会社昭和運輸",
		hiragana: "ゆうげんがいしゃしょうわうんゆ"
	},
	{
		original: "県北物流",
		hiragana: "けんぽくぶつりゅう"
	},
	{
		original: "弘南運輸",
		hiragana: "ひろしみなみうんゆ"
	},
	{
		original: "長栄物流",
		hiragana: "ちょうえいぶつりゅう"
	},
	{
		original: "中央陸運",
		hiragana: "ちゅうおうりくうん"
	},
	{
		original: "東西運送",
		hiragana: "とうざいうんそう"
	},
	{
		original: "木﨑運送",
		hiragana: "ききうんそう"
	},
	{
		original: "鹿児島物流",
		hiragana: "かこしまぶつりゅう"
	},
	{
		original: "ＴＨＳ仙台",
		hiragana: "ＴＨＳせんだい"
	},
	{
		original: "山加",
		hiragana: "やまか"
	},
	{
		original: "大丸運輸",
		hiragana: "だいまるうんゆ"
	},
	{
		original: "東海運輸有限会社",
		hiragana: "とうかいうんゆゆうげんがいしゃ"
	},
	{
		original: "有限会社ヨシトミ",
		hiragana: "ゆうげんがいしゃよしとみ"
	},
	{
		original: "ティーエスロジテック有限会社",
		hiragana: "てぃーえすろじてっくゆうげんがいしゃ"
	},
	{
		original: "有限会社北海道商事",
		hiragana: "ゆうげんがいしゃほっかいどうしょうじ"
	},
	{
		original: "オックスライン",
		hiragana: "おっくすらいん"
	},
	{
		original: "水野興業",
		hiragana: "みずのこうぎょう"
	},
	{
		original: "マルシン商事",
		hiragana: "まるしんしょうじ"
	},
	{
		original: "有限会社エスライン",
		hiragana: "ゆうげんがいしゃえすらいん"
	},
	{
		original: "中部通商",
		hiragana: "ちゅうぶつうしょう"
	},
	{
		original: "神澤通商",
		hiragana: "かみさわつうしょう"
	},
	{
		original: "西濃急送",
		hiragana: "せいのうきゅうそう"
	},
	{
		original: "星葉ロジテック",
		hiragana: "ほしはろじてっく"
	},
	{
		original: "フードシステム金澤",
		hiragana: "ふーどしすてむかなざわ"
	},
	{
		original: "高松臨港倉庫",
		hiragana: "たかまつりんこうそうこ"
	},
	{
		original: "ハンディーズ",
		hiragana: "はんでぃーず"
	},
	{
		original: "センレイ",
		hiragana: "せんれい"
	},
	{
		original: "浜松急送",
		hiragana: "はままつきゅうそう"
	},
	{
		original: "タカシ運輸",
		hiragana: "たかしうんゆ"
	},
	{
		original: "有限会社藤運輸",
		hiragana: "ゆうげんがいしゃふじうんゆ"
	},
	{
		original: "押田運送有限会社",
		hiragana: "おしだうんそうゆうげんがいしゃ"
	},
	{
		original: "有限会社西部運輸",
		hiragana: "ゆうげんがいしゃせいぶうんゆ"
	},
	{
		original: "東海ケミカル",
		hiragana: "とうかいけみかる"
	},
	{
		original: "共同運輸",
		hiragana: "きょうどううんゆ"
	},
	{
		original: "東北菱倉運輸",
		hiragana: "とうほくひしくらうんゆ"
	},
	{
		original: "毎日新聞西部アシスト",
		hiragana: "まいにちしんぶんせいぶあしすと"
	},
	{
		original: "三州一色",
		hiragana: "さんしゅういっしょく"
	},
	{
		original: "東洋容器",
		hiragana: "とうようようき"
	},
	{
		original: "エヌティシィー",
		hiragana: "えぬてぃしぃー"
	},
	{
		original: "ミヨシトータルサービス",
		hiragana: "みよしとーたるさーびす"
	},
	{
		original: "山梨広告運送",
		hiragana: "やまなしこうこくうんそう"
	},
	{
		original: "有限会社ロジスティックス信州",
		hiragana: "ゆうげんがいしゃろじすてぃっくすしんしゅう"
	},
	{
		original: "双蹊",
		hiragana: "そうけい"
	},
	{
		original: "新雪運輸",
		hiragana: "しんせつうんゆ"
	},
	{
		original: "荒木運送",
		hiragana: "あらきうんそう"
	},
	{
		original: "ヤマサン運輸",
		hiragana: "やまさんうんゆ"
	},
	{
		original: "上野運送",
		hiragana: "うえのうんそう"
	},
	{
		original: "山博運送",
		hiragana: "やまひろしうんそう"
	},
	{
		original: "明和運輸",
		hiragana: "めいわうんゆ"
	},
	{
		original: "武田梱包運輸",
		hiragana: "たけだこんぽううんゆ"
	},
	{
		original: "会津本郷貨物運送",
		hiragana: "あいづほんごうかもつうんそう"
	},
	{
		original: "ケイ・エル・エス",
		hiragana: "けい・える・えす"
	},
	{
		original: "ラインサービス有限会社",
		hiragana: "らいんさーびすゆうげんがいしゃ"
	},
	{
		original: "デイリーネットワーク",
		hiragana: "でいりーねっとわーく"
	},
	{
		original: "トヤマ重搬",
		hiragana: "とやまじゅうはん"
	},
	{
		original: "福山運送",
		hiragana: "ふくやまうんそう"
	},
	{
		original: "協立運輸倉庫",
		hiragana: "きょうりつうんゆそうこ"
	},
	{
		original: "有限会社大村運輸",
		hiragana: "ゆうげんがいしゃおおむらうんゆ"
	},
	{
		original: "東日輸送",
		hiragana: "とうにちゆそう"
	},
	{
		original: "高邦運輸",
		hiragana: "たかくにうんゆ"
	},
	{
		original: "進両運送",
		hiragana: "すすむりょううんそう"
	},
	{
		original: "長洲通商",
		hiragana: "ちょうしゅうつうしょう"
	},
	{
		original: "中野運送",
		hiragana: "なかのうんそう"
	},
	{
		original: "山晃運輸",
		hiragana: "やまこううんゆ"
	},
	{
		original: "栄和運輸",
		hiragana: "えいわうんゆ"
	},
	{
		original: "アイ・シー・カーゴサービス",
		hiragana: "あい・しー・かーごさーびす"
	},
	{
		original: "有限会社キヌケン",
		hiragana: "ゆうげんがいしゃきぬけん"
	},
	{
		original: "プレジャー",
		hiragana: "ぷれじゃー"
	},
	{
		original: "恵那実業運輸倉庫",
		hiragana: "えなじつぎょううんゆそうこ"
	},
	{
		original: "コーヨー急送",
		hiragana: "こーよーきゅうそう"
	},
	{
		original: "北栄運輸",
		hiragana: "ほくえいうんゆ"
	},
	{
		original: "日鹸運輸有限会社",
		hiragana: "にちけんうんゆゆうげんがいしゃ"
	},
	{
		original: "有限会社切目運送",
		hiragana: "ゆうげんがいしゃきりめうんそう"
	},
	{
		original: "四建運輸商事",
		hiragana: "しけんうんゆしょうじ"
	},
	{
		original: "梅田運輸",
		hiragana: "うめだうんゆ"
	},
	{
		original: "ナガサキロジスティクス",
		hiragana: "ながさきろじすてぃくす"
	},
	{
		original: "ＹＯＵＳＡＫＡ",
		hiragana: "ＹＯＵＳＡＫＡ"
	},
	{
		original: "ＷＯＲＫＳ",
		hiragana: "ＷＯＲＫＳ"
	},
	{
		original: "ライト建設",
		hiragana: "らいとけんせつ"
	},
	{
		original: "高橋梱包運輸",
		hiragana: "たかはしこんぽううんゆ"
	},
	{
		original: "有限会社アクティブラン",
		hiragana: "ゆうげんがいしゃあくてぃぶらん"
	},
	{
		original: "河野運送",
		hiragana: "こうのうんそう"
	},
	{
		original: "ＳＵＺＵＷＡ",
		hiragana: "ＳＵＺＵＷＡ"
	},
	{
		original: "有限会社青木運送",
		hiragana: "ゆうげんがいしゃあおきうんそう"
	},
	{
		original: "いずみ重機",
		hiragana: "いずみじゅうき"
	},
	{
		original: "佐呂間トラック",
		hiragana: "さろまとらっく"
	},
	{
		original: "有限会社常呂トラック",
		hiragana: "ゆうげんがいしゃところとらっく"
	},
	{
		original: "スガヤトランス",
		hiragana: "すがやとらんす"
	},
	{
		original: "手野運送",
		hiragana: "てのうんそう"
	},
	{
		original: "アドバンス・アゲイン",
		hiragana: "あどばんす・あげいん"
	},
	{
		original: "有限会社石井商事",
		hiragana: "ゆうげんがいしゃいしいしょうじ"
	},
	{
		original: "関口運輸",
		hiragana: "せきぐちうんゆ"
	},
	{
		original: "京葉エクスプレス",
		hiragana: "けいようえくすぷれす"
	},
	{
		original: "大和急配",
		hiragana: "やまときゅうはい"
	},
	{
		original: "日興運輸",
		hiragana: "にっこううんゆ"
	},
	{
		original: "佐々木商運有限会社",
		hiragana: "ささきしょううんゆうげんがいしゃ"
	},
	{
		original: "ニッケ物流",
		hiragana: "にっけぶつりゅう"
	},
	{
		original: "エム・ティ・エス有限会社",
		hiragana: "えむ・てぃ・えすゆうげんがいしゃ"
	},
	{
		original: "京都物流運輸",
		hiragana: "きょうとぶつりゅううんゆ"
	},
	{
		original: "加美貨物自動車運送有限会社",
		hiragana: "かみかもつじどうしゃうんそうゆうげんがいしゃ"
	},
	{
		original: "鶴見急配",
		hiragana: "つるみきゅうはい"
	},
	{
		original: "益田陸運",
		hiragana: "ますだりくうん"
	},
	{
		original: "幸西",
		hiragana: "さちにし"
	},
	{
		original: "花田運送",
		hiragana: "はなだうんそう"
	},
	{
		original: "日建リース",
		hiragana: "にっけんりーす"
	},
	{
		original: "有限会社小川運送",
		hiragana: "ゆうげんがいしゃおがわうんそう"
	},
	{
		original: "信和運輸倉庫",
		hiragana: "のぶかずうんゆそうこ"
	},
	{
		original: "重安運送",
		hiragana: "しげやすうんそう"
	},
	{
		original: "長栄運送店",
		hiragana: "ちょうえいうんそうてん"
	},
	{
		original: "ＫＢＭ",
		hiragana: "ＫＢＭ"
	},
	{
		original: "有限会社ＦＫ物流サービス",
		hiragana: "ゆうげんがいしゃＦＫぶつりゅうさーびす"
	},
	{
		original: "吉成運送店",
		hiragana: "よしなりうんそうてん"
	},
	{
		original: "要運輸",
		hiragana: "よううんゆ"
	},
	{
		original: "光運送",
		hiragana: "ひかりうんそう"
	},
	{
		original: "大日産業",
		hiragana: "だいにちさんぎょう"
	},
	{
		original: "有限会社富士ライン",
		hiragana: "ゆうげんがいしゃふじらいん"
	},
	{
		original: "フジ流通",
		hiragana: "ふじりゅうつう"
	},
	{
		original: "ムラタ",
		hiragana: "むらた"
	},
	{
		original: "コウノイケ・シッピング",
		hiragana: "こうのいけ・しっぴんぐ"
	},
	{
		original: "北海道エネルギー輸送",
		hiragana: "ほっかいどうえねるぎーゆそう"
	},
	{
		original: "九州配送センター",
		hiragana: "きゅうしゅうはいそうせんたー"
	},
	{
		original: "仲井通商",
		hiragana: "なかいつうしょう"
	},
	{
		original: "エバサービス",
		hiragana: "えばさーびす"
	},
	{
		original: "鶴総運",
		hiragana: "つるそううん"
	},
	{
		original: "高見商運",
		hiragana: "たかみしょううん"
	},
	{
		original: "大興運輸倉庫",
		hiragana: "たいこううんゆそうこ"
	},
	{
		original: "中讃通運",
		hiragana: "なかさんつううん"
	},
	{
		original: "アクセス",
		hiragana: "あくせす"
	},
	{
		original: "ベーシック",
		hiragana: "べーしっく"
	},
	{
		original: "九州トランスポート",
		hiragana: "きゅうしゅうとらんすぽーと"
	},
	{
		original: "有限会社新郷運輸",
		hiragana: "ゆうげんがいしゃしんごううんゆ"
	},
	{
		original: "保証運輸",
		hiragana: "ほしょううんゆ"
	},
	{
		original: "平山運送",
		hiragana: "ひらやまうんそう"
	},
	{
		original: "東洋梱包運輸",
		hiragana: "とうようこんぽううんゆ"
	},
	{
		original: "友動興業",
		hiragana: "ともどうこうぎょう"
	},
	{
		original: "有限会社晃和運輸",
		hiragana: "ゆうげんがいしゃあきらわうんゆ"
	},
	{
		original: "栗山運輸",
		hiragana: "くりやまうんゆ"
	},
	{
		original: "安原運輸有限会社",
		hiragana: "やすはらうんゆゆうげんがいしゃ"
	},
	{
		original: "ヤルキ",
		hiragana: "やるき"
	},
	{
		original: "札幌機工運輸",
		hiragana: "さっぽろきこううんゆ"
	},
	{
		original: "新幸運輸",
		hiragana: "しんこううんゆ"
	},
	{
		original: "有限会社山忠運輸",
		hiragana: "ゆうげんがいしゃやまちゅううんゆ"
	},
	{
		original: "マツバヤシ",
		hiragana: "まつばやし"
	},
	{
		original: "時岡運輸",
		hiragana: "ときおかうんゆ"
	},
	{
		original: "黒石貨物自動車",
		hiragana: "くろいしかもつじどうしゃ"
	},
	{
		original: "万ヶ塚運送",
		hiragana: "まんゖつかうんそう"
	},
	{
		original: "ＮＳＵロード・ライン",
		hiragana: "ＮＳＵろーど・らいん"
	},
	{
		original: "渥美商事運輸",
		hiragana: "あつみしょうじうんゆ"
	},
	{
		original: "ミヤウチ物流システム",
		hiragana: "みやうちぶつりゅうしすてむ"
	},
	{
		original: "八進運輸",
		hiragana: "はちしんうんゆ"
	},
	{
		original: "大幸運輸",
		hiragana: "だいこううんゆ"
	},
	{
		original: "ファイズホールディングス",
		hiragana: "ふぁいずほーるでぃんぐす"
	},
	{
		original: "富士宮運輸",
		hiragana: "ふじのみやうんゆ"
	},
	{
		original: "共生物流",
		hiragana: "きょうせいぶつりゅう"
	},
	{
		original: "カネオ興運",
		hiragana: "かねおきょううん"
	},
	{
		original: "有限会社熊谷運輸",
		hiragana: "ゆうげんがいしゃくまがやうんゆ"
	},
	{
		original: "教発",
		hiragana: "きょうはつ"
	},
	{
		original: "日本エアメール",
		hiragana: "にっぽんえあめーる"
	},
	{
		original: "誠隆",
		hiragana: "まことたかし"
	},
	{
		original: "カトーロジック",
		hiragana: "かとーろじっく"
	},
	{
		original: "有限会社三栄企画",
		hiragana: "ゆうげんがいしゃさんえいきかく"
	},
	{
		original: "イーエヌディーオー",
		hiragana: "いーえぬでぃーおー"
	},
	{
		original: "ＭＯＤ",
		hiragana: "ＭＯＤ"
	},
	{
		original: "南毛運送",
		hiragana: "みなみけうんそう"
	},
	{
		original: "有限会社富田川運送",
		hiragana: "ゆうげんがいしゃとみたかわうんそう"
	},
	{
		original: "フジタ物流",
		hiragana: "ふじたぶつりゅう"
	},
	{
		original: "有限会社デリバリーサービスナカガワ",
		hiragana: "ゆうげんがいしゃでりばりーさーびすなかがわ"
	},
	{
		original: "橋本運送",
		hiragana: "はしもとうんそう"
	},
	{
		original: "協立運輸",
		hiragana: "きょうりつうんゆ"
	},
	{
		original: "有限会社大成商事",
		hiragana: "ゆうげんがいしゃたいせいしょうじ"
	},
	{
		original: "湊運輸倉庫",
		hiragana: "みなとうんゆそうこ"
	},
	{
		original: "トレックス",
		hiragana: "とれっくす"
	},
	{
		original: "田中商会",
		hiragana: "たなかしょうかい"
	},
	{
		original: "エル・シー・エス",
		hiragana: "える・しー・えす"
	},
	{
		original: "有限会社ピー・エル・エス",
		hiragana: "ゆうげんがいしゃぴー・える・えす"
	},
	{
		original: "盟豊運送有限会社",
		hiragana: "めいゆたかうんそうゆうげんがいしゃ"
	},
	{
		original: "松井運輸有限会社",
		hiragana: "まついうんゆゆうげんがいしゃ"
	},
	{
		original: "中央運送",
		hiragana: "ちゅうおううんそう"
	},
	{
		original: "たまき運輸",
		hiragana: "たまきうんゆ"
	},
	{
		original: "有限会社一筋運輸",
		hiragana: "ゆうげんがいしゃひとすじうんゆ"
	},
	{
		original: "吉田運輸",
		hiragana: "よしだうんゆ"
	},
	{
		original: "有限会社三光陸運",
		hiragana: "ゆうげんがいしゃさんこうりくうん"
	},
	{
		original: "雅産商",
		hiragana: "まささんしょう"
	},
	{
		original: "常盤運輸",
		hiragana: "ときわうんゆ"
	},
	{
		original: "佐世保ダイキュー運輸",
		hiragana: "させぼだいきゅーうんゆ"
	},
	{
		original: "ウエアハウス有限会社",
		hiragana: "うえあはうすゆうげんがいしゃ"
	},
	{
		original: "レックス・ライン",
		hiragana: "れっくす・らいん"
	},
	{
		original: "リブレ",
		hiragana: "りぶれ"
	},
	{
		original: "有限会社金居運送",
		hiragana: "ゆうげんがいしゃかないうんそう"
	},
	{
		original: "磐城土建工業",
		hiragana: "いわきどけんこうぎょう"
	},
	{
		original: "新明工業",
		hiragana: "しんめいこうぎょう"
	},
	{
		original: "日高興産運輸",
		hiragana: "ひだかこうさんうんゆ"
	},
	{
		original: "関東物流サービス",
		hiragana: "かんとうぶつりゅうさーびす"
	},
	{
		original: "大三運輸",
		hiragana: "おおみうんゆ"
	},
	{
		original: "篠崎商事",
		hiragana: "しのざきしょうじ"
	},
	{
		original: "大東出版梱包",
		hiragana: "だいとうしゅっぱんこんぽう"
	},
	{
		original: "旭川小型運輸",
		hiragana: "あさひかわこがたうんゆ"
	},
	{
		original: "新栄流通サービス",
		hiragana: "しんえいりゅうつうさーびす"
	},
	{
		original: "山城合同自動車",
		hiragana: "やましろごうどうじどうしゃ"
	},
	{
		original: "有限会社イワムラ商事",
		hiragana: "ゆうげんがいしゃいわむらしょうじ"
	},
	{
		original: "鎮西門司港運送",
		hiragana: "ちんぜいもじこううんそう"
	},
	{
		original: "尾崎運送",
		hiragana: "おざきうんそう"
	},
	{
		original: "丸文運輸",
		hiragana: "まるぶんうんゆ"
	},
	{
		original: "谷山運送",
		hiragana: "たにやまうんそう"
	},
	{
		original: "テスコ",
		hiragana: "てすこ"
	},
	{
		original: "未来エキスプレス",
		hiragana: "みらいえきすぷれす"
	},
	{
		original: "丸定運輸",
		hiragana: "まるていうんゆ"
	},
	{
		original: "静岡光陽陸運",
		hiragana: "しずおかこうようりくうん"
	},
	{
		original: "グローバルシステム",
		hiragana: "ぐろーばるしすてむ"
	},
	{
		original: "開成輸送",
		hiragana: "かいせいゆそう"
	},
	{
		original: "仲屋商運",
		hiragana: "なかやしょううん"
	},
	{
		original: "有限会社ビートル",
		hiragana: "ゆうげんがいしゃびーとる"
	},
	{
		original: "中野運輸",
		hiragana: "なかのうんゆ"
	},
	{
		original: "名古屋千里運輸",
		hiragana: "なごやせんりうんゆ"
	},
	{
		original: "ＪＳＩ",
		hiragana: "ＪＳＩ"
	},
	{
		original: "りくだい",
		hiragana: "りくだい"
	},
	{
		original: "長良運輸",
		hiragana: "ながらうんゆ"
	},
	{
		original: "英丸通商",
		hiragana: "えいまるつうしょう"
	},
	{
		original: "近畿オーディオ流通サービス",
		hiragana: "きんきおーでぃおりゅうつうさーびす"
	},
	{
		original: "有限会社新誠運輸倉庫",
		hiragana: "ゆうげんがいしゃしんまことうんゆそうこ"
	},
	{
		original: "山田運輸",
		hiragana: "やまだうんゆ"
	},
	{
		original: "黒崎水岩運送",
		hiragana: "くろさきみずいわうんそう"
	},
	{
		original: "ツカサ運輸",
		hiragana: "つかさうんゆ"
	},
	{
		original: "高橋産業",
		hiragana: "たかはしさんぎょう"
	},
	{
		original: "有限会社東海企業",
		hiragana: "ゆうげんがいしゃとうかいきぎょう"
	},
	{
		original: "有限会社光総業",
		hiragana: "ゆうげんがいしゃひかりそうぎょう"
	},
	{
		original: "奥村運送店",
		hiragana: "おくむらうんそうてん"
	},
	{
		original: "日通高岡運輸",
		hiragana: "にっつうたかおかうんゆ"
	},
	{
		original: "玉家運輸倉庫",
		hiragana: "たまかうんゆそうこ"
	},
	{
		original: "天翔",
		hiragana: "てんしょう"
	},
	{
		original: "金澤運送",
		hiragana: "かなざわうんそう"
	},
	{
		original: "鈴木運輸",
		hiragana: "すずきうんゆ"
	},
	{
		original: "有限会社和田運送",
		hiragana: "ゆうげんがいしゃわだうんそう"
	},
	{
		original: "藤田運輸倉庫",
		hiragana: "ふじたうんゆそうこ"
	},
	{
		original: "有限会社Ｔ．Ｍサービス",
		hiragana: "ゆうげんがいしゃＴ．Ｍさーびす"
	},
	{
		original: "有限会社ハカタ貨物",
		hiragana: "ゆうげんがいしゃはかたかもつ"
	},
	{
		original: "日協運輸",
		hiragana: "にちきょううんゆ"
	},
	{
		original: "福岡運送",
		hiragana: "ふくおかうんそう"
	},
	{
		original: "有限会社日栄運輸興業",
		hiragana: "ゆうげんがいしゃにちえいうんゆこうぎょう"
	},
	{
		original: "小澤運送店",
		hiragana: "おざわうんそうてん"
	},
	{
		original: "宮西設備",
		hiragana: "みやにしせつび"
	},
	{
		original: "公徳運輸",
		hiragana: "こうとくうんゆ"
	},
	{
		original: "昌栄運送",
		hiragana: "しょうえいうんそう"
	},
	{
		original: "ヒッサン",
		hiragana: "ひっさん"
	},
	{
		original: "小松﨑商事",
		hiragana: "こまつこまつしょうじ"
	},
	{
		original: "富士熱錬工業",
		hiragana: "ふじねつれんこうぎょう"
	},
	{
		original: "湊商事",
		hiragana: "みなとしょうじ"
	},
	{
		original: "藤森運送自動車整備",
		hiragana: "ふじもりうんそうじどうしゃせいび"
	},
	{
		original: "加西合同貨物自動車",
		hiragana: "かさいごうどうかもつじどうしゃ"
	},
	{
		original: "新進運輸",
		hiragana: "しんしんうんゆ"
	},
	{
		original: "ライト",
		hiragana: "らいと"
	},
	{
		original: "古山建設運輸",
		hiragana: "ふるやまけんせつうんゆ"
	},
	{
		original: "塩竈倉庫",
		hiragana: "しおがまそうこ"
	},
	{
		original: "ＳＵＧＡＩ　ＥＸＰＲＥＳＳ　ＣＡＲＧＯ",
		hiragana: "ＳＵＧＡＩ　ＥＸＰＲＥＳＳ　ＣＡＲＧＯ"
	},
	{
		original: "有限会社名古屋運輸倉庫",
		hiragana: "ゆうげんがいしゃなごやうんゆそうこ"
	},
	{
		original: "三光運輸",
		hiragana: "さんこううんゆ"
	},
	{
		original: "中島商会",
		hiragana: "なかじましょうかい"
	},
	{
		original: "トラボックス",
		hiragana: "とらぼっくす"
	},
	{
		original: "有限会社松山急配",
		hiragana: "ゆうげんがいしゃまつやまきゅうはい"
	},
	{
		original: "豊栄運輸",
		hiragana: "とよさかうんゆ"
	},
	{
		original: "旭運送",
		hiragana: "あさひうんそう"
	},
	{
		original: "睦商会",
		hiragana: "むつみしょうかい"
	},
	{
		original: "三信運輸",
		hiragana: "さんしんうんゆ"
	},
	{
		original: "岡山積載運輸",
		hiragana: "おかやませきさいうんゆ"
	},
	{
		original: "ヒノデ",
		hiragana: "ひので"
	},
	{
		original: "東邦運輸",
		hiragana: "とうほううんゆ"
	},
	{
		original: "日隆運輸",
		hiragana: "にちりゅううんゆ"
	},
	{
		original: "日本流通サービス",
		hiragana: "にほんりゅうとおりさーびす"
	},
	{
		original: "有限会社魚返産業運輸",
		hiragana: "ゆうげんがいしゃさかなへんさんぎょううんゆ"
	},
	{
		original: "長生運送",
		hiragana: "ちょうせいうんそう"
	},
	{
		original: "アルプス運輸",
		hiragana: "あるぷすうんゆ"
	},
	{
		original: "櫻井商事",
		hiragana: "さくらいしょうじ"
	},
	{
		original: "有限会社永井商事",
		hiragana: "ゆうげんがいしゃながいしょうじ"
	},
	{
		original: "有限会社愛希",
		hiragana: "ゆうげんがいしゃあいき"
	},
	{
		original: "日本海運輸有限会社",
		hiragana: "にほんかいうんゆゆうげんがいしゃ"
	},
	{
		original: "山田運送",
		hiragana: "やまだうんそう"
	},
	{
		original: "有限会社朝日運送",
		hiragana: "ゆうげんがいしゃあさひうんそう"
	},
	{
		original: "高浜共立運輸",
		hiragana: "たかはまきょうりつうんゆ"
	},
	{
		original: "ムカワ運輸",
		hiragana: "むかわうんゆ"
	},
	{
		original: "鈴木運送",
		hiragana: "すずきうんそう"
	},
	{
		original: "深山運送有限会社",
		hiragana: "みやまうんそうゆうげんがいしゃ"
	},
	{
		original: "愛品物流",
		hiragana: "あいしなものりゅう"
	},
	{
		original: "長崎丸善運輸",
		hiragana: "ながさきまるぜんうんゆ"
	},
	{
		original: "ヤマトウ",
		hiragana: "やまとう"
	},
	{
		original: "山陽運送有限会社",
		hiragana: "さんよううんそうゆうげんがいしゃ"
	},
	{
		original: "有限会社奥羽陸運",
		hiragana: "ゆうげんがいしゃおううりくうん"
	},
	{
		original: "日本中央運輸",
		hiragana: "にほんじゅうおううんゆ"
	},
	{
		original: "新垣運輸",
		hiragana: "にいがきうんゆ"
	},
	{
		original: "有限会社松正商事",
		hiragana: "ゆうげんがいしゃまつせいしょうじ"
	},
	{
		original: "ジャスト",
		hiragana: "じゃすと"
	},
	{
		original: "豊栄物流有限会社",
		hiragana: "とよさかぶつりゅうゆうげんがいしゃ"
	},
	{
		original: "翔陸運",
		hiragana: "しょうりくうん"
	},
	{
		original: "名西運輸",
		hiragana: "みょうざいうんゆ"
	},
	{
		original: "アイテック",
		hiragana: "あいてっく"
	},
	{
		original: "青和トラフィック",
		hiragana: "あおわとらふぃっく"
	},
	{
		original: "有限会社白鷺運輸",
		hiragana: "ゆうげんがいしゃしらさぎうんゆ"
	},
	{
		original: "中日本エクスプレス",
		hiragana: "なかにほんえくすぷれす"
	},
	{
		original: "有限会社クリヤー梱包",
		hiragana: "ゆうげんがいしゃくりやーこんぽう"
	},
	{
		original: "天馬運輸",
		hiragana: "てんまうんゆ"
	},
	{
		original: "北大阪運輸",
		hiragana: "ほくだいさかうんゆ"
	},
	{
		original: "村井運送",
		hiragana: "むらいうんそう"
	},
	{
		original: "藤栄運輸",
		hiragana: "ふじえうんゆ"
	},
	{
		original: "ワコーライン",
		hiragana: "わこーらいん"
	},
	{
		original: "栗村産業運送",
		hiragana: "くりむらさんぎょううんそう"
	},
	{
		original: "有限会社鈴木運送",
		hiragana: "ゆうげんがいしゃすずきうんそう"
	},
	{
		original: "アオキ",
		hiragana: "あおき"
	},
	{
		original: "コーベフーズエキスプレス",
		hiragana: "こーべふーずえきすぷれす"
	},
	{
		original: "ツルシン産業",
		hiragana: "つるしんさんぎょう"
	},
	{
		original: "山本運送",
		hiragana: "やまもとうんそう"
	},
	{
		original: "有限会社鈴木商事",
		hiragana: "ゆうげんがいしゃすずきしょうじ"
	},
	{
		original: "ＹＳロジ",
		hiragana: "ＹＳろじ"
	},
	{
		original: "セイバー輸送",
		hiragana: "せいばーゆそう"
	},
	{
		original: "有限会社大上運送",
		hiragana: "ゆうげんがいしゃおおうえうんそう"
	},
	{
		original: "有限会社安居野運送",
		hiragana: "ゆうげんがいしゃあんきょのうんそう"
	},
	{
		original: "スター急便",
		hiragana: "すたーきゅうびん"
	},
	{
		original: "城北運送",
		hiragana: "じょうほくうんそう"
	},
	{
		original: "サントクピース",
		hiragana: "さんとくぴーす"
	},
	{
		original: "日章",
		hiragana: "にっしょう"
	},
	{
		original: "ジャム・インターナショナル",
		hiragana: "じゃむ・いんたーなしょなる"
	},
	{
		original: "田内運輸",
		hiragana: "たうちうんゆ"
	},
	{
		original: "ユウキネットワークス",
		hiragana: "ゆうきねっとわーくす"
	},
	{
		original: "明邦運輸",
		hiragana: "めいくにうんゆ"
	},
	{
		original: "有限会社岐垣運輸",
		hiragana: "ゆうげんがいしゃしかきうんゆ"
	},
	{
		original: "北陸トランポ富山",
		hiragana: "ほくりくとらんぽとやま"
	},
	{
		original: "西日本トータルサービス",
		hiragana: "にしにほんとーたるさーびす"
	},
	{
		original: "羽後運輸",
		hiragana: "うごうんゆ"
	},
	{
		original: "辻運送",
		hiragana: "つじうんそう"
	},
	{
		original: "九北物流",
		hiragana: "きゅうきたぶつりゅう"
	},
	{
		original: "宮崎幸和運輸有限会社",
		hiragana: "みやざきゆきかずうんゆゆうげんがいしゃ"
	},
	{
		original: "茨城荷役運輸",
		hiragana: "いばらきにやくうんゆ"
	},
	{
		original: "チスイ",
		hiragana: "ちすい"
	},
	{
		original: "コラボデリバリー",
		hiragana: "こらぼでりばりー"
	},
	{
		original: "エム・オーカンパニー",
		hiragana: "えむ・おーかんぱにー"
	},
	{
		original: "魁輸送",
		hiragana: "かいゆそう"
	},
	{
		original: "三和工業有限会社",
		hiragana: "さんわこうぎょうゆうげんがいしゃ"
	},
	{
		original: "カイウン",
		hiragana: "かいうん"
	},
	{
		original: "イトウケイ",
		hiragana: "いとうけい"
	},
	{
		original: "高東興業",
		hiragana: "たかとうこうぎょう"
	},
	{
		original: "竹田運送",
		hiragana: "たけだうんそう"
	},
	{
		original: "ハラダ物流",
		hiragana: "はらだぶつりゅう"
	},
	{
		original: "ワールド運輸",
		hiragana: "わーるどうんゆ"
	},
	{
		original: "有限会社丸智コーポレーション",
		hiragana: "ゆうげんがいしゃまるさとるこーぽれーしょん"
	},
	{
		original: "埼玉急便",
		hiragana: "さいたまきゅうびん"
	},
	{
		original: "北安陸送",
		hiragana: "きたあんりくそう"
	},
	{
		original: "名城運輸有限会社",
		hiragana: "めいじょううんゆゆうげんがいしゃ"
	},
	{
		original: "有限会社ハギワラコーポレーション",
		hiragana: "ゆうげんがいしゃはぎわらこーぽれーしょん"
	},
	{
		original: "モミキ運送",
		hiragana: "もみきうんそう"
	},
	{
		original: "シー・ビー・システム",
		hiragana: "しー・びー・しすてむ"
	},
	{
		original: "アイビーエー",
		hiragana: "あいびーえー"
	},
	{
		original: "ネオライン",
		hiragana: "ねおらいん"
	},
	{
		original: "大憲輸送",
		hiragana: "たいけんゆそう"
	},
	{
		original: "光和運輸有限会社",
		hiragana: "こうわうんゆゆうげんがいしゃ"
	},
	{
		original: "鈴翔",
		hiragana: "すずしょう"
	},
	{
		original: "星の宮運輸",
		hiragana: "ほしのみやうんゆ"
	},
	{
		original: "小岩相互運輸",
		hiragana: "こいわそうごうんゆ"
	},
	{
		original: "有限会社マルタカ物流サービス",
		hiragana: "ゆうげんがいしゃまるたかぶつりゅうさーびす"
	},
	{
		original: "九工運輸有限会社",
		hiragana: "きゅうこううんゆゆうげんがいしゃ"
	},
	{
		original: "野村産業運輸",
		hiragana: "のむらさんぎょううんゆ"
	},
	{
		original: "マイド",
		hiragana: "まいど"
	},
	{
		original: "合資会社フクコー運輸",
		hiragana: "ごうしがいしゃふくこーうんゆ"
	},
	{
		original: "有限会社康進運輸",
		hiragana: "ゆうげんがいしゃやすししんうんゆ"
	},
	{
		original: "ティックトランスポート有限会社",
		hiragana: "てぃっくとらんすぽーとゆうげんがいしゃ"
	},
	{
		original: "エヌティーサービス",
		hiragana: "えぬてぃーさーびす"
	},
	{
		original: "明幸運輸",
		hiragana: "めいこううんゆ"
	},
	{
		original: "北海道共販運輸",
		hiragana: "ほっかいどうきょうはんうんゆ"
	},
	{
		original: "貞包運送",
		hiragana: "さだかねうんそう"
	},
	{
		original: "キョウエイトランスポート",
		hiragana: "きょうえいとらんすぽーと"
	},
	{
		original: "ファーストカーゴ",
		hiragana: "ふぁーすとかーご"
	},
	{
		original: "マツシタ運輸",
		hiragana: "まつしたうんゆ"
	},
	{
		original: "親和商事",
		hiragana: "しんわしょうじ"
	},
	{
		original: "熊本物流企画",
		hiragana: "くまもとぶつりゅうきかく"
	},
	{
		original: "松本興業社",
		hiragana: "まつもとこうぎょうしゃ"
	},
	{
		original: "有限会社東進物流",
		hiragana: "ゆうげんがいしゃとうしんぶつりゅう"
	},
	{
		original: "あだち運送",
		hiragana: "あだちうんそう"
	},
	{
		original: "Ｔ２",
		hiragana: "Ｔ２"
	},
	{
		original: "城北運送有限会社",
		hiragana: "じょうほくうんそうゆうげんがいしゃ"
	},
	{
		original: "藍園陸運有限会社",
		hiragana: "らんえんりくうんゆうげんがいしゃ"
	},
	{
		original: "小山運輸",
		hiragana: "おやまうんゆ"
	},
	{
		original: "エスケーテー",
		hiragana: "えすけーてー"
	},
	{
		original: "富士トラック",
		hiragana: "ふじとらっく"
	},
	{
		original: "丸三組",
		hiragana: "まるさんくみ"
	},
	{
		original: "有限会社水谷水産",
		hiragana: "ゆうげんがいしゃみずたにすいさん"
	},
	{
		original: "中之塚運送",
		hiragana: "なかゆきつかうんそう"
	},
	{
		original: "鈴峰運送有限会社",
		hiragana: "すずみねうんそうゆうげんがいしゃ"
	},
	{
		original: "金津運輸有限会社",
		hiragana: "かねつうんゆゆうげんがいしゃ"
	},
	{
		original: "日本海港運",
		hiragana: "にほんかいみなとうん"
	},
	{
		original: "エフ・ライン",
		hiragana: "えふ・らいん"
	},
	{
		original: "ニッカ",
		hiragana: "にっか"
	},
	{
		original: "富士陸運",
		hiragana: "ふじりくうん"
	},
	{
		original: "上田商事",
		hiragana: "うえだしょうじ"
	},
	{
		original: "常陽運輸",
		hiragana: "じょうよううんゆ"
	},
	{
		original: "前田陸送",
		hiragana: "まえだりくそう"
	},
	{
		original: "吉田運送有限会社",
		hiragana: "よしだうんそうゆうげんがいしゃ"
	},
	{
		original: "協栄便",
		hiragana: "きょうえいびん"
	},
	{
		original: "大津中央運送",
		hiragana: "おおつちゅうおううんそう"
	},
	{
		original: "ロジックス日野商会",
		hiragana: "ろじっくすひのしょうかい"
	},
	{
		original: "内田運送",
		hiragana: "うちだうんそう"
	},
	{
		original: "川由",
		hiragana: "かわゆ"
	},
	{
		original: "阪堺エキスプレス",
		hiragana: "はんかいえきすぷれす"
	},
	{
		original: "森トク運輸",
		hiragana: "もりとくうんゆ"
	},
	{
		original: "小澤倉庫運輸有限会社",
		hiragana: "おざわそうこうんゆゆうげんがいしゃ"
	},
	{
		original: "橋本運輸",
		hiragana: "はしもとうんゆ"
	},
	{
		original: "ＢＩＧＵＰ",
		hiragana: "ＢＩＧＵＰ"
	},
	{
		original: "イーグルコーポレーション",
		hiragana: "いーぐるこーぽれーしょん"
	},
	{
		original: "小西運送",
		hiragana: "こにしうんそう"
	},
	{
		original: "サンエイサービス",
		hiragana: "さんえいさーびす"
	},
	{
		original: "シンコー運輸",
		hiragana: "しんこーうんゆ"
	},
	{
		original: "札幌運輸",
		hiragana: "さっぽろうんゆ"
	},
	{
		original: "リサイクル横澤",
		hiragana: "りさいくるよこざわ"
	},
	{
		original: "三鷹運送",
		hiragana: "みたかうんそう"
	},
	{
		original: "北九州物流サービス",
		hiragana: "きたきゅうしゅうぶつりゅうさーびす"
	},
	{
		original: "東京荷役管理",
		hiragana: "とうきょうにやくかんり"
	},
	{
		original: "エーナン運輸",
		hiragana: "えーなんうんゆ"
	},
	{
		original: "北部貨物自動車",
		hiragana: "ほくぶかもつじどうしゃ"
	},
	{
		original: "川上水産運輸",
		hiragana: "かわかみすいさんうんゆ"
	},
	{
		original: "タイムス物流",
		hiragana: "たいむすぶつりゅう"
	},
	{
		original: "有限会社善速運輸",
		hiragana: "ゆうげんがいしゃぜんそくうんゆ"
	},
	{
		original: "大分県急便",
		hiragana: "おおいたけんきゅうびん"
	},
	{
		original: "金子運送",
		hiragana: "かねこうんそう"
	},
	{
		original: "米沢運輸",
		hiragana: "よねざわうんゆ"
	},
	{
		original: "有限会社オーホリ",
		hiragana: "ゆうげんがいしゃおーほり"
	},
	{
		original: "アクティブトライ",
		hiragana: "あくてぃぶとらい"
	},
	{
		original: "青鬼運送",
		hiragana: "あおおにうんそう"
	},
	{
		original: "関西配送有限会社",
		hiragana: "かんさいはいそうゆうげんがいしゃ"
	},
	{
		original: "有限会社石井運輸",
		hiragana: "ゆうげんがいしゃいしいうんゆ"
	},
	{
		original: "北日本重機有限会社",
		hiragana: "きたにほんじゅうきゆうげんがいしゃ"
	},
	{
		original: "有限会社晴和商事",
		hiragana: "ゆうげんがいしゃせいわしょうじ"
	},
	{
		original: "大洗港湾運送",
		hiragana: "おおあらいこうわんうんそう"
	},
	{
		original: "翔輝トランスポート",
		hiragana: "しょうてるとらんすぽーと"
	},
	{
		original: "有限会社ファナティック",
		hiragana: "ゆうげんがいしゃふぁなてぃっく"
	},
	{
		original: "千代田運送",
		hiragana: "ちよだうんそう"
	},
	{
		original: "有限会社妹尾溶接",
		hiragana: "ゆうげんがいしゃいもおようせつ"
	},
	{
		original: "ＮＭ物流",
		hiragana: "ＮＭぶつりゅう"
	},
	{
		original: "栄光運輸",
		hiragana: "えいこううんゆ"
	},
	{
		original: "大和急行運輸",
		hiragana: "やまときゅうこううんゆ"
	},
	{
		original: "大和輸送",
		hiragana: "やまとゆそう"
	},
	{
		original: "エイチアールティー",
		hiragana: "えいちあーるてぃー"
	},
	{
		original: "中部トランスポートサービス",
		hiragana: "ちゅうぶとらんすぽーとさーびす"
	},
	{
		original: "天野運送",
		hiragana: "あまのうんそう"
	},
	{
		original: "植松運送",
		hiragana: "うえまつうんそう"
	},
	{
		original: "平沢運送",
		hiragana: "ひらさわうんそう"
	},
	{
		original: "山本運輸",
		hiragana: "やまもとうんゆ"
	},
	{
		original: "永山運輸",
		hiragana: "ながやまうんゆ"
	},
	{
		original: "丸福運輸",
		hiragana: "まるふくうんゆ"
	},
	{
		original: "中川運輸",
		hiragana: "なかがわうんゆ"
	},
	{
		original: "光和運輸",
		hiragana: "こうわうんゆ"
	},
	{
		original: "有限会社大三ロジテック",
		hiragana: "ゆうげんがいしゃおおみろじてっく"
	},
	{
		original: "有限会社新徳運輸",
		hiragana: "ゆうげんがいしゃしんとくうんゆ"
	},
	{
		original: "有限会社西根企業",
		hiragana: "ゆうげんがいしゃにしねきぎょう"
	},
	{
		original: "ブライトエクスプレス",
		hiragana: "ぶらいとえくすぷれす"
	},
	{
		original: "和光運輸",
		hiragana: "わこううんゆ"
	},
	{
		original: "原田商店",
		hiragana: "はらだしょうてん"
	},
	{
		original: "前田運輸",
		hiragana: "まえだうんゆ"
	},
	{
		original: "ニットー運輸",
		hiragana: "にっとーうんゆ"
	},
	{
		original: "高知県第一運送",
		hiragana: "こうちけんだいいちうんそう"
	},
	{
		original: "有限会社丸信運輸",
		hiragana: "ゆうげんがいしゃまるしんうんゆ"
	},
	{
		original: "有限会社西湘",
		hiragana: "ゆうげんがいしゃせいしょう"
	},
	{
		original: "有限会社マルハチ",
		hiragana: "ゆうげんがいしゃまるはち"
	},
	{
		original: "有限会社渡辺商事",
		hiragana: "ゆうげんがいしゃわたなべしょうじ"
	},
	{
		original: "ユウガ",
		hiragana: "ゆうが"
	},
	{
		original: "誠輪物流",
		hiragana: "まことわぶつりゅう"
	},
	{
		original: "有限会社ワイエスケイ",
		hiragana: "ゆうげんがいしゃわいえすけい"
	},
	{
		original: "キャメルシステム",
		hiragana: "きゃめるしすてむ"
	},
	{
		original: "吉川運輸",
		hiragana: "よしかわうんゆ"
	},
	{
		original: "ＧＲＥＥＮ　ＴＲＡＮＳＰＯＲＴ",
		hiragana: "ＧＲＥＥＮ　ＴＲＡＮＳＰＯＲＴ"
	},
	{
		original: "八洲運輸",
		hiragana: "はっしゅううんゆ"
	},
	{
		original: "有限会社横山牧場",
		hiragana: "ゆうげんがいしゃよこやまぼくじょう"
	},
	{
		original: "吉高運輸",
		hiragana: "よしたかうんゆ"
	},
	{
		original: "金剛運輸",
		hiragana: "こんごううんゆ"
	},
	{
		original: "有限会社井上商事",
		hiragana: "ゆうげんがいしゃいのうえしょうじ"
	},
	{
		original: "桜商事運輸",
		hiragana: "さくらしょうじうんゆ"
	},
	{
		original: "ＭＩコーポレーション",
		hiragana: "ＭＩこーぽれーしょん"
	},
	{
		original: "有限会社白井運送",
		hiragana: "ゆうげんがいしゃしらいうんそう"
	},
	{
		original: "田中運送",
		hiragana: "たなかうんそう"
	},
	{
		original: "澤寿運輸",
		hiragana: "さわひさしうんゆ"
	},
	{
		original: "有限会社北池運送",
		hiragana: "ゆうげんがいしゃきたいけうんそう"
	},
	{
		original: "アッシュトンニイガタ",
		hiragana: "あっしゅとんにいがた"
	},
	{
		original: "千代川運輸",
		hiragana: "ちよかわうんゆ"
	},
	{
		original: "日高運輸",
		hiragana: "ひだかうんゆ"
	},
	{
		original: "Ｌｉｆｅ　Ｌｉｎｅ",
		hiragana: "Ｌｉｆｅ　Ｌｉｎｅ"
	},
	{
		original: "豊栄運輸倉庫",
		hiragana: "とよさかうんゆそうこ"
	},
	{
		original: "富士物流",
		hiragana: "ふじぶつりゅう"
	},
	{
		original: "武田運輸",
		hiragana: "たけだうんゆ"
	},
	{
		original: "黒沢企業",
		hiragana: "くろさわきぎょう"
	},
	{
		original: "田中運送",
		hiragana: "たなかうんそう"
	},
	{
		original: "本庄運送",
		hiragana: "ほんじょううんそう"
	},
	{
		original: "共和運輸",
		hiragana: "きょうわうんゆ"
	},
	{
		original: "牧野運送有限会社",
		hiragana: "まきのうんそうゆうげんがいしゃ"
	},
	{
		original: "彦崎通運",
		hiragana: "ひこさきつううん"
	},
	{
		original: "松本商会",
		hiragana: "まつもとしょうかい"
	},
	{
		original: "北都運輸",
		hiragana: "ほくとうんゆ"
	},
	{
		original: "新協運輸",
		hiragana: "しんきょううんゆ"
	},
	{
		original: "丸長運送",
		hiragana: "まるちょううんそう"
	},
	{
		original: "ブルーシーネットワーク",
		hiragana: "ぶるーしーねっとわーく"
	},
	{
		original: "アイ・エス・アイ",
		hiragana: "あい・えす・あい"
	},
	{
		original: "Ｋ‐ＬＯＧＩ",
		hiragana: "Ｋ‐ＬＯＧＩ"
	},
	{
		original: "中洲梱包",
		hiragana: "なかすこんぽう"
	},
	{
		original: "谷井運輸倉庫",
		hiragana: "たにいうんゆそうこ"
	},
	{
		original: "タッタ流通産業",
		hiragana: "たったりゅうつうさんぎょう"
	},
	{
		original: "五十川運輸",
		hiragana: "いそがわうんゆ"
	},
	{
		original: "細田重機運輸",
		hiragana: "ほそだじゅうきうんゆ"
	},
	{
		original: "インフィニート",
		hiragana: "いんふぃにーと"
	},
	{
		original: "有限会社伸行運送",
		hiragana: "ゆうげんがいしゃのぶゆきうんそう"
	},
	{
		original: "ビップ運輸",
		hiragana: "びっぷうんゆ"
	},
	{
		original: "エイコー運輸",
		hiragana: "えいこーうんゆ"
	},
	{
		original: "関西配送",
		hiragana: "かんさいはいそう"
	},
	{
		original: "全日本運輸",
		hiragana: "ぜんにほんうんゆ"
	},
	{
		original: "東海運輸",
		hiragana: "とうかいうんゆ"
	},
	{
		original: "吉村商事",
		hiragana: "よしむらしょうじ"
	},
	{
		original: "大和急送",
		hiragana: "やまときゅうそう"
	},
	{
		original: "信州ヤマヨ運輸",
		hiragana: "しんしゅうやまようんゆ"
	},
	{
		original: "岡山宝運送",
		hiragana: "おかやまたからうんそう"
	},
	{
		original: "アスラック",
		hiragana: "あすらっく"
	},
	{
		original: "上山興産有限会社",
		hiragana: "うえやまこうさんゆうげんがいしゃ"
	},
	{
		original: "有限会社大和運送",
		hiragana: "ゆうげんがいしゃやまとうんそう"
	},
	{
		original: "美喜運輸",
		hiragana: "みきうんゆ"
	},
	{
		original: "為頼運送",
		hiragana: "ためよりうんそう"
	},
	{
		original: "大光商運",
		hiragana: "おおみつしょううん"
	},
	{
		original: "有限会社大拓",
		hiragana: "ゆうげんがいしゃだいたく"
	},
	{
		original: "藤田興運",
		hiragana: "ふじたきょううん"
	},
	{
		original: "カワブ産業",
		hiragana: "かわぶさんぎょう"
	},
	{
		original: "あさか野物流",
		hiragana: "あさかのぶつりゅう"
	},
	{
		original: "ニシキ運送",
		hiragana: "にしきうんそう"
	},
	{
		original: "小澤運送",
		hiragana: "おざわうんそう"
	},
	{
		original: "神田運送店",
		hiragana: "かんだうんそうてん"
	},
	{
		original: "ダイロジ",
		hiragana: "だいろじ"
	},
	{
		original: "岸運輸",
		hiragana: "きしうんゆ"
	},
	{
		original: "共信倉庫運輸",
		hiragana: "ともしんそうこうんゆ"
	},
	{
		original: "進和運輸",
		hiragana: "しんわうんゆ"
	},
	{
		original: "有限会社トランスポート軽井沢",
		hiragana: "ゆうげんがいしゃとらんすぽーとかるいざわ"
	},
	{
		original: "新庄輸送サービス",
		hiragana: "しんじょうゆそうさーびす"
	},
	{
		original: "大産",
		hiragana: "だいさん"
	},
	{
		original: "有限会社タグチ物流",
		hiragana: "ゆうげんがいしゃたぐちぶつりゅう"
	},
	{
		original: "烏山通運",
		hiragana: "からすやまつううん"
	},
	{
		original: "有限会社福満運輸",
		hiragana: "ゆうげんがいしゃふくみつうんゆ"
	},
	{
		original: "島商",
		hiragana: "しましょう"
	},
	{
		original: "フロンティア",
		hiragana: "ふろんてぃあ"
	},
	{
		original: "有限会社モトミ食品輸送",
		hiragana: "ゆうげんがいしゃもとみしょくひんゆそう"
	},
	{
		original: "広島埠頭運輸",
		hiragana: "ひろしまふとううんゆ"
	},
	{
		original: "ケイセイ運輸",
		hiragana: "けいせいうんゆ"
	},
	{
		original: "金彰運送",
		hiragana: "きんあきらうんそう"
	},
	{
		original: "山形トランジット",
		hiragana: "やまがたとらんじっと"
	},
	{
		original: "足助貨物",
		hiragana: "あすけかもつ"
	},
	{
		original: "北潟運送",
		hiragana: "きたかたうんそう"
	},
	{
		original: "ＳＹ",
		hiragana: "ＳＹ"
	},
	{
		original: "栄光運輸",
		hiragana: "えいこううんゆ"
	},
	{
		original: "平成農産運輸",
		hiragana: "へいせいのうさんうんゆ"
	},
	{
		original: "タマエース",
		hiragana: "たまえーす"
	},
	{
		original: "サンワリスエクスプレス",
		hiragana: "さんわりすえくすぷれす"
	},
	{
		original: "オータカ流通",
		hiragana: "おーたかりゅうつう"
	},
	{
		original: "有限会社金田運送",
		hiragana: "ゆうげんがいしゃかねだうんそう"
	},
	{
		original: "トーホーサービス",
		hiragana: "とーほーさーびす"
	},
	{
		original: "有限会社ヒラオカ",
		hiragana: "ゆうげんがいしゃひらおか"
	},
	{
		original: "有限会社岡本運送",
		hiragana: "ゆうげんがいしゃおかもとうんそう"
	},
	{
		original: "エス・アール・エス",
		hiragana: "えす・あーる・えす"
	},
	{
		original: "アイエムジー",
		hiragana: "あいえむじー"
	},
	{
		original: "横山運輸有限会社",
		hiragana: "よこやまうんゆゆうげんがいしゃ"
	},
	{
		original: "福東運送有限会社",
		hiragana: "ふくひがしうんそうゆうげんがいしゃ"
	},
	{
		original: "山石物流有限会社",
		hiragana: "やまいしぶつりゅうゆうげんがいしゃ"
	},
	{
		original: "ＳＤ物流",
		hiragana: "ＳＤぶつりゅう"
	},
	{
		original: "合資会社門口運送店",
		hiragana: "ごうしがいしゃかどぐちうんそうてん"
	},
	{
		original: "石井商会",
		hiragana: "いしいしょうかい"
	},
	{
		original: "丸昭運送",
		hiragana: "まるあきらうんそう"
	},
	{
		original: "芳井運送",
		hiragana: "よしいうんそう"
	},
	{
		original: "キョウリツトランスポート",
		hiragana: "きょうりつとらんすぽーと"
	},
	{
		original: "有限会社田村運送",
		hiragana: "ゆうげんがいしゃたむらうんそう"
	},
	{
		original: "アイ・ティー物流",
		hiragana: "あい・てぃーぶつりゅう"
	},
	{
		original: "中部サービス",
		hiragana: "ちゅうぶさーびす"
	},
	{
		original: "モンエクスプレス",
		hiragana: "もんえくすぷれす"
	},
	{
		original: "西部市場運送",
		hiragana: "せいぶしじょううんそう"
	},
	{
		original: "有限会社美山運輸",
		hiragana: "ゆうげんがいしゃみやまうんゆ"
	},
	{
		original: "シンコーエキスプレス",
		hiragana: "しんこーえきすぷれす"
	},
	{
		original: "有限会社マルナカ運輸",
		hiragana: "ゆうげんがいしゃまるなかうんゆ"
	},
	{
		original: "ムクダ産業運輸",
		hiragana: "むくださんぎょううんゆ"
	},
	{
		original: "丸高運送有限会社",
		hiragana: "まるたかうんそうゆうげんがいしゃ"
	},
	{
		original: "ＳＡロジテム",
		hiragana: "ＳＡろじてむ"
	},
	{
		original: "安川産業",
		hiragana: "やすかわさんぎょう"
	},
	{
		original: "資昇運輸",
		hiragana: "しのぼるうんゆ"
	},
	{
		original: "青森郵便自動車",
		hiragana: "あおもりゆうびんじどうしゃ"
	},
	{
		original: "用賀運送",
		hiragana: "ようがうんそう"
	},
	{
		original: "有限会社板倉センター運輸",
		hiragana: "ゆうげんがいしゃいたくらせんたーうんゆ"
	},
	{
		original: "有限会社丸幸物流",
		hiragana: "ゆうげんがいしゃまるさちぶつりゅう"
	},
	{
		original: "中川トータルサービス",
		hiragana: "なかがわとーたるさーびす"
	},
	{
		original: "有限会社大保運送",
		hiragana: "ゆうげんがいしゃおおやすうんそう"
	},
	{
		original: "有限会社シティカーゴ",
		hiragana: "ゆうげんがいしゃしてぃかーご"
	},
	{
		original: "ヤマナシ流通",
		hiragana: "やまなしりゅうつう"
	},
	{
		original: "丸徳運輸",
		hiragana: "まるとくうんゆ"
	},
	{
		original: "丸大トラック",
		hiragana: "まるだいとらっく"
	},
	{
		original: "野口",
		hiragana: "のぐち"
	},
	{
		original: "鈴川商事",
		hiragana: "すずかわしょうじ"
	},
	{
		original: "北海運輸",
		hiragana: "ほっかいうんゆ"
	},
	{
		original: "内藤運輸",
		hiragana: "ないとううんゆ"
	},
	{
		original: "有限会社春日運輸",
		hiragana: "ゆうげんがいしゃかすがうんゆ"
	},
	{
		original: "吉田重機運輸",
		hiragana: "よしだじゅうきうんゆ"
	},
	{
		original: "ＳＢトランスポートシステム",
		hiragana: "ＳＢとらんすぽーとしすてむ"
	},
	{
		original: "早来輸送",
		hiragana: "はやきたゆそう"
	},
	{
		original: "戸谷運輸",
		hiragana: "とやうんゆ"
	},
	{
		original: "ＡＣＳ羽田",
		hiragana: "ＡＣＳはねだ"
	},
	{
		original: "兵庫貨物運輸作業",
		hiragana: "ひょうごかもつうんゆさぎょう"
	},
	{
		original: "富士見物流",
		hiragana: "ふじみぶつりゅう"
	},
	{
		original: "新潟第一梱包運輸",
		hiragana: "にいがただいいちこんぽううんゆ"
	},
	{
		original: "ダイワ",
		hiragana: "だいわ"
	},
	{
		original: "群馬総合輸送",
		hiragana: "ぐんまそうごうゆそう"
	},
	{
		original: "有限会社松葉重機",
		hiragana: "ゆうげんがいしゃまつばじゅうき"
	},
	{
		original: "小山田運輸",
		hiragana: "おやまだうんゆ"
	},
	{
		original: "拓豊運送",
		hiragana: "たくゆたかうんそう"
	},
	{
		original: "昭栄運輸",
		hiragana: "しょうえいうんゆ"
	},
	{
		original: "北斗テクノ",
		hiragana: "ほくとてくの"
	},
	{
		original: "小松運輸",
		hiragana: "こまつうんゆ"
	},
	{
		original: "有限会社月津運送",
		hiragana: "ゆうげんがいしゃがつつうんそう"
	},
	{
		original: "共通運輸",
		hiragana: "きょうつううんゆ"
	},
	{
		original: "やま仁運輸有限会社",
		hiragana: "やまひとしうんゆゆうげんがいしゃ"
	},
	{
		original: "有限会社吉部運送",
		hiragana: "ゆうげんがいしゃきちぶうんそう"
	},
	{
		original: "朝霞通商",
		hiragana: "あさかつうしょう"
	},
	{
		original: "キャド",
		hiragana: "きゃど"
	},
	{
		original: "福岡航空燃料輸送",
		hiragana: "ふくおかこうくうねんりょうゆそう"
	},
	{
		original: "有限会社五泉輸送",
		hiragana: "ゆうげんがいしゃごせんゆそう"
	},
	{
		original: "三立運輸",
		hiragana: "さんりつうんゆ"
	},
	{
		original: "丹後橋立交通",
		hiragana: "たんごはしだてこうつう"
	},
	{
		original: "中村運輸",
		hiragana: "なかむらうんゆ"
	},
	{
		original: "デンテツ運輸",
		hiragana: "でんてつうんゆ"
	},
	{
		original: "有限会社サンヨー物流",
		hiragana: "ゆうげんがいしゃさんよーぶつりゅう"
	},
	{
		original: "櫂榮篠崎商事有限会社",
		hiragana: "かいさかえしのざきしょうじゆうげんがいしゃ"
	},
	{
		original: "ハイウェイ・サービス",
		hiragana: "はいうぇい・さーびす"
	},
	{
		original: "有限会社大牟田福輸",
		hiragana: "ゆうげんがいしゃおおむたふくゆ"
	},
	{
		original: "大島運輸",
		hiragana: "おおしまうんゆ"
	},
	{
		original: "小豆島貨物運輸",
		hiragana: "しょうずしまかもつうんゆ"
	},
	{
		original: "新潟高速運輸",
		hiragana: "にいがたこうそくうんゆ"
	},
	{
		original: "有限会社興亜運送",
		hiragana: "ゆうげんがいしゃこうあうんそう"
	},
	{
		original: "有限会社だいわ運送",
		hiragana: "ゆうげんがいしゃだいわうんそう"
	},
	{
		original: "アイエスシー",
		hiragana: "あいえすしー"
	},
	{
		original: "エス・トランスポートサービス",
		hiragana: "えす・とらんすぽーとさーびす"
	},
	{
		original: "五輪運輸倉庫",
		hiragana: "ごりんうんゆそうこ"
	},
	{
		original: "三共運輸",
		hiragana: "さんきょううんゆ"
	},
	{
		original: "エスティーシステム",
		hiragana: "えすてぃーしすてむ"
	},
	{
		original: "新関東ネギシ",
		hiragana: "にいぜきひがしねぎし"
	},
	{
		original: "パジャンカ",
		hiragana: "ぱじゃんか"
	},
	{
		original: "能登部運送",
		hiragana: "のとぶうんそう"
	},
	{
		original: "ビーシーロジスティクス",
		hiragana: "びーしーろじすてぃくす"
	},
	{
		original: "木村運輸",
		hiragana: "きむらうんゆ"
	},
	{
		original: "林運送",
		hiragana: "はやしうんそう"
	},
	{
		original: "山一運輸興業",
		hiragana: "やまいちうんゆこうぎょう"
	},
	{
		original: "志村運送",
		hiragana: "しむらうんそう"
	},
	{
		original: "茂木運送有限会社",
		hiragana: "もてぎうんそうゆうげんがいしゃ"
	},
	{
		original: "第一運輸興業",
		hiragana: "だいいちうんゆこうぎょう"
	},
	{
		original: "有限会社ハザマ運輸",
		hiragana: "ゆうげんがいしゃはざまうんゆ"
	},
	{
		original: "ジュントランスポート",
		hiragana: "じゅんとらんすぽーと"
	},
	{
		original: "コスモ・ロジコム",
		hiragana: "こすも・ろじこむ"
	},
	{
		original: "運輸",
		hiragana: "うんゆ"
	},
	{
		original: "九州興業",
		hiragana: "きゅうしゅうこうぎょう"
	},
	{
		original: "アイカイ物流",
		hiragana: "あいかいぶつりゅう"
	},
	{
		original: "マルゼン・ロジスティック",
		hiragana: "まるぜん・ろじすてぃっく"
	},
	{
		original: "有限会社鎌田物流サービス",
		hiragana: "ゆうげんがいしゃかまだぶつりゅうさーびす"
	},
	{
		original: "丸福物流サービス有限会社",
		hiragana: "まるふくぶつりゅうさーびすゆうげんがいしゃ"
	},
	{
		original: "堀江運送",
		hiragana: "ほりえうんそう"
	},
	{
		original: "有限会社山八運送",
		hiragana: "ゆうげんがいしゃやまはちうんそう"
	},
	{
		original: "中九州食品サービス",
		hiragana: "なかきゅうしゅうしょくひんさーびす"
	},
	{
		original: "富士工運",
		hiragana: "ふじこううん"
	},
	{
		original: "ＭＡＲＵＺＥＮ　ＥＸＰＲＥＳＳ",
		hiragana: "ＭＡＲＵＺＥＮ　ＥＸＰＲＥＳＳ"
	},
	{
		original: "中央運輸建設",
		hiragana: "ちゅうおううんゆけんせつ"
	},
	{
		original: "ニユートランスポート",
		hiragana: "にゆーとらんすぽーと"
	},
	{
		original: "常北陸運",
		hiragana: "じょうほくりくうん"
	},
	{
		original: "有限会社富士運送",
		hiragana: "ゆうげんがいしゃふじうんそう"
	},
	{
		original: "仁川運輸",
		hiragana: "にかわうんゆ"
	},
	{
		original: "五大運輸",
		hiragana: "ごだいうんゆ"
	},
	{
		original: "イトウ運送",
		hiragana: "いとううんそう"
	},
	{
		original: "才田運送",
		hiragana: "さいたうんそう"
	},
	{
		original: "宍戸",
		hiragana: "ししど"
	},
	{
		original: "ながせ運輸倉庫",
		hiragana: "ながせうんゆそうこ"
	},
	{
		original: "有限会社恵商会",
		hiragana: "ゆうげんがいしゃめぐみしょうかい"
	},
	{
		original: "ミクニテック",
		hiragana: "みくにてっく"
	},
	{
		original: "有限会社ライズ物流",
		hiragana: "ゆうげんがいしゃらいずぶつりゅう"
	},
	{
		original: "伊豆美化企画",
		hiragana: "いずみかきかく"
	},
	{
		original: "有限会社山本運送",
		hiragana: "ゆうげんがいしゃやまもとうんそう"
	},
	{
		original: "福島空港運輸",
		hiragana: "ふくしまくうこううんゆ"
	},
	{
		original: "山幸商運",
		hiragana: "やまさちしょううん"
	},
	{
		original: "関越運輸",
		hiragana: "かんえつうんゆ"
	},
	{
		original: "芦屋貨物自動車",
		hiragana: "あしやかもつじどうしゃ"
	},
	{
		original: "京神物流",
		hiragana: "けいしんぶつりゅう"
	},
	{
		original: "神商",
		hiragana: "かみしょう"
	},
	{
		original: "有限会社広島流通企画",
		hiragana: "ゆうげんがいしゃひろしまりゅうつうきかく"
	},
	{
		original: "興南冷蔵運輸",
		hiragana: "こうなんれいぞううんゆ"
	},
	{
		original: "美友起梱包有限会社",
		hiragana: "びともきこんぽうゆうげんがいしゃ"
	},
	{
		original: "ピーディ",
		hiragana: "ぴーでぃ"
	},
	{
		original: "首都圏輸送サービス",
		hiragana: "しゅとけんゆそうさーびす"
	},
	{
		original: "ティアンドティ・コーポレーション",
		hiragana: "てぃあんどてぃ・こーぽれーしょん"
	},
	{
		original: "岩城運輸",
		hiragana: "いわきうんゆ"
	},
	{
		original: "高木商事運輸",
		hiragana: "たかぎしょうじうんゆ"
	},
	{
		original: "栃木ダイキュー運輸",
		hiragana: "とちぎだいきゅーうんゆ"
	},
	{
		original: "茜商事",
		hiragana: "あかねしょうじ"
	},
	{
		original: "美崎運輸",
		hiragana: "みさきうんゆ"
	},
	{
		original: "有限会社南海運送",
		hiragana: "ゆうげんがいしゃなんかいうんそう"
	},
	{
		original: "タカエキスプレス",
		hiragana: "たかえきすぷれす"
	},
	{
		original: "和光運輸",
		hiragana: "わこううんゆ"
	},
	{
		original: "有限会社秀吉",
		hiragana: "ゆうげんがいしゃひできち"
	},
	{
		original: "マルチ輸送",
		hiragana: "まるちゆそう"
	},
	{
		original: "ジェイ・キャリー",
		hiragana: "じぇい・きゃりー"
	},
	{
		original: "昭和倉庫",
		hiragana: "しょうわそうこ"
	},
	{
		original: "吉原運送",
		hiragana: "よしはらうんそう"
	},
	{
		original: "霞北運輸",
		hiragana: "かすみきたうんゆ"
	},
	{
		original: "成和運送",
		hiragana: "しげかずうんそう"
	},
	{
		original: "有限会社ＥＩＳＨＩＮ",
		hiragana: "ゆうげんがいしゃＥＩＳＨＩＮ"
	},
	{
		original: "新栄工業",
		hiragana: "しんえいこうぎょう"
	},
	{
		original: "有限会社日本軽貨物庄内",
		hiragana: "ゆうげんがいしゃにっぽんけいかもつしょうない"
	},
	{
		original: "常磐ニット",
		hiragana: "じょうばんにっと"
	},
	{
		original: "ＵＣ",
		hiragana: "ＵＣ"
	},
	{
		original: "三進物流",
		hiragana: "さっちぶつりゅう"
	},
	{
		original: "丸五運送",
		hiragana: "まるごうんそう"
	},
	{
		original: "アップス",
		hiragana: "あっぷす"
	},
	{
		original: "興亜資材",
		hiragana: "こうあしざい"
	},
	{
		original: "蒲生ロジスティクス",
		hiragana: "がもうろじすてぃくす"
	},
	{
		original: "有明商事",
		hiragana: "ありあけしょうじ"
	},
	{
		original: "寺泊交通",
		hiragana: "てらどまりこうつう"
	},
	{
		original: "真栄産業",
		hiragana: "しんえいさんぎょう"
	},
	{
		original: "山直運送",
		hiragana: "やまだいうんそう"
	},
	{
		original: "美鈴運輸",
		hiragana: "みすずうんゆ"
	},
	{
		original: "永代運輸倉庫",
		hiragana: "えいたいうんゆそうこ"
	},
	{
		original: "ホクトラ福井",
		hiragana: "ほくとらふくい"
	},
	{
		original: "吉岡エンタープライズ",
		hiragana: "よしおかえんたーぷらいず"
	},
	{
		original: "有限会社さくら物流",
		hiragana: "ゆうげんがいしゃさくらぶつりゅう"
	},
	{
		original: "有限会社伊東急送",
		hiragana: "ゆうげんがいしゃいとうきゅうそう"
	},
	{
		original: "藤園運輸有限会社",
		hiragana: "ふじそのうんゆゆうげんがいしゃ"
	},
	{
		original: "大田貨物運送",
		hiragana: "おおたかもつうんそう"
	},
	{
		original: "有限会社ウインサムトランスポート",
		hiragana: "ゆうげんがいしゃういんさむとらんすぽーと"
	},
	{
		original: "ケーラインサービス",
		hiragana: "けーらいんさーびす"
	},
	{
		original: "ＭＥＴＳ",
		hiragana: "ＭＥＴＳ"
	},
	{
		original: "有限会社古川運送",
		hiragana: "ゆうげんがいしゃふるかわうんそう"
	},
	{
		original: "桜物流有限会社",
		hiragana: "さくらぶつりゅうゆうげんがいしゃ"
	},
	{
		original: "東徳運輸",
		hiragana: "ひがしとくうんゆ"
	},
	{
		original: "宮田運送",
		hiragana: "みやたうんそう"
	},
	{
		original: "完和運輸有限会社",
		hiragana: "かんわうんゆゆうげんがいしゃ"
	},
	{
		original: "工藤商事",
		hiragana: "くどうしょうじ"
	},
	{
		original: "有限会社光栄急配",
		hiragana: "ゆうげんがいしゃこうえいきゅうはい"
	},
	{
		original: "兼六運輸",
		hiragana: "けんろくうんゆ"
	},
	{
		original: "大翔運輸",
		hiragana: "ひろとうんゆ"
	},
	{
		original: "坂本商会",
		hiragana: "さかもとしょうかい"
	},
	{
		original: "日章トランス",
		hiragana: "にっしょうとらんす"
	},
	{
		original: "堀田組",
		hiragana: "ほったくみ"
	},
	{
		original: "高英運輸",
		hiragana: "たかえいうんゆ"
	},
	{
		original: "セイホク物流",
		hiragana: "せいほくぶつりゅう"
	},
	{
		original: "エイチエス",
		hiragana: "えいちえす"
	},
	{
		original: "魚沼中央トランスポート",
		hiragana: "うおぬまちゅうおうとらんすぽーと"
	},
	{
		original: "白扇ターミナル",
		hiragana: "はくせんたーみなる"
	},
	{
		original: "鹿央運輸有限会社",
		hiragana: "かおううんゆゆうげんがいしゃ"
	},
	{
		original: "東河運輸",
		hiragana: "ひがしかうんゆ"
	},
	{
		original: "日興運輸",
		hiragana: "にっこううんゆ"
	},
	{
		original: "Ｓ・Ｓ・ＬＩＮＥ",
		hiragana: "Ｓ・Ｓ・ＬＩＮＥ"
	},
	{
		original: "西部トランスポート",
		hiragana: "せいぶとらんすぽーと"
	},
	{
		original: "清水運送",
		hiragana: "しみずうんそう"
	},
	{
		original: "キャリーライフサポート",
		hiragana: "きゃりーらいふさぽーと"
	},
	{
		original: "ゲッコー",
		hiragana: "げっこー"
	},
	{
		original: "有限会社ケンコー運輸",
		hiragana: "ゆうげんがいしゃけんこーうんゆ"
	},
	{
		original: "西川運輸倉庫",
		hiragana: "にしかわうんゆそうこ"
	},
	{
		original: "太陽工業",
		hiragana: "たいようこうぎょう"
	},
	{
		original: "有限会社明配",
		hiragana: "ゆうげんがいしゃめいはい"
	},
	{
		original: "榎本運輸",
		hiragana: "えのもとうんゆ"
	},
	{
		original: "有限会社マロニエ流通",
		hiragana: "ゆうげんがいしゃまろにえりゅうつう"
	},
	{
		original: "江藤商事",
		hiragana: "えとうしょうじ"
	},
	{
		original: "つばめ運送",
		hiragana: "つばめうんそう"
	},
	{
		original: "ベストプラ",
		hiragana: "べすとぷら"
	},
	{
		original: "全建",
		hiragana: "ぜんけん"
	},
	{
		original: "有限会社大星",
		hiragana: "ゆうげんがいしゃおおほし"
	},
	{
		original: "有限会社青森さくら運送",
		hiragana: "ゆうげんがいしゃあおもりさくらうんそう"
	},
	{
		original: "塩釜トラック",
		hiragana: "しおがまとらっく"
	},
	{
		original: "グロー物流",
		hiragana: "ぐろーぶつりゅう"
	},
	{
		original: "新興商運",
		hiragana: "しんこうしょううん"
	},
	{
		original: "渡田運送有限会社",
		hiragana: "わたりだうんそうゆうげんがいしゃ"
	},
	{
		original: "斉藤組",
		hiragana: "さいとうくみ"
	},
	{
		original: "大坪運輸有限会社",
		hiragana: "おおつぼうんゆゆうげんがいしゃ"
	},
	{
		original: "有限会社朝日運送",
		hiragana: "ゆうげんがいしゃあさひうんそう"
	},
	{
		original: "山本急行",
		hiragana: "やまもときゅうこう"
	},
	{
		original: "五王興業有限会社",
		hiragana: "ごおうこうぎょうゆうげんがいしゃ"
	},
	{
		original: "ワイズプロジェクト",
		hiragana: "わいずぷろじぇくと"
	},
	{
		original: "牧田商事",
		hiragana: "まきたしょうじ"
	},
	{
		original: "シューハイ",
		hiragana: "しゅーはい"
	},
	{
		original: "マルナカ物流",
		hiragana: "まるなかぶつりゅう"
	},
	{
		original: "三照運輸",
		hiragana: "さんしょううんゆ"
	},
	{
		original: "有限会社桑商",
		hiragana: "ゆうげんがいしゃくわしょう"
	},
	{
		original: "川崎商運",
		hiragana: "かわさきしょううん"
	},
	{
		original: "中村流通",
		hiragana: "なかむらりゅうつう"
	},
	{
		original: "ユーキャリア",
		hiragana: "ゆーきゃりあ"
	},
	{
		original: "有限会社さつき運送",
		hiragana: "ゆうげんがいしゃさつきうんそう"
	},
	{
		original: "今津陸運",
		hiragana: "いまづりくうん"
	},
	{
		original: "マウス",
		hiragana: "まうす"
	},
	{
		original: "圭徳運送",
		hiragana: "けいとくうんそう"
	},
	{
		original: "有限会社藤崎運輸",
		hiragana: "ゆうげんがいしゃふじさきうんゆ"
	},
	{
		original: "有限会社伊藤運輸",
		hiragana: "ゆうげんがいしゃいとううんゆ"
	},
	{
		original: "飯島運輸",
		hiragana: "いいじまうんゆ"
	},
	{
		original: "田沢湖運送",
		hiragana: "たざわこうんそう"
	},
	{
		original: "中伸運輸",
		hiragana: "なかしんうんゆ"
	},
	{
		original: "有限会社フロムワン",
		hiragana: "ゆうげんがいしゃふろむわん"
	},
	{
		original: "港商運輸",
		hiragana: "みなとしょううんゆ"
	},
	{
		original: "商運サービス",
		hiragana: "しょううんさーびす"
	},
	{
		original: "有限会社光浪運送",
		hiragana: "ゆうげんがいしゃひかりなみうんそう"
	},
	{
		original: "三和包装産業",
		hiragana: "さんわほうそうさんぎょう"
	},
	{
		original: "エム・エム",
		hiragana: "えむ・えむ"
	},
	{
		original: "落合運輸",
		hiragana: "おちあいうんゆ"
	},
	{
		original: "堺梱包運輸有限会社",
		hiragana: "さかいこんぽううんゆゆうげんがいしゃ"
	},
	{
		original: "国田運送有限会社",
		hiragana: "くにだうんそうゆうげんがいしゃ"
	},
	{
		original: "阿部運送",
		hiragana: "あべうんそう"
	},
	{
		original: "有限会社名取貨物運送",
		hiragana: "ゆうげんがいしゃなとりかもつうんそう"
	},
	{
		original: "有限会社倉持運輸",
		hiragana: "ゆうげんがいしゃくらもちうんゆ"
	},
	{
		original: "尾道諸品物流センター",
		hiragana: "おのみちしょひんぶつりゅうせんたー"
	},
	{
		original: "酪友運送",
		hiragana: "らくともうんそう"
	},
	{
		original: "朝日梱包運輸",
		hiragana: "あさひこんぽううんゆ"
	},
	{
		original: "有限会社グリーンサービス",
		hiragana: "ゆうげんがいしゃぐりーんさーびす"
	},
	{
		original: "有限会社土屋タイヤ商会",
		hiragana: "ゆうげんがいしゃつちやたいやしょうかい"
	},
	{
		original: "明真運輸",
		hiragana: "めいまことうんゆ"
	},
	{
		original: "阿蘓運輸",
		hiragana: "あそうんゆ"
	},
	{
		original: "大日運輸",
		hiragana: "だいにちうんゆ"
	},
	{
		original: "植田運送",
		hiragana: "うえだうんそう"
	},
	{
		original: "三原運送有限会社",
		hiragana: "みはらうんそうゆうげんがいしゃ"
	},
	{
		original: "港南運輸",
		hiragana: "こうなんうんゆ"
	},
	{
		original: "有限会社一省",
		hiragana: "ゆうげんがいしゃいちしょう"
	},
	{
		original: "新潟丸善運輸",
		hiragana: "にいがたまるぜんうんゆ"
	},
	{
		original: "みなと運送",
		hiragana: "みなとうんそう"
	},
	{
		original: "有限会社万代",
		hiragana: "ゆうげんがいしゃまんだい"
	},
	{
		original: "有限会社三興運輸",
		hiragana: "ゆうげんがいしゃさんこううんゆ"
	},
	{
		original: "さくら商事",
		hiragana: "さくらしょうじ"
	},
	{
		original: "北海自動車運送",
		hiragana: "ほっかいじどうしゃうんそう"
	},
	{
		original: "有限会社ニシカワ運輸",
		hiragana: "ゆうげんがいしゃにしかわうんゆ"
	},
	{
		original: "我妻運輸",
		hiragana: "わがつまうんゆ"
	},
	{
		original: "マルツ運輸",
		hiragana: "まるつうんゆ"
	},
	{
		original: "鷹島運送有限会社",
		hiragana: "たかしまうんそうゆうげんがいしゃ"
	},
	{
		original: "Ｊａｐａｎ　Ａｉｎａ　Ｅｘｐｒｅｓｓ有限会社",
		hiragana: "Ｊａｐａｎ　Ａｉｎａ　Ｅｘｐｒｅｓｓゆうげんがいしゃ"
	},
	{
		original: "安城高速運輸",
		hiragana: "あんじょうこうそくうんゆ"
	},
	{
		original: "京北運送",
		hiragana: "けいほくうんそう"
	},
	{
		original: "神興運輸",
		hiragana: "かみきょううんゆ"
	},
	{
		original: "屋久島海陸運輸",
		hiragana: "やくしまかいりくうんゆ"
	},
	{
		original: "森吉通運",
		hiragana: "もりよしつううん"
	},
	{
		original: "和光興業",
		hiragana: "わこうこうぎょう"
	},
	{
		original: "有馬運輸",
		hiragana: "ありまうんゆ"
	},
	{
		original: "丸三興業",
		hiragana: "まるさんこうぎょう"
	},
	{
		original: "全日本ピアノ運送",
		hiragana: "ぜんにほんぴあのうんそう"
	},
	{
		original: "大丸北海道陸送",
		hiragana: "だいまるほっかいどうりくそう"
	},
	{
		original: "大視",
		hiragana: "だいし"
	},
	{
		original: "テラヤマ倉庫運輸",
		hiragana: "てらやまそうこうんゆ"
	},
	{
		original: "コーケン産業",
		hiragana: "こーけんさんぎょう"
	},
	{
		original: "下徳産業",
		hiragana: "したとくさんぎょう"
	},
	{
		original: "清和物流",
		hiragana: "きよかずぶつりゅう"
	},
	{
		original: "カナック",
		hiragana: "かなっく"
	},
	{
		original: "エスエスライン",
		hiragana: "えすえすらいん"
	},
	{
		original: "福岡丸善運輸",
		hiragana: "ふくおかまるぜんうんゆ"
	},
	{
		original: "福島物流有限会社",
		hiragana: "ふくしまぶつりゅうゆうげんがいしゃ"
	},
	{
		original: "三晃運輸倉庫",
		hiragana: "さんこううんゆそうこ"
	},
	{
		original: "今村運輸倉庫有限会社",
		hiragana: "いまむらうんゆそうこゆうげんがいしゃ"
	},
	{
		original: "有限会社南串陸運",
		hiragana: "ゆうげんがいしゃみなみくしりくうん"
	},
	{
		original: "有限会社井上運送",
		hiragana: "ゆうげんがいしゃいのうえうんそう"
	},
	{
		original: "有限会社まるひろ",
		hiragana: "ゆうげんがいしゃまるひろ"
	},
	{
		original: "安保ロジックス",
		hiragana: "あんぽろじっくす"
	},
	{
		original: "玉藻港運",
		hiragana: "たまもみなとうん"
	},
	{
		original: "トラスト運輸有限会社",
		hiragana: "とらすとうんゆゆうげんがいしゃ"
	},
	{
		original: "宮崎運輸",
		hiragana: "みやざきうんゆ"
	},
	{
		original: "有限会社丸信エクスプレス",
		hiragana: "ゆうげんがいしゃまるしんえくすぷれす"
	},
	{
		original: "斎藤運輸",
		hiragana: "さいとううんゆ"
	},
	{
		original: "平野物流",
		hiragana: "へいやぶつりゅう"
	},
	{
		original: "幸福運輸",
		hiragana: "こうふくうんゆ"
	},
	{
		original: "田口運送",
		hiragana: "たぐちうんそう"
	},
	{
		original: "有限会社原田物産",
		hiragana: "ゆうげんがいしゃはらだぶっさん"
	},
	{
		original: "森本運輸",
		hiragana: "もりもとうんゆ"
	},
	{
		original: "友建設",
		hiragana: "ともけんせつ"
	},
	{
		original: "五島",
		hiragana: "ごとう"
	},
	{
		original: "有限会社三富",
		hiragana: "ゆうげんがいしゃみとみ"
	},
	{
		original: "石田運送",
		hiragana: "いしだうんそう"
	},
	{
		original: "横浜魚市場運送",
		hiragana: "よこはまうおいちばうんそう"
	},
	{
		original: "オリソー物流",
		hiragana: "おりそーぶつりゅう"
	},
	{
		original: "有限会社新生物流サービス",
		hiragana: "ゆうげんがいしゃしんせいぶつりゅうさーびす"
	},
	{
		original: "有限会社山中陸送",
		hiragana: "ゆうげんがいしゃさんちゅうりくそう"
	},
	{
		original: "大友運送",
		hiragana: "おおともうんそう"
	},
	{
		original: "メイギライン",
		hiragana: "めいぎらいん"
	},
	{
		original: "有限会社芝運送",
		hiragana: "ゆうげんがいしゃしばうんそう"
	},
	{
		original: "加藤梱包運輸",
		hiragana: "かとうこんぽううんゆ"
	},
	{
		original: "有限会社神世運輸",
		hiragana: "ゆうげんがいしゃかみようんゆ"
	},
	{
		original: "西千葉運輸",
		hiragana: "にしちばうんゆ"
	},
	{
		original: "東永運輸",
		hiragana: "とうえいうんゆ"
	},
	{
		original: "富船運輸",
		hiragana: "とみせんうんゆ"
	},
	{
		original: "丸翔",
		hiragana: "まるしょう"
	},
	{
		original: "有限会社京津オートサービス",
		hiragana: "ゆうげんがいしゃきょうずおーとさーびす"
	},
	{
		original: "増井運送有限会社",
		hiragana: "ますいうんそうゆうげんがいしゃ"
	},
	{
		original: "有限会社豊成運輸",
		hiragana: "ゆうげんがいしゃとよなりうんゆ"
	},
	{
		original: "津軽高速運輸有限会社",
		hiragana: "つがるこうそくうんゆゆうげんがいしゃ"
	},
	{
		original: "マルイチライン",
		hiragana: "まるいちらいん"
	},
	{
		original: "デンシン",
		hiragana: "でんしん"
	},
	{
		original: "振興産業",
		hiragana: "しんこうさんぎょう"
	},
	{
		original: "丹保運送",
		hiragana: "たんほうんそう"
	},
	{
		original: "共進",
		hiragana: "きょうしん"
	},
	{
		original: "櫻井商事運輸",
		hiragana: "さくらいしょうじうんゆ"
	},
	{
		original: "松本物流",
		hiragana: "まつもとぶつりゅう"
	},
	{
		original: "有限会社橋川商会",
		hiragana: "ゆうげんがいしゃはしかわしょうかい"
	},
	{
		original: "三栄全業有限会社",
		hiragana: "さんえいぜんぎょうゆうげんがいしゃ"
	},
	{
		original: "中谷運輸",
		hiragana: "なかたにうんゆ"
	},
	{
		original: "ツルタ商事",
		hiragana: "つるたしょうじ"
	},
	{
		original: "有限会社不来方運送",
		hiragana: "ゆうげんがいしゃこずかたうんそう"
	},
	{
		original: "松楠物流",
		hiragana: "まつくすのきぶつりゅう"
	},
	{
		original: "ＹＭＭ",
		hiragana: "ＹＭＭ"
	},
	{
		original: "秋田物流",
		hiragana: "あきたぶつりゅう"
	},
	{
		original: "小倉第一運送有限会社",
		hiragana: "おぐらだいいちうんそうゆうげんがいしゃ"
	},
	{
		original: "森運輸",
		hiragana: "もりうんゆ"
	},
	{
		original: "有限会社上西商店",
		hiragana: "ゆうげんがいしゃうえにししょうてん"
	},
	{
		original: "有限会社グローバル",
		hiragana: "ゆうげんがいしゃぐろーばる"
	},
	{
		original: "西徳運輸",
		hiragana: "にしとくうんゆ"
	},
	{
		original: "有限会社宮本運輸",
		hiragana: "ゆうげんがいしゃみやもとうんゆ"
	},
	{
		original: "藤枝運送",
		hiragana: "ふじえだうんそう"
	},
	{
		original: "アンサ",
		hiragana: "あんさ"
	},
	{
		original: "アイエヌロジスティクス",
		hiragana: "あいえぬろじすてぃくす"
	},
	{
		original: "中道運輸",
		hiragana: "ちゅうどううんゆ"
	},
	{
		original: "共和運送",
		hiragana: "きょうわうんそう"
	},
	{
		original: "エンカク運輸",
		hiragana: "えんかくうんゆ"
	},
	{
		original: "大伸",
		hiragana: "たいしん"
	},
	{
		original: "有限会社コーセーライン",
		hiragana: "ゆうげんがいしゃこーせーらいん"
	},
	{
		original: "有限会社大野ヶ原物流",
		hiragana: "ゆうげんがいしゃおおのゖげんぶつりゅう"
	},
	{
		original: "幸洋運輸",
		hiragana: "こうよううんゆ"
	},
	{
		original: "プライム物流",
		hiragana: "ぷらいむぶつりゅう"
	},
	{
		original: "鯉渕運送有限会社",
		hiragana: "こいぶちうんそうゆうげんがいしゃ"
	},
	{
		original: "西川運送",
		hiragana: "にしかわうんそう"
	},
	{
		original: "第一物流サービス",
		hiragana: "だいいちぶつりゅうさーびす"
	},
	{
		original: "有限会社新光運輸",
		hiragana: "ゆうげんがいしゃしんこううんゆ"
	},
	{
		original: "東武高活運輸",
		hiragana: "とうぶたかかつうんゆ"
	},
	{
		original: "扶桑運輸",
		hiragana: "ふそううんゆ"
	},
	{
		original: "大阪第一作業",
		hiragana: "おおさかだいいっさくぎょう"
	},
	{
		original: "山陰運送",
		hiragana: "さんいんうんそう"
	},
	{
		original: "常滑コンテ",
		hiragana: "とこなめこんて"
	},
	{
		original: "ライトリンク",
		hiragana: "らいとりんく"
	},
	{
		original: "ミシマ",
		hiragana: "みしま"
	},
	{
		original: "富士丸商運",
		hiragana: "ふじまるしょううん"
	},
	{
		original: "キャリープランニング",
		hiragana: "きゃりーぷらんにんぐ"
	},
	{
		original: "相田運輸",
		hiragana: "あいだうんゆ"
	},
	{
		original: "ミヤコ通運",
		hiragana: "みやこつううん"
	},
	{
		original: "高義",
		hiragana: "たかよし"
	},
	{
		original: "戸次急配",
		hiragana: "とつぎきゅうはい"
	},
	{
		original: "大一倉庫運輸",
		hiragana: "ひろかずそうこうんゆ"
	},
	{
		original: "東日陸運",
		hiragana: "とうにちりくうん"
	},
	{
		original: "鹿久保運輸",
		hiragana: "しかくぼうんゆ"
	},
	{
		original: "日生運輸",
		hiragana: "にっせいうんゆ"
	},
	{
		original: "和孝運輸",
		hiragana: "わこううんゆ"
	},
	{
		original: "有限会社山口運送",
		hiragana: "ゆうげんがいしゃやまぐちうんそう"
	},
	{
		original: "北九重機運輸有限会社",
		hiragana: "きたここのえきうんゆゆうげんがいしゃ"
	},
	{
		original: "城田運送",
		hiragana: "しろたうんそう"
	},
	{
		original: "ミナミ物流",
		hiragana: "みなみぶつりゅう"
	},
	{
		original: "青部急行",
		hiragana: "あおぶきゅうこう"
	},
	{
		original: "とどろき運輸",
		hiragana: "とどろきうんゆ"
	},
	{
		original: "和興運送",
		hiragana: "わきょううんそう"
	},
	{
		original: "常成",
		hiragana: "つねなり"
	},
	{
		original: "有限会社アールライン",
		hiragana: "ゆうげんがいしゃあーるらいん"
	},
	{
		original: "有限会社岡本配送",
		hiragana: "ゆうげんがいしゃおかもとはいそう"
	},
	{
		original: "茂平運送有限会社",
		hiragana: "もへいうんそうゆうげんがいしゃ"
	},
	{
		original: "ＫＵ　ＴＲＵＣＫ＆ＴＹＲＥ　ＳＥＲＶＩＣＥ",
		hiragana: "ＫＵ　ＴＲＵＣＫ＆ＴＹＲＥ　ＳＥＲＶＩＣＥ"
	},
	{
		original: "大地物流",
		hiragana: "だいちぶつりゅう"
	},
	{
		original: "桑栄運輸",
		hiragana: "くわえいうんゆ"
	},
	{
		original: "永和運輸",
		hiragana: "ひさかずうんゆ"
	},
	{
		original: "有限会社新洋通商",
		hiragana: "ゆうげんがいしゃしんようつうしょう"
	},
	{
		original: "谷地運送",
		hiragana: "やちうんそう"
	},
	{
		original: "ソニックラン",
		hiragana: "そにっくらん"
	},
	{
		original: "林運送有限会社",
		hiragana: "はやしうんそうゆうげんがいしゃ"
	},
	{
		original: "オザキ運送",
		hiragana: "おざきうんそう"
	},
	{
		original: "千代工業",
		hiragana: "ちよこうぎょう"
	},
	{
		original: "西町運送",
		hiragana: "にしまちうんそう"
	},
	{
		original: "有限会社マルヤス運送",
		hiragana: "ゆうげんがいしゃまるやすうんそう"
	},
	{
		original: "東部運輸",
		hiragana: "とうぶうんゆ"
	},
	{
		original: "都築運輸",
		hiragana: "つづきうんゆ"
	},
	{
		original: "港鋼運",
		hiragana: "みなとこううん"
	},
	{
		original: "総合トランステック",
		hiragana: "そうごうとらんすてっく"
	},
	{
		original: "洛友商事",
		hiragana: "らくともしょうじ"
	},
	{
		original: "樹商事",
		hiragana: "きしょうじ"
	},
	{
		original: "ＡＤＬ",
		hiragana: "ＡＤＬ"
	},
	{
		original: "有限会社島根急送",
		hiragana: "ゆうげんがいしゃしまねきゅうそう"
	},
	{
		original: "二葉観光運輸",
		hiragana: "ふたばかんこううんゆ"
	},
	{
		original: "井上運輸倉庫",
		hiragana: "いのうえうんゆそうこ"
	},
	{
		original: "山口運輸",
		hiragana: "やまぐちうんゆ"
	},
	{
		original: "スライブ",
		hiragana: "すらいぶ"
	},
	{
		original: "有限会社マルセ",
		hiragana: "ゆうげんがいしゃまるせ"
	},
	{
		original: "新川重機",
		hiragana: "しんかわじゅうき"
	},
	{
		original: "丸福",
		hiragana: "まるふく"
	},
	{
		original: "山田運輸",
		hiragana: "やまだうんゆ"
	},
	{
		original: "中部日軽",
		hiragana: "ちゅうぶにっけい"
	},
	{
		original: "エーツーエーロジコム",
		hiragana: "えーつーえーろじこむ"
	},
	{
		original: "中部陸運",
		hiragana: "ちゅうぶりくうん"
	},
	{
		original: "ジェイピーシー",
		hiragana: "じぇいぴーしー"
	},
	{
		original: "新横浜運送",
		hiragana: "しんよこはまうんそう"
	},
	{
		original: "アール梱包商事",
		hiragana: "あーるこんぽうしょうじ"
	},
	{
		original: "有限会社内山建材",
		hiragana: "ゆうげんがいしゃうちやまけんざい"
	},
	{
		original: "共栄運送",
		hiragana: "きょうえいうんそう"
	},
	{
		original: "利根総業",
		hiragana: "とねそうぎょう"
	},
	{
		original: "有限会社泰貴運輸",
		hiragana: "ゆうげんがいしゃやすたかうんゆ"
	},
	{
		original: "有限会社湾岸ライナー",
		hiragana: "ゆうげんがいしゃわんがんらいなー"
	},
	{
		original: "内藤運輸作業",
		hiragana: "ないとううんゆさぎょう"
	},
	{
		original: "富士運送",
		hiragana: "ふじうんそう"
	},
	{
		original: "北青果",
		hiragana: "きたせいか"
	},
	{
		original: "マルショウロジスティクス",
		hiragana: "まるしょうろじすてぃくす"
	},
	{
		original: "翼サービス",
		hiragana: "つばささーびす"
	},
	{
		original: "出水ダイキュー運輸",
		hiragana: "しゅっすいだいきゅーうんゆ"
	},
	{
		original: "マリヤ運輸有限会社",
		hiragana: "まりやうんゆゆうげんがいしゃ"
	},
	{
		original: "有限会社トラスト物流",
		hiragana: "ゆうげんがいしゃとらすとぶつりゅう"
	},
	{
		original: "協和運輸",
		hiragana: "きょうわうんゆ"
	},
	{
		original: "丸羽ロジテック",
		hiragana: "まるはねろじてっく"
	},
	{
		original: "有限会社大洋興業運送",
		hiragana: "ゆうげんがいしゃたいようこうぎょううんそう"
	},
	{
		original: "みどり運輸",
		hiragana: "みどりうんゆ"
	},
	{
		original: "丸福運輸",
		hiragana: "まるふくうんゆ"
	},
	{
		original: "有限会社木村運輸",
		hiragana: "ゆうげんがいしゃきむらうんゆ"
	},
	{
		original: "有限会社幸運輸",
		hiragana: "ゆうげんがいしゃこううんゆ"
	},
	{
		original: "有限会社カントラ",
		hiragana: "ゆうげんがいしゃかんとら"
	},
	{
		original: "正栄物流",
		hiragana: "しょうえいぶつりゅう"
	},
	{
		original: "パピー運輸有限会社",
		hiragana: "ぱぴーうんゆゆうげんがいしゃ"
	},
	{
		original: "湯沢運送",
		hiragana: "ゆざわうんそう"
	},
	{
		original: "木村商運",
		hiragana: "きむらしょううん"
	},
	{
		original: "江尻運輸",
		hiragana: "えじりうんゆ"
	},
	{
		original: "明野運輸有限会社",
		hiragana: "あけのうんゆゆうげんがいしゃ"
	},
	{
		original: "フジタ運輸倉庫",
		hiragana: "ふじたうんゆそうこ"
	},
	{
		original: "弘栄産業",
		hiragana: "こうえいさんぎょう"
	},
	{
		original: "有限会社アクティブ輸送",
		hiragana: "ゆうげんがいしゃあくてぃぶゆそう"
	},
	{
		original: "キタバ物流サービス",
		hiragana: "きたばぶつりゅうさーびす"
	},
	{
		original: "浅見運輸倉庫",
		hiragana: "あさみうんゆそうこ"
	},
	{
		original: "陸陽運輸",
		hiragana: "りくよううんゆ"
	},
	{
		original: "会津通商",
		hiragana: "あいづつうしょう"
	},
	{
		original: "有限会社石山",
		hiragana: "ゆうげんがいしゃいしやま"
	},
	{
		original: "尼崎北運送",
		hiragana: "あまがさききたうんそう"
	},
	{
		original: "東濃運輸",
		hiragana: "とうのううんゆ"
	},
	{
		original: "東磐交通",
		hiragana: "ひがしいわこうつう"
	},
	{
		original: "ハート・インターナショナル",
		hiragana: "はーと・いんたーなしょなる"
	},
	{
		original: "有限会社大豊陸送",
		hiragana: "ゆうげんがいしゃたいほうりくそう"
	},
	{
		original: "塩那陸送有限会社",
		hiragana: "えんなりくそうゆうげんがいしゃ"
	},
	{
		original: "有限会社大野流通商会",
		hiragana: "ゆうげんがいしゃおおのりゅうつうしょうかい"
	},
	{
		original: "有限会社三河物流",
		hiragana: "ゆうげんがいしゃみかわぶつりゅう"
	},
	{
		original: "関東エアーカーゴ",
		hiragana: "かんとうえあーかーご"
	},
	{
		original: "ロジフルジャパン",
		hiragana: "ろじふるじゃぱん"
	},
	{
		original: "ＭＡＢ",
		hiragana: "ＭＡＢ"
	},
	{
		original: "有限会社川崎運送",
		hiragana: "ゆうげんがいしゃかわさきうんそう"
	},
	{
		original: "旭運送",
		hiragana: "あさひうんそう"
	},
	{
		original: "若島急配",
		hiragana: "じゃくしまきゅうはい"
	},
	{
		original: "有限会社イーグルライン",
		hiragana: "ゆうげんがいしゃいーぐるらいん"
	},
	{
		original: "大信相互運輸",
		hiragana: "たいしんそうごうんゆ"
	},
	{
		original: "トラヴァンス",
		hiragana: "とらゔぁんす"
	},
	{
		original: "ぺがさす物流",
		hiragana: "ぺがさすぶつりゅう"
	},
	{
		original: "千代田運輸",
		hiragana: "ちよだうんゆ"
	},
	{
		original: "佐藤エンジニアサービス",
		hiragana: "さとうえんじにあさーびす"
	},
	{
		original: "東海通信資材サービス",
		hiragana: "とうかいつうしんしざいさーびす"
	},
	{
		original: "フジックス",
		hiragana: "ふじっくす"
	},
	{
		original: "カネイチ運輸",
		hiragana: "かねいちうんゆ"
	},
	{
		original: "竜洋運輸",
		hiragana: "りゅうよううんゆ"
	},
	{
		original: "有限会社拾井商事",
		hiragana: "ゆうげんがいしゃしゅういしょうじ"
	},
	{
		original: "有限会社タウンサービス",
		hiragana: "ゆうげんがいしゃたうんさーびす"
	},
	{
		original: "岡弘運輸",
		hiragana: "おかこううんゆ"
	},
	{
		original: "ＫＴＳ",
		hiragana: "ＫＴＳ"
	},
	{
		original: "尾西運輸",
		hiragana: "びさいうんゆ"
	},
	{
		original: "岐阜倉庫運輸",
		hiragana: "ぎふそうこうんゆ"
	},
	{
		original: "有限会社興運重機",
		hiragana: "ゆうげんがいしゃきょううんじゅうき"
	},
	{
		original: "ユタカ産業",
		hiragana: "ゆたかさんぎょう"
	},
	{
		original: "小林運輸",
		hiragana: "こばやしうんゆ"
	},
	{
		original: "三協トランスポート",
		hiragana: "さんきょうとらんすぽーと"
	},
	{
		original: "ハヤシ配送サービス",
		hiragana: "はやしはいそうさーびす"
	},
	{
		original: "矢部川運送有限会社",
		hiragana: "やべかわうんそうゆうげんがいしゃ"
	},
	{
		original: "藤原高速運輸",
		hiragana: "ふじわらこうそくうんゆ"
	},
	{
		original: "柴田運輸",
		hiragana: "しばたうんゆ"
	},
	{
		original: "中播運輸工業有限会社",
		hiragana: "なかばんうんゆこうぎょうゆうげんがいしゃ"
	},
	{
		original: "増一商事",
		hiragana: "ますいちしょうじ"
	},
	{
		original: "アイテック物流",
		hiragana: "あいてっくぶつりゅう"
	},
	{
		original: "東九州運輸有限会社",
		hiragana: "ひがしきゅうしゅううんゆゆうげんがいしゃ"
	},
	{
		original: "中部システム有限会社",
		hiragana: "ちゅうぶしすてむゆうげんがいしゃ"
	},
	{
		original: "有限会社協伸輸送",
		hiragana: "ゆうげんがいしゃきょうしんゆそう"
	},
	{
		original: "成川運輸",
		hiragana: "なりかわうんゆ"
	},
	{
		original: "北勢テクノ",
		hiragana: "きたせいてくの"
	},
	{
		original: "江川商運",
		hiragana: "えがわしょううん"
	},
	{
		original: "東興運輸",
		hiragana: "とうこううんゆ"
	},
	{
		original: "山陽運輸",
		hiragana: "さんよううんゆ"
	},
	{
		original: "有限会社初谷運送店",
		hiragana: "ゆうげんがいしゃはつたにうんそうてん"
	},
	{
		original: "タツキ輸送",
		hiragana: "たつきゆそう"
	},
	{
		original: "山下運輸",
		hiragana: "やましたうんゆ"
	},
	{
		original: "沖建材運輸",
		hiragana: "おきけんざいうんゆ"
	},
	{
		original: "木津運送",
		hiragana: "きづうんそう"
	},
	{
		original: "有限会社コーシン物流",
		hiragana: "ゆうげんがいしゃこーしんぶつりゅう"
	},
	{
		original: "伊東運送",
		hiragana: "いとううんそう"
	},
	{
		original: "双葉重機リース",
		hiragana: "ふたばじゅうきりーす"
	},
	{
		original: "京都三運社",
		hiragana: "きょうとさんうんしゃ"
	},
	{
		original: "広伸運輸",
		hiragana: "ひろのぶうんゆ"
	},
	{
		original: "マルトモ運輸",
		hiragana: "まるともうんゆ"
	},
	{
		original: "明光運輸",
		hiragana: "あきみつうんゆ"
	},
	{
		original: "東和リース",
		hiragana: "とうわりーす"
	},
	{
		original: "有限会社中国軽急便センター",
		hiragana: "ゆうげんがいしゃちゅうごくけいきゅうびんせんたー"
	},
	{
		original: "有限会社九州ワールド運輸",
		hiragana: "ゆうげんがいしゃきゅうしゅうわーるどうんゆ"
	},
	{
		original: "サン・フェローズ",
		hiragana: "さん・ふぇろーず"
	},
	{
		original: "人吉ダイキュー運輸",
		hiragana: "ひとよしだいきゅーうんゆ"
	},
	{
		original: "後藤ロジテック",
		hiragana: "ごとうろじてっく"
	},
	{
		original: "トラスト",
		hiragana: "とらすと"
	},
	{
		original: "東鉄運輸",
		hiragana: "とうてつうんゆ"
	},
	{
		original: "三協配送",
		hiragana: "さんきょうはいそう"
	},
	{
		original: "熊野小型運送",
		hiragana: "くまのこがたうんそう"
	},
	{
		original: "豊伸運輸",
		hiragana: "ゆたかしんうんゆ"
	},
	{
		original: "大長郵便輸送",
		hiragana: "たいちょうゆうびんゆそう"
	},
	{
		original: "酒井運送",
		hiragana: "さかいうんそう"
	},
	{
		original: "有限会社清水運送",
		hiragana: "ゆうげんがいしゃしみずうんそう"
	},
	{
		original: "上総通運",
		hiragana: "かずさつううん"
	},
	{
		original: "有限会社八洲ロジテック",
		hiragana: "ゆうげんがいしゃはっしゅうろじてっく"
	},
	{
		original: "浩栄高速運輸",
		hiragana: "ひろしさかえこうそくうんゆ"
	},
	{
		original: "エスエスサービス",
		hiragana: "えすえすさーびす"
	},
	{
		original: "有限会社タブレット",
		hiragana: "ゆうげんがいしゃたぶれっと"
	},
	{
		original: "有限会社丸和運送",
		hiragana: "ゆうげんがいしゃまるわうんそう"
	},
	{
		original: "せとうち総業",
		hiragana: "せとうちそうぎょう"
	},
	{
		original: "有限会社鈴木運送",
		hiragana: "ゆうげんがいしゃすずきうんそう"
	},
	{
		original: "雅商運",
		hiragana: "まさしょううん"
	},
	{
		original: "有限会社オイカワ",
		hiragana: "ゆうげんがいしゃおいかわ"
	},
	{
		original: "中央運送",
		hiragana: "ちゅうおううんそう"
	},
	{
		original: "マルゼンレックス",
		hiragana: "まるぜんれっくす"
	},
	{
		original: "サンヨー運送",
		hiragana: "さんよーうんそう"
	},
	{
		original: "有限会社岩手運送",
		hiragana: "ゆうげんがいしゃいわてうんそう"
	},
	{
		original: "永田興業",
		hiragana: "ながたこうぎょう"
	},
	{
		original: "テスコ商運",
		hiragana: "てすこしょううん"
	},
	{
		original: "三農サービス",
		hiragana: "さんのうさーびす"
	},
	{
		original: "幸伸運送有限会社",
		hiragana: "ゆきのぶうんそうゆうげんがいしゃ"
	},
	{
		original: "有限会社山下運送",
		hiragana: "ゆうげんがいしゃやましたうんそう"
	},
	{
		original: "日本陸運",
		hiragana: "にっぽんりくうん"
	},
	{
		original: "北都高速運輸倉庫黒部",
		hiragana: "ほくとこうそくうんゆそうこくろべ"
	},
	{
		original: "有限会社日本軽貨物仙台",
		hiragana: "ゆうげんがいしゃにっぽんけいかもつせんだい"
	},
	{
		original: "シンシアライン",
		hiragana: "しんしあらいん"
	},
	{
		original: "多摩生コンクリート工業",
		hiragana: "たまなまこんくりーとこうぎょう"
	},
	{
		original: "有限会社カワノトータルサービス",
		hiragana: "ゆうげんがいしゃかわのとーたるさーびす"
	},
	{
		original: "有限会社蟹江通商",
		hiragana: "ゆうげんがいしゃかにえつうしょう"
	},
	{
		original: "関根運送",
		hiragana: "せきねうんそう"
	},
	{
		original: "三和運送",
		hiragana: "さんわうんそう"
	},
	{
		original: "クレベ運送",
		hiragana: "くれべうんそう"
	},
	{
		original: "カトー物流",
		hiragana: "かとーぶつりゅう"
	},
	{
		original: "山正マーケティングサービス",
		hiragana: "やませいまーけてぃんぐさーびす"
	},
	{
		original: "ＭＨ　ＣＡＲＧＯ",
		hiragana: "ＭＨ　ＣＡＲＧＯ"
	},
	{
		original: "須貝運輸",
		hiragana: "すがいうんゆ"
	},
	{
		original: "有限会社福田運送",
		hiragana: "ゆうげんがいしゃふくだうんそう"
	},
	{
		original: "有限会社ヨコミセ",
		hiragana: "ゆうげんがいしゃよこみせ"
	},
	{
		original: "栗原運送",
		hiragana: "くりはらうんそう"
	},
	{
		original: "坂井運輸",
		hiragana: "さかいうんゆ"
	},
	{
		original: "テーケー物流サービス",
		hiragana: "てーけーぶつりゅうさーびす"
	},
	{
		original: "有限会社日浦興業",
		hiragana: "ゆうげんがいしゃひうらこうぎょう"
	},
	{
		original: "ＺＥＲＯ－ＯＮＥ",
		hiragana: "ＺＥＲＯ－ＯＮＥ"
	},
	{
		original: "矢野物流サービス",
		hiragana: "やのぶつりゅうさーびす"
	},
	{
		original: "有限会社岩井運送",
		hiragana: "ゆうげんがいしゃいわいうんそう"
	},
	{
		original: "有限会社ハッピースマイルサービス",
		hiragana: "ゆうげんがいしゃはっぴーすまいるさーびす"
	},
	{
		original: "一乗梱包運輸",
		hiragana: "いちじょうこんぽううんゆ"
	},
	{
		original: "河芸運輸",
		hiragana: "かわげうんゆ"
	},
	{
		original: "山上運輸",
		hiragana: "やまがみうんゆ"
	},
	{
		original: "光成",
		hiragana: "みつなり"
	},
	{
		original: "大伸",
		hiragana: "たいしん"
	},
	{
		original: "有限会社ミスタートラック",
		hiragana: "ゆうげんがいしゃみすたーとらっく"
	},
	{
		original: "大信運送",
		hiragana: "たいしんうんそう"
	},
	{
		original: "有限会社城寛商事",
		hiragana: "ゆうげんがいしゃしろひろししょうじ"
	},
	{
		original: "宮運輸倉庫",
		hiragana: "みやうんゆそうこ"
	},
	{
		original: "益子工業",
		hiragana: "ましここうぎょう"
	},
	{
		original: "ＮＥＸ",
		hiragana: "ＮＥＸ"
	},
	{
		original: "丸井運送",
		hiragana: "まるいうんそう"
	},
	{
		original: "浜栄倉庫",
		hiragana: "はまえいくらこ"
	},
	{
		original: "木村運輸有限会社",
		hiragana: "きむらうんゆゆうげんがいしゃ"
	},
	{
		original: "岡崎運送",
		hiragana: "おかざきうんそう"
	},
	{
		original: "たち建設運輸",
		hiragana: "たちけんせつうんゆ"
	},
	{
		original: "エスケイライン",
		hiragana: "えすけいらいん"
	},
	{
		original: "フレンズ",
		hiragana: "ふれんず"
	},
	{
		original: "有限会社ライジング",
		hiragana: "ゆうげんがいしゃらいじんぐ"
	},
	{
		original: "安田商事運輸",
		hiragana: "やすだしょうじうんゆ"
	},
	{
		original: "マコト運輸",
		hiragana: "まことうんゆ"
	},
	{
		original: "坂川建設鉱業",
		hiragana: "さかがわけんせつこうぎょう"
	},
	{
		original: "クラヤマ産業",
		hiragana: "くらやまさんぎょう"
	},
	{
		original: "岐阜流通",
		hiragana: "ぎふりゅうつう"
	},
	{
		original: "佐良山運送",
		hiragana: "さりょうやまうんそう"
	},
	{
		original: "三星・運送",
		hiragana: "みつぼし・うんそう"
	},
	{
		original: "丸正運輸",
		hiragana: "まるしょううんゆ"
	},
	{
		original: "マルモ運輸",
		hiragana: "まるもうんゆ"
	},
	{
		original: "川口本間運輸",
		hiragana: "かわぐちほんまうんゆ"
	},
	{
		original: "エスピーディー",
		hiragana: "えすぴーでぃー"
	},
	{
		original: "鈴木商運",
		hiragana: "すずきしょううん"
	},
	{
		original: "丸中運送",
		hiragana: "まるなかうんそう"
	},
	{
		original: "サン・トランスポート",
		hiragana: "さん・とらんすぽーと"
	},
	{
		original: "北日本物流",
		hiragana: "きたにほんぶつりゅう"
	},
	{
		original: "有限会社中山運送店",
		hiragana: "ゆうげんがいしゃなかやまうんそうてん"
	},
	{
		original: "興商",
		hiragana: "こうしょう"
	},
	{
		original: "太田国際貨物ターミナル",
		hiragana: "おおたこくさいかもつたーみなる"
	},
	{
		original: "日建運輸",
		hiragana: "にっけんうんゆ"
	},
	{
		original: "有限会社商通",
		hiragana: "ゆうげんがいしゃしょうとおり"
	},
	{
		original: "三笠陸運",
		hiragana: "みかさりくうん"
	},
	{
		original: "福地運輸有限会社",
		hiragana: "ふくちうんゆゆうげんがいしゃ"
	},
	{
		original: "ミドリトランス",
		hiragana: "みどりとらんす"
	},
	{
		original: "有限会社丸中運輸",
		hiragana: "ゆうげんがいしゃまるなかうんゆ"
	},
	{
		original: "勢州運輸有限会社",
		hiragana: "せいしゅううんゆゆうげんがいしゃ"
	},
	{
		original: "山勇商事",
		hiragana: "やまいさみしょうじ"
	},
	{
		original: "エムカンパニー",
		hiragana: "えむかんぱにー"
	},
	{
		original: "ワクツ",
		hiragana: "わくつ"
	},
	{
		original: "ＴＭトランスポート",
		hiragana: "ＴＭとらんすぽーと"
	},
	{
		original: "高木運送",
		hiragana: "たかぎうんそう"
	},
	{
		original: "マスダ商運有限会社",
		hiragana: "ますだしょううんゆうげんがいしゃ"
	},
	{
		original: "ＴＮＫ",
		hiragana: "ＴＮＫ"
	},
	{
		original: "ティーエルジャパン",
		hiragana: "てぃーえるじゃぱん"
	},
	{
		original: "大同運送",
		hiragana: "だいどううんそう"
	},
	{
		original: "河内運送",
		hiragana: "かわうちうんそう"
	},
	{
		original: "丸千運輸",
		hiragana: "まるせんうんゆ"
	},
	{
		original: "有限会社伊藤運輸",
		hiragana: "ゆうげんがいしゃいとううんゆ"
	},
	{
		original: "西名古屋急送",
		hiragana: "にしなふるやきゅうそう"
	},
	{
		original: "北貨運輸",
		hiragana: "きたかうんゆ"
	},
	{
		original: "フジイ運送有限会社",
		hiragana: "ふじいうんそうゆうげんがいしゃ"
	},
	{
		original: "永信商事",
		hiragana: "えいしんしょうじ"
	},
	{
		original: "相川運輸",
		hiragana: "あいかわうんゆ"
	},
	{
		original: "本田運輸",
		hiragana: "ほんだうんゆ"
	},
	{
		original: "不二運輸倉庫",
		hiragana: "ふじうんゆそうこ"
	},
	{
		original: "高知名鉄急配",
		hiragana: "こうちめいてつきゅうはい"
	},
	{
		original: "福島石材運輸有限会社",
		hiragana: "ふくしませきざいうんゆゆうげんがいしゃ"
	},
	{
		original: "興真運送",
		hiragana: "きょうまことうんそう"
	},
	{
		original: "有限会社ブイ",
		hiragana: "ゆうげんがいしゃぶい"
	},
	{
		original: "有限会社幸運",
		hiragana: "ゆうげんがいしゃこううん"
	},
	{
		original: "浜岡運輸",
		hiragana: "はまおかうんゆ"
	},
	{
		original: "イワキ運輸",
		hiragana: "いわきうんゆ"
	},
	{
		original: "ＯＤＡ　ＴＲＵＣＫＳ",
		hiragana: "ＯＤＡ　ＴＲＵＣＫＳ"
	},
	{
		original: "ＡＰＲ　ＴＲＡＤＩＮＧ",
		hiragana: "ＡＰＲ　ＴＲＡＤＩＮＧ"
	},
	{
		original: "有限会社ＧＲＡＩＮ",
		hiragana: "ゆうげんがいしゃＧＲＡＩＮ"
	},
	{
		original: "アイジェント",
		hiragana: "あいじぇんと"
	},
	{
		original: "駿遠自動車",
		hiragana: "すんえんじどうしゃ"
	},
	{
		original: "浜松定温輸送",
		hiragana: "はままつていおんゆそう"
	},
	{
		original: "有限会社岡久運送",
		hiragana: "ゆうげんがいしゃおかひさうんそう"
	},
	{
		original: "エフ・ジー",
		hiragana: "えふ・じー"
	},
	{
		original: "龍泉運輸",
		hiragana: "りゅうせんうんゆ"
	},
	{
		original: "三陽梱包運送有限会社",
		hiragana: "さんようこんぽううんそうゆうげんがいしゃ"
	},
	{
		original: "谷口運輸",
		hiragana: "たにぐちうんゆ"
	},
	{
		original: "アズ物流サービス",
		hiragana: "あずぶつりゅうさーびす"
	},
	{
		original: "中谷運輸",
		hiragana: "なかたにうんゆ"
	},
	{
		original: "大阪トラック運送",
		hiragana: "おおさかとらっくうんそう"
	},
	{
		original: "竹本運送",
		hiragana: "たけもとうんそう"
	},
	{
		original: "インテグラル",
		hiragana: "いんてぐらる"
	},
	{
		original: "有限会社博栄運輸",
		hiragana: "ゆうげんがいしゃひろしえいうんゆ"
	},
	{
		original: "有限会社平井商運",
		hiragana: "ゆうげんがいしゃひらいしょううん"
	},
	{
		original: "大東物流",
		hiragana: "だいとうぶつりゅう"
	},
	{
		original: "大分総合運輸",
		hiragana: "おおいたそうごううんゆ"
	},
	{
		original: "エスイノベーション",
		hiragana: "えすいのべーしょん"
	},
	{
		original: "春日陸送",
		hiragana: "かすがりくそう"
	},
	{
		original: "友生物流",
		hiragana: "ともせいぶつりゅう"
	},
	{
		original: "石三",
		hiragana: "いしさん"
	},
	{
		original: "有限会社ハギモト",
		hiragana: "ゆうげんがいしゃはぎもと"
	},
	{
		original: "亀幸運輸",
		hiragana: "かめこううんゆ"
	},
	{
		original: "丸泉運輸",
		hiragana: "まるいずみうんゆ"
	},
	{
		original: "有限会社鈴木陸送",
		hiragana: "ゆうげんがいしゃすずきりくそう"
	},
	{
		original: "矢住陸運",
		hiragana: "やじゅうりくうん"
	},
	{
		original: "カリツー北海道",
		hiragana: "かりつーほっかいどう"
	},
	{
		original: "九州トランシア",
		hiragana: "きゅうしゅうとらんしあ"
	},
	{
		original: "澤畠物産運輸有限会社",
		hiragana: "さわはたぶっさんうんゆゆうげんがいしゃ"
	},
	{
		original: "大同運送",
		hiragana: "だいどううんそう"
	},
	{
		original: "長崎興業",
		hiragana: "ながさきこうぎょう"
	},
	{
		original: "木曽川興運",
		hiragana: "きそかわきょううん"
	},
	{
		original: "新旭川運輸",
		hiragana: "しんあさひかわうんゆ"
	},
	{
		original: "吉延物流",
		hiragana: "よしのぶぶつりゅう"
	},
	{
		original: "平田商事",
		hiragana: "ひらたしょうじ"
	},
	{
		original: "三重水産運輸有限会社",
		hiragana: "みえすいさんうんゆゆうげんがいしゃ"
	},
	{
		original: "荒木運輸",
		hiragana: "あらきうんゆ"
	},
	{
		original: "田島運送",
		hiragana: "たじまうんそう"
	},
	{
		original: "沖縄第一倉庫",
		hiragana: "おきなわだいいちそうこ"
	},
	{
		original: "有限会社岩倉急送",
		hiragana: "ゆうげんがいしゃいわくらきゅうそう"
	},
	{
		original: "日下部運輸有限会社",
		hiragana: "くさかべうんゆゆうげんがいしゃ"
	},
	{
		original: "ハロー・ネットワーク滋賀",
		hiragana: "はろー・ねっとわーくしが"
	},
	{
		original: "興栄運輸",
		hiragana: "きょうえいうんゆ"
	},
	{
		original: "大石小型運送有限会社",
		hiragana: "おおいしこがたうんそうゆうげんがいしゃ"
	},
	{
		original: "有限会社吉川重機",
		hiragana: "ゆうげんがいしゃよしかわじゅうき"
	},
	{
		original: "営農サービス有限会社",
		hiragana: "えいのうさーびすゆうげんがいしゃ"
	},
	{
		original: "中国運輸",
		hiragana: "ちゅうごくうんゆ"
	},
	{
		original: "豊明物流",
		hiragana: "とよあけぶつりゅう"
	},
	{
		original: "丸関運輸",
		hiragana: "まるかんうんゆ"
	},
	{
		original: "丹後陸送",
		hiragana: "たんごりくそう"
	},
	{
		original: "有限会社勇進運輸",
		hiragana: "ゆうげんがいしゃゆうしんうんゆ"
	},
	{
		original: "レイテック",
		hiragana: "れいてっく"
	},
	{
		original: "大阪サンワ",
		hiragana: "おおさかさんわ"
	},
	{
		original: "奥野運輸有限会社",
		hiragana: "おくのうんゆゆうげんがいしゃ"
	},
	{
		original: "広栄運輸",
		hiragana: "ひろえうんゆ"
	},
	{
		original: "真崎運送",
		hiragana: "まさきうんそう"
	},
	{
		original: "アストラ物流",
		hiragana: "あすとらぶつりゅう"
	},
	{
		original: "小島運送",
		hiragana: "こじまうんそう"
	},
	{
		original: "ツーイング",
		hiragana: "つーいんぐ"
	},
	{
		original: "三殿陸送有限会社",
		hiragana: "さんどのりくそうゆうげんがいしゃ"
	},
	{
		original: "大東運送",
		hiragana: "だいとううんそう"
	},
	{
		original: "兼藤コーポレーション",
		hiragana: "けんふじこーぽれーしょん"
	},
	{
		original: "昭和運輸倉庫",
		hiragana: "しょうわうんゆそうこ"
	},
	{
		original: "トラック陸送福井",
		hiragana: "とらっくりくそうふくい"
	},
	{
		original: "如月",
		hiragana: "きさらぎ"
	},
	{
		original: "井上運送店",
		hiragana: "いのうえうんそうてん"
	},
	{
		original: "武豊屋",
		hiragana: "たけとよや"
	},
	{
		original: "アルファ物流",
		hiragana: "あるふぁぶつりゅう"
	},
	{
		original: "谷沢運輸",
		hiragana: "たにざわうんゆ"
	},
	{
		original: "興亜運送",
		hiragana: "こうあうんそう"
	},
	{
		original: "イーストブレーン",
		hiragana: "いーすとぶれーん"
	},
	{
		original: "東神運輸",
		hiragana: "とうしんうんゆ"
	},
	{
		original: "美雪興業",
		hiragana: "みゆきこうぎょう"
	},
	{
		original: "日彩サービス",
		hiragana: "にちさいさーびす"
	},
	{
		original: "有限会社ウインズトランスポート",
		hiragana: "ゆうげんがいしゃういんずとらんすぽーと"
	},
	{
		original: "鶴信運輸",
		hiragana: "つるしんうんゆ"
	},
	{
		original: "竜栄商事",
		hiragana: "りゅうさかえしょうじ"
	},
	{
		original: "エヌピー運輸岩国",
		hiragana: "えぬぴーうんゆいわくに"
	},
	{
		original: "井橋運輸",
		hiragana: "いはしうんゆ"
	},
	{
		original: "日搬運輸有限会社",
		hiragana: "にちはんうんゆゆうげんがいしゃ"
	},
	{
		original: "谷正運輸",
		hiragana: "たにしょううんゆ"
	},
	{
		original: "河本商事",
		hiragana: "かわもとしょうじ"
	},
	{
		original: "アロワーズ",
		hiragana: "あろわーず"
	},
	{
		original: "有限会社長運送",
		hiragana: "ゆうげんがいしゃちょううんそう"
	},
	{
		original: "カワサキアグリサービス",
		hiragana: "かわさきあぐりさーびす"
	},
	{
		original: "有限会社栃木北部運送",
		hiragana: "ゆうげんがいしゃとちぎほくぶうんそう"
	},
	{
		original: "西村物流",
		hiragana: "にしむらぶつりゅう"
	},
	{
		original: "トーハク物流サービス",
		hiragana: "とーはくぶつりゅうさーびす"
	},
	{
		original: "エナジーサポートセンター",
		hiragana: "えなじーさぽーとせんたー"
	},
	{
		original: "関西物流システム",
		hiragana: "かんさいぶつりゅうしすてむ"
	},
	{
		original: "南進建設",
		hiragana: "なんしんけんせつ"
	},
	{
		original: "アスカ精工",
		hiragana: "あすかせいこう"
	},
	{
		original: "セグロジ",
		hiragana: "せぐろじ"
	},
	{
		original: "港祐産業有限会社",
		hiragana: "みなとすけさんぎょうゆうげんがいしゃ"
	},
	{
		original: "アンゼン陸運",
		hiragana: "あんぜんりくうん"
	},
	{
		original: "進藤運輸倉庫有限会社",
		hiragana: "しんどううんゆそうこゆうげんがいしゃ"
	},
	{
		original: "東港運輸",
		hiragana: "ひがしみなとうんゆ"
	},
	{
		original: "ダイショウ・ロジ",
		hiragana: "だいしょう・ろじ"
	},
	{
		original: "中部高速運輸",
		hiragana: "ちゅうぶこうそくうんゆ"
	},
	{
		original: "エストコーポレーション",
		hiragana: "えすとこーぽれーしょん"
	},
	{
		original: "昌穂運輸",
		hiragana: "まさほうんゆ"
	},
	{
		original: "植村運送",
		hiragana: "うえむらうんそう"
	},
	{
		original: "関藤運輸",
		hiragana: "せきふじうんゆ"
	},
	{
		original: "有限会社エムエスライン",
		hiragana: "ゆうげんがいしゃえむえすらいん"
	},
	{
		original: "荒川材木店",
		hiragana: "あらかわざいもくみせ"
	},
	{
		original: "藤井商店",
		hiragana: "ふじいしょうてん"
	},
	{
		original: "清興運輸",
		hiragana: "せいきょううんゆ"
	},
	{
		original: "塩屋運輸",
		hiragana: "しおやうんゆ"
	},
	{
		original: "有限会社雄翔",
		hiragana: "ゆうげんがいしゃおすしょう"
	},
	{
		original: "智商運輸",
		hiragana: "さとるしょううんゆ"
	},
	{
		original: "京豊運輸",
		hiragana: "きょうゆたかうんゆ"
	},
	{
		original: "有限会社南国物流",
		hiragana: "ゆうげんがいしゃなんごくぶつりゅう"
	},
	{
		original: "松川運送",
		hiragana: "まつかわうんそう"
	},
	{
		original: "サンライズ運輸倉庫",
		hiragana: "さんらいずうんゆそうこ"
	},
	{
		original: "平和貨物運送",
		hiragana: "へいわかもつうんそう"
	},
	{
		original: "日水運輸",
		hiragana: "にっすいうんゆ"
	},
	{
		original: "日米産業",
		hiragana: "にちべいさんぎょう"
	},
	{
		original: "大道企業",
		hiragana: "だいどうきぎょう"
	},
	{
		original: "中央トラック運送",
		hiragana: "ちゅうおうとらっくうんそう"
	},
	{
		original: "有限会社日伸",
		hiragana: "ゆうげんがいしゃにちしん"
	},
	{
		original: "有限会社トラフィック中村",
		hiragana: "ゆうげんがいしゃとらふぃっくなかむら"
	},
	{
		original: "松山名鉄急配",
		hiragana: "まつやまめいてつきゅうはい"
	},
	{
		original: "有限会社北海道アロー運輸",
		hiragana: "ゆうげんがいしゃほっかいどうあろーうんゆ"
	},
	{
		original: "有限会社リンクス",
		hiragana: "ゆうげんがいしゃりんくす"
	},
	{
		original: "三昌運輸倉庫",
		hiragana: "さんしょううんゆそうこ"
	},
	{
		original: "有限会社東経運輸",
		hiragana: "ゆうげんがいしゃとうけいうんゆ"
	},
	{
		original: "セカンド・ステージ",
		hiragana: "せかんど・すてーじ"
	},
	{
		original: "クルシマチルドライン",
		hiragana: "くるしまちるどらいん"
	},
	{
		original: "東南運輸倉庫",
		hiragana: "とうなんうんゆそうこ"
	},
	{
		original: "ユーディーエル",
		hiragana: "ゆーでぃーえる"
	},
	{
		original: "嶺北運輸",
		hiragana: "れいほくうんゆ"
	},
	{
		original: "タケウチライン",
		hiragana: "たけうちらいん"
	},
	{
		original: "酒井運送",
		hiragana: "さかいうんそう"
	},
	{
		original: "とまと通運",
		hiragana: "とまとつううん"
	},
	{
		original: "有限会社西部運輸",
		hiragana: "ゆうげんがいしゃせいぶうんゆ"
	},
	{
		original: "野島運送",
		hiragana: "のじまうんそう"
	},
	{
		original: "豊国自動車",
		hiragana: "とよくにじどうしゃ"
	},
	{
		original: "有限会社大橋運輸",
		hiragana: "ゆうげんがいしゃおおはしうんゆ"
	},
	{
		original: "開発運輸建設",
		hiragana: "かいはつうんゆけんせつ"
	},
	{
		original: "太西陸運",
		hiragana: "たにしりくうん"
	},
	{
		original: "昌南運輸",
		hiragana: "まさみなみうんゆ"
	},
	{
		original: "水野運送",
		hiragana: "みずのうんそう"
	},
	{
		original: "カクショウ運輸",
		hiragana: "かくしょううんゆ"
	},
	{
		original: "有限会社三雅急送",
		hiragana: "ゆうげんがいしゃさんまさきゅうそう"
	},
	{
		original: "有限会社エスゼットケー・コーポレーション",
		hiragana: "ゆうげんがいしゃえすぜっとけー・こーぽれーしょん"
	},
	{
		original: "有限会社扇通商",
		hiragana: "ゆうげんがいしゃおうぎつうしょう"
	},
	{
		original: "イシスネットワークス",
		hiragana: "いしすねっとわーくす"
	},
	{
		original: "静清貨物ターミナル",
		hiragana: "せいせいかもつたーみなる"
	},
	{
		original: "米澤運送",
		hiragana: "よねざわうんそう"
	},
	{
		original: "井住運送",
		hiragana: "いじゅううんそう"
	},
	{
		original: "二興倉庫",
		hiragana: "にきょうそうこ"
	},
	{
		original: "有限会社一物流",
		hiragana: "ゆうげんがいしゃいちもつりゅう"
	},
	{
		original: "ダイメックス",
		hiragana: "だいめっくす"
	},
	{
		original: "村尾運送",
		hiragana: "むらおうんそう"
	},
	{
		original: "キング運輸",
		hiragana: "きんぐうんゆ"
	},
	{
		original: "村田運送",
		hiragana: "むらたうんそう"
	},
	{
		original: "ティピーエス",
		hiragana: "てぃぴーえす"
	},
	{
		original: "三幸運輸",
		hiragana: "みつゆきうんゆ"
	},
	{
		original: "名藤",
		hiragana: "めいふじ"
	},
	{
		original: "アサカ急送サービス",
		hiragana: "あさかきゅうそうさーびす"
	},
	{
		original: "丸神運輸",
		hiragana: "まるかみうんゆ"
	},
	{
		original: "函港作業",
		hiragana: "はこみなとさぎょう"
	},
	{
		original: "ユニオン運輸",
		hiragana: "ゆにおんうんゆ"
	},
	{
		original: "大運倉庫",
		hiragana: "だいうんそうこ"
	},
	{
		original: "岡島物流",
		hiragana: "おかじまぶつりゅう"
	},
	{
		original: "丸亀急配",
		hiragana: "まるがめきゅうはい"
	},
	{
		original: "サンセット",
		hiragana: "さんせっと"
	},
	{
		original: "誠都運輸倉庫",
		hiragana: "まことみやこうんゆそうこ"
	},
	{
		original: "将賢通商",
		hiragana: "しょうさとしつうしょう"
	},
	{
		original: "向島運送",
		hiragana: "こうしまうんそう"
	},
	{
		original: "吉田運送",
		hiragana: "よしだうんそう"
	},
	{
		original: "戎屋運送",
		hiragana: "じゅうやうんそう"
	},
	{
		original: "ム限",
		hiragana: "むげん"
	},
	{
		original: "岡崎陸運",
		hiragana: "おかざきりくうん"
	},
	{
		original: "伊藤商事有限会社",
		hiragana: "いとうしょうじゆうげんがいしゃ"
	},
	{
		original: "ヤマカ運輸",
		hiragana: "やまかうんゆ"
	},
	{
		original: "共和運輸倉庫",
		hiragana: "きょうわうんゆそうこ"
	},
	{
		original: "プラッツ",
		hiragana: "ぷらっつ"
	},
	{
		original: "西京運輸倉庫",
		hiragana: "さいきょううんゆそうこ"
	},
	{
		original: "有限会社ＡＣＴＩＶＥ",
		hiragana: "ゆうげんがいしゃＡＣＴＩＶＥ"
	},
	{
		original: "市村総合サービス",
		hiragana: "いちむらそうごうさーびす"
	},
	{
		original: "有限会社ゆうせい運輸",
		hiragana: "ゆうげんがいしゃゆうせいうんゆ"
	},
	{
		original: "トータルサポート物流",
		hiragana: "とーたるさぽーとぶつりゅう"
	},
	{
		original: "百石貨物運送",
		hiragana: "ももいしかもつうんそう"
	},
	{
		original: "有限会社弘永興業",
		hiragana: "ゆうげんがいしゃひろしえいこうぎょう"
	},
	{
		original: "一急運送",
		hiragana: "いちきゅううんそう"
	},
	{
		original: "安川物流",
		hiragana: "やすかわぶつりゅう"
	},
	{
		original: "箕輪総合商事",
		hiragana: "みのわそうごうしょうじ"
	},
	{
		original: "三野津急送",
		hiragana: "みのつきゅうそう"
	},
	{
		original: "トランスネット沖縄",
		hiragana: "とらんすねっとおきなわ"
	},
	{
		original: "大野運送有限会社",
		hiragana: "おおのうんそうゆうげんがいしゃ"
	},
	{
		original: "アワロードサービス",
		hiragana: "あわろーどさーびす"
	},
	{
		original: "御船運送",
		hiragana: "みふねうんそう"
	},
	{
		original: "有限会社アキラ",
		hiragana: "ゆうげんがいしゃあきら"
	},
	{
		original: "フジ物流",
		hiragana: "ふじぶつりゅう"
	},
	{
		original: "豊田運送有限会社",
		hiragana: "とよだうんそうゆうげんがいしゃ"
	},
	{
		original: "シゲタイーエックス",
		hiragana: "しげたいーえっくす"
	},
	{
		original: "有限会社三光物流",
		hiragana: "ゆうげんがいしゃさんこうぶつりゅう"
	},
	{
		original: "河原田運送",
		hiragana: "かわらだうんそう"
	},
	{
		original: "クトク運輸倉庫",
		hiragana: "くとくうんゆそうこ"
	},
	{
		original: "カーゴラインメイホウ",
		hiragana: "かーごらいんめいほう"
	},
	{
		original: "青運",
		hiragana: "あおうん"
	},
	{
		original: "則竹運輸",
		hiragana: "のりたけうんゆ"
	},
	{
		original: "有限会社谷運送",
		hiragana: "ゆうげんがいしゃたにうんそう"
	},
	{
		original: "タイツウ運輸",
		hiragana: "たいつううんゆ"
	},
	{
		original: "関東低温物流",
		hiragana: "かんとうていおんぶつりゅう"
	},
	{
		original: "川藤運送有限会社",
		hiragana: "かわとううんそうゆうげんがいしゃ"
	},
	{
		original: "丸〆運送",
		hiragana: "まる〆うんそう"
	},
	{
		original: "有限会社豊栄運送",
		hiragana: "ゆうげんがいしゃとよさかうんそう"
	},
	{
		original: "那珂川運送",
		hiragana: "なかがわうんそう"
	},
	{
		original: "栄運送",
		hiragana: "えいうんそう"
	},
	{
		original: "有限会社隆盛物流",
		hiragana: "ゆうげんがいしゃりゅうせいぶつりゅう"
	},
	{
		original: "ニコニコ運送有限会社",
		hiragana: "にこにこうんそうゆうげんがいしゃ"
	},
	{
		original: "小林商事",
		hiragana: "こばやししょうじ"
	},
	{
		original: "丸八建設運輸",
		hiragana: "まるはちけんせつうんゆ"
	},
	{
		original: "浅田運送",
		hiragana: "あさだうんそう"
	},
	{
		original: "笠組",
		hiragana: "かさくみ"
	},
	{
		original: "有限会社ナカタ・ステーションリュウツー",
		hiragana: "ゆうげんがいしゃなかた・すてーしょんりゅうつー"
	},
	{
		original: "岡山臨港倉庫運輸",
		hiragana: "おかやまりんこうそうこうんゆ"
	},
	{
		original: "安永運輸",
		hiragana: "やすながうんゆ"
	},
	{
		original: "新潟タイセイ物流",
		hiragana: "にいがたたいせいぶつりゅう"
	},
	{
		original: "榛南ツバタ",
		hiragana: "しんみなみつばた"
	},
	{
		original: "海洋",
		hiragana: "かいよう"
	},
	{
		original: "有限会社福電サービス",
		hiragana: "ゆうげんがいしゃふくでんさーびす"
	},
	{
		original: "小林運送",
		hiragana: "こばやしうんそう"
	},
	{
		original: "有限会社郡山燃料輸送",
		hiragana: "ゆうげんがいしゃこうりやまねんりょうゆそう"
	},
	{
		original: "有限会社つちや",
		hiragana: "ゆうげんがいしゃつちや"
	},
	{
		original: "京神急送",
		hiragana: "けいしんきゅうそう"
	},
	{
		original: "有限会社射和運輸",
		hiragana: "ゆうげんがいしゃいさわうんゆ"
	},
	{
		original: "有限会社安東運輸",
		hiragana: "ゆうげんがいしゃあんとううんゆ"
	},
	{
		original: "真和運輸",
		hiragana: "まさかずうんゆ"
	},
	{
		original: "川﨑物流",
		hiragana: "かわかわぶつりゅう"
	},
	{
		original: "恭西商事",
		hiragana: "やすにししょうじ"
	},
	{
		original: "權六屋",
		hiragana: "ごんろくや"
	},
	{
		original: "内外運輸",
		hiragana: "ないがいうんゆ"
	},
	{
		original: "滝宮運送有限会社",
		hiragana: "たつのみやうんそうゆうげんがいしゃ"
	},
	{
		original: "有限会社エース商会",
		hiragana: "ゆうげんがいしゃえーすしょうかい"
	},
	{
		original: "ユニオンネットサービス",
		hiragana: "ゆにおんねっとさーびす"
	},
	{
		original: "東城運輸",
		hiragana: "とうじょううんゆ"
	},
	{
		original: "旭運輸倉庫",
		hiragana: "あさひうんゆそうこ"
	},
	{
		original: "有限会社中野高速運輸",
		hiragana: "ゆうげんがいしゃなかのこうそくうんゆ"
	},
	{
		original: "光洋産業",
		hiragana: "こうようさんぎょう"
	},
	{
		original: "京浜トランス",
		hiragana: "けいひんとらんす"
	},
	{
		original: "シマヤ",
		hiragana: "しまや"
	},
	{
		original: "千葉輸送",
		hiragana: "ちばゆそう"
	},
	{
		original: "丸八運輸有限会社",
		hiragana: "まるはちうんゆゆうげんがいしゃ"
	},
	{
		original: "ヤマキ運輸倉庫",
		hiragana: "やまきうんゆそうこ"
	},
	{
		original: "大栄運輸",
		hiragana: "だいえいうんゆ"
	},
	{
		original: "木村運送合資会社",
		hiragana: "きむらうんそうごうしがいしゃ"
	},
	{
		original: "飯島運輸",
		hiragana: "いいじまうんゆ"
	},
	{
		original: "南部運輸",
		hiragana: "なんぶうんゆ"
	},
	{
		original: "カネ秀関東急送",
		hiragana: "かねしゅうかんとうきゅうそう"
	},
	{
		original: "稲毛運送",
		hiragana: "いなげうんそう"
	},
	{
		original: "田中運輸",
		hiragana: "たなかうんゆ"
	},
	{
		original: "グローリー",
		hiragana: "ぐろーりー"
	},
	{
		original: "中越郵便輸送",
		hiragana: "なかごしゆうびんゆそう"
	},
	{
		original: "菱中自動車運輸",
		hiragana: "ひしなかじどうしゃうんゆ"
	},
	{
		original: "トラスト・ウィン",
		hiragana: "とらすと・うぃん"
	},
	{
		original: "日本海運輸",
		hiragana: "にほんかいうんゆ"
	},
	{
		original: "有限会社オダ",
		hiragana: "ゆうげんがいしゃおだ"
	},
	{
		original: "セッツエキスプレス",
		hiragana: "せっつえきすぷれす"
	},
	{
		original: "三輪製薬",
		hiragana: "みわせいやく"
	},
	{
		original: "有限会社大野園芸",
		hiragana: "ゆうげんがいしゃおおのえんげい"
	},
	{
		original: "大功運送",
		hiragana: "たいこううんそう"
	},
	{
		original: "東和海陸運輸",
		hiragana: "とうわかいりくうんゆ"
	},
	{
		original: "光洋運輸",
		hiragana: "こうよううんゆ"
	},
	{
		original: "道九運輸",
		hiragana: "みちきゅううんゆ"
	},
	{
		original: "有限会社ユニオントランスポート",
		hiragana: "ゆうげんがいしゃゆにおんとらんすぽーと"
	},
	{
		original: "新生運輸",
		hiragana: "しんせいうんゆ"
	},
	{
		original: "新和運輸",
		hiragana: "しんわうんゆ"
	},
	{
		original: "マキトランス福岡",
		hiragana: "まきとらんすふくおか"
	},
	{
		original: "四国総合流通",
		hiragana: "しこくそうごうりゅうつう"
	},
	{
		original: "西條商事",
		hiragana: "さいじょうしょうじ"
	},
	{
		original: "相馬物流",
		hiragana: "そうまぶつりゅう"
	},
	{
		original: "星野運輸",
		hiragana: "ほしのうんゆ"
	},
	{
		original: "協同物流",
		hiragana: "きょうどうぶつりゅう"
	},
	{
		original: "奥田運輸有限会社",
		hiragana: "おくだうんゆゆうげんがいしゃ"
	},
	{
		original: "有限会社エスケイリース",
		hiragana: "ゆうげんがいしゃえすけいりーす"
	},
	{
		original: "有限会社明優サービス",
		hiragana: "ゆうげんがいしゃあゆさーびす"
	},
	{
		original: "三和總業",
		hiragana: "さんわそうぎょう"
	},
	{
		original: "一宮急配",
		hiragana: "いちのみやきゅうはい"
	},
	{
		original: "サンキユー運送有限会社",
		hiragana: "さんきゆーうんそうゆうげんがいしゃ"
	},
	{
		original: "名阪運輸",
		hiragana: "めいはんうんゆ"
	},
	{
		original: "中村建設",
		hiragana: "なかむらけんせつ"
	},
	{
		original: "有限会社ブロードサービス",
		hiragana: "ゆうげんがいしゃぶろーどさーびす"
	},
	{
		original: "サンセン運輸有限会社",
		hiragana: "さんせんうんゆゆうげんがいしゃ"
	},
	{
		original: "有限会社とみなが急配",
		hiragana: "ゆうげんがいしゃとみながきゅうはい"
	},
	{
		original: "大真",
		hiragana: "だいまこと"
	},
	{
		original: "Ｗｅｅｄ",
		hiragana: "Ｗｅｅｄ"
	},
	{
		original: "石川運輸",
		hiragana: "いしかわうんゆ"
	},
	{
		original: "ライフサイクル",
		hiragana: "らいふさいくる"
	},
	{
		original: "八雲運輸商事",
		hiragana: "やくもうんゆしょうじ"
	},
	{
		original: "有限会社玖珠運送",
		hiragana: "ゆうげんがいしゃくすうんそう"
	},
	{
		original: "茨城中央運輸有限会社",
		hiragana: "いばらきちゅうおううんゆゆうげんがいしゃ"
	},
	{
		original: "原セントラルエクスプレス",
		hiragana: "はらせんとらるえくすぷれす"
	},
	{
		original: "岡昌運輸",
		hiragana: "おかしょううんゆ"
	},
	{
		original: "南高貨物自動車",
		hiragana: "みなみだかかもつじどうしゃ"
	},
	{
		original: "一関貨物自動車",
		hiragana: "いちのせきかもつじどうしゃ"
	},
	{
		original: "有限会社幹コーポレーション",
		hiragana: "ゆうげんがいしゃかんこーぽれーしょん"
	},
	{
		original: "有限会社ナカフジ運送",
		hiragana: "ゆうげんがいしゃなかふじうんそう"
	},
	{
		original: "有限会社ケイツーサービス",
		hiragana: "ゆうげんがいしゃけいつーさーびす"
	},
	{
		original: "防長運輸産業",
		hiragana: "ぼうちょううんゆさんぎょう"
	},
	{
		original: "みずき通商",
		hiragana: "みずきつうしょう"
	},
	{
		original: "愛媛合同物流",
		hiragana: "えひめごうどうぶつりゅう"
	},
	{
		original: "小早川運送",
		hiragana: "こばやかわうんそう"
	},
	{
		original: "東田運輸",
		hiragana: "ひがしだうんゆ"
	},
	{
		original: "有限会社平山運輸",
		hiragana: "ゆうげんがいしゃひらやまうんゆ"
	},
	{
		original: "藤通商ライン",
		hiragana: "ふじつうしょうらいん"
	},
	{
		original: "日本陸送",
		hiragana: "にっぽんりくそう"
	},
	{
		original: "鷹ノ羽陸運有限会社",
		hiragana: "たかのはねりくうんゆうげんがいしゃ"
	},
	{
		original: "ウロコ物流",
		hiragana: "うろこぶつりゅう"
	},
	{
		original: "有限会社友部流通",
		hiragana: "ゆうげんがいしゃともべりゅうつう"
	},
	{
		original: "有限会社ジェイユウ軽送",
		hiragana: "ゆうげんがいしゃじぇいゆうけいそう"
	},
	{
		original: "ククル",
		hiragana: "くくる"
	},
	{
		original: "横急運輸",
		hiragana: "よこきゅううんゆ"
	},
	{
		original: "大協運送",
		hiragana: "だいきょううんそう"
	},
	{
		original: "アズマ陸運",
		hiragana: "あずまりくうん"
	},
	{
		original: "繁高運送",
		hiragana: "しげたかうんそう"
	},
	{
		original: "洋悦ＴＲＡＦＦＩＣ",
		hiragana: "ひろしえつＴＲＡＦＦＩＣ"
	},
	{
		original: "ニチノー",
		hiragana: "にちのー"
	},
	{
		original: "Ａｄｕ・Ｔｒａ",
		hiragana: "Ａｄｕ・Ｔｒａ"
	},
	{
		original: "田島運輸",
		hiragana: "たじまうんゆ"
	},
	{
		original: "トランスポート・エス",
		hiragana: "とらんすぽーと・えす"
	},
	{
		original: "坂下貨物運送有限会社",
		hiragana: "さかしたかもつうんそうゆうげんがいしゃ"
	},
	{
		original: "有限会社大間々急送",
		hiragana: "ゆうげんがいしゃおおままきゅうそう"
	},
	{
		original: "澤田商事",
		hiragana: "さわだしょうじ"
	},
	{
		original: "大光陸運",
		hiragana: "おおみつりくうん"
	},
	{
		original: "有限会社良組",
		hiragana: "ゆうげんがいしゃりょうくみ"
	},
	{
		original: "共和商事",
		hiragana: "きょうわしょうじ"
	},
	{
		original: "大隅物流有限会社",
		hiragana: "おおすみぶつりゅうゆうげんがいしゃ"
	},
	{
		original: "鈴木運送",
		hiragana: "すずきうんそう"
	},
	{
		original: "有限会社サガミライングループ",
		hiragana: "ゆうげんがいしゃさがみらいんぐるーぷ"
	},
	{
		original: "三新運輸",
		hiragana: "さんしんうんゆ"
	},
	{
		original: "オークマ",
		hiragana: "おーくま"
	},
	{
		original: "エーアイエス",
		hiragana: "えーあいえす"
	},
	{
		original: "日信興運",
		hiragana: "にっしんきょううん"
	},
	{
		original: "有限会社道央物流",
		hiragana: "ゆうげんがいしゃどうおうぶつりゅう"
	},
	{
		original: "有限会社猶興運輸産業",
		hiragana: "ゆうげんがいしゃゆうきょううんゆさんぎょう"
	},
	{
		original: "ＡＩＣ",
		hiragana: "ＡＩＣ"
	},
	{
		original: "酒田ラインサービス",
		hiragana: "さかたらいんさーびす"
	},
	{
		original: "吉備急送有限会社",
		hiragana: "きびきゅうそうゆうげんがいしゃ"
	},
	{
		original: "更進物流",
		hiragana: "こうしんもつりゅう"
	},
	{
		original: "永建",
		hiragana: "えいけん"
	},
	{
		original: "山科運輸",
		hiragana: "やましなうんゆ"
	},
	{
		original: "平成運輸",
		hiragana: "へいせいうんゆ"
	},
	{
		original: "ニュートレーディングブリッジ",
		hiragana: "にゅーとれーでぃんぐぶりっじ"
	},
	{
		original: "有限会社最上運輸",
		hiragana: "ゆうげんがいしゃさいじょううんゆ"
	},
	{
		original: "谷口運輸",
		hiragana: "たにぐちうんゆ"
	},
	{
		original: "有限会社コールドシステム関西",
		hiragana: "ゆうげんがいしゃこーるどしすてむかんさい"
	},
	{
		original: "有限会社アユミ・ロジスティクス",
		hiragana: "ゆうげんがいしゃあゆみ・ろじすてぃくす"
	},
	{
		original: "北関東商事",
		hiragana: "きたかんとうしょうじ"
	},
	{
		original: "穴見商事運輸",
		hiragana: "あなけんしょうじうんゆ"
	},
	{
		original: "鹿足運送有限会社",
		hiragana: "かのあしうんそうゆうげんがいしゃ"
	},
	{
		original: "有限会社秋多運送",
		hiragana: "ゆうげんがいしゃあきたうんそう"
	},
	{
		original: "三由",
		hiragana: "みよし"
	},
	{
		original: "有限会社三浦運送",
		hiragana: "ゆうげんがいしゃみうらうんそう"
	},
	{
		original: "若狭輸送",
		hiragana: "わかさゆそう"
	},
	{
		original: "東金液輸",
		hiragana: "とうがねえきゆ"
	},
	{
		original: "有限会社アズキャリー",
		hiragana: "ゆうげんがいしゃあずきゃりー"
	},
	{
		original: "有限会社山修運送",
		hiragana: "ゆうげんがいしゃやまおさむうんそう"
	},
	{
		original: "不二配送",
		hiragana: "ふじはいそう"
	},
	{
		original: "九商運輸",
		hiragana: "きゅうしょううんゆ"
	},
	{
		original: "有限会社丸喜商店",
		hiragana: "ゆうげんがいしゃまるきしょうてん"
	},
	{
		original: "関越流通倉庫",
		hiragana: "かんえつりゅうつうそうこ"
	},
	{
		original: "有限会社桝形運送",
		hiragana: "ゆうげんがいしゃますがたうんそう"
	},
	{
		original: "鳥飼機工有限会社",
		hiragana: "とりがいきこうゆうげんがいしゃ"
	},
	{
		original: "白井運送",
		hiragana: "しらいうんそう"
	},
	{
		original: "筑後物流有限会社",
		hiragana: "ちくごぶつりゅうゆうげんがいしゃ"
	},
	{
		original: "有限会社中戸工業",
		hiragana: "ゆうげんがいしゃなかとこうぎょう"
	},
	{
		original: "ステラ物流",
		hiragana: "すてらぶつりゅう"
	},
	{
		original: "はと物流",
		hiragana: "はとぶつりゅう"
	},
	{
		original: "扶和物流",
		hiragana: "ふあえものりゅう"
	},
	{
		original: "ファーストカーゴ",
		hiragana: "ふぁーすとかーご"
	},
	{
		original: "小原運輸倉庫",
		hiragana: "こはらうんゆそうこ"
	},
	{
		original: "有限会社山田運送",
		hiragana: "ゆうげんがいしゃやまだうんそう"
	},
	{
		original: "アンサートランスポート",
		hiragana: "あんさーとらんすぽーと"
	},
	{
		original: "鈴木運送",
		hiragana: "すずきうんそう"
	},
	{
		original: "谷村運輸",
		hiragana: "たにむらうんゆ"
	},
	{
		original: "五色サービス運輸有限会社",
		hiragana: "ごしきさーびすうんゆゆうげんがいしゃ"
	},
	{
		original: "日成陸送",
		hiragana: "にっせいりくそう"
	},
	{
		original: "トータル物流",
		hiragana: "とーたるぶつりゅう"
	},
	{
		original: "東京弘済物流",
		hiragana: "とうきょうこうさいぶつりゅう"
	},
	{
		original: "大川通商",
		hiragana: "おおかわつうしょう"
	},
	{
		original: "中馬運輸",
		hiragana: "なかうまうんゆ"
	},
	{
		original: "山科運送",
		hiragana: "やましなうんそう"
	},
	{
		original: "鳥取貨物運送",
		hiragana: "とっとりかもつうんそう"
	},
	{
		original: "有限会社三洲運輸",
		hiragana: "ゆうげんがいしゃさんしゅううんゆ"
	},
	{
		original: "成友",
		hiragana: "しげとも"
	},
	{
		original: "有限会社アイリコーポレーション",
		hiragana: "ゆうげんがいしゃあいりこーぽれーしょん"
	},
	{
		original: "有限会社大土運輸",
		hiragana: "ゆうげんがいしゃだいどうんゆ"
	},
	{
		original: "有限会社英信運輸",
		hiragana: "ゆうげんがいしゃひでのぶうんゆ"
	},
	{
		original: "ＧＬＯＲＹ　ＳＵＰＰＯＲＴ",
		hiragana: "ＧＬＯＲＹ　ＳＵＰＰＯＲＴ"
	},
	{
		original: "玄海サイロ",
		hiragana: "げんかいさいろ"
	},
	{
		original: "ＮＴＫ",
		hiragana: "ＮＴＫ"
	},
	{
		original: "住之江",
		hiragana: "すみのえ"
	},
	{
		original: "有限会社ミヤビコーポレーション",
		hiragana: "ゆうげんがいしゃみやびこーぽれーしょん"
	},
	{
		original: "有限会社六十運輸",
		hiragana: "ゆうげんがいしゃろくじゅううんゆ"
	},
	{
		original: "城北清掃",
		hiragana: "じょうほくせいそう"
	},
	{
		original: "有限会社大原運送",
		hiragana: "ゆうげんがいしゃおおはらうんそう"
	},
	{
		original: "ニコプロジェクト",
		hiragana: "にこぷろじぇくと"
	},
	{
		original: "スマイルシステム",
		hiragana: "すまいるしすてむ"
	},
	{
		original: "日昭運輸",
		hiragana: "にっしょううんゆ"
	},
	{
		original: "有限会社清水商事",
		hiragana: "ゆうげんがいしゃしみずしょうこと"
	},
	{
		original: "角間川運送",
		hiragana: "かくまかわうんそう"
	},
	{
		original: "丸市運送",
		hiragana: "まるいちうんそう"
	},
	{
		original: "丸与運輸",
		hiragana: "まるようんゆ"
	},
	{
		original: "熊毛海陸運送",
		hiragana: "くまげかいりくうんそう"
	},
	{
		original: "ハイブリッジライン",
		hiragana: "はいぶりっじらいん"
	},
	{
		original: "小島物流",
		hiragana: "こじまぶつりゅう"
	},
	{
		original: "有限会社鴨島通商",
		hiragana: "ゆうげんがいしゃかもしまつうしょう"
	},
	{
		original: "ＳＥＣＴ　ＣＡＲＲＹ",
		hiragana: "ＳＥＣＴ　ＣＡＲＲＹ"
	},
	{
		original: "君津運送",
		hiragana: "きみつうんそう"
	},
	{
		original: "有限会社フジミ運輸",
		hiragana: "ゆうげんがいしゃふじみうんゆ"
	},
	{
		original: "Ｋ・Ｓテック",
		hiragana: "Ｋ・Ｓてっく"
	},
	{
		original: "幸和運輸",
		hiragana: "ゆきかずうんゆ"
	},
	{
		original: "オート運輸倉庫",
		hiragana: "おーとうんゆそうこ"
	},
	{
		original: "知立大興",
		hiragana: "ちりゅうたいこう"
	},
	{
		original: "金山運輸有限会社",
		hiragana: "かなやまうんゆゆうげんがいしゃ"
	},
	{
		original: "サンエス通商",
		hiragana: "さんえすつうしょう"
	},
	{
		original: "有限会社エフティライン",
		hiragana: "ゆうげんがいしゃえふてぃらいん"
	},
	{
		original: "有限会社鈴木建材総業",
		hiragana: "ゆうげんがいしゃすずきけんざいそうぎょう"
	},
	{
		original: "高知物流",
		hiragana: "こうちぶつりゅう"
	},
	{
		original: "帝都運輸機工",
		hiragana: "ていとうんゆきこう"
	},
	{
		original: "瀧ケ花運送",
		hiragana: "たきけはなうんそう"
	},
	{
		original: "有限会社観音寺急配社",
		hiragana: "ゆうげんがいしゃかんおんじきゅうはいしゃ"
	},
	{
		original: "和歌山運送",
		hiragana: "わかやまうんそう"
	},
	{
		original: "舟田運送有限会社",
		hiragana: "ふなだうんそうゆうげんがいしゃ"
	},
	{
		original: "西村運送有限会社",
		hiragana: "にしむらうんそうゆうげんがいしゃ"
	},
	{
		original: "東和運輸",
		hiragana: "とうわうんゆ"
	},
	{
		original: "開発運輸",
		hiragana: "かいはつうんゆ"
	},
	{
		original: "日通八戸運輸",
		hiragana: "にっつうはちのへうんゆ"
	},
	{
		original: "有限会社土公運送",
		hiragana: "ゆうげんがいしゃどくうんそう"
	},
	{
		original: "鴨島陸運有限会社",
		hiragana: "かもしまりくうんゆうげんがいしゃ"
	},
	{
		original: "三八運輸",
		hiragana: "さんぱちうんゆ"
	},
	{
		original: "有限会社三電商会",
		hiragana: "ゆうげんがいしゃさんでんしょうかい"
	},
	{
		original: "アスカ運送",
		hiragana: "あすかうんそう"
	},
	{
		original: "有限会社モリト商会",
		hiragana: "ゆうげんがいしゃもりとしょうかい"
	},
	{
		original: "新栄運送",
		hiragana: "しんえいうんそう"
	},
	{
		original: "みつわ運送有限会社",
		hiragana: "みつわうんそうゆうげんがいしゃ"
	},
	{
		original: "トップライン",
		hiragana: "とっぷらいん"
	},
	{
		original: "ヤマハラ",
		hiragana: "やまはら"
	},
	{
		original: "彩叶トランスポート",
		hiragana: "さいかのうとらんすぽーと"
	},
	{
		original: "知多岬運輸",
		hiragana: "ちたみさきうんゆ"
	},
	{
		original: "グランプリ流通サービス",
		hiragana: "ぐらんぷりりゅうつうさーびす"
	},
	{
		original: "北本運輸",
		hiragana: "きたもとうんゆ"
	},
	{
		original: "さしま通商",
		hiragana: "さしまつうしょう"
	},
	{
		original: "クイック",
		hiragana: "くいっく"
	},
	{
		original: "三光運送",
		hiragana: "さんこううんそう"
	},
	{
		original: "国分",
		hiragana: "こくぶん"
	},
	{
		original: "有限会社中新運輸",
		hiragana: "ゆうげんがいしゃちゅうしんうんゆ"
	},
	{
		original: "泰清倉庫",
		hiragana: "やすきよそうこ"
	},
	{
		original: "トクサン",
		hiragana: "とくさん"
	},
	{
		original: "光陽テクノサービス",
		hiragana: "こうようてくのさーびす"
	},
	{
		original: "日幸",
		hiragana: "にちさち"
	},
	{
		original: "中国ロジテム有限会社",
		hiragana: "ちゅうごくろじてむゆうげんがいしゃ"
	},
	{
		original: "有限会社堀本建設",
		hiragana: "ゆうげんがいしゃほりもとけんせつ"
	},
	{
		original: "有限会社丸石運輸",
		hiragana: "ゆうげんがいしゃまるいしうんゆ"
	},
	{
		original: "有限会社持永銘木",
		hiragana: "ゆうげんがいしゃもちながめいぼく"
	},
	{
		original: "有限会社ウルヴ",
		hiragana: "ゆうげんがいしゃうるゔ"
	},
	{
		original: "Ｋ２ＪＡＰＡＮ",
		hiragana: "Ｋ２ＪＡＰＡＮ"
	},
	{
		original: "あ印水産輸送有限会社",
		hiragana: "あいんすいさんゆそうゆうげんがいしゃ"
	},
	{
		original: "Ｈ．Ｓ．Ｂ",
		hiragana: "Ｈ．Ｓ．Ｂ"
	},
	{
		original: "北九丸善運輸",
		hiragana: "きたきゅうまるぜんうんゆ"
	},
	{
		original: "共進運輸",
		hiragana: "きょうしんうんゆ"
	},
	{
		original: "オーシマ",
		hiragana: "おーしま"
	},
	{
		original: "久保建材工業",
		hiragana: "くぼけんざいこうぎょう"
	},
	{
		original: "有限会社田中急送",
		hiragana: "ゆうげんがいしゃたなかきゅうそう"
	},
	{
		original: "杉村運送有限会社",
		hiragana: "すぎむらうんそうゆうげんがいしゃ"
	},
	{
		original: "丸一急送",
		hiragana: "まるいちきゅうそう"
	},
	{
		original: "有限会社村田商運",
		hiragana: "ゆうげんがいしゃむらたしょううん"
	},
	{
		original: "長栄商事",
		hiragana: "ちょうえいしょうじ"
	},
	{
		original: "有限会社テクノ物流",
		hiragana: "ゆうげんがいしゃてくのぶつりゅう"
	},
	{
		original: "幸栄運輸",
		hiragana: "ゆきえうんゆ"
	},
	{
		original: "みやび運輸商事",
		hiragana: "みやびうんゆしょうじ"
	},
	{
		original: "コトブキ運輸",
		hiragana: "ことぶきうんゆ"
	},
	{
		original: "真和建機運輸",
		hiragana: "まさかずけんきうんゆ"
	},
	{
		original: "廣建",
		hiragana: "こうけん"
	},
	{
		original: "皆央運輸",
		hiragana: "みなおううんゆ"
	},
	{
		original: "辻岡運輸",
		hiragana: "つじおかうんゆ"
	},
	{
		original: "本庄牛乳運輸有限会社",
		hiragana: "ほんじょうぎゅうにゅううんゆゆうげんがいしゃ"
	},
	{
		original: "共同運輸",
		hiragana: "きょうどううんゆ"
	},
	{
		original: "木暮運輸",
		hiragana: "こぐれうんゆ"
	},
	{
		original: "有限会社平川重機クレーン",
		hiragana: "ゆうげんがいしゃひらかわじゅうきくれーん"
	},
	{
		original: "有限会社城司物流",
		hiragana: "ゆうげんがいしゃしろつかさぶつりゅう"
	},
	{
		original: "岡運",
		hiragana: "おかうん"
	},
	{
		original: "金原運送店",
		hiragana: "かねはらうんそうてん"
	},
	{
		original: "有限会社南野物産急送",
		hiragana: "ゆうげんがいしゃみなみのぶっさんきゅうそう"
	},
	{
		original: "広畑運輸",
		hiragana: "ひろはたうんゆ"
	},
	{
		original: "ギアボックスカーゴ",
		hiragana: "ぎあぼっくすかーご"
	},
	{
		original: "ベアーライン",
		hiragana: "べあーらいん"
	},
	{
		original: "朝陽運輸",
		hiragana: "あさひうんゆ"
	},
	{
		original: "マルショウ物流",
		hiragana: "まるしょうぶつりゅう"
	},
	{
		original: "上三川運輸",
		hiragana: "かみのかわうんゆ"
	},
	{
		original: "トランス四日市",
		hiragana: "とらんすよっかいち"
	},
	{
		original: "長谷川運送",
		hiragana: "はせがわうんそう"
	},
	{
		original: "タイケイ商事",
		hiragana: "たいけいしょうじ"
	},
	{
		original: "群馬ドリーム",
		hiragana: "ぐんまどりーむ"
	},
	{
		original: "有限会社福元産業運輸",
		hiragana: "ゆうげんがいしゃふくもとさんぎょううんゆ"
	},
	{
		original: "有限会社エムライン",
		hiragana: "ゆうげんがいしゃえむらいん"
	},
	{
		original: "丸大運輸",
		hiragana: "まるだいうんゆ"
	},
	{
		original: "共栄工運",
		hiragana: "きょうえいこううん"
	},
	{
		original: "ビップ",
		hiragana: "びっぷ"
	},
	{
		original: "会津通商",
		hiragana: "あいづつうしょう"
	},
	{
		original: "有限会社北日本貨物",
		hiragana: "ゆうげんがいしゃきたにほんかもつ"
	},
	{
		original: "有限会社ミサキ流通サービス",
		hiragana: "ゆうげんがいしゃみさきりゅうつうさーびす"
	},
	{
		original: "オーアイロジテム",
		hiragana: "おーあいろじてむ"
	},
	{
		original: "トップライン",
		hiragana: "とっぷらいん"
	},
	{
		original: "有限会社小山運送",
		hiragana: "ゆうげんがいしゃおやまうんそう"
	},
	{
		original: "マルミ通商",
		hiragana: "まるみつうしょう"
	},
	{
		original: "村山運輸",
		hiragana: "むらやまうんゆ"
	},
	{
		original: "共和運輸",
		hiragana: "きょうわうんゆ"
	},
	{
		original: "有限会社竹澤運輸",
		hiragana: "ゆうげんがいしゃたけざわうんゆ"
	},
	{
		original: "関ヶ原運送",
		hiragana: "かんゖはらうんそう"
	},
	{
		original: "荒沢運送有限会社",
		hiragana: "あらさわうんそうゆうげんがいしゃ"
	},
	{
		original: "第一物流",
		hiragana: "だいいちぶつりゅう"
	},
	{
		original: "上野運輸",
		hiragana: "うえのうんゆ"
	},
	{
		original: "有限会社能登物流",
		hiragana: "ゆうげんがいしゃのとぶつりゅう"
	},
	{
		original: "米山運送有限会社",
		hiragana: "よねやまうんそうゆうげんがいしゃ"
	},
	{
		original: "藤倉運輸",
		hiragana: "ふじくらうんゆ"
	},
	{
		original: "有限会社奥州運輸",
		hiragana: "ゆうげんがいしゃおうしゅううんゆ"
	},
	{
		original: "菊地運輸",
		hiragana: "きくちうんゆ"
	},
	{
		original: "有限会社岩井運輸",
		hiragana: "ゆうげんがいしゃいわいうんゆ"
	},
	{
		original: "有限会社北本運輸",
		hiragana: "ゆうげんがいしゃきたもとうんゆ"
	},
	{
		original: "東洋運輸",
		hiragana: "とうよううんゆ"
	},
	{
		original: "有限会社大勝",
		hiragana: "ゆうげんがいしゃたいしょう"
	},
	{
		original: "ケー・シップ",
		hiragana: "けー・しっぷ"
	},
	{
		original: "大阪宮田運送",
		hiragana: "おおさかみやたうんそう"
	},
	{
		original: "有限会社盛南輸送",
		hiragana: "ゆうげんがいしゃせいなんゆそう"
	},
	{
		original: "溝口運輸",
		hiragana: "みぞぐちうんゆ"
	},
	{
		original: "京阪運送",
		hiragana: "けいはんうんそう"
	},
	{
		original: "アイベックス",
		hiragana: "あいべっくす"
	},
	{
		original: "ミタケ",
		hiragana: "みたけ"
	},
	{
		original: "エム・ピー・ディ",
		hiragana: "えむ・ぴー・でぃ"
	},
	{
		original: "アサヒエンタープライズ有限会社",
		hiragana: "あさひえんたーぷらいずゆうげんがいしゃ"
	},
	{
		original: "清水自動車運輸",
		hiragana: "しみずじどうしゃうんゆ"
	},
	{
		original: "Ｅプロジェクト",
		hiragana: "Ｅぷろじぇくと"
	},
	{
		original: "ミツワ物流",
		hiragana: "みつわぶつりゅう"
	},
	{
		original: "上新原運送",
		hiragana: "じょうしんはらうんそう"
	},
	{
		original: "大東運輸",
		hiragana: "だいとううんゆ"
	},
	{
		original: "合同通運有限会社",
		hiragana: "ごうどうつううんゆうげんがいしゃ"
	},
	{
		original: "青森ロイヤル運輸有限会社",
		hiragana: "あおもりろいやるうんゆゆうげんがいしゃ"
	},
	{
		original: "清家興業有限会社",
		hiragana: "せいけこうぎょうゆうげんがいしゃ"
	},
	{
		original: "三友運輸",
		hiragana: "みつともうんゆ"
	},
	{
		original: "河北運輸",
		hiragana: "かほくうんゆ"
	},
	{
		original: "三芳運輸倉庫",
		hiragana: "みよしうんゆそうこ"
	},
	{
		original: "有限会社名宝サービス",
		hiragana: "ゆうげんがいしゃめいほうさーびす"
	},
	{
		original: "昭和梱包運輸倉庫",
		hiragana: "しょうわこんぽううんゆそうこ"
	},
	{
		original: "粟津運送",
		hiragana: "あわずうんそう"
	},
	{
		original: "有限会社友成通商",
		hiragana: "ゆうげんがいしゃともなりつうしょう"
	},
	{
		original: "第二物流",
		hiragana: "だいにぶつりゅう"
	},
	{
		original: "有限会社山中運送店",
		hiragana: "ゆうげんがいしゃさんちゅううんそうてん"
	},
	{
		original: "第一落合ライト工業",
		hiragana: "だいいちおちあいらいとこうぎょう"
	},
	{
		original: "秋山配送有限会社",
		hiragana: "あきやまはいそうゆうげんがいしゃ"
	},
	{
		original: "ワカミヤ",
		hiragana: "わかみや"
	},
	{
		original: "博大運送有限会社",
		hiragana: "はくだいうんそうゆうげんがいしゃ"
	},
	{
		original: "ＴＡＳ",
		hiragana: "ＴＡＳ"
	},
	{
		original: "三光運送",
		hiragana: "さんこううんそう"
	},
	{
		original: "タイトー物流サービス",
		hiragana: "たいとーぶつりゅうさーびす"
	},
	{
		original: "まるまん倉庫",
		hiragana: "まるまんそうこ"
	},
	{
		original: "悠栄総合",
		hiragana: "ゆうえいそうごう"
	},
	{
		original: "福井車輌輸送",
		hiragana: "ふくいしゃりょうゆそう"
	},
	{
		original: "共立運輸",
		hiragana: "きょうりつうんゆ"
	},
	{
		original: "山内運送",
		hiragana: "やまうちうんそう"
	},
	{
		original: "東洋運送",
		hiragana: "とうよううんそう"
	},
	{
		original: "胆西運輸",
		hiragana: "たんにしうんゆ"
	},
	{
		original: "三協運輸",
		hiragana: "さんきょううんゆ"
	},
	{
		original: "是則西条運輸",
		hiragana: "これのりさいじょううんゆ"
	},
	{
		original: "有限会社フジイルートサービス",
		hiragana: "ゆうげんがいしゃふじいるーとさーびす"
	},
	{
		original: "小島トランスポート",
		hiragana: "こじまとらんすぽーと"
	},
	{
		original: "ジャック",
		hiragana: "じゃっく"
	},
	{
		original: "沢口運輸",
		hiragana: "さわぐちうんゆ"
	},
	{
		original: "城東物流サービス",
		hiragana: "じょうとうぶつりゅうさーびす"
	},
	{
		original: "有限会社又七梱包運輸",
		hiragana: "ゆうげんがいしゃまたしちこんぽううんゆ"
	},
	{
		original: "有限会社長坂運輸",
		hiragana: "ゆうげんがいしゃながさかうんゆ"
	},
	{
		original: "ＧＡＯ",
		hiragana: "ＧＡＯ"
	},
	{
		original: "有限会社小椋運送",
		hiragana: "ゆうげんがいしゃおぐらうんそう"
	},
	{
		original: "山田産商",
		hiragana: "やまださんしょう"
	},
	{
		original: "ベストワーク運輸",
		hiragana: "べすとわーくうんゆ"
	},
	{
		original: "有限会社ＭＩＫＩ物流",
		hiragana: "ゆうげんがいしゃＭＩＫＩぶつりゅう"
	},
	{
		original: "有限会社堺運輸",
		hiragana: "ゆうげんがいしゃさかいうんゆ"
	},
	{
		original: "オホーツクソーテック",
		hiragana: "おほーつくそーてっく"
	},
	{
		original: "佐那河内運送",
		hiragana: "さなごうちうんそう"
	},
	{
		original: "有限会社成増運送",
		hiragana: "ゆうげんがいしゃなりますうんそう"
	},
	{
		original: "広野運送有限会社",
		hiragana: "こうやうんそうゆうげんがいしゃ"
	},
	{
		original: "小野寺建材",
		hiragana: "おのでらけんざい"
	},
	{
		original: "エスケイ運輸",
		hiragana: "えすけいうんゆ"
	},
	{
		original: "札陸運輸",
		hiragana: "さつりくうんゆ"
	},
	{
		original: "ハリマ興業運輸",
		hiragana: "はりまこうぎょううんゆ"
	},
	{
		original: "産建",
		hiragana: "さんけん"
	},
	{
		original: "栄鈴",
		hiragana: "さかえすず"
	},
	{
		original: "下川運送",
		hiragana: "しもかわうんそう"
	},
	{
		original: "内藤商事",
		hiragana: "ないとうしょうじ"
	},
	{
		original: "城内運輸",
		hiragana: "じょうないうんゆ"
	},
	{
		original: "アイセイ運輸",
		hiragana: "あいせいうんゆ"
	},
	{
		original: "日本梱送",
		hiragana: "にっぽんこんそう"
	},
	{
		original: "長府急配",
		hiragana: "ちょうふきゅうはい"
	},
	{
		original: "有限会社三枝商事",
		hiragana: "ゆうげんがいしゃさえぐさしょうじ"
	},
	{
		original: "大広運輸",
		hiragana: "だいこううんゆ"
	},
	{
		original: "大隅運輸",
		hiragana: "おおすみうんゆ"
	},
	{
		original: "下司運送",
		hiragana: "げすうんそう"
	},
	{
		original: "駿河流通",
		hiragana: "するがりゅうつう"
	},
	{
		original: "開道",
		hiragana: "かいどう"
	},
	{
		original: "有限会社旭興産",
		hiragana: "ゆうげんがいしゃあさひこうさん"
	},
	{
		original: "東部運輸",
		hiragana: "とうぶうんゆ"
	},
	{
		original: "エビス物流",
		hiragana: "えびすぶつりゅう"
	},
	{
		original: "大栄物流サービス有限会社",
		hiragana: "だいえいぶつりゅうさーびすゆうげんがいしゃ"
	},
	{
		original: "遠州協同運輸倉庫有限会社",
		hiragana: "えんしゅうきょうどううんゆそうこゆうげんがいしゃ"
	},
	{
		original: "日之出運送",
		hiragana: "ひのでうんそう"
	},
	{
		original: "三江線運輸有限会社",
		hiragana: "さんこうせんうんゆゆうげんがいしゃ"
	},
	{
		original: "石昌運輸有限会社",
		hiragana: "いししょううんゆゆうげんがいしゃ"
	},
	{
		original: "ＡＩＲ",
		hiragana: "ＡＩＲ"
	},
	{
		original: "クルシマトランスポートライン",
		hiragana: "くるしまとらんすぽーとらいん"
	},
	{
		original: "有限会社共和運輸",
		hiragana: "ゆうげんがいしゃきょうわうんゆ"
	},
	{
		original: "有限会社武翔",
		hiragana: "ゆうげんがいしゃたけししょう"
	},
	{
		original: "堺商運",
		hiragana: "さかいしょううん"
	},
	{
		original: "有限会社佐々木商会",
		hiragana: "ゆうげんがいしゃささきしょうかい"
	},
	{
		original: "三原物産",
		hiragana: "みはらぶっさん"
	},
	{
		original: "シンセイプロロジスティクス",
		hiragana: "しんせいぷろろじすてぃくす"
	},
	{
		original: "大聖陸運",
		hiragana: "たいせいりくうん"
	},
	{
		original: "有限会社葉山運送",
		hiragana: "ゆうげんがいしゃはやまうんそう"
	},
	{
		original: "有限会社幸秀運送",
		hiragana: "ゆうげんがいしゃゆきひでうんそう"
	},
	{
		original: "大分丸運",
		hiragana: "おおいたまるうん"
	},
	{
		original: "中東北運輸",
		hiragana: "ちゅうとうきたうんゆ"
	},
	{
		original: "絆",
		hiragana: "きずな"
	},
	{
		original: "高橋急配有限会社",
		hiragana: "たかはしきゅうはいゆうげんがいしゃ"
	},
	{
		original: "福馬運輸",
		hiragana: "ふくうまうんゆ"
	},
	{
		original: "有限会社丸真運輸",
		hiragana: "ゆうげんがいしゃまるまことうんゆ"
	},
	{
		original: "吉田急配",
		hiragana: "よしだきゅうはい"
	},
	{
		original: "東松山運輸有限会社",
		hiragana: "ひがしまつやまうんゆゆうげんがいしゃ"
	},
	{
		original: "鷹来興運",
		hiragana: "たからいきょううん"
	},
	{
		original: "柳澤運送有限会社",
		hiragana: "やなぎさわうんそうゆうげんがいしゃ"
	},
	{
		original: "有限会社松家運送",
		hiragana: "ゆうげんがいしゃまついえうんそう"
	},
	{
		original: "有限会社土手商事",
		hiragana: "ゆうげんがいしゃどてしょうじ"
	},
	{
		original: "共栄運送有限会社",
		hiragana: "きょうえいうんそうゆうげんがいしゃ"
	},
	{
		original: "陣内運送",
		hiragana: "じんないうんそう"
	},
	{
		original: "ケーエム運輸有限会社",
		hiragana: "けーえむうんゆゆうげんがいしゃ"
	},
	{
		original: "城昇物流",
		hiragana: "しろのぼるぶつりゅう"
	},
	{
		original: "上松陸送",
		hiragana: "うえまつりくそう"
	},
	{
		original: "有限会社八交運輸",
		hiragana: "ゆうげんがいしゃはちこううんゆ"
	},
	{
		original: "熊谷ロジテム",
		hiragana: "くまがやろじてむ"
	},
	{
		original: "八ツ星運輸",
		hiragana: "はちつほしうんゆ"
	},
	{
		original: "Ｗ・Ａ",
		hiragana: "Ｗ・Ａ"
	},
	{
		original: "有限会社コーフク商運",
		hiragana: "ゆうげんがいしゃこーふくしょううん"
	},
	{
		original: "有限会社小林運送",
		hiragana: "ゆうげんがいしゃこばやしうんそう"
	},
	{
		original: "エヌライン",
		hiragana: "えぬらいん"
	},
	{
		original: "イーストン",
		hiragana: "いーすとん"
	},
	{
		original: "能生運輸",
		hiragana: "のううんゆ"
	},
	{
		original: "有限会社藤崎運送",
		hiragana: "ゆうげんがいしゃふじさきうんそう"
	},
	{
		original: "野口六郎運送店",
		hiragana: "のぐちろくろううんそうてん"
	},
	{
		original: "Ｔライン",
		hiragana: "Ｔらいん"
	},
	{
		original: "大日運輸",
		hiragana: "だいにちうんゆ"
	},
	{
		original: "天領",
		hiragana: "てんりょう"
	},
	{
		original: "プログレス・ファインド",
		hiragana: "ぷろぐれす・ふぁいんど"
	},
	{
		original: "天神運輸有限会社",
		hiragana: "てんじんうんゆゆうげんがいしゃ"
	},
	{
		original: "前興運輸",
		hiragana: "まえきょううんゆ"
	},
	{
		original: "鶴見",
		hiragana: "つるみ"
	},
	{
		original: "有限会社伯備運輸",
		hiragana: "ゆうげんがいしゃはくびうんゆ"
	},
	{
		original: "有限会社オオマチ",
		hiragana: "ゆうげんがいしゃおおまち"
	},
	{
		original: "有限会社幌南運輸",
		hiragana: "ゆうげんがいしゃほろみなみうんゆ"
	},
	{
		original: "清華実業",
		hiragana: "せいかじつぎょう"
	},
	{
		original: "ワールドトランス",
		hiragana: "わーるどとらんす"
	},
	{
		original: "トランステック",
		hiragana: "とらんすてっく"
	},
	{
		original: "有限会社有紀運輸",
		hiragana: "ゆうげんがいしゃゆきうんゆ"
	},
	{
		original: "松田運送",
		hiragana: "まつだうんそう"
	},
	{
		original: "大阪丸市",
		hiragana: "おおさかまるいち"
	},
	{
		original: "京葉物流",
		hiragana: "けいようぶつりゅう"
	},
	{
		original: "友動運輸",
		hiragana: "ともどううんゆ"
	},
	{
		original: "檀紙運送有限会社",
		hiragana: "だんしうんそうゆうげんがいしゃ"
	},
	{
		original: "丸良運輸",
		hiragana: "まるりょううんゆ"
	},
	{
		original: "生麦運送有限会社",
		hiragana: "なまむぎうんそうゆうげんがいしゃ"
	},
	{
		original: "矢倉運輸倉庫",
		hiragana: "やぐらうんゆそうこ"
	},
	{
		original: "上平商運",
		hiragana: "かみたいらしょううん"
	},
	{
		original: "有限会社石野商会",
		hiragana: "ゆうげんがいしゃいしのしょうかい"
	},
	{
		original: "美唄松岡満運輸",
		hiragana: "びばいまつおかまんうんゆ"
	},
	{
		original: "大曲小型貨物自動車運送",
		hiragana: "おおまがりこがたかもつじどうしゃうんそう"
	},
	{
		original: "トス運輸",
		hiragana: "とすうんゆ"
	},
	{
		original: "ＩＴＯ",
		hiragana: "ＩＴＯ"
	},
	{
		original: "鹿前運輸",
		hiragana: "しかまえうんゆ"
	},
	{
		original: "日東通運",
		hiragana: "にっとうつううん"
	},
	{
		original: "ユーロエクスプレス",
		hiragana: "ゆーろえくすぷれす"
	},
	{
		original: "ツカダ運輸",
		hiragana: "つかだうんゆ"
	},
	{
		original: "有限会社トランスポートささき",
		hiragana: "ゆうげんがいしゃとらんすぽーとささき"
	},
	{
		original: "有限会社山之上運送",
		hiragana: "ゆうげんがいしゃやまゆきうえうんそう"
	},
	{
		original: "カネ儀運輸有限会社",
		hiragana: "かねぎうんゆゆうげんがいしゃ"
	},
	{
		original: "阪南運輸倉庫",
		hiragana: "はんなんうんゆそうこ"
	},
	{
		original: "東都輸送",
		hiragana: "とうとゆそう"
	},
	{
		original: "ウイング・ロジスティックサポート有限会社",
		hiragana: "ういんぐ・ろじすてぃっくさぽーとゆうげんがいしゃ"
	},
	{
		original: "有限会社県南運輸",
		hiragana: "ゆうげんがいしゃけんなんうんゆ"
	},
	{
		original: "陸王運輸",
		hiragana: "りくおううんゆ"
	},
	{
		original: "Ｎ・Ｋ",
		hiragana: "Ｎ・Ｋ"
	},
	{
		original: "栄幸運送",
		hiragana: "えいこううんそう"
	},
	{
		original: "大恵運輸",
		hiragana: "だいけいうんゆ"
	},
	{
		original: "カワサキ運輸",
		hiragana: "かわさきうんゆ"
	},
	{
		original: "東海運送有限会社",
		hiragana: "とうかいうんそうゆうげんがいしゃ"
	},
	{
		original: "新生運輸倉庫有限会社",
		hiragana: "しんせいうんゆそうこゆうげんがいしゃ"
	},
	{
		original: "有限会社ヒロ物流サービス",
		hiragana: "ゆうげんがいしゃひろぶつりゅうさーびす"
	},
	{
		original: "有限会社いなばん",
		hiragana: "ゆうげんがいしゃいなばん"
	},
	{
		original: "誠和運輸",
		hiragana: "せいわうんゆ"
	},
	{
		original: "東北三光",
		hiragana: "とうほくさんこう"
	},
	{
		original: "有限会社小野興産",
		hiragana: "ゆうげんがいしゃおのこうさん"
	},
	{
		original: "ＧＮＡ環境",
		hiragana: "ＧＮＡかんきょう"
	},
	{
		original: "ｅ－ｓｙｓｔｅｍ",
		hiragana: "ｅ－ｓｙｓｔｅｍ"
	},
	{
		original: "ヒーローズエキスプレス",
		hiragana: "ひーろーずえきすぷれす"
	},
	{
		original: "有限会社三河運輸",
		hiragana: "ゆうげんがいしゃみかわうんゆ"
	},
	{
		original: "清高運輸有限会社",
		hiragana: "きよたかうんゆゆうげんがいしゃ"
	},
	{
		original: "石川運送",
		hiragana: "いしかわうんそう"
	},
	{
		original: "広島光陽陸運",
		hiragana: "ひろしまこうようりくうん"
	},
	{
		original: "浪川運輸",
		hiragana: "なみかわうんゆ"
	},
	{
		original: "アライドコーポレーション",
		hiragana: "あらいどこーぽれーしょん"
	},
	{
		original: "有限会社大橋通商運輸",
		hiragana: "ゆうげんがいしゃおおはしつうしょううんゆ"
	},
	{
		original: "サムライＥＸＰ",
		hiragana: "さむらいＥＸＰ"
	},
	{
		original: "有限会社パール運送",
		hiragana: "ゆうげんがいしゃぱーるうんそう"
	},
	{
		original: "有限会社松下運送",
		hiragana: "ゆうげんがいしゃまつしたうんそう"
	},
	{
		original: "有限会社新やしま",
		hiragana: "ゆうげんがいしゃしんやしま"
	},
	{
		original: "ライズ運輸",
		hiragana: "らいずうんゆ"
	},
	{
		original: "ＨＴＨロジ",
		hiragana: "ＨＴＨろじ"
	},
	{
		original: "フェリスウィール",
		hiragana: "ふぇりすうぃーる"
	},
	{
		original: "梅原商事運輸",
		hiragana: "うめはらしょうじうんゆ"
	},
	{
		original: "志守物流",
		hiragana: "こころざししゅぶつりゅう"
	},
	{
		original: "川西運送有限会社",
		hiragana: "かわにしうんそうゆうげんがいしゃ"
	},
	{
		original: "田中運輸",
		hiragana: "たなかうんゆ"
	},
	{
		original: "東西運輸",
		hiragana: "とうざいうんゆ"
	},
	{
		original: "有限会社葵興産",
		hiragana: "ゆうげんがいしゃあおいこうさん"
	},
	{
		original: "ファームランド",
		hiragana: "ふぁーむらんど"
	},
	{
		original: "恵武急便有限会社",
		hiragana: "めぐみたけしきゅうびんゆうげんがいしゃ"
	},
	{
		original: "東部配達",
		hiragana: "とうぶはいたつ"
	},
	{
		original: "有限会社佐藤運輸",
		hiragana: "ゆうげんがいしゃさとううんゆ"
	},
	{
		original: "有限会社デイリーダイレクト",
		hiragana: "ゆうげんがいしゃでいりーだいれくと"
	},
	{
		original: "ＧＯＯＤ　ＦＲＩＥＮＤ",
		hiragana: "ＧＯＯＤ　ＦＲＩＥＮＤ"
	},
	{
		original: "有限会社ビーエスホットワーク",
		hiragana: "ゆうげんがいしゃびーえすほっとわーく"
	},
	{
		original: "礒辺運輸有限会社",
		hiragana: "ぎへんうんゆゆうげんがいしゃ"
	},
	{
		original: "ケイ・アンド・エヌ",
		hiragana: "けい・あんど・えぬ"
	},
	{
		original: "京葉臨海通運",
		hiragana: "けいようりんかいつううん"
	},
	{
		original: "井上運輸商事",
		hiragana: "いのうえうんゆしょうじ"
	},
	{
		original: "丸中運輸",
		hiragana: "まるなかうんゆ"
	},
	{
		original: "ミヤビコーポレーション",
		hiragana: "みやびこーぽれーしょん"
	},
	{
		original: "有限会社サカノ商運",
		hiragana: "ゆうげんがいしゃさかのしょううん"
	},
	{
		original: "稲沢運輸",
		hiragana: "いなざわうんゆ"
	},
	{
		original: "芯和",
		hiragana: "しんわ"
	},
	{
		original: "有限会社ユーラインサービス",
		hiragana: "ゆうげんがいしゃゆーらいんさーびす"
	},
	{
		original: "南港重量運輸",
		hiragana: "なんこうじゅうりょううんゆ"
	},
	{
		original: "大牟田丸善運輸",
		hiragana: "おおむたまるぜんうんゆ"
	},
	{
		original: "有限会社馬渕川運輸",
		hiragana: "ゆうげんがいしゃまぶちかわうんゆ"
	},
	{
		original: "飛馬物流",
		hiragana: "ひうまぶつりゅう"
	},
	{
		original: "有限会社田中運送",
		hiragana: "ゆうげんがいしゃたなかうんそう"
	},
	{
		original: "ノア・ロジスティック",
		hiragana: "のあ・ろじすてぃっく"
	},
	{
		original: "日高運輸",
		hiragana: "ひだかうんゆ"
	},
	{
		original: "一之瀬運送有限会社",
		hiragana: "いちのせうんそうゆうげんがいしゃ"
	},
	{
		original: "有限会社山入端運送",
		hiragana: "ゆうげんがいしゃやまのはうんそう"
	},
	{
		original: "有限会社共進建設運輸",
		hiragana: "ゆうげんがいしゃきょうしんけんせつうんゆ"
	},
	{
		original: "水野運送",
		hiragana: "みずのうんそう"
	},
	{
		original: "有限会社トモネンサービス",
		hiragana: "ゆうげんがいしゃともねんさーびす"
	},
	{
		original: "光洋運輸産業",
		hiragana: "こうよううんゆさんぎょう"
	},
	{
		original: "花久本店",
		hiragana: "はなひさもとみせ"
	},
	{
		original: "有限会社小郡運送",
		hiragana: "ゆうげんがいしゃおごおりうんそう"
	},
	{
		original: "埼玉夏島運輸",
		hiragana: "さいたまなつしまうんゆ"
	},
	{
		original: "香川中部市場運送",
		hiragana: "かがわちゅうぶしじょううんそう"
	},
	{
		original: "富士トータルサービス",
		hiragana: "ふじとーたるさーびす"
	},
	{
		original: "伸和",
		hiragana: "のぶかず"
	},
	{
		original: "有限会社ネオプランニング",
		hiragana: "ゆうげんがいしゃねおぷらんにんぐ"
	},
	{
		original: "セイブ運輸有限会社",
		hiragana: "せいぶうんゆゆうげんがいしゃ"
	},
	{
		original: "有限会社アクティブライン",
		hiragana: "ゆうげんがいしゃあくてぃぶらいん"
	},
	{
		original: "安田運輸",
		hiragana: "やすだうんゆ"
	},
	{
		original: "有限会社博進産業",
		hiragana: "ゆうげんがいしゃひろしすすむさんぎょう"
	},
	{
		original: "有限会社トランスタッフ",
		hiragana: "ゆうげんがいしゃとらんすたっふ"
	},
	{
		original: "千代田運輸",
		hiragana: "ちよだうんゆ"
	},
	{
		original: "大栄物流",
		hiragana: "だいえいぶつりゅう"
	},
	{
		original: "エア・フォース",
		hiragana: "えあ・ふぉーす"
	},
	{
		original: "三林運送",
		hiragana: "みつばやしうんそう"
	},
	{
		original: "有限会社大栄運送",
		hiragana: "ゆうげんがいしゃだいえいうんそう"
	},
	{
		original: "田中運送",
		hiragana: "たなかうんそう"
	},
	{
		original: "栄伸物流サービス有限会社",
		hiragana: "よしのぶぶつりゅうさーびすゆうげんがいしゃ"
	},
	{
		original: "新開運輸倉庫",
		hiragana: "しんかいうんゆそうこ"
	},
	{
		original: "有限会社サカヱ運送",
		hiragana: "ゆうげんがいしゃさかゑうんそう"
	},
	{
		original: "有限会社キクチ商事運輸",
		hiragana: "ゆうげんがいしゃきくちしょうじうんゆ"
	},
	{
		original: "サンエイエコネット",
		hiragana: "さんえいえこねっと"
	},
	{
		original: "エース物流",
		hiragana: "えーすぶつりゅう"
	},
	{
		original: "有限会社東海配送",
		hiragana: "ゆうげんがいしゃとうかいはいそう"
	},
	{
		original: "チクマサービス",
		hiragana: "ちくまさーびす"
	},
	{
		original: "西部陸送",
		hiragana: "せいぶりくそう"
	},
	{
		original: "太鵬便",
		hiragana: "たおおとりびん"
	},
	{
		original: "有限会社中央産業輸送",
		hiragana: "ゆうげんがいしゃちゅうおうさんぎょうゆそう"
	},
	{
		original: "有限会社清湖運輸",
		hiragana: "ゆうげんがいしゃきよしみずうみうんゆ"
	},
	{
		original: "多仲流通",
		hiragana: "たなかりゅうつう"
	},
	{
		original: "東商ロジスティクス",
		hiragana: "とうしょうろじすてぃくす"
	},
	{
		original: "東江運輸",
		hiragana: "あがりえうんゆ"
	},
	{
		original: "安達運送",
		hiragana: "あだちうんそう"
	},
	{
		original: "有限会社トミタ",
		hiragana: "ゆうげんがいしゃとみた"
	},
	{
		original: "大塚運送",
		hiragana: "おおつかうんそう"
	},
	{
		original: "岐阜陸運",
		hiragana: "ぎふりくうん"
	},
	{
		original: "森エンタープライズ",
		hiragana: "もりえんたーぷらいず"
	},
	{
		original: "新潟流通運輸有限会社",
		hiragana: "にいがたりゅうつううんゆゆうげんがいしゃ"
	},
	{
		original: "横須賀商事",
		hiragana: "よこすかしょうじ"
	},
	{
		original: "有限会社中西運輸",
		hiragana: "ゆうげんがいしゃなかにしうんゆ"
	},
	{
		original: "富士見運輸倉庫",
		hiragana: "ふじみうんゆそうこ"
	},
	{
		original: "熊本商会有限会社",
		hiragana: "くまもとしょうかいゆうげんがいしゃ"
	},
	{
		original: "豊龍運輸有限会社",
		hiragana: "ほうりゅううんゆゆうげんがいしゃ"
	},
	{
		original: "竹の内運送",
		hiragana: "たけのないうんそう"
	},
	{
		original: "有限会社実践産業",
		hiragana: "ゆうげんがいしゃじっせんさんぎょう"
	},
	{
		original: "関東陸運有限会社",
		hiragana: "かんとうりくうんゆうげんがいしゃ"
	},
	{
		original: "松川運輸",
		hiragana: "まつかわうんゆ"
	},
	{
		original: "ＨＩＧＡＳＨＩＮＯ",
		hiragana: "ＨＩＧＡＳＨＩＮＯ"
	},
	{
		original: "宝徳運輸有限会社",
		hiragana: "ほうとくうんゆゆうげんがいしゃ"
	},
	{
		original: "有限会社三協",
		hiragana: "ゆうげんがいしゃさんきょう"
	},
	{
		original: "なでしこ運輸",
		hiragana: "なでしこうんゆ"
	},
	{
		original: "有限会社東海運輸",
		hiragana: "ゆうげんがいしゃとうかいうんゆ"
	},
	{
		original: "エネル",
		hiragana: "えねる"
	},
	{
		original: "ホーリン有限会社",
		hiragana: "ほーりんゆうげんがいしゃ"
	},
	{
		original: "御前崎物流",
		hiragana: "おまえざきぶつりゅう"
	},
	{
		original: "有限会社陽正交運",
		hiragana: "ゆうげんがいしゃようせいこううん"
	},
	{
		original: "新興運輸",
		hiragana: "しんこううんゆ"
	},
	{
		original: "有限会社頴田運輸",
		hiragana: "ゆうげんがいしゃえいたうんゆ"
	},
	{
		original: "サヌキエクスプレス",
		hiragana: "さぬきえくすぷれす"
	},
	{
		original: "笠井運送有限会社",
		hiragana: "かさいうんそうゆうげんがいしゃ"
	},
	{
		original: "サンノウ",
		hiragana: "さんのう"
	},
	{
		original: "水戸香美運輸",
		hiragana: "みとかみうんゆ"
	},
	{
		original: "Ｌｉｆｅ　Ｌｉｎｅ",
		hiragana: "Ｌｉｆｅ　Ｌｉｎｅ"
	},
	{
		original: "松尾産業運輸",
		hiragana: "まつおさんぎょううんゆ"
	},
	{
		original: "Ｓｉｔｈ",
		hiragana: "Ｓｉｔｈ"
	},
	{
		original: "Ａｌｌ　ｖｉｓｉｏｎｓ",
		hiragana: "Ａｌｌ　ｖｉｓｉｏｎｓ"
	},
	{
		original: "共立トランスポート",
		hiragana: "きょうりつとらんすぽーと"
	},
	{
		original: "有限会社栄友ライン",
		hiragana: "ゆうげんがいしゃさかえともらいん"
	},
	{
		original: "茨木協運合資会社",
		hiragana: "いばらききょううんごうしがいしゃ"
	},
	{
		original: "川上陸送",
		hiragana: "かわかみりくそう"
	},
	{
		original: "田中運送",
		hiragana: "たなかうんそう"
	},
	{
		original: "セイリョウ",
		hiragana: "せいりょう"
	},
	{
		original: "葵物流",
		hiragana: "あおいぶつりゅう"
	},
	{
		original: "有限会社ヒラノ流通",
		hiragana: "ゆうげんがいしゃひらのりゅうつう"
	},
	{
		original: "有限会社ヤマショウ",
		hiragana: "ゆうげんがいしゃやましょう"
	},
	{
		original: "有限会社明石流通",
		hiragana: "ゆうげんがいしゃあかしりゅうつう"
	},
	{
		original: "イーストライン",
		hiragana: "いーすとらいん"
	},
	{
		original: "九鬼運送",
		hiragana: "くきうんそう"
	},
	{
		original: "共同",
		hiragana: "きょうどう"
	},
	{
		original: "田中",
		hiragana: "たなか"
	},
	{
		original: "屋板重機有限会社",
		hiragana: "やいたじゅうきゆうげんがいしゃ"
	},
	{
		original: "入船物流システム",
		hiragana: "いりふねぶつりゅうしすてむ"
	},
	{
		original: "吉川貨物自動車運送有限会社",
		hiragana: "よしかわかもつじどうしゃうんそうゆうげんがいしゃ"
	},
	{
		original: "藤日",
		hiragana: "ふじにち"
	},
	{
		original: "松田",
		hiragana: "まつだ"
	},
	{
		original: "流通システムナカジマ",
		hiragana: "りゅうつうしすてむなかじま"
	},
	{
		original: "眞鍋建運",
		hiragana: "まなべけんうん"
	},
	{
		original: "ロジネットジャパン西日本",
		hiragana: "ろじねっとじゃぱんにしにほん"
	},
	{
		original: "有限会社鳥果運輸",
		hiragana: "ゆうげんがいしゃとりかうんゆ"
	},
	{
		original: "岸貝運輸",
		hiragana: "きしかいうんゆ"
	},
	{
		original: "羊蹄運輸有限会社",
		hiragana: "ようていうんゆゆうげんがいしゃ"
	},
	{
		original: "関根運輸倉庫有限会社",
		hiragana: "せきねうんゆそうこゆうげんがいしゃ"
	},
	{
		original: "三輪運送有限会社",
		hiragana: "みわうんそうゆうげんがいしゃ"
	},
	{
		original: "司運輸",
		hiragana: "つかさうんゆ"
	},
	{
		original: "有限会社松本商事",
		hiragana: "ゆうげんがいしゃまつもとしょうじ"
	},
	{
		original: "志村運送",
		hiragana: "しむらうんそう"
	},
	{
		original: "有限会社カネタ運送",
		hiragana: "ゆうげんがいしゃかねたうんそう"
	},
	{
		original: "有限会社阿見企画",
		hiragana: "ゆうげんがいしゃあみきかく"
	},
	{
		original: "有限会社シティーカーゴ",
		hiragana: "ゆうげんがいしゃしてぃーかーご"
	},
	{
		original: "有限会社日伸流通サービス",
		hiragana: "ゆうげんがいしゃにちしんりゅうつうさーびす"
	},
	{
		original: "広産",
		hiragana: "こうさん"
	},
	{
		original: "二幸冷蔵運輸",
		hiragana: "にさちれいぞううんゆ"
	},
	{
		original: "大阪星友運輸",
		hiragana: "おおさかほしともうんゆ"
	},
	{
		original: "義運輸",
		hiragana: "ぎうんゆ"
	},
	{
		original: "つくばフードトランスポート",
		hiragana: "つくばふーどとらんすぽーと"
	},
	{
		original: "伸栄",
		hiragana: "しんえい"
	},
	{
		original: "有限会社新潟信濃運輸",
		hiragana: "ゆうげんがいしゃにいがたしなのうんゆ"
	},
	{
		original: "大岡建設工業",
		hiragana: "おおおかけんせつこうぎょう"
	},
	{
		original: "アスカ急送",
		hiragana: "あすかきゅうそう"
	},
	{
		original: "相川運送有限会社",
		hiragana: "あいかわうんそうゆうげんがいしゃ"
	},
	{
		original: "有限会社うおみ",
		hiragana: "ゆうげんがいしゃうおみ"
	},
	{
		original: "有限会社マキノ",
		hiragana: "ゆうげんがいしゃまきの"
	},
	{
		original: "佐藤総業有限会社",
		hiragana: "さとうそうぎょうゆうげんがいしゃ"
	},
	{
		original: "Ｋ．コーポレーション",
		hiragana: "Ｋ．こーぽれーしょん"
	},
	{
		original: "群馬天沼運輸",
		hiragana: "ぐんまあまぬまうんゆ"
	},
	{
		original: "有限会社塚越運送",
		hiragana: "ゆうげんがいしゃつかごしうんそう"
	},
	{
		original: "ライズ",
		hiragana: "らいず"
	},
	{
		original: "丸克建設",
		hiragana: "まるかつけんせつ"
	},
	{
		original: "田島運送有限会社",
		hiragana: "たじまうんそうゆうげんがいしゃ"
	},
	{
		original: "吉運サービス",
		hiragana: "きちうんさーびす"
	},
	{
		original: "有限会社荻運送",
		hiragana: "ゆうげんがいしゃおぎうんそう"
	},
	{
		original: "ＭＫトランスポート",
		hiragana: "ＭＫとらんすぽーと"
	},
	{
		original: "ホープ物流",
		hiragana: "ほーぷぶつりゅう"
	},
	{
		original: "丸三建設",
		hiragana: "まるさんけんせつ"
	},
	{
		original: "朝日陸運",
		hiragana: "あさひりくうん"
	},
	{
		original: "三田運送有限会社",
		hiragana: "みたうんそうゆうげんがいしゃ"
	},
	{
		original: "伊保物産",
		hiragana: "いほぶっさん"
	},
	{
		original: "ロジネット・クオリティ",
		hiragana: "ろじねっと・くおりてぃ"
	},
	{
		original: "ユタカ興建",
		hiragana: "ゆたかきょうけん"
	},
	{
		original: "有限会社藤原運送",
		hiragana: "ゆうげんがいしゃふじわらうんそう"
	},
	{
		original: "戸田倉庫物流",
		hiragana: "とだそうこぶつりゅう"
	},
	{
		original: "福良運輸",
		hiragana: "ふくらうんゆ"
	},
	{
		original: "大宮運送有限会社",
		hiragana: "おおみやうんそうゆうげんがいしゃ"
	},
	{
		original: "中田物流",
		hiragana: "なかだぶつりゅう"
	},
	{
		original: "湖北通運",
		hiragana: "こほくつううん"
	},
	{
		original: "信幸運輸",
		hiragana: "のぶゆきうんゆ"
	},
	{
		original: "夢商",
		hiragana: "ゆめしょう"
	},
	{
		original: "有限会社裕商事",
		hiragana: "ゆうげんがいしゃひろししょうじ"
	},
	{
		original: "共立貨物",
		hiragana: "きょうりつかもつ"
	},
	{
		original: "ＩＲＩＳ",
		hiragana: "ＩＲＩＳ"
	},
	{
		original: "浅井物流サービス",
		hiragana: "あさいぶつりゅうさーびす"
	},
	{
		original: "有限会社五大運輸",
		hiragana: "ゆうげんがいしゃごだいうんゆ"
	},
	{
		original: "彦田建設運輸",
		hiragana: "ひこたけんせつうんゆ"
	},
	{
		original: "則竹運輸",
		hiragana: "のりたけうんゆ"
	},
	{
		original: "有限会社久保田商事",
		hiragana: "ゆうげんがいしゃくぼたしょうじ"
	},
	{
		original: "セキ",
		hiragana: "せき"
	},
	{
		original: "卓伸商事",
		hiragana: "たくのぶしょうじ"
	},
	{
		original: "三南建設運送",
		hiragana: "さんみなみけんせつうんそう"
	},
	{
		original: "ポルトスター",
		hiragana: "ぽるとすたー"
	},
	{
		original: "平田運輸",
		hiragana: "ひらたうんゆ"
	},
	{
		original: "昭和梱包運輸",
		hiragana: "しょうわこんぽううんゆ"
	},
	{
		original: "高橋プレス",
		hiragana: "たかはしぷれす"
	},
	{
		original: "大幸運輸",
		hiragana: "だいこううんゆ"
	},
	{
		original: "川原商事",
		hiragana: "かわらしょうじ"
	},
	{
		original: "有限会社東西運輸",
		hiragana: "ゆうげんがいしゃとうざいうんゆ"
	},
	{
		original: "ドコス",
		hiragana: "どこす"
	},
	{
		original: "城町運輸",
		hiragana: "しろまちうんゆ"
	},
	{
		original: "東邦エキスプレス有限会社",
		hiragana: "とうほうえきすぷれすゆうげんがいしゃ"
	},
	{
		original: "青森小型貨物自動車運送",
		hiragana: "あおもりこがたかもつじどうしゃうんそう"
	},
	{
		original: "デリバリー",
		hiragana: "でりばりー"
	},
	{
		original: "永興運輸",
		hiragana: "えいこううんゆ"
	},
	{
		original: "猿島運送",
		hiragana: "さるしまうんそう"
	},
	{
		original: "国際エアフレイト",
		hiragana: "こくさいえあふれいと"
	},
	{
		original: "酒井運輸",
		hiragana: "さかいうんゆ"
	},
	{
		original: "ミワヨシ",
		hiragana: "みわよし"
	},
	{
		original: "吉田運輸",
		hiragana: "よしだうんゆ"
	},
	{
		original: "大泉運輸",
		hiragana: "おおいずみうんゆ"
	},
	{
		original: "双葉運送",
		hiragana: "ふたばうんそう"
	},
	{
		original: "イー・ワイ・イーロジスティクス",
		hiragana: "いー・わい・いーろじすてぃくす"
	},
	{
		original: "茨城日新",
		hiragana: "いばらきにっしん"
	},
	{
		original: "内畑運送",
		hiragana: "ないはたけうんそう"
	},
	{
		original: "有限会社原商運",
		hiragana: "ゆうげんがいしゃはらしょううん"
	},
	{
		original: "有限会社高島",
		hiragana: "ゆうげんがいしゃたかしま"
	},
	{
		original: "トランスポート鳥取",
		hiragana: "とらんすぽーととっとり"
	},
	{
		original: "城北重機建設",
		hiragana: "じょうほくじゅうきけんせつ"
	},
	{
		original: "エフワイ",
		hiragana: "えふわい"
	},
	{
		original: "成宮産業",
		hiragana: "なるみやさんぎょう"
	},
	{
		original: "東和航空輸送",
		hiragana: "とうわこうくうゆそう"
	},
	{
		original: "有限会社柿木運送",
		hiragana: "ゆうげんがいしゃかきのきうんそう"
	},
	{
		original: "有限会社肥前産業",
		hiragana: "ゆうげんがいしゃひぜんさんぎょう"
	},
	{
		original: "ＨＯＴＲＥＸ",
		hiragana: "ＨＯＴＲＥＸ"
	},
	{
		original: "シーエス流通サービス",
		hiragana: "しーえすりゅうつうさーびす"
	},
	{
		original: "東両毛通運",
		hiragana: "ひがしりょうもうつううん"
	},
	{
		original: "有限会社黒潮重機興業",
		hiragana: "ゆうげんがいしゃくろしおじゅうきこうぎょう"
	},
	{
		original: "多摩フードサプライ",
		hiragana: "たまふーどさぷらい"
	},
	{
		original: "アシストライン",
		hiragana: "あしすとらいん"
	},
	{
		original: "東昇",
		hiragana: "ひがしのぼる"
	},
	{
		original: "大川配送サービス",
		hiragana: "おおかわはいそうさーびす"
	},
	{
		original: "タイヨー運送",
		hiragana: "たいよーうんそう"
	},
	{
		original: "堀井運送",
		hiragana: "ほりいうんそう"
	},
	{
		original: "杉山運輸",
		hiragana: "すぎやまうんゆ"
	},
	{
		original: "有限会社マルフジ運輸",
		hiragana: "ゆうげんがいしゃまるふじうんゆ"
	},
	{
		original: "有限会社光正運送",
		hiragana: "ゆうげんがいしゃみつまさうんそう"
	},
	{
		original: "ＫＯＵＫＥＮ",
		hiragana: "ＫＯＵＫＥＮ"
	},
	{
		original: "三定運輸",
		hiragana: "さんていうんゆ"
	},
	{
		original: "石井運輸有限会社",
		hiragana: "いしいうんゆゆうげんがいしゃ"
	},
	{
		original: "有限会社エムライン宮崎",
		hiragana: "ゆうげんがいしゃえむらいんみやざき"
	},
	{
		original: "立道昭和運送",
		hiragana: "たてみちしょうわうんそう"
	},
	{
		original: "有限会社小荷田運送店",
		hiragana: "ゆうげんがいしゃしょうかだうんそうてん"
	},
	{
		original: "大東物流",
		hiragana: "だいとうぶつりゅう"
	},
	{
		original: "御堂運輸",
		hiragana: "みどううんゆ"
	},
	{
		original: "丸本運輸",
		hiragana: "まるもとうんゆ"
	},
	{
		original: "有限会社フラワーネットワーク",
		hiragana: "ゆうげんがいしゃふらわーねっとわーく"
	},
	{
		original: "南條運輸有限会社",
		hiragana: "なんじょううんゆゆうげんがいしゃ"
	},
	{
		original: "藤江運輸",
		hiragana: "ふじえうんゆ"
	},
	{
		original: "有限会社望月組",
		hiragana: "ゆうげんがいしゃもちづきくみ"
	},
	{
		original: "有限会社丸井運送",
		hiragana: "ゆうげんがいしゃまるいうんそう"
	},
	{
		original: "横浜ロジシステムズ",
		hiragana: "よこはまろじしすてむず"
	},
	{
		original: "岸野運送",
		hiragana: "きしのうんそう"
	},
	{
		original: "土屋運送有限会社",
		hiragana: "つちやうんそうゆうげんがいしゃ"
	},
	{
		original: "長村運輸",
		hiragana: "おさむらうんゆ"
	},
	{
		original: "トップ運輸",
		hiragana: "とっぷうんゆ"
	},
	{
		original: "蓬田運送",
		hiragana: "よもぎだうんそう"
	},
	{
		original: "日新",
		hiragana: "にっしん"
	},
	{
		original: "石硝運輸",
		hiragana: "いししょううんゆ"
	},
	{
		original: "丸友運輸有限会社",
		hiragana: "まるともうんゆゆうげんがいしゃ"
	},
	{
		original: "森本運送",
		hiragana: "もりもとうんそう"
	},
	{
		original: "有限会社丸賢産業",
		hiragana: "ゆうげんがいしゃまるさとしさんぎょう"
	},
	{
		original: "ビゼン物流",
		hiragana: "びぜんぶつりゅう"
	},
	{
		original: "三和",
		hiragana: "さんわ"
	},
	{
		original: "有限会社ゼスト",
		hiragana: "ゆうげんがいしゃぜすと"
	},
	{
		original: "平成運輸",
		hiragana: "へいせいうんゆ"
	},
	{
		original: "松本産業",
		hiragana: "まつもとさんぎょう"
	},
	{
		original: "タケダ",
		hiragana: "たけだ"
	},
	{
		original: "有限会社ヤマショーロジテックス",
		hiragana: "ゆうげんがいしゃやましょーろじてっくす"
	},
	{
		original: "有限会社あいわ商運",
		hiragana: "ゆうげんがいしゃあいわしょううん"
	},
	{
		original: "十三貨物自動車",
		hiragana: "じゅうさんかもつじどうしゃ"
	},
	{
		original: "山本運輸倉庫",
		hiragana: "やまもとうんゆそうこ"
	},
	{
		original: "有限会社豊栄流通サービス",
		hiragana: "ゆうげんがいしゃとよさかりゅうつうさーびす"
	},
	{
		original: "泉北商運",
		hiragana: "せんぼくしょううん"
	},
	{
		original: "北晃運輸",
		hiragana: "きたこううんゆ"
	},
	{
		original: "東洋実業運輸",
		hiragana: "とうようじつぎょううんゆ"
	},
	{
		original: "ベジポスト",
		hiragana: "べじぽすと"
	},
	{
		original: "東和流通",
		hiragana: "とうわりゅうつう"
	},
	{
		original: "エビス",
		hiragana: "えびす"
	},
	{
		original: "岸波運輸",
		hiragana: "きしなみうんゆ"
	},
	{
		original: "有限会社末広運輸",
		hiragana: "ゆうげんがいしゃすえひろうんゆ"
	},
	{
		original: "平木運送",
		hiragana: "ひらきうんそう"
	},
	{
		original: "昇栄建設",
		hiragana: "しょうえいけんせつ"
	},
	{
		original: "有限会社タキエンタープライズ",
		hiragana: "ゆうげんがいしゃたきえんたーぷらいず"
	},
	{
		original: "アロード",
		hiragana: "あろーど"
	},
	{
		original: "有限会社スカイ物流",
		hiragana: "ゆうげんがいしゃすかいぶつりゅう"
	},
	{
		original: "ナイス物流",
		hiragana: "ないすぶつりゅう"
	},
	{
		original: "松尾配送",
		hiragana: "まつおはいそう"
	},
	{
		original: "有限会社陶都物流サービス",
		hiragana: "ゆうげんがいしゃとうとぶつりゅうさーびす"
	},
	{
		original: "有限会社府中相互運送",
		hiragana: "ゆうげんがいしゃふちゅうそうごうんそう"
	},
	{
		original: "福龍運輸有限会社",
		hiragana: "ふくりゅううんゆゆうげんがいしゃ"
	},
	{
		original: "有限会社トラスト新潟",
		hiragana: "ゆうげんがいしゃとらすとにいがた"
	},
	{
		original: "戸出運輸",
		hiragana: "といでうんゆ"
	},
	{
		original: "Ｔ．Ｌ．Ｇ",
		hiragana: "Ｔ．Ｌ．Ｇ"
	},
	{
		original: "野田運送",
		hiragana: "のだうんそう"
	},
	{
		original: "茨城トヨタ陸送",
		hiragana: "いばらきとよたりくそう"
	},
	{
		original: "宇奈月通運",
		hiragana: "うなづきつううん"
	},
	{
		original: "有限会社タイセイ商運",
		hiragana: "ゆうげんがいしゃたいせいしょううん"
	},
	{
		original: "ケイティトランスポート",
		hiragana: "けいてぃとらんすぽーと"
	},
	{
		original: "今村運送有限会社",
		hiragana: "いまむらうんそうゆうげんがいしゃ"
	},
	{
		original: "有限会社野中運送",
		hiragana: "ゆうげんがいしゃのなかうんそう"
	},
	{
		original: "有限会社栃福運輸",
		hiragana: "ゆうげんがいしゃとちふくうんゆ"
	},
	{
		original: "ティートランス",
		hiragana: "てぃーとらんす"
	},
	{
		original: "熊本総合運輸",
		hiragana: "くまもとそうごううんゆ"
	},
	{
		original: "丸豊運送",
		hiragana: "まるゆたかうんそう"
	},
	{
		original: "丸翔運輸",
		hiragana: "まるしょううんゆ"
	},
	{
		original: "関越",
		hiragana: "かんえつ"
	},
	{
		original: "常運",
		hiragana: "つねうん"
	},
	{
		original: "東",
		hiragana: "ひがし"
	},
	{
		original: "北大阪物流",
		hiragana: "ほくだいさかぶつりゅう"
	},
	{
		original: "サンライズエクスプレス",
		hiragana: "さんらいずえくすぷれす"
	},
	{
		original: "有限会社アキライン２２",
		hiragana: "ゆうげんがいしゃあきらいん２２"
	},
	{
		original: "金羊社ロジテム",
		hiragana: "きんひつじしゃろじてむ"
	},
	{
		original: "明正運輸",
		hiragana: "あきまさうんゆ"
	},
	{
		original: "横山運輸",
		hiragana: "よこやまうんゆ"
	},
	{
		original: "有限会社静狩急行",
		hiragana: "ゆうげんがいしゃせいかりきゅうこう"
	},
	{
		original: "有限会社廣垣急送",
		hiragana: "ゆうげんがいしゃこうかききゅうそう"
	},
	{
		original: "外山運送",
		hiragana: "とやまうんそう"
	},
	{
		original: "有限会社蔵輸送システム",
		hiragana: "ゆうげんがいしゃくらゆそうしすてむ"
	},
	{
		original: "五葉運送",
		hiragana: "ごよううんそう"
	},
	{
		original: "オーヴェストライン",
		hiragana: "おーゔぇすとらいん"
	},
	{
		original: "有限会社伸友運送",
		hiragana: "ゆうげんがいしゃしんともうんそう"
	},
	{
		original: "トムラ商事",
		hiragana: "とむらしょうじ"
	},
	{
		original: "ライフホールディングス",
		hiragana: "らいふほーるでぃんぐす"
	},
	{
		original: "小碇運輸",
		hiragana: "しょういかりうんゆ"
	},
	{
		original: "有限会社矢嶋運送店",
		hiragana: "ゆうげんがいしゃやじまうんそうてん"
	},
	{
		original: "中尾運輸",
		hiragana: "なかおうんゆ"
	},
	{
		original: "有限会社多摩八光運輸",
		hiragana: "ゆうげんがいしゃたまはっこううんゆ"
	},
	{
		original: "有限会社北村産業",
		hiragana: "ゆうげんがいしゃきたむらさんぎょう"
	},
	{
		original: "マルサンフレッシュ",
		hiragana: "まるさんふれっしゅ"
	},
	{
		original: "有限会社ジャパントランス",
		hiragana: "ゆうげんがいしゃじゃぱんとらんす"
	},
	{
		original: "北陸ローディング",
		hiragana: "ほくりくろーでぃんぐ"
	},
	{
		original: "長貫運送有限会社",
		hiragana: "ちょうかんうんそうゆうげんがいしゃ"
	},
	{
		original: "有限会社中井商事",
		hiragana: "ゆうげんがいしゃなかいしょうじ"
	},
	{
		original: "稲生商会",
		hiragana: "いなおしょうかい"
	},
	{
		original: "九州双葉運輸",
		hiragana: "きゅうしゅうふたばうんゆ"
	},
	{
		original: "長栄",
		hiragana: "ちょうえい"
	},
	{
		original: "有限会社斐川農協配送センター",
		hiragana: "ゆうげんがいしゃひかわのうきょうはいそうせんたー"
	},
	{
		original: "有限会社宮部運輸",
		hiragana: "ゆうげんがいしゃみやべうんゆ"
	},
	{
		original: "大砺運輸建設",
		hiragana: "だいとうんゆけんせつ"
	},
	{
		original: "有限会社ＳＳＣ",
		hiragana: "ゆうげんがいしゃＳＳＣ"
	},
	{
		original: "有限会社関根建材",
		hiragana: "ゆうげんがいしゃせきねけんざい"
	},
	{
		original: "アイリード",
		hiragana: "あいりーど"
	},
	{
		original: "タイリュウ",
		hiragana: "たいりゅう"
	},
	{
		original: "周桑運送",
		hiragana: "しゅうそううんそう"
	},
	{
		original: "大住陸運",
		hiragana: "おおすみりくうん"
	},
	{
		original: "滝沢物流有限会社",
		hiragana: "たきざわぶつりゅうゆうげんがいしゃ"
	},
	{
		original: "ニッコン松山",
		hiragana: "にっこんまつやま"
	},
	{
		original: "三協倉庫",
		hiragana: "さんきょうそうこ"
	},
	{
		original: "真田陸送",
		hiragana: "さなだりくそう"
	},
	{
		original: "一代",
		hiragana: "いちだい"
	},
	{
		original: "有限会社鈴木運送",
		hiragana: "ゆうげんがいしゃすずきうんそう"
	},
	{
		original: "有限会社拓海ロジリューションエクスプレス",
		hiragana: "ゆうげんがいしゃたくみろじりゅーしょんえくすぷれす"
	},
	{
		original: "有限会社山西運送",
		hiragana: "ゆうげんがいしゃやまにしうんそう"
	},
	{
		original: "幸起運輸",
		hiragana: "こうきうんゆ"
	},
	{
		original: "函館食品運輸",
		hiragana: "はこだてしょくひんうんゆ"
	},
	{
		original: "みささ運輸",
		hiragana: "みささうんゆ"
	},
	{
		original: "有限会社まるじ運輸",
		hiragana: "ゆうげんがいしゃまるじうんゆ"
	},
	{
		original: "山本運輸",
		hiragana: "やまもとうんゆ"
	},
	{
		original: "コウトク金属",
		hiragana: "こうとくきんぞく"
	},
	{
		original: "向栄物流",
		hiragana: "こうさかえぶつりゅう"
	},
	{
		original: "松井",
		hiragana: "まつい"
	},
	{
		original: "栄プラスチック",
		hiragana: "さかえぷらすちっく"
	},
	{
		original: "日本流通サービス",
		hiragana: "にほんりゅうとおりさーびす"
	},
	{
		original: "有限会社ヤマサン",
		hiragana: "ゆうげんがいしゃやまさん"
	},
	{
		original: "ＫＲＳ",
		hiragana: "ＫＲＳ"
	},
	{
		original: "丸山物流運輸",
		hiragana: "まるやまぶつりゅううんゆ"
	},
	{
		original: "マルトミ運送",
		hiragana: "まるとみうんそう"
	},
	{
		original: "日本ムーベックス",
		hiragana: "にっぽんむーべっくす"
	},
	{
		original: "芸北運送",
		hiragana: "げいほくうんそう"
	},
	{
		original: "群馬ジカハイ運輸",
		hiragana: "ぐんまじかはいうんゆ"
	},
	{
		original: "有限会社小原運送",
		hiragana: "ゆうげんがいしゃこはらうんそう"
	},
	{
		original: "マルナガ運輸有限会社",
		hiragana: "まるながうんゆゆうげんがいしゃ"
	},
	{
		original: "全埼物流",
		hiragana: "ぜんさきぶつりゅう"
	},
	{
		original: "有限会社豊和運輸倉庫",
		hiragana: "ゆうげんがいしゃとよかずうんゆそうこ"
	},
	{
		original: "ムーブサービス",
		hiragana: "むーぶさーびす"
	},
	{
		original: "マルキ運輸",
		hiragana: "まるきうんゆ"
	},
	{
		original: "春山運輸",
		hiragana: "はるやまうんゆ"
	},
	{
		original: "トータルテクノサービス",
		hiragana: "とーたるてくのさーびす"
	},
	{
		original: "有限会社田辺重機",
		hiragana: "ゆうげんがいしゃたなべじゅうき"
	},
	{
		original: "有限会社風間運輸",
		hiragana: "ゆうげんがいしゃかざまうんゆ"
	},
	{
		original: "平成興業",
		hiragana: "へいせいこうぎょう"
	},
	{
		original: "有限会社今井運送",
		hiragana: "ゆうげんがいしゃいまいうんそう"
	},
	{
		original: "有限会社神里産業",
		hiragana: "ゆうげんがいしゃかみさとさんぎょう"
	},
	{
		original: "鈴木運輸",
		hiragana: "すずきうんゆ"
	},
	{
		original: "有限会社兵動物流",
		hiragana: "ゆうげんがいしゃへいどうぶつりゅう"
	},
	{
		original: "有限会社八代運送",
		hiragana: "ゆうげんがいしゃやつしろうんそう"
	},
	{
		original: "エスピーネットワーク",
		hiragana: "えすぴーねっとわーく"
	},
	{
		original: "第一商事",
		hiragana: "だいいちしょうじ"
	},
	{
		original: "エボシ山急送",
		hiragana: "えぼしやまきゅうそう"
	},
	{
		original: "ザイケン",
		hiragana: "ざいけん"
	},
	{
		original: "天童重機運輸",
		hiragana: "てんどうじゅうきうんゆ"
	},
	{
		original: "トーヨー物流",
		hiragana: "とーよーぶつりゅう"
	},
	{
		original: "近藤運送",
		hiragana: "こんどううんそう"
	},
	{
		original: "フジ物流",
		hiragana: "ふじぶつりゅう"
	},
	{
		original: "大成陸運",
		hiragana: "たいせいりくうん"
	},
	{
		original: "宇野繁正通運",
		hiragana: "うのしげまさつううん"
	},
	{
		original: "トラスティ",
		hiragana: "とらすてぃ"
	},
	{
		original: "稲岡",
		hiragana: "いなおか"
	},
	{
		original: "青葉物流システム",
		hiragana: "あおばぶつりゅうしすてむ"
	},
	{
		original: "だて高速運輸有限会社",
		hiragana: "だてこうそくうんゆゆうげんがいしゃ"
	},
	{
		original: "ワイケイ企画",
		hiragana: "わいけいきかく"
	},
	{
		original: "岩国通運",
		hiragana: "いわくにつううん"
	},
	{
		original: "有限会社エムエクスプレス",
		hiragana: "ゆうげんがいしゃえむえくすぷれす"
	},
	{
		original: "メーワ",
		hiragana: "めーわ"
	},
	{
		original: "有限会社丸井コーポレーション",
		hiragana: "ゆうげんがいしゃまるいこーぽれーしょん"
	},
	{
		original: "ダイトートラックス有限会社",
		hiragana: "だいとーとらっくすゆうげんがいしゃ"
	},
	{
		original: "有限会社喜多流通サービス",
		hiragana: "ゆうげんがいしゃきたりゅうとおりさーびす"
	},
	{
		original: "大利興産",
		hiragana: "だいりこうさん"
	},
	{
		original: "山本商会",
		hiragana: "やまもとしょうかい"
	},
	{
		original: "石原商運",
		hiragana: "いしはらしょううん"
	},
	{
		original: "ＨＰＬ",
		hiragana: "ＨＰＬ"
	},
	{
		original: "有限会社サンケイ物流",
		hiragana: "ゆうげんがいしゃさんけいぶつりゅう"
	},
	{
		original: "とりうみ運輸",
		hiragana: "とりうみうんゆ"
	},
	{
		original: "由井運送",
		hiragana: "ゆいうんそう"
	},
	{
		original: "有限会社藤喜物流",
		hiragana: "ゆうげんがいしゃふじきぶつりゅう"
	},
	{
		original: "有限会社ノースライン",
		hiragana: "ゆうげんがいしゃのーすらいん"
	},
	{
		original: "ＩＴＭ",
		hiragana: "ＩＴＭ"
	},
	{
		original: "東亜工運",
		hiragana: "とうあこううん"
	},
	{
		original: "山田運輸",
		hiragana: "やまだうんゆ"
	},
	{
		original: "敬心",
		hiragana: "たかしこころ"
	},
	{
		original: "兼松運輸",
		hiragana: "かねまつうんゆ"
	},
	{
		original: "宝生運輸",
		hiragana: "ほうしょううんゆ"
	},
	{
		original: "大栄産業有限会社",
		hiragana: "だいえいさんぎょうゆうげんがいしゃ"
	},
	{
		original: "朝日運輸機工",
		hiragana: "あさひうんゆきこう"
	},
	{
		original: "有限会社岡崎運輸",
		hiragana: "ゆうげんがいしゃおかざきうんゆ"
	},
	{
		original: "有限会社オートステーション",
		hiragana: "ゆうげんがいしゃおーとすてーしょん"
	},
	{
		original: "有限会社尾崎梱包",
		hiragana: "ゆうげんがいしゃおざきこんぽう"
	},
	{
		original: "コバルト運輸",
		hiragana: "こばるとうんゆ"
	},
	{
		original: "南通運送有限会社",
		hiragana: "みなみつううんそうゆうげんがいしゃ"
	},
	{
		original: "晴海梱包商会",
		hiragana: "はるみこんぽうしょうかい"
	},
	{
		original: "ハートワークナガサキ",
		hiragana: "はーとわーくながさき"
	},
	{
		original: "マルアイシステム有限会社",
		hiragana: "まるあいしすてむゆうげんがいしゃ"
	},
	{
		original: "下関ダイキュー運輸",
		hiragana: "しものせきだいきゅーうんゆ"
	},
	{
		original: "有限会社広仲運輸",
		hiragana: "ゆうげんがいしゃこうなかうんゆ"
	},
	{
		original: "Ｈ．Ａ．Ｓ",
		hiragana: "Ｈ．Ａ．Ｓ"
	},
	{
		original: "松尾総業運輸",
		hiragana: "まつおそうぎょううんゆ"
	},
	{
		original: "大熊運輸有限会社",
		hiragana: "おおくまうんゆゆうげんがいしゃ"
	},
	{
		original: "有限会社屋代運輸",
		hiragana: "ゆうげんがいしゃやしろうんゆ"
	},
	{
		original: "若松運輸",
		hiragana: "わかまつうんゆ"
	},
	{
		original: "八千代陸運",
		hiragana: "やちよりくうん"
	},
	{
		original: "有限会社明浜運送",
		hiragana: "ゆうげんがいしゃあけはまうんそう"
	},
	{
		original: "東京三栄運送",
		hiragana: "とうきょうさんえいうんそう"
	},
	{
		original: "大宝運輸",
		hiragana: "たいほううんゆ"
	},
	{
		original: "三宝興運",
		hiragana: "さんぽうきょううん"
	},
	{
		original: "辻運輸",
		hiragana: "つじうんゆ"
	},
	{
		original: "有限会社浜田運送",
		hiragana: "ゆうげんがいしゃはまだうんそう"
	},
	{
		original: "久仁運輸",
		hiragana: "きゅうひとしうんゆ"
	},
	{
		original: "サンコーファースト",
		hiragana: "さんこーふぁーすと"
	},
	{
		original: "横浜陸運",
		hiragana: "よこはまりくうん"
	},
	{
		original: "栄街陸送",
		hiragana: "さかえまちりくそう"
	},
	{
		original: "武蔵関運輸",
		hiragana: "むさしせきうんゆ"
	},
	{
		original: "和泉運輸",
		hiragana: "いずみうんゆ"
	},
	{
		original: "揖龍運送",
		hiragana: "ゆうりゅううんそう"
	},
	{
		original: "大栄運送",
		hiragana: "だいえいうんそう"
	},
	{
		original: "志柿運送",
		hiragana: "こころざしかきうんそう"
	},
	{
		original: "西川運送有限会社",
		hiragana: "にしかわうんそうゆうげんがいしゃ"
	},
	{
		original: "有限会社上田運送店",
		hiragana: "ゆうげんがいしゃうえだうんそうてん"
	},
	{
		original: "栃島運送",
		hiragana: "とちしまうんそう"
	},
	{
		original: "プロテック京阪",
		hiragana: "ぷろてっくけいはん"
	},
	{
		original: "テックトランスポート",
		hiragana: "てっくとらんすぽーと"
	},
	{
		original: "内外運輸",
		hiragana: "ないがいうんゆ"
	},
	{
		original: "ヒップスタイル神戸",
		hiragana: "ひっぷすたいるこうべ"
	},
	{
		original: "羽島物流",
		hiragana: "はねしまぶつりゅう"
	},
	{
		original: "有限会社エヌサービス",
		hiragana: "ゆうげんがいしゃえぬさーびす"
	},
	{
		original: "有限会社飛鳥運輸",
		hiragana: "ゆうげんがいしゃあすかうんゆ"
	},
	{
		original: "和田倉庫",
		hiragana: "わだそうこ"
	},
	{
		original: "福井急行",
		hiragana: "ふくいきゅうこう"
	},
	{
		original: "讃高運輸",
		hiragana: "さんたかうんゆ"
	},
	{
		original: "美咲ライン",
		hiragana: "みさきらいん"
	},
	{
		original: "美和貨物自動車",
		hiragana: "みわかもつじどうしゃ"
	},
	{
		original: "有限会社丸祐",
		hiragana: "ゆうげんがいしゃまるすけ"
	},
	{
		original: "カネト青果",
		hiragana: "かねとせいか"
	},
	{
		original: "丸麦運輸",
		hiragana: "まるむぎうんゆ"
	},
	{
		original: "ユー・トラフィック",
		hiragana: "ゆー・とらふぃっく"
	},
	{
		original: "有限会社高森",
		hiragana: "ゆうげんがいしゃたかもり"
	},
	{
		original: "東西物流",
		hiragana: "とうざいぶつりゅう"
	},
	{
		original: "ソーコン",
		hiragana: "そーこん"
	},
	{
		original: "豊浦建設運輸",
		hiragana: "とようらけんせつうんゆ"
	},
	{
		original: "北九運輸",
		hiragana: "きたきゅううんゆ"
	},
	{
		original: "マルトヨ運輸有限会社",
		hiragana: "まるとようんゆゆうげんがいしゃ"
	},
	{
		original: "不二運送有限会社",
		hiragana: "ふじうんそうゆうげんがいしゃ"
	},
	{
		original: "東段運輸",
		hiragana: "ひがしだんうんゆ"
	},
	{
		original: "有限会社ララ運送",
		hiragana: "ゆうげんがいしゃららうんそう"
	},
	{
		original: "有限会社吉田産業",
		hiragana: "ゆうげんがいしゃよしださんぎょう"
	},
	{
		original: "大伸興運有限会社",
		hiragana: "たいしんきょううんゆうげんがいしゃ"
	},
	{
		original: "和久田",
		hiragana: "わくた"
	},
	{
		original: "有限会社ヤマモト運送",
		hiragana: "ゆうげんがいしゃやまもとうんそう"
	},
	{
		original: "滝島運輸",
		hiragana: "たきしまうんゆ"
	},
	{
		original: "有限会社ケイ運送",
		hiragana: "ゆうげんがいしゃけいうんそう"
	},
	{
		original: "及川運送",
		hiragana: "おいかわうんそう"
	},
	{
		original: "博多ダイキュー運輸",
		hiragana: "はかただいきゅーうんゆ"
	},
	{
		original: "クラウン",
		hiragana: "くらうん"
	},
	{
		original: "アイゼン運輸",
		hiragana: "あいぜんうんゆ"
	},
	{
		original: "さくら流通",
		hiragana: "さくらりゅうつう"
	},
	{
		original: "三州陸運",
		hiragana: "さんしゅうりくうん"
	},
	{
		original: "有限会社砂山運送店",
		hiragana: "ゆうげんがいしゃすなやまうんそうてん"
	},
	{
		original: "織田運輸",
		hiragana: "おだうんゆ"
	},
	{
		original: "本山運送",
		hiragana: "ほんざんうんそう"
	},
	{
		original: "有限会社タマルシステム",
		hiragana: "ゆうげんがいしゃたまるしすてむ"
	},
	{
		original: "ヤマヨ高速運輸",
		hiragana: "やまよこうそくうんゆ"
	},
	{
		original: "有限会社佐々木運送",
		hiragana: "ゆうげんがいしゃささきうんそう"
	},
	{
		original: "カミオカ",
		hiragana: "かみおか"
	},
	{
		original: "有限会社新道南総合",
		hiragana: "ゆうげんがいしゃしんどうなんそうごう"
	},
	{
		original: "飯尾運輸",
		hiragana: "いいおうんゆ"
	},
	{
		original: "アンノウ物流",
		hiragana: "あんのうぶつりゅう"
	},
	{
		original: "三共運輸",
		hiragana: "さんきょううんゆ"
	},
	{
		original: "大木組",
		hiragana: "たいぼくくみ"
	},
	{
		original: "アダチ",
		hiragana: "あだち"
	},
	{
		original: "臨海運輸",
		hiragana: "りんかいうんゆ"
	},
	{
		original: "横山運送有限会社",
		hiragana: "よこやまうんそうゆうげんがいしゃ"
	},
	{
		original: "源総業",
		hiragana: "げんそうぎょう"
	},
	{
		original: "高千穂急送",
		hiragana: "たかちほきゅうそう"
	},
	{
		original: "エネポ愛媛",
		hiragana: "えねぽえひめ"
	},
	{
		original: "有限会社ヤマゼン物流",
		hiragana: "ゆうげんがいしゃやまぜんぶつりゅう"
	},
	{
		original: "アーバン物流",
		hiragana: "あーばんぶつりゅう"
	},
	{
		original: "矢野産業輸送",
		hiragana: "やのさんぎょうゆそう"
	},
	{
		original: "西村商事",
		hiragana: "にしむらしょうじ"
	},
	{
		original: "有限会社川上運輸",
		hiragana: "ゆうげんがいしゃかわかみうんゆ"
	},
	{
		original: "サクラ運輸",
		hiragana: "さくらうんゆ"
	},
	{
		original: "ウインドクルージング",
		hiragana: "ういんどくるーじんぐ"
	},
	{
		original: "浪花建設運輸",
		hiragana: "なにわけんせつうんゆ"
	},
	{
		original: "有限会社押山運送店",
		hiragana: "ゆうげんがいしゃおしやまうんそうてん"
	},
	{
		original: "オグラ",
		hiragana: "おぐら"
	},
	{
		original: "有限会社ケーズライン",
		hiragana: "ゆうげんがいしゃけーずらいん"
	},
	{
		original: "アジアトレーディング",
		hiragana: "あじあとれーでぃんぐ"
	},
	{
		original: "東来運送",
		hiragana: "ひがしらいうんそう"
	},
	{
		original: "天真運輸",
		hiragana: "てんしんうんゆ"
	},
	{
		original: "有限会社ワイエヌ・ライン",
		hiragana: "ゆうげんがいしゃわいえぬ・らいん"
	},
	{
		original: "有限会社阪本商運",
		hiragana: "ゆうげんがいしゃさかもとしょううん"
	},
	{
		original: "北進運輸",
		hiragana: "ほくしんうんゆ"
	},
	{
		original: "有限会社美紀商事",
		hiragana: "ゆうげんがいしゃみきしょうじ"
	},
	{
		original: "九州関急",
		hiragana: "きゅうしゅうかんきゅう"
	},
	{
		original: "有限会社西銘青果店",
		hiragana: "ゆうげんがいしゃにしめせいかみせ"
	},
	{
		original: "山川物流",
		hiragana: "やまかわぶつりゅう"
	},
	{
		original: "森藤運輸",
		hiragana: "もりとううんゆ"
	},
	{
		original: "五島運輸",
		hiragana: "ごとううんゆ"
	},
	{
		original: "有限会社愛成工業",
		hiragana: "ゆうげんがいしゃちかなりこうぎょう"
	},
	{
		original: "若商",
		hiragana: "じゃくしょう"
	},
	{
		original: "エヌビーワークス",
		hiragana: "えぬびーわーくす"
	},
	{
		original: "匠信",
		hiragana: "たくみしん"
	},
	{
		original: "高知トランスポート",
		hiragana: "こうちとらんすぽーと"
	},
	{
		original: "有限会社大一流通",
		hiragana: "ゆうげんがいしゃひろかずりゅうつう"
	},
	{
		original: "マコトロジテック",
		hiragana: "まことろじてっく"
	},
	{
		original: "ＤＨＳ．",
		hiragana: "ＤＨＳ．"
	},
	{
		original: "上溝運送",
		hiragana: "うわみぞうんそう"
	},
	{
		original: "有限会社三和運輸",
		hiragana: "ゆうげんがいしゃさんわうんゆ"
	},
	{
		original: "アイ・エス・ライン一宮",
		hiragana: "あい・えす・らいんいちのみや"
	},
	{
		original: "下町運輸",
		hiragana: "したまちうんゆ"
	},
	{
		original: "有限会社窪山運送店",
		hiragana: "ゆうげんがいしゃくぼやまうんそうてん"
	},
	{
		original: "マルカメ梱包",
		hiragana: "まるかめこんぽう"
	},
	{
		original: "堀内トランスポート",
		hiragana: "ほりうちとらんすぽーと"
	},
	{
		original: "勝沼運送",
		hiragana: "かつぬまうんそう"
	},
	{
		original: "北斗運輸",
		hiragana: "ほくとうんゆ"
	},
	{
		original: "有限会社サクセス",
		hiragana: "ゆうげんがいしゃさくせす"
	},
	{
		original: "鶴ケ島運輸",
		hiragana: "つるけしまうんゆ"
	},
	{
		original: "広島総合開発",
		hiragana: "ひろしまそうごうかいはつ"
	},
	{
		original: "有限会社スワ商事運輸",
		hiragana: "ゆうげんがいしゃすわしょうじうんゆ"
	},
	{
		original: "田丸運輸",
		hiragana: "たまるうんゆ"
	},
	{
		original: "愛輝サービス",
		hiragana: "あいてるさーびす"
	},
	{
		original: "積運",
		hiragana: "せきうん"
	},
	{
		original: "有限会社山岡運輸",
		hiragana: "ゆうげんがいしゃやまおかうんゆ"
	},
	{
		original: "小泉運輸有限会社",
		hiragana: "こいずみうんゆゆうげんがいしゃ"
	},
	{
		original: "寿運輸倉庫",
		hiragana: "ひさしうんゆそうこ"
	},
	{
		original: "鳴海運輸",
		hiragana: "なるみうんゆ"
	},
	{
		original: "有限会社野沢運送店",
		hiragana: "ゆうげんがいしゃのざわうんそうてん"
	},
	{
		original: "有限会社海星運送秋田",
		hiragana: "ゆうげんがいしゃかいせいうんそうあきた"
	},
	{
		original: "日笠運送",
		hiragana: "ひかさうんそう"
	},
	{
		original: "有限会社ベストライン",
		hiragana: "ゆうげんがいしゃべすとらいん"
	},
	{
		original: "芝岡梱包",
		hiragana: "しばおかこんぽう"
	},
	{
		original: "八紘運輸",
		hiragana: "はっこううんゆ"
	},
	{
		original: "東京食料運輸",
		hiragana: "とうきょうしょくりょううんゆ"
	},
	{
		original: "有限会社エムライン",
		hiragana: "ゆうげんがいしゃえむらいん"
	},
	{
		original: "スマートレジリエンス",
		hiragana: "すまーとれじりえんす"
	},
	{
		original: "浜崎製材",
		hiragana: "はまさきせいざい"
	},
	{
		original: "宝飯陸運",
		hiragana: "ほいりくうん"
	},
	{
		original: "日本海ロジテック",
		hiragana: "にほんかいろじてっく"
	},
	{
		original: "有限会社萩原運送",
		hiragana: "ゆうげんがいしゃはぎわらうんそう"
	},
	{
		original: "齋藤運輸",
		hiragana: "さいとううんゆ"
	},
	{
		original: "有限会社三和商事",
		hiragana: "ゆうげんがいしゃさんわしょうじ"
	},
	{
		original: "有限会社北澤梱包運輸",
		hiragana: "ゆうげんがいしゃきたざわこんぽううんゆ"
	},
	{
		original: "圏央ロジ",
		hiragana: "けんおうろじ"
	},
	{
		original: "佐幸運輸",
		hiragana: "さこううんゆ"
	},
	{
		original: "有限会社加藤運輸",
		hiragana: "ゆうげんがいしゃかとううんゆ"
	},
	{
		original: "丸幸運輸",
		hiragana: "まるこううんゆ"
	},
	{
		original: "有限会社奥資材",
		hiragana: "ゆうげんがいしゃおくしざい"
	},
	{
		original: "釧十運輸",
		hiragana: "くしじゅううんゆ"
	},
	{
		original: "有限会社平田運送店",
		hiragana: "ゆうげんがいしゃひらたうんそうてん"
	},
	{
		original: "旭洋冷蔵",
		hiragana: "あさひひろしれいぞう"
	},
	{
		original: "埼玉牛乳運輸",
		hiragana: "さいたまぎゅうにゅううんゆ"
	},
	{
		original: "有限会社山王運送",
		hiragana: "ゆうげんがいしゃさんのううんそう"
	},
	{
		original: "有限会社エフ・ライン輸送",
		hiragana: "ゆうげんがいしゃえふ・らいんゆそう"
	},
	{
		original: "キノシタ",
		hiragana: "きのした"
	},
	{
		original: "アローライナー",
		hiragana: "あろーらいなー"
	},
	{
		original: "トータル・コマース・ソリューション",
		hiragana: "とーたる・こまーす・そりゅーしょん"
	},
	{
		original: "中和運輸",
		hiragana: "ちゅうわうんゆ"
	},
	{
		original: "有限会社第一物産",
		hiragana: "ゆうげんがいしゃだいいちぶっさん"
	},
	{
		original: "鈴木運送",
		hiragana: "すずきうんそう"
	},
	{
		original: "アイエスサービス",
		hiragana: "あいえすさーびす"
	},
	{
		original: "ＥＸＴ",
		hiragana: "ＥＸＴ"
	},
	{
		original: "土屋運輸",
		hiragana: "つちやうんゆ"
	},
	{
		original: "岩崎運輸",
		hiragana: "いわさきうんゆ"
	},
	{
		original: "田所製作所",
		hiragana: "たどころせいさくしょ"
	},
	{
		original: "有限会社ケイテイ商事",
		hiragana: "ゆうげんがいしゃけいていしょうじ"
	},
	{
		original: "朝比奈運送",
		hiragana: "あさひなうんそう"
	},
	{
		original: "ラインヅ",
		hiragana: "らいんづ"
	},
	{
		original: "山一産業運輸",
		hiragana: "やまいちさんぎょううんゆ"
	},
	{
		original: "有限会社松波運輸",
		hiragana: "ゆうげんがいしゃまつなみうんゆ"
	},
	{
		original: "イバラキ流通サービス",
		hiragana: "いばらきりゅうつうさーびす"
	},
	{
		original: "宇佐美共栄社",
		hiragana: "うさみきょうえいしゃ"
	},
	{
		original: "有限会社木下運送店",
		hiragana: "ゆうげんがいしゃきのしたうんそうてん"
	},
	{
		original: "有限会社ワーク運輸",
		hiragana: "ゆうげんがいしゃわーくうんゆ"
	},
	{
		original: "ＫＢＳ",
		hiragana: "ＫＢＳ"
	},
	{
		original: "有限会社北海エクスプレス",
		hiragana: "ゆうげんがいしゃほっかいえくすぷれす"
	},
	{
		original: "原田重量",
		hiragana: "はらだじゅうりょう"
	},
	{
		original: "グローエキスプレス",
		hiragana: "ぐろーえきすぷれす"
	},
	{
		original: "三和運輸",
		hiragana: "さんわうんゆ"
	},
	{
		original: "東和運送",
		hiragana: "とうわうんそう"
	},
	{
		original: "有限会社野口商事",
		hiragana: "ゆうげんがいしゃのぐちしょうじ"
	},
	{
		original: "宝島",
		hiragana: "たからしま"
	},
	{
		original: "森協物流",
		hiragana: "もりきょうぶつりゅう"
	},
	{
		original: "有限会社東島商店",
		hiragana: "ゆうげんがいしゃひがしじましょうてん"
	},
	{
		original: "阪神コンテナー輸送",
		hiragana: "はんしんこんてなーゆそう"
	},
	{
		original: "川本運送有限会社",
		hiragana: "かわもとうんそうゆうげんがいしゃ"
	},
	{
		original: "有限会社黒澤商運",
		hiragana: "ゆうげんがいしゃくろさわしょううん"
	},
	{
		original: "エイブル引越サービス",
		hiragana: "えいぶるひっこしさーびす"
	},
	{
		original: "グリーン物流",
		hiragana: "ぐりーんぶつりゅう"
	},
	{
		original: "ネクストブレードロジ",
		hiragana: "ねくすとぶれーどろじ"
	},
	{
		original: "カネサ運輸",
		hiragana: "かねさうんゆ"
	},
	{
		original: "丸富運輸",
		hiragana: "まるとみうんゆ"
	},
	{
		original: "是則岡山運輸",
		hiragana: "これのりおかやまうんゆ"
	},
	{
		original: "丸山重機",
		hiragana: "まるやまじゅうき"
	},
	{
		original: "安治川クレーン",
		hiragana: "あじがわくれーん"
	},
	{
		original: "日本海ロジスティクス",
		hiragana: "にほんかいろじすてぃくす"
	},
	{
		original: "有限会社ミュージックデリバリー",
		hiragana: "ゆうげんがいしゃみゅーじっくでりばりー"
	},
	{
		original: "有限会社サカエ運輸",
		hiragana: "ゆうげんがいしゃさかえうんゆ"
	},
	{
		original: "松浦運送",
		hiragana: "まつうらうんそう"
	},
	{
		original: "三ツ矢梱包",
		hiragana: "さんつやこんぽう"
	},
	{
		original: "興進",
		hiragana: "きょうすすむ"
	},
	{
		original: "サチリク",
		hiragana: "さちりく"
	},
	{
		original: "アガガスネットワークサービス",
		hiragana: "あががすねっとわーくさーびす"
	},
	{
		original: "有限会社プラスパ",
		hiragana: "ゆうげんがいしゃぷらすぱ"
	},
	{
		original: "輿石運送土木",
		hiragana: "こしいしうんそうどぼく"
	},
	{
		original: "シライ物流サービス",
		hiragana: "しらいぶつりゅうさーびす"
	},
	{
		original: "有限会社大和陸運",
		hiragana: "ゆうげんがいしゃやまとりくうん"
	},
	{
		original: "有限会社ワイ・エスエキスプレスコーポレーション",
		hiragana: "ゆうげんがいしゃわい・えすえきすぷれすこーぽれーしょん"
	},
	{
		original: "アイユーシー",
		hiragana: "あいゆーしー"
	},
	{
		original: "世紀開発サービス",
		hiragana: "せいきかいはつさーびす"
	},
	{
		original: "マルゴ",
		hiragana: "まるご"
	},
	{
		original: "シモツトランスポート",
		hiragana: "しもつとらんすぽーと"
	},
	{
		original: "みたらい運送",
		hiragana: "みたらいうんそう"
	},
	{
		original: "金剛運送",
		hiragana: "こんごううんそう"
	},
	{
		original: "有限会社平井運輸",
		hiragana: "ゆうげんがいしゃひらいうんゆ"
	},
	{
		original: "安積運輸",
		hiragana: "あさかうんゆ"
	},
	{
		original: "有限会社山口商事",
		hiragana: "ゆうげんがいしゃやまぐちしょうじ"
	},
	{
		original: "エスジーリキッドサービス",
		hiragana: "えすじーりきっどさーびす"
	},
	{
		original: "七宝運輸有限会社",
		hiragana: "しっぽううんゆゆうげんがいしゃ"
	},
	{
		original: "司急送",
		hiragana: "つかさきゅうそう"
	},
	{
		original: "有限会社興西通商",
		hiragana: "ゆうげんがいしゃきょうにしつうしょう"
	},
	{
		original: "有限会社未来商運",
		hiragana: "ゆうげんがいしゃみらいしょううん"
	},
	{
		original: "ＲＥＸ",
		hiragana: "ＲＥＸ"
	},
	{
		original: "アクア",
		hiragana: "あくあ"
	},
	{
		original: "西神総業有限会社",
		hiragana: "さいしんそうぎょうゆうげんがいしゃ"
	},
	{
		original: "マルシュウ",
		hiragana: "まるしゅう"
	},
	{
		original: "北浜システム運輸",
		hiragana: "きたはましすてむうんゆ"
	},
	{
		original: "有限会社山口運送",
		hiragana: "ゆうげんがいしゃやまぐちうんそう"
	},
	{
		original: "有限会社姉川商運",
		hiragana: "ゆうげんがいしゃあねがわしょううん"
	},
	{
		original: "有限会社興永",
		hiragana: "ゆうげんがいしゃきょうえい"
	},
	{
		original: "スワロー梅田",
		hiragana: "すわろーうめだ"
	},
	{
		original: "城南運輸",
		hiragana: "じょうなんうんゆ"
	},
	{
		original: "仙北運輸",
		hiragana: "せんぼくうんゆ"
	},
	{
		original: "鍋谷運送",
		hiragana: "なべたにうんそう"
	},
	{
		original: "塚本商店",
		hiragana: "つかもとしょうてん"
	},
	{
		original: "有限会社琢美輸送",
		hiragana: "ゆうげんがいしゃたくみゆそう"
	},
	{
		original: "有限会社躍進産業運輸",
		hiragana: "ゆうげんがいしゃやくしんさんぎょううんゆ"
	},
	{
		original: "四国興産有限会社",
		hiragana: "しこくこうさんゆうげんがいしゃ"
	},
	{
		original: "成清トランスポート",
		hiragana: "なるきよとらんすぽーと"
	},
	{
		original: "有田中央運送",
		hiragana: "ありだちゅうおううんそう"
	},
	{
		original: "有限会社桐山商店",
		hiragana: "ゆうげんがいしゃきりやましょうてん"
	},
	{
		original: "小向運送有限会社",
		hiragana: "こむかいうんそうゆうげんがいしゃ"
	},
	{
		original: "有限会社北舘商運",
		hiragana: "ゆうげんがいしゃきたかんしょううん"
	},
	{
		original: "エフティプロス",
		hiragana: "えふてぃぷろす"
	},
	{
		original: "有限会社児玉商事",
		hiragana: "ゆうげんがいしゃこだましょうじ"
	},
	{
		original: "有限会社アレス",
		hiragana: "ゆうげんがいしゃあれす"
	},
	{
		original: "有限会社小嶋運送",
		hiragana: "ゆうげんがいしゃこじまうんそう"
	},
	{
		original: "マルサン運送",
		hiragana: "まるさんうんそう"
	},
	{
		original: "有限会社山形栄進運輸",
		hiragana: "ゆうげんがいしゃやまがたえいしんうんゆ"
	},
	{
		original: "土佐進栄運送有限会社",
		hiragana: "とさすすむえいうんそうゆうげんがいしゃ"
	},
	{
		original: "高生陸運",
		hiragana: "こうせいりくうん"
	},
	{
		original: "太陽運送",
		hiragana: "たいよううんそう"
	},
	{
		original: "森田物流システム有限会社",
		hiragana: "もりたぶつりゅうしすてむゆうげんがいしゃ"
	},
	{
		original: "鶏友サービス",
		hiragana: "にわとりともさーびす"
	},
	{
		original: "有限会社北条産業運輸",
		hiragana: "ゆうげんがいしゃほうじょうさんぎょううんゆ"
	},
	{
		original: "有限会社沢井建設",
		hiragana: "ゆうげんがいしゃさわいけんせつ"
	},
	{
		original: "松村興業",
		hiragana: "まつむらこうぎょう"
	},
	{
		original: "サカモトライン",
		hiragana: "さかもとらいん"
	},
	{
		original: "チェリージャパン",
		hiragana: "ちぇりーじゃぱん"
	},
	{
		original: "丸章運輸",
		hiragana: "まるしょううんゆ"
	},
	{
		original: "有限会社ミキフジ",
		hiragana: "ゆうげんがいしゃみきふじ"
	},
	{
		original: "田川運送",
		hiragana: "たがわうんそう"
	},
	{
		original: "有限会社エムライズ",
		hiragana: "ゆうげんがいしゃえむらいず"
	},
	{
		original: "スクラムライン秋田",
		hiragana: "すくらむらいんあきた"
	},
	{
		original: "尾道輸送センター",
		hiragana: "おのみちゆそうせんたー"
	},
	{
		original: "有限会社シノセイ",
		hiragana: "ゆうげんがいしゃしのせい"
	},
	{
		original: "大黒運輸",
		hiragana: "だいこくうんゆ"
	},
	{
		original: "有限会社澤田機運",
		hiragana: "ゆうげんがいしゃさわだきうん"
	},
	{
		original: "栄信運輸",
		hiragana: "えいしんうんゆ"
	},
	{
		original: "河合組回漕店",
		hiragana: "かわいくみかいそうみせ"
	},
	{
		original: "新憲",
		hiragana: "しんのり"
	},
	{
		original: "タクミ運送",
		hiragana: "たくみうんそう"
	},
	{
		original: "安曇",
		hiragana: "あずみ"
	},
	{
		original: "有限会社東田運輸",
		hiragana: "ゆうげんがいしゃひがしだうんゆ"
	},
	{
		original: "有限会社加藤商事",
		hiragana: "ゆうげんがいしゃかとうしょうじ"
	},
	{
		original: "若旅運送",
		hiragana: "じゃくたびうんそう"
	},
	{
		original: "有限会社明鶴流通",
		hiragana: "ゆうげんがいしゃめいつるりゅうつう"
	},
	{
		original: "ＫＴＰ",
		hiragana: "ＫＴＰ"
	},
	{
		original: "有限会社北新海運",
		hiragana: "ゆうげんがいしゃきたしんかいうん"
	},
	{
		original: "弘豊運輸有限会社",
		hiragana: "ひろしゆたかうんゆゆうげんがいしゃ"
	},
	{
		original: "大阪牧迫運輸",
		hiragana: "おおさかまきさこうんゆ"
	},
	{
		original: "有限会社渡辺運送",
		hiragana: "ゆうげんがいしゃわたなべうんそう"
	},
	{
		original: "有限会社昭和運送",
		hiragana: "ゆうげんがいしゃしょうわうんそう"
	},
	{
		original: "有限会社ハイ・テック物流",
		hiragana: "ゆうげんがいしゃはい・てっくぶつりゅう"
	},
	{
		original: "愛電気",
		hiragana: "あいでんき"
	},
	{
		original: "カノウ産業",
		hiragana: "かのうさんぎょう"
	},
	{
		original: "エムシーエス",
		hiragana: "えむしーえす"
	},
	{
		original: "亀田キャリー",
		hiragana: "かめだきゃりー"
	},
	{
		original: "イマカツ",
		hiragana: "いまかつ"
	},
	{
		original: "有限会社栄梱包商事",
		hiragana: "ゆうげんがいしゃさかえこんぽうしょうじ"
	},
	{
		original: "有限会社稲垣重機",
		hiragana: "ゆうげんがいしゃいながきじゅうき"
	},
	{
		original: "丸石運輸有限会社",
		hiragana: "まるいしうんゆゆうげんがいしゃ"
	},
	{
		original: "田中運輸倉庫",
		hiragana: "たなかうんゆそうこ"
	},
	{
		original: "コスコシッピングロジスティックスジャパン",
		hiragana: "こすこしっぴんぐろじすてぃっくすじゃぱん"
	},
	{
		original: "江連重機",
		hiragana: "えづれじゅうき"
	},
	{
		original: "有限会社丸徳物流",
		hiragana: "ゆうげんがいしゃまるとくぶつりゅう"
	},
	{
		original: "行田運輸",
		hiragana: "ぎょうだうんゆ"
	},
	{
		original: "日興運輸",
		hiragana: "にっこううんゆ"
	},
	{
		original: "和泉産業",
		hiragana: "いずみさんぎょう"
	},
	{
		original: "有限会社メンテナンス不来方",
		hiragana: "ゆうげんがいしゃめんてなんすこずかた"
	},
	{
		original: "丸林商工",
		hiragana: "まるばやししょうこう"
	},
	{
		original: "有限会社瀬の川物流",
		hiragana: "ゆうげんがいしゃせのかわぶつりゅう"
	},
	{
		original: "ＳＡＷＡＤＡ",
		hiragana: "ＳＡＷＡＤＡ"
	},
	{
		original: "Ｔ．Ｍ．Ｕ物流",
		hiragana: "Ｔ．Ｍ．Ｕぶつりゅう"
	},
	{
		original: "高知トレーラサービス",
		hiragana: "こうちとれーらさーびす"
	},
	{
		original: "有限会社みのり運輸",
		hiragana: "ゆうげんがいしゃみのりうんゆ"
	},
	{
		original: "有限会社トランスポート清",
		hiragana: "ゆうげんがいしゃとらんすぽーときよし"
	},
	{
		original: "ＨＩＫＡＲＩ・トランス",
		hiragana: "ＨＩＫＡＲＩ・とらんす"
	},
	{
		original: "鴻池商運",
		hiragana: "こうのいけしょううん"
	},
	{
		original: "有限会社青森流通センター",
		hiragana: "ゆうげんがいしゃあおもりりゅうつうせんたー"
	},
	{
		original: "太田運送店",
		hiragana: "おおたうんそうてん"
	},
	{
		original: "有限会社瀬戸内トランスポート",
		hiragana: "ゆうげんがいしゃせとうちとらんすぽーと"
	},
	{
		original: "有限会社阿讃急行",
		hiragana: "ゆうげんがいしゃあさんきゅうこう"
	},
	{
		original: "東日本物流開発",
		hiragana: "ひがしにほんぶつりゅうかいはつ"
	},
	{
		original: "有限会社新興運輸",
		hiragana: "ゆうげんがいしゃしんこううんゆ"
	},
	{
		original: "エム・ジー・アイ",
		hiragana: "えむ・じー・あい"
	},
	{
		original: "有限会社関東田名見運輸",
		hiragana: "ゆうげんがいしゃかんとうたなけんうんゆ"
	},
	{
		original: "エムズカンパニー",
		hiragana: "えむずかんぱにー"
	},
	{
		original: "石塚運送",
		hiragana: "いしづかうんそう"
	},
	{
		original: "清水運輸倉庫",
		hiragana: "しみずうんゆそうこ"
	},
	{
		original: "ウスイ",
		hiragana: "うすい"
	},
	{
		original: "川サ運輸",
		hiragana: "かわさうんゆ"
	},
	{
		original: "マルヨシ物流",
		hiragana: "まるよしぶつりゅう"
	},
	{
		original: "有限会社トヨダ",
		hiragana: "ゆうげんがいしゃとよだ"
	},
	{
		original: "松豊産業",
		hiragana: "まつとよただぎょう"
	},
	{
		original: "矢内運輸",
		hiragana: "やないうんゆ"
	},
	{
		original: "大石運輸",
		hiragana: "おおいしうんゆ"
	},
	{
		original: "栄進運輸",
		hiragana: "えいしんうんゆ"
	},
	{
		original: "高運送",
		hiragana: "たかうんそう"
	},
	{
		original: "有限会社三和急送",
		hiragana: "ゆうげんがいしゃさんわきゅうそう"
	},
	{
		original: "有限会社横山商会",
		hiragana: "ゆうげんがいしゃよこやましょうかい"
	},
	{
		original: "クリーン・アップ",
		hiragana: "くりーん・あっぷ"
	},
	{
		original: "ＩＣＳ　ＢＲＩＤＧＥ",
		hiragana: "ＩＣＳ　ＢＲＩＤＧＥ"
	},
	{
		original: "大阪北合同運送",
		hiragana: "おおさかきたごうどううんそう"
	},
	{
		original: "大浩運輸",
		hiragana: "たいこううんゆ"
	},
	{
		original: "野村運送有限会社",
		hiragana: "のむらうんそうゆうげんがいしゃ"
	},
	{
		original: "有限会社大阪メッセンジャー",
		hiragana: "ゆうげんがいしゃおおさかめっせんじゃー"
	},
	{
		original: "平子水産",
		hiragana: "ひらこすいさん"
	},
	{
		original: "有限会社ロジス九州",
		hiragana: "ゆうげんがいしゃろじすきゅうしゅう"
	},
	{
		original: "今井運送",
		hiragana: "いまいうんそう"
	},
	{
		original: "尾又運送",
		hiragana: "おまたうんそう"
	},
	{
		original: "ダイカツ運送",
		hiragana: "だいかつうんそう"
	},
	{
		original: "藤商事",
		hiragana: "ふじしょうじ"
	},
	{
		original: "有限会社和宏",
		hiragana: "ゆうげんがいしゃかずひろ"
	},
	{
		original: "松浦運送有限会社",
		hiragana: "まつうらうんそうゆうげんがいしゃ"
	},
	{
		original: "東原畜産",
		hiragana: "ひがしはらちくさん"
	},
	{
		original: "ミヤト倉庫",
		hiragana: "みやとそうこ"
	},
	{
		original: "有限会社内田運送",
		hiragana: "ゆうげんがいしゃうちだうんそう"
	},
	{
		original: "ケイエスシー物流",
		hiragana: "けいえすしーぶつりゅう"
	},
	{
		original: "日和崎運輸",
		hiragana: "ひよりざきうんゆ"
	},
	{
		original: "アバンテック",
		hiragana: "あばんてっく"
	},
	{
		original: "成和物流",
		hiragana: "しげかずぶつりゅう"
	},
	{
		original: "溝口",
		hiragana: "みぞぐち"
	},
	{
		original: "紅音運輸",
		hiragana: "くれないおとうんゆ"
	},
	{
		original: "有限会社荒古運送店",
		hiragana: "ゆうげんがいしゃこうこうんそうてん"
	},
	{
		original: "海吉運送有限会社",
		hiragana: "うみきちうんそうゆうげんがいしゃ"
	},
	{
		original: "ＹＡＭＡＴＳＵ",
		hiragana: "ＹＡＭＡＴＳＵ"
	},
	{
		original: "有限会社波部商会",
		hiragana: "ゆうげんがいしゃはべしょうかい"
	},
	{
		original: "有限会社藤田運輸",
		hiragana: "ゆうげんがいしゃふじたうんゆ"
	},
	{
		original: "引越革命九州",
		hiragana: "ひっこしかくめいきゅうしゅう"
	},
	{
		original: "金丸",
		hiragana: "かねまる"
	},
	{
		original: "有限会社佐藤運輸",
		hiragana: "ゆうげんがいしゃさとううんゆ"
	},
	{
		original: "西志商事",
		hiragana: "にしこころざししょうじ"
	},
	{
		original: "マルヒ急送",
		hiragana: "まるひきゅうそう"
	},
	{
		original: "古屋運送",
		hiragana: "ふるやうんそう"
	},
	{
		original: "弘東",
		hiragana: "ひろしひがし"
	},
	{
		original: "有限会社正貴物流",
		hiragana: "ゆうげんがいしゃまさたかぶつりゅう"
	},
	{
		original: "山代",
		hiragana: "やましろ"
	},
	{
		original: "有正運輸",
		hiragana: "ありまさうんゆ"
	},
	{
		original: "居内運送",
		hiragana: "きょないうんそう"
	},
	{
		original: "沖縄海陸物流",
		hiragana: "おきなわかいりくぶつりゅう"
	},
	{
		original: "三創アドバンス",
		hiragana: "さんそうあどばんす"
	},
	{
		original: "大森倉運",
		hiragana: "おおもりくらうん"
	},
	{
		original: "柳井運送",
		hiragana: "やないうんそう"
	},
	{
		original: "有限会社スカイ物流",
		hiragana: "ゆうげんがいしゃすかいぶつりゅう"
	},
	{
		original: "なかいちｅｘｐｒｅｓｓ",
		hiragana: "なかいちｅｘｐｒｅｓｓ"
	},
	{
		original: "ＮＫインターナショナル",
		hiragana: "ＮＫいんたーなしょなる"
	},
	{
		original: "丸八運輸社",
		hiragana: "まるはちうんゆしゃ"
	},
	{
		original: "丸和運送",
		hiragana: "まるわうんそう"
	},
	{
		original: "あさひ運輸商事",
		hiragana: "あさひうんゆしょうじ"
	},
	{
		original: "河野運輸",
		hiragana: "こうのうんゆ"
	},
	{
		original: "有限会社宮脇運輸",
		hiragana: "ゆうげんがいしゃみやわきうんゆ"
	},
	{
		original: "斑鳩ロジコム",
		hiragana: "いかるがろじこむ"
	},
	{
		original: "信濃輸送",
		hiragana: "しなのゆそう"
	},
	{
		original: "有限会社北海道家具運輸",
		hiragana: "ゆうげんがいしゃほっかいどうかぐうんゆ"
	},
	{
		original: "有限会社金子物流",
		hiragana: "ゆうげんがいしゃかねこぶつりゅう"
	},
	{
		original: "新潟高東興業",
		hiragana: "にいがたたかとうこうぎょう"
	},
	{
		original: "サンテック",
		hiragana: "さんてっく"
	},
	{
		original: "有限会社ツツイコーポレーション",
		hiragana: "ゆうげんがいしゃつついこーぽれーしょん"
	},
	{
		original: "エクスプランニング",
		hiragana: "えくすぷらんにんぐ"
	},
	{
		original: "日南運送",
		hiragana: "にちなんうんそう"
	},
	{
		original: "ＴＲＳ",
		hiragana: "ＴＲＳ"
	},
	{
		original: "ネクストインザループ",
		hiragana: "ねくすといんざるーぷ"
	},
	{
		original: "田辺組運送",
		hiragana: "たなべくみうんそう"
	},
	{
		original: "丸秀運送",
		hiragana: "まるしゅううんそう"
	},
	{
		original: "山一運輸",
		hiragana: "やまいちうんゆ"
	},
	{
		original: "有限会社東伯運輸",
		hiragana: "ゆうげんがいしゃとうはくうんゆ"
	},
	{
		original: "谷田運送",
		hiragana: "たにたうんそう"
	},
	{
		original: "ニッセイ運輸",
		hiragana: "にっせいうんゆ"
	},
	{
		original: "鹿島臨海通運",
		hiragana: "かしまりんかいつううん"
	},
	{
		original: "佳田トランスポート",
		hiragana: "かたとらんすぽーと"
	},
	{
		original: "有限会社赤坂運輸",
		hiragana: "ゆうげんがいしゃあかさかうんゆ"
	},
	{
		original: "栄運輸",
		hiragana: "えいうんゆ"
	},
	{
		original: "イズミ商会",
		hiragana: "いずみしょうかい"
	},
	{
		original: "有限会社キャリーアート",
		hiragana: "ゆうげんがいしゃきゃりーあーと"
	},
	{
		original: "丸大産業運輸",
		hiragana: "まるだいさんぎょううんゆ"
	},
	{
		original: "藤田運輸",
		hiragana: "ふじたうんゆ"
	},
	{
		original: "赤井運輸",
		hiragana: "あかいうんゆ"
	},
	{
		original: "有限会社アミティ・トレット",
		hiragana: "ゆうげんがいしゃあみてぃ・とれっと"
	},
	{
		original: "ＳＫライナー関西",
		hiragana: "ＳＫらいなーかんさい"
	},
	{
		original: "有限会社伊勢原運輸",
		hiragana: "ゆうげんがいしゃいせはらうんゆ"
	},
	{
		original: "府中高速運輸",
		hiragana: "ふちゅうこうそくうんゆ"
	},
	{
		original: "有限会社伊藤運送店",
		hiragana: "ゆうげんがいしゃいとううんそうてん"
	},
	{
		original: "八鹿逓送",
		hiragana: "ようかていそう"
	},
	{
		original: "備海運送有限会社",
		hiragana: "びかいうんそうゆうげんがいしゃ"
	},
	{
		original: "ジャパンユニティーロジスティックス",
		hiragana: "じゃぱんゆにてぃーろじすてぃっくす"
	},
	{
		original: "由原運送",
		hiragana: "ゆはらうんそう"
	},
	{
		original: "ファイン",
		hiragana: "ふぁいん"
	},
	{
		original: "だいきち",
		hiragana: "だいきち"
	},
	{
		original: "かけはし急便有限会社",
		hiragana: "かけはしきゅうびんゆうげんがいしゃ"
	},
	{
		original: "三島運輸有限会社",
		hiragana: "みしまうんゆゆうげんがいしゃ"
	},
	{
		original: "トランスポーター東京",
		hiragana: "とらんすぽーたーとうきょう"
	},
	{
		original: "助川運輸",
		hiragana: "すけがわうんゆ"
	},
	{
		original: "藤丸運送有限会社",
		hiragana: "ふじまるうんそうゆうげんがいしゃ"
	},
	{
		original: "木多運輸",
		hiragana: "きたうんゆ"
	},
	{
		original: "有限会社石川運輸",
		hiragana: "ゆうげんがいしゃいしかわうんゆ"
	},
	{
		original: "三伸運輸",
		hiragana: "さんしんうんゆ"
	},
	{
		original: "丸栄運送",
		hiragana: "まるえいうんそう"
	},
	{
		original: "豊運送",
		hiragana: "ゆたかうんそう"
	},
	{
		original: "南日通運輸",
		hiragana: "なんにちつううんゆ"
	},
	{
		original: "タカハシ",
		hiragana: "たかはし"
	},
	{
		original: "有限会社アーク運輸",
		hiragana: "ゆうげんがいしゃあーくうんゆ"
	},
	{
		original: "有限会社藤実商事",
		hiragana: "ゆうげんがいしゃふじのみしょうじ"
	},
	{
		original: "カネワ流通",
		hiragana: "かねわりゅうつう"
	},
	{
		original: "敷島陸送",
		hiragana: "しきしまりくそう"
	},
	{
		original: "稚内急行",
		hiragana: "わっかないきゅうこう"
	},
	{
		original: "川崎商事",
		hiragana: "かわさきしょうじ"
	},
	{
		original: "金八運送有限会社",
		hiragana: "きんぱちうんそうゆうげんがいしゃ"
	},
	{
		original: "神戸互洋運送",
		hiragana: "こうべごひろしうんそう"
	},
	{
		original: "古谷倉庫",
		hiragana: "ふるやそうこ"
	},
	{
		original: "新広運輸",
		hiragana: "しんこううんゆ"
	},
	{
		original: "有限会社東西物流",
		hiragana: "ゆうげんがいしゃとうざいぶつりゅう"
	},
	{
		original: "マルハラ",
		hiragana: "まるはら"
	},
	{
		original: "ファーストラン",
		hiragana: "ふぁーすとらん"
	},
	{
		original: "アジアマシナリーソリューションズ",
		hiragana: "あじあましなりーそりゅーしょんず"
	},
	{
		original: "ロード",
		hiragana: "ろーど"
	},
	{
		original: "マックスラン",
		hiragana: "まっくすらん"
	},
	{
		original: "宮浦運輸有限会社",
		hiragana: "みやうらうんゆゆうげんがいしゃ"
	},
	{
		original: "エス・エス興商",
		hiragana: "えす・えすこうしょう"
	},
	{
		original: "島本運輸有限会社",
		hiragana: "しまもとうんゆゆうげんがいしゃ"
	},
	{
		original: "清幸運輸",
		hiragana: "きよゆきうんゆ"
	},
	{
		original: "出口運送",
		hiragana: "でぐちうんそう"
	},
	{
		original: "黒田運送有限会社",
		hiragana: "くろだうんそうゆうげんがいしゃ"
	},
	{
		original: "山陽ドレージ輸送",
		hiragana: "さんようどれーじゆそう"
	},
	{
		original: "神栄運送有限会社",
		hiragana: "しんえいうんそうゆうげんがいしゃ"
	},
	{
		original: "富士運送",
		hiragana: "ふじうんそう"
	},
	{
		original: "西野回送有限会社",
		hiragana: "にしのかいそうゆうげんがいしゃ"
	},
	{
		original: "山路運送",
		hiragana: "やまじうんそう"
	},
	{
		original: "有限会社高野建材",
		hiragana: "ゆうげんがいしゃたかのけんざい"
	},
	{
		original: "高橋商運有限会社",
		hiragana: "たかはししょううんゆうげんがいしゃ"
	},
	{
		original: "ジョプロコーポレーション",
		hiragana: "じょぷろこーぽれーしょん"
	},
	{
		original: "ベストサービス横浜",
		hiragana: "べすとさーびすよこはま"
	},
	{
		original: "中国高速運輸有限会社",
		hiragana: "ちゅうごくこうそくうんゆゆうげんがいしゃ"
	},
	{
		original: "田口運輸",
		hiragana: "たぐちうんゆ"
	},
	{
		original: "高崎運送有限会社",
		hiragana: "たかさきうんそうゆうげんがいしゃ"
	},
	{
		original: "栗東貨物運送有限会社",
		hiragana: "りっとうかもつうんそうゆうげんがいしゃ"
	},
	{
		original: "若園運輸",
		hiragana: "わかぞのうんゆ"
	},
	{
		original: "有限会社今井運送",
		hiragana: "ゆうげんがいしゃいまいうんそう"
	},
	{
		original: "有限会社横坂産商運輸",
		hiragana: "ゆうげんがいしゃよこさかさんしょううんゆ"
	},
	{
		original: "かんさいウイング",
		hiragana: "かんさいういんぐ"
	},
	{
		original: "有限会社河口運送",
		hiragana: "ゆうげんがいしゃかこううんそう"
	},
	{
		original: "高野運輸",
		hiragana: "たかのうんゆ"
	},
	{
		original: "新千梱包運輸",
		hiragana: "しんせんこんぽううんゆ"
	},
	{
		original: "日立運送有限会社",
		hiragana: "ひたちうんそうゆうげんがいしゃ"
	},
	{
		original: "南開興業",
		hiragana: "なんかいこうぎょう"
	},
	{
		original: "讃州倉庫",
		hiragana: "さんしゅうそうこ"
	},
	{
		original: "ＺＡＷＡ．ｃｏｍ",
		hiragana: "ＺＡＷＡ．ｃｏｍ"
	},
	{
		original: "西北運輸",
		hiragana: "せいほくうんゆ"
	},
	{
		original: "有限会社若生実業",
		hiragana: "ゆうげんがいしゃわこうじつぎょう"
	},
	{
		original: "ミユキ運輸",
		hiragana: "みゆきうんゆ"
	},
	{
		original: "大武ロジテック",
		hiragana: "おおたけろじてっく"
	},
	{
		original: "熊井倉庫",
		hiragana: "くまいそうこ"
	},
	{
		original: "有限会社上田運輸",
		hiragana: "ゆうげんがいしゃうえだうんゆ"
	},
	{
		original: "新興運輸",
		hiragana: "しんこううんゆ"
	},
	{
		original: "河西瀝青運輸",
		hiragana: "かさいれきせいうんゆ"
	},
	{
		original: "今西商運",
		hiragana: "いまにししょううん"
	},
	{
		original: "有限会社原田運輸",
		hiragana: "ゆうげんがいしゃはらだうんゆ"
	},
	{
		original: "有限会社藤光",
		hiragana: "ゆうげんがいしゃふじひかり"
	},
	{
		original: "有限会社ライオンズ物流",
		hiragana: "ゆうげんがいしゃらいおんずぶつりゅう"
	},
	{
		original: "有限会社川上商店",
		hiragana: "ゆうげんがいしゃかわかみしょうてん"
	},
	{
		original: "有限会社利府運送",
		hiragana: "ゆうげんがいしゃりふうんそう"
	},
	{
		original: "ヒロト",
		hiragana: "ひろと"
	},
	{
		original: "コウショウ物流",
		hiragana: "こうしょうぶつりゅう"
	},
	{
		original: "萩原運輸",
		hiragana: "はぎわらうんゆ"
	},
	{
		original: "中村商会",
		hiragana: "なかむらしょうかい"
	},
	{
		original: "丸金運送",
		hiragana: "まるきんうんそう"
	},
	{
		original: "有限会社トーイン物流サービス",
		hiragana: "ゆうげんがいしゃとーいんぶつりゅうさーびす"
	},
	{
		original: "有限会社関根小型運輸",
		hiragana: "ゆうげんがいしゃせきねこがたうんゆ"
	},
	{
		original: "有限会社三原食品システム",
		hiragana: "ゆうげんがいしゃみはらしょくひんしすてむ"
	},
	{
		original: "江守物流",
		hiragana: "えもりぶつりゅう"
	},
	{
		original: "有限会社中嶋運送",
		hiragana: "ゆうげんがいしゃなかじまうんそう"
	},
	{
		original: "ＫＡＮＫＯ　ＬＩＮＥ北海道",
		hiragana: "ＫＡＮＫＯ　ＬＩＮＥほっかいどう"
	},
	{
		original: "有限会社トウショウテック",
		hiragana: "ゆうげんがいしゃとうしょうてっく"
	},
	{
		original: "有限会社平尾運輸",
		hiragana: "ゆうげんがいしゃひらおうんゆ"
	},
	{
		original: "丸山運送",
		hiragana: "まるやまうんそう"
	},
	{
		original: "ＦＵＪＩＴＡ",
		hiragana: "ＦＵＪＩＴＡ"
	},
	{
		original: "黒羽チップ",
		hiragana: "くろばちっぷ"
	},
	{
		original: "オフィスシーマ",
		hiragana: "おふぃすしーま"
	},
	{
		original: "星山運輸有限会社",
		hiragana: "ほしやまうんゆゆうげんがいしゃ"
	},
	{
		original: "池田食品",
		hiragana: "いけだしょくひん"
	},
	{
		original: "グローバルシェア",
		hiragana: "ぐろーばるしぇあ"
	},
	{
		original: "静愛物流有限会社",
		hiragana: "しずえぶつりゅうゆうげんがいしゃ"
	},
	{
		original: "エコ物流",
		hiragana: "えこぶつりゅう"
	},
	{
		original: "長岡運送",
		hiragana: "ながおかうんそう"
	},
	{
		original: "安達運輸",
		hiragana: "あだちうんゆ"
	},
	{
		original: "Ｍｏｖｅ",
		hiragana: "Ｍｏｖｅ"
	},
	{
		original: "エーワンラッシュ",
		hiragana: "えーわんらっしゅ"
	},
	{
		original: "有限会社中国物流",
		hiragana: "ゆうげんがいしゃちゅうごくぶつりゅう"
	},
	{
		original: "エネライン",
		hiragana: "えねらいん"
	},
	{
		original: "ドリーム",
		hiragana: "どりーむ"
	},
	{
		original: "朝島運輸",
		hiragana: "あさしまうんゆ"
	},
	{
		original: "ヨシダ運送",
		hiragana: "よしだうんそう"
	},
	{
		original: "有限会社小島商店",
		hiragana: "ゆうげんがいしゃこじましょうてん"
	},
	{
		original: "静和運輸",
		hiragana: "せいわうんゆ"
	},
	{
		original: "有限会社アンカーエクスプレス",
		hiragana: "ゆうげんがいしゃあんかーえくすぷれす"
	},
	{
		original: "アスカ運輸",
		hiragana: "あすかうんゆ"
	},
	{
		original: "スリーボンドロジスティクス",
		hiragana: "すりーぼんどろじすてぃくす"
	},
	{
		original: "一力",
		hiragana: "いちりき"
	},
	{
		original: "水越",
		hiragana: "みずこし"
	},
	{
		original: "有限会社近畿トラフィック",
		hiragana: "ゆうげんがいしゃきんきとらふぃっく"
	},
	{
		original: "有限会社北九ドラム産業",
		hiragana: "ゆうげんがいしゃきたきゅうどらむさんぎょう"
	},
	{
		original: "三創",
		hiragana: "さんそう"
	},
	{
		original: "Ａ１",
		hiragana: "Ａ１"
	},
	{
		original: "北九ドレージ",
		hiragana: "きたきゅうどれーじ"
	},
	{
		original: "有限会社コーユー",
		hiragana: "ゆうげんがいしゃこーゆー"
	},
	{
		original: "有限会社内藤トランスポート",
		hiragana: "ゆうげんがいしゃないとうとらんすぽーと"
	},
	{
		original: "柳川ダイキュー運輸",
		hiragana: "やながわだいきゅーうんゆ"
	},
	{
		original: "菊名運輸",
		hiragana: "きくなうんゆ"
	},
	{
		original: "トラスト物流",
		hiragana: "とらすとぶつりゅう"
	},
	{
		original: "有限会社サンキュー物流",
		hiragana: "ゆうげんがいしゃさんきゅーぶつりゅう"
	},
	{
		original: "コウメイ",
		hiragana: "こうめい"
	},
	{
		original: "末廣輸送",
		hiragana: "すえひろゆそう"
	},
	{
		original: "合田運送",
		hiragana: "ごうだうんそう"
	},
	{
		original: "アサケン",
		hiragana: "あさけん"
	},
	{
		original: "有限会社トマト急便",
		hiragana: "ゆうげんがいしゃとまときゅうびん"
	},
	{
		original: "藤江商事",
		hiragana: "ふじえしょうじ"
	},
	{
		original: "大野運送",
		hiragana: "おおのうんそう"
	},
	{
		original: "有限会社細畑重機",
		hiragana: "ゆうげんがいしゃさいはたけじゅうき"
	},
	{
		original: "有限会社篠栗運輸",
		hiragana: "ゆうげんがいしゃささぐりうんゆ"
	},
	{
		original: "山田商事",
		hiragana: "やまだしょうじ"
	},
	{
		original: "有限会社丸将配送",
		hiragana: "ゆうげんがいしゃまるしょうはいそう"
	},
	{
		original: "三興運輸有限会社",
		hiragana: "さんこううんゆゆうげんがいしゃ"
	},
	{
		original: "有限会社卯之町重機",
		hiragana: "ゆうげんがいしゃうのまちじゅうき"
	},
	{
		original: "有限会社寿運送",
		hiragana: "ゆうげんがいしゃひさしうんそう"
	},
	{
		original: "村上物流サービス",
		hiragana: "むらかみぶつりゅうさーびす"
	},
	{
		original: "丸市倉庫",
		hiragana: "まるいちそうこ"
	},
	{
		original: "共栄運輸",
		hiragana: "きょうえいうんゆ"
	},
	{
		original: "有限会社マルイシ工業",
		hiragana: "ゆうげんがいしゃまるいしこうぎょう"
	},
	{
		original: "塩川運輸",
		hiragana: "しおかわうんゆ"
	},
	{
		original: "鹿追貨物自動車",
		hiragana: "しかおいかもつじどうしゃ"
	},
	{
		original: "司運輸",
		hiragana: "つかさうんゆ"
	},
	{
		original: "上郡運送",
		hiragana: "かみごおりうんそう"
	},
	{
		original: "置田組",
		hiragana: "おきたくみ"
	},
	{
		original: "アライ商会",
		hiragana: "あらいしょうかい"
	},
	{
		original: "ウッドチップサービス",
		hiragana: "うっどちっぷさーびす"
	},
	{
		original: "有限会社港町運送",
		hiragana: "ゆうげんがいしゃみなとまちうんそう"
	},
	{
		original: "有限会社黒川運輸",
		hiragana: "ゆうげんがいしゃくろかわうんゆ"
	},
	{
		original: "東北流通",
		hiragana: "とうほくりゅうつう"
	},
	{
		original: "ミナト運輸",
		hiragana: "みなとうんゆ"
	},
	{
		original: "有限会社まるさ運輸",
		hiragana: "ゆうげんがいしゃまるさうんゆ"
	},
	{
		original: "有限会社扇崎運輸",
		hiragana: "ゆうげんがいしゃおうぎさきうんゆ"
	},
	{
		original: "有限会社清水商事",
		hiragana: "ゆうげんがいしゃしみずしょうこと"
	},
	{
		original: "河合商運有限会社",
		hiragana: "かわいしょううんゆうげんがいしゃ"
	},
	{
		original: "ロードワーク",
		hiragana: "ろーどわーく"
	},
	{
		original: "田端運輸",
		hiragana: "たばたうんゆ"
	},
	{
		original: "有限会社東配",
		hiragana: "ゆうげんがいしゃひがしはい"
	},
	{
		original: "三成物流",
		hiragana: "みつなりぶつりゅう"
	},
	{
		original: "カワベキャリーシステム",
		hiragana: "かわべきゃりーしすてむ"
	},
	{
		original: "有限会社千厩運送",
		hiragana: "ゆうげんがいしゃせんまやうんそう"
	},
	{
		original: "仙台臨海通運",
		hiragana: "せんだいりんかいつううん"
	},
	{
		original: "カーズ",
		hiragana: "かーず"
	},
	{
		original: "河内運送有限会社",
		hiragana: "かわうちうんそうゆうげんがいしゃ"
	},
	{
		original: "佐藤サービス",
		hiragana: "さとうさーびす"
	},
	{
		original: "有限会社南海運送",
		hiragana: "ゆうげんがいしゃなんかいうんそう"
	},
	{
		original: "田中陸運有限会社",
		hiragana: "たなかりくうんゆうげんがいしゃ"
	},
	{
		original: "有限会社トラフィック・ワダ",
		hiragana: "ゆうげんがいしゃとらふぃっく・わだ"
	},
	{
		original: "有限会社丸橋運輸",
		hiragana: "ゆうげんがいしゃまるはしうんゆ"
	},
	{
		original: "有限会社タマコウ",
		hiragana: "ゆうげんがいしゃたまこう"
	},
	{
		original: "ヒロハイ・コーポレーション",
		hiragana: "ひろはい・こーぽれーしょん"
	},
	{
		original: "富士重機運送",
		hiragana: "ふじじゅうきうんそう"
	},
	{
		original: "戸部",
		hiragana: "とべ"
	},
	{
		original: "有限会社広栄運輸機工",
		hiragana: "ゆうげんがいしゃひろえうんゆきこう"
	},
	{
		original: "山林運送",
		hiragana: "さんりんうんそう"
	},
	{
		original: "津田沼運輸サービス",
		hiragana: "つだぬまうんゆさーびす"
	},
	{
		original: "大光物流",
		hiragana: "おおみつぶつりゅう"
	},
	{
		original: "井上興業",
		hiragana: "いのうえこうぎょう"
	},
	{
		original: "三葉運輸",
		hiragana: "みつばうんゆ"
	},
	{
		original: "山口運送有限会社",
		hiragana: "やまぐちうんそうゆうげんがいしゃ"
	},
	{
		original: "伊東商会",
		hiragana: "いとうしょうかい"
	},
	{
		original: "共進運輸有限会社",
		hiragana: "きょうしんうんゆゆうげんがいしゃ"
	},
	{
		original: "エムエムシーシステム",
		hiragana: "えむえむしーしすてむ"
	},
	{
		original: "関西瑞穂運輸",
		hiragana: "かんさいみずほうんゆ"
	},
	{
		original: "有限会社あづま商運",
		hiragana: "ゆうげんがいしゃあづましょううん"
	},
	{
		original: "永野運送有限会社",
		hiragana: "ながのうんそうゆうげんがいしゃ"
	},
	{
		original: "勝運",
		hiragana: "しょううん"
	},
	{
		original: "セイリュウ運送",
		hiragana: "せいりゅううんそう"
	},
	{
		original: "丸神商事運輸",
		hiragana: "まるかみしょうじうんゆ"
	},
	{
		original: "長船貨物",
		hiragana: "おさふねかもつ"
	},
	{
		original: "サンワテック",
		hiragana: "さんわてっく"
	},
	{
		original: "ジャスト新潟",
		hiragana: "じゃすとにいがた"
	},
	{
		original: "ティーエス物流",
		hiragana: "てぃーえすぶつりゅう"
	},
	{
		original: "有限会社ア・プリオリ",
		hiragana: "ゆうげんがいしゃあ・ぷりおり"
	},
	{
		original: "有限会社谷口運送",
		hiragana: "ゆうげんがいしゃたにぐちうんそう"
	},
	{
		original: "有限会社野辺地運輸",
		hiragana: "ゆうげんがいしゃのへじうんゆ"
	},
	{
		original: "ロジサポート",
		hiragana: "ろじさぽーと"
	},
	{
		original: "有限会社大槻流通サービス",
		hiragana: "ゆうげんがいしゃおおつきりゅうつうさーびす"
	},
	{
		original: "グラウンド・キャリー",
		hiragana: "ぐらうんど・きゃりー"
	},
	{
		original: "大栄運輸",
		hiragana: "だいえいうんゆ"
	},
	{
		original: "三田運送",
		hiragana: "みたうんそう"
	},
	{
		original: "マルニ興業",
		hiragana: "まるにこうぎょう"
	},
	{
		original: "共生運輸",
		hiragana: "きょうせいうんゆ"
	},
	{
		original: "南九州丸健ロジスティクス",
		hiragana: "みなみきゅうしゅうまるたけしろじすてぃくす"
	},
	{
		original: "有限会社野上運輸",
		hiragana: "ゆうげんがいしゃのがみうんゆ"
	},
	{
		original: "北部丸勇",
		hiragana: "ほくぶまるいさみ"
	},
	{
		original: "協盛物流",
		hiragana: "きょうもりものりゅう"
	},
	{
		original: "沖縄ポートターミナル",
		hiragana: "おきなわぽーとたーみなる"
	},
	{
		original: "ながの",
		hiragana: "ながの"
	},
	{
		original: "下田物流",
		hiragana: "しもだぶつりゅう"
	},
	{
		original: "三笠運送有限会社",
		hiragana: "みかさうんそうゆうげんがいしゃ"
	},
	{
		original: "葵コーポレーション",
		hiragana: "あおいこーぽれーしょん"
	},
	{
		original: "有限会社高藤",
		hiragana: "ゆうげんがいしゃたかとう"
	},
	{
		original: "有限会社シブヤ運輸工業",
		hiragana: "ゆうげんがいしゃしぶやうんゆこうぎょう"
	},
	{
		original: "有限会社デミライン",
		hiragana: "ゆうげんがいしゃでみらいん"
	},
	{
		original: "和田岬運送",
		hiragana: "わだみさきうんそう"
	},
	{
		original: "茨城運送",
		hiragana: "いばらきうんそう"
	},
	{
		original: "ＡＣＴ　Ｊａｐａｎ",
		hiragana: "ＡＣＴ　Ｊａｐａｎ"
	},
	{
		original: "有限会社上原運送",
		hiragana: "ゆうげんがいしゃうえはらうんそう"
	},
	{
		original: "有限会社十和運送",
		hiragana: "ゆうげんがいしゃとうわうんそう"
	},
	{
		original: "佐藤運送",
		hiragana: "さとううんそう"
	},
	{
		original: "有限会社間瀨運送",
		hiragana: "ゆうげんがいしゃかんそう"
	},
	{
		original: "リード・フーズ",
		hiragana: "りーど・ふーず"
	},
	{
		original: "広芸運輸有限会社",
		hiragana: "こうげいうんゆゆうげんがいしゃ"
	},
	{
		original: "宝珠運輸",
		hiragana: "ほうしゅうんゆ"
	},
	{
		original: "ビーエム物流有限会社",
		hiragana: "びーえむぶつりゅうゆうげんがいしゃ"
	},
	{
		original: "加古川合同運送",
		hiragana: "かこがわごうどううんそう"
	},
	{
		original: "奈良県合同陸運",
		hiragana: "ならけんごうどうりくうん"
	},
	{
		original: "愛媛海運",
		hiragana: "えひめかいうん"
	},
	{
		original: "大星運輸",
		hiragana: "おおほしうんゆ"
	},
	{
		original: "伊藤ハウス",
		hiragana: "いとうはうす"
	},
	{
		original: "有限会社北成興業",
		hiragana: "ゆうげんがいしゃきたせいこうぎょう"
	},
	{
		original: "吉元商事",
		hiragana: "よしもとしょうじ"
	},
	{
		original: "富運有限会社",
		hiragana: "とみうんゆうげんがいしゃ"
	},
	{
		original: "船岡運送",
		hiragana: "ふなおかうんそう"
	},
	{
		original: "シーグラン",
		hiragana: "しーぐらん"
	},
	{
		original: "三和運送",
		hiragana: "さんわうんそう"
	},
	{
		original: "三協配送サービス",
		hiragana: "さんきょうはいそうさーびす"
	},
	{
		original: "小松通商",
		hiragana: "こまつつうしょう"
	},
	{
		original: "有限会社佐々木運輸",
		hiragana: "ゆうげんがいしゃささきうんゆ"
	},
	{
		original: "南濃運輸",
		hiragana: "なんのううんゆ"
	},
	{
		original: "まるや山本運送有限会社",
		hiragana: "まるややまもとうんそうゆうげんがいしゃ"
	},
	{
		original: "美濃ピィビィエス",
		hiragana: "みのぴぃびぃえす"
	},
	{
		original: "愛伸",
		hiragana: "あいしん"
	},
	{
		original: "共立運送",
		hiragana: "きょうりつうんそう"
	},
	{
		original: "丸筑運送",
		hiragana: "まるつくうんそう"
	},
	{
		original: "大林建設",
		hiragana: "おおばやしけんせつ"
	},
	{
		original: "森本商店",
		hiragana: "もりもとしょうてん"
	},
	{
		original: "内田物流",
		hiragana: "うちだぶつりゅう"
	},
	{
		original: "有限会社玉川運輸",
		hiragana: "ゆうげんがいしゃたまがわうんゆ"
	},
	{
		original: "協和運送有限会社",
		hiragana: "きょうわうんそうゆうげんがいしゃ"
	},
	{
		original: "Ｍ．Ｓ．Ｔ物流",
		hiragana: "Ｍ．Ｓ．Ｔぶつりゅう"
	},
	{
		original: "大津運送",
		hiragana: "おおつうんそう"
	},
	{
		original: "松本運送",
		hiragana: "まつもとうんそう"
	},
	{
		original: "ケイズ運輸有限会社",
		hiragana: "けいずうんゆゆうげんがいしゃ"
	},
	{
		original: "有限会社東南運送",
		hiragana: "ゆうげんがいしゃとうなんうんそう"
	},
	{
		original: "城島陸運有限会社",
		hiragana: "じょうしまりくうんゆうげんがいしゃ"
	},
	{
		original: "二本松三和運送",
		hiragana: "にほんまつさんわうんそう"
	},
	{
		original: "広集舎",
		hiragana: "こうしゅうしゃ"
	},
	{
		original: "早川商事",
		hiragana: "はやかわしょうじ"
	},
	{
		original: "さくら運送",
		hiragana: "さくらうんそう"
	},
	{
		original: "三紅運輸有限会社",
		hiragana: "さんくれないうんゆゆうげんがいしゃ"
	},
	{
		original: "川崎デリバーサービス有限会社",
		hiragana: "かわさきでりばーさーびすゆうげんがいしゃ"
	},
	{
		original: "エムティライン",
		hiragana: "えむてぃらいん"
	},
	{
		original: "クニヒロ運輸",
		hiragana: "くにひろうんゆ"
	},
	{
		original: "有限会社森宮運輸",
		hiragana: "ゆうげんがいしゃもりみやうんゆ"
	},
	{
		original: "甲洋",
		hiragana: "こうよう"
	},
	{
		original: "浅野川運輸",
		hiragana: "あさのかわうんゆ"
	},
	{
		original: "有限会社光産業開発工業",
		hiragana: "ゆうげんがいしゃひかりさんぎょうかいはつこうぎょう"
	},
	{
		original: "有限会社森澤運送",
		hiragana: "ゆうげんがいしゃもりさわうんそう"
	},
	{
		original: "有限会社菅原商事",
		hiragana: "ゆうげんがいしゃすがわらしょうじ"
	},
	{
		original: "有限会社ケーズライン",
		hiragana: "ゆうげんがいしゃけーずらいん"
	},
	{
		original: "郷運輸",
		hiragana: "さとうんゆ"
	},
	{
		original: "大翔",
		hiragana: "ひろと"
	},
	{
		original: "東洋運輸有限会社",
		hiragana: "とうよううんゆゆうげんがいしゃ"
	},
	{
		original: "エース",
		hiragana: "えーす"
	},
	{
		original: "有限会社森運輸",
		hiragana: "ゆうげんがいしゃもりうんゆ"
	},
	{
		original: "西日本ライナー",
		hiragana: "にしにほんらいなー"
	},
	{
		original: "有限会社酒寄資源センター",
		hiragana: "ゆうげんがいしゃさかよりしげんせんたー"
	},
	{
		original: "サニートラスト",
		hiragana: "さにーとらすと"
	},
	{
		original: "有限会社ミナミ",
		hiragana: "ゆうげんがいしゃみなみ"
	},
	{
		original: "有限会社米長運送",
		hiragana: "ゆうげんがいしゃよねながうんそう"
	},
	{
		original: "ブレバリー",
		hiragana: "ぶればりー"
	},
	{
		original: "有限会社古賀通商",
		hiragana: "ゆうげんがいしゃこがつうしょう"
	},
	{
		original: "ＲＩＳＥ",
		hiragana: "ＲＩＳＥ"
	},
	{
		original: "協栄運輸",
		hiragana: "きょうえいうんゆ"
	},
	{
		original: "蓼沼運輸",
		hiragana: "たでぬまうんゆ"
	},
	{
		original: "八代運送",
		hiragana: "やつしろうんそう"
	},
	{
		original: "有限会社山下運送",
		hiragana: "ゆうげんがいしゃやましたうんそう"
	},
	{
		original: "矢崎運輸倉庫",
		hiragana: "やざきうんゆそうこ"
	},
	{
		original: "箟岳運輸",
		hiragana: "きんがくうんゆ"
	},
	{
		original: "香川フレッシュシステム",
		hiragana: "かがわふれっしゅしすてむ"
	},
	{
		original: "有限会社小山運送",
		hiragana: "ゆうげんがいしゃおやまうんそう"
	},
	{
		original: "有限会社エム・ユーシステム",
		hiragana: "ゆうげんがいしゃえむ・ゆーしすてむ"
	},
	{
		original: "藁科運輸有限会社",
		hiragana: "わらかうんゆゆうげんがいしゃ"
	},
	{
		original: "横浜流通有限会社",
		hiragana: "よこはまりゅうつうゆうげんがいしゃ"
	},
	{
		original: "浪輪ケミカル",
		hiragana: "なみわけみかる"
	},
	{
		original: "アレックス",
		hiragana: "あれっくす"
	},
	{
		original: "土井",
		hiragana: "つちい"
	},
	{
		original: "協和運輸有限会社",
		hiragana: "きょうわうんゆゆうげんがいしゃ"
	},
	{
		original: "藤友物流",
		hiragana: "ふじともぶつりゅう"
	},
	{
		original: "ムトウ",
		hiragana: "むとう"
	},
	{
		original: "中村貨物運送",
		hiragana: "なかむらかもつうんそう"
	},
	{
		original: "大井運送有限会社",
		hiragana: "おおいうんそうゆうげんがいしゃ"
	},
	{
		original: "有限会社周南海陸運送",
		hiragana: "ゆうげんがいしゃしゅうなんかいりくうんそう"
	},
	{
		original: "旭流通",
		hiragana: "あさひりゅうつう"
	},
	{
		original: "藤商事有限会社",
		hiragana: "ふじしょうじゆうげんがいしゃ"
	},
	{
		original: "稚内通運",
		hiragana: "わっかないつううん"
	},
	{
		original: "有限会社秀永運送",
		hiragana: "ゆうげんがいしゃしゅうえいうんそう"
	},
	{
		original: "有限会社日新運輸",
		hiragana: "ゆうげんがいしゃにっしんうんゆ"
	},
	{
		original: "有限会社勝成運送",
		hiragana: "ゆうげんがいしゃかつなりうんそう"
	},
	{
		original: "長栄運送",
		hiragana: "ちょうえいうんそう"
	},
	{
		original: "有限会社マルユエキスプレス",
		hiragana: "ゆうげんがいしゃまるゆえきすぷれす"
	},
	{
		original: "幸運",
		hiragana: "こううん"
	},
	{
		original: "有限会社敬敏運送",
		hiragana: "ゆうげんがいしゃたかとしうんそう"
	},
	{
		original: "亮勇商事",
		hiragana: "あきらいさみしょうじ"
	},
	{
		original: "徳積有限会社",
		hiragana: "とこさかゆうげんがいしゃ"
	},
	{
		original: "若松鎮西運送有限会社",
		hiragana: "わかまつちんぜいうんそうゆうげんがいしゃ"
	},
	{
		original: "ＭＡサービス",
		hiragana: "ＭＡさーびす"
	},
	{
		original: "シティ",
		hiragana: "してぃ"
	},
	{
		original: "庄内定温輸送",
		hiragana: "しょうないていおんゆそう"
	},
	{
		original: "畑中運輸建設",
		hiragana: "はたなかうんゆけんせつ"
	},
	{
		original: "忠央運送有限会社",
		hiragana: "ただよしうんそうゆうげんがいしゃ"
	},
	{
		original: "有限会社中央物流",
		hiragana: "ゆうげんがいしゃちゅうおうぶつりゅう"
	},
	{
		original: "宝栄運輸",
		hiragana: "たからえいうんゆ"
	},
	{
		original: "テツソー",
		hiragana: "てつそー"
	},
	{
		original: "ネオスタイルロジ",
		hiragana: "ねおすたいるろじ"
	},
	{
		original: "明翔",
		hiragana: "めいしょう"
	},
	{
		original: "大運トランスポート",
		hiragana: "だいうんとらんすぽーと"
	},
	{
		original: "有限会社安八重機",
		hiragana: "ゆうげんがいしゃあんぱちじゅうき"
	},
	{
		original: "有限会社大川物流",
		hiragana: "ゆうげんがいしゃおおかわぶつりゅう"
	},
	{
		original: "大恵運輸有限会社",
		hiragana: "だいけいうんゆゆうげんがいしゃ"
	},
	{
		original: "美原運送",
		hiragana: "みはらうんそう"
	},
	{
		original: "周南興産有限会社",
		hiragana: "しゅうなんこうさんゆうげんがいしゃ"
	},
	{
		original: "不退運輸",
		hiragana: "ふたいうんゆ"
	},
	{
		original: "野田運輸",
		hiragana: "のだうんゆ"
	},
	{
		original: "北見交通運輸",
		hiragana: "きたみこうつううんゆ"
	},
	{
		original: "有限会社ルートワン",
		hiragana: "ゆうげんがいしゃるーとわん"
	},
	{
		original: "奥谷運送",
		hiragana: "おくたにうんそう"
	},
	{
		original: "真和物流サービス",
		hiragana: "まさかずぶつりゅうさーびす"
	},
	{
		original: "南九州機動",
		hiragana: "みなみきゅうしゅうきどう"
	},
	{
		original: "三河重機興業",
		hiragana: "みかわじゅうきこうぎょう"
	},
	{
		original: "スリーエムトランスポート",
		hiragana: "すりーえむとらんすぽーと"
	},
	{
		original: "大塚運輸有限会社",
		hiragana: "おおつかうんゆゆうげんがいしゃ"
	},
	{
		original: "有限会社藤原組",
		hiragana: "ゆうげんがいしゃふじわらくみ"
	},
	{
		original: "有限会社サンアイ物流",
		hiragana: "ゆうげんがいしゃさんあいぶつりゅう"
	},
	{
		original: "イエロートラフィック",
		hiragana: "いえろーとらふぃっく"
	},
	{
		original: "有限会社ラインアップ",
		hiragana: "ゆうげんがいしゃらいんあっぷ"
	},
	{
		original: "福谷",
		hiragana: "ふくたに"
	},
	{
		original: "宮本運送",
		hiragana: "みやもとうんそう"
	},
	{
		original: "関東ロジスコ",
		hiragana: "かんとうろじすこ"
	},
	{
		original: "茂木運輸",
		hiragana: "もてぎうんゆ"
	},
	{
		original: "柏栄サービス",
		hiragana: "はくえいさーびす"
	},
	{
		original: "吉美トランスポート",
		hiragana: "よしみとらんすぽーと"
	},
	{
		original: "有限会社中野商事",
		hiragana: "ゆうげんがいしゃなかのしょうじ"
	},
	{
		original: "三石運輸",
		hiragana: "みついしうんゆ"
	},
	{
		original: "エスエス流通倉庫",
		hiragana: "えすえすりゅうつうそうこ"
	},
	{
		original: "有限会社サンライン",
		hiragana: "ゆうげんがいしゃさんらいん"
	},
	{
		original: "大成通運",
		hiragana: "たいせいつううん"
	},
	{
		original: "三愛工業",
		hiragana: "さんあいこうぎょう"
	},
	{
		original: "さがわ商事",
		hiragana: "さがわしょうじ"
	},
	{
		original: "中部糧穀運輸",
		hiragana: "ちゅうぶかてこくうんゆ"
	},
	{
		original: "新井運送有限会社",
		hiragana: "あらいうんそうゆうげんがいしゃ"
	},
	{
		original: "谷運輸",
		hiragana: "たにうんゆ"
	},
	{
		original: "有限会社フロンティアコーポレーション",
		hiragana: "ゆうげんがいしゃふろんてぃあこーぽれーしょん"
	},
	{
		original: "神田運送有限会社",
		hiragana: "かんだうんそうゆうげんがいしゃ"
	},
	{
		original: "新中央",
		hiragana: "しんちゅうおう"
	},
	{
		original: "大力運輸",
		hiragana: "だいりきうんゆ"
	},
	{
		original: "日栄陸運",
		hiragana: "にちえいりくうん"
	},
	{
		original: "カープラザ飯野",
		hiragana: "かーぷらざいいの"
	},
	{
		original: "有限会社新日本サービス",
		hiragana: "ゆうげんがいしゃしんにほんさーびす"
	},
	{
		original: "札幌空輸",
		hiragana: "さっぽろくうゆ"
	},
	{
		original: "小林商店",
		hiragana: "こばやししょうてん"
	},
	{
		original: "トレジャー興業有限会社",
		hiragana: "とれじゃーこうぎょうゆうげんがいしゃ"
	},
	{
		original: "有限会社中里商事",
		hiragana: "ゆうげんがいしゃなかざとしょうじ"
	},
	{
		original: "八幡運輸",
		hiragana: "はちまんうんゆ"
	},
	{
		original: "石川産業",
		hiragana: "いしかわさんぎょう"
	},
	{
		original: "岡東運輸",
		hiragana: "おかひがしうんゆ"
	},
	{
		original: "山手物流",
		hiragana: "やまてぶつりゅう"
	},
	{
		original: "佐伯運輸有限会社",
		hiragana: "さえきうんゆゆうげんがいしゃ"
	},
	{
		original: "厚木運送",
		hiragana: "あつぎうんそう"
	},
	{
		original: "山野運送",
		hiragana: "やまのうんそう"
	},
	{
		original: "有限会社野口運輸商事",
		hiragana: "ゆうげんがいしゃのぐちうんゆしょうじ"
	},
	{
		original: "松風運輸",
		hiragana: "まつかぜうんゆ"
	},
	{
		original: "有限会社堀運送",
		hiragana: "ゆうげんがいしゃほりうんそう"
	},
	{
		original: "鴻巣アドバンス",
		hiragana: "こうのすあどばんす"
	},
	{
		original: "有限会社丸伝運輸",
		hiragana: "ゆうげんがいしゃまるでんうんゆ"
	},
	{
		original: "有限会社加藤総業",
		hiragana: "ゆうげんがいしゃかとうそうぎょう"
	},
	{
		original: "有限会社日南セントラル運送",
		hiragana: "ゆうげんがいしゃにちなんせんとらるうんそう"
	},
	{
		original: "福岡急便",
		hiragana: "ふくおかきゅうびん"
	},
	{
		original: "舞鶴物流有限会社",
		hiragana: "まいづるぶつりゅうゆうげんがいしゃ"
	},
	{
		original: "北海幸運",
		hiragana: "ほっかいこううん"
	},
	{
		original: "川島運送有限会社",
		hiragana: "かわしまうんそうゆうげんがいしゃ"
	},
	{
		original: "有限会社日本交商",
		hiragana: "ゆうげんがいしゃにっぽんこうしょう"
	},
	{
		original: "有限会社青木運輸",
		hiragana: "ゆうげんがいしゃあおきうんゆ"
	},
	{
		original: "中部日本急送",
		hiragana: "ちゅうぶにっぽんきゅうそう"
	},
	{
		original: "ロジテック",
		hiragana: "ろじてっく"
	},
	{
		original: "有限会社庄内物流システム",
		hiragana: "ゆうげんがいしゃしょうないぶつりゅうしすてむ"
	},
	{
		original: "新大阪運輸",
		hiragana: "しんおおさかうんゆ"
	},
	{
		original: "富永荷役",
		hiragana: "とみながにやく"
	},
	{
		original: "有限会社光智運送",
		hiragana: "ゆうげんがいしゃひかりさとるうんそう"
	},
	{
		original: "九州トラック有限会社",
		hiragana: "きゅうしゅうとらっくゆうげんがいしゃ"
	},
	{
		original: "ダイキ運輸",
		hiragana: "だいきうんゆ"
	},
	{
		original: "仁志加和配送",
		hiragana: "ひとしかわはいそう"
	},
	{
		original: "郡山陸運",
		hiragana: "こうりやまりくうん"
	},
	{
		original: "小山商事",
		hiragana: "おやましょうじ"
	},
	{
		original: "岡山後楽運輸",
		hiragana: "おかやまこうらくうんゆ"
	},
	{
		original: "佐藤商事",
		hiragana: "さとうしょうじ"
	},
	{
		original: "小倉エンタープライズ",
		hiragana: "おぐらえんたーぷらいず"
	},
	{
		original: "芙蓉海運",
		hiragana: "ふようかいうん"
	},
	{
		original: "真美夢",
		hiragana: "まみゆめ"
	},
	{
		original: "仁賀保運送有限会社",
		hiragana: "にかほうんそうゆうげんがいしゃ"
	},
	{
		original: "有限会社新元運送",
		hiragana: "ゆうげんがいしゃしんげんうんそう"
	},
	{
		original: "ＮＤＳ",
		hiragana: "ＮＤＳ"
	},
	{
		original: "ワタヤ",
		hiragana: "わたや"
	},
	{
		original: "光運輸",
		hiragana: "ひかりうんゆ"
	},
	{
		original: "辰産業合名会社",
		hiragana: "たつさんぎょうごうめいがいしゃ"
	},
	{
		original: "若運",
		hiragana: "じゃくうん"
	},
	{
		original: "北新輸送",
		hiragana: "きたしんゆそう"
	},
	{
		original: "有限会社須賀原運送",
		hiragana: "ゆうげんがいしゃすがはらうんそう"
	},
	{
		original: "岡崎運輸",
		hiragana: "おかざきうんゆ"
	},
	{
		original: "有限会社小西運輸",
		hiragana: "ゆうげんがいしゃこにしうんゆ"
	},
	{
		original: "有限会社家具の早川",
		hiragana: "ゆうげんがいしゃかぐのはやかわ"
	},
	{
		original: "有限会社丸菱商事",
		hiragana: "ゆうげんがいしゃまるびししょうじ"
	},
	{
		original: "有限会社北光運輸",
		hiragana: "ゆうげんがいしゃほっこううんゆ"
	},
	{
		original: "大嶋運送",
		hiragana: "おおしまうんそう"
	},
	{
		original: "ヨシダ運送",
		hiragana: "よしだうんそう"
	},
	{
		original: "有限会社野中運送",
		hiragana: "ゆうげんがいしゃのなかうんそう"
	},
	{
		original: "ＡＫＧ",
		hiragana: "ＡＫＧ"
	},
	{
		original: "日東物流",
		hiragana: "にっとうぶつりゅう"
	},
	{
		original: "新興運輸",
		hiragana: "しんこううんゆ"
	},
	{
		original: "有限会社岡田運輸",
		hiragana: "ゆうげんがいしゃおかだうんゆ"
	},
	{
		original: "エイリク",
		hiragana: "えいりく"
	},
	{
		original: "三和運輸",
		hiragana: "さんわうんゆ"
	},
	{
		original: "井口運輸",
		hiragana: "いのくちうんゆ"
	},
	{
		original: "暁輸送",
		hiragana: "あかつきゆそう"
	},
	{
		original: "有限会社石黒運輸",
		hiragana: "ゆうげんがいしゃいしぐろうんゆ"
	},
	{
		original: "新遠州倉庫",
		hiragana: "しんえんしゅうそうこ"
	},
	{
		original: "土屋商事",
		hiragana: "つちやしょうじ"
	},
	{
		original: "御荘陸運",
		hiragana: "みしょうりくうん"
	},
	{
		original: "吉田運輸",
		hiragana: "よしだうんゆ"
	},
	{
		original: "つるしま運輸有限会社",
		hiragana: "つるしまうんゆゆうげんがいしゃ"
	},
	{
		original: "有限会社安達",
		hiragana: "ゆうげんがいしゃあだち"
	},
	{
		original: "伊予運輸有限会社",
		hiragana: "いようんゆゆうげんがいしゃ"
	},
	{
		original: "有限会社双幸運輸",
		hiragana: "ゆうげんがいしゃそうこううんゆ"
	},
	{
		original: "能美衛生有限会社",
		hiragana: "のみえいせいゆうげんがいしゃ"
	},
	{
		original: "創造企画",
		hiragana: "そうぞうきかく"
	},
	{
		original: "名飯梱包産業",
		hiragana: "めいめしこんぽうさんぎょう"
	},
	{
		original: "峰徳運輸",
		hiragana: "みねとくうんゆ"
	},
	{
		original: "有限会社丸喜運送店",
		hiragana: "ゆうげんがいしゃまるきうんそうてん"
	},
	{
		original: "紀勢運輸",
		hiragana: "きせいうんゆ"
	},
	{
		original: "小辻運送",
		hiragana: "こつじうんそう"
	},
	{
		original: "アオショー物流",
		hiragana: "あおしょーぶつりゅう"
	},
	{
		original: "成幸物流",
		hiragana: "せいこうぶつりゅう"
	},
	{
		original: "有限会社松阪流通",
		hiragana: "ゆうげんがいしゃまつさかりゅうつう"
	},
	{
		original: "志村梱包",
		hiragana: "しむらこんぽう"
	},
	{
		original: "大亞",
		hiragana: "だいあ"
	},
	{
		original: "有限会社溝川梱包",
		hiragana: "ゆうげんがいしゃどぶがわこんぽう"
	},
	{
		original: "オオシロリース運輸",
		hiragana: "おおしろりーすうんゆ"
	},
	{
		original: "近江商運",
		hiragana: "おうみしょううん"
	},
	{
		original: "川久運輸",
		hiragana: "かわきゅううんゆ"
	},
	{
		original: "丸安運輸",
		hiragana: "まるあんうんゆ"
	},
	{
		original: "いまい運送有限会社",
		hiragana: "いまいうんそうゆうげんがいしゃ"
	},
	{
		original: "プロスパー産業",
		hiragana: "ぷろすぱーさんぎょう"
	},
	{
		original: "新運保",
		hiragana: "しんうんほ"
	},
	{
		original: "グランドライン",
		hiragana: "ぐらんどらいん"
	},
	{
		original: "有限会社武藤陸運",
		hiragana: "ゆうげんがいしゃむとうりくうん"
	},
	{
		original: "トランスポートホーエイ",
		hiragana: "とらんすぽーとほーえい"
	},
	{
		original: "ナサ",
		hiragana: "なさ"
	},
	{
		original: "東京シティ運輸",
		hiragana: "とうきょうしてぃうんゆ"
	},
	{
		original: "米山陸送",
		hiragana: "よねやまりくそう"
	},
	{
		original: "丸敏",
		hiragana: "まるとし"
	},
	{
		original: "ハコブ",
		hiragana: "はこぶ"
	},
	{
		original: "Ｔｒｕｍｐ",
		hiragana: "Ｔｒｕｍｐ"
	},
	{
		original: "防府農産運輸",
		hiragana: "ほうふのうさんうんゆ"
	},
	{
		original: "ＴＳＵＫＩＹＯＭＩ",
		hiragana: "ＴＳＵＫＩＹＯＭＩ"
	},
	{
		original: "鈴崇運輸",
		hiragana: "すずすううんゆ"
	},
	{
		original: "ケーエスアール",
		hiragana: "けーえすあーる"
	},
	{
		original: "有限会社御殿場特車",
		hiragana: "ゆうげんがいしゃごてんばとくしゃ"
	},
	{
		original: "吉田水産輸送有限会社",
		hiragana: "よしだすいさんゆそうゆうげんがいしゃ"
	},
	{
		original: "中田運輸",
		hiragana: "なかだうんゆ"
	},
	{
		original: "有限会社杉田運送",
		hiragana: "ゆうげんがいしゃすぎたうんそう"
	},
	{
		original: "オフィスエムツー",
		hiragana: "おふぃすえむつー"
	},
	{
		original: "南西流通サービス",
		hiragana: "なんせいりゅうつうさーびす"
	},
	{
		original: "有限会社沼口運輸",
		hiragana: "ゆうげんがいしゃぬまぐちうんゆ"
	},
	{
		original: "谷口運輸",
		hiragana: "たにぐちうんゆ"
	},
	{
		original: "有限会社本村運送",
		hiragana: "ゆうげんがいしゃもとむらうんそう"
	},
	{
		original: "藤栄商事",
		hiragana: "ふじえしょうじ"
	},
	{
		original: "吉川商事",
		hiragana: "よしかわしょうじ"
	},
	{
		original: "三共物流運輸",
		hiragana: "さんきょうぶつりゅううんゆ"
	},
	{
		original: "紀脇運送有限会社",
		hiragana: "きわきうんそうゆうげんがいしゃ"
	},
	{
		original: "三有陸運有限会社",
		hiragana: "さんありりくうんゆうげんがいしゃ"
	},
	{
		original: "中野トラック",
		hiragana: "なかのとらっく"
	},
	{
		original: "有限会社大豊運送",
		hiragana: "ゆうげんがいしゃたいほううんそう"
	},
	{
		original: "有限会社上田急便",
		hiragana: "ゆうげんがいしゃうえだきゅうびん"
	},
	{
		original: "有限会社ナルコ興業",
		hiragana: "ゆうげんがいしゃなるここうぎょう"
	},
	{
		original: "有限会社くじゅう",
		hiragana: "ゆうげんがいしゃくじゅう"
	},
	{
		original: "有限会社川端屋運送",
		hiragana: "ゆうげんがいしゃかわばたやうんそう"
	},
	{
		original: "有限会社栄福",
		hiragana: "ゆうげんがいしゃえいふく"
	},
	{
		original: "龍野運送店",
		hiragana: "たつのうんそうてん"
	},
	{
		original: "有限会社赤沼運送",
		hiragana: "ゆうげんがいしゃあかぬまうんそう"
	},
	{
		original: "有限会社浅美運輸",
		hiragana: "ゆうげんがいしゃせんびうんゆ"
	},
	{
		original: "有限会社ブルージャンボ",
		hiragana: "ゆうげんがいしゃぶるーじゃんぼ"
	},
	{
		original: "上津陸運",
		hiragana: "かみつりくうん"
	},
	{
		original: "ユタカ運送",
		hiragana: "ゆたかうんそう"
	},
	{
		original: "有限会社後藤商事",
		hiragana: "ゆうげんがいしゃごとうしょうじ"
	},
	{
		original: "熊本ロジスティック",
		hiragana: "くまもとろじすてぃっく"
	},
	{
		original: "有限会社プラスパア物流",
		hiragana: "ゆうげんがいしゃぷらすぱあぶつりゅう"
	},
	{
		original: "有限会社共伸サービス",
		hiragana: "ゆうげんがいしゃともしんさーびす"
	},
	{
		original: "アサノ運輸",
		hiragana: "あさのうんゆ"
	},
	{
		original: "藤栄物流",
		hiragana: "ふじえぶつりゅう"
	},
	{
		original: "小山運輸有限会社",
		hiragana: "おやまうんゆゆうげんがいしゃ"
	},
	{
		original: "渥美運輸",
		hiragana: "あつみうんゆ"
	},
	{
		original: "有限会社グローバル輸送",
		hiragana: "ゆうげんがいしゃぐろーばるゆそう"
	},
	{
		original: "旭海運",
		hiragana: "あさひかいうん"
	},
	{
		original: "有限会社光永運送",
		hiragana: "ゆうげんがいしゃみつながうんそう"
	},
	{
		original: "安藝運送",
		hiragana: "あきうんそう"
	},
	{
		original: "ウィーズ・エンタープライズ",
		hiragana: "うぃーず・えんたーぷらいず"
	},
	{
		original: "有限会社岩舘建材",
		hiragana: "ゆうげんがいしゃいわだてけんざい"
	},
	{
		original: "城南倉庫",
		hiragana: "じょうなんそうこ"
	},
	{
		original: "川口運輸",
		hiragana: "かわぐちうんゆ"
	},
	{
		original: "川村運送有限会社",
		hiragana: "かわむらうんそうゆうげんがいしゃ"
	},
	{
		original: "中塚興業",
		hiragana: "なかつかこうぎょう"
	},
	{
		original: "昇運送",
		hiragana: "のぼるうんそう"
	},
	{
		original: "ＪＮ陸送",
		hiragana: "ＪＮりくそう"
	},
	{
		original: "創希舎",
		hiragana: "そうまれしゃ"
	},
	{
		original: "有限会社前田運送",
		hiragana: "ゆうげんがいしゃまえだうんそう"
	},
	{
		original: "有限会社一心陸運",
		hiragana: "ゆうげんがいしゃいっしんりくうん"
	},
	{
		original: "岸運輸",
		hiragana: "きしうんゆ"
	},
	{
		original: "エムエスエー",
		hiragana: "えむえすえー"
	},
	{
		original: "小川商会",
		hiragana: "おがわしょうかい"
	},
	{
		original: "セイコウロジックス",
		hiragana: "せいこうろじっくす"
	},
	{
		original: "有限会社猪股運送",
		hiragana: "ゆうげんがいしゃいのまたうんそう"
	},
	{
		original: "三兄運輸有限会社",
		hiragana: "さんあにうんゆゆうげんがいしゃ"
	},
	{
		original: "横浜ドリームライン",
		hiragana: "よこはまどりーむらいん"
	},
	{
		original: "有限会社ハヤト運輸",
		hiragana: "ゆうげんがいしゃはやとうんゆ"
	},
	{
		original: "大阪泉州陸送",
		hiragana: "おおさかせんしゅうりくそう"
	},
	{
		original: "原田運輸",
		hiragana: "はらだうんゆ"
	},
	{
		original: "岡崎運送有限会社",
		hiragana: "おかざきうんそうゆうげんがいしゃ"
	},
	{
		original: "昭和物流",
		hiragana: "しょうわぶつりゅう"
	},
	{
		original: "垂井西濃集配",
		hiragana: "たるいせいのうしゅうはい"
	},
	{
		original: "有限会社有明急送",
		hiragana: "ゆうげんがいしゃありあけきゅうそう"
	},
	{
		original: "有限会社岩間産業",
		hiragana: "ゆうげんがいしゃいわまさんぎょう"
	},
	{
		original: "大協高速運輸",
		hiragana: "だいきょうこうそくうんゆ"
	},
	{
		original: "有限会社ヤマス運輸",
		hiragana: "ゆうげんがいしゃやますうんゆ"
	},
	{
		original: "有限会社よつば運送",
		hiragana: "ゆうげんがいしゃよつばうんそう"
	},
	{
		original: "愛豊陸運",
		hiragana: "あいゆたかりくうん"
	},
	{
		original: "渡邉商店",
		hiragana: "わたなべしょうてん"
	},
	{
		original: "有限会社鷹藤",
		hiragana: "ゆうげんがいしゃたかふじ"
	},
	{
		original: "東京マルイ美術",
		hiragana: "とうきょうまるいびじゅつ"
	},
	{
		original: "福島バーミ",
		hiragana: "ふくしまばーみ"
	},
	{
		original: "サイシンホールディングス",
		hiragana: "さいしんほーるでぃんぐす"
	},
	{
		original: "内外運送",
		hiragana: "ないがいうんそう"
	},
	{
		original: "新生運輸",
		hiragana: "しんせいうんゆ"
	},
	{
		original: "堀之内運送",
		hiragana: "ほりのうちうんそう"
	},
	{
		original: "有限会社中部急行",
		hiragana: "ゆうげんがいしゃちゅうぶきゅうこう"
	},
	{
		original: "有限会社孝和運輸",
		hiragana: "ゆうげんがいしゃこうわうんゆ"
	},
	{
		original: "ニシユ有限会社",
		hiragana: "にしゆゆうげんがいしゃ"
	},
	{
		original: "山本通商",
		hiragana: "やまもとつうしょう"
	},
	{
		original: "有限会社マルキ商事",
		hiragana: "ゆうげんがいしゃまるきしょうじ"
	},
	{
		original: "有限会社野中運送",
		hiragana: "ゆうげんがいしゃのなかうんそう"
	},
	{
		original: "彩光商運",
		hiragana: "さいこうしょううん"
	},
	{
		original: "カネツ",
		hiragana: "かねつ"
	},
	{
		original: "白川運輸",
		hiragana: "しらかわうんゆ"
	},
	{
		original: "イーエフ物流",
		hiragana: "いーえふぶつりゅう"
	},
	{
		original: "ＪＴ・ＬＩＮＥ",
		hiragana: "ＪＴ・ＬＩＮＥ"
	},
	{
		original: "サーティーンエクスプレス",
		hiragana: "さーてぃーんえくすぷれす"
	},
	{
		original: "北島組",
		hiragana: "きたじまくみ"
	},
	{
		original: "コウメイ運輸",
		hiragana: "こうめいうんゆ"
	},
	{
		original: "有限会社トランスポート吉川",
		hiragana: "ゆうげんがいしゃとらんすぽーとよしかわ"
	},
	{
		original: "有限会社佐藤運輸",
		hiragana: "ゆうげんがいしゃさとううんゆ"
	},
	{
		original: "有限会社大澤商運",
		hiragana: "ゆうげんがいしゃおおさわしょううん"
	},
	{
		original: "内山運送有限会社",
		hiragana: "うちやまうんそうゆうげんがいしゃ"
	},
	{
		original: "有限会社協和興業",
		hiragana: "ゆうげんがいしゃきょうわこうぎょう"
	},
	{
		original: "有限会社ワタナベ",
		hiragana: "ゆうげんがいしゃわたなべ"
	},
	{
		original: "総伝",
		hiragana: "そうでん"
	},
	{
		original: "群馬進明運送",
		hiragana: "ぐんましんめいうんそう"
	},
	{
		original: "丸三急送",
		hiragana: "まるさんきゅうそう"
	},
	{
		original: "オー・エム・ケイ",
		hiragana: "おー・えむ・けい"
	},
	{
		original: "装建運輸",
		hiragana: "そうけんうんゆ"
	},
	{
		original: "小豆島陸運",
		hiragana: "しょうずしまりくうん"
	},
	{
		original: "タケダ急送",
		hiragana: "たけだきゅうそう"
	},
	{
		original: "松本運送",
		hiragana: "まつもとうんそう"
	},
	{
		original: "ＴＭＴ",
		hiragana: "ＴＭＴ"
	},
	{
		original: "藤農トラック",
		hiragana: "ふじのうとらっく"
	},
	{
		original: "中村運送",
		hiragana: "なかむらうんそう"
	},
	{
		original: "対馬運送",
		hiragana: "つしまうんそう"
	},
	{
		original: "薩南陸運",
		hiragana: "さつなんりくうん"
	},
	{
		original: "本郷",
		hiragana: "ほんごう"
	},
	{
		original: "京都桜花運輸",
		hiragana: "きょうとおうかうんゆ"
	},
	{
		original: "光急行",
		hiragana: "ひかりきゅうこう"
	},
	{
		original: "スクラム",
		hiragana: "すくらむ"
	},
	{
		original: "愛陸梱包急配",
		hiragana: "あいりくこんぽうきゅうはい"
	},
	{
		original: "有限会社ヤマト運送",
		hiragana: "ゆうげんがいしゃやまとうんそう"
	},
	{
		original: "大田原運輸",
		hiragana: "おおたわらうんゆ"
	},
	{
		original: "五ツ星物流",
		hiragana: "ごつほしぶつりゅう"
	},
	{
		original: "県南陸送有限会社",
		hiragana: "けんなんりくそうゆうげんがいしゃ"
	},
	{
		original: "カナメ流通",
		hiragana: "かなめりゅうつう"
	},
	{
		original: "有限会社古川陸運",
		hiragana: "ゆうげんがいしゃふるかわりくうん"
	},
	{
		original: "有限会社東海テック",
		hiragana: "ゆうげんがいしゃとうかいてっく"
	},
	{
		original: "北日本運送",
		hiragana: "きたにほんうんそう"
	},
	{
		original: "有限会社ＣＴＳ",
		hiragana: "ゆうげんがいしゃＣＴＳ"
	},
	{
		original: "丸豊平田工業有限会社",
		hiragana: "まるとよひらたこうぎょうゆうげんがいしゃ"
	},
	{
		original: "長門運輸有限会社",
		hiragana: "ながとうんゆゆうげんがいしゃ"
	},
	{
		original: "大信運送有限会社",
		hiragana: "たいしんうんそうゆうげんがいしゃ"
	},
	{
		original: "ミナミ運輸有限会社",
		hiragana: "みなみうんゆゆうげんがいしゃ"
	},
	{
		original: "晃進運輸",
		hiragana: "あきらしんうんゆ"
	},
	{
		original: "首都圏サービス",
		hiragana: "しゅとけんさーびす"
	},
	{
		original: "サンアクト",
		hiragana: "さんあくと"
	},
	{
		original: "有限会社新東海",
		hiragana: "ゆうげんがいしゃしんとううみ"
	},
	{
		original: "羽衣運輸",
		hiragana: "はごろもうんゆ"
	},
	{
		original: "飛建興業",
		hiragana: "ひけんこうぎょう"
	},
	{
		original: "リバニティ",
		hiragana: "りばにてぃ"
	},
	{
		original: "大商",
		hiragana: "だいしょう"
	},
	{
		original: "ナステック物流",
		hiragana: "なすてっくぶつりゅう"
	},
	{
		original: "大河流通",
		hiragana: "たいがりゅうつう"
	},
	{
		original: "タキロンシーアイ物流",
		hiragana: "たきろんしーあいぶつりゅう"
	},
	{
		original: "海田運輸",
		hiragana: "かいたうんゆ"
	},
	{
		original: "有限会社ヤマムラ運輸",
		hiragana: "ゆうげんがいしゃやまむらうんゆ"
	},
	{
		original: "有限会社興進運輸",
		hiragana: "ゆうげんがいしゃきょうしんうんゆ"
	},
	{
		original: "福星運輸",
		hiragana: "ふくほしうんゆ"
	},
	{
		original: "千曲物流",
		hiragana: "ちくまぶつりゅう"
	},
	{
		original: "有限会社石田貨物",
		hiragana: "ゆうげんがいしゃいしだかもつ"
	},
	{
		original: "有限会社ドゥイット",
		hiragana: "ゆうげんがいしゃどぅいっと"
	},
	{
		original: "日光食品",
		hiragana: "にっこうしょくひん"
	},
	{
		original: "勝美建材運輸",
		hiragana: "かつみけんざいうんゆ"
	},
	{
		original: "成友物流",
		hiragana: "しげともぶつりゅう"
	},
	{
		original: "ムラヤマロジテック",
		hiragana: "むらやまろじてっく"
	},
	{
		original: "有限会社北原運輸",
		hiragana: "ゆうげんがいしゃきたはらうんゆ"
	},
	{
		original: "東仙運輸",
		hiragana: "とうせんうんゆ"
	},
	{
		original: "中村運送",
		hiragana: "なかむらうんそう"
	},
	{
		original: "笹原運輸",
		hiragana: "ささはらうんゆ"
	},
	{
		original: "有限会社矢内興業運輸",
		hiragana: "ゆうげんがいしゃやないこうぎょううんゆ"
	},
	{
		original: "信田運輸有限会社",
		hiragana: "しのだうんゆゆうげんがいしゃ"
	},
	{
		original: "有限会社南九州物流",
		hiragana: "ゆうげんがいしゃみなみきゅうしゅうぶつりゅう"
	},
	{
		original: "クロ・ケン",
		hiragana: "くろ・けん"
	},
	{
		original: "置田運送",
		hiragana: "おきたうんそう"
	},
	{
		original: "藤田運送",
		hiragana: "ふじたうんそう"
	},
	{
		original: "中部興産",
		hiragana: "ちゅうぶこうさん"
	},
	{
		original: "有限会社フォースコーポレーション",
		hiragana: "ゆうげんがいしゃふぉーすこーぽれーしょん"
	},
	{
		original: "シーエス",
		hiragana: "しーえす"
	},
	{
		original: "相馬運輸",
		hiragana: "そうまうんゆ"
	},
	{
		original: "東大阪物流",
		hiragana: "ひがしおおさかぶつりゅう"
	},
	{
		original: "新東陸運",
		hiragana: "しんとうりくうん"
	},
	{
		original: "マルタカ運輸",
		hiragana: "まるたかうんゆ"
	},
	{
		original: "共栄運輸機工有限会社",
		hiragana: "きょうえいうんゆきこうゆうげんがいしゃ"
	},
	{
		original: "生子青果",
		hiragana: "いくこせいか"
	},
	{
		original: "大久",
		hiragana: "おおひさ"
	},
	{
		original: "ツカサ物流",
		hiragana: "つかさぶつりゅう"
	},
	{
		original: "清水急便",
		hiragana: "しみずきゅうびん"
	},
	{
		original: "フジヒロ",
		hiragana: "ふじひろ"
	},
	{
		original: "矢野運送",
		hiragana: "やのうんそう"
	},
	{
		original: "宇都宮西運輸有限会社",
		hiragana: "うつのみやにしうんゆゆうげんがいしゃ"
	},
	{
		original: "大豊運輸",
		hiragana: "たいほううんゆ"
	},
	{
		original: "Ｍ．Ｒ．Ｄ",
		hiragana: "Ｍ．Ｒ．Ｄ"
	},
	{
		original: "芙蓉海運",
		hiragana: "ふようかいうん"
	},
	{
		original: "有限会社大運トランスポート",
		hiragana: "ゆうげんがいしゃだいうんとらんすぽーと"
	},
	{
		original: "有限会社秋森運輸",
		hiragana: "ゆうげんがいしゃあきもりうんゆ"
	},
	{
		original: "関東興運",
		hiragana: "かんとうきょううん"
	},
	{
		original: "泉本運輸倉庫",
		hiragana: "いずみもとうんゆそうこ"
	},
	{
		original: "徳島運送",
		hiragana: "とくしまうんそう"
	},
	{
		original: "キクタケ",
		hiragana: "きくたけ"
	},
	{
		original: "丸松運送有限会社",
		hiragana: "まるまつうんそうゆうげんがいしゃ"
	},
	{
		original: "有限会社マルタカ運輸",
		hiragana: "ゆうげんがいしゃまるたかうんゆ"
	},
	{
		original: "有限会社岩本運輸",
		hiragana: "ゆうげんがいしゃいわもとうんゆ"
	},
	{
		original: "荒鷹",
		hiragana: "こうたか"
	},
	{
		original: "天成運輸",
		hiragana: "てんせいうんゆ"
	},
	{
		original: "庄内市場運送",
		hiragana: "しょうないしじょううんそう"
	},
	{
		original: "草加自動車運送",
		hiragana: "そうかじどうしゃうんそう"
	},
	{
		original: "ＪＡＭ",
		hiragana: "ＪＡＭ"
	},
	{
		original: "シンキ",
		hiragana: "しんき"
	},
	{
		original: "うるしま運輸",
		hiragana: "うるしまうんゆ"
	},
	{
		original: "大船渡市場輸送",
		hiragana: "おおふなとしじょうゆそう"
	},
	{
		original: "まるあ秋元運送有限会社",
		hiragana: "まるああきもとうんそうゆうげんがいしゃ"
	},
	{
		original: "ハート運輸",
		hiragana: "はーとうんゆ"
	},
	{
		original: "エポックトランスポート",
		hiragana: "えぽっくとらんすぽーと"
	},
	{
		original: "スズキ産業有限会社",
		hiragana: "すずきさんぎょうゆうげんがいしゃ"
	},
	{
		original: "福岡東運輸有限会社",
		hiragana: "ふくおかひがしうんゆゆうげんがいしゃ"
	},
	{
		original: "佐山建設工業",
		hiragana: "さやまけんせつこうぎょう"
	},
	{
		original: "有限会社光運送",
		hiragana: "ゆうげんがいしゃひかりうんそう"
	},
	{
		original: "大義",
		hiragana: "たいぎ"
	},
	{
		original: "オリエンタル急行",
		hiragana: "おりえんたるきゅうこう"
	},
	{
		original: "有限会社大協運輸",
		hiragana: "ゆうげんがいしゃだいきょううんゆ"
	},
	{
		original: "晃南興業",
		hiragana: "あきらみなみこうぎょう"
	},
	{
		original: "有限会社春日物流",
		hiragana: "ゆうげんがいしゃかすがぶつりゅう"
	},
	{
		original: "ＳＴＳ",
		hiragana: "ＳＴＳ"
	},
	{
		original: "有限会社カネキチエンタープライズ",
		hiragana: "ゆうげんがいしゃかねきちえんたーぷらいず"
	},
	{
		original: "有限会社日興貨物",
		hiragana: "ゆうげんがいしゃにっこうかもつ"
	},
	{
		original: "有限会社コウノ鶏卵",
		hiragana: "ゆうげんがいしゃこうのけいらん"
	},
	{
		original: "日神運輸",
		hiragana: "にっしんうんゆ"
	},
	{
		original: "小山運送",
		hiragana: "おやまうんそう"
	},
	{
		original: "有限会社富士見機工運輸",
		hiragana: "ゆうげんがいしゃふじみきこううんゆ"
	},
	{
		original: "有限会社日乃出産業",
		hiragana: "ゆうげんがいしゃにちのしゅっさんぎょう"
	},
	{
		original: "宮田燃料",
		hiragana: "みやたねんりょう"
	},
	{
		original: "むつみ輸送",
		hiragana: "むつみゆそう"
	},
	{
		original: "有限会社垣内運送",
		hiragana: "ゆうげんがいしゃかきうちうんそう"
	},
	{
		original: "ケー・アンド・ワイ",
		hiragana: "けー・あんど・わい"
	},
	{
		original: "日興運輸",
		hiragana: "にっこううんゆ"
	},
	{
		original: "小本運送有限会社",
		hiragana: "こもとうんそうゆうげんがいしゃ"
	},
	{
		original: "フジトランスポート",
		hiragana: "ふじとらんすぽーと"
	},
	{
		original: "協同運輸",
		hiragana: "きょうどううんゆ"
	},
	{
		original: "Ｔ－ＲＥＸ関東",
		hiragana: "Ｔ－ＲＥＸかんとう"
	},
	{
		original: "ホーヨ運輸有限会社",
		hiragana: "ほーようんゆゆうげんがいしゃ"
	},
	{
		original: "有限会社静公運輸",
		hiragana: "ゆうげんがいしゃせいこううんゆ"
	},
	{
		original: "有限会社杉原建材サービス",
		hiragana: "ゆうげんがいしゃすぎはらけんざいさーびす"
	},
	{
		original: "大阪物流",
		hiragana: "おおさかぶつりゅう"
	},
	{
		original: "光興業",
		hiragana: "みつおきぎょう"
	},
	{
		original: "伸運輸",
		hiragana: "しんうんゆ"
	},
	{
		original: "三洋運輸有限会社",
		hiragana: "さんよううんゆゆうげんがいしゃ"
	},
	{
		original: "太田運輸興業",
		hiragana: "おおたうんゆこうぎょう"
	},
	{
		original: "有限会社武南流通",
		hiragana: "ゆうげんがいしゃぶなんりゅうつう"
	},
	{
		original: "Ｇｅｎｅｒｏｕｓ　Ｇｒｏｕｐ",
		hiragana: "Ｇｅｎｅｒｏｕｓ　Ｇｒｏｕｐ"
	},
	{
		original: "矢吹運送有限会社",
		hiragana: "やぶきうんそうゆうげんがいしゃ"
	},
	{
		original: "鎌田建材",
		hiragana: "かまだけんざい"
	},
	{
		original: "大一運輸",
		hiragana: "ひろかずうんゆ"
	},
	{
		original: "山下運送",
		hiragana: "やましたうんそう"
	},
	{
		original: "有限会社若松興業",
		hiragana: "ゆうげんがいしゃわかまつこうぎょう"
	},
	{
		original: "下笠居運輸",
		hiragana: "したかさきょうんゆ"
	},
	{
		original: "鈴木運輸",
		hiragana: "すずきうんゆ"
	},
	{
		original: "前表産業有限会社",
		hiragana: "ぜんぴょうさんぎょうゆうげんがいしゃ"
	},
	{
		original: "桜瀬運輸",
		hiragana: "さくらせうんゆ"
	},
	{
		original: "黄章ロジテックス",
		hiragana: "きしょうろじてっくす"
	},
	{
		original: "勇盛ロジックス",
		hiragana: "いさみじょうろじっくす"
	},
	{
		original: "両沼貨物自動車",
		hiragana: "りょうぬまかもつじどうしゃ"
	},
	{
		original: "オーケー輸送",
		hiragana: "おーけーゆそう"
	},
	{
		original: "新生トランスポート",
		hiragana: "しんせいとらんすぽーと"
	},
	{
		original: "有限会社富士豊茂牛乳運送",
		hiragana: "ゆうげんがいしゃふじとよしげぎゅうにゅううんそう"
	},
	{
		original: "フラワーウイン",
		hiragana: "ふらわーういん"
	},
	{
		original: "有限会社山喜商事",
		hiragana: "ゆうげんがいしゃやまきしょうじ"
	},
	{
		original: "大和工業",
		hiragana: "やまとこうぎょう"
	},
	{
		original: "三協運輸",
		hiragana: "さんきょううんゆ"
	},
	{
		original: "有限会社ＴＡＫＡＭＩ",
		hiragana: "ゆうげんがいしゃＴＡＫＡＭＩ"
	},
	{
		original: "アイエムショット",
		hiragana: "あいえむしょっと"
	},
	{
		original: "有限会社嶋屋",
		hiragana: "ゆうげんがいしゃしまや"
	},
	{
		original: "フーズネットながの",
		hiragana: "ふーずねっとながの"
	},
	{
		original: "有限会社メイワサービス",
		hiragana: "ゆうげんがいしゃめいわさーびす"
	},
	{
		original: "塩谷物流有限会社",
		hiragana: "しおやぶつりゅうゆうげんがいしゃ"
	},
	{
		original: "三紀運輸関東",
		hiragana: "みきうんゆかんとう"
	},
	{
		original: "小関梱包運輸有限会社",
		hiragana: "おぜきこんぽううんゆゆうげんがいしゃ"
	},
	{
		original: "有限会社共栄産業",
		hiragana: "ゆうげんがいしゃきょうえいさんぎょう"
	},
	{
		original: "セキロジ",
		hiragana: "せきろじ"
	},
	{
		original: "グリーン運輸",
		hiragana: "ぐりーんうんゆ"
	},
	{
		original: "三友港運",
		hiragana: "みつともみなとうん"
	},
	{
		original: "サンユーロジ",
		hiragana: "さんゆーろじ"
	},
	{
		original: "有限会社プレテック運輸",
		hiragana: "ゆうげんがいしゃぷれてっくうんゆ"
	},
	{
		original: "キムラメタリックス",
		hiragana: "きむらめたりっくす"
	},
	{
		original: "大井運送有限会社",
		hiragana: "おおいうんそうゆうげんがいしゃ"
	},
	{
		original: "有限会社森運輸",
		hiragana: "ゆうげんがいしゃもりうんゆ"
	},
	{
		original: "有限会社小林重機運輸",
		hiragana: "ゆうげんがいしゃこばやしじゅうきうんゆ"
	},
	{
		original: "有限会社トランスポート大友",
		hiragana: "ゆうげんがいしゃとらんすぽーとおおとも"
	},
	{
		original: "矢口商店",
		hiragana: "やぐちしょうてん"
	},
	{
		original: "有限会社生駒運送",
		hiragana: "ゆうげんがいしゃいこまうんそう"
	},
	{
		original: "塙商運",
		hiragana: "はなわしょううん"
	},
	{
		original: "共栄運輸",
		hiragana: "きょうえいうんゆ"
	},
	{
		original: "有限会社吉田紙業運輸",
		hiragana: "ゆうげんがいしゃよしだしぎょううんゆ"
	},
	{
		original: "ヤマショウ",
		hiragana: "やましょう"
	},
	{
		original: "三栄物流",
		hiragana: "さんえいぶつりゅう"
	},
	{
		original: "しんじゅ",
		hiragana: "しんじゅ"
	},
	{
		original: "泉甚梱包",
		hiragana: "いずみじんこんぽう"
	},
	{
		original: "エリートフォース",
		hiragana: "えりーとふぉーす"
	},
	{
		original: "明貨トラック",
		hiragana: "めいかとらっく"
	},
	{
		original: "トランスポート神清",
		hiragana: "とらんすぽーとかみきよし"
	},
	{
		original: "木庭運送",
		hiragana: "こばうんそう"
	},
	{
		original: "北海大運",
		hiragana: "ほっかいだいうん"
	},
	{
		original: "晃陽通商",
		hiragana: "あきらようつうしょう"
	},
	{
		original: "大和商会",
		hiragana: "やまとしょうかい"
	},
	{
		original: "上道運輸",
		hiragana: "じょうとううんゆ"
	},
	{
		original: "西兵庫物流",
		hiragana: "せいへいこぶつりゅう"
	},
	{
		original: "リアルスター",
		hiragana: "りあるすたー"
	},
	{
		original: "三重トランスポート",
		hiragana: "みえとらんすぽーと"
	},
	{
		original: "有限会社石井商運",
		hiragana: "ゆうげんがいしゃいしいしょううん"
	},
	{
		original: "サンジツ運輸",
		hiragana: "さんじつうんゆ"
	},
	{
		original: "呉広商事有限会社",
		hiragana: "ごこうしょうじゆうげんがいしゃ"
	},
	{
		original: "山下運輸有限会社",
		hiragana: "やましたうんゆゆうげんがいしゃ"
	},
	{
		original: "阪南高速運輸",
		hiragana: "はんなんこうそくうんゆ"
	},
	{
		original: "ハヤブサ",
		hiragana: "はやぶさ"
	},
	{
		original: "有限会社龍美商事",
		hiragana: "ゆうげんがいしゃたつみしょうじ"
	},
	{
		original: "本宮運輸有限会社",
		hiragana: "もとみやうんゆゆうげんがいしゃ"
	},
	{
		original: "八束運輸有限会社",
		hiragana: "やつかうんゆゆうげんがいしゃ"
	},
	{
		original: "有限会社本田運送",
		hiragana: "ゆうげんがいしゃほんだうんそう"
	},
	{
		original: "近畿ロジックス",
		hiragana: "きんきろじっくす"
	},
	{
		original: "大福商事",
		hiragana: "だいふくしょうじ"
	},
	{
		original: "有限会社ショウエイエンジニアリング",
		hiragana: "ゆうげんがいしゃしょうえいえんじにありんぐ"
	},
	{
		original: "北日本運送",
		hiragana: "きたにほんうんそう"
	},
	{
		original: "有限会社金沢運輸",
		hiragana: "ゆうげんがいしゃかなざわうんゆ"
	},
	{
		original: "有限会社クリップ",
		hiragana: "ゆうげんがいしゃくりっぷ"
	},
	{
		original: "茨田運輸興業",
		hiragana: "まむたうんゆこうぎょう"
	},
	{
		original: "真庭運送",
		hiragana: "まにわうんそう"
	},
	{
		original: "静岡松永運輸有限会社",
		hiragana: "しずおかまつながうんゆゆうげんがいしゃ"
	},
	{
		original: "ワールド通商",
		hiragana: "わーるどつうしょう"
	},
	{
		original: "港梱包運輸",
		hiragana: "みなとこんぽううんゆ"
	},
	{
		original: "南日本汽船",
		hiragana: "なんにちほんきせん"
	},
	{
		original: "信州運送",
		hiragana: "しんしゅううんそう"
	},
	{
		original: "熊本太陽運輸",
		hiragana: "くまもとたいよううんゆ"
	},
	{
		original: "翔永",
		hiragana: "しょうえい"
	},
	{
		original: "大正運輸倉庫",
		hiragana: "たいしょううんゆそうこ"
	},
	{
		original: "司運輸",
		hiragana: "つかさうんゆ"
	},
	{
		original: "ＳＫＥロジテック",
		hiragana: "ＳＫＥろじてっく"
	},
	{
		original: "ピアノ運送岡山",
		hiragana: "ぴあのうんそうおかやま"
	},
	{
		original: "有限会社大和産業",
		hiragana: "ゆうげんがいしゃやまとさんぎょう"
	},
	{
		original: "田中運送有限会社",
		hiragana: "たなかうんそうゆうげんがいしゃ"
	},
	{
		original: "有限会社三恵運送",
		hiragana: "ゆうげんがいしゃさんけいうんそう"
	},
	{
		original: "光洋",
		hiragana: "こうよう"
	},
	{
		original: "興国産業",
		hiragana: "こうこくさんぎょう"
	},
	{
		original: "中弘興業",
		hiragana: "なかひろしこうぎょう"
	},
	{
		original: "八幡運輸",
		hiragana: "はちまんうんゆ"
	},
	{
		original: "タケシタ運送",
		hiragana: "たけしたうんそう"
	},
	{
		original: "大日工業運輸有限会社",
		hiragana: "だいにちこうぎょううんゆゆうげんがいしゃ"
	},
	{
		original: "有限会社コウシュー運送",
		hiragana: "ゆうげんがいしゃこうしゅーうんそう"
	},
	{
		original: "内房運送",
		hiragana: "うちぼううんそう"
	},
	{
		original: "明浜陸運",
		hiragana: "あけはまりくうん"
	},
	{
		original: "横浜アビリティ",
		hiragana: "よこはまあびりてぃ"
	},
	{
		original: "有限会社平間運送",
		hiragana: "ゆうげんがいしゃひらまうんそう"
	},
	{
		original: "柴原運輸有限会社",
		hiragana: "しばはらうんゆゆうげんがいしゃ"
	},
	{
		original: "暁運輸",
		hiragana: "あかつきうんゆ"
	},
	{
		original: "有限会社安岡重機",
		hiragana: "ゆうげんがいしゃやすおかじゅうき"
	},
	{
		original: "有限会社鷹山物流",
		hiragana: "ゆうげんがいしゃたかやまぶつりゅう"
	},
	{
		original: "トップラン",
		hiragana: "とっぷらん"
	},
	{
		original: "有限会社横山物産",
		hiragana: "ゆうげんがいしゃよこやまぶっさん"
	},
	{
		original: "高橋機工",
		hiragana: "たかはしきこう"
	},
	{
		original: "ケイスリーアドバンス",
		hiragana: "けいすりーあどばんす"
	},
	{
		original: "エム・エイ",
		hiragana: "えむ・えい"
	},
	{
		original: "品川運送",
		hiragana: "しながわうんそう"
	},
	{
		original: "エイト陸送",
		hiragana: "えいとりくそう"
	},
	{
		original: "ケイエム運輸",
		hiragana: "けいえむうんゆ"
	},
	{
		original: "エッジライン",
		hiragana: "えっじらいん"
	},
	{
		original: "池谷運送",
		hiragana: "いけたにうんそう"
	},
	{
		original: "有限会社宇佐美運輸",
		hiragana: "ゆうげんがいしゃうさみうんゆ"
	},
	{
		original: "有限会社ドリームライナー",
		hiragana: "ゆうげんがいしゃどりーむらいなー"
	},
	{
		original: "刈谷配送",
		hiragana: "かりやはいそう"
	},
	{
		original: "有限会社シンコー運輸",
		hiragana: "ゆうげんがいしゃしんこーうんゆ"
	},
	{
		original: "有限会社栁田商事",
		hiragana: "ゆうげんがいしゃしょうじ"
	},
	{
		original: "有限会社和田商店",
		hiragana: "ゆうげんがいしゃわだしょうてん"
	},
	{
		original: "有限会社プロシード",
		hiragana: "ゆうげんがいしゃぷろしーど"
	},
	{
		original: "メディアオークラ",
		hiragana: "めでぃあおーくら"
	},
	{
		original: "エクスプレス・シオザキ",
		hiragana: "えくすぷれす・しおざき"
	},
	{
		original: "有限会社加瀬物流",
		hiragana: "ゆうげんがいしゃかせぶつりゅう"
	},
	{
		original: "グローバルサービス",
		hiragana: "ぐろーばるさーびす"
	},
	{
		original: "草加急送",
		hiragana: "そうかきゅうそう"
	},
	{
		original: "有限会社橋田機設",
		hiragana: "ゆうげんがいしゃはしだきせつ"
	},
	{
		original: "有限会社アトリエ運送",
		hiragana: "ゆうげんがいしゃあとりえうんそう"
	},
	{
		original: "三久運輸",
		hiragana: "みつひさうんゆ"
	},
	{
		original: "丸番荷役運輸",
		hiragana: "まるばんにやくうんゆ"
	},
	{
		original: "有限会社協栄",
		hiragana: "ゆうげんがいしゃきょうえい"
	},
	{
		original: "有限会社木村運送",
		hiragana: "ゆうげんがいしゃきむらうんそう"
	},
	{
		original: "飛驒萩原運送",
		hiragana: "ひだはぎわらうんそう"
	},
	{
		original: "有限会社東薬運送",
		hiragana: "ゆうげんがいしゃひがしくすりうんそう"
	},
	{
		original: "曽我運送",
		hiragana: "そがうんそう"
	},
	{
		original: "ブルーライン・エキスプレス",
		hiragana: "ぶるーらいん・えきすぷれす"
	},
	{
		original: "埼京通商",
		hiragana: "さいきょうつうしょう"
	},
	{
		original: "東海運輸",
		hiragana: "とうかいうんゆ"
	},
	{
		original: "マルサン運輸",
		hiragana: "まるさんうんゆ"
	},
	{
		original: "有限会社山木商運",
		hiragana: "ゆうげんがいしゃやまきしょううん"
	},
	{
		original: "有限会社城建産業",
		hiragana: "ゆうげんがいしゃしろけんさんぎょう"
	},
	{
		original: "ファーストカーゴ千葉",
		hiragana: "ふぁーすとかーごちば"
	},
	{
		original: "梅田運送",
		hiragana: "うめだうんそう"
	},
	{
		original: "自由ケ丘運送有限会社",
		hiragana: "じゆうけおかうんそうゆうげんがいしゃ"
	},
	{
		original: "小川運送",
		hiragana: "おがわうんそう"
	},
	{
		original: "東海運輸有限会社",
		hiragana: "とうかいうんゆゆうげんがいしゃ"
	},
	{
		original: "アクティブ運輸",
		hiragana: "あくてぃぶうんゆ"
	},
	{
		original: "有限会社永吉運輸",
		hiragana: "ゆうげんがいしゃえいきちうんゆ"
	},
	{
		original: "京成",
		hiragana: "けいせい"
	},
	{
		original: "大黒運輸",
		hiragana: "だいこくうんゆ"
	},
	{
		original: "丸吉運送有限会社",
		hiragana: "まるよしうんそうゆうげんがいしゃ"
	},
	{
		original: "有限会社翔栄サービス",
		hiragana: "ゆうげんがいしゃしょうさかえさーびす"
	},
	{
		original: "田澤物流有限会社",
		hiragana: "たざわぶつりゅうゆうげんがいしゃ"
	},
	{
		original: "杉田商店",
		hiragana: "すぎたしょうてん"
	},
	{
		original: "有限会社小田通商",
		hiragana: "ゆうげんがいしゃおだつうしょう"
	},
	{
		original: "藤田通運",
		hiragana: "ふじたつううん"
	},
	{
		original: "有限会社大商運輸",
		hiragana: "ゆうげんがいしゃだいしょううんゆ"
	},
	{
		original: "ダイケン輸送",
		hiragana: "だいけんゆそう"
	},
	{
		original: "米田産業",
		hiragana: "よねださんぎょう"
	},
	{
		original: "ユニコム",
		hiragana: "ゆにこむ"
	},
	{
		original: "有限会社ニチヒロ運輸",
		hiragana: "ゆうげんがいしゃにちひろうんゆ"
	},
	{
		original: "有限会社五郎陸運",
		hiragana: "ゆうげんがいしゃごろうりくうん"
	},
	{
		original: "山坂梱包",
		hiragana: "やまさかこんぽう"
	},
	{
		original: "興濃運輸有限会社",
		hiragana: "きょうのううんゆゆうげんがいしゃ"
	},
	{
		original: "大塚運送",
		hiragana: "おおつかうんそう"
	},
	{
		original: "シーロックス北一",
		hiragana: "しーろっくすきたいち"
	},
	{
		original: "有限会社村田運輸サービス",
		hiragana: "ゆうげんがいしゃむらたうんゆさーびす"
	},
	{
		original: "ビーエムロジコム",
		hiragana: "びーえむろじこむ"
	},
	{
		original: "有限会社城南運輸",
		hiragana: "ゆうげんがいしゃじょうなんうんゆ"
	},
	{
		original: "寺倉運送有限会社",
		hiragana: "てらくらうんそうゆうげんがいしゃ"
	},
	{
		original: "横浜コンテナ輸送",
		hiragana: "よこはまこんてなゆそう"
	},
	{
		original: "有限会社タキグチ",
		hiragana: "ゆうげんがいしゃたきぐち"
	},
	{
		original: "ナイセイ流通",
		hiragana: "ないせいりゅうつう"
	},
	{
		original: "青森酪農運輸",
		hiragana: "あおもりらくのううんゆ"
	},
	{
		original: "羽柴運輸",
		hiragana: "はしばうんゆ"
	},
	{
		original: "河野運送",
		hiragana: "こうのうんそう"
	},
	{
		original: "トレース",
		hiragana: "とれーす"
	},
	{
		original: "吉野運輸倉庫",
		hiragana: "よしのうんゆそうこ"
	},
	{
		original: "山梨中央運送",
		hiragana: "やまなしちゅうおううんそう"
	},
	{
		original: "有限会社中浦組",
		hiragana: "ゆうげんがいしゃなかうらくみ"
	},
	{
		original: "航空ネットワーク",
		hiragana: "こうくうねっとわーく"
	},
	{
		original: "大門運送有限会社",
		hiragana: "だいもんうんそうゆうげんがいしゃ"
	},
	{
		original: "坂口商店",
		hiragana: "さかぐちしょうてん"
	},
	{
		original: "有限会社澤部運送",
		hiragana: "ゆうげんがいしゃさわぶうんそう"
	},
	{
		original: "清水建材有限会社",
		hiragana: "しみずけんざいゆうげんがいしゃ"
	},
	{
		original: "ＮＨコーポレーション",
		hiragana: "ＮＨこーぽれーしょん"
	},
	{
		original: "有限会社石橋陸商",
		hiragana: "ゆうげんがいしゃいしばしりくしょう"
	},
	{
		original: "有限会社共成輸送",
		hiragana: "ゆうげんがいしゃともせいゆそう"
	},
	{
		original: "有限会社丸信システム流通",
		hiragana: "ゆうげんがいしゃまるしんしすてむりゅうつう"
	},
	{
		original: "興和運送有限会社",
		hiragana: "こうわうんそうゆうげんがいしゃ"
	},
	{
		original: "勇和",
		hiragana: "いさみわ"
	},
	{
		original: "有限会社木村運送",
		hiragana: "ゆうげんがいしゃきむらうんそう"
	},
	{
		original: "カネタ運輸有限会社",
		hiragana: "かねたうんゆゆうげんがいしゃ"
	},
	{
		original: "六郷運送有限会社",
		hiragana: "ろくごううんそうゆうげんがいしゃ"
	},
	{
		original: "日の丸商運",
		hiragana: "ひのまるしょううん"
	},
	{
		original: "有限会社美咲急送",
		hiragana: "ゆうげんがいしゃみさききゅうそう"
	},
	{
		original: "秋田県赤帽",
		hiragana: "あきたけんあかぼう"
	},
	{
		original: "ミライ",
		hiragana: "みらい"
	},
	{
		original: "近江運送",
		hiragana: "おうみうんそう"
	},
	{
		original: "三幸運送",
		hiragana: "みつゆきうんそう"
	},
	{
		original: "氷上運送有限会社",
		hiragana: "ひかみうんそうゆうげんがいしゃ"
	},
	{
		original: "川中島陸送",
		hiragana: "かわなかしまりくそう"
	},
	{
		original: "松原運輸",
		hiragana: "まつばらうんゆ"
	},
	{
		original: "井戸坂運輸",
		hiragana: "いどさかうんゆ"
	},
	{
		original: "三陸",
		hiragana: "さんりく"
	},
	{
		original: "有限会社ミハラ運輸",
		hiragana: "ゆうげんがいしゃみはらうんゆ"
	},
	{
		original: "丸和運輸",
		hiragana: "まるわうんゆ"
	},
	{
		original: "八潮興業",
		hiragana: "やしおこうぎょう"
	},
	{
		original: "グローバル",
		hiragana: "ぐろーばる"
	},
	{
		original: "清水工業",
		hiragana: "しみずこうぎょう"
	},
	{
		original: "多度津物流有限会社",
		hiragana: "たどつぶつりゅうゆうげんがいしゃ"
	},
	{
		original: "恵那貨物自動車運送",
		hiragana: "えなかもつじどうしゃうんそう"
	},
	{
		original: "豊松運輸有限会社",
		hiragana: "とよまつうんゆゆうげんがいしゃ"
	},
	{
		original: "東洋物産",
		hiragana: "とうようぶっさん"
	},
	{
		original: "福山海陸運輸",
		hiragana: "ふくやまかいりくうんゆ"
	},
	{
		original: "小林興業",
		hiragana: "こばやしこうぎょう"
	},
	{
		original: "越智急送",
		hiragana: "おちきゅうそう"
	},
	{
		original: "ゴールドライナー",
		hiragana: "ごーるどらいなー"
	},
	{
		original: "エクスネット",
		hiragana: "えくすねっと"
	},
	{
		original: "有限会社埼成運輸",
		hiragana: "ゆうげんがいしゃさきせいうんゆ"
	},
	{
		original: "有限会社高清水運送",
		hiragana: "ゆうげんがいしゃたかしみずうんそう"
	},
	{
		original: "大久保運送",
		hiragana: "おおくぼうんそう"
	},
	{
		original: "有限会社松島商事",
		hiragana: "ゆうげんがいしゃまつしましょうじ"
	},
	{
		original: "鈴木運送",
		hiragana: "すずきうんそう"
	},
	{
		original: "エフカーゴ",
		hiragana: "えふかーご"
	},
	{
		original: "飯作運輸",
		hiragana: "めしさくうんゆ"
	},
	{
		original: "有限会社白川運送",
		hiragana: "ゆうげんがいしゃしらかわうんそう"
	},
	{
		original: "ツバメ急配",
		hiragana: "つばめきゅうはい"
	},
	{
		original: "有限会社和光運送",
		hiragana: "ゆうげんがいしゃわこううんそう"
	},
	{
		original: "静興運送",
		hiragana: "せいきょううんそう"
	},
	{
		original: "有限会社大藪運送",
		hiragana: "ゆうげんがいしゃおおやぶうんそう"
	},
	{
		original: "北浦まるみ運送有限会社",
		hiragana: "きたうらまるみうんそうゆうげんがいしゃ"
	},
	{
		original: "有限会社菊鹿運輸",
		hiragana: "ゆうげんがいしゃきくかうんゆ"
	},
	{
		original: "ＦＫＢ",
		hiragana: "ＦＫＢ"
	},
	{
		original: "松谷運送",
		hiragana: "まつたにうんそう"
	},
	{
		original: "財田運送有限会社",
		hiragana: "さいたうんそうゆうげんがいしゃ"
	},
	{
		original: "中兵庫運輸有限会社",
		hiragana: "なかひょうごうんゆゆうげんがいしゃ"
	},
	{
		original: "セイリュウ",
		hiragana: "せいりゅう"
	},
	{
		original: "竹島",
		hiragana: "たけしま"
	},
	{
		original: "村尾運送",
		hiragana: "むらおうんそう"
	},
	{
		original: "県南運送有限会社",
		hiragana: "けんなんうんそうゆうげんがいしゃ"
	},
	{
		original: "有限会社新興倉庫運輸",
		hiragana: "ゆうげんがいしゃしんこうそうこうんゆ"
	},
	{
		original: "有限会社津村運送",
		hiragana: "ゆうげんがいしゃつむらうんそう"
	},
	{
		original: "有限会社空閑運輸",
		hiragana: "ゆうげんがいしゃくうかんうんゆ"
	},
	{
		original: "有限会社アゲナ琉運",
		hiragana: "ゆうげんがいしゃあげなりゅううん"
	},
	{
		original: "ワイ・エムロジスティクス有限会社",
		hiragana: "わい・えむろじすてぃくすゆうげんがいしゃ"
	},
	{
		original: "有限会社岸商事",
		hiragana: "ゆうげんがいしゃきししょうじ"
	},
	{
		original: "アグリチャレンジ・アイ",
		hiragana: "あぐりちゃれんじ・あい"
	},
	{
		original: "有限会社合津運輸",
		hiragana: "ゆうげんがいしゃごうつうんゆ"
	},
	{
		original: "連協運送有限会社",
		hiragana: "れんきょううんそうゆうげんがいしゃ"
	},
	{
		original: "関東グレーンターミナル",
		hiragana: "かんとうぐれーんたーみなる"
	},
	{
		original: "石谷運輸有限会社",
		hiragana: "いしがやうんゆゆうげんがいしゃ"
	},
	{
		original: "有限会社星伸物流",
		hiragana: "ゆうげんがいしゃほししんぶつりゅう"
	},
	{
		original: "高橋運輸",
		hiragana: "たかはしうんゆ"
	},
	{
		original: "有限会社大谷石川運送",
		hiragana: "ゆうげんがいしゃおおたにいしかわうんそう"
	},
	{
		original: "帯東運輸有限会社",
		hiragana: "おびひがしうんゆゆうげんがいしゃ"
	},
	{
		original: "有限会社丸後運輸",
		hiragana: "ゆうげんがいしゃまるのちうんゆ"
	},
	{
		original: "有限会社杉本急送",
		hiragana: "ゆうげんがいしゃすぎもときゅうそう"
	},
	{
		original: "有限会社まるよし運輸",
		hiragana: "ゆうげんがいしゃまるよしうんゆ"
	},
	{
		original: "アクシス",
		hiragana: "あくしす"
	},
	{
		original: "有限会社フジヨリ",
		hiragana: "ゆうげんがいしゃふじより"
	},
	{
		original: "三橋運送",
		hiragana: "みつはしうんそう"
	},
	{
		original: "高崎貨物自動車",
		hiragana: "たかさきかもつじどうしゃ"
	},
	{
		original: "幌栄",
		hiragana: "ほろさかえ"
	},
	{
		original: "有限会社フクミコーポレーション",
		hiragana: "ゆうげんがいしゃふくみこーぽれーしょん"
	},
	{
		original: "有限会社黒田トラック",
		hiragana: "ゆうげんがいしゃくろだとらっく"
	},
	{
		original: "有限会社ヤマケイ運送",
		hiragana: "ゆうげんがいしゃやまけいうんそう"
	},
	{
		original: "新廻運送有限会社",
		hiragana: "しんかいうんそうゆうげんがいしゃ"
	},
	{
		original: "有限会社八幡商運",
		hiragana: "ゆうげんがいしゃはちまんしょううん"
	},
	{
		original: "帝鉄運輸",
		hiragana: "みかどてつうんゆ"
	},
	{
		original: "泉尾運送",
		hiragana: "いずおうんそう"
	},
	{
		original: "千葉産業有限会社",
		hiragana: "ちばさんぎょうゆうげんがいしゃ"
	},
	{
		original: "有限会社あおぞら物流",
		hiragana: "ゆうげんがいしゃあおぞらぶつりゅう"
	},
	{
		original: "有限会社棟方運送",
		hiragana: "ゆうげんがいしゃむなかたうんそう"
	},
	{
		original: "イノチオ物流",
		hiragana: "いのちおぶつりゅう"
	},
	{
		original: "紀南運輸",
		hiragana: "きなんうんゆ"
	},
	{
		original: "有限会社仁平運輸",
		hiragana: "ゆうげんがいしゃじんぺいうんゆ"
	},
	{
		original: "岩花運輸",
		hiragana: "いわはなうんゆ"
	},
	{
		original: "有限会社ササキコーポレーション",
		hiragana: "ゆうげんがいしゃささきこーぽれーしょん"
	},
	{
		original: "信栄運輸",
		hiragana: "のぶえいうんゆ"
	},
	{
		original: "有限会社高村事業所",
		hiragana: "ゆうげんがいしゃたかむらじぎょうしょ"
	},
	{
		original: "有限会社オーエム・トランスポート",
		hiragana: "ゆうげんがいしゃおーえむ・とらんすぽーと"
	},
	{
		original: "有限会社宮内運送",
		hiragana: "ゆうげんがいしゃみやうちうんそう"
	},
	{
		original: "澤田運輸",
		hiragana: "さわだうんゆ"
	},
	{
		original: "大東総業",
		hiragana: "だいとうそうぎょう"
	},
	{
		original: "三栄自動車運送",
		hiragana: "さんえいじどうしゃうんそう"
	},
	{
		original: "三和運輸",
		hiragana: "さんわうんゆ"
	},
	{
		original: "東照運輸",
		hiragana: "とうしょううんゆ"
	},
	{
		original: "有限会社高橋運送",
		hiragana: "ゆうげんがいしゃたかはしうんそう"
	},
	{
		original: "有限会社佐原陸運",
		hiragana: "ゆうげんがいしゃさわらりくうん"
	},
	{
		original: "舟橋運輸倉庫",
		hiragana: "ふなばしうんゆそうこ"
	},
	{
		original: "ユタカ運輸",
		hiragana: "ゆたかうんゆ"
	},
	{
		original: "芝池運輸",
		hiragana: "しばいけうんゆ"
	},
	{
		original: "有限会社成美急送",
		hiragana: "ゆうげんがいしゃなるみきゅうそう"
	},
	{
		original: "ライズカンパニー",
		hiragana: "らいずかんぱにー"
	},
	{
		original: "大豊陸運有限会社",
		hiragana: "たいほうりくうんゆうげんがいしゃ"
	},
	{
		original: "立正トランスポート",
		hiragana: "りっしょうとらんすぽーと"
	},
	{
		original: "バンダイロジパル",
		hiragana: "ばんだいろじぱる"
	},
	{
		original: "高橋運送",
		hiragana: "たかはしうんそう"
	},
	{
		original: "有限会社森ロジテム",
		hiragana: "ゆうげんがいしゃもりろじてむ"
	},
	{
		original: "大嶋急送",
		hiragana: "おおしまきゅうそう"
	},
	{
		original: "荷造梱包ルートサービス",
		hiragana: "にづくりこんぽうるーとさーびす"
	},
	{
		original: "有限会社ビッグエッグ",
		hiragana: "ゆうげんがいしゃびっぐえっぐ"
	},
	{
		original: "有限会社大山建設",
		hiragana: "ゆうげんがいしゃおおやまけんせつ"
	},
	{
		original: "山口商事",
		hiragana: "やまぐちしょうじ"
	},
	{
		original: "松井商事",
		hiragana: "まついしょうじ"
	},
	{
		original: "浪岡運送有限会社",
		hiragana: "なみおかうんそうゆうげんがいしゃ"
	},
	{
		original: "友位倉庫",
		hiragana: "ともくらいそうこ"
	},
	{
		original: "暁運輸",
		hiragana: "あかつきうんゆ"
	},
	{
		original: "有限会社平澤運送",
		hiragana: "ゆうげんがいしゃひらさわうんそう"
	},
	{
		original: "千印荷役",
		hiragana: "せんいんにやく"
	},
	{
		original: "小竹商事",
		hiragana: "こたけしょうじ"
	},
	{
		original: "有限会社名寄トラック",
		hiragana: "ゆうげんがいしゃなよろとらっく"
	},
	{
		original: "有限会社鶴釧運輸",
		hiragana: "ゆうげんがいしゃつるくしうんゆ"
	},
	{
		original: "有限会社市橋運輸",
		hiragana: "ゆうげんがいしゃいちはしうんゆ"
	},
	{
		original: "富士ライン",
		hiragana: "ふじらいん"
	},
	{
		original: "海老運送有限会社",
		hiragana: "えびうんそうゆうげんがいしゃ"
	},
	{
		original: "有限会社イズム",
		hiragana: "ゆうげんがいしゃいずむ"
	},
	{
		original: "ケイ・ロジスティクス",
		hiragana: "けい・ろじすてぃくす"
	},
	{
		original: "多摩恵運輸",
		hiragana: "たまえうんゆ"
	},
	{
		original: "丸金",
		hiragana: "まるきん"
	},
	{
		original: "ウグイスエンタープライズ",
		hiragana: "うぐいすえんたーぷらいず"
	},
	{
		original: "大石商事",
		hiragana: "おおいししょうじ"
	},
	{
		original: "有限会社サン急配",
		hiragana: "ゆうげんがいしゃさんきゅうはい"
	},
	{
		original: "有限会社金丸運送店",
		hiragana: "ゆうげんがいしゃかねまるうんそうてん"
	},
	{
		original: "有限会社アールエフ",
		hiragana: "ゆうげんがいしゃあーるえふ"
	},
	{
		original: "有限会社東北関宿急便",
		hiragana: "ゆうげんがいしゃとうほくせきやどきゅうびん"
	},
	{
		original: "新潟日植運輸",
		hiragana: "にいがたにちしょくうんゆ"
	},
	{
		original: "心翔",
		hiragana: "こころしょう"
	},
	{
		original: "有限会社栗島運送",
		hiragana: "ゆうげんがいしゃくりしまうんそう"
	},
	{
		original: "分水運送",
		hiragana: "ぶんすいうんそう"
	},
	{
		original: "プロップ",
		hiragana: "ぷろっぷ"
	},
	{
		original: "神和運送",
		hiragana: "かみわうんそう"
	},
	{
		original: "有限会社千葉興産",
		hiragana: "ゆうげんがいしゃちばこうさん"
	},
	{
		original: "日の丸通商",
		hiragana: "ひのまるつうしょう"
	},
	{
		original: "ノボパン運輸",
		hiragana: "のぼぱんうんゆ"
	},
	{
		original: "有限会社青和",
		hiragana: "ゆうげんがいしゃあおわ"
	},
	{
		original: "松木商事",
		hiragana: "まつきしょうじ"
	},
	{
		original: "有限会社金井運送",
		hiragana: "ゆうげんがいしゃかないうんそう"
	},
	{
		original: "有限会社しまんと物流",
		hiragana: "ゆうげんがいしゃしまんとぶつりゅう"
	},
	{
		original: "安濃急送有限会社",
		hiragana: "あのうきゅうそうゆうげんがいしゃ"
	},
	{
		original: "有限会社弦月商運",
		hiragana: "ゆうげんがいしゃげんげつしょううん"
	},
	{
		original: "藤田運送",
		hiragana: "ふじたうんそう"
	},
	{
		original: "有限会社新星ロジテック",
		hiragana: "ゆうげんがいしゃしんせいろじてっく"
	},
	{
		original: "有限会社明成流通",
		hiragana: "ゆうげんがいしゃあきなりりゅうつう"
	},
	{
		original: "有限会社がなは運送",
		hiragana: "ゆうげんがいしゃがなはうんそう"
	},
	{
		original: "繁栄運送有限会社",
		hiragana: "はんえいうんそうゆうげんがいしゃ"
	},
	{
		original: "有限会社河原建材運輸",
		hiragana: "ゆうげんがいしゃかわらけんざいうんゆ"
	},
	{
		original: "丸正運輸",
		hiragana: "まるしょううんゆ"
	},
	{
		original: "関東物流",
		hiragana: "かんとうぶつりゅう"
	},
	{
		original: "多古運輸有限会社",
		hiragana: "たこうんゆゆうげんがいしゃ"
	},
	{
		original: "美瑛小型運送",
		hiragana: "びえいこがたうんそう"
	},
	{
		original: "刈谷高速運輸",
		hiragana: "かりやこうそくうんゆ"
	},
	{
		original: "ＭＭ通商",
		hiragana: "ＭＭつうしょう"
	},
	{
		original: "柄本運送有限会社",
		hiragana: "えもとうんそうゆうげんがいしゃ"
	},
	{
		original: "有限会社カクダ運送",
		hiragana: "ゆうげんがいしゃかくだうんそう"
	},
	{
		original: "プロイコム常陸",
		hiragana: "ぷろいこむひたち"
	},
	{
		original: "有限会社安田物流",
		hiragana: "ゆうげんがいしゃやすだぶつりゅう"
	},
	{
		original: "共伸運輸",
		hiragana: "ともしんうんゆ"
	},
	{
		original: "ニッコウ運輸",
		hiragana: "にっこううんゆ"
	},
	{
		original: "有限会社大船渡総合運輸",
		hiragana: "ゆうげんがいしゃおおふなとそうごううんゆ"
	},
	{
		original: "久遠",
		hiragana: "くどう"
	},
	{
		original: "ニューライン",
		hiragana: "にゅーらいん"
	},
	{
		original: "エキスプレス青森",
		hiragana: "えきすぷれすあおもり"
	},
	{
		original: "有限会社高橋建材",
		hiragana: "ゆうげんがいしゃたかはしけんざい"
	},
	{
		original: "ゑびすや運輸",
		hiragana: "ゑびすやうんゆ"
	},
	{
		original: "丸共運送",
		hiragana: "まるともうんそう"
	},
	{
		original: "有限会社アイ流通",
		hiragana: "ゆうげんがいしゃあいりゅうつう"
	},
	{
		original: "榎運送",
		hiragana: "えのきうんそう"
	},
	{
		original: "アルファグループホールディングス",
		hiragana: "あるふぁぐるーぷほーるでぃんぐす"
	},
	{
		original: "ヤマト運送",
		hiragana: "やまとうんそう"
	},
	{
		original: "安来市場運送有限会社",
		hiragana: "やすぎしじょううんそうゆうげんがいしゃ"
	},
	{
		original: "有限会社須沢運送",
		hiragana: "ゆうげんがいしゃすざわうんそう"
	},
	{
		original: "香川物流",
		hiragana: "かがわぶつりゅう"
	},
	{
		original: "華丸",
		hiragana: "はなまる"
	},
	{
		original: "橋本運送有限会社",
		hiragana: "はしもとうんそうゆうげんがいしゃ"
	},
	{
		original: "グリーンエキスプレス",
		hiragana: "ぐりーんえきすぷれす"
	},
	{
		original: "有限会社石田運送",
		hiragana: "ゆうげんがいしゃいしだうんそう"
	},
	{
		original: "山本工業有限会社",
		hiragana: "やまもとこうぎょうゆうげんがいしゃ"
	},
	{
		original: "有限会社名取通商",
		hiragana: "ゆうげんがいしゃなとりつうしょう"
	},
	{
		original: "有限会社パール運輸",
		hiragana: "ゆうげんがいしゃぱーるうんゆ"
	},
	{
		original: "多気急送",
		hiragana: "たききゅうそう"
	},
	{
		original: "有限会社アール急便",
		hiragana: "ゆうげんがいしゃあーるきゅうびん"
	},
	{
		original: "有限会社大道運輸",
		hiragana: "ゆうげんがいしゃだいどううんゆ"
	},
	{
		original: "福岡大和ヤード有限会社",
		hiragana: "ふくおかだいわやーどゆうげんがいしゃ"
	},
	{
		original: "井上商事運輸",
		hiragana: "いのうえしょうじうんゆ"
	},
	{
		original: "日の丸運輸",
		hiragana: "ひのまるうんゆ"
	},
	{
		original: "ドリーム",
		hiragana: "どりーむ"
	},
	{
		original: "有限会社清水組",
		hiragana: "ゆうげんがいしゃしみずくみ"
	},
	{
		original: "長野運輸",
		hiragana: "ながのうんゆ"
	},
	{
		original: "石川高速運輸有限会社",
		hiragana: "いしかわこうそくうんゆゆうげんがいしゃ"
	},
	{
		original: "船場作業",
		hiragana: "せんばさぎょう"
	},
	{
		original: "有限会社入沢運送",
		hiragana: "ゆうげんがいしゃいりさわうんそう"
	},
	{
		original: "有限会社三栄運輸機工",
		hiragana: "ゆうげんがいしゃさんえいうんゆきこう"
	},
	{
		original: "ＡＰＥＸロジスティクスジャパン",
		hiragana: "ＡＰＥＸろじすてぃくすじゃぱん"
	},
	{
		original: "大倉運輸有限会社",
		hiragana: "おおくらうんゆゆうげんがいしゃ"
	},
	{
		original: "生陽運輸",
		hiragana: "なまよううんゆ"
	},
	{
		original: "坂出運送",
		hiragana: "さかいでうんそう"
	},
	{
		original: "有限会社かねます運輸",
		hiragana: "ゆうげんがいしゃかねますうんゆ"
	},
	{
		original: "関西配送",
		hiragana: "かんさいはいそう"
	},
	{
		original: "マスト",
		hiragana: "ますと"
	},
	{
		original: "則武運送",
		hiragana: "のりたけうんそう"
	},
	{
		original: "有限会社平和マコトラックス",
		hiragana: "ゆうげんがいしゃへいわまことらっくす"
	},
	{
		original: "エス・ロジスティクス・シオノ",
		hiragana: "えす・ろじすてぃくす・しおの"
	},
	{
		original: "フレックス",
		hiragana: "ふれっくす"
	},
	{
		original: "有限会社福岡運送",
		hiragana: "ゆうげんがいしゃふくおかうんそう"
	},
	{
		original: "有限会社フジケン企画",
		hiragana: "ゆうげんがいしゃふじけんきかく"
	},
	{
		original: "京丹運輸",
		hiragana: "きょうたんうんゆ"
	},
	{
		original: "有限会社玉川業務サービス",
		hiragana: "ゆうげんがいしゃたまがわぎょうむさーびす"
	},
	{
		original: "八鍬運送有限会社",
		hiragana: "やくわうんそうゆうげんがいしゃ"
	},
	{
		original: "キタガワ",
		hiragana: "きたがわ"
	},
	{
		original: "清好運輸",
		hiragana: "きよしこううんゆ"
	},
	{
		original: "大成物流サービス",
		hiragana: "たいせいぶつりゅうさーびす"
	},
	{
		original: "岩永運送",
		hiragana: "いわながうんそう"
	},
	{
		original: "坂出急配",
		hiragana: "さかいできゅうはい"
	},
	{
		original: "新菱花運輸",
		hiragana: "しんりょうはなうんゆ"
	},
	{
		original: "有限会社辻亀運送",
		hiragana: "ゆうげんがいしゃつじかめうんそう"
	},
	{
		original: "八城運送有限会社",
		hiragana: "やしろうんそうゆうげんがいしゃ"
	},
	{
		original: "グリーンカーゴサービス",
		hiragana: "ぐりーんかーごさーびす"
	},
	{
		original: "有限会社栄運送",
		hiragana: "ゆうげんがいしゃえいうんそう"
	},
	{
		original: "津名陸運",
		hiragana: "つなりくうん"
	},
	{
		original: "大西商事",
		hiragana: "おおにししょうじ"
	},
	{
		original: "櫻井運輸",
		hiragana: "さくらいうんゆ"
	},
	{
		original: "エム・エス",
		hiragana: "えむ・えす"
	},
	{
		original: "パックネット",
		hiragana: "ぱっくねっと"
	},
	{
		original: "東海急送",
		hiragana: "とうかいきゅうそう"
	},
	{
		original: "井上商事",
		hiragana: "いのうえしょうじ"
	},
	{
		original: "藤建工業",
		hiragana: "ふじけんこうぎょう"
	},
	{
		original: "有限会社マルヒ運送",
		hiragana: "ゆうげんがいしゃまるひうんそう"
	},
	{
		original: "福井商運",
		hiragana: "ふくいしょううん"
	},
	{
		original: "光急送",
		hiragana: "ひかりきゅうそう"
	},
	{
		original: "有限会社佐藤運送",
		hiragana: "ゆうげんがいしゃさとううんそう"
	},
	{
		original: "有限会社中島商事",
		hiragana: "ゆうげんがいしゃなかじましょうじ"
	},
	{
		original: "有限会社大成産業",
		hiragana: "ゆうげんがいしゃたいせいさんぎょう"
	},
	{
		original: "しげまる",
		hiragana: "しげまる"
	},
	{
		original: "斉藤運送有限会社",
		hiragana: "さいとううんそうゆうげんがいしゃ"
	},
	{
		original: "有限会社サナダエクスプレス",
		hiragana: "ゆうげんがいしゃさなだえくすぷれす"
	},
	{
		original: "有限会社河綜",
		hiragana: "ゆうげんがいしゃかわそう"
	},
	{
		original: "グリーントランスポート",
		hiragana: "ぐりーんとらんすぽーと"
	},
	{
		original: "有限会社越川運送",
		hiragana: "ゆうげんがいしゃこしかわうんそう"
	},
	{
		original: "ネクサス",
		hiragana: "ねくさす"
	},
	{
		original: "有限会社龍榮運輸",
		hiragana: "ゆうげんがいしゃりゅうえいうんゆ"
	},
	{
		original: "有限会社末沢運送",
		hiragana: "ゆうげんがいしゃすえざわうんそう"
	},
	{
		original: "有限会社松見運輸",
		hiragana: "ゆうげんがいしゃまつみうんゆ"
	},
	{
		original: "サワイ",
		hiragana: "さわい"
	},
	{
		original: "豊国産業",
		hiragana: "とよくにさんぎょう"
	},
	{
		original: "栄興運",
		hiragana: "さかえきょううん"
	},
	{
		original: "大興吊運",
		hiragana: "たいこうつりうん"
	},
	{
		original: "新田運輸",
		hiragana: "にったうんゆ"
	},
	{
		original: "鳥取賀陽運輸有限会社",
		hiragana: "とっとりかやうんゆゆうげんがいしゃ"
	},
	{
		original: "ファースト",
		hiragana: "ふぁーすと"
	},
	{
		original: "有限会社オーケーコーポレーション",
		hiragana: "ゆうげんがいしゃおーけーこーぽれーしょん"
	},
	{
		original: "三原組運送",
		hiragana: "みはらくみうんそう"
	},
	{
		original: "有限会社共立産業",
		hiragana: "ゆうげんがいしゃきょうりつさんぎょう"
	},
	{
		original: "フジサービス",
		hiragana: "ふじさーびす"
	},
	{
		original: "北上重工業",
		hiragana: "きたかみじゅうこうぎょう"
	},
	{
		original: "福栄運送",
		hiragana: "ふくえうんそう"
	},
	{
		original: "アール・エス運輸",
		hiragana: "あーる・えすうんゆ"
	},
	{
		original: "最上運輸",
		hiragana: "さいじょううんゆ"
	},
	{
		original: "有限会社高梨組建設運輸",
		hiragana: "ゆうげんがいしゃたかなしくみけんせつうんゆ"
	},
	{
		original: "勝山自動車",
		hiragana: "かつやまじどうしゃ"
	},
	{
		original: "王道ネット・エクスプレス",
		hiragana: "おうどうねっと・えくすぷれす"
	},
	{
		original: "有限会社松下商事",
		hiragana: "ゆうげんがいしゃまつしたしょうじ"
	},
	{
		original: "チャーター山陰",
		hiragana: "ちゃーたーさんいん"
	},
	{
		original: "有限会社北秋運送",
		hiragana: "ゆうげんがいしゃきたあきうんそう"
	},
	{
		original: "昭和運送",
		hiragana: "しょうわうんそう"
	},
	{
		original: "丸助運送有限会社",
		hiragana: "まるじょうんそうゆうげんがいしゃ"
	},
	{
		original: "有限会社クリエイト",
		hiragana: "ゆうげんがいしゃくりえいと"
	},
	{
		original: "有限会社総合運輸",
		hiragana: "ゆうげんがいしゃそうごううんゆ"
	},
	{
		original: "滝部運送",
		hiragana: "たきぶうんそう"
	},
	{
		original: "有限会社橋本興業運輸",
		hiragana: "ゆうげんがいしゃはしもとこうぎょううんゆ"
	},
	{
		original: "有限会社高知生コンクリート輸送",
		hiragana: "ゆうげんがいしゃこうちなまこんくりーとゆそう"
	},
	{
		original: "新生物流",
		hiragana: "しんせいぶつりゅう"
	},
	{
		original: "有限会社杉山商会",
		hiragana: "ゆうげんがいしゃすぎやましょうかい"
	},
	{
		original: "ＪＴＭ",
		hiragana: "ＪＴＭ"
	},
	{
		original: "有限会社トランスポート小田",
		hiragana: "ゆうげんがいしゃとらんすぽーとおだ"
	},
	{
		original: "トラスト物流",
		hiragana: "とらすとぶつりゅう"
	},
	{
		original: "芝山運送",
		hiragana: "しばやまうんそう"
	},
	{
		original: "有限会社吉原運送",
		hiragana: "ゆうげんがいしゃよしはらうんそう"
	},
	{
		original: "渡波運輸",
		hiragana: "わたのはうんゆ"
	},
	{
		original: "雅物流システム",
		hiragana: "まさぶつりゅうしすてむ"
	},
	{
		original: "折戸運送有限会社",
		hiragana: "おりとうんそうゆうげんがいしゃ"
	},
	{
		original: "磐城興運",
		hiragana: "いわききょううん"
	},
	{
		original: "池上商事有限会社",
		hiragana: "いけがみしょうじゆうげんがいしゃ"
	},
	{
		original: "萬場",
		hiragana: "まんば"
	},
	{
		original: "大翔陸運",
		hiragana: "ひろとりくうん"
	},
	{
		original: "日榕",
		hiragana: "にちよう"
	},
	{
		original: "有限会社城物流",
		hiragana: "ゆうげんがいしゃしろぶつりゅう"
	},
	{
		original: "柴崎運送",
		hiragana: "しばさきうんそう"
	},
	{
		original: "佐世保輸送サービス",
		hiragana: "させぼゆそうさーびす"
	},
	{
		original: "長野運輸有限会社",
		hiragana: "ながのうんゆゆうげんがいしゃ"
	},
	{
		original: "有限会社藤井商事",
		hiragana: "ゆうげんがいしゃふじいしょうじ"
	},
	{
		original: "有限会社大瀧運輸",
		hiragana: "ゆうげんがいしゃおおたきうんゆ"
	},
	{
		original: "東陸",
		hiragana: "ひがしりく"
	},
	{
		original: "天山運輸",
		hiragana: "てんざんうんゆ"
	},
	{
		original: "坪本",
		hiragana: "つぼもと"
	},
	{
		original: "有限会社上田運送",
		hiragana: "ゆうげんがいしゃうえだうんそう"
	},
	{
		original: "大宝",
		hiragana: "たいほう"
	},
	{
		original: "丸五運送店",
		hiragana: "まるごうんそうてん"
	},
	{
		original: "フレンド物流",
		hiragana: "ふれんどぶつりゅう"
	},
	{
		original: "有限会社アクト低温物流",
		hiragana: "ゆうげんがいしゃあくとていおんぶつりゅう"
	},
	{
		original: "流通サービス",
		hiragana: "りゅうつうさーびす"
	},
	{
		original: "知多梱包輸送有限会社",
		hiragana: "ちたこんぽうゆそうゆうげんがいしゃ"
	},
	{
		original: "互幸運輸",
		hiragana: "ごこううんゆ"
	},
	{
		original: "有限会社松山運輸",
		hiragana: "ゆうげんがいしゃまつやまうんゆ"
	},
	{
		original: "吉澤運輸商会",
		hiragana: "よしざわうんゆしょうかい"
	},
	{
		original: "キミジマ車輌",
		hiragana: "きみじましゃりょう"
	},
	{
		original: "市村総業",
		hiragana: "いちむらそうぎょう"
	},
	{
		original: "古宮運輸",
		hiragana: "こみやうんゆ"
	},
	{
		original: "有限会社丸雅",
		hiragana: "ゆうげんがいしゃまるまさ"
	},
	{
		original: "テツソー物流",
		hiragana: "てつそーぶつりゅう"
	},
	{
		original: "野呂川",
		hiragana: "のろかわ"
	},
	{
		original: "第一道路運送有限会社",
		hiragana: "だいいちどうろうんそうゆうげんがいしゃ"
	},
	{
		original: "正洸運輸",
		hiragana: "せいこううんゆ"
	},
	{
		original: "有限会社タケナカ物流",
		hiragana: "ゆうげんがいしゃたけなかぶつりゅう"
	},
	{
		original: "有限会社杉本運送",
		hiragana: "ゆうげんがいしゃすぎもとうんそう"
	},
	{
		original: "北九運輸",
		hiragana: "きたきゅううんゆ"
	},
	{
		original: "泉北陸運",
		hiragana: "せんぼくりくうん"
	},
	{
		original: "モリイキ運送",
		hiragana: "もりいきうんそう"
	},
	{
		original: "加藤興業",
		hiragana: "かとうこうぎょう"
	},
	{
		original: "ミヤコ流通",
		hiragana: "みやこりゅうつう"
	},
	{
		original: "コーウンサービス",
		hiragana: "こーうんさーびす"
	},
	{
		original: "有限会社セイユー運輸",
		hiragana: "ゆうげんがいしゃせいゆーうんゆ"
	},
	{
		original: "有限会社三愛運輸",
		hiragana: "ゆうげんがいしゃさんあいうんゆ"
	},
	{
		original: "有限会社上西運送",
		hiragana: "ゆうげんがいしゃうえにしうんそう"
	},
	{
		original: "有限会社橋野物流",
		hiragana: "ゆうげんがいしゃはしのぶつりゅう"
	},
	{
		original: "サンセイワ物流",
		hiragana: "さんせいわぶつりゅう"
	},
	{
		original: "有限会社森運輸",
		hiragana: "ゆうげんがいしゃもりうんゆ"
	},
	{
		original: "常総ロジテム",
		hiragana: "じょうそうろじてむ"
	},
	{
		original: "有限会社稲生石灰運送",
		hiragana: "ゆうげんがいしゃいなおせっかいうんそう"
	},
	{
		original: "日伸",
		hiragana: "にちしん"
	},
	{
		original: "宇陽運輸",
		hiragana: "うよううんゆ"
	},
	{
		original: "甲斐物流",
		hiragana: "かいぶつりゅう"
	},
	{
		original: "ＧＶ",
		hiragana: "ＧＶ"
	},
	{
		original: "あづま運送",
		hiragana: "あづまうんそう"
	},
	{
		original: "有限会社高松興業",
		hiragana: "ゆうげんがいしゃたかまつこうぎょう"
	},
	{
		original: "大窪運輸有限会社",
		hiragana: "おおくぼうんゆゆうげんがいしゃ"
	},
	{
		original: "有限会社広畑運送",
		hiragana: "ゆうげんがいしゃひろはたうんそう"
	},
	{
		original: "大津急送",
		hiragana: "おおつきゅうそう"
	},
	{
		original: "ＦＭＳ",
		hiragana: "ＦＭＳ"
	},
	{
		original: "北斗運輸有限会社",
		hiragana: "ほくとうんゆゆうげんがいしゃ"
	},
	{
		original: "福田工務店",
		hiragana: "ふくだこうむてん"
	},
	{
		original: "土浦運輸有限会社",
		hiragana: "つちうらうんゆゆうげんがいしゃ"
	},
	{
		original: "有限会社三興運輸",
		hiragana: "ゆうげんがいしゃさんこううんゆ"
	},
	{
		original: "平田倉庫運輸",
		hiragana: "ひらたそうこうんゆ"
	},
	{
		original: "有限会社下原商店",
		hiragana: "ゆうげんがいしゃしもばらしょうてん"
	},
	{
		original: "エス・サービス山田商会有限会社",
		hiragana: "えす・さーびすやまだしょうかいゆうげんがいしゃ"
	},
	{
		original: "有限会社山廣運送",
		hiragana: "ゆうげんがいしゃやまひろうんそう"
	},
	{
		original: "コグレ",
		hiragana: "こぐれ"
	},
	{
		original: "有限会社ヤナセ運送",
		hiragana: "ゆうげんがいしゃやなせうんそう"
	},
	{
		original: "有限会社光重機建設",
		hiragana: "ゆうげんがいしゃみつしげきけんせつ"
	},
	{
		original: "康富",
		hiragana: "やすしとみ"
	},
	{
		original: "アザス",
		hiragana: "あざす"
	},
	{
		original: "中外陸運",
		hiragana: "ちゅうがいりくうん"
	},
	{
		original: "有限会社忍商事運輸",
		hiragana: "ゆうげんがいしゃにんしょうじうんゆ"
	},
	{
		original: "名岐合同",
		hiragana: "めいしごうどう"
	},
	{
		original: "晃進物流",
		hiragana: "あきらしんもつりゅう"
	},
	{
		original: "有限会社北山運送",
		hiragana: "ゆうげんがいしゃきたやまうんそう"
	},
	{
		original: "東京都市場運送",
		hiragana: "とうきょうとしじょううんそう"
	},
	{
		original: "東洋ナビックス",
		hiragana: "とうようなびっくす"
	},
	{
		original: "有限会社明和工業",
		hiragana: "ゆうげんがいしゃめいわこうぎょう"
	},
	{
		original: "デジタル・エキスプレス",
		hiragana: "でじたる・えきすぷれす"
	},
	{
		original: "ＫＳ物流サービス",
		hiragana: "ＫＳぶつりゅうさーびす"
	},
	{
		original: "有限会社平野運送",
		hiragana: "ゆうげんがいしゃへいやうんそう"
	},
	{
		original: "虎徹運輸有限会社",
		hiragana: "こてつうんゆゆうげんがいしゃ"
	},
	{
		original: "菱美産業",
		hiragana: "ひしびさんぎょう"
	},
	{
		original: "山田総業",
		hiragana: "やまだそうぎょう"
	},
	{
		original: "有限会社モリ",
		hiragana: "ゆうげんがいしゃもり"
	},
	{
		original: "有限会社アイ・トレーディング",
		hiragana: "ゆうげんがいしゃあい・とれーでぃんぐ"
	},
	{
		original: "小松崎運輸有限会社",
		hiragana: "こまつざきうんゆゆうげんがいしゃ"
	},
	{
		original: "大山商事",
		hiragana: "おおやましょうじ"
	},
	{
		original: "有限会社宮崎運送",
		hiragana: "ゆうげんがいしゃみやざきうんそう"
	},
	{
		original: "岡村運輸",
		hiragana: "おかむらうんゆ"
	},
	{
		original: "ジョイワーク",
		hiragana: "じょいわーく"
	},
	{
		original: "マルソー",
		hiragana: "まるそー"
	},
	{
		original: "エフライナー",
		hiragana: "えふらいなー"
	},
	{
		original: "鶴見運輸倉庫",
		hiragana: "つるみうんゆそうこ"
	},
	{
		original: "西兵庫トランスポート",
		hiragana: "せいへいことらんすぽーと"
	},
	{
		original: "内堀梱包運輸有限会社",
		hiragana: "うちぼりこんぽううんゆゆうげんがいしゃ"
	},
	{
		original: "信越陸送",
		hiragana: "しんえつりくそう"
	},
	{
		original: "若狭急便センター",
		hiragana: "わかさきゅうびんせんたー"
	},
	{
		original: "有限会社伊藤運送",
		hiragana: "ゆうげんがいしゃいとううんそう"
	},
	{
		original: "葉月",
		hiragana: "はづき"
	},
	{
		original: "深川運輸",
		hiragana: "ふかがわうんゆ"
	},
	{
		original: "有限会社葉中産業",
		hiragana: "ゆうげんがいしゃようちゅうさんぎょう"
	},
	{
		original: "有限会社三咲商事",
		hiragana: "ゆうげんがいしゃみさきしょうじ"
	},
	{
		original: "興和運輸",
		hiragana: "こうわうんゆ"
	},
	{
		original: "島津運送",
		hiragana: "しまづうんそう"
	},
	{
		original: "二幸運輸倉庫",
		hiragana: "にこううんゆそうこ"
	},
	{
		original: "三光運輸",
		hiragana: "さんこううんゆ"
	},
	{
		original: "有限会社丸保商店",
		hiragana: "ゆうげんがいしゃまるほしょうてん"
	},
	{
		original: "有限会社末藤運送",
		hiragana: "ゆうげんがいしゃまつふじうんそう"
	},
	{
		original: "有限会社中予宅送",
		hiragana: "ゆうげんがいしゃちゅうよたくそう"
	},
	{
		original: "セイフティ",
		hiragana: "せいふてぃ"
	},
	{
		original: "システムライン",
		hiragana: "しすてむらいん"
	},
	{
		original: "有限会社市川運輸",
		hiragana: "ゆうげんがいしゃいちかわうんゆ"
	},
	{
		original: "トランシス東北",
		hiragana: "とらんしすとうほく"
	},
	{
		original: "美津運輸",
		hiragana: "みづうんゆ"
	},
	{
		original: "有限会社陵南物流",
		hiragana: "ゆうげんがいしゃりょうなんぶつりゅう"
	},
	{
		original: "清水物流サービス",
		hiragana: "しみずぶつりゅうさーびす"
	},
	{
		original: "有限会社たかひろ",
		hiragana: "ゆうげんがいしゃたかひろ"
	},
	{
		original: "副智総業",
		hiragana: "ふくさとるそうぎょう"
	},
	{
		original: "有限会社西日本通商",
		hiragana: "ゆうげんがいしゃにしにほんつうしょう"
	},
	{
		original: "Ｆｕｔａｊｉｍａ　Ｌｏｇｉ",
		hiragana: "Ｆｕｔａｊｉｍａ　Ｌｏｇｉ"
	},
	{
		original: "藤岡倉庫運輸工業",
		hiragana: "ふじおかそうこうんゆこうぎょう"
	},
	{
		original: "ファスター",
		hiragana: "ふぁすたー"
	},
	{
		original: "協栄運輸",
		hiragana: "きょうえいうんゆ"
	},
	{
		original: "有限会社東海林産業",
		hiragana: "ゆうげんがいしゃしょうじさんぎょう"
	},
	{
		original: "黒肥地運輸",
		hiragana: "くろこえちうんゆ"
	},
	{
		original: "本橋鉄工運輸",
		hiragana: "もとはしてっこううんゆ"
	},
	{
		original: "平和産業運輸",
		hiragana: "へいわさんぎょううんゆ"
	},
	{
		original: "有限会社小野運輸",
		hiragana: "ゆうげんがいしゃおのうんゆ"
	},
	{
		original: "有限会社旭産業",
		hiragana: "ゆうげんがいしゃあさひさんぎょう"
	},
	{
		original: "光岡運輸",
		hiragana: "みつおかうんゆ"
	},
	{
		original: "朝日梱包",
		hiragana: "あさひこんぽう"
	},
	{
		original: "日の出ライン有限会社",
		hiragana: "ひのでらいんゆうげんがいしゃ"
	},
	{
		original: "東洋陸運",
		hiragana: "とうようりくうん"
	},
	{
		original: "神建運輸",
		hiragana: "かみけんうんゆ"
	},
	{
		original: "宇賀急配",
		hiragana: "うがきゅうはい"
	},
	{
		original: "一城不動",
		hiragana: "いちじょうふどう"
	},
	{
		original: "有限会社大申",
		hiragana: "ゆうげんがいしゃだいさる"
	},
	{
		original: "ティー・ロジックス",
		hiragana: "てぃー・ろじっくす"
	},
	{
		original: "トランスコム",
		hiragana: "とらんすこむ"
	},
	{
		original: "有限会社伊豆商運",
		hiragana: "ゆうげんがいしゃいずしょううん"
	},
	{
		original: "有限会社遠藤流通",
		hiragana: "ゆうげんがいしゃえんどうりゅうつう"
	},
	{
		original: "有限会社ＤＡＩ",
		hiragana: "ゆうげんがいしゃＤＡＩ"
	},
	{
		original: "有限会社丸重運輸",
		hiragana: "ゆうげんがいしゃまるじゅううんゆ"
	},
	{
		original: "Ｂｏｔｈ",
		hiragana: "Ｂｏｔｈ"
	},
	{
		original: "有限会社エイトライン",
		hiragana: "ゆうげんがいしゃえいとらいん"
	},
	{
		original: "平田運輸",
		hiragana: "ひらたうんゆ"
	},
	{
		original: "有限会社鶴見建材工業",
		hiragana: "ゆうげんがいしゃつるみけんざいこうぎょう"
	},
	{
		original: "平山配送有限会社",
		hiragana: "ひらやまはいそうゆうげんがいしゃ"
	},
	{
		original: "Ｏ－Ｌｉｎｋｓ",
		hiragana: "Ｏ－Ｌｉｎｋｓ"
	},
	{
		original: "永野建設有限会社",
		hiragana: "ながのけんせつゆうげんがいしゃ"
	},
	{
		original: "拓伸",
		hiragana: "たくしん"
	},
	{
		original: "谷口トラック",
		hiragana: "たにぐちとらっく"
	},
	{
		original: "ハーリードットエル",
		hiragana: "はーりーどっとえる"
	},
	{
		original: "日新運輸",
		hiragana: "にっしんうんゆ"
	},
	{
		original: "大阪急送",
		hiragana: "おおさかきゅうそう"
	},
	{
		original: "有限会社丸打運輸",
		hiragana: "ゆうげんがいしゃまるうちうんゆ"
	},
	{
		original: "シーエスワン",
		hiragana: "しーえすわん"
	},
	{
		original: "有限会社道野重機",
		hiragana: "ゆうげんがいしゃみちのじゅうき"
	},
	{
		original: "コンポーズ発送",
		hiragana: "こんぽーずはっそう"
	},
	{
		original: "大田運輸",
		hiragana: "おおたうんゆ"
	},
	{
		original: "小川運輸",
		hiragana: "おがわうんゆ"
	},
	{
		original: "有限会社浜村運輸",
		hiragana: "ゆうげんがいしゃはまむらうんゆ"
	},
	{
		original: "コーガ運送有限会社",
		hiragana: "こーがうんそうゆうげんがいしゃ"
	},
	{
		original: "東海運送有限会社",
		hiragana: "とうかいうんそうゆうげんがいしゃ"
	},
	{
		original: "津久芳運送",
		hiragana: "つくほううんそう"
	},
	{
		original: "磯野運送",
		hiragana: "いそのうんそう"
	},
	{
		original: "有限会社橋本総業",
		hiragana: "ゆうげんがいしゃはしもとそうぎょう"
	},
	{
		original: "静友運輸",
		hiragana: "せいともうんゆ"
	},
	{
		original: "有限会社仙南通運",
		hiragana: "ゆうげんがいしゃせんなんつううん"
	},
	{
		original: "矢吹運送有限会社",
		hiragana: "やぶきうんそうゆうげんがいしゃ"
	},
	{
		original: "ひかり物流",
		hiragana: "ひかりぶつりゅう"
	},
	{
		original: "丸真商事",
		hiragana: "まるまことしょうじ"
	},
	{
		original: "会田商事",
		hiragana: "あいだしょうじ"
	},
	{
		original: "平山運輸",
		hiragana: "ひらやまうんゆ"
	},
	{
		original: "北海飼料販売",
		hiragana: "ほっかいしりょうはんばい"
	},
	{
		original: "則竹商事有限会社",
		hiragana: "のりたけしょうじゆうげんがいしゃ"
	},
	{
		original: "又一",
		hiragana: "またいち"
	},
	{
		original: "山本運送",
		hiragana: "やまもとうんそう"
	},
	{
		original: "中芝運送",
		hiragana: "なかしばうんそう"
	},
	{
		original: "庄原通運",
		hiragana: "しょうばらつううん"
	},
	{
		original: "西幸貨物運送",
		hiragana: "にしさちかもつうんそう"
	},
	{
		original: "有限会社池商",
		hiragana: "ゆうげんがいしゃいけしょう"
	},
	{
		original: "総合サービス",
		hiragana: "そうごうさーびす"
	},
	{
		original: "富士運輸",
		hiragana: "ふじうんゆ"
	},
	{
		original: "加賀運送有限会社",
		hiragana: "かがうんそうゆうげんがいしゃ"
	},
	{
		original: "有限会社田上産業",
		hiragana: "ゆうげんがいしゃたがみさんぎょう"
	},
	{
		original: "三川運輸",
		hiragana: "みかわうんゆ"
	},
	{
		original: "菊地運輸倉庫",
		hiragana: "きくちうんゆそうこ"
	},
	{
		original: "協同企画",
		hiragana: "きょうどうきかく"
	},
	{
		original: "富士",
		hiragana: "ふじ"
	},
	{
		original: "渡部工業",
		hiragana: "わたなべこうぎょう"
	},
	{
		original: "草津物流",
		hiragana: "くさつぶつりゅう"
	},
	{
		original: "佐藤興業",
		hiragana: "さとうこうぎょう"
	},
	{
		original: "豊田通商",
		hiragana: "とよだつうしょう"
	},
	{
		original: "トラスト",
		hiragana: "とらすと"
	},
	{
		original: "明石運輸",
		hiragana: "あかしうんゆ"
	},
	{
		original: "ムサシ配送",
		hiragana: "むさしはいそう"
	},
	{
		original: "アルプス運送有限会社",
		hiragana: "あるぷすうんそうゆうげんがいしゃ"
	},
	{
		original: "有限会社青木商事",
		hiragana: "ゆうげんがいしゃあおきしょうじ"
	},
	{
		original: "有限会社ヒーロー",
		hiragana: "ゆうげんがいしゃひーろー"
	},
	{
		original: "阿山",
		hiragana: "あやま"
	},
	{
		original: "三之丸通商",
		hiragana: "さんゆきまるつうしょう"
	},
	{
		original: "有限会社荒井商運",
		hiragana: "ゆうげんがいしゃあらいしょううん"
	},
	{
		original: "江藤運送有限会社",
		hiragana: "えとううんそうゆうげんがいしゃ"
	},
	{
		original: "有限会社駒谷運送",
		hiragana: "ゆうげんがいしゃこまたにうんそう"
	},
	{
		original: "東南企業",
		hiragana: "とうなんきぎょう"
	},
	{
		original: "馬場回漕店",
		hiragana: "ばばかいそうみせ"
	},
	{
		original: "ヨシダ",
		hiragana: "よしだ"
	},
	{
		original: "有限会社杉原商運",
		hiragana: "ゆうげんがいしゃすぎはらしょううん"
	},
	{
		original: "有限会社坂本運送店",
		hiragana: "ゆうげんがいしゃさかもとうんそうてん"
	},
	{
		original: "セントラル急送",
		hiragana: "せんとらるきゅうそう"
	},
	{
		original: "ダイヤ運送",
		hiragana: "だいやうんそう"
	},
	{
		original: "名島運輸有限会社",
		hiragana: "めいしまうんゆゆうげんがいしゃ"
	},
	{
		original: "アッシュライン",
		hiragana: "あっしゅらいん"
	},
	{
		original: "チルドエクスプレス",
		hiragana: "ちるどえくすぷれす"
	},
	{
		original: "有限会社菅原運送",
		hiragana: "ゆうげんがいしゃすがわらうんそう"
	},
	{
		original: "上市通運",
		hiragana: "かみいちつううん"
	},
	{
		original: "豊公組運輸",
		hiragana: "ゆたかこうくみうんゆ"
	},
	{
		original: "エイテック",
		hiragana: "えいてっく"
	},
	{
		original: "有限会社河田産業",
		hiragana: "ゆうげんがいしゃかわたさんぎょう"
	},
	{
		original: "松運サービス",
		hiragana: "まつうんさーびす"
	},
	{
		original: "田島運輸",
		hiragana: "たじまうんゆ"
	},
	{
		original: "トーリク・エス・エス",
		hiragana: "とーりく・えす・えす"
	},
	{
		original: "大栄運輸",
		hiragana: "だいえいうんゆ"
	},
	{
		original: "日倉",
		hiragana: "にちくら"
	},
	{
		original: "イケゾエ",
		hiragana: "いけぞえ"
	},
	{
		original: "カミ急送",
		hiragana: "かみきゅうそう"
	},
	{
		original: "有限会社オワリ流通",
		hiragana: "ゆうげんがいしゃおわりりゅうつう"
	},
	{
		original: "有限会社横浜市場運送",
		hiragana: "ゆうげんがいしゃよこはましばうんそう"
	},
	{
		original: "ドリーム・サポート",
		hiragana: "どりーむ・さぽーと"
	},
	{
		original: "Ｐｏｒｔｒｉｃｈ",
		hiragana: "Ｐｏｒｔｒｉｃｈ"
	},
	{
		original: "橋爪興業",
		hiragana: "はしづめこうぎょう"
	},
	{
		original: "ジーシーエル",
		hiragana: "じーしーえる"
	},
	{
		original: "エムエー",
		hiragana: "えむえー"
	},
	{
		original: "コミヤマ",
		hiragana: "こみやま"
	},
	{
		original: "ハヤカワ運送",
		hiragana: "はやかわうんそう"
	},
	{
		original: "有限会社ラヴーク",
		hiragana: "ゆうげんがいしゃらゔーく"
	},
	{
		original: "有限会社常磐商運",
		hiragana: "ゆうげんがいしゃじょうばんしょううん"
	},
	{
		original: "吉屋組",
		hiragana: "よしやくみ"
	},
	{
		original: "有限会社高橋運輸",
		hiragana: "ゆうげんがいしゃたかはしうんゆ"
	},
	{
		original: "有限会社協新商事",
		hiragana: "ゆうげんがいしゃきょうしんしょうじ"
	},
	{
		original: "潤商事",
		hiragana: "じゅんしょうじ"
	},
	{
		original: "南勢運輸有限会社",
		hiragana: "なんせいうんゆゆうげんがいしゃ"
	},
	{
		original: "有限会社アルディック",
		hiragana: "ゆうげんがいしゃあるでぃっく"
	},
	{
		original: "つばさ急便有限会社",
		hiragana: "つばさきゅうびんゆうげんがいしゃ"
	},
	{
		original: "有限会社コクエー",
		hiragana: "ゆうげんがいしゃこくえー"
	},
	{
		original: "ミサキ物流",
		hiragana: "みさきぶつりゅう"
	},
	{
		original: "トラストフレイト有限会社",
		hiragana: "とらすとふれいとゆうげんがいしゃ"
	},
	{
		original: "有限会社丸山商事",
		hiragana: "ゆうげんがいしゃまるやましょうじ"
	},
	{
		original: "門田石油",
		hiragana: "かどたせきゆ"
	},
	{
		original: "有限会社アルファ・プロジェクト・ジャパン",
		hiragana: "ゆうげんがいしゃあるふぁ・ぷろじぇくと・じゃぱん"
	},
	{
		original: "ビッグワンロジテム",
		hiragana: "びっぐわんろじてむ"
	},
	{
		original: "千石建設運輸有限会社",
		hiragana: "せんごくけんせつうんゆゆうげんがいしゃ"
	},
	{
		original: "有限会社花田運輸",
		hiragana: "ゆうげんがいしゃはなだうんゆ"
	},
	{
		original: "日伸運輸",
		hiragana: "にちしんうんゆ"
	},
	{
		original: "内山運送",
		hiragana: "うちやまうんそう"
	},
	{
		original: "岡山航空サービス",
		hiragana: "おかやまこうくうさーびす"
	},
	{
		original: "まことや",
		hiragana: "まことや"
	},
	{
		original: "有限会社あすなろ運輸",
		hiragana: "ゆうげんがいしゃあすなろうんゆ"
	},
	{
		original: "光運送",
		hiragana: "ひかりうんそう"
	},
	{
		original: "ジャパン・カーゴ",
		hiragana: "じゃぱん・かーご"
	},
	{
		original: "有限会社スター物流",
		hiragana: "ゆうげんがいしゃすたーぶつりゅう"
	},
	{
		original: "北海道物流開発",
		hiragana: "ほっかいどうぶつりゅうかいはつ"
	},
	{
		original: "丸新運輸",
		hiragana: "まるしんうんゆ"
	},
	{
		original: "有限会社正和運輸",
		hiragana: "ゆうげんがいしゃまさかずうんゆ"
	},
	{
		original: "有限会社アルファプロ",
		hiragana: "ゆうげんがいしゃあるふぁぷろ"
	},
	{
		original: "日豊折込センター",
		hiragana: "にっぽうおりこみせんたー"
	},
	{
		original: "有限会社橋爪運送店",
		hiragana: "ゆうげんがいしゃはしづめうんそうてん"
	},
	{
		original: "新興物流",
		hiragana: "しんこうぶつりゅう"
	},
	{
		original: "有限会社東長崎運送",
		hiragana: "ゆうげんがいしゃひがしながさきうんそう"
	},
	{
		original: "有限会社山清商事運輸",
		hiragana: "ゆうげんがいしゃさんせいしょうじうんゆ"
	},
	{
		original: "川島組",
		hiragana: "かわしまくみ"
	},
	{
		original: "有限会社コナヤセブンツー",
		hiragana: "ゆうげんがいしゃこなやせぶんつー"
	},
	{
		original: "有限会社ユースフル",
		hiragana: "ゆうげんがいしゃゆーすふる"
	},
	{
		original: "有限会社杉山商事",
		hiragana: "ゆうげんがいしゃすぎやましょうじ"
	},
	{
		original: "イトウ商事運輸",
		hiragana: "いとうしょうじうんゆ"
	},
	{
		original: "岐阜新聞輸送",
		hiragana: "ぎふしんぶんゆそう"
	},
	{
		original: "吉川商事",
		hiragana: "よしかわしょうじ"
	},
	{
		original: "Ｄ－ｌｉｎｅ",
		hiragana: "Ｄ－ｌｉｎｅ"
	},
	{
		original: "オーエス興業",
		hiragana: "おーえすこうぎょう"
	},
	{
		original: "有限会社原田急送",
		hiragana: "ゆうげんがいしゃはらだきゅうそう"
	},
	{
		original: "風早運輸有限会社",
		hiragana: "かざはやうんゆゆうげんがいしゃ"
	},
	{
		original: "田中資材",
		hiragana: "たなかしざい"
	},
	{
		original: "植田開発",
		hiragana: "うえだかいはつ"
	},
	{
		original: "イワマトランスポート",
		hiragana: "いわまとらんすぽーと"
	},
	{
		original: "有限会社はなまる",
		hiragana: "ゆうげんがいしゃはなまる"
	},
	{
		original: "酒本物流有限会社",
		hiragana: "さかもとぶつりゅうゆうげんがいしゃ"
	},
	{
		original: "丸安運送有限会社",
		hiragana: "まるあんうんそうゆうげんがいしゃ"
	},
	{
		original: "有限会社オリエントエキスプレス",
		hiragana: "ゆうげんがいしゃおりえんとえきすぷれす"
	},
	{
		original: "新日本サービス",
		hiragana: "しんにほんさーびす"
	},
	{
		original: "冨沢運輸有限会社",
		hiragana: "とみざわうんゆゆうげんがいしゃ"
	},
	{
		original: "アイ・エル・ジェイ",
		hiragana: "あい・える・じぇい"
	},
	{
		original: "日新物流",
		hiragana: "にっしんぶつりゅう"
	},
	{
		original: "有限会社エーワン",
		hiragana: "ゆうげんがいしゃえーわん"
	},
	{
		original: "パワーロジテム有限会社",
		hiragana: "ぱわーろじてむゆうげんがいしゃ"
	},
	{
		original: "有限会社杉浦運送",
		hiragana: "ゆうげんがいしゃすぎうらうんそう"
	},
	{
		original: "中央興運",
		hiragana: "ちゅうおうきょううん"
	},
	{
		original: "盛岡陸送",
		hiragana: "もりおかりくそう"
	},
	{
		original: "有限会社大洋運輸",
		hiragana: "ゆうげんがいしゃたいよううんゆ"
	},
	{
		original: "三洋商事",
		hiragana: "さんようしょうじ"
	},
	{
		original: "風間運輸",
		hiragana: "かざまうんゆ"
	},
	{
		original: "有限会社アトム急便",
		hiragana: "ゆうげんがいしゃあとむきゅうびん"
	},
	{
		original: "ハートフル",
		hiragana: "はーとふる"
	},
	{
		original: "中込運輸",
		hiragana: "なかごめうんゆ"
	},
	{
		original: "有限会社大成物流",
		hiragana: "ゆうげんがいしゃたいせいぶつりゅう"
	},
	{
		original: "有限会社ひさや運送",
		hiragana: "ゆうげんがいしゃひさやうんそう"
	},
	{
		original: "マスヤマ",
		hiragana: "ますやま"
	},
	{
		original: "有限会社丸鶴運輸",
		hiragana: "ゆうげんがいしゃまるつるうんゆ"
	},
	{
		original: "有限会社舟田運輸",
		hiragana: "ゆうげんがいしゃふなだうんゆ"
	},
	{
		original: "広島西部エルピージーセンター",
		hiragana: "ひろしませいぶえるぴーじーせんたー"
	},
	{
		original: "大洲川岡運送有限会社",
		hiragana: "おおずかわおかうんそうゆうげんがいしゃ"
	},
	{
		original: "太陽物流",
		hiragana: "たいようぶつりゅう"
	},
	{
		original: "フジコー",
		hiragana: "ふじこー"
	},
	{
		original: "宮田",
		hiragana: "みやた"
	},
	{
		original: "有限会社内田運送",
		hiragana: "ゆうげんがいしゃうちだうんそう"
	},
	{
		original: "神島運輸有限会社",
		hiragana: "かみしまうんゆゆうげんがいしゃ"
	},
	{
		original: "アイエムティ運輸",
		hiragana: "あいえむてぃうんゆ"
	},
	{
		original: "巴栄運輸",
		hiragana: "ともええいうんゆ"
	},
	{
		original: "那珂川運輸有限会社",
		hiragana: "なかがわうんゆゆうげんがいしゃ"
	},
	{
		original: "有限会社人組",
		hiragana: "ゆうげんがいしゃにんぐみ"
	},
	{
		original: "有限会社アニメート",
		hiragana: "ゆうげんがいしゃあにめーと"
	},
	{
		original: "苫小牧重車輌運輸",
		hiragana: "とまこまいじゅうしゃりょううんゆ"
	},
	{
		original: "ライフポーター",
		hiragana: "らいふぽーたー"
	},
	{
		original: "高山運輸",
		hiragana: "こうざんうんゆ"
	},
	{
		original: "有限会社斉藤運輸",
		hiragana: "ゆうげんがいしゃさいとううんゆ"
	},
	{
		original: "有限会社伊藤建設",
		hiragana: "ゆうげんがいしゃいとうけんせつ"
	},
	{
		original: "有限会社一番星興業",
		hiragana: "ゆうげんがいしゃいちばんほしこうぎょう"
	},
	{
		original: "日進運輸",
		hiragana: "にっしんうんゆ"
	},
	{
		original: "有限会社倉敷運送センター",
		hiragana: "ゆうげんがいしゃくらしきうんそうせんたー"
	},
	{
		original: "村野己運輸",
		hiragana: "むらのおのれうんゆ"
	},
	{
		original: "有限会社丸安運送店",
		hiragana: "ゆうげんがいしゃまるあんうんそうてん"
	},
	{
		original: "辻本商運",
		hiragana: "つじもとしょううん"
	},
	{
		original: "大光急便",
		hiragana: "おおみつきゅうびん"
	},
	{
		original: "アサヒ物流サービス",
		hiragana: "あさひぶつりゅうさーびす"
	},
	{
		original: "丸高運輸",
		hiragana: "まるたかうんゆ"
	},
	{
		original: "有限会社ＥＡＧＬＥ・ＣＡＲＧＯ・ＳＥＲＶＩＣＥ",
		hiragana: "ゆうげんがいしゃＥＡＧＬＥ・ＣＡＲＧＯ・ＳＥＲＶＩＣＥ"
	},
	{
		original: "阪神デーリー運輸",
		hiragana: "はんしんでーりーうんゆ"
	},
	{
		original: "マスカット物流",
		hiragana: "ますかっとぶつりゅう"
	},
	{
		original: "万匠",
		hiragana: "まんたくみ"
	},
	{
		original: "佐倉運輸",
		hiragana: "さくらうんゆ"
	},
	{
		original: "北日商会",
		hiragana: "きたにっしょうかい"
	},
	{
		original: "前川商店",
		hiragana: "まえかわしょうてん"
	},
	{
		original: "バイオシステム有限会社",
		hiragana: "ばいおしすてむゆうげんがいしゃ"
	},
	{
		original: "有限会社エンドレスジャパン",
		hiragana: "ゆうげんがいしゃえんどれすじゃぱん"
	},
	{
		original: "有限会社川上運送",
		hiragana: "ゆうげんがいしゃかわかみうんそう"
	},
	{
		original: "貴順",
		hiragana: "たかしじゅん"
	},
	{
		original: "有限会社彩貴",
		hiragana: "ゆうげんがいしゃさいたかし"
	},
	{
		original: "サノックス",
		hiragana: "さのっくす"
	},
	{
		original: "フレッシュテック有限会社",
		hiragana: "ふれっしゅてっくゆうげんがいしゃ"
	},
	{
		original: "新興運送",
		hiragana: "しんこううんそう"
	},
	{
		original: "大福運送",
		hiragana: "だいふくうんそう"
	},
	{
		original: "秋葉貨物",
		hiragana: "あきばかもつ"
	},
	{
		original: "朝香運送有限会社",
		hiragana: "あさかうんそうゆうげんがいしゃ"
	},
	{
		original: "月寒引越プラザ",
		hiragana: "つきさむひっこしぷらざ"
	},
	{
		original: "日本シルバー運輸有限会社",
		hiragana: "にっぽんしるばーうんゆゆうげんがいしゃ"
	},
	{
		original: "丸善運送",
		hiragana: "まるぜんうんそう"
	},
	{
		original: "有限会社村岡運輸",
		hiragana: "ゆうげんがいしゃむらおかうんゆ"
	},
	{
		original: "有限会社マツダブツリュウ",
		hiragana: "ゆうげんがいしゃまつだぶつりゅう"
	},
	{
		original: "松尾運送",
		hiragana: "まつおうんそう"
	},
	{
		original: "日光陸運",
		hiragana: "にっこうりくうん"
	},
	{
		original: "不二運輸",
		hiragana: "ふじうんゆ"
	},
	{
		original: "大共",
		hiragana: "だいとも"
	},
	{
		original: "上野機設",
		hiragana: "うえのきせつ"
	},
	{
		original: "弘前運送",
		hiragana: "ひろさきうんそう"
	},
	{
		original: "有限会社キャリー",
		hiragana: "ゆうげんがいしゃきゃりー"
	},
	{
		original: "川西運輸",
		hiragana: "かわにしうんゆ"
	},
	{
		original: "丸喜",
		hiragana: "まるき"
	},
	{
		original: "扶忠商事有限会社",
		hiragana: "ふただししょうじゆうげんがいしゃ"
	},
	{
		original: "有限会社丸七運送店",
		hiragana: "ゆうげんがいしゃまるしちうんそうてん"
	},
	{
		original: "有限会社甲斐運送",
		hiragana: "ゆうげんがいしゃかいうんそう"
	},
	{
		original: "大伸運輸",
		hiragana: "たいしんうんゆ"
	},
	{
		original: "丸喜梱包有限会社",
		hiragana: "まるきこんぽうゆうげんがいしゃ"
	},
	{
		original: "有限会社藤松運送店",
		hiragana: "ゆうげんがいしゃふじまつうんそうてん"
	},
	{
		original: "長井運送",
		hiragana: "ながいうんそう"
	},
	{
		original: "北都高速運輸倉庫",
		hiragana: "ほくとこうそくうんゆそうこ"
	},
	{
		original: "有限会社訪広流通",
		hiragana: "ゆうげんがいしゃほうこうりゅうつう"
	},
	{
		original: "土生木運輸",
		hiragana: "はぶきうんゆ"
	},
	{
		original: "Ｔ２＆ｃｏ．",
		hiragana: "Ｔ２＆ｃｏ．"
	},
	{
		original: "絆信総合",
		hiragana: "きずなしんそうごう"
	},
	{
		original: "有限会社高山物流",
		hiragana: "ゆうげんがいしゃこうざんぶつりゅう"
	},
	{
		original: "伸栄運輸",
		hiragana: "しんえいうんゆ"
	},
	{
		original: "有限会社ヤマキ運輸",
		hiragana: "ゆうげんがいしゃやまきうんゆ"
	},
	{
		original: "日農運輸",
		hiragana: "にちのううんゆ"
	},
	{
		original: "大京食品流通",
		hiragana: "だいきょうしょくひんりゅうつう"
	},
	{
		original: "勝山運送有限会社",
		hiragana: "かつやまうんそうゆうげんがいしゃ"
	},
	{
		original: "トライネッツ",
		hiragana: "とらいねっつ"
	},
	{
		original: "仙台運輸倉庫",
		hiragana: "せんだいうんゆそうこ"
	},
	{
		original: "新和物流",
		hiragana: "しんわぶつりゅう"
	},
	{
		original: "水月運輸",
		hiragana: "すいげつうんゆ"
	},
	{
		original: "関東トラック",
		hiragana: "かんとうとらっく"
	},
	{
		original: "有限会社北陽ライン",
		hiragana: "ゆうげんがいしゃほくようらいん"
	},
	{
		original: "有限会社中根ライン",
		hiragana: "ゆうげんがいしゃなかねらいん"
	},
	{
		original: "三紀運輸",
		hiragana: "みきうんゆ"
	},
	{
		original: "エイコーロジスティクス",
		hiragana: "えいこーろじすてぃくす"
	},
	{
		original: "坂本運輸",
		hiragana: "さかもとうんゆ"
	},
	{
		original: "合資会社進暢運輸",
		hiragana: "ごうしがいしゃすすむのぶうんゆ"
	},
	{
		original: "北栄重機工業有限会社",
		hiragana: "ほくえいじゅうきこうぎょうゆうげんがいしゃ"
	},
	{
		original: "有限会社大東運輸",
		hiragana: "ゆうげんがいしゃだいとううんゆ"
	},
	{
		original: "有限会社中野機械",
		hiragana: "ゆうげんがいしゃなかのきかい"
	},
	{
		original: "信州星野運輸有限会社",
		hiragana: "しんしゅうほしのうんゆゆうげんがいしゃ"
	},
	{
		original: "有限会社新成興業リース",
		hiragana: "ゆうげんがいしゃしんせいこうぎょうりーす"
	},
	{
		original: "有限会社大窪運送店",
		hiragana: "ゆうげんがいしゃおおくぼうんそうてん"
	},
	{
		original: "カミサワ実業",
		hiragana: "かみさわじつぎょう"
	},
	{
		original: "三谷運輸",
		hiragana: "みたにうんゆ"
	},
	{
		original: "那須運送有限会社",
		hiragana: "なすうんそうゆうげんがいしゃ"
	},
	{
		original: "有限会社大東運輸",
		hiragana: "ゆうげんがいしゃだいとううんゆ"
	},
	{
		original: "有限会社Ｉ・Ｋ・Ｕ",
		hiragana: "ゆうげんがいしゃＩ・Ｋ・Ｕ"
	},
	{
		original: "ミノブ運輸",
		hiragana: "みのぶうんゆ"
	},
	{
		original: "有限会社吉村商事",
		hiragana: "ゆうげんがいしゃよしむらしょうじ"
	},
	{
		original: "ツチヤ商運",
		hiragana: "つちやしょううん"
	},
	{
		original: "有限会社カネニ",
		hiragana: "ゆうげんがいしゃかねに"
	},
	{
		original: "有限会社飛鳥馬輸送",
		hiragana: "ゆうげんがいしゃあすかうまゆそう"
	},
	{
		original: "かどや運送",
		hiragana: "かどやうんそう"
	},
	{
		original: "有限会社アドバンス",
		hiragana: "ゆうげんがいしゃあどばんす"
	},
	{
		original: "西野青果",
		hiragana: "にしのせいか"
	},
	{
		original: "祖父江運輸",
		hiragana: "そふえうんゆ"
	},
	{
		original: "成田運輸",
		hiragana: "なりたうんゆ"
	},
	{
		original: "正洋運送",
		hiragana: "まさひろうんそう"
	},
	{
		original: "福岡コスモ便",
		hiragana: "ふくおかこすもびん"
	},
	{
		original: "夜久野運輸倉庫",
		hiragana: "やくのうんゆそうこ"
	},
	{
		original: "札幌ＡＬＬ輸送",
		hiragana: "さっぽろＡＬＬゆそう"
	},
	{
		original: "ＥＳＴ",
		hiragana: "ＥＳＴ"
	},
	{
		original: "成光梱包運輸有限会社",
		hiragana: "しげみつこんぽううんゆゆうげんがいしゃ"
	},
	{
		original: "馬場運送店",
		hiragana: "ばばうんそうてん"
	},
	{
		original: "よしとも",
		hiragana: "よしとも"
	},
	{
		original: "ＴＤＮ",
		hiragana: "ＴＤＮ"
	},
	{
		original: "ウカイ梱包運輸",
		hiragana: "うかいこんぽううんゆ"
	},
	{
		original: "ＫＤＳ",
		hiragana: "ＫＤＳ"
	},
	{
		original: "有限会社コツジ",
		hiragana: "ゆうげんがいしゃこつじ"
	},
	{
		original: "有限会社所原運送店",
		hiragana: "ゆうげんがいしゃところはらうんそうてん"
	},
	{
		original: "八起重工",
		hiragana: "やおきじゅうこう"
	},
	{
		original: "マルゼン運輸倉庫",
		hiragana: "まるぜんうんゆそうこ"
	},
	{
		original: "ユタカ商事有限会社",
		hiragana: "ゆたかしょうじゆうげんがいしゃ"
	},
	{
		original: "アスターリズムキャリー",
		hiragana: "あすたーりずむきゃりー"
	},
	{
		original: "有限会社福留運送",
		hiragana: "ゆうげんがいしゃふくとめうんそう"
	},
	{
		original: "氷上物流",
		hiragana: "ひかみぶつりゅう"
	},
	{
		original: "信正運輸",
		hiragana: "のぶまさうんゆ"
	},
	{
		original: "佐能運輸有限会社",
		hiragana: "さのううんゆゆうげんがいしゃ"
	},
	{
		original: "マルヌマ商事",
		hiragana: "まるぬましょうじ"
	},
	{
		original: "木村商事",
		hiragana: "きむらしょうじ"
	},
	{
		original: "ＪＡＰＡＮ．ＣＡＲＧＯサービス",
		hiragana: "ＪＡＰＡＮ．ＣＡＲＧＯさーびす"
	},
	{
		original: "川﨑運輸",
		hiragana: "かわかわうんゆ"
	},
	{
		original: "有限会社九州陸運",
		hiragana: "ゆうげんがいしゃきゅうしゅうりくうん"
	},
	{
		original: "高陽物流",
		hiragana: "かやぶつりゅう"
	},
	{
		original: "有限会社鳥波運送",
		hiragana: "ゆうげんがいしゃとりなみうんそう"
	},
	{
		original: "小曽根運送有限会社",
		hiragana: "しょうそねうんそうゆうげんがいしゃ"
	},
	{
		original: "有限会社マルタカ運輸",
		hiragana: "ゆうげんがいしゃまるたかうんゆ"
	},
	{
		original: "清宮運送有限会社",
		hiragana: "すがのみやうんそうゆうげんがいしゃ"
	},
	{
		original: "ハートラインエクスプレス",
		hiragana: "はーとらいんえくすぷれす"
	},
	{
		original: "有限会社本澤運送店",
		hiragana: "ゆうげんがいしゃほんざわうんそうてん"
	},
	{
		original: "猪井運輸",
		hiragana: "いのいうんゆ"
	},
	{
		original: "宮崎運輸",
		hiragana: "みやざきうんゆ"
	},
	{
		original: "中杉運輸",
		hiragana: "なかすぎうんゆ"
	},
	{
		original: "内野運輸",
		hiragana: "ないやうんゆ"
	},
	{
		original: "北栄運輸",
		hiragana: "ほくえいうんゆ"
	},
	{
		original: "有限会社光運送",
		hiragana: "ゆうげんがいしゃひかりうんそう"
	},
	{
		original: "有限会社松原産業",
		hiragana: "ゆうげんがいしゃまつばらさんぎょう"
	},
	{
		original: "さくらエクスプレス",
		hiragana: "さくらえくすぷれす"
	},
	{
		original: "イヌイ",
		hiragana: "いぬい"
	},
	{
		original: "キャリテックス",
		hiragana: "きゃりてっくす"
	},
	{
		original: "有限会社松本運送",
		hiragana: "ゆうげんがいしゃまつもとうんそう"
	},
	{
		original: "御祓運送有限会社",
		hiragana: "みそぎうんそうゆうげんがいしゃ"
	},
	{
		original: "有限会社金山運輸",
		hiragana: "ゆうげんがいしゃかなやまうんゆ"
	},
	{
		original: "一宮運送有限会社",
		hiragana: "いちのみやうんそうゆうげんがいしゃ"
	},
	{
		original: "アルファロジスティクス",
		hiragana: "あるふぁろじすてぃくす"
	},
	{
		original: "有限会社鳥畑商事",
		hiragana: "ゆうげんがいしゃとりはたしょうじ"
	},
	{
		original: "有限会社タガミ運送",
		hiragana: "ゆうげんがいしゃたがみうんそう"
	},
	{
		original: "宇野港倉庫",
		hiragana: "うのみなとそうこ"
	},
	{
		original: "本庄",
		hiragana: "ほんじょう"
	},
	{
		original: "詫陸クレーン有限会社",
		hiragana: "たりくくれーんゆうげんがいしゃ"
	},
	{
		original: "西湘物流",
		hiragana: "せいしょうぶつりゅう"
	},
	{
		original: "札幌相互運輸",
		hiragana: "さっぽろそうごうんゆ"
	},
	{
		original: "有限会社飯盛商店",
		hiragana: "ゆうげんがいしゃいいもりしょうてん"
	},
	{
		original: "有限会社堀越商運",
		hiragana: "ゆうげんがいしゃほりこししょううん"
	},
	{
		original: "アジア陸送",
		hiragana: "あじありくそう"
	},
	{
		original: "岡野興業",
		hiragana: "おかのこうぎょう"
	},
	{
		original: "東町急送",
		hiragana: "ひがしちょうきゅうそう"
	},
	{
		original: "大橋実業運輸",
		hiragana: "おおはしじつぎょううんゆ"
	},
	{
		original: "エポック",
		hiragana: "えぽっく"
	},
	{
		original: "山和運輸",
		hiragana: "やまわうんゆ"
	},
	{
		original: "有限会社金丸商事",
		hiragana: "ゆうげんがいしゃかねまるしょうじ"
	},
	{
		original: "有限会社生活環境サービス",
		hiragana: "ゆうげんがいしゃせいかつかんきょうさーびす"
	},
	{
		original: "片野運輸",
		hiragana: "かたのうんゆ"
	},
	{
		original: "細川商事",
		hiragana: "ほそかわしょうじ"
	},
	{
		original: "有限会社福島運輸",
		hiragana: "ゆうげんがいしゃふくしまうんゆ"
	},
	{
		original: "有限会社勝興産",
		hiragana: "ゆうげんがいしゃしょうこうさん"
	},
	{
		original: "藤鋼運",
		hiragana: "ふじこううん"
	},
	{
		original: "エイ・エフロジテム",
		hiragana: "えい・えふろじてむ"
	},
	{
		original: "有限会社下田運輸",
		hiragana: "ゆうげんがいしゃしもだうんゆ"
	},
	{
		original: "相模運輸",
		hiragana: "さがみうんゆ"
	},
	{
		original: "有限会社伊藤運送",
		hiragana: "ゆうげんがいしゃいとううんそう"
	},
	{
		original: "有限会社セイコー物流",
		hiragana: "ゆうげんがいしゃせいこーぶつりゅう"
	},
	{
		original: "有限会社松山石材運送",
		hiragana: "ゆうげんがいしゃまつやませきざいうんそう"
	},
	{
		original: "橘運輸有限会社",
		hiragana: "たちばなうんゆゆうげんがいしゃ"
	},
	{
		original: "マッハイナリク",
		hiragana: "まっはいなりく"
	},
	{
		original: "舞妓ロジスティクス",
		hiragana: "まいころじすてぃくす"
	},
	{
		original: "丸大通商",
		hiragana: "まるだいつうしょう"
	},
	{
		original: "真栄エキスプレス",
		hiragana: "しんえいえきすぷれす"
	},
	{
		original: "西延運送",
		hiragana: "にしえんうんそう"
	},
	{
		original: "吉良",
		hiragana: "きら"
	},
	{
		original: "田中通商",
		hiragana: "たなかつうしょう"
	},
	{
		original: "有限会社平成建材工業",
		hiragana: "ゆうげんがいしゃへいせいけんざいこうぎょう"
	},
	{
		original: "大勝運輸",
		hiragana: "たいしょううんゆ"
	},
	{
		original: "有限会社堀幸運輸",
		hiragana: "ゆうげんがいしゃほりこううんゆ"
	},
	{
		original: "岐阜ジットエキスプレス",
		hiragana: "ぎふじっとえきすぷれす"
	},
	{
		original: "吉田建材店",
		hiragana: "よしだけんざいみせ"
	},
	{
		original: "昌南運輸有限会社",
		hiragana: "まさみなみうんゆゆうげんがいしゃ"
	},
	{
		original: "杉村総業",
		hiragana: "すぎむらそうぎょう"
	},
	{
		original: "日機トランスポート",
		hiragana: "にちきとらんすぽーと"
	},
	{
		original: "櫻物流センター",
		hiragana: "さくらぶつりゅうせんたー"
	},
	{
		original: "有限会社弘中運送店",
		hiragana: "ゆうげんがいしゃひろなかうんそうてん"
	},
	{
		original: "西神サービス",
		hiragana: "さいしんさーびす"
	},
	{
		original: "有限会社伊地知運送",
		hiragana: "ゆうげんがいしゃいじちうんそう"
	},
	{
		original: "有限会社金井運送",
		hiragana: "ゆうげんがいしゃかないうんそう"
	},
	{
		original: "大和商会",
		hiragana: "やまとしょうかい"
	},
	{
		original: "マサキ運送",
		hiragana: "まさきうんそう"
	},
	{
		original: "達磨輿通",
		hiragana: "だるまこしとおり"
	},
	{
		original: "岩井総業",
		hiragana: "いわいそうぎょう"
	},
	{
		original: "白麦運輸有限会社",
		hiragana: "はくばくうんゆゆうげんがいしゃ"
	},
	{
		original: "熊谷急送",
		hiragana: "くまがやきゅうそう"
	},
	{
		original: "有限会社三友運輸",
		hiragana: "ゆうげんがいしゃみつともうんゆ"
	},
	{
		original: "有限会社誠美紙商運輸",
		hiragana: "ゆうげんがいしゃまことびししょううんゆ"
	},
	{
		original: "有限会社ハマノホームサービス",
		hiragana: "ゆうげんがいしゃはまのほーむさーびす"
	},
	{
		original: "日東発送センター",
		hiragana: "にっとうはっそうせんたー"
	},
	{
		original: "有限会社南陽急配",
		hiragana: "ゆうげんがいしゃなんようきゅうはい"
	},
	{
		original: "岡本運送",
		hiragana: "おかもとうんそう"
	},
	{
		original: "青木商事",
		hiragana: "あおきしょうじ"
	},
	{
		original: "有限会社三矢運輸機工",
		hiragana: "ゆうげんがいしゃみつやうんゆきこう"
	},
	{
		original: "有限会社谷口物流サービス",
		hiragana: "ゆうげんがいしゃたにぐちぶつりゅうさーびす"
	},
	{
		original: "ゼネラルトランス",
		hiragana: "ぜねらるとらんす"
	},
	{
		original: "有限会社堀田運送",
		hiragana: "ゆうげんがいしゃほったうんそう"
	},
	{
		original: "ＫＹＡシステム",
		hiragana: "ＫＹＡしすてむ"
	},
	{
		original: "有限会社龍田実業",
		hiragana: "ゆうげんがいしゃたつたじつぎょう"
	},
	{
		original: "海野商会",
		hiragana: "うみのしょうかい"
	},
	{
		original: "山正運輸有限会社",
		hiragana: "やましょううんゆゆうげんがいしゃ"
	},
	{
		original: "有限会社リアル総合物流サービス",
		hiragana: "ゆうげんがいしゃりあるそうごうぶつりゅうさーびす"
	},
	{
		original: "共栄運輸",
		hiragana: "きょうえいうんゆ"
	},
	{
		original: "東北エステート",
		hiragana: "とうほくえすてーと"
	},
	{
		original: "ＣＣＤ",
		hiragana: "ＣＣＤ"
	},
	{
		original: "まるとし運送",
		hiragana: "まるとしうんそう"
	},
	{
		original: "製缶陸運",
		hiragana: "せいかんりくうん"
	},
	{
		original: "タンデム・ジャパン",
		hiragana: "たんでむ・じゃぱん"
	},
	{
		original: "有限会社アサカ運輸サービス",
		hiragana: "ゆうげんがいしゃあさかうんゆさーびす"
	},
	{
		original: "西川組",
		hiragana: "にしかわくみ"
	},
	{
		original: "福岡中央陸運有限会社",
		hiragana: "ふくおかちゅうおうりくうんゆうげんがいしゃ"
	},
	{
		original: "有限会社田島梱包",
		hiragana: "ゆうげんがいしゃたじまこんぽう"
	},
	{
		original: "舟津運送",
		hiragana: "ふなつうんそう"
	},
	{
		original: "木村創建",
		hiragana: "きむらそうけん"
	},
	{
		original: "有限会社東栄運輸",
		hiragana: "ゆうげんがいしゃとうえいうんゆ"
	},
	{
		original: "有限会社顕睦商生",
		hiragana: "ゆうげんがいしゃけんむつみしょうなま"
	},
	{
		original: "山下産業",
		hiragana: "やましたさんぎょう"
	},
	{
		original: "有限会社愛宕陸運",
		hiragana: "ゆうげんがいしゃあたごりくうん"
	},
	{
		original: "有限会社吉野運送",
		hiragana: "ゆうげんがいしゃよしのうんそう"
	},
	{
		original: "大輝コーポレーション",
		hiragana: "だいきこーぽれーしょん"
	},
	{
		original: "有限会社西蔵王運輸",
		hiragana: "ゆうげんがいしゃにしざおううんゆ"
	},
	{
		original: "砂田組",
		hiragana: "すなだくみ"
	},
	{
		original: "Ｇｌｏｂａｌ　ｌｉｎｋ",
		hiragana: "Ｇｌｏｂａｌ　ｌｉｎｋ"
	},
	{
		original: "アイエスティー急送チビトラ",
		hiragana: "あいえすてぃーきゅうそうちびとら"
	},
	{
		original: "有限会社鈴木運送",
		hiragana: "ゆうげんがいしゃすずきうんそう"
	},
	{
		original: "有限会社丸高運送",
		hiragana: "ゆうげんがいしゃまるたかうんそう"
	},
	{
		original: "山口運送有限会社",
		hiragana: "やまぐちうんそうゆうげんがいしゃ"
	},
	{
		original: "仁木工務店",
		hiragana: "にきこうむてん"
	},
	{
		original: "有限会社柳川福輸",
		hiragana: "ゆうげんがいしゃやながわふくゆ"
	},
	{
		original: "勝榮通商有限会社",
		hiragana: "かつえいつうしょうゆうげんがいしゃ"
	},
	{
		original: "三陽運輸",
		hiragana: "さんよううんゆ"
	},
	{
		original: "エナジーエクスプレス",
		hiragana: "えなじーえくすぷれす"
	},
	{
		original: "有限会社足立商運",
		hiragana: "ゆうげんがいしゃあだちしょううん"
	},
	{
		original: "トランスポート",
		hiragana: "とらんすぽーと"
	},
	{
		original: "山下物流",
		hiragana: "やましたぶつりゅう"
	},
	{
		original: "見目運送有限会社",
		hiragana: "けんもくうんそうゆうげんがいしゃ"
	},
	{
		original: "かなめ運送",
		hiragana: "かなめうんそう"
	},
	{
		original: "池田商事",
		hiragana: "いけだしょうじ"
	},
	{
		original: "有限会社皆川急便運送",
		hiragana: "ゆうげんがいしゃみながわきゅうびんうんそう"
	},
	{
		original: "有限会社キーラインエクセル",
		hiragana: "ゆうげんがいしゃきーらいんえくせる"
	},
	{
		original: "有限会社美浜運送",
		hiragana: "ゆうげんがいしゃみはまうんそう"
	},
	{
		original: "中山運送",
		hiragana: "なかやまうんそう"
	},
	{
		original: "三港",
		hiragana: "さんみなと"
	},
	{
		original: "椋本運送有限会社",
		hiragana: "むくほんうんそうゆうげんがいしゃ"
	},
	{
		original: "大晃運輸倉庫",
		hiragana: "だいこううんゆそうこ"
	},
	{
		original: "有限会社長菊",
		hiragana: "ゆうげんがいしゃちょうきく"
	},
	{
		original: "ＫＯＵＧＡ　ＬＩＮＥ",
		hiragana: "ＫＯＵＧＡ　ＬＩＮＥ"
	},
	{
		original: "梯陵",
		hiragana: "ていりょう"
	},
	{
		original: "毛塚陸運",
		hiragana: "けづかりくうん"
	},
	{
		original: "桐生運輸有限会社",
		hiragana: "きりゅううんゆゆうげんがいしゃ"
	},
	{
		original: "嶋本運送",
		hiragana: "しまもとうんそう"
	},
	{
		original: "日扇運輸",
		hiragana: "にっせんうんゆ"
	},
	{
		original: "有限会社金剛運輸",
		hiragana: "ゆうげんがいしゃこんごううんゆ"
	},
	{
		original: "大阪近交運輸倉庫",
		hiragana: "おおさかきんこううんゆそうこ"
	},
	{
		original: "丸富運輸有限会社",
		hiragana: "まるとみうんゆゆうげんがいしゃ"
	},
	{
		original: "桜物流",
		hiragana: "さくらぶつりゅう"
	},
	{
		original: "丸倉倉庫運輸",
		hiragana: "まるくらそうこうんゆ"
	},
	{
		original: "小関建設",
		hiragana: "おぜきけんせつ"
	},
	{
		original: "トーウン機工",
		hiragana: "とーうんきこう"
	},
	{
		original: "共進エキスプレス",
		hiragana: "きょうしんえきすぷれす"
	},
	{
		original: "東横運送興業",
		hiragana: "とうよこうんそうこうぎょう"
	},
	{
		original: "昌栄物流サービス",
		hiragana: "しょうえいぶつりゅうさーびす"
	},
	{
		original: "有馬運送",
		hiragana: "ありまうんそう"
	},
	{
		original: "大光物流運輸",
		hiragana: "おおみつぶつりゅううんゆ"
	},
	{
		original: "コンドー産業",
		hiragana: "こんどーさんぎょう"
	},
	{
		original: "勢昌興運",
		hiragana: "せいまさおきうん"
	},
	{
		original: "沢多運送",
		hiragana: "さわたうんそう"
	},
	{
		original: "北九州北大有限会社",
		hiragana: "きたきゅうしゅうほくだいゆうげんがいしゃ"
	},
	{
		original: "有限会社牛窓運送",
		hiragana: "ゆうげんがいしゃうしまどうんそう"
	},
	{
		original: "有限会社竹之内運輸",
		hiragana: "ゆうげんがいしゃたけのうちうんゆ"
	},
	{
		original: "神通工業",
		hiragana: "しんつうこうぎょう"
	},
	{
		original: "有限会社鈴木運輸",
		hiragana: "ゆうげんがいしゃすずきうんゆ"
	},
	{
		original: "北星運送",
		hiragana: "ほくせいうんそう"
	},
	{
		original: "有限会社山門クレーン",
		hiragana: "ゆうげんがいしゃやまとくれーん"
	},
	{
		original: "ＹＣ",
		hiragana: "ＹＣ"
	},
	{
		original: "イリエ物流システム",
		hiragana: "いりえぶつりゅうしすてむ"
	},
	{
		original: "有限会社長谷川興業",
		hiragana: "ゆうげんがいしゃはせがわこうぎょう"
	},
	{
		original: "中讃陸運",
		hiragana: "なかさんりくうん"
	},
	{
		original: "大金",
		hiragana: "たいきん"
	},
	{
		original: "ディライト",
		hiragana: "でぃらいと"
	},
	{
		original: "有限会社吉岡運送",
		hiragana: "ゆうげんがいしゃよしおかうんそう"
	},
	{
		original: "藤翔運輸",
		hiragana: "ふじしょううんゆ"
	},
	{
		original: "扇運輸",
		hiragana: "おうぎうんゆ"
	},
	{
		original: "有限会社アゼスト",
		hiragana: "ゆうげんがいしゃあぜすと"
	},
	{
		original: "東邦熱処理",
		hiragana: "とうほうねつしょり"
	},
	{
		original: "有限会社籠原産業",
		hiragana: "ゆうげんがいしゃかごげんさんぎょう"
	},
	{
		original: "有限会社東北三立運輸",
		hiragana: "ゆうげんがいしゃとうほくさんりつうんゆ"
	},
	{
		original: "有限会社大都通運",
		hiragana: "ゆうげんがいしゃだいとつううん"
	},
	{
		original: "有限会社宮崎運送店",
		hiragana: "ゆうげんがいしゃみやざきうんそうてん"
	},
	{
		original: "吉田運送",
		hiragana: "よしだうんそう"
	},
	{
		original: "東洋運輸",
		hiragana: "とうよううんゆ"
	},
	{
		original: "中島トランス",
		hiragana: "なかじまとらんす"
	},
	{
		original: "ひまわり特急便",
		hiragana: "ひまわりとっきゅうびん"
	},
	{
		original: "嶋田運送",
		hiragana: "しまだうんそう"
	},
	{
		original: "有限会社中野運輸",
		hiragana: "ゆうげんがいしゃなかのうんゆ"
	},
	{
		original: "横田運輸",
		hiragana: "よこたうんゆ"
	},
	{
		original: "新栄運送有限会社",
		hiragana: "しんえいうんそうゆうげんがいしゃ"
	},
	{
		original: "昭和陸運有限会社",
		hiragana: "しょうわりくうんゆうげんがいしゃ"
	},
	{
		original: "高波運輸有限会社",
		hiragana: "たかなみうんゆゆうげんがいしゃ"
	},
	{
		original: "有限会社タイセイ",
		hiragana: "ゆうげんがいしゃたいせい"
	},
	{
		original: "谷川運送",
		hiragana: "たにがわうんそう"
	},
	{
		original: "有限会社塚川",
		hiragana: "ゆうげんがいしゃつかかわ"
	},
	{
		original: "酒田港リサイクル産業センター",
		hiragana: "さかたみなとりさいくるさんぎょうせんたー"
	},
	{
		original: "京洛運輸",
		hiragana: "きょうらくうんゆ"
	},
	{
		original: "ヤマミ運輸有限会社",
		hiragana: "やまみうんゆゆうげんがいしゃ"
	},
	{
		original: "弘成運輸",
		hiragana: "ひろしげうんゆ"
	},
	{
		original: "サガミ急送",
		hiragana: "さがみきゅうそう"
	},
	{
		original: "有限会社鹿島エキスプレス",
		hiragana: "ゆうげんがいしゃかしまえきすぷれす"
	},
	{
		original: "アイ引越センター",
		hiragana: "あいひっこしせんたー"
	},
	{
		original: "昭和運輸倉庫",
		hiragana: "しょうわうんゆそうこ"
	},
	{
		original: "笠原物流",
		hiragana: "かさはらぶつりゅう"
	},
	{
		original: "古田運輸興業",
		hiragana: "ふるたうんゆこうぎょう"
	},
	{
		original: "有限会社澤商",
		hiragana: "ゆうげんがいしゃさわしょう"
	},
	{
		original: "関東馬匹運輸有限会社",
		hiragana: "かんとうばひきうんゆゆうげんがいしゃ"
	},
	{
		original: "進和運送有限会社",
		hiragana: "しんわうんそうゆうげんがいしゃ"
	},
	{
		original: "森山商事",
		hiragana: "もりやましょうじ"
	},
	{
		original: "有限会社蔦島運輸",
		hiragana: "ゆうげんがいしゃつたしまうんゆ"
	},
	{
		original: "そわか",
		hiragana: "そわか"
	},
	{
		original: "三興商運",
		hiragana: "さんこうしょううん"
	},
	{
		original: "十勝貨物自動車",
		hiragana: "とかちかもつじどうしゃ"
	},
	{
		original: "浜名運輸",
		hiragana: "はまなうんゆ"
	},
	{
		original: "青山",
		hiragana: "あおやま"
	},
	{
		original: "有限会社弓場元運送",
		hiragana: "ゆうげんがいしゃきゅうじょうもとうんそう"
	},
	{
		original: "川翔",
		hiragana: "かわしょう"
	},
	{
		original: "小川運送",
		hiragana: "おがわうんそう"
	},
	{
		original: "丸勇運輸有限会社",
		hiragana: "まるいさみうんゆゆうげんがいしゃ"
	},
	{
		original: "ウェイスト・プランナー",
		hiragana: "うぇいすと・ぷらんなー"
	},
	{
		original: "有限会社明和運送",
		hiragana: "ゆうげんがいしゃめいわうんそう"
	},
	{
		original: "有限会社新興商事",
		hiragana: "ゆうげんがいしゃしんこうしょうじ"
	},
	{
		original: "トランスパック",
		hiragana: "とらんすぱっく"
	},
	{
		original: "三統運輸",
		hiragana: "さんとううんゆ"
	},
	{
		original: "平成興業有限会社",
		hiragana: "へいせいこうぎょうゆうげんがいしゃ"
	},
	{
		original: "アルプス運送有限会社",
		hiragana: "あるぷすうんそうゆうげんがいしゃ"
	},
	{
		original: "エムシーセンター",
		hiragana: "えむしーせんたー"
	},
	{
		original: "吉田運送",
		hiragana: "よしだうんそう"
	},
	{
		original: "エルアローカーゴ有限会社",
		hiragana: "えるあろーかーごゆうげんがいしゃ"
	},
	{
		original: "大垣急送",
		hiragana: "おおがききゅうそう"
	},
	{
		original: "ケーピー運送",
		hiragana: "けーぴーうんそう"
	},
	{
		original: "明和ライナー",
		hiragana: "めいわらいなー"
	},
	{
		original: "有限会社武甲運輸",
		hiragana: "ゆうげんがいしゃぶこううんゆ"
	},
	{
		original: "有限会社西住運輸",
		hiragana: "ゆうげんがいしゃさいじゅううんゆ"
	},
	{
		original: "多丸",
		hiragana: "たまる"
	},
	{
		original: "総合運輸",
		hiragana: "そうごううんゆ"
	},
	{
		original: "有限会社サクセスライン",
		hiragana: "ゆうげんがいしゃさくせすらいん"
	},
	{
		original: "山梨三和物流",
		hiragana: "やまなしさんわぶつりゅう"
	},
	{
		original: "オーシャンエクスプレス",
		hiragana: "おーしゃんえくすぷれす"
	},
	{
		original: "小島商事",
		hiragana: "こじましょうじ"
	},
	{
		original: "コーテックスサービス",
		hiragana: "こーてっくすさーびす"
	},
	{
		original: "有限会社斉藤運送",
		hiragana: "ゆうげんがいしゃさいとううんそう"
	},
	{
		original: "マルタカ",
		hiragana: "まるたか"
	},
	{
		original: "濱翔",
		hiragana: "はましょう"
	},
	{
		original: "有限会社安芸運送",
		hiragana: "ゆうげんがいしゃあきうんそう"
	},
	{
		original: "川和トランスポート",
		hiragana: "かわわとらんすぽーと"
	},
	{
		original: "有限会社トータルカーゴサービス",
		hiragana: "ゆうげんがいしゃとーたるかーごさーびす"
	},
	{
		original: "有限会社エス・イー・サービス",
		hiragana: "ゆうげんがいしゃえす・いー・さーびす"
	},
	{
		original: "有限会社ガレージビーグル",
		hiragana: "ゆうげんがいしゃがれーじびーぐる"
	},
	{
		original: "熊本地区共同輸送",
		hiragana: "くまもとちくきょうどうゆそう"
	},
	{
		original: "両毛通運",
		hiragana: "りょうもうつううん"
	},
	{
		original: "有限会社阿部商運",
		hiragana: "ゆうげんがいしゃあべしょううん"
	},
	{
		original: "有限会社原田運送",
		hiragana: "ゆうげんがいしゃはらだうんそう"
	},
	{
		original: "有限会社アクティブライン",
		hiragana: "ゆうげんがいしゃあくてぃぶらいん"
	},
	{
		original: "福友運送有限会社",
		hiragana: "ふくともうんそうゆうげんがいしゃ"
	},
	{
		original: "有限会社都貨物運送",
		hiragana: "ゆうげんがいしゃみやこかもつうんそう"
	},
	{
		original: "アライヴァル",
		hiragana: "あらいゔぁる"
	},
	{
		original: "ケン・プロダクト",
		hiragana: "けん・ぷろだくと"
	},
	{
		original: "利恵",
		hiragana: "りえ"
	},
	{
		original: "有限会社西村商事",
		hiragana: "ゆうげんがいしゃにしむらしょうじ"
	},
	{
		original: "三鳩",
		hiragana: "さんはと"
	},
	{
		original: "有限会社熊谷産業",
		hiragana: "ゆうげんがいしゃくまがやさんぎょう"
	},
	{
		original: "有限会社合同物流サービス",
		hiragana: "ゆうげんがいしゃごうどうぶつりゅうさーびす"
	},
	{
		original: "アソーニチエイ",
		hiragana: "あそーにちえい"
	},
	{
		original: "村井運送有限会社",
		hiragana: "むらいうんそうゆうげんがいしゃ"
	},
	{
		original: "有限会社イチコー",
		hiragana: "ゆうげんがいしゃいちこー"
	},
	{
		original: "有限会社ウェーブ",
		hiragana: "ゆうげんがいしゃうぇーぶ"
	},
	{
		original: "有限会社北都松下急便",
		hiragana: "ゆうげんがいしゃほくとまつしたきゅうびん"
	},
	{
		original: "フジコン",
		hiragana: "ふじこん"
	},
	{
		original: "丸岐倉庫運輸",
		hiragana: "まるしそうこうんゆ"
	},
	{
		original: "八海運送",
		hiragana: "はっかいうんそう"
	},
	{
		original: "有限会社つくば輸送",
		hiragana: "ゆうげんがいしゃつくばゆそう"
	},
	{
		original: "山南運送",
		hiragana: "さんなんうんそう"
	},
	{
		original: "旭重機総業",
		hiragana: "あさひじゅうきそうぎょう"
	},
	{
		original: "栄宝商事",
		hiragana: "さかえほうしょうこと"
	},
	{
		original: "小柳運送",
		hiragana: "おやなぎうんそう"
	},
	{
		original: "倉本運送",
		hiragana: "くらもとうんそう"
	},
	{
		original: "ドルフィン・エクスプレス",
		hiragana: "どるふぃん・えくすぷれす"
	},
	{
		original: "長谷川運輸",
		hiragana: "はせがわうんゆ"
	},
	{
		original: "瀬戸内商事運輸",
		hiragana: "せとうちしょうじうんゆ"
	},
	{
		original: "有限会社熊谷商事",
		hiragana: "ゆうげんがいしゃくまがやしょうじ"
	},
	{
		original: "三日月運送",
		hiragana: "みかづきうんそう"
	},
	{
		original: "中越トラック",
		hiragana: "なかごしとらっく"
	},
	{
		original: "有限会社斐川運送",
		hiragana: "ゆうげんがいしゃひかわうんそう"
	},
	{
		original: "清水勉商店",
		hiragana: "しみずつとむしょうてん"
	},
	{
		original: "松本運送有限会社",
		hiragana: "まつもとうんそうゆうげんがいしゃ"
	},
	{
		original: "有限会社伸弘運送",
		hiragana: "ゆうげんがいしゃのぶひろうんそう"
	},
	{
		original: "森田商運",
		hiragana: "もりたしょううん"
	},
	{
		original: "ケイ・プランニング",
		hiragana: "けい・ぷらんにんぐ"
	},
	{
		original: "落合運送有限会社",
		hiragana: "おちあいうんそうゆうげんがいしゃ"
	},
	{
		original: "有限会社金山商運",
		hiragana: "ゆうげんがいしゃかなやましょううん"
	},
	{
		original: "エスティビー",
		hiragana: "えすてぃびー"
	},
	{
		original: "カツラ運輸",
		hiragana: "かつらうんゆ"
	},
	{
		original: "ピアノ物流四国",
		hiragana: "ぴあのぶつりゅうしこく"
	},
	{
		original: "サンクス物流",
		hiragana: "さんくすぶつりゅう"
	},
	{
		original: "南里運送",
		hiragana: "なんりうんそう"
	},
	{
		original: "エーティーサポート",
		hiragana: "えーてぃーさぽーと"
	},
	{
		original: "有限会社モリワキ商事",
		hiragana: "ゆうげんがいしゃもりわきしょうじ"
	},
	{
		original: "滝田運輸",
		hiragana: "たきたうんゆ"
	},
	{
		original: "幸栄産業運輸",
		hiragana: "ゆきえさんぎょううんゆ"
	},
	{
		original: "アサヒ急便",
		hiragana: "あさひきゅうびん"
	},
	{
		original: "有限会社村松運輸サービス",
		hiragana: "ゆうげんがいしゃむらまつうんゆさーびす"
	},
	{
		original: "タカラ流通有限会社",
		hiragana: "たからりゅうつうゆうげんがいしゃ"
	},
	{
		original: "有限会社トランスポート丸義",
		hiragana: "ゆうげんがいしゃとらんすぽーとまるぎ"
	},
	{
		original: "有限会社江部乙運輸",
		hiragana: "ゆうげんがいしゃえべおつうんゆ"
	},
	{
		original: "宝島",
		hiragana: "たからしま"
	},
	{
		original: "三鈴運送有限会社",
		hiragana: "みすずうんそうゆうげんがいしゃ"
	},
	{
		original: "四国輸送",
		hiragana: "しこくゆそう"
	},
	{
		original: "ナチュール",
		hiragana: "なちゅーる"
	},
	{
		original: "有限会社星本急配",
		hiragana: "ゆうげんがいしゃほしほんきゅうはい"
	},
	{
		original: "清水運送有限会社",
		hiragana: "しみずうんそうゆうげんがいしゃ"
	},
	{
		original: "グッドラックキャリー",
		hiragana: "ぐっどらっくきゃりー"
	},
	{
		original: "信濃建材",
		hiragana: "しなのけんざい"
	},
	{
		original: "有限会社京田運送",
		hiragana: "ゆうげんがいしゃきょうだうんそう"
	},
	{
		original: "有限会社鈴木輸送",
		hiragana: "ゆうげんがいしゃすずきゆそう"
	},
	{
		original: "ティー・エス・ケー",
		hiragana: "てぃー・えす・けー"
	},
	{
		original: "ランナー便",
		hiragana: "らんなーびん"
	},
	{
		original: "有限会社ドリームロード",
		hiragana: "ゆうげんがいしゃどりーむろーど"
	},
	{
		original: "有限会社ミナミガタ商事",
		hiragana: "ゆうげんがいしゃみなみがたしょうじ"
	},
	{
		original: "滋賀トランポ",
		hiragana: "しがとらんぽ"
	},
	{
		original: "今商運輸",
		hiragana: "いましょううんゆ"
	},
	{
		original: "有限会社若杉運送",
		hiragana: "ゆうげんがいしゃわかすぎうんそう"
	},
	{
		original: "日新配送",
		hiragana: "にっしんはいそう"
	},
	{
		original: "赤津産業",
		hiragana: "あかつさんぎょう"
	},
	{
		original: "有限会社トラック北遠",
		hiragana: "ゆうげんがいしゃとらっくきたえん"
	},
	{
		original: "有限会社大盛物流",
		hiragana: "ゆうげんがいしゃおおもりぶつりゅう"
	},
	{
		original: "有限会社あゆみ急送",
		hiragana: "ゆうげんがいしゃあゆみきゅうそう"
	},
	{
		original: "石井運送有限会社",
		hiragana: "いしいうんそうゆうげんがいしゃ"
	},
	{
		original: "丸大運送店",
		hiragana: "まるだいうんそうてん"
	},
	{
		original: "大和産業",
		hiragana: "やまとさんぎょう"
	},
	{
		original: "後藤運送",
		hiragana: "ごとううんそう"
	},
	{
		original: "有限会社川幸",
		hiragana: "ゆうげんがいしゃかわさち"
	},
	{
		original: "有限会社友和",
		hiragana: "ゆうげんがいしゃともかず"
	},
	{
		original: "鍋田運送",
		hiragana: "なべたうんそう"
	},
	{
		original: "西濃集配高須有限会社",
		hiragana: "せいのうしゅうはいたかすゆうげんがいしゃ"
	},
	{
		original: "陸翔運輸",
		hiragana: "りくしょううんゆ"
	},
	{
		original: "一杉運輸",
		hiragana: "いちすぎうんゆ"
	},
	{
		original: "日本貨物輸送",
		hiragana: "にっぽんかもつゆそう"
	},
	{
		original: "土屋運輸",
		hiragana: "つちやうんゆ"
	},
	{
		original: "安曇野商事",
		hiragana: "あずみのしょうじ"
	},
	{
		original: "ダイキューエキスプレス延岡",
		hiragana: "だいきゅーえきすぷれすのべおか"
	},
	{
		original: "西中運送",
		hiragana: "にしなかうんそう"
	},
	{
		original: "有限会社サトックス",
		hiragana: "ゆうげんがいしゃさとっくす"
	},
	{
		original: "有限会社功栄興産",
		hiragana: "ゆうげんがいしゃこうさかえこうさん"
	},
	{
		original: "山徳運送",
		hiragana: "やまとくうんそう"
	},
	{
		original: "山岡通商",
		hiragana: "やまおかつうしょう"
	},
	{
		original: "ユシロ運送",
		hiragana: "ゆしろうんそう"
	},
	{
		original: "有限会社大扇運輸",
		hiragana: "ゆうげんがいしゃだいおうぎうんゆ"
	},
	{
		original: "和光運送",
		hiragana: "わこううんそう"
	},
	{
		original: "マリネックス",
		hiragana: "まりねっくす"
	},
	{
		original: "フォース",
		hiragana: "ふぉーす"
	},
	{
		original: "亀万運送",
		hiragana: "かめまんうんそう"
	},
	{
		original: "若林運送",
		hiragana: "わかばやしうんそう"
	},
	{
		original: "ＭＲＹ",
		hiragana: "ＭＲＹ"
	},
	{
		original: "有限会社斎藤運輸",
		hiragana: "ゆうげんがいしゃさいとううんゆ"
	},
	{
		original: "正院運送",
		hiragana: "せいいんうんそう"
	},
	{
		original: "有限会社大塚運輸",
		hiragana: "ゆうげんがいしゃおおつかうんゆ"
	},
	{
		original: "高根沢運送有限会社",
		hiragana: "たかねざわうんそうゆうげんがいしゃ"
	},
	{
		original: "ケーワイ・テクニカル",
		hiragana: "けーわい・てくにかる"
	},
	{
		original: "有限会社豊中産業",
		hiragana: "ゆうげんがいしゃとよなかさんぎょう"
	},
	{
		original: "ロジネット",
		hiragana: "ろじねっと"
	},
	{
		original: "ヒョウコウ",
		hiragana: "ひょうこう"
	},
	{
		original: "有限会社大川工業運輸",
		hiragana: "ゆうげんがいしゃおおかわこうぎょううんゆ"
	},
	{
		original: "有限会社ノハラデリテム",
		hiragana: "ゆうげんがいしゃのはらでりてむ"
	},
	{
		original: "イワハシエキスプレス千葉",
		hiragana: "いわはしえきすぷれすちば"
	},
	{
		original: "朝日梱包",
		hiragana: "あさひこんぽう"
	},
	{
		original: "丸喜運輸",
		hiragana: "まるきうんゆ"
	},
	{
		original: "京阪運送",
		hiragana: "けいはんうんそう"
	},
	{
		original: "有限会社コムス",
		hiragana: "ゆうげんがいしゃこむす"
	},
	{
		original: "有限会社小路配送",
		hiragana: "ゆうげんがいしゃこうじはいそう"
	},
	{
		original: "有限会社デリッシュ",
		hiragana: "ゆうげんがいしゃでりっしゅ"
	},
	{
		original: "さくら梱包",
		hiragana: "さくらこんぽう"
	},
	{
		original: "松商ロジコム有限会社",
		hiragana: "まつしょうろじこむゆうげんがいしゃ"
	},
	{
		original: "マルショウ",
		hiragana: "まるしょう"
	},
	{
		original: "金田運輸有限会社",
		hiragana: "かねだうんゆゆうげんがいしゃ"
	},
	{
		original: "有限会社真協運輸",
		hiragana: "ゆうげんがいしゃまこときょううんゆ"
	},
	{
		original: "スターライン",
		hiragana: "すたーらいん"
	},
	{
		original: "福井北部運輸",
		hiragana: "ふくいほくぶうんゆ"
	},
	{
		original: "トキオカーゴ",
		hiragana: "ときおかーご"
	},
	{
		original: "神和",
		hiragana: "かみわ"
	},
	{
		original: "阪本運輸",
		hiragana: "さかもとうんゆ"
	},
	{
		original: "アイライン",
		hiragana: "あいらいん"
	},
	{
		original: "有限会社森光サービス",
		hiragana: "ゆうげんがいしゃもりみつさーびす"
	},
	{
		original: "榎本運送",
		hiragana: "えのもとうんそう"
	},
	{
		original: "有限会社綾部運送",
		hiragana: "ゆうげんがいしゃあやべうんそう"
	},
	{
		original: "有限会社田中商事",
		hiragana: "ゆうげんがいしゃたなかしょうじ"
	},
	{
		original: "大洋サービス",
		hiragana: "たいようさーびす"
	},
	{
		original: "いわき中央運輸",
		hiragana: "いわきちゅうおううんゆ"
	},
	{
		original: "ミツマル運輸有限会社",
		hiragana: "みつまるうんゆゆうげんがいしゃ"
	},
	{
		original: "グローバル",
		hiragana: "ぐろーばる"
	},
	{
		original: "山二商会",
		hiragana: "やまにしょうかい"
	},
	{
		original: "有限会社イーエムシー運輸",
		hiragana: "ゆうげんがいしゃいーえむしーうんゆ"
	},
	{
		original: "有限会社武田運輸",
		hiragana: "ゆうげんがいしゃたけだうんゆ"
	},
	{
		original: "ドルフィン",
		hiragana: "どるふぃん"
	},
	{
		original: "丸徳",
		hiragana: "まるとく"
	},
	{
		original: "ファーイースト",
		hiragana: "ふぁーいーすと"
	},
	{
		original: "有限会社中岡興業",
		hiragana: "ゆうげんがいしゃなかおかこうぎょう"
	},
	{
		original: "有限会社水谷土木運輸",
		hiragana: "ゆうげんがいしゃみずたにどぼくうんゆ"
	},
	{
		original: "朝倉運輸",
		hiragana: "あさくらうんゆ"
	},
	{
		original: "有限会社八木運輸",
		hiragana: "ゆうげんがいしゃやぎうんゆ"
	},
	{
		original: "有限会社三共貨物",
		hiragana: "ゆうげんがいしゃさんきょうかもつ"
	},
	{
		original: "有限会社エス・ケイ運輸",
		hiragana: "ゆうげんがいしゃえす・けいうんゆ"
	},
	{
		original: "藤商",
		hiragana: "ふじしょう"
	},
	{
		original: "宮崎ウィング輸送有限会社",
		hiragana: "みやざきうぃんぐゆそうゆうげんがいしゃ"
	},
	{
		original: "ケー・アールライン",
		hiragana: "けー・あーるらいん"
	},
	{
		original: "三栄運送",
		hiragana: "さんえいうんそう"
	},
	{
		original: "有限会社しょうざん",
		hiragana: "ゆうげんがいしゃしょうざん"
	},
	{
		original: "有限会社竜西トラック",
		hiragana: "ゆうげんがいしゃりゅうにしとらっく"
	},
	{
		original: "城南輸送",
		hiragana: "じょうなんゆそう"
	},
	{
		original: "有限会社ドリームエキスプレス",
		hiragana: "ゆうげんがいしゃどりーむえきすぷれす"
	},
	{
		original: "クロスライン",
		hiragana: "くろすらいん"
	},
	{
		original: "三光物流サービス",
		hiragana: "さんこうぶつりゅうさーびす"
	},
	{
		original: "松丸陸運有限会社",
		hiragana: "まつまるりくうんゆうげんがいしゃ"
	},
	{
		original: "パレックス",
		hiragana: "ぱれっくす"
	},
	{
		original: "有限会社西川運送",
		hiragana: "ゆうげんがいしゃにしかわうんそう"
	},
	{
		original: "杵島物流サービス",
		hiragana: "きねしまぶつりゅうさーびす"
	},
	{
		original: "有限会社北新",
		hiragana: "ゆうげんがいしゃきたしん"
	},
	{
		original: "清水物流",
		hiragana: "しみずぶつりゅう"
	},
	{
		original: "小澤運送",
		hiragana: "おざわうんそう"
	},
	{
		original: "ＴＭライン",
		hiragana: "ＴＭらいん"
	},
	{
		original: "日成運送",
		hiragana: "にっせいうんそう"
	},
	{
		original: "柴崎運輸有限会社",
		hiragana: "しばさきうんゆゆうげんがいしゃ"
	},
	{
		original: "有限会社昭栄工業",
		hiragana: "ゆうげんがいしゃしょうえいこうぎょう"
	},
	{
		original: "ハンワ",
		hiragana: "はんわ"
	},
	{
		original: "愛昭運輸",
		hiragana: "あいあきらうんゆ"
	},
	{
		original: "愛翔",
		hiragana: "あいしょう"
	},
	{
		original: "有限会社栄運送",
		hiragana: "ゆうげんがいしゃえいうんそう"
	},
	{
		original: "有限会社高橋運送",
		hiragana: "ゆうげんがいしゃたかはしうんそう"
	},
	{
		original: "河内運送有限会社",
		hiragana: "かわうちうんそうゆうげんがいしゃ"
	},
	{
		original: "有限会社櫛引運送",
		hiragana: "ゆうげんがいしゃくしびきうんそう"
	},
	{
		original: "浜岡商店",
		hiragana: "はまおかしょうてん"
	},
	{
		original: "有限会社柴谷運送",
		hiragana: "ゆうげんがいしゃしばたにうんそう"
	},
	{
		original: "有限会社マルヨシ商運",
		hiragana: "ゆうげんがいしゃまるよししょううん"
	},
	{
		original: "有限会社飯塚運送",
		hiragana: "ゆうげんがいしゃいいづかうんそう"
	},
	{
		original: "東日トランスポート",
		hiragana: "とうにちとらんすぽーと"
	},
	{
		original: "みかさ運送",
		hiragana: "みかさうんそう"
	},
	{
		original: "ダイコク",
		hiragana: "だいこく"
	},
	{
		original: "有限会社秀洋通商",
		hiragana: "ゆうげんがいしゃひでひろつうしょう"
	},
	{
		original: "光文堂ロジスティクス",
		hiragana: "こうぶんどうろじすてぃくす"
	},
	{
		original: "有限会社南口運輸倉庫",
		hiragana: "ゆうげんがいしゃみなみぐちうんゆそうこ"
	},
	{
		original: "北田運送",
		hiragana: "きただうんそう"
	},
	{
		original: "キャメルセンター",
		hiragana: "きゃめるせんたー"
	},
	{
		original: "有限会社ケイ・サポート",
		hiragana: "ゆうげんがいしゃけい・さぽーと"
	},
	{
		original: "博新運輸",
		hiragana: "ひろししんうんゆ"
	},
	{
		original: "紀ノ川運送",
		hiragana: "きのかわうんそう"
	},
	{
		original: "有限会社丸加運送",
		hiragana: "ゆうげんがいしゃまるかうんそう"
	},
	{
		original: "有限会社ウエルネス急行",
		hiragana: "ゆうげんがいしゃうえるねすきゅうこう"
	},
	{
		original: "有限会社肥後運送",
		hiragana: "ゆうげんがいしゃひごうんそう"
	},
	{
		original: "有限会社エーライン",
		hiragana: "ゆうげんがいしゃえーらいん"
	},
	{
		original: "有限会社村井工業",
		hiragana: "ゆうげんがいしゃむらいこうぎょう"
	},
	{
		original: "東毛急送",
		hiragana: "とうもうきゅうそう"
	},
	{
		original: "ケイセイ建材",
		hiragana: "けいせいけんざい"
	},
	{
		original: "有限会社秋山運送",
		hiragana: "ゆうげんがいしゃあきやまうんそう"
	},
	{
		original: "東京西部陸送",
		hiragana: "とうきょうせいぶりくそう"
	},
	{
		original: "アクト",
		hiragana: "あくと"
	},
	{
		original: "メイホ物流",
		hiragana: "めいほぶつりゅう"
	},
	{
		original: "大成貨物運送",
		hiragana: "たいせいかもつうんそう"
	},
	{
		original: "小笠原梱包",
		hiragana: "おがさわらこんぽう"
	},
	{
		original: "パンポート",
		hiragana: "ぱんぽーと"
	},
	{
		original: "ネットワークシステム",
		hiragana: "ねっとわーくしすてむ"
	},
	{
		original: "日興運輸",
		hiragana: "にっこううんゆ"
	},
	{
		original: "アスリート",
		hiragana: "あすりーと"
	},
	{
		original: "稲垣倉庫運輸",
		hiragana: "いながきそうこうんゆ"
	},
	{
		original: "有限会社西原運輸興業",
		hiragana: "ゆうげんがいしゃにしはらうんゆこうぎょう"
	},
	{
		original: "有限会社八光",
		hiragana: "ゆうげんがいしゃはっこう"
	},
	{
		original: "有限会社アーリーバード",
		hiragana: "ゆうげんがいしゃあーりーばーど"
	},
	{
		original: "近藤機材",
		hiragana: "こんどうきざい"
	},
	{
		original: "ムラカミ商会",
		hiragana: "むらかみしょうかい"
	},
	{
		original: "エスエス・ロジスティクス",
		hiragana: "えすえす・ろじすてぃくす"
	},
	{
		original: "高木運送有限会社",
		hiragana: "たかぎうんそうゆうげんがいしゃ"
	},
	{
		original: "有限会社オダショウ",
		hiragana: "ゆうげんがいしゃおだしょう"
	},
	{
		original: "有限会社渡辺運送",
		hiragana: "ゆうげんがいしゃわたなべうんそう"
	},
	{
		original: "ネスコ",
		hiragana: "ねすこ"
	},
	{
		original: "菱和運送",
		hiragana: "りょうわうんそう"
	},
	{
		original: "有限会社板垣通運",
		hiragana: "ゆうげんがいしゃいたがきつううん"
	},
	{
		original: "有限会社赤尾運輸",
		hiragana: "ゆうげんがいしゃあかおうんゆ"
	},
	{
		original: "津田産業",
		hiragana: "つださんぎょう"
	},
	{
		original: "丸中運送有限会社",
		hiragana: "まるなかうんそうゆうげんがいしゃ"
	},
	{
		original: "総商",
		hiragana: "そうしょう"
	},
	{
		original: "荒牧運輸",
		hiragana: "あらまきうんゆ"
	},
	{
		original: "泉運送",
		hiragana: "いずみうんそう"
	},
	{
		original: "有限会社丸高運輸",
		hiragana: "ゆうげんがいしゃまるたかうんゆ"
	},
	{
		original: "田川商会",
		hiragana: "たがわしょうかい"
	},
	{
		original: "有限会社香栄運輸",
		hiragana: "ゆうげんがいしゃかおりえいうんゆ"
	},
	{
		original: "鵜坂運輸",
		hiragana: "うさかうんゆ"
	},
	{
		original: "和幸陸送",
		hiragana: "かずゆきりくそう"
	},
	{
		original: "有限会社栄興運輸",
		hiragana: "ゆうげんがいしゃさかえきょううんゆ"
	},
	{
		original: "有限会社千秋商事",
		hiragana: "ゆうげんがいしゃせんしゅうしょうじ"
	},
	{
		original: "ワカタク",
		hiragana: "わかたく"
	},
	{
		original: "浜野運輸",
		hiragana: "はまのうんゆ"
	},
	{
		original: "マルトモ運送",
		hiragana: "まるともうんそう"
	},
	{
		original: "那賀運送有限会社",
		hiragana: "なかうんそうゆうげんがいしゃ"
	},
	{
		original: "井谷運輸産業",
		hiragana: "いたにうんゆさんぎょう"
	},
	{
		original: "道輪運輸",
		hiragana: "みちわうんゆ"
	},
	{
		original: "リバーロジ有限会社",
		hiragana: "りばーろじゆうげんがいしゃ"
	},
	{
		original: "鈴木梱包運輸",
		hiragana: "すずきこんぽううんゆ"
	},
	{
		original: "滋賀ロジステック",
		hiragana: "しがろじすてっく"
	},
	{
		original: "有限会社丸越運送",
		hiragana: "ゆうげんがいしゃまるこしうんそう"
	},
	{
		original: "有限会社桑原運送",
		hiragana: "ゆうげんがいしゃくわはらうんそう"
	},
	{
		original: "雫石運送有限会社",
		hiragana: "しずくいしうんそうゆうげんがいしゃ"
	},
	{
		original: "有限会社八雲自動車",
		hiragana: "ゆうげんがいしゃやくもじどうしゃ"
	},
	{
		original: "暁商事",
		hiragana: "あかつきしょうじ"
	},
	{
		original: "丸章",
		hiragana: "まるしょう"
	},
	{
		original: "サイトウ運輸",
		hiragana: "さいとううんゆ"
	},
	{
		original: "ダイヤル運送",
		hiragana: "だいやるうんそう"
	},
	{
		original: "山崎工業",
		hiragana: "やまざきこうぎょう"
	},
	{
		original: "有限会社辻商店",
		hiragana: "ゆうげんがいしゃつじしょうてん"
	},
	{
		original: "新輝トラック配送",
		hiragana: "しんてるとらっくはいそう"
	},
	{
		original: "松尾梱包運送有限会社",
		hiragana: "まつおこんぽううんそうゆうげんがいしゃ"
	},
	{
		original: "三明工業",
		hiragana: "さんめいこうぎょう"
	},
	{
		original: "川崎運送",
		hiragana: "かわさきうんそう"
	},
	{
		original: "弘和運輸有限会社",
		hiragana: "こうわうんゆゆうげんがいしゃ"
	},
	{
		original: "共栄運輸有限会社",
		hiragana: "きょうえいうんゆゆうげんがいしゃ"
	},
	{
		original: "勝沢運輸",
		hiragana: "かちさわうんゆ"
	},
	{
		original: "電業運輸",
		hiragana: "でんぎょううんゆ"
	},
	{
		original: "有限会社神幸運送",
		hiragana: "ゆうげんがいしゃしんこううんそう"
	},
	{
		original: "有限会社竜成運輸",
		hiragana: "ゆうげんがいしゃりゅうせいうんゆ"
	},
	{
		original: "梶山運送",
		hiragana: "かじやまうんそう"
	},
	{
		original: "有限会社東北海道トラック",
		hiragana: "ゆうげんがいしゃとうほくかいどうとらっく"
	},
	{
		original: "有限会社トップランナー",
		hiragana: "ゆうげんがいしゃとっぷらんなー"
	},
	{
		original: "杉本運送",
		hiragana: "すぎもとうんそう"
	},
	{
		original: "熊本南部物流",
		hiragana: "くまもとなんぶぶつりゅう"
	},
	{
		original: "有限会社遠藤建材",
		hiragana: "ゆうげんがいしゃえんどうけんざい"
	},
	{
		original: "有限会社堀江クレーン",
		hiragana: "ゆうげんがいしゃほりえくれーん"
	},
	{
		original: "トラフィック",
		hiragana: "とらふぃっく"
	},
	{
		original: "岡山丸進運輸",
		hiragana: "おかやままるしんうんゆ"
	},
	{
		original: "和光運輸",
		hiragana: "わこううんゆ"
	},
	{
		original: "渥美屋",
		hiragana: "あつみや"
	},
	{
		original: "木内興業荷役有限会社",
		hiragana: "きうちこうぎょうにやくゆうげんがいしゃ"
	},
	{
		original: "大伸急行有限会社",
		hiragana: "たいしんきゅうこうゆうげんがいしゃ"
	},
	{
		original: "中村運送有限会社",
		hiragana: "なかむらうんそうゆうげんがいしゃ"
	},
	{
		original: "中西運送",
		hiragana: "なかにしうんそう"
	},
	{
		original: "有限会社三光",
		hiragana: "ゆうげんがいしゃさんこう"
	},
	{
		original: "リジョイス・タイホウ",
		hiragana: "りじょいす・たいほう"
	},
	{
		original: "有限会社新創",
		hiragana: "ゆうげんがいしゃしんそう"
	},
	{
		original: "有限会社天塩協同運輸",
		hiragana: "ゆうげんがいしゃてしおきょうどううんゆ"
	},
	{
		original: "福井丸三運輸有限会社",
		hiragana: "ふくいまるさんうんゆゆうげんがいしゃ"
	},
	{
		original: "有限会社丸勝運輸",
		hiragana: "ゆうげんがいしゃまるしょううんゆ"
	},
	{
		original: "嵯峨運送",
		hiragana: "さがうんそう"
	},
	{
		original: "有限会社青孝運輸",
		hiragana: "ゆうげんがいしゃあおこううんゆ"
	},
	{
		original: "山下運輸有限会社",
		hiragana: "やましたうんゆゆうげんがいしゃ"
	},
	{
		original: "有限会社曽木運送店",
		hiragana: "ゆうげんがいしゃそぎうんそうてん"
	},
	{
		original: "有限会社神山商事",
		hiragana: "ゆうげんがいしゃかみやましょうじ"
	},
	{
		original: "有限会社栃木陸運",
		hiragana: "ゆうげんがいしゃとちぎりくうん"
	},
	{
		original: "東來運輸",
		hiragana: "ひがしらいうんゆ"
	},
	{
		original: "大更運送",
		hiragana: "だいこううんそう"
	},
	{
		original: "新生運輸",
		hiragana: "しんせいうんゆ"
	},
	{
		original: "田原資材",
		hiragana: "たはらしざい"
	},
	{
		original: "有限会社東海物流サービス",
		hiragana: "ゆうげんがいしゃとうかいぶつりゅうさーびす"
	},
	{
		original: "九州ライナー",
		hiragana: "きゅうしゅうらいなー"
	},
	{
		original: "天野屋",
		hiragana: "あまのや"
	},
	{
		original: "大幸商運",
		hiragana: "だいこうしょううん"
	},
	{
		original: "有限会社協販輸送センター",
		hiragana: "ゆうげんがいしゃきょうはんゆそうせんたー"
	},
	{
		original: "合資会社安原倉庫",
		hiragana: "ごうしがいしゃやすはらそうこ"
	},
	{
		original: "有限会社坂田運送",
		hiragana: "ゆうげんがいしゃさかたうんそう"
	},
	{
		original: "原文運輸",
		hiragana: "げんぶんうんゆ"
	},
	{
		original: "有限会社仙龍運送",
		hiragana: "ゆうげんがいしゃせんりゅううんそう"
	},
	{
		original: "スカイネット福岡",
		hiragana: "すかいねっとふくおか"
	},
	{
		original: "青菱運輸",
		hiragana: "あおひしうんゆ"
	},
	{
		original: "渡辺運輸機工",
		hiragana: "わたなべうんゆきこう"
	},
	{
		original: "有限会社エビオ",
		hiragana: "ゆうげんがいしゃえびお"
	},
	{
		original: "みゆきデリバリーサービス有限会社",
		hiragana: "みゆきでりばりーさーびすゆうげんがいしゃ"
	},
	{
		original: "有限会社希光総業",
		hiragana: "ゆうげんがいしゃまれひかりそうぎょう"
	},
	{
		original: "有限会社藤島建材",
		hiragana: "ゆうげんがいしゃふじしまけんざい"
	},
	{
		original: "渡辺陸運",
		hiragana: "わたなべりくうん"
	},
	{
		original: "有限会社安孫子倉庫",
		hiragana: "ゆうげんがいしゃあびこそうこ"
	},
	{
		original: "有限会社石田運送店",
		hiragana: "ゆうげんがいしゃいしだうんそうてん"
	},
	{
		original: "新成建設運輸",
		hiragana: "しんせいけんせつうんゆ"
	},
	{
		original: "有限会社川滝運送",
		hiragana: "ゆうげんがいしゃかわたきうんそう"
	},
	{
		original: "有限会社山長商事運輸",
		hiragana: "ゆうげんがいしゃやまちょうしょうじうんゆ"
	},
	{
		original: "太皇運輸",
		hiragana: "たこううんゆ"
	},
	{
		original: "有限会社テトシステム",
		hiragana: "ゆうげんがいしゃてとしすてむ"
	},
	{
		original: "有限会社イマイ",
		hiragana: "ゆうげんがいしゃいまい"
	},
	{
		original: "Ｍ－ＴＥＡＭ",
		hiragana: "Ｍ－ＴＥＡＭ"
	},
	{
		original: "ケイコネクト",
		hiragana: "けいこねくと"
	},
	{
		original: "有限会社たから運送",
		hiragana: "ゆうげんがいしゃたからうんそう"
	},
	{
		original: "有限会社蔵元商運",
		hiragana: "ゆうげんがいしゃくらもとしょううん"
	},
	{
		original: "和泉冷凍運輸",
		hiragana: "いずみれいとううんゆ"
	},
	{
		original: "有限会社秀明",
		hiragana: "ゆうげんがいしゃひであき"
	},
	{
		original: "有限会社大橋重機",
		hiragana: "ゆうげんがいしゃおおはしじゅうき"
	},
	{
		original: "太平産業運輸",
		hiragana: "たいへいさんぎょううんゆ"
	},
	{
		original: "クレスイ食品",
		hiragana: "くれすいしょくひん"
	},
	{
		original: "セブンシーズシッピング",
		hiragana: "せぶんしーずしっぴんぐ"
	},
	{
		original: "中山商運有限会社",
		hiragana: "なかやましょううんゆうげんがいしゃ"
	},
	{
		original: "珠城運輸",
		hiragana: "たまきうんゆ"
	},
	{
		original: "渡辺回漕店",
		hiragana: "わたなべかいそうみせ"
	},
	{
		original: "有限会社越田産業",
		hiragana: "ゆうげんがいしゃこしださんぎょう"
	},
	{
		original: "友松産業",
		hiragana: "ともまつさんぎょう"
	},
	{
		original: "日動工業",
		hiragana: "にちどうこうぎょう"
	},
	{
		original: "三星運送有限会社",
		hiragana: "みつぼしうんそうゆうげんがいしゃ"
	},
	{
		original: "有限会社太宏",
		hiragana: "ゆうげんがいしゃたひろし"
	},
	{
		original: "北州運輸",
		hiragana: "ほくしゅううんゆ"
	},
	{
		original: "宮城運輸",
		hiragana: "みやぎうんゆ"
	},
	{
		original: "日出陸運有限会社",
		hiragana: "ひのでりくうんゆうげんがいしゃ"
	},
	{
		original: "有限会社中央興産",
		hiragana: "ゆうげんがいしゃちゅうおうこうさん"
	},
	{
		original: "有限会社半田運送",
		hiragana: "ゆうげんがいしゃはんだうんそう"
	},
	{
		original: "有限会社中村運輸",
		hiragana: "ゆうげんがいしゃなかむらうんゆ"
	},
	{
		original: "杷木商事",
		hiragana: "はきしょうじ"
	},
	{
		original: "有限会社下商",
		hiragana: "ゆうげんがいしゃしたしょう"
	},
	{
		original: "三恵運輸倉庫",
		hiragana: "さんけいうんゆそうこ"
	},
	{
		original: "高杉運送有限会社",
		hiragana: "たかすぎうんそうゆうげんがいしゃ"
	},
	{
		original: "栃木トランスネット",
		hiragana: "とちぎとらんすねっと"
	},
	{
		original: "ウインカンパニー",
		hiragana: "ういんかんぱにー"
	},
	{
		original: "大西運輸",
		hiragana: "おおにしうんゆ"
	},
	{
		original: "福鉄運輸",
		hiragana: "ふくてつうんゆ"
	},
	{
		original: "有限会社真庭運輸商事",
		hiragana: "ゆうげんがいしゃまにわうんゆしょうじ"
	},
	{
		original: "有限会社大伸運輸",
		hiragana: "ゆうげんがいしゃたいしんうんゆ"
	},
	{
		original: "共同輸送",
		hiragana: "きょうどうゆそう"
	},
	{
		original: "大城運輸有限会社",
		hiragana: "おおしろうんゆゆうげんがいしゃ"
	},
	{
		original: "北淡運送",
		hiragana: "ほくだんうんそう"
	},
	{
		original: "総合配送",
		hiragana: "そうごうはいそう"
	},
	{
		original: "田中運送",
		hiragana: "たなかうんそう"
	},
	{
		original: "Ｔ・Ｋ・Ｓ",
		hiragana: "Ｔ・Ｋ・Ｓ"
	},
	{
		original: "有限会社高木運送",
		hiragana: "ゆうげんがいしゃたかぎうんそう"
	},
	{
		original: "有限会社石𣘺興業",
		hiragana: "ゆうげんがいしゃいしいしこうぎょう"
	},
	{
		original: "津本産業",
		hiragana: "つもとさんぎょう"
	},
	{
		original: "有限会社北栄物産",
		hiragana: "ゆうげんがいしゃほくえいぶっさん"
	},
	{
		original: "東城運輸",
		hiragana: "とうじょううんゆ"
	},
	{
		original: "急行運送",
		hiragana: "きゅうこううんそう"
	},
	{
		original: "有限会社秋山商事",
		hiragana: "ゆうげんがいしゃあきやましょうじ"
	},
	{
		original: "日東運輸倉庫",
		hiragana: "にっとううんゆそうこ"
	},
	{
		original: "有限会社郡家陸運",
		hiragana: "ゆうげんがいしゃぐんけりくうん"
	},
	{
		original: "有限会社南日本運送",
		hiragana: "ゆうげんがいしゃなんにちほんうんそう"
	},
	{
		original: "アコード物流",
		hiragana: "あこーどぶつりゅう"
	},
	{
		original: "有限会社鹿児島ピアノ配送センター",
		hiragana: "ゆうげんがいしゃかこしまぴあのはいそうせんたー"
	},
	{
		original: "有限会社比良北運輸",
		hiragana: "ゆうげんがいしゃひらきたうんゆ"
	},
	{
		original: "有限会社春輝運輸",
		hiragana: "ゆうげんがいしゃはるてるうんゆ"
	},
	{
		original: "山信物流有限会社",
		hiragana: "やましんぶつりゅうゆうげんがいしゃ"
	},
	{
		original: "タカヤ陸運",
		hiragana: "たかやりくうん"
	},
	{
		original: "有限会社三石運輸",
		hiragana: "ゆうげんがいしゃみついしうんゆ"
	},
	{
		original: "有限会社矢上運送",
		hiragana: "ゆうげんがいしゃやがみうんそう"
	},
	{
		original: "日本運輸",
		hiragana: "にっぽんうんゆ"
	},
	{
		original: "広和運輸",
		hiragana: "ひろかずうんゆ"
	},
	{
		original: "会津メイトー有限会社",
		hiragana: "あいづめいとーゆうげんがいしゃ"
	},
	{
		original: "天領",
		hiragana: "てんりょう"
	},
	{
		original: "有限会社鳥山商会",
		hiragana: "ゆうげんがいしゃとりやましょうかい"
	},
	{
		original: "有限会社ダイヤシステム運輸",
		hiragana: "ゆうげんがいしゃだいやしすてむうんゆ"
	},
	{
		original: "サカエ運輸有限会社",
		hiragana: "さかえうんゆゆうげんがいしゃ"
	},
	{
		original: "ツカサ運輸",
		hiragana: "つかさうんゆ"
	},
	{
		original: "郡山運輸",
		hiragana: "こうりやまうんゆ"
	},
	{
		original: "北日本運送",
		hiragana: "きたにほんうんそう"
	},
	{
		original: "有限会社伊藤運送",
		hiragana: "ゆうげんがいしゃいとううんそう"
	},
	{
		original: "高岡運送有限会社",
		hiragana: "たかおかうんそうゆうげんがいしゃ"
	},
	{
		original: "舞鶴産業",
		hiragana: "まいづるさんぎょう"
	},
	{
		original: "堺阪南運送",
		hiragana: "さかいはんなんうんそう"
	},
	{
		original: "有限会社岩﨑運送商事",
		hiragana: "ゆうげんがいしゃいわいわうんそうしょうじ"
	},
	{
		original: "梓運輸",
		hiragana: "あずさうんゆ"
	},
	{
		original: "有限会社今井運送店",
		hiragana: "ゆうげんがいしゃいまいうんそうてん"
	},
	{
		original: "鰍沢貨物自動車有限会社",
		hiragana: "かじかざわかもつじどうしゃゆうげんがいしゃ"
	},
	{
		original: "有限会社森和",
		hiragana: "ゆうげんがいしゃもりわ"
	},
	{
		original: "マーメイド",
		hiragana: "まーめいど"
	},
	{
		original: "有限会社西井商会",
		hiragana: "ゆうげんがいしゃにしいしょうかい"
	},
	{
		original: "ゴールデンイーグル",
		hiragana: "ごーるでんいーぐる"
	},
	{
		original: "桜運輸有限会社",
		hiragana: "さくらうんゆゆうげんがいしゃ"
	},
	{
		original: "ジョイフルサプライ",
		hiragana: "じょいふるさぷらい"
	},
	{
		original: "幸紀",
		hiragana: "ゆきのり"
	},
	{
		original: "関根商店",
		hiragana: "せきねしょうてん"
	},
	{
		original: "浅野物産",
		hiragana: "あさのぶっさん"
	},
	{
		original: "矢ケ部運送",
		hiragana: "やけぶうんそう"
	},
	{
		original: "伊良湖エクスプレス",
		hiragana: "いらこえくすぷれす"
	},
	{
		original: "三州物流",
		hiragana: "さんしゅうぶつりゅう"
	},
	{
		original: "國生",
		hiragana: "こくしょう"
	},
	{
		original: "シイキ",
		hiragana: "しいき"
	},
	{
		original: "丸辰運輸倉庫",
		hiragana: "まるたつうんゆそうこ"
	},
	{
		original: "幸商",
		hiragana: "さちしょう"
	},
	{
		original: "長崎ライン陸送",
		hiragana: "ながさきらいんりくそう"
	},
	{
		original: "アコーテック",
		hiragana: "あこーてっく"
	},
	{
		original: "有限会社エムエスライナー",
		hiragana: "ゆうげんがいしゃえむえすらいなー"
	},
	{
		original: "有限会社カタベ急送",
		hiragana: "ゆうげんがいしゃかたべきゅうそう"
	},
	{
		original: "有限会社寿商運",
		hiragana: "ゆうげんがいしゃひさししょううん"
	},
	{
		original: "有限会社ティーワイエス",
		hiragana: "ゆうげんがいしゃてぃーわいえす"
	},
	{
		original: "長工運輸有限会社",
		hiragana: "ちょうこううんゆゆうげんがいしゃ"
	},
	{
		original: "住岡運送",
		hiragana: "すみおかうんそう"
	},
	{
		original: "坂田運送",
		hiragana: "さかたうんそう"
	},
	{
		original: "有限会社リージョナルサービス",
		hiragana: "ゆうげんがいしゃりーじょなるさーびす"
	},
	{
		original: "プラネット",
		hiragana: "ぷらねっと"
	},
	{
		original: "有限会社カイバラ運輸",
		hiragana: "ゆうげんがいしゃかいばらうんゆ"
	},
	{
		original: "ケイオウ・ロジスティクス",
		hiragana: "けいおう・ろじすてぃくす"
	},
	{
		original: "栄エンジニアリング有限会社",
		hiragana: "さかええんじにありんぐゆうげんがいしゃ"
	},
	{
		original: "ヤギジョー",
		hiragana: "やぎじょー"
	},
	{
		original: "有限会社信徳商事",
		hiragana: "ゆうげんがいしゃしんとくしょうじ"
	},
	{
		original: "有限会社村山運送",
		hiragana: "ゆうげんがいしゃむらやまうんそう"
	},
	{
		original: "八戸陸送",
		hiragana: "はちのへりくそう"
	},
	{
		original: "丸伝フラワーロジ",
		hiragana: "まるでんふらわーろじ"
	},
	{
		original: "杉商",
		hiragana: "すぎしょう"
	},
	{
		original: "有限会社志方産業運輸",
		hiragana: "ゆうげんがいしゃしかたさんぎょううんゆ"
	},
	{
		original: "有限会社浅舞運送",
		hiragana: "ゆうげんがいしゃせんまいうんそう"
	},
	{
		original: "豊栄",
		hiragana: "とよさか"
	},
	{
		original: "有限会社三共運輸",
		hiragana: "ゆうげんがいしゃさんきょううんゆ"
	},
	{
		original: "ユーキン物流",
		hiragana: "ゆーきんぶつりゅう"
	},
	{
		original: "那珂湊運送有限会社",
		hiragana: "なかみなとうんそうゆうげんがいしゃ"
	},
	{
		original: "有限会社持地産業",
		hiragana: "ゆうげんがいしゃもちじさんぎょう"
	},
	{
		original: "有限会社エーケーエル",
		hiragana: "ゆうげんがいしゃえーけーえる"
	},
	{
		original: "力丸流通サービス",
		hiragana: "りきまるりゅうつうさーびす"
	},
	{
		original: "高屋運送有限会社",
		hiragana: "たかやうんそうゆうげんがいしゃ"
	},
	{
		original: "有限会社タチバナ運送",
		hiragana: "ゆうげんがいしゃたちばなうんそう"
	},
	{
		original: "有限会社マルセイ運輸",
		hiragana: "ゆうげんがいしゃまるせいうんゆ"
	},
	{
		original: "ネクサス",
		hiragana: "ねくさす"
	},
	{
		original: "やまなか",
		hiragana: "やまなか"
	},
	{
		original: "原物流",
		hiragana: "げんぶつりゅう"
	},
	{
		original: "有限会社渡部建材",
		hiragana: "ゆうげんがいしゃわたなべけんざい"
	},
	{
		original: "トラストライナー",
		hiragana: "とらすとらいなー"
	},
	{
		original: "有限会社三幸商事",
		hiragana: "ゆうげんがいしゃみつゆきしょうじ"
	},
	{
		original: "中央陸運",
		hiragana: "ちゅうおうりくうん"
	},
	{
		original: "サクラ運輸",
		hiragana: "さくらうんゆ"
	},
	{
		original: "有限会社オオキク",
		hiragana: "ゆうげんがいしゃおおきく"
	},
	{
		original: "有限会社中西運輸",
		hiragana: "ゆうげんがいしゃなかにしうんゆ"
	},
	{
		original: "かみもり",
		hiragana: "かみもり"
	},
	{
		original: "有限会社山中運送",
		hiragana: "ゆうげんがいしゃさんちゅううんそう"
	},
	{
		original: "有限会社熊田運送",
		hiragana: "ゆうげんがいしゃくまだうんそう"
	},
	{
		original: "有限会社三光商事",
		hiragana: "ゆうげんがいしゃさんこうしょうじ"
	},
	{
		original: "有限会社新和流通",
		hiragana: "ゆうげんがいしゃしんわりゅうつう"
	},
	{
		original: "吹上運輸有限会社",
		hiragana: "ふきあげうんゆゆうげんがいしゃ"
	},
	{
		original: "有限会社和興",
		hiragana: "ゆうげんがいしゃわきょう"
	},
	{
		original: "金子運輸",
		hiragana: "かねこうんゆ"
	},
	{
		original: "神戸運輸",
		hiragana: "こうべうんゆ"
	},
	{
		original: "大通",
		hiragana: "おおどおり"
	},
	{
		original: "トータルクスモト",
		hiragana: "とーたるくすもと"
	},
	{
		original: "楢葉運輸有限会社",
		hiragana: "ならはうんゆゆうげんがいしゃ"
	},
	{
		original: "安東運輸",
		hiragana: "あんとううんゆ"
	},
	{
		original: "シンワ運輸",
		hiragana: "しんわうんゆ"
	},
	{
		original: "藤澤運輸倉庫",
		hiragana: "ふじさわうんゆそうこ"
	},
	{
		original: "有限会社大英通商",
		hiragana: "ゆうげんがいしゃだいえいつうしょう"
	},
	{
		original: "有限会社明創運輸",
		hiragana: "ゆうげんがいしゃめいそううんゆ"
	},
	{
		original: "なりたに運送有限会社",
		hiragana: "なりたにうんそうゆうげんがいしゃ"
	},
	{
		original: "有限会社三浦運輸",
		hiragana: "ゆうげんがいしゃみうらうんゆ"
	},
	{
		original: "Ｄ‐ｖｉｓｉｏｎ",
		hiragana: "Ｄ‐ｖｉｓｉｏｎ"
	},
	{
		original: "有限会社佐藤林業",
		hiragana: "ゆうげんがいしゃさとうりんぎょう"
	},
	{
		original: "有限会社新原運送",
		hiragana: "ゆうげんがいしゃにいはらうんそう"
	},
	{
		original: "ライズ",
		hiragana: "らいず"
	},
	{
		original: "ＫＯＹＯ",
		hiragana: "ＫＯＹＯ"
	},
	{
		original: "加藤産業有限会社",
		hiragana: "かとうさんぎょうゆうげんがいしゃ"
	},
	{
		original: "坂本運送有限会社",
		hiragana: "さかもとうんそうゆうげんがいしゃ"
	},
	{
		original: "高知重量",
		hiragana: "こうちじゅうりょう"
	},
	{
		original: "Ｗｅ－ｉｎｇ",
		hiragana: "Ｗｅ－ｉｎｇ"
	},
	{
		original: "有限会社イースト物流サービス",
		hiragana: "ゆうげんがいしゃいーすとぶつりゅうさーびす"
	},
	{
		original: "有限会社まこと商事",
		hiragana: "ゆうげんがいしゃまことしょうじ"
	},
	{
		original: "有限会社キャリーコーポレーション",
		hiragana: "ゆうげんがいしゃきゃりーこーぽれーしょん"
	},
	{
		original: "菅原陸運",
		hiragana: "すがわらりくうん"
	},
	{
		original: "金子工業有限会社",
		hiragana: "かねここうぎょうゆうげんがいしゃ"
	},
	{
		original: "有限会社サイダ",
		hiragana: "ゆうげんがいしゃさいだ"
	},
	{
		original: "東関東イトウ商事運輸",
		hiragana: "とうかんひがしいとうしょうじうんゆ"
	},
	{
		original: "山中運輸",
		hiragana: "さんちゅううんゆ"
	},
	{
		original: "中讃電材運輸有限会社",
		hiragana: "なかさんでんざいうんゆゆうげんがいしゃ"
	},
	{
		original: "有限会社協同商興",
		hiragana: "ゆうげんがいしゃきょうどうしょうきょう"
	},
	{
		original: "丸福運輸",
		hiragana: "まるふくうんゆ"
	},
	{
		original: "有限会社昭和運輸",
		hiragana: "ゆうげんがいしゃしょうわうんゆ"
	},
	{
		original: "マルチョー運輸有限会社",
		hiragana: "まるちょーうんゆゆうげんがいしゃ"
	},
	{
		original: "Ｔｏｋｕｇａｗａ　ＥＸＰＲＥＳＳ",
		hiragana: "Ｔｏｋｕｇａｗａ　ＥＸＰＲＥＳＳ"
	},
	{
		original: "笑栄通商",
		hiragana: "わらいさかえつうしょう"
	},
	{
		original: "有限会社三吉梱包",
		hiragana: "ゆうげんがいしゃさんきちこんぽう"
	},
	{
		original: "コウナン運輸有限会社",
		hiragana: "こうなんうんゆゆうげんがいしゃ"
	},
	{
		original: "ナノテクニカルキャリー",
		hiragana: "なのてくにかるきゃりー"
	},
	{
		original: "宮本運送",
		hiragana: "みやもとうんそう"
	},
	{
		original: "学園前ロードサービス",
		hiragana: "がくえんまえろーどさーびす"
	},
	{
		original: "香川中央運輸有限会社",
		hiragana: "かがわちゅうおううんゆゆうげんがいしゃ"
	},
	{
		original: "有限会社田畑商店",
		hiragana: "ゆうげんがいしゃたはたしょうてん"
	},
	{
		original: "エイケン建材",
		hiragana: "えいけんけんざい"
	},
	{
		original: "有限会社門脇運輸",
		hiragana: "ゆうげんがいしゃかどわきうんゆ"
	},
	{
		original: "サクラユーネット",
		hiragana: "さくらゆーねっと"
	},
	{
		original: "三幸運送",
		hiragana: "みつゆきうんそう"
	},
	{
		original: "タマエ運輸有限会社",
		hiragana: "たまえうんゆゆうげんがいしゃ"
	},
	{
		original: "桑翔",
		hiragana: "くわしょう"
	},
	{
		original: "有限会社北照建材工業",
		hiragana: "ゆうげんがいしゃほくしょうけんざいこうぎょう"
	},
	{
		original: "カマタ",
		hiragana: "かまた"
	},
	{
		original: "安達運輸",
		hiragana: "あだちうんゆ"
	},
	{
		original: "有限会社サクセス",
		hiragana: "ゆうげんがいしゃさくせす"
	},
	{
		original: "有限会社姶良物流",
		hiragana: "ゆうげんがいしゃあいらぶつりゅう"
	},
	{
		original: "有限会社山本エキスプレス",
		hiragana: "ゆうげんがいしゃやまもとえきすぷれす"
	},
	{
		original: "丸文運輸",
		hiragana: "まるぶんうんゆ"
	},
	{
		original: "Ｂｌａｃｋ　Ｌｉｎｅ",
		hiragana: "Ｂｌａｃｋ　Ｌｉｎｅ"
	},
	{
		original: "小野田運送",
		hiragana: "おのだうんそう"
	},
	{
		original: "末広",
		hiragana: "すえひろ"
	},
	{
		original: "丸光運輸",
		hiragana: "まるみつうんゆ"
	},
	{
		original: "丸万協立運送",
		hiragana: "まるまんきょうりつうんそう"
	},
	{
		original: "三幸運輸",
		hiragana: "みつゆきうんゆ"
	},
	{
		original: "有限会社村田運輸",
		hiragana: "ゆうげんがいしゃむらたうんゆ"
	},
	{
		original: "ＪＡＳＴ",
		hiragana: "ＪＡＳＴ"
	},
	{
		original: "ＫＡＩＳＥＩ",
		hiragana: "ＫＡＩＳＥＩ"
	},
	{
		original: "有限会社横山運輸",
		hiragana: "ゆうげんがいしゃよこやまうんゆ"
	},
	{
		original: "有限会社南国レッカー",
		hiragana: "ゆうげんがいしゃなんごくれっかー"
	},
	{
		original: "関東美装梱包",
		hiragana: "かんとうびそうこんぽう"
	},
	{
		original: "ネットライン",
		hiragana: "ねっとらいん"
	},
	{
		original: "有限会社サトウ",
		hiragana: "ゆうげんがいしゃさとう"
	},
	{
		original: "協和運輸",
		hiragana: "きょうわうんゆ"
	},
	{
		original: "藤栄協運",
		hiragana: "ふじえきょううん"
	},
	{
		original: "マルエス水産",
		hiragana: "まるえすすいさん"
	},
	{
		original: "庚伸物流",
		hiragana: "こうしんぶつりゅう"
	},
	{
		original: "真．運送",
		hiragana: "まこと．うんそう"
	},
	{
		original: "Ｗｅｓｔ　ｃｏａｓｔ",
		hiragana: "Ｗｅｓｔ　ｃｏａｓｔ"
	},
	{
		original: "有限会社オリエント急送",
		hiragana: "ゆうげんがいしゃおりえんときゅうそう"
	},
	{
		original: "小林運輸有限会社",
		hiragana: "こばやしうんゆゆうげんがいしゃ"
	},
	{
		original: "有限会社東進運輸",
		hiragana: "ゆうげんがいしゃとうしんうんゆ"
	},
	{
		original: "有限会社西原急便",
		hiragana: "ゆうげんがいしゃにしはらきゅうびん"
	},
	{
		original: "葵",
		hiragana: "あおい"
	},
	{
		original: "有限会社大杉運輸",
		hiragana: "ゆうげんがいしゃおおすぎうんゆ"
	},
	{
		original: "九重運輸有限会社",
		hiragana: "ここのえうんゆゆうげんがいしゃ"
	},
	{
		original: "黒田運輸",
		hiragana: "くろだうんゆ"
	},
	{
		original: "大日通商",
		hiragana: "だいにちどおりしょう"
	},
	{
		original: "若狭商事",
		hiragana: "わかさしょうじ"
	},
	{
		original: "有限会社エイコー運輸",
		hiragana: "ゆうげんがいしゃえいこーうんゆ"
	},
	{
		original: "アビリティ",
		hiragana: "あびりてぃ"
	},
	{
		original: "敬和急行",
		hiragana: "けいわきゅうこう"
	},
	{
		original: "キャメル静岡",
		hiragana: "きゃめるしずおか"
	},
	{
		original: "幸洋運輸有限会社",
		hiragana: "こうよううんゆゆうげんがいしゃ"
	},
	{
		original: "酒井運送",
		hiragana: "さかいうんそう"
	},
	{
		original: "大和陸運",
		hiragana: "やまとりくうん"
	},
	{
		original: "有限会社ぷっぷっ",
		hiragana: "ゆうげんがいしゃぷっぷっ"
	},
	{
		original: "花井物流",
		hiragana: "はないぶつりゅう"
	},
	{
		original: "関西急配",
		hiragana: "かんさいきゅうはい"
	},
	{
		original: "有限会社タカセ運輸",
		hiragana: "ゆうげんがいしゃたかせうんゆ"
	},
	{
		original: "クレコレクトサービス",
		hiragana: "くれこれくとさーびす"
	},
	{
		original: "コウノ運輸",
		hiragana: "こうのうんゆ"
	},
	{
		original: "颯成運送",
		hiragana: "さつせいうんそう"
	},
	{
		original: "有限会社勝美総業",
		hiragana: "ゆうげんがいしゃかつみそうぎょう"
	},
	{
		original: "大斗通商有限会社",
		hiragana: "だいとつうしょうゆうげんがいしゃ"
	},
	{
		original: "ニシノサービス",
		hiragana: "にしのさーびす"
	},
	{
		original: "有限会社齊藤重量",
		hiragana: "ゆうげんがいしゃさいとうじゅうりょう"
	},
	{
		original: "有限会社東備運送",
		hiragana: "ゆうげんがいしゃとうびうんそう"
	},
	{
		original: "有限会社荒川運送",
		hiragana: "ゆうげんがいしゃあらかわうんそう"
	},
	{
		original: "ＢＥＳＴ　Ｍ　ＴＲＡＮＳ",
		hiragana: "ＢＥＳＴ　Ｍ　ＴＲＡＮＳ"
	},
	{
		original: "種市商運",
		hiragana: "たねいちしょううん"
	},
	{
		original: "有限会社本田重機興運",
		hiragana: "ゆうげんがいしゃほんだじゅうききょううん"
	},
	{
		original: "中川工業",
		hiragana: "なかがわこうぎょう"
	},
	{
		original: "鳥海物流",
		hiragana: "ちょうかいぶつりゅう"
	},
	{
		original: "有限会社親和運送",
		hiragana: "ゆうげんがいしゃしんわうんそう"
	},
	{
		original: "志田交通",
		hiragana: "しだこうつう"
	},
	{
		original: "プラス輸送サービス",
		hiragana: "ぷらすゆそうさーびす"
	},
	{
		original: "伊豫貨物自動車",
		hiragana: "いよかもつじどうしゃ"
	},
	{
		original: "波多腰商事有限会社",
		hiragana: "はたこししょうじゆうげんがいしゃ"
	},
	{
		original: "ジーシーネクスト",
		hiragana: "じーしーねくすと"
	},
	{
		original: "有限会社アルコ",
		hiragana: "ゆうげんがいしゃあるこ"
	},
	{
		original: "小久保冷蔵運輸倉庫",
		hiragana: "こくぼれいぞううんゆそうこ"
	},
	{
		original: "有限会社エス・ケー・ライン",
		hiragana: "ゆうげんがいしゃえす・けー・らいん"
	},
	{
		original: "松原運送",
		hiragana: "まつばらうんそう"
	},
	{
		original: "有限会社丸勝運送",
		hiragana: "ゆうげんがいしゃまるしょううんそう"
	},
	{
		original: "八陸物流",
		hiragana: "はちりくぶつりゅう"
	},
	{
		original: "三新運輸",
		hiragana: "さんしんうんゆ"
	},
	{
		original: "有限会社誠和",
		hiragana: "ゆうげんがいしゃせいわ"
	},
	{
		original: "有限会社北永井運送",
		hiragana: "ゆうげんがいしゃきたながいうんそう"
	},
	{
		original: "有限会社杉田産業",
		hiragana: "ゆうげんがいしゃすぎたさんぎょう"
	},
	{
		original: "金城運輸",
		hiragana: "きんじょううんゆ"
	},
	{
		original: "愛信運輸有限会社",
		hiragana: "あいしんうんゆゆうげんがいしゃ"
	},
	{
		original: "有限会社大甲サービス",
		hiragana: "ゆうげんがいしゃだいかぶとさーびす"
	},
	{
		original: "県北運輸有限会社",
		hiragana: "けんぽくうんゆゆうげんがいしゃ"
	},
	{
		original: "関東カイリック",
		hiragana: "かんとうかいりっく"
	},
	{
		original: "ユーキエキスプレス",
		hiragana: "ゆーきえきすぷれす"
	},
	{
		original: "有限会社イッコー運輸",
		hiragana: "ゆうげんがいしゃいっこーうんゆ"
	},
	{
		original: "誠信海運",
		hiragana: "せいしんかいうん"
	},
	{
		original: "清川物流",
		hiragana: "きよかわぶつりゅう"
	},
	{
		original: "有限会社湖南急送",
		hiragana: "ゆうげんがいしゃこなんきゅうそう"
	},
	{
		original: "有限会社澤里運輸",
		hiragana: "ゆうげんがいしゃさわさとうんゆ"
	},
	{
		original: "紀北運輸有限会社",
		hiragana: "きほくうんゆゆうげんがいしゃ"
	},
	{
		original: "伸勝物流",
		hiragana: "しんかちぶつりゅう"
	},
	{
		original: "有限会社丸善急便",
		hiragana: "ゆうげんがいしゃまるぜんきゅうびん"
	},
	{
		original: "谷物流",
		hiragana: "たにぶつりゅう"
	},
	{
		original: "有限会社三友運送",
		hiragana: "ゆうげんがいしゃみつともうんそう"
	},
	{
		original: "関西環境",
		hiragana: "かんさいかんきょう"
	},
	{
		original: "有限会社トランスディー",
		hiragana: "ゆうげんがいしゃとらんすでぃー"
	},
	{
		original: "石美屋",
		hiragana: "いしびや"
	},
	{
		original: "東海スワロートラック",
		hiragana: "とうかいすわろーとらっく"
	},
	{
		original: "有限会社赤帽あおもり運送",
		hiragana: "ゆうげんがいしゃあかぼうあおもりうんそう"
	},
	{
		original: "キャリーサポート",
		hiragana: "きゃりーさぽーと"
	},
	{
		original: "常磐荷役運送",
		hiragana: "じょうばんにやくうんそう"
	},
	{
		original: "有限会社宮川興業",
		hiragana: "ゆうげんがいしゃみやがわこうぎょう"
	},
	{
		original: "三島野運送",
		hiragana: "みしまのうんそう"
	},
	{
		original: "城西運送有限会社",
		hiragana: "じょうさいうんそうゆうげんがいしゃ"
	},
	{
		original: "有限会社西前田運輸",
		hiragana: "ゆうげんがいしゃにしまえたうんゆ"
	},
	{
		original: "富良野小型運送",
		hiragana: "ふらのこがたうんそう"
	},
	{
		original: "竹原運送",
		hiragana: "たけはらうんそう"
	},
	{
		original: "ラクトン",
		hiragana: "らくとん"
	},
	{
		original: "有限会社龍運送",
		hiragana: "ゆうげんがいしゃりゅううんそう"
	},
	{
		original: "有限会社伊藤運送",
		hiragana: "ゆうげんがいしゃいとううんそう"
	},
	{
		original: "有限会社廣謙周輸",
		hiragana: "ゆうげんがいしゃこうよしのりゆ"
	},
	{
		original: "武内運輸有限会社",
		hiragana: "たけうちうんゆゆうげんがいしゃ"
	},
	{
		original: "信和運輸",
		hiragana: "のぶかずうんゆ"
	},
	{
		original: "大翔運輸有限会社",
		hiragana: "ひろとうんゆゆうげんがいしゃ"
	},
	{
		original: "辰三興業",
		hiragana: "たつぞうこうぎょう"
	},
	{
		original: "高野運送",
		hiragana: "たかのうんそう"
	},
	{
		original: "豊北貨物運送有限会社",
		hiragana: "ほうほくかもつうんそうゆうげんがいしゃ"
	},
	{
		original: "協進",
		hiragana: "きょうすすむ"
	},
	{
		original: "有限会社春日運輸",
		hiragana: "ゆうげんがいしゃかすがうんゆ"
	},
	{
		original: "有限会社豊橋急便サービス",
		hiragana: "ゆうげんがいしゃとよはしきゅうびんさーびす"
	},
	{
		original: "新誠トータルサポート",
		hiragana: "しんまこととーたるさぽーと"
	},
	{
		original: "有限会社朝倉運輸",
		hiragana: "ゆうげんがいしゃあさくらうんゆ"
	},
	{
		original: "大和運送",
		hiragana: "やまとうんそう"
	},
	{
		original: "持山配送",
		hiragana: "じやまはいそう"
	},
	{
		original: "ＫＴＫジャパン",
		hiragana: "ＫＴＫじゃぱん"
	},
	{
		original: "愛翔物流",
		hiragana: "あいしょうぶつりゅう"
	},
	{
		original: "三大運輸倉庫",
		hiragana: "さんだいうんゆそうこ"
	},
	{
		original: "石井運送",
		hiragana: "いしいうんそう"
	},
	{
		original: "サン・ディアーズ",
		hiragana: "さん・でぃあーず"
	},
	{
		original: "有限会社今村商運",
		hiragana: "ゆうげんがいしゃいまむらしょううん"
	},
	{
		original: "日高運送有限会社",
		hiragana: "ひだかうんそうゆうげんがいしゃ"
	},
	{
		original: "協和運送",
		hiragana: "きょうわうんそう"
	},
	{
		original: "入船興業",
		hiragana: "いりふねこうぎょう"
	},
	{
		original: "斉藤運輸",
		hiragana: "さいとううんゆ"
	},
	{
		original: "すない",
		hiragana: "すない"
	},
	{
		original: "ランナー",
		hiragana: "らんなー"
	},
	{
		original: "トータルロジテム",
		hiragana: "とーたるろじてむ"
	},
	{
		original: "清水アルミ商事",
		hiragana: "しみずあるみしょうじ"
	},
	{
		original: "岳南運送有限会社",
		hiragana: "がくなんうんそうゆうげんがいしゃ"
	},
	{
		original: "義喜光",
		hiragana: "よしきひかり"
	},
	{
		original: "荒谷運送有限会社",
		hiragana: "あらたにうんそうゆうげんがいしゃ"
	},
	{
		original: "浜田急便有限会社",
		hiragana: "はまだきゅうびんゆうげんがいしゃ"
	},
	{
		original: "マルナリ",
		hiragana: "まるなり"
	},
	{
		original: "有限会社オザワ梱包運輸",
		hiragana: "ゆうげんがいしゃおざわこんぽううんゆ"
	},
	{
		original: "ＪＭＣ",
		hiragana: "ＪＭＣ"
	},
	{
		original: "ジェーケーエス",
		hiragana: "じぇーけーえす"
	},
	{
		original: "大原運送有限会社",
		hiragana: "おおはらうんそうゆうげんがいしゃ"
	},
	{
		original: "有限会社石山運送",
		hiragana: "ゆうげんがいしゃいしやまうんそう"
	},
	{
		original: "有限会社平木運輸",
		hiragana: "ゆうげんがいしゃひらきうんゆ"
	},
	{
		original: "昭和興業",
		hiragana: "しょうわこうぎょう"
	},
	{
		original: "ケイワイロジスティクス",
		hiragana: "けいわいろじすてぃくす"
	},
	{
		original: "関東運輸情報",
		hiragana: "かんとううんゆじょうほう"
	},
	{
		original: "作興運輸",
		hiragana: "さっこううんゆ"
	},
	{
		original: "船屋運輸",
		hiragana: "ふねやうんゆ"
	},
	{
		original: "幸伸運輸",
		hiragana: "ゆきのぶうんゆ"
	},
	{
		original: "有限会社中島興業運輸",
		hiragana: "ゆうげんがいしゃなかじまこうぎょううんゆ"
	},
	{
		original: "東栄物流",
		hiragana: "とうえいぶつりゅう"
	},
	{
		original: "五十畑商事",
		hiragana: "ごじゅうはたけしょうじ"
	},
	{
		original: "イーストフォロー",
		hiragana: "いーすとふぉろー"
	},
	{
		original: "岩田運輸",
		hiragana: "いわたうんゆ"
	},
	{
		original: "有限会社幡谷運送",
		hiragana: "ゆうげんがいしゃはたやうんそう"
	},
	{
		original: "明和運輸有限会社",
		hiragana: "めいわうんゆゆうげんがいしゃ"
	},
	{
		original: "有限会社ニイガタロジック",
		hiragana: "ゆうげんがいしゃにいがたろじっく"
	},
	{
		original: "有限会社落合運輸",
		hiragana: "ゆうげんがいしゃおちあいうんゆ"
	},
	{
		original: "有限会社梨田運送",
		hiragana: "ゆうげんがいしゃなしだうんそう"
	},
	{
		original: "ゴールドパートナー",
		hiragana: "ごーるどぱーとなー"
	},
	{
		original: "有限会社アイ・エッチ・エス・センター",
		hiragana: "ゆうげんがいしゃあい・えっち・えす・せんたー"
	},
	{
		original: "エクスプレス．サポート．大杉",
		hiragana: "えくすぷれす．さぽーと．おおすぎ"
	},
	{
		original: "栄和運送有限会社",
		hiragana: "えいわうんそうゆうげんがいしゃ"
	},
	{
		original: "ミヨシサービス",
		hiragana: "みよしさーびす"
	},
	{
		original: "読売ロジスティクス",
		hiragana: "よみうりろじすてぃくす"
	},
	{
		original: "有限会社岩城物流",
		hiragana: "ゆうげんがいしゃいわきぶつりゅう"
	},
	{
		original: "メイカイ",
		hiragana: "めいかい"
	},
	{
		original: "聖立運輸",
		hiragana: "ひじりりつうんゆ"
	},
	{
		original: "有限会社フロントライン",
		hiragana: "ゆうげんがいしゃふろんとらいん"
	},
	{
		original: "岩間鉱業",
		hiragana: "いわまこうぎょう"
	},
	{
		original: "伊勢高速輸送有限会社",
		hiragana: "いせこうそくゆそうゆうげんがいしゃ"
	},
	{
		original: "一橋商事",
		hiragana: "ひとつばししょうじ"
	},
	{
		original: "有限会社丸宮運輸",
		hiragana: "ゆうげんがいしゃまるみやうんゆ"
	},
	{
		original: "松本物流",
		hiragana: "まつもとぶつりゅう"
	},
	{
		original: "喜多村運輸",
		hiragana: "きたむらうんゆ"
	},
	{
		original: "匠興業",
		hiragana: "たくみこうぎょう"
	},
	{
		original: "榊原商店",
		hiragana: "さかきばらしょうてん"
	},
	{
		original: "有限会社クレーネスト",
		hiragana: "ゆうげんがいしゃくれーねすと"
	},
	{
		original: "五代運輸有限会社",
		hiragana: "ごだいうんゆゆうげんがいしゃ"
	},
	{
		original: "御調運送",
		hiragana: "みつぎうんそう"
	},
	{
		original: "菅沼産業",
		hiragana: "すげぬまさんぎょう"
	},
	{
		original: "大揮運輸",
		hiragana: "だいきうんゆ"
	},
	{
		original: "有限会社玉成重機",
		hiragana: "ゆうげんがいしゃぎょくせいじゅうき"
	},
	{
		original: "橋本陸運有限会社",
		hiragana: "はしもとりくうんゆうげんがいしゃ"
	},
	{
		original: "ジーライン",
		hiragana: "じーらいん"
	},
	{
		original: "ハーツ",
		hiragana: "はーつ"
	},
	{
		original: "有限会社新宮運送",
		hiragana: "ゆうげんがいしゃしんぐううんそう"
	},
	{
		original: "石橋",
		hiragana: "いしばし"
	},
	{
		original: "舘栄産業",
		hiragana: "かんさかえさんぎょう"
	},
	{
		original: "有限会社海東運送",
		hiragana: "ゆうげんがいしゃかいとううんそう"
	},
	{
		original: "丸清運輸有限会社",
		hiragana: "まるきよしうんゆゆうげんがいしゃ"
	},
	{
		original: "有限会社三信商会",
		hiragana: "ゆうげんがいしゃさんしんしょうかい"
	},
	{
		original: "名阪エクスプレス",
		hiragana: "めいはんえくすぷれす"
	},
	{
		original: "大一陸送",
		hiragana: "ひろかずりくそう"
	},
	{
		original: "光重量機工",
		hiragana: "みつしげりょうきこう"
	},
	{
		original: "有限会社熊本英進運輸",
		hiragana: "ゆうげんがいしゃくまもとえいしんうんゆ"
	},
	{
		original: "有限会社コーナン商事",
		hiragana: "ゆうげんがいしゃこーなんしょうじ"
	},
	{
		original: "クレド宮崎",
		hiragana: "くれどみやざき"
	},
	{
		original: "有限会社孝伸運送",
		hiragana: "ゆうげんがいしゃたかししんうんそう"
	},
	{
		original: "北斗",
		hiragana: "ほくと"
	},
	{
		original: "有限会社松廣商店",
		hiragana: "ゆうげんがいしゃまつひろしょうてん"
	},
	{
		original: "青垣運輸有限会社",
		hiragana: "あおがきうんゆゆうげんがいしゃ"
	},
	{
		original: "有限会社飯沼運輸",
		hiragana: "ゆうげんがいしゃいいぬまうんゆ"
	},
	{
		original: "大賢",
		hiragana: "たいけん"
	},
	{
		original: "ＩＲＣ",
		hiragana: "ＩＲＣ"
	},
	{
		original: "三田運輸",
		hiragana: "みたうんゆ"
	},
	{
		original: "有限会社泉川興産",
		hiragana: "ゆうげんがいしゃいずみかわこうさん"
	},
	{
		original: "アレックス",
		hiragana: "あれっくす"
	},
	{
		original: "島根産業有限会社",
		hiragana: "しまねさんぎょうゆうげんがいしゃ"
	},
	{
		original: "有限会社野村重機",
		hiragana: "ゆうげんがいしゃのむらじゅうき"
	},
	{
		original: "合名会社国陽運輸",
		hiragana: "ごうめいがいしゃくによううんゆ"
	},
	{
		original: "菱和運輸",
		hiragana: "りょうわうんゆ"
	},
	{
		original: "岩田産業有限会社",
		hiragana: "いわたさんぎょうゆうげんがいしゃ"
	},
	{
		original: "有限会社松島商会",
		hiragana: "ゆうげんがいしゃまつしましょうかい"
	},
	{
		original: "大安商事",
		hiragana: "たいあんしょうじ"
	},
	{
		original: "城南物流",
		hiragana: "じょうなんぶつりゅう"
	},
	{
		original: "サンアイ",
		hiragana: "さんあい"
	},
	{
		original: "マルチサービス有限会社",
		hiragana: "まるちさーびすゆうげんがいしゃ"
	},
	{
		original: "ＫＢＳ",
		hiragana: "ＫＢＳ"
	},
	{
		original: "藤運輸",
		hiragana: "ふじうんゆ"
	},
	{
		original: "有限会社ダイジプロダクト",
		hiragana: "ゆうげんがいしゃだいじぷろだくと"
	},
	{
		original: "鯨陽陸運有限会社",
		hiragana: "くじらようりくうんゆうげんがいしゃ"
	},
	{
		original: "ホットハート",
		hiragana: "ほっとはーと"
	},
	{
		original: "有限会社宮崎運送",
		hiragana: "ゆうげんがいしゃみやざきうんそう"
	},
	{
		original: "ドリームホールディングス",
		hiragana: "どりーむほーるでぃんぐす"
	},
	{
		original: "西日本貨物自動車有限会社",
		hiragana: "にしにほんかもつじどうしゃゆうげんがいしゃ"
	},
	{
		original: "有限会社ミウラ",
		hiragana: "ゆうげんがいしゃみうら"
	},
	{
		original: "有限会社まるみ急便",
		hiragana: "ゆうげんがいしゃまるみきゅうびん"
	},
	{
		original: "有限会社丸孝運輸",
		hiragana: "ゆうげんがいしゃまるこううんゆ"
	},
	{
		original: "中西運輸",
		hiragana: "なかにしうんゆ"
	},
	{
		original: "ＳＦＩＤＡ",
		hiragana: "ＳＦＩＤＡ"
	},
	{
		original: "タチワキ",
		hiragana: "たちわき"
	},
	{
		original: "有限会社統航",
		hiragana: "ゆうげんがいしゃとうこう"
	},
	{
		original: "有限会社光商会",
		hiragana: "ゆうげんがいしゃひかりしょうかい"
	},
	{
		original: "手嶋興産",
		hiragana: "てじまこうさん"
	},
	{
		original: "櫻田商運",
		hiragana: "さくらだしょううん"
	},
	{
		original: "トラスト運輸",
		hiragana: "とらすとうんゆ"
	},
	{
		original: "和晃渡辺運輸",
		hiragana: "かずあきわたなべうんゆ"
	},
	{
		original: "太陽高速輸送",
		hiragana: "たいようこうそくゆそう"
	},
	{
		original: "田中運輸有限会社",
		hiragana: "たなかうんゆゆうげんがいしゃ"
	},
	{
		original: "昭和自動車",
		hiragana: "しょうわじどうしゃ"
	},
	{
		original: "富士陸運",
		hiragana: "ふじりくうん"
	},
	{
		original: "東洋荷役",
		hiragana: "とうようにやく"
	},
	{
		original: "細川商会",
		hiragana: "ほそかわしょうかい"
	},
	{
		original: "旭運輸",
		hiragana: "あさひうんゆ"
	},
	{
		original: "大阪重運",
		hiragana: "おおさかじゅううん"
	},
	{
		original: "有限会社神田運輸",
		hiragana: "ゆうげんがいしゃかんだうんゆ"
	},
	{
		original: "スエケン陸運",
		hiragana: "すえけんりくうん"
	},
	{
		original: "中央運輸",
		hiragana: "ちゅうおううんゆ"
	},
	{
		original: "キクスイ配送サービス有限会社",
		hiragana: "きくすいはいそうさーびすゆうげんがいしゃ"
	},
	{
		original: "神戸商運",
		hiragana: "こうべしょううん"
	},
	{
		original: "青木運送有限会社",
		hiragana: "あおきうんそうゆうげんがいしゃ"
	},
	{
		original: "新世通商",
		hiragana: "しんせいつうしょう"
	},
	{
		original: "有限会社最上運輸",
		hiragana: "ゆうげんがいしゃさいじょううんゆ"
	},
	{
		original: "ＲＵＮ",
		hiragana: "ＲＵＮ"
	},
	{
		original: "有限会社一森運輸",
		hiragana: "ゆうげんがいしゃいちもりうんゆ"
	},
	{
		original: "八洲",
		hiragana: "はっしゅう"
	},
	{
		original: "有限会社鹿南陸運",
		hiragana: "ゆうげんがいしゃしかみなみりくうん"
	},
	{
		original: "有限会社頓宮運送",
		hiragana: "ゆうげんがいしゃはやみやうんそう"
	},
	{
		original: "有限会社西川商運",
		hiragana: "ゆうげんがいしゃにしかわしょううん"
	},
	{
		original: "有限会社吉武運輸",
		hiragana: "ゆうげんがいしゃよしたけうんゆ"
	},
	{
		original: "メイコー",
		hiragana: "めいこー"
	},
	{
		original: "小賀野運輸",
		hiragana: "おがのうんゆ"
	},
	{
		original: "後藤運送",
		hiragana: "ごとううんそう"
	},
	{
		original: "有限会社荒木物流サービス",
		hiragana: "ゆうげんがいしゃあらきぶつりゅうさーびす"
	},
	{
		original: "青木商事",
		hiragana: "あおきしょうじ"
	},
	{
		original: "有限会社佐藤重工",
		hiragana: "ゆうげんがいしゃさとうじゅうこう"
	},
	{
		original: "Ｆｓトランス",
		hiragana: "Ｆｓとらんす"
	},
	{
		original: "石原運送有限会社",
		hiragana: "いしはらうんそうゆうげんがいしゃ"
	},
	{
		original: "太陽運送",
		hiragana: "たいよううんそう"
	},
	{
		original: "日栄運輸",
		hiragana: "にちえいうんゆ"
	},
	{
		original: "川合運輸",
		hiragana: "かわいうんゆ"
	},
	{
		original: "三宮運送有限会社",
		hiragana: "さんのみやうんそうゆうげんがいしゃ"
	},
	{
		original: "マルオカ運送有限会社",
		hiragana: "まるおかうんそうゆうげんがいしゃ"
	},
	{
		original: "有限会社鳥木",
		hiragana: "ゆうげんがいしゃとりき"
	},
	{
		original: "シンエー",
		hiragana: "しんえー"
	},
	{
		original: "有限会社あけぼの急配",
		hiragana: "ゆうげんがいしゃあけぼのきゅうはい"
	},
	{
		original: "有限会社辻本運送",
		hiragana: "ゆうげんがいしゃつじもとうんそう"
	},
	{
		original: "松岡運送有限会社",
		hiragana: "まつおかうんそうゆうげんがいしゃ"
	},
	{
		original: "富士運輸",
		hiragana: "ふじうんゆ"
	},
	{
		original: "手原運輸",
		hiragana: "てはらうんゆ"
	},
	{
		original: "アスリート",
		hiragana: "あすりーと"
	},
	{
		original: "有限会社サンクス",
		hiragana: "ゆうげんがいしゃさんくす"
	},
	{
		original: "山口エクスプレス",
		hiragana: "やまぐちえくすぷれす"
	},
	{
		original: "有限会社矢島運送",
		hiragana: "ゆうげんがいしゃやじまうんそう"
	},
	{
		original: "有限会社佐野運送",
		hiragana: "ゆうげんがいしゃさのうんそう"
	},
	{
		original: "ブルージャパン有限会社",
		hiragana: "ぶるーじゃぱんゆうげんがいしゃ"
	},
	{
		original: "有限会社バンバトランスポート",
		hiragana: "ゆうげんがいしゃばんばとらんすぽーと"
	},
	{
		original: "御幸商事",
		hiragana: "みゆきしょうじ"
	},
	{
		original: "有限会社オリオン物流",
		hiragana: "ゆうげんがいしゃおりおんぶつりゅう"
	},
	{
		original: "アルファ物流",
		hiragana: "あるふぁぶつりゅう"
	},
	{
		original: "兵庫エクスプレス",
		hiragana: "ひょうごえくすぷれす"
	},
	{
		original: "マルカ郡山興業",
		hiragana: "まるかこうりやまこうぎょう"
	},
	{
		original: "大和倉庫",
		hiragana: "やまとそうこ"
	},
	{
		original: "福光商事",
		hiragana: "ふくみつしょうじ"
	},
	{
		original: "ファミリーエクスプレス",
		hiragana: "ふぁみりーえくすぷれす"
	},
	{
		original: "ヒラハラ",
		hiragana: "ひらはら"
	},
	{
		original: "有限会社山田急便グループ",
		hiragana: "ゆうげんがいしゃやまだきゅうびんぐるーぷ"
	},
	{
		original: "有限会社長島運送",
		hiragana: "ゆうげんがいしゃながしまうんそう"
	},
	{
		original: "有限会社丸智商運",
		hiragana: "ゆうげんがいしゃまるさとるしょううん"
	},
	{
		original: "ライブ",
		hiragana: "らいぶ"
	},
	{
		original: "キャリックス",
		hiragana: "きゃりっくす"
	},
	{
		original: "ミツワ運輸倉庫",
		hiragana: "みつわうんゆそうこ"
	},
	{
		original: "永原運輸有限会社",
		hiragana: "ながはらうんゆゆうげんがいしゃ"
	},
	{
		original: "有限会社江崎産業",
		hiragana: "ゆうげんがいしゃえざきさんぎょう"
	},
	{
		original: "群馬高速輸送",
		hiragana: "ぐんまこうそくゆそう"
	},
	{
		original: "鹿島参宮通運",
		hiragana: "かしまさんぐうつううん"
	},
	{
		original: "有限会社丸美物流",
		hiragana: "ゆうげんがいしゃまるみぶつりゅう"
	},
	{
		original: "エイチケイエムロジスティクス",
		hiragana: "えいちけいえむろじすてぃくす"
	},
	{
		original: "エムトランスポート",
		hiragana: "えむとらんすぽーと"
	},
	{
		original: "東新運輸",
		hiragana: "ひがししんうんゆ"
	},
	{
		original: "根本運輸",
		hiragana: "こんぽんうんゆ"
	},
	{
		original: "有限会社丸一",
		hiragana: "ゆうげんがいしゃまるいち"
	},
	{
		original: "和エンタープライズ",
		hiragana: "わえんたーぷらいず"
	},
	{
		original: "佐藤運送",
		hiragana: "さとううんそう"
	},
	{
		original: "五味運送",
		hiragana: "ごみうんそう"
	},
	{
		original: "有限会社平山輸送",
		hiragana: "ゆうげんがいしゃひらやまゆそう"
	},
	{
		original: "有限会社前田運送",
		hiragana: "ゆうげんがいしゃまえだうんそう"
	},
	{
		original: "亀崎運輸合資会社",
		hiragana: "かめざきうんゆごうしがいしゃ"
	},
	{
		original: "須藤忠商事",
		hiragana: "すどうただししょうじ"
	},
	{
		original: "ハヤテ物流",
		hiragana: "はやてぶつりゅう"
	},
	{
		original: "四津葉運輸",
		hiragana: "よつはうんゆ"
	},
	{
		original: "三立運輸有限会社",
		hiragana: "さんりつうんゆゆうげんがいしゃ"
	},
	{
		original: "田中運送",
		hiragana: "たなかうんそう"
	},
	{
		original: "有限会社トラスト",
		hiragana: "ゆうげんがいしゃとらすと"
	},
	{
		original: "福島運送",
		hiragana: "ふくしまうんそう"
	},
	{
		original: "札幌畜肉運輸",
		hiragana: "さっぽろちくにくうんゆ"
	},
	{
		original: "有限会社福岡総運",
		hiragana: "ゆうげんがいしゃふくおかそううん"
	},
	{
		original: "有限会社山本運輸",
		hiragana: "ゆうげんがいしゃやまもとうんゆ"
	},
	{
		original: "祖地運送有限会社",
		hiragana: "そちうんそうゆうげんがいしゃ"
	},
	{
		original: "有限会社村松商事",
		hiragana: "ゆうげんがいしゃむらまつしょうじ"
	},
	{
		original: "平松運輸",
		hiragana: "ひらまつうんゆ"
	},
	{
		original: "有限会社東新運送",
		hiragana: "ゆうげんがいしゃひがししんうんそう"
	},
	{
		original: "ＨＥＲＣＵＬＥＳ",
		hiragana: "ＨＥＲＣＵＬＥＳ"
	},
	{
		original: "サンセイ運輸有限会社",
		hiragana: "さんせいうんゆゆうげんがいしゃ"
	},
	{
		original: "有限会社陸進運輸",
		hiragana: "ゆうげんがいしゃりくしんうんゆ"
	},
	{
		original: "加茂金運送",
		hiragana: "かもきんうんそう"
	},
	{
		original: "ＡＳカンパニー",
		hiragana: "ＡＳかんぱにー"
	},
	{
		original: "宗像貨物運送有限会社",
		hiragana: "むなかたかもつうんそうゆうげんがいしゃ"
	},
	{
		original: "ヤマト",
		hiragana: "やまと"
	},
	{
		original: "ケーエス物流",
		hiragana: "けーえすぶつりゅう"
	},
	{
		original: "有限会社福田物流",
		hiragana: "ゆうげんがいしゃふくだぶつりゅう"
	},
	{
		original: "有限会社幸栄丸運輸",
		hiragana: "ゆうげんがいしゃゆきえまるうんゆ"
	},
	{
		original: "プラタス",
		hiragana: "ぷらたす"
	},
	{
		original: "松元",
		hiragana: "まつもと"
	},
	{
		original: "二徳運輸倉庫",
		hiragana: "にとくうんゆそうこ"
	},
	{
		original: "有限会社八広山田",
		hiragana: "ゆうげんがいしゃやひろやまだ"
	},
	{
		original: "有限会社大翔陸運",
		hiragana: "ゆうげんがいしゃひろとりくうん"
	},
	{
		original: "有限会社隆商",
		hiragana: "ゆうげんがいしゃたかししょう"
	},
	{
		original: "星運輸",
		hiragana: "ほしうんゆ"
	},
	{
		original: "有限会社サンネット",
		hiragana: "ゆうげんがいしゃさんねっと"
	},
	{
		original: "福島理研",
		hiragana: "ふくしまりけん"
	},
	{
		original: "鍋山通商",
		hiragana: "なべやまつうしょう"
	},
	{
		original: "野田運送有限会社",
		hiragana: "のだうんそうゆうげんがいしゃ"
	},
	{
		original: "有限会社近藤商店",
		hiragana: "ゆうげんがいしゃこんどうしょうてん"
	},
	{
		original: "有限会社ニシナ運輸",
		hiragana: "ゆうげんがいしゃにしなうんゆ"
	},
	{
		original: "皆成",
		hiragana: "みなせい"
	},
	{
		original: "有限会社相互運送",
		hiragana: "ゆうげんがいしゃそうごうんそう"
	},
	{
		original: "関東産業運輸",
		hiragana: "かんとうさんぎょううんゆ"
	},
	{
		original: "浪江貨物自動車",
		hiragana: "なみえかもつじどうしゃ"
	},
	{
		original: "山志サービス",
		hiragana: "やまこころざしさーびす"
	},
	{
		original: "丸純荷役",
		hiragana: "まるじゅんにやく"
	},
	{
		original: "有限会社古幸商事",
		hiragana: "ゆうげんがいしゃこさちしょうじ"
	},
	{
		original: "昭幸急送",
		hiragana: "あきゆききゅうそう"
	},
	{
		original: "ラックライド",
		hiragana: "らっくらいど"
	},
	{
		original: "有限会社力物流",
		hiragana: "ゆうげんがいしゃちからぶつりゅう"
	},
	{
		original: "新美商事",
		hiragana: "にいみしょうじ"
	},
	{
		original: "防府運送",
		hiragana: "ほうふうんそう"
	},
	{
		original: "ＮＡＯ",
		hiragana: "ＮＡＯ"
	},
	{
		original: "大島運送有限会社",
		hiragana: "おおしまうんそうゆうげんがいしゃ"
	},
	{
		original: "有限会社アイル物流サービス",
		hiragana: "ゆうげんがいしゃあいるぶつりゅうさーびす"
	},
	{
		original: "有限会社泉運送",
		hiragana: "ゆうげんがいしゃいずみうんそう"
	},
	{
		original: "山口運輸機工",
		hiragana: "やまぐちうんゆきこう"
	},
	{
		original: "服部",
		hiragana: "はっとり"
	},
	{
		original: "セキセイ運輸",
		hiragana: "せきせいうんゆ"
	},
	{
		original: "ＳＬ　Ｃｒｅａｔｉｏｎｓ静岡",
		hiragana: "ＳＬ　Ｃｒｅａｔｉｏｎｓしずおか"
	},
	{
		original: "柏原運送",
		hiragana: "かしわばらうんそう"
	},
	{
		original: "亜細亜通商",
		hiragana: "あじあつうしょう"
	},
	{
		original: "有限会社丸波鉱山",
		hiragana: "ゆうげんがいしゃまるなみこうざん"
	},
	{
		original: "天啓運送",
		hiragana: "てんけいうんそう"
	},
	{
		original: "三國物流有限会社",
		hiragana: "みくにぶつりゅうゆうげんがいしゃ"
	},
	{
		original: "福菱工業",
		hiragana: "ふくひしこうぎょう"
	},
	{
		original: "中沢運送有限会社",
		hiragana: "なかざわうんそうゆうげんがいしゃ"
	},
	{
		original: "オーセンティック",
		hiragana: "おーせんてぃっく"
	},
	{
		original: "有限会社吉村商店",
		hiragana: "ゆうげんがいしゃよしむらしょうてん"
	},
	{
		original: "工藤産業",
		hiragana: "くどうさんぎょう"
	},
	{
		original: "シンタニ",
		hiragana: "しんたに"
	},
	{
		original: "有限会社山久物流",
		hiragana: "ゆうげんがいしゃやまきゅうぶつりゅう"
	},
	{
		original: "物流商事有限会社",
		hiragana: "ぶつりゅうしょうじゆうげんがいしゃ"
	},
	{
		original: "合同会社沖縄ネット急便",
		hiragana: "ごうどうかいしゃおきなわねっときゅうびん"
	},
	{
		original: "遠藤物流",
		hiragana: "えんどうぶつりゅう"
	},
	{
		original: "ラスティング",
		hiragana: "らすてぃんぐ"
	},
	{
		original: "明石運送",
		hiragana: "あかしうんそう"
	},
	{
		original: "芝浦物流",
		hiragana: "しばうらぶつりゅう"
	},
	{
		original: "有限会社とむハウス",
		hiragana: "ゆうげんがいしゃとむはうす"
	},
	{
		original: "岐北ライン",
		hiragana: "しきたらいん"
	},
	{
		original: "有限会社三木梱包運輸",
		hiragana: "ゆうげんがいしゃみきこんぽううんゆ"
	},
	{
		original: "丸伊運送",
		hiragana: "まるいうんそう"
	},
	{
		original: "菱津運送",
		hiragana: "ひしつうんそう"
	},
	{
		original: "昭栄運輸",
		hiragana: "しょうえいうんゆ"
	},
	{
		original: "有限会社トップラインサービス",
		hiragana: "ゆうげんがいしゃとっぷらいんさーびす"
	},
	{
		original: "立花運送",
		hiragana: "たちばなうんそう"
	},
	{
		original: "有限会社西山興業",
		hiragana: "ゆうげんがいしゃにしやまこうぎょう"
	},
	{
		original: "パインツリー",
		hiragana: "ぱいんつりー"
	},
	{
		original: "有限会社大幸運送",
		hiragana: "ゆうげんがいしゃだいこううんそう"
	},
	{
		original: "トミー輸送サービス",
		hiragana: "とみーゆそうさーびす"
	},
	{
		original: "神原運輸有限会社",
		hiragana: "かみはらうんゆゆうげんがいしゃ"
	},
	{
		original: "有限会社宮原商店",
		hiragana: "ゆうげんがいしゃみやはらしょうてん"
	},
	{
		original: "有限会社城川運送",
		hiragana: "ゆうげんがいしゃしろかわうんそう"
	},
	{
		original: "有限会社上伸興業",
		hiragana: "ゆうげんがいしゃうわのびこうぎょう"
	},
	{
		original: "有限会社大仲組運送",
		hiragana: "ゆうげんがいしゃおおなかくみうんそう"
	},
	{
		original: "有限会社ピナクルズ",
		hiragana: "ゆうげんがいしゃぴなくるず"
	},
	{
		original: "有限会社吉田運送",
		hiragana: "ゆうげんがいしゃよしだうんそう"
	},
	{
		original: "飯野運送",
		hiragana: "いいのうんそう"
	},
	{
		original: "鈴商",
		hiragana: "すずしょう"
	},
	{
		original: "大八運送",
		hiragana: "だいはちうんそう"
	},
	{
		original: "有限会社神長運輸",
		hiragana: "ゆうげんがいしゃかみながうんゆ"
	},
	{
		original: "有限会社ショウエイサービス",
		hiragana: "ゆうげんがいしゃしょうえいさーびす"
	},
	{
		original: "有限会社アユミコーポレーション",
		hiragana: "ゆうげんがいしゃあゆみこーぽれーしょん"
	},
	{
		original: "ＴＳＣロジスティクス",
		hiragana: "ＴＳＣろじすてぃくす"
	},
	{
		original: "有限会社アイシーエス",
		hiragana: "ゆうげんがいしゃあいしーえす"
	},
	{
		original: "ゴウダ物流",
		hiragana: "ごうだぶつりゅう"
	},
	{
		original: "恋信運輸",
		hiragana: "こいしんうんゆ"
	},
	{
		original: "共伸運送",
		hiragana: "ともしんうんそう"
	},
	{
		original: "有限会社慎運輸",
		hiragana: "ゆうげんがいしゃしんうんゆ"
	},
	{
		original: "有限会社森マーケッティング",
		hiragana: "ゆうげんがいしゃもりまーけってぃんぐ"
	},
	{
		original: "志斗興産",
		hiragana: "こころざしとこうさん"
	},
	{
		original: "タイホウ",
		hiragana: "たいほう"
	},
	{
		original: "北創産業",
		hiragana: "きたそうさんぎょう"
	},
	{
		original: "九條運送",
		hiragana: "きゅうじょううんそう"
	},
	{
		original: "有限会社ワイエム運輸",
		hiragana: "ゆうげんがいしゃわいえむうんゆ"
	},
	{
		original: "関越運輸",
		hiragana: "かんえつうんゆ"
	},
	{
		original: "藤田運送店",
		hiragana: "ふじたうんそうてん"
	},
	{
		original: "笑進ロジスティック",
		hiragana: "わらいすすむろじすてぃっく"
	},
	{
		original: "有限会社シリウスコーポレーション",
		hiragana: "ゆうげんがいしゃしりうすこーぽれーしょん"
	},
	{
		original: "クリーンワーク",
		hiragana: "くりーんわーく"
	},
	{
		original: "有限会社富士物流",
		hiragana: "ゆうげんがいしゃふじぶつりゅう"
	},
	{
		original: "イワタ輸送センター",
		hiragana: "いわたゆそうせんたー"
	},
	{
		original: "有限会社Ｎ‐ＴＲＩＢＥ",
		hiragana: "ゆうげんがいしゃＮ‐ＴＲＩＢＥ"
	},
	{
		original: "有限会社須崎仲間組",
		hiragana: "ゆうげんがいしゃすさきなかまくみ"
	},
	{
		original: "有限会社東吉野運送",
		hiragana: "ゆうげんがいしゃひがしよしのうんそう"
	},
	{
		original: "吉川商事",
		hiragana: "よしかわしょうじ"
	},
	{
		original: "スチール運輸",
		hiragana: "すちーるうんゆ"
	},
	{
		original: "有限会社岩手ピアノサービス",
		hiragana: "ゆうげんがいしゃいわてぴあのさーびす"
	},
	{
		original: "丸茂輸送有限会社",
		hiragana: "まるもゆそうゆうげんがいしゃ"
	},
	{
		original: "東運輸",
		hiragana: "ひがしうんゆ"
	},
	{
		original: "東西運輸",
		hiragana: "とうざいうんゆ"
	},
	{
		original: "有限会社佐賀野逓送",
		hiragana: "ゆうげんがいしゃさがのていそう"
	},
	{
		original: "しのはら運送",
		hiragana: "しのはらうんそう"
	},
	{
		original: "ノースエクスプレス",
		hiragana: "のーすえくすぷれす"
	},
	{
		original: "有限会社角谷運送",
		hiragana: "ゆうげんがいしゃかくたにうんそう"
	},
	{
		original: "有限会社大甕運輸",
		hiragana: "ゆうげんがいしゃおおみかうんゆ"
	},
	{
		original: "大孝運輸商事",
		hiragana: "だいこううんゆしょうじ"
	},
	{
		original: "三洋運輸",
		hiragana: "さんよううんゆ"
	},
	{
		original: "田中運送有限会社",
		hiragana: "たなかうんそうゆうげんがいしゃ"
	},
	{
		original: "エイムワン",
		hiragana: "えいむわん"
	},
	{
		original: "鶴島運送有限会社",
		hiragana: "つるしまうんそうゆうげんがいしゃ"
	},
	{
		original: "菅尾運輸有限会社",
		hiragana: "すがおうんゆゆうげんがいしゃ"
	},
	{
		original: "市陸",
		hiragana: "しりく"
	},
	{
		original: "クローバー物流",
		hiragana: "くろーばーぶつりゅう"
	},
	{
		original: "オオノ運送有限会社",
		hiragana: "おおのうんそうゆうげんがいしゃ"
	},
	{
		original: "有限会社ジーアイエス",
		hiragana: "ゆうげんがいしゃじーあいえす"
	},
	{
		original: "伊万里陸運",
		hiragana: "いまりりくうん"
	},
	{
		original: "有限会社正栄運送",
		hiragana: "ゆうげんがいしゃしょうえいうんそう"
	},
	{
		original: "ナカヤマ運輸有限会社",
		hiragana: "なかやまうんゆゆうげんがいしゃ"
	},
	{
		original: "西壅運送",
		hiragana: "にしよううんそう"
	},
	{
		original: "じんのうち運輸",
		hiragana: "じんのうちうんゆ"
	},
	{
		original: "ＡＴＲＡ",
		hiragana: "ＡＴＲＡ"
	},
	{
		original: "高大",
		hiragana: "こうた"
	},
	{
		original: "木村梱包運輸",
		hiragana: "きむらこんぽううんゆ"
	},
	{
		original: "有限会社藤田船用作業所",
		hiragana: "ゆうげんがいしゃふじたふねようさぎょうしょ"
	},
	{
		original: "渡辺水産",
		hiragana: "わたなべすいさん"
	},
	{
		original: "丸忠運輸",
		hiragana: "まるちゅううんゆ"
	},
	{
		original: "久保田運送有限会社",
		hiragana: "くぼたうんそうゆうげんがいしゃ"
	},
	{
		original: "北近畿運輸",
		hiragana: "きたきんきうんゆ"
	},
	{
		original: "ティーシーライン",
		hiragana: "てぃーしーらいん"
	},
	{
		original: "Ｃａｌｉｆｔｅｒｓ",
		hiragana: "Ｃａｌｉｆｔｅｒｓ"
	},
	{
		original: "有限会社遠藤通商",
		hiragana: "ゆうげんがいしゃえんどうつうしょう"
	},
	{
		original: "大道物流",
		hiragana: "だいどうぶつりゅう"
	},
	{
		original: "高平産業",
		hiragana: "たかひらさんぎょう"
	},
	{
		original: "アクセル物流サービス",
		hiragana: "あくせるぶつりゅうさーびす"
	},
	{
		original: "有限会社福乃家",
		hiragana: "ゆうげんがいしゃふくのいえ"
	},
	{
		original: "Ｎ・ＳＹＳＴＥＭ",
		hiragana: "Ｎ・ＳＹＳＴＥＭ"
	},
	{
		original: "トランスシグマ",
		hiragana: "とらんすしぐま"
	},
	{
		original: "森田梱包運輸",
		hiragana: "もりたこんぽううんゆ"
	},
	{
		original: "東運輸",
		hiragana: "ひがしうんゆ"
	},
	{
		original: "篠原運輸有限会社",
		hiragana: "しのはらうんゆゆうげんがいしゃ"
	},
	{
		original: "高本公害防止工業有限会社",
		hiragana: "たかもとこうがいぼうしこうぎょうゆうげんがいしゃ"
	},
	{
		original: "高野運送有限会社",
		hiragana: "たかのうんそうゆうげんがいしゃ"
	},
	{
		original: "赤阪運送",
		hiragana: "あかさかうんそう"
	},
	{
		original: "タカトレーディング",
		hiragana: "たかとれーでぃんぐ"
	},
	{
		original: "有限会社忠洋",
		hiragana: "ゆうげんがいしゃただひろ"
	},
	{
		original: "北翔運送",
		hiragana: "きたしょううんそう"
	},
	{
		original: "札幌ピアノ運輸有限会社",
		hiragana: "さっぽろぴあのうんゆゆうげんがいしゃ"
	},
	{
		original: "東江運送",
		hiragana: "あがりえうんそう"
	},
	{
		original: "徳美リンクス",
		hiragana: "とくみりんくす"
	},
	{
		original: "ＣＳロジスティクス",
		hiragana: "ＣＳろじすてぃくす"
	},
	{
		original: "だいだい運送",
		hiragana: "だいだいうんそう"
	},
	{
		original: "有限会社米子セルフ輸送",
		hiragana: "ゆうげんがいしゃよなごせるふゆそう"
	},
	{
		original: "有限会社久留生倉庫",
		hiragana: "ゆうげんがいしゃくるなまそうこ"
	},
	{
		original: "安達運送",
		hiragana: "あだちうんそう"
	},
	{
		original: "フェニックス",
		hiragana: "ふぇにっくす"
	},
	{
		original: "ワイピーシー",
		hiragana: "わいぴーしー"
	},
	{
		original: "喜働社",
		hiragana: "きどうしゃ"
	},
	{
		original: "岩井運送",
		hiragana: "いわいうんそう"
	},
	{
		original: "エイシン有限会社",
		hiragana: "えいしんゆうげんがいしゃ"
	},
	{
		original: "双運管理",
		hiragana: "そううんかんり"
	},
	{
		original: "有限会社鈴木通運",
		hiragana: "ゆうげんがいしゃすずきつううん"
	},
	{
		original: "港栄運輸",
		hiragana: "みなとえいうんゆ"
	},
	{
		original: "久留米福輸有限会社",
		hiragana: "くるめふくゆゆうげんがいしゃ"
	},
	{
		original: "有限会社勝山運送",
		hiragana: "ゆうげんがいしゃかつやまうんそう"
	},
	{
		original: "有限会社ひむかライナー",
		hiragana: "ゆうげんがいしゃひむからいなー"
	},
	{
		original: "有限会社トクシン",
		hiragana: "ゆうげんがいしゃとくしん"
	},
	{
		original: "マルキ梱包運送",
		hiragana: "まるきこんぽううんそう"
	},
	{
		original: "甲賀運送有限会社",
		hiragana: "こうかうんそうゆうげんがいしゃ"
	},
	{
		original: "大特運送有限会社",
		hiragana: "だいとくうんそうゆうげんがいしゃ"
	},
	{
		original: "有限会社山本運送店",
		hiragana: "ゆうげんがいしゃやまもとうんそうてん"
	},
	{
		original: "運転社",
		hiragana: "うんてんしゃ"
	},
	{
		original: "長良商運",
		hiragana: "ながらしょううん"
	},
	{
		original: "有限会社エムエスサービス",
		hiragana: "ゆうげんがいしゃえむえすさーびす"
	},
	{
		original: "昭運",
		hiragana: "あきらうん"
	},
	{
		original: "東信物流",
		hiragana: "とうしんぶつりゅう"
	},
	{
		original: "有限会社増本土建",
		hiragana: "ゆうげんがいしゃますもとどけん"
	},
	{
		original: "大恵運輸有限会社",
		hiragana: "だいけいうんゆゆうげんがいしゃ"
	},
	{
		original: "有限会社八大運輸",
		hiragana: "ゆうげんがいしゃはちだいうんゆ"
	},
	{
		original: "サンテック",
		hiragana: "さんてっく"
	},
	{
		original: "有限会社藤急送",
		hiragana: "ゆうげんがいしゃふじきゅうそう"
	},
	{
		original: "サムソンテック",
		hiragana: "さむそんてっく"
	},
	{
		original: "有限会社安藤興業センター",
		hiragana: "ゆうげんがいしゃあんどうこうぎょうせんたー"
	},
	{
		original: "西本運輸",
		hiragana: "にしもとうんゆ"
	},
	{
		original: "Ｅｌ　ｐｌｏｍｏ",
		hiragana: "Ｅｌ　ｐｌｏｍｏ"
	},
	{
		original: "カイハツ生コン輸送",
		hiragana: "かいはつなまこんゆそう"
	},
	{
		original: "有限会社ワールド企画",
		hiragana: "ゆうげんがいしゃわーるどきかく"
	},
	{
		original: "ヤマゴ",
		hiragana: "やまご"
	},
	{
		original: "有限会社エビス産業",
		hiragana: "ゆうげんがいしゃえびすさんぎょう"
	},
	{
		original: "有限会社栗原商事",
		hiragana: "ゆうげんがいしゃくりはらしょうじ"
	},
	{
		original: "有限会社ジェット輸送",
		hiragana: "ゆうげんがいしゃじぇっとゆそう"
	},
	{
		original: "中備産業",
		hiragana: "なかぞなえさんぎょう"
	},
	{
		original: "濱光輸送",
		hiragana: "はまひかりゆそう"
	},
	{
		original: "有限会社桑員トラック",
		hiragana: "ゆうげんがいしゃくわいんとらっく"
	},
	{
		original: "有限会社杉井通商",
		hiragana: "ゆうげんがいしゃすぎいつうしょう"
	},
	{
		original: "東北光星ライン",
		hiragana: "とうほくひかりほしらいん"
	},
	{
		original: "有限会社アシスト",
		hiragana: "ゆうげんがいしゃあしすと"
	},
	{
		original: "長滝運送",
		hiragana: "ちょうたきうんそう"
	},
	{
		original: "有限会社宮田倉庫",
		hiragana: "ゆうげんがいしゃみやたそうこ"
	},
	{
		original: "有限会社阿部運送",
		hiragana: "ゆうげんがいしゃあべうんそう"
	},
	{
		original: "ヤマト総研",
		hiragana: "やまとそうけん"
	},
	{
		original: "有限会社徳丸梱包",
		hiragana: "ゆうげんがいしゃとくまるこんぽう"
	},
	{
		original: "ときわ陸送有限会社",
		hiragana: "ときわりくそうゆうげんがいしゃ"
	},
	{
		original: "ＯＢＳコーポレーション",
		hiragana: "ＯＢＳこーぽれーしょん"
	},
	{
		original: "有限会社ユタカ",
		hiragana: "ゆうげんがいしゃゆたか"
	},
	{
		original: "有限会社山本運輸",
		hiragana: "ゆうげんがいしゃやまもとうんゆ"
	},
	{
		original: "サカイデエキスプレス",
		hiragana: "さかいでえきすぷれす"
	},
	{
		original: "有限会社下関急配",
		hiragana: "ゆうげんがいしゃしものせききゅうはい"
	},
	{
		original: "有限会社村上建材",
		hiragana: "ゆうげんがいしゃむらかみけんざい"
	},
	{
		original: "有限会社たまき運送",
		hiragana: "ゆうげんがいしゃたまきうんそう"
	},
	{
		original: "有限会社セントラルエキスプレス",
		hiragana: "ゆうげんがいしゃせんとらるえきすぷれす"
	},
	{
		original: "有限会社森本商事",
		hiragana: "ゆうげんがいしゃもりもとしょうじ"
	},
	{
		original: "三木運輸",
		hiragana: "みきうんゆ"
	},
	{
		original: "有限会社アラト運輸",
		hiragana: "ゆうげんがいしゃあらとうんゆ"
	},
	{
		original: "シーガル",
		hiragana: "しーがる"
	},
	{
		original: "西新運輸",
		hiragana: "にししんうんゆ"
	},
	{
		original: "有限会社豊実商会",
		hiragana: "ゆうげんがいしゃゆたかみしょうかい"
	},
	{
		original: "産直クルー",
		hiragana: "さんちょくくるー"
	},
	{
		original: "有限会社小野商店",
		hiragana: "ゆうげんがいしゃおのしょうてん"
	},
	{
		original: "山田運送有限会社",
		hiragana: "やまだうんそうゆうげんがいしゃ"
	},
	{
		original: "有限会社東光サービス",
		hiragana: "ゆうげんがいしゃとうこうさーびす"
	},
	{
		original: "有限会社丸伸",
		hiragana: "ゆうげんがいしゃまるしん"
	},
	{
		original: "有限会社協進運輸",
		hiragana: "ゆうげんがいしゃきょうしんうんゆ"
	},
	{
		original: "松光運輸",
		hiragana: "まつひかりうんゆ"
	},
	{
		original: "有限会社宇都宮商運",
		hiragana: "ゆうげんがいしゃうつのみやしょううん"
	},
	{
		original: "有限会社桑原商店",
		hiragana: "ゆうげんがいしゃくわはらしょうてん"
	},
	{
		original: "キャッツ・コーポレーション",
		hiragana: "きゃっつ・こーぽれーしょん"
	},
	{
		original: "森運送",
		hiragana: "もりうんそう"
	},
	{
		original: "アーバントランスポート",
		hiragana: "あーばんとらんすぽーと"
	},
	{
		original: "アンカー",
		hiragana: "あんかー"
	},
	{
		original: "森村運輸",
		hiragana: "もりむらうんゆ"
	},
	{
		original: "井上商事",
		hiragana: "いのうえしょうじ"
	},
	{
		original: "有限会社丸中物流栃木",
		hiragana: "ゆうげんがいしゃまるなかぶつりゅうとちぎ"
	},
	{
		original: "アーバントライブ",
		hiragana: "あーばんとらいぶ"
	},
	{
		original: "有限会社美政運輸",
		hiragana: "ゆうげんがいしゃびまつりごとうんゆ"
	},
	{
		original: "アゼス",
		hiragana: "あぜす"
	},
	{
		original: "ヒロ・ライン",
		hiragana: "ひろ・らいん"
	},
	{
		original: "昭和急送",
		hiragana: "しょうわきゅうそう"
	},
	{
		original: "有限会社新勢商運",
		hiragana: "ゆうげんがいしゃしんせいしょううん"
	},
	{
		original: "有限会社立川実業",
		hiragana: "ゆうげんがいしゃたちかわじつぎょう"
	},
	{
		original: "ＭＡＲＵＴＡ",
		hiragana: "ＭＡＲＵＴＡ"
	},
	{
		original: "権田運輸",
		hiragana: "ごんだうんゆ"
	},
	{
		original: "急配",
		hiragana: "きゅうはい"
	},
	{
		original: "川島運送",
		hiragana: "かわしまうんそう"
	},
	{
		original: "有限会社丸新運輸商事",
		hiragana: "ゆうげんがいしゃまるしんうんゆしょうじ"
	},
	{
		original: "とまと運送",
		hiragana: "とまとうんそう"
	},
	{
		original: "東光運送",
		hiragana: "とうこううんそう"
	},
	{
		original: "知久運送有限会社",
		hiragana: "ともひさうんそうゆうげんがいしゃ"
	},
	{
		original: "社納運輸",
		hiragana: "しゃのううんゆ"
	},
	{
		original: "大東広島",
		hiragana: "だいとうひろしま"
	},
	{
		original: "有限会社パワートランク",
		hiragana: "ゆうげんがいしゃぱわーとらんく"
	},
	{
		original: "マサ工業",
		hiragana: "まさこうぎょう"
	},
	{
		original: "田中興運有限会社",
		hiragana: "たなかきょううんゆうげんがいしゃ"
	},
	{
		original: "東原運輸",
		hiragana: "ひがしはらうんゆ"
	},
	{
		original: "マルハン物流",
		hiragana: "まるはんぶつりゅう"
	},
	{
		original: "有限会社シンコー",
		hiragana: "ゆうげんがいしゃしんこー"
	},
	{
		original: "ケアフルプロモーション",
		hiragana: "けあふるぷろもーしょん"
	},
	{
		original: "シマヅ重機",
		hiragana: "しまづじゅうき"
	},
	{
		original: "有限会社鋼",
		hiragana: "ゆうげんがいしゃこう"
	},
	{
		original: "八幡高速運輸",
		hiragana: "はちまんこうそくうんゆ"
	},
	{
		original: "昭愛ライン",
		hiragana: "あきらあいらいん"
	},
	{
		original: "藤自動車運輸",
		hiragana: "ふじじどうしゃうんゆ"
	},
	{
		original: "有限会社マルケイ荷役",
		hiragana: "ゆうげんがいしゃまるけいにやく"
	},
	{
		original: "有限会社ＩＭ物流",
		hiragana: "ゆうげんがいしゃＩＭぶつりゅう"
	},
	{
		original: "有限会社折戸土木",
		hiragana: "ゆうげんがいしゃおりとどぼく"
	},
	{
		original: "竹中興運",
		hiragana: "たけなかきょううん"
	},
	{
		original: "有限会社田中運輸",
		hiragana: "ゆうげんがいしゃたなかうんゆ"
	},
	{
		original: "有限会社納所運送",
		hiragana: "ゆうげんがいしゃなっしょうんそう"
	},
	{
		original: "有限会社佐野運輸",
		hiragana: "ゆうげんがいしゃさのうんゆ"
	},
	{
		original: "アサヒエクス",
		hiragana: "あさひえくす"
	},
	{
		original: "宮崎商事",
		hiragana: "みやざきしょうじ"
	},
	{
		original: "まるかわ運輸",
		hiragana: "まるかわうんゆ"
	},
	{
		original: "相模新晃運輸",
		hiragana: "さがみしんこううんゆ"
	},
	{
		original: "スター・トラックス",
		hiragana: "すたー・とらっくす"
	},
	{
		original: "総和運輸",
		hiragana: "そうわうんゆ"
	},
	{
		original: "城北自工",
		hiragana: "じょうほくじこう"
	},
	{
		original: "戎",
		hiragana: "じゅう"
	},
	{
		original: "丸光運輸",
		hiragana: "まるみつうんゆ"
	},
	{
		original: "北部運輸有限会社",
		hiragana: "ほくぶうんゆゆうげんがいしゃ"
	},
	{
		original: "有限会社ひまわり急行",
		hiragana: "ゆうげんがいしゃひまわりきゅうこう"
	},
	{
		original: "東陸商会",
		hiragana: "ひがしりくしょうかい"
	},
	{
		original: "菊丸企業",
		hiragana: "きくまるきぎょう"
	},
	{
		original: "有限会社冨澤建材",
		hiragana: "ゆうげんがいしゃとみざわけんざい"
	},
	{
		original: "興南運輸倉庫",
		hiragana: "こうなんうんゆそうこ"
	},
	{
		original: "有限会社エムロード",
		hiragana: "ゆうげんがいしゃえむろーど"
	},
	{
		original: "ホソヤ物流",
		hiragana: "ほそやぶつりゅう"
	},
	{
		original: "有限会社ゼロワン",
		hiragana: "ゆうげんがいしゃぜろわん"
	},
	{
		original: "手嶋商事",
		hiragana: "てじましょうじ"
	},
	{
		original: "有限会社志村運輸",
		hiragana: "ゆうげんがいしゃしむらうんゆ"
	},
	{
		original: "有限会社美善",
		hiragana: "ゆうげんがいしゃびぜん"
	},
	{
		original: "協和運輸",
		hiragana: "きょうわうんゆ"
	},
	{
		original: "有限会社大澤組",
		hiragana: "ゆうげんがいしゃおおさわくみ"
	},
	{
		original: "我妻",
		hiragana: "わがつま"
	},
	{
		original: "有限会社流通長野",
		hiragana: "ゆうげんがいしゃりゅうつうながの"
	},
	{
		original: "樽仙運送",
		hiragana: "たるせんうんそう"
	},
	{
		original: "吉賀運送有限会社",
		hiragana: "よしかうんそうゆうげんがいしゃ"
	},
	{
		original: "幸貴商事",
		hiragana: "ゆきたかしょうじ"
	},
	{
		original: "有限会社美秋産業",
		hiragana: "ゆうげんがいしゃびあきさんぎょう"
	},
	{
		original: "有限会社キャパ",
		hiragana: "ゆうげんがいしゃきゃぱ"
	},
	{
		original: "有限会社梅治運送",
		hiragana: "ゆうげんがいしゃうめじうんそう"
	},
	{
		original: "天野商店",
		hiragana: "あまのしょうてん"
	},
	{
		original: "有限会社克杉本商事",
		hiragana: "ゆうげんがいしゃかつすぎもとしょうじ"
	},
	{
		original: "有限会社森運送店",
		hiragana: "ゆうげんがいしゃもりうんそうてん"
	},
	{
		original: "有限会社上勝陸搬",
		hiragana: "ゆうげんがいしゃかみかつりくはん"
	},
	{
		original: "丸昭運輸",
		hiragana: "まるあきらうんゆ"
	},
	{
		original: "風岡製材所",
		hiragana: "かざおかせいざいしょ"
	},
	{
		original: "新栄通運",
		hiragana: "しんえいつううん"
	},
	{
		original: "広初サービス",
		hiragana: "こうはつさーびす"
	},
	{
		original: "三光運輸",
		hiragana: "さんこううんゆ"
	},
	{
		original: "寺西運送有限会社",
		hiragana: "てらにしうんそうゆうげんがいしゃ"
	},
	{
		original: "有限会社親和運送",
		hiragana: "ゆうげんがいしゃしんわうんそう"
	},
	{
		original: "黒木運送",
		hiragana: "くろきうんそう"
	},
	{
		original: "有限会社大迫青果卸センター",
		hiragana: "ゆうげんがいしゃおおさこせいかおろしせんたー"
	},
	{
		original: "オフィス・アレジメント・サービス",
		hiragana: "おふぃす・あれじめんと・さーびす"
	},
	{
		original: "有限会社竹田産業",
		hiragana: "ゆうげんがいしゃたけださんぎょう"
	},
	{
		original: "有限会社アズーリ",
		hiragana: "ゆうげんがいしゃあずーり"
	},
	{
		original: "新光洋電機有限会社",
		hiragana: "しんこうひろしでんきゆうげんがいしゃ"
	},
	{
		original: "丸和運輸倉庫有限会社",
		hiragana: "まるわうんゆそうこゆうげんがいしゃ"
	},
	{
		original: "吉岡商店",
		hiragana: "よしおかしょうてん"
	},
	{
		original: "守口実業",
		hiragana: "もりぐちじつぎょう"
	},
	{
		original: "大志物流",
		hiragana: "たいしぶつりゅう"
	},
	{
		original: "ウイング物流",
		hiragana: "ういんぐぶつりゅう"
	},
	{
		original: "畠山商店",
		hiragana: "はたけやましょうてん"
	},
	{
		original: "高崎流通企業",
		hiragana: "たかさきりゅうつうきぎょう"
	},
	{
		original: "プロアクティブ・ロジスティクス",
		hiragana: "ぷろあくてぃぶ・ろじすてぃくす"
	},
	{
		original: "山本運送",
		hiragana: "やまもとうんそう"
	},
	{
		original: "協立運輸",
		hiragana: "きょうりつうんゆ"
	},
	{
		original: "富士丘運輸",
		hiragana: "ふじおかうんゆ"
	},
	{
		original: "石﨑興業",
		hiragana: "いしいしこうぎょう"
	},
	{
		original: "深須運輸有限会社",
		hiragana: "しんすうんゆゆうげんがいしゃ"
	},
	{
		original: "吉川運輸有限会社",
		hiragana: "よしかわうんゆゆうげんがいしゃ"
	},
	{
		original: "福山スペースチャーター",
		hiragana: "ふくやますぺーすちゃーたー"
	},
	{
		original: "丸仲運輸",
		hiragana: "まるなかうんゆ"
	},
	{
		original: "丸鉄運送",
		hiragana: "まるてつうんそう"
	},
	{
		original: "有限会社東洋梱包",
		hiragana: "ゆうげんがいしゃとうようこんぽう"
	},
	{
		original: "有限会社石鳥谷運送",
		hiragana: "ゆうげんがいしゃいしどりやうんそう"
	},
	{
		original: "松栄丸運輸",
		hiragana: "しょうえいまるうんゆ"
	},
	{
		original: "有限会社石坂運輸",
		hiragana: "ゆうげんがいしゃいしざかうんゆ"
	},
	{
		original: "ソーゴサービス",
		hiragana: "そーごさーびす"
	},
	{
		original: "わいわいサービス",
		hiragana: "わいわいさーびす"
	},
	{
		original: "大伸運輸",
		hiragana: "たいしんうんゆ"
	},
	{
		original: "有限会社田中運送",
		hiragana: "ゆうげんがいしゃたなかうんそう"
	},
	{
		original: "しんのすけ",
		hiragana: "しんのすけ"
	},
	{
		original: "有限会社清水工業",
		hiragana: "ゆうげんがいしゃしみずこうぎょう"
	},
	{
		original: "広南高速運輸",
		hiragana: "こうみなみだかそくうんゆ"
	},
	{
		original: "市貝運送",
		hiragana: "いちかいうんそう"
	},
	{
		original: "プチトマト運輸",
		hiragana: "ぷちとまとうんゆ"
	},
	{
		original: "有限会社Ｋ　ＷＯＲＫ　ＳＥＲＶＩＣＥ",
		hiragana: "ゆうげんがいしゃＫ　ＷＯＲＫ　ＳＥＲＶＩＣＥ"
	},
	{
		original: "有限会社加賀配送",
		hiragana: "ゆうげんがいしゃかがはいそう"
	},
	{
		original: "有限会社壱岐商運",
		hiragana: "ゆうげんがいしゃいちぎしょううん"
	},
	{
		original: "湘南運送有限会社",
		hiragana: "しょうなんうんそうゆうげんがいしゃ"
	},
	{
		original: "ケイズトランスポート",
		hiragana: "けいずとらんすぽーと"
	},
	{
		original: "有限会社吉場重量",
		hiragana: "ゆうげんがいしゃよしばじゅうりょう"
	},
	{
		original: "神奈川コスモ物流",
		hiragana: "かながわこすもぶつりゅう"
	},
	{
		original: "日生運輸サービス",
		hiragana: "にっせいうんゆさーびす"
	},
	{
		original: "有限会社原田運輸",
		hiragana: "ゆうげんがいしゃはらだうんゆ"
	},
	{
		original: "オーイーシー",
		hiragana: "おーいーしー"
	},
	{
		original: "エス・ツー・ロジテック",
		hiragana: "えす・つー・ろじてっく"
	},
	{
		original: "都祁運送",
		hiragana: "つげうんそう"
	},
	{
		original: "新興運輸",
		hiragana: "しんこううんゆ"
	},
	{
		original: "有限会社平野運輸",
		hiragana: "ゆうげんがいしゃへいやうんゆ"
	},
	{
		original: "ケーエスライン",
		hiragana: "けーえすらいん"
	},
	{
		original: "有限会社ラン．サービス",
		hiragana: "ゆうげんがいしゃらん．さーびす"
	},
	{
		original: "有限会社昇建",
		hiragana: "ゆうげんがいしゃのぼるけん"
	},
	{
		original: "稲垣運輸有限会社",
		hiragana: "いながきうんゆゆうげんがいしゃ"
	},
	{
		original: "加藤運送有限会社",
		hiragana: "かとううんそうゆうげんがいしゃ"
	},
	{
		original: "有限会社環境サービス",
		hiragana: "ゆうげんがいしゃかんきょうさーびす"
	},
	{
		original: "有限会社協友運輸",
		hiragana: "ゆうげんがいしゃきょうともうんゆ"
	},
	{
		original: "双葉運輸有限会社",
		hiragana: "ふたばうんゆゆうげんがいしゃ"
	},
	{
		original: "有限会社昭栄運輸",
		hiragana: "ゆうげんがいしゃしょうえいうんゆ"
	},
	{
		original: "有限会社浜田産業",
		hiragana: "ゆうげんがいしゃはまださんぎょう"
	},
	{
		original: "中村運送",
		hiragana: "なかむらうんそう"
	},
	{
		original: "オーシャンエキスプレス",
		hiragana: "おーしゃんえきすぷれす"
	},
	{
		original: "堀江運送",
		hiragana: "ほりえうんそう"
	},
	{
		original: "有限会社丸田運送店",
		hiragana: "ゆうげんがいしゃまるたうんそうてん"
	},
	{
		original: "田中産業",
		hiragana: "たなかさんぎょう"
	},
	{
		original: "有限会社鞆荷役運送",
		hiragana: "ゆうげんがいしゃともにやくうんそう"
	},
	{
		original: "有限会社外山運輸",
		hiragana: "ゆうげんがいしゃとやまうんゆ"
	},
	{
		original: "天満運送",
		hiragana: "てんまうんそう"
	},
	{
		original: "東淀鋼材",
		hiragana: "ひがしよどこうざい"
	},
	{
		original: "静浦運輸",
		hiragana: "せいうらうんゆ"
	},
	{
		original: "日機送",
		hiragana: "にちきそう"
	},
	{
		original: "エガオ",
		hiragana: "えがお"
	},
	{
		original: "有限会社ナリタ",
		hiragana: "ゆうげんがいしゃなりた"
	},
	{
		original: "システム物流",
		hiragana: "しすてむぶつりゅう"
	},
	{
		original: "養父興産運輸有限会社",
		hiragana: "ようふこうさんうんゆゆうげんがいしゃ"
	},
	{
		original: "日東海運",
		hiragana: "にっとうかいうん"
	},
	{
		original: "アサヒヤ",
		hiragana: "あさひや"
	},
	{
		original: "丸輝ライン",
		hiragana: "まるてるらいん"
	},
	{
		original: "眞栄運輸有限会社",
		hiragana: "しんえいうんゆゆうげんがいしゃ"
	},
	{
		original: "あすもサポート",
		hiragana: "あすもさぽーと"
	},
	{
		original: "有限会社中昭",
		hiragana: "ゆうげんがいしゃなかあきら"
	},
	{
		original: "ヤマアキ",
		hiragana: "やまあき"
	},
	{
		original: "若松運送有限会社",
		hiragana: "わかまつうんそうゆうげんがいしゃ"
	},
	{
		original: "有限会社本庄流通サービス",
		hiragana: "ゆうげんがいしゃほんじょうりゅうつうさーびす"
	},
	{
		original: "丸二運輸",
		hiragana: "まるにうんゆ"
	},
	{
		original: "メッセンジャーエクスプレス",
		hiragana: "めっせんじゃーえくすぷれす"
	},
	{
		original: "有限会社サンラインコーポレーション",
		hiragana: "ゆうげんがいしゃさんらいんこーぽれーしょん"
	},
	{
		original: "矢嶋運輸",
		hiragana: "やじまうんゆ"
	},
	{
		original: "トキタ運輸",
		hiragana: "ときたうんゆ"
	},
	{
		original: "下山運輸",
		hiragana: "げざんうんゆ"
	},
	{
		original: "バンズネット",
		hiragana: "ばんずねっと"
	},
	{
		original: "大昭運送有限会社",
		hiragana: "だいあきらうんそうゆうげんがいしゃ"
	},
	{
		original: "有限会社菊地運輸",
		hiragana: "ゆうげんがいしゃきくちうんゆ"
	},
	{
		original: "有限会社草野商運",
		hiragana: "ゆうげんがいしゃくさのしょううん"
	},
	{
		original: "有限会社港産業",
		hiragana: "ゆうげんがいしゃみなとさんぎょう"
	},
	{
		original: "青木商事",
		hiragana: "あおきしょうじ"
	},
	{
		original: "木次運送有限会社",
		hiragana: "きすきうんそうゆうげんがいしゃ"
	},
	{
		original: "朝日運送有限会社",
		hiragana: "あさひうんそうゆうげんがいしゃ"
	},
	{
		original: "三栄商会",
		hiragana: "さんえいしょうかい"
	},
	{
		original: "東白運送有限会社",
		hiragana: "とうはくうんそうゆうげんがいしゃ"
	},
	{
		original: "有限会社ワールド",
		hiragana: "ゆうげんがいしゃわーるど"
	},
	{
		original: "リンシュンエキスプレス",
		hiragana: "りんしゅんえきすぷれす"
	},
	{
		original: "共栄運送有限会社",
		hiragana: "きょうえいうんそうゆうげんがいしゃ"
	},
	{
		original: "コナポンエクスプレス",
		hiragana: "こなぽんえくすぷれす"
	},
	{
		original: "有限会社東武運送",
		hiragana: "ゆうげんがいしゃとうぶうんそう"
	},
	{
		original: "新宮運輸",
		hiragana: "しんぐううんゆ"
	},
	{
		original: "ＦＵＪＩ運輸",
		hiragana: "ＦＵＪＩうんゆ"
	},
	{
		original: "有限会社奈義急便",
		hiragana: "ゆうげんがいしゃなぎきゅうびん"
	},
	{
		original: "広瀬運輸有限会社",
		hiragana: "ひろせうんゆゆうげんがいしゃ"
	},
	{
		original: "有限会社京畜運輸",
		hiragana: "ゆうげんがいしゃきょうちくうんゆ"
	},
	{
		original: "ＹＡＭＡＨＡＳＨＩ有限会社",
		hiragana: "ＹＡＭＡＨＡＳＨＩゆうげんがいしゃ"
	},
	{
		original: "有限会社ダイワ運送",
		hiragana: "ゆうげんがいしゃだいわうんそう"
	},
	{
		original: "旭盛",
		hiragana: "あさひじょう"
	},
	{
		original: "ＬＩＳ",
		hiragana: "ＬＩＳ"
	},
	{
		original: "水津運送有限会社",
		hiragana: "すいずうんそうゆうげんがいしゃ"
	},
	{
		original: "有限会社セントラル古澤",
		hiragana: "ゆうげんがいしゃせんとらるふるさわ"
	},
	{
		original: "有限会社常光輸送サービス",
		hiragana: "ゆうげんがいしゃじょうこうゆそうさーびす"
	},
	{
		original: "ハトミ運輸有限会社",
		hiragana: "はとみうんゆゆうげんがいしゃ"
	},
	{
		original: "有限会社小林商店",
		hiragana: "ゆうげんがいしゃこばやししょうてん"
	},
	{
		original: "有限会社山口運送",
		hiragana: "ゆうげんがいしゃやまぐちうんそう"
	},
	{
		original: "有限会社池口運送",
		hiragana: "ゆうげんがいしゃいけぐちうんそう"
	},
	{
		original: "小川運送有限会社",
		hiragana: "おがわうんそうゆうげんがいしゃ"
	},
	{
		original: "スマート・ロジ",
		hiragana: "すまーと・ろじ"
	},
	{
		original: "信栄陸運",
		hiragana: "のぶえいりくうん"
	},
	{
		original: "丸文サービス",
		hiragana: "まるぶんさーびす"
	},
	{
		original: "有限会社実里陸運",
		hiragana: "ゆうげんがいしゃみさとりくうん"
	},
	{
		original: "有限会社三栄運輸",
		hiragana: "ゆうげんがいしゃさんえいうんゆ"
	},
	{
		original: "有限会社ケンエー",
		hiragana: "ゆうげんがいしゃけんえー"
	},
	{
		original: "涌井運輸有限会社",
		hiragana: "わくいうんゆゆうげんがいしゃ"
	},
	{
		original: "有限会社ヤマセ砂利",
		hiragana: "ゆうげんがいしゃやませじゃり"
	},
	{
		original: "ショーエイ倉庫",
		hiragana: "しょーえいそうこ"
	},
	{
		original: "有限会社阿部運送店",
		hiragana: "ゆうげんがいしゃあべうんそうてん"
	},
	{
		original: "森大",
		hiragana: "もりだい"
	},
	{
		original: "青木工業有限会社",
		hiragana: "あおきこうぎょうゆうげんがいしゃ"
	},
	{
		original: "ＨＴ興業有限会社",
		hiragana: "ＨＴこうぎょうゆうげんがいしゃ"
	},
	{
		original: "住宅ネットワークサービス",
		hiragana: "じゅうたくねっとわーくさーびす"
	},
	{
		original: "丸一運送",
		hiragana: "まるいちうんそう"
	},
	{
		original: "永塚運輸",
		hiragana: "ながつかうんゆ"
	},
	{
		original: "山行運輸有限会社",
		hiragana: "さんこううんゆゆうげんがいしゃ"
	},
	{
		original: "岡本貨物有限会社",
		hiragana: "おかもとかもつゆうげんがいしゃ"
	},
	{
		original: "双葉運送有限会社",
		hiragana: "ふたばうんそうゆうげんがいしゃ"
	},
	{
		original: "信栄運輸有限会社",
		hiragana: "のぶえいうんゆゆうげんがいしゃ"
	},
	{
		original: "三河運送",
		hiragana: "みかわうんそう"
	},
	{
		original: "東工",
		hiragana: "とうこう"
	},
	{
		original: "中本運輸",
		hiragana: "なかもとうんゆ"
	},
	{
		original: "ヤマキ運送有限会社",
		hiragana: "やまきうんそうゆうげんがいしゃ"
	},
	{
		original: "榛東運輸",
		hiragana: "しんとううんゆ"
	},
	{
		original: "大豊運輸有限会社",
		hiragana: "たいほううんゆゆうげんがいしゃ"
	},
	{
		original: "高橋土木建材",
		hiragana: "たかはしどぼくけんざい"
	},
	{
		original: "山秋運輸有限会社",
		hiragana: "やまあきうんゆゆうげんがいしゃ"
	},
	{
		original: "高橋運輸有限会社",
		hiragana: "たかはしうんゆゆうげんがいしゃ"
	},
	{
		original: "井上興業",
		hiragana: "いのうえこうぎょう"
	},
	{
		original: "橋本運送有限会社",
		hiragana: "はしもとうんそうゆうげんがいしゃ"
	},
	{
		original: "ジェイ・ティ・アールコーポレーション",
		hiragana: "じぇい・てぃ・あーるこーぽれーしょん"
	},
	{
		original: "ＡＫ－ＬＩＮＥ",
		hiragana: "ＡＫ－ＬＩＮＥ"
	},
	{
		original: "山一運輸",
		hiragana: "やまいちうんゆ"
	},
	{
		original: "石井トレーディング",
		hiragana: "いしいとれーでぃんぐ"
	},
	{
		original: "有限会社コウチョウ運輸",
		hiragana: "ゆうげんがいしゃこうちょううんゆ"
	},
	{
		original: "有限会社サンエス物流",
		hiragana: "ゆうげんがいしゃさんえすぶつりゅう"
	},
	{
		original: "シップス",
		hiragana: "しっぷす"
	},
	{
		original: "有限会社山本海陸運送",
		hiragana: "ゆうげんがいしゃやまもとかいりくうんそう"
	},
	{
		original: "有限会社新原商店",
		hiragana: "ゆうげんがいしゃにいはらしょうてん"
	},
	{
		original: "櫻井倉庫",
		hiragana: "さくらいそうこ"
	},
	{
		original: "桃山運輸",
		hiragana: "ももやまうんゆ"
	},
	{
		original: "有限会社石井食品輸送",
		hiragana: "ゆうげんがいしゃいしいしょくひんゆそう"
	},
	{
		original: "アローズ",
		hiragana: "あろーず"
	},
	{
		original: "有限会社沖縄観葉植物運輸",
		hiragana: "ゆうげんがいしゃおきなわかんようしょくぶつうんゆ"
	},
	{
		original: "ＶＯＧＵＥ",
		hiragana: "ＶＯＧＵＥ"
	},
	{
		original: "昭和運輸有限会社",
		hiragana: "しょうわうんゆゆうげんがいしゃ"
	},
	{
		original: "有限会社石井運送",
		hiragana: "ゆうげんがいしゃいしいうんそう"
	},
	{
		original: "全軽運",
		hiragana: "ぜんけいうん"
	},
	{
		original: "有限会社川商ライン",
		hiragana: "ゆうげんがいしゃかわしょうらいん"
	},
	{
		original: "清水建材有限会社",
		hiragana: "しみずけんざいゆうげんがいしゃ"
	},
	{
		original: "グリーン特急有限会社",
		hiragana: "ぐりーんとっきゅうゆうげんがいしゃ"
	},
	{
		original: "百運コーポレーション",
		hiragana: "ひゃくうんこーぽれーしょん"
	},
	{
		original: "アストロハウム",
		hiragana: "あすとろはうむ"
	},
	{
		original: "下妻運送有限会社",
		hiragana: "しもづまうんそうゆうげんがいしゃ"
	},
	{
		original: "町田運送",
		hiragana: "まちだうんそう"
	},
	{
		original: "小出運輸",
		hiragana: "こいでうんゆ"
	},
	{
		original: "有限会社古賀運送",
		hiragana: "ゆうげんがいしゃこがうんそう"
	},
	{
		original: "セイノーホールディングス",
		hiragana: "せいのーほーるでぃんぐす"
	},
	{
		original: "有限会社長瀬運送",
		hiragana: "ゆうげんがいしゃながせうんそう"
	},
	{
		original: "相和運輸倉庫",
		hiragana: "そうわうんゆそうこ"
	},
	{
		original: "沼南運送有限会社",
		hiragana: "しょうなんうんそうゆうげんがいしゃ"
	},
	{
		original: "有限会社小松﨑運輸",
		hiragana: "ゆうげんがいしゃこまつこまつうんゆ"
	},
	{
		original: "有限会社大一運送",
		hiragana: "ゆうげんがいしゃひろかずうんそう"
	},
	{
		original: "若竹流通",
		hiragana: "わかたけりゅうつう"
	},
	{
		original: "タカモク運送",
		hiragana: "たかもくうんそう"
	},
	{
		original: "高久運輸",
		hiragana: "たかくうんゆ"
	},
	{
		original: "王庫運輸有限会社",
		hiragana: "おうこうんゆゆうげんがいしゃ"
	},
	{
		original: "新栄運送有限会社",
		hiragana: "しんえいうんそうゆうげんがいしゃ"
	},
	{
		original: "有限会社誠心サービス",
		hiragana: "ゆうげんがいしゃせいしんさーびす"
	},
	{
		original: "有限会社大西運送",
		hiragana: "ゆうげんがいしゃおおにしうんそう"
	},
	{
		original: "有限会社戸田運送",
		hiragana: "ゆうげんがいしゃとだうんそう"
	},
	{
		original: "リープ",
		hiragana: "りーぷ"
	},
	{
		original: "森田組運輸",
		hiragana: "もりたくみうんゆ"
	},
	{
		original: "有限会社新市運送",
		hiragana: "ゆうげんがいしゃしんいちうんそう"
	},
	{
		original: "かなめ流通サービス",
		hiragana: "かなめりゅうつうさーびす"
	},
	{
		original: "光黄運輸有限会社",
		hiragana: "ひかりきうんゆゆうげんがいしゃ"
	},
	{
		original: "有限会社新進運輸",
		hiragana: "ゆうげんがいしゃしんしんうんゆ"
	},
	{
		original: "有限会社中央運送店",
		hiragana: "ゆうげんがいしゃちゅうおううんそうてん"
	},
	{
		original: "有限会社諏訪運送店",
		hiragana: "ゆうげんがいしゃすわうんそうてん"
	},
	{
		original: "まるま陸送",
		hiragana: "まるまりくそう"
	},
	{
		original: "アドバンス",
		hiragana: "あどばんす"
	},
	{
		original: "上中運送",
		hiragana: "かみなかうんそう"
	},
	{
		original: "有限会社与板運輸",
		hiragana: "ゆうげんがいしゃよいたうんゆ"
	},
	{
		original: "大源水産",
		hiragana: "だいげんすいさん"
	},
	{
		original: "信興運輸",
		hiragana: "のぶおきうんゆ"
	},
	{
		original: "関西丸運",
		hiragana: "かんさいまるうん"
	},
	{
		original: "オルティー",
		hiragana: "おるてぃー"
	},
	{
		original: "ムーンロジスティクス",
		hiragana: "むーんろじすてぃくす"
	},
	{
		original: "有限会社小川運輸",
		hiragana: "ゆうげんがいしゃおがわうんゆ"
	},
	{
		original: "深谷運送有限会社",
		hiragana: "ふかやうんそうゆうげんがいしゃ"
	},
	{
		original: "有限会社横山商事",
		hiragana: "ゆうげんがいしゃよこやましょうじ"
	},
	{
		original: "松井運送",
		hiragana: "まついうんそう"
	},
	{
		original: "有限会社愛誠",
		hiragana: "ゆうげんがいしゃあいまこと"
	},
	{
		original: "中吉野運送",
		hiragana: "なかよしのうんそう"
	},
	{
		original: "西部流通サービス",
		hiragana: "せいぶりゅうつうさーびす"
	},
	{
		original: "有限会社福岡興業",
		hiragana: "ゆうげんがいしゃふくおかこうぎょう"
	},
	{
		original: "櫻商事",
		hiragana: "さくらしょうじ"
	},
	{
		original: "有限会社明鉄運輸",
		hiragana: "ゆうげんがいしゃめいてつうんゆ"
	},
	{
		original: "山下商事運輸",
		hiragana: "やましたしょうじうんゆ"
	},
	{
		original: "有限会社浦辺運送",
		hiragana: "ゆうげんがいしゃうらべうんそう"
	},
	{
		original: "井口運輸",
		hiragana: "いのくちうんゆ"
	},
	{
		original: "有限会社篠崎運送店",
		hiragana: "ゆうげんがいしゃしのざきうんそうてん"
	},
	{
		original: "運び屋",
		hiragana: "はこびや"
	},
	{
		original: "大成アシスト",
		hiragana: "たいせいあしすと"
	},
	{
		original: "有限会社田口運輸",
		hiragana: "ゆうげんがいしゃたぐちうんゆ"
	},
	{
		original: "札幌総輪",
		hiragana: "さっぽろそうりん"
	},
	{
		original: "深江運送",
		hiragana: "ふかえうんそう"
	},
	{
		original: "有限会社エスピーシー物流",
		hiragana: "ゆうげんがいしゃえすぴーしーぶつりゅう"
	},
	{
		original: "有限会社ヤワラ",
		hiragana: "ゆうげんがいしゃやわら"
	},
	{
		original: "プログレス・エム有限会社",
		hiragana: "ぷろぐれす・えむゆうげんがいしゃ"
	},
	{
		original: "有限会社上沢商事",
		hiragana: "ゆうげんがいしゃかみさわしょうじ"
	},
	{
		original: "丸岩運輸",
		hiragana: "まるいわうんゆ"
	},
	{
		original: "大一運送",
		hiragana: "ひろかずうんそう"
	},
	{
		original: "平和運輸",
		hiragana: "へいわうんゆ"
	},
	{
		original: "トウセイサービス有限会社",
		hiragana: "とうせいさーびすゆうげんがいしゃ"
	},
	{
		original: "岩井流通輸送",
		hiragana: "いわいりゅうつうゆそう"
	},
	{
		original: "つくば物流有限会社",
		hiragana: "つくばぶつりゅうゆうげんがいしゃ"
	},
	{
		original: "有限会社穂高運輸",
		hiragana: "ゆうげんがいしゃほだかうんゆ"
	},
	{
		original: "マルヨ",
		hiragana: "まるよ"
	},
	{
		original: "スギウラ物流有限会社",
		hiragana: "すぎうらぶつりゅうゆうげんがいしゃ"
	},
	{
		original: "有限会社東運輸",
		hiragana: "ゆうげんがいしゃひがしうんゆ"
	},
	{
		original: "杉本商事有限会社",
		hiragana: "すぎもとしょうじゆうげんがいしゃ"
	},
	{
		original: "ミノツ",
		hiragana: "みのつ"
	},
	{
		original: "有限会社ヤマモリ運送",
		hiragana: "ゆうげんがいしゃやまもりうんそう"
	},
	{
		original: "ＡＺ‐ＣＯＭ丸和ホールディングス",
		hiragana: "ＡＺ‐ＣＯＭまるわほーるでぃんぐす"
	},
	{
		original: "有限会社小野商事",
		hiragana: "ゆうげんがいしゃおのしょうじ"
	},
	{
		original: "道水運輸",
		hiragana: "みちすいうんゆ"
	},
	{
		original: "多功物流",
		hiragana: "たこうぶつりゅう"
	},
	{
		original: "高槻旭運送",
		hiragana: "たかつきあさひうんそう"
	},
	{
		original: "大平運送有限会社",
		hiragana: "おおひらうんそうゆうげんがいしゃ"
	},
	{
		original: "くぼしょう",
		hiragana: "くぼしょう"
	},
	{
		original: "協進運輸",
		hiragana: "きょうしんうんゆ"
	},
	{
		original: "有限会社さくら運輸",
		hiragana: "ゆうげんがいしゃさくらうんゆ"
	},
	{
		original: "中部流通",
		hiragana: "ちゅうぶりゅうつう"
	},
	{
		original: "有限会社伊藤運送",
		hiragana: "ゆうげんがいしゃいとううんそう"
	},
	{
		original: "有限会社清水ピアノ配送センター",
		hiragana: "ゆうげんがいしゃしみずぴあのはいそうせんたー"
	},
	{
		original: "有限会社草田産業",
		hiragana: "ゆうげんがいしゃくさださんぎょう"
	},
	{
		original: "野口運送有限会社",
		hiragana: "のぐちうんそうゆうげんがいしゃ"
	},
	{
		original: "有限会社ヒロキ商運",
		hiragana: "ゆうげんがいしゃひろきしょううん"
	},
	{
		original: "丸昌運輸有限会社",
		hiragana: "まるしょううんゆゆうげんがいしゃ"
	},
	{
		original: "北新流通",
		hiragana: "きたしんりゅうつう"
	},
	{
		original: "大阪石部運輸倉庫",
		hiragana: "おおさかいしべうんゆそうこ"
	},
	{
		original: "新大和興運",
		hiragana: "しんだいわきょううん"
	},
	{
		original: "白瀬運輸",
		hiragana: "しらせうんゆ"
	},
	{
		original: "有限会社藤木運送",
		hiragana: "ゆうげんがいしゃふじきうんそう"
	},
	{
		original: "グローバル・サービス",
		hiragana: "ぐろーばる・さーびす"
	},
	{
		original: "有限会社岩中運送",
		hiragana: "ゆうげんがいしゃいわなかうんそう"
	},
	{
		original: "明作運輸",
		hiragana: "めいさくうんゆ"
	},
	{
		original: "有限会社彰栄運輸",
		hiragana: "ゆうげんがいしゃしょうえいうんゆ"
	},
	{
		original: "丹治運輸",
		hiragana: "たんじうんゆ"
	},
	{
		original: "有限会社ケイケイ環境サービス",
		hiragana: "ゆうげんがいしゃけいけいかんきょうさーびす"
	},
	{
		original: "有限会社テクノ通信",
		hiragana: "ゆうげんがいしゃてくのつうしん"
	},
	{
		original: "有限会社鷹巣砂利採集所",
		hiragana: "ゆうげんがいしゃたかのすじゃりさいしゅうところ"
	},
	{
		original: "山本運送有限会社",
		hiragana: "やまもとうんそうゆうげんがいしゃ"
	},
	{
		original: "ケイ・アンド・ユー",
		hiragana: "けい・あんど・ゆー"
	},
	{
		original: "有限会社丸進運輸",
		hiragana: "ゆうげんがいしゃまるしんうんゆ"
	},
	{
		original: "小田原倉庫運輸",
		hiragana: "おだわらそうこうんゆ"
	},
	{
		original: "アイトゥーライン",
		hiragana: "あいとぅーらいん"
	},
	{
		original: "岡山ロジスティックス",
		hiragana: "おかやまろじすてぃっくす"
	},
	{
		original: "有限会社福光産業",
		hiragana: "ゆうげんがいしゃふくみつさんぎょう"
	},
	{
		original: "平戸運送有限会社",
		hiragana: "ひらどうんそうゆうげんがいしゃ"
	},
	{
		original: "公栄運送有限会社",
		hiragana: "こうえいうんそうゆうげんがいしゃ"
	},
	{
		original: "水戸北運輸",
		hiragana: "みときたうんゆ"
	},
	{
		original: "谷商事有限会社",
		hiragana: "たにしょうじゆうげんがいしゃ"
	},
	{
		original: "有限会社瀧本急送",
		hiragana: "ゆうげんがいしゃたきもときゅうそう"
	},
	{
		original: "近藤運輸",
		hiragana: "こんどううんゆ"
	},
	{
		original: "友喜輸送",
		hiragana: "ともきゆそう"
	},
	{
		original: "関東鈴鹿配送",
		hiragana: "かんとうすずかはいそう"
	},
	{
		original: "有限会社藤本運送",
		hiragana: "ゆうげんがいしゃふじもとうんそう"
	},
	{
		original: "長島倉庫",
		hiragana: "ながしまそうこ"
	},
	{
		original: "有限会社大里運輸",
		hiragana: "ゆうげんがいしゃおおさとうんゆ"
	},
	{
		original: "有限会社大京運送",
		hiragana: "ゆうげんがいしゃだいきょううんそう"
	},
	{
		original: "有限会社鈴木興運",
		hiragana: "ゆうげんがいしゃすずききょううん"
	},
	{
		original: "プラスコミュニケーション",
		hiragana: "ぷらすこみゅにけーしょん"
	},
	{
		original: "ワールドリユース",
		hiragana: "わーるどりゆーす"
	},
	{
		original: "タカラ",
		hiragana: "たから"
	},
	{
		original: "コクブン",
		hiragana: "こくぶん"
	},
	{
		original: "有限会社坂本運送",
		hiragana: "ゆうげんがいしゃさかもとうんそう"
	},
	{
		original: "佐藤運送有限会社",
		hiragana: "さとううんそうゆうげんがいしゃ"
	},
	{
		original: "渥美陸運",
		hiragana: "あつみりくうん"
	},
	{
		original: "大航",
		hiragana: "たいこう"
	},
	{
		original: "山田港運倉庫",
		hiragana: "やまだみなとうんそうこ"
	},
	{
		original: "有限会社与野運送",
		hiragana: "ゆうげんがいしゃよのうんそう"
	},
	{
		original: "有限会社甲商事",
		hiragana: "ゆうげんがいしゃかぶとしょうじ"
	},
	{
		original: "有限会社ロードマスター",
		hiragana: "ゆうげんがいしゃろーどますたー"
	},
	{
		original: "有限会社松田運送",
		hiragana: "ゆうげんがいしゃまつだうんそう"
	},
	{
		original: "マルモリ",
		hiragana: "まるもり"
	},
	{
		original: "急運",
		hiragana: "きゅううん"
	},
	{
		original: "有限会社才谷建設",
		hiragana: "ゆうげんがいしゃさいたにけんせつ"
	},
	{
		original: "下松海陸産業",
		hiragana: "くだまつかいりくさんぎょう"
	},
	{
		original: "横山工業",
		hiragana: "よこやまこうぎょう"
	},
	{
		original: "あづみ野",
		hiragana: "あづみの"
	},
	{
		original: "セルフプライズ",
		hiragana: "せるふぷらいず"
	},
	{
		original: "有限会社北谷運輸",
		hiragana: "ゆうげんがいしゃきたたにうんゆ"
	},
	{
		original: "房州物流",
		hiragana: "ぼうしゅうぶつりゅう"
	},
	{
		original: "有限会社古城サービス",
		hiragana: "ゆうげんがいしゃこじょうさーびす"
	},
	{
		original: "丸英運輸有限会社",
		hiragana: "まるえいうんゆゆうげんがいしゃ"
	},
	{
		original: "中村運輸有限会社",
		hiragana: "なかむらうんゆゆうげんがいしゃ"
	},
	{
		original: "アシストライン",
		hiragana: "あしすとらいん"
	},
	{
		original: "ｐｕｍｐ　ｕｐ",
		hiragana: "ｐｕｍｐ　ｕｐ"
	},
	{
		original: "有限会社三幸運輸",
		hiragana: "ゆうげんがいしゃみつゆきうんゆ"
	},
	{
		original: "有限会社マルウ運輸",
		hiragana: "ゆうげんがいしゃまるううんゆ"
	},
	{
		original: "三葉陸運",
		hiragana: "みつばりくうん"
	},
	{
		original: "ヨシコンサービス有限会社",
		hiragana: "よしこんさーびすゆうげんがいしゃ"
	},
	{
		original: "共伸物流",
		hiragana: "ともしんぶつりゅう"
	},
	{
		original: "システムライナー",
		hiragana: "しすてむらいなー"
	},
	{
		original: "ＰＲＯＵＤ",
		hiragana: "ＰＲＯＵＤ"
	},
	{
		original: "インストール",
		hiragana: "いんすとーる"
	},
	{
		original: "豊運輸サービス",
		hiragana: "ゆたかうんゆさーびす"
	},
	{
		original: "中央運輸",
		hiragana: "ちゅうおううんゆ"
	},
	{
		original: "長岡物流サービス",
		hiragana: "ながおかぶつりゅうさーびす"
	},
	{
		original: "二和運輸",
		hiragana: "ふたわうんゆ"
	},
	{
		original: "有限会社幹美商店",
		hiragana: "ゆうげんがいしゃかんびしょうてん"
	},
	{
		original: "芝野運輸倉庫",
		hiragana: "しばのうんゆそうこ"
	},
	{
		original: "有限会社山二急配",
		hiragana: "ゆうげんがいしゃやまにきゅうはい"
	},
	{
		original: "東翔物流",
		hiragana: "ひがししょうぶつりゅう"
	},
	{
		original: "大日物流",
		hiragana: "だいにちぶつりゅう"
	},
	{
		original: "有限会社柘植運送",
		hiragana: "ゆうげんがいしゃつげうんそう"
	},
	{
		original: "都運送",
		hiragana: "みやこうんそう"
	},
	{
		original: "不動田運輸",
		hiragana: "ふどうたうんゆ"
	},
	{
		original: "笹沼運送有限会社",
		hiragana: "ささぬまうんそうゆうげんがいしゃ"
	},
	{
		original: "有限会社後藤鋼業",
		hiragana: "ゆうげんがいしゃごとうこうぎょう"
	},
	{
		original: "朝日陸送",
		hiragana: "あさひりくそう"
	},
	{
		original: "中原急送有限会社",
		hiragana: "なかはらきゅうそうゆうげんがいしゃ"
	},
	{
		original: "アミティー",
		hiragana: "あみてぃー"
	},
	{
		original: "有限会社北海サービス運輸",
		hiragana: "ゆうげんがいしゃほっかいさーびすうんゆ"
	},
	{
		original: "有限会社中務物流",
		hiragana: "ゆうげんがいしゃなかつかさぶつりゅう"
	},
	{
		original: "有限会社一力運送商",
		hiragana: "ゆうげんがいしゃいちりきうんそうしょう"
	},
	{
		original: "日本ＢＳＴ",
		hiragana: "にっぽんＢＳＴ"
	},
	{
		original: "大日運送有限会社",
		hiragana: "だいにちうんそうゆうげんがいしゃ"
	},
	{
		original: "有限会社久保田商店",
		hiragana: "ゆうげんがいしゃくぼたしょうてん"
	},
	{
		original: "ＴＥＡＭ２４",
		hiragana: "ＴＥＡＭ２４"
	},
	{
		original: "後藤運送",
		hiragana: "ごとううんそう"
	},
	{
		original: "黒川運送有限会社",
		hiragana: "くろかわうんそうゆうげんがいしゃ"
	},
	{
		original: "勝光山運輸",
		hiragana: "かつみつやまうんゆ"
	},
	{
		original: "鹿島ガスセンター",
		hiragana: "かしまがすせんたー"
	},
	{
		original: "有限会社セイワ",
		hiragana: "ゆうげんがいしゃせいわ"
	},
	{
		original: "ヤマキヤ",
		hiragana: "やまきや"
	},
	{
		original: "有限会社ロイヤルリース",
		hiragana: "ゆうげんがいしゃろいやるりーす"
	},
	{
		original: "利尻島運輸",
		hiragana: "りしりしまうんゆ"
	},
	{
		original: "渡部運送",
		hiragana: "わたなべうんそう"
	},
	{
		original: "サンユウ",
		hiragana: "さんゆう"
	},
	{
		original: "丸西運輸",
		hiragana: "まるにしうんゆ"
	},
	{
		original: "エヌケープラント",
		hiragana: "えぬけーぷらんと"
	},
	{
		original: "ファイン・ロジ",
		hiragana: "ふぁいん・ろじ"
	},
	{
		original: "有限会社トーノー",
		hiragana: "ゆうげんがいしゃとーのー"
	},
	{
		original: "丸ト運送",
		hiragana: "まるとうんそう"
	},
	{
		original: "栄光運輸",
		hiragana: "えいこううんゆ"
	},
	{
		original: "西葉トラフィックス",
		hiragana: "にしはとらふぃっくす"
	},
	{
		original: "山栄運送有限会社",
		hiragana: "やまえいうんそうゆうげんがいしゃ"
	},
	{
		original: "エムズライン",
		hiragana: "えむずらいん"
	},
	{
		original: "しんみらい",
		hiragana: "しんみらい"
	},
	{
		original: "オーイーシーフレイトジャパン",
		hiragana: "おーいーしーふれいとじゃぱん"
	},
	{
		original: "三原興業",
		hiragana: "みはらこうぎょう"
	},
	{
		original: "塚田運輸",
		hiragana: "つかだうんゆ"
	},
	{
		original: "有限会社隆組",
		hiragana: "ゆうげんがいしゃたかしくみ"
	},
	{
		original: "有限会社平田運輸",
		hiragana: "ゆうげんがいしゃひらたうんゆ"
	},
	{
		original: "有限会社阿久津興業",
		hiragana: "ゆうげんがいしゃあくつこうぎょう"
	},
	{
		original: "ナカムラ梱包運輸有限会社",
		hiragana: "なかむらこんぽううんゆゆうげんがいしゃ"
	},
	{
		original: "武井運送",
		hiragana: "たけいうんそう"
	},
	{
		original: "旭物流倉庫有限会社",
		hiragana: "あさひぶつりゅうそうこゆうげんがいしゃ"
	},
	{
		original: "有限会社エム・アイサービス",
		hiragana: "ゆうげんがいしゃえむ・あいさーびす"
	},
	{
		original: "協同物流",
		hiragana: "きょうどうぶつりゅう"
	},
	{
		original: "有限会社クイックライン",
		hiragana: "ゆうげんがいしゃくいっくらいん"
	},
	{
		original: "有限会社三盛運輸",
		hiragana: "ゆうげんがいしゃさんせいうんゆ"
	},
	{
		original: "東運輸",
		hiragana: "ひがしうんゆ"
	},
	{
		original: "ＫＮＲ物流",
		hiragana: "ＫＮＲぶつりゅう"
	},
	{
		original: "優心",
		hiragana: "ゆうこころ"
	},
	{
		original: "名福物流サービス",
		hiragana: "めいふくぶつりゅうさーびす"
	},
	{
		original: "フジ梱包",
		hiragana: "ふじこんぽう"
	},
	{
		original: "薄井運送有限会社",
		hiragana: "うすいうんそうゆうげんがいしゃ"
	},
	{
		original: "有限会社信州キャリッジ",
		hiragana: "ゆうげんがいしゃしんしゅうきゃりっじ"
	},
	{
		original: "荒川トランスポート",
		hiragana: "あらかわとらんすぽーと"
	},
	{
		original: "トップ・カーゴ",
		hiragana: "とっぷ・かーご"
	},
	{
		original: "松栄",
		hiragana: "しょうえい"
	},
	{
		original: "ウィル",
		hiragana: "うぃる"
	},
	{
		original: "有限会社平成運輸",
		hiragana: "ゆうげんがいしゃへいせいうんゆ"
	},
	{
		original: "ふじき運送",
		hiragana: "ふじきうんそう"
	},
	{
		original: "金澤運送",
		hiragana: "かなざわうんそう"
	},
	{
		original: "トータルネット",
		hiragana: "とーたるねっと"
	},
	{
		original: "ファーストトランスポート阪神",
		hiragana: "ふぁーすととらんすぽーとはんしん"
	},
	{
		original: "愛進物流",
		hiragana: "あいしんもつりゅう"
	},
	{
		original: "若狭産業",
		hiragana: "わかささんぎょう"
	},
	{
		original: "オモエロジステック",
		hiragana: "おもえろじすてっく"
	},
	{
		original: "有限会社県南運輸",
		hiragana: "ゆうげんがいしゃけんなんうんゆ"
	},
	{
		original: "中の島運輸",
		hiragana: "なかのしまうんゆ"
	},
	{
		original: "エレアス",
		hiragana: "えれあす"
	},
	{
		original: "マミクル",
		hiragana: "まみくる"
	},
	{
		original: "アクトシャイン",
		hiragana: "あくとしゃいん"
	},
	{
		original: "有限会社龍野巴産業",
		hiragana: "ゆうげんがいしゃたつのともえさんぎょう"
	},
	{
		original: "有限会社宇田川運輸",
		hiragana: "ゆうげんがいしゃうだがわうんゆ"
	},
	{
		original: "有限会社明友",
		hiragana: "ゆうげんがいしゃあきとも"
	},
	{
		original: "ノースジャパン",
		hiragana: "のーすじゃぱん"
	},
	{
		original: "エヌエスライン",
		hiragana: "えぬえすらいん"
	},
	{
		original: "富山建材運輸",
		hiragana: "とやまけんざいうんゆ"
	},
	{
		original: "花園運送",
		hiragana: "はなぞのうんそう"
	},
	{
		original: "竹内運輸",
		hiragana: "たけうちうんゆ"
	},
	{
		original: "有限会社磯野運送",
		hiragana: "ゆうげんがいしゃいそのうんそう"
	},
	{
		original: "有限会社ＴＲＩＯ",
		hiragana: "ゆうげんがいしゃＴＲＩＯ"
	},
	{
		original: "有限会社広島大和運輸",
		hiragana: "ゆうげんがいしゃひろしまやまとうんゆ"
	},
	{
		original: "久志本運輸有限会社",
		hiragana: "ひさしほんうんゆゆうげんがいしゃ"
	},
	{
		original: "有限会社桃神運送",
		hiragana: "ゆうげんがいしゃももかみうんそう"
	},
	{
		original: "加藤運輸",
		hiragana: "かとううんゆ"
	},
	{
		original: "みかげ運送有限会社",
		hiragana: "みかげうんそうゆうげんがいしゃ"
	},
	{
		original: "岡村運送有限会社",
		hiragana: "おかむらうんそうゆうげんがいしゃ"
	},
	{
		original: "根本運送",
		hiragana: "こんぽんうんそう"
	},
	{
		original: "有限会社東邦輸送",
		hiragana: "ゆうげんがいしゃとうほうゆそう"
	},
	{
		original: "まごころサービス社",
		hiragana: "まごころさーびすしゃ"
	},
	{
		original: "大伸運輸",
		hiragana: "たいしんうんゆ"
	},
	{
		original: "有限会社川口運送",
		hiragana: "ゆうげんがいしゃかわぐちうんそう"
	},
	{
		original: "星隈商店",
		hiragana: "ほしくましょうてん"
	},
	{
		original: "広陵",
		hiragana: "こうりょう"
	},
	{
		original: "隆盛",
		hiragana: "りゅうせい"
	},
	{
		original: "ホーセイサービス",
		hiragana: "ほーせいさーびす"
	},
	{
		original: "有限会社丸金エクスプレス",
		hiragana: "ゆうげんがいしゃまるきんえくすぷれす"
	},
	{
		original: "有限会社野村運送",
		hiragana: "ゆうげんがいしゃのむらうんそう"
	},
	{
		original: "有限会社エヌエス商事",
		hiragana: "ゆうげんがいしゃえぬえすしょうじ"
	},
	{
		original: "互幸運送有限会社",
		hiragana: "ごこううんそうゆうげんがいしゃ"
	},
	{
		original: "リーディングサポート",
		hiragana: "りーでぃんぐさぽーと"
	},
	{
		original: "有限会社群馬商流",
		hiragana: "ゆうげんがいしゃぐんましょうりゅう"
	},
	{
		original: "こんわ運輸有限会社",
		hiragana: "こんわうんゆゆうげんがいしゃ"
	},
	{
		original: "土佐木材店",
		hiragana: "とさもくざいみせ"
	},
	{
		original: "有限会社相馬重建",
		hiragana: "ゆうげんがいしゃそうまじゅうけん"
	},
	{
		original: "有限会社池田運送店",
		hiragana: "ゆうげんがいしゃいけだうんそうてん"
	},
	{
		original: "やよい運輸有限会社",
		hiragana: "やよいうんゆゆうげんがいしゃ"
	},
	{
		original: "有限会社塩田運送",
		hiragana: "ゆうげんがいしゃしおだうんそう"
	},
	{
		original: "有限会社山洋重機工事",
		hiragana: "ゆうげんがいしゃやまひろしじゅうきこうじ"
	},
	{
		original: "有限会社ワカマツ陸運",
		hiragana: "ゆうげんがいしゃわかまつりくうん"
	},
	{
		original: "有限会社石井運輸",
		hiragana: "ゆうげんがいしゃいしいうんゆ"
	},
	{
		original: "新栄輸送",
		hiragana: "しんえいゆそう"
	},
	{
		original: "小川運輸有限会社",
		hiragana: "おがわうんゆゆうげんがいしゃ"
	},
	{
		original: "柏運輸",
		hiragana: "かしわうんゆ"
	},
	{
		original: "さいえん流通センター",
		hiragana: "さいえんりゅうつうせんたー"
	},
	{
		original: "山田大丸運送有限会社",
		hiragana: "やまだだいまるうんそうゆうげんがいしゃ"
	},
	{
		original: "有限会社富士急送",
		hiragana: "ゆうげんがいしゃふじきゅうそう"
	},
	{
		original: "神戸鉄鋼運輸",
		hiragana: "こうべてっこううんゆ"
	},
	{
		original: "有限会社サトー商運",
		hiragana: "ゆうげんがいしゃさとーしょううん"
	},
	{
		original: "シティトランスポート",
		hiragana: "してぃとらんすぽーと"
	},
	{
		original: "有限会社あさみ通商",
		hiragana: "ゆうげんがいしゃあさみつうしょう"
	},
	{
		original: "新井自工",
		hiragana: "あらいじこう"
	},
	{
		original: "有限会社寺嶋運送",
		hiragana: "ゆうげんがいしゃてらしまうんそう"
	},
	{
		original: "天宝運輸倉庫",
		hiragana: "てんぽううんゆそうこ"
	},
	{
		original: "有限会社アサノ",
		hiragana: "ゆうげんがいしゃあさの"
	},
	{
		original: "Ｋ’ｓＢＯＸ",
		hiragana: "Ｋ’ｓＢＯＸ"
	},
	{
		original: "優雅興業",
		hiragana: "ゆうがこうぎょう"
	},
	{
		original: "有限会社カネショー水産",
		hiragana: "ゆうげんがいしゃかねしょーすいさん"
	},
	{
		original: "有限会社池尻運輸",
		hiragana: "ゆうげんがいしゃいけじりうんゆ"
	},
	{
		original: "長尾運輸",
		hiragana: "ながおうんゆ"
	},
	{
		original: "有限会社ユキコーポレーション",
		hiragana: "ゆうげんがいしゃゆきこーぽれーしょん"
	},
	{
		original: "有限会社増田総業",
		hiragana: "ゆうげんがいしゃますだそうぎょう"
	},
	{
		original: "エイエムネット",
		hiragana: "えいえむねっと"
	},
	{
		original: "調和陸送",
		hiragana: "ちょうわりくそう"
	},
	{
		original: "茨木小型運送",
		hiragana: "いばらきこがたうんそう"
	},
	{
		original: "名光運輸",
		hiragana: "めいひかりうんゆ"
	},
	{
		original: "奥州志紅急便",
		hiragana: "おうしゅうこころざしくれないきゅうびん"
	},
	{
		original: "仁礼物流",
		hiragana: "にれぶつりゅう"
	},
	{
		original: "周防灘運送有限会社",
		hiragana: "すおうなだうんそうゆうげんがいしゃ"
	},
	{
		original: "有限会社エスケー",
		hiragana: "ゆうげんがいしゃえすけー"
	},
	{
		original: "サンマリンエンジニアリング",
		hiragana: "さんまりんえんじにありんぐ"
	},
	{
		original: "ハマー",
		hiragana: "はまー"
	},
	{
		original: "有限会社松本運送",
		hiragana: "ゆうげんがいしゃまつもとうんそう"
	},
	{
		original: "門正運輸",
		hiragana: "もんしょううんゆ"
	},
	{
		original: "寿物流",
		hiragana: "ひさしぶつりゅう"
	},
	{
		original: "有限会社前田商事",
		hiragana: "ゆうげんがいしゃまえだしょうじ"
	},
	{
		original: "つがる運送",
		hiragana: "つがるうんそう"
	},
	{
		original: "有限会社朋生商会",
		hiragana: "ゆうげんがいしゃともなましょうかい"
	},
	{
		original: "有限会社日沼リサイクルセンター",
		hiragana: "ゆうげんがいしゃひぬまりさいくるせんたー"
	},
	{
		original: "新東梱包運輸有限会社",
		hiragana: "しんとうこんぽううんゆゆうげんがいしゃ"
	},
	{
		original: "有限会社サテライト",
		hiragana: "ゆうげんがいしゃさてらいと"
	},
	{
		original: "有限会社上条運送",
		hiragana: "ゆうげんがいしゃかみじょううんそう"
	},
	{
		original: "宮崎運送有限会社",
		hiragana: "みやざきうんそうゆうげんがいしゃ"
	},
	{
		original: "太田倉庫",
		hiragana: "おおたそうこ"
	},
	{
		original: "有限会社鹿商運輸",
		hiragana: "ゆうげんがいしゃしかしょううんゆ"
	},
	{
		original: "ＮＣＳ",
		hiragana: "ＮＣＳ"
	},
	{
		original: "ＢＯＮＤ’ｓ",
		hiragana: "ＢＯＮＤ’ｓ"
	},
	{
		original: "有限会社山本運送店",
		hiragana: "ゆうげんがいしゃやまもとうんそうてん"
	},
	{
		original: "有限会社七尾急送",
		hiragana: "ゆうげんがいしゃななおきゅうそう"
	},
	{
		original: "有限会社高橋運送",
		hiragana: "ゆうげんがいしゃたかはしうんそう"
	},
	{
		original: "有限会社オールスター",
		hiragana: "ゆうげんがいしゃおーるすたー"
	},
	{
		original: "スワロー物流上尾",
		hiragana: "すわろーぶつりゅうあげお"
	},
	{
		original: "有限会社光流通",
		hiragana: "ゆうげんがいしゃひかりりゅうつう"
	},
	{
		original: "有限会社鈴木運送",
		hiragana: "ゆうげんがいしゃすずきうんそう"
	},
	{
		original: "錦織運輸有限会社",
		hiragana: "にしきおりうんゆゆうげんがいしゃ"
	},
	{
		original: "奥泉運送",
		hiragana: "おくいずみうんそう"
	},
	{
		original: "エイワイ",
		hiragana: "えいわい"
	},
	{
		original: "関東四国運送",
		hiragana: "かんとうしこくうんそう"
	},
	{
		original: "有限会社安田大阪運送社",
		hiragana: "ゆうげんがいしゃやすだおおさかうんそうしゃ"
	},
	{
		original: "有限会社ホコトリ物流",
		hiragana: "ゆうげんがいしゃほことりぶつりゅう"
	},
	{
		original: "タナカ流通企画",
		hiragana: "たなかりゅうつうきかく"
	},
	{
		original: "有限会社山眞産業",
		hiragana: "ゆうげんがいしゃやままことさんぎょう"
	},
	{
		original: "鶴丸運送",
		hiragana: "つるまるうんそう"
	},
	{
		original: "有限会社多胡配送サービス",
		hiragana: "ゆうげんがいしゃたごはいそうさーびす"
	},
	{
		original: "有限会社エル・エス・ティー",
		hiragana: "ゆうげんがいしゃえる・えす・てぃー"
	},
	{
		original: "ハロー引越サービス",
		hiragana: "はろーひっこしさーびす"
	},
	{
		original: "山喜陸運有限会社",
		hiragana: "やまきりくうんゆうげんがいしゃ"
	},
	{
		original: "ＳＰ　ＦＡＣＴＯＲＹ",
		hiragana: "ＳＰ　ＦＡＣＴＯＲＹ"
	},
	{
		original: "有限会社すけっと運輸",
		hiragana: "ゆうげんがいしゃすけっとうんゆ"
	},
	{
		original: "西別貨物自動車有限会社",
		hiragana: "にしべつかもつじどうしゃゆうげんがいしゃ"
	},
	{
		original: "大島運輸有限会社",
		hiragana: "おおしまうんゆゆうげんがいしゃ"
	},
	{
		original: "井藤商事",
		hiragana: "いとうしょうじ"
	},
	{
		original: "八千代運送有限会社",
		hiragana: "やちようんそうゆうげんがいしゃ"
	},
	{
		original: "淡路通運",
		hiragana: "あわじつううん"
	},
	{
		original: "輝宝",
		hiragana: "てるたから"
	},
	{
		original: "合川",
		hiragana: "あいかわ"
	},
	{
		original: "永昌物流",
		hiragana: "えいしょうぶつりゅう"
	},
	{
		original: "有限会社オーケイ産交",
		hiragana: "ゆうげんがいしゃおーけいさんこう"
	},
	{
		original: "白陽運輸",
		hiragana: "しろよううんゆ"
	},
	{
		original: "有限会社丸森通商",
		hiragana: "ゆうげんがいしゃまるもりつうしょう"
	},
	{
		original: "システム物流",
		hiragana: "しすてむぶつりゅう"
	},
	{
		original: "藤宝運輸",
		hiragana: "ふじたからうんゆ"
	},
	{
		original: "有限会社山繁商事",
		hiragana: "ゆうげんがいしゃやまはんしょうじ"
	},
	{
		original: "丸菱運輸",
		hiragana: "まるびしうんゆ"
	},
	{
		original: "バイテク・シーピー",
		hiragana: "ばいてく・しーぴー"
	},
	{
		original: "有限会社清水運送",
		hiragana: "ゆうげんがいしゃしみずうんそう"
	},
	{
		original: "大阪運輸",
		hiragana: "おおさかうんゆ"
	},
	{
		original: "山本運送有限会社",
		hiragana: "やまもとうんそうゆうげんがいしゃ"
	},
	{
		original: "栗山運送",
		hiragana: "くりやまうんそう"
	},
	{
		original: "スタイル",
		hiragana: "すたいる"
	},
	{
		original: "全酪日配物流",
		hiragana: "ぜんらくにっぱいぶつりゅう"
	},
	{
		original: "タカ・コーポレーション",
		hiragana: "たか・こーぽれーしょん"
	},
	{
		original: "有限会社増田運輸",
		hiragana: "ゆうげんがいしゃますだうんゆ"
	},
	{
		original: "水野運送",
		hiragana: "みずのうんそう"
	},
	{
		original: "サクラ",
		hiragana: "さくら"
	},
	{
		original: "阿部重機運輸",
		hiragana: "あべじゅうきうんゆ"
	},
	{
		original: "有限会社村田運送",
		hiragana: "ゆうげんがいしゃむらたうんそう"
	},
	{
		original: "七戸小型運送",
		hiragana: "しちのへこがたうんそう"
	},
	{
		original: "永田商会",
		hiragana: "ながたしょうかい"
	},
	{
		original: "エクセル",
		hiragana: "えくせる"
	},
	{
		original: "原田運輸有限会社",
		hiragana: "はらだうんゆゆうげんがいしゃ"
	},
	{
		original: "有限会社渡辺運輸",
		hiragana: "ゆうげんがいしゃわたなべうんゆ"
	},
	{
		original: "マルイチ商事",
		hiragana: "まるいちしょうじ"
	},
	{
		original: "フォローウィンド",
		hiragana: "ふぉろーうぃんど"
	},
	{
		original: "有限会社魁",
		hiragana: "ゆうげんがいしゃかい"
	},
	{
		original: "有限会社東亜乳剤運輸",
		hiragana: "ゆうげんがいしゃとうあにゅうざいうんゆ"
	},
	{
		original: "有限会社宮崎ピアノ運送",
		hiragana: "ゆうげんがいしゃみやざきぴあのうんそう"
	},
	{
		original: "有限会社丸京商運",
		hiragana: "ゆうげんがいしゃまるきょうしょううん"
	},
	{
		original: "三郷食品配送センター",
		hiragana: "みさとしょくひんはいそうせんたー"
	},
	{
		original: "有限会社吉池工務店",
		hiragana: "ゆうげんがいしゃよしいけこうむてん"
	},
	{
		original: "築地運送有限会社",
		hiragana: "つきじうんそうゆうげんがいしゃ"
	},
	{
		original: "上之段運輸",
		hiragana: "うえゆきだんうんゆ"
	},
	{
		original: "有限会社梅谷冷急",
		hiragana: "ゆうげんがいしゃうめたにれいきゅう"
	},
	{
		original: "有限会社サンケイエクスプレス",
		hiragana: "ゆうげんがいしゃさんけいえくすぷれす"
	},
	{
		original: "西生商事",
		hiragana: "にしなましょうじ"
	},
	{
		original: "東洋商事",
		hiragana: "とうようしょうじ"
	},
	{
		original: "宇山運輸",
		hiragana: "うやまうんゆ"
	},
	{
		original: "有限会社山拓",
		hiragana: "ゆうげんがいしゃやまたく"
	},
	{
		original: "沖縄大成運輸",
		hiragana: "おきなわたいせいうんゆ"
	},
	{
		original: "大石運輸有限会社",
		hiragana: "おおいしうんゆゆうげんがいしゃ"
	},
	{
		original: "有限会社今村運送",
		hiragana: "ゆうげんがいしゃいまむらうんそう"
	},
	{
		original: "有限会社東城社",
		hiragana: "ゆうげんがいしゃとうじょうしゃ"
	},
	{
		original: "有限会社塩津商会",
		hiragana: "ゆうげんがいしゃしおずしょうかい"
	},
	{
		original: "タイヨーリクテム",
		hiragana: "たいよーりくてむ"
	},
	{
		original: "マルイ運送",
		hiragana: "まるいうんそう"
	},
	{
		original: "有限会社オオタ産業",
		hiragana: "ゆうげんがいしゃおおたさんぎょう"
	},
	{
		original: "桐運輸",
		hiragana: "きりうんゆ"
	},
	{
		original: "西金運輸",
		hiragana: "にしきんうんゆ"
	},
	{
		original: "花道重機開運",
		hiragana: "はなみちじゅうきかいうん"
	},
	{
		original: "遠藤運輸",
		hiragana: "えんどううんゆ"
	},
	{
		original: "久万運送有限会社",
		hiragana: "くまうんそうゆうげんがいしゃ"
	},
	{
		original: "有限会社稲一商店",
		hiragana: "ゆうげんがいしゃいねいちしょうてん"
	},
	{
		original: "東良商事",
		hiragana: "ひがしりょうしょうじ"
	},
	{
		original: "有限会社佐藤運送",
		hiragana: "ゆうげんがいしゃさとううんそう"
	},
	{
		original: "東北貨物運送",
		hiragana: "とうほくかもつうんそう"
	},
	{
		original: "有限会社西尾企画",
		hiragana: "ゆうげんがいしゃにしおきかく"
	},
	{
		original: "合田運輸",
		hiragana: "ごうだうんゆ"
	},
	{
		original: "匠コーポレーション",
		hiragana: "たくみこーぽれーしょん"
	},
	{
		original: "有限会社清水建材運輸",
		hiragana: "ゆうげんがいしゃしみずけんざいうんゆ"
	},
	{
		original: "丸義運送有限会社",
		hiragana: "まるぎうんそうゆうげんがいしゃ"
	},
	{
		original: "岡部産業運輸",
		hiragana: "おかべさんぎょううんゆ"
	},
	{
		original: "ファルコントランスポート有限会社",
		hiragana: "ふぁるこんとらんすぽーとゆうげんがいしゃ"
	},
	{
		original: "有限会社エム・ケイ運輸",
		hiragana: "ゆうげんがいしゃえむ・けいうんゆ"
	},
	{
		original: "有限会社水嶋企画",
		hiragana: "ゆうげんがいしゃみずしまきかく"
	},
	{
		original: "大津運送有限会社",
		hiragana: "おおつうんそうゆうげんがいしゃ"
	},
	{
		original: "有限会社風間運輸",
		hiragana: "ゆうげんがいしゃかざまうんゆ"
	},
	{
		original: "有限会社メガ・フリート",
		hiragana: "ゆうげんがいしゃめが・ふりーと"
	},
	{
		original: "炭谷運送",
		hiragana: "すみたにうんそう"
	},
	{
		original: "有限会社日本軽貨物盛岡",
		hiragana: "ゆうげんがいしゃにっぽんけいかもつもりおか"
	},
	{
		original: "有限会社丸直",
		hiragana: "ゆうげんがいしゃまるちょく"
	},
	{
		original: "美鈴運輸有限会社",
		hiragana: "みすずうんゆゆうげんがいしゃ"
	},
	{
		original: "興進運輸有限会社",
		hiragana: "きょうしんうんゆゆうげんがいしゃ"
	},
	{
		original: "ゴトーテクニカルサービス",
		hiragana: "ごとーてくにかるさーびす"
	},
	{
		original: "吉田運送有限会社",
		hiragana: "よしだうんそうゆうげんがいしゃ"
	},
	{
		original: "サクラ運送有限会社",
		hiragana: "さくらうんそうゆうげんがいしゃ"
	},
	{
		original: "有限会社小田多運送",
		hiragana: "ゆうげんがいしゃおだたうんそう"
	},
	{
		original: "有限会社マルニ運輸",
		hiragana: "ゆうげんがいしゃまるにうんゆ"
	},
	{
		original: "有限会社龍宮運輸",
		hiragana: "ゆうげんがいしゃりゅうぐううんゆ"
	},
	{
		original: "有限会社宇摩紙運輸",
		hiragana: "ゆうげんがいしゃうまかみうんゆ"
	},
	{
		original: "有限会社山八運送",
		hiragana: "ゆうげんがいしゃやまはちうんそう"
	},
	{
		original: "大豊運輸倉庫",
		hiragana: "たいほううんゆそうこ"
	},
	{
		original: "有限会社菊池商事",
		hiragana: "ゆうげんがいしゃきくちしょうじ"
	},
	{
		original: "有限会社大畑商店",
		hiragana: "ゆうげんがいしゃおおはたしょうてん"
	},
	{
		original: "グリット",
		hiragana: "ぐりっと"
	},
	{
		original: "有限会社成宮運送店",
		hiragana: "ゆうげんがいしゃなるみやうんそうてん"
	},
	{
		original: "エスペラント京阪",
		hiragana: "えすぺらんとけいはん"
	},
	{
		original: "有限会社陸中運輸",
		hiragana: "ゆうげんがいしゃりくちゅううんゆ"
	},
	{
		original: "有限会社マルモ物流商事",
		hiragana: "ゆうげんがいしゃまるもぶつりゅうしょうじ"
	},
	{
		original: "有限会社軽急配",
		hiragana: "ゆうげんがいしゃけいきゅうはい"
	},
	{
		original: "マルタカ",
		hiragana: "まるたか"
	},
	{
		original: "東邦石油",
		hiragana: "とうほうせきゆ"
	},
	{
		original: "Ｄａｙｌｉｇｈｔ",
		hiragana: "Ｄａｙｌｉｇｈｔ"
	},
	{
		original: "Ｍシステム",
		hiragana: "Ｍしすてむ"
	},
	{
		original: "山田運送有限会社",
		hiragana: "やまだうんそうゆうげんがいしゃ"
	},
	{
		original: "有限会社森下",
		hiragana: "ゆうげんがいしゃもりした"
	},
	{
		original: "製缶陸運",
		hiragana: "せいかんりくうん"
	},
	{
		original: "村田運輸",
		hiragana: "むらたうんゆ"
	},
	{
		original: "有限会社水島組",
		hiragana: "ゆうげんがいしゃみずしまくみ"
	},
	{
		original: "有限会社南商事",
		hiragana: "ゆうげんがいしゃみなみしょうじ"
	},
	{
		original: "小松商事",
		hiragana: "こまつしょうじ"
	},
	{
		original: "アズマエクスプレス",
		hiragana: "あずまえくすぷれす"
	},
	{
		original: "矢板貨物運送有限会社",
		hiragana: "やいたかもつうんそうゆうげんがいしゃ"
	},
	{
		original: "彩旬房",
		hiragana: "さいじゅんぼう"
	},
	{
		original: "有限会社蓼科商会",
		hiragana: "ゆうげんがいしゃたてしなしょうかい"
	},
	{
		original: "Ｍ－ＬＩＮＥ　ＴＲＡＮＳＰＯＲＴ",
		hiragana: "Ｍ－ＬＩＮＥ　ＴＲＡＮＳＰＯＲＴ"
	},
	{
		original: "段原梱包運輸",
		hiragana: "だんばらこんぽううんゆ"
	},
	{
		original: "有限会社杉山鉄構",
		hiragana: "ゆうげんがいしゃすぎやまてっこう"
	},
	{
		original: "アイエヌホールディングス",
		hiragana: "あいえぬほーるでぃんぐす"
	},
	{
		original: "岩田組",
		hiragana: "いわたくみ"
	},
	{
		original: "京葉運送有限会社",
		hiragana: "けいよううんそうゆうげんがいしゃ"
	},
	{
		original: "福田運輸有限会社",
		hiragana: "ふくだうんゆゆうげんがいしゃ"
	},
	{
		original: "あおぞら運送有限会社",
		hiragana: "あおぞらうんそうゆうげんがいしゃ"
	},
	{
		original: "埼北運輸興業",
		hiragana: "さききたうんゆこうぎょう"
	},
	{
		original: "有限会社大西組",
		hiragana: "ゆうげんがいしゃおおにしくみ"
	},
	{
		original: "丸佐",
		hiragana: "まるさ"
	},
	{
		original: "有限会社ワイド物流",
		hiragana: "ゆうげんがいしゃわいどぶつりゅう"
	},
	{
		original: "有限会社福吉運送店",
		hiragana: "ゆうげんがいしゃふくよしうんそうてん"
	},
	{
		original: "有限会社トランスポート御津",
		hiragana: "ゆうげんがいしゃとらんすぽーとみと"
	},
	{
		original: "明石重量運輸有限会社",
		hiragana: "あかしじゅうりょううんゆゆうげんがいしゃ"
	},
	{
		original: "有限会社イデナワ商事",
		hiragana: "ゆうげんがいしゃいでなわしょうじ"
	},
	{
		original: "有限会社笠原運輸",
		hiragana: "ゆうげんがいしゃかさはらうんゆ"
	},
	{
		original: "有限会社瀬川商運",
		hiragana: "ゆうげんがいしゃせがわしょううん"
	},
	{
		original: "丸近運輸",
		hiragana: "まるきんうんゆ"
	},
	{
		original: "有限会社日野産業運輸",
		hiragana: "ゆうげんがいしゃひのさんぎょううんゆ"
	},
	{
		original: "有限会社鈴鹿物流サービス",
		hiragana: "ゆうげんがいしゃすずかぶつりゅうさーびす"
	},
	{
		original: "有限会社中石運送",
		hiragana: "ゆうげんがいしゃなかいしうんそう"
	},
	{
		original: "有限会社群馬中部運送",
		hiragana: "ゆうげんがいしゃぐんまちゅうぶうんそう"
	},
	{
		original: "有限会社城松運輸",
		hiragana: "ゆうげんがいしゃしろまつうんゆ"
	},
	{
		original: "田村運輸",
		hiragana: "たむらうんゆ"
	},
	{
		original: "有限会社上田尾運輸",
		hiragana: "ゆうげんがいしゃうえだおうんゆ"
	},
	{
		original: "刈北運輸",
		hiragana: "かりきたうんゆ"
	},
	{
		original: "房総自動車",
		hiragana: "ぼうそうじどうしゃ"
	},
	{
		original: "新潟東港運輸",
		hiragana: "にいがたひがしみなとうんゆ"
	},
	{
		original: "高野臨海商事運輸部",
		hiragana: "たかのりんかいしょうじうんゆぶ"
	},
	{
		original: "ラックナム",
		hiragana: "らっくなむ"
	},
	{
		original: "北陸トキサン運輸",
		hiragana: "ほくりくときさんうんゆ"
	},
	{
		original: "有限会社篠原運送",
		hiragana: "ゆうげんがいしゃしのはらうんそう"
	},
	{
		original: "有限会社三栄興業",
		hiragana: "ゆうげんがいしゃさんえいこうぎょう"
	},
	{
		original: "有限会社渡邉産業",
		hiragana: "ゆうげんがいしゃわたなべさんぎょう"
	},
	{
		original: "エーワイ物流",
		hiragana: "えーわいぶつりゅう"
	},
	{
		original: "有限会社平成建材",
		hiragana: "ゆうげんがいしゃへいせいけんざい"
	},
	{
		original: "湊崎運送",
		hiragana: "みなとざきうんそう"
	},
	{
		original: "有限会社エムティ物流",
		hiragana: "ゆうげんがいしゃえむてぃぶつりゅう"
	},
	{
		original: "川村運送",
		hiragana: "かわむらうんそう"
	},
	{
		original: "大野梱包運輸",
		hiragana: "おおのこんぽううんゆ"
	},
	{
		original: "直入運送有限会社",
		hiragana: "なおいりうんそうゆうげんがいしゃ"
	},
	{
		original: "海老澤運輸有限会社",
		hiragana: "えびさわうんゆゆうげんがいしゃ"
	},
	{
		original: "本木運送",
		hiragana: "もときうんそう"
	},
	{
		original: "一宮運送有限会社",
		hiragana: "いちのみやうんそうゆうげんがいしゃ"
	},
	{
		original: "西川組",
		hiragana: "にしかわくみ"
	},
	{
		original: "１ＳＥＣ",
		hiragana: "１ＳＥＣ"
	},
	{
		original: "アサヒ運送有限会社",
		hiragana: "あさひうんそうゆうげんがいしゃ"
	},
	{
		original: "ミヤコホールディングス",
		hiragana: "みやこほーるでぃんぐす"
	},
	{
		original: "飯塚運送",
		hiragana: "いいづかうんそう"
	},
	{
		original: "有限会社甲陽物流",
		hiragana: "ゆうげんがいしゃこうようぶつりゅう"
	},
	{
		original: "有限会社京都タカラ運輸",
		hiragana: "ゆうげんがいしゃきょうとたからうんゆ"
	},
	{
		original: "いさた興運",
		hiragana: "いさたきょううん"
	},
	{
		original: "滝沢運送",
		hiragana: "たきざわうんそう"
	},
	{
		original: "有限会社扇運送店",
		hiragana: "ゆうげんがいしゃおうぎうんそうてん"
	},
	{
		original: "有限会社湯本運輸",
		hiragana: "ゆうげんがいしゃゆもとうんゆ"
	},
	{
		original: "有限会社山本運輸",
		hiragana: "ゆうげんがいしゃやまもとうんゆ"
	},
	{
		original: "丸七興業有限会社",
		hiragana: "まるしちこうぎょうゆうげんがいしゃ"
	},
	{
		original: "和田運輸有限会社",
		hiragana: "わだうんゆゆうげんがいしゃ"
	},
	{
		original: "有限会社郡司運送",
		hiragana: "ゆうげんがいしゃぐんじうんそう"
	},
	{
		original: "シンタ物流",
		hiragana: "しんたぶつりゅう"
	},
	{
		original: "濱田運輸",
		hiragana: "はまだうんゆ"
	},
	{
		original: "有限会社はじめ急送",
		hiragana: "ゆうげんがいしゃはじめきゅうそう"
	},
	{
		original: "新井運送",
		hiragana: "あらいうんそう"
	},
	{
		original: "ＡＺ",
		hiragana: "ＡＺ"
	},
	{
		original: "有限会社テルケンコンプリート",
		hiragana: "ゆうげんがいしゃてるけんこんぷりーと"
	},
	{
		original: "伊勢田運送有限会社",
		hiragana: "いせだうんそうゆうげんがいしゃ"
	},
	{
		original: "篠山物流",
		hiragana: "しのやまぶつりゅう"
	},
	{
		original: "群馬自工有限会社",
		hiragana: "ぐんまじこうゆうげんがいしゃ"
	},
	{
		original: "有限会社木村運輸",
		hiragana: "ゆうげんがいしゃきむらうんゆ"
	},
	{
		original: "玉川運輸",
		hiragana: "たまがわうんゆ"
	},
	{
		original: "有限会社臼三貨物配送",
		hiragana: "ゆうげんがいしゃうすさんかもつはいそう"
	},
	{
		original: "山孝ネットワーク有限会社",
		hiragana: "やまたかしねっとわーくゆうげんがいしゃ"
	},
	{
		original: "トータルプロデュースモコ",
		hiragana: "とーたるぷろでゅーすもこ"
	},
	{
		original: "有限会社千葉運送",
		hiragana: "ゆうげんがいしゃちばうんそう"
	},
	{
		original: "有限会社丸森運輸",
		hiragana: "ゆうげんがいしゃまるもりうんゆ"
	},
	{
		original: "有限会社セラオカサービス",
		hiragana: "ゆうげんがいしゃせらおかさーびす"
	},
	{
		original: "東井運輸有限会社",
		hiragana: "とういうんゆゆうげんがいしゃ"
	},
	{
		original: "有限会社ながた引越センター",
		hiragana: "ゆうげんがいしゃながたひっこしせんたー"
	},
	{
		original: "日本パック運送",
		hiragana: "にっぽんぱっくうんそう"
	},
	{
		original: "田宮運輸",
		hiragana: "たみやうんゆ"
	},
	{
		original: "有限会社新誠商事",
		hiragana: "ゆうげんがいしゃしんまことしょうじ"
	},
	{
		original: "寿産業運輸",
		hiragana: "ひさしさんぎょううんゆ"
	},
	{
		original: "有限会社大森運輸",
		hiragana: "ゆうげんがいしゃおおもりうんゆ"
	},
	{
		original: "東新運輸",
		hiragana: "ひがししんうんゆ"
	},
	{
		original: "有限会社安部商事",
		hiragana: "ゆうげんがいしゃあべしょうじ"
	},
	{
		original: "有限会社正喜運送",
		hiragana: "ゆうげんがいしゃまさきうんそう"
	},
	{
		original: "儀賀紙業",
		hiragana: "ぎがしぎょう"
	},
	{
		original: "不動運輸",
		hiragana: "ふどううんゆ"
	},
	{
		original: "有限会社荒木運輸",
		hiragana: "ゆうげんがいしゃあらきうんゆ"
	},
	{
		original: "有限会社ユーツー配送サービス",
		hiragana: "ゆうげんがいしゃゆーつーはいそうさーびす"
	},
	{
		original: "恩田運輸",
		hiragana: "おんだうんゆ"
	},
	{
		original: "有限会社猪股運輸",
		hiragana: "ゆうげんがいしゃいのまたうんゆ"
	},
	{
		original: "明三",
		hiragana: "めいさん"
	},
	{
		original: "東群ホールディングス",
		hiragana: "ひがしぐんほーるでぃんぐす"
	},
	{
		original: "有限会社安立重機運送店",
		hiragana: "ゆうげんがいしゃあだちじゅうきうんそうてん"
	},
	{
		original: "有限会社美優物流",
		hiragana: "ゆうげんがいしゃみゆぶつりゅう"
	},
	{
		original: "トーハンロジテック",
		hiragana: "とーはんろじてっく"
	},
	{
		original: "有限会社藤原建運",
		hiragana: "ゆうげんがいしゃふじわらけんうん"
	},
	{
		original: "アジアマリンファーム",
		hiragana: "あじあまりんふぁーむ"
	},
	{
		original: "有限会社東海アプローチ",
		hiragana: "ゆうげんがいしゃとうかいあぷろーち"
	},
	{
		original: "有限会社近藤梱包",
		hiragana: "ゆうげんがいしゃこんどうこんぽう"
	},
	{
		original: "有限会社松田重機輸送",
		hiragana: "ゆうげんがいしゃまつだじゅうきゆそう"
	},
	{
		original: "中央物流",
		hiragana: "ちゅうおうぶつりゅう"
	},
	{
		original: "有限会社ソフトランド",
		hiragana: "ゆうげんがいしゃそふとらんど"
	},
	{
		original: "有限会社平城運輸",
		hiragana: "ゆうげんがいしゃならうんゆ"
	},
	{
		original: "阿部総業",
		hiragana: "あべそうぎょう"
	},
	{
		original: "グッドワークス",
		hiragana: "ぐっどわーくす"
	},
	{
		original: "ネクストステージ",
		hiragana: "ねくすとすてーじ"
	},
	{
		original: "ビルテック",
		hiragana: "びるてっく"
	},
	{
		original: "ライフライン",
		hiragana: "らいふらいん"
	},
	{
		original: "九州イトウ商事運輸",
		hiragana: "きゅうしゅういとうしょうじうんゆ"
	},
	{
		original: "園芸運送有限会社",
		hiragana: "えんげいうんそうゆうげんがいしゃ"
	},
	{
		original: "栃木佐野運輸",
		hiragana: "とちぎさのうんゆ"
	},
	{
		original: "みなとみらい",
		hiragana: "みなとみらい"
	},
	{
		original: "ＨＬＳ",
		hiragana: "ＨＬＳ"
	},
	{
		original: "有限会社木村運送店",
		hiragana: "ゆうげんがいしゃきむらうんそうてん"
	},
	{
		original: "有限会社太伸興産",
		hiragana: "ゆうげんがいしゃたしんこうさん"
	},
	{
		original: "滋賀・大阪イトウ商事運輸",
		hiragana: "しが・おおさかいとうしょうじうんゆ"
	},
	{
		original: "有限会社タイコウ総合建設",
		hiragana: "ゆうげんがいしゃたいこうそうごうけんせつ"
	},
	{
		original: "岩多陸運有限会社",
		hiragana: "いわたりくうんゆうげんがいしゃ"
	},
	{
		original: "有限会社赤帽ひえだ運送",
		hiragana: "ゆうげんがいしゃあかぼうひえだうんそう"
	},
	{
		original: "エムライン",
		hiragana: "えむらいん"
	},
	{
		original: "有限会社ブルハ",
		hiragana: "ゆうげんがいしゃぶるは"
	},
	{
		original: "大和ロジテック",
		hiragana: "やまとろじてっく"
	},
	{
		original: "有限会社加美小型運送",
		hiragana: "ゆうげんがいしゃかみこがたうんそう"
	},
	{
		original: "池元商事",
		hiragana: "いけもとしょうじ"
	},
	{
		original: "有限会社丸八",
		hiragana: "ゆうげんがいしゃまるはち"
	},
	{
		original: "山﨑産業",
		hiragana: "やまやまさんぎょう"
	},
	{
		original: "木村商事",
		hiragana: "きむらしょうじ"
	},
	{
		original: "有限会社はなまるライン",
		hiragana: "ゆうげんがいしゃはなまるらいん"
	},
	{
		original: "高萩陸運有限会社",
		hiragana: "たかはぎりくうんゆうげんがいしゃ"
	},
	{
		original: "眞協運輸",
		hiragana: "まこときょううんゆ"
	},
	{
		original: "富田梱包有限会社",
		hiragana: "とみたこんぽうゆうげんがいしゃ"
	},
	{
		original: "有限会社高野運輸",
		hiragana: "ゆうげんがいしゃたかのうんゆ"
	},
	{
		original: "林物流有限会社",
		hiragana: "はやしぶつりゅうゆうげんがいしゃ"
	},
	{
		original: "ワカサ",
		hiragana: "わかさ"
	},
	{
		original: "有限会社安田運輸",
		hiragana: "ゆうげんがいしゃやすだうんゆ"
	},
	{
		original: "中央サービス",
		hiragana: "ちゅうおうさーびす"
	},
	{
		original: "マルクス",
		hiragana: "まるくす"
	},
	{
		original: "有限会社赤松運輸",
		hiragana: "ゆうげんがいしゃあかまつうんゆ"
	},
	{
		original: "サンデリバリーサービス",
		hiragana: "さんでりばりーさーびす"
	},
	{
		original: "紀伊急送有限会社",
		hiragana: "きいきゅうそうゆうげんがいしゃ"
	},
	{
		original: "トランスポート・ミタムラ",
		hiragana: "とらんすぽーと・みたむら"
	},
	{
		original: "明之運送",
		hiragana: "あきゆきうんそう"
	},
	{
		original: "西和物流",
		hiragana: "せいわぶつりゅう"
	},
	{
		original: "有限会社高橋工業",
		hiragana: "ゆうげんがいしゃたかはしこうぎょう"
	},
	{
		original: "大台運送有限会社",
		hiragana: "おおだいうんそうゆうげんがいしゃ"
	},
	{
		original: "清一急配",
		hiragana: "せいいちきゅうはい"
	},
	{
		original: "大増運送",
		hiragana: "だいぞううんそう"
	},
	{
		original: "福岡物流センター",
		hiragana: "ふくおかぶつりゅうせんたー"
	},
	{
		original: "伸光住建",
		hiragana: "のぶみつじゅうけん"
	},
	{
		original: "矢野運輸有限会社",
		hiragana: "やのうんゆゆうげんがいしゃ"
	},
	{
		original: "有限会社青山建材運輸",
		hiragana: "ゆうげんがいしゃあおやまけんざいうんゆ"
	},
	{
		original: "有限会社ビジネス道中",
		hiragana: "ゆうげんがいしゃびじねすどうちゅう"
	},
	{
		original: "織田梱包",
		hiragana: "おだこんぽう"
	},
	{
		original: "有限会社中田運送",
		hiragana: "ゆうげんがいしゃなかだうんそう"
	},
	{
		original: "三王運輸",
		hiragana: "さんおううんゆ"
	},
	{
		original: "富士運輸",
		hiragana: "ふじうんゆ"
	},
	{
		original: "丸八運送有限会社",
		hiragana: "まるはちうんそうゆうげんがいしゃ"
	},
	{
		original: "有限会社北秀・運輸",
		hiragana: "ゆうげんがいしゃきたしゅう・うんゆ"
	},
	{
		original: "宇賀神運輸有限会社",
		hiragana: "うがじんうんゆゆうげんがいしゃ"
	},
	{
		original: "名古屋情報サービス",
		hiragana: "なごやじょうほうさーびす"
	},
	{
		original: "有限会社丸福商運",
		hiragana: "ゆうげんがいしゃまるふくしょううん"
	},
	{
		original: "有限会社平尾運送",
		hiragana: "ゆうげんがいしゃひらおうんそう"
	},
	{
		original: "有限会社貴三物流",
		hiragana: "ゆうげんがいしゃたかしさんぶつりゅう"
	},
	{
		original: "京和サービス",
		hiragana: "きょうわさーびす"
	},
	{
		original: "須崎三共運送",
		hiragana: "すさきさんきょううんそう"
	},
	{
		original: "あかね運輸有限会社",
		hiragana: "あかねうんゆゆうげんがいしゃ"
	},
	{
		original: "西村建設運輸有限会社",
		hiragana: "にしむらけんせつうんゆゆうげんがいしゃ"
	},
	{
		original: "熊本陸運",
		hiragana: "くまもとりくうん"
	},
	{
		original: "有限会社キタノ",
		hiragana: "ゆうげんがいしゃきたの"
	},
	{
		original: "有限会社溝尻組",
		hiragana: "ゆうげんがいしゃみぞしりくみ"
	},
	{
		original: "有限会社マルマン商事",
		hiragana: "ゆうげんがいしゃまるまんしょうじ"
	},
	{
		original: "公栄運輸",
		hiragana: "こうえいうんゆ"
	},
	{
		original: "名豊運送",
		hiragana: "めいほううんそう"
	},
	{
		original: "有限会社ケイエム企画",
		hiragana: "ゆうげんがいしゃけいえむきかく"
	},
	{
		original: "有限会社アスカエクスプレス",
		hiragana: "ゆうげんがいしゃあすかえくすぷれす"
	},
	{
		original: "金井運輸",
		hiragana: "かないうんゆ"
	},
	{
		original: "有限会社加藤運輸",
		hiragana: "ゆうげんがいしゃかとううんゆ"
	},
	{
		original: "オート配",
		hiragana: "おーとはい"
	},
	{
		original: "三栄運輸",
		hiragana: "さんえいうんゆ"
	},
	{
		original: "レクラーム",
		hiragana: "れくらーむ"
	},
	{
		original: "万福",
		hiragana: "ばんぷく"
	},
	{
		original: "松原運送",
		hiragana: "まつばらうんそう"
	},
	{
		original: "トーヨー物流",
		hiragana: "とーよーぶつりゅう"
	},
	{
		original: "杉浦運輸",
		hiragana: "すぎうらうんゆ"
	},
	{
		original: "岩原土石運輸有限会社",
		hiragana: "いわはらどせきうんゆゆうげんがいしゃ"
	},
	{
		original: "喜多商事",
		hiragana: "きたしょうじ"
	},
	{
		original: "ノースライナー",
		hiragana: "のーすらいなー"
	},
	{
		original: "有限会社関越コーポレーション",
		hiragana: "ゆうげんがいしゃかんえつこーぽれーしょん"
	},
	{
		original: "有限会社下越トランスポート",
		hiragana: "ゆうげんがいしゃかえつとらんすぽーと"
	},
	{
		original: "有限会社カレントウシハラ",
		hiragana: "ゆうげんがいしゃかれんとうしはら"
	},
	{
		original: "坂本興業",
		hiragana: "さかもとこうぎょう"
	},
	{
		original: "大内運送有限会社",
		hiragana: "おおうちうんそうゆうげんがいしゃ"
	},
	{
		original: "Ｍａｇｉｃａｌ　Ｌａｎｄ",
		hiragana: "Ｍａｇｉｃａｌ　Ｌａｎｄ"
	},
	{
		original: "山田運送有限会社",
		hiragana: "やまだうんそうゆうげんがいしゃ"
	},
	{
		original: "西建工業",
		hiragana: "にしけんこうぎょう"
	},
	{
		original: "ティイーエヌ",
		hiragana: "てぃいーえぬ"
	},
	{
		original: "有限会社前川運輸",
		hiragana: "ゆうげんがいしゃまえかわうんゆ"
	},
	{
		original: "大阪やよい運送",
		hiragana: "おおさかやよいうんそう"
	},
	{
		original: "田中通商有限会社",
		hiragana: "たなかつうしょうゆうげんがいしゃ"
	},
	{
		original: "城南運送",
		hiragana: "じょうなんうんそう"
	},
	{
		original: "西山運輸有限会社",
		hiragana: "にしやまうんゆゆうげんがいしゃ"
	},
	{
		original: "鈴昌輸送倉庫",
		hiragana: "すずまさゆそうそうこ"
	},
	{
		original: "有限会社川口急送運輸",
		hiragana: "ゆうげんがいしゃかわぐちきゅうそううんゆ"
	},
	{
		original: "坂元急送有限会社",
		hiragana: "さかもときゅうそうゆうげんがいしゃ"
	},
	{
		original: "合資会社ゆたか輸送",
		hiragana: "ごうしがいしゃゆたかゆそう"
	},
	{
		original: "有限会社カマタ商運",
		hiragana: "ゆうげんがいしゃかまたしょううん"
	},
	{
		original: "有限会社夏迫建設運輸",
		hiragana: "ゆうげんがいしゃなつさこけんせつうんゆ"
	},
	{
		original: "有門組",
		hiragana: "ありかどくみ"
	},
	{
		original: "有限会社いちよんさん",
		hiragana: "ゆうげんがいしゃいちよんさん"
	},
	{
		original: "サン・クラウン",
		hiragana: "さん・くらうん"
	},
	{
		original: "三井ロジテム",
		hiragana: "みついろじてむ"
	},
	{
		original: "有限会社中桐運送",
		hiragana: "ゆうげんがいしゃなかぎりうんそう"
	},
	{
		original: "滋賀自工運輸",
		hiragana: "しがじこううんゆ"
	},
	{
		original: "静岡吉川運輸有限会社",
		hiragana: "しずおかよしかわうんゆゆうげんがいしゃ"
	},
	{
		original: "星海総業有限会社",
		hiragana: "ほしうみそうぎょうゆうげんがいしゃ"
	},
	{
		original: "根本運送有限会社",
		hiragana: "こんぽんうんそうゆうげんがいしゃ"
	},
	{
		original: "東京浅草運送",
		hiragana: "とうきょうあさくさうんそう"
	},
	{
		original: "関東共栄運輸有限会社",
		hiragana: "かんとうきょうえいうんゆゆうげんがいしゃ"
	},
	{
		original: "有限会社アサヒ産業",
		hiragana: "ゆうげんがいしゃあさひさんぎょう"
	},
	{
		original: "有限会社大関急便",
		hiragana: "ゆうげんがいしゃおおぜききゅうびん"
	},
	{
		original: "有限会社神健運送",
		hiragana: "ゆうげんがいしゃかみたけしうんそう"
	},
	{
		original: "西石川運送",
		hiragana: "さいせきかわうんそう"
	},
	{
		original: "有限会社サントラフィック",
		hiragana: "ゆうげんがいしゃさんとらふぃっく"
	},
	{
		original: "有限会社レンタカーこまち",
		hiragana: "ゆうげんがいしゃれんたかーこまち"
	},
	{
		original: "光岡輸送有限会社",
		hiragana: "みつおかゆそうゆうげんがいしゃ"
	},
	{
		original: "ショーワ運輸倉庫",
		hiragana: "しょーわうんゆそうこ"
	},
	{
		original: "青山産業",
		hiragana: "あおやまさんぎょう"
	},
	{
		original: "有限会社砂丘配送",
		hiragana: "ゆうげんがいしゃさきゅうはいそう"
	},
	{
		original: "食品サービス",
		hiragana: "しょくひんさーびす"
	},
	{
		original: "太陽陸運",
		hiragana: "たいようりくうん"
	},
	{
		original: "アスモジャパン",
		hiragana: "あすもじゃぱん"
	},
	{
		original: "有限会社三須砂利",
		hiragana: "ゆうげんがいしゃみすじゃり"
	},
	{
		original: "田蔵運送店",
		hiragana: "たくらうんそうてん"
	},
	{
		original: "有限会社極東運輸",
		hiragana: "ゆうげんがいしゃきょくとううんゆ"
	},
	{
		original: "有限会社村急運輸",
		hiragana: "ゆうげんがいしゃむらきゅううんゆ"
	},
	{
		original: "有限会社巧栄サービス",
		hiragana: "ゆうげんがいしゃこうさかえさーびす"
	},
	{
		original: "原田トラストコーポレーション",
		hiragana: "はらだとらすとこーぽれーしょん"
	},
	{
		original: "有限会社大西回漕店",
		hiragana: "ゆうげんがいしゃおおにしかいそうみせ"
	},
	{
		original: "有限会社石蔵",
		hiragana: "ゆうげんがいしゃいしぐら"
	},
	{
		original: "播磨運送",
		hiragana: "はりまうんそう"
	},
	{
		original: "有限会社伊藤運送",
		hiragana: "ゆうげんがいしゃいとううんそう"
	},
	{
		original: "有限会社齋藤商事",
		hiragana: "ゆうげんがいしゃさいとうしょうじ"
	},
	{
		original: "中島運輸倉庫",
		hiragana: "なかじまうんゆそうこ"
	},
	{
		original: "緊急速配",
		hiragana: "きんきゅうそくはい"
	},
	{
		original: "内田商店",
		hiragana: "うちだしょうてん"
	},
	{
		original: "大栄通商",
		hiragana: "だいえいつうしょう"
	},
	{
		original: "松原運送有限会社",
		hiragana: "まつばらうんそうゆうげんがいしゃ"
	},
	{
		original: "フリーラン",
		hiragana: "ふりーらん"
	},
	{
		original: "松坂運輸倉庫有限会社",
		hiragana: "まつさかうんゆそうこゆうげんがいしゃ"
	},
	{
		original: "明大運送有限会社",
		hiragana: "めいだいうんそうゆうげんがいしゃ"
	},
	{
		original: "後藤建設工業",
		hiragana: "ごとうけんせつこうぎょう"
	},
	{
		original: "愛熊運輸機工",
		hiragana: "あいくまうんゆきこう"
	},
	{
		original: "辻西運輸倉庫",
		hiragana: "つじにしうんゆそうこ"
	},
	{
		original: "有限会社青葉家具運送",
		hiragana: "ゆうげんがいしゃあおばかぐうんそう"
	},
	{
		original: "恒星産業",
		hiragana: "こうせいさんぎょう"
	},
	{
		original: "有限会社石栄運送",
		hiragana: "ゆうげんがいしゃいしえいうんそう"
	},
	{
		original: "日新興運",
		hiragana: "にっしんきょううん"
	},
	{
		original: "山良運送",
		hiragana: "やまりょううんそう"
	},
	{
		original: "山田運輸有限会社",
		hiragana: "やまだうんゆゆうげんがいしゃ"
	},
	{
		original: "有限会社やながわ",
		hiragana: "ゆうげんがいしゃやながわ"
	},
	{
		original: "有限会社オーケーサービス",
		hiragana: "ゆうげんがいしゃおーけーさーびす"
	},
	{
		original: "岡田運送有限会社",
		hiragana: "おかだうんそうゆうげんがいしゃ"
	},
	{
		original: "中川運輸有限会社",
		hiragana: "なかがわうんゆゆうげんがいしゃ"
	},
	{
		original: "ＡＤＶＡＮＣＥ",
		hiragana: "ＡＤＶＡＮＣＥ"
	},
	{
		original: "有限会社マデックスサービス",
		hiragana: "ゆうげんがいしゃまでっくすさーびす"
	},
	{
		original: "京橋コーポレーション",
		hiragana: "きょうばしこーぽれーしょん"
	},
	{
		original: "東美濃運輸",
		hiragana: "ひがしみのうんゆ"
	},
	{
		original: "有限会社濵田商事",
		hiragana: "ゆうげんがいしゃしょうじ"
	},
	{
		original: "スマイル引越センター大阪南",
		hiragana: "すまいるひっこしせんたーおおさかみなみ"
	},
	{
		original: "有限会社大岡運輸",
		hiragana: "ゆうげんがいしゃおおおかうんゆ"
	},
	{
		original: "藤原運送",
		hiragana: "ふじわらうんそう"
	},
	{
		original: "丸創商運",
		hiragana: "まるそうしょううん"
	},
	{
		original: "有限会社丸井佐野陶器",
		hiragana: "ゆうげんがいしゃまるいさのとうき"
	},
	{
		original: "誠建",
		hiragana: "まことけん"
	},
	{
		original: "新興物流",
		hiragana: "しんこうぶつりゅう"
	},
	{
		original: "有限会社成川運送",
		hiragana: "ゆうげんがいしゃなりかわうんそう"
	},
	{
		original: "有限会社プロポーサージャパン松任",
		hiragana: "ゆうげんがいしゃぷろぽーさーじゃぱんまっとう"
	},
	{
		original: "セラポート",
		hiragana: "せらぽーと"
	},
	{
		original: "境川運輸商会",
		hiragana: "さかいがわうんゆしょうかい"
	},
	{
		original: "重建",
		hiragana: "じゅうけん"
	},
	{
		original: "有限会社松本運輸",
		hiragana: "ゆうげんがいしゃまつもとうんゆ"
	},
	{
		original: "ロジボン",
		hiragana: "ろじぼん"
	},
	{
		original: "邑久運輸",
		hiragana: "おくうんゆ"
	},
	{
		original: "有限会社南部運送",
		hiragana: "ゆうげんがいしゃなんぶうんそう"
	},
	{
		original: "ＨＡＴＡＮＯ",
		hiragana: "ＨＡＴＡＮＯ"
	},
	{
		original: "ベアートランスポート",
		hiragana: "べあーとらんすぽーと"
	},
	{
		original: "オーワン貿易",
		hiragana: "おーわんぼうえき"
	},
	{
		original: "オグニス",
		hiragana: "おぐにす"
	},
	{
		original: "有限会社桶川自動車",
		hiragana: "ゆうげんがいしゃおけがわじどうしゃ"
	},
	{
		original: "光泰",
		hiragana: "みつやす"
	},
	{
		original: "有限会社東日本商事",
		hiragana: "ゆうげんがいしゃひがしにほんしょうじ"
	},
	{
		original: "有限会社正龍荷役",
		hiragana: "ゆうげんがいしゃしょうりゅうにやく"
	},
	{
		original: "有限会社カネ長運輸",
		hiragana: "ゆうげんがいしゃかねちょううんゆ"
	},
	{
		original: "信光運輸",
		hiragana: "のぶみつうんゆ"
	},
	{
		original: "Ｏ‐ＳＥＶＥＮ",
		hiragana: "Ｏ‐ＳＥＶＥＮ"
	},
	{
		original: "有限会社サン・エンタープライズ",
		hiragana: "ゆうげんがいしゃさん・えんたーぷらいず"
	},
	{
		original: "杉山運送",
		hiragana: "すぎやまうんそう"
	},
	{
		original: "上岡運送",
		hiragana: "かみおかうんそう"
	},
	{
		original: "長沼運送",
		hiragana: "ながぬまうんそう"
	},
	{
		original: "中日本工業運輸",
		hiragana: "なかにほんこうぎょううんゆ"
	},
	{
		original: "有限会社都南運送",
		hiragana: "ゆうげんがいしゃとなんうんそう"
	},
	{
		original: "有限会社ケイプラン",
		hiragana: "ゆうげんがいしゃけいぷらん"
	},
	{
		original: "有限会社渡辺信一運送店",
		hiragana: "ゆうげんがいしゃわたなべしんいちうんそうてん"
	},
	{
		original: "有限会社長塚運送",
		hiragana: "ゆうげんがいしゃながつかうんそう"
	},
	{
		original: "長島運輸有限会社",
		hiragana: "ながしまうんゆゆうげんがいしゃ"
	},
	{
		original: "トラストライン",
		hiragana: "とらすとらいん"
	},
	{
		original: "イムラ運輸倉庫",
		hiragana: "いむらうんゆそうこ"
	},
	{
		original: "ディーエヌエス",
		hiragana: "でぃーえぬえす"
	},
	{
		original: "正運社",
		hiragana: "しょううんしゃ"
	},
	{
		original: "アクティカーゴシステム",
		hiragana: "あくてぃかーごしすてむ"
	},
	{
		original: "有限会社杉久保運送",
		hiragana: "ゆうげんがいしゃすぎくぼうんそう"
	},
	{
		original: "セイナン",
		hiragana: "せいなん"
	},
	{
		original: "ビーグラス",
		hiragana: "びーぐらす"
	},
	{
		original: "有限会社國分運送店",
		hiragana: "ゆうげんがいしゃこくぶんうんそうてん"
	},
	{
		original: "有限会社イーグル",
		hiragana: "ゆうげんがいしゃいーぐる"
	},
	{
		original: "有限会社行幸商会",
		hiragana: "ゆうげんがいしゃぎょうこうしょうかい"
	},
	{
		original: "アクセス",
		hiragana: "あくせす"
	},
	{
		original: "日軽",
		hiragana: "にっけい"
	},
	{
		original: "クリーン企画",
		hiragana: "くりーんきかく"
	},
	{
		original: "京成運輸",
		hiragana: "けいせいうんゆ"
	},
	{
		original: "ワールド輸送",
		hiragana: "わーるどゆそう"
	},
	{
		original: "有限会社ダイワコミニティーサービス",
		hiragana: "ゆうげんがいしゃだいわこみにてぃーさーびす"
	},
	{
		original: "有限会社宮川運送",
		hiragana: "ゆうげんがいしゃみやがわうんそう"
	},
	{
		original: "ワイズアクション",
		hiragana: "わいずあくしょん"
	},
	{
		original: "エスラン",
		hiragana: "えすらん"
	},
	{
		original: "有限会社栗田運送",
		hiragana: "ゆうげんがいしゃくりたうんそう"
	},
	{
		original: "西部産業",
		hiragana: "せいぶさんぎょう"
	},
	{
		original: "イーグル急行有限会社",
		hiragana: "いーぐるきゅうこうゆうげんがいしゃ"
	},
	{
		original: "ライゼスト",
		hiragana: "らいぜすと"
	},
	{
		original: "東海弘通",
		hiragana: "とうかいぐつう"
	},
	{
		original: "有限会社ジャパン－タビウド",
		hiragana: "ゆうげんがいしゃじゃぱん－たびうど"
	},
	{
		original: "春馨堂",
		hiragana: "はるかおるどう"
	},
	{
		original: "有限会社志な川",
		hiragana: "ゆうげんがいしゃこころざしなかわ"
	},
	{
		original: "新成商事",
		hiragana: "しんせいしょうじ"
	},
	{
		original: "サクセスロジ",
		hiragana: "さくせすろじ"
	},
	{
		original: "有限会社弘陽運輸",
		hiragana: "ゆうげんがいしゃひろしよううんゆ"
	},
	{
		original: "有限会社岡田砂利店",
		hiragana: "ゆうげんがいしゃおかだじゃりみせ"
	},
	{
		original: "塚田運輸",
		hiragana: "つかだうんゆ"
	},
	{
		original: "川村",
		hiragana: "かわむら"
	},
	{
		original: "有限会社シマサン",
		hiragana: "ゆうげんがいしゃしまさん"
	},
	{
		original: "エムワイトランスポート有限会社",
		hiragana: "えむわいとらんすぽーとゆうげんがいしゃ"
	},
	{
		original: "宮川",
		hiragana: "みやがわ"
	},
	{
		original: "有限会社太陽香川",
		hiragana: "ゆうげんがいしゃたいようかがわ"
	},
	{
		original: "有限会社水抜",
		hiragana: "ゆうげんがいしゃみずぬき"
	},
	{
		original: "双和運輸倉庫",
		hiragana: "そうわうんゆそうこ"
	},
	{
		original: "酒井運送",
		hiragana: "さかいうんそう"
	},
	{
		original: "早川運輸",
		hiragana: "はやかわうんゆ"
	},
	{
		original: "有限会社さくら商事",
		hiragana: "ゆうげんがいしゃさくらしょうじ"
	},
	{
		original: "有限会社加藤運輸",
		hiragana: "ゆうげんがいしゃかとううんゆ"
	},
	{
		original: "共栄通商",
		hiragana: "きょうえいつうしょう"
	},
	{
		original: "丸み運送有限会社",
		hiragana: "まるみうんそうゆうげんがいしゃ"
	},
	{
		original: "有限会社安藤商店",
		hiragana: "ゆうげんがいしゃあんどうしょうてん"
	},
	{
		original: "セイユウサービス",
		hiragana: "せいゆうさーびす"
	},
	{
		original: "有限会社菊地商店",
		hiragana: "ゆうげんがいしゃきくちしょうてん"
	},
	{
		original: "三光荷役サービス",
		hiragana: "さんこうにやくさーびす"
	},
	{
		original: "エール",
		hiragana: "えーる"
	},
	{
		original: "クボショウ有限会社",
		hiragana: "くぼしょうゆうげんがいしゃ"
	},
	{
		original: "有限会社坪山商店",
		hiragana: "ゆうげんがいしゃつぼやましょうてん"
	},
	{
		original: "美和運輸",
		hiragana: "みわうんゆ"
	},
	{
		original: "藤東Ｅライン",
		hiragana: "ふじひがしＥらいん"
	},
	{
		original: "クールハート",
		hiragana: "くーるはーと"
	},
	{
		original: "ＳＫＧ",
		hiragana: "ＳＫＧ"
	},
	{
		original: "有限会社伊藤建材",
		hiragana: "ゆうげんがいしゃいとうけんざい"
	},
	{
		original: "中村運輸",
		hiragana: "なかむらうんゆ"
	},
	{
		original: "ＢＬＥＳＳＩＮＧ",
		hiragana: "ＢＬＥＳＳＩＮＧ"
	},
	{
		original: "協和梱包有限会社",
		hiragana: "きょうわこんぽうゆうげんがいしゃ"
	},
	{
		original: "ユニバース",
		hiragana: "ゆにばーす"
	},
	{
		original: "イワタ",
		hiragana: "いわた"
	},
	{
		original: "ヤスオカ運輸",
		hiragana: "やすおかうんゆ"
	},
	{
		original: "有限会社プリティポーターズ神奈川",
		hiragana: "ゆうげんがいしゃぷりてぃぽーたーずかながわ"
	},
	{
		original: "青戸運送",
		hiragana: "あおとうんそう"
	},
	{
		original: "有限会社武田",
		hiragana: "ゆうげんがいしゃたけだ"
	},
	{
		original: "有限会社イケダ建機",
		hiragana: "ゆうげんがいしゃいけだけんき"
	},
	{
		original: "有限会社下山運送",
		hiragana: "ゆうげんがいしゃげざんうんそう"
	},
	{
		original: "服部モーターズ",
		hiragana: "はっとりもーたーず"
	},
	{
		original: "大垣内",
		hiragana: "おおがきない"
	},
	{
		original: "三重サービス",
		hiragana: "みえさーびす"
	},
	{
		original: "有限会社日比野商会",
		hiragana: "ゆうげんがいしゃひびのしょうかい"
	},
	{
		original: "ライズサービス",
		hiragana: "らいずさーびす"
	},
	{
		original: "有限会社久保田総業",
		hiragana: "ゆうげんがいしゃくぼたそうぎょう"
	},
	{
		original: "有限会社中芸運送店",
		hiragana: "ゆうげんがいしゃちゅうげいうんそうてん"
	},
	{
		original: "有限会社冨士綜業運輸",
		hiragana: "ゆうげんがいしゃふじそうぎょううんゆ"
	},
	{
		original: "児島青果輸送有限会社",
		hiragana: "こじませいかゆそうゆうげんがいしゃ"
	},
	{
		original: "ザ・ウェイ",
		hiragana: "ざ・うぇい"
	},
	{
		original: "長野興業運輸",
		hiragana: "ながのこうぎょううんゆ"
	},
	{
		original: "有限会社丸山運送",
		hiragana: "ゆうげんがいしゃまるやまうんそう"
	},
	{
		original: "有限会社深山運送",
		hiragana: "ゆうげんがいしゃみやまうんそう"
	},
	{
		original: "平安運輸倉庫",
		hiragana: "へいあんうんゆそうこ"
	},
	{
		original: "近交運輸",
		hiragana: "きんこううんゆ"
	},
	{
		original: "ビジネスカーゴ",
		hiragana: "びじねすかーご"
	},
	{
		original: "創和",
		hiragana: "そうわ"
	},
	{
		original: "有限会社京三山本運輸",
		hiragana: "ゆうげんがいしゃきょうぞうやまもとうんゆ"
	},
	{
		original: "きよし",
		hiragana: "きよし"
	},
	{
		original: "有限会社堤田運送",
		hiragana: "ゆうげんがいしゃつつみだうんそう"
	},
	{
		original: "田口総合",
		hiragana: "たぐちそうごう"
	},
	{
		original: "埼北自動車",
		hiragana: "さききたじどうしゃ"
	},
	{
		original: "くるまだ商会",
		hiragana: "くるまだしょうかい"
	},
	{
		original: "有限会社トランジット",
		hiragana: "ゆうげんがいしゃとらんじっと"
	},
	{
		original: "有限会社サクシード",
		hiragana: "ゆうげんがいしゃさくしーど"
	},
	{
		original: "高坂運送",
		hiragana: "たかさかうんそう"
	},
	{
		original: "エスワイ・ロジステックス",
		hiragana: "えすわい・ろじすてっくす"
	},
	{
		original: "埼玉急送",
		hiragana: "さいたまきゅうそう"
	},
	{
		original: "モリキ",
		hiragana: "もりき"
	},
	{
		original: "有限会社永幸物流",
		hiragana: "ゆうげんがいしゃえいさちぶつりゅう"
	},
	{
		original: "有限会社幸桜",
		hiragana: "ゆうげんがいしゃさちさくら"
	},
	{
		original: "友森運送有限会社",
		hiragana: "とももりうんそうゆうげんがいしゃ"
	},
	{
		original: "みやぎ",
		hiragana: "みやぎ"
	},
	{
		original: "ヤマシチ運輸",
		hiragana: "やましちうんゆ"
	},
	{
		original: "有限会社シンコー運輸",
		hiragana: "ゆうげんがいしゃしんこーうんゆ"
	},
	{
		original: "千葉運送",
		hiragana: "ちばうんそう"
	},
	{
		original: "井上運送",
		hiragana: "いのうえうんそう"
	},
	{
		original: "有限会社岩陽通商",
		hiragana: "ゆうげんがいしゃいわようつうしょう"
	},
	{
		original: "スマートビジョンロジスティクス",
		hiragana: "すまーとびじょんろじすてぃくす"
	},
	{
		original: "有限会社桔梗商事",
		hiragana: "ゆうげんがいしゃききょうしょうじ"
	},
	{
		original: "プラスエム",
		hiragana: "ぷらすえむ"
	},
	{
		original: "ブルーウィング",
		hiragana: "ぶるーうぃんぐ"
	},
	{
		original: "有限会社新名運送",
		hiragana: "ゆうげんがいしゃにいなうんそう"
	},
	{
		original: "ライフサポートカンパニー",
		hiragana: "らいふさぽーとかんぱにー"
	},
	{
		original: "エフ・ケー・ティーライン",
		hiragana: "えふ・けー・てぃーらいん"
	},
	{
		original: "有限会社井上運輸",
		hiragana: "ゆうげんがいしゃいのうえうんゆ"
	},
	{
		original: "アイティエス",
		hiragana: "あいてぃえす"
	},
	{
		original: "有限会社Ｓ．Ｎ．Ｓ運輸",
		hiragana: "ゆうげんがいしゃＳ．Ｎ．Ｓうんゆ"
	},
	{
		original: "アカネ商事",
		hiragana: "あかねしょうじ"
	},
	{
		original: "キュウケントランス有限会社",
		hiragana: "きゅうけんとらんすゆうげんがいしゃ"
	},
	{
		original: "ウエスギ運送",
		hiragana: "うえすぎうんそう"
	},
	{
		original: "Ｇｒｅｅｎ　Ｄｒｉｖｅ",
		hiragana: "Ｇｒｅｅｎ　Ｄｒｉｖｅ"
	},
	{
		original: "有限会社オトキタ陸送",
		hiragana: "ゆうげんがいしゃおときたりくそう"
	},
	{
		original: "カタヤマ配送",
		hiragana: "かたやまはいそう"
	},
	{
		original: "水口海運",
		hiragana: "みずぐちかいうん"
	},
	{
		original: "ハイマークス",
		hiragana: "はいまーくす"
	},
	{
		original: "南都開発合同会社",
		hiragana: "なんとかいはつごうどうかいしゃ"
	},
	{
		original: "名古屋トランスネット",
		hiragana: "なごやとらんすねっと"
	},
	{
		original: "有限会社ヒロ運送",
		hiragana: "ゆうげんがいしゃひろうんそう"
	},
	{
		original: "有限会社宮本石油",
		hiragana: "ゆうげんがいしゃみやもとせきゆ"
	},
	{
		original: "有限会社フォーシン",
		hiragana: "ゆうげんがいしゃふぉーしん"
	},
	{
		original: "京阪輸送有限会社",
		hiragana: "けいはんゆそうゆうげんがいしゃ"
	},
	{
		original: "マルコーオーシャン",
		hiragana: "まるこーおーしゃん"
	},
	{
		original: "江北重機運輸",
		hiragana: "こうほくじゅうきうんゆ"
	},
	{
		original: "東京井藤物流",
		hiragana: "とうきょういとうぶつりゅう"
	},
	{
		original: "クリエイティブライン",
		hiragana: "くりえいてぃぶらいん"
	},
	{
		original: "有限会社愛和運送店",
		hiragana: "ゆうげんがいしゃあいわうんそうてん"
	},
	{
		original: "有限会社吉井運送",
		hiragana: "ゆうげんがいしゃよしいうんそう"
	},
	{
		original: "高陽物流",
		hiragana: "かやぶつりゅう"
	},
	{
		original: "有限会社南部運送",
		hiragana: "ゆうげんがいしゃなんぶうんそう"
	},
	{
		original: "有限会社飛鳥",
		hiragana: "ゆうげんがいしゃあすか"
	},
	{
		original: "浅間石油",
		hiragana: "あさませきゆ"
	},
	{
		original: "長久保商事",
		hiragana: "ながくぼしょうじ"
	},
	{
		original: "前田自動車",
		hiragana: "まえだじどうしゃ"
	},
	{
		original: "ヤマエフーズ有限会社",
		hiragana: "やまえふーずゆうげんがいしゃ"
	},
	{
		original: "野田急送有限会社",
		hiragana: "のだきゅうそうゆうげんがいしゃ"
	},
	{
		original: "共成土木運輸",
		hiragana: "ともせいどぼくうんゆ"
	},
	{
		original: "有限会社生方紙器製作所",
		hiragana: "ゆうげんがいしゃうぶかたしきせいさくしょ"
	},
	{
		original: "テクノ物流倉庫",
		hiragana: "てくのぶつりゅうそうこ"
	},
	{
		original: "有限会社村上産業",
		hiragana: "ゆうげんがいしゃむらかみさんぎょう"
	},
	{
		original: "イノベーション・ファクトリー",
		hiragana: "いのべーしょん・ふぁくとりー"
	},
	{
		original: "有限会社ＡＤＶＡＮＣＥ",
		hiragana: "ゆうげんがいしゃＡＤＶＡＮＣＥ"
	},
	{
		original: "有限会社旭栄",
		hiragana: "ゆうげんがいしゃあさひさかえ"
	},
	{
		original: "有限会社ユタカ運輸",
		hiragana: "ゆうげんがいしゃゆたかうんゆ"
	},
	{
		original: "有限会社丸二物流",
		hiragana: "ゆうげんがいしゃまるにぶつりゅう"
	},
	{
		original: "亀甲運送有限会社",
		hiragana: "きっこううんそうゆうげんがいしゃ"
	},
	{
		original: "オーシャンズ",
		hiragana: "おーしゃんず"
	},
	{
		original: "有限会社北祥陸運",
		hiragana: "ゆうげんがいしゃほくしょうりくうん"
	},
	{
		original: "染翔",
		hiragana: "そめしょう"
	},
	{
		original: "岩崎運輸倉庫",
		hiragana: "いわさきうんゆそうこ"
	},
	{
		original: "Ｙ’ｓ",
		hiragana: "Ｙ’ｓ"
	},
	{
		original: "有限会社興居島運送",
		hiragana: "ゆうげんがいしゃごごしまうんそう"
	},
	{
		original: "有限会社東名急行",
		hiragana: "ゆうげんがいしゃとうめいきゅうこう"
	},
	{
		original: "一城",
		hiragana: "いちじょう"
	},
	{
		original: "有限会社新津運送",
		hiragana: "ゆうげんがいしゃにいつうんそう"
	},
	{
		original: "有限会社大慶",
		hiragana: "ゆうげんがいしゃたいけい"
	},
	{
		original: "有限会社三興運輸",
		hiragana: "ゆうげんがいしゃさんこううんゆ"
	},
	{
		original: "バーダルインターナショナル",
		hiragana: "ばーだるいんたーなしょなる"
	},
	{
		original: "大和",
		hiragana: "やまと"
	},
	{
		original: "南星有限会社",
		hiragana: "みなみほしゆうげんがいしゃ"
	},
	{
		original: "仙波",
		hiragana: "せんば"
	},
	{
		original: "有限会社アルプス",
		hiragana: "ゆうげんがいしゃあるぷす"
	},
	{
		original: "有限会社エフ・ワイ・ティ",
		hiragana: "ゆうげんがいしゃえふ・わい・てぃ"
	},
	{
		original: "東信商事運輸有限会社",
		hiragana: "とうしんしょうじうんゆゆうげんがいしゃ"
	},
	{
		original: "ルルド・ジャパン",
		hiragana: "るるど・じゃぱん"
	},
	{
		original: "イーアンドキュー",
		hiragana: "いーあんどきゅー"
	},
	{
		original: "有限会社セントラル商事",
		hiragana: "ゆうげんがいしゃせんとらるしょうじ"
	},
	{
		original: "三宅重機",
		hiragana: "みやけじゅうき"
	},
	{
		original: "有限会社エムライン",
		hiragana: "ゆうげんがいしゃえむらいん"
	},
	{
		original: "丸勝運輸",
		hiragana: "まるしょううんゆ"
	},
	{
		original: "柳沢運送",
		hiragana: "やなぎさわうんそう"
	},
	{
		original: "圓谷運輸有限会社",
		hiragana: "つぶらやうんゆゆうげんがいしゃ"
	},
	{
		original: "吉祥運輸倉庫",
		hiragana: "きちじょううんゆそうこ"
	},
	{
		original: "ウィズサービス",
		hiragana: "うぃずさーびす"
	},
	{
		original: "秋川運送",
		hiragana: "あきがわうんそう"
	},
	{
		original: "中日本倉庫",
		hiragana: "なかにほんそうこ"
	},
	{
		original: "ハヤブサ運送",
		hiragana: "はやぶさうんそう"
	},
	{
		original: "有限会社宝船商運",
		hiragana: "ゆうげんがいしゃたからぶねしょううん"
	},
	{
		original: "かぶらロジシステム",
		hiragana: "かぶらろじしすてむ"
	},
	{
		original: "有限会社ハラダ",
		hiragana: "ゆうげんがいしゃはらだ"
	},
	{
		original: "昭特運輸有限会社",
		hiragana: "あきらとくうんゆゆうげんがいしゃ"
	},
	{
		original: "有限会社ハピネスイマイ",
		hiragana: "ゆうげんがいしゃはぴねすいまい"
	},
	{
		original: "釜屋運送有限会社",
		hiragana: "かまやうんそうゆうげんがいしゃ"
	},
	{
		original: "有限会社石原機設",
		hiragana: "ゆうげんがいしゃいしはらきせつ"
	},
	{
		original: "広陵運送有限会社",
		hiragana: "こうりょううんそうゆうげんがいしゃ"
	},
	{
		original: "大智",
		hiragana: "たいち"
	},
	{
		original: "共栄商事",
		hiragana: "きょうえいしょうじ"
	},
	{
		original: "有限会社猪瀬運輸",
		hiragana: "ゆうげんがいしゃいのせうんゆ"
	},
	{
		original: "池田運送有限会社",
		hiragana: "いけだうんそうゆうげんがいしゃ"
	},
	{
		original: "琉球トータル引越サービス有限会社",
		hiragana: "りゅうきゅうとーたるひっこしさーびすゆうげんがいしゃ"
	},
	{
		original: "有限会社丸恵商事",
		hiragana: "ゆうげんがいしゃまるめぐみしょうじ"
	},
	{
		original: "有限会社前翔運輸",
		hiragana: "ゆうげんがいしゃまえしょううんゆ"
	},
	{
		original: "ダルマ運輸",
		hiragana: "だるまうんゆ"
	},
	{
		original: "内山運輸有限会社",
		hiragana: "うちやまうんゆゆうげんがいしゃ"
	},
	{
		original: "ロンドトランスポートサプライ",
		hiragana: "ろんどとらんすぽーとさぷらい"
	},
	{
		original: "今瀬運輸有限会社",
		hiragana: "いませうんゆゆうげんがいしゃ"
	},
	{
		original: "曽根運送",
		hiragana: "そねうんそう"
	},
	{
		original: "サンライズロジコム",
		hiragana: "さんらいずろじこむ"
	},
	{
		original: "有限会社アイエヌアイ運輸",
		hiragana: "ゆうげんがいしゃあいえぬあいうんゆ"
	},
	{
		original: "有限会社山畑運送",
		hiragana: "ゆうげんがいしゃやばたうんそう"
	},
	{
		original: "エー・アイ・コーポレーション",
		hiragana: "えー・あい・こーぽれーしょん"
	},
	{
		original: "松下運輸",
		hiragana: "まつしたうんゆ"
	},
	{
		original: "中屋運輸",
		hiragana: "なかやうんゆ"
	},
	{
		original: "黒鳥運送有限会社",
		hiragana: "くろとりうんそうゆうげんがいしゃ"
	},
	{
		original: "有限会社山田運輸",
		hiragana: "ゆうげんがいしゃやまだうんゆ"
	},
	{
		original: "佐野運輸",
		hiragana: "さのうんゆ"
	},
	{
		original: "関城運送有限会社",
		hiragana: "せきじょううんそうゆうげんがいしゃ"
	},
	{
		original: "有限会社梅沢運送",
		hiragana: "ゆうげんがいしゃうめさわうんそう"
	},
	{
		original: "アイ・エス・ティ",
		hiragana: "あい・えす・てぃ"
	},
	{
		original: "有限会社松島運送",
		hiragana: "ゆうげんがいしゃまつしまうんそう"
	},
	{
		original: "堀口運輸倉庫",
		hiragana: "ほりぐちうんゆそうこ"
	},
	{
		original: "有限会社太田運送",
		hiragana: "ゆうげんがいしゃおおたうんそう"
	},
	{
		original: "スマイルハート",
		hiragana: "すまいるはーと"
	},
	{
		original: "新前川運送",
		hiragana: "しんまえかわうんそう"
	},
	{
		original: "大三運送店",
		hiragana: "おおみうんそうてん"
	},
	{
		original: "有限会社クボサービス",
		hiragana: "ゆうげんがいしゃくぼさーびす"
	},
	{
		original: "有限会社岩切運送",
		hiragana: "ゆうげんがいしゃいわきりうんそう"
	},
	{
		original: "南四国運輸有限会社",
		hiragana: "みなみしこくうんゆゆうげんがいしゃ"
	},
	{
		original: "有限会社山崎物流",
		hiragana: "ゆうげんがいしゃやまざきぶつりゅう"
	},
	{
		original: "有限会社和伸運輸",
		hiragana: "ゆうげんがいしゃかずのぶうんゆ"
	},
	{
		original: "エムライン",
		hiragana: "えむらいん"
	},
	{
		original: "ハルキ運送",
		hiragana: "はるきうんそう"
	},
	{
		original: "ファースト",
		hiragana: "ふぁーすと"
	},
	{
		original: "堀内工運",
		hiragana: "ほりうちこううん"
	},
	{
		original: "立木運輸",
		hiragana: "たちぎうんゆ"
	},
	{
		original: "有限会社増田商事",
		hiragana: "ゆうげんがいしゃますだしょうじ"
	},
	{
		original: "豊興運輸天王寺社",
		hiragana: "ゆたかきょううんゆてんのうじしゃ"
	},
	{
		original: "柳川運送有限会社",
		hiragana: "やながわうんそうゆうげんがいしゃ"
	},
	{
		original: "壱岐陸運有限会社",
		hiragana: "いちしりくうんゆうげんがいしゃ"
	},
	{
		original: "有限会社尾野運送",
		hiragana: "ゆうげんがいしゃおのうんそう"
	},
	{
		original: "大成物流システム",
		hiragana: "たいせいぶつりゅうしすてむ"
	},
	{
		original: "オレンジサービス",
		hiragana: "おれんじさーびす"
	},
	{
		original: "小森谷運送",
		hiragana: "こもりやうんそう"
	},
	{
		original: "藤井クレーン",
		hiragana: "ふじいくれーん"
	},
	{
		original: "田村運送",
		hiragana: "たむらうんそう"
	},
	{
		original: "山翔",
		hiragana: "やましょう"
	},
	{
		original: "浅子重機",
		hiragana: "あさこじゅうき"
	},
	{
		original: "有限会社安達運送店",
		hiragana: "ゆうげんがいしゃあだちうんそうてん"
	},
	{
		original: "赤帽九州ロジスティックス",
		hiragana: "あかぼうきゅうしゅうろじすてぃっくす"
	},
	{
		original: "有限会社花井運送店",
		hiragana: "ゆうげんがいしゃはないうんそうてん"
	},
	{
		original: "奥田メンテナンス運輸",
		hiragana: "おくだめんてなんすうんゆ"
	},
	{
		original: "ミナト・ヒルズ社",
		hiragana: "みなと・ひるずしゃ"
	},
	{
		original: "Ｗｏｒｌｄ　ＮＥＯ",
		hiragana: "Ｗｏｒｌｄ　ＮＥＯ"
	},
	{
		original: "大越運送",
		hiragana: "おおこしうんそう"
	},
	{
		original: "有限会社渡部運送",
		hiragana: "ゆうげんがいしゃわたなべうんそう"
	},
	{
		original: "大阪丸崇運輸",
		hiragana: "おおさかまるすううんゆ"
	},
	{
		original: "松田商事",
		hiragana: "まつだしょうじ"
	},
	{
		original: "大島運輸",
		hiragana: "おおしまうんゆ"
	},
	{
		original: "テラテクニカル",
		hiragana: "てらてくにかる"
	},
	{
		original: "仙台システム輸送",
		hiragana: "せんだいしすてむゆそう"
	},
	{
		original: "若竹運輸",
		hiragana: "わかたけうんゆ"
	},
	{
		original: "有限会社菅原店",
		hiragana: "ゆうげんがいしゃすがわらみせ"
	},
	{
		original: "井上産業",
		hiragana: "いのうえさんぎょう"
	},
	{
		original: "エスポワール有限会社",
		hiragana: "えすぽわーるゆうげんがいしゃ"
	},
	{
		original: "ロジスティクス・サポート",
		hiragana: "ろじすてぃくす・さぽーと"
	},
	{
		original: "エンドラン",
		hiragana: "えんどらん"
	},
	{
		original: "セキヤ産業",
		hiragana: "せきやさんぎょう"
	},
	{
		original: "丸吉エクスプレス",
		hiragana: "まるよしえくすぷれす"
	},
	{
		original: "アシストジャパン",
		hiragana: "あしすとじゃぱん"
	},
	{
		original: "タカラ運送",
		hiragana: "たからうんそう"
	},
	{
		original: "大酪サービス",
		hiragana: "だいらくさーびす"
	},
	{
		original: "アーオイ引越センター",
		hiragana: "あーおいひっこしせんたー"
	},
	{
		original: "品川ナックス",
		hiragana: "しながわなっくす"
	},
	{
		original: "有限会社アラマキ",
		hiragana: "ゆうげんがいしゃあらまき"
	},
	{
		original: "ＮＥＸＴ　Ｌｏｇｉｓｔｉｃｓ　Ｊａｐａｎ",
		hiragana: "ＮＥＸＴ　Ｌｏｇｉｓｔｉｃｓ　Ｊａｐａｎ"
	},
	{
		original: "有限会社加藤興業",
		hiragana: "ゆうげんがいしゃかとうこうぎょう"
	},
	{
		original: "岩室商会",
		hiragana: "いわむろしょうかい"
	},
	{
		original: "ジェイ・ティー・イー",
		hiragana: "じぇい・てぃー・いー"
	},
	{
		original: "合田運送有限会社",
		hiragana: "ごうだうんそうゆうげんがいしゃ"
	},
	{
		original: "慶陽",
		hiragana: "けいよう"
	},
	{
		original: "三信組",
		hiragana: "さんしんくみ"
	},
	{
		original: "有限会社伸明運輸",
		hiragana: "ゆうげんがいしゃのぶあきうんゆ"
	},
	{
		original: "ＴＴＳ",
		hiragana: "ＴＴＳ"
	},
	{
		original: "アソート",
		hiragana: "あそーと"
	},
	{
		original: "有限会社三浦運輸",
		hiragana: "ゆうげんがいしゃみうらうんゆ"
	},
	{
		original: "ヤマヤ産業",
		hiragana: "やまやさんぎょう"
	},
	{
		original: "有限会社篠原商事",
		hiragana: "ゆうげんがいしゃしのはらしょうじ"
	},
	{
		original: "有限会社鎌田建設",
		hiragana: "ゆうげんがいしゃかまだけんせつ"
	},
	{
		original: "有限会社横山産業",
		hiragana: "ゆうげんがいしゃよこやまさんぎょう"
	},
	{
		original: "有限会社リード物流",
		hiragana: "ゆうげんがいしゃりーどぶつりゅう"
	},
	{
		original: "ヤザキ運輸",
		hiragana: "やざきうんゆ"
	},
	{
		original: "有限会社軽貨物急送",
		hiragana: "ゆうげんがいしゃけいかもつきゅうそう"
	},
	{
		original: "ムーブ",
		hiragana: "むーぶ"
	},
	{
		original: "有限会社久和里",
		hiragana: "ゆうげんがいしゃひさかずさと"
	},
	{
		original: "マルコ・オーエム物産",
		hiragana: "まるこ・おーえむぶっさん"
	},
	{
		original: "オフィス・フロンティア",
		hiragana: "おふぃす・ふろんてぃあ"
	},
	{
		original: "フコク",
		hiragana: "ふこく"
	},
	{
		original: "西川運送有限会社",
		hiragana: "にしかわうんそうゆうげんがいしゃ"
	},
	{
		original: "小沢興業",
		hiragana: "おざわこうぎょう"
	},
	{
		original: "城嶋",
		hiragana: "じょうしま"
	},
	{
		original: "有限会社えびす急配",
		hiragana: "ゆうげんがいしゃえびすきゅうはい"
	},
	{
		original: "Ｍ・Ａ－Ｌｏｇｉ",
		hiragana: "Ｍ・Ａ－Ｌｏｇｉ"
	},
	{
		original: "マルコー",
		hiragana: "まるこー"
	},
	{
		original: "兵神組運送",
		hiragana: "へいかみくみうんそう"
	},
	{
		original: "有限会社柳川運送",
		hiragana: "ゆうげんがいしゃやながわうんそう"
	},
	{
		original: "有限会社大福運輸",
		hiragana: "ゆうげんがいしゃだいふくうんゆ"
	},
	{
		original: "中急サービス",
		hiragana: "なかきゅうさーびす"
	},
	{
		original: "有限会社エムカンパニー",
		hiragana: "ゆうげんがいしゃえむかんぱにー"
	},
	{
		original: "ＲＩＣＨＥ合同会社",
		hiragana: "ＲＩＣＨＥごうどうかいしゃ"
	},
	{
		original: "有限会社ゴールド物流",
		hiragana: "ゆうげんがいしゃごーるどぶつりゅう"
	},
	{
		original: "有限会社カーゴハイヤー",
		hiragana: "ゆうげんがいしゃかーごはいやー"
	},
	{
		original: "マリオライフ",
		hiragana: "まりおらいふ"
	},
	{
		original: "阪神急送",
		hiragana: "はんしんきゅうそう"
	},
	{
		original: "ながとも",
		hiragana: "ながとも"
	},
	{
		original: "有限会社まるは運送",
		hiragana: "ゆうげんがいしゃまるはうんそう"
	},
	{
		original: "パゴタ急便有限会社",
		hiragana: "ぱごたきゅうびんゆうげんがいしゃ"
	},
	{
		original: "ユウゼン",
		hiragana: "ゆうぜん"
	},
	{
		original: "有限会社ロジスティックスナカムラ",
		hiragana: "ゆうげんがいしゃろじすてぃっくすなかむら"
	},
	{
		original: "岩本運輸",
		hiragana: "いわもとうんゆ"
	},
	{
		original: "有限会社木村商事",
		hiragana: "ゆうげんがいしゃきむらしょうじ"
	},
	{
		original: "有限会社五樹",
		hiragana: "ゆうげんがいしゃごき"
	},
	{
		original: "有限会社あっぱれ",
		hiragana: "ゆうげんがいしゃあっぱれ"
	},
	{
		original: "有限会社イーストロジ",
		hiragana: "ゆうげんがいしゃいーすとろじ"
	},
	{
		original: "Ｏｃｔｏ",
		hiragana: "Ｏｃｔｏ"
	},
	{
		original: "有限会社伸光商会",
		hiragana: "ゆうげんがいしゃのぶみつしょうかい"
	},
	{
		original: "ｋｉｍｕｒａ",
		hiragana: "ｋｉｍｕｒａ"
	},
	{
		original: "扇屋",
		hiragana: "おうぎや"
	},
	{
		original: "アントレミツハシ",
		hiragana: "あんとれみつはし"
	},
	{
		original: "有限会社宅配倶楽部",
		hiragana: "ゆうげんがいしゃたくはいくらぶ"
	},
	{
		original: "関西ロジ",
		hiragana: "かんさいろじ"
	},
	{
		original: "有限会社埼北緑花サービス",
		hiragana: "ゆうげんがいしゃさききたみどりばなさーびす"
	},
	{
		original: "有限会社フジトランスポート",
		hiragana: "ゆうげんがいしゃふじとらんすぽーと"
	},
	{
		original: "エリアサポート",
		hiragana: "えりあさぽーと"
	},
	{
		original: "有限会社日栄物産",
		hiragana: "ゆうげんがいしゃにちえいぶっさん"
	},
	{
		original: "キョードー札幌",
		hiragana: "きょーどーさっぽろ"
	},
	{
		original: "サウスワークス",
		hiragana: "さうすわーくす"
	},
	{
		original: "盛和運輸有限会社",
		hiragana: "せいわうんゆゆうげんがいしゃ"
	},
	{
		original: "知多商運",
		hiragana: "ちたしょううん"
	},
	{
		original: "はやて物流",
		hiragana: "はやてぶつりゅう"
	},
	{
		original: "有限会社山下運送店",
		hiragana: "ゆうげんがいしゃやましたうんそうてん"
	},
	{
		original: "丸幸商事",
		hiragana: "まるさちしょうじ"
	},
	{
		original: "岡山さくら運送",
		hiragana: "おかやまさくらうんそう"
	},
	{
		original: "アークテック",
		hiragana: "あーくてっく"
	},
	{
		original: "Ｋ．ｃ．ｅ",
		hiragana: "Ｋ．ｃ．ｅ"
	},
	{
		original: "旭興産運輸",
		hiragana: "あさひこうさんうんゆ"
	},
	{
		original: "ＴＳＵＫＡＳＡ",
		hiragana: "ＴＳＵＫＡＳＡ"
	},
	{
		original: "池田運送",
		hiragana: "いけだうんそう"
	},
	{
		original: "久保運送",
		hiragana: "くぼうんそう"
	},
	{
		original: "有限会社黒川運輸",
		hiragana: "ゆうげんがいしゃくろかわうんゆ"
	},
	{
		original: "琴平急配",
		hiragana: "ことひらきゅうはい"
	},
	{
		original: "岩手運輸有限会社",
		hiragana: "いわてうんゆゆうげんがいしゃ"
	},
	{
		original: "有限会社義金建設",
		hiragana: "ゆうげんがいしゃぎきんけんせつ"
	},
	{
		original: "有限会社市木運送",
		hiragana: "ゆうげんがいしゃいちきうんそう"
	},
	{
		original: "南越貨物自動車有限会社",
		hiragana: "なんえつかもつじどうしゃゆうげんがいしゃ"
	},
	{
		original: "大宮運輸有限会社",
		hiragana: "おおみやうんゆゆうげんがいしゃ"
	},
	{
		original: "鹿浜興業",
		hiragana: "しかはまこうぎょう"
	},
	{
		original: "みのりネットワーク",
		hiragana: "みのりねっとわーく"
	},
	{
		original: "シバタ通商",
		hiragana: "しばたつうしょう"
	},
	{
		original: "丸正運送有限会社",
		hiragana: "まるしょううんそうゆうげんがいしゃ"
	},
	{
		original: "有限会社山川運送",
		hiragana: "ゆうげんがいしゃやまかわうんそう"
	},
	{
		original: "有限会社道原運送",
		hiragana: "ゆうげんがいしゃみちはらうんそう"
	},
	{
		original: "リンクスパートナーズ",
		hiragana: "りんくすぱーとなーず"
	},
	{
		original: "興徳運送",
		hiragana: "こうとくうんそう"
	},
	{
		original: "有限会社ゑび屋",
		hiragana: "ゆうげんがいしゃゑびや"
	},
	{
		original: "トランスポート志貴",
		hiragana: "とらんすぽーとしき"
	},
	{
		original: "大山運輸",
		hiragana: "おおやまうんゆ"
	},
	{
		original: "三井倉庫トランスポート",
		hiragana: "みついそうことらんすぽーと"
	},
	{
		original: "スギケン",
		hiragana: "すぎけん"
	},
	{
		original: "名成商事",
		hiragana: "めいせいしょうじ"
	},
	{
		original: "共同運輸",
		hiragana: "きょうどううんゆ"
	},
	{
		original: "月岡梱包",
		hiragana: "つきおかこんぽう"
	},
	{
		original: "辻本運送",
		hiragana: "つじもとうんそう"
	},
	{
		original: "有限会社吉岡運輸",
		hiragana: "ゆうげんがいしゃよしおかうんゆ"
	},
	{
		original: "阿波重機有限会社",
		hiragana: "あわじゅうきゆうげんがいしゃ"
	},
	{
		original: "ＬＣ　Ｌｏｇｉｓｔｉｃｓ",
		hiragana: "ＬＣ　Ｌｏｇｉｓｔｉｃｓ"
	},
	{
		original: "三ツ木運送",
		hiragana: "みつぎうんそう"
	},
	{
		original: "つばさ",
		hiragana: "つばさ"
	},
	{
		original: "有限会社二橋園フローリスト",
		hiragana: "ゆうげんがいしゃにきょうそのふろーりすと"
	},
	{
		original: "トランステック",
		hiragana: "とらんすてっく"
	},
	{
		original: "有限会社金昇物流",
		hiragana: "ゆうげんがいしゃきんしょうぶつりゅう"
	},
	{
		original: "エフ・イー・エス",
		hiragana: "えふ・いー・えす"
	},
	{
		original: "伊藤陸運有限会社",
		hiragana: "いとうりくうんゆうげんがいしゃ"
	},
	{
		original: "有限会社石倉商事",
		hiragana: "ゆうげんがいしゃいしくらしょうじ"
	},
	{
		original: "田口運送有限会社",
		hiragana: "たぐちうんそうゆうげんがいしゃ"
	},
	{
		original: "タクト",
		hiragana: "たくと"
	},
	{
		original: "神奈川運輸",
		hiragana: "かながわうんゆ"
	},
	{
		original: "北糧物産",
		hiragana: "きたかてぶっさん"
	},
	{
		original: "有限会社プランニング・エフ",
		hiragana: "ゆうげんがいしゃぷらんにんぐ・えふ"
	},
	{
		original: "有限会社長谷川急送",
		hiragana: "ゆうげんがいしゃはせがわきゅうそう"
	},
	{
		original: "有限会社仲宿貨物自動車",
		hiragana: "ゆうげんがいしゃなかじゅくかもつじどうしゃ"
	},
	{
		original: "有限会社田村建材",
		hiragana: "ゆうげんがいしゃたむらけんざい"
	},
	{
		original: "有限会社アスカエイト",
		hiragana: "ゆうげんがいしゃあすかえいと"
	},
	{
		original: "有限会社九州白馬便",
		hiragana: "ゆうげんがいしゃきゅうしゅうはくばびん"
	},
	{
		original: "アオキ運輸",
		hiragana: "あおきうんゆ"
	},
	{
		original: "トラストエキスプレス",
		hiragana: "とらすとえきすぷれす"
	},
	{
		original: "有限会社都運送",
		hiragana: "ゆうげんがいしゃみやこうんそう"
	},
	{
		original: "ティーエム",
		hiragana: "てぃーえむ"
	},
	{
		original: "有限会社川﨑流通センター",
		hiragana: "ゆうげんがいしゃかわかわりゅうつうせんたー"
	},
	{
		original: "有限会社リアルタイム",
		hiragana: "ゆうげんがいしゃりあるたいむ"
	},
	{
		original: "松崎運輸有限会社",
		hiragana: "まつざきうんゆゆうげんがいしゃ"
	},
	{
		original: "山下運輸機工",
		hiragana: "やましたうんゆきこう"
	},
	{
		original: "ＭＫＵ",
		hiragana: "ＭＫＵ"
	},
	{
		original: "千秋運送有限会社",
		hiragana: "せんしゅううんそうゆうげんがいしゃ"
	},
	{
		original: "富島運輸",
		hiragana: "とみしまうんゆ"
	},
	{
		original: "有限会社トータルライン",
		hiragana: "ゆうげんがいしゃとーたるらいん"
	},
	{
		original: "ミキ梱包運輸",
		hiragana: "みきこんぽううんゆ"
	},
	{
		original: "名産梱包",
		hiragana: "めいさんこんぽう"
	},
	{
		original: "有限会社北海道栄",
		hiragana: "ゆうげんがいしゃほっかいどうさかえ"
	},
	{
		original: "総合輸送",
		hiragana: "そうごうゆそう"
	},
	{
		original: "興和自動車",
		hiragana: "こうわじどうしゃ"
	},
	{
		original: "有限会社稚内公運",
		hiragana: "ゆうげんがいしゃわっかないこううん"
	},
	{
		original: "京和興業",
		hiragana: "きょうわこうぎょう"
	},
	{
		original: "丸中運輸倉庫",
		hiragana: "まるなかうんゆそうこ"
	},
	{
		original: "高野運送有限会社",
		hiragana: "たかのうんそうゆうげんがいしゃ"
	},
	{
		original: "ＡＬＢＡ",
		hiragana: "ＡＬＢＡ"
	},
	{
		original: "松葉倉庫運輸",
		hiragana: "まつばそうこうんゆ"
	},
	{
		original: "ＫＮＰ",
		hiragana: "ＫＮＰ"
	},
	{
		original: "Ａｓｉｈａｒａ　ｌｏｇｉｓｔｉｃｓ",
		hiragana: "Ａｓｉｈａｒａ　ｌｏｇｉｓｔｉｃｓ"
	},
	{
		original: "岩野建材",
		hiragana: "いわのけんざい"
	},
	{
		original: "照輝五道陸運",
		hiragana: "しょうてるごどうろくうん"
	},
	{
		original: "有限会社富岳輸送",
		hiragana: "ゆうげんがいしゃとみたけゆそう"
	},
	{
		original: "ジットエキスプレス",
		hiragana: "じっとえきすぷれす"
	},
	{
		original: "沼尻ＨＬＤＧＳ",
		hiragana: "ぬまじりＨＬＤＧＳ"
	},
	{
		original: "島津物流有限会社",
		hiragana: "しまづぶつりゅうゆうげんがいしゃ"
	},
	{
		original: "有限会社リライエンス",
		hiragana: "ゆうげんがいしゃりらいえんす"
	},
	{
		original: "有限会社日本軽貨物",
		hiragana: "ゆうげんがいしゃにっぽんけいかもつ"
	},
	{
		original: "有限会社三ツ橋運送店",
		hiragana: "ゆうげんがいしゃみつはしうんそうてん"
	},
	{
		original: "吉祥寺総合物流",
		hiragana: "きちじょうじそうごうぶつりゅう"
	},
	{
		original: "日東運送",
		hiragana: "にっとううんそう"
	},
	{
		original: "有限会社丸協運送",
		hiragana: "ゆうげんがいしゃまるきょううんそう"
	},
	{
		original: "さくらコーポレーション",
		hiragana: "さくらこーぽれーしょん"
	},
	{
		original: "キーエイト",
		hiragana: "きーえいと"
	},
	{
		original: "有限会社昌藤社",
		hiragana: "ゆうげんがいしゃまさふじしゃ"
	},
	{
		original: "日本ルートセールス",
		hiragana: "にっぽんるーとせーるす"
	},
	{
		original: "有限会社長栄商事",
		hiragana: "ゆうげんがいしゃちょうえいしょうじ"
	},
	{
		original: "有限会社エムアイシステム",
		hiragana: "ゆうげんがいしゃえむあいしすてむ"
	},
	{
		original: "ユーイチ運送",
		hiragana: "ゆーいちうんそう"
	},
	{
		original: "加藤運送有限会社",
		hiragana: "かとううんそうゆうげんがいしゃ"
	},
	{
		original: "ティーエス企画",
		hiragana: "てぃーえすきかく"
	},
	{
		original: "有限会社小寺運送店",
		hiragana: "ゆうげんがいしゃこでらうんそうてん"
	},
	{
		original: "山本工業",
		hiragana: "やまもとこうぎょう"
	},
	{
		original: "有限会社鈴兼運輸",
		hiragana: "ゆうげんがいしゃすずけんうんゆ"
	},
	{
		original: "クールポートサービス",
		hiragana: "くーるぽーとさーびす"
	},
	{
		original: "有限会社金子",
		hiragana: "ゆうげんがいしゃかねこ"
	},
	{
		original: "共栄運輸倉庫",
		hiragana: "きょうえいうんゆそうこ"
	},
	{
		original: "コンフィアンス",
		hiragana: "こんふぃあんす"
	},
	{
		original: "有限会社吉井総業",
		hiragana: "ゆうげんがいしゃよしいそうぎょう"
	},
	{
		original: "塚田海運",
		hiragana: "つかだかいうん"
	},
	{
		original: "銀正",
		hiragana: "ぎんせい"
	},
	{
		original: "コクボロジック",
		hiragana: "こくぼろじっく"
	},
	{
		original: "ふじの運送",
		hiragana: "ふじのうんそう"
	},
	{
		original: "真藤急便",
		hiragana: "しんどうきゅうびん"
	},
	{
		original: "Ｔ・Ｒ・Ｓ",
		hiragana: "Ｔ・Ｒ・Ｓ"
	},
	{
		original: "有限会社吉野商店",
		hiragana: "ゆうげんがいしゃよしのしょうてん"
	},
	{
		original: "はなぶさ",
		hiragana: "はなぶさ"
	},
	{
		original: "有限会社片川急便",
		hiragana: "ゆうげんがいしゃかたがわきゅうびん"
	},
	{
		original: "ＮＳ・ロジスティックス",
		hiragana: "ＮＳ・ろじすてぃっくす"
	},
	{
		original: "有限会社ナガヤマ商事",
		hiragana: "ゆうげんがいしゃながやましょうじ"
	},
	{
		original: "有限会社播磨運輸",
		hiragana: "ゆうげんがいしゃはりまうんゆ"
	},
	{
		original: "桝安運送店",
		hiragana: "ますあんうんそうてん"
	},
	{
		original: "ＢＲプロシージャ",
		hiragana: "ＢＲぷろしーじゃ"
	},
	{
		original: "北海道トランス・システム",
		hiragana: "ほっかいどうとらんす・しすてむ"
	},
	{
		original: "鳥越運送",
		hiragana: "とりごえうんそう"
	},
	{
		original: "ダイシン物流",
		hiragana: "だいしんぶつりゅう"
	},
	{
		original: "ファーストクラス",
		hiragana: "ふぁーすとくらす"
	},
	{
		original: "文友社",
		hiragana: "あやともしゃ"
	},
	{
		original: "サンライン",
		hiragana: "さんらいん"
	},
	{
		original: "有限会社藁科産業",
		hiragana: "ゆうげんがいしゃわらかさんぎょう"
	},
	{
		original: "吉成商事運輸有限会社",
		hiragana: "よしなりしょうじうんゆゆうげんがいしゃ"
	},
	{
		original: "有限会社南隅物産",
		hiragana: "ゆうげんがいしゃみなみすみぶっさん"
	},
	{
		original: "有限会社西村産業",
		hiragana: "ゆうげんがいしゃにしむらさんぎょう"
	},
	{
		original: "有限会社アイタク急送",
		hiragana: "ゆうげんがいしゃあいたくきゅうそう"
	},
	{
		original: "有限会社やまおう運輸",
		hiragana: "ゆうげんがいしゃやまおううんゆ"
	},
	{
		original: "神長商事",
		hiragana: "かみながしょうじ"
	},
	{
		original: "合資会社ナトリ商行",
		hiragana: "ごうしがいしゃなとりしょうぎょう"
	},
	{
		original: "シータス",
		hiragana: "しーたす"
	},
	{
		original: "グリーン・アライアンス",
		hiragana: "ぐりーん・あらいあんす"
	},
	{
		original: "三有鉱業",
		hiragana: "さんありこうぎょう"
	},
	{
		original: "田中商事",
		hiragana: "たなかしょうじ"
	},
	{
		original: "有限会社コンコルド運送",
		hiragana: "ゆうげんがいしゃこんこるどうんそう"
	},
	{
		original: "有限会社サンケイ貨物",
		hiragana: "ゆうげんがいしゃさんけいかもつ"
	},
	{
		original: "ＷＤＳ",
		hiragana: "ＷＤＳ"
	},
	{
		original: "有限会社ケイエスケイライン",
		hiragana: "ゆうげんがいしゃけいえすけいらいん"
	},
	{
		original: "プログレス",
		hiragana: "ぷろぐれす"
	},
	{
		original: "ＬＩＦＥ　ＣＨＡＮＧＥ　ＷＯＲＫ",
		hiragana: "ＬＩＦＥ　ＣＨＡＮＧＥ　ＷＯＲＫ"
	},
	{
		original: "有限会社奥井梱包運送",
		hiragana: "ゆうげんがいしゃおくいこんぽううんそう"
	},
	{
		original: "滝本運送有限会社",
		hiragana: "たきもとうんそうゆうげんがいしゃ"
	},
	{
		original: "清水運輸",
		hiragana: "しみずうんゆ"
	},
	{
		original: "丸吉運輸有限会社",
		hiragana: "まるよしうんゆゆうげんがいしゃ"
	},
	{
		original: "深川運送有限会社",
		hiragana: "ふかがわうんそうゆうげんがいしゃ"
	},
	{
		original: "丸日運送",
		hiragana: "まるにちうんそう"
	},
	{
		original: "和納",
		hiragana: "わのう"
	},
	{
		original: "有限会社河村重機運送",
		hiragana: "ゆうげんがいしゃかわむらじゅうきうんそう"
	},
	{
		original: "マルトミ運輸",
		hiragana: "まるとみうんゆ"
	},
	{
		original: "広瀬運輸",
		hiragana: "ひろせうんゆ"
	},
	{
		original: "オクムラエンジニア",
		hiragana: "おくむらえんじにあ"
	},
	{
		original: "翔栄商事",
		hiragana: "しょうさかえしょうじ"
	},
	{
		original: "中部システムサービス有限会社",
		hiragana: "ちゅうぶしすてむさーびすゆうげんがいしゃ"
	},
	{
		original: "有限会社広島機動運輸",
		hiragana: "ゆうげんがいしゃひろしまきどううんゆ"
	},
	{
		original: "笛木運送",
		hiragana: "ふえきうんそう"
	},
	{
		original: "有限会社青木陸運",
		hiragana: "ゆうげんがいしゃあおきりくうん"
	},
	{
		original: "ハートグループ",
		hiragana: "はーとぐるーぷ"
	},
	{
		original: "アクセル",
		hiragana: "あくせる"
	},
	{
		original: "有限会社沖運送",
		hiragana: "ゆうげんがいしゃおきうんそう"
	},
	{
		original: "ｔａｋａｓｈｏ",
		hiragana: "ｔａｋａｓｈｏ"
	},
	{
		original: "有限会社ビクトリー物流",
		hiragana: "ゆうげんがいしゃびくとりーぶつりゅう"
	},
	{
		original: "丸正",
		hiragana: "まるしょう"
	},
	{
		original: "北野運送",
		hiragana: "きたのうんそう"
	},
	{
		original: "小澤運送店",
		hiragana: "おざわうんそうてん"
	},
	{
		original: "ゼロマイル",
		hiragana: "ぜろまいる"
	},
	{
		original: "ＴｒｉＶａｌｕｅ",
		hiragana: "ＴｒｉＶａｌｕｅ"
	},
	{
		original: "遠藤店",
		hiragana: "えんどうみせ"
	},
	{
		original: "ｈｉｒａｔａ",
		hiragana: "ｈｉｒａｔａ"
	},
	{
		original: "ファーストライン",
		hiragana: "ふぁーすとらいん"
	},
	{
		original: "多摩中央運送",
		hiragana: "たまちゅうおううんそう"
	},
	{
		original: "ティーワイライン",
		hiragana: "てぃーわいらいん"
	},
	{
		original: "ＭＩＮＡＭＯ",
		hiragana: "ＭＩＮＡＭＯ"
	},
	{
		original: "ｓｓｔ",
		hiragana: "ｓｓｔ"
	},
	{
		original: "和孝",
		hiragana: "わこう"
	},
	{
		original: "谷口通商",
		hiragana: "たにぐちつうしょう"
	},
	{
		original: "日本伝航",
		hiragana: "にっぽんでんこう"
	},
	{
		original: "フレクス",
		hiragana: "ふれくす"
	},
	{
		original: "大真企業",
		hiragana: "だいまこときぎょう"
	},
	{
		original: "エクストリー",
		hiragana: "えくすとりー"
	},
	{
		original: "浦田運送有限会社",
		hiragana: "うらたうんそうゆうげんがいしゃ"
	},
	{
		original: "アーロック",
		hiragana: "あーろっく"
	},
	{
		original: "銚子トランスポート",
		hiragana: "ちょうしとらんすぽーと"
	},
	{
		original: "有限会社時津運送",
		hiragana: "ゆうげんがいしゃときつうんそう"
	},
	{
		original: "オートモビール静岡",
		hiragana: "おーともびーるしずおか"
	},
	{
		original: "永井商事有限会社",
		hiragana: "ながいしょうじゆうげんがいしゃ"
	},
	{
		original: "有限会社昭和運輸",
		hiragana: "ゆうげんがいしゃしょうわうんゆ"
	},
	{
		original: "有限会社松浦商店",
		hiragana: "ゆうげんがいしゃまつうらしょうてん"
	},
	{
		original: "大丸運輸",
		hiragana: "だいまるうんゆ"
	},
	{
		original: "成龍運輸有限会社",
		hiragana: "せいりゅううんゆゆうげんがいしゃ"
	},
	{
		original: "エムトラスト",
		hiragana: "えむとらすと"
	},
	{
		original: "桑陸運輸有限会社",
		hiragana: "くわりくうんゆゆうげんがいしゃ"
	},
	{
		original: "和田運送",
		hiragana: "わだうんそう"
	},
	{
		original: "光希運輸有限会社",
		hiragana: "みきうんゆゆうげんがいしゃ"
	},
	{
		original: "有限会社下里運送",
		hiragana: "ゆうげんがいしゃしもざとうんそう"
	},
	{
		original: "木下商事",
		hiragana: "きのしたしょうじ"
	},
	{
		original: "岡本商運",
		hiragana: "おかもとしょううん"
	},
	{
		original: "ウカイ運送",
		hiragana: "うかいうんそう"
	},
	{
		original: "有限会社日本軽貨物",
		hiragana: "ゆうげんがいしゃにっぽんけいかもつ"
	},
	{
		original: "ネオクリエーションズＨＤ",
		hiragana: "ねおくりえーしょんずＨＤ"
	},
	{
		original: "有限会社広伸運輸",
		hiragana: "ゆうげんがいしゃひろのぶうんゆ"
	},
	{
		original: "オーエスピー",
		hiragana: "おーえすぴー"
	},
	{
		original: "神戸トレードマネージメント",
		hiragana: "こうべとれーどまねーじめんと"
	},
	{
		original: "有限会社スダ運送",
		hiragana: "ゆうげんがいしゃすだうんそう"
	},
	{
		original: "アークライズ",
		hiragana: "あーくらいず"
	},
	{
		original: "インストア",
		hiragana: "いんすとあ"
	},
	{
		original: "有限会社第一運輸",
		hiragana: "ゆうげんがいしゃだいいちうんゆ"
	},
	{
		original: "植田運輸",
		hiragana: "うえだうんゆ"
	},
	{
		original: "ＪＥＴ",
		hiragana: "ＪＥＴ"
	},
	{
		original: "カスガ",
		hiragana: "かすが"
	},
	{
		original: "有限会社大石興業",
		hiragana: "ゆうげんがいしゃおおいしこうぎょう"
	},
	{
		original: "中村急配",
		hiragana: "なかむらきゅうはい"
	},
	{
		original: "おおした商事",
		hiragana: "おおしたしょうじ"
	},
	{
		original: "藤栄運輸",
		hiragana: "ふじえうんゆ"
	},
	{
		original: "ライフクリエイトサービス",
		hiragana: "らいふくりえいとさーびす"
	},
	{
		original: "新宮合同運送",
		hiragana: "しんぐうごうどううんそう"
	},
	{
		original: "Ｋ２",
		hiragana: "Ｋ２"
	},
	{
		original: "長谷川倉庫自動車",
		hiragana: "はせがわそうこじどうしゃ"
	},
	{
		original: "神谷運輸",
		hiragana: "かみやうんゆ"
	},
	{
		original: "有限会社善貴運輸",
		hiragana: "ゆうげんがいしゃぜんたかしうんゆ"
	},
	{
		original: "ビット",
		hiragana: "びっと"
	},
	{
		original: "グローリーライン",
		hiragana: "ぐろーりーらいん"
	},
	{
		original: "クラルス",
		hiragana: "くらるす"
	},
	{
		original: "エスワイエヌトレーディング",
		hiragana: "えすわいえぬとれーでぃんぐ"
	},
	{
		original: "深山総合開発",
		hiragana: "みやまそうごうかいはつ"
	},
	{
		original: "三高運輸",
		hiragana: "さんこううんゆ"
	},
	{
		original: "有限会社安田運送",
		hiragana: "ゆうげんがいしゃやすだうんそう"
	},
	{
		original: "有限会社カマチ",
		hiragana: "ゆうげんがいしゃかまち"
	},
	{
		original: "竹田産業",
		hiragana: "たけださんぎょう"
	},
	{
		original: "旭運輸",
		hiragana: "あさひうんゆ"
	},
	{
		original: "アップ",
		hiragana: "あっぷ"
	},
	{
		original: "日南運輸",
		hiragana: "にちなんうんゆ"
	},
	{
		original: "石村商事",
		hiragana: "いしむらしょうじ"
	},
	{
		original: "トラストサービス",
		hiragana: "とらすとさーびす"
	},
	{
		original: "サニー企画",
		hiragana: "さにーきかく"
	},
	{
		original: "ディレクト",
		hiragana: "でぃれくと"
	},
	{
		original: "Ｍ’ｓライン",
		hiragana: "Ｍ’ｓらいん"
	},
	{
		original: "金江運送有限会社",
		hiragana: "きんこううんそうゆうげんがいしゃ"
	},
	{
		original: "有限会社サムシング",
		hiragana: "ゆうげんがいしゃさむしんぐ"
	},
	{
		original: "有限会社明正運輸",
		hiragana: "ゆうげんがいしゃあきまさうんゆ"
	},
	{
		original: "親和運輸",
		hiragana: "しんわうんゆ"
	},
	{
		original: "観音運送",
		hiragana: "かんのんうんそう"
	},
	{
		original: "内田運送",
		hiragana: "うちだうんそう"
	},
	{
		original: "飛鳥",
		hiragana: "あすか"
	},
	{
		original: "大日運輸",
		hiragana: "だいにちうんゆ"
	},
	{
		original: "有限会社山本運輸",
		hiragana: "ゆうげんがいしゃやまもとうんゆ"
	},
	{
		original: "有限会社あいち経営コンサルタント",
		hiragana: "ゆうげんがいしゃあいちけいえいこんさるたんと"
	},
	{
		original: "グリーントランスポート",
		hiragana: "ぐりーんとらんすぽーと"
	},
	{
		original: "イーストジャパン",
		hiragana: "いーすとじゃぱん"
	},
	{
		original: "ＨＯＰＥ",
		hiragana: "ＨＯＰＥ"
	},
	{
		original: "有限会社伊藤農場",
		hiragana: "ゆうげんがいしゃいとうのうじょう"
	},
	{
		original: "セブンエキスプレス",
		hiragana: "せぶんえきすぷれす"
	},
	{
		original: "有限会社丸二運送",
		hiragana: "ゆうげんがいしゃまるにうんそう"
	},
	{
		original: "フロム神戸",
		hiragana: "ふろむこうべ"
	},
	{
		original: "有限会社宮長運送",
		hiragana: "ゆうげんがいしゃみやながうんそう"
	},
	{
		original: "有限会社日成輸送",
		hiragana: "ゆうげんがいしゃにっせいゆそう"
	},
	{
		original: "長谷川運輸",
		hiragana: "はせがわうんゆ"
	},
	{
		original: "有限会社青木運送",
		hiragana: "ゆうげんがいしゃあおきうんそう"
	},
	{
		original: "Ｓｙｚｙｇｙ　ＲＥｃｒｅａｔｅ",
		hiragana: "Ｓｙｚｙｇｙ　ＲＥｃｒｅａｔｅ"
	},
	{
		original: "鏡運送有限会社",
		hiragana: "かがみうんそうゆうげんがいしゃ"
	},
	{
		original: "有限会社橋本通商",
		hiragana: "ゆうげんがいしゃはしもとつうしょう"
	},
	{
		original: "有限会社あすなろ商会",
		hiragana: "ゆうげんがいしゃあすなろしょうかい"
	},
	{
		original: "大泉運送有限会社",
		hiragana: "おおいずみうんそうゆうげんがいしゃ"
	},
	{
		original: "有限会社山崎急送",
		hiragana: "ゆうげんがいしゃやまざききゅうそう"
	},
	{
		original: "スマートライン",
		hiragana: "すまーとらいん"
	},
	{
		original: "有限会社広瀬運送",
		hiragana: "ゆうげんがいしゃひろせうんそう"
	},
	{
		original: "鈴木運送店",
		hiragana: "すずきうんそうてん"
	},
	{
		original: "ジャストタイム",
		hiragana: "じゃすとたいむ"
	},
	{
		original: "ハビアー",
		hiragana: "はびあー"
	},
	{
		original: "向日葵",
		hiragana: "ひまわり"
	},
	{
		original: "ポーターサービス有限会社",
		hiragana: "ぽーたーさーびすゆうげんがいしゃ"
	},
	{
		original: "ＲＹＯＧＡ",
		hiragana: "ＲＹＯＧＡ"
	},
	{
		original: "北関東流通運輸",
		hiragana: "きたかんとうりゅうつううんゆ"
	},
	{
		original: "開進",
		hiragana: "かいしん"
	},
	{
		original: "有限会社中村急送",
		hiragana: "ゆうげんがいしゃなかむらきゅうそう"
	},
	{
		original: "ＪＥＸ",
		hiragana: "ＪＥＸ"
	},
	{
		original: "有限会社シティロジスティックス",
		hiragana: "ゆうげんがいしゃしてぃろじすてぃっくす"
	},
	{
		original: "アウルネット",
		hiragana: "あうるねっと"
	},
	{
		original: "蘆原",
		hiragana: "あしはら"
	},
	{
		original: "三信物流有限会社",
		hiragana: "さんしんぶつりゅうゆうげんがいしゃ"
	},
	{
		original: "有限会社大翔商事",
		hiragana: "ゆうげんがいしゃひろとしょうじ"
	},
	{
		original: "ジェイワン",
		hiragana: "じぇいわん"
	},
	{
		original: "アークトラフィック",
		hiragana: "あーくとらふぃっく"
	},
	{
		original: "グレートパックエクスプレス",
		hiragana: "ぐれーとぱっくえくすぷれす"
	},
	{
		original: "有限会社吉田運送",
		hiragana: "ゆうげんがいしゃよしだうんそう"
	},
	{
		original: "熊本ロジネット有限会社",
		hiragana: "くまもとろじねっとゆうげんがいしゃ"
	},
	{
		original: "Ｙ’ｓ　ｌｏｇｉ",
		hiragana: "Ｙ’ｓ　ｌｏｇｉ"
	},
	{
		original: "有限会社日本軽貨物埼玉",
		hiragana: "ゆうげんがいしゃにっぽんけいかもつさいたま"
	},
	{
		original: "瀬戸コンクリート",
		hiragana: "せとこんくりーと"
	},
	{
		original: "丸全重機建設有限会社",
		hiragana: "まるぜんじゅうきけんせつゆうげんがいしゃ"
	},
	{
		original: "東京花き共同荷受",
		hiragana: "とうきょうはなききょうどうにうけ"
	},
	{
		original: "エイムブリッジ",
		hiragana: "えいむぶりっじ"
	},
	{
		original: "丸井運送",
		hiragana: "まるいうんそう"
	},
	{
		original: "引越家マック",
		hiragana: "ひっこしいえまっく"
	},
	{
		original: "すゞいち",
		hiragana: "すゞいち"
	},
	{
		original: "サニーオンライン",
		hiragana: "さにーおんらいん"
	},
	{
		original: "うしじま",
		hiragana: "うしじま"
	},
	{
		original: "湾岸物流",
		hiragana: "わんがんぶつりゅう"
	},
	{
		original: "清水丸共運輸",
		hiragana: "しみずまるともうんゆ"
	},
	{
		original: "ＡＰタスクル",
		hiragana: "ＡＰたすくる"
	},
	{
		original: "ＮＳＣ",
		hiragana: "ＮＳＣ"
	},
	{
		original: "國枝運輸",
		hiragana: "くにえだうんゆ"
	},
	{
		original: "ＪＳＭ",
		hiragana: "ＪＳＭ"
	},
	{
		original: "ジーエスエル",
		hiragana: "じーえすえる"
	},
	{
		original: "東海急走",
		hiragana: "とうかいきゅうそう"
	},
	{
		original: "小名浜国際ロジスティック",
		hiragana: "おなはまこくさいろじすてぃっく"
	},
	{
		original: "合同会社エスプリ",
		hiragana: "ごうどうかいしゃえすぷり"
	},
	{
		original: "関西小野寺商事",
		hiragana: "かんさいおのでらしょうじ"
	},
	{
		original: "響喜組",
		hiragana: "きょうきくみ"
	},
	{
		original: "有限会社マルシゲ",
		hiragana: "ゆうげんがいしゃまるしげ"
	},
	{
		original: "有限会社ロジテック新宮",
		hiragana: "ゆうげんがいしゃろじてっくしんぐう"
	},
	{
		original: "高橋運送合資会社",
		hiragana: "たかはしうんそうごうしがいしゃ"
	},
	{
		original: "大日運輸",
		hiragana: "だいにちうんゆ"
	},
	{
		original: "翼システム運輸",
		hiragana: "つばさしすてむうんゆ"
	},
	{
		original: "ワールド企画",
		hiragana: "わーるどきかく"
	},
	{
		original: "シャルモア有限会社",
		hiragana: "しゃるもあゆうげんがいしゃ"
	},
	{
		original: "リング",
		hiragana: "りんぐ"
	},
	{
		original: "コトブキ産業",
		hiragana: "ことぶきさんぎょう"
	},
	{
		original: "オービット",
		hiragana: "おーびっと"
	},
	{
		original: "有限会社日本軽貨物",
		hiragana: "ゆうげんがいしゃにっぽんけいかもつ"
	},
	{
		original: "日章運輸倉庫",
		hiragana: "にっしょううんゆそうこ"
	},
	{
		original: "丸藤",
		hiragana: "まるふじ"
	},
	{
		original: "有限会社アースキャリー",
		hiragana: "ゆうげんがいしゃあーすきゃりー"
	},
	{
		original: "瀬戸内海運",
		hiragana: "せとないかいうん"
	},
	{
		original: "三富運輸有限会社",
		hiragana: "みとみうんゆゆうげんがいしゃ"
	},
	{
		original: "ツカショウ",
		hiragana: "つかしょう"
	},
	{
		original: "大翔運輸",
		hiragana: "ひろとうんゆ"
	},
	{
		original: "有限会社原田運送",
		hiragana: "ゆうげんがいしゃはらだうんそう"
	},
	{
		original: "有限会社ふじサービス",
		hiragana: "ゆうげんがいしゃふじさーびす"
	},
	{
		original: "信越商運",
		hiragana: "しんえつしょううん"
	},
	{
		original: "Ｔ・Ａ・Ｐ",
		hiragana: "Ｔ・Ａ・Ｐ"
	},
	{
		original: "有限会社タナック",
		hiragana: "ゆうげんがいしゃたなっく"
	},
	{
		original: "富田運輸",
		hiragana: "とみたうんゆ"
	},
	{
		original: "三和陸送",
		hiragana: "さんわりくそう"
	},
	{
		original: "我妻運送",
		hiragana: "わがつまうんそう"
	},
	{
		original: "有限会社高木自動車",
		hiragana: "ゆうげんがいしゃたかぎじどうしゃ"
	},
	{
		original: "協栄産業",
		hiragana: "きょうえいさんぎょう"
	},
	{
		original: "有限会社フジカーゴ",
		hiragana: "ゆうげんがいしゃふじかーご"
	},
	{
		original: "合同会社ＺＥＮ",
		hiragana: "ごうどうかいしゃＺＥＮ"
	},
	{
		original: "吉富サービス",
		hiragana: "よしとみさーびす"
	},
	{
		original: "東商事",
		hiragana: "とうしょうこと"
	},
	{
		original: "今西物流サービス",
		hiragana: "いまにしぶつりゅうさーびす"
	},
	{
		original: "有限会社三崎自動車",
		hiragana: "ゆうげんがいしゃみさきじどうしゃ"
	},
	{
		original: "有限会社ビックウェーブ",
		hiragana: "ゆうげんがいしゃびっくうぇーぶ"
	},
	{
		original: "ニシコー",
		hiragana: "にしこー"
	},
	{
		original: "有限会社渡辺運送",
		hiragana: "ゆうげんがいしゃわたなべうんそう"
	},
	{
		original: "半田陸運",
		hiragana: "はんだりくうん"
	},
	{
		original: "アクシス",
		hiragana: "あくしす"
	},
	{
		original: "有限会社勝栄物流",
		hiragana: "ゆうげんがいしゃかつえいぶつりゅう"
	},
	{
		original: "大伸運輸倉庫",
		hiragana: "たいしんうんゆそうこ"
	},
	{
		original: "有限会社土屋運送",
		hiragana: "ゆうげんがいしゃつちやうんそう"
	},
	{
		original: "ＰＪ‐ｍａｔｅ",
		hiragana: "ＰＪ‐ｍａｔｅ"
	},
	{
		original: "湘南流通サービス",
		hiragana: "しょうなんりゅうつうさーびす"
	},
	{
		original: "広運社有限会社",
		hiragana: "こううんしゃゆうげんかいしゃ"
	},
	{
		original: "たくみ運輸倉庫",
		hiragana: "たくみうんゆそうこ"
	},
	{
		original: "有限会社四国急行",
		hiragana: "ゆうげんがいしゃしこくきゅうこう"
	},
	{
		original: "有限会社新豊運輸",
		hiragana: "ゆうげんがいしゃしんゆたかうんゆ"
	},
	{
		original: "有限会社キヨセ",
		hiragana: "ゆうげんがいしゃきよせ"
	},
	{
		original: "夢乃矢",
		hiragana: "ゆめのや"
	},
	{
		original: "有限会社北基商事",
		hiragana: "ゆうげんがいしゃきたもとしょうじ"
	},
	{
		original: "有限会社荻原運輸",
		hiragana: "ゆうげんがいしゃおぎわらうんゆ"
	},
	{
		original: "配車センター村上",
		hiragana: "はいしゃせんたーむらかみ"
	},
	{
		original: "栄運輸",
		hiragana: "えいうんゆ"
	},
	{
		original: "原運送有限会社",
		hiragana: "はらうんそうゆうげんがいしゃ"
	},
	{
		original: "有限会社相馬重機",
		hiragana: "ゆうげんがいしゃそうまじゅうき"
	},
	{
		original: "クリードエクスパンド",
		hiragana: "くりーどえくすぱんど"
	},
	{
		original: "宮運送",
		hiragana: "みやうんそう"
	},
	{
		original: "有限会社香南運輸",
		hiragana: "ゆうげんがいしゃこうなんうんゆ"
	},
	{
		original: "メープルリーフ",
		hiragana: "めーぷるりーふ"
	},
	{
		original: "大出",
		hiragana: "おおいで"
	},
	{
		original: "大栄陸運",
		hiragana: "だいえいりくうん"
	},
	{
		original: "富久屋運送",
		hiragana: "ふくやうんそう"
	},
	{
		original: "田中運送合資会社",
		hiragana: "たなかうんそうごうしがいしゃ"
	},
	{
		original: "ネクストグループＨＤ",
		hiragana: "ねくすとぐるーぷＨＤ"
	},
	{
		original: "ミユキトランスポート",
		hiragana: "みゆきとらんすぽーと"
	},
	{
		original: "さがみサービス有限会社",
		hiragana: "さがみさーびすゆうげんがいしゃ"
	},
	{
		original: "有限会社惟信組",
		hiragana: "ゆうげんがいしゃただしんそ"
	},
	{
		original: "小型矢吹運送有限会社",
		hiragana: "こがたやぶきうんそうゆうげんがいしゃ"
	},
	{
		original: "北海道トランスマネージ",
		hiragana: "ほっかいどうとらんすまねーじ"
	},
	{
		original: "北陸ワークス",
		hiragana: "ほくりくわーくす"
	},
	{
		original: "有限会社平田物流",
		hiragana: "ゆうげんがいしゃひらたぶつりゅう"
	},
	{
		original: "ナイス・キャリーサービス",
		hiragana: "ないす・きゃりーさーびす"
	},
	{
		original: "有限会社大恵運輸",
		hiragana: "ゆうげんがいしゃだいけいうんゆ"
	},
	{
		original: "有限会社丸山運送",
		hiragana: "ゆうげんがいしゃまるやまうんそう"
	},
	{
		original: "景悦",
		hiragana: "けいえつ"
	},
	{
		original: "有限会社丸野運送",
		hiragana: "ゆうげんがいしゃまるのうんそう"
	},
	{
		original: "フレックス",
		hiragana: "ふれっくす"
	},
	{
		original: "有限会社前原急送",
		hiragana: "ゆうげんがいしゃまえはらきゅうそう"
	},
	{
		original: "有限会社クレイン静岡",
		hiragana: "ゆうげんがいしゃくれいんしずおか"
	},
	{
		original: "鈴木小型運送",
		hiragana: "すずきこがたうんそう"
	},
	{
		original: "有限会社樹林運送",
		hiragana: "ゆうげんがいしゃじゅりんうんそう"
	},
	{
		original: "協友",
		hiragana: "きょうとも"
	},
	{
		original: "クワトロ",
		hiragana: "くわとろ"
	},
	{
		original: "愛媛合同運輸有限会社",
		hiragana: "えひめごうどううんゆゆうげんがいしゃ"
	},
	{
		original: "有限会社関西ワークス",
		hiragana: "ゆうげんがいしゃかんさいわーくす"
	},
	{
		original: "有限会社ホナミ運輸",
		hiragana: "ゆうげんがいしゃほなみうんゆ"
	},
	{
		original: "ひまわり有限会社",
		hiragana: "ひまわりゆうげんがいしゃ"
	},
	{
		original: "有限会社グローインターナショナル",
		hiragana: "ゆうげんがいしゃぐろーいんたーなしょなる"
	},
	{
		original: "有限会社トモエ商事",
		hiragana: "ゆうげんがいしゃともえしょうじ"
	},
	{
		original: "大國運送有限会社",
		hiragana: "たいこくうんそうゆうげんがいしゃ"
	},
	{
		original: "笠井商事",
		hiragana: "かさいしょうじ"
	},
	{
		original: "モノリスジャパン",
		hiragana: "ものりすじゃぱん"
	},
	{
		original: "有限会社丸亀運輸",
		hiragana: "ゆうげんがいしゃまるがめうんゆ"
	},
	{
		original: "緑運送有限会社",
		hiragana: "みどりうんそうゆうげんがいしゃ"
	},
	{
		original: "竹野興産",
		hiragana: "たけのこうさん"
	},
	{
		original: "しずお建設運輸",
		hiragana: "しずおけんせつうんゆ"
	},
	{
		original: "誠運輸有限会社",
		hiragana: "まことうんゆゆうげんがいしゃ"
	},
	{
		original: "阿部運輸",
		hiragana: "あべうんゆ"
	},
	{
		original: "ナカヨウ",
		hiragana: "なかよう"
	},
	{
		original: "都路運送有限会社",
		hiragana: "みやこじうんそうゆうげんがいしゃ"
	},
	{
		original: "有限会社篠山運送店",
		hiragana: "ゆうげんがいしゃしのやまうんそうてん"
	},
	{
		original: "タケイシ流通サービス",
		hiragana: "たけいしりゅうつうさーびす"
	},
	{
		original: "岡通軽貨物急送",
		hiragana: "おかとおりけいかもつきゅうそう"
	},
	{
		original: "有限会社川上運送",
		hiragana: "ゆうげんがいしゃかわかみうんそう"
	},
	{
		original: "合同会社Ｔｏｗａ　Ｅｘｐｒｅｓｓ",
		hiragana: "ごうどうかいしゃＴｏｗａ　Ｅｘｐｒｅｓｓ"
	},
	{
		original: "高岡エクスプレス",
		hiragana: "たかおかえくすぷれす"
	},
	{
		original: "吉田水産",
		hiragana: "よしだすいさん"
	},
	{
		original: "有限会社流通運輸",
		hiragana: "ゆうげんがいしゃりゅうつううんゆ"
	},
	{
		original: "上村運輸",
		hiragana: "かみむらうんゆ"
	},
	{
		original: "咲輝",
		hiragana: "さきてる"
	},
	{
		original: "昭和運輸",
		hiragana: "しょうわうんゆ"
	},
	{
		original: "東京タックサービス",
		hiragana: "とうきょうたっくさーびす"
	},
	{
		original: "ロジカルＰＤ",
		hiragana: "ろじかるＰＤ"
	},
	{
		original: "有限会社ミヤケ",
		hiragana: "ゆうげんがいしゃみやけ"
	},
	{
		original: "有限会社Ｆ．Ｋ物流",
		hiragana: "ゆうげんがいしゃＦ．Ｋぶつりゅう"
	},
	{
		original: "ジャパンエキスプレス",
		hiragana: "じゃぱんえきすぷれす"
	},
	{
		original: "有限会社正栄運輸",
		hiragana: "ゆうげんがいしゃしょうえいうんゆ"
	},
	{
		original: "コスモ物流",
		hiragana: "こすもぶつりゅう"
	},
	{
		original: "有限会社金運",
		hiragana: "ゆうげんがいしゃきんうん"
	},
	{
		original: "アキバ",
		hiragana: "あきば"
	},
	{
		original: "パワーウェイブ",
		hiragana: "ぱわーうぇいぶ"
	},
	{
		original: "福井日通運輸",
		hiragana: "ふくいにっつううんゆ"
	},
	{
		original: "石川運送",
		hiragana: "いしかわうんそう"
	},
	{
		original: "有限会社水都運送",
		hiragana: "ゆうげんがいしゃすいとうんそう"
	},
	{
		original: "山紀運輸有限会社",
		hiragana: "やまきうんゆゆうげんがいしゃ"
	},
	{
		original: "エイト",
		hiragana: "えいと"
	},
	{
		original: "有限会社辻達運送",
		hiragana: "ゆうげんがいしゃつじとおるうんそう"
	},
	{
		original: "有限会社プラスプラティ",
		hiragana: "ゆうげんがいしゃぷらすぷらてぃ"
	},
	{
		original: "エフケーユー",
		hiragana: "えふけーゆー"
	},
	{
		original: "平本清掃",
		hiragana: "ひらもとせいそう"
	},
	{
		original: "ロジテック箱美屋",
		hiragana: "ろじてっくはこびや"
	},
	{
		original: "有限会社大一鉱業",
		hiragana: "ゆうげんがいしゃひろかずこうぎょう"
	},
	{
		original: "合同会社Ｎｅｘｔ　Ｉｎｎｏｖａｔｉｏｎ",
		hiragana: "ごうどうかいしゃＮｅｘｔ　Ｉｎｎｏｖａｔｉｏｎ"
	},
	{
		original: "有限会社スピードグループ",
		hiragana: "ゆうげんがいしゃすぴーどぐるーぷ"
	},
	{
		original: "丸勝運輸有限会社",
		hiragana: "まるしょううんゆゆうげんがいしゃ"
	},
	{
		original: "有限会社山本運輸",
		hiragana: "ゆうげんがいしゃやまもとうんゆ"
	},
	{
		original: "有限会社佐藤商事",
		hiragana: "ゆうげんがいしゃさとうしょうじ"
	},
	{
		original: "有限会社鷹葉運輸",
		hiragana: "ゆうげんがいしゃたかはうんゆ"
	},
	{
		original: "有限会社辻村商事",
		hiragana: "ゆうげんがいしゃつじむらしょうじ"
	},
	{
		original: "イゲタ",
		hiragana: "いげた"
	},
	{
		original: "桜井資材運輸",
		hiragana: "さくらいしざいうんゆ"
	},
	{
		original: "光運送",
		hiragana: "ひかりうんそう"
	},
	{
		original: "関根運送有限会社",
		hiragana: "せきねうんそうゆうげんがいしゃ"
	},
	{
		original: "有限会社クラフトシステム",
		hiragana: "ゆうげんがいしゃくらふとしすてむ"
	},
	{
		original: "クライム",
		hiragana: "くらいむ"
	},
	{
		original: "美星運輸",
		hiragana: "びせいうんゆ"
	},
	{
		original: "川合運送",
		hiragana: "かわいうんそう"
	},
	{
		original: "浅伊運送",
		hiragana: "せんいうんそう"
	},
	{
		original: "有限会社小森谷",
		hiragana: "ゆうげんがいしゃこもりや"
	},
	{
		original: "アイル",
		hiragana: "あいる"
	},
	{
		original: "有限会社都運送",
		hiragana: "ゆうげんがいしゃみやこうんそう"
	},
	{
		original: "犬塚運輸",
		hiragana: "いぬつかうんゆ"
	},
	{
		original: "イノッピー",
		hiragana: "いのっぴー"
	},
	{
		original: "ＫＹＯＵＥＩ",
		hiragana: "ＫＹＯＵＥＩ"
	},
	{
		original: "有限会社キムラサービス",
		hiragana: "ゆうげんがいしゃきむらさーびす"
	},
	{
		original: "有限会社ベルワン",
		hiragana: "ゆうげんがいしゃべるわん"
	},
	{
		original: "米子中央高速",
		hiragana: "よなごちゅうおうこうそく"
	},
	{
		original: "有限会社協和配送商事",
		hiragana: "ゆうげんがいしゃきょうわはいそうしょうじ"
	},
	{
		original: "有限会社塙商事",
		hiragana: "ゆうげんがいしゃはなわしょうじ"
	},
	{
		original: "有限会社本土新聞事業開発",
		hiragana: "ゆうげんがいしゃほんどしんぶんじぎょうかいはつ"
	},
	{
		original: "長谷川サービス",
		hiragana: "はせがわさーびす"
	},
	{
		original: "有限会社旭栄興業",
		hiragana: "ゆうげんがいしゃあさひさかえこうぎょう"
	},
	{
		original: "山陽陸運",
		hiragana: "さんようりくうん"
	},
	{
		original: "有限会社北栄運輸",
		hiragana: "ゆうげんがいしゃほくえいうんゆ"
	},
	{
		original: "グリーン運送",
		hiragana: "ぐりーんうんそう"
	},
	{
		original: "有限会社北関東運輸",
		hiragana: "ゆうげんがいしゃきたかんとううんゆ"
	},
	{
		original: "有限会社高浜運輸",
		hiragana: "ゆうげんがいしゃたかはまうんゆ"
	},
	{
		original: "有限会社小笠原乳品運送",
		hiragana: "ゆうげんがいしゃおがさわらちちひんうんそう"
	},
	{
		original: "マルア興運",
		hiragana: "まるあきょううん"
	},
	{
		original: "兼弘",
		hiragana: "かねひろ"
	},
	{
		original: "旭陸運",
		hiragana: "あさひりくうん"
	},
	{
		original: "藤川運輸",
		hiragana: "ふじかわうんゆ"
	},
	{
		original: "八幡運輸サービス有限会社",
		hiragana: "はちまんうんゆさーびすゆうげんがいしゃ"
	},
	{
		original: "有限会社松岡運送",
		hiragana: "ゆうげんがいしゃまつおかうんそう"
	},
	{
		original: "有限会社飛龍スチール",
		hiragana: "ゆうげんがいしゃひりゅうすちーる"
	},
	{
		original: "路地圏",
		hiragana: "ろじけん"
	},
	{
		original: "西日本テック",
		hiragana: "にしにほんてっく"
	},
	{
		original: "有限会社徳栄",
		hiragana: "ゆうげんがいしゃとくはる"
	},
	{
		original: "有限会社旭春運送",
		hiragana: "ゆうげんがいしゃあさひはるうんそう"
	},
	{
		original: "中野梱包材料",
		hiragana: "なかのこんぽうざいりょう"
	},
	{
		original: "横山サービス",
		hiragana: "よこやまさーびす"
	},
	{
		original: "加瀬興業運輸",
		hiragana: "かせこうぎょううんゆ"
	},
	{
		original: "有限会社コーサン運輸",
		hiragana: "ゆうげんがいしゃこーさんうんゆ"
	},
	{
		original: "ＪＥＴ　ＳＴＲＥＡＭ",
		hiragana: "ＪＥＴ　ＳＴＲＥＡＭ"
	},
	{
		original: "有限会社高知第五運送",
		hiragana: "ゆうげんがいしゃこうちだいごうんそう"
	},
	{
		original: "有限会社千流",
		hiragana: "ゆうげんがいしゃせんりゅう"
	},
	{
		original: "大日運送",
		hiragana: "だいにちうんそう"
	},
	{
		original: "マウス",
		hiragana: "まうす"
	},
	{
		original: "昌平",
		hiragana: "しょうへい"
	},
	{
		original: "有限会社賀名生運送",
		hiragana: "ゆうげんがいしゃかななまうんそう"
	},
	{
		original: "ホクサン",
		hiragana: "ほくさん"
	},
	{
		original: "昭和運輸",
		hiragana: "しょうわうんゆ"
	},
	{
		original: "エムワイエスライン",
		hiragana: "えむわいえすらいん"
	},
	{
		original: "岸田運送有限会社",
		hiragana: "きしだうんそうゆうげんがいしゃ"
	},
	{
		original: "大徳運輸",
		hiragana: "だいとくうんゆ"
	},
	{
		original: "有限会社笠倉運輸",
		hiragana: "ゆうげんがいしゃかさくらうんゆ"
	},
	{
		original: "信秀興業有限会社",
		hiragana: "のぶひでこうぎょうゆうげんがいしゃ"
	},
	{
		original: "菅原運送有限会社",
		hiragana: "すがわらうんそうゆうげんがいしゃ"
	},
	{
		original: "中央物流",
		hiragana: "ちゅうおうぶつりゅう"
	},
	{
		original: "有限会社飯生運輸",
		hiragana: "ゆうげんがいしゃめしなまうんゆ"
	},
	{
		original: "伊藤開発",
		hiragana: "いとうかいはつ"
	},
	{
		original: "ヤマトミ",
		hiragana: "やまとみ"
	},
	{
		original: "シナジーパートナー",
		hiragana: "しなじーぱーとなー"
	},
	{
		original: "佐藤運送",
		hiragana: "さとううんそう"
	},
	{
		original: "有限会社浅山運輸",
		hiragana: "ゆうげんがいしゃあさやまうんゆ"
	},
	{
		original: "久和物流",
		hiragana: "ひさかずぶつりゅう"
	},
	{
		original: "千代田興業",
		hiragana: "ちよだこうぎょう"
	},
	{
		original: "エナジック関東",
		hiragana: "えなじっくかんとう"
	},
	{
		original: "有限会社中尾商店",
		hiragana: "ゆうげんがいしゃなかおしょうてん"
	},
	{
		original: "静岡トラック",
		hiragana: "しずおかとらっく"
	},
	{
		original: "有限会社クレ井産業",
		hiragana: "ゆうげんがいしゃくれいさんぎょう"
	},
	{
		original: "スリーエス",
		hiragana: "すりーえす"
	},
	{
		original: "有限会社内田運送",
		hiragana: "ゆうげんがいしゃうちだうんそう"
	},
	{
		original: "グッドワン",
		hiragana: "ぐっどわん"
	},
	{
		original: "明光運輸",
		hiragana: "あきみつうんゆ"
	},
	{
		original: "アルス運送",
		hiragana: "あるすうんそう"
	},
	{
		original: "有限会社ホウダツ",
		hiragana: "ゆうげんがいしゃほうだつ"
	},
	{
		original: "ＫＧＬＩＮＥ",
		hiragana: "ＫＧＬＩＮＥ"
	},
	{
		original: "高橋運輸有限会社",
		hiragana: "たかはしうんゆゆうげんがいしゃ"
	},
	{
		original: "石田運送",
		hiragana: "いしだうんそう"
	},
	{
		original: "大京",
		hiragana: "だいきょう"
	},
	{
		original: "浅野運輸有限会社",
		hiragana: "あさのうんゆゆうげんがいしゃ"
	},
	{
		original: "ピース物流",
		hiragana: "ぴーすぶつりゅう"
	},
	{
		original: "ソウマ",
		hiragana: "そうま"
	},
	{
		original: "拓進",
		hiragana: "たくすすむ"
	},
	{
		original: "関東イトウ商事運輸",
		hiragana: "かんとういとうしょうじうんゆ"
	},
	{
		original: "サム工業有限会社",
		hiragana: "さむこうぎょうゆうげんがいしゃ"
	},
	{
		original: "有限会社湘南アローライナー",
		hiragana: "ゆうげんがいしゃしょうなんあろーらいなー"
	},
	{
		original: "日本光開発",
		hiragana: "にっぽんひかりかいはつ"
	},
	{
		original: "バックス",
		hiragana: "ばっくす"
	},
	{
		original: "博栄物流",
		hiragana: "ひろしさかえぶつりゅう"
	},
	{
		original: "ホクリク物流運輸",
		hiragana: "ほくりくぶつりゅううんゆ"
	},
	{
		original: "アサミ梱包有限会社",
		hiragana: "あさみこんぽうゆうげんがいしゃ"
	},
	{
		original: "若松物流",
		hiragana: "わかまつぶつりゅう"
	},
	{
		original: "菊地輸送システム",
		hiragana: "きくちゆそうしすてむ"
	},
	{
		original: "有限会社音更陸送運輸",
		hiragana: "ゆうげんがいしゃおとふけりくそううんゆ"
	},
	{
		original: "八光運輸",
		hiragana: "はっこううんゆ"
	},
	{
		original: "大信運送",
		hiragana: "たいしんうんそう"
	},
	{
		original: "エヌ・エス・ティー",
		hiragana: "えぬ・えす・てぃー"
	},
	{
		original: "あかお運送",
		hiragana: "あかおうんそう"
	},
	{
		original: "勝木梱包有限会社",
		hiragana: "かつきこんぽうゆうげんがいしゃ"
	},
	{
		original: "東和産業",
		hiragana: "とうわさんぎょう"
	},
	{
		original: "有限会社星洲運輸",
		hiragana: "ゆうげんがいしゃほしすうんゆ"
	},
	{
		original: "田中総業",
		hiragana: "たなかそうぎょう"
	},
	{
		original: "太田運輸",
		hiragana: "おおたうんゆ"
	},
	{
		original: "角井運送",
		hiragana: "かくいうんそう"
	},
	{
		original: "久松運輸",
		hiragana: "ひさまつうんゆ"
	},
	{
		original: "ＫＦ・トランスポート",
		hiragana: "ＫＦ・とらんすぽーと"
	},
	{
		original: "エイジア",
		hiragana: "えいじあ"
	},
	{
		original: "ケイ・ティ・エス",
		hiragana: "けい・てぃ・えす"
	},
	{
		original: "有限会社サン急送",
		hiragana: "ゆうげんがいしゃさんきゅうそう"
	},
	{
		original: "シンコウ商事",
		hiragana: "しんこうしょうじ"
	},
	{
		original: "有限会社サカエ物流",
		hiragana: "ゆうげんがいしゃさかえぶつりゅう"
	},
	{
		original: "Ｓグローバル",
		hiragana: "Ｓぐろーばる"
	},
	{
		original: "旭川陸送有限会社",
		hiragana: "あさひかわりくそうゆうげんがいしゃ"
	},
	{
		original: "サカエ運輸",
		hiragana: "さかえうんゆ"
	},
	{
		original: "有限会社パシモ",
		hiragana: "ゆうげんがいしゃぱしも"
	},
	{
		original: "有限会社八旺運輸",
		hiragana: "ゆうげんがいしゃはちおううんゆ"
	},
	{
		original: "ライスライン",
		hiragana: "らいすらいん"
	},
	{
		original: "Ｏ．Ｄ．Ｓ",
		hiragana: "Ｏ．Ｄ．Ｓ"
	},
	{
		original: "高前運輸有限会社",
		hiragana: "たかまえうんゆゆうげんがいしゃ"
	},
	{
		original: "丸都シェアードサービス",
		hiragana: "がんとしぇあーどさーびす"
	},
	{
		original: "合通ホールディングス",
		hiragana: "ごうとおりほーるでぃんぐす"
	},
	{
		original: "ＴＤＭトランスポート",
		hiragana: "ＴＤＭとらんすぽーと"
	},
	{
		original: "渡辺重運",
		hiragana: "わたなべじゅううん"
	},
	{
		original: "稲吉運輸倉庫",
		hiragana: "いなよしうんゆそうこ"
	},
	{
		original: "カズショウ",
		hiragana: "かずしょう"
	},
	{
		original: "昭和物流サービス",
		hiragana: "しょうわぶつりゅうさーびす"
	},
	{
		original: "ロジスティックス",
		hiragana: "ろじすてぃっくす"
	},
	{
		original: "全國通運",
		hiragana: "ぜんこくつううん"
	},
	{
		original: "有限会社大場運送",
		hiragana: "ゆうげんがいしゃおおばうんそう"
	},
	{
		original: "日通久留米輸送",
		hiragana: "にっつうくるめゆそう"
	},
	{
		original: "有限会社ひかり",
		hiragana: "ゆうげんがいしゃひかり"
	},
	{
		original: "ジェイブイエス",
		hiragana: "じぇいぶいえす"
	},
	{
		original: "中部運輸",
		hiragana: "ちゅうぶうんゆ"
	},
	{
		original: "有限会社田中運送",
		hiragana: "ゆうげんがいしゃたなかうんそう"
	},
	{
		original: "カーゴスタッフ",
		hiragana: "かーごすたっふ"
	},
	{
		original: "丸喜長運送有限会社",
		hiragana: "まるきちょううんそうゆうげんがいしゃ"
	},
	{
		original: "シンコー商事",
		hiragana: "しんこーしょうじ"
	},
	{
		original: "下伊那自動車",
		hiragana: "しもいなじどうしゃ"
	},
	{
		original: "タナカ・ライナー",
		hiragana: "たなか・らいなー"
	},
	{
		original: "有限会社南空知運送",
		hiragana: "ゆうげんがいしゃみなみそらちうんそう"
	},
	{
		original: "有限会社正和運輸",
		hiragana: "ゆうげんがいしゃまさかずうんゆ"
	},
	{
		original: "ＡＰコーポレーション",
		hiragana: "ＡＰこーぽれーしょん"
	},
	{
		original: "翔神通商",
		hiragana: "しょうしんつうしょう"
	},
	{
		original: "有限会社鶴岡運輸",
		hiragana: "ゆうげんがいしゃつるおかうんゆ"
	},
	{
		original: "有限会社松沢配送サービス",
		hiragana: "ゆうげんがいしゃまつざわはいそうさーびす"
	},
	{
		original: "丸越物流有限会社",
		hiragana: "まるこしぶつりゅうゆうげんがいしゃ"
	},
	{
		original: "エムティエス",
		hiragana: "えむてぃえす"
	},
	{
		original: "ジェイエヌサービス",
		hiragana: "じぇいえぬさーびす"
	},
	{
		original: "プロテック",
		hiragana: "ぷろてっく"
	},
	{
		original: "コーソ運輸工業",
		hiragana: "こーそうんゆこうぎょう"
	},
	{
		original: "有限会社Ｋ－ＬＩＮＥ",
		hiragana: "ゆうげんがいしゃＫ－ＬＩＮＥ"
	},
	{
		original: "ケイテイ運輸",
		hiragana: "けいていうんゆ"
	},
	{
		original: "イーシーエスジャパン",
		hiragana: "いーしーえすじゃぱん"
	},
	{
		original: "吉行産業",
		hiragana: "よしゆきさんぎょう"
	},
	{
		original: "大木物流",
		hiragana: "たいぼくぶつりゅう"
	},
	{
		original: "真砂運送",
		hiragana: "まさごうんそう"
	},
	{
		original: "志田組",
		hiragana: "しだくみ"
	},
	{
		original: "有限会社大裕急送",
		hiragana: "ゆうげんがいしゃだいすけきゅうそう"
	},
	{
		original: "植田陸運有限会社",
		hiragana: "うえだりくうんゆうげんがいしゃ"
	},
	{
		original: "エコ・ドゥ",
		hiragana: "えこ・どぅ"
	},
	{
		original: "信成",
		hiragana: "のぶなり"
	},
	{
		original: "オシオ運輸",
		hiragana: "おしおうんゆ"
	},
	{
		original: "千葉南海",
		hiragana: "ちばなんかい"
	},
	{
		original: "協力運輸",
		hiragana: "きょうりょくうんゆ"
	},
	{
		original: "有限会社和宏商業",
		hiragana: "ゆうげんがいしゃかずひろしょうぎょう"
	},
	{
		original: "千代田運輸",
		hiragana: "ちよだうんゆ"
	},
	{
		original: "ライトエンタープライズ",
		hiragana: "らいとえんたーぷらいず"
	},
	{
		original: "ミリオン運輸",
		hiragana: "みりおんうんゆ"
	},
	{
		original: "ダイワエクスプレス",
		hiragana: "だいわえくすぷれす"
	},
	{
		original: "有限会社西村運送",
		hiragana: "ゆうげんがいしゃにしむらうんそう"
	},
	{
		original: "アールディーシー",
		hiragana: "あーるでぃーしー"
	},
	{
		original: "有限会社まゆみ輸送",
		hiragana: "ゆうげんがいしゃまゆみゆそう"
	},
	{
		original: "関山",
		hiragana: "せきやま"
	},
	{
		original: "金成運輸",
		hiragana: "かなりうんゆ"
	},
	{
		original: "有限会社アオイ・第一物流",
		hiragana: "ゆうげんがいしゃあおい・だいいちぶつりゅう"
	},
	{
		original: "ミフネメッツ",
		hiragana: "みふねめっつ"
	},
	{
		original: "サランウイングサービス",
		hiragana: "さらんういんぐさーびす"
	},
	{
		original: "有限会社坂口運輸",
		hiragana: "ゆうげんがいしゃさかぐちうんゆ"
	},
	{
		original: "日南水急",
		hiragana: "にちなんみずきゅう"
	},
	{
		original: "有限会社カガワエキスプレスサービス",
		hiragana: "ゆうげんがいしゃかがわえきすぷれすさーびす"
	},
	{
		original: "有限会社鈴木商事運輸",
		hiragana: "ゆうげんがいしゃすずきしょうじうんゆ"
	},
	{
		original: "有限会社エフジェイトラスポ",
		hiragana: "ゆうげんがいしゃえふじぇいとらすぽ"
	},
	{
		original: "駒商",
		hiragana: "こましょう"
	},
	{
		original: "近江物流",
		hiragana: "おうみぶつりゅう"
	},
	{
		original: "フォッピアーニジャパン",
		hiragana: "ふぉっぴあーにじゃぱん"
	},
	{
		original: "ロジテックス",
		hiragana: "ろじてっくす"
	},
	{
		original: "有限会社ユウケイ物流",
		hiragana: "ゆうげんがいしゃゆうけいぶつりゅう"
	},
	{
		original: "有限会社南高運輸",
		hiragana: "ゆうげんがいしゃみなみだかうんゆ"
	},
	{
		original: "西日本物流",
		hiragana: "にしにほんぶつりゅう"
	},
	{
		original: "有限会社横瀬運送",
		hiragana: "ゆうげんがいしゃよこせうんそう"
	},
	{
		original: "ランカートランスポート",
		hiragana: "らんかーとらんすぽーと"
	},
	{
		original: "宮家興産",
		hiragana: "みやいえこうさん"
	},
	{
		original: "有限会社タカマツ",
		hiragana: "ゆうげんがいしゃたかまつ"
	},
	{
		original: "成和送庫",
		hiragana: "しげかずそうこ"
	},
	{
		original: "ダイワ物流",
		hiragana: "だいわぶつりゅう"
	},
	{
		original: "グッドロード",
		hiragana: "ぐっどろーど"
	},
	{
		original: "アドバンス",
		hiragana: "あどばんす"
	},
	{
		original: "アイピース",
		hiragana: "あいぴーす"
	},
	{
		original: "有限会社丸義物流",
		hiragana: "ゆうげんがいしゃまるぎぶつりゅう"
	},
	{
		original: "有限会社岩政エキスプレス",
		hiragana: "ゆうげんがいしゃいわまさえきすぷれす"
	},
	{
		original: "フュージョン・ロジ",
		hiragana: "ふゅーじょん・ろじ"
	},
	{
		original: "物流倶楽部コンシェル",
		hiragana: "ぶつりゅうくらぶこんしぇる"
	},
	{
		original: "マコトオーバーシーズサービセス",
		hiragana: "まことおーばーしーずさーびせす"
	},
	{
		original: "運搬社",
		hiragana: "うんぱんしゃ"
	},
	{
		original: "さわやか運輸有限会社",
		hiragana: "さわやかうんゆゆうげんがいしゃ"
	},
	{
		original: "有限会社野崎運送店",
		hiragana: "ゆうげんがいしゃのざきうんそうてん"
	},
	{
		original: "有限会社高橋商会",
		hiragana: "ゆうげんがいしゃたかはししょうかい"
	},
	{
		original: "産業運輸",
		hiragana: "さんぎょううんゆ"
	},
	{
		original: "有限会社中野運輸",
		hiragana: "ゆうげんがいしゃなかのうんゆ"
	},
	{
		original: "有限会社栗原陸運",
		hiragana: "ゆうげんがいしゃくりはらりくうん"
	},
	{
		original: "有限会社金崎運輸",
		hiragana: "ゆうげんがいしゃかねざきうんゆ"
	},
	{
		original: "御国野運輸",
		hiragana: "おくにのうんゆ"
	},
	{
		original: "山梨中央ロジパーク",
		hiragana: "やまなしちゅうおうろじぱーく"
	},
	{
		original: "アクティブ",
		hiragana: "あくてぃぶ"
	},
	{
		original: "菊地運送",
		hiragana: "きくちうんそう"
	},
	{
		original: "有限会社西藤運輸",
		hiragana: "ゆうげんがいしゃさいとううんゆ"
	},
	{
		original: "サメックスプラス",
		hiragana: "さめっくすぷらす"
	},
	{
		original: "日通浜松運輸",
		hiragana: "にっつうはままつうんゆ"
	},
	{
		original: "有限会社日軽急送",
		hiragana: "ゆうげんがいしゃにっけいきゅうそう"
	},
	{
		original: "高橋運輸有限会社",
		hiragana: "たかはしうんゆゆうげんがいしゃ"
	},
	{
		original: "宏栄産業",
		hiragana: "ひろしさかえさんぎょう"
	},
	{
		original: "松戸ベビトラ有限会社",
		hiragana: "まつどべびとらゆうげんがいしゃ"
	},
	{
		original: "アサヒディリバリー",
		hiragana: "あさひでぃりばりー"
	},
	{
		original: "京滋運輸",
		hiragana: "けいじうんゆ"
	},
	{
		original: "有限会社アサヒトラポ",
		hiragana: "ゆうげんがいしゃあさひとらぽ"
	},
	{
		original: "有限会社ハチヤ通商",
		hiragana: "ゆうげんがいしゃはちやつうしょう"
	},
	{
		original: "有限会社林物流サービス",
		hiragana: "ゆうげんがいしゃはやしぶつりゅうさーびす"
	},
	{
		original: "春野物流",
		hiragana: "はるのぶつりゅう"
	},
	{
		original: "檜垣運送",
		hiragana: "ひがきうんそう"
	},
	{
		original: "ピックアップコーポレーション",
		hiragana: "ぴっくあっぷこーぽれーしょん"
	},
	{
		original: "ウイング",
		hiragana: "ういんぐ"
	},
	{
		original: "新栄港運有限会社",
		hiragana: "しんえいみなとうんゆうげんがいしゃ"
	},
	{
		original: "丸惣外房急行有限会社",
		hiragana: "まるそうそとぼうきゅうこうゆうげんがいしゃ"
	},
	{
		original: "堀田運送",
		hiragana: "ほったうんそう"
	},
	{
		original: "マルコ産業運輸有限会社",
		hiragana: "まるこさんぎょううんゆゆうげんがいしゃ"
	},
	{
		original: "福原宅送店",
		hiragana: "ふくはらたくそうみせ"
	},
	{
		original: "大共運送",
		hiragana: "だいともうんそう"
	},
	{
		original: "佐々木商事",
		hiragana: "ささきしょうじ"
	},
	{
		original: "スソノ物流",
		hiragana: "すそのぶつりゅう"
	},
	{
		original: "ダイカンロジスティクス",
		hiragana: "だいかんろじすてぃくす"
	},
	{
		original: "北尻運輸",
		hiragana: "きたしりうんゆ"
	},
	{
		original: "田口運送",
		hiragana: "たぐちうんそう"
	},
	{
		original: "有限会社ヒロイシ運輸",
		hiragana: "ゆうげんがいしゃひろいしうんゆ"
	},
	{
		original: "エスワン",
		hiragana: "えすわん"
	},
	{
		original: "Ｒｉｎｇｓｌｏｇ",
		hiragana: "Ｒｉｎｇｓｌｏｇ"
	},
	{
		original: "オーケージャパン",
		hiragana: "おーけーじゃぱん"
	},
	{
		original: "有限会社染谷商事",
		hiragana: "ゆうげんがいしゃそめやしょうじ"
	},
	{
		original: "燕運送",
		hiragana: "つばめうんそう"
	},
	{
		original: "東栄運輸",
		hiragana: "とうえいうんゆ"
	},
	{
		original: "有限会社五協陸運",
		hiragana: "ゆうげんがいしゃごきょうりくうん"
	},
	{
		original: "有限会社共越運輸",
		hiragana: "ゆうげんがいしゃともえつうんゆ"
	},
	{
		original: "ジャパン・トランズ・ライン",
		hiragana: "じゃぱん・とらんず・らいん"
	},
	{
		original: "千代田企画",
		hiragana: "ちよだきかく"
	},
	{
		original: "槌本運送",
		hiragana: "つちほんうんそう"
	},
	{
		original: "シンコー",
		hiragana: "しんこー"
	},
	{
		original: "岩倉",
		hiragana: "いわくら"
	},
	{
		original: "丸周運送",
		hiragana: "まるしゅううんそう"
	},
	{
		original: "翔樹",
		hiragana: "しょうき"
	},
	{
		original: "一志運輸",
		hiragana: "かずしうんゆ"
	},
	{
		original: "坂口通運有限会社",
		hiragana: "さかぐちつううんゆうげんがいしゃ"
	},
	{
		original: "アーイ運送センター有限会社",
		hiragana: "あーいうんそうせんたーゆうげんがいしゃ"
	},
	{
		original: "永松運送有限会社",
		hiragana: "ながまつうんそうゆうげんがいしゃ"
	},
	{
		original: "日本郵便",
		hiragana: "にっぽんゆうびん"
	},
	{
		original: "良品倶楽部",
		hiragana: "りょうひんくらぶ"
	},
	{
		original: "カナックロジスティック",
		hiragana: "かなっくろじすてぃっく"
	},
	{
		original: "柴田運輸",
		hiragana: "しばたうんゆ"
	},
	{
		original: "有限会社シンセイ荷役",
		hiragana: "ゆうげんがいしゃしんせいにやく"
	},
	{
		original: "有限会社夏井輸送",
		hiragana: "ゆうげんがいしゃなついゆそう"
	},
	{
		original: "グロリアスオーシャン",
		hiragana: "ぐろりあすおーしゃん"
	},
	{
		original: "北斗運輸",
		hiragana: "ほくとうんゆ"
	},
	{
		original: "有限会社オズサービス",
		hiragana: "ゆうげんがいしゃおずさーびす"
	},
	{
		original: "末広物産運輸",
		hiragana: "すえひろぶっさんうんゆ"
	},
	{
		original: "六甲アイランド運輸倉庫",
		hiragana: "ろっこうあいらんどうんゆそうこ"
	},
	{
		original: "有限会社マルヤス",
		hiragana: "ゆうげんがいしゃまるやす"
	},
	{
		original: "朝日運輸",
		hiragana: "あさひうんゆ"
	},
	{
		original: "テイーケイ物流有限会社",
		hiragana: "ていーけいぶつりゅうゆうげんがいしゃ"
	},
	{
		original: "エス・ファイブ",
		hiragana: "えす・ふぁいぶ"
	},
	{
		original: "京都商業運輸",
		hiragana: "きょうとしょうぎょううんゆ"
	},
	{
		original: "有限会社繁成運送",
		hiragana: "ゆうげんがいしゃはんせいうんそう"
	},
	{
		original: "ＷＩＮ　ａｔ　ＱＵＡＬＩＴＹ",
		hiragana: "ＷＩＮ　ａｔ　ＱＵＡＬＩＴＹ"
	},
	{
		original: "アーネスト",
		hiragana: "あーねすと"
	},
	{
		original: "有限会社成田運輸",
		hiragana: "ゆうげんがいしゃなりたうんゆ"
	},
	{
		original: "オオトモ運輸有限会社",
		hiragana: "おおともうんゆゆうげんがいしゃ"
	},
	{
		original: "有限会社おしかオーエムシー",
		hiragana: "ゆうげんがいしゃおしかおーえむしー"
	},
	{
		original: "マルカ",
		hiragana: "まるか"
	},
	{
		original: "アイアールジーロジスティクス",
		hiragana: "あいあーるじーろじすてぃくす"
	},
	{
		original: "有限会社酒井土石工業",
		hiragana: "ゆうげんがいしゃさかいどせきこうぎょう"
	},
	{
		original: "丸和運輸",
		hiragana: "まるわうんゆ"
	},
	{
		original: "有限会社協同運送",
		hiragana: "ゆうげんがいしゃきょうどううんそう"
	},
	{
		original: "Ｍ’ｓＡｒｋ",
		hiragana: "Ｍ’ｓＡｒｋ"
	},
	{
		original: "藤陸運輸",
		hiragana: "ふじりくうんゆ"
	},
	{
		original: "サウスシートランスポート",
		hiragana: "さうすしーとらんすぽーと"
	},
	{
		original: "グランテック物流",
		hiragana: "ぐらんてっくぶつりゅう"
	},
	{
		original: "有限会社美急ロジスティックス",
		hiragana: "ゆうげんがいしゃびきゅうろじすてぃっくす"
	},
	{
		original: "有限会社トータルクリーン",
		hiragana: "ゆうげんがいしゃとーたるくりーん"
	},
	{
		original: "都サービス",
		hiragana: "みやこさーびす"
	},
	{
		original: "アルコン",
		hiragana: "あるこん"
	},
	{
		original: "吉本運輸",
		hiragana: "よしもとうんゆ"
	},
	{
		original: "プランニング夢屋東京店",
		hiragana: "ぷらんにんぐゆめやとうきょうてん"
	},
	{
		original: "ジャカコン物流",
		hiragana: "じゃかこんぶつりゅう"
	},
	{
		original: "ＣＯＮＮＥＣＴロジスティクス",
		hiragana: "ＣＯＮＮＥＣＴろじすてぃくす"
	},
	{
		original: "ガジェット",
		hiragana: "がじぇっと"
	},
	{
		original: "樟南",
		hiragana: "しょうなん"
	},
	{
		original: "アイトゥーカーゴ",
		hiragana: "あいとぅーかーご"
	},
	{
		original: "オーク運輸",
		hiragana: "おーくうんゆ"
	},
	{
		original: "山洋電気テクノサービス",
		hiragana: "やまひろしでんきてくのさーびす"
	},
	{
		original: "大協配送",
		hiragana: "だいきょうはいそう"
	},
	{
		original: "有限会社ヤマノ",
		hiragana: "ゆうげんがいしゃやまの"
	},
	{
		original: "有限会社敦賀運送",
		hiragana: "ゆうげんがいしゃつるがうんそう"
	},
	{
		original: "ヨシタケ物流",
		hiragana: "よしたけぶつりゅう"
	},
	{
		original: "有限会社フカヤキャリーサービス",
		hiragana: "ゆうげんがいしゃふかやきゃりーさーびす"
	},
	{
		original: "石戸商運",
		hiragana: "いしどしょううん"
	},
	{
		original: "青城運送",
		hiragana: "あおしろうんそう"
	},
	{
		original: "丸石デリバリー",
		hiragana: "まるいしでりばりー"
	},
	{
		original: "武田運輸有限会社",
		hiragana: "たけだうんゆゆうげんがいしゃ"
	},
	{
		original: "新門司ライン",
		hiragana: "しんもんつかさらいん"
	},
	{
		original: "星光",
		hiragana: "ほしひかり"
	},
	{
		original: "有限会社緒方運輸",
		hiragana: "ゆうげんがいしゃおがたうんゆ"
	},
	{
		original: "有限会社ダイワ運送",
		hiragana: "ゆうげんがいしゃだいわうんそう"
	},
	{
		original: "桜井流通センター",
		hiragana: "さくらいりゅうつうせんたー"
	},
	{
		original: "有限会社黒木商運",
		hiragana: "ゆうげんがいしゃくろきしょううん"
	},
	{
		original: "エムティーサービス",
		hiragana: "えむてぃーさーびす"
	},
	{
		original: "有限会社シンワ物流",
		hiragana: "ゆうげんがいしゃしんわぶつりゅう"
	},
	{
		original: "山兼運送",
		hiragana: "やまけんうんそう"
	},
	{
		original: "亀田トランスポート",
		hiragana: "かめだとらんすぽーと"
	},
	{
		original: "西部運送",
		hiragana: "せいぶうんそう"
	},
	{
		original: "ウォーキング",
		hiragana: "うぉーきんぐ"
	},
	{
		original: "ベストアンサー・九州有限会社",
		hiragana: "べすとあんさー・きゅうしゅうゆうげんがいしゃ"
	},
	{
		original: "東海ＴＡＣロジテム",
		hiragana: "とうかいＴＡＣろじてむ"
	},
	{
		original: "有限会社大恵運輸",
		hiragana: "ゆうげんがいしゃだいけいうんゆ"
	},
	{
		original: "紙興村上",
		hiragana: "かみきょうむらかみ"
	},
	{
		original: "興和建設",
		hiragana: "こうわけんせつ"
	},
	{
		original: "中央ネットサービス",
		hiragana: "ちゅうおうねっとさーびす"
	},
	{
		original: "いわさき",
		hiragana: "いわさき"
	},
	{
		original: "鎌田急送有限会社",
		hiragana: "かまだきゅうそうゆうげんがいしゃ"
	},
	{
		original: "中央流通センター",
		hiragana: "ちゅうおうりゅうつうせんたー"
	},
	{
		original: "ブレーン",
		hiragana: "ぶれーん"
	},
	{
		original: "中山運輸有限会社",
		hiragana: "なかやまうんゆゆうげんがいしゃ"
	},
	{
		original: "サンイーストポートサービス",
		hiragana: "さんいーすとぽーとさーびす"
	},
	{
		original: "ワールドトランス",
		hiragana: "わーるどとらんす"
	},
	{
		original: "球陽興産",
		hiragana: "たまようこうさん"
	},
	{
		original: "有限会社ヤマタツ冷凍輸送",
		hiragana: "ゆうげんがいしゃやまたつれいとうゆそう"
	},
	{
		original: "新潟福山通運",
		hiragana: "にいがたふくやまつううん"
	},
	{
		original: "利京運輸倉庫",
		hiragana: "りきょううんゆそうこ"
	},
	{
		original: "新和託送",
		hiragana: "しんわたくそう"
	},
	{
		original: "日本陸運",
		hiragana: "にっぽんりくうん"
	},
	{
		original: "クールワカミヤ",
		hiragana: "くーるわかみや"
	},
	{
		original: "千葉共栄運輸",
		hiragana: "ちばきょうえいうんゆ"
	},
	{
		original: "白河陸運有限会社",
		hiragana: "しらかわりくうんゆうげんがいしゃ"
	},
	{
		original: "アジアソフトインフォ",
		hiragana: "あじあそふといんふぉ"
	},
	{
		original: "有限会社三幸運輸",
		hiragana: "ゆうげんがいしゃみつゆきうんゆ"
	},
	{
		original: "大麻運送有限会社",
		hiragana: "たいまうんそうゆうげんがいしゃ"
	},
	{
		original: "ウエストロジ・コーポレーション",
		hiragana: "うえすとろじ・こーぽれーしょん"
	},
	{
		original: "さくら商事",
		hiragana: "さくらしょうじ"
	},
	{
		original: "川野商事",
		hiragana: "かわのしょうじ"
	},
	{
		original: "九建運輸産業",
		hiragana: "きゅうけんうんゆさんぎょう"
	},
	{
		original: "新吾運輸",
		hiragana: "しんごうんゆ"
	},
	{
		original: "アドバンス物流",
		hiragana: "あどばんすぶつりゅう"
	},
	{
		original: "ワンズバディ",
		hiragana: "わんずばでぃ"
	},
	{
		original: "興国運輸",
		hiragana: "こうこくうんゆ"
	},
	{
		original: "ファースト",
		hiragana: "ふぁーすと"
	},
	{
		original: "有限会社レックファクトリー",
		hiragana: "ゆうげんがいしゃれっくふぁくとりー"
	},
	{
		original: "有限会社堀江重機",
		hiragana: "ゆうげんがいしゃほりえじゅうき"
	},
	{
		original: "有限会社バンコム企興",
		hiragana: "ゆうげんがいしゃばんこむききょう"
	},
	{
		original: "宮崎コスモ物流",
		hiragana: "みやざきこすもぶつりゅう"
	},
	{
		original: "有限会社日高物流",
		hiragana: "ゆうげんがいしゃひだかぶつりゅう"
	},
	{
		original: "エイチ・ビー・エス",
		hiragana: "えいち・びー・えす"
	},
	{
		original: "九化物流",
		hiragana: "きゅうばけものりゅう"
	},
	{
		original: "昭和運輸",
		hiragana: "しょうわうんゆ"
	},
	{
		original: "共和運輸",
		hiragana: "きょうわうんゆ"
	},
	{
		original: "クレベ運送",
		hiragana: "くれべうんそう"
	},
	{
		original: "長野コスモ物流",
		hiragana: "ながのこすもぶつりゅう"
	},
	{
		original: "ＭＳＵ",
		hiragana: "ＭＳＵ"
	},
	{
		original: "トーカイ",
		hiragana: "とーかい"
	},
	{
		original: "遠藤運送有限会社",
		hiragana: "えんどううんそうゆうげんがいしゃ"
	},
	{
		original: "ザ・ムーバー",
		hiragana: "ざ・むーばー"
	},
	{
		original: "ＭＲＳ",
		hiragana: "ＭＲＳ"
	},
	{
		original: "ハウスロジコム",
		hiragana: "はうすろじこむ"
	},
	{
		original: "丸全関西物流",
		hiragana: "まるぜんかんさいぶつりゅう"
	},
	{
		original: "朝倉運輸",
		hiragana: "あさくらうんゆ"
	},
	{
		original: "ビバックトランスポート",
		hiragana: "びばっくとらんすぽーと"
	},
	{
		original: "大長運輸有限会社",
		hiragana: "たいちょううんゆゆうげんがいしゃ"
	},
	{
		original: "カキウチ商事",
		hiragana: "かきうちしょうじ"
	},
	{
		original: "新幸総合物流有限会社",
		hiragana: "しんさちそうごうぶつりゅうゆうげんがいしゃ"
	},
	{
		original: "豊島運輸有限会社",
		hiragana: "とよしまうんゆゆうげんがいしゃ"
	},
	{
		original: "一徹総業",
		hiragana: "いってつそうぎょう"
	},
	{
		original: "ソリューション",
		hiragana: "そりゅーしょん"
	},
	{
		original: "エキスパート",
		hiragana: "えきすぱーと"
	},
	{
		original: "サービス運輸",
		hiragana: "さーびすうんゆ"
	},
	{
		original: "有限会社大島商運",
		hiragana: "ゆうげんがいしゃおおしましょううん"
	},
	{
		original: "中国ニシリク",
		hiragana: "ちゅうごくにしりく"
	},
	{
		original: "ＮＡＶＩＸサービス",
		hiragana: "ＮＡＶＩＸさーびす"
	},
	{
		original: "西日本高速運輸",
		hiragana: "にしにほんこうそくうんゆ"
	},
	{
		original: "有限会社モリキュウ",
		hiragana: "ゆうげんがいしゃもりきゅう"
	},
	{
		original: "山陽運輸",
		hiragana: "さんよううんゆ"
	},
	{
		original: "有限会社丸藤運輸",
		hiragana: "ゆうげんがいしゃまるふじうんゆ"
	},
	{
		original: "矢代運送有限会社",
		hiragana: "やしろうんそうゆうげんがいしゃ"
	},
	{
		original: "有限会社芦辺運送",
		hiragana: "ゆうげんがいしゃあしべうんそう"
	},
	{
		original: "セラット",
		hiragana: "せらっと"
	},
	{
		original: "広島カーゴ",
		hiragana: "ひろしまかーご"
	},
	{
		original: "Ａｌｐｈａ－Ｚ",
		hiragana: "Ａｌｐｈａ－Ｚ"
	},
	{
		original: "コトブキ運送",
		hiragana: "ことぶきうんそう"
	},
	{
		original: "洸陽",
		hiragana: "こうよう"
	},
	{
		original: "大阪日電運輸",
		hiragana: "おおさかにちでんうんゆ"
	},
	{
		original: "湾岸ケミカル",
		hiragana: "わんがんけみかる"
	},
	{
		original: "天道",
		hiragana: "てんどう"
	},
	{
		original: "大興運送",
		hiragana: "たいこううんそう"
	},
	{
		original: "グッドビリーヴ",
		hiragana: "ぐっどびりーゔ"
	},
	{
		original: "和興運送",
		hiragana: "わきょううんそう"
	},
	{
		original: "アイ・エス・ケイ",
		hiragana: "あい・えす・けい"
	},
	{
		original: "明新運輸有限会社",
		hiragana: "めいしんうんゆゆうげんがいしゃ"
	},
	{
		original: "おいらせ輸送",
		hiragana: "おいらせゆそう"
	},
	{
		original: "有限会社ジャスティス",
		hiragana: "ゆうげんがいしゃじゃすてぃす"
	},
	{
		original: "平和貨物運送",
		hiragana: "へいわかもつうんそう"
	},
	{
		original: "王子エクスプレス",
		hiragana: "おうじえくすぷれす"
	},
	{
		original: "有限会社隼運送",
		hiragana: "ゆうげんがいしゃはやぶさうんそう"
	},
	{
		original: "日吉運輸",
		hiragana: "ひよしうんゆ"
	},
	{
		original: "久保運送",
		hiragana: "くぼうんそう"
	},
	{
		original: "ビジネスサポート",
		hiragana: "びじねすさぽーと"
	},
	{
		original: "コモス",
		hiragana: "こもす"
	},
	{
		original: "小笠原運送",
		hiragana: "おがさわらうんそう"
	},
	{
		original: "マロン環境",
		hiragana: "まろんかんきょう"
	},
	{
		original: "ＡＧＣロジスティクス",
		hiragana: "ＡＧＣろじすてぃくす"
	},
	{
		original: "日通高知運輸",
		hiragana: "にっつうこうちうんゆ"
	},
	{
		original: "有限会社プレスト物流",
		hiragana: "ゆうげんがいしゃぷれすとぶつりゅう"
	},
	{
		original: "善心",
		hiragana: "ぜんしん"
	},
	{
		original: "フコク資材",
		hiragana: "ふこくしざい"
	},
	{
		original: "有限会社東山興運",
		hiragana: "ゆうげんがいしゃひがしやまきょううん"
	},
	{
		original: "大八運送有限会社",
		hiragana: "だいはちうんそうゆうげんがいしゃ"
	},
	{
		original: "高末ホールディングス",
		hiragana: "たかまつほーるでぃんぐす"
	},
	{
		original: "有限会社道央貨物運送",
		hiragana: "ゆうげんがいしゃどうおうかもつうんそう"
	},
	{
		original: "有限会社モリショウ",
		hiragana: "ゆうげんがいしゃもりしょう"
	},
	{
		original: "新生",
		hiragana: "しんせい"
	},
	{
		original: "オクムラ産業",
		hiragana: "おくむらさんぎょう"
	},
	{
		original: "伸交運輸",
		hiragana: "しんこううんゆ"
	},
	{
		original: "香永",
		hiragana: "かおりえい"
	},
	{
		original: "有限会社ニューライフ急送",
		hiragana: "ゆうげんがいしゃにゅーらいふきゅうそう"
	},
	{
		original: "有限会社湯浅商会",
		hiragana: "ゆうげんがいしゃゆあさしょうかい"
	},
	{
		original: "ドライブワークス",
		hiragana: "どらいぶわーくす"
	},
	{
		original: "有限会社ソレイユ",
		hiragana: "ゆうげんがいしゃそれいゆ"
	},
	{
		original: "フジタ物流",
		hiragana: "ふじたぶつりゅう"
	},
	{
		original: "宇津野運輸有限会社",
		hiragana: "うづのうんゆゆうげんがいしゃ"
	},
	{
		original: "中村運輸",
		hiragana: "なかむらうんゆ"
	},
	{
		original: "近藤エクスプレス",
		hiragana: "こんどうえくすぷれす"
	},
	{
		original: "日通旭川運輸",
		hiragana: "にっつうあさひかわうんゆ"
	},
	{
		original: "ジャパン通商",
		hiragana: "じゃぱんつうしょう"
	},
	{
		original: "文京運送",
		hiragana: "ぶんきょううんそう"
	},
	{
		original: "システムスタッフコーポレーション",
		hiragana: "しすてむすたっふこーぽれーしょん"
	},
	{
		original: "有限会社明日香運送",
		hiragana: "ゆうげんがいしゃあすかうんそう"
	},
	{
		original: "ディーエヌシー物流",
		hiragana: "でぃーえぬしーぶつりゅう"
	},
	{
		original: "ＶＩＴ",
		hiragana: "ＶＩＴ"
	},
	{
		original: "マルトチ運輸",
		hiragana: "まるとちうんゆ"
	},
	{
		original: "深谷植物運輸",
		hiragana: "ふかやしょくぶつうんゆ"
	},
	{
		original: "花泉貨物自動車有限会社",
		hiragana: "はないずみかもつじどうしゃゆうげんがいしゃ"
	},
	{
		original: "有限会社オオノトランス",
		hiragana: "ゆうげんがいしゃおおのとらんす"
	},
	{
		original: "有限会社平野運送",
		hiragana: "ゆうげんがいしゃへいやうんそう"
	},
	{
		original: "有限会社アイライン",
		hiragana: "ゆうげんがいしゃあいらいん"
	},
	{
		original: "有限会社ＭＳＣ",
		hiragana: "ゆうげんがいしゃＭＳＣ"
	},
	{
		original: "有限会社渡辺工機梱包",
		hiragana: "ゆうげんがいしゃわたなべこうきこんぽう"
	},
	{
		original: "合同会社ティープラス",
		hiragana: "ごうどうかいしゃてぃーぷらす"
	},
	{
		original: "丸藤運輸有限会社",
		hiragana: "まるふじうんゆゆうげんがいしゃ"
	},
	{
		original: "有限会社トランスポートジュン",
		hiragana: "ゆうげんがいしゃとらんすぽーとじゅん"
	},
	{
		original: "ティーエルシー",
		hiragana: "てぃーえるしー"
	},
	{
		original: "山岸興業",
		hiragana: "やまぎしこうぎょう"
	},
	{
		original: "有限会社伊藤倉庫",
		hiragana: "ゆうげんがいしゃいとうそうこ"
	},
	{
		original: "カネヒロ運輸",
		hiragana: "かねひろうんゆ"
	},
	{
		original: "東和宇都宮石産",
		hiragana: "とうわうつのみやいしさん"
	},
	{
		original: "フジエナジー",
		hiragana: "ふじえなじー"
	},
	{
		original: "大阪今津運輸倉庫",
		hiragana: "おおさかいまづうんゆそうこ"
	},
	{
		original: "日通相馬港運輸",
		hiragana: "にっつうそうまみなとうんゆ"
	},
	{
		original: "アップワード埼玉",
		hiragana: "あっぷわーどさいたま"
	},
	{
		original: "橘運輸",
		hiragana: "たちばなうんゆ"
	},
	{
		original: "有限会社ハロー",
		hiragana: "ゆうげんがいしゃはろー"
	},
	{
		original: "奥野運輸産業",
		hiragana: "おくのうんゆさんぎょう"
	},
	{
		original: "笠井運送有限会社",
		hiragana: "かさいうんそうゆうげんがいしゃ"
	},
	{
		original: "丸神運輸",
		hiragana: "まるかみうんゆ"
	},
	{
		original: "有限会社トレンビューロジスティックス",
		hiragana: "ゆうげんがいしゃとれんびゅーろじすてぃっくす"
	},
	{
		original: "有限会社菅野運送",
		hiragana: "ゆうげんがいしゃかんのうんそう"
	},
	{
		original: "グレート",
		hiragana: "ぐれーと"
	},
	{
		original: "有限会社ニューズネット",
		hiragana: "ゆうげんがいしゃにゅーずねっと"
	},
	{
		original: "有限会社中沢運送",
		hiragana: "ゆうげんがいしゃなかざわうんそう"
	},
	{
		original: "有限会社平井運送",
		hiragana: "ゆうげんがいしゃひらいうんそう"
	},
	{
		original: "有限会社清田運送",
		hiragana: "ゆうげんがいしゃきよだうんそう"
	},
	{
		original: "アクセス",
		hiragana: "あくせす"
	},
	{
		original: "有限会社西野急便",
		hiragana: "ゆうげんがいしゃにしのきゅうびん"
	},
	{
		original: "東陶運送",
		hiragana: "とうとううんそう"
	},
	{
		original: "有限会社千幸物流",
		hiragana: "ゆうげんがいしゃちゆきぶつりゅう"
	},
	{
		original: "千葉運送",
		hiragana: "ちばうんそう"
	},
	{
		original: "ＯＣＴＯＰＵＳ２４",
		hiragana: "ＯＣＴＯＰＵＳ２４"
	},
	{
		original: "サクサプロアシスト",
		hiragana: "さくさぷろあしすと"
	},
	{
		original: "石井運輸",
		hiragana: "いしいうんゆ"
	},
	{
		original: "ニッパック物流",
		hiragana: "にっぱっくぶつりゅう"
	},
	{
		original: "有限会社おさだ",
		hiragana: "ゆうげんがいしゃおさだ"
	},
	{
		original: "Ｄａｉｗａ　ＧＦ　Ｌｏｇｉ",
		hiragana: "Ｄａｉｗａ　ＧＦ　Ｌｏｇｉ"
	},
	{
		original: "有限会社武安運送",
		hiragana: "ゆうげんがいしゃたけやすうんそう"
	},
	{
		original: "ＫＥｉエクスプレス",
		hiragana: "ＫＥｉえくすぷれす"
	},
	{
		original: "西湘流通サービス",
		hiragana: "せいしょうりゅうつうさーびす"
	},
	{
		original: "モリカワ",
		hiragana: "もりかわ"
	},
	{
		original: "アドバンス",
		hiragana: "あどばんす"
	},
	{
		original: "ＬＡＴ",
		hiragana: "ＬＡＴ"
	},
	{
		original: "有限会社神風興業",
		hiragana: "ゆうげんがいしゃかみかぜこうぎょう"
	},
	{
		original: "榛名北部運輸有限会社",
		hiragana: "はるなほくぶうんゆゆうげんがいしゃ"
	},
	{
		original: "有限会社平野工業",
		hiragana: "ゆうげんがいしゃへいやこうぎょう"
	},
	{
		original: "千種輸送",
		hiragana: "ちぐさゆそう"
	},
	{
		original: "栄吉曳船",
		hiragana: "えいきちえいせん"
	},
	{
		original: "関東フォワード",
		hiragana: "かんとうふぉわーど"
	},
	{
		original: "ヘイワ陸運",
		hiragana: "へいわりくうん"
	},
	{
		original: "有限会社スカイロジスティクス",
		hiragana: "ゆうげんがいしゃすかいろじすてぃくす"
	},
	{
		original: "アイナサービス",
		hiragana: "あいなさーびす"
	},
	{
		original: "野口運送",
		hiragana: "のぐちうんそう"
	},
	{
		original: "有限会社中部工業",
		hiragana: "ゆうげんがいしゃちゅうぶこうぎょう"
	},
	{
		original: "共立運輸",
		hiragana: "きょうりつうんゆ"
	},
	{
		original: "有限会社三友",
		hiragana: "ゆうげんがいしゃみつとも"
	},
	{
		original: "有限会社協和運輸",
		hiragana: "ゆうげんがいしゃきょうわうんゆ"
	},
	{
		original: "ルーフィ",
		hiragana: "るーふぃ"
	},
	{
		original: "内山",
		hiragana: "うちやま"
	},
	{
		original: "有限会社石井物流システム",
		hiragana: "ゆうげんがいしゃいしいぶつりゅうしすてむ"
	},
	{
		original: "川端運輸",
		hiragana: "かわばたうんゆ"
	},
	{
		original: "新鶴来陸送",
		hiragana: "にいつるらいりくそう"
	},
	{
		original: "小島飼料",
		hiragana: "こじましりょう"
	},
	{
		original: "有限会社萩尾運送",
		hiragana: "ゆうげんがいしゃはぎおうんそう"
	},
	{
		original: "黒川運輸",
		hiragana: "くろかわうんゆ"
	},
	{
		original: "アサヒ急送",
		hiragana: "あさひきゅうそう"
	},
	{
		original: "ＭＳＴ",
		hiragana: "ＭＳＴ"
	},
	{
		original: "有限会社オオスミ運輸",
		hiragana: "ゆうげんがいしゃおおすみうんゆ"
	},
	{
		original: "新発田陸送",
		hiragana: "しばたりくそう"
	},
	{
		original: "渡邉物流",
		hiragana: "わたなべぶつりゅう"
	},
	{
		original: "日生",
		hiragana: "にっせい"
	},
	{
		original: "サワ・コーポレーション",
		hiragana: "さわ・こーぽれーしょん"
	},
	{
		original: "巽南運送",
		hiragana: "たつみみなみうんそう"
	},
	{
		original: "日本流通サービス",
		hiragana: "にほんりゅうとおりさーびす"
	},
	{
		original: "ジャパンフーズサービス",
		hiragana: "じゃぱんふーずさーびす"
	},
	{
		original: "藤サービス",
		hiragana: "ふじさーびす"
	},
	{
		original: "有限会社ユーキ",
		hiragana: "ゆうげんがいしゃゆーき"
	},
	{
		original: "有限会社椿山商運",
		hiragana: "ゆうげんがいしゃつばきやましょううん"
	},
	{
		original: "信州名鉄流通",
		hiragana: "しんしゅうめいてつりゅうつう"
	},
	{
		original: "テイカ倉庫",
		hiragana: "ていかそうこ"
	},
	{
		original: "有限会社岡田運輸",
		hiragana: "ゆうげんがいしゃおかだうんゆ"
	},
	{
		original: "ハヤミ",
		hiragana: "はやみ"
	},
	{
		original: "エービーコントラクト",
		hiragana: "えーびーこんとらくと"
	},
	{
		original: "富良野日通運輸",
		hiragana: "ふらのにっつううんゆ"
	},
	{
		original: "有限会社ツクバ商事",
		hiragana: "ゆうげんがいしゃつくばしょうじ"
	},
	{
		original: "有限会社岡田商事",
		hiragana: "ゆうげんがいしゃおかだしょうじ"
	},
	{
		original: "ＹＫサービス",
		hiragana: "ＹＫさーびす"
	},
	{
		original: "新成産業",
		hiragana: "しんせいさんぎょう"
	},
	{
		original: "ＫＵＫ",
		hiragana: "ＫＵＫ"
	},
	{
		original: "清進運輸",
		hiragana: "きよししんうんゆ"
	},
	{
		original: "メタル便",
		hiragana: "めたるびん"
	},
	{
		original: "青山運輸",
		hiragana: "あおやまうんゆ"
	},
	{
		original: "中村興業",
		hiragana: "なかむらこうぎょう"
	},
	{
		original: "釧倉運輸",
		hiragana: "くしくらうんゆ"
	},
	{
		original: "加越倉庫",
		hiragana: "かえつそうこ"
	},
	{
		original: "宝栄",
		hiragana: "たからさかえ"
	},
	{
		original: "田中商運",
		hiragana: "たなかしょううん"
	},
	{
		original: "有限会社三代運送",
		hiragana: "ゆうげんがいしゃさんだいうんそう"
	},
	{
		original: "有限会社松尾吉郎運送",
		hiragana: "ゆうげんがいしゃまつおきちろううんそう"
	},
	{
		original: "えこぶ合同会社",
		hiragana: "えこぶごうどうかいしゃ"
	},
	{
		original: "アソート",
		hiragana: "あそーと"
	},
	{
		original: "エービーエクスプレス",
		hiragana: "えーびーえくすぷれす"
	},
	{
		original: "ジャパンロードライン",
		hiragana: "じゃぱんろーどらいん"
	},
	{
		original: "有限会社福田産業",
		hiragana: "ゆうげんがいしゃふくださんぎょう"
	},
	{
		original: "インターフード",
		hiragana: "いんたーふーど"
	},
	{
		original: "南和運送",
		hiragana: "みなみわうんそう"
	},
	{
		original: "有限会社都心エクスプレス",
		hiragana: "ゆうげんがいしゃとしんえくすぷれす"
	},
	{
		original: "山才運送有限会社",
		hiragana: "やまさいうんそうゆうげんがいしゃ"
	},
	{
		original: "フジタ運送",
		hiragana: "ふじたうんそう"
	},
	{
		original: "ロジコムコーポレーション",
		hiragana: "ろじこむこーぽれーしょん"
	},
	{
		original: "三勝運輸",
		hiragana: "さんしょううんゆ"
	},
	{
		original: "日通大阪物流",
		hiragana: "にっつうおおさかぶつりゅう"
	},
	{
		original: "有限会社エヌエムアール",
		hiragana: "ゆうげんがいしゃえぬえむあーる"
	},
	{
		original: "ティーエヌロジスティックス",
		hiragana: "てぃーえぬろじすてぃっくす"
	},
	{
		original: "有限会社Ｅ・Ｕライン",
		hiragana: "ゆうげんがいしゃＥ・Ｕらいん"
	},
	{
		original: "リベルトライン",
		hiragana: "りべるとらいん"
	},
	{
		original: "東日本物流サービス",
		hiragana: "ひがしにほんぶつりゅうさーびす"
	},
	{
		original: "幸誠工業",
		hiragana: "さちまことこうぎょう"
	},
	{
		original: "有限会社ジャストサービス",
		hiragana: "ゆうげんがいしゃじゃすとさーびす"
	},
	{
		original: "大坪運送",
		hiragana: "おおつぼうんそう"
	},
	{
		original: "心和通商",
		hiragana: "こころかずみちしょう"
	},
	{
		original: "丸大運送",
		hiragana: "まるだいうんそう"
	},
	{
		original: "アシストワン",
		hiragana: "あしすとわん"
	},
	{
		original: "新秋木運輸",
		hiragana: "しんしゅうきうんゆ"
	},
	{
		original: "マルエス",
		hiragana: "まるえす"
	},
	{
		original: "末広陸運",
		hiragana: "すえひろりくうん"
	},
	{
		original: "藤田運送有限会社",
		hiragana: "ふじたうんそうゆうげんがいしゃ"
	},
	{
		original: "三通",
		hiragana: "さんとおり"
	},
	{
		original: "いしや",
		hiragana: "いしや"
	},
	{
		original: "有限会社ハーモニースタッフサービス",
		hiragana: "ゆうげんがいしゃはーもにーすたっふさーびす"
	},
	{
		original: "岩瀬運送",
		hiragana: "いわせうんそう"
	},
	{
		original: "有限会社日本軽貨物",
		hiragana: "ゆうげんがいしゃにっぽんけいかもつ"
	},
	{
		original: "アスタム",
		hiragana: "あすたむ"
	},
	{
		original: "有限会社タナベ商会",
		hiragana: "ゆうげんがいしゃたなべしょうかい"
	},
	{
		original: "有限会社富永運送店",
		hiragana: "ゆうげんがいしゃとみながうんそうてん"
	},
	{
		original: "有限会社八商運輸",
		hiragana: "ゆうげんがいしゃはちしょううんゆ"
	},
	{
		original: "柴田運送",
		hiragana: "しばたうんそう"
	},
	{
		original: "芳賀通運",
		hiragana: "はがつううん"
	},
	{
		original: "国松運輸",
		hiragana: "くにまつうんゆ"
	},
	{
		original: "有限会社山城陸送",
		hiragana: "ゆうげんがいしゃやましろりくそう"
	},
	{
		original: "有限会社小川運送",
		hiragana: "ゆうげんがいしゃおがわうんそう"
	},
	{
		original: "烏山運輸",
		hiragana: "からすやまうんゆ"
	},
	{
		original: "小春本舗有限会社",
		hiragana: "こはるほんぽゆうげんがいしゃ"
	},
	{
		original: "有限会社ドライバーサービス",
		hiragana: "ゆうげんがいしゃどらいばーさーびす"
	},
	{
		original: "幸福運送",
		hiragana: "こうふくうんそう"
	},
	{
		original: "高末急送",
		hiragana: "たかまつきゅうそう"
	},
	{
		original: "萩原・運輸",
		hiragana: "はぎわら・うんゆ"
	},
	{
		original: "有限会社カネイ運送",
		hiragana: "ゆうげんがいしゃかねいうんそう"
	},
	{
		original: "アイ物流彩京",
		hiragana: "あいぶつりゅうさいきょう"
	},
	{
		original: "ＫＣＬ",
		hiragana: "ＫＣＬ"
	},
	{
		original: "神末運送",
		hiragana: "かみまつうんそう"
	},
	{
		original: "武田商事",
		hiragana: "たけだしょうじ"
	},
	{
		original: "室山運輸",
		hiragana: "むろやまうんゆ"
	},
	{
		original: "藤松運輸倉庫",
		hiragana: "ふじまつうんゆそうこ"
	},
	{
		original: "丸二運送",
		hiragana: "まるにうんそう"
	},
	{
		original: "三幸運輸",
		hiragana: "みつゆきうんゆ"
	},
	{
		original: "有限会社誠和運送",
		hiragana: "ゆうげんがいしゃせいわうんそう"
	},
	{
		original: "関西陸運",
		hiragana: "かんさいりくうん"
	},
	{
		original: "幸信物流",
		hiragana: "ゆきのぶぶつりゅう"
	},
	{
		original: "荒木運輸サービス",
		hiragana: "あらきうんゆさーびす"
	},
	{
		original: "有限会社徳島軽運送",
		hiragana: "ゆうげんがいしゃとくしまけいうんそう"
	},
	{
		original: "ティースカイ",
		hiragana: "てぃーすかい"
	},
	{
		original: "有限会社北部運輸",
		hiragana: "ゆうげんがいしゃほくぶうんゆ"
	},
	{
		original: "中央運送有限会社",
		hiragana: "ちゅうおううんそうゆうげんがいしゃ"
	},
	{
		original: "深津梱包有限会社",
		hiragana: "ふかつこんぽうゆうげんがいしゃ"
	},
	{
		original: "トーコーエキスプレス",
		hiragana: "とーこーえきすぷれす"
	},
	{
		original: "マック",
		hiragana: "まっく"
	},
	{
		original: "ＳＰＢ－ＮＣ",
		hiragana: "ＳＰＢ－ＮＣ"
	},
	{
		original: "関東ロジテック有限会社",
		hiragana: "かんとうろじてっくゆうげんがいしゃ"
	},
	{
		original: "京阪商事",
		hiragana: "けいはんしょうじ"
	},
	{
		original: "ＴＮＳ",
		hiragana: "ＴＮＳ"
	},
	{
		original: "トータルライフサービス",
		hiragana: "とーたるらいふさーびす"
	},
	{
		original: "平成運輸倉庫",
		hiragana: "へいせいうんゆそうこ"
	},
	{
		original: "有限会社平松運送",
		hiragana: "ゆうげんがいしゃひらまつうんそう"
	},
	{
		original: "大聖寺運輸",
		hiragana: "だいしょうじうんゆ"
	},
	{
		original: "寿陸運",
		hiragana: "ひさしりくうん"
	},
	{
		original: "有限会社中野梱包設備",
		hiragana: "ゆうげんがいしゃなかのこんぽうせつび"
	},
	{
		original: "有限会社亀山社中",
		hiragana: "ゆうげんがいしゃかめやましゃちゅう"
	},
	{
		original: "徳倉運輸",
		hiragana: "とくくらうんゆ"
	},
	{
		original: "滋賀ニシリク",
		hiragana: "しがにしりく"
	},
	{
		original: "有限会社平田トランスポート",
		hiragana: "ゆうげんがいしゃひらたとらんすぽーと"
	},
	{
		original: "有限会社大牟礼運送",
		hiragana: "ゆうげんがいしゃだいむれうんそう"
	},
	{
		original: "中島丸寛",
		hiragana: "なかじままるひろし"
	},
	{
		original: "丸上運送",
		hiragana: "まるうえうんそう"
	},
	{
		original: "ペンギン引越センター",
		hiragana: "ぺんぎんひっこしせんたー"
	},
	{
		original: "和光運輸",
		hiragana: "わこううんゆ"
	},
	{
		original: "有限会社松山吉忠",
		hiragana: "ゆうげんがいしゃまつやまよしただ"
	},
	{
		original: "東進",
		hiragana: "とうしん"
	},
	{
		original: "ライフ",
		hiragana: "らいふ"
	},
	{
		original: "羽塚運輸",
		hiragana: "はねつかうんゆ"
	},
	{
		original: "東総物流",
		hiragana: "とうそうぶつりゅう"
	},
	{
		original: "東神急送有限会社",
		hiragana: "とうしんきゅうそうゆうげんがいしゃ"
	},
	{
		original: "有限会社野村運輸",
		hiragana: "ゆうげんがいしゃのむらうんゆ"
	},
	{
		original: "有限会社光隆運輸",
		hiragana: "ゆうげんがいしゃみつたかうんゆ"
	},
	{
		original: "有限会社プロスコーポレーション",
		hiragana: "ゆうげんがいしゃぷろすこーぽれーしょん"
	},
	{
		original: "岡田物流",
		hiragana: "おかだぶつりゅう"
	},
	{
		original: "ステハンステイフ",
		hiragana: "すてはんすていふ"
	},
	{
		original: "悠雅",
		hiragana: "ゆうまさ"
	},
	{
		original: "利根運輸有限会社",
		hiragana: "とねうんゆゆうげんがいしゃ"
	},
	{
		original: "白山急配有限会社",
		hiragana: "はくさんきゅうはいゆうげんがいしゃ"
	},
	{
		original: "スガイ運輸",
		hiragana: "すがいうんゆ"
	},
	{
		original: "トマルロジスティクス",
		hiragana: "とまるろじすてぃくす"
	},
	{
		original: "鹿屋陸運有限会社",
		hiragana: "かのやりくうんゆうげんがいしゃ"
	},
	{
		original: "ぴーす",
		hiragana: "ぴーす"
	},
	{
		original: "能登",
		hiragana: "のと"
	},
	{
		original: "有限会社入船運送",
		hiragana: "ゆうげんがいしゃいりふねうんそう"
	},
	{
		original: "Ｇ．Ｍ．ＰＷＯＲＫＳ",
		hiragana: "Ｇ．Ｍ．ＰＷＯＲＫＳ"
	},
	{
		original: "アップル運送",
		hiragana: "あっぷるうんそう"
	},
	{
		original: "昭和倉庫",
		hiragana: "しょうわそうこ"
	},
	{
		original: "千葉朝陽運輸",
		hiragana: "ちばあさひうんゆ"
	},
	{
		original: "フクダ物流センター",
		hiragana: "ふくだぶつりゅうせんたー"
	},
	{
		original: "アールシー",
		hiragana: "あーるしー"
	},
	{
		original: "エルティ熊本",
		hiragana: "えるてぃくまもと"
	},
	{
		original: "北斗運輸",
		hiragana: "ほくとうんゆ"
	},
	{
		original: "中央物流有限会社",
		hiragana: "ちゅうおうぶつりゅうゆうげんがいしゃ"
	},
	{
		original: "倉敷総合物流有限会社",
		hiragana: "くらしきそうごうぶつりゅうゆうげんがいしゃ"
	},
	{
		original: "ゼロイチ",
		hiragana: "ぜろいち"
	},
	{
		original: "さかい",
		hiragana: "さかい"
	},
	{
		original: "有限会社中央急配社",
		hiragana: "ゆうげんがいしゃちゅうおうきゅうはいしゃ"
	},
	{
		original: "アイクラフト",
		hiragana: "あいくらふと"
	},
	{
		original: "真成商事",
		hiragana: "まなりしょうじ"
	},
	{
		original: "共和運輸",
		hiragana: "きょうわうんゆ"
	},
	{
		original: "有限会社萱森興業運輸",
		hiragana: "ゆうげんがいしゃかやもりこうぎょううんゆ"
	},
	{
		original: "有限会社佐々喜土木",
		hiragana: "ゆうげんがいしゃさっさきどぼく"
	},
	{
		original: "大和運送",
		hiragana: "やまとうんそう"
	},
	{
		original: "三共トラック",
		hiragana: "さんきょうとらっく"
	},
	{
		original: "石島運送有限会社",
		hiragana: "いしじまうんそうゆうげんがいしゃ"
	},
	{
		original: "福井口運送",
		hiragana: "ふくいくちうんそう"
	},
	{
		original: "エブリワーク",
		hiragana: "えぶりわーく"
	},
	{
		original: "有限会社今川商事",
		hiragana: "ゆうげんがいしゃいまがわしょうじ"
	},
	{
		original: "颯運送",
		hiragana: "さつうんそう"
	},
	{
		original: "Ｑカーゴ",
		hiragana: "Ｑかーご"
	},
	{
		original: "有限会社末原通商",
		hiragana: "ゆうげんがいしゃすえはらつうしょう"
	},
	{
		original: "有限会社丸一商店",
		hiragana: "ゆうげんがいしゃまるいちしょうてん"
	},
	{
		original: "真成商事有限会社",
		hiragana: "まなりしょうじゆうげんがいしゃ"
	},
	{
		original: "有限会社タキグチ",
		hiragana: "ゆうげんがいしゃたきぐち"
	},
	{
		original: "有限会社昭和運送",
		hiragana: "ゆうげんがいしゃしょうわうんそう"
	},
	{
		original: "有限会社クローバー運輸",
		hiragana: "ゆうげんがいしゃくろーばーうんゆ"
	},
	{
		original: "平和運輸産業",
		hiragana: "へいわうんゆさんぎょう"
	},
	{
		original: "大急",
		hiragana: "だいきゅう"
	},
	{
		original: "有限会社晃和運輸",
		hiragana: "ゆうげんがいしゃあきらわうんゆ"
	},
	{
		original: "坂元運送",
		hiragana: "さかもとうんそう"
	},
	{
		original: "イイダ",
		hiragana: "いいだ"
	},
	{
		original: "司運送",
		hiragana: "つかさうんそう"
	},
	{
		original: "日通庄内運輸",
		hiragana: "にっつうしょうないうんゆ"
	},
	{
		original: "有限会社共栄陸送",
		hiragana: "ゆうげんがいしゃきょうえいりくそう"
	},
	{
		original: "神戸水岩運送",
		hiragana: "こうべみずいわうんそう"
	},
	{
		original: "ダイコーコーポレーション",
		hiragana: "だいこーこーぽれーしょん"
	},
	{
		original: "九州ヤマヨ運輸",
		hiragana: "きゅうしゅうやまようんゆ"
	},
	{
		original: "ジェイライナー",
		hiragana: "じぇいらいなー"
	},
	{
		original: "イーエス・ライン",
		hiragana: "いーえす・らいん"
	},
	{
		original: "ＳＳ物流",
		hiragana: "ＳＳぶつりゅう"
	},
	{
		original: "祥朝",
		hiragana: "しょうあさ"
	},
	{
		original: "有限会社吉備路急送",
		hiragana: "ゆうげんがいしゃきびみちきゅうそう"
	},
	{
		original: "丸喜運輸",
		hiragana: "まるきうんゆ"
	},
	{
		original: "有限会社引っ越しのハッピードライブ",
		hiragana: "ゆうげんがいしゃひっこしのはっぴーどらいぶ"
	},
	{
		original: "横関運送",
		hiragana: "よこぜきうんそう"
	},
	{
		original: "ニチウン",
		hiragana: "にちうん"
	},
	{
		original: "山形運輸",
		hiragana: "やまがたうんゆ"
	},
	{
		original: "有限会社エイワ物流",
		hiragana: "ゆうげんがいしゃえいわぶつりゅう"
	},
	{
		original: "ＳＢＳロジコム北関東",
		hiragana: "ＳＢＳろじこむきたかんとう"
	},
	{
		original: "幸花園",
		hiragana: "さちはなぞの"
	},
	{
		original: "竜洋急送",
		hiragana: "りゅうようきゅうそう"
	},
	{
		original: "富士ロジトランス",
		hiragana: "ふじろじとらんす"
	},
	{
		original: "新田運送",
		hiragana: "にったうんそう"
	},
	{
		original: "サントー",
		hiragana: "さんとー"
	},
	{
		original: "ＮＫＴ",
		hiragana: "ＮＫＴ"
	},
	{
		original: "竹内商店",
		hiragana: "たけうちしょうてん"
	},
	{
		original: "トランスパック",
		hiragana: "とらんすぱっく"
	},
	{
		original: "ウイングス",
		hiragana: "ういんぐす"
	},
	{
		original: "有限会社栃木商運",
		hiragana: "ゆうげんがいしゃとちぎしょううん"
	},
	{
		original: "長原配送",
		hiragana: "ながはらはいそう"
	},
	{
		original: "ワコウ",
		hiragana: "わこう"
	},
	{
		original: "有限会社森藤運送",
		hiragana: "ゆうげんがいしゃもりとううんそう"
	},
	{
		original: "太陽物流",
		hiragana: "たいようぶつりゅう"
	},
	{
		original: "東亜石油",
		hiragana: "とうあせきゆ"
	},
	{
		original: "トライゲート",
		hiragana: "とらいげーと"
	},
	{
		original: "幸和運輸",
		hiragana: "ゆきかずうんゆ"
	},
	{
		original: "有限会社神崎運送",
		hiragana: "ゆうげんがいしゃかんざきうんそう"
	},
	{
		original: "有限会社大昌物流",
		hiragana: "ゆうげんがいしゃだいまさぶつりゅう"
	},
	{
		original: "ＡＩソリューション",
		hiragana: "ＡＩそりゅーしょん"
	},
	{
		original: "有限会社鈴木運送",
		hiragana: "ゆうげんがいしゃすずきうんそう"
	},
	{
		original: "丸都運輸",
		hiragana: "がんとうんゆ"
	},
	{
		original: "引越屋バンバン",
		hiragana: "ひっこしやばんばん"
	},
	{
		original: "堤トラック運送有限会社",
		hiragana: "つつみとらっくうんそうゆうげんがいしゃ"
	},
	{
		original: "スーパー物流有限会社",
		hiragana: "すーぱーぶつりゅうゆうげんがいしゃ"
	},
	{
		original: "土居運送",
		hiragana: "つちいうんそう"
	},
	{
		original: "堀口運輸有限会社",
		hiragana: "ほりぐちうんゆゆうげんがいしゃ"
	},
	{
		original: "ネオトランスモービル",
		hiragana: "ねおとらんすもーびる"
	},
	{
		original: "有限会社三共運送",
		hiragana: "ゆうげんがいしゃさんきょううんそう"
	},
	{
		original: "堺ロジスティクス",
		hiragana: "さかいろじすてぃくす"
	},
	{
		original: "２－ＮＥＴ合同会社",
		hiragana: "２－ＮＥＴごうどうかいしゃ"
	},
	{
		original: "日通札幌流通サービス",
		hiragana: "にっつうさっぽろりゅうつうさーびす"
	},
	{
		original: "有限会社サン流通サービス",
		hiragana: "ゆうげんがいしゃさんりゅうつうさーびす"
	},
	{
		original: "ＡＲＲＯＷＳ",
		hiragana: "ＡＲＲＯＷＳ"
	},
	{
		original: "フジフラワーサービス",
		hiragana: "ふじふらわーさーびす"
	},
	{
		original: "中国トランスポート",
		hiragana: "ちゅうごくとらんすぽーと"
	},
	{
		original: "ニシリク物流",
		hiragana: "にしりくぶつりゅう"
	},
	{
		original: "Ｓｔｒａｉｇｈｔ",
		hiragana: "Ｓｔｒａｉｇｈｔ"
	},
	{
		original: "河内商事",
		hiragana: "かわうちしょうじ"
	},
	{
		original: "有限会社大船運送",
		hiragana: "ゆうげんがいしゃおおふなうんそう"
	},
	{
		original: "有限会社釧秀運輸",
		hiragana: "ゆうげんがいしゃくししゅううんゆ"
	},
	{
		original: "北陸ロジスティクス",
		hiragana: "ほくりくろじすてぃくす"
	},
	{
		original: "有限会社須藤商事",
		hiragana: "ゆうげんがいしゃすどうしょうじ"
	},
	{
		original: "福大運送",
		hiragana: "ふくだいうんそう"
	},
	{
		original: "有限会社鎌倉興産",
		hiragana: "ゆうげんがいしゃかまくらこうさん"
	},
	{
		original: "中江運送",
		hiragana: "なかえうんそう"
	},
	{
		original: "セブンネット",
		hiragana: "せぶんねっと"
	},
	{
		original: "有限会社三幸商事",
		hiragana: "ゆうげんがいしゃみつゆきしょうじ"
	},
	{
		original: "ウィングライン",
		hiragana: "うぃんぐらいん"
	},
	{
		original: "八富運輸",
		hiragana: "はちとみうんゆ"
	},
	{
		original: "三協運輸",
		hiragana: "さんきょううんゆ"
	},
	{
		original: "木村運輸",
		hiragana: "きむらうんゆ"
	},
	{
		original: "有限会社勝森運送",
		hiragana: "ゆうげんがいしゃかちもりうんそう"
	},
	{
		original: "榮商事",
		hiragana: "さかえしょうじ"
	},
	{
		original: "ワイルドライン合同会社",
		hiragana: "わいるどらいんごうどうかいしゃ"
	},
	{
		original: "有限会社札幌ルートサービス",
		hiragana: "ゆうげんがいしゃさっぽろるーとさーびす"
	},
	{
		original: "丸鈴運送有限会社",
		hiragana: "まるすずうんそうゆうげんがいしゃ"
	},
	{
		original: "有限会社マーズ",
		hiragana: "ゆうげんがいしゃまーず"
	},
	{
		original: "信和運送有限会社",
		hiragana: "のぶかずうんそうゆうげんがいしゃ"
	},
	{
		original: "上越商事有限会社",
		hiragana: "じょうえつしょうじゆうげんがいしゃ"
	},
	{
		original: "はこび",
		hiragana: "はこび"
	},
	{
		original: "有限会社新和",
		hiragana: "ゆうげんがいしゃしんわ"
	},
	{
		original: "彦新運輸",
		hiragana: "ひこしんうんゆ"
	},
	{
		original: "エムロジ",
		hiragana: "えむろじ"
	},
	{
		original: "弄月管財",
		hiragana: "ろうがつかんざい"
	},
	{
		original: "久保田商店",
		hiragana: "くぼたしょうてん"
	},
	{
		original: "中建運輸有限会社",
		hiragana: "なかけんうんゆゆうげんがいしゃ"
	},
	{
		original: "有限会社小林興業",
		hiragana: "ゆうげんがいしゃこばやしこうぎょう"
	},
	{
		original: "有限会社ポストライナー",
		hiragana: "ゆうげんがいしゃぽすとらいなー"
	},
	{
		original: "松和運輸",
		hiragana: "まつわうんゆ"
	},
	{
		original: "有限会社正木運輸",
		hiragana: "ゆうげんがいしゃまさきうんゆ"
	},
	{
		original: "大翔運輸",
		hiragana: "ひろとうんゆ"
	},
	{
		original: "北九冷凍輸送有限会社",
		hiragana: "きたきゅうれいとうゆそうゆうげんがいしゃ"
	},
	{
		original: "西部陸送",
		hiragana: "せいぶりくそう"
	},
	{
		original: "浜北小型運輸有限会社",
		hiragana: "はまきたこがたうんゆゆうげんがいしゃ"
	},
	{
		original: "丸勝運輸有限会社",
		hiragana: "まるしょううんゆゆうげんがいしゃ"
	},
	{
		original: "有限会社杉本運輸",
		hiragana: "ゆうげんがいしゃすぎもとうんゆ"
	},
	{
		original: "有限会社ワイ・イー・エス",
		hiragana: "ゆうげんがいしゃわい・いー・えす"
	},
	{
		original: "豊栄運輸",
		hiragana: "とよさかうんゆ"
	},
	{
		original: "緑一貨物有限会社",
		hiragana: "みどりいちかもつゆうげんがいしゃ"
	},
	{
		original: "新英光物流",
		hiragana: "しんひでみつぶつりゅう"
	},
	{
		original: "セイコー",
		hiragana: "せいこー"
	},
	{
		original: "山商",
		hiragana: "やましょう"
	},
	{
		original: "ハルミ貨物",
		hiragana: "はるみかもつ"
	},
	{
		original: "エフエルエス",
		hiragana: "えふえるえす"
	},
	{
		original: "有限会社共栄運送",
		hiragana: "ゆうげんがいしゃきょうえいうんそう"
	},
	{
		original: "ライトキャリー",
		hiragana: "らいときゃりー"
	},
	{
		original: "宇島港湾",
		hiragana: "うしまこうわん"
	},
	{
		original: "エスペランサ",
		hiragana: "えすぺらんさ"
	},
	{
		original: "有限会社ロジコシステム",
		hiragana: "ゆうげんがいしゃろじこしすてむ"
	},
	{
		original: "八興ロジテック",
		hiragana: "はちきょうろじてっく"
	},
	{
		original: "エースペック",
		hiragana: "えーすぺっく"
	},
	{
		original: "丸星運輸有限会社",
		hiragana: "まるほしうんゆゆうげんがいしゃ"
	},
	{
		original: "谷口運輸",
		hiragana: "たにぐちうんゆ"
	},
	{
		original: "城南梱包有限会社",
		hiragana: "じょうなんこんぽうゆうげんがいしゃ"
	},
	{
		original: "駒形運送有限会社",
		hiragana: "こまがたうんそうゆうげんがいしゃ"
	},
	{
		original: "アジアンテック",
		hiragana: "あじあんてっく"
	},
	{
		original: "サンエスライン",
		hiragana: "さんえすらいん"
	},
	{
		original: "阪栄物流",
		hiragana: "さかさかえぶつりゅう"
	},
	{
		original: "ホワイト・トランスポート",
		hiragana: "ほわいと・とらんすぽーと"
	},
	{
		original: "西原産業",
		hiragana: "にしはらさんぎょう"
	},
	{
		original: "ケィディー物流",
		hiragana: "けぃでぃーぶつりゅう"
	},
	{
		original: "有限会社愛川新企画",
		hiragana: "ゆうげんがいしゃあいかわしんきかく"
	},
	{
		original: "京阪",
		hiragana: "けいはん"
	},
	{
		original: "有限会社渡邉運輸",
		hiragana: "ゆうげんがいしゃわたなべうんゆ"
	},
	{
		original: "山昇",
		hiragana: "やまのぼる"
	},
	{
		original: "西濃梱包",
		hiragana: "せいのうこんぽう"
	},
	{
		original: "有限会社福翁運送",
		hiragana: "ゆうげんがいしゃふくおううんそう"
	},
	{
		original: "バックス",
		hiragana: "ばっくす"
	},
	{
		original: "山高運輸",
		hiragana: "やまたかうんゆ"
	},
	{
		original: "聖東運輸",
		hiragana: "ひじりひがしうんゆ"
	},
	{
		original: "有限会社マルシン運輸",
		hiragana: "ゆうげんがいしゃまるしんうんゆ"
	},
	{
		original: "有限会社タナハシコーポレーション",
		hiragana: "ゆうげんがいしゃたなはしこーぽれーしょん"
	},
	{
		original: "ＫＬＫＧホールディングス",
		hiragana: "ＫＬＫＧほーるでぃんぐす"
	},
	{
		original: "天鵝運輸",
		hiragana: "てんがうんゆ"
	},
	{
		original: "鈴真",
		hiragana: "すずまこと"
	},
	{
		original: "信州名鉄運送",
		hiragana: "しんしゅうめいてつうんそう"
	},
	{
		original: "有限会社クレスト",
		hiragana: "ゆうげんがいしゃくれすと"
	},
	{
		original: "ＡＩＲｃｏｒｐｏｒａｔｉｏｎ",
		hiragana: "ＡＩＲｃｏｒｐｏｒａｔｉｏｎ"
	},
	{
		original: "西九州物流サービス有限会社",
		hiragana: "にしきゅうしゅうぶつりゅうさーびすゆうげんがいしゃ"
	},
	{
		original: "合同会社クリニカルネットワーク",
		hiragana: "ごうどうかいしゃくりにかるねっとわーく"
	},
	{
		original: "カン・コーポレーション",
		hiragana: "かん・こーぽれーしょん"
	},
	{
		original: "伸貴運輸",
		hiragana: "しんたかしうんゆ"
	},
	{
		original: "ヨシマツ",
		hiragana: "よしまつ"
	},
	{
		original: "柳田商事",
		hiragana: "やなぎだしょうじ"
	},
	{
		original: "有限会社丸菱",
		hiragana: "ゆうげんがいしゃまるびし"
	},
	{
		original: "広島バイソク",
		hiragana: "ひろしまばいそく"
	},
	{
		original: "ジェイエムエー",
		hiragana: "じぇいえむえー"
	},
	{
		original: "チバツーホールディングス",
		hiragana: "ちばつーほーるでぃんぐす"
	},
	{
		original: "有限会社光急送",
		hiragana: "ゆうげんがいしゃひかりきゅうそう"
	},
	{
		original: "有限会社ヒトミ運輸",
		hiragana: "ゆうげんがいしゃひとみうんゆ"
	},
	{
		original: "有限会社トラストエクスプレス",
		hiragana: "ゆうげんがいしゃとらすとえくすぷれす"
	},
	{
		original: "有限会社港興業",
		hiragana: "ゆうげんがいしゃみなとこうぎょう"
	},
	{
		original: "有限会社共真サービス",
		hiragana: "ゆうげんがいしゃともまことさーびす"
	},
	{
		original: "小野良建設",
		hiragana: "おのりょうけんせつ"
	},
	{
		original: "下関北浦貨物運送有限会社",
		hiragana: "しものせききたうらかもつうんそうゆうげんがいしゃ"
	},
	{
		original: "ライズサービス",
		hiragana: "らいずさーびす"
	},
	{
		original: "日興貨物運送",
		hiragana: "にっこうかもつうんそう"
	},
	{
		original: "高梨運送",
		hiragana: "たかなしうんそう"
	},
	{
		original: "マルコー",
		hiragana: "まるこー"
	},
	{
		original: "磐城産業",
		hiragana: "いわきさんぎょう"
	},
	{
		original: "都運輸",
		hiragana: "みやこうんゆ"
	},
	{
		original: "ブルーライン",
		hiragana: "ぶるーらいん"
	},
	{
		original: "エクストライン",
		hiragana: "えくすとらいん"
	},
	{
		original: "サンエイ・サービス",
		hiragana: "さんえい・さーびす"
	},
	{
		original: "アマギ",
		hiragana: "あまぎ"
	},
	{
		original: "ダイセーエクスプレスシステム",
		hiragana: "だいせーえくすぷれすしすてむ"
	},
	{
		original: "エム・ケー物流サービス",
		hiragana: "えむ・けーぶつりゅうさーびす"
	},
	{
		original: "ジャレード",
		hiragana: "じゃれーど"
	},
	{
		original: "ＮＲＳエアロジスティクス",
		hiragana: "ＮＲＳえあろじすてぃくす"
	},
	{
		original: "新日技建開発有限会社",
		hiragana: "しんにちぎけんかいはつゆうげんがいしゃ"
	},
	{
		original: "有限会社愛成商事",
		hiragana: "ゆうげんがいしゃちかなりしょうじ"
	},
	{
		original: "有限会社一城",
		hiragana: "ゆうげんがいしゃいちじょう"
	},
	{
		original: "共栄",
		hiragana: "きょうえい"
	},
	{
		original: "桑川運輸",
		hiragana: "くわがわうんゆ"
	},
	{
		original: "ＲＵ物流",
		hiragana: "ＲＵぶつりゅう"
	},
	{
		original: "マルニ",
		hiragana: "まるに"
	},
	{
		original: "有限会社ミナミ商事",
		hiragana: "ゆうげんがいしゃみなみしょうじ"
	},
	{
		original: "いづみ運輸",
		hiragana: "いづみうんゆ"
	},
	{
		original: "臥薪運輸機工",
		hiragana: "がしんうんゆきこう"
	},
	{
		original: "アールライン",
		hiragana: "あーるらいん"
	},
	{
		original: "八日市急送",
		hiragana: "ようかいちきゅうそう"
	},
	{
		original: "有限会社三共運輸",
		hiragana: "ゆうげんがいしゃさんきょううんゆ"
	},
	{
		original: "有限会社モトヨシリンク",
		hiragana: "ゆうげんがいしゃもとよしりんく"
	},
	{
		original: "西岡屋",
		hiragana: "にしおかや"
	},
	{
		original: "中村通商有限会社",
		hiragana: "なかむらつうしょうゆうげんがいしゃ"
	},
	{
		original: "日の丸機工",
		hiragana: "ひのまるきこう"
	},
	{
		original: "有限会社青木重量運搬",
		hiragana: "ゆうげんがいしゃあおきじゅうりょううんぱん"
	},
	{
		original: "有限会社キタノ",
		hiragana: "ゆうげんがいしゃきたの"
	},
	{
		original: "冨士運輸",
		hiragana: "ふじうんゆ"
	},
	{
		original: "三原運輸",
		hiragana: "みはらうんゆ"
	},
	{
		original: "アイシン",
		hiragana: "あいしん"
	},
	{
		original: "エアートランスポート有限会社",
		hiragana: "えあーとらんすぽーとゆうげんがいしゃ"
	},
	{
		original: "有限会社アスカ物流",
		hiragana: "ゆうげんがいしゃあすかぶつりゅう"
	},
	{
		original: "林運輸",
		hiragana: "はやしうんゆ"
	},
	{
		original: "ＡＲＩＳトランス",
		hiragana: "ＡＲＩＳとらんす"
	},
	{
		original: "北興運輸",
		hiragana: "ほくこううんゆ"
	},
	{
		original: "有限会社孫六運送",
		hiragana: "ゆうげんがいしゃまごろくうんそう"
	},
	{
		original: "サンレー運輸",
		hiragana: "さんれーうんゆ"
	},
	{
		original: "有限会社アサヒカーゴサービス",
		hiragana: "ゆうげんがいしゃあさひかーごさーびす"
	},
	{
		original: "ジャパントータルサービス",
		hiragana: "じゃぱんとーたるさーびす"
	},
	{
		original: "リンクス",
		hiragana: "りんくす"
	},
	{
		original: "セイシン流通",
		hiragana: "せいしんりゅうつう"
	},
	{
		original: "国際トランスサービス",
		hiragana: "こくさいとらんすさーびす"
	},
	{
		original: "キンキライナー",
		hiragana: "きんきらいなー"
	},
	{
		original: "嵐山温泉開発",
		hiragana: "あらしやまおんせんかいはつ"
	},
	{
		original: "有限会社梅野運送",
		hiragana: "ゆうげんがいしゃうめのうんそう"
	},
	{
		original: "宇和島陸送",
		hiragana: "うわしまりくそう"
	},
	{
		original: "エイコーロジスティクス",
		hiragana: "えいこーろじすてぃくす"
	},
	{
		original: "有限会社カーゴサービス",
		hiragana: "ゆうげんがいしゃかーごさーびす"
	},
	{
		original: "福栄ロジスティクス",
		hiragana: "ふくえろじすてぃくす"
	},
	{
		original: "ソマ運送",
		hiragana: "そまうんそう"
	},
	{
		original: "東北三和",
		hiragana: "とうほくさんわ"
	},
	{
		original: "南海物流",
		hiragana: "なんかいぶつりゅう"
	},
	{
		original: "ケートゥ",
		hiragana: "けーとぅ"
	},
	{
		original: "西日本ロジテック",
		hiragana: "にしにほんろじてっく"
	},
	{
		original: "ユーテック",
		hiragana: "ゆーてっく"
	},
	{
		original: "日本物流ネットワーク関東",
		hiragana: "にほんものりゅうねっとわーくかんとう"
	},
	{
		original: "ＬＮＪ東京",
		hiragana: "ＬＮＪとうきょう"
	},
	{
		original: "ケイズクリエイト",
		hiragana: "けいずくりえいと"
	},
	{
		original: "有限会社米丸運送店",
		hiragana: "ゆうげんがいしゃこめまるうんそうてん"
	},
	{
		original: "有限会社丸越クレーン工業",
		hiragana: "ゆうげんがいしゃまるこしくれーんこうぎょう"
	},
	{
		original: "ベストキャリー",
		hiragana: "べすときゃりー"
	},
	{
		original: "有限会社エキスパートロジスティック",
		hiragana: "ゆうげんがいしゃえきすぱーとろじすてぃっく"
	},
	{
		original: "秀和ロジスティクス",
		hiragana: "しゅうわろじすてぃくす"
	},
	{
		original: "関空トランスポートサービス",
		hiragana: "かんくうとらんすぽーとさーびす"
	},
	{
		original: "心流通",
		hiragana: "こころりゅうつう"
	},
	{
		original: "有限会社平成急配",
		hiragana: "ゆうげんがいしゃへいせいきゅうはい"
	},
	{
		original: "渋川運輸",
		hiragana: "しぶかわうんゆ"
	},
	{
		original: "有限会社ベスト・サービス",
		hiragana: "ゆうげんがいしゃべすと・さーびす"
	},
	{
		original: "葛飾産興",
		hiragana: "かつしかさんきょう"
	},
	{
		original: "有限会社板倉屋運送",
		hiragana: "ゆうげんがいしゃいたくらやうんそう"
	},
	{
		original: "有限会社南天",
		hiragana: "ゆうげんがいしゃなんてん"
	},
	{
		original: "有限会社スワ物流",
		hiragana: "ゆうげんがいしゃすわぶつりゅう"
	},
	{
		original: "姫島運輸",
		hiragana: "ひめじまうんゆ"
	},
	{
		original: "サントリービバレッジソリューション",
		hiragana: "さんとりーびばれっじそりゅーしょん"
	},
	{
		original: "平林運送",
		hiragana: "ひらばやしうんそう"
	},
	{
		original: "エス・デー",
		hiragana: "えす・でー"
	},
	{
		original: "北海道ライナー",
		hiragana: "ほっかいどうらいなー"
	},
	{
		original: "森国運送有限会社",
		hiragana: "もりこくうんそうゆうげんがいしゃ"
	},
	{
		original: "光彩物流有限会社",
		hiragana: "こうさいぶつりゅうゆうげんがいしゃ"
	},
	{
		original: "ビコー輸送",
		hiragana: "びこーゆそう"
	},
	{
		original: "ケイテック",
		hiragana: "けいてっく"
	},
	{
		original: "孔",
		hiragana: "あな"
	},
	{
		original: "丸政運輸倉庫",
		hiragana: "まるまつりごとうんゆそうこ"
	},
	{
		original: "正洋",
		hiragana: "まさひろ"
	},
	{
		original: "日本ロジスティック",
		hiragana: "にっぽんろじすてぃっく"
	},
	{
		original: "有限会社元気",
		hiragana: "ゆうげんがいしゃげんき"
	},
	{
		original: "岡山新生運輸有限会社",
		hiragana: "おかやましんせいうんゆゆうげんがいしゃ"
	},
	{
		original: "有限会社甲斐田運送",
		hiragana: "ゆうげんがいしゃかいだうんそう"
	},
	{
		original: "隼",
		hiragana: "はやぶさ"
	},
	{
		original: "有限会社アール急送",
		hiragana: "ゆうげんがいしゃあーるきゅうそう"
	},
	{
		original: "勇物流サービス有限会社",
		hiragana: "いさみぶつりゅうさーびすゆうげんがいしゃ"
	},
	{
		original: "小幡運送有限会社",
		hiragana: "おばたうんそうゆうげんがいしゃ"
	},
	{
		original: "和幸",
		hiragana: "かずゆき"
	},
	{
		original: "オネスト",
		hiragana: "おねすと"
	},
	{
		original: "日軽東京立川",
		hiragana: "にっけいとうきょうたちかわ"
	},
	{
		original: "麒麟運輸",
		hiragana: "きりんうんゆ"
	},
	{
		original: "ちょるエクスプレス",
		hiragana: "ちょるえくすぷれす"
	},
	{
		original: "トップ・ロジ",
		hiragana: "とっぷ・ろじ"
	},
	{
		original: "有限会社森本運送",
		hiragana: "ゆうげんがいしゃもりもとうんそう"
	},
	{
		original: "惣流",
		hiragana: "そうりゅう"
	},
	{
		original: "実急送",
		hiragana: "みきゅうそう"
	},
	{
		original: "萬田商事",
		hiragana: "まんだしょうじ"
	},
	{
		original: "中央キャリア",
		hiragana: "ちゅうおうきゃりあ"
	},
	{
		original: "Ｑ配ビジネスサポート",
		hiragana: "Ｑはいびじねすさぽーと"
	},
	{
		original: "有限会社幸知商事",
		hiragana: "ゆうげんがいしゃさちちしょうじ"
	},
	{
		original: "大翔トランスポート",
		hiragana: "ひろととらんすぽーと"
	},
	{
		original: "都立運送有限会社",
		hiragana: "とりつうんそうゆうげんがいしゃ"
	},
	{
		original: "かわらだオイルサービス",
		hiragana: "かわらだおいるさーびす"
	},
	{
		original: "真通商",
		hiragana: "まことつうしょう"
	},
	{
		original: "ワタキ商事",
		hiragana: "わたきしょうじ"
	},
	{
		original: "有限会社アイテクノ",
		hiragana: "ゆうげんがいしゃあいてくの"
	},
	{
		original: "有限会社大塚運送店",
		hiragana: "ゆうげんがいしゃおおつかうんそうてん"
	},
	{
		original: "アルファグローバルロジスティクス",
		hiragana: "あるふぁぐろーばるろじすてぃくす"
	},
	{
		original: "ＳＧＫ",
		hiragana: "ＳＧＫ"
	},
	{
		original: "足立小型運送有限会社",
		hiragana: "あだちこがたうんそうゆうげんがいしゃ"
	},
	{
		original: "丸中運送",
		hiragana: "まるなかうんそう"
	},
	{
		original: "日新陸運",
		hiragana: "にっしんりくうん"
	},
	{
		original: "飯田丸運送",
		hiragana: "いいだまるうんそう"
	},
	{
		original: "オオワダ商事",
		hiragana: "おおわだしょうじ"
	},
	{
		original: "タムラ流通センター",
		hiragana: "たむらりゅうつうせんたー"
	},
	{
		original: "吉村運輸",
		hiragana: "よしむらうんゆ"
	},
	{
		original: "広島井住運送",
		hiragana: "ひろしまいじゅううんそう"
	},
	{
		original: "東葛運送",
		hiragana: "とうかつうんそう"
	},
	{
		original: "仙杜物流",
		hiragana: "せんもりぶつりゅう"
	},
	{
		original: "淡路貨物自動車",
		hiragana: "あわじかもつじどうしゃ"
	},
	{
		original: "中尾運輸",
		hiragana: "なかおうんゆ"
	},
	{
		original: "川商運輸",
		hiragana: "かわしょううんゆ"
	},
	{
		original: "東海エース物流",
		hiragana: "とうかいえーすぶつりゅう"
	},
	{
		original: "天神",
		hiragana: "てんじん"
	},
	{
		original: "有限会社イワムラキャリー",
		hiragana: "ゆうげんがいしゃいわむらきゃりー"
	},
	{
		original: "雲南作業商事有限会社",
		hiragana: "うんなんさぎょうしょうじゆうげんがいしゃ"
	},
	{
		original: "山辺配送有限会社",
		hiragana: "やまべはいそうゆうげんがいしゃ"
	},
	{
		original: "ダイレクトエクスプレス",
		hiragana: "だいれくとえくすぷれす"
	},
	{
		original: "アートパックサービス有限会社",
		hiragana: "あーとぱっくさーびすゆうげんがいしゃ"
	},
	{
		original: "テクノ物流",
		hiragana: "てくのぶつりゅう"
	},
	{
		original: "マルコシ",
		hiragana: "まるこし"
	},
	{
		original: "ＳＵＴ",
		hiragana: "ＳＵＴ"
	},
	{
		original: "ジェイワン",
		hiragana: "じぇいわん"
	},
	{
		original: "幸和運輸",
		hiragana: "ゆきかずうんゆ"
	},
	{
		original: "グリーンライン大阪",
		hiragana: "ぐりーんらいんおおさか"
	},
	{
		original: "イッセン",
		hiragana: "いっせん"
	},
	{
		original: "北部輸送",
		hiragana: "ほくぶゆそう"
	},
	{
		original: "菊池商館",
		hiragana: "きくちしょうかん"
	},
	{
		original: "天山運輸",
		hiragana: "てんざんうんゆ"
	},
	{
		original: "夫馬運輸",
		hiragana: "ふまうんゆ"
	},
	{
		original: "大阪物流サービス",
		hiragana: "おおさかぶつりゅうさーびす"
	},
	{
		original: "村田運送有限会社",
		hiragana: "むらたうんそうゆうげんがいしゃ"
	},
	{
		original: "岡島運輸",
		hiragana: "おかじまうんゆ"
	},
	{
		original: "有限会社ミノミ運輸",
		hiragana: "ゆうげんがいしゃみのみうんゆ"
	},
	{
		original: "出島物流",
		hiragana: "でじまぶつりゅう"
	},
	{
		original: "東日本エア・ウォーター物流",
		hiragana: "ひがしにほんえあ・うぉーたーぶつりゅう"
	},
	{
		original: "片岡総建",
		hiragana: "かたおかそうけん"
	},
	{
		original: "有限会社三芳エキスプレス",
		hiragana: "ゆうげんがいしゃみよしえきすぷれす"
	},
	{
		original: "マルエイ",
		hiragana: "まるえい"
	},
	{
		original: "有限会社森重水産",
		hiragana: "ゆうげんがいしゃもりしげすいさん"
	},
	{
		original: "綾空運輸",
		hiragana: "あやくううんゆ"
	},
	{
		original: "有限会社日本創粉",
		hiragana: "ゆうげんがいしゃにっぽんそうこな"
	},
	{
		original: "管野運輸",
		hiragana: "かんのうんゆ"
	},
	{
		original: "中央通商",
		hiragana: "ちゅうおうつうしょう"
	},
	{
		original: "呉運輸機工",
		hiragana: "くれうんゆきこう"
	},
	{
		original: "興和",
		hiragana: "こうわ"
	},
	{
		original: "日化運輸",
		hiragana: "にちかうんゆ"
	},
	{
		original: "仙運エクスプレス",
		hiragana: "せんうんえくすぷれす"
	},
	{
		original: "キャリーアドバンス",
		hiragana: "きゃりーあどばんす"
	},
	{
		original: "ケイワイケイ福山",
		hiragana: "けいわいけいふくやま"
	},
	{
		original: "まもる運送",
		hiragana: "まもるうんそう"
	},
	{
		original: "有限会社カツギキューソー",
		hiragana: "ゆうげんがいしゃかつぎきゅーそー"
	},
	{
		original: "石井運輸",
		hiragana: "いしいうんゆ"
	},
	{
		original: "有限会社平成運輸",
		hiragana: "ゆうげんがいしゃへいせいうんゆ"
	},
	{
		original: "若潮運輸",
		hiragana: "わかしおうんゆ"
	},
	{
		original: "有限会社大月運送",
		hiragana: "ゆうげんがいしゃおおつきうんそう"
	},
	{
		original: "有限会社新和流通",
		hiragana: "ゆうげんがいしゃしんわりゅうつう"
	},
	{
		original: "海祥運送有限会社",
		hiragana: "うみしょううんそうゆうげんがいしゃ"
	},
	{
		original: "エージェントシステム",
		hiragana: "えーじぇんとしすてむ"
	},
	{
		original: "栗原運送有限会社",
		hiragana: "くりはらうんそうゆうげんがいしゃ"
	},
	{
		original: "千翔",
		hiragana: "ちか"
	},
	{
		original: "新栄物流",
		hiragana: "しんえいぶつりゅう"
	},
	{
		original: "吉田商運",
		hiragana: "よしだしょううん"
	},
	{
		original: "三久商運有限会社",
		hiragana: "みつひさしょううんゆうげんがいしゃ"
	},
	{
		original: "有限会社徳新運送",
		hiragana: "ゆうげんがいしゃとくしんうんそう"
	},
	{
		original: "九州Ｆ－ＬＩＮＥ",
		hiragana: "きゅうしゅうＦ－ＬＩＮＥ"
	},
	{
		original: "森野輸送サービス",
		hiragana: "もりのゆそうさーびす"
	},
	{
		original: "ＩＳＣ",
		hiragana: "ＩＳＣ"
	},
	{
		original: "熊井食品",
		hiragana: "くまいしょくひん"
	},
	{
		original: "有限会社阪神急送",
		hiragana: "ゆうげんがいしゃはんしんきゅうそう"
	},
	{
		original: "エスエス機工",
		hiragana: "えすえすきこう"
	},
	{
		original: "",
		hiragana: ""
	}
];

var fetchCandidates = function (text) { return __awaiter(void 0, void 0, void 0, function () {
    var customCandidates, apiCandidates, combinedCandidates;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                customCandidates = getCustomCandidates(text);
                return [4 /*yield*/, fetchApiCandidates(text)
                    // カスタム候補とAPI候補を結合し、重複を除去
                ];
            case 1:
                apiCandidates = _a.sent();
                combinedCandidates = Array.from(new Set(__spreadArray(__spreadArray([], customCandidates, true), apiCandidates, true)));
                return [2 /*return*/, combinedCandidates];
        }
    });
}); };
var getCustomCandidates = function (text) {
    var candidates = [];
    for (var _i = 0, customConversionList_1 = customConversionList; _i < customConversionList_1.length; _i++) {
        var conversion = customConversionList_1[_i];
        var similarity = stringSimilarity(text, conversion.hiragana);
        if (similarity >= 0.7) {
            candidates.push(conversion.original);
        }
    }
    return candidates;
};
// レーベンシュタイン距離を計算する関数
var levenshteinDistance = function (a, b) {
    var matrix = [];
    for (var i = 0; i <= b.length; i++) {
        matrix[i] = [i];
    }
    for (var j = 0; j <= a.length; j++) {
        matrix[0][j] = j;
    }
    for (var i = 1; i <= b.length; i++) {
        for (var j = 1; j <= a.length; j++) {
            if (b.charAt(i - 1) === a.charAt(j - 1)) {
                matrix[i][j] = matrix[i - 1][j - 1];
            }
            else {
                matrix[i][j] = Math.min(matrix[i - 1][j - 1] + 1, matrix[i][j - 1] + 1, matrix[i - 1][j] + 1);
            }
        }
    }
    return matrix[b.length][a.length];
};
// 文字列の類似度を計算する関数
var stringSimilarity = function (a, b) {
    var longerLength = Math.max(a.length, b.length);
    if (longerLength === 0) {
        return 1.0;
    }
    return (longerLength - levenshteinDistance(a, b)) / longerLength;
};
var fetchApiCandidates = function (text) { return __awaiter(void 0, void 0, void 0, function () {
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
                        resolve([text]); // Resolve with the original text if the API fails
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
                    console.error("Failed to load the script");
                    resolve([text]); // Resolve with the original text if the script fails to load
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
