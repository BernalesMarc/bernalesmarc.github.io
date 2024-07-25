document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.getElementById("mobile-menu");
    const sidenav = document.getElementById("sidenav");
    const closeBtn = document.getElementById("close-btn");

    menuToggle.addEventListener("click", () => {
        sidenav.classList.toggle("active");
    });

    closeBtn.addEventListener("click", () => {
        sidenav.classList.remove("active");
    });
});

function showContent(id) {
    // Close all other open accordion contents
    var allContents = document.getElementsByClassName('accordion-content');
    for (var i = 0; i < allContents.length; i++) {
        if (allContents[i].id !== id) {
            allContents[i].style.maxHeight = null;
            allContents[i].style.display = "none";
        }
    }

    var content = document.getElementById(id);
    content.style.display = "block";
    
    // Force a reflow to ensure the browser recognizes the change
    content.offsetHeight;
    
    content.style.maxHeight = content.scrollHeight + "px";
    
    // Wait for the content to expand before scrolling
    setTimeout(() => {
        // Calculate the position to scroll to
        var headerOffset = 100; // Adjust this value based on your fixed header height
        var elementPosition = content.getBoundingClientRect().top;
        var offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        // Scroll to the calculated position
        window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
        });
    }, 500); // Adjust this timeout to match your CSS transition duration
}

function hideContent(id) {
    var content = document.getElementById(id);
    content.style.maxHeight = null;
    setTimeout(() => {
        content.style.display = "none";
    }, 100); // Match this with your CSS transition time

    document.getElementById('projects').scrollIntoView({
        behavior: 'smooth'
    });
}

function openCity(evt, cityName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();

// Function to show the content
function openProj(evt, projName) {
  var i, tabcontent, tablinks;

  // Hide all elements with class="tabcontent" by default
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].className = tabcontent[i].className.replace(" show", "");
  }

  // Remove the background color of all tablinks/buttons
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(projName).className += " show";
  evt.currentTarget.className += " active";
}

// Automatically open the first tab on page load
document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.getElementById("mobile-menu");
    const sidenav = document.getElementById("sidenav");
    const closeBtn = document.getElementById("close-btn");

    menuToggle.addEventListener("click", () => {
        sidenav.classList.toggle("active");
    });

    closeBtn.addEventListener("click", () => {
        sidenav.classList.remove("active");
    });

    // Automatically open the first tab on page load
    document.getElementById("defaultOpen").click();
    document.getElementById("defaultOpenUIDesign").click();  // Add this line
});

function showContent(id) {
    var allContents = document.getElementsByClassName('accordion-content');
    for (var i = 0; i < allContents.length; i++) {
        if (allContents[i].id !== id) {
            allContents[i].style.maxHeight = null;
            allContents[i].style.display = "none";
        }
    }

    var content = document.getElementById(id);
    content.style.display = "block";
    content.offsetHeight;
    content.style.maxHeight = content.scrollHeight + "px";
    
    setTimeout(() => {
        var headerOffset = 100;
        var elementPosition = content.getBoundingClientRect().top;
        var offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
        });
    }, 500);
}

function hideContent(id) {
    var content = document.getElementById(id);
    content.style.maxHeight = null;
    setTimeout(() => {
        content.style.display = "none";
    }, 100);
    document.getElementById('projects').scrollIntoView({
        behavior: 'smooth'
    });
}

function openProj(evt, projName) {
    var i, tabcontent, tablinks;

    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    document.getElementById(projName).style.display = "block";
    evt.currentTarget.className += " active";
}
