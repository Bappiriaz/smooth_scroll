const scrollUp = document.getElementById('scrollUp');
const scrollDown = document.getElementById('scrollDown');

window.addEventListener('scroll', () => {
  const scrollPosition = window.scrollY; // Current scroll position
  console.log(scrollPosition);
  const windowHeight = window.innerHeight; // Viewport height
  console.log(windowHeight);

  const documentHeight = document.documentElement.scrollHeight; // Total document height
  console.log(documentHeight);
  // Show "down" button at the top of the page
  if (scrollPosition < 50) {
    scrollDown.style.display = 'block';
    scrollUp.style.display = 'none';
  } 
  // Show "up" button when scrolled down
  else if (scrollPosition + windowHeight < documentHeight - 50) {
    scrollDown.style.display = 'none';
    scrollUp.style.display = 'block';
  } 
  // Hide both when near the bottom
  else {
    scrollDown.style.display = 'none';
    scrollUp.style.display = 'block';
  }
});

  