// Define your Alpine component
// set local storage
localStorage.setItem('theme', 'dark');
const switchDarkMode = () => ({
    mode_dark: true,
    switchMode() {
        this.mode_dark = !this.mode_dark;
        if (this.mode_dark) {
            document.documentElement.classList.add('dark')
            localStorage.theme = 'dark'
        } else {
            document.documentElement.classList.remove('dark')
            localStorage.theme = 'light'
        }
    }
});

// Add the component to the global object
window.switchDarkMode = switchDarkMode;