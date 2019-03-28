webpackHotUpdate("main",{

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





var _jsxFileName = "/Users/flatironschool/Development/code/Flatiron/mod5/project/deep_forest_client/src/components/Profile.js";




 // import GameList from './GameList';
// import Cable from '../ActionCable/Cable'

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
            lineNumber: 66
          },
          __self: this
        });
      } else {
        return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["Container"], {
          id: "profile-container",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 70
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
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
        }, "Which animal do you feel like today?"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["List"], {
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
          alt: "pink fairy armadillo",
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
        }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("br", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 96
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("br", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 97
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("br", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 98
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
            lineNumber: 99
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

/***/ })

})
//# sourceMappingURL=main.918e114c805519d1c203.hot-update.js.map