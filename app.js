function toggleDropdown() {
  document.querySelector(".profile-dropdown").classList.toggle("active");
}


window.onclick = function(event) {
  if (!event.target.matches('.name-menu')) {
    var dropdowns = document.getElementsByClassName("profile-dropdown");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('active')) {
        openDropdown.classList.remove('active');
      }
    }
  }
}