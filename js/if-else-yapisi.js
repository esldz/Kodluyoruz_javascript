let isim=prompt("isminizi giriniz:")

//eğer isim 0 uzunluğu 0'dan fazlaysa isim yazdırılır değilse bilgi girilmedi yazar
if(isim.length>0)
{
    console.log("İsminiz: ",isim)
}
else
{
    console.log("Bilgi girilmedi")
}