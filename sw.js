let deferredPrompt;

// Catch the browser's install event
window.addEventListener('beforeinstallprompt', (e) => {
    // Prevent the mini-infobar from appearing on mobile
    e.preventDefault();
    // Save the event so it can be triggered later
    deferredPrompt = e;
    console.log('PWA is ready to install');
});

// Create a function to trigger the prompt
async function installApp() {
    if (deferredPrompt) {
        // Show the native install prompt
        deferredPrompt.prompt();
        // Wait for the user to respond
        const { outcome } = await deferredPrompt.userChoice;
        console.log(`User response: ${outcome}`);
        // Clear the saved event
        deferredPrompt = null;
    } else {
        alert("App is already installed or not supported on this browser.");
    }
}
