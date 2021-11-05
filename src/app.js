
//Question 1
let findPrime = (number) => {
    let result = true
    for (let j = 2; j < number; j++) {
        if (number % j == 0) {
            result = false
            break;
        }
    }
    return result
}
let writeFindPrime = (...numbers) => {
    numbers.forEach((number) => {
        if (findPrime(number)) {
            console.log(number + " asal sayıdır.")
        }
        else {
            console.log(number + " asal sayı değildir.")
        }
    });
}
writeFindPrime(2, 5, 8, 21, 13)
writeFindPrime(3, 5)
//Question 2
let sumOfDivisior = (number) => {
    let sum = 0
    for (let i = 1; i < number; i++) {
        if (number % i == 0) {
            sum = sum + i
        }
    }
    return sum
}
let friendNumber = (number1, number2) => {
    if (sumOfDivisior(number1) == number2 && sumOfDivisior(number2) == number1)
        console.log("Sayılar arkadaş sayıdır.")
    else
        console.log("Sayılar arkadaş sayı değildir.")
}
friendNumber(220, 284)
//Question 3
let findPerfectNumber = () => {
    let perfectNumbers = []
    for (let i = 1; i < 1000; i++) {
        if (sumOfDivisior(i) == i)
            perfectNumbers.push(i)
    }
    console.log(...perfectNumbers)
}
findPerfectNumber()
//Question 4
let listAllPrime = () => {
    let listPrime = []
    for (let i = 2; i < 1000; i++) {
        if (findPrime(i)) {
            listPrime.push(i)
        }
    }
    console.log(...listPrime)
}
listAllPrime()
