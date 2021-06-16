$('.feedback__btn').on('click', function() {
    let data = [];
    $('.option').each(function(e) {
        data.push({
            question: $(this).children('.form__text').text(),
            answer: $(this).children('.select').children('.select__value').text()+$(this).children('.select').children('.select__options').children('.select__option').children('.select__div-input').text()
        });
    });
    console.log(data)
    $.ajax({
        url: './send_feedback.php',
        method: 'POST',
        data: {data: JSON.stringify(data)},
        success: function(data) {
            alert('Заявка отправлена!');
        }
    });
    document.location.href="/index.html";
});