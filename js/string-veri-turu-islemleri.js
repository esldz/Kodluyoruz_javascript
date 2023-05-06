let Email="esmanuryl1225@gmail.com"
let Name="esmanur"
let lastname="Yıldız"

//String karakter sayısı(length):
console.log(email.length) 
//çıktı: 22

//İlk karakteri bulma ([0]):
console.log(lastname[0])
//çıktı: Y
console.log(Name.charAt(1))
//çıktı: s

//Büyük Harf / Küçük Harf:
Name=Name.toUpperCase()
console.log(Name)
//ESMANUR

Name=Name.toLowerCase()
console.log(Name)
//esmanur

//String içinde ardığımız bilgiyi ve yerini bulmak (search):
console.log(email.search("@"))
//çıktı: 7
console.log(email.search("z"))
//çıktı: 17
console.log(Email.search("78"))
//çıktı: -1

//Belli bir yere kadar al (slice):
let domain=email.slice(email.search("@")+1)
console.log(domain)
//çıktı: kodluyoruz.org
console.log(domain.slice(0,domain.indexOf('_')))

//Bilgi değiştir (replace):
let kodluyoruzemail=email.replace('gmail.com','kodluyoruz.org')
console.log(kodluyoruzemail)
//çıktı: esmanur@kodluyoruz.org

//İstediğim Bilgi var mı? (includes):
console.log(email.includes("7"))
//çıktı: false
console.log(email.includes("@"))
//çıktı: true

//İstediğim Bilgiyle başladı mı? (startsWidth) / Bitti mi? (endsWidth):
console.log(kodluyoruzemail.endsWith('kodluyoruz.org'))
//çıktı: true

//İlk harfleri büyük yapma:
let fullname='${Name[0].toUpperCase()}${Name.slice(1)} ${lastname[0].toUpperCase()}${lastname.slice(1)}'
console.log(fullname)
