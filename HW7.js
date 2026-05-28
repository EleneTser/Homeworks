//1) შექმენი Triangle (სამკუთხედი) კლასი, რომელიც იღებს სამ გვერდს (a, b, c) და დაამატე მეთოდები: getPerimeter(), getArea() , isRightTriangle().
class Triangle {
    constructor(a, b, c){
        this.a = a
        this.b = b
        this.c = c
    }

    getPerimeter(){
        console.log(this.a + this.b + this.c)
    }

    getArea(){
        let s = (this.a + this.b + this.c) / 2
        let area = Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c))
        console.log(area)
    }

    isRightTriangle(){
        let sides = [this.a, this.b, this.c].sort((a,b) => a - b)

        if(sides[0] ** 2 + sides[1] ** 2 === sides[2] ** 2){
            console.log("მართკუთხა სამკუთხედია")
        }else{
            console.log("არ არის მართკუთხა")
        }
    }
}

let triangle = new Triangle(3,4,5)

triangle.getPerimeter()
triangle.getArea()
triangle.isRightTriangle()

//2) შექმენი Smartphone (სმარტფონი) კლასი property-ებით: brand, model, releaseYear. გააკეთე ექსტენშენი GamingPhone, რომელსაც დაემატება gpuScore და batteryCapacity, და დაამატე მეთოდი performanceIndex().
// class Smartphone{
//     constructor(brand,model,releaseYear){
//         this.brand = brand
//         this.model = model
//         this.releaseYear = releaseYear
//     }
// }

// class GamingPhone extends Smartphone{
//     constructor(brand,model,releaseYear,gpuScore,batteryCapacity){
//         super(brand,model,releaseYear)

//         this.gpuScore = gpuScore
//         this.batteryCapacity = batteryCapacity
//     }

//     performanceIndex(){
//         console.log(this.gpuScore + this.batteryCapacity)
//     }
// }

// let phone = new GamingPhone("Asus","ROG 9",2025,9000,6000)

// phone.performanceIndex()

//3)შექმენი CryptoWallet (კრიპტო საფულე) კლასი, მეთოდებით: deposit(), withdraw(), transfer(), getHistory(),
// class CryptoWallet{
//     constructor(balance){
//         this.balance = balance
//         this.history = []
//     }

//     deposit(amount){
//         this.balance += amount

//         this.history.push({
//             type:"deposit",
//             amount,
//             date:Date()
//         })
//     }

//     withdraw(amount){
//         if(amount > this.balance){
//             console.log("არასაკმარისი თანხა")
//             return
//         }

//         this.balance -= amount

//         this.history.push({
//             type:"withdraw",
//             amount,
//             date:Date()
//         })
//     }

//     transfer(amount,toWallet){
//         if(amount > this.balance){
//             console.log("არასაკმარისი თანხა")
//             return
//         }

//         this.balance -= amount
//         toWallet.balance += amount

//         this.history.push({
//             type:"transfer out",
//             amount,
//             date:Date()
//         })

//         toWallet.history.push({
//             type:"transfer in",
//             amount,
//             date:Date()
//         })
//     }

//     getHistory(){
//         console.log(this.history)
//     }
// }

// let wallet1 = new CryptoWallet(1000)
// let wallet2 = new CryptoWallet(500)

// wallet1.deposit(300)
// wallet1.transfer(200,wallet2)

// wallet1.getHistory()

//4)შექმენი Wishlist (სურვილების სია) კლასი, რომელიც ინახავს ნივთებს. მეთოდები: addItem(), deleteItem(id), updateItem()
// class Wishlist{
//     constructor(){
//         this.items = []
//     }

//     addItem(item){
//         let lastId = this.items[this.items.length - 1]?.id || 0

//         let newObj = {
//             id:lastId + 1,
//             item
//         }

//         this.items.push(newObj)
//     }

//     deleteItem(id){
//         this.items = this.items.filter(el => el.id !== id)
//     }

//     updateItem(id,newName){
//         let findItem = this.items.find(el => el.id === id)

//         if(findItem){
//             findItem.item = newName
//         }
//     }
// }

// let wishlist = new Wishlist()

// wishlist.addItem("Laptop")
// wishlist.addItem("Phone")
// wishlist.updateItem(2,"iPhone")
// wishlist.deleteItem(1)

// console.log(wishlist)


//5)შექმენი Freelancer (ფრილანსერი) კლასი მეთოდით calculateEarnings(), რომელიც დათვლის შემოსავალს შესრულებული საათებისა და საათობრივი ტარიფის მიხედვით, დამატებით optional bonus-ს გადამეტებულ საათებზე (მაგ >160 სთ).
// class Freelancer{
//     constructor(name,hoursWorked,hourRate){
//         this.name = name
//         this.hoursWorked = hoursWorked
//         this.hourRate = hourRate
//     }

//     calculateEarnings(){
//         let salary = this.hoursWorked * this.hourRate

//         if(this.hoursWorked > 160){
//             salary += 500
//         }

//         console.log(salary)
//     }
// }

// let freelancer = new Freelancer("Gigi",170,20)

// freelancer.calculateEarnings()