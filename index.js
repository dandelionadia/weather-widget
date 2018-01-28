// завантаження всіє сторінки
$(document).ready(function() {
  // до класу "weather__day" при click  виконується функція
  $(".weather__day").on("click", function() {
    /**
     * Змінюємо градус.
     */
    // видалити клас обраного дня з усіх елементів днів
    $(".weather__day").removeClass("weather__day--selected");

    // додати клас обраного дня до елементу, на котрий нажали
    $(this).addClass("weather__day--selected");
    
    // взяти значення наступного градусу з дня, на котрий нажали
    var nextDegree = $(this).children(".weather__day-degree").text();

    // змінити значення градусу верхнього блоку на градус даного дня
    $(".weather__degree").text(nextDegree);

    /**
     * Змінюємо статус погоди.
     */
    // взяти наступний статус із "data-status" атрибуту даного дня і оновити у верхньому блоці
    var nextStatus = $(this).data("status");
    $(".weather__status").text(nextStatus);

    //
    var nextImage = $(this).data("image");
    $(".weather__overview").css("background-image", `url(./images/${nextImage})`);
  });
});
