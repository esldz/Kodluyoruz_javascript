function helloworld() 
{
    console.log("Hello World")
}

helloworld() //fonksiyonu çağırdık çıktı: Hello World

function hello()
{
    console.log("Hi")
}

hello() // fonksiyonu çağırdık çıktı: Hi

function helloHelloWorld()
{
    //fonksiyon içinde fonksiyon çalıştırma.
    hello()
    helloworld()
}

helloHelloWorld() //çıktı: Hi Hello World