'use strict';

var COUNT_WIZARD = 4;

/* Данные волшебников */
var names = ['Иван', 'Хуан', 'Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var lastName = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var coatColor = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var eyesColor = ['black', 'red', 'blue', 'yellow', 'green'];

/* Функция создания DOM-элемента на основе JS-объекта */
var listPasteWizard = document.querySelector('.setup-similar-list');
var wizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

/* Убрали класс скрытия "временно" */
document.querySelector('.setup').classList.remove('hidden');
document.querySelector('.setup-similar').classList.remove('hidden');

/* Функция генерации рандомных данных */
var randomDateWizard = function (arr) {
  var random = Math.floor(Math.random() * (arr.length));
  return arr[random];
};

/* Функция создания объектов и вставление их в массив */
var generateWizard = function (val) {
  var personWizard = [];
  for (var i = 0; i < val; i++) {
    var objectWizzard = {
      name: randomDateWizard(names),
      fio: randomDateWizard(lastName),
      mantle: randomDateWizard(coatColor),
      eyes: randomDateWizard(eyesColor)
    };
    personWizard.push(objectWizzard);
  }
  return personWizard;
};

/* Создали функцию для генерации и записывания данных в фрагмент */
var pasteWizard = function (arr) {

  /* Создаем новый фрагмент */
  var fragment = document.createDocumentFragment();

  for (var i = 0; i < arr.length; i++) {
    var wizardMode = wizardTemplate.cloneNode(true);
    wizardMode.querySelector('.setup-similar-label').textContent = (items[i]['name'] + ' ' + items[i]['fio']);
    wizardMode.querySelector('.wizard-coat').style.fill = items[i]['mantle'];
    wizardMode.querySelector('.wizard-eyes').style.fill = items[i]['eyes'];
    fragment.appendChild(wizardMode);
  }
  return fragment;
};

/* Вызов функции для создания объектов */
var items = generateWizard(COUNT_WIZARD);
/* Вызов функции генерации и вставления данных */
var fragment = pasteWizard(items);
/* Добавление данных в DOM */
listPasteWizard.appendChild(fragment);
