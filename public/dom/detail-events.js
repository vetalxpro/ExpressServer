'use strict';

function start() {


  // =======================================

  let markList = document.getElementById('mark-list');
  let lastClickedLi = null;

  markList.addEventListener('mousedown', function(event) {
    event.preventDefault();
  });

  markList.addEventListener('click', function(event) {
    let target = event.target;

    if (target.nodeName != 'LI') return;

    if (event.ctrlKey) {
      multiSelect(target);

    } else if (event.shiftKey) {
      rangeSelect(target);

    } else {
      singleSelect(target);
    }

    lastClickedLi = target;

  });

  function singleSelect(target) {
    deselectAllLi(markList);
    target.classList.add('selected');
  }

  function deselectAllLi(parent) {
    for (let i = 0; i < parent.children.length; i++) {
      parent.children[i].classList.remove('selected');
    }
  }

  function multiSelect(target) {
    target.classList.toggle('selected');
  }

  function rangeSelect(target) {
    let startElement = lastClickedLi || markList.children[0];
    let isLastClickedBefore = startElement.compareDocumentPosition(target) & 4;
    if (isLastClickedBefore) {
      for (let elem = startElement; elem != target; elem = elem.nextElementSibling) {
        elem.classList.add('selected');
      }
    } else {
      for (let elem = startElement; elem != target; elem = elem.previousElementSibling) {
        elem.classList.add('selected');
      }
    }
    target.classList.add('selected');
  }


  // =============================================

  let tree = document.getElementById('tree');

  tree.addEventListener('click', function(event) {
    let target = event.target;
    if (!isOverLiTitle(event, target)) return;

    let childUl = target.getElementsByTagName('ul')[0];
    if (!childUl) return;

    childUl.style.display = childUl.style.display ? '' : 'none';

  });

  function isOverLiTitle(event, li) {

    let titleWrapper = document.createElement('span');
    let titleTextNode = li.firstChild;
    li.insertBefore(titleWrapper, titleTextNode);
    titleWrapper.appendChild(titleTextNode);

    let isClickOnTitle = (document.elementFromPoint(event.clientX, event.clientY) == titleWrapper);

    titleWrapper.removeChild(titleWrapper.firstChild);
    li.replaceChild(titleTextNode, titleWrapper);

    return isClickOnTitle;


  }

  // ===============================


  document.body.oncopy = function(event) {
      event.preventDefault();
    }
    // elem.onmousedown = elem.onselectstart = function() {
    //  	return false;
    // };


  let table = document.getElementById('table');
  let currentElement = null;

  table.onmouseover = function(event) {
    if (currentElement) return;

    let target = event.target;
    while (target != table) {
      if (target.nodeName == 'TD') break;
      target = target.parentNode;
    }
    if (target == table) return;

    currentElement = target;
    target.style.background = 'black';
    target.style.color = 'white';


  };

  table.onmouseout = function(event) {
    if (!currentElement) return;
    let relatedTarget = event.relatedTarget;
    // console.log(relatedTarget);
    if (relatedTarget) {
      while (relatedTarget) {
        if (relatedTarget == currentElement) return;
        relatedTarget = relatedTarget.parentNode;
      }
    }
    currentElement.style.background = '';
    currentElement.style.color = '';
    currentElement = null;
  };


  let showingTooltip = null;
  document.onmouseover = function(event) {
    let target = event.target;
    let tooltipText;
    while (target != document) {
      tooltipText = target.dataset.tooltip;
      if (tooltipText) break;
      target = target.parentNode;
    }
    if (!tooltipText) return;
    showingTooltip = showTooltip(target, tooltipText);
  }
  document.onmouseout = function(event) {
    if (showingTooltip) {
      // console.log('ttt');
      document.body.removeChild(showingTooltip);
      showingTooltip = null;
    }
  }

  function showTooltip(targetElement, text) {
    let tooltipElement = document.createElement('div');
    tooltipElement.classList.add('tooltip');
    tooltipElement.innerHTML = text;
    document.body.appendChild(tooltipElement);

    let targetCoords = targetElement.getBoundingClientRect();

    let left = targetCoords.left + (targetElement.offsetWidth - tooltipElement.offsetWidth) / 2;
    if (left < 0) left = 0;

    let top = targetCoords.top - tooltipElement.offsetHeight - 5;
    if (top < 0) top = targetCoords.bottom + 5;

    tooltipElement.style.top = top + 'px';
    tooltipElement.style.left = left + 'px';

    return tooltipElement;
  }

  let clockStatus = document.getElementById('clock-status');
  let clock = document.getElementById('clock');
  let tooltip = document.createElement('div');
  tooltip.classList.add('tooltip');
  tooltip.innerHTML = 'test';

  function HoverIntent(options) {
    var elem = options.elem;
    var over = options.over;
    var out = options.out;
    var start = false;

    elem.onmouseenter = function(event) {
      let target = event.target;
      if (event.relatedTarget.nodeName == 'BODY') start = false;
      setTimeout(function() {
        if (!start && document.body.lastElementChild != tooltip) {
          over.call(target);
          start = true;
        }
      }, 1000);
    };
    elem.onmouseleave = function(event) {
      if (document.body.lastElementChild == tooltip) {
        start = false;
        out();
      } else {
        start = true;
      }
    }
  }

  new HoverIntent({
    elem: clock,
    over: function() {
      tooltip.style.left = this.getBoundingClientRect().left + 'px';
      tooltip.style.top = this.getBoundingClientRect().bottom + 5 + 'px';
      document.body.appendChild(tooltip);
    },
    out: function() {
      document.body.removeChild(tooltip);
    }
  });


  // ==============================ball
  let ball = document.getElementById('ball');
  let testInput = document.getElementById('test-input');
  testInput.value = 'test';
  // console.log(ball);
  ball.onmousedown = function(event) {
    ball.style.position = 'absolute';
    ball.style.zIndex = 1000;
    let shiftX = event.pageX - getCoords(ball).left;
    let shiftY = event.pageY - getCoords(ball).top;
    testInput.value = shiftY + ' : ' + shiftX;
    moveAt(event);
    document.body.appendChild(ball);

    function moveAt(event) {
      let left = event.pageX - shiftX;
      let top = event.pageY - shiftY;
      if (left < 0) left = 0;


      ball.style.left = left + 'px';
      ball.style.top = top + 'px';
      testInput.value = parseInt(ball.style.left) + ' : ' + parseInt(ball.style.top);

    }
    document.onmousemove = function(event) {
      moveAt(event);
    }

    ball.onmouseup = function() {
      document.onmousemove = null;
      ball.onmouseup = null;
    }

    function getCoords(elem) {
      let coords = elem.getBoundingClientRect();
      return {
        top: coords.top + pageYOffset,
        left: coords.left + pageXOffset
      };
    }

  }


  ball.ondragstart = function(event) {
    return false;
  }



  let slider = document.getElementById('slider');
  let sliderThumbler = slider.children[0];


  slider.addEventListener('click', sliderClick);

  function sliderClick(event) {
    let left = event.pageX - slider.getBoundingClientRect().left - sliderThumbler.offsetWidth / 2;
    left = checkAndGetLeft(left, slider, sliderThumbler);
    sliderThumbler.style.left = left + 'px';
    testInput.value = left;
  }



  sliderThumbler.onmousedown = function(event) {
    slider.removeEventListener('click', sliderClick);
    sliderThumbler.style.transition = 'none';
    let thumblerCoordsLeft = getCoords(sliderThumbler).left;
    let shiftX = event.pageX - thumblerCoordsLeft;
    let sliderCoordsLeft = getCoords(slider).left;

    document.addEventListener('mousemove', move);

    function move(event) {
      let left = event.pageX - shiftX - sliderCoordsLeft;
      left = checkAndGetLeft(left, slider, sliderThumbler);
      sliderThumbler.style.left = left + 'px';
      testInput.value = left;
    }

    document.onmouseup = function(event) {
      document.removeEventListener('mousemove', move);
      sliderThumbler.onmouseup = null;
      setTimeout(function() {
        slider.addEventListener('click', sliderClick);
        sliderThumbler.style.transition = 'left 500ms';
      }, 10);
    }

    function getCoords(elem) {
      let coords = elem.getBoundingClientRect();
      return {
        top: coords.top + pageYOffset,
        left: coords.left + pageXOffset
      }
    }
    sliderThumbler.ondragstart = function(event) {
      event.preventDefault();
    }


  }

  function checkAndGetLeft(left, element, elementThumbler) {
    if (left < 0) return 0;
    let maxRight = element.offsetWidth - elementThumbler.offsetWidth;
    if (left > maxRight) return maxRight;
    return left;

  }




  field.addEventListener('mousedown', function(event) {
    var target = event.target;
    if (!target.classList.contains('draggable')) return;
    if(event.which!=1)return;
    event.preventDefault();

    var shiftX, shiftY;

    startDrag(event.clientX, event.clientY);

    target.ondragstart = function() {
      return false;
    }

    document.onmousemove = function(event) {
      moveAt(event.clientX, event.clientY);
    }

    document.onmouseup = function() {
      finishDrag();
    }


    function startDrag(clientX, clientY) {
      shiftX = clientX - target.getBoundingClientRect().left;
      shiftY = clientY - target.getBoundingClientRect().top;
      target.style.position = 'fixed';
      moveAt(clientX, clientY);
    }


    function finishDrag() {
      target.style.left = target.getBoundingClientRect().left + pageXOffset + 'px';
      target.style.top = target.getBoundingClientRect().top + pageYOffset + 'px';
      target.style.position = 'absolute';
      document.onmousemove = null;
      document.onmouseup = null;
    }


    function moveAt(clientX, clientY) {
      let newX = clientX - shiftX;
      let newY = clientY - shiftY;

      let newBottom = newY + target.offsetHeight;
      if (newBottom > document.documentElement.clientHeight) {
        let documentBottom = document.documentElement.getBoundingClientRect().bottom;
        let scrollY = Math.min(documentBottom - newBottom, 10);
        if (scrollY < 0) scrollY = 0;
        window.scrollBy(0, scrollY);
        newY = Math.min(newY, document.documentElement.clientHeight - target.offsetHeight);
      }

      if(newY<0){
      	let scrollY=Math.min(-newY,10);
      	if(scrollY<0)scrollY=0;
      	window.scrollBy(0,-scrollY);
      	newY=Math.max(newY,0);
      }

      if(newX<0)newX=0;
      if(newX>document.documentElement.clientWidth-target.offsetWidth){
      	newX=document.documentElement.clientWidth-target.offsetWidth;
      }




      target.style.left = newX + 'px';
      target.style.top = newY + 'px';
    }









  });



  var dragObject={};
  let browserContainer=document.getElementById('browser-container');
  document.addEventListener('mousedown',function(event){
  // browserContainer.onmousedown=function(event){
  	if(event.which!=1)return;
  	let element = event.target.closest('.draggable');
  	if(!element)return;
  	dragObject.elem=element;
  	// console.log(dragObject);

  	dragObject.downX=event.pageX;
  	dragObject.downY=event.pageY;

  	document.onmousemove=function(event){
  		event.preventDefault();
  		if(!dragObject.elem)return;
  		if(!dragObject.avatar){
  			var moveX=event.pageX-dragObject.downX;
  			var moveY=event.pageY-dragObject.downY;

  			if(Math.abs(moveX)<3 && Math.abs(moveY)<3){
  				return;
  			}

  			dragObject.avatar=createAvatar(event);
  			if(!dragObject.avatar){
  				dragObject={};
  				return;
  			}

  			var coords=getCoords(dragObject.avatar);
  			dragObject.shiftX=dragObject.downX-coords.left;
  			dragObject.shiftY=dragObject.downY-coords.top;

  			startDrag(event);

  		}
  		dragObject.avatar.style.left=event.pageX-dragObject.shiftX+'px';
  		dragObject.avatar.style.top=event.pageY-dragObject.shiftY+'px';

  		function createAvatar(event){
  			var avatar=dragObject.elem;
  			var old={
  				parent:avatar.parentNode,
  				nextSibling:avatar.nextSibling,
  				position:avatar.position||'',
  				left:avatar.left||'',
  				top:avatar.top||'',
  				zIndex:avatar.zIndex||''
  			};

  			avatar.rollback=function(event){
  				old.parent.insertBefore(avatar,old.nextSibling);
  				avatar.style.position=old.position;
  				avatar.style.left=old.left;
  				avatar.style.top=old.top;
  				avatar.style.zIndex=old.zIndex;

  			};

  			return avatar;

  		}

  		function startDrag(event){
  			var avatar=dragObject.avatar;
  			document.body.appendChild(avatar);
  			avatar.style.zIndex=9999;
  			avatar.style.position='absolute';
  		}

  	}


  	document.onmouseup=function(event){
  		if(dragObject.avatar){
  			finishDrag(event);
  			dragObject.avatar.rollback(event);
  			dragObject.avatar.hidden=false;
  		}

  		dragObject={};
  	}


  	function finishDrag(event){
  		var dropElem=findDroppable(event);
  		if(dropElem){
  			dropElem.classList.add('computer-smile');
  			dragObject.avatar.hidden=true;
  			setTimeout(()=>{
  				dropElem.classList.remove('computer-smile');

  			},800);

  		}else{
  			dragObject.avatar.rollback(event);
  		}
  	}

  	function findDroppable(event){
  		dragObject.avatar.hidden=true;
  		var elem=document.elementFromPoint(event.clientX,event.clientY);
  		dragObject.avatar.hidden=false;
  		if(elem==null){
  			return null;
  		}
  		return elem.closest('.droppable');
  	}

  	function getCoords(elem){
  		let box = elem.getBoundingClientRect();
  		return {
  			top:box.top+pageYOffset,
  			left:box.left+pageXOffset
  		}
  	}

  });


  let wheelContainer = document.body.querySelector('.computer');
  wheelContainer.onwheel =function(event){
  	event.preventDefault();
  	let deltaY=event.deltaY;
  	wheelContainer.innerHTML = +wheelContainer.innerHTML+deltaY;
  }
  let scaleDiv = document.querySelector('.scale');
  scaleDiv.scale = 1;
  // console.dir(scaleDiv);
  scaleDiv.onwheel=function(event){
  	event.preventDefault();
  	let delta = event.deltaY;
  	if(delta>0){
  		scaleDiv.scale +=0.05;
  	}else{
  		scaleDiv.scale -=0.05;
  	}
  	scaleDiv.style.transform= `scale(${scaleDiv.scale})`;
  }

  document.onwheel=function(event){
  	if(event.target.tagName!='TEXTAREA')return;
  	let target = event.target;
  	let delta = event.deltaY;
  	if(delta<0 && target.scrollTop==0){
  		event.preventDefault();
  	}
  	if(delta>0 && target.scrollHeight-target.clientHeight-target.scrollTop==0){
  		event.preventDefault();
  	}
  }
  let showScroll = document.getElementById('showScroll');
  
  window.onscroll=function(event){
  	let scrolled = pageYOffset;
  	showScroll.style.fontWeight='bold';
  	showScroll.innerHTML = scrolled+'px';

  }



}



function mouselog(event) {
  text.value += '\n' + event.type + ' target: ' + event.target.className;
  text.scrollTop = text.scrollHeight;
}

function mouselog1(event) {
  text1.value += '\n' + event.type + ' target: ' + event.target.className;
  text1.scrollTop = text1.scrollHeight;
}
