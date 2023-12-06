const playbtn = document.getElementById('play-again-btn');
const parentElement = document.querySelector('.mainrow');

let i = 0;
function handleInterval() {
  const intervalId = setInterval(function() {
  if (i < 6) {
    if (i === 1) {
      gridTimer1();
    } else if (i === 2) {
      gridTimer2();
    } else if (i === 3) {
      gridTimer3();
    } else if (i === 4) {
      gridTimer4();
    } else if (i === 5) {
      gridTimer5();
    }
    i++;
  } else {
    clearInterval(intervalId);
  }
}, 1000);
}
handleInterval();

playbtn.addEventListener('click', function() {
  i=0;
  document.getElementById('row1col2').style.backgroundColor = 'yellow';
  document.getElementById('row1col3').style.backgroundColor = 'yellow';
  document.getElementById('row2col3').style.backgroundColor = 'yellow';
  document.getElementById('row3col3').style.backgroundColor = 'yellow';
  document.getElementById('row4col2').style.backgroundColor = 'yellow';
  document.getElementById('row4col3').style.backgroundColor = 'yellow';
  document.getElementById('row4col4').style.backgroundColor = 'yellow';
  document.getElementById('row1col2').style.backgroundColor = 'yellow';
  document.getElementById('row1col3').style.backgroundColor = 'yellow';
  document.getElementById('row1col4').style.backgroundColor = 'yellow';
  document.getElementById('row2col4').style.backgroundColor = 'yellow';
  document.getElementById('row3col2').style.backgroundColor = 'yellow';
  document.getElementById('row3col3').style.backgroundColor = 'yellow';
  document.getElementById('row3col4').style.backgroundColor = 'yellow';
  document.getElementById('row4col2').style.backgroundColor = 'yellow';
  document.getElementById('row5col2').style.backgroundColor = 'yellow';
  document.getElementById('row5col3').style.backgroundColor = 'yellow';
  document.getElementById('row5col4').style.backgroundColor = 'yellow';
  document.getElementById('row1col2').style.backgroundColor = 'yellow';
  document.getElementById('row1col3').style.backgroundColor = 'yellow';
  document.getElementById('row2col3').style.backgroundColor = 'yellow';
  document.getElementById('row3col2').style.backgroundColor = 'yellow';
  document.getElementById('row3col3').style.backgroundColor = 'yellow';
  document.getElementById('row4col3').style.backgroundColor = 'yellow';
  document.getElementById('row5col2').style.backgroundColor = 'yellow';
  document.getElementById('row5col3').style.backgroundColor = 'yellow';
  document.getElementById('row1col2').style.backgroundColor = 'yellow';
  document.getElementById('row2col2').style.backgroundColor = 'yellow';
  document.getElementById('row2col4').style.backgroundColor = 'yellow';
  document.getElementById('row3col4').style.backgroundColor = 'yellow';
  document.getElementById('row3col2').style.backgroundColor = 'yellow';
  document.getElementById('row4col2').style.backgroundColor = 'yellow';
  document.getElementById('row4col3').style.backgroundColor = 'yellow';
  document.getElementById('row4col4').style.backgroundColor = 'yellow';
  document.getElementById('row4col5').style.backgroundColor = 'yellow';
  document.getElementById('row5col4').style.backgroundColor = 'yellow';
  document.getElementById('row1col2').style.backgroundColor = 'yellow';
  document.getElementById('row1col3').style.backgroundColor = 'yellow';
  document.getElementById('row1col4').style.backgroundColor = 'yellow';
  document.getElementById('row2col2').style.backgroundColor = 'yellow';
  document.getElementById('row3col2').style.backgroundColor = 'yellow';
  document.getElementById('row3col3').style.backgroundColor = 'yellow';
  document.getElementById('row3col4').style.backgroundColor = 'yellow';
  document.getElementById('row4col4').style.backgroundColor = 'yellow';
  document.getElementById('row5col2').style.backgroundColor = 'yellow';
  document.getElementById('row5col3').style.backgroundColor = 'yellow';
  document.getElementById('row5col4').style.backgroundColor = 'yellow';
  handleInterval();
});


function gridTimer1() {
  document.getElementById('row1col2').style.backgroundColor = 'white';
  document.getElementById('row1col3').style.backgroundColor = 'white';
  document.getElementById('row2col3').style.backgroundColor = 'white';
  document.getElementById('row3col3').style.backgroundColor = 'white';
  document.getElementById('row4col3').style.backgroundColor = 'white'; 
  document.getElementById('row5col2').style.backgroundColor = 'white';
  document.getElementById('row5col3').style.backgroundColor = 'white';
  document.getElementById('row5col4').style.backgroundColor = 'white';
}

function gridTimer2() {
  document.getElementById('row1col2').style.backgroundColor = 'yellow';
  document.getElementById('row1col3').style.backgroundColor = 'yellow';
  document.getElementById('row2col3').style.backgroundColor = 'yellow';
  document.getElementById('row3col3').style.backgroundColor = 'yellow';
  document.getElementById('row4col2').style.backgroundColor = 'yellow';
  document.getElementById('row4col3').style.backgroundColor = 'yellow';
  document.getElementById('row4col4').style.backgroundColor = 'yellow';
  document.getElementById('row1col2').style.backgroundColor = 'white';
  document.getElementById('row1col3').style.backgroundColor = 'white';
  document.getElementById('row1col4').style.backgroundColor = 'white';
  document.getElementById('row2col4').style.backgroundColor = 'white';
  document.getElementById('row3col2').style.backgroundColor = 'white';
  document.getElementById('row3col3').style.backgroundColor = 'white';
  document.getElementById('row3col4').style.backgroundColor = 'white';
  document.getElementById('row4col2').style.backgroundColor = 'white';
  document.getElementById('row5col2').style.backgroundColor = 'white';
  document.getElementById('row5col3').style.backgroundColor = 'white';
  document.getElementById('row5col4').style.backgroundColor = 'white';
  
}
function gridTimer3() {
  document.getElementById('row1col2').style.backgroundColor = 'yellow';
  document.getElementById('row1col3').style.backgroundColor = 'yellow';
  document.getElementById('row2col3').style.backgroundColor = 'yellow';
  document.getElementById('row3col3').style.backgroundColor = 'yellow';
  document.getElementById('row4col2').style.backgroundColor = 'yellow';
  document.getElementById('row4col3').style.backgroundColor = 'yellow';
  document.getElementById('row4col4').style.backgroundColor = 'yellow';
  document.getElementById('row1col2').style.backgroundColor = 'yellow';
  document.getElementById('row1col3').style.backgroundColor = 'yellow';
  document.getElementById('row1col4').style.backgroundColor = 'yellow';
  document.getElementById('row2col4').style.backgroundColor = 'yellow';
  document.getElementById('row3col2').style.backgroundColor = 'yellow';
  document.getElementById('row3col3').style.backgroundColor = 'yellow';
  document.getElementById('row3col4').style.backgroundColor = 'yellow';
  document.getElementById('row4col2').style.backgroundColor = 'yellow';
  document.getElementById('row5col2').style.backgroundColor = 'yellow';
  document.getElementById('row5col3').style.backgroundColor = 'yellow';
  document.getElementById('row5col4').style.backgroundColor = 'yellow';
  document.getElementById('row1col2').style.backgroundColor = 'white';
  document.getElementById('row1col3').style.backgroundColor = 'white';
  document.getElementById('row2col3').style.backgroundColor = 'white';
  document.getElementById('row3col2').style.backgroundColor = 'white';
  document.getElementById('row3col3').style.backgroundColor = 'white';
  document.getElementById('row4col3').style.backgroundColor = 'white';
  document.getElementById('row5col2').style.backgroundColor = 'white';
  document.getElementById('row5col3').style.backgroundColor = 'white'; 
}
function gridTimer4() {
  document.getElementById('row1col2').style.backgroundColor = 'yellow';
  document.getElementById('row1col3').style.backgroundColor = 'yellow';
  document.getElementById('row2col3').style.backgroundColor = 'yellow';
  document.getElementById('row3col3').style.backgroundColor = 'yellow';
  document.getElementById('row4col2').style.backgroundColor = 'yellow';
  document.getElementById('row4col3').style.backgroundColor = 'yellow';
  document.getElementById('row4col4').style.backgroundColor = 'yellow';
  document.getElementById('row1col2').style.backgroundColor = 'yellow';
  document.getElementById('row1col3').style.backgroundColor = 'yellow';
  document.getElementById('row1col4').style.backgroundColor = 'yellow';
  document.getElementById('row2col4').style.backgroundColor = 'yellow';
  document.getElementById('row3col2').style.backgroundColor = 'yellow';
  document.getElementById('row3col3').style.backgroundColor = 'yellow';
  document.getElementById('row3col4').style.backgroundColor = 'yellow';
  document.getElementById('row4col2').style.backgroundColor = 'yellow';
  document.getElementById('row5col2').style.backgroundColor = 'yellow';
  document.getElementById('row5col3').style.backgroundColor = 'yellow';
  document.getElementById('row5col4').style.backgroundColor = 'yellow';
  document.getElementById('row1col2').style.backgroundColor = 'yellow';
  document.getElementById('row1col3').style.backgroundColor = 'yellow';
  document.getElementById('row2col3').style.backgroundColor = 'yellow';
  document.getElementById('row3col2').style.backgroundColor = 'yellow';
  document.getElementById('row3col3').style.backgroundColor = 'yellow';
  document.getElementById('row4col3').style.backgroundColor = 'yellow';
  document.getElementById('row5col2').style.backgroundColor = 'yellow';
  document.getElementById('row5col3').style.backgroundColor = 'yellow';
  document.getElementById('row1col2').style.backgroundColor = 'white';
  document.getElementById('row2col2').style.backgroundColor = 'white';
  document.getElementById('row2col4').style.backgroundColor = 'white';
  document.getElementById('row3col4').style.backgroundColor = 'white';
  document.getElementById('row3col2').style.backgroundColor = 'white';
  document.getElementById('row4col2').style.backgroundColor = 'white';
  document.getElementById('row4col3').style.backgroundColor = 'white';
  document.getElementById('row4col4').style.backgroundColor = 'white';
  document.getElementById('row4col5').style.backgroundColor = 'white';
  document.getElementById('row5col4').style.backgroundColor = 'white';
  
}
function gridTimer5() {
  document.getElementById('row1col2').style.backgroundColor = 'yellow';
  document.getElementById('row1col3').style.backgroundColor = 'yellow';
  document.getElementById('row2col3').style.backgroundColor = 'yellow';
  document.getElementById('row3col3').style.backgroundColor = 'yellow';
  document.getElementById('row4col2').style.backgroundColor = 'yellow';
  document.getElementById('row4col3').style.backgroundColor = 'yellow';
  document.getElementById('row4col4').style.backgroundColor = 'yellow';
  document.getElementById('row1col2').style.backgroundColor = 'yellow';
  document.getElementById('row1col3').style.backgroundColor = 'yellow';
  document.getElementById('row1col4').style.backgroundColor = 'yellow';
  document.getElementById('row2col4').style.backgroundColor = 'yellow';
  document.getElementById('row3col2').style.backgroundColor = 'yellow';
  document.getElementById('row3col3').style.backgroundColor = 'yellow';
  document.getElementById('row3col4').style.backgroundColor = 'yellow';
  document.getElementById('row4col2').style.backgroundColor = 'yellow';
  document.getElementById('row5col2').style.backgroundColor = 'yellow';
  document.getElementById('row5col3').style.backgroundColor = 'yellow';
  document.getElementById('row5col4').style.backgroundColor = 'yellow';
  document.getElementById('row1col2').style.backgroundColor = 'yellow';
  document.getElementById('row1col3').style.backgroundColor = 'yellow';
  document.getElementById('row2col3').style.backgroundColor = 'yellow';
  document.getElementById('row3col2').style.backgroundColor = 'yellow';
  document.getElementById('row3col3').style.backgroundColor = 'yellow';
  document.getElementById('row4col3').style.backgroundColor = 'yellow';
  document.getElementById('row5col2').style.backgroundColor = 'yellow';
  document.getElementById('row5col3').style.backgroundColor = 'yellow';
  document.getElementById('row1col2').style.backgroundColor = 'yellow';
  document.getElementById('row2col2').style.backgroundColor = 'yellow';
  document.getElementById('row2col4').style.backgroundColor = 'yellow';
  document.getElementById('row3col4').style.backgroundColor = 'yellow';
  document.getElementById('row3col2').style.backgroundColor = 'yellow';
  document.getElementById('row4col2').style.backgroundColor = 'yellow';
  document.getElementById('row4col3').style.backgroundColor = 'yellow';
  document.getElementById('row4col4').style.backgroundColor = 'yellow';
  document.getElementById('row4col5').style.backgroundColor = 'yellow';
  document.getElementById('row5col4').style.backgroundColor = 'yellow';
  document.getElementById('row1col2').style.backgroundColor = 'white';
  document.getElementById('row1col3').style.backgroundColor = 'white';
  document.getElementById('row1col4').style.backgroundColor = 'white';
  document.getElementById('row2col2').style.backgroundColor = 'white';
  document.getElementById('row3col2').style.backgroundColor = 'white';
  document.getElementById('row3col3').style.backgroundColor = 'white';
  document.getElementById('row3col4').style.backgroundColor = 'white';
  document.getElementById('row4col4').style.backgroundColor = 'white';
  document.getElementById('row5col2').style.backgroundColor = 'white';
  document.getElementById('row5col3').style.backgroundColor = 'white';
  document.getElementById('row5col4').style.backgroundColor = 'white';
}




