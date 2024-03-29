const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
window.addEventListener('beforeinstallprompt', (event) => {
     // Prevent the browser's default installation prompt
  event.preventDefault();
  // Store the event object to use it later
  deferredPrompt = event;
  // Show the install button
  butInstall.style.display = 'block';
});

//Implement a click event handler on the `butInstall` element
butInstall.addEventListener('click', async () => {
      // Check if the deferredPrompt is available
  if (deferredPrompt) {
    // Show the installation prompt
    deferredPrompt.prompt();
    // Wait for the user's choice
    const choiceResult = await deferredPrompt.userChoice;
    // Reset the deferredPrompt variable
    deferredPrompt = null;
    // Hide the install button regardless of the user's choice
    butInstall.style.display = 'none';
  }
});

// Add an handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
 // Perform any additional actions after the app is installed, if needed
  console.log('App installed successfully');
});
