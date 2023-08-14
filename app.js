$(function(){(console.log('Lets get ready to party with jQuery!'))});

$('article img').addClass('image-center');

$('p').last().remove();

$('h1').css('font-size', (Math.random()*100));

$('ol').append('<li>Bunnies are better though...</li>');

$('ol').empty().append('<p>I sincerely appologize for this list being here.');

$('input').on('keyup blur change', function () {
    let red=$('input').eq(0).val();
    let blue=$('input').eq(1).val();
    let green=$('input').eq(2).val();
    $('body').css('background-color',
        'rgb(' + red + ',' + green + ',' + blue + ')');
});

$('img').on('click', function(){
    $('img').remove();
});