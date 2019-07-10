'use strict';

(function () {
  var TIME_DELAY = 1000;
  var StatusCode = {
    SUCCESSFUL: 200,
    BAD_REQUEST: 400,
    UNAUTHORIZED: 401,
    NOT_FOUND: 404,
  };

  var handlerAnswerOfServer = function (xHrStatusCode, functionSuccessHandler, functionErrorHandler) {
    switch (xHrStatusCode.status) {
      case StatusCode.SUCCESSFUL:
        functionSuccessHandler(xHrStatusCode.response);
        break;
      case StatusCode.BAD_REQUEST:
        functionErrorHandler('Could not process the request');
        break;
      case StatusCode.UNAUTHORIZED:
        functionErrorHandler('User is not authorized');
        break;
      case StatusCode.NOT_FOUND:
        functionErrorHandler('Not found');
        break;

      default:
        functionErrorHandler('Status: ' + xHrStatusCode.status + ' ' + xHrStatusCode.statusText);
    }
  };

  var load = function (onLoad, onError) {
    var URL = 'https://js.dump.academy/code-and-magick/data';
    var xhr = new XMLHttpRequest();
    xhr.responseType = 'json';

    xhr.addEventListener('load', function () {
      handlerAnswerOfServer(xhr, onLoad, onError);
    });

    xhr.addEventListener('error', function () {
      onError('Connection failed');
    });
    xhr.addEventListener('timeout', function () {
      onError('The request did not have time to complete ' + xhr.timeout + 'ms');
    });

    xhr.timeout = TIME_DELAY;
    xhr.open('GET', URL);
    xhr.send();


  };

  var save = function (data, onLoad, onError) {
    var URL = 'https://js.dump.academy/code-and-magick';
    var xhr = new XMLHttpRequest();
    xhr.responseType = 'json';

    xhr.addEventListener('load', function () {
      handlerAnswerOfServer(xhr, onLoad, onError);
    });

    xhr.addEventListener('error', function () {
      onError('Connection failed');
    });
    xhr.addEventListener('timeout', function () {
      onError('The request did not have time to complete ' + xhr.timeout + 'ms');
    });

    xhr.timeout = TIME_DELAY;
    xhr.open('POST', URL);
    xhr.send(data);
  };

  window.backend = {
    load: load,
    save: save
  };

})();
