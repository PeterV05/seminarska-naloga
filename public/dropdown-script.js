// Function to toggle the menu on image click
function toggleMenu(imageId, menuId) {
    document.getElementById(imageId).addEventListener("click", function (event) {
        if (event.target.parentElement.style.borderColor == "rgb(212, 53, 218)") {
            event.target.parentElement.style.borderColor = "#ffffff";
        } else {
            event.target.parentElement.style.borderColor = "#d435da";
        }
        document.getElementById(menuId).classList.toggle("show");
    });
}

// Toggle menus on respective image clicks
toggleMenu("whiskey", "whiskeyMenu");
toggleMenu("beer", "beerMenu");
toggleMenu("coffee", "coffeeMenu");

// Close menu when clicking outside the dropdown
window.onclick = function (event) {

    if (!event.target.matches('.submenu')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");

        for (var i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
                openDropdown.parentElement.style.borderColor = "#ffffff";
            }
        }
    }

}



