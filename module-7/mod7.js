/*
Justin Brehms
CSD 360
Module 7
Date: 7/4/2021
*/

//Create array
var sportsTeams = ["Lakers" , "Wizards", "Bulls", "Knicks", "Nuggets", "Warriors", "Bucks", "Mavericks", "Spurs", "Rockets"];
//loop through the array and output to console
for(var i = 0; i < sportsTeams.length; i++){
console.log(sportsTeams[i]);
}
//loop backwards through array by taking the length -1 and decrementing the index
for(var i = sportsTeams.length;i > 0; i--){
    console.log(sportsTeams[i-1]);
    }
