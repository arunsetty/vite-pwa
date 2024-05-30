importScripts('https://storage.googleapis.com/workbox-cdn/releases/6.4.1/workbox-sw.js');


self.addEventListener("install", (e) => {
    console.log("INSTALL EVENT  : ", e);
})

self.addEventListener("beforeinstallprompt", (e) => {
    console.log("INSTALL PROMPT : ", e)
})


console.log(workbox);