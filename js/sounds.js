export default function Sounds() {
  const buttonPressAudio = new Audio(
    'https://github.com/maykbrito/automatic-video-creator/blob/master/audios/button-press.wav?raw=true'
  )
  const kitchenTimer = new Audio(
    'https://github.com/maykbrito/automatic-video-creator/blob/master/audios/kichen-timer.mp3?raw=true'
  )
  const bgAudioForest = new Audio('./audios/Floresta.wav')
  const bgAudioRain = new Audio('./audios/Chuva.wav')
  const bgAudioCoffeShop = new Audio('./audios/Cafeteria.wav')
  const bgAudioBonfire = new Audio('./audios/Lareira.wav')

  const sounds = {
    forest: bgAudioForest,
    rain: bgAudioRain,
    coffeshop: bgAudioCoffeShop,
    bonfire: bgAudioBonfire
  }

  function pressButton() {
    buttonPressAudio.play()
  }

  function timeEnd() {
    kitchenTimer.play()
  }

  function playPauseAudio(audio) {
    if (sounds[audio].paused) {
      sounds[audio].loop
      sounds[audio].currentTime = 0
      sounds[audio].play()
    } else {
      sounds[audio].pause()
    }
  }

  function clearAudios() {
    bgAudioForest.pause()
    bgAudioRain.pause()
    bgAudioCoffeShop.pause()
    bgAudioBonfire.pause()
  }

  return {
    pressButton,
    timeEnd,
    playPauseAudio,
    clearAudios
  }
}
