// Select all images with class 'screenshot'
var screenshots = document.querySelectorAll('.screenshot');

screenshots.forEach(function(img) {
  img.addEventListener('click', function() {
    // Toggle the 'expanded' class on click
    img.classList.toggle('expanded');
  });
});