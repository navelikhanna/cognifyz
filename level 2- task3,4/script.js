// Select the button element
const button = document.getElementById('changeColorButton');

// Function to generate a random color
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Add an event listener to the button
button.addEventListener('click', function () {
    // Change the background color of the body
    document.body.style.backgroundColor = getRandomColor();
});
