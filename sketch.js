var data;
function preload(){
data = loadJSON("spinalTapDrummers.json");
}

function setup(){

  var canvas = createCanvas(1000,300);
  canvas.parent('sketch');

  var deceasedDrummers = data.deceasedDrummers;
  var x = 20;
  var y = height/2;
  line (0,y,width,y);
  for(var i = 0; i < deceasedDrummers.length; i++){
    var drummer = deceasedDrummers[i];
    var died = drummer.died;
    var joined = drummer.joined;
    var sizeFactor = width/70;

    fill(255);
    // + 1 because one year may also be from jan to dec
    // the ellipses sizes depend on the length the drummer participated to the band
    ellipse(x + (1 + died - joined)* sizeFactor/2, y, (1 + died - joined)* sizeFactor, ( 1+ died - joined)* sizeFactor);
    x = x + (1 + died - joined)* sizeFactor;


  }

}
function draw(){

}
