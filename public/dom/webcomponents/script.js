document.addEventListener('DOMContentLoaded',function(){
  let elem1=document.getElementById('elem1');
  let elem1Root=elem1.createShadowRoot();
  elem1Root.innerHTML='<h3><content></content></h3><p>another text</p>';

  let elem2=document.getElementById('elem2');
  let tmpl1=document.getElementById('tmpl1');
  let elem2Root=elem2.createShadowRoot();
  elem2Root.appendChild(tmpl1.content.cloneNode(true));

  hello();
  // let timer = link.import.querySelector('time');
  document.getElementById('template-container').appendChild(timer);




});


let MyTimerProto=Object.create(HTMLButtonElement.prototype);
MyTimerProto.tick=function(){
  this.timer++;
  this.innerHTML=this.timer;
};
MyTimerProto.createdCallback=function(){
  this.timer=0;
};
MyTimerProto.attachedCallback=function(){
  setInterval(this.tick.bind(this),1000);
};


document.registerElement('my-timer',{
  prototype:MyTimerProto,
  extends:'button'
});






