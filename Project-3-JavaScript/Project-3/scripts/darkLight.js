// Function to set the theme based on user preference
function setTheme(theme) {
    document.body.classList.toggle('dark-mode', theme === 'dark');
    localStorage.setItem('theme', theme);
}

// Check if there's a theme preference in local storage
const storedTheme = localStorage.getItem('theme');
if (storedTheme) {
    setTheme(storedTheme);
    document.getElementById('modeSelect').value = storedTheme; // Update selected option
}

// Event listener for theme changes
modeSelect.addEventListener('change', function() {
    const selectedMode = this.value;
    setTheme(selectedMode);
});