
const locationofuser = () => {

    const currentuser = document.querySelector('.currentuser');
    
    
    const success = (position) => {
        console.log(position)
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        console.log(latitude + '  ' + longitude);
        const apiURL = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=imperial&appid=f94db0bc7c75590e5b53bfe2a0feeab9`
        fetch(apiURL)
        .then((response) => response.json())
        .then((data) => {
            console.log(data)
            let feelsLike = document.createElement('p');
            feelsLike.innerHTML = `It feels like ${data.main.feels_like}°`;

            let humidity = document.createElement('p');
            humidity.innerHTML = `Humidity: ${data.main.humidity}%`;
            
            let temp_max = document.createElement('p');
            temp_max.innerHTML = `High of today is ${data.main.temp_max}°`;

            let temp_min = document.createElement('p');
            temp_min.innerHTML = `Low of today is ${data.main.temp_min}°`;

            let wind = document.createElement('p');
            wind.innerHTML = `The wind has a speed of ${data.wind.speed} mph`;

            let clouds = document.createElement('p');
            clouds.innerHTML = `Clouds: ${data.clouds.all}%`

            let weatherIcon = document.createElement('img')

            let iconURL = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
            
            weatherIcon.setAttribute("src", iconURL)
           

           
            information1.innerHTML = `The tempurature in ${data.name} is  ${data.main.temp}°` 
            information1.appendChild(feelsLike)
            information1.appendChild(temp_max)
            information1.appendChild(temp_min)
            information1.appendChild(clouds)
            information1.appendChild(humidity)
            information1.appendChild(wind)
            information1.appendChild(weatherIcon)
           



        })
    }
        const error = () => {
            currentuser.textContent = 'Not able to find location. Type in your city';
        }
    
    
        navigator.geolocation.getCurrentPosition(success, error);
    }
    document.querySelector('.currentuser').addEventListener('click', locationofuser);



var button1 = document.querySelector('.button1');

var information1 = document.querySelector("#information1") ;

var inputValue = document.querySelector('.input-value');

console.log(information1)

    function getWeather(){
        const apiURL = 'https://api.openweathermap.org/data/2.5/weather?q=' +inputValue.value+ '&units=imperial&appid=f94db0bc7c75590e5b53bfe2a0feeab9'

        fetch(apiURL)
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            let feelsLike = document.createElement('p');
            feelsLike.innerHTML = `It feels like ${data.main.feels_like}°`;

            let humidity = document.createElement('p');
            humidity.innerHTML = `Humidity: ${data.main.humidity}%`;
            
            let temp_max = document.createElement('p');
            temp_max.innerHTML = `High of today is ${data.main.temp_max}°`;

            let temp_min = document.createElement('p');
            temp_min.innerHTML = `Low of today is ${data.main.temp_min}°`;

            let wind = document.createElement('p');
            wind.innerHTML = `The wind has a speed of ${data.wind.speed} mph`;

            let clouds = document.createElement('p');
            clouds.innerHTML = `Clouds: ${data.clouds.all}%`

            let weatherIcon = document.createElement('img')

            let iconURL = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
            
            weatherIcon.setAttribute("src", iconURL)
          
           
            information1.innerHTML = `The tempurature in ${data.name} is  ${data.main.temp}°` 
            information1.appendChild(feelsLike)
            information1.appendChild(temp_max)
            information1.appendChild(temp_min)
            information1.appendChild(clouds)
            information1.appendChild(humidity)
            information1.appendChild(wind)
            information1.appendChild(weatherIcon)
          

          
         
console.log(information1);


          
    
        })
    
        
    
        .catch(err => alert("Wrong city name!"))
    }

button1.addEventListener( 'click', getWeather)


   





