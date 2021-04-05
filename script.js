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
    console.log(storedTasks);
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
      $(textInput).attr("style", "background-color:#ff6961");
    } else if (time > hour) {
      $(textInput).attr("style", "background-color:#d3d3d3");
    } else if (time < hour) {
      $(textInput).attr("style", "background-color:#77dd77");
    }

    $(btn).on("click", function () {
      var parentDiv = $(this).parent().children();
      var task = $(parentDiv[1]).val();
      tasks.push(task);
      localStorage.setItem("tasks", JSON.stringify(tasks));
    });
  }
});