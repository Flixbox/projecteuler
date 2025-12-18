const SQUARE_NUMBERS_TO_FIND = 274000
let amountOfFoundSquareNumbers = 0
let sumOfSquareNumbers = 0
let currentIteratorNumber = 1

while (amountOfFoundSquareNumbers < SQUARE_NUMBERS_TO_FIND) {
  const root = Math.sqrt(currentIteratorNumber)
  const isSquareNumber = Number.isInteger(root)
  if (isSquareNumber) {
    amountOfFoundSquareNumbers++
    sumOfSquareNumbers += currentIteratorNumber
  }
  currentIteratorNumber++
}

console.info('sumOfSquareNumbers: ', sumOfSquareNumbers)
