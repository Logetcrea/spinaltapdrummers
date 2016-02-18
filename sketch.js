var data;
function preload(){
data = loadJSON("spinalTapDrummers.json");
}

function setup(){

  var sizeFactor = windowWidth/70;

  var canvas = createCanvas(windowWidth,windowWidth/2);
  canvas.parent('sketch');

  colorMode(HSB,360,100,100,100);
  stroke(360,0,100,100);
  fill(360,0,100,100);
  textSize(20);
  textFont("avenir");

  var deceasedDrummers = data.deceasedDrummers;
  var des = data.description;

  var start = deceasedDrummers[0];
  var starts = start.joined;

  var end = deceasedDrummers[deceasedDrummers.length - 1];
  var ends = end.died;

  var x = 20;
  var y = height/2;

  var yPos;
  var bool = true;


  var lastCounter = 0;

  line(0,y,x-1,y);

  fill(255);
  noStroke();

  text(des, x, 0, width,100);

  text(des, x, 0, width,100);
  strokeWeight(1);
  line (0,y,width,y);
  strokeWeight(0.25);


  line(0,y,x-1,y);

  fill(255);
  noStroke();

  text(des, x, 0, width,100);

  textSize(8);

  text(starts,0,y);


  for(var i = 0; i < deceasedDrummers.length; i++){

    var drummer = deceasedDrummers[i];
    var died = drummer.died;
    var joined = drummer.joined;
    var name = drummer.name;
    var last = name.last;
    var first = name.first;
    var nick = name.nick;


    stroke(360,0,100,100);
    strokeWeight(1);
    noFill();

    // + 1 because one year may also be from jan to dec
    // the ellipses sizes depend on the length the drummer participated to the band
    ellipse(x + (1 + died - joined)* sizeFactor/2, y, (1 + died - joined)* sizeFactor, ( 1+ died - joined)* sizeFactor);

    textSize(8);
    rectMode(CENTER);

    if (bool){
      yPos = 2;
      bool = false;
    }else{
      yPos = 2.2;
      bool = true;

    }

    fill(255);
    noStroke();

    text(first + " " + '"' + nick + '"' + " " + last, (x + (1 + died - joined)* sizeFactor/2), y * yPos, 50,200);

    x = x + (1 + died - joined)* sizeFactor;

    if(lastCounter === deceasedDrummers.length-1){
      lastX = (x + (died - joined)* sizeFactor/2);
      text(ends,lastX,y);
      stroke(360,0,100,100);
      line(lastX-windowWidth/140,y,width,y);
    }else{
      lastCounter++;
    }
  }
}
function draw(){

}
