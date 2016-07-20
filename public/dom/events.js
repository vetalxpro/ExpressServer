'use strict';

function start() {
  // console.log('test');
  let button1 = document.getElementById('click_me');
  button1.addEventListener('click', clickMeFunc);
  button1.addEventListener('contextmenu', clearLog);
  // button1.removeEventListener('click',clickMeFunc);


  hider.onclick = function() {
    document.getElementById('text').classList.toggle('textClass');
  };

  itSelfHider.onclick = function() {
    this.style.display = 'none';
    setTimeout(() => this.style.display = 'block', 2000);
  };

  function clickMeFunc(event) {
    console.log(event.target.value);
  }

  function clearLog() {
    console.clear();
  }

  let menuToggle = document.body.querySelector('#sweets .title');
  menuToggle.onclick = function() {
    document.body.querySelector('#sweets').classList.toggle('open');
  };

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
  //    elem.appendChild(target.parentNode.cloneNode(true));
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
  };




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
    };
  }

  carouselCreate();


  // ==================================================


  let area1 = document.getElementById('area1');
  area1.onclick = function(e) {
    this.value += '\n' + e.type;
    this.scrollTop = this.scrollHeight;
  };
  area1.onmousedown = function(e) {
    // area1.focus();
    setTimeout(() => area1.focus(), 2000);
    this.value += '\n' + e.type;
  };
  area1.onmouseup = function(e) {
    this.value += '\n' + e.type;
  };
  area1.onfocus = function(e) {
    this.value += '\n' + e.type;
    //console.log(e);
  };

  let eventButton = document.getElementById('event-button');
  eventButton.onclick = function(event) {
    console.log(event.type + '  ' + event.currentTarget.outerHTML);
    console.log(this);
    console.log(event.clientX + ':' + event.clientY);
  };

  function football() {
    let ball = document.getElementById('ball');
    let field = ball.parentNode;

    field.onclick = function(event) {
      ball.style.marginLeft = '0';
      ball.style.marginTop = '0';
      let fieldCoords = this.getBoundingClientRect();
      let fieldInnerCoords = {
        top: fieldCoords.top + field.clientTop,
        left: fieldCoords.left + field.clientLeft
      };
      let ballCoords = {
        top: event.clientY - fieldInnerCoords.top - ball.clientHeight / 2,
        left: event.clientX - fieldInnerCoords.left - ball.clientWidth / 2
      };
      // console.log(ballCoords);

      if (ballCoords.top < 0) ballCoords.top = 0;
      if (ballCoords.left < 0) ballCoords.left = 0;
      if (ballCoords.top > field.clientHeight - ball.clientHeight) {
        ballCoords.top = field.clientHeight - ball.clientHeight;
      }
      if (ballCoords.left > field.clientWidth - ball.clientWidth) {
        ballCoords.left = field.clientWidth - ball.clientWidth;
      }
      ball.style.top = ballCoords.top + 'px';
      ball.style.left = ballCoords.left + 'px';
      // console.log(ball.style.left+' '+ball.style.top);
    };
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
  };

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

  function DelegButtons(elem) {
    this.save = function() {
      alert('Save');
    };
    this.load = function() {
      alert('Load');
    };
    this.search = function() {
      alert('Search');
    };
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
  new DelegButtons(delegButtonsContainer);

  // =================================

  let animalTreeContainer = document.getElementById('animal-tree-container');


  let animalUl = animalTreeContainer.getElementsByTagName('ul')[0];
  let lis = animalUl.getElementsByTagName('li');
  for (let i = 0; i < lis.length; i++) {
    let li = lis[i];
    let span = document.createElement('span');
    li.insertBefore(span, li.firstChild);
    span.appendChild(span.nextSibling);

  }

  animalTreeContainer.onclick = function(event) {
    let target = event.target;
    if (target.tagName != 'SPAN') return;
    let li = target.parentNode;
    let childrenContainer = li.getElementsByTagName('ul')[0];
    if (!childrenContainer) return;
    childrenContainer.hidden = !childrenContainer.hidden;
    target.classList.toggle('mark');
  };

  // ============================sort table

  let ageTable = document.getElementById('grid');
  ageTable.onclick = function(event) {
    let target = event.target;
    let comparator;
    let cellNumber = target.cellIndex;
    let tbody = ageTable.tBodies[0];
    let tbodyRowsArr = [];

    if (target.tagName != 'TH') return;

    if (!target.dataset.sort) {
      target.setAttribute('data-sort', 'a-z');
    }

    for (let i = 0; i < ageTable.tHead.rows[0].cells.length; i++) {
      ageTable.tHead.rows[0].cells[i].classList.remove('a-z', 'z-a');
    }


    for (let i = 0; i < tbody.rows.length; i++) {
      let rows = tbody.rows;
      tbodyRowsArr.push({
        row: rows[i],
        value: rows[i].children[cellNumber].innerHTML
      });
    }

    switch (target.dataset.sort) {
      case 'a-z':
        target.setAttribute('data-sort', 'z-a');
        target.classList.add('a-z');
        if (target.dataset.type == 'number') {
          comparator = function(rowA, rowB) {
            return rowA.value - rowB.value;
          };
        } else {
          comparator = function(rowA, rowB) {
            if (rowA.value > rowB.value) return 1;
            return -1;
          };
        }
        break;
      case 'z-a':
        target.classList.add('z-a');
        target.setAttribute('data-sort', 'a-z');
        if (target.dataset.type == 'number') {
          comparator = function(rowA, rowB) {
            return rowB.value - rowA.value;
          };
        } else {
          comparator = function(rowA, rowB) {
            if (rowA.value > rowB.value) return -1;
            return 1;
          };
        }
        break;
    }

    tbodyRowsArr.sort(comparator);

    ageTable.removeChild(tbody);

    for (let i = 0; i < tbodyRowsArr.length; i++) {
      tbody.appendChild(tbodyRowsArr[i].row);
    }

    ageTable.appendChild(tbody);

  };

  document.onclick = function(event) {
    let target = event.target;
    if (target.hasAttribute('data-counter')) {
      target.innerHTML++;
    }
    if (target.hasAttribute('data-toggle-id')) {
      let id = target.dataset.toggleId;
      if (!id) return;
      let elem = document.getElementById(id);
      elem.hidden = !elem.hidden;
    }
  };
  document.onmouseover = function(event) {
    let target = event.target;
    if (target.hasAttribute('data-tooltip')) {
      let targetCoords = target.getBoundingClientRect();
      let tooltip = target.dataset.tooltip;
      let div = document.createElement('div');
      div.classList.add('tooltip');
      div.innerHTML = tooltip;
      document.body.appendChild(div);
      if (targetCoords.top < div.offsetHeight) {
        div.style.top = targetCoords.top + targetCoords.height + 5 + 'px';
      } else {
        div.style.top = targetCoords.top - div.offsetHeight - 5 + 'px';
      }
      // console.log(div.clientTop);
      if (targetCoords.left < 0) {
        div.style.left = '0';
        return;
      }
      div.style.left = targetCoords.left - 5 + 'px';
    }

  };
  document.onmouseout = function(event) {
    let target = event.target;
    if (target.hasAttribute('data-tooltip')) {
      let tooltipElement = document.getElementsByClassName('tooltip')[0];
      document.body.removeChild(tooltipElement);
    }
  }

  let menuLinks = document.getElementById('menu-links');
  menuLinks.addEventListener('click', function(event) {
    if (event.target.tagName != 'A') return;
    alert(event.target.getAttribute('href'));
    event.preventDefault();
  });

  let contents = document.getElementById('contents');
  contents.addEventListener('click',function(event){
  	let target = event.target;
  	while(target!=contents){
  		if(target.tagName=='A'){
  			if(!confirm(`Перейти на ${target.getAttribute('href')} ?`)) event.preventDefault();
  			return;
  		}
  		target = target.parentNode;
  	}

  });


  let galleryContainer = document.getElementById('gallery-container');
  galleryContainer.addEventListener('click',function(event){
  	let target = event.target;
  	while(target!=galleryContainer){
	  	if(target.nodeName=='A'){
	  		event.preventDefault();
	  		var href = target.getAttribute('href');
	  		let image = galleryContainer.querySelector('.big-image');
	  		image.src = href;
  		}
  		target = target.parentNode;
  	}
  });

  var imgs = galleryContainer.querySelectorAll('a>img');
  for(let i=0;i<imgs.length;i++){
  	let url = imgs[i].parentNode.href;
  	let img = document.createElement('img');
  	img.href = url;
  }

  // let rabbit = document.getElementById('rabbit');
  // function hide(){
  // 	let event = new Event('hide',{cancelable:true});

  // 	if(!rabbit.dispatchEvent(event)){
  // 		console.log('Action was canceled');
  // 	}else{
  // 		rabbit.hidden=true;
  // 	}
  // }
  // rabbit.addEventListener('hide',function(event){
  // 	if(confirm('Call preventDefault?')){
  // 		event.preventDefault();
  // 	}
  // });

  // setTimeout(hide,2000);
  // let hello = document.getElementById('hello-script');
  // document.addEventListener('hello',function(event){
  // 	console.log('hello');
  // 	event.preventDefault();
  // },false);

  // let event = new Event('hello',{bubbles:true,cancelable:true});
  // if(hello.dispatchEvent(event)===false){
  // 	console.log('Action canceled');
  // }


//   UIEvent
// FocusEvent
// MouseEvent
// WheelEvent
// KeyboardEvent
// CompositionEvent




}
