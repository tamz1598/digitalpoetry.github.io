$(function() {

var makeItRain = function() {
//'.rain' called from CSS to be then made empty.
//everytime makeItRain is called, the below action occurs.
//clear out everything.
  $('.rain').empty();
//$(selector).action()
//jquery syntax

  var increment = 0;
  var drops = "";
  var backDrops = "";

//variables named

  while (increment < 100) {
    //math.floor is used to round numbers to the nearest integer.
    //math.random is used to return numbers between 0 and 1.
    //math variables together help generate random numbers between two chosen numbers.
    //couple random numbers to use for various randomizations
    //random number between 98 and 1
    var randoHundo = (Math.floor(Math.random() * (98 - 1 + 1) + 1));
    //random number between 5 and 2
    var randoFiver = (Math.floor(Math.random() * (5 - 2 + 1) + 2));
    //increment
    increment += randoFiver
    //increment = increment + randoFiver
    //add in a new raindrop with various randomizations to certain CSS properties
    drops += '<div class="drop" style="left: ' + increment + '%; bottom: ' + (randoFiver + randoFiver - 1 + 100) + '%; animation-delay: 0.' + randoHundo + 's; animation-duration: 0.5' + randoHundo + 's;"><div class="root" style="animation-delay: 0.' + randoHundo + 's; animation-duration: 0.5' + randoHundo + 's;"></div><div class="splat" style="animation-delay: 0.' + randoHundo + 's; animation-duration: 0.5' + randoHundo + 's;"></div></div>';
    backDrops += '<div class="drop" style="right: ' + increment + '%; bottom: ' + (randoFiver + randoFiver - 1 + 100) + '%; animation-delay: 0.' + randoHundo + 's; animation-duration: 0.5' + randoHundo + 's;"><div class="root" style="animation-delay: 0.' + randoHundo + 's; animation-duration: 0.5' + randoHundo + 's;"></div><div class="splat" style="animation-delay: 0.' + randoHundo + 's; animation-duration: 0.5' + randoHundo + 's;"></div></div>';
  }
  //add 'left' to the class .drop on the CSS + the new number for increment + call the property bottom(adding number to bottom) + (a number between 5 and 2 + "" -1 =100) + animation property delay(smaller number to animation delay) + number between 98 and 1 + animation delay begins to increase + numbers added to root and then splat.
 //same but added to right for the backdrops.

  $('.rain.front-row').append(drops);
  $('.rain.back-row').append(backDrops);
  //body in CSS concerning rain.
  //functions selects the front row and backrow.
  //append = insert or add.
  //backdrops and drops added/inserted.
}

makeItRain();

});
