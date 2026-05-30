//1)let arr = [1, [2, 3, [4, 5]], 5, [2, [3, 6]]] დაალაგე ზრდადობით და ამოიღე უნიკალურები გამოიყენე ForLoop
// let arr = [1, [2, 3, [4, 5]], 5, [2, [3, 6]]];
// let flat = [];
// function flatten(array) {
//     for (let i = 0; i < array.length; i++) {
//         if (Array.isArray(array[i])) {
//             flatten(array[i])
//         } else {
//             flat.push(array[i])
//         }
//     }
// }
// flatten(arr);

// for (let i = 0; i < flat.length - 1; i++) {
//     for (let j = 0; j < flat.length - 1 - i; j++) {
//         if (flat[j] > flat[j + 1]) {
//             let temp = flat[j];
//             flat[j] = flat[j + 1];
//             flat[j + 1] = temp
//         }
//     }
// }

// let unique = [];

// for (let i = 0; i < flat.length; i++) {
//     let exists = false;

//     for (let j = 0; j < unique.length; j++) {
//         if (flat[i] === unique[j]) {
//             exists = true;
//         }
//     }if (!exists) {
//         unique.push(flat[i])
//     }
// }
// console.log(unique);

// let arr = [1, [2, 3, [4, 5]], 5, [2, [3, 6]]]

// let flattedArr = arr.flat(Infinity)

// let sortedArr = flattedArr.sort((a,b) => a-b)

// let uniqueArr = [...new Set(sortedArr)]

// let sum = uniqueArr.reduce((tot,curr) => tot + curr, 0)

// console.log(uniqueArr)
// console.log(sum)


//2)let products = [
//   { name:"Phone", price:1200, rating:4.5 },
//   { name:"Laptop", price:2500, rating:4.8 },
//   { name:"Book", price:30, rating:4.9 },
//   { name:"TV", price:800, rating:4.0 }
// ]
// იპოვე ყველაზე მაღალი rating-ის მქონე პროდუქტი, მაგრამ ისეთი, რომლის ფასიც < 1000.
// let products = [
//   { name:"Phone", price:1200, rating:4.5 },
//   { name:"Laptop", price:2500, rating:4.8 },
//   { name:"Book", price:30, rating:4.9 },
//   { name:"TV", price:800, rating:4.0 }
// ]

// let bestProduct = products.filter((el) => el.price < 1000).sort((a,b) => a.rating - b.rating)
// console.log(bestProduct[bestProduct.length - 1])

//3)let sentence = "dog cat dog bird cat dog fish bird"
// რედიუსის დახმარებით დათვალე რომელი რამდენჯერ მეორდება და for ლუპის დახმარებით იპოვე მეტჯერგამეორებული
// let sentence = "dog cat dog bird cat dog fish bird"
// let splittedarr = sentence.split(" ")
// let grouped = splittedarr.reduce((tot,curr)=> {
//     if(tot[curr]){
//         tot[curr] +=1
//     }else{
//         tot[curr] = 1
//     }

//     return tot
// },{})
// console.log(grouped)

// let count = 0
// let word = ""

// for (let key in grouped) {
//     if (grouped[key] > count) {
//         count = grouped[key]
//         word = key
//     }
// }

// console.log(word, count)

//1)დაწერე ფუნქცია for loop-ის გამოყენებით, რომელიც დაითვლის რამდენჯერ გვხვდება კონკრეტული ასო მოცემულ სტრინგში. 

// function countLetter(str, letter) {
//     let count = 0

//     for (let i = 0; i < str.length; i++) {
//         if (str[i] === letter) {
//             count++
//         }
//     }

//     return count
// }

// console.log(countLetter("hello world", "l"))

//2) დაწერე ფუნქცია, რომელიც შეამოწმებს არის თუ არა სტრინგი პალინდრომი (ეს სიტყვა თუ იკითხება ერთნაირად ესე იგი პალინდრომია.მაგალითად ana, abba,gig) 


// function isPalindrome(str) {
//     for (let i = 0; i < str.length / 2; i++) {
//         if (str[i] !== str[str.length - 1 - i]) {
//             return false
//         }
//     }
//     return true;
// }

// console.log(isPalindrome("ana"))
// console.log(isPalindrome("abba"))
// console.log(isPalindrome("hello"))

//3)შექმენი ფუნქცია, რომელიც მიიღებს ორ რიცხვების მასივს, გააერთიანებს მათ, წაშლის დუბლიკატებს და დაითვლის ჯამს. გამოიყენე მასივის მეთოდები და ლოგიკური ოპერატორები საჭიროებისამებრ.
// function UniqueSum(arr1, arr2) {
//     let merged = [...arr1, ...arr2]

//     let unique = [...new Set(merged)]

//     let sum = unique.reduce((tot, curr) => tot + curr, 0)

//     return sum
// }

// console.log(UniqueSum([1, 2, 3], [3, 4, 5]))


//  4)შექმენი ფუნქცია ფაქტორიალის დასათვლელად. 

// function factorial(n) {
//     let result = 1

//     for (let i = 1; i <= n; i++) {
//         result *= i
//     }

//     return result
// }

// console.log(factorial(5))

//5)Two Sum - მოძებნე მასივში ის წყვილები, რომელთა ჯამიც უდრის მოცემულ რიცხვს ანუ [1,2,3,4,5,6,-7,-8] ამ მასივს და -15 თუ გადავცემთ მან უნდა დააბრუნოს [6,7]
// function twoSum(arr, target) {
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = i + 1; j < arr.length; j++) {
//             if (arr[i] + arr[j] === target) {
//                 return [arr[i], arr[j]]
//             }
//         }
//     }

//     return []
// }

// let arr = [1, 2, 3, 4, 5, 6, -7, -8]

// console.log(twoSum(arr, -15))