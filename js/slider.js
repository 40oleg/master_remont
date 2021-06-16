const images_count = $('.portfolio__work').length;
let counter = 1;

$('.portfolio__left-arrow').on('click', function() {
    if(counter <= 1) counter = images_count;
    else counter--;
    changeImg();
})

$('.portfolio__right-arrow').on('click', function() {
    if(counter >= 6) counter = images_count;
    else counter++;
    changeImg();
})


function changeImg() {
    $('.portfolio__work').removeClass('portfolio__work_active');
    $(`.portfolio__work:nth-child(${counter})`).addClass('portfolio__work_active');
}