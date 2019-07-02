'use strict';

(function () {

  /* Переменные для открытия и закрытия меню */
  var buttonOpenModal = document.querySelector('.setup-open');
  var buttonCloseModal = document.querySelector('.setup-close');
  var setupModal = document.querySelector('.setup');
  var activeSetupSimilar = document.querySelector('.setup-similar');
  var form = document.querySelector('.setup-wizard-form');
  /* Работа с попапом (открытие/закрытие) с элементами доступности*/
  var onPopupEscPress = function (evt) {
    if (evt.keyCode === 27 && evt.target.type !== 'text') {
      closeModal();
    }
  };

  var openModal = function () {
    activeSetupSimilar.classList.remove('hidden');
    setupModal.classList.remove('hidden');
    document.addEventListener('keydown', onPopupEscPress);

    /* Прослушивание формы на отправку, отмена действия по умолчанию и отправка данных FormData */
    form.addEventListener('submit', function (evt) {
      window.backend.save(new FormData(form), function () {
        setupModal.classList.add('hidden');
      }, window.backend.errorHandler);
      evt.preventDefault();
    });
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

  var iconMoveDialog = setupModal.querySelector('.upload');
  var predmetWizard = setupModal.querySelector('.setup-artifacts-cell img');

  predmetWizard.addEventListener('mousedown', function (evt) {
    evt.preventDefault();

    var startPredmetCoordinates = {
      x: evt.clientX,
      y: evt.clientY
    };

    var onMouseMove = function (moveEvt) {
      moveEvt.preventDefault();

      var Shift = {
        x: startPredmetCoordinates.x - moveEvt.clientX,
        y: startPredmetCoordinates.y - moveEvt.clientY
      };

      startPredmetCoordinates = {
        x: moveEvt.clientX,
        y: moveEvt.clientY
      };

      predmetWizard.style.top = (predmetWizard.offsetTop - Shift.y) + 'px';
      predmetWizard.style.left = (predmetWizard.offsetLeft - Shift.x) + 'px';
    };

    var onMouseUp = function (evtUp) {
      evtUp.preventDefault();


      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);
    };
    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);

  });
  var setupModalCoordinateX;
  var setupModalCoordinateY;

  iconMoveDialog.addEventListener('mousedown', function (evt) {
    evt.preventDefault();

    setupModalCoordinateX = setupModal.style.left;
    setupModalCoordinateY = setupModal.style.top;

    var StartCoordinates = {
      x: evt.clientX,
      y: evt.clientY
    };
    var dragged = false;
    var onMouseMove = function (moveEvt) {
      moveEvt.preventDefault();
      dragged = true;
      var Shift = {
        x: StartCoordinates.x - moveEvt.clientX,
        y: StartCoordinates.y - moveEvt.clientY
      };

      StartCoordinates = {
        x: moveEvt.clientX,
        y: moveEvt.clientY
      };

      setupModal.style.top = (setupModal.offsetTop - Shift.y) + 'px';
      setupModal.style.left = (setupModal.offsetLeft - Shift.x) + 'px';
    };

    var onMouseUp = function (evtUp) {
      evtUp.preventDefault();

      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);

      if (dragged) {
        var onClickPreventDefault = function (evtClick) {
          evtClick.preventDefault();
          setupModal.removeEventListener('click', onClickPreventDefault);
        };
        setupModal.addEventListener('click', onClickPreventDefault);
      }
    };

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);

  });


  buttonOpenModal.addEventListener('click', function () {
    setupModal.style.left = setupModalCoordinateX;
    setupModal.style.top = setupModalCoordinateY;
  });

})();
