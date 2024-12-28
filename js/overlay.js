document.getElementById('musicButton').addEventListener('click', function () {
  const audio = document.getElementById('jingleBells');
  const backdrop = document.getElementById('backdrop');
  const santaButton = document.getElementById('musicButton');

  // Добавляем класс анимации "тряски"
  santaButton.classList.add('shaking');

  // Ждем 1 секунду перед скрытием оверлея и запуском музыки
  setTimeout(() => {
    santaButton.classList.remove('shaking'); // Убираем тряску после завершения
    backdrop.classList.add('hidden'); // Скрываем оверлей

    // Запускаем музыку
    audio.play().catch(error => {
      console.error('Не удалось воспроизвести музыку:', error);
    });

    // Включаем прокрутку страницы
    document.body.style.overflow = '';
  }, 1000); // Задержка в 1 секунду
});

// Отключаем прокрутку при загрузке страницы
document.body.style.overflow = 'hidden';
