// Automatically show instructions if on iOS and not in standalone mode
window.addEventListener('load', () => {
  const isIos = /iphone|ipad|ipod/.test(window.navigator.userAgent.toLowerCase());
  const isInStandaloneMode = 'standalone' in window.navigator && window.navigator.standalone;

  if (isIos && !isInStandaloneMode) {
    document.getElementById('iosPrompt').style.display = 'block';
  }
});
