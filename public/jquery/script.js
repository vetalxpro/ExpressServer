$(function () {

  $('p').each(function (index) {
    console.log(index + $(this));
    $(this).css({'color': 'red', 'fontSize': '30px'});
  });

  $('body').append($('<p>').addClass('tweet').text('Having lunch.'));

});