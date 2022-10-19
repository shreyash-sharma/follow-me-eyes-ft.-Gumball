let eyes = document.querySelectorAll('.eye');
let anchor = document.getElementById('anchor');
let bounds = anchor.getBoundingClientRect();

let anchorX = bounds.left + bounds.width / 2;
let anchorY = bounds.top + bounds.height / 2;

function calcAngle(cx, cy, ex, ey) {
    let dy = ey - cy;
    let dx = ex - cx;
    let rad = Math.atan2(dy, dx);
    let deg = (rad * 180) / Math.PI;
    return deg;
}

document.addEventListener('mousemove', event => {
    let mouseX = event.clientX;
    let mouseY = event.clientY;

    let rotDegree = calcAngle(mouseX, mouseY, anchorX, anchorY);

    eyes.forEach(eye => {
        eye.style.transform = `rotate(${90 + rotDegree}deg)`;
    });
});


