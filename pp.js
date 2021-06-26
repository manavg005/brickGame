const ball = document.querySelector(".ball");
const ship = document.querySelector(".ship");

const Xend = window.innerWidth;
const Yend = window.innerHeight;

console.log(Xend, Yend);

let i = Xend / 2,
  j = Yend / 2,
  a = 3,
  b = 3;

setInterval(() => {
  ball.style.transform = `translate(${i}px,${j}px)`;
  i += a;
  j += b;
  if (i >= Xend - 20 || i <= 20) a = -a;
  if (j >= Yend - 20 || j <= 20) b = -b;
}, 1);

function myFunction(e) {
  var x = e.clientX;
  var y = e.clientY;
  var coor = "Coordinates: (" + x + "," + y + ")";
  document.getElementById("demo").innerHTML = coor;
}

ship.addEventListener("onmousemove", (e) => {
  console.log(e.clientX);
});
