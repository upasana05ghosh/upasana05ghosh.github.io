/*particlesJS.load(@dom-id, @path-json, @callback (optional)); */
particlesJS.load(
    "particles-js",
    "vendors/json/particles.json",
    function () {
      console.log("callback - particles.js config loaded");
    }
  );