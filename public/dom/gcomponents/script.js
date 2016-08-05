document.addEventListener('DOMContentLoaded', function () {

  function Menu(options) {
    var elem = options.elem;

    elem.onmousedown = function () {
      return false;
    };

    elem.onclick = function (event) {
      var closestTitle=event.target.closest('.title');
      if (closestTitle && elem.contains(closestTitle)) {
        elem.classList.toggle('open');
      }
    };
  }

  var menu = new Menu({
    elem: document.getElementById('sweets-menu')
  });


});