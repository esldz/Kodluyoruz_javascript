let firstName="Lorem"

function greetings() {
    console.log("Merhaba ${firstName}") 

}
greetings()
//Çıktı: Merhaba Lorem

function greetings2(firstName){
    console.log('merhaba ${firstName ? firstName : ""}')
}
greetings2()
//çıktı: merhaba

function greetings3(firstName=""){
    console.log('Merhaba ${firstName}')
}
greetings3("apple")
//Çıktı: Merhaba apple

console.log(firstName) //çıktı: Lorem - değişken
greetings()//fonksiyona parametre gönderilmedi
greetings("Parametre")//fonksiyona parametre gönderildi.

