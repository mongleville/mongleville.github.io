// Function to generate a random number between 1 and 250
function getRandomNumber() {
    return Math.floor(Math.random() * 75) + 1;
  }
  
  // Function to create the button
  function createButton() {
    // Check if the chance succeeds (1 in 250 chance)
    if (getRandomNumber() === 1) {
      // Create button element
      var button = document.createElement("button");
      button.textContent = "MONGLE CLASSIC";
      
      // Apply styles
      button.style.backgroundColor = "red";
      button.style.color = "white";
      button.style.fontFamily = "Comic Sans MS";
      button.style.borderRadius = "10px";
      button.style.position = "fixed";
      button.style.top = "50%";
      button.style.left = "50%";
      button.style.transform = "translate(-50%, -50%)";
      button.style.padding = "10px";
      button.style.zIndex = "9999";
      
      // Append button to the body
      document.body.appendChild(button);
      
      // Function to increase button scale smoothly
      var scale = 1;
      var increaseScale = function() {
        scale += 1;
        button.style.transform = "translate(-50%, -50%) scale(" + scale + ")";
      };
      setInterval(increaseScale, 2000);
      
      // Function to handle button click
      button.onclick = function() {
        window.location.href = "classic/index.html";
      };
    }
  }
  
  // Call createButton function when the page loads
  window.onload = createButton;
  