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


	var show = null;
	document.onmouseover=function(event){
		let target = event.target;
		while(target!=document){
			var tooltip = target.getAttribute('data-tooltip');
			if(tooltip)break;
			target=target.parentNode;
		}
		if(!tooltip)return;
		console.log(tooltip);
		show = true;
	};
	document.onmouseout=function(event){
		if(show){
			show=false;
		}
	};



}



function mouselog(event){
		text.value+='\n'+event.type+' target: '+event.target.className;
		text.scrollTop=text.scrollHeight;
	}
function mouselog1(event){
	text1.value+='\n'+event.type+' target: '+event.target.className;
	text1.scrollTop=text1.scrollHeight;
}