// HTML'deki video elementini seçiyoruz
const video = document.querySelector("#video");

// Tarayıcıdan kamera erişim izni isteniyor
navigator.mediaDevices
  .getUserMedia({ video: true })
  .then(function (stream) {
    // Kameradan gelen görüntüyü video elementine akıtıyoruz
    video.srcObject = stream;
  })
  .catch(function (err) {
    console.error("Kamera erişim hatası:", err);
  });