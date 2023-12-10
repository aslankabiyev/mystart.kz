function setActive(index) {
    // Get all list items
    var menuItems = document.querySelectorAll('.profile-menu li');

    // Remove 'active' class from all items
    menuItems.forEach(function (item) {
      item.classList.remove('active');
    });

    // Add 'active' class to the clicked item
    menuItems[index].classList.add('active');
}