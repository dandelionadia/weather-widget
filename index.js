// завантаження всіє сторінки
$(document).ready(function() {
  /**
   * Оновити верхній блок на основі переданого дня ("nextDay").
   * @param {jQueryWrapper} nextDay 
   */
  function setDay(nextDay) {
    /**
     * Змінюємо градус.
     */
    // видалити клас обраного дня з усіх елементів днів
    $(".weather__day").removeClass("weather__day--selected");

    // додати клас до елементу дня, який передали як аргумент
    nextDay.addClass("weather__day--selected");
    
    // взяти значення наступного градусу з дня, котрий потрібно встановити у верхньому блоці
    var nextDegree = nextDay.children(".weather__day-degree").text();

    // змінити значення градусу верхнього блоку на градус даного дня
    $(".weather__degree").text(nextDegree);

    /**
     * Змінюємо статус погоди.
     */
    // взяти наступний статус із "data-status" атрибуту даного дня і оновити у верхньому блоці
    var nextStatus = nextDay.data("status");
    $(".weather__status").text(nextStatus);

    // взяти картинку переданого дня і оновити її у верхньому блоці
    var nextImage = nextDay.data("image");
    $(".weather__overview").css("background-image", `url(./images/${nextImage})`);
  }

  /**
   * Оновити верхній блок на основі дня, котрий виділений на момент завантаження сторінки.
   * Таким чином будь-який день із правильним класом в HTML завантажиться правильно відразу.
   */
  var selectedDay = $(".weather__day--selected");
  setDay(selectedDay);

  // до класу "weather__day" при click  виконується функція
  $(".weather__day").on("click", function() {
    /**
     * Викликаємо функцію котра оновлює верхній блок.
     * У якості "nextDay" (дня який поставити у блок) передаємо "this".
     * "this" це відсилка до елементу на який нажато у данний момент.
     */
    setDay($(this));
  });
});
