var data;
function preload(){
data = loadJSON("spinalTapDrummers.json");
}

function setup(){
  colorMode(HSB,360,100,100,100);

  var canvas = createCanvas(1000,400);
  canvas.parent('sketch');
  //fill(300,100,100,100);
  //rect(0,0,width,height);

  var deceasedDrummers = data.deceasedDrummers;

  var x = 20;
  var y = height/2;
  line (0,y,width,y);
  for(var i = 0; i < deceasedDrummers.length; i++){
    var drummer = deceasedDrummers[i];
    var died = drummer.died;
    var joined = drummer.joined;
    var sizeFactor = width/70;
    var name = drummer.name;
    var last = name.last;
    var first = name.first;
    fill(255);
    // + 1 because one year may also be from jan to dec
    // the ellipses sizes depend on the length the drummer participated to the band
    ellipse(x + (1 + died - joined)* sizeFactor/2, y, (1 + died - joined)* sizeFactor, ( 1+ died - joined)* sizeFactor);

    fill(0);
    textSize(10);
    rectMode(CENTER);
    text(first + " " + last, (x + (1 + died - joined)* sizeFactor/2), y*1.8, 10,25);

    x = x + (1 + died - joined)* sizeFactor;

}


}
function draw(){

}
