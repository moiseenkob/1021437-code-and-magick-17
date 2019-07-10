'use strict';

(function () {

  var CLOUD_WIDTH = 420;
  var CLOUD_HEIGHT = 270;

  /* Create object */
  var renderCloud = function (ctx, x, y, color) {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
  };

  /* Generation color for the pillar */
  var randomColor = function () {
    var x = (Math.random(10, 100)).toString(16).slice(-2);
    return '#' + '00538a' + x;
  };

  /* Generation data */
  var getRandomItem = function (arr) {
    var random = Math.floor(Math.random() * (arr.length));
    return arr[random];
  };

  window.utils = {
    renderCloud: renderCloud,
    randomColor: randomColor,
    getRandomItem: getRandomItem
  };
})();
