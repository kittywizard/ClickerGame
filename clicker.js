//click counter

//button that when you click it increments the counter and displays it
var catClick = 0;

function increment() {
  catClick++;
  //console.log(catClick);
  document.getElementById('catNumber').innerHTML = catClick;
}

//auto produce cats  -- something like 'your cats are now breeding'
