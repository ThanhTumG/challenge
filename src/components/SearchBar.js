import React from "react";
import { useState, useEffect } from "react";
import { Search, ChevronRight } from "@mui/icons-material";
// import { useNavigate } from 'react-router-dom';
// import WeatherIcon from "../components/WeatherIcon";
// import WeatherWidget from "../components/WeatherWidget";


export const SearchBar = ({ setDataList, setLocationName }) => {
    const [country, setCountry] = useState([]);
    const [inputText, setInputText] = useState("");
    const [results, setResults] = useState([])
    const getCountry = async () => {
        try {
            const response = await fetch('https://countriesnow.space/api/v0.1/countries');
            const json = await response.json();
            return json.data;
        } catch (error) {
            console.error(error);
        }
    };

    const getWeatherFromCity = async (city) => {
        try {
            const response = await fetch(

                `https://api.openweathermap.org/data/2.5/forecast?appid=5caf59265a678ca70e57d4763ad8ddcc&q=${city.replace(' ', '%20')}&units=metric`
            );
            const json = await response.json();
            // return json.list
            setLocationName(json.city.name)
            setDataList(json.list)
        } catch (error) {
            alert(`${city} is either not valid or the data has not been updated yet.`)
        }
    };
    useEffect(() => {
        const fetchCountries = async () => {
            const result = await getCountry();
            const returnData = result.reduce((prev, curr) => {
                return prev.concat(curr.cities.map((city) => city.toLowerCase()))
            }, [])
            setCountry(returnData)
        };

        fetchCountries();
    }, []);

    const handleChange = (value) => {
        if (value === '') setResults([])
        else {
            const newResult = country.filter((country) => country.includes(value.toLowerCase()))
            setResults(newResult)
        }
        setInputText(value)
    }

    return (
        <div className="flex flex-1 h-[100%]  absolute pt-16 z-40 bg-[#1E213A] items-center justify-start space-y-10  flex-col w-full">
            <div className="flex items-center  justify-between w-[85%]">
                <label className="text-[#E7E7EB] bg-transparent px-3 focus:outline-none flex items-center w-[70%] h-[48px] border-2 border-[#E7E7EB] ">
                    <div className="text-[#616475]">
                        <Search />
                    </div>
                    <input value={inputText}
                        onChange={e => handleChange(e.target.value)} className="pl-3 w-[90%] bg-transparent focus:outline-none" placeholder="search location" ></input>
                </label>

                <button onClick={(e) => { getWeatherFromCity(inputText); e.target.blur(); }}
                    className="flex justify-center space-x-2 items-center bg-[#3C47E9] w-[86px] h-[48px] 
                        hover:bg-[#0039CB] focus:bg-[#0039CB] 
                         text-[#E7E7EB] ">
                    Search
                </button>
            </div>
            <div className="flex items-center flex-col space-y-2 overflow-y-auto  justify-start w-[85%]">
                {results.slice(0, 10).map((result, index) => (
                    <button key={index} onClick={() => getWeatherFromCity(result)} className="flex justify-between items-center px-4 w-full h-[64px] text-[#E7E7EB] 
                    font-[500] text-[16px] hover:border-2 hover:border-[#616475]">
                        <text className="capitalize">{result}</text>
                        <ChevronRight />


                    </button>

                ))}

            </div>

        </div>
    );
};