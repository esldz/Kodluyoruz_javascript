let FullName=prompt("Lütfen adınızı giriniz:")
//çıktı: kullanıcıya sayfada ismi sorar(esmanur)
console.log(FullName)
//çıktı:esmanur

let greeting=document.querySelector("#greeting")
greeting.innerHTML='${greeting.innerHTML} <small style="color:red">${FullName}</small>'