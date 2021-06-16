$('.choose_master').on('click', function() {
    $('body').animate({scrollTop: 100}, 500);
    const flat_size = $('#flat-size').val();
    const repair_type = $('#repair-type').text();
    const phone_number = $('#phone-number').val();
    const options = {
        design: opt('radio1'),
        control: opt('radio2')
    }
    if(flat_size != "" && isNaN(+flat_size)) {
        alert('Пожалуйста, введите корректное значение плошади квартиры!');
        return;
    }
    if(!(phone_number).match(/\+38\([0-9]{3}\)\s*[0-9]{3}-[0-9]{2}-[0-9]{2}/)?.length) {
        alert('Пожалуйста, введите корректный номер телефона!');
        return;
    }
    let data = {
        flat_size: flat_size,
        repair_type: repair_type,
        phone_number: phone_number,
        design: options.design,
        control: options.control
    }
    $.ajax({
        url: './send_request.php',
        method: 'POST',
        data: data,
        success: function(data) {
            alert('Заявка отправлена!');
            
        }
    });
    document.location.href="/feedback.html";
})

function opt(id) {
    if($(`#${id}`).hasClass('radio_active')) return 'нужен';
    return 'не нужен';
}