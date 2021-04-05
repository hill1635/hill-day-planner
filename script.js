$(document).ready(function () {
  var date = moment().format("dddd MMMM Do");
  var currentDay = $("#currentDay");
  var time = moment().format("HH:mm");
  var tasks = [];
  currentDay.text(date);

  function init() {
    var storedTasks = JSON.parse(localStorage.getItem("tasks"));
    if (storedTasks !== null) {
      tasks = storedTasks;
    }
  }
  init();

  for (var i = 0; i < 9; i++) {
    var div = this.children[0].children[1].children[1].children[0].children[i];
    var nextDiv = this.children[0].children[1].children[1].children[0].children[i + 1];
    var textInput = div.children[1];
    var btn = div.children[2];
    var hour = $(div).attr("data-time");
    var nextHour = $(nextDiv).attr("data-time");

    if (time >= hour && time < nextHour) {
      $(textInput).attr("class", "present");
    } else if (time > hour) {
      $(textInput).attr("class", "past");
    } else if (time < hour) {
      $(textInput).attr("class", "future");
    }
    // console.log("nextDiv: ", nextDiv);
    // console.log("textInput: ", textInput);
    // console.log("btn: ", btn);
    // console.log("hour: ", hour);
  }

  // for (var i = 0; i < 9; i++) {
  //   var dataTime = $("#hour-" + [i]).attr("data-time");
  //   var nextIndex = [i + 1];
  //   var nextTime = $("#hour-" + nextIndex).attr("data-time");
  //   var textArea = $("#text-" + [i]);

  //   if (time >= dataTime && time < nextTime) {
  //     $(textArea).attr("class", "present");
  //   } else if (time > dataTime) {
  //     $(textArea).attr("class", "past");
  //   } else if (time < dataTime) {
  //     $(textArea).attr("class", "future");
  //   }
  // }

  for (var i = 0; i < 9; i++) {
    $("#btn-" + [i]).on("click", function () {
      var parentDiv = $(this).parent();
      var thisTextArea = $(parentDiv).children().eq(1);
      var textAreaContent = $(thisTextArea).val();
      tasks.push(textAreaContent);
      localStorage.setItem("tasks", JSON.stringify(tasks));
    });
  }
});
