let correctGuess = 0

let alphabetButton = document.createElement('button')

let randomWord = document.createElement('p')

let gameOver = false

let maxWrong = 0 // 6 is losing

let lifeDisplay = document.querySelector('#lifeCounter')

lifeDisplay.append('6')

const alphabet = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'N',
  'M',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
]

let letterBank = [
  'cannonball',
  'ship',
  'treasure',
  'booty',
  'scurvy',
  'plank',
  'mutiny',
  'salt',
  'parrot',
  'siren',
  'equal',
  'current',
  'pea',
  'victim',
  'down',
  'until',
  'whole',
  'analyze',
  'formula',
  'circumstance',
  'foot',
  'income',
  'act',
  'back',
  'take',
  'general',
  'contest',
  'embark',
  'rural',
  'dark',
  'devote',
  'bar',
  'liberal',
  'club',
  'well',
  'seven',
  'somewhat',
  'paper',
  'about',
  'brother',
  'idea',
  'tender',
  'borrow',
  'downtown',
  'guilt',
  'pass'
]

let newWord = (randomWord.innerText =
  letterBank[Math.floor(Math.random() * letterBank.length)])
let wordSplit = newWord.toUpperCase().split('')

wordSplit.forEach((newLetter) => {
  let newSpan = document.createElement('span')
  newSpan.innerText = newLetter
  document.querySelector('#word').append(newSpan)
})

console.log(wordSplit)

//functions

alphabet.forEach((letter) => {
  let alphabetButton = document.createElement('button')
  alphabetButton.innerText = letter
  alphabetButton.addEventListener('click', (event) => {
    event.target.disabled = true
    if (gameOver === false) {
      const allSpans = document.querySelectorAll('span')
      for (let i = 0; i < allSpans.length; i++) {
        if (event.target.innerText === allSpans[i].innerText) {
          alphabetButton.style.color = 'green'
          allSpans[i].style.color = 'black'
          correctGuess++
          console.log('this is your win condition ' + correctGuess)
        }
      }

      //console.log(event.target.innerText)
      if (wordSplit.includes(alphabetButton.innerText) === false) {
        maxWrong++
        console.log('you lose a life!' + maxWrong)
      }

      triggerWin()
      triggerLoss()
    }
  })

  document.querySelector('.alphabetDisplay').appendChild(alphabetButton)
})

triggerWin = () => {
  if (correctGuess === wordSplit.length) {
    gameOver = true
    alert('Not bad for a scallyway you win!')
    return
  }
}
triggerLoss = () => {
  if (maxWrong === 6) {
    gameOver = true
    alert('Dance the hempen jig , you loss!')
    return
  }
}
