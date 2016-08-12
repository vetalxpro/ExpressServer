(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
/**
 * ClassVoter
 */
class ClassVoter {
  constructor(options) {
    this.elem = options.elem;
    this.voteElement = this.elem.querySelector('.vote');

    this.elem.onmousedown = function () {
      return false;
    };

    this.elem.addEventListener('click', this.onClick.bind(this));

  }

  onClick(event) {
    if (event.target.closest('.up')) {
      this.increaseVote();
    } else if (event.target.closest('.down')) {
      this.decreaseVote();
    }

  }

  increaseVote() {
    this.setVote(+this.voteElement.textContent + 5);
  }

  decreaseVote() {
    this.setVote(+this.voteElement.textContent - 5);
  }

  setVote(vote) {
    this.voteElement.textContent = +vote;
    let widgetEvent = new CustomEvent('changeTextContent', {
      bubbles: true,
      detail: +vote
    });
    this.elem.dispatchEvent(widgetEvent);
  }

}


/**
 * ClassStepVoter
 */
class ClassStepVoter extends ClassVoter {
  constructor(options) {
    super(options);
    this.step = options.step;
  }

  increaseVote() {
    this.setVote(+this.voteElement.textContent + this.step);
  }

  decreaseVote() {
    this.setVote(+this.voteElement.textContent - this.step);
  }
}

module.exports={ClassVoter:ClassVoter,ClassStepVoter:ClassStepVoter};
},{}],2:[function(require,module,exports){
let ClassVoter=require('./class.js').ClassVoter;
let ClassStepVoter=require('./class.js').ClassStepVoter;


document.addEventListener('DOMContentLoaded',function(){

  let voter2 = new ClassVoter({
    elem: document.getElementById('voter2')
  });
  voter2.setVote(50);
  document.getElementById('voter2').addEventListener('changeTextContent', function (event) {
    console.log(event.detail);
  });


  /**
   *
   * @type {ClassStepVoter}
   */
  let voter3 = new ClassStepVoter({
    elem: document.getElementById('voter3'),
    step: 5
  });
  voter3.setVote(100);
});

},{"./class.js":1}]},{},[2])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJwdWJsaWMvZG9tL2djb21wb25lbnRzL3NvdXJjZS9jbGFzcy5qcyIsInB1YmxpYy9kb20vZ2NvbXBvbmVudHMvc291cmNlL3NvdXJjZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQy9EQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIi8qKlxyXG4gKiBDbGFzc1ZvdGVyXHJcbiAqL1xyXG5jbGFzcyBDbGFzc1ZvdGVyIHtcclxuICBjb25zdHJ1Y3RvcihvcHRpb25zKSB7XHJcbiAgICB0aGlzLmVsZW0gPSBvcHRpb25zLmVsZW07XHJcbiAgICB0aGlzLnZvdGVFbGVtZW50ID0gdGhpcy5lbGVtLnF1ZXJ5U2VsZWN0b3IoJy52b3RlJyk7XHJcblxyXG4gICAgdGhpcy5lbGVtLm9ubW91c2Vkb3duID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9O1xyXG5cclxuICAgIHRoaXMuZWxlbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMub25DbGljay5iaW5kKHRoaXMpKTtcclxuXHJcbiAgfVxyXG5cclxuICBvbkNsaWNrKGV2ZW50KSB7XHJcbiAgICBpZiAoZXZlbnQudGFyZ2V0LmNsb3Nlc3QoJy51cCcpKSB7XHJcbiAgICAgIHRoaXMuaW5jcmVhc2VWb3RlKCk7XHJcbiAgICB9IGVsc2UgaWYgKGV2ZW50LnRhcmdldC5jbG9zZXN0KCcuZG93bicpKSB7XHJcbiAgICAgIHRoaXMuZGVjcmVhc2VWb3RlKCk7XHJcbiAgICB9XHJcblxyXG4gIH1cclxuXHJcbiAgaW5jcmVhc2VWb3RlKCkge1xyXG4gICAgdGhpcy5zZXRWb3RlKCt0aGlzLnZvdGVFbGVtZW50LnRleHRDb250ZW50ICsgNSk7XHJcbiAgfVxyXG5cclxuICBkZWNyZWFzZVZvdGUoKSB7XHJcbiAgICB0aGlzLnNldFZvdGUoK3RoaXMudm90ZUVsZW1lbnQudGV4dENvbnRlbnQgLSA1KTtcclxuICB9XHJcblxyXG4gIHNldFZvdGUodm90ZSkge1xyXG4gICAgdGhpcy52b3RlRWxlbWVudC50ZXh0Q29udGVudCA9ICt2b3RlO1xyXG4gICAgbGV0IHdpZGdldEV2ZW50ID0gbmV3IEN1c3RvbUV2ZW50KCdjaGFuZ2VUZXh0Q29udGVudCcsIHtcclxuICAgICAgYnViYmxlczogdHJ1ZSxcclxuICAgICAgZGV0YWlsOiArdm90ZVxyXG4gICAgfSk7XHJcbiAgICB0aGlzLmVsZW0uZGlzcGF0Y2hFdmVudCh3aWRnZXRFdmVudCk7XHJcbiAgfVxyXG5cclxufVxyXG5cclxuXHJcbi8qKlxyXG4gKiBDbGFzc1N0ZXBWb3RlclxyXG4gKi9cclxuY2xhc3MgQ2xhc3NTdGVwVm90ZXIgZXh0ZW5kcyBDbGFzc1ZvdGVyIHtcclxuICBjb25zdHJ1Y3RvcihvcHRpb25zKSB7XHJcbiAgICBzdXBlcihvcHRpb25zKTtcclxuICAgIHRoaXMuc3RlcCA9IG9wdGlvbnMuc3RlcDtcclxuICB9XHJcblxyXG4gIGluY3JlYXNlVm90ZSgpIHtcclxuICAgIHRoaXMuc2V0Vm90ZSgrdGhpcy52b3RlRWxlbWVudC50ZXh0Q29udGVudCArIHRoaXMuc3RlcCk7XHJcbiAgfVxyXG5cclxuICBkZWNyZWFzZVZvdGUoKSB7XHJcbiAgICB0aGlzLnNldFZvdGUoK3RoaXMudm90ZUVsZW1lbnQudGV4dENvbnRlbnQgLSB0aGlzLnN0ZXApO1xyXG4gIH1cclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHM9e0NsYXNzVm90ZXI6Q2xhc3NWb3RlcixDbGFzc1N0ZXBWb3RlcjpDbGFzc1N0ZXBWb3Rlcn07IiwibGV0IENsYXNzVm90ZXI9cmVxdWlyZSgnLi9jbGFzcy5qcycpLkNsYXNzVm90ZXI7XHJcbmxldCBDbGFzc1N0ZXBWb3Rlcj1yZXF1aXJlKCcuL2NsYXNzLmpzJykuQ2xhc3NTdGVwVm90ZXI7XHJcblxyXG5cclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsZnVuY3Rpb24oKXtcclxuXHJcbiAgbGV0IHZvdGVyMiA9IG5ldyBDbGFzc1ZvdGVyKHtcclxuICAgIGVsZW06IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd2b3RlcjInKVxyXG4gIH0pO1xyXG4gIHZvdGVyMi5zZXRWb3RlKDUwKTtcclxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndm90ZXIyJykuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlVGV4dENvbnRlbnQnLCBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgIGNvbnNvbGUubG9nKGV2ZW50LmRldGFpbCk7XHJcbiAgfSk7XHJcblxyXG5cclxuICAvKipcclxuICAgKlxyXG4gICAqIEB0eXBlIHtDbGFzc1N0ZXBWb3Rlcn1cclxuICAgKi9cclxuICBsZXQgdm90ZXIzID0gbmV3IENsYXNzU3RlcFZvdGVyKHtcclxuICAgIGVsZW06IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd2b3RlcjMnKSxcclxuICAgIHN0ZXA6IDVcclxuICB9KTtcclxuICB2b3RlcjMuc2V0Vm90ZSgxMDApO1xyXG59KTtcclxuIl19
