console.log('hi!')

var currentSlide = 0

var totalSlides = $('.holder div').length

// 

var autoSlide = setInterval(function() {
  nextSlide()
}, 3000)

// 

var nextSlide = function() {
  currentSlide = currentSlide + 1

  if (currentSlide >= totalSlides) {
    currentSlide = 0
  }

  var vwUnit = -currentSlide * 100
  var leftPosition = vwUnit + 'vw'

  $('.holder').css('left', leftPosition)

  var slideNumber = currentSlide + 1
  $('.steps').text(slideNumber + ' / ' + totalSlides)
}

// 

$('.next').on('click', function() {
  clearInterval(autoSlide)
  nextSlide()
})

// 

var previousSlide = function() {
  currentSlide = currentSlide - 1

  if (currentSlide < 0) {
    currentSlide = totalSlides - 1
  }

  var vwUnit = -currentSlide * 100
  var leftPosition = vwUnit + 'vw'

  $('.holder').css('left', leftPosition)

  var slideNumber = currentSlide + 1
  $('.steps').text(slideNumber + ' / ' + totalSlides)
}

// 

$('.prev').on('click', function() {
  clearInterval(autoSlide)
  previousSlide()
})

// 

var slideNumber = currentSlide + 1
$('.steps').text(slideNumber + ' / ' + totalSlides)

// 

$('body').on('keydown', function (event) {
  var keyCode = event.keyCode
  if (keyCode == 37) {
    clearInterval(autoSlide)
    previousSlide()
  }
  if (keyCode == 39) {
    clearInterval(autoSlide)
    nextSlide ()
  }
})

// 

