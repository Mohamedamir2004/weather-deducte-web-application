let city=document.querySelector(".search input");
const btn=document.querySelector(".search button");

const apiKey="9e04c82f5b19870a74fb13210a896cf1";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

async function checkweather(city)
{
    const response=await fetch(apiUrl + city + `&appid=${apiKey}`);
    var data= await response.json();
    console.log(data);
    document.querySelector(".city").innerHTML=data.name;
    document.querySelector(".temp").innerHTML="Temperature: "+data.main.temp+" ℃";
    document.querySelector(".humidity").innerHTML="Humidity: "+data.main.humidity;
    document.querySelector(".wind").innerHTML="Wind Speed: "+data.wind.speed+" km/h";
    
}
btn.addEventListener("click",()=>{checkweather(city.value)});

