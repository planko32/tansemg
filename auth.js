// Simple demo auth stub so pages don't break if real auth.js is missing.
// In your real project, replace this file with your own authentication logic.
(function (global) {
  var DemoAuth = {
    isLoggedIn: function () {
      return true;
    },
    requireLogin: function (callback) {
      if (typeof callback === "function") callback();
    }
  };
  global.DemoAuth = DemoAuth;
})(window);
