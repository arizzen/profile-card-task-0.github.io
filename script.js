const timeElement = document.getElementById("current-time");

function updateTime() {
  timeElement.textContent = Date.now();
}

// Update once on load
updateTime();

// Optionally update every second
setInterval(updateTime, 1000);
