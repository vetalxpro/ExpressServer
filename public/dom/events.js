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

  let removeButtons = document.body.querySelectorAll('#message-container .remove-button');
  for (let i = 0; i < removeButtons.length; i++) {
    removeButtons[i].onclick = function() {
      this.parentNode.parentNode.removeChild(this.parentNode);
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
      position = Math.max(position - width * count, -width * (listElems.length - 3*count));
      // console.log(position);
      list.style.marginLeft = position + 'px';
    }
  }

  carouselCreate();


// ==================================================


	let area1 = document.getElementById('area1');
	area1.onclick=function(e){
		this.value+='\n'+e.type;
		this.scrollTop=this.scrollHeight;
	}
	area1.onmousedown = function(e){
		// area1.focus();
		setTimeout(()=>area1.focus(),2000);
		this.value+='\n'+e.type;
	}
	area1.onmouseup=function(e){
		this.value+='\n'+e.type;
	}
	area1.onfocus = function(e){
		this.value+='\n'+e.type;
		//console.log(e);
	}

	let eventButton = document.getElementById('event-button');
	eventButton.onclick=function(event){
		console.log(event.type+'  '+event.currentTarget.outerHTML);
		console.log(this);
		console.log(event.clientX+':'+event.clientY);
	}

	function football(){
		let ball = document.getElementById('ball');
		let field = ball.parentNode;
		fieldCoords = field.getBoundingClientRect();

		field.onclick=function(event){
			let x = event.clientX-this.offsetLeft-this.clientLeft;
			let y = Math.round(event.clientY-fieldCoords.top+field.scrollTop-field.clientTop);
			console.log(x+' : '+y);
			if(x>180)x=180;
			if(x<20)x=20;
			if(y>130)y=130;
			if(y<20)y=20;
			ball.style.top = y+'px';
			ball.style.left=x+'px';
		}


	}


	football();


}
