const fellatio = function () {
  document.getElementById("fellatio").src = "img/fellatio.jpg";
};

const fuckDaughter = function () {
  document.getElementById("fellatio").src = "img/fuck daughter.jpg";
};

const changeIntro = function () {
  document.getElementById("intro").innerHTML = "have fun fucking her~";
};

document.getElementById("introCtrl").addEventListener("click", changeIntro);

let isFellatio = true;

setInterval(() => {
  if (isFellatio) {
    fuckDaughter();
    isFellatio = false;
  } else {
    fellatio();
    isFellatio = true;
  }
}, 2000);
