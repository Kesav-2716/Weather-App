                     //API Url

// https://api.openweathermap.org/data/2.5/weather?q={city-name}&appid={API key}&units=imperial

                     //API Key

    let API_KEY = "be17d3fd81f210e6f5cf06fbcc13e8bb";

                     //URL Fetch Function

getWeatherData=(city) =>{
                        //API UR

    const URL='https://api.openweathermap.org/data/2.5/weather';

                    
    const Full_url = ` ${URL}?q=${city}&appid=${API_KEY}&units=imperial `

                       //Fetch URL 

    const weather=fetch(Full_url);
   return weather.then((response) =>{

                       //Json Format Return

        return response.json();
   })
}

                      //Input Get Function

function searchCity(){
    const city=document.getElementById("city-input").value;

    getWeatherData(city)
    .then ((response) =>{
     showWeatherData(response);
    })
     
    .catch ((err)=>{
        console.log(err)
    })
}

                      //Temp Show Function

function showWeatherData (WeatherData){
  
    document.getElementById("city-name").innerText=WeatherData.name;
    document.getElementById("weather-type").innerText=WeatherData.weather[0].main;
    document.getElementById("temp").innerText=WeatherData.main.temp;
    document.getElementById("min-temp").innerText=WeatherData.main.temp_min;
    document.getElementById("max-temp").innerText=WeatherData.main.temp_max;
} 