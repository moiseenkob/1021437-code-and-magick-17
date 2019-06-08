'use strict';

/* Константы */
var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var BAR_W = 40;
var BAR_H = 150;
var GAP = 50;
var PLAYER = 'Вы';
var INDENT = 140;
var DEFAULT_COLOR = '#000';
var Y_RECTANGLE = 240;
var Y_TEXT = 232;
var Y_NAME = 258;
var TEXT_TITLE_Y = 120;

/* Функция создания внешних объектов (облаков, теней) */
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
/* Функция генерации цвета для столбиков */
var randomColor = function () {
  var x = (Math.random(10, 100)).toString(16).slice(-2);
  return '#' + '00538a' + x;
};
/* Функция обработки всей статистики и вывода её на экран */
window.renderStatistics = function (ctx, name, times) {

  renderCloud(ctx, 110, 20, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, 100, 10, '#fff');

  ctx.font = '16px PT Mono';
  ctx.fillStyle = DEFAULT_COLOR;
  ctx.fillText('Ура вы победили!', TEXT_TITLE_Y, 41);
  ctx.fillText('Список результатов:', TEXT_TITLE_Y, 59);

  var maxTime = getMaxElement(times);

  /* Функция создания столбика с рандомным цветом  */
  var createBar = function (val) {

    ctx.fillStyle = (name[val] === PLAYER ? 'rgba(255, 0, 0, 1)' : randomColor());
    ctx.fillRect(((INDENT + (GAP + BAR_W) * val)), Y_RECTANGLE, BAR_W, -(BAR_H * times[val]) / maxTime);
    ctx.fillStyle = DEFAULT_COLOR;
    ctx.fillText(Math.round(times[val]), (INDENT + (GAP + BAR_W) * val), Y_TEXT - (BAR_H * times[val]) / maxTime);
    ctx.fillText(name[val], (INDENT + (GAP + BAR_W) * val), Y_NAME);

  };

  /* Цикл с помошью которого пробегаемся по массиву и строем столбики с помощью функции  */
  for (var i = 0; i < name.length; i++) {
    createBar(i);
  }
};


