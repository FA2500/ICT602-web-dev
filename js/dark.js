function myFunction() {
  var element = document.body;
  element.classList.toggle("dark-mode");

  if(element.classList.contains("dark-mode"))
  {
    localStorage.setItem('isDarkMode',"dark-mode");
  }
  else
  {
    localStorage.setItem('isDarkMode',"");
  }
}

document.addEventListener("DOMContentLoaded", function(event) {
  //when loading document
        var background = localStorage.getItem("isDarkMode");
      // get localStorage var background
        if (background) {
      // if its not null and empty
          document.body.className += background;
      //add class to body
        }
      });
