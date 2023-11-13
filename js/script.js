document.addEventListener("DOMContentLoaded", function() {
    const sidebarToggle = document.getElementById('sidebarToggle');
    const sidebarNav = document.getElementById('sidebarNav');

    // Event listener for the menu button
    sidebarToggle.addEventListener('click', function(event) {
        toggleSidebar();
        event.stopPropagation(); // Prevent the click event from propagating up to the document
    });

    // Event listener to close the sidebar when clicking outside of it
    document.addEventListener('click', function(event) {
        if (!sidebarNav.contains(event.target) && event.target !== sidebarToggle) {
            closeSidebar();
        }
    });

    // Function to determine whether to open or close the sidebar
    function toggleSidebar() {
        if (sidebarNav.style.left === '-250px' || sidebarNav.style.left === "") {
            openSidebar();
        } else {
            closeSidebar();
        }
    }

    // Function to open the sidebar
    function openSidebar() {
        sidebarNav.style.left = '0px';
        sidebarToggle.style.left = '140px'; // Adjust this value to the width of your sidebar
    }

    // Function to close the sidebar
    function closeSidebar() {
        sidebarNav.style.left = '-250px';
        sidebarToggle.style.left = '0px'; // Reset the toggle button's position when sidebar is closed
    }
});
