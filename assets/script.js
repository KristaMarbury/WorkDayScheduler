let timeDisplayEl = $("#time-display");
let textTask1 = $("#task1").text();

// handle displaying the time
function displayTime() {
  let rightNow = moment().format("MMM DD, YYYY [at] hh:mm:ss a");
  timeDisplayEl.text(rightNow);
}

setInterval(displayTime, 1000);

$("#hour1").click(function () {
  alert(textTask1);
  //save text task1 to local storage and then pull it back
});
