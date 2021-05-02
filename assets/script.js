let timeDisplayEl = $("#time-display");
let textTask1 = $("#task1").text();
let textInput = document.querySelector(".usersched");

let scheds = [];

// handle displaying the time
function displayTime() {
  let rightNow = moment().format("MMMM Do YYYY HH:mm");
  timeDisplayEl.text(rightNow);
}

setInterval(displayTime, 1000);

$(document).ready(function () {
  //this wrapper is for the entire code for homework
  //set up an init when the first loads

  // This function is being called below and will run when the page loads.
  function init() {
    // load data from local storage and put it in the correct row
    updateRowColor();
    // #hour9 textarea to value of locaalstorage key number 'hour-9'
    $("#hour9 .usersched").val(localStorage.getItem("hour9"));
    $("#hour10 .usersched").val(localStorage.getItem("hour10"));
    $("#hour11 .usersched").val(localStorage.getItem("hour11"));
    $("#hour12 .usersched").val(localStorage.getItem("hour12"));
    $("#hour13 .usersched").val(localStorage.getItem("hour13"));
    $("#hour14 .usersched").val(localStorage.getItem("hour14"));
    $("#hour15 .usersched").val(localStorage.getItem("hour15"));
    $("#hour16 .usersched").val(localStorage.getItem("hour16"));
    $("#hour17 .usersched").val(localStorage.getItem("hour17"));
    $("#hour18 .usersched").val(localStorage.getItem("hour18"));

    //repeat this..
  }
  function saveTask() {
    //get info the user put in text area
    let value = $(this).siblings(".usersched").val();
    let key = $(this).parent().attr("id");
    localStorage.setItem(key, value);

    cuteTrick();
  }

  function cuteTrick() {
    //hide message after so many seconds
    $("#saved").show().delay(300).fadeOut();
  }

  //show message to user
  //hide message after so many seconds
  //display current date on the page - moment (get document by id)

  function updateRowColor() {
    //get set variable to current hour
    let currentHour = moment().hour();
    console.log(currentHour);
    $(".time-block").each(function () {
      let hour = $(this).attr("data-time");
      hour = parseInt(hour, 10);
      if (currentHour > hour) {
        $(this).addClass("past");
      }
      if (currentHour === hour) {
        $(this).addClass("present");
      }
      if (currentHour < hour) {
        $(this).addClass("future");
      }
    });
  }
  //loop over each row of the class(time-block) $.each
  //find row time using data attribute(9<21) compare the two times, and use if else statements
  //add the past class to $(this).addClass("past";)

  // color rows based on time of day
  // use interval to update row color
  //do one hour at a time

  //load data from local storage and put it in the correct row

  //user clicks save button
  $(".saveBtn").on("click", saveTask);

  init();
});
