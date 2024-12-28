document.getElementById('musicButton').addEventListener('click', function () {
  const audio = document.getElementById('jingleBells');
  const backdrop = document.getElementById('backdrop');

  // Запускаем музыку
  audio
    .play()
    .then(() => {
      // Скрываем оверлей после успешного запуска музыки
      backdrop.classList.add('hidden');
      // Включаем прокрутку
      document.body.style.overflow = '';
    })
    .catch(error => {
      console.error('Музыка не смогла воспроизвестись:', error);
    });
});

// Отключаем прокрутку при загрузке бэкдропа
document.body.style.overflow = 'hidden';
