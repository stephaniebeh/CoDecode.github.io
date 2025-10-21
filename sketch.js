function setup() {
  createCanvas(windowWidth, windowHeight); // Use window dimensions for canvas
  noLoop(); // Optional: Stop draw loop if not needed
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight); // Resize canvas on window resize
}