var data;
function preload(){
data = loadJSON("spinalTapDrummers.json");
}

function setup(){

  var canvas = createCanvas(300,100);
  canvas.parent('sketch');
  var deceasedDrummers = data.deceasedDrummers;
var x = 20;
var y = 20;
  for(var i = 0; i < deceasedDrummers.length; i++){
    var drummer = deceasedDrummers[i];
    var died = drummer.died;
    var joined = drummer.joined;


    ellipse(x, y, died -joined, died -joined);
    x = x + width/deceasedDrummers.length;
  }

}
function draw(){

}
