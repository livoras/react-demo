(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

var utils = {};

utils.log = function () {
	console.log.apply(console, arguments);
};

module.exports = utils;

},{}],2:[function(require,module,exports){
"use strict";

require("./specs/util.spec");

},{"./specs/util.spec":3}],3:[function(require,module,exports){
"use strict";

require("../../src/scripts/common/util");

describe("Test utilities", function () {
  it("Test log function", function () {});
});

},{"../../src/scripts/common/util":1}]},{},[2])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxnaXRcXHJlYWN0LWRlbW9cXG5vZGVfbW9kdWxlc1xcZ3VscC1icm93c2VyaWZ5XFxub2RlX21vZHVsZXNcXGJyb3dzZXJpZnlcXG5vZGVfbW9kdWxlc1xcYnJvd3Nlci1wYWNrXFxfcHJlbHVkZS5qcyIsIkQ6L2dpdC9yZWFjdC1kZW1vL3NyYy9zY3JpcHRzL2NvbW1vbi91dGlsLmpzIiwiRDovZ2l0L3JlYWN0LWRlbW8vdGVzdC9mYWtlX2ZlNTRmM2Y2LmpzIiwiRDovZ2l0L3JlYWN0LWRlbW8vdGVzdC9zcGVjcy91dGlsLnNwZWMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQ0FBLElBQUksS0FBSyxHQUFHLEVBQUUsQ0FBQzs7QUFFZixLQUFLLENBQUMsR0FBRyxHQUFHLFlBQVc7QUFDdEIsUUFBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUFFLFNBQVMsQ0FBQyxDQUFDO0NBQ3RDLENBQUE7O0FBRUQsTUFBTSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7Ozs7O0FDTnZCLE9BQU8sQ0FBQyxtQkFBbUIsQ0FBQyxDQUFBOzs7OztRQ0FyQiwrQkFBK0I7O0FBRXRDLFFBQVEsQ0FBQyxnQkFBZ0IsRUFBRSxZQUFXO0FBQ3BDLElBQUUsQ0FBQyxtQkFBbUIsRUFBRSxZQUFXLEVBRWxDLENBQUMsQ0FBQTtDQUNILENBQUMsQ0FBQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt0aHJvdyBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpfXZhciBmPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChmLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGYsZi5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJ2YXIgdXRpbHMgPSB7fTtcblxudXRpbHMubG9nID0gZnVuY3Rpb24oKSB7XG5cdGNvbnNvbGUubG9nLmFwcGx5KGNvbnNvbGUsIGFyZ3VtZW50cyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gdXRpbHM7XG4iLCJyZXF1aXJlKFwiLi9zcGVjcy91dGlsLnNwZWNcIikiLCJpbXBvcnQgXCIuLi8uLi9zcmMvc2NyaXB0cy9jb21tb24vdXRpbFwiXG5cbmRlc2NyaWJlKFwiVGVzdCB1dGlsaXRpZXNcIiwgZnVuY3Rpb24oKSB7XG4gIGl0KFwiVGVzdCBsb2cgZnVuY3Rpb25cIiwgZnVuY3Rpb24oKSB7XG4gICAgXG4gIH0pIFxufSkiXX0=
