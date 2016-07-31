document.addEventListener('DOMContentLoaded',function(){
	console.info('Hi vetalxpro!');

	// console.log(document.forms[0].elements.field.elements.input1);
	let elem = document.forms[0].elements.field.elements.input1;
	// console.log(elem);
	if(input2.checked){
		console.log('checked');
	}
	select1.value='opt3';
	console.log(select1.options);

	for(let i=0;i<select2.options.length;i++){
		let option = select2.options[i];
		if(option.selected){
			console.log(option.text);
		}
	}
	let option = new Option('option 4','opt4',true,true);
	select2.appendChild(option);

	let select3=document.body.querySelectorAll('select')[2];
	let selectedOption = select3.options[select3.selectedIndex];
	console.log(selectedOption.value);
	let newOption=new Option('Classic','Classic');
	select3.appendChild(newOption);
	newOption.setAttribute('selected','');


	input3.onblur=function(){
		if(isNaN(input3.value)|| !input3.value){
			input3.classList.add('error');
			error.innerHTML = ' Ошибка!';
			error.style.color='red';
			input3.focus();
		}else{
			input3.classList.remove('error');
			error.innerHTML=' OK';
			error.style.color='green';
		}
	}
	
	function showPlaceholder(input) {
      input.classList.add('placeholder');
      input.value = input.dataset.placeholder;
    }

    // ...ваш код для input...
    function inputFocus(input){
      if(input.value==input.dataset.placeholder){
        input.value='';
        input.classList.remove('placeholder');
      }
      let tooltip=document.createElement('div');
      tooltip.innerHTML=input.dataset.placeholder;
      tooltip.classList.add('placeholder-tooltip');
      document.body.appendChild(tooltip);
      tooltip.style.left=input.getBoundingClientRect().left+'px';
      tooltip.style.top=input.getBoundingClientRect().top-tooltip.offsetHeight+'px';
    }
    function inputBlur(input){
      if(input.value==''){
        showPlaceholder(input);
      }
     document.body.removeChild(document.body.querySelector('.placeholder-tooltip'));
    }
    

    document.body.addEventListener('focus',function(event){
      if(event.target.nodeName!='INPUT'||!event.target.dataset.placeholder)return;
      inputFocus(event.target);
      
    },true);
    document.body.addEventListener('blur',function(event){
      if(event.target.nodeName!='INPUT'||!event.target.dataset.placeholder)return;
      inputBlur(event.target);
    },true);

    var inputs = document.querySelectorAll('[data-placeholder]');
    for(let i=0;i<inputs.length;i++){
      showPlaceholder(inputs[i]);
    }















});