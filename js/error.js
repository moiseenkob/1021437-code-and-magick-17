'use strict';

(function () {

  var createModalErrorInfo = function (errorMessage) {
    var node = document.createElement('div');
    node.classList.add('error-wrap');
    node.style = 'z-index: 100; margin: 0 auto; text-align: center; background-color: red;';
    node.style.position = 'absolute';
    node.style.left = 0;
    node.style.right = 0;
    node.style.fontSize = '30px';
    node.textContent = errorMessage;
    document.body.insertAdjacentElement('afterBegin', node);
  };

  var removeModalErrorInfo = function () {
    var itemErrorElement = document.querySelector('.error-wrap');
    if (itemErrorElement) {
      itemErrorElement.remove();
    }
  };

  window.error = {
    createModalErrorInfo: createModalErrorInfo,
    removeModalErrorInfo: removeModalErrorInfo
  };

})();
