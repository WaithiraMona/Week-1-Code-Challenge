const prompt=require("prompt-sync")({sigint:true}); 
let speed = prompt("Enter the car's speed (in km/h):");

if (speed <= 70) {
  console.log("Ok");
} else {
  let demeritPoints = Math.floor((speed - 70) / 5);
  console.log("Points: " + demeritPoints);
  
  if (demeritPoints >= 12) {
    console.log("License suspended");
  }
}
