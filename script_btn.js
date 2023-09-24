var button = document.querySelector(".button1");

  button.addEventListener("mouseover", function(event) {
    button.style.background = "#dfdfdf";
  });

  button.addEventListener("mouseleave", function(event) {
    button.style.background = "white";
  });