//number veri türü tanımlamak:
let price=100
let tax=0.18
let priceTax=price*tax
let Total=price+priceTax
console.log(
    "Fiyat:",price,
    "KDV:",tax,
    "KDV Tutarı:",priceTax,
    "Fiyat:",Total
    )

//Arttırma ve azaltma işlemleri
let counter=320
counter=counter+1 //uzun yöntem
counter+=1; //kısa yöntem
counter++; //kısa yöntem 2
console.log(counter)

counter--;
counter-=1;
console.log(counter)

counter*=10;
console.log(counter)

counter/=2;
console.log(counter)

//İşlem Önceliği
console.log(2+3*10)
console.log((2+3)*10)


//mod(kalan) alma
    //sayı tek mi? çift mi?
console.log(14%2) //kalan 0 sayı çift
console.log(15%2) //kalan 1 sayı tek

//üs alma
console.log(2*2*2*2)//16
console.log(2**4)//16

//Aşağı yuvarlama işlemi (Math.floor)
console.log("1.9'u Aşağıya yuvarlama:",Math.floor(1.9))
console.log("1.4'ü Aşağıya yuvarlama:",Math.floor(1.4))

//Yukarı yuvarlama işlemi (Math.ceil)
console.log("1.1'i yukarıya yuvarlama:",Math.ceil(1.1))
console.log("1.9'u yukarıya yuvarlama:",Math.ceil(1.9))

//yakına yuvarlama
console.log("1.2'yi Yakına yuvarlama:",Math.round(1.2))
console.log("1.7'yi Yakına yuvarlama:",Math.round(1.7))

//String number
let StringNumber="11";
console.log("String sayı:",StringNumber)
let NewNumber=Number(StringNumber)
console.log("String sayı integera çevrildi:",NewNumber)