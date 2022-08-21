function clearTheme(buttonTheme) {
  const buttons = document.querySelectorAll('.theme')
  console.log(buttonTheme)

  for (let button of buttons) {
    if (!button.classList.contains(buttonTheme)) {
      button.classList.remove('selected')
    }
  }
}

export { clearTheme }
