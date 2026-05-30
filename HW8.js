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
