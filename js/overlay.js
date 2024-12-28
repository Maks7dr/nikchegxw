document.getElementById('musicButton').addEventListener('click', function () {
  const audio = document.getElementById('jingleBells');
  const backdrop = document.getElementById('backdrop');
  const santaButton = document.getElementById('musicButton');

  // Добавляем класс анимации "тряски"
  santaButton.classList.add('shaking');

  // Ждем 1 секунды перед запуском музыки и скрытием оверлея
  setTimeout(() => {
    santaButton.classList.remove('shaking'); // Убираем тряску после завершения

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
  }, 1000); // Задержка в 1 секунды
});

// Отключаем прокрутку при загрузке бэкдропа
document.body.style.overflow = 'hidden';
