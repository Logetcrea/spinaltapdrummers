var data;
function preload(){
data = loadJSON("spinalTapDrummers.json");
// NEVER LOG IN PRELOAD TO THE CONSOLE !!!!!!!!!!!
}
// getting started with p5js
function setup(){

  var canvas = createCanvas(300,100);
  canvas.parent('sketch');
  // text("empty example", 10,10);


  // console.log(data);
  // executed once
  var deceasedDrummers = data.deceasedDrummers;
  // var numberOfObjects = 0;
  var died = [];  // will hold the point died
  var name = []; // will hold the letter names
  var joined = []; // will hold the number of joined

// this is an special loop for objects
// https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Statements/for...in
  for(var key in deceasedDrummers){
    joined.push(deceasedDrummers[key].joined); // add the tile died to the array joined
    died.push(deceasedDrummers[key].points);// add the point died to the array points
    name.push(key); // add the keys a,b,c,d,... to the array name
  }

var x = 0;
rectMode(CENTER);
// display it
var step = width/died.length;
for(var i = 0; i < deceasedDrummers.length; i++){
  text(name[i],x,(height/2) - 10);
  ellipse(x,height/2 , died[i]-joined[i], died[i]-joined[i]);

  x+=step;
  }
}


function draw(){
  // executed all the time
}

// function callback (){

// }
