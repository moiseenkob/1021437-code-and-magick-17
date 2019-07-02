'use strict';

(function () {

  var CLOUD_WIDTH = 420;
  var CLOUD_HEIGHT = 270;
  /* Данные волшебников */

  /* Функция создания внешних объектов (облаков, теней) */
  var renderCloud = function (ctx, x, y, color) {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
  };

  /* Функция генерации цвета для столбиков */
  var randomColor = function () {
    var x = (Math.random(10, 100)).toString(16).slice(-2);
    return '#' + '00538a' + x;
  };

  /* Функция генерации рандомных данных */
  var getRandomItem = function (arr) {
    var random = Math.floor(Math.random() * (arr.length));
    return arr[random];
  };

  window.utilis = {
    renderCloud: renderCloud,
    randomColor: randomColor,
    getRandomItem: getRandomItem
  };
})();
