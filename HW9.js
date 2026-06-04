//1)დაწერე ფუქნცია რომელიც გაფილტრავს ლუწებზე და იპოვი მათ საშუალოს [1,2,3,4,5,6]
// function AverageofEvenNums(array) {
//     let sum = 0;
//     let count = 0;

//     for (let i = 0; i < array.length; i++) {
//         if (array[i] % 2 === 0) {
//             sum += array[i];
//             count++;
//         }
//     }

//     if (count === 0) {
//         console.log('there is no even numbers in array');
//     } else {
//         console.log(sum / count);
//     }
// }

// AverageofEvenNums([1, 7, 3, 3, 5, 9]);


//2)დაწერე ფუნქცია, რომელიც დათვლის სიტყვების რაოდენობას წინადადებაში.


// function WordsInSentence(string){
//     let splitted = string.split(" ")
//     return splitted.length
// }

// console.log(WordsInSentence("I love JavaScript"))

//3) დაწერე ფუნქიცა რომელიც დააბრუნებს true თუ რიცხვი მარტივია თუ არადა false.

// function PrimeNums(num) {
//     if (num <= 1) {
//         return "Number is not Prime or Composite"
//     }
//     for (let i = 2; i < num; i++) {
//         if (num % i === 0) {
//             return false
//         }
//     }
//     return true
// }
// console.log(PrimeNums(8))

//4) let words = ["dog", "elephant", "cat", "hippopotamus"] იპოვე ყველაზე გრძელი ისტყვა
// let words = ["dog", "elephant", "cat", "hippopotamus"]
// let longest = words.reduce((a, b) => a.length > b.length ? a : b)
// console.log(longest)


//5)let arr = [3, 5, 3, 2, 5, 5, 3, 5] დააბრუნე ისეთი რიცხვი რომელიც მეორდება უფრო მეტჯერ
// let arr = [3, 5, 3, 2, 5, 5, 3, 5]

// function mostFrequent(array) {
//     let frequency = {}
//     let maxCount = 0
//     let mostFrequentNum

//     for (let num of array) {
//         frequency[num] = (frequency[num] || 0) + 1
//         if (frequency[num] > maxCount) {
//             maxCount = frequency[num]
//             mostFrequentNum = num
//         }
//     }
//     return mostFrequentNum
// }
// console.log(mostFrequent(arr))

//6)let nums = [1, 2, 3, 4, 5, 6, 7, 8] დაწერე ფუქნცია რომელიც დაითვლის რამდენი ლუწი და რამდენი კენტი რიცხვია
// function EvensandOdds(array){
//     let EvenNumbers = 0
//     let OddNumbers = 0
//     for(let i = 0; i < array.length; i++){
//         if(array[i] % 2 === 0){
//             EvenNumbers++
//         }else{
//             OddNumbers++
//         }
//     }
//     console.log("Even Numbers:", EvenNumbers)
//     console.log("Odd Numbers:", OddNumbers)
// }

// EvensandOdds([1, 2, 3, 4, 5, 6, 7, 8])


//7)let nums = [10, 2, 33, 5, 7] დაწერე ფუქნცია როემლიც დააბრუენბს ყველაზე პატარა რიცხვს
// function SmallestValue(array){
//     let sorted = array.sort((a,b) => a-b)
//     return sorted[0]
// }

// console.log(SmallestValue([10, 2, 33, 5, 7]))