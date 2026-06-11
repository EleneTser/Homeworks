//1
let Fullname = "Lika Mamaladze"
let splittedname = Fullname.split(" ")
let [name, lastname] = splittedname;
console.log(name[0] + "." + lastname[0] + ".")


//2
let email = " EXAMPLE@MAIL.COM "
let trimmedemail = email.trim().toLowerCase()
console.log(trimmedemail)
console.log(trimmedemail.includes("@"))


//3
let str = "luka"
console.log(str[str.length-1].toUpperCase())

//4
for(let i = 1;i < 100;i++){
    if(i % 3 ===0 && i % 5 === 0){
        console.log("FooBar")
    }if(i % 3 === 0){
        console.log("Foo")
    }else if(i % 5 === 0){
        console.log("Bar")
    }else{
        console.log(i)
    }
}

//5 
let text = "JS is stupid but sometimes cool"
let replacedtxt = text.replace("stupid", "s****d")
console.log(replacedtxt)


//თეორია
//1)რამდენი ცვლადი გვაქვს ჯავასკრიპტში?           3 ცვლადი - let,const და var
//2)რამდენი ტიპი გვაქვს ჯავასკრიპტში?              9 ტიპი - string, number, boolean, null, undefined, func, bigint, symbol, obj/array
//3) რომელი მეთოდი აქცევს სტრინგს მასივად?       split აქცევს ცვლადს მასივად'
//4) სტრინგი პრიმიტიული ტიპია თუ არა?           კი პრიმიტიული ტიპია
//5) ჩამოთვალე რა მეთოდები ვისწავლეთ             
        /* length
        charAt()
        slice()
        toUpperCase()
        toLowerCase()
        concat()
        trim()
        split()
        replace()
        replaceAll()
        indexOf()
        includes()*/