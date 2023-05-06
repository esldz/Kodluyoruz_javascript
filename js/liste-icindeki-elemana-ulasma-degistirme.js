let item=document.querySelector("ul#list2>li:last-child")
console.log(item)
//çıktı:üzerine tıkladığımızda son li'yi gösterir.


let item2=document.querySelector("ul#list2>li:first-child")
console.log(item2)
//çıktı:üzerine tıkladığımızda ilk li'yi gösterir.

item.innerHTML="son öğe değişti"
//çıktı: list2 deki son li değişir.

let ulDom=document.querySelector("ul#list2")
let liDom=document.querySelector('li')

liDom.innerHTML="kendi oluşturduğumuz öğe"
ulDom.append(liDom)
//çıktı:list2'ye "kendi oluşturduğumuz öğe" li eklenir