// Get the modal
var modal = document.getElementById("welcomeModal");

// Get the <span> element that closes the modal
var closeButton = document.getElementsByClassName("close-btn")[0];

// When the page loads, open the modal
window.onload = function() {
    modal.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
closeButton.onclick = function() {
    modal.style.display = "none";
};

// Close the modal when the user clicks outside of the modal content