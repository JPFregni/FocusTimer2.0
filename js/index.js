import {
  body,
  buttonPlay,
  buttonPause,
  buttonStop,
  buttonIncrease,
  buttonDecrease,
  buttonForest,
  buttonRain,
  buttonCoffeShop,
  buttonBonfire
} from './elements.js'

import { clearTheme } from './themes.js'

import Timer from './timer.js'
const timer = Timer()

import Sounds from './sounds.js'
const sounds = Sounds()

buttonIncrease.addEventListener('click', function () {
  timer.increaseTime()
  sounds.pressButton()
})

buttonDecrease.addEventListener('click', function () {
  timer.decreaseTime()
  sounds.pressButton()
})

buttonPlay.addEventListener('click', function () {
  buttonPlay.classList.add('hide')
  buttonPause.classList.remove('hide')
  timer.countdown()
  sounds.pressButton()
})

buttonPause.addEventListener('click', function () {
  buttonPlay.classList.remove('hide')
  buttonPause.classList.add('hide')
  timer.hold()
  sounds.pressButton()
})

buttonStop.addEventListener('click', function () {
  buttonPlay.classList.remove('hide')
  buttonPause.classList.add('hide')
  timer.reset()
  sounds.pressButton()
})

buttonForest.addEventListener('click', function () {
  clearTheme('forest')
  buttonForest.classList.toggle('selected')
  body.classList.remove('chuva', 'cafeteria', 'lareira')
  body.classList.toggle('floresta')
  sounds.clearAudios()

  if (buttonForest.classList.contains('selected')) {
    sounds.playPauseAudio('forest')
  }
})

buttonRain.addEventListener('click', function () {
  clearTheme('rain')
  buttonRain.classList.toggle('selected')
  body.classList.remove('floresta', 'cafeteria', 'lareira')
  body.classList.toggle('chuva')
  sounds.clearAudios()

  if (buttonRain.classList.contains('selected')) {
    sounds.playPauseAudio('rain')
  }
})

buttonCoffeShop.addEventListener('click', function () {
  clearTheme('coffeshop')
  buttonCoffeShop.classList.toggle('selected')
  body.classList.remove('floresta', 'chuva', 'lareira')
  body.classList.toggle('cafeteria')
  sounds.clearAudios()

  if (buttonCoffeShop.classList.contains('selected')) {
    sounds.playPauseAudio('coffeshop')
  }
})

buttonBonfire.addEventListener('click', function () {
  clearTheme('bonfire')
  buttonBonfire.classList.toggle('selected')
  body.classList.remove('floresta', 'chuva', 'cafeteria')
  body.classList.toggle('lareira')
  sounds.clearAudios()

  if (buttonBonfire.classList.contains('selected')) {
    sounds.playPauseAudio('bonfire')
  }
})
