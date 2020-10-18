
function skillLoader() {
  var section = document.querySelector('#skills');
  var counters = document.querySelectorAll('.counter');
  var circles = document.getElementsByClassName('loading');
  var bars = document.getElementsByClassName('front');

  if (isInView(section)) {
    animateBars(circles, bars);
    for (var i = 0; i < counters.length; i++) {
      animateCounters(counters[i]);
    }
  }

}

// check if section is in view
function isInView(section) {
  var bounding = section.getBoundingClientRect();
  if (bounding.top >= 0 && bounding.top < 120 || bounding.bottom <= 0 && bounding.bottom > 120) {
    return true;
  } else {
    return false;
  }
}
// Adds animate class to circles and bars
function animateBars(circles, bars) {
  // When in view add class=animate
  for (var i = 0; i < circles.length; i++) {
    circles[i].classList.add('animate');
    bars[i].classList.add('animate');
  }
}

function animateCounters(counter) {
  var target = parseInt(counter.dataset.percentage);
  var animationLength = 2000/target;
  if (counter.classList.contains('waiting')) {
    // If the increment has not started remove waiting class
    counter.classList.remove('waiting');
    let increment = 1;
    let time = setInterval(function() {
      increment += 1;
      counter.innerHTML = increment +"%";
      if (increment === target) {
        clearInterval(time);
      }
    }, animationLength);
  }
}
//if (window.innerWidth >= 1200){
  //document.getElementById("right-content").style.left="500px";
//}