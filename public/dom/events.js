function start() {
  // console.log('test');
  let button1 = document.getElementById('click_me');
  button1.addEventListener('click', clickMeFunc);
  button1.addEventListener('contextmenu', clearLog);
  // button1.removeEventListener('click',clickMeFunc);
  hider.onclick = function() {
    document.getElementById('text').classList.toggle('textClass');
  }

  itSelfHider.onclick = function() {
    this.style.display = 'none'
    setTimeout(() => this.style.display = 'block', 2000);
  }

  function clickMeFunc() {
    console.log(this.value);
  }

  function clearLog() {
    console.clear();
  }

  let menuToggle = document.body.querySelector('#sweets .title');
  menuToggle.onclick = function() {
    document.body.querySelector('#sweets').classList.toggle('open');
  }

  // let removeButtons = document.body.querySelectorAll('#message-container .remove-button');
  // for (let i = 0; i < removeButtons.length; i++) {
  //   removeButtons[i].onclick = function() {
  //     this.parentNode.parentNode.removeChild(this.parentNode);
  //   }
  // }
  let messageContainer = document.getElementById('message-container');

  // function mesContainer(elem) {
  //   this.remove = function(target) {
  //     elem.removeChild(target.parentNode);
  //   }
  //   this.copy = function(target){
  //   	elem.appendChild(target.parentNode.cloneNode(true));
  //   }
  //   let self = this;

  //   elem.onclick = function(event) {
  //     let target = event.target;
  //     let action = target.dataset.action;
  //     if (action) {
  //       self[action](target);
  //     };
  //   }
  // }
  // new mesContainer(messageContainer);



  messageContainer.onclick = function(event) {
    let target = event.target;
    while (target != this) {
      if (target.dataset.action == 'remove') {
        this.removeChild(target.parentNode);
        return;
      }
      target = target.parentNode;
    }
  }




  // ===========================================carousel
  function carouselCreate() {
    let width = 130;
    let count = 1;
    let carousel = document.getElementById('carousel-container');
    let list = carousel.querySelector('ul');
    let listElems = list.querySelectorAll('li');
    let position = 0;

    carousel.querySelector('.carousel-arrow-left').onclick = function() {
      // console.log(position);
      position = Math.min(position + width * count, 0);
      // console.log(position);
      list.style.marginLeft = position + 'px';
    };

    carousel.querySelector('.carousel-arrow-right').onclick = function() {
      // console.log(position);
      // console.log(position-width*count);
      position = Math.max(position - width * count, -width * (listElems.length - 3 * count));
      // console.log(position);
      list.style.marginLeft = position + 'px';
    }
  }

  carouselCreate();


  // ==================================================


  let area1 = document.getElementById('area1');
  area1.onclick = function(e) {
    this.value += '\n' + e.type;
    this.scrollTop = this.scrollHeight;
  }
  area1.onmousedown = function(e) {
    // area1.focus();
    setTimeout(() => area1.focus(), 2000);
    this.value += '\n' + e.type;
  }
  area1.onmouseup = function(e) {
    this.value += '\n' + e.type;
  }
  area1.onfocus = function(e) {
    this.value += '\n' + e.type;
    //console.log(e);
  }

  let eventButton = document.getElementById('event-button');
  eventButton.onclick = function(event) {
    console.log(event.type + '  ' + event.currentTarget.outerHTML);
    console.log(this);
    console.log(event.clientX + ':' + event.clientY);
  }

  function football() {
    let ball = document.getElementById('ball');
    let field = ball.parentNode;

    field.onclick = function(event) {
      ball.style.marginLeft = '0';
      ball.style.marginTop = '0';
      fieldCoords = this.getBoundingClientRect();
      fieldInnerCoords = {
        top: fieldCoords.top + field.clientTop,
        left: fieldCoords.left + field.clientLeft
      }
      let ballCoords = {
          top: event.clientY - fieldInnerCoords.top - ball.clientHeight / 2,
          left: event.clientX - fieldInnerCoords.left - ball.clientWidth / 2
        }
        // console.log(ballCoords);

      if (ballCoords.top < 0) ballCoords.top = 0;
      if (ballCoords.left < 0) ballCoords.left = 0;
      if (ballCoords.top > field.clientHeight - ball.clientHeight) {
        ballCoords.top = field.clientHeight - ball.clientHeight;
      }
      if (ballCoords.left > field.clientWidth - ball.clientWidth) {
        ballCoords.left = field.clientWidth - ball.clientWidth
      }
      ball.style.top = ballCoords.top + 'px';
      ball.style.left = ballCoords.left + 'px';
      // console.log(ball.style.left+' '+ball.style.top);
    }
  }
  football();

  // ============================
  let baguaTable = document.getElementById('bagua-table');
  let baguaSelectedTd;
  baguaTable.onclick = function(event) {
    let target = event.target;
    while (target != this) {
      if (target.tagName == 'TD') {
        highlight(target);
        return;
      }
      target = target.parentNode;
    }
  }

  function highlight(node) {
    // debugger;
    if (baguaSelectedTd == node) {
      baguaSelectedTd.classList.toggle('highlight');
    } else {
      if (baguaSelectedTd) {
        baguaSelectedTd.classList.remove('highlight');
      }
      baguaSelectedTd = node;
      baguaSelectedTd.classList.add('highlight');
    }

  }

  function delegButtons(elem) {
    this.save = function() {
      alert('Save');
    }
    this.load = function() {
      alert('Load');
    }
    this.search = function() {
      alert('Search');
    }
    let self = this;
    elem.onclick = function(event) {
      let target = event.target;
      // let action = target.getAttribute('data-action');
      let action = target.dataset.action;
      if (action) {
        self[action]();
      }
    };
  }
  let delegButtonsContainer = document.getElementById('deleg-buttons-container');
  new delegButtons(delegButtonsContainer);

  // =================================

  let animalTreeContainer=document.getElementById('animal-tree-container');


  let animalUl = animalTreeContainer.getElementsByTagName('ul')[0];
  let lis = animalUl.getElementsByTagName('li');
  for(let i=0;i<lis.length;i++){
  	let li = lis[i];
  	let span = document.createElement('span');
  	li.insertBefore(span,li.firstChild);
  	span.appendChild(span.nextSibling);

  }

  animalTreeContainer.onclick=function(event){
  	let target = event.target;
  	if(target.tagName !='SPAN') return;
  	let li = target.parentNode;
  	let childrenContainer=li.getElementsByTagName('ul')[0];
  	if(!childrenContainer) return;
  	childrenContainer.hidden=!childrenContainer.hidden;
  	target.classList.toggle('mark');
  }


}
