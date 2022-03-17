// VTone image uploader
const image_input = document.querySelector("#image_input");
var img = new Image();
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
var fileName = '';

image_input.addEventListener("change", function(){
  var file = document.querySelector('#image_input').files[0];
  var reader = new FileReader();
  if (file) {
    fileName = file.name;
    reader.readAsDataURL(file);
  }
  reader.addEventListener("load", function () {
    const uploaded_image = reader.result;
    document.querySelector("#display_image").style.backgroundImage = `url(${uploaded_image})`;
    img = new Image();
    img.src = uploaded_image;
    img.onload = function () {
      document.getElementById('status').innerText = "Processing Image";

      canvas.width = img.width;
      canvas.height = img.height;
      ctx.drawImage(img, 0, 0, img.width, img.height);
      document.getElementById('canvas').removeAttribute("data-caman-id");

      Caman('#canvas', img, function () {
        this.noise(20);
        this.vibrance(20);
        this.exposure(10);
        this.render(function() {
          var dataURL = canvas.toDataURL("image/jpeg", 0.8);
          document.querySelector("#editted_image").style.backgroundImage = 'url(' + dataURL + ')';
          document.getElementById('status').innerText = "Processing Finished";
        });
      });
    }
  }, false);
});

// download functionality
const download_btn = document.querySelector("#download_btn");
download_btn.addEventListener('click', function (e) {
    var fileExtension = fileName.slice(-4);
    if (fileExtension == '.jpg' || fileExtension == '.png') {
        var actualName = fileName.substring(0, fileName.length - 4);
    }
    download(canvas, actualName + '-edited.jpg');
});

function download(canvas, filename) {
    var  e;
    var lnk = document.createElement('a');

    lnk.download = filename;
    lnk.href = canvas.toDataURL("image/jpeg", 0.8);

    if (document.createEvent) {
        e = document.createEvent("MouseEvents");
        e.initMouseEvent("click", true, true, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
        lnk.dispatchEvent(e);
    }
    else if (lnk.fireEvent) {
        lnk.fireEvent("onclick");
    }
}
