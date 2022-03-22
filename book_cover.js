var date;
var category;
var content;
var font;

function generateCover() {
  var dateTime = document.getElementById("Timestamp").value;
  date = new Date(dateTime);
  console.log(date);

  category = document.getElementById("Category").value;
  console.log(category);

  if (category.localeCompare('Nanum') == 0) {
    font = 'assets/NanumMyeongjo-Bold.ttf';
  }

  if (category.localeCompare('IBM') == 0) {
    font = 'assets/IBMPlexSerif-Bold.ttf';
  }

  if (category.localeCompare('Vollkorn') == 0) {
    font = 'assets/Vollkorn-Italic.ttf';
  }

  if (category.localeCompare('Frank_Ruhl_Libre') == 0) {
    font = 'assets/FrankRuhlLibre-Bold.ttf';
  }

  if (category.localeCompare('DM_Serif') == 0) {
    font = 'assets/DMSerifDisplay-Regular.ttf';
  }

  // content = document.getElementById("Content").value;
  // console.log(content);

  let myp5 = new p5(bc, document.getElementById("cover"));
}

// set up for instance-based p5js
const bc = ( sketch ) => {

  let x = 276;
  let y = 760;

  let DMSans;
  sketch.preload = () => {
    DMSans = sketch.loadFont(font);
  }

  sketch.setup = () => {
    sketch.createCanvas(1748, 2480);
    sketch.textFont(DMSans);
    sketch.textSize(88);
    sketch.textAlign(sketch.LEFT);
  };

  sketch.draw = () => {
    sketch.background(255);
    sketch.text(date.toString(), 240, 240, 900);
    sketch.fill(0);
    sketch.noStroke();

    var myrng = new Math.seedrandom(date.toString());

    for (let i = 0; i < 72; i++) {
      let col = Math.floor(i / 12);
      let row = i % 12;

      sketch.fill(Math.floor(255 * myrng()));
      sketch.ellipse(x + col * 128, y + row * 128, 72);
    }

    sketch.saveCanvas('cover.png');
    sketch.remove();
    sketch.noLoop();
  };
};
