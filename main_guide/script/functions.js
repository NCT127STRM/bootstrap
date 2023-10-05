function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }

  // JavaScript to toggle the dropdown menu on click
document.querySelectorAll('.dropdown').forEach(function (item) {
  item.addEventListener('click', function () {
    this.querySelector('.dropdown-content').classList.toggle('show');
  });
});

// Close the dropdown when clicking outside of it
window.addEventListener('click', function (event) {
  if (!event.target.matches('.dropdown')) {
    var dropdowns = document.querySelectorAll('.dropdown-content');
    dropdowns.forEach(function (dropdown) {
      if (dropdown.classList.contains('show')) {
        dropdown.classList.remove('show');
      }
    });
  }
});
