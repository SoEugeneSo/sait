document.addEventListener('DOMContentLoaded', function () {
    const playImg = document.getElementById('playImg');
            const pauseImg = document.getElementById('pauseImg');
            const music = document.getElementById('music');
            const volumeUpIcon = document.querySelector('.control-icon[src*="volume_up"]');
            const volumeDownIcon = document.querySelector('.control-icon[src*="volume_down"]');
            
    playImg.addEventListener('click', function () {
        music.play();
        playImg.style.display = 'none';
        pauseImg.style.display = 'block';
    });

    pauseImg.addEventListener('click', function () {
        music.pause();
        playImg.style.display = 'block';
        pauseImg.style.display = 'none';
    });
    volumeUpIcon.addEventListener('click', function () {
                music.volume = Math.min(1, music.volume + 0.1);
            });

            volumeDownIcon.addEventListener('click', function () {
                music.volume = Math.max(0, music.volume - 0.1);
            });

    // Другие обработчики событий...
});

window.addEventListener('beforeunload', function () {
    window.scrollTo(0, 0);
});