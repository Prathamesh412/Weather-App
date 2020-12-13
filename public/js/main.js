const city = document.getElementById('city')
const submit = document.getElementById('submitBtn')

const displayCity = document.getElementById('city_name');
const temp = document.getElementById('temp_real')
const temp_status = document.getElementById('temp_status')
const datahide = document.querySelector('.middle_layer');

const feelsLike = document.getElementById('feels_like');
const maxTemp = document.getElementById('max_temp');
const minTemp = document.getElementById('min_temp');

// const getCityApi = async() =>{
// let url1 = `https://api.astroip.co/?api_key=1725e47c-1486-4369-aaff-463cc9764026`
// const responses = await fetch(url1)
// const cityWeather = await responses.json();
// const responseCity = cityWeather.geo.capital;
// console.log(responseCity)
// }

// getCityApi();


const getInfo = async(event) =>{
    event.preventDefault();
    let cityName= city.value;
    let Capital = this.responseCity
    console.log(Capital)

    if(cityName === ""){
        displayCity.innerHTML = "Please Enter the City Name"
        datahide.classList.add("data_hide");
    }else{
        try{
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=63143994ee22b2feda7d10a606b21c35`
            const response = await fetch(url)
            const weatherData = await response.json();

            const data = [weatherData];
            
            displayCity.innerText = `${data[0].name},${data[0].sys.country}`
            temp.innerText = Math.round((data[0].main.temp)*10)/10;
            feelsLike.innerText = Math.round((data[0].main.feels_like)*10)/10;
            maxTemp.innerText = Math.round((data[0].main.temp_max)*10)/10;
            minTemp.innerText = Math.round((data[0].main.temp_min)*10)/10;

            //temp_status.innerText = data[0].weather[0].main

            const tempMood = data[0].weather[0].main;
            //console.log(tempMood);

            //condition to check sunny or cloudy
            if (tempMood == "Clear") {
            temp_status.innerHTML =
                "<i class='fas  fa-sun' style='color: #eccc68;'></i>";
            } else if (tempMood == "Clouds") {
            temp_status.innerHTML =
                "<i class='fas  fa-cloud' style='color: #f1f2f6;'></i>";
            } else if (tempMood == "Rain") {
            temp_status.innerHTML =
                "<i class='fas  fa-cloud-rain' style='color: #a4b0be;'></i>";
            }else if (tempMood == "Haze") {
            temp_status.innerHTML =
                "<i class='fas  fa-smog' style='color: #a4b0be;'></i>";
            } 
            else {
            temp_status.innerHTML =
                "<i class='fas  fa-sun' style='color:#f1f2f6;'></i>";
            }
            datahide.classList.remove('data_hide');
            cityName="";

            // console.log(weatherData)
        }catch{
            cityName= "";
            datahide.classList.add("data_hide");
            displayCity.innerHTML = "Please Enter the correct City Name "
        }
    }
}

submit.addEventListener("click", getInfo);


function getCurrentDay() {
  var d = new Date();
  var weekday = new Array(7);
  weekday[0] = "Sunday";
  weekday[1] = "Monday";
  weekday[2] = "Tuesday";
  weekday[3] = "Wednesday";
  weekday[4] = "Thursday";
  weekday[5] = "Friday";
  weekday[6] = "Saturday";

  var months = ["January","February","March","April","May","June","July","August","September","October","November","December"];

  var n = weekday[d.getDay()];
  document.getElementById("day").innerHTML = n;


  document.getElementById("today_date").innerHTML = `${d.getDate()}th ${months[d.getMonth()]}`
}

getCurrentDay();

navigator.geolocation.getCurrentPosition((position) => {
    
    console.log(position.coords.latitude, position.coords.longitude);

    var latitude = position.coords.latitude
    var longitude = position.coords.longitude
    const getInfo1 = async() =>{
        let url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=63143994ee22b2feda7d10a606b21c35`
        const response = await fetch(url)
        const weatherData = await response.json();
        const data = [weatherData];
        console.log(data);

        displayCity.innerText = `${data[0].name},${data[0].sys.country}`
        temp.innerText = Math.round((data[0].main.temp)*10)/10;
        feelsLike.innerText = Math.round((data[0].main.feels_like)*10)/10;
        maxTemp.innerText = Math.round((data[0].main.temp_max)*10)/10;
        minTemp.innerText = Math.round((data[0].main.temp_min)*10)/10;

        const tempMood = data[0].weather[0].main;

        //condition to check sunny or cloudy
        if (tempMood == "Clear") {
        temp_status.innerHTML =
            "<i class='fas  fa-sun' style='color: #eccc68;'></i>";
        } else if (tempMood == "Clouds") {
        temp_status.innerHTML =
            "<i class='fas  fa-cloud' style='color: #f1f2f6;'></i>";
        } else if (tempMood == "Rain") {
        temp_status.innerHTML =
            "<i class='fas  fa-cloud-rain' style='color: #a4b0be;'></i>";
        }else if (tempMood == "Haze") {
        temp_status.innerHTML =
            "<i class='fas  fa-smog' style='color: #a4b0be;'></i>";
        } 
        else {
        temp_status.innerHTML =
            "<i class='fas  fa-sun' style='color:#f1f2f6;'></i>";
        }
    }
    getInfo1();
});





