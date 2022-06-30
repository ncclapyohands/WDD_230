function myFunction() {
    var x = document.getElementById("topnav");
    if (x.className === "nav-bar") {
      x.className += " responsive";
    } else {
      x.className = "nav-bar";
    }
  }

  document.getElementById("topnav").addEventListener('click', myFunction);