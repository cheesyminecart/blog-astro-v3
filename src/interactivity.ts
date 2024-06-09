var fullImg = (document.getElementById("fullImg") as HTMLInputElement).value;
var box = document.getElementById("box");

function openImg(pic) {
  box.style.display = "block";
  fullImg.src = pic;
}

function closeImg() {
  box.style.display = "none";
}
