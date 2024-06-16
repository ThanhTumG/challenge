import React from "react";
import { useState, useEffect } from "react";
import { WorkOutline, ChevronRight, } from "@mui/icons-material";

export default function SearchCompanyBar({ location, setCompany }) {
    const [inputText, setInputText] = useState("");
    const [listCompany, setListCompany] = useState([])
    const [results, setResults] = useState([])
    const [isFocus, setIsFocus] = useState(false)
    const getCompany = async () => {
        let newListCompany = []
        const fetchCompany = async (value) => {
            try {
                const response = await fetch(
                    `https://www.themuse.com/api/public/companies?page=${value}&location=${location.value.replaceAll(' ', '%20').replace(',', '%2C')}`
                );
                const json = await response.json();
                return [json.page_count, json.results]
            }
            catch (error) {
                console.error(error);
            }
        }
        for (let i = 1; i < 10; i++) {
            const [pg_count, pg_result] = await fetchCompany(i)
            newListCompany[i - 1] = { key: i, value: pg_result }
            if (pg_count === i + 1) {
                const temp = newListCompany.reduce((acc, curr) => acc.concat(curr.value), [])
                // console.log(temp)
                setListCompany(temp.map((company) => company.name.toLowerCase()))
                break
            }
        }
    }

    const handleChange = (value) => {
        if (value === '') {
            setCompany('')
            setResults([])
        }
        else {
            setIsFocus(true)
            const newResult = listCompany.filter((company) => company.includes(value.toLowerCase()))
            setResults(newResult)
        }
        setInputText(value)
    }

    useEffect(() => {
        getCompany()
    }, [location])
    return (
        <div className="relative flex flex-col md:w-[60%] w-[90%] h-[55px] ">
            <label className="text-[#B9BDCF] font-roboto bg-white space-x-2 justify-between px-4 focus:outline-none flex items-center h-full
    rounded-[4px] drop-shadow-[0px_2px_8px_rgba(0,0,0,0.1)]">
                <div className="flex w-[80%]">
                    <div className="text-[#B9BDCF]">
                        <WorkOutline />
                    </div>
                    <input value={inputText}
                        onChange={e => handleChange(e.target.value)} className="truncate pl-3 w-[90%] bg-transparent focus:outline-none text-[#333333]" placeholder="Title, companies, expertise or benefits" ></input>
                </div>

                <button onClick={(e) => { e.target.blur(); }}
                    className="flex  justify-center  items-center bg-[#1E86FF] w-[30%] h-[47px] 
             hover:bg-[#0039CB] focus:bg-[#0039CB] rounded-[4px] text-[16px]
              text-white">
                    Search
                </button>
            </label>
            <div className="absolute top-[60px] bg-white z-50 flex items-center flex-col space-y-2 overflow-y-auto  justify-start w-[100%]">

                {isFocus && results.slice(0, 10).map((result, index) => (
                    <button key={index} onClick={() => { setCompany(result); setInputText(result); setIsFocus(false) }} className="flex justify-between items-center px-4 w-full h-[55px] text-[#333333] 
                    font-[500] text-[16px] hover:border-2 hover:border-[#616475]">
                        <text className="capitalize">{result}</text>
                        <ChevronRight />
                    </button>
                ))}
            </div>
        </div>

    )

}