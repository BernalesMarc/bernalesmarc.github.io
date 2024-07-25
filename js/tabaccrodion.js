function openTab(tabName) {
  var tabContent = document.getElementsByClassName("tab-content");
  var tabs = document.getElementsByClassName("tab");
  var targetTab = document.getElementById(tabName);
  var button = targetTab.querySelector(".tab-btn");

  // Check if the target tab is already active
  var isActive = targetTab.classList.contains("active");

  // Hide all tab content and remove active class from tabs
  for (var i = 0; i < tabContent.length; i++) {
    tabContent[i].style.display = "none";
    tabContent[i].style.opacity = "0";
  }
  for (var i = 0; i < tabs.length; i++) {
    tabs[i].classList.remove("active");
  }

  // Toggle the target tab based on its current state
  if (isActive) {
    targetTab.classList.remove("active");
    button.classList.remove("active");
  } else {
    targetTab.style.display = "block";
    targetTab.style.opacity = "1";
    targetTab.classList.add("active");
    button.classList.add("active");
  }
}

function toggleAccordion(button) {
  var panel = button.nextElementSibling;
  button.classList.toggle("active");
  if (panel.style.maxHeight) {
    panel.style.maxHeight = null;
  } else {
    panel.style.maxHeight = panel.scrollHeight + "px";
  }
}
