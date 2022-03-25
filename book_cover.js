var date;
var category;
var content;
var font;
var fileName;

function generateCover() {
  var dateTime = document.getElementById("Timestamp").value;
  date = new Date(dateTime);
  console.log(date);

  category = document.getElementById("Category").value;
  console.log(category);

  fileName = document.getElementById("bookName").value;
  console.log(fileName);

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
  let myp52 = new p5(bbc, document.getElementById("backCover"));
}

// set up for instance-based p5js
const bc = ( sketch ) => {

  let x = 240;
  let y = 240;

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
    sketch.noStroke();

    var myrng = new Math.seedrandom(date.toString());

    for (let i = 0; i < 187; i++) {
      let col = Math.floor(i / 17);
      let row = i % 17;

      sketch.fill(Math.floor(255 * myrng()));
      sketch.ellipse(x + col * 128, y + row * 128, 72);
    }

    sketch.saveCanvas(fileName + "-front.png");
    sketch.remove();
    sketch.noLoop();
  };
};

// set up for instance-based p5js
const bbc = ( sketch ) => {

  let x = 240;
  let y = 240;

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

    sketch.saveCanvas(fileName + "-back.png");
    sketch.remove();
    sketch.noLoop();
  };
};
