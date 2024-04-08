document.addEventListener("DOMContentLoaded", function () {
    // Oynatma ve durdurma düğmelerini id'lerine göre çekin
    const playButton = document.getElementById("play");
    const stopButton = document.getElementById("stop");

    // Content class'ına sahip tüm <p> etiketlerini bulun
    const paragraphs = document.querySelectorAll('.book-content .content p');

    // Metni sesli olarak okuma fonksiyonu
    let isReading = false;
    let currentParagraphIndex = 0;

    function readNextParagraph() {
        if (currentParagraphIndex < paragraphs.length && isReading) {
            const paragraph = paragraphs[currentParagraphIndex];

            // Şu andaki paragrafı sesli olarak oku
            responsiveVoice.speak(paragraph.textContent, "UK English Male", {
                rate: 1,
                onend: function () {
                    // Bir sonraki paragrafa geç
                    currentParagraphIndex++;
                    readNextParagraph();
                }
            });
        } else {
            // Tüm paragraflar okunduğunda veya durdurma butonuna basıldığında durumu sıfırla
            isReading = false;
            currentParagraphIndex = 0;
        }
    }

    // Oynatma düğmesine tıklandığında sesli okumayı başlat
    playButton.addEventListener("click", () => {
        isReading = true;
        readNextParagraph();
    });

    // Durdurma düğmesine tıklandığında sesli okumayı durdur
    stopButton.addEventListener("click", () => {
        isReading = false;
        responsiveVoice.cancel();
    });
});
