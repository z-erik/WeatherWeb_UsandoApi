console.log("Hola api clima");

//obtiene todos los atributos de la api
async function fetchWeatherData( latitude, longitude) {
    const url = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`;
    //se crea un response que espera obtener todo el objeto json
    const response = await fetch(url);
    console.log(response);
    //transformamos el objeto json a un objeto data que nos permite acceder a todas las propiedades
    const data = await response.json();
    //obteniendo las propiedades del objeto data
    console.log(data);
    console.log(data.elevation);
    console.log(data.current_weather);
    console.log(data.current_weather.temperature);
    return data.current_weather;
}
// fetchWeatherData( 25.666815, -100.28233);
async function handleFetchClick(){
    console.log("Boton fetch clickeado");
    //capturamos los valores que esten en las cajas
    const latitude = document.getElementById("latitude-input").value;
    const longitude = document.getElementById("longitude-input").value;

    //enlazamos estas variables a las cajas que mostraran la temp y longitud
    const currentTemperature = document.getElementById("temp-display");
    const currentWind=         document.getElementById("wind-display");

    //guardamos la funcion en una constante porque al hacer uso de la funcion 
    //necesitamos una constante que nos guarde todos los datos de la api
    const currentWeather = await fetchWeatherData(latitude, longitude);

    //con .textContent indicamos que lo que recibamos se pondra en esas cajas
                                    //accedemos a las propiedades
    currentTemperature.textContent = currentWeather.temperature;
    currentWind.textContent= currentWeather.windspeed;

console.log(currentWind)
}