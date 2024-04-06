const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
// Event handler for the beforeinstallprompt event
window.addEventListener('beforeinstallprompt', (event) => {
    // Prevent the default behavior
    event.preventDefault();
    // Store the event for later use
    window.deferredPrompt = event;
    // Show the install button
    butInstall.style.display = 'block';
  });

// Click event handler for the install button
butInstall.addEventListener('click', async () => {
    // Hide the install button
    butInstall.style.display = 'none';
    // Show the install prompt
    deferredPrompt.prompt();
    // Wait for the user to respond to the prompt
    const choiceResult = await deferredPrompt.userChoice;
    // Check if the user accepted the prompt
    if (choiceResult.outcome === 'accepted') {
      console.log('User accepted the install prompt');
    } else {
      console.log('User dismissed the install prompt');
    }
  });

// Event handler for the appinstalled event
window.addEventListener('appinstalled', (event) => {
  console.log('App installed successfully');
});