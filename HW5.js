//1. დაწერე ფუნქცია , რომელიც არგუმენტად იღებს sec-ს და ითვლის უკუსვლით იქმადე სანამ 0-მდე არ მივა
// function countDown(sec){
//     let interval = setInterval(() => {
//         console.log(sec)
//         sec--

//         if(sec<0){
//             clearInterval(interval)
//         }
//     },1000)
// }

// countDown(5)

//2. დაწერე ფუქნცია ფუქნციას გადააწოდე რიცხვი  და ასევე ლოგე რენდომული რიცხვი იქამდე სანამ ეს გადაცემული და რენდომ რიცხვი არ. დაემთხვევა ერთმამენთს
// function randomcompare(n){
//     let interval = setInterval(() => {
//         let random = Math.floor(Math.random() * 11)
//         console.log(random)

//         if(n === random){
//             clearInterval(interval)
//             console.log("Numbers matched")
//         }
//     }, 1000)
// }

// randomcompare(6)
//3.და წერე ფუქნცია რომელიც მიიღებს n და callback-ს როცა n > 27-ზე გაუშვი ეს callback-ი რომელიც დააკონსოლებს რომ ეს ნამდვილად მეტია 27-ზე სხვა შემთხვევაში დააკონსოლე რომ n ნაკლებია

// function test(n, callback){
//     if(n > 27){
//         callback()
//     }else{
//         console.log("Is not greater than 27")
//     }
// }

// function Callback(){
//     console.log("Is greater than 27")
// }

// test(26, Callback)

// 4.დაწერე ფუქნცია რომელიც პარამეტრად მიიღებს API და დააბრუნებს ამ API-ში მყოფ  4 - users. https://jsonplaceholder.typicode.com/users დაწერე ორივენაირად than/catch & async/await
// async function fetchAPI(API){
//     let res = await fetch(API)
//     let data = await res.json()

//     let users = data.slice(0,4)

//     console.log(users)
// }

// fetchAPI("https://jsonplaceholder.typicode.com/users")


// 5) დააწყვილე reduce-თი ცალკე ვისი ასაკიც მეტია 10 ზე და ვისი ასაკიც ნაკლებია 20
// let people = [
//   { name: "Giorgi", age: 25 },
//   { name: "Nika", age: 15 },
//   { name: "Mariam", age: 30 },
//   { name: "Luka", age: 18 }
// ];

// let group = people.reduce((tot, curr) => {
//     let age = curr.age

//     if (age > 10) tot.morethanten++
//     if (age < 20) tot.lessthantwenty++

//     return tot
// }, { morethanten: 0, lessthantwenty: 0 })

// console.log(group)
// 6. დაწერე ფუნქცია რომელიც მიიღებს ორ რიცხვს და callback-ს. თუ პირველი მეტია მეორეზე გაუშვი callback და დაუბეჭდე "მეტია", სხვა შემთხვევაში "ნაკლები ან ტოლია".
// function test(a, b, callback){
//     if(a > b){
//         callback()
//     }else{
//         console.log("First number is less than or equal to second")
//     }
// }

// function Callback(){
//     console.log("First number is greater than second")
// }

// test(30, 20, Callback)

// 7.დაწერე reduce, რომელიც დააჯგუფებს - ცალკე 20-ზე მეტ ფასიან რიცხვებს და 
// ცალკე 20-ზე ნაკლები ან ტოლი ფასიანი ნივთები
// let products = [
//   { name: "Mouse", price: 15 },
//   { name: "Keyboard", price: 45 },
//   { name: "USB Cable", price: 7 },
//   { name: "Headphones", price: 29.9 },
//   { name: "Webcam", price: 52 }
// ];
// let group = products.reduce((tot, curr) => {
//     let price = curr.price

//     if(price > 20) tot.morethantwenty++
//     if(price <= 20) tot.lessthanorequaltotwenty++

//     return tot
// }, { morethantwenty: 0, lessthanorequaltotwenty: 0 })

// console.log(group)