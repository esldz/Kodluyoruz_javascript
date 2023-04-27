var servername="api.kodluyoruz.org"
console.log(servername)

let serverName;
console.log(serverName)

serverName="https://kodluyoruz.org"
console.log(serverName)

let password="1234";
console.log(password)

/* Hatalı kullanım;
console.log(fullName)
let fullName="Esmanur Yıldız";
*/

//Doğru kullanım;
let fullName="Esmanur Yıldız";
console.log(fullName)

//Değişken değeri değiştirme;
let isim="Esmanur";
isim="esma";
console.log(isim) //Çıktı "esma" olur.(kodlar yukarıdan aşağıya okunur.)

//Birleştirme veya Ekleme işlemi;
console.log(isim+" Test Bilgisi")
isim=isim+" 2.Test Bilgisi";
console.log(isim)
isim="3.Bilgi: "+isim;
console.log(isim);

/*const ile boş değişken tanımlama(!);
const ServerPassword; HATALI
*/

//const ile değişken tanımlama;
const ServerPassword="12345Qj";
console.log(ServerPassword)

/*const ile değişken bilgisi değiştirme;
ServerPassword="1234";
console.log(ServerPassword) HATA VERİR CONST İLE GİRİLEN BİLGİ DEĞİŞMEZ!!!
*/