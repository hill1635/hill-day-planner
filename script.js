$(document).ready(function () {
  init();

  var date = moment().format("dddd MMMM Do");
  var currentDay = $("#currentDay");
  currentDay.text(date);

  var time = moment().format("HH:mm");

  for (var i = 0; i < 9; i++) {
    var dataTime = $("#hour-" + [i]).attr("data-time");
    var nextIndex = [i + 1];
    var nextTime = $("#hour-" + nextIndex).attr("data-time");
    var textArea = $("#text-" + [i]);

    if (time > dataTime) {
      $(textArea).attr("class", "past");
    }

    if (time >= dataTime && time < nextTime) {
      $(textArea).attr("class", "present");
    }

    if (time < dataTime) {
      $(textArea).attr("class", "future");
    }
  }

  var tasks = [];
  for (var i = 0; i < 9; i++) {
    $("#btn-" + [i]).on("click", function () {
      var parentDiv = $(this).parent();
      var thisTextArea = $(parentDiv).children().eq(1);
      var textAreaContent = $(thisTextArea).val();
      tasks.push(textAreaContent);
      localStorage.setItem("tasks", JSON.stringify(tasks));
      console.log(tasks);
      console.log(localStorage);
    });
  }

  function init() {
    var storedTasks = JSON.parse(localStorage.getItem("tasks"));
    if (storedTasks !== null) {
      tasks = storedTasks;
    }
    console.log(storedTasks);
  }
});
