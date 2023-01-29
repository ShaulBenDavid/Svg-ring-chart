const activityRing = document.querySelector("#progress-ring");

const circle = 2 * Math.PI * 80;
const percentage = 50;

activityRing.style.strokeDasharray = circle;
activityRing.style.strokeDashoffset = ((100 - percentage) * circle) / 100;

console.log(activityRing.style.strokeDashoffset);
console.log(1);
