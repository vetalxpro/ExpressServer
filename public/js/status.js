

document.onmousedown = function(event){
	event.preventDefault();
	if(event.target.nodeName!='IMG' || !event.target.src) return;
	var target = event.target;
	let shiftX=event.pageX -(target.getBoundingClientRect().left+pageXOffset);
	let shiftY=event.pageY -(target.getBoundingClientRect().top+pageYOffset);
	target.style.position = 'fixed';
	target.style.zIndex=1000;
	document.body.appendChild(target);
	moveAt(event.pageX,event.pageY);


	document.onmousemove = function(event){
		moveAt(event.pageX,event.pageY);
	}

	function moveAt(pageX,pageY){
		let left = pageX - shiftX;
		let top = pageY - shiftY;
		target.style.left=left+'px';
		target.style.top=top+'px';
	}
	target.ondragstart=function(){
		return false;
	}
	// target.onclick=function(){
	// 	return false;
	// }

	document.onmouseup=function(){
		document.onmousemove=null;
		target.onmouseup=null;
		//target.onclick=null;
		target.ondragstart=null;
	}
};





// =========================
let timerInterval;
function start(interval){
	let iconsArr = document.querySelectorAll('img[src^="icons/o"]');
	let online = 'icons/online.png';
	let offline = 'icons/offline.png';

	timerInterval=setInterval(function(){
		for(let i=0;i<iconsArr.length;i++){
			changeStatus(iconsArr[i]);
		}
	},interval);

	function changeStatus(element){
		let status = random();
		if(!status){
			element.src=offline;
		}else{
			element.src=online;
		}
	}

	function random(){
		var rand = 0 - 0.5 + Math.random()*(1-0+1);
		rand=Math.round(rand);
		return rand;
	}
}
function stop(){
	clearInterval(timerInterval);
}
start(1000);
