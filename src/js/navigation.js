// Switch between tabs
export function switchTab(tabId) {
    // Update active tab button
    document.querySelectorAll('.nav-links button').forEach(button => {
        button.classList.remove('active');
        if (button.textContent.toLowerCase() === tabId) {
            button.classList.add('active');
        }
    });

    // Update active section
    document.querySelectorAll('main > section').forEach(section => {
        section.classList.remove('active');
        if (section.id === tabId) {
            section.classList.add('active');
        }
    });
}

// Toggle dropdown menu
export function toggleDropdown() {
    const dropdown = document.getElementById('dropdownContent');
    dropdown.classList.toggle('show');
}

// Close dropdown when clicking outside
export function setupCloseDropdown() {
    window.onclick = function(event) {
        if (!event.target.matches('.dropdown-btn')) {
            const dropdowns = document.getElementsByClassName('dropdown-content');
            for (const dropdown of dropdowns) {
                if (dropdown.classList.contains('show')) {
                    dropdown.classList.remove('show');
                }
            }
        }
    }
}