(function () {
  window.onmessage = function (ev) {
    if (ev.data === 'test') {
      alert('HELLO WORLD')
    };
  }
}())