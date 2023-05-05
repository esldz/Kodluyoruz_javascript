//veri türünü öğrenmek (typeoff):
let Price=111
let stringPrice="111"
let hasPassword=true

console.log(
    "Price:",
    typeof(Price)
)

console.log(
    "stringPrice:",
    typeof(stringPrice)
)

console.log(
    "hasPassword:",
    typeof(hasPassword)
)

//Metinsel bilgileri int ve floata dönüştürme:
let number1="11"
console.log("number1:",parseInt(number1),typeof(number1)) 
//çıktı: number1: 11 string

let number2="11"
number2=parseInt(number2)
console.log("number2:",number2,typeof(number2))
//çıktı: number2: 11 number

let number3="12px"
number3=parseInt(number3)
console.log("number3:",number3,typeof(number3))
//çıktı: number3: 12 number

let number4="11.1"
number4=Number(number4)
console.log("number4:",number4,typeof(number4))
//çıktı: number4: 11.1 number

let number5="11.4px"
number5=parseFloat(number5)
console.log("number5:",number5,typeof(number5))
//çıktı: number5: 11.4 number

//Numver veri türünü stringe çevirme:
let number6=55
number6=number6.toString()
console.log(number6,typeof(number6))