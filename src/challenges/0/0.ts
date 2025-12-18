/**
 * Problem Zero: Sum of Odd Square Numbers
 *
 * A number is a perfect square (or square number) if it is the square of a positive integer.
 * For example:
 *   - 25 is a square number because 5² = 5 × 5 = 25
 *   - It is also an odd square because 25 is odd
 *
 * The first 5 square numbers are:
 *   1, 4, 9, 16, 25
 *
 * Among these, the odd squares are:
 *   1, 9, 25
 *
 * Their sum is:
 *   1 + 9 + 25 = 35
 *
 * Calculate the sum of all odd square numbers among the first 274,000 square numbers.
 */

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
