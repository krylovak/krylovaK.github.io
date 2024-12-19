card1 = document.getElementById("card1");
card2 = document.getElementById("card2");

card1.addEventListener(
    "mouseenter",
    (event) => {
        card1.style.marginTop = "400px";
        card1.style.transitionDuration = "1s";
    },
    false,
  );
  
  // This handler will be executed every time the cursor
  // is moved over a different list item
  card1.addEventListener(
    "mouseleave",
    (event) => {
      // highlight the mouseover target
      card1.style.marginTop = "750px";
    },
    false,
  );