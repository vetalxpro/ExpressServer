let nav = document.createElement('div');
nav.innerHTML = 'Наверх';
nav.style.position='fixed';
nav.style.top='5px';
nav.style.right='5px';
nav.style.cursor='pointer';
nav.style.background='green';
nav.style.color='white';
nav.style.padding='10px';
nav.style.zIndex=9999;
nav.style.borderRadius='4px';
nav.style.marginRight='-80px';
nav.style.transition='margin-right 800ms';

window.onscroll=function(){
	if(pageYOffset>document.documentElement.clientHeight*1.5){
		nav.style.marginRight='';
	}else{
		nav.style.marginRight='-80px';
	}
}

nav.onclick=function(){
	window.scrollTo(0,0);
}
document.body.appendChild(nav);