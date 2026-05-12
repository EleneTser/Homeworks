//1) გაამრავლე თითოეული ელემენტი 3-ზე.
// let arr = [1,2,3]
// let Multiplied = arr.map((num) => num * 3)
// console.log(Multiplied)

//2) გაფილტრე ისეთი რიცხვები რომლებიც იყოფა უნაშთოდ 3-ზე
// let arr = [1,5,3,9,4,6,12]
// let filteredarr = arr.filter((num) => num % 3 === 0)
// console.log(filteredarr)

//3) დააბრუნე ყველა დადებითი რიცხვის ჯამი
// let arr = [-4, 2,-6,3,3,7,-8]
// let sumofpositives = 0
// for(let i = 0;i <arr.length; i++){
//     if(arr[i]>0){
//         sumofpositives += arr[i]
//     }
// }

// console.log(sumofpositives)

//4) მოცემული სტრინგების მასივიდან წაშალე თითოეული სტრინგის ბოლო სიმბოლო
// let namesArr = ["giorgi","nika","mariami"]
// let result = []
// for(let i = 0; i< namesArr.length; i++){
//     result.push(namesArr[i].slice(0, -1))
// }

// console.log(result)


//5) გაამრავლე ყველა ელემენტი მასივში 2-ზე და შემდეგ ამოიღე რიცხვები, რომლებიც იყოფა 3-ზე
// let arr = [2,5,4,3,6,15]
// let mappedarr = arr.map((num) => num * 2)
// let filteredarr = mappedarr.filter((num) => num % 3 === 0)
// console.log(filteredarr)

//6) დაალაგე რიცხვები ზრდადობით 
// let numsArr = [1,-1,-2,-10,111,3,2,5]
// let sortedarr = numsArr.sort((a,b) => a-b)
// console.log(sortedarr)

//7)გაამრავლე ყველა ელემენტი 2-ზე და დატოვე მხოლოდ ისინი, რომლებიც 5-ზე მეტია.
// let arr = [1,2,3,7,4,8]
// let mappedarr = arr.map((num) => num * 2)
// let filteredarr = mappedarr.filter((num) => num > 5)
// console.log(filteredarr)

//8) let arr = [1,1,1,1,2,2,3,3,3] დააბრუნე let unque = [1,2,3]
// let arr = [1,1,1,1,2,2,3,3,3]
// let unque = [...new Set(arr)]
// console.log(unque)

//9) დააბრუნეთ ორი ყველაზე მცირე რიცხვის ჯამს 
let arr = [-1,20,90,4,5,111]
let sortedarr = arr.sort((a,b) => a-b)
console.log(sortedarr[0] + sortedarr[1])
