var CVS = document.createElement('canvas'),
  CTX = CVS.getContext('2d');

CVS.width = innerWidth;
CVS.height = innerHeight;

var PI2 = Math.PI * 2,
  posx = (CVS.width / 2),
  posy = (CVS.height / 2),
  r = Math.min(innerWidth, innerHeight) / 2 - 10,
  start = 0,
  sign = -1,
  speed = 1,
  angle = 0,
  waves = [0, 0.25, 0.5, 0.75],
  hour = '',
  hexa = '',
  style = {};

style.exter = '#f2ee2e';
style.bands = '#a6b1e5';
style.four = '#626ab6';
style.arrow = '#c9f5b1';
style.inter = '#449c5b';
style.waves = '#626cd6';
style.text = '#c11';
style.textlines = '#c33';

style.inter = CTX.createRadialGradient(
  0, 0, 0,
  0, 0, r * 0.52);
style.inter.addColorStop(0, '#4baa64');
style.inter.addColorStop(1, '#3b874f');

style.shadow = CTX.createRadialGradient(
  0, 0, r + 5,
  0, 0, r + 20);
style.shadow.addColorStop(0, 'rgba(0, 0, 0, 0.2)');
style.shadow.addColorStop(1, 'rgba(0, 0, 0, 0)');

function easing(x) {
  return 0.5 * ((x *= 2) < 1 ? x * x : x * (4 - x) - 2);
}

CTX.translate(posx, posy);

var animationLoop = function(t) {
  var x, y, n;

  requestAnimationFrame(animationLoop);

  CTX.clearRect(-r, -r, CVS.width, CVS.height);

  CTX.save();

  // CONSTRUCT THE FOUR PART RING
  CTX.strokeStyle = style.four;

  // Hollow ring
  CTX.beginPath();
  CTX.arc(0, 0, r * 0.65, 0, PI2, false);
  CTX.lineWidth = r / 19;
  CTX.stroke();

  CTX.globalCompositeOperation = 'destination-out';

  n = 2;
  while (n--) {
    x = Math.cos(PI2 * n / 4);
    y = Math.sin(PI2 * n / 4);

    CTX.beginPath();
    CTX.moveTo(-r * x, -r * y);
    CTX.lineTo(r * x, r * y);
    CTX.lineWidth = r / 2.5;
    CTX.stroke();
  }

  CTX.globalCompositeOperation = 'source-over';

  n = 2;
  while (n--) {
    x = Math.cos(PI2 * n / 4);
    y = Math.sin(PI2 * n / 4);

    CTX.beginPath();
    CTX.moveTo(-r * x, -r * y);
    CTX.lineTo(r * x, r * y);
    CTX.lineWidth = r / 10;
    CTX.stroke();
  }

  CTX.globalCompositeOperation = 'source-out';

  CTX.lineWidth = r / 4.5;
  CTX.beginPath();
  CTX.arc(0, 0, r * 0.68, 0, PI2, false);
  CTX.stroke();

  CTX.restore();

  CTX.save();

  CTX.strokeStyle = style.exter;
  CTX.lineWidth = r / 30;
  CTX.beginPath();
  CTX.arc(0, 0, r, 0, PI2, false);
  CTX.stroke();

  CTX.strokeStyle = style.bands;
  CTX.lineWidth = r * 0.13;
  n = 120;
  while (n--) {
    x = PI2 * n / 120 - (t * 0.0005) % PI2;
    CTX.beginPath();
    CTX.arc(0, 0, r * 0.89, x, x + PI2 / 240, false);
    CTX.stroke();
  }

  CTX.restore();

  CTX.save();

  // GREEN CIRCLE INSIDE
  CTX.beginPath();
  CTX.arc(0, 0, r * 0.52, 0, PI2, false);
  CTX.fillStyle = style.inter;
  CTX.fill();

  // WAVES
  CTX.strokeStyle = style.waves;
  CTX.lineWidth = r * 0.02;
  // the waves will only appear over what's already drawn
  CTX.globalCompositeOperation = 'source-atop';

  n = waves.length;
  while (n--) {
    waves[n] += 0.003;
    if (waves[n] > 1)
      waves[n] = 0;

    CTX.beginPath();
    CTX.globalAlpha = 1 - Math.pow(waves[n], 3);
    CTX.arc(0, 0, r * waves[n], 0, PI2, false);
    CTX.stroke();
  }

  CTX.restore();
  CTX.save();

  // ROTATING ARROWS
  CTX.fillStyle = style.arrow;

  // get a normalized value for the advance
  x = Math.min(1, (t - start) / 2500);
  // and make it smoother
  x = easing(x);
  n = 4;
  while (n--) {
    y = PI2 * (angle + sign * x * speed + n / 4);

    CTX.beginPath();
    CTX.moveTo(
      r * 0.78 * Math.cos(y + PI2 / 50),
      r * 0.78 * Math.sin(y + PI2 / 50));
    CTX.lineTo(
      r * 0.61 * Math.cos(y),
      r * 0.61 * Math.sin(y));
    CTX.lineTo(
      r * 0.78 * Math.cos(y - PI2 / 50),
      r * 0.78 * Math.sin(y - PI2 / 50));
    CTX.closePath();
    CTX.fill();
  }

  // if the rotation timer ended
  if (x == 1) {
    // save current position,
    angle += sign * x * speed;
    // set a new speed
    speed = 0.2 + Math.random() * 0.8;
    // change direction
    sign *= -1;
    // and reset the timer
    start = t;
  }

  // DARK SHADOW
  // we need it behind all
  CTX.globalCompositeOperation = 'destination-over';
  CTX.beginPath();
  CTX.arc(0, 0, r + 20, 0, PI2, false);
  CTX.fillStyle = style.shadow;
  CTX.fill();

  CTX.restore();
  CTX.save();

  // RANDOM TEXT
  CTX.fillStyle = style.text;
  CTX.strokeStyle = style.textlines;
  CTX.lineWidth = r * 0.012;

  // hexadecimal
  CTX.font = Math.floor(r * 0.11) + 'px Impact';
  CTX.textAlign = 'right';
  CTX.fillText(hexa, -r * 0.38, r * 0.26);
  // line under the hexadecimal
  CTX.beginPath();
  CTX.moveTo(-r * 0.15, r * 0.14);
  CTX.lineTo(-r * 0.34, r * 0.29);
  CTX.lineTo(-r * 0.74, r * 0.29);
  CTX.stroke();

  // time
  CTX.font = Math.floor(r * 0.11) + 'px Arial';
  CTX.textAlign = 'left';
  CTX.fillText(hour, r * 0.35, -r * 0.25, r * 0.48);
  // line under the time
  CTX.beginPath();
  CTX.moveTo(r * 0.22, -r * 0.1);
  CTX.lineTo(r * 0.35, -r * 0.22);
  CTX.lineTo(r * 0.82, -r * 0.22);
  CTX.stroke();

  // for the inverted time we need a trick
  CTX.save();
  CTX.scale(-1, 1);
  // inverted time
  CTX.font = Math.floor(r * 0.11) + 'px Arial';
  CTX.textAlign = 'left';
  CTX.fillText(hour, r * 0.18, -r * 0.4, r * 0.48);
  // line under the inverted time
  CTX.beginPath();
  CTX.moveTo(r * 0.05, -r * 0.2);
  CTX.lineTo(r * 0.18, -r * 0.37);
  CTX.lineTo(r * 0.68, -r * 0.37);
  CTX.stroke();
  // end of the trick
  CTX.restore();

  // set new random text strings
  if (t % 80 > 65) {
    hour = [
      ('0' + Math.floor(Math.random() * 24)).substr(-2), ('0' + Math.floor(Math.random() * 60)).substr(-2), ('0' + Math.floor(Math.random() * 60)).substr(-2), ('0' + Math.floor(Math.random() * 60)).substr(-2)
    ].join(':');
    hexa = '0xFF' + Math.floor(Math.random() * 16777215).toString(16).toUpperCase();
  }

  CTX.restore();
  CTX.save();

  // DIGIMON INFO
  var nombre = 'BAKOMON';

  CTX.drawImage(imgcv, -imgcv.width / 2, -imgcv.height / 2 - r * 0.14);

  CTX.font = Math.floor(r * 0.25) + 'px Arial Black';
  CTX.textAlign = 'center';

  CTX.fillStyle = '#ffffff';
  CTX.fillText(nombre, r * 0.015, r * 0.685, r * 1.5);

  CTX.fillStyle = '#cc1111';
  CTX.fillText(nombre, 0, r * 0.67, r * 1.5);
  
  CTX.restore();
};

document.body.appendChild(CVS);

var imgcv = document.createElement('canvas');

// most images have a white background
// this is a very quick workaround
function clearImageBackground() {
  var ctx, imgdata, data, x, y, i, pre,
    w = this.naturalWidth + 2,
    h = this.naturalHeight + 2;

  imgcv.width = w;
  imgcv.height = h;

  ctx = imgcv.getContext('2d');
  ctx.fillStyle = '#ffffff';
  ctx.fillRect(0, 0, w, h);
  ctx.drawImage(this, 1, 1);

  imgdata = ctx.getImageData(0, 0, w, h);
  data = imgdata.data;

  function index(x, y) {
    return (x * w + y) * 4;
  }

  pre = true;
  for (x = 0; x < w; x++) {
    for (y = 0; y < h; y++) {
      i = index(x, y);

      if (pre) {
        if (data[i] > 230 && data[i + 1] > 230 && data[i + 2] > 230)
          data[i + 3] = 0;
        else if (data[i] > 160 && data[i + 1] > 160 && data[i + 2] > 160)
          data[i + 3] = (230 - (data[i] + data[i + 1] + data[i + 2]) / 3) / 70;
      }
    }
  }

  ctx.putImageData(imgdata, 0, 0);

  animationLoop();
}

clearImageBackground.call(document.querySelector('#di'));