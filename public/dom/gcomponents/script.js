/**
 * Menu1
 * @param options
 * @constructor
 */
function Menu1(options) {
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

/**
 * Clock
 * @param options
 * @constructor
 */
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

/**
 * ListSelect
 *
 */
class ListSelect {

  constructor(options) {
    this.elem = options.elem;
    this.lastSelectedLi = null;

    this.elem.addEventListener('click', this.onClick.bind(this));
    this.elem.addEventListener('mousedown', function (event) {
      event.preventDefault();
    });
  }

  onClick(event) {
    let target = event.target.closest('li');

    if (!this.elem.contains(target)) {
      return false;
    }

    if (event.ctrlKey) {
      this.multiSelect(target);
    } else if (event.shiftKey) {
      this.rangeSelect(target);
    } else {
      this.singleSelect(target);
    }

    this.lastSelectedLi = target;
    this.dispatchEvent();
  }

  removeAllSelections() {
    let selectedArr = this.elem.querySelectorAll('.selected');

    for (let i = 0; i < selectedArr.length; i++) {
      selectedArr[i].classList.remove('selected');
    }
  }

  singleSelect(target) {
    this.removeAllSelections();
    target.classList.add('selected');
  }

  multiSelect(target) {
    target.classList.toggle('selected');
  }

  rangeSelect(target) {
    let startElement = this.lastSelectedLi || this.elem.querySelector('ul').firstElementChild;
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

  dispatchEvent() {
    let widgetEvent = new CustomEvent('select', {
      bubbles: true,
      detail: this.getSelected()
    });
    this.elem.dispatchEvent(widgetEvent);
  }

  getSelected() {
    let result = Array.prototype.map.call(this.elem.querySelectorAll('.selected'), function (item) {
      return item.textContent;
    });

    return result;
  }


}


/**
 * ClassMenu
 */
class ClassMenu {

  constructor(options) {
    this.elem = null;
    this.title = options.title;
    this.items = options.items;
    this.template = options.template;
    this.listTemplate = options.listTemplate;
  }

  getElem() {
    if (!this.elem) {
      this.render();
    }

    return this.elem;
  }

  render() {
    let html = this.template({
      title: this.title
    });

    this.elem = document.createElement('div');
    this.elem.innerHTML = html;
    this.elem = this.elem.firstElementChild;
    this.elem.onmousedown = ()=>false;


    this.elem.onclick = (event)=> {
      if (event.target.closest('.title')) {
        this.toggle();
      }
      if (event.target.closest('a')) {
        event.preventDefault();
        this.select(event.target.closest('a'));
      }
    };

    this.elem.addEventListener('select', function (event) {
      console.log(event.detail);
    });


  }

  renderItems() {
    if (this.elem.querySelector('ul')) {
      return false;
    }
    let listHTML = this.listTemplate({
      items: this.items
    });
    this.elem.insertAdjacentHTML('beforeEnd', listHTML);
  }

  open() {
    this.renderItems();
    this.elem.classList.add('open');
  }

  close() {
    this.elem.classList.remove('open');
  }

  toggle() {
    if (this.elem.classList.contains('open')) {
      this.close();
    } else {
      this.open();
    }
  }

  select(link) {
    let widgetEvent = new CustomEvent('select', {
      bubbles: true,
      detail: link.getAttribute('href').slice(1)
    });
    this.elem.dispatchEvent(widgetEvent);
  }


}

/**
 * ClassVoter
 */
class ClassVoter {
  constructor(options) {
    this.elem = options.elem;
    this.voteElement = this.elem.querySelector('.vote');

    this.elem.onmousedown = function () {
      return false;
    };

    this.elem.addEventListener('click', this.onClick.bind(this));

  }

  onClick(event) {
    if (event.target.closest('.up')) {
      this.increaseVote();
    } else if (event.target.closest('.down')) {
      this.decreaseVote();
    }

  }

  increaseVote() {
    this.setVote(+this.voteElement.textContent + 1);
  }

  decreaseVote() {
    this.setVote(+this.voteElement.textContent - 1);
  }

  setVote(vote) {
    this.voteElement.textContent = +vote;
    let widgetEvent = new CustomEvent('changeTextContent', {
      bubbles: true,
      detail: +vote
    });
    this.elem.dispatchEvent(widgetEvent);
  }

}


/**
 * ClassStepVoter
 */
class ClassStepVoter extends ClassVoter {
  constructor(options) {
    super(options);
    this.step = options.step;
  }

  increaseVote() {
    this.setVote(+this.voteElement.textContent + this.step);
  }

  decreaseVote() {
    this.setVote(+this.voteElement.textContent - this.step);
  }
}


/**
 * TemplateTable
 */
class TemplateTable {
  constructor(options) {
    this.tableContainer = options.tableContainer;
    this.tableTemplate = options.tableTemplate;
    this.data = options.data;
  }

  render() {
    let table = this.tableTemplate({
      title: this.data.title,
      users: this.data.users
    });
    this.tableContainer.insertAdjacentHTML('afterbegin', table);
  }

}

class CustomSelect {

  constructor(options) {
    this.elem = options.elem;
    this.isOpen = false;

    this.elem.addEventListener('click', (event)=>this.onClick(event));
    this.documentClick = function (event) {
      if (!this.elem.contains(event.target)) {
        this.close();
      }
    };
    this.documentClickHandler = this.documentClick.bind(this);

  }

  onClick(event) {
    if (event.target.className == 'title') {
      this.toggle();
    } else if (event.target.tagName == 'LI') {

      this.setValue(event.target.textContent, event.target.dataset.value);
      this.close();
    }

  }

  setValue(title, value) {
    this.elem.querySelector('button').textContent = title;

    let eventWidget = new CustomEvent('select', {
      bubbles: true,
      detail: {
        title: title,
        value: value
      }
    });
    this.elem.dispatchEvent(eventWidget);
  }

  toggle() {
    if (this.isOpen) {
      this.close();
    } else {
      this.open();
    }
  }

  open() {
    this.elem.classList.add('open');
    document.addEventListener('click', this.documentClickHandler);
    this.isOpen = true;
  }

  close() {
    this.elem.classList.remove('open');
    document.removeEventListener('click', this.documentClickHandler);
    this.isOpen = false;
  }

}


class ClassSlider{
  constructor(options){
    this.elem=options.elem;
    this.max=options.max;
    this.toggle=this.elem.querySelector('.slider-toggle');
    this.devider=(this.elem.offsetWidth-this.toggle.offsetWidth)/this.max;

    this.toggle.onmousedown=(event)=>{
      if(event.target.closest('.slider-toggle')){
        this.startDrag(event.pageX);
      }
    };
    this.onDocumentMouseMove=function(event){
      this.moveAt(event.pageX);
    };
    this.onDocumentMouseUp=function(){
      this.endDrag();
    };
    this.onDocumentMouseMoveHandler=this.onDocumentMouseMove.bind(this);
    this.onDocumentMouseUpHandler=this.onDocumentMouseUp.bind(this);
  }

  startDrag(pageX){
    this.shiftX=pageX-this.toggle.getBoundingClientRect().left-window.pageXOffset;

    document.addEventListener('mousemove',this.onDocumentMouseMoveHandler);
    document.addEventListener('mouseup',this.onDocumentMouseUpHandler);
    document.onmousedown=function(event){
      event.preventDefault();
    };
  }

  endDrag(){
    document.removeEventListener('mousemove',this.onDocumentMouseMoveHandler);
    document.removeEventListener('mouseup',this.onDocumentMouseUpHandler);
    document.onmousedown=null;
    this.dispatchChangeEvent(this.newLeft);
  }
  moveAt(pageX){
    let newLeft=pageX-this.shiftX-this.elem.getBoundingClientRect().left;
    let maxRight=this.elem.offsetWidth-this.toggle.offsetWidth;
    if(newLeft<0){
      newLeft=0;
    }
    if(newLeft>maxRight){
      newLeft=maxRight;
    }
    this.newLeft=newLeft/this.devider;
    this.setValue(this.newLeft);
    this.dispatchSlideEvent(this.newLeft);
  }
  dispatchSlideEvent(value){
    let eventWidget=new CustomEvent('slide',{
      bubbles:true,
      detail:Math.round(value*this.devider)
    });
    this.elem.dispatchEvent(eventWidget);
  }
  dispatchChangeEvent(value){
    let eventWidget=new CustomEvent('change',{
      bubbles:true,
      detail:Math.round(value*this.devider)
    });
    this.elem.dispatchEvent(eventWidget);
  }



  //events slide(while move), change(after mouseup)

  setValue(value){
    this.toggle.style.left=value*this.devider+'px';
  }
}








/**
 * DOMContentLoaded
 */
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


  /**
   *
   * @type {ListSelect}
   */

  let listSelect = new ListSelect({
    elem: document.getElementById('list-container')
  });
  document.getElementById('getSelectedButton').onclick = function () {
    console.log(listSelect.getSelected());
  };
  document.getElementById('list-container').addEventListener('select', function () {
    console.log(listSelect.getSelected());
  });

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
        elem.querySelector('.vote').textContent = '0';
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
   * @type {ClassVoter}
   */
  let voter2 = new ClassVoter({
    elem: document.getElementById('voter2')
  });
  voter2.setVote(50);
  document.getElementById('voter2').addEventListener('changeTextContent', function (event) {
    console.log(event.detail);
  });


  /**
   *
   * @type {ClassStepVoter}
   */
  let voter3 = new ClassStepVoter({
    elem: document.getElementById('voter3'),
    step: 5
  });
  voter3.setVote(100);


  /**
   *
   * @type {ClassMenu}
   */
  let classMenu = new ClassMenu({
    title: 'Main menu',
    template: _.template(document.getElementById('class-menu-template').innerHTML),
    listTemplate: _.template(document.getElementById('class-menu-listTemplate').innerHTML),
    items: ['item1', 'item2', 'item3', 'item4']
  });
  document.getElementById('classMenu1').appendChild(classMenu.getElem());

  let classMenuLinks = new ClassMenu({
    title: 'Sweets',
    template: _.template(document.getElementById('class-menu-template').innerHTML),
    listTemplate: _.template(document.getElementById('class-menu-listTemplateLinks').innerHTML),
    items: {
      "donut": "Пончик",
      "cake": "Пирожное",
      "chocolate": "Шоколадка"
    }
  });
  document.getElementById('classMenu2').appendChild(classMenuLinks.getElem());

  /**
   * @type {TemplateTable}
   */
  new TemplateTable({
    tableTemplate: _.template(document.getElementById('table-template1').innerHTML),
    tableContainer: document.getElementById('table-container1'),
    data: {
      title: 'Сгенерированная таблица',
      users: [
        {name: "Вася", age: 10},
        {name: "Петя", age: 15},
        {name: "Женя", age: 20},
        {name: "Маша", age: 25},
        {name: "Даша", age: 30}
      ]
    }
  }).render();

  /**
   *
   * @type {CustomSelect}
   */
  let animalSelect = new CustomSelect({
    elem: document.getElementById('animal-select')
  });
  /**
   *
   * @type {CustomSelect}
   */
  let foodSelect = new CustomSelect({
    elem: document.getElementById('food-select')
  });

  document.addEventListener('select', function (event) {
    document.getElementById('result').textContent = event.detail.value;
  });

  let classSlider1=new ClassSlider({
    elem:document.getElementById('classSlider1'),
    max:100
  });

  let sliderElem=document.getElementById('classSlider1');
  sliderElem.addEventListener('slide', function(event) {
    document.getElementById('slide-value').innerHTML = event.detail;
  });

  sliderElem.addEventListener('change', function(event) {
    document.getElementById('change-value').innerHTML = event.detail;
  });

  document.getElementById('classSlider1Button').onclick=function(){
    classSlider1.setValue(50);
    //classSlider1.dispatchChangeEvent(50);
  };



});
