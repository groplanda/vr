/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 1302:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {


// EXTERNAL MODULE: ../node_modules/core-js/modules/es.object.to-string.js
var es_object_to_string = __webpack_require__(3238);
// EXTERNAL MODULE: ../node_modules/core-js/modules/es.promise.js
var es_promise = __webpack_require__(1418);
// EXTERNAL MODULE: ../node_modules/core-js/modules/es.array.for-each.js
var es_array_for_each = __webpack_require__(5374);
// EXTERNAL MODULE: ../node_modules/core-js/modules/web.dom-collections.for-each.js
var web_dom_collections_for_each = __webpack_require__(5849);
// EXTERNAL MODULE: ../node_modules/core-js/modules/es.function.name.js
var es_function_name = __webpack_require__(3352);
// EXTERNAL MODULE: ../node_modules/core-js/modules/web.timers.js
var web_timers = __webpack_require__(6252);
// EXTERNAL MODULE: ../node_modules/core-js/modules/es.symbol.js
var es_symbol = __webpack_require__(5901);
// EXTERNAL MODULE: ../node_modules/core-js/modules/es.symbol.description.js
var es_symbol_description = __webpack_require__(2189);
// EXTERNAL MODULE: ../node_modules/core-js/modules/es.symbol.iterator.js
var es_symbol_iterator = __webpack_require__(1047);
// EXTERNAL MODULE: ../node_modules/core-js/modules/es.array.iterator.js
var es_array_iterator = __webpack_require__(5769);
// EXTERNAL MODULE: ../node_modules/core-js/modules/es.string.iterator.js
var es_string_iterator = __webpack_require__(7460);
// EXTERNAL MODULE: ../node_modules/core-js/modules/web.dom-collections.iterator.js
var web_dom_collections_iterator = __webpack_require__(4078);
// EXTERNAL MODULE: ../node_modules/core-js/modules/es.symbol.async-iterator.js
var es_symbol_async_iterator = __webpack_require__(8521);
// EXTERNAL MODULE: ../node_modules/core-js/modules/es.symbol.to-string-tag.js
var es_symbol_to_string_tag = __webpack_require__(6798);
// EXTERNAL MODULE: ../node_modules/core-js/modules/es.json.to-string-tag.js
var es_json_to_string_tag = __webpack_require__(2923);
// EXTERNAL MODULE: ../node_modules/core-js/modules/es.math.to-string-tag.js
var es_math_to_string_tag = __webpack_require__(1897);
// EXTERNAL MODULE: ../node_modules/core-js/modules/es.object.define-property.js
var es_object_define_property = __webpack_require__(9785);
// EXTERNAL MODULE: ../node_modules/core-js/modules/es.object.create.js
var es_object_create = __webpack_require__(4374);
// EXTERNAL MODULE: ../node_modules/core-js/modules/es.object.get-prototype-of.js
var es_object_get_prototype_of = __webpack_require__(2274);
// EXTERNAL MODULE: ../node_modules/core-js/modules/es.object.set-prototype-of.js
var es_object_set_prototype_of = __webpack_require__(987);
// EXTERNAL MODULE: ../node_modules/core-js/modules/es.array.reverse.js
var es_array_reverse = __webpack_require__(190);
// EXTERNAL MODULE: ../node_modules/core-js/modules/es.array.slice.js
var es_array_slice = __webpack_require__(2410);
// EXTERNAL MODULE: ../node_modules/core-js/modules/es.function.bind.js
var es_function_bind = __webpack_require__(3515);
// EXTERNAL MODULE: ../node_modules/core-js/modules/es.parse-int.js
var es_parse_int = __webpack_require__(2081);
// EXTERNAL MODULE: ../node_modules/core-js/modules/es.regexp.exec.js
var es_regexp_exec = __webpack_require__(2077);
;// CONCATENATED MODULE: ./js/modules/Modal.js










function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var Modal = /*#__PURE__*/function () {
  function Modal(modalId) {
    _classCallCheck(this, Modal);

    this.$modalId = document.getElementById(modalId);
    this.$modals = this.$modalId.querySelectorAll('[data-modal]');
    this.$close = this.$modalId.querySelectorAll('[data-role="close-modal"]');
    this.activeModalClass = "popup__content_selected";
    this.activeOverlayClass = "popup_active";
    this.currentEvent = 'click';
    this.init();
  }

  _createClass(Modal, [{
    key: "init",
    value: function init() {
      var _this = this;

      this.$modals.forEach(function (modal) {
        return modal.style.display = 'none';
      });
      document.addEventListener(this.currentEvent, function (e) {
        var target = e.target;

        if (target && target.dataset.jsAction === 'open-modal') {
          _this.hadleClick(e);
        }
      });
      this.$close.forEach(function (close) {
        close.addEventListener(_this.currentEvent, _this.hadleClose.bind(_this));
      });
      document.addEventListener("keydown", function (event) {
        if (event.key === "Escape" && _this.$modalId.classList.contains(_this.activeOverlayClass)) {
          _this.closeModal();
        }
      });
    }
  }, {
    key: "hadleClick",
    value: function hadleClick(event) {
      event.preventDefault();
      var target = event.target;
      if (!target) return;
      var selected = target.dataset.name,
          offsetBody = this.getScrollBarWith() + "px";
      this.closeAllModals();

      if (this.openModal(selected)) {
        document.body.classList.add("open-modal");
        document.body.style.paddingRight = offsetBody;
      }
    }
  }, {
    key: "hadleClose",
    value: function hadleClose(event) {
      var target = event.target;

      if (target.dataset.role === "close-modal") {
        this.closeModal();
      }
    }
  }, {
    key: "getScrollBarWith",
    value: function getScrollBarWith() {
      var documentWidth = parseInt(document.documentElement.clientWidth);
      var windowsWidth = parseInt(window.innerWidth);
      return windowsWidth - documentWidth;
    }
  }, {
    key: "openModal",
    value: function openModal(name) {
      var modal = this.$modalId.querySelector("[data-modal=\"".concat(name, "\"]"));

      if (!modal) {
        return false;
      }

      this.$modalId.classList.add(this.activeOverlayClass);
      modal.classList.add(this.activeModalClass);
      modal.style.display = '';
      return true;
    }
  }, {
    key: "closeModal",
    value: function closeModal() {
      var _this2 = this;

      this.closeAllModals();
      setTimeout(function () {
        _this2.$modalId.classList.remove(_this2.activeOverlayClass);

        document.body.classList.remove("open-modal");
        document.body.style.paddingRight = '';

        _this2.$modals.forEach(function (modal) {
          return modal.style.display = 'none';
        });
      }, 350);
    }
  }, {
    key: "closeAllModals",
    value: function closeAllModals() {
      var _this3 = this;

      this.$modals.forEach(function (modal) {
        return modal.classList.remove(_this3.activeModalClass);
      });
    }
  }, {
    key: "title",
    set: function set(value) {}
  }, {
    key: "destroy",
    value: function destroy() {}
  }, {
    key: "isMobile",
    value: function isMobile() {
      var check = false;

      (function (a) {
        if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) check = true;
      })(navigator.userAgent || navigator.vendor || window.opera);

      return check;
    }
  }]);

  return Modal;
}();
;// CONCATENATED MODULE: ./js/modules/ToggleMap.js


function ToggleMap_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function ToggleMap_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function ToggleMap_createClass(Constructor, protoProps, staticProps) { if (protoProps) ToggleMap_defineProperties(Constructor.prototype, protoProps); if (staticProps) ToggleMap_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var ToggleMap = /*#__PURE__*/function () {
  function ToggleMap() {
    ToggleMap_classCallCheck(this, ToggleMap);

    this.trigger = document.querySelector('[data-js="toggle-sheme"]');
    this.triggerText = null;
    this.activeClass = "controls__toggle_hidden";
    this.init();
  }

  ToggleMap_createClass(ToggleMap, [{
    key: "init",
    value: function init() {
      var _this = this;

      if (!this.trigger) {
        return;
      }

      this.triggerText = this.trigger.querySelector('[data-js="toggle-sheme-text"]');
      this.trigger.addEventListener("click", function () {
        var dropdown = _this.trigger.nextElementSibling;
        if (!dropdown) return;
        var map = _this.trigger.nextElementSibling.firstElementChild;
        var height = map.clientHeight;

        _this.trigger.classList.toggle(_this.activeClass);

        if (_this.trigger.classList.contains(_this.activeClass)) {
          _this.triggerText.textContent = "Показать карту";
          dropdown.style.height = 0;
        } else {
          _this.triggerText.textContent = "скрыть карту";
          dropdown.style.height = height + "px";
        }
      });
    }
  }]);

  return ToggleMap;
}();
// EXTERNAL MODULE: ../node_modules/core-js/modules/es.array.find.js
var es_array_find = __webpack_require__(2327);
// EXTERNAL MODULE: ../node_modules/core-js/modules/es.object.keys.js
var es_object_keys = __webpack_require__(2571);
// EXTERNAL MODULE: ../node_modules/core-js/modules/es.array.from.js
var es_array_from = __webpack_require__(5610);
// EXTERNAL MODULE: ../node_modules/core-js/modules/es.array.index-of.js
var es_array_index_of = __webpack_require__(7471);
// EXTERNAL MODULE: ../node_modules/core-js/modules/es.string.search.js
var es_string_search = __webpack_require__(9254);
// EXTERNAL MODULE: ../node_modules/core-js/modules/es.array.includes.js
var es_array_includes = __webpack_require__(5623);
// EXTERNAL MODULE: ../node_modules/core-js/modules/es.string.includes.js
var es_string_includes = __webpack_require__(1514);
;// CONCATENATED MODULE: ./js/utils/index.js
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }































function debounce(callback, interval) {
  var debounceTimeoutId;
  return function () {
    var _this = this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    clearTimeout(debounceTimeoutId);
    debounceTimeoutId = setTimeout(function () {
      return callback.apply(_this, args);
    }, interval);
  };
}
function awaitPoints(_x) {
  return _awaitPoints.apply(this, arguments);
}

function _awaitPoints() {
  _awaitPoints = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(parent) {
    var length,
        selector,
        _args = arguments;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            length = _args.length > 1 && _args[1] !== undefined ? _args[1] : 10;
            selector = _args.length > 2 && _args[2] !== undefined ? _args[2] : '[data-vr="hover-point"]';
            return _context.abrupt("return", new Promise(function (resolve) {
              function waitUntil() {
                setTimeout(function () {
                  var points = parent.querySelectorAll(selector);

                  if (points.length >= length) {
                    resolve(points);
                  } else {
                    waitUntil();
                  }
                }, 50);
              }

              waitUntil();
            }));

          case 3:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _awaitPoints.apply(this, arguments);
}

function getDataFromName(_x2) {
  return _getDataFromName.apply(this, arguments);
}

function _getDataFromName() {
  _getDataFromName = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(key) {
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            return _context2.abrupt("return", new Promise(function (resolve, reject) {
              fetch('/data/info.json', {
                method: 'GET'
              }).then(function (res) {
                return res.json();
              }).then(function (data) {
                var current = findByKey(data, key);
                resolve(data[current]);
              })["catch"](function (e) {
                reject(e.message);
              });
            }));

          case 1:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _getDataFromName.apply(this, arguments);
}

function setData(_x3) {
  return _setData.apply(this, arguments);
}

function _setData() {
  _setData = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(data) {
    var modalTitle, modalInfo;
    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            modalTitle = document.querySelectorAll('[data-js-modal="title"]'), modalInfo = document.querySelectorAll('[data-js-modal="info"]');
            return _context3.abrupt("return", new Promise(function (resolve) {
              modalTitle.forEach(function (title) {
                return title.textContent = data.title;
              });
              modalInfo.forEach(function (info) {
                return info.innerHTML = data.info;
              });
              resolve(true);
            }));

          case 2:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));
  return _setData.apply(this, arguments);
}

function findByKey(data, key) {
  return Object.keys(data).find(function (row) {
    return row === key;
  });
}

function setActivePoint(_x4, _x5) {
  return _setActivePoint.apply(this, arguments);
}

function _setActivePoint() {
  _setActivePoint = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(points, currentIndex) {
    return _regeneratorRuntime().wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            return _context4.abrupt("return", new Promise(function (resolve) {
              points.forEach(function (point) {
                point.classList.remove('current');

                if (+point.dataset.index === +currentIndex) {
                  point.classList.add('current');
                }
              });
              resolve(currentIndex);
            }));

          case 1:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));
  return _setActivePoint.apply(this, arguments);
}

function resetSceneComponents(_x6) {
  return _resetSceneComponents.apply(this, arguments);
}

function _resetSceneComponents() {
  _resetSceneComponents = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(scene) {
    return _regeneratorRuntime().wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            return _context5.abrupt("return", new Promise(function (resolve) {
              var shemeMap = scene.querySelector('[data-vr="vr-map"]'),
                  openMap = scene.sceneEl.querySelector('[open-map]'),
                  openMapBtn = openMap.querySelector('button'),
                  openMapText = openMap.querySelector('[data-vr="toggle-text"]'),
                  modals = scene.sceneEl.querySelectorAll('[data-scene-modal]');
              openMapBtn.classList.remove('active');
              shemeMap.classList.remove('vr__map_show');
              openMapText.textContent = 'Показать карту';
              modals.forEach(function (modal) {
                return modal.classList.remove('scene__modal-content_show');
              });
              resolve();
            }));

          case 1:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));
  return _resetSceneComponents.apply(this, arguments);
}

function showLoading(loading) {
  var fullpage = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  loading.classList.remove('hidden');
  loading.scrollIntoView({
    behavior: 'smooth'
  });
  var scrollTimeout;
  addEventListener('scroll', function (e) {
    clearTimeout(scrollTimeout);
    scrollTimeout = setTimeout(function () {
      loading.classList.add('page_fixed', 'page_overlay');
    }, 100);
  });
}
function vrCompomentVisible(elem) {
  elem.addEventListener('stateadded', function (e) {
    var state = e.detail;

    if (state === 'non-vr') {
      elem.setAttribute('visible', 'false');
    }

    if (state === 'vr') {
      elem.setAttribute('visible', 'true');
    }
  });
  elem.addEventListener('stateremoved', function (e) {
    var state = e.detail;

    if (state === 'non-vr') {
      elem.setAttribute('visible', 'true');
    }

    if (state === 'vr') {
      elem.setAttribute('visible', 'false');
    }
  });
}
function updateComponentsChild(_x7) {
  return _updateComponentsChild.apply(this, arguments);
}

function _updateComponentsChild() {
  _updateComponentsChild = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6(scene) {
    var visible,
        components,
        index,
        _args6 = arguments;
    return _regeneratorRuntime().wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            visible = _args6.length > 1 && _args6[1] !== undefined ? _args6[1] : 'true';
            components = ['open-help', 'open-info', 'open-lift', 'open-map'];
            index = 0;
            return _context6.abrupt("return", new Promise(function (resolve) {
              components.forEach(function (component) {
                onDomIsRendered("[".concat(component, "]"), scene).then(function (nodeElem) {
                  Array.from(nodeElem).forEach(function (el) {
                    index++;
                    setTimeout(function () {
                      el.setAttribute('visible', visible);
                      el.firstElementChild.setAttribute('visible', visible);
                    }, index * 100);
                  });
                });
              });
              resolve();
            }));

          case 4:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6);
  }));
  return _updateComponentsChild.apply(this, arguments);
}

function onDomIsRendered(element) {
  var parent = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document;
  return new Promise(function (resolve, reject) {
    function waitUntil() {
      setTimeout(function () {
        var domElement = parent.querySelectorAll(element);

        if (domElement.length > 0) {
          resolve(domElement);
        } else {
          waitUntil();
        }
      }, 150);
    }

    waitUntil();
  });
}
function getCurrentGroups(parents, isMobile) {
  var current = Array.from(parents).find(function (parent) {
    return isMobile ? parent.dataset.type === 'mobile' : parent.dataset.type === 'desktop';
  });
  return current.querySelectorAll('[data-js="scheme-group"]');
}
function isAndroidDevice() {
  return navigator.userAgent.toLowerCase().indexOf("android") > -1;
}
function removeHash() {
  history.pushState("", document.title, window.location.pathname + window.location.search);
}
function isCanvas(target) {
  return target.tagName.toLowerCase() === 'canvas';
}
function isScene() {
  var scene = document.querySelector('a-scene');
  return scene !== null && scene.classList.contains('scene_show');
}
function observeMapImage() {
  var imageMap = document.querySelector('[data-js="map"]');
  var options = {
    threshold: .5
  };
  var images = {
    mobileMin: '/images/map/map-mobile-min.png',
    mobileFull: '/images/map/mine-mobile.svg',
    desktopMin: '/images/map/map-full-min.png',
    desktopFull: '/images/map/mine-full.svg'
  };
  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        showFullMap();
      } else {
        showMinMap();
      }
    });
  }, options);
  observer.observe(imageMap);

  var showFullMap = function showFullMap() {
    if (isMobile()) {
      imageMap.src = images.mobileFull;
    } else {
      imageMap.src = images.desktopFull;
    }
  };

  var showMinMap = function showMinMap() {
    if (isMobile()) {
      imageMap.src = images.mobileMin;
    } else {
      imageMap.src = images.desktopMin;
    }
  };

  var isMobile = function isMobile() {
    return window.innerWidth < 768;
  };
}
function isIOS() {
  return ['iPad Simulator', 'iPhone Simulator', 'iPod Simulator', 'iPad', 'iPhone', 'iPod'].includes(navigator.platform) // iPad on iOS 13 detection
  || navigator.userAgent.includes("Mac") && "ontouchend" in document;
}
;// CONCATENATED MODULE: ./js/aframe/vr-scene.js





function vr_scene_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function vr_scene_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function vr_scene_createClass(Constructor, protoProps, staticProps) { if (protoProps) vr_scene_defineProperties(Constructor.prototype, protoProps); if (staticProps) vr_scene_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }


var vrScene = /*#__PURE__*/function () {
  function vrScene(controls, index) {
    vr_scene_classCallCheck(this, vrScene);

    this.controls = controls;
    this.index = index;
    this.toggleVrBtn = document.querySelector('[data-js-action="toggle-vr"]');
    this.isIOS = null;
    this.scene = null;
  }

  vr_scene_createClass(vrScene, [{
    key: "created",
    value: function created() {
      var _this = this;

      return new Promise(function (resolve) {
        var sceneEl = document.createElement("a-scene"),
            assetsEl = document.createElement("a-assets");
        sceneEl.classList.add('scene');
        sceneEl.setAttribute('data-index', _this.index);
        sceneEl.setAttribute('vr-mode-ui', 'enabled: false');
        sceneEl.setAttribute('data-js', 'scene');
        sceneEl.setAttribute('vr-scene', '');
        sceneEl.setAttribute('position', {
          x: 0.0001,
          y: 0.0001,
          z: 0.0001
        });
        sceneEl.append(assetsEl);
        setTimeout(function () {
          resolve({
            'scene': sceneEl,
            'assets': assetsEl
          });
        }, 1500);
      });
    }
  }, {
    key: "init",
    value: function init() {
      var self = this;
      AFRAME.registerComponent('vr-scene', {
        init: function init() {
          var _this2 = this;

          var sceneEl = self.scene = this.el;
          var isMobile = AFRAME.utils.device.isMobile();
          var schemeMaps = document.querySelectorAll('[data-js="scheme-map"]'),
              shemePoints = getCurrentGroups(schemeMaps, isMobile);
          self.isIOS = AFRAME.utils.device.isIOS();
          sceneEl.addEventListener('loaded', function () {
            // toggle vr
            self.toggleVrBtn.addEventListener('click', function () {
              if (self.toggleVrBtn.classList.contains('active-vr')) {
                sceneEl.exitVR();
              } else {
                sceneEl.enterVR();
              }
            });
            self.orientationchangeHandle();
          });
          sceneEl.addEventListener('enter-vr', function () {
            self.toggleVrBtn.classList.add('active-vr');

            _this2.el.emit('change-mode', {
              enterVr: true
            });

            updateComponentsChild(sceneEl, 'true');
          });
          sceneEl.addEventListener('exit-vr', function () {
            self.toggleVrBtn.classList.remove('active-vr');
            var activeIndex = sceneEl.getAttribute('data-index');
            setActivePoint(shemePoints, +activeIndex);
            updateComponentsChild(sceneEl, 'false');
          }); // sceneEl.addEventListener('componentchanged', e => {
          //   console.log('componentchanged', e);
          // })
          // sceneEl.addEventListener('stateadded', e => {
          //   console.log('stateadded', e);
          // })
          // sceneEl.addEventListener('deviceorientationpermissiongranted', e => {
          //   console.log('deviceorientationpermissiongranted', e);
          // })
          // sceneEl.addEventListener('deviceorientationpermissionrejected', e => {
          //   console.log('deviceorientationpermissionrejected', e);
          // })
          // sceneEl.addEventListener('deviceorientationpermissionrequested', e => {
          //   console.log('deviceorientationpermissionrequested', e);
          // })
          // sceneEl.addEventListener('child-attached', e => {
          //   console.log('child-attached', e);
          // })
          // sceneEl.addEventListener('renderstart', e => {
          //   console.log('renderstart', e);
          // })
          // sceneEl.addEventListener('componentinitialized', e => {
          // })
          // console.log('utils', AFRAME.utils.device);
          // console.log('isIOS', AFRAME.utils.device.isIOS());
          // console.log('isLandscape', AFRAME.utils.device.isLandscape());
          // console.log('isMobile', AFRAME.utils.device.isMobile());
          // console.log('isMobileDeviceRequestingDesktopSite', AFRAME.utils.device.isMobileDeviceRequestingDesktopSite());
          // console.log('isMobileVR', AFRAME.utils.device.isMobileVR());
        }
      });
    }
  }, {
    key: "update",
    value: function update() {}
  }, {
    key: "delayClick",
    value: function delayClick() {
      var _this3 = this;

      return new Promise(function (resolve) {
        _this3.toggleVrBtn.click();

        setTimeout(function () {
          resolve();
        }, 500);
      });
    }
  }, {
    key: "orientationchangeHandle",
    value: function orientationchangeHandle() {
      var _this4 = this;

      window.addEventListener('orientationchange', function () {
        if (!_this4.scene.hasLoaded) {
          return;
        }

        _this4.delayClick().then(function () {
          var isLandscape = AFRAME.utils.device.isLandscape();

          if (isLandscape) {
            _this4.scene.style.zIndex = 1030;

            _this4.controls.classList.remove('controls_show');
          } else {
            _this4.fixHeight();

            _this4.scene.style.zIndex = '';

            _this4.controls.classList.add('controls_show');
          }
        });
      });
    }
  }, {
    key: "fixHeight",
    value: function fixHeight() {
      setTimeout(function () {
        document.documentElement.style.height = '100%';
        window.scrollTo(0, 1);
      }, 500);
    }
  }]);

  return vrScene;
}(); // checkARSupport: ƒ checkARSupport()
// checkHeadsetConnected: ƒ checkHeadsetConnected()
// getVRDisplay: ƒ getVRDisplay()
// isBrowserEnvironment: true
// isFirefoxReality: ƒ isFirefoxReality()
// isGearVR: ƒ ()
// isIOS: ƒ isIOS()
// isLandscape: ƒ ()
// isMobile: ƒ ()
// isMobileDeviceRequestingDesktopSite: ƒ isMobileDeviceRequestingDesktopSite()
// isMobileVR: ƒ isMobileVR()
// isNodeEnvironment: false
// isOculusBrowser: ƒ isOculusBrowser()
// isOculusGo: ƒ ()
// isR7: ƒ isR7()
// isTablet: ƒ isTablet(mockUserAgent)
// isWebXRAvailable: true
// EXTERNAL MODULE: ../node_modules/core-js/modules/es.reflect.construct.js
var es_reflect_construct = __webpack_require__(3214);
;// CONCATENATED MODULE: ./js/classes/VrComponent.js


function VrComponent_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function VrComponent_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function VrComponent_createClass(Constructor, protoProps, staticProps) { if (protoProps) VrComponent_defineProperties(Constructor.prototype, protoProps); if (staticProps) VrComponent_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var VrComponent = /*#__PURE__*/function () {
  function VrComponent() {
    VrComponent_classCallCheck(this, VrComponent);

    this.timerId = null;
    this.elem = null;
  }

  VrComponent_createClass(VrComponent, [{
    key: "created",
    value: function created() {}
  }, {
    key: "init",
    value: function init() {}
  }, {
    key: "enterVR",
    value: function enterVR(elem) {}
  }, {
    key: "update",
    value: function update() {}
  }, {
    key: "destroy",
    value: function destroy() {}
  }]);

  return VrComponent;
}();


;// CONCATENATED MODULE: ./js/aframe/vr-camera.js
function vr_camera_typeof(obj) { "@babel/helpers - typeof"; return vr_camera_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, vr_camera_typeof(obj); }

function vr_camera_regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ vr_camera_regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == vr_camera_typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function vr_camera_asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function vr_camera_asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { vr_camera_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { vr_camera_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }



























function vr_camera_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function vr_camera_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function vr_camera_createClass(Constructor, protoProps, staticProps) { if (protoProps) vr_camera_defineProperties(Constructor.prototype, protoProps); if (staticProps) vr_camera_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (vr_camera_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }



var vrCamera = /*#__PURE__*/function (_VrComponent) {
  _inherits(vrCamera, _VrComponent);

  var _super = _createSuper(vrCamera);

  function vrCamera() {
    var _this;

    vr_camera_classCallCheck(this, vrCamera);

    _this = _super.call(this);
    _this.cameraEl = null;
    _this.controls = null;
    return _this;
  }

  vr_camera_createClass(vrCamera, [{
    key: "created",
    value: function created() {
      return new Promise(function (resolve) {
        var controlEntity = document.createElement('a-entity');
        controlEntity.setAttribute('movement-controls', 'fly: true');
        controlEntity.setAttribute('position', {
          x: 0,
          y: 0,
          z: 0
        });
        var cameraEntity = document.createElement('a-entity');
        var cursorEntity = document.createElement('a-entity');
        cameraEntity.setAttribute('id', 'camera');
        cameraEntity.setAttribute('look-controls', '');
        cameraEntity.setAttribute('camera', '');
        cameraEntity.setAttribute('vr-camera', '');
        cameraEntity.classList.add('vr__camera');
        cursorEntity.setAttribute('id', 'vr-cursor');
        cursorEntity.setAttribute('position', {
          x: 0.0001,
          y: -0.0265,
          z: -1
        });
        cursorEntity.setAttribute('cursor', {
          'fuse': true,
          'fuseTimeout': 1500
        }, true);
        cursorEntity.setAttribute('material', {
          'color': 'white',
          'shader': 'flat'
        }, true);
        cursorEntity.setAttribute('geometry', {
          'primitive': 'ring',
          'radiusInner': 0.013,
          'radiusOuter': 0.016
        }, true);
        cursorEntity.setAttribute('raycaster', 'objects: [data-raycastable]');
        controlEntity.append(cameraEntity);
        controlEntity.append(cursorEntity);
        var laserControl = document.createElement('a-entity');
        laserControl.setAttribute('id', 'vrControl');
        laserControl.setAttribute('laser-controls', 'hand: right');
        laserControl.setAttribute('raycaster', 'objects: .clickable');
        controlEntity.append(laserControl);
        resolve(controlEntity);
      });
    }
  }, {
    key: "init",
    value: function init() {
      var self = this;
      AFRAME.registerComponent('vr-camera', {
        init: function init() {
          var _this2 = this;

          this.el.addEventListener('loaded', function () {
            var isMobile = AFRAME.utils.device.isMobile();
            self.cameraEl = _this2.el;
            self.controls = document.querySelector('[data-js="controls"]');

            if (isMobile) {
              _this2.el.setAttribute('rotation-reader', '');

              _this2.el.setAttribute('listener', '');

              _this2.el.setAttribute('look-controls', 'reverseMouseDrag:true; touchEnabled: false');
            }

            _this2.el.sceneEl.addEventListener('change-mode', /*#__PURE__*/function () {
              var _ref = vr_camera_asyncToGenerator( /*#__PURE__*/vr_camera_regeneratorRuntime().mark(function _callee(e) {
                return vr_camera_regeneratorRuntime().wrap(function _callee$(_context) {
                  while (1) {
                    switch (_context.prev = _context.next) {
                      case 0:
                        if (e.detail.enterVr) {
                          self.enterVR(_this2.el, _this2.el.sceneEl);
                        }

                      case 1:
                      case "end":
                        return _context.stop();
                    }
                  }
                }, _callee);
              }));

              return function (_x) {
                return _ref.apply(this, arguments);
              };
            }());
          });
        }
      });
    }
  }, {
    key: "enterVR",
    value: function enterVR(parentEl, sceneEl) {
      var _this3 = this;

      var clickable = sceneEl.querySelectorAll('.clickable');
      var textListener = sceneEl.querySelector('[content-listener]');
      var modals = sceneEl.querySelectorAll('[data-scene-modal]');
      var infoWidget = textListener.querySelector('[data-scene="content-info"]');
      var helpWidget = textListener.querySelector('[data-scene="content-help"]');
      var liftWidget = textListener.querySelector('[data-scene="content-return"]');
      var shemeMap = sceneEl.querySelector('[data-vr="vr-map"]');
      var toggleText = sceneEl.querySelector('[data-vr="toggle-text"]'); //this.handlePoint(document.querySelector('.vr__point_lift'), sceneEl)

      clickable.forEach(function (click) {
        click.addEventListener('click', function (evt) {
          var clicked = evt.target;
          var target = clicked.getAttribute('target');

          if (!target) {
            return;
          }

          switch (target) {
            case 'open-info':
              textListener.setAttribute('position', {
                x: 0.0001,
                y: 1.8,
                z: -2.8
              });
              infoWidget.classList.add('scene__modal-content_show');
              break;

            case 'close-modal':
              modals.forEach(function (modal) {
                return modal.classList.remove('scene__modal-content_show');
              });
              break;

            case 'open-help':
              textListener.setAttribute('position', {
                x: -2,
                y: 1.6,
                z: -1.5
              });
              helpWidget.classList.add('scene__modal-content_show');
              break;

            case 'return':
              window.location.href = 'https://gremgok.ru/';
              break;

            case 'open-lift':
              textListener.setAttribute('position', {
                x: -3,
                y: 1.5,
                z: -0.5
              });
              liftWidget.classList.add('scene__modal-content_show');
              break;

            case 'show-map':
              shemeMap.classList.toggle('active');

              if (shemeMap.classList.contains('active')) {
                shemeMap.classList.add('vr__map_show');
                toggleText.textContent = 'Скрыть карту';
              } else {
                shemeMap.classList.remove('vr__map_show');
                toggleText.textContent = 'Показать карту';
              }

              break;

            case 'change-point':
              _this3.handlePoint(clicked, sceneEl);

              break;

            default:
              break;
          }
        });
      });
    }
  }, {
    key: "update",
    value: function update() {}
  }, {
    key: "handlePoint",
    value: function () {
      var _handlePoint = vr_camera_asyncToGenerator( /*#__PURE__*/vr_camera_regeneratorRuntime().mark(function _callee3(target, sceneEl) {
        var _this4 = this;

        var index, name, loading, data, points, videoEl;
        return vr_camera_regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                sceneEl.exitVR();
                index = target.dataset.index, name = target.dataset.name;
                loading = document.getElementById('loading');
                loading.classList.add('page_overlay');
                sceneEl.classList.remove('scene_show');
                this.controls.classList.remove('controls_show');
                _context3.prev = 6;
                _context3.next = 9;
                return getDataFromName(name);

              case 9:
                data = _context3.sent;
                _context3.next = 12;
                return awaitPoints(document.getElementById('vr-map'));

              case 12:
                points = _context3.sent;
                videoEl = sceneEl.querySelector('video');
                console.log(data, points, videoEl);
                setData(data).then( /*#__PURE__*/vr_camera_asyncToGenerator( /*#__PURE__*/vr_camera_regeneratorRuntime().mark(function _callee2() {
                  return vr_camera_regeneratorRuntime().wrap(function _callee2$(_context2) {
                    while (1) {
                      switch (_context2.prev = _context2.next) {
                        case 0:
                          videoEl.setAttribute('src', data.video);
                          sceneEl.setAttribute('data-index', index);
                          points.forEach(function (point) {
                            point.classList.remove('current');

                            if (point.dataset.index === index) {
                              point.classList.add('current');
                            }
                          });
                          resetSceneComponents(sceneEl).then(function () {
                            videoEl.play();
                            videoEl.addEventListener('canplay', function () {
                              setTimeout(function () {
                                _this4.updateOpenMap(sceneEl).then(function () {
                                  sceneEl.classList.add('scene_show');
                                  loading.classList.remove('page_overlay');
                                  sceneEl.enterVR();
                                });
                              }, 2000);
                            });
                          });

                        case 4:
                        case "end":
                          return _context2.stop();
                      }
                    }
                  }, _callee2);
                })));
                _context3.next = 21;
                break;

              case 18:
                _context3.prev = 18;
                _context3.t0 = _context3["catch"](6);
                throw new Error(_context3.t0.message);

              case 21:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this, [[6, 18]]);
      }));

      function handlePoint(_x2, _x3) {
        return _handlePoint.apply(this, arguments);
      }

      return handlePoint;
    }()
  }, {
    key: "updateOpenMap",
    value: function () {
      var _updateOpenMap = vr_camera_asyncToGenerator( /*#__PURE__*/vr_camera_regeneratorRuntime().mark(function _callee4(scene) {
        return vr_camera_regeneratorRuntime().wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                return _context4.abrupt("return", new Promise(function (resolve) {
                  awaitPoints(scene, 1, '[open-map]').then(function (elems) {
                    Array.from(elems).forEach(function (el) {
                      var button = el.querySelector('button'),
                          buttonText = el.querySelector('[data-vr="toggle-text"]');
                      button.classList.remove('focushack', 'hoverhack');
                      buttonText.classList.remove('focushack', 'hoverhack');
                      buttonText.textContent = 'Показать карту';
                      el.classList.remove('focushack', 'active', 'hoverhack');
                      el.flushToDOM();
                    });
                    var shemeMap = scene.querySelector('[data-vr="vr-map"]');
                    shemeMap.classList.remove('vr__map_show');
                    updateComponentsChild(scene, 'true').then(function () {
                      resolve();
                    });
                  });
                }));

              case 1:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }));

      function updateOpenMap(_x4) {
        return _updateOpenMap.apply(this, arguments);
      }

      return updateOpenMap;
    }()
  }]);

  return vrCamera;
}(VrComponent);
;// CONCATENATED MODULE: ./js/aframe/open-lift.js
function open_lift_typeof(obj) { "@babel/helpers - typeof"; return open_lift_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, open_lift_typeof(obj); }

function open_lift_regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ open_lift_regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == open_lift_typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function open_lift_asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function open_lift_asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { open_lift_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { open_lift_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }


























function open_lift_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function open_lift_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function open_lift_createClass(Constructor, protoProps, staticProps) { if (protoProps) open_lift_defineProperties(Constructor.prototype, protoProps); if (staticProps) open_lift_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function open_lift_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) open_lift_setPrototypeOf(subClass, superClass); }

function open_lift_setPrototypeOf(o, p) { open_lift_setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return open_lift_setPrototypeOf(o, p); }

function open_lift_createSuper(Derived) { var hasNativeReflectConstruct = open_lift_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = open_lift_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = open_lift_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return open_lift_possibleConstructorReturn(this, result); }; }

function open_lift_possibleConstructorReturn(self, call) { if (call && (open_lift_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return open_lift_assertThisInitialized(self); }

function open_lift_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function open_lift_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function open_lift_getPrototypeOf(o) { open_lift_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return open_lift_getPrototypeOf(o); }



var openLift = /*#__PURE__*/function (_VrComponent) {
  open_lift_inherits(openLift, _VrComponent);

  var _super = open_lift_createSuper(openLift);

  function openLift() {
    var _this;

    open_lift_classCallCheck(this, openLift);

    _this = _super.call(this);
    _this.liftWidget = null;
    _this.textListener = null;
    _this.hoverData = null;
    _this.controllerData = null;
    return _this;
  }

  open_lift_createClass(openLift, [{
    key: "created",
    value: function created() {
      return new Promise(function (resolve) {
        var liftEntity = document.createElement('a-entity');
        liftEntity.setAttribute('htmlembed', '');
        liftEntity.setAttribute('look-at', '#camera');
        liftEntity.setAttribute('position', {
          x: -3,
          y: 1.5,
          z: -1
        });
        liftEntity.setAttribute('raycaster-target', '');
        liftEntity.setAttribute('data-raycastable', '');
        liftEntity.setAttribute('open-lift', '');
        liftEntity.setAttribute('visible', 'false');
        liftEntity.setAttribute('vr-mode-watcher', '');
        liftEntity.setAttribute('target', 'open-lift');
        liftEntity.setAttribute('class', 'clickable');
        liftEntity.setAttribute('animation__fusing', {
          'property': 'scale',
          'startEvents': 'fusing',
          'easing': 'easeInCubic',
          'dur': 2000,
          'from': '1 1 1',
          'to': '0.5 0.5 0.5'
        }, true);
        liftEntity.setAttribute('animation__mouseleave', {
          'property': 'scale',
          'startEvents': 'mouseleave',
          'easing': 'easeInCubic',
          'dur': 500,
          'to': '1 1 1'
        }, true);
        var liftEntityBtn = document.createElement('button');
        liftEntityBtn.setAttribute('type', 'button');
        liftEntityBtn.classList.add('controls__button', 'controls__button_return', 'button');
        liftEntityBtn.insertAdjacentHTML('afterbegin', "<svg class=\"controls__button-lift controls__button-ico\" width=\"20\" height=\"30\" viewBox=\"0 0 20 30\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n                                                      <rect x=\"0.5\" y=\"0.5\" width=\"18.5\" height=\"29\" stroke=\"white\"/>\n                                                      <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M2 27H9L9 14.25H2L2 27ZM1 14.25H0.75V27H1L1 14.25ZM18.75 27H18.5V14.25H18.75V27ZM10 14.25H17.5V27H10L10 14.25Z\" fill=\"white\"/>\n                                                      <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M1.5 7.5H18C16.3532 5.25824 13.2753 3.75 9.75 3.75C6.22472 3.75 3.14677 5.25824 1.5 7.5Z\" fill=\"white\"/>\n                                                    </svg>");
        liftEntity.append(liftEntityBtn);
        resolve(liftEntity);
      });
    }
  }, {
    key: "init",
    value: function init() {
      var self = this;
      AFRAME.registerComponent("open-lift", {
        schema: {
          'target': {
            type: 'selector'
          }
        },
        init: function init() {
          var _this2 = this;

          vrCompomentVisible(this.el);
          this.el.sceneEl.addEventListener('change-mode', /*#__PURE__*/function () {
            var _ref = open_lift_asyncToGenerator( /*#__PURE__*/open_lift_regeneratorRuntime().mark(function _callee(e) {
              return open_lift_regeneratorRuntime().wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      if (e.detail.enterVr && !self.liftWidget) {
                        self.enterVR(_this2.el, _this2.el.sceneEl);
                      }

                    case 1:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee);
            }));

            return function (_x) {
              return _ref.apply(this, arguments);
            };
          }());
        }
      });
    }
  }, {
    key: "enterVR",
    value: function enterVR(parentEl, sceneEl) {
      this.textListener = sceneEl.querySelector('[content-listener]');

      if (!this.textListener) {
        return;
      }

      this.liftWidget = this.textListener.querySelector('[data-scene="content-return"]');
    }
  }, {
    key: "raycasterHandle",
    value: function raycasterHandle(parentEl) {
      var _this3 = this;

      parentEl.addEventListener('raycaster-intersected', function () {
        _this3.timerId = setTimeout(function () {
          _this3.textListener.setAttribute('position', {
            x: -3,
            y: 1.5,
            z: -0.5
          });

          _this3.liftWidget.classList.add('scene__modal-content_show');
        }, 1500);
      });
      parentEl.addEventListener('raycaster-intersected-cleared', function (e) {
        clearTimeout(_this3.timerId);
      });
    }
  }, {
    key: "update",
    value: function update() {}
  }]);

  return openLift;
}(VrComponent);
;// CONCATENATED MODULE: ./js/aframe/open-info.js
function open_info_typeof(obj) { "@babel/helpers - typeof"; return open_info_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, open_info_typeof(obj); }

function open_info_regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ open_info_regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == open_info_typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function open_info_asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function open_info_asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { open_info_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { open_info_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }


























function open_info_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function open_info_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function open_info_createClass(Constructor, protoProps, staticProps) { if (protoProps) open_info_defineProperties(Constructor.prototype, protoProps); if (staticProps) open_info_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function open_info_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) open_info_setPrototypeOf(subClass, superClass); }

function open_info_setPrototypeOf(o, p) { open_info_setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return open_info_setPrototypeOf(o, p); }

function open_info_createSuper(Derived) { var hasNativeReflectConstruct = open_info_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = open_info_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = open_info_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return open_info_possibleConstructorReturn(this, result); }; }

function open_info_possibleConstructorReturn(self, call) { if (call && (open_info_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return open_info_assertThisInitialized(self); }

function open_info_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function open_info_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function open_info_getPrototypeOf(o) { open_info_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return open_info_getPrototypeOf(o); }



var openInfo = /*#__PURE__*/function (_VrComponent) {
  open_info_inherits(openInfo, _VrComponent);

  var _super = open_info_createSuper(openInfo);

  function openInfo() {
    var _this;

    open_info_classCallCheck(this, openInfo);

    _this = _super.call(this);
    _this.infoWidget = null;
    _this.textListener = null;
    _this.hoverData = null;
    _this.controllerData = null;
    return _this;
  }

  open_info_createClass(openInfo, [{
    key: "created",
    value: function created() {
      return new Promise(function (resolve) {
        var infoEntity = document.createElement('a-entity');
        infoEntity.setAttribute('htmlembed', '');
        infoEntity.setAttribute('look-at', '#camera');
        infoEntity.setAttribute('position', {
          x: 0.0001,
          y: 1.6,
          z: -3
        });
        infoEntity.setAttribute('data-raycastable', '');
        infoEntity.setAttribute('raycaster-target', '');
        infoEntity.setAttribute('visible', 'false');
        infoEntity.setAttribute('open-info', '');
        infoEntity.setAttribute('vr-mode-watcher', '');
        infoEntity.setAttribute('target', 'open-info');
        infoEntity.setAttribute('class', 'clickable');
        infoEntity.setAttribute('animation__fusing', {
          'property': 'scale',
          'startEvents': 'fusing',
          'easing': 'easeInCubic',
          'dur': 2000,
          'from': '1 1 1',
          'to': '0.5 0.5 0.5'
        }, true);
        infoEntity.setAttribute('animation__mouseleave', {
          'property': 'scale',
          'startEvents': 'mouseleave',
          'easing': 'easeInCubic',
          'dur': 500,
          'to': '1 1 1'
        }, true);
        var infoEntityBtn = document.createElement('button');
        infoEntityBtn.setAttribute('type', 'button');
        infoEntityBtn.classList.add('controls__button', 'controls__button_plus', 'button');
        infoEntityBtn.insertAdjacentHTML('afterbegin', "<svg class=\"controls__button-plus controls__button-ico\" width=\"18\" height=\"18\" viewBox=\"0 0 18 18\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n                                                        <path d=\"M0.223703 8.70891L17.5478 9.06247\" stroke-width=\"1.5\"/>\n                                                        <path d=\"M9.06257 0.223702L8.70902 17.5478\" stroke-width=\"1.5\"/>\n                                                      </svg>");
        infoEntity.append(infoEntityBtn);
        resolve(infoEntity);
      });
    }
  }, {
    key: "init",
    value: function init() {
      var self = this;
      AFRAME.registerComponent("open-info", {
        schema: {
          'target': {
            type: 'selector'
          }
        },
        init: function init() {
          var _this2 = this;

          vrCompomentVisible(this.el);
          this.el.sceneEl.addEventListener('change-mode', /*#__PURE__*/function () {
            var _ref = open_info_asyncToGenerator( /*#__PURE__*/open_info_regeneratorRuntime().mark(function _callee(e) {
              return open_info_regeneratorRuntime().wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      if (e.detail.enterVr && !self.infoWidget) {
                        self.enterVR(_this2.el, _this2.el.sceneEl);
                      }

                    case 1:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee);
            }));

            return function (_x) {
              return _ref.apply(this, arguments);
            };
          }());
        },
        update: function update(value) {
          console.log('update', value);
        }
      });
    }
  }, {
    key: "enterVR",
    value: function enterVR(parentEl, sceneEl) {
      this.textListener = sceneEl.querySelector('[content-listener]');

      if (!this.textListener) {
        return;
      }

      this.infoWidget = this.textListener.querySelector('[data-scene="content-info"]');
    }
  }, {
    key: "raycasterHandle",
    value: function raycasterHandle(parentEl) {
      var _this3 = this;

      parentEl.addEventListener('raycaster-intersected', function (e) {
        _this3.timerId = setTimeout(function () {
          _this3.textListener.setAttribute('position', {
            x: 0.0001,
            y: 1.8,
            z: -2.8
          });

          _this3.infoWidget.classList.add('scene__modal-content_show');
        }, 1500);
      });
      parentEl.addEventListener('raycaster-intersected-cleared', function () {
        clearTimeout(_this3.timerId);
      });
    }
  }, {
    key: "update",
    value: function update() {}
  }]);

  return openInfo;
}(VrComponent);
;// CONCATENATED MODULE: ./js/components/content.js
function mapSheme() {
  return "<div class=\"vr__point vr__point_return clickable\" data-vr=\"return\" target=\"return\">\n            <svg rotation=\"0 0 0\" animation=\"property: rotation; to: 0 360 0; loop: true; dur: 10000\" class=\"vr__point-label vr__point-label_default\" width=\"40\" height=\"13\" viewBox=\"0 0 40 13\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n              <path d=\"M39.5 6.5C39.5 7.17307 39.0803 7.89858 38.1237 8.63362C37.1742 9.36318 35.7689 10.0418 33.9876 10.6207C30.4305 11.7767 25.4851 12.5 20 12.5C14.5149 12.5 9.56947 11.7767 6.01241 10.6207C4.23111 10.0418 2.82581 9.36318 1.87634 8.63362C0.919739 7.89858 0.5 7.17307 0.5 6.5C0.5 5.82693 0.91974 5.10142 1.87634 4.36638C2.82581 3.63682 4.23111 2.95824 6.01241 2.37932C9.56947 1.22328 14.5149 0.5 20 0.5C25.4851 0.5 30.4305 1.22328 33.9876 2.37932C35.7689 2.95824 37.1742 3.63682 38.1237 4.36638C39.0803 5.10142 39.5 5.82693 39.5 6.5Z\" fill=\"white\" fill-opacity=\"0.4\" stroke=\"white\"/>\n              <ellipse cx=\"20\" cy=\"6.5\" rx=\"6\" ry=\"1.5\" fill=\"#2D2D2D\"/>\n            </svg>\n            <div class=\"vr__point-text\">\u041D\u0430 \u043F\u043E\u0432\u0435\u0440\u0445\u043D\u043E\u0441\u0442\u044C</div>\n          </div>\n\n          <div class=\"vr__point vr__point_lift clickable\" data-vr=\"hover-point\" data-index=\"1\" data-name=\"lift\" target=\"change-point\">\n            <svg class=\"vr__point-label vr__point-label_default\" width=\"40\" height=\"14\" viewBox=\"0 0 40 14\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n              <path d=\"M39.5 7C39.5 7.67307 39.0803 8.39858 38.1237 9.13362C37.1742 9.86318 35.7689 10.5418 33.9876 11.1207C30.4305 12.2767 25.4851 13 20 13C14.5149 13 9.56947 12.2767 6.01241 11.1207C4.23111 10.5418 2.82581 9.86318 1.87634 9.13362C0.919739 8.39858 0.5 7.67307 0.5 7C0.5 6.32693 0.91974 5.60142 1.87634 4.86638C2.82581 4.13682 4.23111 3.45824 6.01241 2.87932C9.56947 1.72328 14.5149 1 20 1C25.4851 1 30.4305 1.72328 33.9876 2.87932C35.7689 3.45824 37.1742 4.13682 38.1237 4.86638C39.0803 5.60142 39.5 6.32693 39.5 7Z\" fill=\"white\" fill-opacity=\"0.4\" stroke=\"white\"/>\n              <ellipse cx=\"20\" cy=\"7\" rx=\"6\" ry=\"1.5\" fill=\"#2D2D2D\"/>\n            </svg>\n            <svg class=\"vr__point-label vr__point-label_selected\" width=\"41\" height=\"14\" viewBox=\"0 0 41 14\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n              <path d=\"M40.0005 7C40.0005 7.67307 39.5807 8.39858 38.6241 9.13362C37.6747 9.86318 36.2694 10.5418 34.4881 11.1207C30.931 12.2767 25.9856 13 20.5005 13C15.0154 13 10.07 12.2767 6.5129 11.1207C4.7316 10.5418 3.3263 9.86318 2.37683 9.13362C1.42023 8.39858 1.00049 7.67307 1.00049 7C1.00049 6.32693 1.42023 5.60142 2.37683 4.86638C3.3263 4.13682 4.7316 3.45824 6.5129 2.87932C10.07 1.72328 15.0154 1 20.5005 1C25.9856 1 30.931 1.72328 34.4881 2.87932C36.2694 3.45824 37.6747 4.13682 38.6241 4.86638C39.5807 5.60142 40.0005 6.32693 40.0005 7Z\" fill=\"#DF4220\" fill-opacity=\"0.4\" stroke=\"#DF4220\"/>\n              <ellipse cx=\"20.5005\" cy=\"7\" rx=\"6\" ry=\"1.5\" fill=\"#DF4220\"/>\n            </svg>\n            <span class=\"vr__point-pulse\"></span>\n            <div class=\"vr__point-text\">\u043F\u043E\u0434\u044A\u0435\u043C\u043D\u0430\u044F \u043C\u0430\u0448\u0438\u043D\u0430</div>\n          </div>\n\n          <div class=\"vr__point vr__point_crate clickable\" data-vr=\"hover-point\" data-index=\"2\" data-name=\"crate\" target=\"change-point\">\n            <svg class=\"vr__point-label vr__point-label_default\" width=\"40\" height=\"14\" viewBox=\"0 0 40 14\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n              <path d=\"M39.5 7C39.5 7.67307 39.0803 8.39858 38.1237 9.13362C37.1742 9.86318 35.7689 10.5418 33.9876 11.1207C30.4305 12.2767 25.4851 13 20 13C14.5149 13 9.56947 12.2767 6.01241 11.1207C4.23111 10.5418 2.82581 9.86318 1.87634 9.13362C0.919739 8.39858 0.5 7.67307 0.5 7C0.5 6.32693 0.91974 5.60142 1.87634 4.86638C2.82581 4.13682 4.23111 3.45824 6.01241 2.87932C9.56947 1.72328 14.5149 1 20 1C25.4851 1 30.4305 1.72328 33.9876 2.87932C35.7689 3.45824 37.1742 4.13682 38.1237 4.86638C39.0803 5.60142 39.5 6.32693 39.5 7Z\" fill=\"white\" fill-opacity=\"0.4\" stroke=\"white\"/>\n              <ellipse cx=\"20\" cy=\"7\" rx=\"6\" ry=\"1.5\" fill=\"#2D2D2D\"/>\n            </svg>\n\n            <svg class=\"vr__point-label vr__point-label_selected\" width=\"41\" height=\"14\" viewBox=\"0 0 41 14\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n              <path d=\"M40.0005 7C40.0005 7.67307 39.5807 8.39858 38.6241 9.13362C37.6747 9.86318 36.2694 10.5418 34.4881 11.1207C30.931 12.2767 25.9856 13 20.5005 13C15.0154 13 10.07 12.2767 6.5129 11.1207C4.7316 10.5418 3.3263 9.86318 2.37683 9.13362C1.42023 8.39858 1.00049 7.67307 1.00049 7C1.00049 6.32693 1.42023 5.60142 2.37683 4.86638C3.3263 4.13682 4.7316 3.45824 6.5129 2.87932C10.07 1.72328 15.0154 1 20.5005 1C25.9856 1 30.931 1.72328 34.4881 2.87932C36.2694 3.45824 37.6747 4.13682 38.6241 4.86638C39.5807 5.60142 40.0005 6.32693 40.0005 7Z\" fill=\"#DF4220\" fill-opacity=\"0.4\" stroke=\"#DF4220\"/>\n              <ellipse cx=\"20.5005\" cy=\"7\" rx=\"6\" ry=\"1.5\" fill=\"#DF4220\"/>\n            </svg>\n            <span class=\"vr__point-pulse\"></span>\n            <div class=\"vr__point-text\">\u043A\u043B\u0435\u0442\u044C</div>\n          </div>\n\n          <div class=\"vr__point vr__point_yard clickable\" data-vr=\"hover-point\" data-index=\"3\" data-name=\"yard\" target=\"change-point\">\n            <svg class=\"vr__point-label vr__point-label_default\" width=\"40\" height=\"13\" viewBox=\"0 0 40 13\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n              <path d=\"M39.5005 6.5C39.5005 7.17307 39.0807 7.89858 38.1241 8.63362C37.1747 9.36318 35.7694 10.0418 33.9881 10.6207C30.431 11.7767 25.4856 12.5 20.0005 12.5C14.5154 12.5 9.56996 11.7767 6.0129 10.6207C4.2316 10.0418 2.8263 9.36318 1.87683 8.63362C0.920228 7.89858 0.500488 7.17307 0.500488 6.5C0.500488 5.82693 0.920228 5.10142 1.87683 4.36638C2.8263 3.63682 4.2316 2.95824 6.0129 2.37932C9.56996 1.22328 14.5154 0.5 20.0005 0.5C25.4856 0.5 30.431 1.22328 33.9881 2.37932C35.7694 2.95824 37.1747 3.63682 38.1241 4.36638C39.0807 5.10142 39.5005 5.82693 39.5005 6.5Z\" fill=\"white\" fill-opacity=\"0.4\" stroke=\"white\"/>\n              <ellipse cx=\"20.0005\" cy=\"6.5\" rx=\"6\" ry=\"1.5\" fill=\"#2D2D2D\"/>\n            </svg>\n            <svg class=\"vr__point-label vr__point-label_selected\" width=\"41\" height=\"13\" viewBox=\"0 0 41 13\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n              <path d=\"M40.0005 6.5C40.0005 7.17307 39.5807 7.89858 38.6241 8.63362C37.6747 9.36318 36.2694 10.0418 34.4881 10.6207C30.931 11.7767 25.9856 12.5 20.5005 12.5C15.0154 12.5 10.07 11.7767 6.5129 10.6207C4.7316 10.0418 3.3263 9.36318 2.37683 8.63362C1.42023 7.89858 1.00049 7.17307 1.00049 6.5C1.00049 5.82693 1.42023 5.10142 2.37683 4.36638C3.3263 3.63682 4.7316 2.95824 6.5129 2.37932C10.07 1.22328 15.0154 0.5 20.5005 0.5C25.9856 0.5 30.931 1.22328 34.4881 2.37932C36.2694 2.95824 37.6747 3.63682 38.6241 4.36638C39.5807 5.10142 40.0005 5.82693 40.0005 6.5Z\" fill=\"#DF4220\" fill-opacity=\"0.4\" stroke=\"#DF4220\"/>\n              <ellipse cx=\"20.5005\" cy=\"6.5\" rx=\"6\" ry=\"1.5\" fill=\"#DF4220\"/>\n            </svg>\n            <span class=\"vr__point-pulse\"></span>\n            <div class=\"vr__point-text\">\u041E\u043A\u043E\u043B\u043E\u0441\u0442\u0432\u043E\u043B\u044C\u043D\u044B\u0439 \u0434\u0432\u043E\u0440</div>\n          </div>\n\n          <div class=\"vr__map-bottom\">\n            <div class=\"vr__map-col\">\n\n              <div class=\"vr__point vr__point_distribution clickable\" data-vr=\"hover-point\" data-index=\"9\" data-name=\"distribution\" target=\"change-point\">\n                <svg class=\"vr__point-label vr__point-label_default\" width=\"41\" height=\"14\" viewBox=\"0 0 41 14\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n                  <path d=\"M40 7C40 7.67307 39.5803 8.39858 38.6237 9.13362C37.6742 9.86318 36.2689 10.5418 34.4876 11.1207C30.9305 12.2767 25.9851 13 20.5 13C15.0149 13 10.0695 12.2767 6.51241 11.1207C4.73111 10.5418 3.32581 9.86318 2.37634 9.13362C1.41974 8.39858 1 7.67307 1 7C1 6.32693 1.41974 5.60142 2.37634 4.86638C3.32581 4.13682 4.73111 3.45824 6.51241 2.87932C10.0695 1.72328 15.0149 1 20.5 1C25.9851 1 30.9305 1.72328 34.4876 2.87932C36.2689 3.45824 37.6742 4.13682 38.6237 4.86638C39.5803 5.60142 40 6.32693 40 7Z\" fill=\"white\" fill-opacity=\"0.4\" stroke=\"white\"/>\n                  <ellipse cx=\"20.5\" cy=\"7\" rx=\"6\" ry=\"1.5\" fill=\"#2D2D2D\"/>\n                </svg>\n                <svg class=\"vr__point-label vr__point-label_selected\" width=\"40\" height=\"13\" viewBox=\"0 0 40 13\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n                  <path d=\"M39.5 6.5C39.5 7.17307 39.0803 7.89858 38.1237 8.63362C37.1742 9.36318 35.7689 10.0418 33.9876 10.6207C30.4305 11.7767 25.4851 12.5 20 12.5C14.5149 12.5 9.56947 11.7767 6.01241 10.6207C4.23111 10.0418 2.82581 9.36318 1.87634 8.63362C0.919739 7.89858 0.5 7.17307 0.5 6.5C0.5 5.82693 0.91974 5.10142 1.87634 4.36638C2.82581 3.63682 4.23111 2.95824 6.01241 2.37932C9.56947 1.22328 14.5149 0.5 20 0.5C25.4851 0.5 30.4305 1.22328 33.9876 2.37932C35.7689 2.95824 37.1742 3.63682 38.1237 4.36638C39.0803 5.10142 39.5 5.82693 39.5 6.5Z\" fill=\"#DF4220\" fill-opacity=\"0.4\" stroke=\"#DF4220\"/>\n                  <ellipse cx=\"20\" cy=\"6.5\" rx=\"6\" ry=\"1.5\" fill=\"#DF4220\"/>\n                </svg>\n                <span class=\"vr__point-pulse\"></span>\n                <div class=\"vr__point-text\">\u0420\u0430\u0441\u043F\u0440\u0435\u0434\u0435\u043B\u0438\u0442\u0435\u043B\u044C\u043D\u0430\u044F <br>\u043F\u043E\u0434\u0441\u0442\u0430\u043D\u0446\u0438\u044F</div>\n              </div>\n\n              <div class=\"vr__point vr__point_harvester clickable\" data-vr=\"hover-point\" data-index=\"10\" data-name=\"harvester\" target=\"change-point\">\n                <svg class=\"vr__point-label vr__point-label_default\" width=\"41\" height=\"13\" viewBox=\"0 0 41 13\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n                  <path d=\"M40 6.5C40 7.17307 39.5803 7.89858 38.6237 8.63362C37.6742 9.36318 36.2689 10.0418 34.4876 10.6207C30.9305 11.7767 25.9851 12.5 20.5 12.5C15.0149 12.5 10.0695 11.7767 6.51241 10.6207C4.73111 10.0418 3.32581 9.36318 2.37634 8.63362C1.41974 7.89858 1 7.17307 1 6.5C1 5.82693 1.41974 5.10142 2.37634 4.36638C3.32581 3.63682 4.73111 2.95824 6.51241 2.37932C10.0695 1.22328 15.0149 0.5 20.5 0.5C25.9851 0.5 30.9305 1.22328 34.4876 2.37932C36.2689 2.95824 37.6742 3.63682 38.6237 4.36638C39.5803 5.10142 40 5.82693 40 6.5Z\" fill=\"white\" fill-opacity=\"0.4\" stroke=\"white\"/>\n                  <ellipse cx=\"20.5\" cy=\"6.5\" rx=\"6\" ry=\"1.5\" fill=\"#2D2D2D\"/>\n                </svg>\n                <svg class=\"vr__point-label vr__point-label_selected\" width=\"40\" height=\"13\" viewBox=\"0 0 40 13\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n                  <path d=\"M39.4995 6.5C39.4995 7.17307 39.0798 7.89858 38.1232 8.63362C37.1737 9.36318 35.7684 10.0418 33.9871 10.6207C30.43 11.7767 25.4846 12.5 19.9995 12.5C14.5144 12.5 9.56898 11.7767 6.01192 10.6207C4.23062 10.0418 2.82532 9.36318 1.87586 8.63362C0.919251 7.89858 0.499512 7.17307 0.499512 6.5C0.499512 5.82693 0.919251 5.10142 1.87586 4.36638C2.82532 3.63682 4.23062 2.95824 6.01192 2.37932C9.56898 1.22328 14.5144 0.5 19.9995 0.5C25.4846 0.5 30.43 1.22328 33.9871 2.37932C35.7684 2.95824 37.1737 3.63682 38.1232 4.36638C39.0798 5.10142 39.4995 5.82693 39.4995 6.5Z\" fill=\"#DF4220\" fill-opacity=\"0.4\" stroke=\"#DF4220\"/>\n                  <ellipse cx=\"19.9995\" cy=\"6.5\" rx=\"6\" ry=\"1.5\" fill=\"#DF4220\"/>\n                </svg>\n                <span class=\"vr__point-pulse\"></span>\n                <div class=\"vr__point-text\">\u041A\u043E\u043C\u0431\u0430\u0439\u043D \u041A\u041F 330</div>\n              </div>\n\n            </div>\n            <div class=\"vr__map-col\">\n\n              <div class=\"vr__point vr__point_medical clickable\" data-vr=\"hover-point\" data-index=\"4\" data-name=\"medical\" target=\"change-point\">\n                <svg class=\"vr__point-label vr__point-label_default\" width=\"40\" height=\"13\" viewBox=\"0 0 40 13\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n                  <path d=\"M39.5005 6.5C39.5005 7.17307 39.0807 7.89858 38.1241 8.63362C37.1747 9.36318 35.7694 10.0418 33.9881 10.6207C30.431 11.7767 25.4856 12.5 20.0005 12.5C14.5154 12.5 9.56996 11.7767 6.0129 10.6207C4.2316 10.0418 2.8263 9.36318 1.87683 8.63362C0.920228 7.89858 0.500488 7.17307 0.500488 6.5C0.500488 5.82693 0.920228 5.10142 1.87683 4.36638C2.8263 3.63682 4.2316 2.95824 6.0129 2.37932C9.56996 1.22328 14.5154 0.5 20.0005 0.5C25.4856 0.5 30.431 1.22328 33.9881 2.37932C35.7694 2.95824 37.1747 3.63682 38.1241 4.36638C39.0807 5.10142 39.5005 5.82693 39.5005 6.5Z\" fill=\"white\" fill-opacity=\"0.4\" stroke=\"white\"/>\n                  <ellipse cx=\"20.0005\" cy=\"6.5\" rx=\"6\" ry=\"1.5\" fill=\"#2D2D2D\"/>\n                </svg>\n                <svg class=\"vr__point-label vr__point-label_selected\" width=\"41\" height=\"13\" viewBox=\"0 0 41 13\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n                  <path d=\"M40.0005 6.5C40.0005 7.17307 39.5807 7.89858 38.6241 8.63362C37.6747 9.36318 36.2694 10.0418 34.4881 10.6207C30.931 11.7767 25.9856 12.5 20.5005 12.5C15.0154 12.5 10.07 11.7767 6.5129 10.6207C4.7316 10.0418 3.3263 9.36318 2.37683 8.63362C1.42023 7.89858 1.00049 7.17307 1.00049 6.5C1.00049 5.82693 1.42023 5.10142 2.37683 4.36638C3.3263 3.63682 4.7316 2.95824 6.5129 2.37932C10.07 1.22328 15.0154 0.5 20.5005 0.5C25.9856 0.5 30.931 1.22328 34.4881 2.37932C36.2694 2.95824 37.6747 3.63682 38.6241 4.36638C39.5807 5.10142 40.0005 5.82693 40.0005 6.5Z\" fill=\"#DF4220\" fill-opacity=\"0.4\" stroke=\"#DF4220\"/>\n                  <ellipse cx=\"20.5005\" cy=\"6.5\" rx=\"6\" ry=\"1.5\" fill=\"#DF4220\"/>\n                </svg>\n                <span class=\"vr__point-pulse\"></span>\n                <div class=\"vr__point-text\">\u043C\u0435\u0434\u043F\u0443\u043D\u043A\u0442</div>\n              </div>\n\n              <div class=\"vr__point vr__point_conveyor clickable\" data-vr=\"hover-point\" data-index=\"5\" data-name=\"conveyor\" target=\"change-point\">\n                <svg class=\"vr__point-label vr__point-label_default\" width=\"40\" height=\"13\" viewBox=\"0 0 40 13\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n                  <path d=\"M39.5005 6.5C39.5005 7.17307 39.0807 7.89858 38.1241 8.63362C37.1747 9.36318 35.7694 10.0418 33.9881 10.6207C30.431 11.7767 25.4856 12.5 20.0005 12.5C14.5154 12.5 9.56996 11.7767 6.0129 10.6207C4.2316 10.0418 2.8263 9.36318 1.87683 8.63362C0.920228 7.89858 0.500488 7.17307 0.500488 6.5C0.500488 5.82693 0.920228 5.10142 1.87683 4.36638C2.8263 3.63682 4.2316 2.95824 6.0129 2.37932C9.56996 1.22328 14.5154 0.5 20.0005 0.5C25.4856 0.5 30.431 1.22328 33.9881 2.37932C35.7694 2.95824 37.1747 3.63682 38.1241 4.36638C39.0807 5.10142 39.5005 5.82693 39.5005 6.5Z\" fill=\"white\" fill-opacity=\"0.4\" stroke=\"white\"/>\n                  <ellipse cx=\"20.0005\" cy=\"6.5\" rx=\"6\" ry=\"1.5\" fill=\"#2D2D2D\"/>\n                </svg>\n                <svg class=\"vr__point-label vr__point-label_selected\" width=\"41\" height=\"13\" viewBox=\"0 0 41 13\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n                  <path d=\"M40.0005 6.5C40.0005 7.17307 39.5807 7.89858 38.6241 8.63362C37.6747 9.36318 36.2694 10.0418 34.4881 10.6207C30.931 11.7767 25.9856 12.5 20.5005 12.5C15.0154 12.5 10.07 11.7767 6.5129 10.6207C4.7316 10.0418 3.3263 9.36318 2.37683 8.63362C1.42023 7.89858 1.00049 7.17307 1.00049 6.5C1.00049 5.82693 1.42023 5.10142 2.37683 4.36638C3.3263 3.63682 4.7316 2.95824 6.5129 2.37932C10.07 1.22328 15.0154 0.5 20.5005 0.5C25.9856 0.5 30.931 1.22328 34.4881 2.37932C36.2694 2.95824 37.6747 3.63682 38.6241 4.36638C39.5807 5.10142 40.0005 5.82693 40.0005 6.5Z\" fill=\"#DF4220\" fill-opacity=\"0.4\" stroke=\"#DF4220\"/>\n                  <ellipse cx=\"20.5005\" cy=\"6.5\" rx=\"6\" ry=\"1.5\" fill=\"#DF4220\"/>\n                </svg>\n                <span class=\"vr__point-pulse\"></span>\n                <div class=\"vr__point-text\">\u041A\u043E\u043D\u0432\u0435\u0435\u0440\u043D\u0430\u044F \u043B\u0435\u043D\u0442\u0430</div>\n              </div>\n\n              <div class=\"vr__point vr__point_pdm clickable\" data-vr=\"hover-point\" data-index=\"6\" data-name=\"pdm\" target=\"change-point\">\n                <svg class=\"vr__point-label vr__point-label_default\" width=\"40\" height=\"13\" viewBox=\"0 0 40 13\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n                  <path d=\"M39.5005 6.5C39.5005 7.17307 39.0807 7.89858 38.1241 8.63362C37.1747 9.36318 35.7694 10.0418 33.9881 10.6207C30.431 11.7767 25.4856 12.5 20.0005 12.5C14.5154 12.5 9.56996 11.7767 6.0129 10.6207C4.2316 10.0418 2.8263 9.36318 1.87683 8.63362C0.920228 7.89858 0.500488 7.17307 0.500488 6.5C0.500488 5.82693 0.920228 5.10142 1.87683 4.36638C2.8263 3.63682 4.2316 2.95824 6.0129 2.37932C9.56996 1.22328 14.5154 0.5 20.0005 0.5C25.4856 0.5 30.431 1.22328 33.9881 2.37932C35.7694 2.95824 37.1747 3.63682 38.1241 4.36638C39.0807 5.10142 39.5005 5.82693 39.5005 6.5Z\" fill=\"white\" fill-opacity=\"0.4\" stroke=\"white\"/>\n                  <ellipse cx=\"20.0005\" cy=\"6.5\" rx=\"6\" ry=\"1.5\" fill=\"#2D2D2D\"/>\n                </svg>\n                <svg class=\"vr__point-label vr__point-label_selected\" width=\"41\" height=\"13\" viewBox=\"0 0 41 13\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n                  <path d=\"M40.0005 6.5C40.0005 7.17307 39.5807 7.89858 38.6241 8.63362C37.6747 9.36318 36.2694 10.0418 34.4881 10.6207C30.931 11.7767 25.9856 12.5 20.5005 12.5C15.0154 12.5 10.07 11.7767 6.5129 10.6207C4.7316 10.0418 3.3263 9.36318 2.37683 8.63362C1.42023 7.89858 1.00049 7.17307 1.00049 6.5C1.00049 5.82693 1.42023 5.10142 2.37683 4.36638C3.3263 3.63682 4.7316 2.95824 6.5129 2.37932C10.07 1.22328 15.0154 0.5 20.5005 0.5C25.9856 0.5 30.931 1.22328 34.4881 2.37932C36.2694 2.95824 37.6747 3.63682 38.6241 4.36638C39.5807 5.10142 40.0005 5.82693 40.0005 6.5Z\" fill=\"#DF4220\" fill-opacity=\"0.4\" stroke=\"#DF4220\"/>\n                  <ellipse cx=\"20.5005\" cy=\"6.5\" rx=\"6\" ry=\"1.5\" fill=\"#DF4220\"/>\n                </svg>\n                <span class=\"vr__point-pulse\"></span>\n                <div class=\"vr__point-text\">\u041F\u0414\u041C</div>\n              </div>\n\n              <div class=\"vr__point vr__point_drill clickable\" data-vr=\"hover-point\" data-index=\"7\" data-name=\"drill\" target=\"change-point\">\n                <svg class=\"vr__point-label vr__point-label_default\" width=\"40\" height=\"13\" viewBox=\"0 0 40 13\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n                  <path d=\"M39.5005 6.5C39.5005 7.17307 39.0807 7.89858 38.1241 8.63362C37.1747 9.36318 35.7694 10.0418 33.9881 10.6207C30.431 11.7767 25.4856 12.5 20.0005 12.5C14.5154 12.5 9.56996 11.7767 6.0129 10.6207C4.2316 10.0418 2.8263 9.36318 1.87683 8.63362C0.920228 7.89858 0.500488 7.17307 0.500488 6.5C0.500488 5.82693 0.920228 5.10142 1.87683 4.36638C2.8263 3.63682 4.2316 2.95824 6.0129 2.37932C9.56996 1.22328 14.5154 0.5 20.0005 0.5C25.4856 0.5 30.431 1.22328 33.9881 2.37932C35.7694 2.95824 37.1747 3.63682 38.1241 4.36638C39.0807 5.10142 39.5005 5.82693 39.5005 6.5Z\" fill=\"white\" fill-opacity=\"0.4\" stroke=\"white\"/>\n                  <ellipse cx=\"20.0005\" cy=\"6.5\" rx=\"6\" ry=\"1.5\" fill=\"#2D2D2D\"/>\n                </svg>\n                <svg class=\"vr__point-label vr__point-label_selected\" width=\"41\" height=\"13\" viewBox=\"0 0 41 13\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n                  <path d=\"M40.0005 6.5C40.0005 7.17307 39.5807 7.89858 38.6241 8.63362C37.6747 9.36318 36.2694 10.0418 34.4881 10.6207C30.931 11.7767 25.9856 12.5 20.5005 12.5C15.0154 12.5 10.07 11.7767 6.5129 10.6207C4.7316 10.0418 3.3263 9.36318 2.37683 8.63362C1.42023 7.89858 1.00049 7.17307 1.00049 6.5C1.00049 5.82693 1.42023 5.10142 2.37683 4.36638C3.3263 3.63682 4.7316 2.95824 6.5129 2.37932C10.07 1.22328 15.0154 0.5 20.5005 0.5C25.9856 0.5 30.931 1.22328 34.4881 2.37932C36.2694 2.95824 37.6747 3.63682 38.6241 4.36638C39.5807 5.10142 40.0005 5.82693 40.0005 6.5Z\" fill=\"#DF4220\" fill-opacity=\"0.4\" stroke=\"#DF4220\"/>\n                  <ellipse cx=\"20.5005\" cy=\"6.5\" rx=\"6\" ry=\"1.5\" fill=\"#DF4220\"/>\n                </svg>\n                <span class=\"vr__point-pulse\"></span>\n                <div class=\"vr__point-text\">\u0431\u0443\u0440\u043E\u0432\u0430\u044F \u0443\u0441\u0442\u0430\u043D\u043E\u0432\u043A\u0430</div>\n              </div>\n\n              <div class=\"vr__point vr__point_ural clickable\" data-vr=\"hover-point\" data-index=\"8\" data-name=\"ural\" target=\"change-point\">\n                <svg class=\"vr__point-label vr__point-label_default\" width=\"41\" height=\"14\" viewBox=\"0 0 41 14\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n                  <path d=\"M39.5479 7.31055C39.5479 7.98362 39.1281 8.70912 38.1715 9.44417C37.222 10.1737 35.8167 10.8523 34.0354 11.4312C30.4784 12.5873 25.533 13.3105 20.0479 13.3105C14.5627 13.3105 9.61732 12.5873 6.06026 11.4312C4.27896 10.8523 2.87366 10.1737 1.9242 9.44417C0.967591 8.70912 0.547852 7.98362 0.547852 7.31055C0.547852 6.63748 0.967591 5.91197 1.9242 5.17693C2.87366 4.44737 4.27896 3.76879 6.06026 3.18987C9.61732 2.03382 14.5627 1.31055 20.0479 1.31055C25.533 1.31055 30.4784 2.03382 34.0354 3.18987C35.8167 3.76879 37.222 4.44737 38.1715 5.17693C39.1281 5.91197 39.5479 6.63748 39.5479 7.31055Z\" fill=\"white\" fill-opacity=\"0.4\" stroke=\"white\"/>\n                  <ellipse cx=\"20.0479\" cy=\"7.31055\" rx=\"6\" ry=\"1.5\" fill=\"#2D2D2D\"/>\n                </svg>\n                <svg class=\"vr__point-label vr__point-label_selected\" width=\"41\" height=\"14\" viewBox=\"0 0 41 14\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n                  <path d=\"M40.0479 7.31055C40.0479 7.98362 39.6281 8.70912 38.6715 9.44417C37.722 10.1737 36.3167 10.8523 34.5354 11.4312C30.9784 12.5873 26.033 13.3105 20.5479 13.3105C15.0627 13.3105 10.1173 12.5873 6.56026 11.4312C4.77896 10.8523 3.37366 10.1737 2.4242 9.44417C1.46759 8.70912 1.04785 7.98362 1.04785 7.31055C1.04785 6.63748 1.46759 5.91197 2.4242 5.17693C3.37366 4.44737 4.77896 3.76879 6.56026 3.18987C10.1173 2.03382 15.0627 1.31055 20.5479 1.31055C26.033 1.31055 30.9784 2.03382 34.5354 3.18987C36.3167 3.76879 37.722 4.44737 38.6715 5.17693C39.6281 5.91197 40.0479 6.63748 40.0479 7.31055Z\" fill=\"#DF4220\" fill-opacity=\"0.4\" stroke=\"#DF4220\"/>\n                  <ellipse cx=\"20.5479\" cy=\"7.31055\" rx=\"6\" ry=\"1.5\" fill=\"#DF4220\"/>\n                </svg>\n                <span class=\"vr__point-pulse\"></span>\n                <div class=\"vr__point-text\">\u043A\u043E\u043C\u0431\u0430\u0439\u043D \u0443\u0440\u0430\u043B</div>\n              </div>\n\n            </div>\n          </div>\n\n          <svg class=\"vr__map-ico\" width=\"158\" height=\"504\" viewBox=\"0 0 158 504\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n            <path d=\"M1.99951 359.5L1.99951 432\" stroke=\"white\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n            <path d=\"M40.4995 194V235\" stroke=\"white\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n            <path d=\"M121.501 399L121.5 427.5\" stroke=\"white\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n            <path d=\"M121.5 434.8L121.5 464.5\" stroke=\"white\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n            <path d=\"M121.5 471.903L121.5 502.5\" stroke=\"white\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n            <path d=\"M121.501 363L121.5 391.5\" stroke=\"white\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n            <path d=\"M58.1703 288.207L100.218 292.207L120.671 354.708\" stroke=\"white\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n            <path d=\"M20.9995 284.5L1.89292 282.5L1.8927 352.5\" stroke=\"white\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n            <path d=\"M40.4995 121.5V185.5\" stroke=\"white\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n            <path d=\"M40.4995 242.5V283.5\" stroke=\"white\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n            <path d=\"M32.4999 118L9.99988 118\" stroke=\"white\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n            <path d=\"M102.09 133.353L120.916 124.567V68.716M102.09 133.353L76.9885 130.842L68.8305 128.96H58.7899L60.9863 113.271L63.1827 86.2871V71.2262M102.09 133.353V75.3052M120.916 68.716L111.503 69.9711L102.09 75.3052M120.916 68.716L107.11 67.4609L76.9885 64.9508L71.3407 64.3232L65.0653 64.9508V68.716L63.1827 71.2262M102.09 75.3052L63.1827 71.2262\" stroke=\"white\" stroke-width=\"1.5\"/>\n            <path d=\"M114.641 67.4613V58.362L124.995 52.7142H135.35M135.35 52.7142V82.2085L157 85.9737V95.3868L142.566 101.662L120.602 112.33V68.7164L83.2639 65.2649L80.44 55.2243L79.1849 48.3214L83.2639 47.6938L135.35 52.7142Z\" stroke=\"white\" stroke-width=\"1.5\"/>\n            <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M58.79 132.097H52.8284V115.467L39.9639 122.37L32.1196 118.605L32.1194 118.605V79.3835L24.2751 112.016L24.416 112.368L24.2754 112.329H18L32.1196 66.2053V60.2437V22.9052L42.7878 19.7675V16.316V3.45146L49.0632 0L71.027 1.56885L71.3408 16.316L79.185 48.0067L82.0089 61.4988L83.264 65.5778L71.3408 64.3227L65.0654 64.9503L64.7516 68.4017L63.4966 71.5394L60.6726 113.271L58.79 132.097ZM28.9819 119.86L28.9819 119.86H28.9822L28.9819 119.86ZM65.3791 63.6955L67.5755 38.5939L72.282 37.6526L79.4987 64.323L72.282 63.6955L65.3791 64.323V63.6955ZM59.4173 42.0451L50.9455 41.1038V55.5372L58.476 55.851L59.4173 42.0451ZM50.3183 114.526L52.8285 115.467L58.1626 61.8125L50.3183 61.185V114.526ZM71.6547 32.9459L70.3996 27.9256L65.3793 29.4945L50.3183 28.5531V32.9459L65.3793 34.5148L71.6547 32.9459ZM67.5752 18.1984L63.81 18.8259L43.7287 17.2571V21.3361L50.6317 21.9636V23.5325L65.065 24.4738L70.0854 22.9049L67.5752 18.1984Z\" fill=\"white\"/>\n          </svg>";
}
function helpSheme() {
  return "<div class=\"popup__help\">\n            <div class=\"popup__help-item\">\n              <svg class=\"popup__help-view\" viewBox=\"0 0 48 41\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n                <path d=\"M15.995 28.2161C15.059 28.2161 14.237 28.0301 13.529 27.6581C12.821 27.2741 12.281 26.7941 11.909 26.2181L12.611 25.6061C13.391 26.7221 14.513 27.2801 15.977 27.2801C16.901 27.2801 17.633 27.0521 18.173 26.5961C18.725 26.1401 19.001 25.5161 19.001 24.7241C19.001 23.9081 18.701 23.3021 18.101 22.9061C17.513 22.4981 16.739 22.2941 15.779 22.2941C15.155 22.2941 14.783 22.3001 14.663 22.3121V21.3401C14.783 21.3521 15.155 21.3581 15.779 21.3581C16.643 21.3581 17.363 21.1661 17.939 20.7821C18.527 20.3981 18.821 19.8281 18.821 19.0721C18.821 18.3521 18.545 17.7881 17.993 17.3801C17.441 16.9601 16.757 16.7501 15.941 16.7501C14.705 16.7501 13.631 17.2601 12.719 18.2801L12.071 17.6321C13.067 16.4201 14.375 15.8141 15.995 15.8141C17.087 15.8141 18.005 16.0961 18.749 16.6601C19.493 17.2241 19.865 17.9981 19.865 18.9821C19.865 19.5461 19.715 20.0441 19.415 20.4761C19.115 20.9081 18.785 21.2201 18.425 21.4121C18.065 21.5921 17.687 21.7181 17.291 21.7901C17.939 21.8621 18.557 22.1561 19.145 22.6721C19.745 23.1881 20.045 23.8901 20.045 24.7781C20.045 25.7861 19.679 26.6141 18.947 27.2621C18.227 27.8981 17.243 28.2161 15.995 28.2161ZM26.578 28.2161C25.954 28.2161 25.39 28.1021 24.886 27.8741C24.382 27.6461 23.962 27.3401 23.626 26.9561C23.29 26.5721 23.008 26.1161 22.78 25.5881C22.564 25.0481 22.408 24.4841 22.312 23.8961C22.216 23.3081 22.168 22.6781 22.168 22.0061C22.168 21.3701 22.216 20.7641 22.312 20.1881C22.42 19.6001 22.594 19.0361 22.834 18.4961C23.074 17.9561 23.362 17.4941 23.698 17.1101C24.046 16.7141 24.484 16.4021 25.012 16.1741C25.54 15.9341 26.122 15.8141 26.758 15.8141C28.102 15.8141 29.182 16.3241 29.998 17.3441L29.386 18.1001C28.726 17.2001 27.85 16.7501 26.758 16.7501C26.134 16.7501 25.582 16.9061 25.102 17.2181C24.634 17.5181 24.268 17.9261 24.004 18.4421C23.74 18.9581 23.542 19.5161 23.41 20.1161C23.278 20.7161 23.212 21.3521 23.212 22.0241C23.212 22.2761 23.218 22.4621 23.23 22.5821C23.53 22.0901 24.004 21.6341 24.652 21.2141C25.3 20.7941 25.996 20.5841 26.74 20.5841C27.88 20.5841 28.81 20.9141 29.53 21.5741C30.25 22.2221 30.61 23.1581 30.61 24.3821C30.61 25.4261 30.244 26.3261 29.512 27.0821C28.78 27.8381 27.802 28.2161 26.578 28.2161ZM26.542 27.2801C27.49 27.2801 28.228 26.9861 28.756 26.3981C29.296 25.7981 29.566 25.1321 29.566 24.4001C29.566 23.4521 29.29 22.7321 28.738 22.2401C28.186 21.7481 27.46 21.5021 26.56 21.5021C25.912 21.5021 25.288 21.6941 24.688 22.0781C24.1 22.4501 23.632 22.9421 23.284 23.5541C23.332 24.1661 23.464 24.7361 23.68 25.2641C23.896 25.7921 24.25 26.2601 24.742 26.6681C25.234 27.0761 25.834 27.2801 26.542 27.2801ZM39.1597 27.6581C38.5717 28.0301 37.8937 28.2161 37.1257 28.2161C36.3577 28.2161 35.6737 28.0301 35.0737 27.6581C34.4737 27.2861 34.0057 26.7941 33.6697 26.1821C33.3457 25.5581 33.0997 24.8981 32.9317 24.2021C32.7637 23.4941 32.6797 22.7621 32.6797 22.0061C32.6797 21.2501 32.7637 20.5241 32.9317 19.8281C33.0997 19.1201 33.3457 18.4601 33.6697 17.8481C34.0057 17.2361 34.4677 16.7441 35.0557 16.3721C35.6557 16.0001 36.3457 15.8141 37.1257 15.8141C37.8937 15.8141 38.5717 16.0001 39.1597 16.3721C39.7477 16.7441 40.2097 17.2361 40.5457 17.8481C40.8817 18.4601 41.1337 19.1201 41.3017 19.8281C41.4697 20.5241 41.5537 21.2501 41.5537 22.0061C41.5537 22.7501 41.4697 23.4761 41.3017 24.1841C41.1337 24.8921 40.8817 25.5581 40.5457 26.1821C40.2097 26.7941 39.7477 27.2861 39.1597 27.6581ZM37.1257 27.2801C37.7257 27.2801 38.2477 27.1241 38.6917 26.8121C39.1477 26.5001 39.4957 26.0861 39.7357 25.5701C39.9877 25.0421 40.1677 24.4841 40.2757 23.8961C40.3957 23.2961 40.4557 22.6661 40.4557 22.0061C40.4557 21.3461 40.3957 20.7221 40.2757 20.1341C40.1677 19.5341 39.9877 18.9761 39.7357 18.4601C39.4957 17.9321 39.1477 17.5181 38.6917 17.2181C38.2477 16.9061 37.7257 16.7501 37.1257 16.7501C36.5137 16.7501 35.9797 16.9061 35.5237 17.2181C35.0797 17.5181 34.7317 17.9321 34.4797 18.4601C34.2397 18.9761 34.0597 19.5341 33.9397 20.1341C33.8197 20.7221 33.7597 21.3461 33.7597 22.0061C33.7597 22.6661 33.8197 23.2961 33.9397 23.8961C34.0597 24.4841 34.2397 25.0421 34.4797 25.5701C34.7317 26.0861 35.0797 26.5001 35.5237 26.8121C35.9797 27.1241 36.5137 27.2801 37.1257 27.2801ZM46.6009 16.4441C47.0089 16.8521 47.2129 17.3441 47.2129 17.9201C47.2129 18.4961 47.0089 18.9881 46.6009 19.3961C46.1929 19.7921 45.6949 19.9901 45.1069 19.9901C44.5309 19.9901 44.0389 19.7921 43.6309 19.3961C43.2349 18.9881 43.0369 18.4961 43.0369 17.9201C43.0369 17.3441 43.2349 16.8521 43.6309 16.4441C44.0389 16.0241 44.5309 15.8141 45.1069 15.8141C45.6949 15.8141 46.1929 16.0241 46.6009 16.4441ZM46.5109 17.9201C46.5109 17.5361 46.3729 17.2061 46.0969 16.9301C45.8209 16.6541 45.4909 16.5161 45.1069 16.5161C44.7349 16.5161 44.4109 16.6541 44.1349 16.9301C43.8709 17.2061 43.7389 17.5361 43.7389 17.9201C43.7389 18.3041 43.8709 18.6281 44.1349 18.8921C44.3989 19.1561 44.7229 19.2881 45.1069 19.2881C45.4909 19.2881 45.8209 19.1561 46.0969 18.8921C46.3729 18.6161 46.5109 18.2921 46.5109 17.9201Z\" fill=\"white\"/>\n                <path d=\"M32.1496 8.11787L25.0134 7.51383L29.1046 1.63569L32.1496 8.11787Z\" fill=\"white\"/>\n                <path d=\"M28.806 37.4892C25.9511 39.1508 22.7034 40.0177 19.4002 39.9999C16.0971 39.982 12.8589 39.0801 10.0221 37.3878C7.18533 35.6955 4.85339 33.2746 3.26851 30.3764C1.68363 27.4782 0.903637 24.2086 1.00954 20.907C1.11543 17.6055 2.10337 14.3926 3.87072 11.6019C5.63807 8.81126 8.12037 6.5447 11.0598 5.03768C13.9992 3.53065 17.2885 2.83812 20.586 3.03203C23.8835 3.22593 27.069 4.2992 29.8115 6.14034\" stroke=\"white\"/>\n              </svg>\n              <p class=\"popup__help-descr\">\n                \u0412\u0438\u0440\u0442\u0443\u0430\u043B\u044C\u043D\u044B\u0439 \u0442\u0443\u0440 \u043D\u0430 360\xB0. \u041F\u0440\u0435\u0434\u043B\u0430\u0433\u0430\u0435\u043C \u0432\u0430\u043C \u043E\u0441\u043C\u043E\u0442\u0440\u0435\u0442\u044C\u0441\u044F \u0432\u043E\u043A\u0440\u0443\u0433, \u043F\u0435\u0440\u0435\u0434\u0432\u0438\u0433\u0430\u044F \u0432\u0430\u0448\u0435 \u0443\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u043E.\n              </p>\n            </div>\n            <div class=\"popup__help-item\">\n              <svg class=\"popup__help-map\" viewBox=\"0 0 25 26\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n                <path d=\"M1 8.73688V23.4737V24M1 8.73688V24M1 8.73688L8.5 5.05267M1 24L8.5 20.8421M8.5 5.05267V8.21056M8.5 5.05267L13 7.68425M8.5 9.78951V12.4211M8.5 14.5264V17.1579M8.5 18.7369V20.8421M8.5 20.8421L15.5 24.5264M15.5 24.5264V22.4211V21.8948M15.5 24.5264L23 21.8948V12.9474M15.5 20.3158V17.6842M15.5 15.579V12.9474M19 1.89478L14.5 10.8421H24L19 1.89478Z\" stroke=\"currentColor\"/>\n              </svg>\n              <p class=\"popup__help-descr\">\n                \u041D\u0430\u0436\u043C\u0438\u0442\u0435 \u043D\u0430 \u0434\u0430\u043D\u043D\u0443\u044E \u043A\u043D\u043E\u043F\u043A\u0443 \u0447\u0442\u043E\u0431\u044B \u043E\u0442\u043A\u0440\u044B\u043B\u0430\u0441\u044C \u043A\u0430\u0440\u0442\u0430. \u0421 \u0435\u0435 \u043F\u043E\u043C\u043E\u0449\u044C\u044E \u0432\u044B \u0441\u043C\u043E\u0436\u0435\u0442\u0435 \u043F\u0435\u0440\u0435\u043C\u0435\u0449\u0430\u0442\u044C\u0441\u044F \u043F\u043E \u043E\u0431\u044A\u0435\u043A\u0442\u0430\u043C \u0440\u0443\u0434\u043D\u0438\u043A\u0430\n              </p>\n            </div>\n            <div class=\"popup__help-item\">\n              <div class=\"popup__help-circle\">\n                <svg class=\"popup__help-plus\" width=\"18\" height=\"18\" viewBox=\"0 0 18 18\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n                  <path d=\"M0.223703 8.70891L17.5478 9.06247\" stroke-width=\"1.5\"/>\n                  <path d=\"M9.06257 0.223702L8.70902 17.5478\" stroke-width=\"1.5\"/>\n                </svg>\n              </div>\n              <p class=\"popup__help-descr\">\n                \u0415\u0441\u043B\u0438 \u043D\u0430 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0435 \u0434\u043E\u0441\u0442\u0443\u043F\u043D\u0430 \u044D\u0442\u0430 \u043A\u043D\u043E\u043F\u043A\u0430, \u0442\u043E, \u043D\u0430\u0436\u0430\u0432 \u043D\u0435 \u043D\u0435\u0435, \u043C\u043E\u0436\u043D\u043E \u043E\u0437\u043D\u0430\u043A\u043E\u043C\u0438\u0442\u044C\u0441\u044F \u0441 \u043E\u043F\u0438\u0441\u0430\u043D\u0438\u0435\u043C \u043B\u043E\u043A\u0430\u0446\u0438\u0438\n              </p>\n            </div>\n          </div>";
}
;// CONCATENATED MODULE: ./js/aframe/content-listener.js
function content_listener_typeof(obj) { "@babel/helpers - typeof"; return content_listener_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, content_listener_typeof(obj); }

function content_listener_regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ content_listener_regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == content_listener_typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function content_listener_asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function content_listener_asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { content_listener_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { content_listener_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }





























function content_listener_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function content_listener_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function content_listener_createClass(Constructor, protoProps, staticProps) { if (protoProps) content_listener_defineProperties(Constructor.prototype, protoProps); if (staticProps) content_listener_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function content_listener_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) content_listener_setPrototypeOf(subClass, superClass); }

function content_listener_setPrototypeOf(o, p) { content_listener_setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return content_listener_setPrototypeOf(o, p); }

function content_listener_createSuper(Derived) { var hasNativeReflectConstruct = content_listener_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = content_listener_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = content_listener_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return content_listener_possibleConstructorReturn(this, result); }; }

function content_listener_possibleConstructorReturn(self, call) { if (call && (content_listener_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return content_listener_assertThisInitialized(self); }

function content_listener_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function content_listener_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function content_listener_getPrototypeOf(o) { content_listener_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return content_listener_getPrototypeOf(o); }




var contentListener = /*#__PURE__*/function (_VrComponent) {
  content_listener_inherits(contentListener, _VrComponent);

  var _super = content_listener_createSuper(contentListener);

  function contentListener() {
    var _this;

    content_listener_classCallCheck(this, contentListener);

    _this = _super.call(this);
    _this.modals = null;
    _this.timerId = null;
    _this.items = [{
      'classes': '',
      'attr': {
        'data-scene': 'content-info',
        'data-scene-modal': ''
      },
      'html': "<div class=\"scene__modal-title\" data-js-modal=\"title\"></div>\n                  <div class=\"scene__modal-wrap\">\n                    <div class=\"scene__modal-scroll\">\n                      <div class=\"scene__modal-body\" data-js-modal=\"info\"></div>\n                    </div>\n                 </div>"
    }, {
      'classes': 'scene__modal-content_help',
      'attr': {
        'data-scene': 'content-help',
        'data-scene-modal': ''
      },
      'html': "<div class=\"scene__modal-title\">\u041F\u043E\u043C\u043E\u0449\u044C</div>\n                  <div class=\"scene__modal-wrap\">".concat(helpSheme(), "</div>")
    }, {
      'classes': '',
      'attr': {
        'data-scene': 'content-return',
        'data-scene-modal': ''
      },
      'html': "<div class=\"popup__title popup__title_offset\">\n                  \u0412\u044B \u0443\u0432\u0435\u0440\u0435\u043D\u044B, \u0447\u0442\u043E \u0445\u043E\u0442\u0438\u0442\u0435 \u0432\u0435\u0440\u043D\u0443\u0442\u044C\u0441\u044F \u043D\u0430 \u043F\u043E\u0432\u0435\u0440\u0445\u043D\u043E\u0441\u0442\u044C?\n                </div>\n                <div class=\"popup__footer\">\n                  <button type=\"button\" class=\"button button_blue popup__button clickable\" data-vr=\"return\" target=\"return\">\n                    \u0414\u0430, \u0432\u0435\u0440\u043D\u0443\u0442\u044C\u0441\u044F \u043D\u0430 \u043F\u043E\u0432\u0435\u0440\u0445\u043D\u043E\u0441\u0442\u044C\n                  </button>\n                  <button type=\"button\" class=\"button button_white popup__button\" data-scene=\"close-info\" target=\"close-modal\">\n                    \u041D\u0435\u0442, \u043E\u0441\u0442\u0430\u0442\u044C\u0441\u044F \u0432 \u0448\u0430\u0445\u0442\u0435\n                  </button>\n                </div>"
    }];
    return _this;
  }

  content_listener_createClass(contentListener, [{
    key: "created",
    value: function created() {
      var _this2 = this;

      return new Promise(function (resolve) {
        var contentEntity = document.createElement('a-entity');
        contentEntity.setAttribute('htmlembed', '');
        contentEntity.setAttribute('look-at', '#camera');
        contentEntity.setAttribute('position', {
          x: 0.0001,
          y: 1.5,
          z: -1.5
        });
        contentEntity.setAttribute('data-raycastable', '');
        contentEntity.setAttribute('content-listener', '');
        contentEntity.setAttribute('id', 'vr-content');
        contentEntity.setAttribute('vr-mode-watcher', '');
        contentEntity.setAttribute('visible', '');
        contentEntity.setAttribute('class', 'clickable');

        var modals = _this2.createModals();

        contentEntity.append(modals);
        resolve(contentEntity);
      });
    }
  }, {
    key: "init",
    value: function init() {
      var self = this;
      AFRAME.registerComponent('content-listener', {
        schema: {
          dataEl: {
            type: 'selector'
          }
        },
        init: function init() {
          var _this3 = this;

          vrCompomentVisible(this.el);
          this.el.sceneEl.addEventListener('change-mode', /*#__PURE__*/function () {
            var _ref = content_listener_asyncToGenerator( /*#__PURE__*/content_listener_regeneratorRuntime().mark(function _callee(e) {
              return content_listener_regeneratorRuntime().wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      if (e.detail.enterVr && !self.modals) {
                        self.enterVR(_this3.el);
                      }

                    case 1:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee);
            }));

            return function (_x) {
              return _ref.apply(this, arguments);
            };
          }());
        },
        update: function update() {
          vrCompomentVisible(this.el);
        }
      });
    }
  }, {
    key: "enterVR",
    value: function enterVR(parentEl) {
      this.modals = parentEl.querySelectorAll('[data-scene-modal]');
    }
  }, {
    key: "closeModals",
    value: function closeModals() {
      this.modals.forEach(function (modal) {
        return modal.classList.remove('scene__modal-content_show');
      });
    }
  }, {
    key: "getShemeModal",
    value: function getShemeModal() {
      return Array.from(this.modals).find(function (modal) {
        return modal.dataset.scene === 'content-map';
      });
    }
  }, {
    key: "createModals",
    value: function createModals() {
      var modal = document.createElement('div');
      modal.classList.add('scene__modal');
      this.items.forEach(function (item) {
        var content = document.createElement('div');
        content.classList.add('scene__modal-content');

        if (item.classes) {
          content.classList.add(item.classes);
        }

        Object.keys(item.attr).forEach(function (key) {
          content.setAttribute(key, item.attr[key]);
        });
        content.insertAdjacentHTML('afterbegin', "<button type=\"button\" class=\"button scene__modal-close clickable\" data-scene=\"close-info\" target=\"close-modal\">\n                                                  <svg class=\"scene__modal-cross\" viewBox=\"0 0 10 10\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n                                                    <path d=\"M1.15984 1L8.83984 9\" stroke=\"currentColor\" stroke-width=\"1.5\"/>\n                                                    <path d=\"M9 1.15997L1 8.83996\" stroke=\"currentColor\" stroke-width=\"1.5\"/>\n                                                  </svg>\n                                                </button>");
        content.insertAdjacentHTML('beforeend', item.html);
        modal.append(content);
      });
      return modal;
    }
  }, {
    key: "update",
    value: function update() {}
  }, {
    key: "raycasterHandle",
    value: function raycasterHandle(parentEl) {
      var _this4 = this;

      var closeEl = parentEl.querySelectorAll('[data-scene="close-info"]');
      closeEl.forEach(function (close) {
        close.addEventListener('mouseenter', function () {
          _this4.timerId = setTimeout(function () {
            _this4.closeModals();
          }, 1000);
        });
        close.addEventListener('mouseleave', function () {
          clearTimeout(_this4.timerId);
        });
      });
      parentEl.addEventListener('raycaster-intersected-cleared', function () {
        _this4.closeModals();
      });
      var returnEl = parentEl.querySelector('[data-vr="return"]');
      returnEl.addEventListener('mouseenter', function () {
        _this4.timerId = setTimeout(function () {
          _this4.returnInSheme(parentEl.sceneEl);
        }, 1500);
      });
      returnEl.addEventListener('mouseleave', function () {
        clearTimeout(_this4.timerId);
      });
    }
  }, {
    key: "returnInSheme",
    value: function returnInSheme(scene) {
      var toggleVr = document.querySelector('[data-js-action="toggle-vr"]'),
          controls = document.querySelector('[data-js="controls"]');
      this.closeModals();

      if (AFRAME.utils.device.isIOS()) {
        scene.exitVR();
      } else {
        toggleVr.click();
      }

      controls.classList.remove('controls_show');
      scene.classList.remove('scene_show');
      window.location.href = 'https://gremgok.ru/'; // controls.classList.remove('controls_show');
      // scene.classList.remove('scene_show');
      // setTimeout(() => {
      //   pages.anchors = pages.anchors.filter(anchors => anchors !== "#loading");
      //   pages.pages = pages.pages.filter(page => page !== loading);
      //   pages.prev();
      //   window.location.reload();
      // }, 1500)
    }
  }]);

  return contentListener;
}(VrComponent);
;// CONCATENATED MODULE: ./js/aframe/open-help.js
function open_help_typeof(obj) { "@babel/helpers - typeof"; return open_help_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, open_help_typeof(obj); }

function open_help_regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ open_help_regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == open_help_typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function open_help_asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function open_help_asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { open_help_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { open_help_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }


























function open_help_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function open_help_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function open_help_createClass(Constructor, protoProps, staticProps) { if (protoProps) open_help_defineProperties(Constructor.prototype, protoProps); if (staticProps) open_help_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function open_help_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) open_help_setPrototypeOf(subClass, superClass); }

function open_help_setPrototypeOf(o, p) { open_help_setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return open_help_setPrototypeOf(o, p); }

function open_help_createSuper(Derived) { var hasNativeReflectConstruct = open_help_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = open_help_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = open_help_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return open_help_possibleConstructorReturn(this, result); }; }

function open_help_possibleConstructorReturn(self, call) { if (call && (open_help_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return open_help_assertThisInitialized(self); }

function open_help_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function open_help_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function open_help_getPrototypeOf(o) { open_help_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return open_help_getPrototypeOf(o); }



var openHelp = /*#__PURE__*/function (_VrComponent) {
  open_help_inherits(openHelp, _VrComponent);

  var _super = open_help_createSuper(openHelp);

  function openHelp() {
    var _this;

    open_help_classCallCheck(this, openHelp);

    _this = _super.call(this);
    _this.helpWidget = null;
    _this.textListener = null;
    _this.hoverData = null;
    _this.controllerData = null;
    return _this;
  }

  open_help_createClass(openHelp, [{
    key: "created",
    value: function created() {
      return new Promise(function (resolve) {
        var helpEntity = document.createElement('a-entity');
        helpEntity.setAttribute('htmlembed', '');
        helpEntity.setAttribute('look-at', '#camera');
        helpEntity.setAttribute('position', {
          x: -2,
          y: 1.6,
          z: -1.6
        });
        helpEntity.setAttribute('data-raycastable', '');
        helpEntity.setAttribute('raycaster-target', '');
        helpEntity.setAttribute('open-help', '');
        helpEntity.setAttribute('visible', 'false');
        helpEntity.setAttribute('vr-mode-watcher', '');
        helpEntity.setAttribute('class', 'clickable');
        helpEntity.setAttribute('target', 'open-help');
        helpEntity.setAttribute('animation__fusing', {
          'property': 'scale',
          'startEvents': 'fusing',
          'easing': 'easeInCubic',
          'dur': 2000,
          'from': '1 1 1',
          'to': '0.5 0.5 0.5'
        }, true);
        helpEntity.setAttribute('animation__mouseleave', {
          'property': 'scale',
          'startEvents': 'mouseleave',
          'easing': 'easeInCubic',
          'dur': 500,
          'to': '1 1 1'
        }, true);
        var helpEntityBtn = document.createElement('button');
        helpEntityBtn.setAttribute('type', 'button');
        helpEntityBtn.classList.add('controls__button', 'controls__button_help', 'button');
        helpEntityBtn.insertAdjacentHTML('afterbegin', "<svg class=\"controls__button-help controls__button-ico\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n                                                        <path d=\"M17.9062 6.58359C17.5781 5.86641 17.1117 5.22188 16.5164 4.67109C15.307 3.54844 13.7016 2.92969 12 2.92969C10.2984 2.92969 8.69297 3.54844 7.48359 4.66875C6.88828 5.22187 6.42188 5.86406 6.09375 6.58359C5.75156 7.33359 5.57812 8.12812 5.57812 8.94844V9.58125C5.57812 9.72656 5.69531 9.84375 5.84062 9.84375H7.10625C7.25156 9.84375 7.36875 9.72656 7.36875 9.58125V8.94844C7.36875 6.61641 9.44531 4.72031 12 4.72031C14.5547 4.72031 16.6312 6.61641 16.6312 8.94844C16.6312 9.90469 16.2914 10.8047 15.6469 11.5547C15.0094 12.2977 14.1094 12.8297 13.1133 13.0547C12.5437 13.1836 12.0305 13.5047 11.6672 13.9641C11.3052 14.4219 11.1079 14.9882 11.107 15.5719V16.3078C11.107 16.4531 11.2242 16.5703 11.3695 16.5703H12.6352C12.7805 16.5703 12.8977 16.4531 12.8977 16.3078V15.5719C12.8977 15.2039 13.1531 14.8805 13.507 14.8008C14.8758 14.4914 16.118 13.7531 17.0062 12.7219C17.4539 12.1992 17.8031 11.618 18.0445 10.9875C18.2953 10.3336 18.4219 9.64687 18.4219 8.94844C18.4219 8.12812 18.2484 7.33125 17.9062 6.58359ZM12 18.4453C11.2758 18.4453 10.6875 19.0336 10.6875 19.7578C10.6875 20.482 11.2758 21.0703 12 21.0703C12.7242 21.0703 13.3125 20.482 13.3125 19.7578C13.3125 19.0336 12.7242 18.4453 12 18.4453Z\" fill=\"white\"/>\n                                                      </svg>");
        helpEntity.append(helpEntityBtn);
        resolve(helpEntity);
      });
    }
  }, {
    key: "init",
    value: function init() {
      var self = this;
      AFRAME.registerComponent("open-help", {
        schema: {
          'target': {
            type: 'selector'
          }
        },
        init: function init() {
          var _this2 = this;

          vrCompomentVisible(this.el);
          this.el.sceneEl.addEventListener('change-mode', /*#__PURE__*/function () {
            var _ref = open_help_asyncToGenerator( /*#__PURE__*/open_help_regeneratorRuntime().mark(function _callee(e) {
              return open_help_regeneratorRuntime().wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      if (e.detail.enterVr && !self.helpWidget) {
                        self.enterVR(_this2.el, _this2.el.sceneEl);
                      }

                    case 1:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee);
            }));

            return function (_x) {
              return _ref.apply(this, arguments);
            };
          }());
        },
        tick: function tick() {}
      });
    }
  }, {
    key: "enterVR",
    value: function enterVR(parentEl, sceneEl) {
      this.textListener = sceneEl.querySelector('[content-listener]');

      if (!this.textListener) {
        return;
      }

      this.helpWidget = this.textListener.querySelector('[data-scene="content-help"]');
    }
  }, {
    key: "raycasterHandle",
    value: function raycasterHandle(parentEl) {
      var _this3 = this;

      parentEl.addEventListener('raycaster-intersected', function () {
        _this3.timerId = setTimeout(function () {
          _this3.textListener.setAttribute('position', {
            x: -2,
            y: 1.6,
            z: -1.5
          });

          _this3.helpWidget.classList.add('scene__modal-content_show');
        }, 1500);
      });
      parentEl.addEventListener('raycaster-intersected-cleared', function () {
        clearTimeout(_this3.timerId);
      });
    }
  }, {
    key: "update",
    value: function update() {}
  }]);

  return openHelp;
}(VrComponent);
;// CONCATENATED MODULE: ./js/aframe/open-map.js
function open_map_typeof(obj) { "@babel/helpers - typeof"; return open_map_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, open_map_typeof(obj); }

function open_map_regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ open_map_regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == open_map_typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function open_map_asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function open_map_asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { open_map_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { open_map_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }


























function open_map_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function open_map_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function open_map_createClass(Constructor, protoProps, staticProps) { if (protoProps) open_map_defineProperties(Constructor.prototype, protoProps); if (staticProps) open_map_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function open_map_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) open_map_setPrototypeOf(subClass, superClass); }

function open_map_setPrototypeOf(o, p) { open_map_setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return open_map_setPrototypeOf(o, p); }

function open_map_createSuper(Derived) { var hasNativeReflectConstruct = open_map_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = open_map_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = open_map_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return open_map_possibleConstructorReturn(this, result); }; }

function open_map_possibleConstructorReturn(self, call) { if (call && (open_map_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return open_map_assertThisInitialized(self); }

function open_map_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function open_map_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function open_map_getPrototypeOf(o) { open_map_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return open_map_getPrototypeOf(o); }



var openMap = /*#__PURE__*/function (_VrComponent) {
  open_map_inherits(openMap, _VrComponent);

  var _super = open_map_createSuper(openMap);

  function openMap() {
    var _this;

    open_map_classCallCheck(this, openMap);

    _this = _super.call(this);
    _this.shemeMap = null;
    _this.hoverData = null;
    _this.controllerData = null;
    return _this;
  }

  open_map_createClass(openMap, [{
    key: "created",
    value: function created() {
      return new Promise(function (resolve) {
        var mapEntity = document.createElement('a-entity');
        mapEntity.setAttribute('htmlembed', '');
        mapEntity.setAttribute('look-at', '#camera');
        mapEntity.setAttribute('position', {
          x: 2,
          y: 1.6,
          z: -2
        });
        mapEntity.setAttribute('raycaster-target', '');
        mapEntity.setAttribute('data-raycastable', '');
        mapEntity.setAttribute('open-map', '');
        mapEntity.setAttribute('visible', 'false');
        mapEntity.setAttribute('vr-mode-watcher', '');
        mapEntity.setAttribute('class', 'clickable');
        mapEntity.setAttribute('target', 'show-map');
        mapEntity.setAttribute('animation__fusing', {
          'property': 'scale',
          'startEvents': 'fusing',
          'easing': 'easeInCubic',
          'dur': 2000,
          'from': '1 1 1',
          'to': '0.5 0.5 0.5'
        }, true);
        mapEntity.setAttribute('animation__mouseleave', {
          'property': 'scale',
          'startEvents': 'mouseleave',
          'easing': 'easeInCubic',
          'dur': 500,
          'to': '1 1 1'
        }, true);
        var mapEntityBtn = document.createElement('button');
        mapEntityBtn.setAttribute('type', 'button');
        mapEntityBtn.classList.add('vr__toggle');
        mapEntityBtn.insertAdjacentHTML('afterbegin', "<div class=\"vr__toggle-circle\">\n                                                      <svg class=\"vr__toggle-ico\" width=\"25\" height=\"24\" viewBox=\"0 0 25 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n                                                        <path d=\"M1 8V22V22.5M1 8V22.5M1 8L8.5 4.5M1 22.5L8.5 19.5M8.5 4.5V7.5M8.5 4.5L13 7M8.5 9V11.5M8.5 13.5V16M8.5 17.5V19.5M8.5 19.5L15.5 23M15.5 23V21V20.5M15.5 23L23 20.5V12M15.5 19V16.5M15.5 14.5V12M19 1.5L14.5 10H24L19 1.5Z\" stroke=\"white\"/>\n                                                      </svg>\n                                                    </div>\n                                                    <div class=\"vr__toggle-text\" data-vr=\"toggle-text\">\n                                                      \u041F\u043E\u043A\u0430\u0437\u0430\u0442\u044C \u043A\u0430\u0440\u0442\u0443\n                                                    </div>");
        mapEntity.append(mapEntityBtn);
        resolve(mapEntity);
      });
    }
  }, {
    key: "init",
    value: function init() {
      var self = this;
      AFRAME.registerComponent('open-map', {
        schema: {
          'target': {
            type: 'selector'
          }
        },
        init: function init() {
          var _this2 = this;

          this.el.addEventListener('loaded', function () {
            vrCompomentVisible(_this2.el);

            _this2.el.sceneEl.addEventListener('change-mode', /*#__PURE__*/function () {
              var _ref = open_map_asyncToGenerator( /*#__PURE__*/open_map_regeneratorRuntime().mark(function _callee(e) {
                return open_map_regeneratorRuntime().wrap(function _callee$(_context) {
                  while (1) {
                    switch (_context.prev = _context.next) {
                      case 0:
                        if (e.detail.enterVr && !self.shemeMap) {
                          self.enterVR(_this2.el, _this2.el.sceneEl);
                        }

                      case 1:
                      case "end":
                        return _context.stop();
                    }
                  }
                }, _callee);
              }));

              return function (_x) {
                return _ref.apply(this, arguments);
              };
            }());
          });
        }
      });
    }
  }, {
    key: "enterVR",
    value: function enterVR(parentEl, sceneEl) {
      this.shemeMap = sceneEl.querySelector('[data-vr="vr-map"]');

      if (!this.shemeMap) {
        return;
      }
    }
  }, {
    key: "raycasterHandle",
    value: function raycasterHandle(parentEl) {
      var _this3 = this;

      var toggleText = parentEl.querySelector('[data-vr="toggle-text"]');
      parentEl.addEventListener('raycaster-intersected', function () {
        _this3.timerId = setTimeout(function () {
          parentEl.classList.toggle('active');

          if (parentEl.classList.contains('active')) {
            _this3.shemeMap.classList.add('vr__map_show');

            toggleText.textContent = 'Скрыть карту';
          } else {
            _this3.shemeMap.classList.remove('vr__map_show');

            toggleText.textContent = 'Показать карту';
          }
        }, 1500);
      });
      parentEl.addEventListener('raycaster-intersected-cleared', function () {
        clearTimeout(_this3.timerId);
      });
    }
  }, {
    key: "update",
    value: function update() {}
  }]);

  return openMap;
}(VrComponent);
;// CONCATENATED MODULE: ./js/aframe/vr-video.js






function vr_video_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function vr_video_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function vr_video_createClass(Constructor, protoProps, staticProps) { if (protoProps) vr_video_defineProperties(Constructor.prototype, protoProps); if (staticProps) vr_video_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var vrVideo = /*#__PURE__*/function () {
  function vrVideo() {
    vr_video_classCallCheck(this, vrVideo);

    this.isMobile = window.innerWidth < 1280;
    this.controlsEl = document.querySelector('[data-js="controls"]');
  }

  vr_video_createClass(vrVideo, [{
    key: "created",
    value: function created(videoSrc) {
      return new Promise(function (resolve) {
        var videoEl = document.createElement('video');
        videoEl.setAttribute('id', 'video');
        videoEl.setAttribute('preload', 'auto');
        videoEl.setAttribute('src', videoSrc);
        videoEl.setAttribute('muted', 'muted');
        videoEl.setAttribute('loop', 'true');
        videoEl.setAttribute('crossOrigin', 'anonymous');
        var videosphere = document.createElement('a-videosphere');
        videosphere.setAttribute('rotation', '0 -90 0');
        videosphere.setAttribute('src', '#video');
        videosphere.setAttribute('visible', 'false');
        videosphere.setAttribute('video', 'video');
        videosphere.setAttribute('static-body', '');
        setTimeout(function () {
          resolve({
            'videoEl': videoEl,
            'videosphere': videosphere
          });
        }, 500);
      });
    }
  }, {
    key: "init",
    value: function init() {
      AFRAME.registerComponent('video', {
        init: function init() {
          this.onPlay = this.onPlay.bind(this);
        },
        update: function update() {},
        remove: function remove() {},
        pause: function pause() {},
        play: function play() {
          var _this = this;

          this.el.addEventListener("loaded", function () {
            _this.onPlay();
          });
        },
        onPlay: function onPlay() {
          var videoEl = this.el.getAttribute('material').src;

          if (!videoEl) {
            return;
          }

          this.el.object3D.visible = true;
          videoEl.play();
        }
      });
    }
  }, {
    key: "update",
    value: function update() {}
  }]);

  return vrVideo;
}();
;// CONCATENATED MODULE: ./js/aframe/vr-map.js
function vr_map_typeof(obj) { "@babel/helpers - typeof"; return vr_map_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, vr_map_typeof(obj); }

function vr_map_regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ vr_map_regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == vr_map_typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function vr_map_asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function vr_map_asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { vr_map_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { vr_map_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }



























function vr_map_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function vr_map_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function vr_map_createClass(Constructor, protoProps, staticProps) { if (protoProps) vr_map_defineProperties(Constructor.prototype, protoProps); if (staticProps) vr_map_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function vr_map_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) vr_map_setPrototypeOf(subClass, superClass); }

function vr_map_setPrototypeOf(o, p) { vr_map_setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return vr_map_setPrototypeOf(o, p); }

function vr_map_createSuper(Derived) { var hasNativeReflectConstruct = vr_map_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = vr_map_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = vr_map_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return vr_map_possibleConstructorReturn(this, result); }; }

function vr_map_possibleConstructorReturn(self, call) { if (call && (vr_map_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return vr_map_assertThisInitialized(self); }

function vr_map_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function vr_map_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function vr_map_getPrototypeOf(o) { vr_map_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return vr_map_getPrototypeOf(o); }




var vrMap = /*#__PURE__*/function (_VrComponent) {
  vr_map_inherits(vrMap, _VrComponent);

  var _super = vr_map_createSuper(vrMap);

  function vrMap() {
    var _this;

    vr_map_classCallCheck(this, vrMap);

    _this = _super.call(this);
    _this.toggleVrBtn = document.querySelector('[data-js-action="toggle-vr"]');
    _this.controls = document.querySelector('[data-js="controls"]');
    _this.points = false;
    return _this;
  }

  vr_map_createClass(vrMap, [{
    key: "created",
    value: function created() {
      return new Promise(function (resolve) {
        var _vrMap = document.createElement('a-entity');

        _vrMap.setAttribute('htmlembed', '');

        _vrMap.setAttribute('look-at', '#camera');

        _vrMap.setAttribute('position', {
          x: 2,
          y: 1,
          z: 1
        });

        _vrMap.setAttribute('data-raycastable', '');

        _vrMap.setAttribute('raycaster-target', '');

        _vrMap.setAttribute('vr-map', '');

        _vrMap.setAttribute('id', 'vr-map');

        _vrMap.setAttribute('vr-mode-watcher', '');

        _vrMap.setAttribute('visible', '');

        _vrMap.setAttribute('class', 'clickable');

        _vrMap.setAttribute('target', 'change-level');

        var vrMapEl = document.createElement('div');
        vrMapEl.classList.add('vr__map');
        vrMapEl.setAttribute('data-vr', 'vr-map');
        vrMapEl.insertAdjacentHTML('afterbegin', mapSheme());

        _vrMap.append(vrMapEl);

        resolve(_vrMap);
      });
    }
  }, {
    key: "init",
    value: function init() {
      var self = this;
      AFRAME.registerComponent('vr-map', {
        init: function init() {
          var _this2 = this;

          vrCompomentVisible(this.el);
          this.el.sceneEl.addEventListener('change-mode', /*#__PURE__*/function () {
            var _ref = vr_map_asyncToGenerator( /*#__PURE__*/vr_map_regeneratorRuntime().mark(function _callee(e) {
              return vr_map_regeneratorRuntime().wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      if (e.detail.enterVr && !self.points) {
                        self.enterVR(_this2.el, _this2.el.sceneEl);
                      }

                    case 1:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee);
            }));

            return function (_x) {
              return _ref.apply(this, arguments);
            };
          }());
        },
        update: function update() {}
      });
    }
  }, {
    key: "enterVR",
    value: function () {
      var _enterVR = vr_map_asyncToGenerator( /*#__PURE__*/vr_map_regeneratorRuntime().mark(function _callee2(parentEl, sceneEl) {
        var currentIndex;
        return vr_map_regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return awaitPoints(parentEl);

              case 2:
                this.points = _context2.sent;
                currentIndex = sceneEl.getAttribute('data-index');
                this.points.forEach(function (point) {
                  if (point.dataset.index === currentIndex) {
                    point.classList.add('current');
                  }
                });

              case 5:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function enterVR(_x2, _x3) {
        return _enterVR.apply(this, arguments);
      }

      return enterVR;
    }()
  }, {
    key: "handlePoint",
    value: function () {
      var _handlePoint = vr_map_asyncToGenerator( /*#__PURE__*/vr_map_regeneratorRuntime().mark(function _callee4(target, currentIndex, el, points) {
        var _this3 = this;

        var index, name, data, videoEl;
        return vr_map_regeneratorRuntime().wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                index = target.dataset.index, name = target.dataset.name;

                if (!(currentIndex == index)) {
                  _context4.next = 3;
                  break;
                }

                return _context4.abrupt("return");

              case 3:
                _context4.prev = 3;
                this.toggleVrBtn.click();
                el.sceneEl.classList.remove('scene_show');
                this.controls.classList.remove('controls_show');
                _context4.next = 9;
                return getDataFromName(name);

              case 9:
                data = _context4.sent;
                videoEl = el.sceneEl.querySelector('video');
                setData(data).then( /*#__PURE__*/vr_map_asyncToGenerator( /*#__PURE__*/vr_map_regeneratorRuntime().mark(function _callee3() {
                  return vr_map_regeneratorRuntime().wrap(function _callee3$(_context3) {
                    while (1) {
                      switch (_context3.prev = _context3.next) {
                        case 0:
                          console.log(data);
                          videoEl.setAttribute('src', data.video);
                          el.sceneEl.setAttribute('data-index', index);
                          points.forEach(function (point) {
                            point.classList.remove('current');

                            if (point.dataset.index === index) {
                              point.classList.add('current');
                            }
                          });
                          resetSceneComponents(el).then(function () {
                            videoEl.play();

                            _this3.toggleVrBtn.click();

                            videoEl.addEventListener('canplay', function () {
                              setTimeout(function () {
                                _this3.updateOpenMap(el.sceneEl).then(function () {
                                  el.sceneEl.classList.add('scene_show');
                                });
                              }, 2000);
                            });
                          });

                        case 5:
                        case "end":
                          return _context3.stop();
                      }
                    }
                  }, _callee3);
                })));
                _context4.next = 17;
                break;

              case 14:
                _context4.prev = 14;
                _context4.t0 = _context4["catch"](3);
                throw new Error(_context4.t0);

              case 17:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this, [[3, 14]]);
      }));

      function handlePoint(_x4, _x5, _x6, _x7) {
        return _handlePoint.apply(this, arguments);
      }

      return handlePoint;
    }()
  }, {
    key: "updateOpenMap",
    value: function () {
      var _updateOpenMap = vr_map_asyncToGenerator( /*#__PURE__*/vr_map_regeneratorRuntime().mark(function _callee5(scene) {
        return vr_map_regeneratorRuntime().wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                return _context5.abrupt("return", new Promise(function (resolve) {
                  awaitPoints(scene, 1, '[open-map]').then(function (elems) {
                    Array.from(elems).forEach(function (el) {
                      var button = el.querySelector('button'),
                          buttonText = el.querySelector('[data-vr="toggle-text"]');
                      button.classList.remove('focushack', 'hoverhack');
                      buttonText.classList.remove('focushack', 'hoverhack');
                      buttonText.textContent = 'Показать карту';
                      el.classList.remove('focushack', 'active', 'hoverhack');
                      el.flushToDOM();
                    });
                    var shemeMap = scene.querySelector('[data-vr="vr-map"]');
                    shemeMap.classList.remove('vr__map_show');
                    updateComponentsChild(scene, 'true').then(function () {
                      resolve();
                    });
                  });
                }));

              case 1:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5);
      }));

      function updateOpenMap(_x8) {
        return _updateOpenMap.apply(this, arguments);
      }

      return updateOpenMap;
    }()
  }, {
    key: "handleReturn",
    value: function handleReturn(scene) {
      var textListener = scene.querySelector('[content-listener]');

      if (!textListener) {
        return;
      }

      var liftWidget = textListener.querySelector('[data-scene="content-return"]');
      this.updateOpenMap(scene).then(function () {
        textListener.setAttribute('position', {
          x: 2,
          y: 1,
          z: 1
        });
        liftWidget.classList.add('scene__modal-content_show');
      });
    }
  }, {
    key: "raycasterHandle",
    value: function raycasterHandle() {
      var _this4 = this;

      this.points.forEach(function (point) {
        point.addEventListener('mouseenter', function (e) {
          _this4.timerId = setTimeout(function () {
            _this4.handlePoint(e.target, currentIndex, parentEl, _this4.points);
          }, 1500);
        });
        point.addEventListener('mouseleave', function () {
          clearTimeout(_this4.timerId);
        });
      });
      var returnBtn = parentEl.querySelector('[data-vr="return"]');
      returnBtn.addEventListener('mouseenter', function () {
        _this4.timerId = setTimeout(function () {
          return _this4.handleReturn(parentEl.sceneEl);
        }, 1500);
      });
      returnBtn.addEventListener('mouseleave', function () {
        clearTimeout(_this4.timerId);
      });
    }
  }, {
    key: "update",
    value: function update() {}
  }]);

  return vrMap;
}(VrComponent);
// EXTERNAL MODULE: ../node_modules/jquery/dist/jquery.js
var jquery = __webpack_require__(5638);
var jquery_default = /*#__PURE__*/__webpack_require__.n(jquery);
;// CONCATENATED MODULE: ./js/modules/PageableModule.js


function PageableModule_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function PageableModule_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function PageableModule_createClass(Constructor, protoProps, staticProps) { if (protoProps) PageableModule_defineProperties(Constructor.prototype, protoProps); if (staticProps) PageableModule_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }


window.$ = window.jQuery = (jquery_default());

__webpack_require__(2289);

var PageableModule = /*#__PURE__*/(/* unused pure expression or super */ null && (function () {
  function PageableModule(el) {
    PageableModule_classCallCheck(this, PageableModule);

    this.el = el;
    this.pageable = null;
    this.create();
  }

  PageableModule_createClass(PageableModule, [{
    key: "create",
    value: function create() {
      var _this = this;

      $(this.el).pagepiling({
        menu: null,
        direction: 'vertical',
        verticalCentered: true,
        sectionsColor: [],
        anchors: ['intro', 'info', 'select', 'loading'],
        scrollingSpeed: 700,
        easing: 'linear',
        loopBottom: false,
        loopTop: false,
        css3: true,
        navigation: false,
        normalScrollElements: null,
        normalScrollElementTouchThreshold: 5,
        touchSensitivity: 5,
        keyboardScrolling: true,
        sectionSelector: '.pagepiling',
        animateAnchor: false,
        //events
        onLeave: function onLeave(index, nextIndex, direction) {},
        afterLoad: function afterLoad(anchorLink, index) {},
        afterRender: function afterRender() {
          _this.pageable = $.fn.pagepiling;
        }
      });
    }
  }, {
    key: "init",
    value: function init(cb) {
      cb();
    }
  }, {
    key: "pages",
    get: function get() {
      return this.pageable;
    }
  }]);

  return PageableModule;
}()));
;// CONCATENATED MODULE: ./js/index.js
function js_typeof(obj) { "@babel/helpers - typeof"; return js_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, js_typeof(obj); }

function js_regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ js_regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == js_typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function js_asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function js_asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { js_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { js_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
























__webpack_require__(5920);

__webpack_require__(9219);

__webpack_require__(6245);

__webpack_require__(8314);

__webpack_require__(8492);

__webpack_require__(6869);

__webpack_require__(639);

__webpack_require__(4000); //equire('aframe-draw-component');
//require('aframe-physics-extras');
//require('aframe-svg-extruder');

















var iosInnerHeight = __webpack_require__(5701);

document.addEventListener("DOMContentLoaded", function () {
  var readyScripts = function readyScripts() {
    return new Promise(function (resolve) {
      var modal = new Modal('vr-popup');
      var loading = document.querySelector('#loading'),
          controls = document.querySelector('[data-js="controls"]'),
          centerControl = controls.querySelector('[data-js="controls-center"]'),
          isMobile = window.innerWidth < 1280,
          schemeMaps = document.querySelectorAll('[data-js="scheme-map"]'),
          shemePoints = getCurrentGroups(schemeMaps, isMobile),
          placeholder = document.getElementById('placeholder'),
          backInMap = document.querySelectorAll('[data-js="back-map"]'),
          RELOAD_KEY = 'isReload',
          isReload = localStorage.getItem(RELOAD_KEY);
      new ToggleMap();
      toggleMenu();
      observeMapImage();
      var components = [];
      pageableHandle();

      function pageableHandle() {
        schemeMaps.forEach(function (scheme) {
          scheme.addEventListener("click", function (e) {
            selectLevel(e);
          });
        });
      }

      function toggleMenu() {
        var trigger = document.querySelector('[data-js-action="menu-toggle"]');
        var menu = document.querySelector('[data-js-action="menu-nav"]');
        if (!trigger || !menu) return;
        trigger.addEventListener('click', function (e) {
          trigger.classList.toggle('nav-btn--pressed');
          menu.classList.remove('nav--active');

          if (trigger.classList.contains('nav-btn--pressed')) {
            menu.classList.add('nav--active');
          }
        });
        document.addEventListener('click', function (e) {
          var target = e.target;

          if (menu.classList.contains('nav--active') && !target.closest('[data-js-action="menu-nav"]') && !target.closest('[data-js-action="menu-toggle"]')) {
            trigger.click();
          }
        });
        document.addEventListener('keydown', function (e) {
          if (e.key === 'Escape' && menu.classList.contains('nav--active')) {
            var isNotCombinedKey = !(e.ctrlKey || e.altKey || e.shiftKey);

            if (isNotCombinedKey) {
              trigger.click();
            }
          }
        });
      }

      function selectLevel(e) {
        var target = e.target;
        var sceneEl = document.querySelector('a-scene');

        if (target && target.dataset.js === "scheme-point") {
          var name = target.dataset.name,
              selectedIndex = target.dataset.index;
          modal.closeModal();
          setTimeout( /*#__PURE__*/js_asyncToGenerator( /*#__PURE__*/js_regeneratorRuntime().mark(function _callee() {
            var data, vrscene, videoEl, videosphereEl;
            return js_regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    if (!sceneEl) {
                      showLoading(loading);
                    } else {
                      sceneEl.classList.remove('scene_show');
                      controls.classList.remove('controls_show');
                    }

                    _context.prev = 1;
                    _context.next = 4;
                    return getDataFromName(name);

                  case 4:
                    data = _context.sent;

                    if (!sceneEl) {
                      // if first load
                      vrscene = new vrScene(controls, data.index); // create scene

                      vrscene.created().then(function (sceneRes) {
                        var scene = sceneRes.scene,
                            assets = sceneRes.assets;
                        document.body.insertBefore(scene, document.body.firstElementChild);
                        vrscene.init(); // init scene

                        onDomIsRendered('a-scene').then(function () {
                          initComponents(scene).then(function () {
                            var vrvideo = new vrVideo(); // create video

                            vrvideo.created(data.video).then(function (videoRes) {
                              var videoEl = videoRes.videoEl,
                                  videosphere = videoRes.videosphere;
                              assets.append(videoEl);
                              scene.append(videosphere);
                              vrvideo.init(); // init video

                              setRotation(videosphere, data.rotation);
                              setActivePoint(shemePoints, data.index).then(function () {
                                startFirstLoadVideo(videoEl).then(function () {
                                  initModals(scene).then(function () {
                                    setData(data).then(function () {
                                      loading.classList.remove('page_overlay');
                                      modal.openModal('help');
                                      scene.classList.add('scene_show');
                                      controls.classList.add('controls_show');
                                    });
                                  });
                                });
                              });
                            });
                          });
                        });
                      });
                    } else {
                      if (+selectedIndex !== +sceneEl.dataset.index) {
                        loading.classList.add('page_overlay');
                        videoEl = sceneEl.querySelector('video'), videosphereEl = sceneEl.querySelector('a-videosphere');
                        videoEl.setAttribute('src', data.video);
                        videoEl.load();
                        setRotation(videosphereEl, data.rotation);
                        components.forEach(function (component) {
                          return component.update();
                        });
                        setActivePoint(shemePoints, data.index).then(function () {
                          setData(data).then(function () {
                            playVideo(videoEl, sceneEl, controls, selectedIndex);
                            loading.classList.remove('page_overlay');
                          });
                        });
                      }
                    }

                    _context.next = 12;
                    break;

                  case 8:
                    _context.prev = 8;
                    _context.t0 = _context["catch"](1);
                    console.log(_context.t0);
                    throw new Error(_context.t0.message);

                  case 12:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, null, [[1, 8]]);
          })), 500);
        }
      }

      function startFirstLoadVideo(videoEl) {
        return new Promise(function (resolve) {
          if (isAndroidDevice()) {
            videoEl.play();
          }

          var firedVideo = false;
          videoEl.addEventListener('canplay', function () {
            if (!firedVideo) {
              firedVideo = true;
              removeHash();
              resolve();
            }
          });
        });
      }

      function playVideo(videoEl, scene, controls, index) {
        videoEl.play();
        videoEl.addEventListener('canplay', function () {
          scene.classList.add('scene_show');
          scene.setAttribute('data-index', index);
          controls.classList.add('controls_show');
          removeHash();
        });
      }

      function initComponents(scene) {
        var names = [openInfo, openHelp, openMap, openLift, vrCamera];
        return new Promise(function (resolve) {
          names.forEach(function (name) {
            var entityClass = new name();
            components.push(entityClass);
            entityClass.created().then(function (elem) {
              scene.append(elem);
              entityClass.init();
            });
          });
          resolve();
        });
      }

      function initModals(scene) {
        var names = [vrMap, contentListener];
        return new Promise(function (resolve) {
          names.forEach(function (name) {
            var entityClass = new name();
            components.push(entityClass);
            entityClass.created().then(function (elem) {
              scene.append(elem);
              entityClass.init();
            });
          });
          resolve();
        });
      }

      function setRotation(videosphere, rotation) {
        videosphere.setAttribute('rotation', rotation);
      }

      function leaveScene(trigger, controls, pageable, modal) {
        if (!trigger) return;
        trigger.addEventListener("click", function () {
          localStorage.setItem(RELOAD_KEY, 1);
          window.location.reload();
        });
      }

      document.addEventListener("mousedown", function (e) {
        var target = e.target;

        if (target && isCanvas(target)) {
          centerControl.classList.add("controls__group_hidden");
        }
      });
      document.addEventListener("mouseup", function (e) {
        var target = e.target;

        if (target && isCanvas(target)) {
          centerControl.classList.remove("controls__group_hidden");
        }
      }); //const pageData = pageable.pages.data;

      var deviceHeight = iosInnerHeight();

      var appHeight = function appHeight() {
        var ppTableCell = document.querySelectorAll('[data-menuanchor]');
        ppTableCell.forEach(function (cell) {
          cell.style.height = "".concat(deviceHeight, "px");
        });
      };

      window.addEventListener("orientationchange", function () {
        if (!isScene()) {
          if (window.orientation == 0 || window.orientation == 180) {
            placeholder.classList.add('preloader_hide');
            appHeight(); // WHEN IN PORTRAIT MODE
          } else {
            placeholder.classList.remove('preloader_hide'); // WHEN IN LANDSCAPE MODE
          }
        }
      }, false);

      if (isReload) {
        pageable.pages.moveTo('select');
        localStorage.removeItem(RELOAD_KEY);
        setTimeout(resolve, 1500);
      } else {
        resolve();
      }
    });
  };

  readyScripts().then(function () {
    var preloader = document.getElementById('preloader');
    if (!preloader) return;
    preloader.classList.add("preloader_hide");
  });
});

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.nmd = (module) => {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			179: 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunk"] = self["webpackChunk"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, [130], () => (__webpack_require__(1302)))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;