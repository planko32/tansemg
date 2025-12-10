// Simple demo common-nav stub so pages don't break if real common-nav.js is missing.
// In your real project, replace this file with your bottom navigation / header logic.
(function (global) {
  global.DemoCommonNav = {
    init: function () {
      // no-op demo
    }
  };
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", function () {
      global.DemoCommonNav.init();
    });
  } else {
    global.DemoCommonNav.init();
  }
})(window);
