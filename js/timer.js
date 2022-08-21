import {
  secondsDisplay,
  minutesDisplay,
  buttonPlay,
  buttonPause
} from './elements.js'

import Sounds from './sounds.js'
const sounds = Sounds()

export default function Timer() {
  let timerTimeOut
  let minutes = Number(minutesDisplay.textContent)

  function updateDisplay(newMinutes, seconds) {
    newMinutes = newMinutes === undefined ? minutes : newMinutes
    seconds = seconds === undefined ? 0 : seconds
    minutesDisplay.textContent = String(newMinutes).padStart(2, '0')
    secondsDisplay.textContent = String(seconds).padStart(2, '0')
  }

  function reset() {
    updateDisplay(minutes, 0)
    clearTimeout(timerTimeOut)
  }

  function countdown() {
    timerTimeOut = setTimeout(function () {
      let seconds = Number(secondsDisplay.textContent)
      let minutes = Number(minutesDisplay.textContent)
      let isFinished = minutes <= 0 && seconds <= 0

      updateDisplay(minutes, 0)

      if (isFinished) {
        reset()
        buttonPlay.classList.remove('hide')
        buttonPause.classList.add('hide')
        sounds.timeEnd()
        return
      }

      if (seconds <= 0) {
        seconds = 60
        --minutes
      }

      updateDisplay(minutes, String(seconds - 1))

      countdown()
    }, 1000)
  }

  function hold() {
    clearTimeout(timerTimeOut)
  }

  function increaseTime() {
    if (minutes === 60) {
      /*  pressButton() */
      return
    }
    minutesDisplay.textContent = String((minutes = minutes + 5)).padStart(
      2,
      '0'
    )
  }

  function decreaseTime() {
    if (minutes === 0) {
      /*  pressButton() */
      return
    }
    minutesDisplay.textContent = String((minutes = minutes - 5)).padStart(
      2,
      '0'
    )
  }

  return {
    updateDisplay,
    reset,
    countdown,
    hold,
    increaseTime,
    decreaseTime
  }
}
