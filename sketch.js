let d = 60;
let deg = 58;
let outline = true;

let gui;
let diameterSlider, degslider, outlinecheckbox;


function setup() {
  createCanvas(400, 400);
  rectMode(CENTER);
  strokeWeight(10);

  gui = createGui();
  gui.setRounding(1); 

  diameterSlider = createSlider("Diameter", 200, 10, 100, 20, 10, 100);
  diameterSlider.onChange = diameterSliderChange;
  diameterSlider.setStyle({
    fillBg: color("green"),
})
  degslider = createSlider("Rotation" , 200,40,100,20,0,180);
  degslider.isInteger = true; 
  degslider.setStyle({
    fillBg: color("yellow")
  })
  degslider.val = 23;
  outlinecheckbox = createCheckbox("Outline", 340,10,20,20, true);
}

function draw() {
  background(125);
  drawGui();

  if (outlinecheckbox.val) {
    stroke("black");
  } else {
    noStroke();
  }

circle(100,200,d);

push();
translate(200, 200);
rotate(radians(degslider.val));
rect(0, 0, 60, 60);
pop();

noStroke();
text(diameterSlider.label, 140, 25);

}
function diameterSliderChange() {
  d = diameterSlider.val;
}