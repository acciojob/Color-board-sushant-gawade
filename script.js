const BOARD_CONTAINER = document.getElementById('board-container');
// You need 800 squares. Let's create a constant for the count.
const SQUARES_COUNT = 800; 

// --- Color Utility Function ---
// Generates a random HSL color for a nice range of vibrant colors
function getRandomColor() {
    const hue = Math.floor(Math.random() * 360); // 0-359 for the color wheel
    return `hsl(${hue}, 80%, 60%)`;
}

// --- Main Board Setup ---
function setupBoard() {
    for (let i = 0; i < SQUARES_COUNT; i++) {
        const square = document.createElement('div');
        square.classList.add('square');

        // Add event listeners for the color change
        square.addEventListener('mouseenter', () => colorSquare(square));
        square.addEventListener('mouseleave', () => uncolorSquare(square));

        BOARD_CONTAINER.appendChild(square);
    }
}

// --- Color Change Logic ---

/**
 * Applies a random color and the 'hovered' class to the square.
 * @param {HTMLElement} element The square element being hovered over.
 */
function colorSquare(element) {
    const color = getRandomColor();
    element.style.backgroundColor = color;
    element.style.boxShadow = `0 0 5px ${color}`; // Add a shadow matching the color
    element.classList.add('hovered');
}

/**
 * Resets the square's color smoothly after a delay.
 * The 1s transition in CSS makes the change smooth.
 * @param {HTMLElement} element The square element being unhovered.
 */
function uncolorSquare(element) {
    // Wait for 1 second (1000ms) before resetting the color.
    setTimeout(() => {
        // Only reset if the user hasn't immediately re-hovered (optional check)
        if (!element.classList.contains('hovered')) {
            element.style.backgroundColor = '#1d1d1d'; // Original background color
            element.style.boxShadow = 'none';
        }
    }, 1000); // 1000ms delay

    element.classList.remove('hovered');
}

// Initialize the application
setupBoard();