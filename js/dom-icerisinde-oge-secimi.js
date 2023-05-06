let title=document.getElementsByTagName('h2')
console.log(title)

let title2=document.getElementById('title')
console.log(title2)
//çıktı: <div id="title">Merhaba Dunya</div>

console.log(title2.innerHTML="Deneme")
//çıktı: Deneme ve ekranda titleda Merhaba Dunya yerine Deneme yazar.

let link=document.querySelector("ul#list>li>a")
console.log(link)
//çıktı: <a href="#">link</a>

console.log(link.innerHTML)
//çıktı: Link

let link2=document.querySelector("#KodluyoruzLink")
link.innerHTML+=" güncellendi"
//çıktı: Link

link.style.color="red"
//çıktı:Link rengi kırmızı olur
link.classList.add('btn')
//çıktı: linke btn classı eklenir