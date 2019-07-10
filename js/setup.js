'use strict';

(function () {

  var COUNT_WIZARD = 4;
  var similarWizardsList = document.querySelector('.setup-similar-list');
  var wrapWizardPlayer = document.querySelector('.setup-player');
  var fireballColor = wrapWizardPlayer.querySelector('.setup-fireball-wrap');
  var mantleColor = wrapWizardPlayer.querySelector('.setup-wizard .wizard-coat');
  var eyesColor = wrapWizardPlayer.querySelector('.setup-wizard .wizard-eyes');
  var colorsEyesWizard = ['black', 'red', 'blue', 'yellow', 'green'];
  var colorsFireBallWizard = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
  var colorsMantleWizard = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
  var colorEyesWizardToSendServer = document.querySelector('.setup-wizard-appearance input[name="eyes-color"]');
  var colorMantleWizardToSendServer = document.querySelector('.setup-wizard-appearance input[name="coat-color"]');
  var colorFireballWizardToSendServer = document.querySelector('.setup-fireball-wrap input[name="fireball-color"] ');
  var wizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

  /* Random fireball */
  var onFireballColorClick = function (evt) {
    var color = window.utils.getRandomItem(colorsFireBallWizard);
    evt.currentTarget.style.background = color;
    colorFireballWizardToSendServer.value = color;
  };
  fireballColor.addEventListener('click', onFireballColorClick);

  /* Random mantle */
  var onMantleColorClick = function (evt) {
    var color = window.utils.getRandomItem(colorsMantleWizard);
    evt.currentTarget.style.fill = color;
    colorMantleWizardToSendServer.value = color;
  };
  mantleColor.addEventListener('click', onMantleColorClick);

  /* Random color eyes */
  var onEyesColorClick = function (evt) {
    var color = window.utils.getRandomItem(colorsEyesWizard);
    evt.currentTarget.style.fill = color;
    colorEyesWizardToSendServer.value = color;
  };
  eyesColor.addEventListener('click', onEyesColorClick);

  var renderWizards = function (wizards) {
    var fragment = document.createDocumentFragment();

    for (var i = 0; i < COUNT_WIZARD; i++) {
      var wizardMode = wizardTemplate.cloneNode(true);
      wizardMode.querySelector('.setup-similar-label').textContent = wizards[i].name;
      wizardMode.querySelector('.wizard-coat').style.fill = wizards[i].colorCoat;
      wizardMode.querySelector('.wizard-eyes').style.fill = wizards[i].colorEyes;
      wizardMode.querySelector('.wizard-eyes').style.fill = wizards[i].colorEyes;
      fireballColor.style.fill = wizards[i].colorFireball;
      fragment.appendChild(wizardMode);
    }
    similarWizardsList.appendChild(fragment);
  };

  window.backend.load(renderWizards, window.error.createModalErrorInfo);

})();
