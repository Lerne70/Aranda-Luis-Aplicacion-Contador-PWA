if('serviceWorker' in  navigator) {
    // Registramos el service worker manzana
    navigator.serviceWorker.register('./sw.js');
}