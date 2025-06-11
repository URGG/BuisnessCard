// Store the deferred prompt for Android
let deferredPrompt = null;

// Detect platform
const isIos = () => {
  return /iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase());
};

const isInStandaloneMode = () =>
  'standalone' in window.navigator && window.navigator.standalone;

// Android install prompt
window.addEventListener('beforeinstallprompt', (e) => {
  e.preventDefault();
  deferredPrompt = e;
  const installBtn = document.getElementById('androidInstallBtn');
  if (installBtn) installBtn.style.display = 'inline-block';
});

// Show iOS Instructions
function showIosInstructions() {
  document.getElementById('iosPrompt').style.display = 'block';
}

// On load: customize behavior
window.addEventListener('load', () => {
  if (isIos() && !isInStandaloneMode()) {
    // iOS not installed
    document.getElementById('iosInstallBtn').style.display = 'inline-block';
  } else if (deferredPrompt) {
    // Android prompt ready
    document.getElementById('androidInstallBtn').style.display = 'inline-block';
  }
});

// Handle Android Install
function triggerAndroidInstall() {
  if (deferredPrompt) {
    deferredPrompt.prompt();
    deferredPrompt.userChoice.then((choice) => {
      if (choice.outcome === 'accepted') {
        console.log('User accepted A2HS');
      }
      deferredPrompt = null;
    });
  }
}
