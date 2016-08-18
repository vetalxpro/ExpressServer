function changeBackground() {
  document.body.style.backgroundColor = '#' + ('' + Math.random()).slice(-6);
}
document.addEventListener('DOMContentLoaded', function () {

  document.getElementById('digit').onclick = function () {
    this.getElementsByTagName('SPAN')[0].classList.toggle('animate');
  };

  let flag=false;
  document.getElementById('anim-container').onclick = function (e) {
    var spanArr = this.getElementsByClassName('square');
    var elem = e.target;
    if (elem == spanArr[0]) {
      elem.classList.toggle('linear');
      return false;
    }
    if (elem == spanArr[1]) {
      elem.classList.toggle('bez1');
      return false;
    }
    if (elem == spanArr[2]) {
      elem.classList.toggle('bez2');
      return false;
    }
    if (elem == spanArr[3]) {
      if(!flag) {

        animate({
          duration: 2000,
          timing: makeEaseOut(bounce),
          draw: function (progress) {
            elem.style.left = document.body.clientWidth * progress - 80 * progress + 'px';
          }
        });
        flag=true;
      }else{

        animate({
          duration: 2000,
          timing: makeEaseOut(bounce),
          draw: function (progress) {
            elem.style.left = (document.body.clientWidth-80)-(document.body.clientWidth-80)*progress+ 'px';
          }
        });
        flag=false;
      }
    }
  };

  var field = document.getElementById('field');
  var leftBallTwo = field.getElementsByClassName('ball two')[0].getBoundingClientRect().left;
  field.onclick = function (e) {
    let ball = e.target;
    if (ball.classList.contains('one')) {
      let top = field.clientHeight - ball.clientHeight;
      animate({
        duration: 1000,
        timing: makeEaseOut(bounce),
        draw: function (progress) {
          ball.style.top = progress * top + 'px';
        }
      });
    }
    if (ball.classList.contains('two')) {
      let top = field.clientHeight - ball.clientHeight;
      //let left=field.clientWidth-ball.clientWidth;
      let rotate=360;
      animate({
        duration: 2000,
        timing: makeEaseOut(bounce),
        draw: function (progress) {
          ball.style.top = progress * top + 'px';
        }
      });
      animate({
        duration: 2000,
        timing: makeEaseOut(quad),
        draw: function (progress) {
          ball.style.left = leftBallTwo + progress * 400 + 'px';
          ball.style.transform = 'rotate(' + progress *rotate*4 + 'deg)';
        }
      });

    }
  };


});

function linear(progress) {
  return progress;
}

function quad(progress) {
  return Math.pow(progress, 2);
}

function circ(timeFraction) {
  return 1 - Math.sin(Math.acos(timeFraction));
}

function back(x, timeFraction) {
  return Math.pow(timeFraction, 2) * ((x + 1) * timeFraction - x);
}

function bounce(timeFraction) {
  for (var a = 0, b = 1, result; 1; a += b, b /= 2) {
    if (timeFraction >= (7 - 4 * a) / 11) {
      return -Math.pow((11 - 6 * a - 11 * timeFraction) / 4, 2) + Math.pow(b, 2);
    }
  }
}

function elastic(x, timeFraction) {
  return Math.pow(2, 10 * (timeFraction - 1)) * Math.cos(20 * Math.PI * x / 3 * timeFraction);
}

// преобразователь в easeOut
function makeEaseOut(timing) {
  return function (timeFraction) {
    return 1 - timing(1 - timeFraction);
  };
}
//easeInOut
function makeEaseInOut(timing) {
  return function (timeFraction) {
    if (timeFraction < 0.5) {
      return timing(2 * timeFraction) / 2;
    } else {
      return (2 - timing(2 * (1 - timeFraction))) / 2;
    }
  };
}

// Рисует функция draw
// Продолжительность анимации duration
function animate(options) {

  var start = performance.now();

  requestAnimationFrame(function animate(time) {
    // timeFraction от 0 до 1
    var timeFraction = (time - start) / options.duration;

    if (timeFraction > 1) {
      timeFraction = 1;
      if(options.callback){
        options.callback();
      }
    }

    // текущее состояние анимации
    var progress = options.timing(timeFraction);

    options.draw(progress);

    if (timeFraction < 1) {
      requestAnimationFrame(animate);
    }

  });
}

function noop() {
}