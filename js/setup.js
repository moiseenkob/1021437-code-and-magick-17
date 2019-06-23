'use strict';

(function () {

  var COUNT_WIZARD = 4;
  var similarWizardsList = document.querySelector('.setup-similar-list');
  /* Убрали класс скрытия "временно" */
  document.querySelector('.setup-similar').classList.remove('hidden');
  /* Выбираем обёртку, чтобы снять нагрузку поиска */
  var wrapWizardPlayer = document.querySelector('.setup-player');
  var fireballColor = wrapWizardPlayer.querySelector('.setup-fireball-wrap');
  var mantleColor = wrapWizardPlayer.querySelector('.setup-wizard .wizard-coat');
  var eyesColor = wrapWizardPlayer.querySelector('.setup-wizard .wizard-eyes');
  /* Цвета для изменения образа мага */
  var colorsEyesWizard = ['black', 'red', 'blue', 'yellow', 'green'];
  var colorsfireBallWizard = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
  var colorsMantleWizard = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
  /* Поля для отправки данных на сервер */
  var colorEyesWizardToSendServer = document.querySelector('.setup-wizard-appearance input[name="eyes-color"]');
  var colorMantleWizardToSendServer = document.querySelector('.setup-wizard-appearance input[name="coat-color"]');
  var colorFireballWizardToSendServer = document.querySelector('.setup-fireball-wrap input[name="fireball-color"] ');

  /* Вызов функции для создания объектов */
  var items = window.utilis.generateWizard(COUNT_WIZARD);
  /* Вызов функции генерации и вставления данных */
  var fragment = window.utilis.getFragmentDate(items);
  /* Добавление данных в DOM */
  similarWizardsList.appendChild(fragment);

  /* Работа с кликами для изменения цвета элементов мага */
  /* Рандом фаербола */
  var onFireballColorClick = function (evt) {
    var color = window.utilis.getRandomItem(colorsfireBallWizard);
    evt.currentTarget.style.background = color;
    colorFireballWizardToSendServer.value = color;
  };
  fireballColor.addEventListener('click', onFireballColorClick);

  /* Рандом мантии */
  var onMantleColorClick = function (evt) {
    var color = window.utilis.getRandomItem(colorsMantleWizard);
    evt.currentTarget.style.fill = color;
    colorMantleWizardToSendServer.value = color;
  };
  mantleColor.addEventListener('click', onMantleColorClick);

  /* Рандом цвет глаз */
  var onEyesColorClick = function (evt) {
    var color = window.utilis.getRandomItem(colorsEyesWizard);
    evt.currentTarget.style.fill = color;
    colorEyesWizardToSendServer.value = color;
  };
  eyesColor.addEventListener('click', onEyesColorClick);

})();
