const sldonFolder = "./data/newsEditions"
// The date of the sports day!!!
const countDownDate = new Date("Aug 20,2026 16:00:00").getTime();
////////////


document.querySelectorAll('.navMenuButton').forEach(item => {
    item.addEventListener('click', () => {
        const navButtonHref = item.querySelectorAll("a")[0].href;

        window.open(navButtonHref,"_blank");
    });
});



// Update the count down every 1 second
var coundownRefreshInvoker = setInterval(function() {
  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  document.getElementById("dayCounter").textContent = days;
  document.getElementById("hoursCounter").textContent = String(hours).padStart(2,'0');;
  document.getElementById("minutesCounter").textContent = String(minutes).padStart(2,'0');;
  document.getElementById("secondsCounter").textContent = String(seconds).padStart(2,'0');


  
  // If the count down is finished
  if (distance < 0) {
    clearInterval(x);
  }
}, 1000); // 1000 ms

document.getElementById("leaderBoardButton").addEventListener('click', () => {
  document.getElementById("leaderboards").classList.remove("hidden");
})

document.getElementById("leaderboardsCloseButton").addEventListener('click', () => {
  document.getElementById("leaderboards").classList.add("hidden");

  console.log(floor(0))
})