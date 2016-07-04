
filter(arr,func);

func = function inBetween(min,max){
	return (a>=min && a<=max);
}

--> func(arr[i]) return arr[i]%2==0;


function func(min,max){

}
var elem = {
	style:{
		top:'10px',
		left:0
	}
}
var s = elem.style

// ==========================================

function Clock(options) {

  var template = options.template;
  var timer;

  function render() {
    var date = new Date();

    var hours = date.getHours();
    if (hours < 10) hours = '0' + hours;

    var min = date.getMinutes();
    if (min < 10) min = '0' + min;

    var sec = date.getSeconds();
    if (sec < 10) sec = '0' + sec;

    var output = template.replace('h', hours).replace('m', min).replace('s', sec);

    console.log(output);
  }

  this.stop = function() {
    clearInterval(timer);
  };

  this.start = function() {
    render();
    timer = setInterval(render, 1000);
  }

}



var clock = new Clock({
      template: 'h:m:s'
    });
    clock.start();