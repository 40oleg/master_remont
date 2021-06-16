$('.select').on('click', function(e) {
    $(this).toggleClass('select_active');
});

$('.select__div-input').on('click', function() {
    $('.select__div-input').focus()
})

$('.select__option').on('click', function(e) {
    $(this).parent('.select__options').parent('.select').children('.select__value').html($(this).html());
    $(this).parent('.select__options').parent('.select').children('.select__value').children('.select__div-input').focus()
})