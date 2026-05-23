//1)იპოვე გამოსავალი როგორ შეიძლება გაეშვას ჯერ  console.log("one") console.log("two") შემდეგ ფუნქცია
//აუცილებელია გამოიყენო ფრომისი

// function block(){
//     for(let i = 1 ;i <10000000000;i++){}
// }

// let myPromise = new Promise((res,rej)=>{
//     res()
// })

// console.log("one")

// myPromise.then(() => {
//     block()
// })
// console.log("two")

//2)ორი პრომისი შექმენი (ერთმა დაარესოლვოს, ერთმა დაარეჯექთოს) და ორივე შემთხვევა დაამუშავე then/catch-ით  ცალცალკეც და “ჯგუფურადაც”  - ჯგუფურად Allsetteld გამოიყენე.
// let myPromise1 = new Promise((res,rej)=>{
//     res("success")
// })

// let myPromise2 = new Promise((res,rej)=>{
//     rej("error")
// })

// myPromise1
// .then(res => console.log(res))
// .catch(err => console.log(err))

// myPromise2
// .then(res => console.log(res))
// .catch(err => console.log(err))

// Promise.allSettled([myPromise1,myPromise2])

// .then(res => {
//     console.log(res)
// })


//3)შექენი 4 პრომისი (ზოგი resolve, ზოგი reject). დააბრუნე მარტო პირველი დარესოლვებული
// let myPromise1 = new Promise((res,rej)=>{
//     rej("error1")
// })

// let myPromise2 = new Promise((res,rej)=>{
//     setTimeout(() => {
//         res("first success")
//     },3000)
// })

// let myPromise3 = new Promise((res,rej)=>{
//     res("second success")
// })

// let myPromise4 = new Promise((res,rej)=>{
//     rej("error2")
// })

// Promise.any([
// myPromise1,
// myPromise2,
// myPromise3,
// myPromise4
// ])

// .then(res => console.log(res))
// .catch(err => console.log(err))

//4)შექმენი 4 ფრომისი  და რედიუსით დაითვალე რამდენია წარმატებული და რამდენი წარუმატებელი
// let myPromise1 = Promise.resolve(1)
// let myPromise2 = Promise.reject(2)
// let myPromise3 = Promise.resolve(3)
// let myPromise4 = Promise.reject(4)

// Promise.allSettled([
// myPromise1,
// myPromise2,
// myPromise3,
// myPromise4
// ])

// .then(res => {
//     let result = res.reduce((tot,curr)=>{
//         if(curr.status === "fulfilled"){
//             tot.success++
//         }
//         if(curr.status === "rejected"){
//             tot.failed++
//         } return tot
//     },
//     {success:0,
//     failed:0})  
//     console.log(result)
// })


//5) შექმენი 5 ფრომისი და გაფილტრე ეს ფრომისები დააბრუნე ამრტო წარუმატებლები
// let myPromise1 = Promise.resolve(1)
// let myPromise2 = Promise.reject(2)
// let myPromise3 = Promise.resolve(3)
// let myPromise4 = Promise.reject(4)
// let myPromise5 = Promise.reject(5)

// Promise.allSettled([
// myPromise1,
// myPromise2,
// myPromise3,
// myPromise4,
// myPromise5
// ])

// .then(res => {
//     let filteredArr = res.filter(el => el.status === "rejected")
//     console.log(filteredArr)
// })


//6)api1 = https://jsonplaceholder.typicode.com/users
// api2 = https://jsonplaceholder.typicode.com/posts
// გაუშვი ეს ორი API ერთდროულად

// async function fetchUsers(){
//     let res = await fetch("https://jsonplaceholder.typicode.com/users")
//     let data = await res.json()
//     return data
// }

// async function fetchPosts(){
//     let res = await fetch("https://jsonplaceholder.typicode.com/posts")
//     let data = await res.json()
//     return data
// }

// Promise.all([
// fetchUsers(),
// fetchPosts()
// ])
// .then(res => {
//     console.log(res[0])
//     console.log(res[1])
// })
// .catch(err => {
//     console.log(err)
// })