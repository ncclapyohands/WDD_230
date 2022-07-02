function myFunction() {
    var x = document.getElementById("topnav");
    if (x.className === "nav-bar") {
      x.className += " responsive";
      console.log('responsive now')
    } else {
      x.className = "nav-bar";
    }
  }

  document.getElementById("topnav").addEventListener('click', myFunction);