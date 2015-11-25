var data;
function preload(){
data = loadJSON("spinalTapDrummers.json");
}

function setup(){

  var canvas = createCanvas(300,100);
  canvas.parent('sketch');

  var deceasedDrummers = data.deceasedDrummers;

  var died = [];
  var name = [];
  var joined = [];

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

}
