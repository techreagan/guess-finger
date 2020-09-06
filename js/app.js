const UIscore = document.querySelector('#score')
const UIcountdownTimer = document.querySelector('#countdownTimer')
const UIresultImg = document.querySelector('#resultImg')
const UIfingers = document.querySelector('#fingers')

let scores = 0
let countDown = 20
window.addEventListener('load', () => {
  UIfingers.addEventListener('click', (e) => {
    const btnFingerNum = e.target.parentElement.dataset.num
    const randomNumber = Math.floor(Math.random() * 6)

    if (!btnFingerNum) return

    if (parseInt(btnFingerNum) === randomNumber) {
      scores++
      UIscore.innerText = scores

      UIresultImg.setAttribute('src', `img/${randomNumber}.png`)
      UIresultImg.parentElement.style.border = '4px solid green'
      UIresultImg.parentElement.classList.add(
        'animate__animated',
        'animate__shakeY'
      )
      UIresultImg.parentElement.addEventListener('animationend', (e) => {
        e.target.classList.remove('animate__animated', 'animate__shakeY')
      })
    } else {
      UIresultImg.setAttribute('src', `img/${randomNumber}.png`)
      UIresultImg.parentElement.style.border = '4px solid red'
      UIresultImg.parentElement.classList.add(
        'animate__animated',
        'animate__shakeX'
      )
      UIresultImg.parentElement.addEventListener('animationend', (e) => {
        e.target.classList.remove('animate__animated', 'animate__shakeX')
      })
    }
  })

  let timer = setInterval(startCountDown, 1000)

  function startCountDown() {
    countDown--

    UIcountdownTimer.innerHTML = `00:${
      countDown < 10 ? '0' + countDown : countDown
    }`

    if (countDown === 0) {
      clearInterval(timer)
      alert('Game over')
      countDown = 20
      timer = setInterval(startCountDown, 1000)
    }
  }
})
