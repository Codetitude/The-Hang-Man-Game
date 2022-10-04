guessedLetters = []

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

let randomWord = document.createElement('p')

let gameOver = false

let letterBank = [
  'complex',
  'towards',
  'commercial',
  'storage',
  'pressure',
  'Latin',
  'indeed',
  'sexual',
  'thus',
  'enhance',
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
let wordSplit = newWord.split('').join('   ')
document.querySelector('#word').append(wordSplit)

console.log(wordSplit)
//functions

alphabet.forEach((letter) => {
  let alphabetButton = document.createElement('button')
  alphabetButton.innerText = letter
  alphabetButton.addEventListener('click', () => {
    alphabetButton.style.color = 'red'
    console.log(letter)
  })

  document.querySelector('.alphabetDisplay').appendChild(alphabetButton)
})

compareLetters = () => {}
//letter.addEventListener('click', (e) => {
//if (gameover === false) {
//letter(e.target)
//
//}
//})
//})
//}

//makeLetterButton()

//pickLetter = () => {
//alphabet.forEach((letter) => {
//letter.addEventListener('click', (e) => {
if (gameOver === false) {
}
//})
//})
//}
//pickLetter()
console.log(alphabet)

//startGame = () => {}

//startGame()
