import React from "react";
import { useState, useEffect } from "react";
import { MyLocation, ArrowBack, LocationOn, NavigationRounded, Close } from "@mui/icons-material";
import { useNavigate } from 'react-router-dom';
import WeatherIcon from "../components/WeatherIcon";
import WeatherWidget from "../components/WeatherWidget";
import { SearchBar } from "../components/SearchBar";
import moment from 'moment';

const apiKey = process.env.REACT_APP_API_WEATHER;
export default function WeatherApp() {


    const today = new Date()
    const navigate = useNavigate();
    const [dataList, setDataList] = useState(null)
    const [isFahrenheit, setIsFahrenheit] = useState(false)
    const [locationName, setLocationName] = useState('Unknown')
    const [weatherList, setWeatherList] = useState([])
    const [weatherToday, setWeatherToday] = useState({})
    const [modal, setModal] = useState(false)
    const [country, setCountry] = useState([]);
    const [inputText, setInputText] = useState("");
    const [results, setResults] = useState([])

    let currentDate = moment().format('ddd, DD MMM');

    const getWeatherFromLocation = async (lat, lon) => {
        try {
            const response = await fetch(

                `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`
            );
            const json = await response.json();
            setLocationName(json.city.name)
            return json.list
        } catch (error) {
            console.error(error);
        }
    };
    const getData = () => {
        const weatherNext4Day = dataList.filter((value, index) => { if (index % 8 === 0 && index !== 0) return true; return false })
        console.log(weatherNext4Day)
        let tempRange4Day = {}
        dataList.forEach(ele => {
            if (tempRange4Day[ele.dt_txt.slice(0, 11)]) {
                tempRange4Day[ele.dt_txt.slice(0, 11)] += 1;
            } else {
                tempRange4Day[ele.dt_txt.slice(0, 11)] = 1;
            }
        });

        let index = 0
        for (let i in tempRange4Day) {
            if (index === 0) {
                index = tempRange4Day[i]
                delete tempRange4Day[i]

            } else {
                let temp = index
                index = tempRange4Day[i] + temp
                tempRange4Day[i] = dataList.slice(temp, index).map((weather) => weather.main.temp)
            }
        }
        tempRange4Day = Object.values(tempRange4Day)
        // console.log(tempRange4Day)
        setWeatherList(() => {

            return weatherNext4Day.map((weather, index) => { return { ...weather, tempRange: tempRange4Day[index] } })
        })


        const weather = dataList[0]
        setWeatherToday(prev => {
            return {
                ...prev,
                weather: weather.weather[0].description,
                temp: Math.floor(weather.main.temp),
                windSpeed: Math.ceil(weather.wind.speed * 2.23693629),
                windDeg: weather.wind.deg,
                humidity: weather.main.humidity,
                visibility: (weather.visibility * 0.000621371192).toFixed(1),
                airPressure: weather.main.pressure
            }
        })
    }


    const getCurrentWeather = () => {

        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition(async function (position) {


                const newWeatherList = await getWeatherFromLocation(position.coords.latitude, position.coords.longitude)
                setDataList(newWeatherList)
                // getData()

            });
        } else {
            console.log("Geolocation is not available in your browser.");
        }
    }
    const windDirection = (deg) => {
        let direction = ""
        // let rotate = `rotate-[${deg}deg]`
        let rotate = ""

        if ((deg > 348.75 && deg <= 360) || (deg >= 0 && deg <= 11.25)) direction = "N"
        else if (deg > 11.25 && deg <= 33.75) { direction = "NNE"; rotate = "rotate-[22.5deg]" }
        else if (deg > 33.75 && deg <= 56.25) { direction = "NE"; rotate = "rotate-45" }
        else if (deg > 56.25 && deg <= 78.75) { direction = "ENE"; rotate = "rotate-[67.5deg]" }
        else if (deg > 78.75 && deg <= 101.25) { direction = "E"; rotate = "rotate-90" }
        else if (deg > 101.25 && deg <= 123.75) { direction = "ESE"; rotate = "rotate-[112.5deg]" }
        else if (deg > 123.75 && deg <= 146.25) { direction = "SE"; rotate = "rotate-[135deg]" }
        else if (deg > 146.25 && deg <= 168.75) { direction = "SSE"; rotate = "rotate-[157.5deg]" }
        else if (deg > 168.75 && deg <= 191.25) { direction = "S"; rotate = "rotate-180" }
        else if (deg > 191.25 && deg <= 213.75) { direction = "SSW"; rotate = "rotate-[202.5deg]" }
        else if (deg > 213.75 && deg <= 236.25) { direction = "SW"; rotate = "rotate-[225deg]" }
        else if (deg > 236.25 && deg <= 258.75) { direction = "WSW"; rotate = "rotate-[247.5deg]" }
        else if (deg > 258.75 && deg <= 281.25) { direction = "W"; rotate = "rotate-[270deg]" }
        else if (deg > 281.25 && deg <= 303.75) { direction = "WNW"; rotate = "rotate-[292.5deg]" }
        else if (deg > 303.75 && deg <= 326.25) { direction = "NW"; rotate = "rotate-[315deg]" }
        else if (deg > 326.25 && deg <= 348.75) { direction = "NNW"; rotate = "rotate-[337.5deg]" }
        else direction = "unknown"
        return (
            <div className="flex items-center justify-center space-x-2">
                <div className="flex items-center w-[30px] h-[30px] justify-center rounded-full bg-white/[.3]">
                    <NavigationRounded sx={{ fontSize: 20 }} className={`transform  ${rotate}`} />
                </div>
                <text className="font-[500] text-center text-[14px]">{direction}</text>
            </div>
        )
    }
    const handleChange = (value) => {
        if (value === '') setResults([])
        else {
            const newResult = country.filter((country) => country.includes(value))
            setResults(newResult)
        }

        setInputText(value)

    }
    useEffect(() => {
        if (dataList)
            getData()
    }, [dataList])

    useEffect(() => {
        getCurrentWeather()


    }, []);
    return (
        <div className="flex flex-1 md:flex-row flex-col font-raleway min-h-screen">
            <div className="flex items-center justify-start relative pb-6 flex-col md:w-[30%] w-full bg-[#1E213A]">
                <div className="flex w-full justify-between pt-4 pb-2 px-4">
                    <button className=" space-x-[0.75px] z-50 flex items-center text-[#E7E7EB]/[.5] hover:text-[#E7E7EB] h-6" onClick={() => navigate(-1)}>
                        <ArrowBack sx={{ fontSize: 20 }} />
                        {/* <text className="text-center">go back</text> */}
                    </button>
                    {modal ? <Close onClick={() => setModal(false)} className="z-50  flex items-center text-[#E7E7EB] " /> : <></>}
                </div>

                {modal ?
                    <SearchBar setDataList={setDataList} setLocationName={setLocationName} />
                    : <></>}
                <div className="flex flex-1 items-center justify-between  flex-col w-full">
                    <div className="flex items-center  justify-between w-[85%]">
                        <button onClick={() => setModal(true)} className="flex justify-center space-x-2 items-center bg-[#6E707A] w-[161px] h-[40px]
                        drop-shadow-[0px_4px_4px_rgba(0,0,0,0.45)] hover:bg-[#AEAEAE] focus:bg-[#AEAEAE]
                        hover:drop-shadow-none focus:drop-shadow-none">
                            <text className="text-[#E7E7EB] ">Seach for places</text>
                        </button>
                        <button onClick={() => getCurrentWeather()} className="flex items-center w-[40px] h-[40px] rounded-full drop-shadow-[0px_4px_4px_rgba(0,0,0,0.45)] justify-center bg-white/[.2]">
                            <MyLocation sx={{ fontSize: 20 }} className="text-[#E7E7EB]" />
                        </button>
                    </div>
                    <div className="flex bg-[url('./assets/images/cloud.svg')] items-center justify-center mt-6 w-[100%] h-full bg-contain">

                        <div className="w-[50%]">
                            <WeatherIcon name={weatherToday.weather} />
                        </div>

                    </div>
                    <div className="flex flex-col items-center justify-center space-y-10 ">
                        <div className="flex justify-center items-center my-[-20px]">
                            <text className="text-[#E7E7EB] text-[110px]">{isFahrenheit ? Math.floor(weatherToday.temp * (9 / 5) + 32) : weatherToday.temp}</text>
                            <text className="text-[#A09FB1] text-[48px]">º{isFahrenheit ? 'F' : 'C'}</text>
                        </div>
                        <text className="text-[#A09FB1] text-[36px] capitalize">{weatherToday.weather}</text>
                        <div className="flex flex-col text-[#88869D] text-[18px]">

                            <text className=" ">{`Today • ${currentDate}`}</text>
                            <div className="flex items-center justify-center space-x-1">
                                <LocationOn />
                                <text>{locationName}</text>

                            </div>
                        </div>
                    </div>
                </div>


            </div>
            <div className="flex items-center  flex-col md:w-[70%] w-full bg-[#100E1D] py-6 px-[15%] space-y-10">
                <div className="flex place-self-end space-x-2   ">
                    <button onClick={() => setIsFahrenheit(false)} className={`w-[40px] h-[40px] rounded-full text-[18px] font-[700] text-center ${isFahrenheit ? "bg-[#585676] text-[#E7E7EB]" : "bg-[#E7E7EB] text-[#110E3C]"}`}>&deg;C</button>
                    <button onClick={() => setIsFahrenheit(true)} className={`w-[40px] h-[40px] rounded-full text-[18px] font-[700] text-center ${!isFahrenheit ? "bg-[#585676] text-[#E7E7EB]" : "bg-[#E7E7EB] text-[#110E3C]"}`}>&deg;F</button>
                </div>
                <div className="grid md:grid-cols-4 grid-cols-2 gap-6 self-center">
                    {weatherList.map((weather, index) => <WeatherWidget key={index} date={{ today: today, index: index }} weather={weather.weather[0].description} isFahrenheit={isFahrenheit} temp={[Math.max(...weather.tempRange), Math.min(...weather.tempRange)]} />)}
                </div>
                <div className="flex flex-col text-[#E7E7EB] w-[90%] space-y-6">
                    <text className="text-left  font-[700] text-[24px]">Today’s Hightlights </text>
                    <div className="grid md:grid-cols-2 grid-cols-1 gap-6 self-center w-full">
                        <div className="flex flex-col items-center justify-between h-[204px] bg-[#1E213A] py-4">
                            <text className="text-center text-[16px]">Wind status</text>
                            <div className="flex items-center">
                                <text className="text-center font-[700] text-[64px]">{weatherToday.windSpeed}</text>
                                <text className="text-center font-[500] text-[36px]">{`mph`}</text>
                            </div>
                            {windDirection(weatherToday.windDeg)}


                        </div>
                        <div className="flex flex-col items-center justify-between h-[204px] bg-[#1E213A] py-4">
                            <text className="text-center text-[16px]">Humidity</text>
                            <div className="flex items-center">
                                <text className="text-center font-[700] text-[64px]">{weatherToday.humidity}</text>
                                <text className="text-center font-[400] text-[36px]">%</text>
                            </div>
                            <div className="flex flex-col justify-center w-[70%] ">
                                <div className="flex justify-between items-center">
                                    <label className="place-self-end text-[12px] text-[#A09FB1] font-[700]">0</label>
                                    <label className="place-self-end text-[12px] text-[#A09FB1] font-[700]">50</label>
                                    <label className="place-self-end text-[12px] text-[#A09FB1] font-[700]">100</label>

                                </div>
                                <span
                                    className="relative rounded-[80px] w-full  block h-[8px]  bg-[#E7E7EB]  "
                                // style={{ left: 1, width: 96 }}
                                >
                                    <span style={{ width: `${weatherToday.humidity}%` }} className="absolute rounded-[80px]  block h-[8px] bg-[#FFEC65]  transition-all duration-300"></span>
                                </span>
                                <label className="place-self-end text-[12px] text-[#A09FB1] font-[700]">%</label>
                            </div>


                        </div>
                        <div className="flex items-center flex-col h-[159px] py-4 bg-[#1E213A]">
                            <text className="text-center text-[16px]">Visibility</text>
                            <div className="flex items-center space-x-2">
                                <text className="text-center font-[700] text-[64px]">{weatherToday.visibility}</text>
                                <text className="text-center font-[500] text-[36px]">miles</text>
                            </div>
                        </div>
                        <div className="flex items-center flex-col h-[159px] py-4 bg-[#1E213A]">
                            <text className="text-center text-[16px]">Air Pressure</text>
                            <div className="flex items-center space-x-2">
                                <text className="text-center font-[700] text-[64px]">{weatherToday.airPressure}</text>
                                <text className="text-center font-[500] text-[36px]">mb</text>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    )
}