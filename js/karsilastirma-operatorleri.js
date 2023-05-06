let Price2=100
let Kullanici="esmanur"

//eşitse(==)
console.log("== :", Price2==1) //false
console.log("== :", Price2==100) //true

//türü ve değeri eşitse
console.log("=== :", Price2===1) //false
console.log("=== :", Price2===100) //true

//eşit değilse(!=)
console.log("!= :",Price2!=1) //true
console.log("!= :",Kullanici!="user") //true
console.log("!= :",Kullanici!="esmanur") //false

//küçükse(<)
console.log(Price2<100)//false
console.log(Price2<1000)//true

//küçük eşittir(<=)
console.log(Price2<=100) //true

//büyükse(>)
console.log(Price2>50) //true
consol.log(Price2>100) //false

//büyük eşittir(>=)
console.log(Price2>=100)

//ve (&&)
console.log(Price2>0 && Kullanici!="guest") //false

//veya(||)
console.log(Price2>0 || Kullanici!="guest") //true

//değil-tersi(!)
console.log(Price2>0 && !Kullanici=="guest") //
