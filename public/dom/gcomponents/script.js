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




  function Slider(options){
    let elem=options.elem;
    let toggle=elem.querySelector('.slider-toggle');
    toggle.onmousedown=function(event){
      let shiftX=event.offsetX;
      moveAt(event.pageX);

      function moveAt(pageX){
        toggle.style.left=pageX-shiftX-toggle.getBoundingClientRect().left+'px';
      }
      document.onmousemove=function(event){
        moveAt(event.pageX);
      };
    };
  }

  let slider = new Slider({
    elem:document.getElementById('slider-container')
  });






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




function Clock(options){
  let elem=options.elem;
  let timerId;
  let date;

  function render(){
    date=new Date();

    elem.querySelector('.hours').textContent=('0'+date.getHours()).slice(-2);
    elem.querySelector('.minutes').textContent=('0'+date.getMinutes()).slice(-2);
    elem.querySelector('.seconds').textContent=('0'+date.getSeconds()).slice(-2);
  }

  function start(){
    render();
    timerId=setInterval(render,1000);
  }
  function stop(){
    clearInterval(timerId);
  }
  function showAlert(){
    alert(date.toLocaleTimeString());
  }

  this.start=start;
  this.stop=stop;
  this.showAlert=showAlert;
}

