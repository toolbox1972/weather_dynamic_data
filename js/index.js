
/* Known errors: fadesIn only once and at reload.*/

var userInputSelectWeek;

var weekdaysPerName = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];

var weekdaysPerNumber = [1, 2, 3, 4, 5, 6, 7];

var weather = {
              "week": {
                      "one": {
                            "mon": "sun",
                            "tue": "rain",
                            "wed": "sun",
                            "thu": "sun",
                            "fri": "sun",
                            "sat": "sun",
                            "sun": "sun",
                      },
                      "two": {
                            "mon": "rain",
                            "tue": "sun",
                            "wed": "rain",
                            "thu": "rain",
                            "fri": "rain",
                            "sat": "sun",
                            "sun": "rain",
                      }
              }
}

/**
 * Handles fadeIn
 */

function dynamicInsertOfPicture() {
userInputSelectWeek = document.getElementById("search-box").value;
  for (i=1; i<=7; i++) {
  document.getElementById("day-" + i + "-pic").style.transition = 'opacity 2.0s linear 0s';
  }
  for (i=1; i<=7; i++) {
  document.getElementById("day-" + i + "-pic").style.opacity = 1;
  }
insertIcons();
}

function insertIcons() {

if (userInputSelectWeek == 1) {
  document.getElementById("day-1-pic").src = "images/" + weather.week.one.mon + ".svg";
  document.getElementById("day-2-pic").src = "images/" + weather.week.one.tue + ".svg";
  document.getElementById("day-3-pic").src = "images/" + weather.week.one.wed + ".svg";
  document.getElementById("day-4-pic").src = "images/" + weather.week.one.thu + ".svg";
  document.getElementById("day-5-pic").src = "images/" + weather.week.one.fri + ".svg";
  document.getElementById("day-6-pic").src = "images/" + weather.week.one.sat + ".svg";
  document.getElementById("day-7-pic").src = "images/" + weather.week.one.sun + ".svg";

  }

if (userInputSelectWeek == 2) {
  document.getElementById("day-1-pic").src = "images/" + weather.week.two.mon + ".svg";
  document.getElementById("day-2-pic").src = "images/" + weather.week.two.tue + ".svg";
  document.getElementById("day-3-pic").src = "images/" + weather.week.two.wed + ".svg";
  document.getElementById("day-4-pic").src = "images/" + weather.week.two.thu + ".svg";
  document.getElementById("day-5-pic").src = "images/" + weather.week.two.fri + ".svg";
  document.getElementById("day-6-pic").src = "images/" + weather.week.two.sat + ".svg";
  document.getElementById("day-7-pic").src = "images/" + weather.week.two.sun + ".svg";
  }
}
