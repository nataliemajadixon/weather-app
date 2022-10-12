var button1 = document.querySelector('.button1');

var information1 = document.querySelector("#information1") ;

var inputValue = document.querySelector('.input-value');

// var nameC = document.querySelector('.name');
// var desc = document.querySelector('.desc');
// var temp = document.querySelector('.temp');

    function getWeather(){
        const apiURL = 'https://api.openweathermap.org/data/2.5/weather?q=' +inputValue.value+ '&units=imperial&appid=f94db0bc7c75590e5b53bfe2a0feeab9'

        fetch(apiURL)
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            let cityName = document.createElement('p');
            cityName.innerHTML = data.name
            information1.innerHTML = `The tempurature is   ${data.main.temp}` 
            information1.append(cityName)
console.log(information1);


            // var nameValue = data['name'];
            // var temp = data['main']['temp'];
            // var descValue = data['weather']['0']['description'];
            
            // nameC.innerHTML = nameValue;
            // temp.innerHTML = tempValue;
            // desc.innerHTML = descValue;
    
        })
    
        
    
        .catch(err => alert("Wrong city name!"))
    }

button1.addEventListener( 'click', getWeather)


   





