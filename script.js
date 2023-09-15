document.addEventListener('DOMContentLoaded', () => {
    const downloadButton = document.getElementById('downloadButton');
    const postUrlInput = document.getElementById('postUrl');
    const resultContainer = document.getElementById('resultContainer');
    const captionElement = document.getElementById('caption');

    downloadButton.addEventListener('click', async () => {
        const postUrl = postUrlInput.value;
        
        try {
            const response = await fetch(`https://threads-downloader-scraper-api.p.rapidapi.com/threads?url=${encodeURIComponent(postUrl)}`, {
                method: 'GET',
                headers: {
                    'X-RapidAPI-Key': '9a25f62a5emshbd07d167f6cc715p148d30jsn4f5969a0b032',
                    'X-RapidAPI-Host': 'threads-downloader-scraper-api.p.rapidapi.com'
                }
            });

            const result = await response.json();

            if (result && result.caption) {
                captionElement.textContent = result.caption;
                resultContainer.style.display = 'block';
            } else {
                captionElement.textContent = 'Caption not found.';
                resultContainer.style.display = 'block';
            }
        } catch (error) {
            console.error(error);
        }
    });
});
