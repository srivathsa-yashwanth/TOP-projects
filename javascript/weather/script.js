(async function main(){

    async function getWeather(location){
        let weather = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=5bb6c63d341c9ef67b683e13d5228a24`, {mode: 'cors'})
        // console.log(typeof(weather),weather);
        let obj = await weather.json();
        // console.log(typeof(weather),weather);
        let descr = obj.weather[0].description;
        let temp = obj.main.temp;
        let feels = obj.main.feels_like;
        let pressure = obj.main.pressure;
        let visibility = obj.visibility;
        let speed = obj.wind.speed;
        
        // console.log( {descr, temp, feels, pressure, visibility, speed})
        return {descr, temp, feels, pressure, visibility, speed}
    
    };

    async function showWeather(event){

        let target = event.target.value;
        let weather = await getWeather(target);

        let location = document.querySelector('#location')
        let temp = document.querySelector('#temp')
        let feels = document.querySelector('#feels')
        let descr = document.querySelector('#descr')
        let pressure = document.querySelector('#pressure')
        let speed = document.querySelector('#speed')
        let visibility = document.querySelector('#visibility')

        location.textContent = target[0].toUpperCase()+target.slice(1);
        temp.textContent = `${KtoC(weather.temp)}\u2103 `;
        feels.textContent = `feels like ${KtoC(weather.feels)}\u2103`;
        descr.textContent = weather.descr;
        pressure.textContent = weather.pressure;
        speed.textContent = weather.speed;
        visibility.textContent = weather.visibility;

    }
    
    let search = document.querySelector('#search')
    search.addEventListener('search',showWeather)

    function KtoC(temp){
        return Math.round(temp-273, 4);
    }
    

})();