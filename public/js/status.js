

document.onmousedown = function(event){
	event.preventDefault();
	if(event.target.nodeName!=='IMG' || !event.target.src){
    return;
  }
	var target = event.target;
	let shiftX=event.pageX -(target.getBoundingClientRect().left+window.pageXOffset);
	let shiftY=event.pageY -(target.getBoundingClientRect().top+window.pageYOffset);
	target.style.position = 'absolute';
	target.style.zIndex=1000;
	document.body.appendChild(target);
	moveAt(event.pageX,event.pageY);


	document.onmousemove = function(event){
		moveAt(event.pageX,event.pageY);
	};

	function moveAt(pageX,pageY){
		let left = pageX - shiftX;
		let top = pageY - shiftY;
		target.style.left=left+'px';
		target.style.top=top+'px';
	}
	target.ondragstart=function(){
		return false;
	};
	// target.onclick=function(){
	// 	return false;
	// }

	document.onmouseup=function(){
		document.onmousemove=null;
		target.onmouseup=null;
		//target.onclick=null;
		target.ondragstart=null;
	};
};





// =========================
let timerInterval;
let iconsArr = document.querySelectorAll('img[src^="icons/o"]');

function start(interval){
	let online = 'icons/online.png';
	let offline = 'icons/offline.png';

	// timerInterval=setInterval(function(){
	// 	for(let i=0;i<iconsArr.length;i++){
	// 		if(iconsArr[i].offsetHeight){
   //      changeStatus(iconsArr[i]);
   //    }
	// 	}
	// },interval);

	function changeStatus(element){
		let status = random();
		if(!status){
			element.src=offline;
		}else{
			element.src=online;
		}
	}

	function random(){
		var rand = Math.random()*10;
		if(rand<5){
      return 0;
    }
		return 1;
	}
  function strange(){
    allOnline();
    for(let i=0;i<iconsArr.length;i++){
      if(iconsArr[i].offsetHeight){
        setDelay(iconsArr[i]);
      }
      if(i===iconsArr.length-1){
        reverse();
      }

    }
  }
  function reverse(){
    for(let i=iconsArr.length-1;i>0;i--){
      if(iconsArr[i].offsetHeight){
        setDelay(iconsArr[i]);
      }
      // console.log(i);
      if(!i){
        strange();
      }

    }
  }
  let delay=100;
  function setDelay(item){
    setTimeout(function(){
      item.src=offline;
    },delay);
    delay+=100;
    setTimeout(function(){
      item.src=online;
    },delay);
  }

  function allOnline(){
    for(let i=0;i<iconsArr.length;i++){
      if(iconsArr[i].offsetHeight){
        iconsArr[i].src=online;
      }
    }
  }
  strange();



}
function stop(){
	clearInterval(timerInterval);
}
function removeElements(elementsArr){
	for(let i=0;i<elementsArr.length;i++){
		setTimeout(function(){
			elementsArr[i].parentNode.removeChild(elementsArr[i]);
		},i*100);
	}
}
start(800);

