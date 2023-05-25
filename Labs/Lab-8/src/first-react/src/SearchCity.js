import { useState } from 'react';

export default function SearchCity() {
    const [city, setCity] = useState('');
    const [forecastDay1, setForecastDay1] = useState('');
    const [forecastMinCDay1, setForecastMinCDay1] = useState('');
    const [forecastMinFDay1, setForecastMinFDay1] = useState('');    
    const [forecastMaxCDay1, setForecastMaxCDay1] = useState('');
    const [forecastMaxFDay1, setForecastMaxFDay1] = useState('');   
    const [forecastDay2, setForecastDay2] = useState('');
    const [forecastMinCDay2, setForecastMinCDay2] = useState('');
    const [forecastMinFDay2, setForecastMinFDay2] = useState('');    
    const [forecastMaxCDay2, setForecastMaxCDay2] = useState('');
    const [forecastMaxFDay2, setForecastMaxFDay2] = useState('');   
    const [forecastDay3, setForecastDay3] = useState('');
    const [forecastMinCDay3, setForecastMinCDay3] = useState('');
    const [forecastMinFDay3, setForecastMinFDay3] = useState('');    
    const [forecastMaxCDay3, setForecastMaxCDay3] = useState('');
    const [forecastMaxFDay3, setForecastMaxFDay3] = useState('');   

    const handleKeyDown = async(event) => {
        if(event.key === 'Enter' && city.trim().length > 2){
            const url = "https://api.weatherapi.com/v1/forecast.json?key=968da4f003d649b8bdb175846232105&q="+ city + "&days=3&aqi=no&alerts=no";
            try {
                const resp = await fetch(url, {method: 'GET', headers: {Accept: 'Application/json'}});
                if(resp.ok) {
                    const data = await resp.json();
                    setForecastDay1(data.forecast.forecastday[0].date);
                    setForecastMinCDay1(data.forecast.forecastday[0].day.mintemp_c);
                    setForecastMinFDay1(data.forecast.forecastday[0].day.mintemp_f);
                    setForecastMaxCDay1(data.forecast.forecastday[0].day.maxtemp_c);
                    setForecastMaxFDay1(data.forecast.forecastday[0].day.maxtemp_f);

                    setForecastDay2(data.forecast.forecastday[1].date);
                    setForecastMinCDay2(data.forecast.forecastday[1].day.mintemp_c);
                    setForecastMinFDay2(data.forecast.forecastday[1].day.mintemp_f);
                    setForecastMaxCDay2(data.forecast.forecastday[1].day.maxtemp_c);
                    setForecastMaxFDay2(data.forecast.forecastday[1].day.maxtemp_f);

                    setForecastDay3(data.forecast.forecastday[2].date);
                    setForecastMinCDay3(data.forecast.forecastday[2].day.mintemp_c);
                    setForecastMinFDay3(data.forecast.forecastday[2].day.mintemp_f);
                    setForecastMaxCDay3(data.forecast.forecastday[2].day.maxtemp_c);
                    setForecastMaxFDay3(data.forecast.forecastday[2].day.maxtemp_f);
                }
            } catch {
                throw new Error("Error failed to send an HTTP GET");
            }
        }
    }

    function handleChange(event) {
        setCity(event.target.value);
    }

    return (
        <div>
            <input type="text" onKeyDown={handleKeyDown} onChange={handleChange} className="SearchCity" placeholder="Write city name" />
            <h2>You've picked: {city}</h2>
            <br></br>
            <h3>Day 1: {forecastDay1}</h3>
            <h3>Min {forecastMinCDay1}C Max {forecastMaxCDay1}C</h3>
            <h3>Min {forecastMinFDay1} F Max {forecastMaxFDay1} F</h3>
            <br></br>
            <h3>Day 2: {forecastDay2}</h3>
            <h3>Min {forecastMinCDay2}C Max {forecastMaxCDay2}C</h3>
            <h3>Min {forecastMinFDay2} F Max {forecastMaxFDay2} F</h3>
            <br></br>
            <h3>Day 3: {forecastDay3}</h3>
            <h3>Min {forecastMinCDay3}C Max {forecastMaxCDay3}C</h3>
            <h3>Min {forecastMinFDay3} F Max {forecastMaxFDay3} F</h3>
        </div>
    )
}
