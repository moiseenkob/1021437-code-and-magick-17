'use strict';

var COUNT_WIZARD = 4;

/* Данные волшебников */
var names = ['Иван', 'Хуан', 'Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var lastName = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var coatColor = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var eyesColor = ['black', 'red', 'blue', 'yellow', 'green'];

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
var getFireballColor = wrapWizardPlayer.querySelector('.setup-fireball-wrap');
var getMantleColor = wrapWizardPlayer.querySelector('.setup-wizard .wizard-coat');
var getEyesColor = wrapWizardPlayer.querySelector('.setup-wizard .wizard-eyes');
var colorEyesWizard = ['black', 'red', 'blue', 'yellow', 'green'];
var colorfireBall = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
var colorMantleWizard = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];

/* Функция генерации рандомных данных */
var getRandomItem = function (arr) {
  var random = Math.floor(Math.random() * (arr.length));
  return arr[random];
};

/* Функция создания объектов и вставление их в массив */
var generateWizard = function (val) {
  var personWizard = [];
  for (var i = 0; i < val; i++) {
    var objectWizzard = {
      name: getRandomItem(names) + ' ' + getRandomItem(lastName),
      mantle: getRandomItem(coatColor),
      eyes: getRandomItem(eyesColor)
    };
    personWizard.push(objectWizzard);
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


/* Работа с попапом */

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


/* Рандом фаербола */
var onSetFireballColor = function (evt) {
  var color = getRandomItem(colorfireBall);
  evt.currentTarget.style.background = color;
  getFireballColor.querySelector('input').value = color;
};
getFireballColor.addEventListener('click', onSetFireballColor);

/* Рандом мантии */
var onSetMantleColor = function (evt) {
  var color = getRandomItem(colorMantleWizard);
  evt.currentTarget.style.fill = color;
  document.querySelector('.setup-wizard-appearance input[name="coat-color"]').value = color;
};
getMantleColor.addEventListener('click', onSetMantleColor);

/* Рандом цвет глаз */
var onSetEyesColor = function (evt) {
  var color = getRandomItem(colorEyesWizard);
  evt.currentTarget.style.fill = color;
  document.querySelector('.setup-wizard-appearance input[name="eyes-color"]').value = color;
};
getEyesColor.addEventListener('click', onSetEyesColor);
