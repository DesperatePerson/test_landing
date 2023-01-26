function slider() {
  const sliderLine = document.querySelector(".slider-line");
  const next = document.querySelector(".slider-next");
  const back = document.querySelector(".slider-back");
  let offset = 0;

  next.addEventListener("click", () => {
    offset = offset + 256;

    if (offset > 512) {
      offset = 0;
    }

    sliderLine.style.left = -offset + "px";
  });

  back.addEventListener("click", () => {
    offset = offset - 256;

    if (offset < 0) {
      offset = 512;
    }

    sliderLine.style.left = -offset + "px";
  });
}

let min = 30;
let sec = 0;

function timer() {
  if (sec === "00" || sec === 0) {
    min--;
    sec = 60;
  }

  if (min < 0) {
    min = "00";
    sec = "00";

    return (document.querySelector(".timer").textContent = min + " : " + sec);
  }

  sec--;

  if (sec < 10 && sec >= 0) {
    sec = "0" + sec;
  }

  if (min < 10 && min.length !== 2) {
    min = "0" + min;
  }

  document.querySelector(".timer").textContent = min + " : " + sec;
  setTimeout(timer, 1000);
}

slider();
timer();
