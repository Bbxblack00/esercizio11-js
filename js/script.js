

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










// function getRandomValue(min, max) {
//     var localMin = min;
//     var localMax = max - min + 1;
//     return Math.floor(Math.random() * localMax) + localMin;
// }
// function minusClick() {
//     var value1 = $('#target-width').text();
//     var value2 = $('#target-height').text();
//     value1--;
//     value2--;
//     if (value1 < 0 || value2 < 0) {
//         value1 = 0;
//         value2 = 0;
//         alert('Non fare il furbo!');
//     }
//     $('#target').text(value);
//     var width = parseInt($('#circle').css('width')) ;
//     console.log(width);
//     $('#circle').css('width', (width) + 'px');
// }
// function plusClick() {
//     var value = $('#target').text();
//     value++;
//     if (value > 20) {
//         value = 20;
//         alert('Non fare il furbo!');
//     }
//     $('#target').text(value);
//     $('#circle').css('width', value + 'px');
// }
// function init() {
//     // VALUES
//     $('#target').text(10);
//     // BUTTONS
//     $('#minus').click(minusClick);
//     $('#plus').click(plusClick);
//     // CIRCLE
//     $('#circle').css('width', '100px');
//     $('#circle').css('height', '100px');
// }
// init();









// ricalcando la soluzione appena vista per la width, generare html + js
// necessario per ottenere altri 2 tasti - e + che andranno a modificare l'altezza in accordo con il valore centale


// function minusClickWidth() {
//     var value1 = $('#target-width').text();
//     value1--;
//     if (value1 < 0) {
//         value1 = 0;
//         alert('Non fare il furbo!');
// }
//     $('#target-width').text(value1);
//     $('#Circle').css('width', (value1 * 10) + 'px');
// }
// function minusClickHeight() {
//     var value2 = $('#target-height').text();
//     value2--;
//     if (value2 < 0) {
//         value2 = 0;
//         alert('Non fare il furbo!');
// }
//     $('#target-height').text(value2);
//     $('#Circle').css('height', (value2 * 10) + 'px');
// }
// function plusClickWidth() {
//   var value1 = $('#target-width').text();
//   value1++;
//   if (value1 > 20) {
//       value1 = 0;
//       alert('Non fare il furbo!');
// }
//     $('#target-width').text(value1);
//     $('#Circle').css('width', (value1 * 10) + 'px');
// }
// function plusClickHeight() {
//   var value2 = $('#target-height').text();
//   value2++;
//   if (value2 > 20) {
//       value2 = 0;
//       alert('Non fare il furbo!');
// }
//     $('#target-height').text(value2);
//     $('#Circle').css('height', (value2 * 10) + 'px');
// }
//
// function init() {
//
//     // VALUES
//     $('#target-width').text(10);
//     $('#target-height').text(10);
//     // BUTTONS
//     $('#minus-width').click(minusClickWidth);
//     $('#plus-width').click(plusClickWidth);
//     $('#minus-height').click(minusClickHeight);
//     $('#plus-height').click(plusClickHeight);
//     // VARIABILI
//     var value1 = $('#target-Width').html();
//     var value2 = $('#target-Height').html();
//     // CIRCLE
//     $('#Circle').css('width', value1 + 'px');
//     $('#Circle').css('height', value2 + 'px');
// }
// init();






// ad ogni pressione dei tasti +/- modificare il background-color del cerchio con colore casuale.


function getRandomValue() {
    var localMin = 0;
    var localMax = 7;
    return Math.floor(Math.random() * localMax);
}
function minusClickWidth() {
    var value1 = $('#target-width').text();
    value1--;
    if (value1 < 0) {
        value1 = 0;
        alert('Non fare il furbo!');
}
    $('#target-width').text(value1);
    $('#Circle').css('width', (value1 * 10) + 'px');
    var rnd = getRandomValue();
    $('#Circle').css('background-color', color[rnd]);
}
function minusClickHeight() {
    var value2 = $('#target-height').text();
    value2--;
    if (value2 < 0) {
        value2 = 0;
        alert('Non fare il furbo!');
}
    $('#target-height').text(value2);
    $('#Circle').css('height', (value2 * 10) + 'px');
    var rnd = getRandomValue();
    $('#Circle').css('background-color', color[rnd]);
}
function plusClickWidth() {
  var value1 = $('#target-width').text();
  value1++;
  if (value1 > 20) {
      value1 = 0;
      alert('Non fare il furbo!');
}
    $('#target-width').text(value1);
    $('#Circle').css('width', (value1 * 10) + 'px');
    var rnd = getRandomValue();
    $('#Circle').css('background-color', color[rnd]);
}
function plusClickHeight() {
  var value2 = $('#target-height').text();
  value2++;
  if (value2 > 20) {
      value2 = 0;
      alert('Non fare il furbo!');
}
    $('#target-height').text(value2);
    $('#Circle').css('height', (value2 * 10) + 'px');
    var rnd = getRandomValue();
    $('#Circle').css('background-color', color[rnd]);
}

function init() {

    // VALUES
    $('#target-width').text(10);
    $('#target-height').text(10);
    // BUTTONS
    $('#minus-width').click(minusClickWidth);
    $('#plus-width').click(plusClickWidth);
    $('#minus-height').click(minusClickHeight);
    $('#plus-height').click(plusClickHeight);
    // VARIABILI
    var color = ['yellow', 'green', 'white', 'red', 'bue', 'gray', 'darkslategray'];
    var value1 = $('#target-Width').html();
    var value2 = $('#target-Height').html();
    // CIRCLE
    $('#Circle').css('width', value1 + 'px');
    $('#Circle').css('height', value2 + 'px');
}
init();
