var data;
function preload(){
data = loadJSON("spinalTapDrummers.json");
}

function setup(){
  colorMode(HSB,360,100,100,100);

  var canvas = createCanvas(1000,400);
  canvas.parent('sketch');
  var deceasedDrummers = data.deceasedDrummers;
  var des = deceasedDrummers.description;

  var x = 20;
  var y = height/2;
  line (0, y, width, y);

  for(var i = 0; i < deceasedDrummers.length; i++){

    var drummer = deceasedDrummers[i];
    var died = drummer.died;
    var joined = drummer.joined;
    var sizeFactor = width/70;
    var name = drummer.name;
    var last = name.last;
    var first = name.first;

    textSize(20);
    rectMode(CENTER);
    text(des, x, 0);

    stroke(255);
    strokeWeight(0.25);
    fill(255);
    // + 1 because one year may also be from jan to dec
    // the ellipses sizes depend on the length the drummer participated to the band
    ellipse(x + (1 + died - joined)* sizeFactor/2, y, (1 + died - joined)* sizeFactor, ( 1+ died - joined)* sizeFactor);

    textSize(10);

    text(first + " " + last, (x + (1 + died - joined)* sizeFactor/2), y*1.8, 10,25);

    x = x + (1 + died - joined)* sizeFactor;

}


}
function draw(){

}
