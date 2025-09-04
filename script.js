// Modify the first "Hello world!" → "GoodBye"
document.getElementById("red").textContent = "GoodBye";

// Change font color of one header to orange
document.querySelector(".blue").style.color = "orange";

// Clickable header changes to brown
document.getElementById("clickable").addEventListener("click", function() {
  this.style.color = "brown";
});