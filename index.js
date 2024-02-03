const search = document.querySelector('.search__tab');
const temp = document.querySelector('.temp');
const cityName = document.querySelector('.city');
const humidity = document.querySelector('.humidity');
const wind = document.querySelector('.wind');
const weatherImage = document.getElementById('icon')
// const image = document.querySelector('.weather-icon');

const buttonSearch = document.querySelector('.btn__search');

const apiKey = `38b3e0113ec187e5ee343c8fff0d080f`;

async function weather(city){
    try{
        const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);

    if(res.status === 404){
        document.querySelector('.error').style.display = "block"
        // document.querySelector('.weather').classList.add('.add')
        document.querySelector('.weather').style.display="none"

    }

    else{
        const data = await res.json();

        const image = data.weather[0].main

    // const attribute = weatherImage.getAttribute('src')

    // console.log(attribute)
    weatherImage.src = `./weather-app-img/images/${image}.png`

    weatherImage.alt = `${image}-image`

    // const html = `
    // <img
    //       src="./weather-app-img/images/${image}.png"
    //       alt="rain__image"
    //       class="weather-icon"
    //     />
    // `
    // document.querySelector('.weather').insertAdjacentHTML('afterbegin',html);
    // console.log(data)
    // console.log(data.name)

    temp.innerHTML = Math.round(data.main.temp)+'°c';
    cityName.innerHTML = data.name;
    humidity.innerHTML = `${data.main.humidity}%`;
    wind.innerHTML=`${data.wind.speed} km/hr`;
    document.querySelector('.error').style.display = "none"
    document.querySelector('.weather').style.display="block"

}

    }
    catch(error){
        console.log("There was an error")
    }
    
}

    

buttonSearch.addEventListener('click',function(e){
        weather(search.value);
        search.value='';
})

