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