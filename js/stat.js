'use strict';
var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var BAR_W = 40;
var BAR_H = 150;
var GAP = 50;
var PLAYER = 'Вы';

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
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

var randomColor = function () {
  var x = (Math.random(10, 100)).toString(16).slice(-2);
  return '#' + '00538a' + x;
};

window.renderStatistics = function (ctx, name, times) {

  renderCloud(ctx, 100, 10, 'rgba(0, 0, 0, 0.3)');
  renderCloud(ctx, 90, 0, '#fff');

  ctx.font = '16px PT Mono';
  ctx.fillStyle = '#000';
  ctx.fillText('Ура вы победили!', 120, 41);
  ctx.fillText('Список результатов:', 120, 59);

  var maxTime = getMaxElement(times);

  for (var i = 0; i < name.length; i++) {
    if (name[i] === PLAYER) {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
      ctx.fillRect(((140 + (GAP + BAR_W) * i)), 240, BAR_W, -(BAR_H * times[i]) / maxTime);
      ctx.fillStyle = '#000';
      ctx.fillText(Math.round(times[i]), (140 + (GAP + BAR_W) * i), 270 - (BAR_H * times[i]) / maxTime - 38);
      ctx.fillText(name[i], (140 + (GAP + BAR_W) * i), 258);
    } else {
      ctx.fillStyle = randomColor();
      ctx.fillRect(((140 + (GAP + BAR_W) * i)), 240, BAR_W, -(BAR_H * times[i]) / maxTime);
      ctx.fillStyle = '#000';
      ctx.fillText(Math.round(times[i]), (140 + (GAP + BAR_W) * i), 270 - (BAR_H * times[i]) / maxTime - 38);
      ctx.fillText(name[i], (140 + (GAP + BAR_W) * i), 258);
    }
  }
};


