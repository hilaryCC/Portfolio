const coords = { x: 0, y: 0 };

const colors = [
  "#ffb56b", "#fdaf69", "#f89d63", "#f59761", "#ef865e", "#ec805d",
  "#e36e5c", "#df685c", "#d5585c", "#d1525c", "#c5415d", "#c03b5d",
  "#b22c5e", "#ac265e", "#9c155f", "#950f5f", "#830060", "#7c0060",
  "#680060", "#60005f", "#48005f", "#3d005e"
];

// Animate circles based on the current mouse coordinates
export function animateCircles(circles) {
  // Initialize each circle's color and starting position
  circles.forEach((circle, index) => {
    if (circle) {
      circle.x = 0;
      circle.y = 0;
      circle.style.backgroundColor = colors[index % colors.length];
    }
  });

  // Update the mouse coordinates on mouse move
  window.addEventListener("mousemove", (e) => {
    coords.x = e.clientX;
    coords.y = e.clientY;
  });

  window.addEventListener("touchmove", (e) => {

    // Get the first touch point
    const touch = e.touches[0];
    coords.x = touch.clientX;
    coords.y = touch.clientY;
});

  const animate = () => {
    let x = coords.x;
    let y = coords.y;

    // Loop over each circle and set its new position
    circles.forEach((circle, index) => {
      if (circle) {
        // Set circle's position
        circle.style.left = `${x - 12}px`;
        circle.style.top = `${y - 12}px`;
        circle.style.transform = `scale(${(circles.length - index) / circles.length})`;

        // Save the circle’s current coordinates
        circle.x = x;
        circle.y = y;

        // Move towards the next circle's position with a smooth transition
        const nextCircle = circles[index + 1] || { x: coords.x, y: coords.y };
        x += (nextCircle.x - x) * 0.3;
        y += (nextCircle.y - y) * 0.3;
      }
    });

    // Repeat the animation
    requestAnimationFrame(animate);
  };

  animate();
}

export default animateCircles;
