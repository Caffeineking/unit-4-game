var counter = 0;
// Each crystal should have a random hidden value between 1 - 12.
//set a var to get a random number * The random number shown at the start of the game should be between 19 - 120.
var randomTargetMax = 120;
var randomTargetMin = 19;
// Each crystal should have a random hidden value between 1 - 12.
var randomHiddenMax = 12;
var randomHiddenMin = 1;    
var numberOptions = [1, 2, 3, 4]; // never
var winTally = 0;
var loseTally = 0;
  //FUNCTIONS--------------------!!!!!!!!!!!!!!!!!!!!!!!!!!
  // created a function to get a random number
function getRandomNumber(max, min){
  return  Math.floor(Math.random() * (max - min + 1)) + min;
}
// creating a function to restart the game without reloading it.
function resetGame() {
  var newTargetNumber = getRandomNumber(randomTargetMax, randomTargetMin);
  console.log("your new target number is: " + newTargetNumber);
  $("h1").html("Number to Guess: " + newTargetNumber);
  targetDisplay = newTargetNumber;
  // reassign a new hidden number for each 4 images
   targetHiddenNumber1 = getRandomNumber(randomHiddenMax, randomHiddenMin);
   targetHiddenNumber2 = getRandomNumber(randomHiddenMax, randomHiddenMin);
   targetHiddenNumber3 = getRandomNumber(randomHiddenMax, randomHiddenMin);
   targetHiddenNumber4 = getRandomNumber(randomHiddenMax, randomHiddenMin);       
   // reassigned values into the crystals!!!  
  $(".crystal-number-0").attr("data-crystalvalue",targetHiddenNumber1);
  $(".crystal-number-1").attr("data-crystalvalue",targetHiddenNumber2);
  $(".crystal-number-2").attr("data-crystalvalue",targetHiddenNumber3);
  $(".crystal-number-3").attr("data-crystalvalue",targetHiddenNumber4);
}
// ------------- i might have to make a random number for each crystal that has been placed because how its been coded
// I might have to make targetHiddenNumber 1 2 3 4 to add properties for different ones.
var targetHiddenNumber1 = getRandomNumber(randomHiddenMax, randomHiddenMin);
var targetHiddenNumber2 = getRandomNumber(randomHiddenMax, randomHiddenMin);
var targetHiddenNumber3 = getRandomNumber(randomHiddenMax, randomHiddenMin);
var targetHiddenNumber4 = getRandomNumber(randomHiddenMax, randomHiddenMin);
//^^ was correct above statement after trying it out
//reassign targetHiddenNumber 1-4 to be added into an array. after that, add that to the for value
var targetHiddenNumberArray = [targetHiddenNumber1,targetHiddenNumber2,targetHiddenNumber3,targetHiddenNumber4];
console.log("your crystal value is: " + targetHiddenNumber1);
console.log("your first crystal value is: "  + targetHiddenNumberArray[0]);
var targetDisplay = getRandomNumber(randomTargetMax, randomTargetMin);
console.log("your target display: " + targetDisplay);    
$("#number-to-guess").text(targetDisplay);
// code to spread out the crystals 
for (var i = 0; i < numberOptions.length; i++) {
for (var i = 0; i < targetHiddenNumberArray.length; i++){    
var imageCrystal = $("<img>");    
imageCrystal.addClass("crystal-image");
imageCrystal.addClass("crystal-number-"+i); // added to mark the crystals and      
imageCrystal.attr("src", "http://cdn.playbuzz.com/cdn/35910209-2844-45c0-b099-f4d82878d54f/00261fda-4062-4096-81fd-8cf96b9034e8.jpg"); 
imageCrystal.attr("data-crystalvalue",targetHiddenNumberArray[i]);//replaced numberOptions[i] with targetHiddenNumber makes it the same property for each.
$("#crystals").append(imageCrystal);
}
}
// on click function that came with the example
$(".crystal-image").on("click", function() {
var crystalValue = ($(this).attr("data-crystalvalue"));
crystalValue = parseInt(crystalValue);    
console.log("your crystal value: " + crystalValue);
counter += crystalValue;
alert("New score: " + counter);
if (counter === targetDisplay) {
    counter = 0;
    winTally++;        
    alert("You win!");
    resetGame(); // added         
}else if (counter >= targetDisplay) {
    counter = 0;
    loseTally++;        
    alert("You lose!!");
    resetGame();// added
    }
// why cant I put this block of code up there instead it needs to be here for it to work                                                     
$("#win-tally").text("Your current wins are: " + winTally);                                                                          
$("#lose-tally").text("Your current losses are: " + loseTally); 
});