let correctGuess = 0

let alphabetButton = document.createElement('button')

let randomWord = document.createElement('p')

let gameOver = false

let maxWrong = 0 // 6 is losing

let lifeDisplay = document.querySelector('#lifeCounter')

lifeDisplay.innerText = '6 lives remain'

let gameResultMessage = document.querySelector('#gameover')

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
  'captain',
  'current',
  'sail',
  'island',
  'rum',
  'tide',
  'beard',
  'ocean',
  'bootleg',
  'pirate',
  'caribbean',
  'gold',
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
    lifeDisplay.style.display = 'none'
    gameResultMessage.innerText = ' Arr....Not bad for a scallyway you win!'
    return
  }
}

triggerLoss = () => {
  if (maxWrong === 1) {
    lifeDisplay.innerText = '5 lives remain'
  } else if (maxWrong === 2) {
    lifeDisplay.innerText = '4 lives remain'
  } else if (maxWrong === 3) {
    lifeDisplay.innerText = '3 lives remain'
  } else if (maxWrong === 4) {
    lifeDisplay.innerText = '2 lives remain'
  } else if (maxWrong === 5) {
    lifeDisplay.innerText = '1 lives remain'
  } else if (maxWrong === 6) {
    lifeDisplay.style.display = 'none'
    gameOver = true
    gameResultMessage.innerText = 'Dance the hempen jig , you loss!'
    return
  }
}
