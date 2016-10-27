(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("IBMChat", [], factory);
	else if(typeof exports === 'object')
		exports["IBMChat"] = factory();
	else
		root["IBMChat"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ((function(modules) {
	// Check all modules for deduplicated modules
	for(var i in modules) {
		if(Object.prototype.hasOwnProperty.call(modules, i)) {
			switch(typeof modules[i]) {
			case "function": break;
			case "object":
				// Module can be created from a template
				modules[i] = (function(_m) {
					var args = _m.slice(1), fn = modules[_m[0]];
					return function (a,b,c) {
						fn.apply(this, [a,b,c].concat(args));
					};
				}(modules[i]));
				break;
			default:
				// Module is a copy of another module
				modules[i] = modules[modules[i]];
				break;
			}
		}
	}
	return modules;
}([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	/**
	* (C) Copyright IBM Corp. 2016. All Rights Reserved.
	*
	* Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except
	* in compliance with the License. You may obtain a copy of the License at
	*
	* http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software distributed under the License
	* is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express
	* or implied. See the License for the specific language governing permissions and limitations under
	* the License.
	*/
	
	__webpack_require__(1);
	
	var bootstrap = __webpack_require__(4);
	
	/**
	 * @namespace IBMChat
	 */
	
	var IBMChat = {
		/**
		 * Generate the chat widget into an element.
		 * @function init
		 * @memberof IBMChat
		 * @param {Object} config
		 * @param {string} config.el - Takes a string representing the ID of an html element to be rendered to OR a selected element
		 * @param {string} config.botID - The unique identifier of your Virtual Agent.
		 * @param {string} config.userID - A hashed non-identifiable (e.g. not a users email address or public user id) unique ID used for tracking in the Engagement Metrics dashboard.
		 * @param {string} config.baseURL=https://api.ibm.com/virtualagent/run/api/v1/ - optional: specifies a different bot hosting server. The most common usecase for this param is to point the widget to a server that will add X-IBM-Client-Id and X-IBM-Client-Secret headers to the request.
		 * @param {string} config.XIBMClientID - optional: Your IBMClientID... this should not be made public in a public environment. Including this will add X-IBM-Client-Id as a header to your request.
		 * @param {string} config.XIBMClientSecret - optional: Your IBMClientSecret... this should not be made public in a public environment. Including this will add X-IBM-Client-Secret as a header to your request.
		 * @param {Function} config.errorHandler - optional: A function that takes an error object as a param if there is a problem with communicating with your Virtual Agent. By default, if an error is received, the user is escalated to a live agent. You may, however, want to handle some errors differently (401 for instance)
		 * @param {Object} config.errorHandlerContext - optional: A "this" value for the errorHanlder.
		 * @param {Object} config.styles - optional: Override default styling.
		 * @param {string} config.styles.background=rgba(61,61,61,1) - optional: rgba(X, X, X, X) or hex code for background color
		 * @param {string} config.styles.text=#ffffff - optional: rgba(X, X, X, X) or hex code for main text color
		 * @param {string} config.styles.link=#ffffff - optional: rgba(X, X, X, X) or hex code for color of links in text
		 * @param {string} config.styles.secondaryBackground=rgba(70,70,70,1) - optional: rgba(X, X, X, X) or hex code for background color of chat bubbles and other secondary info
		 * @param {string} config.styles.secondaryText=rgba(247,247,247,1) - optional: rgba(X, X, X, X) or hex code for color of chat bubble text and other secondary info
		 * @param {string} config.styles.inputBackground=rgba(70,70,70,1) - optional: rgba(X, X, X, X) or hex code for background color of input elements in forms
		 * @param {string} config.styles.inputText=rgba(247,247,247,1) - optional: rgba(X, X, X, X) or hex code for color of input text in forms
		 * @param {string} config.styles.accentText=#ffffff - optional: rgba(X, X, X, X) or hex code for text colors to be used in conjunction with accentBackground e.g. button text
		 * @param {string} config.styles.accentBackground=rgba(175,110,232,1) - optional: rgba(X, X, X, X) or hex code for accent colors used by the chat application e.g. buttons
		 * @param {string} config.styles.errorText=#ffffff - optional: rgba(X, X, X, X) or hex code for text colors to be used in conjunction with errorBackground e.g. button text
		 * @param {string} config.styles.errorBackground=rgba(239,62,58,1) - optional: rgba(X, X, X, X) or hex code for error colors used by the chat application e.g. validation buttons
		 * @example
		 * IBMChat.init({
		 *  el: 'my_div',
		 *  botID: 'xxxxxxxxxxxxxx'
		 *  styles: {
		 *    background: "#000000"
		 *  }
		 * }).then(function(){
		 *     console.log('initialize');
		 * });
		 * //or
		 * var el = document.querySelector('.my-widget-container');
		 * IBMChat.init({
		 *  el: el,
		 *  botID: 'xxxxxxxxxxxxxx'
		 *  styles: {
		 *    background: "#000000"
		 *  }
		 * }).then(function(){
		 *     console.log('initialize');
		 * });
		 * @returns {Promise} Returns: A promise so you can call functions after the widget has been initialized.
		 */
		init: bootstrap.init,
		/**
		 * Restart the chat widget. The same chat widget is rendered in the same html element as was specified in the init method.
		 * @function restart
		 * @memberof IBMChat
		 * @example
		 * IBMChat.restart().then(function(){
		 *     console.log('restarted');
		 * });
		 * @returns {Promise} Returns: A promise so you can call functions after the widget has been initialized.
		 */
		restart: bootstrap.restart,
		/**
		 * Destroy the chat widget and restore the original HTML content. Useful if the chat widget is displayed in a modal, for example, and you want it to go away when the modal is closed.
		 * @function destroy
		 * @memberof IBMChat
		 * @example
		 * IBMChat.destroy().then(function(){
		 *     console.log('destroyed');
		 * });
		 * @returns {Promise} Returns: A promise so you can call functions after the widget has been destroyed.
		 */
		destroy: bootstrap.destroy,
	
		/**
		 * Send a message to the chat widget from outside the chat widget. This message will be displayed in the interface.
		 * @function send
		 * @memberof IBMChat
		 * @param {string} message - A message you want to send to the chat widget.
		 * @returns {IBMChat} - Returns IBMChat for chaining.
		 * @example
		 * IBMChat.send('Hello world.');
		 */
		send: function(message) {
			bootstrap.send(message);
			return IBMChat;
		},
	
		/**
		 * Mock receiving a message to the chat widget from outside the chat widget.
		 * @function receive
		 * @memberof IBMChat
		 * @param {string} message - A message you want to show as received in the chat widget.
		 * @returns {IBMChat} - Returns IBMChat for chaining.
		 * @example
		 * IBMChat.receive('Hello world.');
		 */
		receive: function(message) {
			bootstrap.receive(message);
			return IBMChat;
		},
	
		/**
		 * Send a message to the chat widget from outside the chat widget. This message will be displayed in the interface, but will not actually get sent to the server.
		 * @function sendMock
		 * @memberof IBMChat
		 * @param {string} message - A message you want to pretend to send to the chat widget.
		 * @returns {IBMChat} - Returns IBMChat for chaining.
		 * @example
		 * IBMChat.sendMock('Hello world.');
		 */
		sendMock: function(message) {
			bootstrap.sendMock(message);
			return IBMChat;
		},
	
		/**
		 * Send a message to the chat widget from outside the chat widget. This message will NOT be displayed in the interface.
		 * @function sendSilently
		 * @memberof IBMChat
		 * @param {string} message - A message you want to send to the chat widget, but not de displayed in the interface.
		 * @returns {IBMChat} - Returns IBMChat for chaining.
		 * @example
		 * IBMChat.sendSilently('Hello world.');
		 */
		sendSilently: function(message) {
			bootstrap.sendSilently(message);
			return IBMChat;
		},
	
		/**
		 * Register a custom layout with the chat widget. Call registerLayout() before you call init().
		 * @function registerLayout
		 * @memberof IBMChat
		 * @param {string} layout - The name of the layout your bot will provide when it is triggered to render a layout.
		 * @param {function} init - A function that runs one time, when the chat widget is bootstrapped. Be sure to subscribe to the "layout:YOUR_LAYOUT_NAME" event in this function.
		 * @returns {IBMChat} - Returns IBMChat for chaining.
		 * @example
		 * var PlumberBrothers = require('../plumber-brothers-game');
		 * var config = {};
		 *
		 * function initGame() {
		 *   IBMChat.subscribe('layout:plumber-brothers-game', function(obj) {
		 *     var uuid = obj.uuid;
		 *     var parentElement = obj.element;
		 *     var layoutElement = obj.layoutElement;
		 *     var msgElement = obj.msgElement;
		 *     var message = obj.message;
		 *     var data = obj.data;
		 *     msgElement.textContent = 'Loading Plumber Brothers!';
		 *     var brothers = new PlumberBrothers();
		 *     brothers.render(layoutElement, data).then(function() {
		 *       msgElement.textContent = 'Enjoy your game of Plumber Brothers!';
		 *     });
		 *   }
		 * });
		 *
		 * IBMChat.registerLayout('plumber-brothers-game', initGame);
		 * IBMChat.init(config);
		 */
		registerLayout: function(layout, init) {
			bootstrap.registerLayout(layout, init);
			return IBMChat;
		},
	
		/**
		 * Override how inputs into the chat text box are handled. e.g. you may wish to send messages to your live agent instead of to your virtual agent.
		 * @function enableCustomInputHandler
		 * @memberof IBMChat
		 * @param {Object} config
		 * @param {function} config.callback - A function that receives a message and resolve and reject functions as params
		 * @param {boolean} config.context - (optional) A value for "this" in your callback function
		 * @returns {IBMChat} - Returns IBMChat for chaining.
		 * @example
		 * IBMChat.enableCustomInputHandler({
		 *   callback: function(message, resolve, reject) {
		 *     //do something like send the message to your live customer service rep
		 *     IBMChat.receive('A message from your live customer service rep');
		 *     resolve(); // gets rid of loading spinner and allows the chat text box to accept another message
		 *     // reject(error);
		 *  }
		 * });
		 */
	
		enableCustomInputHandler: function(config) {
			bootstrap.enableCustomInputHandler(config);
			return IBMChat;
		},
	
		/**
		 * Return chat input boxes handling to the default provided handler.
		 * @function disableCustomInputHandler
		 * @memberof IBMChat
		 * @returns {IBMChat} - Returns IBMChat for chaining.
		 * @example
		 * IBMChat.disableCustomInputHandler();
		 */
	
		disableCustomInputHandler: function() {
			bootstrap.disableCustomInputHandler();
			return IBMChat;
		},
	
		/**
		 * Set focus to the chat text box. Useful if you want users to be able to just start typing into the text box without having to click in the text box first to set focus.
		 * @function focusInput
		 * @memberof IBMChat
		 * @returns {IBMChat} - Returns IBMChat for chaining.
		 * @example
		 * IBMChat.focusInput();
		 */
	
		focusInput: function() {
			bootstrap.focusInput();
			return IBMChat;
		},
		/**
		 * Prevent users from submitting messages in the chat text box. Useful when you want the user to interact with a layout instead.
		 * @function disableInput
		 * @memberof IBMChat
		 * @returns {IBMChat} - Returns IBMChat for chaining.
		 * @example
		 * IBMChat.disableInput();
		 */
		disableInput: function() {
			bootstrap.disableInput();
			return IBMChat;
		},
	
		/**
		 * Enable users to submit messages in the chat text box. Useful when you want users to be able to return to adding messages to the chat text box after interacting with a layout.
		 * @function enableInput
		 * @returns {IBMChat} - Returns IBMChat for chaining.
		 * @example
		 * IBMChat.enableInput();
		 */
		enableInput: function() {
			bootstrap.enableInput();
			return IBMChat;
		},
	
		/**
		 * Subscribe to an IBMChat event.
		 * @function subscribe
		 * @memberof IBMChat
		 * @param {string} eventName - Takes a string representing the name of the event
		 * @param {function} callback - function to run when event is called
		 * @param context - optional: value of "this" in the function
		 * @returns {Object} - Returns object with a .remove function to destroy the subscription
		 * @example
		 * var mySubscription = IBMChat.subscribe('the-end-of-the-world', function(message) {
		 *   console.log(message);
		 *   mySubscription.remove(); // remove subscription
		 * });
		 */
		subscribe: bootstrap.subscribe,
		/**
		 * Publish an IBMChat event.
		 * @function publish
		 * @memberof IBMChat
		 * @param {string} eventName - A string that represents the name of the event data
		 * @param data - Data to pass to the callback function of any subscribed functions. Accepts any data type.
		 * @returns {IBMChat} - Returns IBMChat for chaining.
		 * @example
		 * IBMChat.publish('the-end-of-the-world', 'panic!');
		 */
		publish: function(eventName, data) {
			bootstrap.publish(eventName, data);
			return IBMChat;
		},
	
		/**
		 * @namespace profile
		 * @memberof IBMChat
		 */
		profile: {
			/**
			* Get an item from the user profile based on key.
			* @memberof IBMChat.profile
			* @function get
			* @param {string} key - The named key of the value you are accessing.
			* @example
			* IBMChat.profile.get('first_name');
			* @returns {Any} Returns: the value of the key in the profile map.
			*/
			get: bootstrap.profile.get,
			/**
			* Set an item from the user profile based on key.
			* @memberof IBMChat.profile
			* @function set
			* @param {string} key - The named key of the value you are setting.
			* @param {string} value - The value you are setting.
			* @returns {IBMChat.profile} - Returns IBMChat.profile for chaining.
			* @example
			* IBMChat.profile.set('first_name', 'john');
			*/
			set: bootstrap.profile.set,
			/**
			* See if an item from the user profile exists based on key.
			* @memberof IBMChat.profile
			* @function has
			* @param {string} key - The named key of the value you are checking the existance of.
			* @example
			* IBMChat.profile.has('first_name');
			* @returns {Boolean} - Boolean indicating if the key exists.
			*/
			has: bootstrap.profile.has,
			/**
			* Clear the entire user profile.
			* @memberof IBMChat.profile
			* @function clear
			* @returns {IBMChat.profile} - Returns IBMChat.profile for chaining.
			* @example
			* IBMChat.profile.clear();
			*/
			clear: bootstrap.profile.clear,
			/**
			* Delete an item from the user profile based on key.
			* @memberof IBMChat.profile
			* @function delete
			* @returns {IBMChat.profile} - Returns IBMChat.profile for chaining.
			* @param {string} key - The named key of the value you are deleting.
			* @example
			* IBMChat.profile.delete('first_name');
			*/
			delete: bootstrap.profile.delete,
			/**
			* Iterate over the profile.
			* @memberof IBMChat.profile
			* @function forEach
			* @param {function} callback - The function you are calling on each item in the profile object. This function is passed key as the first argument and value as the second argument.
			* @param {Object} this - (optional) The context you wish to call the callback in.
			* @returns {IBMChat.profile} - Returns IBMChat.profile for chaining.
			* @example
			* IBMChat.profile.forEach(function(key, value) {
			*   console.log(key, value);
			* });
			*/
			forEach: bootstrap.profile.forEach
		},
	
		/**
		 * @ignore
		 */
		currentSubscriptions: bootstrap.currentSubscriptions,
		/**
		* @ignore
		*/
		playback: bootstrap.playback,
	
		/**
		* @ignore
		*/
		state: bootstrap.state,
	
		/**
		 * Turns on a whole bunch of verbose console.log statements!
		 * @function debug
		 * @memberof IBMChat
		 * @returns {IBMChat} - Returns IBMChat for chaining.
		 * @example
		 * IBMChat.debug()
		 */
		debug: function() {
			bootstrap.debug();
			return IBMChat;
		}
	
	};
	
	
	module.exports = IBMChat;


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(2);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(3)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/raw-loader/index.js!./styles.css", function() {
				var newContent = require("!!./../node_modules/raw-loader/index.js!./styles.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = ".IBMChat-outer-container {\n\tmax-width: 768px;\n  min-width: 288px;\n  margin: 0 auto 0 auto;\n  border: none;\n\tmin-height:100px;\n  height: 100%;\n  box-sizing: border-box;\n\tpadding:0;\n\tdisplay:table;\n\twidth:100%;\n\ttext-align: left;\n}\n\n\n/* Agent Component */\n\n.IBMChat-inner-container {\n\tdisplay:table-cell;\n\theight:100%;\n\tmargin: 0;\n\tpadding: 0 8px 0 8px;\n\tvertical-align: bottom;\n}\n\n/* Chat Component */\n\n.IBMChat-chat-container {\n\tdisplay:table-row;\n\tmargin: 0;\n\tpadding:\n}\n\n/* Messages Component */\n\n.IBMChat-messages {\n\toverflow-y: auto;\n\toverflow-x: hidden;\n\theight:auto;\n}\n\n.IBMChat-messages label {\n\tdisplay:block;\n\tfont-weight:bold;\n\ttext-transform: capitalize;\n\tpadding-bottom:0.25em;\n}\n\n.IBMChat-messages input {\n\tborder-radius: 0;\n\tborder: 0;\n\tpadding:0.25em;\n}\n\n.IBMChat-messages button {\n\tbackground: none;\n\tborder: 0;\n\tcolor: inherit;\n\tfont: inherit;\n\tline-height: normal;\n\toverflow: visible;\n\tpadding: 0;\n\t-webkit-appearance: button; /* for input */\n\t-webkit-user-select: none; /* for button */\n\t-moz-user-select: none;\n\t-ms-user-select: none;\n\tborder-radius: 2em;\n\tcursor: pointer;\n\tline-height: 2.5em;\n\tmargin:0;\n}\n\n.IBMChat-messages button[disabled=\"true\"] {\n\tcursor: default;\n  opacity:.7;\n}\n\n.IBMChat-messages button::-moz-focus-inner {\n\tborder: 0;\n\tpadding: 0;\n}\n\n/* WatsonMessage Component */\n\n.IBMChat-watson-message-container {\n\tmargin: 1em 0 1em 0;\n}\n\n.IBMChat-watson-message {\n\tmin-height: 1em;\n\tmargin:1em 2em 1em 0;\n\tpadding: 0.1em 0.1em 0.1em 1em;\n}\n\n.IBMChat-watson-layout {\n\tmargin: 0 1em 0 1em;\n}\n\n.IBMChat-disabled-layout {\n\topacity: 0.7;\n}\n\n/* UserMessage Component */\n\n.IBMChat-user-message-container {\n  margin: 1em 0 1em 2em;\n}\n\n.IBMChat-user-message {\n  padding:1em;\n\tmargin:0 1em 0 0;\n\tborder-radius: 0.5em;\n}\n\n/* Input Component */\n\n.IBMChat-input-container {\n\tdisplay:table-row;\n\theight:72px;\n\tmargin: 0;\n\tpadding: 0;\n}\n\n.IBMChat-input-form {\n\tdisplay:table-cell;\n\tposition:relative;\n\theight: 24px;\n\tpadding:24px 24px 0 24px;\n}\n\n.IBMChat-chat-textbox {\n  border: none;\n\tborder-radius: 0;\n  color: inherit;\n  background: transparent;\n  font-size:1em;\n  margin:0;\n  padding:0 0 3px 0;\n  width:100%;\n}\n\n.IBMChat-chat-textbox[disabled='disabled'] {\n\topacity:0.5;\n}\n\n.IBMChat-input-form ::-webkit-input-placeholder {\n\topacity:1;\n}\n\n.IBMChat-chat-textbox:focus {\n  outline: none;\n  padding:0 0 2px 0;\n}\n\n/* validation error message */\n.IBMChat-validation-error {\n\tpadding: 0.25em;\n\tfont-size: 0.9em;\n}\n\n/* Spinner */\n.IBMChat-input-loading {\n\tz-index: 2;\n\tposition:absolute;\n\tright: 16px;\n\ttop: 15px;\n\theight:32px;\n\twidth:32px;\n}\n\n.IBMChat-ibm-spinner-start {\n\topacity:0;\n}\n\n.IBMChat-ibm-spinner {\n\tfill: transparent;\n\tstroke-width: 3;\n\tstroke-linecap: \"butt\";\n\tstroke-dasharray: 1;\n\tstroke-dashoffset: 1;\n}\n\n/* initial rotation and stroke animation and infinite rotation*/\n.IBMChat-init-spin {\n\tanimation: init-rotate 150ms linear forwards, rotate-loop 2000ms linear infinite;\n}\n\n.IBMChat-init-spin svg circle {\n\tanimation: init-stroke 1000ms linear;\n}\n\n.IBMChat-end-spin svg circle {\n\tdisplay:none;\n}\n\n/* initial rotation */\n@keyframes init-rotate {\n\t0% {\n\t\ttransform: rotate(0deg);\n\t}\n\t100% {\n\t\ttransform: rotate(180deg);\n\t}\n}\n\n/* looping rotation */\n@keyframes rotate-loop {\n\t0% {\n\t\ttransform: rotate(0deg);\n\t}\n\t100% {\n\t\ttransform: rotate(360deg);\n\t}\n}\n\n/* initial stroke animation */\n@keyframes init-stroke {\n\t0% {\n\t\topacity: 0;\n\t}\n\t100% {\n\t\topacity: 1;\n\t}\n}\n"

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];
	
	module.exports = function(list, options) {
		if(true) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}
	
		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();
	
		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";
	
		var styles = listToStyles(list);
		addStylesToDom(styles, options);
	
		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}
	
	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}
	
	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}
	
	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}
	
	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}
	
	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}
	
	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}
	
	function addStyle(obj, options) {
		var styleElement, update, remove;
	
		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}
	
		update(obj);
	
		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}
	
	var replaceText = (function () {
		var textStore = [];
	
		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();
	
	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;
	
		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}
	
	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;
	
		if(media) {
			styleElement.setAttribute("media", media)
		}
	
		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}
	
	function updateLink(linkElement, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;
	
		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}
	
		var blob = new Blob([css], { type: "text/css" });
	
		var oldSrc = linkElement.href;
	
		linkElement.href = URL.createObjectURL(blob);
	
		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	/**
	* (C) Copyright IBM Corp. 2016. All Rights Reserved.
	*
	* Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except
	* in compliance with the License. You may obtain a copy of the License at
	*
	* http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software distributed under the License
	* is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express
	* or implied. See the License for the specific language governing permissions and limitations under
	* the License.
	*/
	
	var layouts = __webpack_require__(5);
	var events = __webpack_require__(9);
	var eventHandlers = __webpack_require__(77);
	var BotSDK = __webpack_require__(65);
	var state = __webpack_require__(10);
	var profile = __webpack_require__(64);
	var playback = __webpack_require__(94);
	var Promise = __webpack_require__(37).Promise;
	var assign = __webpack_require__(11);
	var defaultStyles = __webpack_require__(95);
	
	var layoutInit = {};
	var registeredLayouts = [];
	
	function registerEvents(tryIt, playback) {
		events.subscribe('start', eventHandlers.start);
		events.subscribe('resize', eventHandlers.resize);
		events.subscribe('disable-input', eventHandlers.input.disableInput);
		events.subscribe('enable-loading', eventHandlers.input.enableLoadingInput);
		events.subscribe('disable-loading', eventHandlers.input.disableLoadingInput);
		events.subscribe('scroll-to-bottom', eventHandlers.scrollToBottom);
		events.subscribe('receive', eventHandlers.receive);
		if (tryIt === true) {
			events.subscribe('try-it-error', eventHandlers.error.tryIt);
			events.subscribe('try-it-layout-subscription', eventHandlers.tryIt.layoutError);
			events.subscribe('try-it-action-subscription', eventHandlers.tryIt.actionError);
		}
		if (playback === true) { //TODO: remove if playback when Dashboard code is updated
			events.subscribe('send', eventHandlers.sendMock);
		} else {
			events.subscribe('send', eventHandlers.send);
			events.subscribe('send-input-message', eventHandlers.sendInputMessage);
			events.subscribe('enable-input', eventHandlers.input.enableInput);
			events.subscribe('focus-input', eventHandlers.input.focusInput);
			events.subscribe('send-mock', eventHandlers.sendMock);
		}
	}
	
	function registerLayouts() {
		registerLayout('show-locations', layouts.showLocations.init, true);
		registerLayout('choose-location-type', layouts.chooseLocationType.init, true);
		registerLayout('request-geolocation-latlong', layouts.requestGeolocationLatlong.init, true);
		registerLayout('request-geolocation-zipcode', layouts.requestGeolocationZipcode.init, true);
		registerLayout('choose', layouts.choose.init, true);
		registerLayout('form', layouts.form.init, true);
		registerLayout('cc-validator', layouts.creditCard.init, true);
		registerLayout('error', layouts.error.init, true);
		for (var i = 0; i < registeredLayouts.length; i++)
			layoutInit[registeredLayouts[i]]();
	}
	
	function init(config) {
		var root = (typeof config.el === 'string') ? document.getElementById(config.el) : config.el;
		var SDKconfig = {};
		SDKconfig.baseURL = config.baseURL || 'https://api.ibm.com/virtualagent/run/api/v1/';
		if (config.withCredentials)
			SDKconfig.withCredentials = config.withCredentials;
		if (config.XIBMClientID)
			SDKconfig.XIBMClientID = config.XIBMClientID;
		if (config.XIBMClientSecret)
			SDKconfig.XIBMClientSecret = config.XIBMClientSecret;
		if (config.userID)
			SDKconfig.userID = config.userID;
	
		return new Promise(function(resolve, reject) {
			var current = state.getState();
			var defaultState = {
				active: true,
				root: root,
				mapsServer: ("https://dd1-i-serve-maps.mybluemix.net") || 'https://dp1-i-serve-maps.mybluemix.net/',
				botID: config.botID,
				styles: assign({}, defaultStyles, config.styles),
				baseURL: SDKconfig.baseURL,
				originalContent: root.innerHTML,
				handleInput: {
					default: true
				},
				tryIt: config.tryIt || false,
				playback: config.playback || false //TODO: remove playback when Dashboard code is updated
			};
			if (current.active === true) {
				resolve();
				return;
			}
			if (root) {
				if (config.errorHandler)
					events.subscribe('error', config.errorHandler, config.errorHandlerContext);
				else
					events.subscribe('error', eventHandlers.error.default);
				registerEvents(config.tryIt, config.playback);
				registerLayouts();
				//TODO: remove if playback when Dashboard code is updated
				if (config.playback === true) {
					defaultState.chatID = 'playback';
					events.publish('start', defaultState);
					resolve();
				} else if (config.botID) {
					BotSDK
						.configure( SDKconfig )
						.start( config.botID )
						.then( function(res) {
							defaultState.chatID = res.chatID;
							window.sessionStorage.setItem('IBMChatChatID', res.chatID);
							events.publish('start', defaultState);
							events.publish('receive', res);
							resolve();
						})['catch']( function(err) {
							console.error(err);
							reject(err);
						});
				} else {
					console.error('BotID is required!');
					reject({
						error: 'BotID is required!'
					});
				}
			} else {
				console.error('Element for chat does not exist!');
				reject({
					error: 'Element for chat does not exist!'
				});
			}
		});
	}
	
	function registerLayout(layout, init, defaultSetup) {
		if (layout && init && typeof init === 'function') {
			if (registeredLayouts.indexOf(layout) === -1 || !defaultSetup) {
				registeredLayouts.push(layout);
				layoutInit[layout] = init;
			}
		} else {
			console.error('registerLayout was configured incorrectly.');
		}
	}
	
	function send(message) {
		if (message) {
			var current = state.getState();
			if (current.active) {
				events.publish('send', {
					text: message
				});
			}
		} else {
			console.error('The message was empty.');
		}
	}
	
	function receive(message) {
		if (message) {
			var current = state.getState();
			if (current.active)
				events.publish('receive', message);
		} else {
			console.error('The message was empty.');
		}
	}
	
	function sendMock(message) {
		if (message) {
			var current = state.getState();
			if (current.active) {
				events.publish('send-mock', {
					text: message
				});
			}
		} else {
			console.error('The message was empty.');
		}
	}
	
	function sendSilently(message) {
		if (message) {
			var current = state.getState();
			if (current.active) {
				events.publish('send', {
					text: message,
					silent: true
				});
			}
		} else {
			console.error('The message was empty.');
		}
	}
	
	function enableCustomInputHandler(config) {
		if (config && config.callback && typeof config.callback === 'function') {
			state.setState({
				handleInput: {
					default: false,
					callback: config.callback,
					context: config.context
				}
			});
		} else {
			console.error('Invalid configuration of enableCustomInputHandler');
		}
	}
	
	function disableCustomInputHandler() {
		state.setState({
			handleInput: {
				default: true
			}
		});
	}
	
	function focusInput() {
		var current = state.getState();
		if (current.active)
			events.publish('focus-input');
	}
	
	function disableInput() {
		var current = state.getState();
		if (current.active)
			events.publish('disable-input');
	}
	
	function enableInput() {
		var current = state.getState();
		if (current.active)
			events.publish('enable-input');
	}
	
	function debug() {
		state.setState({
			DEBUG: true
		});
	}
	
	function destroy() {
		return new Promise(function(resolve, reject) {
			var current = state.getState();
			if (current.root) {
				events.publish('destroy');
				events.destroy(); //remove all events
				current.root.innerHTML = current.originalContent; //restore original content to div
				state.destroyState();
				resolve();
			} else {
				reject('IBMChat has no instance to destroy.');
			}
		});
	}
	
	function restart() {
		return new Promise(function(resolve, reject) {
			var current = state.getState();
			destroy().then(function() {
				init({ el: current.root, botID: current.botID, baseURL: current.baseURL }).then(function() {
					resolve();
				})['catch'](function(e) {
					reject(e);
				});
			})['catch'](function(e) {
				reject(e);
			});
		});
	}
	
	module.exports = {
		profile: profile,
		init: init,
		registerLayout: registerLayout,
		send: send,
		receive: receive,
		sendMock: sendMock,
		sendSilently: sendSilently,
		enableCustomInputHandler: enableCustomInputHandler,
		disableCustomInputHandler: disableCustomInputHandler,
		focusInput: focusInput,
		disableInput: disableInput,
		enableInput: enableInput,
		subscribe: events.subscribe,
		publish: events.publish,
		debug: debug,
		destroy: destroy,
		restart: restart,
		currentSubscriptions: events.currentSubscriptions,
		hasSubscription: events.hasSubscription,
		completeEvent: events.completeEvent,
		playback: playback,
		state: state
	};


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	/**
	* (C) Copyright IBM Corp. 2016. All Rights Reserved.
	*
	* Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except
	* in compliance with the License. You may obtain a copy of the License at
	*
	* http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software distributed under the License
	* is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express
	* or implied. See the License for the specific language governing permissions and limitations under
	* the License.
	*/
	
	var showLocationsLayout = __webpack_require__(6);
	var requestGeolocationLatlongLayout = __webpack_require__(51);
	var requestGeolocationZipcodeLayout = __webpack_require__(52);
	var chooseLocationTypeLayout = __webpack_require__(53);
	var chooseLayout = __webpack_require__(57);
	var formLayout = __webpack_require__(61);
	var creditCardLayout = __webpack_require__(68);
	var errorLayout = __webpack_require__(73);
	
	module.exports = {
		showLocations: showLocationsLayout,
		requestGeolocationLatlong: requestGeolocationLatlongLayout,
		requestGeolocationZipcode: requestGeolocationZipcodeLayout,
		chooseLocationType: chooseLocationTypeLayout,
		choose: chooseLayout,
		creditCard: creditCardLayout,
		form: formLayout,
		error: errorLayout
	};


/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	/**
	* (C) Copyright IBM Corp. 2016. All Rights Reserved.
	*
	* Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except
	* in compliance with the License. You may obtain a copy of the License at
	*
	* http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software distributed under the License
	* is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express
	* or implied. See the License for the specific language governing permissions and limitations under
	* the License.
	*/
	
	__webpack_require__(7);
	
	var events = __webpack_require__(9);
	var subscribe = events.subscribe;
	var publish = events.publish;
	var state = __webpack_require__(10);
	var getState = state.getState;
	var setState = state.setState;
	var utils = __webpack_require__(35);
	
	var first = true;
	var displayLength = 3;
	var breakpointWidths = ['720', '680', '640', '580', '512', '480', '420', '360', '320', '288', '256'];
	var days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
	var showLocations = {};
	var locationIDs = [];
	var chatWidth = 748;
	var currentBreakpointKey = 0;
	var pixelRatio = window.devicePixelRatio || 1;
	var ns = 'IBMChat-map';
	
	var templates = {
		base: __webpack_require__(42),
		createDomArray: __webpack_require__(43),
		addLocationsItem: __webpack_require__(44),
		addLocationItem: __webpack_require__(45),
		hoursClosed: __webpack_require__(46),
		hoursOpen: __webpack_require__(47),
		hoursTodayOpen: __webpack_require__(48),
		hoursTodayClosed: __webpack_require__(49),
		hoursTimezone: __webpack_require__(50)
	};
	
	var strings = {
		locations: {
			none: 'We could not find any locations close to you.',
			single: 'Here are the details for the ${location} location:',
			list: 'Here are the locations I found close to you:'
		}
	};
	
	var showLocationsLayout = {
		init: function() {
			subscribe('layout:show-locations', function(data) {
				var showLocation = new ShowLocations(data);
				locationIDs.push(data.uuid);
				showLocations[data.uuid] = showLocation;
			});
			window.addEventListener('resize', utils.debounce(function() {
				setTimeout(function() {
					sizeMap();
				}, 500);
			}, 500));
		}
	};
	
	var alphaMap = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];
	
	function initialSize(width) {
		for (var i = 0; i < breakpointWidths.length; i++) {
			if ((i === breakpointWidths.length - 1) || (breakpointWidths[i] >= width && breakpointWidths[i + 1] < width)) {
				currentBreakpointKey = i;
				chatWidth = width;
				return;
			}
		}
	}
	
	function sameSize() {
		var width = showLocations[locationIDs[0]].getWidth();
		var isSameSize = (breakpointWidths[currentBreakpointKey] >= width && breakpointWidths[currentBreakpointKey + 1] < width);
		return isSameSize;
	}
	
	function sizeMap() {
		if (locationIDs.length > 0 && showLocations[locationIDs[0]].getWidth() && !sameSize()) {
			var width = showLocations[locationIDs[0]].getWidth();
			for (var i = 0; i < breakpointWidths.length; i++) {
				if ((i === breakpointWidths.length - 1) || (breakpointWidths[i] >= width && breakpointWidths[i + 1] < width)) {
					currentBreakpointKey = i;
					chatWidth = width;
					for (var j = 0; j < locationIDs.length; j++) {
						if (showLocations[locationIDs[j]].data.length > 0)
							showLocations[locationIDs[j]].reDrawMap();
					}
					return;
				}
			}
		}
	}
	
	function createPhoneArray(el, items) {
		if (items) {
			for (var i = 0; i < items.length; i++) {
				var itemChild = document.createElement('div');
				var text = templates.createDomArray;
				itemChild.className = ns + '-contact-row';
				itemChild.innerHTML = utils.compile(text, {
					ns: ns
				});
				var typeEl = itemChild.querySelector('.' + ns + '-contact-type');
				var dataEl = itemChild.querySelector('.' + ns + '-contact-data');
				typeEl.textContent = items[i].type;
				dataEl.textContent = items[i].number;
				el.appendChild(itemChild);
			}
		}
	}
	
	function formatAMPM(time) {
		try {
			var split = time.split(':');
			var hours = split[0];
			var minutes = split[1];
			var ampm = hours >= 12 ? 'pm' : 'am';
			hours = hours % 12;
			hours = hours ? hours : 12;
			return hours + ':' + minutes + ' ' + ampm;
		}
		catch (e) {
			return '-';
		}
	}
	
	function parseAddress(address) {
		var arr = address.split(',');
		var first = arr.shift();
		var text = '';
		for (var i = 0; i < arr.length; i++) {
			text += arr[i];
			if (i < (arr.length - 1))
				text += ',';
		}
		return {
			address1: first,
			address2: text
		};
	}
	
	function createHours(hoursEl, moreHoursEl, hours, timezone, timezoneEl) {
		if (hours) {
			// hours
			var today = new Date().getDay();
			var todaysHours = hours[today];
			var el = document.createElement('div');
			if (todaysHours && todaysHours.isOpen) {
				el.innerHTML = utils.compile(templates.hoursTodayOpen, {
					ns: ns,
					open: formatAMPM(todaysHours.open),
					close: formatAMPM(todaysHours.close)
				});
			} else {
				el.innerHTML = utils.compile(templates.hoursTodayClosed, {
					ns: ns
				});
			}
			hoursEl.appendChild(el);
			// timezone
			if (timezone) {
				var tzChildEl = document.createElement('div');
				tzChildEl.innerHTML = utils.compile(templates.hoursTimezone, {
					ns: ns,
					timezone: timezone
				});
				timezoneEl.appendChild(tzChildEl);
			} else {
				timezoneEl.parentNode.removeChild(timezoneEl);
			}
			// more hours
			for (var i = 0; i < hours.length; i++) {
				var childEl = document.createElement('div');
				childEl.setAttribute('class', ns + '-days-hours');
				if (hours[i] && hours[i].isOpen) {
					childEl.innerHTML = utils.compile(templates.hoursOpen, {
						ns: ns,
						day: days[i],
						open: formatAMPM(hours[i].open),
						close: formatAMPM(hours[i].close)
					});
				} else {
					childEl.innerHTML = utils.compile(templates.hoursClosed, {
						ns: ns,
						day: days[i]
					});
				}
				moreHoursEl.appendChild(childEl);
			}
		}
	}
	
	function distance(item) {
		if (!item.distance)
			return;
		var distanceLength = (item.distance.toFixed(1) === 0.0) ? 0.1 : item.distance.toFixed(1);
		var distanceLengthMeasure = (item.distanceMeasure === 'miles') ? 'm' : 'km';
		return distanceLength + distanceLengthMeasure;
	}
	
	function ShowLocations(data) {
		this.init(data);
	}
	
	ShowLocations.prototype.init = function(data) {
		this.data = (data.message.data !== undefined && data.message.data.location_data !== undefined) ? data.message.data.location_data : [];
		if (this.data.length > 1) {
			setState({
				location_data: this.data
			});
		}
		this.eventListeners = [];
		this.parentElement = data.element;
		this.layoutElement = data.layoutElement;
		this.msgElement = data.msgElement;
		switch (this.data.length) {
		case 0:
			this.msgElement.textContent = strings.locations.none;
			break;
		case 1:
			this.msgElement.textContent = utils.compile(strings.locations.single, { location: this.data[0].address.address });
			break;
		default:
			this.msgElement.textContent = strings.locations.list;
		}
	
		if (this.data.length > 0) {
			var text = templates.base;
			this.uuid = data.uuid;
			if (first) {
				initialSize(this.getWidth());
				first = false;
			}
			this.map = document.createElement('div');
			this.map.innerHTML = utils.compile(text, { ns: ns });
			this.mapElement = this.map.querySelector('.' + ns + '-img');
			this.dataElement = this.map.querySelector('.' + ns + '-data');
			this.mapElement.appendChild(this.drawLocations());
			this.dataElement.appendChild(this.addDetails());
			this.layoutElement.appendChild(this.map);
		}
		this.subscribeReceive = subscribe('receive', this.removeAllEventListeners, this);
	};
	
	ShowLocations.prototype.getWidth = function() {
		var width = this.parentElement.querySelector('.IBMChat-watson-layout:last-child').clientWidth;
		return width;
	};
	
	ShowLocations.prototype.reDrawMap = function() {
		this.mapElement.innerHTML = '';
		this.mapElement.appendChild(this.drawLocations());
	};
	
	ShowLocations.prototype.addDetails = function() {
		if (this.data.length > 1)
			return this.addLocations();
		else
			return this.addLocation();
	};
	
	ShowLocations.prototype.drawLocations = function() {
		var current = getState();
		var img = document.createElement('img');
		var width = this.getWidth();
		var config = {
			size: width + 'x180',
			scale: pixelRatio
		};
		this.uri = current.mapsServer + '?';
		this.uri += utils.serialize(config);
		this.uri += '&locations=';
		var locations = '';
		for (var i = 0; (i < displayLength && i < this.data.length); i++) {
			var item = this.data[i];
			locations += (i === 0 ) ? item.address.lat + ',' + item.address.lng : '+' + item.address.lat + ',' + item.address.lng;
		}
		this.uri += encodeURIComponent(locations);
		this.uri += '&color=' + encodeURIComponent(current.styles.accentBackground.replace('#', ''));
		img.setAttribute('width', '100%');
		img.setAttribute('src', this.uri);
		return img;
	};
	
	ShowLocations.prototype.handleClick = function() {
		this.className = ns + '-location-active';
		publish('receive', {
			message: {
				text: [utils.compile(strings.locations.single, { location: showLocations[this.dataset.uuid].data[this.dataset.id - 1].address.address }), 'Is there anything else I can help you with?'],
				layout: {
					name: 'show-locations',
					index: 0
				},
				data: {
					/* jshint ignore:start */
					location_data: [showLocations[this.dataset.uuid].data[this.dataset.id - 1]]
					/* jshint ignore:end */
				}
			}
		});
	};
	
	ShowLocations.prototype.removeAllEventListeners = function() {
		var layout = document.querySelector('.' + this.uuid + ' .IBMChat-watson-layout');
		layout.classList.add('IBMChat-disabled-layout');
		var inputs = layout.querySelectorAll('input, button');
		for (var i = 0; i < inputs.length; i++)
			inputs[i].setAttribute('disabled', true);
		for (var x = 0; x < this.eventListeners.length; x++)
			this.eventListeners[x].removeEventListener('click', this.handleClick);
		if (this.hoursFunction)
			this.hoursButton.removeEventListener('click', this.hoursFunction);
		if (this.locationsFunction)
			this.locationsButton.removeEventListener('click', this.locationsFunction);
		this.eventListeners = [];
		this.subscribeReceive.remove();
	};
	
	ShowLocations.prototype.addLocation = function() {
		var container = document.createElement('div');
		var el = document.createElement('div');
		var locationData = getState().location_data;
		var item = this.data[0];
		var createDom = function(el) {
			var text = templates.addLocationItem;
			el.innerHTML = utils.compile(text, { ns: ns });
			return {
				link: el.querySelector('.' + ns + '-locations-item-data-address-link'),
				label: el.querySelector('.' + ns + '-locations-item-data-title'),
				address: el.querySelector('.' + ns + '-locations-item-data-address'),
				address1: document.createElement('span'),
				address2: document.createElement('span'),
				phone: el.querySelector('.' + ns + '-locations-item-data-phone'),
				email: el.querySelector('.' + ns + '-locations-item-data-email'),
				hours: el.querySelector('.' + ns + '-locations-item-data-hours'),
				timezone: el.querySelector('.' + ns + '-locations-item-data-timezone'),
				parentEl: el.querySelector('.' + ns + '-locations-item-data'),
				hoursButton: el.querySelector('.' + ns + '-locations-item-data-hours-button'),
				moreHours: el.querySelector('.' + ns + '-locations-item-data-more-hours'),
				distance: el.querySelector('.' + ns + '-locations-item-distance'),
				backHolder: el.querySelector('.' + ns + '-locations-item-data-section'),
				back: el.querySelector('.' + ns + '-locations-all')
			};
		};
	
		var dom = createDom(el);
	
		// name
		if (item.label)
			dom.label.textContent = item.label;
		else
			dom.parentEl.removeChild(dom.label);
	
		// addresses
		var addresses = parseAddress(item.address.address);
		dom.address1.textContent = addresses.address1;
		dom.address2.textContent = addresses.address2;
		dom.address.appendChild(dom.address1);
		dom.address.appendChild(document.createElement('br'));
		dom.address.appendChild(dom.address2);
		dom.link.setAttribute('href', 'https://maps.google.com/?q=' + encodeURIComponent(item.address.address));
		dom.link.setAttribute('target', '_blank');
		dom.distance.textContent = distance(item) || '';
	
		// email
		if (item.email) {
			const linkEl = document.createElement('a');
			linkEl.setAttribute('href', 'mailto:' + item.email);
			linkEl.setAttribute('target', '_blank');
			linkEl.textContent = item.email;
			dom.email.appendChild(linkEl);
		} else {
			dom.email.parentNode.removeChild(dom.email);
		}
	
		// phones
		if (item.phones && item.phones.length > 0)
			createPhoneArray(dom.phone, item.phones);
		else
			dom.phone.parentNode.removeChild(dom.phone);
	
		// hours/timezone
		if (item.days && item.days.length > 0) {
			createHours(dom.hours, dom.moreHours, item.days, item.address.timezone, dom.timezone);
			this.hoursFunction = function(e) {
				e.preventDefault();
				dom.parentEl.removeChild(dom.hoursButton);
				dom.moreHours.setAttribute('class', ns + '-locations-item-data-more-hours');
				publish('focus-input');
				publish('scroll-to-bottom');
			};
			this.hoursButton = dom.hoursButton;
			dom.hoursButton.addEventListener('click', this.hoursFunction);
		} else {
			dom.hours.parentNode.removeChild(dom.hours);
			dom.hoursButton.parentNode.removeChild(dom.hoursButton);
		}
	
		if (locationData && locationData.length > 1) {
			this.locationsButton = dom.back;
			this.locationsFunction = function(e) {
				e.preventDefault();
				publish('receive', {
					message: {
						text: [strings.locations.list, 'Is there anything else I can help you with?'],
						layout: {
							name: 'show-locations',
							index: 0
						},
						data: {
							/* jshint ignore:start */
							location_data: locationData
							/* jshint ignore:end */
						}
					}
				});
			};
			dom.back.addEventListener('click', this.locationsFunction);
		} else {
			dom.backHolder.parentNode.removeChild(dom.backHolder);
		}
		container.appendChild(el);
		return container;
	};
	ShowLocations.prototype.addLocations = function() {
		var current = getState();
		var createDom = function(el, i, uuid) {
			el.addEventListener('click', this.handleClick);
			el.dataset.uuid = uuid;
			el.dataset.id = i + 1;
			var text = templates.addLocationsItem;
			el.innerHTML = utils.compile(text, { ns: ns });
			this.eventListeners.push(el);
			return {
				icon: el.querySelector('.' + ns + '-locations-item-icon'),
				label: el.querySelector('.' + ns + '-locations-item-data-title'),
				address: el.querySelector('.' + ns + '-locations-item-data-address'),
				address1: document.createElement('span'),
				address2: document.createElement('span'),
				distance: el.querySelector('.' + ns + '-locations-item-distance')
			};
		};
	
		var container = document.createElement('div');
	
		for (var i = 0; (i < displayLength && i < this.data.length); i++) {
			var el = document.createElement('div');
			var item = this.data[i];
			var dom = createDom.call(this, el, i, this.uuid);
			var box = document.createElement('div');
			box.setAttribute('style', 'font-weight:bold; color:' + current.styles.accentText + '; background: ' + current.styles.accentBackground + '; line-height: 24px; height:24px; width:24px; margin-left:8px;');
			box.textContent = alphaMap[i];
			dom.icon.appendChild(box);
			dom.label.textContent = item.label || '';
			var addresses = parseAddress(item.address.address);
			dom.address1.textContent = addresses.address1;
			dom.address2.textContent = addresses.address2;
			dom.address.appendChild(dom.address1);
			dom.address.appendChild(document.createElement('br'));
			dom.address.appendChild(dom.address2);
			dom.distance.textContent = distance(item) || '';
			container.appendChild(el);
		}
		return container;
	};
	
	module.exports = showLocationsLayout;


/***/ },
/* 7 */
[96, 8],
/* 8 */
/***/ function(module, exports) {

	module.exports = ".IBMChat-map {\n\tpadding: 0 0 1em 0;\n}\n\n.IBMChat-map-img {\n\theight:180px;\n}\n\n.IBMChat-map-img img {\n\theight:180px;\n}\n\n.IBMChat-map-multiple-locations {\n\tcursor: default;\n\tdisplay: table;\n\twidth: 100%;\n}\n\n.IBMChat-map-multiple-locations .IBMChat-map-locations-row {\n\tdisplay:table-row;\n\twidth: 100%;\n}\n\n.IBMChat-map-multiple-locations .IBMChat-map-locations-cell {\n\tdisplay: table-cell;\n\toverflow: hidden;\n\tword-wrap: break-word;\n}\n\n.IBMChat-map-location-active .IBMChat-map-multiple-locations {\n\topacity: 1;\n}\n\n.IBMChat-map-locations-item.IBMChat-map-multiple-locations {\n\tpadding: 1em 0 1em 0;\n\tcursor: pointer;\n}\n\n.IBMChat-disabled-layout .IBMChat-map-locations-item.IBMChat-map-multiple-locations {\n\tcursor: default;\n}\n\n.IBMChat-map-data-section {\n\tmargin-top:0.5em;\n}\n\n.IBMChat-map-locations-item {\n\tpadding: 1em;\n\tborder-bottom:1px solid #505050;\n}\n\n\n.IBMChat-map-locations-item-icon {\n\ttext-align:center;\n\twidth: 40px;\n}\n\n.IBMChat-map-locations-item-data {\n\tpadding:0 4px 0 4px;\n\tfont-size:0.9em;\n}\n.IBMChat-map-locations-item-data-title {\n\tfont-weight: bold;\n\tpadding-bottom:0.5em;\n}\n.IBMChat-map-locations-item-data-items {\n\tfont-size: 0.9em;\n}\n\n.IBMChat-map-locations-item-data-section {\n\tpadding-bottom:1em;\n}\n\n.IBMChat-map-locations-item-data-email {\n\tpadding-bottom:1em;\n}\n\n.IBMChat-map-locations-item-data-phone {\n\tdisplay: table;\n\tmax-width:400px;\n\twidth: 100%;\n\tpadding-bottom:1em;\n}\n.IBMChat-map-contact-row {\n\tpadding-bottom:1em;\n}\n\n.IBMChat-map-hours-open {\n\tpadding-bottom:0.5em;\n}\n\n.IBMChat-map-contact-type {\n\tfont-style:italic;\n\tfont-size:0.9em;\n}\n.IBMChat-map-contact-data {\n\n}\n\na.IBMChat-map-locations-item-data-address-link,\na.IBMChat-map-locations-item-data-address-link:hover,\na.IBMChat-map-locations-item-data-address-link:visited,\na.IBMChat-map-locations-item-data-address-link:active,\n.IBMChat-map-contact-data a,\n.IBMChat-map-contact-data a:hover,\n.IBMChat-map-contact-data a:active,\n.IBMChat-map-contact-data a:visited {\n\tfont-weight:normal;\n\tfont-size:0.9em;\n}\n\n.IBMChat-map-locations-item-distance {\n\twidth:64px;\n\tfont-size:0.9em;\n}\n\nbutton.IBMChat-map-locations-item-data-hours-button {\n\tfont-size:0.9em;\n\tpadding: 0 1em 0 1em;\n\tline-height:1.5em;\n\tmargin-top:1em;\n}\n\nbutton.IBMChat-map-locations-all {\n\tfont-size:0.9em;\n\tpadding: 0 1em 0 1em;\n\tline-height:1.5em;\n}\n\n.IBMChat-map-locations-item-data-more-hours {\n\tdisplay: table;\n}\n\n.IBMChat-map-locations-item-data-more-hours.IBMChat-map-hidden {\n\tdisplay: none;\n}\n\n.IBMChat-map-days-hours {\n\tdisplay: table-row;\n}\n\n.IBMChat-map-days-hours-day, .IBMChat-map-days-hours-hours, .IBMChat-map-days-hours-closed {\n\tdisplay: table-cell;\n\tmargin: 0;\n\tpadding:0.75em 1em 0 0;\n\toverflow: hidden;\n\tword-wrap: break-word;\n}\n\n.IBMChat-map-hours-timezone {\n\tfont-style: italic;\n\tfont-size: 0.8em;\n\tpadding-top: 0.5em;\n}\n\n.IBMChat-map-days-hours > div:last-child {\n\tpadding: 0.75em 0 0 0 !important;\n}\n"

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	/**
	* (C) Copyright IBM Corp. 2016. All Rights Reserved.
	*
	* Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except
	* in compliance with the License. You may obtain a copy of the License at
	*
	* http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software distributed under the License
	* is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express
	* or implied. See the License for the specific language governing permissions and limitations under
	* the License.
	*/
	
	var state = __webpack_require__(10);
	
	var events = [];
	
	function completeEvent(response) {
		switch (response) {
		case true:
			publish('send', {
				message: 'success',
				silent: true
			});
			break;
		case false:
			publish('send', {
				message: 'failure',
				silent: true
			});
			break;
		default:
			publish('send', {
				message: 'cancel',
				silent: true
			});
		}
	}
	
	function destroy() {
		events = [];
	}
	
	function unsubscribe(event, handler, context) {
		if (typeof context === undefined)
			context = handler;
	}
	
	function currentSubscriptions() {
		return events.slice(0);
	}
	
	function hasSubscription(action) {
		var subscriptions = currentSubscriptions();
		for (var i = 0; i < subscriptions.length; i++) {
			var subscription = subscriptions[i];
			if (subscription && subscription.event === action)
				return true;
		}
		return false;
	}
	
	function subscribe(event, handler, context) {
		if (typeof context === undefined)
			context = handler;
		var index = events.push({ event: event, handler: handler.bind(context) }) - 1;
		return {
			remove: function() {
				events.splice(index, 1);
			}
		};
	}
	
	function publish(event, data, cb) {
		var current = state.getState();
		var wasSubscription = false;
		for (var i = 0; i < events.length; i++) {
			if (events[i] && events[i].event && events[i].event === event) {
				if (current.DEBUG) {
					wasSubscription = true;
					console.log('Subscription to ' + event + ' was called: ', data);
				}
				events[i].handler.call(undefined, data, cb);
			}
		}
		if (current.DEBUG && event.indexOf('layout') == -1 && !wasSubscription)
			console.warn('Nothing is subscribed to ' + event);
	}
	
	module.exports = {
		destroy: destroy,
		unsubscribe: unsubscribe,
		currentSubscriptions: currentSubscriptions,
		hasSubscription: hasSubscription,
		subscribe: subscribe,
		publish: publish,
		completeEvent: completeEvent
	};


/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	/**
	* (C) Copyright IBM Corp. 2016. All Rights Reserved.
	*
	* Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except
	* in compliance with the License. You may obtain a copy of the License at
	*
	* http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software distributed under the License
	* is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express
	* or implied. See the License for the specific language governing permissions and limitations under
	* the License.
	*/
	
	var states = [];
	var state = {};
	var assign = __webpack_require__(11);
	
	function get() {
		return state;
	}
	function destroy() {
		state = {};
		set({});
	}
	
	function set(updated) {
		state = assign({}, state, updated);
		if (state.DEBUG) {
			states.push(state);
			console.log('STATE HISTORY: ', states);
			console.log('NEW STATE: ', state);
		}
	}
	
	module.exports ={
		get: get,
		set: set,
		destroy: destroy,
		getState: get,
		setState: set,
		destroyState: destroy
	};


/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	var assignValue = __webpack_require__(12),
	    copyObject = __webpack_require__(14),
	    createAssigner = __webpack_require__(15),
	    isArrayLike = __webpack_require__(19),
	    isPrototype = __webpack_require__(24),
	    keys = __webpack_require__(25);
	
	/** Used for built-in method references. */
	var objectProto = Object.prototype;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/** Built-in value references. */
	var propertyIsEnumerable = objectProto.propertyIsEnumerable;
	
	/** Detect if properties shadowing those on `Object.prototype` are non-enumerable. */
	var nonEnumShadows = !propertyIsEnumerable.call({ 'valueOf': 1 }, 'valueOf');
	
	/**
	 * Assigns own enumerable string keyed properties of source objects to the
	 * destination object. Source objects are applied from left to right.
	 * Subsequent sources overwrite property assignments of previous sources.
	 *
	 * **Note:** This method mutates `object` and is loosely based on
	 * [`Object.assign`](https://mdn.io/Object/assign).
	 *
	 * @static
	 * @memberOf _
	 * @since 0.10.0
	 * @category Object
	 * @param {Object} object The destination object.
	 * @param {...Object} [sources] The source objects.
	 * @returns {Object} Returns `object`.
	 * @see _.assignIn
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 * }
	 *
	 * function Bar() {
	 *   this.c = 3;
	 * }
	 *
	 * Foo.prototype.b = 2;
	 * Bar.prototype.d = 4;
	 *
	 * _.assign({ 'a': 0 }, new Foo, new Bar);
	 * // => { 'a': 1, 'c': 3 }
	 */
	var assign = createAssigner(function(object, source) {
	  if (nonEnumShadows || isPrototype(source) || isArrayLike(source)) {
	    copyObject(source, keys(source), object);
	    return;
	  }
	  for (var key in source) {
	    if (hasOwnProperty.call(source, key)) {
	      assignValue(object, key, source[key]);
	    }
	  }
	});
	
	module.exports = assign;


/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	var eq = __webpack_require__(13);
	
	/** Used for built-in method references. */
	var objectProto = Object.prototype;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/**
	 * Assigns `value` to `key` of `object` if the existing value is not equivalent
	 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
	 * for equality comparisons.
	 *
	 * @private
	 * @param {Object} object The object to modify.
	 * @param {string} key The key of the property to assign.
	 * @param {*} value The value to assign.
	 */
	function assignValue(object, key, value) {
	  var objValue = object[key];
	  if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) ||
	      (value === undefined && !(key in object))) {
	    object[key] = value;
	  }
	}
	
	module.exports = assignValue;


/***/ },
/* 13 */
/***/ function(module, exports) {

	/**
	 * Performs a
	 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
	 * comparison between two values to determine if they are equivalent.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to compare.
	 * @param {*} other The other value to compare.
	 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
	 * @example
	 *
	 * var object = { 'a': 1 };
	 * var other = { 'a': 1 };
	 *
	 * _.eq(object, object);
	 * // => true
	 *
	 * _.eq(object, other);
	 * // => false
	 *
	 * _.eq('a', 'a');
	 * // => true
	 *
	 * _.eq('a', Object('a'));
	 * // => false
	 *
	 * _.eq(NaN, NaN);
	 * // => true
	 */
	function eq(value, other) {
	  return value === other || (value !== value && other !== other);
	}
	
	module.exports = eq;


/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	var assignValue = __webpack_require__(12);
	
	/**
	 * Copies properties of `source` to `object`.
	 *
	 * @private
	 * @param {Object} source The object to copy properties from.
	 * @param {Array} props The property identifiers to copy.
	 * @param {Object} [object={}] The object to copy properties to.
	 * @param {Function} [customizer] The function to customize copied values.
	 * @returns {Object} Returns `object`.
	 */
	function copyObject(source, props, object, customizer) {
	  object || (object = {});
	
	  var index = -1,
	      length = props.length;
	
	  while (++index < length) {
	    var key = props[index];
	
	    var newValue = customizer
	      ? customizer(object[key], source[key], key, object, source)
	      : undefined;
	
	    assignValue(object, key, newValue === undefined ? source[key] : newValue);
	  }
	  return object;
	}
	
	module.exports = copyObject;


/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	var baseRest = __webpack_require__(16),
	    isIterateeCall = __webpack_require__(18);
	
	/**
	 * Creates a function like `_.assign`.
	 *
	 * @private
	 * @param {Function} assigner The function to assign values.
	 * @returns {Function} Returns the new assigner function.
	 */
	function createAssigner(assigner) {
	  return baseRest(function(object, sources) {
	    var index = -1,
	        length = sources.length,
	        customizer = length > 1 ? sources[length - 1] : undefined,
	        guard = length > 2 ? sources[2] : undefined;
	
	    customizer = (assigner.length > 3 && typeof customizer == 'function')
	      ? (length--, customizer)
	      : undefined;
	
	    if (guard && isIterateeCall(sources[0], sources[1], guard)) {
	      customizer = length < 3 ? undefined : customizer;
	      length = 1;
	    }
	    object = Object(object);
	    while (++index < length) {
	      var source = sources[index];
	      if (source) {
	        assigner(object, source, index, customizer);
	      }
	    }
	    return object;
	  });
	}
	
	module.exports = createAssigner;


/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	var apply = __webpack_require__(17);
	
	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeMax = Math.max;
	
	/**
	 * The base implementation of `_.rest` which doesn't validate or coerce arguments.
	 *
	 * @private
	 * @param {Function} func The function to apply a rest parameter to.
	 * @param {number} [start=func.length-1] The start position of the rest parameter.
	 * @returns {Function} Returns the new function.
	 */
	function baseRest(func, start) {
	  start = nativeMax(start === undefined ? (func.length - 1) : start, 0);
	  return function() {
	    var args = arguments,
	        index = -1,
	        length = nativeMax(args.length - start, 0),
	        array = Array(length);
	
	    while (++index < length) {
	      array[index] = args[start + index];
	    }
	    index = -1;
	    var otherArgs = Array(start + 1);
	    while (++index < start) {
	      otherArgs[index] = args[index];
	    }
	    otherArgs[start] = array;
	    return apply(func, this, otherArgs);
	  };
	}
	
	module.exports = baseRest;


/***/ },
/* 17 */
/***/ function(module, exports) {

	/**
	 * A faster alternative to `Function#apply`, this function invokes `func`
	 * with the `this` binding of `thisArg` and the arguments of `args`.
	 *
	 * @private
	 * @param {Function} func The function to invoke.
	 * @param {*} thisArg The `this` binding of `func`.
	 * @param {Array} args The arguments to invoke `func` with.
	 * @returns {*} Returns the result of `func`.
	 */
	function apply(func, thisArg, args) {
	  switch (args.length) {
	    case 0: return func.call(thisArg);
	    case 1: return func.call(thisArg, args[0]);
	    case 2: return func.call(thisArg, args[0], args[1]);
	    case 3: return func.call(thisArg, args[0], args[1], args[2]);
	  }
	  return func.apply(thisArg, args);
	}
	
	module.exports = apply;


/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	var eq = __webpack_require__(13),
	    isArrayLike = __webpack_require__(19),
	    isIndex = __webpack_require__(23),
	    isObject = __webpack_require__(21);
	
	/**
	 * Checks if the given arguments are from an iteratee call.
	 *
	 * @private
	 * @param {*} value The potential iteratee value argument.
	 * @param {*} index The potential iteratee index or key argument.
	 * @param {*} object The potential iteratee object argument.
	 * @returns {boolean} Returns `true` if the arguments are from an iteratee call,
	 *  else `false`.
	 */
	function isIterateeCall(value, index, object) {
	  if (!isObject(object)) {
	    return false;
	  }
	  var type = typeof index;
	  if (type == 'number'
	        ? (isArrayLike(object) && isIndex(index, object.length))
	        : (type == 'string' && index in object)
	      ) {
	    return eq(object[index], value);
	  }
	  return false;
	}
	
	module.exports = isIterateeCall;


/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	var isFunction = __webpack_require__(20),
	    isLength = __webpack_require__(22);
	
	/**
	 * Checks if `value` is array-like. A value is considered array-like if it's
	 * not a function and has a `value.length` that's an integer greater than or
	 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
	 * @example
	 *
	 * _.isArrayLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isArrayLike(document.body.children);
	 * // => true
	 *
	 * _.isArrayLike('abc');
	 * // => true
	 *
	 * _.isArrayLike(_.noop);
	 * // => false
	 */
	function isArrayLike(value) {
	  return value != null && isLength(value.length) && !isFunction(value);
	}
	
	module.exports = isArrayLike;


/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(21);
	
	/** `Object#toString` result references. */
	var funcTag = '[object Function]',
	    genTag = '[object GeneratorFunction]';
	
	/** Used for built-in method references. */
	var objectProto = Object.prototype;
	
	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objectToString = objectProto.toString;
	
	/**
	 * Checks if `value` is classified as a `Function` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
	 * @example
	 *
	 * _.isFunction(_);
	 * // => true
	 *
	 * _.isFunction(/abc/);
	 * // => false
	 */
	function isFunction(value) {
	  // The use of `Object#toString` avoids issues with the `typeof` operator
	  // in Safari 8-9 which returns 'object' for typed array and other constructors.
	  var tag = isObject(value) ? objectToString.call(value) : '';
	  return tag == funcTag || tag == genTag;
	}
	
	module.exports = isFunction;


/***/ },
/* 21 */
/***/ function(module, exports) {

	/**
	 * Checks if `value` is the
	 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
	 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
	 * @example
	 *
	 * _.isObject({});
	 * // => true
	 *
	 * _.isObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isObject(_.noop);
	 * // => true
	 *
	 * _.isObject(null);
	 * // => false
	 */
	function isObject(value) {
	  var type = typeof value;
	  return !!value && (type == 'object' || type == 'function');
	}
	
	module.exports = isObject;


/***/ },
/* 22 */
/***/ function(module, exports) {

	/** Used as references for various `Number` constants. */
	var MAX_SAFE_INTEGER = 9007199254740991;
	
	/**
	 * Checks if `value` is a valid array-like length.
	 *
	 * **Note:** This method is loosely based on
	 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
	 * @example
	 *
	 * _.isLength(3);
	 * // => true
	 *
	 * _.isLength(Number.MIN_VALUE);
	 * // => false
	 *
	 * _.isLength(Infinity);
	 * // => false
	 *
	 * _.isLength('3');
	 * // => false
	 */
	function isLength(value) {
	  return typeof value == 'number' &&
	    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
	}
	
	module.exports = isLength;


/***/ },
/* 23 */
/***/ function(module, exports) {

	/** Used as references for various `Number` constants. */
	var MAX_SAFE_INTEGER = 9007199254740991;
	
	/** Used to detect unsigned integer values. */
	var reIsUint = /^(?:0|[1-9]\d*)$/;
	
	/**
	 * Checks if `value` is a valid array-like index.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
	 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
	 */
	function isIndex(value, length) {
	  length = length == null ? MAX_SAFE_INTEGER : length;
	  return !!length &&
	    (typeof value == 'number' || reIsUint.test(value)) &&
	    (value > -1 && value % 1 == 0 && value < length);
	}
	
	module.exports = isIndex;


/***/ },
/* 24 */
/***/ function(module, exports) {

	/** Used for built-in method references. */
	var objectProto = Object.prototype;
	
	/**
	 * Checks if `value` is likely a prototype object.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
	 */
	function isPrototype(value) {
	  var Ctor = value && value.constructor,
	      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;
	
	  return value === proto;
	}
	
	module.exports = isPrototype;


/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	var arrayLikeKeys = __webpack_require__(26),
	    baseKeys = __webpack_require__(32),
	    isArrayLike = __webpack_require__(19);
	
	/**
	 * Creates an array of the own enumerable property names of `object`.
	 *
	 * **Note:** Non-object values are coerced to objects. See the
	 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
	 * for more details.
	 *
	 * @static
	 * @since 0.1.0
	 * @memberOf _
	 * @category Object
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 *   this.b = 2;
	 * }
	 *
	 * Foo.prototype.c = 3;
	 *
	 * _.keys(new Foo);
	 * // => ['a', 'b'] (iteration order is not guaranteed)
	 *
	 * _.keys('hi');
	 * // => ['0', '1']
	 */
	function keys(object) {
	  return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
	}
	
	module.exports = keys;


/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	var baseTimes = __webpack_require__(27),
	    isArguments = __webpack_require__(28),
	    isArray = __webpack_require__(31),
	    isIndex = __webpack_require__(23);
	
	/** Used for built-in method references. */
	var objectProto = Object.prototype;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/**
	 * Creates an array of the enumerable property names of the array-like `value`.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @param {boolean} inherited Specify returning inherited property names.
	 * @returns {Array} Returns the array of property names.
	 */
	function arrayLikeKeys(value, inherited) {
	  // Safari 8.1 makes `arguments.callee` enumerable in strict mode.
	  // Safari 9 makes `arguments.length` enumerable in strict mode.
	  var result = (isArray(value) || isArguments(value))
	    ? baseTimes(value.length, String)
	    : [];
	
	  var length = result.length,
	      skipIndexes = !!length;
	
	  for (var key in value) {
	    if ((inherited || hasOwnProperty.call(value, key)) &&
	        !(skipIndexes && (key == 'length' || isIndex(key, length)))) {
	      result.push(key);
	    }
	  }
	  return result;
	}
	
	module.exports = arrayLikeKeys;


/***/ },
/* 27 */
/***/ function(module, exports) {

	/**
	 * The base implementation of `_.times` without support for iteratee shorthands
	 * or max array length checks.
	 *
	 * @private
	 * @param {number} n The number of times to invoke `iteratee`.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Array} Returns the array of results.
	 */
	function baseTimes(n, iteratee) {
	  var index = -1,
	      result = Array(n);
	
	  while (++index < n) {
	    result[index] = iteratee(index);
	  }
	  return result;
	}
	
	module.exports = baseTimes;


/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	var isArrayLikeObject = __webpack_require__(29);
	
	/** `Object#toString` result references. */
	var argsTag = '[object Arguments]';
	
	/** Used for built-in method references. */
	var objectProto = Object.prototype;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objectToString = objectProto.toString;
	
	/** Built-in value references. */
	var propertyIsEnumerable = objectProto.propertyIsEnumerable;
	
	/**
	 * Checks if `value` is likely an `arguments` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
	 *  else `false`.
	 * @example
	 *
	 * _.isArguments(function() { return arguments; }());
	 * // => true
	 *
	 * _.isArguments([1, 2, 3]);
	 * // => false
	 */
	function isArguments(value) {
	  // Safari 8.1 makes `arguments.callee` enumerable in strict mode.
	  return isArrayLikeObject(value) && hasOwnProperty.call(value, 'callee') &&
	    (!propertyIsEnumerable.call(value, 'callee') || objectToString.call(value) == argsTag);
	}
	
	module.exports = isArguments;


/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	var isArrayLike = __webpack_require__(19),
	    isObjectLike = __webpack_require__(30);
	
	/**
	 * This method is like `_.isArrayLike` except that it also checks if `value`
	 * is an object.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an array-like object,
	 *  else `false`.
	 * @example
	 *
	 * _.isArrayLikeObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isArrayLikeObject(document.body.children);
	 * // => true
	 *
	 * _.isArrayLikeObject('abc');
	 * // => false
	 *
	 * _.isArrayLikeObject(_.noop);
	 * // => false
	 */
	function isArrayLikeObject(value) {
	  return isObjectLike(value) && isArrayLike(value);
	}
	
	module.exports = isArrayLikeObject;


/***/ },
/* 30 */
/***/ function(module, exports) {

	/**
	 * Checks if `value` is object-like. A value is object-like if it's not `null`
	 * and has a `typeof` result of "object".
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
	 * @example
	 *
	 * _.isObjectLike({});
	 * // => true
	 *
	 * _.isObjectLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isObjectLike(_.noop);
	 * // => false
	 *
	 * _.isObjectLike(null);
	 * // => false
	 */
	function isObjectLike(value) {
	  return !!value && typeof value == 'object';
	}
	
	module.exports = isObjectLike;


/***/ },
/* 31 */
/***/ function(module, exports) {

	/**
	 * Checks if `value` is classified as an `Array` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
	 * @example
	 *
	 * _.isArray([1, 2, 3]);
	 * // => true
	 *
	 * _.isArray(document.body.children);
	 * // => false
	 *
	 * _.isArray('abc');
	 * // => false
	 *
	 * _.isArray(_.noop);
	 * // => false
	 */
	var isArray = Array.isArray;
	
	module.exports = isArray;


/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	var isPrototype = __webpack_require__(24),
	    nativeKeys = __webpack_require__(33);
	
	/** Used for built-in method references. */
	var objectProto = Object.prototype;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/**
	 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 */
	function baseKeys(object) {
	  if (!isPrototype(object)) {
	    return nativeKeys(object);
	  }
	  var result = [];
	  for (var key in Object(object)) {
	    if (hasOwnProperty.call(object, key) && key != 'constructor') {
	      result.push(key);
	    }
	  }
	  return result;
	}
	
	module.exports = baseKeys;


/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	var overArg = __webpack_require__(34);
	
	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeKeys = overArg(Object.keys, Object);
	
	module.exports = nativeKeys;


/***/ },
/* 34 */
/***/ function(module, exports) {

	/**
	 * Creates a unary function that invokes `func` with its argument transformed.
	 *
	 * @private
	 * @param {Function} func The function to wrap.
	 * @param {Function} transform The argument transform.
	 * @returns {Function} Returns the new function.
	 */
	function overArg(func, transform) {
	  return function(arg) {
	    return func(transform(arg));
	  };
	}
	
	module.exports = overArg;


/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	/**
	* (C) Copyright IBM Corp. 2016. All Rights Reserved.
	*
	* Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except
	* in compliance with the License. You may obtain a copy of the License at
	*
	* http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software distributed under the License
	* is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express
	* or implied. See the License for the specific language governing permissions and limitations under
	* the License.
	*/
	
	var state = __webpack_require__(10);
	var writeMessage = __webpack_require__(36);
	
	function _render(el, state) {
		el.setAttribute('class', 'IBMChat-ibm-spinner IBMChat-input-loading IBMChat-' + state + '-spin');
	}
	
	var spinner = {
		show: function(el) {
			_render(el, 'init');
		},
		hide: function(el) {
			_render(el, 'end');
		}
	};
	
	function _getStyles(current) {
		var containerClass = ".chatID-" + current.chatID;
		var styles = containerClass + " .IBMChat-default-colors {\n  background-color: " + current.styles.background + ";\n  color: " + current.styles.text + ";\n}\n" +
								containerClass + " .IBMChat-secondary-colors {\n  background-color: " + current.styles.secondaryBackground + ";\n  color: " + current.styles.secondaryText + ";\n}\n" +
								containerClass + " .IBMChat-accent-colors {\n  background-color: " + current.styles.accentBackground + ";\n  color: " + current.styles.accentText + ";\n}\n" +
								containerClass + " .IBMChat-error-colors {\n  background-color: " + current.styles.errorBackground + ";\n  color: " + current.styles.errorText + ";\n}\n" +
								containerClass + " .IBMChat-input-colors {\n  background-color: " + current.styles.inputBackground + ";\n  color: " + current.styles.inputText + ";\n}\n" +
								containerClass + " .IBMChat-watson-message-theme {\n\tborder-left: 3px solid " + current.styles.accentBackground + ";\n}\n" +
								containerClass + " a,\n" +
								containerClass + " a:hover,\n" +
								containerClass + " a:visited,\n" +
								containerClass + " a:active {\n\tcolor: " + current.styles.link + ";\n}\n" +
								containerClass + " .IBMChat-chat-textbox-theme {\n  border-bottom: solid 1px " + current.styles.text + ";\n}\n" +
								containerClass + " .IBMChat-chat-textbox-theme:focus {\n  border-bottom: solid 2px " + current.styles.accentBackground + ";\n}\n" +
								containerClass + " .IBMChat-ibm-spinner {\n\tstroke: " + current.styles.accentBackground + ";\n}";
		return styles;
	}
	
	
	function debounce(func, wait, immediate) {
		var timeout;
		return function() {
			var context = this, args = arguments;
			var later = function() {
				timeout = null;
				if (!immediate) func.apply(context, args);
			};
			var callNow = immediate && !timeout;
			clearTimeout(timeout);
			timeout = setTimeout(later, wait);
			if (callNow) func.apply(context, args);
		};
	}
	
	function serialize(obj) {
		const str = [];
		for (var p in obj) {
			if (obj.hasOwnProperty(p))
				str.push(encodeURIComponent(p) + '=' + encodeURIComponent(obj[p]));
		}
		return str.join('&');
	}
	
	function compile(str, options) {
		if (options && Object.keys(options).length > 0) {
			Object.keys(options).forEach(function(key) {
				str = str.split('${' + key + '}').join(options[key]);
			});
		}
		return str;
	}
	
	function getUUID() {
		var d = new Date().getTime();
		if ( window.performance && typeof window.performance.now === 'function' )
			d += performance.now();
		return 'IBMChat-' + ('xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
			var r = (d + Math.random()*16)%16 | 0;
			d = Math.floor(d/16);
			return (( c == 'x' ? r : (r&0x3|0x8)).toString(16));
		}));
	}
	
	function _attachStylesToDOM(styles) {
		var css = document.createElement('style');
		css.type = "text/css";
		if (css.styleSheet)
			css.styleSheet.cssText = styles;
		else
			css.appendChild(document.createTextNode(styles));
		document.getElementsByTagName("head")[0].appendChild(css);
	}
	
	function attachPlaybackStyles(chatID) {
		var current = state.getState()[chatID];
		var styles = _getStyles(current);
		_attachStylesToDOM(styles);
	}
	
	function attachStyles() {
		var current = state.getState();
		var styles = _getStyles(current);
		_attachStylesToDOM(styles);
	}
	
	function hasClass(element, className) {
		var thatClass = " " + className + " ";
		return ( (" " + element.className + " ").replace(/[\n\t]/g, " ").indexOf(thatClass) > -1 );
	}
	
	module.exports = {
		debounce: debounce,
		serialize: serialize,
		hasClass: hasClass,
		getUUID: getUUID,
		attachStyles: attachStyles,
		attachPlaybackStyles: attachPlaybackStyles,
		spinner: spinner,
		compile: compile,
		writeMessage: writeMessage
	};


/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	var Promise = __webpack_require__(37).Promise;
	
	function writeMessage(el, text) {
		new ParseContent(el, text);
	}
	
	function ParseContent(el, text) {
		this.init(el, text);
	}
	
	function validLink(link) {
		if (link.startsWith('http://') || link.startsWith('https://'))
			return link;
		else
			return 'http://' + link;
	}
	
	ParseContent.prototype.init = function(el, text) {
		if (text) {
			var cls = this;
			var content = [
				{
					type: 'span',
					content: text
				}
			];
			this.addLineEndings(content)
				.then(cls.addUrls)
				.then(cls.addEmails)
				.then(function(content) {
					cls.writeMessage(el, content);
				})
				.catch(function(e) {
					console.error(e);
				});
		}
	};
	
	ParseContent.prototype.writeMessage = function(el, content) {
		content.map(function(item) {
			var s = document.createElement(item.type);
			if (item.content)
				s.textContent = item.content;
			if (item.attributes) {
				Object.keys(item.attributes).map(function(key) {
					s.setAttribute(key, item.attributes[key]);
				});
			}
			el.appendChild(s);
		});
	};
	
	ParseContent.prototype.addLineEndings = function(content) {
		return new Promise(function(resolve, reject) {
			try {
				var newContent = [];
				for (var i = 0; i < content.length; i++) {
					var arr = content[i].content.split('\n');
					arr.map(function(value, index) {
						if (value) {
							newContent.push({
								content: value,
								type: 'span'
							});
						}
						if (arr.length != index + 1) {
							newContent.push({
								type: 'br'
							});
						}
					});
				}
				resolve(newContent);
			} catch (e) {
				reject(e);
			}
		});
	};
	
	ParseContent.prototype.addUrls = function(content) {
		return new Promise(function(resolve, reject) {
			try {
				var newContent = [];
				for (var i = 0; i < content.length; i++) {
					if (content[i].content) {
						var exp = /(((https?:\/\/)|(www\.))[^\s]+)/gi;
						var linked = content[i].content.replace(exp,'|||$1|||');
						var arr = linked.split('|||');
						arr.map(function(value) {
							var newtext = value.replace(exp, '<a href="$1" target="_blank">$1</a>');
							if (newtext === value) {
								newContent.push({
									content: value,
									type: content[i].type,
									attributes: content[i].attributes
								});
							} else {
								newContent.push({
									content: value,
									type: 'a',
									attributes: {
										href: validLink(value),
										target: '_blank'
									}
								});
							}
						});
					} else {
						newContent.push({
							type: content[i].type,
							content: content[i].content,
							attributes: content[i].attributes
						});
					}
				}
				resolve(newContent);
			} catch (e) {
				reject(e);
			}
		});
	};
	
	ParseContent.prototype.addEmails = function(content) {
		return new Promise(function(resolve, reject) {
			try {
				var newContent = [];
				for (var i = 0; i < content.length; i++) {
					if (content[i].content) {
						var exp = /([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]+)/gi;
						var linked = content[i].content.replace(exp,'|||$1|||');
						var arr = linked.split('|||');
						arr.map(function(value) {
							var newtext = value.replace(exp, '<a href="mailto:$1" target="_blank">$1</a>');
							if (newtext === value) {
								newContent.push({
									content: value,
									type: content[i].type,
									attributes: content[i].attributes
								});
							} else {
								newContent.push({
									content: value,
									type: 'a',
									attributes: {
										href: 'mailto:' + value,
										target: '_blank'
									}
								});
							}
						});
					} else {
						newContent.push({
							type: content[i].type,
							content: content[i].content,
							attributes: content[i].attributes
						});
					}
				}
				resolve(newContent);
			} catch (e) {
				reject(e);
			}
		});
	};
	
	module.exports = writeMessage;


/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	var require;var __WEBPACK_AMD_DEFINE_RESULT__;/* WEBPACK VAR INJECTION */(function(process, global, module) {/*!
	 * @overview es6-promise - a tiny implementation of Promises/A+.
	 * @copyright Copyright (c) 2014 Yehuda Katz, Tom Dale, Stefan Penner and contributors (Conversion to ES6 API by Jake Archibald)
	 * @license   Licensed under MIT license
	 *            See https://raw.githubusercontent.com/jakearchibald/es6-promise/master/LICENSE
	 * @version   3.2.1
	 */
	
	(function() {
	    "use strict";
	    function lib$es6$promise$utils$$objectOrFunction(x) {
	      return typeof x === 'function' || (typeof x === 'object' && x !== null);
	    }
	
	    function lib$es6$promise$utils$$isFunction(x) {
	      return typeof x === 'function';
	    }
	
	    function lib$es6$promise$utils$$isMaybeThenable(x) {
	      return typeof x === 'object' && x !== null;
	    }
	
	    var lib$es6$promise$utils$$_isArray;
	    if (!Array.isArray) {
	      lib$es6$promise$utils$$_isArray = function (x) {
	        return Object.prototype.toString.call(x) === '[object Array]';
	      };
	    } else {
	      lib$es6$promise$utils$$_isArray = Array.isArray;
	    }
	
	    var lib$es6$promise$utils$$isArray = lib$es6$promise$utils$$_isArray;
	    var lib$es6$promise$asap$$len = 0;
	    var lib$es6$promise$asap$$vertxNext;
	    var lib$es6$promise$asap$$customSchedulerFn;
	
	    var lib$es6$promise$asap$$asap = function asap(callback, arg) {
	      lib$es6$promise$asap$$queue[lib$es6$promise$asap$$len] = callback;
	      lib$es6$promise$asap$$queue[lib$es6$promise$asap$$len + 1] = arg;
	      lib$es6$promise$asap$$len += 2;
	      if (lib$es6$promise$asap$$len === 2) {
	        // If len is 2, that means that we need to schedule an async flush.
	        // If additional callbacks are queued before the queue is flushed, they
	        // will be processed by this flush that we are scheduling.
	        if (lib$es6$promise$asap$$customSchedulerFn) {
	          lib$es6$promise$asap$$customSchedulerFn(lib$es6$promise$asap$$flush);
	        } else {
	          lib$es6$promise$asap$$scheduleFlush();
	        }
	      }
	    }
	
	    function lib$es6$promise$asap$$setScheduler(scheduleFn) {
	      lib$es6$promise$asap$$customSchedulerFn = scheduleFn;
	    }
	
	    function lib$es6$promise$asap$$setAsap(asapFn) {
	      lib$es6$promise$asap$$asap = asapFn;
	    }
	
	    var lib$es6$promise$asap$$browserWindow = (typeof window !== 'undefined') ? window : undefined;
	    var lib$es6$promise$asap$$browserGlobal = lib$es6$promise$asap$$browserWindow || {};
	    var lib$es6$promise$asap$$BrowserMutationObserver = lib$es6$promise$asap$$browserGlobal.MutationObserver || lib$es6$promise$asap$$browserGlobal.WebKitMutationObserver;
	    var lib$es6$promise$asap$$isNode = typeof self === 'undefined' && typeof process !== 'undefined' && {}.toString.call(process) === '[object process]';
	
	    // test for web worker but not in IE10
	    var lib$es6$promise$asap$$isWorker = typeof Uint8ClampedArray !== 'undefined' &&
	      typeof importScripts !== 'undefined' &&
	      typeof MessageChannel !== 'undefined';
	
	    // node
	    function lib$es6$promise$asap$$useNextTick() {
	      // node version 0.10.x displays a deprecation warning when nextTick is used recursively
	      // see https://github.com/cujojs/when/issues/410 for details
	      return function() {
	        process.nextTick(lib$es6$promise$asap$$flush);
	      };
	    }
	
	    // vertx
	    function lib$es6$promise$asap$$useVertxTimer() {
	      return function() {
	        lib$es6$promise$asap$$vertxNext(lib$es6$promise$asap$$flush);
	      };
	    }
	
	    function lib$es6$promise$asap$$useMutationObserver() {
	      var iterations = 0;
	      var observer = new lib$es6$promise$asap$$BrowserMutationObserver(lib$es6$promise$asap$$flush);
	      var node = document.createTextNode('');
	      observer.observe(node, { characterData: true });
	
	      return function() {
	        node.data = (iterations = ++iterations % 2);
	      };
	    }
	
	    // web worker
	    function lib$es6$promise$asap$$useMessageChannel() {
	      var channel = new MessageChannel();
	      channel.port1.onmessage = lib$es6$promise$asap$$flush;
	      return function () {
	        channel.port2.postMessage(0);
	      };
	    }
	
	    function lib$es6$promise$asap$$useSetTimeout() {
	      return function() {
	        setTimeout(lib$es6$promise$asap$$flush, 1);
	      };
	    }
	
	    var lib$es6$promise$asap$$queue = new Array(1000);
	    function lib$es6$promise$asap$$flush() {
	      for (var i = 0; i < lib$es6$promise$asap$$len; i+=2) {
	        var callback = lib$es6$promise$asap$$queue[i];
	        var arg = lib$es6$promise$asap$$queue[i+1];
	
	        callback(arg);
	
	        lib$es6$promise$asap$$queue[i] = undefined;
	        lib$es6$promise$asap$$queue[i+1] = undefined;
	      }
	
	      lib$es6$promise$asap$$len = 0;
	    }
	
	    function lib$es6$promise$asap$$attemptVertx() {
	      try {
	        var r = require;
	        var vertx = __webpack_require__(40);
	        lib$es6$promise$asap$$vertxNext = vertx.runOnLoop || vertx.runOnContext;
	        return lib$es6$promise$asap$$useVertxTimer();
	      } catch(e) {
	        return lib$es6$promise$asap$$useSetTimeout();
	      }
	    }
	
	    var lib$es6$promise$asap$$scheduleFlush;
	    // Decide what async method to use to triggering processing of queued callbacks:
	    if (lib$es6$promise$asap$$isNode) {
	      lib$es6$promise$asap$$scheduleFlush = lib$es6$promise$asap$$useNextTick();
	    } else if (lib$es6$promise$asap$$BrowserMutationObserver) {
	      lib$es6$promise$asap$$scheduleFlush = lib$es6$promise$asap$$useMutationObserver();
	    } else if (lib$es6$promise$asap$$isWorker) {
	      lib$es6$promise$asap$$scheduleFlush = lib$es6$promise$asap$$useMessageChannel();
	    } else if (lib$es6$promise$asap$$browserWindow === undefined && "function" === 'function') {
	      lib$es6$promise$asap$$scheduleFlush = lib$es6$promise$asap$$attemptVertx();
	    } else {
	      lib$es6$promise$asap$$scheduleFlush = lib$es6$promise$asap$$useSetTimeout();
	    }
	    function lib$es6$promise$then$$then(onFulfillment, onRejection) {
	      var parent = this;
	
	      var child = new this.constructor(lib$es6$promise$$internal$$noop);
	
	      if (child[lib$es6$promise$$internal$$PROMISE_ID] === undefined) {
	        lib$es6$promise$$internal$$makePromise(child);
	      }
	
	      var state = parent._state;
	
	      if (state) {
	        var callback = arguments[state - 1];
	        lib$es6$promise$asap$$asap(function(){
	          lib$es6$promise$$internal$$invokeCallback(state, child, callback, parent._result);
	        });
	      } else {
	        lib$es6$promise$$internal$$subscribe(parent, child, onFulfillment, onRejection);
	      }
	
	      return child;
	    }
	    var lib$es6$promise$then$$default = lib$es6$promise$then$$then;
	    function lib$es6$promise$promise$resolve$$resolve(object) {
	      /*jshint validthis:true */
	      var Constructor = this;
	
	      if (object && typeof object === 'object' && object.constructor === Constructor) {
	        return object;
	      }
	
	      var promise = new Constructor(lib$es6$promise$$internal$$noop);
	      lib$es6$promise$$internal$$resolve(promise, object);
	      return promise;
	    }
	    var lib$es6$promise$promise$resolve$$default = lib$es6$promise$promise$resolve$$resolve;
	    var lib$es6$promise$$internal$$PROMISE_ID = Math.random().toString(36).substring(16);
	
	    function lib$es6$promise$$internal$$noop() {}
	
	    var lib$es6$promise$$internal$$PENDING   = void 0;
	    var lib$es6$promise$$internal$$FULFILLED = 1;
	    var lib$es6$promise$$internal$$REJECTED  = 2;
	
	    var lib$es6$promise$$internal$$GET_THEN_ERROR = new lib$es6$promise$$internal$$ErrorObject();
	
	    function lib$es6$promise$$internal$$selfFulfillment() {
	      return new TypeError("You cannot resolve a promise with itself");
	    }
	
	    function lib$es6$promise$$internal$$cannotReturnOwn() {
	      return new TypeError('A promises callback cannot return that same promise.');
	    }
	
	    function lib$es6$promise$$internal$$getThen(promise) {
	      try {
	        return promise.then;
	      } catch(error) {
	        lib$es6$promise$$internal$$GET_THEN_ERROR.error = error;
	        return lib$es6$promise$$internal$$GET_THEN_ERROR;
	      }
	    }
	
	    function lib$es6$promise$$internal$$tryThen(then, value, fulfillmentHandler, rejectionHandler) {
	      try {
	        then.call(value, fulfillmentHandler, rejectionHandler);
	      } catch(e) {
	        return e;
	      }
	    }
	
	    function lib$es6$promise$$internal$$handleForeignThenable(promise, thenable, then) {
	       lib$es6$promise$asap$$asap(function(promise) {
	        var sealed = false;
	        var error = lib$es6$promise$$internal$$tryThen(then, thenable, function(value) {
	          if (sealed) { return; }
	          sealed = true;
	          if (thenable !== value) {
	            lib$es6$promise$$internal$$resolve(promise, value);
	          } else {
	            lib$es6$promise$$internal$$fulfill(promise, value);
	          }
	        }, function(reason) {
	          if (sealed) { return; }
	          sealed = true;
	
	          lib$es6$promise$$internal$$reject(promise, reason);
	        }, 'Settle: ' + (promise._label || ' unknown promise'));
	
	        if (!sealed && error) {
	          sealed = true;
	          lib$es6$promise$$internal$$reject(promise, error);
	        }
	      }, promise);
	    }
	
	    function lib$es6$promise$$internal$$handleOwnThenable(promise, thenable) {
	      if (thenable._state === lib$es6$promise$$internal$$FULFILLED) {
	        lib$es6$promise$$internal$$fulfill(promise, thenable._result);
	      } else if (thenable._state === lib$es6$promise$$internal$$REJECTED) {
	        lib$es6$promise$$internal$$reject(promise, thenable._result);
	      } else {
	        lib$es6$promise$$internal$$subscribe(thenable, undefined, function(value) {
	          lib$es6$promise$$internal$$resolve(promise, value);
	        }, function(reason) {
	          lib$es6$promise$$internal$$reject(promise, reason);
	        });
	      }
	    }
	
	    function lib$es6$promise$$internal$$handleMaybeThenable(promise, maybeThenable, then) {
	      if (maybeThenable.constructor === promise.constructor &&
	          then === lib$es6$promise$then$$default &&
	          constructor.resolve === lib$es6$promise$promise$resolve$$default) {
	        lib$es6$promise$$internal$$handleOwnThenable(promise, maybeThenable);
	      } else {
	        if (then === lib$es6$promise$$internal$$GET_THEN_ERROR) {
	          lib$es6$promise$$internal$$reject(promise, lib$es6$promise$$internal$$GET_THEN_ERROR.error);
	        } else if (then === undefined) {
	          lib$es6$promise$$internal$$fulfill(promise, maybeThenable);
	        } else if (lib$es6$promise$utils$$isFunction(then)) {
	          lib$es6$promise$$internal$$handleForeignThenable(promise, maybeThenable, then);
	        } else {
	          lib$es6$promise$$internal$$fulfill(promise, maybeThenable);
	        }
	      }
	    }
	
	    function lib$es6$promise$$internal$$resolve(promise, value) {
	      if (promise === value) {
	        lib$es6$promise$$internal$$reject(promise, lib$es6$promise$$internal$$selfFulfillment());
	      } else if (lib$es6$promise$utils$$objectOrFunction(value)) {
	        lib$es6$promise$$internal$$handleMaybeThenable(promise, value, lib$es6$promise$$internal$$getThen(value));
	      } else {
	        lib$es6$promise$$internal$$fulfill(promise, value);
	      }
	    }
	
	    function lib$es6$promise$$internal$$publishRejection(promise) {
	      if (promise._onerror) {
	        promise._onerror(promise._result);
	      }
	
	      lib$es6$promise$$internal$$publish(promise);
	    }
	
	    function lib$es6$promise$$internal$$fulfill(promise, value) {
	      if (promise._state !== lib$es6$promise$$internal$$PENDING) { return; }
	
	      promise._result = value;
	      promise._state = lib$es6$promise$$internal$$FULFILLED;
	
	      if (promise._subscribers.length !== 0) {
	        lib$es6$promise$asap$$asap(lib$es6$promise$$internal$$publish, promise);
	      }
	    }
	
	    function lib$es6$promise$$internal$$reject(promise, reason) {
	      if (promise._state !== lib$es6$promise$$internal$$PENDING) { return; }
	      promise._state = lib$es6$promise$$internal$$REJECTED;
	      promise._result = reason;
	
	      lib$es6$promise$asap$$asap(lib$es6$promise$$internal$$publishRejection, promise);
	    }
	
	    function lib$es6$promise$$internal$$subscribe(parent, child, onFulfillment, onRejection) {
	      var subscribers = parent._subscribers;
	      var length = subscribers.length;
	
	      parent._onerror = null;
	
	      subscribers[length] = child;
	      subscribers[length + lib$es6$promise$$internal$$FULFILLED] = onFulfillment;
	      subscribers[length + lib$es6$promise$$internal$$REJECTED]  = onRejection;
	
	      if (length === 0 && parent._state) {
	        lib$es6$promise$asap$$asap(lib$es6$promise$$internal$$publish, parent);
	      }
	    }
	
	    function lib$es6$promise$$internal$$publish(promise) {
	      var subscribers = promise._subscribers;
	      var settled = promise._state;
	
	      if (subscribers.length === 0) { return; }
	
	      var child, callback, detail = promise._result;
	
	      for (var i = 0; i < subscribers.length; i += 3) {
	        child = subscribers[i];
	        callback = subscribers[i + settled];
	
	        if (child) {
	          lib$es6$promise$$internal$$invokeCallback(settled, child, callback, detail);
	        } else {
	          callback(detail);
	        }
	      }
	
	      promise._subscribers.length = 0;
	    }
	
	    function lib$es6$promise$$internal$$ErrorObject() {
	      this.error = null;
	    }
	
	    var lib$es6$promise$$internal$$TRY_CATCH_ERROR = new lib$es6$promise$$internal$$ErrorObject();
	
	    function lib$es6$promise$$internal$$tryCatch(callback, detail) {
	      try {
	        return callback(detail);
	      } catch(e) {
	        lib$es6$promise$$internal$$TRY_CATCH_ERROR.error = e;
	        return lib$es6$promise$$internal$$TRY_CATCH_ERROR;
	      }
	    }
	
	    function lib$es6$promise$$internal$$invokeCallback(settled, promise, callback, detail) {
	      var hasCallback = lib$es6$promise$utils$$isFunction(callback),
	          value, error, succeeded, failed;
	
	      if (hasCallback) {
	        value = lib$es6$promise$$internal$$tryCatch(callback, detail);
	
	        if (value === lib$es6$promise$$internal$$TRY_CATCH_ERROR) {
	          failed = true;
	          error = value.error;
	          value = null;
	        } else {
	          succeeded = true;
	        }
	
	        if (promise === value) {
	          lib$es6$promise$$internal$$reject(promise, lib$es6$promise$$internal$$cannotReturnOwn());
	          return;
	        }
	
	      } else {
	        value = detail;
	        succeeded = true;
	      }
	
	      if (promise._state !== lib$es6$promise$$internal$$PENDING) {
	        // noop
	      } else if (hasCallback && succeeded) {
	        lib$es6$promise$$internal$$resolve(promise, value);
	      } else if (failed) {
	        lib$es6$promise$$internal$$reject(promise, error);
	      } else if (settled === lib$es6$promise$$internal$$FULFILLED) {
	        lib$es6$promise$$internal$$fulfill(promise, value);
	      } else if (settled === lib$es6$promise$$internal$$REJECTED) {
	        lib$es6$promise$$internal$$reject(promise, value);
	      }
	    }
	
	    function lib$es6$promise$$internal$$initializePromise(promise, resolver) {
	      try {
	        resolver(function resolvePromise(value){
	          lib$es6$promise$$internal$$resolve(promise, value);
	        }, function rejectPromise(reason) {
	          lib$es6$promise$$internal$$reject(promise, reason);
	        });
	      } catch(e) {
	        lib$es6$promise$$internal$$reject(promise, e);
	      }
	    }
	
	    var lib$es6$promise$$internal$$id = 0;
	    function lib$es6$promise$$internal$$nextId() {
	      return lib$es6$promise$$internal$$id++;
	    }
	
	    function lib$es6$promise$$internal$$makePromise(promise) {
	      promise[lib$es6$promise$$internal$$PROMISE_ID] = lib$es6$promise$$internal$$id++;
	      promise._state = undefined;
	      promise._result = undefined;
	      promise._subscribers = [];
	    }
	
	    function lib$es6$promise$promise$all$$all(entries) {
	      return new lib$es6$promise$enumerator$$default(this, entries).promise;
	    }
	    var lib$es6$promise$promise$all$$default = lib$es6$promise$promise$all$$all;
	    function lib$es6$promise$promise$race$$race(entries) {
	      /*jshint validthis:true */
	      var Constructor = this;
	
	      if (!lib$es6$promise$utils$$isArray(entries)) {
	        return new Constructor(function(resolve, reject) {
	          reject(new TypeError('You must pass an array to race.'));
	        });
	      } else {
	        return new Constructor(function(resolve, reject) {
	          var length = entries.length;
	          for (var i = 0; i < length; i++) {
	            Constructor.resolve(entries[i]).then(resolve, reject);
	          }
	        });
	      }
	    }
	    var lib$es6$promise$promise$race$$default = lib$es6$promise$promise$race$$race;
	    function lib$es6$promise$promise$reject$$reject(reason) {
	      /*jshint validthis:true */
	      var Constructor = this;
	      var promise = new Constructor(lib$es6$promise$$internal$$noop);
	      lib$es6$promise$$internal$$reject(promise, reason);
	      return promise;
	    }
	    var lib$es6$promise$promise$reject$$default = lib$es6$promise$promise$reject$$reject;
	
	
	    function lib$es6$promise$promise$$needsResolver() {
	      throw new TypeError('You must pass a resolver function as the first argument to the promise constructor');
	    }
	
	    function lib$es6$promise$promise$$needsNew() {
	      throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.");
	    }
	
	    var lib$es6$promise$promise$$default = lib$es6$promise$promise$$Promise;
	    /**
	      Promise objects represent the eventual result of an asynchronous operation. The
	      primary way of interacting with a promise is through its `then` method, which
	      registers callbacks to receive either a promise's eventual value or the reason
	      why the promise cannot be fulfilled.
	
	      Terminology
	      -----------
	
	      - `promise` is an object or function with a `then` method whose behavior conforms to this specification.
	      - `thenable` is an object or function that defines a `then` method.
	      - `value` is any legal JavaScript value (including undefined, a thenable, or a promise).
	      - `exception` is a value that is thrown using the throw statement.
	      - `reason` is a value that indicates why a promise was rejected.
	      - `settled` the final resting state of a promise, fulfilled or rejected.
	
	      A promise can be in one of three states: pending, fulfilled, or rejected.
	
	      Promises that are fulfilled have a fulfillment value and are in the fulfilled
	      state.  Promises that are rejected have a rejection reason and are in the
	      rejected state.  A fulfillment value is never a thenable.
	
	      Promises can also be said to *resolve* a value.  If this value is also a
	      promise, then the original promise's settled state will match the value's
	      settled state.  So a promise that *resolves* a promise that rejects will
	      itself reject, and a promise that *resolves* a promise that fulfills will
	      itself fulfill.
	
	
	      Basic Usage:
	      ------------
	
	      ```js
	      var promise = new Promise(function(resolve, reject) {
	        // on success
	        resolve(value);
	
	        // on failure
	        reject(reason);
	      });
	
	      promise.then(function(value) {
	        // on fulfillment
	      }, function(reason) {
	        // on rejection
	      });
	      ```
	
	      Advanced Usage:
	      ---------------
	
	      Promises shine when abstracting away asynchronous interactions such as
	      `XMLHttpRequest`s.
	
	      ```js
	      function getJSON(url) {
	        return new Promise(function(resolve, reject){
	          var xhr = new XMLHttpRequest();
	
	          xhr.open('GET', url);
	          xhr.onreadystatechange = handler;
	          xhr.responseType = 'json';
	          xhr.setRequestHeader('Accept', 'application/json');
	          xhr.send();
	
	          function handler() {
	            if (this.readyState === this.DONE) {
	              if (this.status === 200) {
	                resolve(this.response);
	              } else {
	                reject(new Error('getJSON: `' + url + '` failed with status: [' + this.status + ']'));
	              }
	            }
	          };
	        });
	      }
	
	      getJSON('/posts.json').then(function(json) {
	        // on fulfillment
	      }, function(reason) {
	        // on rejection
	      });
	      ```
	
	      Unlike callbacks, promises are great composable primitives.
	
	      ```js
	      Promise.all([
	        getJSON('/posts'),
	        getJSON('/comments')
	      ]).then(function(values){
	        values[0] // => postsJSON
	        values[1] // => commentsJSON
	
	        return values;
	      });
	      ```
	
	      @class Promise
	      @param {function} resolver
	      Useful for tooling.
	      @constructor
	    */
	    function lib$es6$promise$promise$$Promise(resolver) {
	      this[lib$es6$promise$$internal$$PROMISE_ID] = lib$es6$promise$$internal$$nextId();
	      this._result = this._state = undefined;
	      this._subscribers = [];
	
	      if (lib$es6$promise$$internal$$noop !== resolver) {
	        typeof resolver !== 'function' && lib$es6$promise$promise$$needsResolver();
	        this instanceof lib$es6$promise$promise$$Promise ? lib$es6$promise$$internal$$initializePromise(this, resolver) : lib$es6$promise$promise$$needsNew();
	      }
	    }
	
	    lib$es6$promise$promise$$Promise.all = lib$es6$promise$promise$all$$default;
	    lib$es6$promise$promise$$Promise.race = lib$es6$promise$promise$race$$default;
	    lib$es6$promise$promise$$Promise.resolve = lib$es6$promise$promise$resolve$$default;
	    lib$es6$promise$promise$$Promise.reject = lib$es6$promise$promise$reject$$default;
	    lib$es6$promise$promise$$Promise._setScheduler = lib$es6$promise$asap$$setScheduler;
	    lib$es6$promise$promise$$Promise._setAsap = lib$es6$promise$asap$$setAsap;
	    lib$es6$promise$promise$$Promise._asap = lib$es6$promise$asap$$asap;
	
	    lib$es6$promise$promise$$Promise.prototype = {
	      constructor: lib$es6$promise$promise$$Promise,
	
	    /**
	      The primary way of interacting with a promise is through its `then` method,
	      which registers callbacks to receive either a promise's eventual value or the
	      reason why the promise cannot be fulfilled.
	
	      ```js
	      findUser().then(function(user){
	        // user is available
	      }, function(reason){
	        // user is unavailable, and you are given the reason why
	      });
	      ```
	
	      Chaining
	      --------
	
	      The return value of `then` is itself a promise.  This second, 'downstream'
	      promise is resolved with the return value of the first promise's fulfillment
	      or rejection handler, or rejected if the handler throws an exception.
	
	      ```js
	      findUser().then(function (user) {
	        return user.name;
	      }, function (reason) {
	        return 'default name';
	      }).then(function (userName) {
	        // If `findUser` fulfilled, `userName` will be the user's name, otherwise it
	        // will be `'default name'`
	      });
	
	      findUser().then(function (user) {
	        throw new Error('Found user, but still unhappy');
	      }, function (reason) {
	        throw new Error('`findUser` rejected and we're unhappy');
	      }).then(function (value) {
	        // never reached
	      }, function (reason) {
	        // if `findUser` fulfilled, `reason` will be 'Found user, but still unhappy'.
	        // If `findUser` rejected, `reason` will be '`findUser` rejected and we're unhappy'.
	      });
	      ```
	      If the downstream promise does not specify a rejection handler, rejection reasons will be propagated further downstream.
	
	      ```js
	      findUser().then(function (user) {
	        throw new PedagogicalException('Upstream error');
	      }).then(function (value) {
	        // never reached
	      }).then(function (value) {
	        // never reached
	      }, function (reason) {
	        // The `PedgagocialException` is propagated all the way down to here
	      });
	      ```
	
	      Assimilation
	      ------------
	
	      Sometimes the value you want to propagate to a downstream promise can only be
	      retrieved asynchronously. This can be achieved by returning a promise in the
	      fulfillment or rejection handler. The downstream promise will then be pending
	      until the returned promise is settled. This is called *assimilation*.
	
	      ```js
	      findUser().then(function (user) {
	        return findCommentsByAuthor(user);
	      }).then(function (comments) {
	        // The user's comments are now available
	      });
	      ```
	
	      If the assimliated promise rejects, then the downstream promise will also reject.
	
	      ```js
	      findUser().then(function (user) {
	        return findCommentsByAuthor(user);
	      }).then(function (comments) {
	        // If `findCommentsByAuthor` fulfills, we'll have the value here
	      }, function (reason) {
	        // If `findCommentsByAuthor` rejects, we'll have the reason here
	      });
	      ```
	
	      Simple Example
	      --------------
	
	      Synchronous Example
	
	      ```javascript
	      var result;
	
	      try {
	        result = findResult();
	        // success
	      } catch(reason) {
	        // failure
	      }
	      ```
	
	      Errback Example
	
	      ```js
	      findResult(function(result, err){
	        if (err) {
	          // failure
	        } else {
	          // success
	        }
	      });
	      ```
	
	      Promise Example;
	
	      ```javascript
	      findResult().then(function(result){
	        // success
	      }, function(reason){
	        // failure
	      });
	      ```
	
	      Advanced Example
	      --------------
	
	      Synchronous Example
	
	      ```javascript
	      var author, books;
	
	      try {
	        author = findAuthor();
	        books  = findBooksByAuthor(author);
	        // success
	      } catch(reason) {
	        // failure
	      }
	      ```
	
	      Errback Example
	
	      ```js
	
	      function foundBooks(books) {
	
	      }
	
	      function failure(reason) {
	
	      }
	
	      findAuthor(function(author, err){
	        if (err) {
	          failure(err);
	          // failure
	        } else {
	          try {
	            findBoooksByAuthor(author, function(books, err) {
	              if (err) {
	                failure(err);
	              } else {
	                try {
	                  foundBooks(books);
	                } catch(reason) {
	                  failure(reason);
	                }
	              }
	            });
	          } catch(error) {
	            failure(err);
	          }
	          // success
	        }
	      });
	      ```
	
	      Promise Example;
	
	      ```javascript
	      findAuthor().
	        then(findBooksByAuthor).
	        then(function(books){
	          // found books
	      }).catch(function(reason){
	        // something went wrong
	      });
	      ```
	
	      @method then
	      @param {Function} onFulfilled
	      @param {Function} onRejected
	      Useful for tooling.
	      @return {Promise}
	    */
	      then: lib$es6$promise$then$$default,
	
	    /**
	      `catch` is simply sugar for `then(undefined, onRejection)` which makes it the same
	      as the catch block of a try/catch statement.
	
	      ```js
	      function findAuthor(){
	        throw new Error('couldn't find that author');
	      }
	
	      // synchronous
	      try {
	        findAuthor();
	      } catch(reason) {
	        // something went wrong
	      }
	
	      // async with promises
	      findAuthor().catch(function(reason){
	        // something went wrong
	      });
	      ```
	
	      @method catch
	      @param {Function} onRejection
	      Useful for tooling.
	      @return {Promise}
	    */
	      'catch': function(onRejection) {
	        return this.then(null, onRejection);
	      }
	    };
	    var lib$es6$promise$enumerator$$default = lib$es6$promise$enumerator$$Enumerator;
	    function lib$es6$promise$enumerator$$Enumerator(Constructor, input) {
	      this._instanceConstructor = Constructor;
	      this.promise = new Constructor(lib$es6$promise$$internal$$noop);
	
	      if (!this.promise[lib$es6$promise$$internal$$PROMISE_ID]) {
	        lib$es6$promise$$internal$$makePromise(this.promise);
	      }
	
	      if (lib$es6$promise$utils$$isArray(input)) {
	        this._input     = input;
	        this.length     = input.length;
	        this._remaining = input.length;
	
	        this._result = new Array(this.length);
	
	        if (this.length === 0) {
	          lib$es6$promise$$internal$$fulfill(this.promise, this._result);
	        } else {
	          this.length = this.length || 0;
	          this._enumerate();
	          if (this._remaining === 0) {
	            lib$es6$promise$$internal$$fulfill(this.promise, this._result);
	          }
	        }
	      } else {
	        lib$es6$promise$$internal$$reject(this.promise, lib$es6$promise$enumerator$$validationError());
	      }
	    }
	
	    function lib$es6$promise$enumerator$$validationError() {
	      return new Error('Array Methods must be provided an Array');
	    }
	
	    lib$es6$promise$enumerator$$Enumerator.prototype._enumerate = function() {
	      var length  = this.length;
	      var input   = this._input;
	
	      for (var i = 0; this._state === lib$es6$promise$$internal$$PENDING && i < length; i++) {
	        this._eachEntry(input[i], i);
	      }
	    };
	
	    lib$es6$promise$enumerator$$Enumerator.prototype._eachEntry = function(entry, i) {
	      var c = this._instanceConstructor;
	      var resolve = c.resolve;
	
	      if (resolve === lib$es6$promise$promise$resolve$$default) {
	        var then = lib$es6$promise$$internal$$getThen(entry);
	
	        if (then === lib$es6$promise$then$$default &&
	            entry._state !== lib$es6$promise$$internal$$PENDING) {
	          this._settledAt(entry._state, i, entry._result);
	        } else if (typeof then !== 'function') {
	          this._remaining--;
	          this._result[i] = entry;
	        } else if (c === lib$es6$promise$promise$$default) {
	          var promise = new c(lib$es6$promise$$internal$$noop);
	          lib$es6$promise$$internal$$handleMaybeThenable(promise, entry, then);
	          this._willSettleAt(promise, i);
	        } else {
	          this._willSettleAt(new c(function(resolve) { resolve(entry); }), i);
	        }
	      } else {
	        this._willSettleAt(resolve(entry), i);
	      }
	    };
	
	    lib$es6$promise$enumerator$$Enumerator.prototype._settledAt = function(state, i, value) {
	      var promise = this.promise;
	
	      if (promise._state === lib$es6$promise$$internal$$PENDING) {
	        this._remaining--;
	
	        if (state === lib$es6$promise$$internal$$REJECTED) {
	          lib$es6$promise$$internal$$reject(promise, value);
	        } else {
	          this._result[i] = value;
	        }
	      }
	
	      if (this._remaining === 0) {
	        lib$es6$promise$$internal$$fulfill(promise, this._result);
	      }
	    };
	
	    lib$es6$promise$enumerator$$Enumerator.prototype._willSettleAt = function(promise, i) {
	      var enumerator = this;
	
	      lib$es6$promise$$internal$$subscribe(promise, undefined, function(value) {
	        enumerator._settledAt(lib$es6$promise$$internal$$FULFILLED, i, value);
	      }, function(reason) {
	        enumerator._settledAt(lib$es6$promise$$internal$$REJECTED, i, reason);
	      });
	    };
	    function lib$es6$promise$polyfill$$polyfill() {
	      var local;
	
	      if (typeof global !== 'undefined') {
	          local = global;
	      } else if (typeof self !== 'undefined') {
	          local = self;
	      } else {
	          try {
	              local = Function('return this')();
	          } catch (e) {
	              throw new Error('polyfill failed because global object is unavailable in this environment');
	          }
	      }
	
	      var P = local.Promise;
	
	      if (P && Object.prototype.toString.call(P.resolve()) === '[object Promise]' && !P.cast) {
	        return;
	      }
	
	      local.Promise = lib$es6$promise$promise$$default;
	    }
	    var lib$es6$promise$polyfill$$default = lib$es6$promise$polyfill$$polyfill;
	
	    var lib$es6$promise$umd$$ES6Promise = {
	      'Promise': lib$es6$promise$promise$$default,
	      'polyfill': lib$es6$promise$polyfill$$default
	    };
	
	    /* global define:true module:true window: true */
	    if ("function" === 'function' && __webpack_require__(41)['amd']) {
	      !(__WEBPACK_AMD_DEFINE_RESULT__ = function() { return lib$es6$promise$umd$$ES6Promise; }.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	    } else if (typeof module !== 'undefined' && module['exports']) {
	      module['exports'] = lib$es6$promise$umd$$ES6Promise;
	    } else if (typeof this !== 'undefined') {
	      this['ES6Promise'] = lib$es6$promise$umd$$ES6Promise;
	    }
	
	    lib$es6$promise$polyfill$$default();
	}).call(this);
	
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(38), (function() { return this; }()), __webpack_require__(39)(module)))

/***/ },
/* 38 */
/***/ function(module, exports) {

	// shim for using process in browser
	var process = module.exports = {};
	
	// cached from whatever global is present so that test runners that stub it
	// don't break things.  But we need to wrap it in a try catch in case it is
	// wrapped in strict mode code which doesn't define any globals.  It's inside a
	// function because try/catches deoptimize in certain engines.
	
	var cachedSetTimeout;
	var cachedClearTimeout;
	
	function defaultSetTimout() {
	    throw new Error('setTimeout has not been defined');
	}
	function defaultClearTimeout () {
	    throw new Error('clearTimeout has not been defined');
	}
	(function () {
	    try {
	        if (typeof setTimeout === 'function') {
	            cachedSetTimeout = setTimeout;
	        } else {
	            cachedSetTimeout = defaultSetTimout;
	        }
	    } catch (e) {
	        cachedSetTimeout = defaultSetTimout;
	    }
	    try {
	        if (typeof clearTimeout === 'function') {
	            cachedClearTimeout = clearTimeout;
	        } else {
	            cachedClearTimeout = defaultClearTimeout;
	        }
	    } catch (e) {
	        cachedClearTimeout = defaultClearTimeout;
	    }
	} ())
	function runTimeout(fun) {
	    if (cachedSetTimeout === setTimeout) {
	        //normal enviroments in sane situations
	        return setTimeout(fun, 0);
	    }
	    // if setTimeout wasn't available but was latter defined
	    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
	        cachedSetTimeout = setTimeout;
	        return setTimeout(fun, 0);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedSetTimeout(fun, 0);
	    } catch(e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
	            return cachedSetTimeout.call(null, fun, 0);
	        } catch(e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
	            return cachedSetTimeout.call(this, fun, 0);
	        }
	    }
	
	
	}
	function runClearTimeout(marker) {
	    if (cachedClearTimeout === clearTimeout) {
	        //normal enviroments in sane situations
	        return clearTimeout(marker);
	    }
	    // if clearTimeout wasn't available but was latter defined
	    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
	        cachedClearTimeout = clearTimeout;
	        return clearTimeout(marker);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedClearTimeout(marker);
	    } catch (e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
	            return cachedClearTimeout.call(null, marker);
	        } catch (e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
	            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
	            return cachedClearTimeout.call(this, marker);
	        }
	    }
	
	
	
	}
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;
	
	function cleanUpNextTick() {
	    if (!draining || !currentQueue) {
	        return;
	    }
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}
	
	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = runTimeout(cleanUpNextTick);
	    draining = true;
	
	    var len = queue.length;
	    while(len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            if (currentQueue) {
	                currentQueue[queueIndex].run();
	            }
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    runClearTimeout(timeout);
	}
	
	process.nextTick = function (fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        runTimeout(drainQueue);
	    }
	};
	
	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = ''; // empty string to avoid regexp issues
	process.versions = {};
	
	function noop() {}
	
	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;
	
	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};
	
	process.cwd = function () { return '/' };
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function() { return 0; };


/***/ },
/* 39 */
/***/ function(module, exports) {

	module.exports = function(module) {
		if(!module.webpackPolyfill) {
			module.deprecate = function() {};
			module.paths = [];
			// module.parent = undefined by default
			module.children = [];
			module.webpackPolyfill = 1;
		}
		return module;
	}


/***/ },
/* 40 */
/***/ function(module, exports) {

	/* (ignored) */

/***/ },
/* 41 */
/***/ function(module, exports) {

	module.exports = function() { throw new Error("define cannot be used indirect"); };


/***/ },
/* 42 */
/***/ function(module, exports) {

	module.exports = "<div class=\"${ns}\">\n\t<div class=\"${ns}-img\"></div>\n\t<div class=\"${ns}-data\"></div>\n</div>\n"

/***/ },
/* 43 */
/***/ function(module, exports) {

	module.exports = "<div class=\"${ns}-contact-type\"></div>\n<div class=\"${ns}-contact-data\"></div>\n"

/***/ },
/* 44 */
/***/ function(module, exports) {

	module.exports = "<div class=\"${ns}-locations-item ${ns}-multiple-locations ${ns}-data-section IBMChat-secondary-colors\">\n\t<div class=\"${ns}-locations-row\">\n\t\t<div class=\"${ns}-locations-item-icon ${ns}-locations-cell\"></div>\n\t\t<div class=\"${ns}-locations-item-data ${ns}-locations-cell\">\n\t\t\t<div class=\"${ns}-locations-item-data-title\"></div>\n\t\t\t<div class=\"${ns}-locations-item-data-items\">\n\t\t\t\t<div class=\"${ns}-locations-item-data-address\"></div>\n\t\t\t\t<div class=\"${ns}-locations-item-distance\"></div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n"

/***/ },
/* 45 */
/***/ function(module, exports) {

	module.exports = "<div class=\"${ns}-locations-item ${ns}-data-section IBMChat-secondary-colors\">\n\t<div class=\"${ns}-locations-item-data-section\">\n\t\t<button class=\"${ns}-locations-all IBMChat-accent-colors\">Back to All Locations</button>\n\t</div>\n\t<div class=\"${ns}-locations-item-data\">\n\t\t<div class=\"${ns}-locations-item-data-title\"></div>\n\t\t<div class=\"${ns}-locations-item-data-items\">\n\t\t\t<div class=\"${ns}-locations-item-data-section\">\n\t\t\t\t<a class=\"${ns}-locations-item-data-address-link\">\n\t\t\t\t\t<div class=\"${ns}-locations-item-data-address\"></div>\n\t\t\t\t</a>\n\t\t\t</div>\n\t\t\t<div class=\"${ns}-locations-item-data-email\"></div>\n\t\t\t<div class=\"${ns}-locations-item-data-phone\"></div>\n\t\t\t<div class=\"${ns}-locations-item-data-hours\"></div>\n\t\t\t<div class=\"${ns}-locations-item-data-timezone\"></div>\n\t\t</div>\n\t\t<button class=\"${ns}-locations-item-data-hours-button IBMChat-accent-colors\">More Hours</button>\n\t\t<div class=\"${ns}-locations-item-data-items\">\n\t\t\t<div class=\"${ns}-locations-item-data-more-hours ${ns}-hidden\"></div>\n\t\t</div>\n\t</div>\n\t<div class=\"${ns}-locations-item-distance\"></div>\n</div>\n"

/***/ },
/* 46 */
/***/ function(module, exports) {

	module.exports = "<div class=\"${ns}-days-hours-day\">\n\t${day}\n</div>\n<div class=\"${ns}-days-hours-hours\">\n\tClosed\n</div>\n"

/***/ },
/* 47 */
/***/ function(module, exports) {

	module.exports = "<div class=\"${ns}-days-hours-day\">\n\t${day}\n</div>\n<div class=\"${ns}-days-hours-hours\">\n\t${open} &ndash; ${close}\n</div>\n"

/***/ },
/* 48 */
/***/ function(module, exports) {

	module.exports = "<div class=\"${ns}-hours-open\">Open today:</div>\n<div class=\"${ns}-hours-today\">\n\t${open} &ndash; ${close}\n</div>"

/***/ },
/* 49 */
/***/ function(module, exports) {

	module.exports = "<div class=\"${ns}-hours-open\">Closed today.</div>"

/***/ },
/* 50 */
/***/ function(module, exports) {

	module.exports = "<div class=\"${ns}-hours-timezone\">( ${timezone} )</div>"

/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	/**
	* (C) Copyright IBM Corp. 2016. All Rights Reserved.
	*
	* Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except
	* in compliance with the License. You may obtain a copy of the License at
	*
	* http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software distributed under the License
	* is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express
	* or implied. See the License for the specific language governing permissions and limitations under
	* the License.
	*/
	
	var events = __webpack_require__(9);
	var subscribe = events.subscribe;
	var publish = events.publish;
	
	var requestGeolocationLatlongs = [];
	
	var LOCATION_TIMEOUT = 20 * 1000;
	
	var requestGeolocationLatlongLayout = {
		init: function() {
			subscribe('layout:request-geolocation-latlong', function(data) {
				var requestGeolocationLatlong = new RequestGeolocationLatlong(data);
				requestGeolocationLatlongs[data.uuid] = requestGeolocationLatlong;
			});
		}
	};
	
	function RequestGeolocationLatlong(data) {
		this.init(data);
	}
	
	RequestGeolocationLatlong.prototype = {
		init: function(data) {
			this.data = data.data;
			this.uuid = data.uuid;
			this.parentElement = data.element;
			this.layoutElement = data.layoutElement;
			this.timedOut = false;
			this.timeoutCheck = setTimeout(function() {
				this.timedOut = true;
				this.handleLocationNotShared();
			}.bind(this), LOCATION_TIMEOUT);
			publish('enable-loading');
			publish('disable-input');
			navigator.geolocation.getCurrentPosition(
				function(position) {
					if (this.timedOut) return false;
					clearTimeout(this.timeoutCheck);
					this.handleLocationShared(position);
				}.bind(this),
				function() {
					if (this.timedOut) return false;
					clearTimeout(this.timeoutCheck);
					this.handleLocationNotShared();
				}.bind(this)
			);
		},
		handleLocationShared: function(position) {
			publish('enable-input');
			publish('disable-loading');
			publish('send', {
				text: position.coords.latitude + ',' + position.coords.longitude,
				silent: true
			});
		},
		handleLocationNotShared: function() {
			publish('enable-input');
			publish('disable-loading');
			publish('receive', "You haven't shared your location on this website.");
			publish('send', {
				text: 'find nearest locations',
				silent: true
			});
		}
	};
	
	module.exports = requestGeolocationLatlongLayout;


/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	/**
	* (C) Copyright IBM Corp. 2016. All Rights Reserved.
	*
	* Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except
	* in compliance with the License. You may obtain a copy of the License at
	*
	* http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software distributed under the License
	* is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express
	* or implied. See the License for the specific language governing permissions and limitations under
	* the License.
	*/
	
	var events = __webpack_require__(9);
	var subscribe = events.subscribe;
	var requestGeolocationZipcodeLayout = {
		init: function() {
			subscribe('layout:request-geolocation-zipcode', function() {});
		}
	};
	
	module.exports = requestGeolocationZipcodeLayout;


/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	/**
	* (C) Copyright IBM Corp. 2016. All Rights Reserved.
	*
	* Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except
	* in compliance with the License. You may obtain a copy of the License at
	*
	* http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software distributed under the License
	* is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express
	* or implied. See the License for the specific language governing permissions and limitations under
	* the License.
	*/
	
	__webpack_require__(54);
	
	var events = __webpack_require__(9);
	var subscribe = events.subscribe;
	var publish = events.publish;
	var activeClassName = 'IBMChat-accent-colors';
	var inactiveClassName = 'IBMChat-secondary-colors';
	var utils = __webpack_require__(35);
	
	var ns = 'IBMChat-islocationapi';
	var chooseLocationTypes = [];
	
	var chooseLocationTypeLayout = {
		init: function() {
			subscribe('layout:choose-location-type', function(data) {
				var chooseLocationType = new ChooseLocationType(data);
				chooseLocationTypes[data.uuid] = chooseLocationType;
			});
		}
	};
	
	var values = {
		postalcode: 'zipcode',
		geolocation: 'latlong'
	};
	
	var templates = {
		base: __webpack_require__(56)
	};
	
	function ChooseLocationType(data) {
		this.init(data);
	}
	
	ChooseLocationType.prototype = {
		init: function(data) {
			this.data = data.data;
			this.uuid = data.uuid;
			if ('navigator' in window && 'geolocation' in navigator) {
				this.eventListeners = [];
				this.parentElement = data.element;
				this.layoutElement = data.layoutElement;
				this.el = document.createElement('div');
				this.el.innerHTML = utils.compile(templates.base, {
					ns: ns,
					'values.geolocation': values.geolocation,
					'values.postalcode': values.postalcode
				});
				this.layoutElement.appendChild(this.el);
				this.buttons = this.layoutElement.querySelectorAll('button');
				for (var i = 0; i < this.buttons.length; i++) {
					this.buttons[i].dataset.uuid = this.uuid;
					this.buttons[i].addEventListener('click', this.handleClick);
					this.eventListeners.push(this.buttons[i]);
				}
				if (this.eventListeners.length > 0)
					this.subscribeSend = subscribe('send', this.removeAllEventListeners.bind(this));
			} else {
				publish('send', {
					text: values.postalcode,
					silent: true
				});
			}
		},
		handleClick: function() {
			var data = {
				silent: true,
				text: null
			};
			data.text = this.dataset.input;
			this.classList.add(activeClassName);
			this.classList.remove(inactiveClassName);
			publish('send', data);
			publish('focus-input');
		},
		removeAllEventListeners: function() {
			if (this.eventListeners.length > 0) {
				for (var i = 0; i < this.eventListeners.length; i++) {
					this.eventListeners[i].removeEventListener('click', this.handleClick);
					this.eventListeners[i].setAttribute('disabled', true);
				}
				this.eventListeners = [];
			}
			this.subscribeSend.remove();
		}
	};
	
	module.exports = chooseLocationTypeLayout;


/***/ },
/* 54 */
[96, 55],
/* 55 */
/***/ function(module, exports) {

	module.exports = ".IBMChat-islocationapi-container {\n\ttext-align:center;\n}\n\n.IBMChat-islocationapi-container button {\n\tmargin: 1em auto 0 auto;\n\tmin-width:200px;\n\tmax-width:240px;\n\twidth:75%;\n}\n\n.IBMChat-islocationapi-container div:last-child {\n\tmargin-bottom: 1em;\n}\n"

/***/ },
/* 56 */
/***/ function(module, exports) {

	module.exports = "<div class=\"${ns}-container\">\n\t<div><button class=\"IBMChat-secondary-colors\" data-input=\"${values.geolocation}\">Use My Current Location</button></div>\n\t<div><button class=\"IBMChat-secondary-colors\" data-input=\"${values.postalcode}\">A Zip Code</button></div>\n</div>\n"

/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	/**
	* (C) Copyright IBM Corp. 2016. All Rights Reserved.
	*
	* Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except
	* in compliance with the License. You may obtain a copy of the License at
	*
	* http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software distributed under the License
	* is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express
	* or implied. See the License for the specific language governing permissions and limitations under
	* the License.
	*/
	
	__webpack_require__(58);
	
	var events = __webpack_require__(9);
	var subscribe = events.subscribe;
	var publish = events.publish;
	var utils = __webpack_require__(35);
	var ns = 'IBMChat-choose';
	var activeClassName = 'IBMChat-accent-colors';
	var inactiveClassName = 'IBMChat-secondary-colors';
	var widgets = [];
	var templates = {
		button: __webpack_require__(60)
	};
	
	var chooseLayout = {
		init: function() {
			subscribe('layout:choose', function(data) {
				var widget = new Choose(data);
				widgets[data.uuid] = widget;
			});
			subscribe('layout:confirm', function(data) {
				var widget = new Choose(data);
				widgets[data.uuid] = widget;
			});
		}
	};
	
	function Choose(data) {
		this.init(data);
	}
	
	Choose.prototype.init = function(data) {
		this.allowMultiple = (data.message.inputvalidation.someOf !== undefined);
		this.values = [];
		this.data = (this.allowMultiple) ? data.message.inputvalidation.someOf : data.message.inputvalidation.oneOf;
		this.uuid = data.uuid;
		this.parentElement = data.element;
		this.layoutElement = data.layoutElement;
		this.msgElement = data.msgElement;
		this.drawButtons();
		this.subscribeSend = subscribe('send', this.removeAllEventListeners.bind(this));
	};
	
	Choose.prototype.eventListeners = [];
	
	Choose.prototype.drawButtons = function() {
		var tmpl = templates.button;
		this.el = document.createElement('div');
		this.el.classList.add(ns + '-container');
	
		for (var i = 0; i < this.data.length; i++) {
			var text = this.data[i];
			var buttonHolder = document.createElement('div');
			buttonHolder.classList.add(ns + '-option');
			var parsed = utils.compile(tmpl, {
				text: text
			});
			var button;
			buttonHolder.innerHTML = parsed;
			this.el.appendChild(buttonHolder);
			button = buttonHolder.querySelector('button');
			button.setAttribute('data-uuid', this.uuid);
			button.classList.add(inactiveClassName);
			this.addListener(button);
		}
	
		if (this.allowMultiple) {
			var submit = document.createElement('div');
			var submitBtn = utils.compile(templates.field, {
				text: 'Submit'
			});
			submit.className = ns + '-submit';
			submit.innerHTML = submitBtn;
			this.submitButton = submit.querySelector('button');
			this.submitButton.classList.add(activeClassName);
			this.submitButton.setAttribute('disabled', true);
			this.el.appendChild(submit);
			this.addSubmitListener(this.submitButton);
		}
	
		this.layoutElement.appendChild(this.el);
	};
	
	Choose.prototype.handleClick = function() {
		var data = {
			silent: true,
			text: null
		};
		data.text = this.dataset.input;
		this.className = activeClassName + ' IBMChat-accent-colors';
		publish('send', data);
	};
	
	Choose.prototype.handleMultiClick = function() {
		var buttons;
		var instance = widgets[this.dataset.uuid];
		if (utils.hasClass(this, activeClassName)) {
			this.classList.add(inactiveClassName);
			this.classList.remove(activeClassName);
		} else {
			this.classList.add(activeClassName);
			this.classList.remove(inactiveClassName);
		}
		buttons = instance.el.querySelectorAll('.' + ns + '-option .' + activeClassName);
		if (buttons.length > 0)
			instance.submitButton.removeAttribute('disabled');
		else
			instance.submitButton.setAttribute('disabled', true);
	};
	
	Choose.prototype.handleSubmit = function() {
		var buttons = this.el.querySelectorAll('.' + activeClassName);
		for (var i = 0; i < buttons.length; i++)
			this.values.push(buttons[i].dataset.input);
		publish('send', {
			silent: true,
			text: this.values.toString()
		});
	};
	
	Choose.prototype.addListener = function(el) {
		if (this.allowMultiple)
			el.addEventListener('click', this.handleMultiClick);
		else
			el.addEventListener('click', this.handleClick);
		this.eventListeners.push({ el: el, cb: (this.allowMultiple) ? this.handleMultiClick: this.handleClick });
	};
	
	Choose.prototype.addSubmitListener = function(el) {
		el.addEventListener('click', this.handleSubmit.bind(this));
		this.eventListeners.push({ el: el, cb: this.handleSubmit.bind(this) });
	};
	
	Choose.prototype.removeAllEventListeners = function() {
		if (this.eventListeners.length > 0) {
			for (var i = 0; i < this.eventListeners.length; i++) {
				this.eventListeners[i].el.removeEventListener('click', this.eventListeners[i].cb);
				this.eventListeners[i].el.setAttribute('disabled', true);
			}
			this.eventListeners = [];
			this.subscribeSend.remove();
		}
	};
	
	module.exports = chooseLayout;


/***/ },
/* 58 */
[96, 59],
/* 59 */
/***/ function(module, exports) {

	module.exports = ".IBMChat-choose-container {\n\ttext-align:center;\n\tpadding:0 0 1em 0;\n}\n\n.IBMChat-choose-container span {\n\tdisplay:inline-block;\n\tmargin: 1em 1em 0 1em;\n}\n\n.IBMChat-choose-container div {\n\tmargin: 1em auto 0 auto;\n}\n\n.IBMChat-choose-container button {\n\tmin-width:230px;\n\tmax-width:270px;\n}\n"

/***/ },
/* 60 */
/***/ function(module, exports) {

	module.exports = "<button class=\"IBMChat-secondary-colors\" data-input=\"${text}\">${text}</button>\n"

/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	/**
	* (C) Copyright IBM Corp. 2016. All Rights Reserved.
	*
	* Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except
	* in compliance with the License. You may obtain a copy of the License at
	*
	* http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software distributed under the License
	* is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express
	* or implied. See the License for the specific language governing permissions and limitations under
	* the License.
	*/
	
	__webpack_require__(62);
	
	var events = __webpack_require__(9);
	var profile = __webpack_require__(64);
	var utils = __webpack_require__(35);
	var subscribe = events.subscribe;
	var publish = events.publish;
	var ns = 'IBMChat-form';
	var activeClassName = 'IBMChat-accent-colors';
	var inactiveClassName = 'IBMChat-secondary-colors';
	var templates = {
		base: __webpack_require__(66),
		field: __webpack_require__(67)
	};
	var widgets = [];
	
	var formLayout = {
		init: function() {
			subscribe('layout:form', function(data) {
				var widget = new Form(data);
				widgets[data.uuid] = widget;
			});
		}
	};
	
	function Form(data) {
		this.init(data);
	}
	
	Form.prototype.init = function(data) {
		this.data = data.message.store || [];
		this.action = data.message.action || '';
		this.uuid = data.uuid;
		this.parentElement = data.element;
		this.layoutElement = data.layoutElement;
		this.msgElement = data.msgElement;
		this.drawForm();
		this.subscribeSend = subscribe('send', this.removeEventListeners.bind(this));
		publish('disable-input');
	};
	
	Form.prototype.drawForm = function() {
		var base = document.createElement('div');
		var formFields;
		base.innerHTML = templates.base;
		formFields = base.querySelector('.IBMChat-form-fields');
		this.data.forEach(function(datum) {
			var field = document.createElement('div');
			field.innerHTML = utils.compile(templates.field, {
				label: datum.label || '',
				name: datum.name,
				value: ''
			});
			field.className = ns + '-fields-row';
			formFields.appendChild(field);
		});
		this.fields = formFields.querySelectorAll('input');
		this.submitButton = base.querySelector('.' + ns + '-submit');
		this.cancelButton = base.querySelector('.' + ns + '-cancel');
		this.submitButton.classList.add(inactiveClassName);
		this.cancelButton.classList.add(inactiveClassName);
		this.layoutElement.appendChild(base);
		this.fields[0].focus();
		this.addEventListeners();
	};
	
	Form.prototype.handleSubmit = function() {
		if (this.validateFields() === true) {
			for (var i = 0; i < this.fields.length; i++)
				profile.set(this.fields[i].getAttribute('name'), this.fields[i].value);
			this.submitButton.classList.add(activeClassName);
			publish('send', {
				silent: true,
				text: 'success'
			});
			publish('enable-input');
		} else {
			this.setFocusOnError();
		}
	};
	
	Form.prototype.setFocusOnError = function() {
		for (var j = 0; j < this.fields.length; j++) {
			var name = this.fields[j].getAttribute('name');
			var el = this.layoutElement.querySelector('[data-validation-for="' + name + '"]');
			if (el.dataset.valid === "false") {
				this.fields[j].focus();
				break;
			}
		}
	};
	
	Form.prototype.validateFields = function() {
		var valid = true;
		for (var i = 0; i < this.data.length; i++) {
			if (this.data[i].required === 'true')
				valid = this.validateField(this.fields[i], this.data[i]);
		}
		return valid;
	};
	
	Form.prototype.validateField = function(field, datum) {
		var valid = true;
		if (!field.value || field.value.trim().length === 0) {
			this.addError(field.getAttribute('name'), 'This field is required.');
			valid = false;
		} else if (datum.validations && datum.validations.length !== 0) {
			for (var i = 0; i < datum.validations.length; i++) {
				var validation = datum.validations[i];
				var regex = new RegExp('/'+ validation.regex +'/');
				var matches = regex.test(field.value);
				if (!matches) {
					this.addError(field.getAttribute('name'), validation.message);
					valid = false;
					break;
				}
			}
		}
		return valid;
	};
	
	Form.prototype.addError = function(name, msg) {
		var el = this.layoutElement.querySelector('[data-validation-for="' + name + '"]');
		el.dataset.valid = false;
		el.textContent = msg;
		el.style.display = 'block';
	};
	
	Form.prototype.removeError = function(name) {
		var el = this.layoutElement.querySelector('[data-validation-for="' + name + '"]');
		el.dataset.valid = true;
		el.textContent = '';
	};
	
	Form.prototype.removeAllErrors = function() {
		var els = this.layoutElement.querySelectorAll('[data-validation-for]');
		for (var i = 0; i < els.length; i++)
			this.removeError(els[i].attr('data-validation-for'));
	};
	
	Form.prototype.handleEnter = function(e) {
		if (e.keyCode === 13)
			this.handleSubmit();
	};
	
	Form.prototype.handleInput = function(e) {
		var name = e.target.name;
		this.removeError(name);
	};
	
	Form.prototype.handleCancel = function() {
		this.cancelButton.classList.add(activeClassName);
		publish('enable-input');
		publish('send', {
			silent: true,
			text: 'cancel'
		});
	};
	
	Form.prototype.addEventListeners = function() {
		this.cancelButton.addEventListener('click', this.handleCancel.bind(this));
		this.submitButton.addEventListener('click', this.handleSubmit.bind(this));
		for (var i = 0; i < this.fields.length; i++) {
			var field = this.fields[i];
			field.addEventListener('keypress', this.handleEnter.bind(this));
			field.addEventListener('input', this.handleInput.bind(this));
		}
	};
	
	Form.prototype.removeEventListeners = function() {
		this.cancelButton.removeEventListener('click', this.handleCancel.bind(this));
		this.cancelButton.setAttribute('disabled', true);
		this.submitButton.removeEventListener('click', this.handleSubmit.bind(this));
		this.submitButton.setAttribute('disabled', true);
		for (var i = 0; i < this.fields.length; i++) {
			var field = this.fields[i];
			field.removeEventListener('keypress', this.handleEnter.bind(this));
			field.removeEventListener('input', this.handleInput.bind(this));
			field.setAttribute('disabled', true);
		}
	
		this.subscribeSend.remove();
	};
	
	module.exports = formLayout;


/***/ },
/* 62 */
[96, 63],
/* 63 */
/***/ function(module, exports) {

	module.exports = ".IBMChat-form-container {\n\ttext-align:center;\n\tpadding:0 0 1em 0;\n}\n\n.IBMChat-form-fields {\n\tmargin:auto;\n\ttext-align:left;\n\tmax-width:360px;\n\twidth:100%;\n}\n\n.IBMChat-form-fields-row {\n\tpadding-bottom:0.75em;\n}\n\n.IBMChat-form-fields-row input {\n\twidth: 100%;\n}\n\n.IBMChat-form-buttons {\n\twidth: 100%;\n\tmax-width: 360px;\n\theight: 2.5em;\n\ttext-align:center;\n\tmargin:auto;\n}\n\n.IBMChat-form-buttons button {\n\tline-height: 2.5em;\n\twidth: 100px;\n}\n\n.IBMChat-form-cancel {\n\tfloat:left;\n\tmax-width: 50%;\n}\n.IBMChat-form-submit {\n\tfloat:right;\n\tmax-width: 50%;\n}\n"

/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

	/**
	* (C) Copyright IBM Corp. 2016. All Rights Reserved.
	*
	* Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except
	* in compliance with the License. You may obtain a copy of the License at
	*
	* http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software distributed under the License
	* is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express
	* or implied. See the License for the specific language governing permissions and limitations under
	* the License.
	*/
	
	var BotSDK = __webpack_require__(65);
	var profile = BotSDK.profile;
	
	module.exports = profile;


/***/ },
/* 65 */
/***/ function(module, exports, __webpack_require__) {

	!function(t,e){ true?module.exports=e():"function"==typeof define&&define.amd?define("SDK",[],e):"object"==typeof exports?exports.SDK=e():t.SDK=e()}(this,function(){return function(t){function e(r){if(n[r])return n[r].exports;var o=n[r]={exports:{},id:r,loaded:!1};return t[r].call(o.exports,o,o.exports,e),o.loaded=!0,o.exports}var n={};return e.m=t,e.c=n,e.p="",e(0)}([function(t,e,n){t.exports=n(22)},function(t,e){"use strict";function n(t){return"[object Array]"===b.call(t)}function r(t){return"[object ArrayBuffer]"===b.call(t)}function o(t){return"undefined"!=typeof FormData&&t instanceof FormData}function i(t){var e;return e="undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(t):t&&t.buffer&&t.buffer instanceof ArrayBuffer}function u(t){return"string"==typeof t}function s(t){return"number"==typeof t}function c(t){return"undefined"==typeof t}function a(t){return null!==t&&"object"==typeof t}function f(t){return"[object Date]"===b.call(t)}function l(t){return"[object File]"===b.call(t)}function p(t){return"[object Blob]"===b.call(t)}function h(t){return"[object Function]"===b.call(t)}function d(t){return a(t)&&h(t.pipe)}function m(t){return"undefined"!=typeof URLSearchParams&&t instanceof URLSearchParams}function v(t){return t.replace(/^\s*/,"").replace(/\s*$/,"")}function y(){return"undefined"!=typeof window&&"undefined"!=typeof document&&"function"==typeof document.createElement}function g(t,e){if(null!==t&&"undefined"!=typeof t)if("object"==typeof t||n(t)||(t=[t]),n(t))for(var r=0,o=t.length;r<o;r++)e.call(null,t[r],r,t);else for(var i in t)t.hasOwnProperty(i)&&e.call(null,t[i],i,t)}function w(){function t(t,n){"object"==typeof e[n]&&"object"==typeof t?e[n]=w(e[n],t):e[n]=t}for(var e={},n=0,r=arguments.length;n<r;n++)g(arguments[n],t);return e}var b=Object.prototype.toString;t.exports={isArray:n,isArrayBuffer:r,isFormData:o,isArrayBufferView:i,isString:u,isNumber:s,isObject:a,isUndefined:c,isDate:f,isFile:l,isBlob:p,isFunction:h,isStream:d,isURLSearchParams:m,isStandardBrowserEnv:y,forEach:g,merge:w,trim:v}},function(t,e){function n(){throw new Error("setTimeout has not been defined")}function r(){throw new Error("clearTimeout has not been defined")}function o(t){if(f===setTimeout)return setTimeout(t,0);if((f===n||!f)&&setTimeout)return f=setTimeout,setTimeout(t,0);try{return f(t,0)}catch(e){try{return f.call(null,t,0)}catch(e){return f.call(this,t,0)}}}function i(t){if(l===clearTimeout)return clearTimeout(t);if((l===r||!l)&&clearTimeout)return l=clearTimeout,clearTimeout(t);try{return l(t)}catch(e){try{return l.call(null,t)}catch(e){return l.call(this,t)}}}function u(){m&&h&&(m=!1,h.length?d=h.concat(d):v=-1,d.length&&s())}function s(){if(!m){var t=o(u);m=!0;for(var e=d.length;e;){for(h=d,d=[];++v<e;)h&&h[v].run();v=-1,e=d.length}h=null,m=!1,i(t)}}function c(t,e){this.fun=t,this.array=e}function a(){}var f,l,p=t.exports={};!function(){try{f="function"==typeof setTimeout?setTimeout:n}catch(t){f=n}try{l="function"==typeof clearTimeout?clearTimeout:r}catch(t){l=r}}();var h,d=[],m=!1,v=-1;p.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)e[n-1]=arguments[n];d.push(new c(t,e)),1!==d.length||m||o(s)},c.prototype.run=function(){this.fun.apply(null,this.array)},p.title="browser",p.browser=!0,p.env={},p.argv=[],p.version="",p.versions={},p.on=a,p.addListener=a,p.once=a,p.off=a,p.removeListener=a,p.removeAllListeners=a,p.emit=a,p.binding=function(t){throw new Error("process.binding is not supported")},p.cwd=function(){return"/"},p.chdir=function(t){throw new Error("process.chdir is not supported")},p.umask=function(){return 0}},function(t,e,n){(function(e){"use strict";var r=n(1),o=n(12),i=n(18),u=n(4),s=n(16),c="undefined"!=typeof window&&window.btoa||n(11),a=n(19);t.exports=function(t,f,l){var p=l.data,h=l.headers;r.isFormData(p)&&delete h["Content-Type"];var d=new XMLHttpRequest,m="onreadystatechange",v=!1;if("test"===e.env.NODE_ENV||"undefined"==typeof window||!window.XDomainRequest||"withCredentials"in d||s(l.url)||(d=new window.XDomainRequest,m="onload",v=!0,d.onprogress=function(){},d.ontimeout=function(){}),l.auth){var y=l.auth.username||"",g=l.auth.password||"";h.Authorization="Basic "+c(y+":"+g)}if(d.open(l.method.toUpperCase(),o(l.url,l.params,l.paramsSerializer),!0),d.timeout=l.timeout,d[m]=function(){if(d&&(4===d.readyState||v)&&0!==d.status){var e="getAllResponseHeaders"in d?i(d.getAllResponseHeaders()):null,n=l.responseType&&"text"!==l.responseType?d.response:d.responseText,r={data:u(n,e,l.transformResponse),status:1223===d.status?204:d.status,statusText:1223===d.status?"No Content":d.statusText,headers:e,config:l,request:d};a(t,f,r),d=null}},d.onerror=function(){f(new Error("Network Error")),d=null},d.ontimeout=function(){var t=new Error("timeout of "+l.timeout+"ms exceeded");t.timeout=l.timeout,t.code="ECONNABORTED",f(t),d=null},r.isStandardBrowserEnv()){var w=n(14),b=l.withCredentials||s(l.url)?w.read(l.xsrfCookieName):void 0;b&&(h[l.xsrfHeaderName]=b)}if("setRequestHeader"in d&&r.forEach(h,function(t,e){"undefined"==typeof p&&"content-type"===e.toLowerCase()?delete h[e]:d.setRequestHeader(e,t)}),l.withCredentials&&(d.withCredentials=!0),l.responseType)try{d.responseType=l.responseType}catch(x){if("json"!==d.responseType)throw x}l.progress&&("post"===l.method||"put"===l.method?d.upload.addEventListener("progress",l.progress):"get"===l.method&&d.addEventListener("progress",l.progress)),void 0===p&&(p=null),d.send(p)}}).call(e,n(2))},function(t,e,n){"use strict";var r=n(1);t.exports=function(t,e,n){return r.forEach(n,function(n){t=n(t,e)}),t}},function(t,e,n){t.exports=n(6)},function(t,e,n){"use strict";function r(t){this.defaults=i.merge({},t),this.interceptors={request:new s,response:new s}}var o=n(9),i=n(1),u=n(8),s=n(7),c=n(15),a=n(13),f=n(10),l=n(4);r.prototype.request=function(t){"string"==typeof t&&(t=i.merge({url:arguments[0]},arguments[1])),t=i.merge(o,this.defaults,{method:"get"},t),t.baseURL&&!c(t.url)&&(t.url=a(t.baseURL,t.url)),t.withCredentials=t.withCredentials||this.defaults.withCredentials,t.data=l(t.data,t.headers,t.transformRequest),t.headers=i.merge(t.headers.common||{},t.headers[t.method]||{},t.headers||{}),i.forEach(["delete","get","head","post","put","patch","common"],function(e){delete t.headers[e]});var e=[u,void 0],n=Promise.resolve(t);for(this.interceptors.request.forEach(function(t){e.unshift(t.fulfilled,t.rejected)}),this.interceptors.response.forEach(function(t){e.push(t.fulfilled,t.rejected)});e.length;)n=n.then(e.shift(),e.shift());return n};var p=new r(o),h=t.exports=f(r.prototype.request,p);h.request=f(r.prototype.request,p),h.Axios=r,h.defaults=p.defaults,h.interceptors=p.interceptors,h.create=function(t){return new r(t)},h.all=function(t){return Promise.all(t)},h.spread=n(20),i.forEach(["delete","get","head"],function(t){r.prototype[t]=function(e,n){return this.request(i.merge(n||{},{method:t,url:e}))},h[t]=f(r.prototype[t],p)}),i.forEach(["post","put","patch"],function(t){r.prototype[t]=function(e,n,r){return this.request(i.merge(r||{},{method:t,url:e,data:n}))},h[t]=f(r.prototype[t],p)})},function(t,e,n){"use strict";function r(){this.handlers=[]}var o=n(1);r.prototype.use=function(t,e){return this.handlers.push({fulfilled:t,rejected:e}),this.handlers.length-1},r.prototype.eject=function(t){this.handlers[t]&&(this.handlers[t]=null)},r.prototype.forEach=function(t){o.forEach(this.handlers,function(e){null!==e&&t(e)})},t.exports=r},function(t,e,n){(function(e){"use strict";t.exports=function(t){return new Promise(function(r,o){try{var i;"function"==typeof t.adapter?i=t.adapter:"undefined"!=typeof XMLHttpRequest?i=n(3):"undefined"!=typeof e&&(i=n(3)),"function"==typeof i&&i(r,o,t)}catch(u){o(u)}})}}).call(e,n(2))},function(t,e,n){"use strict";function r(t,e){!o.isUndefined(t)&&o.isUndefined(t["Content-Type"])&&(t["Content-Type"]=e)}var o=n(1),i=n(17),u=/^\)\]\}',?\n/,s={"Content-Type":"application/x-www-form-urlencoded"};t.exports={transformRequest:[function(t,e){return i(e,"Content-Type"),o.isFormData(t)||o.isArrayBuffer(t)||o.isStream(t)||o.isFile(t)||o.isBlob(t)?t:o.isArrayBufferView(t)?t.buffer:o.isURLSearchParams(t)?(r(e,"application/x-www-form-urlencoded;charset=utf-8"),t.toString()):o.isObject(t)?(r(e,"application/json;charset=utf-8"),JSON.stringify(t)):t}],transformResponse:[function(t){if("string"==typeof t){t=t.replace(u,"");try{t=JSON.parse(t)}catch(e){}}return t}],headers:{common:{Accept:"application/json, text/plain, */*"},patch:o.merge(s),post:o.merge(s),put:o.merge(s)},timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,validateStatus:function(t){return t>=200&&t<300}}},function(t,e){"use strict";t.exports=function(t,e){return function(){for(var n=new Array(arguments.length),r=0;r<n.length;r++)n[r]=arguments[r];return t.apply(e,n)}}},function(t,e){"use strict";function n(){this.message="String contains an invalid character"}function r(t){for(var e,r,i=String(t),u="",s=0,c=o;i.charAt(0|s)||(c="=",s%1);u+=c.charAt(63&e>>8-s%1*8)){if(r=i.charCodeAt(s+=.75),r>255)throw new n;e=e<<8|r}return u}var o="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";n.prototype=new Error,n.prototype.code=5,n.prototype.name="InvalidCharacterError",t.exports=r},function(t,e,n){"use strict";function r(t){return encodeURIComponent(t).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}var o=n(1);t.exports=function(t,e,n){if(!e)return t;var i;if(n)i=n(e);else if(o.isURLSearchParams(e))i=e.toString();else{var u=[];o.forEach(e,function(t,e){null!==t&&"undefined"!=typeof t&&(o.isArray(t)&&(e+="[]"),o.isArray(t)||(t=[t]),o.forEach(t,function(t){o.isDate(t)?t=t.toISOString():o.isObject(t)&&(t=JSON.stringify(t)),u.push(r(e)+"="+r(t))}))}),i=u.join("&")}return i&&(t+=(t.indexOf("?")===-1?"?":"&")+i),t}},function(t,e){"use strict";t.exports=function(t,e){return t.replace(/\/+$/,"")+"/"+e.replace(/^\/+/,"")}},function(t,e,n){"use strict";var r=n(1);t.exports=r.isStandardBrowserEnv()?function(){return{write:function(t,e,n,o,i,u){var s=[];s.push(t+"="+encodeURIComponent(e)),r.isNumber(n)&&s.push("expires="+new Date(n).toGMTString()),r.isString(o)&&s.push("path="+o),r.isString(i)&&s.push("domain="+i),u===!0&&s.push("secure"),document.cookie=s.join("; ")},read:function(t){var e=document.cookie.match(new RegExp("(^|;\\s*)("+t+")=([^;]*)"));return e?decodeURIComponent(e[3]):null},remove:function(t){this.write(t,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}()},function(t,e){"use strict";t.exports=function(t){return/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(t)}},function(t,e,n){"use strict";var r=n(1);t.exports=r.isStandardBrowserEnv()?function(){function t(t){var e=t;return n&&(o.setAttribute("href",e),e=o.href),o.setAttribute("href",e),{href:o.href,protocol:o.protocol?o.protocol.replace(/:$/,""):"",host:o.host,search:o.search?o.search.replace(/^\?/,""):"",hash:o.hash?o.hash.replace(/^#/,""):"",hostname:o.hostname,port:o.port,pathname:"/"===o.pathname.charAt(0)?o.pathname:"/"+o.pathname}}var e,n=/(msie|trident)/i.test(navigator.userAgent),o=document.createElement("a");return e=t(window.location.href),function(n){var o=r.isString(n)?t(n):n;return o.protocol===e.protocol&&o.host===e.host}}():function(){return function(){return!0}}()},function(t,e,n){"use strict";var r=n(1);t.exports=function(t,e){r.forEach(t,function(n,r){r!==e&&r.toUpperCase()===e.toUpperCase()&&(t[e]=n,delete t[r])})}},function(t,e,n){"use strict";var r=n(1);t.exports=function(t){var e,n,o,i={};return t?(r.forEach(t.split("\n"),function(t){o=t.indexOf(":"),e=r.trim(t.substr(0,o)).toLowerCase(),n=r.trim(t.substr(o+1)),e&&(i[e]=i[e]?i[e]+", "+n:n)}),i):i}},function(t,e){"use strict";t.exports=function(t,e,n){var r=n.config.validateStatus;n.status&&r&&!r(n.status)?e(n):t(n)}},function(t,e){"use strict";t.exports=function(t){return function(e){return t.apply(null,e)}}},function(t,e,n){var r;(function(t,o,i){/*!
		 * @overview es6-promise - a tiny implementation of Promises/A+.
		 * @copyright Copyright (c) 2014 Yehuda Katz, Tom Dale, Stefan Penner and contributors (Conversion to ES6 API by Jake Archibald)
		 * @license   Licensed under MIT license
		 *            See https://raw.githubusercontent.com/jakearchibald/es6-promise/master/LICENSE
		 * @version   3.2.1
		 */
	(function(){"use strict";function u(t){return"function"==typeof t||"object"==typeof t&&null!==t}function s(t){return"function"==typeof t}function c(t){G=t}function a(t){tt=t}function f(){return function(){t.nextTick(m)}}function l(){return function(){Y(m)}}function p(){var t=0,e=new rt(m),n=document.createTextNode("");return e.observe(n,{characterData:!0}),function(){n.data=t=++t%2}}function h(){var t=new MessageChannel;return t.port1.onmessage=m,function(){t.port2.postMessage(0)}}function d(){return function(){setTimeout(m,1)}}function m(){for(var t=0;t<Z;t+=2){var e=ut[t],n=ut[t+1];e(n),ut[t]=void 0,ut[t+1]=void 0}Z=0}function v(){try{var t=n(27);return Y=t.runOnLoop||t.runOnContext,l()}catch(e){return d()}}function y(t,e){var n=this,r=new this.constructor(w);void 0===r[at]&&M(r);var o=n._state;if(o){var i=arguments[o-1];tt(function(){L(o,r,i,n._result)})}else D(n,r,t,e);return r}function g(t){var e=this;if(t&&"object"==typeof t&&t.constructor===e)return t;var n=new e(w);return C(n,t),n}function w(){}function b(){return new TypeError("You cannot resolve a promise with itself")}function x(){return new TypeError("A promises callback cannot return that same promise.")}function _(t){try{return t.then}catch(e){return ht.error=e,ht}}function A(t,e,n,r){try{t.call(e,n,r)}catch(o){return o}}function E(t,e,n){tt(function(t){var r=!1,o=A(n,e,function(n){r||(r=!0,e!==n?C(t,n):R(t,n))},function(e){r||(r=!0,O(t,e))},"Settle: "+(t._label||" unknown promise"));!r&&o&&(r=!0,O(t,o))},t)}function S(t,e){e._state===lt?R(t,e._result):e._state===pt?O(t,e._result):D(e,void 0,function(e){C(t,e)},function(e){O(t,e)})}function j(t,e,n){e.constructor===t.constructor&&n===st&&constructor.resolve===ct?S(t,e):n===ht?O(t,ht.error):void 0===n?R(t,e):s(n)?E(t,e,n):R(t,e)}function C(t,e){t===e?O(t,b()):u(e)?j(t,e,_(e)):R(t,e)}function T(t){t._onerror&&t._onerror(t._result),B(t)}function R(t,e){t._state===ft&&(t._result=e,t._state=lt,0!==t._subscribers.length&&tt(B,t))}function O(t,e){t._state===ft&&(t._state=pt,t._result=e,tt(T,t))}function D(t,e,n,r){var o=t._subscribers,i=o.length;t._onerror=null,o[i]=e,o[i+lt]=n,o[i+pt]=r,0===i&&t._state&&tt(B,t)}function B(t){var e=t._subscribers,n=t._state;if(0!==e.length){for(var r,o,i=t._result,u=0;u<e.length;u+=3)r=e[u],o=e[u+n],r?L(n,r,o,i):o(i);t._subscribers.length=0}}function I(){this.error=null}function q(t,e){try{return t(e)}catch(n){return dt.error=n,dt}}function L(t,e,n,r){var o,i,u,c,a=s(n);if(a){if(o=q(n,r),o===dt?(c=!0,i=o.error,o=null):u=!0,e===o)return void O(e,x())}else o=r,u=!0;e._state!==ft||(a&&u?C(e,o):c?O(e,i):t===lt?R(e,o):t===pt&&O(e,o))}function P(t,e){try{e(function(e){C(t,e)},function(e){O(t,e)})}catch(n){O(t,n)}}function U(){return mt++}function M(t){t[at]=mt++,t._state=void 0,t._result=void 0,t._subscribers=[]}function N(t){return new bt(this,t).promise}function X(t){var e=this;return new e(Q(t)?function(n,r){for(var o=t.length,i=0;i<o;i++)e.resolve(t[i]).then(n,r)}:function(t,e){e(new TypeError("You must pass an array to race."))})}function F(t){var e=this,n=new e(w);return O(n,t),n}function k(){throw new TypeError("You must pass a resolver function as the first argument to the promise constructor")}function H(){throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.")}function K(t){this[at]=U(),this._result=this._state=void 0,this._subscribers=[],w!==t&&("function"!=typeof t&&k(),this instanceof K?P(this,t):H())}function V(t,e){this._instanceConstructor=t,this.promise=new t(w),this.promise[at]||M(this.promise),Q(e)?(this._input=e,this.length=e.length,this._remaining=e.length,this._result=new Array(this.length),0===this.length?R(this.promise,this._result):(this.length=this.length||0,this._enumerate(),0===this._remaining&&R(this.promise,this._result))):O(this.promise,z())}function z(){return new Error("Array Methods must be provided an Array")}function $(){var t;if("undefined"!=typeof o)t=o;else if("undefined"!=typeof self)t=self;else try{t=Function("return this")()}catch(e){throw new Error("polyfill failed because global object is unavailable in this environment")}var n=t.Promise;n&&"[object Promise]"===Object.prototype.toString.call(n.resolve())&&!n.cast||(t.Promise=wt)}var J;J=Array.isArray?Array.isArray:function(t){return"[object Array]"===Object.prototype.toString.call(t)};var Y,G,W,Q=J,Z=0,tt=function(t,e){ut[Z]=t,ut[Z+1]=e,Z+=2,2===Z&&(G?G(m):W())},et="undefined"!=typeof window?window:void 0,nt=et||{},rt=nt.MutationObserver||nt.WebKitMutationObserver,ot="undefined"==typeof self&&"undefined"!=typeof t&&"[object process]"==={}.toString.call(t),it="undefined"!=typeof Uint8ClampedArray&&"undefined"!=typeof importScripts&&"undefined"!=typeof MessageChannel,ut=new Array(1e3);W=ot?f():rt?p():it?h():void 0===et?v():d();var st=y,ct=g,at=Math.random().toString(36).substring(16),ft=void 0,lt=1,pt=2,ht=new I,dt=new I,mt=0,vt=N,yt=X,gt=F,wt=K;K.all=vt,K.race=yt,K.resolve=ct,K.reject=gt,K._setScheduler=c,K._setAsap=a,K._asap=tt,K.prototype={constructor:K,then:st,"catch":function(t){return this.then(null,t)}};var bt=V;V.prototype._enumerate=function(){for(var t=this.length,e=this._input,n=0;this._state===ft&&n<t;n++)this._eachEntry(e[n],n)},V.prototype._eachEntry=function(t,e){var n=this._instanceConstructor,r=n.resolve;if(r===ct){var o=_(t);if(o===st&&t._state!==ft)this._settledAt(t._state,e,t._result);else if("function"!=typeof o)this._remaining--,this._result[e]=t;else if(n===wt){var i=new n(w);j(i,t,o),this._willSettleAt(i,e)}else this._willSettleAt(new n(function(e){e(t)}),e)}else this._willSettleAt(r(t),e)},V.prototype._settledAt=function(t,e,n){var r=this.promise;r._state===ft&&(this._remaining--,t===pt?O(r,n):this._result[e]=n),0===this._remaining&&R(r,this._result)},V.prototype._willSettleAt=function(t,e){var n=this;D(t,void 0,function(t){n._settledAt(lt,e,t)},function(t){n._settledAt(pt,e,t)})};var xt=$,_t={Promise:wt,polyfill:xt};n(25).amd?(r=function(){return _t}.call(e,n,e,i),!(void 0!==r&&(i.exports=r))):"undefined"!=typeof i&&i.exports?i.exports=_t:"undefined"!=typeof this&&(this.ES6Promise=_t),xt()}).call(this)}).call(e,n(2),function(){return this}(),n(26)(t))},function(t,e,n){"undefined"==typeof Promise&&n(21).polyfill();var r=n(24),o=n(5),i=n(23),u={baseURL:"https://dev.api.ibm.com/virtualagent/development/api/v1/",timeout:3e4,userID:null,withCredentials:!1,XIBMClientID:!1,XIBMClientSecret:!1},s=o.create(u),c=/\|&(.*?)\|/g,a=function(t){for(var e=0;e<t.text.length;e++){var n=t.text[e].match(c)||[];t.text[e]=n.reduce(function(t,e){const n=e.slice(2,-1),r=i.get(n);return t.replace(e,r)},t.text[e])}return t},f=t.exports={configure:function(t){return r(u,t),s=o.create({baseURL:u.baseURL,timeout:u.timeout,withCredentials:u.withCredentials,headers:u.XIBMClientID&&u.XIBMClientSecret?{"X-IBM-Client-Id":u.XIBMClientID,"X-IBM-Client-Secret":u.XIBMClientSecret}:{}}),f},start:function(t){var e=l(),n={userID:u.userID},r="/bots/"+t+"/dialogs",o={headers:{"X-Request-ID":e}};return s.post(r,n,o).then(function(t){return{chatID:t.data.dialog_id,message:a(t.data.message)}})["catch"](function(t){console.error("Request failed:",e),p(t)})},send:function(t,e,n){var r=l(),o={message:n,userID:u.userID},i="/bots/"+t+"/dialogs/"+e+"/messages",c="message="+encodeURIComponent(n),f={headers:{"X-Request-ID":r}};return s.post(i+"?"+c,o,f).then(function(t){return{message:a(t.data.message)}})["catch"](function(t){console.error("Request failed:",r),p(t)})},profile:{get:i.get,set:i.set,has:i.has,clear:i.clear,"delete":i["delete"],forEach:i.forEach}},l=function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(t){var e=16*Math.random()|0,n="x"==t?e:3&e|8;return n.toString(16)})},p=function(t){if(!t.status)throw t;var e=t.status,n=t.statusText,r=new Error(n);throw r.status=e,r}},function(t,e){var n={},r={set:function(t,e){return n[t]=e,r},get:function(t){return n[t]||""},has:function(t){return void 0!==n[t]},clear:function(){return n={},r},"delete":function(t){return delete n[t],r},forEach:function(t,e){return Object.keys(n).forEach(function(r){e?t(r,n[r]).bind(e):t(r,n[r])}),r}};t.exports=r},function(t,e){function n(t,e,n){switch(n.length){case 0:return t.call(e);case 1:return t.call(e,n[0]);case 2:return t.call(e,n[0],n[1]);case 3:return t.call(e,n[0],n[1],n[2])}return t.apply(e,n)}function r(t){return function(e){return null==e?void 0:e[t]}}function o(t,e){for(var n=-1,r=Array(t);++n<t;)r[n]=e(n);return r}function i(t,e){return function(n){return t(e(n))}}function u(t,e,n){var r=t[e];B.call(t,e)&&m(r,n)&&(void 0!==n||e in t)||(t[e]=n)}function s(t,e){return null!=t&&(B.call(t,e)||"object"==typeof t&&e in t&&null===F(t))}function c(t,e){return e=U(void 0===e?t.length-1:e,0),function(){for(var r=arguments,o=-1,i=U(r.length-e,0),u=Array(i);++o<i;)u[o]=r[e+o];o=-1;for(var s=Array(e+1);++o<e;)s[o]=r[o];return s[e]=u,n(t,this,s)}}function a(t,e,n,r){n||(n={});for(var o=-1,i=e.length;++o<i;){var s=e[o],c=r?r(n[s],t[s],s,n,t):void 0;u(n,s,void 0===c?t[s]:c)}return n}function f(t){return c(function(e,n){var r=-1,o=n.length,i=o>1?n[o-1]:void 0,u=o>2?n[2]:void 0;for(i=t.length>3&&"function"==typeof i?(o--,i):void 0,u&&h(n[0],n[1],u)&&(i=o<3?void 0:i,o=1),e=Object(e);++r<o;){var s=n[r];s&&t(e,s,r,i)}return e})}function l(t){var e=t?t.length:void 0;return b(e)&&(k(t)||A(t)||v(t))?o(e,String):null}function p(t,e){return e=null==e?S:e,!!e&&("number"==typeof t||O.test(t))&&t>-1&&t%1==0&&t<e}function h(t,e,n){if(!x(n))return!1;var r=typeof e;return!!("number"==r?y(n)&&p(e,n.length):"string"==r&&e in n)&&m(n[e],t)}function d(t){var e=t&&t.constructor,n="function"==typeof e&&e.prototype||D;return t===n}function m(t,e){return t===e||t!==t&&e!==e}function v(t){return g(t)&&B.call(t,"callee")&&(!q.call(t,"callee")||I.call(t)==j)}function y(t){return null!=t&&b(X(t))&&!w(t)}function g(t){return _(t)&&y(t)}function w(t){var e=x(t)?I.call(t):"";return e==C||e==T}function b(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=S}function x(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function _(t){return!!t&&"object"==typeof t}function A(t){return"string"==typeof t||!k(t)&&_(t)&&I.call(t)==R}function E(t){var e=d(t);if(!e&&!y(t))return N(t);var n=l(t),r=!!n,o=n||[],i=o.length;for(var u in t)!s(t,u)||r&&("length"==u||p(u,i))||e&&"constructor"==u||o.push(u);return o}var S=9007199254740991,j="[object Arguments]",C="[object Function]",T="[object GeneratorFunction]",R="[object String]",O=/^(?:0|[1-9]\d*)$/,D=Object.prototype,B=D.hasOwnProperty,I=D.toString,q=D.propertyIsEnumerable,L=Object.getPrototypeOf,P=Object.keys,U=Math.max,M=!q.call({valueOf:1},"valueOf"),N=i(P,Object),X=r("length"),F=i(L,Object),k=Array.isArray,H=f(function(t,e){if(M||d(e)||y(e))return void a(e,E(e),t);for(var n in e)B.call(e,n)&&u(t,n,e[n])});t.exports=H},function(t,e){t.exports=function(){throw new Error("define cannot be used indirect")}},function(t,e){t.exports=function(t){return t.webpackPolyfill||(t.deprecate=function(){},t.paths=[],t.children=[],t.webpackPolyfill=1),t}},function(t,e){}])});

/***/ },
/* 66 */
/***/ function(module, exports) {

	module.exports = "<div class=\"IBMChat-form-container\">\n\t<div class=\"IBMChat-form-fields\"></div>\n\t<div class=\"IBMChat-form-buttons\">\n\t\t<button class=\"IBMChat-form-cancel\">Cancel</button>\n\t\t<button class=\"IBMChat-form-submit\">Submit</button>\n\t</div>\n</div>\n"

/***/ },
/* 67 */
/***/ function(module, exports) {

	module.exports = "<label>${label}</label>\n<input type=\"text\" class=\"IBMChat-input-colors\" name=\"${name}\" value=\"${value}\" />\n<div class=\"IBMChat-validation-error IBMChat-error-colors\" style=\"display:none;\" data-validation-for=\"${name}\" data-valid=\"true\"></div>\n"

/***/ },
/* 68 */
/***/ function(module, exports, __webpack_require__) {

	/**
	* (C) Copyright IBM Corp. 2016. All Rights Reserved.
	*
	* Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except
	* in compliance with the License. You may obtain a copy of the License at
	*
	* http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software distributed under the License
	* is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express
	* or implied. See the License for the specific language governing permissions and limitations under
	* the License.
	*/
	
	__webpack_require__(69);
	
	var events = __webpack_require__(9);
	var state = __webpack_require__(10);
	var profile = __webpack_require__(64);
	var subscribe = events.subscribe;
	var publish = events.publish;
	var utils = __webpack_require__(35);
	var validation = __webpack_require__(71);
	var activeClassName = 'IBMChat-accent-colors';
	var ns = 'IBMChat-creditcard';
	var widgets = [];
	var templates = {
		base: __webpack_require__(72)
	};
	
	var creditCardLayout = {
		init: function() {
			subscribe('layout:cc-validator', function(data) {
				var widget = new CreditCard(data);
				widgets[data.uuid] = widget;
			});
		}
	};
	
	function CreditCard(data) {
		this.init(data);
	}
	
	CreditCard.prototype.init = function(data) {
		this.data = data.message.layout.data || {};
		this.data.acceptedCards = this.data.types;
		this.uuid = data.uuid;
		this.parentElement = data.element;
		this.layoutElement = data.layoutElement;
		this.msgElement = data.msgElement;
		this.drawForm();
		this.subscribeSend = subscribe('send', this.removeAllEventListeners.bind(this));
		publish('disable-input');
	};
	
	CreditCard.prototype.drawForm = function() {
		var text = templates.base;
		this.el = document.createElement('div');
		text = utils.compile(templates.base, {
			ns: ns
		});
		this.el.innerHTML = text;
		this.layoutElement.appendChild(this.el);
		this.cancelButton = this.el.querySelector('.' + ns + '-cancel');
		this.continueButton = this.el.querySelector('.' + ns + '-continue');
		this.formElements = {};
		this.fields = this.el.querySelectorAll('input');
		for (var i = 0; i < this.fields.length; i++) {
			var field = this.fields[i];
			var name = field.getAttribute('name');
			this.formElements[name] = field;
		}
		this.formElements['cc_full_name'].focus();
		this.addListeners();
	};
	
	CreditCard.prototype.addListeners = function() {
		this.cancelButton.addEventListener('click', this.handleCancel.bind(this));
		this.continueButton.addEventListener('click', this.handleContinue.bind(this));
	};
	
	CreditCard.prototype.addError = function(name, msg) {
		var errorElement = this.el.querySelector('[data-validation-for="' + name + '"]');
		errorElement.style.display = 'block';
		errorElement.dataset.valid = false;
		errorElement.textContent = msg;
	};
	
	CreditCard.prototype.removeError = function(name) {
		var errorElement = this.el.querySelector('[data-validation-for="' + name + '"]');
		errorElement.style.display = 'none';
		errorElement.dataset.valid = true;
		errorElement.textContent = '';
	};
	
	CreditCard.prototype.validate = function() {
		var valid = true;
		this.formData = {};
		for (var i = 0; i < this.fields.length; i++) {
			var field = this.fields[i];
			var name = field.getAttribute('name');
			this.formData[name] = field.value;
		}
	
		if (this.formData.cc_full_name.length === 0) {
			this.addError('cc_full_name', 'This field is required.');
			if (valid) this.formElements['cc_full_name'].focus();
			valid = false;
		} else {
			this.removeError('cc_full_name');
		}
	
		var cc = validation.validateCard(this.data.acceptedCards, this.formData.cc_number);
		if (!cc.valid) {
			this.addError('cc_number', cc.message);
			if (valid) this.formElements['cc_number'].focus();
			valid = false;
		} else {
			this.removeError('cc_number');
		}
	
		var exp = validation.validateExp(this.formData.cc_exp_date_month, this.formData.cc_exp_date_year);
		if (!exp.valid) {
			this.addError('cc_exp_date', exp.message);
			if (valid) this.formElements['cc_exp_date_month'].focus();
			valid = false;
		} else {
			this.removeError('cc_exp_date');
		}
	
		var cvv = validation.validateCVV(this.formData.cc_code);
		if (!cvv.valid) {
			this.addError('cc_code', cvv.message);
			if (valid) this.formElements['cc_code'].focus();
			valid = false;
		} else {
			this.removeError('cc_code');
		}
		return valid;
	};
	
	CreditCard.prototype.handleContinue = function() {
		if (this.validate()) {
			var fd = this.formData;
			fd.cc_exp_date = fd.cc_exp_date_month + '/' + fd.cc_exp_date_year;
			fd.cc_last_four_digits = fd.cc_number.substr(fd.cc_number.length - 4);
			Object.keys(fd).map(function(key) {
				profile.set(key, fd[key]);
			});
			publish('enable-input');
			publish('send', {
				silent: true,
				text: 'success'
			});
		}
	};
	
	CreditCard.prototype.handleCancel = function() {
		this.cancelButton.classList.add(activeClassName);
		publish('enable-input');
		publish('send', {
			silent: true,
			text: 'cancel'
		});
	};
	
	CreditCard.prototype.removeAllEventListeners = function() {
		this.cancelButton.removeEventListener('click', this.handleCancel.bind(this));
		this.cancelButton.setAttribute('disabled', true);
		this.continueButton.removeEventListener('click', this.handleContinue.bind(this));
		this.continueButton.setAttribute('disabled', true);
		for (var j = 0; j < this.fields.length; j++)
			this.fields[j].setAttribute('disabled', true);
	
		this.subscribeSend.remove();
	};
	
	module.exports = creditCardLayout;


/***/ },
/* 69 */
[96, 70],
/* 70 */
/***/ function(module, exports) {

	module.exports = ".IBMChat-creditcard-container {\n\ttext-align:center;\n\tpadding:0 0 1em 0;\n}\n\n.IBMChat-creditcard-rows {\n\tmargin:auto;\n\ttext-align:left;\n\tmax-width:360px;\n\twidth:100%;\n}\n\n.IBMChat-creditcard-row {\n\ttext-align:left;\n\tpadding-bottom:1em;\n}\n\n.IBMChat-creditcard-row input {\n\twidth:100%;\n}\n\n.IBMChat-creditcard-col {\n\tdisplay:inline-block;\n}\n\n.IBMChat-creditcard-col input{\n\ttext-align:center;\n\twidth:40px;\n}\n\n.IBMChat-creditcard-col:last-child input {\n\twidth:60px;\n}\n\n.IBMChat-creditcard-buttons {\n\theight:2.5em;\n}\n\n.IBMChat-creditcard-buttons button {\n\twidth:90px;\n\tfloat:left;\n}\n\n.IBMChat-creditcard-buttons button:last-child {\n\tfloat:right;\n}\n"

/***/ },
/* 71 */
/***/ function(module, exports) {

	/**
	* (C) Copyright IBM Corp. 2016. All Rights Reserved.
	*
	* Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except
	* in compliance with the License. You may obtain a copy of the License at
	*
	* http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software distributed under the License
	* is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express
	* or implied. See the License for the specific language governing permissions and limitations under
	* the License.
	*/
	
	//https://en.wikipedia.org/wiki/Payment_card_number
	
	var state = {
		acceptedCards: [],
		cardNumber: '',
		cardType: ''
	};
	
	var messages = {
		required: 'This field is required.',
		acceptedCard: function() {
			var text = 'We accept ';
			for (i = 0; i < state.acceptedCards.length; i++) {
				if (i > 0)
					text += ', ';
				if (i === (state.acceptedCards.length - 1))
					text += ' and ';
				text += cardData[state.acceptedCards[i]].human;
			}
			text += '. Please use a valid card.';
			return text;
		},
		invalid: 'Your credit card number is invalid.',
		invalidExpiration: 'Your credit card expiration date is invalid.',
		invalidCvv: 'Your CVV is invalid.'
	};
	
	var cardData = {
		"visa": {
			human: "Visa",
			prefixes: [4],
			lengths: [13, 16, 19]
		},
		"mastercard": {
			human: "MasterCard",
			prefixes: [51, 52, 53, 54, 55],
			lengths: [16]
		},
		"amex": {
			human: "American Express",
			prefixes: [34, 37],
			lengths: [15]
		},
		"discover": {
			human: "Discover",
			prefixes: [6011, 65],
			lengths: [16, 19]
		}
	};
	
	var i;
	//MasterCard adding these numbers in 2017
	for (i = 2221; i <= 2720; i++)
		cardData.mastercard.prefixes.push(i);
	
	for (i = 622126; i <= 622925; i++)
		cardData.discover.prefixes.push(i);
	
	for (i = 644; i <= 649; i++)
		cardData.discover.prefixes.push(i);
	
	function _detectCard() {
		for (var i = 0; i < state.acceptedCards.length; i++) {
			var data = cardData[state.acceptedCards[i]];
			for (var j = 0; j < data.prefixes.length; j++) {
				var x = data.prefixes[j].toString();
				if (state.cardNumber.substring(0, x.length) === x) {
					state.cardType = state.acceptedCards[i];
					return true;
				}
			}
		}
		return false;
	}
	
	function _checkKuhn() {
		var checksum = 0; // running checksum total
		var j = 1; // takes value of 1 or 2
	
		// Process each digit one by one starting at the right
		var calc;
		for (var i = state.cardNumber.length - 1; i >= 0; i--) {
			// Extract the next digit and multiply by 1 or 2 on alternative digits.
			calc = Number(state.cardNumber.charAt(i)) * j;
	
			// If the result is in two digits add 1 to the checksum total
			if (calc > 9) {
				checksum = checksum + 1;
				calc = calc - 10;
			}
	
			// Add the units element to the checksum total
			checksum = checksum + calc;
	
			// Switch the value of j
			j = (j == 1) ? 2 : 1;
		}
	
		// All done - if checksum is divisible by 10, it is a valid modulus 10.
		// If not, report an error.
		return (checksum % 10 != 0) ? false : true;
	}
	
	function validateCard(acceptedCards, cardNumber) {
		state.acceptedCards = acceptedCards;
		state.cardNumber = cardNumber.replace(/\D/g,''); //strip extra characters
		if (cardNumber.length === 0) {
			return {
				"message": messages.required,
				"valid": false
			};
		}
		if (state.cardNumber.length === 0) {
			return {
				"message": messages.required,
				"valid": false
			};
		}
		if (_detectCard()) {
			if (state.acceptedCards.indexOf(state.cardType) === -1) {
				return {
					"message": messages.acceptedCard(),
					"valid": false
				};
			}
			if (cardData[state.cardType].lengths.indexOf(state.cardNumber.length) === -1) {
				return {
					"message": messages.invalid,
					"valid": false
				};
			}
			if (_checkKuhn() === false) {
				return {
					"message": messages.invalid,
					"valid": false
				};
			}
		} else {
			return {
				"message": messages.invalid,
				"valid": false
			};
		}
	
		return {
			"valid": true
		};
	}
	
	function validateExp(userM, userY) {
		var d = new Date();
		var month = d.getMonth();
		var year = d.getFullYear();
	
		if (userM.length === 0 || userY.length === 0 || userM.replace(/\D/g,'').length === 0 || userY.replace(/\D/g,'').length === 0) {
			return {
				"message": messages.required,
				"valid": false
			};
		}
	
		userM = parseInt(userM, 10);
		userY = parseInt(userY, 10);
	
		if (userM > 12 || userM < 1 || (userY > year + 20) || (userY < year || (userY === year && userM < month))) {
			return {
				"message": messages.invalidExpiration,
				"valid": false
			};
		}
		return {
			"valid": true
		};
	}
	
	function validateCVV(CVV) {
		if (CVV.length === 0) {
			return {
				"message": messages.required,
				"valid": false
			};
		}
		if (!isNaN(CVV) && (CVV > 9999 || CVV < 100)) {
			return {
				"message": messages.invalidCvv,
				"valid": false
			};
		}
		return {
			"valid": true
		};
	}
	
	module.exports = {
		validateCard: validateCard,
		validateExp: validateExp,
		validateCVV: validateCVV,
		cardData: cardData
	};


/***/ },
/* 72 */
/***/ function(module, exports) {

	module.exports = "<div class=\"${ns}-container\">\n\t<div class=\"${ns}-rows\">\n\t\t<div class=\"${ns}-row\">\n\t\t\t<label>Name on Card</label>\n\t\t\t<input type=\"text\" class=\"IBMChat-input-colors\" name=\"cc_full_name\" />\n\t\t\t<div class=\"IBMChat-validation-error IBMChat-error-colors\" data-validation-for=\"cc_full_name\" data-valid=\"true\" style=\"display:none;\"></div>\n\t\t</div>\n\t\t<div class=\"${ns}-row\">\n\t\t\t<label>Credit Card Number</label>\n\t\t\t<input type=\"text\" class=\"IBMChat-input-colors\" name=\"cc_number\" />\n\t\t\t<div class=\"IBMChat-validation-error IBMChat-error-colors\" data-validation-for=\"cc_number\" data-valid=\"true\" style=\"display:none;\"></div>\n\t\t</div>\n\t\t<div class=\"${ns}-row\">\n\t\t\t<label>Expiration Date</label>\n\t\t\t<div class=\"${ns}-col\">\n\t\t\t\t<input class=\"${ns}-date IBMChat-input-colors\" type=\"text\" name=\"cc_exp_date_month\" placeholder=\"MM\" maxlength=\"2\" />\n\t\t\t\t<input class=\"${ns}-date IBMChat-input-colors\" type=\"text\" name=\"cc_exp_date_year\" placeholder=\"YYYY\" maxlength=\"4\" />\n\t\t\t\t<div class=\"IBMChat-validation-error IBMChat-error-colors\" data-validation-for=\"cc_exp_date\" data-valid=\"true\" style=\"display:none;\"></div>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"${ns}-row\">\n\t\t\t<label>CVV</label>\n\t\t\t<div class=\"${ns}-col\">\n\t\t\t\t<input class=\"${ns}-cvv IBMChat-input-colors\" type=\"text\" name=\"cc_code\" />\n\t\t\t\t<div class=\"IBMChat-validation-error IBMChat-error-colors\" data-validation-for=\"cc_code\" data-valid=\"true\" style=\"display:none;\"></div>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"${ns}-row ${ns}-buttons\">\n\t\t\t<button class=\"${ns}-cancel IBMChat-secondary-colors\">Cancel</button>\n\t\t\t<button class=\"${ns}-continue IBMChat-input-colors\">Continue</button>\n\t\t</div>\n\t</div>\n</div>\n"

/***/ },
/* 73 */
/***/ function(module, exports, __webpack_require__) {

	/**
	* (C) Copyright IBM Corp. 2016. All Rights Reserved.
	*
	* Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except
	* in compliance with the License. You may obtain a copy of the License at
	*
	* http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software distributed under the License
	* is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express
	* or implied. See the License for the specific language governing permissions and limitations under
	* the License.
	*/
	
	__webpack_require__(74);
	
	var events = __webpack_require__(9);
	var errors = [];
	var ns = 'IBMChat-error';
	
	var errorLayout = {
		init: function() {
			events.subscribe('layout:error', function(data) {
				var error = new Error(data);
				errors[data.uuid] = error;
			});
		}
	};
	
	var templates = {
		base: __webpack_require__(76)
	};
	
	function Error(data) {
		this.init(data);
	}
	
	Error.prototype.init = function(data) {
		this.message = data.message.layout.message;
		this.uuid = data.uuid;
		this.parentElement = data.element;
		this.layoutElement = data.layoutElement;
		this.layoutElement.innerHTML = templates.base;
		this.layoutElement.querySelector('.' + ns).textContent = this.message;
	};
	
	
	module.exports = errorLayout;


/***/ },
/* 74 */
[96, 75],
/* 75 */
/***/ function(module, exports) {

	module.exports = ".IBMChat-error {\n\tpadding: 0.5em 1em 0.5em 1em;\n}\n"

/***/ },
/* 76 */
/***/ function(module, exports) {

	module.exports = "<div class=\"IBMChat-error IBMChat-error-colors\"></div>\n"

/***/ },
/* 77 */
/***/ function(module, exports, __webpack_require__) {

	/**
	* (C) Copyright IBM Corp. 2016. All Rights Reserved.
	*
	* Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except
	* in compliance with the License. You may obtain a copy of the License at
	*
	* http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software distributed under the License
	* is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express
	* or implied. See the License for the specific language governing permissions and limitations under
	* the License.
	*/
	
	var start = __webpack_require__(78);
	var resize = __webpack_require__(84);
	var receive = __webpack_require__(85);
	var send = __webpack_require__(86);
	var sendMock = __webpack_require__(87);
	var sendInputMessage = __webpack_require__(88);
	var input = __webpack_require__(89);
	var error = __webpack_require__(90);
	var playback = __webpack_require__(91);
	var scrollToBottom = __webpack_require__(92);
	var tryIt = __webpack_require__(93);
	
	module.exports = {
		resize: resize,
		start: start,
		send: send,
		sendMock: sendMock,
		receive: receive,
		input: input,
		error: error,
		scrollToBottom: scrollToBottom,
		sendInputMessage: sendInputMessage,
		playback: playback,
		tryIt: tryIt
	};


/***/ },
/* 78 */
/***/ function(module, exports, __webpack_require__) {

	/**
	* (C) Copyright IBM Corp. 2016. All Rights Reserved.
	*
	* Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except
	* in compliance with the License. You may obtain a copy of the License at
	*
	* http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software distributed under the License
	* is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express
	* or implied. See the License for the specific language governing permissions and limitations under
	* the License.
	*/
	
	var state = __webpack_require__(10);
	var utils = __webpack_require__(35);
	var events = __webpack_require__(9);
	var templates = __webpack_require__(79);
	
	function start(data) {
		var current;
		state.setState(data);
		current = state.getState();
		utils.attachStyles();
		current.root.className += " chatID-" + current.chatID;
		current.root.innerHTML = templates.start;
		var outerContainer = current.root.querySelector('.IBMChat-outer-container');
		var chatBox = document.createElement('div');
		chatBox.classList.add('IBMChat-input-container');
		chatBox.classList.add('IBMChat-input-container-theme');
		chatBox.innerHTML = templates.input;
		outerContainer.appendChild(chatBox);
		var elements = {
			container: current.root.querySelector('.IBMChat-chat-container'),
			chatHolder: current.root.querySelector('.IBMChat-messages'),
			innerContainer: current.root.querySelector('.IBMChat-inner-container')
		};
		//TODO: remove if conditional after Dashboard implements new playback
		if (current.playback !== true) {
			elements.inputHolder = current.root.querySelector('.IBMChat-input-container');
			elements.input = current.root.querySelector('.IBMChat-chat-textbox');
			elements.form = current.root.querySelector('.IBMChat-input-form');
			elements.loader = current.root.querySelector('.IBMChat-input-loading');
	
			elements.form.addEventListener('submit', function(e) {
				e.preventDefault();
			});
	
			elements.input.addEventListener('keypress', function(e) {
				if (e.keyCode === 13)
					events.publish('send-input-message');
			});
	
			elements.input.addEventListener('focus', function() {
				events.publish('resize');
			});
	
			elements.input.addEventListener('blur', function() {
				events.publish('resize');
			});
		}
	
		window.addEventListener('resize', utils.debounce(function() {
			events.publish('resize');
		}, 1000));
	
		window.addEventListener('orientationchange', function() {
			events.publish('resize');
		});
	
		state.setState(elements);
		events.publish('resize');
	}
	
	module.exports = start;


/***/ },
/* 79 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
		input: __webpack_require__(80),
		receive: __webpack_require__(81),
		send: __webpack_require__(82),
		start: __webpack_require__(83)
	};


/***/ },
/* 80 */
/***/ function(module, exports) {

	module.exports = "<form class=\"IBMChat-input-form IBMChat-input-form-theme\">\n\t<input aria-labelledby=\"Enter a Message\" type=\"text\" class=\"IBMChat-chat-textbox IBMChat-chat-textbox-theme\" placeholder=\"Enter message...\" />\n\t<div class=\"IBMChat-ibm-spinner-start IBMChat-input-loading IBMChat-input-loading-theme\">\n\t\t<svg class=\"IBMChat-ibm-spinner\" width=32 height=32 viewBox=\"-16 -16 32 32\">\n\t\t\t<circle cx=0 cy=0 r=8 /></svg>\n\t\t</svg>\n\t</div>\n</form>\n"

/***/ },
/* 81 */
/***/ function(module, exports) {

	module.exports = "<div class=\"IBMChat-watson-message-container IBMChat-watson-message-container-theme\"></div>\n"

/***/ },
/* 82 */
/***/ function(module, exports) {

	module.exports = "<div id=\"${data.uuid}\" class=\"IBMChat-user-message-container IBMChat-user-message-container-theme\">\n\t<div class=\"IBMChat-user-message IBMChat-user-message-theme IBMChat-secondary-colors\"></div>\n</div>\n"

/***/ },
/* 83 */
/***/ function(module, exports) {

	module.exports = "<div class=\"IBMChat-outer-container IBMChat-outer-container-theme IBMChat-default-colors\">\n\t<div class=\"IBMChat-chat-container IBMChat-chat-container-theme\">\n\t\t<div class=\"IBMChat-inner-container IBMChat-inner-container-theme\">\n\t\t\t<div class=\"IBMChat-messages IBMChat-messages-theme\"></div>\n\t\t</div>\n\t</div>\n</div>\n"

/***/ },
/* 84 */
/***/ function(module, exports, __webpack_require__) {

	/**
	* (C) Copyright IBM Corp. 2016. All Rights Reserved.
	*
	* Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except
	* in compliance with the License. You may obtain a copy of the License at
	*
	* http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software distributed under the License
	* is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express
	* or implied. See the License for the specific language governing permissions and limitations under
	* the License.
	*/
	
	var state = __webpack_require__(10);
	
	function resize() {
		setTimeout(function() {
			var current = state.getState();
			if (current.active) {
				current.chatHolder.style.maxHeight = (current.root.getBoundingClientRect().height - current.inputHolder.getBoundingClientRect().height) + 'px';
				current.chatHolder.style.maxWidth = ((current.root.getBoundingClientRect().width > 288) ? current.root.getBoundingClientRect().width : 288) + 'px';
			}
		}, 300);
	}
	
	module.exports = resize;


/***/ },
/* 85 */
/***/ function(module, exports, __webpack_require__) {

	/**
	* (C) Copyright IBM Corp. 2016. All Rights Reserved.
	*
	* Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except
	* in compliance with the License. You may obtain a copy of the License at
	*
	* http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software distributed under the License
	* is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express
	* or implied. See the License for the specific language governing permissions and limitations under
	* the License.
	*/
	
	var state = __webpack_require__(10);
	var events = __webpack_require__(9);
	var utils = __webpack_require__(35);
	var assign = __webpack_require__(11);
	var templates = __webpack_require__(79);
	
	function _actions(tryIt, debug, data) {
		var msg = data.message;
		if (msg && msg.action && msg.action.name) {
			var action = 'action:' + msg.action.name;
			if (events.hasSubscription(action)) {
				events.publish(action, data, events.completeEvent);
				if (debug)
					console.log('Call to ' + action);
			} else {
				if (debug)
					console.warn('Nothing is subscribed to ' + action);
				if (tryIt)
					events.publish('try-it-action-subscription', action);
			}
		}
		events.publish('disable-loading');
		events.publish('focus-input');
		setTimeout(function() {
			events.publish('scroll-to-bottom');
		}, 20);
	}
	
	function _layouts(tryIt, debug, data) {
		var msg = data.message;
		if (msg && msg.layout && msg.layout.name) {
			var layout = 'layout:' + msg.layout.name;
			if (events.hasSubscription(layout)) {
				setTimeout(function() {
					events.publish(layout, data);
					if (debug)
						console.log('Call to ' + layout);
				}, 10);
			} else {
				if (debug)
					console.warn('Nothing is subscribed to ' + layout);
				if (tryIt)
					events.publish('try-it-layout-subscription', layout);
			}
		}
	}
	
	function receive(data) {
		var parsed = (typeof data === 'string') ? { message: { text: data } } : data;
		var current = state.getState();
		state.setState({
			messages: [].concat(current.messages || [], parsed),
			hasError: false
		});
		var msg = parsed.message;
		var msgText = (msg && msg.text) ? ((Array.isArray(msg.text)) ? msg.text : [msg.text]) : [''];
		var containers = [];
		var messages = [];
		var layouts = [];
		var datas = [];
		for (var i = 0; i < msgText.length; i++) {
			var holder = document.createElement('div');
			var msgData = assign({}, parsed, { uuid: utils.getUUID() });
			holder.classList.add(msgData.uuid);
			holder.innerHTML = templates.receive;
			containers.push(holder.querySelector('.IBMChat-watson-message-container'));
			messages.push(document.createElement('div'));
			layouts.push(document.createElement('div'));
			layouts[i].classList.add('IBMChat-watson-layout');
			if (msgText[i] || (msg && msg.layout && msg.layout.name && i === (msgText.length - 1))) {
				messages[i].classList.add('IBMChat-watson-message');
				messages[i].classList.add('IBMChat-watson-message-theme');
				utils.writeMessage(messages[i], msgText[i]);
				current.chatHolder.appendChild(holder);
			}
			containers[i].appendChild(messages[i]);
			containers[i].appendChild(layouts[i]);
			msgData.element = containers[i];
			msgData.layoutElement = layouts[i];
			msgData.msgElement = messages[i];
			datas.push(msgData);
			if (msg && msg.layout && ((msg.layout.index !== undefined && msg.layout.index == i) ||(msg.layout.index === undefined && i == (msgText.length - 1))))
				_layouts(current.tryIt, current.DEBUG, datas[i]);
			if (i === (msgText.length - 1))
				_actions(current.tryIt, current.DEBUG, datas[i]);
		}
	
	}
	
	module.exports = receive;


/***/ },
/* 86 */
/***/ function(module, exports, __webpack_require__) {

	/**
	* (C) Copyright IBM Corp. 2016. All Rights Reserved.
	*
	* Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except
	* in compliance with the License. You may obtain a copy of the License at
	*
	* http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software distributed under the License
	* is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express
	* or implied. See the License for the specific language governing permissions and limitations under
	* the License.
	*/
	
	var state = __webpack_require__(10);
	var events = __webpack_require__(9);
	var BotSDK = __webpack_require__(65);
	var utils = __webpack_require__(35);
	var assign = __webpack_require__(11);
	var templates = __webpack_require__(79);
	
	function send(data) {
		if (data && data.text && data.text.length > 0) {
			var current = state.getState();
			addToSendQueue(data);
			if (!current.inProgress)
				agentSend();
		}
	}
	
	function addToSendQueue(data) {
		var current = state.getState();
		var queue = current.sendQueue || [];
		var newQueue = queue.slice(0);
		newQueue.push(data);
		state.setState({
			sendQueue: newQueue
		});
	}
	
	function always() {
		events.publish('disable-loading');
		state.setState({
			inProgress: false
		});
		if (state.getState().sendQueue.length > 0)
			agentSend();
	}
	
	function resolve() {
		always();
	}
	
	function reject(e) {
		events.publish('error', arguments);
		console.error(e.stack);
		always();
	}
	
	function sendToBot(data) {
		var current = state.getState();
		events.publish('enable-loading');
		events.publish('scroll-to-bottom');
		events.publish('focus-input');
		BotSDK
			.send( current.botID, current.chatID, data.text )
			.then( function(res) {
				events.publish('receive', res);
				resolve();
			})
			.catch( function(e) {
				reject(e);
			});
	}
	
	function agentSend() {
		var current = state.getState();
		var newData = assign({}, current.sendQueue[0], { uuid: utils.getUUID() });
		var msg = newData.text || '';
		state.setState({
			inProgress: true,
			sendQueue: current.sendQueue.slice(1, current.sendQueue.length),
			messages: [].concat(current.messages || [], newData)
		});
		current.root.querySelector('.IBMChat-chat-textbox').value = '';
		if (!newData.silent) {
			current.chatHolder.innerHTML += utils.compile(templates.send, { 'data.uuid': newData.uuid });
			current.chatHolder.querySelector('#' + newData.uuid + ' .IBMChat-user-message').textContent = msg;
			events.publish('scroll-to-bottom');
		}
		events.publish('enable-loading');
		if (current.handleInput.default)
			sendToBot(newData);
		else if (current.handleInput.context)
			current.handleInput.callback.bind(current.handleInput.context, newData.text, resolve, reject);
		else
			current.handleInput.callback(newData.text, resolve, reject);
	}
	
	module.exports = send;


/***/ },
/* 87 */
/***/ function(module, exports, __webpack_require__) {

	/**
	* (C) Copyright IBM Corp. 2016. All Rights Reserved.
	*
	* Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except
	* in compliance with the License. You may obtain a copy of the License at
	*
	* http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software distributed under the License
	* is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express
	* or implied. See the License for the specific language governing permissions and limitations under
	* the License.
	*/
	
	var state = __webpack_require__(10);
	var events = __webpack_require__(9);
	var utils = __webpack_require__(35);
	var assign = __webpack_require__(11);
	var templates = __webpack_require__(79);
	
	function sendMock(data) {
		if (data.text && data.text.length > 0) {
			var current = state.getState();
			var newData = assign({}, data, { uuid: utils.getUUID() });
			current.chatHolder.innerHTML += utils.compile(templates.send, { 'data.uuid': newData.uuid });
			current.chatHolder.querySelector('#' + newData.uuid + ' .IBMChat-user-message').textContent = data.text;
			events.publish('scroll-to-bottom');
		}
	}
	
	module.exports = sendMock;


/***/ },
/* 88 */
/***/ function(module, exports, __webpack_require__) {

	/**
	* (C) Copyright IBM Corp. 2016. All Rights Reserved.
	*
	* Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except
	* in compliance with the License. You may obtain a copy of the License at
	*
	* http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software distributed under the License
	* is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express
	* or implied. See the License for the specific language governing permissions and limitations under
	* the License.
	*/
	
	var state = __webpack_require__(10);
	var events = __webpack_require__(9);
	
	function sendInputMessage() {
		var current = state.getState();
		if (!current.inProgress && !current.disableInput) {
			var text = current.root.querySelector('.IBMChat-chat-textbox').value;
			events.publish('send', {
				text: text
			});
			text = '';
		}
	}
	
	module.exports = sendInputMessage;


/***/ },
/* 89 */
/***/ function(module, exports, __webpack_require__) {

	/**
	* (C) Copyright IBM Corp. 2016. All Rights Reserved.
	*
	* Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except
	* in compliance with the License. You may obtain a copy of the License at
	*
	* http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software distributed under the License
	* is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express
	* or implied. See the License for the specific language governing permissions and limitations under
	* the License.
	*/
	
	var state = __webpack_require__(10);
	var utils = __webpack_require__(35);
	
	function enableInput() {
		var current = state.getState();
		var disableInput = (current.disableInput) ? (current.disableInput - 1) :0;
		state.setState({ disableInput: disableInput });
		if (!disableInput)
			current.input.removeAttribute('disabled');
	}
	
	function disableInput() {
		var current = state.getState();
		var disableInput = (current.disableInput) ? (current.disableInput + 1) : 1;
		state.setState({ disableInput: disableInput });
		current.input.setAttribute('disabled', 'disabled');
	}
	
	function enableLoadingInput() {
		var current = state.getState();
		var loading = (current.loading) ? (current.loading + 1) : 1;
		state.setState({
			loading: loading
		});
		utils.spinner.show(current.loader);
	}
	
	function disableLoadingInput() {
		var current = state.getState();
		var loading = (current.loading) ? (current.loading - 1) : 0;
		state.setState({
			loading: loading
		});
		if (loading === 0)
			utils.spinner.hide(current.loader);
	}
	
	function focusInput() {
		var current = state.getState();
		current.input.focus();
	}
	
	module.exports = {
		enableInput: enableInput,
		disableInput: disableInput,
		enableLoadingInput: enableLoadingInput,
		disableLoadingInput: disableLoadingInput,
		focusInput: focusInput
	};


/***/ },
/* 90 */
/***/ function(module, exports, __webpack_require__) {

	/**
	* (C) Copyright IBM Corp. 2016. All Rights Reserved.
	*
	* Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except
	* in compliance with the License. You may obtain a copy of the License at
	*
	* http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software distributed under the License
	* is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express
	* or implied. See the License for the specific language governing permissions and limitations under
	* the License.
	*/
	
	var events = __webpack_require__(9);
	var state = __webpack_require__(10);
	
	function error(err) {
		var display = (err && err.stack) ? err.stack : err;
		console.error(display);
		var current = state.getState();
		var text = 'I am sorry, I am having difficulties.';
		if (current.hadError)
			text += ' Please try again later.';
		else
			text += ' To speak with a human agent, type "agent".';
		if (err.status)
			text += ' (error: ' + err.status + ')';
		state.setState({
			hadError: true
		});
		events.publish('receive', text);
	}
	
	function tryIt(data) {
		events.publish('layout:error', data);
	}
	
	module.exports = {
		default: error,
		tryIt: tryIt
	};


/***/ },
/* 91 */
/***/ function(module, exports, __webpack_require__) {

	/**
	* (C) Copyright IBM Corp. 2016. All Rights Reserved.
	*
	* Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except
	* in compliance with the License. You may obtain a copy of the License at
	*
	* http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software distributed under the License
	* is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express
	* or implied. See the License for the specific language governing permissions and limitations under
	* the License.
	*/
	
	var state = __webpack_require__(10);
	var utils = __webpack_require__(35);
	var events = __webpack_require__(9);
	var assign = __webpack_require__(11);
	var templates = __webpack_require__(79);
	
	function start(config) {
		var current;
		var data = {};
		data[config.chatID] = config;
		state.setState(data);
		current = state.getState()[config.chatID];
		utils.attachPlaybackStyles(config.chatID);
		current.root.className += " chatID-" + current.chatID;
		current.root.innerHTML = templates.start;
		current.container = current.root.querySelector('.IBMChat-chat-container');
		current.chatHolder = current.root.querySelector('.IBMChat-messages');
		current.innerContainer = current.root.querySelector('.IBMChat-inner-container');
		data[config.chatID] = current;
		state.setState(data);
		current.chatHolder.style.paddingBottom = '1em';
	
		window.addEventListener('resize', utils.debounce(function() {
			events.publish('playback-resize-' + config.chatID, config.chatID);
		}, 1000));
	
		window.addEventListener('orientationchange', function() {
			events.publish('playback-resize-' + config.chatID, config.chatID);
		});
	
	
		events.publish('playback-resize-' + config.chatID, config.chatID);
	}
	
	function send(obj) {
		var chatID = obj.chatID;
		var data = obj.data;
		console.log('obj', obj);
		if (data.text && data.text.length > 0) {
			var current = state.getState()[chatID];
			console.log('current', current);
			var newData = assign({}, data, { uuid: utils.getUUID() });
			current.chatHolder.innerHTML += utils.compile(templates.send, { 'data.uuid': newData.uuid });
			current.chatHolder.querySelector('#' + newData.uuid + ' .IBMChat-user-message').textContent = data.text;
			events.publish('playback-scroll-to-bottom-' + chatID, chatID);
		}
	}
	
	function receive(obj) {
		var chatID = obj.chatID;
		var data = obj.data;
		var checkData = (typeof data === 'string') ? { message: { text: data } } : data;
		var current = state.getState()[chatID];
		data = assign({}, checkData, { uuid: utils.getUUID() });
		var msg = (data.message && data.message.text) ? ((Array.isArray(data.message.text)) ? data.message.text : [data.message.text]) : [''];
		if (msg.length === 0)
			msg = [''];
		for (var i = 0; i < msg.length; i++) {
			var item;
			current.chatHolder.innerHTML += utils.compile(templates.receive, { 'data.uuid': data.uuid });
			item = current.chatHolder.querySelector('.' + data.uuid + ':last-child .IBMChat-watson-message');
			utils.writeMessage(item, msg[i]);
		}
		events.publish('playback-scroll-to-bottom-' + chatID, chatID);
	}
	
	function clear(chatID) {
		var current = state.getState()[chatID];
		current.chatHolder.innerHTML = '';
	}
	
	function destroy(chatID) {
		var current = state.getState()[chatID];
		var obj = {};
		obj[chatID] = undefined;
		state.setState(obj);
		current.root.innerHTML = current.originalContent;
	}
	
	function scrollToBottom(chatID) {
		var current = state.getState()[chatID];
		current.chatHolder.scrollTop = current.chatHolder.scrollHeight;
	}
	
	function resize(chatID) {
		setTimeout(function() {
			var current = state.getState()[chatID];
			if (current.active) {
				current.chatHolder.style.maxHeight = (current.root.getBoundingClientRect().height - current.inputHolder.getBoundingClientRect().height) + 'px';
				current.chatHolder.style.maxWidth = ((current.root.getBoundingClientRect().width > 288) ? current.root.getBoundingClientRect().width : 288) + 'px';
			}
		}, 300);
	}
	
	module.exports = {
		start: start,
		send: send,
		receive: receive,
		clear: clear,
		destroy: destroy,
		resize: resize,
		scrollToBottom: scrollToBottom
	};


/***/ },
/* 92 */
/***/ function(module, exports, __webpack_require__) {

	/**
	* (C) Copyright IBM Corp. 2016. All Rights Reserved.
	*
	* Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except
	* in compliance with the License. You may obtain a copy of the License at
	*
	* http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software distributed under the License
	* is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express
	* or implied. See the License for the specific language governing permissions and limitations under
	* the License.
	*/
	
	var state = __webpack_require__(10);
	
	function scrollToBottom() {
		var current = state.getState();
		current.chatHolder.scrollTop = current.chatHolder.scrollHeight;
	}
	
	module.exports = scrollToBottom;


/***/ },
/* 93 */
/***/ function(module, exports, __webpack_require__) {

	/**
	* (C) Copyright IBM Corp. 2016. All Rights Reserved.
	*
	* Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except
	* in compliance with the License. You may obtain a copy of the License at
	*
	* http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software distributed under the License
	* is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express
	* or implied. See the License for the specific language governing permissions and limitations under
	* the License.
	*/
	
	var events = __webpack_require__(9);
	
	function actionError(action) {
		events.publish('receive', {
			message: {
				layout: {
					name: 'error',
					message: 'A subscription was called to ' + action + '. Nothing is subscribed to this action in the Try-It interface. This is probably due to you using a custom workspace. On your own site, you should have code to handle this action.'
				}
			}
		});
	}
	
	function layoutError(layout) {
		events.publish('receive', {
			message: {
				layout: {
					name: 'error',
					message: 'A subscription was called to ' + layout + '. Nothing is subscribed to this layout in the Try-It interface. This is probably due to you using a custom workspace. On your own site, you should have code to handle this layout.'
				}
			}
		});
	}
	
	module.exports = {
		actionError: actionError,
		layoutError: layoutError
	};


/***/ },
/* 94 */
/***/ function(module, exports, __webpack_require__) {

	/**
	* (C) Copyright IBM Corp. 2016. All Rights Reserved.
	*
	* Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except
	* in compliance with the License. You may obtain a copy of the License at
	*
	* http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software distributed under the License
	* is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express
	* or implied. See the License for the specific language governing permissions and limitations under
	* the License.
	*/
	
	var events = __webpack_require__(9);
	var eventHandlers = __webpack_require__(77);
	var utils = __webpack_require__(35);
	var assign = __webpack_require__(11);
	var defaultStyles = __webpack_require__(95);
	
	var eventsArray = {};
	
	function init(config) {
		return new PlayBack(config);
	}
	
	function registerEvents(chatID) {
		eventsArray[chatID] = [];
		eventsArray[chatID].push(events.subscribe('playback-start-' + chatID, eventHandlers.playback.start));
		eventsArray[chatID].push(events.subscribe('playback-resize-' + chatID, eventHandlers.playback.resize));
		eventsArray[chatID].push(events.subscribe('playback-scroll-to-bottom-' + chatID, eventHandlers.playback.scrollToBottom));
		eventsArray[chatID].push(events.subscribe('playback-receive-' + chatID, eventHandlers.playback.receive));
		eventsArray[chatID].push(events.subscribe('playback-send-' + chatID, eventHandlers.playback.send));
		eventsArray[chatID].push(events.subscribe('playback-destroy-' + chatID, eventHandlers.playback.destroy));
		eventsArray[chatID].push(events.subscribe('playback-clear-' + chatID, eventHandlers.playback.clear));
	}
	
	function PlayBack(config) {
		var root = (typeof config.el === 'string') ? document.getElementById(config.el) : config.el;
		this.chatID = utils.getUUID();
		registerEvents(this.chatID);
		events.publish('playback-start-' + this.chatID, {
			chatID: this.chatID,
			root: (typeof config.el === 'string') ? document.getElementById(config.el) : config.el,
			mapsServer: ("https://dd1-i-serve-maps.mybluemix.net") || 'https://dp1-i-serve-maps.mybluemix.net/',
			styles: assign({}, defaultStyles, config.styles),
			originalContent: root.innerHTML
		});
		this.clear = function() {
			events.publish('playback-clear-' + this.chatID, this.chatID);
			return this;
		};
		this.destroy = function() {
			events.publish('playback-clear-' + this.chatID, this.chatID);
			events.publish('playback-destroy-' + this.chatID, this.chatID);
			for (var i = 0; i < eventsArray[this.chatID].length; i++)
				eventsArray[this.chatID][i].remove();
			delete eventsArray[this.chatID];
			delete this.clear;
			delete this.send;
			delete this.receive;
			delete this.destroy;
			delete this.chatID;
			return this;
		};
		this.send = function(data) {
			var chatID = this.chatID;
			events.publish('playback-send-' + chatID, { chatID: chatID, data: data });
			return this;
		};
		this.receive = function(data) {
			var chatID = this.chatID;
			events.publish('playback-receive-' + chatID, { chatID: chatID, data: data });
			return this;
		};
		return this;
	}
	
	
	module.exports = {
		init: init
	};


/***/ },
/* 95 */
/***/ function(module, exports) {

	/**
	* (C) Copyright IBM Corp. 2016. All Rights Reserved.
	*
	* Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except
	* in compliance with the License. You may obtain a copy of the License at
	*
	* http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software distributed under the License
	* is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express
	* or implied. See the License for the specific language governing permissions and limitations under
	* the License.
	*/
	
	var defaultStyles = {
		background: 'rgba(61, 61, 61, 1)',
		accentBackground: 'rgba(175, 110, 232, 1)',
		accentText: '#ffffff',
		text: '#ffffff',
		link: '#ffffff',
		secondaryBackground: 'rgba(70, 70, 70, 1)',
		secondaryText: 'rgba(247, 247, 247, 1)',
		inputBackground: 'rgba(70, 70, 70, 1)',
		inputText: 'rgba(247, 247, 247, 1)',
		errorBackground: 'rgba(239, 62, 58, 1)',
		errorText: '#ffffff'
	};
	
	module.exports = defaultStyles;


/***/ },
/* 96 */
/***/ function(module, exports, __webpack_require__, __webpack_module_template_argument_0__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(__webpack_module_template_argument_0__);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(3)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/raw-loader/index.js!./styles.css", function() {
				var newContent = require("!!./../../../node_modules/raw-loader/index.js!./styles.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ }
/******/ ])))
});
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCA1MmFiNmFmODUyMGY1OWNkNzcxYSIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy5jc3M/MjY5OSIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzLmNzcyIsIndlYnBhY2s6Ly8vLi9+L3N0eWxlLWxvYWRlci9hZGRTdHlsZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Jvb3RzdHJhcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbGF5b3V0cy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbGF5b3V0cy9zaG93LWxvY2F0aW9ucy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbGF5b3V0cy9zaG93LWxvY2F0aW9ucy9zdHlsZXMuY3NzIiwid2VicGFjazovLy8uL3NyYy9ldmVudHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRlL2luZGV4LmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL2Fzc2lnbi5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fYXNzaWduVmFsdWUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvZXEuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2NvcHlPYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2NyZWF0ZUFzc2lnbmVyLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19iYXNlUmVzdC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fYXBwbHkuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2lzSXRlcmF0ZWVDYWxsLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL2lzQXJyYXlMaWtlLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL2lzRnVuY3Rpb24uanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvaXNPYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvaXNMZW5ndGguanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2lzSW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2lzUHJvdG90eXBlLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL2tleXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2FycmF5TGlrZUtleXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2Jhc2VUaW1lcy5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9pc0FyZ3VtZW50cy5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9pc0FycmF5TGlrZU9iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9pc09iamVjdExpa2UuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvaXNBcnJheS5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fYmFzZUtleXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX25hdGl2ZUtleXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX292ZXJBcmcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy91dGlscy93cml0ZU1lc3NhZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vfi9lczYtcHJvbWlzZS9kaXN0L2VzNi1wcm9taXNlLmpzIiwid2VicGFjazovLy8uL34vcHJvY2Vzcy9icm93c2VyLmpzIiwid2VicGFjazovLy8od2VicGFjaykvYnVpbGRpbi9tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vL3ZlcnR4IChpZ25vcmVkKSIsIndlYnBhY2s6Ly8vKHdlYnBhY2spL2J1aWxkaW4vYW1kLWRlZmluZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbGF5b3V0cy9zaG93LWxvY2F0aW9ucy90ZW1wbGF0ZXMvYmFzZS5odG1sIiwid2VicGFjazovLy8uL3NyYy9sYXlvdXRzL3Nob3ctbG9jYXRpb25zL3RlbXBsYXRlcy9jcmVhdGUtZG9tLWFycmF5Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xheW91dHMvc2hvdy1sb2NhdGlvbnMvdGVtcGxhdGVzL2FkZC1sb2NhdGlvbnMtaXRlbS5odG1sIiwid2VicGFjazovLy8uL3NyYy9sYXlvdXRzL3Nob3ctbG9jYXRpb25zL3RlbXBsYXRlcy9hZGQtbG9jYXRpb24taXRlbS5odG1sIiwid2VicGFjazovLy8uL3NyYy9sYXlvdXRzL3Nob3ctbG9jYXRpb25zL3RlbXBsYXRlcy9ob3Vycy1jbG9zZWQuaHRtbCIsIndlYnBhY2s6Ly8vLi9zcmMvbGF5b3V0cy9zaG93LWxvY2F0aW9ucy90ZW1wbGF0ZXMvaG91cnMtb3Blbi5odG1sIiwid2VicGFjazovLy8uL3NyYy9sYXlvdXRzL3Nob3ctbG9jYXRpb25zL3RlbXBsYXRlcy9ob3Vycy10b2RheS1vcGVuLmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xheW91dHMvc2hvdy1sb2NhdGlvbnMvdGVtcGxhdGVzL2hvdXJzLXRvZGF5LWNsb3NlZC5odG1sIiwid2VicGFjazovLy8uL3NyYy9sYXlvdXRzL3Nob3ctbG9jYXRpb25zL3RlbXBsYXRlcy9ob3Vycy10aW1lem9uZS5odG1sIiwid2VicGFjazovLy8uL3NyYy9sYXlvdXRzL3JlcXVlc3QtZ2VvbG9jYXRpb24tbGF0bG9uZy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbGF5b3V0cy9yZXF1ZXN0LWdlb2xvY2F0aW9uLXppcGNvZGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xheW91dHMvY2hvb3NlLWxvY2F0aW9uLXR5cGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xheW91dHMvY2hvb3NlLWxvY2F0aW9uLXR5cGUvc3R5bGVzLmNzcyIsIndlYnBhY2s6Ly8vLi9zcmMvbGF5b3V0cy9jaG9vc2UtbG9jYXRpb24tdHlwZS90ZW1wbGF0ZXMvYmFzZS5odG1sIiwid2VicGFjazovLy8uL3NyYy9sYXlvdXRzL2Nob29zZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbGF5b3V0cy9jaG9vc2Uvc3R5bGVzLmNzcyIsIndlYnBhY2s6Ly8vLi9zcmMvbGF5b3V0cy9jaG9vc2UvdGVtcGxhdGVzL2J1dHRvbi5odG1sIiwid2VicGFjazovLy8uL3NyYy9sYXlvdXRzL2Zvcm0vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xheW91dHMvZm9ybS9zdHlsZXMuY3NzIiwid2VicGFjazovLy8uL3NyYy9wcm9maWxlL2luZGV4LmpzIiwid2VicGFjazovLy8uL34vQHdhdHNvbi12aXJ0dWFsLWFnZW50L2NsaWVudC1zZGsvbGliL3dlYi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbGF5b3V0cy9mb3JtL3RlbXBsYXRlcy9iYXNlLmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xheW91dHMvZm9ybS90ZW1wbGF0ZXMvZmllbGQuaHRtbCIsIndlYnBhY2s6Ly8vLi9zcmMvbGF5b3V0cy9jYy12YWxpZGF0b3IvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xheW91dHMvY2MtdmFsaWRhdG9yL3N0eWxlcy5jc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xheW91dHMvY2MtdmFsaWRhdG9yL3ZhbGlkYXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xheW91dHMvY2MtdmFsaWRhdG9yL3RlbXBsYXRlcy9iYXNlLmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xheW91dHMvZXJyb3IvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xheW91dHMvZXJyb3Ivc3R5bGVzLmNzcyIsIndlYnBhY2s6Ly8vLi9zcmMvbGF5b3V0cy9lcnJvci90ZW1wbGF0ZXMvYmFzZS5odG1sIiwid2VicGFjazovLy8uL3NyYy9ldmVudHMvaGFuZGxlcnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2V2ZW50cy9oYW5kbGVycy9zdGFydC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdGVtcGxhdGVzL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy90ZW1wbGF0ZXMvaW5wdXQuaHRtbCIsIndlYnBhY2s6Ly8vLi9zcmMvdGVtcGxhdGVzL3JlY2VpdmUuaHRtbCIsIndlYnBhY2s6Ly8vLi9zcmMvdGVtcGxhdGVzL3NlbmQuaHRtbCIsIndlYnBhY2s6Ly8vLi9zcmMvdGVtcGxhdGVzL3N0YXJ0Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL2V2ZW50cy9oYW5kbGVycy9yZXNpemUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2V2ZW50cy9oYW5kbGVycy9yZWNlaXZlLmpzIiwid2VicGFjazovLy8uL3NyYy9ldmVudHMvaGFuZGxlcnMvc2VuZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZXZlbnRzL2hhbmRsZXJzL3NlbmQtbW9jay5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZXZlbnRzL2hhbmRsZXJzL3NlbmQtaW5wdXQtbWVzc2FnZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZXZlbnRzL2hhbmRsZXJzL2lucHV0LmpzIiwid2VicGFjazovLy8uL3NyYy9ldmVudHMvaGFuZGxlcnMvZXJyb3IuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2V2ZW50cy9oYW5kbGVycy9wbGF5YmFjay5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZXZlbnRzL2hhbmRsZXJzL3Njcm9sbC10by1ib3R0b20uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2V2ZW50cy9oYW5kbGVycy90cnktaXQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BsYXliYWNrL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xheW91dHMvc2hvdy1sb2NhdGlvbnMvc3R5bGVzLmNzcz85ZmI4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO0FDVkE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FB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QUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQThCLHNCQUFzQjs7QUFFcEQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxzQkFBcUIsK0JBQStCO0FBQ3BEO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBLE1BQUs7QUFDTDtBQUNBLE1BQUs7QUFDTDtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1QsUUFBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsUUFBTztBQUNQO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFFBQU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBdUIsUUFBUTtBQUMvQjtBQUNBO0FBQ0E7QUFDQSxZQUFXO0FBQ1g7QUFDQTtBQUNBLFVBQVM7QUFDVCx3QkFBdUIsUUFBUTtBQUMvQjs7QUFFQTtBQUNBLFVBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsUUFBTztBQUNQO0FBQ0EsUUFBTztBQUNQO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQSxVQUFTO0FBQ1Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBTztBQUNQO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQSxVQUFTO0FBQ1Q7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsUUFBTztBQUNQO0FBQ0EsUUFBTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsbUVBQWtFLFFBQVE7O0FBRTFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxtRUFBa0UsUUFBUTtBQUMxRTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsc0NBQXFDLFFBQVE7O0FBRTdDOztBQUVBLHNCQUFxQix3QkFBd0I7QUFDN0M7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxRQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxRQUFPO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxRQUFPO0FBQ1A7QUFDQSxRQUFPO0FBQ1A7QUFDQSxRQUFPO0FBQ1A7QUFDQSxRQUFPO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0EsVUFBUztBQUNULFFBQU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVCxRQUFPO0FBQ1A7QUFDQTtBQUNBLDBCQUF5QixZQUFZO0FBQ3JDO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFFBQU87O0FBRVA7QUFDQTtBQUNBLFFBQU87QUFDUDtBQUNBLFFBQU87QUFDUDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBLFFBQU87QUFDUDtBQUNBLFFBQU87QUFDUDs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFFBQU87QUFDUDs7QUFFQTtBQUNBLGVBQWMsU0FBUztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsUUFBTztBQUNQO0FBQ0EsUUFBTztBQUNQOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFFBQU87QUFD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O0FDNzdCRDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBLEVBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esd0JBQXVCLHNCQUFzQjtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFxQjtBQUNyQjs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsNEJBQTJCO0FBQzNC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OztBQ3pDQTtBQUNBO0FBQ0E7QUFDQSxrRUFBaUU7QUFDakU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBbUI7QUFDbkI7QUFDQSxHQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBaUIscUNBQXFDO0FBQ3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4Q0FBNkMsNkJBQTZCO0FBQzFFO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQWdELDZCQUE2QjtBQUM3RTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOzs7Ozs7O0FDakZBO0FBQ0E7QUFDQTtBQUNBLGtFQUFpRTtBQUNqRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7QUM1QkE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnREFBc0Y7QUFDdEY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQSxpQ0FBZ0MsVUFBVSxFQUFFO0FBQzVDLEUiLCJmaWxlIjoiSUJNQ2hhdENsaWVudC1sYXRlc3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShcIklCTUNoYXRcIiwgW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiSUJNQ2hhdFwiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJJQk1DaGF0XCJdID0gZmFjdG9yeSgpO1xufSkodGhpcywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uXG4gKiovIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiB3ZWJwYWNrL2Jvb3RzdHJhcCA1MmFiNmFmODUyMGY1OWNkNzcxYVxuICoqLyIsIi8qKlxuKiAoQykgQ29weXJpZ2h0IElCTSBDb3JwLiAyMDE2LiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuKlxuKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpOyB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdFxuKiBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuKlxuKiBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbipcbiogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZSBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZVxuKiBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzc1xuKiBvciBpbXBsaWVkLiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kIGxpbWl0YXRpb25zIHVuZGVyXG4qIHRoZSBMaWNlbnNlLlxuKi9cblxucmVxdWlyZSgnLi9zdHlsZXMuY3NzJyk7XG5cbnZhciBib290c3RyYXAgPSByZXF1aXJlKCcuL2Jvb3RzdHJhcCcpO1xuXG4vKipcbiAqIEBuYW1lc3BhY2UgSUJNQ2hhdFxuICovXG5cbnZhciBJQk1DaGF0ID0ge1xuXHQvKipcblx0ICogR2VuZXJhdGUgdGhlIGNoYXQgd2lkZ2V0IGludG8gYW4gZWxlbWVudC5cblx0ICogQGZ1bmN0aW9uIGluaXRcblx0ICogQG1lbWJlcm9mIElCTUNoYXRcblx0ICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZ1xuXHQgKiBAcGFyYW0ge3N0cmluZ30gY29uZmlnLmVsIC0gVGFrZXMgYSBzdHJpbmcgcmVwcmVzZW50aW5nIHRoZSBJRCBvZiBhbiBodG1sIGVsZW1lbnQgdG8gYmUgcmVuZGVyZWQgdG8gT1IgYSBzZWxlY3RlZCBlbGVtZW50XG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBjb25maWcuYm90SUQgLSBUaGUgdW5pcXVlIGlkZW50aWZpZXIgb2YgeW91ciBWaXJ0dWFsIEFnZW50LlxuXHQgKiBAcGFyYW0ge3N0cmluZ30gY29uZmlnLnVzZXJJRCAtIEEgaGFzaGVkIG5vbi1pZGVudGlmaWFibGUgKGUuZy4gbm90IGEgdXNlcnMgZW1haWwgYWRkcmVzcyBvciBwdWJsaWMgdXNlciBpZCkgdW5pcXVlIElEIHVzZWQgZm9yIHRyYWNraW5nIGluIHRoZSBFbmdhZ2VtZW50IE1ldHJpY3MgZGFzaGJvYXJkLlxuXHQgKiBAcGFyYW0ge3N0cmluZ30gY29uZmlnLmJhc2VVUkw9aHR0cHM6Ly9hcGkuaWJtLmNvbS92aXJ0dWFsYWdlbnQvcnVuL2FwaS92MS8gLSBvcHRpb25hbDogc3BlY2lmaWVzIGEgZGlmZmVyZW50IGJvdCBob3N0aW5nIHNlcnZlci4gVGhlIG1vc3QgY29tbW9uIHVzZWNhc2UgZm9yIHRoaXMgcGFyYW0gaXMgdG8gcG9pbnQgdGhlIHdpZGdldCB0byBhIHNlcnZlciB0aGF0IHdpbGwgYWRkIFgtSUJNLUNsaWVudC1JZCBhbmQgWC1JQk0tQ2xpZW50LVNlY3JldCBoZWFkZXJzIHRvIHRoZSByZXF1ZXN0LlxuXHQgKiBAcGFyYW0ge3N0cmluZ30gY29uZmlnLlhJQk1DbGllbnRJRCAtIG9wdGlvbmFsOiBZb3VyIElCTUNsaWVudElELi4uIHRoaXMgc2hvdWxkIG5vdCBiZSBtYWRlIHB1YmxpYyBpbiBhIHB1YmxpYyBlbnZpcm9ubWVudC4gSW5jbHVkaW5nIHRoaXMgd2lsbCBhZGQgWC1JQk0tQ2xpZW50LUlkIGFzIGEgaGVhZGVyIHRvIHlvdXIgcmVxdWVzdC5cblx0ICogQHBhcmFtIHtzdHJpbmd9IGNvbmZpZy5YSUJNQ2xpZW50U2VjcmV0IC0gb3B0aW9uYWw6IFlvdXIgSUJNQ2xpZW50U2VjcmV0Li4uIHRoaXMgc2hvdWxkIG5vdCBiZSBtYWRlIHB1YmxpYyBpbiBhIHB1YmxpYyBlbnZpcm9ubWVudC4gSW5jbHVkaW5nIHRoaXMgd2lsbCBhZGQgWC1JQk0tQ2xpZW50LVNlY3JldCBhcyBhIGhlYWRlciB0byB5b3VyIHJlcXVlc3QuXG5cdCAqIEBwYXJhbSB7RnVuY3Rpb259IGNvbmZpZy5lcnJvckhhbmRsZXIgLSBvcHRpb25hbDogQSBmdW5jdGlvbiB0aGF0IHRha2VzIGFuIGVycm9yIG9iamVjdCBhcyBhIHBhcmFtIGlmIHRoZXJlIGlzIGEgcHJvYmxlbSB3aXRoIGNvbW11bmljYXRpbmcgd2l0aCB5b3VyIFZpcnR1YWwgQWdlbnQuIEJ5IGRlZmF1bHQsIGlmIGFuIGVycm9yIGlzIHJlY2VpdmVkLCB0aGUgdXNlciBpcyBlc2NhbGF0ZWQgdG8gYSBsaXZlIGFnZW50LiBZb3UgbWF5LCBob3dldmVyLCB3YW50IHRvIGhhbmRsZSBzb21lIGVycm9ycyBkaWZmZXJlbnRseSAoNDAxIGZvciBpbnN0YW5jZSlcblx0ICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZy5lcnJvckhhbmRsZXJDb250ZXh0IC0gb3B0aW9uYWw6IEEgXCJ0aGlzXCIgdmFsdWUgZm9yIHRoZSBlcnJvckhhbmxkZXIuXG5cdCAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWcuc3R5bGVzIC0gb3B0aW9uYWw6IE92ZXJyaWRlIGRlZmF1bHQgc3R5bGluZy5cblx0ICogQHBhcmFtIHtzdHJpbmd9IGNvbmZpZy5zdHlsZXMuYmFja2dyb3VuZD1yZ2JhKDYxLDYxLDYxLDEpIC0gb3B0aW9uYWw6IHJnYmEoWCwgWCwgWCwgWCkgb3IgaGV4IGNvZGUgZm9yIGJhY2tncm91bmQgY29sb3Jcblx0ICogQHBhcmFtIHtzdHJpbmd9IGNvbmZpZy5zdHlsZXMudGV4dD0jZmZmZmZmIC0gb3B0aW9uYWw6IHJnYmEoWCwgWCwgWCwgWCkgb3IgaGV4IGNvZGUgZm9yIG1haW4gdGV4dCBjb2xvclxuXHQgKiBAcGFyYW0ge3N0cmluZ30gY29uZmlnLnN0eWxlcy5saW5rPSNmZmZmZmYgLSBvcHRpb25hbDogcmdiYShYLCBYLCBYLCBYKSBvciBoZXggY29kZSBmb3IgY29sb3Igb2YgbGlua3MgaW4gdGV4dFxuXHQgKiBAcGFyYW0ge3N0cmluZ30gY29uZmlnLnN0eWxlcy5zZWNvbmRhcnlCYWNrZ3JvdW5kPXJnYmEoNzAsNzAsNzAsMSkgLSBvcHRpb25hbDogcmdiYShYLCBYLCBYLCBYKSBvciBoZXggY29kZSBmb3IgYmFja2dyb3VuZCBjb2xvciBvZiBjaGF0IGJ1YmJsZXMgYW5kIG90aGVyIHNlY29uZGFyeSBpbmZvXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBjb25maWcuc3R5bGVzLnNlY29uZGFyeVRleHQ9cmdiYSgyNDcsMjQ3LDI0NywxKSAtIG9wdGlvbmFsOiByZ2JhKFgsIFgsIFgsIFgpIG9yIGhleCBjb2RlIGZvciBjb2xvciBvZiBjaGF0IGJ1YmJsZSB0ZXh0IGFuZCBvdGhlciBzZWNvbmRhcnkgaW5mb1xuXHQgKiBAcGFyYW0ge3N0cmluZ30gY29uZmlnLnN0eWxlcy5pbnB1dEJhY2tncm91bmQ9cmdiYSg3MCw3MCw3MCwxKSAtIG9wdGlvbmFsOiByZ2JhKFgsIFgsIFgsIFgpIG9yIGhleCBjb2RlIGZvciBiYWNrZ3JvdW5kIGNvbG9yIG9mIGlucHV0IGVsZW1lbnRzIGluIGZvcm1zXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBjb25maWcuc3R5bGVzLmlucHV0VGV4dD1yZ2JhKDI0NywyNDcsMjQ3LDEpIC0gb3B0aW9uYWw6IHJnYmEoWCwgWCwgWCwgWCkgb3IgaGV4IGNvZGUgZm9yIGNvbG9yIG9mIGlucHV0IHRleHQgaW4gZm9ybXNcblx0ICogQHBhcmFtIHtzdHJpbmd9IGNvbmZpZy5zdHlsZXMuYWNjZW50VGV4dD0jZmZmZmZmIC0gb3B0aW9uYWw6IHJnYmEoWCwgWCwgWCwgWCkgb3IgaGV4IGNvZGUgZm9yIHRleHQgY29sb3JzIHRvIGJlIHVzZWQgaW4gY29uanVuY3Rpb24gd2l0aCBhY2NlbnRCYWNrZ3JvdW5kIGUuZy4gYnV0dG9uIHRleHRcblx0ICogQHBhcmFtIHtzdHJpbmd9IGNvbmZpZy5zdHlsZXMuYWNjZW50QmFja2dyb3VuZD1yZ2JhKDE3NSwxMTAsMjMyLDEpIC0gb3B0aW9uYWw6IHJnYmEoWCwgWCwgWCwgWCkgb3IgaGV4IGNvZGUgZm9yIGFjY2VudCBjb2xvcnMgdXNlZCBieSB0aGUgY2hhdCBhcHBsaWNhdGlvbiBlLmcuIGJ1dHRvbnNcblx0ICogQHBhcmFtIHtzdHJpbmd9IGNvbmZpZy5zdHlsZXMuZXJyb3JUZXh0PSNmZmZmZmYgLSBvcHRpb25hbDogcmdiYShYLCBYLCBYLCBYKSBvciBoZXggY29kZSBmb3IgdGV4dCBjb2xvcnMgdG8gYmUgdXNlZCBpbiBjb25qdW5jdGlvbiB3aXRoIGVycm9yQmFja2dyb3VuZCBlLmcuIGJ1dHRvbiB0ZXh0XG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBjb25maWcuc3R5bGVzLmVycm9yQmFja2dyb3VuZD1yZ2JhKDIzOSw2Miw1OCwxKSAtIG9wdGlvbmFsOiByZ2JhKFgsIFgsIFgsIFgpIG9yIGhleCBjb2RlIGZvciBlcnJvciBjb2xvcnMgdXNlZCBieSB0aGUgY2hhdCBhcHBsaWNhdGlvbiBlLmcuIHZhbGlkYXRpb24gYnV0dG9uc1xuXHQgKiBAZXhhbXBsZVxuXHQgKiBJQk1DaGF0LmluaXQoe1xuXHQgKiAgZWw6ICdteV9kaXYnLFxuXHQgKiAgYm90SUQ6ICd4eHh4eHh4eHh4eHh4eCdcblx0ICogIHN0eWxlczoge1xuXHQgKiAgICBiYWNrZ3JvdW5kOiBcIiMwMDAwMDBcIlxuXHQgKiAgfVxuXHQgKiB9KS50aGVuKGZ1bmN0aW9uKCl7XG5cdCAqICAgICBjb25zb2xlLmxvZygnaW5pdGlhbGl6ZScpO1xuXHQgKiB9KTtcblx0ICogLy9vclxuXHQgKiB2YXIgZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubXktd2lkZ2V0LWNvbnRhaW5lcicpO1xuXHQgKiBJQk1DaGF0LmluaXQoe1xuXHQgKiAgZWw6IGVsLFxuXHQgKiAgYm90SUQ6ICd4eHh4eHh4eHh4eHh4eCdcblx0ICogIHN0eWxlczoge1xuXHQgKiAgICBiYWNrZ3JvdW5kOiBcIiMwMDAwMDBcIlxuXHQgKiAgfVxuXHQgKiB9KS50aGVuKGZ1bmN0aW9uKCl7XG5cdCAqICAgICBjb25zb2xlLmxvZygnaW5pdGlhbGl6ZScpO1xuXHQgKiB9KTtcblx0ICogQHJldHVybnMge1Byb21pc2V9IFJldHVybnM6IEEgcHJvbWlzZSBzbyB5b3UgY2FuIGNhbGwgZnVuY3Rpb25zIGFmdGVyIHRoZSB3aWRnZXQgaGFzIGJlZW4gaW5pdGlhbGl6ZWQuXG5cdCAqL1xuXHRpbml0OiBib290c3RyYXAuaW5pdCxcblx0LyoqXG5cdCAqIFJlc3RhcnQgdGhlIGNoYXQgd2lkZ2V0LiBUaGUgc2FtZSBjaGF0IHdpZGdldCBpcyByZW5kZXJlZCBpbiB0aGUgc2FtZSBodG1sIGVsZW1lbnQgYXMgd2FzIHNwZWNpZmllZCBpbiB0aGUgaW5pdCBtZXRob2QuXG5cdCAqIEBmdW5jdGlvbiByZXN0YXJ0XG5cdCAqIEBtZW1iZXJvZiBJQk1DaGF0XG5cdCAqIEBleGFtcGxlXG5cdCAqIElCTUNoYXQucmVzdGFydCgpLnRoZW4oZnVuY3Rpb24oKXtcblx0ICogICAgIGNvbnNvbGUubG9nKCdyZXN0YXJ0ZWQnKTtcblx0ICogfSk7XG5cdCAqIEByZXR1cm5zIHtQcm9taXNlfSBSZXR1cm5zOiBBIHByb21pc2Ugc28geW91IGNhbiBjYWxsIGZ1bmN0aW9ucyBhZnRlciB0aGUgd2lkZ2V0IGhhcyBiZWVuIGluaXRpYWxpemVkLlxuXHQgKi9cblx0cmVzdGFydDogYm9vdHN0cmFwLnJlc3RhcnQsXG5cdC8qKlxuXHQgKiBEZXN0cm95IHRoZSBjaGF0IHdpZGdldCBhbmQgcmVzdG9yZSB0aGUgb3JpZ2luYWwgSFRNTCBjb250ZW50LiBVc2VmdWwgaWYgdGhlIGNoYXQgd2lkZ2V0IGlzIGRpc3BsYXllZCBpbiBhIG1vZGFsLCBmb3IgZXhhbXBsZSwgYW5kIHlvdSB3YW50IGl0IHRvIGdvIGF3YXkgd2hlbiB0aGUgbW9kYWwgaXMgY2xvc2VkLlxuXHQgKiBAZnVuY3Rpb24gZGVzdHJveVxuXHQgKiBAbWVtYmVyb2YgSUJNQ2hhdFxuXHQgKiBAZXhhbXBsZVxuXHQgKiBJQk1DaGF0LmRlc3Ryb3koKS50aGVuKGZ1bmN0aW9uKCl7XG5cdCAqICAgICBjb25zb2xlLmxvZygnZGVzdHJveWVkJyk7XG5cdCAqIH0pO1xuXHQgKiBAcmV0dXJucyB7UHJvbWlzZX0gUmV0dXJuczogQSBwcm9taXNlIHNvIHlvdSBjYW4gY2FsbCBmdW5jdGlvbnMgYWZ0ZXIgdGhlIHdpZGdldCBoYXMgYmVlbiBkZXN0cm95ZWQuXG5cdCAqL1xuXHRkZXN0cm95OiBib290c3RyYXAuZGVzdHJveSxcblxuXHQvKipcblx0ICogU2VuZCBhIG1lc3NhZ2UgdG8gdGhlIGNoYXQgd2lkZ2V0IGZyb20gb3V0c2lkZSB0aGUgY2hhdCB3aWRnZXQuIFRoaXMgbWVzc2FnZSB3aWxsIGJlIGRpc3BsYXllZCBpbiB0aGUgaW50ZXJmYWNlLlxuXHQgKiBAZnVuY3Rpb24gc2VuZFxuXHQgKiBAbWVtYmVyb2YgSUJNQ2hhdFxuXHQgKiBAcGFyYW0ge3N0cmluZ30gbWVzc2FnZSAtIEEgbWVzc2FnZSB5b3Ugd2FudCB0byBzZW5kIHRvIHRoZSBjaGF0IHdpZGdldC5cblx0ICogQHJldHVybnMge0lCTUNoYXR9IC0gUmV0dXJucyBJQk1DaGF0IGZvciBjaGFpbmluZy5cblx0ICogQGV4YW1wbGVcblx0ICogSUJNQ2hhdC5zZW5kKCdIZWxsbyB3b3JsZC4nKTtcblx0ICovXG5cdHNlbmQ6IGZ1bmN0aW9uKG1lc3NhZ2UpIHtcblx0XHRib290c3RyYXAuc2VuZChtZXNzYWdlKTtcblx0XHRyZXR1cm4gSUJNQ2hhdDtcblx0fSxcblxuXHQvKipcblx0ICogTW9jayByZWNlaXZpbmcgYSBtZXNzYWdlIHRvIHRoZSBjaGF0IHdpZGdldCBmcm9tIG91dHNpZGUgdGhlIGNoYXQgd2lkZ2V0LlxuXHQgKiBAZnVuY3Rpb24gcmVjZWl2ZVxuXHQgKiBAbWVtYmVyb2YgSUJNQ2hhdFxuXHQgKiBAcGFyYW0ge3N0cmluZ30gbWVzc2FnZSAtIEEgbWVzc2FnZSB5b3Ugd2FudCB0byBzaG93IGFzIHJlY2VpdmVkIGluIHRoZSBjaGF0IHdpZGdldC5cblx0ICogQHJldHVybnMge0lCTUNoYXR9IC0gUmV0dXJucyBJQk1DaGF0IGZvciBjaGFpbmluZy5cblx0ICogQGV4YW1wbGVcblx0ICogSUJNQ2hhdC5yZWNlaXZlKCdIZWxsbyB3b3JsZC4nKTtcblx0ICovXG5cdHJlY2VpdmU6IGZ1bmN0aW9uKG1lc3NhZ2UpIHtcblx0XHRib290c3RyYXAucmVjZWl2ZShtZXNzYWdlKTtcblx0XHRyZXR1cm4gSUJNQ2hhdDtcblx0fSxcblxuXHQvKipcblx0ICogU2VuZCBhIG1lc3NhZ2UgdG8gdGhlIGNoYXQgd2lkZ2V0IGZyb20gb3V0c2lkZSB0aGUgY2hhdCB3aWRnZXQuIFRoaXMgbWVzc2FnZSB3aWxsIGJlIGRpc3BsYXllZCBpbiB0aGUgaW50ZXJmYWNlLCBidXQgd2lsbCBub3QgYWN0dWFsbHkgZ2V0IHNlbnQgdG8gdGhlIHNlcnZlci5cblx0ICogQGZ1bmN0aW9uIHNlbmRNb2NrXG5cdCAqIEBtZW1iZXJvZiBJQk1DaGF0XG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBtZXNzYWdlIC0gQSBtZXNzYWdlIHlvdSB3YW50IHRvIHByZXRlbmQgdG8gc2VuZCB0byB0aGUgY2hhdCB3aWRnZXQuXG5cdCAqIEByZXR1cm5zIHtJQk1DaGF0fSAtIFJldHVybnMgSUJNQ2hhdCBmb3IgY2hhaW5pbmcuXG5cdCAqIEBleGFtcGxlXG5cdCAqIElCTUNoYXQuc2VuZE1vY2soJ0hlbGxvIHdvcmxkLicpO1xuXHQgKi9cblx0c2VuZE1vY2s6IGZ1bmN0aW9uKG1lc3NhZ2UpIHtcblx0XHRib290c3RyYXAuc2VuZE1vY2sobWVzc2FnZSk7XG5cdFx0cmV0dXJuIElCTUNoYXQ7XG5cdH0sXG5cblx0LyoqXG5cdCAqIFNlbmQgYSBtZXNzYWdlIHRvIHRoZSBjaGF0IHdpZGdldCBmcm9tIG91dHNpZGUgdGhlIGNoYXQgd2lkZ2V0LiBUaGlzIG1lc3NhZ2Ugd2lsbCBOT1QgYmUgZGlzcGxheWVkIGluIHRoZSBpbnRlcmZhY2UuXG5cdCAqIEBmdW5jdGlvbiBzZW5kU2lsZW50bHlcblx0ICogQG1lbWJlcm9mIElCTUNoYXRcblx0ICogQHBhcmFtIHtzdHJpbmd9IG1lc3NhZ2UgLSBBIG1lc3NhZ2UgeW91IHdhbnQgdG8gc2VuZCB0byB0aGUgY2hhdCB3aWRnZXQsIGJ1dCBub3QgZGUgZGlzcGxheWVkIGluIHRoZSBpbnRlcmZhY2UuXG5cdCAqIEByZXR1cm5zIHtJQk1DaGF0fSAtIFJldHVybnMgSUJNQ2hhdCBmb3IgY2hhaW5pbmcuXG5cdCAqIEBleGFtcGxlXG5cdCAqIElCTUNoYXQuc2VuZFNpbGVudGx5KCdIZWxsbyB3b3JsZC4nKTtcblx0ICovXG5cdHNlbmRTaWxlbnRseTogZnVuY3Rpb24obWVzc2FnZSkge1xuXHRcdGJvb3RzdHJhcC5zZW5kU2lsZW50bHkobWVzc2FnZSk7XG5cdFx0cmV0dXJuIElCTUNoYXQ7XG5cdH0sXG5cblx0LyoqXG5cdCAqIFJlZ2lzdGVyIGEgY3VzdG9tIGxheW91dCB3aXRoIHRoZSBjaGF0IHdpZGdldC4gQ2FsbCByZWdpc3RlckxheW91dCgpIGJlZm9yZSB5b3UgY2FsbCBpbml0KCkuXG5cdCAqIEBmdW5jdGlvbiByZWdpc3RlckxheW91dFxuXHQgKiBAbWVtYmVyb2YgSUJNQ2hhdFxuXHQgKiBAcGFyYW0ge3N0cmluZ30gbGF5b3V0IC0gVGhlIG5hbWUgb2YgdGhlIGxheW91dCB5b3VyIGJvdCB3aWxsIHByb3ZpZGUgd2hlbiBpdCBpcyB0cmlnZ2VyZWQgdG8gcmVuZGVyIGEgbGF5b3V0LlxuXHQgKiBAcGFyYW0ge2Z1bmN0aW9ufSBpbml0IC0gQSBmdW5jdGlvbiB0aGF0IHJ1bnMgb25lIHRpbWUsIHdoZW4gdGhlIGNoYXQgd2lkZ2V0IGlzIGJvb3RzdHJhcHBlZC4gQmUgc3VyZSB0byBzdWJzY3JpYmUgdG8gdGhlIFwibGF5b3V0OllPVVJfTEFZT1VUX05BTUVcIiBldmVudCBpbiB0aGlzIGZ1bmN0aW9uLlxuXHQgKiBAcmV0dXJucyB7SUJNQ2hhdH0gLSBSZXR1cm5zIElCTUNoYXQgZm9yIGNoYWluaW5nLlxuXHQgKiBAZXhhbXBsZVxuXHQgKiB2YXIgUGx1bWJlckJyb3RoZXJzID0gcmVxdWlyZSgnLi4vcGx1bWJlci1icm90aGVycy1nYW1lJyk7XG5cdCAqIHZhciBjb25maWcgPSB7fTtcblx0ICpcblx0ICogZnVuY3Rpb24gaW5pdEdhbWUoKSB7XG5cdCAqICAgSUJNQ2hhdC5zdWJzY3JpYmUoJ2xheW91dDpwbHVtYmVyLWJyb3RoZXJzLWdhbWUnLCBmdW5jdGlvbihvYmopIHtcblx0ICogICAgIHZhciB1dWlkID0gb2JqLnV1aWQ7XG5cdCAqICAgICB2YXIgcGFyZW50RWxlbWVudCA9IG9iai5lbGVtZW50O1xuXHQgKiAgICAgdmFyIGxheW91dEVsZW1lbnQgPSBvYmoubGF5b3V0RWxlbWVudDtcblx0ICogICAgIHZhciBtc2dFbGVtZW50ID0gb2JqLm1zZ0VsZW1lbnQ7XG5cdCAqICAgICB2YXIgbWVzc2FnZSA9IG9iai5tZXNzYWdlO1xuXHQgKiAgICAgdmFyIGRhdGEgPSBvYmouZGF0YTtcblx0ICogICAgIG1zZ0VsZW1lbnQudGV4dENvbnRlbnQgPSAnTG9hZGluZyBQbHVtYmVyIEJyb3RoZXJzISc7XG5cdCAqICAgICB2YXIgYnJvdGhlcnMgPSBuZXcgUGx1bWJlckJyb3RoZXJzKCk7XG5cdCAqICAgICBicm90aGVycy5yZW5kZXIobGF5b3V0RWxlbWVudCwgZGF0YSkudGhlbihmdW5jdGlvbigpIHtcblx0ICogICAgICAgbXNnRWxlbWVudC50ZXh0Q29udGVudCA9ICdFbmpveSB5b3VyIGdhbWUgb2YgUGx1bWJlciBCcm90aGVycyEnO1xuXHQgKiAgICAgfSk7XG5cdCAqICAgfVxuXHQgKiB9KTtcblx0ICpcblx0ICogSUJNQ2hhdC5yZWdpc3RlckxheW91dCgncGx1bWJlci1icm90aGVycy1nYW1lJywgaW5pdEdhbWUpO1xuXHQgKiBJQk1DaGF0LmluaXQoY29uZmlnKTtcblx0ICovXG5cdHJlZ2lzdGVyTGF5b3V0OiBmdW5jdGlvbihsYXlvdXQsIGluaXQpIHtcblx0XHRib290c3RyYXAucmVnaXN0ZXJMYXlvdXQobGF5b3V0LCBpbml0KTtcblx0XHRyZXR1cm4gSUJNQ2hhdDtcblx0fSxcblxuXHQvKipcblx0ICogT3ZlcnJpZGUgaG93IGlucHV0cyBpbnRvIHRoZSBjaGF0IHRleHQgYm94IGFyZSBoYW5kbGVkLiBlLmcuIHlvdSBtYXkgd2lzaCB0byBzZW5kIG1lc3NhZ2VzIHRvIHlvdXIgbGl2ZSBhZ2VudCBpbnN0ZWFkIG9mIHRvIHlvdXIgdmlydHVhbCBhZ2VudC5cblx0ICogQGZ1bmN0aW9uIGVuYWJsZUN1c3RvbUlucHV0SGFuZGxlclxuXHQgKiBAbWVtYmVyb2YgSUJNQ2hhdFxuXHQgKiBAcGFyYW0ge09iamVjdH0gY29uZmlnXG5cdCAqIEBwYXJhbSB7ZnVuY3Rpb259IGNvbmZpZy5jYWxsYmFjayAtIEEgZnVuY3Rpb24gdGhhdCByZWNlaXZlcyBhIG1lc3NhZ2UgYW5kIHJlc29sdmUgYW5kIHJlamVjdCBmdW5jdGlvbnMgYXMgcGFyYW1zXG5cdCAqIEBwYXJhbSB7Ym9vbGVhbn0gY29uZmlnLmNvbnRleHQgLSAob3B0aW9uYWwpIEEgdmFsdWUgZm9yIFwidGhpc1wiIGluIHlvdXIgY2FsbGJhY2sgZnVuY3Rpb25cblx0ICogQHJldHVybnMge0lCTUNoYXR9IC0gUmV0dXJucyBJQk1DaGF0IGZvciBjaGFpbmluZy5cblx0ICogQGV4YW1wbGVcblx0ICogSUJNQ2hhdC5lbmFibGVDdXN0b21JbnB1dEhhbmRsZXIoe1xuXHQgKiAgIGNhbGxiYWNrOiBmdW5jdGlvbihtZXNzYWdlLCByZXNvbHZlLCByZWplY3QpIHtcblx0ICogICAgIC8vZG8gc29tZXRoaW5nIGxpa2Ugc2VuZCB0aGUgbWVzc2FnZSB0byB5b3VyIGxpdmUgY3VzdG9tZXIgc2VydmljZSByZXBcblx0ICogICAgIElCTUNoYXQucmVjZWl2ZSgnQSBtZXNzYWdlIGZyb20geW91ciBsaXZlIGN1c3RvbWVyIHNlcnZpY2UgcmVwJyk7XG5cdCAqICAgICByZXNvbHZlKCk7IC8vIGdldHMgcmlkIG9mIGxvYWRpbmcgc3Bpbm5lciBhbmQgYWxsb3dzIHRoZSBjaGF0IHRleHQgYm94IHRvIGFjY2VwdCBhbm90aGVyIG1lc3NhZ2Vcblx0ICogICAgIC8vIHJlamVjdChlcnJvcik7XG5cdCAqICB9XG5cdCAqIH0pO1xuXHQgKi9cblxuXHRlbmFibGVDdXN0b21JbnB1dEhhbmRsZXI6IGZ1bmN0aW9uKGNvbmZpZykge1xuXHRcdGJvb3RzdHJhcC5lbmFibGVDdXN0b21JbnB1dEhhbmRsZXIoY29uZmlnKTtcblx0XHRyZXR1cm4gSUJNQ2hhdDtcblx0fSxcblxuXHQvKipcblx0ICogUmV0dXJuIGNoYXQgaW5wdXQgYm94ZXMgaGFuZGxpbmcgdG8gdGhlIGRlZmF1bHQgcHJvdmlkZWQgaGFuZGxlci5cblx0ICogQGZ1bmN0aW9uIGRpc2FibGVDdXN0b21JbnB1dEhhbmRsZXJcblx0ICogQG1lbWJlcm9mIElCTUNoYXRcblx0ICogQHJldHVybnMge0lCTUNoYXR9IC0gUmV0dXJucyBJQk1DaGF0IGZvciBjaGFpbmluZy5cblx0ICogQGV4YW1wbGVcblx0ICogSUJNQ2hhdC5kaXNhYmxlQ3VzdG9tSW5wdXRIYW5kbGVyKCk7XG5cdCAqL1xuXG5cdGRpc2FibGVDdXN0b21JbnB1dEhhbmRsZXI6IGZ1bmN0aW9uKCkge1xuXHRcdGJvb3RzdHJhcC5kaXNhYmxlQ3VzdG9tSW5wdXRIYW5kbGVyKCk7XG5cdFx0cmV0dXJuIElCTUNoYXQ7XG5cdH0sXG5cblx0LyoqXG5cdCAqIFNldCBmb2N1cyB0byB0aGUgY2hhdCB0ZXh0IGJveC4gVXNlZnVsIGlmIHlvdSB3YW50IHVzZXJzIHRvIGJlIGFibGUgdG8ganVzdCBzdGFydCB0eXBpbmcgaW50byB0aGUgdGV4dCBib3ggd2l0aG91dCBoYXZpbmcgdG8gY2xpY2sgaW4gdGhlIHRleHQgYm94IGZpcnN0IHRvIHNldCBmb2N1cy5cblx0ICogQGZ1bmN0aW9uIGZvY3VzSW5wdXRcblx0ICogQG1lbWJlcm9mIElCTUNoYXRcblx0ICogQHJldHVybnMge0lCTUNoYXR9IC0gUmV0dXJucyBJQk1DaGF0IGZvciBjaGFpbmluZy5cblx0ICogQGV4YW1wbGVcblx0ICogSUJNQ2hhdC5mb2N1c0lucHV0KCk7XG5cdCAqL1xuXG5cdGZvY3VzSW5wdXQ6IGZ1bmN0aW9uKCkge1xuXHRcdGJvb3RzdHJhcC5mb2N1c0lucHV0KCk7XG5cdFx0cmV0dXJuIElCTUNoYXQ7XG5cdH0sXG5cdC8qKlxuXHQgKiBQcmV2ZW50IHVzZXJzIGZyb20gc3VibWl0dGluZyBtZXNzYWdlcyBpbiB0aGUgY2hhdCB0ZXh0IGJveC4gVXNlZnVsIHdoZW4geW91IHdhbnQgdGhlIHVzZXIgdG8gaW50ZXJhY3Qgd2l0aCBhIGxheW91dCBpbnN0ZWFkLlxuXHQgKiBAZnVuY3Rpb24gZGlzYWJsZUlucHV0XG5cdCAqIEBtZW1iZXJvZiBJQk1DaGF0XG5cdCAqIEByZXR1cm5zIHtJQk1DaGF0fSAtIFJldHVybnMgSUJNQ2hhdCBmb3IgY2hhaW5pbmcuXG5cdCAqIEBleGFtcGxlXG5cdCAqIElCTUNoYXQuZGlzYWJsZUlucHV0KCk7XG5cdCAqL1xuXHRkaXNhYmxlSW5wdXQ6IGZ1bmN0aW9uKCkge1xuXHRcdGJvb3RzdHJhcC5kaXNhYmxlSW5wdXQoKTtcblx0XHRyZXR1cm4gSUJNQ2hhdDtcblx0fSxcblxuXHQvKipcblx0ICogRW5hYmxlIHVzZXJzIHRvIHN1Ym1pdCBtZXNzYWdlcyBpbiB0aGUgY2hhdCB0ZXh0IGJveC4gVXNlZnVsIHdoZW4geW91IHdhbnQgdXNlcnMgdG8gYmUgYWJsZSB0byByZXR1cm4gdG8gYWRkaW5nIG1lc3NhZ2VzIHRvIHRoZSBjaGF0IHRleHQgYm94IGFmdGVyIGludGVyYWN0aW5nIHdpdGggYSBsYXlvdXQuXG5cdCAqIEBmdW5jdGlvbiBlbmFibGVJbnB1dFxuXHQgKiBAcmV0dXJucyB7SUJNQ2hhdH0gLSBSZXR1cm5zIElCTUNoYXQgZm9yIGNoYWluaW5nLlxuXHQgKiBAZXhhbXBsZVxuXHQgKiBJQk1DaGF0LmVuYWJsZUlucHV0KCk7XG5cdCAqL1xuXHRlbmFibGVJbnB1dDogZnVuY3Rpb24oKSB7XG5cdFx0Ym9vdHN0cmFwLmVuYWJsZUlucHV0KCk7XG5cdFx0cmV0dXJuIElCTUNoYXQ7XG5cdH0sXG5cblx0LyoqXG5cdCAqIFN1YnNjcmliZSB0byBhbiBJQk1DaGF0IGV2ZW50LlxuXHQgKiBAZnVuY3Rpb24gc3Vic2NyaWJlXG5cdCAqIEBtZW1iZXJvZiBJQk1DaGF0XG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBldmVudE5hbWUgLSBUYWtlcyBhIHN0cmluZyByZXByZXNlbnRpbmcgdGhlIG5hbWUgb2YgdGhlIGV2ZW50XG5cdCAqIEBwYXJhbSB7ZnVuY3Rpb259IGNhbGxiYWNrIC0gZnVuY3Rpb24gdG8gcnVuIHdoZW4gZXZlbnQgaXMgY2FsbGVkXG5cdCAqIEBwYXJhbSBjb250ZXh0IC0gb3B0aW9uYWw6IHZhbHVlIG9mIFwidGhpc1wiIGluIHRoZSBmdW5jdGlvblxuXHQgKiBAcmV0dXJucyB7T2JqZWN0fSAtIFJldHVybnMgb2JqZWN0IHdpdGggYSAucmVtb3ZlIGZ1bmN0aW9uIHRvIGRlc3Ryb3kgdGhlIHN1YnNjcmlwdGlvblxuXHQgKiBAZXhhbXBsZVxuXHQgKiB2YXIgbXlTdWJzY3JpcHRpb24gPSBJQk1DaGF0LnN1YnNjcmliZSgndGhlLWVuZC1vZi10aGUtd29ybGQnLCBmdW5jdGlvbihtZXNzYWdlKSB7XG5cdCAqICAgY29uc29sZS5sb2cobWVzc2FnZSk7XG5cdCAqICAgbXlTdWJzY3JpcHRpb24ucmVtb3ZlKCk7IC8vIHJlbW92ZSBzdWJzY3JpcHRpb25cblx0ICogfSk7XG5cdCAqL1xuXHRzdWJzY3JpYmU6IGJvb3RzdHJhcC5zdWJzY3JpYmUsXG5cdC8qKlxuXHQgKiBQdWJsaXNoIGFuIElCTUNoYXQgZXZlbnQuXG5cdCAqIEBmdW5jdGlvbiBwdWJsaXNoXG5cdCAqIEBtZW1iZXJvZiBJQk1DaGF0XG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBldmVudE5hbWUgLSBBIHN0cmluZyB0aGF0IHJlcHJlc2VudHMgdGhlIG5hbWUgb2YgdGhlIGV2ZW50IGRhdGFcblx0ICogQHBhcmFtIGRhdGEgLSBEYXRhIHRvIHBhc3MgdG8gdGhlIGNhbGxiYWNrIGZ1bmN0aW9uIG9mIGFueSBzdWJzY3JpYmVkIGZ1bmN0aW9ucy4gQWNjZXB0cyBhbnkgZGF0YSB0eXBlLlxuXHQgKiBAcmV0dXJucyB7SUJNQ2hhdH0gLSBSZXR1cm5zIElCTUNoYXQgZm9yIGNoYWluaW5nLlxuXHQgKiBAZXhhbXBsZVxuXHQgKiBJQk1DaGF0LnB1Ymxpc2goJ3RoZS1lbmQtb2YtdGhlLXdvcmxkJywgJ3BhbmljIScpO1xuXHQgKi9cblx0cHVibGlzaDogZnVuY3Rpb24oZXZlbnROYW1lLCBkYXRhKSB7XG5cdFx0Ym9vdHN0cmFwLnB1Ymxpc2goZXZlbnROYW1lLCBkYXRhKTtcblx0XHRyZXR1cm4gSUJNQ2hhdDtcblx0fSxcblxuXHQvKipcblx0ICogQG5hbWVzcGFjZSBwcm9maWxlXG5cdCAqIEBtZW1iZXJvZiBJQk1DaGF0XG5cdCAqL1xuXHRwcm9maWxlOiB7XG5cdFx0LyoqXG5cdFx0KiBHZXQgYW4gaXRlbSBmcm9tIHRoZSB1c2VyIHByb2ZpbGUgYmFzZWQgb24ga2V5LlxuXHRcdCogQG1lbWJlcm9mIElCTUNoYXQucHJvZmlsZVxuXHRcdCogQGZ1bmN0aW9uIGdldFxuXHRcdCogQHBhcmFtIHtzdHJpbmd9IGtleSAtIFRoZSBuYW1lZCBrZXkgb2YgdGhlIHZhbHVlIHlvdSBhcmUgYWNjZXNzaW5nLlxuXHRcdCogQGV4YW1wbGVcblx0XHQqIElCTUNoYXQucHJvZmlsZS5nZXQoJ2ZpcnN0X25hbWUnKTtcblx0XHQqIEByZXR1cm5zIHtBbnl9IFJldHVybnM6IHRoZSB2YWx1ZSBvZiB0aGUga2V5IGluIHRoZSBwcm9maWxlIG1hcC5cblx0XHQqL1xuXHRcdGdldDogYm9vdHN0cmFwLnByb2ZpbGUuZ2V0LFxuXHRcdC8qKlxuXHRcdCogU2V0IGFuIGl0ZW0gZnJvbSB0aGUgdXNlciBwcm9maWxlIGJhc2VkIG9uIGtleS5cblx0XHQqIEBtZW1iZXJvZiBJQk1DaGF0LnByb2ZpbGVcblx0XHQqIEBmdW5jdGlvbiBzZXRcblx0XHQqIEBwYXJhbSB7c3RyaW5nfSBrZXkgLSBUaGUgbmFtZWQga2V5IG9mIHRoZSB2YWx1ZSB5b3UgYXJlIHNldHRpbmcuXG5cdFx0KiBAcGFyYW0ge3N0cmluZ30gdmFsdWUgLSBUaGUgdmFsdWUgeW91IGFyZSBzZXR0aW5nLlxuXHRcdCogQHJldHVybnMge0lCTUNoYXQucHJvZmlsZX0gLSBSZXR1cm5zIElCTUNoYXQucHJvZmlsZSBmb3IgY2hhaW5pbmcuXG5cdFx0KiBAZXhhbXBsZVxuXHRcdCogSUJNQ2hhdC5wcm9maWxlLnNldCgnZmlyc3RfbmFtZScsICdqb2huJyk7XG5cdFx0Ki9cblx0XHRzZXQ6IGJvb3RzdHJhcC5wcm9maWxlLnNldCxcblx0XHQvKipcblx0XHQqIFNlZSBpZiBhbiBpdGVtIGZyb20gdGhlIHVzZXIgcHJvZmlsZSBleGlzdHMgYmFzZWQgb24ga2V5LlxuXHRcdCogQG1lbWJlcm9mIElCTUNoYXQucHJvZmlsZVxuXHRcdCogQGZ1bmN0aW9uIGhhc1xuXHRcdCogQHBhcmFtIHtzdHJpbmd9IGtleSAtIFRoZSBuYW1lZCBrZXkgb2YgdGhlIHZhbHVlIHlvdSBhcmUgY2hlY2tpbmcgdGhlIGV4aXN0YW5jZSBvZi5cblx0XHQqIEBleGFtcGxlXG5cdFx0KiBJQk1DaGF0LnByb2ZpbGUuaGFzKCdmaXJzdF9uYW1lJyk7XG5cdFx0KiBAcmV0dXJucyB7Qm9vbGVhbn0gLSBCb29sZWFuIGluZGljYXRpbmcgaWYgdGhlIGtleSBleGlzdHMuXG5cdFx0Ki9cblx0XHRoYXM6IGJvb3RzdHJhcC5wcm9maWxlLmhhcyxcblx0XHQvKipcblx0XHQqIENsZWFyIHRoZSBlbnRpcmUgdXNlciBwcm9maWxlLlxuXHRcdCogQG1lbWJlcm9mIElCTUNoYXQucHJvZmlsZVxuXHRcdCogQGZ1bmN0aW9uIGNsZWFyXG5cdFx0KiBAcmV0dXJucyB7SUJNQ2hhdC5wcm9maWxlfSAtIFJldHVybnMgSUJNQ2hhdC5wcm9maWxlIGZvciBjaGFpbmluZy5cblx0XHQqIEBleGFtcGxlXG5cdFx0KiBJQk1DaGF0LnByb2ZpbGUuY2xlYXIoKTtcblx0XHQqL1xuXHRcdGNsZWFyOiBib290c3RyYXAucHJvZmlsZS5jbGVhcixcblx0XHQvKipcblx0XHQqIERlbGV0ZSBhbiBpdGVtIGZyb20gdGhlIHVzZXIgcHJvZmlsZSBiYXNlZCBvbiBrZXkuXG5cdFx0KiBAbWVtYmVyb2YgSUJNQ2hhdC5wcm9maWxlXG5cdFx0KiBAZnVuY3Rpb24gZGVsZXRlXG5cdFx0KiBAcmV0dXJucyB7SUJNQ2hhdC5wcm9maWxlfSAtIFJldHVybnMgSUJNQ2hhdC5wcm9maWxlIGZvciBjaGFpbmluZy5cblx0XHQqIEBwYXJhbSB7c3RyaW5nfSBrZXkgLSBUaGUgbmFtZWQga2V5IG9mIHRoZSB2YWx1ZSB5b3UgYXJlIGRlbGV0aW5nLlxuXHRcdCogQGV4YW1wbGVcblx0XHQqIElCTUNoYXQucHJvZmlsZS5kZWxldGUoJ2ZpcnN0X25hbWUnKTtcblx0XHQqL1xuXHRcdGRlbGV0ZTogYm9vdHN0cmFwLnByb2ZpbGUuZGVsZXRlLFxuXHRcdC8qKlxuXHRcdCogSXRlcmF0ZSBvdmVyIHRoZSBwcm9maWxlLlxuXHRcdCogQG1lbWJlcm9mIElCTUNoYXQucHJvZmlsZVxuXHRcdCogQGZ1bmN0aW9uIGZvckVhY2hcblx0XHQqIEBwYXJhbSB7ZnVuY3Rpb259IGNhbGxiYWNrIC0gVGhlIGZ1bmN0aW9uIHlvdSBhcmUgY2FsbGluZyBvbiBlYWNoIGl0ZW0gaW4gdGhlIHByb2ZpbGUgb2JqZWN0LiBUaGlzIGZ1bmN0aW9uIGlzIHBhc3NlZCBrZXkgYXMgdGhlIGZpcnN0IGFyZ3VtZW50IGFuZCB2YWx1ZSBhcyB0aGUgc2Vjb25kIGFyZ3VtZW50LlxuXHRcdCogQHBhcmFtIHtPYmplY3R9IHRoaXMgLSAob3B0aW9uYWwpIFRoZSBjb250ZXh0IHlvdSB3aXNoIHRvIGNhbGwgdGhlIGNhbGxiYWNrIGluLlxuXHRcdCogQHJldHVybnMge0lCTUNoYXQucHJvZmlsZX0gLSBSZXR1cm5zIElCTUNoYXQucHJvZmlsZSBmb3IgY2hhaW5pbmcuXG5cdFx0KiBAZXhhbXBsZVxuXHRcdCogSUJNQ2hhdC5wcm9maWxlLmZvckVhY2goZnVuY3Rpb24oa2V5LCB2YWx1ZSkge1xuXHRcdCogICBjb25zb2xlLmxvZyhrZXksIHZhbHVlKTtcblx0XHQqIH0pO1xuXHRcdCovXG5cdFx0Zm9yRWFjaDogYm9vdHN0cmFwLnByb2ZpbGUuZm9yRWFjaFxuXHR9LFxuXG5cdC8qKlxuXHQgKiBAaWdub3JlXG5cdCAqL1xuXHRjdXJyZW50U3Vic2NyaXB0aW9uczogYm9vdHN0cmFwLmN1cnJlbnRTdWJzY3JpcHRpb25zLFxuXHQvKipcblx0KiBAaWdub3JlXG5cdCovXG5cdHBsYXliYWNrOiBib290c3RyYXAucGxheWJhY2ssXG5cblx0LyoqXG5cdCogQGlnbm9yZVxuXHQqL1xuXHRzdGF0ZTogYm9vdHN0cmFwLnN0YXRlLFxuXG5cdC8qKlxuXHQgKiBUdXJucyBvbiBhIHdob2xlIGJ1bmNoIG9mIHZlcmJvc2UgY29uc29sZS5sb2cgc3RhdGVtZW50cyFcblx0ICogQGZ1bmN0aW9uIGRlYnVnXG5cdCAqIEBtZW1iZXJvZiBJQk1DaGF0XG5cdCAqIEByZXR1cm5zIHtJQk1DaGF0fSAtIFJldHVybnMgSUJNQ2hhdCBmb3IgY2hhaW5pbmcuXG5cdCAqIEBleGFtcGxlXG5cdCAqIElCTUNoYXQuZGVidWcoKVxuXHQgKi9cblx0ZGVidWc6IGZ1bmN0aW9uKCkge1xuXHRcdGJvb3RzdHJhcC5kZWJ1ZygpO1xuXHRcdHJldHVybiBJQk1DaGF0O1xuXHR9XG5cbn07XG5cblxubW9kdWxlLmV4cG9ydHMgPSBJQk1DaGF0O1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9pbmRleC5qc1xuICoqIG1vZHVsZSBpZCA9IDBcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uL25vZGVfbW9kdWxlcy9yYXctbG9hZGVyL2luZGV4LmpzIS4vc3R5bGVzLmNzc1wiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCB7fSk7XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcblx0Ly8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0aWYoIWNvbnRlbnQubG9jYWxzKSB7XG5cdFx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4vLi4vbm9kZV9tb2R1bGVzL3Jhdy1sb2FkZXIvaW5kZXguanMhLi9zdHlsZXMuY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uL25vZGVfbW9kdWxlcy9yYXctbG9hZGVyL2luZGV4LmpzIS4vc3R5bGVzLmNzc1wiKTtcblx0XHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXHRcdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHRcdH0pO1xuXHR9XG5cdC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9zdHlsZXMuY3NzXG4gKiogbW9kdWxlIGlkID0gMVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBcIi5JQk1DaGF0LW91dGVyLWNvbnRhaW5lciB7XFxuXFx0bWF4LXdpZHRoOiA3NjhweDtcXG4gIG1pbi13aWR0aDogMjg4cHg7XFxuICBtYXJnaW46IDAgYXV0byAwIGF1dG87XFxuICBib3JkZXI6IG5vbmU7XFxuXFx0bWluLWhlaWdodDoxMDBweDtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuXFx0cGFkZGluZzowO1xcblxcdGRpc3BsYXk6dGFibGU7XFxuXFx0d2lkdGg6MTAwJTtcXG5cXHR0ZXh0LWFsaWduOiBsZWZ0O1xcbn1cXG5cXG5cXG4vKiBBZ2VudCBDb21wb25lbnQgKi9cXG5cXG4uSUJNQ2hhdC1pbm5lci1jb250YWluZXIge1xcblxcdGRpc3BsYXk6dGFibGUtY2VsbDtcXG5cXHRoZWlnaHQ6MTAwJTtcXG5cXHRtYXJnaW46IDA7XFxuXFx0cGFkZGluZzogMCA4cHggMCA4cHg7XFxuXFx0dmVydGljYWwtYWxpZ246IGJvdHRvbTtcXG59XFxuXFxuLyogQ2hhdCBDb21wb25lbnQgKi9cXG5cXG4uSUJNQ2hhdC1jaGF0LWNvbnRhaW5lciB7XFxuXFx0ZGlzcGxheTp0YWJsZS1yb3c7XFxuXFx0bWFyZ2luOiAwO1xcblxcdHBhZGRpbmc6XFxufVxcblxcbi8qIE1lc3NhZ2VzIENvbXBvbmVudCAqL1xcblxcbi5JQk1DaGF0LW1lc3NhZ2VzIHtcXG5cXHRvdmVyZmxvdy15OiBhdXRvO1xcblxcdG92ZXJmbG93LXg6IGhpZGRlbjtcXG5cXHRoZWlnaHQ6YXV0bztcXG59XFxuXFxuLklCTUNoYXQtbWVzc2FnZXMgbGFiZWwge1xcblxcdGRpc3BsYXk6YmxvY2s7XFxuXFx0Zm9udC13ZWlnaHQ6Ym9sZDtcXG5cXHR0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcXG5cXHRwYWRkaW5nLWJvdHRvbTowLjI1ZW07XFxufVxcblxcbi5JQk1DaGF0LW1lc3NhZ2VzIGlucHV0IHtcXG5cXHRib3JkZXItcmFkaXVzOiAwO1xcblxcdGJvcmRlcjogMDtcXG5cXHRwYWRkaW5nOjAuMjVlbTtcXG59XFxuXFxuLklCTUNoYXQtbWVzc2FnZXMgYnV0dG9uIHtcXG5cXHRiYWNrZ3JvdW5kOiBub25lO1xcblxcdGJvcmRlcjogMDtcXG5cXHRjb2xvcjogaW5oZXJpdDtcXG5cXHRmb250OiBpbmhlcml0O1xcblxcdGxpbmUtaGVpZ2h0OiBub3JtYWw7XFxuXFx0b3ZlcmZsb3c6IHZpc2libGU7XFxuXFx0cGFkZGluZzogMDtcXG5cXHQtd2Via2l0LWFwcGVhcmFuY2U6IGJ1dHRvbjsgLyogZm9yIGlucHV0ICovXFxuXFx0LXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTsgLyogZm9yIGJ1dHRvbiAqL1xcblxcdC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XFxuXFx0LW1zLXVzZXItc2VsZWN0OiBub25lO1xcblxcdGJvcmRlci1yYWRpdXM6IDJlbTtcXG5cXHRjdXJzb3I6IHBvaW50ZXI7XFxuXFx0bGluZS1oZWlnaHQ6IDIuNWVtO1xcblxcdG1hcmdpbjowO1xcbn1cXG5cXG4uSUJNQ2hhdC1tZXNzYWdlcyBidXR0b25bZGlzYWJsZWQ9XFxcInRydWVcXFwiXSB7XFxuXFx0Y3Vyc29yOiBkZWZhdWx0O1xcbiAgb3BhY2l0eTouNztcXG59XFxuXFxuLklCTUNoYXQtbWVzc2FnZXMgYnV0dG9uOjotbW96LWZvY3VzLWlubmVyIHtcXG5cXHRib3JkZXI6IDA7XFxuXFx0cGFkZGluZzogMDtcXG59XFxuXFxuLyogV2F0c29uTWVzc2FnZSBDb21wb25lbnQgKi9cXG5cXG4uSUJNQ2hhdC13YXRzb24tbWVzc2FnZS1jb250YWluZXIge1xcblxcdG1hcmdpbjogMWVtIDAgMWVtIDA7XFxufVxcblxcbi5JQk1DaGF0LXdhdHNvbi1tZXNzYWdlIHtcXG5cXHRtaW4taGVpZ2h0OiAxZW07XFxuXFx0bWFyZ2luOjFlbSAyZW0gMWVtIDA7XFxuXFx0cGFkZGluZzogMC4xZW0gMC4xZW0gMC4xZW0gMWVtO1xcbn1cXG5cXG4uSUJNQ2hhdC13YXRzb24tbGF5b3V0IHtcXG5cXHRtYXJnaW46IDAgMWVtIDAgMWVtO1xcbn1cXG5cXG4uSUJNQ2hhdC1kaXNhYmxlZC1sYXlvdXQge1xcblxcdG9wYWNpdHk6IDAuNztcXG59XFxuXFxuLyogVXNlck1lc3NhZ2UgQ29tcG9uZW50ICovXFxuXFxuLklCTUNoYXQtdXNlci1tZXNzYWdlLWNvbnRhaW5lciB7XFxuICBtYXJnaW46IDFlbSAwIDFlbSAyZW07XFxufVxcblxcbi5JQk1DaGF0LXVzZXItbWVzc2FnZSB7XFxuICBwYWRkaW5nOjFlbTtcXG5cXHRtYXJnaW46MCAxZW0gMCAwO1xcblxcdGJvcmRlci1yYWRpdXM6IDAuNWVtO1xcbn1cXG5cXG4vKiBJbnB1dCBDb21wb25lbnQgKi9cXG5cXG4uSUJNQ2hhdC1pbnB1dC1jb250YWluZXIge1xcblxcdGRpc3BsYXk6dGFibGUtcm93O1xcblxcdGhlaWdodDo3MnB4O1xcblxcdG1hcmdpbjogMDtcXG5cXHRwYWRkaW5nOiAwO1xcbn1cXG5cXG4uSUJNQ2hhdC1pbnB1dC1mb3JtIHtcXG5cXHRkaXNwbGF5OnRhYmxlLWNlbGw7XFxuXFx0cG9zaXRpb246cmVsYXRpdmU7XFxuXFx0aGVpZ2h0OiAyNHB4O1xcblxcdHBhZGRpbmc6MjRweCAyNHB4IDAgMjRweDtcXG59XFxuXFxuLklCTUNoYXQtY2hhdC10ZXh0Ym94IHtcXG4gIGJvcmRlcjogbm9uZTtcXG5cXHRib3JkZXItcmFkaXVzOiAwO1xcbiAgY29sb3I6IGluaGVyaXQ7XFxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXG4gIGZvbnQtc2l6ZToxZW07XFxuICBtYXJnaW46MDtcXG4gIHBhZGRpbmc6MCAwIDNweCAwO1xcbiAgd2lkdGg6MTAwJTtcXG59XFxuXFxuLklCTUNoYXQtY2hhdC10ZXh0Ym94W2Rpc2FibGVkPSdkaXNhYmxlZCddIHtcXG5cXHRvcGFjaXR5OjAuNTtcXG59XFxuXFxuLklCTUNoYXQtaW5wdXQtZm9ybSA6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIge1xcblxcdG9wYWNpdHk6MTtcXG59XFxuXFxuLklCTUNoYXQtY2hhdC10ZXh0Ym94OmZvY3VzIHtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBwYWRkaW5nOjAgMCAycHggMDtcXG59XFxuXFxuLyogdmFsaWRhdGlvbiBlcnJvciBtZXNzYWdlICovXFxuLklCTUNoYXQtdmFsaWRhdGlvbi1lcnJvciB7XFxuXFx0cGFkZGluZzogMC4yNWVtO1xcblxcdGZvbnQtc2l6ZTogMC45ZW07XFxufVxcblxcbi8qIFNwaW5uZXIgKi9cXG4uSUJNQ2hhdC1pbnB1dC1sb2FkaW5nIHtcXG5cXHR6LWluZGV4OiAyO1xcblxcdHBvc2l0aW9uOmFic29sdXRlO1xcblxcdHJpZ2h0OiAxNnB4O1xcblxcdHRvcDogMTVweDtcXG5cXHRoZWlnaHQ6MzJweDtcXG5cXHR3aWR0aDozMnB4O1xcbn1cXG5cXG4uSUJNQ2hhdC1pYm0tc3Bpbm5lci1zdGFydCB7XFxuXFx0b3BhY2l0eTowO1xcbn1cXG5cXG4uSUJNQ2hhdC1pYm0tc3Bpbm5lciB7XFxuXFx0ZmlsbDogdHJhbnNwYXJlbnQ7XFxuXFx0c3Ryb2tlLXdpZHRoOiAzO1xcblxcdHN0cm9rZS1saW5lY2FwOiBcXFwiYnV0dFxcXCI7XFxuXFx0c3Ryb2tlLWRhc2hhcnJheTogMTtcXG5cXHRzdHJva2UtZGFzaG9mZnNldDogMTtcXG59XFxuXFxuLyogaW5pdGlhbCByb3RhdGlvbiBhbmQgc3Ryb2tlIGFuaW1hdGlvbiBhbmQgaW5maW5pdGUgcm90YXRpb24qL1xcbi5JQk1DaGF0LWluaXQtc3BpbiB7XFxuXFx0YW5pbWF0aW9uOiBpbml0LXJvdGF0ZSAxNTBtcyBsaW5lYXIgZm9yd2FyZHMsIHJvdGF0ZS1sb29wIDIwMDBtcyBsaW5lYXIgaW5maW5pdGU7XFxufVxcblxcbi5JQk1DaGF0LWluaXQtc3BpbiBzdmcgY2lyY2xlIHtcXG5cXHRhbmltYXRpb246IGluaXQtc3Ryb2tlIDEwMDBtcyBsaW5lYXI7XFxufVxcblxcbi5JQk1DaGF0LWVuZC1zcGluIHN2ZyBjaXJjbGUge1xcblxcdGRpc3BsYXk6bm9uZTtcXG59XFxuXFxuLyogaW5pdGlhbCByb3RhdGlvbiAqL1xcbkBrZXlmcmFtZXMgaW5pdC1yb3RhdGUge1xcblxcdDAlIHtcXG5cXHRcXHR0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcXG5cXHR9XFxuXFx0MTAwJSB7XFxuXFx0XFx0dHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcXG5cXHR9XFxufVxcblxcbi8qIGxvb3Bpbmcgcm90YXRpb24gKi9cXG5Aa2V5ZnJhbWVzIHJvdGF0ZS1sb29wIHtcXG5cXHQwJSB7XFxuXFx0XFx0dHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XFxuXFx0fVxcblxcdDEwMCUge1xcblxcdFxcdHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XFxuXFx0fVxcbn1cXG5cXG4vKiBpbml0aWFsIHN0cm9rZSBhbmltYXRpb24gKi9cXG5Aa2V5ZnJhbWVzIGluaXQtc3Ryb2tlIHtcXG5cXHQwJSB7XFxuXFx0XFx0b3BhY2l0eTogMDtcXG5cXHR9XFxuXFx0MTAwJSB7XFxuXFx0XFx0b3BhY2l0eTogMTtcXG5cXHR9XFxufVxcblwiXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vcmF3LWxvYWRlciEuL3NyYy9zdHlsZXMuY3NzXG4gKiogbW9kdWxlIGlkID0gMlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLypcclxuXHRNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxyXG5cdEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcclxuKi9cclxudmFyIHN0eWxlc0luRG9tID0ge30sXHJcblx0bWVtb2l6ZSA9IGZ1bmN0aW9uKGZuKSB7XHJcblx0XHR2YXIgbWVtbztcclxuXHRcdHJldHVybiBmdW5jdGlvbiAoKSB7XHJcblx0XHRcdGlmICh0eXBlb2YgbWVtbyA9PT0gXCJ1bmRlZmluZWRcIikgbWVtbyA9IGZuLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XHJcblx0XHRcdHJldHVybiBtZW1vO1xyXG5cdFx0fTtcclxuXHR9LFxyXG5cdGlzT2xkSUUgPSBtZW1vaXplKGZ1bmN0aW9uKCkge1xyXG5cdFx0cmV0dXJuIC9tc2llIFs2LTldXFxiLy50ZXN0KHdpbmRvdy5uYXZpZ2F0b3IudXNlckFnZW50LnRvTG93ZXJDYXNlKCkpO1xyXG5cdH0pLFxyXG5cdGdldEhlYWRFbGVtZW50ID0gbWVtb2l6ZShmdW5jdGlvbiAoKSB7XHJcblx0XHRyZXR1cm4gZG9jdW1lbnQuaGVhZCB8fCBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcImhlYWRcIilbMF07XHJcblx0fSksXHJcblx0c2luZ2xldG9uRWxlbWVudCA9IG51bGwsXHJcblx0c2luZ2xldG9uQ291bnRlciA9IDAsXHJcblx0c3R5bGVFbGVtZW50c0luc2VydGVkQXRUb3AgPSBbXTtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24obGlzdCwgb3B0aW9ucykge1xyXG5cdGlmKHR5cGVvZiBERUJVRyAhPT0gXCJ1bmRlZmluZWRcIiAmJiBERUJVRykge1xyXG5cdFx0aWYodHlwZW9mIGRvY3VtZW50ICE9PSBcIm9iamVjdFwiKSB0aHJvdyBuZXcgRXJyb3IoXCJUaGUgc3R5bGUtbG9hZGVyIGNhbm5vdCBiZSB1c2VkIGluIGEgbm9uLWJyb3dzZXIgZW52aXJvbm1lbnRcIik7XHJcblx0fVxyXG5cclxuXHRvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcclxuXHQvLyBGb3JjZSBzaW5nbGUtdGFnIHNvbHV0aW9uIG9uIElFNi05LCB3aGljaCBoYXMgYSBoYXJkIGxpbWl0IG9uIHRoZSAjIG9mIDxzdHlsZT5cclxuXHQvLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXHJcblx0aWYgKHR5cGVvZiBvcHRpb25zLnNpbmdsZXRvbiA9PT0gXCJ1bmRlZmluZWRcIikgb3B0aW9ucy5zaW5nbGV0b24gPSBpc09sZElFKCk7XHJcblxyXG5cdC8vIEJ5IGRlZmF1bHQsIGFkZCA8c3R5bGU+IHRhZ3MgdG8gdGhlIGJvdHRvbSBvZiA8aGVhZD4uXHJcblx0aWYgKHR5cGVvZiBvcHRpb25zLmluc2VydEF0ID09PSBcInVuZGVmaW5lZFwiKSBvcHRpb25zLmluc2VydEF0ID0gXCJib3R0b21cIjtcclxuXHJcblx0dmFyIHN0eWxlcyA9IGxpc3RUb1N0eWxlcyhsaXN0KTtcclxuXHRhZGRTdHlsZXNUb0RvbShzdHlsZXMsIG9wdGlvbnMpO1xyXG5cclxuXHRyZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcclxuXHRcdHZhciBtYXlSZW1vdmUgPSBbXTtcclxuXHRcdGZvcih2YXIgaSA9IDA7IGkgPCBzdHlsZXMubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0dmFyIGl0ZW0gPSBzdHlsZXNbaV07XHJcblx0XHRcdHZhciBkb21TdHlsZSA9IHN0eWxlc0luRG9tW2l0ZW0uaWRdO1xyXG5cdFx0XHRkb21TdHlsZS5yZWZzLS07XHJcblx0XHRcdG1heVJlbW92ZS5wdXNoKGRvbVN0eWxlKTtcclxuXHRcdH1cclxuXHRcdGlmKG5ld0xpc3QpIHtcclxuXHRcdFx0dmFyIG5ld1N0eWxlcyA9IGxpc3RUb1N0eWxlcyhuZXdMaXN0KTtcclxuXHRcdFx0YWRkU3R5bGVzVG9Eb20obmV3U3R5bGVzLCBvcHRpb25zKTtcclxuXHRcdH1cclxuXHRcdGZvcih2YXIgaSA9IDA7IGkgPCBtYXlSZW1vdmUubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0dmFyIGRvbVN0eWxlID0gbWF5UmVtb3ZlW2ldO1xyXG5cdFx0XHRpZihkb21TdHlsZS5yZWZzID09PSAwKSB7XHJcblx0XHRcdFx0Zm9yKHZhciBqID0gMDsgaiA8IGRvbVN0eWxlLnBhcnRzLmxlbmd0aDsgaisrKVxyXG5cdFx0XHRcdFx0ZG9tU3R5bGUucGFydHNbal0oKTtcclxuXHRcdFx0XHRkZWxldGUgc3R5bGVzSW5Eb21bZG9tU3R5bGUuaWRdO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fTtcclxufVxyXG5cclxuZnVuY3Rpb24gYWRkU3R5bGVzVG9Eb20oc3R5bGVzLCBvcHRpb25zKSB7XHJcblx0Zm9yKHZhciBpID0gMDsgaSA8IHN0eWxlcy5sZW5ndGg7IGkrKykge1xyXG5cdFx0dmFyIGl0ZW0gPSBzdHlsZXNbaV07XHJcblx0XHR2YXIgZG9tU3R5bGUgPSBzdHlsZXNJbkRvbVtpdGVtLmlkXTtcclxuXHRcdGlmKGRvbVN0eWxlKSB7XHJcblx0XHRcdGRvbVN0eWxlLnJlZnMrKztcclxuXHRcdFx0Zm9yKHZhciBqID0gMDsgaiA8IGRvbVN0eWxlLnBhcnRzLmxlbmd0aDsgaisrKSB7XHJcblx0XHRcdFx0ZG9tU3R5bGUucGFydHNbal0oaXRlbS5wYXJ0c1tqXSk7XHJcblx0XHRcdH1cclxuXHRcdFx0Zm9yKDsgaiA8IGl0ZW0ucGFydHMubGVuZ3RoOyBqKyspIHtcclxuXHRcdFx0XHRkb21TdHlsZS5wYXJ0cy5wdXNoKGFkZFN0eWxlKGl0ZW0ucGFydHNbal0sIG9wdGlvbnMpKTtcclxuXHRcdFx0fVxyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0dmFyIHBhcnRzID0gW107XHJcblx0XHRcdGZvcih2YXIgaiA9IDA7IGogPCBpdGVtLnBhcnRzLmxlbmd0aDsgaisrKSB7XHJcblx0XHRcdFx0cGFydHMucHVzaChhZGRTdHlsZShpdGVtLnBhcnRzW2pdLCBvcHRpb25zKSk7XHJcblx0XHRcdH1cclxuXHRcdFx0c3R5bGVzSW5Eb21baXRlbS5pZF0gPSB7aWQ6IGl0ZW0uaWQsIHJlZnM6IDEsIHBhcnRzOiBwYXJ0c307XHJcblx0XHR9XHJcblx0fVxyXG59XHJcblxyXG5mdW5jdGlvbiBsaXN0VG9TdHlsZXMobGlzdCkge1xyXG5cdHZhciBzdHlsZXMgPSBbXTtcclxuXHR2YXIgbmV3U3R5bGVzID0ge307XHJcblx0Zm9yKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcclxuXHRcdHZhciBpdGVtID0gbGlzdFtpXTtcclxuXHRcdHZhciBpZCA9IGl0ZW1bMF07XHJcblx0XHR2YXIgY3NzID0gaXRlbVsxXTtcclxuXHRcdHZhciBtZWRpYSA9IGl0ZW1bMl07XHJcblx0XHR2YXIgc291cmNlTWFwID0gaXRlbVszXTtcclxuXHRcdHZhciBwYXJ0ID0ge2NzczogY3NzLCBtZWRpYTogbWVkaWEsIHNvdXJjZU1hcDogc291cmNlTWFwfTtcclxuXHRcdGlmKCFuZXdTdHlsZXNbaWRdKVxyXG5cdFx0XHRzdHlsZXMucHVzaChuZXdTdHlsZXNbaWRdID0ge2lkOiBpZCwgcGFydHM6IFtwYXJ0XX0pO1xyXG5cdFx0ZWxzZVxyXG5cdFx0XHRuZXdTdHlsZXNbaWRdLnBhcnRzLnB1c2gocGFydCk7XHJcblx0fVxyXG5cdHJldHVybiBzdHlsZXM7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zLCBzdHlsZUVsZW1lbnQpIHtcclxuXHR2YXIgaGVhZCA9IGdldEhlYWRFbGVtZW50KCk7XHJcblx0dmFyIGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wID0gc3R5bGVFbGVtZW50c0luc2VydGVkQXRUb3Bbc3R5bGVFbGVtZW50c0luc2VydGVkQXRUb3AubGVuZ3RoIC0gMV07XHJcblx0aWYgKG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwidG9wXCIpIHtcclxuXHRcdGlmKCFsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcCkge1xyXG5cdFx0XHRoZWFkLmluc2VydEJlZm9yZShzdHlsZUVsZW1lbnQsIGhlYWQuZmlyc3RDaGlsZCk7XHJcblx0XHR9IGVsc2UgaWYobGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AubmV4dFNpYmxpbmcpIHtcclxuXHRcdFx0aGVhZC5pbnNlcnRCZWZvcmUoc3R5bGVFbGVtZW50LCBsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcC5uZXh0U2libGluZyk7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRoZWFkLmFwcGVuZENoaWxkKHN0eWxlRWxlbWVudCk7XHJcblx0XHR9XHJcblx0XHRzdHlsZUVsZW1lbnRzSW5zZXJ0ZWRBdFRvcC5wdXNoKHN0eWxlRWxlbWVudCk7XHJcblx0fSBlbHNlIGlmIChvcHRpb25zLmluc2VydEF0ID09PSBcImJvdHRvbVwiKSB7XHJcblx0XHRoZWFkLmFwcGVuZENoaWxkKHN0eWxlRWxlbWVudCk7XHJcblx0fSBlbHNlIHtcclxuXHRcdHRocm93IG5ldyBFcnJvcihcIkludmFsaWQgdmFsdWUgZm9yIHBhcmFtZXRlciAnaW5zZXJ0QXQnLiBNdXN0IGJlICd0b3AnIG9yICdib3R0b20nLlwiKTtcclxuXHR9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcclxuXHRzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xyXG5cdHZhciBpZHggPSBzdHlsZUVsZW1lbnRzSW5zZXJ0ZWRBdFRvcC5pbmRleE9mKHN0eWxlRWxlbWVudCk7XHJcblx0aWYoaWR4ID49IDApIHtcclxuXHRcdHN0eWxlRWxlbWVudHNJbnNlcnRlZEF0VG9wLnNwbGljZShpZHgsIDEpO1xyXG5cdH1cclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlU3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcclxuXHR2YXIgc3R5bGVFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xyXG5cdHN0eWxlRWxlbWVudC50eXBlID0gXCJ0ZXh0L2Nzc1wiO1xyXG5cdGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zLCBzdHlsZUVsZW1lbnQpO1xyXG5cdHJldHVybiBzdHlsZUVsZW1lbnQ7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZUxpbmtFbGVtZW50KG9wdGlvbnMpIHtcclxuXHR2YXIgbGlua0VsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlua1wiKTtcclxuXHRsaW5rRWxlbWVudC5yZWwgPSBcInN0eWxlc2hlZXRcIjtcclxuXHRpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucywgbGlua0VsZW1lbnQpO1xyXG5cdHJldHVybiBsaW5rRWxlbWVudDtcclxufVxyXG5cclxuZnVuY3Rpb24gYWRkU3R5bGUob2JqLCBvcHRpb25zKSB7XHJcblx0dmFyIHN0eWxlRWxlbWVudCwgdXBkYXRlLCByZW1vdmU7XHJcblxyXG5cdGlmIChvcHRpb25zLnNpbmdsZXRvbikge1xyXG5cdFx0dmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKys7XHJcblx0XHRzdHlsZUVsZW1lbnQgPSBzaW5nbGV0b25FbGVtZW50IHx8IChzaW5nbGV0b25FbGVtZW50ID0gY3JlYXRlU3R5bGVFbGVtZW50KG9wdGlvbnMpKTtcclxuXHRcdHVwZGF0ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZUVsZW1lbnQsIHN0eWxlSW5kZXgsIGZhbHNlKTtcclxuXHRcdHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZUVsZW1lbnQsIHN0eWxlSW5kZXgsIHRydWUpO1xyXG5cdH0gZWxzZSBpZihvYmouc291cmNlTWFwICYmXHJcblx0XHR0eXBlb2YgVVJMID09PSBcImZ1bmN0aW9uXCIgJiZcclxuXHRcdHR5cGVvZiBVUkwuY3JlYXRlT2JqZWN0VVJMID09PSBcImZ1bmN0aW9uXCIgJiZcclxuXHRcdHR5cGVvZiBVUkwucmV2b2tlT2JqZWN0VVJMID09PSBcImZ1bmN0aW9uXCIgJiZcclxuXHRcdHR5cGVvZiBCbG9iID09PSBcImZ1bmN0aW9uXCIgJiZcclxuXHRcdHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcclxuXHRcdHN0eWxlRWxlbWVudCA9IGNyZWF0ZUxpbmtFbGVtZW50KG9wdGlvbnMpO1xyXG5cdFx0dXBkYXRlID0gdXBkYXRlTGluay5iaW5kKG51bGwsIHN0eWxlRWxlbWVudCk7XHJcblx0XHRyZW1vdmUgPSBmdW5jdGlvbigpIHtcclxuXHRcdFx0cmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XHJcblx0XHRcdGlmKHN0eWxlRWxlbWVudC5ocmVmKVxyXG5cdFx0XHRcdFVSTC5yZXZva2VPYmplY3RVUkwoc3R5bGVFbGVtZW50LmhyZWYpO1xyXG5cdFx0fTtcclxuXHR9IGVsc2Uge1xyXG5cdFx0c3R5bGVFbGVtZW50ID0gY3JlYXRlU3R5bGVFbGVtZW50KG9wdGlvbnMpO1xyXG5cdFx0dXBkYXRlID0gYXBwbHlUb1RhZy5iaW5kKG51bGwsIHN0eWxlRWxlbWVudCk7XHJcblx0XHRyZW1vdmUgPSBmdW5jdGlvbigpIHtcclxuXHRcdFx0cmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XHJcblx0XHR9O1xyXG5cdH1cclxuXHJcblx0dXBkYXRlKG9iaik7XHJcblxyXG5cdHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZShuZXdPYmopIHtcclxuXHRcdGlmKG5ld09iaikge1xyXG5cdFx0XHRpZihuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXApXHJcblx0XHRcdFx0cmV0dXJuO1xyXG5cdFx0XHR1cGRhdGUob2JqID0gbmV3T2JqKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHJlbW92ZSgpO1xyXG5cdFx0fVxyXG5cdH07XHJcbn1cclxuXHJcbnZhciByZXBsYWNlVGV4dCA9IChmdW5jdGlvbiAoKSB7XHJcblx0dmFyIHRleHRTdG9yZSA9IFtdO1xyXG5cclxuXHRyZXR1cm4gZnVuY3Rpb24gKGluZGV4LCByZXBsYWNlbWVudCkge1xyXG5cdFx0dGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50O1xyXG5cdFx0cmV0dXJuIHRleHRTdG9yZS5maWx0ZXIoQm9vbGVhbikuam9pbignXFxuJyk7XHJcblx0fTtcclxufSkoKTtcclxuXHJcbmZ1bmN0aW9uIGFwcGx5VG9TaW5nbGV0b25UYWcoc3R5bGVFbGVtZW50LCBpbmRleCwgcmVtb3ZlLCBvYmopIHtcclxuXHR2YXIgY3NzID0gcmVtb3ZlID8gXCJcIiA6IG9iai5jc3M7XHJcblxyXG5cdGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xyXG5cdFx0c3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KGluZGV4LCBjc3MpO1xyXG5cdH0gZWxzZSB7XHJcblx0XHR2YXIgY3NzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcyk7XHJcblx0XHR2YXIgY2hpbGROb2RlcyA9IHN0eWxlRWxlbWVudC5jaGlsZE5vZGVzO1xyXG5cdFx0aWYgKGNoaWxkTm9kZXNbaW5kZXhdKSBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoY2hpbGROb2Rlc1tpbmRleF0pO1xyXG5cdFx0aWYgKGNoaWxkTm9kZXMubGVuZ3RoKSB7XHJcblx0XHRcdHN0eWxlRWxlbWVudC5pbnNlcnRCZWZvcmUoY3NzTm9kZSwgY2hpbGROb2Rlc1tpbmRleF0pO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0c3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGNzc05vZGUpO1xyXG5cdFx0fVxyXG5cdH1cclxufVxyXG5cclxuZnVuY3Rpb24gYXBwbHlUb1RhZyhzdHlsZUVsZW1lbnQsIG9iaikge1xyXG5cdHZhciBjc3MgPSBvYmouY3NzO1xyXG5cdHZhciBtZWRpYSA9IG9iai5tZWRpYTtcclxuXHJcblx0aWYobWVkaWEpIHtcclxuXHRcdHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJtZWRpYVwiLCBtZWRpYSlcclxuXHR9XHJcblxyXG5cdGlmKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XHJcblx0XHRzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xyXG5cdH0gZWxzZSB7XHJcblx0XHR3aGlsZShzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xyXG5cdFx0XHRzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xyXG5cdFx0fVxyXG5cdFx0c3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xyXG5cdH1cclxufVxyXG5cclxuZnVuY3Rpb24gdXBkYXRlTGluayhsaW5rRWxlbWVudCwgb2JqKSB7XHJcblx0dmFyIGNzcyA9IG9iai5jc3M7XHJcblx0dmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XHJcblxyXG5cdGlmKHNvdXJjZU1hcCkge1xyXG5cdFx0Ly8gaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMjY2MDM4NzVcclxuXHRcdGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIgKyBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpICsgXCIgKi9cIjtcclxuXHR9XHJcblxyXG5cdHZhciBibG9iID0gbmV3IEJsb2IoW2Nzc10sIHsgdHlwZTogXCJ0ZXh0L2Nzc1wiIH0pO1xyXG5cclxuXHR2YXIgb2xkU3JjID0gbGlua0VsZW1lbnQuaHJlZjtcclxuXHJcblx0bGlua0VsZW1lbnQuaHJlZiA9IFVSTC5jcmVhdGVPYmplY3RVUkwoYmxvYik7XHJcblxyXG5cdGlmKG9sZFNyYylcclxuXHRcdFVSTC5yZXZva2VPYmplY3RVUkwob2xkU3JjKTtcclxufVxyXG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9zdHlsZS1sb2FkZXIvYWRkU3R5bGVzLmpzXG4gKiogbW9kdWxlIGlkID0gM1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLyoqXG4qIChDKSBDb3B5cmlnaHQgSUJNIENvcnAuIDIwMTYuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4qXG4qIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7IHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0XG4qIGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS4gWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4qXG4qIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuKlxuKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlXG4qIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzXG4qIG9yIGltcGxpZWQuIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmQgbGltaXRhdGlvbnMgdW5kZXJcbiogdGhlIExpY2Vuc2UuXG4qL1xuXG52YXIgbGF5b3V0cyA9IHJlcXVpcmUoJy4vbGF5b3V0cycpO1xudmFyIGV2ZW50cyA9IHJlcXVpcmUoJy4vZXZlbnRzJyk7XG52YXIgZXZlbnRIYW5kbGVycyA9IHJlcXVpcmUoJy4vZXZlbnRzL2hhbmRsZXJzJyk7XG52YXIgQm90U0RLID0gcmVxdWlyZSgnQHdhdHNvbi12aXJ0dWFsLWFnZW50L2NsaWVudC1zZGsvbGliL3dlYicpO1xudmFyIHN0YXRlID0gcmVxdWlyZSgnLi9zdGF0ZScpO1xudmFyIHByb2ZpbGUgPSByZXF1aXJlKCcuL3Byb2ZpbGUnKTtcbnZhciBwbGF5YmFjayA9IHJlcXVpcmUoJy4vcGxheWJhY2snKTtcbnZhciBQcm9taXNlID0gcmVxdWlyZSgnZXM2LXByb21pc2UnKS5Qcm9taXNlO1xudmFyIGFzc2lnbiA9IHJlcXVpcmUoJ2xvZGFzaC9hc3NpZ24nKTtcbnZhciBkZWZhdWx0U3R5bGVzID0gcmVxdWlyZSgnLi9zdHlsZXMnKTtcblxudmFyIGxheW91dEluaXQgPSB7fTtcbnZhciByZWdpc3RlcmVkTGF5b3V0cyA9IFtdO1xuXG5mdW5jdGlvbiByZWdpc3RlckV2ZW50cyh0cnlJdCwgcGxheWJhY2spIHtcblx0ZXZlbnRzLnN1YnNjcmliZSgnc3RhcnQnLCBldmVudEhhbmRsZXJzLnN0YXJ0KTtcblx0ZXZlbnRzLnN1YnNjcmliZSgncmVzaXplJywgZXZlbnRIYW5kbGVycy5yZXNpemUpO1xuXHRldmVudHMuc3Vic2NyaWJlKCdkaXNhYmxlLWlucHV0JywgZXZlbnRIYW5kbGVycy5pbnB1dC5kaXNhYmxlSW5wdXQpO1xuXHRldmVudHMuc3Vic2NyaWJlKCdlbmFibGUtbG9hZGluZycsIGV2ZW50SGFuZGxlcnMuaW5wdXQuZW5hYmxlTG9hZGluZ0lucHV0KTtcblx0ZXZlbnRzLnN1YnNjcmliZSgnZGlzYWJsZS1sb2FkaW5nJywgZXZlbnRIYW5kbGVycy5pbnB1dC5kaXNhYmxlTG9hZGluZ0lucHV0KTtcblx0ZXZlbnRzLnN1YnNjcmliZSgnc2Nyb2xsLXRvLWJvdHRvbScsIGV2ZW50SGFuZGxlcnMuc2Nyb2xsVG9Cb3R0b20pO1xuXHRldmVudHMuc3Vic2NyaWJlKCdyZWNlaXZlJywgZXZlbnRIYW5kbGVycy5yZWNlaXZlKTtcblx0aWYgKHRyeUl0ID09PSB0cnVlKSB7XG5cdFx0ZXZlbnRzLnN1YnNjcmliZSgndHJ5LWl0LWVycm9yJywgZXZlbnRIYW5kbGVycy5lcnJvci50cnlJdCk7XG5cdFx0ZXZlbnRzLnN1YnNjcmliZSgndHJ5LWl0LWxheW91dC1zdWJzY3JpcHRpb24nLCBldmVudEhhbmRsZXJzLnRyeUl0LmxheW91dEVycm9yKTtcblx0XHRldmVudHMuc3Vic2NyaWJlKCd0cnktaXQtYWN0aW9uLXN1YnNjcmlwdGlvbicsIGV2ZW50SGFuZGxlcnMudHJ5SXQuYWN0aW9uRXJyb3IpO1xuXHR9XG5cdGlmIChwbGF5YmFjayA9PT0gdHJ1ZSkgeyAvL1RPRE86IHJlbW92ZSBpZiBwbGF5YmFjayB3aGVuIERhc2hib2FyZCBjb2RlIGlzIHVwZGF0ZWRcblx0XHRldmVudHMuc3Vic2NyaWJlKCdzZW5kJywgZXZlbnRIYW5kbGVycy5zZW5kTW9jayk7XG5cdH0gZWxzZSB7XG5cdFx0ZXZlbnRzLnN1YnNjcmliZSgnc2VuZCcsIGV2ZW50SGFuZGxlcnMuc2VuZCk7XG5cdFx0ZXZlbnRzLnN1YnNjcmliZSgnc2VuZC1pbnB1dC1tZXNzYWdlJywgZXZlbnRIYW5kbGVycy5zZW5kSW5wdXRNZXNzYWdlKTtcblx0XHRldmVudHMuc3Vic2NyaWJlKCdlbmFibGUtaW5wdXQnLCBldmVudEhhbmRsZXJzLmlucHV0LmVuYWJsZUlucHV0KTtcblx0XHRldmVudHMuc3Vic2NyaWJlKCdmb2N1cy1pbnB1dCcsIGV2ZW50SGFuZGxlcnMuaW5wdXQuZm9jdXNJbnB1dCk7XG5cdFx0ZXZlbnRzLnN1YnNjcmliZSgnc2VuZC1tb2NrJywgZXZlbnRIYW5kbGVycy5zZW5kTW9jayk7XG5cdH1cbn1cblxuZnVuY3Rpb24gcmVnaXN0ZXJMYXlvdXRzKCkge1xuXHRyZWdpc3RlckxheW91dCgnc2hvdy1sb2NhdGlvbnMnLCBsYXlvdXRzLnNob3dMb2NhdGlvbnMuaW5pdCwgdHJ1ZSk7XG5cdHJlZ2lzdGVyTGF5b3V0KCdjaG9vc2UtbG9jYXRpb24tdHlwZScsIGxheW91dHMuY2hvb3NlTG9jYXRpb25UeXBlLmluaXQsIHRydWUpO1xuXHRyZWdpc3RlckxheW91dCgncmVxdWVzdC1nZW9sb2NhdGlvbi1sYXRsb25nJywgbGF5b3V0cy5yZXF1ZXN0R2VvbG9jYXRpb25MYXRsb25nLmluaXQsIHRydWUpO1xuXHRyZWdpc3RlckxheW91dCgncmVxdWVzdC1nZW9sb2NhdGlvbi16aXBjb2RlJywgbGF5b3V0cy5yZXF1ZXN0R2VvbG9jYXRpb25aaXBjb2RlLmluaXQsIHRydWUpO1xuXHRyZWdpc3RlckxheW91dCgnY2hvb3NlJywgbGF5b3V0cy5jaG9vc2UuaW5pdCwgdHJ1ZSk7XG5cdHJlZ2lzdGVyTGF5b3V0KCdmb3JtJywgbGF5b3V0cy5mb3JtLmluaXQsIHRydWUpO1xuXHRyZWdpc3RlckxheW91dCgnY2MtdmFsaWRhdG9yJywgbGF5b3V0cy5jcmVkaXRDYXJkLmluaXQsIHRydWUpO1xuXHRyZWdpc3RlckxheW91dCgnZXJyb3InLCBsYXlvdXRzLmVycm9yLmluaXQsIHRydWUpO1xuXHRmb3IgKHZhciBpID0gMDsgaSA8IHJlZ2lzdGVyZWRMYXlvdXRzLmxlbmd0aDsgaSsrKVxuXHRcdGxheW91dEluaXRbcmVnaXN0ZXJlZExheW91dHNbaV1dKCk7XG59XG5cbmZ1bmN0aW9uIGluaXQoY29uZmlnKSB7XG5cdHZhciByb290ID0gKHR5cGVvZiBjb25maWcuZWwgPT09ICdzdHJpbmcnKSA/IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGNvbmZpZy5lbCkgOiBjb25maWcuZWw7XG5cdHZhciBTREtjb25maWcgPSB7fTtcblx0U0RLY29uZmlnLmJhc2VVUkwgPSBjb25maWcuYmFzZVVSTCB8fCAnaHR0cHM6Ly9hcGkuaWJtLmNvbS92aXJ0dWFsYWdlbnQvcnVuL2FwaS92MS8nO1xuXHRpZiAoY29uZmlnLndpdGhDcmVkZW50aWFscylcblx0XHRTREtjb25maWcud2l0aENyZWRlbnRpYWxzID0gY29uZmlnLndpdGhDcmVkZW50aWFscztcblx0aWYgKGNvbmZpZy5YSUJNQ2xpZW50SUQpXG5cdFx0U0RLY29uZmlnLlhJQk1DbGllbnRJRCA9IGNvbmZpZy5YSUJNQ2xpZW50SUQ7XG5cdGlmIChjb25maWcuWElCTUNsaWVudFNlY3JldClcblx0XHRTREtjb25maWcuWElCTUNsaWVudFNlY3JldCA9IGNvbmZpZy5YSUJNQ2xpZW50U2VjcmV0O1xuXHRpZiAoY29uZmlnLnVzZXJJRClcblx0XHRTREtjb25maWcudXNlcklEID0gY29uZmlnLnVzZXJJRDtcblxuXHRyZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG5cdFx0dmFyIGN1cnJlbnQgPSBzdGF0ZS5nZXRTdGF0ZSgpO1xuXHRcdHZhciBkZWZhdWx0U3RhdGUgPSB7XG5cdFx0XHRhY3RpdmU6IHRydWUsXG5cdFx0XHRyb290OiByb290LFxuXHRcdFx0bWFwc1NlcnZlcjogcHJvY2Vzcy5lbnYuTUFQU19TRVJWRVIgfHwgJ2h0dHBzOi8vZHAxLWktc2VydmUtbWFwcy5teWJsdWVtaXgubmV0LycsXG5cdFx0XHRib3RJRDogY29uZmlnLmJvdElELFxuXHRcdFx0c3R5bGVzOiBhc3NpZ24oe30sIGRlZmF1bHRTdHlsZXMsIGNvbmZpZy5zdHlsZXMpLFxuXHRcdFx0YmFzZVVSTDogU0RLY29uZmlnLmJhc2VVUkwsXG5cdFx0XHRvcmlnaW5hbENvbnRlbnQ6IHJvb3QuaW5uZXJIVE1MLFxuXHRcdFx0aGFuZGxlSW5wdXQ6IHtcblx0XHRcdFx0ZGVmYXVsdDogdHJ1ZVxuXHRcdFx0fSxcblx0XHRcdHRyeUl0OiBjb25maWcudHJ5SXQgfHwgZmFsc2UsXG5cdFx0XHRwbGF5YmFjazogY29uZmlnLnBsYXliYWNrIHx8IGZhbHNlIC8vVE9ETzogcmVtb3ZlIHBsYXliYWNrIHdoZW4gRGFzaGJvYXJkIGNvZGUgaXMgdXBkYXRlZFxuXHRcdH07XG5cdFx0aWYgKGN1cnJlbnQuYWN0aXZlID09PSB0cnVlKSB7XG5cdFx0XHRyZXNvbHZlKCk7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdGlmIChyb290KSB7XG5cdFx0XHRpZiAoY29uZmlnLmVycm9ySGFuZGxlcilcblx0XHRcdFx0ZXZlbnRzLnN1YnNjcmliZSgnZXJyb3InLCBjb25maWcuZXJyb3JIYW5kbGVyLCBjb25maWcuZXJyb3JIYW5kbGVyQ29udGV4dCk7XG5cdFx0XHRlbHNlXG5cdFx0XHRcdGV2ZW50cy5zdWJzY3JpYmUoJ2Vycm9yJywgZXZlbnRIYW5kbGVycy5lcnJvci5kZWZhdWx0KTtcblx0XHRcdHJlZ2lzdGVyRXZlbnRzKGNvbmZpZy50cnlJdCwgY29uZmlnLnBsYXliYWNrKTtcblx0XHRcdHJlZ2lzdGVyTGF5b3V0cygpO1xuXHRcdFx0Ly9UT0RPOiByZW1vdmUgaWYgcGxheWJhY2sgd2hlbiBEYXNoYm9hcmQgY29kZSBpcyB1cGRhdGVkXG5cdFx0XHRpZiAoY29uZmlnLnBsYXliYWNrID09PSB0cnVlKSB7XG5cdFx0XHRcdGRlZmF1bHRTdGF0ZS5jaGF0SUQgPSAncGxheWJhY2snO1xuXHRcdFx0XHRldmVudHMucHVibGlzaCgnc3RhcnQnLCBkZWZhdWx0U3RhdGUpO1xuXHRcdFx0XHRyZXNvbHZlKCk7XG5cdFx0XHR9IGVsc2UgaWYgKGNvbmZpZy5ib3RJRCkge1xuXHRcdFx0XHRCb3RTREtcblx0XHRcdFx0XHQuY29uZmlndXJlKCBTREtjb25maWcgKVxuXHRcdFx0XHRcdC5zdGFydCggY29uZmlnLmJvdElEIClcblx0XHRcdFx0XHQudGhlbiggZnVuY3Rpb24ocmVzKSB7XG5cdFx0XHRcdFx0XHRkZWZhdWx0U3RhdGUuY2hhdElEID0gcmVzLmNoYXRJRDtcblx0XHRcdFx0XHRcdHdpbmRvdy5zZXNzaW9uU3RvcmFnZS5zZXRJdGVtKCdJQk1DaGF0Q2hhdElEJywgcmVzLmNoYXRJRCk7XG5cdFx0XHRcdFx0XHRldmVudHMucHVibGlzaCgnc3RhcnQnLCBkZWZhdWx0U3RhdGUpO1xuXHRcdFx0XHRcdFx0ZXZlbnRzLnB1Ymxpc2goJ3JlY2VpdmUnLCByZXMpO1xuXHRcdFx0XHRcdFx0cmVzb2x2ZSgpO1xuXHRcdFx0XHRcdH0pWydjYXRjaCddKCBmdW5jdGlvbihlcnIpIHtcblx0XHRcdFx0XHRcdGNvbnNvbGUuZXJyb3IoZXJyKTtcblx0XHRcdFx0XHRcdHJlamVjdChlcnIpO1xuXHRcdFx0XHRcdH0pO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Y29uc29sZS5lcnJvcignQm90SUQgaXMgcmVxdWlyZWQhJyk7XG5cdFx0XHRcdHJlamVjdCh7XG5cdFx0XHRcdFx0ZXJyb3I6ICdCb3RJRCBpcyByZXF1aXJlZCEnXG5cdFx0XHRcdH0pO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHRjb25zb2xlLmVycm9yKCdFbGVtZW50IGZvciBjaGF0IGRvZXMgbm90IGV4aXN0IScpO1xuXHRcdFx0cmVqZWN0KHtcblx0XHRcdFx0ZXJyb3I6ICdFbGVtZW50IGZvciBjaGF0IGRvZXMgbm90IGV4aXN0ISdcblx0XHRcdH0pO1xuXHRcdH1cblx0fSk7XG59XG5cbmZ1bmN0aW9uIHJlZ2lzdGVyTGF5b3V0KGxheW91dCwgaW5pdCwgZGVmYXVsdFNldHVwKSB7XG5cdGlmIChsYXlvdXQgJiYgaW5pdCAmJiB0eXBlb2YgaW5pdCA9PT0gJ2Z1bmN0aW9uJykge1xuXHRcdGlmIChyZWdpc3RlcmVkTGF5b3V0cy5pbmRleE9mKGxheW91dCkgPT09IC0xIHx8ICFkZWZhdWx0U2V0dXApIHtcblx0XHRcdHJlZ2lzdGVyZWRMYXlvdXRzLnB1c2gobGF5b3V0KTtcblx0XHRcdGxheW91dEluaXRbbGF5b3V0XSA9IGluaXQ7XG5cdFx0fVxuXHR9IGVsc2Uge1xuXHRcdGNvbnNvbGUuZXJyb3IoJ3JlZ2lzdGVyTGF5b3V0IHdhcyBjb25maWd1cmVkIGluY29ycmVjdGx5LicpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIHNlbmQobWVzc2FnZSkge1xuXHRpZiAobWVzc2FnZSkge1xuXHRcdHZhciBjdXJyZW50ID0gc3RhdGUuZ2V0U3RhdGUoKTtcblx0XHRpZiAoY3VycmVudC5hY3RpdmUpIHtcblx0XHRcdGV2ZW50cy5wdWJsaXNoKCdzZW5kJywge1xuXHRcdFx0XHR0ZXh0OiBtZXNzYWdlXG5cdFx0XHR9KTtcblx0XHR9XG5cdH0gZWxzZSB7XG5cdFx0Y29uc29sZS5lcnJvcignVGhlIG1lc3NhZ2Ugd2FzIGVtcHR5LicpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIHJlY2VpdmUobWVzc2FnZSkge1xuXHRpZiAobWVzc2FnZSkge1xuXHRcdHZhciBjdXJyZW50ID0gc3RhdGUuZ2V0U3RhdGUoKTtcblx0XHRpZiAoY3VycmVudC5hY3RpdmUpXG5cdFx0XHRldmVudHMucHVibGlzaCgncmVjZWl2ZScsIG1lc3NhZ2UpO1xuXHR9IGVsc2Uge1xuXHRcdGNvbnNvbGUuZXJyb3IoJ1RoZSBtZXNzYWdlIHdhcyBlbXB0eS4nKTtcblx0fVxufVxuXG5mdW5jdGlvbiBzZW5kTW9jayhtZXNzYWdlKSB7XG5cdGlmIChtZXNzYWdlKSB7XG5cdFx0dmFyIGN1cnJlbnQgPSBzdGF0ZS5nZXRTdGF0ZSgpO1xuXHRcdGlmIChjdXJyZW50LmFjdGl2ZSkge1xuXHRcdFx0ZXZlbnRzLnB1Ymxpc2goJ3NlbmQtbW9jaycsIHtcblx0XHRcdFx0dGV4dDogbWVzc2FnZVxuXHRcdFx0fSk7XG5cdFx0fVxuXHR9IGVsc2Uge1xuXHRcdGNvbnNvbGUuZXJyb3IoJ1RoZSBtZXNzYWdlIHdhcyBlbXB0eS4nKTtcblx0fVxufVxuXG5mdW5jdGlvbiBzZW5kU2lsZW50bHkobWVzc2FnZSkge1xuXHRpZiAobWVzc2FnZSkge1xuXHRcdHZhciBjdXJyZW50ID0gc3RhdGUuZ2V0U3RhdGUoKTtcblx0XHRpZiAoY3VycmVudC5hY3RpdmUpIHtcblx0XHRcdGV2ZW50cy5wdWJsaXNoKCdzZW5kJywge1xuXHRcdFx0XHR0ZXh0OiBtZXNzYWdlLFxuXHRcdFx0XHRzaWxlbnQ6IHRydWVcblx0XHRcdH0pO1xuXHRcdH1cblx0fSBlbHNlIHtcblx0XHRjb25zb2xlLmVycm9yKCdUaGUgbWVzc2FnZSB3YXMgZW1wdHkuJyk7XG5cdH1cbn1cblxuZnVuY3Rpb24gZW5hYmxlQ3VzdG9tSW5wdXRIYW5kbGVyKGNvbmZpZykge1xuXHRpZiAoY29uZmlnICYmIGNvbmZpZy5jYWxsYmFjayAmJiB0eXBlb2YgY29uZmlnLmNhbGxiYWNrID09PSAnZnVuY3Rpb24nKSB7XG5cdFx0c3RhdGUuc2V0U3RhdGUoe1xuXHRcdFx0aGFuZGxlSW5wdXQ6IHtcblx0XHRcdFx0ZGVmYXVsdDogZmFsc2UsXG5cdFx0XHRcdGNhbGxiYWNrOiBjb25maWcuY2FsbGJhY2ssXG5cdFx0XHRcdGNvbnRleHQ6IGNvbmZpZy5jb250ZXh0XG5cdFx0XHR9XG5cdFx0fSk7XG5cdH0gZWxzZSB7XG5cdFx0Y29uc29sZS5lcnJvcignSW52YWxpZCBjb25maWd1cmF0aW9uIG9mIGVuYWJsZUN1c3RvbUlucHV0SGFuZGxlcicpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIGRpc2FibGVDdXN0b21JbnB1dEhhbmRsZXIoKSB7XG5cdHN0YXRlLnNldFN0YXRlKHtcblx0XHRoYW5kbGVJbnB1dDoge1xuXHRcdFx0ZGVmYXVsdDogdHJ1ZVxuXHRcdH1cblx0fSk7XG59XG5cbmZ1bmN0aW9uIGZvY3VzSW5wdXQoKSB7XG5cdHZhciBjdXJyZW50ID0gc3RhdGUuZ2V0U3RhdGUoKTtcblx0aWYgKGN1cnJlbnQuYWN0aXZlKVxuXHRcdGV2ZW50cy5wdWJsaXNoKCdmb2N1cy1pbnB1dCcpO1xufVxuXG5mdW5jdGlvbiBkaXNhYmxlSW5wdXQoKSB7XG5cdHZhciBjdXJyZW50ID0gc3RhdGUuZ2V0U3RhdGUoKTtcblx0aWYgKGN1cnJlbnQuYWN0aXZlKVxuXHRcdGV2ZW50cy5wdWJsaXNoKCdkaXNhYmxlLWlucHV0Jyk7XG59XG5cbmZ1bmN0aW9uIGVuYWJsZUlucHV0KCkge1xuXHR2YXIgY3VycmVudCA9IHN0YXRlLmdldFN0YXRlKCk7XG5cdGlmIChjdXJyZW50LmFjdGl2ZSlcblx0XHRldmVudHMucHVibGlzaCgnZW5hYmxlLWlucHV0Jyk7XG59XG5cbmZ1bmN0aW9uIGRlYnVnKCkge1xuXHRzdGF0ZS5zZXRTdGF0ZSh7XG5cdFx0REVCVUc6IHRydWVcblx0fSk7XG59XG5cbmZ1bmN0aW9uIGRlc3Ryb3koKSB7XG5cdHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcblx0XHR2YXIgY3VycmVudCA9IHN0YXRlLmdldFN0YXRlKCk7XG5cdFx0aWYgKGN1cnJlbnQucm9vdCkge1xuXHRcdFx0ZXZlbnRzLnB1Ymxpc2goJ2Rlc3Ryb3knKTtcblx0XHRcdGV2ZW50cy5kZXN0cm95KCk7IC8vcmVtb3ZlIGFsbCBldmVudHNcblx0XHRcdGN1cnJlbnQucm9vdC5pbm5lckhUTUwgPSBjdXJyZW50Lm9yaWdpbmFsQ29udGVudDsgLy9yZXN0b3JlIG9yaWdpbmFsIGNvbnRlbnQgdG8gZGl2XG5cdFx0XHRzdGF0ZS5kZXN0cm95U3RhdGUoKTtcblx0XHRcdHJlc29sdmUoKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmVqZWN0KCdJQk1DaGF0IGhhcyBubyBpbnN0YW5jZSB0byBkZXN0cm95LicpO1xuXHRcdH1cblx0fSk7XG59XG5cbmZ1bmN0aW9uIHJlc3RhcnQoKSB7XG5cdHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcblx0XHR2YXIgY3VycmVudCA9IHN0YXRlLmdldFN0YXRlKCk7XG5cdFx0ZGVzdHJveSgpLnRoZW4oZnVuY3Rpb24oKSB7XG5cdFx0XHRpbml0KHsgZWw6IGN1cnJlbnQucm9vdCwgYm90SUQ6IGN1cnJlbnQuYm90SUQsIGJhc2VVUkw6IGN1cnJlbnQuYmFzZVVSTCB9KS50aGVuKGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRyZXNvbHZlKCk7XG5cdFx0XHR9KVsnY2F0Y2gnXShmdW5jdGlvbihlKSB7XG5cdFx0XHRcdHJlamVjdChlKTtcblx0XHRcdH0pO1xuXHRcdH0pWydjYXRjaCddKGZ1bmN0aW9uKGUpIHtcblx0XHRcdHJlamVjdChlKTtcblx0XHR9KTtcblx0fSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuXHRwcm9maWxlOiBwcm9maWxlLFxuXHRpbml0OiBpbml0LFxuXHRyZWdpc3RlckxheW91dDogcmVnaXN0ZXJMYXlvdXQsXG5cdHNlbmQ6IHNlbmQsXG5cdHJlY2VpdmU6IHJlY2VpdmUsXG5cdHNlbmRNb2NrOiBzZW5kTW9jayxcblx0c2VuZFNpbGVudGx5OiBzZW5kU2lsZW50bHksXG5cdGVuYWJsZUN1c3RvbUlucHV0SGFuZGxlcjogZW5hYmxlQ3VzdG9tSW5wdXRIYW5kbGVyLFxuXHRkaXNhYmxlQ3VzdG9tSW5wdXRIYW5kbGVyOiBkaXNhYmxlQ3VzdG9tSW5wdXRIYW5kbGVyLFxuXHRmb2N1c0lucHV0OiBmb2N1c0lucHV0LFxuXHRkaXNhYmxlSW5wdXQ6IGRpc2FibGVJbnB1dCxcblx0ZW5hYmxlSW5wdXQ6IGVuYWJsZUlucHV0LFxuXHRzdWJzY3JpYmU6IGV2ZW50cy5zdWJzY3JpYmUsXG5cdHB1Ymxpc2g6IGV2ZW50cy5wdWJsaXNoLFxuXHRkZWJ1ZzogZGVidWcsXG5cdGRlc3Ryb3k6IGRlc3Ryb3ksXG5cdHJlc3RhcnQ6IHJlc3RhcnQsXG5cdGN1cnJlbnRTdWJzY3JpcHRpb25zOiBldmVudHMuY3VycmVudFN1YnNjcmlwdGlvbnMsXG5cdGhhc1N1YnNjcmlwdGlvbjogZXZlbnRzLmhhc1N1YnNjcmlwdGlvbixcblx0Y29tcGxldGVFdmVudDogZXZlbnRzLmNvbXBsZXRlRXZlbnQsXG5cdHBsYXliYWNrOiBwbGF5YmFjayxcblx0c3RhdGU6IHN0YXRlXG59O1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9ib290c3RyYXAuanNcbiAqKiBtb2R1bGUgaWQgPSA0XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvKipcbiogKEMpIENvcHlyaWdodCBJQk0gQ29ycC4gMjAxNi4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbipcbiogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTsgeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHRcbiogaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbipcbiogaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4qXG4qIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmUgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2VcbiogaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Ncbiogb3IgaW1wbGllZC4gU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZCBsaW1pdGF0aW9ucyB1bmRlclxuKiB0aGUgTGljZW5zZS5cbiovXG5cbnZhciBzaG93TG9jYXRpb25zTGF5b3V0ID0gcmVxdWlyZSgnLi9zaG93LWxvY2F0aW9ucycpO1xudmFyIHJlcXVlc3RHZW9sb2NhdGlvbkxhdGxvbmdMYXlvdXQgPSByZXF1aXJlKCcuL3JlcXVlc3QtZ2VvbG9jYXRpb24tbGF0bG9uZycpO1xudmFyIHJlcXVlc3RHZW9sb2NhdGlvblppcGNvZGVMYXlvdXQgPSByZXF1aXJlKCcuL3JlcXVlc3QtZ2VvbG9jYXRpb24temlwY29kZScpO1xudmFyIGNob29zZUxvY2F0aW9uVHlwZUxheW91dCA9IHJlcXVpcmUoJy4vY2hvb3NlLWxvY2F0aW9uLXR5cGUnKTtcbnZhciBjaG9vc2VMYXlvdXQgPSByZXF1aXJlKCcuL2Nob29zZScpO1xudmFyIGZvcm1MYXlvdXQgPSByZXF1aXJlKCcuL2Zvcm0nKTtcbnZhciBjcmVkaXRDYXJkTGF5b3V0ID0gcmVxdWlyZSgnLi9jYy12YWxpZGF0b3InKTtcbnZhciBlcnJvckxheW91dCA9IHJlcXVpcmUoJy4vZXJyb3InKTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG5cdHNob3dMb2NhdGlvbnM6IHNob3dMb2NhdGlvbnNMYXlvdXQsXG5cdHJlcXVlc3RHZW9sb2NhdGlvbkxhdGxvbmc6IHJlcXVlc3RHZW9sb2NhdGlvbkxhdGxvbmdMYXlvdXQsXG5cdHJlcXVlc3RHZW9sb2NhdGlvblppcGNvZGU6IHJlcXVlc3RHZW9sb2NhdGlvblppcGNvZGVMYXlvdXQsXG5cdGNob29zZUxvY2F0aW9uVHlwZTogY2hvb3NlTG9jYXRpb25UeXBlTGF5b3V0LFxuXHRjaG9vc2U6IGNob29zZUxheW91dCxcblx0Y3JlZGl0Q2FyZDogY3JlZGl0Q2FyZExheW91dCxcblx0Zm9ybTogZm9ybUxheW91dCxcblx0ZXJyb3I6IGVycm9yTGF5b3V0XG59O1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9sYXlvdXRzL2luZGV4LmpzXG4gKiogbW9kdWxlIGlkID0gNVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLyoqXG4qIChDKSBDb3B5cmlnaHQgSUJNIENvcnAuIDIwMTYuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4qXG4qIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7IHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0XG4qIGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS4gWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4qXG4qIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuKlxuKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlXG4qIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzXG4qIG9yIGltcGxpZWQuIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmQgbGltaXRhdGlvbnMgdW5kZXJcbiogdGhlIExpY2Vuc2UuXG4qL1xuXG5yZXF1aXJlKCcuL3N0eWxlcy5jc3MnKTtcblxudmFyIGV2ZW50cyA9IHJlcXVpcmUoJy4uLy4uL2V2ZW50cycpO1xudmFyIHN1YnNjcmliZSA9IGV2ZW50cy5zdWJzY3JpYmU7XG52YXIgcHVibGlzaCA9IGV2ZW50cy5wdWJsaXNoO1xudmFyIHN0YXRlID0gcmVxdWlyZSgnLi4vLi4vc3RhdGUnKTtcbnZhciBnZXRTdGF0ZSA9IHN0YXRlLmdldFN0YXRlO1xudmFyIHNldFN0YXRlID0gc3RhdGUuc2V0U3RhdGU7XG52YXIgdXRpbHMgPSByZXF1aXJlKCcuLi8uLi91dGlscycpO1xuXG52YXIgZmlyc3QgPSB0cnVlO1xudmFyIGRpc3BsYXlMZW5ndGggPSAzO1xudmFyIGJyZWFrcG9pbnRXaWR0aHMgPSBbJzcyMCcsICc2ODAnLCAnNjQwJywgJzU4MCcsICc1MTInLCAnNDgwJywgJzQyMCcsICczNjAnLCAnMzIwJywgJzI4OCcsICcyNTYnXTtcbnZhciBkYXlzID0gWydTdW4nLCAnTW9uJywgJ1R1ZScsICdXZWQnLCAnVGh1JywgJ0ZyaScsICdTYXQnXTtcbnZhciBzaG93TG9jYXRpb25zID0ge307XG52YXIgbG9jYXRpb25JRHMgPSBbXTtcbnZhciBjaGF0V2lkdGggPSA3NDg7XG52YXIgY3VycmVudEJyZWFrcG9pbnRLZXkgPSAwO1xudmFyIHBpeGVsUmF0aW8gPSB3aW5kb3cuZGV2aWNlUGl4ZWxSYXRpbyB8fCAxO1xudmFyIG5zID0gJ0lCTUNoYXQtbWFwJztcblxudmFyIHRlbXBsYXRlcyA9IHtcblx0YmFzZTogcmVxdWlyZSgnLi90ZW1wbGF0ZXMvYmFzZS5odG1sJyksXG5cdGNyZWF0ZURvbUFycmF5OiByZXF1aXJlKCcuL3RlbXBsYXRlcy9jcmVhdGUtZG9tLWFycmF5Lmh0bWwnKSxcblx0YWRkTG9jYXRpb25zSXRlbTogcmVxdWlyZSgnLi90ZW1wbGF0ZXMvYWRkLWxvY2F0aW9ucy1pdGVtLmh0bWwnKSxcblx0YWRkTG9jYXRpb25JdGVtOiByZXF1aXJlKCcuL3RlbXBsYXRlcy9hZGQtbG9jYXRpb24taXRlbS5odG1sJyksXG5cdGhvdXJzQ2xvc2VkOiByZXF1aXJlKCcuL3RlbXBsYXRlcy9ob3Vycy1jbG9zZWQuaHRtbCcpLFxuXHRob3Vyc09wZW46IHJlcXVpcmUoJy4vdGVtcGxhdGVzL2hvdXJzLW9wZW4uaHRtbCcpLFxuXHRob3Vyc1RvZGF5T3BlbjogcmVxdWlyZSgnLi90ZW1wbGF0ZXMvaG91cnMtdG9kYXktb3Blbi5odG1sJyksXG5cdGhvdXJzVG9kYXlDbG9zZWQ6IHJlcXVpcmUoJy4vdGVtcGxhdGVzL2hvdXJzLXRvZGF5LWNsb3NlZC5odG1sJyksXG5cdGhvdXJzVGltZXpvbmU6IHJlcXVpcmUoJy4vdGVtcGxhdGVzL2hvdXJzLXRpbWV6b25lLmh0bWwnKVxufTtcblxudmFyIHN0cmluZ3MgPSB7XG5cdGxvY2F0aW9uczoge1xuXHRcdG5vbmU6ICdXZSBjb3VsZCBub3QgZmluZCBhbnkgbG9jYXRpb25zIGNsb3NlIHRvIHlvdS4nLFxuXHRcdHNpbmdsZTogJ0hlcmUgYXJlIHRoZSBkZXRhaWxzIGZvciB0aGUgJHtsb2NhdGlvbn0gbG9jYXRpb246Jyxcblx0XHRsaXN0OiAnSGVyZSBhcmUgdGhlIGxvY2F0aW9ucyBJIGZvdW5kIGNsb3NlIHRvIHlvdTonXG5cdH1cbn07XG5cbnZhciBzaG93TG9jYXRpb25zTGF5b3V0ID0ge1xuXHRpbml0OiBmdW5jdGlvbigpIHtcblx0XHRzdWJzY3JpYmUoJ2xheW91dDpzaG93LWxvY2F0aW9ucycsIGZ1bmN0aW9uKGRhdGEpIHtcblx0XHRcdHZhciBzaG93TG9jYXRpb24gPSBuZXcgU2hvd0xvY2F0aW9ucyhkYXRhKTtcblx0XHRcdGxvY2F0aW9uSURzLnB1c2goZGF0YS51dWlkKTtcblx0XHRcdHNob3dMb2NhdGlvbnNbZGF0YS51dWlkXSA9IHNob3dMb2NhdGlvbjtcblx0XHR9KTtcblx0XHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdXRpbHMuZGVib3VuY2UoZnVuY3Rpb24oKSB7XG5cdFx0XHRzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRzaXplTWFwKCk7XG5cdFx0XHR9LCA1MDApO1xuXHRcdH0sIDUwMCkpO1xuXHR9XG59O1xuXG52YXIgYWxwaGFNYXAgPSBbJ0EnLCAnQicsICdDJywgJ0QnLCAnRScsICdGJywgJ0cnXTtcblxuZnVuY3Rpb24gaW5pdGlhbFNpemUod2lkdGgpIHtcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBicmVha3BvaW50V2lkdGhzLmxlbmd0aDsgaSsrKSB7XG5cdFx0aWYgKChpID09PSBicmVha3BvaW50V2lkdGhzLmxlbmd0aCAtIDEpIHx8IChicmVha3BvaW50V2lkdGhzW2ldID49IHdpZHRoICYmIGJyZWFrcG9pbnRXaWR0aHNbaSArIDFdIDwgd2lkdGgpKSB7XG5cdFx0XHRjdXJyZW50QnJlYWtwb2ludEtleSA9IGk7XG5cdFx0XHRjaGF0V2lkdGggPSB3aWR0aDtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdH1cbn1cblxuZnVuY3Rpb24gc2FtZVNpemUoKSB7XG5cdHZhciB3aWR0aCA9IHNob3dMb2NhdGlvbnNbbG9jYXRpb25JRHNbMF1dLmdldFdpZHRoKCk7XG5cdHZhciBpc1NhbWVTaXplID0gKGJyZWFrcG9pbnRXaWR0aHNbY3VycmVudEJyZWFrcG9pbnRLZXldID49IHdpZHRoICYmIGJyZWFrcG9pbnRXaWR0aHNbY3VycmVudEJyZWFrcG9pbnRLZXkgKyAxXSA8IHdpZHRoKTtcblx0cmV0dXJuIGlzU2FtZVNpemU7XG59XG5cbmZ1bmN0aW9uIHNpemVNYXAoKSB7XG5cdGlmIChsb2NhdGlvbklEcy5sZW5ndGggPiAwICYmIHNob3dMb2NhdGlvbnNbbG9jYXRpb25JRHNbMF1dLmdldFdpZHRoKCkgJiYgIXNhbWVTaXplKCkpIHtcblx0XHR2YXIgd2lkdGggPSBzaG93TG9jYXRpb25zW2xvY2F0aW9uSURzWzBdXS5nZXRXaWR0aCgpO1xuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgYnJlYWtwb2ludFdpZHRocy5sZW5ndGg7IGkrKykge1xuXHRcdFx0aWYgKChpID09PSBicmVha3BvaW50V2lkdGhzLmxlbmd0aCAtIDEpIHx8IChicmVha3BvaW50V2lkdGhzW2ldID49IHdpZHRoICYmIGJyZWFrcG9pbnRXaWR0aHNbaSArIDFdIDwgd2lkdGgpKSB7XG5cdFx0XHRcdGN1cnJlbnRCcmVha3BvaW50S2V5ID0gaTtcblx0XHRcdFx0Y2hhdFdpZHRoID0gd2lkdGg7XG5cdFx0XHRcdGZvciAodmFyIGogPSAwOyBqIDwgbG9jYXRpb25JRHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0XHRpZiAoc2hvd0xvY2F0aW9uc1tsb2NhdGlvbklEc1tqXV0uZGF0YS5sZW5ndGggPiAwKVxuXHRcdFx0XHRcdFx0c2hvd0xvY2F0aW9uc1tsb2NhdGlvbklEc1tqXV0ucmVEcmF3TWFwKCk7XG5cdFx0XHRcdH1cblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxufVxuXG5mdW5jdGlvbiBjcmVhdGVQaG9uZUFycmF5KGVsLCBpdGVtcykge1xuXHRpZiAoaXRlbXMpIHtcblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGl0ZW1zLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgaXRlbUNoaWxkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cdFx0XHR2YXIgdGV4dCA9IHRlbXBsYXRlcy5jcmVhdGVEb21BcnJheTtcblx0XHRcdGl0ZW1DaGlsZC5jbGFzc05hbWUgPSBucyArICctY29udGFjdC1yb3cnO1xuXHRcdFx0aXRlbUNoaWxkLmlubmVySFRNTCA9IHV0aWxzLmNvbXBpbGUodGV4dCwge1xuXHRcdFx0XHRuczogbnNcblx0XHRcdH0pO1xuXHRcdFx0dmFyIHR5cGVFbCA9IGl0ZW1DaGlsZC5xdWVyeVNlbGVjdG9yKCcuJyArIG5zICsgJy1jb250YWN0LXR5cGUnKTtcblx0XHRcdHZhciBkYXRhRWwgPSBpdGVtQ2hpbGQucXVlcnlTZWxlY3RvcignLicgKyBucyArICctY29udGFjdC1kYXRhJyk7XG5cdFx0XHR0eXBlRWwudGV4dENvbnRlbnQgPSBpdGVtc1tpXS50eXBlO1xuXHRcdFx0ZGF0YUVsLnRleHRDb250ZW50ID0gaXRlbXNbaV0ubnVtYmVyO1xuXHRcdFx0ZWwuYXBwZW5kQ2hpbGQoaXRlbUNoaWxkKTtcblx0XHR9XG5cdH1cbn1cblxuZnVuY3Rpb24gZm9ybWF0QU1QTSh0aW1lKSB7XG5cdHRyeSB7XG5cdFx0dmFyIHNwbGl0ID0gdGltZS5zcGxpdCgnOicpO1xuXHRcdHZhciBob3VycyA9IHNwbGl0WzBdO1xuXHRcdHZhciBtaW51dGVzID0gc3BsaXRbMV07XG5cdFx0dmFyIGFtcG0gPSBob3VycyA+PSAxMiA/ICdwbScgOiAnYW0nO1xuXHRcdGhvdXJzID0gaG91cnMgJSAxMjtcblx0XHRob3VycyA9IGhvdXJzID8gaG91cnMgOiAxMjtcblx0XHRyZXR1cm4gaG91cnMgKyAnOicgKyBtaW51dGVzICsgJyAnICsgYW1wbTtcblx0fVxuXHRjYXRjaCAoZSkge1xuXHRcdHJldHVybiAnLSc7XG5cdH1cbn1cblxuZnVuY3Rpb24gcGFyc2VBZGRyZXNzKGFkZHJlc3MpIHtcblx0dmFyIGFyciA9IGFkZHJlc3Muc3BsaXQoJywnKTtcblx0dmFyIGZpcnN0ID0gYXJyLnNoaWZ0KCk7XG5cdHZhciB0ZXh0ID0gJyc7XG5cdGZvciAodmFyIGkgPSAwOyBpIDwgYXJyLmxlbmd0aDsgaSsrKSB7XG5cdFx0dGV4dCArPSBhcnJbaV07XG5cdFx0aWYgKGkgPCAoYXJyLmxlbmd0aCAtIDEpKVxuXHRcdFx0dGV4dCArPSAnLCc7XG5cdH1cblx0cmV0dXJuIHtcblx0XHRhZGRyZXNzMTogZmlyc3QsXG5cdFx0YWRkcmVzczI6IHRleHRcblx0fTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlSG91cnMoaG91cnNFbCwgbW9yZUhvdXJzRWwsIGhvdXJzLCB0aW1lem9uZSwgdGltZXpvbmVFbCkge1xuXHRpZiAoaG91cnMpIHtcblx0XHQvLyBob3Vyc1xuXHRcdHZhciB0b2RheSA9IG5ldyBEYXRlKCkuZ2V0RGF5KCk7XG5cdFx0dmFyIHRvZGF5c0hvdXJzID0gaG91cnNbdG9kYXldO1xuXHRcdHZhciBlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXHRcdGlmICh0b2RheXNIb3VycyAmJiB0b2RheXNIb3Vycy5pc09wZW4pIHtcblx0XHRcdGVsLmlubmVySFRNTCA9IHV0aWxzLmNvbXBpbGUodGVtcGxhdGVzLmhvdXJzVG9kYXlPcGVuLCB7XG5cdFx0XHRcdG5zOiBucyxcblx0XHRcdFx0b3BlbjogZm9ybWF0QU1QTSh0b2RheXNIb3Vycy5vcGVuKSxcblx0XHRcdFx0Y2xvc2U6IGZvcm1hdEFNUE0odG9kYXlzSG91cnMuY2xvc2UpXG5cdFx0XHR9KTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0ZWwuaW5uZXJIVE1MID0gdXRpbHMuY29tcGlsZSh0ZW1wbGF0ZXMuaG91cnNUb2RheUNsb3NlZCwge1xuXHRcdFx0XHRuczogbnNcblx0XHRcdH0pO1xuXHRcdH1cblx0XHRob3Vyc0VsLmFwcGVuZENoaWxkKGVsKTtcblx0XHQvLyB0aW1lem9uZVxuXHRcdGlmICh0aW1lem9uZSkge1xuXHRcdFx0dmFyIHR6Q2hpbGRFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXHRcdFx0dHpDaGlsZEVsLmlubmVySFRNTCA9IHV0aWxzLmNvbXBpbGUodGVtcGxhdGVzLmhvdXJzVGltZXpvbmUsIHtcblx0XHRcdFx0bnM6IG5zLFxuXHRcdFx0XHR0aW1lem9uZTogdGltZXpvbmVcblx0XHRcdH0pO1xuXHRcdFx0dGltZXpvbmVFbC5hcHBlbmRDaGlsZCh0ekNoaWxkRWwpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aW1lem9uZUVsLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodGltZXpvbmVFbCk7XG5cdFx0fVxuXHRcdC8vIG1vcmUgaG91cnNcblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGhvdXJzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgY2hpbGRFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXHRcdFx0Y2hpbGRFbC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgbnMgKyAnLWRheXMtaG91cnMnKTtcblx0XHRcdGlmIChob3Vyc1tpXSAmJiBob3Vyc1tpXS5pc09wZW4pIHtcblx0XHRcdFx0Y2hpbGRFbC5pbm5lckhUTUwgPSB1dGlscy5jb21waWxlKHRlbXBsYXRlcy5ob3Vyc09wZW4sIHtcblx0XHRcdFx0XHRuczogbnMsXG5cdFx0XHRcdFx0ZGF5OiBkYXlzW2ldLFxuXHRcdFx0XHRcdG9wZW46IGZvcm1hdEFNUE0oaG91cnNbaV0ub3BlbiksXG5cdFx0XHRcdFx0Y2xvc2U6IGZvcm1hdEFNUE0oaG91cnNbaV0uY2xvc2UpXG5cdFx0XHRcdH0pO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Y2hpbGRFbC5pbm5lckhUTUwgPSB1dGlscy5jb21waWxlKHRlbXBsYXRlcy5ob3Vyc0Nsb3NlZCwge1xuXHRcdFx0XHRcdG5zOiBucyxcblx0XHRcdFx0XHRkYXk6IGRheXNbaV1cblx0XHRcdFx0fSk7XG5cdFx0XHR9XG5cdFx0XHRtb3JlSG91cnNFbC5hcHBlbmRDaGlsZChjaGlsZEVsKTtcblx0XHR9XG5cdH1cbn1cblxuZnVuY3Rpb24gZGlzdGFuY2UoaXRlbSkge1xuXHRpZiAoIWl0ZW0uZGlzdGFuY2UpXG5cdFx0cmV0dXJuO1xuXHR2YXIgZGlzdGFuY2VMZW5ndGggPSAoaXRlbS5kaXN0YW5jZS50b0ZpeGVkKDEpID09PSAwLjApID8gMC4xIDogaXRlbS5kaXN0YW5jZS50b0ZpeGVkKDEpO1xuXHR2YXIgZGlzdGFuY2VMZW5ndGhNZWFzdXJlID0gKGl0ZW0uZGlzdGFuY2VNZWFzdXJlID09PSAnbWlsZXMnKSA/ICdtJyA6ICdrbSc7XG5cdHJldHVybiBkaXN0YW5jZUxlbmd0aCArIGRpc3RhbmNlTGVuZ3RoTWVhc3VyZTtcbn1cblxuZnVuY3Rpb24gU2hvd0xvY2F0aW9ucyhkYXRhKSB7XG5cdHRoaXMuaW5pdChkYXRhKTtcbn1cblxuU2hvd0xvY2F0aW9ucy5wcm90b3R5cGUuaW5pdCA9IGZ1bmN0aW9uKGRhdGEpIHtcblx0dGhpcy5kYXRhID0gKGRhdGEubWVzc2FnZS5kYXRhICE9PSB1bmRlZmluZWQgJiYgZGF0YS5tZXNzYWdlLmRhdGEubG9jYXRpb25fZGF0YSAhPT0gdW5kZWZpbmVkKSA/IGRhdGEubWVzc2FnZS5kYXRhLmxvY2F0aW9uX2RhdGEgOiBbXTtcblx0aWYgKHRoaXMuZGF0YS5sZW5ndGggPiAxKSB7XG5cdFx0c2V0U3RhdGUoe1xuXHRcdFx0bG9jYXRpb25fZGF0YTogdGhpcy5kYXRhXG5cdFx0fSk7XG5cdH1cblx0dGhpcy5ldmVudExpc3RlbmVycyA9IFtdO1xuXHR0aGlzLnBhcmVudEVsZW1lbnQgPSBkYXRhLmVsZW1lbnQ7XG5cdHRoaXMubGF5b3V0RWxlbWVudCA9IGRhdGEubGF5b3V0RWxlbWVudDtcblx0dGhpcy5tc2dFbGVtZW50ID0gZGF0YS5tc2dFbGVtZW50O1xuXHRzd2l0Y2ggKHRoaXMuZGF0YS5sZW5ndGgpIHtcblx0Y2FzZSAwOlxuXHRcdHRoaXMubXNnRWxlbWVudC50ZXh0Q29udGVudCA9IHN0cmluZ3MubG9jYXRpb25zLm5vbmU7XG5cdFx0YnJlYWs7XG5cdGNhc2UgMTpcblx0XHR0aGlzLm1zZ0VsZW1lbnQudGV4dENvbnRlbnQgPSB1dGlscy5jb21waWxlKHN0cmluZ3MubG9jYXRpb25zLnNpbmdsZSwgeyBsb2NhdGlvbjogdGhpcy5kYXRhWzBdLmFkZHJlc3MuYWRkcmVzcyB9KTtcblx0XHRicmVhaztcblx0ZGVmYXVsdDpcblx0XHR0aGlzLm1zZ0VsZW1lbnQudGV4dENvbnRlbnQgPSBzdHJpbmdzLmxvY2F0aW9ucy5saXN0O1xuXHR9XG5cblx0aWYgKHRoaXMuZGF0YS5sZW5ndGggPiAwKSB7XG5cdFx0dmFyIHRleHQgPSB0ZW1wbGF0ZXMuYmFzZTtcblx0XHR0aGlzLnV1aWQgPSBkYXRhLnV1aWQ7XG5cdFx0aWYgKGZpcnN0KSB7XG5cdFx0XHRpbml0aWFsU2l6ZSh0aGlzLmdldFdpZHRoKCkpO1xuXHRcdFx0Zmlyc3QgPSBmYWxzZTtcblx0XHR9XG5cdFx0dGhpcy5tYXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblx0XHR0aGlzLm1hcC5pbm5lckhUTUwgPSB1dGlscy5jb21waWxlKHRleHQsIHsgbnM6IG5zIH0pO1xuXHRcdHRoaXMubWFwRWxlbWVudCA9IHRoaXMubWFwLnF1ZXJ5U2VsZWN0b3IoJy4nICsgbnMgKyAnLWltZycpO1xuXHRcdHRoaXMuZGF0YUVsZW1lbnQgPSB0aGlzLm1hcC5xdWVyeVNlbGVjdG9yKCcuJyArIG5zICsgJy1kYXRhJyk7XG5cdFx0dGhpcy5tYXBFbGVtZW50LmFwcGVuZENoaWxkKHRoaXMuZHJhd0xvY2F0aW9ucygpKTtcblx0XHR0aGlzLmRhdGFFbGVtZW50LmFwcGVuZENoaWxkKHRoaXMuYWRkRGV0YWlscygpKTtcblx0XHR0aGlzLmxheW91dEVsZW1lbnQuYXBwZW5kQ2hpbGQodGhpcy5tYXApO1xuXHR9XG5cdHRoaXMuc3Vic2NyaWJlUmVjZWl2ZSA9IHN1YnNjcmliZSgncmVjZWl2ZScsIHRoaXMucmVtb3ZlQWxsRXZlbnRMaXN0ZW5lcnMsIHRoaXMpO1xufTtcblxuU2hvd0xvY2F0aW9ucy5wcm90b3R5cGUuZ2V0V2lkdGggPSBmdW5jdGlvbigpIHtcblx0dmFyIHdpZHRoID0gdGhpcy5wYXJlbnRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5JQk1DaGF0LXdhdHNvbi1sYXlvdXQ6bGFzdC1jaGlsZCcpLmNsaWVudFdpZHRoO1xuXHRyZXR1cm4gd2lkdGg7XG59O1xuXG5TaG93TG9jYXRpb25zLnByb3RvdHlwZS5yZURyYXdNYXAgPSBmdW5jdGlvbigpIHtcblx0dGhpcy5tYXBFbGVtZW50LmlubmVySFRNTCA9ICcnO1xuXHR0aGlzLm1hcEVsZW1lbnQuYXBwZW5kQ2hpbGQodGhpcy5kcmF3TG9jYXRpb25zKCkpO1xufTtcblxuU2hvd0xvY2F0aW9ucy5wcm90b3R5cGUuYWRkRGV0YWlscyA9IGZ1bmN0aW9uKCkge1xuXHRpZiAodGhpcy5kYXRhLmxlbmd0aCA+IDEpXG5cdFx0cmV0dXJuIHRoaXMuYWRkTG9jYXRpb25zKCk7XG5cdGVsc2Vcblx0XHRyZXR1cm4gdGhpcy5hZGRMb2NhdGlvbigpO1xufTtcblxuU2hvd0xvY2F0aW9ucy5wcm90b3R5cGUuZHJhd0xvY2F0aW9ucyA9IGZ1bmN0aW9uKCkge1xuXHR2YXIgY3VycmVudCA9IGdldFN0YXRlKCk7XG5cdHZhciBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcblx0dmFyIHdpZHRoID0gdGhpcy5nZXRXaWR0aCgpO1xuXHR2YXIgY29uZmlnID0ge1xuXHRcdHNpemU6IHdpZHRoICsgJ3gxODAnLFxuXHRcdHNjYWxlOiBwaXhlbFJhdGlvXG5cdH07XG5cdHRoaXMudXJpID0gY3VycmVudC5tYXBzU2VydmVyICsgJz8nO1xuXHR0aGlzLnVyaSArPSB1dGlscy5zZXJpYWxpemUoY29uZmlnKTtcblx0dGhpcy51cmkgKz0gJyZsb2NhdGlvbnM9Jztcblx0dmFyIGxvY2F0aW9ucyA9ICcnO1xuXHRmb3IgKHZhciBpID0gMDsgKGkgPCBkaXNwbGF5TGVuZ3RoICYmIGkgPCB0aGlzLmRhdGEubGVuZ3RoKTsgaSsrKSB7XG5cdFx0dmFyIGl0ZW0gPSB0aGlzLmRhdGFbaV07XG5cdFx0bG9jYXRpb25zICs9IChpID09PSAwICkgPyBpdGVtLmFkZHJlc3MubGF0ICsgJywnICsgaXRlbS5hZGRyZXNzLmxuZyA6ICcrJyArIGl0ZW0uYWRkcmVzcy5sYXQgKyAnLCcgKyBpdGVtLmFkZHJlc3MubG5nO1xuXHR9XG5cdHRoaXMudXJpICs9IGVuY29kZVVSSUNvbXBvbmVudChsb2NhdGlvbnMpO1xuXHR0aGlzLnVyaSArPSAnJmNvbG9yPScgKyBlbmNvZGVVUklDb21wb25lbnQoY3VycmVudC5zdHlsZXMuYWNjZW50QmFja2dyb3VuZC5yZXBsYWNlKCcjJywgJycpKTtcblx0aW1nLnNldEF0dHJpYnV0ZSgnd2lkdGgnLCAnMTAwJScpO1xuXHRpbWcuc2V0QXR0cmlidXRlKCdzcmMnLCB0aGlzLnVyaSk7XG5cdHJldHVybiBpbWc7XG59O1xuXG5TaG93TG9jYXRpb25zLnByb3RvdHlwZS5oYW5kbGVDbGljayA9IGZ1bmN0aW9uKCkge1xuXHR0aGlzLmNsYXNzTmFtZSA9IG5zICsgJy1sb2NhdGlvbi1hY3RpdmUnO1xuXHRwdWJsaXNoKCdyZWNlaXZlJywge1xuXHRcdG1lc3NhZ2U6IHtcblx0XHRcdHRleHQ6IFt1dGlscy5jb21waWxlKHN0cmluZ3MubG9jYXRpb25zLnNpbmdsZSwgeyBsb2NhdGlvbjogc2hvd0xvY2F0aW9uc1t0aGlzLmRhdGFzZXQudXVpZF0uZGF0YVt0aGlzLmRhdGFzZXQuaWQgLSAxXS5hZGRyZXNzLmFkZHJlc3MgfSksICdJcyB0aGVyZSBhbnl0aGluZyBlbHNlIEkgY2FuIGhlbHAgeW91IHdpdGg/J10sXG5cdFx0XHRsYXlvdXQ6IHtcblx0XHRcdFx0bmFtZTogJ3Nob3ctbG9jYXRpb25zJyxcblx0XHRcdFx0aW5kZXg6IDBcblx0XHRcdH0sXG5cdFx0XHRkYXRhOiB7XG5cdFx0XHRcdC8qIGpzaGludCBpZ25vcmU6c3RhcnQgKi9cblx0XHRcdFx0bG9jYXRpb25fZGF0YTogW3Nob3dMb2NhdGlvbnNbdGhpcy5kYXRhc2V0LnV1aWRdLmRhdGFbdGhpcy5kYXRhc2V0LmlkIC0gMV1dXG5cdFx0XHRcdC8qIGpzaGludCBpZ25vcmU6ZW5kICovXG5cdFx0XHR9XG5cdFx0fVxuXHR9KTtcbn07XG5cblNob3dMb2NhdGlvbnMucHJvdG90eXBlLnJlbW92ZUFsbEV2ZW50TGlzdGVuZXJzID0gZnVuY3Rpb24oKSB7XG5cdHZhciBsYXlvdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuJyArIHRoaXMudXVpZCArICcgLklCTUNoYXQtd2F0c29uLWxheW91dCcpO1xuXHRsYXlvdXQuY2xhc3NMaXN0LmFkZCgnSUJNQ2hhdC1kaXNhYmxlZC1sYXlvdXQnKTtcblx0dmFyIGlucHV0cyA9IGxheW91dC5xdWVyeVNlbGVjdG9yQWxsKCdpbnB1dCwgYnV0dG9uJyk7XG5cdGZvciAodmFyIGkgPSAwOyBpIDwgaW5wdXRzLmxlbmd0aDsgaSsrKVxuXHRcdGlucHV0c1tpXS5zZXRBdHRyaWJ1dGUoJ2Rpc2FibGVkJywgdHJ1ZSk7XG5cdGZvciAodmFyIHggPSAwOyB4IDwgdGhpcy5ldmVudExpc3RlbmVycy5sZW5ndGg7IHgrKylcblx0XHR0aGlzLmV2ZW50TGlzdGVuZXJzW3hdLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5oYW5kbGVDbGljayk7XG5cdGlmICh0aGlzLmhvdXJzRnVuY3Rpb24pXG5cdFx0dGhpcy5ob3Vyc0J1dHRvbi5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuaG91cnNGdW5jdGlvbik7XG5cdGlmICh0aGlzLmxvY2F0aW9uc0Z1bmN0aW9uKVxuXHRcdHRoaXMubG9jYXRpb25zQnV0dG9uLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5sb2NhdGlvbnNGdW5jdGlvbik7XG5cdHRoaXMuZXZlbnRMaXN0ZW5lcnMgPSBbXTtcblx0dGhpcy5zdWJzY3JpYmVSZWNlaXZlLnJlbW92ZSgpO1xufTtcblxuU2hvd0xvY2F0aW9ucy5wcm90b3R5cGUuYWRkTG9jYXRpb24gPSBmdW5jdGlvbigpIHtcblx0dmFyIGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXHR2YXIgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblx0dmFyIGxvY2F0aW9uRGF0YSA9IGdldFN0YXRlKCkubG9jYXRpb25fZGF0YTtcblx0dmFyIGl0ZW0gPSB0aGlzLmRhdGFbMF07XG5cdHZhciBjcmVhdGVEb20gPSBmdW5jdGlvbihlbCkge1xuXHRcdHZhciB0ZXh0ID0gdGVtcGxhdGVzLmFkZExvY2F0aW9uSXRlbTtcblx0XHRlbC5pbm5lckhUTUwgPSB1dGlscy5jb21waWxlKHRleHQsIHsgbnM6IG5zIH0pO1xuXHRcdHJldHVybiB7XG5cdFx0XHRsaW5rOiBlbC5xdWVyeVNlbGVjdG9yKCcuJyArIG5zICsgJy1sb2NhdGlvbnMtaXRlbS1kYXRhLWFkZHJlc3MtbGluaycpLFxuXHRcdFx0bGFiZWw6IGVsLnF1ZXJ5U2VsZWN0b3IoJy4nICsgbnMgKyAnLWxvY2F0aW9ucy1pdGVtLWRhdGEtdGl0bGUnKSxcblx0XHRcdGFkZHJlc3M6IGVsLnF1ZXJ5U2VsZWN0b3IoJy4nICsgbnMgKyAnLWxvY2F0aW9ucy1pdGVtLWRhdGEtYWRkcmVzcycpLFxuXHRcdFx0YWRkcmVzczE6IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKSxcblx0XHRcdGFkZHJlc3MyOiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyksXG5cdFx0XHRwaG9uZTogZWwucXVlcnlTZWxlY3RvcignLicgKyBucyArICctbG9jYXRpb25zLWl0ZW0tZGF0YS1waG9uZScpLFxuXHRcdFx0ZW1haWw6IGVsLnF1ZXJ5U2VsZWN0b3IoJy4nICsgbnMgKyAnLWxvY2F0aW9ucy1pdGVtLWRhdGEtZW1haWwnKSxcblx0XHRcdGhvdXJzOiBlbC5xdWVyeVNlbGVjdG9yKCcuJyArIG5zICsgJy1sb2NhdGlvbnMtaXRlbS1kYXRhLWhvdXJzJyksXG5cdFx0XHR0aW1lem9uZTogZWwucXVlcnlTZWxlY3RvcignLicgKyBucyArICctbG9jYXRpb25zLWl0ZW0tZGF0YS10aW1lem9uZScpLFxuXHRcdFx0cGFyZW50RWw6IGVsLnF1ZXJ5U2VsZWN0b3IoJy4nICsgbnMgKyAnLWxvY2F0aW9ucy1pdGVtLWRhdGEnKSxcblx0XHRcdGhvdXJzQnV0dG9uOiBlbC5xdWVyeVNlbGVjdG9yKCcuJyArIG5zICsgJy1sb2NhdGlvbnMtaXRlbS1kYXRhLWhvdXJzLWJ1dHRvbicpLFxuXHRcdFx0bW9yZUhvdXJzOiBlbC5xdWVyeVNlbGVjdG9yKCcuJyArIG5zICsgJy1sb2NhdGlvbnMtaXRlbS1kYXRhLW1vcmUtaG91cnMnKSxcblx0XHRcdGRpc3RhbmNlOiBlbC5xdWVyeVNlbGVjdG9yKCcuJyArIG5zICsgJy1sb2NhdGlvbnMtaXRlbS1kaXN0YW5jZScpLFxuXHRcdFx0YmFja0hvbGRlcjogZWwucXVlcnlTZWxlY3RvcignLicgKyBucyArICctbG9jYXRpb25zLWl0ZW0tZGF0YS1zZWN0aW9uJyksXG5cdFx0XHRiYWNrOiBlbC5xdWVyeVNlbGVjdG9yKCcuJyArIG5zICsgJy1sb2NhdGlvbnMtYWxsJylcblx0XHR9O1xuXHR9O1xuXG5cdHZhciBkb20gPSBjcmVhdGVEb20oZWwpO1xuXG5cdC8vIG5hbWVcblx0aWYgKGl0ZW0ubGFiZWwpXG5cdFx0ZG9tLmxhYmVsLnRleHRDb250ZW50ID0gaXRlbS5sYWJlbDtcblx0ZWxzZVxuXHRcdGRvbS5wYXJlbnRFbC5yZW1vdmVDaGlsZChkb20ubGFiZWwpO1xuXG5cdC8vIGFkZHJlc3Nlc1xuXHR2YXIgYWRkcmVzc2VzID0gcGFyc2VBZGRyZXNzKGl0ZW0uYWRkcmVzcy5hZGRyZXNzKTtcblx0ZG9tLmFkZHJlc3MxLnRleHRDb250ZW50ID0gYWRkcmVzc2VzLmFkZHJlc3MxO1xuXHRkb20uYWRkcmVzczIudGV4dENvbnRlbnQgPSBhZGRyZXNzZXMuYWRkcmVzczI7XG5cdGRvbS5hZGRyZXNzLmFwcGVuZENoaWxkKGRvbS5hZGRyZXNzMSk7XG5cdGRvbS5hZGRyZXNzLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2JyJykpO1xuXHRkb20uYWRkcmVzcy5hcHBlbmRDaGlsZChkb20uYWRkcmVzczIpO1xuXHRkb20ubGluay5zZXRBdHRyaWJ1dGUoJ2hyZWYnLCAnaHR0cHM6Ly9tYXBzLmdvb2dsZS5jb20vP3E9JyArIGVuY29kZVVSSUNvbXBvbmVudChpdGVtLmFkZHJlc3MuYWRkcmVzcykpO1xuXHRkb20ubGluay5zZXRBdHRyaWJ1dGUoJ3RhcmdldCcsICdfYmxhbmsnKTtcblx0ZG9tLmRpc3RhbmNlLnRleHRDb250ZW50ID0gZGlzdGFuY2UoaXRlbSkgfHwgJyc7XG5cblx0Ly8gZW1haWxcblx0aWYgKGl0ZW0uZW1haWwpIHtcblx0XHRjb25zdCBsaW5rRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG5cdFx0bGlua0VsLnNldEF0dHJpYnV0ZSgnaHJlZicsICdtYWlsdG86JyArIGl0ZW0uZW1haWwpO1xuXHRcdGxpbmtFbC5zZXRBdHRyaWJ1dGUoJ3RhcmdldCcsICdfYmxhbmsnKTtcblx0XHRsaW5rRWwudGV4dENvbnRlbnQgPSBpdGVtLmVtYWlsO1xuXHRcdGRvbS5lbWFpbC5hcHBlbmRDaGlsZChsaW5rRWwpO1xuXHR9IGVsc2Uge1xuXHRcdGRvbS5lbWFpbC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGRvbS5lbWFpbCk7XG5cdH1cblxuXHQvLyBwaG9uZXNcblx0aWYgKGl0ZW0ucGhvbmVzICYmIGl0ZW0ucGhvbmVzLmxlbmd0aCA+IDApXG5cdFx0Y3JlYXRlUGhvbmVBcnJheShkb20ucGhvbmUsIGl0ZW0ucGhvbmVzKTtcblx0ZWxzZVxuXHRcdGRvbS5waG9uZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGRvbS5waG9uZSk7XG5cblx0Ly8gaG91cnMvdGltZXpvbmVcblx0aWYgKGl0ZW0uZGF5cyAmJiBpdGVtLmRheXMubGVuZ3RoID4gMCkge1xuXHRcdGNyZWF0ZUhvdXJzKGRvbS5ob3VycywgZG9tLm1vcmVIb3VycywgaXRlbS5kYXlzLCBpdGVtLmFkZHJlc3MudGltZXpvbmUsIGRvbS50aW1lem9uZSk7XG5cdFx0dGhpcy5ob3Vyc0Z1bmN0aW9uID0gZnVuY3Rpb24oZSkge1xuXHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0ZG9tLnBhcmVudEVsLnJlbW92ZUNoaWxkKGRvbS5ob3Vyc0J1dHRvbik7XG5cdFx0XHRkb20ubW9yZUhvdXJzLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCBucyArICctbG9jYXRpb25zLWl0ZW0tZGF0YS1tb3JlLWhvdXJzJyk7XG5cdFx0XHRwdWJsaXNoKCdmb2N1cy1pbnB1dCcpO1xuXHRcdFx0cHVibGlzaCgnc2Nyb2xsLXRvLWJvdHRvbScpO1xuXHRcdH07XG5cdFx0dGhpcy5ob3Vyc0J1dHRvbiA9IGRvbS5ob3Vyc0J1dHRvbjtcblx0XHRkb20uaG91cnNCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmhvdXJzRnVuY3Rpb24pO1xuXHR9IGVsc2Uge1xuXHRcdGRvbS5ob3Vycy5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGRvbS5ob3Vycyk7XG5cdFx0ZG9tLmhvdXJzQnV0dG9uLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZG9tLmhvdXJzQnV0dG9uKTtcblx0fVxuXG5cdGlmIChsb2NhdGlvbkRhdGEgJiYgbG9jYXRpb25EYXRhLmxlbmd0aCA+IDEpIHtcblx0XHR0aGlzLmxvY2F0aW9uc0J1dHRvbiA9IGRvbS5iYWNrO1xuXHRcdHRoaXMubG9jYXRpb25zRnVuY3Rpb24gPSBmdW5jdGlvbihlKSB7XG5cdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRwdWJsaXNoKCdyZWNlaXZlJywge1xuXHRcdFx0XHRtZXNzYWdlOiB7XG5cdFx0XHRcdFx0dGV4dDogW3N0cmluZ3MubG9jYXRpb25zLmxpc3QsICdJcyB0aGVyZSBhbnl0aGluZyBlbHNlIEkgY2FuIGhlbHAgeW91IHdpdGg/J10sXG5cdFx0XHRcdFx0bGF5b3V0OiB7XG5cdFx0XHRcdFx0XHRuYW1lOiAnc2hvdy1sb2NhdGlvbnMnLFxuXHRcdFx0XHRcdFx0aW5kZXg6IDBcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdGRhdGE6IHtcblx0XHRcdFx0XHRcdC8qIGpzaGludCBpZ25vcmU6c3RhcnQgKi9cblx0XHRcdFx0XHRcdGxvY2F0aW9uX2RhdGE6IGxvY2F0aW9uRGF0YVxuXHRcdFx0XHRcdFx0LyoganNoaW50IGlnbm9yZTplbmQgKi9cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXHRcdH07XG5cdFx0ZG9tLmJhY2suYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmxvY2F0aW9uc0Z1bmN0aW9uKTtcblx0fSBlbHNlIHtcblx0XHRkb20uYmFja0hvbGRlci5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGRvbS5iYWNrSG9sZGVyKTtcblx0fVxuXHRjb250YWluZXIuYXBwZW5kQ2hpbGQoZWwpO1xuXHRyZXR1cm4gY29udGFpbmVyO1xufTtcblNob3dMb2NhdGlvbnMucHJvdG90eXBlLmFkZExvY2F0aW9ucyA9IGZ1bmN0aW9uKCkge1xuXHR2YXIgY3VycmVudCA9IGdldFN0YXRlKCk7XG5cdHZhciBjcmVhdGVEb20gPSBmdW5jdGlvbihlbCwgaSwgdXVpZCkge1xuXHRcdGVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5oYW5kbGVDbGljayk7XG5cdFx0ZWwuZGF0YXNldC51dWlkID0gdXVpZDtcblx0XHRlbC5kYXRhc2V0LmlkID0gaSArIDE7XG5cdFx0dmFyIHRleHQgPSB0ZW1wbGF0ZXMuYWRkTG9jYXRpb25zSXRlbTtcblx0XHRlbC5pbm5lckhUTUwgPSB1dGlscy5jb21waWxlKHRleHQsIHsgbnM6IG5zIH0pO1xuXHRcdHRoaXMuZXZlbnRMaXN0ZW5lcnMucHVzaChlbCk7XG5cdFx0cmV0dXJuIHtcblx0XHRcdGljb246IGVsLnF1ZXJ5U2VsZWN0b3IoJy4nICsgbnMgKyAnLWxvY2F0aW9ucy1pdGVtLWljb24nKSxcblx0XHRcdGxhYmVsOiBlbC5xdWVyeVNlbGVjdG9yKCcuJyArIG5zICsgJy1sb2NhdGlvbnMtaXRlbS1kYXRhLXRpdGxlJyksXG5cdFx0XHRhZGRyZXNzOiBlbC5xdWVyeVNlbGVjdG9yKCcuJyArIG5zICsgJy1sb2NhdGlvbnMtaXRlbS1kYXRhLWFkZHJlc3MnKSxcblx0XHRcdGFkZHJlc3MxOiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyksXG5cdFx0XHRhZGRyZXNzMjogZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpLFxuXHRcdFx0ZGlzdGFuY2U6IGVsLnF1ZXJ5U2VsZWN0b3IoJy4nICsgbnMgKyAnLWxvY2F0aW9ucy1pdGVtLWRpc3RhbmNlJylcblx0XHR9O1xuXHR9O1xuXG5cdHZhciBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuXHRmb3IgKHZhciBpID0gMDsgKGkgPCBkaXNwbGF5TGVuZ3RoICYmIGkgPCB0aGlzLmRhdGEubGVuZ3RoKTsgaSsrKSB7XG5cdFx0dmFyIGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cdFx0dmFyIGl0ZW0gPSB0aGlzLmRhdGFbaV07XG5cdFx0dmFyIGRvbSA9IGNyZWF0ZURvbS5jYWxsKHRoaXMsIGVsLCBpLCB0aGlzLnV1aWQpO1xuXHRcdHZhciBib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblx0XHRib3guc2V0QXR0cmlidXRlKCdzdHlsZScsICdmb250LXdlaWdodDpib2xkOyBjb2xvcjonICsgY3VycmVudC5zdHlsZXMuYWNjZW50VGV4dCArICc7IGJhY2tncm91bmQ6ICcgKyBjdXJyZW50LnN0eWxlcy5hY2NlbnRCYWNrZ3JvdW5kICsgJzsgbGluZS1oZWlnaHQ6IDI0cHg7IGhlaWdodDoyNHB4OyB3aWR0aDoyNHB4OyBtYXJnaW4tbGVmdDo4cHg7Jyk7XG5cdFx0Ym94LnRleHRDb250ZW50ID0gYWxwaGFNYXBbaV07XG5cdFx0ZG9tLmljb24uYXBwZW5kQ2hpbGQoYm94KTtcblx0XHRkb20ubGFiZWwudGV4dENvbnRlbnQgPSBpdGVtLmxhYmVsIHx8ICcnO1xuXHRcdHZhciBhZGRyZXNzZXMgPSBwYXJzZUFkZHJlc3MoaXRlbS5hZGRyZXNzLmFkZHJlc3MpO1xuXHRcdGRvbS5hZGRyZXNzMS50ZXh0Q29udGVudCA9IGFkZHJlc3Nlcy5hZGRyZXNzMTtcblx0XHRkb20uYWRkcmVzczIudGV4dENvbnRlbnQgPSBhZGRyZXNzZXMuYWRkcmVzczI7XG5cdFx0ZG9tLmFkZHJlc3MuYXBwZW5kQ2hpbGQoZG9tLmFkZHJlc3MxKTtcblx0XHRkb20uYWRkcmVzcy5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdicicpKTtcblx0XHRkb20uYWRkcmVzcy5hcHBlbmRDaGlsZChkb20uYWRkcmVzczIpO1xuXHRcdGRvbS5kaXN0YW5jZS50ZXh0Q29udGVudCA9IGRpc3RhbmNlKGl0ZW0pIHx8ICcnO1xuXHRcdGNvbnRhaW5lci5hcHBlbmRDaGlsZChlbCk7XG5cdH1cblx0cmV0dXJuIGNvbnRhaW5lcjtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gc2hvd0xvY2F0aW9uc0xheW91dDtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvbGF5b3V0cy9zaG93LWxvY2F0aW9ucy9pbmRleC5qc1xuICoqIG1vZHVsZSBpZCA9IDZcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gXCIuSUJNQ2hhdC1tYXAge1xcblxcdHBhZGRpbmc6IDAgMCAxZW0gMDtcXG59XFxuXFxuLklCTUNoYXQtbWFwLWltZyB7XFxuXFx0aGVpZ2h0OjE4MHB4O1xcbn1cXG5cXG4uSUJNQ2hhdC1tYXAtaW1nIGltZyB7XFxuXFx0aGVpZ2h0OjE4MHB4O1xcbn1cXG5cXG4uSUJNQ2hhdC1tYXAtbXVsdGlwbGUtbG9jYXRpb25zIHtcXG5cXHRjdXJzb3I6IGRlZmF1bHQ7XFxuXFx0ZGlzcGxheTogdGFibGU7XFxuXFx0d2lkdGg6IDEwMCU7XFxufVxcblxcbi5JQk1DaGF0LW1hcC1tdWx0aXBsZS1sb2NhdGlvbnMgLklCTUNoYXQtbWFwLWxvY2F0aW9ucy1yb3cge1xcblxcdGRpc3BsYXk6dGFibGUtcm93O1xcblxcdHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4uSUJNQ2hhdC1tYXAtbXVsdGlwbGUtbG9jYXRpb25zIC5JQk1DaGF0LW1hcC1sb2NhdGlvbnMtY2VsbCB7XFxuXFx0ZGlzcGxheTogdGFibGUtY2VsbDtcXG5cXHRvdmVyZmxvdzogaGlkZGVuO1xcblxcdHdvcmQtd3JhcDogYnJlYWstd29yZDtcXG59XFxuXFxuLklCTUNoYXQtbWFwLWxvY2F0aW9uLWFjdGl2ZSAuSUJNQ2hhdC1tYXAtbXVsdGlwbGUtbG9jYXRpb25zIHtcXG5cXHRvcGFjaXR5OiAxO1xcbn1cXG5cXG4uSUJNQ2hhdC1tYXAtbG9jYXRpb25zLWl0ZW0uSUJNQ2hhdC1tYXAtbXVsdGlwbGUtbG9jYXRpb25zIHtcXG5cXHRwYWRkaW5nOiAxZW0gMCAxZW0gMDtcXG5cXHRjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5JQk1DaGF0LWRpc2FibGVkLWxheW91dCAuSUJNQ2hhdC1tYXAtbG9jYXRpb25zLWl0ZW0uSUJNQ2hhdC1tYXAtbXVsdGlwbGUtbG9jYXRpb25zIHtcXG5cXHRjdXJzb3I6IGRlZmF1bHQ7XFxufVxcblxcbi5JQk1DaGF0LW1hcC1kYXRhLXNlY3Rpb24ge1xcblxcdG1hcmdpbi10b3A6MC41ZW07XFxufVxcblxcbi5JQk1DaGF0LW1hcC1sb2NhdGlvbnMtaXRlbSB7XFxuXFx0cGFkZGluZzogMWVtO1xcblxcdGJvcmRlci1ib3R0b206MXB4IHNvbGlkICM1MDUwNTA7XFxufVxcblxcblxcbi5JQk1DaGF0LW1hcC1sb2NhdGlvbnMtaXRlbS1pY29uIHtcXG5cXHR0ZXh0LWFsaWduOmNlbnRlcjtcXG5cXHR3aWR0aDogNDBweDtcXG59XFxuXFxuLklCTUNoYXQtbWFwLWxvY2F0aW9ucy1pdGVtLWRhdGEge1xcblxcdHBhZGRpbmc6MCA0cHggMCA0cHg7XFxuXFx0Zm9udC1zaXplOjAuOWVtO1xcbn1cXG4uSUJNQ2hhdC1tYXAtbG9jYXRpb25zLWl0ZW0tZGF0YS10aXRsZSB7XFxuXFx0Zm9udC13ZWlnaHQ6IGJvbGQ7XFxuXFx0cGFkZGluZy1ib3R0b206MC41ZW07XFxufVxcbi5JQk1DaGF0LW1hcC1sb2NhdGlvbnMtaXRlbS1kYXRhLWl0ZW1zIHtcXG5cXHRmb250LXNpemU6IDAuOWVtO1xcbn1cXG5cXG4uSUJNQ2hhdC1tYXAtbG9jYXRpb25zLWl0ZW0tZGF0YS1zZWN0aW9uIHtcXG5cXHRwYWRkaW5nLWJvdHRvbToxZW07XFxufVxcblxcbi5JQk1DaGF0LW1hcC1sb2NhdGlvbnMtaXRlbS1kYXRhLWVtYWlsIHtcXG5cXHRwYWRkaW5nLWJvdHRvbToxZW07XFxufVxcblxcbi5JQk1DaGF0LW1hcC1sb2NhdGlvbnMtaXRlbS1kYXRhLXBob25lIHtcXG5cXHRkaXNwbGF5OiB0YWJsZTtcXG5cXHRtYXgtd2lkdGg6NDAwcHg7XFxuXFx0d2lkdGg6IDEwMCU7XFxuXFx0cGFkZGluZy1ib3R0b206MWVtO1xcbn1cXG4uSUJNQ2hhdC1tYXAtY29udGFjdC1yb3cge1xcblxcdHBhZGRpbmctYm90dG9tOjFlbTtcXG59XFxuXFxuLklCTUNoYXQtbWFwLWhvdXJzLW9wZW4ge1xcblxcdHBhZGRpbmctYm90dG9tOjAuNWVtO1xcbn1cXG5cXG4uSUJNQ2hhdC1tYXAtY29udGFjdC10eXBlIHtcXG5cXHRmb250LXN0eWxlOml0YWxpYztcXG5cXHRmb250LXNpemU6MC45ZW07XFxufVxcbi5JQk1DaGF0LW1hcC1jb250YWN0LWRhdGEge1xcblxcbn1cXG5cXG5hLklCTUNoYXQtbWFwLWxvY2F0aW9ucy1pdGVtLWRhdGEtYWRkcmVzcy1saW5rLFxcbmEuSUJNQ2hhdC1tYXAtbG9jYXRpb25zLWl0ZW0tZGF0YS1hZGRyZXNzLWxpbms6aG92ZXIsXFxuYS5JQk1DaGF0LW1hcC1sb2NhdGlvbnMtaXRlbS1kYXRhLWFkZHJlc3MtbGluazp2aXNpdGVkLFxcbmEuSUJNQ2hhdC1tYXAtbG9jYXRpb25zLWl0ZW0tZGF0YS1hZGRyZXNzLWxpbms6YWN0aXZlLFxcbi5JQk1DaGF0LW1hcC1jb250YWN0LWRhdGEgYSxcXG4uSUJNQ2hhdC1tYXAtY29udGFjdC1kYXRhIGE6aG92ZXIsXFxuLklCTUNoYXQtbWFwLWNvbnRhY3QtZGF0YSBhOmFjdGl2ZSxcXG4uSUJNQ2hhdC1tYXAtY29udGFjdC1kYXRhIGE6dmlzaXRlZCB7XFxuXFx0Zm9udC13ZWlnaHQ6bm9ybWFsO1xcblxcdGZvbnQtc2l6ZTowLjllbTtcXG59XFxuXFxuLklCTUNoYXQtbWFwLWxvY2F0aW9ucy1pdGVtLWRpc3RhbmNlIHtcXG5cXHR3aWR0aDo2NHB4O1xcblxcdGZvbnQtc2l6ZTowLjllbTtcXG59XFxuXFxuYnV0dG9uLklCTUNoYXQtbWFwLWxvY2F0aW9ucy1pdGVtLWRhdGEtaG91cnMtYnV0dG9uIHtcXG5cXHRmb250LXNpemU6MC45ZW07XFxuXFx0cGFkZGluZzogMCAxZW0gMCAxZW07XFxuXFx0bGluZS1oZWlnaHQ6MS41ZW07XFxuXFx0bWFyZ2luLXRvcDoxZW07XFxufVxcblxcbmJ1dHRvbi5JQk1DaGF0LW1hcC1sb2NhdGlvbnMtYWxsIHtcXG5cXHRmb250LXNpemU6MC45ZW07XFxuXFx0cGFkZGluZzogMCAxZW0gMCAxZW07XFxuXFx0bGluZS1oZWlnaHQ6MS41ZW07XFxufVxcblxcbi5JQk1DaGF0LW1hcC1sb2NhdGlvbnMtaXRlbS1kYXRhLW1vcmUtaG91cnMge1xcblxcdGRpc3BsYXk6IHRhYmxlO1xcbn1cXG5cXG4uSUJNQ2hhdC1tYXAtbG9jYXRpb25zLWl0ZW0tZGF0YS1tb3JlLWhvdXJzLklCTUNoYXQtbWFwLWhpZGRlbiB7XFxuXFx0ZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLklCTUNoYXQtbWFwLWRheXMtaG91cnMge1xcblxcdGRpc3BsYXk6IHRhYmxlLXJvdztcXG59XFxuXFxuLklCTUNoYXQtbWFwLWRheXMtaG91cnMtZGF5LCAuSUJNQ2hhdC1tYXAtZGF5cy1ob3Vycy1ob3VycywgLklCTUNoYXQtbWFwLWRheXMtaG91cnMtY2xvc2VkIHtcXG5cXHRkaXNwbGF5OiB0YWJsZS1jZWxsO1xcblxcdG1hcmdpbjogMDtcXG5cXHRwYWRkaW5nOjAuNzVlbSAxZW0gMCAwO1xcblxcdG92ZXJmbG93OiBoaWRkZW47XFxuXFx0d29yZC13cmFwOiBicmVhay13b3JkO1xcbn1cXG5cXG4uSUJNQ2hhdC1tYXAtaG91cnMtdGltZXpvbmUge1xcblxcdGZvbnQtc3R5bGU6IGl0YWxpYztcXG5cXHRmb250LXNpemU6IDAuOGVtO1xcblxcdHBhZGRpbmctdG9wOiAwLjVlbTtcXG59XFxuXFxuLklCTUNoYXQtbWFwLWRheXMtaG91cnMgPiBkaXY6bGFzdC1jaGlsZCB7XFxuXFx0cGFkZGluZzogMC43NWVtIDAgMCAwICFpbXBvcnRhbnQ7XFxufVxcblwiXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vcmF3LWxvYWRlciEuL3NyYy9sYXlvdXRzL3Nob3ctbG9jYXRpb25zL3N0eWxlcy5jc3NcbiAqKiBtb2R1bGUgaWQgPSA4XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvKipcbiogKEMpIENvcHlyaWdodCBJQk0gQ29ycC4gMjAxNi4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbipcbiogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTsgeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHRcbiogaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbipcbiogaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4qXG4qIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmUgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2VcbiogaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Ncbiogb3IgaW1wbGllZC4gU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZCBsaW1pdGF0aW9ucyB1bmRlclxuKiB0aGUgTGljZW5zZS5cbiovXG5cbnZhciBzdGF0ZSA9IHJlcXVpcmUoJy4uL3N0YXRlJyk7XG5cbnZhciBldmVudHMgPSBbXTtcblxuZnVuY3Rpb24gY29tcGxldGVFdmVudChyZXNwb25zZSkge1xuXHRzd2l0Y2ggKHJlc3BvbnNlKSB7XG5cdGNhc2UgdHJ1ZTpcblx0XHRwdWJsaXNoKCdzZW5kJywge1xuXHRcdFx0bWVzc2FnZTogJ3N1Y2Nlc3MnLFxuXHRcdFx0c2lsZW50OiB0cnVlXG5cdFx0fSk7XG5cdFx0YnJlYWs7XG5cdGNhc2UgZmFsc2U6XG5cdFx0cHVibGlzaCgnc2VuZCcsIHtcblx0XHRcdG1lc3NhZ2U6ICdmYWlsdXJlJyxcblx0XHRcdHNpbGVudDogdHJ1ZVxuXHRcdH0pO1xuXHRcdGJyZWFrO1xuXHRkZWZhdWx0OlxuXHRcdHB1Ymxpc2goJ3NlbmQnLCB7XG5cdFx0XHRtZXNzYWdlOiAnY2FuY2VsJyxcblx0XHRcdHNpbGVudDogdHJ1ZVxuXHRcdH0pO1xuXHR9XG59XG5cbmZ1bmN0aW9uIGRlc3Ryb3koKSB7XG5cdGV2ZW50cyA9IFtdO1xufVxuXG5mdW5jdGlvbiB1bnN1YnNjcmliZShldmVudCwgaGFuZGxlciwgY29udGV4dCkge1xuXHRpZiAodHlwZW9mIGNvbnRleHQgPT09IHVuZGVmaW5lZClcblx0XHRjb250ZXh0ID0gaGFuZGxlcjtcbn1cblxuZnVuY3Rpb24gY3VycmVudFN1YnNjcmlwdGlvbnMoKSB7XG5cdHJldHVybiBldmVudHMuc2xpY2UoMCk7XG59XG5cbmZ1bmN0aW9uIGhhc1N1YnNjcmlwdGlvbihhY3Rpb24pIHtcblx0dmFyIHN1YnNjcmlwdGlvbnMgPSBjdXJyZW50U3Vic2NyaXB0aW9ucygpO1xuXHRmb3IgKHZhciBpID0gMDsgaSA8IHN1YnNjcmlwdGlvbnMubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgc3Vic2NyaXB0aW9uID0gc3Vic2NyaXB0aW9uc1tpXTtcblx0XHRpZiAoc3Vic2NyaXB0aW9uICYmIHN1YnNjcmlwdGlvbi5ldmVudCA9PT0gYWN0aW9uKVxuXHRcdFx0cmV0dXJuIHRydWU7XG5cdH1cblx0cmV0dXJuIGZhbHNlO1xufVxuXG5mdW5jdGlvbiBzdWJzY3JpYmUoZXZlbnQsIGhhbmRsZXIsIGNvbnRleHQpIHtcblx0aWYgKHR5cGVvZiBjb250ZXh0ID09PSB1bmRlZmluZWQpXG5cdFx0Y29udGV4dCA9IGhhbmRsZXI7XG5cdHZhciBpbmRleCA9IGV2ZW50cy5wdXNoKHsgZXZlbnQ6IGV2ZW50LCBoYW5kbGVyOiBoYW5kbGVyLmJpbmQoY29udGV4dCkgfSkgLSAxO1xuXHRyZXR1cm4ge1xuXHRcdHJlbW92ZTogZnVuY3Rpb24oKSB7XG5cdFx0XHRldmVudHMuc3BsaWNlKGluZGV4LCAxKTtcblx0XHR9XG5cdH07XG59XG5cbmZ1bmN0aW9uIHB1Ymxpc2goZXZlbnQsIGRhdGEsIGNiKSB7XG5cdHZhciBjdXJyZW50ID0gc3RhdGUuZ2V0U3RhdGUoKTtcblx0dmFyIHdhc1N1YnNjcmlwdGlvbiA9IGZhbHNlO1xuXHRmb3IgKHZhciBpID0gMDsgaSA8IGV2ZW50cy5sZW5ndGg7IGkrKykge1xuXHRcdGlmIChldmVudHNbaV0gJiYgZXZlbnRzW2ldLmV2ZW50ICYmIGV2ZW50c1tpXS5ldmVudCA9PT0gZXZlbnQpIHtcblx0XHRcdGlmIChjdXJyZW50LkRFQlVHKSB7XG5cdFx0XHRcdHdhc1N1YnNjcmlwdGlvbiA9IHRydWU7XG5cdFx0XHRcdGNvbnNvbGUubG9nKCdTdWJzY3JpcHRpb24gdG8gJyArIGV2ZW50ICsgJyB3YXMgY2FsbGVkOiAnLCBkYXRhKTtcblx0XHRcdH1cblx0XHRcdGV2ZW50c1tpXS5oYW5kbGVyLmNhbGwodW5kZWZpbmVkLCBkYXRhLCBjYik7XG5cdFx0fVxuXHR9XG5cdGlmIChjdXJyZW50LkRFQlVHICYmIGV2ZW50LmluZGV4T2YoJ2xheW91dCcpID09IC0xICYmICF3YXNTdWJzY3JpcHRpb24pXG5cdFx0Y29uc29sZS53YXJuKCdOb3RoaW5nIGlzIHN1YnNjcmliZWQgdG8gJyArIGV2ZW50KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG5cdGRlc3Ryb3k6IGRlc3Ryb3ksXG5cdHVuc3Vic2NyaWJlOiB1bnN1YnNjcmliZSxcblx0Y3VycmVudFN1YnNjcmlwdGlvbnM6IGN1cnJlbnRTdWJzY3JpcHRpb25zLFxuXHRoYXNTdWJzY3JpcHRpb246IGhhc1N1YnNjcmlwdGlvbixcblx0c3Vic2NyaWJlOiBzdWJzY3JpYmUsXG5cdHB1Ymxpc2g6IHB1Ymxpc2gsXG5cdGNvbXBsZXRlRXZlbnQ6IGNvbXBsZXRlRXZlbnRcbn07XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2V2ZW50cy9pbmRleC5qc1xuICoqIG1vZHVsZSBpZCA9IDlcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8qKlxuKiAoQykgQ29weXJpZ2h0IElCTSBDb3JwLiAyMDE2LiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuKlxuKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpOyB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdFxuKiBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuKlxuKiBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbipcbiogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZSBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZVxuKiBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzc1xuKiBvciBpbXBsaWVkLiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kIGxpbWl0YXRpb25zIHVuZGVyXG4qIHRoZSBMaWNlbnNlLlxuKi9cblxudmFyIHN0YXRlcyA9IFtdO1xudmFyIHN0YXRlID0ge307XG52YXIgYXNzaWduID0gcmVxdWlyZSgnbG9kYXNoL2Fzc2lnbicpO1xuXG5mdW5jdGlvbiBnZXQoKSB7XG5cdHJldHVybiBzdGF0ZTtcbn1cbmZ1bmN0aW9uIGRlc3Ryb3koKSB7XG5cdHN0YXRlID0ge307XG5cdHNldCh7fSk7XG59XG5cbmZ1bmN0aW9uIHNldCh1cGRhdGVkKSB7XG5cdHN0YXRlID0gYXNzaWduKHt9LCBzdGF0ZSwgdXBkYXRlZCk7XG5cdGlmIChzdGF0ZS5ERUJVRykge1xuXHRcdHN0YXRlcy5wdXNoKHN0YXRlKTtcblx0XHRjb25zb2xlLmxvZygnU1RBVEUgSElTVE9SWTogJywgc3RhdGVzKTtcblx0XHRjb25zb2xlLmxvZygnTkVXIFNUQVRFOiAnLCBzdGF0ZSk7XG5cdH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPXtcblx0Z2V0OiBnZXQsXG5cdHNldDogc2V0LFxuXHRkZXN0cm95OiBkZXN0cm95LFxuXHRnZXRTdGF0ZTogZ2V0LFxuXHRzZXRTdGF0ZTogc2V0LFxuXHRkZXN0cm95U3RhdGU6IGRlc3Ryb3lcbn07XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL3N0YXRlL2luZGV4LmpzXG4gKiogbW9kdWxlIGlkID0gMTBcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInZhciBhc3NpZ25WYWx1ZSA9IHJlcXVpcmUoJy4vX2Fzc2lnblZhbHVlJyksXG4gICAgY29weU9iamVjdCA9IHJlcXVpcmUoJy4vX2NvcHlPYmplY3QnKSxcbiAgICBjcmVhdGVBc3NpZ25lciA9IHJlcXVpcmUoJy4vX2NyZWF0ZUFzc2lnbmVyJyksXG4gICAgaXNBcnJheUxpa2UgPSByZXF1aXJlKCcuL2lzQXJyYXlMaWtlJyksXG4gICAgaXNQcm90b3R5cGUgPSByZXF1aXJlKCcuL19pc1Byb3RvdHlwZScpLFxuICAgIGtleXMgPSByZXF1aXJlKCcuL2tleXMnKTtcblxuLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqIFVzZWQgdG8gY2hlY2sgb2JqZWN0cyBmb3Igb3duIHByb3BlcnRpZXMuICovXG52YXIgaGFzT3duUHJvcGVydHkgPSBvYmplY3RQcm90by5oYXNPd25Qcm9wZXJ0eTtcblxuLyoqIEJ1aWx0LWluIHZhbHVlIHJlZmVyZW5jZXMuICovXG52YXIgcHJvcGVydHlJc0VudW1lcmFibGUgPSBvYmplY3RQcm90by5wcm9wZXJ0eUlzRW51bWVyYWJsZTtcblxuLyoqIERldGVjdCBpZiBwcm9wZXJ0aWVzIHNoYWRvd2luZyB0aG9zZSBvbiBgT2JqZWN0LnByb3RvdHlwZWAgYXJlIG5vbi1lbnVtZXJhYmxlLiAqL1xudmFyIG5vbkVudW1TaGFkb3dzID0gIXByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwoeyAndmFsdWVPZic6IDEgfSwgJ3ZhbHVlT2YnKTtcblxuLyoqXG4gKiBBc3NpZ25zIG93biBlbnVtZXJhYmxlIHN0cmluZyBrZXllZCBwcm9wZXJ0aWVzIG9mIHNvdXJjZSBvYmplY3RzIHRvIHRoZVxuICogZGVzdGluYXRpb24gb2JqZWN0LiBTb3VyY2Ugb2JqZWN0cyBhcmUgYXBwbGllZCBmcm9tIGxlZnQgdG8gcmlnaHQuXG4gKiBTdWJzZXF1ZW50IHNvdXJjZXMgb3ZlcndyaXRlIHByb3BlcnR5IGFzc2lnbm1lbnRzIG9mIHByZXZpb3VzIHNvdXJjZXMuXG4gKlxuICogKipOb3RlOioqIFRoaXMgbWV0aG9kIG11dGF0ZXMgYG9iamVjdGAgYW5kIGlzIGxvb3NlbHkgYmFzZWQgb25cbiAqIFtgT2JqZWN0LmFzc2lnbmBdKGh0dHBzOi8vbWRuLmlvL09iamVjdC9hc3NpZ24pLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMC4xMC4wXG4gKiBAY2F0ZWdvcnkgT2JqZWN0XG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBkZXN0aW5hdGlvbiBvYmplY3QuXG4gKiBAcGFyYW0gey4uLk9iamVjdH0gW3NvdXJjZXNdIFRoZSBzb3VyY2Ugb2JqZWN0cy5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgYG9iamVjdGAuXG4gKiBAc2VlIF8uYXNzaWduSW5cbiAqIEBleGFtcGxlXG4gKlxuICogZnVuY3Rpb24gRm9vKCkge1xuICogICB0aGlzLmEgPSAxO1xuICogfVxuICpcbiAqIGZ1bmN0aW9uIEJhcigpIHtcbiAqICAgdGhpcy5jID0gMztcbiAqIH1cbiAqXG4gKiBGb28ucHJvdG90eXBlLmIgPSAyO1xuICogQmFyLnByb3RvdHlwZS5kID0gNDtcbiAqXG4gKiBfLmFzc2lnbih7ICdhJzogMCB9LCBuZXcgRm9vLCBuZXcgQmFyKTtcbiAqIC8vID0+IHsgJ2EnOiAxLCAnYyc6IDMgfVxuICovXG52YXIgYXNzaWduID0gY3JlYXRlQXNzaWduZXIoZnVuY3Rpb24ob2JqZWN0LCBzb3VyY2UpIHtcbiAgaWYgKG5vbkVudW1TaGFkb3dzIHx8IGlzUHJvdG90eXBlKHNvdXJjZSkgfHwgaXNBcnJheUxpa2Uoc291cmNlKSkge1xuICAgIGNvcHlPYmplY3Qoc291cmNlLCBrZXlzKHNvdXJjZSksIG9iamVjdCk7XG4gICAgcmV0dXJuO1xuICB9XG4gIGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHtcbiAgICBpZiAoaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHtcbiAgICAgIGFzc2lnblZhbHVlKG9iamVjdCwga2V5LCBzb3VyY2Vba2V5XSk7XG4gICAgfVxuICB9XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBhc3NpZ247XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9sb2Rhc2gvYXNzaWduLmpzXG4gKiogbW9kdWxlIGlkID0gMTFcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInZhciBlcSA9IHJlcXVpcmUoJy4vZXEnKTtcblxuLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqIFVzZWQgdG8gY2hlY2sgb2JqZWN0cyBmb3Igb3duIHByb3BlcnRpZXMuICovXG52YXIgaGFzT3duUHJvcGVydHkgPSBvYmplY3RQcm90by5oYXNPd25Qcm9wZXJ0eTtcblxuLyoqXG4gKiBBc3NpZ25zIGB2YWx1ZWAgdG8gYGtleWAgb2YgYG9iamVjdGAgaWYgdGhlIGV4aXN0aW5nIHZhbHVlIGlzIG5vdCBlcXVpdmFsZW50XG4gKiB1c2luZyBbYFNhbWVWYWx1ZVplcm9gXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1zYW1ldmFsdWV6ZXJvKVxuICogZm9yIGVxdWFsaXR5IGNvbXBhcmlzb25zLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gbW9kaWZ5LlxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSBwcm9wZXJ0eSB0byBhc3NpZ24uXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBhc3NpZ24uXG4gKi9cbmZ1bmN0aW9uIGFzc2lnblZhbHVlKG9iamVjdCwga2V5LCB2YWx1ZSkge1xuICB2YXIgb2JqVmFsdWUgPSBvYmplY3Rba2V5XTtcbiAgaWYgKCEoaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIGtleSkgJiYgZXEob2JqVmFsdWUsIHZhbHVlKSkgfHxcbiAgICAgICh2YWx1ZSA9PT0gdW5kZWZpbmVkICYmICEoa2V5IGluIG9iamVjdCkpKSB7XG4gICAgb2JqZWN0W2tleV0gPSB2YWx1ZTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGFzc2lnblZhbHVlO1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vbG9kYXNoL19hc3NpZ25WYWx1ZS5qc1xuICoqIG1vZHVsZSBpZCA9IDEyXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvKipcbiAqIFBlcmZvcm1zIGFcbiAqIFtgU2FtZVZhbHVlWmVyb2BdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLXNhbWV2YWx1ZXplcm8pXG4gKiBjb21wYXJpc29uIGJldHdlZW4gdHdvIHZhbHVlcyB0byBkZXRlcm1pbmUgaWYgdGhleSBhcmUgZXF1aXZhbGVudC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY29tcGFyZS5cbiAqIEBwYXJhbSB7Kn0gb3RoZXIgVGhlIG90aGVyIHZhbHVlIHRvIGNvbXBhcmUuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIHZhbHVlcyBhcmUgZXF1aXZhbGVudCwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiB2YXIgb2JqZWN0ID0geyAnYSc6IDEgfTtcbiAqIHZhciBvdGhlciA9IHsgJ2EnOiAxIH07XG4gKlxuICogXy5lcShvYmplY3QsIG9iamVjdCk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5lcShvYmplY3QsIG90aGVyKTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5lcSgnYScsICdhJyk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5lcSgnYScsIE9iamVjdCgnYScpKTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5lcShOYU4sIE5hTik7XG4gKiAvLyA9PiB0cnVlXG4gKi9cbmZ1bmN0aW9uIGVxKHZhbHVlLCBvdGhlcikge1xuICByZXR1cm4gdmFsdWUgPT09IG90aGVyIHx8ICh2YWx1ZSAhPT0gdmFsdWUgJiYgb3RoZXIgIT09IG90aGVyKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBlcTtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2xvZGFzaC9lcS5qc1xuICoqIG1vZHVsZSBpZCA9IDEzXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJ2YXIgYXNzaWduVmFsdWUgPSByZXF1aXJlKCcuL19hc3NpZ25WYWx1ZScpO1xuXG4vKipcbiAqIENvcGllcyBwcm9wZXJ0aWVzIG9mIGBzb3VyY2VgIHRvIGBvYmplY3RgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gc291cmNlIFRoZSBvYmplY3QgdG8gY29weSBwcm9wZXJ0aWVzIGZyb20uXG4gKiBAcGFyYW0ge0FycmF5fSBwcm9wcyBUaGUgcHJvcGVydHkgaWRlbnRpZmllcnMgdG8gY29weS5cbiAqIEBwYXJhbSB7T2JqZWN0fSBbb2JqZWN0PXt9XSBUaGUgb2JqZWN0IHRvIGNvcHkgcHJvcGVydGllcyB0by5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IFtjdXN0b21pemVyXSBUaGUgZnVuY3Rpb24gdG8gY3VzdG9taXplIGNvcGllZCB2YWx1ZXMuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIGBvYmplY3RgLlxuICovXG5mdW5jdGlvbiBjb3B5T2JqZWN0KHNvdXJjZSwgcHJvcHMsIG9iamVjdCwgY3VzdG9taXplcikge1xuICBvYmplY3QgfHwgKG9iamVjdCA9IHt9KTtcblxuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGxlbmd0aCA9IHByb3BzLmxlbmd0aDtcblxuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIHZhciBrZXkgPSBwcm9wc1tpbmRleF07XG5cbiAgICB2YXIgbmV3VmFsdWUgPSBjdXN0b21pemVyXG4gICAgICA/IGN1c3RvbWl6ZXIob2JqZWN0W2tleV0sIHNvdXJjZVtrZXldLCBrZXksIG9iamVjdCwgc291cmNlKVxuICAgICAgOiB1bmRlZmluZWQ7XG5cbiAgICBhc3NpZ25WYWx1ZShvYmplY3QsIGtleSwgbmV3VmFsdWUgPT09IHVuZGVmaW5lZCA/IHNvdXJjZVtrZXldIDogbmV3VmFsdWUpO1xuICB9XG4gIHJldHVybiBvYmplY3Q7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY29weU9iamVjdDtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2xvZGFzaC9fY29weU9iamVjdC5qc1xuICoqIG1vZHVsZSBpZCA9IDE0XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJ2YXIgYmFzZVJlc3QgPSByZXF1aXJlKCcuL19iYXNlUmVzdCcpLFxuICAgIGlzSXRlcmF0ZWVDYWxsID0gcmVxdWlyZSgnLi9faXNJdGVyYXRlZUNhbGwnKTtcblxuLyoqXG4gKiBDcmVhdGVzIGEgZnVuY3Rpb24gbGlrZSBgXy5hc3NpZ25gLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBhc3NpZ25lciBUaGUgZnVuY3Rpb24gdG8gYXNzaWduIHZhbHVlcy5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gUmV0dXJucyB0aGUgbmV3IGFzc2lnbmVyIGZ1bmN0aW9uLlxuICovXG5mdW5jdGlvbiBjcmVhdGVBc3NpZ25lcihhc3NpZ25lcikge1xuICByZXR1cm4gYmFzZVJlc3QoZnVuY3Rpb24ob2JqZWN0LCBzb3VyY2VzKSB7XG4gICAgdmFyIGluZGV4ID0gLTEsXG4gICAgICAgIGxlbmd0aCA9IHNvdXJjZXMubGVuZ3RoLFxuICAgICAgICBjdXN0b21pemVyID0gbGVuZ3RoID4gMSA/IHNvdXJjZXNbbGVuZ3RoIC0gMV0gOiB1bmRlZmluZWQsXG4gICAgICAgIGd1YXJkID0gbGVuZ3RoID4gMiA/IHNvdXJjZXNbMl0gOiB1bmRlZmluZWQ7XG5cbiAgICBjdXN0b21pemVyID0gKGFzc2lnbmVyLmxlbmd0aCA+IDMgJiYgdHlwZW9mIGN1c3RvbWl6ZXIgPT0gJ2Z1bmN0aW9uJylcbiAgICAgID8gKGxlbmd0aC0tLCBjdXN0b21pemVyKVxuICAgICAgOiB1bmRlZmluZWQ7XG5cbiAgICBpZiAoZ3VhcmQgJiYgaXNJdGVyYXRlZUNhbGwoc291cmNlc1swXSwgc291cmNlc1sxXSwgZ3VhcmQpKSB7XG4gICAgICBjdXN0b21pemVyID0gbGVuZ3RoIDwgMyA/IHVuZGVmaW5lZCA6IGN1c3RvbWl6ZXI7XG4gICAgICBsZW5ndGggPSAxO1xuICAgIH1cbiAgICBvYmplY3QgPSBPYmplY3Qob2JqZWN0KTtcbiAgICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgICAgdmFyIHNvdXJjZSA9IHNvdXJjZXNbaW5kZXhdO1xuICAgICAgaWYgKHNvdXJjZSkge1xuICAgICAgICBhc3NpZ25lcihvYmplY3QsIHNvdXJjZSwgaW5kZXgsIGN1c3RvbWl6ZXIpO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gb2JqZWN0O1xuICB9KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjcmVhdGVBc3NpZ25lcjtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2xvZGFzaC9fY3JlYXRlQXNzaWduZXIuanNcbiAqKiBtb2R1bGUgaWQgPSAxNVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwidmFyIGFwcGx5ID0gcmVxdWlyZSgnLi9fYXBwbHknKTtcblxuLyogQnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMgZm9yIHRob3NlIHdpdGggdGhlIHNhbWUgbmFtZSBhcyBvdGhlciBgbG9kYXNoYCBtZXRob2RzLiAqL1xudmFyIG5hdGl2ZU1heCA9IE1hdGgubWF4O1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLnJlc3RgIHdoaWNoIGRvZXNuJ3QgdmFsaWRhdGUgb3IgY29lcmNlIGFyZ3VtZW50cy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gZnVuYyBUaGUgZnVuY3Rpb24gdG8gYXBwbHkgYSByZXN0IHBhcmFtZXRlciB0by5cbiAqIEBwYXJhbSB7bnVtYmVyfSBbc3RhcnQ9ZnVuYy5sZW5ndGgtMV0gVGhlIHN0YXJ0IHBvc2l0aW9uIG9mIHRoZSByZXN0IHBhcmFtZXRlci5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gUmV0dXJucyB0aGUgbmV3IGZ1bmN0aW9uLlxuICovXG5mdW5jdGlvbiBiYXNlUmVzdChmdW5jLCBzdGFydCkge1xuICBzdGFydCA9IG5hdGl2ZU1heChzdGFydCA9PT0gdW5kZWZpbmVkID8gKGZ1bmMubGVuZ3RoIC0gMSkgOiBzdGFydCwgMCk7XG4gIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICB2YXIgYXJncyA9IGFyZ3VtZW50cyxcbiAgICAgICAgaW5kZXggPSAtMSxcbiAgICAgICAgbGVuZ3RoID0gbmF0aXZlTWF4KGFyZ3MubGVuZ3RoIC0gc3RhcnQsIDApLFxuICAgICAgICBhcnJheSA9IEFycmF5KGxlbmd0aCk7XG5cbiAgICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgICAgYXJyYXlbaW5kZXhdID0gYXJnc1tzdGFydCArIGluZGV4XTtcbiAgICB9XG4gICAgaW5kZXggPSAtMTtcbiAgICB2YXIgb3RoZXJBcmdzID0gQXJyYXkoc3RhcnQgKyAxKTtcbiAgICB3aGlsZSAoKytpbmRleCA8IHN0YXJ0KSB7XG4gICAgICBvdGhlckFyZ3NbaW5kZXhdID0gYXJnc1tpbmRleF07XG4gICAgfVxuICAgIG90aGVyQXJnc1tzdGFydF0gPSBhcnJheTtcbiAgICByZXR1cm4gYXBwbHkoZnVuYywgdGhpcywgb3RoZXJBcmdzKTtcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlUmVzdDtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2xvZGFzaC9fYmFzZVJlc3QuanNcbiAqKiBtb2R1bGUgaWQgPSAxNlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLyoqXG4gKiBBIGZhc3RlciBhbHRlcm5hdGl2ZSB0byBgRnVuY3Rpb24jYXBwbHlgLCB0aGlzIGZ1bmN0aW9uIGludm9rZXMgYGZ1bmNgXG4gKiB3aXRoIHRoZSBgdGhpc2AgYmluZGluZyBvZiBgdGhpc0FyZ2AgYW5kIHRoZSBhcmd1bWVudHMgb2YgYGFyZ3NgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdW5jIFRoZSBmdW5jdGlvbiB0byBpbnZva2UuXG4gKiBAcGFyYW0geyp9IHRoaXNBcmcgVGhlIGB0aGlzYCBiaW5kaW5nIG9mIGBmdW5jYC5cbiAqIEBwYXJhbSB7QXJyYXl9IGFyZ3MgVGhlIGFyZ3VtZW50cyB0byBpbnZva2UgYGZ1bmNgIHdpdGguXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgcmVzdWx0IG9mIGBmdW5jYC5cbiAqL1xuZnVuY3Rpb24gYXBwbHkoZnVuYywgdGhpc0FyZywgYXJncykge1xuICBzd2l0Y2ggKGFyZ3MubGVuZ3RoKSB7XG4gICAgY2FzZSAwOiByZXR1cm4gZnVuYy5jYWxsKHRoaXNBcmcpO1xuICAgIGNhc2UgMTogcmV0dXJuIGZ1bmMuY2FsbCh0aGlzQXJnLCBhcmdzWzBdKTtcbiAgICBjYXNlIDI6IHJldHVybiBmdW5jLmNhbGwodGhpc0FyZywgYXJnc1swXSwgYXJnc1sxXSk7XG4gICAgY2FzZSAzOiByZXR1cm4gZnVuYy5jYWxsKHRoaXNBcmcsIGFyZ3NbMF0sIGFyZ3NbMV0sIGFyZ3NbMl0pO1xuICB9XG4gIHJldHVybiBmdW5jLmFwcGx5KHRoaXNBcmcsIGFyZ3MpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGFwcGx5O1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vbG9kYXNoL19hcHBseS5qc1xuICoqIG1vZHVsZSBpZCA9IDE3XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJ2YXIgZXEgPSByZXF1aXJlKCcuL2VxJyksXG4gICAgaXNBcnJheUxpa2UgPSByZXF1aXJlKCcuL2lzQXJyYXlMaWtlJyksXG4gICAgaXNJbmRleCA9IHJlcXVpcmUoJy4vX2lzSW5kZXgnKSxcbiAgICBpc09iamVjdCA9IHJlcXVpcmUoJy4vaXNPYmplY3QnKTtcblxuLyoqXG4gKiBDaGVja3MgaWYgdGhlIGdpdmVuIGFyZ3VtZW50cyBhcmUgZnJvbSBhbiBpdGVyYXRlZSBjYWxsLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSBwb3RlbnRpYWwgaXRlcmF0ZWUgdmFsdWUgYXJndW1lbnQuXG4gKiBAcGFyYW0geyp9IGluZGV4IFRoZSBwb3RlbnRpYWwgaXRlcmF0ZWUgaW5kZXggb3Iga2V5IGFyZ3VtZW50LlxuICogQHBhcmFtIHsqfSBvYmplY3QgVGhlIHBvdGVudGlhbCBpdGVyYXRlZSBvYmplY3QgYXJndW1lbnQuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIGFyZ3VtZW50cyBhcmUgZnJvbSBhbiBpdGVyYXRlZSBjYWxsLFxuICogIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gaXNJdGVyYXRlZUNhbGwodmFsdWUsIGluZGV4LCBvYmplY3QpIHtcbiAgaWYgKCFpc09iamVjdChvYmplY3QpKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHZhciB0eXBlID0gdHlwZW9mIGluZGV4O1xuICBpZiAodHlwZSA9PSAnbnVtYmVyJ1xuICAgICAgICA/IChpc0FycmF5TGlrZShvYmplY3QpICYmIGlzSW5kZXgoaW5kZXgsIG9iamVjdC5sZW5ndGgpKVxuICAgICAgICA6ICh0eXBlID09ICdzdHJpbmcnICYmIGluZGV4IGluIG9iamVjdClcbiAgICAgICkge1xuICAgIHJldHVybiBlcShvYmplY3RbaW5kZXhdLCB2YWx1ZSk7XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzSXRlcmF0ZWVDYWxsO1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vbG9kYXNoL19pc0l0ZXJhdGVlQ2FsbC5qc1xuICoqIG1vZHVsZSBpZCA9IDE4XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJ2YXIgaXNGdW5jdGlvbiA9IHJlcXVpcmUoJy4vaXNGdW5jdGlvbicpLFxuICAgIGlzTGVuZ3RoID0gcmVxdWlyZSgnLi9pc0xlbmd0aCcpO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGFycmF5LWxpa2UuIEEgdmFsdWUgaXMgY29uc2lkZXJlZCBhcnJheS1saWtlIGlmIGl0J3NcbiAqIG5vdCBhIGZ1bmN0aW9uIGFuZCBoYXMgYSBgdmFsdWUubGVuZ3RoYCB0aGF0J3MgYW4gaW50ZWdlciBncmVhdGVyIHRoYW4gb3JcbiAqIGVxdWFsIHRvIGAwYCBhbmQgbGVzcyB0aGFuIG9yIGVxdWFsIHRvIGBOdW1iZXIuTUFYX1NBRkVfSU5URUdFUmAuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjAuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYXJyYXktbGlrZSwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzQXJyYXlMaWtlKFsxLCAyLCAzXSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0FycmF5TGlrZShkb2N1bWVudC5ib2R5LmNoaWxkcmVuKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzQXJyYXlMaWtlKCdhYmMnKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzQXJyYXlMaWtlKF8ubm9vcCk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0FycmF5TGlrZSh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgIT0gbnVsbCAmJiBpc0xlbmd0aCh2YWx1ZS5sZW5ndGgpICYmICFpc0Z1bmN0aW9uKHZhbHVlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc0FycmF5TGlrZTtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2xvZGFzaC9pc0FycmF5TGlrZS5qc1xuICoqIG1vZHVsZSBpZCA9IDE5XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJ2YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL2lzT2JqZWN0Jyk7XG5cbi8qKiBgT2JqZWN0I3RvU3RyaW5nYCByZXN1bHQgcmVmZXJlbmNlcy4gKi9cbnZhciBmdW5jVGFnID0gJ1tvYmplY3QgRnVuY3Rpb25dJyxcbiAgICBnZW5UYWcgPSAnW29iamVjdCBHZW5lcmF0b3JGdW5jdGlvbl0nO1xuXG4vKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKipcbiAqIFVzZWQgdG8gcmVzb2x2ZSB0aGVcbiAqIFtgdG9TdHJpbmdUYWdgXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1vYmplY3QucHJvdG90eXBlLnRvc3RyaW5nKVxuICogb2YgdmFsdWVzLlxuICovXG52YXIgb2JqZWN0VG9TdHJpbmcgPSBvYmplY3RQcm90by50b1N0cmluZztcblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBjbGFzc2lmaWVkIGFzIGEgYEZ1bmN0aW9uYCBvYmplY3QuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAwLjEuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSBmdW5jdGlvbiwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzRnVuY3Rpb24oXyk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0Z1bmN0aW9uKC9hYmMvKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzRnVuY3Rpb24odmFsdWUpIHtcbiAgLy8gVGhlIHVzZSBvZiBgT2JqZWN0I3RvU3RyaW5nYCBhdm9pZHMgaXNzdWVzIHdpdGggdGhlIGB0eXBlb2ZgIG9wZXJhdG9yXG4gIC8vIGluIFNhZmFyaSA4LTkgd2hpY2ggcmV0dXJucyAnb2JqZWN0JyBmb3IgdHlwZWQgYXJyYXkgYW5kIG90aGVyIGNvbnN0cnVjdG9ycy5cbiAgdmFyIHRhZyA9IGlzT2JqZWN0KHZhbHVlKSA/IG9iamVjdFRvU3RyaW5nLmNhbGwodmFsdWUpIDogJyc7XG4gIHJldHVybiB0YWcgPT0gZnVuY1RhZyB8fCB0YWcgPT0gZ2VuVGFnO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzRnVuY3Rpb247XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9sb2Rhc2gvaXNGdW5jdGlvbi5qc1xuICoqIG1vZHVsZSBpZCA9IDIwXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIHRoZVxuICogW2xhbmd1YWdlIHR5cGVdKGh0dHA6Ly93d3cuZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1lY21hc2NyaXB0LWxhbmd1YWdlLXR5cGVzKVxuICogb2YgYE9iamVjdGAuIChlLmcuIGFycmF5cywgZnVuY3Rpb25zLCBvYmplY3RzLCByZWdleGVzLCBgbmV3IE51bWJlcigwKWAsIGFuZCBgbmV3IFN0cmluZygnJylgKVxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGFuIG9iamVjdCwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzT2JqZWN0KHt9KTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0KFsxLCAyLCAzXSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdChfLm5vb3ApO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3QobnVsbCk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc09iamVjdCh2YWx1ZSkge1xuICB2YXIgdHlwZSA9IHR5cGVvZiB2YWx1ZTtcbiAgcmV0dXJuICEhdmFsdWUgJiYgKHR5cGUgPT0gJ29iamVjdCcgfHwgdHlwZSA9PSAnZnVuY3Rpb24nKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc09iamVjdDtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2xvZGFzaC9pc09iamVjdC5qc1xuICoqIG1vZHVsZSBpZCA9IDIxXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvKiogVXNlZCBhcyByZWZlcmVuY2VzIGZvciB2YXJpb3VzIGBOdW1iZXJgIGNvbnN0YW50cy4gKi9cbnZhciBNQVhfU0FGRV9JTlRFR0VSID0gOTAwNzE5OTI1NDc0MDk5MTtcblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBhIHZhbGlkIGFycmF5LWxpa2UgbGVuZ3RoLlxuICpcbiAqICoqTm90ZToqKiBUaGlzIG1ldGhvZCBpcyBsb29zZWx5IGJhc2VkIG9uXG4gKiBbYFRvTGVuZ3RoYF0oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtdG9sZW5ndGgpLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgdmFsaWQgbGVuZ3RoLCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNMZW5ndGgoMyk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0xlbmd0aChOdW1iZXIuTUlOX1ZBTFVFKTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5pc0xlbmd0aChJbmZpbml0eSk7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uaXNMZW5ndGgoJzMnKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzTGVuZ3RoKHZhbHVlKSB7XG4gIHJldHVybiB0eXBlb2YgdmFsdWUgPT0gJ251bWJlcicgJiZcbiAgICB2YWx1ZSA+IC0xICYmIHZhbHVlICUgMSA9PSAwICYmIHZhbHVlIDw9IE1BWF9TQUZFX0lOVEVHRVI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNMZW5ndGg7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9sb2Rhc2gvaXNMZW5ndGguanNcbiAqKiBtb2R1bGUgaWQgPSAyMlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLyoqIFVzZWQgYXMgcmVmZXJlbmNlcyBmb3IgdmFyaW91cyBgTnVtYmVyYCBjb25zdGFudHMuICovXG52YXIgTUFYX1NBRkVfSU5URUdFUiA9IDkwMDcxOTkyNTQ3NDA5OTE7XG5cbi8qKiBVc2VkIHRvIGRldGVjdCB1bnNpZ25lZCBpbnRlZ2VyIHZhbHVlcy4gKi9cbnZhciByZUlzVWludCA9IC9eKD86MHxbMS05XVxcZCopJC87XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgYSB2YWxpZCBhcnJheS1saWtlIGluZGV4LlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEBwYXJhbSB7bnVtYmVyfSBbbGVuZ3RoPU1BWF9TQUZFX0lOVEVHRVJdIFRoZSB1cHBlciBib3VuZHMgb2YgYSB2YWxpZCBpbmRleC5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgdmFsaWQgaW5kZXgsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gaXNJbmRleCh2YWx1ZSwgbGVuZ3RoKSB7XG4gIGxlbmd0aCA9IGxlbmd0aCA9PSBudWxsID8gTUFYX1NBRkVfSU5URUdFUiA6IGxlbmd0aDtcbiAgcmV0dXJuICEhbGVuZ3RoICYmXG4gICAgKHR5cGVvZiB2YWx1ZSA9PSAnbnVtYmVyJyB8fCByZUlzVWludC50ZXN0KHZhbHVlKSkgJiZcbiAgICAodmFsdWUgPiAtMSAmJiB2YWx1ZSAlIDEgPT0gMCAmJiB2YWx1ZSA8IGxlbmd0aCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNJbmRleDtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2xvZGFzaC9faXNJbmRleC5qc1xuICoqIG1vZHVsZSBpZCA9IDIzXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGxpa2VseSBhIHByb3RvdHlwZSBvYmplY3QuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSBwcm90b3R5cGUsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gaXNQcm90b3R5cGUodmFsdWUpIHtcbiAgdmFyIEN0b3IgPSB2YWx1ZSAmJiB2YWx1ZS5jb25zdHJ1Y3RvcixcbiAgICAgIHByb3RvID0gKHR5cGVvZiBDdG9yID09ICdmdW5jdGlvbicgJiYgQ3Rvci5wcm90b3R5cGUpIHx8IG9iamVjdFByb3RvO1xuXG4gIHJldHVybiB2YWx1ZSA9PT0gcHJvdG87XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNQcm90b3R5cGU7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9sb2Rhc2gvX2lzUHJvdG90eXBlLmpzXG4gKiogbW9kdWxlIGlkID0gMjRcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInZhciBhcnJheUxpa2VLZXlzID0gcmVxdWlyZSgnLi9fYXJyYXlMaWtlS2V5cycpLFxuICAgIGJhc2VLZXlzID0gcmVxdWlyZSgnLi9fYmFzZUtleXMnKSxcbiAgICBpc0FycmF5TGlrZSA9IHJlcXVpcmUoJy4vaXNBcnJheUxpa2UnKTtcblxuLyoqXG4gKiBDcmVhdGVzIGFuIGFycmF5IG9mIHRoZSBvd24gZW51bWVyYWJsZSBwcm9wZXJ0eSBuYW1lcyBvZiBgb2JqZWN0YC5cbiAqXG4gKiAqKk5vdGU6KiogTm9uLW9iamVjdCB2YWx1ZXMgYXJlIGNvZXJjZWQgdG8gb2JqZWN0cy4gU2VlIHRoZVxuICogW0VTIHNwZWNdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLW9iamVjdC5rZXlzKVxuICogZm9yIG1vcmUgZGV0YWlscy5cbiAqXG4gKiBAc3RhdGljXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBtZW1iZXJPZiBfXG4gKiBAY2F0ZWdvcnkgT2JqZWN0XG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIGFycmF5IG9mIHByb3BlcnR5IG5hbWVzLlxuICogQGV4YW1wbGVcbiAqXG4gKiBmdW5jdGlvbiBGb28oKSB7XG4gKiAgIHRoaXMuYSA9IDE7XG4gKiAgIHRoaXMuYiA9IDI7XG4gKiB9XG4gKlxuICogRm9vLnByb3RvdHlwZS5jID0gMztcbiAqXG4gKiBfLmtleXMobmV3IEZvbyk7XG4gKiAvLyA9PiBbJ2EnLCAnYiddIChpdGVyYXRpb24gb3JkZXIgaXMgbm90IGd1YXJhbnRlZWQpXG4gKlxuICogXy5rZXlzKCdoaScpO1xuICogLy8gPT4gWycwJywgJzEnXVxuICovXG5mdW5jdGlvbiBrZXlzKG9iamVjdCkge1xuICByZXR1cm4gaXNBcnJheUxpa2Uob2JqZWN0KSA/IGFycmF5TGlrZUtleXMob2JqZWN0KSA6IGJhc2VLZXlzKG9iamVjdCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0ga2V5cztcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2xvZGFzaC9rZXlzLmpzXG4gKiogbW9kdWxlIGlkID0gMjVcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInZhciBiYXNlVGltZXMgPSByZXF1aXJlKCcuL19iYXNlVGltZXMnKSxcbiAgICBpc0FyZ3VtZW50cyA9IHJlcXVpcmUoJy4vaXNBcmd1bWVudHMnKSxcbiAgICBpc0FycmF5ID0gcmVxdWlyZSgnLi9pc0FycmF5JyksXG4gICAgaXNJbmRleCA9IHJlcXVpcmUoJy4vX2lzSW5kZXgnKTtcblxuLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqIFVzZWQgdG8gY2hlY2sgb2JqZWN0cyBmb3Igb3duIHByb3BlcnRpZXMuICovXG52YXIgaGFzT3duUHJvcGVydHkgPSBvYmplY3RQcm90by5oYXNPd25Qcm9wZXJ0eTtcblxuLyoqXG4gKiBDcmVhdGVzIGFuIGFycmF5IG9mIHRoZSBlbnVtZXJhYmxlIHByb3BlcnR5IG5hbWVzIG9mIHRoZSBhcnJheS1saWtlIGB2YWx1ZWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHF1ZXJ5LlxuICogQHBhcmFtIHtib29sZWFufSBpbmhlcml0ZWQgU3BlY2lmeSByZXR1cm5pbmcgaW5oZXJpdGVkIHByb3BlcnR5IG5hbWVzLlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBhcnJheSBvZiBwcm9wZXJ0eSBuYW1lcy5cbiAqL1xuZnVuY3Rpb24gYXJyYXlMaWtlS2V5cyh2YWx1ZSwgaW5oZXJpdGVkKSB7XG4gIC8vIFNhZmFyaSA4LjEgbWFrZXMgYGFyZ3VtZW50cy5jYWxsZWVgIGVudW1lcmFibGUgaW4gc3RyaWN0IG1vZGUuXG4gIC8vIFNhZmFyaSA5IG1ha2VzIGBhcmd1bWVudHMubGVuZ3RoYCBlbnVtZXJhYmxlIGluIHN0cmljdCBtb2RlLlxuICB2YXIgcmVzdWx0ID0gKGlzQXJyYXkodmFsdWUpIHx8IGlzQXJndW1lbnRzKHZhbHVlKSlcbiAgICA/IGJhc2VUaW1lcyh2YWx1ZS5sZW5ndGgsIFN0cmluZylcbiAgICA6IFtdO1xuXG4gIHZhciBsZW5ndGggPSByZXN1bHQubGVuZ3RoLFxuICAgICAgc2tpcEluZGV4ZXMgPSAhIWxlbmd0aDtcblxuICBmb3IgKHZhciBrZXkgaW4gdmFsdWUpIHtcbiAgICBpZiAoKGluaGVyaXRlZCB8fCBoYXNPd25Qcm9wZXJ0eS5jYWxsKHZhbHVlLCBrZXkpKSAmJlxuICAgICAgICAhKHNraXBJbmRleGVzICYmIChrZXkgPT0gJ2xlbmd0aCcgfHwgaXNJbmRleChrZXksIGxlbmd0aCkpKSkge1xuICAgICAgcmVzdWx0LnB1c2goa2V5KTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBhcnJheUxpa2VLZXlzO1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vbG9kYXNoL19hcnJheUxpa2VLZXlzLmpzXG4gKiogbW9kdWxlIGlkID0gMjZcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8udGltZXNgIHdpdGhvdXQgc3VwcG9ydCBmb3IgaXRlcmF0ZWUgc2hvcnRoYW5kc1xuICogb3IgbWF4IGFycmF5IGxlbmd0aCBjaGVja3MuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7bnVtYmVyfSBuIFRoZSBudW1iZXIgb2YgdGltZXMgdG8gaW52b2tlIGBpdGVyYXRlZWAuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBpdGVyYXRlZSBUaGUgZnVuY3Rpb24gaW52b2tlZCBwZXIgaXRlcmF0aW9uLlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBhcnJheSBvZiByZXN1bHRzLlxuICovXG5mdW5jdGlvbiBiYXNlVGltZXMobiwgaXRlcmF0ZWUpIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICByZXN1bHQgPSBBcnJheShuKTtcblxuICB3aGlsZSAoKytpbmRleCA8IG4pIHtcbiAgICByZXN1bHRbaW5kZXhdID0gaXRlcmF0ZWUoaW5kZXgpO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZVRpbWVzO1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vbG9kYXNoL19iYXNlVGltZXMuanNcbiAqKiBtb2R1bGUgaWQgPSAyN1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwidmFyIGlzQXJyYXlMaWtlT2JqZWN0ID0gcmVxdWlyZSgnLi9pc0FycmF5TGlrZU9iamVjdCcpO1xuXG4vKiogYE9iamVjdCN0b1N0cmluZ2AgcmVzdWx0IHJlZmVyZW5jZXMuICovXG52YXIgYXJnc1RhZyA9ICdbb2JqZWN0IEFyZ3VtZW50c10nO1xuXG4vKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKiogVXNlZCB0byBjaGVjayBvYmplY3RzIGZvciBvd24gcHJvcGVydGllcy4gKi9cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IG9iamVjdFByb3RvLmhhc093blByb3BlcnR5O1xuXG4vKipcbiAqIFVzZWQgdG8gcmVzb2x2ZSB0aGVcbiAqIFtgdG9TdHJpbmdUYWdgXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1vYmplY3QucHJvdG90eXBlLnRvc3RyaW5nKVxuICogb2YgdmFsdWVzLlxuICovXG52YXIgb2JqZWN0VG9TdHJpbmcgPSBvYmplY3RQcm90by50b1N0cmluZztcblxuLyoqIEJ1aWx0LWluIHZhbHVlIHJlZmVyZW5jZXMuICovXG52YXIgcHJvcGVydHlJc0VudW1lcmFibGUgPSBvYmplY3RQcm90by5wcm9wZXJ0eUlzRW51bWVyYWJsZTtcblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBsaWtlbHkgYW4gYGFyZ3VtZW50c2Agb2JqZWN0LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGFuIGBhcmd1bWVudHNgIG9iamVjdCxcbiAqICBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNBcmd1bWVudHMoZnVuY3Rpb24oKSB7IHJldHVybiBhcmd1bWVudHM7IH0oKSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0FyZ3VtZW50cyhbMSwgMiwgM10pO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNBcmd1bWVudHModmFsdWUpIHtcbiAgLy8gU2FmYXJpIDguMSBtYWtlcyBgYXJndW1lbnRzLmNhbGxlZWAgZW51bWVyYWJsZSBpbiBzdHJpY3QgbW9kZS5cbiAgcmV0dXJuIGlzQXJyYXlMaWtlT2JqZWN0KHZhbHVlKSAmJiBoYXNPd25Qcm9wZXJ0eS5jYWxsKHZhbHVlLCAnY2FsbGVlJykgJiZcbiAgICAoIXByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwodmFsdWUsICdjYWxsZWUnKSB8fCBvYmplY3RUb1N0cmluZy5jYWxsKHZhbHVlKSA9PSBhcmdzVGFnKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc0FyZ3VtZW50cztcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2xvZGFzaC9pc0FyZ3VtZW50cy5qc1xuICoqIG1vZHVsZSBpZCA9IDI4XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJ2YXIgaXNBcnJheUxpa2UgPSByZXF1aXJlKCcuL2lzQXJyYXlMaWtlJyksXG4gICAgaXNPYmplY3RMaWtlID0gcmVxdWlyZSgnLi9pc09iamVjdExpa2UnKTtcblxuLyoqXG4gKiBUaGlzIG1ldGhvZCBpcyBsaWtlIGBfLmlzQXJyYXlMaWtlYCBleGNlcHQgdGhhdCBpdCBhbHNvIGNoZWNrcyBpZiBgdmFsdWVgXG4gKiBpcyBhbiBvYmplY3QuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjAuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYW4gYXJyYXktbGlrZSBvYmplY3QsXG4gKiAgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzQXJyYXlMaWtlT2JqZWN0KFsxLCAyLCAzXSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0FycmF5TGlrZU9iamVjdChkb2N1bWVudC5ib2R5LmNoaWxkcmVuKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzQXJyYXlMaWtlT2JqZWN0KCdhYmMnKTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5pc0FycmF5TGlrZU9iamVjdChfLm5vb3ApO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNBcnJheUxpa2VPYmplY3QodmFsdWUpIHtcbiAgcmV0dXJuIGlzT2JqZWN0TGlrZSh2YWx1ZSkgJiYgaXNBcnJheUxpa2UodmFsdWUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzQXJyYXlMaWtlT2JqZWN0O1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vbG9kYXNoL2lzQXJyYXlMaWtlT2JqZWN0LmpzXG4gKiogbW9kdWxlIGlkID0gMjlcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgb2JqZWN0LWxpa2UuIEEgdmFsdWUgaXMgb2JqZWN0LWxpa2UgaWYgaXQncyBub3QgYG51bGxgXG4gKiBhbmQgaGFzIGEgYHR5cGVvZmAgcmVzdWx0IG9mIFwib2JqZWN0XCIuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjAuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgb2JqZWN0LWxpa2UsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc09iamVjdExpa2Uoe30pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3RMaWtlKFsxLCAyLCAzXSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdExpa2UoXy5ub29wKTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5pc09iamVjdExpa2UobnVsbCk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc09iamVjdExpa2UodmFsdWUpIHtcbiAgcmV0dXJuICEhdmFsdWUgJiYgdHlwZW9mIHZhbHVlID09ICdvYmplY3QnO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzT2JqZWN0TGlrZTtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2xvZGFzaC9pc09iamVjdExpa2UuanNcbiAqKiBtb2R1bGUgaWQgPSAzMFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBjbGFzc2lmaWVkIGFzIGFuIGBBcnJheWAgb2JqZWN0LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGFuIGFycmF5LCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNBcnJheShbMSwgMiwgM10pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNBcnJheShkb2N1bWVudC5ib2R5LmNoaWxkcmVuKTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5pc0FycmF5KCdhYmMnKTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5pc0FycmF5KF8ubm9vcCk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG52YXIgaXNBcnJheSA9IEFycmF5LmlzQXJyYXk7XG5cbm1vZHVsZS5leHBvcnRzID0gaXNBcnJheTtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2xvZGFzaC9pc0FycmF5LmpzXG4gKiogbW9kdWxlIGlkID0gMzFcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInZhciBpc1Byb3RvdHlwZSA9IHJlcXVpcmUoJy4vX2lzUHJvdG90eXBlJyksXG4gICAgbmF0aXZlS2V5cyA9IHJlcXVpcmUoJy4vX25hdGl2ZUtleXMnKTtcblxuLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqIFVzZWQgdG8gY2hlY2sgb2JqZWN0cyBmb3Igb3duIHByb3BlcnRpZXMuICovXG52YXIgaGFzT3duUHJvcGVydHkgPSBvYmplY3RQcm90by5oYXNPd25Qcm9wZXJ0eTtcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5rZXlzYCB3aGljaCBkb2Vzbid0IHRyZWF0IHNwYXJzZSBhcnJheXMgYXMgZGVuc2UuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgYXJyYXkgb2YgcHJvcGVydHkgbmFtZXMuXG4gKi9cbmZ1bmN0aW9uIGJhc2VLZXlzKG9iamVjdCkge1xuICBpZiAoIWlzUHJvdG90eXBlKG9iamVjdCkpIHtcbiAgICByZXR1cm4gbmF0aXZlS2V5cyhvYmplY3QpO1xuICB9XG4gIHZhciByZXN1bHQgPSBbXTtcbiAgZm9yICh2YXIga2V5IGluIE9iamVjdChvYmplY3QpKSB7XG4gICAgaWYgKGhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBrZXkpICYmIGtleSAhPSAnY29uc3RydWN0b3InKSB7XG4gICAgICByZXN1bHQucHVzaChrZXkpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VLZXlzO1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vbG9kYXNoL19iYXNlS2V5cy5qc1xuICoqIG1vZHVsZSBpZCA9IDMyXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJ2YXIgb3ZlckFyZyA9IHJlcXVpcmUoJy4vX292ZXJBcmcnKTtcblxuLyogQnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMgZm9yIHRob3NlIHdpdGggdGhlIHNhbWUgbmFtZSBhcyBvdGhlciBgbG9kYXNoYCBtZXRob2RzLiAqL1xudmFyIG5hdGl2ZUtleXMgPSBvdmVyQXJnKE9iamVjdC5rZXlzLCBPYmplY3QpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IG5hdGl2ZUtleXM7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9sb2Rhc2gvX25hdGl2ZUtleXMuanNcbiAqKiBtb2R1bGUgaWQgPSAzM1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLyoqXG4gKiBDcmVhdGVzIGEgdW5hcnkgZnVuY3Rpb24gdGhhdCBpbnZva2VzIGBmdW5jYCB3aXRoIGl0cyBhcmd1bWVudCB0cmFuc2Zvcm1lZC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gZnVuYyBUaGUgZnVuY3Rpb24gdG8gd3JhcC5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IHRyYW5zZm9ybSBUaGUgYXJndW1lbnQgdHJhbnNmb3JtLlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBSZXR1cm5zIHRoZSBuZXcgZnVuY3Rpb24uXG4gKi9cbmZ1bmN0aW9uIG92ZXJBcmcoZnVuYywgdHJhbnNmb3JtKSB7XG4gIHJldHVybiBmdW5jdGlvbihhcmcpIHtcbiAgICByZXR1cm4gZnVuYyh0cmFuc2Zvcm0oYXJnKSk7XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gb3ZlckFyZztcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2xvZGFzaC9fb3ZlckFyZy5qc1xuICoqIG1vZHVsZSBpZCA9IDM0XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvKipcbiogKEMpIENvcHlyaWdodCBJQk0gQ29ycC4gMjAxNi4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbipcbiogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTsgeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHRcbiogaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbipcbiogaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4qXG4qIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmUgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2VcbiogaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Ncbiogb3IgaW1wbGllZC4gU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZCBsaW1pdGF0aW9ucyB1bmRlclxuKiB0aGUgTGljZW5zZS5cbiovXG5cbnZhciBzdGF0ZSA9IHJlcXVpcmUoJy4uL3N0YXRlJyk7XG52YXIgd3JpdGVNZXNzYWdlID0gcmVxdWlyZSgnLi93cml0ZU1lc3NhZ2UnKTtcblxuZnVuY3Rpb24gX3JlbmRlcihlbCwgc3RhdGUpIHtcblx0ZWwuc2V0QXR0cmlidXRlKCdjbGFzcycsICdJQk1DaGF0LWlibS1zcGlubmVyIElCTUNoYXQtaW5wdXQtbG9hZGluZyBJQk1DaGF0LScgKyBzdGF0ZSArICctc3BpbicpO1xufVxuXG52YXIgc3Bpbm5lciA9IHtcblx0c2hvdzogZnVuY3Rpb24oZWwpIHtcblx0XHRfcmVuZGVyKGVsLCAnaW5pdCcpO1xuXHR9LFxuXHRoaWRlOiBmdW5jdGlvbihlbCkge1xuXHRcdF9yZW5kZXIoZWwsICdlbmQnKTtcblx0fVxufTtcblxuZnVuY3Rpb24gX2dldFN0eWxlcyhjdXJyZW50KSB7XG5cdHZhciBjb250YWluZXJDbGFzcyA9IFwiLmNoYXRJRC1cIiArIGN1cnJlbnQuY2hhdElEO1xuXHR2YXIgc3R5bGVzID0gY29udGFpbmVyQ2xhc3MgKyBcIiAuSUJNQ2hhdC1kZWZhdWx0LWNvbG9ycyB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBcIiArIGN1cnJlbnQuc3R5bGVzLmJhY2tncm91bmQgKyBcIjtcXG4gIGNvbG9yOiBcIiArIGN1cnJlbnQuc3R5bGVzLnRleHQgKyBcIjtcXG59XFxuXCIgK1xuXHRcdFx0XHRcdFx0XHRjb250YWluZXJDbGFzcyArIFwiIC5JQk1DaGF0LXNlY29uZGFyeS1jb2xvcnMge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogXCIgKyBjdXJyZW50LnN0eWxlcy5zZWNvbmRhcnlCYWNrZ3JvdW5kICsgXCI7XFxuICBjb2xvcjogXCIgKyBjdXJyZW50LnN0eWxlcy5zZWNvbmRhcnlUZXh0ICsgXCI7XFxufVxcblwiICtcblx0XHRcdFx0XHRcdFx0Y29udGFpbmVyQ2xhc3MgKyBcIiAuSUJNQ2hhdC1hY2NlbnQtY29sb3JzIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IFwiICsgY3VycmVudC5zdHlsZXMuYWNjZW50QmFja2dyb3VuZCArIFwiO1xcbiAgY29sb3I6IFwiICsgY3VycmVudC5zdHlsZXMuYWNjZW50VGV4dCArIFwiO1xcbn1cXG5cIiArXG5cdFx0XHRcdFx0XHRcdGNvbnRhaW5lckNsYXNzICsgXCIgLklCTUNoYXQtZXJyb3ItY29sb3JzIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IFwiICsgY3VycmVudC5zdHlsZXMuZXJyb3JCYWNrZ3JvdW5kICsgXCI7XFxuICBjb2xvcjogXCIgKyBjdXJyZW50LnN0eWxlcy5lcnJvclRleHQgKyBcIjtcXG59XFxuXCIgK1xuXHRcdFx0XHRcdFx0XHRjb250YWluZXJDbGFzcyArIFwiIC5JQk1DaGF0LWlucHV0LWNvbG9ycyB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBcIiArIGN1cnJlbnQuc3R5bGVzLmlucHV0QmFja2dyb3VuZCArIFwiO1xcbiAgY29sb3I6IFwiICsgY3VycmVudC5zdHlsZXMuaW5wdXRUZXh0ICsgXCI7XFxufVxcblwiICtcblx0XHRcdFx0XHRcdFx0Y29udGFpbmVyQ2xhc3MgKyBcIiAuSUJNQ2hhdC13YXRzb24tbWVzc2FnZS10aGVtZSB7XFxuXFx0Ym9yZGVyLWxlZnQ6IDNweCBzb2xpZCBcIiArIGN1cnJlbnQuc3R5bGVzLmFjY2VudEJhY2tncm91bmQgKyBcIjtcXG59XFxuXCIgK1xuXHRcdFx0XHRcdFx0XHRjb250YWluZXJDbGFzcyArIFwiIGEsXFxuXCIgK1xuXHRcdFx0XHRcdFx0XHRjb250YWluZXJDbGFzcyArIFwiIGE6aG92ZXIsXFxuXCIgK1xuXHRcdFx0XHRcdFx0XHRjb250YWluZXJDbGFzcyArIFwiIGE6dmlzaXRlZCxcXG5cIiArXG5cdFx0XHRcdFx0XHRcdGNvbnRhaW5lckNsYXNzICsgXCIgYTphY3RpdmUge1xcblxcdGNvbG9yOiBcIiArIGN1cnJlbnQuc3R5bGVzLmxpbmsgKyBcIjtcXG59XFxuXCIgK1xuXHRcdFx0XHRcdFx0XHRjb250YWluZXJDbGFzcyArIFwiIC5JQk1DaGF0LWNoYXQtdGV4dGJveC10aGVtZSB7XFxuICBib3JkZXItYm90dG9tOiBzb2xpZCAxcHggXCIgKyBjdXJyZW50LnN0eWxlcy50ZXh0ICsgXCI7XFxufVxcblwiICtcblx0XHRcdFx0XHRcdFx0Y29udGFpbmVyQ2xhc3MgKyBcIiAuSUJNQ2hhdC1jaGF0LXRleHRib3gtdGhlbWU6Zm9jdXMge1xcbiAgYm9yZGVyLWJvdHRvbTogc29saWQgMnB4IFwiICsgY3VycmVudC5zdHlsZXMuYWNjZW50QmFja2dyb3VuZCArIFwiO1xcbn1cXG5cIiArXG5cdFx0XHRcdFx0XHRcdGNvbnRhaW5lckNsYXNzICsgXCIgLklCTUNoYXQtaWJtLXNwaW5uZXIge1xcblxcdHN0cm9rZTogXCIgKyBjdXJyZW50LnN0eWxlcy5hY2NlbnRCYWNrZ3JvdW5kICsgXCI7XFxufVwiO1xuXHRyZXR1cm4gc3R5bGVzO1xufVxuXG5cbmZ1bmN0aW9uIGRlYm91bmNlKGZ1bmMsIHdhaXQsIGltbWVkaWF0ZSkge1xuXHR2YXIgdGltZW91dDtcblx0cmV0dXJuIGZ1bmN0aW9uKCkge1xuXHRcdHZhciBjb250ZXh0ID0gdGhpcywgYXJncyA9IGFyZ3VtZW50cztcblx0XHR2YXIgbGF0ZXIgPSBmdW5jdGlvbigpIHtcblx0XHRcdHRpbWVvdXQgPSBudWxsO1xuXHRcdFx0aWYgKCFpbW1lZGlhdGUpIGZ1bmMuYXBwbHkoY29udGV4dCwgYXJncyk7XG5cdFx0fTtcblx0XHR2YXIgY2FsbE5vdyA9IGltbWVkaWF0ZSAmJiAhdGltZW91dDtcblx0XHRjbGVhclRpbWVvdXQodGltZW91dCk7XG5cdFx0dGltZW91dCA9IHNldFRpbWVvdXQobGF0ZXIsIHdhaXQpO1xuXHRcdGlmIChjYWxsTm93KSBmdW5jLmFwcGx5KGNvbnRleHQsIGFyZ3MpO1xuXHR9O1xufVxuXG5mdW5jdGlvbiBzZXJpYWxpemUob2JqKSB7XG5cdGNvbnN0IHN0ciA9IFtdO1xuXHRmb3IgKHZhciBwIGluIG9iaikge1xuXHRcdGlmIChvYmouaGFzT3duUHJvcGVydHkocCkpXG5cdFx0XHRzdHIucHVzaChlbmNvZGVVUklDb21wb25lbnQocCkgKyAnPScgKyBlbmNvZGVVUklDb21wb25lbnQob2JqW3BdKSk7XG5cdH1cblx0cmV0dXJuIHN0ci5qb2luKCcmJyk7XG59XG5cbmZ1bmN0aW9uIGNvbXBpbGUoc3RyLCBvcHRpb25zKSB7XG5cdGlmIChvcHRpb25zICYmIE9iamVjdC5rZXlzKG9wdGlvbnMpLmxlbmd0aCA+IDApIHtcblx0XHRPYmplY3Qua2V5cyhvcHRpb25zKS5mb3JFYWNoKGZ1bmN0aW9uKGtleSkge1xuXHRcdFx0c3RyID0gc3RyLnNwbGl0KCckeycgKyBrZXkgKyAnfScpLmpvaW4ob3B0aW9uc1trZXldKTtcblx0XHR9KTtcblx0fVxuXHRyZXR1cm4gc3RyO1xufVxuXG5mdW5jdGlvbiBnZXRVVUlEKCkge1xuXHR2YXIgZCA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuXHRpZiAoIHdpbmRvdy5wZXJmb3JtYW5jZSAmJiB0eXBlb2Ygd2luZG93LnBlcmZvcm1hbmNlLm5vdyA9PT0gJ2Z1bmN0aW9uJyApXG5cdFx0ZCArPSBwZXJmb3JtYW5jZS5ub3coKTtcblx0cmV0dXJuICdJQk1DaGF0LScgKyAoJ3h4eHh4eHh4LXh4eHgtNHh4eC15eHh4LXh4eHh4eHh4eHh4eCcucmVwbGFjZSgvW3h5XS9nLCBmdW5jdGlvbihjKSB7XG5cdFx0dmFyIHIgPSAoZCArIE1hdGgucmFuZG9tKCkqMTYpJTE2IHwgMDtcblx0XHRkID0gTWF0aC5mbG9vcihkLzE2KTtcblx0XHRyZXR1cm4gKCggYyA9PSAneCcgPyByIDogKHImMHgzfDB4OCkpLnRvU3RyaW5nKDE2KSk7XG5cdH0pKTtcbn1cblxuZnVuY3Rpb24gX2F0dGFjaFN0eWxlc1RvRE9NKHN0eWxlcykge1xuXHR2YXIgY3NzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcblx0Y3NzLnR5cGUgPSBcInRleHQvY3NzXCI7XG5cdGlmIChjc3Muc3R5bGVTaGVldClcblx0XHRjc3Muc3R5bGVTaGVldC5jc3NUZXh0ID0gc3R5bGVzO1xuXHRlbHNlXG5cdFx0Y3NzLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHN0eWxlcykpO1xuXHRkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcImhlYWRcIilbMF0uYXBwZW5kQ2hpbGQoY3NzKTtcbn1cblxuZnVuY3Rpb24gYXR0YWNoUGxheWJhY2tTdHlsZXMoY2hhdElEKSB7XG5cdHZhciBjdXJyZW50ID0gc3RhdGUuZ2V0U3RhdGUoKVtjaGF0SURdO1xuXHR2YXIgc3R5bGVzID0gX2dldFN0eWxlcyhjdXJyZW50KTtcblx0X2F0dGFjaFN0eWxlc1RvRE9NKHN0eWxlcyk7XG59XG5cbmZ1bmN0aW9uIGF0dGFjaFN0eWxlcygpIHtcblx0dmFyIGN1cnJlbnQgPSBzdGF0ZS5nZXRTdGF0ZSgpO1xuXHR2YXIgc3R5bGVzID0gX2dldFN0eWxlcyhjdXJyZW50KTtcblx0X2F0dGFjaFN0eWxlc1RvRE9NKHN0eWxlcyk7XG59XG5cbmZ1bmN0aW9uIGhhc0NsYXNzKGVsZW1lbnQsIGNsYXNzTmFtZSkge1xuXHR2YXIgdGhhdENsYXNzID0gXCIgXCIgKyBjbGFzc05hbWUgKyBcIiBcIjtcblx0cmV0dXJuICggKFwiIFwiICsgZWxlbWVudC5jbGFzc05hbWUgKyBcIiBcIikucmVwbGFjZSgvW1xcblxcdF0vZywgXCIgXCIpLmluZGV4T2YodGhhdENsYXNzKSA+IC0xICk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuXHRkZWJvdW5jZTogZGVib3VuY2UsXG5cdHNlcmlhbGl6ZTogc2VyaWFsaXplLFxuXHRoYXNDbGFzczogaGFzQ2xhc3MsXG5cdGdldFVVSUQ6IGdldFVVSUQsXG5cdGF0dGFjaFN0eWxlczogYXR0YWNoU3R5bGVzLFxuXHRhdHRhY2hQbGF5YmFja1N0eWxlczogYXR0YWNoUGxheWJhY2tTdHlsZXMsXG5cdHNwaW5uZXI6IHNwaW5uZXIsXG5cdGNvbXBpbGU6IGNvbXBpbGUsXG5cdHdyaXRlTWVzc2FnZTogd3JpdGVNZXNzYWdlXG59O1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy91dGlscy9pbmRleC5qc1xuICoqIG1vZHVsZSBpZCA9IDM1XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJ2YXIgUHJvbWlzZSA9IHJlcXVpcmUoJ2VzNi1wcm9taXNlJykuUHJvbWlzZTtcblxuZnVuY3Rpb24gd3JpdGVNZXNzYWdlKGVsLCB0ZXh0KSB7XG5cdG5ldyBQYXJzZUNvbnRlbnQoZWwsIHRleHQpO1xufVxuXG5mdW5jdGlvbiBQYXJzZUNvbnRlbnQoZWwsIHRleHQpIHtcblx0dGhpcy5pbml0KGVsLCB0ZXh0KTtcbn1cblxuZnVuY3Rpb24gdmFsaWRMaW5rKGxpbmspIHtcblx0aWYgKGxpbmsuc3RhcnRzV2l0aCgnaHR0cDovLycpIHx8IGxpbmsuc3RhcnRzV2l0aCgnaHR0cHM6Ly8nKSlcblx0XHRyZXR1cm4gbGluaztcblx0ZWxzZVxuXHRcdHJldHVybiAnaHR0cDovLycgKyBsaW5rO1xufVxuXG5QYXJzZUNvbnRlbnQucHJvdG90eXBlLmluaXQgPSBmdW5jdGlvbihlbCwgdGV4dCkge1xuXHRpZiAodGV4dCkge1xuXHRcdHZhciBjbHMgPSB0aGlzO1xuXHRcdHZhciBjb250ZW50ID0gW1xuXHRcdFx0e1xuXHRcdFx0XHR0eXBlOiAnc3BhbicsXG5cdFx0XHRcdGNvbnRlbnQ6IHRleHRcblx0XHRcdH1cblx0XHRdO1xuXHRcdHRoaXMuYWRkTGluZUVuZGluZ3MoY29udGVudClcblx0XHRcdC50aGVuKGNscy5hZGRVcmxzKVxuXHRcdFx0LnRoZW4oY2xzLmFkZEVtYWlscylcblx0XHRcdC50aGVuKGZ1bmN0aW9uKGNvbnRlbnQpIHtcblx0XHRcdFx0Y2xzLndyaXRlTWVzc2FnZShlbCwgY29udGVudCk7XG5cdFx0XHR9KVxuXHRcdFx0LmNhdGNoKGZ1bmN0aW9uKGUpIHtcblx0XHRcdFx0Y29uc29sZS5lcnJvcihlKTtcblx0XHRcdH0pO1xuXHR9XG59O1xuXG5QYXJzZUNvbnRlbnQucHJvdG90eXBlLndyaXRlTWVzc2FnZSA9IGZ1bmN0aW9uKGVsLCBjb250ZW50KSB7XG5cdGNvbnRlbnQubWFwKGZ1bmN0aW9uKGl0ZW0pIHtcblx0XHR2YXIgcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoaXRlbS50eXBlKTtcblx0XHRpZiAoaXRlbS5jb250ZW50KVxuXHRcdFx0cy50ZXh0Q29udGVudCA9IGl0ZW0uY29udGVudDtcblx0XHRpZiAoaXRlbS5hdHRyaWJ1dGVzKSB7XG5cdFx0XHRPYmplY3Qua2V5cyhpdGVtLmF0dHJpYnV0ZXMpLm1hcChmdW5jdGlvbihrZXkpIHtcblx0XHRcdFx0cy5zZXRBdHRyaWJ1dGUoa2V5LCBpdGVtLmF0dHJpYnV0ZXNba2V5XSk7XG5cdFx0XHR9KTtcblx0XHR9XG5cdFx0ZWwuYXBwZW5kQ2hpbGQocyk7XG5cdH0pO1xufTtcblxuUGFyc2VDb250ZW50LnByb3RvdHlwZS5hZGRMaW5lRW5kaW5ncyA9IGZ1bmN0aW9uKGNvbnRlbnQpIHtcblx0cmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuXHRcdHRyeSB7XG5cdFx0XHR2YXIgbmV3Q29udGVudCA9IFtdO1xuXHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBjb250ZW50Lmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdHZhciBhcnIgPSBjb250ZW50W2ldLmNvbnRlbnQuc3BsaXQoJ1xcbicpO1xuXHRcdFx0XHRhcnIubWFwKGZ1bmN0aW9uKHZhbHVlLCBpbmRleCkge1xuXHRcdFx0XHRcdGlmICh2YWx1ZSkge1xuXHRcdFx0XHRcdFx0bmV3Q29udGVudC5wdXNoKHtcblx0XHRcdFx0XHRcdFx0Y29udGVudDogdmFsdWUsXG5cdFx0XHRcdFx0XHRcdHR5cGU6ICdzcGFuJ1xuXHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGlmIChhcnIubGVuZ3RoICE9IGluZGV4ICsgMSkge1xuXHRcdFx0XHRcdFx0bmV3Q29udGVudC5wdXNoKHtcblx0XHRcdFx0XHRcdFx0dHlwZTogJ2JyJ1xuXHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9KTtcblx0XHRcdH1cblx0XHRcdHJlc29sdmUobmV3Q29udGVudCk7XG5cdFx0fSBjYXRjaCAoZSkge1xuXHRcdFx0cmVqZWN0KGUpO1xuXHRcdH1cblx0fSk7XG59O1xuXG5QYXJzZUNvbnRlbnQucHJvdG90eXBlLmFkZFVybHMgPSBmdW5jdGlvbihjb250ZW50KSB7XG5cdHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcblx0XHR0cnkge1xuXHRcdFx0dmFyIG5ld0NvbnRlbnQgPSBbXTtcblx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgY29udGVudC5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRpZiAoY29udGVudFtpXS5jb250ZW50KSB7XG5cdFx0XHRcdFx0dmFyIGV4cCA9IC8oKChodHRwcz86XFwvXFwvKXwod3d3XFwuKSlbXlxcc10rKS9naTtcblx0XHRcdFx0XHR2YXIgbGlua2VkID0gY29udGVudFtpXS5jb250ZW50LnJlcGxhY2UoZXhwLCd8fHwkMXx8fCcpO1xuXHRcdFx0XHRcdHZhciBhcnIgPSBsaW5rZWQuc3BsaXQoJ3x8fCcpO1xuXHRcdFx0XHRcdGFyci5tYXAoZnVuY3Rpb24odmFsdWUpIHtcblx0XHRcdFx0XHRcdHZhciBuZXd0ZXh0ID0gdmFsdWUucmVwbGFjZShleHAsICc8YSBocmVmPVwiJDFcIiB0YXJnZXQ9XCJfYmxhbmtcIj4kMTwvYT4nKTtcblx0XHRcdFx0XHRcdGlmIChuZXd0ZXh0ID09PSB2YWx1ZSkge1xuXHRcdFx0XHRcdFx0XHRuZXdDb250ZW50LnB1c2goe1xuXHRcdFx0XHRcdFx0XHRcdGNvbnRlbnQ6IHZhbHVlLFxuXHRcdFx0XHRcdFx0XHRcdHR5cGU6IGNvbnRlbnRbaV0udHlwZSxcblx0XHRcdFx0XHRcdFx0XHRhdHRyaWJ1dGVzOiBjb250ZW50W2ldLmF0dHJpYnV0ZXNcblx0XHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHRuZXdDb250ZW50LnB1c2goe1xuXHRcdFx0XHRcdFx0XHRcdGNvbnRlbnQ6IHZhbHVlLFxuXHRcdFx0XHRcdFx0XHRcdHR5cGU6ICdhJyxcblx0XHRcdFx0XHRcdFx0XHRhdHRyaWJ1dGVzOiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRocmVmOiB2YWxpZExpbmsodmFsdWUpLFxuXHRcdFx0XHRcdFx0XHRcdFx0dGFyZ2V0OiAnX2JsYW5rJ1xuXHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0bmV3Q29udGVudC5wdXNoKHtcblx0XHRcdFx0XHRcdHR5cGU6IGNvbnRlbnRbaV0udHlwZSxcblx0XHRcdFx0XHRcdGNvbnRlbnQ6IGNvbnRlbnRbaV0uY29udGVudCxcblx0XHRcdFx0XHRcdGF0dHJpYnV0ZXM6IGNvbnRlbnRbaV0uYXR0cmlidXRlc1xuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRyZXNvbHZlKG5ld0NvbnRlbnQpO1xuXHRcdH0gY2F0Y2ggKGUpIHtcblx0XHRcdHJlamVjdChlKTtcblx0XHR9XG5cdH0pO1xufTtcblxuUGFyc2VDb250ZW50LnByb3RvdHlwZS5hZGRFbWFpbHMgPSBmdW5jdGlvbihjb250ZW50KSB7XG5cdHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcblx0XHR0cnkge1xuXHRcdFx0dmFyIG5ld0NvbnRlbnQgPSBbXTtcblx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgY29udGVudC5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRpZiAoY29udGVudFtpXS5jb250ZW50KSB7XG5cdFx0XHRcdFx0dmFyIGV4cCA9IC8oW2EtekEtWjAtOS5fLV0rQFthLXpBLVowLTkuXy1dK1xcLlthLXpBLVowLTkuXy1dKykvZ2k7XG5cdFx0XHRcdFx0dmFyIGxpbmtlZCA9IGNvbnRlbnRbaV0uY29udGVudC5yZXBsYWNlKGV4cCwnfHx8JDF8fHwnKTtcblx0XHRcdFx0XHR2YXIgYXJyID0gbGlua2VkLnNwbGl0KCd8fHwnKTtcblx0XHRcdFx0XHRhcnIubWFwKGZ1bmN0aW9uKHZhbHVlKSB7XG5cdFx0XHRcdFx0XHR2YXIgbmV3dGV4dCA9IHZhbHVlLnJlcGxhY2UoZXhwLCAnPGEgaHJlZj1cIm1haWx0bzokMVwiIHRhcmdldD1cIl9ibGFua1wiPiQxPC9hPicpO1xuXHRcdFx0XHRcdFx0aWYgKG5ld3RleHQgPT09IHZhbHVlKSB7XG5cdFx0XHRcdFx0XHRcdG5ld0NvbnRlbnQucHVzaCh7XG5cdFx0XHRcdFx0XHRcdFx0Y29udGVudDogdmFsdWUsXG5cdFx0XHRcdFx0XHRcdFx0dHlwZTogY29udGVudFtpXS50eXBlLFxuXHRcdFx0XHRcdFx0XHRcdGF0dHJpYnV0ZXM6IGNvbnRlbnRbaV0uYXR0cmlidXRlc1xuXHRcdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdG5ld0NvbnRlbnQucHVzaCh7XG5cdFx0XHRcdFx0XHRcdFx0Y29udGVudDogdmFsdWUsXG5cdFx0XHRcdFx0XHRcdFx0dHlwZTogJ2EnLFxuXHRcdFx0XHRcdFx0XHRcdGF0dHJpYnV0ZXM6IHtcblx0XHRcdFx0XHRcdFx0XHRcdGhyZWY6ICdtYWlsdG86JyArIHZhbHVlLFxuXHRcdFx0XHRcdFx0XHRcdFx0dGFyZ2V0OiAnX2JsYW5rJ1xuXHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0bmV3Q29udGVudC5wdXNoKHtcblx0XHRcdFx0XHRcdHR5cGU6IGNvbnRlbnRbaV0udHlwZSxcblx0XHRcdFx0XHRcdGNvbnRlbnQ6IGNvbnRlbnRbaV0uY29udGVudCxcblx0XHRcdFx0XHRcdGF0dHJpYnV0ZXM6IGNvbnRlbnRbaV0uYXR0cmlidXRlc1xuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRyZXNvbHZlKG5ld0NvbnRlbnQpO1xuXHRcdH0gY2F0Y2ggKGUpIHtcblx0XHRcdHJlamVjdChlKTtcblx0XHR9XG5cdH0pO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSB3cml0ZU1lc3NhZ2U7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL3V0aWxzL3dyaXRlTWVzc2FnZS5qc1xuICoqIG1vZHVsZSBpZCA9IDM2XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvKiFcbiAqIEBvdmVydmlldyBlczYtcHJvbWlzZSAtIGEgdGlueSBpbXBsZW1lbnRhdGlvbiBvZiBQcm9taXNlcy9BKy5cbiAqIEBjb3B5cmlnaHQgQ29weXJpZ2h0IChjKSAyMDE0IFllaHVkYSBLYXR6LCBUb20gRGFsZSwgU3RlZmFuIFBlbm5lciBhbmQgY29udHJpYnV0b3JzIChDb252ZXJzaW9uIHRvIEVTNiBBUEkgYnkgSmFrZSBBcmNoaWJhbGQpXG4gKiBAbGljZW5zZSAgIExpY2Vuc2VkIHVuZGVyIE1JVCBsaWNlbnNlXG4gKiAgICAgICAgICAgIFNlZSBodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20vamFrZWFyY2hpYmFsZC9lczYtcHJvbWlzZS9tYXN0ZXIvTElDRU5TRVxuICogQHZlcnNpb24gICAzLjIuMVxuICovXG5cbihmdW5jdGlvbigpIHtcbiAgICBcInVzZSBzdHJpY3RcIjtcbiAgICBmdW5jdGlvbiBsaWIkZXM2JHByb21pc2UkdXRpbHMkJG9iamVjdE9yRnVuY3Rpb24oeCkge1xuICAgICAgcmV0dXJuIHR5cGVvZiB4ID09PSAnZnVuY3Rpb24nIHx8ICh0eXBlb2YgeCA9PT0gJ29iamVjdCcgJiYgeCAhPT0gbnVsbCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbGliJGVzNiRwcm9taXNlJHV0aWxzJCRpc0Z1bmN0aW9uKHgpIHtcbiAgICAgIHJldHVybiB0eXBlb2YgeCA9PT0gJ2Z1bmN0aW9uJztcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBsaWIkZXM2JHByb21pc2UkdXRpbHMkJGlzTWF5YmVUaGVuYWJsZSh4KSB7XG4gICAgICByZXR1cm4gdHlwZW9mIHggPT09ICdvYmplY3QnICYmIHggIT09IG51bGw7XG4gICAgfVxuXG4gICAgdmFyIGxpYiRlczYkcHJvbWlzZSR1dGlscyQkX2lzQXJyYXk7XG4gICAgaWYgKCFBcnJheS5pc0FycmF5KSB7XG4gICAgICBsaWIkZXM2JHByb21pc2UkdXRpbHMkJF9pc0FycmF5ID0gZnVuY3Rpb24gKHgpIHtcbiAgICAgICAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh4KSA9PT0gJ1tvYmplY3QgQXJyYXldJztcbiAgICAgIH07XG4gICAgfSBlbHNlIHtcbiAgICAgIGxpYiRlczYkcHJvbWlzZSR1dGlscyQkX2lzQXJyYXkgPSBBcnJheS5pc0FycmF5O1xuICAgIH1cblxuICAgIHZhciBsaWIkZXM2JHByb21pc2UkdXRpbHMkJGlzQXJyYXkgPSBsaWIkZXM2JHByb21pc2UkdXRpbHMkJF9pc0FycmF5O1xuICAgIHZhciBsaWIkZXM2JHByb21pc2UkYXNhcCQkbGVuID0gMDtcbiAgICB2YXIgbGliJGVzNiRwcm9taXNlJGFzYXAkJHZlcnR4TmV4dDtcbiAgICB2YXIgbGliJGVzNiRwcm9taXNlJGFzYXAkJGN1c3RvbVNjaGVkdWxlckZuO1xuXG4gICAgdmFyIGxpYiRlczYkcHJvbWlzZSRhc2FwJCRhc2FwID0gZnVuY3Rpb24gYXNhcChjYWxsYmFjaywgYXJnKSB7XG4gICAgICBsaWIkZXM2JHByb21pc2UkYXNhcCQkcXVldWVbbGliJGVzNiRwcm9taXNlJGFzYXAkJGxlbl0gPSBjYWxsYmFjaztcbiAgICAgIGxpYiRlczYkcHJvbWlzZSRhc2FwJCRxdWV1ZVtsaWIkZXM2JHByb21pc2UkYXNhcCQkbGVuICsgMV0gPSBhcmc7XG4gICAgICBsaWIkZXM2JHByb21pc2UkYXNhcCQkbGVuICs9IDI7XG4gICAgICBpZiAobGliJGVzNiRwcm9taXNlJGFzYXAkJGxlbiA9PT0gMikge1xuICAgICAgICAvLyBJZiBsZW4gaXMgMiwgdGhhdCBtZWFucyB0aGF0IHdlIG5lZWQgdG8gc2NoZWR1bGUgYW4gYXN5bmMgZmx1c2guXG4gICAgICAgIC8vIElmIGFkZGl0aW9uYWwgY2FsbGJhY2tzIGFyZSBxdWV1ZWQgYmVmb3JlIHRoZSBxdWV1ZSBpcyBmbHVzaGVkLCB0aGV5XG4gICAgICAgIC8vIHdpbGwgYmUgcHJvY2Vzc2VkIGJ5IHRoaXMgZmx1c2ggdGhhdCB3ZSBhcmUgc2NoZWR1bGluZy5cbiAgICAgICAgaWYgKGxpYiRlczYkcHJvbWlzZSRhc2FwJCRjdXN0b21TY2hlZHVsZXJGbikge1xuICAgICAgICAgIGxpYiRlczYkcHJvbWlzZSRhc2FwJCRjdXN0b21TY2hlZHVsZXJGbihsaWIkZXM2JHByb21pc2UkYXNhcCQkZmx1c2gpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGxpYiRlczYkcHJvbWlzZSRhc2FwJCRzY2hlZHVsZUZsdXNoKCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBsaWIkZXM2JHByb21pc2UkYXNhcCQkc2V0U2NoZWR1bGVyKHNjaGVkdWxlRm4pIHtcbiAgICAgIGxpYiRlczYkcHJvbWlzZSRhc2FwJCRjdXN0b21TY2hlZHVsZXJGbiA9IHNjaGVkdWxlRm47XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbGliJGVzNiRwcm9taXNlJGFzYXAkJHNldEFzYXAoYXNhcEZuKSB7XG4gICAgICBsaWIkZXM2JHByb21pc2UkYXNhcCQkYXNhcCA9IGFzYXBGbjtcbiAgICB9XG5cbiAgICB2YXIgbGliJGVzNiRwcm9taXNlJGFzYXAkJGJyb3dzZXJXaW5kb3cgPSAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpID8gd2luZG93IDogdW5kZWZpbmVkO1xuICAgIHZhciBsaWIkZXM2JHByb21pc2UkYXNhcCQkYnJvd3Nlckdsb2JhbCA9IGxpYiRlczYkcHJvbWlzZSRhc2FwJCRicm93c2VyV2luZG93IHx8IHt9O1xuICAgIHZhciBsaWIkZXM2JHByb21pc2UkYXNhcCQkQnJvd3Nlck11dGF0aW9uT2JzZXJ2ZXIgPSBsaWIkZXM2JHByb21pc2UkYXNhcCQkYnJvd3Nlckdsb2JhbC5NdXRhdGlvbk9ic2VydmVyIHx8IGxpYiRlczYkcHJvbWlzZSRhc2FwJCRicm93c2VyR2xvYmFsLldlYktpdE11dGF0aW9uT2JzZXJ2ZXI7XG4gICAgdmFyIGxpYiRlczYkcHJvbWlzZSRhc2FwJCRpc05vZGUgPSB0eXBlb2Ygc2VsZiA9PT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIHByb2Nlc3MgIT09ICd1bmRlZmluZWQnICYmIHt9LnRvU3RyaW5nLmNhbGwocHJvY2VzcykgPT09ICdbb2JqZWN0IHByb2Nlc3NdJztcblxuICAgIC8vIHRlc3QgZm9yIHdlYiB3b3JrZXIgYnV0IG5vdCBpbiBJRTEwXG4gICAgdmFyIGxpYiRlczYkcHJvbWlzZSRhc2FwJCRpc1dvcmtlciA9IHR5cGVvZiBVaW50OENsYW1wZWRBcnJheSAhPT0gJ3VuZGVmaW5lZCcgJiZcbiAgICAgIHR5cGVvZiBpbXBvcnRTY3JpcHRzICE9PSAndW5kZWZpbmVkJyAmJlxuICAgICAgdHlwZW9mIE1lc3NhZ2VDaGFubmVsICE9PSAndW5kZWZpbmVkJztcblxuICAgIC8vIG5vZGVcbiAgICBmdW5jdGlvbiBsaWIkZXM2JHByb21pc2UkYXNhcCQkdXNlTmV4dFRpY2soKSB7XG4gICAgICAvLyBub2RlIHZlcnNpb24gMC4xMC54IGRpc3BsYXlzIGEgZGVwcmVjYXRpb24gd2FybmluZyB3aGVuIG5leHRUaWNrIGlzIHVzZWQgcmVjdXJzaXZlbHlcbiAgICAgIC8vIHNlZSBodHRwczovL2dpdGh1Yi5jb20vY3Vqb2pzL3doZW4vaXNzdWVzLzQxMCBmb3IgZGV0YWlsc1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgICAgICBwcm9jZXNzLm5leHRUaWNrKGxpYiRlczYkcHJvbWlzZSRhc2FwJCRmbHVzaCk7XG4gICAgICB9O1xuICAgIH1cblxuICAgIC8vIHZlcnR4XG4gICAgZnVuY3Rpb24gbGliJGVzNiRwcm9taXNlJGFzYXAkJHVzZVZlcnR4VGltZXIoKSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgICAgIGxpYiRlczYkcHJvbWlzZSRhc2FwJCR2ZXJ0eE5leHQobGliJGVzNiRwcm9taXNlJGFzYXAkJGZsdXNoKTtcbiAgICAgIH07XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbGliJGVzNiRwcm9taXNlJGFzYXAkJHVzZU11dGF0aW9uT2JzZXJ2ZXIoKSB7XG4gICAgICB2YXIgaXRlcmF0aW9ucyA9IDA7XG4gICAgICB2YXIgb2JzZXJ2ZXIgPSBuZXcgbGliJGVzNiRwcm9taXNlJGFzYXAkJEJyb3dzZXJNdXRhdGlvbk9ic2VydmVyKGxpYiRlczYkcHJvbWlzZSRhc2FwJCRmbHVzaCk7XG4gICAgICB2YXIgbm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKCcnKTtcbiAgICAgIG9ic2VydmVyLm9ic2VydmUobm9kZSwgeyBjaGFyYWN0ZXJEYXRhOiB0cnVlIH0pO1xuXG4gICAgICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgICAgIG5vZGUuZGF0YSA9IChpdGVyYXRpb25zID0gKytpdGVyYXRpb25zICUgMik7XG4gICAgICB9O1xuICAgIH1cblxuICAgIC8vIHdlYiB3b3JrZXJcbiAgICBmdW5jdGlvbiBsaWIkZXM2JHByb21pc2UkYXNhcCQkdXNlTWVzc2FnZUNoYW5uZWwoKSB7XG4gICAgICB2YXIgY2hhbm5lbCA9IG5ldyBNZXNzYWdlQ2hhbm5lbCgpO1xuICAgICAgY2hhbm5lbC5wb3J0MS5vbm1lc3NhZ2UgPSBsaWIkZXM2JHByb21pc2UkYXNhcCQkZmx1c2g7XG4gICAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICBjaGFubmVsLnBvcnQyLnBvc3RNZXNzYWdlKDApO1xuICAgICAgfTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBsaWIkZXM2JHByb21pc2UkYXNhcCQkdXNlU2V0VGltZW91dCgpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICAgICAgc2V0VGltZW91dChsaWIkZXM2JHByb21pc2UkYXNhcCQkZmx1c2gsIDEpO1xuICAgICAgfTtcbiAgICB9XG5cbiAgICB2YXIgbGliJGVzNiRwcm9taXNlJGFzYXAkJHF1ZXVlID0gbmV3IEFycmF5KDEwMDApO1xuICAgIGZ1bmN0aW9uIGxpYiRlczYkcHJvbWlzZSRhc2FwJCRmbHVzaCgpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGliJGVzNiRwcm9taXNlJGFzYXAkJGxlbjsgaSs9Mikge1xuICAgICAgICB2YXIgY2FsbGJhY2sgPSBsaWIkZXM2JHByb21pc2UkYXNhcCQkcXVldWVbaV07XG4gICAgICAgIHZhciBhcmcgPSBsaWIkZXM2JHByb21pc2UkYXNhcCQkcXVldWVbaSsxXTtcblxuICAgICAgICBjYWxsYmFjayhhcmcpO1xuXG4gICAgICAgIGxpYiRlczYkcHJvbWlzZSRhc2FwJCRxdWV1ZVtpXSA9IHVuZGVmaW5lZDtcbiAgICAgICAgbGliJGVzNiRwcm9taXNlJGFzYXAkJHF1ZXVlW2krMV0gPSB1bmRlZmluZWQ7XG4gICAgICB9XG5cbiAgICAgIGxpYiRlczYkcHJvbWlzZSRhc2FwJCRsZW4gPSAwO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGxpYiRlczYkcHJvbWlzZSRhc2FwJCRhdHRlbXB0VmVydHgoKSB7XG4gICAgICB0cnkge1xuICAgICAgICB2YXIgciA9IHJlcXVpcmU7XG4gICAgICAgIHZhciB2ZXJ0eCA9IHIoJ3ZlcnR4Jyk7XG4gICAgICAgIGxpYiRlczYkcHJvbWlzZSRhc2FwJCR2ZXJ0eE5leHQgPSB2ZXJ0eC5ydW5Pbkxvb3AgfHwgdmVydHgucnVuT25Db250ZXh0O1xuICAgICAgICByZXR1cm4gbGliJGVzNiRwcm9taXNlJGFzYXAkJHVzZVZlcnR4VGltZXIoKTtcbiAgICAgIH0gY2F0Y2goZSkge1xuICAgICAgICByZXR1cm4gbGliJGVzNiRwcm9taXNlJGFzYXAkJHVzZVNldFRpbWVvdXQoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIgbGliJGVzNiRwcm9taXNlJGFzYXAkJHNjaGVkdWxlRmx1c2g7XG4gICAgLy8gRGVjaWRlIHdoYXQgYXN5bmMgbWV0aG9kIHRvIHVzZSB0byB0cmlnZ2VyaW5nIHByb2Nlc3Npbmcgb2YgcXVldWVkIGNhbGxiYWNrczpcbiAgICBpZiAobGliJGVzNiRwcm9taXNlJGFzYXAkJGlzTm9kZSkge1xuICAgICAgbGliJGVzNiRwcm9taXNlJGFzYXAkJHNjaGVkdWxlRmx1c2ggPSBsaWIkZXM2JHByb21pc2UkYXNhcCQkdXNlTmV4dFRpY2soKTtcbiAgICB9IGVsc2UgaWYgKGxpYiRlczYkcHJvbWlzZSRhc2FwJCRCcm93c2VyTXV0YXRpb25PYnNlcnZlcikge1xuICAgICAgbGliJGVzNiRwcm9taXNlJGFzYXAkJHNjaGVkdWxlRmx1c2ggPSBsaWIkZXM2JHByb21pc2UkYXNhcCQkdXNlTXV0YXRpb25PYnNlcnZlcigpO1xuICAgIH0gZWxzZSBpZiAobGliJGVzNiRwcm9taXNlJGFzYXAkJGlzV29ya2VyKSB7XG4gICAgICBsaWIkZXM2JHByb21pc2UkYXNhcCQkc2NoZWR1bGVGbHVzaCA9IGxpYiRlczYkcHJvbWlzZSRhc2FwJCR1c2VNZXNzYWdlQ2hhbm5lbCgpO1xuICAgIH0gZWxzZSBpZiAobGliJGVzNiRwcm9taXNlJGFzYXAkJGJyb3dzZXJXaW5kb3cgPT09IHVuZGVmaW5lZCAmJiB0eXBlb2YgcmVxdWlyZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgbGliJGVzNiRwcm9taXNlJGFzYXAkJHNjaGVkdWxlRmx1c2ggPSBsaWIkZXM2JHByb21pc2UkYXNhcCQkYXR0ZW1wdFZlcnR4KCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGxpYiRlczYkcHJvbWlzZSRhc2FwJCRzY2hlZHVsZUZsdXNoID0gbGliJGVzNiRwcm9taXNlJGFzYXAkJHVzZVNldFRpbWVvdXQoKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gbGliJGVzNiRwcm9taXNlJHRoZW4kJHRoZW4ob25GdWxmaWxsbWVudCwgb25SZWplY3Rpb24pIHtcbiAgICAgIHZhciBwYXJlbnQgPSB0aGlzO1xuXG4gICAgICB2YXIgY2hpbGQgPSBuZXcgdGhpcy5jb25zdHJ1Y3RvcihsaWIkZXM2JHByb21pc2UkJGludGVybmFsJCRub29wKTtcblxuICAgICAgaWYgKGNoaWxkW2xpYiRlczYkcHJvbWlzZSQkaW50ZXJuYWwkJFBST01JU0VfSURdID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgbGliJGVzNiRwcm9taXNlJCRpbnRlcm5hbCQkbWFrZVByb21pc2UoY2hpbGQpO1xuICAgICAgfVxuXG4gICAgICB2YXIgc3RhdGUgPSBwYXJlbnQuX3N0YXRlO1xuXG4gICAgICBpZiAoc3RhdGUpIHtcbiAgICAgICAgdmFyIGNhbGxiYWNrID0gYXJndW1lbnRzW3N0YXRlIC0gMV07XG4gICAgICAgIGxpYiRlczYkcHJvbWlzZSRhc2FwJCRhc2FwKGZ1bmN0aW9uKCl7XG4gICAgICAgICAgbGliJGVzNiRwcm9taXNlJCRpbnRlcm5hbCQkaW52b2tlQ2FsbGJhY2soc3RhdGUsIGNoaWxkLCBjYWxsYmFjaywgcGFyZW50Ll9yZXN1bHQpO1xuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGxpYiRlczYkcHJvbWlzZSQkaW50ZXJuYWwkJHN1YnNjcmliZShwYXJlbnQsIGNoaWxkLCBvbkZ1bGZpbGxtZW50LCBvblJlamVjdGlvbik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjaGlsZDtcbiAgICB9XG4gICAgdmFyIGxpYiRlczYkcHJvbWlzZSR0aGVuJCRkZWZhdWx0ID0gbGliJGVzNiRwcm9taXNlJHRoZW4kJHRoZW47XG4gICAgZnVuY3Rpb24gbGliJGVzNiRwcm9taXNlJHByb21pc2UkcmVzb2x2ZSQkcmVzb2x2ZShvYmplY3QpIHtcbiAgICAgIC8qanNoaW50IHZhbGlkdGhpczp0cnVlICovXG4gICAgICB2YXIgQ29uc3RydWN0b3IgPSB0aGlzO1xuXG4gICAgICBpZiAob2JqZWN0ICYmIHR5cGVvZiBvYmplY3QgPT09ICdvYmplY3QnICYmIG9iamVjdC5jb25zdHJ1Y3RvciA9PT0gQ29uc3RydWN0b3IpIHtcbiAgICAgICAgcmV0dXJuIG9iamVjdDtcbiAgICAgIH1cblxuICAgICAgdmFyIHByb21pc2UgPSBuZXcgQ29uc3RydWN0b3IobGliJGVzNiRwcm9taXNlJCRpbnRlcm5hbCQkbm9vcCk7XG4gICAgICBsaWIkZXM2JHByb21pc2UkJGludGVybmFsJCRyZXNvbHZlKHByb21pc2UsIG9iamVjdCk7XG4gICAgICByZXR1cm4gcHJvbWlzZTtcbiAgICB9XG4gICAgdmFyIGxpYiRlczYkcHJvbWlzZSRwcm9taXNlJHJlc29sdmUkJGRlZmF1bHQgPSBsaWIkZXM2JHByb21pc2UkcHJvbWlzZSRyZXNvbHZlJCRyZXNvbHZlO1xuICAgIHZhciBsaWIkZXM2JHByb21pc2UkJGludGVybmFsJCRQUk9NSVNFX0lEID0gTWF0aC5yYW5kb20oKS50b1N0cmluZygzNikuc3Vic3RyaW5nKDE2KTtcblxuICAgIGZ1bmN0aW9uIGxpYiRlczYkcHJvbWlzZSQkaW50ZXJuYWwkJG5vb3AoKSB7fVxuXG4gICAgdmFyIGxpYiRlczYkcHJvbWlzZSQkaW50ZXJuYWwkJFBFTkRJTkcgICA9IHZvaWQgMDtcbiAgICB2YXIgbGliJGVzNiRwcm9taXNlJCRpbnRlcm5hbCQkRlVMRklMTEVEID0gMTtcbiAgICB2YXIgbGliJGVzNiRwcm9taXNlJCRpbnRlcm5hbCQkUkVKRUNURUQgID0gMjtcblxuICAgIHZhciBsaWIkZXM2JHByb21pc2UkJGludGVybmFsJCRHRVRfVEhFTl9FUlJPUiA9IG5ldyBsaWIkZXM2JHByb21pc2UkJGludGVybmFsJCRFcnJvck9iamVjdCgpO1xuXG4gICAgZnVuY3Rpb24gbGliJGVzNiRwcm9taXNlJCRpbnRlcm5hbCQkc2VsZkZ1bGZpbGxtZW50KCkge1xuICAgICAgcmV0dXJuIG5ldyBUeXBlRXJyb3IoXCJZb3UgY2Fubm90IHJlc29sdmUgYSBwcm9taXNlIHdpdGggaXRzZWxmXCIpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGxpYiRlczYkcHJvbWlzZSQkaW50ZXJuYWwkJGNhbm5vdFJldHVybk93bigpIHtcbiAgICAgIHJldHVybiBuZXcgVHlwZUVycm9yKCdBIHByb21pc2VzIGNhbGxiYWNrIGNhbm5vdCByZXR1cm4gdGhhdCBzYW1lIHByb21pc2UuJyk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbGliJGVzNiRwcm9taXNlJCRpbnRlcm5hbCQkZ2V0VGhlbihwcm9taXNlKSB7XG4gICAgICB0cnkge1xuICAgICAgICByZXR1cm4gcHJvbWlzZS50aGVuO1xuICAgICAgfSBjYXRjaChlcnJvcikge1xuICAgICAgICBsaWIkZXM2JHByb21pc2UkJGludGVybmFsJCRHRVRfVEhFTl9FUlJPUi5lcnJvciA9IGVycm9yO1xuICAgICAgICByZXR1cm4gbGliJGVzNiRwcm9taXNlJCRpbnRlcm5hbCQkR0VUX1RIRU5fRVJST1I7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbGliJGVzNiRwcm9taXNlJCRpbnRlcm5hbCQkdHJ5VGhlbih0aGVuLCB2YWx1ZSwgZnVsZmlsbG1lbnRIYW5kbGVyLCByZWplY3Rpb25IYW5kbGVyKSB7XG4gICAgICB0cnkge1xuICAgICAgICB0aGVuLmNhbGwodmFsdWUsIGZ1bGZpbGxtZW50SGFuZGxlciwgcmVqZWN0aW9uSGFuZGxlcik7XG4gICAgICB9IGNhdGNoKGUpIHtcbiAgICAgICAgcmV0dXJuIGU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbGliJGVzNiRwcm9taXNlJCRpbnRlcm5hbCQkaGFuZGxlRm9yZWlnblRoZW5hYmxlKHByb21pc2UsIHRoZW5hYmxlLCB0aGVuKSB7XG4gICAgICAgbGliJGVzNiRwcm9taXNlJGFzYXAkJGFzYXAoZnVuY3Rpb24ocHJvbWlzZSkge1xuICAgICAgICB2YXIgc2VhbGVkID0gZmFsc2U7XG4gICAgICAgIHZhciBlcnJvciA9IGxpYiRlczYkcHJvbWlzZSQkaW50ZXJuYWwkJHRyeVRoZW4odGhlbiwgdGhlbmFibGUsIGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICAgICAgaWYgKHNlYWxlZCkgeyByZXR1cm47IH1cbiAgICAgICAgICBzZWFsZWQgPSB0cnVlO1xuICAgICAgICAgIGlmICh0aGVuYWJsZSAhPT0gdmFsdWUpIHtcbiAgICAgICAgICAgIGxpYiRlczYkcHJvbWlzZSQkaW50ZXJuYWwkJHJlc29sdmUocHJvbWlzZSwgdmFsdWUpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBsaWIkZXM2JHByb21pc2UkJGludGVybmFsJCRmdWxmaWxsKHByb21pc2UsIHZhbHVlKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0sIGZ1bmN0aW9uKHJlYXNvbikge1xuICAgICAgICAgIGlmIChzZWFsZWQpIHsgcmV0dXJuOyB9XG4gICAgICAgICAgc2VhbGVkID0gdHJ1ZTtcblxuICAgICAgICAgIGxpYiRlczYkcHJvbWlzZSQkaW50ZXJuYWwkJHJlamVjdChwcm9taXNlLCByZWFzb24pO1xuICAgICAgICB9LCAnU2V0dGxlOiAnICsgKHByb21pc2UuX2xhYmVsIHx8ICcgdW5rbm93biBwcm9taXNlJykpO1xuXG4gICAgICAgIGlmICghc2VhbGVkICYmIGVycm9yKSB7XG4gICAgICAgICAgc2VhbGVkID0gdHJ1ZTtcbiAgICAgICAgICBsaWIkZXM2JHByb21pc2UkJGludGVybmFsJCRyZWplY3QocHJvbWlzZSwgZXJyb3IpO1xuICAgICAgICB9XG4gICAgICB9LCBwcm9taXNlKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBsaWIkZXM2JHByb21pc2UkJGludGVybmFsJCRoYW5kbGVPd25UaGVuYWJsZShwcm9taXNlLCB0aGVuYWJsZSkge1xuICAgICAgaWYgKHRoZW5hYmxlLl9zdGF0ZSA9PT0gbGliJGVzNiRwcm9taXNlJCRpbnRlcm5hbCQkRlVMRklMTEVEKSB7XG4gICAgICAgIGxpYiRlczYkcHJvbWlzZSQkaW50ZXJuYWwkJGZ1bGZpbGwocHJvbWlzZSwgdGhlbmFibGUuX3Jlc3VsdCk7XG4gICAgICB9IGVsc2UgaWYgKHRoZW5hYmxlLl9zdGF0ZSA9PT0gbGliJGVzNiRwcm9taXNlJCRpbnRlcm5hbCQkUkVKRUNURUQpIHtcbiAgICAgICAgbGliJGVzNiRwcm9taXNlJCRpbnRlcm5hbCQkcmVqZWN0KHByb21pc2UsIHRoZW5hYmxlLl9yZXN1bHQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbGliJGVzNiRwcm9taXNlJCRpbnRlcm5hbCQkc3Vic2NyaWJlKHRoZW5hYmxlLCB1bmRlZmluZWQsIGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICAgICAgbGliJGVzNiRwcm9taXNlJCRpbnRlcm5hbCQkcmVzb2x2ZShwcm9taXNlLCB2YWx1ZSk7XG4gICAgICAgIH0sIGZ1bmN0aW9uKHJlYXNvbikge1xuICAgICAgICAgIGxpYiRlczYkcHJvbWlzZSQkaW50ZXJuYWwkJHJlamVjdChwcm9taXNlLCByZWFzb24pO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBsaWIkZXM2JHByb21pc2UkJGludGVybmFsJCRoYW5kbGVNYXliZVRoZW5hYmxlKHByb21pc2UsIG1heWJlVGhlbmFibGUsIHRoZW4pIHtcbiAgICAgIGlmIChtYXliZVRoZW5hYmxlLmNvbnN0cnVjdG9yID09PSBwcm9taXNlLmNvbnN0cnVjdG9yICYmXG4gICAgICAgICAgdGhlbiA9PT0gbGliJGVzNiRwcm9taXNlJHRoZW4kJGRlZmF1bHQgJiZcbiAgICAgICAgICBjb25zdHJ1Y3Rvci5yZXNvbHZlID09PSBsaWIkZXM2JHByb21pc2UkcHJvbWlzZSRyZXNvbHZlJCRkZWZhdWx0KSB7XG4gICAgICAgIGxpYiRlczYkcHJvbWlzZSQkaW50ZXJuYWwkJGhhbmRsZU93blRoZW5hYmxlKHByb21pc2UsIG1heWJlVGhlbmFibGUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKHRoZW4gPT09IGxpYiRlczYkcHJvbWlzZSQkaW50ZXJuYWwkJEdFVF9USEVOX0VSUk9SKSB7XG4gICAgICAgICAgbGliJGVzNiRwcm9taXNlJCRpbnRlcm5hbCQkcmVqZWN0KHByb21pc2UsIGxpYiRlczYkcHJvbWlzZSQkaW50ZXJuYWwkJEdFVF9USEVOX0VSUk9SLmVycm9yKTtcbiAgICAgICAgfSBlbHNlIGlmICh0aGVuID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICBsaWIkZXM2JHByb21pc2UkJGludGVybmFsJCRmdWxmaWxsKHByb21pc2UsIG1heWJlVGhlbmFibGUpO1xuICAgICAgICB9IGVsc2UgaWYgKGxpYiRlczYkcHJvbWlzZSR1dGlscyQkaXNGdW5jdGlvbih0aGVuKSkge1xuICAgICAgICAgIGxpYiRlczYkcHJvbWlzZSQkaW50ZXJuYWwkJGhhbmRsZUZvcmVpZ25UaGVuYWJsZShwcm9taXNlLCBtYXliZVRoZW5hYmxlLCB0aGVuKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBsaWIkZXM2JHByb21pc2UkJGludGVybmFsJCRmdWxmaWxsKHByb21pc2UsIG1heWJlVGhlbmFibGUpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbGliJGVzNiRwcm9taXNlJCRpbnRlcm5hbCQkcmVzb2x2ZShwcm9taXNlLCB2YWx1ZSkge1xuICAgICAgaWYgKHByb21pc2UgPT09IHZhbHVlKSB7XG4gICAgICAgIGxpYiRlczYkcHJvbWlzZSQkaW50ZXJuYWwkJHJlamVjdChwcm9taXNlLCBsaWIkZXM2JHByb21pc2UkJGludGVybmFsJCRzZWxmRnVsZmlsbG1lbnQoKSk7XG4gICAgICB9IGVsc2UgaWYgKGxpYiRlczYkcHJvbWlzZSR1dGlscyQkb2JqZWN0T3JGdW5jdGlvbih2YWx1ZSkpIHtcbiAgICAgICAgbGliJGVzNiRwcm9taXNlJCRpbnRlcm5hbCQkaGFuZGxlTWF5YmVUaGVuYWJsZShwcm9taXNlLCB2YWx1ZSwgbGliJGVzNiRwcm9taXNlJCRpbnRlcm5hbCQkZ2V0VGhlbih2YWx1ZSkpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbGliJGVzNiRwcm9taXNlJCRpbnRlcm5hbCQkZnVsZmlsbChwcm9taXNlLCB2YWx1ZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbGliJGVzNiRwcm9taXNlJCRpbnRlcm5hbCQkcHVibGlzaFJlamVjdGlvbihwcm9taXNlKSB7XG4gICAgICBpZiAocHJvbWlzZS5fb25lcnJvcikge1xuICAgICAgICBwcm9taXNlLl9vbmVycm9yKHByb21pc2UuX3Jlc3VsdCk7XG4gICAgICB9XG5cbiAgICAgIGxpYiRlczYkcHJvbWlzZSQkaW50ZXJuYWwkJHB1Ymxpc2gocHJvbWlzZSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbGliJGVzNiRwcm9taXNlJCRpbnRlcm5hbCQkZnVsZmlsbChwcm9taXNlLCB2YWx1ZSkge1xuICAgICAgaWYgKHByb21pc2UuX3N0YXRlICE9PSBsaWIkZXM2JHByb21pc2UkJGludGVybmFsJCRQRU5ESU5HKSB7IHJldHVybjsgfVxuXG4gICAgICBwcm9taXNlLl9yZXN1bHQgPSB2YWx1ZTtcbiAgICAgIHByb21pc2UuX3N0YXRlID0gbGliJGVzNiRwcm9taXNlJCRpbnRlcm5hbCQkRlVMRklMTEVEO1xuXG4gICAgICBpZiAocHJvbWlzZS5fc3Vic2NyaWJlcnMubGVuZ3RoICE9PSAwKSB7XG4gICAgICAgIGxpYiRlczYkcHJvbWlzZSRhc2FwJCRhc2FwKGxpYiRlczYkcHJvbWlzZSQkaW50ZXJuYWwkJHB1Ymxpc2gsIHByb21pc2UpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGxpYiRlczYkcHJvbWlzZSQkaW50ZXJuYWwkJHJlamVjdChwcm9taXNlLCByZWFzb24pIHtcbiAgICAgIGlmIChwcm9taXNlLl9zdGF0ZSAhPT0gbGliJGVzNiRwcm9taXNlJCRpbnRlcm5hbCQkUEVORElORykgeyByZXR1cm47IH1cbiAgICAgIHByb21pc2UuX3N0YXRlID0gbGliJGVzNiRwcm9taXNlJCRpbnRlcm5hbCQkUkVKRUNURUQ7XG4gICAgICBwcm9taXNlLl9yZXN1bHQgPSByZWFzb247XG5cbiAgICAgIGxpYiRlczYkcHJvbWlzZSRhc2FwJCRhc2FwKGxpYiRlczYkcHJvbWlzZSQkaW50ZXJuYWwkJHB1Ymxpc2hSZWplY3Rpb24sIHByb21pc2UpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGxpYiRlczYkcHJvbWlzZSQkaW50ZXJuYWwkJHN1YnNjcmliZShwYXJlbnQsIGNoaWxkLCBvbkZ1bGZpbGxtZW50LCBvblJlamVjdGlvbikge1xuICAgICAgdmFyIHN1YnNjcmliZXJzID0gcGFyZW50Ll9zdWJzY3JpYmVycztcbiAgICAgIHZhciBsZW5ndGggPSBzdWJzY3JpYmVycy5sZW5ndGg7XG5cbiAgICAgIHBhcmVudC5fb25lcnJvciA9IG51bGw7XG5cbiAgICAgIHN1YnNjcmliZXJzW2xlbmd0aF0gPSBjaGlsZDtcbiAgICAgIHN1YnNjcmliZXJzW2xlbmd0aCArIGxpYiRlczYkcHJvbWlzZSQkaW50ZXJuYWwkJEZVTEZJTExFRF0gPSBvbkZ1bGZpbGxtZW50O1xuICAgICAgc3Vic2NyaWJlcnNbbGVuZ3RoICsgbGliJGVzNiRwcm9taXNlJCRpbnRlcm5hbCQkUkVKRUNURURdICA9IG9uUmVqZWN0aW9uO1xuXG4gICAgICBpZiAobGVuZ3RoID09PSAwICYmIHBhcmVudC5fc3RhdGUpIHtcbiAgICAgICAgbGliJGVzNiRwcm9taXNlJGFzYXAkJGFzYXAobGliJGVzNiRwcm9taXNlJCRpbnRlcm5hbCQkcHVibGlzaCwgcGFyZW50KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBsaWIkZXM2JHByb21pc2UkJGludGVybmFsJCRwdWJsaXNoKHByb21pc2UpIHtcbiAgICAgIHZhciBzdWJzY3JpYmVycyA9IHByb21pc2UuX3N1YnNjcmliZXJzO1xuICAgICAgdmFyIHNldHRsZWQgPSBwcm9taXNlLl9zdGF0ZTtcblxuICAgICAgaWYgKHN1YnNjcmliZXJzLmxlbmd0aCA9PT0gMCkgeyByZXR1cm47IH1cblxuICAgICAgdmFyIGNoaWxkLCBjYWxsYmFjaywgZGV0YWlsID0gcHJvbWlzZS5fcmVzdWx0O1xuXG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHN1YnNjcmliZXJzLmxlbmd0aDsgaSArPSAzKSB7XG4gICAgICAgIGNoaWxkID0gc3Vic2NyaWJlcnNbaV07XG4gICAgICAgIGNhbGxiYWNrID0gc3Vic2NyaWJlcnNbaSArIHNldHRsZWRdO1xuXG4gICAgICAgIGlmIChjaGlsZCkge1xuICAgICAgICAgIGxpYiRlczYkcHJvbWlzZSQkaW50ZXJuYWwkJGludm9rZUNhbGxiYWNrKHNldHRsZWQsIGNoaWxkLCBjYWxsYmFjaywgZGV0YWlsKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjYWxsYmFjayhkZXRhaWwpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHByb21pc2UuX3N1YnNjcmliZXJzLmxlbmd0aCA9IDA7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbGliJGVzNiRwcm9taXNlJCRpbnRlcm5hbCQkRXJyb3JPYmplY3QoKSB7XG4gICAgICB0aGlzLmVycm9yID0gbnVsbDtcbiAgICB9XG5cbiAgICB2YXIgbGliJGVzNiRwcm9taXNlJCRpbnRlcm5hbCQkVFJZX0NBVENIX0VSUk9SID0gbmV3IGxpYiRlczYkcHJvbWlzZSQkaW50ZXJuYWwkJEVycm9yT2JqZWN0KCk7XG5cbiAgICBmdW5jdGlvbiBsaWIkZXM2JHByb21pc2UkJGludGVybmFsJCR0cnlDYXRjaChjYWxsYmFjaywgZGV0YWlsKSB7XG4gICAgICB0cnkge1xuICAgICAgICByZXR1cm4gY2FsbGJhY2soZGV0YWlsKTtcbiAgICAgIH0gY2F0Y2goZSkge1xuICAgICAgICBsaWIkZXM2JHByb21pc2UkJGludGVybmFsJCRUUllfQ0FUQ0hfRVJST1IuZXJyb3IgPSBlO1xuICAgICAgICByZXR1cm4gbGliJGVzNiRwcm9taXNlJCRpbnRlcm5hbCQkVFJZX0NBVENIX0VSUk9SO1xuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGxpYiRlczYkcHJvbWlzZSQkaW50ZXJuYWwkJGludm9rZUNhbGxiYWNrKHNldHRsZWQsIHByb21pc2UsIGNhbGxiYWNrLCBkZXRhaWwpIHtcbiAgICAgIHZhciBoYXNDYWxsYmFjayA9IGxpYiRlczYkcHJvbWlzZSR1dGlscyQkaXNGdW5jdGlvbihjYWxsYmFjayksXG4gICAgICAgICAgdmFsdWUsIGVycm9yLCBzdWNjZWVkZWQsIGZhaWxlZDtcblxuICAgICAgaWYgKGhhc0NhbGxiYWNrKSB7XG4gICAgICAgIHZhbHVlID0gbGliJGVzNiRwcm9taXNlJCRpbnRlcm5hbCQkdHJ5Q2F0Y2goY2FsbGJhY2ssIGRldGFpbCk7XG5cbiAgICAgICAgaWYgKHZhbHVlID09PSBsaWIkZXM2JHByb21pc2UkJGludGVybmFsJCRUUllfQ0FUQ0hfRVJST1IpIHtcbiAgICAgICAgICBmYWlsZWQgPSB0cnVlO1xuICAgICAgICAgIGVycm9yID0gdmFsdWUuZXJyb3I7XG4gICAgICAgICAgdmFsdWUgPSBudWxsO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHN1Y2NlZWRlZCA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocHJvbWlzZSA9PT0gdmFsdWUpIHtcbiAgICAgICAgICBsaWIkZXM2JHByb21pc2UkJGludGVybmFsJCRyZWplY3QocHJvbWlzZSwgbGliJGVzNiRwcm9taXNlJCRpbnRlcm5hbCQkY2Fubm90UmV0dXJuT3duKCkpO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YWx1ZSA9IGRldGFpbDtcbiAgICAgICAgc3VjY2VlZGVkID0gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHByb21pc2UuX3N0YXRlICE9PSBsaWIkZXM2JHByb21pc2UkJGludGVybmFsJCRQRU5ESU5HKSB7XG4gICAgICAgIC8vIG5vb3BcbiAgICAgIH0gZWxzZSBpZiAoaGFzQ2FsbGJhY2sgJiYgc3VjY2VlZGVkKSB7XG4gICAgICAgIGxpYiRlczYkcHJvbWlzZSQkaW50ZXJuYWwkJHJlc29sdmUocHJvbWlzZSwgdmFsdWUpO1xuICAgICAgfSBlbHNlIGlmIChmYWlsZWQpIHtcbiAgICAgICAgbGliJGVzNiRwcm9taXNlJCRpbnRlcm5hbCQkcmVqZWN0KHByb21pc2UsIGVycm9yKTtcbiAgICAgIH0gZWxzZSBpZiAoc2V0dGxlZCA9PT0gbGliJGVzNiRwcm9taXNlJCRpbnRlcm5hbCQkRlVMRklMTEVEKSB7XG4gICAgICAgIGxpYiRlczYkcHJvbWlzZSQkaW50ZXJuYWwkJGZ1bGZpbGwocHJvbWlzZSwgdmFsdWUpO1xuICAgICAgfSBlbHNlIGlmIChzZXR0bGVkID09PSBsaWIkZXM2JHByb21pc2UkJGludGVybmFsJCRSRUpFQ1RFRCkge1xuICAgICAgICBsaWIkZXM2JHByb21pc2UkJGludGVybmFsJCRyZWplY3QocHJvbWlzZSwgdmFsdWUpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGxpYiRlczYkcHJvbWlzZSQkaW50ZXJuYWwkJGluaXRpYWxpemVQcm9taXNlKHByb21pc2UsIHJlc29sdmVyKSB7XG4gICAgICB0cnkge1xuICAgICAgICByZXNvbHZlcihmdW5jdGlvbiByZXNvbHZlUHJvbWlzZSh2YWx1ZSl7XG4gICAgICAgICAgbGliJGVzNiRwcm9taXNlJCRpbnRlcm5hbCQkcmVzb2x2ZShwcm9taXNlLCB2YWx1ZSk7XG4gICAgICAgIH0sIGZ1bmN0aW9uIHJlamVjdFByb21pc2UocmVhc29uKSB7XG4gICAgICAgICAgbGliJGVzNiRwcm9taXNlJCRpbnRlcm5hbCQkcmVqZWN0KHByb21pc2UsIHJlYXNvbik7XG4gICAgICAgIH0pO1xuICAgICAgfSBjYXRjaChlKSB7XG4gICAgICAgIGxpYiRlczYkcHJvbWlzZSQkaW50ZXJuYWwkJHJlamVjdChwcm9taXNlLCBlKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIgbGliJGVzNiRwcm9taXNlJCRpbnRlcm5hbCQkaWQgPSAwO1xuICAgIGZ1bmN0aW9uIGxpYiRlczYkcHJvbWlzZSQkaW50ZXJuYWwkJG5leHRJZCgpIHtcbiAgICAgIHJldHVybiBsaWIkZXM2JHByb21pc2UkJGludGVybmFsJCRpZCsrO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGxpYiRlczYkcHJvbWlzZSQkaW50ZXJuYWwkJG1ha2VQcm9taXNlKHByb21pc2UpIHtcbiAgICAgIHByb21pc2VbbGliJGVzNiRwcm9taXNlJCRpbnRlcm5hbCQkUFJPTUlTRV9JRF0gPSBsaWIkZXM2JHByb21pc2UkJGludGVybmFsJCRpZCsrO1xuICAgICAgcHJvbWlzZS5fc3RhdGUgPSB1bmRlZmluZWQ7XG4gICAgICBwcm9taXNlLl9yZXN1bHQgPSB1bmRlZmluZWQ7XG4gICAgICBwcm9taXNlLl9zdWJzY3JpYmVycyA9IFtdO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGxpYiRlczYkcHJvbWlzZSRwcm9taXNlJGFsbCQkYWxsKGVudHJpZXMpIHtcbiAgICAgIHJldHVybiBuZXcgbGliJGVzNiRwcm9taXNlJGVudW1lcmF0b3IkJGRlZmF1bHQodGhpcywgZW50cmllcykucHJvbWlzZTtcbiAgICB9XG4gICAgdmFyIGxpYiRlczYkcHJvbWlzZSRwcm9taXNlJGFsbCQkZGVmYXVsdCA9IGxpYiRlczYkcHJvbWlzZSRwcm9taXNlJGFsbCQkYWxsO1xuICAgIGZ1bmN0aW9uIGxpYiRlczYkcHJvbWlzZSRwcm9taXNlJHJhY2UkJHJhY2UoZW50cmllcykge1xuICAgICAgLypqc2hpbnQgdmFsaWR0aGlzOnRydWUgKi9cbiAgICAgIHZhciBDb25zdHJ1Y3RvciA9IHRoaXM7XG5cbiAgICAgIGlmICghbGliJGVzNiRwcm9taXNlJHV0aWxzJCRpc0FycmF5KGVudHJpZXMpKSB7XG4gICAgICAgIHJldHVybiBuZXcgQ29uc3RydWN0b3IoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgICAgcmVqZWN0KG5ldyBUeXBlRXJyb3IoJ1lvdSBtdXN0IHBhc3MgYW4gYXJyYXkgdG8gcmFjZS4nKSk7XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIG5ldyBDb25zdHJ1Y3RvcihmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgICB2YXIgbGVuZ3RoID0gZW50cmllcy5sZW5ndGg7XG4gICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgQ29uc3RydWN0b3IucmVzb2x2ZShlbnRyaWVzW2ldKS50aGVuKHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gICAgdmFyIGxpYiRlczYkcHJvbWlzZSRwcm9taXNlJHJhY2UkJGRlZmF1bHQgPSBsaWIkZXM2JHByb21pc2UkcHJvbWlzZSRyYWNlJCRyYWNlO1xuICAgIGZ1bmN0aW9uIGxpYiRlczYkcHJvbWlzZSRwcm9taXNlJHJlamVjdCQkcmVqZWN0KHJlYXNvbikge1xuICAgICAgLypqc2hpbnQgdmFsaWR0aGlzOnRydWUgKi9cbiAgICAgIHZhciBDb25zdHJ1Y3RvciA9IHRoaXM7XG4gICAgICB2YXIgcHJvbWlzZSA9IG5ldyBDb25zdHJ1Y3RvcihsaWIkZXM2JHByb21pc2UkJGludGVybmFsJCRub29wKTtcbiAgICAgIGxpYiRlczYkcHJvbWlzZSQkaW50ZXJuYWwkJHJlamVjdChwcm9taXNlLCByZWFzb24pO1xuICAgICAgcmV0dXJuIHByb21pc2U7XG4gICAgfVxuICAgIHZhciBsaWIkZXM2JHByb21pc2UkcHJvbWlzZSRyZWplY3QkJGRlZmF1bHQgPSBsaWIkZXM2JHByb21pc2UkcHJvbWlzZSRyZWplY3QkJHJlamVjdDtcblxuXG4gICAgZnVuY3Rpb24gbGliJGVzNiRwcm9taXNlJHByb21pc2UkJG5lZWRzUmVzb2x2ZXIoKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdZb3UgbXVzdCBwYXNzIGEgcmVzb2x2ZXIgZnVuY3Rpb24gYXMgdGhlIGZpcnN0IGFyZ3VtZW50IHRvIHRoZSBwcm9taXNlIGNvbnN0cnVjdG9yJyk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbGliJGVzNiRwcm9taXNlJHByb21pc2UkJG5lZWRzTmV3KCkge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkZhaWxlZCB0byBjb25zdHJ1Y3QgJ1Byb21pc2UnOiBQbGVhc2UgdXNlIHRoZSAnbmV3JyBvcGVyYXRvciwgdGhpcyBvYmplY3QgY29uc3RydWN0b3IgY2Fubm90IGJlIGNhbGxlZCBhcyBhIGZ1bmN0aW9uLlwiKTtcbiAgICB9XG5cbiAgICB2YXIgbGliJGVzNiRwcm9taXNlJHByb21pc2UkJGRlZmF1bHQgPSBsaWIkZXM2JHByb21pc2UkcHJvbWlzZSQkUHJvbWlzZTtcbiAgICAvKipcbiAgICAgIFByb21pc2Ugb2JqZWN0cyByZXByZXNlbnQgdGhlIGV2ZW50dWFsIHJlc3VsdCBvZiBhbiBhc3luY2hyb25vdXMgb3BlcmF0aW9uLiBUaGVcbiAgICAgIHByaW1hcnkgd2F5IG9mIGludGVyYWN0aW5nIHdpdGggYSBwcm9taXNlIGlzIHRocm91Z2ggaXRzIGB0aGVuYCBtZXRob2QsIHdoaWNoXG4gICAgICByZWdpc3RlcnMgY2FsbGJhY2tzIHRvIHJlY2VpdmUgZWl0aGVyIGEgcHJvbWlzZSdzIGV2ZW50dWFsIHZhbHVlIG9yIHRoZSByZWFzb25cbiAgICAgIHdoeSB0aGUgcHJvbWlzZSBjYW5ub3QgYmUgZnVsZmlsbGVkLlxuXG4gICAgICBUZXJtaW5vbG9neVxuICAgICAgLS0tLS0tLS0tLS1cblxuICAgICAgLSBgcHJvbWlzZWAgaXMgYW4gb2JqZWN0IG9yIGZ1bmN0aW9uIHdpdGggYSBgdGhlbmAgbWV0aG9kIHdob3NlIGJlaGF2aW9yIGNvbmZvcm1zIHRvIHRoaXMgc3BlY2lmaWNhdGlvbi5cbiAgICAgIC0gYHRoZW5hYmxlYCBpcyBhbiBvYmplY3Qgb3IgZnVuY3Rpb24gdGhhdCBkZWZpbmVzIGEgYHRoZW5gIG1ldGhvZC5cbiAgICAgIC0gYHZhbHVlYCBpcyBhbnkgbGVnYWwgSmF2YVNjcmlwdCB2YWx1ZSAoaW5jbHVkaW5nIHVuZGVmaW5lZCwgYSB0aGVuYWJsZSwgb3IgYSBwcm9taXNlKS5cbiAgICAgIC0gYGV4Y2VwdGlvbmAgaXMgYSB2YWx1ZSB0aGF0IGlzIHRocm93biB1c2luZyB0aGUgdGhyb3cgc3RhdGVtZW50LlxuICAgICAgLSBgcmVhc29uYCBpcyBhIHZhbHVlIHRoYXQgaW5kaWNhdGVzIHdoeSBhIHByb21pc2Ugd2FzIHJlamVjdGVkLlxuICAgICAgLSBgc2V0dGxlZGAgdGhlIGZpbmFsIHJlc3Rpbmcgc3RhdGUgb2YgYSBwcm9taXNlLCBmdWxmaWxsZWQgb3IgcmVqZWN0ZWQuXG5cbiAgICAgIEEgcHJvbWlzZSBjYW4gYmUgaW4gb25lIG9mIHRocmVlIHN0YXRlczogcGVuZGluZywgZnVsZmlsbGVkLCBvciByZWplY3RlZC5cblxuICAgICAgUHJvbWlzZXMgdGhhdCBhcmUgZnVsZmlsbGVkIGhhdmUgYSBmdWxmaWxsbWVudCB2YWx1ZSBhbmQgYXJlIGluIHRoZSBmdWxmaWxsZWRcbiAgICAgIHN0YXRlLiAgUHJvbWlzZXMgdGhhdCBhcmUgcmVqZWN0ZWQgaGF2ZSBhIHJlamVjdGlvbiByZWFzb24gYW5kIGFyZSBpbiB0aGVcbiAgICAgIHJlamVjdGVkIHN0YXRlLiAgQSBmdWxmaWxsbWVudCB2YWx1ZSBpcyBuZXZlciBhIHRoZW5hYmxlLlxuXG4gICAgICBQcm9taXNlcyBjYW4gYWxzbyBiZSBzYWlkIHRvICpyZXNvbHZlKiBhIHZhbHVlLiAgSWYgdGhpcyB2YWx1ZSBpcyBhbHNvIGFcbiAgICAgIHByb21pc2UsIHRoZW4gdGhlIG9yaWdpbmFsIHByb21pc2UncyBzZXR0bGVkIHN0YXRlIHdpbGwgbWF0Y2ggdGhlIHZhbHVlJ3NcbiAgICAgIHNldHRsZWQgc3RhdGUuICBTbyBhIHByb21pc2UgdGhhdCAqcmVzb2x2ZXMqIGEgcHJvbWlzZSB0aGF0IHJlamVjdHMgd2lsbFxuICAgICAgaXRzZWxmIHJlamVjdCwgYW5kIGEgcHJvbWlzZSB0aGF0ICpyZXNvbHZlcyogYSBwcm9taXNlIHRoYXQgZnVsZmlsbHMgd2lsbFxuICAgICAgaXRzZWxmIGZ1bGZpbGwuXG5cblxuICAgICAgQmFzaWMgVXNhZ2U6XG4gICAgICAtLS0tLS0tLS0tLS1cblxuICAgICAgYGBganNcbiAgICAgIHZhciBwcm9taXNlID0gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIC8vIG9uIHN1Y2Nlc3NcbiAgICAgICAgcmVzb2x2ZSh2YWx1ZSk7XG5cbiAgICAgICAgLy8gb24gZmFpbHVyZVxuICAgICAgICByZWplY3QocmVhc29uKTtcbiAgICAgIH0pO1xuXG4gICAgICBwcm9taXNlLnRoZW4oZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgICAgLy8gb24gZnVsZmlsbG1lbnRcbiAgICAgIH0sIGZ1bmN0aW9uKHJlYXNvbikge1xuICAgICAgICAvLyBvbiByZWplY3Rpb25cbiAgICAgIH0pO1xuICAgICAgYGBgXG5cbiAgICAgIEFkdmFuY2VkIFVzYWdlOlxuICAgICAgLS0tLS0tLS0tLS0tLS0tXG5cbiAgICAgIFByb21pc2VzIHNoaW5lIHdoZW4gYWJzdHJhY3RpbmcgYXdheSBhc3luY2hyb25vdXMgaW50ZXJhY3Rpb25zIHN1Y2ggYXNcbiAgICAgIGBYTUxIdHRwUmVxdWVzdGBzLlxuXG4gICAgICBgYGBqc1xuICAgICAgZnVuY3Rpb24gZ2V0SlNPTih1cmwpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCl7XG4gICAgICAgICAgdmFyIHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuXG4gICAgICAgICAgeGhyLm9wZW4oJ0dFVCcsIHVybCk7XG4gICAgICAgICAgeGhyLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGhhbmRsZXI7XG4gICAgICAgICAgeGhyLnJlc3BvbnNlVHlwZSA9ICdqc29uJztcbiAgICAgICAgICB4aHIuc2V0UmVxdWVzdEhlYWRlcignQWNjZXB0JywgJ2FwcGxpY2F0aW9uL2pzb24nKTtcbiAgICAgICAgICB4aHIuc2VuZCgpO1xuXG4gICAgICAgICAgZnVuY3Rpb24gaGFuZGxlcigpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnJlYWR5U3RhdGUgPT09IHRoaXMuRE9ORSkge1xuICAgICAgICAgICAgICBpZiAodGhpcy5zdGF0dXMgPT09IDIwMCkge1xuICAgICAgICAgICAgICAgIHJlc29sdmUodGhpcy5yZXNwb25zZSk7XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmVqZWN0KG5ldyBFcnJvcignZ2V0SlNPTjogYCcgKyB1cmwgKyAnYCBmYWlsZWQgd2l0aCBzdGF0dXM6IFsnICsgdGhpcy5zdGF0dXMgKyAnXScpKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH07XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICBnZXRKU09OKCcvcG9zdHMuanNvbicpLnRoZW4oZnVuY3Rpb24oanNvbikge1xuICAgICAgICAvLyBvbiBmdWxmaWxsbWVudFxuICAgICAgfSwgZnVuY3Rpb24ocmVhc29uKSB7XG4gICAgICAgIC8vIG9uIHJlamVjdGlvblxuICAgICAgfSk7XG4gICAgICBgYGBcblxuICAgICAgVW5saWtlIGNhbGxiYWNrcywgcHJvbWlzZXMgYXJlIGdyZWF0IGNvbXBvc2FibGUgcHJpbWl0aXZlcy5cblxuICAgICAgYGBganNcbiAgICAgIFByb21pc2UuYWxsKFtcbiAgICAgICAgZ2V0SlNPTignL3Bvc3RzJyksXG4gICAgICAgIGdldEpTT04oJy9jb21tZW50cycpXG4gICAgICBdKS50aGVuKGZ1bmN0aW9uKHZhbHVlcyl7XG4gICAgICAgIHZhbHVlc1swXSAvLyA9PiBwb3N0c0pTT05cbiAgICAgICAgdmFsdWVzWzFdIC8vID0+IGNvbW1lbnRzSlNPTlxuXG4gICAgICAgIHJldHVybiB2YWx1ZXM7XG4gICAgICB9KTtcbiAgICAgIGBgYFxuXG4gICAgICBAY2xhc3MgUHJvbWlzZVxuICAgICAgQHBhcmFtIHtmdW5jdGlvbn0gcmVzb2x2ZXJcbiAgICAgIFVzZWZ1bCBmb3IgdG9vbGluZy5cbiAgICAgIEBjb25zdHJ1Y3RvclxuICAgICovXG4gICAgZnVuY3Rpb24gbGliJGVzNiRwcm9taXNlJHByb21pc2UkJFByb21pc2UocmVzb2x2ZXIpIHtcbiAgICAgIHRoaXNbbGliJGVzNiRwcm9taXNlJCRpbnRlcm5hbCQkUFJPTUlTRV9JRF0gPSBsaWIkZXM2JHByb21pc2UkJGludGVybmFsJCRuZXh0SWQoKTtcbiAgICAgIHRoaXMuX3Jlc3VsdCA9IHRoaXMuX3N0YXRlID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fc3Vic2NyaWJlcnMgPSBbXTtcblxuICAgICAgaWYgKGxpYiRlczYkcHJvbWlzZSQkaW50ZXJuYWwkJG5vb3AgIT09IHJlc29sdmVyKSB7XG4gICAgICAgIHR5cGVvZiByZXNvbHZlciAhPT0gJ2Z1bmN0aW9uJyAmJiBsaWIkZXM2JHByb21pc2UkcHJvbWlzZSQkbmVlZHNSZXNvbHZlcigpO1xuICAgICAgICB0aGlzIGluc3RhbmNlb2YgbGliJGVzNiRwcm9taXNlJHByb21pc2UkJFByb21pc2UgPyBsaWIkZXM2JHByb21pc2UkJGludGVybmFsJCRpbml0aWFsaXplUHJvbWlzZSh0aGlzLCByZXNvbHZlcikgOiBsaWIkZXM2JHByb21pc2UkcHJvbWlzZSQkbmVlZHNOZXcoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsaWIkZXM2JHByb21pc2UkcHJvbWlzZSQkUHJvbWlzZS5hbGwgPSBsaWIkZXM2JHByb21pc2UkcHJvbWlzZSRhbGwkJGRlZmF1bHQ7XG4gICAgbGliJGVzNiRwcm9taXNlJHByb21pc2UkJFByb21pc2UucmFjZSA9IGxpYiRlczYkcHJvbWlzZSRwcm9taXNlJHJhY2UkJGRlZmF1bHQ7XG4gICAgbGliJGVzNiRwcm9taXNlJHByb21pc2UkJFByb21pc2UucmVzb2x2ZSA9IGxpYiRlczYkcHJvbWlzZSRwcm9taXNlJHJlc29sdmUkJGRlZmF1bHQ7XG4gICAgbGliJGVzNiRwcm9taXNlJHByb21pc2UkJFByb21pc2UucmVqZWN0ID0gbGliJGVzNiRwcm9taXNlJHByb21pc2UkcmVqZWN0JCRkZWZhdWx0O1xuICAgIGxpYiRlczYkcHJvbWlzZSRwcm9taXNlJCRQcm9taXNlLl9zZXRTY2hlZHVsZXIgPSBsaWIkZXM2JHByb21pc2UkYXNhcCQkc2V0U2NoZWR1bGVyO1xuICAgIGxpYiRlczYkcHJvbWlzZSRwcm9taXNlJCRQcm9taXNlLl9zZXRBc2FwID0gbGliJGVzNiRwcm9taXNlJGFzYXAkJHNldEFzYXA7XG4gICAgbGliJGVzNiRwcm9taXNlJHByb21pc2UkJFByb21pc2UuX2FzYXAgPSBsaWIkZXM2JHByb21pc2UkYXNhcCQkYXNhcDtcblxuICAgIGxpYiRlczYkcHJvbWlzZSRwcm9taXNlJCRQcm9taXNlLnByb3RvdHlwZSA9IHtcbiAgICAgIGNvbnN0cnVjdG9yOiBsaWIkZXM2JHByb21pc2UkcHJvbWlzZSQkUHJvbWlzZSxcblxuICAgIC8qKlxuICAgICAgVGhlIHByaW1hcnkgd2F5IG9mIGludGVyYWN0aW5nIHdpdGggYSBwcm9taXNlIGlzIHRocm91Z2ggaXRzIGB0aGVuYCBtZXRob2QsXG4gICAgICB3aGljaCByZWdpc3RlcnMgY2FsbGJhY2tzIHRvIHJlY2VpdmUgZWl0aGVyIGEgcHJvbWlzZSdzIGV2ZW50dWFsIHZhbHVlIG9yIHRoZVxuICAgICAgcmVhc29uIHdoeSB0aGUgcHJvbWlzZSBjYW5ub3QgYmUgZnVsZmlsbGVkLlxuXG4gICAgICBgYGBqc1xuICAgICAgZmluZFVzZXIoKS50aGVuKGZ1bmN0aW9uKHVzZXIpe1xuICAgICAgICAvLyB1c2VyIGlzIGF2YWlsYWJsZVxuICAgICAgfSwgZnVuY3Rpb24ocmVhc29uKXtcbiAgICAgICAgLy8gdXNlciBpcyB1bmF2YWlsYWJsZSwgYW5kIHlvdSBhcmUgZ2l2ZW4gdGhlIHJlYXNvbiB3aHlcbiAgICAgIH0pO1xuICAgICAgYGBgXG5cbiAgICAgIENoYWluaW5nXG4gICAgICAtLS0tLS0tLVxuXG4gICAgICBUaGUgcmV0dXJuIHZhbHVlIG9mIGB0aGVuYCBpcyBpdHNlbGYgYSBwcm9taXNlLiAgVGhpcyBzZWNvbmQsICdkb3duc3RyZWFtJ1xuICAgICAgcHJvbWlzZSBpcyByZXNvbHZlZCB3aXRoIHRoZSByZXR1cm4gdmFsdWUgb2YgdGhlIGZpcnN0IHByb21pc2UncyBmdWxmaWxsbWVudFxuICAgICAgb3IgcmVqZWN0aW9uIGhhbmRsZXIsIG9yIHJlamVjdGVkIGlmIHRoZSBoYW5kbGVyIHRocm93cyBhbiBleGNlcHRpb24uXG5cbiAgICAgIGBgYGpzXG4gICAgICBmaW5kVXNlcigpLnRoZW4oZnVuY3Rpb24gKHVzZXIpIHtcbiAgICAgICAgcmV0dXJuIHVzZXIubmFtZTtcbiAgICAgIH0sIGZ1bmN0aW9uIChyZWFzb24pIHtcbiAgICAgICAgcmV0dXJuICdkZWZhdWx0IG5hbWUnO1xuICAgICAgfSkudGhlbihmdW5jdGlvbiAodXNlck5hbWUpIHtcbiAgICAgICAgLy8gSWYgYGZpbmRVc2VyYCBmdWxmaWxsZWQsIGB1c2VyTmFtZWAgd2lsbCBiZSB0aGUgdXNlcidzIG5hbWUsIG90aGVyd2lzZSBpdFxuICAgICAgICAvLyB3aWxsIGJlIGAnZGVmYXVsdCBuYW1lJ2BcbiAgICAgIH0pO1xuXG4gICAgICBmaW5kVXNlcigpLnRoZW4oZnVuY3Rpb24gKHVzZXIpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdGb3VuZCB1c2VyLCBidXQgc3RpbGwgdW5oYXBweScpO1xuICAgICAgfSwgZnVuY3Rpb24gKHJlYXNvbikge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2BmaW5kVXNlcmAgcmVqZWN0ZWQgYW5kIHdlJ3JlIHVuaGFwcHknKTtcbiAgICAgIH0pLnRoZW4oZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIC8vIG5ldmVyIHJlYWNoZWRcbiAgICAgIH0sIGZ1bmN0aW9uIChyZWFzb24pIHtcbiAgICAgICAgLy8gaWYgYGZpbmRVc2VyYCBmdWxmaWxsZWQsIGByZWFzb25gIHdpbGwgYmUgJ0ZvdW5kIHVzZXIsIGJ1dCBzdGlsbCB1bmhhcHB5Jy5cbiAgICAgICAgLy8gSWYgYGZpbmRVc2VyYCByZWplY3RlZCwgYHJlYXNvbmAgd2lsbCBiZSAnYGZpbmRVc2VyYCByZWplY3RlZCBhbmQgd2UncmUgdW5oYXBweScuXG4gICAgICB9KTtcbiAgICAgIGBgYFxuICAgICAgSWYgdGhlIGRvd25zdHJlYW0gcHJvbWlzZSBkb2VzIG5vdCBzcGVjaWZ5IGEgcmVqZWN0aW9uIGhhbmRsZXIsIHJlamVjdGlvbiByZWFzb25zIHdpbGwgYmUgcHJvcGFnYXRlZCBmdXJ0aGVyIGRvd25zdHJlYW0uXG5cbiAgICAgIGBgYGpzXG4gICAgICBmaW5kVXNlcigpLnRoZW4oZnVuY3Rpb24gKHVzZXIpIHtcbiAgICAgICAgdGhyb3cgbmV3IFBlZGFnb2dpY2FsRXhjZXB0aW9uKCdVcHN0cmVhbSBlcnJvcicpO1xuICAgICAgfSkudGhlbihmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgLy8gbmV2ZXIgcmVhY2hlZFxuICAgICAgfSkudGhlbihmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgLy8gbmV2ZXIgcmVhY2hlZFxuICAgICAgfSwgZnVuY3Rpb24gKHJlYXNvbikge1xuICAgICAgICAvLyBUaGUgYFBlZGdhZ29jaWFsRXhjZXB0aW9uYCBpcyBwcm9wYWdhdGVkIGFsbCB0aGUgd2F5IGRvd24gdG8gaGVyZVxuICAgICAgfSk7XG4gICAgICBgYGBcblxuICAgICAgQXNzaW1pbGF0aW9uXG4gICAgICAtLS0tLS0tLS0tLS1cblxuICAgICAgU29tZXRpbWVzIHRoZSB2YWx1ZSB5b3Ugd2FudCB0byBwcm9wYWdhdGUgdG8gYSBkb3duc3RyZWFtIHByb21pc2UgY2FuIG9ubHkgYmVcbiAgICAgIHJldHJpZXZlZCBhc3luY2hyb25vdXNseS4gVGhpcyBjYW4gYmUgYWNoaWV2ZWQgYnkgcmV0dXJuaW5nIGEgcHJvbWlzZSBpbiB0aGVcbiAgICAgIGZ1bGZpbGxtZW50IG9yIHJlamVjdGlvbiBoYW5kbGVyLiBUaGUgZG93bnN0cmVhbSBwcm9taXNlIHdpbGwgdGhlbiBiZSBwZW5kaW5nXG4gICAgICB1bnRpbCB0aGUgcmV0dXJuZWQgcHJvbWlzZSBpcyBzZXR0bGVkLiBUaGlzIGlzIGNhbGxlZCAqYXNzaW1pbGF0aW9uKi5cblxuICAgICAgYGBganNcbiAgICAgIGZpbmRVc2VyKCkudGhlbihmdW5jdGlvbiAodXNlcikge1xuICAgICAgICByZXR1cm4gZmluZENvbW1lbnRzQnlBdXRob3IodXNlcik7XG4gICAgICB9KS50aGVuKGZ1bmN0aW9uIChjb21tZW50cykge1xuICAgICAgICAvLyBUaGUgdXNlcidzIGNvbW1lbnRzIGFyZSBub3cgYXZhaWxhYmxlXG4gICAgICB9KTtcbiAgICAgIGBgYFxuXG4gICAgICBJZiB0aGUgYXNzaW1saWF0ZWQgcHJvbWlzZSByZWplY3RzLCB0aGVuIHRoZSBkb3duc3RyZWFtIHByb21pc2Ugd2lsbCBhbHNvIHJlamVjdC5cblxuICAgICAgYGBganNcbiAgICAgIGZpbmRVc2VyKCkudGhlbihmdW5jdGlvbiAodXNlcikge1xuICAgICAgICByZXR1cm4gZmluZENvbW1lbnRzQnlBdXRob3IodXNlcik7XG4gICAgICB9KS50aGVuKGZ1bmN0aW9uIChjb21tZW50cykge1xuICAgICAgICAvLyBJZiBgZmluZENvbW1lbnRzQnlBdXRob3JgIGZ1bGZpbGxzLCB3ZSdsbCBoYXZlIHRoZSB2YWx1ZSBoZXJlXG4gICAgICB9LCBmdW5jdGlvbiAocmVhc29uKSB7XG4gICAgICAgIC8vIElmIGBmaW5kQ29tbWVudHNCeUF1dGhvcmAgcmVqZWN0cywgd2UnbGwgaGF2ZSB0aGUgcmVhc29uIGhlcmVcbiAgICAgIH0pO1xuICAgICAgYGBgXG5cbiAgICAgIFNpbXBsZSBFeGFtcGxlXG4gICAgICAtLS0tLS0tLS0tLS0tLVxuXG4gICAgICBTeW5jaHJvbm91cyBFeGFtcGxlXG5cbiAgICAgIGBgYGphdmFzY3JpcHRcbiAgICAgIHZhciByZXN1bHQ7XG5cbiAgICAgIHRyeSB7XG4gICAgICAgIHJlc3VsdCA9IGZpbmRSZXN1bHQoKTtcbiAgICAgICAgLy8gc3VjY2Vzc1xuICAgICAgfSBjYXRjaChyZWFzb24pIHtcbiAgICAgICAgLy8gZmFpbHVyZVxuICAgICAgfVxuICAgICAgYGBgXG5cbiAgICAgIEVycmJhY2sgRXhhbXBsZVxuXG4gICAgICBgYGBqc1xuICAgICAgZmluZFJlc3VsdChmdW5jdGlvbihyZXN1bHQsIGVycil7XG4gICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAvLyBmYWlsdXJlXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy8gc3VjY2Vzc1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIGBgYFxuXG4gICAgICBQcm9taXNlIEV4YW1wbGU7XG5cbiAgICAgIGBgYGphdmFzY3JpcHRcbiAgICAgIGZpbmRSZXN1bHQoKS50aGVuKGZ1bmN0aW9uKHJlc3VsdCl7XG4gICAgICAgIC8vIHN1Y2Nlc3NcbiAgICAgIH0sIGZ1bmN0aW9uKHJlYXNvbil7XG4gICAgICAgIC8vIGZhaWx1cmVcbiAgICAgIH0pO1xuICAgICAgYGBgXG5cbiAgICAgIEFkdmFuY2VkIEV4YW1wbGVcbiAgICAgIC0tLS0tLS0tLS0tLS0tXG5cbiAgICAgIFN5bmNocm9ub3VzIEV4YW1wbGVcblxuICAgICAgYGBgamF2YXNjcmlwdFxuICAgICAgdmFyIGF1dGhvciwgYm9va3M7XG5cbiAgICAgIHRyeSB7XG4gICAgICAgIGF1dGhvciA9IGZpbmRBdXRob3IoKTtcbiAgICAgICAgYm9va3MgID0gZmluZEJvb2tzQnlBdXRob3IoYXV0aG9yKTtcbiAgICAgICAgLy8gc3VjY2Vzc1xuICAgICAgfSBjYXRjaChyZWFzb24pIHtcbiAgICAgICAgLy8gZmFpbHVyZVxuICAgICAgfVxuICAgICAgYGBgXG5cbiAgICAgIEVycmJhY2sgRXhhbXBsZVxuXG4gICAgICBgYGBqc1xuXG4gICAgICBmdW5jdGlvbiBmb3VuZEJvb2tzKGJvb2tzKSB7XG5cbiAgICAgIH1cblxuICAgICAgZnVuY3Rpb24gZmFpbHVyZShyZWFzb24pIHtcblxuICAgICAgfVxuXG4gICAgICBmaW5kQXV0aG9yKGZ1bmN0aW9uKGF1dGhvciwgZXJyKXtcbiAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgIGZhaWx1cmUoZXJyKTtcbiAgICAgICAgICAvLyBmYWlsdXJlXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGZpbmRCb29va3NCeUF1dGhvcihhdXRob3IsIGZ1bmN0aW9uKGJvb2tzLCBlcnIpIHtcbiAgICAgICAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgICAgICAgIGZhaWx1cmUoZXJyKTtcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgZm91bmRCb29rcyhib29rcyk7XG4gICAgICAgICAgICAgICAgfSBjYXRjaChyZWFzb24pIHtcbiAgICAgICAgICAgICAgICAgIGZhaWx1cmUocmVhc29uKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0gY2F0Y2goZXJyb3IpIHtcbiAgICAgICAgICAgIGZhaWx1cmUoZXJyKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLy8gc3VjY2Vzc1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIGBgYFxuXG4gICAgICBQcm9taXNlIEV4YW1wbGU7XG5cbiAgICAgIGBgYGphdmFzY3JpcHRcbiAgICAgIGZpbmRBdXRob3IoKS5cbiAgICAgICAgdGhlbihmaW5kQm9va3NCeUF1dGhvcikuXG4gICAgICAgIHRoZW4oZnVuY3Rpb24oYm9va3Mpe1xuICAgICAgICAgIC8vIGZvdW5kIGJvb2tzXG4gICAgICB9KS5jYXRjaChmdW5jdGlvbihyZWFzb24pe1xuICAgICAgICAvLyBzb21ldGhpbmcgd2VudCB3cm9uZ1xuICAgICAgfSk7XG4gICAgICBgYGBcblxuICAgICAgQG1ldGhvZCB0aGVuXG4gICAgICBAcGFyYW0ge0Z1bmN0aW9ufSBvbkZ1bGZpbGxlZFxuICAgICAgQHBhcmFtIHtGdW5jdGlvbn0gb25SZWplY3RlZFxuICAgICAgVXNlZnVsIGZvciB0b29saW5nLlxuICAgICAgQHJldHVybiB7UHJvbWlzZX1cbiAgICAqL1xuICAgICAgdGhlbjogbGliJGVzNiRwcm9taXNlJHRoZW4kJGRlZmF1bHQsXG5cbiAgICAvKipcbiAgICAgIGBjYXRjaGAgaXMgc2ltcGx5IHN1Z2FyIGZvciBgdGhlbih1bmRlZmluZWQsIG9uUmVqZWN0aW9uKWAgd2hpY2ggbWFrZXMgaXQgdGhlIHNhbWVcbiAgICAgIGFzIHRoZSBjYXRjaCBibG9jayBvZiBhIHRyeS9jYXRjaCBzdGF0ZW1lbnQuXG5cbiAgICAgIGBgYGpzXG4gICAgICBmdW5jdGlvbiBmaW5kQXV0aG9yKCl7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignY291bGRuJ3QgZmluZCB0aGF0IGF1dGhvcicpO1xuICAgICAgfVxuXG4gICAgICAvLyBzeW5jaHJvbm91c1xuICAgICAgdHJ5IHtcbiAgICAgICAgZmluZEF1dGhvcigpO1xuICAgICAgfSBjYXRjaChyZWFzb24pIHtcbiAgICAgICAgLy8gc29tZXRoaW5nIHdlbnQgd3JvbmdcbiAgICAgIH1cblxuICAgICAgLy8gYXN5bmMgd2l0aCBwcm9taXNlc1xuICAgICAgZmluZEF1dGhvcigpLmNhdGNoKGZ1bmN0aW9uKHJlYXNvbil7XG4gICAgICAgIC8vIHNvbWV0aGluZyB3ZW50IHdyb25nXG4gICAgICB9KTtcbiAgICAgIGBgYFxuXG4gICAgICBAbWV0aG9kIGNhdGNoXG4gICAgICBAcGFyYW0ge0Z1bmN0aW9ufSBvblJlamVjdGlvblxuICAgICAgVXNlZnVsIGZvciB0b29saW5nLlxuICAgICAgQHJldHVybiB7UHJvbWlzZX1cbiAgICAqL1xuICAgICAgJ2NhdGNoJzogZnVuY3Rpb24ob25SZWplY3Rpb24pIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudGhlbihudWxsLCBvblJlamVjdGlvbik7XG4gICAgICB9XG4gICAgfTtcbiAgICB2YXIgbGliJGVzNiRwcm9taXNlJGVudW1lcmF0b3IkJGRlZmF1bHQgPSBsaWIkZXM2JHByb21pc2UkZW51bWVyYXRvciQkRW51bWVyYXRvcjtcbiAgICBmdW5jdGlvbiBsaWIkZXM2JHByb21pc2UkZW51bWVyYXRvciQkRW51bWVyYXRvcihDb25zdHJ1Y3RvciwgaW5wdXQpIHtcbiAgICAgIHRoaXMuX2luc3RhbmNlQ29uc3RydWN0b3IgPSBDb25zdHJ1Y3RvcjtcbiAgICAgIHRoaXMucHJvbWlzZSA9IG5ldyBDb25zdHJ1Y3RvcihsaWIkZXM2JHByb21pc2UkJGludGVybmFsJCRub29wKTtcblxuICAgICAgaWYgKCF0aGlzLnByb21pc2VbbGliJGVzNiRwcm9taXNlJCRpbnRlcm5hbCQkUFJPTUlTRV9JRF0pIHtcbiAgICAgICAgbGliJGVzNiRwcm9taXNlJCRpbnRlcm5hbCQkbWFrZVByb21pc2UodGhpcy5wcm9taXNlKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGxpYiRlczYkcHJvbWlzZSR1dGlscyQkaXNBcnJheShpbnB1dCkpIHtcbiAgICAgICAgdGhpcy5faW5wdXQgICAgID0gaW5wdXQ7XG4gICAgICAgIHRoaXMubGVuZ3RoICAgICA9IGlucHV0Lmxlbmd0aDtcbiAgICAgICAgdGhpcy5fcmVtYWluaW5nID0gaW5wdXQubGVuZ3RoO1xuXG4gICAgICAgIHRoaXMuX3Jlc3VsdCA9IG5ldyBBcnJheSh0aGlzLmxlbmd0aCk7XG5cbiAgICAgICAgaWYgKHRoaXMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgbGliJGVzNiRwcm9taXNlJCRpbnRlcm5hbCQkZnVsZmlsbCh0aGlzLnByb21pc2UsIHRoaXMuX3Jlc3VsdCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5sZW5ndGggPSB0aGlzLmxlbmd0aCB8fCAwO1xuICAgICAgICAgIHRoaXMuX2VudW1lcmF0ZSgpO1xuICAgICAgICAgIGlmICh0aGlzLl9yZW1haW5pbmcgPT09IDApIHtcbiAgICAgICAgICAgIGxpYiRlczYkcHJvbWlzZSQkaW50ZXJuYWwkJGZ1bGZpbGwodGhpcy5wcm9taXNlLCB0aGlzLl9yZXN1bHQpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbGliJGVzNiRwcm9taXNlJCRpbnRlcm5hbCQkcmVqZWN0KHRoaXMucHJvbWlzZSwgbGliJGVzNiRwcm9taXNlJGVudW1lcmF0b3IkJHZhbGlkYXRpb25FcnJvcigpKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBsaWIkZXM2JHByb21pc2UkZW51bWVyYXRvciQkdmFsaWRhdGlvbkVycm9yKCkge1xuICAgICAgcmV0dXJuIG5ldyBFcnJvcignQXJyYXkgTWV0aG9kcyBtdXN0IGJlIHByb3ZpZGVkIGFuIEFycmF5Jyk7XG4gICAgfVxuXG4gICAgbGliJGVzNiRwcm9taXNlJGVudW1lcmF0b3IkJEVudW1lcmF0b3IucHJvdG90eXBlLl9lbnVtZXJhdGUgPSBmdW5jdGlvbigpIHtcbiAgICAgIHZhciBsZW5ndGggID0gdGhpcy5sZW5ndGg7XG4gICAgICB2YXIgaW5wdXQgICA9IHRoaXMuX2lucHV0O1xuXG4gICAgICBmb3IgKHZhciBpID0gMDsgdGhpcy5fc3RhdGUgPT09IGxpYiRlczYkcHJvbWlzZSQkaW50ZXJuYWwkJFBFTkRJTkcgJiYgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHRoaXMuX2VhY2hFbnRyeShpbnB1dFtpXSwgaSk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIGxpYiRlczYkcHJvbWlzZSRlbnVtZXJhdG9yJCRFbnVtZXJhdG9yLnByb3RvdHlwZS5fZWFjaEVudHJ5ID0gZnVuY3Rpb24oZW50cnksIGkpIHtcbiAgICAgIHZhciBjID0gdGhpcy5faW5zdGFuY2VDb25zdHJ1Y3RvcjtcbiAgICAgIHZhciByZXNvbHZlID0gYy5yZXNvbHZlO1xuXG4gICAgICBpZiAocmVzb2x2ZSA9PT0gbGliJGVzNiRwcm9taXNlJHByb21pc2UkcmVzb2x2ZSQkZGVmYXVsdCkge1xuICAgICAgICB2YXIgdGhlbiA9IGxpYiRlczYkcHJvbWlzZSQkaW50ZXJuYWwkJGdldFRoZW4oZW50cnkpO1xuXG4gICAgICAgIGlmICh0aGVuID09PSBsaWIkZXM2JHByb21pc2UkdGhlbiQkZGVmYXVsdCAmJlxuICAgICAgICAgICAgZW50cnkuX3N0YXRlICE9PSBsaWIkZXM2JHByb21pc2UkJGludGVybmFsJCRQRU5ESU5HKSB7XG4gICAgICAgICAgdGhpcy5fc2V0dGxlZEF0KGVudHJ5Ll9zdGF0ZSwgaSwgZW50cnkuX3Jlc3VsdCk7XG4gICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIHRoZW4gIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICB0aGlzLl9yZW1haW5pbmctLTtcbiAgICAgICAgICB0aGlzLl9yZXN1bHRbaV0gPSBlbnRyeTtcbiAgICAgICAgfSBlbHNlIGlmIChjID09PSBsaWIkZXM2JHByb21pc2UkcHJvbWlzZSQkZGVmYXVsdCkge1xuICAgICAgICAgIHZhciBwcm9taXNlID0gbmV3IGMobGliJGVzNiRwcm9taXNlJCRpbnRlcm5hbCQkbm9vcCk7XG4gICAgICAgICAgbGliJGVzNiRwcm9taXNlJCRpbnRlcm5hbCQkaGFuZGxlTWF5YmVUaGVuYWJsZShwcm9taXNlLCBlbnRyeSwgdGhlbik7XG4gICAgICAgICAgdGhpcy5fd2lsbFNldHRsZUF0KHByb21pc2UsIGkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuX3dpbGxTZXR0bGVBdChuZXcgYyhmdW5jdGlvbihyZXNvbHZlKSB7IHJlc29sdmUoZW50cnkpOyB9KSwgaSk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuX3dpbGxTZXR0bGVBdChyZXNvbHZlKGVudHJ5KSwgaSk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIGxpYiRlczYkcHJvbWlzZSRlbnVtZXJhdG9yJCRFbnVtZXJhdG9yLnByb3RvdHlwZS5fc2V0dGxlZEF0ID0gZnVuY3Rpb24oc3RhdGUsIGksIHZhbHVlKSB7XG4gICAgICB2YXIgcHJvbWlzZSA9IHRoaXMucHJvbWlzZTtcblxuICAgICAgaWYgKHByb21pc2UuX3N0YXRlID09PSBsaWIkZXM2JHByb21pc2UkJGludGVybmFsJCRQRU5ESU5HKSB7XG4gICAgICAgIHRoaXMuX3JlbWFpbmluZy0tO1xuXG4gICAgICAgIGlmIChzdGF0ZSA9PT0gbGliJGVzNiRwcm9taXNlJCRpbnRlcm5hbCQkUkVKRUNURUQpIHtcbiAgICAgICAgICBsaWIkZXM2JHByb21pc2UkJGludGVybmFsJCRyZWplY3QocHJvbWlzZSwgdmFsdWUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuX3Jlc3VsdFtpXSA9IHZhbHVlO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLl9yZW1haW5pbmcgPT09IDApIHtcbiAgICAgICAgbGliJGVzNiRwcm9taXNlJCRpbnRlcm5hbCQkZnVsZmlsbChwcm9taXNlLCB0aGlzLl9yZXN1bHQpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBsaWIkZXM2JHByb21pc2UkZW51bWVyYXRvciQkRW51bWVyYXRvci5wcm90b3R5cGUuX3dpbGxTZXR0bGVBdCA9IGZ1bmN0aW9uKHByb21pc2UsIGkpIHtcbiAgICAgIHZhciBlbnVtZXJhdG9yID0gdGhpcztcblxuICAgICAgbGliJGVzNiRwcm9taXNlJCRpbnRlcm5hbCQkc3Vic2NyaWJlKHByb21pc2UsIHVuZGVmaW5lZCwgZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgICAgZW51bWVyYXRvci5fc2V0dGxlZEF0KGxpYiRlczYkcHJvbWlzZSQkaW50ZXJuYWwkJEZVTEZJTExFRCwgaSwgdmFsdWUpO1xuICAgICAgfSwgZnVuY3Rpb24ocmVhc29uKSB7XG4gICAgICAgIGVudW1lcmF0b3IuX3NldHRsZWRBdChsaWIkZXM2JHByb21pc2UkJGludGVybmFsJCRSRUpFQ1RFRCwgaSwgcmVhc29uKTtcbiAgICAgIH0pO1xuICAgIH07XG4gICAgZnVuY3Rpb24gbGliJGVzNiRwcm9taXNlJHBvbHlmaWxsJCRwb2x5ZmlsbCgpIHtcbiAgICAgIHZhciBsb2NhbDtcblxuICAgICAgaWYgKHR5cGVvZiBnbG9iYWwgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgbG9jYWwgPSBnbG9iYWw7XG4gICAgICB9IGVsc2UgaWYgKHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgIGxvY2FsID0gc2VsZjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgbG9jYWwgPSBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdwb2x5ZmlsbCBmYWlsZWQgYmVjYXVzZSBnbG9iYWwgb2JqZWN0IGlzIHVuYXZhaWxhYmxlIGluIHRoaXMgZW52aXJvbm1lbnQnKTtcbiAgICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHZhciBQID0gbG9jYWwuUHJvbWlzZTtcblxuICAgICAgaWYgKFAgJiYgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKFAucmVzb2x2ZSgpKSA9PT0gJ1tvYmplY3QgUHJvbWlzZV0nICYmICFQLmNhc3QpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBsb2NhbC5Qcm9taXNlID0gbGliJGVzNiRwcm9taXNlJHByb21pc2UkJGRlZmF1bHQ7XG4gICAgfVxuICAgIHZhciBsaWIkZXM2JHByb21pc2UkcG9seWZpbGwkJGRlZmF1bHQgPSBsaWIkZXM2JHByb21pc2UkcG9seWZpbGwkJHBvbHlmaWxsO1xuXG4gICAgdmFyIGxpYiRlczYkcHJvbWlzZSR1bWQkJEVTNlByb21pc2UgPSB7XG4gICAgICAnUHJvbWlzZSc6IGxpYiRlczYkcHJvbWlzZSRwcm9taXNlJCRkZWZhdWx0LFxuICAgICAgJ3BvbHlmaWxsJzogbGliJGVzNiRwcm9taXNlJHBvbHlmaWxsJCRkZWZhdWx0XG4gICAgfTtcblxuICAgIC8qIGdsb2JhbCBkZWZpbmU6dHJ1ZSBtb2R1bGU6dHJ1ZSB3aW5kb3c6IHRydWUgKi9cbiAgICBpZiAodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmVbJ2FtZCddKSB7XG4gICAgICBkZWZpbmUoZnVuY3Rpb24oKSB7IHJldHVybiBsaWIkZXM2JHByb21pc2UkdW1kJCRFUzZQcm9taXNlOyB9KTtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBtb2R1bGUgIT09ICd1bmRlZmluZWQnICYmIG1vZHVsZVsnZXhwb3J0cyddKSB7XG4gICAgICBtb2R1bGVbJ2V4cG9ydHMnXSA9IGxpYiRlczYkcHJvbWlzZSR1bWQkJEVTNlByb21pc2U7XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgdGhpcyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHRoaXNbJ0VTNlByb21pc2UnXSA9IGxpYiRlczYkcHJvbWlzZSR1bWQkJEVTNlByb21pc2U7XG4gICAgfVxuXG4gICAgbGliJGVzNiRwcm9taXNlJHBvbHlmaWxsJCRkZWZhdWx0KCk7XG59KS5jYWxsKHRoaXMpO1xuXG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9lczYtcHJvbWlzZS9kaXN0L2VzNi1wcm9taXNlLmpzXG4gKiogbW9kdWxlIGlkID0gMzdcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8vIHNoaW0gZm9yIHVzaW5nIHByb2Nlc3MgaW4gYnJvd3NlclxudmFyIHByb2Nlc3MgPSBtb2R1bGUuZXhwb3J0cyA9IHt9O1xuXG4vLyBjYWNoZWQgZnJvbSB3aGF0ZXZlciBnbG9iYWwgaXMgcHJlc2VudCBzbyB0aGF0IHRlc3QgcnVubmVycyB0aGF0IHN0dWIgaXRcbi8vIGRvbid0IGJyZWFrIHRoaW5ncy4gIEJ1dCB3ZSBuZWVkIHRvIHdyYXAgaXQgaW4gYSB0cnkgY2F0Y2ggaW4gY2FzZSBpdCBpc1xuLy8gd3JhcHBlZCBpbiBzdHJpY3QgbW9kZSBjb2RlIHdoaWNoIGRvZXNuJ3QgZGVmaW5lIGFueSBnbG9iYWxzLiAgSXQncyBpbnNpZGUgYVxuLy8gZnVuY3Rpb24gYmVjYXVzZSB0cnkvY2F0Y2hlcyBkZW9wdGltaXplIGluIGNlcnRhaW4gZW5naW5lcy5cblxudmFyIGNhY2hlZFNldFRpbWVvdXQ7XG52YXIgY2FjaGVkQ2xlYXJUaW1lb3V0O1xuXG5mdW5jdGlvbiBkZWZhdWx0U2V0VGltb3V0KCkge1xuICAgIHRocm93IG5ldyBFcnJvcignc2V0VGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZCcpO1xufVxuZnVuY3Rpb24gZGVmYXVsdENsZWFyVGltZW91dCAoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdjbGVhclRpbWVvdXQgaGFzIG5vdCBiZWVuIGRlZmluZWQnKTtcbn1cbihmdW5jdGlvbiAoKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHR5cGVvZiBzZXRUaW1lb3V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gc2V0VGltZW91dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBkZWZhdWx0U2V0VGltb3V0O1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gZGVmYXVsdFNldFRpbW91dDtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHR5cGVvZiBjbGVhclRpbWVvdXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGNsZWFyVGltZW91dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGRlZmF1bHRDbGVhclRpbWVvdXQ7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGRlZmF1bHRDbGVhclRpbWVvdXQ7XG4gICAgfVxufSAoKSlcbmZ1bmN0aW9uIHJ1blRpbWVvdXQoZnVuKSB7XG4gICAgaWYgKGNhY2hlZFNldFRpbWVvdXQgPT09IHNldFRpbWVvdXQpIHtcbiAgICAgICAgLy9ub3JtYWwgZW52aXJvbWVudHMgaW4gc2FuZSBzaXR1YXRpb25zXG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfVxuICAgIC8vIGlmIHNldFRpbWVvdXQgd2Fzbid0IGF2YWlsYWJsZSBidXQgd2FzIGxhdHRlciBkZWZpbmVkXG4gICAgaWYgKChjYWNoZWRTZXRUaW1lb3V0ID09PSBkZWZhdWx0U2V0VGltb3V0IHx8ICFjYWNoZWRTZXRUaW1lb3V0KSAmJiBzZXRUaW1lb3V0KSB7XG4gICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW4sIDApO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICAvLyB3aGVuIHdoZW4gc29tZWJvZHkgaGFzIHNjcmV3ZWQgd2l0aCBzZXRUaW1lb3V0IGJ1dCBubyBJLkUuIG1hZGRuZXNzXG4gICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfSBjYXRjaChlKXtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIFdoZW4gd2UgYXJlIGluIEkuRS4gYnV0IHRoZSBzY3JpcHQgaGFzIGJlZW4gZXZhbGVkIHNvIEkuRS4gZG9lc24ndCB0cnVzdCB0aGUgZ2xvYmFsIG9iamVjdCB3aGVuIGNhbGxlZCBub3JtYWxseVxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQuY2FsbChudWxsLCBmdW4sIDApO1xuICAgICAgICB9IGNhdGNoKGUpe1xuICAgICAgICAgICAgLy8gc2FtZSBhcyBhYm92ZSBidXQgd2hlbiBpdCdzIGEgdmVyc2lvbiBvZiBJLkUuIHRoYXQgbXVzdCBoYXZlIHRoZSBnbG9iYWwgb2JqZWN0IGZvciAndGhpcycsIGhvcGZ1bGx5IG91ciBjb250ZXh0IGNvcnJlY3Qgb3RoZXJ3aXNlIGl0IHdpbGwgdGhyb3cgYSBnbG9iYWwgZXJyb3JcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0LmNhbGwodGhpcywgZnVuLCAwKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG59XG5mdW5jdGlvbiBydW5DbGVhclRpbWVvdXQobWFya2VyKSB7XG4gICAgaWYgKGNhY2hlZENsZWFyVGltZW91dCA9PT0gY2xlYXJUaW1lb3V0KSB7XG4gICAgICAgIC8vbm9ybWFsIGVudmlyb21lbnRzIGluIHNhbmUgc2l0dWF0aW9uc1xuICAgICAgICByZXR1cm4gY2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfVxuICAgIC8vIGlmIGNsZWFyVGltZW91dCB3YXNuJ3QgYXZhaWxhYmxlIGJ1dCB3YXMgbGF0dGVyIGRlZmluZWRcbiAgICBpZiAoKGNhY2hlZENsZWFyVGltZW91dCA9PT0gZGVmYXVsdENsZWFyVGltZW91dCB8fCAhY2FjaGVkQ2xlYXJUaW1lb3V0KSAmJiBjbGVhclRpbWVvdXQpIHtcbiAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gY2xlYXJUaW1lb3V0O1xuICAgICAgICByZXR1cm4gY2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIC8vIHdoZW4gd2hlbiBzb21lYm9keSBoYXMgc2NyZXdlZCB3aXRoIHNldFRpbWVvdXQgYnV0IG5vIEkuRS4gbWFkZG5lc3NcbiAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH0gY2F0Y2ggKGUpe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gV2hlbiB3ZSBhcmUgaW4gSS5FLiBidXQgdGhlIHNjcmlwdCBoYXMgYmVlbiBldmFsZWQgc28gSS5FLiBkb2Vzbid0ICB0cnVzdCB0aGUgZ2xvYmFsIG9iamVjdCB3aGVuIGNhbGxlZCBub3JtYWxseVxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dC5jYWxsKG51bGwsIG1hcmtlcik7XG4gICAgICAgIH0gY2F0Y2ggKGUpe1xuICAgICAgICAgICAgLy8gc2FtZSBhcyBhYm92ZSBidXQgd2hlbiBpdCdzIGEgdmVyc2lvbiBvZiBJLkUuIHRoYXQgbXVzdCBoYXZlIHRoZSBnbG9iYWwgb2JqZWN0IGZvciAndGhpcycsIGhvcGZ1bGx5IG91ciBjb250ZXh0IGNvcnJlY3Qgb3RoZXJ3aXNlIGl0IHdpbGwgdGhyb3cgYSBnbG9iYWwgZXJyb3IuXG4gICAgICAgICAgICAvLyBTb21lIHZlcnNpb25zIG9mIEkuRS4gaGF2ZSBkaWZmZXJlbnQgcnVsZXMgZm9yIGNsZWFyVGltZW91dCB2cyBzZXRUaW1lb3V0XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0LmNhbGwodGhpcywgbWFya2VyKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG5cbn1cbnZhciBxdWV1ZSA9IFtdO1xudmFyIGRyYWluaW5nID0gZmFsc2U7XG52YXIgY3VycmVudFF1ZXVlO1xudmFyIHF1ZXVlSW5kZXggPSAtMTtcblxuZnVuY3Rpb24gY2xlYW5VcE5leHRUaWNrKCkge1xuICAgIGlmICghZHJhaW5pbmcgfHwgIWN1cnJlbnRRdWV1ZSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgaWYgKGN1cnJlbnRRdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgcXVldWUgPSBjdXJyZW50UXVldWUuY29uY2F0KHF1ZXVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgfVxuICAgIGlmIChxdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgZHJhaW5RdWV1ZSgpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gZHJhaW5RdWV1ZSgpIHtcbiAgICBpZiAoZHJhaW5pbmcpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB2YXIgdGltZW91dCA9IHJ1blRpbWVvdXQoY2xlYW5VcE5leHRUaWNrKTtcbiAgICBkcmFpbmluZyA9IHRydWU7XG5cbiAgICB2YXIgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIHdoaWxlKGxlbikge1xuICAgICAgICBjdXJyZW50UXVldWUgPSBxdWV1ZTtcbiAgICAgICAgcXVldWUgPSBbXTtcbiAgICAgICAgd2hpbGUgKCsrcXVldWVJbmRleCA8IGxlbikge1xuICAgICAgICAgICAgaWYgKGN1cnJlbnRRdWV1ZSkge1xuICAgICAgICAgICAgICAgIGN1cnJlbnRRdWV1ZVtxdWV1ZUluZGV4XS5ydW4oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgICAgIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB9XG4gICAgY3VycmVudFF1ZXVlID0gbnVsbDtcbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIHJ1bkNsZWFyVGltZW91dCh0aW1lb3V0KTtcbn1cblxucHJvY2Vzcy5uZXh0VGljayA9IGZ1bmN0aW9uIChmdW4pIHtcbiAgICB2YXIgYXJncyA9IG5ldyBBcnJheShhcmd1bWVudHMubGVuZ3RoIC0gMSk7XG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPiAxKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBhcmdzW2kgLSAxXSA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBxdWV1ZS5wdXNoKG5ldyBJdGVtKGZ1biwgYXJncykpO1xuICAgIGlmIChxdWV1ZS5sZW5ndGggPT09IDEgJiYgIWRyYWluaW5nKSB7XG4gICAgICAgIHJ1blRpbWVvdXQoZHJhaW5RdWV1ZSk7XG4gICAgfVxufTtcblxuLy8gdjggbGlrZXMgcHJlZGljdGlibGUgb2JqZWN0c1xuZnVuY3Rpb24gSXRlbShmdW4sIGFycmF5KSB7XG4gICAgdGhpcy5mdW4gPSBmdW47XG4gICAgdGhpcy5hcnJheSA9IGFycmF5O1xufVxuSXRlbS5wcm90b3R5cGUucnVuID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuZnVuLmFwcGx5KG51bGwsIHRoaXMuYXJyYXkpO1xufTtcbnByb2Nlc3MudGl0bGUgPSAnYnJvd3Nlcic7XG5wcm9jZXNzLmJyb3dzZXIgPSB0cnVlO1xucHJvY2Vzcy5lbnYgPSB7fTtcbnByb2Nlc3MuYXJndiA9IFtdO1xucHJvY2Vzcy52ZXJzaW9uID0gJyc7IC8vIGVtcHR5IHN0cmluZyB0byBhdm9pZCByZWdleHAgaXNzdWVzXG5wcm9jZXNzLnZlcnNpb25zID0ge307XG5cbmZ1bmN0aW9uIG5vb3AoKSB7fVxuXG5wcm9jZXNzLm9uID0gbm9vcDtcbnByb2Nlc3MuYWRkTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5vbmNlID0gbm9vcDtcbnByb2Nlc3Mub2ZmID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVBbGxMaXN0ZW5lcnMgPSBub29wO1xucHJvY2Vzcy5lbWl0ID0gbm9vcDtcblxucHJvY2Vzcy5iaW5kaW5nID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuYmluZGluZyBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xuXG5wcm9jZXNzLmN3ZCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuICcvJyB9O1xucHJvY2Vzcy5jaGRpciA9IGZ1bmN0aW9uIChkaXIpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuY2hkaXIgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcbnByb2Nlc3MudW1hc2sgPSBmdW5jdGlvbigpIHsgcmV0dXJuIDA7IH07XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9wcm9jZXNzL2Jyb3dzZXIuanNcbiAqKiBtb2R1bGUgaWQgPSAzOFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihtb2R1bGUpIHtcclxuXHRpZighbW9kdWxlLndlYnBhY2tQb2x5ZmlsbCkge1xyXG5cdFx0bW9kdWxlLmRlcHJlY2F0ZSA9IGZ1bmN0aW9uKCkge307XHJcblx0XHRtb2R1bGUucGF0aHMgPSBbXTtcclxuXHRcdC8vIG1vZHVsZS5wYXJlbnQgPSB1bmRlZmluZWQgYnkgZGVmYXVsdFxyXG5cdFx0bW9kdWxlLmNoaWxkcmVuID0gW107XHJcblx0XHRtb2R1bGUud2VicGFja1BvbHlmaWxsID0gMTtcclxuXHR9XHJcblx0cmV0dXJuIG1vZHVsZTtcclxufVxyXG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqICh3ZWJwYWNrKS9idWlsZGluL21vZHVsZS5qc1xuICoqIG1vZHVsZSBpZCA9IDM5XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvKiAoaWdub3JlZCkgKi9cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIHZlcnR4IChpZ25vcmVkKVxuICoqIG1vZHVsZSBpZCA9IDQwXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKCkgeyB0aHJvdyBuZXcgRXJyb3IoXCJkZWZpbmUgY2Fubm90IGJlIHVzZWQgaW5kaXJlY3RcIik7IH07XHJcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogKHdlYnBhY2spL2J1aWxkaW4vYW1kLWRlZmluZS5qc1xuICoqIG1vZHVsZSBpZCA9IDQxXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGRpdiBjbGFzcz1cXFwiJHtuc31cXFwiPlxcblxcdDxkaXYgY2xhc3M9XFxcIiR7bnN9LWltZ1xcXCI+PC9kaXY+XFxuXFx0PGRpdiBjbGFzcz1cXFwiJHtuc30tZGF0YVxcXCI+PC9kaXY+XFxuPC9kaXY+XFxuXCJcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2xheW91dHMvc2hvdy1sb2NhdGlvbnMvdGVtcGxhdGVzL2Jhc2UuaHRtbFxuICoqIG1vZHVsZSBpZCA9IDQyXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGRpdiBjbGFzcz1cXFwiJHtuc30tY29udGFjdC10eXBlXFxcIj48L2Rpdj5cXG48ZGl2IGNsYXNzPVxcXCIke25zfS1jb250YWN0LWRhdGFcXFwiPjwvZGl2PlxcblwiXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9sYXlvdXRzL3Nob3ctbG9jYXRpb25zL3RlbXBsYXRlcy9jcmVhdGUtZG9tLWFycmF5Lmh0bWxcbiAqKiBtb2R1bGUgaWQgPSA0M1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxkaXYgY2xhc3M9XFxcIiR7bnN9LWxvY2F0aW9ucy1pdGVtICR7bnN9LW11bHRpcGxlLWxvY2F0aW9ucyAke25zfS1kYXRhLXNlY3Rpb24gSUJNQ2hhdC1zZWNvbmRhcnktY29sb3JzXFxcIj5cXG5cXHQ8ZGl2IGNsYXNzPVxcXCIke25zfS1sb2NhdGlvbnMtcm93XFxcIj5cXG5cXHRcXHQ8ZGl2IGNsYXNzPVxcXCIke25zfS1sb2NhdGlvbnMtaXRlbS1pY29uICR7bnN9LWxvY2F0aW9ucy1jZWxsXFxcIj48L2Rpdj5cXG5cXHRcXHQ8ZGl2IGNsYXNzPVxcXCIke25zfS1sb2NhdGlvbnMtaXRlbS1kYXRhICR7bnN9LWxvY2F0aW9ucy1jZWxsXFxcIj5cXG5cXHRcXHRcXHQ8ZGl2IGNsYXNzPVxcXCIke25zfS1sb2NhdGlvbnMtaXRlbS1kYXRhLXRpdGxlXFxcIj48L2Rpdj5cXG5cXHRcXHRcXHQ8ZGl2IGNsYXNzPVxcXCIke25zfS1sb2NhdGlvbnMtaXRlbS1kYXRhLWl0ZW1zXFxcIj5cXG5cXHRcXHRcXHRcXHQ8ZGl2IGNsYXNzPVxcXCIke25zfS1sb2NhdGlvbnMtaXRlbS1kYXRhLWFkZHJlc3NcXFwiPjwvZGl2PlxcblxcdFxcdFxcdFxcdDxkaXYgY2xhc3M9XFxcIiR7bnN9LWxvY2F0aW9ucy1pdGVtLWRpc3RhbmNlXFxcIj48L2Rpdj5cXG5cXHRcXHRcXHQ8L2Rpdj5cXG5cXHRcXHQ8L2Rpdj5cXG5cXHQ8L2Rpdj5cXG48L2Rpdj5cXG5cIlxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvbGF5b3V0cy9zaG93LWxvY2F0aW9ucy90ZW1wbGF0ZXMvYWRkLWxvY2F0aW9ucy1pdGVtLmh0bWxcbiAqKiBtb2R1bGUgaWQgPSA0NFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxkaXYgY2xhc3M9XFxcIiR7bnN9LWxvY2F0aW9ucy1pdGVtICR7bnN9LWRhdGEtc2VjdGlvbiBJQk1DaGF0LXNlY29uZGFyeS1jb2xvcnNcXFwiPlxcblxcdDxkaXYgY2xhc3M9XFxcIiR7bnN9LWxvY2F0aW9ucy1pdGVtLWRhdGEtc2VjdGlvblxcXCI+XFxuXFx0XFx0PGJ1dHRvbiBjbGFzcz1cXFwiJHtuc30tbG9jYXRpb25zLWFsbCBJQk1DaGF0LWFjY2VudC1jb2xvcnNcXFwiPkJhY2sgdG8gQWxsIExvY2F0aW9uczwvYnV0dG9uPlxcblxcdDwvZGl2PlxcblxcdDxkaXYgY2xhc3M9XFxcIiR7bnN9LWxvY2F0aW9ucy1pdGVtLWRhdGFcXFwiPlxcblxcdFxcdDxkaXYgY2xhc3M9XFxcIiR7bnN9LWxvY2F0aW9ucy1pdGVtLWRhdGEtdGl0bGVcXFwiPjwvZGl2PlxcblxcdFxcdDxkaXYgY2xhc3M9XFxcIiR7bnN9LWxvY2F0aW9ucy1pdGVtLWRhdGEtaXRlbXNcXFwiPlxcblxcdFxcdFxcdDxkaXYgY2xhc3M9XFxcIiR7bnN9LWxvY2F0aW9ucy1pdGVtLWRhdGEtc2VjdGlvblxcXCI+XFxuXFx0XFx0XFx0XFx0PGEgY2xhc3M9XFxcIiR7bnN9LWxvY2F0aW9ucy1pdGVtLWRhdGEtYWRkcmVzcy1saW5rXFxcIj5cXG5cXHRcXHRcXHRcXHRcXHQ8ZGl2IGNsYXNzPVxcXCIke25zfS1sb2NhdGlvbnMtaXRlbS1kYXRhLWFkZHJlc3NcXFwiPjwvZGl2PlxcblxcdFxcdFxcdFxcdDwvYT5cXG5cXHRcXHRcXHQ8L2Rpdj5cXG5cXHRcXHRcXHQ8ZGl2IGNsYXNzPVxcXCIke25zfS1sb2NhdGlvbnMtaXRlbS1kYXRhLWVtYWlsXFxcIj48L2Rpdj5cXG5cXHRcXHRcXHQ8ZGl2IGNsYXNzPVxcXCIke25zfS1sb2NhdGlvbnMtaXRlbS1kYXRhLXBob25lXFxcIj48L2Rpdj5cXG5cXHRcXHRcXHQ8ZGl2IGNsYXNzPVxcXCIke25zfS1sb2NhdGlvbnMtaXRlbS1kYXRhLWhvdXJzXFxcIj48L2Rpdj5cXG5cXHRcXHRcXHQ8ZGl2IGNsYXNzPVxcXCIke25zfS1sb2NhdGlvbnMtaXRlbS1kYXRhLXRpbWV6b25lXFxcIj48L2Rpdj5cXG5cXHRcXHQ8L2Rpdj5cXG5cXHRcXHQ8YnV0dG9uIGNsYXNzPVxcXCIke25zfS1sb2NhdGlvbnMtaXRlbS1kYXRhLWhvdXJzLWJ1dHRvbiBJQk1DaGF0LWFjY2VudC1jb2xvcnNcXFwiPk1vcmUgSG91cnM8L2J1dHRvbj5cXG5cXHRcXHQ8ZGl2IGNsYXNzPVxcXCIke25zfS1sb2NhdGlvbnMtaXRlbS1kYXRhLWl0ZW1zXFxcIj5cXG5cXHRcXHRcXHQ8ZGl2IGNsYXNzPVxcXCIke25zfS1sb2NhdGlvbnMtaXRlbS1kYXRhLW1vcmUtaG91cnMgJHtuc30taGlkZGVuXFxcIj48L2Rpdj5cXG5cXHRcXHQ8L2Rpdj5cXG5cXHQ8L2Rpdj5cXG5cXHQ8ZGl2IGNsYXNzPVxcXCIke25zfS1sb2NhdGlvbnMtaXRlbS1kaXN0YW5jZVxcXCI+PC9kaXY+XFxuPC9kaXY+XFxuXCJcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2xheW91dHMvc2hvdy1sb2NhdGlvbnMvdGVtcGxhdGVzL2FkZC1sb2NhdGlvbi1pdGVtLmh0bWxcbiAqKiBtb2R1bGUgaWQgPSA0NVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxkaXYgY2xhc3M9XFxcIiR7bnN9LWRheXMtaG91cnMtZGF5XFxcIj5cXG5cXHQke2RheX1cXG48L2Rpdj5cXG48ZGl2IGNsYXNzPVxcXCIke25zfS1kYXlzLWhvdXJzLWhvdXJzXFxcIj5cXG5cXHRDbG9zZWRcXG48L2Rpdj5cXG5cIlxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvbGF5b3V0cy9zaG93LWxvY2F0aW9ucy90ZW1wbGF0ZXMvaG91cnMtY2xvc2VkLmh0bWxcbiAqKiBtb2R1bGUgaWQgPSA0NlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxkaXYgY2xhc3M9XFxcIiR7bnN9LWRheXMtaG91cnMtZGF5XFxcIj5cXG5cXHQke2RheX1cXG48L2Rpdj5cXG48ZGl2IGNsYXNzPVxcXCIke25zfS1kYXlzLWhvdXJzLWhvdXJzXFxcIj5cXG5cXHQke29wZW59ICZuZGFzaDsgJHtjbG9zZX1cXG48L2Rpdj5cXG5cIlxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvbGF5b3V0cy9zaG93LWxvY2F0aW9ucy90ZW1wbGF0ZXMvaG91cnMtb3Blbi5odG1sXG4gKiogbW9kdWxlIGlkID0gNDdcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gXCI8ZGl2IGNsYXNzPVxcXCIke25zfS1ob3Vycy1vcGVuXFxcIj5PcGVuIHRvZGF5OjwvZGl2PlxcbjxkaXYgY2xhc3M9XFxcIiR7bnN9LWhvdXJzLXRvZGF5XFxcIj5cXG5cXHQke29wZW59ICZuZGFzaDsgJHtjbG9zZX1cXG48L2Rpdj5cIlxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvbGF5b3V0cy9zaG93LWxvY2F0aW9ucy90ZW1wbGF0ZXMvaG91cnMtdG9kYXktb3Blbi5odG1sXG4gKiogbW9kdWxlIGlkID0gNDhcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gXCI8ZGl2IGNsYXNzPVxcXCIke25zfS1ob3Vycy1vcGVuXFxcIj5DbG9zZWQgdG9kYXkuPC9kaXY+XCJcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2xheW91dHMvc2hvdy1sb2NhdGlvbnMvdGVtcGxhdGVzL2hvdXJzLXRvZGF5LWNsb3NlZC5odG1sXG4gKiogbW9kdWxlIGlkID0gNDlcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gXCI8ZGl2IGNsYXNzPVxcXCIke25zfS1ob3Vycy10aW1lem9uZVxcXCI+KCAke3RpbWV6b25lfSApPC9kaXY+XCJcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2xheW91dHMvc2hvdy1sb2NhdGlvbnMvdGVtcGxhdGVzL2hvdXJzLXRpbWV6b25lLmh0bWxcbiAqKiBtb2R1bGUgaWQgPSA1MFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLyoqXG4qIChDKSBDb3B5cmlnaHQgSUJNIENvcnAuIDIwMTYuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4qXG4qIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7IHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0XG4qIGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS4gWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4qXG4qIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuKlxuKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlXG4qIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzXG4qIG9yIGltcGxpZWQuIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmQgbGltaXRhdGlvbnMgdW5kZXJcbiogdGhlIExpY2Vuc2UuXG4qL1xuXG52YXIgZXZlbnRzID0gcmVxdWlyZSgnLi4vLi4vZXZlbnRzJyk7XG52YXIgc3Vic2NyaWJlID0gZXZlbnRzLnN1YnNjcmliZTtcbnZhciBwdWJsaXNoID0gZXZlbnRzLnB1Ymxpc2g7XG5cbnZhciByZXF1ZXN0R2VvbG9jYXRpb25MYXRsb25ncyA9IFtdO1xuXG52YXIgTE9DQVRJT05fVElNRU9VVCA9IDIwICogMTAwMDtcblxudmFyIHJlcXVlc3RHZW9sb2NhdGlvbkxhdGxvbmdMYXlvdXQgPSB7XG5cdGluaXQ6IGZ1bmN0aW9uKCkge1xuXHRcdHN1YnNjcmliZSgnbGF5b3V0OnJlcXVlc3QtZ2VvbG9jYXRpb24tbGF0bG9uZycsIGZ1bmN0aW9uKGRhdGEpIHtcblx0XHRcdHZhciByZXF1ZXN0R2VvbG9jYXRpb25MYXRsb25nID0gbmV3IFJlcXVlc3RHZW9sb2NhdGlvbkxhdGxvbmcoZGF0YSk7XG5cdFx0XHRyZXF1ZXN0R2VvbG9jYXRpb25MYXRsb25nc1tkYXRhLnV1aWRdID0gcmVxdWVzdEdlb2xvY2F0aW9uTGF0bG9uZztcblx0XHR9KTtcblx0fVxufTtcblxuZnVuY3Rpb24gUmVxdWVzdEdlb2xvY2F0aW9uTGF0bG9uZyhkYXRhKSB7XG5cdHRoaXMuaW5pdChkYXRhKTtcbn1cblxuUmVxdWVzdEdlb2xvY2F0aW9uTGF0bG9uZy5wcm90b3R5cGUgPSB7XG5cdGluaXQ6IGZ1bmN0aW9uKGRhdGEpIHtcblx0XHR0aGlzLmRhdGEgPSBkYXRhLmRhdGE7XG5cdFx0dGhpcy51dWlkID0gZGF0YS51dWlkO1xuXHRcdHRoaXMucGFyZW50RWxlbWVudCA9IGRhdGEuZWxlbWVudDtcblx0XHR0aGlzLmxheW91dEVsZW1lbnQgPSBkYXRhLmxheW91dEVsZW1lbnQ7XG5cdFx0dGhpcy50aW1lZE91dCA9IGZhbHNlO1xuXHRcdHRoaXMudGltZW91dENoZWNrID0gc2V0VGltZW91dChmdW5jdGlvbigpIHtcblx0XHRcdHRoaXMudGltZWRPdXQgPSB0cnVlO1xuXHRcdFx0dGhpcy5oYW5kbGVMb2NhdGlvbk5vdFNoYXJlZCgpO1xuXHRcdH0uYmluZCh0aGlzKSwgTE9DQVRJT05fVElNRU9VVCk7XG5cdFx0cHVibGlzaCgnZW5hYmxlLWxvYWRpbmcnKTtcblx0XHRwdWJsaXNoKCdkaXNhYmxlLWlucHV0Jyk7XG5cdFx0bmF2aWdhdG9yLmdlb2xvY2F0aW9uLmdldEN1cnJlbnRQb3NpdGlvbihcblx0XHRcdGZ1bmN0aW9uKHBvc2l0aW9uKSB7XG5cdFx0XHRcdGlmICh0aGlzLnRpbWVkT3V0KSByZXR1cm4gZmFsc2U7XG5cdFx0XHRcdGNsZWFyVGltZW91dCh0aGlzLnRpbWVvdXRDaGVjayk7XG5cdFx0XHRcdHRoaXMuaGFuZGxlTG9jYXRpb25TaGFyZWQocG9zaXRpb24pO1xuXHRcdFx0fS5iaW5kKHRoaXMpLFxuXHRcdFx0ZnVuY3Rpb24oKSB7XG5cdFx0XHRcdGlmICh0aGlzLnRpbWVkT3V0KSByZXR1cm4gZmFsc2U7XG5cdFx0XHRcdGNsZWFyVGltZW91dCh0aGlzLnRpbWVvdXRDaGVjayk7XG5cdFx0XHRcdHRoaXMuaGFuZGxlTG9jYXRpb25Ob3RTaGFyZWQoKTtcblx0XHRcdH0uYmluZCh0aGlzKVxuXHRcdCk7XG5cdH0sXG5cdGhhbmRsZUxvY2F0aW9uU2hhcmVkOiBmdW5jdGlvbihwb3NpdGlvbikge1xuXHRcdHB1Ymxpc2goJ2VuYWJsZS1pbnB1dCcpO1xuXHRcdHB1Ymxpc2goJ2Rpc2FibGUtbG9hZGluZycpO1xuXHRcdHB1Ymxpc2goJ3NlbmQnLCB7XG5cdFx0XHR0ZXh0OiBwb3NpdGlvbi5jb29yZHMubGF0aXR1ZGUgKyAnLCcgKyBwb3NpdGlvbi5jb29yZHMubG9uZ2l0dWRlLFxuXHRcdFx0c2lsZW50OiB0cnVlXG5cdFx0fSk7XG5cdH0sXG5cdGhhbmRsZUxvY2F0aW9uTm90U2hhcmVkOiBmdW5jdGlvbigpIHtcblx0XHRwdWJsaXNoKCdlbmFibGUtaW5wdXQnKTtcblx0XHRwdWJsaXNoKCdkaXNhYmxlLWxvYWRpbmcnKTtcblx0XHRwdWJsaXNoKCdyZWNlaXZlJywgXCJZb3UgaGF2ZW4ndCBzaGFyZWQgeW91ciBsb2NhdGlvbiBvbiB0aGlzIHdlYnNpdGUuXCIpO1xuXHRcdHB1Ymxpc2goJ3NlbmQnLCB7XG5cdFx0XHR0ZXh0OiAnZmluZCBuZWFyZXN0IGxvY2F0aW9ucycsXG5cdFx0XHRzaWxlbnQ6IHRydWVcblx0XHR9KTtcblx0fVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSByZXF1ZXN0R2VvbG9jYXRpb25MYXRsb25nTGF5b3V0O1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9sYXlvdXRzL3JlcXVlc3QtZ2VvbG9jYXRpb24tbGF0bG9uZy9pbmRleC5qc1xuICoqIG1vZHVsZSBpZCA9IDUxXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvKipcbiogKEMpIENvcHlyaWdodCBJQk0gQ29ycC4gMjAxNi4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbipcbiogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTsgeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHRcbiogaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbipcbiogaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4qXG4qIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmUgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2VcbiogaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Ncbiogb3IgaW1wbGllZC4gU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZCBsaW1pdGF0aW9ucyB1bmRlclxuKiB0aGUgTGljZW5zZS5cbiovXG5cbnZhciBldmVudHMgPSByZXF1aXJlKCcuLi8uLi9ldmVudHMnKTtcbnZhciBzdWJzY3JpYmUgPSBldmVudHMuc3Vic2NyaWJlO1xudmFyIHJlcXVlc3RHZW9sb2NhdGlvblppcGNvZGVMYXlvdXQgPSB7XG5cdGluaXQ6IGZ1bmN0aW9uKCkge1xuXHRcdHN1YnNjcmliZSgnbGF5b3V0OnJlcXVlc3QtZ2VvbG9jYXRpb24temlwY29kZScsIGZ1bmN0aW9uKCkge30pO1xuXHR9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVlc3RHZW9sb2NhdGlvblppcGNvZGVMYXlvdXQ7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2xheW91dHMvcmVxdWVzdC1nZW9sb2NhdGlvbi16aXBjb2RlL2luZGV4LmpzXG4gKiogbW9kdWxlIGlkID0gNTJcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8qKlxuKiAoQykgQ29weXJpZ2h0IElCTSBDb3JwLiAyMDE2LiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuKlxuKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpOyB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdFxuKiBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuKlxuKiBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbipcbiogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZSBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZVxuKiBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzc1xuKiBvciBpbXBsaWVkLiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kIGxpbWl0YXRpb25zIHVuZGVyXG4qIHRoZSBMaWNlbnNlLlxuKi9cblxucmVxdWlyZSgnLi9zdHlsZXMuY3NzJyk7XG5cbnZhciBldmVudHMgPSByZXF1aXJlKCcuLi8uLi9ldmVudHMnKTtcbnZhciBzdWJzY3JpYmUgPSBldmVudHMuc3Vic2NyaWJlO1xudmFyIHB1Ymxpc2ggPSBldmVudHMucHVibGlzaDtcbnZhciBhY3RpdmVDbGFzc05hbWUgPSAnSUJNQ2hhdC1hY2NlbnQtY29sb3JzJztcbnZhciBpbmFjdGl2ZUNsYXNzTmFtZSA9ICdJQk1DaGF0LXNlY29uZGFyeS1jb2xvcnMnO1xudmFyIHV0aWxzID0gcmVxdWlyZSgnLi4vLi4vdXRpbHMnKTtcblxudmFyIG5zID0gJ0lCTUNoYXQtaXNsb2NhdGlvbmFwaSc7XG52YXIgY2hvb3NlTG9jYXRpb25UeXBlcyA9IFtdO1xuXG52YXIgY2hvb3NlTG9jYXRpb25UeXBlTGF5b3V0ID0ge1xuXHRpbml0OiBmdW5jdGlvbigpIHtcblx0XHRzdWJzY3JpYmUoJ2xheW91dDpjaG9vc2UtbG9jYXRpb24tdHlwZScsIGZ1bmN0aW9uKGRhdGEpIHtcblx0XHRcdHZhciBjaG9vc2VMb2NhdGlvblR5cGUgPSBuZXcgQ2hvb3NlTG9jYXRpb25UeXBlKGRhdGEpO1xuXHRcdFx0Y2hvb3NlTG9jYXRpb25UeXBlc1tkYXRhLnV1aWRdID0gY2hvb3NlTG9jYXRpb25UeXBlO1xuXHRcdH0pO1xuXHR9XG59O1xuXG52YXIgdmFsdWVzID0ge1xuXHRwb3N0YWxjb2RlOiAnemlwY29kZScsXG5cdGdlb2xvY2F0aW9uOiAnbGF0bG9uZydcbn07XG5cbnZhciB0ZW1wbGF0ZXMgPSB7XG5cdGJhc2U6IHJlcXVpcmUoJy4vdGVtcGxhdGVzL2Jhc2UuaHRtbCcpXG59O1xuXG5mdW5jdGlvbiBDaG9vc2VMb2NhdGlvblR5cGUoZGF0YSkge1xuXHR0aGlzLmluaXQoZGF0YSk7XG59XG5cbkNob29zZUxvY2F0aW9uVHlwZS5wcm90b3R5cGUgPSB7XG5cdGluaXQ6IGZ1bmN0aW9uKGRhdGEpIHtcblx0XHR0aGlzLmRhdGEgPSBkYXRhLmRhdGE7XG5cdFx0dGhpcy51dWlkID0gZGF0YS51dWlkO1xuXHRcdGlmICgnbmF2aWdhdG9yJyBpbiB3aW5kb3cgJiYgJ2dlb2xvY2F0aW9uJyBpbiBuYXZpZ2F0b3IpIHtcblx0XHRcdHRoaXMuZXZlbnRMaXN0ZW5lcnMgPSBbXTtcblx0XHRcdHRoaXMucGFyZW50RWxlbWVudCA9IGRhdGEuZWxlbWVudDtcblx0XHRcdHRoaXMubGF5b3V0RWxlbWVudCA9IGRhdGEubGF5b3V0RWxlbWVudDtcblx0XHRcdHRoaXMuZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblx0XHRcdHRoaXMuZWwuaW5uZXJIVE1MID0gdXRpbHMuY29tcGlsZSh0ZW1wbGF0ZXMuYmFzZSwge1xuXHRcdFx0XHRuczogbnMsXG5cdFx0XHRcdCd2YWx1ZXMuZ2VvbG9jYXRpb24nOiB2YWx1ZXMuZ2VvbG9jYXRpb24sXG5cdFx0XHRcdCd2YWx1ZXMucG9zdGFsY29kZSc6IHZhbHVlcy5wb3N0YWxjb2RlXG5cdFx0XHR9KTtcblx0XHRcdHRoaXMubGF5b3V0RWxlbWVudC5hcHBlbmRDaGlsZCh0aGlzLmVsKTtcblx0XHRcdHRoaXMuYnV0dG9ucyA9IHRoaXMubGF5b3V0RWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKCdidXR0b24nKTtcblx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5idXR0b25zLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdHRoaXMuYnV0dG9uc1tpXS5kYXRhc2V0LnV1aWQgPSB0aGlzLnV1aWQ7XG5cdFx0XHRcdHRoaXMuYnV0dG9uc1tpXS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuaGFuZGxlQ2xpY2spO1xuXHRcdFx0XHR0aGlzLmV2ZW50TGlzdGVuZXJzLnB1c2godGhpcy5idXR0b25zW2ldKTtcblx0XHRcdH1cblx0XHRcdGlmICh0aGlzLmV2ZW50TGlzdGVuZXJzLmxlbmd0aCA+IDApXG5cdFx0XHRcdHRoaXMuc3Vic2NyaWJlU2VuZCA9IHN1YnNjcmliZSgnc2VuZCcsIHRoaXMucmVtb3ZlQWxsRXZlbnRMaXN0ZW5lcnMuYmluZCh0aGlzKSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHB1Ymxpc2goJ3NlbmQnLCB7XG5cdFx0XHRcdHRleHQ6IHZhbHVlcy5wb3N0YWxjb2RlLFxuXHRcdFx0XHRzaWxlbnQ6IHRydWVcblx0XHRcdH0pO1xuXHRcdH1cblx0fSxcblx0aGFuZGxlQ2xpY2s6IGZ1bmN0aW9uKCkge1xuXHRcdHZhciBkYXRhID0ge1xuXHRcdFx0c2lsZW50OiB0cnVlLFxuXHRcdFx0dGV4dDogbnVsbFxuXHRcdH07XG5cdFx0ZGF0YS50ZXh0ID0gdGhpcy5kYXRhc2V0LmlucHV0O1xuXHRcdHRoaXMuY2xhc3NMaXN0LmFkZChhY3RpdmVDbGFzc05hbWUpO1xuXHRcdHRoaXMuY2xhc3NMaXN0LnJlbW92ZShpbmFjdGl2ZUNsYXNzTmFtZSk7XG5cdFx0cHVibGlzaCgnc2VuZCcsIGRhdGEpO1xuXHRcdHB1Ymxpc2goJ2ZvY3VzLWlucHV0Jyk7XG5cdH0sXG5cdHJlbW92ZUFsbEV2ZW50TGlzdGVuZXJzOiBmdW5jdGlvbigpIHtcblx0XHRpZiAodGhpcy5ldmVudExpc3RlbmVycy5sZW5ndGggPiAwKSB7XG5cdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuZXZlbnRMaXN0ZW5lcnMubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0dGhpcy5ldmVudExpc3RlbmVyc1tpXS5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuaGFuZGxlQ2xpY2spO1xuXHRcdFx0XHR0aGlzLmV2ZW50TGlzdGVuZXJzW2ldLnNldEF0dHJpYnV0ZSgnZGlzYWJsZWQnLCB0cnVlKTtcblx0XHRcdH1cblx0XHRcdHRoaXMuZXZlbnRMaXN0ZW5lcnMgPSBbXTtcblx0XHR9XG5cdFx0dGhpcy5zdWJzY3JpYmVTZW5kLnJlbW92ZSgpO1xuXHR9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGNob29zZUxvY2F0aW9uVHlwZUxheW91dDtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvbGF5b3V0cy9jaG9vc2UtbG9jYXRpb24tdHlwZS9pbmRleC5qc1xuICoqIG1vZHVsZSBpZCA9IDUzXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IFwiLklCTUNoYXQtaXNsb2NhdGlvbmFwaS1jb250YWluZXIge1xcblxcdHRleHQtYWxpZ246Y2VudGVyO1xcbn1cXG5cXG4uSUJNQ2hhdC1pc2xvY2F0aW9uYXBpLWNvbnRhaW5lciBidXR0b24ge1xcblxcdG1hcmdpbjogMWVtIGF1dG8gMCBhdXRvO1xcblxcdG1pbi13aWR0aDoyMDBweDtcXG5cXHRtYXgtd2lkdGg6MjQwcHg7XFxuXFx0d2lkdGg6NzUlO1xcbn1cXG5cXG4uSUJNQ2hhdC1pc2xvY2F0aW9uYXBpLWNvbnRhaW5lciBkaXY6bGFzdC1jaGlsZCB7XFxuXFx0bWFyZ2luLWJvdHRvbTogMWVtO1xcbn1cXG5cIlxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3Jhdy1sb2FkZXIhLi9zcmMvbGF5b3V0cy9jaG9vc2UtbG9jYXRpb24tdHlwZS9zdHlsZXMuY3NzXG4gKiogbW9kdWxlIGlkID0gNTVcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gXCI8ZGl2IGNsYXNzPVxcXCIke25zfS1jb250YWluZXJcXFwiPlxcblxcdDxkaXY+PGJ1dHRvbiBjbGFzcz1cXFwiSUJNQ2hhdC1zZWNvbmRhcnktY29sb3JzXFxcIiBkYXRhLWlucHV0PVxcXCIke3ZhbHVlcy5nZW9sb2NhdGlvbn1cXFwiPlVzZSBNeSBDdXJyZW50IExvY2F0aW9uPC9idXR0b24+PC9kaXY+XFxuXFx0PGRpdj48YnV0dG9uIGNsYXNzPVxcXCJJQk1DaGF0LXNlY29uZGFyeS1jb2xvcnNcXFwiIGRhdGEtaW5wdXQ9XFxcIiR7dmFsdWVzLnBvc3RhbGNvZGV9XFxcIj5BIFppcCBDb2RlPC9idXR0b24+PC9kaXY+XFxuPC9kaXY+XFxuXCJcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2xheW91dHMvY2hvb3NlLWxvY2F0aW9uLXR5cGUvdGVtcGxhdGVzL2Jhc2UuaHRtbFxuICoqIG1vZHVsZSBpZCA9IDU2XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvKipcbiogKEMpIENvcHlyaWdodCBJQk0gQ29ycC4gMjAxNi4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbipcbiogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTsgeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHRcbiogaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbipcbiogaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4qXG4qIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmUgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2VcbiogaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Ncbiogb3IgaW1wbGllZC4gU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZCBsaW1pdGF0aW9ucyB1bmRlclxuKiB0aGUgTGljZW5zZS5cbiovXG5cbnJlcXVpcmUoJy4vc3R5bGVzLmNzcycpO1xuXG52YXIgZXZlbnRzID0gcmVxdWlyZSgnLi4vLi4vZXZlbnRzJyk7XG52YXIgc3Vic2NyaWJlID0gZXZlbnRzLnN1YnNjcmliZTtcbnZhciBwdWJsaXNoID0gZXZlbnRzLnB1Ymxpc2g7XG52YXIgdXRpbHMgPSByZXF1aXJlKCcuLi8uLi91dGlscycpO1xudmFyIG5zID0gJ0lCTUNoYXQtY2hvb3NlJztcbnZhciBhY3RpdmVDbGFzc05hbWUgPSAnSUJNQ2hhdC1hY2NlbnQtY29sb3JzJztcbnZhciBpbmFjdGl2ZUNsYXNzTmFtZSA9ICdJQk1DaGF0LXNlY29uZGFyeS1jb2xvcnMnO1xudmFyIHdpZGdldHMgPSBbXTtcbnZhciB0ZW1wbGF0ZXMgPSB7XG5cdGJ1dHRvbjogcmVxdWlyZSgnLi90ZW1wbGF0ZXMvYnV0dG9uLmh0bWwnKVxufTtcblxudmFyIGNob29zZUxheW91dCA9IHtcblx0aW5pdDogZnVuY3Rpb24oKSB7XG5cdFx0c3Vic2NyaWJlKCdsYXlvdXQ6Y2hvb3NlJywgZnVuY3Rpb24oZGF0YSkge1xuXHRcdFx0dmFyIHdpZGdldCA9IG5ldyBDaG9vc2UoZGF0YSk7XG5cdFx0XHR3aWRnZXRzW2RhdGEudXVpZF0gPSB3aWRnZXQ7XG5cdFx0fSk7XG5cdFx0c3Vic2NyaWJlKCdsYXlvdXQ6Y29uZmlybScsIGZ1bmN0aW9uKGRhdGEpIHtcblx0XHRcdHZhciB3aWRnZXQgPSBuZXcgQ2hvb3NlKGRhdGEpO1xuXHRcdFx0d2lkZ2V0c1tkYXRhLnV1aWRdID0gd2lkZ2V0O1xuXHRcdH0pO1xuXHR9XG59O1xuXG5mdW5jdGlvbiBDaG9vc2UoZGF0YSkge1xuXHR0aGlzLmluaXQoZGF0YSk7XG59XG5cbkNob29zZS5wcm90b3R5cGUuaW5pdCA9IGZ1bmN0aW9uKGRhdGEpIHtcblx0dGhpcy5hbGxvd011bHRpcGxlID0gKGRhdGEubWVzc2FnZS5pbnB1dHZhbGlkYXRpb24uc29tZU9mICE9PSB1bmRlZmluZWQpO1xuXHR0aGlzLnZhbHVlcyA9IFtdO1xuXHR0aGlzLmRhdGEgPSAodGhpcy5hbGxvd011bHRpcGxlKSA/IGRhdGEubWVzc2FnZS5pbnB1dHZhbGlkYXRpb24uc29tZU9mIDogZGF0YS5tZXNzYWdlLmlucHV0dmFsaWRhdGlvbi5vbmVPZjtcblx0dGhpcy51dWlkID0gZGF0YS51dWlkO1xuXHR0aGlzLnBhcmVudEVsZW1lbnQgPSBkYXRhLmVsZW1lbnQ7XG5cdHRoaXMubGF5b3V0RWxlbWVudCA9IGRhdGEubGF5b3V0RWxlbWVudDtcblx0dGhpcy5tc2dFbGVtZW50ID0gZGF0YS5tc2dFbGVtZW50O1xuXHR0aGlzLmRyYXdCdXR0b25zKCk7XG5cdHRoaXMuc3Vic2NyaWJlU2VuZCA9IHN1YnNjcmliZSgnc2VuZCcsIHRoaXMucmVtb3ZlQWxsRXZlbnRMaXN0ZW5lcnMuYmluZCh0aGlzKSk7XG59O1xuXG5DaG9vc2UucHJvdG90eXBlLmV2ZW50TGlzdGVuZXJzID0gW107XG5cbkNob29zZS5wcm90b3R5cGUuZHJhd0J1dHRvbnMgPSBmdW5jdGlvbigpIHtcblx0dmFyIHRtcGwgPSB0ZW1wbGF0ZXMuYnV0dG9uO1xuXHR0aGlzLmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cdHRoaXMuZWwuY2xhc3NMaXN0LmFkZChucyArICctY29udGFpbmVyJyk7XG5cblx0Zm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmRhdGEubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgdGV4dCA9IHRoaXMuZGF0YVtpXTtcblx0XHR2YXIgYnV0dG9uSG9sZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cdFx0YnV0dG9uSG9sZGVyLmNsYXNzTGlzdC5hZGQobnMgKyAnLW9wdGlvbicpO1xuXHRcdHZhciBwYXJzZWQgPSB1dGlscy5jb21waWxlKHRtcGwsIHtcblx0XHRcdHRleHQ6IHRleHRcblx0XHR9KTtcblx0XHR2YXIgYnV0dG9uO1xuXHRcdGJ1dHRvbkhvbGRlci5pbm5lckhUTUwgPSBwYXJzZWQ7XG5cdFx0dGhpcy5lbC5hcHBlbmRDaGlsZChidXR0b25Ib2xkZXIpO1xuXHRcdGJ1dHRvbiA9IGJ1dHRvbkhvbGRlci5xdWVyeVNlbGVjdG9yKCdidXR0b24nKTtcblx0XHRidXR0b24uc2V0QXR0cmlidXRlKCdkYXRhLXV1aWQnLCB0aGlzLnV1aWQpO1xuXHRcdGJ1dHRvbi5jbGFzc0xpc3QuYWRkKGluYWN0aXZlQ2xhc3NOYW1lKTtcblx0XHR0aGlzLmFkZExpc3RlbmVyKGJ1dHRvbik7XG5cdH1cblxuXHRpZiAodGhpcy5hbGxvd011bHRpcGxlKSB7XG5cdFx0dmFyIHN1Ym1pdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXHRcdHZhciBzdWJtaXRCdG4gPSB1dGlscy5jb21waWxlKHRlbXBsYXRlcy5maWVsZCwge1xuXHRcdFx0dGV4dDogJ1N1Ym1pdCdcblx0XHR9KTtcblx0XHRzdWJtaXQuY2xhc3NOYW1lID0gbnMgKyAnLXN1Ym1pdCc7XG5cdFx0c3VibWl0LmlubmVySFRNTCA9IHN1Ym1pdEJ0bjtcblx0XHR0aGlzLnN1Ym1pdEJ1dHRvbiA9IHN1Ym1pdC5xdWVyeVNlbGVjdG9yKCdidXR0b24nKTtcblx0XHR0aGlzLnN1Ym1pdEJ1dHRvbi5jbGFzc0xpc3QuYWRkKGFjdGl2ZUNsYXNzTmFtZSk7XG5cdFx0dGhpcy5zdWJtaXRCdXR0b24uc2V0QXR0cmlidXRlKCdkaXNhYmxlZCcsIHRydWUpO1xuXHRcdHRoaXMuZWwuYXBwZW5kQ2hpbGQoc3VibWl0KTtcblx0XHR0aGlzLmFkZFN1Ym1pdExpc3RlbmVyKHRoaXMuc3VibWl0QnV0dG9uKTtcblx0fVxuXG5cdHRoaXMubGF5b3V0RWxlbWVudC5hcHBlbmRDaGlsZCh0aGlzLmVsKTtcbn07XG5cbkNob29zZS5wcm90b3R5cGUuaGFuZGxlQ2xpY2sgPSBmdW5jdGlvbigpIHtcblx0dmFyIGRhdGEgPSB7XG5cdFx0c2lsZW50OiB0cnVlLFxuXHRcdHRleHQ6IG51bGxcblx0fTtcblx0ZGF0YS50ZXh0ID0gdGhpcy5kYXRhc2V0LmlucHV0O1xuXHR0aGlzLmNsYXNzTmFtZSA9IGFjdGl2ZUNsYXNzTmFtZSArICcgSUJNQ2hhdC1hY2NlbnQtY29sb3JzJztcblx0cHVibGlzaCgnc2VuZCcsIGRhdGEpO1xufTtcblxuQ2hvb3NlLnByb3RvdHlwZS5oYW5kbGVNdWx0aUNsaWNrID0gZnVuY3Rpb24oKSB7XG5cdHZhciBidXR0b25zO1xuXHR2YXIgaW5zdGFuY2UgPSB3aWRnZXRzW3RoaXMuZGF0YXNldC51dWlkXTtcblx0aWYgKHV0aWxzLmhhc0NsYXNzKHRoaXMsIGFjdGl2ZUNsYXNzTmFtZSkpIHtcblx0XHR0aGlzLmNsYXNzTGlzdC5hZGQoaW5hY3RpdmVDbGFzc05hbWUpO1xuXHRcdHRoaXMuY2xhc3NMaXN0LnJlbW92ZShhY3RpdmVDbGFzc05hbWUpO1xuXHR9IGVsc2Uge1xuXHRcdHRoaXMuY2xhc3NMaXN0LmFkZChhY3RpdmVDbGFzc05hbWUpO1xuXHRcdHRoaXMuY2xhc3NMaXN0LnJlbW92ZShpbmFjdGl2ZUNsYXNzTmFtZSk7XG5cdH1cblx0YnV0dG9ucyA9IGluc3RhbmNlLmVsLnF1ZXJ5U2VsZWN0b3JBbGwoJy4nICsgbnMgKyAnLW9wdGlvbiAuJyArIGFjdGl2ZUNsYXNzTmFtZSk7XG5cdGlmIChidXR0b25zLmxlbmd0aCA+IDApXG5cdFx0aW5zdGFuY2Uuc3VibWl0QnV0dG9uLnJlbW92ZUF0dHJpYnV0ZSgnZGlzYWJsZWQnKTtcblx0ZWxzZVxuXHRcdGluc3RhbmNlLnN1Ym1pdEJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2Rpc2FibGVkJywgdHJ1ZSk7XG59O1xuXG5DaG9vc2UucHJvdG90eXBlLmhhbmRsZVN1Ym1pdCA9IGZ1bmN0aW9uKCkge1xuXHR2YXIgYnV0dG9ucyA9IHRoaXMuZWwucXVlcnlTZWxlY3RvckFsbCgnLicgKyBhY3RpdmVDbGFzc05hbWUpO1xuXHRmb3IgKHZhciBpID0gMDsgaSA8IGJ1dHRvbnMubGVuZ3RoOyBpKyspXG5cdFx0dGhpcy52YWx1ZXMucHVzaChidXR0b25zW2ldLmRhdGFzZXQuaW5wdXQpO1xuXHRwdWJsaXNoKCdzZW5kJywge1xuXHRcdHNpbGVudDogdHJ1ZSxcblx0XHR0ZXh0OiB0aGlzLnZhbHVlcy50b1N0cmluZygpXG5cdH0pO1xufTtcblxuQ2hvb3NlLnByb3RvdHlwZS5hZGRMaXN0ZW5lciA9IGZ1bmN0aW9uKGVsKSB7XG5cdGlmICh0aGlzLmFsbG93TXVsdGlwbGUpXG5cdFx0ZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmhhbmRsZU11bHRpQ2xpY2spO1xuXHRlbHNlXG5cdFx0ZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmhhbmRsZUNsaWNrKTtcblx0dGhpcy5ldmVudExpc3RlbmVycy5wdXNoKHsgZWw6IGVsLCBjYjogKHRoaXMuYWxsb3dNdWx0aXBsZSkgPyB0aGlzLmhhbmRsZU11bHRpQ2xpY2s6IHRoaXMuaGFuZGxlQ2xpY2sgfSk7XG59O1xuXG5DaG9vc2UucHJvdG90eXBlLmFkZFN1Ym1pdExpc3RlbmVyID0gZnVuY3Rpb24oZWwpIHtcblx0ZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmhhbmRsZVN1Ym1pdC5iaW5kKHRoaXMpKTtcblx0dGhpcy5ldmVudExpc3RlbmVycy5wdXNoKHsgZWw6IGVsLCBjYjogdGhpcy5oYW5kbGVTdWJtaXQuYmluZCh0aGlzKSB9KTtcbn07XG5cbkNob29zZS5wcm90b3R5cGUucmVtb3ZlQWxsRXZlbnRMaXN0ZW5lcnMgPSBmdW5jdGlvbigpIHtcblx0aWYgKHRoaXMuZXZlbnRMaXN0ZW5lcnMubGVuZ3RoID4gMCkge1xuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5ldmVudExpc3RlbmVycy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dGhpcy5ldmVudExpc3RlbmVyc1tpXS5lbC5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuZXZlbnRMaXN0ZW5lcnNbaV0uY2IpO1xuXHRcdFx0dGhpcy5ldmVudExpc3RlbmVyc1tpXS5lbC5zZXRBdHRyaWJ1dGUoJ2Rpc2FibGVkJywgdHJ1ZSk7XG5cdFx0fVxuXHRcdHRoaXMuZXZlbnRMaXN0ZW5lcnMgPSBbXTtcblx0XHR0aGlzLnN1YnNjcmliZVNlbmQucmVtb3ZlKCk7XG5cdH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gY2hvb3NlTGF5b3V0O1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9sYXlvdXRzL2Nob29zZS9pbmRleC5qc1xuICoqIG1vZHVsZSBpZCA9IDU3XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IFwiLklCTUNoYXQtY2hvb3NlLWNvbnRhaW5lciB7XFxuXFx0dGV4dC1hbGlnbjpjZW50ZXI7XFxuXFx0cGFkZGluZzowIDAgMWVtIDA7XFxufVxcblxcbi5JQk1DaGF0LWNob29zZS1jb250YWluZXIgc3BhbiB7XFxuXFx0ZGlzcGxheTppbmxpbmUtYmxvY2s7XFxuXFx0bWFyZ2luOiAxZW0gMWVtIDAgMWVtO1xcbn1cXG5cXG4uSUJNQ2hhdC1jaG9vc2UtY29udGFpbmVyIGRpdiB7XFxuXFx0bWFyZ2luOiAxZW0gYXV0byAwIGF1dG87XFxufVxcblxcbi5JQk1DaGF0LWNob29zZS1jb250YWluZXIgYnV0dG9uIHtcXG5cXHRtaW4td2lkdGg6MjMwcHg7XFxuXFx0bWF4LXdpZHRoOjI3MHB4O1xcbn1cXG5cIlxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3Jhdy1sb2FkZXIhLi9zcmMvbGF5b3V0cy9jaG9vc2Uvc3R5bGVzLmNzc1xuICoqIG1vZHVsZSBpZCA9IDU5XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGJ1dHRvbiBjbGFzcz1cXFwiSUJNQ2hhdC1zZWNvbmRhcnktY29sb3JzXFxcIiBkYXRhLWlucHV0PVxcXCIke3RleHR9XFxcIj4ke3RleHR9PC9idXR0b24+XFxuXCJcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2xheW91dHMvY2hvb3NlL3RlbXBsYXRlcy9idXR0b24uaHRtbFxuICoqIG1vZHVsZSBpZCA9IDYwXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvKipcbiogKEMpIENvcHlyaWdodCBJQk0gQ29ycC4gMjAxNi4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbipcbiogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTsgeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHRcbiogaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbipcbiogaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4qXG4qIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmUgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2VcbiogaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Ncbiogb3IgaW1wbGllZC4gU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZCBsaW1pdGF0aW9ucyB1bmRlclxuKiB0aGUgTGljZW5zZS5cbiovXG5cbnJlcXVpcmUoJy4vc3R5bGVzLmNzcycpO1xuXG52YXIgZXZlbnRzID0gcmVxdWlyZSgnLi4vLi4vZXZlbnRzJyk7XG52YXIgcHJvZmlsZSA9IHJlcXVpcmUoJy4uLy4uL3Byb2ZpbGUnKTtcbnZhciB1dGlscyA9IHJlcXVpcmUoJy4uLy4uL3V0aWxzJyk7XG52YXIgc3Vic2NyaWJlID0gZXZlbnRzLnN1YnNjcmliZTtcbnZhciBwdWJsaXNoID0gZXZlbnRzLnB1Ymxpc2g7XG52YXIgbnMgPSAnSUJNQ2hhdC1mb3JtJztcbnZhciBhY3RpdmVDbGFzc05hbWUgPSAnSUJNQ2hhdC1hY2NlbnQtY29sb3JzJztcbnZhciBpbmFjdGl2ZUNsYXNzTmFtZSA9ICdJQk1DaGF0LXNlY29uZGFyeS1jb2xvcnMnO1xudmFyIHRlbXBsYXRlcyA9IHtcblx0YmFzZTogcmVxdWlyZSgnLi90ZW1wbGF0ZXMvYmFzZS5odG1sJyksXG5cdGZpZWxkOiByZXF1aXJlKCcuL3RlbXBsYXRlcy9maWVsZC5odG1sJylcbn07XG52YXIgd2lkZ2V0cyA9IFtdO1xuXG52YXIgZm9ybUxheW91dCA9IHtcblx0aW5pdDogZnVuY3Rpb24oKSB7XG5cdFx0c3Vic2NyaWJlKCdsYXlvdXQ6Zm9ybScsIGZ1bmN0aW9uKGRhdGEpIHtcblx0XHRcdHZhciB3aWRnZXQgPSBuZXcgRm9ybShkYXRhKTtcblx0XHRcdHdpZGdldHNbZGF0YS51dWlkXSA9IHdpZGdldDtcblx0XHR9KTtcblx0fVxufTtcblxuZnVuY3Rpb24gRm9ybShkYXRhKSB7XG5cdHRoaXMuaW5pdChkYXRhKTtcbn1cblxuRm9ybS5wcm90b3R5cGUuaW5pdCA9IGZ1bmN0aW9uKGRhdGEpIHtcblx0dGhpcy5kYXRhID0gZGF0YS5tZXNzYWdlLnN0b3JlIHx8IFtdO1xuXHR0aGlzLmFjdGlvbiA9IGRhdGEubWVzc2FnZS5hY3Rpb24gfHwgJyc7XG5cdHRoaXMudXVpZCA9IGRhdGEudXVpZDtcblx0dGhpcy5wYXJlbnRFbGVtZW50ID0gZGF0YS5lbGVtZW50O1xuXHR0aGlzLmxheW91dEVsZW1lbnQgPSBkYXRhLmxheW91dEVsZW1lbnQ7XG5cdHRoaXMubXNnRWxlbWVudCA9IGRhdGEubXNnRWxlbWVudDtcblx0dGhpcy5kcmF3Rm9ybSgpO1xuXHR0aGlzLnN1YnNjcmliZVNlbmQgPSBzdWJzY3JpYmUoJ3NlbmQnLCB0aGlzLnJlbW92ZUV2ZW50TGlzdGVuZXJzLmJpbmQodGhpcykpO1xuXHRwdWJsaXNoKCdkaXNhYmxlLWlucHV0Jyk7XG59O1xuXG5Gb3JtLnByb3RvdHlwZS5kcmF3Rm9ybSA9IGZ1bmN0aW9uKCkge1xuXHR2YXIgYmFzZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXHR2YXIgZm9ybUZpZWxkcztcblx0YmFzZS5pbm5lckhUTUwgPSB0ZW1wbGF0ZXMuYmFzZTtcblx0Zm9ybUZpZWxkcyA9IGJhc2UucXVlcnlTZWxlY3RvcignLklCTUNoYXQtZm9ybS1maWVsZHMnKTtcblx0dGhpcy5kYXRhLmZvckVhY2goZnVuY3Rpb24oZGF0dW0pIHtcblx0XHR2YXIgZmllbGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblx0XHRmaWVsZC5pbm5lckhUTUwgPSB1dGlscy5jb21waWxlKHRlbXBsYXRlcy5maWVsZCwge1xuXHRcdFx0bGFiZWw6IGRhdHVtLmxhYmVsIHx8ICcnLFxuXHRcdFx0bmFtZTogZGF0dW0ubmFtZSxcblx0XHRcdHZhbHVlOiAnJ1xuXHRcdH0pO1xuXHRcdGZpZWxkLmNsYXNzTmFtZSA9IG5zICsgJy1maWVsZHMtcm93Jztcblx0XHRmb3JtRmllbGRzLmFwcGVuZENoaWxkKGZpZWxkKTtcblx0fSk7XG5cdHRoaXMuZmllbGRzID0gZm9ybUZpZWxkcy5xdWVyeVNlbGVjdG9yQWxsKCdpbnB1dCcpO1xuXHR0aGlzLnN1Ym1pdEJ1dHRvbiA9IGJhc2UucXVlcnlTZWxlY3RvcignLicgKyBucyArICctc3VibWl0Jyk7XG5cdHRoaXMuY2FuY2VsQnV0dG9uID0gYmFzZS5xdWVyeVNlbGVjdG9yKCcuJyArIG5zICsgJy1jYW5jZWwnKTtcblx0dGhpcy5zdWJtaXRCdXR0b24uY2xhc3NMaXN0LmFkZChpbmFjdGl2ZUNsYXNzTmFtZSk7XG5cdHRoaXMuY2FuY2VsQnV0dG9uLmNsYXNzTGlzdC5hZGQoaW5hY3RpdmVDbGFzc05hbWUpO1xuXHR0aGlzLmxheW91dEVsZW1lbnQuYXBwZW5kQ2hpbGQoYmFzZSk7XG5cdHRoaXMuZmllbGRzWzBdLmZvY3VzKCk7XG5cdHRoaXMuYWRkRXZlbnRMaXN0ZW5lcnMoKTtcbn07XG5cbkZvcm0ucHJvdG90eXBlLmhhbmRsZVN1Ym1pdCA9IGZ1bmN0aW9uKCkge1xuXHRpZiAodGhpcy52YWxpZGF0ZUZpZWxkcygpID09PSB0cnVlKSB7XG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmZpZWxkcy5sZW5ndGg7IGkrKylcblx0XHRcdHByb2ZpbGUuc2V0KHRoaXMuZmllbGRzW2ldLmdldEF0dHJpYnV0ZSgnbmFtZScpLCB0aGlzLmZpZWxkc1tpXS52YWx1ZSk7XG5cdFx0dGhpcy5zdWJtaXRCdXR0b24uY2xhc3NMaXN0LmFkZChhY3RpdmVDbGFzc05hbWUpO1xuXHRcdHB1Ymxpc2goJ3NlbmQnLCB7XG5cdFx0XHRzaWxlbnQ6IHRydWUsXG5cdFx0XHR0ZXh0OiAnc3VjY2Vzcydcblx0XHR9KTtcblx0XHRwdWJsaXNoKCdlbmFibGUtaW5wdXQnKTtcblx0fSBlbHNlIHtcblx0XHR0aGlzLnNldEZvY3VzT25FcnJvcigpO1xuXHR9XG59O1xuXG5Gb3JtLnByb3RvdHlwZS5zZXRGb2N1c09uRXJyb3IgPSBmdW5jdGlvbigpIHtcblx0Zm9yICh2YXIgaiA9IDA7IGogPCB0aGlzLmZpZWxkcy5sZW5ndGg7IGorKykge1xuXHRcdHZhciBuYW1lID0gdGhpcy5maWVsZHNbal0uZ2V0QXR0cmlidXRlKCduYW1lJyk7XG5cdFx0dmFyIGVsID0gdGhpcy5sYXlvdXRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLXZhbGlkYXRpb24tZm9yPVwiJyArIG5hbWUgKyAnXCJdJyk7XG5cdFx0aWYgKGVsLmRhdGFzZXQudmFsaWQgPT09IFwiZmFsc2VcIikge1xuXHRcdFx0dGhpcy5maWVsZHNbal0uZm9jdXMoKTtcblx0XHRcdGJyZWFrO1xuXHRcdH1cblx0fVxufTtcblxuRm9ybS5wcm90b3R5cGUudmFsaWRhdGVGaWVsZHMgPSBmdW5jdGlvbigpIHtcblx0dmFyIHZhbGlkID0gdHJ1ZTtcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmRhdGEubGVuZ3RoOyBpKyspIHtcblx0XHRpZiAodGhpcy5kYXRhW2ldLnJlcXVpcmVkID09PSAndHJ1ZScpXG5cdFx0XHR2YWxpZCA9IHRoaXMudmFsaWRhdGVGaWVsZCh0aGlzLmZpZWxkc1tpXSwgdGhpcy5kYXRhW2ldKTtcblx0fVxuXHRyZXR1cm4gdmFsaWQ7XG59O1xuXG5Gb3JtLnByb3RvdHlwZS52YWxpZGF0ZUZpZWxkID0gZnVuY3Rpb24oZmllbGQsIGRhdHVtKSB7XG5cdHZhciB2YWxpZCA9IHRydWU7XG5cdGlmICghZmllbGQudmFsdWUgfHwgZmllbGQudmFsdWUudHJpbSgpLmxlbmd0aCA9PT0gMCkge1xuXHRcdHRoaXMuYWRkRXJyb3IoZmllbGQuZ2V0QXR0cmlidXRlKCduYW1lJyksICdUaGlzIGZpZWxkIGlzIHJlcXVpcmVkLicpO1xuXHRcdHZhbGlkID0gZmFsc2U7XG5cdH0gZWxzZSBpZiAoZGF0dW0udmFsaWRhdGlvbnMgJiYgZGF0dW0udmFsaWRhdGlvbnMubGVuZ3RoICE9PSAwKSB7XG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBkYXR1bS52YWxpZGF0aW9ucy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIHZhbGlkYXRpb24gPSBkYXR1bS52YWxpZGF0aW9uc1tpXTtcblx0XHRcdHZhciByZWdleCA9IG5ldyBSZWdFeHAoJy8nKyB2YWxpZGF0aW9uLnJlZ2V4ICsnLycpO1xuXHRcdFx0dmFyIG1hdGNoZXMgPSByZWdleC50ZXN0KGZpZWxkLnZhbHVlKTtcblx0XHRcdGlmICghbWF0Y2hlcykge1xuXHRcdFx0XHR0aGlzLmFkZEVycm9yKGZpZWxkLmdldEF0dHJpYnV0ZSgnbmFtZScpLCB2YWxpZGF0aW9uLm1lc3NhZ2UpO1xuXHRcdFx0XHR2YWxpZCA9IGZhbHNlO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdH1cblx0XHR9XG5cdH1cblx0cmV0dXJuIHZhbGlkO1xufTtcblxuRm9ybS5wcm90b3R5cGUuYWRkRXJyb3IgPSBmdW5jdGlvbihuYW1lLCBtc2cpIHtcblx0dmFyIGVsID0gdGhpcy5sYXlvdXRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLXZhbGlkYXRpb24tZm9yPVwiJyArIG5hbWUgKyAnXCJdJyk7XG5cdGVsLmRhdGFzZXQudmFsaWQgPSBmYWxzZTtcblx0ZWwudGV4dENvbnRlbnQgPSBtc2c7XG5cdGVsLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xufTtcblxuRm9ybS5wcm90b3R5cGUucmVtb3ZlRXJyb3IgPSBmdW5jdGlvbihuYW1lKSB7XG5cdHZhciBlbCA9IHRoaXMubGF5b3V0RWxlbWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS12YWxpZGF0aW9uLWZvcj1cIicgKyBuYW1lICsgJ1wiXScpO1xuXHRlbC5kYXRhc2V0LnZhbGlkID0gdHJ1ZTtcblx0ZWwudGV4dENvbnRlbnQgPSAnJztcbn07XG5cbkZvcm0ucHJvdG90eXBlLnJlbW92ZUFsbEVycm9ycyA9IGZ1bmN0aW9uKCkge1xuXHR2YXIgZWxzID0gdGhpcy5sYXlvdXRFbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLXZhbGlkYXRpb24tZm9yXScpO1xuXHRmb3IgKHZhciBpID0gMDsgaSA8IGVscy5sZW5ndGg7IGkrKylcblx0XHR0aGlzLnJlbW92ZUVycm9yKGVsc1tpXS5hdHRyKCdkYXRhLXZhbGlkYXRpb24tZm9yJykpO1xufTtcblxuRm9ybS5wcm90b3R5cGUuaGFuZGxlRW50ZXIgPSBmdW5jdGlvbihlKSB7XG5cdGlmIChlLmtleUNvZGUgPT09IDEzKVxuXHRcdHRoaXMuaGFuZGxlU3VibWl0KCk7XG59O1xuXG5Gb3JtLnByb3RvdHlwZS5oYW5kbGVJbnB1dCA9IGZ1bmN0aW9uKGUpIHtcblx0dmFyIG5hbWUgPSBlLnRhcmdldC5uYW1lO1xuXHR0aGlzLnJlbW92ZUVycm9yKG5hbWUpO1xufTtcblxuRm9ybS5wcm90b3R5cGUuaGFuZGxlQ2FuY2VsID0gZnVuY3Rpb24oKSB7XG5cdHRoaXMuY2FuY2VsQnV0dG9uLmNsYXNzTGlzdC5hZGQoYWN0aXZlQ2xhc3NOYW1lKTtcblx0cHVibGlzaCgnZW5hYmxlLWlucHV0Jyk7XG5cdHB1Ymxpc2goJ3NlbmQnLCB7XG5cdFx0c2lsZW50OiB0cnVlLFxuXHRcdHRleHQ6ICdjYW5jZWwnXG5cdH0pO1xufTtcblxuRm9ybS5wcm90b3R5cGUuYWRkRXZlbnRMaXN0ZW5lcnMgPSBmdW5jdGlvbigpIHtcblx0dGhpcy5jYW5jZWxCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmhhbmRsZUNhbmNlbC5iaW5kKHRoaXMpKTtcblx0dGhpcy5zdWJtaXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmhhbmRsZVN1Ym1pdC5iaW5kKHRoaXMpKTtcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmZpZWxkcy5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBmaWVsZCA9IHRoaXMuZmllbGRzW2ldO1xuXHRcdGZpZWxkLmFkZEV2ZW50TGlzdGVuZXIoJ2tleXByZXNzJywgdGhpcy5oYW5kbGVFbnRlci5iaW5kKHRoaXMpKTtcblx0XHRmaWVsZC5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIHRoaXMuaGFuZGxlSW5wdXQuYmluZCh0aGlzKSk7XG5cdH1cbn07XG5cbkZvcm0ucHJvdG90eXBlLnJlbW92ZUV2ZW50TGlzdGVuZXJzID0gZnVuY3Rpb24oKSB7XG5cdHRoaXMuY2FuY2VsQnV0dG9uLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5oYW5kbGVDYW5jZWwuYmluZCh0aGlzKSk7XG5cdHRoaXMuY2FuY2VsQnV0dG9uLnNldEF0dHJpYnV0ZSgnZGlzYWJsZWQnLCB0cnVlKTtcblx0dGhpcy5zdWJtaXRCdXR0b24ucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmhhbmRsZVN1Ym1pdC5iaW5kKHRoaXMpKTtcblx0dGhpcy5zdWJtaXRCdXR0b24uc2V0QXR0cmlidXRlKCdkaXNhYmxlZCcsIHRydWUpO1xuXHRmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuZmllbGRzLmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIGZpZWxkID0gdGhpcy5maWVsZHNbaV07XG5cdFx0ZmllbGQucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5cHJlc3MnLCB0aGlzLmhhbmRsZUVudGVyLmJpbmQodGhpcykpO1xuXHRcdGZpZWxkLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2lucHV0JywgdGhpcy5oYW5kbGVJbnB1dC5iaW5kKHRoaXMpKTtcblx0XHRmaWVsZC5zZXRBdHRyaWJ1dGUoJ2Rpc2FibGVkJywgdHJ1ZSk7XG5cdH1cblxuXHR0aGlzLnN1YnNjcmliZVNlbmQucmVtb3ZlKCk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZvcm1MYXlvdXQ7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2xheW91dHMvZm9ybS9pbmRleC5qc1xuICoqIG1vZHVsZSBpZCA9IDYxXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IFwiLklCTUNoYXQtZm9ybS1jb250YWluZXIge1xcblxcdHRleHQtYWxpZ246Y2VudGVyO1xcblxcdHBhZGRpbmc6MCAwIDFlbSAwO1xcbn1cXG5cXG4uSUJNQ2hhdC1mb3JtLWZpZWxkcyB7XFxuXFx0bWFyZ2luOmF1dG87XFxuXFx0dGV4dC1hbGlnbjpsZWZ0O1xcblxcdG1heC13aWR0aDozNjBweDtcXG5cXHR3aWR0aDoxMDAlO1xcbn1cXG5cXG4uSUJNQ2hhdC1mb3JtLWZpZWxkcy1yb3cge1xcblxcdHBhZGRpbmctYm90dG9tOjAuNzVlbTtcXG59XFxuXFxuLklCTUNoYXQtZm9ybS1maWVsZHMtcm93IGlucHV0IHtcXG5cXHR3aWR0aDogMTAwJTtcXG59XFxuXFxuLklCTUNoYXQtZm9ybS1idXR0b25zIHtcXG5cXHR3aWR0aDogMTAwJTtcXG5cXHRtYXgtd2lkdGg6IDM2MHB4O1xcblxcdGhlaWdodDogMi41ZW07XFxuXFx0dGV4dC1hbGlnbjpjZW50ZXI7XFxuXFx0bWFyZ2luOmF1dG87XFxufVxcblxcbi5JQk1DaGF0LWZvcm0tYnV0dG9ucyBidXR0b24ge1xcblxcdGxpbmUtaGVpZ2h0OiAyLjVlbTtcXG5cXHR3aWR0aDogMTAwcHg7XFxufVxcblxcbi5JQk1DaGF0LWZvcm0tY2FuY2VsIHtcXG5cXHRmbG9hdDpsZWZ0O1xcblxcdG1heC13aWR0aDogNTAlO1xcbn1cXG4uSUJNQ2hhdC1mb3JtLXN1Ym1pdCB7XFxuXFx0ZmxvYXQ6cmlnaHQ7XFxuXFx0bWF4LXdpZHRoOiA1MCU7XFxufVxcblwiXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vcmF3LWxvYWRlciEuL3NyYy9sYXlvdXRzL2Zvcm0vc3R5bGVzLmNzc1xuICoqIG1vZHVsZSBpZCA9IDYzXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvKipcbiogKEMpIENvcHlyaWdodCBJQk0gQ29ycC4gMjAxNi4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbipcbiogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTsgeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHRcbiogaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbipcbiogaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4qXG4qIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmUgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2VcbiogaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Ncbiogb3IgaW1wbGllZC4gU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZCBsaW1pdGF0aW9ucyB1bmRlclxuKiB0aGUgTGljZW5zZS5cbiovXG5cbnZhciBCb3RTREsgPSByZXF1aXJlKCdAd2F0c29uLXZpcnR1YWwtYWdlbnQvY2xpZW50LXNkay9saWIvd2ViJyk7XG52YXIgcHJvZmlsZSA9IEJvdFNESy5wcm9maWxlO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHByb2ZpbGU7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL3Byb2ZpbGUvaW5kZXguanNcbiAqKiBtb2R1bGUgaWQgPSA2NFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiIWZ1bmN0aW9uKHQsZSl7XCJvYmplY3RcIj09dHlwZW9mIGV4cG9ydHMmJlwib2JqZWN0XCI9PXR5cGVvZiBtb2R1bGU/bW9kdWxlLmV4cG9ydHM9ZSgpOlwiZnVuY3Rpb25cIj09dHlwZW9mIGRlZmluZSYmZGVmaW5lLmFtZD9kZWZpbmUoXCJTREtcIixbXSxlKTpcIm9iamVjdFwiPT10eXBlb2YgZXhwb3J0cz9leHBvcnRzLlNESz1lKCk6dC5TREs9ZSgpfSh0aGlzLGZ1bmN0aW9uKCl7cmV0dXJuIGZ1bmN0aW9uKHQpe2Z1bmN0aW9uIGUocil7aWYobltyXSlyZXR1cm4gbltyXS5leHBvcnRzO3ZhciBvPW5bcl09e2V4cG9ydHM6e30saWQ6cixsb2FkZWQ6ITF9O3JldHVybiB0W3JdLmNhbGwoby5leHBvcnRzLG8sby5leHBvcnRzLGUpLG8ubG9hZGVkPSEwLG8uZXhwb3J0c312YXIgbj17fTtyZXR1cm4gZS5tPXQsZS5jPW4sZS5wPVwiXCIsZSgwKX0oW2Z1bmN0aW9uKHQsZSxuKXt0LmV4cG9ydHM9bigyMil9LGZ1bmN0aW9uKHQsZSl7XCJ1c2Ugc3RyaWN0XCI7ZnVuY3Rpb24gbih0KXtyZXR1cm5cIltvYmplY3QgQXJyYXldXCI9PT1iLmNhbGwodCl9ZnVuY3Rpb24gcih0KXtyZXR1cm5cIltvYmplY3QgQXJyYXlCdWZmZXJdXCI9PT1iLmNhbGwodCl9ZnVuY3Rpb24gbyh0KXtyZXR1cm5cInVuZGVmaW5lZFwiIT10eXBlb2YgRm9ybURhdGEmJnQgaW5zdGFuY2VvZiBGb3JtRGF0YX1mdW5jdGlvbiBpKHQpe3ZhciBlO3JldHVybiBlPVwidW5kZWZpbmVkXCIhPXR5cGVvZiBBcnJheUJ1ZmZlciYmQXJyYXlCdWZmZXIuaXNWaWV3P0FycmF5QnVmZmVyLmlzVmlldyh0KTp0JiZ0LmJ1ZmZlciYmdC5idWZmZXIgaW5zdGFuY2VvZiBBcnJheUJ1ZmZlcn1mdW5jdGlvbiB1KHQpe3JldHVyblwic3RyaW5nXCI9PXR5cGVvZiB0fWZ1bmN0aW9uIHModCl7cmV0dXJuXCJudW1iZXJcIj09dHlwZW9mIHR9ZnVuY3Rpb24gYyh0KXtyZXR1cm5cInVuZGVmaW5lZFwiPT10eXBlb2YgdH1mdW5jdGlvbiBhKHQpe3JldHVybiBudWxsIT09dCYmXCJvYmplY3RcIj09dHlwZW9mIHR9ZnVuY3Rpb24gZih0KXtyZXR1cm5cIltvYmplY3QgRGF0ZV1cIj09PWIuY2FsbCh0KX1mdW5jdGlvbiBsKHQpe3JldHVyblwiW29iamVjdCBGaWxlXVwiPT09Yi5jYWxsKHQpfWZ1bmN0aW9uIHAodCl7cmV0dXJuXCJbb2JqZWN0IEJsb2JdXCI9PT1iLmNhbGwodCl9ZnVuY3Rpb24gaCh0KXtyZXR1cm5cIltvYmplY3QgRnVuY3Rpb25dXCI9PT1iLmNhbGwodCl9ZnVuY3Rpb24gZCh0KXtyZXR1cm4gYSh0KSYmaCh0LnBpcGUpfWZ1bmN0aW9uIG0odCl7cmV0dXJuXCJ1bmRlZmluZWRcIiE9dHlwZW9mIFVSTFNlYXJjaFBhcmFtcyYmdCBpbnN0YW5jZW9mIFVSTFNlYXJjaFBhcmFtc31mdW5jdGlvbiB2KHQpe3JldHVybiB0LnJlcGxhY2UoL15cXHMqLyxcIlwiKS5yZXBsYWNlKC9cXHMqJC8sXCJcIil9ZnVuY3Rpb24geSgpe3JldHVyblwidW5kZWZpbmVkXCIhPXR5cGVvZiB3aW5kb3cmJlwidW5kZWZpbmVkXCIhPXR5cGVvZiBkb2N1bWVudCYmXCJmdW5jdGlvblwiPT10eXBlb2YgZG9jdW1lbnQuY3JlYXRlRWxlbWVudH1mdW5jdGlvbiBnKHQsZSl7aWYobnVsbCE9PXQmJlwidW5kZWZpbmVkXCIhPXR5cGVvZiB0KWlmKFwib2JqZWN0XCI9PXR5cGVvZiB0fHxuKHQpfHwodD1bdF0pLG4odCkpZm9yKHZhciByPTAsbz10Lmxlbmd0aDtyPG87cisrKWUuY2FsbChudWxsLHRbcl0scix0KTtlbHNlIGZvcih2YXIgaSBpbiB0KXQuaGFzT3duUHJvcGVydHkoaSkmJmUuY2FsbChudWxsLHRbaV0saSx0KX1mdW5jdGlvbiB3KCl7ZnVuY3Rpb24gdCh0LG4pe1wib2JqZWN0XCI9PXR5cGVvZiBlW25dJiZcIm9iamVjdFwiPT10eXBlb2YgdD9lW25dPXcoZVtuXSx0KTplW25dPXR9Zm9yKHZhciBlPXt9LG49MCxyPWFyZ3VtZW50cy5sZW5ndGg7bjxyO24rKylnKGFyZ3VtZW50c1tuXSx0KTtyZXR1cm4gZX12YXIgYj1PYmplY3QucHJvdG90eXBlLnRvU3RyaW5nO3QuZXhwb3J0cz17aXNBcnJheTpuLGlzQXJyYXlCdWZmZXI6cixpc0Zvcm1EYXRhOm8saXNBcnJheUJ1ZmZlclZpZXc6aSxpc1N0cmluZzp1LGlzTnVtYmVyOnMsaXNPYmplY3Q6YSxpc1VuZGVmaW5lZDpjLGlzRGF0ZTpmLGlzRmlsZTpsLGlzQmxvYjpwLGlzRnVuY3Rpb246aCxpc1N0cmVhbTpkLGlzVVJMU2VhcmNoUGFyYW1zOm0saXNTdGFuZGFyZEJyb3dzZXJFbnY6eSxmb3JFYWNoOmcsbWVyZ2U6dyx0cmltOnZ9fSxmdW5jdGlvbih0LGUpe2Z1bmN0aW9uIG4oKXt0aHJvdyBuZXcgRXJyb3IoXCJzZXRUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkXCIpfWZ1bmN0aW9uIHIoKXt0aHJvdyBuZXcgRXJyb3IoXCJjbGVhclRpbWVvdXQgaGFzIG5vdCBiZWVuIGRlZmluZWRcIil9ZnVuY3Rpb24gbyh0KXtpZihmPT09c2V0VGltZW91dClyZXR1cm4gc2V0VGltZW91dCh0LDApO2lmKChmPT09bnx8IWYpJiZzZXRUaW1lb3V0KXJldHVybiBmPXNldFRpbWVvdXQsc2V0VGltZW91dCh0LDApO3RyeXtyZXR1cm4gZih0LDApfWNhdGNoKGUpe3RyeXtyZXR1cm4gZi5jYWxsKG51bGwsdCwwKX1jYXRjaChlKXtyZXR1cm4gZi5jYWxsKHRoaXMsdCwwKX19fWZ1bmN0aW9uIGkodCl7aWYobD09PWNsZWFyVGltZW91dClyZXR1cm4gY2xlYXJUaW1lb3V0KHQpO2lmKChsPT09cnx8IWwpJiZjbGVhclRpbWVvdXQpcmV0dXJuIGw9Y2xlYXJUaW1lb3V0LGNsZWFyVGltZW91dCh0KTt0cnl7cmV0dXJuIGwodCl9Y2F0Y2goZSl7dHJ5e3JldHVybiBsLmNhbGwobnVsbCx0KX1jYXRjaChlKXtyZXR1cm4gbC5jYWxsKHRoaXMsdCl9fX1mdW5jdGlvbiB1KCl7bSYmaCYmKG09ITEsaC5sZW5ndGg/ZD1oLmNvbmNhdChkKTp2PS0xLGQubGVuZ3RoJiZzKCkpfWZ1bmN0aW9uIHMoKXtpZighbSl7dmFyIHQ9byh1KTttPSEwO2Zvcih2YXIgZT1kLmxlbmd0aDtlOyl7Zm9yKGg9ZCxkPVtdOysrdjxlOyloJiZoW3ZdLnJ1bigpO3Y9LTEsZT1kLmxlbmd0aH1oPW51bGwsbT0hMSxpKHQpfX1mdW5jdGlvbiBjKHQsZSl7dGhpcy5mdW49dCx0aGlzLmFycmF5PWV9ZnVuY3Rpb24gYSgpe312YXIgZixsLHA9dC5leHBvcnRzPXt9OyFmdW5jdGlvbigpe3RyeXtmPVwiZnVuY3Rpb25cIj09dHlwZW9mIHNldFRpbWVvdXQ/c2V0VGltZW91dDpufWNhdGNoKHQpe2Y9bn10cnl7bD1cImZ1bmN0aW9uXCI9PXR5cGVvZiBjbGVhclRpbWVvdXQ/Y2xlYXJUaW1lb3V0OnJ9Y2F0Y2godCl7bD1yfX0oKTt2YXIgaCxkPVtdLG09ITEsdj0tMTtwLm5leHRUaWNrPWZ1bmN0aW9uKHQpe3ZhciBlPW5ldyBBcnJheShhcmd1bWVudHMubGVuZ3RoLTEpO2lmKGFyZ3VtZW50cy5sZW5ndGg+MSlmb3IodmFyIG49MTtuPGFyZ3VtZW50cy5sZW5ndGg7bisrKWVbbi0xXT1hcmd1bWVudHNbbl07ZC5wdXNoKG5ldyBjKHQsZSkpLDEhPT1kLmxlbmd0aHx8bXx8byhzKX0sYy5wcm90b3R5cGUucnVuPWZ1bmN0aW9uKCl7dGhpcy5mdW4uYXBwbHkobnVsbCx0aGlzLmFycmF5KX0scC50aXRsZT1cImJyb3dzZXJcIixwLmJyb3dzZXI9ITAscC5lbnY9e30scC5hcmd2PVtdLHAudmVyc2lvbj1cIlwiLHAudmVyc2lvbnM9e30scC5vbj1hLHAuYWRkTGlzdGVuZXI9YSxwLm9uY2U9YSxwLm9mZj1hLHAucmVtb3ZlTGlzdGVuZXI9YSxwLnJlbW92ZUFsbExpc3RlbmVycz1hLHAuZW1pdD1hLHAuYmluZGluZz1mdW5jdGlvbih0KXt0aHJvdyBuZXcgRXJyb3IoXCJwcm9jZXNzLmJpbmRpbmcgaXMgbm90IHN1cHBvcnRlZFwiKX0scC5jd2Q9ZnVuY3Rpb24oKXtyZXR1cm5cIi9cIn0scC5jaGRpcj1mdW5jdGlvbih0KXt0aHJvdyBuZXcgRXJyb3IoXCJwcm9jZXNzLmNoZGlyIGlzIG5vdCBzdXBwb3J0ZWRcIil9LHAudW1hc2s9ZnVuY3Rpb24oKXtyZXR1cm4gMH19LGZ1bmN0aW9uKHQsZSxuKXsoZnVuY3Rpb24oZSl7XCJ1c2Ugc3RyaWN0XCI7dmFyIHI9bigxKSxvPW4oMTIpLGk9bigxOCksdT1uKDQpLHM9bigxNiksYz1cInVuZGVmaW5lZFwiIT10eXBlb2Ygd2luZG93JiZ3aW5kb3cuYnRvYXx8bigxMSksYT1uKDE5KTt0LmV4cG9ydHM9ZnVuY3Rpb24odCxmLGwpe3ZhciBwPWwuZGF0YSxoPWwuaGVhZGVycztyLmlzRm9ybURhdGEocCkmJmRlbGV0ZSBoW1wiQ29udGVudC1UeXBlXCJdO3ZhciBkPW5ldyBYTUxIdHRwUmVxdWVzdCxtPVwib25yZWFkeXN0YXRlY2hhbmdlXCIsdj0hMTtpZihcInRlc3RcIj09PWUuZW52Lk5PREVfRU5WfHxcInVuZGVmaW5lZFwiPT10eXBlb2Ygd2luZG93fHwhd2luZG93LlhEb21haW5SZXF1ZXN0fHxcIndpdGhDcmVkZW50aWFsc1wiaW4gZHx8cyhsLnVybCl8fChkPW5ldyB3aW5kb3cuWERvbWFpblJlcXVlc3QsbT1cIm9ubG9hZFwiLHY9ITAsZC5vbnByb2dyZXNzPWZ1bmN0aW9uKCl7fSxkLm9udGltZW91dD1mdW5jdGlvbigpe30pLGwuYXV0aCl7dmFyIHk9bC5hdXRoLnVzZXJuYW1lfHxcIlwiLGc9bC5hdXRoLnBhc3N3b3JkfHxcIlwiO2guQXV0aG9yaXphdGlvbj1cIkJhc2ljIFwiK2MoeStcIjpcIitnKX1pZihkLm9wZW4obC5tZXRob2QudG9VcHBlckNhc2UoKSxvKGwudXJsLGwucGFyYW1zLGwucGFyYW1zU2VyaWFsaXplciksITApLGQudGltZW91dD1sLnRpbWVvdXQsZFttXT1mdW5jdGlvbigpe2lmKGQmJig0PT09ZC5yZWFkeVN0YXRlfHx2KSYmMCE9PWQuc3RhdHVzKXt2YXIgZT1cImdldEFsbFJlc3BvbnNlSGVhZGVyc1wiaW4gZD9pKGQuZ2V0QWxsUmVzcG9uc2VIZWFkZXJzKCkpOm51bGwsbj1sLnJlc3BvbnNlVHlwZSYmXCJ0ZXh0XCIhPT1sLnJlc3BvbnNlVHlwZT9kLnJlc3BvbnNlOmQucmVzcG9uc2VUZXh0LHI9e2RhdGE6dShuLGUsbC50cmFuc2Zvcm1SZXNwb25zZSksc3RhdHVzOjEyMjM9PT1kLnN0YXR1cz8yMDQ6ZC5zdGF0dXMsc3RhdHVzVGV4dDoxMjIzPT09ZC5zdGF0dXM/XCJObyBDb250ZW50XCI6ZC5zdGF0dXNUZXh0LGhlYWRlcnM6ZSxjb25maWc6bCxyZXF1ZXN0OmR9O2EodCxmLHIpLGQ9bnVsbH19LGQub25lcnJvcj1mdW5jdGlvbigpe2YobmV3IEVycm9yKFwiTmV0d29yayBFcnJvclwiKSksZD1udWxsfSxkLm9udGltZW91dD1mdW5jdGlvbigpe3ZhciB0PW5ldyBFcnJvcihcInRpbWVvdXQgb2YgXCIrbC50aW1lb3V0K1wibXMgZXhjZWVkZWRcIik7dC50aW1lb3V0PWwudGltZW91dCx0LmNvZGU9XCJFQ09OTkFCT1JURURcIixmKHQpLGQ9bnVsbH0sci5pc1N0YW5kYXJkQnJvd3NlckVudigpKXt2YXIgdz1uKDE0KSxiPWwud2l0aENyZWRlbnRpYWxzfHxzKGwudXJsKT93LnJlYWQobC54c3JmQ29va2llTmFtZSk6dm9pZCAwO2ImJihoW2wueHNyZkhlYWRlck5hbWVdPWIpfWlmKFwic2V0UmVxdWVzdEhlYWRlclwiaW4gZCYmci5mb3JFYWNoKGgsZnVuY3Rpb24odCxlKXtcInVuZGVmaW5lZFwiPT10eXBlb2YgcCYmXCJjb250ZW50LXR5cGVcIj09PWUudG9Mb3dlckNhc2UoKT9kZWxldGUgaFtlXTpkLnNldFJlcXVlc3RIZWFkZXIoZSx0KX0pLGwud2l0aENyZWRlbnRpYWxzJiYoZC53aXRoQ3JlZGVudGlhbHM9ITApLGwucmVzcG9uc2VUeXBlKXRyeXtkLnJlc3BvbnNlVHlwZT1sLnJlc3BvbnNlVHlwZX1jYXRjaCh4KXtpZihcImpzb25cIiE9PWQucmVzcG9uc2VUeXBlKXRocm93IHh9bC5wcm9ncmVzcyYmKFwicG9zdFwiPT09bC5tZXRob2R8fFwicHV0XCI9PT1sLm1ldGhvZD9kLnVwbG9hZC5hZGRFdmVudExpc3RlbmVyKFwicHJvZ3Jlc3NcIixsLnByb2dyZXNzKTpcImdldFwiPT09bC5tZXRob2QmJmQuYWRkRXZlbnRMaXN0ZW5lcihcInByb2dyZXNzXCIsbC5wcm9ncmVzcykpLHZvaWQgMD09PXAmJihwPW51bGwpLGQuc2VuZChwKX19KS5jYWxsKGUsbigyKSl9LGZ1bmN0aW9uKHQsZSxuKXtcInVzZSBzdHJpY3RcIjt2YXIgcj1uKDEpO3QuZXhwb3J0cz1mdW5jdGlvbih0LGUsbil7cmV0dXJuIHIuZm9yRWFjaChuLGZ1bmN0aW9uKG4pe3Q9bih0LGUpfSksdH19LGZ1bmN0aW9uKHQsZSxuKXt0LmV4cG9ydHM9big2KX0sZnVuY3Rpb24odCxlLG4pe1widXNlIHN0cmljdFwiO2Z1bmN0aW9uIHIodCl7dGhpcy5kZWZhdWx0cz1pLm1lcmdlKHt9LHQpLHRoaXMuaW50ZXJjZXB0b3JzPXtyZXF1ZXN0Om5ldyBzLHJlc3BvbnNlOm5ldyBzfX12YXIgbz1uKDkpLGk9bigxKSx1PW4oOCkscz1uKDcpLGM9bigxNSksYT1uKDEzKSxmPW4oMTApLGw9big0KTtyLnByb3RvdHlwZS5yZXF1ZXN0PWZ1bmN0aW9uKHQpe1wic3RyaW5nXCI9PXR5cGVvZiB0JiYodD1pLm1lcmdlKHt1cmw6YXJndW1lbnRzWzBdfSxhcmd1bWVudHNbMV0pKSx0PWkubWVyZ2Uobyx0aGlzLmRlZmF1bHRzLHttZXRob2Q6XCJnZXRcIn0sdCksdC5iYXNlVVJMJiYhYyh0LnVybCkmJih0LnVybD1hKHQuYmFzZVVSTCx0LnVybCkpLHQud2l0aENyZWRlbnRpYWxzPXQud2l0aENyZWRlbnRpYWxzfHx0aGlzLmRlZmF1bHRzLndpdGhDcmVkZW50aWFscyx0LmRhdGE9bCh0LmRhdGEsdC5oZWFkZXJzLHQudHJhbnNmb3JtUmVxdWVzdCksdC5oZWFkZXJzPWkubWVyZ2UodC5oZWFkZXJzLmNvbW1vbnx8e30sdC5oZWFkZXJzW3QubWV0aG9kXXx8e30sdC5oZWFkZXJzfHx7fSksaS5mb3JFYWNoKFtcImRlbGV0ZVwiLFwiZ2V0XCIsXCJoZWFkXCIsXCJwb3N0XCIsXCJwdXRcIixcInBhdGNoXCIsXCJjb21tb25cIl0sZnVuY3Rpb24oZSl7ZGVsZXRlIHQuaGVhZGVyc1tlXX0pO3ZhciBlPVt1LHZvaWQgMF0sbj1Qcm9taXNlLnJlc29sdmUodCk7Zm9yKHRoaXMuaW50ZXJjZXB0b3JzLnJlcXVlc3QuZm9yRWFjaChmdW5jdGlvbih0KXtlLnVuc2hpZnQodC5mdWxmaWxsZWQsdC5yZWplY3RlZCl9KSx0aGlzLmludGVyY2VwdG9ycy5yZXNwb25zZS5mb3JFYWNoKGZ1bmN0aW9uKHQpe2UucHVzaCh0LmZ1bGZpbGxlZCx0LnJlamVjdGVkKX0pO2UubGVuZ3RoOyluPW4udGhlbihlLnNoaWZ0KCksZS5zaGlmdCgpKTtyZXR1cm4gbn07dmFyIHA9bmV3IHIobyksaD10LmV4cG9ydHM9ZihyLnByb3RvdHlwZS5yZXF1ZXN0LHApO2gucmVxdWVzdD1mKHIucHJvdG90eXBlLnJlcXVlc3QscCksaC5BeGlvcz1yLGguZGVmYXVsdHM9cC5kZWZhdWx0cyxoLmludGVyY2VwdG9ycz1wLmludGVyY2VwdG9ycyxoLmNyZWF0ZT1mdW5jdGlvbih0KXtyZXR1cm4gbmV3IHIodCl9LGguYWxsPWZ1bmN0aW9uKHQpe3JldHVybiBQcm9taXNlLmFsbCh0KX0saC5zcHJlYWQ9bigyMCksaS5mb3JFYWNoKFtcImRlbGV0ZVwiLFwiZ2V0XCIsXCJoZWFkXCJdLGZ1bmN0aW9uKHQpe3IucHJvdG90eXBlW3RdPWZ1bmN0aW9uKGUsbil7cmV0dXJuIHRoaXMucmVxdWVzdChpLm1lcmdlKG58fHt9LHttZXRob2Q6dCx1cmw6ZX0pKX0saFt0XT1mKHIucHJvdG90eXBlW3RdLHApfSksaS5mb3JFYWNoKFtcInBvc3RcIixcInB1dFwiLFwicGF0Y2hcIl0sZnVuY3Rpb24odCl7ci5wcm90b3R5cGVbdF09ZnVuY3Rpb24oZSxuLHIpe3JldHVybiB0aGlzLnJlcXVlc3QoaS5tZXJnZShyfHx7fSx7bWV0aG9kOnQsdXJsOmUsZGF0YTpufSkpfSxoW3RdPWYoci5wcm90b3R5cGVbdF0scCl9KX0sZnVuY3Rpb24odCxlLG4pe1widXNlIHN0cmljdFwiO2Z1bmN0aW9uIHIoKXt0aGlzLmhhbmRsZXJzPVtdfXZhciBvPW4oMSk7ci5wcm90b3R5cGUudXNlPWZ1bmN0aW9uKHQsZSl7cmV0dXJuIHRoaXMuaGFuZGxlcnMucHVzaCh7ZnVsZmlsbGVkOnQscmVqZWN0ZWQ6ZX0pLHRoaXMuaGFuZGxlcnMubGVuZ3RoLTF9LHIucHJvdG90eXBlLmVqZWN0PWZ1bmN0aW9uKHQpe3RoaXMuaGFuZGxlcnNbdF0mJih0aGlzLmhhbmRsZXJzW3RdPW51bGwpfSxyLnByb3RvdHlwZS5mb3JFYWNoPWZ1bmN0aW9uKHQpe28uZm9yRWFjaCh0aGlzLmhhbmRsZXJzLGZ1bmN0aW9uKGUpe251bGwhPT1lJiZ0KGUpfSl9LHQuZXhwb3J0cz1yfSxmdW5jdGlvbih0LGUsbil7KGZ1bmN0aW9uKGUpe1widXNlIHN0cmljdFwiO3QuZXhwb3J0cz1mdW5jdGlvbih0KXtyZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocixvKXt0cnl7dmFyIGk7XCJmdW5jdGlvblwiPT10eXBlb2YgdC5hZGFwdGVyP2k9dC5hZGFwdGVyOlwidW5kZWZpbmVkXCIhPXR5cGVvZiBYTUxIdHRwUmVxdWVzdD9pPW4oMyk6XCJ1bmRlZmluZWRcIiE9dHlwZW9mIGUmJihpPW4oMykpLFwiZnVuY3Rpb25cIj09dHlwZW9mIGkmJmkocixvLHQpfWNhdGNoKHUpe28odSl9fSl9fSkuY2FsbChlLG4oMikpfSxmdW5jdGlvbih0LGUsbil7XCJ1c2Ugc3RyaWN0XCI7ZnVuY3Rpb24gcih0LGUpeyFvLmlzVW5kZWZpbmVkKHQpJiZvLmlzVW5kZWZpbmVkKHRbXCJDb250ZW50LVR5cGVcIl0pJiYodFtcIkNvbnRlbnQtVHlwZVwiXT1lKX12YXIgbz1uKDEpLGk9bigxNyksdT0vXlxcKVxcXVxcfScsP1xcbi8scz17XCJDb250ZW50LVR5cGVcIjpcImFwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZFwifTt0LmV4cG9ydHM9e3RyYW5zZm9ybVJlcXVlc3Q6W2Z1bmN0aW9uKHQsZSl7cmV0dXJuIGkoZSxcIkNvbnRlbnQtVHlwZVwiKSxvLmlzRm9ybURhdGEodCl8fG8uaXNBcnJheUJ1ZmZlcih0KXx8by5pc1N0cmVhbSh0KXx8by5pc0ZpbGUodCl8fG8uaXNCbG9iKHQpP3Q6by5pc0FycmF5QnVmZmVyVmlldyh0KT90LmJ1ZmZlcjpvLmlzVVJMU2VhcmNoUGFyYW1zKHQpPyhyKGUsXCJhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQ7Y2hhcnNldD11dGYtOFwiKSx0LnRvU3RyaW5nKCkpOm8uaXNPYmplY3QodCk/KHIoZSxcImFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtOFwiKSxKU09OLnN0cmluZ2lmeSh0KSk6dH1dLHRyYW5zZm9ybVJlc3BvbnNlOltmdW5jdGlvbih0KXtpZihcInN0cmluZ1wiPT10eXBlb2YgdCl7dD10LnJlcGxhY2UodSxcIlwiKTt0cnl7dD1KU09OLnBhcnNlKHQpfWNhdGNoKGUpe319cmV0dXJuIHR9XSxoZWFkZXJzOntjb21tb246e0FjY2VwdDpcImFwcGxpY2F0aW9uL2pzb24sIHRleHQvcGxhaW4sICovKlwifSxwYXRjaDpvLm1lcmdlKHMpLHBvc3Q6by5tZXJnZShzKSxwdXQ6by5tZXJnZShzKX0sdGltZW91dDowLHhzcmZDb29raWVOYW1lOlwiWFNSRi1UT0tFTlwiLHhzcmZIZWFkZXJOYW1lOlwiWC1YU1JGLVRPS0VOXCIsbWF4Q29udGVudExlbmd0aDotMSx2YWxpZGF0ZVN0YXR1czpmdW5jdGlvbih0KXtyZXR1cm4gdD49MjAwJiZ0PDMwMH19fSxmdW5jdGlvbih0LGUpe1widXNlIHN0cmljdFwiO3QuZXhwb3J0cz1mdW5jdGlvbih0LGUpe3JldHVybiBmdW5jdGlvbigpe2Zvcih2YXIgbj1uZXcgQXJyYXkoYXJndW1lbnRzLmxlbmd0aCkscj0wO3I8bi5sZW5ndGg7cisrKW5bcl09YXJndW1lbnRzW3JdO3JldHVybiB0LmFwcGx5KGUsbil9fX0sZnVuY3Rpb24odCxlKXtcInVzZSBzdHJpY3RcIjtmdW5jdGlvbiBuKCl7dGhpcy5tZXNzYWdlPVwiU3RyaW5nIGNvbnRhaW5zIGFuIGludmFsaWQgY2hhcmFjdGVyXCJ9ZnVuY3Rpb24gcih0KXtmb3IodmFyIGUscixpPVN0cmluZyh0KSx1PVwiXCIscz0wLGM9bztpLmNoYXJBdCgwfHMpfHwoYz1cIj1cIixzJTEpO3UrPWMuY2hhckF0KDYzJmU+PjgtcyUxKjgpKXtpZihyPWkuY2hhckNvZGVBdChzKz0uNzUpLHI+MjU1KXRocm93IG5ldyBuO2U9ZTw8OHxyfXJldHVybiB1fXZhciBvPVwiQUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVphYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5ejAxMjM0NTY3ODkrLz1cIjtuLnByb3RvdHlwZT1uZXcgRXJyb3Isbi5wcm90b3R5cGUuY29kZT01LG4ucHJvdG90eXBlLm5hbWU9XCJJbnZhbGlkQ2hhcmFjdGVyRXJyb3JcIix0LmV4cG9ydHM9cn0sZnVuY3Rpb24odCxlLG4pe1widXNlIHN0cmljdFwiO2Z1bmN0aW9uIHIodCl7cmV0dXJuIGVuY29kZVVSSUNvbXBvbmVudCh0KS5yZXBsYWNlKC8lNDAvZ2ksXCJAXCIpLnJlcGxhY2UoLyUzQS9naSxcIjpcIikucmVwbGFjZSgvJTI0L2csXCIkXCIpLnJlcGxhY2UoLyUyQy9naSxcIixcIikucmVwbGFjZSgvJTIwL2csXCIrXCIpLnJlcGxhY2UoLyU1Qi9naSxcIltcIikucmVwbGFjZSgvJTVEL2dpLFwiXVwiKX12YXIgbz1uKDEpO3QuZXhwb3J0cz1mdW5jdGlvbih0LGUsbil7aWYoIWUpcmV0dXJuIHQ7dmFyIGk7aWYobilpPW4oZSk7ZWxzZSBpZihvLmlzVVJMU2VhcmNoUGFyYW1zKGUpKWk9ZS50b1N0cmluZygpO2Vsc2V7dmFyIHU9W107by5mb3JFYWNoKGUsZnVuY3Rpb24odCxlKXtudWxsIT09dCYmXCJ1bmRlZmluZWRcIiE9dHlwZW9mIHQmJihvLmlzQXJyYXkodCkmJihlKz1cIltdXCIpLG8uaXNBcnJheSh0KXx8KHQ9W3RdKSxvLmZvckVhY2godCxmdW5jdGlvbih0KXtvLmlzRGF0ZSh0KT90PXQudG9JU09TdHJpbmcoKTpvLmlzT2JqZWN0KHQpJiYodD1KU09OLnN0cmluZ2lmeSh0KSksdS5wdXNoKHIoZSkrXCI9XCIrcih0KSl9KSl9KSxpPXUuam9pbihcIiZcIil9cmV0dXJuIGkmJih0Kz0odC5pbmRleE9mKFwiP1wiKT09PS0xP1wiP1wiOlwiJlwiKStpKSx0fX0sZnVuY3Rpb24odCxlKXtcInVzZSBzdHJpY3RcIjt0LmV4cG9ydHM9ZnVuY3Rpb24odCxlKXtyZXR1cm4gdC5yZXBsYWNlKC9cXC8rJC8sXCJcIikrXCIvXCIrZS5yZXBsYWNlKC9eXFwvKy8sXCJcIil9fSxmdW5jdGlvbih0LGUsbil7XCJ1c2Ugc3RyaWN0XCI7dmFyIHI9bigxKTt0LmV4cG9ydHM9ci5pc1N0YW5kYXJkQnJvd3NlckVudigpP2Z1bmN0aW9uKCl7cmV0dXJue3dyaXRlOmZ1bmN0aW9uKHQsZSxuLG8saSx1KXt2YXIgcz1bXTtzLnB1c2godCtcIj1cIitlbmNvZGVVUklDb21wb25lbnQoZSkpLHIuaXNOdW1iZXIobikmJnMucHVzaChcImV4cGlyZXM9XCIrbmV3IERhdGUobikudG9HTVRTdHJpbmcoKSksci5pc1N0cmluZyhvKSYmcy5wdXNoKFwicGF0aD1cIitvKSxyLmlzU3RyaW5nKGkpJiZzLnB1c2goXCJkb21haW49XCIraSksdT09PSEwJiZzLnB1c2goXCJzZWN1cmVcIiksZG9jdW1lbnQuY29va2llPXMuam9pbihcIjsgXCIpfSxyZWFkOmZ1bmN0aW9uKHQpe3ZhciBlPWRvY3VtZW50LmNvb2tpZS5tYXRjaChuZXcgUmVnRXhwKFwiKF58O1xcXFxzKikoXCIrdCtcIik9KFteO10qKVwiKSk7cmV0dXJuIGU/ZGVjb2RlVVJJQ29tcG9uZW50KGVbM10pOm51bGx9LHJlbW92ZTpmdW5jdGlvbih0KXt0aGlzLndyaXRlKHQsXCJcIixEYXRlLm5vdygpLTg2NGU1KX19fSgpOmZ1bmN0aW9uKCl7cmV0dXJue3dyaXRlOmZ1bmN0aW9uKCl7fSxyZWFkOmZ1bmN0aW9uKCl7cmV0dXJuIG51bGx9LHJlbW92ZTpmdW5jdGlvbigpe319fSgpfSxmdW5jdGlvbih0LGUpe1widXNlIHN0cmljdFwiO3QuZXhwb3J0cz1mdW5jdGlvbih0KXtyZXR1cm4vXihbYS16XVthLXpcXGRcXCtcXC1cXC5dKjopP1xcL1xcLy9pLnRlc3QodCl9fSxmdW5jdGlvbih0LGUsbil7XCJ1c2Ugc3RyaWN0XCI7dmFyIHI9bigxKTt0LmV4cG9ydHM9ci5pc1N0YW5kYXJkQnJvd3NlckVudigpP2Z1bmN0aW9uKCl7ZnVuY3Rpb24gdCh0KXt2YXIgZT10O3JldHVybiBuJiYoby5zZXRBdHRyaWJ1dGUoXCJocmVmXCIsZSksZT1vLmhyZWYpLG8uc2V0QXR0cmlidXRlKFwiaHJlZlwiLGUpLHtocmVmOm8uaHJlZixwcm90b2NvbDpvLnByb3RvY29sP28ucHJvdG9jb2wucmVwbGFjZSgvOiQvLFwiXCIpOlwiXCIsaG9zdDpvLmhvc3Qsc2VhcmNoOm8uc2VhcmNoP28uc2VhcmNoLnJlcGxhY2UoL15cXD8vLFwiXCIpOlwiXCIsaGFzaDpvLmhhc2g/by5oYXNoLnJlcGxhY2UoL14jLyxcIlwiKTpcIlwiLGhvc3RuYW1lOm8uaG9zdG5hbWUscG9ydDpvLnBvcnQscGF0aG5hbWU6XCIvXCI9PT1vLnBhdGhuYW1lLmNoYXJBdCgwKT9vLnBhdGhuYW1lOlwiL1wiK28ucGF0aG5hbWV9fXZhciBlLG49Lyhtc2llfHRyaWRlbnQpL2kudGVzdChuYXZpZ2F0b3IudXNlckFnZW50KSxvPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO3JldHVybiBlPXQod2luZG93LmxvY2F0aW9uLmhyZWYpLGZ1bmN0aW9uKG4pe3ZhciBvPXIuaXNTdHJpbmcobik/dChuKTpuO3JldHVybiBvLnByb3RvY29sPT09ZS5wcm90b2NvbCYmby5ob3N0PT09ZS5ob3N0fX0oKTpmdW5jdGlvbigpe3JldHVybiBmdW5jdGlvbigpe3JldHVybiEwfX0oKX0sZnVuY3Rpb24odCxlLG4pe1widXNlIHN0cmljdFwiO3ZhciByPW4oMSk7dC5leHBvcnRzPWZ1bmN0aW9uKHQsZSl7ci5mb3JFYWNoKHQsZnVuY3Rpb24obixyKXtyIT09ZSYmci50b1VwcGVyQ2FzZSgpPT09ZS50b1VwcGVyQ2FzZSgpJiYodFtlXT1uLGRlbGV0ZSB0W3JdKX0pfX0sZnVuY3Rpb24odCxlLG4pe1widXNlIHN0cmljdFwiO3ZhciByPW4oMSk7dC5leHBvcnRzPWZ1bmN0aW9uKHQpe3ZhciBlLG4sbyxpPXt9O3JldHVybiB0PyhyLmZvckVhY2godC5zcGxpdChcIlxcblwiKSxmdW5jdGlvbih0KXtvPXQuaW5kZXhPZihcIjpcIiksZT1yLnRyaW0odC5zdWJzdHIoMCxvKSkudG9Mb3dlckNhc2UoKSxuPXIudHJpbSh0LnN1YnN0cihvKzEpKSxlJiYoaVtlXT1pW2VdP2lbZV0rXCIsIFwiK246bil9KSxpKTppfX0sZnVuY3Rpb24odCxlKXtcInVzZSBzdHJpY3RcIjt0LmV4cG9ydHM9ZnVuY3Rpb24odCxlLG4pe3ZhciByPW4uY29uZmlnLnZhbGlkYXRlU3RhdHVzO24uc3RhdHVzJiZyJiYhcihuLnN0YXR1cyk/ZShuKTp0KG4pfX0sZnVuY3Rpb24odCxlKXtcInVzZSBzdHJpY3RcIjt0LmV4cG9ydHM9ZnVuY3Rpb24odCl7cmV0dXJuIGZ1bmN0aW9uKGUpe3JldHVybiB0LmFwcGx5KG51bGwsZSl9fX0sZnVuY3Rpb24odCxlLG4pe3ZhciByOyhmdW5jdGlvbih0LG8saSl7LyohXG5cdCAqIEBvdmVydmlldyBlczYtcHJvbWlzZSAtIGEgdGlueSBpbXBsZW1lbnRhdGlvbiBvZiBQcm9taXNlcy9BKy5cblx0ICogQGNvcHlyaWdodCBDb3B5cmlnaHQgKGMpIDIwMTQgWWVodWRhIEthdHosIFRvbSBEYWxlLCBTdGVmYW4gUGVubmVyIGFuZCBjb250cmlidXRvcnMgKENvbnZlcnNpb24gdG8gRVM2IEFQSSBieSBKYWtlIEFyY2hpYmFsZClcblx0ICogQGxpY2Vuc2UgICBMaWNlbnNlZCB1bmRlciBNSVQgbGljZW5zZVxuXHQgKiAgICAgICAgICAgIFNlZSBodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20vamFrZWFyY2hpYmFsZC9lczYtcHJvbWlzZS9tYXN0ZXIvTElDRU5TRVxuXHQgKiBAdmVyc2lvbiAgIDMuMi4xXG5cdCAqL1xuKGZ1bmN0aW9uKCl7XCJ1c2Ugc3RyaWN0XCI7ZnVuY3Rpb24gdSh0KXtyZXR1cm5cImZ1bmN0aW9uXCI9PXR5cGVvZiB0fHxcIm9iamVjdFwiPT10eXBlb2YgdCYmbnVsbCE9PXR9ZnVuY3Rpb24gcyh0KXtyZXR1cm5cImZ1bmN0aW9uXCI9PXR5cGVvZiB0fWZ1bmN0aW9uIGModCl7Rz10fWZ1bmN0aW9uIGEodCl7dHQ9dH1mdW5jdGlvbiBmKCl7cmV0dXJuIGZ1bmN0aW9uKCl7dC5uZXh0VGljayhtKX19ZnVuY3Rpb24gbCgpe3JldHVybiBmdW5jdGlvbigpe1kobSl9fWZ1bmN0aW9uIHAoKXt2YXIgdD0wLGU9bmV3IHJ0KG0pLG49ZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCJcIik7cmV0dXJuIGUub2JzZXJ2ZShuLHtjaGFyYWN0ZXJEYXRhOiEwfSksZnVuY3Rpb24oKXtuLmRhdGE9dD0rK3QlMn19ZnVuY3Rpb24gaCgpe3ZhciB0PW5ldyBNZXNzYWdlQ2hhbm5lbDtyZXR1cm4gdC5wb3J0MS5vbm1lc3NhZ2U9bSxmdW5jdGlvbigpe3QucG9ydDIucG9zdE1lc3NhZ2UoMCl9fWZ1bmN0aW9uIGQoKXtyZXR1cm4gZnVuY3Rpb24oKXtzZXRUaW1lb3V0KG0sMSl9fWZ1bmN0aW9uIG0oKXtmb3IodmFyIHQ9MDt0PFo7dCs9Mil7dmFyIGU9dXRbdF0sbj11dFt0KzFdO2UobiksdXRbdF09dm9pZCAwLHV0W3QrMV09dm9pZCAwfVo9MH1mdW5jdGlvbiB2KCl7dHJ5e3ZhciB0PW4oMjcpO3JldHVybiBZPXQucnVuT25Mb29wfHx0LnJ1bk9uQ29udGV4dCxsKCl9Y2F0Y2goZSl7cmV0dXJuIGQoKX19ZnVuY3Rpb24geSh0LGUpe3ZhciBuPXRoaXMscj1uZXcgdGhpcy5jb25zdHJ1Y3Rvcih3KTt2b2lkIDA9PT1yW2F0XSYmTShyKTt2YXIgbz1uLl9zdGF0ZTtpZihvKXt2YXIgaT1hcmd1bWVudHNbby0xXTt0dChmdW5jdGlvbigpe0wobyxyLGksbi5fcmVzdWx0KX0pfWVsc2UgRChuLHIsdCxlKTtyZXR1cm4gcn1mdW5jdGlvbiBnKHQpe3ZhciBlPXRoaXM7aWYodCYmXCJvYmplY3RcIj09dHlwZW9mIHQmJnQuY29uc3RydWN0b3I9PT1lKXJldHVybiB0O3ZhciBuPW5ldyBlKHcpO3JldHVybiBDKG4sdCksbn1mdW5jdGlvbiB3KCl7fWZ1bmN0aW9uIGIoKXtyZXR1cm4gbmV3IFR5cGVFcnJvcihcIllvdSBjYW5ub3QgcmVzb2x2ZSBhIHByb21pc2Ugd2l0aCBpdHNlbGZcIil9ZnVuY3Rpb24geCgpe3JldHVybiBuZXcgVHlwZUVycm9yKFwiQSBwcm9taXNlcyBjYWxsYmFjayBjYW5ub3QgcmV0dXJuIHRoYXQgc2FtZSBwcm9taXNlLlwiKX1mdW5jdGlvbiBfKHQpe3RyeXtyZXR1cm4gdC50aGVufWNhdGNoKGUpe3JldHVybiBodC5lcnJvcj1lLGh0fX1mdW5jdGlvbiBBKHQsZSxuLHIpe3RyeXt0LmNhbGwoZSxuLHIpfWNhdGNoKG8pe3JldHVybiBvfX1mdW5jdGlvbiBFKHQsZSxuKXt0dChmdW5jdGlvbih0KXt2YXIgcj0hMSxvPUEobixlLGZ1bmN0aW9uKG4pe3J8fChyPSEwLGUhPT1uP0ModCxuKTpSKHQsbikpfSxmdW5jdGlvbihlKXtyfHwocj0hMCxPKHQsZSkpfSxcIlNldHRsZTogXCIrKHQuX2xhYmVsfHxcIiB1bmtub3duIHByb21pc2VcIikpOyFyJiZvJiYocj0hMCxPKHQsbykpfSx0KX1mdW5jdGlvbiBTKHQsZSl7ZS5fc3RhdGU9PT1sdD9SKHQsZS5fcmVzdWx0KTplLl9zdGF0ZT09PXB0P08odCxlLl9yZXN1bHQpOkQoZSx2b2lkIDAsZnVuY3Rpb24oZSl7Qyh0LGUpfSxmdW5jdGlvbihlKXtPKHQsZSl9KX1mdW5jdGlvbiBqKHQsZSxuKXtlLmNvbnN0cnVjdG9yPT09dC5jb25zdHJ1Y3RvciYmbj09PXN0JiZjb25zdHJ1Y3Rvci5yZXNvbHZlPT09Y3Q/Uyh0LGUpOm49PT1odD9PKHQsaHQuZXJyb3IpOnZvaWQgMD09PW4/Uih0LGUpOnMobik/RSh0LGUsbik6Uih0LGUpfWZ1bmN0aW9uIEModCxlKXt0PT09ZT9PKHQsYigpKTp1KGUpP2oodCxlLF8oZSkpOlIodCxlKX1mdW5jdGlvbiBUKHQpe3QuX29uZXJyb3ImJnQuX29uZXJyb3IodC5fcmVzdWx0KSxCKHQpfWZ1bmN0aW9uIFIodCxlKXt0Ll9zdGF0ZT09PWZ0JiYodC5fcmVzdWx0PWUsdC5fc3RhdGU9bHQsMCE9PXQuX3N1YnNjcmliZXJzLmxlbmd0aCYmdHQoQix0KSl9ZnVuY3Rpb24gTyh0LGUpe3QuX3N0YXRlPT09ZnQmJih0Ll9zdGF0ZT1wdCx0Ll9yZXN1bHQ9ZSx0dChULHQpKX1mdW5jdGlvbiBEKHQsZSxuLHIpe3ZhciBvPXQuX3N1YnNjcmliZXJzLGk9by5sZW5ndGg7dC5fb25lcnJvcj1udWxsLG9baV09ZSxvW2krbHRdPW4sb1tpK3B0XT1yLDA9PT1pJiZ0Ll9zdGF0ZSYmdHQoQix0KX1mdW5jdGlvbiBCKHQpe3ZhciBlPXQuX3N1YnNjcmliZXJzLG49dC5fc3RhdGU7aWYoMCE9PWUubGVuZ3RoKXtmb3IodmFyIHIsbyxpPXQuX3Jlc3VsdCx1PTA7dTxlLmxlbmd0aDt1Kz0zKXI9ZVt1XSxvPWVbdStuXSxyP0wobixyLG8saSk6byhpKTt0Ll9zdWJzY3JpYmVycy5sZW5ndGg9MH19ZnVuY3Rpb24gSSgpe3RoaXMuZXJyb3I9bnVsbH1mdW5jdGlvbiBxKHQsZSl7dHJ5e3JldHVybiB0KGUpfWNhdGNoKG4pe3JldHVybiBkdC5lcnJvcj1uLGR0fX1mdW5jdGlvbiBMKHQsZSxuLHIpe3ZhciBvLGksdSxjLGE9cyhuKTtpZihhKXtpZihvPXEobixyKSxvPT09ZHQ/KGM9ITAsaT1vLmVycm9yLG89bnVsbCk6dT0hMCxlPT09bylyZXR1cm4gdm9pZCBPKGUseCgpKX1lbHNlIG89cix1PSEwO2UuX3N0YXRlIT09ZnR8fChhJiZ1P0MoZSxvKTpjP08oZSxpKTp0PT09bHQ/UihlLG8pOnQ9PT1wdCYmTyhlLG8pKX1mdW5jdGlvbiBQKHQsZSl7dHJ5e2UoZnVuY3Rpb24oZSl7Qyh0LGUpfSxmdW5jdGlvbihlKXtPKHQsZSl9KX1jYXRjaChuKXtPKHQsbil9fWZ1bmN0aW9uIFUoKXtyZXR1cm4gbXQrK31mdW5jdGlvbiBNKHQpe3RbYXRdPW10KyssdC5fc3RhdGU9dm9pZCAwLHQuX3Jlc3VsdD12b2lkIDAsdC5fc3Vic2NyaWJlcnM9W119ZnVuY3Rpb24gTih0KXtyZXR1cm4gbmV3IGJ0KHRoaXMsdCkucHJvbWlzZX1mdW5jdGlvbiBYKHQpe3ZhciBlPXRoaXM7cmV0dXJuIG5ldyBlKFEodCk/ZnVuY3Rpb24obixyKXtmb3IodmFyIG89dC5sZW5ndGgsaT0wO2k8bztpKyspZS5yZXNvbHZlKHRbaV0pLnRoZW4obixyKX06ZnVuY3Rpb24odCxlKXtlKG5ldyBUeXBlRXJyb3IoXCJZb3UgbXVzdCBwYXNzIGFuIGFycmF5IHRvIHJhY2UuXCIpKX0pfWZ1bmN0aW9uIEYodCl7dmFyIGU9dGhpcyxuPW5ldyBlKHcpO3JldHVybiBPKG4sdCksbn1mdW5jdGlvbiBrKCl7dGhyb3cgbmV3IFR5cGVFcnJvcihcIllvdSBtdXN0IHBhc3MgYSByZXNvbHZlciBmdW5jdGlvbiBhcyB0aGUgZmlyc3QgYXJndW1lbnQgdG8gdGhlIHByb21pc2UgY29uc3RydWN0b3JcIil9ZnVuY3Rpb24gSCgpe3Rocm93IG5ldyBUeXBlRXJyb3IoXCJGYWlsZWQgdG8gY29uc3RydWN0ICdQcm9taXNlJzogUGxlYXNlIHVzZSB0aGUgJ25ldycgb3BlcmF0b3IsIHRoaXMgb2JqZWN0IGNvbnN0cnVjdG9yIGNhbm5vdCBiZSBjYWxsZWQgYXMgYSBmdW5jdGlvbi5cIil9ZnVuY3Rpb24gSyh0KXt0aGlzW2F0XT1VKCksdGhpcy5fcmVzdWx0PXRoaXMuX3N0YXRlPXZvaWQgMCx0aGlzLl9zdWJzY3JpYmVycz1bXSx3IT09dCYmKFwiZnVuY3Rpb25cIiE9dHlwZW9mIHQmJmsoKSx0aGlzIGluc3RhbmNlb2YgSz9QKHRoaXMsdCk6SCgpKX1mdW5jdGlvbiBWKHQsZSl7dGhpcy5faW5zdGFuY2VDb25zdHJ1Y3Rvcj10LHRoaXMucHJvbWlzZT1uZXcgdCh3KSx0aGlzLnByb21pc2VbYXRdfHxNKHRoaXMucHJvbWlzZSksUShlKT8odGhpcy5faW5wdXQ9ZSx0aGlzLmxlbmd0aD1lLmxlbmd0aCx0aGlzLl9yZW1haW5pbmc9ZS5sZW5ndGgsdGhpcy5fcmVzdWx0PW5ldyBBcnJheSh0aGlzLmxlbmd0aCksMD09PXRoaXMubGVuZ3RoP1IodGhpcy5wcm9taXNlLHRoaXMuX3Jlc3VsdCk6KHRoaXMubGVuZ3RoPXRoaXMubGVuZ3RofHwwLHRoaXMuX2VudW1lcmF0ZSgpLDA9PT10aGlzLl9yZW1haW5pbmcmJlIodGhpcy5wcm9taXNlLHRoaXMuX3Jlc3VsdCkpKTpPKHRoaXMucHJvbWlzZSx6KCkpfWZ1bmN0aW9uIHooKXtyZXR1cm4gbmV3IEVycm9yKFwiQXJyYXkgTWV0aG9kcyBtdXN0IGJlIHByb3ZpZGVkIGFuIEFycmF5XCIpfWZ1bmN0aW9uICQoKXt2YXIgdDtpZihcInVuZGVmaW5lZFwiIT10eXBlb2Ygbyl0PW87ZWxzZSBpZihcInVuZGVmaW5lZFwiIT10eXBlb2Ygc2VsZil0PXNlbGY7ZWxzZSB0cnl7dD1GdW5jdGlvbihcInJldHVybiB0aGlzXCIpKCl9Y2F0Y2goZSl7dGhyb3cgbmV3IEVycm9yKFwicG9seWZpbGwgZmFpbGVkIGJlY2F1c2UgZ2xvYmFsIG9iamVjdCBpcyB1bmF2YWlsYWJsZSBpbiB0aGlzIGVudmlyb25tZW50XCIpfXZhciBuPXQuUHJvbWlzZTtuJiZcIltvYmplY3QgUHJvbWlzZV1cIj09PU9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChuLnJlc29sdmUoKSkmJiFuLmNhc3R8fCh0LlByb21pc2U9d3QpfXZhciBKO0o9QXJyYXkuaXNBcnJheT9BcnJheS5pc0FycmF5OmZ1bmN0aW9uKHQpe3JldHVyblwiW29iamVjdCBBcnJheV1cIj09PU9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh0KX07dmFyIFksRyxXLFE9SixaPTAsdHQ9ZnVuY3Rpb24odCxlKXt1dFtaXT10LHV0W1orMV09ZSxaKz0yLDI9PT1aJiYoRz9HKG0pOlcoKSl9LGV0PVwidW5kZWZpbmVkXCIhPXR5cGVvZiB3aW5kb3c/d2luZG93OnZvaWQgMCxudD1ldHx8e30scnQ9bnQuTXV0YXRpb25PYnNlcnZlcnx8bnQuV2ViS2l0TXV0YXRpb25PYnNlcnZlcixvdD1cInVuZGVmaW5lZFwiPT10eXBlb2Ygc2VsZiYmXCJ1bmRlZmluZWRcIiE9dHlwZW9mIHQmJlwiW29iamVjdCBwcm9jZXNzXVwiPT09e30udG9TdHJpbmcuY2FsbCh0KSxpdD1cInVuZGVmaW5lZFwiIT10eXBlb2YgVWludDhDbGFtcGVkQXJyYXkmJlwidW5kZWZpbmVkXCIhPXR5cGVvZiBpbXBvcnRTY3JpcHRzJiZcInVuZGVmaW5lZFwiIT10eXBlb2YgTWVzc2FnZUNoYW5uZWwsdXQ9bmV3IEFycmF5KDFlMyk7Vz1vdD9mKCk6cnQ/cCgpOml0P2goKTp2b2lkIDA9PT1ldD92KCk6ZCgpO3ZhciBzdD15LGN0PWcsYXQ9TWF0aC5yYW5kb20oKS50b1N0cmluZygzNikuc3Vic3RyaW5nKDE2KSxmdD12b2lkIDAsbHQ9MSxwdD0yLGh0PW5ldyBJLGR0PW5ldyBJLG10PTAsdnQ9Tix5dD1YLGd0PUYsd3Q9SztLLmFsbD12dCxLLnJhY2U9eXQsSy5yZXNvbHZlPWN0LEsucmVqZWN0PWd0LEsuX3NldFNjaGVkdWxlcj1jLEsuX3NldEFzYXA9YSxLLl9hc2FwPXR0LEsucHJvdG90eXBlPXtjb25zdHJ1Y3RvcjpLLHRoZW46c3QsXCJjYXRjaFwiOmZ1bmN0aW9uKHQpe3JldHVybiB0aGlzLnRoZW4obnVsbCx0KX19O3ZhciBidD1WO1YucHJvdG90eXBlLl9lbnVtZXJhdGU9ZnVuY3Rpb24oKXtmb3IodmFyIHQ9dGhpcy5sZW5ndGgsZT10aGlzLl9pbnB1dCxuPTA7dGhpcy5fc3RhdGU9PT1mdCYmbjx0O24rKyl0aGlzLl9lYWNoRW50cnkoZVtuXSxuKX0sVi5wcm90b3R5cGUuX2VhY2hFbnRyeT1mdW5jdGlvbih0LGUpe3ZhciBuPXRoaXMuX2luc3RhbmNlQ29uc3RydWN0b3Iscj1uLnJlc29sdmU7aWYocj09PWN0KXt2YXIgbz1fKHQpO2lmKG89PT1zdCYmdC5fc3RhdGUhPT1mdCl0aGlzLl9zZXR0bGVkQXQodC5fc3RhdGUsZSx0Ll9yZXN1bHQpO2Vsc2UgaWYoXCJmdW5jdGlvblwiIT10eXBlb2Ygbyl0aGlzLl9yZW1haW5pbmctLSx0aGlzLl9yZXN1bHRbZV09dDtlbHNlIGlmKG49PT13dCl7dmFyIGk9bmV3IG4odyk7aihpLHQsbyksdGhpcy5fd2lsbFNldHRsZUF0KGksZSl9ZWxzZSB0aGlzLl93aWxsU2V0dGxlQXQobmV3IG4oZnVuY3Rpb24oZSl7ZSh0KX0pLGUpfWVsc2UgdGhpcy5fd2lsbFNldHRsZUF0KHIodCksZSl9LFYucHJvdG90eXBlLl9zZXR0bGVkQXQ9ZnVuY3Rpb24odCxlLG4pe3ZhciByPXRoaXMucHJvbWlzZTtyLl9zdGF0ZT09PWZ0JiYodGhpcy5fcmVtYWluaW5nLS0sdD09PXB0P08ocixuKTp0aGlzLl9yZXN1bHRbZV09biksMD09PXRoaXMuX3JlbWFpbmluZyYmUihyLHRoaXMuX3Jlc3VsdCl9LFYucHJvdG90eXBlLl93aWxsU2V0dGxlQXQ9ZnVuY3Rpb24odCxlKXt2YXIgbj10aGlzO0QodCx2b2lkIDAsZnVuY3Rpb24odCl7bi5fc2V0dGxlZEF0KGx0LGUsdCl9LGZ1bmN0aW9uKHQpe24uX3NldHRsZWRBdChwdCxlLHQpfSl9O3ZhciB4dD0kLF90PXtQcm9taXNlOnd0LHBvbHlmaWxsOnh0fTtuKDI1KS5hbWQ/KHI9ZnVuY3Rpb24oKXtyZXR1cm4gX3R9LmNhbGwoZSxuLGUsaSksISh2b2lkIDAhPT1yJiYoaS5leHBvcnRzPXIpKSk6XCJ1bmRlZmluZWRcIiE9dHlwZW9mIGkmJmkuZXhwb3J0cz9pLmV4cG9ydHM9X3Q6XCJ1bmRlZmluZWRcIiE9dHlwZW9mIHRoaXMmJih0aGlzLkVTNlByb21pc2U9X3QpLHh0KCl9KS5jYWxsKHRoaXMpfSkuY2FsbChlLG4oMiksZnVuY3Rpb24oKXtyZXR1cm4gdGhpc30oKSxuKDI2KSh0KSl9LGZ1bmN0aW9uKHQsZSxuKXtcInVuZGVmaW5lZFwiPT10eXBlb2YgUHJvbWlzZSYmbigyMSkucG9seWZpbGwoKTt2YXIgcj1uKDI0KSxvPW4oNSksaT1uKDIzKSx1PXtiYXNlVVJMOlwiaHR0cHM6Ly9kZXYuYXBpLmlibS5jb20vdmlydHVhbGFnZW50L2RldmVsb3BtZW50L2FwaS92MS9cIix0aW1lb3V0OjNlNCx1c2VySUQ6bnVsbCx3aXRoQ3JlZGVudGlhbHM6ITEsWElCTUNsaWVudElEOiExLFhJQk1DbGllbnRTZWNyZXQ6ITF9LHM9by5jcmVhdGUodSksYz0vXFx8JiguKj8pXFx8L2csYT1mdW5jdGlvbih0KXtmb3IodmFyIGU9MDtlPHQudGV4dC5sZW5ndGg7ZSsrKXt2YXIgbj10LnRleHRbZV0ubWF0Y2goYyl8fFtdO3QudGV4dFtlXT1uLnJlZHVjZShmdW5jdGlvbih0LGUpe2NvbnN0IG49ZS5zbGljZSgyLC0xKSxyPWkuZ2V0KG4pO3JldHVybiB0LnJlcGxhY2UoZSxyKX0sdC50ZXh0W2VdKX1yZXR1cm4gdH0sZj10LmV4cG9ydHM9e2NvbmZpZ3VyZTpmdW5jdGlvbih0KXtyZXR1cm4gcih1LHQpLHM9by5jcmVhdGUoe2Jhc2VVUkw6dS5iYXNlVVJMLHRpbWVvdXQ6dS50aW1lb3V0LHdpdGhDcmVkZW50aWFsczp1LndpdGhDcmVkZW50aWFscyxoZWFkZXJzOnUuWElCTUNsaWVudElEJiZ1LlhJQk1DbGllbnRTZWNyZXQ/e1wiWC1JQk0tQ2xpZW50LUlkXCI6dS5YSUJNQ2xpZW50SUQsXCJYLUlCTS1DbGllbnQtU2VjcmV0XCI6dS5YSUJNQ2xpZW50U2VjcmV0fTp7fX0pLGZ9LHN0YXJ0OmZ1bmN0aW9uKHQpe3ZhciBlPWwoKSxuPXt1c2VySUQ6dS51c2VySUR9LHI9XCIvYm90cy9cIit0K1wiL2RpYWxvZ3NcIixvPXtoZWFkZXJzOntcIlgtUmVxdWVzdC1JRFwiOmV9fTtyZXR1cm4gcy5wb3N0KHIsbixvKS50aGVuKGZ1bmN0aW9uKHQpe3JldHVybntjaGF0SUQ6dC5kYXRhLmRpYWxvZ19pZCxtZXNzYWdlOmEodC5kYXRhLm1lc3NhZ2UpfX0pW1wiY2F0Y2hcIl0oZnVuY3Rpb24odCl7Y29uc29sZS5lcnJvcihcIlJlcXVlc3QgZmFpbGVkOlwiLGUpLHAodCl9KX0sc2VuZDpmdW5jdGlvbih0LGUsbil7dmFyIHI9bCgpLG89e21lc3NhZ2U6bix1c2VySUQ6dS51c2VySUR9LGk9XCIvYm90cy9cIit0K1wiL2RpYWxvZ3MvXCIrZStcIi9tZXNzYWdlc1wiLGM9XCJtZXNzYWdlPVwiK2VuY29kZVVSSUNvbXBvbmVudChuKSxmPXtoZWFkZXJzOntcIlgtUmVxdWVzdC1JRFwiOnJ9fTtyZXR1cm4gcy5wb3N0KGkrXCI/XCIrYyxvLGYpLnRoZW4oZnVuY3Rpb24odCl7cmV0dXJue21lc3NhZ2U6YSh0LmRhdGEubWVzc2FnZSl9fSlbXCJjYXRjaFwiXShmdW5jdGlvbih0KXtjb25zb2xlLmVycm9yKFwiUmVxdWVzdCBmYWlsZWQ6XCIscikscCh0KX0pfSxwcm9maWxlOntnZXQ6aS5nZXQsc2V0Omkuc2V0LGhhczppLmhhcyxjbGVhcjppLmNsZWFyLFwiZGVsZXRlXCI6aVtcImRlbGV0ZVwiXSxmb3JFYWNoOmkuZm9yRWFjaH19LGw9ZnVuY3Rpb24oKXtyZXR1cm5cInh4eHh4eHh4LXh4eHgtNHh4eC15eHh4LXh4eHh4eHh4eHh4eFwiLnJlcGxhY2UoL1t4eV0vZyxmdW5jdGlvbih0KXt2YXIgZT0xNipNYXRoLnJhbmRvbSgpfDAsbj1cInhcIj09dD9lOjMmZXw4O3JldHVybiBuLnRvU3RyaW5nKDE2KX0pfSxwPWZ1bmN0aW9uKHQpe2lmKCF0LnN0YXR1cyl0aHJvdyB0O3ZhciBlPXQuc3RhdHVzLG49dC5zdGF0dXNUZXh0LHI9bmV3IEVycm9yKG4pO3Rocm93IHIuc3RhdHVzPWUscn19LGZ1bmN0aW9uKHQsZSl7dmFyIG49e30scj17c2V0OmZ1bmN0aW9uKHQsZSl7cmV0dXJuIG5bdF09ZSxyfSxnZXQ6ZnVuY3Rpb24odCl7cmV0dXJuIG5bdF18fFwiXCJ9LGhhczpmdW5jdGlvbih0KXtyZXR1cm4gdm9pZCAwIT09blt0XX0sY2xlYXI6ZnVuY3Rpb24oKXtyZXR1cm4gbj17fSxyfSxcImRlbGV0ZVwiOmZ1bmN0aW9uKHQpe3JldHVybiBkZWxldGUgblt0XSxyfSxmb3JFYWNoOmZ1bmN0aW9uKHQsZSl7cmV0dXJuIE9iamVjdC5rZXlzKG4pLmZvckVhY2goZnVuY3Rpb24ocil7ZT90KHIsbltyXSkuYmluZChlKTp0KHIsbltyXSl9KSxyfX07dC5leHBvcnRzPXJ9LGZ1bmN0aW9uKHQsZSl7ZnVuY3Rpb24gbih0LGUsbil7c3dpdGNoKG4ubGVuZ3RoKXtjYXNlIDA6cmV0dXJuIHQuY2FsbChlKTtjYXNlIDE6cmV0dXJuIHQuY2FsbChlLG5bMF0pO2Nhc2UgMjpyZXR1cm4gdC5jYWxsKGUsblswXSxuWzFdKTtjYXNlIDM6cmV0dXJuIHQuY2FsbChlLG5bMF0sblsxXSxuWzJdKX1yZXR1cm4gdC5hcHBseShlLG4pfWZ1bmN0aW9uIHIodCl7cmV0dXJuIGZ1bmN0aW9uKGUpe3JldHVybiBudWxsPT1lP3ZvaWQgMDplW3RdfX1mdW5jdGlvbiBvKHQsZSl7Zm9yKHZhciBuPS0xLHI9QXJyYXkodCk7KytuPHQ7KXJbbl09ZShuKTtyZXR1cm4gcn1mdW5jdGlvbiBpKHQsZSl7cmV0dXJuIGZ1bmN0aW9uKG4pe3JldHVybiB0KGUobikpfX1mdW5jdGlvbiB1KHQsZSxuKXt2YXIgcj10W2VdO0IuY2FsbCh0LGUpJiZtKHIsbikmJih2b2lkIDAhPT1ufHxlIGluIHQpfHwodFtlXT1uKX1mdW5jdGlvbiBzKHQsZSl7cmV0dXJuIG51bGwhPXQmJihCLmNhbGwodCxlKXx8XCJvYmplY3RcIj09dHlwZW9mIHQmJmUgaW4gdCYmbnVsbD09PUYodCkpfWZ1bmN0aW9uIGModCxlKXtyZXR1cm4gZT1VKHZvaWQgMD09PWU/dC5sZW5ndGgtMTplLDApLGZ1bmN0aW9uKCl7Zm9yKHZhciByPWFyZ3VtZW50cyxvPS0xLGk9VShyLmxlbmd0aC1lLDApLHU9QXJyYXkoaSk7KytvPGk7KXVbb109cltlK29dO289LTE7Zm9yKHZhciBzPUFycmF5KGUrMSk7KytvPGU7KXNbb109cltvXTtyZXR1cm4gc1tlXT11LG4odCx0aGlzLHMpfX1mdW5jdGlvbiBhKHQsZSxuLHIpe258fChuPXt9KTtmb3IodmFyIG89LTEsaT1lLmxlbmd0aDsrK288aTspe3ZhciBzPWVbb10sYz1yP3IobltzXSx0W3NdLHMsbix0KTp2b2lkIDA7dShuLHMsdm9pZCAwPT09Yz90W3NdOmMpfXJldHVybiBufWZ1bmN0aW9uIGYodCl7cmV0dXJuIGMoZnVuY3Rpb24oZSxuKXt2YXIgcj0tMSxvPW4ubGVuZ3RoLGk9bz4xP25bby0xXTp2b2lkIDAsdT1vPjI/blsyXTp2b2lkIDA7Zm9yKGk9dC5sZW5ndGg+MyYmXCJmdW5jdGlvblwiPT10eXBlb2YgaT8oby0tLGkpOnZvaWQgMCx1JiZoKG5bMF0sblsxXSx1KSYmKGk9bzwzP3ZvaWQgMDppLG89MSksZT1PYmplY3QoZSk7KytyPG87KXt2YXIgcz1uW3JdO3MmJnQoZSxzLHIsaSl9cmV0dXJuIGV9KX1mdW5jdGlvbiBsKHQpe3ZhciBlPXQ/dC5sZW5ndGg6dm9pZCAwO3JldHVybiBiKGUpJiYoayh0KXx8QSh0KXx8dih0KSk/byhlLFN0cmluZyk6bnVsbH1mdW5jdGlvbiBwKHQsZSl7cmV0dXJuIGU9bnVsbD09ZT9TOmUsISFlJiYoXCJudW1iZXJcIj09dHlwZW9mIHR8fE8udGVzdCh0KSkmJnQ+LTEmJnQlMT09MCYmdDxlfWZ1bmN0aW9uIGgodCxlLG4pe2lmKCF4KG4pKXJldHVybiExO3ZhciByPXR5cGVvZiBlO3JldHVybiEhKFwibnVtYmVyXCI9PXI/eShuKSYmcChlLG4ubGVuZ3RoKTpcInN0cmluZ1wiPT1yJiZlIGluIG4pJiZtKG5bZV0sdCl9ZnVuY3Rpb24gZCh0KXt2YXIgZT10JiZ0LmNvbnN0cnVjdG9yLG49XCJmdW5jdGlvblwiPT10eXBlb2YgZSYmZS5wcm90b3R5cGV8fEQ7cmV0dXJuIHQ9PT1ufWZ1bmN0aW9uIG0odCxlKXtyZXR1cm4gdD09PWV8fHQhPT10JiZlIT09ZX1mdW5jdGlvbiB2KHQpe3JldHVybiBnKHQpJiZCLmNhbGwodCxcImNhbGxlZVwiKSYmKCFxLmNhbGwodCxcImNhbGxlZVwiKXx8SS5jYWxsKHQpPT1qKX1mdW5jdGlvbiB5KHQpe3JldHVybiBudWxsIT10JiZiKFgodCkpJiYhdyh0KX1mdW5jdGlvbiBnKHQpe3JldHVybiBfKHQpJiZ5KHQpfWZ1bmN0aW9uIHcodCl7dmFyIGU9eCh0KT9JLmNhbGwodCk6XCJcIjtyZXR1cm4gZT09Q3x8ZT09VH1mdW5jdGlvbiBiKHQpe3JldHVyblwibnVtYmVyXCI9PXR5cGVvZiB0JiZ0Pi0xJiZ0JTE9PTAmJnQ8PVN9ZnVuY3Rpb24geCh0KXt2YXIgZT10eXBlb2YgdDtyZXR1cm4hIXQmJihcIm9iamVjdFwiPT1lfHxcImZ1bmN0aW9uXCI9PWUpfWZ1bmN0aW9uIF8odCl7cmV0dXJuISF0JiZcIm9iamVjdFwiPT10eXBlb2YgdH1mdW5jdGlvbiBBKHQpe3JldHVyblwic3RyaW5nXCI9PXR5cGVvZiB0fHwhayh0KSYmXyh0KSYmSS5jYWxsKHQpPT1SfWZ1bmN0aW9uIEUodCl7dmFyIGU9ZCh0KTtpZighZSYmIXkodCkpcmV0dXJuIE4odCk7dmFyIG49bCh0KSxyPSEhbixvPW58fFtdLGk9by5sZW5ndGg7Zm9yKHZhciB1IGluIHQpIXModCx1KXx8ciYmKFwibGVuZ3RoXCI9PXV8fHAodSxpKSl8fGUmJlwiY29uc3RydWN0b3JcIj09dXx8by5wdXNoKHUpO3JldHVybiBvfXZhciBTPTkwMDcxOTkyNTQ3NDA5OTEsaj1cIltvYmplY3QgQXJndW1lbnRzXVwiLEM9XCJbb2JqZWN0IEZ1bmN0aW9uXVwiLFQ9XCJbb2JqZWN0IEdlbmVyYXRvckZ1bmN0aW9uXVwiLFI9XCJbb2JqZWN0IFN0cmluZ11cIixPPS9eKD86MHxbMS05XVxcZCopJC8sRD1PYmplY3QucHJvdG90eXBlLEI9RC5oYXNPd25Qcm9wZXJ0eSxJPUQudG9TdHJpbmcscT1ELnByb3BlcnR5SXNFbnVtZXJhYmxlLEw9T2JqZWN0LmdldFByb3RvdHlwZU9mLFA9T2JqZWN0LmtleXMsVT1NYXRoLm1heCxNPSFxLmNhbGwoe3ZhbHVlT2Y6MX0sXCJ2YWx1ZU9mXCIpLE49aShQLE9iamVjdCksWD1yKFwibGVuZ3RoXCIpLEY9aShMLE9iamVjdCksaz1BcnJheS5pc0FycmF5LEg9ZihmdW5jdGlvbih0LGUpe2lmKE18fGQoZSl8fHkoZSkpcmV0dXJuIHZvaWQgYShlLEUoZSksdCk7Zm9yKHZhciBuIGluIGUpQi5jYWxsKGUsbikmJnUodCxuLGVbbl0pfSk7dC5leHBvcnRzPUh9LGZ1bmN0aW9uKHQsZSl7dC5leHBvcnRzPWZ1bmN0aW9uKCl7dGhyb3cgbmV3IEVycm9yKFwiZGVmaW5lIGNhbm5vdCBiZSB1c2VkIGluZGlyZWN0XCIpfX0sZnVuY3Rpb24odCxlKXt0LmV4cG9ydHM9ZnVuY3Rpb24odCl7cmV0dXJuIHQud2VicGFja1BvbHlmaWxsfHwodC5kZXByZWNhdGU9ZnVuY3Rpb24oKXt9LHQucGF0aHM9W10sdC5jaGlsZHJlbj1bXSx0LndlYnBhY2tQb2x5ZmlsbD0xKSx0fX0sZnVuY3Rpb24odCxlKXt9XSl9KTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9Ad2F0c29uLXZpcnR1YWwtYWdlbnQvY2xpZW50LXNkay9saWIvd2ViLmpzXG4gKiogbW9kdWxlIGlkID0gNjVcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gXCI8ZGl2IGNsYXNzPVxcXCJJQk1DaGF0LWZvcm0tY29udGFpbmVyXFxcIj5cXG5cXHQ8ZGl2IGNsYXNzPVxcXCJJQk1DaGF0LWZvcm0tZmllbGRzXFxcIj48L2Rpdj5cXG5cXHQ8ZGl2IGNsYXNzPVxcXCJJQk1DaGF0LWZvcm0tYnV0dG9uc1xcXCI+XFxuXFx0XFx0PGJ1dHRvbiBjbGFzcz1cXFwiSUJNQ2hhdC1mb3JtLWNhbmNlbFxcXCI+Q2FuY2VsPC9idXR0b24+XFxuXFx0XFx0PGJ1dHRvbiBjbGFzcz1cXFwiSUJNQ2hhdC1mb3JtLXN1Ym1pdFxcXCI+U3VibWl0PC9idXR0b24+XFxuXFx0PC9kaXY+XFxuPC9kaXY+XFxuXCJcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2xheW91dHMvZm9ybS90ZW1wbGF0ZXMvYmFzZS5odG1sXG4gKiogbW9kdWxlIGlkID0gNjZcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gXCI8bGFiZWw+JHtsYWJlbH08L2xhYmVsPlxcbjxpbnB1dCB0eXBlPVxcXCJ0ZXh0XFxcIiBjbGFzcz1cXFwiSUJNQ2hhdC1pbnB1dC1jb2xvcnNcXFwiIG5hbWU9XFxcIiR7bmFtZX1cXFwiIHZhbHVlPVxcXCIke3ZhbHVlfVxcXCIgLz5cXG48ZGl2IGNsYXNzPVxcXCJJQk1DaGF0LXZhbGlkYXRpb24tZXJyb3IgSUJNQ2hhdC1lcnJvci1jb2xvcnNcXFwiIHN0eWxlPVxcXCJkaXNwbGF5Om5vbmU7XFxcIiBkYXRhLXZhbGlkYXRpb24tZm9yPVxcXCIke25hbWV9XFxcIiBkYXRhLXZhbGlkPVxcXCJ0cnVlXFxcIj48L2Rpdj5cXG5cIlxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvbGF5b3V0cy9mb3JtL3RlbXBsYXRlcy9maWVsZC5odG1sXG4gKiogbW9kdWxlIGlkID0gNjdcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8qKlxuKiAoQykgQ29weXJpZ2h0IElCTSBDb3JwLiAyMDE2LiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuKlxuKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpOyB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdFxuKiBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuKlxuKiBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbipcbiogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZSBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZVxuKiBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzc1xuKiBvciBpbXBsaWVkLiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kIGxpbWl0YXRpb25zIHVuZGVyXG4qIHRoZSBMaWNlbnNlLlxuKi9cblxucmVxdWlyZSgnLi9zdHlsZXMuY3NzJyk7XG5cbnZhciBldmVudHMgPSByZXF1aXJlKCcuLi8uLi9ldmVudHMnKTtcbnZhciBzdGF0ZSA9IHJlcXVpcmUoJy4uLy4uL3N0YXRlJyk7XG52YXIgcHJvZmlsZSA9IHJlcXVpcmUoJy4uLy4uL3Byb2ZpbGUnKTtcbnZhciBzdWJzY3JpYmUgPSBldmVudHMuc3Vic2NyaWJlO1xudmFyIHB1Ymxpc2ggPSBldmVudHMucHVibGlzaDtcbnZhciB1dGlscyA9IHJlcXVpcmUoJy4uLy4uL3V0aWxzJyk7XG52YXIgdmFsaWRhdGlvbiA9IHJlcXVpcmUoJy4vdmFsaWRhdGlvbicpO1xudmFyIGFjdGl2ZUNsYXNzTmFtZSA9ICdJQk1DaGF0LWFjY2VudC1jb2xvcnMnO1xudmFyIG5zID0gJ0lCTUNoYXQtY3JlZGl0Y2FyZCc7XG52YXIgd2lkZ2V0cyA9IFtdO1xudmFyIHRlbXBsYXRlcyA9IHtcblx0YmFzZTogcmVxdWlyZSgnLi90ZW1wbGF0ZXMvYmFzZS5odG1sJylcbn07XG5cbnZhciBjcmVkaXRDYXJkTGF5b3V0ID0ge1xuXHRpbml0OiBmdW5jdGlvbigpIHtcblx0XHRzdWJzY3JpYmUoJ2xheW91dDpjYy12YWxpZGF0b3InLCBmdW5jdGlvbihkYXRhKSB7XG5cdFx0XHR2YXIgd2lkZ2V0ID0gbmV3IENyZWRpdENhcmQoZGF0YSk7XG5cdFx0XHR3aWRnZXRzW2RhdGEudXVpZF0gPSB3aWRnZXQ7XG5cdFx0fSk7XG5cdH1cbn07XG5cbmZ1bmN0aW9uIENyZWRpdENhcmQoZGF0YSkge1xuXHR0aGlzLmluaXQoZGF0YSk7XG59XG5cbkNyZWRpdENhcmQucHJvdG90eXBlLmluaXQgPSBmdW5jdGlvbihkYXRhKSB7XG5cdHRoaXMuZGF0YSA9IGRhdGEubWVzc2FnZS5sYXlvdXQuZGF0YSB8fCB7fTtcblx0dGhpcy5kYXRhLmFjY2VwdGVkQ2FyZHMgPSB0aGlzLmRhdGEudHlwZXM7XG5cdHRoaXMudXVpZCA9IGRhdGEudXVpZDtcblx0dGhpcy5wYXJlbnRFbGVtZW50ID0gZGF0YS5lbGVtZW50O1xuXHR0aGlzLmxheW91dEVsZW1lbnQgPSBkYXRhLmxheW91dEVsZW1lbnQ7XG5cdHRoaXMubXNnRWxlbWVudCA9IGRhdGEubXNnRWxlbWVudDtcblx0dGhpcy5kcmF3Rm9ybSgpO1xuXHR0aGlzLnN1YnNjcmliZVNlbmQgPSBzdWJzY3JpYmUoJ3NlbmQnLCB0aGlzLnJlbW92ZUFsbEV2ZW50TGlzdGVuZXJzLmJpbmQodGhpcykpO1xuXHRwdWJsaXNoKCdkaXNhYmxlLWlucHV0Jyk7XG59O1xuXG5DcmVkaXRDYXJkLnByb3RvdHlwZS5kcmF3Rm9ybSA9IGZ1bmN0aW9uKCkge1xuXHR2YXIgdGV4dCA9IHRlbXBsYXRlcy5iYXNlO1xuXHR0aGlzLmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cdHRleHQgPSB1dGlscy5jb21waWxlKHRlbXBsYXRlcy5iYXNlLCB7XG5cdFx0bnM6IG5zXG5cdH0pO1xuXHR0aGlzLmVsLmlubmVySFRNTCA9IHRleHQ7XG5cdHRoaXMubGF5b3V0RWxlbWVudC5hcHBlbmRDaGlsZCh0aGlzLmVsKTtcblx0dGhpcy5jYW5jZWxCdXR0b24gPSB0aGlzLmVsLnF1ZXJ5U2VsZWN0b3IoJy4nICsgbnMgKyAnLWNhbmNlbCcpO1xuXHR0aGlzLmNvbnRpbnVlQnV0dG9uID0gdGhpcy5lbC5xdWVyeVNlbGVjdG9yKCcuJyArIG5zICsgJy1jb250aW51ZScpO1xuXHR0aGlzLmZvcm1FbGVtZW50cyA9IHt9O1xuXHR0aGlzLmZpZWxkcyA9IHRoaXMuZWwucXVlcnlTZWxlY3RvckFsbCgnaW5wdXQnKTtcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmZpZWxkcy5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBmaWVsZCA9IHRoaXMuZmllbGRzW2ldO1xuXHRcdHZhciBuYW1lID0gZmllbGQuZ2V0QXR0cmlidXRlKCduYW1lJyk7XG5cdFx0dGhpcy5mb3JtRWxlbWVudHNbbmFtZV0gPSBmaWVsZDtcblx0fVxuXHR0aGlzLmZvcm1FbGVtZW50c1snY2NfZnVsbF9uYW1lJ10uZm9jdXMoKTtcblx0dGhpcy5hZGRMaXN0ZW5lcnMoKTtcbn07XG5cbkNyZWRpdENhcmQucHJvdG90eXBlLmFkZExpc3RlbmVycyA9IGZ1bmN0aW9uKCkge1xuXHR0aGlzLmNhbmNlbEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuaGFuZGxlQ2FuY2VsLmJpbmQodGhpcykpO1xuXHR0aGlzLmNvbnRpbnVlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5oYW5kbGVDb250aW51ZS5iaW5kKHRoaXMpKTtcbn07XG5cbkNyZWRpdENhcmQucHJvdG90eXBlLmFkZEVycm9yID0gZnVuY3Rpb24obmFtZSwgbXNnKSB7XG5cdHZhciBlcnJvckVsZW1lbnQgPSB0aGlzLmVsLnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLXZhbGlkYXRpb24tZm9yPVwiJyArIG5hbWUgKyAnXCJdJyk7XG5cdGVycm9yRWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcblx0ZXJyb3JFbGVtZW50LmRhdGFzZXQudmFsaWQgPSBmYWxzZTtcblx0ZXJyb3JFbGVtZW50LnRleHRDb250ZW50ID0gbXNnO1xufTtcblxuQ3JlZGl0Q2FyZC5wcm90b3R5cGUucmVtb3ZlRXJyb3IgPSBmdW5jdGlvbihuYW1lKSB7XG5cdHZhciBlcnJvckVsZW1lbnQgPSB0aGlzLmVsLnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLXZhbGlkYXRpb24tZm9yPVwiJyArIG5hbWUgKyAnXCJdJyk7XG5cdGVycm9yRWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuXHRlcnJvckVsZW1lbnQuZGF0YXNldC52YWxpZCA9IHRydWU7XG5cdGVycm9yRWxlbWVudC50ZXh0Q29udGVudCA9ICcnO1xufTtcblxuQ3JlZGl0Q2FyZC5wcm90b3R5cGUudmFsaWRhdGUgPSBmdW5jdGlvbigpIHtcblx0dmFyIHZhbGlkID0gdHJ1ZTtcblx0dGhpcy5mb3JtRGF0YSA9IHt9O1xuXHRmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuZmllbGRzLmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIGZpZWxkID0gdGhpcy5maWVsZHNbaV07XG5cdFx0dmFyIG5hbWUgPSBmaWVsZC5nZXRBdHRyaWJ1dGUoJ25hbWUnKTtcblx0XHR0aGlzLmZvcm1EYXRhW25hbWVdID0gZmllbGQudmFsdWU7XG5cdH1cblxuXHRpZiAodGhpcy5mb3JtRGF0YS5jY19mdWxsX25hbWUubGVuZ3RoID09PSAwKSB7XG5cdFx0dGhpcy5hZGRFcnJvcignY2NfZnVsbF9uYW1lJywgJ1RoaXMgZmllbGQgaXMgcmVxdWlyZWQuJyk7XG5cdFx0aWYgKHZhbGlkKSB0aGlzLmZvcm1FbGVtZW50c1snY2NfZnVsbF9uYW1lJ10uZm9jdXMoKTtcblx0XHR2YWxpZCA9IGZhbHNlO1xuXHR9IGVsc2Uge1xuXHRcdHRoaXMucmVtb3ZlRXJyb3IoJ2NjX2Z1bGxfbmFtZScpO1xuXHR9XG5cblx0dmFyIGNjID0gdmFsaWRhdGlvbi52YWxpZGF0ZUNhcmQodGhpcy5kYXRhLmFjY2VwdGVkQ2FyZHMsIHRoaXMuZm9ybURhdGEuY2NfbnVtYmVyKTtcblx0aWYgKCFjYy52YWxpZCkge1xuXHRcdHRoaXMuYWRkRXJyb3IoJ2NjX251bWJlcicsIGNjLm1lc3NhZ2UpO1xuXHRcdGlmICh2YWxpZCkgdGhpcy5mb3JtRWxlbWVudHNbJ2NjX251bWJlciddLmZvY3VzKCk7XG5cdFx0dmFsaWQgPSBmYWxzZTtcblx0fSBlbHNlIHtcblx0XHR0aGlzLnJlbW92ZUVycm9yKCdjY19udW1iZXInKTtcblx0fVxuXG5cdHZhciBleHAgPSB2YWxpZGF0aW9uLnZhbGlkYXRlRXhwKHRoaXMuZm9ybURhdGEuY2NfZXhwX2RhdGVfbW9udGgsIHRoaXMuZm9ybURhdGEuY2NfZXhwX2RhdGVfeWVhcik7XG5cdGlmICghZXhwLnZhbGlkKSB7XG5cdFx0dGhpcy5hZGRFcnJvcignY2NfZXhwX2RhdGUnLCBleHAubWVzc2FnZSk7XG5cdFx0aWYgKHZhbGlkKSB0aGlzLmZvcm1FbGVtZW50c1snY2NfZXhwX2RhdGVfbW9udGgnXS5mb2N1cygpO1xuXHRcdHZhbGlkID0gZmFsc2U7XG5cdH0gZWxzZSB7XG5cdFx0dGhpcy5yZW1vdmVFcnJvcignY2NfZXhwX2RhdGUnKTtcblx0fVxuXG5cdHZhciBjdnYgPSB2YWxpZGF0aW9uLnZhbGlkYXRlQ1ZWKHRoaXMuZm9ybURhdGEuY2NfY29kZSk7XG5cdGlmICghY3Z2LnZhbGlkKSB7XG5cdFx0dGhpcy5hZGRFcnJvcignY2NfY29kZScsIGN2di5tZXNzYWdlKTtcblx0XHRpZiAodmFsaWQpIHRoaXMuZm9ybUVsZW1lbnRzWydjY19jb2RlJ10uZm9jdXMoKTtcblx0XHR2YWxpZCA9IGZhbHNlO1xuXHR9IGVsc2Uge1xuXHRcdHRoaXMucmVtb3ZlRXJyb3IoJ2NjX2NvZGUnKTtcblx0fVxuXHRyZXR1cm4gdmFsaWQ7XG59O1xuXG5DcmVkaXRDYXJkLnByb3RvdHlwZS5oYW5kbGVDb250aW51ZSA9IGZ1bmN0aW9uKCkge1xuXHRpZiAodGhpcy52YWxpZGF0ZSgpKSB7XG5cdFx0dmFyIGZkID0gdGhpcy5mb3JtRGF0YTtcblx0XHRmZC5jY19leHBfZGF0ZSA9IGZkLmNjX2V4cF9kYXRlX21vbnRoICsgJy8nICsgZmQuY2NfZXhwX2RhdGVfeWVhcjtcblx0XHRmZC5jY19sYXN0X2ZvdXJfZGlnaXRzID0gZmQuY2NfbnVtYmVyLnN1YnN0cihmZC5jY19udW1iZXIubGVuZ3RoIC0gNCk7XG5cdFx0T2JqZWN0LmtleXMoZmQpLm1hcChmdW5jdGlvbihrZXkpIHtcblx0XHRcdHByb2ZpbGUuc2V0KGtleSwgZmRba2V5XSk7XG5cdFx0fSk7XG5cdFx0cHVibGlzaCgnZW5hYmxlLWlucHV0Jyk7XG5cdFx0cHVibGlzaCgnc2VuZCcsIHtcblx0XHRcdHNpbGVudDogdHJ1ZSxcblx0XHRcdHRleHQ6ICdzdWNjZXNzJ1xuXHRcdH0pO1xuXHR9XG59O1xuXG5DcmVkaXRDYXJkLnByb3RvdHlwZS5oYW5kbGVDYW5jZWwgPSBmdW5jdGlvbigpIHtcblx0dGhpcy5jYW5jZWxCdXR0b24uY2xhc3NMaXN0LmFkZChhY3RpdmVDbGFzc05hbWUpO1xuXHRwdWJsaXNoKCdlbmFibGUtaW5wdXQnKTtcblx0cHVibGlzaCgnc2VuZCcsIHtcblx0XHRzaWxlbnQ6IHRydWUsXG5cdFx0dGV4dDogJ2NhbmNlbCdcblx0fSk7XG59O1xuXG5DcmVkaXRDYXJkLnByb3RvdHlwZS5yZW1vdmVBbGxFdmVudExpc3RlbmVycyA9IGZ1bmN0aW9uKCkge1xuXHR0aGlzLmNhbmNlbEJ1dHRvbi5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuaGFuZGxlQ2FuY2VsLmJpbmQodGhpcykpO1xuXHR0aGlzLmNhbmNlbEJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2Rpc2FibGVkJywgdHJ1ZSk7XG5cdHRoaXMuY29udGludWVCdXR0b24ucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmhhbmRsZUNvbnRpbnVlLmJpbmQodGhpcykpO1xuXHR0aGlzLmNvbnRpbnVlQnV0dG9uLnNldEF0dHJpYnV0ZSgnZGlzYWJsZWQnLCB0cnVlKTtcblx0Zm9yICh2YXIgaiA9IDA7IGogPCB0aGlzLmZpZWxkcy5sZW5ndGg7IGorKylcblx0XHR0aGlzLmZpZWxkc1tqXS5zZXRBdHRyaWJ1dGUoJ2Rpc2FibGVkJywgdHJ1ZSk7XG5cblx0dGhpcy5zdWJzY3JpYmVTZW5kLnJlbW92ZSgpO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBjcmVkaXRDYXJkTGF5b3V0O1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9sYXlvdXRzL2NjLXZhbGlkYXRvci9pbmRleC5qc1xuICoqIG1vZHVsZSBpZCA9IDY4XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IFwiLklCTUNoYXQtY3JlZGl0Y2FyZC1jb250YWluZXIge1xcblxcdHRleHQtYWxpZ246Y2VudGVyO1xcblxcdHBhZGRpbmc6MCAwIDFlbSAwO1xcbn1cXG5cXG4uSUJNQ2hhdC1jcmVkaXRjYXJkLXJvd3Mge1xcblxcdG1hcmdpbjphdXRvO1xcblxcdHRleHQtYWxpZ246bGVmdDtcXG5cXHRtYXgtd2lkdGg6MzYwcHg7XFxuXFx0d2lkdGg6MTAwJTtcXG59XFxuXFxuLklCTUNoYXQtY3JlZGl0Y2FyZC1yb3cge1xcblxcdHRleHQtYWxpZ246bGVmdDtcXG5cXHRwYWRkaW5nLWJvdHRvbToxZW07XFxufVxcblxcbi5JQk1DaGF0LWNyZWRpdGNhcmQtcm93IGlucHV0IHtcXG5cXHR3aWR0aDoxMDAlO1xcbn1cXG5cXG4uSUJNQ2hhdC1jcmVkaXRjYXJkLWNvbCB7XFxuXFx0ZGlzcGxheTppbmxpbmUtYmxvY2s7XFxufVxcblxcbi5JQk1DaGF0LWNyZWRpdGNhcmQtY29sIGlucHV0e1xcblxcdHRleHQtYWxpZ246Y2VudGVyO1xcblxcdHdpZHRoOjQwcHg7XFxufVxcblxcbi5JQk1DaGF0LWNyZWRpdGNhcmQtY29sOmxhc3QtY2hpbGQgaW5wdXQge1xcblxcdHdpZHRoOjYwcHg7XFxufVxcblxcbi5JQk1DaGF0LWNyZWRpdGNhcmQtYnV0dG9ucyB7XFxuXFx0aGVpZ2h0OjIuNWVtO1xcbn1cXG5cXG4uSUJNQ2hhdC1jcmVkaXRjYXJkLWJ1dHRvbnMgYnV0dG9uIHtcXG5cXHR3aWR0aDo5MHB4O1xcblxcdGZsb2F0OmxlZnQ7XFxufVxcblxcbi5JQk1DaGF0LWNyZWRpdGNhcmQtYnV0dG9ucyBidXR0b246bGFzdC1jaGlsZCB7XFxuXFx0ZmxvYXQ6cmlnaHQ7XFxufVxcblwiXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vcmF3LWxvYWRlciEuL3NyYy9sYXlvdXRzL2NjLXZhbGlkYXRvci9zdHlsZXMuY3NzXG4gKiogbW9kdWxlIGlkID0gNzBcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8qKlxuKiAoQykgQ29weXJpZ2h0IElCTSBDb3JwLiAyMDE2LiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuKlxuKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpOyB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdFxuKiBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuKlxuKiBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbipcbiogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZSBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZVxuKiBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzc1xuKiBvciBpbXBsaWVkLiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kIGxpbWl0YXRpb25zIHVuZGVyXG4qIHRoZSBMaWNlbnNlLlxuKi9cblxuLy9odHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9QYXltZW50X2NhcmRfbnVtYmVyXG5cbnZhciBzdGF0ZSA9IHtcblx0YWNjZXB0ZWRDYXJkczogW10sXG5cdGNhcmROdW1iZXI6ICcnLFxuXHRjYXJkVHlwZTogJydcbn07XG5cbnZhciBtZXNzYWdlcyA9IHtcblx0cmVxdWlyZWQ6ICdUaGlzIGZpZWxkIGlzIHJlcXVpcmVkLicsXG5cdGFjY2VwdGVkQ2FyZDogZnVuY3Rpb24oKSB7XG5cdFx0dmFyIHRleHQgPSAnV2UgYWNjZXB0ICc7XG5cdFx0Zm9yIChpID0gMDsgaSA8IHN0YXRlLmFjY2VwdGVkQ2FyZHMubGVuZ3RoOyBpKyspIHtcblx0XHRcdGlmIChpID4gMClcblx0XHRcdFx0dGV4dCArPSAnLCAnO1xuXHRcdFx0aWYgKGkgPT09IChzdGF0ZS5hY2NlcHRlZENhcmRzLmxlbmd0aCAtIDEpKVxuXHRcdFx0XHR0ZXh0ICs9ICcgYW5kICc7XG5cdFx0XHR0ZXh0ICs9IGNhcmREYXRhW3N0YXRlLmFjY2VwdGVkQ2FyZHNbaV1dLmh1bWFuO1xuXHRcdH1cblx0XHR0ZXh0ICs9ICcuIFBsZWFzZSB1c2UgYSB2YWxpZCBjYXJkLic7XG5cdFx0cmV0dXJuIHRleHQ7XG5cdH0sXG5cdGludmFsaWQ6ICdZb3VyIGNyZWRpdCBjYXJkIG51bWJlciBpcyBpbnZhbGlkLicsXG5cdGludmFsaWRFeHBpcmF0aW9uOiAnWW91ciBjcmVkaXQgY2FyZCBleHBpcmF0aW9uIGRhdGUgaXMgaW52YWxpZC4nLFxuXHRpbnZhbGlkQ3Z2OiAnWW91ciBDVlYgaXMgaW52YWxpZC4nXG59O1xuXG52YXIgY2FyZERhdGEgPSB7XG5cdFwidmlzYVwiOiB7XG5cdFx0aHVtYW46IFwiVmlzYVwiLFxuXHRcdHByZWZpeGVzOiBbNF0sXG5cdFx0bGVuZ3RoczogWzEzLCAxNiwgMTldXG5cdH0sXG5cdFwibWFzdGVyY2FyZFwiOiB7XG5cdFx0aHVtYW46IFwiTWFzdGVyQ2FyZFwiLFxuXHRcdHByZWZpeGVzOiBbNTEsIDUyLCA1MywgNTQsIDU1XSxcblx0XHRsZW5ndGhzOiBbMTZdXG5cdH0sXG5cdFwiYW1leFwiOiB7XG5cdFx0aHVtYW46IFwiQW1lcmljYW4gRXhwcmVzc1wiLFxuXHRcdHByZWZpeGVzOiBbMzQsIDM3XSxcblx0XHRsZW5ndGhzOiBbMTVdXG5cdH0sXG5cdFwiZGlzY292ZXJcIjoge1xuXHRcdGh1bWFuOiBcIkRpc2NvdmVyXCIsXG5cdFx0cHJlZml4ZXM6IFs2MDExLCA2NV0sXG5cdFx0bGVuZ3RoczogWzE2LCAxOV1cblx0fVxufTtcblxudmFyIGk7XG4vL01hc3RlckNhcmQgYWRkaW5nIHRoZXNlIG51bWJlcnMgaW4gMjAxN1xuZm9yIChpID0gMjIyMTsgaSA8PSAyNzIwOyBpKyspXG5cdGNhcmREYXRhLm1hc3RlcmNhcmQucHJlZml4ZXMucHVzaChpKTtcblxuZm9yIChpID0gNjIyMTI2OyBpIDw9IDYyMjkyNTsgaSsrKVxuXHRjYXJkRGF0YS5kaXNjb3Zlci5wcmVmaXhlcy5wdXNoKGkpO1xuXG5mb3IgKGkgPSA2NDQ7IGkgPD0gNjQ5OyBpKyspXG5cdGNhcmREYXRhLmRpc2NvdmVyLnByZWZpeGVzLnB1c2goaSk7XG5cbmZ1bmN0aW9uIF9kZXRlY3RDYXJkKCkge1xuXHRmb3IgKHZhciBpID0gMDsgaSA8IHN0YXRlLmFjY2VwdGVkQ2FyZHMubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgZGF0YSA9IGNhcmREYXRhW3N0YXRlLmFjY2VwdGVkQ2FyZHNbaV1dO1xuXHRcdGZvciAodmFyIGogPSAwOyBqIDwgZGF0YS5wcmVmaXhlcy5sZW5ndGg7IGorKykge1xuXHRcdFx0dmFyIHggPSBkYXRhLnByZWZpeGVzW2pdLnRvU3RyaW5nKCk7XG5cdFx0XHRpZiAoc3RhdGUuY2FyZE51bWJlci5zdWJzdHJpbmcoMCwgeC5sZW5ndGgpID09PSB4KSB7XG5cdFx0XHRcdHN0YXRlLmNhcmRUeXBlID0gc3RhdGUuYWNjZXB0ZWRDYXJkc1tpXTtcblx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cdHJldHVybiBmYWxzZTtcbn1cblxuZnVuY3Rpb24gX2NoZWNrS3VobigpIHtcblx0dmFyIGNoZWNrc3VtID0gMDsgLy8gcnVubmluZyBjaGVja3N1bSB0b3RhbFxuXHR2YXIgaiA9IDE7IC8vIHRha2VzIHZhbHVlIG9mIDEgb3IgMlxuXG5cdC8vIFByb2Nlc3MgZWFjaCBkaWdpdCBvbmUgYnkgb25lIHN0YXJ0aW5nIGF0IHRoZSByaWdodFxuXHR2YXIgY2FsYztcblx0Zm9yICh2YXIgaSA9IHN0YXRlLmNhcmROdW1iZXIubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcblx0XHQvLyBFeHRyYWN0IHRoZSBuZXh0IGRpZ2l0IGFuZCBtdWx0aXBseSBieSAxIG9yIDIgb24gYWx0ZXJuYXRpdmUgZGlnaXRzLlxuXHRcdGNhbGMgPSBOdW1iZXIoc3RhdGUuY2FyZE51bWJlci5jaGFyQXQoaSkpICogajtcblxuXHRcdC8vIElmIHRoZSByZXN1bHQgaXMgaW4gdHdvIGRpZ2l0cyBhZGQgMSB0byB0aGUgY2hlY2tzdW0gdG90YWxcblx0XHRpZiAoY2FsYyA+IDkpIHtcblx0XHRcdGNoZWNrc3VtID0gY2hlY2tzdW0gKyAxO1xuXHRcdFx0Y2FsYyA9IGNhbGMgLSAxMDtcblx0XHR9XG5cblx0XHQvLyBBZGQgdGhlIHVuaXRzIGVsZW1lbnQgdG8gdGhlIGNoZWNrc3VtIHRvdGFsXG5cdFx0Y2hlY2tzdW0gPSBjaGVja3N1bSArIGNhbGM7XG5cblx0XHQvLyBTd2l0Y2ggdGhlIHZhbHVlIG9mIGpcblx0XHRqID0gKGogPT0gMSkgPyAyIDogMTtcblx0fVxuXG5cdC8vIEFsbCBkb25lIC0gaWYgY2hlY2tzdW0gaXMgZGl2aXNpYmxlIGJ5IDEwLCBpdCBpcyBhIHZhbGlkIG1vZHVsdXMgMTAuXG5cdC8vIElmIG5vdCwgcmVwb3J0IGFuIGVycm9yLlxuXHRyZXR1cm4gKGNoZWNrc3VtICUgMTAgIT0gMCkgPyBmYWxzZSA6IHRydWU7XG59XG5cbmZ1bmN0aW9uIHZhbGlkYXRlQ2FyZChhY2NlcHRlZENhcmRzLCBjYXJkTnVtYmVyKSB7XG5cdHN0YXRlLmFjY2VwdGVkQ2FyZHMgPSBhY2NlcHRlZENhcmRzO1xuXHRzdGF0ZS5jYXJkTnVtYmVyID0gY2FyZE51bWJlci5yZXBsYWNlKC9cXEQvZywnJyk7IC8vc3RyaXAgZXh0cmEgY2hhcmFjdGVyc1xuXHRpZiAoY2FyZE51bWJlci5sZW5ndGggPT09IDApIHtcblx0XHRyZXR1cm4ge1xuXHRcdFx0XCJtZXNzYWdlXCI6IG1lc3NhZ2VzLnJlcXVpcmVkLFxuXHRcdFx0XCJ2YWxpZFwiOiBmYWxzZVxuXHRcdH07XG5cdH1cblx0aWYgKHN0YXRlLmNhcmROdW1iZXIubGVuZ3RoID09PSAwKSB7XG5cdFx0cmV0dXJuIHtcblx0XHRcdFwibWVzc2FnZVwiOiBtZXNzYWdlcy5yZXF1aXJlZCxcblx0XHRcdFwidmFsaWRcIjogZmFsc2Vcblx0XHR9O1xuXHR9XG5cdGlmIChfZGV0ZWN0Q2FyZCgpKSB7XG5cdFx0aWYgKHN0YXRlLmFjY2VwdGVkQ2FyZHMuaW5kZXhPZihzdGF0ZS5jYXJkVHlwZSkgPT09IC0xKSB7XG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRcIm1lc3NhZ2VcIjogbWVzc2FnZXMuYWNjZXB0ZWRDYXJkKCksXG5cdFx0XHRcdFwidmFsaWRcIjogZmFsc2Vcblx0XHRcdH07XG5cdFx0fVxuXHRcdGlmIChjYXJkRGF0YVtzdGF0ZS5jYXJkVHlwZV0ubGVuZ3Rocy5pbmRleE9mKHN0YXRlLmNhcmROdW1iZXIubGVuZ3RoKSA9PT0gLTEpIHtcblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdFwibWVzc2FnZVwiOiBtZXNzYWdlcy5pbnZhbGlkLFxuXHRcdFx0XHRcInZhbGlkXCI6IGZhbHNlXG5cdFx0XHR9O1xuXHRcdH1cblx0XHRpZiAoX2NoZWNrS3VobigpID09PSBmYWxzZSkge1xuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0XCJtZXNzYWdlXCI6IG1lc3NhZ2VzLmludmFsaWQsXG5cdFx0XHRcdFwidmFsaWRcIjogZmFsc2Vcblx0XHRcdH07XG5cdFx0fVxuXHR9IGVsc2Uge1xuXHRcdHJldHVybiB7XG5cdFx0XHRcIm1lc3NhZ2VcIjogbWVzc2FnZXMuaW52YWxpZCxcblx0XHRcdFwidmFsaWRcIjogZmFsc2Vcblx0XHR9O1xuXHR9XG5cblx0cmV0dXJuIHtcblx0XHRcInZhbGlkXCI6IHRydWVcblx0fTtcbn1cblxuZnVuY3Rpb24gdmFsaWRhdGVFeHAodXNlck0sIHVzZXJZKSB7XG5cdHZhciBkID0gbmV3IERhdGUoKTtcblx0dmFyIG1vbnRoID0gZC5nZXRNb250aCgpO1xuXHR2YXIgeWVhciA9IGQuZ2V0RnVsbFllYXIoKTtcblxuXHRpZiAodXNlck0ubGVuZ3RoID09PSAwIHx8IHVzZXJZLmxlbmd0aCA9PT0gMCB8fCB1c2VyTS5yZXBsYWNlKC9cXEQvZywnJykubGVuZ3RoID09PSAwIHx8IHVzZXJZLnJlcGxhY2UoL1xcRC9nLCcnKS5sZW5ndGggPT09IDApIHtcblx0XHRyZXR1cm4ge1xuXHRcdFx0XCJtZXNzYWdlXCI6IG1lc3NhZ2VzLnJlcXVpcmVkLFxuXHRcdFx0XCJ2YWxpZFwiOiBmYWxzZVxuXHRcdH07XG5cdH1cblxuXHR1c2VyTSA9IHBhcnNlSW50KHVzZXJNLCAxMCk7XG5cdHVzZXJZID0gcGFyc2VJbnQodXNlclksIDEwKTtcblxuXHRpZiAodXNlck0gPiAxMiB8fCB1c2VyTSA8IDEgfHwgKHVzZXJZID4geWVhciArIDIwKSB8fCAodXNlclkgPCB5ZWFyIHx8ICh1c2VyWSA9PT0geWVhciAmJiB1c2VyTSA8IG1vbnRoKSkpIHtcblx0XHRyZXR1cm4ge1xuXHRcdFx0XCJtZXNzYWdlXCI6IG1lc3NhZ2VzLmludmFsaWRFeHBpcmF0aW9uLFxuXHRcdFx0XCJ2YWxpZFwiOiBmYWxzZVxuXHRcdH07XG5cdH1cblx0cmV0dXJuIHtcblx0XHRcInZhbGlkXCI6IHRydWVcblx0fTtcbn1cblxuZnVuY3Rpb24gdmFsaWRhdGVDVlYoQ1ZWKSB7XG5cdGlmIChDVlYubGVuZ3RoID09PSAwKSB7XG5cdFx0cmV0dXJuIHtcblx0XHRcdFwibWVzc2FnZVwiOiBtZXNzYWdlcy5yZXF1aXJlZCxcblx0XHRcdFwidmFsaWRcIjogZmFsc2Vcblx0XHR9O1xuXHR9XG5cdGlmICghaXNOYU4oQ1ZWKSAmJiAoQ1ZWID4gOTk5OSB8fCBDVlYgPCAxMDApKSB7XG5cdFx0cmV0dXJuIHtcblx0XHRcdFwibWVzc2FnZVwiOiBtZXNzYWdlcy5pbnZhbGlkQ3Z2LFxuXHRcdFx0XCJ2YWxpZFwiOiBmYWxzZVxuXHRcdH07XG5cdH1cblx0cmV0dXJuIHtcblx0XHRcInZhbGlkXCI6IHRydWVcblx0fTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG5cdHZhbGlkYXRlQ2FyZDogdmFsaWRhdGVDYXJkLFxuXHR2YWxpZGF0ZUV4cDogdmFsaWRhdGVFeHAsXG5cdHZhbGlkYXRlQ1ZWOiB2YWxpZGF0ZUNWVixcblx0Y2FyZERhdGE6IGNhcmREYXRhXG59O1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9sYXlvdXRzL2NjLXZhbGlkYXRvci92YWxpZGF0aW9uLmpzXG4gKiogbW9kdWxlIGlkID0gNzFcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gXCI8ZGl2IGNsYXNzPVxcXCIke25zfS1jb250YWluZXJcXFwiPlxcblxcdDxkaXYgY2xhc3M9XFxcIiR7bnN9LXJvd3NcXFwiPlxcblxcdFxcdDxkaXYgY2xhc3M9XFxcIiR7bnN9LXJvd1xcXCI+XFxuXFx0XFx0XFx0PGxhYmVsPk5hbWUgb24gQ2FyZDwvbGFiZWw+XFxuXFx0XFx0XFx0PGlucHV0IHR5cGU9XFxcInRleHRcXFwiIGNsYXNzPVxcXCJJQk1DaGF0LWlucHV0LWNvbG9yc1xcXCIgbmFtZT1cXFwiY2NfZnVsbF9uYW1lXFxcIiAvPlxcblxcdFxcdFxcdDxkaXYgY2xhc3M9XFxcIklCTUNoYXQtdmFsaWRhdGlvbi1lcnJvciBJQk1DaGF0LWVycm9yLWNvbG9yc1xcXCIgZGF0YS12YWxpZGF0aW9uLWZvcj1cXFwiY2NfZnVsbF9uYW1lXFxcIiBkYXRhLXZhbGlkPVxcXCJ0cnVlXFxcIiBzdHlsZT1cXFwiZGlzcGxheTpub25lO1xcXCI+PC9kaXY+XFxuXFx0XFx0PC9kaXY+XFxuXFx0XFx0PGRpdiBjbGFzcz1cXFwiJHtuc30tcm93XFxcIj5cXG5cXHRcXHRcXHQ8bGFiZWw+Q3JlZGl0IENhcmQgTnVtYmVyPC9sYWJlbD5cXG5cXHRcXHRcXHQ8aW5wdXQgdHlwZT1cXFwidGV4dFxcXCIgY2xhc3M9XFxcIklCTUNoYXQtaW5wdXQtY29sb3JzXFxcIiBuYW1lPVxcXCJjY19udW1iZXJcXFwiIC8+XFxuXFx0XFx0XFx0PGRpdiBjbGFzcz1cXFwiSUJNQ2hhdC12YWxpZGF0aW9uLWVycm9yIElCTUNoYXQtZXJyb3ItY29sb3JzXFxcIiBkYXRhLXZhbGlkYXRpb24tZm9yPVxcXCJjY19udW1iZXJcXFwiIGRhdGEtdmFsaWQ9XFxcInRydWVcXFwiIHN0eWxlPVxcXCJkaXNwbGF5Om5vbmU7XFxcIj48L2Rpdj5cXG5cXHRcXHQ8L2Rpdj5cXG5cXHRcXHQ8ZGl2IGNsYXNzPVxcXCIke25zfS1yb3dcXFwiPlxcblxcdFxcdFxcdDxsYWJlbD5FeHBpcmF0aW9uIERhdGU8L2xhYmVsPlxcblxcdFxcdFxcdDxkaXYgY2xhc3M9XFxcIiR7bnN9LWNvbFxcXCI+XFxuXFx0XFx0XFx0XFx0PGlucHV0IGNsYXNzPVxcXCIke25zfS1kYXRlIElCTUNoYXQtaW5wdXQtY29sb3JzXFxcIiB0eXBlPVxcXCJ0ZXh0XFxcIiBuYW1lPVxcXCJjY19leHBfZGF0ZV9tb250aFxcXCIgcGxhY2Vob2xkZXI9XFxcIk1NXFxcIiBtYXhsZW5ndGg9XFxcIjJcXFwiIC8+XFxuXFx0XFx0XFx0XFx0PGlucHV0IGNsYXNzPVxcXCIke25zfS1kYXRlIElCTUNoYXQtaW5wdXQtY29sb3JzXFxcIiB0eXBlPVxcXCJ0ZXh0XFxcIiBuYW1lPVxcXCJjY19leHBfZGF0ZV95ZWFyXFxcIiBwbGFjZWhvbGRlcj1cXFwiWVlZWVxcXCIgbWF4bGVuZ3RoPVxcXCI0XFxcIiAvPlxcblxcdFxcdFxcdFxcdDxkaXYgY2xhc3M9XFxcIklCTUNoYXQtdmFsaWRhdGlvbi1lcnJvciBJQk1DaGF0LWVycm9yLWNvbG9yc1xcXCIgZGF0YS12YWxpZGF0aW9uLWZvcj1cXFwiY2NfZXhwX2RhdGVcXFwiIGRhdGEtdmFsaWQ9XFxcInRydWVcXFwiIHN0eWxlPVxcXCJkaXNwbGF5Om5vbmU7XFxcIj48L2Rpdj5cXG5cXHRcXHRcXHQ8L2Rpdj5cXG5cXHRcXHQ8L2Rpdj5cXG5cXHRcXHQ8ZGl2IGNsYXNzPVxcXCIke25zfS1yb3dcXFwiPlxcblxcdFxcdFxcdDxsYWJlbD5DVlY8L2xhYmVsPlxcblxcdFxcdFxcdDxkaXYgY2xhc3M9XFxcIiR7bnN9LWNvbFxcXCI+XFxuXFx0XFx0XFx0XFx0PGlucHV0IGNsYXNzPVxcXCIke25zfS1jdnYgSUJNQ2hhdC1pbnB1dC1jb2xvcnNcXFwiIHR5cGU9XFxcInRleHRcXFwiIG5hbWU9XFxcImNjX2NvZGVcXFwiIC8+XFxuXFx0XFx0XFx0XFx0PGRpdiBjbGFzcz1cXFwiSUJNQ2hhdC12YWxpZGF0aW9uLWVycm9yIElCTUNoYXQtZXJyb3ItY29sb3JzXFxcIiBkYXRhLXZhbGlkYXRpb24tZm9yPVxcXCJjY19jb2RlXFxcIiBkYXRhLXZhbGlkPVxcXCJ0cnVlXFxcIiBzdHlsZT1cXFwiZGlzcGxheTpub25lO1xcXCI+PC9kaXY+XFxuXFx0XFx0XFx0PC9kaXY+XFxuXFx0XFx0PC9kaXY+XFxuXFx0XFx0PGRpdiBjbGFzcz1cXFwiJHtuc30tcm93ICR7bnN9LWJ1dHRvbnNcXFwiPlxcblxcdFxcdFxcdDxidXR0b24gY2xhc3M9XFxcIiR7bnN9LWNhbmNlbCBJQk1DaGF0LXNlY29uZGFyeS1jb2xvcnNcXFwiPkNhbmNlbDwvYnV0dG9uPlxcblxcdFxcdFxcdDxidXR0b24gY2xhc3M9XFxcIiR7bnN9LWNvbnRpbnVlIElCTUNoYXQtaW5wdXQtY29sb3JzXFxcIj5Db250aW51ZTwvYnV0dG9uPlxcblxcdFxcdDwvZGl2PlxcblxcdDwvZGl2PlxcbjwvZGl2PlxcblwiXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9sYXlvdXRzL2NjLXZhbGlkYXRvci90ZW1wbGF0ZXMvYmFzZS5odG1sXG4gKiogbW9kdWxlIGlkID0gNzJcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8qKlxuKiAoQykgQ29weXJpZ2h0IElCTSBDb3JwLiAyMDE2LiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuKlxuKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpOyB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdFxuKiBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuKlxuKiBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbipcbiogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZSBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZVxuKiBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzc1xuKiBvciBpbXBsaWVkLiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kIGxpbWl0YXRpb25zIHVuZGVyXG4qIHRoZSBMaWNlbnNlLlxuKi9cblxucmVxdWlyZSgnLi9zdHlsZXMuY3NzJyk7XG5cbnZhciBldmVudHMgPSByZXF1aXJlKCcuLi8uLi9ldmVudHMnKTtcbnZhciBlcnJvcnMgPSBbXTtcbnZhciBucyA9ICdJQk1DaGF0LWVycm9yJztcblxudmFyIGVycm9yTGF5b3V0ID0ge1xuXHRpbml0OiBmdW5jdGlvbigpIHtcblx0XHRldmVudHMuc3Vic2NyaWJlKCdsYXlvdXQ6ZXJyb3InLCBmdW5jdGlvbihkYXRhKSB7XG5cdFx0XHR2YXIgZXJyb3IgPSBuZXcgRXJyb3IoZGF0YSk7XG5cdFx0XHRlcnJvcnNbZGF0YS51dWlkXSA9IGVycm9yO1xuXHRcdH0pO1xuXHR9XG59O1xuXG52YXIgdGVtcGxhdGVzID0ge1xuXHRiYXNlOiByZXF1aXJlKCcuL3RlbXBsYXRlcy9iYXNlLmh0bWwnKVxufTtcblxuZnVuY3Rpb24gRXJyb3IoZGF0YSkge1xuXHR0aGlzLmluaXQoZGF0YSk7XG59XG5cbkVycm9yLnByb3RvdHlwZS5pbml0ID0gZnVuY3Rpb24oZGF0YSkge1xuXHR0aGlzLm1lc3NhZ2UgPSBkYXRhLm1lc3NhZ2UubGF5b3V0Lm1lc3NhZ2U7XG5cdHRoaXMudXVpZCA9IGRhdGEudXVpZDtcblx0dGhpcy5wYXJlbnRFbGVtZW50ID0gZGF0YS5lbGVtZW50O1xuXHR0aGlzLmxheW91dEVsZW1lbnQgPSBkYXRhLmxheW91dEVsZW1lbnQ7XG5cdHRoaXMubGF5b3V0RWxlbWVudC5pbm5lckhUTUwgPSB0ZW1wbGF0ZXMuYmFzZTtcblx0dGhpcy5sYXlvdXRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy4nICsgbnMpLnRleHRDb250ZW50ID0gdGhpcy5tZXNzYWdlO1xufTtcblxuXG5tb2R1bGUuZXhwb3J0cyA9IGVycm9yTGF5b3V0O1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9sYXlvdXRzL2Vycm9yL2luZGV4LmpzXG4gKiogbW9kdWxlIGlkID0gNzNcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gXCIuSUJNQ2hhdC1lcnJvciB7XFxuXFx0cGFkZGluZzogMC41ZW0gMWVtIDAuNWVtIDFlbTtcXG59XFxuXCJcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9yYXctbG9hZGVyIS4vc3JjL2xheW91dHMvZXJyb3Ivc3R5bGVzLmNzc1xuICoqIG1vZHVsZSBpZCA9IDc1XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGRpdiBjbGFzcz1cXFwiSUJNQ2hhdC1lcnJvciBJQk1DaGF0LWVycm9yLWNvbG9yc1xcXCI+PC9kaXY+XFxuXCJcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2xheW91dHMvZXJyb3IvdGVtcGxhdGVzL2Jhc2UuaHRtbFxuICoqIG1vZHVsZSBpZCA9IDc2XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvKipcbiogKEMpIENvcHlyaWdodCBJQk0gQ29ycC4gMjAxNi4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbipcbiogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTsgeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHRcbiogaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbipcbiogaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4qXG4qIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmUgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2VcbiogaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Ncbiogb3IgaW1wbGllZC4gU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZCBsaW1pdGF0aW9ucyB1bmRlclxuKiB0aGUgTGljZW5zZS5cbiovXG5cbnZhciBzdGFydCA9IHJlcXVpcmUoJy4vc3RhcnQnKTtcbnZhciByZXNpemUgPSByZXF1aXJlKCcuL3Jlc2l6ZScpO1xudmFyIHJlY2VpdmUgPSByZXF1aXJlKCcuL3JlY2VpdmUnKTtcbnZhciBzZW5kID0gcmVxdWlyZSgnLi9zZW5kJyk7XG52YXIgc2VuZE1vY2sgPSByZXF1aXJlKCcuL3NlbmQtbW9jaycpO1xudmFyIHNlbmRJbnB1dE1lc3NhZ2UgPSByZXF1aXJlKCcuL3NlbmQtaW5wdXQtbWVzc2FnZScpO1xudmFyIGlucHV0ID0gcmVxdWlyZSgnLi9pbnB1dCcpO1xudmFyIGVycm9yID0gcmVxdWlyZSgnLi9lcnJvcicpO1xudmFyIHBsYXliYWNrID0gcmVxdWlyZSgnLi9wbGF5YmFjaycpO1xudmFyIHNjcm9sbFRvQm90dG9tID0gcmVxdWlyZSgnLi9zY3JvbGwtdG8tYm90dG9tJyk7XG52YXIgdHJ5SXQgPSByZXF1aXJlKCcuL3RyeS1pdCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0cmVzaXplOiByZXNpemUsXG5cdHN0YXJ0OiBzdGFydCxcblx0c2VuZDogc2VuZCxcblx0c2VuZE1vY2s6IHNlbmRNb2NrLFxuXHRyZWNlaXZlOiByZWNlaXZlLFxuXHRpbnB1dDogaW5wdXQsXG5cdGVycm9yOiBlcnJvcixcblx0c2Nyb2xsVG9Cb3R0b206IHNjcm9sbFRvQm90dG9tLFxuXHRzZW5kSW5wdXRNZXNzYWdlOiBzZW5kSW5wdXRNZXNzYWdlLFxuXHRwbGF5YmFjazogcGxheWJhY2ssXG5cdHRyeUl0OiB0cnlJdFxufTtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvZXZlbnRzL2hhbmRsZXJzL2luZGV4LmpzXG4gKiogbW9kdWxlIGlkID0gNzdcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8qKlxuKiAoQykgQ29weXJpZ2h0IElCTSBDb3JwLiAyMDE2LiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuKlxuKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpOyB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdFxuKiBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuKlxuKiBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbipcbiogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZSBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZVxuKiBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzc1xuKiBvciBpbXBsaWVkLiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kIGxpbWl0YXRpb25zIHVuZGVyXG4qIHRoZSBMaWNlbnNlLlxuKi9cblxudmFyIHN0YXRlID0gcmVxdWlyZSgnLi4vLi4vc3RhdGUnKTtcbnZhciB1dGlscyA9IHJlcXVpcmUoJy4uLy4uL3V0aWxzJyk7XG52YXIgZXZlbnRzID0gcmVxdWlyZSgnLi4vLi4vZXZlbnRzJyk7XG52YXIgdGVtcGxhdGVzID0gcmVxdWlyZSgnLi4vLi4vdGVtcGxhdGVzJyk7XG5cbmZ1bmN0aW9uIHN0YXJ0KGRhdGEpIHtcblx0dmFyIGN1cnJlbnQ7XG5cdHN0YXRlLnNldFN0YXRlKGRhdGEpO1xuXHRjdXJyZW50ID0gc3RhdGUuZ2V0U3RhdGUoKTtcblx0dXRpbHMuYXR0YWNoU3R5bGVzKCk7XG5cdGN1cnJlbnQucm9vdC5jbGFzc05hbWUgKz0gXCIgY2hhdElELVwiICsgY3VycmVudC5jaGF0SUQ7XG5cdGN1cnJlbnQucm9vdC5pbm5lckhUTUwgPSB0ZW1wbGF0ZXMuc3RhcnQ7XG5cdHZhciBvdXRlckNvbnRhaW5lciA9IGN1cnJlbnQucm9vdC5xdWVyeVNlbGVjdG9yKCcuSUJNQ2hhdC1vdXRlci1jb250YWluZXInKTtcblx0dmFyIGNoYXRCb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblx0Y2hhdEJveC5jbGFzc0xpc3QuYWRkKCdJQk1DaGF0LWlucHV0LWNvbnRhaW5lcicpO1xuXHRjaGF0Qm94LmNsYXNzTGlzdC5hZGQoJ0lCTUNoYXQtaW5wdXQtY29udGFpbmVyLXRoZW1lJyk7XG5cdGNoYXRCb3guaW5uZXJIVE1MID0gdGVtcGxhdGVzLmlucHV0O1xuXHRvdXRlckNvbnRhaW5lci5hcHBlbmRDaGlsZChjaGF0Qm94KTtcblx0dmFyIGVsZW1lbnRzID0ge1xuXHRcdGNvbnRhaW5lcjogY3VycmVudC5yb290LnF1ZXJ5U2VsZWN0b3IoJy5JQk1DaGF0LWNoYXQtY29udGFpbmVyJyksXG5cdFx0Y2hhdEhvbGRlcjogY3VycmVudC5yb290LnF1ZXJ5U2VsZWN0b3IoJy5JQk1DaGF0LW1lc3NhZ2VzJyksXG5cdFx0aW5uZXJDb250YWluZXI6IGN1cnJlbnQucm9vdC5xdWVyeVNlbGVjdG9yKCcuSUJNQ2hhdC1pbm5lci1jb250YWluZXInKVxuXHR9O1xuXHQvL1RPRE86IHJlbW92ZSBpZiBjb25kaXRpb25hbCBhZnRlciBEYXNoYm9hcmQgaW1wbGVtZW50cyBuZXcgcGxheWJhY2tcblx0aWYgKGN1cnJlbnQucGxheWJhY2sgIT09IHRydWUpIHtcblx0XHRlbGVtZW50cy5pbnB1dEhvbGRlciA9IGN1cnJlbnQucm9vdC5xdWVyeVNlbGVjdG9yKCcuSUJNQ2hhdC1pbnB1dC1jb250YWluZXInKTtcblx0XHRlbGVtZW50cy5pbnB1dCA9IGN1cnJlbnQucm9vdC5xdWVyeVNlbGVjdG9yKCcuSUJNQ2hhdC1jaGF0LXRleHRib3gnKTtcblx0XHRlbGVtZW50cy5mb3JtID0gY3VycmVudC5yb290LnF1ZXJ5U2VsZWN0b3IoJy5JQk1DaGF0LWlucHV0LWZvcm0nKTtcblx0XHRlbGVtZW50cy5sb2FkZXIgPSBjdXJyZW50LnJvb3QucXVlcnlTZWxlY3RvcignLklCTUNoYXQtaW5wdXQtbG9hZGluZycpO1xuXG5cdFx0ZWxlbWVudHMuZm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCBmdW5jdGlvbihlKSB7XG5cdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0fSk7XG5cblx0XHRlbGVtZW50cy5pbnB1dC5hZGRFdmVudExpc3RlbmVyKCdrZXlwcmVzcycsIGZ1bmN0aW9uKGUpIHtcblx0XHRcdGlmIChlLmtleUNvZGUgPT09IDEzKVxuXHRcdFx0XHRldmVudHMucHVibGlzaCgnc2VuZC1pbnB1dC1tZXNzYWdlJyk7XG5cdFx0fSk7XG5cblx0XHRlbGVtZW50cy5pbnB1dC5hZGRFdmVudExpc3RlbmVyKCdmb2N1cycsIGZ1bmN0aW9uKCkge1xuXHRcdFx0ZXZlbnRzLnB1Ymxpc2goJ3Jlc2l6ZScpO1xuXHRcdH0pO1xuXG5cdFx0ZWxlbWVudHMuaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignYmx1cicsIGZ1bmN0aW9uKCkge1xuXHRcdFx0ZXZlbnRzLnB1Ymxpc2goJ3Jlc2l6ZScpO1xuXHRcdH0pO1xuXHR9XG5cblx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHV0aWxzLmRlYm91bmNlKGZ1bmN0aW9uKCkge1xuXHRcdGV2ZW50cy5wdWJsaXNoKCdyZXNpemUnKTtcblx0fSwgMTAwMCkpO1xuXG5cdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdvcmllbnRhdGlvbmNoYW5nZScsIGZ1bmN0aW9uKCkge1xuXHRcdGV2ZW50cy5wdWJsaXNoKCdyZXNpemUnKTtcblx0fSk7XG5cblx0c3RhdGUuc2V0U3RhdGUoZWxlbWVudHMpO1xuXHRldmVudHMucHVibGlzaCgncmVzaXplJyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3RhcnQ7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2V2ZW50cy9oYW5kbGVycy9zdGFydC5qc1xuICoqIG1vZHVsZSBpZCA9IDc4XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IHtcblx0aW5wdXQ6IHJlcXVpcmUoJy4vaW5wdXQuaHRtbCcpLFxuXHRyZWNlaXZlOiByZXF1aXJlKCcuL3JlY2VpdmUuaHRtbCcpLFxuXHRzZW5kOiByZXF1aXJlKCcuL3NlbmQuaHRtbCcpLFxuXHRzdGFydDogcmVxdWlyZSgnLi9zdGFydC5odG1sJylcbn07XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL3RlbXBsYXRlcy9pbmRleC5qc1xuICoqIG1vZHVsZSBpZCA9IDc5XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGZvcm0gY2xhc3M9XFxcIklCTUNoYXQtaW5wdXQtZm9ybSBJQk1DaGF0LWlucHV0LWZvcm0tdGhlbWVcXFwiPlxcblxcdDxpbnB1dCBhcmlhLWxhYmVsbGVkYnk9XFxcIkVudGVyIGEgTWVzc2FnZVxcXCIgdHlwZT1cXFwidGV4dFxcXCIgY2xhc3M9XFxcIklCTUNoYXQtY2hhdC10ZXh0Ym94IElCTUNoYXQtY2hhdC10ZXh0Ym94LXRoZW1lXFxcIiBwbGFjZWhvbGRlcj1cXFwiRW50ZXIgbWVzc2FnZS4uLlxcXCIgLz5cXG5cXHQ8ZGl2IGNsYXNzPVxcXCJJQk1DaGF0LWlibS1zcGlubmVyLXN0YXJ0IElCTUNoYXQtaW5wdXQtbG9hZGluZyBJQk1DaGF0LWlucHV0LWxvYWRpbmctdGhlbWVcXFwiPlxcblxcdFxcdDxzdmcgY2xhc3M9XFxcIklCTUNoYXQtaWJtLXNwaW5uZXJcXFwiIHdpZHRoPTMyIGhlaWdodD0zMiB2aWV3Qm94PVxcXCItMTYgLTE2IDMyIDMyXFxcIj5cXG5cXHRcXHRcXHQ8Y2lyY2xlIGN4PTAgY3k9MCByPTggLz48L3N2Zz5cXG5cXHRcXHQ8L3N2Zz5cXG5cXHQ8L2Rpdj5cXG48L2Zvcm0+XFxuXCJcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL3RlbXBsYXRlcy9pbnB1dC5odG1sXG4gKiogbW9kdWxlIGlkID0gODBcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gXCI8ZGl2IGNsYXNzPVxcXCJJQk1DaGF0LXdhdHNvbi1tZXNzYWdlLWNvbnRhaW5lciBJQk1DaGF0LXdhdHNvbi1tZXNzYWdlLWNvbnRhaW5lci10aGVtZVxcXCI+PC9kaXY+XFxuXCJcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL3RlbXBsYXRlcy9yZWNlaXZlLmh0bWxcbiAqKiBtb2R1bGUgaWQgPSA4MVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxkaXYgaWQ9XFxcIiR7ZGF0YS51dWlkfVxcXCIgY2xhc3M9XFxcIklCTUNoYXQtdXNlci1tZXNzYWdlLWNvbnRhaW5lciBJQk1DaGF0LXVzZXItbWVzc2FnZS1jb250YWluZXItdGhlbWVcXFwiPlxcblxcdDxkaXYgY2xhc3M9XFxcIklCTUNoYXQtdXNlci1tZXNzYWdlIElCTUNoYXQtdXNlci1tZXNzYWdlLXRoZW1lIElCTUNoYXQtc2Vjb25kYXJ5LWNvbG9yc1xcXCI+PC9kaXY+XFxuPC9kaXY+XFxuXCJcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL3RlbXBsYXRlcy9zZW5kLmh0bWxcbiAqKiBtb2R1bGUgaWQgPSA4MlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxkaXYgY2xhc3M9XFxcIklCTUNoYXQtb3V0ZXItY29udGFpbmVyIElCTUNoYXQtb3V0ZXItY29udGFpbmVyLXRoZW1lIElCTUNoYXQtZGVmYXVsdC1jb2xvcnNcXFwiPlxcblxcdDxkaXYgY2xhc3M9XFxcIklCTUNoYXQtY2hhdC1jb250YWluZXIgSUJNQ2hhdC1jaGF0LWNvbnRhaW5lci10aGVtZVxcXCI+XFxuXFx0XFx0PGRpdiBjbGFzcz1cXFwiSUJNQ2hhdC1pbm5lci1jb250YWluZXIgSUJNQ2hhdC1pbm5lci1jb250YWluZXItdGhlbWVcXFwiPlxcblxcdFxcdFxcdDxkaXYgY2xhc3M9XFxcIklCTUNoYXQtbWVzc2FnZXMgSUJNQ2hhdC1tZXNzYWdlcy10aGVtZVxcXCI+PC9kaXY+XFxuXFx0XFx0PC9kaXY+XFxuXFx0PC9kaXY+XFxuPC9kaXY+XFxuXCJcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL3RlbXBsYXRlcy9zdGFydC5odG1sXG4gKiogbW9kdWxlIGlkID0gODNcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8qKlxuKiAoQykgQ29weXJpZ2h0IElCTSBDb3JwLiAyMDE2LiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuKlxuKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpOyB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdFxuKiBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuKlxuKiBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbipcbiogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZSBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZVxuKiBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzc1xuKiBvciBpbXBsaWVkLiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kIGxpbWl0YXRpb25zIHVuZGVyXG4qIHRoZSBMaWNlbnNlLlxuKi9cblxudmFyIHN0YXRlID0gcmVxdWlyZSgnLi4vLi4vc3RhdGUnKTtcblxuZnVuY3Rpb24gcmVzaXplKCkge1xuXHRzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuXHRcdHZhciBjdXJyZW50ID0gc3RhdGUuZ2V0U3RhdGUoKTtcblx0XHRpZiAoY3VycmVudC5hY3RpdmUpIHtcblx0XHRcdGN1cnJlbnQuY2hhdEhvbGRlci5zdHlsZS5tYXhIZWlnaHQgPSAoY3VycmVudC5yb290LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmhlaWdodCAtIGN1cnJlbnQuaW5wdXRIb2xkZXIuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkuaGVpZ2h0KSArICdweCc7XG5cdFx0XHRjdXJyZW50LmNoYXRIb2xkZXIuc3R5bGUubWF4V2lkdGggPSAoKGN1cnJlbnQucm9vdC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS53aWR0aCA+IDI4OCkgPyBjdXJyZW50LnJvb3QuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkud2lkdGggOiAyODgpICsgJ3B4Jztcblx0XHR9XG5cdH0sIDMwMCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gcmVzaXplO1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9ldmVudHMvaGFuZGxlcnMvcmVzaXplLmpzXG4gKiogbW9kdWxlIGlkID0gODRcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8qKlxuKiAoQykgQ29weXJpZ2h0IElCTSBDb3JwLiAyMDE2LiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuKlxuKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpOyB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdFxuKiBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuKlxuKiBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbipcbiogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZSBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZVxuKiBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzc1xuKiBvciBpbXBsaWVkLiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kIGxpbWl0YXRpb25zIHVuZGVyXG4qIHRoZSBMaWNlbnNlLlxuKi9cblxudmFyIHN0YXRlID0gcmVxdWlyZSgnLi4vLi4vc3RhdGUnKTtcbnZhciBldmVudHMgPSByZXF1aXJlKCcuLi8uLi9ldmVudHMnKTtcbnZhciB1dGlscyA9IHJlcXVpcmUoJy4uLy4uL3V0aWxzJyk7XG52YXIgYXNzaWduID0gcmVxdWlyZSgnbG9kYXNoL2Fzc2lnbicpO1xudmFyIHRlbXBsYXRlcyA9IHJlcXVpcmUoJy4uLy4uL3RlbXBsYXRlcycpO1xuXG5mdW5jdGlvbiBfYWN0aW9ucyh0cnlJdCwgZGVidWcsIGRhdGEpIHtcblx0dmFyIG1zZyA9IGRhdGEubWVzc2FnZTtcblx0aWYgKG1zZyAmJiBtc2cuYWN0aW9uICYmIG1zZy5hY3Rpb24ubmFtZSkge1xuXHRcdHZhciBhY3Rpb24gPSAnYWN0aW9uOicgKyBtc2cuYWN0aW9uLm5hbWU7XG5cdFx0aWYgKGV2ZW50cy5oYXNTdWJzY3JpcHRpb24oYWN0aW9uKSkge1xuXHRcdFx0ZXZlbnRzLnB1Ymxpc2goYWN0aW9uLCBkYXRhLCBldmVudHMuY29tcGxldGVFdmVudCk7XG5cdFx0XHRpZiAoZGVidWcpXG5cdFx0XHRcdGNvbnNvbGUubG9nKCdDYWxsIHRvICcgKyBhY3Rpb24pO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRpZiAoZGVidWcpXG5cdFx0XHRcdGNvbnNvbGUud2FybignTm90aGluZyBpcyBzdWJzY3JpYmVkIHRvICcgKyBhY3Rpb24pO1xuXHRcdFx0aWYgKHRyeUl0KVxuXHRcdFx0XHRldmVudHMucHVibGlzaCgndHJ5LWl0LWFjdGlvbi1zdWJzY3JpcHRpb24nLCBhY3Rpb24pO1xuXHRcdH1cblx0fVxuXHRldmVudHMucHVibGlzaCgnZGlzYWJsZS1sb2FkaW5nJyk7XG5cdGV2ZW50cy5wdWJsaXNoKCdmb2N1cy1pbnB1dCcpO1xuXHRzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuXHRcdGV2ZW50cy5wdWJsaXNoKCdzY3JvbGwtdG8tYm90dG9tJyk7XG5cdH0sIDIwKTtcbn1cblxuZnVuY3Rpb24gX2xheW91dHModHJ5SXQsIGRlYnVnLCBkYXRhKSB7XG5cdHZhciBtc2cgPSBkYXRhLm1lc3NhZ2U7XG5cdGlmIChtc2cgJiYgbXNnLmxheW91dCAmJiBtc2cubGF5b3V0Lm5hbWUpIHtcblx0XHR2YXIgbGF5b3V0ID0gJ2xheW91dDonICsgbXNnLmxheW91dC5uYW1lO1xuXHRcdGlmIChldmVudHMuaGFzU3Vic2NyaXB0aW9uKGxheW91dCkpIHtcblx0XHRcdHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG5cdFx0XHRcdGV2ZW50cy5wdWJsaXNoKGxheW91dCwgZGF0YSk7XG5cdFx0XHRcdGlmIChkZWJ1Zylcblx0XHRcdFx0XHRjb25zb2xlLmxvZygnQ2FsbCB0byAnICsgbGF5b3V0KTtcblx0XHRcdH0sIDEwKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0aWYgKGRlYnVnKVxuXHRcdFx0XHRjb25zb2xlLndhcm4oJ05vdGhpbmcgaXMgc3Vic2NyaWJlZCB0byAnICsgbGF5b3V0KTtcblx0XHRcdGlmICh0cnlJdClcblx0XHRcdFx0ZXZlbnRzLnB1Ymxpc2goJ3RyeS1pdC1sYXlvdXQtc3Vic2NyaXB0aW9uJywgbGF5b3V0KTtcblx0XHR9XG5cdH1cbn1cblxuZnVuY3Rpb24gcmVjZWl2ZShkYXRhKSB7XG5cdHZhciBwYXJzZWQgPSAodHlwZW9mIGRhdGEgPT09ICdzdHJpbmcnKSA/IHsgbWVzc2FnZTogeyB0ZXh0OiBkYXRhIH0gfSA6IGRhdGE7XG5cdHZhciBjdXJyZW50ID0gc3RhdGUuZ2V0U3RhdGUoKTtcblx0c3RhdGUuc2V0U3RhdGUoe1xuXHRcdG1lc3NhZ2VzOiBbXS5jb25jYXQoY3VycmVudC5tZXNzYWdlcyB8fCBbXSwgcGFyc2VkKSxcblx0XHRoYXNFcnJvcjogZmFsc2Vcblx0fSk7XG5cdHZhciBtc2cgPSBwYXJzZWQubWVzc2FnZTtcblx0dmFyIG1zZ1RleHQgPSAobXNnICYmIG1zZy50ZXh0KSA/ICgoQXJyYXkuaXNBcnJheShtc2cudGV4dCkpID8gbXNnLnRleHQgOiBbbXNnLnRleHRdKSA6IFsnJ107XG5cdHZhciBjb250YWluZXJzID0gW107XG5cdHZhciBtZXNzYWdlcyA9IFtdO1xuXHR2YXIgbGF5b3V0cyA9IFtdO1xuXHR2YXIgZGF0YXMgPSBbXTtcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBtc2dUZXh0Lmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIGhvbGRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXHRcdHZhciBtc2dEYXRhID0gYXNzaWduKHt9LCBwYXJzZWQsIHsgdXVpZDogdXRpbHMuZ2V0VVVJRCgpIH0pO1xuXHRcdGhvbGRlci5jbGFzc0xpc3QuYWRkKG1zZ0RhdGEudXVpZCk7XG5cdFx0aG9sZGVyLmlubmVySFRNTCA9IHRlbXBsYXRlcy5yZWNlaXZlO1xuXHRcdGNvbnRhaW5lcnMucHVzaChob2xkZXIucXVlcnlTZWxlY3RvcignLklCTUNoYXQtd2F0c29uLW1lc3NhZ2UtY29udGFpbmVyJykpO1xuXHRcdG1lc3NhZ2VzLnB1c2goZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JykpO1xuXHRcdGxheW91dHMucHVzaChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSk7XG5cdFx0bGF5b3V0c1tpXS5jbGFzc0xpc3QuYWRkKCdJQk1DaGF0LXdhdHNvbi1sYXlvdXQnKTtcblx0XHRpZiAobXNnVGV4dFtpXSB8fCAobXNnICYmIG1zZy5sYXlvdXQgJiYgbXNnLmxheW91dC5uYW1lICYmIGkgPT09IChtc2dUZXh0Lmxlbmd0aCAtIDEpKSkge1xuXHRcdFx0bWVzc2FnZXNbaV0uY2xhc3NMaXN0LmFkZCgnSUJNQ2hhdC13YXRzb24tbWVzc2FnZScpO1xuXHRcdFx0bWVzc2FnZXNbaV0uY2xhc3NMaXN0LmFkZCgnSUJNQ2hhdC13YXRzb24tbWVzc2FnZS10aGVtZScpO1xuXHRcdFx0dXRpbHMud3JpdGVNZXNzYWdlKG1lc3NhZ2VzW2ldLCBtc2dUZXh0W2ldKTtcblx0XHRcdGN1cnJlbnQuY2hhdEhvbGRlci5hcHBlbmRDaGlsZChob2xkZXIpO1xuXHRcdH1cblx0XHRjb250YWluZXJzW2ldLmFwcGVuZENoaWxkKG1lc3NhZ2VzW2ldKTtcblx0XHRjb250YWluZXJzW2ldLmFwcGVuZENoaWxkKGxheW91dHNbaV0pO1xuXHRcdG1zZ0RhdGEuZWxlbWVudCA9IGNvbnRhaW5lcnNbaV07XG5cdFx0bXNnRGF0YS5sYXlvdXRFbGVtZW50ID0gbGF5b3V0c1tpXTtcblx0XHRtc2dEYXRhLm1zZ0VsZW1lbnQgPSBtZXNzYWdlc1tpXTtcblx0XHRkYXRhcy5wdXNoKG1zZ0RhdGEpO1xuXHRcdGlmIChtc2cgJiYgbXNnLmxheW91dCAmJiAoKG1zZy5sYXlvdXQuaW5kZXggIT09IHVuZGVmaW5lZCAmJiBtc2cubGF5b3V0LmluZGV4ID09IGkpIHx8KG1zZy5sYXlvdXQuaW5kZXggPT09IHVuZGVmaW5lZCAmJiBpID09IChtc2dUZXh0Lmxlbmd0aCAtIDEpKSkpXG5cdFx0XHRfbGF5b3V0cyhjdXJyZW50LnRyeUl0LCBjdXJyZW50LkRFQlVHLCBkYXRhc1tpXSk7XG5cdFx0aWYgKGkgPT09IChtc2dUZXh0Lmxlbmd0aCAtIDEpKVxuXHRcdFx0X2FjdGlvbnMoY3VycmVudC50cnlJdCwgY3VycmVudC5ERUJVRywgZGF0YXNbaV0pO1xuXHR9XG5cbn1cblxubW9kdWxlLmV4cG9ydHMgPSByZWNlaXZlO1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9ldmVudHMvaGFuZGxlcnMvcmVjZWl2ZS5qc1xuICoqIG1vZHVsZSBpZCA9IDg1XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvKipcbiogKEMpIENvcHlyaWdodCBJQk0gQ29ycC4gMjAxNi4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbipcbiogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTsgeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHRcbiogaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbipcbiogaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4qXG4qIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmUgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2VcbiogaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Ncbiogb3IgaW1wbGllZC4gU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZCBsaW1pdGF0aW9ucyB1bmRlclxuKiB0aGUgTGljZW5zZS5cbiovXG5cbnZhciBzdGF0ZSA9IHJlcXVpcmUoJy4uLy4uL3N0YXRlJyk7XG52YXIgZXZlbnRzID0gcmVxdWlyZSgnLi4vLi4vZXZlbnRzJyk7XG52YXIgQm90U0RLID0gcmVxdWlyZSgnQHdhdHNvbi12aXJ0dWFsLWFnZW50L2NsaWVudC1zZGsvbGliL3dlYicpO1xudmFyIHV0aWxzID0gcmVxdWlyZSgnLi4vLi4vdXRpbHMnKTtcbnZhciBhc3NpZ24gPSByZXF1aXJlKCdsb2Rhc2gvYXNzaWduJyk7XG52YXIgdGVtcGxhdGVzID0gcmVxdWlyZSgnLi4vLi4vdGVtcGxhdGVzJyk7XG5cbmZ1bmN0aW9uIHNlbmQoZGF0YSkge1xuXHRpZiAoZGF0YSAmJiBkYXRhLnRleHQgJiYgZGF0YS50ZXh0Lmxlbmd0aCA+IDApIHtcblx0XHR2YXIgY3VycmVudCA9IHN0YXRlLmdldFN0YXRlKCk7XG5cdFx0YWRkVG9TZW5kUXVldWUoZGF0YSk7XG5cdFx0aWYgKCFjdXJyZW50LmluUHJvZ3Jlc3MpXG5cdFx0XHRhZ2VudFNlbmQoKTtcblx0fVxufVxuXG5mdW5jdGlvbiBhZGRUb1NlbmRRdWV1ZShkYXRhKSB7XG5cdHZhciBjdXJyZW50ID0gc3RhdGUuZ2V0U3RhdGUoKTtcblx0dmFyIHF1ZXVlID0gY3VycmVudC5zZW5kUXVldWUgfHwgW107XG5cdHZhciBuZXdRdWV1ZSA9IHF1ZXVlLnNsaWNlKDApO1xuXHRuZXdRdWV1ZS5wdXNoKGRhdGEpO1xuXHRzdGF0ZS5zZXRTdGF0ZSh7XG5cdFx0c2VuZFF1ZXVlOiBuZXdRdWV1ZVxuXHR9KTtcbn1cblxuZnVuY3Rpb24gYWx3YXlzKCkge1xuXHRldmVudHMucHVibGlzaCgnZGlzYWJsZS1sb2FkaW5nJyk7XG5cdHN0YXRlLnNldFN0YXRlKHtcblx0XHRpblByb2dyZXNzOiBmYWxzZVxuXHR9KTtcblx0aWYgKHN0YXRlLmdldFN0YXRlKCkuc2VuZFF1ZXVlLmxlbmd0aCA+IDApXG5cdFx0YWdlbnRTZW5kKCk7XG59XG5cbmZ1bmN0aW9uIHJlc29sdmUoKSB7XG5cdGFsd2F5cygpO1xufVxuXG5mdW5jdGlvbiByZWplY3QoZSkge1xuXHRldmVudHMucHVibGlzaCgnZXJyb3InLCBhcmd1bWVudHMpO1xuXHRjb25zb2xlLmVycm9yKGUuc3RhY2spO1xuXHRhbHdheXMoKTtcbn1cblxuZnVuY3Rpb24gc2VuZFRvQm90KGRhdGEpIHtcblx0dmFyIGN1cnJlbnQgPSBzdGF0ZS5nZXRTdGF0ZSgpO1xuXHRldmVudHMucHVibGlzaCgnZW5hYmxlLWxvYWRpbmcnKTtcblx0ZXZlbnRzLnB1Ymxpc2goJ3Njcm9sbC10by1ib3R0b20nKTtcblx0ZXZlbnRzLnB1Ymxpc2goJ2ZvY3VzLWlucHV0Jyk7XG5cdEJvdFNES1xuXHRcdC5zZW5kKCBjdXJyZW50LmJvdElELCBjdXJyZW50LmNoYXRJRCwgZGF0YS50ZXh0IClcblx0XHQudGhlbiggZnVuY3Rpb24ocmVzKSB7XG5cdFx0XHRldmVudHMucHVibGlzaCgncmVjZWl2ZScsIHJlcyk7XG5cdFx0XHRyZXNvbHZlKCk7XG5cdFx0fSlcblx0XHQuY2F0Y2goIGZ1bmN0aW9uKGUpIHtcblx0XHRcdHJlamVjdChlKTtcblx0XHR9KTtcbn1cblxuZnVuY3Rpb24gYWdlbnRTZW5kKCkge1xuXHR2YXIgY3VycmVudCA9IHN0YXRlLmdldFN0YXRlKCk7XG5cdHZhciBuZXdEYXRhID0gYXNzaWduKHt9LCBjdXJyZW50LnNlbmRRdWV1ZVswXSwgeyB1dWlkOiB1dGlscy5nZXRVVUlEKCkgfSk7XG5cdHZhciBtc2cgPSBuZXdEYXRhLnRleHQgfHwgJyc7XG5cdHN0YXRlLnNldFN0YXRlKHtcblx0XHRpblByb2dyZXNzOiB0cnVlLFxuXHRcdHNlbmRRdWV1ZTogY3VycmVudC5zZW5kUXVldWUuc2xpY2UoMSwgY3VycmVudC5zZW5kUXVldWUubGVuZ3RoKSxcblx0XHRtZXNzYWdlczogW10uY29uY2F0KGN1cnJlbnQubWVzc2FnZXMgfHwgW10sIG5ld0RhdGEpXG5cdH0pO1xuXHRjdXJyZW50LnJvb3QucXVlcnlTZWxlY3RvcignLklCTUNoYXQtY2hhdC10ZXh0Ym94JykudmFsdWUgPSAnJztcblx0aWYgKCFuZXdEYXRhLnNpbGVudCkge1xuXHRcdGN1cnJlbnQuY2hhdEhvbGRlci5pbm5lckhUTUwgKz0gdXRpbHMuY29tcGlsZSh0ZW1wbGF0ZXMuc2VuZCwgeyAnZGF0YS51dWlkJzogbmV3RGF0YS51dWlkIH0pO1xuXHRcdGN1cnJlbnQuY2hhdEhvbGRlci5xdWVyeVNlbGVjdG9yKCcjJyArIG5ld0RhdGEudXVpZCArICcgLklCTUNoYXQtdXNlci1tZXNzYWdlJykudGV4dENvbnRlbnQgPSBtc2c7XG5cdFx0ZXZlbnRzLnB1Ymxpc2goJ3Njcm9sbC10by1ib3R0b20nKTtcblx0fVxuXHRldmVudHMucHVibGlzaCgnZW5hYmxlLWxvYWRpbmcnKTtcblx0aWYgKGN1cnJlbnQuaGFuZGxlSW5wdXQuZGVmYXVsdClcblx0XHRzZW5kVG9Cb3QobmV3RGF0YSk7XG5cdGVsc2UgaWYgKGN1cnJlbnQuaGFuZGxlSW5wdXQuY29udGV4dClcblx0XHRjdXJyZW50LmhhbmRsZUlucHV0LmNhbGxiYWNrLmJpbmQoY3VycmVudC5oYW5kbGVJbnB1dC5jb250ZXh0LCBuZXdEYXRhLnRleHQsIHJlc29sdmUsIHJlamVjdCk7XG5cdGVsc2Vcblx0XHRjdXJyZW50LmhhbmRsZUlucHV0LmNhbGxiYWNrKG5ld0RhdGEudGV4dCwgcmVzb2x2ZSwgcmVqZWN0KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZW5kO1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9ldmVudHMvaGFuZGxlcnMvc2VuZC5qc1xuICoqIG1vZHVsZSBpZCA9IDg2XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvKipcbiogKEMpIENvcHlyaWdodCBJQk0gQ29ycC4gMjAxNi4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbipcbiogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTsgeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHRcbiogaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbipcbiogaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4qXG4qIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmUgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2VcbiogaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Ncbiogb3IgaW1wbGllZC4gU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZCBsaW1pdGF0aW9ucyB1bmRlclxuKiB0aGUgTGljZW5zZS5cbiovXG5cbnZhciBzdGF0ZSA9IHJlcXVpcmUoJy4uLy4uL3N0YXRlJyk7XG52YXIgZXZlbnRzID0gcmVxdWlyZSgnLi4vLi4vZXZlbnRzJyk7XG52YXIgdXRpbHMgPSByZXF1aXJlKCcuLi8uLi91dGlscycpO1xudmFyIGFzc2lnbiA9IHJlcXVpcmUoJ2xvZGFzaC9hc3NpZ24nKTtcbnZhciB0ZW1wbGF0ZXMgPSByZXF1aXJlKCcuLi8uLi90ZW1wbGF0ZXMnKTtcblxuZnVuY3Rpb24gc2VuZE1vY2soZGF0YSkge1xuXHRpZiAoZGF0YS50ZXh0ICYmIGRhdGEudGV4dC5sZW5ndGggPiAwKSB7XG5cdFx0dmFyIGN1cnJlbnQgPSBzdGF0ZS5nZXRTdGF0ZSgpO1xuXHRcdHZhciBuZXdEYXRhID0gYXNzaWduKHt9LCBkYXRhLCB7IHV1aWQ6IHV0aWxzLmdldFVVSUQoKSB9KTtcblx0XHRjdXJyZW50LmNoYXRIb2xkZXIuaW5uZXJIVE1MICs9IHV0aWxzLmNvbXBpbGUodGVtcGxhdGVzLnNlbmQsIHsgJ2RhdGEudXVpZCc6IG5ld0RhdGEudXVpZCB9KTtcblx0XHRjdXJyZW50LmNoYXRIb2xkZXIucXVlcnlTZWxlY3RvcignIycgKyBuZXdEYXRhLnV1aWQgKyAnIC5JQk1DaGF0LXVzZXItbWVzc2FnZScpLnRleHRDb250ZW50ID0gZGF0YS50ZXh0O1xuXHRcdGV2ZW50cy5wdWJsaXNoKCdzY3JvbGwtdG8tYm90dG9tJyk7XG5cdH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZW5kTW9jaztcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvZXZlbnRzL2hhbmRsZXJzL3NlbmQtbW9jay5qc1xuICoqIG1vZHVsZSBpZCA9IDg3XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvKipcbiogKEMpIENvcHlyaWdodCBJQk0gQ29ycC4gMjAxNi4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbipcbiogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTsgeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHRcbiogaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbipcbiogaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4qXG4qIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmUgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2VcbiogaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Ncbiogb3IgaW1wbGllZC4gU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZCBsaW1pdGF0aW9ucyB1bmRlclxuKiB0aGUgTGljZW5zZS5cbiovXG5cbnZhciBzdGF0ZSA9IHJlcXVpcmUoJy4uLy4uL3N0YXRlJyk7XG52YXIgZXZlbnRzID0gcmVxdWlyZSgnLi4vLi4vZXZlbnRzJyk7XG5cbmZ1bmN0aW9uIHNlbmRJbnB1dE1lc3NhZ2UoKSB7XG5cdHZhciBjdXJyZW50ID0gc3RhdGUuZ2V0U3RhdGUoKTtcblx0aWYgKCFjdXJyZW50LmluUHJvZ3Jlc3MgJiYgIWN1cnJlbnQuZGlzYWJsZUlucHV0KSB7XG5cdFx0dmFyIHRleHQgPSBjdXJyZW50LnJvb3QucXVlcnlTZWxlY3RvcignLklCTUNoYXQtY2hhdC10ZXh0Ym94JykudmFsdWU7XG5cdFx0ZXZlbnRzLnB1Ymxpc2goJ3NlbmQnLCB7XG5cdFx0XHR0ZXh0OiB0ZXh0XG5cdFx0fSk7XG5cdFx0dGV4dCA9ICcnO1xuXHR9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2VuZElucHV0TWVzc2FnZTtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvZXZlbnRzL2hhbmRsZXJzL3NlbmQtaW5wdXQtbWVzc2FnZS5qc1xuICoqIG1vZHVsZSBpZCA9IDg4XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvKipcbiogKEMpIENvcHlyaWdodCBJQk0gQ29ycC4gMjAxNi4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbipcbiogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTsgeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHRcbiogaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbipcbiogaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4qXG4qIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmUgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2VcbiogaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Ncbiogb3IgaW1wbGllZC4gU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZCBsaW1pdGF0aW9ucyB1bmRlclxuKiB0aGUgTGljZW5zZS5cbiovXG5cbnZhciBzdGF0ZSA9IHJlcXVpcmUoJy4uLy4uL3N0YXRlJyk7XG52YXIgdXRpbHMgPSByZXF1aXJlKCcuLi8uLi91dGlscycpO1xuXG5mdW5jdGlvbiBlbmFibGVJbnB1dCgpIHtcblx0dmFyIGN1cnJlbnQgPSBzdGF0ZS5nZXRTdGF0ZSgpO1xuXHR2YXIgZGlzYWJsZUlucHV0ID0gKGN1cnJlbnQuZGlzYWJsZUlucHV0KSA/IChjdXJyZW50LmRpc2FibGVJbnB1dCAtIDEpIDowO1xuXHRzdGF0ZS5zZXRTdGF0ZSh7IGRpc2FibGVJbnB1dDogZGlzYWJsZUlucHV0IH0pO1xuXHRpZiAoIWRpc2FibGVJbnB1dClcblx0XHRjdXJyZW50LmlucHV0LnJlbW92ZUF0dHJpYnV0ZSgnZGlzYWJsZWQnKTtcbn1cblxuZnVuY3Rpb24gZGlzYWJsZUlucHV0KCkge1xuXHR2YXIgY3VycmVudCA9IHN0YXRlLmdldFN0YXRlKCk7XG5cdHZhciBkaXNhYmxlSW5wdXQgPSAoY3VycmVudC5kaXNhYmxlSW5wdXQpID8gKGN1cnJlbnQuZGlzYWJsZUlucHV0ICsgMSkgOiAxO1xuXHRzdGF0ZS5zZXRTdGF0ZSh7IGRpc2FibGVJbnB1dDogZGlzYWJsZUlucHV0IH0pO1xuXHRjdXJyZW50LmlucHV0LnNldEF0dHJpYnV0ZSgnZGlzYWJsZWQnLCAnZGlzYWJsZWQnKTtcbn1cblxuZnVuY3Rpb24gZW5hYmxlTG9hZGluZ0lucHV0KCkge1xuXHR2YXIgY3VycmVudCA9IHN0YXRlLmdldFN0YXRlKCk7XG5cdHZhciBsb2FkaW5nID0gKGN1cnJlbnQubG9hZGluZykgPyAoY3VycmVudC5sb2FkaW5nICsgMSkgOiAxO1xuXHRzdGF0ZS5zZXRTdGF0ZSh7XG5cdFx0bG9hZGluZzogbG9hZGluZ1xuXHR9KTtcblx0dXRpbHMuc3Bpbm5lci5zaG93KGN1cnJlbnQubG9hZGVyKTtcbn1cblxuZnVuY3Rpb24gZGlzYWJsZUxvYWRpbmdJbnB1dCgpIHtcblx0dmFyIGN1cnJlbnQgPSBzdGF0ZS5nZXRTdGF0ZSgpO1xuXHR2YXIgbG9hZGluZyA9IChjdXJyZW50LmxvYWRpbmcpID8gKGN1cnJlbnQubG9hZGluZyAtIDEpIDogMDtcblx0c3RhdGUuc2V0U3RhdGUoe1xuXHRcdGxvYWRpbmc6IGxvYWRpbmdcblx0fSk7XG5cdGlmIChsb2FkaW5nID09PSAwKVxuXHRcdHV0aWxzLnNwaW5uZXIuaGlkZShjdXJyZW50LmxvYWRlcik7XG59XG5cbmZ1bmN0aW9uIGZvY3VzSW5wdXQoKSB7XG5cdHZhciBjdXJyZW50ID0gc3RhdGUuZ2V0U3RhdGUoKTtcblx0Y3VycmVudC5pbnB1dC5mb2N1cygpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0ZW5hYmxlSW5wdXQ6IGVuYWJsZUlucHV0LFxuXHRkaXNhYmxlSW5wdXQ6IGRpc2FibGVJbnB1dCxcblx0ZW5hYmxlTG9hZGluZ0lucHV0OiBlbmFibGVMb2FkaW5nSW5wdXQsXG5cdGRpc2FibGVMb2FkaW5nSW5wdXQ6IGRpc2FibGVMb2FkaW5nSW5wdXQsXG5cdGZvY3VzSW5wdXQ6IGZvY3VzSW5wdXRcbn07XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2V2ZW50cy9oYW5kbGVycy9pbnB1dC5qc1xuICoqIG1vZHVsZSBpZCA9IDg5XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvKipcbiogKEMpIENvcHlyaWdodCBJQk0gQ29ycC4gMjAxNi4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbipcbiogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTsgeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHRcbiogaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbipcbiogaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4qXG4qIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmUgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2VcbiogaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Ncbiogb3IgaW1wbGllZC4gU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZCBsaW1pdGF0aW9ucyB1bmRlclxuKiB0aGUgTGljZW5zZS5cbiovXG5cbnZhciBldmVudHMgPSByZXF1aXJlKCcuLi8uLi9ldmVudHMnKTtcbnZhciBzdGF0ZSA9IHJlcXVpcmUoJy4uLy4uL3N0YXRlJyk7XG5cbmZ1bmN0aW9uIGVycm9yKGVycikge1xuXHR2YXIgZGlzcGxheSA9IChlcnIgJiYgZXJyLnN0YWNrKSA/IGVyci5zdGFjayA6IGVycjtcblx0Y29uc29sZS5lcnJvcihkaXNwbGF5KTtcblx0dmFyIGN1cnJlbnQgPSBzdGF0ZS5nZXRTdGF0ZSgpO1xuXHR2YXIgdGV4dCA9ICdJIGFtIHNvcnJ5LCBJIGFtIGhhdmluZyBkaWZmaWN1bHRpZXMuJztcblx0aWYgKGN1cnJlbnQuaGFkRXJyb3IpXG5cdFx0dGV4dCArPSAnIFBsZWFzZSB0cnkgYWdhaW4gbGF0ZXIuJztcblx0ZWxzZVxuXHRcdHRleHQgKz0gJyBUbyBzcGVhayB3aXRoIGEgaHVtYW4gYWdlbnQsIHR5cGUgXCJhZ2VudFwiLic7XG5cdGlmIChlcnIuc3RhdHVzKVxuXHRcdHRleHQgKz0gJyAoZXJyb3I6ICcgKyBlcnIuc3RhdHVzICsgJyknO1xuXHRzdGF0ZS5zZXRTdGF0ZSh7XG5cdFx0aGFkRXJyb3I6IHRydWVcblx0fSk7XG5cdGV2ZW50cy5wdWJsaXNoKCdyZWNlaXZlJywgdGV4dCk7XG59XG5cbmZ1bmN0aW9uIHRyeUl0KGRhdGEpIHtcblx0ZXZlbnRzLnB1Ymxpc2goJ2xheW91dDplcnJvcicsIGRhdGEpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0ZGVmYXVsdDogZXJyb3IsXG5cdHRyeUl0OiB0cnlJdFxufTtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvZXZlbnRzL2hhbmRsZXJzL2Vycm9yLmpzXG4gKiogbW9kdWxlIGlkID0gOTBcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8qKlxuKiAoQykgQ29weXJpZ2h0IElCTSBDb3JwLiAyMDE2LiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuKlxuKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpOyB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdFxuKiBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuKlxuKiBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbipcbiogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZSBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZVxuKiBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzc1xuKiBvciBpbXBsaWVkLiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kIGxpbWl0YXRpb25zIHVuZGVyXG4qIHRoZSBMaWNlbnNlLlxuKi9cblxudmFyIHN0YXRlID0gcmVxdWlyZSgnLi4vLi4vc3RhdGUnKTtcbnZhciB1dGlscyA9IHJlcXVpcmUoJy4uLy4uL3V0aWxzJyk7XG52YXIgZXZlbnRzID0gcmVxdWlyZSgnLi4vLi4vZXZlbnRzJyk7XG52YXIgYXNzaWduID0gcmVxdWlyZSgnbG9kYXNoL2Fzc2lnbicpO1xudmFyIHRlbXBsYXRlcyA9IHJlcXVpcmUoJy4uLy4uL3RlbXBsYXRlcycpO1xuXG5mdW5jdGlvbiBzdGFydChjb25maWcpIHtcblx0dmFyIGN1cnJlbnQ7XG5cdHZhciBkYXRhID0ge307XG5cdGRhdGFbY29uZmlnLmNoYXRJRF0gPSBjb25maWc7XG5cdHN0YXRlLnNldFN0YXRlKGRhdGEpO1xuXHRjdXJyZW50ID0gc3RhdGUuZ2V0U3RhdGUoKVtjb25maWcuY2hhdElEXTtcblx0dXRpbHMuYXR0YWNoUGxheWJhY2tTdHlsZXMoY29uZmlnLmNoYXRJRCk7XG5cdGN1cnJlbnQucm9vdC5jbGFzc05hbWUgKz0gXCIgY2hhdElELVwiICsgY3VycmVudC5jaGF0SUQ7XG5cdGN1cnJlbnQucm9vdC5pbm5lckhUTUwgPSB0ZW1wbGF0ZXMuc3RhcnQ7XG5cdGN1cnJlbnQuY29udGFpbmVyID0gY3VycmVudC5yb290LnF1ZXJ5U2VsZWN0b3IoJy5JQk1DaGF0LWNoYXQtY29udGFpbmVyJyk7XG5cdGN1cnJlbnQuY2hhdEhvbGRlciA9IGN1cnJlbnQucm9vdC5xdWVyeVNlbGVjdG9yKCcuSUJNQ2hhdC1tZXNzYWdlcycpO1xuXHRjdXJyZW50LmlubmVyQ29udGFpbmVyID0gY3VycmVudC5yb290LnF1ZXJ5U2VsZWN0b3IoJy5JQk1DaGF0LWlubmVyLWNvbnRhaW5lcicpO1xuXHRkYXRhW2NvbmZpZy5jaGF0SURdID0gY3VycmVudDtcblx0c3RhdGUuc2V0U3RhdGUoZGF0YSk7XG5cdGN1cnJlbnQuY2hhdEhvbGRlci5zdHlsZS5wYWRkaW5nQm90dG9tID0gJzFlbSc7XG5cblx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHV0aWxzLmRlYm91bmNlKGZ1bmN0aW9uKCkge1xuXHRcdGV2ZW50cy5wdWJsaXNoKCdwbGF5YmFjay1yZXNpemUtJyArIGNvbmZpZy5jaGF0SUQsIGNvbmZpZy5jaGF0SUQpO1xuXHR9LCAxMDAwKSk7XG5cblx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ29yaWVudGF0aW9uY2hhbmdlJywgZnVuY3Rpb24oKSB7XG5cdFx0ZXZlbnRzLnB1Ymxpc2goJ3BsYXliYWNrLXJlc2l6ZS0nICsgY29uZmlnLmNoYXRJRCwgY29uZmlnLmNoYXRJRCk7XG5cdH0pO1xuXG5cblx0ZXZlbnRzLnB1Ymxpc2goJ3BsYXliYWNrLXJlc2l6ZS0nICsgY29uZmlnLmNoYXRJRCwgY29uZmlnLmNoYXRJRCk7XG59XG5cbmZ1bmN0aW9uIHNlbmQob2JqKSB7XG5cdHZhciBjaGF0SUQgPSBvYmouY2hhdElEO1xuXHR2YXIgZGF0YSA9IG9iai5kYXRhO1xuXHRjb25zb2xlLmxvZygnb2JqJywgb2JqKTtcblx0aWYgKGRhdGEudGV4dCAmJiBkYXRhLnRleHQubGVuZ3RoID4gMCkge1xuXHRcdHZhciBjdXJyZW50ID0gc3RhdGUuZ2V0U3RhdGUoKVtjaGF0SURdO1xuXHRcdGNvbnNvbGUubG9nKCdjdXJyZW50JywgY3VycmVudCk7XG5cdFx0dmFyIG5ld0RhdGEgPSBhc3NpZ24oe30sIGRhdGEsIHsgdXVpZDogdXRpbHMuZ2V0VVVJRCgpIH0pO1xuXHRcdGN1cnJlbnQuY2hhdEhvbGRlci5pbm5lckhUTUwgKz0gdXRpbHMuY29tcGlsZSh0ZW1wbGF0ZXMuc2VuZCwgeyAnZGF0YS51dWlkJzogbmV3RGF0YS51dWlkIH0pO1xuXHRcdGN1cnJlbnQuY2hhdEhvbGRlci5xdWVyeVNlbGVjdG9yKCcjJyArIG5ld0RhdGEudXVpZCArICcgLklCTUNoYXQtdXNlci1tZXNzYWdlJykudGV4dENvbnRlbnQgPSBkYXRhLnRleHQ7XG5cdFx0ZXZlbnRzLnB1Ymxpc2goJ3BsYXliYWNrLXNjcm9sbC10by1ib3R0b20tJyArIGNoYXRJRCwgY2hhdElEKTtcblx0fVxufVxuXG5mdW5jdGlvbiByZWNlaXZlKG9iaikge1xuXHR2YXIgY2hhdElEID0gb2JqLmNoYXRJRDtcblx0dmFyIGRhdGEgPSBvYmouZGF0YTtcblx0dmFyIGNoZWNrRGF0YSA9ICh0eXBlb2YgZGF0YSA9PT0gJ3N0cmluZycpID8geyBtZXNzYWdlOiB7IHRleHQ6IGRhdGEgfSB9IDogZGF0YTtcblx0dmFyIGN1cnJlbnQgPSBzdGF0ZS5nZXRTdGF0ZSgpW2NoYXRJRF07XG5cdGRhdGEgPSBhc3NpZ24oe30sIGNoZWNrRGF0YSwgeyB1dWlkOiB1dGlscy5nZXRVVUlEKCkgfSk7XG5cdHZhciBtc2cgPSAoZGF0YS5tZXNzYWdlICYmIGRhdGEubWVzc2FnZS50ZXh0KSA/ICgoQXJyYXkuaXNBcnJheShkYXRhLm1lc3NhZ2UudGV4dCkpID8gZGF0YS5tZXNzYWdlLnRleHQgOiBbZGF0YS5tZXNzYWdlLnRleHRdKSA6IFsnJ107XG5cdGlmIChtc2cubGVuZ3RoID09PSAwKVxuXHRcdG1zZyA9IFsnJ107XG5cdGZvciAodmFyIGkgPSAwOyBpIDwgbXNnLmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIGl0ZW07XG5cdFx0Y3VycmVudC5jaGF0SG9sZGVyLmlubmVySFRNTCArPSB1dGlscy5jb21waWxlKHRlbXBsYXRlcy5yZWNlaXZlLCB7ICdkYXRhLnV1aWQnOiBkYXRhLnV1aWQgfSk7XG5cdFx0aXRlbSA9IGN1cnJlbnQuY2hhdEhvbGRlci5xdWVyeVNlbGVjdG9yKCcuJyArIGRhdGEudXVpZCArICc6bGFzdC1jaGlsZCAuSUJNQ2hhdC13YXRzb24tbWVzc2FnZScpO1xuXHRcdHV0aWxzLndyaXRlTWVzc2FnZShpdGVtLCBtc2dbaV0pO1xuXHR9XG5cdGV2ZW50cy5wdWJsaXNoKCdwbGF5YmFjay1zY3JvbGwtdG8tYm90dG9tLScgKyBjaGF0SUQsIGNoYXRJRCk7XG59XG5cbmZ1bmN0aW9uIGNsZWFyKGNoYXRJRCkge1xuXHR2YXIgY3VycmVudCA9IHN0YXRlLmdldFN0YXRlKClbY2hhdElEXTtcblx0Y3VycmVudC5jaGF0SG9sZGVyLmlubmVySFRNTCA9ICcnO1xufVxuXG5mdW5jdGlvbiBkZXN0cm95KGNoYXRJRCkge1xuXHR2YXIgY3VycmVudCA9IHN0YXRlLmdldFN0YXRlKClbY2hhdElEXTtcblx0dmFyIG9iaiA9IHt9O1xuXHRvYmpbY2hhdElEXSA9IHVuZGVmaW5lZDtcblx0c3RhdGUuc2V0U3RhdGUob2JqKTtcblx0Y3VycmVudC5yb290LmlubmVySFRNTCA9IGN1cnJlbnQub3JpZ2luYWxDb250ZW50O1xufVxuXG5mdW5jdGlvbiBzY3JvbGxUb0JvdHRvbShjaGF0SUQpIHtcblx0dmFyIGN1cnJlbnQgPSBzdGF0ZS5nZXRTdGF0ZSgpW2NoYXRJRF07XG5cdGN1cnJlbnQuY2hhdEhvbGRlci5zY3JvbGxUb3AgPSBjdXJyZW50LmNoYXRIb2xkZXIuc2Nyb2xsSGVpZ2h0O1xufVxuXG5mdW5jdGlvbiByZXNpemUoY2hhdElEKSB7XG5cdHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG5cdFx0dmFyIGN1cnJlbnQgPSBzdGF0ZS5nZXRTdGF0ZSgpW2NoYXRJRF07XG5cdFx0aWYgKGN1cnJlbnQuYWN0aXZlKSB7XG5cdFx0XHRjdXJyZW50LmNoYXRIb2xkZXIuc3R5bGUubWF4SGVpZ2h0ID0gKGN1cnJlbnQucm9vdC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5oZWlnaHQgLSBjdXJyZW50LmlucHV0SG9sZGVyLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmhlaWdodCkgKyAncHgnO1xuXHRcdFx0Y3VycmVudC5jaGF0SG9sZGVyLnN0eWxlLm1heFdpZHRoID0gKChjdXJyZW50LnJvb3QuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkud2lkdGggPiAyODgpID8gY3VycmVudC5yb290LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLndpZHRoIDogMjg4KSArICdweCc7XG5cdFx0fVxuXHR9LCAzMDApO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0c3RhcnQ6IHN0YXJ0LFxuXHRzZW5kOiBzZW5kLFxuXHRyZWNlaXZlOiByZWNlaXZlLFxuXHRjbGVhcjogY2xlYXIsXG5cdGRlc3Ryb3k6IGRlc3Ryb3ksXG5cdHJlc2l6ZTogcmVzaXplLFxuXHRzY3JvbGxUb0JvdHRvbTogc2Nyb2xsVG9Cb3R0b21cbn07XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2V2ZW50cy9oYW5kbGVycy9wbGF5YmFjay5qc1xuICoqIG1vZHVsZSBpZCA9IDkxXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvKipcbiogKEMpIENvcHlyaWdodCBJQk0gQ29ycC4gMjAxNi4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbipcbiogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTsgeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHRcbiogaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbipcbiogaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4qXG4qIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmUgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2VcbiogaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Ncbiogb3IgaW1wbGllZC4gU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZCBsaW1pdGF0aW9ucyB1bmRlclxuKiB0aGUgTGljZW5zZS5cbiovXG5cbnZhciBzdGF0ZSA9IHJlcXVpcmUoJy4uLy4uL3N0YXRlJyk7XG5cbmZ1bmN0aW9uIHNjcm9sbFRvQm90dG9tKCkge1xuXHR2YXIgY3VycmVudCA9IHN0YXRlLmdldFN0YXRlKCk7XG5cdGN1cnJlbnQuY2hhdEhvbGRlci5zY3JvbGxUb3AgPSBjdXJyZW50LmNoYXRIb2xkZXIuc2Nyb2xsSGVpZ2h0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNjcm9sbFRvQm90dG9tO1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9ldmVudHMvaGFuZGxlcnMvc2Nyb2xsLXRvLWJvdHRvbS5qc1xuICoqIG1vZHVsZSBpZCA9IDkyXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvKipcbiogKEMpIENvcHlyaWdodCBJQk0gQ29ycC4gMjAxNi4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbipcbiogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTsgeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHRcbiogaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbipcbiogaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4qXG4qIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmUgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2VcbiogaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Ncbiogb3IgaW1wbGllZC4gU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZCBsaW1pdGF0aW9ucyB1bmRlclxuKiB0aGUgTGljZW5zZS5cbiovXG5cbnZhciBldmVudHMgPSByZXF1aXJlKCcuLi8uLi9ldmVudHMnKTtcblxuZnVuY3Rpb24gYWN0aW9uRXJyb3IoYWN0aW9uKSB7XG5cdGV2ZW50cy5wdWJsaXNoKCdyZWNlaXZlJywge1xuXHRcdG1lc3NhZ2U6IHtcblx0XHRcdGxheW91dDoge1xuXHRcdFx0XHRuYW1lOiAnZXJyb3InLFxuXHRcdFx0XHRtZXNzYWdlOiAnQSBzdWJzY3JpcHRpb24gd2FzIGNhbGxlZCB0byAnICsgYWN0aW9uICsgJy4gTm90aGluZyBpcyBzdWJzY3JpYmVkIHRvIHRoaXMgYWN0aW9uIGluIHRoZSBUcnktSXQgaW50ZXJmYWNlLiBUaGlzIGlzIHByb2JhYmx5IGR1ZSB0byB5b3UgdXNpbmcgYSBjdXN0b20gd29ya3NwYWNlLiBPbiB5b3VyIG93biBzaXRlLCB5b3Ugc2hvdWxkIGhhdmUgY29kZSB0byBoYW5kbGUgdGhpcyBhY3Rpb24uJ1xuXHRcdFx0fVxuXHRcdH1cblx0fSk7XG59XG5cbmZ1bmN0aW9uIGxheW91dEVycm9yKGxheW91dCkge1xuXHRldmVudHMucHVibGlzaCgncmVjZWl2ZScsIHtcblx0XHRtZXNzYWdlOiB7XG5cdFx0XHRsYXlvdXQ6IHtcblx0XHRcdFx0bmFtZTogJ2Vycm9yJyxcblx0XHRcdFx0bWVzc2FnZTogJ0Egc3Vic2NyaXB0aW9uIHdhcyBjYWxsZWQgdG8gJyArIGxheW91dCArICcuIE5vdGhpbmcgaXMgc3Vic2NyaWJlZCB0byB0aGlzIGxheW91dCBpbiB0aGUgVHJ5LUl0IGludGVyZmFjZS4gVGhpcyBpcyBwcm9iYWJseSBkdWUgdG8geW91IHVzaW5nIGEgY3VzdG9tIHdvcmtzcGFjZS4gT24geW91ciBvd24gc2l0ZSwgeW91IHNob3VsZCBoYXZlIGNvZGUgdG8gaGFuZGxlIHRoaXMgbGF5b3V0Lidcblx0XHRcdH1cblx0XHR9XG5cdH0pO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0YWN0aW9uRXJyb3I6IGFjdGlvbkVycm9yLFxuXHRsYXlvdXRFcnJvcjogbGF5b3V0RXJyb3Jcbn07XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2V2ZW50cy9oYW5kbGVycy90cnktaXQuanNcbiAqKiBtb2R1bGUgaWQgPSA5M1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLyoqXG4qIChDKSBDb3B5cmlnaHQgSUJNIENvcnAuIDIwMTYuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4qXG4qIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7IHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0XG4qIGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS4gWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4qXG4qIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuKlxuKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlXG4qIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzXG4qIG9yIGltcGxpZWQuIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmQgbGltaXRhdGlvbnMgdW5kZXJcbiogdGhlIExpY2Vuc2UuXG4qL1xuXG52YXIgZXZlbnRzID0gcmVxdWlyZSgnLi4vZXZlbnRzJyk7XG52YXIgZXZlbnRIYW5kbGVycyA9IHJlcXVpcmUoJy4uL2V2ZW50cy9oYW5kbGVycycpO1xudmFyIHV0aWxzID0gcmVxdWlyZSgnLi4vdXRpbHMnKTtcbnZhciBhc3NpZ24gPSByZXF1aXJlKCdsb2Rhc2gvYXNzaWduJyk7XG52YXIgZGVmYXVsdFN0eWxlcyA9IHJlcXVpcmUoJy4uL3N0eWxlcycpO1xuXG52YXIgZXZlbnRzQXJyYXkgPSB7fTtcblxuZnVuY3Rpb24gaW5pdChjb25maWcpIHtcblx0cmV0dXJuIG5ldyBQbGF5QmFjayhjb25maWcpO1xufVxuXG5mdW5jdGlvbiByZWdpc3RlckV2ZW50cyhjaGF0SUQpIHtcblx0ZXZlbnRzQXJyYXlbY2hhdElEXSA9IFtdO1xuXHRldmVudHNBcnJheVtjaGF0SURdLnB1c2goZXZlbnRzLnN1YnNjcmliZSgncGxheWJhY2stc3RhcnQtJyArIGNoYXRJRCwgZXZlbnRIYW5kbGVycy5wbGF5YmFjay5zdGFydCkpO1xuXHRldmVudHNBcnJheVtjaGF0SURdLnB1c2goZXZlbnRzLnN1YnNjcmliZSgncGxheWJhY2stcmVzaXplLScgKyBjaGF0SUQsIGV2ZW50SGFuZGxlcnMucGxheWJhY2sucmVzaXplKSk7XG5cdGV2ZW50c0FycmF5W2NoYXRJRF0ucHVzaChldmVudHMuc3Vic2NyaWJlKCdwbGF5YmFjay1zY3JvbGwtdG8tYm90dG9tLScgKyBjaGF0SUQsIGV2ZW50SGFuZGxlcnMucGxheWJhY2suc2Nyb2xsVG9Cb3R0b20pKTtcblx0ZXZlbnRzQXJyYXlbY2hhdElEXS5wdXNoKGV2ZW50cy5zdWJzY3JpYmUoJ3BsYXliYWNrLXJlY2VpdmUtJyArIGNoYXRJRCwgZXZlbnRIYW5kbGVycy5wbGF5YmFjay5yZWNlaXZlKSk7XG5cdGV2ZW50c0FycmF5W2NoYXRJRF0ucHVzaChldmVudHMuc3Vic2NyaWJlKCdwbGF5YmFjay1zZW5kLScgKyBjaGF0SUQsIGV2ZW50SGFuZGxlcnMucGxheWJhY2suc2VuZCkpO1xuXHRldmVudHNBcnJheVtjaGF0SURdLnB1c2goZXZlbnRzLnN1YnNjcmliZSgncGxheWJhY2stZGVzdHJveS0nICsgY2hhdElELCBldmVudEhhbmRsZXJzLnBsYXliYWNrLmRlc3Ryb3kpKTtcblx0ZXZlbnRzQXJyYXlbY2hhdElEXS5wdXNoKGV2ZW50cy5zdWJzY3JpYmUoJ3BsYXliYWNrLWNsZWFyLScgKyBjaGF0SUQsIGV2ZW50SGFuZGxlcnMucGxheWJhY2suY2xlYXIpKTtcbn1cblxuZnVuY3Rpb24gUGxheUJhY2soY29uZmlnKSB7XG5cdHZhciByb290ID0gKHR5cGVvZiBjb25maWcuZWwgPT09ICdzdHJpbmcnKSA/IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGNvbmZpZy5lbCkgOiBjb25maWcuZWw7XG5cdHRoaXMuY2hhdElEID0gdXRpbHMuZ2V0VVVJRCgpO1xuXHRyZWdpc3RlckV2ZW50cyh0aGlzLmNoYXRJRCk7XG5cdGV2ZW50cy5wdWJsaXNoKCdwbGF5YmFjay1zdGFydC0nICsgdGhpcy5jaGF0SUQsIHtcblx0XHRjaGF0SUQ6IHRoaXMuY2hhdElELFxuXHRcdHJvb3Q6ICh0eXBlb2YgY29uZmlnLmVsID09PSAnc3RyaW5nJykgPyBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChjb25maWcuZWwpIDogY29uZmlnLmVsLFxuXHRcdG1hcHNTZXJ2ZXI6IHByb2Nlc3MuZW52Lk1BUFNfU0VSVkVSIHx8ICdodHRwczovL2RwMS1pLXNlcnZlLW1hcHMubXlibHVlbWl4Lm5ldC8nLFxuXHRcdHN0eWxlczogYXNzaWduKHt9LCBkZWZhdWx0U3R5bGVzLCBjb25maWcuc3R5bGVzKSxcblx0XHRvcmlnaW5hbENvbnRlbnQ6IHJvb3QuaW5uZXJIVE1MXG5cdH0pO1xuXHR0aGlzLmNsZWFyID0gZnVuY3Rpb24oKSB7XG5cdFx0ZXZlbnRzLnB1Ymxpc2goJ3BsYXliYWNrLWNsZWFyLScgKyB0aGlzLmNoYXRJRCwgdGhpcy5jaGF0SUQpO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9O1xuXHR0aGlzLmRlc3Ryb3kgPSBmdW5jdGlvbigpIHtcblx0XHRldmVudHMucHVibGlzaCgncGxheWJhY2stY2xlYXItJyArIHRoaXMuY2hhdElELCB0aGlzLmNoYXRJRCk7XG5cdFx0ZXZlbnRzLnB1Ymxpc2goJ3BsYXliYWNrLWRlc3Ryb3ktJyArIHRoaXMuY2hhdElELCB0aGlzLmNoYXRJRCk7XG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBldmVudHNBcnJheVt0aGlzLmNoYXRJRF0ubGVuZ3RoOyBpKyspXG5cdFx0XHRldmVudHNBcnJheVt0aGlzLmNoYXRJRF1baV0ucmVtb3ZlKCk7XG5cdFx0ZGVsZXRlIGV2ZW50c0FycmF5W3RoaXMuY2hhdElEXTtcblx0XHRkZWxldGUgdGhpcy5jbGVhcjtcblx0XHRkZWxldGUgdGhpcy5zZW5kO1xuXHRcdGRlbGV0ZSB0aGlzLnJlY2VpdmU7XG5cdFx0ZGVsZXRlIHRoaXMuZGVzdHJveTtcblx0XHRkZWxldGUgdGhpcy5jaGF0SUQ7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH07XG5cdHRoaXMuc2VuZCA9IGZ1bmN0aW9uKGRhdGEpIHtcblx0XHR2YXIgY2hhdElEID0gdGhpcy5jaGF0SUQ7XG5cdFx0ZXZlbnRzLnB1Ymxpc2goJ3BsYXliYWNrLXNlbmQtJyArIGNoYXRJRCwgeyBjaGF0SUQ6IGNoYXRJRCwgZGF0YTogZGF0YSB9KTtcblx0XHRyZXR1cm4gdGhpcztcblx0fTtcblx0dGhpcy5yZWNlaXZlID0gZnVuY3Rpb24oZGF0YSkge1xuXHRcdHZhciBjaGF0SUQgPSB0aGlzLmNoYXRJRDtcblx0XHRldmVudHMucHVibGlzaCgncGxheWJhY2stcmVjZWl2ZS0nICsgY2hhdElELCB7IGNoYXRJRDogY2hhdElELCBkYXRhOiBkYXRhIH0pO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9O1xuXHRyZXR1cm4gdGhpcztcbn1cblxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0aW5pdDogaW5pdFxufTtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvcGxheWJhY2svaW5kZXguanNcbiAqKiBtb2R1bGUgaWQgPSA5NFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLyoqXG4qIChDKSBDb3B5cmlnaHQgSUJNIENvcnAuIDIwMTYuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4qXG4qIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7IHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0XG4qIGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS4gWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4qXG4qIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuKlxuKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlXG4qIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzXG4qIG9yIGltcGxpZWQuIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmQgbGltaXRhdGlvbnMgdW5kZXJcbiogdGhlIExpY2Vuc2UuXG4qL1xuXG52YXIgZGVmYXVsdFN0eWxlcyA9IHtcblx0YmFja2dyb3VuZDogJ3JnYmEoNjEsIDYxLCA2MSwgMSknLFxuXHRhY2NlbnRCYWNrZ3JvdW5kOiAncmdiYSgxNzUsIDExMCwgMjMyLCAxKScsXG5cdGFjY2VudFRleHQ6ICcjZmZmZmZmJyxcblx0dGV4dDogJyNmZmZmZmYnLFxuXHRsaW5rOiAnI2ZmZmZmZicsXG5cdHNlY29uZGFyeUJhY2tncm91bmQ6ICdyZ2JhKDcwLCA3MCwgNzAsIDEpJyxcblx0c2Vjb25kYXJ5VGV4dDogJ3JnYmEoMjQ3LCAyNDcsIDI0NywgMSknLFxuXHRpbnB1dEJhY2tncm91bmQ6ICdyZ2JhKDcwLCA3MCwgNzAsIDEpJyxcblx0aW5wdXRUZXh0OiAncmdiYSgyNDcsIDI0NywgMjQ3LCAxKScsXG5cdGVycm9yQmFja2dyb3VuZDogJ3JnYmEoMjM5LCA2MiwgNTgsIDEpJyxcblx0ZXJyb3JUZXh0OiAnI2ZmZmZmZidcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gZGVmYXVsdFN0eWxlcztcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvc3R5bGVzLmpzXG4gKiogbW9kdWxlIGlkID0gOTVcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9yYXctbG9hZGVyL2luZGV4LmpzIS4vc3R5bGVzLmNzc1wiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCB7fSk7XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcblx0Ly8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0aWYoIWNvbnRlbnQubG9jYWxzKSB7XG5cdFx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Jhdy1sb2FkZXIvaW5kZXguanMhLi9zdHlsZXMuY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9yYXctbG9hZGVyL2luZGV4LmpzIS4vc3R5bGVzLmNzc1wiKTtcblx0XHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXHRcdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHRcdH0pO1xuXHR9XG5cdC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9sYXlvdXRzL3Nob3ctbG9jYXRpb25zL3N0eWxlcy5jc3NcbiAqKiBtb2R1bGUgaWQgPSA3XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iXSwic291cmNlUm9vdCI6IiJ9