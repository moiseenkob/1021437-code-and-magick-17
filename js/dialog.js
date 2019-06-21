'use strict';
var setupModal = document.querySelector('.setup');
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

var buttonOpenModal = document.querySelector('.setup-open');
buttonOpenModal.addEventListener('click', function () {
  setupModal.style.left = setupModalCoordinateX;
  setupModal.style.top = setupModalCoordinateY;
});
