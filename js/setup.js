'use strict';

var COUNT_WIZARD = 4;

/* Данные волшебников */
var names = ['Иван', 'Хуан', 'Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var lastName = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var coatColors = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var eyesColors = ['black', 'red', 'blue', 'yellow', 'green'];
var similarWizardsList = document.querySelector('.setup-similar-list');
var wizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
/* Убрали класс скрытия "временно" */
document.querySelector('.setup-similar').classList.remove('hidden');
/* Переменные для открытия и закрытия меню */
var buttonOpenModal = document.querySelector('.setup-open');
var buttonCloseModal = document.querySelector('.setup-close');
var setupModal = document.querySelector('.setup');
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

/* Вызов функции для создания объектов */
var items = generateWizard(COUNT_WIZARD);
/* Вызов функции генерации и вставления данных */
var fragment = getFragmentDate(items);
/* Добавление данных в DOM */
similarWizardsList.appendChild(fragment);

/* Работа с попапом (открытие/закрытие) с элементами доступности*/
var onPopupEscPress = function (evt) {
  if (evt.keyCode === 27 && evt.target.type !== 'text') {
    closeModal();
  }

};


var openModal = function () {
  setupModal.classList.remove('hidden');
  document.addEventListener('keydown', onPopupEscPress);
};

var closeModal = function () {
  setupModal.classList.add('hidden');
  document.removeEventListener('keydown', onPopupEscPress);
};

buttonOpenModal.addEventListener('click', function () {
  openModal();
});

buttonCloseModal.addEventListener('click', function () {
  closeModal();
});

buttonCloseModal.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 13) {
    closeModal();
  }
});

buttonOpenModal.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 13) {
    openModal();
  }
});

/* Работа с кликами для изменения цвета элементов мага */
/* Рандом фаербола */
var onFireballColorClick = function (evt) {
  var color = getRandomItem(colorsfireBallWizard);
  evt.currentTarget.style.background = color;
  colorFireballWizardToSendServer.value = color;
};
fireballColor.addEventListener('click', onFireballColorClick);

/* Рандом мантии */
var onMantleColorClick = function (evt) {
  var color = getRandomItem(colorsMantleWizard);
  evt.currentTarget.style.fill = color;
  colorMantleWizardToSendServer.value = color;
};
mantleColor.addEventListener('click', onMantleColorClick);

/* Рандом цвет глаз */
var onEyesColorClick = function (evt) {
  var color = getRandomItem(colorsEyesWizard);
  evt.currentTarget.style.fill = color;
  colorEyesWizardToSendServer.value = color;
};
eyesColor.addEventListener('click', onEyesColorClick);


/* Перетаскивание модального окна */

