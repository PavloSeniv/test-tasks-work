export function popUp(params) {
  let popupBg = document.querySelector(".__container"); // Фон попап окна
  let popup = document.querySelector(".block-pop-up-modal"); // Само окно
  let closePopupButton = document.querySelector(".close-popup"); //  Кнопка для скрытия окна
  let openPopupButtonsAll = document.querySelectorAll(".open-popup"); // Кнопки для показа окна
  let openPopupButtons = document.querySelector(".open-popup"); // Кнопки для показа окна
  let openPopupBlock = document.querySelector(".block-button-show-modal");

  openPopupButtonsAll.forEach((button) => {
    // Перебираем все кнопки
    button.addEventListener("click", (e) => {
      // Для каждой вешаем обработчик событий на клик
      e.preventDefault(); // Предотвращаем дефолтное поведение браузера
      popupBg.classList.add("active"); // Добавляем класс 'active' для фона
      popup.classList.add("active"); // И для самого окна
      button.classList.add("active"); // И для самого окна
      openPopupBlock.classList.add("active"); // И для самого окна
    });
  });

  closePopupButton.addEventListener("click", () => {
    // Вешаем обработчик на крестик
    popupBg.classList.remove("active"); // Убираем активный класс с фона
    popup.classList.remove("active"); // И с окна
    openPopupButtons.classList.remove("active");
    openPopupBlock.classList.remove("active");
  });

  document.addEventListener("click", (e) => {
    // Вешаем обработчик на весь документ
    if (e.target === popupBg) {
      // Если цель клика - фот, то:
      popupBg.classList.remove("active"); // Убираем активный класс с фона
      popup.classList.remove("active"); // И с окна
      openPopupButtons.classList.remove("active");
      openPopupBlock.classList.remove("active");
    }
  });
}
