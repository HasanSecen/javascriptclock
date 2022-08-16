let days = ["Pazar","Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi"];
let Name = prompt("Adınız Nedir?");
let myName = document.querySelector("#myName");

function dateFunction(){
    let date = new Date().toLocaleString('tr-TR');
    let dateTime= new Date();
    let day = days[dateTime.getDay()];

    document.querySelector("#myClock").innerHTML= ` ${date} ${day}`
}
    
    setInterval(dateFunction, 1000);


if(Name){
        myName.innerHTML = `${Name} `
}else{
        alert("Bir isim giriniz.")
        location.reload();
}