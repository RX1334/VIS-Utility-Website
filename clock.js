var font = 'assets/DMSerifDisplay-Regular.ttf';
var date;
var time;

document.addEventListener('DOMContentLoaded', function() {
  let myp5 = new p5(clock, document.getElementById("clock"));
}, false);

// set up for instance-based p5js
const clock = ( sketch ) => {

  let x = 64;
  let y = 64;

  let DMSans;
  sketch.preload = () => {
    DMSans = sketch.loadFont(font);
  }

  sketch.setup = () => {
    sketch.createCanvas(600, 200);
    sketch.textFont(DMSans);
    sketch.textSize(112);
    sketch.textAlign(sketch.LEFT);
    sketch.frameRate(1);
  };

  sketch.draw = () => {
    date = new Date();
    time = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
    var myrng = new Math.seedrandom(date.toString());

    sketch.background(255);
    sketch.fill(32);
    sketch.text(time, 204, 132, 300);
    sketch.noStroke();

    for (let i = 0; i < 4; i++) {
      let col = Math.floor(i / 2);
      let row = i % 2;

      sketch.fill(Math.floor(255 * myrng()));
      sketch.ellipse(x + col * 64, y + row * 64, 40);
    }
  };
};
