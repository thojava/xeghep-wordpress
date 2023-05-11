/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 384:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

"use strict";

// NAMESPACE OBJECT: ./src/blocks/components/icon/icons.js
var icons_namespaceObject = {};
__webpack_require__.r(icons_namespaceObject);
__webpack_require__.d(icons_namespaceObject, {
  "alignBottom": () => (alignBottom),
  "alignCenter": () => (alignCenter),
  "alignLeft": () => (alignLeft),
  "alignMiddle": () => (alignMiddle),
  "alignRight": () => (alignRight),
  "alignSpaceAround": () => (alignSpaceAround),
  "alignSpaceBetween": () => (alignSpaceBetween),
  "alignStretch": () => (alignStretch),
  "alignTop": () => (alignTop),
  "arrowDown": () => (arrowDown),
  "arrowLeft": () => (arrowLeft),
  "arrowRight": () => (arrowRight),
  "arrowUp": () => (arrowUp),
  "bar": () => (bar),
  "barsO": () => (barsO),
  "behance": () => (behance),
  "blogger": () => (blogger),
  "button": () => (icons_button),
  "buttons": () => (buttons),
  "carousel": () => (carousel),
  "cartO": () => (cartO),
  "check": () => (check),
  "chevronDown": () => (chevronDown),
  "chevronDownCircle": () => (chevronDownCircle),
  "chevronLeft": () => (chevronLeft),
  "chevronRight": () => (chevronRight),
  "chevronUp": () => (chevronUp),
  "chevronUpCircle": () => (chevronUpCircle),
  "close": () => (icons_close),
  "codeopen": () => (codeopen),
  "cog": () => (cog),
  "color": () => (color),
  "column": () => (column),
  "copy": () => (copy),
  "counter": () => (counter),
  "delicious": () => (delicious),
  "desktop": () => (desktop),
  "devianart": () => (devianart),
  "divider": () => (divider),
  "dribble": () => (dribble),
  "envelopeO": () => (envelopeO),
  "eyeO": () => (eyeO),
  "facebook": () => (facebook),
  "faq": () => (faq),
  "filled": () => (filled),
  "form": () => (icons_form),
  "gradient": () => (gradient),
  "heading": () => (heading),
  "icon": () => (icon),
  "iconList": () => (iconList),
  "image": () => (icons_image),
  "infoBox": () => (infoBox),
  "instagramO": () => (instagramO),
  "link": () => (icons_link),
  "linkO": () => (linkO),
  "linkedin": () => (linkedin),
  "lock": () => (lock),
  "map": () => (map),
  "mapMarkerO": () => (mapMarkerO),
  "medium": () => (medium),
  "minus": () => (minus),
  "mobile": () => (mobile),
  "outline": () => (outline),
  "paperPlaneO": () => (paperPlaneO),
  "paragraph": () => (paragraph),
  "paste": () => (paste),
  "pencil": () => (pencil),
  "phoneO": () => (phoneO),
  "pinterest": () => (pinterest),
  "plain": () => (plain),
  "play": () => (play),
  "plus": () => (plus),
  "questionMark": () => (questionMark),
  "quora": () => (quora),
  "quoteLeft": () => (quoteLeft),
  "quoteRight": () => (quoteRight),
  "rating": () => (rating),
  "recorderO": () => (recorderO),
  "reddit": () => (reddit),
  "removeO": () => (removeO),
  "reply": () => (reply),
  "reset": () => (icons_reset),
  "rss": () => (rss),
  "searchMinus": () => (searchMinus),
  "searchO": () => (searchO),
  "section": () => (section),
  "sendO": () => (sendO),
  "socialIcons": () => (socialIcons),
  "spacing": () => (spacing),
  "star": () => (star),
  "tablet": () => (tablet),
  "teams": () => (teams),
  "testimonial": () => (testimonial),
  "textAlignCenter": () => (textAlignCenter),
  "textAlignJustify": () => (textAlignJustify),
  "textAlignLeft": () => (textAlignLeft),
  "textAlignRight": () => (textAlignRight),
  "thumbsUpO": () => (thumbsUpO),
  "timeO": () => (timeO),
  "toggleOff": () => (toggleOff),
  "toggleOn": () => (toggleOn),
  "trash": () => (trash),
  "tumblr": () => (tumblr),
  "twitch": () => (twitch),
  "twitter": () => (twitter),
  "unLink": () => (unLink),
  "upload": () => (upload),
  "userO": () => (userO),
  "video": () => (video),
  "vimeo": () => (vimeo),
  "wordpress": () => (wordpress),
  "yelp": () => (yelp),
  "youtubePlay": () => (youtubePlay)
});

;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/typeof.js
function typeof_typeof(obj) {
  "@babel/helpers - typeof";

  return typeof_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  }, typeof_typeof(obj);
}
;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/toPrimitive.js

function _toPrimitive(input, hint) {
  if (typeof_typeof(input) !== "object" || input === null) return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== undefined) {
    var res = prim.call(input, hint || "default");
    if (typeof_typeof(res) !== "object") return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
}
;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/toPropertyKey.js


function _toPropertyKey(arg) {
  var key = _toPrimitive(arg, "string");
  return typeof_typeof(key) === "symbol" ? key : String(key);
}
;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/defineProperty.js

function defineProperty_defineProperty(obj, key, value) {
  key = _toPropertyKey(key);
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
;// CONCATENATED MODULE: external ["wp","blocks"]
const external_wp_blocks_namespaceObject = window["wp"]["blocks"];
;// CONCATENATED MODULE: external ["wp","element"]
const external_wp_element_namespaceObject = window["wp"]["element"];
;// CONCATENATED MODULE: ./src/blocks/components/element/index.js

/* harmony default export */ const components_element = (function (_ref) {
  var tagName = _ref.tagName,
    htmlAttrs = _ref.htmlAttrs,
    children = _ref.children;
  return (0,external_wp_element_namespaceObject.createElement)(tagName, htmlAttrs, children);
});
;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js
function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}
;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js
function _iterableToArrayLimit(arr, i) {
  var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"];
  if (null != _i) {
    var _s,
      _e,
      _x,
      _r,
      _arr = [],
      _n = !0,
      _d = !1;
    try {
      if (_x = (_i = _i.call(arr)).next, 0 === i) {
        if (Object(_i) !== _i) return;
        _n = !1;
      } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0);
    } catch (err) {
      _d = !0, _e = err;
    } finally {
      try {
        if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return;
      } finally {
        if (_d) throw _e;
      }
    }
    return _arr;
  }
}
;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
  return arr2;
}
;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js




function slicedToArray_slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}
// EXTERNAL MODULE: ./node_modules/classnames/index.js
var classnames = __webpack_require__(184);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
;// CONCATENATED MODULE: external ["wp","data"]
const external_wp_data_namespaceObject = window["wp"]["data"];
;// CONCATENATED MODULE: external ["wp","components"]
const external_wp_components_namespaceObject = window["wp"]["components"];
;// CONCATENATED MODULE: ./src/blocks/components/tab-panel/index.js


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { defineProperty_defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }





var inspectorTabState = new Map();
var TabPanel = function TabPanel(_ref) {
  var _tabs$length;
  var children = _ref.children,
    _ref$hasIcon = _ref.hasIcon,
    hasIcon = _ref$hasIcon === void 0 ? false : _ref$hasIcon,
    _ref$className = _ref.className,
    className = _ref$className === void 0 ? '' : _ref$className,
    label = _ref.label,
    _ref$root = _ref.root,
    root = _ref$root === void 0 ? false : _ref$root,
    _ref$block = _ref.block,
    _ref$block$name = _ref$block.name,
    name = _ref$block$name === void 0 ? '' : _ref$block$name,
    _ref$block$attributes = _ref$block.attributes.clientId,
    clientId = _ref$block$attributes === void 0 ? '' : _ref$block$attributes;
  var tabs = external_wp_element_namespaceObject.Children.toArray(children).filter(function (tab) {
    var _tab$props;
    return 'widgets' === window.pagenow || 'customize' === window.pagenow ? 'Layout' !== (tab === null || tab === void 0 ? void 0 : (_tab$props = tab.props) === null || _tab$props === void 0 ? void 0 : _tab$props.tabTitle) : true;
  });
  var id = name + '/' + clientId;
  var _useState = (0,external_wp_element_namespaceObject.useState)(function () {
      var _inspectorTabState$ge, _inspectorTabState$ge2, _tabs$0$props$tabTitl, _tabs$, _tabs$$props;
      return root ? (_inspectorTabState$ge = (_inspectorTabState$ge2 = inspectorTabState.get(id)) === null || _inspectorTabState$ge2 === void 0 ? void 0 : _inspectorTabState$ge2.tab) !== null && _inspectorTabState$ge !== void 0 ? _inspectorTabState$ge : 'Settings' : (_tabs$0$props$tabTitl = tabs === null || tabs === void 0 ? void 0 : (_tabs$ = tabs[0]) === null || _tabs$ === void 0 ? void 0 : (_tabs$$props = _tabs$.props) === null || _tabs$$props === void 0 ? void 0 : _tabs$$props.tabTitle) !== null && _tabs$0$props$tabTitl !== void 0 ? _tabs$0$props$tabTitl : '';
    }),
    _useState2 = slicedToArray_slicedToArray(_useState, 2),
    active = _useState2[0],
    setActive = _useState2[1];
  return /*#__PURE__*/React.createElement("div", {
    className: classnames_default()('blockart-tab-panel', {
      'has-icon': hasIcon
    }, className)
  }, /*#__PURE__*/React.createElement("div", {
    className: "blockart-tab-panel-head",
    "data-sticky": !!root
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: "blockart-tab-panel"
  }, label), /*#__PURE__*/React.createElement("div", {
    className: "blockart-tab-panel-menu",
    role: "group",
    "data-grid": (_tabs$length = tabs.length) !== null && _tabs$length !== void 0 ? _tabs$length : 0
  }, tabs.map(function (tab, index) {
    var _tab$props$tabTitle, _tab$props2, _tab$props3, _tab$props$tabTitle2, _tab$props6;
    return /*#__PURE__*/React.createElement(external_wp_components_namespaceObject.Button, {
      key: (_tab$props$tabTitle = tab === null || tab === void 0 ? void 0 : (_tab$props2 = tab.props) === null || _tab$props2 === void 0 ? void 0 : _tab$props2.tabTitle) !== null && _tab$props$tabTitle !== void 0 ? _tab$props$tabTitle : index,
      className: classnames_default()('blockart-tab-panel-menu-item', {
        'is-active': (tab === null || tab === void 0 ? void 0 : (_tab$props3 = tab.props) === null || _tab$props3 === void 0 ? void 0 : _tab$props3.tabTitle) === active
      }),
      onClick: function onClick() {
        var _tab$props5;
        if (root) {
          var _inspectorTabState$ge3, _tab$props4;
          var current = (_inspectorTabState$ge3 = inspectorTabState.get(id)) !== null && _inspectorTabState$ge3 !== void 0 ? _inspectorTabState$ge3 : {};
          inspectorTabState.set(id, _objectSpread(_objectSpread({}, current), {}, {
            tab: tab === null || tab === void 0 ? void 0 : (_tab$props4 = tab.props) === null || _tab$props4 === void 0 ? void 0 : _tab$props4.tabTitle
          }));
        }
        setActive(tab === null || tab === void 0 ? void 0 : (_tab$props5 = tab.props) === null || _tab$props5 === void 0 ? void 0 : _tab$props5.tabTitle);
      }
    }, /*#__PURE__*/React.createElement("span", {
      className: "blockart-tab-panel-menu-item-title"
    }, (_tab$props$tabTitle2 = tab === null || tab === void 0 ? void 0 : (_tab$props6 = tab.props) === null || _tab$props6 === void 0 ? void 0 : _tab$props6.tabTitle) !== null && _tab$props$tabTitle2 !== void 0 ? _tab$props$tabTitle2 : ''));
  }))), /*#__PURE__*/React.createElement("div", {
    className: "blockart-tab-panel-body"
  }, tabs.map(function (tab) {
    var _tab$props7, _tab$props8, _tab$props9;
    return /*#__PURE__*/React.createElement("div", {
      key: tab === null || tab === void 0 ? void 0 : (_tab$props7 = tab.props) === null || _tab$props7 === void 0 ? void 0 : _tab$props7.tabTitle,
      style: {
        display: (tab === null || tab === void 0 ? void 0 : (_tab$props8 = tab.props) === null || _tab$props8 === void 0 ? void 0 : _tab$props8.tabTitle) === active ? 'block' : 'none'
      },
      "data-inspector-tab": root ? tab === null || tab === void 0 ? void 0 : (_tab$props9 = tab.props) === null || _tab$props9 === void 0 ? void 0 : _tab$props9.tabTitle : null
    }, tab);
  })));
};
/* harmony default export */ const tab_panel = ((0,external_wp_data_namespaceObject.withSelect)(function (select) {
  return {
    block: select('core/block-editor').getSelectedBlock()
  };
})(function (props) {
  return props !== null && props !== void 0 && props.block ? /*#__PURE__*/React.createElement(TabPanel, props) : null;
}));
;// CONCATENATED MODULE: ./src/blocks/components/tab/index.js
/* harmony default export */ const tab = (function (_ref) {
  var children = _ref.children;
  return /*#__PURE__*/React.createElement(React.Fragment, null, Array.isArray(children) ? children.map(function (child) {
    return child;
  }) : children);
});
;// CONCATENATED MODULE: external ["wp","compose"]
const external_wp_compose_namespaceObject = window["wp"]["compose"];
;// CONCATENATED MODULE: ./src/blocks/hoc/with-client-id.js



/* harmony default export */ const with_client_id = ((0,external_wp_compose_namespaceObject.createHigherOrderComponent)(function (Component) {
  return function (props) {
    var attributes = props.attributes,
      setAttributes = props.setAttributes,
      clientId = props.clientId,
      name = props.name;
    (0,external_wp_element_namespaceObject.useEffect)(function () {
      var ID = clientId.substr(0, 8);
      var _name$split = name.split('/'),
        _name$split2 = slicedToArray_slicedToArray(_name$split, 2),
        _name$split2$ = _name$split2[1],
        blockName = _name$split2$ === void 0 ? 'blockart' : _name$split2$;
      if (!attributes.clientId) {
        setAttributes({
          clientId: ID
        });
      } else if (attributes.clientId !== ID) {
        if (document.querySelectorAll(".blockart-".concat(blockName, "-").concat(attributes.clientId)).length > 1) {
          setAttributes({
            clientId: ID
          });
        }
      }
    }, []);
    return /*#__PURE__*/React.createElement(Component, props);
  };
}, 'withClientId'));
;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
function extends_extends() {
  extends_extends = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return extends_extends.apply(this, arguments);
}
;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/iterableToArray.js
function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js




function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
;// CONCATENATED MODULE: external ["wp","keycodes"]
const external_wp_keycodes_namespaceObject = window["wp"]["keycodes"];
;// CONCATENATED MODULE: external ["wp","i18n"]
const external_wp_i18n_namespaceObject = window["wp"]["i18n"];
;// CONCATENATED MODULE: external ["wp","keyboardShortcuts"]
const external_wp_keyboardShortcuts_namespaceObject = window["wp"]["keyboardShortcuts"];
;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }
  return target;
}
;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }
  return target;
}
;// CONCATENATED MODULE: ./src/blocks/components/icon/icons.js

var arrowDown = /*#__PURE__*/React.createElement(external_wp_components_namespaceObject.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, /*#__PURE__*/React.createElement(external_wp_components_namespaceObject.Path, {
  d: "M17.9 15.2H13V2h-2v13.1H6.1L12 22l5.9-6.8z"
}));
var arrowLeft = /*#__PURE__*/React.createElement(external_wp_components_namespaceObject.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, /*#__PURE__*/React.createElement(external_wp_components_namespaceObject.Path, {
  d: "M2 12l6.9 6v-5H22v-2H8.9V6L2 12z"
}));
var arrowRight = /*#__PURE__*/React.createElement(external_wp_components_namespaceObject.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, /*#__PURE__*/React.createElement(external_wp_components_namespaceObject.Path, {
  d: "M21.8 12l-7-6v5H2v2h12.8v5l7-6z"
}));
var arrowUp = /*#__PURE__*/React.createElement(external_wp_components_namespaceObject.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, /*#__PURE__*/React.createElement(external_wp_components_namespaceObject.Path, {
  d: "M13 22V9h5l-6-7-6.1 7h5v12.9H13v.1z"
}));
var textAlignLeft = /*#__PURE__*/React.createElement(external_wp_components_namespaceObject.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, /*#__PURE__*/React.createElement(external_wp_components_namespaceObject.Path, {
  d: "M3,19.94H21V22H3Zm0-4.45,12.28,0v2L3,17.47ZM3,10.9l17.81,0v2.22L3,13ZM3,2,21,2v2H3ZM3,6.51l12.27,0,0,2L3,8.47Z"
}));
var textAlignRight = /*#__PURE__*/React.createElement(external_wp_components_namespaceObject.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, /*#__PURE__*/React.createElement(external_wp_components_namespaceObject.Path, {
  d: "M3,19.94H21V22H3Zm5.7-4.45,12.28,0v2l-12.28,0ZM3.13,10.9l17.81,0v2.22L3.13,13ZM3,2,21,2v2H3ZM8.71,6.51,21,6.56l0,2-12.26,0Z"
}));
var textAlignCenter = /*#__PURE__*/React.createElement(external_wp_components_namespaceObject.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, /*#__PURE__*/React.createElement(external_wp_components_namespaceObject.Path, {
  d: "M3,19.94H21V22H3Zm3-4.45,12,0v2l-12,0ZM3,10.9l17.81,0v2.22L3,13ZM3,2,21,2v2H3ZM6,6.51l12,0,0,2-12,0Z"
}));
var textAlignJustify = /*#__PURE__*/React.createElement(external_wp_components_namespaceObject.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, /*#__PURE__*/React.createElement(external_wp_components_namespaceObject.Path, {
  d: "M3,15.53H21V17.6H3ZM6,20l12,0v2L6,22ZM3,10.9l17.81,0v2.22L3,13ZM3,2,21,2v2H3ZM3,6.51l18,0,0,2-18,0Z"
}));
var alignTop = /*#__PURE__*/React.createElement(external_wp_components_namespaceObject.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, /*#__PURE__*/React.createElement(external_wp_components_namespaceObject.Path, {
  d: "M20 7.5H4v13h16Zm-18-3h20m0 1H2v-2h20Z"
}));
var alignMiddle = /*#__PURE__*/React.createElement(external_wp_components_namespaceObject.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, /*#__PURE__*/React.createElement(external_wp_components_namespaceObject.Path, {
  d: "M22 11h-4V2H6v9H2v2h4v9h12v-9h4v-2z"
}));
var alignBottom = /*#__PURE__*/React.createElement(external_wp_components_namespaceObject.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, /*#__PURE__*/React.createElement(external_wp_components_namespaceObject.Path, {
  d: "M20 16.5H4v-13h16Zm-18 3h20m0-1H2v2h20Z"
}));
var alignSpaceBetween = /*#__PURE__*/React.createElement(external_wp_components_namespaceObject.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, /*#__PURE__*/React.createElement(external_wp_components_namespaceObject.Path, {
  d: "M6 4v16h12V4ZM3 22V2m1 0v20H2V2Zm17 20V2m1 0v20h-2V2Z"
}));
var alignSpaceAround = /*#__PURE__*/React.createElement(external_wp_components_namespaceObject.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, /*#__PURE__*/React.createElement(external_wp_components_namespaceObject.Path, {
  d: "M4 4H5.5V20H4V4ZM7 10L17 10V14L7 14V10ZM20 4H18.5V20H20V4Z"
}));
var alignCenter = /*#__PURE__*/React.createElement(external_wp_components_namespaceObject.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, /*#__PURE__*/React.createElement(external_wp_components_namespaceObject.Rect, {
  x: "11",
  y: "2",
  width: "2",
  height: "20"
}), /*#__PURE__*/React.createElement(external_wp_components_namespaceObject.Rect, {
  x: "3",
  y: "6",
  width: "18",
  height: "12"
}));
var alignLeft = /*#__PURE__*/React.createElement(external_wp_components_namespaceObject.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, /*#__PURE__*/React.createElement(external_wp_components_namespaceObject.Rect, {
  x: "3",
  y: "2",
  width: "2",
  height: "20"
}), /*#__PURE__*/React.createElement(external_wp_components_namespaceObject.Rect, {
  x: "7",
  y: "6",
  width: "14",
  height: "12"
}));
var alignRight = /*#__PURE__*/React.createElement(external_wp_components_namespaceObject.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, /*#__PURE__*/React.createElement(external_wp_components_namespaceObject.Rect, {
  x: "19",
  y: "2",
  width: "2",
  height: "20"
}), /*#__PURE__*/React.createElement(external_wp_components_namespaceObject.Rect, {
  x: "3",
  y: "6",
  width: "14",
  height: "12"
}));
var alignStretch = /*#__PURE__*/React.createElement(external_wp_components_namespaceObject.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, /*#__PURE__*/React.createElement(external_wp_components_namespaceObject.Path, {
  d: "M5 9v6h14V9H5zm11-4.8H8v1.5h8V4.2zM8 19.8h8v-1.5H8v1.5z"
}));
var chevronDown = /*#__PURE__*/React.createElement(external_wp_components_namespaceObject.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, /*#__PURE__*/React.createElement(external_wp_components_namespaceObject.Path, {
  d: "M20.5 6.2L12 14.7 3.5 6.2 2 7.8l10 10 9.9-10-1.4-1.6z"
}));
var chevronLeft = /*#__PURE__*/React.createElement(external_wp_components_namespaceObject.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, /*#__PURE__*/React.createElement(external_wp_components_namespaceObject.Path, {
  d: "M16.3 2l-10 10.1 10 10 1.4-1.4-8.5-8.6 8.6-8.7L16.3 2z"
}));
var chevronRight = /*#__PURE__*/React.createElement(external_wp_components_namespaceObject.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, /*#__PURE__*/React.createElement(external_wp_components_namespaceObject.Path, {
  d: "M6.6 3.4l8.7 8.6-8.7 8.7L8 22.1 18 12 8 2 6.6 3.4z"
}));
var chevronUp = /*#__PURE__*/React.createElement(external_wp_components_namespaceObject.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, /*#__PURE__*/React.createElement(external_wp_components_namespaceObject.Path, {
  d: "M2 16.1l1.4 1.4L12 8.9l8.6 8.6 1.4-1.4-10-10-10 10z"
}));
var questionMark = /*#__PURE__*/React.createElement(external_wp_components_namespaceObject.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, /*#__PURE__*/React.createElement(external_wp_components_namespaceObject.Path, {
  d: "M12 4C9.243 4 7 6.243 7 9h2c0-1.654 1.346-3 3-3s3 1.346 3 3c0 1.069-.454 1.465-1.481 2.255-.382.294-.813.626-1.226 1.038C10.981 13.604 10.995 14.897 11 15v2h2v-2.009c0-.024.023-.601.707-1.284.32-.32.682-.598 1.031-.867C15.798 12.024 17 11.1 17 9c0-2.757-2.243-5-5-5zm-1 14h2v2h-2z"
}));
var removeO = /*#__PURE__*/React.createElement(external_wp_components_namespaceObject.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, /*#__PURE__*/React.createElement(external_wp_components_namespaceObject.Path, {
  d: "M5 20c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V8h2V6h-4V4c0-1.1-.9-2-2-2H9c-1.2 0-2 .9-2 2v2H3v2h2v12zM9 4h6v2H9V4zM7.9 8h9v12H7V8h.9z"
}), /*#__PURE__*/React.createElement(external_wp_components_namespaceObject.Path, {
  d: "M9.4 10.7h1.7v7H9.4v-7zm3.4 0h1.7v7h-1.7v-7z"
}));
var toggleOff = /*#__PURE__*/React.createElement(external_wp_components_namespaceObject.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, /*#__PURE__*/React.createElement(external_wp_components_namespaceObject.Path, {
  d: "M8 9c-1.6 0-3 1.4-3 3s1.4 3 3 3 3-1.4 3-3-1.4-3-3-3z"
}), /*#__PURE__*/React.createElement(external_wp_components_namespaceObject.Path, {
  d: "M16 6H8c-3.3 0-6 2.7-6 6s2.7 6 6 6h8c3.3 0 6-2.7 6-6s-2.7-6-6-6zm0 10H8c-2.2 0-4-1.8-4-4s1.8-4 4-4h8c2.2 0 4 1.8 4 4s-1.8 4-4 4zm4-4h1-1z"
}));
var toggleOn = /*#__PURE__*/React.createElement(external_wp_components_namespaceObject.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, /*#__PURE__*/React.createElement(external_wp_components_namespaceObject.Path, {
  d: "M16 6H8c-3.3 0-6 2.7-6 6s2.7 6 6 6h8c3.3 0 6-2.7 6-6s-2.7-6-6-6zm0 9c-1.6 0-3-1.4-3-3s1.4-3 3-3 3 1.4 3 3-1.4 3-3 3z"
}));
var unLink = /*#__PURE__*/React.createElement(external_wp_components_namespaceObject.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, /*#__PURE__*/React.createElement(external_wp_components_namespaceObject.Path, {
  d: "M12,22.14a4.67,4.67,0,0,0,3.27-1.33,4.57,4.57,0,0,0,1.21-3.27l-.06-3.69H14.59l.06,3.69A2.63,2.63,0,0,1,12,20.33a2.54,2.54,0,0,1-2.53-2.79l.06-3.69-2-.06-.06,3.69A4.6,4.6,0,0,0,12,22.14ZM16.54,6.46a4.48,4.48,0,1,0-9,0l.06,3.69H9.53L9.47,6.46a2.59,2.59,0,1,1,5.17,0l-.06,3.69h1.9C16.54,10.09,16.54,6.46,16.54,6.46Z"
}));
var chevronUpCircle = /*#__PURE__*/React.createElement(external_wp_components_namespaceObject.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, /*#__PURE__*/React.createElement(external_wp_components_namespaceObject.Path, {
  d: "M22 12c0 5.5-4.5 10-10 10S2 17.5 2 12 6.5 2 12 2s10 4.5 10 10zM2.5 12c0 5.3 4.3 9.5 9.5 9.5s9.5-4.3 9.5-9.5-4.2-9.5-9.5-9.5c-5.2 0-9.5 4.3-9.5 9.5z",
  fill: "#e2e8f0"
}), /*#__PURE__*/React.createElement(external_wp_components_namespaceObject.Path, {
  d: "M7.7 14.9l4.3-4.3 4.3 4.3.8-.8-5-5-5 5 .6.8z",
  fill: "#64748b"
}));
var chevronDownCircle = /*#__PURE__*/React.createElement(external_wp_components_namespaceObject.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, /*#__PURE__*/React.createElement(external_wp_components_namespaceObject.Path, {
  d: "M12,22A10,10,0,1,1,22,12,10,10,0,0,1,12,22ZM12,2.49A9.51,9.51,0,1,0,21.51,12,9.53,9.53,0,0,0,12,2.49Z",
  fill: "#e2e8f0"
}), /*#__PURE__*/React.createElement(external_wp_components_namespaceObject.Path, {
  d: "M16.28,9.1,12,13.35,7.78,9.1,7,9.9l5,5L17,9.9Z",
  fill: "#64748b"
}));
var cog = /*#__PURE__*/React.createElement(external_wp_components_namespaceObject.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, /*#__PURE__*/React.createElement(external_wp_components_namespaceObject.Path, {
  d: "M12 16c2.2 0 4-1.8 4-4s-1.8-4-4-4-4 1.8-4 4 1.8 4 4 4zm0-6c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2z"
}), /*#__PURE__*/React.createElement(external_wp_components_namespaceObject.Path, {
  d: "M2.8 16.1l1 1.7c.5.9 1.8 1.3 2.7.7l.5-.3c.6.5 1.2.8 1.9 1.1v.7c0 1.1.9 2 2 2h2c1.1 0 2-.9 2-2v-.6c.7-.3 1.3-.7 1.9-1.1l.5.3c.9.5 2.2.2 2.7-.7l1-1.7c.6-1 .2-2.2-.7-2.7l-.5-.3c.1-.7.1-1.5 0-2.2l.5-.3c1-.6 1.3-1.8.7-2.7l-1-1.7c-.5-.9-1.8-1.3-2.7-.7l-.5.3c-.6-.5-1.2-.8-1.9-1.1V4c0-1.1-.9-2-2-2h-2C9.9 2 9 2.9 9 4v.6c-.7.3-1.3.7-1.9 1.1l-.5-.3c-.9-.5-2.2-.2-2.8.7l-1 1.7c-.6 1-.2 2.2.7 2.7l.5.3c-.1.7-.1 1.5 0 2.2l-.5.3c-.9.7-1.2 1.9-.7 2.8zm3.4-2.7c-.1-.5-.2-.9-.2-1.4 0-.5.1-.9.2-1.4.1-.4-.1-.9-.5-1.1l-1.1-.6 1-1.7 1.1.7c.4.1.9.1 1.2-.2.7-.7 1.5-1.2 2.4-1.4.4-.1.7-.5.7-1V4h2v1.3c0 .4.3.8.7 1 .9.3 1.7.8 2.4 1.4.3.3.8.3 1.2.1l1.1-.7 1 1.7-1.1.6c-.4.2-.6.7-.5 1.1.1.5.2.9.2 1.4 0 .5-.1.9-.2 1.4-.1.4.1.9.5 1.1l1.1.6-1 1.7-1.1-.7c-.4-.2-.9-.2-1.2.1-.7.6-1.5 1.1-2.4 1.4-.4.1-.7.5-.7 1v1.3h-2v-1.3c0-.4-.3-.8-.7-1-.9-.3-1.7-.8-2.4-1.4-.3-.1-.8-.1-1.2.1l-1.1.7-1-1.7 1.1-.7c.4-.2.6-.7.5-1.1z"
}));
var color = /*#__PURE__*/React.createElement(external_wp_components_namespaceObject.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, /*#__PURE__*/React.createElement(external_wp_components_namespaceObject.Path, {
  d: "M19.9 14.7c-.1.1-2.2 2.2-2.2 3.8 0 1.6 1 2.6 2.2 2.7 1 0 2.2-1 2.2-2.7 0-1.6-2.1-3.7-2.2-3.8zM8.7 21.2c.4.4.9.6 1.5.6s1.1-.2 1.5-.6l7.5-7.5-.8-.8-8.3-8.3-2.3-2.5-1.5 1.4L8.8 6l-6.1 6.1c-.4.4-.6.9-.6 1.5s.2 1.1.6 1.5l6 6.1zm1.7-13.7l6 6-12.2.1 6.2-6.1z"
}));
var desktop = /*#__PURE__*/React.createElement(external_wp_components_namespaceObject.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, /*#__PURE__*/React.createElement(external_wp_components_namespaceObject.Path, {
  d: "M20 2.6H4c-1.1 0-2 .9-2 2v11c0 1.1.9 2 2 2h7v2H8v2h8v-2h-3v-2h7c1.1 0 2-.9 2-2v-11c0-1.1-.9-2-2-2zm-16 11v-9h16v9H4z"
}));
var gradient = /*#__PURE__*/React.createElement(external_wp_components_namespaceObject.SVG, {
  version: "1.1",
  id: "prefix__Layer_1",
  xmlns: "http://www.w3.org/2000/svg",
  x: "0",
  y: "0",
  viewBox: "0 0 24 24",
  xmlSpace: "preserve"
}, /*#__PURE__*/React.createElement(external_wp_components_namespaceObject.Path, {
  className: "prefix__st0",
  d: "M3 2v20M22 3H2M22 21H2M21 2v20",
  stroke: "#000",
  strokeWidth: "2",
  strokeMiterlimit: "10"
}), /*#__PURE__*/React.createElement(external_wp_components_namespaceObject.Path, {
  d: "M4 4v16h16C14 15 8 11 4 4z",
  fillRule: "evenodd",
  clipRule: "evenodd"
}), /*#__PURE__*/React.createElement(external_wp_components_namespaceObject.Path, {
  d: "M12.3 4H4c4 7 10 11 16 16V4h-7.7",
  fillRule: "evenodd",
  clipRule: "evenodd",
  fill: "#fff"
}));
var icons_image = /*#__PURE__*/React.createElement(external_wp_components_namespaceObject.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, /*#__PURE__*/React.createElement(external_wp_components_namespaceObject.Path, {
  d: "M19.9 2.2H4.3c-1.2 0-2 .8-2 2v15.6c0 1.2.7 2.1 2 2.1h15.6c1.2 0 2-.8 2-2V4.3c-.1-1.3-.8-2.1-2-2.1zM4.3 19.8V4.2h15.6v15.6H4.3z"
}), /*#__PURE__*/React.createElement(external_wp_components_namespaceObject.Path, {
  d: "M10.1 14l-1-1-3 4h12l-5-7-3 4z"
}));
var icons_link = /*#__PURE__*/React.createElement(external_wp_components_namespaceObject.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, /*#__PURE__*/React.createElement(external_wp_components_namespaceObject.Path, {
  d: "M3.6 20.3c1 1 2.4 1.6 3.8 1.6s2.7-.7 3.7-1.7l3-3.1-1.4-1.4-3 3.1c-1.3 1.3-3.3 1.3-4.6 0s-1.3-3.3 0-4.6l3.1-3-1.4-1.5-3.1 3c-2.1 2.2-2.2 5.5-.1 7.6zm16.7-9.2c2.1-2.1 2.2-5.4.1-7.5s-5.4-2-7.5.1l-3 3.1 1.4 1.4 3-3.1c1.3-1.3 3.3-1.3 4.6 0 1.3 1.3 1.3 3.3 0 4.6l-3.1 3 1.4 1.4c.1 0 3.1-3 3.1-3z"
}), /*#__PURE__*/React.createElement(external_wp_components_namespaceObject.Path, {
  d: "M8.7 16.6l-1.4-1.4 8.5-8.5 1.4 1.4-8.5 8.5z"
}));
var lock = /*#__PURE__*/React.createElement(external_wp_components_namespaceObject.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, /*#__PURE__*/React.createElement(external_wp_components_namespaceObject.Path, {
  d: "M12,22.14a4.67,4.67,0,0,0,3.27-1.33,4.57,4.57,0,0,0,1.21-3.27l-.06-3.69H14.59l.06,3.69A2.63,2.63,0,0,1,12,20.33a2.54,2.54,0,0,1-2.53-2.79l.06-3.69-2-.06-.06,3.69A4.6,4.6,0,0,0,12,22.14ZM16.54,6.46a4.48,4.48,0,1,0-9,0l.06,3.69H9.53L9.47,6.46a2.59,2.59,0,1,1,5.17,0l-.06,3.69h1.9C16.54,10.09,16.54,6.46,16.54,6.46Z"
}), /*#__PURE__*/React.createElement(external_wp_components_namespaceObject.Path, {
  d: "M13,17.15H11V6.85h2Z"
}));
var mobile = /*#__PURE__*/React.createElement(external_wp_components_namespaceObject.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, /*#__PURE__*/React.createElement(external_wp_components_namespaceObject.Path, {
  d: "M16.9 2h-10c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-10 18V4h10v16h-10z"
}), /*#__PURE__*/React.createElement("circle", {
  cx: "11.9",
  cy: "18",
  r: "1"
}));
var tablet = /*#__PURE__*/React.createElement(external_wp_components_namespaceObject.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, /*#__PURE__*/React.createElement(external_wp_components_namespaceObject.Path, {
  d: "M20 2H4c-1.1 0-2 .9-2 2v16c0 1.1.8 2 1.9 2h16c1.1 0 2-.9 2-2V4c.1-1.1-.8-2-1.9-2zM4 20V4h15.8v16H4z"
}), /*#__PURE__*/React.createElement("circle", {
  cx: "12",
  cy: "18",
  r: "1"
}));
var play = /*#__PURE__*/React.createElement(external_wp_components_namespaceObject.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, /*#__PURE__*/React.createElement(external_wp_components_namespaceObject.Path, {
  d: "M2.1 2v20L22 12 2.1 2z"
}));
var icons_reset = /*#__PURE__*/React.createElement(external_wp_components_namespaceObject.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, /*#__PURE__*/React.createElement(external_wp_components_namespaceObject.Path, {
  d: "M19.9 10.1c-.2-.5-.5-1-.8-1.5l-1.7 1.1c.5.7.8 1.5 1 2.3.2.9.2 1.8 0 2.6-.1.4-.2.8-.4 1.2-.2.4-.4.8-.6 1.1-.5.7-1.1 1.3-1.8 1.8s-1.5.8-2.3 1c-.9.2-1.8.2-2.6 0-1.3-.3-2.4-.9-3.3-1.8-.6-.4-1.1-1.1-1.4-1.9-.2-.4-.3-.8-.4-1.2-.3-1.3-.1-2.7.4-3.9.3-.8.8-1.5 1.4-2.1.6-.6 1.3-1.1 2-1.4.4-.2.8-.3 1.2-.4h.3v3l5-4-5-4v2.9c-.1.1-.4.1-.6.1-1.1.3-2.2.7-3.1 1.3C3.8 8.6 2.5 13 4.1 16.8c.4 1 1.1 1.9 1.8 2.7.8.8 1.7 1.4 2.7 1.8 1.6.7 3.4.8 5.1.5 2.8-.6 5.1-2.5 6.2-5.1.2-.5.4-1.1.5-1.6.2-1.1.2-2.3 0-3.4-.1-.5-.3-1.1-.5-1.6z"
}));
var star = /*#__PURE__*/React.createElement(external_wp_components_namespaceObject.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, /*#__PURE__*/React.createElement(external_wp_components_namespaceObject.Path, {
  d: "M21.9 9.2c-.1-.4-.5-.6-.9-.7L15.3 8l-2.5-5.5c-.2-.5-.8-.7-1.3-.5-.2.1-.4.3-.5.5L8.6 8.1l-5.7.4c-.5 0-.9.5-.9 1.1 0 .2.1.5.3.6l4.2 4.1L5 20.8c-.1.5.2 1.1.7 1.2.3 0 .6 0 .9-.2l5.4-3.6 5.4 3.6c.5.3 1.1.2 1.4-.3.2-.2.2-.5.2-.8l-1.8-6.4 4.5-4.1c.3-.2.4-.6.2-1z"
}));
var upload = /*#__PURE__*/React.createElement(external_wp_components_namespaceObject.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, /*#__PURE__*/React.createElement(external_wp_components_namespaceObject.Path, {
  d: "M11 15h2V9h3l-4-5-4 5h3v6z"
}), /*#__PURE__*/React.createElement(external_wp_components_namespaceObject.Path, {
  d: "M20 18H4v-7H2v7c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2v-7h-2v7z"
}));
var pencil = /*#__PURE__*/React.createElement(external_wp_components_namespaceObject.SVG, {
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
}, /*#__PURE__*/React.createElement(external_wp_components_namespaceObject.Path, {
  d: "M3 22H3.3L7.7 20.9L8.2 20.6L21.4 7.3C21.8 6.9 22 6.3 22 5.8C22 5.3 21.7 4.7 21.4 4.3L19.7 2.6C18.9 1.8 17.4 1.8 16.7 2.6L3.4 15.8C3.2 16 3.1 16.1 3.1 16.3L2.1 20.6C2 20.9 2.1 21.4 2.4 21.6C2.5 21.9 2.7 22 3 22ZM18.2 4.1L19.9 5.8L18.2 7.5L16.5 5.8L18.2 4.1ZM5.1 17.1L14.8 7.4L16.5 9.1L6.8 18.8L4.5 19.4L5.1 17.1Z"
}));
var trash = /*#__PURE__*/React.createElement(external_wp_components_namespaceObject.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, /*#__PURE__*/React.createElement(external_wp_components_namespaceObject.Path, {
  d: "M5 20c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V8h2V6h-4V4c0-1.1-.9-2-2-2H9c-1.2 0-2 .9-2 2v2H3v2h2v12zM9 4h6v2H9V4zM7.9 8h9v12H7V8h.9z"
}), /*#__PURE__*/React.createElement(external_wp_components_namespaceObject.Path, {
  d: "M9.4 10.7h1.7v7H9.4v-7zm3.4 0h1.7v7h-1.7v-7z"
}));
var filled = /*#__PURE__*/React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, /*#__PURE__*/React.createElement("path", {
  d: "M21.2 8H2.8a.8.8 0 0 0-.8.8v6.4a.8.8 0 0 0 .8.8h18.4a.8.8 0 0 0 .8-.8V8.8a.8.8 0 0 0-.8-.8Zm-1.7 4.5h-15a.5.5 0 0 1 0-1h15a.5.5 0 0 1 0 1Z"
}));
var outline = /*#__PURE__*/React.createElement(external_wp_components_namespaceObject.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, /*#__PURE__*/React.createElement(external_wp_components_namespaceObject.Path, {
  d: "M19.5 11.5h-15a.5.5 0 0 0 0 1h15a.5.5 0 0 0 0-1Z"
}), /*#__PURE__*/React.createElement(external_wp_components_namespaceObject.Rect, {
  width: "19",
  height: "8",
  x: "2.5",
  y: "8",
  fill: "none",
  stroke: "currentColor",
  strokeMiterlimit: "10",
  rx: ".8"
}));
var plain = /*#__PURE__*/React.createElement(external_wp_components_namespaceObject.SVG, {
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
}, /*#__PURE__*/React.createElement(external_wp_components_namespaceObject.Path, {
  d: "M21 13H3a1 1 0 0 1-1-1 1 1 0 0 1 1-1h18a1 1 0 0 1 1 1 1 1 0 0 1-1 1Z"
}));
var linkO = /*#__PURE__*/React.createElement(external_wp_components_namespaceObject.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, /*#__PURE__*/React.createElement(external_wp_components_namespaceObject.Path, {
  fill: "none",
  stroke: "currentColor",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeWidth: ".5",
  d: "M2.26 14.28h19.48"
}), /*#__PURE__*/React.createElement(external_wp_components_namespaceObject.Path, {
  d: "M21 12H3a1 1 0 0 1-1-1 1 1 0 0 1 1-1h18a1 1 0 0 1 1 1 1 1 0 0 1-1 1Z"
}));
var paste = /*#__PURE__*/React.createElement(external_wp_components_namespaceObject.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, /*#__PURE__*/React.createElement(external_wp_components_namespaceObject.Path, {
  d: "M20 11V5a2 2 0 00-2-2h-3a1 1 0 00-1-1H8a1 1 0 00-1 1H4a2 2 0 00-2 2v13a2 2 0 002 2h7a2 2 0 002 2h7a2 2 0 002-2v-7a2 2 0 00-2-2zm-9 2v5H4V5h3v2h8V5h3v6h-5a2 2 0 00-2 2zm2 7v-7h7v7z"
}));
var copy = /*#__PURE__*/React.createElement(external_wp_components_namespaceObject.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, /*#__PURE__*/React.createElement(external_wp_components_namespaceObject.Path, {
  d: "M20 2H10a2 2 0 00-2 2v4H4a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4h4a2 2 0 002-2V4a2 2 0 00-2-2zM4 20V10h10v10zm16-6h-4v-4a2 2 0 00-2-2h-4V4h10z"
}));
var iconList = /*#__PURE__*/React.createElement(external_wp_components_namespaceObject.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, /*#__PURE__*/React.createElement(external_wp_components_namespaceObject.Path, {
  d: "M7.1 9H21c.5 0 1-.5 1-1s-.5-1-1-1H7.1C6.5 7 6 7.4 6 8s.5 1 1.1 1zM21 11H7.1c-.6 0-1.1.4-1.1 1s.5 1 1.1 1H21c.6 0 1.1-.4 1.1-1s-.6-1-1.1-1zM21 15H7.1c-.6 0-1.1.5-1.1 1 0 .6.5 1 1.1 1H21c.6 0 1.1-.4 1.1-1-.1-.5-.6-1-1.1-1zM3.3 7.6L3.1 7H3l-.1.1-.2.5h-.6c-.1 0-.1.1-.1.1v.1l.4.4-.1.7c0 .1 0 .1.1.1h.1l.5-.4.5.4h.1v-.1l-.1-.7.5-.4v-.1s0-.1-.1-.1h-.6zM3.3 11.6l-.2-.5c0-.1-.1-.1-.1-.1l-.1.1-.2.5h-.6c-.1 0-.1.1-.1.2v.1l.4.4-.1.6c0 .1 0 .1.1.1h.1l.5-.4.5.4h.1v-.1l-.2-.6.6-.5v-.1s0-.1-.1-.1h-.6zM3.3 15.6l-.2-.5c0-.1-.1-.1-.1-.1l-.1.1-.2.5h-.6c-.1.1-.1.1-.1.2v.1l.4.4-.1.6c0 .1 0 .1.1.1h.1l.5-.4.5.4h.1v-.1l-.2-.6.6-.5v-.1s0-.1-.1-.1h-.6z"
}));
var socialIcons = /*#__PURE__*/React.createElement(external_wp_components_namespaceObject.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, /*#__PURE__*/React.createElement(external_wp_components_namespaceObject.Path, {
  d: "M6 15c.9 0 1.7-.3 2.4-.9l6.3 3.6c-.1.3-.1.6-.1.9 0 1.9 1.6 3.5 3.5 3.6 1.9 0 3.5-1.6 3.6-3.5 0-1.9-1.6-3.5-3.5-3.6-.9 0-1.8.3-2.4.9l-6.3-3.6c.1-.2.1-.5.1-.8l6.1-3.5c1.4 1.3 3.6 1.2 4.9-.2s1.2-3.6-.2-4.9-3.6-1.2-4.9.2c-.6.6-.9 1.5-.9 2.4 0 .3 0 .6.1.8L8.9 9.6c-1-1.6-3.2-2.1-4.8-1S2 11.8 3 13.4c.7 1 1.8 1.6 3 1.6zm12 2c.8 0 1.5.7 1.5 1.5S18.8 20 18 20s-1.5-.7-1.5-1.5.6-1.5 1.5-1.5zm0-13c.8 0 1.5.7 1.5 1.5S18.8 7 18 7s-1.5-.7-1.5-1.5S17.1 4 18 4zM6 10c.8 0 1.5.7 1.5 1.5S6.8 13 6 13s-1.5-.7-1.5-1.5S5.1 10 6 10z"
}));
var infoBox = /*#__PURE__*/React.createElement(external_wp_components_namespaceObject.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, /*#__PURE__*/React.createElement(external_wp_components_namespaceObject.Path, {
  d: "M22 4V3c0-.6-.4-1-1-1H3c-.6 0-1 .4-1 1v18c0 .6.4 1 1 1h18c.6 0 1-.4 1-1V4zM4 4h16v16H4V4z"
}), /*#__PURE__*/React.createElement("circle", {
  cx: "12",
  cy: "7.5",
  r: "2"
}), /*#__PURE__*/React.createElement(external_wp_components_namespaceObject.Path, {
  d: "M15 10.5H9c-.6 0-1 .4-1 1s.4 1 1 1h6c.6 0 1-.4 1-1s-.5-1-1-1zM11 18.5h2c.6 0 1-.4 1-1s-.4-1-1-1h-2c-.6 0-1 .4-1 1 0 .5.4 1 1 1zM6 14.5c0 .6.4 1 1 1h10c.6 0 1-.4 1-1s-.4-1-1-1H7c-.6 0-1 .5-1 1z"
}));
var icons_button = /*#__PURE__*/React.createElement(external_wp_components_namespaceObject.SVG, {
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
}, /*#__PURE__*/React.createElement(external_wp_components_namespaceObject.Path, {
  d: "m4 7a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2zm16 8h-16v-6h16z",
  fill: "#2563eb"
}), /*#__PURE__*/React.createElement(external_wp_components_namespaceObject.Path, {
  d: "M18,12h0a.94.94,0,0,0-1-1H7a.94.94,0,0,0-1,1H6a.94.94,0,0,0,1,1H17A.94.94,0,0,0,18,12Z",
  fill: "#2563eb"
}));
var carousel = /*#__PURE__*/React.createElement(external_wp_components_namespaceObject.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, /*#__PURE__*/React.createElement(external_wp_components_namespaceObject.Path, {
  d: "M4 19.3h2c0 1.1.9 2.1 2 2.1h8c1.1 0 2-.9 2-2.1h2c1.1 0 2-.9 2-2.1V6.7c0-1.1-.9-2.1-2-2.1h-2c0-1.1-.9-2.1-2-2.1H8c-1.1 0-2 .9-2 2.1H4c-1.1.1-2 1-2 2.1v10.5c0 1.2.9 2.1 2 2.1zM20 6.5v11h-2v-11h2zM7.9 4h8v16H8L7.9 4zM4 6.5h2v11H4v-11z"
}));
var counter = /*#__PURE__*/React.createElement(external_wp_components_namespaceObject.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, /*#__PURE__*/React.createElement(external_wp_components_namespaceObject.Path, {
  d: "M20.1 8.3l.9-.9c.4-.4.4-1 0-1.4-.4-.4-1-.4-1.4 0l-1 1c-1-.6-2.3-1-3.6-1-3.9 0-7 3.1-7 7.1 0 3.7 3.2 6.9 6.9 6.9 3.9 0 7.1-3.1 7.1-7 0-1.8-.7-3.4-1.9-4.7zM15 18c-2.8 0-5-2.2-5-5s2.2-5 5-5 5 2.2 5 5-2.2 5-5 5z"
}), /*#__PURE__*/React.createElement(external_wp_components_namespaceObject.Path, {
  d: "M15 10c.6 0 1 .4 1 1v2c0 .5-.4 1-1 1-.5 0-1-.4-1-1v-2c0-.6.4-1 1-1zm-1-7h2c.5 0 1 .4 1 1 0 .5-.4 1-1 1h-2c-.5 0-1-.4-1-1s.4-1 1-1zM4 8h2c.5 0 1 .4 1 1 0 .5-.4 1-1 1H4c-.5 0-1-.4-1-1s.4-1 1-1zm0 8h2c.5 0 1 .4 1 1 0 .5-.4 1-1 1H4c-.5 0-1-.4-1-1s.4-1 1-1zm-1-4h2c.5 0 1 .4 1 1 0 .5-.4 1-1 1H3c-.5 0-1-.4-1-1s.4-1 1-1z"
}));
var divider = /*#__PURE__*/React.createElement(external_wp_components_namespaceObject.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, /*#__PURE__*/React.createElement(external_wp_components_namespaceObject.Path, {
  d: "M2 10.9h20v2H2v-2z"
}));
var faq = /*#__PURE__*/React.createElement(external_wp_components_namespaceObject.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, /*#__PURE__*/React.createElement(external_wp_components_namespaceObject.Path, {
  d: "M12 6.4c-2 0-3.5 1.6-3.5 3.5h1.4c0-1.2 1-2.1 2.1-2.1s2.1 1 2.1 2.1c0 .8-.3 1-1 1.6-.3.2-.6.4-.9.7-.9.9-.9 1.8-.9 1.9v1.4h1.4v-1.4s0-.4.5-.9c.2-.2.5-.4.7-.6.7-.6 1.6-1.2 1.6-2.7 0-2-1.5-3.5-3.5-3.5zm-.7 9.9h1.4v1.4h-1.4v-1.4z"
}), /*#__PURE__*/React.createElement("circle", {
  cx: "12",
  cy: "12",
  r: "9",
  fill: "none",
  stroke: "#000",
  strokeWidth: "2",
  strokeMiterlimit: "10"
}));
var icons_form = /*#__PURE__*/React.createElement(external_wp_components_namespaceObject.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, /*#__PURE__*/React.createElement(external_wp_components_namespaceObject.Path, {
  d: "M4 2c-1.1 0-2 .9-2 2v2c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2H4zm16 4H4V4h16v2zM2 10.9v5c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2v-5c0-1.1-.9-2-2-2H4c-1.1.1-2 1-2 2zM20 16H4v-5h16v5zM3 22h5c.6 0 1-.4 1-1s-.4-1-1-1H3c-.6 0-1 .4-1 1s.4 1 1 1z"
}));
var map = /*#__PURE__*/React.createElement(external_wp_components_namespaceObject.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, /*#__PURE__*/React.createElement(external_wp_components_namespaceObject.Path, {
  d: "M12 14c2.206 0 4-1.794 4-4s-1.794-4-4-4-4 1.794-4 4 1.794 4 4 4zm0-6c1.103 0 2 .897 2 2s-.897 2-2 2-2-.897-2-2 .897-2 2-2z"
}), /*#__PURE__*/React.createElement(external_wp_components_namespaceObject.Path, {
  d: "M11.42 21.814a.998.998 0 0 0 1.16 0C12.884 21.599 20.029 16.44 20 10c0-4.411-3.589-8-8-8S4 5.589 4 9.995c-.029 6.445 7.116 11.604 7.42 11.819zM12 4c3.309 0 6 2.691 6 6.005.021 4.438-4.388 8.423-6 9.73-1.611-1.308-6.021-5.294-6-9.735 0-3.309 2.691-6 6-6z"
}));
var heading = /*#__PURE__*/React.createElement(external_wp_components_namespaceObject.SVG, {
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
}, /*#__PURE__*/React.createElement(external_wp_components_namespaceObject.Path, {
  d: "m17 19v-14a1 1 0 0 0-1-1 1 1 0 0 0-1 1v6h-6v-6a1 1 0 0 0-1-1 0.94 0.94 0 0 0-1 1v14a1 1 0 0 0 1 1 1 1 0 0 0 1-1v-6h6v6a1 1 0 0 0 1 1 0.94 0.94 0 0 0 1-1z",
  fill: "#2563eb"
}));
var icon = /*#__PURE__*/React.createElement(external_wp_components_namespaceObject.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, /*#__PURE__*/React.createElement(external_wp_components_namespaceObject.Path, {
  d: "m6.516 14.323-1.49 6.452a.998.998 0 0 0 1.529 1.057L12 18.202l5.445 3.63a1.001 1.001 0 0 0 1.517-1.106l-1.829-6.4 4.536-4.082a1 1 0 0 0-.59-1.74l-5.701-.454-2.467-5.461a.998.998 0 0 0-1.822 0L8.622 8.05l-5.701.453a1 1 0 0 0-.619 1.713l4.214 4.107zm2.853-4.326a.998.998 0 0 0 .832-.586L12 5.43l1.799 3.981a.998.998 0 0 0 .832.586l3.972.315-3.271 2.944c-.284.256-.397.65-.293 1.018l1.253 4.385-3.736-2.491a.995.995 0 0 0-1.109 0l-3.904 2.603 1.05-4.546a1 1 0 0 0-.276-.94l-3.038-2.962 4.09-.326z"
}));
var paragraph = /*#__PURE__*/React.createElement(external_wp_components_namespaceObject.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, /*#__PURE__*/React.createElement(external_wp_components_namespaceObject.Path, {
  d: "M9.15 17h2.3v4.1a.9.9 0 00.9.9.9.9 0 00.9-.9v-17h2.8v17a.9.9 0 00.9.9h.1a.9.9 0 00.9-.9v-17h3.1a.9.9 0 00.9-.9V3a.9.9 0 00-.9-.9h-12a7.2 7.2 0 00-7 7.5 7.2 7.2 0 007.1 7.4zm-.1-12.9h2.3V15h-2.2a5.79 5.79 0 01-5.1-5.5 5.69 5.69 0 015-5.45z",
  fill: "#2563eb"
}));
var rating = /*#__PURE__*/React.createElement(external_wp_components_namespaceObject.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, /*#__PURE__*/React.createElement(external_wp_components_namespaceObject.Path, {
  d: "M22 8.8c-.1-.2-.2-.3-.5-.4l-3-.2-1.3-2.9c-.1-.3-.5-.4-.7-.3-.1.1-.2.1-.3.3l-1.3 2.9-3 .2c-.3 0-.5.3-.5.6 0 .1.1.2.2.3l2.2 2.2-.8 3.4c-.1.3.1.6.4.6.1 0 .3 0 .4-.1l2.9-1.9 2.9 1.9c.2.2.6.1.7-.1.1-.1.1-.3.1-.4l-1-3.4 2.4-2.2c.2-.1.2-.3.2-.5z"
}), /*#__PURE__*/React.createElement(external_wp_components_namespaceObject.Path, {
  d: "M12.6 9.2c-.1-.2-.2-.3-.5-.4l-3-.2-1.3-2.9c-.1-.3-.4-.4-.7-.3-.1.1-.2.1-.3.3L5.5 8.6l-3 .2c-.3 0-.5.3-.5.6 0 .1.1.2.2.3l2.2 2.2-.8 3.4c-.1.3.1.6.4.7.1 0 .3 0 .4-.1L7.3 14l2.9 1.9c.2.2.6.1.7-.1.1-.1.1-.3.1-.4L10 12l2.4-2.2c.2-.2.3-.4.2-.6z"
}), /*#__PURE__*/React.createElement(external_wp_components_namespaceObject.Path, {
  d: "M18.7 10c-.1-.3-.3-.5-.6-.5l-4-.3-1.7-3.9c-.2-.3-.6-.5-1-.3-.2.1-.3.2-.4.4L9.3 9.2l-4 .3c-.4 0-.7.4-.6.8 0 .2.1.3.2.5l3 2.9-1.1 4.6c-.1.3.1.7.5.7.2 0 .4 0 .6-.1l3.8-2.6 3.8 2.6c.3.2.8.1 1-.2.1-.2.1-.4.1-.6l-1.3-4.5 3.2-2.9c.2-.1.3-.4.2-.7z",
  stroke: "#fff",
  strokeMiterlimit: "10"
}));
var section = /*#__PURE__*/React.createElement(external_wp_components_namespaceObject.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, /*#__PURE__*/React.createElement(external_wp_components_namespaceObject.Path, {
  d: "M4 2a2 2 0 00-2 2v3a2 2 0 002 2h16a2 2 0 002-2V4a2 2 0 00-2-2zm16 5H4V4h16zM2 12v8a2 2 0 002 2h16a2 2 0 002-2v-8a2 2 0 00-2-2H4a2 2 0 00-2 2zm18 0v8H4v-8zm-9 5H9v-2h2v-2h2v2h2v2h-2v2h-2z",
  fill: "#2563eb"
}));
var spacing = /*#__PURE__*/React.createElement(external_wp_components_namespaceObject.SVG, {
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
}, /*#__PURE__*/React.createElement(external_wp_components_namespaceObject.Path, {
  d: "M21,2H3A1,1,0,0,0,2,3H2A.94.94,0,0,0,3,4H21a.94.94,0,0,0,1-1h0A.94.94,0,0,0,21,2Z",
  fill: "#2563eb"
}), /*#__PURE__*/React.createElement(external_wp_components_namespaceObject.Path, {
  d: "M2,21H2a.94.94,0,0,0,1,1H21a.94.94,0,0,0,1-1h0a.94.94,0,0,0-1-1H3A.94.94,0,0,0,2,21Z",
  fill: "#2563eb"
}), /*#__PURE__*/React.createElement(external_wp_components_namespaceObject.Path, {
  d: "M9,15V9A.94.94,0,0,0,8,8H8A1,1,0,0,0,7,9v6a.94.94,0,0,0,1,1H8A1,1,0,0,0,9,15Z",
  fill: "#2563eb"
}), /*#__PURE__*/React.createElement(external_wp_components_namespaceObject.Path, {
  d: "M17,15V9a.94.94,0,0,0-1-1h0a.94.94,0,0,0-1,1v6a.94.94,0,0,0,1,1h0A1.08,1.08,0,0,0,17,15Z",
  fill: "#2563eb"
}), /*#__PURE__*/React.createElement(external_wp_components_namespaceObject.Path, {
  d: "M13,17V7a.94.94,0,0,0-1-1h0a.94.94,0,0,0-1,1V17a.94.94,0,0,0,1,1h0A.94.94,0,0,0,13,17Z",
  fill: "#2563eb"
}));
var teams = /*#__PURE__*/React.createElement(external_wp_components_namespaceObject.SVG, {
  xmlns: "http://www.w3.org/2000/svg"
}, /*#__PURE__*/React.createElement(external_wp_components_namespaceObject.Path, {
  d: "M12 10c1.151 0 2-.848 2-2s-.849-2-2-2c-1.15 0-2 .848-2 2s.85 2 2 2zm0 1c-2.209 0-4 1.612-4 3.6v.386h8V14.6c0-1.988-1.791-3.6-4-3.6z"
}), /*#__PURE__*/React.createElement(external_wp_components_namespaceObject.Path, {
  d: "M19 2H5c-1.103 0-2 .897-2 2v13c0 1.103.897 2 2 2h4l3 3 3-3h4c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2zm-5 15l-2 2-2-2H5V4h14l.002 13H14z"
}));
var testimonial = /*#__PURE__*/React.createElement(external_wp_components_namespaceObject.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, /*#__PURE__*/React.createElement(external_wp_components_namespaceObject.Path, {
  d: "M19.7 1.5H4.3c-1.2 0-2.2 1-2.2 2.2v12.9c0 1.2 1 2.2 2.2 2.2h3.9l3.8 3.7 3.8-3.7h3.9c1.2 0 2.2-1 2.2-2.2V3.7c0-1.2-1-2.2-2.2-2.2zm0 15.1h-4.9L12 19.4l-2.8-2.8H4.3V3.7h15.4v12.9z"
}), /*#__PURE__*/React.createElement("circle", {
  cx: "7.5",
  cy: "10.1",
  r: "1.5"
}), /*#__PURE__*/React.createElement("circle", {
  cx: "12",
  cy: "10.1",
  r: "1.5"
}), /*#__PURE__*/React.createElement("circle", {
  cx: "16.5",
  cy: "10.1",
  r: "1.5"
}));
var video = /*#__PURE__*/React.createElement(external_wp_components_namespaceObject.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, /*#__PURE__*/React.createElement(external_wp_components_namespaceObject.Path, {
  d: "M8.8 8.8v6.5l6.4-3.2-6.4-3.3z"
}), /*#__PURE__*/React.createElement(external_wp_components_namespaceObject.Path, {
  d: "M21 18.3H3c-.6 0-1-.4-1-1V6.7c0-.6.4-1 1-1h18c.6 0 1 .4 1 1v10.6c0 .6-.5 1-1 1z",
  fill: "none",
  stroke: "#000",
  strokeWidth: "2",
  strokeMiterlimit: "10"
}));
var column = /*#__PURE__*/React.createElement(external_wp_components_namespaceObject.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, /*#__PURE__*/React.createElement(external_wp_components_namespaceObject.Path, {
  d: "M2 6h20v12H2z",
  fill: "#2563eb"
}), /*#__PURE__*/React.createElement(external_wp_components_namespaceObject.Path, {
  fill: "#fff",
  d: "M4 8h2.91v8H4zM8.36 8h2.91v8H8.36zM12.73 8h2.91v8h-2.91zM17.09 8H20v8h-2.91z"
}));
var barsO = /*#__PURE__*/React.createElement(external_wp_components_namespaceObject.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, /*#__PURE__*/React.createElement(external_wp_components_namespaceObject.Path, {
  d: "M21.9 7.5h-6v-5H8v7H2v11.9h20l-.1-13.9zM4 11.4h4v7.9H4v-7.9zm6-.9v-6h4v14.9h-4v-8.9zm9.9 8.9h-4V9.5h4v9.9z"
}));
var cartO = /*#__PURE__*/React.createElement(external_wp_components_namespaceObject.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, /*#__PURE__*/React.createElement(external_wp_components_namespaceObject.Path, {
  d: "M21.8 7.3c-.2-.3-.5-.4-.8-.4H7.3L6.2 4.2C5.8 3.4 5.1 3 4.4 3H2v2h2.3L9 16.3c.2.3.5.6 1 .6h8c.4 0 .8-.3 1-.6l2.9-8c.1-.3 0-.6-.1-1zm-4.5 7.6h-6.6L8.2 9h11.3l-2.2 5.9z"
}), /*#__PURE__*/React.createElement("circle", {
  cx: "10.5",
  cy: "19.5",
  r: "1.5"
}), /*#__PURE__*/React.createElement("circle", {
  cx: "17.4",
  cy: "19.5",
  r: "1.5"
}));
var envelopeO = /*#__PURE__*/React.createElement(external_wp_components_namespaceObject.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, /*#__PURE__*/React.createElement(external_wp_components_namespaceObject.Path, {
  d: "M21.5 4.2h-19c-.3 0-.5.2-.5.4v14.7c0 .2.2.4.4.4h19c.2 0 .4-.2.4-.4V4.6c.2-.2 0-.4-.3-.4zm-1.5 2v.5l-8 6-8-6v-.5h16zM4 17.8V9.1l7.4 5.6c.2.2.4.2.6.2s.4-.1.6-.2L20 9.1v8.7H4z"
}));
var eyeO = /*#__PURE__*/React.createElement(external_wp_components_namespaceObject.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, /*#__PURE__*/React.createElement(external_wp_components_namespaceObject.Path, {
  d: "M12 17.9c-4.2 0-7.9-2.1-9.9-5.5-.2-.3-.2-.6 0-.9C4.1 8.2 7.8 6 12 6s7.9 2.1 9.9 5.5c.2.3.2.6 0 .9-2 3.4-5.7 5.5-9.9 5.5zM3.9 12c1.6 2.6 4.8 4.2 8.1 4.2s6.4-1.6 8.1-4.2c-1.6-2.6-4.7-4.2-8.1-4.2S5.6 9.4 3.9 12zm8.1 3.3c-1.8 0-3.3-1.5-3.3-3.3s1.5-3.3 3.3-3.3 3.3 1.5 3.3 3.3-1.5 3.3-3.3 3.3zm0-4.9c-.9 0-1.6.8-1.6 1.6 0 .9.8 1.6 1.6 1.6s1.6-.8 1.6-1.6c0-.9-.7-1.6-1.6-1.6z"
}));
var instagramO = /*#__PURE__*/React.createElement(external_wp_components_namespaceObject.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, /*#__PURE__*/React.createElement(external_wp_components_namespaceObject.Path, {
  d: "M12 8c-2.3 0-4 1.8-4 4 0 2.3 1.8 4 4 4 2.3 0 4-1.8 4-4 0-2.3-1.7-4-4-4zm0 6.6c-1.5 0-2.6-1.1-2.6-2.6s1.1-2.6 2.6-2.6 2.6 1.1 2.6 2.6-1.1 2.6-2.6 2.6z"
}), /*#__PURE__*/React.createElement("circle", {
  cx: "16.2",
  cy: "7.8",
  r: "1"
}), /*#__PURE__*/React.createElement(external_wp_components_namespaceObject.Path, {
  d: "M21.4 5.5c-.5-1.3-1.6-2.4-2.9-2.9-.8-.3-1.6-.4-2.4-.4C15 2 14.7 2 12 2s-3 0-4.1.1c-.9 0-1.6.2-2.4.4-1.4.5-2.4 1.6-2.9 3-.3.7-.5 1.5-.5 2.3C2 8.9 2 9.3 2 12s0 3 .1 4.1c0 .9.2 1.6.4 2.4.5 1.3 1.6 2.4 2.9 2.9.8.3 1.6.4 2.4.5 1.2.1 1.5.1 4.2.1s3 0 4.1-.1c.9 0 1.6-.2 2.4-.4 1.3-.5 2.4-1.6 2.9-2.9.3-.8.4-1.6.4-2.4.1-1 .1-1.4.1-4.1s0-3-.1-4.1c.1-1-.1-1.8-.4-2.5zm-1.3 10.4c0 .6-.1 1.3-.3 1.9-.3.9-1 1.6-1.9 1.9-.6.3-1.2.3-1.8.3-1 .1-1.4.1-4.1.1s-2.9 0-4.1-.1c-.6 0-1.2-.1-1.8-.3-.9-.3-1.6-1-1.9-1.9-.3-.6-.3-1.2-.3-1.8-.1-1-.1-1.4-.1-4.1s0-2.9.1-4.1c0-.6.1-1.3.3-1.9.3-.9 1-1.6 1.9-1.9.6-.3 1.2-.3 1.8-.3h4.2c2.8 0 2.9 0 4.1.1.6 0 1.2.1 1.8.3.9.3 1.6 1 1.9 1.9.3.6.3 1.2.3 1.8.1 1 .1 1.4.1 4.1-.2 2.7-.2 3-.2 4z"
}));
var mapMarkerO = /*#__PURE__*/React.createElement(external_wp_components_namespaceObject.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, /*#__PURE__*/React.createElement(external_wp_components_namespaceObject.Path, {
  d: "M12 13.7c1.9 0 3.5-1.6 3.5-3.5S13.9 6.8 12 6.8s-3.5 1.6-3.5 3.5 1.6 3.4 3.5 3.4zm0-5.2c1 0 1.7.8 1.7 1.7S13 12 12 12s-1.7-.8-1.7-1.7.7-1.8 1.7-1.8z"
}), /*#__PURE__*/React.createElement(external_wp_components_namespaceObject.Path, {
  d: "M11.4 21.9c.2.1.3.2.6.2s.4-.1.6-.2c.3-.2 7.5-5.4 7.4-11.9 0-4.5-3.6-8-8-8s-8 3.6-8 8c0 6.5 7.1 11.6 7.4 11.9zM12 4c3.3 0 6 2.7 6 6 0 4.5-4.4 8.5-6 9.8-1.7-1.3-6-5.3-6-9.8 0-3.3 2.7-6 6-6z"
}));
var phoneO = /*#__PURE__*/React.createElement(external_wp_components_namespaceObject.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, /*#__PURE__*/React.createElement(external_wp_components_namespaceObject.Path, {
  d: "M21.9 17.9l-5.5-5.5-2.3 2.3c-.8-.3-2.2-.8-3-1.6s-1.4-2.3-1.6-3l2.3-2.3-5.7-5.7-3.4 3.4c-.5.5-.6 1-.6 1.5 0 1.5.4 6.5 4.4 10.5s9.1 4.4 10.5 4.4c.5 0 1-.2 1.5-.6l3.4-3.4zm-4.9 2c-1.3 0-5.6-.3-9.1-3.8S4.1 8.2 4.1 7l2.1-2.1 2.7 2.7-1.4 1.3c-.3.3-.3.6-.3 1 0 .1.6 2.9 2.3 4.6s4.5 2.3 4.6 2.3c.3.1.7 0 1-.3l1.3-1.3 2.7 2.7-2.1 2z"
}));
var paperPlaneO = /*#__PURE__*/React.createElement(external_wp_components_namespaceObject.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, /*#__PURE__*/React.createElement(external_wp_components_namespaceObject.Path, {
  d: "M21.6 2.2c-.3-.2-.7-.3-1-.1l-18 8.4c-.4.2-.6.5-.6 1s.3.8.6 1L8.3 15v7l6.2-4.4 5.1 2.2c.2.1.3.1.4.1.2 0 .3-.1.5-.2.3-.2.5-.5.5-.9L22 3c0-.2-.2-.6-.4-.8zM19 17.3l-5.6-2.4 3.3-6.5-8.1 4.4-3-1.4 14.2-6.7-.8 12.6z"
}));
var quoteLeft = /*#__PURE__*/React.createElement(external_wp_components_namespaceObject.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, /*#__PURE__*/React.createElement(external_wp_components_namespaceObject.Path, {
  d: "M3.6 6.3C5 4.8 7.2 4 10 4h1v2.8l-.8.2c-1.4.2-2.3.8-2.8 1.6-.4.4-.5 1-.5 1.4h3c.5 0 1 .4 1 1v7c0 1.1-.9 2-2 2H3c-.5 0-1-.4-1-1v-8s-.2-2.7 1.6-4.7zM20 20h-6c-.5 0-1-.4-1-1v-7.9c0-.1-.2-2.8 1.7-4.8C16.1 4.8 18.3 4 21.1 4h1v2.7l-.9.3c-1.4.3-2.3.8-2.9 1.6-.3.5-.4 1-.4 1.4h3c.5 0 1 .4 1 1v7c.1 1.1-.8 2-1.9 2z"
}));
var quoteRight = /*#__PURE__*/React.createElement(external_wp_components_namespaceObject.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, /*#__PURE__*/React.createElement(external_wp_components_namespaceObject.Path, {
  d: "M20.3 17.7C22.2 15.6 22 13 22 13V5c0-.5-.4-1-1-1h-6c-1.1 0-2 .9-2 2v7c0 .5.4 1 1 1h3c0 .4-.1.9-.4 1.4-.5.8-1.5 1.3-2.9 1.7l-.7.1V20h1c2.8 0 4.9-.8 6.3-2.3zm-11 0C11.2 15.6 11 13 11 13V5c0-.5-.4-1-1-1H4c-1.1 0-2 .9-2 2v7c0 .5.4 1 1 1h3c0 .4-.1.9-.4 1.4-.5.8-1.5 1.3-2.9 1.7l-.7.1V20h1c2.8 0 4.9-.8 6.3-2.3z"
}));
var recorderO = /*#__PURE__*/React.createElement(external_wp_components_namespaceObject.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, /*#__PURE__*/React.createElement(external_wp_components_namespaceObject.Path, {
  d: "M18 10c0-1.1-.9-2-2-2h-1.4l-2.4-4c-.3-.6-1-1-1.7-1H5v2h5.4l1.8 3H4c-1.1 0-2 .9-2 2v8.9c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2v-3l4 2V11l-4 2v-3zm-2 8.9H4V10h12v8.9z"
}), /*#__PURE__*/React.createElement(external_wp_components_namespaceObject.Path, {
  d: "M7 15.1h6v2H7v-2z"
}));
var searchMinus = /*#__PURE__*/React.createElement(external_wp_components_namespaceObject.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, /*#__PURE__*/React.createElement(external_wp_components_namespaceObject.Path, {
  d: "M6.8 9.3h7V11h-7V9.3z"
}), /*#__PURE__*/React.createElement(external_wp_components_namespaceObject.Path, {
  d: "M10.6 19.1c2 0 3.8-.7 5.2-1.8l4.7 4.7 1.5-1.5-4.7-4.7c1.1-1.5 1.8-3.3 1.8-5.2 0-4.7-3.8-8.5-8.5-8.5S2 5.9 2 10.6s3.9 8.5 8.6 8.5zm0-15c3.6 0 6.4 2.9 6.4 6.4S14.1 17 10.6 17s-6.4-3-6.4-6.5 2.9-6.4 6.4-6.4z"
}));
var searchO = /*#__PURE__*/React.createElement(external_wp_components_namespaceObject.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, /*#__PURE__*/React.createElement(external_wp_components_namespaceObject.Path, {
  d: "M10.6 19.1c2 0 3.8-.7 5.2-1.8l4.7 4.7 1.5-1.5-4.7-4.7c1.1-1.5 1.8-3.3 1.8-5.2 0-4.7-3.8-8.6-8.6-8.6S2 5.8 2 10.6s3.8 8.5 8.6 8.5zm0-15c3.6 0 6.5 2.9 6.5 6.5s-3 6.4-6.5 6.4-6.4-3-6.4-6.5 2.9-6.4 6.4-6.4z"
}));
var sendO = /*#__PURE__*/React.createElement(external_wp_components_namespaceObject.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, /*#__PURE__*/React.createElement(external_wp_components_namespaceObject.Path, {
  d: "M21.3 11L3.5 2.7c-.3-.2-.8-.1-1.1.2-.3.2-.5.6-.4 1L4 12l-2 8.1c-.1.4 0 .8.3 1 .2.2.4.3.7.3.2 0 .3 0 .4-.1l18-8.3c.3-.2.6-.5.6-1s-.4-.8-.7-1zM4.6 18.5l.8-3.5 6-3-6-3-.8-3.5L18.4 12 4.6 18.5z"
}));
var thumbsUpO = /*#__PURE__*/React.createElement(external_wp_components_namespaceObject.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, /*#__PURE__*/React.createElement(external_wp_components_namespaceObject.Path, {
  d: "M19.7 8.5h-5.5l1.1-3.3c.2-.6.1-1.3-.3-1.8-.3-.5-1-.9-1.6-.9h-1.6c-.3 0-.6.2-.8.3L6.5 8.5H4c-1.1 0-2 .9-2 2v8.9c0 1.1.9 2 2 2h13.2c.9 0 1.6-.5 1.9-1.3l2.8-7.3c0-.1.1-.3.1-.3v-2c-.3-1.1-1.1-2-2.3-2zM4 10.5h2v8.9H4v-8.9zm15.7 1.8L17 19.4H7.9V9.8l4.4-5.3h1.1l-1.6 4.6c0 .4 0 .7.2.9.2.3.5.4.8.4h6.9v1.9z"
}));
var timeO = /*#__PURE__*/React.createElement(external_wp_components_namespaceObject.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, /*#__PURE__*/React.createElement(external_wp_components_namespaceObject.Path, {
  d: "M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm0 18c-4.4 0-8-3.6-8-8s3.6-8 8-8 8 3.6 8 8-3.6 8-8 8z"
}), /*#__PURE__*/React.createElement(external_wp_components_namespaceObject.Path, {
  d: "M12 6H9.8v8.6H18v-2.2h-6V6z"
}));
var userO = /*#__PURE__*/React.createElement(external_wp_components_namespaceObject.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, /*#__PURE__*/React.createElement(external_wp_components_namespaceObject.Path, {
  d: "M12 2C9.1 2 6.7 4.4 6.7 7.3S9 12.6 12 12.6s5.3-2.3 5.3-5.3S14.9 2 12 2zm0 8.4c-1.7 0-3.1-1.4-3.1-3.1s1.4-3.2 3.1-3.2 3.1 1.4 3.1 3.1-1.4 3.2-3.1 3.2zM21.5 22v-1c0-4.1-3.3-7.4-7.4-7.4H9.9c-4.1 0-7.4 3.3-7.4 7.4v1h2.1v-1c0-2.9 2.3-5.3 5.3-5.3h4.2c2.9 0 5.3 2.3 5.3 5.3v1h2.1z"
}));
var youtubePlay = /*#__PURE__*/React.createElement(external_wp_components_namespaceObject.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, /*#__PURE__*/React.createElement(external_wp_components_namespaceObject.Path, {
  d: "M3.7 2v20l16.7-10L3.7 2z"
}));
var bar = /*#__PURE__*/React.createElement(external_wp_components_namespaceObject.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, /*#__PURE__*/React.createElement(external_wp_components_namespaceObject.Path, {
  d: "M2 5h10v2H2V5zm0 6h20v2H2v-2zm10 6h10v2H12v-2z"
}));
var behance = /*#__PURE__*/React.createElement(external_wp_components_namespaceObject.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, /*#__PURE__*/React.createElement(external_wp_components_namespaceObject.Path, {
  d: "M7.8 6c.6 0 1.2.1 1.6.2.5.1 1 .3 1.2.5.3.3.6.6.9 1 .2.4.3.9.3 1.4s-.2 1.1-.4 1.6c-.3.4-.7.8-1.2 1 .8.3 1.3.6 1.6 1.1.3.6.6 1.1.6 2 0 .6-.1 1.1-.3 1.6-.3.4-.6.9-1 1-.4.3-1 .5-1.4.7-.5.2-1 .2-1.6.2H2V6h5.8zm-.4 5c.5 0 1-.1 1.1-.3.3-.3.5-.6.5-1 0-.3-.1-.5-.2-.7 0-.3-.1-.4-.3-.5-.1-.2-.3-.3-.6-.3-.1-.1-.4-.1-.7-.1H4.8V11h2.6zm.2 5.2c.3 0 .5 0 .8-.1.3-.1.4-.2.7-.3.1-.1.3-.3.3-.5.1-.2.2-.5.2-.9 0-.7-.2-1-.5-1.3-.3-.3-.9-.4-1.4-.4H4.8v3.4l2.8.1c0-.1 0 0 0 0zm8.6 0c.3.3 1 .5 1.6.5.5 0 1-.1 1.2-.3.3-.3.6-.5.7-.8h2.2c-.3 1-.9 1.8-1.6 2.3-.8.5-1.6.7-2.6.7-.7 0-1.3-.1-1.9-.3s-1-.6-1.4-1c-.4-.4-.7-1-1-1.5-.3-.6-.3-1.2-.3-1.9s.1-1.2.3-1.8c.3-.6.5-1 1-1.5s1-.8 1.4-1c.6-.3 1.1-.3 1.8-.3.8 0 1.4.2 2 .4.6.3 1 .7 1.4 1.1.3.5.6 1 .8 1.6.3.6.3 1.2.3 1.9h-6.4c-.1.8.1 1.4.5 1.9zm2.7-4.7c-.3-.3-.8-.5-1.4-.5-.4 0-.8.1-1 .2-.3.2-.5.3-.6.5-.2.2-.3.4-.3.7-.1.3-.1.4-.1.6h3.9c.1-.7-.2-1.2-.5-1.5zM15 6.9h5v1.2h-5V6.9z"
}));
var blogger = /*#__PURE__*/React.createElement(external_wp_components_namespaceObject.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, /*#__PURE__*/React.createElement(external_wp_components_namespaceObject.Path, {
  d: "M21.9 10.6c-.1-.3-.3-.7-.5-.9-.1 0-.6-.1-1.1-.1-.9 0-1-.1-1.3-.3-.4-.3-.6-.5-.6-1.3 0-1.5-.6-2.9-1.8-4.1-.9-.9-1.8-1.5-3-1.8-.3-.1-.9-.1-2.8-.2-3.2.1-3.8.1-4.9.5-1.8.9-3.2 2.5-3.7 4.6-.1.4-.1 1-.2 4.6 0 4.5 0 5.2.3 6.1.3.8.4 1.2 1 1.8 1 1.2 2.4 2.1 3.7 2.4.7.1 8.8.2 9.7 0 1.5-.2 2.6-.8 3.7-1.9.8-.8 1.2-1.7 1.6-2.8.1-.4.2-.7.2-3.5-.2-1.9-.2-2.8-.3-3.1zM7.6 7.7c.3-.3.4-.3 2.6-.3 2 0 2 0 2.4.2.4.2.6.5.6 1s-.2.7-.5 1c-.2.1-.3.2-2.3.2-1.2 0-2.1 0-2.3-.1-.8-.3-1.1-1.4-.5-2zm8.5 9l-.6.1H12c-3 0-3.9 0-4.1-.1-.3-.2-.6-.5-.7-.9 0-.3.2-.7.4-1 .3-.3.4-.3 4.4-.3s4 0 4.4.3c.5.6.4 1.6-.3 1.9z"
}));
var check = /*#__PURE__*/React.createElement(external_wp_components_namespaceObject.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, /*#__PURE__*/React.createElement(external_wp_components_namespaceObject.Path, {
  d: "M7.7 16.8l-4.3-4.1L2 14.1l5.7 5.4L21.9 5.9l-1.5-1.4L7.7 16.8z"
}));
var icons_close = /*#__PURE__*/React.createElement(external_wp_components_namespaceObject.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, /*#__PURE__*/React.createElement(external_wp_components_namespaceObject.Path, {
  d: "M12 10.6L3.4 2 2 3.3l8.6 8.6L2 20.4l1.4 1.4 8.6-8.5 8.5 8.5 1.4-1.4-8.5-8.5L22 3.5l-1.4-1.3-8.6 8.4z"
}));
var codeopen = /*#__PURE__*/React.createElement(external_wp_components_namespaceObject.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, /*#__PURE__*/React.createElement(external_wp_components_namespaceObject.Path, {
  d: "M21.6 8.6l-.3-.3-9.1-6c-.3-.2-.6-.2-.9 0l-9.1 6c0 .1-.1.2-.2.3v6.5c0 .2 0 .3.2.4.1.1.2.2.3.2l9.1 6c.1.1.3.2.4.2s.3-.1.4-.2l9.1-6 .3-.3c.1-.2.2-.3.2-.4V9c-.2-.1-.3-.3-.4-.4zm-8.9-4.1l6.9 4.6-3.2 2.1-3.7-2.5c-.1-.1 0-4.2 0-4.2zm-1.6 0v4.2l-3.7 2.5L4.3 9l6.8-4.5zm-7.5 6L6 12.1l-2.4 1.6v-3.2zm7.5 9.2l-6.9-4.6L7.4 13l3.7 2.5v4.2zm.8-5.6L8.8 12l3.1-2.1L15 12l-3.1 2.1zm.8 5.6v-4.3l3.7-2.5 3.2 2.2-6.9 4.6zm7.5-6l-2.4-1.6 2.4-1.6v3.2z"
}));
var delicious = /*#__PURE__*/React.createElement(external_wp_components_namespaceObject.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, /*#__PURE__*/React.createElement(external_wp_components_namespaceObject.Path, {
  d: "M21.9 3.6c0-.1 0-.1-.1-.2 0-.1-.1-.2-.1-.3-.1-.1-.1-.2-.2-.3l-.3-.3-.1-.1c-.1 0-.1-.1-.2-.1s-.2-.1-.2-.1c-.1 0-.2-.1-.2-.1-.3-.1-.5-.1-.6-.1H4.1C3 2 2 3 2 4.1v15.7c0 .2 0 .4.1.5.1.3.3.7.5.9l.1.1c.3.2.6.4.9.5.2.2.4.2.5.2h15.7c1.2 0 2.1-1 2.1-2.1V4.1c.1-.1.1-.3 0-.5zm-1.3 16.3c0 .4-.3.7-.7.7H12V12H3.4V4.1c0-.4.3-.7.7-.7H12V12h8.6v7.9z"
}));
var devianart = /*#__PURE__*/React.createElement(external_wp_components_namespaceObject.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, /*#__PURE__*/React.createElement(external_wp_components_namespaceObject.Path, {
  d: "M18 2h-3.5l-.3.3-1.7 3.3-.6.4H6v5h3.3l.3.3-3.5 7V22h3.5l.3-.3 1.7-3.3.5-.3H18V13h-3.3l-.3-.3 3.5-7C18 5.7 18 2 18 2z"
}));
var dribble = /*#__PURE__*/React.createElement(external_wp_components_namespaceObject.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, /*#__PURE__*/React.createElement(external_wp_components_namespaceObject.Path, {
  d: "M20.7 6.9c-.9-1.6-2.1-2.8-3.6-3.6S13.8 2 12 2s-3.5.4-5 1.3c-1.5 1-2.7 2.2-3.6 3.6S2 10.2 2 12s.4 3.5 1.3 5 2.1 2.8 3.6 3.6c1.6.9 3.2 1.3 5 1.3s3.5-.4 5-1.3c1.6-.9 2.8-2.1 3.6-3.6s1.3-3.2 1.3-5-.3-3.5-1.1-5.1zM12 3.6c2 0 3.7.6 5.3 1.9-.9 1.2-2.3 2.2-4.1 3-1-1.8-2.1-3.4-3.2-4.6.6-.2 1.3-.3 2-.3zM5.5 6.8c.8-1 1.6-1.6 2.7-2.3 1.2 1.2 2.3 2.7 3.3 4.5-2 .6-4.1.9-6.3.9H3.8c.5-1.1 1-2.2 1.7-3.1zM3.7 12v-.4h1.1c2.7 0 5.1-.3 7.5-1.1.2.3.3.8.6 1.2-1.3.3-2.7 1-4.1 2.2s-2.4 2.3-3 3.6c-1.4-1.6-2.1-3.4-2.1-5.5zm8.3 8.3c-1.9 0-3.6-.6-5.1-1.7.6-1.2 1.6-2.3 2.8-3.4 1.2-1 2.5-1.7 3.7-2 .8 2.2 1.3 4.3 1.6 6.6-1 .3-2 .5-3 .5zm7-4c-.7 1-1.6 1.9-2.6 2.6-.3-2.1-.7-4.1-1.4-6.1 1-.1 1.7-.1 2.5-.1s1.6 0 2.7.1c0 1.3-.5 2.5-1.2 3.5zm-1.2-4.9c-1.1 0-2.3.1-3.2.2-.3-.7-.5-1.2-.7-1.6 2.1-.9 3.6-2 4.4-3.3 1.2 1.4 1.8 3 2 4.9-.8-.2-1.6-.2-2.5-.2z"
}));
var facebook = /*#__PURE__*/React.createElement(external_wp_components_namespaceObject.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, /*#__PURE__*/React.createElement(external_wp_components_namespaceObject.Path, {
  d: "M13.7 13.3V22H9.6v-8.7H6.5V9.7h3.1V6.9c0-3.1 2-4.9 4.9-4.9 1.3 0 3 .3 3 .3v3h-1.7c-1.6 0-2 1-2 1.9v2.4h3.3l-.6 3.7h-2.8z"
}));
var linkedin = /*#__PURE__*/React.createElement(external_wp_components_namespaceObject.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, /*#__PURE__*/React.createElement(external_wp_components_namespaceObject.Path, {
  d: "M6.6 4.9C6.6 6 5.6 7 4.3 7 3 6.9 2.1 6 2.1 4.9s1-2.1 2.3-2.1c1.3 0 2.2.9 2.2 2.1zM2.1 21h4.6V8.2H2.1V21zM17 7.9c-2.2 0-3.3 1.2-3.8 2.2V8.2H8.9C9 9.4 8.9 21 8.9 21h4.2v-7.1c0-.4 0-.8.2-1 .3-.8 1-1.6 2.2-1.6 1.6 0 2.2 1.1 2.2 2.9v6.9H22v-7.6c-.1-3.8-2.1-5.6-5-5.6z",
  fillRule: "evenodd",
  clipRule: "evenodd"
}));
var medium = /*#__PURE__*/React.createElement(external_wp_components_namespaceObject.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, /*#__PURE__*/React.createElement(external_wp_components_namespaceObject.Path, {
  d: "M4.4 7.3c0-.3-.1-.5-.3-.7L2.3 4.4v-.3h5.8l4.5 9.8 3.9-9.8H22v.3L20.4 6c-.2.1-.2.3-.2.4v11.1c0 .2 0 .3.2.4l1.6 1.6v.3h-7.8v-.3l1.6-1.6c.2-.2.2-.2.2-.4v-9l-4.5 11.3h-.6L5.7 8.5v7.6c0 .3.1.6.3.9l2.1 2.5v.3H2v-.3L4.1 17c.3-.3.3-.5.3-.9V7.3z"
}));
var minus = /*#__PURE__*/React.createElement(external_wp_components_namespaceObject.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, /*#__PURE__*/React.createElement(external_wp_components_namespaceObject.Path, {
  d: "M2 11h20v2H2v-2z"
}));
var pinterest = /*#__PURE__*/React.createElement(external_wp_components_namespaceObject.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, /*#__PURE__*/React.createElement(external_wp_components_namespaceObject.Path, {
  d: "M11.9 2.1C6.4 2.1 2 6.5 2 12.1c0 4.3 2.6 7.8 6.3 9.3-.1-.8-.2-2 0-2.9.2-.8 1.1-4.9 1.1-4.9s-.3-.6-.3-1.5c0-1.4.8-2.4 1.8-2.4.9 0 1.3.6 1.3 1.4 0 .9-.5 2.2-.9 3.3-.3 1 .5 1.8 1.5 1.8 1.7 0 3.1-1.9 3.1-4.6 0-2.4-1.7-4.1-4.2-4.1-2.9 0-4.5 2.2-4.5 4.3 0 .9.3 1.7.8 2.3.1.1.1.2.1.3-.1.3-.3 1-.3 1.1-.1.2-.2.3-.3.2-1.2-.6-2-2.4-2-3.9 0-3.1 2.3-6.1 6.6-6.1 3.5 0 6.2 2.4 6.2 5.7 0 3.5-2.2 6.2-5.2 6.2-1 0-2-.5-2.3-1.1 0 0-.5 1.9-.6 2.3-.3.9-.9 2-1.2 2.6 1 .3 1.9.4 3 .4 5.6 0 10-4.4 10-10s-4.6-9.7-10.1-9.7"
}));
var plus = /*#__PURE__*/React.createElement(external_wp_components_namespaceObject.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, /*#__PURE__*/React.createElement(external_wp_components_namespaceObject.Path, {
  d: "M22 11h-9.1V2h-2v9H2v2h9v9h2v-9h9v-2z"
}));
var quora = /*#__PURE__*/React.createElement(external_wp_components_namespaceObject.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, /*#__PURE__*/React.createElement(external_wp_components_namespaceObject.Path, {
  d: "M12.5 17.5c-.7-1.4-1.5-2.7-3.1-2.7-.3 0-.6.1-.9.2L8 14c.7-.6 1.7-1 3.1-1 2.1 0 3.2 1 4.1 2.4.5-1.1.8-2.6.8-4.5 0-4.7-1.5-7.1-4.9-7.1s-4.8 2.4-4.8 7.1c0 4.6 1.5 7 4.8 7 .5-.2 1-.2 1.4-.4zm.9 1.7c-.7.2-1.5.3-2.3.3-4.5 0-8.8-3.6-8.8-8.7C2.3 5.6 6.7 2 11.1 2c4.5 0 8.9 3.6 8.9 8.8 0 3-1.4 5.3-3.3 6.8.6 1 1.3 1.6 2.2 1.6 1 0 1.4-.8 1.5-1.4h1.3c.1.8-.3 4.2-4 4.2-2.3 0-3.4-1.3-4.3-2.8z"
}));
var reddit = /*#__PURE__*/React.createElement(external_wp_components_namespaceObject.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, /*#__PURE__*/React.createElement("circle", {
  cx: "10",
  cy: "12.9",
  r: ".9"
}), /*#__PURE__*/React.createElement(external_wp_components_namespaceObject.Path, {
  d: "M13.8 15c-.5.3-1.2.5-1.8.5-.6 0-1.3-.2-1.8-.5-.1-.1-.2-.1-.3 0-.1.1-.1.3 0 .3.6.4 1.4.7 2.2.7s1.6-.2 2.2-.7c.1-.1.1-.3 0-.3-.2-.1-.4-.1-.5 0zm.2-3c-.5 0-.9.3-.9.9 0 .5.3.9.9.9h.1c.5 0 .9-.4.9-.9-.1-.5-.5-.9-1-.9z"
}), /*#__PURE__*/React.createElement(external_wp_components_namespaceObject.Path, {
  d: "M12 2C6.5 2 2 6.4 2 12c0 5.5 4.5 10 10 10s10-4.5 10-10c0-5.6-4.5-10-10-10zm5.8 11.3v.4c0 2.3-2.6 4.1-5.8 4.1S6.2 16 6.2 13.7v-.4c-.2-.1-.3-.2-.5-.3-.6-.5-.6-1.5-.1-2.1s1.5-.6 2.1-.1c1.1-.8 2.5-1.2 3.9-1.2l.8-3.5c0-.2.2-.3.3-.3l2.4.5c.3-.1.6-.3.9-.4.5-.1 1 .3 1.1.9.1.5-.3 1-.9 1.1-.5.1-1-.3-1.1-.9L13 6.6l-.6 3.1c1.4 0 2.7.4 3.8 1.2.3-.3.6-.4 1-.4.8 0 1.5.6 1.5 1.4 0 .6-.4 1.1-.9 1.4z"
}));
var reply = /*#__PURE__*/React.createElement(external_wp_components_namespaceObject.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, /*#__PURE__*/React.createElement(external_wp_components_namespaceObject.Path, {
  d: "M10.5 10.9h6.2v7.2h2V10c0-.6-.5-1.1-1.1-1.1h-7.1v-3L5.4 10l5 4.1.1-3.2z"
}));
var rss = /*#__PURE__*/React.createElement(external_wp_components_namespaceObject.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, /*#__PURE__*/React.createElement(external_wp_components_namespaceObject.Path, {
  d: "M22 22C22 11 13 2 2 2v2.7c9.6 0 17.3 7.7 17.3 17.3H22z"
}), /*#__PURE__*/React.createElement(external_wp_components_namespaceObject.Path, {
  d: "M12.7 22h2.7C15.3 14.6 9.4 8.7 2 8.7v2.7c5.9-.1 10.7 4.7 10.7 10.6z"
}), /*#__PURE__*/React.createElement("circle", {
  cx: "4.7",
  cy: "19.3",
  r: "2.7"
}));
var tumblr = /*#__PURE__*/React.createElement(external_wp_components_namespaceObject.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, /*#__PURE__*/React.createElement(external_wp_components_namespaceObject.Path, {
  d: "M14.3 22c-3 0-5.2-1.6-5.2-5.2v-5.9H6.4V7.7c3-.8 4.3-3.4 4.4-5.6h3.1v5.1h3.6v3.7h-3.6V16c0 1.6.8 2.1 2 2.1h1.7V22h-3.3z"
}));
var twitch = /*#__PURE__*/React.createElement(external_wp_components_namespaceObject.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, /*#__PURE__*/React.createElement(external_wp_components_namespaceObject.Path, {
  d: "M4.4 2L3 5.5v14h4.8v1.6l2.7.9 2.5-2.5h3.9l5.2-5.2V2H4.4zm15.8 11.3l-2.9 3h-4.8L10 18.9v-2.5H6V3.9h14.3l-.1 9.4zm-3-6v5.2h-1.8V7.3h1.8zm-4.7 0v5.2h-1.8V7.3h1.8z"
}));
var twitter = /*#__PURE__*/React.createElement(external_wp_components_namespaceObject.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, /*#__PURE__*/React.createElement(external_wp_components_namespaceObject.Path, {
  d: "M8.3 20c7.6 0 11.6-6.2 11.6-11.6v-.5c.9-.6 1.5-1.3 2.1-2.1-.8.3-1.6.6-2.3.7.9-.5 1.5-1.3 1.8-2.2-.9.5-1.6.9-2.6 1-1.6-1.6-4.1-1.7-5.8-.2-1.1.9-1.6 2.4-1.2 3.8-3.3-.1-6.3-1.7-8.3-4.2-1.2 1.7-.7 4 1.1 5.3-.6 0-1.3-.2-1.8-.5v.1c0 1.9 1.4 3.6 3.3 4-.6.2-1.2.2-1.8.1.5 1.6 2.1 2.8 3.8 2.8-1.4 1.1-3.3 1.7-5.1 1.7-.3 0-.7 0-1-.1C4 19.4 6.1 20 8.3 20"
}));
var vimeo = /*#__PURE__*/React.createElement(external_wp_components_namespaceObject.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, /*#__PURE__*/React.createElement(external_wp_components_namespaceObject.Path, {
  d: "M21 10.4c-2 4.3-7 10.3-10.1 10.3-3 0-3.5-6.5-5.1-10.9C5 7.7 4.5 8.2 3 9.2L2 8c2.3-2 4.5-4.3 5.9-4.4 1.6-.2 2.5 1 2.9 3.2.4 3 1.1 7.7 2.3 7.7.9 0 3.1-3.7 3.2-5 .2-1.9-1.4-2-2.9-1.4C15.7.8 25 2.1 21 10.4z"
}));
var wordpress = /*#__PURE__*/React.createElement(external_wp_components_namespaceObject.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, /*#__PURE__*/React.createElement(external_wp_components_namespaceObject.Path, {
  d: "M19.9 7.7C20.6 9 21 10.4 21 12c0 3.3-1.8 6.2-4.4 7.7l2.8-7.9c.5-1.3.7-2.3.7-3.2-.2-.3-.2-.6-.2-.9m-6.7 0c.5 0 1-.1 1-.1.5-.1.4-.8-.1-.8 0 0-1.5.1-2.4.1-.9 0-2.3-.1-2.3-.1-.4 0-.5.8 0 .8 0 0 .4.1 1 .1l1.4 3.8-2 5.9-3.4-9.7c.5 0 1-.1 1-.1.6 0 .5-.7.1-.6H4.4C6.1 4.6 8.9 3 12 3c2.3 0 4.4.9 6.1 2.3H18c-.9 0-1.5.8-1.5 1.6s.5 1.4.9 2.1c.3.6.8 1.4.8 2.5 0 .8-.3 1.7-.7 2.9l-.9 3-3.4-9.7zM12 21c-.9 0-1.7-.1-2.5-.3l2.7-7.8 2.8 7.6c0 .1 0 .1.1.1-1 .2-2.1.4-3.1.4m-9-9c0-1.3.3-2.5.8-3.7L8.1 20C5 18.6 3 15.6 3 12m9-10C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2"
}));
var yelp = /*#__PURE__*/React.createElement(external_wp_components_namespaceObject.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, /*#__PURE__*/React.createElement(external_wp_components_namespaceObject.Path, {
  d: "M19.6 17.3c-.1.8-1.7 2.9-2.5 3.2-.3.1-.5.1-.7-.1-.1-.1-.3-.3-2-3.2l-.5-.9c-.2-.3-.2-.7.1-1 .3-.3.6-.4 1-.3l1.3.4c3 1 3.1 1 3.2 1.1.1.2.2.5.1.8zm-6-4.5c-.2-.3-.2-.7 0-1l.9-1.1c1.8-2.5 1.9-2.6 2.1-2.7.2-.2.4-.2.7 0 .7.3 2.2 2.5 2.3 3.4 0 .3-.1.5-.3.7-.2.1-.3.2-3.7 1-.5.2-.9.2-1 .3-.4 0-.8-.2-1-.6zm-2.1-1.3c-.2.1-.7.2-1.3-.8 0 0-4.1-6.4-4.2-6.7-.1-.1 0-.3.2-.6.6-.6 3.9-1.6 4.8-1.4.3.1.5.3.5.5.1.3.4 6.3.5 7.7.2 1.1-.3 1.3-.5 1.3zm.6 6.6c0 3.1 0 3.2-.1 3.4-.1.3-.3.4-.6.4-.8.2-3.3-.8-3.8-1.4-.1-.2-.2-.3-.2-.4v-.3c.1-.2.2-.3 2.4-3l.7-.8c.3-.3.6-.3 1-.3.3.2.6.4.5.8v1.6zm-6.9-2c-.3 0-.4-.2-.6-.4-.1-.2-.2-.4-.2-.9-.1-1 0-2.7.3-3.2.2-.3.3-.3.6-.3.2 0 .3.1 3.6 1.4l1 .3c.3.1.5.4.5.9 0 .3-.3.7-.6.8l-1.3.4c-3 1-3.1 1-3.3 1z"
}));
var buttons = /*#__PURE__*/React.createElement(external_wp_components_namespaceObject.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, /*#__PURE__*/React.createElement(external_wp_components_namespaceObject.Path, {
  d: "M19.27 12.91H4.73a1.83 1.83 0 0 0-1.82 1.82v5.45A1.83 1.83 0 0 0 4.73 22h14.54a1.83 1.83 0 0 0 1.82-1.82v-5.45a1.83 1.83 0 0 0-1.82-1.82Zm0 7.27H4.73v-5.45h14.54Z"
}), /*#__PURE__*/React.createElement(external_wp_components_namespaceObject.Path, {
  d: "M7.45 18.36h9.1a.91.91 0 0 0 0-1.81h-9.1a.91.91 0 0 0 0 1.81ZM19.27 2H4.73a1.83 1.83 0 0 0-1.82 1.82v5.45a1.83 1.83 0 0 0 1.82 1.82h14.54a1.83 1.83 0 0 0 1.82-1.82V3.82A1.83 1.83 0 0 0 19.27 2Zm0 7.27H4.73V3.82h14.54Z"
}), /*#__PURE__*/React.createElement(external_wp_components_namespaceObject.Path, {
  d: "M7.45 7.45h9.1a.85.85 0 0 0 .9-.9.85.85 0 0 0-.9-.91h-9.1a.85.85 0 0 0-.9.91.85.85 0 0 0 .9.9Z"
}));
;// CONCATENATED MODULE: ./src/blocks/utils/utils.js
/**
 * Gets the string representation of `arg`.
 *
 * @param {*} arg Function argument
 * @return {string} A string representation of `arg`
 */
var repr = function repr(arg) {
  return Object.prototype.toString.call(arg);
};

/**
 * Check if `arg` ia an array.
 *
 * @param {*} arg Function argument.
 * @return {boolean} Returns true if `arg` is an Array else false.
 */
var isArray = function isArray(arg) {
  return Array.isArray ? Array.isArray(arg) : repr(arg) === '[object Array]';
};

/**
 * Checks if `arg` is an object.
 *
 * @param {*} arg Function argument.
 * @return {boolean} Returns true if `arg` is an object.
 */
var isObject = function isObject(arg) {
  return repr(arg) === '[object Object]';
};

/**
 * Checks if `arg` is null.
 *
 * @param {*} arg :: unknown function argument
 * @return {boolean} :: returns true if `arg` is of type Null, false otherwise
 */
var isNull = function isNull(arg) {
  return repr(arg) === '[object Null]';
};

/**
 * Checks if `arg` is undefined.
 *
 * @param {*} arg Function argument
 * @return {boolean} Returns true if `arg` is of type Undefined, false otherwise
 */
var isUndefined = function isUndefined(arg) {
  try {
    return typeof arg === 'undefined';
  } catch (e) {
    if (e instanceof ReferenceError) {
      return true;
    }
    throw e;
  }
};

/**
 * Checks if `arg` is a string.
 *
 * @param {*} arg Function argument
 * @return {boolean} Returns true if `arg` is a String, false otherwise
 */
var isString = function isString(arg) {
  return repr(arg) === '[object String]';
};

/**
 * Checks if `arg` is an empty string, array, or object.
 *
 * @param {*} arg Function argument
 * @return {boolean} Returns true if `arg` is an empty string,
 *  array, or object. Also returns true is `arg` is null or
 *  undefined. Returns true otherwise.
 */
var isEmpty = function isEmpty(arg) {
  return isUndefined(arg) || isNull(arg) || isString(arg) && arg.length === 0 || isArray(arg) && arg.length === 0 || isObject(arg) && Object.keys(arg).length === 0;
};

/**
 * Uppercase first letter.
 *
 * @param {string} string String argument
 * @return {string} String with uppercase first letter.
 */
var ucFirst = function ucFirst(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
};
var getSiblings = function getSiblings(el) {
  if (el.parentNode === null) return [];
  return Array.from(el.parentNode.children).filter(function (child) {
    return child !== el;
  });
};
;// CONCATENATED MODULE: ./src/blocks/utils/css/meets-conditions.js
/* harmony default export */ const meets_conditions = (function (settings, selectData) {
  var depends = true;
  if (selectData !== null && selectData !== void 0 && selectData.condition) {
    selectData.condition.forEach(function (data) {
      var previous = depends;
      if (data.relation === '==' || data.relation === '===') {
        if (typeof data.value === 'string' || typeof data.value === 'number' || typeof data.value === 'boolean') {
          depends = settings[data.key] === data.value;
        } else {
          depends = !!data.value.includes(settings[data.key]);
        }
      } else if (data.relation === '!=' || data.relation === '!==') {
        if (typeof data.value === 'string' || typeof data.value === 'number' || typeof data.value === 'boolean') {
          depends = settings[data.key] !== data.value;
        } else {
          var selected = false;
          data.value.forEach(function (arrData) {
            if (settings[data.key] !== arrData) {
              selected = true;
            }
          });
          if (selected) {
            depends = true;
          }
        }
      }
      if (previous === false) {
        depends = false;
      }
    });
  }
  return depends;
});
;// CONCATENATED MODULE: ./src/blocks/utils/css/replace-placeholders.js

/* harmony default export */ const replace_placeholders = (function (str, placeholders) {
  Object.entries(placeholders).forEach(function (_ref) {
    var _ref2 = slicedToArray_slicedToArray(_ref, 2),
      tag = _ref2[0],
      value = _ref2[1];
    str = str.replaceAll("{{".concat(tag, "}}"), value);
  });
  return str;
});
;// CONCATENATED MODULE: ./src/blocks/constants/index.js

var DEVICES = {
  desktop: (0,external_wp_i18n_namespaceObject.__)('Desktop', 'blockart'),
  tablet: (0,external_wp_i18n_namespaceObject.__)('Tablet', 'blockart'),
  mobile: (0,external_wp_i18n_namespaceObject.__)('Mobile', 'blockart')
};
var DIMENSIONS_PROPERTIES = {
  top: (0,external_wp_i18n_namespaceObject.__)('Top', 'blockart'),
  right: (0,external_wp_i18n_namespaceObject.__)('Right', 'blockart'),
  bottom: (0,external_wp_i18n_namespaceObject.__)('Bottom', 'blockart'),
  left: (0,external_wp_i18n_namespaceObject.__)('Left', 'blockart')
};
;// CONCATENATED MODULE: ./src/blocks/utils/css/border-css.js



/* harmony default export */ const border_css = (function (props) {
  var settingValue = props.settingValue,
    settingDef = props.settingDef,
    blockName = props.blockName,
    blockID = props.blockID;
  var styles = settingDef === null || settingDef === void 0 ? void 0 : settingDef.style;
  settingValue = Object.assign({}, {
    type: 'none',
    size: {},
    radius: {},
    color: ''
  }, settingValue);
  var css = {
    allDevice: [],
    desktop: [],
    tablet: [],
    mobile: []
  };
  var tempCSS = {
    allDevice: [],
    desktop: [],
    tablet: [],
    mobile: []
  };
  var tempAllDeviceCSS = '';
  if (!styles) {
    return css;
  }
  styles.forEach(function (style) {
    if (!meets_conditions(props.settings, style)) {
      return;
    }
    var selector = replace_placeholders(style.selector, {
      WRAPPER: ".blockart-".concat(blockName, "-").concat(blockID)
    });
    if ('none' !== settingValue.type) {
      tempAllDeviceCSS += "".concat(settingValue.color ? "border-color: ".concat(settingValue.color, ";") : '', " border-style: ").concat(settingValue.type, ";");
      tempCSS.desktop.push(tempAllDeviceCSS);
      if (settingValue.size) {
        Object.keys(DEVICES).forEach(function (device) {
          if (!settingValue.size[device]) {
            return;
          }
          if ('undefined' === typeof settingValue.size[device].right && 'undefined' === typeof settingValue.size[device].top && 'undefined' === typeof settingValue.size[device].bottom && 'undefined' === typeof settingValue.size[device].left) {
            return;
          }
          var unit = settingValue.size[device].unit || 'px';
          var top = settingValue.size[device].top || 0;
          var right = settingValue.size[device].right || 0;
          var bottom = settingValue.size[device].bottom || 0;
          var left = settingValue.size[device].left || 0;
          tempCSS[device].push("border-width: ".concat(top).concat(unit, " ").concat(right).concat(unit, " ").concat(bottom).concat(unit, " ").concat(left).concat(unit, ";"));
        });
      }
    }
    if (settingValue.radius) {
      Object.keys(DEVICES).forEach(function (device) {
        if (!settingValue.radius[device]) {
          return;
        }
        if ('undefined' === typeof settingValue.radius[device].right && 'undefined' === typeof settingValue.radius[device].top && 'undefined' === typeof settingValue.radius[device].bottom && 'undefined' === typeof settingValue.radius[device].left) {
          return;
        }
        var unit = settingValue.radius[device].unit || 'px';
        var top = settingValue.radius[device].top || 0;
        var right = settingValue.radius[device].right || 0;
        var bottom = settingValue.radius[device].bottom || 0;
        var left = settingValue.radius[device].left || 0;
        tempCSS[device].push("border-radius: ".concat(top).concat(unit, " ").concat(right).concat(unit, " ").concat(bottom).concat(unit, " ").concat(left).concat(unit, ";"));
      });
    }
    Object.keys(css).forEach(function (type) {
      if (tempCSS[type].length > 0) {
        css[type].push("".concat(selector, "{ ").concat(tempCSS[type].join(''), " }"));
      }
    });
  });
  return css;
});
;// CONCATENATED MODULE: ./src/blocks/utils/css/dimension-css.js



/* harmony default export */ const dimension_css = (function (props) {
  var settingValue = props.settingValue,
    settingDef = props.settingDef,
    blockName = props.blockName,
    blockID = props.blockID;
  var styles = settingDef === null || settingDef === void 0 ? void 0 : settingDef.style;
  var css = {
    allDevice: [],
    desktop: [],
    tablet: [],
    mobile: []
  };
  if (!styles) {
    return css;
  }
  styles.forEach(function (style) {
    if (!meets_conditions(props.settings, style)) {
      return;
    }
    var selector = replace_placeholders(style.selector, {
      WRAPPER: ".blockart-".concat(blockName, "-").concat(blockID)
    });
    if (settingValue) {
      if (Object.keys(settingValue).some(function (v) {
        return Object.keys(DEVICES).includes(v);
      })) {
        Object.keys(DEVICES).forEach(function (device) {
          if (!settingValue[device]) {
            return;
          }
          if (!Object.keys(settingValue[device]).some(function (v) {
            return ['top', 'right', 'bottom', 'left', 'unit'].includes(v);
          })) {
            return;
          }
          var unit = settingValue[device].unit || 'px';
          var top = settingValue[device].top || 0;
          var right = settingValue[device].right || 0;
          var bottom = settingValue[device].bottom || 0;
          var left = settingValue[device].left || 0;
          css[device].push(replace_placeholders(selector, {
            VALUE: "".concat(top).concat(unit, " ").concat(right).concat(unit, " ").concat(bottom).concat(unit, " ").concat(left).concat(unit)
          }));
        });
      } else {
        if (!Object.keys(settingValue).some(function (v) {
          return ['top', 'right', 'bottom', 'left', 'unit'].includes(v);
        })) {
          return;
        }
        var unit = settingValue.unit || 'px';
        var top = settingValue.top || 0;
        var right = settingValue.right || 0;
        var bottom = settingValue.bottom || 0;
        var left = settingValue.left || 0;
        css.allDevice.push(replace_placeholders(selector, {
          VALUE: "".concat(top).concat(unit, " ").concat(right).concat(unit, " ").concat(bottom).concat(unit, " ").concat(left).concat(unit)
        }));
      }
    }
  });
  return css;
});
;// CONCATENATED MODULE: ./src/blocks/utils/css/background-css.js



var backgroundImageCSS = function backgroundImageCSS() {
  var _data$image;
  var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var cssForDevices = {
    allDevice: [],
    desktop: [],
    tablet: [],
    mobile: []
  };
  if (data !== null && data !== void 0 && (_data$image = data.image) !== null && _data$image !== void 0 && _data$image.url) {
    cssForDevices.desktop.push('background-image: url(' + data.image.url + ');');
  }
  if (data.attachment && 'default' !== data.attachment) {
    cssForDevices.desktop.push('background-attachment: ' + data.attachment + ';');
  }
  Object.keys(DEVICES).forEach(function (device) {
    var customSizeKey = 'customSize' + (device.charAt(0).toUpperCase() + device.slice(1));
    if (data.position && data.position[device] && 'default' !== data.position[device]) {
      cssForDevices[device].push("background-position: ".concat(data.position[device], ";"));
    }
    if (data.repeat && data.repeat[device] && 'default' !== data.repeat[device]) {
      cssForDevices[device].push("background-repeat: ".concat(data.repeat[device], ";"));
    }
    if (data.size && data.size[device] && 'default' !== data.size[device]) {
      if ('custom' !== data.size[device]) {
        cssForDevices[device].push("background-size: ".concat(data.size[device], ";"));
      }
      if ('custom' === data.size[device] && data[customSizeKey]) {
        cssForDevices[device].push("background-size: ".concat(data[customSizeKey].value + (data[customSizeKey].unit || ''), " auto;"));
      }
    }
  });
  return cssForDevices;
};
/* harmony default export */ const background_css = (function (props) {
  var settingValue = props.settingValue,
    settingDef = props.settingDef,
    blockName = props.blockName,
    blockID = props.blockID;
  var styles = settingDef === null || settingDef === void 0 ? void 0 : settingDef.style;
  var css = {
    allDevice: [],
    desktop: [],
    tablet: [],
    mobile: []
  };
  if (!styles) {
    return css;
  }
  styles.forEach(function (style) {
    if (!meets_conditions(props.settings, style)) {
      return;
    }
    var selector = replace_placeholders(style.selector, {
      WRAPPER: ".blockart-".concat(blockName, "-").concat(blockID)
    });
    settingValue.type = settingValue.type || 'color';
    var imageData = backgroundImageCSS(settingValue.image) || css;
    if (settingValue.color) {
      imageData.desktop.push("background-color: ".concat(settingValue.color, ";"));
    }
    Object.keys(css).forEach(function (type) {
      if (imageData[type].length > 0) {
        css[type].push("".concat(selector, "{ ").concat(imageData[type].join(''), " }"));
      }
    });
  });
  return css;
});
;// CONCATENATED MODULE: ./src/blocks/utils/css/box-shadow-css.js


/* harmony default export */ const box_shadow_css = (function (props) {
  var settingValue = props.settingValue,
    settingDef = props.settingDef,
    blockName = props.blockName,
    blockID = props.blockID;
  settingValue = Object.assign({}, {
    position: 'outline',
    horizontalX: 0,
    verticalY: 0,
    blur: 10,
    spread: 0,
    color: 'rgba(0,0,0, 0.5)'
  }, settingValue);
  var styles = settingDef === null || settingDef === void 0 ? void 0 : settingDef.style;
  var css = {
    allDevice: [],
    desktop: [],
    tablet: [],
    mobile: []
  };
  if (!styles || !settingValue.enable) {
    return css;
  }
  styles.forEach(function (style) {
    if (!meets_conditions(props.settings, style)) {
      return;
    }
    var selector = replace_placeholders(style.selector, {
      WRAPPER: ".blockart-".concat(blockName, "-").concat(blockID)
    });
    css.allDevice.push(selector + '{ box-shadow:' + (settingValue.position && 'inset' === settingValue.position ? settingValue.position : '') + ' ' + (settingValue.horizontalX ? settingValue.horizontalX : 0) + 'px ' + (settingValue.verticalY ? settingValue.verticalY : 0) + 'px ' + (settingValue.blur ? settingValue.blur : 0) + 'px ' + (settingValue.spread ? settingValue.spread : 0) + 'px ' + (settingValue.color || '#000') + '; }');
  });
  return css;
});
;// CONCATENATED MODULE: ./src/blocks/utils/css/advanced-css.js


/* harmony default export */ const advanced_css = (function (props) {
  var settingValue = props.settingValue,
    settingDef = props.settingDef,
    blockName = props.blockName,
    blockID = props.blockID,
    context = props.context;
  var styles = settingDef === null || settingDef === void 0 ? void 0 : settingDef.style;
  var css = {
    allDevice: [],
    desktop: [],
    tablet: [],
    mobile: []
  };
  if (!styles) {
    return css;
  }
  styles.forEach(function (style) {
    if (!meets_conditions(props.settings, style)) {
      return;
    }
    var selector = replace_placeholders(style.selector, {
      WRAPPER: ".blockart-".concat(blockName, "-").concat(blockID)
    });
    if (settingValue && 'save' === context) {
      css.allDevice.push(selector);
    }
  });
  return css;
});
;// CONCATENATED MODULE: ./src/blocks/utils/css/general-css.js




/* harmony default export */ const general_css = (function (props) {
  var settingValue = props.settingValue,
    settingDef = props.settingDef,
    blockName = props.blockName,
    blockID = props.blockID;
  var styles = settingDef === null || settingDef === void 0 ? void 0 : settingDef.style;
  var css = {
    allDevice: [],
    desktop: [],
    tablet: [],
    mobile: []
  };
  if (!styles) {
    return css;
  }
  styles.forEach(function (style) {
    if (!meets_conditions(props.settings, style)) {
      return;
    }
    var selector = replace_placeholders(style.selector, {
      WRAPPER: ".blockart-".concat(blockName, "-").concat(blockID)
    });
    if ('object' === typeof_typeof(settingValue) && settingValue) {
      if (['desktop', 'tablet', 'mobile'].some(function (d) {
        return Object.keys(settingValue).includes(d);
      })) {
        Object.keys(DEVICES).forEach(function (device) {
          if (settingValue[device]) {
            if ('object' === typeof_typeof(settingValue[device])) {
              if (settingValue[device].value) {
                css[device].push(replace_placeholders(selector, {
                  VALUE: settingValue[device].value + settingValue[device].unit || 'px'
                }));
              }
            } else {
              css[device].push(replace_placeholders(selector, {
                VALUE: settingValue[device]
              }));
            }
          }
        });
      } else {
        var _ref, _settingValue$value;
        css.allDevice.push(replace_placeholders(selector, {
          VALUE: (_ref = ((_settingValue$value = settingValue === null || settingValue === void 0 ? void 0 : settingValue.value) !== null && _settingValue$value !== void 0 ? _settingValue$value : 0) + (settingValue === null || settingValue === void 0 ? void 0 : settingValue.unit)) !== null && _ref !== void 0 ? _ref : 'px'
        }));
      }
    } else if (settingValue) {
      css.allDevice.push(replace_placeholders(selector, {
        VALUE: settingValue
      }));
    }
  });
  return css;
});
;// CONCATENATED MODULE: ./src/blocks/utils/css/typography-css.js



/* harmony default export */ const typography_css = (function (props) {
  var settingValue = props.settingValue,
    settingDef = props.settingDef,
    blockName = props.blockName,
    blockID = props.blockID;
  var styles = settingDef === null || settingDef === void 0 ? void 0 : settingDef.style;
  var css = {
      allDevice: [],
      desktop: [],
      tablet: [],
      mobile: []
    },
    tempCSS = {
      allDevice: [],
      desktop: [],
      tablet: [],
      mobile: []
    };
  var font = '';
  if (!styles) {
    return css;
  }
  styles.forEach(function (style) {
    if (!meets_conditions(props.settings, style)) {
      return;
    }
    var selector = replace_placeholders(style.selector, {
      WRAPPER: ".blockart-".concat(blockName, "-").concat(blockID)
    });
    if (settingValue.family && settingValue.family !== 'Default') {
      font += "@import url('https://fonts.googleapis.com/css?family=".concat(settingValue.family.replace(' ', '+'), ":").concat(settingValue.weight || 400, "&display=swap');");
      tempCSS.desktop.push("font-family: ".concat(settingValue.family, ", ").concat(settingValue.type || 'sans-serif', ";"));
    }
    if (settingValue.weight) {
      tempCSS.desktop.push("font-weight: ".concat(settingValue.weight, ";"));
    }
    if (settingValue.transform && 'default' !== settingValue.transform) {
      tempCSS.desktop.push("text-transform: ".concat(settingValue.transform, ";"));
    }
    if (settingValue.decoration && 'default' !== settingValue.decoration) {
      tempCSS.desktop.push("text-decoration: ".concat(settingValue.decoration, ";"));
    }
    Object.keys(DEVICES).forEach(function (device) {
      if (settingValue.size && settingValue.size[device]) {
        if (settingValue.size[device].value) {
          tempCSS[device].push("font-size: ".concat(settingValue.size[device].value).concat(settingValue.size[device].unit || 'px', ";"));
        }
      }
      if (settingValue.lineHeight && settingValue.lineHeight[device]) {
        if (settingValue.lineHeight[device].value) {
          tempCSS[device].push("line-height: ".concat(settingValue.lineHeight[device].value).concat(settingValue.lineHeight[device].unit || 'px', ";"));
        }
      }
      if (settingValue.letterSpacing && settingValue.letterSpacing[device]) {
        if (settingValue.letterSpacing[device].value) {
          tempCSS[device].push("letter-spacing: ".concat(settingValue.letterSpacing[device].value).concat(settingValue.letterSpacing[device].unit || 'px'));
        }
      }
    });
    Object.keys(css).forEach(function (type) {
      if (tempCSS[type].length > 0) {
        css[type].push("".concat(selector, "{ ").concat(tempCSS[type].join(''), " }"));
      }
    });
    if (font) {
      css.allDevice.unshift(font);
    }
  });
  return css;
});
;// CONCATENATED MODULE: ./src/blocks/utils/css/generate-block-css.js


function generate_block_css_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function generate_block_css_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? generate_block_css_ownKeys(Object(source), !0).forEach(function (key) { defineProperty_defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : generate_block_css_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }








var settingStyleGenerators = {
  empty: function empty() {
    return {
      allDevice: [],
      desktop: [],
      tablet: [],
      mobile: []
    };
  },
  border: function border(props) {
    return border_css(props);
  },
  dimension: function dimension(props) {
    return dimension_css(props);
  },
  background: function background(props) {
    return background_css(props);
  },
  boxShadow: function boxShadow(props) {
    return box_shadow_css(props);
  },
  typography: function typography(props) {
    return typography_css(props);
  },
  advanced: function advanced(props) {
    return advanced_css(props);
  },
  general: function general(props) {
    return general_css(props);
  }
};
var getSettingStyleGenerator = function getSettingStyleGenerator(settingName, settingValue) {
  if (settingValue !== null && settingValue !== void 0 && settingValue.border) {
    return settingStyleGenerators.border;
  } else if (settingValue !== null && settingValue !== void 0 && settingValue.background) {
    return settingStyleGenerators.background;
  } else if (settingValue !== null && settingValue !== void 0 && settingValue.typography) {
    return settingStyleGenerators.typography;
  } else if (settingValue !== null && settingValue !== void 0 && settingValue.boxShadow) {
    return settingStyleGenerators.boxShadow;
  } else if (settingValue !== null && settingValue !== void 0 && settingValue.dimension) {
    return settingStyleGenerators.dimension;
  } else if (['hideOnDesktop', 'hideOnTablet', 'hideOnMobile', 'colReverseOnTablet', 'colReverseOnMobile'].includes(settingName)) {
    return settingStyleGenerators.advanced;
  }
  return settingStyleGenerators.general;
};
/* harmony default export */ const generate_block_css = (function (_ref) {
  var settings = _ref.settings,
    blockName = _ref.blockName,
    blockID = _ref.blockID,
    _ref$deviceType = _ref.deviceType,
    deviceType = _ref$deviceType === void 0 ? 'desktop' : _ref$deviceType,
    _ref$context = _ref.context,
    context = _ref$context === void 0 ? 'editor' : _ref$context;
  if (!blockID) {
    return '';
  }
  var cssForDevices = {
    allDevice: [],
    desktop: [],
    tablet: [],
    mobile: []
  };
  var attributesDef = (0,external_wp_blocks_namespaceObject.getBlockType)('blockart/' + ('button' === blockName ? 'button-inner' : 'buttons' === blockName ? 'button' : blockName)).attributes;
  var defaultSettings = Object.entries(attributesDef).reduce(function (acc, _ref2) {
    var _ref3 = slicedToArray_slicedToArray(_ref2, 2),
      key = _ref3[0],
      value = _ref3[1];
    if (value !== null && value !== void 0 && value["default"]) {
      acc[key] = value["default"];
    }
    return acc;
  }, {});
  Object.entries(settings).forEach(function (_ref4) {
    var _ref5 = slicedToArray_slicedToArray(_ref4, 2),
      settingName = _ref5[0],
      settingValue = _ref5[1];
    var attributeDef = attributesDef[settingName];
    var settingStyle = attributeDef === null || attributeDef === void 0 ? void 0 : attributeDef.style;
    if (!settingStyle) {
      return;
    }
    var settingStyleGenerator = getSettingStyleGenerator(settingName, settingValue);
    if (!settingStyleGenerator) {
      return;
    }
    var settingCSSForDevices = settingStyleGenerator({
      blockID: blockID,
      settingDef: attributeDef,
      settingName: settingName,
      settingValue: settingValue,
      settings: generate_block_css_objectSpread(generate_block_css_objectSpread({}, defaultSettings), settings),
      blockName: blockName,
      context: context
    });
    cssForDevices.allDevice = cssForDevices.allDevice.concat(settingCSSForDevices.allDevice);
    cssForDevices.desktop = cssForDevices.desktop.concat(settingCSSForDevices.desktop);
    cssForDevices.tablet = cssForDevices.tablet.concat(settingCSSForDevices.tablet);
    cssForDevices.mobile = cssForDevices.mobile.concat(settingCSSForDevices.mobile);
  });
  if (cssForDevices.allDevice.length > 0) {
    cssForDevices.allDevice.forEach(function (str, index) {
      if (str.includes('@import')) {
        cssForDevices.allDevice.splice(index, 1);
        if ('editor' === context) {
          cssForDevices.allDevice.unshift(str);
        }
      }
    });
  }
  if (context === 'editor') {
    var css = cssForDevices.allDevice.join('');
    css += cssForDevices.desktop.join('');
    if (!_BLOCKART_.isNotPostEditor) {
      if ('desktop' !== deviceType) {
        css += cssForDevices.tablet.join('');
      }
      if ('mobile' === deviceType) {
        css += cssForDevices.mobile.join('');
      }
    }
    return css;
  }
  return cssForDevices;
});
;// CONCATENATED MODULE: ./src/blocks/utils/css/index.js

;// CONCATENATED MODULE: ./src/blocks/utils/index.js



;// CONCATENATED MODULE: ./src/blocks/components/icon/index.js


var _excluded = ["type", "name", "className", "size"];
function icon_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function icon_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? icon_ownKeys(Object(source), !0).forEach(function (key) { defineProperty_defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : icon_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }





var controlIcons = ['text-align-left', 'text-align-right', 'orientation-horizontal', 'orientation-vertical', 'text-align-center', 'text-align-justify', 'align-top', 'align-middle', 'align-bottom', 'align-space-between', 'align-space-around', 'align-center', 'align-left', 'align-right', 'align-stretch', 'chevron-down', 'chevron-up', 'question-mark', 'remove-o', 'toggle-off', 'toggle-on', 'un-link', 'chevron-up-circle', 'chevron-down-circle', 'cog', 'color', 'desktop', 'gradient', 'image', 'link', 'lock', 'mobile', 'tablet', 'play', 'reset', 'star', 'upload', 'video', 'pencil', 'trash', 'filled', 'outline', 'plain', 'paste', 'copy', 'link-o'];
var frontendIcons = ['arrow-down', 'arrow-left', 'arrow-right', 'arrow-up', 'bars-o', 'cart-o', 'chevron-down', 'chevron-left', 'chevron-right', 'chevron-up', 'envelope-o', 'eye-o', 'instagram-o', 'map-marker-o', 'phone-o', 'paper-plane-o', 'quote-left', 'quote-right', 'recorder-o', 'remove-o', 'search-minus', 'search-o', 'send-o', 'thumbs-up-o', 'time-o', 'user-o', 'youtube-play', 'bar', 'behance', 'blogger', 'check', 'close', 'codeopen', 'cog', 'delicious', 'devianart', 'dribble', 'facebook', 'linkedin', 'medium', 'minus', 'pencil', 'pinterest', 'plus', 'quora', 'reddit', 'reply', 'rss', 'tumblr', 'twitch', 'twitter', 'vimeo', 'wordpress', 'yelp'];
var blockIcons = ['icon-list', 'social-icons', 'info-box', 'button', 'carousel', 'counter', 'divider', 'faq', 'form', 'map', 'heading', 'icon', 'image', 'paragraph', 'rating', 'section', 'spacing', 'teams', 'testimonial', 'video', 'column', 'buttons'];
/* harmony default export */ const components_icon = (function (_ref) {
  var type = _ref.type,
    name = _ref.name,
    _ref$className = _ref.className,
    className = _ref$className === void 0 ? '' : _ref$className,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? 24 : _ref$size,
    otherProps = _objectWithoutProperties(_ref, _excluded);
  if (!name || !type || ![].concat(frontendIcons, blockIcons, controlIcons).includes(name)) {
    return null;
  }
  var icon = name.split('-').map(function (n, idx) {
    return 0 === idx ? n : ucFirst(n);
  }).join('');
  if (!icons_namespaceObject[icon]) {
    return null;
  }
  var appliedProps = icon_objectSpread(icon_objectSpread({
    width: size,
    height: size
  }, icons_namespaceObject[icon].props), {}, {
    className: classnames_default()('blockart-icon', className)
  }, otherProps);
  return (0,external_wp_element_namespaceObject.createElement)(external_wp_components_namespaceObject.SVG, appliedProps);
});
;// CONCATENATED MODULE: ./src/blocks/hooks/use-click-outside.js


/**
 * useClickOutside custom hook.
 *
 * @callback callback
 * @param {Object} elRef Element reference.
 * @param {callback} callback Function callback.
 * @param {Object|null} extraElRef Element reference.
 */
/* harmony default export */ const use_click_outside = (function (elRef, callback) {
  var extraElRef = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
  var callbackRef = (0,external_wp_element_namespaceObject.useRef)();
  callbackRef.current = callback;
  (0,external_wp_element_namespaceObject.useEffect)(function () {
    var handleClickOutside = function handleClickOutside(e) {
      if (!document.body.contains(elRef.current) || !elRef.current || elRef.current.contains(e.target) || !callbackRef.current || null !== extraElRef && extraElRef.current.contains(e.target)) {
        return;
      }
      callbackRef.current(e);
    };
    document.addEventListener('click', handleClickOutside, true);
    return function () {
      document.removeEventListener('click', handleClickOutside, true);
    };
  }, [callbackRef, elRef]);
});
;// CONCATENATED MODULE: ./src/blocks/hooks/use-local-storage.js


/* harmony default export */ const use_local_storage = (function (keyName, defaultValue) {
  var eventName = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
  var _useState = (0,external_wp_element_namespaceObject.useState)(function () {
      try {
        var value = window.localStorage.getItem(keyName);
        if (value) {
          return JSON.parse(value);
        }
        window.localStorage.setItem(keyName, JSON.stringify(defaultValue));
        return defaultValue;
      } catch (err) {
        return defaultValue;
      }
    }),
    _useState2 = slicedToArray_slicedToArray(_useState, 2),
    storedValue = _useState2[0],
    setStoredValue = _useState2[1];
  var setValue = function setValue(newValue) {
    try {
      window.localStorage.setItem(keyName, JSON.stringify(newValue));
    } catch (err) {}
    setStoredValue(newValue);
    window.dispatchEvent(new Event(eventName !== null && eventName !== void 0 ? eventName : keyName));
  };
  return [storedValue, setValue];
});
;// CONCATENATED MODULE: ./src/blocks/hooks/use-session-storage.js


/* harmony default export */ const use_session_storage = (function (keyName, defaultValue) {
  var _useState = (0,external_wp_element_namespaceObject.useState)(function () {
      try {
        var value = window.sessionStorage.getItem(keyName);
        if (value) {
          return JSON.parse(value);
        }
        window.sessionStorage.setItem(keyName, JSON.stringify(defaultValue));
        return defaultValue;
      } catch (err) {
        return defaultValue;
      }
    }),
    _useState2 = slicedToArray_slicedToArray(_useState, 2),
    storedValue = _useState2[0],
    setStoredValue = _useState2[1];
  var setValue = function setValue(newValue) {
    try {
      window.sessionStorage.setItem(keyName, JSON.stringify(newValue));
    } catch (err) {}
    setStoredValue(newValue);
    window.dispatchEvent(new Event(keyName));
  };
  return [storedValue, setValue];
});
;// CONCATENATED MODULE: ./src/blocks/hooks/use-portal.js


/* harmony default export */ const use_portal = (function (element) {
  var _useState = useState({
      render: function render() {
        return null;
      },
      remove: function remove() {
        return null;
      }
    }),
    _useState2 = _slicedToArray(_useState, 2),
    portal = _useState2[0],
    setPortal = _useState2[1];
  var makePortal = useCallback(function (el) {
    var Portal = function Portal(_ref) {
      var children = _ref.children;
      return createPortal(children, el);
    };
    var remove = function remove() {
      return unmountComponentAtNode(el);
    };
    return {
      render: Portal,
      remove: remove
    };
  }, []);
  useEffect(function () {
    if (element) portal.remove();
    var newPortal = makePortal(element);
    setPortal(newPortal);
    return function () {
      newPortal.remove(element);
    };
  }, [element]);
  return portal.render;
});
;// CONCATENATED MODULE: ./src/blocks/hooks/use-block-style.js


/* harmony default export */ const use_block_style = (function (_ref) {
  var clientId = _ref.clientId,
    blockName = _ref.blockName,
    deviceType = _ref.deviceType,
    attributes = _ref.attributes;
  return (0,external_wp_element_namespaceObject.useMemo)(function () {
    var _wp;
    var css = generate_block_css({
      settings: attributes,
      blockName: blockName,
      blockID: clientId,
      deviceType: deviceType
    });
    if ('customize' === window.pagenow && (_wp = wp) !== null && _wp !== void 0 && _wp.customize) {
      var injectStyle = function injectStyle() {
        var doc = wp.customize.previewer.targetWindow().document;
        if (doc) {
          var style = Object.assign(document.createElement('style'), {
            id: "blockart-".concat(blockName, "-").concat(clientId, "-css"),
            innerHTML: css
          });
          var styleEl = doc.getElementById("blockart-".concat(blockName, "-").concat(clientId, "-css"));
          if (styleEl) {
            styleEl.remove();
          }
          doc.head.appendChild(style);
        }
      };
      injectStyle(); // For instant live preview.
      wp.customize.previewer.bind('ready', injectStyle); // If preview iframe is refreshed.
    }

    return function () {
      if (!clientId || !css) return null;
      return /*#__PURE__*/React.createElement("style", null, css);
    };
  }, [clientId, blockName, deviceType, attributes]);
});
;// CONCATENATED MODULE: ./src/blocks/hooks/index.js





;// CONCATENATED MODULE: ./src/blocks/hoc/with-copy-paste-styles.js





function with_copy_paste_styles_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function with_copy_paste_styles_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? with_copy_paste_styles_ownKeys(Object(source), !0).forEach(function (key) { defineProperty_defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : with_copy_paste_styles_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }









var IGNORED_ATTRIBUTES_FOR_COPY_PASTE_STYLES = ['clientId', 'className', 'cssID', 'text', 'link', 'icon', 'hasModal', 'modalOnly', 'columns', 'childRow', 'markup', 'blockCSS', 'image', 'alt1', 'alt2', 'colWidth'];
/* harmony default export */ const with_copy_paste_styles = ((0,external_wp_compose_namespaceObject.createHigherOrderComponent)(function (Component) {
  return function (props) {
    var forceUpdate = (0,external_wp_element_namespaceObject.useState)()[1].bind(null, {});
    var _useLocalStorage = use_local_storage('_blockart_copied_styles', []),
      _useLocalStorage2 = slicedToArray_slicedToArray(_useLocalStorage, 2),
      copiedStyles = _useLocalStorage2[0],
      setCopiedStyles = _useLocalStorage2[1];
    copiedStyles = new Map(copiedStyles);
    (0,external_wp_element_namespaceObject.useEffect)(function () {
      var _dispatch = (0,external_wp_data_namespaceObject.dispatch)('core/keyboard-shortcuts'),
        registerShortcut = _dispatch.registerShortcut,
        unregisterShortcut = _dispatch.unregisterShortcut;
      registerShortcut({
        name: 'blockart/copy-styles',
        category: 'block',
        description: (0,external_wp_i18n_namespaceObject.__)('Copy block styles', 'blockart'),
        keyCombination: {
          modifier: 'ctrl',
          character: 'c'
        }
      });
      registerShortcut({
        name: 'blockart/paste-styles',
        category: 'block',
        description: (0,external_wp_i18n_namespaceObject.__)('Paste block styles', 'blockart'),
        keyCombination: {
          modifier: 'primaryAlt',
          character: 'v'
        }
      });
      var button = copiedStyles.get('blockart/button');
      if (button !== null && button !== void 0 && button.style) {
        copiedStyles["delete"]('blockart/button');
        copiedStyles.set('blockart/button-inner', button);
        setCopiedStyles(_toConsumableArray(copiedStyles.entries()));
      }
      return function () {
        unregisterShortcut('blockart/copy-styles');
        unregisterShortcut('blockart/paste-styles');
      };
    }, []);
    var _useSelect = (0,external_wp_data_namespaceObject.useSelect)(function (selector) {
        var _selector = selector('core/keyboard-shortcuts'),
          getAllShortcutKeyCombinations = _selector.getAllShortcutKeyCombinations,
          getAllShortcutRawKeyCombinations = _selector.getAllShortcutRawKeyCombinations;
        var _selector2 = selector('core/block-editor'),
          getSelectedBlockClientId = _selector2.getSelectedBlockClientId,
          getBlockAttributes = _selector2.getBlockAttributes,
          getBlockName = _selector2.getBlockName;
        return {
          allShortcutKeys: getAllShortcutKeyCombinations || getAllShortcutRawKeyCombinations,
          clientId: getSelectedBlockClientId(),
          getAttributes: getBlockAttributes,
          blockName: getSelectedBlockClientId() && getBlockName(getSelectedBlockClientId())
        };
      }, []),
      allShortcutKeys = _useSelect.allShortcutKeys,
      clientId = _useSelect.clientId,
      getAttributes = _useSelect.getAttributes,
      blockName = _useSelect.blockName;
    var copyStyles = function copyStyles() {
      var _getAttributes;
      var styles = {};
      var attributes = (_getAttributes = getAttributes(clientId)) !== null && _getAttributes !== void 0 ? _getAttributes : {};
      for (var _i = 0, _Object$keys = Object.keys(attributes); _i < _Object$keys.length; _i++) {
        var attribute = _Object$keys[_i];
        if (!IGNORED_ATTRIBUTES_FOR_COPY_PASTE_STYLES.includes(attribute)) {
          styles[attribute] = attributes[attribute];
        }
      }
      copiedStyles.set(blockName, styles);
      setCopiedStyles(_toConsumableArray(copiedStyles.entries()));
      forceUpdate();
    };
    var pasteStyles = function pasteStyles() {
      var _dispatch2 = (0,external_wp_data_namespaceObject.dispatch)('core/block-editor'),
        updateBlockAttributes = _dispatch2.updateBlockAttributes;
      var styles = copiedStyles.get(blockName);
      if (styles) {
        updateBlockAttributes(clientId, with_copy_paste_styles_objectSpread({}, styles));
      }
    };
    var isMatch = function isMatch(name, event) {
      return allShortcutKeys(name).some(function (_ref) {
        var modifier, character;
        if ('object' === typeof_typeof(_ref)) {
          modifier = _ref === null || _ref === void 0 ? void 0 : _ref.modifier;
          character = _ref === null || _ref === void 0 ? void 0 : _ref.character;
        } else if ('string' === typeof _ref) {
          if ('ctrl+c' === _ref) {
            modifier = 'ctrl';
            character = 'c';
          } else if ('ctrl+alt+v' === _ref) {
            modifier = 'primaryAlt';
            character = 'v';
          }
        }
        if (modifier && character) {
          return external_wp_keycodes_namespaceObject.isKeyboardEvent[modifier](event, character);
        }
        return false;
      });
    };
    (0,external_wp_keyboardShortcuts_namespaceObject.useShortcut)('blockart/copy-styles', (0,external_wp_element_namespaceObject.useCallback)(function (event) {
      if (blockName !== null && blockName !== void 0 && blockName.includes('blockart') && isMatch('blockart/copy-styles', event)) {
        copyStyles(getAttributes(clientId));
      }
    }, [copyStyles, clientId, blockName]), {
      bindGlobal: true,
      eventName: 'keydown'
    });
    (0,external_wp_keyboardShortcuts_namespaceObject.useShortcut)('blockart/paste-styles', (0,external_wp_element_namespaceObject.useCallback)(function (event) {
      if (blockName !== null && blockName !== void 0 && blockName.includes('blockart') && isMatch('blockart/paste-styles', event)) {
        pasteStyles();
      }
    }, [pasteStyles, clientId, blockName]), {
      bindGlobal: true,
      eventName: 'keydown'
    });
    var CopyPasteStylesBlockControl = (0,external_wp_element_namespaceObject.useMemo)(function () {
      return function () {
        return /*#__PURE__*/React.createElement(external_wp_components_namespaceObject.ToolbarGroup, {
          isCollapsed: true,
          icon: /*#__PURE__*/React.createElement(components_icon, {
            type: "controlIcon",
            name: "copy"
          }),
          label: (0,external_wp_i18n_namespaceObject.__)('Copy/Paste Styles', 'blockart'),
          popoverProps: {
            position: 'bottom right'
          },
          controls: [{
            title: /*#__PURE__*/React.createElement("span", null, (0,external_wp_i18n_namespaceObject.__)('Copy Styles Ctrl+C', 'blockart')),
            icon: /*#__PURE__*/React.createElement(components_icon, {
              type: "controlIcon",
              name: "copy"
            }),
            onClick: copyStyles
          }, {
            title: /*#__PURE__*/React.createElement("span", null, (0,external_wp_i18n_namespaceObject.__)('Paste Styles Ctrl+Alt+V', 'blockart')),
            icon: /*#__PURE__*/React.createElement(components_icon, {
              type: "controlIcon",
              name: "paste"
            }),
            onClick: pasteStyles,
            isDisabled: !copiedStyles.get(blockName)
          }]
        });
      };
    }, [copyStyles, pasteStyles, blockName, clientId]);
    return /*#__PURE__*/React.createElement(Component, extends_extends({}, props, {
      copyPasteStylesBlockControl: CopyPasteStylesBlockControl
    }));
  };
}, 'withCopyPasteStyles'));
;// CONCATENATED MODULE: ./src/blocks/hoc/with-device-type.js











/* harmony default export */ const with_device_type = ((0,external_wp_compose_namespaceObject.createHigherOrderComponent)(function (Component) {
  return function (props) {
    var _useSessionStorage = use_session_storage('_blockart_device', 'desktop'),
      _useSessionStorage2 = slicedToArray_slicedToArray(_useSessionStorage, 2),
      device = _useSessionStorage2[0],
      setDevice = _useSessionStorage2[1];
    var store = 'site-editor' === window.pagenow ? 'core/edit-site' : 'core/edit-post';
    var setDeviceType = function setDeviceType(deviceType) {
      var _dispatch, _wp, _wp$customize;
      (_dispatch = (0,external_wp_data_namespaceObject.dispatch)(store)) === null || _dispatch === void 0 ? void 0 : _dispatch.__experimentalSetPreviewDeviceType(ucFirst(deviceType));
      (_wp = wp) === null || _wp === void 0 ? void 0 : (_wp$customize = _wp.customize) === null || _wp$customize === void 0 ? void 0 : _wp$customize.previewedDevice(deviceType);
      setDevice(deviceType);
    };
    var deviceType = (0,external_wp_data_namespaceObject.useSelect)(function (select) {
      var _select$__experimenta, _select, _select$__experimenta2;
      return (_select$__experimenta = (_select = select(store)) === null || _select === void 0 ? void 0 : (_select$__experimenta2 = _select.__experimentalGetPreviewDeviceType()) === null || _select$__experimenta2 === void 0 ? void 0 : _select$__experimenta2.toLowerCase()) !== null && _select$__experimenta !== void 0 ? _select$__experimenta : device;
    }, []);
    (0,external_wp_element_namespaceObject.useEffect)(function () {
      var reset = function reset() {
        return setDevice('desktop');
      };
      window.addEventListener('load', reset);
      return function () {
        window.removeEventListener('load', reset);
      };
    }, []);
    var DeviceSelector = (0,external_wp_element_namespaceObject.useMemo)(function () {
      return function () {
        return /*#__PURE__*/React.createElement("div", {
          className: "blockart-device-selector"
        }, /*#__PURE__*/React.createElement("div", {
          className: "blockart-devices",
          role: "group"
        }, Object.entries(DEVICES).map(function (_ref, idx) {
          var _ref2 = slicedToArray_slicedToArray(_ref, 2),
            deviceKey = _ref2[0],
            deviceValue = _ref2[1];
          return /*#__PURE__*/React.createElement(external_wp_components_namespaceObject.Tooltip, {
            key: deviceKey + idx,
            text: deviceValue,
            position: "top",
            delay: 300
          }, /*#__PURE__*/React.createElement("button", {
            className: classnames_default()('blockart-device', {
              active: deviceKey === deviceType
            }),
            onClick: function onClick() {
              return setDeviceType(deviceKey);
            }
          }, /*#__PURE__*/React.createElement(components_icon, {
            type: "controlIcon",
            name: deviceKey,
            size: 20
          })));
        })));
      };
    }, [deviceType]);
    return /*#__PURE__*/React.createElement(Component, extends_extends({}, props, {
      deviceType: deviceType,
      setDeviceType: setDeviceType,
      deviceSelector: DeviceSelector
    }));
  };
}, 'withDeviceType'));
;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }
  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}
function _asyncToGenerator(fn) {
  return function () {
    var self = this,
      args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);
      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }
      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }
      _next(undefined);
    });
  };
}
;// CONCATENATED MODULE: external "regeneratorRuntime"
const external_regeneratorRuntime_namespaceObject = window["regeneratorRuntime"];
var external_regeneratorRuntime_default = /*#__PURE__*/__webpack_require__.n(external_regeneratorRuntime_namespaceObject);
;// CONCATENATED MODULE: external ["wp","apiFetch"]
const external_wp_apiFetch_namespaceObject = window["wp"]["apiFetch"];
var external_wp_apiFetch_default = /*#__PURE__*/__webpack_require__.n(external_wp_apiFetch_namespaceObject);
;// CONCATENATED MODULE: ./src/blocks/hoc/with-library-data.js






function with_library_data_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function with_library_data_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? with_library_data_ownKeys(Object(source), !0).forEach(function (key) { defineProperty_defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : with_library_data_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }




/* harmony default export */ const with_library_data = ((0,external_wp_compose_namespaceObject.createHigherOrderComponent)(function (Component) {
  return function (props) {
    var _useLocalStorage = use_local_storage('_blockart_library_data', []),
      _useLocalStorage2 = slicedToArray_slicedToArray(_useLocalStorage, 2),
      libraryData = _useLocalStorage2[0],
      setLibraryData = _useLocalStorage2[1];
    var data = new Map(libraryData);
    var updateLibraryData = function updateLibraryData(map) {
      setLibraryData(_toConsumableArray(map.entries()));
    };
    var initLibraryData = function initLibraryData() {
      var refresh = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      _asyncToGenerator( /*#__PURE__*/external_regeneratorRuntime_default().mark(function _callee() {
        var timestamp, expires, response, _JSON$parse, sections, templates;
        return external_regeneratorRuntime_default().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              timestamp = new Date().getTime();
              expires = data.get('expires');
              if (!('success' !== data.get('status') || refresh || expires && timestamp >= expires)) {
                _context.next = 15;
                break;
              }
              updateLibraryData(data.set('status', 'fetching').set('expires', timestamp + 1209600000));
              _context.prev = 4;
              _context.next = 7;
              return external_wp_apiFetch_default()({
                path: "/blockart/v1/library-data?refresh=".concat(refresh),
                method: 'GET'
              });
            case 7:
              response = _context.sent;
              _JSON$parse = JSON.parse(response), sections = _JSON$parse.sections, templates = _JSON$parse.templates;
              updateLibraryData(data.set('sections', sections).set('starter-packs', Object.values(templates)).set('templates', Object.values(templates).reduce(function (acc, curr) {
                acc = [].concat(_toConsumableArray(acc), _toConsumableArray(curr.children.map(function (c) {
                  return with_library_data_objectSpread(with_library_data_objectSpread({}, c), {}, {
                    post_title: curr.post_title + ' ' + c.post_title
                  });
                })));
                return acc;
              }, []).sort(function (a, b) {
                return a.ID - b.ID;
              })).set('status', 'success'));
              _context.next = 15;
              break;
            case 12:
              _context.prev = 12;
              _context.t0 = _context["catch"](4);
              updateLibraryData(data.set('status', 'failed').set('errorMsg', _context.t0.message));
            case 15:
            case "end":
              return _context.stop();
          }
        }, _callee, null, [[4, 12]]);
      }))();
    };
    (0,external_wp_element_namespaceObject.useEffect)(function () {
      initLibraryData();
    }, []);
    return /*#__PURE__*/React.createElement(Component, extends_extends({}, props, {
      libraryData: libraryData,
      initLibraryData: initLibraryData
    }));
  };
}, 'withLibraryData'));
;// CONCATENATED MODULE: ./src/blocks/hoc/index.js




;// CONCATENATED MODULE: ./src/blocks/components/advance-select/index.js







/* harmony default export */ const advance_select = ((0,external_wp_compose_namespaceObject.compose)([external_wp_compose_namespaceObject.withInstanceId, with_device_type])(function (_ref) {
  var id = _ref.instanceId,
    _ref$value = _ref.value,
    value = _ref$value === void 0 ? {} : _ref$value,
    _ref$onChange = _ref.onChange,
    onChange = _ref$onChange === void 0 ? function () {} : _ref$onChange,
    _ref$responsive = _ref.responsive,
    responsive = _ref$responsive === void 0 ? false : _ref$responsive,
    label = _ref.label,
    options = _ref.options,
    _ref$inline = _ref.inline,
    inline = _ref$inline === void 0 ? false : _ref$inline,
    deviceType = _ref.deviceType,
    DeviceSelector = _ref.deviceSelector;
  return /*#__PURE__*/React.createElement("div", {
    className: classnames_default()('blockart-control', 'blockart-advance-select', {
      'blockart-responsive': responsive
    }, {
      'blockart-inline': !responsive && inline
    })
  }, /*#__PURE__*/React.createElement("div", {
    className: "blockart-control-head blockart-advance-select-head"
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: "blockart-advance-select-".concat(id),
    className: "blockart-control-label blockart-advance-select-label"
  }, label), responsive && /*#__PURE__*/React.createElement(DeviceSelector, null)), /*#__PURE__*/React.createElement("div", {
    className: "blockart-control-body blockart-advance-select-body"
  }, /*#__PURE__*/React.createElement("div", {
    className: "blockart-advance-select-items",
    role: "group"
  }, responsive ? ['desktop', 'tablet', 'mobile'].map(function (device) {
    return deviceType === device && options.map(function (option) {
      return /*#__PURE__*/React.createElement("div", {
        key: option.value,
        className: "blockart-advance-select-item"
      }, /*#__PURE__*/React.createElement(external_wp_components_namespaceObject.Tooltip, {
        text: option.label,
        position: "top",
        delay: 300
      }, /*#__PURE__*/React.createElement("button", {
        id: 'blockart-button-' + option.value,
        className: classnames_default()('blockart-button', {
          'is-active': value[device] === option.value
        }),
        onClick: function onClick() {
          onChange(Object.assign({}, value, defineProperty_defineProperty({}, device, option.value === value[device] ? undefined : option.value)));
        }
      }, /*#__PURE__*/React.createElement(components_icon, {
        type: "controlIcon",
        name: option.icon
      }))));
    });
  }) : options.map(function (option) {
    return /*#__PURE__*/React.createElement("div", {
      key: option.value,
      className: "blockart-advance-select-item"
    }, /*#__PURE__*/React.createElement(external_wp_components_namespaceObject.Tooltip, {
      text: option.label,
      position: "top",
      delay: 300
    }, /*#__PURE__*/React.createElement("button", {
      id: 'blockart-button-' + option.value,
      className: classnames_default()('blockart-button', 'blockart-advance-select-item', {
        'is-active': value === option.value
      }),
      onClick: function onClick() {
        return onChange(value === option.value ? undefined : option.value);
      }
    }, /*#__PURE__*/React.createElement(components_icon, {
      type: "controlIcon",
      name: option.icon
    }))));
  }))));
}));
;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js

function objectSpread2_ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? objectSpread2_ownKeys(Object(source), !0).forEach(function (key) {
      defineProperty_defineProperty(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : objectSpread2_ownKeys(Object(source)).forEach(function (key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }
  return target;
}
;// CONCATENATED MODULE: external "React"
const external_React_namespaceObject = window["React"];
var external_React_default = /*#__PURE__*/__webpack_require__.n(external_React_namespaceObject);
;// CONCATENATED MODULE: ./node_modules/rc-util/es/hooks/useEvent.js

function useEvent(callback) {
  var fnRef = external_React_namespaceObject.useRef();
  fnRef.current = callback;
  var memoFn = external_React_namespaceObject.useCallback(function () {
    var _fnRef$current;
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    return (_fnRef$current = fnRef.current) === null || _fnRef$current === void 0 ? void 0 : _fnRef$current.call.apply(_fnRef$current, [fnRef].concat(args));
  }, []);
  return memoFn;
}
;// CONCATENATED MODULE: ./node_modules/rc-util/es/Dom/canUseDom.js
function canUseDom() {
  return !!(typeof window !== 'undefined' && window.document && window.document.createElement);
}
;// CONCATENATED MODULE: ./node_modules/rc-util/es/hooks/useLayoutEffect.js



/**
 * Wrap `React.useLayoutEffect` which will not throw warning message in test env
 */
var useLayoutEffect =  true && canUseDom() ? external_React_namespaceObject.useLayoutEffect : external_React_namespaceObject.useEffect;
/* harmony default export */ const hooks_useLayoutEffect = (useLayoutEffect);
var useLayoutUpdateEffect = function useLayoutUpdateEffect(callback, deps) {
  var firstMountRef = external_React_namespaceObject.useRef(true);
  useLayoutEffect(function () {
    if (!firstMountRef.current) {
      return callback();
    }
  }, deps);

  // We tell react that first mount has passed
  useLayoutEffect(function () {
    firstMountRef.current = false;
    return function () {
      firstMountRef.current = true;
    };
  }, []);
};
;// CONCATENATED MODULE: ./node_modules/rc-util/es/hooks/useState.js


/**
 * Same as React.useState but `setState` accept `ignoreDestroy` param to not to setState after destroyed.
 * We do not make this auto is to avoid real memory leak.
 * Developer should confirm it's safe to ignore themselves.
 */
function useSafeState(defaultValue) {
  var destroyRef = external_React_namespaceObject.useRef(false);
  var _React$useState = external_React_namespaceObject.useState(defaultValue),
    _React$useState2 = slicedToArray_slicedToArray(_React$useState, 2),
    value = _React$useState2[0],
    setValue = _React$useState2[1];
  external_React_namespaceObject.useEffect(function () {
    destroyRef.current = false;
    return function () {
      destroyRef.current = true;
    };
  }, []);
  function safeSetState(updater, ignoreDestroy) {
    if (ignoreDestroy && destroyRef.current) {
      return;
    }
    setValue(updater);
  }
  return [value, safeSetState];
}
;// CONCATENATED MODULE: ./node_modules/rc-util/es/hooks/useMergedState.js




/** We only think `undefined` is empty */
function hasValue(value) {
  return value !== undefined;
}

/**
 * Similar to `useState` but will use props value if provided.
 * Note that internal use rc-util `useState` hook.
 */
function useMergedState(defaultStateValue, option) {
  var _ref = option || {},
    defaultValue = _ref.defaultValue,
    value = _ref.value,
    onChange = _ref.onChange,
    postState = _ref.postState;

  // ======================= Init =======================
  var _useState = useSafeState(function () {
      if (hasValue(value)) {
        return value;
      } else if (hasValue(defaultValue)) {
        return typeof defaultValue === 'function' ? defaultValue() : defaultValue;
      } else {
        return typeof defaultStateValue === 'function' ? defaultStateValue() : defaultStateValue;
      }
    }),
    _useState2 = slicedToArray_slicedToArray(_useState, 2),
    innerValue = _useState2[0],
    setInnerValue = _useState2[1];
  var mergedValue = value !== undefined ? value : innerValue;
  var postMergedValue = postState ? postState(mergedValue) : mergedValue;

  // ====================== Change ======================
  var onChangeFn = useEvent(onChange);
  var _useState3 = useSafeState([mergedValue]),
    _useState4 = slicedToArray_slicedToArray(_useState3, 2),
    prevValue = _useState4[0],
    setPrevValue = _useState4[1];
  useLayoutUpdateEffect(function () {
    var prev = prevValue[0];
    if (innerValue !== prev) {
      onChangeFn(innerValue, prev);
    }
  }, [prevValue]);

  // Sync value back to `undefined` when it from control to un-control
  useLayoutUpdateEffect(function () {
    if (!hasValue(value)) {
      setInnerValue(value);
    }
  }, [value]);

  // ====================== Update ======================
  var triggerChange = useEvent(function (updater, ignoreDestroy) {
    setInnerValue(updater, ignoreDestroy);
    setPrevValue([mergedValue], ignoreDestroy);
  });
  return [postMergedValue, triggerChange];
}
;// CONCATENATED MODULE: ./node_modules/rc-util/es/warning.js
/* eslint-disable no-console */
var warned = {};
function warning_warning(valid, message) {
  // Support uglify
  if (false) {}
}
function note(valid, message) {
  // Support uglify
  if (false) {}
}
function resetWarned() {
  warned = {};
}
function call(method, valid, message) {
  if (!valid && !warned[message]) {
    method(false, message);
    warned[message] = true;
  }
}
function warningOnce(valid, message) {
  call(warning_warning, valid, message);
}
function warning_noteOnce(valid, message) {
  call(note, valid, message);
}
/* harmony default export */ const es_warning = (warningOnce);
/* eslint-enable */
;// CONCATENATED MODULE: ./node_modules/rc-util/es/isMobile.js
/* harmony default export */ const isMobile = (function () {
  if (typeof navigator === 'undefined' || typeof window === 'undefined') {
    return false;
  }
  var agent = navigator.userAgent || navigator.vendor || window.opera;
  return /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(agent) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw-(n|u)|c55\/|capi|ccwa|cdm-|cell|chtm|cldc|cmd-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc-s|devi|dica|dmob|do(c|p)o|ds(12|-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(-|_)|g1 u|g560|gene|gf-5|g-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd-(m|p|t)|hei-|hi(pt|ta)|hp( i|ip)|hs-c|ht(c(-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i-(20|go|ma)|i230|iac( |-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|-[a-w])|libw|lynx|m1-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|-([1-8]|c))|phil|pire|pl(ay|uc)|pn-2|po(ck|rt|se)|prox|psio|pt-g|qa-a|qc(07|12|21|32|60|-[2-7]|i-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h-|oo|p-)|sdk\/|se(c(-|0|1)|47|mc|nd|ri)|sgh-|shar|sie(-|m)|sk-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h-|v-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl-|tdg-|tel(i|m)|tim-|t-mo|to(pl|sh)|ts(70|m-|m3|m5)|tx-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas-|your|zeto|zte-/i.test(agent === null || agent === void 0 ? void 0 : agent.substr(0, 4));
});
;// CONCATENATED MODULE: ./node_modules/rc-util/es/KeyCode.js
/**
 * @ignore
 * some key-codes definition and utils from closure-library
 * @author yiminghe@gmail.com
 */

var KeyCode = {
  /**
   * MAC_ENTER
   */
  MAC_ENTER: 3,
  /**
   * BACKSPACE
   */
  BACKSPACE: 8,
  /**
   * TAB
   */
  TAB: 9,
  /**
   * NUMLOCK on FF/Safari Mac
   */
  NUM_CENTER: 12,
  // NUMLOCK on FF/Safari Mac
  /**
   * ENTER
   */
  ENTER: 13,
  /**
   * SHIFT
   */
  SHIFT: 16,
  /**
   * CTRL
   */
  CTRL: 17,
  /**
   * ALT
   */
  ALT: 18,
  /**
   * PAUSE
   */
  PAUSE: 19,
  /**
   * CAPS_LOCK
   */
  CAPS_LOCK: 20,
  /**
   * ESC
   */
  ESC: 27,
  /**
   * SPACE
   */
  SPACE: 32,
  /**
   * PAGE_UP
   */
  PAGE_UP: 33,
  // also NUM_NORTH_EAST
  /**
   * PAGE_DOWN
   */
  PAGE_DOWN: 34,
  // also NUM_SOUTH_EAST
  /**
   * END
   */
  END: 35,
  // also NUM_SOUTH_WEST
  /**
   * HOME
   */
  HOME: 36,
  // also NUM_NORTH_WEST
  /**
   * LEFT
   */
  LEFT: 37,
  // also NUM_WEST
  /**
   * UP
   */
  UP: 38,
  // also NUM_NORTH
  /**
   * RIGHT
   */
  RIGHT: 39,
  // also NUM_EAST
  /**
   * DOWN
   */
  DOWN: 40,
  // also NUM_SOUTH
  /**
   * PRINT_SCREEN
   */
  PRINT_SCREEN: 44,
  /**
   * INSERT
   */
  INSERT: 45,
  // also NUM_INSERT
  /**
   * DELETE
   */
  DELETE: 46,
  // also NUM_DELETE
  /**
   * ZERO
   */
  ZERO: 48,
  /**
   * ONE
   */
  ONE: 49,
  /**
   * TWO
   */
  TWO: 50,
  /**
   * THREE
   */
  THREE: 51,
  /**
   * FOUR
   */
  FOUR: 52,
  /**
   * FIVE
   */
  FIVE: 53,
  /**
   * SIX
   */
  SIX: 54,
  /**
   * SEVEN
   */
  SEVEN: 55,
  /**
   * EIGHT
   */
  EIGHT: 56,
  /**
   * NINE
   */
  NINE: 57,
  /**
   * QUESTION_MARK
   */
  QUESTION_MARK: 63,
  // needs localization
  /**
   * A
   */
  A: 65,
  /**
   * B
   */
  B: 66,
  /**
   * C
   */
  C: 67,
  /**
   * D
   */
  D: 68,
  /**
   * E
   */
  E: 69,
  /**
   * F
   */
  F: 70,
  /**
   * G
   */
  G: 71,
  /**
   * H
   */
  H: 72,
  /**
   * I
   */
  I: 73,
  /**
   * J
   */
  J: 74,
  /**
   * K
   */
  K: 75,
  /**
   * L
   */
  L: 76,
  /**
   * M
   */
  M: 77,
  /**
   * N
   */
  N: 78,
  /**
   * O
   */
  O: 79,
  /**
   * P
   */
  P: 80,
  /**
   * Q
   */
  Q: 81,
  /**
   * R
   */
  R: 82,
  /**
   * S
   */
  S: 83,
  /**
   * T
   */
  T: 84,
  /**
   * U
   */
  U: 85,
  /**
   * V
   */
  V: 86,
  /**
   * W
   */
  W: 87,
  /**
   * X
   */
  X: 88,
  /**
   * Y
   */
  Y: 89,
  /**
   * Z
   */
  Z: 90,
  /**
   * META
   */
  META: 91,
  // WIN_KEY_LEFT
  /**
   * WIN_KEY_RIGHT
   */
  WIN_KEY_RIGHT: 92,
  /**
   * CONTEXT_MENU
   */
  CONTEXT_MENU: 93,
  /**
   * NUM_ZERO
   */
  NUM_ZERO: 96,
  /**
   * NUM_ONE
   */
  NUM_ONE: 97,
  /**
   * NUM_TWO
   */
  NUM_TWO: 98,
  /**
   * NUM_THREE
   */
  NUM_THREE: 99,
  /**
   * NUM_FOUR
   */
  NUM_FOUR: 100,
  /**
   * NUM_FIVE
   */
  NUM_FIVE: 101,
  /**
   * NUM_SIX
   */
  NUM_SIX: 102,
  /**
   * NUM_SEVEN
   */
  NUM_SEVEN: 103,
  /**
   * NUM_EIGHT
   */
  NUM_EIGHT: 104,
  /**
   * NUM_NINE
   */
  NUM_NINE: 105,
  /**
   * NUM_MULTIPLY
   */
  NUM_MULTIPLY: 106,
  /**
   * NUM_PLUS
   */
  NUM_PLUS: 107,
  /**
   * NUM_MINUS
   */
  NUM_MINUS: 109,
  /**
   * NUM_PERIOD
   */
  NUM_PERIOD: 110,
  /**
   * NUM_DIVISION
   */
  NUM_DIVISION: 111,
  /**
   * F1
   */
  F1: 112,
  /**
   * F2
   */
  F2: 113,
  /**
   * F3
   */
  F3: 114,
  /**
   * F4
   */
  F4: 115,
  /**
   * F5
   */
  F5: 116,
  /**
   * F6
   */
  F6: 117,
  /**
   * F7
   */
  F7: 118,
  /**
   * F8
   */
  F8: 119,
  /**
   * F9
   */
  F9: 120,
  /**
   * F10
   */
  F10: 121,
  /**
   * F11
   */
  F11: 122,
  /**
   * F12
   */
  F12: 123,
  /**
   * NUMLOCK
   */
  NUMLOCK: 144,
  /**
   * SEMICOLON
   */
  SEMICOLON: 186,
  // needs localization
  /**
   * DASH
   */
  DASH: 189,
  // needs localization
  /**
   * EQUALS
   */
  EQUALS: 187,
  // needs localization
  /**
   * COMMA
   */
  COMMA: 188,
  // needs localization
  /**
   * PERIOD
   */
  PERIOD: 190,
  // needs localization
  /**
   * SLASH
   */
  SLASH: 191,
  // needs localization
  /**
   * APOSTROPHE
   */
  APOSTROPHE: 192,
  // needs localization
  /**
   * SINGLE_QUOTE
   */
  SINGLE_QUOTE: 222,
  // needs localization
  /**
   * OPEN_SQUARE_BRACKET
   */
  OPEN_SQUARE_BRACKET: 219,
  // needs localization
  /**
   * BACKSLASH
   */
  BACKSLASH: 220,
  // needs localization
  /**
   * CLOSE_SQUARE_BRACKET
   */
  CLOSE_SQUARE_BRACKET: 221,
  // needs localization
  /**
   * WIN_KEY
   */
  WIN_KEY: 224,
  /**
   * MAC_FF_META
   */
  MAC_FF_META: 224,
  // Firefox (Gecko) fires this for the meta key instead of 91
  /**
   * WIN_IME
   */
  WIN_IME: 229,
  // ======================== Function ========================
  /**
   * whether text and modified key is entered at the same time.
   */
  isTextModifyingKeyEvent: function isTextModifyingKeyEvent(e) {
    var keyCode = e.keyCode;
    if (e.altKey && !e.ctrlKey || e.metaKey ||
    // Function keys don't generate text
    keyCode >= KeyCode.F1 && keyCode <= KeyCode.F12) {
      return false;
    }

    // The following keys are quite harmless, even in combination with
    // CTRL, ALT or SHIFT.
    switch (keyCode) {
      case KeyCode.ALT:
      case KeyCode.CAPS_LOCK:
      case KeyCode.CONTEXT_MENU:
      case KeyCode.CTRL:
      case KeyCode.DOWN:
      case KeyCode.END:
      case KeyCode.ESC:
      case KeyCode.HOME:
      case KeyCode.INSERT:
      case KeyCode.LEFT:
      case KeyCode.MAC_FF_META:
      case KeyCode.META:
      case KeyCode.NUMLOCK:
      case KeyCode.NUM_CENTER:
      case KeyCode.PAGE_DOWN:
      case KeyCode.PAGE_UP:
      case KeyCode.PAUSE:
      case KeyCode.PRINT_SCREEN:
      case KeyCode.RIGHT:
      case KeyCode.SHIFT:
      case KeyCode.UP:
      case KeyCode.WIN_KEY:
      case KeyCode.WIN_KEY_RIGHT:
        return false;
      default:
        return true;
    }
  },
  /**
   * whether character is entered.
   */
  isCharacterKey: function isCharacterKey(keyCode) {
    if (keyCode >= KeyCode.ZERO && keyCode <= KeyCode.NINE) {
      return true;
    }
    if (keyCode >= KeyCode.NUM_ZERO && keyCode <= KeyCode.NUM_MULTIPLY) {
      return true;
    }
    if (keyCode >= KeyCode.A && keyCode <= KeyCode.Z) {
      return true;
    }

    // Safari sends zero key code for non-latin characters.
    if (window.navigator.userAgent.indexOf('WebKit') !== -1 && keyCode === 0) {
      return true;
    }
    switch (keyCode) {
      case KeyCode.SPACE:
      case KeyCode.QUESTION_MARK:
      case KeyCode.NUM_PLUS:
      case KeyCode.NUM_MINUS:
      case KeyCode.NUM_PERIOD:
      case KeyCode.NUM_DIVISION:
      case KeyCode.SEMICOLON:
      case KeyCode.DASH:
      case KeyCode.EQUALS:
      case KeyCode.COMMA:
      case KeyCode.PERIOD:
      case KeyCode.SLASH:
      case KeyCode.APOSTROPHE:
      case KeyCode.SINGLE_QUOTE:
      case KeyCode.OPEN_SQUARE_BRACKET:
      case KeyCode.BACKSLASH:
      case KeyCode.CLOSE_SQUARE_BRACKET:
        return true;
      default:
        return false;
    }
  }
};
/* harmony default export */ const es_KeyCode = (KeyCode);
// EXTERNAL MODULE: ./node_modules/react-is/index.js
var react_is = __webpack_require__(864);
;// CONCATENATED MODULE: ./node_modules/rc-util/es/hooks/useMemo.js

function useMemo(getValue, condition, shouldUpdate) {
  var cacheRef = external_React_namespaceObject.useRef({});
  if (!('value' in cacheRef.current) || shouldUpdate(cacheRef.current.condition, condition)) {
    cacheRef.current.value = getValue();
    cacheRef.current.condition = condition;
  }
  return cacheRef.current.value;
}
;// CONCATENATED MODULE: ./node_modules/rc-util/es/ref.js

/* eslint-disable no-param-reassign */



function fillRef(ref, node) {
  if (typeof ref === 'function') {
    ref(node);
  } else if (typeof_typeof(ref) === 'object' && ref && 'current' in ref) {
    ref.current = node;
  }
}

/**
 * Merge refs into one ref function to support ref passing.
 */
function composeRef() {
  for (var _len = arguments.length, refs = new Array(_len), _key = 0; _key < _len; _key++) {
    refs[_key] = arguments[_key];
  }
  var refList = refs.filter(function (ref) {
    return ref;
  });
  if (refList.length <= 1) {
    return refList[0];
  }
  return function (node) {
    refs.forEach(function (ref) {
      fillRef(ref, node);
    });
  };
}
function useComposeRef() {
  for (var _len2 = arguments.length, refs = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    refs[_key2] = arguments[_key2];
  }
  return useMemo(function () {
    return composeRef.apply(void 0, refs);
  }, refs, function (prev, next) {
    return prev.length === next.length && prev.every(function (ref, i) {
      return ref === next[i];
    });
  });
}
function supportRef(nodeOrComponent) {
  var _type$prototype, _nodeOrComponent$prot;
  var type = (0,react_is.isMemo)(nodeOrComponent) ? nodeOrComponent.type.type : nodeOrComponent.type;

  // Function component node
  if (typeof type === 'function' && !((_type$prototype = type.prototype) !== null && _type$prototype !== void 0 && _type$prototype.render)) {
    return false;
  }

  // Class component
  if (typeof nodeOrComponent === 'function' && !((_nodeOrComponent$prot = nodeOrComponent.prototype) !== null && _nodeOrComponent$prot !== void 0 && _nodeOrComponent$prot.render)) {
    return false;
  }
  return true;
}
/* eslint-enable */
;// CONCATENATED MODULE: ./node_modules/rc-select/es/hooks/useBaseProps.js
/**
 * BaseSelect provide some parsed data into context.
 * You can use this hooks to get them.
 */


var BaseSelectContext = /*#__PURE__*/external_React_namespaceObject.createContext(null);
function useBaseProps() {
  return external_React_namespaceObject.useContext(BaseSelectContext);
}
;// CONCATENATED MODULE: ./node_modules/rc-select/es/hooks/useDelayReset.js



/**
 * Similar with `useLock`, but this hook will always execute last value.
 * When set to `true`, it will keep `true` for a short time even if `false` is set.
 */
function useDelayReset() {
  var timeout = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 10;
  var _React$useState = external_React_namespaceObject.useState(false),
    _React$useState2 = slicedToArray_slicedToArray(_React$useState, 2),
    bool = _React$useState2[0],
    setBool = _React$useState2[1];
  var delayRef = external_React_namespaceObject.useRef(null);
  var cancelLatest = function cancelLatest() {
    window.clearTimeout(delayRef.current);
  };
  external_React_namespaceObject.useEffect(function () {
    return cancelLatest;
  }, []);
  var delaySetBool = function delaySetBool(value, callback) {
    cancelLatest();
    delayRef.current = window.setTimeout(function () {
      setBool(value);
      if (callback) {
        callback();
      }
    }, timeout);
  };
  return [bool, delaySetBool, cancelLatest];
}
;// CONCATENATED MODULE: ./node_modules/rc-select/es/hooks/useLock.js


/**
 * Locker return cached mark.
 * If set to `true`, will return `true` in a short time even if set `false`.
 * If set to `false` and then set to `true`, will change to `true`.
 * And after time duration, it will back to `null` automatically.
 */
function useLock() {
  var duration = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 250;
  var lockRef = external_React_namespaceObject.useRef(null);
  var timeoutRef = external_React_namespaceObject.useRef(null);

  // Clean up
  external_React_namespaceObject.useEffect(function () {
    return function () {
      window.clearTimeout(timeoutRef.current);
    };
  }, []);
  function doLock(locked) {
    if (locked || lockRef.current === null) {
      lockRef.current = locked;
    }
    window.clearTimeout(timeoutRef.current);
    timeoutRef.current = window.setTimeout(function () {
      lockRef.current = null;
    }, duration);
  }
  return [function () {
    return lockRef.current;
  }, doLock];
}
;// CONCATENATED MODULE: ./node_modules/rc-select/es/hooks/useSelectTriggerControl.js

function useSelectTriggerControl(elements, open, triggerOpen, customizedTrigger) {
  var propsRef = external_React_namespaceObject.useRef(null);
  propsRef.current = {
    open: open,
    triggerOpen: triggerOpen,
    customizedTrigger: customizedTrigger
  };
  external_React_namespaceObject.useEffect(function () {
    function onGlobalMouseDown(event) {
      var _propsRef$current;
      // If trigger is customized, Trigger will take control of popupVisible
      if ((_propsRef$current = propsRef.current) !== null && _propsRef$current !== void 0 && _propsRef$current.customizedTrigger) {
        return;
      }
      var target = event.target;
      if (target.shadowRoot && event.composed) {
        target = event.composedPath()[0] || target;
      }
      if (propsRef.current.open && elements().filter(function (element) {
        return element;
      }).every(function (element) {
        return !element.contains(target) && element !== target;
      })) {
        // Should trigger close
        propsRef.current.triggerOpen(false);
      }
    }
    window.addEventListener('mousedown', onGlobalMouseDown);
    return function () {
      return window.removeEventListener('mousedown', onGlobalMouseDown);
    };
  }, []);
}
;// CONCATENATED MODULE: ./node_modules/rc-util/es/pickAttrs.js

var attributes = "accept acceptCharset accessKey action allowFullScreen allowTransparency\n    alt async autoComplete autoFocus autoPlay capture cellPadding cellSpacing challenge\n    charSet checked classID className colSpan cols content contentEditable contextMenu\n    controls coords crossOrigin data dateTime default defer dir disabled download draggable\n    encType form formAction formEncType formMethod formNoValidate formTarget frameBorder\n    headers height hidden high href hrefLang htmlFor httpEquiv icon id inputMode integrity\n    is keyParams keyType kind label lang list loop low manifest marginHeight marginWidth max maxLength media\n    mediaGroup method min minLength multiple muted name noValidate nonce open\n    optimum pattern placeholder poster preload radioGroup readOnly rel required\n    reversed role rowSpan rows sandbox scope scoped scrolling seamless selected\n    shape size sizes span spellCheck src srcDoc srcLang srcSet start step style\n    summary tabIndex target title type useMap value width wmode wrap";
var eventsName = "onCopy onCut onPaste onCompositionEnd onCompositionStart onCompositionUpdate onKeyDown\n    onKeyPress onKeyUp onFocus onBlur onChange onInput onSubmit onClick onContextMenu onDoubleClick\n    onDrag onDragEnd onDragEnter onDragExit onDragLeave onDragOver onDragStart onDrop onMouseDown\n    onMouseEnter onMouseLeave onMouseMove onMouseOut onMouseOver onMouseUp onSelect onTouchCancel\n    onTouchEnd onTouchMove onTouchStart onScroll onWheel onAbort onCanPlay onCanPlayThrough\n    onDurationChange onEmptied onEncrypted onEnded onError onLoadedData onLoadedMetadata\n    onLoadStart onPause onPlay onPlaying onProgress onRateChange onSeeked onSeeking onStalled onSuspend onTimeUpdate onVolumeChange onWaiting onLoad onError";
var propList = "".concat(attributes, " ").concat(eventsName).split(/[\s\n]+/);

/* eslint-enable max-len */
var ariaPrefix = 'aria-';
var dataPrefix = 'data-';
function match(key, prefix) {
  return key.indexOf(prefix) === 0;
}
/**
 * Picker props from exist props with filter
 * @param props Passed props
 * @param ariaOnly boolean | { aria?: boolean; data?: boolean; attr?: boolean; } filter config
 */
function pickAttrs(props) {
  var ariaOnly = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  var mergedConfig;
  if (ariaOnly === false) {
    mergedConfig = {
      aria: true,
      data: true,
      attr: true
    };
  } else if (ariaOnly === true) {
    mergedConfig = {
      aria: true
    };
  } else {
    mergedConfig = _objectSpread2({}, ariaOnly);
  }
  var attrs = {};
  Object.keys(props).forEach(function (key) {
    if (
    // Aria
    mergedConfig.aria && (key === 'role' || match(key, ariaPrefix)) ||
    // Data
    mergedConfig.data && match(key, dataPrefix) ||
    // Attr
    mergedConfig.attr && propList.includes(key)) {
      attrs[key] = props[key];
    }
  });
  return attrs;
}
;// CONCATENATED MODULE: ./node_modules/rc-util/es/Children/toArray.js


function toArray_toArray(children) {
  var option = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var ret = [];
  external_React_default().Children.forEach(children, function (child) {
    if ((child === undefined || child === null) && !option.keepEmpty) {
      return;
    }
    if (Array.isArray(child)) {
      ret = ret.concat(toArray_toArray(child));
    } else if ((0,react_is.isFragment)(child) && child.props) {
      ret = ret.concat(toArray_toArray(child.props.children, option));
    } else {
      ret.push(child);
    }
  });
  return ret;
}
;// CONCATENATED MODULE: external "ReactDOM"
const external_ReactDOM_namespaceObject = window["ReactDOM"];
var external_ReactDOM_default = /*#__PURE__*/__webpack_require__.n(external_ReactDOM_namespaceObject);
;// CONCATENATED MODULE: ./node_modules/rc-util/es/Dom/findDOMNode.js


function isDOM(node) {
  // https://developer.mozilla.org/en-US/docs/Web/API/Element
  // Since XULElement is also subclass of Element, we only need HTMLElement and SVGElement
  return node instanceof HTMLElement || node instanceof SVGElement;
}

/**
 * Return if a node is a DOM node. Else will return by `findDOMNode`
 */
function findDOMNode(node) {
  if (isDOM(node)) {
    return node;
  }
  if (node instanceof (external_React_default()).Component) {
    return external_ReactDOM_default().findDOMNode(node);
  }
  return null;
}
;// CONCATENATED MODULE: ./node_modules/resize-observer-polyfill/dist/ResizeObserver.es.js
/**
 * A collection of shims that provide minimal functionality of the ES6 collections.
 *
 * These implementations are not meant to be used outside of the ResizeObserver
 * modules as they cover only a limited range of use cases.
 */
/* eslint-disable require-jsdoc, valid-jsdoc */
var MapShim = (function () {
    if (typeof Map !== 'undefined') {
        return Map;
    }
    /**
     * Returns index in provided array that matches the specified key.
     *
     * @param {Array<Array>} arr
     * @param {*} key
     * @returns {number}
     */
    function getIndex(arr, key) {
        var result = -1;
        arr.some(function (entry, index) {
            if (entry[0] === key) {
                result = index;
                return true;
            }
            return false;
        });
        return result;
    }
    return /** @class */ (function () {
        function class_1() {
            this.__entries__ = [];
        }
        Object.defineProperty(class_1.prototype, "size", {
            /**
             * @returns {boolean}
             */
            get: function () {
                return this.__entries__.length;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @param {*} key
         * @returns {*}
         */
        class_1.prototype.get = function (key) {
            var index = getIndex(this.__entries__, key);
            var entry = this.__entries__[index];
            return entry && entry[1];
        };
        /**
         * @param {*} key
         * @param {*} value
         * @returns {void}
         */
        class_1.prototype.set = function (key, value) {
            var index = getIndex(this.__entries__, key);
            if (~index) {
                this.__entries__[index][1] = value;
            }
            else {
                this.__entries__.push([key, value]);
            }
        };
        /**
         * @param {*} key
         * @returns {void}
         */
        class_1.prototype.delete = function (key) {
            var entries = this.__entries__;
            var index = getIndex(entries, key);
            if (~index) {
                entries.splice(index, 1);
            }
        };
        /**
         * @param {*} key
         * @returns {void}
         */
        class_1.prototype.has = function (key) {
            return !!~getIndex(this.__entries__, key);
        };
        /**
         * @returns {void}
         */
        class_1.prototype.clear = function () {
            this.__entries__.splice(0);
        };
        /**
         * @param {Function} callback
         * @param {*} [ctx=null]
         * @returns {void}
         */
        class_1.prototype.forEach = function (callback, ctx) {
            if (ctx === void 0) { ctx = null; }
            for (var _i = 0, _a = this.__entries__; _i < _a.length; _i++) {
                var entry = _a[_i];
                callback.call(ctx, entry[1], entry[0]);
            }
        };
        return class_1;
    }());
})();

/**
 * Detects whether window and document objects are available in current environment.
 */
var isBrowser = typeof window !== 'undefined' && typeof document !== 'undefined' && window.document === document;

// Returns global object of a current environment.
var global$1 = (function () {
    if (typeof __webpack_require__.g !== 'undefined' && __webpack_require__.g.Math === Math) {
        return __webpack_require__.g;
    }
    if (typeof self !== 'undefined' && self.Math === Math) {
        return self;
    }
    if (typeof window !== 'undefined' && window.Math === Math) {
        return window;
    }
    // eslint-disable-next-line no-new-func
    return Function('return this')();
})();

/**
 * A shim for the requestAnimationFrame which falls back to the setTimeout if
 * first one is not supported.
 *
 * @returns {number} Requests' identifier.
 */
var requestAnimationFrame$1 = (function () {
    if (typeof requestAnimationFrame === 'function') {
        // It's required to use a bounded function because IE sometimes throws
        // an "Invalid calling object" error if rAF is invoked without the global
        // object on the left hand side.
        return requestAnimationFrame.bind(global$1);
    }
    return function (callback) { return setTimeout(function () { return callback(Date.now()); }, 1000 / 60); };
})();

// Defines minimum timeout before adding a trailing call.
var trailingTimeout = 2;
/**
 * Creates a wrapper function which ensures that provided callback will be
 * invoked only once during the specified delay period.
 *
 * @param {Function} callback - Function to be invoked after the delay period.
 * @param {number} delay - Delay after which to invoke callback.
 * @returns {Function}
 */
function throttle (callback, delay) {
    var leadingCall = false, trailingCall = false, lastCallTime = 0;
    /**
     * Invokes the original callback function and schedules new invocation if
     * the "proxy" was called during current request.
     *
     * @returns {void}
     */
    function resolvePending() {
        if (leadingCall) {
            leadingCall = false;
            callback();
        }
        if (trailingCall) {
            proxy();
        }
    }
    /**
     * Callback invoked after the specified delay. It will further postpone
     * invocation of the original function delegating it to the
     * requestAnimationFrame.
     *
     * @returns {void}
     */
    function timeoutCallback() {
        requestAnimationFrame$1(resolvePending);
    }
    /**
     * Schedules invocation of the original function.
     *
     * @returns {void}
     */
    function proxy() {
        var timeStamp = Date.now();
        if (leadingCall) {
            // Reject immediately following calls.
            if (timeStamp - lastCallTime < trailingTimeout) {
                return;
            }
            // Schedule new call to be in invoked when the pending one is resolved.
            // This is important for "transitions" which never actually start
            // immediately so there is a chance that we might miss one if change
            // happens amids the pending invocation.
            trailingCall = true;
        }
        else {
            leadingCall = true;
            trailingCall = false;
            setTimeout(timeoutCallback, delay);
        }
        lastCallTime = timeStamp;
    }
    return proxy;
}

// Minimum delay before invoking the update of observers.
var REFRESH_DELAY = 20;
// A list of substrings of CSS properties used to find transition events that
// might affect dimensions of observed elements.
var transitionKeys = ['top', 'right', 'bottom', 'left', 'width', 'height', 'size', 'weight'];
// Check if MutationObserver is available.
var mutationObserverSupported = typeof MutationObserver !== 'undefined';
/**
 * Singleton controller class which handles updates of ResizeObserver instances.
 */
var ResizeObserverController = /** @class */ (function () {
    /**
     * Creates a new instance of ResizeObserverController.
     *
     * @private
     */
    function ResizeObserverController() {
        /**
         * Indicates whether DOM listeners have been added.
         *
         * @private {boolean}
         */
        this.connected_ = false;
        /**
         * Tells that controller has subscribed for Mutation Events.
         *
         * @private {boolean}
         */
        this.mutationEventsAdded_ = false;
        /**
         * Keeps reference to the instance of MutationObserver.
         *
         * @private {MutationObserver}
         */
        this.mutationsObserver_ = null;
        /**
         * A list of connected observers.
         *
         * @private {Array<ResizeObserverSPI>}
         */
        this.observers_ = [];
        this.onTransitionEnd_ = this.onTransitionEnd_.bind(this);
        this.refresh = throttle(this.refresh.bind(this), REFRESH_DELAY);
    }
    /**
     * Adds observer to observers list.
     *
     * @param {ResizeObserverSPI} observer - Observer to be added.
     * @returns {void}
     */
    ResizeObserverController.prototype.addObserver = function (observer) {
        if (!~this.observers_.indexOf(observer)) {
            this.observers_.push(observer);
        }
        // Add listeners if they haven't been added yet.
        if (!this.connected_) {
            this.connect_();
        }
    };
    /**
     * Removes observer from observers list.
     *
     * @param {ResizeObserverSPI} observer - Observer to be removed.
     * @returns {void}
     */
    ResizeObserverController.prototype.removeObserver = function (observer) {
        var observers = this.observers_;
        var index = observers.indexOf(observer);
        // Remove observer if it's present in registry.
        if (~index) {
            observers.splice(index, 1);
        }
        // Remove listeners if controller has no connected observers.
        if (!observers.length && this.connected_) {
            this.disconnect_();
        }
    };
    /**
     * Invokes the update of observers. It will continue running updates insofar
     * it detects changes.
     *
     * @returns {void}
     */
    ResizeObserverController.prototype.refresh = function () {
        var changesDetected = this.updateObservers_();
        // Continue running updates if changes have been detected as there might
        // be future ones caused by CSS transitions.
        if (changesDetected) {
            this.refresh();
        }
    };
    /**
     * Updates every observer from observers list and notifies them of queued
     * entries.
     *
     * @private
     * @returns {boolean} Returns "true" if any observer has detected changes in
     *      dimensions of it's elements.
     */
    ResizeObserverController.prototype.updateObservers_ = function () {
        // Collect observers that have active observations.
        var activeObservers = this.observers_.filter(function (observer) {
            return observer.gatherActive(), observer.hasActive();
        });
        // Deliver notifications in a separate cycle in order to avoid any
        // collisions between observers, e.g. when multiple instances of
        // ResizeObserver are tracking the same element and the callback of one
        // of them changes content dimensions of the observed target. Sometimes
        // this may result in notifications being blocked for the rest of observers.
        activeObservers.forEach(function (observer) { return observer.broadcastActive(); });
        return activeObservers.length > 0;
    };
    /**
     * Initializes DOM listeners.
     *
     * @private
     * @returns {void}
     */
    ResizeObserverController.prototype.connect_ = function () {
        // Do nothing if running in a non-browser environment or if listeners
        // have been already added.
        if (!isBrowser || this.connected_) {
            return;
        }
        // Subscription to the "Transitionend" event is used as a workaround for
        // delayed transitions. This way it's possible to capture at least the
        // final state of an element.
        document.addEventListener('transitionend', this.onTransitionEnd_);
        window.addEventListener('resize', this.refresh);
        if (mutationObserverSupported) {
            this.mutationsObserver_ = new MutationObserver(this.refresh);
            this.mutationsObserver_.observe(document, {
                attributes: true,
                childList: true,
                characterData: true,
                subtree: true
            });
        }
        else {
            document.addEventListener('DOMSubtreeModified', this.refresh);
            this.mutationEventsAdded_ = true;
        }
        this.connected_ = true;
    };
    /**
     * Removes DOM listeners.
     *
     * @private
     * @returns {void}
     */
    ResizeObserverController.prototype.disconnect_ = function () {
        // Do nothing if running in a non-browser environment or if listeners
        // have been already removed.
        if (!isBrowser || !this.connected_) {
            return;
        }
        document.removeEventListener('transitionend', this.onTransitionEnd_);
        window.removeEventListener('resize', this.refresh);
        if (this.mutationsObserver_) {
            this.mutationsObserver_.disconnect();
        }
        if (this.mutationEventsAdded_) {
            document.removeEventListener('DOMSubtreeModified', this.refresh);
        }
        this.mutationsObserver_ = null;
        this.mutationEventsAdded_ = false;
        this.connected_ = false;
    };
    /**
     * "Transitionend" event handler.
     *
     * @private
     * @param {TransitionEvent} event
     * @returns {void}
     */
    ResizeObserverController.prototype.onTransitionEnd_ = function (_a) {
        var _b = _a.propertyName, propertyName = _b === void 0 ? '' : _b;
        // Detect whether transition may affect dimensions of an element.
        var isReflowProperty = transitionKeys.some(function (key) {
            return !!~propertyName.indexOf(key);
        });
        if (isReflowProperty) {
            this.refresh();
        }
    };
    /**
     * Returns instance of the ResizeObserverController.
     *
     * @returns {ResizeObserverController}
     */
    ResizeObserverController.getInstance = function () {
        if (!this.instance_) {
            this.instance_ = new ResizeObserverController();
        }
        return this.instance_;
    };
    /**
     * Holds reference to the controller's instance.
     *
     * @private {ResizeObserverController}
     */
    ResizeObserverController.instance_ = null;
    return ResizeObserverController;
}());

/**
 * Defines non-writable/enumerable properties of the provided target object.
 *
 * @param {Object} target - Object for which to define properties.
 * @param {Object} props - Properties to be defined.
 * @returns {Object} Target object.
 */
var defineConfigurable = (function (target, props) {
    for (var _i = 0, _a = Object.keys(props); _i < _a.length; _i++) {
        var key = _a[_i];
        Object.defineProperty(target, key, {
            value: props[key],
            enumerable: false,
            writable: false,
            configurable: true
        });
    }
    return target;
});

/**
 * Returns the global object associated with provided element.
 *
 * @param {Object} target
 * @returns {Object}
 */
var getWindowOf = (function (target) {
    // Assume that the element is an instance of Node, which means that it
    // has the "ownerDocument" property from which we can retrieve a
    // corresponding global object.
    var ownerGlobal = target && target.ownerDocument && target.ownerDocument.defaultView;
    // Return the local global object if it's not possible extract one from
    // provided element.
    return ownerGlobal || global$1;
});

// Placeholder of an empty content rectangle.
var emptyRect = createRectInit(0, 0, 0, 0);
/**
 * Converts provided string to a number.
 *
 * @param {number|string} value
 * @returns {number}
 */
function toFloat(value) {
    return parseFloat(value) || 0;
}
/**
 * Extracts borders size from provided styles.
 *
 * @param {CSSStyleDeclaration} styles
 * @param {...string} positions - Borders positions (top, right, ...)
 * @returns {number}
 */
function getBordersSize(styles) {
    var positions = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        positions[_i - 1] = arguments[_i];
    }
    return positions.reduce(function (size, position) {
        var value = styles['border-' + position + '-width'];
        return size + toFloat(value);
    }, 0);
}
/**
 * Extracts paddings sizes from provided styles.
 *
 * @param {CSSStyleDeclaration} styles
 * @returns {Object} Paddings box.
 */
function getPaddings(styles) {
    var positions = ['top', 'right', 'bottom', 'left'];
    var paddings = {};
    for (var _i = 0, positions_1 = positions; _i < positions_1.length; _i++) {
        var position = positions_1[_i];
        var value = styles['padding-' + position];
        paddings[position] = toFloat(value);
    }
    return paddings;
}
/**
 * Calculates content rectangle of provided SVG element.
 *
 * @param {SVGGraphicsElement} target - Element content rectangle of which needs
 *      to be calculated.
 * @returns {DOMRectInit}
 */
function getSVGContentRect(target) {
    var bbox = target.getBBox();
    return createRectInit(0, 0, bbox.width, bbox.height);
}
/**
 * Calculates content rectangle of provided HTMLElement.
 *
 * @param {HTMLElement} target - Element for which to calculate the content rectangle.
 * @returns {DOMRectInit}
 */
function getHTMLElementContentRect(target) {
    // Client width & height properties can't be
    // used exclusively as they provide rounded values.
    var clientWidth = target.clientWidth, clientHeight = target.clientHeight;
    // By this condition we can catch all non-replaced inline, hidden and
    // detached elements. Though elements with width & height properties less
    // than 0.5 will be discarded as well.
    //
    // Without it we would need to implement separate methods for each of
    // those cases and it's not possible to perform a precise and performance
    // effective test for hidden elements. E.g. even jQuery's ':visible' filter
    // gives wrong results for elements with width & height less than 0.5.
    if (!clientWidth && !clientHeight) {
        return emptyRect;
    }
    var styles = getWindowOf(target).getComputedStyle(target);
    var paddings = getPaddings(styles);
    var horizPad = paddings.left + paddings.right;
    var vertPad = paddings.top + paddings.bottom;
    // Computed styles of width & height are being used because they are the
    // only dimensions available to JS that contain non-rounded values. It could
    // be possible to utilize the getBoundingClientRect if only it's data wasn't
    // affected by CSS transformations let alone paddings, borders and scroll bars.
    var width = toFloat(styles.width), height = toFloat(styles.height);
    // Width & height include paddings and borders when the 'border-box' box
    // model is applied (except for IE).
    if (styles.boxSizing === 'border-box') {
        // Following conditions are required to handle Internet Explorer which
        // doesn't include paddings and borders to computed CSS dimensions.
        //
        // We can say that if CSS dimensions + paddings are equal to the "client"
        // properties then it's either IE, and thus we don't need to subtract
        // anything, or an element merely doesn't have paddings/borders styles.
        if (Math.round(width + horizPad) !== clientWidth) {
            width -= getBordersSize(styles, 'left', 'right') + horizPad;
        }
        if (Math.round(height + vertPad) !== clientHeight) {
            height -= getBordersSize(styles, 'top', 'bottom') + vertPad;
        }
    }
    // Following steps can't be applied to the document's root element as its
    // client[Width/Height] properties represent viewport area of the window.
    // Besides, it's as well not necessary as the <html> itself neither has
    // rendered scroll bars nor it can be clipped.
    if (!isDocumentElement(target)) {
        // In some browsers (only in Firefox, actually) CSS width & height
        // include scroll bars size which can be removed at this step as scroll
        // bars are the only difference between rounded dimensions + paddings
        // and "client" properties, though that is not always true in Chrome.
        var vertScrollbar = Math.round(width + horizPad) - clientWidth;
        var horizScrollbar = Math.round(height + vertPad) - clientHeight;
        // Chrome has a rather weird rounding of "client" properties.
        // E.g. for an element with content width of 314.2px it sometimes gives
        // the client width of 315px and for the width of 314.7px it may give
        // 314px. And it doesn't happen all the time. So just ignore this delta
        // as a non-relevant.
        if (Math.abs(vertScrollbar) !== 1) {
            width -= vertScrollbar;
        }
        if (Math.abs(horizScrollbar) !== 1) {
            height -= horizScrollbar;
        }
    }
    return createRectInit(paddings.left, paddings.top, width, height);
}
/**
 * Checks whether provided element is an instance of the SVGGraphicsElement.
 *
 * @param {Element} target - Element to be checked.
 * @returns {boolean}
 */
var isSVGGraphicsElement = (function () {
    // Some browsers, namely IE and Edge, don't have the SVGGraphicsElement
    // interface.
    if (typeof SVGGraphicsElement !== 'undefined') {
        return function (target) { return target instanceof getWindowOf(target).SVGGraphicsElement; };
    }
    // If it's so, then check that element is at least an instance of the
    // SVGElement and that it has the "getBBox" method.
    // eslint-disable-next-line no-extra-parens
    return function (target) { return (target instanceof getWindowOf(target).SVGElement &&
        typeof target.getBBox === 'function'); };
})();
/**
 * Checks whether provided element is a document element (<html>).
 *
 * @param {Element} target - Element to be checked.
 * @returns {boolean}
 */
function isDocumentElement(target) {
    return target === getWindowOf(target).document.documentElement;
}
/**
 * Calculates an appropriate content rectangle for provided html or svg element.
 *
 * @param {Element} target - Element content rectangle of which needs to be calculated.
 * @returns {DOMRectInit}
 */
function getContentRect(target) {
    if (!isBrowser) {
        return emptyRect;
    }
    if (isSVGGraphicsElement(target)) {
        return getSVGContentRect(target);
    }
    return getHTMLElementContentRect(target);
}
/**
 * Creates rectangle with an interface of the DOMRectReadOnly.
 * Spec: https://drafts.fxtf.org/geometry/#domrectreadonly
 *
 * @param {DOMRectInit} rectInit - Object with rectangle's x/y coordinates and dimensions.
 * @returns {DOMRectReadOnly}
 */
function createReadOnlyRect(_a) {
    var x = _a.x, y = _a.y, width = _a.width, height = _a.height;
    // If DOMRectReadOnly is available use it as a prototype for the rectangle.
    var Constr = typeof DOMRectReadOnly !== 'undefined' ? DOMRectReadOnly : Object;
    var rect = Object.create(Constr.prototype);
    // Rectangle's properties are not writable and non-enumerable.
    defineConfigurable(rect, {
        x: x, y: y, width: width, height: height,
        top: y,
        right: x + width,
        bottom: height + y,
        left: x
    });
    return rect;
}
/**
 * Creates DOMRectInit object based on the provided dimensions and the x/y coordinates.
 * Spec: https://drafts.fxtf.org/geometry/#dictdef-domrectinit
 *
 * @param {number} x - X coordinate.
 * @param {number} y - Y coordinate.
 * @param {number} width - Rectangle's width.
 * @param {number} height - Rectangle's height.
 * @returns {DOMRectInit}
 */
function createRectInit(x, y, width, height) {
    return { x: x, y: y, width: width, height: height };
}

/**
 * Class that is responsible for computations of the content rectangle of
 * provided DOM element and for keeping track of it's changes.
 */
var ResizeObservation = /** @class */ (function () {
    /**
     * Creates an instance of ResizeObservation.
     *
     * @param {Element} target - Element to be observed.
     */
    function ResizeObservation(target) {
        /**
         * Broadcasted width of content rectangle.
         *
         * @type {number}
         */
        this.broadcastWidth = 0;
        /**
         * Broadcasted height of content rectangle.
         *
         * @type {number}
         */
        this.broadcastHeight = 0;
        /**
         * Reference to the last observed content rectangle.
         *
         * @private {DOMRectInit}
         */
        this.contentRect_ = createRectInit(0, 0, 0, 0);
        this.target = target;
    }
    /**
     * Updates content rectangle and tells whether it's width or height properties
     * have changed since the last broadcast.
     *
     * @returns {boolean}
     */
    ResizeObservation.prototype.isActive = function () {
        var rect = getContentRect(this.target);
        this.contentRect_ = rect;
        return (rect.width !== this.broadcastWidth ||
            rect.height !== this.broadcastHeight);
    };
    /**
     * Updates 'broadcastWidth' and 'broadcastHeight' properties with a data
     * from the corresponding properties of the last observed content rectangle.
     *
     * @returns {DOMRectInit} Last observed content rectangle.
     */
    ResizeObservation.prototype.broadcastRect = function () {
        var rect = this.contentRect_;
        this.broadcastWidth = rect.width;
        this.broadcastHeight = rect.height;
        return rect;
    };
    return ResizeObservation;
}());

var ResizeObserverEntry = /** @class */ (function () {
    /**
     * Creates an instance of ResizeObserverEntry.
     *
     * @param {Element} target - Element that is being observed.
     * @param {DOMRectInit} rectInit - Data of the element's content rectangle.
     */
    function ResizeObserverEntry(target, rectInit) {
        var contentRect = createReadOnlyRect(rectInit);
        // According to the specification following properties are not writable
        // and are also not enumerable in the native implementation.
        //
        // Property accessors are not being used as they'd require to define a
        // private WeakMap storage which may cause memory leaks in browsers that
        // don't support this type of collections.
        defineConfigurable(this, { target: target, contentRect: contentRect });
    }
    return ResizeObserverEntry;
}());

var ResizeObserverSPI = /** @class */ (function () {
    /**
     * Creates a new instance of ResizeObserver.
     *
     * @param {ResizeObserverCallback} callback - Callback function that is invoked
     *      when one of the observed elements changes it's content dimensions.
     * @param {ResizeObserverController} controller - Controller instance which
     *      is responsible for the updates of observer.
     * @param {ResizeObserver} callbackCtx - Reference to the public
     *      ResizeObserver instance which will be passed to callback function.
     */
    function ResizeObserverSPI(callback, controller, callbackCtx) {
        /**
         * Collection of resize observations that have detected changes in dimensions
         * of elements.
         *
         * @private {Array<ResizeObservation>}
         */
        this.activeObservations_ = [];
        /**
         * Registry of the ResizeObservation instances.
         *
         * @private {Map<Element, ResizeObservation>}
         */
        this.observations_ = new MapShim();
        if (typeof callback !== 'function') {
            throw new TypeError('The callback provided as parameter 1 is not a function.');
        }
        this.callback_ = callback;
        this.controller_ = controller;
        this.callbackCtx_ = callbackCtx;
    }
    /**
     * Starts observing provided element.
     *
     * @param {Element} target - Element to be observed.
     * @returns {void}
     */
    ResizeObserverSPI.prototype.observe = function (target) {
        if (!arguments.length) {
            throw new TypeError('1 argument required, but only 0 present.');
        }
        // Do nothing if current environment doesn't have the Element interface.
        if (typeof Element === 'undefined' || !(Element instanceof Object)) {
            return;
        }
        if (!(target instanceof getWindowOf(target).Element)) {
            throw new TypeError('parameter 1 is not of type "Element".');
        }
        var observations = this.observations_;
        // Do nothing if element is already being observed.
        if (observations.has(target)) {
            return;
        }
        observations.set(target, new ResizeObservation(target));
        this.controller_.addObserver(this);
        // Force the update of observations.
        this.controller_.refresh();
    };
    /**
     * Stops observing provided element.
     *
     * @param {Element} target - Element to stop observing.
     * @returns {void}
     */
    ResizeObserverSPI.prototype.unobserve = function (target) {
        if (!arguments.length) {
            throw new TypeError('1 argument required, but only 0 present.');
        }
        // Do nothing if current environment doesn't have the Element interface.
        if (typeof Element === 'undefined' || !(Element instanceof Object)) {
            return;
        }
        if (!(target instanceof getWindowOf(target).Element)) {
            throw new TypeError('parameter 1 is not of type "Element".');
        }
        var observations = this.observations_;
        // Do nothing if element is not being observed.
        if (!observations.has(target)) {
            return;
        }
        observations.delete(target);
        if (!observations.size) {
            this.controller_.removeObserver(this);
        }
    };
    /**
     * Stops observing all elements.
     *
     * @returns {void}
     */
    ResizeObserverSPI.prototype.disconnect = function () {
        this.clearActive();
        this.observations_.clear();
        this.controller_.removeObserver(this);
    };
    /**
     * Collects observation instances the associated element of which has changed
     * it's content rectangle.
     *
     * @returns {void}
     */
    ResizeObserverSPI.prototype.gatherActive = function () {
        var _this = this;
        this.clearActive();
        this.observations_.forEach(function (observation) {
            if (observation.isActive()) {
                _this.activeObservations_.push(observation);
            }
        });
    };
    /**
     * Invokes initial callback function with a list of ResizeObserverEntry
     * instances collected from active resize observations.
     *
     * @returns {void}
     */
    ResizeObserverSPI.prototype.broadcastActive = function () {
        // Do nothing if observer doesn't have active observations.
        if (!this.hasActive()) {
            return;
        }
        var ctx = this.callbackCtx_;
        // Create ResizeObserverEntry instance for every active observation.
        var entries = this.activeObservations_.map(function (observation) {
            return new ResizeObserverEntry(observation.target, observation.broadcastRect());
        });
        this.callback_.call(ctx, entries, ctx);
        this.clearActive();
    };
    /**
     * Clears the collection of active observations.
     *
     * @returns {void}
     */
    ResizeObserverSPI.prototype.clearActive = function () {
        this.activeObservations_.splice(0);
    };
    /**
     * Tells whether observer has active observations.
     *
     * @returns {boolean}
     */
    ResizeObserverSPI.prototype.hasActive = function () {
        return this.activeObservations_.length > 0;
    };
    return ResizeObserverSPI;
}());

// Registry of internal observers. If WeakMap is not available use current shim
// for the Map collection as it has all required methods and because WeakMap
// can't be fully polyfilled anyway.
var observers = typeof WeakMap !== 'undefined' ? new WeakMap() : new MapShim();
/**
 * ResizeObserver API. Encapsulates the ResizeObserver SPI implementation
 * exposing only those methods and properties that are defined in the spec.
 */
var ResizeObserver = /** @class */ (function () {
    /**
     * Creates a new instance of ResizeObserver.
     *
     * @param {ResizeObserverCallback} callback - Callback that is invoked when
     *      dimensions of the observed elements change.
     */
    function ResizeObserver(callback) {
        if (!(this instanceof ResizeObserver)) {
            throw new TypeError('Cannot call a class as a function.');
        }
        if (!arguments.length) {
            throw new TypeError('1 argument required, but only 0 present.');
        }
        var controller = ResizeObserverController.getInstance();
        var observer = new ResizeObserverSPI(callback, controller, this);
        observers.set(this, observer);
    }
    return ResizeObserver;
}());
// Expose public methods of ResizeObserver.
[
    'observe',
    'unobserve',
    'disconnect'
].forEach(function (method) {
    ResizeObserver.prototype[method] = function () {
        var _a;
        return (_a = observers.get(this))[method].apply(_a, arguments);
    };
});

var index = (function () {
    // Export existing implementation if available.
    if (typeof global$1.ResizeObserver !== 'undefined') {
        return global$1.ResizeObserver;
    }
    return ResizeObserver;
})();

/* harmony default export */ const ResizeObserver_es = (index);

;// CONCATENATED MODULE: ./node_modules/rc-resize-observer/es/utils/observerUtil.js

// =============================== Const ===============================
var elementListeners = new Map();
function onResize(entities) {
  entities.forEach(function (entity) {
    var _elementListeners$get;
    var target = entity.target;
    (_elementListeners$get = elementListeners.get(target)) === null || _elementListeners$get === void 0 ? void 0 : _elementListeners$get.forEach(function (listener) {
      return listener(target);
    });
  });
}
// Note: ResizeObserver polyfill not support option to measure border-box resize
var resizeObserver = new ResizeObserver_es(onResize);
// Dev env only
var _el = (/* unused pure expression or super */ null && ( false ? 0 : null)); // eslint-disable-line
var _rs = (/* unused pure expression or super */ null && ( false ? 0 : null)); // eslint-disable-line
// ============================== Observe ==============================
function observe(element, callback) {
  if (!elementListeners.has(element)) {
    elementListeners.set(element, new Set());
    resizeObserver.observe(element);
  }
  elementListeners.get(element).add(callback);
}
function unobserve(element, callback) {
  if (elementListeners.has(element)) {
    elementListeners.get(element).delete(callback);
    if (!elementListeners.get(element).size) {
      resizeObserver.unobserve(element);
      elementListeners.delete(element);
    }
  }
}
;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/createClass.js

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor);
  }
}
function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}
;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };
  return _setPrototypeOf(o, p);
}
;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/inherits.js

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  Object.defineProperty(subClass, "prototype", {
    writable: false
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}
;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js
function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}
;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/isNativeReflectConstruct.js
function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;
  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}
;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self;
}
;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js


function _possibleConstructorReturn(self, call) {
  if (call && (typeof_typeof(call) === "object" || typeof call === "function")) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }
  return _assertThisInitialized(self);
}
;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/createSuper.js



function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();
  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived),
      result;
    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }
    return _possibleConstructorReturn(this, result);
  };
}
;// CONCATENATED MODULE: ./node_modules/rc-resize-observer/es/SingleObserver/DomWrapper.js





/**
 * Fallback to findDOMNode if origin ref do not provide any dom element
 */
var DomWrapper = /*#__PURE__*/function (_React$Component) {
  _inherits(DomWrapper, _React$Component);
  var _super = _createSuper(DomWrapper);
  function DomWrapper() {
    _classCallCheck(this, DomWrapper);
    return _super.apply(this, arguments);
  }
  _createClass(DomWrapper, [{
    key: "render",
    value: function render() {
      return this.props.children;
    }
  }]);
  return DomWrapper;
}(external_React_namespaceObject.Component);

;// CONCATENATED MODULE: ./node_modules/rc-resize-observer/es/Collection.js

var CollectionContext = /*#__PURE__*/external_React_namespaceObject.createContext(null);
/**
 * Collect all the resize event from children ResizeObserver
 */
function Collection(_ref) {
  var children = _ref.children,
    onBatchResize = _ref.onBatchResize;
  var resizeIdRef = external_React_namespaceObject.useRef(0);
  var resizeInfosRef = external_React_namespaceObject.useRef([]);
  var onCollectionResize = external_React_namespaceObject.useContext(CollectionContext);
  var onResize = external_React_namespaceObject.useCallback(function (size, element, data) {
    resizeIdRef.current += 1;
    var currentId = resizeIdRef.current;
    resizeInfosRef.current.push({
      size: size,
      element: element,
      data: data
    });
    Promise.resolve().then(function () {
      if (currentId === resizeIdRef.current) {
        onBatchResize === null || onBatchResize === void 0 ? void 0 : onBatchResize(resizeInfosRef.current);
        resizeInfosRef.current = [];
      }
    });
    // Continue bubbling if parent exist
    onCollectionResize === null || onCollectionResize === void 0 ? void 0 : onCollectionResize(size, element, data);
  }, [onBatchResize, onCollectionResize]);
  return /*#__PURE__*/external_React_namespaceObject.createElement(CollectionContext.Provider, {
    value: onResize
  }, children);
}
;// CONCATENATED MODULE: ./node_modules/rc-resize-observer/es/SingleObserver/index.js







function SingleObserver(props, ref) {
  var children = props.children,
    disabled = props.disabled;
  var elementRef = external_React_namespaceObject.useRef(null);
  var wrapperRef = external_React_namespaceObject.useRef(null);
  var onCollectionResize = external_React_namespaceObject.useContext(CollectionContext);
  // =========================== Children ===========================
  var isRenderProps = typeof children === 'function';
  var mergedChildren = isRenderProps ? children(elementRef) : children;
  // ============================= Size =============================
  var sizeRef = external_React_namespaceObject.useRef({
    width: -1,
    height: -1,
    offsetWidth: -1,
    offsetHeight: -1
  });
  // ============================= Ref ==============================
  var canRef = !isRenderProps && /*#__PURE__*/external_React_namespaceObject.isValidElement(mergedChildren) && supportRef(mergedChildren);
  var originRef = canRef ? mergedChildren.ref : null;
  var mergedRef = external_React_namespaceObject.useMemo(function () {
    return composeRef(originRef, elementRef);
  }, [originRef, elementRef]);
  var getDom = function getDom() {
    return findDOMNode(elementRef.current) || findDOMNode(wrapperRef.current);
  };
  external_React_namespaceObject.useImperativeHandle(ref, function () {
    return getDom();
  });
  // =========================== Observe ============================
  var propsRef = external_React_namespaceObject.useRef(props);
  propsRef.current = props;
  // Handler
  var onInternalResize = external_React_namespaceObject.useCallback(function (target) {
    var _propsRef$current = propsRef.current,
      onResize = _propsRef$current.onResize,
      data = _propsRef$current.data;
    var _target$getBoundingCl = target.getBoundingClientRect(),
      width = _target$getBoundingCl.width,
      height = _target$getBoundingCl.height;
    var offsetWidth = target.offsetWidth,
      offsetHeight = target.offsetHeight;
    /**
     * Resize observer trigger when content size changed.
     * In most case we just care about element size,
     * let's use `boundary` instead of `contentRect` here to avoid shaking.
     */
    var fixedWidth = Math.floor(width);
    var fixedHeight = Math.floor(height);
    if (sizeRef.current.width !== fixedWidth || sizeRef.current.height !== fixedHeight || sizeRef.current.offsetWidth !== offsetWidth || sizeRef.current.offsetHeight !== offsetHeight) {
      var size = {
        width: fixedWidth,
        height: fixedHeight,
        offsetWidth: offsetWidth,
        offsetHeight: offsetHeight
      };
      sizeRef.current = size;
      // IE is strange, right?
      var mergedOffsetWidth = offsetWidth === Math.round(width) ? width : offsetWidth;
      var mergedOffsetHeight = offsetHeight === Math.round(height) ? height : offsetHeight;
      var sizeInfo = _objectSpread2(_objectSpread2({}, size), {}, {
        offsetWidth: mergedOffsetWidth,
        offsetHeight: mergedOffsetHeight
      });
      // Let collection know what happened
      onCollectionResize === null || onCollectionResize === void 0 ? void 0 : onCollectionResize(sizeInfo, target, data);
      if (onResize) {
        // defer the callback but not defer to next frame
        Promise.resolve().then(function () {
          onResize(sizeInfo, target);
        });
      }
    }
  }, []);
  // Dynamic observe
  external_React_namespaceObject.useEffect(function () {
    var currentElement = getDom();
    if (currentElement && !disabled) {
      observe(currentElement, onInternalResize);
    }
    return function () {
      return unobserve(currentElement, onInternalResize);
    };
  }, [elementRef.current, disabled]);
  // ============================ Render ============================
  return /*#__PURE__*/external_React_namespaceObject.createElement(DomWrapper, {
    ref: wrapperRef
  }, canRef ? /*#__PURE__*/external_React_namespaceObject.cloneElement(mergedChildren, {
    ref: mergedRef
  }) : mergedChildren);
}
var RefSingleObserver = /*#__PURE__*/external_React_namespaceObject.forwardRef(SingleObserver);
if (false) {}
/* harmony default export */ const es_SingleObserver = (RefSingleObserver);
;// CONCATENATED MODULE: ./node_modules/rc-resize-observer/es/index.js






var INTERNAL_PREFIX_KEY = 'rc-observer-key';


function es_ResizeObserver(props, ref) {
  var children = props.children;
  var childNodes = typeof children === 'function' ? [children] : toArray_toArray(children);
  if (false) {}
  return childNodes.map(function (child, index) {
    var key = (child === null || child === void 0 ? void 0 : child.key) || "".concat(INTERNAL_PREFIX_KEY, "-").concat(index);
    return /*#__PURE__*/external_React_namespaceObject.createElement(es_SingleObserver, extends_extends({}, props, {
      key: key,
      ref: index === 0 ? ref : undefined
    }), child);
  });
}
var RefResizeObserver = /*#__PURE__*/external_React_namespaceObject.forwardRef(es_ResizeObserver);
if (false) {}
RefResizeObserver.Collection = Collection;
/* harmony default export */ const es = (RefResizeObserver);
;// CONCATENATED MODULE: ./node_modules/rc-overflow/es/Item.js



var Item_excluded = ["prefixCls", "invalidate", "item", "renderItem", "responsive", "responsiveDisabled", "registerSize", "itemKey", "className", "style", "children", "display", "order", "component"];



// Use shared variable to save bundle size
var UNDEFINED = undefined;
function InternalItem(props, ref) {
  var prefixCls = props.prefixCls,
    invalidate = props.invalidate,
    item = props.item,
    renderItem = props.renderItem,
    responsive = props.responsive,
    responsiveDisabled = props.responsiveDisabled,
    registerSize = props.registerSize,
    itemKey = props.itemKey,
    className = props.className,
    style = props.style,
    children = props.children,
    display = props.display,
    order = props.order,
    _props$component = props.component,
    Component = _props$component === void 0 ? 'div' : _props$component,
    restProps = _objectWithoutProperties(props, Item_excluded);
  var mergedHidden = responsive && !display;
  // ================================ Effect ================================
  function internalRegisterSize(width) {
    registerSize(itemKey, width);
  }
  external_React_namespaceObject.useEffect(function () {
    return function () {
      internalRegisterSize(null);
    };
  }, []);
  // ================================ Render ================================
  var childNode = renderItem && item !== UNDEFINED ? renderItem(item) : children;
  var overflowStyle;
  if (!invalidate) {
    overflowStyle = {
      opacity: mergedHidden ? 0 : 1,
      height: mergedHidden ? 0 : UNDEFINED,
      overflowY: mergedHidden ? 'hidden' : UNDEFINED,
      order: responsive ? order : UNDEFINED,
      pointerEvents: mergedHidden ? 'none' : UNDEFINED,
      position: mergedHidden ? 'absolute' : UNDEFINED
    };
  }
  var overflowProps = {};
  if (mergedHidden) {
    overflowProps['aria-hidden'] = true;
  }
  var itemNode = /*#__PURE__*/external_React_namespaceObject.createElement(Component, extends_extends({
    className: classnames_default()(!invalidate && prefixCls, className),
    style: _objectSpread2(_objectSpread2({}, overflowStyle), style)
  }, overflowProps, restProps, {
    ref: ref
  }), childNode);
  if (responsive) {
    itemNode = /*#__PURE__*/external_React_namespaceObject.createElement(es, {
      onResize: function onResize(_ref) {
        var offsetWidth = _ref.offsetWidth;
        internalRegisterSize(offsetWidth);
      },
      disabled: responsiveDisabled
    }, itemNode);
  }
  return itemNode;
}
var Item = /*#__PURE__*/external_React_namespaceObject.forwardRef(InternalItem);
Item.displayName = 'Item';
/* harmony default export */ const es_Item = (Item);
;// CONCATENATED MODULE: ./node_modules/rc-util/es/raf.js
var raf = function raf(callback) {
  return +setTimeout(callback, 16);
};
var caf = function caf(num) {
  return clearTimeout(num);
};
if (typeof window !== 'undefined' && 'requestAnimationFrame' in window) {
  raf = function raf(callback) {
    return window.requestAnimationFrame(callback);
  };
  caf = function caf(handle) {
    return window.cancelAnimationFrame(handle);
  };
}
var rafUUID = 0;
var rafIds = new Map();
function cleanup(id) {
  rafIds.delete(id);
}
var wrapperRaf = function wrapperRaf(callback) {
  var times = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  rafUUID += 1;
  var id = rafUUID;
  function callRef(leftTimes) {
    if (leftTimes === 0) {
      // Clean up
      cleanup(id);

      // Trigger
      callback();
    } else {
      // Next raf
      var realId = raf(function () {
        callRef(leftTimes - 1);
      });

      // Bind real raf id
      rafIds.set(id, realId);
    }
  }
  callRef(times);
  return id;
};
wrapperRaf.cancel = function (id) {
  var realId = rafIds.get(id);
  cleanup(realId);
  return caf(realId);
};
/* harmony default export */ const es_raf = (wrapperRaf);
;// CONCATENATED MODULE: ./node_modules/rc-overflow/es/hooks/channelUpdate.js

function channelUpdate(callback) {
  if (typeof MessageChannel === 'undefined') {
    es_raf(callback);
  } else {
    var channel = new MessageChannel();
    channel.port1.onmessage = function () {
      return callback();
    };
    channel.port2.postMessage(undefined);
  }
}
;// CONCATENATED MODULE: ./node_modules/rc-overflow/es/hooks/useEffectState.js





/**
 * Batcher for record any `useEffectState` need update.
 */
function useBatcher() {
  // Updater Trigger
  var updateFuncRef = external_React_namespaceObject.useRef(null);
  // Notify update
  var notifyEffectUpdate = function notifyEffectUpdate(callback) {
    if (!updateFuncRef.current) {
      updateFuncRef.current = [];
      channelUpdate(function () {
        (0,external_ReactDOM_namespaceObject.unstable_batchedUpdates)(function () {
          updateFuncRef.current.forEach(function (fn) {
            fn();
          });
          updateFuncRef.current = null;
        });
      });
    }
    updateFuncRef.current.push(callback);
  };
  return notifyEffectUpdate;
}
/**
 * Trigger state update by `useLayoutEffect` to save perf.
 */
function useEffectState(notifyEffectUpdate, defaultValue) {
  // Value
  var _React$useState = external_React_namespaceObject.useState(defaultValue),
    _React$useState2 = slicedToArray_slicedToArray(_React$useState, 2),
    stateValue = _React$useState2[0],
    setStateValue = _React$useState2[1];
  // Set State
  var setEffectVal = useEvent(function (nextValue) {
    notifyEffectUpdate(function () {
      setStateValue(nextValue);
    });
  });
  return [stateValue, setEffectVal];
}
;// CONCATENATED MODULE: ./node_modules/rc-overflow/es/RawItem.js


var RawItem_excluded = ["component"],
  _excluded2 = ["className"],
  _excluded3 = ["className"];




var InternalRawItem = function InternalRawItem(props, ref) {
  var context = external_React_namespaceObject.useContext(OverflowContext);
  // Render directly when context not provided
  if (!context) {
    var _props$component = props.component,
      Component = _props$component === void 0 ? 'div' : _props$component,
      _restProps = _objectWithoutProperties(props, RawItem_excluded);
    return /*#__PURE__*/external_React_namespaceObject.createElement(Component, extends_extends({}, _restProps, {
      ref: ref
    }));
  }
  var contextClassName = context.className,
    restContext = _objectWithoutProperties(context, _excluded2);
  var className = props.className,
    restProps = _objectWithoutProperties(props, _excluded3);
  // Do not pass context to sub item to avoid multiple measure
  return /*#__PURE__*/external_React_namespaceObject.createElement(OverflowContext.Provider, {
    value: null
  }, /*#__PURE__*/external_React_namespaceObject.createElement(es_Item, extends_extends({
    ref: ref,
    className: classnames_default()(contextClassName, className)
  }, restContext, restProps)));
};
var RawItem = /*#__PURE__*/external_React_namespaceObject.forwardRef(InternalRawItem);
RawItem.displayName = 'RawItem';
/* harmony default export */ const es_RawItem = (RawItem);
;// CONCATENATED MODULE: ./node_modules/rc-overflow/es/Overflow.js




var Overflow_excluded = ["prefixCls", "data", "renderItem", "renderRawItem", "itemKey", "itemWidth", "ssr", "style", "className", "maxCount", "renderRest", "renderRawRest", "suffix", "component", "itemComponent", "onVisibleChange"];








var OverflowContext = /*#__PURE__*/external_React_namespaceObject.createContext(null);
var RESPONSIVE = 'responsive';
var INVALIDATE = 'invalidate';
function defaultRenderRest(omittedItems) {
  return "+ ".concat(omittedItems.length, " ...");
}
function Overflow(props, ref) {
  var _props$prefixCls = props.prefixCls,
    prefixCls = _props$prefixCls === void 0 ? 'rc-overflow' : _props$prefixCls,
    _props$data = props.data,
    data = _props$data === void 0 ? [] : _props$data,
    renderItem = props.renderItem,
    renderRawItem = props.renderRawItem,
    itemKey = props.itemKey,
    _props$itemWidth = props.itemWidth,
    itemWidth = _props$itemWidth === void 0 ? 10 : _props$itemWidth,
    ssr = props.ssr,
    style = props.style,
    className = props.className,
    maxCount = props.maxCount,
    renderRest = props.renderRest,
    renderRawRest = props.renderRawRest,
    suffix = props.suffix,
    _props$component = props.component,
    Component = _props$component === void 0 ? 'div' : _props$component,
    itemComponent = props.itemComponent,
    onVisibleChange = props.onVisibleChange,
    restProps = _objectWithoutProperties(props, Overflow_excluded);
  var fullySSR = ssr === 'full';
  var notifyEffectUpdate = useBatcher();
  var _useEffectState = useEffectState(notifyEffectUpdate, null),
    _useEffectState2 = slicedToArray_slicedToArray(_useEffectState, 2),
    containerWidth = _useEffectState2[0],
    setContainerWidth = _useEffectState2[1];
  var mergedContainerWidth = containerWidth || 0;
  var _useEffectState3 = useEffectState(notifyEffectUpdate, new Map()),
    _useEffectState4 = slicedToArray_slicedToArray(_useEffectState3, 2),
    itemWidths = _useEffectState4[0],
    setItemWidths = _useEffectState4[1];
  var _useEffectState5 = useEffectState(notifyEffectUpdate, 0),
    _useEffectState6 = slicedToArray_slicedToArray(_useEffectState5, 2),
    prevRestWidth = _useEffectState6[0],
    setPrevRestWidth = _useEffectState6[1];
  var _useEffectState7 = useEffectState(notifyEffectUpdate, 0),
    _useEffectState8 = slicedToArray_slicedToArray(_useEffectState7, 2),
    restWidth = _useEffectState8[0],
    setRestWidth = _useEffectState8[1];
  var _useEffectState9 = useEffectState(notifyEffectUpdate, 0),
    _useEffectState10 = slicedToArray_slicedToArray(_useEffectState9, 2),
    suffixWidth = _useEffectState10[0],
    setSuffixWidth = _useEffectState10[1];
  var _useState = (0,external_React_namespaceObject.useState)(null),
    _useState2 = slicedToArray_slicedToArray(_useState, 2),
    suffixFixedStart = _useState2[0],
    setSuffixFixedStart = _useState2[1];
  var _useState3 = (0,external_React_namespaceObject.useState)(null),
    _useState4 = slicedToArray_slicedToArray(_useState3, 2),
    displayCount = _useState4[0],
    setDisplayCount = _useState4[1];
  var mergedDisplayCount = external_React_namespaceObject.useMemo(function () {
    if (displayCount === null && fullySSR) {
      return Number.MAX_SAFE_INTEGER;
    }
    return displayCount || 0;
  }, [displayCount, containerWidth]);
  var _useState5 = (0,external_React_namespaceObject.useState)(false),
    _useState6 = slicedToArray_slicedToArray(_useState5, 2),
    restReady = _useState6[0],
    setRestReady = _useState6[1];
  var itemPrefixCls = "".concat(prefixCls, "-item");
  // Always use the max width to avoid blink
  var mergedRestWidth = Math.max(prevRestWidth, restWidth);
  // ================================= Data =================================
  var isResponsive = maxCount === RESPONSIVE;
  var shouldResponsive = data.length && isResponsive;
  var invalidate = maxCount === INVALIDATE;
  /**
   * When is `responsive`, we will always render rest node to get the real width of it for calculation
   */
  var showRest = shouldResponsive || typeof maxCount === 'number' && data.length > maxCount;
  var mergedData = (0,external_React_namespaceObject.useMemo)(function () {
    var items = data;
    if (shouldResponsive) {
      if (containerWidth === null && fullySSR) {
        items = data;
      } else {
        items = data.slice(0, Math.min(data.length, mergedContainerWidth / itemWidth));
      }
    } else if (typeof maxCount === 'number') {
      items = data.slice(0, maxCount);
    }
    return items;
  }, [data, itemWidth, containerWidth, maxCount, shouldResponsive]);
  var omittedItems = (0,external_React_namespaceObject.useMemo)(function () {
    if (shouldResponsive) {
      return data.slice(mergedDisplayCount + 1);
    }
    return data.slice(mergedData.length);
  }, [data, mergedData, shouldResponsive, mergedDisplayCount]);
  // ================================= Item =================================
  var getKey = (0,external_React_namespaceObject.useCallback)(function (item, index) {
    var _ref;
    if (typeof itemKey === 'function') {
      return itemKey(item);
    }
    return (_ref = itemKey && (item === null || item === void 0 ? void 0 : item[itemKey])) !== null && _ref !== void 0 ? _ref : index;
  }, [itemKey]);
  var mergedRenderItem = (0,external_React_namespaceObject.useCallback)(renderItem || function (item) {
    return item;
  }, [renderItem]);
  function updateDisplayCount(count, suffixFixedStartVal, notReady) {
    // React 18 will sync render even when the value is same in some case.
    // We take `mergedData` as deps which may cause dead loop if it's dynamic generate.
    // ref: https://github.com/ant-design/ant-design/issues/36559
    if (displayCount === count && (suffixFixedStartVal === undefined || suffixFixedStartVal === suffixFixedStart)) {
      return;
    }
    setDisplayCount(count);
    if (!notReady) {
      setRestReady(count < data.length - 1);
      onVisibleChange === null || onVisibleChange === void 0 ? void 0 : onVisibleChange(count);
    }
    if (suffixFixedStartVal !== undefined) {
      setSuffixFixedStart(suffixFixedStartVal);
    }
  }
  // ================================= Size =================================
  function onOverflowResize(_, element) {
    setContainerWidth(element.clientWidth);
  }
  function registerSize(key, width) {
    setItemWidths(function (origin) {
      var clone = new Map(origin);
      if (width === null) {
        clone.delete(key);
      } else {
        clone.set(key, width);
      }
      return clone;
    });
  }
  function registerOverflowSize(_, width) {
    setRestWidth(width);
    setPrevRestWidth(restWidth);
  }
  function registerSuffixSize(_, width) {
    setSuffixWidth(width);
  }
  // ================================ Effect ================================
  function getItemWidth(index) {
    return itemWidths.get(getKey(mergedData[index], index));
  }
  hooks_useLayoutEffect(function () {
    if (mergedContainerWidth && typeof mergedRestWidth === 'number' && mergedData) {
      var totalWidth = suffixWidth;
      var len = mergedData.length;
      var lastIndex = len - 1;
      // When data count change to 0, reset this since not loop will reach
      if (!len) {
        updateDisplayCount(0, null);
        return;
      }
      for (var i = 0; i < len; i += 1) {
        var currentItemWidth = getItemWidth(i);
        // Fully will always render
        if (fullySSR) {
          currentItemWidth = currentItemWidth || 0;
        }
        // Break since data not ready
        if (currentItemWidth === undefined) {
          updateDisplayCount(i - 1, undefined, true);
          break;
        }
        // Find best match
        totalWidth += currentItemWidth;
        if (
        // Only one means `totalWidth` is the final width
        lastIndex === 0 && totalWidth <= mergedContainerWidth ||
        // Last two width will be the final width
        i === lastIndex - 1 && totalWidth + getItemWidth(lastIndex) <= mergedContainerWidth) {
          // Additional check if match the end
          updateDisplayCount(lastIndex, null);
          break;
        } else if (totalWidth + mergedRestWidth > mergedContainerWidth) {
          // Can not hold all the content to show rest
          updateDisplayCount(i - 1, totalWidth - currentItemWidth - suffixWidth + restWidth);
          break;
        }
      }
      if (suffix && getItemWidth(0) + suffixWidth > mergedContainerWidth) {
        setSuffixFixedStart(null);
      }
    }
  }, [mergedContainerWidth, itemWidths, restWidth, suffixWidth, getKey, mergedData]);
  // ================================ Render ================================
  var displayRest = restReady && !!omittedItems.length;
  var suffixStyle = {};
  if (suffixFixedStart !== null && shouldResponsive) {
    suffixStyle = {
      position: 'absolute',
      left: suffixFixedStart,
      top: 0
    };
  }
  var itemSharedProps = {
    prefixCls: itemPrefixCls,
    responsive: shouldResponsive,
    component: itemComponent,
    invalidate: invalidate
  };
  // >>>>> Choice render fun by `renderRawItem`
  var internalRenderItemNode = renderRawItem ? function (item, index) {
    var key = getKey(item, index);
    return /*#__PURE__*/external_React_namespaceObject.createElement(OverflowContext.Provider, {
      key: key,
      value: _objectSpread2(_objectSpread2({}, itemSharedProps), {}, {
        order: index,
        item: item,
        itemKey: key,
        registerSize: registerSize,
        display: index <= mergedDisplayCount
      })
    }, renderRawItem(item, index));
  } : function (item, index) {
    var key = getKey(item, index);
    return /*#__PURE__*/external_React_namespaceObject.createElement(es_Item, extends_extends({}, itemSharedProps, {
      order: index,
      key: key,
      item: item,
      renderItem: mergedRenderItem,
      itemKey: key,
      registerSize: registerSize,
      display: index <= mergedDisplayCount
    }));
  };
  // >>>>> Rest node
  var restNode;
  var restContextProps = {
    order: displayRest ? mergedDisplayCount : Number.MAX_SAFE_INTEGER,
    className: "".concat(itemPrefixCls, "-rest"),
    registerSize: registerOverflowSize,
    display: displayRest
  };
  if (!renderRawRest) {
    var mergedRenderRest = renderRest || defaultRenderRest;
    restNode = /*#__PURE__*/external_React_namespaceObject.createElement(es_Item, extends_extends({}, itemSharedProps, restContextProps), typeof mergedRenderRest === 'function' ? mergedRenderRest(omittedItems) : mergedRenderRest);
  } else if (renderRawRest) {
    restNode = /*#__PURE__*/external_React_namespaceObject.createElement(OverflowContext.Provider, {
      value: _objectSpread2(_objectSpread2({}, itemSharedProps), restContextProps)
    }, renderRawRest(omittedItems));
  }
  var overflowNode = /*#__PURE__*/external_React_namespaceObject.createElement(Component, extends_extends({
    className: classnames_default()(!invalidate && prefixCls, className),
    style: style,
    ref: ref
  }, restProps), mergedData.map(internalRenderItemNode), showRest ? restNode : null, suffix && /*#__PURE__*/external_React_namespaceObject.createElement(es_Item, extends_extends({}, itemSharedProps, {
    responsive: isResponsive,
    responsiveDisabled: !shouldResponsive,
    order: mergedDisplayCount,
    className: "".concat(itemPrefixCls, "-suffix"),
    registerSize: registerSuffixSize,
    display: true,
    style: suffixStyle
  }), suffix));
  if (isResponsive) {
    overflowNode = /*#__PURE__*/external_React_namespaceObject.createElement(es, {
      onResize: onOverflowResize,
      disabled: !shouldResponsive
    }, overflowNode);
  }
  return overflowNode;
}
var ForwardOverflow = /*#__PURE__*/external_React_namespaceObject.forwardRef(Overflow);
ForwardOverflow.displayName = 'Overflow';
ForwardOverflow.Item = es_RawItem;
ForwardOverflow.RESPONSIVE = RESPONSIVE;
ForwardOverflow.INVALIDATE = INVALIDATE;
// Convert to generic type
/* harmony default export */ const es_Overflow = (ForwardOverflow);
;// CONCATENATED MODULE: ./node_modules/rc-overflow/es/index.js

/* harmony default export */ const rc_overflow_es = (es_Overflow);
;// CONCATENATED MODULE: ./node_modules/rc-select/es/TransBtn.js


var TransBtn = function TransBtn(_ref) {
  var className = _ref.className,
    customizeIcon = _ref.customizeIcon,
    customizeIconProps = _ref.customizeIconProps,
    _onMouseDown = _ref.onMouseDown,
    onClick = _ref.onClick,
    children = _ref.children;
  var icon;
  if (typeof customizeIcon === 'function') {
    icon = customizeIcon(customizeIconProps);
  } else {
    icon = customizeIcon;
  }
  return /*#__PURE__*/external_React_namespaceObject.createElement("span", {
    className: className,
    onMouseDown: function onMouseDown(event) {
      event.preventDefault();
      if (_onMouseDown) {
        _onMouseDown(event);
      }
    },
    style: {
      userSelect: 'none',
      WebkitUserSelect: 'none'
    },
    unselectable: "on",
    onClick: onClick,
    "aria-hidden": true
  }, icon !== undefined ? icon : /*#__PURE__*/external_React_namespaceObject.createElement("span", {
    className: classnames_default()(className.split(/\s+/).map(function (cls) {
      return "".concat(cls, "-icon");
    }))
  }, children));
};
/* harmony default export */ const es_TransBtn = (TransBtn);
;// CONCATENATED MODULE: ./node_modules/rc-select/es/Selector/Input.js





var Input = function Input(_ref, ref) {
  var _inputNode2, _inputNode2$props;
  var prefixCls = _ref.prefixCls,
    id = _ref.id,
    inputElement = _ref.inputElement,
    disabled = _ref.disabled,
    tabIndex = _ref.tabIndex,
    autoFocus = _ref.autoFocus,
    autoComplete = _ref.autoComplete,
    editable = _ref.editable,
    activeDescendantId = _ref.activeDescendantId,
    value = _ref.value,
    maxLength = _ref.maxLength,
    _onKeyDown = _ref.onKeyDown,
    _onMouseDown = _ref.onMouseDown,
    _onChange = _ref.onChange,
    onPaste = _ref.onPaste,
    _onCompositionStart = _ref.onCompositionStart,
    _onCompositionEnd = _ref.onCompositionEnd,
    open = _ref.open,
    attrs = _ref.attrs;
  var inputNode = inputElement || /*#__PURE__*/external_React_namespaceObject.createElement("input", null);
  var _inputNode = inputNode,
    originRef = _inputNode.ref,
    originProps = _inputNode.props;
  var onOriginKeyDown = originProps.onKeyDown,
    onOriginChange = originProps.onChange,
    onOriginMouseDown = originProps.onMouseDown,
    onOriginCompositionStart = originProps.onCompositionStart,
    onOriginCompositionEnd = originProps.onCompositionEnd,
    style = originProps.style;
  warning_warning(!('maxLength' in inputNode.props), "Passing 'maxLength' to input element directly may not work because input in BaseSelect is controlled.");
  inputNode = /*#__PURE__*/external_React_namespaceObject.cloneElement(inputNode, _objectSpread2(_objectSpread2(_objectSpread2({
    type: 'search'
  }, originProps), {}, {
    // Override over origin props
    id: id,
    ref: composeRef(ref, originRef),
    disabled: disabled,
    tabIndex: tabIndex,
    autoComplete: autoComplete || 'off',
    autoFocus: autoFocus,
    className: classnames_default()("".concat(prefixCls, "-selection-search-input"), (_inputNode2 = inputNode) === null || _inputNode2 === void 0 ? void 0 : (_inputNode2$props = _inputNode2.props) === null || _inputNode2$props === void 0 ? void 0 : _inputNode2$props.className),
    role: 'combobox',
    'aria-expanded': open,
    'aria-haspopup': 'listbox',
    'aria-owns': "".concat(id, "_list"),
    'aria-autocomplete': 'list',
    'aria-controls': "".concat(id, "_list"),
    'aria-activedescendant': activeDescendantId
  }, attrs), {}, {
    value: editable ? value : '',
    maxLength: maxLength,
    readOnly: !editable,
    unselectable: !editable ? 'on' : null,
    style: _objectSpread2(_objectSpread2({}, style), {}, {
      opacity: editable ? null : 0
    }),
    onKeyDown: function onKeyDown(event) {
      _onKeyDown(event);
      if (onOriginKeyDown) {
        onOriginKeyDown(event);
      }
    },
    onMouseDown: function onMouseDown(event) {
      _onMouseDown(event);
      if (onOriginMouseDown) {
        onOriginMouseDown(event);
      }
    },
    onChange: function onChange(event) {
      _onChange(event);
      if (onOriginChange) {
        onOriginChange(event);
      }
    },
    onCompositionStart: function onCompositionStart(event) {
      _onCompositionStart(event);
      if (onOriginCompositionStart) {
        onOriginCompositionStart(event);
      }
    },
    onCompositionEnd: function onCompositionEnd(event) {
      _onCompositionEnd(event);
      if (onOriginCompositionEnd) {
        onOriginCompositionEnd(event);
      }
    },
    onPaste: onPaste
  }));
  return inputNode;
};
var RefInput = /*#__PURE__*/external_React_namespaceObject.forwardRef(Input);
RefInput.displayName = 'Input';
/* harmony default export */ const Selector_Input = (RefInput);
;// CONCATENATED MODULE: ./node_modules/rc-select/es/utils/commonUtil.js

function commonUtil_toArray(value) {
  if (Array.isArray(value)) {
    return value;
  }
  return value !== undefined ? [value] : [];
}
var isClient = typeof window !== 'undefined' && window.document && window.document.documentElement;

/** Is client side and not jsdom */
var isBrowserClient =  true && isClient;
function commonUtil_hasValue(value) {
  return value !== undefined && value !== null;
}
function isTitleType(title) {
  return ['string', 'number'].includes(typeof_typeof(title));
}
function getTitle(item) {
  var title = undefined;
  if (item) {
    if (isTitleType(item.title)) {
      title = item.title.toString();
    } else if (isTitleType(item.label)) {
      title = item.label.toString();
    }
  }
  return title;
}
;// CONCATENATED MODULE: ./node_modules/rc-select/es/hooks/useLayoutEffect.js
/* eslint-disable react-hooks/rules-of-hooks */



/**
 * Wrap `React.useLayoutEffect` which will not throw warning message in test env
 */
function useLayoutEffect_useLayoutEffect(effect, deps) {
  // Never happen in test env
  if (isBrowserClient) {
    /* istanbul ignore next */
    external_React_namespaceObject.useLayoutEffect(effect, deps);
  } else {
    external_React_namespaceObject.useEffect(effect, deps);
  }
}
/* eslint-enable */
;// CONCATENATED MODULE: ./node_modules/rc-select/es/Selector/MultipleSelector.js











function itemKey(value) {
  var _value$key;
  return (_value$key = value.key) !== null && _value$key !== void 0 ? _value$key : value.value;
}
var onPreventMouseDown = function onPreventMouseDown(event) {
  event.preventDefault();
  event.stopPropagation();
};
var SelectSelector = function SelectSelector(props) {
  var id = props.id,
    prefixCls = props.prefixCls,
    values = props.values,
    open = props.open,
    searchValue = props.searchValue,
    autoClearSearchValue = props.autoClearSearchValue,
    inputRef = props.inputRef,
    placeholder = props.placeholder,
    disabled = props.disabled,
    mode = props.mode,
    showSearch = props.showSearch,
    autoFocus = props.autoFocus,
    autoComplete = props.autoComplete,
    activeDescendantId = props.activeDescendantId,
    tabIndex = props.tabIndex,
    removeIcon = props.removeIcon,
    maxTagCount = props.maxTagCount,
    maxTagTextLength = props.maxTagTextLength,
    _props$maxTagPlacehol = props.maxTagPlaceholder,
    maxTagPlaceholder = _props$maxTagPlacehol === void 0 ? function (omittedValues) {
      return "+ ".concat(omittedValues.length, " ...");
    } : _props$maxTagPlacehol,
    tagRender = props.tagRender,
    onToggleOpen = props.onToggleOpen,
    onRemove = props.onRemove,
    onInputChange = props.onInputChange,
    onInputPaste = props.onInputPaste,
    onInputKeyDown = props.onInputKeyDown,
    onInputMouseDown = props.onInputMouseDown,
    onInputCompositionStart = props.onInputCompositionStart,
    onInputCompositionEnd = props.onInputCompositionEnd;
  var measureRef = external_React_namespaceObject.useRef(null);
  var _useState = (0,external_React_namespaceObject.useState)(0),
    _useState2 = slicedToArray_slicedToArray(_useState, 2),
    inputWidth = _useState2[0],
    setInputWidth = _useState2[1];
  var _useState3 = (0,external_React_namespaceObject.useState)(false),
    _useState4 = slicedToArray_slicedToArray(_useState3, 2),
    focused = _useState4[0],
    setFocused = _useState4[1];
  var selectionPrefixCls = "".concat(prefixCls, "-selection");

  // ===================== Search ======================
  var inputValue = open || mode === "multiple" && autoClearSearchValue === false || mode === 'tags' ? searchValue : '';
  var inputEditable = mode === 'tags' || mode === "multiple" && autoClearSearchValue === false || showSearch && (open || focused);

  // We measure width and set to the input immediately
  useLayoutEffect_useLayoutEffect(function () {
    setInputWidth(measureRef.current.scrollWidth);
  }, [inputValue]);

  // ===================== Render ======================
  // >>> Render Selector Node. Includes Item & Rest
  function defaultRenderSelector(item, content, itemDisabled, closable, onClose) {
    return /*#__PURE__*/external_React_namespaceObject.createElement("span", {
      className: classnames_default()("".concat(selectionPrefixCls, "-item"), defineProperty_defineProperty({}, "".concat(selectionPrefixCls, "-item-disabled"), itemDisabled)),
      title: getTitle(item)
    }, /*#__PURE__*/external_React_namespaceObject.createElement("span", {
      className: "".concat(selectionPrefixCls, "-item-content")
    }, content), closable && /*#__PURE__*/external_React_namespaceObject.createElement(es_TransBtn, {
      className: "".concat(selectionPrefixCls, "-item-remove"),
      onMouseDown: onPreventMouseDown,
      onClick: onClose,
      customizeIcon: removeIcon
    }, "\xD7"));
  }
  function customizeRenderSelector(value, content, itemDisabled, closable, onClose) {
    var onMouseDown = function onMouseDown(e) {
      onPreventMouseDown(e);
      onToggleOpen(!open);
    };
    return /*#__PURE__*/external_React_namespaceObject.createElement("span", {
      onMouseDown: onMouseDown
    }, tagRender({
      label: content,
      value: value,
      disabled: itemDisabled,
      closable: closable,
      onClose: onClose
    }));
  }
  function renderItem(valueItem) {
    var itemDisabled = valueItem.disabled,
      label = valueItem.label,
      value = valueItem.value;
    var closable = !disabled && !itemDisabled;
    var displayLabel = label;
    if (typeof maxTagTextLength === 'number') {
      if (typeof label === 'string' || typeof label === 'number') {
        var strLabel = String(displayLabel);
        if (strLabel.length > maxTagTextLength) {
          displayLabel = "".concat(strLabel.slice(0, maxTagTextLength), "...");
        }
      }
    }
    var onClose = function onClose(event) {
      if (event) event.stopPropagation();
      onRemove(valueItem);
    };
    return typeof tagRender === 'function' ? customizeRenderSelector(value, displayLabel, itemDisabled, closable, onClose) : defaultRenderSelector(valueItem, displayLabel, itemDisabled, closable, onClose);
  }
  function renderRest(omittedValues) {
    var content = typeof maxTagPlaceholder === 'function' ? maxTagPlaceholder(omittedValues) : maxTagPlaceholder;
    return defaultRenderSelector({
      title: content
    }, content, false);
  }

  // >>> Input Node
  var inputNode = /*#__PURE__*/external_React_namespaceObject.createElement("div", {
    className: "".concat(selectionPrefixCls, "-search"),
    style: {
      width: inputWidth
    },
    onFocus: function onFocus() {
      setFocused(true);
    },
    onBlur: function onBlur() {
      setFocused(false);
    }
  }, /*#__PURE__*/external_React_namespaceObject.createElement(Selector_Input, {
    ref: inputRef,
    open: open,
    prefixCls: prefixCls,
    id: id,
    inputElement: null,
    disabled: disabled,
    autoFocus: autoFocus,
    autoComplete: autoComplete,
    editable: inputEditable,
    activeDescendantId: activeDescendantId,
    value: inputValue,
    onKeyDown: onInputKeyDown,
    onMouseDown: onInputMouseDown,
    onChange: onInputChange,
    onPaste: onInputPaste,
    onCompositionStart: onInputCompositionStart,
    onCompositionEnd: onInputCompositionEnd,
    tabIndex: tabIndex,
    attrs: pickAttrs(props, true)
  }), /*#__PURE__*/external_React_namespaceObject.createElement("span", {
    ref: measureRef,
    className: "".concat(selectionPrefixCls, "-search-mirror"),
    "aria-hidden": true
  }, inputValue, "\xA0"));

  // >>> Selections
  var selectionNode = /*#__PURE__*/external_React_namespaceObject.createElement(rc_overflow_es, {
    prefixCls: "".concat(selectionPrefixCls, "-overflow"),
    data: values,
    renderItem: renderItem,
    renderRest: renderRest,
    suffix: inputNode,
    itemKey: itemKey,
    maxCount: maxTagCount
  });
  return /*#__PURE__*/external_React_namespaceObject.createElement(external_React_namespaceObject.Fragment, null, selectionNode, !values.length && !inputValue && /*#__PURE__*/external_React_namespaceObject.createElement("span", {
    className: "".concat(selectionPrefixCls, "-placeholder")
  }, placeholder));
};
/* harmony default export */ const MultipleSelector = (SelectSelector);
;// CONCATENATED MODULE: ./node_modules/rc-select/es/Selector/SingleSelector.js





var SingleSelector = function SingleSelector(props) {
  var inputElement = props.inputElement,
    prefixCls = props.prefixCls,
    id = props.id,
    inputRef = props.inputRef,
    disabled = props.disabled,
    autoFocus = props.autoFocus,
    autoComplete = props.autoComplete,
    activeDescendantId = props.activeDescendantId,
    mode = props.mode,
    open = props.open,
    values = props.values,
    placeholder = props.placeholder,
    tabIndex = props.tabIndex,
    showSearch = props.showSearch,
    searchValue = props.searchValue,
    activeValue = props.activeValue,
    maxLength = props.maxLength,
    onInputKeyDown = props.onInputKeyDown,
    onInputMouseDown = props.onInputMouseDown,
    onInputChange = props.onInputChange,
    onInputPaste = props.onInputPaste,
    onInputCompositionStart = props.onInputCompositionStart,
    onInputCompositionEnd = props.onInputCompositionEnd,
    title = props.title;
  var _React$useState = external_React_namespaceObject.useState(false),
    _React$useState2 = slicedToArray_slicedToArray(_React$useState, 2),
    inputChanged = _React$useState2[0],
    setInputChanged = _React$useState2[1];
  var combobox = mode === 'combobox';
  var inputEditable = combobox || showSearch;
  var item = values[0];
  var inputValue = searchValue || '';
  if (combobox && activeValue && !inputChanged) {
    inputValue = activeValue;
  }
  external_React_namespaceObject.useEffect(function () {
    if (combobox) {
      setInputChanged(false);
    }
  }, [combobox, activeValue]);

  // Not show text when closed expect combobox mode
  var hasTextInput = mode !== 'combobox' && !open && !showSearch ? false : !!inputValue;

  // Get title of selection item
  var selectionTitle = title === undefined ? getTitle(item) : title;
  var renderPlaceholder = function renderPlaceholder() {
    if (item) {
      return null;
    }
    var hiddenStyle = hasTextInput ? {
      visibility: 'hidden'
    } : undefined;
    return /*#__PURE__*/external_React_namespaceObject.createElement("span", {
      className: "".concat(prefixCls, "-selection-placeholder"),
      style: hiddenStyle
    }, placeholder);
  };
  return /*#__PURE__*/external_React_namespaceObject.createElement(external_React_namespaceObject.Fragment, null, /*#__PURE__*/external_React_namespaceObject.createElement("span", {
    className: "".concat(prefixCls, "-selection-search")
  }, /*#__PURE__*/external_React_namespaceObject.createElement(Selector_Input, {
    ref: inputRef,
    prefixCls: prefixCls,
    id: id,
    open: open,
    inputElement: inputElement,
    disabled: disabled,
    autoFocus: autoFocus,
    autoComplete: autoComplete,
    editable: inputEditable,
    activeDescendantId: activeDescendantId,
    value: inputValue,
    onKeyDown: onInputKeyDown,
    onMouseDown: onInputMouseDown,
    onChange: function onChange(e) {
      setInputChanged(true);
      onInputChange(e);
    },
    onPaste: onInputPaste,
    onCompositionStart: onInputCompositionStart,
    onCompositionEnd: onInputCompositionEnd,
    tabIndex: tabIndex,
    attrs: pickAttrs(props, true),
    maxLength: combobox ? maxLength : undefined
  })), !combobox && item ? /*#__PURE__*/external_React_namespaceObject.createElement("span", {
    className: "".concat(prefixCls, "-selection-item"),
    title: selectionTitle
    // 当 Select 已经选中选项时，还需 selection 隐藏但留在原地占位
    // https://github.com/ant-design/ant-design/issues/27688
    // https://github.com/ant-design/ant-design/issues/41530
    ,
    style: hasTextInput ? {
      visibility: 'hidden'
    } : undefined
  }, item.label) : null, renderPlaceholder());
};
/* harmony default export */ const Selector_SingleSelector = (SingleSelector);
;// CONCATENATED MODULE: ./node_modules/rc-select/es/utils/keyUtil.js


/** keyCode Judgment function */
function isValidateOpenKey(currentKeyCode) {
  return ![
  // System function button
  es_KeyCode.ESC, es_KeyCode.SHIFT, es_KeyCode.BACKSPACE, es_KeyCode.TAB, es_KeyCode.WIN_KEY, es_KeyCode.ALT, es_KeyCode.META, es_KeyCode.WIN_KEY_RIGHT, es_KeyCode.CTRL, es_KeyCode.SEMICOLON, es_KeyCode.EQUALS, es_KeyCode.CAPS_LOCK, es_KeyCode.CONTEXT_MENU,
  // F1-F12
  es_KeyCode.F1, es_KeyCode.F2, es_KeyCode.F3, es_KeyCode.F4, es_KeyCode.F5, es_KeyCode.F6, es_KeyCode.F7, es_KeyCode.F8, es_KeyCode.F9, es_KeyCode.F10, es_KeyCode.F11, es_KeyCode.F12].includes(currentKeyCode);
}
;// CONCATENATED MODULE: ./node_modules/rc-select/es/Selector/index.js


/**
 * Cursor rule:
 * 1. Only `showSearch` enabled
 * 2. Only `open` is `true`
 * 3. When typing, set `open` to `true` which hit rule of 2
 *
 * Accessibility:
 * - https://www.w3.org/TR/wai-aria-practices/examples/combobox/aria1.1pattern/listbox-combo.html
 */








var Selector = function Selector(props, ref) {
  var inputRef = (0,external_React_namespaceObject.useRef)(null);
  var compositionStatusRef = (0,external_React_namespaceObject.useRef)(false);
  var prefixCls = props.prefixCls,
    open = props.open,
    mode = props.mode,
    showSearch = props.showSearch,
    tokenWithEnter = props.tokenWithEnter,
    autoClearSearchValue = props.autoClearSearchValue,
    onSearch = props.onSearch,
    onSearchSubmit = props.onSearchSubmit,
    onToggleOpen = props.onToggleOpen,
    onInputKeyDown = props.onInputKeyDown,
    domRef = props.domRef;

  // ======================= Ref =======================
  external_React_namespaceObject.useImperativeHandle(ref, function () {
    return {
      focus: function focus() {
        inputRef.current.focus();
      },
      blur: function blur() {
        inputRef.current.blur();
      }
    };
  });

  // ====================== Input ======================
  var _useLock = useLock(0),
    _useLock2 = slicedToArray_slicedToArray(_useLock, 2),
    getInputMouseDown = _useLock2[0],
    setInputMouseDown = _useLock2[1];
  var onInternalInputKeyDown = function onInternalInputKeyDown(event) {
    var which = event.which;
    if (which === es_KeyCode.UP || which === es_KeyCode.DOWN) {
      event.preventDefault();
    }
    if (onInputKeyDown) {
      onInputKeyDown(event);
    }
    if (which === es_KeyCode.ENTER && mode === 'tags' && !compositionStatusRef.current && !open) {
      // When menu isn't open, OptionList won't trigger a value change
      // So when enter is pressed, the tag's input value should be emitted here to let selector know
      onSearchSubmit === null || onSearchSubmit === void 0 ? void 0 : onSearchSubmit(event.target.value);
    }
    if (isValidateOpenKey(which)) {
      onToggleOpen(true);
    }
  };

  /**
   * We can not use `findDOMNode` sine it will get warning,
   * have to use timer to check if is input element.
   */
  var onInternalInputMouseDown = function onInternalInputMouseDown() {
    setInputMouseDown(true);
  };

  // When paste come, ignore next onChange
  var pastedTextRef = (0,external_React_namespaceObject.useRef)(null);
  var triggerOnSearch = function triggerOnSearch(value) {
    if (onSearch(value, true, compositionStatusRef.current) !== false) {
      onToggleOpen(true);
    }
  };
  var onInputCompositionStart = function onInputCompositionStart() {
    compositionStatusRef.current = true;
  };
  var onInputCompositionEnd = function onInputCompositionEnd(e) {
    compositionStatusRef.current = false;

    // Trigger search again to support `tokenSeparators` with typewriting
    if (mode !== 'combobox') {
      triggerOnSearch(e.target.value);
    }
  };
  var onInputChange = function onInputChange(event) {
    var value = event.target.value;

    // Pasted text should replace back to origin content
    if (tokenWithEnter && pastedTextRef.current && /[\r\n]/.test(pastedTextRef.current)) {
      // CRLF will be treated as a single space for input element
      var replacedText = pastedTextRef.current.replace(/[\r\n]+$/, '').replace(/\r\n/g, ' ').replace(/[\r\n]/g, ' ');
      value = value.replace(replacedText, pastedTextRef.current);
    }
    pastedTextRef.current = null;
    triggerOnSearch(value);
  };
  var onInputPaste = function onInputPaste(e) {
    var clipboardData = e.clipboardData;
    var value = clipboardData.getData('text');
    pastedTextRef.current = value;
  };
  var onClick = function onClick(_ref) {
    var target = _ref.target;
    if (target !== inputRef.current) {
      // Should focus input if click the selector
      var isIE = document.body.style.msTouchAction !== undefined;
      if (isIE) {
        setTimeout(function () {
          inputRef.current.focus();
        });
      } else {
        inputRef.current.focus();
      }
    }
  };
  var onMouseDown = function onMouseDown(event) {
    var inputMouseDown = getInputMouseDown();

    // when mode is combobox, don't prevent default behavior
    // https://github.com/ant-design/ant-design/issues/37320
    if (event.target !== inputRef.current && !inputMouseDown && mode !== 'combobox') {
      event.preventDefault();
    }
    if (mode !== 'combobox' && (!showSearch || !inputMouseDown) || !open) {
      if (open && autoClearSearchValue !== false) {
        onSearch('', true, false);
      }
      onToggleOpen();
    }
  };

  // ================= Inner Selector ==================
  var sharedProps = {
    inputRef: inputRef,
    onInputKeyDown: onInternalInputKeyDown,
    onInputMouseDown: onInternalInputMouseDown,
    onInputChange: onInputChange,
    onInputPaste: onInputPaste,
    onInputCompositionStart: onInputCompositionStart,
    onInputCompositionEnd: onInputCompositionEnd
  };
  var selectNode = mode === 'multiple' || mode === 'tags' ? /*#__PURE__*/external_React_namespaceObject.createElement(MultipleSelector, extends_extends({}, props, sharedProps)) : /*#__PURE__*/external_React_namespaceObject.createElement(Selector_SingleSelector, extends_extends({}, props, sharedProps));
  return /*#__PURE__*/external_React_namespaceObject.createElement("div", {
    ref: domRef,
    className: "".concat(prefixCls, "-selector"),
    onClick: onClick,
    onMouseDown: onMouseDown
  }, selectNode);
};
var ForwardSelector = /*#__PURE__*/external_React_namespaceObject.forwardRef(Selector);
ForwardSelector.displayName = 'Selector';
/* harmony default export */ const es_Selector = (ForwardSelector);
;// CONCATENATED MODULE: ./node_modules/@rc-component/portal/es/Context.js

var OrderContext = /*#__PURE__*/external_React_namespaceObject.createContext(null);
/* harmony default export */ const Context = (OrderContext);
;// CONCATENATED MODULE: ./node_modules/@rc-component/portal/es/useDom.js






var EMPTY_LIST = [];

/**
 * Will add `div` to document. Nest call will keep order
 * @param render Render DOM in document
 */
function useDom(render, debug) {
  var _React$useState = external_React_namespaceObject.useState(function () {
      if (!canUseDom()) {
        return null;
      }
      var defaultEle = document.createElement('div');
      if (false) {}
      return defaultEle;
    }),
    _React$useState2 = slicedToArray_slicedToArray(_React$useState, 1),
    ele = _React$useState2[0];

  // ========================== Order ==========================
  var appendedRef = external_React_namespaceObject.useRef(false);
  var queueCreate = external_React_namespaceObject.useContext(Context);
  var _React$useState3 = external_React_namespaceObject.useState(EMPTY_LIST),
    _React$useState4 = slicedToArray_slicedToArray(_React$useState3, 2),
    queue = _React$useState4[0],
    setQueue = _React$useState4[1];
  var mergedQueueCreate = queueCreate || (appendedRef.current ? undefined : function (appendFn) {
    setQueue(function (origin) {
      var newQueue = [appendFn].concat(_toConsumableArray(origin));
      return newQueue;
    });
  });

  // =========================== DOM ===========================
  function append() {
    if (!ele.parentElement) {
      document.body.appendChild(ele);
    }
    appendedRef.current = true;
  }
  function cleanup() {
    var _ele$parentElement;
    (_ele$parentElement = ele.parentElement) === null || _ele$parentElement === void 0 ? void 0 : _ele$parentElement.removeChild(ele);
    appendedRef.current = false;
  }
  hooks_useLayoutEffect(function () {
    if (render) {
      if (queueCreate) {
        queueCreate(append);
      } else {
        append();
      }
    } else {
      cleanup();
    }
    return cleanup;
  }, [render]);
  hooks_useLayoutEffect(function () {
    if (queue.length) {
      queue.forEach(function (appendFn) {
        return appendFn();
      });
      setQueue(EMPTY_LIST);
    }
  }, [queue]);
  return [ele, mergedQueueCreate];
}
;// CONCATENATED MODULE: ./node_modules/rc-util/es/Dom/contains.js
function contains(root, n) {
  if (!root) {
    return false;
  }

  // Use native if support
  if (root.contains) {
    return root.contains(n);
  }

  // `document.contains` not support with IE11
  var node = n;
  while (node) {
    if (node === root) {
      return true;
    }
    node = node.parentNode;
  }
  return false;
}
;// CONCATENATED MODULE: ./node_modules/rc-util/es/Dom/dynamicCSS.js


var APPEND_ORDER = 'data-rc-order';
var MARK_KEY = "rc-util-key";
var containerCache = new Map();
function getMark() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
    mark = _ref.mark;
  if (mark) {
    return mark.startsWith('data-') ? mark : "data-".concat(mark);
  }
  return MARK_KEY;
}
function getContainer(option) {
  if (option.attachTo) {
    return option.attachTo;
  }
  var head = document.querySelector('head');
  return head || document.body;
}
function getOrder(prepend) {
  if (prepend === 'queue') {
    return 'prependQueue';
  }
  return prepend ? 'prepend' : 'append';
}

/**
 * Find style which inject by rc-util
 */
function findStyles(container) {
  return Array.from((containerCache.get(container) || container).children).filter(function (node) {
    return node.tagName === 'STYLE';
  });
}
function injectCSS(css) {
  var option = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  if (!canUseDom()) {
    return null;
  }
  var csp = option.csp,
    prepend = option.prepend;
  var styleNode = document.createElement('style');
  styleNode.setAttribute(APPEND_ORDER, getOrder(prepend));
  if (csp !== null && csp !== void 0 && csp.nonce) {
    styleNode.nonce = csp === null || csp === void 0 ? void 0 : csp.nonce;
  }
  styleNode.innerHTML = css;
  var container = getContainer(option);
  var firstChild = container.firstChild;
  if (prepend) {
    // If is queue `prepend`, it will prepend first style and then append rest style
    if (prepend === 'queue') {
      var existStyle = findStyles(container).filter(function (node) {
        return ['prepend', 'prependQueue'].includes(node.getAttribute(APPEND_ORDER));
      });
      if (existStyle.length) {
        container.insertBefore(styleNode, existStyle[existStyle.length - 1].nextSibling);
        return styleNode;
      }
    }

    // Use `insertBefore` as `prepend`
    container.insertBefore(styleNode, firstChild);
  } else {
    container.appendChild(styleNode);
  }
  return styleNode;
}
function findExistNode(key) {
  var option = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var container = getContainer(option);
  return findStyles(container).find(function (node) {
    return node.getAttribute(getMark(option)) === key;
  });
}
function removeCSS(key) {
  var option = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var existNode = findExistNode(key, option);
  if (existNode) {
    var container = getContainer(option);
    container.removeChild(existNode);
  }
}

/**
 * qiankun will inject `appendChild` to insert into other
 */
function syncRealContainer(container, option) {
  var cachedRealContainer = containerCache.get(container);

  // Find real container when not cached or cached container removed
  if (!cachedRealContainer || !contains(document, cachedRealContainer)) {
    var placeholderStyle = injectCSS('', option);
    var parentNode = placeholderStyle.parentNode;
    containerCache.set(container, parentNode);
    container.removeChild(placeholderStyle);
  }
}

/**
 * manually clear container cache to avoid global cache in unit testes
 */
function clearContainerCache() {
  containerCache.clear();
}
function updateCSS(css, key) {
  var option = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var container = getContainer(option);

  // Sync real parent
  syncRealContainer(container, option);
  var existNode = findExistNode(key, option);
  if (existNode) {
    var _option$csp, _option$csp2;
    if ((_option$csp = option.csp) !== null && _option$csp !== void 0 && _option$csp.nonce && existNode.nonce !== ((_option$csp2 = option.csp) === null || _option$csp2 === void 0 ? void 0 : _option$csp2.nonce)) {
      var _option$csp3;
      existNode.nonce = (_option$csp3 = option.csp) === null || _option$csp3 === void 0 ? void 0 : _option$csp3.nonce;
    }
    if (existNode.innerHTML !== css) {
      existNode.innerHTML = css;
    }
    return existNode;
  }
  var newNode = injectCSS(css, option);
  newNode.setAttribute(getMark(option), key);
  return newNode;
}
;// CONCATENATED MODULE: ./node_modules/rc-util/es/getScrollBarSize.js
/* eslint-disable no-param-reassign */

var cached;
function getScrollBarSize(fresh) {
  if (typeof document === 'undefined') {
    return 0;
  }
  if (fresh || cached === undefined) {
    var inner = document.createElement('div');
    inner.style.width = '100%';
    inner.style.height = '200px';
    var outer = document.createElement('div');
    var outerStyle = outer.style;
    outerStyle.position = 'absolute';
    outerStyle.top = '0';
    outerStyle.left = '0';
    outerStyle.pointerEvents = 'none';
    outerStyle.visibility = 'hidden';
    outerStyle.width = '200px';
    outerStyle.height = '150px';
    outerStyle.overflow = 'hidden';
    outer.appendChild(inner);
    document.body.appendChild(outer);
    var widthContained = inner.offsetWidth;
    outer.style.overflow = 'scroll';
    var widthScroll = inner.offsetWidth;
    if (widthContained === widthScroll) {
      widthScroll = outer.clientWidth;
    }
    document.body.removeChild(outer);
    cached = widthContained - widthScroll;
  }
  return cached;
}
function ensureSize(str) {
  var match = str.match(/^(.*)px$/);
  var value = Number(match === null || match === void 0 ? void 0 : match[1]);
  return Number.isNaN(value) ? getScrollBarSize() : value;
}
function getTargetScrollBarSize(target) {
  if (typeof document === 'undefined' || !target || !(target instanceof Element)) {
    return {
      width: 0,
      height: 0
    };
  }
  var _getComputedStyle = getComputedStyle(target, '::-webkit-scrollbar'),
    width = _getComputedStyle.width,
    height = _getComputedStyle.height;
  return {
    width: ensureSize(width),
    height: ensureSize(height)
  };
}
;// CONCATENATED MODULE: ./node_modules/@rc-component/portal/es/util.js
/**
 * Test usage export. Do not use in your production
 */
function isBodyOverflowing() {
  return document.body.scrollHeight > (window.innerHeight || document.documentElement.clientHeight) && window.innerWidth > document.body.offsetWidth;
}
;// CONCATENATED MODULE: ./node_modules/@rc-component/portal/es/useScrollLocker.js






var UNIQUE_ID = "rc-util-locker-".concat(Date.now());
var uuid = 0;
function useScrollLocker(lock) {
  var mergedLock = !!lock;
  var _React$useState = external_React_namespaceObject.useState(function () {
      uuid += 1;
      return "".concat(UNIQUE_ID, "_").concat(uuid);
    }),
    _React$useState2 = slicedToArray_slicedToArray(_React$useState, 1),
    id = _React$useState2[0];
  hooks_useLayoutEffect(function () {
    if (mergedLock) {
      var scrollbarSize = getScrollBarSize();
      var isOverflow = isBodyOverflowing();
      updateCSS("\nhtml body {\n  overflow-y: hidden;\n  ".concat(isOverflow ? "width: calc(100% - ".concat(scrollbarSize, "px);") : '', "\n}"), id);
    } else {
      removeCSS(id);
    }
    return function () {
      removeCSS(id);
    };
  }, [mergedLock, id]);
}
;// CONCATENATED MODULE: ./node_modules/@rc-component/portal/es/mock.js
var inline = false;
function inlineMock(nextInline) {
  if (typeof nextInline === 'boolean') {
    inline = nextInline;
  }
  return inline;
}
;// CONCATENATED MODULE: ./node_modules/@rc-component/portal/es/Portal.js










var getPortalContainer = function getPortalContainer(getContainer) {
  if (getContainer === false) {
    return false;
  }
  if (!canUseDom() || !getContainer) {
    return null;
  }
  if (typeof getContainer === 'string') {
    return document.querySelector(getContainer);
  }
  if (typeof getContainer === 'function') {
    return getContainer();
  }
  return getContainer;
};
var Portal = /*#__PURE__*/external_React_namespaceObject.forwardRef(function (props, ref) {
  var open = props.open,
    autoLock = props.autoLock,
    getContainer = props.getContainer,
    debug = props.debug,
    _props$autoDestroy = props.autoDestroy,
    autoDestroy = _props$autoDestroy === void 0 ? true : _props$autoDestroy,
    children = props.children;
  var _React$useState = external_React_namespaceObject.useState(open),
    _React$useState2 = slicedToArray_slicedToArray(_React$useState, 2),
    shouldRender = _React$useState2[0],
    setShouldRender = _React$useState2[1];
  var mergedRender = shouldRender || open;

  // ========================= Warning =========================
  if (false) {}

  // ====================== Should Render ======================
  external_React_namespaceObject.useEffect(function () {
    if (autoDestroy || open) {
      setShouldRender(open);
    }
  }, [open, autoDestroy]);

  // ======================== Container ========================
  var _React$useState3 = external_React_namespaceObject.useState(function () {
      return getPortalContainer(getContainer);
    }),
    _React$useState4 = slicedToArray_slicedToArray(_React$useState3, 2),
    innerContainer = _React$useState4[0],
    setInnerContainer = _React$useState4[1];
  external_React_namespaceObject.useEffect(function () {
    var customizeContainer = getPortalContainer(getContainer);

    // Tell component that we check this in effect which is safe to be `null`
    setInnerContainer(customizeContainer !== null && customizeContainer !== void 0 ? customizeContainer : null);
  });
  var _useDom = useDom(mergedRender && !innerContainer, debug),
    _useDom2 = slicedToArray_slicedToArray(_useDom, 2),
    defaultContainer = _useDom2[0],
    queueCreate = _useDom2[1];
  var mergedContainer = innerContainer !== null && innerContainer !== void 0 ? innerContainer : defaultContainer;

  // ========================= Locker ==========================
  useScrollLocker(autoLock && open && canUseDom() && (mergedContainer === defaultContainer || mergedContainer === document.body));

  // =========================== Ref ===========================
  var childRef = null;
  if (children && supportRef(children) && ref) {
    var _ref = children;
    childRef = _ref.ref;
  }
  var mergedRef = useComposeRef(childRef, ref);

  // ========================= Render ==========================
  // Do not render when nothing need render
  // When innerContainer is `undefined`, it may not ready since user use ref in the same render
  if (!mergedRender || !canUseDom() || innerContainer === undefined) {
    return null;
  }

  // Render inline
  var renderInline = mergedContainer === false || inlineMock();
  var reffedChildren = children;
  if (ref) {
    reffedChildren = /*#__PURE__*/external_React_namespaceObject.cloneElement(children, {
      ref: mergedRef
    });
  }
  return /*#__PURE__*/external_React_namespaceObject.createElement(Context.Provider, {
    value: queueCreate
  }, renderInline ? reffedChildren : /*#__PURE__*/(0,external_ReactDOM_namespaceObject.createPortal)(reffedChildren, mergedContainer));
});
if (false) {}
/* harmony default export */ const es_Portal = (Portal);
;// CONCATENATED MODULE: ./node_modules/@rc-component/portal/es/index.js



/* harmony default export */ const portal_es = (es_Portal);
;// CONCATENATED MODULE: ./node_modules/rc-util/es/hooks/useId.js



function getUseId() {
  // We need fully clone React function here to avoid webpack warning React 17 do not export `useId`
  var fullClone = _objectSpread2({}, external_React_namespaceObject);
  return fullClone.useId;
}
var useId_uuid = 0;

/** @private Note only worked in develop env. Not work in production. */
function resetUuid() {
  if (false) {}
}
function useId(id) {
  // Inner id for accessibility usage. Only work in client side
  var _React$useState = external_React_namespaceObject.useState('ssr-id'),
    _React$useState2 = slicedToArray_slicedToArray(_React$useState, 2),
    innerId = _React$useState2[0],
    setInnerId = _React$useState2[1];
  var useOriginId = getUseId();
  var reactNativeId = useOriginId === null || useOriginId === void 0 ? void 0 : useOriginId();
  external_React_namespaceObject.useEffect(function () {
    if (!useOriginId) {
      var nextId = useId_uuid;
      useId_uuid += 1;
      setInnerId("rc_unique_".concat(nextId));
    }
  }, []);

  // Developer passed id is single source of truth
  if (id) {
    return id;
  }

  // Test env always return mock id
  if (false) {}

  // Return react native id or inner id
  return reactNativeId || innerId;
}
;// CONCATENATED MODULE: ./node_modules/@rc-component/trigger/es/context.js

var TriggerContext = /*#__PURE__*/external_React_namespaceObject.createContext(null);
/* harmony default export */ const es_context = (TriggerContext);
;// CONCATENATED MODULE: ./node_modules/@rc-component/trigger/es/hooks/useAction.js

function useAction_toArray(val) {
  return val ? Array.isArray(val) ? val : [val] : [];
}
function useAction(mobile, action, showAction, hideAction) {
  return external_React_namespaceObject.useMemo(function () {
    var mergedShowAction = useAction_toArray(showAction !== null && showAction !== void 0 ? showAction : action);
    var mergedHideAction = useAction_toArray(hideAction !== null && hideAction !== void 0 ? hideAction : action);
    var showActionSet = new Set(mergedShowAction);
    var hideActionSet = new Set(mergedHideAction);
    if (mobile) {
      if (showActionSet.has('hover')) {
        showActionSet.delete('hover');
        showActionSet.add('click');
      }
      if (hideActionSet.has('hover')) {
        hideActionSet.delete('hover');
        hideActionSet.add('click');
      }
    }
    return [showActionSet, hideActionSet];
  }, [mobile, action, showAction, hideAction]);
}
;// CONCATENATED MODULE: ./node_modules/rc-util/es/Dom/isVisible.js
/* harmony default export */ const isVisible = (function (element) {
  if (!element) {
    return false;
  }
  if (element instanceof Element) {
    if (element.offsetParent) {
      return true;
    }
    if (element.getBBox) {
      var _getBBox = element.getBBox(),
        width = _getBBox.width,
        height = _getBBox.height;
      if (width || height) {
        return true;
      }
    }
    if (element.getBoundingClientRect) {
      var _element$getBoundingC = element.getBoundingClientRect(),
        _width = _element$getBoundingC.width,
        _height = _element$getBoundingC.height;
      if (_width || _height) {
        return true;
      }
    }
  }
  return false;
});
;// CONCATENATED MODULE: ./node_modules/@rc-component/trigger/es/util.js

function isPointsEq() {
  var a1 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var a2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  var isAlignPoint = arguments.length > 2 ? arguments[2] : undefined;
  if (isAlignPoint) {
    return a1[0] === a2[0];
  }
  return a1[0] === a2[0] && a1[1] === a2[1];
}
function getAlignPopupClassName(builtinPlacements, prefixCls, align, isAlignPoint) {
  var points = align.points;
  var placements = Object.keys(builtinPlacements);
  for (var i = 0; i < placements.length; i += 1) {
    var _builtinPlacements$pl;
    var placement = placements[i];
    if (isPointsEq((_builtinPlacements$pl = builtinPlacements[placement]) === null || _builtinPlacements$pl === void 0 ? void 0 : _builtinPlacements$pl.points, points, isAlignPoint)) {
      return "".concat(prefixCls, "-placement-").concat(placement);
    }
  }
  return '';
}

/** @deprecated We should not use this if we can refactor all deps */
function getMotion(prefixCls, motion, animation, transitionName) {
  if (motion) {
    return motion;
  }
  if (animation) {
    return {
      motionName: "".concat(prefixCls, "-").concat(animation)
    };
  }
  if (transitionName) {
    return {
      motionName: transitionName
    };
  }
  return null;
}
function getWin(ele) {
  return ele.ownerDocument.defaultView;
}

/**
 * Get all the scrollable parent elements of the element
 * @param ele       The element to be detected
 * @param areaOnly  Only return the parent which will cut visible area
 */
function collectScroller(ele) {
  var scrollerList = [];
  var current = ele === null || ele === void 0 ? void 0 : ele.parentElement;
  var scrollStyle = ['hidden', 'scroll', 'auto'];
  while (current) {
    var _getWin$getComputedSt = getWin(current).getComputedStyle(current),
      overflowX = _getWin$getComputedSt.overflowX,
      overflowY = _getWin$getComputedSt.overflowY;
    if (scrollStyle.includes(overflowX) || scrollStyle.includes(overflowY)) {
      scrollerList.push(current);
    }
    current = current.parentElement;
  }
  return scrollerList;
}
function toNum(num) {
  return Number.isNaN(num) ? 1 : num;
}
function getVisibleArea(initArea, scrollerList) {
  var visibleArea = _objectSpread2({}, initArea);
  (scrollerList || []).forEach(function (ele) {
    if (ele instanceof HTMLBodyElement) {
      return;
    }

    // Skip if static position which will not affect visible area
    var _getWin$getComputedSt2 = getWin(ele).getComputedStyle(ele),
      position = _getWin$getComputedSt2.position;
    if (position === 'static') {
      return;
    }
    var eleRect = ele.getBoundingClientRect();
    var eleOutHeight = ele.offsetHeight,
      eleInnerHeight = ele.clientHeight,
      eleOutWidth = ele.offsetWidth,
      eleInnerWidth = ele.clientWidth;
    var scaleX = toNum(Math.round(eleRect.width / eleOutWidth * 1000) / 1000);
    var scaleY = toNum(Math.round(eleRect.height / eleOutHeight * 1000) / 1000);
    var eleScrollWidth = (eleOutWidth - eleInnerWidth) * scaleX;
    var eleScrollHeight = (eleOutHeight - eleInnerHeight) * scaleY;
    var eleRight = eleRect.x + eleRect.width - eleScrollWidth;
    var eleBottom = eleRect.y + eleRect.height - eleScrollHeight;
    visibleArea.left = Math.max(visibleArea.left, eleRect.x);
    visibleArea.top = Math.max(visibleArea.top, eleRect.y);
    visibleArea.right = Math.min(visibleArea.right, eleRight);
    visibleArea.bottom = Math.min(visibleArea.bottom, eleBottom);
  });
  return visibleArea;
}
;// CONCATENATED MODULE: ./node_modules/@rc-component/trigger/es/hooks/useAlign.js








function splitPoints() {
  var points = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  return [points[0], points[1]];
}
function getAlignPoint(rect, points) {
  var topBottom = points[0];
  var leftRight = points[1];
  var x;
  var y;

  // Top & Bottom
  if (topBottom === 't') {
    y = rect.y;
  } else if (topBottom === 'b') {
    y = rect.y + rect.height;
  } else {
    y = rect.y + rect.height / 2;
  }

  // Left & Right
  if (leftRight === 'l') {
    x = rect.x;
  } else if (leftRight === 'r') {
    x = rect.x + rect.width;
  } else {
    x = rect.x + rect.width / 2;
  }
  return {
    x: x,
    y: y
  };
}
function reversePoints(points, index) {
  var reverseMap = {
    t: 'b',
    b: 't',
    l: 'r',
    r: 'l'
  };
  return points.map(function (point, i) {
    if (i === index) {
      return reverseMap[point] || 'c';
    }
    return point;
  }).join('');
}
function useAlign(open, popupEle, target, placement, builtinPlacements, popupAlign, onPopupAlign) {
  var _React$useState = external_React_namespaceObject.useState({
      ready: false,
      offsetX: 0,
      offsetY: 0,
      arrowX: 0,
      arrowY: 0,
      scaleX: 1,
      scaleY: 1,
      align: builtinPlacements[placement] || {}
    }),
    _React$useState2 = slicedToArray_slicedToArray(_React$useState, 2),
    offsetInfo = _React$useState2[0],
    setOffsetInfo = _React$useState2[1];
  var alignCountRef = external_React_namespaceObject.useRef(0);
  var scrollerList = external_React_namespaceObject.useMemo(function () {
    if (!popupEle) {
      return [];
    }
    return collectScroller(popupEle);
  }, [popupEle]);

  // ========================= Align =========================
  var onAlign = useEvent(function () {
    if (popupEle && target && open) {
      var popupElement = popupEle;
      var originLeft = popupElement.style.left;
      var originTop = popupElement.style.top;
      var doc = popupElement.ownerDocument;
      var win = getWin(popupElement);

      // Placement
      var placementInfo = _objectSpread2(_objectSpread2({}, builtinPlacements[placement]), popupAlign);

      // Reset first
      popupElement.style.left = '0';
      popupElement.style.top = '0';

      // Calculate align style, we should consider `transform` case
      var targetRect;
      if (Array.isArray(target)) {
        targetRect = {
          x: target[0],
          y: target[1],
          width: 0,
          height: 0
        };
      } else {
        var rect = target.getBoundingClientRect();
        targetRect = {
          x: rect.x,
          y: rect.y,
          width: rect.width,
          height: rect.height
        };
      }
      var popupRect = popupElement.getBoundingClientRect();
      var _win$getComputedStyle = win.getComputedStyle(popupElement),
        width = _win$getComputedStyle.width,
        height = _win$getComputedStyle.height;
      var _doc$documentElement = doc.documentElement,
        clientWidth = _doc$documentElement.clientWidth,
        clientHeight = _doc$documentElement.clientHeight,
        scrollWidth = _doc$documentElement.scrollWidth,
        scrollHeight = _doc$documentElement.scrollHeight,
        scrollTop = _doc$documentElement.scrollTop,
        scrollLeft = _doc$documentElement.scrollLeft;
      var popupHeight = popupRect.height;
      var popupWidth = popupRect.width;
      var targetHeight = targetRect.height;
      var targetWidth = targetRect.width;

      // Get bounding of visible area
      var visibleArea = placementInfo.htmlRegion === 'scroll' ?
      // Scroll region should take scrollLeft & scrollTop into account
      {
        left: -scrollLeft,
        top: -scrollTop,
        right: scrollWidth - scrollLeft,
        bottom: scrollHeight - scrollTop
      } : {
        left: 0,
        top: 0,
        right: clientWidth,
        bottom: clientHeight
      };
      visibleArea = getVisibleArea(visibleArea, scrollerList);

      // Reset back
      popupElement.style.left = originLeft;
      popupElement.style.top = originTop;

      // Calculate scale
      var _scaleX = toNum(Math.round(popupWidth / parseFloat(width) * 1000) / 1000);
      var _scaleY = toNum(Math.round(popupHeight / parseFloat(height) * 1000) / 1000);

      // No need to align since it's not visible in view
      if (_scaleX === 0 || _scaleY === 0 || isDOM(target) && !isVisible(target)) {
        return;
      }

      // Offset
      var offset = placementInfo.offset,
        targetOffset = placementInfo.targetOffset;
      var _ref = offset || [],
        _ref2 = slicedToArray_slicedToArray(_ref, 2),
        _ref2$ = _ref2[0],
        popupOffsetX = _ref2$ === void 0 ? 0 : _ref2$,
        _ref2$2 = _ref2[1],
        popupOffsetY = _ref2$2 === void 0 ? 0 : _ref2$2;
      var _ref3 = targetOffset || [],
        _ref4 = slicedToArray_slicedToArray(_ref3, 2),
        _ref4$ = _ref4[0],
        targetOffsetX = _ref4$ === void 0 ? 0 : _ref4$,
        _ref4$2 = _ref4[1],
        targetOffsetY = _ref4$2 === void 0 ? 0 : _ref4$2;
      targetRect.x += targetOffsetX;
      targetRect.y += targetOffsetY;

      // Points
      var _ref5 = placementInfo.points || [],
        _ref6 = slicedToArray_slicedToArray(_ref5, 2),
        popupPoint = _ref6[0],
        targetPoint = _ref6[1];
      var targetPoints = splitPoints(targetPoint);
      var popupPoints = splitPoints(popupPoint);
      var targetAlignPoint = getAlignPoint(targetRect, targetPoints);
      var popupAlignPoint = getAlignPoint(popupRect, popupPoints);

      // Real align info may not same as origin one
      var nextAlignInfo = _objectSpread2({}, placementInfo);

      // Next Offset
      var nextOffsetX = targetAlignPoint.x - popupAlignPoint.x + popupOffsetX;
      var nextOffsetY = targetAlignPoint.y - popupAlignPoint.y + popupOffsetY;

      // ============== Intersection ===============
      // Get area by position. Used for check if flip area is better
      function getIntersectionVisibleArea(offsetX, offsetY) {
        var l = popupRect.x + offsetX;
        var t = popupRect.y + offsetY;
        var r = l + popupWidth;
        var b = t + popupHeight;
        var visibleL = Math.max(l, visibleArea.left);
        var visibleT = Math.max(t, visibleArea.top);
        var visibleR = Math.min(r, visibleArea.right);
        var visibleB = Math.min(b, visibleArea.bottom);
        return Math.max(0, (visibleR - visibleL) * (visibleB - visibleT));
      }
      var originIntersectionVisibleArea = getIntersectionVisibleArea(nextOffsetX, nextOffsetY);

      // ========================== Overflow ===========================
      var targetAlignPointTL = getAlignPoint(targetRect, ['t', 'l']);
      var popupAlignPointTL = getAlignPoint(popupRect, ['t', 'l']);
      var targetAlignPointBR = getAlignPoint(targetRect, ['b', 'r']);
      var popupAlignPointBR = getAlignPoint(popupRect, ['b', 'r']);
      var overflow = placementInfo.overflow || {};
      var adjustX = overflow.adjustX,
        adjustY = overflow.adjustY,
        shiftX = overflow.shiftX,
        shiftY = overflow.shiftY;
      var supportAdjust = function supportAdjust(val) {
        if (typeof val === 'boolean') {
          return val;
        }
        return val >= 0;
      };

      // Prepare position
      var nextPopupY;
      var nextPopupBottom;
      var nextPopupX;
      var nextPopupRight;
      function syncNextPopupPosition() {
        nextPopupY = popupRect.y + nextOffsetY;
        nextPopupBottom = nextPopupY + popupHeight;
        nextPopupX = popupRect.x + nextOffsetX;
        nextPopupRight = nextPopupX + popupWidth;
      }
      syncNextPopupPosition();

      // >>>>>>>>>> Top & Bottom
      var needAdjustY = supportAdjust(adjustY);
      var sameTB = popupPoints[0] === targetPoints[0];

      // Bottom to Top
      if (needAdjustY && popupPoints[0] === 't' && nextPopupBottom > visibleArea.bottom) {
        var tmpNextOffsetY = nextOffsetY;
        if (sameTB) {
          tmpNextOffsetY -= popupHeight - targetHeight;
        } else {
          tmpNextOffsetY = targetAlignPointTL.y - popupAlignPointBR.y - popupOffsetY;
        }
        if (getIntersectionVisibleArea(nextOffsetX, tmpNextOffsetY) >= originIntersectionVisibleArea) {
          nextOffsetY = tmpNextOffsetY;
          nextAlignInfo.points = [reversePoints(popupPoints, 0), reversePoints(targetPoints, 0)];
        }
      }

      // Top to Bottom
      if (needAdjustY && popupPoints[0] === 'b' && nextPopupY < visibleArea.top) {
        var _tmpNextOffsetY = nextOffsetY;
        if (sameTB) {
          _tmpNextOffsetY += popupHeight - targetHeight;
        } else {
          _tmpNextOffsetY = targetAlignPointBR.y - popupAlignPointTL.y - popupOffsetY;
        }
        if (getIntersectionVisibleArea(nextOffsetX, _tmpNextOffsetY) >= originIntersectionVisibleArea) {
          nextOffsetY = _tmpNextOffsetY;
          nextAlignInfo.points = [reversePoints(popupPoints, 0), reversePoints(targetPoints, 0)];
        }
      }

      // >>>>>>>>>> Left & Right
      var needAdjustX = supportAdjust(adjustX);

      // >>>>> Flip
      var sameLR = popupPoints[1] === targetPoints[1];

      // Right to Left
      if (needAdjustX && popupPoints[1] === 'l' && nextPopupRight > visibleArea.right) {
        var tmpNextOffsetX = nextOffsetX;
        if (sameLR) {
          tmpNextOffsetX -= popupWidth - targetWidth;
        } else {
          tmpNextOffsetX = targetAlignPointTL.x - popupAlignPointBR.x - popupOffsetX;
        }
        if (getIntersectionVisibleArea(tmpNextOffsetX, nextOffsetY) >= originIntersectionVisibleArea) {
          nextOffsetX = tmpNextOffsetX;
          nextAlignInfo.points = [reversePoints(popupPoints, 1), reversePoints(targetPoints, 1)];
        }
      }

      // Left to Right
      if (needAdjustX && popupPoints[1] === 'r' && nextPopupX < visibleArea.left) {
        var _tmpNextOffsetX = nextOffsetX;
        if (sameLR) {
          _tmpNextOffsetX += popupWidth - targetWidth;
        } else {
          _tmpNextOffsetX = targetAlignPointBR.x - popupAlignPointTL.x - popupOffsetX;
        }
        if (getIntersectionVisibleArea(_tmpNextOffsetX, nextOffsetY) >= originIntersectionVisibleArea) {
          nextOffsetX = _tmpNextOffsetX;
          nextAlignInfo.points = [reversePoints(popupPoints, 1), reversePoints(targetPoints, 1)];
        }
      }

      // ============================ Shift ============================
      syncNextPopupPosition();
      var numShiftX = shiftX === true ? 0 : shiftX;
      if (typeof numShiftX === 'number') {
        // Left
        if (nextPopupX < visibleArea.left) {
          nextOffsetX -= nextPopupX - visibleArea.left;
          if (targetRect.x + targetWidth < visibleArea.left + numShiftX) {
            nextOffsetX += targetRect.x - visibleArea.left + targetWidth - numShiftX;
          }
        }

        // Right
        if (nextPopupRight > visibleArea.right) {
          nextOffsetX -= nextPopupRight - visibleArea.right;
          if (targetRect.x > visibleArea.right - numShiftX) {
            nextOffsetX += targetRect.x - visibleArea.right + numShiftX;
          }
        }
      }
      var numShiftY = shiftY === true ? 0 : shiftY;
      if (typeof numShiftY === 'number') {
        // Top
        if (nextPopupY < visibleArea.top) {
          nextOffsetY -= nextPopupY - visibleArea.top;
          if (targetRect.y + targetHeight < visibleArea.top + numShiftY) {
            nextOffsetY += targetRect.y - visibleArea.top + targetHeight - numShiftY;
          }
        }

        // Bottom
        if (nextPopupBottom > visibleArea.bottom) {
          nextOffsetY -= nextPopupBottom - visibleArea.bottom;
          if (targetRect.y > visibleArea.bottom - numShiftY) {
            nextOffsetY += targetRect.y - visibleArea.bottom + numShiftY;
          }
        }
      }

      // ============================ Arrow ============================
      // Arrow center align
      var popupLeft = popupRect.x + nextOffsetX;
      var popupRight = popupLeft + popupWidth;
      var popupTop = popupRect.y + nextOffsetY;
      var popupBottom = popupTop + popupHeight;
      var targetLeft = targetRect.x;
      var targetRight = targetLeft + targetWidth;
      var targetTop = targetRect.y;
      var targetBottom = targetTop + targetHeight;
      var maxLeft = Math.max(popupLeft, targetLeft);
      var minRight = Math.min(popupRight, targetRight);
      var xCenter = (maxLeft + minRight) / 2;
      var nextArrowX = xCenter - popupLeft;
      var maxTop = Math.max(popupTop, targetTop);
      var minBottom = Math.min(popupBottom, targetBottom);
      var yCenter = (maxTop + minBottom) / 2;
      var nextArrowY = yCenter - popupTop;
      onPopupAlign === null || onPopupAlign === void 0 ? void 0 : onPopupAlign(popupEle, nextAlignInfo);
      setOffsetInfo({
        ready: true,
        offsetX: nextOffsetX / _scaleX,
        offsetY: nextOffsetY / _scaleY,
        arrowX: nextArrowX / _scaleX,
        arrowY: nextArrowY / _scaleY,
        scaleX: _scaleX,
        scaleY: _scaleY,
        align: nextAlignInfo
      });
    }
  });
  var triggerAlign = function triggerAlign() {
    alignCountRef.current += 1;
    var id = alignCountRef.current;

    // Merge all align requirement into one frame
    Promise.resolve().then(function () {
      if (alignCountRef.current === id) {
        onAlign();
      }
    });
  };

  // Reset ready status when placement & open changed
  var resetReady = function resetReady() {
    setOffsetInfo(function (ori) {
      return _objectSpread2(_objectSpread2({}, ori), {}, {
        ready: false
      });
    });
  };
  hooks_useLayoutEffect(resetReady, [placement]);
  hooks_useLayoutEffect(function () {
    if (!open) {
      resetReady();
    }
  }, [open]);
  return [offsetInfo.ready, offsetInfo.offsetX, offsetInfo.offsetY, offsetInfo.arrowX, offsetInfo.arrowY, offsetInfo.scaleX, offsetInfo.scaleY, offsetInfo.align, triggerAlign];
}
;// CONCATENATED MODULE: ./node_modules/@rc-component/trigger/es/hooks/useWatch.js



function useWatch(open, target, popup, onAlign) {
  hooks_useLayoutEffect(function () {
    if (open && target && popup) {
      var targetElement = target;
      var popupElement = popup;
      var targetScrollList = collectScroller(targetElement);
      var popupScrollList = collectScroller(popupElement);
      var win = getWin(popupElement);
      var mergedList = new Set([win].concat(_toConsumableArray(targetScrollList), _toConsumableArray(popupScrollList)));
      function notifyScroll() {
        onAlign();
      }
      mergedList.forEach(function (scroller) {
        scroller.addEventListener('scroll', notifyScroll, {
          passive: true
        });
      });
      win.addEventListener('resize', notifyScroll, {
        passive: true
      });

      // First time always do align
      onAlign();
      return function () {
        mergedList.forEach(function (scroller) {
          scroller.removeEventListener('scroll', notifyScroll);
          win.removeEventListener('resize', notifyScroll);
        });
      };
    }
  }, [open, target, popup]);
}
;// CONCATENATED MODULE: ./node_modules/rc-motion/es/util/motion.js



// ================= Transition =================
// Event wrapper. Copy from react source code
function makePrefixMap(styleProp, eventName) {
  var prefixes = {};
  prefixes[styleProp.toLowerCase()] = eventName.toLowerCase();
  prefixes["Webkit".concat(styleProp)] = "webkit".concat(eventName);
  prefixes["Moz".concat(styleProp)] = "moz".concat(eventName);
  prefixes["ms".concat(styleProp)] = "MS".concat(eventName);
  prefixes["O".concat(styleProp)] = "o".concat(eventName.toLowerCase());
  return prefixes;
}

function getVendorPrefixes(domSupport, win) {
  var prefixes = {
    animationend: makePrefixMap('Animation', 'AnimationEnd'),
    transitionend: makePrefixMap('Transition', 'TransitionEnd')
  };

  if (domSupport) {
    if (!('AnimationEvent' in win)) {
      delete prefixes.animationend.animation;
    }

    if (!('TransitionEvent' in win)) {
      delete prefixes.transitionend.transition;
    }
  }

  return prefixes;
}
var vendorPrefixes = getVendorPrefixes(canUseDom(), typeof window !== 'undefined' ? window : {});
var style = {};

if (canUseDom()) {
  var _document$createEleme = document.createElement('div');

  style = _document$createEleme.style;
}

var prefixedEventNames = {};
function getVendorPrefixedEventName(eventName) {
  if (prefixedEventNames[eventName]) {
    return prefixedEventNames[eventName];
  }

  var prefixMap = vendorPrefixes[eventName];

  if (prefixMap) {
    var stylePropList = Object.keys(prefixMap);
    var len = stylePropList.length;

    for (var i = 0; i < len; i += 1) {
      var styleProp = stylePropList[i];

      if (Object.prototype.hasOwnProperty.call(prefixMap, styleProp) && styleProp in style) {
        prefixedEventNames[eventName] = prefixMap[styleProp];
        return prefixedEventNames[eventName];
      }
    }
  }

  return '';
}
var internalAnimationEndName = getVendorPrefixedEventName('animationend');
var internalTransitionEndName = getVendorPrefixedEventName('transitionend');
var supportTransition = !!(internalAnimationEndName && internalTransitionEndName);
var animationEndName = internalAnimationEndName || 'animationend';
var transitionEndName = internalTransitionEndName || 'transitionend';
function getTransitionName(transitionName, transitionType) {
  if (!transitionName) return null;

  if (typeof_typeof(transitionName) === 'object') {
    var type = transitionType.replace(/-\w/g, function (match) {
      return match[1].toUpperCase();
    });
    return transitionName[type];
  }

  return "".concat(transitionName, "-").concat(transitionType);
}
;// CONCATENATED MODULE: ./node_modules/rc-motion/es/interface.js
var STATUS_NONE = 'none';
var STATUS_APPEAR = 'appear';
var STATUS_ENTER = 'enter';
var STATUS_LEAVE = 'leave';
var STEP_NONE = 'none';
var STEP_PREPARE = 'prepare';
var STEP_START = 'start';
var STEP_ACTIVE = 'active';
var STEP_ACTIVATED = 'end';
;// CONCATENATED MODULE: ./node_modules/rc-motion/es/hooks/useNextFrame.js


/* harmony default export */ const useNextFrame = (function () {
  var nextFrameRef = external_React_namespaceObject.useRef(null);

  function cancelNextFrame() {
    es_raf.cancel(nextFrameRef.current);
  }

  function nextFrame(callback) {
    var delay = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;
    cancelNextFrame();
    var nextFrameId = es_raf(function () {
      if (delay <= 1) {
        callback({
          isCanceled: function isCanceled() {
            return nextFrameId !== nextFrameRef.current;
          }
        });
      } else {
        nextFrame(callback, delay - 1);
      }
    });
    nextFrameRef.current = nextFrameId;
  }

  external_React_namespaceObject.useEffect(function () {
    return function () {
      cancelNextFrame();
    };
  }, []);
  return [nextFrame, cancelNextFrame];
});
;// CONCATENATED MODULE: ./node_modules/rc-motion/es/hooks/useIsomorphicLayoutEffect.js

 // It's safe to use `useLayoutEffect` but the warning is annoying

var useIsomorphicLayoutEffect = canUseDom() ? external_React_namespaceObject.useLayoutEffect : external_React_namespaceObject.useEffect;
/* harmony default export */ const hooks_useIsomorphicLayoutEffect = (useIsomorphicLayoutEffect);
;// CONCATENATED MODULE: ./node_modules/rc-motion/es/hooks/useStepQueue.js






var STEP_QUEUE = [STEP_PREPARE, STEP_START, STEP_ACTIVE, STEP_ACTIVATED];
/** Skip current step */

var SkipStep = false;
/** Current step should be update in */

var DoStep = true;
function isActive(step) {
  return step === STEP_ACTIVE || step === STEP_ACTIVATED;
}
/* harmony default export */ const useStepQueue = (function (status, callback) {
  var _useState = useSafeState(STEP_NONE),
      _useState2 = slicedToArray_slicedToArray(_useState, 2),
      step = _useState2[0],
      setStep = _useState2[1];

  var _useNextFrame = useNextFrame(),
      _useNextFrame2 = slicedToArray_slicedToArray(_useNextFrame, 2),
      nextFrame = _useNextFrame2[0],
      cancelNextFrame = _useNextFrame2[1];

  function startQueue() {
    setStep(STEP_PREPARE, true);
  }

  hooks_useIsomorphicLayoutEffect(function () {
    if (step !== STEP_NONE && step !== STEP_ACTIVATED) {
      var index = STEP_QUEUE.indexOf(step);
      var nextStep = STEP_QUEUE[index + 1];
      var result = callback(step);

      if (result === SkipStep) {
        // Skip when no needed
        setStep(nextStep, true);
      } else {
        // Do as frame for step update
        nextFrame(function (info) {
          function doNext() {
            // Skip since current queue is ood
            if (info.isCanceled()) return;
            setStep(nextStep, true);
          }

          if (result === true) {
            doNext();
          } else {
            // Only promise should be async
            Promise.resolve(result).then(doNext);
          }
        });
      }
    }
  }, [status, step]);
  external_React_namespaceObject.useEffect(function () {
    return function () {
      cancelNextFrame();
    };
  }, []);
  return [startQueue, step];
});
;// CONCATENATED MODULE: ./node_modules/rc-motion/es/hooks/useDomMotionEvents.js



/* harmony default export */ const useDomMotionEvents = (function (callback) {
  var cacheElementRef = (0,external_React_namespaceObject.useRef)(); // Cache callback

  var callbackRef = (0,external_React_namespaceObject.useRef)(callback);
  callbackRef.current = callback; // Internal motion event handler

  var onInternalMotionEnd = external_React_namespaceObject.useCallback(function (event) {
    callbackRef.current(event);
  }, []); // Remove events

  function removeMotionEvents(element) {
    if (element) {
      element.removeEventListener(transitionEndName, onInternalMotionEnd);
      element.removeEventListener(animationEndName, onInternalMotionEnd);
    }
  } // Patch events


  function patchMotionEvents(element) {
    if (cacheElementRef.current && cacheElementRef.current !== element) {
      removeMotionEvents(cacheElementRef.current);
    }

    if (element && element !== cacheElementRef.current) {
      element.addEventListener(transitionEndName, onInternalMotionEnd);
      element.addEventListener(animationEndName, onInternalMotionEnd); // Save as cache in case dom removed trigger by `motionDeadline`

      cacheElementRef.current = element;
    }
  } // Clean up when removed


  external_React_namespaceObject.useEffect(function () {
    return function () {
      removeMotionEvents(cacheElementRef.current);
    };
  }, []);
  return [patchMotionEvents, removeMotionEvents];
});
;// CONCATENATED MODULE: ./node_modules/rc-motion/es/hooks/useStatus.js










function useStatus(supportMotion, visible, getElement, _ref) {
  var _ref$motionEnter = _ref.motionEnter,
      motionEnter = _ref$motionEnter === void 0 ? true : _ref$motionEnter,
      _ref$motionAppear = _ref.motionAppear,
      motionAppear = _ref$motionAppear === void 0 ? true : _ref$motionAppear,
      _ref$motionLeave = _ref.motionLeave,
      motionLeave = _ref$motionLeave === void 0 ? true : _ref$motionLeave,
      motionDeadline = _ref.motionDeadline,
      motionLeaveImmediately = _ref.motionLeaveImmediately,
      onAppearPrepare = _ref.onAppearPrepare,
      onEnterPrepare = _ref.onEnterPrepare,
      onLeavePrepare = _ref.onLeavePrepare,
      onAppearStart = _ref.onAppearStart,
      onEnterStart = _ref.onEnterStart,
      onLeaveStart = _ref.onLeaveStart,
      onAppearActive = _ref.onAppearActive,
      onEnterActive = _ref.onEnterActive,
      onLeaveActive = _ref.onLeaveActive,
      onAppearEnd = _ref.onAppearEnd,
      onEnterEnd = _ref.onEnterEnd,
      onLeaveEnd = _ref.onLeaveEnd,
      onVisibleChanged = _ref.onVisibleChanged;

  // Used for outer render usage to avoid `visible: false & status: none` to render nothing
  var _useState = useSafeState(),
      _useState2 = slicedToArray_slicedToArray(_useState, 2),
      asyncVisible = _useState2[0],
      setAsyncVisible = _useState2[1];

  var _useState3 = useSafeState(STATUS_NONE),
      _useState4 = slicedToArray_slicedToArray(_useState3, 2),
      status = _useState4[0],
      setStatus = _useState4[1];

  var _useState5 = useSafeState(null),
      _useState6 = slicedToArray_slicedToArray(_useState5, 2),
      style = _useState6[0],
      setStyle = _useState6[1];

  var mountedRef = (0,external_React_namespaceObject.useRef)(false);
  var deadlineRef = (0,external_React_namespaceObject.useRef)(null); // =========================== Dom Node ===========================

  function getDomElement() {
    return getElement();
  } // ========================== Motion End ==========================


  var activeRef = (0,external_React_namespaceObject.useRef)(false);

  function onInternalMotionEnd(event) {
    var element = getDomElement();

    if (event && !event.deadline && event.target !== element) {
      // event exists
      // not initiated by deadline
      // transitionEnd not fired by inner elements
      return;
    }

    var currentActive = activeRef.current;
    var canEnd;

    if (status === STATUS_APPEAR && currentActive) {
      canEnd = onAppearEnd === null || onAppearEnd === void 0 ? void 0 : onAppearEnd(element, event);
    } else if (status === STATUS_ENTER && currentActive) {
      canEnd = onEnterEnd === null || onEnterEnd === void 0 ? void 0 : onEnterEnd(element, event);
    } else if (status === STATUS_LEAVE && currentActive) {
      canEnd = onLeaveEnd === null || onLeaveEnd === void 0 ? void 0 : onLeaveEnd(element, event);
    } // Only update status when `canEnd` and not destroyed


    if (status !== STATUS_NONE && currentActive && canEnd !== false) {
      setStatus(STATUS_NONE, true);
      setStyle(null, true);
    }
  }

  var _useDomMotionEvents = useDomMotionEvents(onInternalMotionEnd),
      _useDomMotionEvents2 = slicedToArray_slicedToArray(_useDomMotionEvents, 1),
      patchMotionEvents = _useDomMotionEvents2[0]; // ============================= Step =============================


  var eventHandlers = external_React_namespaceObject.useMemo(function () {
    var _ref2, _ref3, _ref4;

    switch (status) {
      case STATUS_APPEAR:
        return _ref2 = {}, defineProperty_defineProperty(_ref2, STEP_PREPARE, onAppearPrepare), defineProperty_defineProperty(_ref2, STEP_START, onAppearStart), defineProperty_defineProperty(_ref2, STEP_ACTIVE, onAppearActive), _ref2;

      case STATUS_ENTER:
        return _ref3 = {}, defineProperty_defineProperty(_ref3, STEP_PREPARE, onEnterPrepare), defineProperty_defineProperty(_ref3, STEP_START, onEnterStart), defineProperty_defineProperty(_ref3, STEP_ACTIVE, onEnterActive), _ref3;

      case STATUS_LEAVE:
        return _ref4 = {}, defineProperty_defineProperty(_ref4, STEP_PREPARE, onLeavePrepare), defineProperty_defineProperty(_ref4, STEP_START, onLeaveStart), defineProperty_defineProperty(_ref4, STEP_ACTIVE, onLeaveActive), _ref4;

      default:
        return {};
    }
  }, [status]);

  var _useStepQueue = useStepQueue(status, function (newStep) {
    // Only prepare step can be skip
    if (newStep === STEP_PREPARE) {
      var onPrepare = eventHandlers[STEP_PREPARE];

      if (!onPrepare) {
        return SkipStep;
      }

      return onPrepare(getDomElement());
    } // Rest step is sync update


    if (step in eventHandlers) {
      var _eventHandlers$step;

      setStyle(((_eventHandlers$step = eventHandlers[step]) === null || _eventHandlers$step === void 0 ? void 0 : _eventHandlers$step.call(eventHandlers, getDomElement(), null)) || null);
    }

    if (step === STEP_ACTIVE) {
      // Patch events when motion needed
      patchMotionEvents(getDomElement());

      if (motionDeadline > 0) {
        clearTimeout(deadlineRef.current);
        deadlineRef.current = setTimeout(function () {
          onInternalMotionEnd({
            deadline: true
          });
        }, motionDeadline);
      }
    }

    return DoStep;
  }),
      _useStepQueue2 = slicedToArray_slicedToArray(_useStepQueue, 2),
      startStep = _useStepQueue2[0],
      step = _useStepQueue2[1];

  var active = isActive(step);
  activeRef.current = active; // ============================ Status ============================
  // Update with new status

  hooks_useIsomorphicLayoutEffect(function () {
    setAsyncVisible(visible);
    var isMounted = mountedRef.current;
    mountedRef.current = true;

    if (!supportMotion) {
      return;
    }

    var nextStatus; // Appear

    if (!isMounted && visible && motionAppear) {
      nextStatus = STATUS_APPEAR;
    } // Enter


    if (isMounted && visible && motionEnter) {
      nextStatus = STATUS_ENTER;
    } // Leave


    if (isMounted && !visible && motionLeave || !isMounted && motionLeaveImmediately && !visible && motionLeave) {
      nextStatus = STATUS_LEAVE;
    } // Update to next status


    if (nextStatus) {
      setStatus(nextStatus);
      startStep();
    }
  }, [visible]); // ============================ Effect ============================
  // Reset when motion changed

  (0,external_React_namespaceObject.useEffect)(function () {
    if ( // Cancel appear
    status === STATUS_APPEAR && !motionAppear || // Cancel enter
    status === STATUS_ENTER && !motionEnter || // Cancel leave
    status === STATUS_LEAVE && !motionLeave) {
      setStatus(STATUS_NONE);
    }
  }, [motionAppear, motionEnter, motionLeave]);
  (0,external_React_namespaceObject.useEffect)(function () {
    return function () {
      mountedRef.current = false;
      clearTimeout(deadlineRef.current);
    };
  }, []); // Trigger `onVisibleChanged`

  var firstMountChangeRef = external_React_namespaceObject.useRef(false);
  (0,external_React_namespaceObject.useEffect)(function () {
    // [visible & motion not end] => [!visible & motion end] still need trigger onVisibleChanged
    if (asyncVisible) {
      firstMountChangeRef.current = true;
    }

    if (asyncVisible !== undefined && status === STATUS_NONE) {
      // Skip first render is invisible since it's nothing changed
      if (firstMountChangeRef.current || asyncVisible) {
        onVisibleChanged === null || onVisibleChanged === void 0 ? void 0 : onVisibleChanged(asyncVisible);
      }

      firstMountChangeRef.current = true;
    }
  }, [asyncVisible, status]); // ============================ Styles ============================

  var mergedStyle = style;

  if (eventHandlers[STEP_PREPARE] && step === STEP_START) {
    mergedStyle = _objectSpread2({
      transition: 'none'
    }, mergedStyle);
  }

  return [status, step, mergedStyle, asyncVisible !== null && asyncVisible !== void 0 ? asyncVisible : visible];
}
;// CONCATENATED MODULE: ./node_modules/rc-motion/es/DomWrapper.js






var DomWrapper_DomWrapper = /*#__PURE__*/function (_React$Component) {
  _inherits(DomWrapper, _React$Component);

  var _super = _createSuper(DomWrapper);

  function DomWrapper() {
    _classCallCheck(this, DomWrapper);

    return _super.apply(this, arguments);
  }

  _createClass(DomWrapper, [{
    key: "render",
    value: function render() {
      return this.props.children;
    }
  }]);

  return DomWrapper;
}(external_React_namespaceObject.Component);

/* harmony default export */ const es_DomWrapper = (DomWrapper_DomWrapper);
;// CONCATENATED MODULE: ./node_modules/rc-motion/es/CSSMotion.js





/* eslint-disable react/default-props-match-prop-types, react/no-multi-comp, react/prop-types */











/**
 * `transitionSupport` is used for none transition test case.
 * Default we use browser transition event support check.
 */
function genCSSMotion(config) {
  var transitionSupport = config;

  if (typeof_typeof(config) === 'object') {
    transitionSupport = config.transitionSupport;
  }

  function isSupportTransition(props) {
    return !!(props.motionName && transitionSupport);
  }

  var CSSMotion = /*#__PURE__*/external_React_namespaceObject.forwardRef(function (props, ref) {
    var _props$visible = props.visible,
        visible = _props$visible === void 0 ? true : _props$visible,
        _props$removeOnLeave = props.removeOnLeave,
        removeOnLeave = _props$removeOnLeave === void 0 ? true : _props$removeOnLeave,
        forceRender = props.forceRender,
        children = props.children,
        motionName = props.motionName,
        leavedClassName = props.leavedClassName,
        eventProps = props.eventProps;
    var supportMotion = isSupportTransition(props); // Ref to the react node, it may be a HTMLElement

    var nodeRef = (0,external_React_namespaceObject.useRef)(); // Ref to the dom wrapper in case ref can not pass to HTMLElement

    var wrapperNodeRef = (0,external_React_namespaceObject.useRef)();

    function getDomElement() {
      try {
        // Here we're avoiding call for findDOMNode since it's deprecated
        // in strict mode. We're calling it only when node ref is not
        // an instance of DOM HTMLElement. Otherwise use
        // findDOMNode as a final resort
        return nodeRef.current instanceof HTMLElement ? nodeRef.current : findDOMNode(wrapperNodeRef.current);
      } catch (e) {
        // Only happen when `motionDeadline` trigger but element removed.
        return null;
      }
    }

    var _useStatus = useStatus(supportMotion, visible, getDomElement, props),
        _useStatus2 = slicedToArray_slicedToArray(_useStatus, 4),
        status = _useStatus2[0],
        statusStep = _useStatus2[1],
        statusStyle = _useStatus2[2],
        mergedVisible = _useStatus2[3]; // Record whether content has rendered
    // Will return null for un-rendered even when `removeOnLeave={false}`


    var renderedRef = external_React_namespaceObject.useRef(mergedVisible);

    if (mergedVisible) {
      renderedRef.current = true;
    } // ====================== Refs ======================


    var setNodeRef = external_React_namespaceObject.useCallback(function (node) {
      nodeRef.current = node;
      fillRef(ref, node);
    }, [ref]); // ===================== Render =====================

    var motionChildren;

    var mergedProps = _objectSpread2(_objectSpread2({}, eventProps), {}, {
      visible: visible
    });

    if (!children) {
      // No children
      motionChildren = null;
    } else if (status === STATUS_NONE || !isSupportTransition(props)) {
      // Stable children
      if (mergedVisible) {
        motionChildren = children(_objectSpread2({}, mergedProps), setNodeRef);
      } else if (!removeOnLeave && renderedRef.current && leavedClassName) {
        motionChildren = children(_objectSpread2(_objectSpread2({}, mergedProps), {}, {
          className: leavedClassName
        }), setNodeRef);
      } else if (forceRender || !removeOnLeave && !leavedClassName) {
        motionChildren = children(_objectSpread2(_objectSpread2({}, mergedProps), {}, {
          style: {
            display: 'none'
          }
        }), setNodeRef);
      } else {
        motionChildren = null;
      }
    } else {
      var _classNames;

      // In motion
      var statusSuffix;

      if (statusStep === STEP_PREPARE) {
        statusSuffix = 'prepare';
      } else if (isActive(statusStep)) {
        statusSuffix = 'active';
      } else if (statusStep === STEP_START) {
        statusSuffix = 'start';
      }

      motionChildren = children(_objectSpread2(_objectSpread2({}, mergedProps), {}, {
        className: classnames_default()(getTransitionName(motionName, status), (_classNames = {}, defineProperty_defineProperty(_classNames, getTransitionName(motionName, "".concat(status, "-").concat(statusSuffix)), statusSuffix), defineProperty_defineProperty(_classNames, motionName, typeof motionName === 'string'), _classNames)),
        style: statusStyle
      }), setNodeRef);
    } // Auto inject ref if child node not have `ref` props


    if ( /*#__PURE__*/external_React_namespaceObject.isValidElement(motionChildren) && supportRef(motionChildren)) {
      var _ref = motionChildren,
          originNodeRef = _ref.ref;

      if (!originNodeRef) {
        motionChildren = /*#__PURE__*/external_React_namespaceObject.cloneElement(motionChildren, {
          ref: setNodeRef
        });
      }
    }

    return /*#__PURE__*/external_React_namespaceObject.createElement(es_DomWrapper, {
      ref: wrapperNodeRef
    }, motionChildren);
  });
  CSSMotion.displayName = 'CSSMotion';
  return CSSMotion;
}
/* harmony default export */ const es_CSSMotion = (genCSSMotion(supportTransition));
;// CONCATENATED MODULE: ./node_modules/rc-motion/es/util/diff.js


var STATUS_ADD = 'add';
var STATUS_KEEP = 'keep';
var STATUS_REMOVE = 'remove';
var STATUS_REMOVED = 'removed';
function wrapKeyToObject(key) {
  var keyObj;

  if (key && typeof_typeof(key) === 'object' && 'key' in key) {
    keyObj = key;
  } else {
    keyObj = {
      key: key
    };
  }

  return _objectSpread2(_objectSpread2({}, keyObj), {}, {
    key: String(keyObj.key)
  });
}
function parseKeys() {
  var keys = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  return keys.map(wrapKeyToObject);
}
function diffKeys() {
  var prevKeys = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var currentKeys = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  var list = [];
  var currentIndex = 0;
  var currentLen = currentKeys.length;
  var prevKeyObjects = parseKeys(prevKeys);
  var currentKeyObjects = parseKeys(currentKeys); // Check prev keys to insert or keep

  prevKeyObjects.forEach(function (keyObj) {
    var hit = false;

    for (var i = currentIndex; i < currentLen; i += 1) {
      var currentKeyObj = currentKeyObjects[i];

      if (currentKeyObj.key === keyObj.key) {
        // New added keys should add before current key
        if (currentIndex < i) {
          list = list.concat(currentKeyObjects.slice(currentIndex, i).map(function (obj) {
            return _objectSpread2(_objectSpread2({}, obj), {}, {
              status: STATUS_ADD
            });
          }));
          currentIndex = i;
        }

        list.push(_objectSpread2(_objectSpread2({}, currentKeyObj), {}, {
          status: STATUS_KEEP
        }));
        currentIndex += 1;
        hit = true;
        break;
      }
    } // If not hit, it means key is removed


    if (!hit) {
      list.push(_objectSpread2(_objectSpread2({}, keyObj), {}, {
        status: STATUS_REMOVE
      }));
    }
  }); // Add rest to the list

  if (currentIndex < currentLen) {
    list = list.concat(currentKeyObjects.slice(currentIndex).map(function (obj) {
      return _objectSpread2(_objectSpread2({}, obj), {}, {
        status: STATUS_ADD
      });
    }));
  }
  /**
   * Merge same key when it remove and add again:
   *    [1 - add, 2 - keep, 1 - remove] -> [1 - keep, 2 - keep]
   */


  var keys = {};
  list.forEach(function (_ref) {
    var key = _ref.key;
    keys[key] = (keys[key] || 0) + 1;
  });
  var duplicatedKeys = Object.keys(keys).filter(function (key) {
    return keys[key] > 1;
  });
  duplicatedKeys.forEach(function (matchKey) {
    // Remove `STATUS_REMOVE` node.
    list = list.filter(function (_ref2) {
      var key = _ref2.key,
          status = _ref2.status;
      return key !== matchKey || status !== STATUS_REMOVE;
    }); // Update `STATUS_ADD` to `STATUS_KEEP`

    list.forEach(function (node) {
      if (node.key === matchKey) {
        // eslint-disable-next-line no-param-reassign
        node.status = STATUS_KEEP;
      }
    });
  });
  return list;
}
;// CONCATENATED MODULE: ./node_modules/rc-motion/es/CSSMotionList.js









var CSSMotionList_excluded = ["component", "children", "onVisibleChanged", "onAllRemoved"],
    CSSMotionList_excluded2 = ["status"];

/* eslint react/prop-types: 0 */




var MOTION_PROP_NAMES = ['eventProps', 'visible', 'children', 'motionName', 'motionAppear', 'motionEnter', 'motionLeave', 'motionLeaveImmediately', 'motionDeadline', 'removeOnLeave', 'leavedClassName', 'onAppearStart', 'onAppearActive', 'onAppearEnd', 'onEnterStart', 'onEnterActive', 'onEnterEnd', 'onLeaveStart', 'onLeaveActive', 'onLeaveEnd'];

/**
 * Generate a CSSMotionList component with config
 * @param transitionSupport No need since CSSMotionList no longer depends on transition support
 * @param CSSMotion CSSMotion component
 */
function genCSSMotionList(transitionSupport) {
  var CSSMotion = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : es_CSSMotion;

  var CSSMotionList = /*#__PURE__*/function (_React$Component) {
    _inherits(CSSMotionList, _React$Component);

    var _super = _createSuper(CSSMotionList);

    function CSSMotionList() {
      var _this;

      _classCallCheck(this, CSSMotionList);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _super.call.apply(_super, [this].concat(args));

      defineProperty_defineProperty(_assertThisInitialized(_this), "state", {
        keyEntities: []
      });

      defineProperty_defineProperty(_assertThisInitialized(_this), "removeKey", function (removeKey) {
        var keyEntities = _this.state.keyEntities;
        var nextKeyEntities = keyEntities.map(function (entity) {
          if (entity.key !== removeKey) return entity;
          return _objectSpread2(_objectSpread2({}, entity), {}, {
            status: STATUS_REMOVED
          });
        });

        _this.setState({
          keyEntities: nextKeyEntities
        });

        return nextKeyEntities.filter(function (_ref) {
          var status = _ref.status;
          return status !== STATUS_REMOVED;
        }).length;
      });

      return _this;
    }

    _createClass(CSSMotionList, [{
      key: "render",
      value: function render() {
        var _this2 = this;

        var keyEntities = this.state.keyEntities;

        var _this$props = this.props,
            component = _this$props.component,
            children = _this$props.children,
            _onVisibleChanged = _this$props.onVisibleChanged,
            onAllRemoved = _this$props.onAllRemoved,
            restProps = _objectWithoutProperties(_this$props, CSSMotionList_excluded);

        var Component = component || external_React_namespaceObject.Fragment;
        var motionProps = {};
        MOTION_PROP_NAMES.forEach(function (prop) {
          motionProps[prop] = restProps[prop];
          delete restProps[prop];
        });
        delete restProps.keys;
        return /*#__PURE__*/external_React_namespaceObject.createElement(Component, restProps, keyEntities.map(function (_ref2) {
          var status = _ref2.status,
              eventProps = _objectWithoutProperties(_ref2, CSSMotionList_excluded2);

          var visible = status === STATUS_ADD || status === STATUS_KEEP;
          return /*#__PURE__*/external_React_namespaceObject.createElement(CSSMotion, extends_extends({}, motionProps, {
            key: eventProps.key,
            visible: visible,
            eventProps: eventProps,
            onVisibleChanged: function onVisibleChanged(changedVisible) {
              _onVisibleChanged === null || _onVisibleChanged === void 0 ? void 0 : _onVisibleChanged(changedVisible, {
                key: eventProps.key
              });

              if (!changedVisible) {
                var restKeysCount = _this2.removeKey(eventProps.key);

                if (restKeysCount === 0 && onAllRemoved) {
                  onAllRemoved();
                }
              }
            }
          }), children);
        }));
      }
    }], [{
      key: "getDerivedStateFromProps",
      value: function getDerivedStateFromProps(_ref3, _ref4) {
        var keys = _ref3.keys;
        var keyEntities = _ref4.keyEntities;
        var parsedKeyObjects = parseKeys(keys);
        var mixedKeyEntities = diffKeys(keyEntities, parsedKeyObjects);
        return {
          keyEntities: mixedKeyEntities.filter(function (entity) {
            var prevEntity = keyEntities.find(function (_ref5) {
              var key = _ref5.key;
              return entity.key === key;
            }); // Remove if already mark as removed

            if (prevEntity && prevEntity.status === STATUS_REMOVED && entity.status === STATUS_REMOVE) {
              return false;
            }

            return true;
          })
        };
      } // ZombieJ: Return the count of rest keys. It's safe to refactor if need more info.

    }]);

    return CSSMotionList;
  }(external_React_namespaceObject.Component);

  defineProperty_defineProperty(CSSMotionList, "defaultProps", {
    component: 'div'
  });

  return CSSMotionList;
}
/* harmony default export */ const CSSMotionList = (genCSSMotionList(supportTransition));
;// CONCATENATED MODULE: ./node_modules/rc-motion/es/index.js



/* harmony default export */ const rc_motion_es = (es_CSSMotion);
;// CONCATENATED MODULE: ./node_modules/@rc-component/trigger/es/Popup/Arrow.js

function Arrow(props) {
  var prefixCls = props.prefixCls,
    align = props.align,
    _props$arrowX = props.arrowX,
    arrowX = _props$arrowX === void 0 ? 0 : _props$arrowX,
    _props$arrowY = props.arrowY,
    arrowY = _props$arrowY === void 0 ? 0 : _props$arrowY;
  var arrowRef = external_React_namespaceObject.useRef();

  // Skip if no align
  if (!align || !align.points) {
    return null;
  }
  var alignStyle = {
    position: 'absolute'
  };

  // Skip if no need to align
  if (align.autoArrow !== false) {
    var popupPoints = align.points[0];
    var targetPoints = align.points[1];
    var popupTB = popupPoints[0];
    var popupLR = popupPoints[1];
    var targetTB = targetPoints[0];
    var targetLR = targetPoints[1];

    // Top & Bottom
    if (popupTB === targetTB || !['t', 'b'].includes(popupTB)) {
      alignStyle.top = arrowY;
    } else if (popupTB === 't') {
      alignStyle.top = 0;
    } else {
      alignStyle.bottom = 0;
    }

    // Left & Right
    if (popupLR === targetLR || !['l', 'r'].includes(popupLR)) {
      alignStyle.left = arrowX;
    } else if (popupLR === 'l') {
      alignStyle.left = 0;
    } else {
      alignStyle.right = 0;
    }
  }
  return /*#__PURE__*/external_React_namespaceObject.createElement("div", {
    ref: arrowRef,
    className: "".concat(prefixCls, "-arrow"),
    style: alignStyle
  });
}
;// CONCATENATED MODULE: ./node_modules/@rc-component/trigger/es/Popup/Mask.js



function Mask(props) {
  var prefixCls = props.prefixCls,
    open = props.open,
    zIndex = props.zIndex,
    mask = props.mask,
    motion = props.motion;
  if (!mask) {
    return null;
  }
  return /*#__PURE__*/React.createElement(rc_motion_es, extends_extends({}, motion, {
    motionAppear: true,
    visible: open,
    removeOnLeave: true
  }), function (_ref) {
    var className = _ref.className;
    return /*#__PURE__*/React.createElement("div", {
      style: {
        zIndex: zIndex
      },
      className: classnames_default()("".concat(prefixCls, "-mask"), className)
    });
  });
}
;// CONCATENATED MODULE: ./node_modules/@rc-component/trigger/es/Popup/index.js











var Popup = /*#__PURE__*/external_React_namespaceObject.forwardRef(function (props, ref) {
  var popup = props.popup,
    className = props.className,
    prefixCls = props.prefixCls,
    style = props.style,
    target = props.target,
    _onVisibleChanged = props.onVisibleChanged,
    open = props.open,
    keepDom = props.keepDom,
    onClick = props.onClick,
    mask = props.mask,
    arrow = props.arrow,
    align = props.align,
    arrowX = props.arrowX,
    arrowY = props.arrowY,
    motion = props.motion,
    maskMotion = props.maskMotion,
    forceRender = props.forceRender,
    getPopupContainer = props.getPopupContainer,
    autoDestroy = props.autoDestroy,
    Portal = props.portal,
    zIndex = props.zIndex,
    onMouseEnter = props.onMouseEnter,
    onMouseLeave = props.onMouseLeave,
    ready = props.ready,
    offsetX = props.offsetX,
    offsetY = props.offsetY,
    onAlign = props.onAlign,
    onPrepare = props.onPrepare,
    stretch = props.stretch,
    targetWidth = props.targetWidth,
    targetHeight = props.targetHeight;
  var childNode = typeof popup === 'function' ? popup() : popup;

  // We can not remove holder only when motion finished.
  var isNodeVisible = open || keepDom;

  // ======================= Container ========================
  var getPopupContainerNeedParams = (getPopupContainer === null || getPopupContainer === void 0 ? void 0 : getPopupContainer.length) > 0;
  var _React$useState = external_React_namespaceObject.useState(!getPopupContainer || !getPopupContainerNeedParams),
    _React$useState2 = slicedToArray_slicedToArray(_React$useState, 2),
    show = _React$useState2[0],
    setShow = _React$useState2[1];

  // Delay to show since `getPopupContainer` need target element
  hooks_useLayoutEffect(function () {
    if (!show && getPopupContainerNeedParams && target) {
      setShow(true);
    }
  }, [show, getPopupContainerNeedParams, target]);

  // ========================= Render =========================
  if (!show) {
    return null;
  }

  // >>>>> Offset
  var offsetStyle = ready || !open ? {
    left: offsetX,
    top: offsetY
  } : {
    left: '-1000vw',
    top: '-1000vh'
  };

  // >>>>> Misc
  var miscStyle = {};
  if (stretch) {
    if (stretch.includes('height') && targetHeight) {
      miscStyle.height = targetHeight;
    } else if (stretch.includes('minHeight') && targetHeight) {
      miscStyle.minHeight = targetHeight;
    }
    if (stretch.includes('width') && targetWidth) {
      miscStyle.width = targetWidth;
    } else if (stretch.includes('minWidth') && targetWidth) {
      miscStyle.minWidth = targetWidth;
    }
  }
  if (!open) {
    miscStyle.pointerEvents = 'none';
  }
  return /*#__PURE__*/external_React_namespaceObject.createElement(Portal, {
    open: forceRender || isNodeVisible,
    getContainer: getPopupContainer && function () {
      return getPopupContainer(target);
    },
    autoDestroy: autoDestroy
  }, /*#__PURE__*/external_React_namespaceObject.createElement(Mask, {
    prefixCls: prefixCls,
    open: open,
    zIndex: zIndex,
    mask: mask,
    motion: maskMotion
  }), /*#__PURE__*/external_React_namespaceObject.createElement(es, {
    onResize: onAlign,
    disabled: !open
  }, function (resizeObserverRef) {
    return /*#__PURE__*/external_React_namespaceObject.createElement(rc_motion_es, extends_extends({
      motionAppear: true,
      motionEnter: true,
      motionLeave: true,
      removeOnLeave: false,
      forceRender: forceRender,
      leavedClassName: "".concat(prefixCls, "-hidden")
    }, motion, {
      onAppearPrepare: onPrepare,
      onEnterPrepare: onPrepare,
      visible: open,
      onVisibleChanged: function onVisibleChanged(nextVisible) {
        var _motion$onVisibleChan;
        motion === null || motion === void 0 ? void 0 : (_motion$onVisibleChan = motion.onVisibleChanged) === null || _motion$onVisibleChan === void 0 ? void 0 : _motion$onVisibleChan.call(motion, nextVisible);
        _onVisibleChanged(nextVisible);
      }
    }), function (_ref, motionRef) {
      var motionClassName = _ref.className,
        motionStyle = _ref.style;
      var cls = classnames_default()(prefixCls, motionClassName, className);
      return /*#__PURE__*/external_React_namespaceObject.createElement("div", {
        ref: composeRef(resizeObserverRef, ref, motionRef),
        className: cls,
        style: _objectSpread2(_objectSpread2(_objectSpread2(_objectSpread2({}, offsetStyle), miscStyle), motionStyle), {}, {
          boxSizing: 'border-box',
          zIndex: zIndex
        }, style),
        onMouseEnter: onMouseEnter,
        onMouseLeave: onMouseLeave,
        onClick: onClick
      }, arrow && /*#__PURE__*/external_React_namespaceObject.createElement(Arrow, {
        prefixCls: prefixCls,
        align: align,
        arrowX: arrowX,
        arrowY: arrowY
      }), childNode);
    });
  }));
});
if (false) {}
/* harmony default export */ const es_Popup = (Popup);
;// CONCATENATED MODULE: ./node_modules/@rc-component/trigger/es/TriggerWrapper.js


var TriggerWrapper = /*#__PURE__*/external_React_namespaceObject.forwardRef(function (props, ref) {
  var children = props.children,
    getTriggerDOMNode = props.getTriggerDOMNode;
  var canUseRef = supportRef(children);

  // When use `getTriggerDOMNode`, we should do additional work to get the real dom
  var setRef = external_React_namespaceObject.useCallback(function (node) {
    fillRef(ref, getTriggerDOMNode ? getTriggerDOMNode(node) : node);
  }, [getTriggerDOMNode]);
  var mergedRef = useComposeRef(setRef, children.ref);
  return canUseRef ? /*#__PURE__*/external_React_namespaceObject.cloneElement(children, {
    ref: mergedRef
  }) : children;
});
if (false) {}
/* harmony default export */ const es_TriggerWrapper = (TriggerWrapper);
;// CONCATENATED MODULE: ./node_modules/@rc-component/trigger/es/index.js



var es_excluded = ["prefixCls", "children", "action", "showAction", "hideAction", "popupVisible", "defaultPopupVisible", "onPopupVisibleChange", "afterPopupVisibleChange", "mouseEnterDelay", "mouseLeaveDelay", "focusDelay", "blurDelay", "mask", "maskClosable", "getPopupContainer", "forceRender", "autoDestroy", "destroyPopupOnHide", "popup", "popupClassName", "popupStyle", "popupPlacement", "builtinPlacements", "popupAlign", "zIndex", "stretch", "getPopupClassNameFromAlign", "alignPoint", "onPopupClick", "onPopupAlign", "arrow", "popupMotion", "maskMotion", "popupTransitionName", "popupAnimation", "maskTransitionName", "maskAnimation", "className", "getTriggerDOMNode"];

















function generateTrigger() {
  var PortalComponent = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : portal_es;
  var Trigger = /*#__PURE__*/external_React_namespaceObject.forwardRef(function (props, ref) {
    var _props$prefixCls = props.prefixCls,
      prefixCls = _props$prefixCls === void 0 ? 'rc-trigger-popup' : _props$prefixCls,
      children = props.children,
      _props$action = props.action,
      action = _props$action === void 0 ? 'hover' : _props$action,
      showAction = props.showAction,
      hideAction = props.hideAction,
      popupVisible = props.popupVisible,
      defaultPopupVisible = props.defaultPopupVisible,
      onPopupVisibleChange = props.onPopupVisibleChange,
      afterPopupVisibleChange = props.afterPopupVisibleChange,
      mouseEnterDelay = props.mouseEnterDelay,
      _props$mouseLeaveDela = props.mouseLeaveDelay,
      mouseLeaveDelay = _props$mouseLeaveDela === void 0 ? 0.1 : _props$mouseLeaveDela,
      focusDelay = props.focusDelay,
      blurDelay = props.blurDelay,
      mask = props.mask,
      _props$maskClosable = props.maskClosable,
      maskClosable = _props$maskClosable === void 0 ? true : _props$maskClosable,
      getPopupContainer = props.getPopupContainer,
      forceRender = props.forceRender,
      autoDestroy = props.autoDestroy,
      destroyPopupOnHide = props.destroyPopupOnHide,
      popup = props.popup,
      popupClassName = props.popupClassName,
      popupStyle = props.popupStyle,
      popupPlacement = props.popupPlacement,
      _props$builtinPlaceme = props.builtinPlacements,
      builtinPlacements = _props$builtinPlaceme === void 0 ? {} : _props$builtinPlaceme,
      popupAlign = props.popupAlign,
      zIndex = props.zIndex,
      stretch = props.stretch,
      getPopupClassNameFromAlign = props.getPopupClassNameFromAlign,
      alignPoint = props.alignPoint,
      onPopupClick = props.onPopupClick,
      onPopupAlign = props.onPopupAlign,
      arrow = props.arrow,
      popupMotion = props.popupMotion,
      maskMotion = props.maskMotion,
      popupTransitionName = props.popupTransitionName,
      popupAnimation = props.popupAnimation,
      maskTransitionName = props.maskTransitionName,
      maskAnimation = props.maskAnimation,
      className = props.className,
      getTriggerDOMNode = props.getTriggerDOMNode,
      restProps = _objectWithoutProperties(props, es_excluded);
    var mergedAutoDestroy = autoDestroy || destroyPopupOnHide || false;

    // =========================== Mobile ===========================
    var _React$useState = external_React_namespaceObject.useState(false),
      _React$useState2 = slicedToArray_slicedToArray(_React$useState, 2),
      mobile = _React$useState2[0],
      setMobile = _React$useState2[1];
    hooks_useLayoutEffect(function () {
      setMobile(isMobile());
    }, []);

    // ========================== Context ===========================
    var subPopupElements = external_React_namespaceObject.useRef({});
    var parentContext = external_React_namespaceObject.useContext(es_context);
    var context = external_React_namespaceObject.useMemo(function () {
      return {
        registerSubPopup: function registerSubPopup(id, subPopupEle) {
          subPopupElements.current[id] = subPopupEle;
          parentContext === null || parentContext === void 0 ? void 0 : parentContext.registerSubPopup(id, subPopupEle);
        }
      };
    }, [parentContext]);

    // =========================== Popup ============================
    var id = useId();
    var _React$useState3 = external_React_namespaceObject.useState(null),
      _React$useState4 = slicedToArray_slicedToArray(_React$useState3, 2),
      popupEle = _React$useState4[0],
      setPopupEle = _React$useState4[1];
    var setPopupRef = useEvent(function (node) {
      if (isDOM(node) && popupEle !== node) {
        setPopupEle(node);
      }
      parentContext === null || parentContext === void 0 ? void 0 : parentContext.registerSubPopup(id, node);
    });

    // =========================== Target ===========================
    // Use state to control here since `useRef` update not trigger render
    var _React$useState5 = external_React_namespaceObject.useState(null),
      _React$useState6 = slicedToArray_slicedToArray(_React$useState5, 2),
      targetEle = _React$useState6[0],
      setTargetEle = _React$useState6[1];
    var setTargetRef = useEvent(function (node) {
      if (isDOM(node) && targetEle !== node) {
        setTargetEle(node);
      }
    });

    // ========================== Children ==========================
    var child = external_React_namespaceObject.Children.only(children);
    var originChildProps = (child === null || child === void 0 ? void 0 : child.props) || {};
    var cloneProps = {};
    var inPopupOrChild = useEvent(function (ele) {
      var _childDOM$getRootNode, _popupEle$getRootNode;
      var childDOM = targetEle;
      return (childDOM === null || childDOM === void 0 ? void 0 : childDOM.contains(ele)) || (childDOM === null || childDOM === void 0 ? void 0 : (_childDOM$getRootNode = childDOM.getRootNode()) === null || _childDOM$getRootNode === void 0 ? void 0 : _childDOM$getRootNode.host) === ele || ele === childDOM || (popupEle === null || popupEle === void 0 ? void 0 : popupEle.contains(ele)) || (popupEle === null || popupEle === void 0 ? void 0 : (_popupEle$getRootNode = popupEle.getRootNode()) === null || _popupEle$getRootNode === void 0 ? void 0 : _popupEle$getRootNode.host) === ele || ele === popupEle || Object.values(subPopupElements.current).some(function (subPopupEle) {
        return (subPopupEle === null || subPopupEle === void 0 ? void 0 : subPopupEle.contains(ele)) || ele === subPopupEle;
      });
    });

    // =========================== Motion ===========================
    var mergePopupMotion = getMotion(prefixCls, popupMotion, popupAnimation, popupTransitionName);
    var mergeMaskMotion = getMotion(prefixCls, maskMotion, maskAnimation, maskTransitionName);

    // ============================ Open ============================
    var _React$useState7 = external_React_namespaceObject.useState(defaultPopupVisible || false),
      _React$useState8 = slicedToArray_slicedToArray(_React$useState7, 2),
      internalOpen = _React$useState8[0],
      setInternalOpen = _React$useState8[1];

    // Render still use props as first priority
    var mergedOpen = popupVisible !== null && popupVisible !== void 0 ? popupVisible : internalOpen;

    // We use effect sync here in case `popupVisible` back to `undefined`
    var setMergedOpen = useEvent(function (nextOpen) {
      if (popupVisible === undefined) {
        setInternalOpen(nextOpen);
      }
    });
    hooks_useLayoutEffect(function () {
      setInternalOpen(popupVisible || false);
    }, [popupVisible]);
    var openRef = external_React_namespaceObject.useRef(mergedOpen);
    openRef.current = mergedOpen;
    var internalTriggerOpen = useEvent(function (nextOpen) {
      if (mergedOpen !== nextOpen) {
        setMergedOpen(nextOpen);
        onPopupVisibleChange === null || onPopupVisibleChange === void 0 ? void 0 : onPopupVisibleChange(nextOpen);
      }
    });

    // Trigger for delay
    var delayRef = external_React_namespaceObject.useRef();
    var clearDelay = function clearDelay() {
      clearTimeout(delayRef.current);
    };
    var triggerOpen = function triggerOpen(nextOpen) {
      var delay = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      clearDelay();
      if (delay === 0) {
        internalTriggerOpen(nextOpen);
      } else {
        delayRef.current = setTimeout(function () {
          internalTriggerOpen(nextOpen);
        }, delay * 1000);
      }
    };
    external_React_namespaceObject.useEffect(function () {
      return clearDelay;
    }, []);

    // ========================== Motion ============================
    var _React$useState9 = external_React_namespaceObject.useState(false),
      _React$useState10 = slicedToArray_slicedToArray(_React$useState9, 2),
      inMotion = _React$useState10[0],
      setInMotion = _React$useState10[1];
    var mountRef = external_React_namespaceObject.useRef(true);
    hooks_useLayoutEffect(function () {
      if (!mountRef.current || mergedOpen) {
        setInMotion(true);
      }
      mountRef.current = true;
    }, [mergedOpen]);
    var _React$useState11 = external_React_namespaceObject.useState(null),
      _React$useState12 = slicedToArray_slicedToArray(_React$useState11, 2),
      motionPrepareResolve = _React$useState12[0],
      setMotionPrepareResolve = _React$useState12[1];

    // =========================== Align ============================
    var _React$useState13 = external_React_namespaceObject.useState([0, 0]),
      _React$useState14 = slicedToArray_slicedToArray(_React$useState13, 2),
      mousePos = _React$useState14[0],
      setMousePos = _React$useState14[1];
    var setMousePosByEvent = function setMousePosByEvent(event) {
      setMousePos([event.clientX, event.clientY]);
    };
    var _useAlign = useAlign(mergedOpen, popupEle, alignPoint ? mousePos : targetEle, popupPlacement, builtinPlacements, popupAlign, onPopupAlign),
      _useAlign2 = slicedToArray_slicedToArray(_useAlign, 9),
      ready = _useAlign2[0],
      offsetX = _useAlign2[1],
      offsetY = _useAlign2[2],
      arrowX = _useAlign2[3],
      arrowY = _useAlign2[4],
      scaleX = _useAlign2[5],
      scaleY = _useAlign2[6],
      alignInfo = _useAlign2[7],
      onAlign = _useAlign2[8];
    var triggerAlign = useEvent(function () {
      if (!inMotion) {
        onAlign();
      }
    });
    useWatch(mergedOpen, targetEle, popupEle, triggerAlign);
    hooks_useLayoutEffect(function () {
      triggerAlign();
    }, [mousePos]);

    // When no builtinPlacements and popupAlign changed
    hooks_useLayoutEffect(function () {
      if (mergedOpen && !(builtinPlacements !== null && builtinPlacements !== void 0 && builtinPlacements[popupPlacement])) {
        triggerAlign();
      }
    }, [JSON.stringify(popupAlign)]);
    var alignedClassName = external_React_namespaceObject.useMemo(function () {
      var baseClassName = getAlignPopupClassName(builtinPlacements, prefixCls, alignInfo, alignPoint);
      return classnames_default()(baseClassName, getPopupClassNameFromAlign === null || getPopupClassNameFromAlign === void 0 ? void 0 : getPopupClassNameFromAlign(alignInfo));
    }, [alignInfo, getPopupClassNameFromAlign, builtinPlacements, prefixCls, alignPoint]);
    external_React_namespaceObject.useImperativeHandle(ref, function () {
      return {
        forceAlign: triggerAlign
      };
    });

    // ========================== Motion ============================
    var onVisibleChanged = function onVisibleChanged(visible) {
      setInMotion(false);
      onAlign();
      afterPopupVisibleChange === null || afterPopupVisibleChange === void 0 ? void 0 : afterPopupVisibleChange(visible);
    };

    // We will trigger align when motion is in prepare
    var onPrepare = function onPrepare() {
      return new Promise(function (resolve) {
        setMotionPrepareResolve(function () {
          return resolve;
        });
      });
    };
    hooks_useLayoutEffect(function () {
      if (motionPrepareResolve) {
        onAlign();
        motionPrepareResolve();
        setMotionPrepareResolve(null);
      }
    }, [motionPrepareResolve]);

    // ========================== Stretch ===========================
    var _React$useState15 = external_React_namespaceObject.useState(0),
      _React$useState16 = slicedToArray_slicedToArray(_React$useState15, 2),
      targetWidth = _React$useState16[0],
      setTargetWidth = _React$useState16[1];
    var _React$useState17 = external_React_namespaceObject.useState(0),
      _React$useState18 = slicedToArray_slicedToArray(_React$useState17, 2),
      targetHeight = _React$useState18[0],
      setTargetHeight = _React$useState18[1];
    var onTargetResize = function onTargetResize(_, ele) {
      triggerAlign();
      if (stretch) {
        var rect = ele.getBoundingClientRect();
        setTargetWidth(rect.width);
        setTargetHeight(rect.height);
      }
    };

    // =========================== Action ===========================
    var _useAction = useAction(mobile, action, showAction, hideAction),
      _useAction2 = slicedToArray_slicedToArray(_useAction, 2),
      showActions = _useAction2[0],
      hideActions = _useAction2[1];

    // Util wrapper for trigger action
    var wrapperAction = function wrapperAction(eventName, nextOpen, delay, preEvent) {
      cloneProps[eventName] = function (event) {
        var _originChildProps$eve;
        preEvent === null || preEvent === void 0 ? void 0 : preEvent(event);
        triggerOpen(nextOpen, delay);

        // Pass to origin
        for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
          args[_key - 1] = arguments[_key];
        }
        (_originChildProps$eve = originChildProps[eventName]) === null || _originChildProps$eve === void 0 ? void 0 : _originChildProps$eve.call.apply(_originChildProps$eve, [originChildProps, event].concat(args));
      };
    };

    // ======================= Action: Click ========================
    var clickToShow = showActions.has('click');
    var clickToHide = hideActions.has('click') || hideActions.has('contextMenu');
    if (clickToShow || clickToHide) {
      cloneProps.onClick = function (event) {
        var _originChildProps$onC;
        if (openRef.current && clickToHide) {
          triggerOpen(false);
        } else if (!openRef.current && clickToShow) {
          setMousePosByEvent(event);
          triggerOpen(true);
        }

        // Pass to origin
        for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
          args[_key2 - 1] = arguments[_key2];
        }
        (_originChildProps$onC = originChildProps.onClick) === null || _originChildProps$onC === void 0 ? void 0 : _originChildProps$onC.call.apply(_originChildProps$onC, [originChildProps, event].concat(args));
      };
    }

    // Click to hide is special action since click popup element should not hide
    external_React_namespaceObject.useEffect(function () {
      if (clickToHide && popupEle && (!mask || maskClosable)) {
        var onWindowClick = function onWindowClick(_ref) {
          var target = _ref.target;
          if (openRef.current && !inPopupOrChild(target)) {
            triggerOpen(false);
          }
        };
        var win = getWin(popupEle);
        var targetRoot = targetEle === null || targetEle === void 0 ? void 0 : targetEle.getRootNode();
        win.addEventListener('click', onWindowClick);

        // shadow root
        var inShadow = targetRoot && targetRoot !== targetEle.ownerDocument;
        if (inShadow) {
          targetRoot.addEventListener('click', onWindowClick);
        }

        // Warning if target and popup not in same root
        if (false) { var popupRoot; }
        return function () {
          win.removeEventListener('click', onWindowClick);
          if (inShadow) {
            targetRoot.removeEventListener('click', onWindowClick);
          }
        };
      }
    }, [clickToHide, targetEle, popupEle, mask, maskClosable]);

    // ======================= Action: Hover ========================
    var hoverToShow = showActions.has('hover');
    var hoverToHide = hideActions.has('hover');
    var onPopupMouseEnter;
    var onPopupMouseLeave;
    if (hoverToShow) {
      wrapperAction('onMouseEnter', true, mouseEnterDelay, function (event) {
        setMousePosByEvent(event);
      });
      onPopupMouseEnter = function onPopupMouseEnter() {
        triggerOpen(true, mouseEnterDelay);
      };

      // Align Point
      if (alignPoint) {
        cloneProps.onMouseMove = function (event) {
          var _originChildProps$onM;
          // setMousePosByEvent(event);
          (_originChildProps$onM = originChildProps.onMouseMove) === null || _originChildProps$onM === void 0 ? void 0 : _originChildProps$onM.call(originChildProps, event);
        };
      }
    }
    if (hoverToHide) {
      wrapperAction('onMouseLeave', false, mouseLeaveDelay);
      onPopupMouseLeave = function onPopupMouseLeave() {
        triggerOpen(false, mouseLeaveDelay);
      };
    }

    // ======================= Action: Focus ========================
    if (showActions.has('focus')) {
      wrapperAction('onFocus', true, focusDelay);
    }
    if (hideActions.has('focus')) {
      wrapperAction('onBlur', false, blurDelay);
    }

    // ==================== Action: ContextMenu =====================
    if (showActions.has('contextMenu')) {
      cloneProps.onContextMenu = function (event) {
        var _originChildProps$onC2;
        setMousePosByEvent(event);
        triggerOpen(true);
        event.preventDefault();

        // Pass to origin
        for (var _len3 = arguments.length, args = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
          args[_key3 - 1] = arguments[_key3];
        }
        (_originChildProps$onC2 = originChildProps.onContextMenu) === null || _originChildProps$onC2 === void 0 ? void 0 : _originChildProps$onC2.call.apply(_originChildProps$onC2, [originChildProps, event].concat(args));
      };
    }

    // ========================= ClassName ==========================
    if (className) {
      cloneProps.className = classnames_default()(originChildProps.className, className);
    }

    // =========================== Render ===========================
    var mergedChildrenProps = _objectSpread2(_objectSpread2({}, originChildProps), cloneProps);

    // Pass props into cloneProps for nest usage
    var passedProps = {};
    var passedEventList = ['onContextMenu', 'onClick', 'onMouseDown', 'onTouchStart', 'onMouseEnter', 'onMouseLeave', 'onFocus', 'onBlur'];
    passedEventList.forEach(function (eventName) {
      if (restProps[eventName]) {
        passedProps[eventName] = function () {
          var _mergedChildrenProps$;
          for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
            args[_key4] = arguments[_key4];
          }
          (_mergedChildrenProps$ = mergedChildrenProps[eventName]) === null || _mergedChildrenProps$ === void 0 ? void 0 : _mergedChildrenProps$.call.apply(_mergedChildrenProps$, [mergedChildrenProps].concat(args));
          restProps[eventName].apply(restProps, args);
        };
      }
    });

    // Child Node
    var triggerNode = /*#__PURE__*/external_React_namespaceObject.cloneElement(child, _objectSpread2(_objectSpread2({}, mergedChildrenProps), passedProps));

    // Render
    return /*#__PURE__*/external_React_namespaceObject.createElement(external_React_namespaceObject.Fragment, null, /*#__PURE__*/external_React_namespaceObject.createElement(es, {
      disabled: !mergedOpen,
      ref: setTargetRef,
      onResize: onTargetResize
    }, /*#__PURE__*/external_React_namespaceObject.createElement(es_TriggerWrapper, {
      getTriggerDOMNode: getTriggerDOMNode
    }, triggerNode)), /*#__PURE__*/external_React_namespaceObject.createElement(es_context.Provider, {
      value: context
    }, /*#__PURE__*/external_React_namespaceObject.createElement(es_Popup, {
      portal: PortalComponent,
      ref: setPopupRef,
      prefixCls: prefixCls,
      popup: popup,
      className: classnames_default()(popupClassName, alignedClassName),
      style: popupStyle,
      target: targetEle,
      onMouseEnter: onPopupMouseEnter,
      onMouseLeave: onPopupMouseLeave,
      zIndex: zIndex
      // Open
      ,
      open: mergedOpen,
      keepDom: inMotion
      // Click
      ,
      onClick: onPopupClick
      // Mask
      ,
      mask: mask
      // Motion
      ,
      motion: mergePopupMotion,
      maskMotion: mergeMaskMotion,
      onVisibleChanged: onVisibleChanged,
      onPrepare: onPrepare
      // Portal
      ,
      forceRender: forceRender,
      autoDestroy: mergedAutoDestroy,
      getPopupContainer: getPopupContainer
      // Arrow
      ,
      align: alignInfo,
      arrow: arrow
      // Align
      ,
      ready: ready,
      offsetX: offsetX,
      offsetY: offsetY,
      arrowX: arrowX,
      arrowY: arrowY,
      onAlign: triggerAlign
      // Stretch
      ,
      stretch: stretch,
      targetWidth: targetWidth / scaleX,
      targetHeight: targetHeight / scaleY
    })));
  });
  if (false) {}
  return Trigger;
}
/* harmony default export */ const trigger_es = (generateTrigger(portal_es));
;// CONCATENATED MODULE: ./node_modules/rc-select/es/SelectTrigger.js




var SelectTrigger_excluded = ["prefixCls", "disabled", "visible", "children", "popupElement", "containerWidth", "animation", "transitionName", "dropdownStyle", "dropdownClassName", "direction", "placement", "builtinPlacements", "dropdownMatchSelectWidth", "dropdownRender", "dropdownAlign", "getPopupContainer", "empty", "getTriggerDOMNode", "onPopupVisibleChange", "onPopupMouseEnter"];



var getBuiltInPlacements = function getBuiltInPlacements(dropdownMatchSelectWidth) {
  // Enable horizontal overflow auto-adjustment when a custom dropdown width is provided
  var adjustX = dropdownMatchSelectWidth === true ? 0 : 1;
  return {
    bottomLeft: {
      points: ['tl', 'bl'],
      offset: [0, 4],
      overflow: {
        adjustX: adjustX,
        adjustY: 1
      },
      htmlRegion: 'scroll'
    },
    bottomRight: {
      points: ['tr', 'br'],
      offset: [0, 4],
      overflow: {
        adjustX: adjustX,
        adjustY: 1
      },
      htmlRegion: 'scroll'
    },
    topLeft: {
      points: ['bl', 'tl'],
      offset: [0, -4],
      overflow: {
        adjustX: adjustX,
        adjustY: 1
      },
      htmlRegion: 'scroll'
    },
    topRight: {
      points: ['br', 'tr'],
      offset: [0, -4],
      overflow: {
        adjustX: adjustX,
        adjustY: 1
      },
      htmlRegion: 'scroll'
    }
  };
};
var SelectTrigger = function SelectTrigger(props, ref) {
  var prefixCls = props.prefixCls,
    disabled = props.disabled,
    visible = props.visible,
    children = props.children,
    popupElement = props.popupElement,
    containerWidth = props.containerWidth,
    animation = props.animation,
    transitionName = props.transitionName,
    dropdownStyle = props.dropdownStyle,
    dropdownClassName = props.dropdownClassName,
    _props$direction = props.direction,
    direction = _props$direction === void 0 ? 'ltr' : _props$direction,
    placement = props.placement,
    builtinPlacements = props.builtinPlacements,
    dropdownMatchSelectWidth = props.dropdownMatchSelectWidth,
    dropdownRender = props.dropdownRender,
    dropdownAlign = props.dropdownAlign,
    getPopupContainer = props.getPopupContainer,
    empty = props.empty,
    getTriggerDOMNode = props.getTriggerDOMNode,
    onPopupVisibleChange = props.onPopupVisibleChange,
    onPopupMouseEnter = props.onPopupMouseEnter,
    restProps = _objectWithoutProperties(props, SelectTrigger_excluded);
  var dropdownPrefixCls = "".concat(prefixCls, "-dropdown");
  var popupNode = popupElement;
  if (dropdownRender) {
    popupNode = dropdownRender(popupElement);
  }
  var mergedBuiltinPlacements = external_React_namespaceObject.useMemo(function () {
    return builtinPlacements || getBuiltInPlacements(dropdownMatchSelectWidth);
  }, [builtinPlacements, dropdownMatchSelectWidth]);

  // ===================== Motion ======================
  var mergedTransitionName = animation ? "".concat(dropdownPrefixCls, "-").concat(animation) : transitionName;

  // ======================= Ref =======================
  var popupRef = external_React_namespaceObject.useRef(null);
  external_React_namespaceObject.useImperativeHandle(ref, function () {
    return {
      getPopupElement: function getPopupElement() {
        return popupRef.current;
      }
    };
  });
  var popupStyle = _objectSpread2({
    minWidth: containerWidth
  }, dropdownStyle);
  if (typeof dropdownMatchSelectWidth === 'number') {
    popupStyle.width = dropdownMatchSelectWidth;
  } else if (dropdownMatchSelectWidth) {
    popupStyle.width = containerWidth;
  }
  return /*#__PURE__*/external_React_namespaceObject.createElement(trigger_es, extends_extends({}, restProps, {
    showAction: onPopupVisibleChange ? ['click'] : [],
    hideAction: onPopupVisibleChange ? ['click'] : [],
    popupPlacement: placement || (direction === 'rtl' ? 'bottomRight' : 'bottomLeft'),
    builtinPlacements: mergedBuiltinPlacements,
    prefixCls: dropdownPrefixCls,
    popupTransitionName: mergedTransitionName,
    popup: /*#__PURE__*/external_React_namespaceObject.createElement("div", {
      ref: popupRef,
      onMouseEnter: onPopupMouseEnter
    }, popupNode),
    popupAlign: dropdownAlign,
    popupVisible: visible,
    getPopupContainer: getPopupContainer,
    popupClassName: classnames_default()(dropdownClassName, defineProperty_defineProperty({}, "".concat(dropdownPrefixCls, "-empty"), empty)),
    popupStyle: popupStyle,
    getTriggerDOMNode: getTriggerDOMNode,
    onPopupVisibleChange: onPopupVisibleChange
  }), children);
};
var RefSelectTrigger = /*#__PURE__*/external_React_namespaceObject.forwardRef(SelectTrigger);
RefSelectTrigger.displayName = 'SelectTrigger';
/* harmony default export */ const es_SelectTrigger = (RefSelectTrigger);
;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/toArray.js




function _toArray(arr) {
  return _arrayWithHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableRest();
}
;// CONCATENATED MODULE: ./node_modules/rc-select/es/utils/valueUtil.js




function getKey(data, index) {
  var key = data.key;
  var value;
  if ('value' in data) {
    value = data.value;
  }
  if (key !== null && key !== undefined) {
    return key;
  }
  if (value !== undefined) {
    return value;
  }
  return "rc-index-key-".concat(index);
}
function fillFieldNames(fieldNames, childrenAsData) {
  var _ref = fieldNames || {},
    label = _ref.label,
    value = _ref.value,
    options = _ref.options;
  return {
    label: label || (childrenAsData ? 'children' : 'label'),
    value: value || 'value',
    options: options || 'options'
  };
}

/**
 * Flat options into flatten list.
 * We use `optionOnly` here is aim to avoid user use nested option group.
 * Here is simply set `key` to the index if not provided.
 */
function flattenOptions(options) {
  var _ref2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
    fieldNames = _ref2.fieldNames,
    childrenAsData = _ref2.childrenAsData;
  var flattenList = [];
  var _fillFieldNames = fillFieldNames(fieldNames, false),
    fieldLabel = _fillFieldNames.label,
    fieldValue = _fillFieldNames.value,
    fieldOptions = _fillFieldNames.options;
  function dig(list, isGroupOption) {
    list.forEach(function (data) {
      var label = data[fieldLabel];
      if (isGroupOption || !(fieldOptions in data)) {
        var value = data[fieldValue];

        // Option
        flattenList.push({
          key: getKey(data, flattenList.length),
          groupOption: isGroupOption,
          data: data,
          label: label,
          value: value
        });
      } else {
        var grpLabel = label;
        if (grpLabel === undefined && childrenAsData) {
          grpLabel = data.label;
        }

        // Option Group
        flattenList.push({
          key: getKey(data, flattenList.length),
          group: true,
          data: data,
          label: grpLabel
        });
        dig(data[fieldOptions], true);
      }
    });
  }
  dig(options, false);
  return flattenList;
}

/**
 * Inject `props` into `option` for legacy usage
 */
function injectPropsWithOption(option) {
  var newOption = _objectSpread2({}, option);
  if (!('props' in newOption)) {
    Object.defineProperty(newOption, 'props', {
      get: function get() {
        es_warning(false, 'Return type is option instead of Option instance. Please read value directly instead of reading from `props`.');
        return newOption;
      }
    });
  }
  return newOption;
}
function getSeparatedContent(text, tokens) {
  if (!tokens || !tokens.length) {
    return null;
  }
  var match = false;
  function separate(str, _ref3) {
    var _ref4 = _toArray(_ref3),
      token = _ref4[0],
      restTokens = _ref4.slice(1);
    if (!token) {
      return [str];
    }
    var list = str.split(token);
    match = match || list.length > 1;
    return list.reduce(function (prevList, unitStr) {
      return [].concat(_toConsumableArray(prevList), _toConsumableArray(separate(unitStr, restTokens)));
    }, []).filter(function (unit) {
      return unit;
    });
  }
  var list = separate(text, tokens);
  return match ? list : null;
}
;// CONCATENATED MODULE: ./node_modules/rc-select/es/BaseSelect.js







var BaseSelect_excluded = ["id", "prefixCls", "className", "showSearch", "tagRender", "direction", "omitDomProps", "displayValues", "onDisplayValuesChange", "emptyOptions", "notFoundContent", "onClear", "mode", "disabled", "loading", "getInputElement", "getRawInputElement", "open", "defaultOpen", "onDropdownVisibleChange", "activeValue", "onActiveValueChange", "activeDescendantId", "searchValue", "autoClearSearchValue", "onSearch", "onSearchSplit", "tokenSeparators", "allowClear", "showArrow", "inputIcon", "clearIcon", "OptionList", "animation", "transitionName", "dropdownStyle", "dropdownClassName", "dropdownMatchSelectWidth", "dropdownRender", "dropdownAlign", "placement", "builtinPlacements", "getPopupContainer", "showAction", "onFocus", "onBlur", "onKeyUp", "onKeyDown", "onMouseDown"];















var DEFAULT_OMIT_PROPS = ['value', 'onChange', 'removeIcon', 'placeholder', 'autoFocus', 'maxTagCount', 'maxTagTextLength', 'maxTagPlaceholder', 'choiceTransitionName', 'onInputKeyDown', 'onPopupScroll', 'tabIndex'];
function BaseSelect_isMultiple(mode) {
  return mode === 'tags' || mode === 'multiple';
}
var BaseSelect = /*#__PURE__*/external_React_namespaceObject.forwardRef(function (props, ref) {
  var _customizeRawInputEle, _classNames2;
  var id = props.id,
    prefixCls = props.prefixCls,
    className = props.className,
    showSearch = props.showSearch,
    tagRender = props.tagRender,
    direction = props.direction,
    omitDomProps = props.omitDomProps,
    displayValues = props.displayValues,
    onDisplayValuesChange = props.onDisplayValuesChange,
    emptyOptions = props.emptyOptions,
    _props$notFoundConten = props.notFoundContent,
    notFoundContent = _props$notFoundConten === void 0 ? 'Not Found' : _props$notFoundConten,
    onClear = props.onClear,
    mode = props.mode,
    disabled = props.disabled,
    loading = props.loading,
    getInputElement = props.getInputElement,
    getRawInputElement = props.getRawInputElement,
    open = props.open,
    defaultOpen = props.defaultOpen,
    onDropdownVisibleChange = props.onDropdownVisibleChange,
    activeValue = props.activeValue,
    onActiveValueChange = props.onActiveValueChange,
    activeDescendantId = props.activeDescendantId,
    searchValue = props.searchValue,
    autoClearSearchValue = props.autoClearSearchValue,
    onSearch = props.onSearch,
    onSearchSplit = props.onSearchSplit,
    tokenSeparators = props.tokenSeparators,
    allowClear = props.allowClear,
    showArrow = props.showArrow,
    inputIcon = props.inputIcon,
    clearIcon = props.clearIcon,
    OptionList = props.OptionList,
    animation = props.animation,
    transitionName = props.transitionName,
    dropdownStyle = props.dropdownStyle,
    dropdownClassName = props.dropdownClassName,
    dropdownMatchSelectWidth = props.dropdownMatchSelectWidth,
    dropdownRender = props.dropdownRender,
    dropdownAlign = props.dropdownAlign,
    placement = props.placement,
    builtinPlacements = props.builtinPlacements,
    getPopupContainer = props.getPopupContainer,
    _props$showAction = props.showAction,
    showAction = _props$showAction === void 0 ? [] : _props$showAction,
    onFocus = props.onFocus,
    onBlur = props.onBlur,
    onKeyUp = props.onKeyUp,
    onKeyDown = props.onKeyDown,
    onMouseDown = props.onMouseDown,
    restProps = _objectWithoutProperties(props, BaseSelect_excluded);

  // ============================== MISC ==============================
  var multiple = BaseSelect_isMultiple(mode);
  var mergedShowSearch = (showSearch !== undefined ? showSearch : multiple) || mode === 'combobox';
  var domProps = _objectSpread2({}, restProps);
  DEFAULT_OMIT_PROPS.forEach(function (propName) {
    delete domProps[propName];
  });
  omitDomProps === null || omitDomProps === void 0 ? void 0 : omitDomProps.forEach(function (propName) {
    delete domProps[propName];
  });

  // ============================= Mobile =============================
  var _React$useState = external_React_namespaceObject.useState(false),
    _React$useState2 = slicedToArray_slicedToArray(_React$useState, 2),
    mobile = _React$useState2[0],
    setMobile = _React$useState2[1];
  external_React_namespaceObject.useEffect(function () {
    // Only update on the client side
    setMobile(isMobile());
  }, []);

  // ============================== Refs ==============================
  var containerRef = external_React_namespaceObject.useRef(null);
  var selectorDomRef = external_React_namespaceObject.useRef(null);
  var triggerRef = external_React_namespaceObject.useRef(null);
  var selectorRef = external_React_namespaceObject.useRef(null);
  var listRef = external_React_namespaceObject.useRef(null);

  /** Used for component focused management */
  var _useDelayReset = useDelayReset(),
    _useDelayReset2 = slicedToArray_slicedToArray(_useDelayReset, 3),
    mockFocused = _useDelayReset2[0],
    setMockFocused = _useDelayReset2[1],
    cancelSetMockFocused = _useDelayReset2[2];

  // =========================== Imperative ===========================
  external_React_namespaceObject.useImperativeHandle(ref, function () {
    var _selectorRef$current, _selectorRef$current2;
    return {
      focus: (_selectorRef$current = selectorRef.current) === null || _selectorRef$current === void 0 ? void 0 : _selectorRef$current.focus,
      blur: (_selectorRef$current2 = selectorRef.current) === null || _selectorRef$current2 === void 0 ? void 0 : _selectorRef$current2.blur,
      scrollTo: function scrollTo(arg) {
        var _listRef$current;
        return (_listRef$current = listRef.current) === null || _listRef$current === void 0 ? void 0 : _listRef$current.scrollTo(arg);
      }
    };
  });

  // ========================== Search Value ==========================
  var mergedSearchValue = external_React_namespaceObject.useMemo(function () {
    var _displayValues$;
    if (mode !== 'combobox') {
      return searchValue;
    }
    var val = (_displayValues$ = displayValues[0]) === null || _displayValues$ === void 0 ? void 0 : _displayValues$.value;
    return typeof val === 'string' || typeof val === 'number' ? String(val) : '';
  }, [searchValue, mode, displayValues]);

  // ========================== Custom Input ==========================
  // Only works in `combobox`
  var customizeInputElement = mode === 'combobox' && typeof getInputElement === 'function' && getInputElement() || null;

  // Used for customize replacement for `rc-cascader`
  var customizeRawInputElement = typeof getRawInputElement === 'function' && getRawInputElement();
  var customizeRawInputRef = useComposeRef(selectorDomRef, customizeRawInputElement === null || customizeRawInputElement === void 0 ? void 0 : (_customizeRawInputEle = customizeRawInputElement.props) === null || _customizeRawInputEle === void 0 ? void 0 : _customizeRawInputEle.ref);

  // ============================== Open ==============================
  // SSR not support Portal which means we need delay `open` for the first time render
  var _React$useState3 = external_React_namespaceObject.useState(false),
    _React$useState4 = slicedToArray_slicedToArray(_React$useState3, 2),
    rendered = _React$useState4[0],
    setRendered = _React$useState4[1];
  hooks_useLayoutEffect(function () {
    setRendered(true);
  }, []);
  var _useMergedState = useMergedState(false, {
      defaultValue: defaultOpen,
      value: open
    }),
    _useMergedState2 = slicedToArray_slicedToArray(_useMergedState, 2),
    innerOpen = _useMergedState2[0],
    setInnerOpen = _useMergedState2[1];
  var mergedOpen = rendered ? innerOpen : false;

  // Not trigger `open` in `combobox` when `notFoundContent` is empty
  var emptyListContent = !notFoundContent && emptyOptions;
  if (disabled || emptyListContent && mergedOpen && mode === 'combobox') {
    mergedOpen = false;
  }
  var triggerOpen = emptyListContent ? false : mergedOpen;
  var onToggleOpen = external_React_namespaceObject.useCallback(function (newOpen) {
    var nextOpen = newOpen !== undefined ? newOpen : !mergedOpen;
    if (!disabled) {
      setInnerOpen(nextOpen);
      if (mergedOpen !== nextOpen) {
        onDropdownVisibleChange === null || onDropdownVisibleChange === void 0 ? void 0 : onDropdownVisibleChange(nextOpen);
      }
    }
  }, [disabled, mergedOpen, setInnerOpen, onDropdownVisibleChange]);

  // ============================= Search =============================
  var tokenWithEnter = external_React_namespaceObject.useMemo(function () {
    return (tokenSeparators || []).some(function (tokenSeparator) {
      return ['\n', '\r\n'].includes(tokenSeparator);
    });
  }, [tokenSeparators]);
  var onInternalSearch = function onInternalSearch(searchText, fromTyping, isCompositing) {
    var ret = true;
    var newSearchText = searchText;
    onActiveValueChange === null || onActiveValueChange === void 0 ? void 0 : onActiveValueChange(null);

    // Check if match the `tokenSeparators`
    var patchLabels = isCompositing ? null : getSeparatedContent(searchText, tokenSeparators);

    // Ignore combobox since it's not split-able
    if (mode !== 'combobox' && patchLabels) {
      newSearchText = '';
      onSearchSplit === null || onSearchSplit === void 0 ? void 0 : onSearchSplit(patchLabels);

      // Should close when paste finish
      onToggleOpen(false);

      // Tell Selector that break next actions
      ret = false;
    }
    if (onSearch && mergedSearchValue !== newSearchText) {
      onSearch(newSearchText, {
        source: fromTyping ? 'typing' : 'effect'
      });
    }
    return ret;
  };

  // Only triggered when menu is closed & mode is tags
  // If menu is open, OptionList will take charge
  // If mode isn't tags, press enter is not meaningful when you can't see any option
  var onInternalSearchSubmit = function onInternalSearchSubmit(searchText) {
    // prevent empty tags from appearing when you click the Enter button
    if (!searchText || !searchText.trim()) {
      return;
    }
    onSearch(searchText, {
      source: 'submit'
    });
  };

  // Close will clean up single mode search text
  external_React_namespaceObject.useEffect(function () {
    if (!mergedOpen && !multiple && mode !== 'combobox') {
      onInternalSearch('', false, false);
    }
  }, [mergedOpen]);

  // ============================ Disabled ============================
  // Close dropdown & remove focus state when disabled change
  external_React_namespaceObject.useEffect(function () {
    if (innerOpen && disabled) {
      setInnerOpen(false);
    }
    if (disabled) {
      setMockFocused(false);
    }
  }, [disabled]);

  // ============================ Keyboard ============================
  /**
   * We record input value here to check if can press to clean up by backspace
   * - null: Key is not down, this is reset by key up
   * - true: Search text is empty when first time backspace down
   * - false: Search text is not empty when first time backspace down
   */
  var _useLock = useLock(),
    _useLock2 = slicedToArray_slicedToArray(_useLock, 2),
    getClearLock = _useLock2[0],
    setClearLock = _useLock2[1];

  // KeyDown
  var onInternalKeyDown = function onInternalKeyDown(event) {
    var clearLock = getClearLock();
    var which = event.which;
    if (which === es_KeyCode.ENTER) {
      // Do not submit form when type in the input
      if (mode !== 'combobox') {
        event.preventDefault();
      }

      // We only manage open state here, close logic should handle by list component
      if (!mergedOpen) {
        onToggleOpen(true);
      }
    }
    setClearLock(!!mergedSearchValue);

    // Remove value by `backspace`
    if (which === es_KeyCode.BACKSPACE && !clearLock && multiple && !mergedSearchValue && displayValues.length) {
      var cloneDisplayValues = _toConsumableArray(displayValues);
      var removedDisplayValue = null;
      for (var i = cloneDisplayValues.length - 1; i >= 0; i -= 1) {
        var current = cloneDisplayValues[i];
        if (!current.disabled) {
          cloneDisplayValues.splice(i, 1);
          removedDisplayValue = current;
          break;
        }
      }
      if (removedDisplayValue) {
        onDisplayValuesChange(cloneDisplayValues, {
          type: 'remove',
          values: [removedDisplayValue]
        });
      }
    }
    for (var _len = arguments.length, rest = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      rest[_key - 1] = arguments[_key];
    }
    if (mergedOpen && listRef.current) {
      var _listRef$current2;
      (_listRef$current2 = listRef.current).onKeyDown.apply(_listRef$current2, [event].concat(rest));
    }
    onKeyDown === null || onKeyDown === void 0 ? void 0 : onKeyDown.apply(void 0, [event].concat(rest));
  };

  // KeyUp
  var onInternalKeyUp = function onInternalKeyUp(event) {
    for (var _len2 = arguments.length, rest = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
      rest[_key2 - 1] = arguments[_key2];
    }
    if (mergedOpen && listRef.current) {
      var _listRef$current3;
      (_listRef$current3 = listRef.current).onKeyUp.apply(_listRef$current3, [event].concat(rest));
    }
    onKeyUp === null || onKeyUp === void 0 ? void 0 : onKeyUp.apply(void 0, [event].concat(rest));
  };

  // ============================ Selector ============================
  var onSelectorRemove = function onSelectorRemove(val) {
    var newValues = displayValues.filter(function (i) {
      return i !== val;
    });
    onDisplayValuesChange(newValues, {
      type: 'remove',
      values: [val]
    });
  };

  // ========================== Focus / Blur ==========================
  /** Record real focus status */
  var focusRef = external_React_namespaceObject.useRef(false);
  var onContainerFocus = function onContainerFocus() {
    setMockFocused(true);
    if (!disabled) {
      if (onFocus && !focusRef.current) {
        onFocus.apply(void 0, arguments);
      }

      // `showAction` should handle `focus` if set
      if (showAction.includes('focus')) {
        onToggleOpen(true);
      }
    }
    focusRef.current = true;
  };
  var onContainerBlur = function onContainerBlur() {
    setMockFocused(false, function () {
      focusRef.current = false;
      onToggleOpen(false);
    });
    if (disabled) {
      return;
    }
    if (mergedSearchValue) {
      // `tags` mode should move `searchValue` into values
      if (mode === 'tags') {
        onSearch(mergedSearchValue, {
          source: 'submit'
        });
      } else if (mode === 'multiple') {
        // `multiple` mode only clean the search value but not trigger event
        onSearch('', {
          source: 'blur'
        });
      }
    }
    if (onBlur) {
      onBlur.apply(void 0, arguments);
    }
  };

  // Give focus back of Select
  var activeTimeoutIds = [];
  external_React_namespaceObject.useEffect(function () {
    return function () {
      activeTimeoutIds.forEach(function (timeoutId) {
        return clearTimeout(timeoutId);
      });
      activeTimeoutIds.splice(0, activeTimeoutIds.length);
    };
  }, []);
  var onInternalMouseDown = function onInternalMouseDown(event) {
    var _triggerRef$current;
    var target = event.target;
    var popupElement = (_triggerRef$current = triggerRef.current) === null || _triggerRef$current === void 0 ? void 0 : _triggerRef$current.getPopupElement();

    // We should give focus back to selector if clicked item is not focusable
    if (popupElement && popupElement.contains(target)) {
      var timeoutId = setTimeout(function () {
        var index = activeTimeoutIds.indexOf(timeoutId);
        if (index !== -1) {
          activeTimeoutIds.splice(index, 1);
        }
        cancelSetMockFocused();
        if (!mobile && !popupElement.contains(document.activeElement)) {
          var _selectorRef$current3;
          (_selectorRef$current3 = selectorRef.current) === null || _selectorRef$current3 === void 0 ? void 0 : _selectorRef$current3.focus();
        }
      });
      activeTimeoutIds.push(timeoutId);
    }
    for (var _len3 = arguments.length, restArgs = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
      restArgs[_key3 - 1] = arguments[_key3];
    }
    onMouseDown === null || onMouseDown === void 0 ? void 0 : onMouseDown.apply(void 0, [event].concat(restArgs));
  };

  // ============================ Dropdown ============================
  var _React$useState5 = external_React_namespaceObject.useState(null),
    _React$useState6 = slicedToArray_slicedToArray(_React$useState5, 2),
    containerWidth = _React$useState6[0],
    setContainerWidth = _React$useState6[1];
  var _React$useState7 = external_React_namespaceObject.useState({}),
    _React$useState8 = slicedToArray_slicedToArray(_React$useState7, 2),
    forceUpdate = _React$useState8[1];
  // We need force update here since popup dom is render async
  function onPopupMouseEnter() {
    forceUpdate({});
  }
  hooks_useLayoutEffect(function () {
    if (triggerOpen) {
      var _containerRef$current;
      var newWidth = Math.ceil((_containerRef$current = containerRef.current) === null || _containerRef$current === void 0 ? void 0 : _containerRef$current.offsetWidth);
      if (containerWidth !== newWidth && !Number.isNaN(newWidth)) {
        setContainerWidth(newWidth);
      }
    }
  }, [triggerOpen]);

  // Used for raw custom input trigger
  var onTriggerVisibleChange;
  if (customizeRawInputElement) {
    onTriggerVisibleChange = function onTriggerVisibleChange(newOpen) {
      onToggleOpen(newOpen);
    };
  }

  // Close when click on non-select element
  useSelectTriggerControl(function () {
    var _triggerRef$current2;
    return [containerRef.current, (_triggerRef$current2 = triggerRef.current) === null || _triggerRef$current2 === void 0 ? void 0 : _triggerRef$current2.getPopupElement()];
  }, triggerOpen, onToggleOpen, !!customizeRawInputElement);

  // ============================ Context =============================
  var baseSelectContext = external_React_namespaceObject.useMemo(function () {
    return _objectSpread2(_objectSpread2({}, props), {}, {
      notFoundContent: notFoundContent,
      open: mergedOpen,
      triggerOpen: triggerOpen,
      id: id,
      showSearch: mergedShowSearch,
      multiple: multiple,
      toggleOpen: onToggleOpen
    });
  }, [props, notFoundContent, triggerOpen, mergedOpen, id, mergedShowSearch, multiple, onToggleOpen]);

  // ==================================================================
  // ==                            Render                            ==
  // ==================================================================

  // ============================= Arrow ==============================
  var mergedShowArrow = showArrow !== undefined ? showArrow : loading || !multiple && mode !== 'combobox';
  var arrowNode;
  if (mergedShowArrow) {
    arrowNode = /*#__PURE__*/external_React_namespaceObject.createElement(es_TransBtn, {
      className: classnames_default()("".concat(prefixCls, "-arrow"), defineProperty_defineProperty({}, "".concat(prefixCls, "-arrow-loading"), loading)),
      customizeIcon: inputIcon,
      customizeIconProps: {
        loading: loading,
        searchValue: mergedSearchValue,
        open: mergedOpen,
        focused: mockFocused,
        showSearch: mergedShowSearch
      }
    });
  }

  // ============================= Clear ==============================
  var clearNode;
  var onClearMouseDown = function onClearMouseDown() {
    var _selectorRef$current4;
    onClear === null || onClear === void 0 ? void 0 : onClear();
    (_selectorRef$current4 = selectorRef.current) === null || _selectorRef$current4 === void 0 ? void 0 : _selectorRef$current4.focus();
    onDisplayValuesChange([], {
      type: 'clear',
      values: displayValues
    });
    onInternalSearch('', false, false);
  };
  if (!disabled && allowClear && (displayValues.length || mergedSearchValue) && !(mode === 'combobox' && mergedSearchValue === '')) {
    clearNode = /*#__PURE__*/external_React_namespaceObject.createElement(es_TransBtn, {
      className: "".concat(prefixCls, "-clear"),
      onMouseDown: onClearMouseDown,
      customizeIcon: clearIcon
    }, "\xD7");
  }

  // =========================== OptionList ===========================
  var optionList = /*#__PURE__*/external_React_namespaceObject.createElement(OptionList, {
    ref: listRef
  });

  // ============================= Select =============================
  var mergedClassName = classnames_default()(prefixCls, className, (_classNames2 = {}, defineProperty_defineProperty(_classNames2, "".concat(prefixCls, "-focused"), mockFocused), defineProperty_defineProperty(_classNames2, "".concat(prefixCls, "-multiple"), multiple), defineProperty_defineProperty(_classNames2, "".concat(prefixCls, "-single"), !multiple), defineProperty_defineProperty(_classNames2, "".concat(prefixCls, "-allow-clear"), allowClear), defineProperty_defineProperty(_classNames2, "".concat(prefixCls, "-show-arrow"), mergedShowArrow), defineProperty_defineProperty(_classNames2, "".concat(prefixCls, "-disabled"), disabled), defineProperty_defineProperty(_classNames2, "".concat(prefixCls, "-loading"), loading), defineProperty_defineProperty(_classNames2, "".concat(prefixCls, "-open"), mergedOpen), defineProperty_defineProperty(_classNames2, "".concat(prefixCls, "-customize-input"), customizeInputElement), defineProperty_defineProperty(_classNames2, "".concat(prefixCls, "-show-search"), mergedShowSearch), _classNames2));

  // >>> Selector
  var selectorNode = /*#__PURE__*/external_React_namespaceObject.createElement(es_SelectTrigger, {
    ref: triggerRef,
    disabled: disabled,
    prefixCls: prefixCls,
    visible: triggerOpen,
    popupElement: optionList,
    containerWidth: containerWidth,
    animation: animation,
    transitionName: transitionName,
    dropdownStyle: dropdownStyle,
    dropdownClassName: dropdownClassName,
    direction: direction,
    dropdownMatchSelectWidth: dropdownMatchSelectWidth,
    dropdownRender: dropdownRender,
    dropdownAlign: dropdownAlign,
    placement: placement,
    builtinPlacements: builtinPlacements,
    getPopupContainer: getPopupContainer,
    empty: emptyOptions,
    getTriggerDOMNode: function getTriggerDOMNode() {
      return selectorDomRef.current;
    },
    onPopupVisibleChange: onTriggerVisibleChange,
    onPopupMouseEnter: onPopupMouseEnter
  }, customizeRawInputElement ? /*#__PURE__*/external_React_namespaceObject.cloneElement(customizeRawInputElement, {
    ref: customizeRawInputRef
  }) : /*#__PURE__*/external_React_namespaceObject.createElement(es_Selector, extends_extends({}, props, {
    domRef: selectorDomRef,
    prefixCls: prefixCls,
    inputElement: customizeInputElement,
    ref: selectorRef,
    id: id,
    showSearch: mergedShowSearch,
    autoClearSearchValue: autoClearSearchValue,
    mode: mode,
    activeDescendantId: activeDescendantId,
    tagRender: tagRender,
    values: displayValues,
    open: mergedOpen,
    onToggleOpen: onToggleOpen,
    activeValue: activeValue,
    searchValue: mergedSearchValue,
    onSearch: onInternalSearch,
    onSearchSubmit: onInternalSearchSubmit,
    onRemove: onSelectorRemove,
    tokenWithEnter: tokenWithEnter
  })));

  // >>> Render
  var renderNode;

  // Render raw
  if (customizeRawInputElement) {
    renderNode = selectorNode;
  } else {
    renderNode = /*#__PURE__*/external_React_namespaceObject.createElement("div", extends_extends({
      className: mergedClassName
    }, domProps, {
      ref: containerRef,
      onMouseDown: onInternalMouseDown,
      onKeyDown: onInternalKeyDown,
      onKeyUp: onInternalKeyUp,
      onFocus: onContainerFocus,
      onBlur: onContainerBlur
    }), mockFocused && !mergedOpen && /*#__PURE__*/external_React_namespaceObject.createElement("span", {
      style: {
        width: 0,
        height: 0,
        position: 'absolute',
        overflow: 'hidden',
        opacity: 0
      },
      "aria-live": "polite"
    }, "".concat(displayValues.map(function (_ref) {
      var label = _ref.label,
        value = _ref.value;
      return ['number', 'string'].includes(typeof_typeof(label)) ? label : value;
    }).join(', '))), selectorNode, arrowNode, clearNode);
  }
  return /*#__PURE__*/external_React_namespaceObject.createElement(BaseSelectContext.Provider, {
    value: baseSelectContext
  }, renderNode);
});

// Set display name for dev
if (false) {}
/* harmony default export */ const es_BaseSelect = (BaseSelect);
;// CONCATENATED MODULE: ./node_modules/rc-select/es/hooks/useCache.js


/**
 * Cache `value` related LabeledValue & options.
 */
/* harmony default export */ const useCache = (function (labeledValues, valueOptions) {
  var cacheRef = external_React_namespaceObject.useRef({
    values: new Map(),
    options: new Map()
  });
  var filledLabeledValues = external_React_namespaceObject.useMemo(function () {
    var _cacheRef$current = cacheRef.current,
      prevValueCache = _cacheRef$current.values,
      prevOptionCache = _cacheRef$current.options;

    // Fill label by cache
    var patchedValues = labeledValues.map(function (item) {
      if (item.label === undefined) {
        var _prevValueCache$get;
        return _objectSpread2(_objectSpread2({}, item), {}, {
          label: (_prevValueCache$get = prevValueCache.get(item.value)) === null || _prevValueCache$get === void 0 ? void 0 : _prevValueCache$get.label
        });
      }
      return item;
    });

    // Refresh cache
    var valueCache = new Map();
    var optionCache = new Map();
    patchedValues.forEach(function (item) {
      valueCache.set(item.value, item);
      optionCache.set(item.value, valueOptions.get(item.value) || prevOptionCache.get(item.value));
    });
    cacheRef.current.values = valueCache;
    cacheRef.current.options = optionCache;
    return patchedValues;
  }, [labeledValues, valueOptions]);
  var getOption = external_React_namespaceObject.useCallback(function (val) {
    return valueOptions.get(val) || cacheRef.current.options.get(val);
  }, [valueOptions]);
  return [filledLabeledValues, getOption];
});
;// CONCATENATED MODULE: ./node_modules/rc-select/es/hooks/useFilterOptions.js





function includes(test, search) {
  return commonUtil_toArray(test).join('').toUpperCase().includes(search);
}
/* harmony default export */ const useFilterOptions = (function (options, fieldNames, searchValue, filterOption, optionFilterProp) {
  return external_React_namespaceObject.useMemo(function () {
    if (!searchValue || filterOption === false) {
      return options;
    }
    var fieldOptions = fieldNames.options,
      fieldLabel = fieldNames.label,
      fieldValue = fieldNames.value;
    var filteredOptions = [];
    var customizeFilter = typeof filterOption === 'function';
    var upperSearch = searchValue.toUpperCase();
    var filterFunc = customizeFilter ? filterOption : function (_, option) {
      // Use provided `optionFilterProp`
      if (optionFilterProp) {
        return includes(option[optionFilterProp], upperSearch);
      }

      // Auto select `label` or `value` by option type
      if (option[fieldOptions]) {
        // hack `fieldLabel` since `OptionGroup` children is not `label`
        return includes(option[fieldLabel !== 'children' ? fieldLabel : 'label'], upperSearch);
      }
      return includes(option[fieldValue], upperSearch);
    };
    var wrapOption = customizeFilter ? function (opt) {
      return injectPropsWithOption(opt);
    } : function (opt) {
      return opt;
    };
    options.forEach(function (item) {
      // Group should check child options
      if (item[fieldOptions]) {
        // Check group first
        var matchGroup = filterFunc(searchValue, wrapOption(item));
        if (matchGroup) {
          filteredOptions.push(item);
        } else {
          // Check option
          var subOptions = item[fieldOptions].filter(function (subItem) {
            return filterFunc(searchValue, wrapOption(subItem));
          });
          if (subOptions.length) {
            filteredOptions.push(_objectSpread2(_objectSpread2({}, item), {}, defineProperty_defineProperty({}, fieldOptions, subOptions)));
          }
        }
        return;
      }
      if (filterFunc(searchValue, wrapOption(item))) {
        filteredOptions.push(item);
      }
    });
    return filteredOptions;
  }, [options, filterOption, optionFilterProp, searchValue, fieldNames]);
});
;// CONCATENATED MODULE: ./node_modules/rc-select/es/hooks/useId.js



var hooks_useId_uuid = 0;

/** Is client side and not jsdom */
var useId_isBrowserClient =  true && canUseDom();

/** Get unique id for accessibility usage */
function getUUID() {
  var retId;

  // Test never reach
  /* istanbul ignore if */
  if (useId_isBrowserClient) {
    retId = hooks_useId_uuid;
    hooks_useId_uuid += 1;
  } else {
    retId = 'TEST_OR_SSR';
  }
  return retId;
}
function useId_useId(id) {
  // Inner id for accessibility usage. Only work in client side
  var _React$useState = external_React_namespaceObject.useState(),
    _React$useState2 = slicedToArray_slicedToArray(_React$useState, 2),
    innerId = _React$useState2[0],
    setInnerId = _React$useState2[1];
  external_React_namespaceObject.useEffect(function () {
    setInnerId("rc_select_".concat(getUUID()));
  }, []);
  return id || innerId;
}
;// CONCATENATED MODULE: ./node_modules/rc-select/es/utils/legacyUtil.js


var legacyUtil_excluded = ["children", "value"],
  legacyUtil_excluded2 = ["children"];


function convertNodeToOption(node) {
  var _ref = node,
    key = _ref.key,
    _ref$props = _ref.props,
    children = _ref$props.children,
    value = _ref$props.value,
    restProps = _objectWithoutProperties(_ref$props, legacyUtil_excluded);
  return _objectSpread2({
    key: key,
    value: value !== undefined ? value : key,
    children: children
  }, restProps);
}
function legacyUtil_convertChildrenToData(nodes) {
  var optionOnly = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  return toArray_toArray(nodes).map(function (node, index) {
    if (! /*#__PURE__*/external_React_namespaceObject.isValidElement(node) || !node.type) {
      return null;
    }
    var _ref2 = node,
      isSelectOptGroup = _ref2.type.isSelectOptGroup,
      key = _ref2.key,
      _ref2$props = _ref2.props,
      children = _ref2$props.children,
      restProps = _objectWithoutProperties(_ref2$props, legacyUtil_excluded2);
    if (optionOnly || !isSelectOptGroup) {
      return convertNodeToOption(node);
    }
    return _objectSpread2(_objectSpread2({
      key: "__RC_SELECT_GRP__".concat(key === null ? index : key, "__"),
      label: key
    }, restProps), {}, {
      options: legacyUtil_convertChildrenToData(children)
    });
  }).filter(function (data) {
    return data;
  });
}
;// CONCATENATED MODULE: ./node_modules/rc-select/es/hooks/useOptions.js



/**
 * Parse `children` to `options` if `options` is not provided.
 * Then flatten the `options`.
 */
function useOptions(options, children, fieldNames, optionFilterProp, optionLabelProp) {
  return external_React_namespaceObject.useMemo(function () {
    var mergedOptions = options;
    var childrenAsData = !options;
    if (childrenAsData) {
      mergedOptions = legacyUtil_convertChildrenToData(children);
    }
    var valueOptions = new Map();
    var labelOptions = new Map();
    var setLabelOptions = function setLabelOptions(labelOptionsMap, option, key) {
      if (key && typeof key === 'string') {
        labelOptionsMap.set(option[key], option);
      }
    };
    function dig(optionList) {
      var isChildren = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      // for loop to speed up collection speed
      for (var i = 0; i < optionList.length; i += 1) {
        var option = optionList[i];
        if (!option[fieldNames.options] || isChildren) {
          valueOptions.set(option[fieldNames.value], option);
          setLabelOptions(labelOptions, option, fieldNames.label);
          // https://github.com/ant-design/ant-design/issues/35304
          setLabelOptions(labelOptions, option, optionFilterProp);
          setLabelOptions(labelOptions, option, optionLabelProp);
        } else {
          dig(option[fieldNames.options], true);
        }
      }
    }
    dig(mergedOptions);
    return {
      options: mergedOptions,
      valueOptions: valueOptions,
      labelOptions: labelOptions
    };
  }, [options, children, fieldNames, optionFilterProp, optionLabelProp]);
}
;// CONCATENATED MODULE: ./node_modules/rc-select/es/hooks/useRefFunc.js


/**
 * Same as `React.useCallback` but always return a memoized function
 * but redirect to real function.
 */
function useRefFunc(callback) {
  var funcRef = external_React_namespaceObject.useRef();
  funcRef.current = callback;
  var cacheFn = external_React_namespaceObject.useCallback(function () {
    return funcRef.current.apply(funcRef, arguments);
  }, []);
  return cacheFn;
}
;// CONCATENATED MODULE: ./node_modules/rc-select/es/OptGroup.js
/* istanbul ignore file */

/** This is a placeholder, not real render in dom */
var OptGroup = function OptGroup() {
  return null;
};
OptGroup.isSelectOptGroup = true;
/* harmony default export */ const es_OptGroup = (OptGroup);
;// CONCATENATED MODULE: ./node_modules/rc-select/es/Option.js
/* istanbul ignore file */

/** This is a placeholder, not real render in dom */
var Option = function Option() {
  return null;
};
Option.isSelectOption = true;
/* harmony default export */ const es_Option = (Option);
;// CONCATENATED MODULE: ./node_modules/rc-util/es/omit.js

function omit(obj, fields) {
  var clone = _objectSpread2({}, obj);
  if (Array.isArray(fields)) {
    fields.forEach(function (key) {
      delete clone[key];
    });
  }
  return clone;
}
;// CONCATENATED MODULE: ./node_modules/rc-virtual-list/es/Filler.js






/**
 * Fill component to provided the scroll content real height.
 */
var Filler = /*#__PURE__*/external_React_namespaceObject.forwardRef(function (_ref, ref) {
  var height = _ref.height,
    offset = _ref.offset,
    children = _ref.children,
    prefixCls = _ref.prefixCls,
    onInnerResize = _ref.onInnerResize,
    innerProps = _ref.innerProps;
  var outerStyle = {};
  var innerStyle = {
    display: 'flex',
    flexDirection: 'column'
  };
  if (offset !== undefined) {
    outerStyle = {
      height: height,
      position: 'relative',
      overflow: 'hidden'
    };
    innerStyle = _objectSpread2(_objectSpread2({}, innerStyle), {}, {
      transform: "translateY(".concat(offset, "px)"),
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0
    });
  }
  return /*#__PURE__*/external_React_namespaceObject.createElement("div", {
    style: outerStyle
  }, /*#__PURE__*/external_React_namespaceObject.createElement(es, {
    onResize: function onResize(_ref2) {
      var offsetHeight = _ref2.offsetHeight;
      if (offsetHeight && onInnerResize) {
        onInnerResize();
      }
    }
  }, /*#__PURE__*/external_React_namespaceObject.createElement("div", extends_extends({
    style: innerStyle,
    className: classnames_default()(defineProperty_defineProperty({}, "".concat(prefixCls, "-holder-inner"), prefixCls)),
    ref: ref
  }, innerProps), children)));
});
Filler.displayName = 'Filler';
/* harmony default export */ const es_Filler = (Filler);
;// CONCATENATED MODULE: ./node_modules/rc-virtual-list/es/ScrollBar.js








var MIN_SIZE = 20;
function getPageY(e) {
  return 'touches' in e ? e.touches[0].pageY : e.pageY;
}
var ScrollBar = /*#__PURE__*/function (_React$Component) {
  _inherits(ScrollBar, _React$Component);
  var _super = _createSuper(ScrollBar);
  function ScrollBar() {
    var _this;
    _classCallCheck(this, ScrollBar);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    _this.moveRaf = null;
    _this.scrollbarRef = /*#__PURE__*/external_React_namespaceObject.createRef();
    _this.thumbRef = /*#__PURE__*/external_React_namespaceObject.createRef();
    _this.visibleTimeout = null;
    _this.state = {
      dragging: false,
      pageY: null,
      startTop: null,
      visible: false
    };
    _this.delayHidden = function () {
      clearTimeout(_this.visibleTimeout);
      _this.setState({
        visible: true
      });
      _this.visibleTimeout = setTimeout(function () {
        _this.setState({
          visible: false
        });
      }, 2000);
    };
    _this.onScrollbarTouchStart = function (e) {
      e.preventDefault();
    };
    _this.onContainerMouseDown = function (e) {
      e.stopPropagation();
      e.preventDefault();
    };
    _this.patchEvents = function () {
      window.addEventListener('mousemove', _this.onMouseMove);
      window.addEventListener('mouseup', _this.onMouseUp);
      _this.thumbRef.current.addEventListener('touchmove', _this.onMouseMove);
      _this.thumbRef.current.addEventListener('touchend', _this.onMouseUp);
    };
    _this.removeEvents = function () {
      var _this$scrollbarRef$cu;
      window.removeEventListener('mousemove', _this.onMouseMove);
      window.removeEventListener('mouseup', _this.onMouseUp);
      (_this$scrollbarRef$cu = _this.scrollbarRef.current) === null || _this$scrollbarRef$cu === void 0 ? void 0 : _this$scrollbarRef$cu.removeEventListener('touchstart', _this.onScrollbarTouchStart);
      if (_this.thumbRef.current) {
        _this.thumbRef.current.removeEventListener('touchstart', _this.onMouseDown);
        _this.thumbRef.current.removeEventListener('touchmove', _this.onMouseMove);
        _this.thumbRef.current.removeEventListener('touchend', _this.onMouseUp);
      }
      es_raf.cancel(_this.moveRaf);
    };
    _this.onMouseDown = function (e) {
      var onStartMove = _this.props.onStartMove;
      _this.setState({
        dragging: true,
        pageY: getPageY(e),
        startTop: _this.getTop()
      });
      onStartMove();
      _this.patchEvents();
      e.stopPropagation();
      e.preventDefault();
    };
    _this.onMouseMove = function (e) {
      var _this$state = _this.state,
        dragging = _this$state.dragging,
        pageY = _this$state.pageY,
        startTop = _this$state.startTop;
      var onScroll = _this.props.onScroll;
      es_raf.cancel(_this.moveRaf);
      if (dragging) {
        var offsetY = getPageY(e) - pageY;
        var newTop = startTop + offsetY;
        var enableScrollRange = _this.getEnableScrollRange();
        var enableHeightRange = _this.getEnableHeightRange();
        var ptg = enableHeightRange ? newTop / enableHeightRange : 0;
        var newScrollTop = Math.ceil(ptg * enableScrollRange);
        _this.moveRaf = es_raf(function () {
          onScroll(newScrollTop);
        });
      }
    };
    _this.onMouseUp = function () {
      var onStopMove = _this.props.onStopMove;
      _this.setState({
        dragging: false
      });
      onStopMove();
      _this.removeEvents();
    };
    _this.getSpinHeight = function () {
      var _this$props = _this.props,
        height = _this$props.height,
        count = _this$props.count;
      var baseHeight = height / count * 10;
      baseHeight = Math.max(baseHeight, MIN_SIZE);
      baseHeight = Math.min(baseHeight, height / 2);
      return Math.floor(baseHeight);
    };
    _this.getEnableScrollRange = function () {
      var _this$props2 = _this.props,
        scrollHeight = _this$props2.scrollHeight,
        height = _this$props2.height;
      return scrollHeight - height || 0;
    };
    _this.getEnableHeightRange = function () {
      var height = _this.props.height;
      var spinHeight = _this.getSpinHeight();
      return height - spinHeight || 0;
    };
    _this.getTop = function () {
      var scrollTop = _this.props.scrollTop;
      var enableScrollRange = _this.getEnableScrollRange();
      var enableHeightRange = _this.getEnableHeightRange();
      if (scrollTop === 0 || enableScrollRange === 0) {
        return 0;
      }
      var ptg = scrollTop / enableScrollRange;
      return ptg * enableHeightRange;
    };
    _this.showScroll = function () {
      var _this$props3 = _this.props,
        height = _this$props3.height,
        scrollHeight = _this$props3.scrollHeight;
      return scrollHeight > height;
    };
    return _this;
  }
  _createClass(ScrollBar, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.scrollbarRef.current.addEventListener('touchstart', this.onScrollbarTouchStart);
      this.thumbRef.current.addEventListener('touchstart', this.onMouseDown);
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (prevProps.scrollTop !== this.props.scrollTop) {
        this.delayHidden();
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.removeEvents();
      clearTimeout(this.visibleTimeout);
    }
  }, {
    key: "render",
    value:
    // ====================== Render =======================
    function render() {
      var _this$state2 = this.state,
        dragging = _this$state2.dragging,
        visible = _this$state2.visible;
      var prefixCls = this.props.prefixCls;
      var spinHeight = this.getSpinHeight();
      var top = this.getTop();
      var canScroll = this.showScroll();
      var mergedVisible = canScroll && visible;
      return /*#__PURE__*/external_React_namespaceObject.createElement("div", {
        ref: this.scrollbarRef,
        className: classnames_default()("".concat(prefixCls, "-scrollbar"), defineProperty_defineProperty({}, "".concat(prefixCls, "-scrollbar-show"), canScroll)),
        style: {
          width: 8,
          top: 0,
          bottom: 0,
          right: 0,
          position: 'absolute',
          display: mergedVisible ? null : 'none'
        },
        onMouseDown: this.onContainerMouseDown,
        onMouseMove: this.delayHidden
      }, /*#__PURE__*/external_React_namespaceObject.createElement("div", {
        ref: this.thumbRef,
        className: classnames_default()("".concat(prefixCls, "-scrollbar-thumb"), defineProperty_defineProperty({}, "".concat(prefixCls, "-scrollbar-thumb-moving"), dragging)),
        style: {
          width: '100%',
          height: spinHeight,
          top: top,
          left: 0,
          position: 'absolute',
          background: 'rgba(0, 0, 0, 0.5)',
          borderRadius: 99,
          cursor: 'pointer',
          userSelect: 'none'
        },
        onMouseDown: this.onMouseDown
      }));
    }
  }]);
  return ScrollBar;
}(external_React_namespaceObject.Component);

;// CONCATENATED MODULE: ./node_modules/rc-virtual-list/es/Item.js

function Item_Item(_ref) {
  var children = _ref.children,
    setRef = _ref.setRef;
  var refFunc = external_React_namespaceObject.useCallback(function (node) {
    setRef(node);
  }, []);
  return /*#__PURE__*/external_React_namespaceObject.cloneElement(children, {
    ref: refFunc
  });
}
;// CONCATENATED MODULE: ./node_modules/rc-virtual-list/es/hooks/useChildren.js


function useChildren(list, startIndex, endIndex, setNodeRef, renderFunc, _ref) {
  var getKey = _ref.getKey;
  return list.slice(startIndex, endIndex + 1).map(function (item, index) {
    var eleIndex = startIndex + index;
    var node = renderFunc(item, eleIndex, {
      // style: status === 'MEASURE_START' ? { visibility: 'hidden' } : {},
    });
    var key = getKey(item);
    return /*#__PURE__*/external_React_namespaceObject.createElement(Item_Item, {
      key: key,
      setRef: function setRef(ele) {
        return setNodeRef(item, ele);
      }
    }, node);
  });
}
;// CONCATENATED MODULE: ./node_modules/rc-virtual-list/es/utils/CacheMap.js


// Firefox has low performance of map.
var CacheMap = /*#__PURE__*/function () {
  function CacheMap() {
    _classCallCheck(this, CacheMap);
    this.maps = void 0;
    this.maps = Object.create(null);
  }
  _createClass(CacheMap, [{
    key: "set",
    value: function set(key, value) {
      this.maps[key] = value;
    }
  }, {
    key: "get",
    value: function get(key) {
      return this.maps[key];
    }
  }]);
  return CacheMap;
}();
/* harmony default export */ const utils_CacheMap = (CacheMap);
;// CONCATENATED MODULE: ./node_modules/rc-virtual-list/es/hooks/useHeights.js






function useHeights(getKey, onItemAdd, onItemRemove) {
  var _React$useState = external_React_namespaceObject.useState(0),
    _React$useState2 = slicedToArray_slicedToArray(_React$useState, 2),
    updatedMark = _React$useState2[0],
    setUpdatedMark = _React$useState2[1];
  var instanceRef = (0,external_React_namespaceObject.useRef)(new Map());
  var heightsRef = (0,external_React_namespaceObject.useRef)(new utils_CacheMap());
  var collectRafRef = (0,external_React_namespaceObject.useRef)();
  function cancelRaf() {
    es_raf.cancel(collectRafRef.current);
  }
  function collectHeight() {
    cancelRaf();
    collectRafRef.current = es_raf(function () {
      instanceRef.current.forEach(function (element, key) {
        if (element && element.offsetParent) {
          var htmlElement = findDOMNode(element);
          var offsetHeight = htmlElement.offsetHeight;
          if (heightsRef.current.get(key) !== offsetHeight) {
            heightsRef.current.set(key, htmlElement.offsetHeight);
          }
        }
      });
      // Always trigger update mark to tell parent that should re-calculate heights when resized
      setUpdatedMark(function (c) {
        return c + 1;
      });
    });
  }
  function setInstanceRef(item, instance) {
    var key = getKey(item);
    var origin = instanceRef.current.get(key);
    if (instance) {
      instanceRef.current.set(key, instance);
      collectHeight();
    } else {
      instanceRef.current.delete(key);
    }
    // Instance changed
    if (!origin !== !instance) {
      if (instance) {
        onItemAdd === null || onItemAdd === void 0 ? void 0 : onItemAdd(item);
      } else {
        onItemRemove === null || onItemRemove === void 0 ? void 0 : onItemRemove(item);
      }
    }
  }
  (0,external_React_namespaceObject.useEffect)(function () {
    return cancelRaf;
  }, []);
  return [setInstanceRef, collectHeight, heightsRef.current, updatedMark];
}
;// CONCATENATED MODULE: ./node_modules/rc-virtual-list/es/hooks/useScrollTo.js

/* eslint-disable no-param-reassign */


function useScrollTo(containerRef, data, heights, itemHeight, getKey, collectHeight, syncScrollTop, triggerFlash) {
  var scrollRef = external_React_namespaceObject.useRef();
  return function (arg) {
    // When not argument provided, we think dev may want to show the scrollbar
    if (arg === null || arg === undefined) {
      triggerFlash();
      return;
    }
    // Normal scroll logic
    es_raf.cancel(scrollRef.current);
    if (typeof arg === 'number') {
      syncScrollTop(arg);
    } else if (arg && typeof_typeof(arg) === 'object') {
      var index;
      var align = arg.align;
      if ('index' in arg) {
        index = arg.index;
      } else {
        index = data.findIndex(function (item) {
          return getKey(item) === arg.key;
        });
      }
      var _arg$offset = arg.offset,
        offset = _arg$offset === void 0 ? 0 : _arg$offset;
      // We will retry 3 times in case dynamic height shaking
      var syncScroll = function syncScroll(times, targetAlign) {
        if (times < 0 || !containerRef.current) return;
        var height = containerRef.current.clientHeight;
        var needCollectHeight = false;
        var newTargetAlign = targetAlign;
        // Go to next frame if height not exist
        if (height) {
          var mergedAlign = targetAlign || align;
          // Get top & bottom
          var stackTop = 0;
          var itemTop = 0;
          var itemBottom = 0;
          var maxLen = Math.min(data.length, index);
          for (var i = 0; i <= maxLen; i += 1) {
            var key = getKey(data[i]);
            itemTop = stackTop;
            var cacheHeight = heights.get(key);
            itemBottom = itemTop + (cacheHeight === undefined ? itemHeight : cacheHeight);
            stackTop = itemBottom;
            if (i === index && cacheHeight === undefined) {
              needCollectHeight = true;
            }
          }
          // Scroll to
          var targetTop = null;
          switch (mergedAlign) {
            case 'top':
              targetTop = itemTop - offset;
              break;
            case 'bottom':
              targetTop = itemBottom - height + offset;
              break;
            default:
              {
                var scrollTop = containerRef.current.scrollTop;
                var scrollBottom = scrollTop + height;
                if (itemTop < scrollTop) {
                  newTargetAlign = 'top';
                } else if (itemBottom > scrollBottom) {
                  newTargetAlign = 'bottom';
                }
              }
          }
          if (targetTop !== null && targetTop !== containerRef.current.scrollTop) {
            syncScrollTop(targetTop);
          }
        }
        // We will retry since element may not sync height as it described
        scrollRef.current = es_raf(function () {
          if (needCollectHeight) {
            collectHeight();
          }
          syncScroll(times - 1, newTargetAlign);
        }, 2); // Delay 2 to wait for List collect heights
      };

      syncScroll(3);
    }
  };
}
;// CONCATENATED MODULE: ./node_modules/rc-virtual-list/es/utils/algorithmUtil.js
/**
 * Get index with specific start index one by one. e.g.
 * min: 3, max: 9, start: 6
 *
 * Return index is:
 * [0]: 6
 * [1]: 7
 * [2]: 5
 * [3]: 8
 * [4]: 4
 * [5]: 9
 * [6]: 3
 */
function getIndexByStartLoc(min, max, start, index) {
  var beforeCount = start - min;
  var afterCount = max - start;
  var balanceCount = Math.min(beforeCount, afterCount) * 2;
  // Balance
  if (index <= balanceCount) {
    var stepIndex = Math.floor(index / 2);
    if (index % 2) {
      return start + stepIndex + 1;
    }
    return start - stepIndex;
  }
  // One is out of range
  if (beforeCount > afterCount) {
    return start - (index - afterCount);
  }
  return start + (index - beforeCount);
}
/**
 * We assume that 2 list has only 1 item diff and others keeping the order.
 * So we can use dichotomy algorithm to find changed one.
 */
function findListDiffIndex(originList, targetList, getKey) {
  var originLen = originList.length;
  var targetLen = targetList.length;
  var shortList;
  var longList;
  if (originLen === 0 && targetLen === 0) {
    return null;
  }
  if (originLen < targetLen) {
    shortList = originList;
    longList = targetList;
  } else {
    shortList = targetList;
    longList = originList;
  }
  var notExistKey = {
    __EMPTY_ITEM__: true
  };
  function getItemKey(item) {
    if (item !== undefined) {
      return getKey(item);
    }
    return notExistKey;
  }
  // Loop to find diff one
  var diffIndex = null;
  var multiple = Math.abs(originLen - targetLen) !== 1;
  for (var i = 0; i < longList.length; i += 1) {
    var shortKey = getItemKey(shortList[i]);
    var longKey = getItemKey(longList[i]);
    if (shortKey !== longKey) {
      diffIndex = i;
      multiple = multiple || shortKey !== getItemKey(longList[i + 1]);
      break;
    }
  }
  return diffIndex === null ? null : {
    index: diffIndex,
    multiple: multiple
  };
}
;// CONCATENATED MODULE: ./node_modules/rc-virtual-list/es/hooks/useDiffItem.js



function useDiffItem(data, getKey, onDiff) {
  var _React$useState = external_React_namespaceObject.useState(data),
    _React$useState2 = slicedToArray_slicedToArray(_React$useState, 2),
    prevData = _React$useState2[0],
    setPrevData = _React$useState2[1];
  var _React$useState3 = external_React_namespaceObject.useState(null),
    _React$useState4 = slicedToArray_slicedToArray(_React$useState3, 2),
    diffItem = _React$useState4[0],
    setDiffItem = _React$useState4[1];
  external_React_namespaceObject.useEffect(function () {
    var diff = findListDiffIndex(prevData || [], data || [], getKey);
    if ((diff === null || diff === void 0 ? void 0 : diff.index) !== undefined) {
      onDiff === null || onDiff === void 0 ? void 0 : onDiff(diff.index);
      setDiffItem(data[diff.index]);
    }
    setPrevData(data);
  }, [data]);
  return [diffItem];
}
;// CONCATENATED MODULE: ./node_modules/rc-virtual-list/es/utils/isFirefox.js

var isFF = (typeof navigator === "undefined" ? "undefined" : typeof_typeof(navigator)) === 'object' && /Firefox/i.test(navigator.userAgent);
/* harmony default export */ const isFirefox = (isFF);
;// CONCATENATED MODULE: ./node_modules/rc-virtual-list/es/hooks/useOriginScroll.js

/* harmony default export */ const useOriginScroll = (function (isScrollAtTop, isScrollAtBottom) {
  // Do lock for a wheel when scrolling
  var lockRef = (0,external_React_namespaceObject.useRef)(false);
  var lockTimeoutRef = (0,external_React_namespaceObject.useRef)(null);
  function lockScroll() {
    clearTimeout(lockTimeoutRef.current);
    lockRef.current = true;
    lockTimeoutRef.current = setTimeout(function () {
      lockRef.current = false;
    }, 50);
  }
  // Pass to ref since global add is in closure
  var scrollPingRef = (0,external_React_namespaceObject.useRef)({
    top: isScrollAtTop,
    bottom: isScrollAtBottom
  });
  scrollPingRef.current.top = isScrollAtTop;
  scrollPingRef.current.bottom = isScrollAtBottom;
  return function (deltaY) {
    var smoothOffset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    var originScroll =
    // Pass origin wheel when on the top
    deltaY < 0 && scrollPingRef.current.top ||
    // Pass origin wheel when on the bottom
    deltaY > 0 && scrollPingRef.current.bottom;
    if (smoothOffset && originScroll) {
      // No need lock anymore when it's smooth offset from touchMove interval
      clearTimeout(lockTimeoutRef.current);
      lockRef.current = false;
    } else if (!originScroll || lockRef.current) {
      lockScroll();
    }
    return !lockRef.current && originScroll;
  };
});
;// CONCATENATED MODULE: ./node_modules/rc-virtual-list/es/hooks/useFrameWheel.js




function useFrameWheel(inVirtual, isScrollAtTop, isScrollAtBottom, onWheelDelta) {
  var offsetRef = (0,external_React_namespaceObject.useRef)(0);
  var nextFrameRef = (0,external_React_namespaceObject.useRef)(null);
  // Firefox patch
  var wheelValueRef = (0,external_React_namespaceObject.useRef)(null);
  var isMouseScrollRef = (0,external_React_namespaceObject.useRef)(false);
  // Scroll status sync
  var originScroll = useOriginScroll(isScrollAtTop, isScrollAtBottom);
  function onWheel(event) {
    if (!inVirtual) return;
    es_raf.cancel(nextFrameRef.current);
    var deltaY = event.deltaY;
    offsetRef.current += deltaY;
    wheelValueRef.current = deltaY;
    // Do nothing when scroll at the edge, Skip check when is in scroll
    if (originScroll(deltaY)) return;
    // Proxy of scroll events
    if (!isFirefox) {
      event.preventDefault();
    }
    nextFrameRef.current = es_raf(function () {
      // Patch a multiple for Firefox to fix wheel number too small
      // ref: https://github.com/ant-design/ant-design/issues/26372#issuecomment-679460266
      var patchMultiple = isMouseScrollRef.current ? 10 : 1;
      onWheelDelta(offsetRef.current * patchMultiple);
      offsetRef.current = 0;
    });
  }
  // A patch for firefox
  function onFireFoxScroll(event) {
    if (!inVirtual) return;
    isMouseScrollRef.current = event.detail === wheelValueRef.current;
  }
  return [onWheel, onFireFoxScroll];
}
;// CONCATENATED MODULE: ./node_modules/rc-virtual-list/es/hooks/useMobileTouchMove.js


var SMOOTH_PTG = 14 / 15;
function useMobileTouchMove(inVirtual, listRef, callback) {
  var touchedRef = (0,external_React_namespaceObject.useRef)(false);
  var touchYRef = (0,external_React_namespaceObject.useRef)(0);
  var elementRef = (0,external_React_namespaceObject.useRef)(null);
  // Smooth scroll
  var intervalRef = (0,external_React_namespaceObject.useRef)(null);
  /* eslint-disable prefer-const */
  var cleanUpEvents;
  var onTouchMove = function onTouchMove(e) {
    if (touchedRef.current) {
      var currentY = Math.ceil(e.touches[0].pageY);
      var offsetY = touchYRef.current - currentY;
      touchYRef.current = currentY;
      if (callback(offsetY)) {
        e.preventDefault();
      }
      // Smooth interval
      clearInterval(intervalRef.current);
      intervalRef.current = setInterval(function () {
        offsetY *= SMOOTH_PTG;
        if (!callback(offsetY, true) || Math.abs(offsetY) <= 0.1) {
          clearInterval(intervalRef.current);
        }
      }, 16);
    }
  };
  var onTouchEnd = function onTouchEnd() {
    touchedRef.current = false;
    cleanUpEvents();
  };
  var onTouchStart = function onTouchStart(e) {
    cleanUpEvents();
    if (e.touches.length === 1 && !touchedRef.current) {
      touchedRef.current = true;
      touchYRef.current = Math.ceil(e.touches[0].pageY);
      elementRef.current = e.target;
      elementRef.current.addEventListener('touchmove', onTouchMove);
      elementRef.current.addEventListener('touchend', onTouchEnd);
    }
  };
  cleanUpEvents = function cleanUpEvents() {
    if (elementRef.current) {
      elementRef.current.removeEventListener('touchmove', onTouchMove);
      elementRef.current.removeEventListener('touchend', onTouchEnd);
    }
  };
  hooks_useLayoutEffect(function () {
    if (inVirtual) {
      listRef.current.addEventListener('touchstart', onTouchStart);
    }
    return function () {
      var _listRef$current;
      (_listRef$current = listRef.current) === null || _listRef$current === void 0 ? void 0 : _listRef$current.removeEventListener('touchstart', onTouchStart);
      cleanUpEvents();
      clearInterval(intervalRef.current);
    };
  }, [inVirtual]);
}
;// CONCATENATED MODULE: ./node_modules/rc-virtual-list/es/List.js





var List_excluded = ["prefixCls", "className", "height", "itemHeight", "fullHeight", "style", "data", "children", "itemKey", "virtual", "component", "onScroll", "onVisibleChange", "innerProps"];













var EMPTY_DATA = [];
var ScrollStyle = {
  overflowY: 'auto',
  overflowAnchor: 'none'
};
function RawList(props, ref) {
  var _props$prefixCls = props.prefixCls,
    prefixCls = _props$prefixCls === void 0 ? 'rc-virtual-list' : _props$prefixCls,
    className = props.className,
    height = props.height,
    itemHeight = props.itemHeight,
    _props$fullHeight = props.fullHeight,
    fullHeight = _props$fullHeight === void 0 ? true : _props$fullHeight,
    style = props.style,
    data = props.data,
    children = props.children,
    itemKey = props.itemKey,
    virtual = props.virtual,
    _props$component = props.component,
    Component = _props$component === void 0 ? 'div' : _props$component,
    onScroll = props.onScroll,
    onVisibleChange = props.onVisibleChange,
    innerProps = props.innerProps,
    restProps = _objectWithoutProperties(props, List_excluded);
  // ================================= MISC =================================
  var useVirtual = !!(virtual !== false && height && itemHeight);
  var inVirtual = useVirtual && data && itemHeight * data.length > height;
  var _useState = (0,external_React_namespaceObject.useState)(0),
    _useState2 = slicedToArray_slicedToArray(_useState, 2),
    scrollTop = _useState2[0],
    setScrollTop = _useState2[1];
  var _useState3 = (0,external_React_namespaceObject.useState)(false),
    _useState4 = slicedToArray_slicedToArray(_useState3, 2),
    scrollMoving = _useState4[0],
    setScrollMoving = _useState4[1];
  var mergedClassName = classnames_default()(prefixCls, className);
  var mergedData = data || EMPTY_DATA;
  var componentRef = (0,external_React_namespaceObject.useRef)();
  var fillerInnerRef = (0,external_React_namespaceObject.useRef)();
  var scrollBarRef = (0,external_React_namespaceObject.useRef)(); // Hack on scrollbar to enable flash call
  // =============================== Item Key ===============================
  var getKey = external_React_namespaceObject.useCallback(function (item) {
    if (typeof itemKey === 'function') {
      return itemKey(item);
    }
    return item === null || item === void 0 ? void 0 : item[itemKey];
  }, [itemKey]);
  var sharedConfig = {
    getKey: getKey
  };
  // ================================ Scroll ================================
  function syncScrollTop(newTop) {
    setScrollTop(function (origin) {
      var value;
      if (typeof newTop === 'function') {
        value = newTop(origin);
      } else {
        value = newTop;
      }
      var alignedTop = keepInRange(value);
      componentRef.current.scrollTop = alignedTop;
      return alignedTop;
    });
  }
  // ================================ Legacy ================================
  // Put ref here since the range is generate by follow
  var rangeRef = (0,external_React_namespaceObject.useRef)({
    start: 0,
    end: mergedData.length
  });
  var diffItemRef = (0,external_React_namespaceObject.useRef)();
  var _useDiffItem = useDiffItem(mergedData, getKey),
    _useDiffItem2 = slicedToArray_slicedToArray(_useDiffItem, 1),
    diffItem = _useDiffItem2[0];
  diffItemRef.current = diffItem;
  // ================================ Height ================================
  var _useHeights = useHeights(getKey, null, null),
    _useHeights2 = slicedToArray_slicedToArray(_useHeights, 4),
    setInstanceRef = _useHeights2[0],
    collectHeight = _useHeights2[1],
    heights = _useHeights2[2],
    heightUpdatedMark = _useHeights2[3];
  // ========================== Visible Calculation =========================
  var _React$useMemo = external_React_namespaceObject.useMemo(function () {
      if (!useVirtual) {
        return {
          scrollHeight: undefined,
          start: 0,
          end: mergedData.length - 1,
          offset: undefined
        };
      }
      // Always use virtual scroll bar in avoid shaking
      if (!inVirtual) {
        var _fillerInnerRef$curre;
        return {
          scrollHeight: ((_fillerInnerRef$curre = fillerInnerRef.current) === null || _fillerInnerRef$curre === void 0 ? void 0 : _fillerInnerRef$curre.offsetHeight) || 0,
          start: 0,
          end: mergedData.length - 1,
          offset: undefined
        };
      }
      var itemTop = 0;
      var startIndex;
      var startOffset;
      var endIndex;
      var dataLen = mergedData.length;
      for (var i = 0; i < dataLen; i += 1) {
        var item = mergedData[i];
        var key = getKey(item);
        var cacheHeight = heights.get(key);
        var currentItemBottom = itemTop + (cacheHeight === undefined ? itemHeight : cacheHeight);
        // Check item top in the range
        if (currentItemBottom >= scrollTop && startIndex === undefined) {
          startIndex = i;
          startOffset = itemTop;
        }
        // Check item bottom in the range. We will render additional one item for motion usage
        if (currentItemBottom > scrollTop + height && endIndex === undefined) {
          endIndex = i;
        }
        itemTop = currentItemBottom;
      }
      // When scrollTop at the end but data cut to small count will reach this
      if (startIndex === undefined) {
        startIndex = 0;
        startOffset = 0;
        endIndex = Math.ceil(height / itemHeight);
      }
      if (endIndex === undefined) {
        endIndex = mergedData.length - 1;
      }
      // Give cache to improve scroll experience
      endIndex = Math.min(endIndex + 1, mergedData.length);
      return {
        scrollHeight: itemTop,
        start: startIndex,
        end: endIndex,
        offset: startOffset
      };
    }, [inVirtual, useVirtual, scrollTop, mergedData, heightUpdatedMark, height]),
    scrollHeight = _React$useMemo.scrollHeight,
    start = _React$useMemo.start,
    end = _React$useMemo.end,
    offset = _React$useMemo.offset;
  rangeRef.current.start = start;
  rangeRef.current.end = end;
  // =============================== In Range ===============================
  var maxScrollHeight = scrollHeight - height;
  var maxScrollHeightRef = (0,external_React_namespaceObject.useRef)(maxScrollHeight);
  maxScrollHeightRef.current = maxScrollHeight;
  function keepInRange(newScrollTop) {
    var newTop = newScrollTop;
    if (!Number.isNaN(maxScrollHeightRef.current)) {
      newTop = Math.min(newTop, maxScrollHeightRef.current);
    }
    newTop = Math.max(newTop, 0);
    return newTop;
  }
  var isScrollAtTop = scrollTop <= 0;
  var isScrollAtBottom = scrollTop >= maxScrollHeight;
  var originScroll = useOriginScroll(isScrollAtTop, isScrollAtBottom);
  // ================================ Scroll ================================
  function onScrollBar(newScrollTop) {
    var newTop = newScrollTop;
    syncScrollTop(newTop);
  }
  // When data size reduce. It may trigger native scroll event back to fit scroll position
  function onFallbackScroll(e) {
    var newScrollTop = e.currentTarget.scrollTop;
    if (newScrollTop !== scrollTop) {
      syncScrollTop(newScrollTop);
    }
    // Trigger origin onScroll
    onScroll === null || onScroll === void 0 ? void 0 : onScroll(e);
  }
  // Since this added in global,should use ref to keep update
  var _useFrameWheel = useFrameWheel(useVirtual, isScrollAtTop, isScrollAtBottom, function (offsetY) {
      syncScrollTop(function (top) {
        var newTop = top + offsetY;
        return newTop;
      });
    }),
    _useFrameWheel2 = slicedToArray_slicedToArray(_useFrameWheel, 2),
    onRawWheel = _useFrameWheel2[0],
    onFireFoxScroll = _useFrameWheel2[1];
  // Mobile touch move
  useMobileTouchMove(useVirtual, componentRef, function (deltaY, smoothOffset) {
    if (originScroll(deltaY, smoothOffset)) {
      return false;
    }
    onRawWheel({
      preventDefault: function preventDefault() {},
      deltaY: deltaY
    });
    return true;
  });
  hooks_useLayoutEffect(function () {
    // Firefox only
    function onMozMousePixelScroll(e) {
      if (useVirtual) {
        e.preventDefault();
      }
    }
    componentRef.current.addEventListener('wheel', onRawWheel);
    componentRef.current.addEventListener('DOMMouseScroll', onFireFoxScroll);
    componentRef.current.addEventListener('MozMousePixelScroll', onMozMousePixelScroll);
    return function () {
      if (componentRef.current) {
        componentRef.current.removeEventListener('wheel', onRawWheel);
        componentRef.current.removeEventListener('DOMMouseScroll', onFireFoxScroll);
        componentRef.current.removeEventListener('MozMousePixelScroll', onMozMousePixelScroll);
      }
    };
  }, [useVirtual]);
  // ================================= Ref ==================================
  var scrollTo = useScrollTo(componentRef, mergedData, heights, itemHeight, getKey, collectHeight, syncScrollTop, function () {
    var _scrollBarRef$current;
    (_scrollBarRef$current = scrollBarRef.current) === null || _scrollBarRef$current === void 0 ? void 0 : _scrollBarRef$current.delayHidden();
  });
  external_React_namespaceObject.useImperativeHandle(ref, function () {
    return {
      scrollTo: scrollTo
    };
  });
  // ================================ Effect ================================
  /** We need told outside that some list not rendered */
  hooks_useLayoutEffect(function () {
    if (onVisibleChange) {
      var renderList = mergedData.slice(start, end + 1);
      onVisibleChange(renderList, mergedData);
    }
  }, [start, end, mergedData]);
  // ================================ Render ================================
  var listChildren = useChildren(mergedData, start, end, setInstanceRef, children, sharedConfig);
  var componentStyle = null;
  if (height) {
    componentStyle = _objectSpread2(defineProperty_defineProperty({}, fullHeight ? 'height' : 'maxHeight', height), ScrollStyle);
    if (useVirtual) {
      componentStyle.overflowY = 'hidden';
      if (scrollMoving) {
        componentStyle.pointerEvents = 'none';
      }
    }
  }
  return /*#__PURE__*/external_React_namespaceObject.createElement("div", extends_extends({
    style: _objectSpread2(_objectSpread2({}, style), {}, {
      position: 'relative'
    }),
    className: mergedClassName
  }, restProps), /*#__PURE__*/external_React_namespaceObject.createElement(Component, {
    className: "".concat(prefixCls, "-holder"),
    style: componentStyle,
    ref: componentRef,
    onScroll: onFallbackScroll
  }, /*#__PURE__*/external_React_namespaceObject.createElement(es_Filler, {
    prefixCls: prefixCls,
    height: scrollHeight,
    offset: offset,
    onInnerResize: collectHeight,
    ref: fillerInnerRef,
    innerProps: innerProps
  }, listChildren)), useVirtual && /*#__PURE__*/external_React_namespaceObject.createElement(ScrollBar, {
    ref: scrollBarRef,
    prefixCls: prefixCls,
    scrollTop: scrollTop,
    height: height,
    scrollHeight: scrollHeight,
    count: mergedData.length,
    onScroll: onScrollBar,
    onStartMove: function onStartMove() {
      setScrollMoving(true);
    },
    onStopMove: function onStopMove() {
      setScrollMoving(false);
    }
  }));
}
var List = /*#__PURE__*/external_React_namespaceObject.forwardRef(RawList);
List.displayName = 'List';
/* harmony default export */ const es_List = (List);
;// CONCATENATED MODULE: ./node_modules/rc-virtual-list/es/index.js

/* harmony default export */ const rc_virtual_list_es = (es_List);
;// CONCATENATED MODULE: ./node_modules/rc-select/es/SelectContext.js

var SelectContext = /*#__PURE__*/external_React_namespaceObject.createContext(null);
/* harmony default export */ const es_SelectContext = (SelectContext);
;// CONCATENATED MODULE: ./node_modules/rc-select/es/utils/platformUtil.js
/* istanbul ignore file */
function isPlatformMac() {
  return /(mac\sos|macintosh)/i.test(navigator.appVersion);
}
;// CONCATENATED MODULE: ./node_modules/rc-select/es/OptionList.js





var OptionList_excluded = ["disabled", "title", "children", "style", "className"];













// export interface OptionListProps<OptionsType extends object[]> {

function OptionList_isTitleType(content) {
  return typeof content === 'string' || typeof content === 'number';
}

/**
 * Using virtual list of option display.
 * Will fallback to dom if use customize render.
 */
var OptionList = function OptionList(_, ref) {
  var _useBaseProps = useBaseProps(),
    prefixCls = _useBaseProps.prefixCls,
    id = _useBaseProps.id,
    open = _useBaseProps.open,
    multiple = _useBaseProps.multiple,
    mode = _useBaseProps.mode,
    searchValue = _useBaseProps.searchValue,
    toggleOpen = _useBaseProps.toggleOpen,
    notFoundContent = _useBaseProps.notFoundContent,
    onPopupScroll = _useBaseProps.onPopupScroll;
  var _React$useContext = external_React_namespaceObject.useContext(es_SelectContext),
    flattenOptions = _React$useContext.flattenOptions,
    onActiveValue = _React$useContext.onActiveValue,
    defaultActiveFirstOption = _React$useContext.defaultActiveFirstOption,
    onSelect = _React$useContext.onSelect,
    menuItemSelectedIcon = _React$useContext.menuItemSelectedIcon,
    rawValues = _React$useContext.rawValues,
    fieldNames = _React$useContext.fieldNames,
    virtual = _React$useContext.virtual,
    listHeight = _React$useContext.listHeight,
    listItemHeight = _React$useContext.listItemHeight;
  var itemPrefixCls = "".concat(prefixCls, "-item");
  var memoFlattenOptions = useMemo(function () {
    return flattenOptions;
  }, [open, flattenOptions], function (prev, next) {
    return next[0] && prev[1] !== next[1];
  });

  // =========================== List ===========================
  var listRef = external_React_namespaceObject.useRef(null);
  var onListMouseDown = function onListMouseDown(event) {
    event.preventDefault();
  };
  var scrollIntoView = function scrollIntoView(args) {
    if (listRef.current) {
      listRef.current.scrollTo(typeof args === 'number' ? {
        index: args
      } : args);
    }
  };

  // ========================== Active ==========================
  var getEnabledActiveIndex = function getEnabledActiveIndex(index) {
    var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
    var len = memoFlattenOptions.length;
    for (var i = 0; i < len; i += 1) {
      var current = (index + i * offset + len) % len;
      var _memoFlattenOptions$c = memoFlattenOptions[current],
        group = _memoFlattenOptions$c.group,
        data = _memoFlattenOptions$c.data;
      if (!group && !data.disabled) {
        return current;
      }
    }
    return -1;
  };
  var _React$useState = external_React_namespaceObject.useState(function () {
      return getEnabledActiveIndex(0);
    }),
    _React$useState2 = slicedToArray_slicedToArray(_React$useState, 2),
    activeIndex = _React$useState2[0],
    setActiveIndex = _React$useState2[1];
  var setActive = function setActive(index) {
    var fromKeyboard = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    setActiveIndex(index);
    var info = {
      source: fromKeyboard ? 'keyboard' : 'mouse'
    };

    // Trigger active event
    var flattenItem = memoFlattenOptions[index];
    if (!flattenItem) {
      onActiveValue(null, -1, info);
      return;
    }
    onActiveValue(flattenItem.value, index, info);
  };

  // Auto active first item when list length or searchValue changed
  (0,external_React_namespaceObject.useEffect)(function () {
    setActive(defaultActiveFirstOption !== false ? getEnabledActiveIndex(0) : -1);
  }, [memoFlattenOptions.length, searchValue]);

  // https://github.com/ant-design/ant-design/issues/34975
  var isSelected = external_React_namespaceObject.useCallback(function (value) {
    return rawValues.has(value) && mode !== 'combobox';
  }, [mode, _toConsumableArray(rawValues).toString(), rawValues.size]);

  // Auto scroll to item position in single mode
  (0,external_React_namespaceObject.useEffect)(function () {
    /**
     * React will skip `onChange` when component update.
     * `setActive` function will call root accessibility state update which makes re-render.
     * So we need to delay to let Input component trigger onChange first.
     */
    var timeoutId = setTimeout(function () {
      if (!multiple && open && rawValues.size === 1) {
        var value = Array.from(rawValues)[0];
        var index = memoFlattenOptions.findIndex(function (_ref) {
          var data = _ref.data;
          return data.value === value;
        });
        if (index !== -1) {
          setActive(index);
          scrollIntoView(index);
        }
      }
    });

    // Force trigger scrollbar visible when open
    if (open) {
      var _listRef$current;
      (_listRef$current = listRef.current) === null || _listRef$current === void 0 ? void 0 : _listRef$current.scrollTo(undefined);
    }
    return function () {
      return clearTimeout(timeoutId);
    };
  }, [open, searchValue, flattenOptions.length]);

  // ========================== Values ==========================
  var onSelectValue = function onSelectValue(value) {
    if (value !== undefined) {
      onSelect(value, {
        selected: !rawValues.has(value)
      });
    }

    // Single mode should always close by select
    if (!multiple) {
      toggleOpen(false);
    }
  };

  // ========================= Keyboard =========================
  external_React_namespaceObject.useImperativeHandle(ref, function () {
    return {
      onKeyDown: function onKeyDown(event) {
        var which = event.which,
          ctrlKey = event.ctrlKey;
        switch (which) {
          // >>> Arrow keys & ctrl + n/p on Mac
          case es_KeyCode.N:
          case es_KeyCode.P:
          case es_KeyCode.UP:
          case es_KeyCode.DOWN:
            {
              var offset = 0;
              if (which === es_KeyCode.UP) {
                offset = -1;
              } else if (which === es_KeyCode.DOWN) {
                offset = 1;
              } else if (isPlatformMac() && ctrlKey) {
                if (which === es_KeyCode.N) {
                  offset = 1;
                } else if (which === es_KeyCode.P) {
                  offset = -1;
                }
              }
              if (offset !== 0) {
                var nextActiveIndex = getEnabledActiveIndex(activeIndex + offset, offset);
                scrollIntoView(nextActiveIndex);
                setActive(nextActiveIndex, true);
              }
              break;
            }

          // >>> Select
          case es_KeyCode.ENTER:
            {
              // value
              var item = memoFlattenOptions[activeIndex];
              if (item && !item.data.disabled) {
                onSelectValue(item.value);
              } else {
                onSelectValue(undefined);
              }
              if (open) {
                event.preventDefault();
              }
              break;
            }

          // >>> Close
          case es_KeyCode.ESC:
            {
              toggleOpen(false);
              if (open) {
                event.stopPropagation();
              }
            }
        }
      },
      onKeyUp: function onKeyUp() {},
      scrollTo: function scrollTo(index) {
        scrollIntoView(index);
      }
    };
  });

  // ========================== Render ==========================
  if (memoFlattenOptions.length === 0) {
    return /*#__PURE__*/external_React_namespaceObject.createElement("div", {
      role: "listbox",
      id: "".concat(id, "_list"),
      className: "".concat(itemPrefixCls, "-empty"),
      onMouseDown: onListMouseDown
    }, notFoundContent);
  }
  var omitFieldNameList = Object.keys(fieldNames).map(function (key) {
    return fieldNames[key];
  });
  var getLabel = function getLabel(item) {
    return item.label;
  };
  function getItemAriaProps(item, index) {
    var group = item.group;
    return {
      role: group ? 'presentation' : 'option',
      id: "".concat(id, "_list_").concat(index)
    };
  }
  var renderItem = function renderItem(index) {
    var item = memoFlattenOptions[index];
    if (!item) return null;
    var itemData = item.data || {};
    var value = itemData.value;
    var group = item.group;
    var attrs = pickAttrs(itemData, true);
    var mergedLabel = getLabel(item);
    return item ? /*#__PURE__*/external_React_namespaceObject.createElement("div", extends_extends({
      "aria-label": typeof mergedLabel === 'string' && !group ? mergedLabel : null
    }, attrs, {
      key: index
    }, getItemAriaProps(item, index), {
      "aria-selected": isSelected(value)
    }), value) : null;
  };
  var a11yProps = {
    role: 'listbox',
    id: "".concat(id, "_list")
  };
  return /*#__PURE__*/external_React_namespaceObject.createElement(external_React_namespaceObject.Fragment, null, virtual && /*#__PURE__*/external_React_namespaceObject.createElement("div", extends_extends({}, a11yProps, {
    style: {
      height: 0,
      width: 0,
      overflow: 'hidden'
    }
  }), renderItem(activeIndex - 1), renderItem(activeIndex), renderItem(activeIndex + 1)), /*#__PURE__*/external_React_namespaceObject.createElement(rc_virtual_list_es, {
    itemKey: "key",
    ref: listRef,
    data: memoFlattenOptions,
    height: listHeight,
    itemHeight: listItemHeight,
    fullHeight: false,
    onMouseDown: onListMouseDown,
    onScroll: onPopupScroll,
    virtual: virtual,
    innerProps: virtual ? null : a11yProps
  }, function (item, itemIndex) {
    var _classNames;
    var group = item.group,
      groupOption = item.groupOption,
      data = item.data,
      label = item.label,
      value = item.value;
    var key = data.key;

    // Group
    if (group) {
      var _data$title;
      var groupTitle = (_data$title = data.title) !== null && _data$title !== void 0 ? _data$title : OptionList_isTitleType(label) ? label.toString() : undefined;
      return /*#__PURE__*/external_React_namespaceObject.createElement("div", {
        className: classnames_default()(itemPrefixCls, "".concat(itemPrefixCls, "-group")),
        title: groupTitle
      }, label !== undefined ? label : key);
    }
    var disabled = data.disabled,
      title = data.title,
      children = data.children,
      style = data.style,
      className = data.className,
      otherProps = _objectWithoutProperties(data, OptionList_excluded);
    var passedProps = omit(otherProps, omitFieldNameList);

    // Option
    var selected = isSelected(value);
    var optionPrefixCls = "".concat(itemPrefixCls, "-option");
    var optionClassName = classnames_default()(itemPrefixCls, optionPrefixCls, className, (_classNames = {}, defineProperty_defineProperty(_classNames, "".concat(optionPrefixCls, "-grouped"), groupOption), defineProperty_defineProperty(_classNames, "".concat(optionPrefixCls, "-active"), activeIndex === itemIndex && !disabled), defineProperty_defineProperty(_classNames, "".concat(optionPrefixCls, "-disabled"), disabled), defineProperty_defineProperty(_classNames, "".concat(optionPrefixCls, "-selected"), selected), _classNames));
    var mergedLabel = getLabel(item);
    var iconVisible = !menuItemSelectedIcon || typeof menuItemSelectedIcon === 'function' || selected;

    // https://github.com/ant-design/ant-design/issues/34145
    var content = typeof mergedLabel === 'number' ? mergedLabel : mergedLabel || value;
    // https://github.com/ant-design/ant-design/issues/26717
    var optionTitle = OptionList_isTitleType(content) ? content.toString() : undefined;
    if (title !== undefined) {
      optionTitle = title;
    }
    return /*#__PURE__*/external_React_namespaceObject.createElement("div", extends_extends({}, pickAttrs(passedProps), !virtual ? getItemAriaProps(item, itemIndex) : {}, {
      "aria-selected": selected,
      className: optionClassName,
      title: optionTitle,
      onMouseMove: function onMouseMove() {
        if (activeIndex === itemIndex || disabled) {
          return;
        }
        setActive(itemIndex);
      },
      onClick: function onClick() {
        if (!disabled) {
          onSelectValue(value);
        }
      },
      style: style
    }), /*#__PURE__*/external_React_namespaceObject.createElement("div", {
      className: "".concat(optionPrefixCls, "-content")
    }, content), /*#__PURE__*/external_React_namespaceObject.isValidElement(menuItemSelectedIcon) || selected, iconVisible && /*#__PURE__*/external_React_namespaceObject.createElement(es_TransBtn, {
      className: "".concat(itemPrefixCls, "-option-state"),
      customizeIcon: menuItemSelectedIcon,
      customizeIconProps: {
        isSelected: selected
      }
    }, selected ? '✓' : null));
  }));
};
var RefOptionList = /*#__PURE__*/external_React_namespaceObject.forwardRef(OptionList);
RefOptionList.displayName = 'OptionList';
/* harmony default export */ const es_OptionList = (RefOptionList);
;// CONCATENATED MODULE: ./node_modules/rc-select/es/utils/warningPropsUtil.js







function warningProps(props) {
  var mode = props.mode,
    options = props.options,
    children = props.children,
    backfill = props.backfill,
    allowClear = props.allowClear,
    placeholder = props.placeholder,
    getInputElement = props.getInputElement,
    showSearch = props.showSearch,
    onSearch = props.onSearch,
    defaultOpen = props.defaultOpen,
    autoFocus = props.autoFocus,
    labelInValue = props.labelInValue,
    value = props.value,
    inputValue = props.inputValue,
    optionLabelProp = props.optionLabelProp;
  var multiple = isMultiple(mode);
  var mergedShowSearch = showSearch !== undefined ? showSearch : multiple || mode === 'combobox';
  var mergedOptions = options || convertChildrenToData(children);

  // `tags` should not set option as disabled
  warning(mode !== 'tags' || mergedOptions.every(function (opt) {
    return !opt.disabled;
  }), 'Please avoid setting option to disabled in tags mode since user can always type text as tag.');

  // `combobox` & `tags` should option be `string` type
  if (mode === 'tags' || mode === 'combobox') {
    var hasNumberValue = mergedOptions.some(function (item) {
      if (item.options) {
        return item.options.some(function (opt) {
          return typeof ('value' in opt ? opt.value : opt.key) === 'number';
        });
      }
      return typeof ('value' in item ? item.value : item.key) === 'number';
    });
    warning(!hasNumberValue, '`value` of Option should not use number type when `mode` is `tags` or `combobox`.');
  }

  // `combobox` should not use `optionLabelProp`
  warning(mode !== 'combobox' || !optionLabelProp, '`combobox` mode not support `optionLabelProp`. Please set `value` on Option directly.');

  // Only `combobox` support `backfill`
  warning(mode === 'combobox' || !backfill, '`backfill` only works with `combobox` mode.');

  // Only `combobox` support `getInputElement`
  warning(mode === 'combobox' || !getInputElement, '`getInputElement` only work with `combobox` mode.');

  // Customize `getInputElement` should not use `allowClear` & `placeholder`
  noteOnce(mode !== 'combobox' || !getInputElement || !allowClear || !placeholder, 'Customize `getInputElement` should customize clear and placeholder logic instead of configuring `allowClear` and `placeholder`.');

  // `onSearch` should use in `combobox` or `showSearch`
  if (onSearch && !mergedShowSearch && mode !== 'combobox' && mode !== 'tags') {
    warning(false, '`onSearch` should work with `showSearch` instead of use alone.');
  }
  noteOnce(!defaultOpen || autoFocus, '`defaultOpen` makes Select open without focus which means it will not close by click outside. You can set `autoFocus` if needed.');
  if (value !== undefined && value !== null) {
    var values = toArray(value);
    warning(!labelInValue || values.every(function (val) {
      return _typeof(val) === 'object' && ('key' in val || 'value' in val);
    }), '`value` should in shape of `{ value: string | number, label?: ReactNode }` when you set `labelInValue` to `true`');
    warning(!multiple || Array.isArray(value), '`value` should be array when `mode` is `multiple` or `tags`');
  }

  // Syntactic sugar should use correct children type
  if (children) {
    var invalidateChildType = null;
    toNodeArray(children).some(function (node) {
      if (! /*#__PURE__*/React.isValidElement(node) || !node.type) {
        return false;
      }
      var _ref = node,
        type = _ref.type;
      if (type.isSelectOption) {
        return false;
      }
      if (type.isSelectOptGroup) {
        var allChildrenValid = toNodeArray(node.props.children).every(function (subNode) {
          if (! /*#__PURE__*/React.isValidElement(subNode) || !node.type || subNode.type.isSelectOption) {
            return true;
          }
          invalidateChildType = subNode.type;
          return false;
        });
        if (allChildrenValid) {
          return false;
        }
        return true;
      }
      invalidateChildType = type;
      return true;
    });
    if (invalidateChildType) {
      warning(false, "`children` should be `Select.Option` or `Select.OptGroup` instead of `".concat(invalidateChildType.displayName || invalidateChildType.name || invalidateChildType, "`."));
    }
    warning(inputValue === undefined, '`inputValue` is deprecated, please use `searchValue` instead.');
  }
}

// value in Select option should not be null
// note: OptGroup has options too
function warningNullOptions(options, fieldNames) {
  if (options) {
    var recursiveOptions = function recursiveOptions(optionsList) {
      var inGroup = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      for (var i = 0; i < optionsList.length; i++) {
        var option = optionsList[i];
        if (option[fieldNames === null || fieldNames === void 0 ? void 0 : fieldNames.value] === null) {
          warning(false, '`value` in Select options should not be `null`.');
          return true;
        }
        if (!inGroup && Array.isArray(option[fieldNames === null || fieldNames === void 0 ? void 0 : fieldNames.options]) && recursiveOptions(option[fieldNames === null || fieldNames === void 0 ? void 0 : fieldNames.options], true)) {
          break;
        }
      }
    };
    recursiveOptions(options);
  }
}
/* harmony default export */ const warningPropsUtil = ((/* unused pure expression or super */ null && (warningProps)));
;// CONCATENATED MODULE: ./node_modules/rc-select/es/Select.js







var Select_excluded = ["id", "mode", "prefixCls", "backfill", "fieldNames", "inputValue", "searchValue", "onSearch", "autoClearSearchValue", "onSelect", "onDeselect", "dropdownMatchSelectWidth", "filterOption", "filterSort", "optionFilterProp", "optionLabelProp", "options", "children", "defaultActiveFirstOption", "menuItemSelectedIcon", "virtual", "listHeight", "listItemHeight", "value", "defaultValue", "labelInValue", "onChange"];
/**
 * To match accessibility requirement, we always provide an input in the component.
 * Other element will not set `tabIndex` to avoid `onBlur` sequence problem.
 * For focused select, we set `aria-live="polite"` to update the accessibility content.
 *
 * ref:
 * - keyboard: https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/listbox_role#Keyboard_interactions
 *
 * New api:
 * - listHeight
 * - listItemHeight
 * - component
 *
 * Remove deprecated api:
 * - multiple
 * - tags
 * - combobox
 * - firstActiveValue
 * - dropdownMenuStyle
 * - openClassName (Not list in api)
 *
 * Update:
 * - `backfill` only support `combobox` mode
 * - `combobox` mode not support `labelInValue` since it's meaningless
 * - `getInputElement` only support `combobox` mode
 * - `onChange` return OptionData instead of ReactNode
 * - `filterOption` `onChange` `onSelect` accept OptionData instead of ReactNode
 * - `combobox` mode trigger `onChange` will get `undefined` if no `value` match in Option
 * - `combobox` mode not support `optionLabelProp`
 */

















var OMIT_DOM_PROPS = ['inputValue'];
function isRawValue(value) {
  return !value || typeof_typeof(value) !== 'object';
}
var Select = /*#__PURE__*/external_React_namespaceObject.forwardRef(function (props, ref) {
  var id = props.id,
    mode = props.mode,
    _props$prefixCls = props.prefixCls,
    prefixCls = _props$prefixCls === void 0 ? 'rc-select' : _props$prefixCls,
    backfill = props.backfill,
    fieldNames = props.fieldNames,
    inputValue = props.inputValue,
    searchValue = props.searchValue,
    onSearch = props.onSearch,
    _props$autoClearSearc = props.autoClearSearchValue,
    autoClearSearchValue = _props$autoClearSearc === void 0 ? true : _props$autoClearSearc,
    onSelect = props.onSelect,
    onDeselect = props.onDeselect,
    _props$dropdownMatchS = props.dropdownMatchSelectWidth,
    dropdownMatchSelectWidth = _props$dropdownMatchS === void 0 ? true : _props$dropdownMatchS,
    filterOption = props.filterOption,
    filterSort = props.filterSort,
    optionFilterProp = props.optionFilterProp,
    optionLabelProp = props.optionLabelProp,
    options = props.options,
    children = props.children,
    defaultActiveFirstOption = props.defaultActiveFirstOption,
    menuItemSelectedIcon = props.menuItemSelectedIcon,
    virtual = props.virtual,
    _props$listHeight = props.listHeight,
    listHeight = _props$listHeight === void 0 ? 200 : _props$listHeight,
    _props$listItemHeight = props.listItemHeight,
    listItemHeight = _props$listItemHeight === void 0 ? 20 : _props$listItemHeight,
    value = props.value,
    defaultValue = props.defaultValue,
    labelInValue = props.labelInValue,
    onChange = props.onChange,
    restProps = _objectWithoutProperties(props, Select_excluded);
  var mergedId = useId_useId(id);
  var multiple = BaseSelect_isMultiple(mode);
  var childrenAsData = !!(!options && children);
  var mergedFilterOption = external_React_namespaceObject.useMemo(function () {
    if (filterOption === undefined && mode === 'combobox') {
      return false;
    }
    return filterOption;
  }, [filterOption, mode]);

  // ========================= FieldNames =========================
  var mergedFieldNames = external_React_namespaceObject.useMemo(function () {
    return fillFieldNames(fieldNames, childrenAsData);
  }, /* eslint-disable react-hooks/exhaustive-deps */
  [
  // We stringify fieldNames to avoid unnecessary re-renders.
  JSON.stringify(fieldNames), childrenAsData]
  /* eslint-enable react-hooks/exhaustive-deps */);

  // =========================== Search ===========================
  var _useMergedState = useMergedState('', {
      value: searchValue !== undefined ? searchValue : inputValue,
      postState: function postState(search) {
        return search || '';
      }
    }),
    _useMergedState2 = slicedToArray_slicedToArray(_useMergedState, 2),
    mergedSearchValue = _useMergedState2[0],
    setSearchValue = _useMergedState2[1];

  // =========================== Option ===========================
  var parsedOptions = useOptions(options, children, mergedFieldNames, optionFilterProp, optionLabelProp);
  var valueOptions = parsedOptions.valueOptions,
    labelOptions = parsedOptions.labelOptions,
    mergedOptions = parsedOptions.options;

  // ========================= Wrap Value =========================
  var convert2LabelValues = external_React_namespaceObject.useCallback(function (draftValues) {
    // Convert to array
    var valueList = commonUtil_toArray(draftValues);

    // Convert to labelInValue type
    return valueList.map(function (val) {
      var rawValue;
      var rawLabel;
      var rawKey;
      var rawDisabled;
      var rawTitle;

      // Fill label & value
      if (isRawValue(val)) {
        rawValue = val;
      } else {
        var _val$value;
        rawKey = val.key;
        rawLabel = val.label;
        rawValue = (_val$value = val.value) !== null && _val$value !== void 0 ? _val$value : rawKey;
      }
      var option = valueOptions.get(rawValue);
      if (option) {
        var _option$key;
        // Fill missing props
        if (rawLabel === undefined) rawLabel = option === null || option === void 0 ? void 0 : option[optionLabelProp || mergedFieldNames.label];
        if (rawKey === undefined) rawKey = (_option$key = option === null || option === void 0 ? void 0 : option.key) !== null && _option$key !== void 0 ? _option$key : rawValue;
        rawDisabled = option === null || option === void 0 ? void 0 : option.disabled;
        rawTitle = option === null || option === void 0 ? void 0 : option.title;

        // Warning if label not same as provided
        if (false) { var optionLabel; }
      }
      return {
        label: rawLabel,
        value: rawValue,
        key: rawKey,
        disabled: rawDisabled,
        title: rawTitle
      };
    });
  }, [mergedFieldNames, optionLabelProp, valueOptions]);

  // =========================== Values ===========================
  var _useMergedState3 = useMergedState(defaultValue, {
      value: value
    }),
    _useMergedState4 = slicedToArray_slicedToArray(_useMergedState3, 2),
    internalValue = _useMergedState4[0],
    setInternalValue = _useMergedState4[1];

  // Merged value with LabelValueType
  var rawLabeledValues = external_React_namespaceObject.useMemo(function () {
    var _values$;
    var values = convert2LabelValues(internalValue);

    // combobox no need save value when it's no value
    if (mode === 'combobox' && !((_values$ = values[0]) !== null && _values$ !== void 0 && _values$.value)) {
      return [];
    }
    return values;
  }, [internalValue, convert2LabelValues, mode]);

  // Fill label with cache to avoid option remove
  var _useCache = useCache(rawLabeledValues, valueOptions),
    _useCache2 = slicedToArray_slicedToArray(_useCache, 2),
    mergedValues = _useCache2[0],
    getMixedOption = _useCache2[1];
  var displayValues = external_React_namespaceObject.useMemo(function () {
    // `null` need show as placeholder instead
    // https://github.com/ant-design/ant-design/issues/25057
    if (!mode && mergedValues.length === 1) {
      var firstValue = mergedValues[0];
      if (firstValue.value === null && (firstValue.label === null || firstValue.label === undefined)) {
        return [];
      }
    }
    return mergedValues.map(function (item) {
      var _item$label;
      return _objectSpread2(_objectSpread2({}, item), {}, {
        label: (_item$label = item.label) !== null && _item$label !== void 0 ? _item$label : item.value
      });
    });
  }, [mode, mergedValues]);

  /** Convert `displayValues` to raw value type set */
  var rawValues = external_React_namespaceObject.useMemo(function () {
    return new Set(mergedValues.map(function (val) {
      return val.value;
    }));
  }, [mergedValues]);
  external_React_namespaceObject.useEffect(function () {
    if (mode === 'combobox') {
      var _mergedValues$;
      var strValue = (_mergedValues$ = mergedValues[0]) === null || _mergedValues$ === void 0 ? void 0 : _mergedValues$.value;
      setSearchValue(commonUtil_hasValue(strValue) ? String(strValue) : '');
    }
  }, [mergedValues]);

  // ======================= Display Option =======================
  // Create a placeholder item if not exist in `options`
  var createTagOption = useRefFunc(function (val, label) {
    var _ref;
    var mergedLabel = label !== null && label !== void 0 ? label : val;
    return _ref = {}, defineProperty_defineProperty(_ref, mergedFieldNames.value, val), defineProperty_defineProperty(_ref, mergedFieldNames.label, mergedLabel), _ref;
  });

  // Fill tag as option if mode is `tags`
  var filledTagOptions = external_React_namespaceObject.useMemo(function () {
    if (mode !== 'tags') {
      return mergedOptions;
    }

    // >>> Tag mode
    var cloneOptions = _toConsumableArray(mergedOptions);

    // Check if value exist in options (include new patch item)
    var existOptions = function existOptions(val) {
      return valueOptions.has(val);
    };

    // Fill current value as option
    _toConsumableArray(mergedValues).sort(function (a, b) {
      return a.value < b.value ? -1 : 1;
    }).forEach(function (item) {
      var val = item.value;
      if (!existOptions(val)) {
        cloneOptions.push(createTagOption(val, item.label));
      }
    });
    return cloneOptions;
  }, [createTagOption, mergedOptions, valueOptions, mergedValues, mode]);
  var filteredOptions = useFilterOptions(filledTagOptions, mergedFieldNames, mergedSearchValue, mergedFilterOption, optionFilterProp);

  // Fill options with search value if needed
  var filledSearchOptions = external_React_namespaceObject.useMemo(function () {
    if (mode !== 'tags' || !mergedSearchValue || filteredOptions.some(function (item) {
      return item[optionFilterProp || 'value'] === mergedSearchValue;
    })) {
      return filteredOptions;
    }

    // Fill search value as option
    return [createTagOption(mergedSearchValue)].concat(_toConsumableArray(filteredOptions));
  }, [createTagOption, optionFilterProp, mode, filteredOptions, mergedSearchValue]);
  var orderedFilteredOptions = external_React_namespaceObject.useMemo(function () {
    if (!filterSort) {
      return filledSearchOptions;
    }
    return _toConsumableArray(filledSearchOptions).sort(function (a, b) {
      return filterSort(a, b);
    });
  }, [filledSearchOptions, filterSort]);
  var displayOptions = external_React_namespaceObject.useMemo(function () {
    return flattenOptions(orderedFilteredOptions, {
      fieldNames: mergedFieldNames,
      childrenAsData: childrenAsData
    });
  }, [orderedFilteredOptions, mergedFieldNames, childrenAsData]);

  // =========================== Change ===========================
  var triggerChange = function triggerChange(values) {
    var labeledValues = convert2LabelValues(values);
    setInternalValue(labeledValues);
    if (onChange && (
    // Trigger event only when value changed
    labeledValues.length !== mergedValues.length || labeledValues.some(function (newVal, index) {
      var _mergedValues$index;
      return ((_mergedValues$index = mergedValues[index]) === null || _mergedValues$index === void 0 ? void 0 : _mergedValues$index.value) !== (newVal === null || newVal === void 0 ? void 0 : newVal.value);
    }))) {
      var returnValues = labelInValue ? labeledValues : labeledValues.map(function (v) {
        return v.value;
      });
      var returnOptions = labeledValues.map(function (v) {
        return injectPropsWithOption(getMixedOption(v.value));
      });
      onChange(
      // Value
      multiple ? returnValues : returnValues[0],
      // Option
      multiple ? returnOptions : returnOptions[0]);
    }
  };

  // ======================= Accessibility ========================
  var _React$useState = external_React_namespaceObject.useState(null),
    _React$useState2 = slicedToArray_slicedToArray(_React$useState, 2),
    activeValue = _React$useState2[0],
    setActiveValue = _React$useState2[1];
  var _React$useState3 = external_React_namespaceObject.useState(0),
    _React$useState4 = slicedToArray_slicedToArray(_React$useState3, 2),
    accessibilityIndex = _React$useState4[0],
    setAccessibilityIndex = _React$useState4[1];
  var mergedDefaultActiveFirstOption = defaultActiveFirstOption !== undefined ? defaultActiveFirstOption : mode !== 'combobox';
  var onActiveValue = external_React_namespaceObject.useCallback(function (active, index) {
    var _ref2 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
      _ref2$source = _ref2.source,
      source = _ref2$source === void 0 ? 'keyboard' : _ref2$source;
    setAccessibilityIndex(index);
    if (backfill && mode === 'combobox' && active !== null && source === 'keyboard') {
      setActiveValue(String(active));
    }
  }, [backfill, mode]);

  // ========================= OptionList =========================
  var triggerSelect = function triggerSelect(val, selected, type) {
    var getSelectEnt = function getSelectEnt() {
      var _option$key2;
      var option = getMixedOption(val);
      return [labelInValue ? {
        label: option === null || option === void 0 ? void 0 : option[mergedFieldNames.label],
        value: val,
        key: (_option$key2 = option === null || option === void 0 ? void 0 : option.key) !== null && _option$key2 !== void 0 ? _option$key2 : val
      } : val, injectPropsWithOption(option)];
    };
    if (selected && onSelect) {
      var _getSelectEnt = getSelectEnt(),
        _getSelectEnt2 = slicedToArray_slicedToArray(_getSelectEnt, 2),
        wrappedValue = _getSelectEnt2[0],
        _option = _getSelectEnt2[1];
      onSelect(wrappedValue, _option);
    } else if (!selected && onDeselect && type !== 'clear') {
      var _getSelectEnt3 = getSelectEnt(),
        _getSelectEnt4 = slicedToArray_slicedToArray(_getSelectEnt3, 2),
        _wrappedValue = _getSelectEnt4[0],
        _option2 = _getSelectEnt4[1];
      onDeselect(_wrappedValue, _option2);
    }
  };

  // Used for OptionList selection
  var onInternalSelect = useRefFunc(function (val, info) {
    var cloneValues;

    // Single mode always trigger select only with option list
    var mergedSelect = multiple ? info.selected : true;
    if (mergedSelect) {
      cloneValues = multiple ? [].concat(_toConsumableArray(mergedValues), [val]) : [val];
    } else {
      cloneValues = mergedValues.filter(function (v) {
        return v.value !== val;
      });
    }
    triggerChange(cloneValues);
    triggerSelect(val, mergedSelect);

    // Clean search value if single or configured
    if (mode === 'combobox') {
      // setSearchValue(String(val));
      setActiveValue('');
    } else if (!BaseSelect_isMultiple || autoClearSearchValue) {
      setSearchValue('');
      setActiveValue('');
    }
  });

  // ======================= Display Change =======================
  // BaseSelect display values change
  var onDisplayValuesChange = function onDisplayValuesChange(nextValues, info) {
    triggerChange(nextValues);
    var type = info.type,
      values = info.values;
    if (type === 'remove' || type === 'clear') {
      values.forEach(function (item) {
        triggerSelect(item.value, false, type);
      });
    }
  };

  // =========================== Search ===========================
  var onInternalSearch = function onInternalSearch(searchText, info) {
    setSearchValue(searchText);
    setActiveValue(null);

    // [Submit] Tag mode should flush input
    if (info.source === 'submit') {
      var formatted = (searchText || '').trim();
      // prevent empty tags from appearing when you click the Enter button
      if (formatted) {
        var newRawValues = Array.from(new Set([].concat(_toConsumableArray(rawValues), [formatted])));
        triggerChange(newRawValues);
        triggerSelect(formatted, true);
        setSearchValue('');
      }
      return;
    }
    if (info.source !== 'blur') {
      if (mode === 'combobox') {
        triggerChange(searchText);
      }
      onSearch === null || onSearch === void 0 ? void 0 : onSearch(searchText);
    }
  };
  var onInternalSearchSplit = function onInternalSearchSplit(words) {
    var patchValues = words;
    if (mode !== 'tags') {
      patchValues = words.map(function (word) {
        var opt = labelOptions.get(word);
        return opt === null || opt === void 0 ? void 0 : opt.value;
      }).filter(function (val) {
        return val !== undefined;
      });
    }
    var newRawValues = Array.from(new Set([].concat(_toConsumableArray(rawValues), _toConsumableArray(patchValues))));
    triggerChange(newRawValues);
    newRawValues.forEach(function (newRawValue) {
      triggerSelect(newRawValue, true);
    });
  };

  // ========================== Context ===========================
  var selectContext = external_React_namespaceObject.useMemo(function () {
    var realVirtual = virtual !== false && dropdownMatchSelectWidth !== false;
    return _objectSpread2(_objectSpread2({}, parsedOptions), {}, {
      flattenOptions: displayOptions,
      onActiveValue: onActiveValue,
      defaultActiveFirstOption: mergedDefaultActiveFirstOption,
      onSelect: onInternalSelect,
      menuItemSelectedIcon: menuItemSelectedIcon,
      rawValues: rawValues,
      fieldNames: mergedFieldNames,
      virtual: realVirtual,
      listHeight: listHeight,
      listItemHeight: listItemHeight,
      childrenAsData: childrenAsData
    });
  }, [parsedOptions, displayOptions, onActiveValue, mergedDefaultActiveFirstOption, onInternalSelect, menuItemSelectedIcon, rawValues, mergedFieldNames, virtual, dropdownMatchSelectWidth, listHeight, listItemHeight, childrenAsData]);

  // ========================== Warning ===========================
  if (false) {}

  // ==============================================================
  // ==                          Render                          ==
  // ==============================================================
  return /*#__PURE__*/external_React_namespaceObject.createElement(es_SelectContext.Provider, {
    value: selectContext
  }, /*#__PURE__*/external_React_namespaceObject.createElement(es_BaseSelect, extends_extends({}, restProps, {
    // >>> MISC
    id: mergedId,
    prefixCls: prefixCls,
    ref: ref,
    omitDomProps: OMIT_DOM_PROPS,
    mode: mode
    // >>> Values
    ,
    displayValues: displayValues,
    onDisplayValuesChange: onDisplayValuesChange
    // >>> Search
    ,
    searchValue: mergedSearchValue,
    onSearch: onInternalSearch,
    autoClearSearchValue: autoClearSearchValue,
    onSearchSplit: onInternalSearchSplit,
    dropdownMatchSelectWidth: dropdownMatchSelectWidth
    // >>> OptionList
    ,
    OptionList: es_OptionList,
    emptyOptions: !displayOptions.length
    // >>> Accessibility
    ,
    activeValue: activeValue,
    activeDescendantId: "".concat(mergedId, "_list_").concat(accessibilityIndex)
  })));
});
if (false) {}
var TypedSelect = Select;
TypedSelect.Option = es_Option;
TypedSelect.OptGroup = es_OptGroup;
/* harmony default export */ const es_Select = (TypedSelect);
;// CONCATENATED MODULE: ./node_modules/rc-select/es/index.js






/* harmony default export */ const rc_select_es = (es_Select);
;// CONCATENATED MODULE: ./src/blocks/components/select/index.js

function select_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function select_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? select_ownKeys(Object(source), !0).forEach(function (key) { defineProperty_defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : select_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }





/* harmony default export */ const components_select = ((0,external_wp_compose_namespaceObject.compose)([external_wp_compose_namespaceObject.withInstanceId, with_device_type])(function (_ref) {
  var value = _ref.value,
    _ref$onChange = _ref.onChange,
    _onChange = _ref$onChange === void 0 ? function () {} : _ref$onChange,
    label = _ref.label,
    _ref$options = _ref.options,
    options = _ref$options === void 0 ? [] : _ref$options,
    _ref$inline = _ref.inline,
    inline = _ref$inline === void 0 ? false : _ref$inline,
    _ref$responsive = _ref.responsive,
    responsive = _ref$responsive === void 0 ? false : _ref$responsive,
    _ref$search = _ref.search,
    search = _ref$search === void 0 ? false : _ref$search,
    id = _ref.instanceId,
    DeviceSelector = _ref.deviceSelector,
    deviceType = _ref.deviceType,
    _ref$placeholder = _ref.placeholder,
    placeholder = _ref$placeholder === void 0 ? null : _ref$placeholder;
  return /*#__PURE__*/React.createElement("div", {
    className: classnames_default()('blockart-control', 'blockart-select', {
      'blockart-responsive': responsive
    }, {
      'blockart-inline': inline && !responsive
    })
  }, /*#__PURE__*/React.createElement("div", {
    className: "blockart-control-head blockart-select-head"
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: "blockart-select-button-".concat(id),
    className: "blockart-control-label blockart-select-label"
  }, label), responsive && /*#__PURE__*/React.createElement(DeviceSelector, null)), /*#__PURE__*/React.createElement("div", {
    className: "blockart-control-body blockart-select-body"
  }, responsive ? ['desktop', 'tablet', 'mobile'].map(function (deviceKey) {
    var _value$deviceKey;
    return deviceKey === deviceType && /*#__PURE__*/React.createElement(rc_select_es, {
      placeholder: placeholder,
      prefixCls: "blockart-select",
      key: deviceKey,
      dropdownClassName: "blockart-select-dropdown",
      className: "blockart-options",
      value: (_value$deviceKey = value === null || value === void 0 ? void 0 : value[deviceKey]) !== null && _value$deviceKey !== void 0 ? _value$deviceKey : '',
      showSearch: search,
      onChange: function onChange(val) {
        return _onChange(select_objectSpread(select_objectSpread({}, value), {}, defineProperty_defineProperty({}, deviceKey, val)));
      }
    }, (options === null || options === void 0 ? void 0 : options.length) > 1 && options.map(function (option) {
      var _option$value, _option$value2, _option$label;
      return /*#__PURE__*/React.createElement(es_Option, {
        className: "blockart-option-item",
        value: (_option$value = option === null || option === void 0 ? void 0 : option.value) !== null && _option$value !== void 0 ? _option$value : '',
        key: (_option$value2 = option === null || option === void 0 ? void 0 : option.value) !== null && _option$value2 !== void 0 ? _option$value2 : ''
      }, (_option$label = option === null || option === void 0 ? void 0 : option.label) !== null && _option$label !== void 0 ? _option$label : '');
    }));
  }) : /*#__PURE__*/React.createElement(rc_select_es, {
    placeholder: placeholder,
    prefixCls: "blockart-select",
    dropdownClassName: "blockart-select-dropdown",
    className: "blockart-options",
    value: value !== null && value !== void 0 ? value : '',
    showSearch: search,
    onChange: function onChange(val) {
      return _onChange(val);
    }
  }, (options === null || options === void 0 ? void 0 : options.length) > 1 && options.map(function (option) {
    var _option$value3, _option$value4, _option$label2;
    return /*#__PURE__*/React.createElement(es_Option, {
      className: "blockart-option-item",
      value: (_option$value3 = option === null || option === void 0 ? void 0 : option.value) !== null && _option$value3 !== void 0 ? _option$value3 : '',
      key: (_option$value4 = option === null || option === void 0 ? void 0 : option.value) !== null && _option$value4 !== void 0 ? _option$value4 : ''
    }, (_option$label2 = option === null || option === void 0 ? void 0 : option.label) !== null && _option$label2 !== void 0 ? _option$label2 : '');
  }))));
}));
;// CONCATENATED MODULE: external "lodash"
const external_lodash_namespaceObject = window["lodash"];
;// CONCATENATED MODULE: ./src/blocks/components/reset/index.js

function reset_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function reset_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? reset_ownKeys(Object(source), !0).forEach(function (key) { defineProperty_defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : reset_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }






/* harmony default export */ const components_reset = (function (_ref) {
  var attributeKey = _ref.attributeKey,
    value = _ref.value,
    innerKey = _ref.innerKey;
  var _useSelect = (0,external_wp_data_namespaceObject.useSelect)(function (select) {
      var _select = select('core/block-editor'),
        getSelectedBlock = _select.getSelectedBlock;
      return getSelectedBlock();
    }, [value]),
    name = _useSelect.name,
    clientId = _useSelect.clientId,
    attributes = _useSelect.attributes;
  var _useDispatch = (0,external_wp_data_namespaceObject.useDispatch)('core/block-editor'),
    updateBlockAttributes = _useDispatch.updateBlockAttributes;
  var defaultValue = (0,external_wp_element_namespaceObject.useMemo)(function () {
    var _getBlockType, _getBlockType$attribu, _getBlockType$attribu2;
    var v = (_getBlockType = (0,external_wp_blocks_namespaceObject.getBlockType)(name)) === null || _getBlockType === void 0 ? void 0 : (_getBlockType$attribu = _getBlockType.attributes) === null || _getBlockType$attribu === void 0 ? void 0 : (_getBlockType$attribu2 = _getBlockType$attribu[attributeKey]) === null || _getBlockType$attribu2 === void 0 ? void 0 : _getBlockType$attribu2["default"];
    if (innerKey) return v === null || v === void 0 ? void 0 : v[innerKey];
    return v;
  }, []);
  return /*#__PURE__*/React.createElement(external_wp_components_namespaceObject.Button, {
    className: "blockart-reset",
    isSmall: true,
    disabled: (0,external_lodash_namespaceObject.isEqual)(value, defaultValue),
    onClick: function onClick() {
      if (innerKey) {
        var _attributes$attribute;
        updateBlockAttributes(clientId, reset_objectSpread(reset_objectSpread({}, attributes), {}, defineProperty_defineProperty({}, attributeKey, reset_objectSpread(reset_objectSpread({}, (_attributes$attribute = attributes === null || attributes === void 0 ? void 0 : attributes[attributeKey]) !== null && _attributes$attribute !== void 0 ? _attributes$attribute : {}), {}, defineProperty_defineProperty({}, innerKey, defaultValue)))));
        return;
      }
      updateBlockAttributes(clientId, reset_objectSpread(reset_objectSpread({}, attributes), {}, defineProperty_defineProperty({}, attributeKey, defaultValue)));
    },
    icon: 'image-rotate'
  });
});
;// CONCATENATED MODULE: ./src/blocks/components/units-dropdown/index.js

/* harmony default export */ const units_dropdown = (function (_ref) {
  var _ref$units = _ref.units,
    units = _ref$units === void 0 ? [] : _ref$units,
    currentUnit = _ref.currentUnit,
    onChange = _ref.onChange,
    _ref$forceShowUnit = _ref.forceShowUnit,
    forceShowUnit = _ref$forceShowUnit === void 0 ? false : _ref$forceShowUnit;
  if (!units.length && forceShowUnit) {
    return /*#__PURE__*/React.createElement("div", {
      className: "blockart-units"
    }, /*#__PURE__*/React.createElement(external_wp_components_namespaceObject.Button, {
      className: "blockart-units-btn",
      style: {
        pointerEvents: 'none'
      }
    }, currentUnit));
  }
  if (units.length < 1) {
    return null;
  }
  return /*#__PURE__*/React.createElement(external_wp_components_namespaceObject.Dropdown, {
    className: "blockart-units",
    contentClassName: "blockart-units",
    popoverProps: {
      position: 'bottom center'
    },
    renderToggle: function renderToggle(_ref2) {
      var isOpen = _ref2.isOpen,
        onToggle = _ref2.onToggle;
      return /*#__PURE__*/React.createElement(external_wp_components_namespaceObject.Button, {
        className: "blockart-units-btn",
        onClick: onToggle,
        "aria-expanded": isOpen
      }, currentUnit);
    },
    renderContent: function renderContent(_ref3) {
      var onToggle = _ref3.onToggle;
      return units.length > 1 ? /*#__PURE__*/React.createElement("ul", {
        className: "blockart-units-menu"
      }, units.filter(function (unit) {
        return unit !== currentUnit;
      }).map(function (unit) {
        return /*#__PURE__*/React.createElement("li", {
          key: unit
        }, /*#__PURE__*/React.createElement(external_wp_components_namespaceObject.Button, {
          onClick: function onClick() {
            onChange(unit);
            onToggle();
          },
          isPrimary: unit === currentUnit
        }, unit));
      })) : null;
    }
  });
});
;// CONCATENATED MODULE: ./src/blocks/components/slider/index.js











/* eslint-disable no-nested-ternary */

/* harmony default export */ const slider = ((0,external_wp_compose_namespaceObject.compose)([with_device_type, external_wp_compose_namespaceObject.withInstanceId])(function (_ref) {
  var total = _ref.value,
    _ref$onChange = _ref.onChange,
    onChange = _ref$onChange === void 0 ? function () {} : _ref$onChange,
    _ref$responsive = _ref.responsive,
    responsive = _ref$responsive === void 0 ? false : _ref$responsive,
    label = _ref.label,
    _ref$units = _ref.units,
    units = _ref$units === void 0 ? [] : _ref$units,
    _ref$min = _ref.min,
    min = _ref$min === void 0 ? -Infinity : _ref$min,
    _ref$max = _ref.max,
    max = _ref$max === void 0 ? Infinity : _ref$max,
    _ref$step = _ref.step,
    step = _ref$step === void 0 ? 0.01 : _ref$step,
    _ref$inline = _ref.inline,
    inline = _ref$inline === void 0 ? false : _ref$inline,
    _ref$defaultUnit = _ref.defaultUnit,
    defaultUnit = _ref$defaultUnit === void 0 ? 'px' : _ref$defaultUnit,
    _ref$showUnit = _ref.showUnit,
    showUnit = _ref$showUnit === void 0 ? false : _ref$showUnit,
    id = _ref.instanceId,
    deviceType = _ref.deviceType,
    DeviceSelector = _ref.deviceSelector,
    resetKey = _ref.resetKey,
    innerResetKey = _ref.innerResetKey;
  var currentUnit = (0,external_wp_element_namespaceObject.useMemo)(function () {
    if (total) {
      var _total$unit;
      if (responsive) {
        var _total$deviceType;
        return total !== null && total !== void 0 && total[deviceType] ? total !== null && total !== void 0 && (_total$deviceType = total[deviceType]) !== null && _total$deviceType !== void 0 && _total$deviceType.unit ? total[deviceType].unit : defaultUnit : defaultUnit;
      }
      return (_total$unit = total === null || total === void 0 ? void 0 : total.unit) !== null && _total$unit !== void 0 ? _total$unit : defaultUnit;
    }
    return defaultUnit;
  }, [total, deviceType]);
  var currentValue = (0,external_wp_element_namespaceObject.useMemo)(function () {
    if (total && Object.keys(total).length > 0) {
      if (responsive) {
        if (units.length > 0) {
          var _total$deviceType2, _total$deviceType3, _total$deviceType4;
          return total !== null && total !== void 0 && total[deviceType] ? total !== null && total !== void 0 && (_total$deviceType2 = total[deviceType]) !== null && _total$deviceType2 !== void 0 && _total$deviceType2.value || 0 === (total === null || total === void 0 ? void 0 : (_total$deviceType3 = total[deviceType]) === null || _total$deviceType3 === void 0 ? void 0 : _total$deviceType3.value) ? total === null || total === void 0 ? void 0 : (_total$deviceType4 = total[deviceType]) === null || _total$deviceType4 === void 0 ? void 0 : _total$deviceType4.value : '' : '';
        }
        return total !== null && total !== void 0 && total[deviceType] || 0 === (total === null || total === void 0 ? void 0 : total[deviceType]) ? total === null || total === void 0 ? void 0 : total[deviceType] : '';
      }
      return total !== null && total !== void 0 && total.value || 0 === (total === null || total === void 0 ? void 0 : total.value) ? total === null || total === void 0 ? void 0 : total.value : '';
    }
    return total || 0 === total ? total : '';
  }, [total, deviceType]);
  var inputAttrs = (0,external_wp_element_namespaceObject.useMemo)(function () {
    var inputMin = min,
      inputMax = max,
      inputStep = step;
    if ('%' === currentUnit || 'vh' === currentUnit || 'vw' === currentUnit) {
      inputMin = 0;
      inputMax = 100;
    }
    if ('em' === currentUnit || 'rem' === currentUnit) {
      inputMin = 0;
      inputMax = 20;
      inputStep = 0.01;
    }
    if (units.length > 0 && 'px' === currentUnit) {
      inputStep = 1;
    }
    return {
      min: inputMin,
      max: inputMax,
      step: inputStep
    };
  }, [currentUnit]);
  var setSettings = function setSettings(val, prop) {
    var _total$deviceType5;
    val = Number.isNaN(val) ? undefined : val;
    val = val < inputAttrs.min ? inputAttrs.min : val;
    val = val > inputAttrs.max ? inputAttrs.max : val;
    var data = units.length > 0 ? defineProperty_defineProperty({}, prop, val) : val;
    if (units.length > 0 && 'unit' === prop) {
      data.value = '';
    }
    data = units.length > 0 ? Object.assign({}, responsive ? (_total$deviceType5 = total === null || total === void 0 ? void 0 : total[deviceType]) !== null && _total$deviceType5 !== void 0 ? _total$deviceType5 : {} : total, data) : val;
    if (units.length > 0 && (!data.unit || !(total !== null && total !== void 0 && total[deviceType]) || !(total !== null && total !== void 0 && total[deviceType].unit))) {
      data.unit = data.unit || defaultUnit;
    }
    onChange(data.unit || responsive ? Object.assign({}, total !== null && total !== void 0 ? total : {}, responsive ? defineProperty_defineProperty({}, deviceType, data) : data) : data);
  };
  return /*#__PURE__*/React.createElement("div", {
    className: classnames_default()('blockart-control', 'blockart-slider', {
      'blockart-responsive': responsive,
      'blockart-inline': !responsive && !units && inline
    })
  }, /*#__PURE__*/React.createElement("div", {
    className: "blockart-control-head blockart-slider-head"
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: "blockart-range-".concat(id),
    className: "blockart-control-label blockart-slider-label"
  }, label), responsive && /*#__PURE__*/React.createElement(DeviceSelector, null), resetKey && /*#__PURE__*/React.createElement(components_reset, {
    value: total,
    attributeKey: resetKey,
    innerKey: innerResetKey
  }), /*#__PURE__*/React.createElement(units_dropdown, {
    units: units,
    currentUnit: currentUnit,
    onChange: function onChange(unit) {
      return setSettings(unit, 'unit');
    },
    forceShowUnit: showUnit
  })), /*#__PURE__*/React.createElement("div", {
    className: "blockart-control-body blockart-slider-body"
  }, responsive ? ['desktop', 'tablet', 'mobile'].map(function (deviceKey) {
    return deviceKey === deviceType && /*#__PURE__*/React.createElement(external_wp_components_namespaceObject.RangeControl, extends_extends({
      key: deviceKey,
      value: currentValue,
      onChange: function onChange(val) {
        return setSettings(val, 'value');
      }
    }, inputAttrs, {
      className: "blockart-range",
      allowReset: false
    }));
  }) : /*#__PURE__*/React.createElement("div", {
    className: "blockart-slider-container"
  }, /*#__PURE__*/React.createElement(external_wp_components_namespaceObject.RangeControl, extends_extends({
    value: currentValue,
    onChange: function onChange(val) {
      return setSettings(val, 'value');
    }
  }, inputAttrs, {
    className: "blockart-range",
    allowReset: false
  })))));
}));
;// CONCATENATED MODULE: ./src/blocks/components/pop-over/index.js







/* harmony default export */ const pop_over = ((0,external_wp_compose_namespaceObject.withInstanceId)(function (_ref) {
  var label = _ref.label,
    children = _ref.children,
    id = _ref.instanceId;
  var _useState = (0,external_wp_element_namespaceObject.useState)(false),
    _useState2 = slicedToArray_slicedToArray(_useState, 2),
    isOpen = _useState2[0],
    setIsOpen = _useState2[1];
  var toggleRef = (0,external_wp_element_namespaceObject.useRef)();
  return /*#__PURE__*/React.createElement("div", {
    className: "blockart-control blockart-pop-over"
  }, /*#__PURE__*/React.createElement("div", {
    className: "blockart-control-head blockart-pop-over-head"
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: "blockart-pop-over-".concat(id),
    className: "blockart-control-label blockart-pop-over-label"
  }, label), /*#__PURE__*/React.createElement("button", {
    ref: toggleRef,
    id: "blockart-pop-over-".concat(id),
    onClick: function onClick() {
      return setIsOpen(!isOpen);
    },
    className: "blockart-pop-over-toggle-button"
  }, /*#__PURE__*/React.createElement(components_icon, {
    type: "controlIcon",
    name: "pencil",
    size: 15
  }))), isOpen && /*#__PURE__*/React.createElement(external_wp_components_namespaceObject.Popover, {
    placement: "top-end",
    onFocusOutside: function onFocusOutside(e) {
      if (e.relatedTarget !== toggleRef.current) {
        setIsOpen(false);
      }
    },
    focusOnMount: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: classnames_default()('blockart-control-body', 'blockart-pop-over-body', {
      'is-open': isOpen
    })
  }, children || '')));
}));
;// CONCATENATED MODULE: ./src/blocks/components/panel/index.js
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = panel_unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function panel_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return panel_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return panel_arrayLikeToArray(o, minLen); }
function panel_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }






/* harmony default export */ const panel = ((0,external_wp_data_namespaceObject.withSelect)(function (select) {
  return {
    block: select('core/block-editor').getSelectedBlock()
  };
})(function (_ref) {
  var children = _ref.children,
    title = _ref.title,
    _ref$block = _ref.block,
    _ref$block$name = _ref$block.name,
    name = _ref$block$name === void 0 ? '' : _ref$block$name,
    _ref$block$attributes = _ref$block.attributes.clientId,
    clientId = _ref$block$attributes === void 0 ? '' : _ref$block$attributes,
    _ref$initialOpen = _ref.initialOpen,
    initialOpen = _ref$initialOpen === void 0 ? false : _ref$initialOpen;
  var panel = (0,external_wp_element_namespaceObject.useRef)();
  var id = name + '/' + clientId;
  var onToggle = function onToggle() {
    var _panel$current, _parent$dataset;
    var siblings = getSiblings(panel.current);
    if (siblings !== null && siblings !== void 0 && siblings.length) {
      var _iterator = _createForOfIteratorHelper(siblings),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var _body$classList;
          var sibling = _step.value;
          var body = sibling.querySelector('.blockart-panel-body');
          if (body !== null && body !== void 0 && (_body$classList = body.classList) !== null && _body$classList !== void 0 && _body$classList.contains('is-opened')) {
            var _sibling$querySelecto;
            (_sibling$querySelecto = sibling.querySelector('.components-panel__body-toggle')) === null || _sibling$querySelecto === void 0 ? void 0 : _sibling$querySelecto.click();
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }
    var parent = (_panel$current = panel.current) === null || _panel$current === void 0 ? void 0 : _panel$current.closest('[data-inspector-tab]');
    if (parent !== null && parent !== void 0 && (_parent$dataset = parent.dataset) !== null && _parent$dataset !== void 0 && _parent$dataset.inspectorTab) {
      inspectorTabState.set(id, {
        tab: parent.dataset.inspectorTab,
        panel: title
      });
    }
  };
  (0,external_wp_element_namespaceObject.useEffect)(function () {
    var _inspectorTabState$ge, _panel$current2, _panel$current2$close, _panel$current2$close2, _inspectorTabState$ge2;
    if (((_inspectorTabState$ge = inspectorTabState.get(id)) === null || _inspectorTabState$ge === void 0 ? void 0 : _inspectorTabState$ge.tab) === ((_panel$current2 = panel.current) === null || _panel$current2 === void 0 ? void 0 : (_panel$current2$close = _panel$current2.closest('[data-inspector-tab]')) === null || _panel$current2$close === void 0 ? void 0 : (_panel$current2$close2 = _panel$current2$close.dataset) === null || _panel$current2$close2 === void 0 ? void 0 : _panel$current2$close2.inspectorTab) && ((_inspectorTabState$ge2 = inspectorTabState.get(id)) === null || _inspectorTabState$ge2 === void 0 ? void 0 : _inspectorTabState$ge2.panel) === title) {
      var _panel$current3, _panel$current3$query;
      (_panel$current3 = panel.current) === null || _panel$current3 === void 0 ? void 0 : (_panel$current3$query = _panel$current3.querySelector('.components-panel__body-toggle')) === null || _panel$current3$query === void 0 ? void 0 : _panel$current3$query.click();
    }
  }, []);
  return /*#__PURE__*/React.createElement(external_wp_components_namespaceObject.Panel, {
    className: "blockart-panel",
    ref: panel
  }, /*#__PURE__*/React.createElement(external_wp_components_namespaceObject.PanelBody, {
    className: "blockart-panel-body",
    title: title !== null && title !== void 0 ? title : 'Panel',
    onToggle: onToggle,
    initialOpen: initialOpen
  }, children));
}));
;// CONCATENATED MODULE: ./src/blocks/components/dimensions/index.js


function dimensions_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function dimensions_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? dimensions_ownKeys(Object(source), !0).forEach(function (key) { defineProperty_defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : dimensions_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }










/* harmony default export */ const dimensions = ((0,external_wp_compose_namespaceObject.compose)([with_device_type, external_wp_compose_namespaceObject.withInstanceId])(function (_ref) {
  var total = _ref.value,
    _ref$onChange = _ref.onChange,
    onChange = _ref$onChange === void 0 ? function () {} : _ref$onChange,
    _ref$responsive = _ref.responsive,
    responsive = _ref$responsive === void 0 ? false : _ref$responsive,
    label = _ref.label,
    _ref$units = _ref.units,
    units = _ref$units === void 0 ? [] : _ref$units,
    _ref$min = _ref.min,
    min = _ref$min === void 0 ? -Infinity : _ref$min,
    _ref$max = _ref.max,
    max = _ref$max === void 0 ? Infinity : _ref$max,
    _ref$step = _ref.step,
    step = _ref$step === void 0 ? 0.01 : _ref$step,
    _ref$defaultUnit = _ref.defaultUnit,
    defaultUnit = _ref$defaultUnit === void 0 ? 'px' : _ref$defaultUnit,
    _ref$type = _ref.type,
    type = _ref$type === void 0 ? '' : _ref$type,
    id = _ref.instanceId,
    deviceType = _ref.deviceType,
    DeviceSelector = _ref.deviceSelector,
    resetKey = _ref.resetKey,
    innerResetKey = _ref.innerResetKey;
  var currentUnit = (0,external_wp_element_namespaceObject.useMemo)(function () {
    if (total) {
      var _total$unit;
      if (responsive) {
        var _total$deviceType;
        return total !== null && total !== void 0 && total[deviceType] ? total !== null && total !== void 0 && total[deviceType].unit ? total === null || total === void 0 ? void 0 : (_total$deviceType = total[deviceType]) === null || _total$deviceType === void 0 ? void 0 : _total$deviceType.unit : defaultUnit : defaultUnit;
      }
      return (_total$unit = total === null || total === void 0 ? void 0 : total.unit) !== null && _total$unit !== void 0 ? _total$unit : defaultUnit;
    }
    return defaultUnit;
  }, [total, deviceType]);
  var getValue = function getValue(val) {
    if (Object.keys(total || {}).length > 0) {
      if (responsive) {
        var _total$deviceType2, _total$deviceType3, _total$deviceType4;
        return total !== null && total !== void 0 && total[deviceType] ? total !== null && total !== void 0 && (_total$deviceType2 = total[deviceType]) !== null && _total$deviceType2 !== void 0 && _total$deviceType2[val] || 0 === (total === null || total === void 0 ? void 0 : (_total$deviceType3 = total[deviceType]) === null || _total$deviceType3 === void 0 ? void 0 : _total$deviceType3[val]) ? total === null || total === void 0 ? void 0 : (_total$deviceType4 = total[deviceType]) === null || _total$deviceType4 === void 0 ? void 0 : _total$deviceType4[val] : '' : '';
      }
      return total !== null && total !== void 0 && total[val] || 0 === (total === null || total === void 0 ? void 0 : total[val]) ? total[val] : '';
    }
    return '';
  };
  var inputAttrs = (0,external_wp_element_namespaceObject.useMemo)(function () {
    var inputMin = min,
      inputMax = max,
      inputStep = step;
    if ('%' === currentUnit || 'vh' === currentUnit || 'vw' === currentUnit) {
      inputMin = 'margin' === type ? -100 : 0;
      inputMax = 100;
    }
    if ('em' === currentUnit || 'rem' === currentUnit) {
      inputMin = 'margin' === type ? -20 : 0;
      inputMax = 20;
    }
    if ('px' === currentUnit) {
      inputMin = 'margin' === type ? -inputMax : 0;
      inputStep = 1;
    }
    return {
      min: inputMin,
      max: inputMax,
      step: inputStep
    };
  });
  var setSettings = function setSettings(val) {
    var _total$deviceType5, _total$deviceType6, _total$deviceType7;
    var prop = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
    val = Number.isNaN(val) ? Boolean(getValue('lock')) ? undefined : 0 : val;
    val = val < inputAttrs.min ? inputAttrs.min : val;
    val = val > inputAttrs.max ? inputAttrs.max : val;
    var data = Boolean(getValue('lock')) && 'unit' !== prop && 'lock' !== prop ? {
      top: val,
      right: val,
      bottom: val,
      left: val
    } : defineProperty_defineProperty({}, prop, val);
    if ('unit' === prop) {
      data.top = undefined;
      data.right = undefined;
      data.bottom = undefined;
      data.left = undefined;
    }
    data = Object.assign({}, responsive ? (_total$deviceType5 = total === null || total === void 0 ? void 0 : total[deviceType]) !== null && _total$deviceType5 !== void 0 ? _total$deviceType5 : {} : total !== null && total !== void 0 ? total : {}, data);
    if (!data.unit || !(total !== null && total !== void 0 && (_total$deviceType6 = total[deviceType]) !== null && _total$deviceType6 !== void 0 && _total$deviceType6.unit)) {
      var _data$unit;
      data.unit = (_data$unit = data.unit) !== null && _data$unit !== void 0 ? _data$unit : defaultUnit;
    }
    if (!data.lock || !(total !== null && total !== void 0 && (_total$deviceType7 = total[deviceType]) !== null && _total$deviceType7 !== void 0 && _total$deviceType7.lock)) {
      var _data$lock;
      data.lock = (_data$lock = data.lock) !== null && _data$lock !== void 0 ? _data$lock : false;
    }
    onChange(Object.assign({}, total !== null && total !== void 0 ? total : {}, responsive ? defineProperty_defineProperty({}, deviceType, data) : data));
  };
  var prevLockVal = (0,external_wp_element_namespaceObject.useRef)(getValue('lock'));
  (0,external_wp_element_namespaceObject.useEffect)(function () {
    if (prevLockVal.current === getValue('lock')) {
      return;
    }
    prevLockVal.current = getValue('lock');
    if (!getValue('lock')) {
      return;
    }
    if (!responsive) {
      var allProp = [];
      var maxProp;
      var temp = {};
      for (var _i = 0, _Object$keys = Object.keys(DIMENSIONS_PROPERTIES); _i < _Object$keys.length; _i++) {
        var _total$prop;
        var prop = _Object$keys[_i];
        allProp = [].concat(_toConsumableArray(allProp), [(_total$prop = total === null || total === void 0 ? void 0 : total[prop]) !== null && _total$prop !== void 0 ? _total$prop : '']);
        if (allProp.length === 4) {
          maxProp = allProp.every(function (v) {
            return '' === v;
          }) ? undefined : Math.max.apply(Math, _toConsumableArray(allProp));
          temp.top = maxProp;
          temp.right = maxProp;
          temp.bottom = maxProp;
          temp.left = maxProp;
        }
      }
      onChange(Object.assign({}, total !== null && total !== void 0 ? total : {}, temp));
    } else {
      var _total$deviceType8;
      var _allProp = [];
      var _maxProp;
      var _temp = {};
      if (total !== null && total !== void 0 && total[deviceType]) {
        for (var _i2 = 0, _Object$keys2 = Object.keys(DIMENSIONS_PROPERTIES); _i2 < _Object$keys2.length; _i2++) {
          var _prop = _Object$keys2[_i2];
          _allProp = [].concat(_toConsumableArray(_allProp), [total[deviceType][_prop] || '']);
          if (_allProp.length === 4) {
            _maxProp = _allProp.every(function (v) {
              return '' === v;
            }) ? undefined : Math.max.apply(Math, _toConsumableArray(_allProp));
            if (!(_temp !== null && _temp !== void 0 && _temp[deviceType])) {
              _temp[deviceType] = {};
            }
            _temp[deviceType].top = _maxProp;
            _temp[deviceType].right = _maxProp;
            _temp[deviceType].bottom = _maxProp;
            _temp[deviceType].left = _maxProp;
          }
        }
      }
      onChange(dimensions_objectSpread(dimensions_objectSpread({}, total !== null && total !== void 0 ? total : {}), {}, defineProperty_defineProperty({}, deviceType, dimensions_objectSpread(dimensions_objectSpread({}, (_total$deviceType8 = total === null || total === void 0 ? void 0 : total[deviceType]) !== null && _total$deviceType8 !== void 0 ? _total$deviceType8 : {}), _temp === null || _temp === void 0 ? void 0 : _temp[deviceType]))));
    }
  }, [getValue('lock')]);
  return /*#__PURE__*/React.createElement("div", {
    className: classnames_default()('blockart-control', 'blockart-dimensions', {
      'blockart-responsive': responsive
    })
  }, /*#__PURE__*/React.createElement("div", {
    className: "blockart-control-head blockart-dimensions-head"
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: "blockart-dimension-top-".concat(id),
    className: "blockart-control-label blockart-dimensions-label"
  }, label), responsive && /*#__PURE__*/React.createElement(DeviceSelector, null), resetKey && /*#__PURE__*/React.createElement(components_reset, {
    attributeKey: resetKey,
    value: total,
    innerKey: innerResetKey
  }), /*#__PURE__*/React.createElement(units_dropdown, {
    units: units,
    currentUnit: currentUnit,
    onChange: function onChange(v) {
      return setSettings(v, 'unit');
    }
  })), /*#__PURE__*/React.createElement("div", {
    className: "blockart-control-body blockart-dimension-body"
  }, responsive ? ['desktop', 'tablet', 'mobile'].map(function (deviceKey) {
    return deviceKey === deviceType && /*#__PURE__*/React.createElement("div", {
      key: deviceKey,
      className: "blockart-dimensions-container"
    }, Object.keys(DIMENSIONS_PROPERTIES).map(function (dimensionProp) {
      return /*#__PURE__*/React.createElement(external_wp_components_namespaceObject.TextControl, {
        autoComplete: "off",
        key: dimensionProp,
        className: "blockart-dimension",
        label: DIMENSIONS_PROPERTIES[dimensionProp],
        value: getValue(dimensionProp),
        type: "number",
        onChange: function onChange(val) {
          return setSettings(parseFloat(val), dimensionProp);
        }
      });
    }), /*#__PURE__*/React.createElement("button", {
      className: classnames_default()('blockart-dimensions-lock', {
        'is-lock': Boolean(getValue('lock'))
      }),
      onClick: function onClick() {
        return setSettings(!Boolean(getValue('lock')), 'lock');
      }
    }, /*#__PURE__*/React.createElement(components_icon, {
      type: "controlIcon",
      name: Boolean(getValue('lock')) ? 'lock' : 'un-link',
      size: 16
    })));
  }) : /*#__PURE__*/React.createElement("div", {
    className: "blockart-dimensions-container"
  }, Object.keys(DIMENSIONS_PROPERTIES).map(function (dimensionProp) {
    return /*#__PURE__*/React.createElement(external_wp_components_namespaceObject.TextControl, {
      autoComplete: "off",
      key: dimensionProp,
      className: "blockart-dimension",
      label: DIMENSIONS_PROPERTIES[dimensionProp],
      value: getValue(dimensionProp),
      type: "number",
      onChange: function onChange(val) {
        return setSettings(parseFloat(val), dimensionProp);
      }
    });
  }), /*#__PURE__*/React.createElement("button", {
    className: classnames_default()('blockart-dimensions-lock', {
      'is-lock': Boolean(getValue('lock'))
    }),
    onClick: function onClick() {
      return setSettings(!Boolean(getValue('lock')), 'lock');
    }
  }, /*#__PURE__*/React.createElement(components_icon, {
    type: "controlIcon",
    name: Boolean(getValue('lock')) ? 'lock' : 'un-link',
    size: 16
  })))));
}));
;// CONCATENATED MODULE: external ["wp","blockEditor"]
const external_wp_blockEditor_namespaceObject = window["wp"]["blockEditor"];
;// CONCATENATED MODULE: ./src/blocks/components/url-input/index.js



var url_input_excluded = ["value", "label", "onChange", "newTab", "noFollow", "instanceId"];






/* harmony default export */ const url_input = ((0,external_wp_compose_namespaceObject.withInstanceId)(function (_ref) {
  var _value$url, _value$newTab, _value$noFollow;
  var value = _ref.value,
    _ref$label = _ref.label,
    label = _ref$label === void 0 ? (0,external_wp_i18n_namespaceObject.__)('URL', 'blockart') : _ref$label,
    _ref$onChange = _ref.onChange,
    onChange = _ref$onChange === void 0 ? function () {} : _ref$onChange,
    _ref$newTab = _ref.newTab,
    newTab = _ref$newTab === void 0 ? false : _ref$newTab,
    _ref$noFollow = _ref.noFollow,
    noFollow = _ref$noFollow === void 0 ? false : _ref$noFollow,
    id = _ref.instanceId,
    otherProps = _objectWithoutProperties(_ref, url_input_excluded);
  var setSettings = function setSettings(type) {
    var val = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
    var data = 'newTab' === type || 'noFollow' === type ? defineProperty_defineProperty({}, type, !value[type]) : defineProperty_defineProperty({}, type, val);
    onChange(Object.assign({}, value, data));
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "blockart-control blockart-url-input"
  }, /*#__PURE__*/React.createElement("div", {
    className: "blockart-control-head blockart-url-input-head"
  }, /*#__PURE__*/React.createElement("label", {
    htmlFor: "blockart-url-input-".concat(id),
    className: "blockart-control-label blockart-control-label"
  }, label)), /*#__PURE__*/React.createElement("div", {
    className: "blockart-control-body blockart-url-input-body"
  }, /*#__PURE__*/React.createElement(external_wp_components_namespaceObject.BaseControl, {
    id: "blockart-url-input-".concat(id)
  }, /*#__PURE__*/React.createElement(external_wp_blockEditor_namespaceObject.URLInput, extends_extends({
    value: (_value$url = value === null || value === void 0 ? void 0 : value.url) !== null && _value$url !== void 0 ? _value$url : '',
    onChange: function onChange(val) {
      return setSettings('url', val);
    },
    autoFocus: false // eslint-disable-line jsx-a11y/no-autofocus
    ,
    disableSuggestions: true
  }, otherProps))), newTab && /*#__PURE__*/React.createElement(toggle, {
    checked: (_value$newTab = value === null || value === void 0 ? void 0 : value.newTab) !== null && _value$newTab !== void 0 ? _value$newTab : false,
    onChange: function onChange() {
      return setSettings('newTab');
    },
    label: (0,external_wp_i18n_namespaceObject.__)('Open Link in a New Tab', 'blockart')
  }), noFollow && /*#__PURE__*/React.createElement(toggle, {
    checked: (_value$noFollow = value === null || value === void 0 ? void 0 : value.noFollow) !== null && _value$noFollow !== void 0 ? _value$noFollow : false,
    onChange: function onChange() {
      return setSettings('noFollow');
    },
    label: (0,external_wp_i18n_namespaceObject.__)('Nofollow Link', 'blockart')
  })));
}));
;// CONCATENATED MODULE: ./src/blocks/components/typography/fonts.js
/* harmony default export */ const fonts = ([{
  f: 'Default',
  v: ['100', '200', '300', '400', '500', '600', '700']
}, {
  f: 'Abril Fatface',
  v: ['regular']
}, {
  f: 'Almendra SC',
  v: ['regular']
}, {
  f: 'Anton',
  v: ['regular']
}, {
  f: 'Arvo',
  v: ['regular', 'italic', '700', '700italic']
}, {
  f: 'Bebas Neue',
  v: ['regular']
}, {
  f: 'Bitter',
  v: ['100', '200', '300', 'regular', '500', '600', '700', '800', '900', '100italic', '200italic', '300italic', 'italic', '500italic', '600italic', '700italic', '800italic', '900italic']
}, {
  f: 'Coda Caption',
  v: ['800']
}, {
  f: 'Creepster',
  v: ['regular']
}, {
  f: 'Domine',
  v: ['regular', '500', '600', '700']
}, {
  f: 'Finger Paint',
  v: ['regular']
}, {
  f: 'Fredoka One',
  v: ['regular']
}, {
  f: 'Lato',
  v: ['100', '100italic', '300', '300italic', 'regular', 'italic', '700', '700italic', '900', '900italic']
}, {
  f: 'Lobster',
  v: ['regular']
}, {
  f: 'Lora',
  v: ['regular', '500', '600', '700', 'italic', '500italic', '600italic', '700italic']
}, {
  f: 'Montserrat',
  v: ['100', '100italic', '200', '200italic', '300', '300italic', 'regular', 'italic', '500', '500italic', '600', '600italic', '700', '700italic', '800', '800italic', '900', '900italic']
}, {
  f: 'Nobile',
  v: ['regular', 'italic', '500', '500italic', '700', '700italic']
}, {
  f: 'Nunito',
  v: ['200', '200italic', '300', '300italic', 'regular', 'italic', '600', '600italic', '700', '700italic', '800', '800italic', '900', '900italic']
}, {
  f: 'Open Sans',
  v: ['300', '300italic', 'regular', 'italic', '600', '600italic', '700', '700italic', '800', '800italic']
}, {
  f: 'Oswald',
  v: ['200', '300', 'regular', '500', '600', '700']
}, {
  f: 'Pattaya',
  v: ['regular']
}, {
  f: 'Peddana',
  v: ['regular']
}, {
  f: 'Playfair Display',
  v: ['regular', '500', '600', '700', '800', '900', 'italic', '500italic', '600italic', '700italic', '800italic', '900italic']
}, {
  f: 'Poppins',
  v: ['100', '100italic', '200', '200italic', '300', '300italic', 'regular', 'italic', '500', '500italic', '600', '600italic', '700', '700italic', '800', '800italic', '900', '900italic']
}, {
  f: 'Quicksand',
  v: ['300', 'regular', '500', '600', '700']
}, {
  f: 'Raleway',
  v: ['100', '200', '300', 'regular', '500', '600', '700', '800', '900', '100italic', '200italic', '300italic', 'italic', '500italic', '600italic', '700italic', '800italic', '900italic']
}, {
  f: 'Roboto',
  v: ['100', '100italic', '300', '300italic', 'regular', 'italic', '500', '500italic', '700', '700italic', '900', '900italic']
}, {
  f: 'Rufina',
  v: ['regular', '700']
}, {
  f: 'Seaweed Script',
  v: ['regular']
}, {
  f: 'Teko',
  v: ['300', 'regular', '500', '600', '700']
}, {
  f: 'Ultra',
  v: ['regular']
}, {
  f: 'Zilla Slab',
  v: ['300', '300italic', 'regular', 'italic', '500', '500italic', '600', '600italic', '700', '700italic']
}, {
  f: 'Noto Serif',
  v: ['regular', '700', '700italic']
}, {
  f: 'Work Sans',
  v: ['100', '200', '300', 'regular', '500', '600', '700', '800', '900', '100italic', '200italic', '300italic', 'italic', '500italic', '600italic', '700italic', '800italic', '900italic']
}, {
  f: 'Quattrocento',
  v: ['regular', '700']
}, {
  f: 'Cinzel Decorative',
  v: ['regular', '700', '900']
}, {
  f: 'Be Vietnam Pro',
  v: ['100', '200', '300', 'regular', '500', '600', '700', '800', '900']
}]);
;// CONCATENATED MODULE: ./src/blocks/components/typography/index.js






/* harmony default export */ const components_typography = (function (_ref) {
  var _ref$value = _ref.value,
    family = _ref$value.family,
    size = _ref$value.size,
    weight = _ref$value.weight,
    lineHeight = _ref$value.lineHeight,
    transform = _ref$value.transform,
    decoration = _ref$value.decoration,
    letterSpacing = _ref$value.letterSpacing,
    _ref$value2 = _ref.value,
    value = _ref$value2 === void 0 ? {} : _ref$value2,
    _ref$onChange = _ref.onChange,
    onChange = _ref$onChange === void 0 ? function () {} : _ref$onChange,
    label = _ref.label,
    resetKey = _ref.resetKey;
  var familyOptions = (0,external_wp_element_namespaceObject.useMemo)(function () {
    return fonts.map(function (font) {
      return {
        value: font.f,
        label: font.f
      };
    });
  }, []);
  var weightOptions = (0,external_wp_element_namespaceObject.useMemo)(function () {
    if (!family) {
      return [100, 200, 300, 400, 500, 600, 700].map(function (w) {
        return {
          label: w,
          value: w
        };
      });
    }
    var weights = fonts.filter(function (f) {
      return family === f.f;
    })[0].v.map(function (w) {
      if (w === 'regular') w = 400;
      return parseInt(w);
    }).filter(function (w, i, arr) {
      return !Number.isNaN(w) && arr.indexOf(w) === i;
    });
    return weights.map(function (w) {
      return {
        label: w,
        value: w
      };
    });
  }, [family]);
  var setSetting = function setSetting(type, val) {
    var data = defineProperty_defineProperty({}, type, val);
    onChange(Object.assign({}, value, data));
  };
  (0,external_wp_element_namespaceObject.useEffect)(function () {
    if (!weightOptions.some(function (w) {
      return w.value === weight;
    })) {
      setSetting('weight', Object.keys(weightOptions).includes('400') || 'undefined' === typeof weight ? 400 : weightOptions[0].value);
    }
  }, [weightOptions]);
  return /*#__PURE__*/React.createElement("div", {
    className: "blockart-control blockart-typography"
  }, /*#__PURE__*/React.createElement("div", {
    className: "blockart-control-head blockart-typography-head"
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: "blockart-typography",
    className: "blockart-control-label blockart-typography-label"
  }, label)), /*#__PURE__*/React.createElement("div", {
    className: "blockart-control-body blockart-typography-body"
  }, /*#__PURE__*/React.createElement(components_select, {
    label: (0,external_wp_i18n_namespaceObject.__)('Font Family', 'blockart'),
    onChange: function onChange(val) {
      return setSetting('family', val);
    },
    value: family !== null && family !== void 0 ? family : 'Default',
    options: familyOptions,
    search: true
  }), /*#__PURE__*/React.createElement(slider, {
    value: size,
    onChange: function onChange(val) {
      return setSetting('size', val);
    },
    responsive: true,
    min: 0,
    max: 100,
    inline: true,
    units: ['px', 'em', 'rem'],
    defaultUnit: "px",
    label: (0,external_wp_i18n_namespaceObject.__)('Size', 'blockart'),
    resetKey: resetKey,
    innerResetKey: 'size'
  }), /*#__PURE__*/React.createElement(components_select, {
    label: (0,external_wp_i18n_namespaceObject.__)('Weight', 'blockart'),
    onChange: function onChange(val) {
      return setSetting('weight', val);
    },
    value: weight !== null && weight !== void 0 ? weight : 400,
    options: weightOptions
  }), /*#__PURE__*/React.createElement(slider, {
    value: lineHeight,
    onChange: function onChange(val) {
      return setSetting('lineHeight', val);
    },
    responsive: true,
    min: 0,
    max: 100,
    inline: true,
    units: ['px', 'em', 'rem'],
    defaultUnit: "px",
    label: (0,external_wp_i18n_namespaceObject.__)('Line Height', 'blockart'),
    resetKey: resetKey,
    innerResetKey: 'lineHeight'
  }), /*#__PURE__*/React.createElement(pop_over, {
    label: (0,external_wp_i18n_namespaceObject.__)('Advanced Typography', 'blockart')
  }, /*#__PURE__*/React.createElement(components_select, {
    label: (0,external_wp_i18n_namespaceObject.__)('Transformation', 'blockart'),
    onChange: function onChange(val) {
      return setSetting('transform', val);
    },
    value: transform !== null && transform !== void 0 ? transform : 'default',
    options: [{
      label: (0,external_wp_i18n_namespaceObject.__)('Default', 'blockart'),
      value: 'default'
    }, {
      label: (0,external_wp_i18n_namespaceObject.__)('Capitalize', 'blockart'),
      value: 'capitalize'
    }, {
      label: (0,external_wp_i18n_namespaceObject.__)('Uppercase', 'blockart'),
      value: 'uppercase'
    }, {
      label: (0,external_wp_i18n_namespaceObject.__)('Lowercase', 'blockart'),
      value: 'lowercase'
    }]
  }), /*#__PURE__*/React.createElement(components_select, {
    label: (0,external_wp_i18n_namespaceObject.__)('Decoration', 'blockart'),
    onChange: function onChange(val) {
      return setSetting('decoration', val);
    },
    value: decoration !== null && decoration !== void 0 ? decoration : 'default',
    options: [{
      label: (0,external_wp_i18n_namespaceObject.__)('Default', 'blockart'),
      value: 'default'
    }, {
      label: (0,external_wp_i18n_namespaceObject.__)('Overline', 'blockart'),
      value: 'overline'
    }, {
      label: (0,external_wp_i18n_namespaceObject.__)('Underline', 'blockart'),
      value: 'underline'
    }, {
      label: (0,external_wp_i18n_namespaceObject.__)('Line Through', 'blockart'),
      value: 'line-through'
    }]
  }), /*#__PURE__*/React.createElement(slider, {
    value: letterSpacing,
    onChange: function onChange(val) {
      return setSetting('letterSpacing', val);
    },
    responsive: true,
    min: 0,
    max: 100,
    inline: true,
    units: ['px', 'em', 'rem'],
    defaultUnit: "px",
    label: (0,external_wp_i18n_namespaceObject.__)('Letter Spacing', 'blockart'),
    resetKey: resetKey,
    innerResetKey: 'letterSpacing'
  }))));
});
;// CONCATENATED MODULE: ./src/blocks/components/size/index.js









/* harmony default export */ const components_size = ((0,external_wp_compose_namespaceObject.withInstanceId)(function (_ref) {
  var _ref$value = _ref.value,
    value = _ref$value === void 0 ? '' : _ref$value,
    _ref$onChange = _ref.onChange,
    _onChange = _ref$onChange === void 0 ? function () {} : _ref$onChange,
    label = _ref.label,
    _ref$sizes = _ref.sizes,
    sizes = _ref$sizes === void 0 ? [{
      label: (0,external_wp_i18n_namespaceObject.__)('S', 'blockart'),
      value: 'small'
    }, {
      label: (0,external_wp_i18n_namespaceObject.__)('M', 'blockart'),
      value: 'medium'
    }, {
      label: (0,external_wp_i18n_namespaceObject.__)('L', 'blockart'),
      value: 'large'
    }] : _ref$sizes,
    _ref$defaultKey = _ref.defaultKey,
    defaultKey = _ref$defaultKey === void 0 ? 'size' : _ref$defaultKey,
    _ref$custom = _ref.custom,
    custom = _ref$custom === void 0 ? false : _ref$custom,
    _ref$customValue = _ref.customValue,
    customValue = _ref$customValue === void 0 ? {} : _ref$customValue,
    _ref$customKey = _ref.customKey,
    customKey = _ref$customKey === void 0 ? 'padding' : _ref$customKey,
    _ref$customMax = _ref.customMax,
    customMax = _ref$customMax === void 0 ? 500 : _ref$customMax,
    _ref$customUnits = _ref.customUnits,
    customUnits = _ref$customUnits === void 0 ? ['rem', 'em', 'px', '%'] : _ref$customUnits,
    _ref$customMin = _ref.customMin,
    customMin = _ref$customMin === void 0 ? 0 : _ref$customMin,
    _ref$customLabel = _ref.customLabel,
    customLabel = _ref$customLabel === void 0 ? (0,external_wp_i18n_namespaceObject.__)('Padding', 'blockart') : _ref$customLabel,
    _ref$customDefaultUni = _ref.customDefaultUnit,
    customDefaultUnit = _ref$customDefaultUni === void 0 ? 'px' : _ref$customDefaultUni,
    id = _ref.instanceId;
  var _useState = (0,external_wp_element_namespaceObject.useState)(false),
    _useState2 = slicedToArray_slicedToArray(_useState, 2),
    isOpen = _useState2[0],
    setIsOpen = _useState2[1];
  var popoverRef = (0,external_wp_element_namespaceObject.useRef)();
  var popoverToggleRef = (0,external_wp_element_namespaceObject.useRef)();
  use_click_outside(popoverRef, function () {
    return setIsOpen(false);
  }, popoverToggleRef);
  return /*#__PURE__*/React.createElement("div", {
    className: "blockart-control blockart-size"
  }, /*#__PURE__*/React.createElement("div", {
    className: "blockart-control-head blockart-size-head"
  }, /*#__PURE__*/React.createElement("label", {
    htmlFor: "blockart-size-".concat(id),
    className: "blockart-control-label blockart-size-label"
  }, label)), /*#__PURE__*/React.createElement("div", {
    className: "blockart-control-body blockart-size-body"
  }, /*#__PURE__*/React.createElement("div", {
    className: "blockart-size-buttons"
  }, sizes.length > 0 && sizes.map(function (size, idx) {
    return /*#__PURE__*/React.createElement("button", {
      key: idx,
      className: classnames_default()('blockart-size-button', {
        'is-active': value && size.value === value
      }),
      onClick: function onClick() {
        return _onChange(defaultKey, value === size.value ? '' : size.value);
      }
    }, /*#__PURE__*/React.createElement("span", {
      className: "blockart-size-button-text"
    }, size.label.toUpperCase()));
  }), custom && /*#__PURE__*/React.createElement("button", {
    ref: popoverToggleRef,
    className: classnames_default()('blockart-size-button', 'blockart-size-advance-button', {
      'is-active': value && 'custom' === value
    }),
    onClick: function onClick() {
      setIsOpen(!isOpen);
      _onChange(defaultKey, value === 'custom' ? '' : 'custom');
    }
  }, /*#__PURE__*/React.createElement(components_icon, {
    type: "controlIcon",
    name: "cog",
    size: 20
  }))), value && 'custom' === value && /*#__PURE__*/React.createElement("div", {
    ref: popoverRef,
    className: "blockart-size-popover"
  }, /*#__PURE__*/React.createElement(dimensions, {
    units: customUnits,
    value: customValue || {},
    label: customLabel,
    responsive: true,
    min: customMin,
    max: customMax,
    defaultUnit: customDefaultUnit,
    onChange: function onChange(val) {
      _onChange(customKey, val);
    },
    resetKey: customKey !== null && customKey !== void 0 ? customKey : undefined
  }))));
}));
;// CONCATENATED MODULE: ./src/images/placeholder.png
/* harmony default export */ const placeholder = (__webpack_require__.p + "f7346e9b478a5ef6043bcfd5a5e04922.png");
;// CONCATENATED MODULE: ./src/blocks/components/media/index.js






/* harmony default export */ const media = ((0,external_wp_compose_namespaceObject.withInstanceId)(function (_ref) {
  var _ref$onChange = _ref.onChange,
    onChange = _ref$onChange === void 0 ? function () {} : _ref$onChange,
    _ref$type = _ref.type,
    type = _ref$type === void 0 ? 'image' : _ref$type,
    _ref$value = _ref.value,
    value = _ref$value === void 0 ? {} : _ref$value,
    label = _ref.label;
  var buttonString = value !== null && value !== void 0 && value.url ? (0,external_wp_i18n_namespaceObject.__)('Replace', 'blockart') + ' ' + ('image' === type ? 'Image' : 'Video') : (0,external_wp_i18n_namespaceObject.__)('Add', 'blockart') + ' ' + ('image' === type ? 'Image' : 'Video');
  var onSelect = function onSelect(media) {
    if (!(media !== null && media !== void 0 && media.url)) {
      return;
    }
    var url = media.url,
      id = media.id,
      height = media.height,
      width = media.width,
      alt = media.alt;
    onChange({
      url: url,
      id: id,
      height: height,
      width: width,
      alt: alt
    });
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "blockart-control blockart-media"
  }, /*#__PURE__*/React.createElement("div", {
    className: "blockart-control-head blockart-media-head"
  }, /*#__PURE__*/React.createElement("label", {
    htmlFor: "blockart-media-head"
  }, label)), /*#__PURE__*/React.createElement("div", {
    className: "blockart-control-body blockart-media-body"
  }, /*#__PURE__*/React.createElement(external_wp_blockEditor_namespaceObject.MediaUploadCheck, null, /*#__PURE__*/React.createElement(external_wp_blockEditor_namespaceObject.MediaUpload, {
    onSelect: onSelect,
    allowedTypes: [type],
    title: 'Upload Image',
    render: function render(_ref2) {
      var open = _ref2.open;
      return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
        className: "blockart-media-placeholder blockart-media-preview",
        onClick: open,
        onKeyDown: function onKeyDown(e) {
          return 'Enter' === e.key && open;
        },
        role: "button",
        tabIndex: 0,
        title: buttonString
      }, /*#__PURE__*/React.createElement("img", {
        src: (value === null || value === void 0 ? void 0 : value.url) || placeholder,
        alt: (0,external_wp_i18n_namespaceObject.__)('blockart preview image', 'blockart')
      })), /*#__PURE__*/React.createElement("button", {
        className: "blockart-media-button",
        onClick: open
      }, /*#__PURE__*/React.createElement(components_icon, {
        type: "controlIcon",
        name: "image",
        size: 20
      }), /*#__PURE__*/React.createElement("span", {
        className: "blockart-media-button-text"
      }, buttonString)), value && /*#__PURE__*/React.createElement("button", {
        className: "blockart-media-delete",
        onClick: function onClick() {
          return onChange('');
        }
      }, /*#__PURE__*/React.createElement(components_icon, {
        type: "controlIcon",
        name: "trash",
        size: 20
      })));
    }
  }))));
}));
;// CONCATENATED MODULE: ./src/blocks/components/color/index.js










/* harmony default export */ const components_color = ((0,external_wp_compose_namespaceObject.withInstanceId)(function (_ref) {
  var label = _ref.label,
    value = _ref.value,
    _ref$onChange = _ref.onChange,
    _onChange = _ref$onChange === void 0 ? function () {} : _ref$onChange,
    id = _ref.instanceId,
    resetKey = _ref.resetKey,
    innerResetKey = _ref.innerResetKey;
  var _useState = (0,external_wp_element_namespaceObject.useState)(false),
    _useState2 = slicedToArray_slicedToArray(_useState, 2),
    isOpen = _useState2[0],
    setIsOpen = _useState2[1];
  var toggleRef = (0,external_wp_element_namespaceObject.useRef)();
  var colorPickerRef = (0,external_wp_element_namespaceObject.useRef)(null);
  var setSetting = function setSetting(val) {
    var newVal = val.rgb.a !== 1 ? 'rgba(' + val.rgb.r + ',' + val.rgb.g + ',' + val.rgb.b + ',' + val.rgb.a + ')' : val.hex;
    _onChange(newVal);
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "blockart-control blockart-color"
  }, /*#__PURE__*/React.createElement("div", {
    className: "blockart-control-head blockart-color-head"
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: "blockart-color-".concat(id),
    className: "blockart-control-label blockart-color-label"
  }, label), /*#__PURE__*/React.createElement("div", {
    className: "blockart-color-buttons"
  }, resetKey && /*#__PURE__*/React.createElement(components_reset, {
    value: value,
    attributeKey: resetKey,
    innerKey: innerResetKey
  }), /*#__PURE__*/React.createElement("button", {
    id: "blockart-color-".concat(id),
    className: "blockart-color-toggle-button",
    onClick: function onClick() {
      return setIsOpen(!isOpen);
    },
    ref: toggleRef
  }, /*#__PURE__*/React.createElement("span", {
    className: classnames_default()('blockart-color-indicator', {
      'is-empty': !value
    }),
    style: {
      width: '24px',
      height: '24px',
      background: value || 'repeating-conic-gradient(#999 0% 25%, #eee 0% 50%) center center / 8px 8px',
      display: 'inline-block',
      borderRadius: '50%'
    }
  }), value && /*#__PURE__*/React.createElement("span", {
    className: "blockart-color-text"
  }, value)))), isOpen && /*#__PURE__*/React.createElement(external_wp_components_namespaceObject.Popover, {
    plcaement: "top-end",
    onFocusOutside: function onFocusOutside(e) {
      if (e.relatedTarget !== toggleRef.current) {
        setIsOpen(false);
      }
    },
    focusOnMount: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "blockart-control-body blockart-color-body"
  }, /*#__PURE__*/React.createElement("div", {
    className: "blockart-color-picker"
  }, /*#__PURE__*/React.createElement("div", {
    className: "blockart-color-palette"
  }, /*#__PURE__*/React.createElement(external_wp_blockEditor_namespaceObject.ColorPalette, {
    value: value !== null && value !== void 0 ? value : '',
    onChange: function onChange(color) {
      var _ref2 = (colorPickerRef === null || colorPickerRef === void 0 ? void 0 : colorPickerRef.current) || false,
        commitValues = _ref2.commitValues;
      if (color && commitValues) {
        commitValues({
          hex: color,
          source: 'hex'
        });
      }
      _onChange(color);
    },
    disableCustomColors: true,
    clearable: false,
    colors: [{
      name: (0,external_wp_i18n_namespaceObject.__)('Blue', 'blockart'),
      color: '#2871ff'
    }, {
      name: (0,external_wp_i18n_namespaceObject.__)('Dark Golden', 'blockart'),
      color: '#e89623'
    }, {
      name: (0,external_wp_i18n_namespaceObject.__)('Black', 'blockart'),
      color: '#000000'
    }, {
      name: (0,external_wp_i18n_namespaceObject.__)('White', 'blockart'),
      color: '#ffffff'
    }]
  })), /*#__PURE__*/React.createElement(external_wp_components_namespaceObject.ColorPicker, extends_extends({
    color: value !== null && value !== void 0 ? value : '',
    onChangeComplete: function onChangeComplete(color) {
      setSetting(color);
    }
  }, !_BLOCKART_.isWP59OrAbove && {
    ref: colorPickerRef
  }))))));
}));
;// CONCATENATED MODULE: ./src/blocks/components/toggle/index.js


var toggle_excluded = ["checked", "onChange", "label", "instanceId"];



/* harmony default export */ const toggle = ((0,external_wp_compose_namespaceObject.withInstanceId)(function (_ref) {
  var _ref$checked = _ref.checked,
    checked = _ref$checked === void 0 ? false : _ref$checked,
    _ref$onChange = _ref.onChange,
    onChange = _ref$onChange === void 0 ? function () {} : _ref$onChange,
    _ref$label = _ref.label,
    label = _ref$label === void 0 ? '' : _ref$label,
    id = _ref.instanceId,
    props = _objectWithoutProperties(_ref, toggle_excluded);
  return /*#__PURE__*/React.createElement("div", {
    className: classnames_default()('blockart-control', 'blockart-toggle', 'blockart-inline', {
      'is-checked': checked
    })
  }, /*#__PURE__*/React.createElement("div", {
    className: "blockart-toggle-head"
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: "blockart-toggle-".concat(id),
    className: "blockart-control-label blockart-toggle-label"
  }, label)), /*#__PURE__*/React.createElement("div", {
    className: "blockart-control-body blockart-toggle-body"
  }, /*#__PURE__*/React.createElement("input", extends_extends({
    id: "blockart-toggle-".concat(id),
    type: "checkbox",
    className: "blockart-toggle-checkbox",
    onChange: onChange
  }, props)), /*#__PURE__*/React.createElement("span", {
    className: "blockart-toggle-track"
  }), /*#__PURE__*/React.createElement("span", {
    className: "blockart-toggle-thumb"
  })));
}));
;// CONCATENATED MODULE: ./src/blocks/components/box-shadow/index.js

function box_shadow_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function box_shadow_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? box_shadow_ownKeys(Object(source), !0).forEach(function (key) { defineProperty_defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : box_shadow_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }





/* harmony default export */ const box_shadow = (function (_ref) {
  var _ref$value = _ref.value,
    enable = _ref$value.enable,
    color = _ref$value.color,
    verticalY = _ref$value.verticalY,
    horizontalX = _ref$value.horizontalX,
    blur = _ref$value.blur,
    spread = _ref$value.spread,
    position = _ref$value.position,
    _ref$value2 = _ref.value,
    value = _ref$value2 === void 0 ? {} : _ref$value2,
    _ref$onChange = _ref.onChange,
    onChange = _ref$onChange === void 0 ? function () {} : _ref$onChange,
    resetKey = _ref.resetKey;
  var setSetting = function setSetting(type, val) {
    var data = defineProperty_defineProperty({}, type, val);
    onChange(box_shadow_objectSpread(box_shadow_objectSpread({}, value), data));
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "blockart-control blockart-border"
  }, /*#__PURE__*/React.createElement("div", {
    className: "blockart-control-body blockart-border-body"
  }, /*#__PURE__*/React.createElement(toggle, {
    label: (0,external_wp_i18n_namespaceObject.__)('Box Shadow', 'blockart'),
    checked: enable || false,
    onChange: function onChange() {
      return setSetting('enable', !enable);
    }
  }), enable && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(components_color, {
    onChange: function onChange(val) {
      return setSetting('color', val);
    },
    value: color || '',
    label: (0,external_wp_i18n_namespaceObject.__)('Color', 'blockart'),
    resetKey: resetKey,
    innerResetKey: 'color'
  }), /*#__PURE__*/React.createElement(slider, {
    min: -100,
    max: 100,
    label: (0,external_wp_i18n_namespaceObject.__)('Horizontal-X', 'blockart'),
    value: horizontalX || 0,
    onChange: function onChange(val) {
      return setSetting('horizontalX', val);
    },
    step: 1,
    resetKey: resetKey,
    innerResetKey: 'horizontalX'
  }), /*#__PURE__*/React.createElement(slider, {
    min: -100,
    max: 100,
    label: (0,external_wp_i18n_namespaceObject.__)('Horizontal-Y', 'blockart'),
    value: verticalY || 0,
    onChange: function onChange(val) {
      return setSetting('verticalY', val);
    },
    step: 1,
    resetKey: resetKey,
    innerResetKey: 'verticalY'
  }), /*#__PURE__*/React.createElement(slider, {
    min: 0,
    max: 100,
    label: (0,external_wp_i18n_namespaceObject.__)('Blur', 'blockart'),
    value: blur || 0,
    onChange: function onChange(val) {
      return setSetting('blur', val);
    },
    step: 1,
    resetKey: resetKey,
    innerResetKey: 'blur'
  }), /*#__PURE__*/React.createElement(slider, {
    min: 0,
    max: 100,
    label: (0,external_wp_i18n_namespaceObject.__)('Spread', 'blockart'),
    value: spread || 0,
    onChange: function onChange(val) {
      return setSetting('spread', val);
    },
    step: 1,
    resetKey: resetKey,
    innerResetKey: 'spread'
  }), /*#__PURE__*/React.createElement(components_select, {
    label: (0,external_wp_i18n_namespaceObject.__)('Position', 'blockart'),
    onChange: function onChange(val) {
      return setSetting('position', val);
    },
    value: position || 'outline',
    options: [{
      label: (0,external_wp_i18n_namespaceObject.__)('Outline', 'blockart'),
      value: 'outline'
    }, {
      label: (0,external_wp_i18n_namespaceObject.__)('Inset', 'blockart'),
      value: 'inset'
    }]
  }))));
});
;// CONCATENATED MODULE: ./src/blocks/components/border/index.js

function border_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function border_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? border_ownKeys(Object(source), !0).forEach(function (key) { defineProperty_defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : border_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }




/* harmony default export */ const components_border = (function (_ref) {
  var _ref$value = _ref.value,
    type = _ref$value.type,
    size = _ref$value.size,
    radius = _ref$value.radius,
    color = _ref$value.color,
    _ref$onChange = _ref.onChange,
    onChange = _ref$onChange === void 0 ? function () {} : _ref$onChange,
    _ref$value2 = _ref.value,
    value = _ref$value2 === void 0 ? {} : _ref$value2,
    resetKey = _ref.resetKey;
  var setSetting = function setSetting(genre, val) {
    var data = defineProperty_defineProperty({}, genre, val);
    onChange(border_objectSpread(border_objectSpread({}, value), data));
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "blockart-control blockart-border"
  }, /*#__PURE__*/React.createElement("div", {
    className: "blockart-control-body blockart-border-body"
  }, /*#__PURE__*/React.createElement(components_select, {
    label: (0,external_wp_i18n_namespaceObject.__)('Type', 'blockart'),
    onChange: function onChange(val) {
      return setSetting('type', val);
    },
    value: type || 'none',
    options: [{
      label: (0,external_wp_i18n_namespaceObject.__)('None', 'blockart'),
      value: 'none'
    }, {
      label: (0,external_wp_i18n_namespaceObject.__)('Solid', 'blockart'),
      value: 'solid'
    }, {
      label: (0,external_wp_i18n_namespaceObject.__)('Double', 'blockart'),
      value: 'double'
    }, {
      label: (0,external_wp_i18n_namespaceObject.__)('Dashed', 'blockart'),
      value: 'dashed'
    }, {
      label: (0,external_wp_i18n_namespaceObject.__)('Dotted', 'blockart'),
      value: 'dotted'
    }, {
      label: (0,external_wp_i18n_namespaceObject.__)('Groove', 'blockart'),
      value: 'groove'
    }],
    resetKey: resetKey,
    innerResetKey: 'type'
  }), 'undefined' !== typeof type && 'none' !== type && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(components_color, {
    onChange: function onChange(val) {
      return setSetting('color', val);
    },
    value: color,
    label: (0,external_wp_i18n_namespaceObject.__)('Border Color', 'blockart'),
    resetKey: resetKey,
    innerResetKey: 'color'
  }), /*#__PURE__*/React.createElement(dimensions, {
    label: (0,external_wp_i18n_namespaceObject.__)('Size', 'blockart'),
    value: size,
    responsive: true,
    units: ['px', 'rem', 'em'],
    defaultUnit: "px",
    min: 0,
    onChange: function onChange(val) {
      return setSetting('size', val);
    },
    isLinked: true,
    resetKey: resetKey,
    innerResetKey: 'size'
  })), /*#__PURE__*/React.createElement(dimensions, {
    label: (0,external_wp_i18n_namespaceObject.__)('Radius', 'blockart'),
    value: radius,
    responsive: true,
    units: ['px', 'em', '%'],
    defaultUnit: "px",
    min: 0,
    onChange: function onChange(val) {
      return setSetting('radius', val);
    },
    isLinked: true,
    resetKey: resetKey,
    innerResetKey: 'radius'
  })));
});
;// CONCATENATED MODULE: external ["wp","hooks"]
const external_wp_hooks_namespaceObject = window["wp"]["hooks"];
;// CONCATENATED MODULE: ./src/blocks/components/gradient/index.js



/* harmony default export */ const components_gradient = (function (_ref) {
  var _ref$value = _ref.value,
    color1 = _ref$value.color1,
    location1 = _ref$value.location1,
    color2 = _ref$value.color2,
    location2 = _ref$value.location2,
    gradientType = _ref$value.type,
    angle = _ref$value.angle,
    value = _ref.value,
    _ref$onChange = _ref.onChange,
    onChange = _ref$onChange === void 0 ? function () {} : _ref$onChange;
  var setSetting = function setSetting(type, val) {
    var data = defineProperty_defineProperty({}, type, val);
    onChange(Object.assign({}, value, data));
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "blockart-control blockart-gradient"
  }, /*#__PURE__*/React.createElement("div", {
    className: "blockart-control-body blockart-gradient-body"
  }, /*#__PURE__*/React.createElement(components_color, {
    value: color1 || '',
    label: "Color 1",
    onChange: function onChange(val) {
      return setSetting('color1', val);
    }
  }), /*#__PURE__*/React.createElement(slider, {
    value: location1 || 0,
    onChange: function onChange(val) {
      return setSetting('location1', val);
    },
    min: 0,
    max: 100,
    inline: true,
    label: (0,external_wp_i18n_namespaceObject.__)('Location', 'blockart')
  }), /*#__PURE__*/React.createElement(components_color, {
    value: color2 || '',
    label: "Color 2",
    onChange: function onChange(val) {
      return setSetting('color2', val);
    }
  }), /*#__PURE__*/React.createElement(slider, {
    value: location2 || 0,
    onChange: function onChange(val) {
      return setSetting('location2', val);
    },
    min: 0,
    max: 100,
    inline: true,
    label: (0,external_wp_i18n_namespaceObject.__)('Location', 'blockart')
  }), /*#__PURE__*/React.createElement(components_select, {
    label: (0,external_wp_i18n_namespaceObject.__)('Type', 'blockart'),
    value: gradientType || 'linear',
    onChange: function onChange(val) {
      return setSetting('type', val);
    },
    options: [{
      label: (0,external_wp_i18n_namespaceObject.__)('Linear', 'blockart'),
      value: 'linear'
    }, {
      label: (0,external_wp_i18n_namespaceObject.__)('Radial', 'blockart'),
      value: 'radial'
    }]
  }), /*#__PURE__*/React.createElement(slider, {
    value: angle || 0,
    onChange: function onChange(val) {
      return setSetting('angle', val);
    },
    min: 0,
    max: 365,
    inline: true,
    label: (0,external_wp_i18n_namespaceObject.__)('Angle', 'blockart')
  })));
});
;// CONCATENATED MODULE: ./src/blocks/components/background-image/index.js

function background_image_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function background_image_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? background_image_ownKeys(Object(source), !0).forEach(function (key) { defineProperty_defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : background_image_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }






var BACKGROUND_IMAGE_POSITION_MAPPER = {
  'left top': '0% 0%',
  'left center': '0% 50%',
  'left bottom': '0% 100%',
  'center top': '50% 0%',
  'center center': '50% 50%',
  'center bottom': '50% 100%',
  'right top': '100% 0%',
  'right center': '100% 50%',
  'right bottom': '100% 100%'
};
/* harmony default export */ const background_image = (with_device_type(function (_ref) {
  var _ref$value = _ref.value,
    _ref$value$image = _ref$value.image,
    image = _ref$value$image === void 0 ? {} : _ref$value$image,
    _ref$value$position = _ref$value.position,
    position = _ref$value$position === void 0 ? {} : _ref$value$position,
    _ref$value$size = _ref$value.size,
    size = _ref$value$size === void 0 ? {} : _ref$value$size,
    _ref$value$repeat = _ref$value.repeat,
    repeat = _ref$value$repeat === void 0 ? {} : _ref$value$repeat,
    _ref$value$attachment = _ref$value.attachment,
    attachment = _ref$value$attachment === void 0 ? 'scroll' : _ref$value$attachment,
    _ref$value$customSize = _ref$value.customSizeDesktop,
    customSizeDesktop = _ref$value$customSize === void 0 ? '' : _ref$value$customSize,
    _ref$value$customSize2 = _ref$value.customSizeTablet,
    customSizeTablet = _ref$value$customSize2 === void 0 ? '' : _ref$value$customSize2,
    _ref$value$customSize3 = _ref$value.customSizeMobile,
    customSizeMobile = _ref$value$customSize3 === void 0 ? '' : _ref$value$customSize3,
    _ref$value2 = _ref.value,
    value = _ref$value2 === void 0 ? {} : _ref$value2,
    _ref$onChange = _ref.onChange,
    onChange = _ref$onChange === void 0 ? function () {} : _ref$onChange,
    deviceType = _ref.deviceType,
    DeviceSelector = _ref.deviceSelector;
  var setSetting = function setSetting(type, val) {
    var data = defineProperty_defineProperty({}, type, val);
    onChange(background_image_objectSpread(background_image_objectSpread({}, value), data));
  };
  var setCustomSize = function setCustomSize(val) {
    if ('desktop' === deviceType) {
      onChange(Object.assign({}, value, {
        customSizeDesktop: val
      }));
    } else if ('tablet' === deviceType) {
      onChange(Object.assign({}, value, {
        customSizeTablet: val
      }));
    } else {
      onChange(Object.assign({}, value, {
        customSizeMobile: val
      }));
    }
  };
  var focalPointValue;
  if (position !== null && position !== void 0 && position[deviceType]) {
    var temp = position[deviceType];
    if (temp === 'default') {
      temp = 'left top';
    }
    if (BACKGROUND_IMAGE_POSITION_MAPPER[temp]) {
      temp = BACKGROUND_IMAGE_POSITION_MAPPER[temp];
    }
    temp = temp.replaceAll('%', '').split(' ');
    focalPointValue = {
      x: parseFloat((parseFloat(temp[0]) / 100).toString()),
      y: parseFloat((parseFloat(temp[1]) / 100).toString())
    };
  }
  return /*#__PURE__*/React.createElement("div", {
    className: "blockart-control blockart-background-image"
  }, /*#__PURE__*/React.createElement("div", {
    className: "blockart-control-body blockart-background-image-body"
  }, /*#__PURE__*/React.createElement("div", {
    className: "blockart-control"
  }, /*#__PURE__*/React.createElement(external_wp_blockEditor_namespaceObject.MediaUpload, {
    onSelect: function onSelect(media) {
      if (!(media !== null && media !== void 0 && media.url)) {
        return;
      }
      var url = media.url,
        id = media.id,
        height = media.height,
        width = media.width,
        alt = media.alt;
      setSetting('image', {
        url: url,
        id: id,
        height: height,
        width: width,
        alt: alt
      });
    },
    allowedTypes: ['image'],
    render: function render(_ref2) {
      var open = _ref2.open;
      return /*#__PURE__*/React.createElement(React.Fragment, null, image !== null && image !== void 0 && image.url ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
        className: "blockart-control-head",
        style: {
          display: 'flex',
          alignItems: 'center',
          marginTop: '25px'
        }
      }, /*#__PURE__*/React.createElement("label", {
        className: "blockart-control-label"
      }, (0,external_wp_i18n_namespaceObject.__)('Position')), /*#__PURE__*/React.createElement(DeviceSelector, null)), /*#__PURE__*/React.createElement(external_wp_components_namespaceObject.FocalPointPicker, {
        url: image.url,
        value: focalPointValue,
        onChange: function onChange(_ref3) {
          var x = _ref3.x,
            y = _ref3.y;
          setSetting('position', background_image_objectSpread(background_image_objectSpread({}, position !== null && position !== void 0 ? position : {}), {}, defineProperty_defineProperty({}, deviceType, "".concat((x * 100).toFixed(2), "% ").concat((y * 100).toFixed(2), "%"))));
        }
      })) : /*#__PURE__*/React.createElement("div", {
        className: "blockart-media-placeholder blockart-media-preview",
        onClick: open,
        onKeyDown: function onKeyDown(e) {
          return 'Enter' === e.key && open;
        },
        role: "button",
        tabIndex: 0,
        title: (0,external_wp_i18n_namespaceObject.__)('Select Image', 'blockart')
      }, /*#__PURE__*/React.createElement("img", {
        src: placeholder,
        alt: (0,external_wp_i18n_namespaceObject.__)('blockart preview image', 'blockart')
      })), /*#__PURE__*/React.createElement(external_wp_components_namespaceObject.Button, {
        className: "blockart-media-button",
        onClick: open
      }, /*#__PURE__*/React.createElement(components_icon, {
        type: "controlIcon",
        name: "image",
        size: 20
      }), /*#__PURE__*/React.createElement("span", {
        className: "blockart-media-button-text"
      }, image !== null && image !== void 0 && image.url ? (0,external_wp_i18n_namespaceObject.__)('Change Image', 'blockart') : (0,external_wp_i18n_namespaceObject.__)('Select Image', 'blockart'))), (image === null || image === void 0 ? void 0 : image.url) && /*#__PURE__*/React.createElement(external_wp_components_namespaceObject.Button, {
        className: "blockart-media-delete",
        onClick: function onClick() {
          return setSetting('image', {});
        }
      }, /*#__PURE__*/React.createElement(components_icon, {
        type: "controlIcon",
        name: "trash",
        size: 20
      })));
    }
  })), (image === null || image === void 0 ? void 0 : image.url) && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(components_select, {
    label: (0,external_wp_i18n_namespaceObject.__)('Size', 'blockart'),
    value: size || {},
    onChange: function onChange(val) {
      return setSetting('size', val);
    },
    options: [{
      label: (0,external_wp_i18n_namespaceObject.__)('Default', 'blockart'),
      value: 'default'
    }, {
      label: (0,external_wp_i18n_namespaceObject.__)('Cover', 'blockart'),
      value: 'cover'
    }, {
      label: (0,external_wp_i18n_namespaceObject.__)('Contain', 'blockart'),
      value: 'contain'
    }, {
      label: (0,external_wp_i18n_namespaceObject.__)('Auto', 'blockart'),
      value: 'auto'
    }, {
      label: (0,external_wp_i18n_namespaceObject.__)('Custom', 'blockart'),
      value: 'custom'
    }],
    responsive: true,
    placeholder: (0,external_wp_i18n_namespaceObject.__)('Default', 'blockart')
  }), size && size[deviceType] && 'custom' === size[deviceType] && /*#__PURE__*/React.createElement(slider, {
    value: 'desktop' === deviceType ? customSizeDesktop || '' : 'tablet' === deviceType ? customSizeTablet || '' : customSizeMobile || '' // eslint-disable-line no-nested-ternary
    ,
    label: (0,external_wp_i18n_namespaceObject.__)('Width', 'blockart'),
    min: 0,
    max: 1000,
    defaultUnit: "%",
    units: ['px', '%', 'em', 'vw'],
    onChange: function onChange(val) {
      return setCustomSize(val);
    }
  }), /*#__PURE__*/React.createElement(components_select, {
    label: (0,external_wp_i18n_namespaceObject.__)('Repeat', 'blockart'),
    value: repeat || {},
    onChange: function onChange(val) {
      return setSetting('repeat', val);
    },
    options: [{
      label: (0,external_wp_i18n_namespaceObject.__)('Default', 'blockart'),
      value: 'default'
    }, {
      label: (0,external_wp_i18n_namespaceObject.__)('No Repeat', 'blockart'),
      value: 'no-repeat'
    }, {
      label: (0,external_wp_i18n_namespaceObject.__)('Repeat', 'blockart'),
      value: 'repeat'
    }, {
      label: (0,external_wp_i18n_namespaceObject.__)('Repeat Vertically', 'blockart'),
      value: 'repeat-y'
    }, {
      label: (0,external_wp_i18n_namespaceObject.__)('Repeat Horizontally', 'blockart'),
      value: 'repeat-x'
    }],
    responsive: true,
    placeholder: (0,external_wp_i18n_namespaceObject.__)('Default', 'blockart')
  }), /*#__PURE__*/React.createElement(components_select, {
    label: (0,external_wp_i18n_namespaceObject.__)('Attachment', 'blockart'),
    value: attachment || '',
    onChange: function onChange(val) {
      return setSetting('attachment', val);
    },
    options: [{
      label: (0,external_wp_i18n_namespaceObject.__)('Default', 'blockart'),
      value: 'default'
    }, {
      label: (0,external_wp_i18n_namespaceObject.__)('Scroll', 'blockart'),
      value: 'scroll'
    }, {
      label: (0,external_wp_i18n_namespaceObject.__)('Fixed', 'blockart'),
      value: 'fixed'
    }],
    placeholder: (0,external_wp_i18n_namespaceObject.__)('Default', 'blockart')
  }))));
}));
;// CONCATENATED MODULE: ./src/blocks/components/background-video/index.js

function background_video_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function background_video_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? background_video_ownKeys(Object(source), !0).forEach(function (key) { defineProperty_defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : background_video_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }


/* harmony default export */ const background_video = (function (_ref) {
  var _ref$value = _ref.value,
    video = _ref$value.video,
    loop = _ref$value.loop,
    mute = _ref$value.mute,
    image = _ref$value.image,
    position = _ref$value.position,
    size = _ref$value.size,
    repeat = _ref$value.repeat,
    attachment = _ref$value.attachment,
    _ref$value2 = _ref.value,
    value = _ref$value2 === void 0 ? {} : _ref$value2,
    _ref$onChange = _ref.onChange,
    onChange = _ref$onChange === void 0 ? function () {} : _ref$onChange;
  var setSetting = function setSetting(type, val) {
    var data = defineProperty_defineProperty({}, type, val);
    onChange(background_video_objectSpread(background_video_objectSpread({}, value), data));
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "blockart-control blockart-background-video"
  }, /*#__PURE__*/React.createElement("div", {
    className: "blockart-control-body blockart-background-video-body"
  }, /*#__PURE__*/React.createElement(media, {
    value: video || '',
    onChange: function onChange(val) {
      return setSetting('video', val);
    },
    label: (0,external_wp_i18n_namespaceObject.__)('Upload your Video', 'blockart'),
    type: "video"
  }), /*#__PURE__*/React.createElement(toggle, {
    label: (0,external_wp_i18n_namespaceObject.__)('Loop Video', 'blockart'),
    checked: loop || false,
    onChange: function onChange() {
      return setSetting('loop', !loop);
    }
  }), /*#__PURE__*/React.createElement(toggle, {
    label: (0,external_wp_i18n_namespaceObject.__)('Mute Video', 'blockart'),
    checked: mute || false,
    onChange: function onChange() {
      return setSetting('mute', !mute);
    }
  }), /*#__PURE__*/React.createElement(media, {
    value: image || '',
    onChange: function onChange(val) {
      return setSetting('image', val);
    },
    label: (0,external_wp_i18n_namespaceObject.__)('Background Image', 'blockart')
  }), /*#__PURE__*/React.createElement(components_select, {
    label: (0,external_wp_i18n_namespaceObject.__)('Position', 'blockart'),
    value: position || 'center center',
    onChange: function onChange(val) {
      return setSetting('position', val);
    },
    options: [{
      label: (0,external_wp_i18n_namespaceObject.__)('Left Top', 'blockart'),
      value: 'left top'
    }, {
      label: (0,external_wp_i18n_namespaceObject.__)('Left Center', 'blockart'),
      value: 'left center'
    }, {
      label: (0,external_wp_i18n_namespaceObject.__)('Left Bottom', 'blockart'),
      value: 'left bottom'
    }, {
      label: (0,external_wp_i18n_namespaceObject.__)('Right Top', 'blockart'),
      value: 'right top'
    }, {
      label: (0,external_wp_i18n_namespaceObject.__)('Right Center', 'blockart'),
      value: 'right center'
    }, {
      label: (0,external_wp_i18n_namespaceObject.__)('Right Bottom', 'blockart'),
      value: 'right bottom'
    }, {
      label: (0,external_wp_i18n_namespaceObject.__)('Center Top', 'blockart'),
      value: 'center top'
    }, {
      label: (0,external_wp_i18n_namespaceObject.__)('Center Center', 'blockart'),
      value: 'center center'
    }, {
      label: (0,external_wp_i18n_namespaceObject.__)('Center Bottom', 'blockart'),
      value: 'center bottom'
    }]
  }), /*#__PURE__*/React.createElement(components_select, {
    label: (0,external_wp_i18n_namespaceObject.__)('Size', 'blockart'),
    value: size || 'auto',
    onChange: function onChange(val) {
      return setSetting('size', val);
    },
    options: [{
      label: (0,external_wp_i18n_namespaceObject.__)('Cover', 'blockart'),
      value: 'cover'
    }, {
      label: (0,external_wp_i18n_namespaceObject.__)('Contain', 'blockart'),
      value: 'contain'
    }, {
      label: (0,external_wp_i18n_namespaceObject.__)('Auto', 'blockart'),
      value: 'auto'
    }]
  }), /*#__PURE__*/React.createElement(components_select, {
    label: (0,external_wp_i18n_namespaceObject.__)('Repeat', 'blockart'),
    value: repeat || 'repeat',
    onChange: function onChange(val) {
      return setSetting('repeat', val);
    },
    options: [{
      label: (0,external_wp_i18n_namespaceObject.__)('No Repeat', 'blockart'),
      value: 'no-repeat'
    }, {
      label: (0,external_wp_i18n_namespaceObject.__)('Repeat', 'blockart'),
      value: 'repeat'
    }, {
      label: (0,external_wp_i18n_namespaceObject.__)('Repeat Vertically', 'blockart'),
      value: 'repeat-y'
    }, {
      label: (0,external_wp_i18n_namespaceObject.__)('Repeat Horizontally', 'blockart'),
      value: 'repeat-x'
    }]
  }), /*#__PURE__*/React.createElement(components_select, {
    label: (0,external_wp_i18n_namespaceObject.__)('Attachment', 'blockart'),
    value: attachment || 'scroll',
    onChange: function onChange(val) {
      return setSetting('attachment', val);
    },
    options: [{
      label: (0,external_wp_i18n_namespaceObject.__)('Scroll', 'blockart'),
      value: 'scroll'
    }, {
      label: (0,external_wp_i18n_namespaceObject.__)('Fixed', 'blockart'),
      value: 'fixed'
    }]
  })));
});
;// CONCATENATED MODULE: ./src/blocks/components/background/index.js

function background_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function background_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? background_ownKeys(Object(source), !0).forEach(function (key) { defineProperty_defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : background_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }










/* harmony default export */ const components_background = (function (_ref) {
  var _ref$value = _ref.value,
    type = _ref$value.type,
    color = _ref$value.color,
    gradient = _ref$value.gradient,
    image = _ref$value.image,
    video = _ref$value.video,
    _ref$value2 = _ref.value,
    value = _ref$value2 === void 0 ? {} : _ref$value2,
    _ref$label = _ref.label,
    label = _ref$label === void 0 ? '' : _ref$label,
    _ref$onChange = _ref.onChange,
    onChange = _ref$onChange === void 0 ? function () {} : _ref$onChange,
    resetKey = _ref.resetKey;
  var bgTypes = (0,external_wp_hooks_namespaceObject.applyFilters)('blockart.background.type', ['color', 'image']);
  var setSetting = function setSetting(genre, val) {
    var data = defineProperty_defineProperty({}, genre, val);
    onChange(background_objectSpread(background_objectSpread({}, value), data));
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "blockart-control blockart-background"
  }, /*#__PURE__*/React.createElement("div", {
    className: "blockart-control-head blockart-background-head"
  }, /*#__PURE__*/React.createElement("label", {
    htmlFor: "blockart-background",
    className: "blockart-control-label"
  }, label || ''), /*#__PURE__*/React.createElement("div", {
    className: "blockart-background-types"
  }, bgTypes.map(function (bgType) {
    return /*#__PURE__*/React.createElement(external_wp_components_namespaceObject.Button, {
      key: bgType,
      className: classnames_default()('blockart-background-type', {
        'is-active': (type || '') === bgType
      }),
      onClick: function onClick() {
        return setSetting('type', bgType);
      }
    }, /*#__PURE__*/React.createElement(components_icon, {
      type: "controlIcon",
      name: bgType,
      size: 22
    }));
  }))), /*#__PURE__*/React.createElement("div", {
    className: "blockart-control-body blockart-background-body"
  }, 'color' === (type || 'color') && /*#__PURE__*/React.createElement(components_color, {
    label: (0,external_wp_i18n_namespaceObject.__)('Color', 'blockart'),
    onChange: function onChange(val) {
      return setSetting('color', val);
    },
    value: color,
    resetKey: resetKey,
    innerResetKey: 'color'
  }), 'gradient' === (type || 'color') && /*#__PURE__*/React.createElement(components_gradient, {
    onChange: function onChange(val) {
      return setSetting('gradient', val);
    },
    value: gradient || {},
    resetKey: resetKey,
    innerResetKey: 'gradient'
  }), 'image' === (type || 'color') && /*#__PURE__*/React.createElement(background_image, {
    onChange: function onChange(val) {
      return setSetting('image', val);
    },
    value: image || {}
  }), 'video' === (type || 'color') && /*#__PURE__*/React.createElement(background_video, {
    onChange: function onChange(val) {
      return setSetting('video', val);
    },
    value: video || {}
  })));
});
;// CONCATENATED MODULE: ./src/blocks/components/icon-selector/index.js


function icon_selector_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function icon_selector_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? icon_selector_ownKeys(Object(source), !0).forEach(function (key) { defineProperty_defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : icon_selector_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }






/* harmony default export */ const icon_selector = (function (_ref) {
  var _ref$value = _ref.value,
    enable = _ref$value.enable,
    icon = _ref$value.icon,
    value = _ref.value,
    _ref$onChange = _ref.onChange,
    _onChange = _ref$onChange === void 0 ? function () {} : _ref$onChange,
    label = _ref.label,
    _ref$search = _ref.search,
    search = _ref$search === void 0 ? true : _ref$search;
  var _useState = (0,external_wp_element_namespaceObject.useState)(''),
    _useState2 = slicedToArray_slicedToArray(_useState, 2),
    searchTerm = _useState2[0],
    setSearchTerm = _useState2[1];
  var finalIcons = (0,external_wp_element_namespaceObject.useMemo)(function () {
    return frontendIcons.map(function (key) {
      return {
        id: key,
        title: key.replace(/-/g, ' ').replace(/ o/g, '').replace(/(^\w|\s\w)/g, function (t) {
          return t.toUpperCase();
        })
      };
    }).filter(function (_ref2) {
      var title = _ref2.title;
      return title.toLowerCase().includes(searchTerm.toLowerCase());
    });
  }, [searchTerm]);
  return /*#__PURE__*/React.createElement("div", {
    className: "blockart-control blockart-icon-selector"
  }, /*#__PURE__*/React.createElement("div", {
    className: "blockart-control-head blockart-icon-selector-head"
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: "blockart-icon-selector",
    className: "blockart-control-label blockart-icon-selector-label"
  }, label), /*#__PURE__*/React.createElement(toggle, {
    checked: enable || false,
    onChange: function onChange() {
      return _onChange(icon_selector_objectSpread(icon_selector_objectSpread({}, value), {}, {
        enable: !enable
      }));
    }
  })), enable && /*#__PURE__*/React.createElement("div", {
    className: "blockart-control blockart-icon-selector-body"
  }, search && /*#__PURE__*/React.createElement("input", {
    type: "text",
    value: searchTerm,
    placeholder: (0,external_wp_i18n_namespaceObject.__)('Search…', 'blockart'),
    onChange: function onChange(e) {
      return setSearchTerm(e.target.value);
    },
    autoComplete: "off"
  }), /*#__PURE__*/React.createElement("div", {
    className: "blockart-icon-list-icons"
  }, (finalIcons === null || finalIcons === void 0 ? void 0 : finalIcons.length) > 0 ? finalIcons.map(function (_ref3) {
    var id = _ref3.id,
      title = _ref3.title;
    return /*#__PURE__*/React.createElement("span", {
      onKeyDown: function onKeyDown() {},
      key: id,
      className: classnames_default()('blockart-icon-btn', {
        'is-active': icon === id
      }),
      role: "button",
      tabIndex: 0,
      onClick: function onClick() {
        return _onChange(icon_selector_objectSpread(icon_selector_objectSpread({}, value), {}, {
          icon: id
        }));
      },
      title: title
    }, /*#__PURE__*/React.createElement(components_icon, {
      type: "frontendIcon",
      name: id
    }));
  }) : /*#__PURE__*/React.createElement("p", {
    className: "blockart-icon-list-no-icons",
    style: {
      gridColumn: '1/-1',
      margin: 0
    }
  }, (0,external_wp_i18n_namespaceObject.__)('Icons not found!', 'blockart')))));
});
;// CONCATENATED MODULE: ./src/blocks/helpers/auto-recover-blocks.js

function auto_recover_blocks_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function auto_recover_blocks_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? auto_recover_blocks_ownKeys(Object(source), !0).forEach(function (key) { defineProperty_defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : auto_recover_blocks_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }


var subscribeOnceWhen = function subscribeOnceWhen(predicate, callback) {
  var unsubscribe = (0,external_wp_data_namespaceObject.subscribe)(function () {
    if (predicate()) {
      setTimeout(function () {
        callback();
      }, 500);
      unsubscribe();
    }
  });
  return unsubscribe;
};
var isBlocksLoaded = function isBlocksLoaded() {
  var _select = (0,external_wp_data_namespaceObject.select)('core/block-editor'),
    getBlocks = _select.getBlocks;
  return getBlocks().length > 0;
};
var recoverBlock = function recoverBlock(_ref) {
  var name = _ref.name,
    attributes = _ref.attributes,
    innerBlocks = _ref.innerBlocks;
  return (0,external_wp_blocks_namespaceObject.createBlock)(name, attributes, innerBlocks);
};
var getInvalidBlocks = function getInvalidBlocks(blocks) {
  return blocks.reduce(function (invalidBlocks, block) {
    if (!block.isValid && block.name.includes('blockart')) {
      invalidBlocks.push(block);
    }
    if (block.innerBlocks.length > 0) {
      var invalidInnerBlocks = getInvalidBlocks(block.innerBlocks);
      if (invalidInnerBlocks.length > 0) {
        invalidBlocks = invalidBlocks.concat(invalidInnerBlocks);
      }
    }
    return invalidBlocks;
  }, []);
};
var recoverBlocks = function recoverBlocks() {
  var _window, _window2, _blocks;
  var _dispatch = (0,external_wp_data_namespaceObject.dispatch)('core/block-editor'),
    replaceBlock = _dispatch.replaceBlock;
  var blocks;
  if ('widgets' === ((_window = window) === null || _window === void 0 ? void 0 : _window.pagenow) || 'customize' === ((_window2 = window) === null || _window2 === void 0 ? void 0 : _window2.pagenow)) {
    var widgetAreas = (0,external_wp_data_namespaceObject.select)('core/block-editor').getBlocks();
    blocks = widgetAreas.map(function (widgetArea) {
      var innerBlocks = (0,external_wp_data_namespaceObject.select)('core/block-editor').getBlocks(widgetArea.clientId);
      return auto_recover_blocks_objectSpread(auto_recover_blocks_objectSpread({}, widgetArea), {}, {
        innerBlocks: innerBlocks
      });
    });
  } else {
    blocks = (0,external_wp_data_namespaceObject.select)('core/block-editor').getBlocks();
  }
  if ((_blocks = blocks) !== null && _blocks !== void 0 && _blocks.length) {
    var invalidBlocks = getInvalidBlocks(blocks);
    if (invalidBlocks !== null && invalidBlocks !== void 0 && invalidBlocks.length) {
      invalidBlocks.forEach(function (oldBlock) {
        var newBlock = recoverBlock(oldBlock);
        if (newBlock.isValid) {
          replaceBlock(oldBlock.clientId, newBlock);
        }
      });
    }
  }
};
var run = function run() {
  return new Promise(function (resolve) {
    subscribeOnceWhen(isBlocksLoaded, function () {
      recoverBlocks();
      setTimeout(function () {
        return resolve();
      }, 200);
    });
  });
};
/* harmony default export */ const auto_recover_blocks = (function () {
  run().then(function () {});
});
;// CONCATENATED MODULE: ./src/blocks/helpers/update-block-category-icon.js

/* harmony default export */ const update_block_category_icon = (function () {
  (0,external_wp_blocks_namespaceObject.updateCategory)('blockart', {
    icon: /*#__PURE__*/React.createElement("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M22 22H2V2h20zM3 21h18V3H3z",
      fill: "#0369fc"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M13.46 10l-1.39-5-1.39 5zm.92 3H9.77l-1 4.46V19h6.4v-1.52z",
      fill: "#005cff",
      fillRule: "evenodd"
    }))
  });
});
;// CONCATENATED MODULE: external ["wp","domReady"]
const external_wp_domReady_namespaceObject = window["wp"]["domReady"];
var external_wp_domReady_default = /*#__PURE__*/__webpack_require__.n(external_wp_domReady_namespaceObject);
;// CONCATENATED MODULE: ./src/blocks/helpers/add-toolbar-library-button.js





var _wp$element = wp.element,
  createRoot = _wp$element.createRoot,
  render = _wp$element.render;
var renderImportButton = function renderImportButton(Component, root) {
  if (createRoot) {
    createRoot(root).render( /*#__PURE__*/React.createElement(Component, null));
  } else {
    render( /*#__PURE__*/React.createElement(Component, null), root);
  }
};
var ImportButton = function ImportButton() {
  return /*#__PURE__*/React.createElement(external_wp_components_namespaceObject.ToolbarButton, {
    className: "blockart-library-button",
    icon: /*#__PURE__*/React.createElement("svg", {
      width: 20,
      height: 20,
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M22 22H2V2h20zM3 21h18V3H3z",
      fill: "#fff"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M13.46 10l-1.39-5-1.39 5zm.92 3H9.77l-1 4.46V19h6.4v-1.52z",
      fill: "#fff",
      fillRule: "evenodd"
    })),
    onClick: function onClick() {
      var _dispatch = (0,external_wp_data_namespaceObject.dispatch)('core/block-editor'),
        insertBlocks = _dispatch.insertBlocks;
      insertBlocks((0,external_wp_blocks_namespaceObject.createBlock)('blockart/section', {
        hasModal: true,
        modalOnly: true
      }));
    }
  }, (0,external_wp_i18n_namespaceObject.__)('BlockArt Library', 'blockart'));
};
/* harmony default export */ const add_toolbar_library_button = (function () {
  external_wp_domReady_default()(function () {
    if ('widgets' === window.pagenow || 'customize' === window.pagenow) return;
    var timeout = null;
    var unsubscribe = (0,external_wp_data_namespaceObject.subscribe)(function () {
      var toolbar = document.querySelector('.edit-post-header-toolbar');
      if (!toolbar) return;
      var wrapper = document.createElement('div');
      wrapper.classList.add('blockart-library-button-wrapper');
      if (!toolbar.querySelector('.blockart-library-button-wrapper')) {
        renderImportButton(ImportButton, wrapper);
        toolbar.appendChild(wrapper);
      }
      if (timeout) clearTimeout(timeout);
      timeout = setTimeout(function () {
        if (document.querySelector('.blockart-import-button-wrapper')) {
          unsubscribe();
        }
      }, 0);
    });
  });
});
;// CONCATENATED MODULE: ./src/blocks/helpers/update-block-attributes.js

var BACKGROUND_ATTRIBUTE_KEYS = ['background', 'hoverBackground', 'background1', 'background2', 'hoverBackground1', 'hoverBackground2'];
/* harmony default export */ const update_block_attributes = (function () {
  (0,external_wp_hooks_namespaceObject.addFilter)('blocks.getBlockAttributes', 'blockart/update-background-attribute', function (attrs, block) {
    if (block.name.startsWith('blockart/')) {
      for (var _i = 0, _BACKGROUND_ATTRIBUTE = BACKGROUND_ATTRIBUTE_KEYS; _i < _BACKGROUND_ATTRIBUTE.length; _i++) {
        var _attrs$key, _attrs$key$image, _attrs$key$image$imag;
        var key = _BACKGROUND_ATTRIBUTE[_i];
        if (attrs !== null && attrs !== void 0 && (_attrs$key = attrs[key]) !== null && _attrs$key !== void 0 && (_attrs$key$image = _attrs$key.image) !== null && _attrs$key$image !== void 0 && (_attrs$key$image$imag = _attrs$key$image.image) !== null && _attrs$key$image$imag !== void 0 && _attrs$key$image$imag.type) {
          var _attrs$key$image$imag2, _attrs$key$image$imag3, _attrs$key$image$imag4, _attrs$key$image$imag5, _attrs$key$image$imag6, _attrs$key$image$imag7;
          attrs[key].image.image.url = ((_attrs$key$image$imag2 = (_attrs$key$image$imag3 = attrs[key].image.image) === null || _attrs$key$image$imag3 === void 0 ? void 0 : _attrs$key$image$imag3.local) !== null && _attrs$key$image$imag2 !== void 0 ? _attrs$key$image$imag2 : '') || ((_attrs$key$image$imag4 = (_attrs$key$image$imag5 = attrs[key].image.image) === null || _attrs$key$image$imag5 === void 0 ? void 0 : _attrs$key$image$imag5.external) !== null && _attrs$key$image$imag4 !== void 0 ? _attrs$key$image$imag4 : '');
          delete attrs[key].image.image.type;
          (_attrs$key$image$imag6 = attrs[key].image.image) === null || _attrs$key$image$imag6 === void 0 ? true : delete _attrs$key$image$imag6.local;
          (_attrs$key$image$imag7 = attrs[key].image.image) === null || _attrs$key$image$imag7 === void 0 ? true : delete _attrs$key$image$imag7.external;
        }
      }
    }
    return attrs;
  });
});
;// CONCATENATED MODULE: ./src/blocks/helpers/save-images-locally.js



function save_images_locally_createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = save_images_locally_unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function save_images_locally_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return save_images_locally_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return save_images_locally_arrayLikeToArray(o, minLen); }
function save_images_locally_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }

var URL_REGEX = /\b((https?|ftp|file):\/\/|(www|ftp)\.)[-A-Z0-9+&@#\/%?=~_|$!:,.;]*[A-Z0-9+&@#\/%=~_|$]/ig;
var IMAGE_URL_REGEX = /^((https?:\/\/)|(www\.))([a-z\d-].?)+(:\d+)?\/[\w\-]+\.(jpg|png|gif|jpeg)\/?$/i;
/* harmony default export */ const save_images_locally = (/*#__PURE__*/_asyncToGenerator( /*#__PURE__*/external_regeneratorRuntime_default().mark(function _callee() {
  var content,
    urls,
    imageURLs,
    _iterator,
    _step,
    _url,
    _i,
    _imageURLs,
    imageURL,
    _yield$apiFetch,
    sourceURL,
    url,
    _args = arguments;
  return external_regeneratorRuntime_default().wrap(function _callee$(_context) {
    while (1) switch (_context.prev = _context.next) {
      case 0:
        content = _args.length > 0 && _args[0] !== undefined ? _args[0] : '';
        urls = content.match(URL_REGEX) || [];
        urls = _toConsumableArray(new Set(urls));
        if (urls.length) {
          _context.next = 5;
          break;
        }
        return _context.abrupt("return", content);
      case 5:
        imageURLs = [];
        _iterator = save_images_locally_createForOfIteratorHelper(urls);
        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            _url = _step.value;
            if (IMAGE_URL_REGEX.test(_url)) {
              imageURLs.push(_url);
            }
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
        if (imageURLs.length) {
          _context.next = 10;
          break;
        }
        return _context.abrupt("return", content);
      case 10:
        _i = 0, _imageURLs = imageURLs;
      case 11:
        if (!(_i < _imageURLs.length)) {
          _context.next = 27;
          break;
        }
        imageURL = _imageURLs[_i];
        _context.prev = 13;
        _context.next = 16;
        return external_wp_apiFetch_default()({
          path: '/blockart/v1/image-import',
          method: 'POST',
          data: {
            url: imageURL
          }
        });
      case 16:
        _yield$apiFetch = _context.sent;
        sourceURL = _yield$apiFetch.sourceURL;
        url = _yield$apiFetch.url;
        if (sourceURL && url) {
          content = content.replaceAll(sourceURL, url);
        }
        _context.next = 24;
        break;
      case 22:
        _context.prev = 22;
        _context.t0 = _context["catch"](13);
      case 24:
        _i++;
        _context.next = 11;
        break;
      case 27:
        return _context.abrupt("return", content);
      case 28:
      case "end":
        return _context.stop();
    }
  }, _callee, null, [[13, 22]]);
})));
;// CONCATENATED MODULE: ./src/blocks/helpers/index.js





;// CONCATENATED MODULE: ./node_modules/axios/lib/helpers/bind.js


function bind(fn, thisArg) {
  return function wrap() {
    return fn.apply(thisArg, arguments);
  };
}

;// CONCATENATED MODULE: ./node_modules/axios/lib/utils.js




// utils is a library of generic helper functions non-specific to axios

const {toString: utils_toString} = Object.prototype;
const {getPrototypeOf} = Object;

const kindOf = (cache => thing => {
    const str = utils_toString.call(thing);
    return cache[str] || (cache[str] = str.slice(8, -1).toLowerCase());
})(Object.create(null));

const kindOfTest = (type) => {
  type = type.toLowerCase();
  return (thing) => kindOf(thing) === type
}

const typeOfTest = type => thing => typeof thing === type;

/**
 * Determine if a value is an Array
 *
 * @param {Object} val The value to test
 *
 * @returns {boolean} True if value is an Array, otherwise false
 */
const {isArray: utils_isArray} = Array;

/**
 * Determine if a value is undefined
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if the value is undefined, otherwise false
 */
const utils_isUndefined = typeOfTest('undefined');

/**
 * Determine if a value is a Buffer
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a Buffer, otherwise false
 */
function isBuffer(val) {
  return val !== null && !utils_isUndefined(val) && val.constructor !== null && !utils_isUndefined(val.constructor)
    && isFunction(val.constructor.isBuffer) && val.constructor.isBuffer(val);
}

/**
 * Determine if a value is an ArrayBuffer
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is an ArrayBuffer, otherwise false
 */
const isArrayBuffer = kindOfTest('ArrayBuffer');


/**
 * Determine if a value is a view on an ArrayBuffer
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
 */
function isArrayBufferView(val) {
  let result;
  if ((typeof ArrayBuffer !== 'undefined') && (ArrayBuffer.isView)) {
    result = ArrayBuffer.isView(val);
  } else {
    result = (val) && (val.buffer) && (isArrayBuffer(val.buffer));
  }
  return result;
}

/**
 * Determine if a value is a String
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a String, otherwise false
 */
const utils_isString = typeOfTest('string');

/**
 * Determine if a value is a Function
 *
 * @param {*} val The value to test
 * @returns {boolean} True if value is a Function, otherwise false
 */
const isFunction = typeOfTest('function');

/**
 * Determine if a value is a Number
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a Number, otherwise false
 */
const isNumber = typeOfTest('number');

/**
 * Determine if a value is an Object
 *
 * @param {*} thing The value to test
 *
 * @returns {boolean} True if value is an Object, otherwise false
 */
const utils_isObject = (thing) => thing !== null && typeof thing === 'object';

/**
 * Determine if a value is a Boolean
 *
 * @param {*} thing The value to test
 * @returns {boolean} True if value is a Boolean, otherwise false
 */
const isBoolean = thing => thing === true || thing === false;

/**
 * Determine if a value is a plain Object
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a plain Object, otherwise false
 */
const isPlainObject = (val) => {
  if (kindOf(val) !== 'object') {
    return false;
  }

  const prototype = getPrototypeOf(val);
  return (prototype === null || prototype === Object.prototype || Object.getPrototypeOf(prototype) === null) && !(Symbol.toStringTag in val) && !(Symbol.iterator in val);
}

/**
 * Determine if a value is a Date
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a Date, otherwise false
 */
const isDate = kindOfTest('Date');

/**
 * Determine if a value is a File
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a File, otherwise false
 */
const isFile = kindOfTest('File');

/**
 * Determine if a value is a Blob
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a Blob, otherwise false
 */
const isBlob = kindOfTest('Blob');

/**
 * Determine if a value is a FileList
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a File, otherwise false
 */
const isFileList = kindOfTest('FileList');

/**
 * Determine if a value is a Stream
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a Stream, otherwise false
 */
const isStream = (val) => utils_isObject(val) && isFunction(val.pipe);

/**
 * Determine if a value is a FormData
 *
 * @param {*} thing The value to test
 *
 * @returns {boolean} True if value is an FormData, otherwise false
 */
const isFormData = (thing) => {
  const pattern = '[object FormData]';
  return thing && (
    (typeof FormData === 'function' && thing instanceof FormData) ||
    utils_toString.call(thing) === pattern ||
    (isFunction(thing.toString) && thing.toString() === pattern)
  );
}

/**
 * Determine if a value is a URLSearchParams object
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a URLSearchParams object, otherwise false
 */
const isURLSearchParams = kindOfTest('URLSearchParams');

/**
 * Trim excess whitespace off the beginning and end of a string
 *
 * @param {String} str The String to trim
 *
 * @returns {String} The String freed of excess whitespace
 */
const trim = (str) => str.trim ?
  str.trim() : str.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');

/**
 * Iterate over an Array or an Object invoking a function for each item.
 *
 * If `obj` is an Array callback will be called passing
 * the value, index, and complete array for each item.
 *
 * If 'obj' is an Object callback will be called passing
 * the value, key, and complete object for each property.
 *
 * @param {Object|Array} obj The object to iterate
 * @param {Function} fn The callback to invoke for each item
 *
 * @param {Boolean} [allOwnKeys = false]
 * @returns {any}
 */
function forEach(obj, fn, {allOwnKeys = false} = {}) {
  // Don't bother if no value provided
  if (obj === null || typeof obj === 'undefined') {
    return;
  }

  let i;
  let l;

  // Force an array if not already something iterable
  if (typeof obj !== 'object') {
    /*eslint no-param-reassign:0*/
    obj = [obj];
  }

  if (utils_isArray(obj)) {
    // Iterate over array values
    for (i = 0, l = obj.length; i < l; i++) {
      fn.call(null, obj[i], i, obj);
    }
  } else {
    // Iterate over object keys
    const keys = allOwnKeys ? Object.getOwnPropertyNames(obj) : Object.keys(obj);
    const len = keys.length;
    let key;

    for (i = 0; i < len; i++) {
      key = keys[i];
      fn.call(null, obj[key], key, obj);
    }
  }
}

function findKey(obj, key) {
  key = key.toLowerCase();
  const keys = Object.keys(obj);
  let i = keys.length;
  let _key;
  while (i-- > 0) {
    _key = keys[i];
    if (key === _key.toLowerCase()) {
      return _key;
    }
  }
  return null;
}

const _global = (() => {
  /*eslint no-undef:0*/
  if (typeof globalThis !== "undefined") return globalThis;
  return typeof self !== "undefined" ? self : (typeof window !== 'undefined' ? window : global)
})();

const isContextDefined = (context) => !utils_isUndefined(context) && context !== _global;

/**
 * Accepts varargs expecting each argument to be an object, then
 * immutably merges the properties of each object and returns result.
 *
 * When multiple objects contain the same key the later object in
 * the arguments list will take precedence.
 *
 * Example:
 *
 * ```js
 * var result = merge({foo: 123}, {foo: 456});
 * console.log(result.foo); // outputs 456
 * ```
 *
 * @param {Object} obj1 Object to merge
 *
 * @returns {Object} Result of all merge properties
 */
function merge(/* obj1, obj2, obj3, ... */) {
  const {caseless} = isContextDefined(this) && this || {};
  const result = {};
  const assignValue = (val, key) => {
    const targetKey = caseless && findKey(result, key) || key;
    if (isPlainObject(result[targetKey]) && isPlainObject(val)) {
      result[targetKey] = merge(result[targetKey], val);
    } else if (isPlainObject(val)) {
      result[targetKey] = merge({}, val);
    } else if (utils_isArray(val)) {
      result[targetKey] = val.slice();
    } else {
      result[targetKey] = val;
    }
  }

  for (let i = 0, l = arguments.length; i < l; i++) {
    arguments[i] && forEach(arguments[i], assignValue);
  }
  return result;
}

/**
 * Extends object a by mutably adding to it the properties of object b.
 *
 * @param {Object} a The object to be extended
 * @param {Object} b The object to copy properties from
 * @param {Object} thisArg The object to bind function to
 *
 * @param {Boolean} [allOwnKeys]
 * @returns {Object} The resulting value of object a
 */
const extend = (a, b, thisArg, {allOwnKeys}= {}) => {
  forEach(b, (val, key) => {
    if (thisArg && isFunction(val)) {
      a[key] = bind(val, thisArg);
    } else {
      a[key] = val;
    }
  }, {allOwnKeys});
  return a;
}

/**
 * Remove byte order marker. This catches EF BB BF (the UTF-8 BOM)
 *
 * @param {string} content with BOM
 *
 * @returns {string} content value without BOM
 */
const stripBOM = (content) => {
  if (content.charCodeAt(0) === 0xFEFF) {
    content = content.slice(1);
  }
  return content;
}

/**
 * Inherit the prototype methods from one constructor into another
 * @param {function} constructor
 * @param {function} superConstructor
 * @param {object} [props]
 * @param {object} [descriptors]
 *
 * @returns {void}
 */
const inherits = (constructor, superConstructor, props, descriptors) => {
  constructor.prototype = Object.create(superConstructor.prototype, descriptors);
  constructor.prototype.constructor = constructor;
  Object.defineProperty(constructor, 'super', {
    value: superConstructor.prototype
  });
  props && Object.assign(constructor.prototype, props);
}

/**
 * Resolve object with deep prototype chain to a flat object
 * @param {Object} sourceObj source object
 * @param {Object} [destObj]
 * @param {Function|Boolean} [filter]
 * @param {Function} [propFilter]
 *
 * @returns {Object}
 */
const toFlatObject = (sourceObj, destObj, filter, propFilter) => {
  let props;
  let i;
  let prop;
  const merged = {};

  destObj = destObj || {};
  // eslint-disable-next-line no-eq-null,eqeqeq
  if (sourceObj == null) return destObj;

  do {
    props = Object.getOwnPropertyNames(sourceObj);
    i = props.length;
    while (i-- > 0) {
      prop = props[i];
      if ((!propFilter || propFilter(prop, sourceObj, destObj)) && !merged[prop]) {
        destObj[prop] = sourceObj[prop];
        merged[prop] = true;
      }
    }
    sourceObj = filter !== false && getPrototypeOf(sourceObj);
  } while (sourceObj && (!filter || filter(sourceObj, destObj)) && sourceObj !== Object.prototype);

  return destObj;
}

/**
 * Determines whether a string ends with the characters of a specified string
 *
 * @param {String} str
 * @param {String} searchString
 * @param {Number} [position= 0]
 *
 * @returns {boolean}
 */
const endsWith = (str, searchString, position) => {
  str = String(str);
  if (position === undefined || position > str.length) {
    position = str.length;
  }
  position -= searchString.length;
  const lastIndex = str.indexOf(searchString, position);
  return lastIndex !== -1 && lastIndex === position;
}


/**
 * Returns new array from array like object or null if failed
 *
 * @param {*} [thing]
 *
 * @returns {?Array}
 */
const utils_toArray = (thing) => {
  if (!thing) return null;
  if (utils_isArray(thing)) return thing;
  let i = thing.length;
  if (!isNumber(i)) return null;
  const arr = new Array(i);
  while (i-- > 0) {
    arr[i] = thing[i];
  }
  return arr;
}

/**
 * Checking if the Uint8Array exists and if it does, it returns a function that checks if the
 * thing passed in is an instance of Uint8Array
 *
 * @param {TypedArray}
 *
 * @returns {Array}
 */
// eslint-disable-next-line func-names
const isTypedArray = (TypedArray => {
  // eslint-disable-next-line func-names
  return thing => {
    return TypedArray && thing instanceof TypedArray;
  };
})(typeof Uint8Array !== 'undefined' && getPrototypeOf(Uint8Array));

/**
 * For each entry in the object, call the function with the key and value.
 *
 * @param {Object<any, any>} obj - The object to iterate over.
 * @param {Function} fn - The function to call for each entry.
 *
 * @returns {void}
 */
const forEachEntry = (obj, fn) => {
  const generator = obj && obj[Symbol.iterator];

  const iterator = generator.call(obj);

  let result;

  while ((result = iterator.next()) && !result.done) {
    const pair = result.value;
    fn.call(obj, pair[0], pair[1]);
  }
}

/**
 * It takes a regular expression and a string, and returns an array of all the matches
 *
 * @param {string} regExp - The regular expression to match against.
 * @param {string} str - The string to search.
 *
 * @returns {Array<boolean>}
 */
const matchAll = (regExp, str) => {
  let matches;
  const arr = [];

  while ((matches = regExp.exec(str)) !== null) {
    arr.push(matches);
  }

  return arr;
}

/* Checking if the kindOfTest function returns true when passed an HTMLFormElement. */
const isHTMLForm = kindOfTest('HTMLFormElement');

const toCamelCase = str => {
  return str.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,
    function replacer(m, p1, p2) {
      return p1.toUpperCase() + p2;
    }
  );
};

/* Creating a function that will check if an object has a property. */
const utils_hasOwnProperty = (({hasOwnProperty}) => (obj, prop) => hasOwnProperty.call(obj, prop))(Object.prototype);

/**
 * Determine if a value is a RegExp object
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a RegExp object, otherwise false
 */
const isRegExp = kindOfTest('RegExp');

const reduceDescriptors = (obj, reducer) => {
  const descriptors = Object.getOwnPropertyDescriptors(obj);
  const reducedDescriptors = {};

  forEach(descriptors, (descriptor, name) => {
    if (reducer(descriptor, name, obj) !== false) {
      reducedDescriptors[name] = descriptor;
    }
  });

  Object.defineProperties(obj, reducedDescriptors);
}

/**
 * Makes all methods read-only
 * @param {Object} obj
 */

const freezeMethods = (obj) => {
  reduceDescriptors(obj, (descriptor, name) => {
    // skip restricted props in strict mode
    if (isFunction(obj) && ['arguments', 'caller', 'callee'].indexOf(name) !== -1) {
      return false;
    }

    const value = obj[name];

    if (!isFunction(value)) return;

    descriptor.enumerable = false;

    if ('writable' in descriptor) {
      descriptor.writable = false;
      return;
    }

    if (!descriptor.set) {
      descriptor.set = () => {
        throw Error('Can not rewrite read-only method \'' + name + '\'');
      };
    }
  });
}

const toObjectSet = (arrayOrString, delimiter) => {
  const obj = {};

  const define = (arr) => {
    arr.forEach(value => {
      obj[value] = true;
    });
  }

  utils_isArray(arrayOrString) ? define(arrayOrString) : define(String(arrayOrString).split(delimiter));

  return obj;
}

const noop = () => {}

const toFiniteNumber = (value, defaultValue) => {
  value = +value;
  return Number.isFinite(value) ? value : defaultValue;
}

const ALPHA = 'abcdefghijklmnopqrstuvwxyz'

const DIGIT = '0123456789';

const ALPHABET = {
  DIGIT,
  ALPHA,
  ALPHA_DIGIT: ALPHA + ALPHA.toUpperCase() + DIGIT
}

const generateString = (size = 16, alphabet = ALPHABET.ALPHA_DIGIT) => {
  let str = '';
  const {length} = alphabet;
  while (size--) {
    str += alphabet[Math.random() * length|0]
  }

  return str;
}

/**
 * If the thing is a FormData object, return true, otherwise return false.
 *
 * @param {unknown} thing - The thing to check.
 *
 * @returns {boolean}
 */
function isSpecCompliantForm(thing) {
  return !!(thing && isFunction(thing.append) && thing[Symbol.toStringTag] === 'FormData' && thing[Symbol.iterator]);
}

const toJSONObject = (obj) => {
  const stack = new Array(10);

  const visit = (source, i) => {

    if (utils_isObject(source)) {
      if (stack.indexOf(source) >= 0) {
        return;
      }

      if(!('toJSON' in source)) {
        stack[i] = source;
        const target = utils_isArray(source) ? [] : {};

        forEach(source, (value, key) => {
          const reducedValue = visit(value, i + 1);
          !utils_isUndefined(reducedValue) && (target[key] = reducedValue);
        });

        stack[i] = undefined;

        return target;
      }
    }

    return source;
  }

  return visit(obj, 0);
}

/* harmony default export */ const utils = ({
  isArray: utils_isArray,
  isArrayBuffer,
  isBuffer,
  isFormData,
  isArrayBufferView,
  isString: utils_isString,
  isNumber,
  isBoolean,
  isObject: utils_isObject,
  isPlainObject,
  isUndefined: utils_isUndefined,
  isDate,
  isFile,
  isBlob,
  isRegExp,
  isFunction,
  isStream,
  isURLSearchParams,
  isTypedArray,
  isFileList,
  forEach,
  merge,
  extend,
  trim,
  stripBOM,
  inherits,
  toFlatObject,
  kindOf,
  kindOfTest,
  endsWith,
  toArray: utils_toArray,
  forEachEntry,
  matchAll,
  isHTMLForm,
  hasOwnProperty: utils_hasOwnProperty,
  hasOwnProp: utils_hasOwnProperty, // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors,
  freezeMethods,
  toObjectSet,
  toCamelCase,
  noop,
  toFiniteNumber,
  findKey,
  global: _global,
  isContextDefined,
  ALPHABET,
  generateString,
  isSpecCompliantForm,
  toJSONObject
});

;// CONCATENATED MODULE: ./node_modules/axios/lib/core/AxiosError.js




/**
 * Create an Error with the specified message, config, error code, request and response.
 *
 * @param {string} message The error message.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [config] The config.
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 *
 * @returns {Error} The created error.
 */
function AxiosError(message, code, config, request, response) {
  Error.call(this);

  if (Error.captureStackTrace) {
    Error.captureStackTrace(this, this.constructor);
  } else {
    this.stack = (new Error()).stack;
  }

  this.message = message;
  this.name = 'AxiosError';
  code && (this.code = code);
  config && (this.config = config);
  request && (this.request = request);
  response && (this.response = response);
}

utils.inherits(AxiosError, Error, {
  toJSON: function toJSON() {
    return {
      // Standard
      message: this.message,
      name: this.name,
      // Microsoft
      description: this.description,
      number: this.number,
      // Mozilla
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      // Axios
      config: utils.toJSONObject(this.config),
      code: this.code,
      status: this.response && this.response.status ? this.response.status : null
    };
  }
});

const AxiosError_prototype = AxiosError.prototype;
const descriptors = {};

[
  'ERR_BAD_OPTION_VALUE',
  'ERR_BAD_OPTION',
  'ECONNABORTED',
  'ETIMEDOUT',
  'ERR_NETWORK',
  'ERR_FR_TOO_MANY_REDIRECTS',
  'ERR_DEPRECATED',
  'ERR_BAD_RESPONSE',
  'ERR_BAD_REQUEST',
  'ERR_CANCELED',
  'ERR_NOT_SUPPORT',
  'ERR_INVALID_URL'
// eslint-disable-next-line func-names
].forEach(code => {
  descriptors[code] = {value: code};
});

Object.defineProperties(AxiosError, descriptors);
Object.defineProperty(AxiosError_prototype, 'isAxiosError', {value: true});

// eslint-disable-next-line func-names
AxiosError.from = (error, code, config, request, response, customProps) => {
  const axiosError = Object.create(AxiosError_prototype);

  utils.toFlatObject(error, axiosError, function filter(obj) {
    return obj !== Error.prototype;
  }, prop => {
    return prop !== 'isAxiosError';
  });

  AxiosError.call(axiosError, error.message, code, config, request, response);

  axiosError.cause = error;

  axiosError.name = error.name;

  customProps && Object.assign(axiosError, customProps);

  return axiosError;
};

/* harmony default export */ const core_AxiosError = (AxiosError);

;// CONCATENATED MODULE: ./node_modules/axios/lib/helpers/null.js
// eslint-disable-next-line strict
/* harmony default export */ const helpers_null = (null);

;// CONCATENATED MODULE: ./node_modules/axios/lib/helpers/toFormData.js




// temporary hotfix to avoid circular references until AxiosURLSearchParams is refactored


/**
 * Determines if the given thing is a array or js object.
 *
 * @param {string} thing - The object or array to be visited.
 *
 * @returns {boolean}
 */
function isVisitable(thing) {
  return utils.isPlainObject(thing) || utils.isArray(thing);
}

/**
 * It removes the brackets from the end of a string
 *
 * @param {string} key - The key of the parameter.
 *
 * @returns {string} the key without the brackets.
 */
function removeBrackets(key) {
  return utils.endsWith(key, '[]') ? key.slice(0, -2) : key;
}

/**
 * It takes a path, a key, and a boolean, and returns a string
 *
 * @param {string} path - The path to the current key.
 * @param {string} key - The key of the current object being iterated over.
 * @param {string} dots - If true, the key will be rendered with dots instead of brackets.
 *
 * @returns {string} The path to the current key.
 */
function renderKey(path, key, dots) {
  if (!path) return key;
  return path.concat(key).map(function each(token, i) {
    // eslint-disable-next-line no-param-reassign
    token = removeBrackets(token);
    return !dots && i ? '[' + token + ']' : token;
  }).join(dots ? '.' : '');
}

/**
 * If the array is an array and none of its elements are visitable, then it's a flat array.
 *
 * @param {Array<any>} arr - The array to check
 *
 * @returns {boolean}
 */
function isFlatArray(arr) {
  return utils.isArray(arr) && !arr.some(isVisitable);
}

const predicates = utils.toFlatObject(utils, {}, null, function filter(prop) {
  return /^is[A-Z]/.test(prop);
});

/**
 * Convert a data object to FormData
 *
 * @param {Object} obj
 * @param {?Object} [formData]
 * @param {?Object} [options]
 * @param {Function} [options.visitor]
 * @param {Boolean} [options.metaTokens = true]
 * @param {Boolean} [options.dots = false]
 * @param {?Boolean} [options.indexes = false]
 *
 * @returns {Object}
 **/

/**
 * It converts an object into a FormData object
 *
 * @param {Object<any, any>} obj - The object to convert to form data.
 * @param {string} formData - The FormData object to append to.
 * @param {Object<string, any>} options
 *
 * @returns
 */
function toFormData(obj, formData, options) {
  if (!utils.isObject(obj)) {
    throw new TypeError('target must be an object');
  }

  // eslint-disable-next-line no-param-reassign
  formData = formData || new (helpers_null || FormData)();

  // eslint-disable-next-line no-param-reassign
  options = utils.toFlatObject(options, {
    metaTokens: true,
    dots: false,
    indexes: false
  }, false, function defined(option, source) {
    // eslint-disable-next-line no-eq-null,eqeqeq
    return !utils.isUndefined(source[option]);
  });

  const metaTokens = options.metaTokens;
  // eslint-disable-next-line no-use-before-define
  const visitor = options.visitor || defaultVisitor;
  const dots = options.dots;
  const indexes = options.indexes;
  const _Blob = options.Blob || typeof Blob !== 'undefined' && Blob;
  const useBlob = _Blob && utils.isSpecCompliantForm(formData);

  if (!utils.isFunction(visitor)) {
    throw new TypeError('visitor must be a function');
  }

  function convertValue(value) {
    if (value === null) return '';

    if (utils.isDate(value)) {
      return value.toISOString();
    }

    if (!useBlob && utils.isBlob(value)) {
      throw new core_AxiosError('Blob is not supported. Use a Buffer instead.');
    }

    if (utils.isArrayBuffer(value) || utils.isTypedArray(value)) {
      return useBlob && typeof Blob === 'function' ? new Blob([value]) : Buffer.from(value);
    }

    return value;
  }

  /**
   * Default visitor.
   *
   * @param {*} value
   * @param {String|Number} key
   * @param {Array<String|Number>} path
   * @this {FormData}
   *
   * @returns {boolean} return true to visit the each prop of the value recursively
   */
  function defaultVisitor(value, key, path) {
    let arr = value;

    if (value && !path && typeof value === 'object') {
      if (utils.endsWith(key, '{}')) {
        // eslint-disable-next-line no-param-reassign
        key = metaTokens ? key : key.slice(0, -2);
        // eslint-disable-next-line no-param-reassign
        value = JSON.stringify(value);
      } else if (
        (utils.isArray(value) && isFlatArray(value)) ||
        ((utils.isFileList(value) || utils.endsWith(key, '[]')) && (arr = utils.toArray(value))
        )) {
        // eslint-disable-next-line no-param-reassign
        key = removeBrackets(key);

        arr.forEach(function each(el, index) {
          !(utils.isUndefined(el) || el === null) && formData.append(
            // eslint-disable-next-line no-nested-ternary
            indexes === true ? renderKey([key], index, dots) : (indexes === null ? key : key + '[]'),
            convertValue(el)
          );
        });
        return false;
      }
    }

    if (isVisitable(value)) {
      return true;
    }

    formData.append(renderKey(path, key, dots), convertValue(value));

    return false;
  }

  const stack = [];

  const exposedHelpers = Object.assign(predicates, {
    defaultVisitor,
    convertValue,
    isVisitable
  });

  function build(value, path) {
    if (utils.isUndefined(value)) return;

    if (stack.indexOf(value) !== -1) {
      throw Error('Circular reference detected in ' + path.join('.'));
    }

    stack.push(value);

    utils.forEach(value, function each(el, key) {
      const result = !(utils.isUndefined(el) || el === null) && visitor.call(
        formData, el, utils.isString(key) ? key.trim() : key, path, exposedHelpers
      );

      if (result === true) {
        build(el, path ? path.concat(key) : [key]);
      }
    });

    stack.pop();
  }

  if (!utils.isObject(obj)) {
    throw new TypeError('data must be an object');
  }

  build(obj);

  return formData;
}

/* harmony default export */ const helpers_toFormData = (toFormData);

;// CONCATENATED MODULE: ./node_modules/axios/lib/helpers/AxiosURLSearchParams.js




/**
 * It encodes a string by replacing all characters that are not in the unreserved set with
 * their percent-encoded equivalents
 *
 * @param {string} str - The string to encode.
 *
 * @returns {string} The encoded string.
 */
function encode(str) {
  const charMap = {
    '!': '%21',
    "'": '%27',
    '(': '%28',
    ')': '%29',
    '~': '%7E',
    '%20': '+',
    '%00': '\x00'
  };
  return encodeURIComponent(str).replace(/[!'()~]|%20|%00/g, function replacer(match) {
    return charMap[match];
  });
}

/**
 * It takes a params object and converts it to a FormData object
 *
 * @param {Object<string, any>} params - The parameters to be converted to a FormData object.
 * @param {Object<string, any>} options - The options object passed to the Axios constructor.
 *
 * @returns {void}
 */
function AxiosURLSearchParams(params, options) {
  this._pairs = [];

  params && helpers_toFormData(params, this, options);
}

const AxiosURLSearchParams_prototype = AxiosURLSearchParams.prototype;

AxiosURLSearchParams_prototype.append = function append(name, value) {
  this._pairs.push([name, value]);
};

AxiosURLSearchParams_prototype.toString = function toString(encoder) {
  const _encode = encoder ? function(value) {
    return encoder.call(this, value, encode);
  } : encode;

  return this._pairs.map(function each(pair) {
    return _encode(pair[0]) + '=' + _encode(pair[1]);
  }, '').join('&');
};

/* harmony default export */ const helpers_AxiosURLSearchParams = (AxiosURLSearchParams);

;// CONCATENATED MODULE: ./node_modules/axios/lib/helpers/buildURL.js





/**
 * It replaces all instances of the characters `:`, `$`, `,`, `+`, `[`, and `]` with their
 * URI encoded counterparts
 *
 * @param {string} val The value to be encoded.
 *
 * @returns {string} The encoded value.
 */
function buildURL_encode(val) {
  return encodeURIComponent(val).
    replace(/%3A/gi, ':').
    replace(/%24/g, '$').
    replace(/%2C/gi, ',').
    replace(/%20/g, '+').
    replace(/%5B/gi, '[').
    replace(/%5D/gi, ']');
}

/**
 * Build a URL by appending params to the end
 *
 * @param {string} url The base of the url (e.g., http://www.google.com)
 * @param {object} [params] The params to be appended
 * @param {?object} options
 *
 * @returns {string} The formatted url
 */
function buildURL(url, params, options) {
  /*eslint no-param-reassign:0*/
  if (!params) {
    return url;
  }
  
  const _encode = options && options.encode || buildURL_encode;

  const serializeFn = options && options.serialize;

  let serializedParams;

  if (serializeFn) {
    serializedParams = serializeFn(params, options);
  } else {
    serializedParams = utils.isURLSearchParams(params) ?
      params.toString() :
      new helpers_AxiosURLSearchParams(params, options).toString(_encode);
  }

  if (serializedParams) {
    const hashmarkIndex = url.indexOf("#");

    if (hashmarkIndex !== -1) {
      url = url.slice(0, hashmarkIndex);
    }
    url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
  }

  return url;
}

;// CONCATENATED MODULE: ./node_modules/axios/lib/core/InterceptorManager.js




class InterceptorManager {
  constructor() {
    this.handlers = [];
  }

  /**
   * Add a new interceptor to the stack
   *
   * @param {Function} fulfilled The function to handle `then` for a `Promise`
   * @param {Function} rejected The function to handle `reject` for a `Promise`
   *
   * @return {Number} An ID used to remove interceptor later
   */
  use(fulfilled, rejected, options) {
    this.handlers.push({
      fulfilled,
      rejected,
      synchronous: options ? options.synchronous : false,
      runWhen: options ? options.runWhen : null
    });
    return this.handlers.length - 1;
  }

  /**
   * Remove an interceptor from the stack
   *
   * @param {Number} id The ID that was returned by `use`
   *
   * @returns {Boolean} `true` if the interceptor was removed, `false` otherwise
   */
  eject(id) {
    if (this.handlers[id]) {
      this.handlers[id] = null;
    }
  }

  /**
   * Clear all interceptors from the stack
   *
   * @returns {void}
   */
  clear() {
    if (this.handlers) {
      this.handlers = [];
    }
  }

  /**
   * Iterate over all the registered interceptors
   *
   * This method is particularly useful for skipping over any
   * interceptors that may have become `null` calling `eject`.
   *
   * @param {Function} fn The function to call for each interceptor
   *
   * @returns {void}
   */
  forEach(fn) {
    utils.forEach(this.handlers, function forEachHandler(h) {
      if (h !== null) {
        fn(h);
      }
    });
  }
}

/* harmony default export */ const core_InterceptorManager = (InterceptorManager);

;// CONCATENATED MODULE: ./node_modules/axios/lib/defaults/transitional.js


/* harmony default export */ const defaults_transitional = ({
  silentJSONParsing: true,
  forcedJSONParsing: true,
  clarifyTimeoutError: false
});

;// CONCATENATED MODULE: ./node_modules/axios/lib/platform/browser/classes/URLSearchParams.js



/* harmony default export */ const classes_URLSearchParams = (typeof URLSearchParams !== 'undefined' ? URLSearchParams : helpers_AxiosURLSearchParams);

;// CONCATENATED MODULE: ./node_modules/axios/lib/platform/browser/classes/FormData.js


/* harmony default export */ const classes_FormData = (typeof FormData !== 'undefined' ? FormData : null);

;// CONCATENATED MODULE: ./node_modules/axios/lib/platform/browser/classes/Blob.js


/* harmony default export */ const classes_Blob = (typeof Blob !== 'undefined' ? Blob : null);

;// CONCATENATED MODULE: ./node_modules/axios/lib/platform/browser/index.js




/**
 * Determine if we're running in a standard browser environment
 *
 * This allows axios to run in a web worker, and react-native.
 * Both environments support XMLHttpRequest, but not fully standard globals.
 *
 * web workers:
 *  typeof window -> undefined
 *  typeof document -> undefined
 *
 * react-native:
 *  navigator.product -> 'ReactNative'
 * nativescript
 *  navigator.product -> 'NativeScript' or 'NS'
 *
 * @returns {boolean}
 */
const isStandardBrowserEnv = (() => {
  let product;
  if (typeof navigator !== 'undefined' && (
    (product = navigator.product) === 'ReactNative' ||
    product === 'NativeScript' ||
    product === 'NS')
  ) {
    return false;
  }

  return typeof window !== 'undefined' && typeof document !== 'undefined';
})();

/**
 * Determine if we're running in a standard browser webWorker environment
 *
 * Although the `isStandardBrowserEnv` method indicates that
 * `allows axios to run in a web worker`, the WebWorker will still be
 * filtered out due to its judgment standard
 * `typeof window !== 'undefined' && typeof document !== 'undefined'`.
 * This leads to a problem when axios post `FormData` in webWorker
 */
 const isStandardBrowserWebWorkerEnv = (() => {
  return (
    typeof WorkerGlobalScope !== 'undefined' &&
    // eslint-disable-next-line no-undef
    self instanceof WorkerGlobalScope &&
    typeof self.importScripts === 'function'
  );
})();


/* harmony default export */ const browser = ({
  isBrowser: true,
  classes: {
    URLSearchParams: classes_URLSearchParams,
    FormData: classes_FormData,
    Blob: classes_Blob
  },
  isStandardBrowserEnv,
  isStandardBrowserWebWorkerEnv,
  protocols: ['http', 'https', 'file', 'blob', 'url', 'data']
});

;// CONCATENATED MODULE: ./node_modules/axios/lib/helpers/toURLEncodedForm.js






function toURLEncodedForm(data, options) {
  return helpers_toFormData(data, new browser.classes.URLSearchParams(), Object.assign({
    visitor: function(value, key, path, helpers) {
      if (browser.isNode && utils.isBuffer(value)) {
        this.append(key, value.toString('base64'));
        return false;
      }

      return helpers.defaultVisitor.apply(this, arguments);
    }
  }, options));
}

;// CONCATENATED MODULE: ./node_modules/axios/lib/helpers/formDataToJSON.js




/**
 * It takes a string like `foo[x][y][z]` and returns an array like `['foo', 'x', 'y', 'z']
 *
 * @param {string} name - The name of the property to get.
 *
 * @returns An array of strings.
 */
function parsePropPath(name) {
  // foo[x][y][z]
  // foo.x.y.z
  // foo-x-y-z
  // foo x y z
  return utils.matchAll(/\w+|\[(\w*)]/g, name).map(match => {
    return match[0] === '[]' ? '' : match[1] || match[0];
  });
}

/**
 * Convert an array to an object.
 *
 * @param {Array<any>} arr - The array to convert to an object.
 *
 * @returns An object with the same keys and values as the array.
 */
function arrayToObject(arr) {
  const obj = {};
  const keys = Object.keys(arr);
  let i;
  const len = keys.length;
  let key;
  for (i = 0; i < len; i++) {
    key = keys[i];
    obj[key] = arr[key];
  }
  return obj;
}

/**
 * It takes a FormData object and returns a JavaScript object
 *
 * @param {string} formData The FormData object to convert to JSON.
 *
 * @returns {Object<string, any> | null} The converted object.
 */
function formDataToJSON(formData) {
  function buildPath(path, value, target, index) {
    let name = path[index++];
    const isNumericKey = Number.isFinite(+name);
    const isLast = index >= path.length;
    name = !name && utils.isArray(target) ? target.length : name;

    if (isLast) {
      if (utils.hasOwnProp(target, name)) {
        target[name] = [target[name], value];
      } else {
        target[name] = value;
      }

      return !isNumericKey;
    }

    if (!target[name] || !utils.isObject(target[name])) {
      target[name] = [];
    }

    const result = buildPath(path, value, target[name], index);

    if (result && utils.isArray(target[name])) {
      target[name] = arrayToObject(target[name]);
    }

    return !isNumericKey;
  }

  if (utils.isFormData(formData) && utils.isFunction(formData.entries)) {
    const obj = {};

    utils.forEachEntry(formData, (name, value) => {
      buildPath(parsePropPath(name), value, obj, 0);
    });

    return obj;
  }

  return null;
}

/* harmony default export */ const helpers_formDataToJSON = (formDataToJSON);

;// CONCATENATED MODULE: ./node_modules/axios/lib/defaults/index.js










const DEFAULT_CONTENT_TYPE = {
  'Content-Type': undefined
};

/**
 * It takes a string, tries to parse it, and if it fails, it returns the stringified version
 * of the input
 *
 * @param {any} rawValue - The value to be stringified.
 * @param {Function} parser - A function that parses a string into a JavaScript object.
 * @param {Function} encoder - A function that takes a value and returns a string.
 *
 * @returns {string} A stringified version of the rawValue.
 */
function stringifySafely(rawValue, parser, encoder) {
  if (utils.isString(rawValue)) {
    try {
      (parser || JSON.parse)(rawValue);
      return utils.trim(rawValue);
    } catch (e) {
      if (e.name !== 'SyntaxError') {
        throw e;
      }
    }
  }

  return (encoder || JSON.stringify)(rawValue);
}

const defaults = {

  transitional: defaults_transitional,

  adapter: ['xhr', 'http'],

  transformRequest: [function transformRequest(data, headers) {
    const contentType = headers.getContentType() || '';
    const hasJSONContentType = contentType.indexOf('application/json') > -1;
    const isObjectPayload = utils.isObject(data);

    if (isObjectPayload && utils.isHTMLForm(data)) {
      data = new FormData(data);
    }

    const isFormData = utils.isFormData(data);

    if (isFormData) {
      if (!hasJSONContentType) {
        return data;
      }
      return hasJSONContentType ? JSON.stringify(helpers_formDataToJSON(data)) : data;
    }

    if (utils.isArrayBuffer(data) ||
      utils.isBuffer(data) ||
      utils.isStream(data) ||
      utils.isFile(data) ||
      utils.isBlob(data)
    ) {
      return data;
    }
    if (utils.isArrayBufferView(data)) {
      return data.buffer;
    }
    if (utils.isURLSearchParams(data)) {
      headers.setContentType('application/x-www-form-urlencoded;charset=utf-8', false);
      return data.toString();
    }

    let isFileList;

    if (isObjectPayload) {
      if (contentType.indexOf('application/x-www-form-urlencoded') > -1) {
        return toURLEncodedForm(data, this.formSerializer).toString();
      }

      if ((isFileList = utils.isFileList(data)) || contentType.indexOf('multipart/form-data') > -1) {
        const _FormData = this.env && this.env.FormData;

        return helpers_toFormData(
          isFileList ? {'files[]': data} : data,
          _FormData && new _FormData(),
          this.formSerializer
        );
      }
    }

    if (isObjectPayload || hasJSONContentType ) {
      headers.setContentType('application/json', false);
      return stringifySafely(data);
    }

    return data;
  }],

  transformResponse: [function transformResponse(data) {
    const transitional = this.transitional || defaults.transitional;
    const forcedJSONParsing = transitional && transitional.forcedJSONParsing;
    const JSONRequested = this.responseType === 'json';

    if (data && utils.isString(data) && ((forcedJSONParsing && !this.responseType) || JSONRequested)) {
      const silentJSONParsing = transitional && transitional.silentJSONParsing;
      const strictJSONParsing = !silentJSONParsing && JSONRequested;

      try {
        return JSON.parse(data);
      } catch (e) {
        if (strictJSONParsing) {
          if (e.name === 'SyntaxError') {
            throw core_AxiosError.from(e, core_AxiosError.ERR_BAD_RESPONSE, this, null, this.response);
          }
          throw e;
        }
      }
    }

    return data;
  }],

  /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */
  timeout: 0,

  xsrfCookieName: 'XSRF-TOKEN',
  xsrfHeaderName: 'X-XSRF-TOKEN',

  maxContentLength: -1,
  maxBodyLength: -1,

  env: {
    FormData: browser.classes.FormData,
    Blob: browser.classes.Blob
  },

  validateStatus: function validateStatus(status) {
    return status >= 200 && status < 300;
  },

  headers: {
    common: {
      'Accept': 'application/json, text/plain, */*'
    }
  }
};

utils.forEach(['delete', 'get', 'head'], function forEachMethodNoData(method) {
  defaults.headers[method] = {};
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  defaults.headers[method] = utils.merge(DEFAULT_CONTENT_TYPE);
});

/* harmony default export */ const lib_defaults = (defaults);

;// CONCATENATED MODULE: ./node_modules/axios/lib/helpers/parseHeaders.js




// RawAxiosHeaders whose duplicates are ignored by node
// c.f. https://nodejs.org/api/http.html#http_message_headers
const ignoreDuplicateOf = utils.toObjectSet([
  'age', 'authorization', 'content-length', 'content-type', 'etag',
  'expires', 'from', 'host', 'if-modified-since', 'if-unmodified-since',
  'last-modified', 'location', 'max-forwards', 'proxy-authorization',
  'referer', 'retry-after', 'user-agent'
]);

/**
 * Parse headers into an object
 *
 * ```
 * Date: Wed, 27 Aug 2014 08:58:49 GMT
 * Content-Type: application/json
 * Connection: keep-alive
 * Transfer-Encoding: chunked
 * ```
 *
 * @param {String} rawHeaders Headers needing to be parsed
 *
 * @returns {Object} Headers parsed into an object
 */
/* harmony default export */ const parseHeaders = (rawHeaders => {
  const parsed = {};
  let key;
  let val;
  let i;

  rawHeaders && rawHeaders.split('\n').forEach(function parser(line) {
    i = line.indexOf(':');
    key = line.substring(0, i).trim().toLowerCase();
    val = line.substring(i + 1).trim();

    if (!key || (parsed[key] && ignoreDuplicateOf[key])) {
      return;
    }

    if (key === 'set-cookie') {
      if (parsed[key]) {
        parsed[key].push(val);
      } else {
        parsed[key] = [val];
      }
    } else {
      parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
    }
  });

  return parsed;
});

;// CONCATENATED MODULE: ./node_modules/axios/lib/core/AxiosHeaders.js





const $internals = Symbol('internals');

function normalizeHeader(header) {
  return header && String(header).trim().toLowerCase();
}

function normalizeValue(value) {
  if (value === false || value == null) {
    return value;
  }

  return utils.isArray(value) ? value.map(normalizeValue) : String(value);
}

function parseTokens(str) {
  const tokens = Object.create(null);
  const tokensRE = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let match;

  while ((match = tokensRE.exec(str))) {
    tokens[match[1]] = match[2];
  }

  return tokens;
}

const isValidHeaderName = (str) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(str.trim());

function matchHeaderValue(context, value, header, filter, isHeaderNameFilter) {
  if (utils.isFunction(filter)) {
    return filter.call(this, value, header);
  }

  if (isHeaderNameFilter) {
    value = header;
  }

  if (!utils.isString(value)) return;

  if (utils.isString(filter)) {
    return value.indexOf(filter) !== -1;
  }

  if (utils.isRegExp(filter)) {
    return filter.test(value);
  }
}

function formatHeader(header) {
  return header.trim()
    .toLowerCase().replace(/([a-z\d])(\w*)/g, (w, char, str) => {
      return char.toUpperCase() + str;
    });
}

function buildAccessors(obj, header) {
  const accessorName = utils.toCamelCase(' ' + header);

  ['get', 'set', 'has'].forEach(methodName => {
    Object.defineProperty(obj, methodName + accessorName, {
      value: function(arg1, arg2, arg3) {
        return this[methodName].call(this, header, arg1, arg2, arg3);
      },
      configurable: true
    });
  });
}

class AxiosHeaders {
  constructor(headers) {
    headers && this.set(headers);
  }

  set(header, valueOrRewrite, rewrite) {
    const self = this;

    function setHeader(_value, _header, _rewrite) {
      const lHeader = normalizeHeader(_header);

      if (!lHeader) {
        throw new Error('header name must be a non-empty string');
      }

      const key = utils.findKey(self, lHeader);

      if(!key || self[key] === undefined || _rewrite === true || (_rewrite === undefined && self[key] !== false)) {
        self[key || _header] = normalizeValue(_value);
      }
    }

    const setHeaders = (headers, _rewrite) =>
      utils.forEach(headers, (_value, _header) => setHeader(_value, _header, _rewrite));

    if (utils.isPlainObject(header) || header instanceof this.constructor) {
      setHeaders(header, valueOrRewrite)
    } else if(utils.isString(header) && (header = header.trim()) && !isValidHeaderName(header)) {
      setHeaders(parseHeaders(header), valueOrRewrite);
    } else {
      header != null && setHeader(valueOrRewrite, header, rewrite);
    }

    return this;
  }

  get(header, parser) {
    header = normalizeHeader(header);

    if (header) {
      const key = utils.findKey(this, header);

      if (key) {
        const value = this[key];

        if (!parser) {
          return value;
        }

        if (parser === true) {
          return parseTokens(value);
        }

        if (utils.isFunction(parser)) {
          return parser.call(this, value, key);
        }

        if (utils.isRegExp(parser)) {
          return parser.exec(value);
        }

        throw new TypeError('parser must be boolean|regexp|function');
      }
    }
  }

  has(header, matcher) {
    header = normalizeHeader(header);

    if (header) {
      const key = utils.findKey(this, header);

      return !!(key && this[key] !== undefined && (!matcher || matchHeaderValue(this, this[key], key, matcher)));
    }

    return false;
  }

  delete(header, matcher) {
    const self = this;
    let deleted = false;

    function deleteHeader(_header) {
      _header = normalizeHeader(_header);

      if (_header) {
        const key = utils.findKey(self, _header);

        if (key && (!matcher || matchHeaderValue(self, self[key], key, matcher))) {
          delete self[key];

          deleted = true;
        }
      }
    }

    if (utils.isArray(header)) {
      header.forEach(deleteHeader);
    } else {
      deleteHeader(header);
    }

    return deleted;
  }

  clear(matcher) {
    const keys = Object.keys(this);
    let i = keys.length;
    let deleted = false;

    while (i--) {
      const key = keys[i];
      if(!matcher || matchHeaderValue(this, this[key], key, matcher, true)) {
        delete this[key];
        deleted = true;
      }
    }

    return deleted;
  }

  normalize(format) {
    const self = this;
    const headers = {};

    utils.forEach(this, (value, header) => {
      const key = utils.findKey(headers, header);

      if (key) {
        self[key] = normalizeValue(value);
        delete self[header];
        return;
      }

      const normalized = format ? formatHeader(header) : String(header).trim();

      if (normalized !== header) {
        delete self[header];
      }

      self[normalized] = normalizeValue(value);

      headers[normalized] = true;
    });

    return this;
  }

  concat(...targets) {
    return this.constructor.concat(this, ...targets);
  }

  toJSON(asStrings) {
    const obj = Object.create(null);

    utils.forEach(this, (value, header) => {
      value != null && value !== false && (obj[header] = asStrings && utils.isArray(value) ? value.join(', ') : value);
    });

    return obj;
  }

  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }

  toString() {
    return Object.entries(this.toJSON()).map(([header, value]) => header + ': ' + value).join('\n');
  }

  get [Symbol.toStringTag]() {
    return 'AxiosHeaders';
  }

  static from(thing) {
    return thing instanceof this ? thing : new this(thing);
  }

  static concat(first, ...targets) {
    const computed = new this(first);

    targets.forEach((target) => computed.set(target));

    return computed;
  }

  static accessor(header) {
    const internals = this[$internals] = (this[$internals] = {
      accessors: {}
    });

    const accessors = internals.accessors;
    const prototype = this.prototype;

    function defineAccessor(_header) {
      const lHeader = normalizeHeader(_header);

      if (!accessors[lHeader]) {
        buildAccessors(prototype, _header);
        accessors[lHeader] = true;
      }
    }

    utils.isArray(header) ? header.forEach(defineAccessor) : defineAccessor(header);

    return this;
  }
}

AxiosHeaders.accessor(['Content-Type', 'Content-Length', 'Accept', 'Accept-Encoding', 'User-Agent', 'Authorization']);

utils.freezeMethods(AxiosHeaders.prototype);
utils.freezeMethods(AxiosHeaders);

/* harmony default export */ const core_AxiosHeaders = (AxiosHeaders);

;// CONCATENATED MODULE: ./node_modules/axios/lib/core/transformData.js






/**
 * Transform the data for a request or a response
 *
 * @param {Array|Function} fns A single function or Array of functions
 * @param {?Object} response The response object
 *
 * @returns {*} The resulting transformed data
 */
function transformData(fns, response) {
  const config = this || lib_defaults;
  const context = response || config;
  const headers = core_AxiosHeaders.from(context.headers);
  let data = context.data;

  utils.forEach(fns, function transform(fn) {
    data = fn.call(config, data, headers.normalize(), response ? response.status : undefined);
  });

  headers.normalize();

  return data;
}

;// CONCATENATED MODULE: ./node_modules/axios/lib/cancel/isCancel.js


function isCancel(value) {
  return !!(value && value.__CANCEL__);
}

;// CONCATENATED MODULE: ./node_modules/axios/lib/cancel/CanceledError.js





/**
 * A `CanceledError` is an object that is thrown when an operation is canceled.
 *
 * @param {string=} message The message.
 * @param {Object=} config The config.
 * @param {Object=} request The request.
 *
 * @returns {CanceledError} The created error.
 */
function CanceledError(message, config, request) {
  // eslint-disable-next-line no-eq-null,eqeqeq
  core_AxiosError.call(this, message == null ? 'canceled' : message, core_AxiosError.ERR_CANCELED, config, request);
  this.name = 'CanceledError';
}

utils.inherits(CanceledError, core_AxiosError, {
  __CANCEL__: true
});

/* harmony default export */ const cancel_CanceledError = (CanceledError);

;// CONCATENATED MODULE: ./node_modules/axios/lib/core/settle.js




/**
 * Resolve or reject a Promise based on response status.
 *
 * @param {Function} resolve A function that resolves the promise.
 * @param {Function} reject A function that rejects the promise.
 * @param {object} response The response.
 *
 * @returns {object} The response.
 */
function settle(resolve, reject, response) {
  const validateStatus = response.config.validateStatus;
  if (!response.status || !validateStatus || validateStatus(response.status)) {
    resolve(response);
  } else {
    reject(new core_AxiosError(
      'Request failed with status code ' + response.status,
      [core_AxiosError.ERR_BAD_REQUEST, core_AxiosError.ERR_BAD_RESPONSE][Math.floor(response.status / 100) - 4],
      response.config,
      response.request,
      response
    ));
  }
}

;// CONCATENATED MODULE: ./node_modules/axios/lib/helpers/cookies.js





/* harmony default export */ const cookies = (browser.isStandardBrowserEnv ?

// Standard browser envs support document.cookie
  (function standardBrowserEnv() {
    return {
      write: function write(name, value, expires, path, domain, secure) {
        const cookie = [];
        cookie.push(name + '=' + encodeURIComponent(value));

        if (utils.isNumber(expires)) {
          cookie.push('expires=' + new Date(expires).toGMTString());
        }

        if (utils.isString(path)) {
          cookie.push('path=' + path);
        }

        if (utils.isString(domain)) {
          cookie.push('domain=' + domain);
        }

        if (secure === true) {
          cookie.push('secure');
        }

        document.cookie = cookie.join('; ');
      },

      read: function read(name) {
        const match = document.cookie.match(new RegExp('(^|;\\s*)(' + name + ')=([^;]*)'));
        return (match ? decodeURIComponent(match[3]) : null);
      },

      remove: function remove(name) {
        this.write(name, '', Date.now() - 86400000);
      }
    };
  })() :

// Non standard browser env (web workers, react-native) lack needed support.
  (function nonStandardBrowserEnv() {
    return {
      write: function write() {},
      read: function read() { return null; },
      remove: function remove() {}
    };
  })());

;// CONCATENATED MODULE: ./node_modules/axios/lib/helpers/isAbsoluteURL.js


/**
 * Determines whether the specified URL is absolute
 *
 * @param {string} url The URL to test
 *
 * @returns {boolean} True if the specified URL is absolute, otherwise false
 */
function isAbsoluteURL(url) {
  // A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
  // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
  // by any combination of letters, digits, plus, period, or hyphen.
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(url);
}

;// CONCATENATED MODULE: ./node_modules/axios/lib/helpers/combineURLs.js


/**
 * Creates a new URL by combining the specified URLs
 *
 * @param {string} baseURL The base URL
 * @param {string} relativeURL The relative URL
 *
 * @returns {string} The combined URL
 */
function combineURLs(baseURL, relativeURL) {
  return relativeURL
    ? baseURL.replace(/\/+$/, '') + '/' + relativeURL.replace(/^\/+/, '')
    : baseURL;
}

;// CONCATENATED MODULE: ./node_modules/axios/lib/core/buildFullPath.js





/**
 * Creates a new URL by combining the baseURL with the requestedURL,
 * only when the requestedURL is not already an absolute URL.
 * If the requestURL is absolute, this function returns the requestedURL untouched.
 *
 * @param {string} baseURL The base URL
 * @param {string} requestedURL Absolute or relative URL to combine
 *
 * @returns {string} The combined full path
 */
function buildFullPath(baseURL, requestedURL) {
  if (baseURL && !isAbsoluteURL(requestedURL)) {
    return combineURLs(baseURL, requestedURL);
  }
  return requestedURL;
}

;// CONCATENATED MODULE: ./node_modules/axios/lib/helpers/isURLSameOrigin.js





/* harmony default export */ const isURLSameOrigin = (browser.isStandardBrowserEnv ?

// Standard browser envs have full support of the APIs needed to test
// whether the request URL is of the same origin as current location.
  (function standardBrowserEnv() {
    const msie = /(msie|trident)/i.test(navigator.userAgent);
    const urlParsingNode = document.createElement('a');
    let originURL;

    /**
    * Parse a URL to discover it's components
    *
    * @param {String} url The URL to be parsed
    * @returns {Object}
    */
    function resolveURL(url) {
      let href = url;

      if (msie) {
        // IE needs attribute set twice to normalize properties
        urlParsingNode.setAttribute('href', href);
        href = urlParsingNode.href;
      }

      urlParsingNode.setAttribute('href', href);

      // urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils
      return {
        href: urlParsingNode.href,
        protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, '') : '',
        host: urlParsingNode.host,
        search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, '') : '',
        hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, '') : '',
        hostname: urlParsingNode.hostname,
        port: urlParsingNode.port,
        pathname: (urlParsingNode.pathname.charAt(0) === '/') ?
          urlParsingNode.pathname :
          '/' + urlParsingNode.pathname
      };
    }

    originURL = resolveURL(window.location.href);

    /**
    * Determine if a URL shares the same origin as the current location
    *
    * @param {String} requestURL The URL to test
    * @returns {boolean} True if URL shares the same origin, otherwise false
    */
    return function isURLSameOrigin(requestURL) {
      const parsed = (utils.isString(requestURL)) ? resolveURL(requestURL) : requestURL;
      return (parsed.protocol === originURL.protocol &&
          parsed.host === originURL.host);
    };
  })() :

  // Non standard browser envs (web workers, react-native) lack needed support.
  (function nonStandardBrowserEnv() {
    return function isURLSameOrigin() {
      return true;
    };
  })());

;// CONCATENATED MODULE: ./node_modules/axios/lib/helpers/parseProtocol.js


function parseProtocol(url) {
  const match = /^([-+\w]{1,25})(:?\/\/|:)/.exec(url);
  return match && match[1] || '';
}

;// CONCATENATED MODULE: ./node_modules/axios/lib/helpers/speedometer.js


/**
 * Calculate data maxRate
 * @param {Number} [samplesCount= 10]
 * @param {Number} [min= 1000]
 * @returns {Function}
 */
function speedometer(samplesCount, min) {
  samplesCount = samplesCount || 10;
  const bytes = new Array(samplesCount);
  const timestamps = new Array(samplesCount);
  let head = 0;
  let tail = 0;
  let firstSampleTS;

  min = min !== undefined ? min : 1000;

  return function push(chunkLength) {
    const now = Date.now();

    const startedAt = timestamps[tail];

    if (!firstSampleTS) {
      firstSampleTS = now;
    }

    bytes[head] = chunkLength;
    timestamps[head] = now;

    let i = tail;
    let bytesCount = 0;

    while (i !== head) {
      bytesCount += bytes[i++];
      i = i % samplesCount;
    }

    head = (head + 1) % samplesCount;

    if (head === tail) {
      tail = (tail + 1) % samplesCount;
    }

    if (now - firstSampleTS < min) {
      return;
    }

    const passed = startedAt && now - startedAt;

    return passed ? Math.round(bytesCount * 1000 / passed) : undefined;
  };
}

/* harmony default export */ const helpers_speedometer = (speedometer);

;// CONCATENATED MODULE: ./node_modules/axios/lib/adapters/xhr.js
















function progressEventReducer(listener, isDownloadStream) {
  let bytesNotified = 0;
  const _speedometer = helpers_speedometer(50, 250);

  return e => {
    const loaded = e.loaded;
    const total = e.lengthComputable ? e.total : undefined;
    const progressBytes = loaded - bytesNotified;
    const rate = _speedometer(progressBytes);
    const inRange = loaded <= total;

    bytesNotified = loaded;

    const data = {
      loaded,
      total,
      progress: total ? (loaded / total) : undefined,
      bytes: progressBytes,
      rate: rate ? rate : undefined,
      estimated: rate && total && inRange ? (total - loaded) / rate : undefined,
      event: e
    };

    data[isDownloadStream ? 'download' : 'upload'] = true;

    listener(data);
  };
}

const isXHRAdapterSupported = typeof XMLHttpRequest !== 'undefined';

/* harmony default export */ const xhr = (isXHRAdapterSupported && function (config) {
  return new Promise(function dispatchXhrRequest(resolve, reject) {
    let requestData = config.data;
    const requestHeaders = core_AxiosHeaders.from(config.headers).normalize();
    const responseType = config.responseType;
    let onCanceled;
    function done() {
      if (config.cancelToken) {
        config.cancelToken.unsubscribe(onCanceled);
      }

      if (config.signal) {
        config.signal.removeEventListener('abort', onCanceled);
      }
    }

    if (utils.isFormData(requestData) && (browser.isStandardBrowserEnv || browser.isStandardBrowserWebWorkerEnv)) {
      requestHeaders.setContentType(false); // Let the browser set it
    }

    let request = new XMLHttpRequest();

    // HTTP basic authentication
    if (config.auth) {
      const username = config.auth.username || '';
      const password = config.auth.password ? unescape(encodeURIComponent(config.auth.password)) : '';
      requestHeaders.set('Authorization', 'Basic ' + btoa(username + ':' + password));
    }

    const fullPath = buildFullPath(config.baseURL, config.url);

    request.open(config.method.toUpperCase(), buildURL(fullPath, config.params, config.paramsSerializer), true);

    // Set the request timeout in MS
    request.timeout = config.timeout;

    function onloadend() {
      if (!request) {
        return;
      }
      // Prepare the response
      const responseHeaders = core_AxiosHeaders.from(
        'getAllResponseHeaders' in request && request.getAllResponseHeaders()
      );
      const responseData = !responseType || responseType === 'text' || responseType === 'json' ?
        request.responseText : request.response;
      const response = {
        data: responseData,
        status: request.status,
        statusText: request.statusText,
        headers: responseHeaders,
        config,
        request
      };

      settle(function _resolve(value) {
        resolve(value);
        done();
      }, function _reject(err) {
        reject(err);
        done();
      }, response);

      // Clean up request
      request = null;
    }

    if ('onloadend' in request) {
      // Use onloadend if available
      request.onloadend = onloadend;
    } else {
      // Listen for ready state to emulate onloadend
      request.onreadystatechange = function handleLoad() {
        if (!request || request.readyState !== 4) {
          return;
        }

        // The request errored out and we didn't get a response, this will be
        // handled by onerror instead
        // With one exception: request that using file: protocol, most browsers
        // will return status as 0 even though it's a successful request
        if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf('file:') === 0)) {
          return;
        }
        // readystate handler is calling before onerror or ontimeout handlers,
        // so we should call onloadend on the next 'tick'
        setTimeout(onloadend);
      };
    }

    // Handle browser request cancellation (as opposed to a manual cancellation)
    request.onabort = function handleAbort() {
      if (!request) {
        return;
      }

      reject(new core_AxiosError('Request aborted', core_AxiosError.ECONNABORTED, config, request));

      // Clean up request
      request = null;
    };

    // Handle low level network errors
    request.onerror = function handleError() {
      // Real errors are hidden from us by the browser
      // onerror should only fire if it's a network error
      reject(new core_AxiosError('Network Error', core_AxiosError.ERR_NETWORK, config, request));

      // Clean up request
      request = null;
    };

    // Handle timeout
    request.ontimeout = function handleTimeout() {
      let timeoutErrorMessage = config.timeout ? 'timeout of ' + config.timeout + 'ms exceeded' : 'timeout exceeded';
      const transitional = config.transitional || defaults_transitional;
      if (config.timeoutErrorMessage) {
        timeoutErrorMessage = config.timeoutErrorMessage;
      }
      reject(new core_AxiosError(
        timeoutErrorMessage,
        transitional.clarifyTimeoutError ? core_AxiosError.ETIMEDOUT : core_AxiosError.ECONNABORTED,
        config,
        request));

      // Clean up request
      request = null;
    };

    // Add xsrf header
    // This is only done if running in a standard browser environment.
    // Specifically not if we're in a web worker, or react-native.
    if (browser.isStandardBrowserEnv) {
      // Add xsrf header
      const xsrfValue = (config.withCredentials || isURLSameOrigin(fullPath))
        && config.xsrfCookieName && cookies.read(config.xsrfCookieName);

      if (xsrfValue) {
        requestHeaders.set(config.xsrfHeaderName, xsrfValue);
      }
    }

    // Remove Content-Type if data is undefined
    requestData === undefined && requestHeaders.setContentType(null);

    // Add headers to the request
    if ('setRequestHeader' in request) {
      utils.forEach(requestHeaders.toJSON(), function setRequestHeader(val, key) {
        request.setRequestHeader(key, val);
      });
    }

    // Add withCredentials to request if needed
    if (!utils.isUndefined(config.withCredentials)) {
      request.withCredentials = !!config.withCredentials;
    }

    // Add responseType to request if needed
    if (responseType && responseType !== 'json') {
      request.responseType = config.responseType;
    }

    // Handle progress if needed
    if (typeof config.onDownloadProgress === 'function') {
      request.addEventListener('progress', progressEventReducer(config.onDownloadProgress, true));
    }

    // Not all browsers support upload events
    if (typeof config.onUploadProgress === 'function' && request.upload) {
      request.upload.addEventListener('progress', progressEventReducer(config.onUploadProgress));
    }

    if (config.cancelToken || config.signal) {
      // Handle cancellation
      // eslint-disable-next-line func-names
      onCanceled = cancel => {
        if (!request) {
          return;
        }
        reject(!cancel || cancel.type ? new cancel_CanceledError(null, config, request) : cancel);
        request.abort();
        request = null;
      };

      config.cancelToken && config.cancelToken.subscribe(onCanceled);
      if (config.signal) {
        config.signal.aborted ? onCanceled() : config.signal.addEventListener('abort', onCanceled);
      }
    }

    const protocol = parseProtocol(fullPath);

    if (protocol && browser.protocols.indexOf(protocol) === -1) {
      reject(new core_AxiosError('Unsupported protocol ' + protocol + ':', core_AxiosError.ERR_BAD_REQUEST, config));
      return;
    }


    // Send the request
    request.send(requestData || null);
  });
});

;// CONCATENATED MODULE: ./node_modules/axios/lib/adapters/adapters.js





const knownAdapters = {
  http: helpers_null,
  xhr: xhr
}

utils.forEach(knownAdapters, (fn, value) => {
  if(fn) {
    try {
      Object.defineProperty(fn, 'name', {value});
    } catch (e) {
      // eslint-disable-next-line no-empty
    }
    Object.defineProperty(fn, 'adapterName', {value});
  }
});

/* harmony default export */ const adapters = ({
  getAdapter: (adapters) => {
    adapters = utils.isArray(adapters) ? adapters : [adapters];

    const {length} = adapters;
    let nameOrAdapter;
    let adapter;

    for (let i = 0; i < length; i++) {
      nameOrAdapter = adapters[i];
      if((adapter = utils.isString(nameOrAdapter) ? knownAdapters[nameOrAdapter.toLowerCase()] : nameOrAdapter)) {
        break;
      }
    }

    if (!adapter) {
      if (adapter === false) {
        throw new core_AxiosError(
          `Adapter ${nameOrAdapter} is not supported by the environment`,
          'ERR_NOT_SUPPORT'
        );
      }

      throw new Error(
        utils.hasOwnProp(knownAdapters, nameOrAdapter) ?
          `Adapter '${nameOrAdapter}' is not available in the build` :
          `Unknown adapter '${nameOrAdapter}'`
      );
    }

    if (!utils.isFunction(adapter)) {
      throw new TypeError('adapter is not a function');
    }

    return adapter;
  },
  adapters: knownAdapters
});

;// CONCATENATED MODULE: ./node_modules/axios/lib/core/dispatchRequest.js









/**
 * Throws a `CanceledError` if cancellation has been requested.
 *
 * @param {Object} config The config that is to be used for the request
 *
 * @returns {void}
 */
function throwIfCancellationRequested(config) {
  if (config.cancelToken) {
    config.cancelToken.throwIfRequested();
  }

  if (config.signal && config.signal.aborted) {
    throw new cancel_CanceledError(null, config);
  }
}

/**
 * Dispatch a request to the server using the configured adapter.
 *
 * @param {object} config The config that is to be used for the request
 *
 * @returns {Promise} The Promise to be fulfilled
 */
function dispatchRequest(config) {
  throwIfCancellationRequested(config);

  config.headers = core_AxiosHeaders.from(config.headers);

  // Transform request data
  config.data = transformData.call(
    config,
    config.transformRequest
  );

  if (['post', 'put', 'patch'].indexOf(config.method) !== -1) {
    config.headers.setContentType('application/x-www-form-urlencoded', false);
  }

  const adapter = adapters.getAdapter(config.adapter || lib_defaults.adapter);

  return adapter(config).then(function onAdapterResolution(response) {
    throwIfCancellationRequested(config);

    // Transform response data
    response.data = transformData.call(
      config,
      config.transformResponse,
      response
    );

    response.headers = core_AxiosHeaders.from(response.headers);

    return response;
  }, function onAdapterRejection(reason) {
    if (!isCancel(reason)) {
      throwIfCancellationRequested(config);

      // Transform response data
      if (reason && reason.response) {
        reason.response.data = transformData.call(
          config,
          config.transformResponse,
          reason.response
        );
        reason.response.headers = core_AxiosHeaders.from(reason.response.headers);
      }
    }

    return Promise.reject(reason);
  });
}

;// CONCATENATED MODULE: ./node_modules/axios/lib/core/mergeConfig.js





const headersToObject = (thing) => thing instanceof core_AxiosHeaders ? thing.toJSON() : thing;

/**
 * Config-specific merge-function which creates a new config-object
 * by merging two configuration objects together.
 *
 * @param {Object} config1
 * @param {Object} config2
 *
 * @returns {Object} New object resulting from merging config2 to config1
 */
function mergeConfig(config1, config2) {
  // eslint-disable-next-line no-param-reassign
  config2 = config2 || {};
  const config = {};

  function getMergedValue(target, source, caseless) {
    if (utils.isPlainObject(target) && utils.isPlainObject(source)) {
      return utils.merge.call({caseless}, target, source);
    } else if (utils.isPlainObject(source)) {
      return utils.merge({}, source);
    } else if (utils.isArray(source)) {
      return source.slice();
    }
    return source;
  }

  // eslint-disable-next-line consistent-return
  function mergeDeepProperties(a, b, caseless) {
    if (!utils.isUndefined(b)) {
      return getMergedValue(a, b, caseless);
    } else if (!utils.isUndefined(a)) {
      return getMergedValue(undefined, a, caseless);
    }
  }

  // eslint-disable-next-line consistent-return
  function valueFromConfig2(a, b) {
    if (!utils.isUndefined(b)) {
      return getMergedValue(undefined, b);
    }
  }

  // eslint-disable-next-line consistent-return
  function defaultToConfig2(a, b) {
    if (!utils.isUndefined(b)) {
      return getMergedValue(undefined, b);
    } else if (!utils.isUndefined(a)) {
      return getMergedValue(undefined, a);
    }
  }

  // eslint-disable-next-line consistent-return
  function mergeDirectKeys(a, b, prop) {
    if (prop in config2) {
      return getMergedValue(a, b);
    } else if (prop in config1) {
      return getMergedValue(undefined, a);
    }
  }

  const mergeMap = {
    url: valueFromConfig2,
    method: valueFromConfig2,
    data: valueFromConfig2,
    baseURL: defaultToConfig2,
    transformRequest: defaultToConfig2,
    transformResponse: defaultToConfig2,
    paramsSerializer: defaultToConfig2,
    timeout: defaultToConfig2,
    timeoutMessage: defaultToConfig2,
    withCredentials: defaultToConfig2,
    adapter: defaultToConfig2,
    responseType: defaultToConfig2,
    xsrfCookieName: defaultToConfig2,
    xsrfHeaderName: defaultToConfig2,
    onUploadProgress: defaultToConfig2,
    onDownloadProgress: defaultToConfig2,
    decompress: defaultToConfig2,
    maxContentLength: defaultToConfig2,
    maxBodyLength: defaultToConfig2,
    beforeRedirect: defaultToConfig2,
    transport: defaultToConfig2,
    httpAgent: defaultToConfig2,
    httpsAgent: defaultToConfig2,
    cancelToken: defaultToConfig2,
    socketPath: defaultToConfig2,
    responseEncoding: defaultToConfig2,
    validateStatus: mergeDirectKeys,
    headers: (a, b) => mergeDeepProperties(headersToObject(a), headersToObject(b), true)
  };

  utils.forEach(Object.keys(config1).concat(Object.keys(config2)), function computeConfigValue(prop) {
    const merge = mergeMap[prop] || mergeDeepProperties;
    const configValue = merge(config1[prop], config2[prop], prop);
    (utils.isUndefined(configValue) && merge !== mergeDirectKeys) || (config[prop] = configValue);
  });

  return config;
}

;// CONCATENATED MODULE: ./node_modules/axios/lib/env/data.js
const VERSION = "1.3.5";
;// CONCATENATED MODULE: ./node_modules/axios/lib/helpers/validator.js





const validators = {};

// eslint-disable-next-line func-names
['object', 'boolean', 'number', 'function', 'string', 'symbol'].forEach((type, i) => {
  validators[type] = function validator(thing) {
    return typeof thing === type || 'a' + (i < 1 ? 'n ' : ' ') + type;
  };
});

const deprecatedWarnings = {};

/**
 * Transitional option validator
 *
 * @param {function|boolean?} validator - set to false if the transitional option has been removed
 * @param {string?} version - deprecated version / removed since version
 * @param {string?} message - some message with additional info
 *
 * @returns {function}
 */
validators.transitional = function transitional(validator, version, message) {
  function formatMessage(opt, desc) {
    return '[Axios v' + VERSION + '] Transitional option \'' + opt + '\'' + desc + (message ? '. ' + message : '');
  }

  // eslint-disable-next-line func-names
  return (value, opt, opts) => {
    if (validator === false) {
      throw new core_AxiosError(
        formatMessage(opt, ' has been removed' + (version ? ' in ' + version : '')),
        core_AxiosError.ERR_DEPRECATED
      );
    }

    if (version && !deprecatedWarnings[opt]) {
      deprecatedWarnings[opt] = true;
      // eslint-disable-next-line no-console
      console.warn(
        formatMessage(
          opt,
          ' has been deprecated since v' + version + ' and will be removed in the near future'
        )
      );
    }

    return validator ? validator(value, opt, opts) : true;
  };
};

/**
 * Assert object's properties type
 *
 * @param {object} options
 * @param {object} schema
 * @param {boolean?} allowUnknown
 *
 * @returns {object}
 */

function assertOptions(options, schema, allowUnknown) {
  if (typeof options !== 'object') {
    throw new core_AxiosError('options must be an object', core_AxiosError.ERR_BAD_OPTION_VALUE);
  }
  const keys = Object.keys(options);
  let i = keys.length;
  while (i-- > 0) {
    const opt = keys[i];
    const validator = schema[opt];
    if (validator) {
      const value = options[opt];
      const result = value === undefined || validator(value, opt, options);
      if (result !== true) {
        throw new core_AxiosError('option ' + opt + ' must be ' + result, core_AxiosError.ERR_BAD_OPTION_VALUE);
      }
      continue;
    }
    if (allowUnknown !== true) {
      throw new core_AxiosError('Unknown option ' + opt, core_AxiosError.ERR_BAD_OPTION);
    }
  }
}

/* harmony default export */ const validator = ({
  assertOptions,
  validators
});

;// CONCATENATED MODULE: ./node_modules/axios/lib/core/Axios.js











const Axios_validators = validator.validators;

/**
 * Create a new instance of Axios
 *
 * @param {Object} instanceConfig The default config for the instance
 *
 * @return {Axios} A new instance of Axios
 */
class Axios {
  constructor(instanceConfig) {
    this.defaults = instanceConfig;
    this.interceptors = {
      request: new core_InterceptorManager(),
      response: new core_InterceptorManager()
    };
  }

  /**
   * Dispatch a request
   *
   * @param {String|Object} configOrUrl The config specific for this request (merged with this.defaults)
   * @param {?Object} config
   *
   * @returns {Promise} The Promise to be fulfilled
   */
  request(configOrUrl, config) {
    /*eslint no-param-reassign:0*/
    // Allow for axios('example/url'[, config]) a la fetch API
    if (typeof configOrUrl === 'string') {
      config = config || {};
      config.url = configOrUrl;
    } else {
      config = configOrUrl || {};
    }

    config = mergeConfig(this.defaults, config);

    const {transitional, paramsSerializer, headers} = config;

    if (transitional !== undefined) {
      validator.assertOptions(transitional, {
        silentJSONParsing: Axios_validators.transitional(Axios_validators.boolean),
        forcedJSONParsing: Axios_validators.transitional(Axios_validators.boolean),
        clarifyTimeoutError: Axios_validators.transitional(Axios_validators.boolean)
      }, false);
    }

    if (paramsSerializer != null) {
      if (utils.isFunction(paramsSerializer)) {
        config.paramsSerializer = {
          serialize: paramsSerializer
        }
      } else {
        validator.assertOptions(paramsSerializer, {
          encode: Axios_validators.function,
          serialize: Axios_validators.function
        }, true);
      }
    }

    // Set config.method
    config.method = (config.method || this.defaults.method || 'get').toLowerCase();

    let contextHeaders;

    // Flatten headers
    contextHeaders = headers && utils.merge(
      headers.common,
      headers[config.method]
    );

    contextHeaders && utils.forEach(
      ['delete', 'get', 'head', 'post', 'put', 'patch', 'common'],
      (method) => {
        delete headers[method];
      }
    );

    config.headers = core_AxiosHeaders.concat(contextHeaders, headers);

    // filter out skipped interceptors
    const requestInterceptorChain = [];
    let synchronousRequestInterceptors = true;
    this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
      if (typeof interceptor.runWhen === 'function' && interceptor.runWhen(config) === false) {
        return;
      }

      synchronousRequestInterceptors = synchronousRequestInterceptors && interceptor.synchronous;

      requestInterceptorChain.unshift(interceptor.fulfilled, interceptor.rejected);
    });

    const responseInterceptorChain = [];
    this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
      responseInterceptorChain.push(interceptor.fulfilled, interceptor.rejected);
    });

    let promise;
    let i = 0;
    let len;

    if (!synchronousRequestInterceptors) {
      const chain = [dispatchRequest.bind(this), undefined];
      chain.unshift.apply(chain, requestInterceptorChain);
      chain.push.apply(chain, responseInterceptorChain);
      len = chain.length;

      promise = Promise.resolve(config);

      while (i < len) {
        promise = promise.then(chain[i++], chain[i++]);
      }

      return promise;
    }

    len = requestInterceptorChain.length;

    let newConfig = config;

    i = 0;

    while (i < len) {
      const onFulfilled = requestInterceptorChain[i++];
      const onRejected = requestInterceptorChain[i++];
      try {
        newConfig = onFulfilled(newConfig);
      } catch (error) {
        onRejected.call(this, error);
        break;
      }
    }

    try {
      promise = dispatchRequest.call(this, newConfig);
    } catch (error) {
      return Promise.reject(error);
    }

    i = 0;
    len = responseInterceptorChain.length;

    while (i < len) {
      promise = promise.then(responseInterceptorChain[i++], responseInterceptorChain[i++]);
    }

    return promise;
  }

  getUri(config) {
    config = mergeConfig(this.defaults, config);
    const fullPath = buildFullPath(config.baseURL, config.url);
    return buildURL(fullPath, config.params, config.paramsSerializer);
  }
}

// Provide aliases for supported request methods
utils.forEach(['delete', 'get', 'head', 'options'], function forEachMethodNoData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, config) {
    return this.request(mergeConfig(config || {}, {
      method,
      url,
      data: (config || {}).data
    }));
  };
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  /*eslint func-names:0*/

  function generateHTTPMethod(isForm) {
    return function httpMethod(url, data, config) {
      return this.request(mergeConfig(config || {}, {
        method,
        headers: isForm ? {
          'Content-Type': 'multipart/form-data'
        } : {},
        url,
        data
      }));
    };
  }

  Axios.prototype[method] = generateHTTPMethod();

  Axios.prototype[method + 'Form'] = generateHTTPMethod(true);
});

/* harmony default export */ const core_Axios = (Axios);

;// CONCATENATED MODULE: ./node_modules/axios/lib/cancel/CancelToken.js




/**
 * A `CancelToken` is an object that can be used to request cancellation of an operation.
 *
 * @param {Function} executor The executor function.
 *
 * @returns {CancelToken}
 */
class CancelToken {
  constructor(executor) {
    if (typeof executor !== 'function') {
      throw new TypeError('executor must be a function.');
    }

    let resolvePromise;

    this.promise = new Promise(function promiseExecutor(resolve) {
      resolvePromise = resolve;
    });

    const token = this;

    // eslint-disable-next-line func-names
    this.promise.then(cancel => {
      if (!token._listeners) return;

      let i = token._listeners.length;

      while (i-- > 0) {
        token._listeners[i](cancel);
      }
      token._listeners = null;
    });

    // eslint-disable-next-line func-names
    this.promise.then = onfulfilled => {
      let _resolve;
      // eslint-disable-next-line func-names
      const promise = new Promise(resolve => {
        token.subscribe(resolve);
        _resolve = resolve;
      }).then(onfulfilled);

      promise.cancel = function reject() {
        token.unsubscribe(_resolve);
      };

      return promise;
    };

    executor(function cancel(message, config, request) {
      if (token.reason) {
        // Cancellation has already been requested
        return;
      }

      token.reason = new cancel_CanceledError(message, config, request);
      resolvePromise(token.reason);
    });
  }

  /**
   * Throws a `CanceledError` if cancellation has been requested.
   */
  throwIfRequested() {
    if (this.reason) {
      throw this.reason;
    }
  }

  /**
   * Subscribe to the cancel signal
   */

  subscribe(listener) {
    if (this.reason) {
      listener(this.reason);
      return;
    }

    if (this._listeners) {
      this._listeners.push(listener);
    } else {
      this._listeners = [listener];
    }
  }

  /**
   * Unsubscribe from the cancel signal
   */

  unsubscribe(listener) {
    if (!this._listeners) {
      return;
    }
    const index = this._listeners.indexOf(listener);
    if (index !== -1) {
      this._listeners.splice(index, 1);
    }
  }

  /**
   * Returns an object that contains a new `CancelToken` and a function that, when called,
   * cancels the `CancelToken`.
   */
  static source() {
    let cancel;
    const token = new CancelToken(function executor(c) {
      cancel = c;
    });
    return {
      token,
      cancel
    };
  }
}

/* harmony default export */ const cancel_CancelToken = (CancelToken);

;// CONCATENATED MODULE: ./node_modules/axios/lib/helpers/spread.js


/**
 * Syntactic sugar for invoking a function and expanding an array for arguments.
 *
 * Common use case would be to use `Function.prototype.apply`.
 *
 *  ```js
 *  function f(x, y, z) {}
 *  var args = [1, 2, 3];
 *  f.apply(null, args);
 *  ```
 *
 * With `spread` this example can be re-written.
 *
 *  ```js
 *  spread(function(x, y, z) {})([1, 2, 3]);
 *  ```
 *
 * @param {Function} callback
 *
 * @returns {Function}
 */
function spread(callback) {
  return function wrap(arr) {
    return callback.apply(null, arr);
  };
}

;// CONCATENATED MODULE: ./node_modules/axios/lib/helpers/isAxiosError.js




/**
 * Determines whether the payload is an error thrown by Axios
 *
 * @param {*} payload The value to test
 *
 * @returns {boolean} True if the payload is an error thrown by Axios, otherwise false
 */
function isAxiosError(payload) {
  return utils.isObject(payload) && (payload.isAxiosError === true);
}

;// CONCATENATED MODULE: ./node_modules/axios/lib/helpers/HttpStatusCode.js
const HttpStatusCode = {
  Continue: 100,
  SwitchingProtocols: 101,
  Processing: 102,
  EarlyHints: 103,
  Ok: 200,
  Created: 201,
  Accepted: 202,
  NonAuthoritativeInformation: 203,
  NoContent: 204,
  ResetContent: 205,
  PartialContent: 206,
  MultiStatus: 207,
  AlreadyReported: 208,
  ImUsed: 226,
  MultipleChoices: 300,
  MovedPermanently: 301,
  Found: 302,
  SeeOther: 303,
  NotModified: 304,
  UseProxy: 305,
  Unused: 306,
  TemporaryRedirect: 307,
  PermanentRedirect: 308,
  BadRequest: 400,
  Unauthorized: 401,
  PaymentRequired: 402,
  Forbidden: 403,
  NotFound: 404,
  MethodNotAllowed: 405,
  NotAcceptable: 406,
  ProxyAuthenticationRequired: 407,
  RequestTimeout: 408,
  Conflict: 409,
  Gone: 410,
  LengthRequired: 411,
  PreconditionFailed: 412,
  PayloadTooLarge: 413,
  UriTooLong: 414,
  UnsupportedMediaType: 415,
  RangeNotSatisfiable: 416,
  ExpectationFailed: 417,
  ImATeapot: 418,
  MisdirectedRequest: 421,
  UnprocessableEntity: 422,
  Locked: 423,
  FailedDependency: 424,
  TooEarly: 425,
  UpgradeRequired: 426,
  PreconditionRequired: 428,
  TooManyRequests: 429,
  RequestHeaderFieldsTooLarge: 431,
  UnavailableForLegalReasons: 451,
  InternalServerError: 500,
  NotImplemented: 501,
  BadGateway: 502,
  ServiceUnavailable: 503,
  GatewayTimeout: 504,
  HttpVersionNotSupported: 505,
  VariantAlsoNegotiates: 506,
  InsufficientStorage: 507,
  LoopDetected: 508,
  NotExtended: 510,
  NetworkAuthenticationRequired: 511,
};

Object.entries(HttpStatusCode).forEach(([key, value]) => {
  HttpStatusCode[value] = key;
});

/* harmony default export */ const helpers_HttpStatusCode = (HttpStatusCode);

;// CONCATENATED MODULE: ./node_modules/axios/lib/axios.js



















/**
 * Create an instance of Axios
 *
 * @param {Object} defaultConfig The default config for the instance
 *
 * @returns {Axios} A new instance of Axios
 */
function createInstance(defaultConfig) {
  const context = new core_Axios(defaultConfig);
  const instance = bind(core_Axios.prototype.request, context);

  // Copy axios.prototype to instance
  utils.extend(instance, core_Axios.prototype, context, {allOwnKeys: true});

  // Copy context to instance
  utils.extend(instance, context, null, {allOwnKeys: true});

  // Factory for creating new instances
  instance.create = function create(instanceConfig) {
    return createInstance(mergeConfig(defaultConfig, instanceConfig));
  };

  return instance;
}

// Create the default instance to be exported
const axios = createInstance(lib_defaults);

// Expose Axios class to allow class inheritance
axios.Axios = core_Axios;

// Expose Cancel & CancelToken
axios.CanceledError = cancel_CanceledError;
axios.CancelToken = cancel_CancelToken;
axios.isCancel = isCancel;
axios.VERSION = VERSION;
axios.toFormData = helpers_toFormData;

// Expose AxiosError class
axios.AxiosError = core_AxiosError;

// alias for CanceledError for backward compatibility
axios.Cancel = axios.CanceledError;

// Expose all/spread
axios.all = function all(promises) {
  return Promise.all(promises);
};

axios.spread = spread;

// Expose isAxiosError
axios.isAxiosError = isAxiosError;

// Expose mergeConfig
axios.mergeConfig = mergeConfig;

axios.AxiosHeaders = core_AxiosHeaders;

axios.formToJSON = thing => helpers_formDataToJSON(utils.isHTMLForm(thing) ? new FormData(thing) : thing);

axios.HttpStatusCode = helpers_HttpStatusCode;

axios.default = axios;

// this module should only have a default export
/* harmony default export */ const lib_axios = (axios);

;// CONCATENATED MODULE: ./src/blocks/components/library-modal/single-item/index.js




function single_item_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function single_item_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? single_item_ownKeys(Object(source), !0).forEach(function (key) { defineProperty_defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : single_item_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }









/* harmony default export */ const single_item = ((0,external_wp_compose_namespaceObject.compose)([(0,external_wp_data_namespaceObject.withDispatch)(function (dispatch) {
  return {
    insertBlocks: dispatch('core/block-editor').insertBlocks
  };
})])(function (props) {
  var _useState = (0,external_wp_element_namespaceObject.useState)({
      isImporting: false,
      isImported: false,
      error: false
    }),
    _useState2 = slicedToArray_slicedToArray(_useState, 2),
    state = _useState2[0],
    setState = _useState2[1];
  var insertBlocks = props.insertBlocks,
    name = props.name,
    id = props.id,
    image = props.image,
    type = props.type;
  var importSection = function importSection() {
    return /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/external_regeneratorRuntime_default().mark(function _callee() {
      var _response$data, response, content;
      return external_regeneratorRuntime_default().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            setState(function (prev) {
              return single_item_objectSpread(single_item_objectSpread({}, prev), {}, {
                isImporting: true
              });
            });
            _context.prev = 1;
            _context.next = 4;
            return lib_axios.get("https://wpblockart.com/wp-json/blockart-library/v1/content?id=".concat(id));
          case 4:
            response = _context.sent;
            content = (_response$data = response === null || response === void 0 ? void 0 : response.data) !== null && _response$data !== void 0 ? _response$data : '';
            _context.next = 8;
            return save_images_locally(content);
          case 8:
            content = _context.sent;
            _context.next = 11;
            return insertBlocks((0,external_wp_blocks_namespaceObject.parse)(content));
          case 11:
            setState(function (prev) {
              return single_item_objectSpread(single_item_objectSpread({}, prev), {}, {
                isImporting: false,
                isImported: true
              });
            });
            _context.next = 17;
            break;
          case 14:
            _context.prev = 14;
            _context.t0 = _context["catch"](1);
            setState(function (prev) {
              return single_item_objectSpread(single_item_objectSpread({}, prev), {}, {
                isImporting: false,
                error: true
              });
            });
          case 17:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[1, 14]]);
    }));
  };
  return /*#__PURE__*/React.createElement("div", {
    className: classnames_default()("blockart-template", {
      'is-importing': state.isImporting
    })
  }, /*#__PURE__*/React.createElement("div", {
    className: "blockart-template-media loading"
  }, /*#__PURE__*/React.createElement("img", {
    onLoad: function onLoad(e) {
      return e.currentTarget.parentElement.classList.remove('loading');
    },
    width: "290",
    height: 'sections' === type ? '150' : '350',
    src: image.toString(),
    alt: name
  })), /*#__PURE__*/React.createElement("div", {
    className: "blockart-template-info"
  }, /*#__PURE__*/React.createElement("h4", null, name), /*#__PURE__*/React.createElement("button", {
    onClick: importSection(),
    style: {
      opacity: state.isImporting ? 1 : undefined
    }
  }, state.isImporting ? (0,external_wp_i18n_namespaceObject.__)('Importing', 'blockart') : state.isImported ? (0,external_wp_i18n_namespaceObject.__)('Imported', 'blockart') : state.error ? (0,external_wp_i18n_namespaceObject.__)('Failed', 'blockart') : (0,external_wp_i18n_namespaceObject.__)('Import', 'blockart'))), state.isImporting && /*#__PURE__*/React.createElement("div", {
    className: "blockart-template-overlay"
  }, /*#__PURE__*/React.createElement(external_wp_components_namespaceObject.Spinner, null)));
}));
;// CONCATENATED MODULE: ./src/blocks/components/layout/index.js






/* harmony default export */ const layout = (with_library_data(function (_ref) {
  var _data$get, _data$get2, _data$get3;
  var block = _ref.block,
    libraryData = _ref.libraryData,
    initLibraryData = _ref.initLibraryData;
  if (!Array.isArray(block)) {
    block = [block];
  }
  var data = new Map(libraryData);
  var status = (_data$get = data.get('status')) !== null && _data$get !== void 0 ? _data$get : '';
  var sections = (_data$get2 = data.get('sections')) !== null && _data$get2 !== void 0 ? _data$get2 : [];
  return /*#__PURE__*/React.createElement("div", {
    className: "blockart-layout"
  }, /*#__PURE__*/React.createElement(external_wp_components_namespaceObject.Tooltip, {
    text: (0,external_wp_i18n_namespaceObject.__)('Refresh', 'blockart')
  }, /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      initLibraryData(true);
    },
    className: "blockart-refresh-btn"
  }, /*#__PURE__*/React.createElement(components_icon, {
    type: "controlIcon",
    name: "reset"
  }))), 'success' === status ? (sections || []).filter(function (section) {
    return ((section === null || section === void 0 ? void 0 : section['included_blocks']) || []).some(function (i) {
      return block.includes(i.value);
    });
  }).map(function (_ref2, idx) {
    var id = _ref2.ID,
      name = _ref2.post_title,
      image = _ref2.post_thumbnail;
    return /*#__PURE__*/React.createElement(single_item, {
      key: idx,
      id: id,
      image: image,
      name: name,
      type: "sections"
    });
  }) : '' === status || 'fetching' === status ? /*#__PURE__*/React.createElement(external_wp_components_namespaceObject.Spinner, null) : /*#__PURE__*/React.createElement("p", {
    style: {
      gridColumn: '1/-1'
    }
  }, (_data$get3 = data.get('errorMsg')) !== null && _data$get3 !== void 0 ? _data$get3 : (0,external_wp_i18n_namespaceObject.__)('There is connection issue with wpblockart.com. This connection is required for importing templates and sections. Please contact your hosting provider to whitelist our server address wpblockart.com.', 'blockart')));
}));
;// CONCATENATED MODULE: ./src/blocks/components/input/index.js



/* harmony default export */ const input = ((0,external_wp_compose_namespaceObject.withInstanceId)(function (_ref) {
  var _ref$labelPosition = _ref.labelPosition,
    labelPosition = _ref$labelPosition === void 0 ? 'top' : _ref$labelPosition,
    label = _ref.label,
    _ref$onChange = _ref.onChange,
    _onChange = _ref$onChange === void 0 ? function () {} : _ref$onChange,
    id = _ref.instanceId,
    value = _ref.value,
    _ref$type = _ref.type,
    type = _ref$type === void 0 ? 'text' : _ref$type;
  return /*#__PURE__*/React.createElement("div", {
    className: "blockart-control blockart-input blockart-input-".concat(labelPosition)
  }, label && /*#__PURE__*/React.createElement("div", {
    className: "blockart-control-head"
  }, /*#__PURE__*/React.createElement("label", {
    htmlFor: "blockart-input-".concat(id)
  }, label)), /*#__PURE__*/React.createElement("div", {
    className: "blockart-control-body"
  }, /*#__PURE__*/React.createElement(external_wp_components_namespaceObject.TextControl, {
    id: "blockart-input-".concat(id),
    value: value !== null && value !== void 0 ? value : '',
    onChange: function onChange(val) {
      return _onChange(val);
    },
    type: type
  })));
}));
;// CONCATENATED MODULE: ./src/blocks/components/library-modal/index.js



function library_modal_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function library_modal_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? library_modal_ownKeys(Object(source), !0).forEach(function (key) { defineProperty_defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : library_modal_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }










/* harmony default export */ const library_modal = ((0,external_wp_compose_namespaceObject.compose)([with_library_data, (0,external_wp_data_namespaceObject.withDispatch)(function (dispatch) {
  return {
    removeBlock: dispatch('core/block-editor').removeBlock
  };
})])(function (props) {
  var _data$get, _templateData$type$le, _templateData$type, _templateData$templat;
  var _props$modalOnly = props.modalOnly,
    modalOnly = _props$modalOnly === void 0 ? false : _props$modalOnly,
    _props$hasModal = props.hasModal,
    isOpen = _props$hasModal === void 0 ? false : _props$hasModal,
    closeModal = props.closeModal,
    blockId = props.blockId,
    removeBlock = props.removeBlock,
    libraryData = props.libraryData,
    initLibraryData = props.initLibraryData;
  var data = new Map(libraryData);
  var _useState = (0,external_wp_element_namespaceObject.useState)({
      type: 'sections',
      search: '',
      category: '',
      starterPackId: '',
      isModalOpen: false,
      isModalOnly: false
    }),
    _useState2 = slicedToArray_slicedToArray(_useState, 2),
    state = _useState2[0],
    setState = _useState2[1];
  var contentRef = (0,external_wp_element_namespaceObject.useRef)();
  var templateData = {
    sections: data.get('sections'),
    templates: data.get('templates'),
    'starter-packs': data.get('starter-packs')
  };
  var status = (_data$get = data.get('status')) !== null && _data$get !== void 0 ? _data$get : '';
  var type = state.type,
    search = state.search,
    category = state.category,
    starterPackId = state.starterPackId,
    isModalOpen = state.isModalOpen,
    isModalOnly = state.isModalOnly;
  var titles = {
    sections: (0,external_wp_i18n_namespaceObject.__)('Sections', 'blockart'),
    'starter-packs': (0,external_wp_i18n_namespaceObject.__)('Starter Packs', 'blockart'),
    templates: (0,external_wp_i18n_namespaceObject.__)('Templates', 'blockart')
  };
  var currentCategories = (0,external_wp_element_namespaceObject.useMemo)(function () {
    if ('' !== starterPackId && 'starter-packs' === type) {
      return [];
    }
    return ((templateData === null || templateData === void 0 ? void 0 : templateData[type]) || []).reduce(function (acc, _ref) {
      var cat = _ref.category;
      acc = [].concat(_toConsumableArray(acc), _toConsumableArray(cat)).filter(function (c, idx, arr) {
        return idx === arr.findIndex(function (a) {
          return a.slug === c.slug;
        });
      });
      return acc;
    }, [])
    // eslint-disable-next-line no-nested-ternary
    .sort(function (a, b) {
      return a.name.toUpperCase() < b.name.toUpperCase() ? -1 : a.name.toUpperCase() > b.name.toUpperCase() ? 1 : 0;
    }).map(function (_, index, arr) {
      var _filter;
      return library_modal_objectSpread(library_modal_objectSpread({}, arr[index]), {}, {
        count: ((_filter = ((templateData === null || templateData === void 0 ? void 0 : templateData[type]) || []).filter(function (t) {
          return t.category.some(function (tc) {
            return tc.slug === arr[index].slug;
          });
        })) === null || _filter === void 0 ? void 0 : _filter.length) || 0
      });
    });
  }, [type, starterPackId, status]);
  var currentContent = (0,external_wp_element_namespaceObject.useMemo)(function () {
    return ((templateData === null || templateData === void 0 ? void 0 : templateData[type]) || []).filter(function (t) {
      return '' !== category ? t.category.some(function (tc) {
        return tc.slug === category;
      }) : true;
    }).filter(function (t) {
      return '' !== search ? t.post_title.toLowerCase().includes(search) : true;
    });
  }, [type, category, search, status]);
  var onModalClose = function onModalClose() {
    closeModal();
    setState(library_modal_objectSpread(library_modal_objectSpread({}, state), {}, {
      isModalOpen: false
    }));
    if (isModalOnly) {
      removeBlock(blockId);
    }
  };
  (0,external_wp_element_namespaceObject.useEffect)(function () {
    if (!isOpen || !contentRef.current) return;
    contentRef.current.scrollTop = 0;
  }, [search, category, type, starterPackId]);
  (0,external_wp_element_namespaceObject.useEffect)(function () {
    setState(library_modal_objectSpread(library_modal_objectSpread({}, state), {}, {
      isModalOnly: modalOnly,
      isModalOpen: isOpen
    }));
  }, []);
  if (!isModalOpen) {
    return null;
  }
  return /*#__PURE__*/React.createElement(external_wp_components_namespaceObject.Modal, {
    __experimentalHideHeader: true,
    className: "blockart-library-modal",
    overlayClassName: "blockart-library-modal-overlay",
    title: (0,external_wp_i18n_namespaceObject.__)('Blockart Library', 'blockart'),
    onRequestClose: onModalClose
  }, /*#__PURE__*/React.createElement("div", {
    className: "blockart-library-modal-head"
  }, /*#__PURE__*/React.createElement("div", {
    className: "blockart-library-modal-logo"
  }, /*#__PURE__*/React.createElement("h2", null, "BlockArt")), /*#__PURE__*/React.createElement("div", {
    className: "blockart-library-modal-actions"
  }, /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return setState(library_modal_objectSpread(library_modal_objectSpread({}, state), {}, {
        type: 'sections',
        search: '',
        category: ''
      }));
    },
    className: classnames_default()({
      active: 'sections' === type
    })
  }, (0,external_wp_i18n_namespaceObject.__)('Sections', 'blockart')), /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return setState(library_modal_objectSpread(library_modal_objectSpread({}, state), {}, {
        type: 'starter-packs',
        search: '',
        category: ''
      }));
    },
    className: classnames_default()({
      active: 'starter-packs' === type
    })
  }, (0,external_wp_i18n_namespaceObject.__)('Starter Packs', 'blockart')), /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return setState(library_modal_objectSpread(library_modal_objectSpread({}, state), {}, {
        type: 'templates',
        search: '',
        category: ''
      }));
    },
    className: classnames_default()({
      active: 'templates' === type
    })
  }, (0,external_wp_i18n_namespaceObject.__)('Templates', 'blockart'))), /*#__PURE__*/React.createElement("div", {
    className: "blockart-library-modal-close"
  }, /*#__PURE__*/React.createElement("button", {
    onClick: onModalClose
  }, /*#__PURE__*/React.createElement(components_icon, {
    type: "frontendIcon",
    name: "close"
  })))), /*#__PURE__*/React.createElement("div", {
    className: "blockart-library-modal-body"
  }, /*#__PURE__*/React.createElement("div", {
    className: "blockart-library-modal-sidebar"
  }, /*#__PURE__*/React.createElement("div", {
    className: "blockart-library-modal-search"
  }, /*#__PURE__*/React.createElement("input", {
    type: "text",
    defaultValue: search,
    placeholder: (0,external_wp_i18n_namespaceObject.__)('Search Block', 'blockart'),
    onChange: function onChange(e) {
      return setState(library_modal_objectSpread(library_modal_objectSpread({}, state), {}, {
        search: e.currentTarget.value
      }));
    }
  }), /*#__PURE__*/React.createElement(components_icon, {
    type: "frontendIcon",
    name: "search-o"
  })), /*#__PURE__*/React.createElement("h3", null, (0,external_wp_i18n_namespaceObject.__)('CATEGORIES', 'blockart')), /*#__PURE__*/React.createElement("ul", {
    className: "blockart-library-modal-category-filter"
  }, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("button", {
    disabled: 'fetching' === status,
    className: classnames_default()({
      'is-active': '' === category
    }),
    onClick: function onClick() {
      return setState(library_modal_objectSpread(library_modal_objectSpread({}, state), {}, {
        category: ''
      }));
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "title"
  }, (0,external_wp_i18n_namespaceObject.__)('All ', 'blockart') + titles[type]), /*#__PURE__*/React.createElement("span", {
    className: "count"
  }, 'success' === status ? (_templateData$type$le = templateData === null || templateData === void 0 ? void 0 : (_templateData$type = templateData[type]) === null || _templateData$type === void 0 ? void 0 : _templateData$type.length) !== null && _templateData$type$le !== void 0 ? _templateData$type$le : 0 : 0))), 'success' === status && (currentCategories || []).map(function (_ref2, idx) {
    var slug = _ref2.slug,
      name = _ref2.name,
      count = _ref2.count;
    return /*#__PURE__*/React.createElement("li", {
      key: idx
    }, /*#__PURE__*/React.createElement("button", {
      className: classnames_default()({
        'is-active': slug === category
      }),
      onClick: function onClick() {
        return setState(library_modal_objectSpread(library_modal_objectSpread({}, state), {}, {
          category: slug
        }));
      }
    }, /*#__PURE__*/React.createElement("span", {
      className: "title"
    }, name), /*#__PURE__*/React.createElement("span", {
      className: "count"
    }, count)));
  }))), /*#__PURE__*/React.createElement("div", {
    ref: contentRef,
    className: "blockart-library-modal-content"
  }, /*#__PURE__*/React.createElement("div", {
    className: "blockart-library-modal-content-area"
  }, /*#__PURE__*/React.createElement("div", {
    className: "blockart-library-modal-sub-header"
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }
  }, '' !== starterPackId && 'starter-packs' === type ? /*#__PURE__*/React.createElement("button", {
    className: "blockart-library-modal-back-button",
    onClick: function onClick() {
      return setState(library_modal_objectSpread(library_modal_objectSpread({}, state), {}, {
        starterPackId: ''
      }));
    }
  }, /*#__PURE__*/React.createElement(components_icon, {
    type: "frontendIcon",
    name: "arrow-left"
  }), " ", (0,external_wp_i18n_namespaceObject.__)('Return', 'blockart')) : /*#__PURE__*/React.createElement("span", null, (0,external_wp_i18n_namespaceObject.__)('All ', 'blockart') + titles[type]), /*#__PURE__*/React.createElement("button", {
    disabled: 'fetching' === status,
    onClick: function onClick() {
      setState(function (prev) {
        return library_modal_objectSpread(library_modal_objectSpread({}, prev), {}, {
          status: 'fetching'
        });
      });
      initLibraryData(true);
    }
  }, (0,external_wp_i18n_namespaceObject.__)('Refresh', 'blockart')))), /*#__PURE__*/React.createElement("div", {
    className: classnames_default()('blockart-templates', {
      'has-layer': 'starter-packs' === type && '' === starterPackId
    })
  }, 'success' === status ? /*#__PURE__*/React.createElement(React.Fragment, null, ('sections' === type || 'templates' === type) && (currentContent || []).map(function (_ref3) {
    var id = _ref3.ID,
      name = _ref3.post_title,
      image = _ref3.post_thumbnail;
    return /*#__PURE__*/React.createElement(single_item, {
      key: id,
      name: name,
      id: id,
      image: image,
      type: type
    });
  }), 'starter-packs' === type && ('' !== starterPackId ? ((_templateData$templat = templateData.templates) !== null && _templateData$templat !== void 0 ? _templateData$templat : []).filter(function (t) {
    return parseInt(t.post_parent) === parseInt(starterPackId);
  }).filter(function (t) {
    return '' !== search ? t.post_title.toLowerCase().includes(search) : true;
  }).map(function (_ref4) {
    var id = _ref4.ID,
      name = _ref4.post_title,
      image = _ref4.post_thumbnail;
    return /*#__PURE__*/React.createElement(single_item, {
      key: id,
      name: name,
      id: id,
      image: image,
      type: 'templates'
    });
  }) : (currentContent || []).map(function (_ref5) {
    var id = _ref5.ID,
      name = _ref5.post_title,
      image = _ref5.post_thumbnail;
    return /*#__PURE__*/React.createElement("div", {
      key: id,
      tabIndex: "0",
      onKeyDown: function onKeyDown(e) {
        return 'Enter' === e.key && setState(library_modal_objectSpread(library_modal_objectSpread({}, state), {}, {
          starterPackId: id
        }));
      },
      role: "button",
      onClick: function onClick() {
        return setState(library_modal_objectSpread(library_modal_objectSpread({}, state), {}, {
          starterPackId: id
        }));
      },
      className: "blockart-template"
    }, /*#__PURE__*/React.createElement("div", {
      className: "blockart-template-media loading"
    }, /*#__PURE__*/React.createElement("img", {
      width: "290",
      height: "350",
      src: image,
      alt: name,
      className: "loading",
      onLoad: function onLoad(e) {
        return e.currentTarget.parentElement.classList.remove('loading');
      }
    })), /*#__PURE__*/React.createElement("div", {
      className: "blockart-template-info"
    }, /*#__PURE__*/React.createElement("h4", null, name)));
  })), 0 === (currentContent === null || currentContent === void 0 ? void 0 : currentContent.length) && /*#__PURE__*/React.createElement("p", null, "No results")) : 'fetching' === status || '' === status ? /*#__PURE__*/React.createElement(external_wp_components_namespaceObject.Spinner, null) : /*#__PURE__*/React.createElement("p", {
    style: {
      gridColumn: '1/-1'
    }
  }, data.get('errorMsg') || (0,external_wp_i18n_namespaceObject.__)('There is connection issue with wpblockart.com. This connection is required for importing templates and sections. Please contact your hosting provider to whitelist our server address wpblockart.com.', 'blockart')))))));
}));
;// CONCATENATED MODULE: ./src/blocks/components/tooltip/index.js



/* harmony default export */ const tooltip = (function (props) {
  var _useState = useState(false),
    _useState2 = _slicedToArray(_useState, 2),
    open = _useState2[0],
    setOpen = _useState2[1];
  var ref = useRef();
  var children = props.children,
    _props$position = props.position,
    position = _props$position === void 0 ? 'top right' : _props$position,
    content = props.content;
  useEffect(function () {
    var el = ref.current;
    if (!el) return;
    el === null || el === void 0 ? void 0 : el.addEventListener('mouseenter', function () {
      return setOpen(true);
    });
    el === null || el === void 0 ? void 0 : el.addEventListener('mouseleave', function () {
      return setOpen(false);
    });
    return function () {
      el === null || el === void 0 ? void 0 : el.removeEventListener('mouseenter', function () {
        return setOpen(true);
      });
      el === null || el === void 0 ? void 0 : el.removeEventListener('mouseleave', function () {
        return setOpen(false);
      });
    };
  }, []);
  if (!content || !isValidElement(children)) {
    return children;
  }
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'inline-block'
    },
    ref: ref
  }, children, open && /*#__PURE__*/React.createElement(Popover, {
    focusOnMount: false,
    className: "blockart-tooltip components-tooltip",
    position: position,
    onClose: function onClose() {
      return setOpen(false);
    },
    onFocusOutside: function onFocusOutside() {
      return setOpen(false);
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "blockart-tooltip-content"
  }, content)));
});
;// CONCATENATED MODULE: ./src/blocks/components/toolbar-dropdown-control/index.js


function toolbar_dropdown_control_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function toolbar_dropdown_control_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? toolbar_dropdown_control_ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : toolbar_dropdown_control_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

/* harmony default export */ const toolbar_dropdown_control = (function (_ref) {
  var _options$find, _options$0$icon, _options$;
  var _ref$isCollapsed = _ref.isCollapsed,
    isCollapsed = _ref$isCollapsed === void 0 ? true : _ref$isCollapsed,
    onChange = _ref.onChange,
    value = _ref.value,
    popoverProps = _ref.popoverProps,
    isToolbar = _ref.isToolbar,
    _ref$options = _ref.options,
    options = _ref$options === void 0 ? [] : _ref$options,
    label = _ref.label;
  var handleClick = function handleClick(next) {
    if (next === value) {
      onChange(undefined);
    } else {
      onChange(next);
    }
  };
  var icon = value ? (_options$find = options.find(function (option) {
    return option.value === value;
  })) === null || _options$find === void 0 ? void 0 : _options$find.icon : (_options$0$icon = options === null || options === void 0 ? void 0 : (_options$ = options[0]) === null || _options$ === void 0 ? void 0 : _options$.icon) !== null && _options$0$icon !== void 0 ? _options$0$icon : null;
  var UIComponent = isToolbar ? ToolbarGroup : ToolbarDropdownMenu;
  var extraProps = isToolbar ? {
    isCollapsed: isCollapsed
  } : {};
  return /*#__PURE__*/React.createElement(UIComponent, _extends({
    icon: icon,
    popoverProps: popoverProps,
    label: label !== null && label !== void 0 ? label : undefined,
    controls: options.map(function (option) {
      return toolbar_dropdown_control_objectSpread(toolbar_dropdown_control_objectSpread({}, option), {}, {
        isActive: option.value === value,
        onClick: function onClick() {
          return handleClick(option.value);
        }
      });
    })
  }, extraProps));
});
;// CONCATENATED MODULE: ./src/blocks/components/block-settings/index.js







var blockAttributes = {
  blockMargin: {
    type: 'object',
    "default": {
      dimension: 1,
      desktop: {
        lock: true
      }
    },
    style: [{
      selector: '{{WRAPPER}} { margin: {{VALUE}}; }'
    }]
  },
  blockPadding: {
    type: 'object',
    "default": {
      dimension: 1,
      desktop: {
        lock: true
      }
    },
    style: [{
      selector: '{{WRAPPER}} { padding: {{VALUE}}; }'
    }]
  },
  blockZIndex: {
    type: 'number',
    style: [{
      selector: '{{WRAPPER}} { z-index: {{VALUE}}; }'
    }]
  },
  cssID: {
    type: 'string'
  },
  animation: {
    type: 'string'
  },
  interaction: {
    type: 'object'
  },
  position: {
    type: 'object'
  },
  hideOnDesktop: {
    type: 'boolean',
    style: [{
      selector: '@media (min-width:62em) { {{WRAPPER}} { display: none; } }'
    }]
  },
  hideOnTablet: {
    type: 'boolean',
    style: [{
      selector: '@media (min-width:48em) and (max-width:62em) { {{WRAPPER}} { display: none; } }'
    }]
  },
  hideOnMobile: {
    type: 'boolean',
    style: [{
      selector: '@media (max-width:48em) { {{WRAPPER}} { display: none; } }'
    }]
  },
  colReverseOnTablet: {
    type: 'boolean',
    style: [{
      selector: '@media (max-width:62em) { {{WRAPPER}} > .blockart-container > .blockart-section-inner { flex-direction:column-reverse; } }'
    }]
  },
  colReverseOnMobile: {
    type: 'boolean',
    style: [{
      selector: '@media (max-width:48em) { {{WRAPPER}} > .blockart-container > .blockart-section-inner { flex-direction:column-reverse; } }'
    }]
  },
  blockCSS: {
    type: 'string'
  },
  className: {
    type: 'string'
  }
};
var BlockAdvanceSettings = function BlockAdvanceSettings(_ref) {
  var blockMargin = _ref.blockMargin,
    blockPadding = _ref.blockPadding,
    blockZIndex = _ref.blockZIndex,
    cssID = _ref.cssID,
    setAttributes = _ref.setAttributes;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(panel, {
    title: (0,external_wp_i18n_namespaceObject.__)('Advanced', 'blockart'),
    initialOpen: true
  }, /*#__PURE__*/React.createElement(dimensions, {
    value: blockMargin,
    responsive: true,
    label: (0,external_wp_i18n_namespaceObject.__)('Block Margin', 'blockart'),
    defaultUnit: "px",
    units: ['px', 'rem', 'em', '%'],
    onChange: function onChange(val) {
      return setAttributes({
        blockMargin: val
      });
    },
    type: "margin",
    resetKey: "blockMargin"
  }), /*#__PURE__*/React.createElement(dimensions, {
    value: blockPadding,
    responsive: true,
    label: (0,external_wp_i18n_namespaceObject.__)('Block Padding', 'blockart'),
    defaultUnit: "px",
    units: ['px', 'rem', 'em', '%'],
    onChange: function onChange(val) {
      return setAttributes({
        blockPadding: val
      });
    },
    resetKey: "blockPadding"
  }), /*#__PURE__*/React.createElement(slider, {
    label: (0,external_wp_i18n_namespaceObject.__)('Z-Index', 'blockart'),
    value: blockZIndex,
    min: 0,
    max: 10000,
    step: 1,
    onChange: function onChange(val) {
      return setAttributes({
        blockZIndex: val
      });
    },
    resetKey: "blockZIndex"
  }), /*#__PURE__*/React.createElement(input, {
    onChange: function onChange(val) {
      return setAttributes({
        cssID: val
      });
    },
    labelPosition: "side",
    label: (0,external_wp_i18n_namespaceObject.__)('CSS ID', 'blockart'),
    value: cssID !== null && cssID !== void 0 ? cssID : ''
  })));
};
var BlockResponsiveSettings = function BlockResponsiveSettings(_ref2) {
  var hideOnDesktop = _ref2.hideOnDesktop,
    hideOnTablet = _ref2.hideOnTablet,
    hideOnMobile = _ref2.hideOnMobile,
    setAttributes = _ref2.setAttributes,
    _ref2$hasColReverse = _ref2.hasColReverse,
    hasColReverse = _ref2$hasColReverse === void 0 ? false : _ref2$hasColReverse,
    colReverseOnTablet = _ref2.colReverseOnTablet,
    colReverseOnMobile = _ref2.colReverseOnMobile;
  return /*#__PURE__*/React.createElement(panel, {
    title: (0,external_wp_i18n_namespaceObject.__)('Responsive condition', 'blockart')
  }, hasColReverse && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(toggle, {
    checked: colReverseOnTablet || false,
    onChange: function onChange() {
      return setAttributes({
        colReverseOnTablet: !colReverseOnTablet
      });
    },
    label: (0,external_wp_i18n_namespaceObject.__)('Column Reverse on Tablet', 'blockart')
  }), /*#__PURE__*/React.createElement(toggle, {
    checked: colReverseOnMobile || false,
    onChange: function onChange() {
      return setAttributes({
        colReverseOnMobile: !colReverseOnMobile
      });
    },
    label: (0,external_wp_i18n_namespaceObject.__)('Column Reverse on Mobile', 'blockart')
  })), /*#__PURE__*/React.createElement(toggle, {
    checked: hideOnDesktop || false,
    onChange: function onChange() {
      return setAttributes({
        hideOnDesktop: !hideOnDesktop
      });
    },
    label: (0,external_wp_i18n_namespaceObject.__)('Hide on Desktop', 'blockart')
  }), /*#__PURE__*/React.createElement(toggle, {
    checked: hideOnTablet || false,
    onChange: function onChange() {
      return setAttributes({
        hideOnTablet: !hideOnTablet
      });
    },
    label: (0,external_wp_i18n_namespaceObject.__)('Hide on Tablet', 'blockart')
  }), /*#__PURE__*/React.createElement(toggle, {
    checked: hideOnMobile || false,
    onChange: function onChange() {
      return setAttributes({
        hideOnMobile: !hideOnMobile
      });
    },
    label: (0,external_wp_i18n_namespaceObject.__)('Hide on Mobile', 'blockart')
  }));
};
var BlockCSSSettings = function BlockCSSSettings(_ref3) {
  var className = _ref3.className,
    setAttributes = _ref3.setAttributes,
    _ref3$hasBlockCSS = _ref3.hasBlockCSS,
    hasBlockCSS = _ref3$hasBlockCSS === void 0 ? false : _ref3$hasBlockCSS,
    blockCSS = _ref3.blockCSS;
  return /*#__PURE__*/React.createElement(panel, {
    title: (0,external_wp_i18n_namespaceObject.__)('CSS', 'blockart')
  }, hasBlockCSS && /*#__PURE__*/React.createElement(input, {
    value: blockCSS || '',
    label: (0,external_wp_i18n_namespaceObject.__)('Custom CSS', 'blockart'),
    onChange: function onChange(val) {
      return setAttributes({
        blockCSS: val
      });
    },
    labelPosition: "top"
  }), /*#__PURE__*/React.createElement(input, {
    value: className || '',
    label: (0,external_wp_i18n_namespaceObject.__)('Additional CSS Class(es)', 'blockart'),
    onChange: function onChange(val) {
      return setAttributes({
        className: val
      });
    },
    labelPosition: "top"
  }), /*#__PURE__*/React.createElement("p", null, (0,external_wp_i18n_namespaceObject.__)('Separate multiple classes with spaces.', 'blockart')));
};
;// CONCATENATED MODULE: ./src/blocks/components/index.js





























;// CONCATENATED MODULE: ./src/blocks/blocks/buttons/button/edit.js












/* harmony default export */ const edit = ((0,external_wp_compose_namespaceObject.compose)([with_client_id, with_device_type, with_copy_paste_styles, (0,external_wp_data_namespaceObject.withSelect)(function (select, ownProps) {
  var _select = select('core/block-editor'),
    getBlockRootClientId = _select.getBlockRootClientId,
    getBlockAttributes = _select.getBlockAttributes;
  var rootClientId = getBlockRootClientId(ownProps.clientId);
  return {
    rootClientId: rootClientId,
    rootBlockAttributes: getBlockAttributes(rootClientId)
  };
}), (0,external_wp_data_namespaceObject.withDispatch)(function (dispatch) {
  var _dispatch = dispatch('core/block-editor'),
    updateBlockAttributes = _dispatch.updateBlockAttributes;
  return {
    updateBlockAttributes: updateBlockAttributes
  };
})])(function (props) {
  var _editorStyle$mobile, _editorStyle$tablet, _editorStyle$tablet2, _editorStyle$desktop;
  var _props$attributes = props.attributes,
    clientId = _props$attributes.clientId,
    link = _props$attributes.link,
    text = _props$attributes.text,
    style = _props$attributes.style,
    size = _props$attributes.size,
    padding = _props$attributes.padding,
    typography = _props$attributes.typography,
    icon = _props$attributes.icon,
    iconPosition = _props$attributes.iconPosition,
    iconGap = _props$attributes.iconGap,
    iconSize = _props$attributes.iconSize,
    color1 = _props$attributes.color1,
    color2 = _props$attributes.color2,
    hoverColor1 = _props$attributes.hoverColor1,
    hoverColor2 = _props$attributes.hoverColor2,
    background1 = _props$attributes.background1,
    background2 = _props$attributes.background2,
    hoverBackground1 = _props$attributes.hoverBackground1,
    hoverBackground2 = _props$attributes.hoverBackground2,
    border1 = _props$attributes.border1,
    hoverBorder1 = _props$attributes.hoverBorder1,
    border2 = _props$attributes.border2,
    hoverBorder2 = _props$attributes.hoverBorder2,
    boxShadow = _props$attributes.boxShadow,
    boxShadowHover = _props$attributes.boxShadowHover,
    blockMargin = _props$attributes.blockMargin,
    blockPadding = _props$attributes.blockPadding,
    blockZIndex = _props$attributes.blockZIndex,
    cssID = _props$attributes.cssID,
    hideOnDesktop = _props$attributes.hideOnDesktop,
    hideOnTablet = _props$attributes.hideOnTablet,
    hideOnMobile = _props$attributes.hideOnMobile,
    className = _props$attributes.className,
    width = _props$attributes.width,
    setAttributes = props.setAttributes,
    CopyPasteStylesBlockControl = props.copyPasteStylesBlockControl,
    deviceType = props.deviceType,
    blockId = props.clientId;
  var Style = use_block_style({
    blockName: 'button',
    clientId: clientId,
    attributes: props.attributes,
    deviceType: deviceType
  });
  var classNames = classnames_default()('blockart-button-link', size && ('filled' === style || 'outline' === style) && "is-".concat(size), style && "is-style-".concat(style));
  var editorStyle = Object.keys(DEVICES).reduce(function (acc, curr) {
    var w = width === null || width === void 0 ? void 0 : width[curr];
    if (w) {
      acc[curr] = "[data-block=\"".concat(blockId, "\"] { width: ").concat(w, "%; }");
    }
    return acc;
  }, {});
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(external_wp_blockEditor_namespaceObject.InspectorControls, null, /*#__PURE__*/React.createElement(tab_panel, {
    root: true
  }, /*#__PURE__*/React.createElement(tab, {
    tabTitle: (0,external_wp_i18n_namespaceObject.__)('Settings', 'blockart')
  }, /*#__PURE__*/React.createElement(panel, {
    title: (0,external_wp_i18n_namespaceObject.__)('General', 'blockart'),
    initialOpen: true
  }, /*#__PURE__*/React.createElement(url_input, {
    label: (0,external_wp_i18n_namespaceObject.__)('URL', 'blockart'),
    onChange: function onChange(val) {
      return setAttributes({
        link: val
      });
    },
    value: link,
    placeholder: "https://",
    newTab: true
  })), /*#__PURE__*/React.createElement(panel, {
    title: (0,external_wp_i18n_namespaceObject.__)('Layout', 'blockart')
  }, /*#__PURE__*/React.createElement(slider, {
    label: (0,external_wp_i18n_namespaceObject.__)('Width', 'blockart'),
    value: width,
    onChange: function onChange(val) {
      return setAttributes({
        width: val
      });
    },
    min: 25,
    max: 100,
    step: 5,
    showUnit: true,
    resetKey: 'width',
    responsive: true,
    defaultUnit: "%"
  }), ('filled' === style || 'outline' === style) && /*#__PURE__*/React.createElement(components_size, {
    label: (0,external_wp_i18n_namespaceObject.__)('Size', 'blockart'),
    onChange: function onChange(key, val) {
      return setAttributes(defineProperty_defineProperty({}, key, val));
    },
    value: size,
    defaultKey: "size",
    custom: true,
    customKey: "padding",
    customValue: padding,
    customLabel: (0,external_wp_i18n_namespaceObject.__)('Padding', 'blockart'),
    customMin: 0,
    customMax: 100,
    customUnits: ['px', 'rem', 'em', '%'],
    customDefaultUnit: "px"
  }), /*#__PURE__*/React.createElement(advance_select, {
    value: style,
    onChange: function onChange(val) {
      return setAttributes({
        style: val
      });
    },
    label: (0,external_wp_i18n_namespaceObject.__)('Type', 'blockart'),
    hasLabel: true,
    options: [{
      label: (0,external_wp_i18n_namespaceObject.__)('Fill', 'blockart'),
      value: 'filled',
      icon: 'filled'
    }, {
      label: (0,external_wp_i18n_namespaceObject.__)('Outline', 'blockart'),
      value: 'outline',
      icon: 'outline'
    }, {
      label: (0,external_wp_i18n_namespaceObject.__)('Plain', 'blockart'),
      value: 'plain',
      icon: 'plain'
    }, {
      label: (0,external_wp_i18n_namespaceObject.__)('Link', 'blockart'),
      value: 'link',
      icon: 'link-o'
    }],
    cols: 4
  })), /*#__PURE__*/React.createElement(panel, {
    title: (0,external_wp_i18n_namespaceObject.__)('Icons', 'blockart')
  }, /*#__PURE__*/React.createElement(icon_selector, {
    label: (0,external_wp_i18n_namespaceObject.__)('Enable', 'blockart'),
    value: icon || {},
    onChange: function onChange(val) {
      return setAttributes({
        icon: val
      });
    }
  }), icon.enable && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(advance_select, {
    label: (0,external_wp_i18n_namespaceObject.__)('Position', 'blockart'),
    value: iconPosition,
    inline: true,
    onChange: function onChange(val) {
      return setAttributes({
        iconPosition: val
      });
    },
    options: [{
      label: (0,external_wp_i18n_namespaceObject.__)('Left', 'blockart'),
      value: 'left',
      icon: 'align-left'
    }, {
      label: (0,external_wp_i18n_namespaceObject.__)('Right', 'blockart'),
      value: 'right',
      icon: 'align-right'
    }]
  }), /*#__PURE__*/React.createElement(slider, {
    resetKey: "iconSize",
    label: (0,external_wp_i18n_namespaceObject.__)('Size', 'blockart'),
    min: 0,
    max: 50,
    value: iconSize,
    onChange: function onChange(val) {
      return setAttributes({
        iconSize: val
      });
    },
    responsive: true,
    units: ['px', 'em', '%']
  }), /*#__PURE__*/React.createElement(slider, {
    resetKey: "iconGap",
    label: (0,external_wp_i18n_namespaceObject.__)('Gap', 'blockart'),
    min: 0,
    max: 60,
    value: iconGap,
    onChange: function onChange(val) {
      return setAttributes({
        iconGap: val
      });
    },
    responsive: true,
    units: ['px', 'em', '%']
  }))), /*#__PURE__*/React.createElement(panel, {
    title: (0,external_wp_i18n_namespaceObject.__)('Text', 'blockart')
  }, /*#__PURE__*/React.createElement(components_typography, {
    value: typography,
    onChange: function onChange(val) {
      return setAttributes({
        typography: val
      });
    },
    resetKey: 'typography'
  })), /*#__PURE__*/React.createElement(panel, {
    title: (0,external_wp_i18n_namespaceObject.__)('Color', 'blockart')
  }, /*#__PURE__*/React.createElement(tab_panel, null, /*#__PURE__*/React.createElement(tab, {
    tabTitle: (0,external_wp_i18n_namespaceObject.__)('Normal', 'blockart')
  }, /*#__PURE__*/React.createElement(components_color, {
    onChange: function onChange(val) {
      return 'filled' === style ? setAttributes({
        color1: val
      }) : setAttributes({
        color2: val
      });
    },
    label: (0,external_wp_i18n_namespaceObject.__)('Color', 'blockart'),
    value: 'filled' === style ? color1 : color2,
    resetKey: 'filled' === style ? 'color1' : 'color2'
  }), style && (style === 'outline' || style === 'filled') && /*#__PURE__*/React.createElement(components_background, {
    value: 'filled' === style ? background1 : background2,
    onChange: function onChange(val) {
      return 'filled' === style ? setAttributes({
        background1: val
      }) : setAttributes({
        background2: val
      });
    },
    label: (0,external_wp_i18n_namespaceObject.__)('Background', 'blockart'),
    resetKey: 'filled' === style ? 'background1' : 'background2'
  })), /*#__PURE__*/React.createElement(tab, {
    tabTitle: (0,external_wp_i18n_namespaceObject.__)('Hover', 'blockart')
  }, /*#__PURE__*/React.createElement(components_color, {
    onChange: function onChange(val) {
      return 'filled' === style ? setAttributes({
        hoverColor1: val
      }) : setAttributes({
        hoverColor2: val
      });
    },
    label: (0,external_wp_i18n_namespaceObject.__)('Color', 'blockart'),
    value: 'filled' === style ? hoverColor1 : hoverColor2,
    resetKey: 'filled' === style ? 'hoverColor1' : 'hoverColor2'
  }), style && (style === 'outline' || style === 'filled') && /*#__PURE__*/React.createElement(components_background, {
    value: 'filled' === style ? hoverBackground1 : hoverBackground2,
    onChange: function onChange(val) {
      return 'filled' === style ? setAttributes({
        hoverBackground1: val
      }) : setAttributes({
        hoverBackground2: val
      });
    },
    label: (0,external_wp_i18n_namespaceObject.__)('Background', 'blockart'),
    resetKey: 'filled' === style ? 'hoverBackground1' : 'hoverBackground2'
  })))), style && (style === 'outline' || style === 'filled') && /*#__PURE__*/React.createElement(panel, {
    title: (0,external_wp_i18n_namespaceObject.__)('Border', 'blockart')
  }, /*#__PURE__*/React.createElement(tab_panel, null, /*#__PURE__*/React.createElement(tab, {
    tabTitle: (0,external_wp_i18n_namespaceObject.__)('Normal', 'blockart')
  }, /*#__PURE__*/React.createElement(components_border, {
    resetKey: 'filled' === style ? 'border1' : 'border2',
    value: 'filled' === style ? border1 : border2,
    onChange: function onChange(val) {
      return 'filled' === style ? setAttributes({
        border1: val
      }) : setAttributes({
        border2: val
      });
    }
  }), /*#__PURE__*/React.createElement(box_shadow, {
    resetKey: "boxShadow",
    value: boxShadow,
    onChange: function onChange(val) {
      return setAttributes({
        boxShadow: val
      });
    }
  })), /*#__PURE__*/React.createElement(tab, {
    tabTitle: (0,external_wp_i18n_namespaceObject.__)('Hover', 'blockart')
  }, /*#__PURE__*/React.createElement(components_border, {
    resetKey: 'filled' === style ? 'hoverBorder1' : 'hoverBorder2',
    value: 'filled' === style ? hoverBorder1 : hoverBorder2,
    onChange: function onChange(val) {
      return 'filled' === style ? setAttributes({
        hoverBorder1: val
      }) : setAttributes({
        hoverBorder2: val
      });
    }
  }), /*#__PURE__*/React.createElement(box_shadow, {
    resetKey: 'boxShadowHover',
    value: boxShadowHover,
    onChange: function onChange(val) {
      return setAttributes({
        boxShadowHover: val
      });
    }
  }))))), /*#__PURE__*/React.createElement(tab, {
    tabTitle: (0,external_wp_i18n_namespaceObject.__)('Advanced', 'blockart')
  }, /*#__PURE__*/React.createElement(BlockAdvanceSettings, {
    blockMargin: blockMargin,
    blockPadding: blockPadding,
    blockZIndex: blockZIndex,
    cssID: cssID,
    setAttributes: setAttributes
  }), /*#__PURE__*/React.createElement(BlockResponsiveSettings, {
    hideOnDesktop: hideOnDesktop,
    hideOnTablet: hideOnTablet,
    hideOnMobile: hideOnMobile,
    setAttributes: setAttributes
  }), /*#__PURE__*/React.createElement(BlockCSSSettings, {
    className: className,
    setAttributes: setAttributes,
    hasBlockCSS: false
  })))), /*#__PURE__*/React.createElement(external_wp_blockEditor_namespaceObject.BlockControls, null, /*#__PURE__*/React.createElement(CopyPasteStylesBlockControl, null)), /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Style, null), /*#__PURE__*/React.createElement("style", null, 'mobile' === deviceType ? (_editorStyle$mobile = editorStyle === null || editorStyle === void 0 ? void 0 : editorStyle.mobile) !== null && _editorStyle$mobile !== void 0 ? _editorStyle$mobile : (_editorStyle$tablet = editorStyle.tablet) !== null && _editorStyle$tablet !== void 0 ? _editorStyle$tablet : editorStyle === null || editorStyle === void 0 ? void 0 : editorStyle.desktop : 'tablet' === deviceType ? (_editorStyle$tablet2 = editorStyle === null || editorStyle === void 0 ? void 0 : editorStyle.tablet) !== null && _editorStyle$tablet2 !== void 0 ? _editorStyle$tablet2 : editorStyle === null || editorStyle === void 0 ? void 0 : editorStyle.desktop : (_editorStyle$desktop = editorStyle === null || editorStyle === void 0 ? void 0 : editorStyle.desktop) !== null && _editorStyle$desktop !== void 0 ? _editorStyle$desktop : ''), /*#__PURE__*/React.createElement("style", null, '.blockart'), /*#__PURE__*/React.createElement("div", {
    id: cssID ? cssID : null,
    className: (0,external_wp_hooks_namespaceObject.applyFilters)('blockart.button.classnames', classnames_default()("blockart-button blockart-button-".concat(clientId), className))
  }, /*#__PURE__*/React.createElement("div", {
    className: classNames
  }, icon && '' !== icon.icon && icon.enable && 'left' === iconPosition && /*#__PURE__*/React.createElement("span", {
    className: "blockart-button-icon"
  }, /*#__PURE__*/React.createElement(components_icon, {
    type: "frontendIcon",
    name: icon.icon
  })), /*#__PURE__*/React.createElement(external_wp_blockEditor_namespaceObject.RichText, {
    value: text,
    placeholder: (0,external_wp_i18n_namespaceObject.__)('Text Here…', 'blockart'),
    onChange: function onChange(val) {
      setAttributes({
        text: val
      });
    },
    allowedFormats: ['core/bold', 'core/italic']
  }), icon && '' !== icon.icon && icon.enable && 'right' === iconPosition && /*#__PURE__*/React.createElement("span", {
    className: "blockart-button-icon"
  }, /*#__PURE__*/React.createElement(components_icon, {
    type: "frontendIcon",
    name: icon.icon
  }))))));
}));
;// CONCATENATED MODULE: ./src/blocks/blocks/buttons/button/save.js




/* harmony default export */ const save = (function (_ref) {
  var _ref$attributes = _ref.attributes,
    clientId = _ref$attributes.clientId,
    text = _ref$attributes.text,
    className = _ref$attributes.className,
    cssID = _ref$attributes.cssID,
    link = _ref$attributes.link,
    size = _ref$attributes.size,
    style = _ref$attributes.style,
    icon = _ref$attributes.icon,
    iconPosition = _ref$attributes.iconPosition;
  var classNames = classnames_default()('blockart-button-link', size && "is-".concat(size), style && "is-style-".concat(style));
  return /*#__PURE__*/React.createElement("div", {
    id: cssID !== null && cssID !== void 0 ? cssID : undefined,
    className: (0,external_wp_hooks_namespaceObject.applyFilters)('blockart.button.classnames', classnames_default()("blockart-button blockart-button-".concat(clientId, " "), className))
  }, /*#__PURE__*/React.createElement(components_element, {
    tagName: "a",
    htmlAttrs: {
      className: classNames,
      href: link && link.url ? link.url : null,
      target: link && link.newTab ? '_blank' : null,
      rel: link && link.newTab ? 'noopener' : null
    }
  }, icon && '' !== icon.icon && icon.enable && 'left' === iconPosition && /*#__PURE__*/React.createElement("span", {
    className: "blockart-button-icon"
  }, /*#__PURE__*/React.createElement(components_icon, {
    type: "frontendIcon",
    name: icon.icon
  })), /*#__PURE__*/React.createElement(external_wp_blockEditor_namespaceObject.RichText.Content, {
    value: text
  }), icon && '' !== icon.icon && icon.enable && 'right' === iconPosition && /*#__PURE__*/React.createElement("span", {
    className: "blockart-button-icon"
  }, /*#__PURE__*/React.createElement(components_icon, {
    type: "frontendIcon",
    name: icon.icon
  }))));
});
;// CONCATENATED MODULE: ./src/blocks/blocks/buttons/button/block.json
const block_namespaceObject = JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","name":"blockart/button-inner","title":"Button","description":"Redirect users to your important pages or websites by clicking button.","keywords":["button","icon"],"category":"blockart","textdomain":"blockart","parent":["blockart/button"],"supports":{"className":false,"customClassName":false,"reusable":false},"example":{"attributes":{}},"attributes":{"clientId":{"type":"string"},"width":{"type":"object","style":[{"selector":"{{WRAPPER}} { flex-basis: {{VALUE}}%; width: {{VALUE}}%; }"}]},"alignment":{"type":"string","style":[{"selector":"{{WRAPPER}} { text-align: {{VALUE}}; }"}]},"link":{"type":"object"},"text":{"type":"string"},"style":{"type":"string","default":"filled"},"size":{"type":"string","default":"large"},"padding":{"type":"object","default":{"dimension":1,"desktop":{"lock":true}},"style":[{"condition":[{"key":"size","relation":"==","value":"custom"},{"key":"style","relation":"!=","value":"plain"},{"key":"style","relation":"!=","value":"link"}],"selector":"{{WRAPPER}} .blockart-button-link.is-custom { padding: {{VALUE}}; }"}]},"typography":{"type":"object","default":{"typography":1},"style":[{"selector":"{{WRAPPER}} .blockart-button-link"}]},"icon":{"type":"object","default":{"enable":false,"icon":""}},"iconPosition":{"type":"string","default":"right"},"iconSize":{"type":"object","style":[{"condition":[{"key":"icon","relation":"!=","value":""}],"selector":"{{WRAPPER}} .blockart-button-icon .blockart-icon { width: {{VALUE}}; height: auto; }"}]},"iconGap":{"type":"object","style":[{"condition":[{"key":"icon","relation":"!=","value":""},{"key":"iconPosition","relation":"==","value":"left"}],"selector":"{{WRAPPER}} .blockart-button-icon { margin-right: {{VALUE}}; }"},{"condition":[{"key":"icon","relation":"!=","value":""},{"key":"iconPosition","relation":"==","value":"right"}],"selector":"{{WRAPPER}} .blockart-button-icon { margin-left: {{VALUE}}; }"}]},"color1":{"type":"string","default":"#fff","style":[{"condition":[{"key":"style","relation":"==","value":"filled"}],"selector":"{{WRAPPER}} .blockart-button-link { color: {{VALUE}}; }{{WRAPPER}} .blockart-button-icon .blockart-icon { fill: {{VALUE}}; }"}]},"color2":{"type":"string","default":"#2563EB","style":[{"condition":[{"key":"style","relation":"!=","value":"filled"}],"selector":"{{WRAPPER}} .blockart-button-link{ color: {{VALUE}}; }{{WRAPPER}} .blockart-button-icon .blockart-icon { fill: {{VALUE}}; }"}]},"hoverColor1":{"type":"string","default":"","style":[{"condition":[{"key":"style","relation":"==","value":"filled"}],"selector":"{{WRAPPER}} .blockart-button-link:hover { color: {{VALUE}} }{{WRAPPER}} .blockart-button-link:hover .blockart-button-icon .blockart-icon { fill: {{VALUE}} }{{WRAPPER}} .blockart-button-link:focus { color: {{VALUE}} }{{WRAPPER}} .blockart-button-link:focus .blockart-button-icon .blockart-icon { fill: {{VALUE}} }{{WRAPPER}} .blockart-button-link:active { color: {{VALUE}} }{{WRAPPER}} .blockart-button-link:active .blockart-button-icon .blockart-icon { fill: {{VALUE}} }"}]},"hoverColor2":{"type":"string","default":"","style":[{"condition":[{"key":"style","relation":"!=","value":"filled"}],"selector":"{{WRAPPER}} .blockart-button-link:hover { color: {{VALUE}} }{{WRAPPER}} .blockart-button-link:hover .blockart-button-icon .blockart-icon { fill: {{VALUE}} }{{WRAPPER}} .blockart-button-link:focus { color: {{VALUE}} }{{WRAPPER}} .blockart-button-link:focus .blockart-button-icon .blockart-icon { fill: {{VALUE}} }{{WRAPPER}} .blockart-button-link:active { color: {{VALUE}} }{{WRAPPER}} .blockart-button-link:active .blockart-button-icon .blockart-icon { fill: {{VALUE}} }"}]},"background1":{"type":"object","default":{"background":1,"type":"color","color":"#2563eb"},"style":[{"condition":[{"key":"style","relation":"==","value":"filled"}],"selector":"{{WRAPPER}} .blockart-button-link"}]},"background2":{"type":"object","default":{"background":1},"style":[{"condition":[{"key":"style","relation":"==","value":"outline"}],"selector":"{{WRAPPER}} .blockart-button-link.is-style-outline"}]},"hoverBackground1":{"type":"object","default":{"background":1},"style":[{"condition":[{"key":"style","relation":"==","value":"filled"}],"selector":"{{WRAPPER}} .blockart-button-link:hover, {{WRAPPER}} .blockart-button-link:focus, {{WRAPPER}} .blockart-button-link:active"}]},"hoverBackground2":{"type":"object","default":{"background":1},"style":[{"condition":[{"key":"style","relation":"==","value":"outline"}],"selector":"{{WRAPPER}} .blockart-button-link.is-style-outline:hover, {{WRAPPER}} .blockart-button-link.is-style-outline:focus, {{WRAPPER}} .blockart-button-link.is-style-outline:active"}]},"border1":{"type":"object","default":{"border":1,"radius":{"desktop":{"lock":true}},"size":{"desktop":{"lock":true}}},"style":[{"condition":[{"key":"style","relation":"==","value":"filled"}],"selector":"{{WRAPPER}} .blockart-button-link"}]},"hoverBorder1":{"type":"object","default":{"border":1,"radius":{"desktop":{"lock":true}},"size":{"desktop":{"lock":true}}},"style":[{"condition":[{"key":"style","relation":"==","value":"filled"}],"selector":"{{WRAPPER}} .blockart-button-link:hover, {{WRAPPER}} .blockart-button-link:focus, {{WRAPPER}} .blockart-button-link:active"}]},"border2":{"type":"object","default":{"border":1,"color":"#2563EB","type":"solid","radius":{"desktop":{"top":2,"right":2,"bottom":2,"left":2,"unit":"px","lock":true}},"size":{"desktop":{"top":1,"right":1,"bottom":1,"left":1,"unit":"px","lock":true}}},"style":[{"condition":[{"key":"style","relation":"==","value":"outline"}],"selector":"{{WRAPPER}} .blockart-button-link"}]},"hoverBorder2":{"type":"object","default":{"border":1,"radius":{"desktop":{"lock":true}},"size":{"desktop":{"lock":true}}},"style":[{"condition":[{"key":"style","relation":"==","value":"outline"}],"selector":"{{WRAPPER}} .blockart-button-link:hover, {{WRAPPER}} .blockart-button-link:focus, {{WRAPPER}} .blockart-button-link:active"}]},"boxShadow":{"type":"object","default":{"boxShadow":1},"style":[{"selector":"{{WRAPPER}} .blockart-button-link"}]},"boxShadowHover":{"type":"object","default":{"boxShadow":1},"style":[{"selector":"{{WRAPPER}} .blockart-button-link:hover, {{WRAPPER}} .blockart-button-link:focus, {{WRAPPER}} .blockart-button-link:active"}]},"blockMargin":{"type":"object","default":{"dimension":1,"desktop":{"lock":true}},"style":[{"selector":"{{WRAPPER}} { margin: {{VALUE}}; }"}]},"blockPadding":{"type":"object","default":{"dimension":1,"desktop":{"lock":true}},"style":[{"selector":"{{WRAPPER}} { padding: {{VALUE}}; }"}]},"blockZIndex":{"type":"number","style":[{"selector":"{{WRAPPER}} { z-index: {{VALUE}}; }"}]},"cssID":{"type":"string"},"animation":{"type":"string"},"interaction":{"type":"object"},"position":{"type":"object"},"hideOnDesktop":{"type":"boolean","style":[{"selector":"@media (min-width:62em) { {{WRAPPER}} { display: none; } }"}]},"hideOnTablet":{"type":"boolean","style":[{"selector":"@media (min-width:48em) and (max-width:62em) { {{WRAPPER}} { display: none; } }"}]},"hideOnMobile":{"type":"boolean","style":[{"selector":"@media (max-width:48em) { {{WRAPPER}} { display: none; } }"}]},"colReverseOnTablet":{"type":"boolean","style":[{"selector":"@media (max-width:62em) { {{WRAPPER}} > .blockart-container > .blockart-section-inner { flex-direction:column-reverse; } }"}]},"colReverseOnMobile":{"type":"boolean","style":[{"selector":"@media (max-width:48em) { {{WRAPPER}} > .blockart-container > .blockart-section-inner { flex-direction:column-reverse; } }"}]},"blockCSS":{"type":"string"},"className":{"type":"string"}},"style":"blockart-blocks","editorScript":"blockart-blocks","editorStyle":"blockart-blocks-editor"}');
;// CONCATENATED MODULE: ./src/blocks/blocks/buttons/button/index.js

function button_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function button_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? button_ownKeys(Object(source), !0).forEach(function (key) { defineProperty_defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : button_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }







/* harmony default export */ const buttons_button = (function () {
  (0,external_wp_blocks_namespaceObject.registerBlockType)('blockart/button-inner', button_objectSpread(button_objectSpread({}, block_namespaceObject), {}, {
    icon: /*#__PURE__*/React.createElement(components_icon, {
      type: "blockIcon",
      name: "button",
      size: 24
    }),
    edit: edit,
    save: save
  }));
});
;// CONCATENATED MODULE: ./src/blocks/blocks/buttons/save.js

function save_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function save_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? save_ownKeys(Object(source), !0).forEach(function (key) { defineProperty_defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : save_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }



/* harmony default export */ const buttons_save = (function (_ref) {
  var _ref$attributes = _ref.attributes,
    clientId = _ref$attributes.clientId,
    className = _ref$attributes.className,
    flexWrap = _ref$attributes.flexWrap,
    orientation = _ref$attributes.orientation,
    justification = _ref$attributes.justification,
    alignment = _ref$attributes.alignment;
  var classNames = classnames_default()("blockart-buttons blockart-buttons-".concat(clientId), save_objectSpread(defineProperty_defineProperty({}, "is-wrap", flexWrap), Object.keys(DEVICES).reduce(function (acc, curr) {
    var suffix = 'tablet' === curr ? '-md' : 'mobile' === curr ? '-sm' : '';
    var direction = orientation === null || orientation === void 0 ? void 0 : orientation[curr];
    var justify = justification === null || justification === void 0 ? void 0 : justification[curr];
    var align = alignment === null || alignment === void 0 ? void 0 : alignment[curr];
    if (direction) {
      acc["is-".concat(direction).concat(suffix)] = true;
    }
    if (justify) {
      acc["justify-".concat(justify).concat(suffix)] = true;
    }
    if (align) {
      acc[curr]["align-".concat(align).concat(suffix)] = true;
    }
    return acc;
  }, {})), className);
  return /*#__PURE__*/React.createElement("div", {
    className: classNames
  }, /*#__PURE__*/React.createElement(external_wp_blockEditor_namespaceObject.InnerBlocks.Content, null));
});
;// CONCATENATED MODULE: ./src/blocks/blocks/buttons/edit.js

function edit_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function edit_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? edit_ownKeys(Object(source), !0).forEach(function (key) { defineProperty_defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : edit_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }









var edit_alignBottom = /*#__PURE__*/React.createElement(external_wp_components_namespaceObject.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, /*#__PURE__*/React.createElement(external_wp_components_namespaceObject.Path, {
  d: "M15 4H9v11h6V4zM4 18.5V20h16v-1.5H4z"
}));
var edit_alignCenter = /*#__PURE__*/React.createElement(external_wp_components_namespaceObject.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, /*#__PURE__*/React.createElement(external_wp_components_namespaceObject.Path, {
  d: "M20 11h-5V4H9v7H4v1.5h5V20h6v-7.5h5z"
}));
var edit_alignTop = /*#__PURE__*/React.createElement(external_wp_components_namespaceObject.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, /*#__PURE__*/React.createElement(external_wp_components_namespaceObject.Path, {
  d: "M9 20h6V9H9v11zM4 4v1.5h16V4H4z"
}));
var ALLOWED_BLOCK = 'blockart/button-inner';
/* harmony default export */ const buttons_edit = ((0,external_wp_compose_namespaceObject.compose)([with_client_id, with_copy_paste_styles, with_device_type])(function (props) {
  var _dynamicClassName$mob, _dynamicClassName$tab, _dynamicClassName$des, _dynamicClassName$tab2, _dynamicClassName$des2, _dynamicClassName$des3, _style$mobile, _style$tablet, _style$tablet2, _style$desktop;
  var _props$attributes = props.attributes,
    clientId = _props$attributes.clientId,
    orientation = _props$attributes.orientation,
    justification = _props$attributes.justification,
    flexGap = _props$attributes.flexGap,
    flexWrap = _props$attributes.flexWrap,
    blockMargin = _props$attributes.blockMargin,
    blockPadding = _props$attributes.blockPadding,
    blockZIndex = _props$attributes.blockZIndex,
    cssID = _props$attributes.cssID,
    hideOnDesktop = _props$attributes.hideOnDesktop,
    hideOnTablet = _props$attributes.hideOnTablet,
    hideOnMobile = _props$attributes.hideOnMobile,
    className = _props$attributes.className,
    alignment = _props$attributes.alignment,
    attributes = props.attributes,
    setAttributes = props.setAttributes,
    CopyPasteStylesBlockControl = props.copyPasteStylesBlockControl,
    deviceType = props.deviceType;
  var Style = use_block_style({
    blockName: 'buttons',
    clientId: clientId,
    attributes: attributes
  });
  var dynamicClassName = Object.keys(DEVICES).reduce(function (acc, curr) {
    var s = 'tablet' === curr ? '-md' : 'mobile' === curr ? '-sm' : '';
    var o = orientation === null || orientation === void 0 ? void 0 : orientation[curr];
    var j = justification === null || justification === void 0 ? void 0 : justification[curr];
    var a = alignment === null || alignment === void 0 ? void 0 : alignment[curr];
    if (o) {
      if (!(acc !== null && acc !== void 0 && acc[curr])) {
        acc[curr] = {};
      }
      acc[curr]["is-".concat(o).concat(s)] = true;
    }
    if (j) {
      if (!(acc !== null && acc !== void 0 && acc[curr])) {
        acc[curr] = {};
      }
      acc[curr]["justify-".concat(j).concat(s)] = true;
    }
    if (a) {
      if (!(acc !== null && acc !== void 0 && acc[curr])) {
        acc[curr] = {};
      }
      acc[curr]["align-".concat(a).concat(s)] = true;
    }
    return acc;
  }, {});
  var classNames = classnames_default()("blockart-buttons blockart-buttons-".concat(clientId), edit_objectSpread(defineProperty_defineProperty({}, "is-wrap", flexWrap), 'mobile' === deviceType ? (_dynamicClassName$mob = dynamicClassName === null || dynamicClassName === void 0 ? void 0 : dynamicClassName.mobile) !== null && _dynamicClassName$mob !== void 0 ? _dynamicClassName$mob : (_dynamicClassName$tab = dynamicClassName === null || dynamicClassName === void 0 ? void 0 : dynamicClassName.tablet) !== null && _dynamicClassName$tab !== void 0 ? _dynamicClassName$tab : (_dynamicClassName$des = dynamicClassName === null || dynamicClassName === void 0 ? void 0 : dynamicClassName.desktop) !== null && _dynamicClassName$des !== void 0 ? _dynamicClassName$des : {} : 'tablet' === deviceType ? (_dynamicClassName$tab2 = dynamicClassName === null || dynamicClassName === void 0 ? void 0 : dynamicClassName.tablet) !== null && _dynamicClassName$tab2 !== void 0 ? _dynamicClassName$tab2 : (_dynamicClassName$des2 = dynamicClassName === null || dynamicClassName === void 0 ? void 0 : dynamicClassName.desktop) !== null && _dynamicClassName$des2 !== void 0 ? _dynamicClassName$des2 : {} : (_dynamicClassName$des3 = dynamicClassName === null || dynamicClassName === void 0 ? void 0 : dynamicClassName.desktop) !== null && _dynamicClassName$des3 !== void 0 ? _dynamicClassName$des3 : {}), className);
  var style = Object.keys(DEVICES).reduce(function (acc, curr) {
    var _flexGap$curr, _flexGap$curr$unit, _flexGap$curr2;
    var gap = flexGap === null || flexGap === void 0 ? void 0 : (_flexGap$curr = flexGap[curr]) === null || _flexGap$curr === void 0 ? void 0 : _flexGap$curr.value;
    var unit = (_flexGap$curr$unit = flexGap === null || flexGap === void 0 ? void 0 : (_flexGap$curr2 = flexGap[curr]) === null || _flexGap$curr2 === void 0 ? void 0 : _flexGap$curr2.unit) !== null && _flexGap$curr$unit !== void 0 ? _flexGap$curr$unit : 'px';
    if (gap) {
      acc[curr] = ".blockart-buttons-".concat(clientId, " .block-editor-block-list__layout{ gap: ").concat(gap + unit, " }");
    }
    return acc;
  }, {});
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(external_wp_blockEditor_namespaceObject.InspectorControls, null, /*#__PURE__*/React.createElement(tab_panel, {
    root: true
  }, /*#__PURE__*/React.createElement(tab, {
    tabTitle: (0,external_wp_i18n_namespaceObject.__)('Layout', 'blockart')
  }, /*#__PURE__*/React.createElement(layout, {
    block: ['button', 'buttons']
  })), /*#__PURE__*/React.createElement(tab, {
    tabTitle: (0,external_wp_i18n_namespaceObject.__)('Settings', 'blockart')
  }, /*#__PURE__*/React.createElement(panel, {
    title: (0,external_wp_i18n_namespaceObject.__)('General', 'blockart'),
    initialOpen: true
  }, /*#__PURE__*/React.createElement(advance_select, {
    label: (0,external_wp_i18n_namespaceObject.__)('Orientation', 'blockart'),
    value: orientation,
    onChange: function onChange(value) {
      return setAttributes({
        orientation: value
      });
    },
    options: [{
      label: (0,external_wp_i18n_namespaceObject.__)('Horizontal', 'blockart'),
      value: 'horizontal',
      icon: 'arrow-right'
    }, {
      label: (0,external_wp_i18n_namespaceObject.__)('Vertical', 'blockart'),
      value: 'vertical',
      icon: 'arrow-down'
    }],
    responsive: true
  }), /*#__PURE__*/React.createElement(toggle, {
    checked: flexWrap !== null && flexWrap !== void 0 ? flexWrap : false,
    label: (0,external_wp_i18n_namespaceObject.__)('Wrap to multiple lines', 'blockart'),
    onChange: function onChange() {
      return setAttributes({
        flexWrap: !flexWrap
      });
    }
  }), /*#__PURE__*/React.createElement(advance_select, {
    label: (0,external_wp_i18n_namespaceObject.__)('Alignment', 'blockart'),
    value: alignment,
    onChange: function onChange(value) {
      return setAttributes({
        alignment: value
      });
    },
    options: [{
      label: (0,external_wp_i18n_namespaceObject.__)('Align top', 'blockart'),
      value: 'top',
      icon: 'align-top'
    }, {
      label: (0,external_wp_i18n_namespaceObject.__)('Align middle', 'blockart'),
      value: 'center',
      icon: 'align-middle'
    }, {
      label: (0,external_wp_i18n_namespaceObject.__)('Align bottom', 'blockart'),
      value: 'bottom',
      icon: 'align-bottom'
    },, {
      label: (0,external_wp_i18n_namespaceObject.__)('Align stretch', 'blockart'),
      value: 'stretch',
      icon: 'align-stretch'
    },,],
    responsive: true
  }), /*#__PURE__*/React.createElement(advance_select, {
    label: (0,external_wp_i18n_namespaceObject.__)('Justification', 'blockart'),
    value: justification,
    onChange: function onChange(value) {
      return setAttributes({
        justification: value
      });
    },
    options: [{
      label: (0,external_wp_i18n_namespaceObject.__)('Justify items left', 'blockart'),
      value: 'left',
      icon: 'align-left'
    }, {
      label: (0,external_wp_i18n_namespaceObject.__)('Justify items center', 'blockart'),
      value: 'center',
      icon: 'align-center'
    }, {
      label: (0,external_wp_i18n_namespaceObject.__)('Justify items right', 'blockart'),
      value: 'right',
      icon: 'align-right'
    }, {
      label: (0,external_wp_i18n_namespaceObject.__)('Space between items', 'blockart'),
      value: 'space-between',
      icon: 'align-space-between'
    }, {
      label: (0,external_wp_i18n_namespaceObject.__)('Space around items', 'blockart'),
      value: 'space-around',
      icon: 'align-space-between'
    }],
    responsive: true
  }), /*#__PURE__*/React.createElement(slider, {
    label: (0,external_wp_i18n_namespaceObject.__)('Gap', 'blockart'),
    value: flexGap,
    onChange: function onChange(value) {
      return setAttributes({
        flexGap: value
      });
    },
    min: 0,
    max: 100,
    step: 1,
    units: ['px', 'em', 'rem', '%'],
    responsive: true
  }))), /*#__PURE__*/React.createElement(tab, {
    tabTitle: (0,external_wp_i18n_namespaceObject.__)('Advanced', 'blockart')
  }, /*#__PURE__*/React.createElement(BlockAdvanceSettings, {
    blockMargin: blockMargin,
    blockPadding: blockPadding,
    blockZIndex: blockZIndex,
    cssID: cssID,
    setAttributes: setAttributes
  }), /*#__PURE__*/React.createElement(BlockResponsiveSettings, {
    hideOnDesktop: hideOnDesktop,
    hideOnTablet: hideOnTablet,
    hideOnMobile: hideOnMobile,
    setAttributes: setAttributes
  }), /*#__PURE__*/React.createElement(BlockCSSSettings, {
    className: className,
    setAttributes: setAttributes,
    hasBlockCSS: false
  })))), /*#__PURE__*/React.createElement(external_wp_blockEditor_namespaceObject.BlockControls, null, /*#__PURE__*/React.createElement(CopyPasteStylesBlockControl, null)), /*#__PURE__*/React.createElement(Style, null), /*#__PURE__*/React.createElement("style", null, 'mobile' === deviceType ? (_style$mobile = style === null || style === void 0 ? void 0 : style.mobile) !== null && _style$mobile !== void 0 ? _style$mobile : (_style$tablet = style.tablet) !== null && _style$tablet !== void 0 ? _style$tablet : style === null || style === void 0 ? void 0 : style.desktop : 'tablet' === deviceType ? (_style$tablet2 = style === null || style === void 0 ? void 0 : style.tablet) !== null && _style$tablet2 !== void 0 ? _style$tablet2 : style === null || style === void 0 ? void 0 : style.desktop : (_style$desktop = style === null || style === void 0 ? void 0 : style.desktop) !== null && _style$desktop !== void 0 ? _style$desktop : ''), /*#__PURE__*/React.createElement("div", {
    className: classNames
  }, /*#__PURE__*/React.createElement(external_wp_blockEditor_namespaceObject.InnerBlocks, {
    allowedBlocks: [ALLOWED_BLOCK],
    template: [[ALLOWED_BLOCK]],
    templateLock: false,
    templateInsertUpdatesSelection: true
  })));
}));
;// CONCATENATED MODULE: ./src/blocks/blocks/buttons/block.json
const buttons_block_namespaceObject = JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","name":"blockart/button","title":"Buttons","description":"Redirect users to your important pages or websites by clicking button.","keywords":["button","icon"],"category":"blockart","textdomain":"blockart","supports":{"className":false,"customClassName":false,"html":false},"example":{"attributes":{}},"attributes":{"clientId":{"type":"string"},"justification":{"type":"object"},"orientation":{"type":"object"},"alignment":{"type":"object"},"flexWrap":{"type":"boolean","default":true},"flexGap":{"type":"object","default":{"desktop":{"value":8,"unit":"px"}},"style":[{"selector":"{{WRAPPER}} { gap: {{VALUE}}; }"}]},"blockMargin":{"type":"object","default":{"dimension":1,"desktop":{"lock":true}},"style":[{"selector":"{{WRAPPER}} { margin: {{VALUE}}; }"}]},"blockPadding":{"type":"object","default":{"dimension":1,"desktop":{"lock":true}},"style":[{"selector":"{{WRAPPER}} { padding: {{VALUE}}; }"}]},"blockZIndex":{"type":"number","style":[{"selector":"{{WRAPPER}} { z-index: {{VALUE}}; }"}]},"cssID":{"type":"string"},"animation":{"type":"string"},"interaction":{"type":"object"},"position":{"type":"object"},"hideOnDesktop":{"type":"boolean","style":[{"selector":"@media (min-width:62em) { {{WRAPPER}} { display: none; } }"}]},"hideOnTablet":{"type":"boolean","style":[{"selector":"@media (min-width:48em) and (max-width:62em) { {{WRAPPER}} { display: none; } }"}]},"hideOnMobile":{"type":"boolean","style":[{"selector":"@media (max-width:48em) { {{WRAPPER}} { display: none; } }"}]},"colReverseOnTablet":{"type":"boolean","style":[{"selector":"@media (max-width:62em) { {{WRAPPER}} > .blockart-container > .blockart-section-inner { flex-direction:column-reverse; } }"}]},"colReverseOnMobile":{"type":"boolean","style":[{"selector":"@media (max-width:48em) { {{WRAPPER}} > .blockart-container > .blockart-section-inner { flex-direction:column-reverse; } }"}]},"blockCSS":{"type":"string"},"className":{"type":"string"}},"style":"blockart-blocks","editorScript":"blockart-blocks","editorStyle":"blockart-blocks-editor"}');
;// CONCATENATED MODULE: ./src/blocks/blocks/buttons/button/attributes.js

function attributes_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function attributes_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? attributes_ownKeys(Object(source), !0).forEach(function (key) { defineProperty_defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : attributes_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

/* harmony default export */ const button_attributes = (attributes_objectSpread({
  clientId: {
    type: 'string'
  },
  link: {
    type: 'object'
  },
  text: {
    type: 'string'
  },
  style: {
    type: 'string',
    "default": 'filled'
  },
  size: {
    type: 'string',
    "default": 'large'
  },
  padding: {
    type: 'object',
    "default": {
      dimension: 1,
      desktop: {
        lock: true
      }
    },
    style: [{
      condition: [{
        key: 'size',
        relation: '==',
        value: 'custom'
      }, {
        key: 'style',
        relation: '!=',
        value: 'plain'
      }, {
        key: 'style',
        relation: '!=',
        value: 'link'
      }],
      selector: '{{WRAPPER}} .blockart-button-link.is-custom { padding: {{VALUE}}; }'
    }]
  },
  typography: {
    type: 'object',
    "default": {
      typography: 1
    },
    style: [{
      selector: '{{WRAPPER}} .blockart-button-link'
    }]
  },
  icon: {
    type: 'object',
    "default": {
      enable: false,
      icon: ''
    }
  },
  iconPosition: {
    type: 'string',
    "default": 'right'
  },
  iconSize: {
    type: 'object',
    style: [{
      condition: [{
        key: 'icon',
        relation: '!=',
        value: ''
      }],
      selector: '{{WRAPPER}} .blockart-button-icon .blockart-icon { width: {{VALUE}}; height: auto; }'
    }]
  },
  iconGap: {
    type: 'object',
    style: [{
      condition: [{
        key: 'icon',
        relation: '!=',
        value: ''
      }, {
        key: 'iconPosition',
        relation: '==',
        value: 'left'
      }],
      selector: '{{WRAPPER}} .blockart-button-icon { margin-right: {{VALUE}}; }'
    }, {
      condition: [{
        key: 'icon',
        relation: '!=',
        value: ''
      }, {
        key: 'iconPosition',
        relation: '==',
        value: 'right'
      }],
      selector: '{{WRAPPER}} .blockart-button-icon { margin-left: {{VALUE}}; }'
    }]
  },
  color1: {
    type: 'string',
    "default": '#fff',
    style: [{
      condition: [{
        key: 'style',
        relation: '==',
        value: 'filled'
      }],
      selector: '{{WRAPPER}} .blockart-button-link { color: {{VALUE}}; }' + '{{WRAPPER}} .blockart-button-icon .blockart-icon { fill: {{VALUE}}; }'
    }]
  },
  color2: {
    type: 'string',
    "default": '#2563EB',
    style: [{
      condition: [{
        key: 'style',
        relation: '!=',
        value: 'filled'
      }],
      selector: '{{WRAPPER}} .blockart-button-link{ color: {{VALUE}}; }' + '{{WRAPPER}} .blockart-button-icon .blockart-icon { fill: {{VALUE}}; }'
    }]
  },
  hoverColor1: {
    type: 'string',
    "default": '',
    style: [{
      condition: [{
        key: 'style',
        relation: '==',
        value: 'filled'
      }],
      selector: '{{WRAPPER}} .blockart-button-link:hover { color: {{VALUE}} }' + '{{WRAPPER}} .blockart-button-link:hover .blockart-button-icon .blockart-icon { fill: {{VALUE}} }' + '{{WRAPPER}} .blockart-button-link:focus { color: {{VALUE}} }' + '{{WRAPPER}} .blockart-button-link:focus .blockart-button-icon .blockart-icon { fill: {{VALUE}} }' + '{{WRAPPER}} .blockart-button-link:active { color: {{VALUE}} }' + '{{WRAPPER}} .blockart-button-link:active .blockart-button-icon .blockart-icon { fill: {{VALUE}} }'
    }]
  },
  hoverColor2: {
    type: 'string',
    "default": '',
    style: [{
      condition: [{
        key: 'style',
        relation: '!=',
        value: 'filled'
      }],
      selector: '{{WRAPPER}} .blockart-button-link:hover { color: {{VALUE}} }' + '{{WRAPPER}} .blockart-button-link:hover .blockart-button-icon .blockart-icon { fill: {{VALUE}} }' + '{{WRAPPER}} .blockart-button-link:focus { color: {{VALUE}} }' + '{{WRAPPER}} .blockart-button-link:focus .blockart-button-icon .blockart-icon { fill: {{VALUE}} }' + '{{WRAPPER}} .blockart-button-link:active { color: {{VALUE}} }' + '{{WRAPPER}} .blockart-button-link:active .blockart-button-icon .blockart-icon { fill: {{VALUE}} }'
    }]
  },
  background1: {
    type: 'object',
    "default": {
      background: 1,
      type: 'color',
      color: '#2563eb'
    },
    style: [{
      condition: [{
        key: 'style',
        relation: '==',
        value: 'filled'
      }],
      selector: '{{WRAPPER}} .blockart-button-link'
    }]
  },
  background2: {
    type: 'object',
    "default": {
      background: 1
    },
    style: [{
      condition: [{
        key: 'style',
        relation: '==',
        value: 'outline'
      }],
      selector: '{{WRAPPER}} .blockart-button-link.is-style-outline'
    }]
  },
  hoverBackground1: {
    type: 'object',
    "default": {
      background: 1
    },
    style: [{
      condition: [{
        key: 'style',
        relation: '==',
        value: 'filled'
      }],
      selector: '{{WRAPPER}} .blockart-button-link:hover, {{WRAPPER}} .blockart-button-link:focus, {{WRAPPER}} .blockart-button-link:active'
    }]
  },
  hoverBackground2: {
    type: 'object',
    "default": {
      background: 1
    },
    style: [{
      condition: [{
        key: 'style',
        relation: '==',
        value: 'outline'
      }],
      selector: '{{WRAPPER}} .blockart-button-link.is-style-outline:hover, {{WRAPPER}} .blockart-button-link.is-style-outline:focus, {{WRAPPER}} .blockart-button-link.is-style-outline:active'
    }]
  },
  border1: {
    type: 'object',
    "default": {
      border: 1,
      radius: {
        desktop: {
          lock: true
        }
      },
      size: {
        desktop: {
          lock: true
        }
      }
    },
    style: [{
      condition: [{
        key: 'style',
        relation: '==',
        value: 'filled'
      }],
      selector: '{{WRAPPER}} .blockart-button-link'
    }]
  },
  hoverBorder1: {
    type: 'object',
    "default": {
      border: 1,
      radius: {
        desktop: {
          lock: true
        }
      },
      size: {
        desktop: {
          lock: true
        }
      }
    },
    style: [{
      condition: [{
        key: 'style',
        relation: '==',
        value: 'filled'
      }],
      selector: '{{WRAPPER}} .blockart-button-link:hover, {{WRAPPER}} .blockart-button-link:focus, {{WRAPPER}} .blockart-button-link:active'
    }]
  },
  border2: {
    type: 'object',
    "default": {
      border: 1,
      color: '#2563EB',
      type: 'solid',
      radius: {
        desktop: {
          top: 2,
          right: 2,
          bottom: 2,
          left: 2,
          unit: 'px',
          lock: true
        }
      },
      size: {
        desktop: {
          top: 1,
          right: 1,
          bottom: 1,
          left: 1,
          unit: 'px',
          lock: true
        }
      }
    },
    style: [{
      condition: [{
        key: 'style',
        relation: '==',
        value: 'outline'
      }],
      selector: '{{WRAPPER}} .blockart-button-link'
    }]
  },
  hoverBorder2: {
    type: 'object',
    "default": {
      border: 1,
      radius: {
        desktop: {
          lock: true
        }
      },
      size: {
        desktop: {
          lock: true
        }
      }
    },
    style: [{
      condition: [{
        key: 'style',
        relation: '==',
        value: 'outline'
      }],
      selector: '{{WRAPPER}} .blockart-button-link:hover, {{WRAPPER}} .blockart-button-link:focus, {{WRAPPER}} .blockart-button-link:active'
    }]
  },
  boxShadow: {
    type: 'object',
    "default": {
      boxShadow: 1
    },
    style: [{
      selector: '{{WRAPPER}} .blockart-button-link'
    }]
  },
  boxShadowHover: {
    type: 'object',
    "default": {
      boxShadow: 1
    },
    style: [{
      selector: '{{WRAPPER}} .blockart-button-link:hover, {{WRAPPER}} .blockart-button-link:focus, {{WRAPPER}} .blockart-button-link:active'
    }]
  }
}, blockAttributes));
;// CONCATENATED MODULE: ./src/blocks/blocks/buttons/deprecated/v1.js

function v1_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function v1_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? v1_ownKeys(Object(source), !0).forEach(function (key) { defineProperty_defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : v1_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }






/* harmony default export */ const v1 = ({
  attributes: v1_objectSpread(v1_objectSpread({}, button_attributes), {}, {
    alignment: {
      type: 'object'
    }
  }),
  supports: {
    className: false,
    align: false,
    color: {
      background: false,
      gradient: false,
      text: false
    }
  },
  save: function save(props) {
    var _props$attributes = props.attributes,
      clientId = _props$attributes.clientId,
      text = _props$attributes.text,
      className = _props$attributes.className,
      cssID = _props$attributes.cssID,
      link = _props$attributes.link,
      size = _props$attributes.size,
      style = _props$attributes.style,
      icon = _props$attributes.icon,
      iconPosition = _props$attributes.iconPosition;
    var classNames = classnames_default()('blockart-button-link', size && "is-".concat(size), style && "is-style-".concat(style));
    return /*#__PURE__*/React.createElement("div", {
      id: cssID ? cssID : null,
      className: (0,external_wp_hooks_namespaceObject.applyFilters)('blockart.button.classnames', classnames_default()("blockart-button blockart-button-".concat(clientId, " "), className))
    }, /*#__PURE__*/React.createElement(components_element, {
      tagName: "a",
      htmlAttrs: {
        className: classNames,
        href: link && link.url ? link.url : null,
        target: link && link.newTab ? '_blank' : null,
        rel: link && link.newTab ? 'noopener' : null
      }
    }, icon && '' !== icon.icon && icon.enable && 'left' === iconPosition && /*#__PURE__*/React.createElement("span", {
      className: "blockart-button-icon"
    }, /*#__PURE__*/React.createElement(components_icon, {
      type: "frontendIcon",
      name: icon.icon,
      role: "img"
    })), /*#__PURE__*/React.createElement(external_wp_blockEditor_namespaceObject.RichText.Content, {
      value: text
    }), icon && '' !== icon.icon && icon.enable && 'right' === iconPosition && /*#__PURE__*/React.createElement("span", {
      className: "blockart-button-icon"
    }, /*#__PURE__*/React.createElement(components_icon, {
      type: "frontendIcon",
      name: icon.icon,
      role: "img"
    }))));
  },
  migrate: function migrate(attrs) {
    var _attrs$alignment;
    var newInnerBlocks = [(0,external_wp_blocks_namespaceObject.createBlock)('blockart/button-inner', v1_objectSpread({}, attrs))];
    return [{
      justification: (_attrs$alignment = attrs === null || attrs === void 0 ? void 0 : attrs.alignment) !== null && _attrs$alignment !== void 0 ? _attrs$alignment : {
        desktop: 'left'
      },
      flexWrap: true,
      orientation: {
        desktop: 'horizontal'
      }
    }, newInnerBlocks];
  }
});
;// CONCATENATED MODULE: ./src/blocks/blocks/buttons/deprecated/v2.js

function v2_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function v2_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? v2_ownKeys(Object(source), !0).forEach(function (key) { defineProperty_defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : v2_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }






/* harmony default export */ const v2 = ({
  attributes: v2_objectSpread(v2_objectSpread({}, button_attributes), {}, {
    alignment: {
      type: 'object'
    }
  }),
  supports: {
    className: false,
    align: false,
    color: {
      background: false,
      gradient: false,
      text: false
    }
  },
  save: function save(props) {
    var _props$attributes = props.attributes,
      clientId = _props$attributes.clientId,
      text = _props$attributes.text,
      className = _props$attributes.className,
      cssID = _props$attributes.cssID,
      link = _props$attributes.link,
      size = _props$attributes.size,
      style = _props$attributes.style,
      icon = _props$attributes.icon,
      iconPosition = _props$attributes.iconPosition;
    var classNames = classnames_default()('blockart-button-link', size && "is-".concat(size), style && "is-style-".concat(style));
    return /*#__PURE__*/React.createElement("div", {
      id: cssID ? cssID : null,
      className: (0,external_wp_hooks_namespaceObject.applyFilters)('blockart.button.classnames', classnames_default()("blockart-button blockart-button-".concat(clientId, " "), className))
    }, /*#__PURE__*/React.createElement(components_element, {
      tagName: "a",
      htmlAttrs: {
        className: classNames,
        href: link && link.url ? link.url : null,
        target: link && link.newTab ? '_blank' : null,
        rel: link && link.newTab ? 'noopener' : null
      }
    }, icon && '' !== icon.icon && icon.enable && 'left' === iconPosition && /*#__PURE__*/React.createElement("span", {
      className: "blockart-button-icon"
    }, /*#__PURE__*/React.createElement(components_icon, {
      type: "frontendIcon",
      name: icon.icon
    })), /*#__PURE__*/React.createElement(external_wp_blockEditor_namespaceObject.RichText.Content, {
      value: text
    }), icon && '' !== icon.icon && icon.enable && 'right' === iconPosition && /*#__PURE__*/React.createElement("span", {
      className: "blockart-button-icon"
    }, /*#__PURE__*/React.createElement(components_icon, {
      type: "frontendIcon",
      name: icon.icon
    }))));
  },
  migrate: function migrate(attrs) {
    var _attrs$alignment;
    var newInnerBlocks = [(0,external_wp_blocks_namespaceObject.createBlock)('blockart/button-inner', v2_objectSpread({}, attrs))];
    return [{
      justification: (_attrs$alignment = attrs === null || attrs === void 0 ? void 0 : attrs.alignment) !== null && _attrs$alignment !== void 0 ? _attrs$alignment : {
        desktop: 'left'
      },
      flexWrap: true,
      orientation: {
        desktop: 'horizontal'
      }
    }, newInnerBlocks];
  }
});
;// CONCATENATED MODULE: ./src/blocks/blocks/buttons/attributes.js

function buttons_attributes_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function buttons_attributes_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? buttons_attributes_ownKeys(Object(source), !0).forEach(function (key) { defineProperty_defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : buttons_attributes_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

/* harmony default export */ const buttons_attributes = (buttons_attributes_objectSpread({
  clientId: {
    type: 'string'
  },
  justification: {
    type: 'string'
  },
  verticalAlignment: {
    type: 'string'
  },
  orientation: {
    type: 'string',
    "default": 'horizontal'
  },
  flexWrap: {
    type: 'boolean',
    "default": true
  },
  flexGap: {
    type: 'object',
    "default": {
      value: 8,
      unit: 'px'
    },
    style: [{
      selector: '{{WRAPPER}} { gap: {{VALUE}}; }'
    }]
  }
}, blockAttributes));
;// CONCATENATED MODULE: ./src/blocks/blocks/buttons/deprecated/v3.js

function v3_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function v3_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? v3_ownKeys(Object(source), !0).forEach(function (key) { defineProperty_defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : v3_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }



/* harmony default export */ const v3 = ({
  attributes: buttons_attributes,
  supports: {
    className: false,
    customClassName: false,
    html: false
  },
  migrate: function migrate(attrs) {
    var newAttrs = {};
    if (attrs.justification) {
      if ('string' === typeof attrs.justification) {
        newAttrs.justification = {
          desktop: attrs.justification
        };
      } else {
        newAttrs.justification = attrs.justification;
      }
    }
    if (attrs.orientation) {
      if ('string' === typeof attrs.orientation) {
        newAttrs.orientation = {
          desktop: attrs.orientation
        };
      } else {
        newAttrs.orientation = attrs.orientation;
      }
    }
    return v3_objectSpread(v3_objectSpread({}, attrs), newAttrs);
  },
  save: function save(_ref) {
    var _classnames;
    var _ref$attributes = _ref.attributes,
      clientId = _ref$attributes.clientId,
      className = _ref$attributes.className,
      justification = _ref$attributes.justification,
      verticalAlignment = _ref$attributes.verticalAlignment,
      orientation = _ref$attributes.orientation,
      flexWrap = _ref$attributes.flexWrap;
    var classNames = classnames_default()("blockart-buttons blockart-buttons-".concat(clientId), (_classnames = {}, defineProperty_defineProperty(_classnames, "is-justification-".concat(justification), !!justification), defineProperty_defineProperty(_classnames, "is-vertical-alignment-".concat(verticalAlignment), !!verticalAlignment && 'horizontal' === orientation), defineProperty_defineProperty(_classnames, "is-".concat(orientation), !!orientation), defineProperty_defineProperty(_classnames, "is-wrap", flexWrap), _classnames), className);
    return /*#__PURE__*/React.createElement("div", {
      className: classNames
    }, /*#__PURE__*/React.createElement(external_wp_blockEditor_namespaceObject.InnerBlocks.Content, null));
  }
});
;// CONCATENATED MODULE: ./src/blocks/blocks/buttons/deprecated/index.js



;// CONCATENATED MODULE: ./src/blocks/blocks/buttons/index.js

function buttons_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function buttons_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? buttons_ownKeys(Object(source), !0).forEach(function (key) { defineProperty_defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : buttons_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }








/* harmony default export */ const blocks_buttons = (function () {
  (0,external_wp_blocks_namespaceObject.registerBlockType)('blockart/button', buttons_objectSpread(buttons_objectSpread({}, buttons_block_namespaceObject), {}, {
    icon: /*#__PURE__*/React.createElement(components_icon, {
      type: "blockIcon",
      name: "buttons",
      size: 24
    }),
    edit: buttons_edit,
    save: buttons_save,
    deprecated: [v1, v2, v3]
  }));
});
;// CONCATENATED MODULE: ./src/blocks/blocks/section/column/edit.js



function column_edit_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function column_edit_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? column_edit_ownKeys(Object(source), !0).forEach(function (key) { defineProperty_defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : column_edit_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }













/* harmony default export */ const column_edit = ((0,external_wp_compose_namespaceObject.compose)([with_device_type, with_copy_paste_styles])(function (props) {
  var _window, _window2, _window3, _window$frames, _window$frames$editor;
  var _useState = (0,external_wp_element_namespaceObject.useState)({
      colWidth: {
        desktop: 0,
        tablet: 0,
        mobile: 0
      },
      nextColWidth: {
        desktop: 0,
        tablet: 0,
        mobile: 0
      },
      prevColWidth: {
        desktop: 0,
        tablet: 0,
        mobile: 0
      }
    }),
    _useState2 = slicedToArray_slicedToArray(_useState, 2),
    state = _useState2[0],
    setState = _useState2[1];
  var _props$attributes = props.attributes,
    clientId = _props$attributes.clientId,
    colWidth = _props$attributes.colWidth,
    background = _props$attributes.background,
    hoverBackground = _props$attributes.hoverBackground,
    border = _props$attributes.border,
    borderHover = _props$attributes.borderHover,
    boxShadow = _props$attributes.boxShadow,
    boxShadowHover = _props$attributes.boxShadowHover,
    blockMargin = _props$attributes.blockMargin,
    blockPadding = _props$attributes.blockPadding,
    blockZIndex = _props$attributes.blockZIndex,
    hideOnDesktop = _props$attributes.hideOnDesktop,
    hideOnTablet = _props$attributes.hideOnTablet,
    hideOnMobile = _props$attributes.hideOnMobile,
    cssID = _props$attributes.cssID,
    className = _props$attributes.className,
    setAttributes = props.setAttributes,
    deviceType = props.deviceType,
    CopyPasteStylesBlockControl = props.copyPasteStylesBlockControl;
  var document = _BLOCKART_.isWP59OrAbove && 'widgets' !== ((_window = window) === null || _window === void 0 ? void 0 : _window.pagenow) && 'customize' !== ((_window2 = window) === null || _window2 === void 0 ? void 0 : _window2.pagenow) && ('site-editor' === ((_window3 = window) === null || _window3 === void 0 ? void 0 : _window3.pagenow) || 'tablet' === deviceType || 'mobile' === deviceType) ? (_window$frames = window.frames) === null || _window$frames === void 0 ? void 0 : (_window$frames$editor = _window$frames['editor-canvas']) === null || _window$frames$editor === void 0 ? void 0 : _window$frames$editor.document : window.document;
  (0,external_wp_element_namespaceObject.useEffect)(function () {
    var id = props.clientId.substr(0, 8);
    if (!clientId) {
      setAttributes({
        clientId: id
      });
    } else if (clientId && clientId !== id) {
      if (document.querySelectorAll(".blockart-column-".concat(clientId)).length > 1) {
        setAttributes({
          clientId: id
        });
      }
    }
    updateColumnWidthAttribute();
  }, [deviceType]);
  var Style = use_block_style({
    blockName: 'column',
    clientId: clientId,
    attributes: props.attributes,
    deviceType: deviceType
  });
  var classNames = (0,external_wp_hooks_namespaceObject.applyFilters)('blockart.column.classnames', classnames_default()("blockart-column blockart-column-".concat(clientId), className));
  var updateColumnWidthAttribute = function updateColumnWidthAttribute() {
    var currentColumn = document.getElementById("block-".concat(props.clientId));
    var rowWidth = currentColumn.closest('.blockart-section').clientWidth;
    currentColumn.style.width = colWidth[deviceType] + '%';
    setState(column_edit_objectSpread(column_edit_objectSpread({}, state), {}, {
      rowWidth: rowWidth,
      colWidth: column_edit_objectSpread({}, colWidth)
    }));
  };
  var _onChange = function onChange(value) {
    var _select = (0,external_wp_data_namespaceObject.select)('core/block-editor'),
      getPreviousBlockClientId = _select.getPreviousBlockClientId,
      getNextBlockClientId = _select.getNextBlockClientId,
      getBlockAttributes = _select.getBlockAttributes;
    var _dispatch = (0,external_wp_data_namespaceObject.dispatch)('core/block-editor'),
      updateBlockAttributes = _dispatch.updateBlockAttributes;
    var currentColumn = document.getElementById("block-".concat(props.clientId));
    var siblingColumns = getSiblings(currentColumn);
    var nextColumn = currentColumn.nextElementSibling;
    var prevColumn = currentColumn.previousElementSibling;
    var diffWidth = parseFloat(value[deviceType]) - parseFloat(colWidth[deviceType]);
    if ('desktop' === deviceType) {
      if (siblingColumns.length > 0) {
        if (null !== nextColumn) {
          var nextColumnBlockClientId = getNextBlockClientId(props.clientId);
          var nextColumnBlockAttr = getBlockAttributes(nextColumnBlockClientId);
          var nextColumnBlockWidth = column_edit_objectSpread({}, nextColumnBlockAttr.colWidth);
          if (parseFloat(colWidth[deviceType]) >= 0 && parseFloat(nextColumnBlockWidth[deviceType]) >= 0 && parseFloat(value[deviceType]) <= parseFloat(nextColumnBlockWidth[deviceType]) + parseFloat(colWidth[deviceType])) {
            nextColumnBlockWidth[deviceType] = parseFloat(nextColumnBlockWidth[deviceType]) - diffWidth;
            nextColumn.style.width = nextColumnBlockWidth[deviceType] + '%';
            currentColumn.style.width = value[deviceType] + '%';
            updateBlockAttributes(nextColumnBlockClientId, Object.assign(nextColumnBlockAttr, {
              colWidth: column_edit_objectSpread({}, nextColumnBlockWidth)
            }));
            setAttributes({
              colWidth: column_edit_objectSpread({}, value)
            });
          }
        } else if (null !== prevColumn) {
          var prevColumnBlockClientId = getPreviousBlockClientId(props.clientId);
          var prevColumnBlockAttr = getBlockAttributes(prevColumnBlockClientId);
          var prevColumnBlockWidth = column_edit_objectSpread({}, prevColumnBlockAttr.colWidth);
          if (parseFloat(colWidth[deviceType]) >= 0 && parseFloat(prevColumnBlockWidth[deviceType]) >= 0 && parseFloat(value[deviceType]) <= parseFloat(prevColumnBlockWidth[deviceType]) + parseFloat(colWidth[deviceType])) {
            prevColumnBlockWidth[deviceType] = parseFloat(prevColumnBlockWidth[deviceType]) - diffWidth;
            prevColumn.style.width = prevColumnBlockWidth[deviceType] + '%';
            currentColumn.style.width = value[deviceType] + '%';
            updateBlockAttributes(prevColumnBlockClientId, Object.assign(prevColumnBlockAttr, {
              colWidth: column_edit_objectSpread({}, prevColumnBlockWidth)
            }));
            setAttributes({
              colWidth: column_edit_objectSpread({}, value)
            });
          }
        }
      }
    } else {
      currentColumn.style.width = value[deviceType] + '%';
      setAttributes({
        colWidth: column_edit_objectSpread({}, value)
      });
    }
  };
  var _onResizeStart = function onResizeStart() {
    var toggleSelection = props.toggleSelection;
    toggleSelection(false);
    setState(column_edit_objectSpread(column_edit_objectSpread({}, state), {}, {
      absWidth: document.getElementById("block-".concat(props.clientId)).getBoundingClientRect().width
    }));
  };
  var _onResize = function onResize(event, direction, elt, delta) {
    var currentColumn = document.getElementById("block-".concat(props.clientId));
    var nextColumn = currentColumn.nextElementSibling;
    var currentColumnWidth = state.absWidth + delta.width;
    var absWidth = currentColumnWidth / state.rowWidth * 100;
    var diffWidth = parseFloat(colWidth[deviceType]) - absWidth;
    var _select2 = (0,external_wp_data_namespaceObject.select)('core/block-editor'),
      getNextBlockClientId = _select2.getNextBlockClientId,
      getBlock = _select2.getBlock;
    currentColumn.querySelector('.components-resizable-box__container').style.width = 'auto';
    if ('right' === direction) {
      if (null !== nextColumn) {
        var nextColumnBlockClientId = getNextBlockClientId(props.clientId);
        var nextColumnBlock = getBlock(nextColumnBlockClientId);
        var nextColumnBlockWidth = column_edit_objectSpread({}, nextColumnBlock.attributes.colWidth);
        if (parseFloat(colWidth[deviceType]) >= 0 && parseFloat(nextColumnBlockWidth[deviceType]) >= 0 && absWidth <= parseFloat(nextColumnBlockWidth[deviceType]) + parseFloat(colWidth[deviceType])) {
          var nextColumnWidth = parseFloat(nextColumnBlockWidth[deviceType]) + diffWidth;
          nextColumn.style.width = Math.abs(nextColumnWidth).toFixed(2) + '%';
          nextColumnBlock.attributes.colWidth[deviceType] = parseFloat(nextColumnWidth.toFixed(2));
          currentColumn.style.width = absWidth.toFixed(2) + '%';
          setAttributes({
            colWidth: column_edit_objectSpread(column_edit_objectSpread({}, colWidth), {}, defineProperty_defineProperty({}, deviceType, parseFloat(absWidth.toFixed(2))))
          });
        }
      }
    }
  };
  var _useSelect = (0,external_wp_data_namespaceObject.useSelect)(
    // eslint-disable-next-line no-shadow
    function (select) {
      var _select3 = select('core/block-editor'),
        getBlockOrder = _select3.getBlockOrder,
        getBlockRootClientId = _select3.getBlockRootClientId,
        getPreviousBlockClientId = _select3.getPreviousBlockClientId,
        getNextBlockClientId = _select3.getNextBlockClientId,
        getBlockParents = _select3.getBlockParents;
      var rootId = getBlockRootClientId(props.clientId);
      return {
        hasChildBlocks: getBlockOrder(props.clientId).length > 0,
        rootClientId: rootId,
        columnsIds: getBlockOrder(rootId),
        nextBlockClientId: getNextBlockClientId(props.clientId),
        prevBlockClientId: getPreviousBlockClientId(props.clientId),
        parentBlocks: getBlockParents(props.clientId)
      };
    }, [props.clientId]),
    columnsIds = _useSelect.columnsIds,
    hasChildBlocks = _useSelect.hasChildBlocks,
    rootClientId = _useSelect.rootClientId,
    parentBlocks = _useSelect.parentBlocks;
  var ALLOWED_BLOCKS = (0,external_wp_element_namespaceObject.useMemo)(function () {
    var allowedBlocks = (0,external_wp_blocks_namespaceObject.getBlockTypes)().map(function (_ref) {
      var name = _ref.name;
      return name;
    });
    if (parentBlocks.length >= 5) {
      allowedBlocks = allowedBlocks.filter(function (name) {
        return 'blockart/section' !== name;
      });
    }
    return allowedBlocks;
  }, [parentBlocks === null || parentBlocks === void 0 ? void 0 : parentBlocks.length]);
  var prevColumnIds = (0,external_wp_element_namespaceObject.useRef)(columnsIds);
  (0,external_wp_element_namespaceObject.useEffect)(function () {
    if (columnsIds.length > 0 && prevColumnIds.current.length !== columnsIds.length) {
      updateColumns();
    }
    prevColumnIds.current = columnsIds;
  }, [columnsIds]);
  var updateColumns = function updateColumns() {
    var _select4 = (0,external_wp_data_namespaceObject.select)('core/block-editor'),
      getBlock = _select4.getBlock,
      getBlocks = _select4.getBlocks;
    var _dispatch2 = (0,external_wp_data_namespaceObject.dispatch)('core/block-editor'),
      updateBlockAttributes = _dispatch2.updateBlockAttributes;
    var rootBlock = getBlock(rootClientId);
    var columns = columnsIds.length;
    var columnFixedWidth = parseFloat((100 / columns).toFixed(3));
    var equalWidth = column_edit_objectSpread(column_edit_objectSpread({}, state.colWidth), {
      desktop: columnFixedWidth,
      tablet: columnFixedWidth,
      mobile: columnFixedWidth
    });
    if (rootClientId && rootBlock) {
      updateBlockAttributes(rootClientId, Object.assign(rootBlock.attributes, {
        columns: columns
      }));
      getBlocks(rootClientId).forEach(function (block) {
        updateBlockAttributes(block.clientId, Object.assign(block.attributes, {
          colWidth: column_edit_objectSpread({}, equalWidth)
        }));
        var columnBlock = document.getElementById("block-".concat(block.clientId));
        if (null !== columnBlock) {
          columnBlock.style.width = equalWidth[deviceType] + '%';
        }
      });
    }
  };
  var addRemoveBlock = function addRemoveBlock(type) {
    var _select5 = (0,external_wp_data_namespaceObject.select)('core/block-editor'),
      getBlockIndex = _select5.getBlockIndex,
      getBlocks = _select5.getBlocks;
    var _dispatch3 = (0,external_wp_data_namespaceObject.dispatch)('core/block-editor'),
      replaceInnerBlocks = _dispatch3.replaceInnerBlocks;
    var selectedBlockIndex = getBlockIndex(props.clientId, rootClientId);
    var innerBlocks = _toConsumableArray(getBlocks(rootClientId));
    if (type === 'delete') {
      innerBlocks.splice(selectedBlockIndex, 1);
    } else {
      innerBlocks.splice(selectedBlockIndex + 1, 0, (0,external_wp_blocks_namespaceObject.createBlock)('blockart/column'));
    }
    replaceInnerBlocks(rootClientId, innerBlocks, false);
  };
  var inlineStyle = 'desktop' !== deviceType ? '.blockart-section > .block-editor-inner-blocks > .block-editor-block-list__layout [data-type=\'blockart/column\'] .components-resizable-box__container.has-show-handle .components-resizable-box__handle { display: none; }' : '';
  return /*#__PURE__*/React.createElement(external_wp_element_namespaceObject.Fragment, null, /*#__PURE__*/React.createElement(external_wp_blockEditor_namespaceObject.InspectorControls, null, /*#__PURE__*/React.createElement(tab_panel, {
    root: true
  }, /*#__PURE__*/React.createElement(tab, {
    tabTitle: (0,external_wp_i18n_namespaceObject.__)('Settings', 'blockart')
  }, /*#__PURE__*/React.createElement(panel, {
    title: (0,external_wp_i18n_namespaceObject.__)('General', 'blockart'),
    initialOpen: true
  }, /*#__PURE__*/React.createElement(slider, {
    label: (0,external_wp_i18n_namespaceObject.__)('Width', 'blockart'),
    onChange: function onChange(val) {
      return _onChange(val);
    },
    value: colWidth,
    min: 0,
    max: 100,
    step: 1,
    defaultUnit: "%",
    showUnit: true,
    responsive: true
  })), /*#__PURE__*/React.createElement(panel, {
    title: (0,external_wp_i18n_namespaceObject.__)('Background', 'blockart')
  }, /*#__PURE__*/React.createElement(tab_panel, null, /*#__PURE__*/React.createElement(tab, {
    tabTitle: (0,external_wp_i18n_namespaceObject.__)('Normal', 'blockart')
  }, /*#__PURE__*/React.createElement(components_background, {
    onChange: function onChange(val) {
      return setAttributes({
        background: val
      });
    },
    label: (0,external_wp_i18n_namespaceObject.__)('Background', 'blockart'),
    bgTypes: ['color', 'image'],
    value: background,
    resetKey: "background"
  })), /*#__PURE__*/React.createElement(tab, {
    tabTitle: (0,external_wp_i18n_namespaceObject.__)('Hover', 'blockart')
  }, /*#__PURE__*/React.createElement(components_background, {
    onChange: function onChange(val) {
      return setAttributes({
        hoverBackground: val
      });
    },
    label: (0,external_wp_i18n_namespaceObject.__)('Background', 'blockart'),
    bgTypes: ['color', 'image'],
    value: hoverBackground,
    resetKey: "hoverBackground"
  })))), /*#__PURE__*/React.createElement(panel, {
    title: (0,external_wp_i18n_namespaceObject.__)('Border', 'blockart')
  }, /*#__PURE__*/React.createElement(tab_panel, null, /*#__PURE__*/React.createElement(tab, {
    tabTitle: (0,external_wp_i18n_namespaceObject.__)('Normal', 'blockart')
  }, /*#__PURE__*/React.createElement(components_border, {
    resetKey: "border",
    value: border,
    onChange: function onChange(val) {
      return setAttributes({
        border: val
      });
    }
  }), /*#__PURE__*/React.createElement(box_shadow, {
    resetKey: "boxShadow",
    value: boxShadow,
    onChange: function onChange(val) {
      return setAttributes({
        boxShadow: val
      });
    }
  })), /*#__PURE__*/React.createElement(tab, {
    tabTitle: (0,external_wp_i18n_namespaceObject.__)('Hover', 'blockart')
  }, /*#__PURE__*/React.createElement(components_border, {
    resetKey: "borderHover",
    value: borderHover,
    onChange: function onChange(val) {
      return setAttributes({
        borderHover: val
      });
    }
  }), /*#__PURE__*/React.createElement(box_shadow, {
    resetKey: "boxShadowHover",
    value: boxShadowHover,
    onChange: function onChange(val) {
      return setAttributes({
        boxShadowHover: val
      });
    }
  }))))), /*#__PURE__*/React.createElement(tab, {
    tabTitle: (0,external_wp_i18n_namespaceObject.__)('Advanced', 'blockart')
  }, /*#__PURE__*/React.createElement(BlockAdvanceSettings, {
    blockMargin: blockMargin,
    blockPadding: blockPadding,
    blockZIndex: blockZIndex,
    cssID: cssID,
    setAttributes: setAttributes
  }), /*#__PURE__*/React.createElement(BlockResponsiveSettings, {
    hideOnDesktop: hideOnDesktop,
    hideOnTablet: hideOnTablet,
    hideOnMobile: hideOnMobile,
    setAttributes: setAttributes
  }), /*#__PURE__*/React.createElement(BlockCSSSettings, {
    className: className,
    setAttributes: setAttributes,
    hasBlockCSS: false
  })))), /*#__PURE__*/React.createElement(external_wp_blockEditor_namespaceObject.BlockControls, null, /*#__PURE__*/React.createElement(external_wp_components_namespaceObject.Toolbar, null, columnsIds.length + 1 <= 6 && /*#__PURE__*/React.createElement(external_wp_components_namespaceObject.Button, {
    label: (0,external_wp_i18n_namespaceObject.__)('Add Column', 'blockart'),
    onClick: function onClick() {
      return addRemoveBlock('add');
    },
    icon: "plus"
  }), columnsIds.length > 1 && /*#__PURE__*/React.createElement(external_wp_components_namespaceObject.Button, {
    label: (0,external_wp_i18n_namespaceObject.__)('Delete Column', 'blockart'),
    onClick: function onClick() {
      return addRemoveBlock('delete');
    },
    icon: "trash"
  })), /*#__PURE__*/React.createElement(CopyPasteStylesBlockControl, null)), /*#__PURE__*/React.createElement(Style, null), /*#__PURE__*/React.createElement(external_wp_components_namespaceObject.ResizableBox, {
    maxWidth: 999999999,
    style: {},
    size: {},
    enable: {
      top: false,
      right: true,
      bottom: false,
      left: false,
      topRight: false,
      bottomRight: false,
      bottomLeft: false,
      topLeft: false
    },
    onResizeStart: function onResizeStart() {
      return _onResizeStart();
    },
    onResize: function onResize(event, direction, elt, delta) {
      return _onResize(event, direction, elt, delta);
    },
    onResizeStop: function onResizeStop() {
      return props.toggleSelection(true);
    },
    className: "blockart-resizable"
  }, /*#__PURE__*/React.createElement("style", null, inlineStyle), /*#__PURE__*/React.createElement("div", {
    id: cssID ? cssID : null,
    className: classNames
  }, /*#__PURE__*/React.createElement("div", {
    className: "blockart-column-inner"
  }, /*#__PURE__*/React.createElement(external_wp_blockEditor_namespaceObject.InnerBlocks, {
    templateLock: false,
    allowedBlocks: ALLOWED_BLOCKS,
    renderAppender: hasChildBlocks ? undefined : function () {
      return /*#__PURE__*/React.createElement(external_wp_blockEditor_namespaceObject.InnerBlocks.ButtonBlockAppender, null);
    }
  })))));
}));
;// CONCATENATED MODULE: ./src/blocks/blocks/section/column/save.js



/* harmony default export */ const column_save = (function (_ref) {
  var _ref$attributes = _ref.attributes,
    clientId = _ref$attributes.clientId,
    className = _ref$attributes.className,
    cssID = _ref$attributes.cssID;
  var classNames = (0,external_wp_hooks_namespaceObject.applyFilters)('blockart.column.classnames', classnames_default()("blockart-column blockart-column-".concat(clientId), className));
  return /*#__PURE__*/React.createElement("div", {
    id: cssID !== null && cssID !== void 0 ? cssID : undefined,
    className: classNames
  }, /*#__PURE__*/React.createElement("div", {
    className: "blockart-column-inner"
  }, /*#__PURE__*/React.createElement(external_wp_blockEditor_namespaceObject.InnerBlocks.Content, null)));
});
;// CONCATENATED MODULE: ./src/blocks/blocks/section/column/block.json
const column_block_namespaceObject = JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","textdomain":"blockart","title":"Column","description":"An advanced single column within section block.","parent":["blockart/section"],"category":"blockart","name":"blockart/column","supports":{"className":false,"customClassName":false,"inserter":false,"reusable":false,"html":false},"example":{"attributes":{}},"attributes":{"clientId":{"type":"string","default":""},"colWidth":{"type":"object","default":{"desktop":50,"tablet":100,"mobile":100},"style":[{"selector":"{{WRAPPER}} { width: {{VALUE}}%; }"}]},"background":{"type":"object","default":{"background":1},"style":[{"selector":"{{WRAPPER}} > .blockart-column-inner"}]},"hoverBackground":{"type":"object","default":{"background":1},"style":[{"selector":"{{WRAPPER}}:hover > .blockart-column-inner"}]},"border":{"type":"object","default":{"border":1,"radius":{"desktop":{"lock":true}},"size":{"desktop":{"lock":true}}},"style":[{"selector":"{{WRAPPER}} > .blockart-column-inner"}]},"borderHover":{"type":"object","default":{"border":1,"radius":{"desktop":{"lock":true}},"size":{"desktop":{"lock":true}}},"style":[{"selector":"{{WRAPPER}}:hover > .blockart-column-inner"}]},"boxShadow":{"type":"object","default":{"boxShadow":1},"style":[{"selector":"{{WRAPPER}} > .blockart-column-inner"}]},"boxShadowHover":{"type":"object","default":{"boxShadow":1},"style":[{"selector":"{{WRAPPER}}:hover > .blockart-column-inner"}]},"blockMargin":{"type":"object","default":{"dimension":1,"desktop":{"lock":true}},"style":[{"selector":"{{WRAPPER}} { margin: {{VALUE}}; }"}]},"blockPadding":{"type":"object","default":{"dimension":1,"desktop":{"lock":true}},"style":[{"selector":"{{WRAPPER}} > .blockart-column-inner { padding: {{VALUE}}; }"}]},"blockZIndex":{"type":"number","style":[{"selector":"{{WRAPPER}} { z-index: {{VALUE}}; }"}]},"cssID":{"type":"string"},"animation":{"type":"string"},"interaction":{"type":"object"},"position":{"type":"object"},"hideOnDesktop":{"type":"boolean","style":[{"selector":"@media (min-width:62em) { {{WRAPPER}} { display: none; } }"}]},"hideOnTablet":{"type":"boolean","style":[{"selector":"@media (min-width:48em) and (max-width:62em) { {{WRAPPER}} { display: none; } }"}]},"hideOnMobile":{"type":"boolean","style":[{"selector":"@media (max-width:48em) { {{WRAPPER}} { display: none; } }"}]},"colReverseOnTablet":{"type":"boolean","style":[{"selector":"@media (max-width:62em) { {{WRAPPER}} > .blockart-container > .blockart-section-inner { flex-direction:column-reverse; } }"}]},"colReverseOnMobile":{"type":"boolean","style":[{"selector":"@media (max-width:48em) { {{WRAPPER}} > .blockart-container > .blockart-section-inner { flex-direction:column-reverse; } }"}]},"blockCSS":{"type":"string"},"className":{"type":"string"}},"style":"blockart-blocks","editorScript":"blockart-blocks","editorStyle":"blockart-blocks-editor"}');
;// CONCATENATED MODULE: ./src/blocks/blocks/section/column/index.js

function column_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function column_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? column_ownKeys(Object(source), !0).forEach(function (key) { defineProperty_defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : column_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }





/* harmony default export */ const section_column = (function () {
  (0,external_wp_blocks_namespaceObject.registerBlockType)('blockart/column', column_objectSpread(column_objectSpread({}, column_block_namespaceObject), {}, {
    icon: /*#__PURE__*/React.createElement(components_icon, {
      className: "blockart-column-block",
      type: "blockIcon",
      name: "column",
      size: 24
    }),
    edit: column_edit,
    save: column_save
  }));
});
;// CONCATENATED MODULE: ./src/blocks/blocks/section/edit.js












var layouts = [{
  label: '100',
  columns: 1,
  structure: {
    desktop: [100],
    tablet: [100],
    mobile: [100]
  }
}, {
  label: '50/50',
  columns: 2,
  structure: {
    desktop: [50, 50],
    tablet: [100, 100],
    mobile: [100, 100]
  }
}, {
  label: '34/66',
  columns: 2,
  structure: {
    desktop: [34, 66],
    tablet: [100, 100],
    mobile: [100, 100]
  }
}, {
  label: '66/34',
  columns: 2,
  structure: {
    desktop: [66, 34],
    tablet: [100, 100],
    mobile: [100, 100]
  }
}, {
  label: '33/33/33',
  columns: 3,
  structure: {
    desktop: [33.33, 33.33, 33.34],
    tablet: [100, 100, 100],
    mobile: [100, 100, 100]
  }
}, {
  label: '25/50/25',
  columns: 3,
  structure: {
    desktop: [25, 50, 25],
    tablet: [100, 100, 100],
    mobile: [100, 100, 100]
  }
}, {
  label: '25/25/50',
  columns: 3,
  structure: {
    desktop: [25, 25, 50],
    tablet: [100, 100, 100],
    mobile: [100, 100, 100]
  }
}, {
  label: '50/25/25',
  columns: 3,
  structure: {
    desktop: [50, 25, 25],
    tablet: [100, 100, 100],
    mobile: [100, 100, 100]
  }
}, {
  label: '25/25/25/25',
  columns: 4,
  structure: {
    desktop: [25, 25, 25, 25],
    tablet: [100, 100, 100, 100],
    mobile: [100, 100, 100, 100]
  }
}];
var defaultLayout = {
  desktop: [100],
  tablet: [100],
  mobile: [100]
};
/* harmony default export */ const section_edit = ((0,external_wp_compose_namespaceObject.compose)([with_device_type, with_copy_paste_styles])(function (props) {
  var _props$attributes = props.attributes,
    uniqueId = _props$attributes.clientId,
    columns = _props$attributes.columns,
    hasModal = _props$attributes.hasModal,
    modalOnly = _props$attributes.modalOnly,
    childRow = _props$attributes.childRow,
    verticalAlignment = _props$attributes.verticalAlignment,
    container = _props$attributes.container,
    width = _props$attributes.width,
    columnGap = _props$attributes.columnGap,
    height = _props$attributes.height,
    minHeight = _props$attributes.minHeight,
    background = _props$attributes.background,
    hoverBackground = _props$attributes.hoverBackground,
    border = _props$attributes.border,
    borderHover = _props$attributes.borderHover,
    boxShadow = _props$attributes.boxShadow,
    boxShadowHover = _props$attributes.boxShadowHover,
    overlay = _props$attributes.overlay,
    overlayBackground = _props$attributes.overlayBackground,
    blockMargin = _props$attributes.blockMargin,
    blockPadding = _props$attributes.blockPadding,
    blockZIndex = _props$attributes.blockZIndex,
    cssID = _props$attributes.cssID,
    hideOnDesktop = _props$attributes.hideOnDesktop,
    hideOnTablet = _props$attributes.hideOnTablet,
    hideOnMobile = _props$attributes.hideOnMobile,
    className = _props$attributes.className,
    colReverseOnTablet = _props$attributes.colReverseOnTablet,
    colReverseOnMobile = _props$attributes.colReverseOnMobile,
    align = _props$attributes.align,
    setAttributes = props.setAttributes,
    deviceType = props.deviceType,
    CopyPasteStylesBlockControl = props.copyPasteStylesBlockControl;
  (0,external_wp_element_namespaceObject.useEffect)(function () {
    var _select = (0,external_wp_data_namespaceObject.select)('core/block-editor'),
      getBlockRootClientId = _select.getBlockRootClientId;
    var parentClientId = getBlockRootClientId(props.clientId);
    var id = props.clientId.substr(0, 8);
    if (!uniqueId) {
      setAttributes({
        clientId: id,
        childRow: !!parentClientId
      });
    } else if (uniqueId !== id) {
      if (document.querySelectorAll(".blockart-section-".concat(uniqueId)).length > 1) {
        setAttributes({
          clientId: id,
          childRow: !!parentClientId
        });
      }
    }
  }, []);
  var Style = use_block_style({
    blockName: 'section',
    clientId: uniqueId,
    attributes: props.attributes,
    deviceType: deviceType
  });

  // eslint-disable-next-line no-shadow
  var getLayouts = function getLayouts(columns) {
    return _toConsumableArray(Array(parseInt(columns))).map(function (data, index) {
      var columnWidth = {
        desktop: defaultLayout.desktop[index],
        tablet: defaultLayout.tablet[index],
        mobile: defaultLayout.mobile[index]
      };
      return ['blockart/column', {
        colWidth: columnWidth
      }];
    });
  };
  var containerClassNames = classnames_default()({
    'blockart-container': container === 'contained' || !childRow
  }, {
    'blockart-container-fluid': container === 'stretched' || childRow
  });
  var sectionClassNames = (0,external_wp_hooks_namespaceObject.applyFilters)('blockart.section.classnames', classnames_default()("blockart-section blockart-section-".concat(uniqueId), className, align && "align".concat(align)));
  var inlineStyle = function inlineStyle() {
    var css = '';
    if (columnGap && columnGap[deviceType]) {
      var value = (columnGap[deviceType].value || 0).toString() + columnGap[deviceType].unit || 'px';
      css += ".blockart-section-".concat(uniqueId, " [data-type=\"blockart/column\"] { padding-right: calc(").concat(value, " / 2); padding-left: calc(").concat(value, " / 2); }");
    }
    if ('tablet' === deviceType || 'mobile' === deviceType) {
      css += ".blockart-section-inner > .block-editor-inner-blocks > .block-editor-block-list__layout { flex-wrap: wrap; }";
    }
    if (verticalAlignment && verticalAlignment[deviceType]) {
      css += ".blockart-section-".concat(uniqueId, " .blockart-section-inner > .block-editor-inner-blocks .block-editor-block-list__layout { align-items: ").concat(verticalAlignment[deviceType], " }");
    }
    css += '.blockart-section-inner {margin: unset !important}';
    return css;
  };
  if (!columns) {
    return /*#__PURE__*/React.createElement(external_wp_element_namespaceObject.Fragment, null, /*#__PURE__*/React.createElement(external_wp_components_namespaceObject.Placeholder, {
      label: (0,external_wp_i18n_namespaceObject.__)('Choose Your Layout', 'blockart'),
      className: "blockart-section-preset"
    }, /*#__PURE__*/React.createElement("div", {
      className: "blockart-section-preset-group"
    }, layouts.map(function (_ref, idx) {
      var label = _ref.label,
        columns = _ref.columns,
        structure = _ref.structure;
      return /*#__PURE__*/React.createElement(external_wp_components_namespaceObject.Tooltip, {
        key: idx,
        text: label,
        delay: 300
      }, /*#__PURE__*/React.createElement("button", {
        className: "blockart-section-preset-btn",
        onClick: function onClick() {
          setAttributes({
            columns: columns
          });
          defaultLayout = structure;
        }
      }, structure.desktop.map(function (s, k) {
        return /*#__PURE__*/React.createElement("i", {
          key: k,
          style: {
            width: s + '%'
          }
        });
      })));
    })), !_BLOCKART_.isNotPostEditor && /*#__PURE__*/React.createElement("div", {
      className: "blockart-section-preset-import-btn"
    }, /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        return setAttributes({
          hasModal: true
        });
      }
    }, (0,external_wp_i18n_namespaceObject.__)('View Templates', 'blockart')))), hasModal && /*#__PURE__*/React.createElement(library_modal, {
      closeModal: function closeModal() {
        return setAttributes({
          hasModal: false
        });
      },
      hasModal: hasModal,
      modalOnly: modalOnly,
      blockId: props.clientId
    }));
  }
  return /*#__PURE__*/React.createElement(external_wp_element_namespaceObject.Fragment, null, /*#__PURE__*/React.createElement(external_wp_blockEditor_namespaceObject.InspectorControls, null, /*#__PURE__*/React.createElement(tab_panel, {
    root: true
  }, /*#__PURE__*/React.createElement(tab, {
    tabTitle: (0,external_wp_i18n_namespaceObject.__)('Layout', 'blockart')
  }, /*#__PURE__*/React.createElement(layout, {
    block: "section"
  })), /*#__PURE__*/React.createElement(tab, {
    tabTitle: (0,external_wp_i18n_namespaceObject.__)('Settings', 'blockart')
  }, /*#__PURE__*/React.createElement(panel, {
    title: (0,external_wp_i18n_namespaceObject.__)('General', 'blockart'),
    initialOpen: true
  }, /*#__PURE__*/React.createElement(components_select, {
    options: [{
      label: (0,external_wp_i18n_namespaceObject.__)('Default', 'blockart'),
      value: ''
    }, {
      label: (0,external_wp_i18n_namespaceObject.__)('Baseline', 'blockart'),
      value: 'baseline'
    }, {
      label: (0,external_wp_i18n_namespaceObject.__)('Top', 'blockart'),
      value: 'flex-start'
    }, {
      label: (0,external_wp_i18n_namespaceObject.__)('Middle', 'blockart'),
      value: 'center'
    }, {
      label: (0,external_wp_i18n_namespaceObject.__)('Bottom', 'blockart'),
      value: 'flex-end'
    }],
    onChange: function onChange(val) {
      return setAttributes({
        verticalAlignment: val
      });
    },
    value: verticalAlignment,
    label: (0,external_wp_i18n_namespaceObject.__)('Vertical Alignment', 'blockart'),
    placeholder: (0,external_wp_i18n_namespaceObject.__)('Default', 'blockart'),
    responsive: true,
    inline: false
  }), /*#__PURE__*/React.createElement(components_select, {
    value: container,
    options: [{
      label: (0,external_wp_i18n_namespaceObject.__)('Contained', 'blockart'),
      value: 'contained'
    }, {
      label: (0,external_wp_i18n_namespaceObject.__)('Stretched', 'blockart'),
      value: 'stretched'
    }],
    onChange: function onChange(val) {
      return setAttributes({
        container: val
      });
    },
    label: (0,external_wp_i18n_namespaceObject.__)('Container', 'blockart')
  }), 'contained' === container && /*#__PURE__*/React.createElement(slider, {
    onChange: function onChange(val) {
      return setAttributes({
        width: val
      });
    },
    label: (0,external_wp_i18n_namespaceObject.__)('Width', 'blockart'),
    units: ['px'],
    responsive: true,
    min: 0,
    max: 1920,
    value: width
  }), /*#__PURE__*/React.createElement(slider, {
    onChange: function onChange(val) {
      return setAttributes({
        columnGap: val
      });
    },
    label: (0,external_wp_i18n_namespaceObject.__)('Column Gap', 'blockart'),
    units: ['px', 'em', '%'],
    responsive: true,
    min: 0,
    max: 100,
    value: columnGap,
    resetKey: "columnGap"
  }), /*#__PURE__*/React.createElement(components_select, {
    options: [{
      label: (0,external_wp_i18n_namespaceObject.__)('Min Height', 'blockart'),
      value: 'min-height'
    }, {
      label: (0,external_wp_i18n_namespaceObject.__)('Default', 'blockart'),
      value: 'default'
    }, {
      label: (0,external_wp_i18n_namespaceObject.__)('Fit To Screen', 'blockart'),
      value: 'fit-to-screen'
    }],
    onChange: function onChange(val) {
      return setAttributes({
        height: val
      });
    },
    value: height,
    label: (0,external_wp_i18n_namespaceObject.__)('Height', 'blockart')
  }), 'min-height' === height && /*#__PURE__*/React.createElement(slider, {
    onChange: function onChange(val) {
      return setAttributes({
        minHeight: val
      });
    },
    label: (0,external_wp_i18n_namespaceObject.__)('Min Height', 'blockart'),
    units: ['px', 'em', 'vh'],
    responsive: true,
    min: 0,
    max: 1200,
    value: minHeight,
    resetKey: "minHeight"
  })), /*#__PURE__*/React.createElement(panel, {
    title: (0,external_wp_i18n_namespaceObject.__)('Background', 'blockart')
  }, /*#__PURE__*/React.createElement(tab_panel, null, /*#__PURE__*/React.createElement(tab, {
    tabTitle: (0,external_wp_i18n_namespaceObject.__)('Normal', 'blockart')
  }, /*#__PURE__*/React.createElement(components_background, {
    onChange: function onChange(val) {
      return setAttributes({
        background: val
      });
    },
    label: (0,external_wp_i18n_namespaceObject.__)('Background', 'blockart'),
    bgTypes: ['color', 'image'],
    value: background,
    resetKey: "background"
  })), /*#__PURE__*/React.createElement(tab, {
    tabTitle: (0,external_wp_i18n_namespaceObject.__)('Hover', 'blockart')
  }, /*#__PURE__*/React.createElement(components_background, {
    onChange: function onChange(val) {
      return setAttributes({
        background: val
      });
    },
    label: (0,external_wp_i18n_namespaceObject.__)('Background', 'blockart'),
    bgTypes: ['color', 'image'],
    value: hoverBackground,
    resetKey: "hoverBackground"
  })))), /*#__PURE__*/React.createElement(panel, {
    title: (0,external_wp_i18n_namespaceObject.__)('Border', 'blockart')
  }, /*#__PURE__*/React.createElement(tab_panel, null, /*#__PURE__*/React.createElement(tab, {
    tabTitle: (0,external_wp_i18n_namespaceObject.__)('Normal', 'blockart')
  }, /*#__PURE__*/React.createElement(components_border, {
    resetKey: "border",
    value: border,
    onChange: function onChange(val) {
      return setAttributes({
        border: val
      });
    }
  }), /*#__PURE__*/React.createElement(box_shadow, {
    resetKey: "boxShadow",
    value: boxShadow,
    onChange: function onChange(val) {
      return setAttributes({
        boxShadow: val
      });
    }
  })), /*#__PURE__*/React.createElement(tab, {
    tabTitle: (0,external_wp_i18n_namespaceObject.__)('Hover', 'blockart')
  }, /*#__PURE__*/React.createElement(components_border, {
    resetKey: "borderHover",
    value: borderHover,
    onChange: function onChange(val) {
      return setAttributes({
        borderHover: val
      });
    }
  }), /*#__PURE__*/React.createElement(box_shadow, {
    resetKey: "boxShadowHover",
    value: boxShadowHover,
    onChange: function onChange(val) {
      return setAttributes({
        boxShadowHover: val
      });
    }
  })))), /*#__PURE__*/React.createElement(panel, {
    title: (0,external_wp_i18n_namespaceObject.__)('Overlay', 'blockart')
  }, /*#__PURE__*/React.createElement(toggle, {
    checked: overlay,
    onChange: function onChange() {
      return setAttributes({
        overlay: !overlay
      });
    },
    label: (0,external_wp_i18n_namespaceObject.__)('Enable', 'blockart')
  }), overlay && /*#__PURE__*/React.createElement(components_background, {
    resetKey: "overlayBackground",
    onChange: function onChange(val) {
      return setAttributes({
        overlayBackground: val
      });
    },
    value: overlayBackground || {},
    label: (0,external_wp_i18n_namespaceObject.__)('Background', 'blockart')
  }))), /*#__PURE__*/React.createElement(tab, {
    tabTitle: (0,external_wp_i18n_namespaceObject.__)('Advanced', 'blockart')
  }, /*#__PURE__*/React.createElement(BlockAdvanceSettings, {
    blockMargin: blockMargin,
    blockPadding: blockPadding,
    blockZIndex: blockZIndex,
    cssID: cssID,
    setAttributes: setAttributes
  }), /*#__PURE__*/React.createElement(BlockResponsiveSettings, {
    hideOnDesktop: hideOnDesktop,
    hideOnTablet: hideOnTablet,
    hideOnMobile: hideOnMobile,
    setAttributes: setAttributes,
    hasColReverse: true,
    colReverseOnTablet: colReverseOnTablet,
    colReverseOnMobile: colReverseOnMobile
  }), /*#__PURE__*/React.createElement(BlockCSSSettings, {
    className: className,
    setAttributes: setAttributes,
    hasBlockCSS: false
  })))), /*#__PURE__*/React.createElement(external_wp_blockEditor_namespaceObject.BlockControls, null, /*#__PURE__*/React.createElement(CopyPasteStylesBlockControl, null)), /*#__PURE__*/React.createElement(Style, null), /*#__PURE__*/React.createElement("div", {
    id: cssID ? cssID : null,
    className: sectionClassNames
  }, /*#__PURE__*/React.createElement("style", null, inlineStyle()), overlay && /*#__PURE__*/React.createElement("div", {
    className: "blockart-overlay"
  }), /*#__PURE__*/React.createElement("div", {
    className: containerClassNames
  }, /*#__PURE__*/React.createElement("div", {
    className: "blockart-section-inner".concat('fit-to-screen' === height ? ' blockart-height-fit-to-screen' : '')
  }, /*#__PURE__*/React.createElement(external_wp_blockEditor_namespaceObject.InnerBlocks, {
    template: getLayouts(columns),
    allowedBlocks: ['blockart/column'],
    orientation: "horizontal",
    renderAppender: false
  })))));
}));
;// CONCATENATED MODULE: ./src/blocks/blocks/section/save.js



/* harmony default export */ const section_save = (function (_ref) {
  var _ref$attributes = _ref.attributes,
    clientId = _ref$attributes.clientId,
    container = _ref$attributes.container,
    cssID = _ref$attributes.cssID,
    className = _ref$attributes.className,
    overlay = _ref$attributes.overlay,
    height = _ref$attributes.height,
    align = _ref$attributes.align;
  var containerClassNames = classnames_default()({
    'blockart-container': container === 'contained'
  }, {
    'blockart-container-fluid': container === 'stretched'
  });
  var sectionClassNames = (0,external_wp_hooks_namespaceObject.applyFilters)('blockart.section.classnames', classnames_default()("blockart-section blockart-section-".concat(clientId), className, align && "align".concat(align)));
  return /*#__PURE__*/React.createElement("div", {
    id: cssID !== null && cssID !== void 0 ? cssID : undefined,
    className: sectionClassNames
  }, overlay && /*#__PURE__*/React.createElement("div", {
    className: "blockart-overlay"
  }), /*#__PURE__*/React.createElement("div", {
    className: containerClassNames
  }, /*#__PURE__*/React.createElement("div", {
    className: "blockart-section-inner".concat(height === 'fit-to-screen' ? ' blockart-height-fit-to-screen' : '')
  }, /*#__PURE__*/React.createElement(external_wp_blockEditor_namespaceObject.InnerBlocks.Content, null))));
});
;// CONCATENATED MODULE: ./src/blocks/blocks/section/block.json
const section_block_namespaceObject = JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","name":"blockart/section","title":"Section","description":"Add Rows and Columns inside rows to create various layouts.","keywords":["section","column","layout"],"category":"blockart","textdomain":"blockart","supports":{"className":false,"customClassName":false,"align":["center","wide","full"]},"example":{"attributes":{}},"attributes":{"clientId":{"type":"string"},"hasModal":{"type":"boolean","default":false},"modalOnly":{"type":"boolean","default":false},"columns":{"type":"number","default":""},"childRow":{"type":"boolean","default":false},"verticalAlignment":{"type":"object","default":{"desktop":""},"style":[{"selector":"{{WRAPPER}} > .blockart-container > .blockart-section-inner,{{WRAPPER}} > .blockart-container-fluid > .blockart-section-inner{ align-items: {{VALUE}}; }"}]},"container":{"type":"string","default":"contained"},"inheritFromTheme":{"type":"boolean","default":false},"width":{"type":"object","default":{"desktop":{"value":1170,"unit":"px"}},"style":[{"condition":[{"key":"container","relation":"==","value":"contained"},{"key":"inheritFromTheme","relation":"!=","value":true}],"selector":"{{WRAPPER}} > .blockart-container { max-width: {{VALUE}}; }"}]},"columnGap":{"type":"object","default":{"desktop":{"value":30,"unit":"px"}},"style":[{"selector":"{{WRAPPER}} > .blockart-container > .blockart-section-inner > .blockart-column,{{WRAPPER}} > .blockart-container-fluid > .blockart-section-inner > .blockart-column{ padding-left: {{VALUE}};}{{WRAPPER}} > .blockart-container-fluid > .blockart-section-inner,{{WRAPPER}} > .blockart-container > .blockart-section-inner{ margin-left: -{{VALUE}};}"}]},"height":{"type":"string","default":"default"},"minHeight":{"type":"object","style":[{"condition":[{"key":"height","relation":"==","value":"min-height"}],"selector":"{{WRAPPER}} > .blockart-container > .blockart-section-inner,{{WRAPPER}} > .blockart-container-fluid > .blockart-section-inner {min-height: {{VALUE}};}"}]},"background":{"type":"object","default":{"background":1},"style":[{"selector":"{{WRAPPER}}"}]},"hoverBackground":{"type":"object","default":{"background":1},"style":[{"selector":"{{WRAPPER}}:hover"}]},"border":{"type":"object","default":{"border":1,"radius":{"desktop":{"lock":true}},"size":{"desktop":{"lock":true}}},"style":[{"selector":"{{WRAPPER}}"}]},"borderHover":{"type":"object","default":{"border":1,"radius":{"desktop":{"lock":true}},"size":{"desktop":{"lock":true}}},"style":[{"selector":"{{WRAPPER}}:hover"}]},"boxShadow":{"type":"object","default":{"boxShadow":1},"style":[{"selector":"{{WRAPPER}}"}]},"boxShadowHover":{"type":"object","default":{"boxShadow":1},"style":[{"selector":"{{WRAPPER}}:hover"}]},"overlay":{"type":"boolean","default":false},"overlayBackground":{"type":"object","default":{"background":1,"color":"rgba(37, 99, 235,0.3)"},"style":[{"condition":[{"key":"overlay","relation":"==","value":true}],"selector":"{{WRAPPER}} > .blockart-overlay"}]},"blockMargin":{"type":"object","default":{"dimension":1,"desktop":{"lock":true}},"style":[{"selector":"{{WRAPPER}} { margin: {{VALUE}}; }"}]},"blockPadding":{"type":"object","default":{"dimension":1,"desktop":{"left":15,"right":15,"unit":"px"}},"style":[{"selector":"{{WRAPPER}} { padding: {{VALUE}}; }"}]},"blockZIndex":{"type":"number","style":[{"selector":"{{WRAPPER}} { z-index: {{VALUE}}; }"}]},"cssID":{"type":"string"},"animation":{"type":"string"},"interaction":{"type":"object"},"position":{"type":"object"},"hideOnDesktop":{"type":"boolean","style":[{"selector":"@media (min-width:62em) { {{WRAPPER}} { display: none; } }"}]},"hideOnTablet":{"type":"boolean","style":[{"selector":"@media (min-width:48em) and (max-width:62em) { {{WRAPPER}} { display: none; } }"}]},"hideOnMobile":{"type":"boolean","style":[{"selector":"@media (max-width:48em) { {{WRAPPER}} { display: none; } }"}]},"colReverseOnTablet":{"type":"boolean","style":[{"selector":"@media (max-width:62em) { {{WRAPPER}} > .blockart-container > .blockart-section-inner { flex-direction:column-reverse; } }"}]},"colReverseOnMobile":{"type":"boolean","style":[{"selector":"@media (max-width:48em) { {{WRAPPER}} > .blockart-container > .blockart-section-inner { flex-direction:column-reverse; } }"}]},"blockCSS":{"type":"string"},"className":{"type":"string"}},"style":"blockart-blocks","editorScript":"blockart-blocks","editorStyle":"blockart-blocks-editor"}');
;// CONCATENATED MODULE: ./src/blocks/blocks/section/index.js

function section_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function section_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? section_ownKeys(Object(source), !0).forEach(function (key) { defineProperty_defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : section_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }







/* harmony default export */ const blocks_section = (function () {
  (0,external_wp_blocks_namespaceObject.registerBlockType)('blockart/section', section_objectSpread(section_objectSpread({}, section_block_namespaceObject), {}, {
    icon: /*#__PURE__*/React.createElement(components_icon, {
      type: "blockIcon",
      name: "section",
      size: 24
    }),
    edit: section_edit,
    save: section_save
  }));
});
;// CONCATENATED MODULE: ./src/blocks/blocks/paragraph/edit.js

function paragraph_edit_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function paragraph_edit_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? paragraph_edit_ownKeys(Object(source), !0).forEach(function (key) { defineProperty_defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : paragraph_edit_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }










/* harmony default export */ const paragraph_edit = ((0,external_wp_compose_namespaceObject.compose)([with_client_id, with_device_type, with_copy_paste_styles])(function (props) {
  var _props$attributes = props.attributes,
    clientId = _props$attributes.clientId,
    text = _props$attributes.text,
    color = _props$attributes.color,
    hoverColor = _props$attributes.hoverColor,
    background = _props$attributes.background,
    hoverBackground = _props$attributes.hoverBackground,
    alignment = _props$attributes.alignment,
    margin = _props$attributes.margin,
    typography = _props$attributes.typography,
    blockZIndex = _props$attributes.blockZIndex,
    blockPadding = _props$attributes.blockPadding,
    cssID = _props$attributes.cssID,
    hideOnDesktop = _props$attributes.hideOnDesktop,
    hideOnTablet = _props$attributes.hideOnTablet,
    hideOnMobile = _props$attributes.hideOnMobile,
    className = _props$attributes.className,
    setAttributes = props.setAttributes,
    CopyPasteStylesBlockControl = props.copyPasteStylesBlockControl,
    deviceType = props.deviceType;
  var Style = use_block_style({
    blockName: 'paragraph',
    clientId: clientId,
    attributes: props.attributes,
    deviceType: deviceType
  });
  var classNames = (0,external_wp_hooks_namespaceObject.applyFilters)('blockart.paragraph.classnames', classnames_default()("blockart-paragraph blockart-paragraph-".concat(clientId), className));
  return /*#__PURE__*/React.createElement(external_wp_element_namespaceObject.Fragment, null, /*#__PURE__*/React.createElement(external_wp_blockEditor_namespaceObject.InspectorControls, null, /*#__PURE__*/React.createElement(tab_panel, {
    root: true
  }, /*#__PURE__*/React.createElement(tab, {
    tabTitle: (0,external_wp_i18n_namespaceObject.__)('Layout', 'blockart')
  }, /*#__PURE__*/React.createElement(layout, {
    block: "paragraph"
  })), /*#__PURE__*/React.createElement(tab, {
    tabTitle: (0,external_wp_i18n_namespaceObject.__)('Settings', 'blockart')
  }, /*#__PURE__*/React.createElement(panel, {
    title: (0,external_wp_i18n_namespaceObject.__)('General', 'blockart'),
    initialOpen: true
  }, /*#__PURE__*/React.createElement(advance_select, {
    value: alignment,
    onChange: function onChange(val) {
      return setAttributes({
        alignment: val
      });
    },
    responsive: true,
    label: (0,external_wp_i18n_namespaceObject.__)('Alignment', 'blockart'),
    options: [{
      label: (0,external_wp_i18n_namespaceObject.__)('Left', 'blockart'),
      value: 'left',
      icon: 'text-align-left'
    }, {
      label: (0,external_wp_i18n_namespaceObject.__)('Center', 'blockart'),
      value: 'center',
      icon: 'text-align-center'
    }, {
      label: (0,external_wp_i18n_namespaceObject.__)('Right', 'blockart'),
      value: 'right',
      icon: 'text-align-right'
    }, {
      label: (0,external_wp_i18n_namespaceObject.__)('Justify', 'blockart'),
      value: 'justify',
      icon: 'text-align-justify'
    }]
  })), /*#__PURE__*/React.createElement(panel, {
    title: (0,external_wp_i18n_namespaceObject.__)('Text', 'blockart')
  }, /*#__PURE__*/React.createElement(components_typography, {
    value: typography,
    onChange: function onChange(val) {
      return setAttributes({
        typography: val
      });
    }
  })), /*#__PURE__*/React.createElement(panel, {
    title: (0,external_wp_i18n_namespaceObject.__)('Spacing', 'blockart')
  }, /*#__PURE__*/React.createElement(dimensions, {
    value: margin || {},
    responsive: true,
    label: (0,external_wp_i18n_namespaceObject.__)('Margin', 'blockart'),
    defaultUnit: "px",
    units: ['px', 'rem', 'em', '%'],
    onChange: function onChange(val) {
      return setAttributes({
        margin: val
      });
    },
    type: "margin",
    resetKey: "margin"
  })), /*#__PURE__*/React.createElement(panel, {
    title: (0,external_wp_i18n_namespaceObject.__)('Color', 'blockart')
  }, /*#__PURE__*/React.createElement(tab_panel, null, /*#__PURE__*/React.createElement(tab, {
    tabTitle: (0,external_wp_i18n_namespaceObject.__)('Normal', 'blockart')
  }, /*#__PURE__*/React.createElement(components_color, {
    onChange: function onChange(val) {
      return setAttributes({
        color: val
      });
    },
    label: (0,external_wp_i18n_namespaceObject.__)('Color', 'blockart'),
    value: color,
    resetKey: "color"
  }), /*#__PURE__*/React.createElement(components_background, {
    value: background,
    onChange: function onChange(val) {
      return setAttributes({
        background: val
      });
    },
    label: (0,external_wp_i18n_namespaceObject.__)('Background', 'blockart'),
    resetKey: "background"
  })), /*#__PURE__*/React.createElement(tab, {
    tabTitle: (0,external_wp_i18n_namespaceObject.__)('Hover', 'blockart')
  }, /*#__PURE__*/React.createElement(components_color, {
    onChange: function onChange(val) {
      return setAttributes({
        hoverColor: val
      });
    },
    label: (0,external_wp_i18n_namespaceObject.__)('Color', 'blockart'),
    value: hoverColor,
    resetKey: "hoverColor"
  }), /*#__PURE__*/React.createElement(components_background, {
    value: hoverBackground,
    onChange: function onChange(val) {
      return setAttributes({
        hoverBackground: val
      });
    },
    label: (0,external_wp_i18n_namespaceObject.__)('Background', 'blockart'),
    resetKey: "hoverBackground"
  }))))), /*#__PURE__*/React.createElement(tab, {
    tabTitle: (0,external_wp_i18n_namespaceObject.__)('Advanced', 'blockart')
  }, /*#__PURE__*/React.createElement(panel, {
    title: (0,external_wp_i18n_namespaceObject.__)('Advanced', 'blockart'),
    initialOpen: true
  }, /*#__PURE__*/React.createElement(dimensions, {
    value: blockPadding || {},
    responsive: true,
    label: (0,external_wp_i18n_namespaceObject.__)('Block Padding', 'blockart'),
    min: 0,
    max: 500,
    defaultUnit: "px",
    units: ['px', 'rem', 'em', '%'],
    onChange: function onChange(val) {
      return setAttributes({
        blockPadding: val
      });
    },
    resetKey: "blockPadding"
  }), /*#__PURE__*/React.createElement(slider, {
    label: (0,external_wp_i18n_namespaceObject.__)('Z-Index', 'blockart'),
    value: blockZIndex || 0,
    min: 0,
    max: 10000,
    step: 1,
    onChange: function onChange(val) {
      return setAttributes({
        blockZIndex: val
      });
    },
    resetKey: "blockZIndex"
  }), /*#__PURE__*/React.createElement(input, {
    value: cssID || '',
    label: (0,external_wp_i18n_namespaceObject.__)('CSS ID', 'blockart'),
    onChange: function onChange(val) {
      return setAttributes({
        cssID: val
      });
    },
    labelPosition: "side"
  })), /*#__PURE__*/React.createElement(BlockResponsiveSettings, {
    hideOnDesktop: hideOnDesktop,
    hideOnTablet: hideOnTablet,
    hideOnMobile: hideOnMobile,
    setAttributes: setAttributes
  }), /*#__PURE__*/React.createElement(BlockCSSSettings, {
    className: className,
    setAttributes: setAttributes,
    hasBlockCSS: false
  })))), /*#__PURE__*/React.createElement(external_wp_blockEditor_namespaceObject.BlockControls, null, /*#__PURE__*/React.createElement(CopyPasteStylesBlockControl, null)), /*#__PURE__*/React.createElement(Style, null), /*#__PURE__*/React.createElement(external_wp_blockEditor_namespaceObject.RichText, {
    id: cssID ? cssID : null,
    className: classNames,
    identifier: "content",
    tagName: "p",
    onSplit: function onSplit(value, isOriginal) {
      var newAttributes;
      if (isOriginal || value) {
        newAttributes = paragraph_edit_objectSpread(paragraph_edit_objectSpread({}, props.attributes), {}, {
          text: value
        });
      }
      var block = (0,external_wp_blocks_namespaceObject.createBlock)('blockart/paragraph', newAttributes);
      if (isOriginal) {
        block.clientId = clientId;
      }
      return block;
    },
    onMerge: props.mergeBlocks,
    onReplace: props.onReplace,
    onRemove: props.onRemove,
    "data-empty": !text,
    placeholder: (0,external_wp_i18n_namespaceObject.__)('This is Paragraph.'),
    value: text,
    onChange: function onChange(val) {
      setAttributes({
        text: val
      });
    }
  }));
}));
;// CONCATENATED MODULE: ./src/blocks/blocks/paragraph/save.js



/* harmony default export */ const paragraph_save = (function (_ref) {
  var _ref$attributes = _ref.attributes,
    cssID = _ref$attributes.cssID,
    clientId = _ref$attributes.clientId,
    className = _ref$attributes.className,
    text = _ref$attributes.text;
  if (external_wp_blockEditor_namespaceObject.RichText.isEmpty(text)) {
    return '';
  }
  var classNames = (0,external_wp_hooks_namespaceObject.applyFilters)('blockart.paragraph.classnames', classnames_default()("blockart-paragraph blockart-paragraph-".concat(clientId), className));
  return /*#__PURE__*/React.createElement("p", {
    id: cssID !== null && cssID !== void 0 ? cssID : undefined,
    className: classNames
  }, /*#__PURE__*/React.createElement(external_wp_blockEditor_namespaceObject.RichText.Content, {
    value: text
  }));
});
;// CONCATENATED MODULE: ./src/blocks/blocks/paragraph/block.json
const paragraph_block_namespaceObject = JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","name":"blockart/paragraph","title":"Paragraph","description":"Customize typography and style paragraphs with multiple setting options.","keywords":["paragraph","text"],"category":"blockart","textdomain":"blockart","supports":{"className":false,"customClassName":false},"example":{"attributes":{}},"attributes":{"clientId":{"type":"string"},"text":{"type":"string"},"alignment":{"type":"object","style":[{"selector":".blockart-paragraph{{WRAPPER}} {text-align: {{VALUE}}; }"}]},"typography":{"type":"object","default":{"typography":1},"style":[{"selector":".blockart-paragraph{{WRAPPER}}"}]},"color":{"type":"string","style":[{"selector":".blockart-paragraph{{WRAPPER}} {color: {{VALUE}}; }"}]},"hoverColor":{"type":"string","style":[{"selector":".blockart-paragraph{{WRAPPER}}:hover {color: {{VALUE}}; }"}]},"background":{"type":"object","default":{"background":1},"style":[{"selector":".blockart-paragraph{{WRAPPER}}"}]},"hoverBackground":{"type":"object","default":{"background":1},"style":[{"selector":".blockart-paragraph{{WRAPPER}}:hover"}]},"margin":{"type":"object","default":{"dimension":1,"desktop":{"lock":true}},"style":[{"selector":".blockart-paragraph{{WRAPPER}} { margin: {{VALUE}}; }"}]},"blockMargin":{"type":"object","default":{"dimension":1,"desktop":{"lock":true}},"style":[{"selector":"{{WRAPPER}} { margin: {{VALUE}}; }"}]},"blockPadding":{"type":"object","default":{"dimension":1,"desktop":{"lock":true}},"style":[{"selector":"{{WRAPPER}} { padding: {{VALUE}}; }"}]},"blockZIndex":{"type":"number","style":[{"selector":"{{WRAPPER}} { z-index: {{VALUE}}; }"}]},"cssID":{"type":"string"},"animation":{"type":"string"},"interaction":{"type":"object"},"position":{"type":"object"},"hideOnDesktop":{"type":"boolean","style":[{"selector":"@media (min-width:62em) { {{WRAPPER}} { display: none; } }"}]},"hideOnTablet":{"type":"boolean","style":[{"selector":"@media (min-width:48em) and (max-width:62em) { {{WRAPPER}} { display: none; } }"}]},"hideOnMobile":{"type":"boolean","style":[{"selector":"@media (max-width:48em) { {{WRAPPER}} { display: none; } }"}]},"colReverseOnTablet":{"type":"boolean","style":[{"selector":"@media (max-width:62em) { {{WRAPPER}} > .blockart-container > .blockart-section-inner { flex-direction:column-reverse; } }"}]},"colReverseOnMobile":{"type":"boolean","style":[{"selector":"@media (max-width:48em) { {{WRAPPER}} > .blockart-container > .blockart-section-inner { flex-direction:column-reverse; } }"}]},"blockCSS":{"type":"string"},"className":{"type":"string"}},"style":"blockart-blocks","editorScript":"blockart-blocks","editorStyle":"blockart-blocks-editor"}');
;// CONCATENATED MODULE: ./src/blocks/blocks/paragraph/index.js

function paragraph_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function paragraph_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? paragraph_ownKeys(Object(source), !0).forEach(function (key) { defineProperty_defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : paragraph_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }






/* harmony default export */ const blocks_paragraph = (function () {
  (0,external_wp_blocks_namespaceObject.registerBlockType)('blockart/paragraph', paragraph_objectSpread(paragraph_objectSpread({}, paragraph_block_namespaceObject), {}, {
    icon: /*#__PURE__*/React.createElement(components_icon, {
      type: "blockIcon",
      name: "paragraph",
      size: 24
    }),
    edit: paragraph_edit,
    save: paragraph_save
  }));
});
;// CONCATENATED MODULE: ./src/blocks/blocks/image/edit.js

function image_edit_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function image_edit_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? image_edit_ownKeys(Object(source), !0).forEach(function (key) { defineProperty_defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : image_edit_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }










/* harmony default export */ const image_edit = ((0,external_wp_compose_namespaceObject.compose)([external_wp_components_namespaceObject.withNotices, with_client_id, with_device_type, with_copy_paste_styles])(function (props) {
  var _image$id, _image$url, _image$alt;
  var _props$attributes = props.attributes,
    clientId = _props$attributes.clientId,
    link = _props$attributes.link,
    _props$attributes$ima = _props$attributes.image,
    image = _props$attributes$ima === void 0 ? {} : _props$attributes$ima,
    alignment = _props$attributes.alignment,
    objectFit = _props$attributes.objectFit,
    border = _props$attributes.border,
    hoverBorder = _props$attributes.hoverBorder,
    boxShadow = _props$attributes.boxShadow,
    boxShadowHover = _props$attributes.boxShadowHover,
    blockMargin = _props$attributes.blockMargin,
    blockPadding = _props$attributes.blockPadding,
    blockZIndex = _props$attributes.blockZIndex,
    cssID = _props$attributes.cssID,
    width = _props$attributes.width,
    height = _props$attributes.height,
    maxWidth = _props$attributes.maxWidth,
    opacity = _props$attributes.opacity,
    hideOnDesktop = _props$attributes.hideOnDesktop,
    hideOnTablet = _props$attributes.hideOnTablet,
    hideOnMobile = _props$attributes.hideOnMobile,
    className = _props$attributes.className,
    setAttributes = props.setAttributes,
    noticeUI = props.noticeUI,
    noticeOperations = props.noticeOperations,
    CopyPasteStylesBlockControl = props.copyPasteStylesBlockControl,
    deviceType = props.deviceType;
  var id = (_image$id = image === null || image === void 0 ? void 0 : image.id) !== null && _image$id !== void 0 ? _image$id : undefined;
  var url = (_image$url = image === null || image === void 0 ? void 0 : image.url) !== null && _image$url !== void 0 ? _image$url : undefined;
  var alt = (_image$alt = image === null || image === void 0 ? void 0 : image.alt) !== null && _image$alt !== void 0 ? _image$alt : '';
  var Style = use_block_style({
    blockName: 'image',
    clientId: clientId,
    attributes: props.attributes,
    deviceType: deviceType
  });
  var classNames = (0,external_wp_hooks_namespaceObject.applyFilters)('blockart.image.classnames', classnames_default()("blockart-image blockart-image-".concat(clientId), className));
  var onError = function onError(message) {
    noticeOperations.removeAllNotices();
    noticeOperations.createErrorNotice(message);
  };
  var onSelect = function onSelect(media) {
    if (!(media !== null && media !== void 0 && media.url)) {
      return;
    }
    var u = media.url,
      i = media.id,
      h = media.height,
      w = media.width,
      a = media.alt;
    setAttributes({
      image: {
        url: u,
        id: i,
        height: h,
        width: w,
        alt: a
      }
    });
  };
  var onSelectURL = function onSelectURL(u) {
    setAttributes({
      image: {
        url: u,
        id: undefined,
        height: undefined,
        width: undefined,
        alt: undefined
      }
    });
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(external_wp_blockEditor_namespaceObject.InspectorControls, null, /*#__PURE__*/React.createElement(tab_panel, {
    root: true
  }, /*#__PURE__*/React.createElement(tab, {
    tabTitle: (0,external_wp_i18n_namespaceObject.__)('Layout', 'blockart')
  }, /*#__PURE__*/React.createElement(layout, {
    block: "image"
  })), /*#__PURE__*/React.createElement(tab, {
    tabTitle: (0,external_wp_i18n_namespaceObject.__)('Settings', 'blockart')
  }, /*#__PURE__*/React.createElement(panel, {
    title: (0,external_wp_i18n_namespaceObject.__)('General', 'blockart'),
    initialOpen: true
  }, /*#__PURE__*/React.createElement(advance_select, {
    value: alignment,
    onChange: function onChange(val) {
      return setAttributes({
        alignment: val
      });
    },
    responsive: true,
    label: (0,external_wp_i18n_namespaceObject.__)('Alignment', 'blockart'),
    options: [{
      label: (0,external_wp_i18n_namespaceObject.__)('Left', 'blockart'),
      value: 'left',
      icon: 'align-left'
    }, {
      label: (0,external_wp_i18n_namespaceObject.__)('Center', 'blockart'),
      value: 'center',
      icon: 'align-center'
    }, {
      label: (0,external_wp_i18n_namespaceObject.__)('Right', 'blockart'),
      value: 'right',
      icon: 'align-right'
    }]
  }), /*#__PURE__*/React.createElement(media, {
    onChange: function onChange(val) {
      return setAttributes({
        image: val
      });
    },
    label: (0,external_wp_i18n_namespaceObject.__)('Image', 'blockart'),
    type: 'image',
    value: image
  }), /*#__PURE__*/React.createElement(external_wp_components_namespaceObject.TextareaControl, {
    label: (0,external_wp_i18n_namespaceObject.__)('Alt text (alternative text)', 'blockart'),
    className: "blockart-control blockart-textarea",
    value: alt,
    onChange: function onChange(val) {
      return setAttributes({
        image: image_edit_objectSpread(image_edit_objectSpread({}, image !== null && image !== void 0 ? image : {}), {}, {
          alt: val
        })
      });
    },
    help: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(external_wp_components_namespaceObject.ExternalLink, {
      href: "https://www.w3.org/WAI/tutorials/images/decision-tree"
    }, (0,external_wp_i18n_namespaceObject.__)('Describe the purpose of the image', 'blockart')), /*#__PURE__*/React.createElement("br", null), (0,external_wp_i18n_namespaceObject.__)('Leave empty if the image is purely decorative.', 'blockart'))
  }), /*#__PURE__*/React.createElement(url_input, {
    label: (0,external_wp_i18n_namespaceObject.__)('Link', 'blockart'),
    onChange: function onChange(val) {
      return setAttributes({
        link: val
      });
    },
    value: link,
    placeholder: "https://",
    newTab: true
  })), /*#__PURE__*/React.createElement(panel, {
    title: (0,external_wp_i18n_namespaceObject.__)('Image', 'blockart')
  }, /*#__PURE__*/React.createElement(slider, {
    onChange: function onChange(val) {
      return setAttributes({
        width: val
      });
    },
    label: (0,external_wp_i18n_namespaceObject.__)('Width', 'blockart'),
    units: ['px', 'em', '%'],
    responsive: true,
    min: 0,
    max: 1920,
    value: width,
    resetKey: 'width'
  }), /*#__PURE__*/React.createElement(slider, {
    onChange: function onChange(val) {
      return setAttributes({
        maxWidth: val
      });
    },
    label: (0,external_wp_i18n_namespaceObject.__)('Max Width', 'blockart'),
    units: ['px', 'em', '%'],
    responsive: true,
    min: 0,
    max: 1920,
    value: maxWidth,
    resetKey: 'maxWidth'
  }), /*#__PURE__*/React.createElement(slider, {
    onChange: function onChange(val) {
      return setAttributes({
        height: val
      });
    },
    label: (0,external_wp_i18n_namespaceObject.__)('Height', 'blockart'),
    units: ['px', 'em', '%'],
    responsive: true,
    min: 0,
    max: 1000,
    value: height,
    resetKey: 'height'
  }), /*#__PURE__*/React.createElement(components_select, {
    onChange: function onChange(val) {
      return setAttributes({
        objectFit: val
      });
    },
    value: objectFit,
    responsive: true,
    label: (0,external_wp_i18n_namespaceObject.__)('Object Fit', 'blockart'),
    options: [{
      label: (0,external_wp_i18n_namespaceObject.__)('Fill', 'blockart'),
      value: 'fill'
    }, {
      label: (0,external_wp_i18n_namespaceObject.__)('Cover', 'blockart'),
      value: 'cover'
    }, {
      label: (0,external_wp_i18n_namespaceObject.__)('Contain', 'blockart'),
      value: 'contain'
    }, {
      label: (0,external_wp_i18n_namespaceObject.__)('None', 'blockart'),
      value: 'none'
    }, {
      label: (0,external_wp_i18n_namespaceObject.__)('Scale Down', 'blockart'),
      value: 'scale-down'
    }]
  }), /*#__PURE__*/React.createElement(slider, {
    onChange: function onChange(val) {
      return setAttributes({
        opacity: val
      });
    },
    label: (0,external_wp_i18n_namespaceObject.__)('Opacity', 'blockart'),
    responsive: true,
    step: 0.1,
    min: 0,
    max: 1,
    value: opacity,
    resetKey: 'opacity'
  })), /*#__PURE__*/React.createElement(panel, {
    title: (0,external_wp_i18n_namespaceObject.__)('Border', 'blockart')
  }, /*#__PURE__*/React.createElement(tab_panel, null, /*#__PURE__*/React.createElement(tab, {
    tabTitle: (0,external_wp_i18n_namespaceObject.__)('Normal', 'blockart')
  }, /*#__PURE__*/React.createElement(components_border, {
    resetKey: "border",
    value: border,
    onChange: function onChange(val) {
      return setAttributes({
        border: val
      });
    }
  }), /*#__PURE__*/React.createElement(box_shadow, {
    resetKey: "boxShadow",
    value: boxShadow,
    onChange: function onChange(val) {
      return setAttributes({
        boxShadow: val
      });
    }
  })), /*#__PURE__*/React.createElement(tab, {
    tabTitle: (0,external_wp_i18n_namespaceObject.__)('Hover', 'blockart')
  }, /*#__PURE__*/React.createElement(components_border, {
    resetKey: "hoverBorder",
    value: hoverBorder,
    onChange: function onChange(val) {
      return setAttributes({
        hoverBorder: val
      });
    }
  }), /*#__PURE__*/React.createElement(box_shadow, {
    resetKey: "boxShadowHover",
    value: boxShadowHover,
    onChange: function onChange(val) {
      return setAttributes({
        boxShadowHover: val
      });
    }
  }))))), /*#__PURE__*/React.createElement(tab, {
    tabTitle: (0,external_wp_i18n_namespaceObject.__)('Advanced', 'blockart')
  }, /*#__PURE__*/React.createElement(BlockAdvanceSettings, {
    blockMargin: blockMargin,
    blockPadding: blockPadding,
    blockZIndex: blockZIndex,
    cssID: cssID,
    setAttributes: setAttributes
  }), /*#__PURE__*/React.createElement(BlockResponsiveSettings, {
    hideOnDesktop: hideOnDesktop,
    hideOnTablet: hideOnTablet,
    hideOnMobile: hideOnMobile,
    setAttributes: setAttributes
  }), /*#__PURE__*/React.createElement(BlockCSSSettings, {
    className: className,
    setAttributes: setAttributes,
    hasBlockCSS: false
  })))), /*#__PURE__*/React.createElement(external_wp_blockEditor_namespaceObject.BlockControls, null, /*#__PURE__*/React.createElement(CopyPasteStylesBlockControl, null)), /*#__PURE__*/React.createElement(external_wp_blockEditor_namespaceObject.BlockControls, {
    group: "other"
  }, /*#__PURE__*/React.createElement(external_wp_blockEditor_namespaceObject.MediaReplaceFlow, {
    mediaId: id,
    mediaURL: url,
    allowedTypes: ['image'],
    accept: "image/*",
    onSelect: onSelect,
    onSelectURL: onSelectURL,
    onError: onError
  })), /*#__PURE__*/React.createElement(Style, null), /*#__PURE__*/React.createElement("div", {
    id: cssID ? cssID : null,
    className: classNames
  }, url ? /*#__PURE__*/React.createElement("img", {
    src: url,
    alt: alt !== null && alt !== void 0 ? alt : ''
  }) : /*#__PURE__*/React.createElement(external_wp_blockEditor_namespaceObject.MediaPlaceholder, {
    onSelect: onSelect,
    notices: noticeUI,
    onError: onError,
    accept: "image/*",
    allowedTypes: ['image'],
    value: {
      src: url,
      id: id
    },
    onSelectURL: onSelectURL
  })));
}));
;// CONCATENATED MODULE: ./src/blocks/blocks/image/save.js




/* harmony default export */ const image_save = (function (_ref) {
  var _image$alt, _image$height, _image$width;
  var _ref$attributes = _ref.attributes,
    cssID = _ref$attributes.cssID,
    _ref$attributes$image = _ref$attributes.image,
    image = _ref$attributes$image === void 0 ? {} : _ref$attributes$image,
    clientId = _ref$attributes.clientId,
    className = _ref$attributes.className,
    link = _ref$attributes.link;
  var classNames = (0,external_wp_hooks_namespaceObject.applyFilters)('blockart.image.classnames', classnames_default()("blockart-image blockart-image-".concat(clientId), className));
  var imageClassNames = classnames_default()(defineProperty_defineProperty({}, "wp-image-".concat(image === null || image === void 0 ? void 0 : image.id), !!(image !== null && image !== void 0 && image.id)));
  var imageHTML = /*#__PURE__*/React.createElement("img", {
    className: imageClassNames || undefined,
    src: image === null || image === void 0 ? void 0 : image.url,
    alt: (_image$alt = image === null || image === void 0 ? void 0 : image.alt) !== null && _image$alt !== void 0 ? _image$alt : '',
    height: (_image$height = image === null || image === void 0 ? void 0 : image.height) !== null && _image$height !== void 0 ? _image$height : undefined,
    width: (_image$width = image === null || image === void 0 ? void 0 : image.width) !== null && _image$width !== void 0 ? _image$width : undefined
  });
  if (link !== null && link !== void 0 && link.url) {
    imageHTML = /*#__PURE__*/React.createElement(components_element, {
      tagName: "a",
      htmlAttrs: {
        href: link.url,
        target: link !== null && link !== void 0 && link.newTab ? '_blank' : undefined,
        rel: link !== null && link !== void 0 && link.rel ? 'noopener' : undefined
      },
      children: imageHTML
    });
  }
  return /*#__PURE__*/React.createElement("div", {
    id: cssID !== null && cssID !== void 0 ? cssID : undefined,
    className: classNames || undefined
  }, imageHTML);
});
;// CONCATENATED MODULE: ./src/blocks/blocks/image/block.json
const image_block_namespaceObject = JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","name":"blockart/image","title":"Image","description":"Visual communication with your visitor via images.","keywords":["image"],"category":"blockart","textdomain":"blockart","supports":{"className":false,"customClassName":false},"example":{"attributes":{}},"attributes":{"clientId":{"type":"string"},"link":{"type":"object","default":{}},"image":{"type":"object","default":{}},"alt1":{"type":"string"},"alt2":{"type":"string"},"alignment":{"type":"object","style":[{"selector":"{{WRAPPER}} {text-align: {{VALUE}}; }"}]},"objectFit":{"type":"object","default":{"desktop":"fill"},"style":[{"selector":"{{WRAPPER}} img {object-fit: {{VALUE}}; }"}]},"border":{"type":"object","default":{"border":1,"radius":{"desktop":{"lock":true}},"size":{"desktop":{"lock":true}}},"style":[{"selector":"{{WRAPPER}} img"}]},"hoverBorder":{"type":"object","default":{"border":1,"radius":{"desktop":{"lock":true}},"size":{"desktop":{"lock":true}}},"style":[{"selector":"{{WRAPPER}} img:hover"}]},"boxShadow":{"type":"object","default":{"boxShadow":1},"style":[{"selector":"{{WRAPPER}} img"}]},"boxShadowHover":{"type":"object","default":{"boxShadow":1},"style":[{"selector":"{{WRAPPER}} img:hover"}]},"width":{"type":"object","style":[{"selector":"{{WRAPPER}} img { width: {{VALUE}} }"}]},"maxWidth":{"type":"object","style":[{"selector":"{{WRAPPER}} img { max-width: {{VALUE}} }"}]},"height":{"type":"object","style":[{"selector":"{{WRAPPER}} img { height: {{VALUE}} }"}]},"opacity":{"type":"string","default":1,"style":[{"selector":"{{WRAPPER}} img { opacity: {{VALUE}} }"}]},"blockMargin":{"type":"object","default":{"dimension":1,"desktop":{"lock":true}},"style":[{"selector":"{{WRAPPER}} { margin: {{VALUE}}; }"}]},"blockPadding":{"type":"object","default":{"dimension":1,"desktop":{"lock":true}},"style":[{"selector":"{{WRAPPER}} { padding: {{VALUE}}; }"}]},"blockZIndex":{"type":"number","style":[{"selector":"{{WRAPPER}} { z-index: {{VALUE}}; }"}]},"cssID":{"type":"string"},"animation":{"type":"string"},"interaction":{"type":"object"},"position":{"type":"object"},"hideOnDesktop":{"type":"boolean","style":[{"selector":"@media (min-width:62em) { {{WRAPPER}} { display: none; } }"}]},"hideOnTablet":{"type":"boolean","style":[{"selector":"@media (min-width:48em) and (max-width:62em) { {{WRAPPER}} { display: none; } }"}]},"hideOnMobile":{"type":"boolean","style":[{"selector":"@media (max-width:48em) { {{WRAPPER}} { display: none; } }"}]},"colReverseOnTablet":{"type":"boolean","style":[{"selector":"@media (max-width:62em) { {{WRAPPER}} > .blockart-container > .blockart-section-inner { flex-direction:column-reverse; } }"}]},"colReverseOnMobile":{"type":"boolean","style":[{"selector":"@media (max-width:48em) { {{WRAPPER}} > .blockart-container > .blockart-section-inner { flex-direction:column-reverse; } }"}]},"blockCSS":{"type":"string"},"className":{"type":"string"}},"style":"blockart-blocks","editorScript":"blockart-blocks","editorStyle":"blockart-blocks-editor"}');
;// CONCATENATED MODULE: ./src/blocks/blocks/image/attributes.js

function image_attributes_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function image_attributes_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? image_attributes_ownKeys(Object(source), !0).forEach(function (key) { defineProperty_defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : image_attributes_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

/* harmony default export */ const image_attributes = (image_attributes_objectSpread({
  clientId: {
    type: 'string'
  },
  link: {
    type: 'object',
    "default": {}
  },
  image: {
    type: 'object',
    "default": {}
  },
  alt1: {
    type: 'string'
  },
  alt2: {
    type: 'string'
  },
  alignment: {
    type: 'object',
    style: [{
      selector: '{{WRAPPER}} {text-align: {{VALUE}}; }'
    }]
  },
  objectFit: {
    type: 'object',
    "default": {
      desktop: 'fill'
    },
    style: [{
      selector: '{{WRAPPER}} img {object-fit: {{VALUE}}; }'
    }]
  },
  border: {
    type: 'object',
    "default": {
      border: 1,
      radius: {
        desktop: {
          lock: true
        }
      },
      size: {
        desktop: {
          lock: true
        }
      }
    },
    style: [{
      selector: '{{WRAPPER}} img'
    }]
  },
  hoverBorder: {
    type: 'object',
    "default": {
      border: 1,
      radius: {
        desktop: {
          lock: true
        }
      },
      size: {
        desktop: {
          lock: true
        }
      }
    },
    style: [{
      selector: '{{WRAPPER}} img:hover'
    }]
  },
  boxShadow: {
    type: 'object',
    "default": {
      boxShadow: 1
    },
    style: [{
      selector: '{{WRAPPER}} img'
    }]
  },
  boxShadowHover: {
    type: 'object',
    "default": {
      boxShadow: 1
    },
    style: [{
      selector: '{{WRAPPER}} img:hover'
    }]
  },
  width: {
    type: 'object',
    style: [{
      selector: '{{WRAPPER}} img { width: {{VALUE}} }'
    }]
  },
  maxWidth: {
    type: 'object',
    style: [{
      selector: '{{WRAPPER}} img { max-width: {{VALUE}} }'
    }]
  },
  height: {
    type: 'object',
    style: [{
      selector: '{{WRAPPER}} img { height: {{VALUE}} }'
    }]
  },
  opacity: {
    type: 'string',
    "default": 1,
    style: [{
      selector: '{{WRAPPER}} img { opacity: {{VALUE}} }'
    }]
  }
}, blockAttributes));
;// CONCATENATED MODULE: ./src/blocks/blocks/image/deprecated/v1.js

function deprecated_v1_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function deprecated_v1_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? deprecated_v1_ownKeys(Object(source), !0).forEach(function (key) { defineProperty_defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : deprecated_v1_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }




/* harmony default export */ const deprecated_v1 = ({
  attributes: image_attributes,
  supports: {
    className: false,
    align: false,
    color: {
      background: false,
      gradient: false,
      text: false
    }
  },
  save: function save(props) {
    var _ref, _image$local;
    var _props$attributes = props.attributes,
      cssID = _props$attributes.cssID,
      image = _props$attributes.image,
      clientId = _props$attributes.clientId,
      className = _props$attributes.className,
      alt1 = _props$attributes.alt1,
      alt2 = _props$attributes.alt2,
      link = _props$attributes.link;
    var src = (_ref = (_image$local = image === null || image === void 0 ? void 0 : image.local) !== null && _image$local !== void 0 ? _image$local : image === null || image === void 0 ? void 0 : image.external) !== null && _ref !== void 0 ? _ref : placeholder;
    var alt = image !== null && image !== void 0 && image.local ? alt1 !== null && alt1 !== void 0 ? alt1 : '' : alt2 !== null && alt2 !== void 0 ? alt2 : '';
    var classNames = (0,external_wp_hooks_namespaceObject.applyFilters)('blockart.image.classnames', classnames_default()("blockart-image blockart-image-".concat(clientId, " "), className));

    /* eslint-disable */
    return /*#__PURE__*/React.createElement("div", {
      id: cssID ? cssID : null,
      className: classNames
    }, link.url ? /*#__PURE__*/React.createElement("a", {
      href: link.url,
      target: link.newTab ? '_blank' : null,
      rel: link.newTab ? 'noopener' : null
    }, /*#__PURE__*/React.createElement("img", {
      src: src,
      alt: alt
    })) : /*#__PURE__*/React.createElement("img", {
      src: src,
      alt: alt
    }));
  },
  migrate: function migrate(attributes) {
    var image = attributes.image;
    var newImageProps = {};
    if ('external' === (image === null || image === void 0 ? void 0 : image.type)) {
      if (image !== null && image !== void 0 && image.external) {
        newImageProps = {
          width: undefined,
          height: undefined,
          url: image.external,
          id: undefined,
          alt: undefined
        };
      }
    } else if ('local' === (image === null || image === void 0 ? void 0 : image.type)) {
      if (image !== null && image !== void 0 && image.local) {
        var _mediaItem$media_deta, _mediaItem$media_deta2, _mediaItem$source_url;
        var mediaItems = _BLOCKART_.mediaItems;
        var mediaItem = mediaItems.find(function (item) {
          return item.source_url === image.local;
        });
        newImageProps = {
          width: mediaItem === null || mediaItem === void 0 ? void 0 : (_mediaItem$media_deta = mediaItem.media_details) === null || _mediaItem$media_deta === void 0 ? void 0 : _mediaItem$media_deta.width,
          height: mediaItem === null || mediaItem === void 0 ? void 0 : (_mediaItem$media_deta2 = mediaItem.media_details) === null || _mediaItem$media_deta2 === void 0 ? void 0 : _mediaItem$media_deta2.height,
          url: (_mediaItem$source_url = mediaItem === null || mediaItem === void 0 ? void 0 : mediaItem.source_url) !== null && _mediaItem$source_url !== void 0 ? _mediaItem$source_url : image.local,
          id: mediaItem === null || mediaItem === void 0 ? void 0 : mediaItem.ID,
          alt: mediaItem === null || mediaItem === void 0 ? void 0 : mediaItem.alt_text
        };
      }
    }
    return deprecated_v1_objectSpread(deprecated_v1_objectSpread({}, attributes), {}, {
      image: newImageProps
    });
  }
});
;// CONCATENATED MODULE: ./src/blocks/blocks/image/deprecated/index.js

;// CONCATENATED MODULE: ./src/blocks/blocks/image/index.js

function image_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function image_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? image_ownKeys(Object(source), !0).forEach(function (key) { defineProperty_defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : image_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }







/* harmony default export */ const blocks_image = (function () {
  (0,external_wp_blocks_namespaceObject.registerBlockType)('blockart/image', image_objectSpread(image_objectSpread({}, image_block_namespaceObject), {}, {
    icon: /*#__PURE__*/React.createElement(components_icon, {
      type: "blockIcon",
      name: "image",
      size: 24
    }),
    edit: image_edit,
    save: image_save,
    deprecated: [deprecated_v1]
  }));
});
;// CONCATENATED MODULE: ./src/blocks/blocks/heading/edit.js











/* harmony default export */ const heading_edit = ((0,external_wp_compose_namespaceObject.compose)([with_client_id, with_device_type, with_copy_paste_styles])(function (props) {
  var _props$attributes = props.attributes,
    clientId = _props$attributes.clientId,
    markup = _props$attributes.markup,
    text = _props$attributes.text,
    color = _props$attributes.color,
    hoverColor = _props$attributes.hoverColor,
    margin = _props$attributes.margin,
    background = _props$attributes.background,
    hoverBackground = _props$attributes.hoverBackground,
    alignment = _props$attributes.alignment,
    size = _props$attributes.size,
    typography = _props$attributes.typography,
    border = _props$attributes.border,
    hoverBorder = _props$attributes.hoverBorder,
    boxShadow = _props$attributes.boxShadow,
    boxShadowHover = _props$attributes.boxShadowHover,
    blockPadding = _props$attributes.blockPadding,
    blockZIndex = _props$attributes.blockZIndex,
    cssID = _props$attributes.cssID,
    hideOnDesktop = _props$attributes.hideOnDesktop,
    hideOnTablet = _props$attributes.hideOnTablet,
    hideOnMobile = _props$attributes.hideOnMobile,
    className = _props$attributes.className,
    setAttributes = props.setAttributes,
    CopyPasteStylesBlockControl = props.copyPasteStylesBlockControl,
    deviceType = props.deviceType;
  var Style = use_block_style({
    blockName: 'heading',
    clientId: clientId,
    attributes: props.attributes,
    deviceType: deviceType
  });
  var classNames = (0,external_wp_hooks_namespaceObject.applyFilters)('blockart.heading.classnames', classnames_default()("blockart-heading blockart-heading-".concat(clientId), size && "is-".concat(size), className));
  return /*#__PURE__*/React.createElement(external_wp_element_namespaceObject.Fragment, null, /*#__PURE__*/React.createElement(external_wp_blockEditor_namespaceObject.InspectorControls, null, /*#__PURE__*/React.createElement(tab_panel, {
    root: true
  }, /*#__PURE__*/React.createElement(tab, {
    tabTitle: (0,external_wp_i18n_namespaceObject.__)('Layout', 'blockart')
  }, /*#__PURE__*/React.createElement(layout, {
    block: "heading"
  })), /*#__PURE__*/React.createElement(tab, {
    tabTitle: (0,external_wp_i18n_namespaceObject.__)('Settings', 'blockart')
  }, /*#__PURE__*/React.createElement(panel, {
    title: (0,external_wp_i18n_namespaceObject.__)('General', 'blockart'),
    initialOpen: true
  }, /*#__PURE__*/React.createElement(advance_select, {
    value: alignment,
    onChange: function onChange(val) {
      return setAttributes({
        alignment: val
      });
    },
    responsive: true,
    label: (0,external_wp_i18n_namespaceObject.__)('Alignment', 'blockart'),
    options: [{
      label: (0,external_wp_i18n_namespaceObject.__)('Text align left', 'blockart'),
      value: 'left',
      icon: 'text-align-left'
    }, {
      label: (0,external_wp_i18n_namespaceObject.__)('Text align center', 'blockart'),
      value: 'center',
      icon: 'text-align-center'
    }, {
      label: (0,external_wp_i18n_namespaceObject.__)('Text align right', 'blockart'),
      value: 'right',
      icon: 'text-align-right'
    }, {
      label: (0,external_wp_i18n_namespaceObject.__)('Text align justify', 'blockart'),
      value: 'justify',
      icon: 'text-align-justify'
    }]
  }), /*#__PURE__*/React.createElement(components_size, {
    label: (0,external_wp_i18n_namespaceObject.__)('Size', 'blockart'),
    onChange: function onChange(key, val) {
      return setAttributes(defineProperty_defineProperty({}, key, val));
    },
    value: size || ''
  }), /*#__PURE__*/React.createElement(components_select, {
    options: [{
      label: (0,external_wp_i18n_namespaceObject.__)('H1', 'blockart'),
      value: 'h1'
    }, {
      label: (0,external_wp_i18n_namespaceObject.__)('H2', 'blockart'),
      value: 'h2'
    }, {
      label: (0,external_wp_i18n_namespaceObject.__)('H3', 'blockart'),
      value: 'h3'
    }, {
      label: (0,external_wp_i18n_namespaceObject.__)('H4', 'blockart'),
      value: 'h4'
    }, {
      label: (0,external_wp_i18n_namespaceObject.__)('H5', 'blockart'),
      value: 'h5'
    }, {
      label: (0,external_wp_i18n_namespaceObject.__)('H6', 'blockart'),
      value: 'h6'
    }],
    onChange: function onChange(val) {
      return setAttributes({
        markup: val
      });
    },
    value: markup,
    label: (0,external_wp_i18n_namespaceObject.__)('HTML Markup', 'blockart'),
    inline: false
  })), /*#__PURE__*/React.createElement(panel, {
    title: (0,external_wp_i18n_namespaceObject.__)('Text', 'blockart')
  }, /*#__PURE__*/React.createElement(components_typography, {
    resetKey: "typography",
    value: typography,
    onChange: function onChange(val) {
      return setAttributes({
        typography: val
      });
    }
  })), /*#__PURE__*/React.createElement(panel, {
    title: (0,external_wp_i18n_namespaceObject.__)('Spacing', 'blockart')
  }, /*#__PURE__*/React.createElement(dimensions, {
    value: margin,
    responsive: true,
    label: (0,external_wp_i18n_namespaceObject.__)('Margin', 'blockart'),
    defaultUnit: "px",
    units: ['px', 'rem', 'em', '%'],
    onChange: function onChange(val) {
      return setAttributes({
        margin: val
      });
    },
    type: "margin",
    resetKey: "margin"
  })), /*#__PURE__*/React.createElement(panel, {
    title: (0,external_wp_i18n_namespaceObject.__)('Color', 'blockart')
  }, /*#__PURE__*/React.createElement(tab_panel, null, /*#__PURE__*/React.createElement(tab, {
    tabTitle: (0,external_wp_i18n_namespaceObject.__)('Normal', 'blockart')
  }, /*#__PURE__*/React.createElement(components_color, {
    onChange: function onChange(val) {
      return setAttributes({
        color: val
      });
    },
    label: (0,external_wp_i18n_namespaceObject.__)('Color', 'blockart'),
    value: color,
    resetKey: "color"
  }), /*#__PURE__*/React.createElement(components_background, {
    value: background,
    onChange: function onChange(val) {
      return setAttributes({
        background: val
      });
    },
    label: (0,external_wp_i18n_namespaceObject.__)('Background', 'blockart'),
    resetKey: 'background'
  })), /*#__PURE__*/React.createElement(tab, {
    tabTitle: (0,external_wp_i18n_namespaceObject.__)('Hover', 'blockart')
  }, /*#__PURE__*/React.createElement(components_color, {
    onChange: function onChange(val) {
      return setAttributes({
        hoverColor: val
      });
    },
    label: (0,external_wp_i18n_namespaceObject.__)('Color', 'blockart'),
    value: hoverColor,
    resetKey: 'hoverColor'
  }), /*#__PURE__*/React.createElement(components_background, {
    value: hoverBackground,
    onChange: function onChange(val) {
      return setAttributes({
        hoverBackground: val
      });
    },
    label: (0,external_wp_i18n_namespaceObject.__)('Background', 'blockart'),
    resetKey: 'hoverBackground'
  })))), /*#__PURE__*/React.createElement(panel, {
    title: (0,external_wp_i18n_namespaceObject.__)('Border', 'blockart')
  }, /*#__PURE__*/React.createElement(tab_panel, null, /*#__PURE__*/React.createElement(tab, {
    tabTitle: (0,external_wp_i18n_namespaceObject.__)('Normal', 'blockart')
  }, /*#__PURE__*/React.createElement(components_border, {
    resetKey: "border",
    value: border,
    onChange: function onChange(val) {
      return setAttributes({
        border: val
      });
    }
  }), /*#__PURE__*/React.createElement(box_shadow, {
    resetKey: "boxShadow",
    value: boxShadow,
    onChange: function onChange(val) {
      return setAttributes({
        boxShadow: val
      });
    }
  })), /*#__PURE__*/React.createElement(tab, {
    tabTitle: (0,external_wp_i18n_namespaceObject.__)('Hover', 'blockart')
  }, /*#__PURE__*/React.createElement(components_border, {
    resetKey: "hoverBorder",
    value: hoverBorder,
    onChange: function onChange(val) {
      return setAttributes({
        hoverBorder: val
      });
    }
  }), /*#__PURE__*/React.createElement(box_shadow, {
    resetKey: "boxShadowHover",
    value: boxShadowHover,
    onChange: function onChange(val) {
      return setAttributes({
        boxShadowHover: val
      });
    }
  }))))), /*#__PURE__*/React.createElement(tab, {
    tabTitle: (0,external_wp_i18n_namespaceObject.__)('Advanced', 'blockart')
  }, /*#__PURE__*/React.createElement(panel, {
    title: (0,external_wp_i18n_namespaceObject.__)('Advanced', 'blockart'),
    initialOpen: true
  }, /*#__PURE__*/React.createElement(dimensions, {
    value: blockPadding,
    responsive: true,
    label: (0,external_wp_i18n_namespaceObject.__)('Block Padding', 'blockart'),
    min: 0,
    max: 500,
    defaultUnit: "px",
    units: ['px', 'rem', 'em', '%'],
    onChange: function onChange(val) {
      return setAttributes({
        blockPadding: val
      });
    },
    resetKey: "blockPadding"
  }), /*#__PURE__*/React.createElement(slider, {
    label: (0,external_wp_i18n_namespaceObject.__)('Z-Index', 'blockart'),
    value: blockZIndex,
    min: 0,
    max: 10000,
    step: 1,
    onChange: function onChange(val) {
      return setAttributes({
        blockZIndex: val
      });
    },
    resetKey: "blockZIndex"
  }), /*#__PURE__*/React.createElement(input, {
    value: cssID || '',
    label: (0,external_wp_i18n_namespaceObject.__)('CSS ID', 'blockart'),
    onChange: function onChange(val) {
      return setAttributes({
        cssID: val
      });
    },
    labelPosition: "side"
  })), /*#__PURE__*/React.createElement(BlockResponsiveSettings, {
    hideOnDesktop: hideOnDesktop,
    hideOnTablet: hideOnTablet,
    hideOnMobile: hideOnMobile,
    setAttributes: setAttributes
  }), /*#__PURE__*/React.createElement(BlockCSSSettings, {
    className: className,
    setAttributes: setAttributes,
    hasBlockCSS: false
  })))), /*#__PURE__*/React.createElement(external_wp_blockEditor_namespaceObject.BlockControls, null, /*#__PURE__*/React.createElement(CopyPasteStylesBlockControl, null)), /*#__PURE__*/React.createElement(Style, null), /*#__PURE__*/React.createElement(external_wp_blockEditor_namespaceObject.RichText, {
    id: cssID ? cssID : null,
    className: classNames,
    tagName: markup,
    placeholder: (0,external_wp_i18n_namespaceObject.__)('This is heading', 'blockart'),
    value: text,
    onChange: function onChange(val) {
      setAttributes({
        text: val
      });
    }
  }));
}));
;// CONCATENATED MODULE: ./src/blocks/blocks/heading/save.js



/* harmony default export */ const heading_save = (function (_ref) {
  var _ref$attributes = _ref.attributes,
    markup = _ref$attributes.markup,
    text = _ref$attributes.text,
    className = _ref$attributes.className,
    cssID = _ref$attributes.cssID,
    size = _ref$attributes.size,
    clientId = _ref$attributes.clientId;
  var classNames = (0,external_wp_hooks_namespaceObject.applyFilters)('blockart.heading.classnames', classnames_default()("blockart-heading blockart-heading-".concat(clientId), size && "is-".concat(size), className));
  return /*#__PURE__*/React.createElement(external_wp_blockEditor_namespaceObject.RichText.Content, {
    id: cssID !== null && cssID !== void 0 ? cssID : undefined,
    className: classNames,
    tagName: markup,
    value: text
  });
});
;// CONCATENATED MODULE: ./src/blocks/blocks/heading/block.json
const heading_block_namespaceObject = JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","name":"blockart/heading","title":"Heading","description":"Create stylish title for each section with various markups from H1 to H6.","keywords":["heading","headline"],"category":"blockart","textdomain":"blockart","supports":{"className":false,"customClassName":false},"example":{"attributes":{}},"attributes":{"clientId":{"type":"string"},"markup":{"type":"string","default":"h2"},"text":{"type":"string"},"color":{"type":"string","style":[{"selector":".blockart-heading{{WRAPPER}} {color: {{VALUE}}; }"}]},"hoverColor":{"type":"string","style":[{"selector":".blockart-heading{{WRAPPER}}:hover {color: {{VALUE}}; }"}]},"background":{"type":"object","default":{"background":1},"style":[{"selector":".blockart-heading{{WRAPPER}}"}]},"hoverBackground":{"type":"object","default":{"background":1},"style":[{"selector":".blockart-heading{{WRAPPER}}:hover"}]},"alignment":{"type":"object","style":[{"selector":".blockart-heading{{WRAPPER}} {text-align: {{VALUE}}; }"}]},"size":{"type":"string"},"typography":{"type":"object","default":{"typography":1,"weight":500},"style":[{"selector":".blockart-heading{{WRAPPER}}"}]},"border":{"type":"object","default":{"border":1,"radius":{"desktop":{"lock":true}},"size":{"desktop":{"lock":true}}},"style":[{"selector":".blockart-heading{{WRAPPER}}"}]},"hoverBorder":{"type":"object","default":{"border":1,"radius":{"desktop":{"lock":true}},"size":{"desktop":{"lock":true}}},"style":[{"selector":".blockart-heading{{WRAPPER}}:hover"}]},"boxShadow":{"type":"object","default":{"boxShadow":1},"style":[{"selector":".blockart-heading{{WRAPPER}}"}]},"boxShadowHover":{"type":"object","default":{"boxShadow":1},"style":[{"selector":".blockart-heading{{WRAPPER}}:hover"}]},"margin":{"type":"object","default":{"dimension":1,"desktop":{"lock":true}},"style":[{"selector":".blockart-heading{{WRAPPER}} { margin: {{VALUE}}; }"}]},"blockMargin":{"type":"object","default":{"dimension":1,"desktop":{"lock":true}},"style":[{"selector":"{{WRAPPER}} { margin: {{VALUE}}; }"}]},"blockPadding":{"type":"object","default":{"dimension":1,"desktop":{"lock":true}},"style":[{"selector":"{{WRAPPER}} { padding: {{VALUE}}; }"}]},"blockZIndex":{"type":"number","style":[{"selector":"{{WRAPPER}} { z-index: {{VALUE}}; }"}]},"cssID":{"type":"string"},"animation":{"type":"string"},"interaction":{"type":"object"},"position":{"type":"object"},"hideOnDesktop":{"type":"boolean","style":[{"selector":"@media (min-width:62em) { {{WRAPPER}} { display: none; } }"}]},"hideOnTablet":{"type":"boolean","style":[{"selector":"@media (min-width:48em) and (max-width:62em) { {{WRAPPER}} { display: none; } }"}]},"hideOnMobile":{"type":"boolean","style":[{"selector":"@media (max-width:48em) { {{WRAPPER}} { display: none; } }"}]},"colReverseOnTablet":{"type":"boolean","style":[{"selector":"@media (max-width:62em) { {{WRAPPER}} > .blockart-container > .blockart-section-inner { flex-direction:column-reverse; } }"}]},"colReverseOnMobile":{"type":"boolean","style":[{"selector":"@media (max-width:48em) { {{WRAPPER}} > .blockart-container > .blockart-section-inner { flex-direction:column-reverse; } }"}]},"blockCSS":{"type":"string"},"className":{"type":"string"}},"style":"blockart-blocks","editorScript":"blockart-blocks","editorStyle":"blockart-blocks-editor"}');
;// CONCATENATED MODULE: ./src/blocks/blocks/heading/index.js

function heading_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function heading_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? heading_ownKeys(Object(source), !0).forEach(function (key) { defineProperty_defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : heading_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }






/* harmony default export */ const blocks_heading = (function () {
  (0,external_wp_blocks_namespaceObject.registerBlockType)('blockart/heading', heading_objectSpread(heading_objectSpread({}, heading_block_namespaceObject), {}, {
    icon: /*#__PURE__*/React.createElement(components_icon, {
      type: "blockIcon",
      name: "heading",
      size: 24
    }),
    edit: heading_edit,
    save: heading_save
  }));
});
;// CONCATENATED MODULE: ./src/blocks/blocks/spacing/edit.js









/* harmony default export */ const spacing_edit = ((0,external_wp_compose_namespaceObject.compose)([with_client_id, with_device_type, with_copy_paste_styles])(function (props) {
  var _props$attributes = props.attributes,
    clientId = _props$attributes.clientId,
    height = _props$attributes.height,
    background = _props$attributes.background,
    hoverBackground = _props$attributes.hoverBackground,
    border = _props$attributes.border,
    hoverBorder = _props$attributes.hoverBorder,
    boxShadow = _props$attributes.boxShadow,
    boxShadowHover = _props$attributes.boxShadowHover,
    blockMargin = _props$attributes.blockMargin,
    blockPadding = _props$attributes.blockPadding,
    blockZIndex = _props$attributes.blockZIndex,
    cssID = _props$attributes.cssID,
    className = _props$attributes.className,
    setAttributes = props.setAttributes,
    CopyPasteStylesBlockControl = props.copyPasteStylesBlockControl,
    deviceType = props.deviceType;
  var classNames = (0,external_wp_hooks_namespaceObject.applyFilters)('blockart.spacing.classnames', classnames_default()("blockart-spacing blockart-spacing-".concat(clientId), className));
  var Style = use_block_style({
    blockName: 'spacing',
    clientId: clientId,
    attributes: props.attributes,
    deviceType: deviceType
  });
  return /*#__PURE__*/React.createElement(external_wp_element_namespaceObject.Fragment, null, /*#__PURE__*/React.createElement(external_wp_blockEditor_namespaceObject.InspectorControls, null, /*#__PURE__*/React.createElement(tab_panel, {
    root: true
  }, /*#__PURE__*/React.createElement(tab, {
    tabTitle: (0,external_wp_i18n_namespaceObject.__)('Layout', 'blockart')
  }, /*#__PURE__*/React.createElement(layout, {
    block: "spacing"
  })), /*#__PURE__*/React.createElement(tab, {
    tabTitle: (0,external_wp_i18n_namespaceObject.__)('Settings', 'blockart')
  }, /*#__PURE__*/React.createElement(panel, {
    title: (0,external_wp_i18n_namespaceObject.__)('General', 'blockart'),
    initialOpen: true
  }, /*#__PURE__*/React.createElement(slider, {
    onChange: function onChange(val) {
      return setAttributes({
        height: val
      });
    },
    label: (0,external_wp_i18n_namespaceObject.__)('Height', 'blockart'),
    units: ['px', 'em', 'vh'],
    responsive: true,
    min: 1,
    max: 1000,
    value: height,
    resetKey: "height"
  })), /*#__PURE__*/React.createElement(panel, {
    title: (0,external_wp_i18n_namespaceObject.__)('Color', 'blockart')
  }, /*#__PURE__*/React.createElement(tab_panel, null, /*#__PURE__*/React.createElement(tab, {
    tabTitle: (0,external_wp_i18n_namespaceObject.__)('Normal', 'blockart')
  }, /*#__PURE__*/React.createElement(components_background, {
    value: background,
    onChange: function onChange(val) {
      return setAttributes({
        background: val
      });
    },
    label: (0,external_wp_i18n_namespaceObject.__)('Background', 'blockart'),
    resetKey: "background"
  })), /*#__PURE__*/React.createElement(tab, {
    tabTitle: (0,external_wp_i18n_namespaceObject.__)('Hover', 'blockart')
  }, /*#__PURE__*/React.createElement(components_background, {
    value: hoverBackground,
    onChange: function onChange(val) {
      return setAttributes({
        hoverBackground: val
      });
    },
    label: (0,external_wp_i18n_namespaceObject.__)('Background', 'blockart'),
    resetKey: "hoverBackground"
  })))), /*#__PURE__*/React.createElement(panel, {
    title: (0,external_wp_i18n_namespaceObject.__)('Border', 'blockart')
  }, /*#__PURE__*/React.createElement(tab_panel, null, /*#__PURE__*/React.createElement(tab, {
    tabTitle: (0,external_wp_i18n_namespaceObject.__)('Normal', 'blockart')
  }, /*#__PURE__*/React.createElement(components_border, {
    resetKey: "border",
    value: border,
    onChange: function onChange(val) {
      return setAttributes({
        border: val
      });
    }
  }), /*#__PURE__*/React.createElement(box_shadow, {
    resetKey: "boxShadow",
    value: boxShadow,
    onChange: function onChange(val) {
      return setAttributes({
        boxShadow: val
      });
    }
  })), /*#__PURE__*/React.createElement(tab, {
    tabTitle: (0,external_wp_i18n_namespaceObject.__)('Hover', 'blockart')
  }, /*#__PURE__*/React.createElement(components_border, {
    resetKey: "hoverBorder",
    value: hoverBorder,
    onChange: function onChange(val) {
      return setAttributes({
        hoverBorder: val
      });
    }
  }), /*#__PURE__*/React.createElement(box_shadow, {
    resetKey: "boxShadowHover",
    value: boxShadowHover,
    onChange: function onChange(val) {
      return setAttributes({
        boxShadowHover: val
      });
    }
  }))))), /*#__PURE__*/React.createElement(tab, {
    tabTitle: (0,external_wp_i18n_namespaceObject.__)('Advanced', 'blockart')
  }, /*#__PURE__*/React.createElement(BlockAdvanceSettings, {
    blockMargin: blockMargin,
    blockPadding: blockPadding,
    blockZIndex: blockZIndex,
    cssID: cssID,
    setAttributes: setAttributes
  }), /*#__PURE__*/React.createElement(BlockCSSSettings, {
    className: className,
    setAttributes: setAttributes,
    hasBlockCSS: false
  })))), /*#__PURE__*/React.createElement(external_wp_blockEditor_namespaceObject.BlockControls, null, /*#__PURE__*/React.createElement(CopyPasteStylesBlockControl, null)), /*#__PURE__*/React.createElement(Style, null), /*#__PURE__*/React.createElement("div", {
    className: classNames
  }, /*#__PURE__*/React.createElement("div", {
    className: "blockart-spacing-inner ".concat(props.isSelected && 'is-selected')
  })));
}));
;// CONCATENATED MODULE: ./src/blocks/blocks/spacing/save.js


/* harmony default export */ const spacing_save = (function (_ref) {
  var _ref$attributes = _ref.attributes,
    cssID = _ref$attributes.cssID,
    clientId = _ref$attributes.clientId,
    className = _ref$attributes.className;
  var classNames = (0,external_wp_hooks_namespaceObject.applyFilters)('blockart.spacing.classnames', classnames_default()("blockart-spacing blockart-spacing-".concat(clientId), className));
  return /*#__PURE__*/React.createElement("div", {
    id: cssID !== null && cssID !== void 0 ? cssID : undefined,
    className: classNames
  }, /*#__PURE__*/React.createElement("div", {
    className: "blockart-spacing-inner"
  }));
});
;// CONCATENATED MODULE: ./src/blocks/blocks/spacing/block.json
const spacing_block_namespaceObject = JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","name":"blockart/spacing","title":"Spacing","description":"Give your designs room to breathe with white space.","keywords":["spacing","spacer","divider"],"category":"blockart","textdomain":"blockart","supports":{"className":false,"customClassName":false},"example":{"attributes":{}},"attributes":{"clientId":{"type":"string"},"height":{"type":"object","default":{"desktop":{"value":50,"unit":"px"}},"style":[{"selector":"{{WRAPPER}} .blockart-spacing-inner { height: {{VALUE}}; }"}]},"background":{"type":"object","default":{"background":1},"style":[{"selector":"{{WRAPPER}} .blockart-spacing-inner"}]},"hoverBackground":{"type":"object","default":{"background":1},"style":[{"selector":"{{WRAPPER}} .blockart-spacing-inner:hover"}]},"border":{"type":"object","default":{"border":1,"radius":{"desktop":{"lock":true}},"size":{"desktop":{"lock":true}}},"style":[{"selector":"{{WRAPPER}} .blockart-spacing-inner"}]},"hoverBorder":{"type":"object","default":{"border":1,"radius":{"desktop":{"lock":true}},"size":{"desktop":{"lock":true}}},"style":[{"selector":"{{WRAPPER}} .blockart-spacing-inner:hover"}]},"boxShadow":{"type":"object","default":{"boxShadow":1},"style":[{"selector":"{{WRAPPER}} .blockart-spacing-inner"}]},"boxShadowHover":{"type":"object","default":{"boxShadow":1},"style":[{"selector":"{{WRAPPER}} .blockart-spacing-inner:hover"}]},"blockMargin":{"type":"object","default":{"dimension":1,"desktop":{"lock":true}},"style":[{"selector":"{{WRAPPER}} { margin: {{VALUE}}; }"}]},"blockPadding":{"type":"object","default":{"dimension":1,"desktop":{"lock":true}},"style":[{"selector":"{{WRAPPER}} { padding: {{VALUE}}; }"}]},"blockZIndex":{"type":"number","style":[{"selector":"{{WRAPPER}} { z-index: {{VALUE}}; }"}]},"cssID":{"type":"string"},"animation":{"type":"string"},"interaction":{"type":"object"},"position":{"type":"object"},"hideOnDesktop":{"type":"boolean","style":[{"selector":"@media (min-width:62em) { {{WRAPPER}} { display: none; } }"}]},"hideOnTablet":{"type":"boolean","style":[{"selector":"@media (min-width:48em) and (max-width:62em) { {{WRAPPER}} { display: none; } }"}]},"hideOnMobile":{"type":"boolean","style":[{"selector":"@media (max-width:48em) { {{WRAPPER}} { display: none; } }"}]},"colReverseOnTablet":{"type":"boolean","style":[{"selector":"@media (max-width:62em) { {{WRAPPER}} > .blockart-container > .blockart-section-inner { flex-direction:column-reverse; } }"}]},"colReverseOnMobile":{"type":"boolean","style":[{"selector":"@media (max-width:48em) { {{WRAPPER}} > .blockart-container > .blockart-section-inner { flex-direction:column-reverse; } }"}]},"blockCSS":{"type":"string"},"className":{"type":"string"}},"style":"blockart-blocks","editorScript":"blockart-blocks","editorStyle":"blockart-blocks-editor"}');
;// CONCATENATED MODULE: ./src/blocks/blocks/spacing/index.js

function spacing_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function spacing_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? spacing_ownKeys(Object(source), !0).forEach(function (key) { defineProperty_defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : spacing_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }







/* harmony default export */ const blocks_spacing = (function () {
  (0,external_wp_blocks_namespaceObject.registerBlockType)('blockart/spacing', spacing_objectSpread(spacing_objectSpread({}, spacing_block_namespaceObject), {}, {
    icon: /*#__PURE__*/React.createElement(components_icon, {
      type: "blockIcon",
      name: "spacing",
      size: 24
    }),
    edit: spacing_edit,
    save: spacing_save
  }));
});
;// CONCATENATED MODULE: ./src/blocks/blocks/index.js








;// CONCATENATED MODULE: ./src/blocks/index.js





// Register blocks.
section_column();
blocks_section();
blocks_heading();
blocks_paragraph();
buttons_button();
blocks_buttons();
blocks_image();
blocks_spacing();
update_block_attributes();
add_toolbar_library_button(); // Add toolbar library button.
update_block_category_icon(); // Update BlockArt category icon.
auto_recover_blocks(); // Auto recover blocks in widget/customize screen.

/***/ }),

/***/ 184:
/***/ ((module, exports) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;
	var nativeCodeString = '[native code]';

	function classNames() {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg)) {
				if (arg.length) {
					var inner = classNames.apply(null, arg);
					if (inner) {
						classes.push(inner);
					}
				}
			} else if (argType === 'object') {
				if (arg.toString !== Object.prototype.toString && !arg.toString.toString().includes('[native code]')) {
					classes.push(arg.toString());
					continue;
				}

				for (var key in arg) {
					if (hasOwn.call(arg, key) && arg[key]) {
						classes.push(key);
					}
				}
			}
		}

		return classes.join(' ');
	}

	if ( true && module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return classNames;
		}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}
}());


/***/ }),

/***/ 921:
/***/ ((__unused_webpack_module, exports) => {

"use strict";
var __webpack_unused_export__;
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var b="function"===typeof Symbol&&Symbol.for,c=b?Symbol.for("react.element"):60103,d=b?Symbol.for("react.portal"):60106,e=b?Symbol.for("react.fragment"):60107,f=b?Symbol.for("react.strict_mode"):60108,g=b?Symbol.for("react.profiler"):60114,h=b?Symbol.for("react.provider"):60109,k=b?Symbol.for("react.context"):60110,l=b?Symbol.for("react.async_mode"):60111,m=b?Symbol.for("react.concurrent_mode"):60111,n=b?Symbol.for("react.forward_ref"):60112,p=b?Symbol.for("react.suspense"):60113,q=b?
Symbol.for("react.suspense_list"):60120,r=b?Symbol.for("react.memo"):60115,t=b?Symbol.for("react.lazy"):60116,v=b?Symbol.for("react.block"):60121,w=b?Symbol.for("react.fundamental"):60117,x=b?Symbol.for("react.responder"):60118,y=b?Symbol.for("react.scope"):60119;
function z(a){if("object"===typeof a&&null!==a){var u=a.$$typeof;switch(u){case c:switch(a=a.type,a){case l:case m:case e:case g:case f:case p:return a;default:switch(a=a&&a.$$typeof,a){case k:case n:case t:case r:case h:return a;default:return u}}case d:return u}}}function A(a){return z(a)===m}__webpack_unused_export__=l;__webpack_unused_export__=m;__webpack_unused_export__=k;__webpack_unused_export__=h;__webpack_unused_export__=c;__webpack_unused_export__=n;__webpack_unused_export__=e;__webpack_unused_export__=t;__webpack_unused_export__=r;__webpack_unused_export__=d;
__webpack_unused_export__=g;__webpack_unused_export__=f;__webpack_unused_export__=p;__webpack_unused_export__=function(a){return A(a)||z(a)===l};__webpack_unused_export__=A;__webpack_unused_export__=function(a){return z(a)===k};__webpack_unused_export__=function(a){return z(a)===h};__webpack_unused_export__=function(a){return"object"===typeof a&&null!==a&&a.$$typeof===c};__webpack_unused_export__=function(a){return z(a)===n};exports.isFragment=function(a){return z(a)===e};__webpack_unused_export__=function(a){return z(a)===t};
exports.isMemo=function(a){return z(a)===r};__webpack_unused_export__=function(a){return z(a)===d};__webpack_unused_export__=function(a){return z(a)===g};__webpack_unused_export__=function(a){return z(a)===f};__webpack_unused_export__=function(a){return z(a)===p};
__webpack_unused_export__=function(a){return"string"===typeof a||"function"===typeof a||a===e||a===m||a===g||a===f||a===p||a===q||"object"===typeof a&&null!==a&&(a.$$typeof===t||a.$$typeof===r||a.$$typeof===h||a.$$typeof===k||a.$$typeof===n||a.$$typeof===w||a.$$typeof===x||a.$$typeof===y||a.$$typeof===v)};__webpack_unused_export__=z;


/***/ }),

/***/ 864:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


if (true) {
  module.exports = __webpack_require__(921);
} else {}


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
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
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
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
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
/******/ 			346: 0,
/******/ 			812: 0
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
/******/ 		var chunkLoadingGlobal = self["webpackChunkblockart_blocks"] = self["webpackChunkblockart_blocks"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, [812], () => (__webpack_require__(384)))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;