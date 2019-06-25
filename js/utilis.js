'use strict';

(function () {

  var CLOUD_WIDTH = 420;
  var CLOUD_HEIGHT = 270;
  /* Данные волшебников */
  var names = ['Иван', 'Хуан', 'Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
  var lastName = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
  var coatColors = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
  var eyesColors = ['black', 'red', 'blue', 'yellow', 'green'];
  var wizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

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

  /* Функция генерации рандомных данных */
  var getRandomItem = function (arr) {
    var random = Math.floor(Math.random() * (arr.length));
    return arr[random];
  };

  /* Функция создания объектов и вставление их в массив */
  var generateWizard = function (val) {
    var personWizard = [];
    for (var i = 0; i < val; i++) {
      var ObjectWizzard = {
        Name: getRandomItem(names) + ' ' + getRandomItem(lastName),
        Mantle: getRandomItem(coatColors),
        Eyes: getRandomItem(eyesColors)
      };
      personWizard.push(ObjectWizzard);
    }
    return personWizard;
  };

  /* Создали функцию для генерации и записывания данных в фрагмент */
  var getFragmentDate = function (arr) {
    /* Создаем новый фрагмент */
    var fragment = document.createDocumentFragment();

    for (var i = 0; i < arr.length; i++) {
      var wizardMode = wizardTemplate.cloneNode(true);
      wizardMode.querySelector('.setup-similar-label').textContent = (arr[i]['name']);
      wizardMode.querySelector('.wizard-coat').style.fill = arr[i]['mantle'];
      wizardMode.querySelector('.wizard-eyes').style.fill = arr[i]['eyes'];
      fragment.appendChild(wizardMode);
    }
    return fragment;
  };

  window.utilis = {
    renderCloud: renderCloud,
    getMaxElement: getMaxElement,
    randomColor: randomColor,
    getRandomItem: getRandomItem,
    generateWizard: generateWizard,
    getFragmentDate: getFragmentDate

  };
})();
