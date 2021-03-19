
var num = 0;

$('#targhet').text(num);

function add() {
  $('.row > button:last-child').click(function() {
    $('#targhet').text(++num);
  })
}


function sub() {
  $('.row > button:first-child').click(function() {
    $('#targhet').text(--num);
  });
}

add();
sub();
