document.getElementById('musicButton').addEventListener('click', function () {
  const audio = document.getElementById('jingleBells');
  const backdrop = document.getElementById('backdrop');
  const button = document.getElementById('musicButton');

  // Запускаем музыку
  audio
    .play()
    .then(() => {
      // Добавляем классы для анимации
      button.classList.add('hidden');
      backdrop.classList.add('hidden');

      // Убираем оверлей и восстанавливаем прокрутку после завершения анимации
      setTimeout(() => {
        backdrop.style.display = 'none'; // Полностью скрываем оверлей
        document.body.style.overflow = ''; // Включаем прокрутку
      }, 500); // Время совпадает с длительностью анимации
    })
    .catch(error => {
      console.error('Музыка не смогла воспроизвестись:', error);
    });
});

// Отключаем прокрутку при загрузке
document.body.style.overflow = 'hidden';
