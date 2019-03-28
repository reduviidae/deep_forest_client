(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/App.css":
/*!************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/App.css ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__(/*! ../node_modules/css-loader/lib/url/escape.js */ "./node_modules/css-loader/lib/url/escape.js");
exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Anonymous+Pro|Arsenal|Vampiro+One);", ""]);

// module
exports.push([module.i, "*{\n  box-sizing: border-box;\n  padding: 0;\n  margin: 0;\n}\n\nbody {\n  font-family: 'Arsenal', sans-serif;\n  grid-template-columns: 1fr, 1fr, 3fr, 1fr, 1fr;\n  grid-template-rows: 20%, 60%, 20%;\n}\n\n.nav-bar {\n  /* width: 100vw;\n  height: 50px;\n  background: #F7FBFA;\n  background: -webkit-linear-gradient(top, #F7FBFA, #FEFAFB);\n  background: -moz-linear-gradient(top, #F7FBFA, #FEFAFB);\n  background: linear-gradient(to bottom, #F7FBFA, #FEFAFB); */\n}\n\n#welcome-logo {\n  height: 200px;\n  width: auto;\n  margin: 10px;\n}\n\n#nav-logo {\n  height: 50px;\n  width: auto;\n  margin: 10px 5px 5px 50px;\n}\n\n.lead-text {\n  font-family: 'Vampiro One', cursive;\n  font-size: 6em;\n  color: \"#1b1b1b\"\n}\n\n.centered-text {\n  text-align: center;\n}\n\n.welcome-grid {\n  height: 100vh;\n  width: 100vw;\n  display: grid;\n  grid-template-columns: 1fr 3fr 1fr;\n  grid-template-rows: 1fr 4fr 1fr;\n  background-image: url(" + escape(__webpack_require__(/*! ./img/activity-aquarelle-art-587549.jpg */ "./src/img/activity-aquarelle-art-587549.jpg")) + ");\n  background-repeat: no-repeat;\n  background-size: 100%;\n}\n\n\n.start-container {\n  grid-column-start: 3;\n  grid-row-start: 2;\n}\n\n.welcome-box{\n  padding: 20px;\n  width: 80%;\n  height: auto;\n  grid-column-start: 2;\n  grid-row-start: 2;\n}\n\n.cream-background-layer{\n  background-color: #FEFEFA;\n  opacity: .8;\n  border-radius: 20%;\n}\n\n.button {\n  padding: 10px;\n}\n\n#profile-container {\n  display: grid;\n  grid-template-columns: 1fr 3fr 1fr;\n  grid-template-rows: 1fr 4fr 1fr 2fr;\n  background: #F7FBFA;\n  background: -webkit-linear-gradient(top, #F7FBFA, #FFE3FF);\n  background: linear-gradient(to bottom, #F7FBFA, #FFE3FF);\n}\n\n#show-profile {\n  grid-row-start: 2;\n  grid-column-start: 2;\n}\n\n.avi-img {\n  height: 147px;\n  width: auto;\n}\n\n.avi-img:active {\n  /* Start the shake animation and make the animation last for 0.5 seconds */\n  -webkit-animation: shake 0.5s;\n          animation: shake 0.5s;\n\n  /* When the animation is finished, start again */\n  -webkit-animation-iteration-count: infinite;\n          animation-iteration-count: infinite;\n}\n\n@-webkit-keyframes shake {\n  0% { -webkit-transform: translate(5px, 5px) rotate(0deg); transform: translate(5px, 5px) rotate(0deg); }\n  10% { -webkit-transform: translate(-6px, -7px) rotate(-1deg); transform: translate(-6px, -7px) rotate(-1deg); }\n  20% { -webkit-transform: translate(-8px, 0px) rotate(1deg); transform: translate(-8px, 0px) rotate(1deg); }\n  30% { -webkit-transform: translate(3px, 2px) rotate(0deg); transform: translate(3px, 2px) rotate(0deg); }\n  40% { -webkit-transform: translate(1px, -1px) rotate(1deg); transform: translate(1px, -1px) rotate(1deg); }\n  50% { -webkit-transform: translate(-1px, 2px) rotate(-1deg); transform: translate(-1px, 2px) rotate(-1deg); }\n  60% { -webkit-transform: translate(-3px, 1px) rotate(0deg); transform: translate(-3px, 1px) rotate(0deg); }\n  70% { -webkit-transform: translate(3px, 9px) rotate(-1deg); transform: translate(3px, 9px) rotate(-1deg); }\n  80% { -webkit-transform: translate(-1px, -1px) rotate(1deg); transform: translate(-1px, -1px) rotate(1deg); }\n  90% { -webkit-transform: translate(1px, 2px) rotate(0deg); transform: translate(1px, 2px) rotate(0deg); }\n  100% { -webkit-transform: translate(1px, -2px) rotate(-1deg); transform: translate(1px, -2px) rotate(-1deg); }\n}\n\n@keyframes shake {\n  0% { -webkit-transform: translate(5px, 5px) rotate(0deg); transform: translate(5px, 5px) rotate(0deg); }\n  10% { -webkit-transform: translate(-6px, -7px) rotate(-1deg); transform: translate(-6px, -7px) rotate(-1deg); }\n  20% { -webkit-transform: translate(-8px, 0px) rotate(1deg); transform: translate(-8px, 0px) rotate(1deg); }\n  30% { -webkit-transform: translate(3px, 2px) rotate(0deg); transform: translate(3px, 2px) rotate(0deg); }\n  40% { -webkit-transform: translate(1px, -1px) rotate(1deg); transform: translate(1px, -1px) rotate(1deg); }\n  50% { -webkit-transform: translate(-1px, 2px) rotate(-1deg); transform: translate(-1px, 2px) rotate(-1deg); }\n  60% { -webkit-transform: translate(-3px, 1px) rotate(0deg); transform: translate(-3px, 1px) rotate(0deg); }\n  70% { -webkit-transform: translate(3px, 9px) rotate(-1deg); transform: translate(3px, 9px) rotate(-1deg); }\n  80% { -webkit-transform: translate(-1px, -1px) rotate(1deg); transform: translate(-1px, -1px) rotate(1deg); }\n  90% { -webkit-transform: translate(1px, 2px) rotate(0deg); transform: translate(1px, 2px) rotate(0deg); }\n  100% { -webkit-transform: translate(1px, -2px) rotate(-1deg); transform: translate(1px, -2px) rotate(-1deg); }\n}\n\n.chat-avi {\n  height: 40px;\n  width: auto;\n}\n\n.centered-container {\n  display: -webkit-flex;\n  display: flex;\n  -webkit-align-items: center;\n          align-items: center;\n  -webkit-justify-content: center;\n          justify-content: center;\n}\n\n.hidden {\n  display: none;\n}\n\ncanvas {\n  border: solid;\n  border-color: #c8c8cd;\n  border-width: thin;\n  margin: 10px;\n  background-color: #fcfaf5;\n}\n\n\n.drawing-tool-sizes {\n  clear: both;\n  margin: 3px;\n  padding: 5px;\n}\n\n.drawing-tool-size {\n  border-style: solid;\n  border-color: #8B8680;\n  border-width: 1px;\n  font-size: 0.75em;\n  width: 45px;\n  height: 25px;\n  float: left;\n  margin: 5px;\n}\n\n.size-text {\n  text-align: center;\n  vertical-align: center;\n}\n\n.game-container {\n  display: grid;\n  grid-template-columns: 1fr 8fr 1fr 4fr;\n  grid-template-rows: 10fr 4fr;\n  background: #F7FBFA;\n  background: -webkit-linear-gradient(top, #F7FBFA, #FFE3FF);\n  background: linear-gradient(to bottom, #F7FBFA, #FFE3FF);\n}\n\n.canvas-container {\n  grid-column-start: 2 !important;\n  margin: 30px 15px, 10px, 5px;\n\n}\n\n.chat-container {\n  grid-column-start: 4 !important;\n  grid-row-start: 1;\n  margin: 20px;\n\n}\n\n.chat-text {\n  font-family: 'Anonymous Pro', monospace;\n  font-size: 0.75em;\n  color: #391285;\n}\n\n#chat-message-box {\n  width: 56%;\n}\n\n#new-message-box {\n  margin: 40px;\n  padding: 5px;\n}\n\n#newmessage, #send-message {\n  margin-left: -30px;\n}\n\n.message {\n  margin: 10px;\n}\n\n.message-content {\n  text-align: left;\n  margin: 5px;\n}\n\n.msg-user-name {\n  font-size: 0.9em;\n  margin: -1px;\n}\n\n.msg-user-pronouns, .sent-on {\n  margin: -1px;\n  font-size: 0.1em;\n}\n\n.color-palette {\n  height: 40px;\n  width: 40px;\n  margin: 2px;\n  border-radius: 100%;\n  float: left;\n}\n\n#c-ff6eff {\n  background-color: #ff6eff;\n}\n\n#c-ff007c {\n  background-color: #ff007c;\n}\n\n#c-e12c2c {\n  background-color: #e12c2c;\n}\n\n#c-ff8833 {\n  background-color: #ff8833;\n}\n\n#c-f2ba49 {\n  background-color: #f2ba49;\n}\n\n#c-fbe870 {\n  background-color: #fbe870;\n}\n\n#c-fafa37 {\n  background-color: #fafa37;\n}\n\n#c-afe313 {\n  background-color: #afe313;\n}\n\n#c-d9e650 {\n  background-color: #d9e650;\n}\n\n#c-3aa655 {\n  background-color: #3aa655;\n}\n\n#c-03eba6 {\n  background-color: #03eba6;\n}\n\n#c-00cccc {\n  background-color: #00cccc;\n}\n\n#c-0066ff {\n  background-color: #0066ff;\n}\n\n#c-3f26bf {\n  background-color: #3f26bf;\n}\n\n#c-803790 {\n  background-color: #803790;\n}\n\n#c-c8c8cd {\n  background-color: #c8c8cd;\n}\n\n#c-8B8680 {\n  background-color: #8B8680;\n}\n\n#c-1b1b1b {\n  background-color: #1b1b1b;\n}\n\n#c-fcfaf5 {\n  background-color: #fcfaf5;\n  border-color: #c8c8cd;\n  border-style: solid;\n  border-width: 1px;\n}\n\n#c-ffffff {\n  background-color: #ffffff;\n  border-color: #c8c8cd;\n  border-style: solid;\n  border-width: 1px;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/index.css ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "body {\n  margin: 0;\n  padding: 0;\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", \"Roboto\", \"Oxygen\",\n    \"Ubuntu\", \"Cantarell\", \"Fira Sans\", \"Droid Sans\", \"Helvetica Neue\",\n    sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\ncode {\n  font-family: source-code-pro, Menlo, Monaco, Consolas, \"Courier New\",\n    monospace;\n}\n", ""]);

// exports


/***/ }),

/***/ "./src/ActionCable/Cable.js":
/*!**********************************!*\
  !*** ./src/ActionCable/Cable.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_flatironschool_Development_code_Flatiron_mod5_project_deep_forest_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_flatironschool_Development_code_Flatiron_mod5_project_deep_forest_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_flatironschool_Development_code_Flatiron_mod5_project_deep_forest_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_flatironschool_Development_code_Flatiron_mod5_project_deep_forest_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_flatironschool_Development_code_Flatiron_mod5_project_deep_forest_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react_actioncable_provider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-actioncable-provider */ "./node_modules/react-actioncable-provider/lib/index.js");
/* harmony import */ var react_actioncable_provider__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_actioncable_provider__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../constants */ "./src/constants/index.js");





var _jsxFileName = "/Users/flatironschool/Development/code/Flatiron/mod5/project/deep_forest_client/src/ActionCable/Cable.js";





var Cable =
/*#__PURE__*/
function (_Component) {
  Object(_Users_flatironschool_Development_code_Flatiron_mod5_project_deep_forest_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Cable, _Component);

  function Cable() {
    Object(_Users_flatironschool_Development_code_Flatiron_mod5_project_deep_forest_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Cable);

    return Object(_Users_flatironschool_Development_code_Flatiron_mod5_project_deep_forest_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_Users_flatironschool_Development_code_Flatiron_mod5_project_deep_forest_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Cable).apply(this, arguments));
  }

  Object(_Users_flatironschool_Development_code_Flatiron_mod5_project_deep_forest_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Cable, [{
    key: "render",
    value: function render() {
      var _this = this;

      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_6__["Fragment"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 11
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_actioncable_provider__WEBPACK_IMPORTED_MODULE_5__["ActionCable"], {
        channel: {
          channel: "MessagesChannel",
          game_id: _constants__WEBPACK_IMPORTED_MODULE_8__["GAME_ID"]
        },
        onReceived: function onReceived(data) {
          console.log("MessagesChannel recvd data: ", data);
          console.log(data.message.id);

          _this.props.getMessages(data.message);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        },
        __self: this
      }));
    }
  }]);

  return Cable;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

var mapStateToProps = function mapStateToProps(state) {
  return {
    state: state
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    getMessages: function getMessages(data) {
      return dispatch({
        type: "UP_MSG",
        payload: data
      });
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_7__["connect"])(mapStateToProps, mapDispatchToProps)(Cable));

/***/ }),

/***/ "./src/ActionCable/Chat.js":
/*!*********************************!*\
  !*** ./src/ActionCable/Chat.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_flatironschool_Development_code_Flatiron_mod5_project_deep_forest_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_flatironschool_Development_code_Flatiron_mod5_project_deep_forest_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_flatironschool_Development_code_Flatiron_mod5_project_deep_forest_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_flatironschool_Development_code_Flatiron_mod5_project_deep_forest_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_flatironschool_Development_code_Flatiron_mod5_project_deep_forest_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../constants */ "./src/constants/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _Cable__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Cable */ "./src/ActionCable/Cable.js");
/* harmony import */ var _components_Message__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/Message */ "./src/components/Message.js");





var _jsxFileName = "/Users/flatironschool/Development/code/Flatiron/mod5/project/deep_forest_client/src/ActionCable/Chat.js";







var Chat =
/*#__PURE__*/
function (_Component) {
  Object(_Users_flatironschool_Development_code_Flatiron_mod5_project_deep_forest_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Chat, _Component);

  function Chat() {
    var _getPrototypeOf2;

    var _this;

    Object(_Users_flatironschool_Development_code_Flatiron_mod5_project_deep_forest_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Chat);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_Users_flatironschool_Development_code_Flatiron_mod5_project_deep_forest_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, (_getPrototypeOf2 = Object(_Users_flatironschool_Development_code_Flatiron_mod5_project_deep_forest_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Chat)).call.apply(_getPrototypeOf2, [this].concat(args)));
    _this.state = {
      newmessage: "",
      sortedMessages: []
    };

    _this.typeMessage = function (e, data) {
      _this.setState({
        newmessage: data.value
      });
    };

    _this.sendMessage = function (e) {
      e.preventDefault();
      fetch("".concat(_constants__WEBPACK_IMPORTED_MODULE_7__["API_ROOT"], "messages"), {
        method: "POST",
        headers: _constants__WEBPACK_IMPORTED_MODULE_7__["AUTH_HEADERS"],
        body: JSON.stringify({
          game_id: _constants__WEBPACK_IMPORTED_MODULE_7__["GAME_ID"],
          user_id: _this.props.state.userState.user.id,
          user_name: _this.props.state.userState.user.name,
          content: _this.state.newmessage
        })
      }).then(function () {
        return _this.setState({
          newmessage: ""
        });
      });
    };

    return _this;
  }

  Object(_Users_flatironschool_Development_code_Flatiron_mod5_project_deep_forest_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Chat, [{
    key: "render",
    value: function render() {
      var sortedMessages = !!this.props.state.messages && this.props.state.messages.sort(function (a, b) {
        var keyA = new Date(a.created_at);
        var keyB = new Date(b.created_at); // Compare the 2 dates

        if (keyA < keyB) return -1;
        if (keyA > keyB) return 1;
        return 0;
      }).slice(-8);
      var messages = !!sortedMessages && sortedMessages.map(function (message) {
        return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_Message__WEBPACK_IMPORTED_MODULE_10__["default"], {
          message: message,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 44
          },
          __self: this
        });
      });
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["Container"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("ul", {
        className: "chat-text",
        id: "chat-message-box",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        },
        __self: this
      }, messages), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_Cable__WEBPACK_IMPORTED_MODULE_9__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "chat-text",
        id: "new-message-box",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["Form"], {
        onSubmit: this.sendMessage,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["TextArea"], {
        id: "newmessage",
        type: "text",
        value: this.state.newmessage,
        style: {
          minHeight: 50,
          minWidth: 200
        },
        name: "newmessage",
        onChange: this.typeMessage,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["Button"], {
        id: "send-message",
        className: "button",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        },
        __self: this
      }, "Send Message"))));
    }
  }]);

  return Chat;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

var mapStateToProps = function mapStateToProps(state) {
  return {
    state: state
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    loadGames: function loadGames(data) {
      return dispatch({
        type: "LOAD_GAMES",
        payload: data
      });
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_8__["connect"])(mapStateToProps, mapDispatchToProps)(Chat));

/***/ }),

/***/ "./src/ActionCable/DrawingCable.js":
/*!*****************************************!*\
  !*** ./src/ActionCable/DrawingCable.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_flatironschool_Development_code_Flatiron_mod5_project_deep_forest_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_flatironschool_Development_code_Flatiron_mod5_project_deep_forest_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_flatironschool_Development_code_Flatiron_mod5_project_deep_forest_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_flatironschool_Development_code_Flatiron_mod5_project_deep_forest_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_flatironschool_Development_code_Flatiron_mod5_project_deep_forest_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react_actioncable_provider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-actioncable-provider */ "./node_modules/react-actioncable-provider/lib/index.js");
/* harmony import */ var react_actioncable_provider__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_actioncable_provider__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../constants */ "./src/constants/index.js");





var _jsxFileName = "/Users/flatironschool/Development/code/Flatiron/mod5/project/deep_forest_client/src/ActionCable/DrawingCable.js";





var DrawingCable =
/*#__PURE__*/
function (_Component) {
  Object(_Users_flatironschool_Development_code_Flatiron_mod5_project_deep_forest_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(DrawingCable, _Component);

  function DrawingCable() {
    Object(_Users_flatironschool_Development_code_Flatiron_mod5_project_deep_forest_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, DrawingCable);

    return Object(_Users_flatironschool_Development_code_Flatiron_mod5_project_deep_forest_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_Users_flatironschool_Development_code_Flatiron_mod5_project_deep_forest_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(DrawingCable).apply(this, arguments));
  }

  Object(_Users_flatironschool_Development_code_Flatiron_mod5_project_deep_forest_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(DrawingCable, [{
    key: "render",
    value: function render() {
      var _this = this;

      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_6__["Fragment"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 11
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_actioncable_provider__WEBPACK_IMPORTED_MODULE_5__["ActionCable"], {
        channel: {
          channel: "DrawingsChannel",
          game_id: _constants__WEBPACK_IMPORTED_MODULE_8__["GAME_ID"]
        },
        onReceived: function onReceived(data) {
          _this.props.getDrawing(data);

          if (!!data.drawing) {
            _this.props.drawOnCanvas(data.drawing.plots, data.drawing.color, data.drawing.lineWidth);
          }
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        },
        __self: this
      }));
    }
  }]);

  return DrawingCable;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

var mapStateToProps = function mapStateToProps(state) {
  return {
    state: state
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    getDrawing: function getDrawing(data) {
      return dispatch({
        type: "CABLE_DRAW",
        payload: data
      });
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_7__["connect"])(mapStateToProps, mapDispatchToProps)(DrawingCable));

/***/ }),

/***/ "./src/App.css":
/*!*********************!*\
  !*** ./src/App.css ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/css-loader??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./App.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/App.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../node_modules/css-loader??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./App.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/App.css", function() {
		var newContent = __webpack_require__(/*! !../node_modules/css-loader??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./App.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/App.css");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_flatironschool_Development_code_Flatiron_mod5_project_deep_forest_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_flatironschool_Development_code_Flatiron_mod5_project_deep_forest_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_flatironschool_Development_code_Flatiron_mod5_project_deep_forest_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_flatironschool_Development_code_Flatiron_mod5_project_deep_forest_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_flatironschool_Development_code_Flatiron_mod5_project_deep_forest_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./App.css */ "./src/App.css");
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_App_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_Welcome__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/Welcome */ "./src/components/Welcome.js");
/* harmony import */ var _components_Profile__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/Profile */ "./src/components/Profile.js");
/* harmony import */ var _containers_GameContainer__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./containers/GameContainer */ "./src/containers/GameContainer.js");





var _jsxFileName = "/Users/flatironschool/Development/code/Flatiron/mod5/project/deep_forest_client/src/App.js";


 // components




var token = localStorage.getItem('token');

var App =
/*#__PURE__*/
function (_Component) {
  Object(_Users_flatironschool_Development_code_Flatiron_mod5_project_deep_forest_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(App, _Component);

  function App() {
    Object(_Users_flatironschool_Development_code_Flatiron_mod5_project_deep_forest_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, App);

    return Object(_Users_flatironschool_Development_code_Flatiron_mod5_project_deep_forest_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_Users_flatironschool_Development_code_Flatiron_mod5_project_deep_forest_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(App).apply(this, arguments));
  }

  Object(_Users_flatironschool_Development_code_Flatiron_mod5_project_deep_forest_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(App, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__["Switch"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__["Route"], {
        path: "/profile",
        component: _components_Profile__WEBPACK_IMPORTED_MODULE_9__["default"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__["Route"], {
        path: "/game/:id",
        component: _containers_GameContainer__WEBPACK_IMPORTED_MODULE_10__["default"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__["Route"], {
        path: "/",
        component: _components_Welcome__WEBPACK_IMPORTED_MODULE_8__["default"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        },
        __self: this
      }));
    }
  }]);

  return App;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ "./src/components/Canvas.js":
/*!**********************************!*\
  !*** ./src/components/Canvas.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_flatironschool_Development_code_Flatiron_mod5_project_deep_forest_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _Users_flatironschool_Development_code_Flatiron_mod5_project_deep_forest_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_flatironschool_Development_code_Flatiron_mod5_project_deep_forest_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_flatironschool_Development_code_Flatiron_mod5_project_deep_forest_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_flatironschool_Development_code_Flatiron_mod5_project_deep_forest_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_flatironschool_Development_code_Flatiron_mod5_project_deep_forest_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../constants */ "./src/constants/index.js");
/* harmony import */ var _ActionCable_DrawingCable__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../ActionCable/DrawingCable */ "./src/ActionCable/DrawingCable.js");
/* harmony import */ var _ColorPalette__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./ColorPalette */ "./src/components/ColorPalette.js");






var _jsxFileName = "/Users/flatironschool/Development/code/Flatiron/mod5/project/deep_forest_client/src/components/Canvas.js";







var Canvas =
/*#__PURE__*/
function (_Component) {
  Object(_Users_flatironschool_Development_code_Flatiron_mod5_project_deep_forest_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Canvas, _Component);

  function Canvas() {
    var _getPrototypeOf2;

    var _this;

    Object(_Users_flatironschool_Development_code_Flatiron_mod5_project_deep_forest_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, Canvas);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_Users_flatironschool_Development_code_Flatiron_mod5_project_deep_forest_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, (_getPrototypeOf2 = Object(_Users_flatironschool_Development_code_Flatiron_mod5_project_deep_forest_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Canvas)).call.apply(_getPrototypeOf2, [this].concat(args)));
    _this.state = {
      plots: []
    };

    _this.drawToFalse = function (e) {
      if (_this.props.drawing.draw) {
        fetch("".concat(_constants__WEBPACK_IMPORTED_MODULE_9__["API_ROOT"], "drawings"), {
          method: "PATCH",
          headers: _constants__WEBPACK_IMPORTED_MODULE_9__["AUTH_HEADERS"],
          body: JSON.stringify({
            draw: true,
            color: _this.props.drawing.color,
            lineWidth: _this.props.drawing.lineWidth,
            plots: _this.props.drawing.plots,
            game_id: _constants__WEBPACK_IMPORTED_MODULE_9__["GAME_ID"]
          })
        }).then(_this.setState({
          plots: []
        }));
      }

      _this.props.drawToFalse();
    };

    _this.drawOnCanvas = function (plots) {
      var color = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _this.props.drawing.color;
      var lineWidth = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _this.props.drawing.lineWidth;
      var canvas = _this.refs.canvas;
      var ctx = canvas.getContext("2d");
      ctx.miterLimit = 0.25;
      ctx.lineWidth = lineWidth;
      ctx.lineJoin = "bevel";
      ctx.strokeStyle = color;
      ctx.imageSmoothingQuality = "high";

      if (!!plots) {
        ctx.beginPath();
        ctx.moveTo(plots[0].x, plots[0].y);

        for (var i = 1; i < plots.length; i++) {
          ctx.lineTo(plots[i].x, plots[i].y);
        }

        ;
        ctx.stroke();
      }
    };

    _this.getMousePos = function (e) {
      var canvas = _this.refs.canvas;
      var rect = canvas.getBoundingClientRect();
      var scaleX = canvas.width / rect.width;
      var scaleY = canvas.height / rect.height;
      return {
        x: (e.clientX - rect.left) * scaleX,
        y: (e.clientY - rect.top) * scaleY
      };
    };

    _this.draw = function (e) {
      if (_this.props.drawing.draw) {
        var position = _this.getMousePos(e);

        var plots = Object(_Users_flatironschool_Development_code_Flatiron_mod5_project_deep_forest_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_this.state.plots);

        plots.push(position);

        _this.setState({
          plots: plots
        });

        _this.props.setPlots(plots);

        _this.drawOnCanvas(plots);
      }
    };

    _this.changeColor = function (e) {
      var color = "#".concat(e.target.id).replace("c-", "");

      _this.props.changeColor(color);
    };

    _this.changeSize = function (e) {
      switch (e.target.id) {
        case "small":
          _this.props.changeSize(1);

          break;

        case "medium":
          _this.props.changeSize(5);

          break;

        case "large":
          _this.props.changeSize(20);

          break;

        default:
          return _this.state.lineWidth;
      }
    };

    return _this;
  }

  Object(_Users_flatironschool_Development_code_Flatiron_mod5_project_deep_forest_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(Canvas, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.props.getDrawingState(_constants__WEBPACK_IMPORTED_MODULE_9__["DRAWING_ID"]);
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Container"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_ActionCable_DrawingCable__WEBPACK_IMPORTED_MODULE_10__["default"], {
        drawOnCanvas: this.drawOnCanvas,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 100
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        id: "canvas",
        onMouseDown: this.props.drawToTrue,
        onMouseUp: this.drawToFalse,
        onMouseMove: this.draw,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("canvas", {
        ref: "canvas",
        width: window.outerWidth * .7,
        height: window.innerHeight * .8,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 106
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 108
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_ColorPalette__WEBPACK_IMPORTED_MODULE_11__["default"], {
        changeColor: this.changeColor,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 109
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "drawing-tool-sizes",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 110
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "drawing-tool-size size-text",
        id: "small",
        onClick: this.changeSize,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 111
        },
        __self: this
      }, "S"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "drawing-tool-size size-text",
        id: "medium",
        onClick: this.changeSize,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 112
        },
        __self: this
      }, "M"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "drawing-tool-size size-text",
        id: "large",
        onClick: this.changeSize,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 113
        },
        __self: this
      }, "L")));
    }
  }]);

  return Canvas;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

var mapStateToProps = function mapStateToProps(state) {
  return state;
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    getDrawingState: function getDrawingState(data) {
      return dispatch({
        type: "GET_DRAW",
        payload: data
      });
    },
    drawToTrue: function drawToTrue(data) {
      return dispatch({
        type: "START_DRAW"
      });
    },
    drawToFalse: function drawToFalse(data) {
      return dispatch({
        type: "END_DRAW"
      });
    },
    changeColor: function changeColor(data) {
      return dispatch({
        type: "COLOR",
        payload: data
      });
    },
    changeSize: function changeSize(data) {
      return dispatch({
        type: "SIZE",
        payload: data
      });
    },
    setPlots: function setPlots(data) {
      return dispatch({
        type: "PLOTS",
        payload: data
      });
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_7__["connect"])(mapStateToProps, mapDispatchToProps)(Canvas));

/***/ }),

/***/ "./src/components/ColorPalette.js":
/*!****************************************!*\
  !*** ./src/components/ColorPalette.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/flatironschool/Development/code/Flatiron/mod5/project/deep_forest_client/src/components/ColorPalette.js";


var ColorPalette = function ColorPalette(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "color-palette",
    id: "c-ff6eff",
    onClick: props.changeColor,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "color-palette",
    id: "c-ff007c",
    onClick: props.changeColor,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "color-palette",
    id: "c-e12c2c",
    onClick: props.changeColor,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "color-palette",
    id: "c-ff8833",
    onClick: props.changeColor,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "color-palette",
    id: "c-f2ba49",
    onClick: props.changeColor,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "color-palette",
    id: "c-fbe870",
    onClick: props.changeColor,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "color-palette",
    id: "c-fafa37",
    onClick: props.changeColor,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "color-palette",
    id: "c-d9e650",
    onClick: props.changeColor,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "color-palette",
    id: "c-afe313",
    onClick: props.changeColor,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "color-palette",
    id: "c-3aa655",
    onClick: props.changeColor,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "color-palette",
    id: "c-03eba6",
    onClick: props.changeColor,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "color-palette",
    id: "c-00cccc",
    onClick: props.changeColor,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "color-palette",
    id: "c-0066ff",
    onClick: props.changeColor,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "color-palette",
    id: "c-3f26bf",
    onClick: props.changeColor,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "color-palette",
    id: "c-803790",
    onClick: props.changeColor,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "color-palette",
    id: "c-1b1b1b",
    onClick: props.changeColor,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "color-palette",
    id: "c-8B8680",
    onClick: props.changeColor,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "color-palette",
    id: "c-c8c8cd",
    onClick: props.changeColor,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "color-palette",
    id: "c-fcfaf5",
    onClick: props.changeColor,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (ColorPalette);

/***/ }),

/***/ "./src/components/Login.js":
/*!*********************************!*\
  !*** ./src/components/Login.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_flatironschool_Development_code_Flatiron_mod5_project_deep_forest_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _Users_flatironschool_Development_code_Flatiron_mod5_project_deep_forest_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_flatironschool_Development_code_Flatiron_mod5_project_deep_forest_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_flatironschool_Development_code_Flatiron_mod5_project_deep_forest_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_flatironschool_Development_code_Flatiron_mod5_project_deep_forest_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_flatironschool_Development_code_Flatiron_mod5_project_deep_forest_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../constants */ "./src/constants/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");






var _jsxFileName = "/Users/flatironschool/Development/code/Flatiron/mod5/project/deep_forest_client/src/components/Login.js";




 // import { authenticateUser } from '../actions/userActions'

var Login =
/*#__PURE__*/
function (_Component) {
  Object(_Users_flatironschool_Development_code_Flatiron_mod5_project_deep_forest_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Login, _Component);

  function Login() {
    var _getPrototypeOf2;

    var _this;

    Object(_Users_flatironschool_Development_code_Flatiron_mod5_project_deep_forest_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, Login);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_Users_flatironschool_Development_code_Flatiron_mod5_project_deep_forest_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, (_getPrototypeOf2 = Object(_Users_flatironschool_Development_code_Flatiron_mod5_project_deep_forest_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Login)).call.apply(_getPrototypeOf2, [this].concat(args)));
    _this.state = {
      name: "",
      password: "",
      loggedIn: false
    };

    _this.onChangeHandler = function (e) {
      _this.setState(Object(_Users_flatironschool_Development_code_Flatiron_mod5_project_deep_forest_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, e.target.name, e.target.value));
    };

    _this.onSubmitHandler = function (e) {
      e.preventDefault();
      var user = {
        name: _this.state.name,
        password: _this.state.password
      };
      fetch("".concat(_constants__WEBPACK_IMPORTED_MODULE_9__["API_ROOT"], "login"), {
        method: "POST",
        headers: _constants__WEBPACK_IMPORTED_MODULE_9__["BASIC_HEADERS"],
        body: JSON.stringify({
          user: user
        })
      }).then(function (r) {
        return r.json();
      }).then(function (data) {
        localStorage.setItem("token", data.jwt);
        document.cookie = 'X-Authorization=' + data.jwt + '; path=/';
        !!data.jwt && _this.props.login(data);
      }).catch(console.error);
    };

    return _this;
  }

  Object(_Users_flatironschool_Development_code_Flatiron_mod5_project_deep_forest_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(Login, [{
    key: "render",
    value: function render() {
      if (this.props.state.loggedIn) {
        return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_8__["Redirect"], {
          to: "/profile",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 41
          },
          __self: this
        });
      } else {
        return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
          className: "welcome-box centered-container",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 45
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("img", {
          src: __webpack_require__(/*! ../img/logo.png */ "./src/img/logo.png"),
          alt: "logo",
          id: "welcome-logo",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 46
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__["Form"], {
          id: "login",
          onSubmit: this.onSubmitHandler,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 47
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__["Form"].Field, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 48
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__["Input"], {
          focus: true,
          size: "massive",
          type: "text",
          placeholder: "Enter your username",
          name: "name",
          value: this.state.name,
          onChange: this.onChangeHandler,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 49
          },
          __self: this
        })), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("br", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 59
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__["Form"].Field, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 60
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__["Input"], {
          focus: true,
          size: "massive",
          type: "password",
          placeholder: "Enter your password",
          name: "password",
          value: this.state.password,
          onChange: this.onChangeHandler,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 61
          },
          __self: this
        })), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("br", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 71
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__["Button"], {
          className: "button",
          type: "submit",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 73
          },
          __self: this
        }, "Login"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__["Button"], {
          className: "button",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 74
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_8__["NavLink"], {
          activeStyle: {
            textDecoration: "none",
            color: "#1b1b1b"
          },
          style: {
            textDecoration: "none",
            color: "#1b1b1b"
          },
          to: "/signup",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 74
          },
          __self: this
        }, "Signup"))));
      }
    }
  }]);

  return Login;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

;

var mapStateToProps = function mapStateToProps(state) {
  return {
    state: state
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    login: function login(data) {
      return dispatch({
        type: "AUTH_USER",
        payload: data
      });
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_10__["connect"])(mapStateToProps, mapDispatchToProps)(Login));

/***/ }),

/***/ "./src/components/LoginSignupButtons.js":
/*!**********************************************!*\
  !*** ./src/components/LoginSignupButtons.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");
var _jsxFileName = "/Users/flatironschool/Development/code/Flatiron/mod5/project/deep_forest_client/src/components/LoginSignupButtons.js";




var LoginSignupButtons = function LoginSignupButtons() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "centered-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    basic: true,
    color: "olive",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["NavLink"], {
    activeStyle: {
      textDecoration: "none",
      fontSize: "3em",
      color: "#1b1b1b"
    },
    style: {
      textDecoration: "none",
      fontSize: "3em",
      color: "#1b1b1b"
    },
    to: "/login",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, "Login"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "centered-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    basic: true,
    color: "olive",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["NavLink"], {
    activeStyle: {
      textDecoration: "none",
      fontSize: "3em",
      color: "#1b1b1b"
    },
    style: {
      textDecoration: "none",
      fontSize: "3em",
      color: "#1b1b1b"
    },
    to: "/signup",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, "Signup"))));
};

/* harmony default export */ __webpack_exports__["default"] = (LoginSignupButtons);

/***/ }),

/***/ "./src/components/Message.js":
/*!***********************************!*\
  !*** ./src/components/Message.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/flatironschool/Development/code/Flatiron/mod5/project/deep_forest_client/src/components/Message.js";


var Message = function Message(props) {
  var options = {
    hour: "2-digit",
    minute: "2-digit",
    weekday: 'long',
    month: 'long',
    day: 'numeric'
  };
  var sentOn = new Date(props.message.created_at).toLocaleDateString("en-US", options);
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "message",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    className: "chat-avi",
    src: __webpack_require__("./src/img sync recursive ^\\.\\/.*\\.png$")("./".concat(props.message.user.avatar, ".png")),
    alt: "".concat(props.message.user.avatar),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", {
    className: "msg-user-name",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, props.message.user.name, " (", props.message.user.pronouns, ")"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "message-content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, props.message.content), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "sent-on",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, "sent on: ", sentOn));
};

/* harmony default export */ __webpack_exports__["default"] = (Message);

/***/ }),

/***/ "./src/components/NavBar.js":
/*!**********************************!*\
  !*** ./src/components/NavBar.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
var _jsxFileName = "/Users/flatironschool/Development/code/Flatiron/mod5/project/deep_forest_client/src/components/NavBar.js";




var NavBar = function NavBar(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "nav-bar",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: __webpack_require__(/*! ../img/logo.png */ "./src/img/logo.png"),
    alt: "logo",
    id: "nav-logo",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["NavLink"], {
    activeStyle: {
      color: "#1b1b1b"
    },
    style: {
      margin: "15px",
      textDecoration: "none",
      fontSize: "0.5em",
      color: "#1b1b1b"
    },
    to: "/profile",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, "Profile"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["NavLink"], {
    activeStyle: {
      color: "#1b1b1b"
    },
    style: {
      margin: "15px",
      textDecoration: "none",
      fontSize: "0.5em",
      color: "#1b1b1b"
    },
    onClick: props.mapDispatchToProps,
    to: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, "Logout"));
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    logout: function logout(data) {
      return dispatch({
        type: "LOGOUT"
      });
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(null, mapDispatchToProps)(NavBar));

/***/ }),

/***/ "./src/components/Profile.js":
/*!***********************************!*\
  !*** ./src/components/Profile.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_flatironschool_Development_code_Flatiron_mod5_project_deep_forest_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_flatironschool_Development_code_Flatiron_mod5_project_deep_forest_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_flatironschool_Development_code_Flatiron_mod5_project_deep_forest_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_flatironschool_Development_code_Flatiron_mod5_project_deep_forest_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_flatironschool_Development_code_Flatiron_mod5_project_deep_forest_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../constants */ "./src/constants/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
/* harmony import */ var _NavBar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./NavBar */ "./src/components/NavBar.js");





var _jsxFileName = "/Users/flatironschool/Development/code/Flatiron/mod5/project/deep_forest_client/src/components/Profile.js";







var Profile =
/*#__PURE__*/
function (_Component) {
  Object(_Users_flatironschool_Development_code_Flatiron_mod5_project_deep_forest_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Profile, _Component);

  function Profile() {
    var _getPrototypeOf2;

    var _this;

    Object(_Users_flatironschool_Development_code_Flatiron_mod5_project_deep_forest_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Profile);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_Users_flatironschool_Development_code_Flatiron_mod5_project_deep_forest_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, (_getPrototypeOf2 = Object(_Users_flatironschool_Development_code_Flatiron_mod5_project_deep_forest_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Profile)).call.apply(_getPrototypeOf2, [this].concat(args)));
    _this.state = {
      newPronouns: ""
    };

    _this.enterPronouns = function (e, data) {
      _this.setState({
        newPronouns: data.value
      });
    };

    _this.changePronouns = function () {
      fetch("".concat(_constants__WEBPACK_IMPORTED_MODULE_7__["API_ROOT"], "users/").concat(_this.props.state.userState.user.id), {
        method: "PATCH",
        headers: _constants__WEBPACK_IMPORTED_MODULE_7__["AUTH_HEADERS"],
        body: JSON.stringify({
          pronouns: _this.state.newPronouns
        })
      }).then(function (r) {
        return r.json();
      }).then(_this.props.changePronouns);
    };

    _this.changeAvatar = function (e) {
      fetch("".concat(_constants__WEBPACK_IMPORTED_MODULE_7__["API_ROOT"], "users/").concat(_this.props.state.userState.user.id), {
        method: "PATCH",
        headers: _constants__WEBPACK_IMPORTED_MODULE_7__["AUTH_HEADERS"],
        body: JSON.stringify({
          avatar: e.target.alt
        })
      }).then(function (r) {
        return r.json();
      }).then(function (data) {
        return _this.props.changeAvatar(data.avatar);
      });
    };

    _this.fetchUserData = function () {
      if (!!_this.props.state.userState.loggedIn) {
        fetch("".concat(_constants__WEBPACK_IMPORTED_MODULE_7__["API_ROOT"], "users/").concat(_this.props.state.userState.user.id), {
          method: "GET",
          headers: _constants__WEBPACK_IMPORTED_MODULE_7__["AUTH_HEADERS"]
        }).then(function (r) {
          return r.json();
        }).then(_this.props.profile);
      }
    };

    return _this;
  }

  Object(_Users_flatironschool_Development_code_Flatiron_mod5_project_deep_forest_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Profile, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.fetchUserData();
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      console.log(this.props.state.userState.user.avatar);

      if (!this.props.state.loggedIn) {
        return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_9__["Redirect"], {
          to: "/",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 65
          },
          __self: this
        });
      } else {
        return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["Container"], {
          id: "profile-container",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 69
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_NavBar__WEBPACK_IMPORTED_MODULE_10__["default"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 70
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          id: "show-profile",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 71
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h2", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 72
          },
          __self: this
        }, "Welcome back, ", this.props.state.userState.user.name), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("br", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 73
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("br", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 74
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("br", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 75
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("br", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 76
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 77
          },
          __self: this
        }, "Click on an animal to change your chat avatar."), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["List"], {
          className: "avis",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 78
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
          className: "avi-img",
          onClick: this.changeAvatar,
          src: __webpack_require__(/*! ../img/pink_fairy_armadillo.png */ "./src/img/pink_fairy_armadillo.png"),
          alt: "pink_fairy_armadillo",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 79
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
          className: "avi-img",
          onClick: this.changeAvatar,
          src: __webpack_require__(/*! ../img/okapi.png */ "./src/img/okapi.png"),
          alt: "okapi",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 80
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
          className: "avi-img",
          onClick: this.changeAvatar,
          src: __webpack_require__(/*! ../img/manedwolf.png */ "./src/img/manedwolf.png"),
          alt: "manedwolf",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 81
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
          className: "avi-img",
          onClick: this.changeAvatar,
          src: __webpack_require__(/*! ../img/glaucus_atlanticus.png */ "./src/img/glaucus_atlanticus.png"),
          alt: "glaucus_atlanticus",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 82
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
          className: "avi-img",
          onClick: this.changeAvatar,
          src: __webpack_require__(/*! ../img/fossa.png */ "./src/img/fossa.png"),
          alt: "fossa",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 83
          },
          __self: this
        })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("br", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 85
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("br", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 86
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("br", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 87
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("br", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 88
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 89
          },
          __self: this
        }, "Your pronouns are currently set to: ", this.props.state.userState.user.pronouns), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["Input"], {
          type: "text",
          placeholder: "Enter new pronouns",
          name: "pronouns",
          onChange: function onChange(e, data) {
            return _this2.enterPronouns(e, data);
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 90
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("br", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 91
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["Button"], {
          className: "button",
          type: "submit",
          onClick: this.changePronouns,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 92
          },
          __self: this
        }, "Change Pronouns"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("br", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 93
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("br", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 94
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("br", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 95
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_9__["NavLink"], {
          activeStyle: {
            color: "#1b1b1b"
          },
          style: {
            textDecoration: "none",
            fontSize: "3em",
            color: "#1b1b1b",
            float: "right"
          },
          key: "".concat(_constants__WEBPACK_IMPORTED_MODULE_7__["GAME_ID"]),
          game: 'Chat and Draw',
          to: "/game/".concat(_constants__WEBPACK_IMPORTED_MODULE_7__["GAME_ID"]),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 96
          },
          __self: this
        }, "Join Chat and Draw")));
      }
    }
  }]);

  return Profile;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

var mapStateToProps = function mapStateToProps(state) {
  return {
    state: state
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    profile: function profile(data) {
      return dispatch({
        type: "SHOW_USER",
        payload: data
      });
    },
    changePronouns: function changePronouns(data) {
      return dispatch({
        type: "NEW_PRONOUNS",
        payload: data
      });
    },
    changeAvatar: function changeAvatar(data) {
      return dispatch({
        type: "NEW_AVATAR",
        payload: data
      });
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_8__["connect"])(mapStateToProps, mapDispatchToProps)(Profile));

/***/ }),

/***/ "./src/components/Signup.js":
/*!**********************************!*\
  !*** ./src/components/Signup.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_flatironschool_Development_code_Flatiron_mod5_project_deep_forest_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _Users_flatironschool_Development_code_Flatiron_mod5_project_deep_forest_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_flatironschool_Development_code_Flatiron_mod5_project_deep_forest_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_flatironschool_Development_code_Flatiron_mod5_project_deep_forest_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_flatironschool_Development_code_Flatiron_mod5_project_deep_forest_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_flatironschool_Development_code_Flatiron_mod5_project_deep_forest_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../constants */ "./src/constants/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");






var _jsxFileName = "/Users/flatironschool/Development/code/Flatiron/mod5/project/deep_forest_client/src/components/Signup.js";




 // import { authenticateUser } from '../actions/userActions'

var Signup =
/*#__PURE__*/
function (_Component) {
  Object(_Users_flatironschool_Development_code_Flatiron_mod5_project_deep_forest_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Signup, _Component);

  function Signup() {
    var _getPrototypeOf2;

    var _this;

    Object(_Users_flatironschool_Development_code_Flatiron_mod5_project_deep_forest_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, Signup);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_Users_flatironschool_Development_code_Flatiron_mod5_project_deep_forest_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, (_getPrototypeOf2 = Object(_Users_flatironschool_Development_code_Flatiron_mod5_project_deep_forest_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Signup)).call.apply(_getPrototypeOf2, [this].concat(args)));
    _this.state = {
      name: "",
      pronouns: "",
      password: "",
      avatar: "pink_fairy_armadillo"
    };

    _this.onChangeHandler = function (e) {
      _this.setState(Object(_Users_flatironschool_Development_code_Flatiron_mod5_project_deep_forest_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, e.target.name, e.target.value));
    };

    _this.onSubmitHandler = function (e) {
      e.preventDefault();
      var user = {
        name: _this.state.name,
        pronouns: _this.state.pronouns,
        password: _this.state.password
      };
      fetch("".concat(_constants__WEBPACK_IMPORTED_MODULE_8__["API_ROOT"], "users"), {
        method: "POST",
        headers: _constants__WEBPACK_IMPORTED_MODULE_8__["BASIC_HEADERS"],
        body: JSON.stringify({
          user: user
        })
      }).then(function (r) {
        return r.json();
      }).then(function (data) {
        console.log(data);
        localStorage.setItem("token", data.jwt);
        document.cookie = 'X-Authorization=' + data.jwt + '; path=/';

        _this.props.login(data);
      }).catch(console.error);
    };

    return _this;
  }

  Object(_Users_flatironschool_Development_code_Flatiron_mod5_project_deep_forest_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(Signup, [{
    key: "render",
    value: function render() {
      if (this.props.state.loggedIn) {
        return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_9__["Redirect"], {
          to: "/profile",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 42
          },
          __self: this
        });
      } else {
        return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
          className: "welcome-box centered-container",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 46
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("br", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 47
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("img", {
          src: __webpack_require__(/*! ../img/logo.png */ "./src/img/logo.png"),
          alt: "logo",
          id: "welcome-logo",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 48
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__["Form"], {
          id: "signup",
          onSubmit: this.onSubmitHandler,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 49
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__["Form"].Field, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 50
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("input", {
          type: "text",
          placeholder: "Enter your username",
          name: "name",
          value: this.state.name,
          onChange: this.onChangeHandler,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 51
          },
          __self: this
        })), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("br", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 59
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__["Form"].Field, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 60
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("input", {
          type: "pronouns",
          placeholder: "Enter your pronouns",
          name: "pronouns",
          value: this.state.pronouns,
          onChange: this.onChangeHandler,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 61
          },
          __self: this
        })), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("br", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 69
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__["Form"].Field, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 70
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("input", {
          type: "password",
          placeholder: "Enter your password",
          name: "password",
          value: this.state.password,
          onChange: this.onChangeHandler,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 71
          },
          __self: this
        })), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("br", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 79
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__["Button"], {
          className: "button",
          type: "submit",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 81
          },
          __self: this
        }, "Sign up"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__["Button"], {
          className: "button",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 82
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_9__["NavLink"], {
          activeStyle: {
            textDecoration: "none",
            color: "#1b1b1b"
          },
          style: {
            textDecoration: "none",
            color: "#1b1b1b"
          },
          to: "/login",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 82
          },
          __self: this
        }, "Login"))));
      }
    }
  }]);

  return Signup;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

;

var mapStateToProps = function mapStateToProps(state) {
  return {
    state: state
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    login: function login(data) {
      return dispatch({
        type: "AUTH_USER",
        payload: data
      });
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_10__["connect"])(mapStateToProps, mapDispatchToProps)(Signup));

/***/ }),

/***/ "./src/components/Welcome.js":
/*!***********************************!*\
  !*** ./src/components/Welcome.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_flatironschool_Development_code_Flatiron_mod5_project_deep_forest_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_flatironschool_Development_code_Flatiron_mod5_project_deep_forest_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_flatironschool_Development_code_Flatiron_mod5_project_deep_forest_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_flatironschool_Development_code_Flatiron_mod5_project_deep_forest_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_flatironschool_Development_code_Flatiron_mod5_project_deep_forest_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _WelcomePath__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./WelcomePath */ "./src/components/WelcomePath.js");
/* harmony import */ var _Login__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Login */ "./src/components/Login.js");
/* harmony import */ var _Signup__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Signup */ "./src/components/Signup.js");





var _jsxFileName = "/Users/flatironschool/Development/code/Flatiron/mod5/project/deep_forest_client/src/components/Welcome.js";


 // components





var Welcome =
/*#__PURE__*/
function (_Component) {
  Object(_Users_flatironschool_Development_code_Flatiron_mod5_project_deep_forest_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Welcome, _Component);

  function Welcome() {
    Object(_Users_flatironschool_Development_code_Flatiron_mod5_project_deep_forest_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Welcome);

    return Object(_Users_flatironschool_Development_code_Flatiron_mod5_project_deep_forest_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_Users_flatironschool_Development_code_Flatiron_mod5_project_deep_forest_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Welcome).apply(this, arguments));
  }

  Object(_Users_flatironschool_Development_code_Flatiron_mod5_project_deep_forest_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Welcome, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "welcome-grid",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__["Switch"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__["Route"], {
        path: "/login",
        component: _Login__WEBPACK_IMPORTED_MODULE_9__["default"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__["Route"], {
        path: "/signup",
        component: _Signup__WEBPACK_IMPORTED_MODULE_10__["default"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__["Route"], {
        path: "/",
        component: _WelcomePath__WEBPACK_IMPORTED_MODULE_8__["default"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        },
        __self: this
      })));
    }
  }]);

  return Welcome;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

;

var mapStateToProps = function mapStateToProps(state) {
  return {
    state: state
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_7__["connect"])(mapStateToProps)(Welcome));

/***/ }),

/***/ "./src/components/WelcomePath.js":
/*!***************************************!*\
  !*** ./src/components/WelcomePath.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _LoginSignupButtons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./LoginSignupButtons */ "./src/components/LoginSignupButtons.js");
var _jsxFileName = "/Users/flatironschool/Development/code/Flatiron/mod5/project/deep_forest_client/src/components/WelcomePath.js";




var WelcomePath = function WelcomePath() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "welcome-box centered-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "cream-background-layer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    className: "lead-text centered-text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, "Flatiron Draw & Chat"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_LoginSignupButtons__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])()(WelcomePath));

/***/ }),

/***/ "./src/constants/index.js":
/*!********************************!*\
  !*** ./src/constants/index.js ***!
  \********************************/
/*! exports provided: API_ROOT, CABLE, AUTH_HEADERS, BASIC_HEADERS, HEADERS, PUB_KEY, SUB_KEY, JWT_SECRET, GAME_ID, DRAWING_ID */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "API_ROOT", function() { return API_ROOT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CABLE", function() { return CABLE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AUTH_HEADERS", function() { return AUTH_HEADERS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BASIC_HEADERS", function() { return BASIC_HEADERS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HEADERS", function() { return HEADERS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PUB_KEY", function() { return PUB_KEY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SUB_KEY", function() { return SUB_KEY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JWT_SECRET", function() { return JWT_SECRET; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GAME_ID", function() { return GAME_ID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DRAWING_ID", function() { return DRAWING_ID; });
var API_ROOT = 'http://localhost:3000/api/v1/';
var CABLE = 'ws://localhost:3334/cable';
var AUTH_HEADERS = {
  'Content-Type': 'application/json',
  Accept: 'application/json',
  Authorization: "".concat(localStorage.token)
};
var BASIC_HEADERS = {
  'Content-Type': 'application/json',
  Accept: 'application/json'
};
var HEADERS = {
  'Content-Type': 'application/json',
  Accept: 'application/json',
  Authorization: "".concat(localStorage.token)
};
var PUB_KEY = "pub-c-b19b4550-28e5-4e8b-99df-2320a631698b";
var SUB_KEY = "sub-c-056dc350-4b25-11e9-b0df-968893e54af3";
var JWT_SECRET = "littlefatdogggies";
var GAME_ID = 11;
var DRAWING_ID = 11;

/***/ }),

/***/ "./src/containers/GameContainer.js":
/*!*****************************************!*\
  !*** ./src/containers/GameContainer.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_flatironschool_Development_code_Flatiron_mod5_project_deep_forest_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_flatironschool_Development_code_Flatiron_mod5_project_deep_forest_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_flatironschool_Development_code_Flatiron_mod5_project_deep_forest_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_flatironschool_Development_code_Flatiron_mod5_project_deep_forest_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_flatironschool_Development_code_Flatiron_mod5_project_deep_forest_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../constants */ "./src/constants/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
/* harmony import */ var _components_Canvas__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/Canvas */ "./src/components/Canvas.js");
/* harmony import */ var _ActionCable_Chat__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../ActionCable/Chat */ "./src/ActionCable/Chat.js");
/* harmony import */ var _components_NavBar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/NavBar */ "./src/components/NavBar.js");





var _jsxFileName = "/Users/flatironschool/Development/code/Flatiron/mod5/project/deep_forest_client/src/containers/GameContainer.js";




 // components





var GameContainer =
/*#__PURE__*/
function (_Component) {
  Object(_Users_flatironschool_Development_code_Flatiron_mod5_project_deep_forest_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(GameContainer, _Component);

  function GameContainer() {
    var _getPrototypeOf2;

    var _this;

    Object(_Users_flatironschool_Development_code_Flatiron_mod5_project_deep_forest_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, GameContainer);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_Users_flatironschool_Development_code_Flatiron_mod5_project_deep_forest_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, (_getPrototypeOf2 = Object(_Users_flatironschool_Development_code_Flatiron_mod5_project_deep_forest_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(GameContainer)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _this.fetchGame = function () {
      fetch("".concat(_constants__WEBPACK_IMPORTED_MODULE_7__["API_ROOT"], "games/").concat(_this.props.match.params.id), {
        method: "GET",
        headers: _constants__WEBPACK_IMPORTED_MODULE_7__["AUTH_HEADERS"]
      }).then(function (r) {
        return r.json();
      }).then(_this.props.currentGame);
    };

    _this.fetchMessages = function () {
      fetch("".concat(_constants__WEBPACK_IMPORTED_MODULE_7__["API_ROOT"], "messages"), {
        method: "GET",
        headers: _constants__WEBPACK_IMPORTED_MODULE_7__["AUTH_HEADERS"]
      }).then(function (r) {
        return r.json();
      }).then(_this.props.allMessages);
    };

    return _this;
  }

  Object(_Users_flatironschool_Development_code_Flatiron_mod5_project_deep_forest_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(GameContainer, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.fetchGame();
      this.fetchMessages();
    }
  }, {
    key: "render",
    value: function render() {
      if (!this.props.state.loggedIn) {
        return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_9__["Redirect"], {
          to: "/",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 40
          },
          __self: this
        });
      } else {
        return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["Container"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 44
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_NavBar__WEBPACK_IMPORTED_MODULE_12__["default"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 45
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "game-container",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 46
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "canvas-container",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 47
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_Canvas__WEBPACK_IMPORTED_MODULE_10__["default"], {
          currentGame: this.props.state,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 48
          },
          __self: this
        })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "chat-container",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 50
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_ActionCable_Chat__WEBPACK_IMPORTED_MODULE_11__["default"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 51
          },
          __self: this
        }))));
      }
    }
  }]);

  return GameContainer;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

var mapStateToProps = function mapStateToProps(state) {
  return {
    state: state
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    currentGame: function currentGame(data) {
      return dispatch({
        type: "CUR_GAME",
        payload: data
      });
    },
    allMessages: function allMessages(data) {
      return dispatch({
        type: "MESSAGES",
        payload: data
      });
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_8__["connect"])(mapStateToProps, mapDispatchToProps)(GameContainer));

/***/ }),

/***/ "./src/img sync recursive ^\\.\\/.*\\.png$":
/*!************************************!*\
  !*** ./src/img sync ^\.\/.*\.png$ ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./React App_files/placeholderLogo.3a5787c3.png": "./src/img/React App_files/placeholderLogo.3a5787c3.png",
	"./fossa.png": "./src/img/fossa.png",
	"./glaucus_atlanticus.png": "./src/img/glaucus_atlanticus.png",
	"./logo.png": "./src/img/logo.png",
	"./manedwolf.png": "./src/img/manedwolf.png",
	"./okapi.png": "./src/img/okapi.png",
	"./pencils.png": "./src/img/pencils.png",
	"./pink_fairy_armadillo.png": "./src/img/pink_fairy_armadillo.png",
	"./placeholderLogo.png": "./src/img/placeholderLogo.png"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) { // check for number or string
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return id;
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./src/img sync recursive ^\\.\\/.*\\.png$";

/***/ }),

/***/ "./src/img/React App_files/placeholderLogo.3a5787c3.png":
/*!**************************************************************!*\
  !*** ./src/img/React App_files/placeholderLogo.3a5787c3.png ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/placeholderLogo.3a5787c3.3a5787c3.png";

/***/ }),

/***/ "./src/img/activity-aquarelle-art-587549.jpg":
/*!***************************************************!*\
  !*** ./src/img/activity-aquarelle-art-587549.jpg ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/activity-aquarelle-art-587549.d1148eda.jpg";

/***/ }),

/***/ "./src/img/fossa.png":
/*!***************************!*\
  !*** ./src/img/fossa.png ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAfQAAAH0CAYAAADL1t+KAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAC4jAAAuIwF4pT92AAAAB3RJTUUH4wMbFxUV373eyAAAAB50RVh0Q29tbWVudABjb3B5cmlnaHQgV2lsamFnbyBDb29rdBcuPAAAGnpJREFUeNrt3U2O3DgSBtBUQhsfwIftE/iwfYDezmLQGE/BVSWJfxHB94DZ9bhSFMlPQUnU6wUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACQw6EJAPbz91+vf+789z9/vX5oNYEOwMIw7kWoC3QAgVuQgBfoAIJZsCPQAQS0YEegAwKcL8O4td0Eu0AHEOKBQrRHWwp3gQ5QJsCrhFpLWwt2gQ4QJsCFUp9zoB0FOgEnOwMTfdk50uYCneDVSBQGvX6uL9U/f86NQDdJCXmMDX1F1Y5AF9wCHgGOql2g65wIeQQ4qnaBbjLKONlpG1b1DedLH9EPBHqpkNqhM68+HyaM9efKOdB39BGBLiicO+cv4fnQtvqSfiTQQ4aAyWmPgN/xvPdqd2OEmeN6l/526BA6iHOvr4xuW+MFwS7Qw0zkJiT9ZLd+JcSpOm6r9s3DSTYRmTByPbk/un/6AAeCXaCnO6kmH6oEfWtfVo2z8xit0n+PnU6cSYcdA/+zfm9MYUzW6s9H9ZNkwkHQx1sRALmxYaA/OSkmGwS9IIfWsZetvx+VToLJBpORECdH313Rr6oXiEfGjmDCwURp33TM24I9QaBfaWwTDvQNe2OK3fpbtVXgI2vnMPnAPpUH+QM8cr+rEuxHto5i8oE+k6uxxKzwztL/sgf7kakhTUCYWGtOpNQP8Cx9L3OoH1ka0CSECVWYowqP2C5RjvPI0GgmIUygghwhLtQDB7owx4QpyBHgVdpvdVsckRvIZIQJ0+RKnD65e/+KnluHRoF8AW58MKNf6me58uvQGBA3zI0FhLhQDxnowhwTpj6PEBfqyQNdmGPChBh9Un+smWvHjgcdfUAabAIcevdNfXLN+SkV6FXDvMK3rXcML6/vsFNf1Sf3CvVjdYfM0uEEeN7JxD1wdgpz/XHfUD9WdsjIHU+A5w29GefOpEmkvqs/CvXX6/U6hbnwntnGI867AGfHINcnGV6hZwnzCCH+bzvsekHR0g8so+cbL9pUkDunY8/fMbtzruyMHoiK2Y532s7T6LkvcrW3IHd+x53LY2YHXdEhR01SBlf/tv6sTYV4//PypzYQ6HHHiPlGqF9xzuqkszukEJjv9zZ60v4uvnJW3ajKieGY0UmzPeFsEOUOFOfv+7ZXoQty6lXpZ6UB7N3NuFW7h9jqXkjNulWyw3nQj+vNf1/1gb//ev3T85wfIztr9DA3ePIHjXP4rG2/ajf3eQU5OSv1M/oPnDmRkSPIncOxVfB3VcWsamP3CyuYUqFnDHMDJ2/YOHdrq2gBpSonR5V+Vh9ABk3OIHfe+nvapneeg/j9v7E3g77N/5/30c+VnL077qzOKszrBbnzFS/Mnwa7Pq+PM9/Rs/MKc5OaEI/T5qPbNtKtN0FOhb7T2k/ObINXmAtytK0wJ/P4HLXKdY7owCsHkcETN8Sdn3Xtnm1iEuQwsELP0HENICGu7Z/9W60PzDkH+jx9+lpL3zlbO/OMjmuZPWeQOCe1q/nqq2aCnJHF54hxegpzBDnRLhayHac+TwSnMMcGMMzoXxn6h6qcCH3waZ86NZ+JVoirhlGVM9eIZfczanVuMMUNCm1fL8w//r3dzrGd3qjgdoUe6X1z5rWpSSxvmD+pBLyOZgzMamvtOjDQR+5iozoX5KAq5+N52LV9ey+7n9kGmoE1Psi1ca1JwWqXqjzT+dDmzy9y3iZ5Yf77OXae84a633dtXAjzmoUIHyr06Fu8GmDjglzVtcfV/IovpmVsb3NNzgpVoOvcgnyzY6+4vHe1DQS5+W51297pq87FPceVwR7hyXYntt/kvGuQZ5nksy85Ru5f5ph8Y3fn7wXcPfazyiRiMOw1MFa/py0AVOX0ae/vxrJK/UGgR+7oTmZ7iKnK4/2WFfezjR9zS8RwvxLqzleHQN9xohbktY4/at/S57U18cepQFedC/KFbfDx2O8s72WZ/ASWIN+1Uq+YCb0uaE5hWmfyqfg6Vsv/70/tYZnbWEKoq9ANvrDHXLFz92if74LdpD9+5cBcglDfLNB3CKoRE03VDt27rf40+FeshlQOm4xhLhCEejXHVwNh9fvnmU/WyMm7ciee0W69/sbI83DnfemVFwpZq3JBUGc+qP680J3jO3WZ+EGkIp/7d6LfZ4/yu1TlqNRjOSOfyN2DSCXeb9A/afPvgn3nL0StPl5BLtSFugo9bJDvvL1hj3bq8WpayznovWlJtFWCSP3TtqFCnT87RkxGqyfDDGG+y0TTexBebbfeFdyq7XZXT2LR+qkwV0xVPuetWXhmGqCZf+fTjpZxu8oIKxh3r+hHLdllXZaP+Ft9x5zvxvXuS++W3AcFVI9OlW2JKdrv7bls3WPJ78lkM3KXuywTn6ocoS7QU1c3wvz+IJ35kKL7eapyYvebHfuEQA8YrJnCYuZvjdQu2fdTr3TbRpir0oX6f71NNmMmo9//J8z3mHx//nr9GHl8vf5tYU6V8VZpPlWhF6sIqz4gGH3S7f37fABGmKNSF+gmsdATWK8gX30v+uMk8NVHXEZeKDx5g6HqxYIgZ/dQH/75VHKE+YxX2zJW5Z/d565eOV95CjjS+RLmCHUVepqONDvMqwT56ouSrP1RZY65eE8CfXAH+mwSyrDMLszXtPmVY68Qbl5JY/acXL1KF+iBq6WW965bdiir9tBbxnf6fZhHmLNPqPf6hLhAH9RpWpbJV76OUW2y3bUKjLr8qCpn5/6vQt/Qd09dj+io0ary1qvokc8nzAibilX6qDDP+L0D1p7Xqqtg78wDP/LVYZZju/vU9+jNU3q0VWtwzHoS/sotlZbfkfGTp3d+8w5vLPB8Ttjxou5dNVRHTrhX7tGMmmx6/ZtPft+IAdIr1O62eZRX2nbY7WpUmIu3fUP96njPUFz1XAm05L7ZRUnW7Vp7Dr6VG9u0rjpUfC1t9EOb7FO1736rRaAL8/BhPqJNsn5UZtTk9fE3tv7bM++Xw1cXvl+tqK6+l967Py8P9M8ae/cP1Y+crCMF+awJukdVHi18olYmq5fYPRDH1p9PtcNOzBBaUYlWHAStYZ6hiowQ7qNC16tuexc1PW5TRazSn772HLpCd5V1/WSODIqqS+st7Xe1TXqfl9YL7Nn320deNApzWm8d7lSsuoe+IJhHT0x3rmyjToSrtn6dXY1/90W6HsHe4yKh13ELc3rODVnDekR1/m2gz6qQIz+0kK3irRDmKyrImUF+52/1mrx6THwz34kX5vSe7yJknQo9QIeZdR+61/+vx9ayEUI44pPWKzd6mVWZ9LhdMTrMBTmt83TFQvDMcEIyXT2t/p2V7hfN+MBMywdwVvaJUeHeM8yfHLcwZ3W1rkJPUrGNvvpr+X1R3/uNGO69BvDohw9ntfXIiWzmK4/CnB2CfeQ3Io5Zf6jXoI7+Ss7Tim/GFqBRJ8MVA6/HpjuR27jHRc7Md7+FOavHweq3Qnr8/TPjCVoxsK9W6VE3+4g8Ga64/zXiVbNKVcrMFR9hDn0cVwdWpCo9Q6XeMxSqVuYRKvXKF0pPq5SZ40+YE6X/V6jQQwa6UO/3dyrdMxfgMdpUmFOx768M9F5/+5h59VBtwEeuKCtOhE+vtHdZ4ZjRb79ayu/9JoIwZ2a/n9HfRufreeeHzB5gV5b/Mjz9LsjzHVv1dmx5en3GJjXCHDpU6NGq9AyV+qqK3aSnEpjVX6+Eea+97/Vrqo7N0dl63D1ooR7jAsCkl/+cZrlddPW5jh6vXurXVA71MEvuq11dfs80Kdxd+jTZ1bpAW9FfW7Yx7rFftl4C4+b148ngy1BZCD8ih/nMPttjt7fWqsYT7ajSxz7hnjLQ705QJgkyhHnv/tr7ds6OS+2zPsrEHqE+49m04+kBC3VMCGOWkGft698jzHtU59m3yzXv1BzDGQM97edT79x/znZvnX3D/N9/e+QHTnpOKhXCfNS5/Pjvmn/yjfFs5+yIdAUza0AaWEQO9Kf9dNSX0UZ9UGjXTaHMP7nG8ujbYD37w7vCCXky8XniluhhMHqL4dFf+Mv2+cpd/j7zL7Bm7e1yXjnYz35MpCWJJ7tYRf0yGjXCfNQnWp/8pt79u/Xfi7qV9MzfYs6ht3e1A2q596hyZ2Q/fNI3v+qPV/vr7Pvx3/1/V3zoKeK4NtfsUaXPPM/v1oON2CmvLidmmwDIPzn0+n64/RhqhKZ5Jv64zXSO3pU7ZY9g182JVA1EuH/f8mT7zE9UjngN7eP/hDqRxsJ5pzNn7XgtX4lyr4sRYX33tcsnfXDXfjtz176eX6Dj+vlccdsmw3h6RxpEsyr2Ga8DQe/AvbPMPmoVoOXfnfElq9ax+rTtrAa6UFxdnd+q0K9UFZmq2bsfnVCpE30y2bl/Rtk5MvNKZoUQjXL+VvWB95MDrlgpjX4nF0aNp573c0f91ihPEc9qp95vNAhzY35IoFc+CUKdjAO85wNglSfR2cWIFb2c/bD1ra6Vv/0Y1eCZO7PlTVb0+whfbZu1o9VOY9XW1GvGWevDdE/Hwsq3PN6zJwyVOirtORNi9T56ZdIXjnuF+eoNwla/snmOPLDMg8nDLay8IOi9hL5bsEU6XnPJmDCP1qYRfs975KDJ3omrHx9xg2LWt5izhWPWsddjqVeY/++d/5VfO/zT345yC/o9uqMKdejf954+RX11mbr3bmi7VucZfleWCzRbcn/vnHWyLL9TKWg/u0qfubXp0+XHr5bhV7z323PyF5pEXVmY4Zh1UNkHW+Wn+unXH0b0gzt/a4d3d7MHug/rzOuzPV4J/erfjZYLx+wTUzXUBbpAH9UXnlw87LiilGUMCvQx/XRUez39jSvO33v2gMp8H8QEigtMdrnwyBLmXk8cVKHvcAVqEqW1LzxZyWpZ4t/hYjPb2Nt986qZX8Rb8VtXnbtz1OC6u0Vepo+6qMaZMYn0GBPR7k8aO2QK82y/7Rx5UL2evK3WGalTFa7uD58Ff9SVpKt/O8OmIVbk9gjzO+N8dZ84ozREtmCHJxPX3Q1G/v3v74ylChedd17Ji/YwFDWr3wzOWSegQrC7f07rReuIkPg9+KuFUOTj+fjbzAFjz2XL6k70zwv38p71h1q+/uRKmYoXAld2Y7tTle8Y5lku+IX5nLZZdQ6i9MNz1UE/rdhXNZ7qnGyrAVn6aqUg7PUw44y9DCI/Jf7kt45+ADTDp4XPVX+4ZYlw9layrryZEbSf/RtVnwqefXEya0LOvtW1MM/rvfoHPN0UIMoSjoFLhguOShP9kzkj04RfZU6pvswe0RmtE0d61U1HYfQk9HvfHfEaXLRwWHHLYKe3A6qFeY+vXe5UdJ3RftCsYK++uQE5g/3prahKHyUR5vXDvMfFqzBPEOh/OhEGJdHZQTBWkK+eD3a9j94zzD9rv1GviX53vjKM8fOF6pxSAVjlGFrGmOqt5rw5cmxU2NTsnaUTRGlkX/ZhZUBk2BpZmNe/YHtyXFk2P8p8flJV6KuXPAQ51S8Ysh5jz6XVkaG0e5g/OUcr2izrLZMz84DveaKFNbMvOu9+VKVyX531Gtpnf+fuvDLqGR/nNs7FT8Yl+LNCR7GLG1lDfYfqreeE3/r++mf/RsvqX685ZvZctaIKjbQ1a8Xxdu42IUCUi80d+/joe+NPL7JGT+67blB19bg+np8eF269xmim5XdPuYOL0NJVYfQ98HcP81kB3tI/soS6QAfhXy7Uf6++Vr+PXv3cXgnD6OPhaqgLdOBxqGWb8Fe9iTLyHmnWh7pWn5dsDy1X2Bzq/QKYXEH1DNtRYd6y50SWJ9pnbL9are+q0IHHVXrmifG7B9HuHP/V/zbK607kDNfMlfqh28C6CX6Hh+NmHn+mZfZIr4xFuK0QeSx8dpzRfrMKHSh90VApWFTeefvVDO6hAybwDcJ89bH5DoYKHVSORcIkalsImWfbnLZscewCSaBDqTDfLUhGHe/qLVt3vLDaPcxV6ACqq/IXqtpXoIPqvODxRjzOli+rzaqAhbk+/YSH4kB1OHySj/h7e372tEr/a/2AjcpcoMM2VYwwz/m77Yi214Vq1vMt0IHUk96sINnljYUnxynMY3APHYoFz46T3siPs+zYFz5uy7vLqlP2Z18EOri6736MESa+7F8YW90+7pmr0EGYF574sk3yd0L97tPvT4NcCKrOBTqQourL+pufVteZV2Wqv2a3U5gLdJhYud75/0acQCq+W3/3N7d+8jbqe/k7h3qlYxfosDDoskwm1cK85fc+CfWMnwbNfEw9jz3TcQp0WBQcVcI8+grEygm5WpDv9qZGtuMV6LAg7CqFeYWLFkG+T5BXDXOBDgMnheyTYMuklzHIs73LPiPMR/Th1Ss2lV/Hs1McTA7zDBcCTye9v/96/eNd/Ji/N0KYr27P6u/Wq9BBVd886Xn1SVXe43eO/Ns7bJQj0KGzp5NCtjDf+eloQV6vLSocvyV36Dg5ZH5A7Oqk17KsvtPrbVnC/Oev148oxzlijOy0he1heoY5E0T07UGv3A7YtSrPtGyd/Xf2/E277UevQodBE1al+8pPwzxS9Ve9Us9Ulc9Yydrx4zICHQJVTFXCvEqQV714rP4Q465fihPoINS7/P5/Q1yQ61tRqvSdwvz18pQ7mHhNjinbw6uCz9qlcn9VoQPC3AViiSp95zAX6CAEhfmN4/3ulsKMNlGZC3OBDoJSmOs/Jat0Fzn/5R46BKskBAYtVWjPfRKqvK63S59VoYOwFOZF+s6MTY8i9SthrkIHYdl5Qp+181e28MwQ5hkq8KcXIbtdgAp04PYFh3uWsS64Kny7/s5FkjAX6EDD5CjE14Rgj78VPcxH9Ncd+6VAB0IFGHPCPFso3tmxcNf+ItBBYIT/TTtO0qPDfPa5/+q89rilsHuYv16ecgeVapB2/eojI7u1++owz7h9rTcwVOiwbZjPOp7PnlKu1qY9AmVGe7SGecQVFGGuQgdhvujvVfte/Mxz8l14fbU9bZZbLMJchQ64iCgf5k/e+a94D1qQq9AhZBCZnPbsD3dWKkbupnb132859p593HhRoQNJVZzA74TjleP/+N/0/vetsAh0UI0hyAcGbWt/nRnmNigay5I7LA5zy4fCfIcw199V6CC0tEmJ3zwyzEe18YhtVlXoAh3KVefCfJ+2iPSUec8w//2/G1HtW6IX6CDMg1dILmbiVuVP+8idYEegQ4hJN/NGGKqdOe2XcXm9Zxs9/X65/irQQeAlOrbdH3ZrbYs7F5Wf/bejz8HHUBfMAh3CVedZw8yEWqs/XQ1L512gAzcnxyufgXRvkcqrDS4qBDqUmchMXGOr0grhVuni7spF7Ij2c2Es0GHpxG8SEuLRjvFun/zsv/dqmUAHVOdbhvguF3eq8/kOTQBjJ/WIk9DsiirqRFylHXpt+9prpcmtijXs5Q6qse3a4M5nS6ue44/H36s9hLkKHcpVah4Ai9UGq+/zznj3e/VxCHOBDuUm+8wTUKXKtcexZNodcGWoC3OBDuUCvdIENHMHtMgXIy3/7oqtV2euOoz8e8JcoINAd96WV5727P9zW0T68pxAB8FgEioWVL3vC1e43dCr+jYmBDosn/zuLruauHJVmiO+3x25H1w5lt73xo2JuWwsA5QP71kBEznAnv62p5W6MBfokJLJK154t56Xu7+xch+4sm+7sSDQIXTo+IraPgGO9hXoIIwoFuCqczLyUBy8cr6atGOIz2hvYY4KHRDgycJbmKNCBwG13WReeUcwT3GjQodN+aZ1nfZzIYcKHTYOsIqT+o57ctuGFIEOG4e6j6/UqGSFOQIdNg/17BO8z1wKcwQ6qNCTTvgjQrxKBS7IEeiweZhHD8RdQnzGJ1RBoINAnxoe1b/rXvHdd+jFa2uwKMwj/vaM74MLcxDoEDKIZwfLyL+X5SJJmFOBJXd4XX+qPepHR1ZvjpJ1dUOQo0KHTbV8TvVO6P3+6dZI4VXly3OCHBU6bFydf/f/GVFVX/03P/u3WoIrQ3j//PX6YetWUKFDuZWDasH91XH9/dfrH2EOAh2WT/5Xlu9HyPYkeY/fK8gR6MDwgHiybBw9zEc/1CfMQaBDyBD4LNRHPBxXNbhBoAOvbEEaNbwFNgh0QHAvORYQ6KBK3yLAo4e30AaBDtuF+nevgVVbSYCd2FgGLoTZjPAYsTlMj2MX4pDDWxNArdCr6Oev1w9hDip06Bbas79MtnJl4GnlXP2b7BCVe+jwW3isqsSzL3sLcRDokCrUd3o/feYDdEIc2llyh4eBdaWib32nO1LQCXEQ6FA21FvCa/U9+xEhLcRBoEPpQI8SfiuOSYiDQIetQ71XEApxEOhA8kCM+rlUoD9PuUMwWcJciIMKHVTpgwPy6e8V0qBCBwIE6N0gF+CgQgdVetKqXIiDQAeBvqhS/27zGWEOCHQIEuqjCXMQ6EDyYBfmINCBxEEvyEGgA8lDXZiDQAeSh7owB4EOJA91YQ4CHUgc6oIcBDqQPNiFOSDQIXG4C3JAoEPikBfkAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA+fwHHlOuOt1/hF4AAAAASUVORK5CYII="

/***/ }),

/***/ "./src/img/glaucus_atlanticus.png":
/*!****************************************!*\
  !*** ./src/img/glaucus_atlanticus.png ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "./src/img/logo.png":
/*!**************************!*\
  !*** ./src/img/logo.png ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/logo.0e9c8d3d.png";

/***/ }),

/***/ "./src/img/manedwolf.png":
/*!*******************************!*\
  !*** ./src/img/manedwolf.png ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "./src/img/okapi.png":
/*!***************************!*\
  !*** ./src/img/okapi.png ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "./src/img/pencils.png":
/*!*****************************!*\
  !*** ./src/img/pencils.png ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/pencils.1bb104b7.png";

/***/ }),

/***/ "./src/img/pink_fairy_armadillo.png":
/*!******************************************!*\
  !*** ./src/img/pink_fairy_armadillo.png ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "./src/img/placeholderLogo.png":
/*!*************************************!*\
  !*** ./src/img/placeholderLogo.png ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/placeholderLogo.3a5787c3.png";

/***/ }),

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/css-loader??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../node_modules/css-loader??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css", function() {
		var newContent = __webpack_require__(/*! !../node_modules/css-loader??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.css */ "./src/index.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./App */ "./src/App.js");
/* harmony import */ var _serviceWorker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./serviceWorker */ "./src/serviceWorker.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! redux-thunk */ "./node_modules/redux-thunk/es/index.js");
/* harmony import */ var _reducers_initReducer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./reducers/initReducer */ "./src/reducers/initReducer.js");
/* harmony import */ var react_actioncable_provider__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-actioncable-provider */ "./node_modules/react-actioncable-provider/lib/index.js");
/* harmony import */ var react_actioncable_provider__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_actioncable_provider__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./constants */ "./src/constants/index.js");
var _jsxFileName = "/Users/flatironschool/Development/code/Flatiron/mod5/project/deep_forest_client/src/index.js";












var composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || redux__WEBPACK_IMPORTED_MODULE_6__["compose"];
var store = Object(redux__WEBPACK_IMPORTED_MODULE_6__["createStore"])(_reducers_initReducer__WEBPACK_IMPORTED_MODULE_9__["default"], composeEnhancers(Object(redux__WEBPACK_IMPORTED_MODULE_6__["applyMiddleware"])(redux_thunk__WEBPACK_IMPORTED_MODULE_8__["default"])));
react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_actioncable_provider__WEBPACK_IMPORTED_MODULE_10__["ActionCableProvider"], {
  url: _constants__WEBPACK_IMPORTED_MODULE_11__["CABLE"],
  __source: {
    fileName: _jsxFileName,
    lineNumber: 23
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_redux__WEBPACK_IMPORTED_MODULE_7__["Provider"], {
  store: store,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 24
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__["BrowserRouter"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 25
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_App__WEBPACK_IMPORTED_MODULE_3__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 26
  },
  __self: undefined
})))), document.getElementById('root')); // If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

_serviceWorker__WEBPACK_IMPORTED_MODULE_4__["unregister"]();

/***/ }),

/***/ "./src/reducers/initReducer.js":
/*!*************************************!*\
  !*** ./src/reducers/initReducer.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_flatironschool_Development_code_Flatiron_mod5_project_deep_forest_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _Users_flatironschool_Development_code_Flatiron_mod5_project_deep_forest_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread.js");


var initialState = {
  userState: {
    jwt: "",
    user: {
      id: 0,
      name: "",
      pronouns: "",
      user_games: [],
      messages: [],
      games: []
    }
  },
  loggedIn: false,
  newGame: {},
  currentGame: {
    messages: []
  },
  drawing: {
    id: 0,
    draw: false,
    plots: [],
    color: "#1b1b1b",
    lineWidth: 5
  },
  messages: []
};

var initReducer = function initReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case "AUTH_USER":
      return Object(_Users_flatironschool_Development_code_Flatiron_mod5_project_deep_forest_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, state, {
        userState: action.payload,
        loggedIn: true
      });

    case "SHOW_USER":
      return Object(_Users_flatironschool_Development_code_Flatiron_mod5_project_deep_forest_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, state, {
        userState: action.payload,
        loggedIn: true
      });

    case "NEW_PRONOUNS":
      return Object(_Users_flatironschool_Development_code_Flatiron_mod5_project_deep_forest_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, state, {
        userState: Object(_Users_flatironschool_Development_code_Flatiron_mod5_project_deep_forest_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, state.userState, {
          user: Object(_Users_flatironschool_Development_code_Flatiron_mod5_project_deep_forest_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, state.userState.user, {
            pronouns: action.payload.pronouns
          })
        })
      });

    case "NEW_AVATAR":
      return Object(_Users_flatironschool_Development_code_Flatiron_mod5_project_deep_forest_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, state, {
        userState: Object(_Users_flatironschool_Development_code_Flatiron_mod5_project_deep_forest_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, state.userState, {
          user: Object(_Users_flatironschool_Development_code_Flatiron_mod5_project_deep_forest_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, state.userState.user, {
            avatar: action.payload
          })
        })
      });

    case "LOGOUT":
      return {
        initialState: initialState
      };

    case "LOAD_GAMES":
      return Object(_Users_flatironschool_Development_code_Flatiron_mod5_project_deep_forest_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, state, {
        games: action.payload
      });

    case "ADD_GAME":
      return Object(_Users_flatironschool_Development_code_Flatiron_mod5_project_deep_forest_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, state, {
        newGame: action.payload
      });

    case "CUR_GAME":
      return Object(_Users_flatironschool_Development_code_Flatiron_mod5_project_deep_forest_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, state, {
        currentGame: action.payload
      });

    case "MESSAGES":
      return Object(_Users_flatironschool_Development_code_Flatiron_mod5_project_deep_forest_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, state, {
        messages: action.payload
      });

    case "UP_MSG":
      console.log("UP_MSG", action.payload);
      return Object(_Users_flatironschool_Development_code_Flatiron_mod5_project_deep_forest_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, state, {
        messages: [].concat(Object(_Users_flatironschool_Development_code_Flatiron_mod5_project_deep_forest_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(state.messages), [action.payload])
      });

    case "CABLE_DRAW":
      return Object(_Users_flatironschool_Development_code_Flatiron_mod5_project_deep_forest_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, state, {
        drawing: action.payload
      });

    case "GET_DRAW":
      return Object(_Users_flatironschool_Development_code_Flatiron_mod5_project_deep_forest_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, state, {
        drawing: Object(_Users_flatironschool_Development_code_Flatiron_mod5_project_deep_forest_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, state.drawing, {
          id: action.payload
        })
      });

    case "START_DRAW":
      return Object(_Users_flatironschool_Development_code_Flatiron_mod5_project_deep_forest_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, state, {
        drawing: Object(_Users_flatironschool_Development_code_Flatiron_mod5_project_deep_forest_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, state.drawing, {
          draw: true
        })
      });

    case "END_DRAW":
      return Object(_Users_flatironschool_Development_code_Flatiron_mod5_project_deep_forest_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, state, {
        drawing: Object(_Users_flatironschool_Development_code_Flatiron_mod5_project_deep_forest_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, state.drawing, {
          draw: false,
          plots: []
        })
      });

    case "COLOR":
      return Object(_Users_flatironschool_Development_code_Flatiron_mod5_project_deep_forest_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, state, {
        drawing: Object(_Users_flatironschool_Development_code_Flatiron_mod5_project_deep_forest_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, state.drawing, {
          color: action.payload
        })
      });

    case "SIZE":
      return Object(_Users_flatironschool_Development_code_Flatiron_mod5_project_deep_forest_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, state, {
        drawing: Object(_Users_flatironschool_Development_code_Flatiron_mod5_project_deep_forest_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, state.drawing, {
          lineWidth: parseInt(action.payload)
        })
      });

    case "PLOTS":
      return Object(_Users_flatironschool_Development_code_Flatiron_mod5_project_deep_forest_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, state, {
        drawing: Object(_Users_flatironschool_Development_code_Flatiron_mod5_project_deep_forest_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, state.drawing, {
          plots: action.payload
        })
      });

    default:
      return state;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (initReducer);

/***/ }),

/***/ "./src/serviceWorker.js":
/*!******************************!*\
  !*** ./src/serviceWorker.js ***!
  \******************************/
/*! exports provided: register, unregister */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "register", function() { return register; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unregister", function() { return unregister; });
// This optional code is used to register a service worker.
// register() is not called by default.
// This lets the app load faster on subsequent visits in production, and gives
// it offline capabilities. However, it also means that developers (and users)
// will only see deployed updates on subsequent visits to a page, after all the
// existing tabs open on the page have been closed, since previously cached
// resources are updated in the background.
// To learn more about the benefits of this model and instructions on how to
// opt-in, read https://bit.ly/CRA-PWA
var isLocalhost = Boolean(window.location.hostname === 'localhost' || // [::1] is the IPv6 localhost address.
window.location.hostname === '[::1]' || // 127.0.0.1/8 is considered localhost for IPv4.
window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));
function register(config) {
  if (false) { var publicUrl; }
}

function registerValidSW(swUrl, config) {
  navigator.serviceWorker.register(swUrl).then(function (registration) {
    registration.onupdatefound = function () {
      var installingWorker = registration.installing;

      if (installingWorker == null) {
        return;
      }

      installingWorker.onstatechange = function () {
        if (installingWorker.state === 'installed') {
          if (navigator.serviceWorker.controller) {
            // At this point, the updated precached content has been fetched,
            // but the previous service worker will still serve the older
            // content until all client tabs are closed.
            console.log('New content is available and will be used when all ' + 'tabs for this page are closed. See https://bit.ly/CRA-PWA.'); // Execute callback

            if (config && config.onUpdate) {
              config.onUpdate(registration);
            }
          } else {
            // At this point, everything has been precached.
            // It's the perfect time to display a
            // "Content is cached for offline use." message.
            console.log('Content is cached for offline use.'); // Execute callback

            if (config && config.onSuccess) {
              config.onSuccess(registration);
            }
          }
        }
      };
    };
  }).catch(function (error) {
    console.error('Error during service worker registration:', error);
  });
}

function checkValidServiceWorker(swUrl, config) {
  // Check if the service worker can be found. If it can't reload the page.
  fetch(swUrl).then(function (response) {
    // Ensure service worker exists, and that we really are getting a JS file.
    var contentType = response.headers.get('content-type');

    if (response.status === 404 || contentType != null && contentType.indexOf('javascript') === -1) {
      // No service worker found. Probably a different app. Reload the page.
      navigator.serviceWorker.ready.then(function (registration) {
        registration.unregister().then(function () {
          window.location.reload();
        });
      });
    } else {
      // Service worker found. Proceed as normal.
      registerValidSW(swUrl, config);
    }
  }).catch(function () {
    console.log('No internet connection found. App is running in offline mode.');
  });
}

function unregister() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.ready.then(function (registration) {
      registration.unregister();
    });
  }
}

/***/ }),

/***/ 0:
/*!**********************************************************************************!*\
  !*** multi ./node_modules/react-dev-utils/webpackHotDevClient.js ./src/index.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /Users/flatironschool/Development/code/Flatiron/mod5/project/deep_forest_client/node_modules/react-dev-utils/webpackHotDevClient.js */"./node_modules/react-dev-utils/webpackHotDevClient.js");
module.exports = __webpack_require__(/*! /Users/flatironschool/Development/code/Flatiron/mod5/project/deep_forest_client/src/index.js */"./src/index.js");


/***/ })

},[[0,"runtime~main",0]]]);
//# sourceMappingURL=main.chunk.js.map