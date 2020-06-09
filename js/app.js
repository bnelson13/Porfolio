const path = document.querySelector('.path-animate');
const length = path.getTotalLength();

path.style.strokeDasharray = length;
path.style.strokeDashoffset = length;

// we can set the speed as well
path.style.animationDuration = "2s";