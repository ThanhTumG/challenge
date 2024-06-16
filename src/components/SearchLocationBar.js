import React from "react";
import { useState, useEffect } from "react";
import { Public, ChevronRight } from "@mui/icons-material";
import listLocation from "../assets/location.json"
export default function SearchLocationBar({ defaultValue, setLocation }) {
    // console.log(listLocation)
    const [inputText, setInputText] = useState("");
    const [results, setResults] = useState([])
    const [isFocus, setIsFocus] = useState(false)

    console.log(listLocation)
    const handleChange = (value) => {
        if (value === '') {
            setLocation(defaultValue)
            setResults([])
        }
        else {
            setIsFocus(true)
            const newResult = listLocation.filter((location) => location.name.includes(value.toLowerCase()))
            setResults(newResult)
        }
        setInputText(value)
    }

    return (
        <div className="relative flex flex-col w-[80%] h-[48px] ">
            <label className="text-[#B9BDCF] text-[14px] font-roboto bg-white px-4 focus:outline-none flex items-center h-full
               rounded-[4px] drop-shadow-[0px_2px_4px_rgba(0,0,0,0.05)]">
                <div className="text-[#B9BDCF]">
                    <Public />
                </div>
                <input value={inputText}
                    onChange={e => handleChange(e.target.value)}
                    className="pl-3 w-[90%] bg-transparent focus:outline-none text-[#333333]"
                    placeholder="City, state, zip code or country" ></input>
            </label>
            <div className="absolute top-[60px] bg-white z-50 flex items-center flex-col space-y-2 overflow-y-auto  justify-start w-[100%]">

                {isFocus && results.slice(0, 10).map((result, index) => (
                    <button key={index} onClick={() => { setLocation(result); setInputText(result.name); setIsFocus(false) }} className="flex justify-between items-center px-4 w-full h-[55px] text-[#333333] 
                    font-[500] text-[16px] hover:border-2 hover:border-[#616475]">
                        <text className="capitalize">{result.name}</text>
                        <ChevronRight />
                    </button>
                ))}
            </div>
        </div>

    )

}