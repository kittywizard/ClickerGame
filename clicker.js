//click counter

//button that when you click it increments the counter and displays it
var catClick = 0;

function increment() {
  catClick++;
  //console.log(catClick);
  document.getElementById('catNumber').innerHTML = catClick;
}

//auto produce cats  -- something like 'your cats are now breeding'
//change this to a switch later?

if (catClick == 20 ) {
  //display a button to start auto producing cats
}

//run a function that is connected to the button
//when that button is clicked, start auto producing cats

//needs to disappear after clicking so the function can't run again until we want it to 
