// based on this pen: https://codepen.io/kuka/pen/GpJZQL

let fractionOfSize;
if (window.innerWidth <= 640) {
  fractionOfSize = 70;
} else {
  fractionOfSize = 120;
}

// HELPERS
function debounce(func, wait, immediate) {
  var timeout;
  return function () {
    var context = this, args = arguments;
    var later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
};

// DOTS
function Dots(element) {
  this.element = document.querySelector(element);
  this.settings = {};
  this.settings.horizontal = (window.innerWidth / fractionOfSize).toFixed(0);
  this.settings.vertical = (window.innerHeight / fractionOfSize).toFixed(0);

  this.init();
}

Dots.prototype.init = function() {
  this.wrapper = document.createElement('div');
  this.wrapper.className = 'ui-layer-dots';
  this.quantity = this.settings.horizontal * this.settings.vertical;
  this.row = 0;
  this.column = 0;
  this.dots = [];

  this.isInitialized = false;

  this.setup();
  this.draw();

  window.addEventListener('resize',() => debounce(this.draw(), 250));
  window.addEventListener('orientationchange',() => debounce(this.draw(), 250));

  return {
    wrapper: this.wrapper,
  };
};

Dots.prototype.random = function(limit) {
  return Math.random() * limit;
};

Dots.prototype.setup = function() {
  for (var i, i = 0; i < this.quantity; i++) {
    const dot = document.createElement('span');
    dot.innerHTML = '+';
    dot.className = 'ui-layer-dot';

    this.dots.push(dot);
    this.wrapper.appendChild(dot);
  }

  this.element.appendChild(this.wrapper);
};

Dots.prototype.updateDimensions = function() {
  this.width = window.innerWidth;
  this.height = window.innerHeight;
};

Dots.prototype.draw = function() {
  this.updateDimensions();

  this.row = 0;

  this.dots.forEach(
    (dot, index) => {
      this.drawDot(dot, index);
    },
  );

  this.isInitialized = true;
};

Dots.prototype.drawDot = function(dot, index) {
  let x; let y; let random;

  random = this.random(100);

  if (index % this.settings.horizontal == 0) {
    // reset
    this.column = 1;
    this.row++;
  }

  x = this.column * (this.width / this.settings.horizontal)
    - this.width / this.settings.horizontal / 2;
  y = this.row * (this.height / this.settings.vertical) - this.height / this.settings.vertical / 2;

  this.column++;

  dot.style.webkitAnimationDelay = `${random}ms`;
  dot.style.mozAnimationDelay = `${random}ms`;
  dot.style.msAnimationDelay = `${random}ms`;
  dot.style.animationDelay = `${random}ms`;
  dot.style.mozTransitionDelay = `${random / 3}ms`;
  dot.style.webkitTransitionDelay = `${random / 3}ms`;
  dot.style.msTransitionDelay = `${random / 3}ms`;
  dot.style.transitionDelay = `${random / 3}ms`;

  if (this.isInitialized) {
    var val = `translate3d(${x}px,${y}px, 0)`;
    dot.style.MozTransform = val;
    dot.style.WebkitTransform = val;
    dot.style.transform = val;
    dot.style.msTransform = val;
  } else {
    var val = `translate3d(${Math.random() * window.innerWidth}px,${Math.random() * window.innerHeight}px, 0)`;
    dot.style.MozTransform = val;
    dot.style.WebkitTransform = val;
    dot.style.transform = val;
    dot.style.msTransform = val;

    setTimeout(() => {
      var val = `translate3d(${x}px,${y}px, 0)`;
      dot.style.MozTransform = val;
      dot.style.WebkitTransform = val;
      dot.style.transform = val;
      dot.style.msTransform = val;
    }, random);
  }
};

export default Dots;
