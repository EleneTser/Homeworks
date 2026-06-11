//1
/*let arr = []
for(let i = 5; i <=15;i++){
    arr.push(i)
}
console.log(arr)*/

//2
/*let arr = [1,2,3,4,5]
console.log(arr.reverse())*/

//3
/*let arr = [100,2,3,9]
let min = arr[0]
for(let i = 1; i < arr.length; i++){
    if(arr[i] < min){
        min = arr[i]
    }
}

console.log(min)*/

//4
/*let arr = [1,2,3,4,5,6,7]
console.log(arr.slice(2,5))*/

//5
/*let arr1 = [1,2] 
let arr2=[3,4]
let gaertianeba = arr1.concat(arr2)
console.log(gaertianeba)*/

//6
/*let arr = [1,2,3,4,5,6,6,7,7]
let result = []

for(let i = 0; i < arr.length; i++){
    if(!result.includes(arr[i])){
        result.push(arr[i])
    }
}

console.log(result)*/

//7
/*let arr = [1,2,3,4,5,6,7]
let evens = []
let odds = []
for(let i = 0; i < arr.length; i++){
    if(arr[i] % 2 === 0){
        evens.push(arr[i])
    }else{
        odds.push(arr[i])
    }
} 
console.log(evens)
console.log(odds)*/

//8
/*let arr = [1,2,3,4,5,6,7,-1,-2,-3,-4]

let positiveCount = 0
let negativeSum = 0

for(let i = 0; i < arr.length; i++){
    if(arr[i] > 0){
        positiveCount++
    }else if(arr[i] < 0){
        negativeSum += arr[i]
    }
}

console.log("დადებითი რიცხვების რაოდენობა:", positiveCount)
console.log("უარყოფითი რიცხვების ჯამი:", negativeSum)*/

//9
/*let arr = [1,-2,3,-4,5]
let reversed = []

for(let i = 0; i < arr.length; i++){
    reversed.push(-arr[i])
}

console.log(reversed)*/

//10
/*let arr = [1,[2,[3]],[4]]
let result = []

for(let i = 0; i < arr.length; i++){

    if(typeof arr[i] === "object"){

        for(let j = 0; j < arr[i].length; j++){

            if(typeof arr[i][j] === "object"){

                result.push(arr[i][j][0])

            }else{
                result.push(arr[i][j])
            }

        }

    }else{
        result.push(arr[i])
    }
}

console.log(result)*/

//11
/*let fruits = ["apple", "banana", "orange", "kiwi"]

fruits.splice(1, 1)
fruits.splice(1, 0, "mango")

console.log(fruits)*/