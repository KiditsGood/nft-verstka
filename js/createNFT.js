$('.create__drop-button').click(function () {
    $(this).addClass('active').siblings().removeClass('active')
})

$('.create__drop-button:last-child').click(function () {
    $('.create__time').css('display', 'flex')
})

$('.create__drop-button:not(:last-child)').click(function () {
    $('.create__time').css('display', 'none')
})

$('.create__collection-new').click(function () {
    $('#collection').modal({
        fadeDuration: 200
    })
})