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

  function rangeSelect(target){
  	let startElement = lastClickedLi || markList.children[0];
  	let isLastClickedBefore = startElement.compareDocumentPosition(target) & 4;
  	if(isLastClickedBefore){
  		for(let elem = startElement;elem!=target;elem=elem.nextElementSibling){
  			elem.classList.add('selected');
  		}
  	}else{
  		for(let elem = startElement;elem!=target;elem=elem.previousElementSibling){
  			elem.classList.add('selected');
  		}
  	}
  	target.classList.add('selected');
  }


// =============================================

  let tree = document.getElementById('tree');

  tree.addEventListener('click',function(event){
  	let target = event.target;
  	if(!isOverLiTitle(event,target)) return;

		let childUl = target.getElementsByTagName('ul')[0];
		if(!childUl) return;

		childUl.style.display=childUl.style.display ? '' : 'none';

  });

  function isOverLiTitle(event,li){

  	let titleWrapper = document.createElement('span');
  	let titleTextNode = li.firstChild;
  	li.insertBefore(titleWrapper,titleTextNode);
  	titleWrapper.appendChild(titleTextNode);

  	let isClickOnTitle = (document.elementFromPoint(event.clientX,event.clientY) == titleWrapper);

  	titleWrapper.removeChild(titleWrapper.firstChild);
  	li.replaceChild(titleTextNode,titleWrapper);

  	return isClickOnTitle;


  }

// ===============================


	document.body.oncopy=function(event){
		event.preventDefault();
	}
	// elem.onmousedown = elem.onselectstart = function() {
 //  	return false;
	// };


	let table = document.getElementById('table');
	let currentElement = null;

	table.onmouseover = function(event){
		if(currentElement) return;

		let target = event.target;
		while(target!=table){
			if(target.nodeName=='TD')break;
			target=target.parentNode;
		}
		if(target==table)return;

		currentElement = target;
		target.style.background='black';
		target.style.color='white';


	};

	table.onmouseout=function(event){
		if(!currentElement)return;
		let relatedTarget = event.relatedTarget;
		// console.log(relatedTarget);
		if(relatedTarget){
			while(relatedTarget){
				if(relatedTarget==currentElement)return;
				relatedTarget = relatedTarget.parentNode;
			}
		}
		currentElement.style.background = '';
		currentElement.style.color='';
		currentElement=null;
	};


	let showingTooltip=null;
	document.onmouseover=function(event){
		let target=event.target;
		let tooltipText;
		while(target!=document){
			tooltipText=target.dataset.tooltip;
			if(tooltipText)break;
			target=target.parentNode;
		}
		if(!tooltipText)return;
		showingTooltip=showTooltip(target,tooltipText);
	}
	document.onmouseout=function(event){
		if(showingTooltip){
			// console.log('ttt');
			document.body.removeChild(showingTooltip);
			showingTooltip=null;
		}
	}

	function showTooltip(targetElement,text){
		let tooltipElement=document.createElement('div');
		tooltipElement.classList.add('tooltip');
		tooltipElement.innerHTML=text;
		document.body.appendChild(tooltipElement);

		let targetCoords = targetElement.getBoundingClientRect();

		let left = targetCoords.left+(targetElement.offsetWidth-tooltipElement.offsetWidth)/2;
		if(left<0)left=0;

		let top = targetCoords.top-tooltipElement.offsetHeight-5;
		if(top<0)top=targetCoords.bottom+5;

		tooltipElement.style.top=top+'px';
		tooltipElement.style.left=left+'px';

		return tooltipElement;
	}

	let clockStatus = document.getElementById('clock-status');
	let clock=document.getElementById('clock');
	let tooltip = document.createElement('div');
	tooltip.classList.add('tooltip');
	tooltip.innerHTML='test';
	function HoverIntent(options){
		var elem = options.elem;
		var over = options.over;
		var out = options.out;
		var start = false;

		elem.onmouseenter=function(event){
			let target = event.target;
			if(event.relatedTarget.nodeName=='BODY')start=false;
			setTimeout(function(){
				if(!start && document.body.lastElementChild!=tooltip){
					over.call(target);
					start=true;
				}
			},1000);
		};
		elem.onmouseleave=function(event){
			if(document.body.lastElementChild==tooltip){
				start=false;
				out();
			}else{
				start=true;
			}
		}
	}

	new HoverIntent({
		elem:clock,
		over:function(){
			tooltip.style.left=this.getBoundingClientRect().left + 'px';
			tooltip.style.top=this.getBoundingClientRect().bottom+5+'px';
			document.body.appendChild(tooltip);
		},
		out:function(){
			document.body.removeChild(tooltip);
		}
	});


// ==============================ball
	let ball = document.getElementById('ball');
	console.log(ball);
	ball.onmousedown=function(event){
		ball.style.position='absolute';
		ball.style.zIndex=1000;
		let shiftX = event.pageX-getCoords(ball).left;
		let shiftY = event.pageY-getCoords(ball).top;
		moveAt(event);
		document.body.appendChild(ball);
	
		function moveAt(event){
			ball.style.left=event.pageX -shiftX+'px';
			ball.style.top=event.pageY-shiftY+'px';

		}
		document.onmousemove=function(event){
			moveAt(event);
		}

		ball.onmouseup=function(){
			document.onmousemove=null;
			ball.onmouseup=null;
		}

		function getCoords(elem){
			let coords = elem.getBoundingClientRect();
			return {
				top:coords.top+pageYOffset,
				left:coords.left+pageXOffset
			};
		}

	}


	ball.ondragstart = function(event){
		return false;
	}





}



function mouselog(event){
		text.value+='\n'+event.type+' target: '+event.target.className;
		text.scrollTop=text.scrollHeight;
	}
function mouselog1(event){
	text1.value+='\n'+event.type+' target: '+event.target.className;
	text1.scrollTop=text1.scrollHeight;
}