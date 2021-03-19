

//  associare evento ai bottoni + e - in modo da far variare il numero al centro di +/- 1
// var num = 0;
//
// $('#targhet').text(num);
//
// function add() {
//   $('.row > button:last-child').click(function() {
//     $('#targhet').text(++num);
//   })
// }
//
//
// function sub() {
//   $('.row > button:first-child').click(function() {
//     $('#targhet').text(--num);
//   });
// }
//
// add();
// sub();


// all'esercizio precedente aggiungere la limitazione sotto lo 0 e sopra il 20 che impedisce
// al counter di superare questi valori e notifica all'utente con un allert.




// $('#targhet').text(num);
//
// function add() {
//   $('.row > button:last-child').click(function() {
//     if (num > 19) {
//       --num;
//       alert('WTF');
//     }
//     $('#targhet').text(++num);
//   })
// }
//
// function sub() {
//   $('.row > button:first-child').click(function() {
//     if (num < 1) {
//       ++num;
//       alert('WTF');
//     }
//     $('#targhet').text(--num);
//   });
// }








function minusClick() {
    var value = $('#target').text();
    value--;
    if (value < 0) {
        value = 0;
        alert('Non fare il furbo!');
    }
    $('#target').text(value);
}
function plusClick() {
    var value = $('#target').text();
    value++;
    if (value > 20) {
        value = 20;
        alert('Non fare il furbo!');
    }
    $('#target').text(value);
    return value;
}
function init() {

    // VALUES
    $('#target').text(10);
    // BUTTONS
    $('#minus').click(minusClick);
    $('#plus').click(plusClick);
    // VARIABILI
    var val = $('#target').val();
    // CIRCLE
    $('#circle').css('width', val + 'px');
    $('#circle').css('height', val + 'px');
}
init();
