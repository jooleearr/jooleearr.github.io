$(document).ready(function () {

  $('.js-next-page').on('click', function (e) {
    e.preventDefault()

    var target = $($(this).attr('href'))
    $('.page--active').removeClass('page--active')
    target.addClass('page--active')
  })

})
