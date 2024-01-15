"use strict";

function projects_name(evt, prjName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");

  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  tablinks = document.getElementsByClassName("tablinks");

  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].classList.remove("active");
  }

  document.getElementById(prjName).style.display = "block";
  evt.currentTarget.classList.add("active");
} // This line is not needed anymore since we set the initial state in the CSS
// document.getElementById("defaultOpen").click();