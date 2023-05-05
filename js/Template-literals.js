let username="Esmanur"
const DOMAIN="kodluyoruz.org"

let email=username+"@"+DOMAIN
console.log("Merhaba",username,"Sitemize Hoşgeldin","email adresin:",email)

let info='Merhaba username'
console.log(info)
//çıktı: Merhaba username

let info2='Merhaba ${username} sitemize hoşgeldiniz.. mail adresiniz: ${email} borcunuz: ${(2+3)*4} günün saat bilgisi:${new Date().getHours()}'
