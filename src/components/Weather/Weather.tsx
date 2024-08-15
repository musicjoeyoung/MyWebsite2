import "./Weather.scss"

import { ChangeEvent, useState } from "react"

import { WeatherState } from "../../types/weather"
import axios from "axios"

const API_KEY = import.meta.env.VITE_APP_OPEN_WEATHER_API_KEY;

const Weather = () => {
    const [weather, setWeather] = useState<WeatherState | null>(null)
    const [zipCode, setZipCode] = useState("")
    const [countryCode, setCountryCode] = useState("")

    const URL = `https://api.openweathermap.org/data/2.5/weather?zip=${zipCode},${countryCode}&units=imperial&appid=${API_KEY}`;

    const handleSubmit = async (event: ChangeEvent<HTMLFormElement>) => {
        event.preventDefault();
        try {
            const response = await axios.get(URL);
            setWeather(response.data);
        } catch (error) {
            console.error(error)
        }
    }

    const d = new Date();
    const weekday: string[] = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
    ];
    const months: string[] = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ];
    const day = weekday[d.getDay()];
    const month = months[d.getMonth()];
    const date = d.getDate();
    const year = d.getFullYear();
    const fullDate: string = day + ", " + month + " " + date + ", " + year;
    return (
        <div className="weather-background">
            <div className="weather">
                <div className="weather__zipCode">
                    <p style={{ marginTop: "-75px" }}>
                        Enter a zip code to find the weather!
                    </p>
                </div>
                <div className="weather__container">
                    <p>{`${fullDate}`}</p>
                    <form
                        onSubmit={handleSubmit}
                        className="weather__form"
                    >
                        <input
                            type="text"
                            placeholder="Enter a zip code"
                            value={zipCode}
                            onChange={(e) => setZipCode(e.target.value)}
                            className="weather__input"
                        />
                        <button className="weather__button" type="submit">
                            Get Weather
                        </button>
                    </form>
                    {weather ? (
                        <div /* className="weather} */>
                            <div
                                style={{
                                    display: "flex",
                                    justifyContent: "center",
                                }}
                            >
                                <h2>Weather in {weather.name}</h2>
                                <img
                                    src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
                                    alt="Weather Icon"
                                    width={70}
                                    height={70}
                                    style={{ content: "" }}
                                    loading="eager"
                                />
                            </div>
                            <p>Temperature: {weather.main.temp.toFixed(0)}</p>
                            <p>Feels like: {weather.main.feels_like.toFixed(0)}</p>
                            <p>Description: {weather.weather[0].description}</p>
                            <p>High of: {weather.main.temp_max.toFixed(0)}</p>
                            <p>Low of: {weather.main.temp_min.toFixed(0)}</p>
                            <p>Humidity: {weather.main.humidity.toFixed(0)}</p>
                        </div>
                    ) : (
                        <h2>No weather data to show at this time.</h2>
                    )}
                </div>
            </div>
        </div>
    )
}
export default Weather