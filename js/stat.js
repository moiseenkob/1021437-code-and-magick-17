'use strict';

(function () {

  var Y_RECTANGLE = 240;
  var Y_TEXT = 232;
  var Y_NAME = 258;
  var PLAYER = 'Вы';
  var BAR_W = 40;
  var BAR_H = 150;
  var GAP = 50;
  var INDENT = 140;
  var DEFAULT_COLOR = '#000';
  var TEXT_TITLE_Y = 120;

  /* Create post and random color */
  var createBar = function (ctx, namePlayer, timesPlay, val) {

    /* Find max number */
    var maxTime = getMaxElement(timesPlay);

    ctx.fillStyle = (namePlayer[val] === PLAYER ? 'rgba(255, 0, 0, 1)' : window.utils.randomColor());
    ctx.fillRect(((INDENT + (GAP + BAR_W) * val)), Y_RECTANGLE, BAR_W, -(BAR_H * timesPlay[val]) / maxTime);
    ctx.fillStyle = DEFAULT_COLOR;
    ctx.fillText(Math.round(timesPlay[val]), (INDENT + (GAP + BAR_W) * val), Y_TEXT - (BAR_H * timesPlay[val]) / maxTime);
    ctx.fillText(namePlayer[val], (INDENT + (GAP + BAR_W) * val), Y_NAME);

  };

  var getMaxElement = function (arr) {
    var maxElement = arr[0];
    for (var i = 0; i < arr.length; i++) {
      if (maxElement < arr[i]) {
        maxElement = arr[i];
      }
    }
    return maxElement;
  };

  /* The function of processing all statistics and displaying it on the screen */
  window.renderStatistics = function (ctx, name, times) {

    /* Create cloud */
    window.utils.renderCloud(ctx, 110, 20, 'rgba(0, 0, 0, 0.7)');
    window.utils.renderCloud(ctx, 100, 10, '#fff');

    ctx.font = '16px PT Mono';
    ctx.fillStyle = DEFAULT_COLOR;
    ctx.fillText('You WIN!', TEXT_TITLE_Y, 41);
    ctx.fillText('List of results:', TEXT_TITLE_Y, 59);

    /* return function visible */
    for (var i = 0; i < name.length; i++) {
      createBar(ctx, name, times, i);
    }
  };


})();
