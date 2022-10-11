var button1 = document.querySelector('.button1')

var inputValue = document.querySelector('.input-value')

var nameC = document.querySelector('.name');
var desc = document.querySelector('.desc');
var temp = document.querySelector('.temp');

button1.addEventListener( 'click', function(){

    fetch('https://api.openweathermap.org/data/2.5/weather?q=' +inputValue.value+ '&appid=f94db0bc7c75590e5b53bfe2a0feeab9')
    .then(response => response.json())
    .then(data => {
        console.log(data);
        var nameValue = data['name'];
        var temp = data['main']['temp'];
        var descValue = data['weather']['0']['description'];
        
        nameC.innerHTML = nameValue;
        temp.innerHTML = tempValue;
        desc.innerHTML = descValue;

    })

    

    .catch(err => alert("Wrong city name!"))

})



