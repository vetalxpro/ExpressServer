document.addEventListener('DOMContentLoaded', function () {

  function Menu(options) {
    var elem = options.elem;

    elem.onmousedown = function () {
      return false;
    };

    elem.onclick = function (event) {
      var closestTitle = event.target.closest('.title');
      if (closestTitle && elem.contains(closestTitle)) {
        toggle();
      }
    };

    function toggle() {
      elem.classList.toggle('open');
    }

    this.toggle = toggle;
  }

  var menu = new Menu({
    elem: document.getElementById('sweets-menu')
  });


  function Slider(options) {
    let elem = options.elem;
    let toggle = elem.querySelector('.slider-toggle');
    let shiftX;

    toggle.onmousedown = function (event) {
      if (event.target.closest('.slider-toggle')) {
        startDrag(event.pageX);
      }
      return false;
    };

    function startDrag(pageX) {
      shiftX = pageX - toggle.getBoundingClientRect().left - window.pageXOffset;
      document.addEventListener('mousemove', onDocumentMouseMove);
      document.addEventListener('mouseup', onDocumentMouseUp);
    }

    function onDocumentMouseMove(event) {
      moveAt(event.pageX);
    }

    function onDocumentMouseUp() {
      endDrag();
    }

    function endDrag() {
      document.removeEventListener('mousemove', onDocumentMouseMove);
      document.removeEventListener('mouseup', onDocumentMouseUp);
    }

    function moveAt(pageX) {
      let newLeft = pageX - shiftX - elem.getBoundingClientRect().left;
      let maxRight = elem.offsetWidth - toggle.offsetWidth;
      if (newLeft < 0) {
        newLeft = 0;
      }

      if (newLeft > maxRight) {
        newLeft = maxRight;
      }
      toggle.style.left = newLeft + 'px';
      showValueInSpan(newLeft);
    }

    function showValueInSpan(value) {
      if (elem.firstElementChild.nodeName === 'SPAN') {
        elem.firstElementChild.textContent = value;
      }

    }
  }

  let slider = new Slider({
    elem: document.getElementById('slider')
  });


  function ListSelect(options) {
    let elem = options.elem;
    let lastSelectedLi;

    elem.onclick = function (event) {
      let target = event.target.closest('li');
      if (!elem.contains(target)) {
        return false;
      }

      if (event.ctrlKey) {
        multiSelect(target);
      } else if (event.shiftKey) {
        rangeSelect(target);
      } else {
        singleSelect(target);

      }

      lastSelectedLi = target;

    };

    elem.onmousedown = function () {
      return false;
    };

    function singleSelect(target) {
      removeAllSelections();
      target.classList.add('selected');
    }

    function removeAllSelections() {
      let selectedArr = elem.querySelectorAll('.selected');
      for (let i = 0; i < selectedArr.length; i++) {
        selectedArr[i].classList.remove('selected');
      }
    }

    function multiSelect(target) {
      target.classList.toggle('selected');

    }

    function rangeSelect(target) {
      let startElement = lastSelectedLi || elem.querySelector('ul').firstElementChild;
      let isStartElementBefore = (startElement.compareDocumentPosition(target) & 4);
      if (isStartElementBefore) {
        for (let li = startElement; li != target; li = li.nextElementSibling) {
          li.classList.add('selected');
        }
      } else {
        for (let li = startElement; li != target; li = li.previousElementSibling) {
          li.classList.add('selected');
        }
      }
      target.classList.add('selected');
    }


    function getSelected() {
      let result = Array.prototype.map.call(elem.querySelectorAll('.selected'), function (item) {
        return item.textContent;
      });
      console.log(result);
      return result;
    }

    this.getSelected = getSelected;
  }

  let listSelect = new ListSelect({
    elem: document.getElementById('list-container')
  });
  document.getElementById('getSelectedButton').onclick = function () {
    listSelect.getSelected();
  };

  /**
   * Voter
   * @param {object} options
   * @constructor
   */
  function Voter(options) {
    let elem = options.elem;

    elem.onclick = function (event) {
      if (event.target.closest('.up')) {
        increaseVote();
      }
      if (event.target.closest('.down')) {
        decreaseVote();
      }
    };


    elem.onmousedown = function () {
      return false;
    };

    function increaseVote() {
      elem.querySelector('.vote').textContent++;
    }

    function decreaseVote() {
      elem.querySelector('.vote').textContent--;
    }

    function setVote(vote) {
      if (isNaN(vote)) {
        console.warn('NaN value in setVote(). Set default value = 0');
        elem.querySelector('.vote').textContent = 0;
        return false;
      } else {
        elem.querySelector('.vote').textContent = vote;
      }
    }

    this.setVote = setVote;
  }

  let voter1 = new Voter({
    elem: document.getElementById('voter1')
  });

  voter1.setVote(10);

  /**
   * PtotoVoter
   * @param options
   * @constructor
   */
    // function ProtoVoter(options) {
    //   let elem = this._elem = options.elem;
    //   this._voteElement = elem.querySelector('.vote');
    //
    //   elem.onmousedown = function () {
    //     return false;
    //   };
    //
    //   elem.onclick = this._onClick.bind(this);
    // }
    //
    // ProtoVoter.prototype._onClick = function (event) {
    //   if (event.target.closest('.up')) {
    //     this._increaseVote();
    //   } else if (event.target.closest('.down')) {
    //     this._decreaseVote();
    //   }
    // };
    //
    // ProtoVoter.prototype._increaseVote = function () {
    //   this._voteElement.textContent++;
    // };
    //
    // ProtoVoter.prototype._decreaseVote = function () {
    //   this._voteElement.textContent--;
    // };
    //
    // ProtoVoter.prototype.setVote = function (vote) {
    //   this._voteElement.textContent = vote;
    // };
    //
    // let voter2 = new ProtoVoter({
    //   elem: document.getElementById('voter2')
    // });
    // voter2.setVote(50);
    //
    // /**
    //  * StepProtoVoter
    //  * @param options
    //  * @constructor
    //  */
    // function StepProtoVoter(options) {
    //   ProtoVoter.apply(this, arguments);
    //   this._step = options.step;
    // }
    //
    // StepProtoVoter.prototype = Object.create(ProtoVoter.prototype);
    //
    //
    // StepProtoVoter.prototype._increaseVote = function () {
    //   this._voteElement.textContent = +this._voteElement.textContent + this._step;
    // };
    // StepProtoVoter.prototype._decreaseVote = function () {
    //   this._voteElement.textContent = +this._voteElement.textContent - this._step;
    // };
    //
    //
    // let voter3 = new StepProtoVoter({
    //   elem: document.getElementById('voter3'),
    //   step: 2
    // });
    // console.log(voter3);
    // voter3.setVote(100);

  /**
   *
   */
  class ClassVoter {
    constructor(options) {
      this.elem = options.elem;
      this.voteElement = this.elem.querySelector('.vote');

      this.elem.onmousedown = function () {
        return false;
      };

      this.elem.onclick = this.onClick.bind(this);
    }

    onClick(event) {
      if (event.target.closest('.up')) {
        this.increaseVote();
      } else if (event.target.closest('.down')) {
        this.decreaseVote();
      }
    }

    increaseVote() {
      this.voteElement.textContent++;
    }


    decreaseVote() {
      this.voteElement.textContent--;
    }

    setVote(vote) {
      this.voteElement.textContent = vote;
    }


  }

  let voter2 = new ClassVoter({
    elem: document.getElementById('voter2')
  });
  voter2.setVote(50);

  /**
   *
   */
  class ClassStepVoter extends ClassVoter {
    constructor(options) {
      super(options);
      this.step = options.step;
    }

    increaseVote() {
      this.voteElement.textContent -= -this.step;
    }

    decreaseVote() {
      this.voteElement.textContent -= this.step;
    }
  }

  let voter3 = new ClassStepVoter({
    elem: document.getElementById('voter3'),
    step: 5
  });
  voter3.setVote(100);


});


function Menu1(options) {
  "use strict";
  var elem;

  function getElem() {
    if (!elem) {
      render();
    }
    return elem;
  }

  function render() {
    elem = document.createElement('div');
    elem.className = 'menu';

    var titleElem = document.createElement('span');
    elem.appendChild(titleElem);
    titleElem.className = 'title';
    titleElem.textContent = options.title;

    elem.onmousedown = function () {
      return false;
    };

    elem.onclick = function (event) {
      if (event.target.closest('.title')) {
        toggle();
      }
    };
  }

  function renderItems() {
    var items = options.items || [];
    var list = document.createElement('ul');
    items.forEach(function (item) {
      let li = document.createElement('li');
      li.textContent = item;
      list.appendChild(li);
    });
    elem.appendChild(list);
  }

  function open() {
    if (!elem.querySelector('ul')) {
      renderItems();
    }
    elem.classList.add('open');
  }

  function close() {
    elem.classList.remove('open');
  }

  function toggle() {
    if (elem.classList.contains('open')) {
      close();
    } else {
      open();
    }
  }


  this.getElem = getElem;
  this.toggle = toggle;
  this.close = close;
  this.open = open;
}


function Clock(options) {
  let elem = options.elem;
  let timerId;
  let date;

  function render() {
    date = new Date();

    elem.querySelector('.hours').textContent = ('0' + date.getHours()).slice(-2);
    elem.querySelector('.minutes').textContent = ('0' + date.getMinutes()).slice(-2);
    elem.querySelector('.seconds').textContent = ('0' + date.getSeconds()).slice(-2);
  }

  function start() {
    render();
    timerId = setInterval(render, 1000);
  }

  function stop() {
    clearInterval(timerId);
  }

  function showAlert() {
    alert(date.toLocaleTimeString());
  }

  this.start = start;
  this.stop = stop;
  this.showAlert = showAlert;
}




