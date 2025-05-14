// Change text content dynamically when button is clicked
const changeTextButton = document.getElementById('change-text-btn');
const dynamicText = document.getElementById('dynamic-text');

changeTextButton.addEventListener('click', function() {
  dynamicText.textContent = "The text has been changed dynamically!";
  dynamicText.style.color = "blue"; // Modify CSS styles
});

// Add or remove an element when a button is clicked
const toggleElementButton = document.getElementById('toggle-element-btn');
const newElementContainer = document.getElementById('new-element-container');

toggleElementButton.addEventListener('click', function() {
  // Check if the new element exists already
  if (newElementContainer.innerHTML === "") {
    // Create and append new element
    const newElement = document.createElement('p');
    newElement.textContent = "This is a newly added paragraph!";
    newElement.style.fontSize = "20px";
    newElement.style.color = "green";
    newElementContainer.appendChild(newElement);
  } else {
    // Remove the element if it already exists
    newElementContainer.innerHTML = "";
  }
});
