function startLove() {
  const music = document.getElementById("bgMusic");
  music.play();

  setTimeout(() => {
    window.location.href = "month1.html";
  }, 1500);
}
function showMessage() {
  document.getElementById("popup").style.display = "block";
}

function closeMessage() {
  document.getElementById("popup").style.display = "none";
}

function goNext() {
  window.location.href = "month2.html";
}
