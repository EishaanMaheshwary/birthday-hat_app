function setup() {
  canvas=createCanvas(400, 400);
  canvas.center()
  video = createCapture(VIDEO);
  video.hide();
}

function draw(){
  image(video,75,75,250,250);
  fill(255,0,0);
  triangle(200,30,160,105,240,105)
}
function take_snapshot(){
  save("selfie.png");
}
