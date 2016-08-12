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
