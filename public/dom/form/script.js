document.addEventListener('DOMContentLoaded', function () {
  console.info('Hi vetalxpro!');

  // console.log(document.forms[0].elements.field.elements.input1);
  let elem = document.forms[0].elements.field.elements.input1;
  // console.log(elem);
  let input2 = document.getElementById('input2');
  if (input2.checked) {
    console.log('checked');
  }
  let select1=document.getElementById('select1');
  select1.value = 'opt3';
  console.log(select1.options);
  
  let select2=document.getElementById('select2');
  for (let i = 0; i < select2.options.length; i++) {
    let option = select2.options[i];
    if (option.selected) {
      console.log(option.text);
    }
  }
  let option = new Option('option 4', 'opt4', true, true);
  select2.appendChild(option);

  let select3 = document.body.querySelectorAll('select')[2];
  let selectedOption = select3.options[select3.selectedIndex];
  console.log(selectedOption.value);
  let newOption = new Option('Classic', 'Classic');
  select3.appendChild(newOption);
  newOption.setAttribute('selected', '');

  let input3=document.getElementById('input3');
  let error=document.getElementById('error');
  input3.onblur = function () {
    if (isNaN(input3.value) || !input3.value) {
      input3.classList.add('error');
      error.innerHTML = ' Ошибка!';
      error.style.color = 'red';
      input3.focus();
    } else {
      input3.classList.remove('error');
      error.innerHTML = ' OK';
      error.style.color = 'green';
    }
  };
  /**
   *
   * @param input
   */
  function showPlaceholder(input) {
    input.classList.add('placeholder');
    input.value = input.dataset.placeholder;
  }

  // ...ваш код для input...
  function inputFocus(input) {
    if (input.value === input.dataset.placeholder) {
      input.value = '';
      input.classList.remove('placeholder');
    }
    let tooltip = document.createElement('div');
    tooltip.innerHTML = input.dataset.placeholder;
    tooltip.classList.add('placeholder-tooltip');
    document.body.appendChild(tooltip);
    tooltip.style.left = input.getBoundingClientRect().left + 'px';
    tooltip.style.top = input.getBoundingClientRect().top - tooltip.offsetHeight + 'px';
  }

  function inputBlur(input) {
    if (input.value === '') {
      showPlaceholder(input);
    }
    document.body.removeChild(document.body.querySelector('.placeholder-tooltip'));
  }


  document.body.addEventListener('focus', function (event) {
    if (event.target.nodeName !== 'INPUT' || !event.target.dataset.placeholder) {
      return;
    }
    inputFocus(event.target);

  }, true);
  document.body.addEventListener('blur', function (event) {
    if (event.target.nodeName !== 'INPUT' || !event.target.dataset.placeholder) {
      return;
    }
    inputBlur(event.target);
  }, true);

  var inputs = document.querySelectorAll('[data-placeholder]');
  for (let i = 0; i < inputs.length; i++) {
    showPlaceholder(inputs[i]);
  }


  let mouse = document.getElementById('mouse');
  mouse.setAttribute('tabindex', 0);
  mouse.onclick = function () {
    this.style.position = 'absolute';

    this.style.left = getComputedStyle(this).left;
    this.style.top = getComputedStyle(this).top;


  };
  mouse.onkeydown = function (event) {

    switch (event.keyCode) {
      case 38:
        this.style.top = parseInt(this.style.top) - this.offsetHeight + 'px';
        return false;
      case 40:
        this.style.top = parseInt(this.style.top) + this.offsetHeight + 'px';
        return false;
      case 37:
        this.style.left = parseInt(this.style.left) - this.offsetWidth + 'px';
        return false;
      case 39:
        this.style.left = parseInt(this.style.left) + this.offsetWidth + 'px';
        return false;

    }
  };


  // let view=document.getElementById('view');
  // let area=document.getElementById('area');

  // view.onkeydown=function(event){
  //   if(event.ctrlKey && (event.keyCode=='E'.charCodeAt(0)) && !area.offsetHeight){
  //     edit();
  //     return false;
  //   }
  // }
  // area.onkeydown=function(event){
  //   if(event.ctrlKey &&(event.keyCode=='S'.charCodeAt(0)) && area.offsetHeight){
  //     save();
  //     return false;
  //   }
  //   if(event.keyCode==27){
  //     cancel();
  //     return false;
  //   }
  // }
  // function edit(){
  //   area.value=view.innerHTML;
  //   view.style.display='none';
  //   area.style.display='block';
  //   area.focus();
  // }
  // function save(){
  //   view.innerHTML=area.value;
  //   area.style.display='none';
  //   view.style.display='block';
  // }
  // function cancel(){
  //   area.style.display='none';
  //   view.style.display='block';
  // }


  var table = document.getElementById('bagua-table');
  let container = document.getElementById('editContainer');
  table.addEventListener('click', function (event) {
    let target = event.target.closest('td');
    if (!table.contains(target) || container.offsetHeight){
      return;
    }

    container.style.left = target.getBoundingClientRect().left + window.pageXOffset + 'px';
    container.style.top = target.getBoundingClientRect().top + window.pageYOffset + 'px';
    container.style.height = target.offsetHeight + 25 + 'px';
    container.style.width = target.offsetWidth + 'px';
    container.style.display = 'block';
    container.children[0].value = target.innerHTML;
    container.children[0].focus();
    let saveButton = container.children[1];
    let cancelButton = container.children[2];
    saveButton.onclick = function () {
      target.innerHTML = container.children[0].value;
      container.style.display = 'none';
    };
    cancelButton.onclick = function () {
      container.style.display = 'none';
    };

  });




  function showCover(){
    let cover=document.createElement('div');
    cover.id='coverDiv';
    document.body.appendChild(cover);
    
  }
  function removeCover(){
    document.body.removeChild(document.getElementById('coverDiv'));
  }


  
  function showPrompt(text,callback){
    showCover();
    let container = document.getElementById('modal-form-container');
    let message = document.getElementById('message');
    let form=document.getElementById('modal-form');

    message.innerHTML=text;
    container.style.display='block';
    form.inputText.value='';
    form.inputText.focus();


    function complete(value){
      removeCover();
      container.style.display='none';
      document.onkeydown=null;
      callback(value);

    }
    form.onsubmit=function(){
      let value= form.inputText.value;
      if(value===''){
        return false;
      }
      complete(value);
      return false;

    };

    form.cancel.onclick = function () {
      complete(null);

    };
    document.onkeydown=function(event){
      if(event.keyCode===27){
        complete(null);
      }
    };

  }

  let modalWindowButton=document.getElementById('modalWindowButton');
  modalWindowButton.onclick = function () {
    showPrompt('Enter some text',function(value){
      alert(value);
    });
  };


});
