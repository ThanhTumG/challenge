import React from "react";
import { useState, useEffect } from "react";
import { ReactComponent as Logo } from "../assets/images/chicka.svg"
import { ArrowRightAlt, Search } from "@mui/icons-material";
import TopSearchCat from "../components/TopSearchCat";
import cat1 from "../assets/images/cat1.png"
import cat2 from "../assets/images/cat2.png"
import cat3 from "../assets/images/cat3.png"
import CatDetail from "../components/CatDetail";
const apikey = process.env.REACT_APP_API_CAT;
export default function CatWiki() {
    // console.log(1)
    const [listCat, setListCat] = useState([])
    const [mostSearch, setMostSearch] = useState([])
    const [selectedCat, setSelectedCat] = useState({})
    const [results, setResults] = useState([])
    const [inputText, setInputText] = useState("");
    const [listImg, setListImg] = useState([])
    const [mode, setMode] = useState("main")
    const [placeholder, setPlaceholder] = useState('Enter your breed');

    const fetchListCat = async (page) => {
        try {
            const response = await fetch(

                `https://api.thecatapi.com/v1/breeds?limit=10&page=${page}`
            );
            const json = await response.json();
            json.forEach(cat => cat.name = cat.name.toLowerCase());
            console.log(json)
            return json
        } catch (error) {
            console.error(error);
        }
    }

    const getAllCat = async () => {
        let newListCat = []
        for (let i = 0; i <= 6; i++) {
            newListCat[i] = await fetchListCat(i)
        }
        console.log(newListCat)
        setListCat(newListCat.reduce((acc, curr) => acc.concat(curr), []))
    }
    const getMostSearchList = async () => {
        try {
            const response = await fetch(

                `https://api.thecatapi.com/v1/votes?limit=10&order=DESC`
                , {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'x-api-key': `${apikey}`
                    },
                });
            if (!response.ok) {
                // Read the response as text
                const errorText = await response.text();
                console.error('Error:', errorText);
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const json = await response.json();
            // console.log(json)
            setMostSearch(json)
            return json
        } catch (error) {
            console.error(error);
        }
    }
    const handleChange = (value) => {
        if (value === '') {
            setResults([])
        }
        else {
            // setIsFocus(true)
            const newResult = listCat.filter((cat) => cat.name.includes(value.toLowerCase()))
            setResults(newResult)
        }
        setInputText(value)
    }
    const getOtherPhoto = async (id) => {
        // console.log(id)
        try {
            const response = await fetch(

                `https://api.thecatapi.com/v1/images/search?limit=8&breed_ids=${id}`
            );
            const json = await response.json();
            console.log(json.length)
            setListImg(json)
        } catch (error) {
            console.error(error);
        }
    }
    const handleOnclickCat = (result) => {
        setSelectedCat(result);
        getOtherPhoto(result.id)
        addVoteCat(result.reference_image_id);
        setInputText('')
        setResults([])
        setMode("detail")
    }
    const updatePlaceholder = () => {
        if (window.innerWidth < 768) {
            setPlaceholder('Search');
        } else {
            setPlaceholder('Enter your breed');
        }
    };
    useEffect(() => {
        getMostSearchList()
    }, [selectedCat])
    useEffect(() => {
        getAllCat()
        updatePlaceholder();
        window.addEventListener('resize', updatePlaceholder);
        return () => window.removeEventListener('resize', updatePlaceholder);
    }, [])
    const addVoteCat = async (id) => {
        console.log(2)
        try {
            const response = await fetch(

                `https://api.thecatapi.com/v1/votes`
                , {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'x-api-key': `${apikey}`
                    },
                    body: JSON.stringify({
                        "image_id": `${id}`,
                        "sub_id": "tung",
                        "value": 1
                    })
                });
            if (!response.ok) {
                // Read the response as text
                const errorText = await response.text();
                console.error('Error:', errorText);
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const json = await response.json();
        } catch (error) {
            console.error(error);
        }
    }
    return (
        <div className="flex flex-1  flex-col min-h-screen items-center pt-6 pb-[150px] md:px-[10%] px-[5%] ">
            <button onClick={() => setMode("main")} className="flex space-x-2 place-self-start">
                <h1 className="font-mysteryquest text-[24px] font-[400] text-[#291507]">CatWiki</h1>
                <Logo className="w-[50px]" fill="#291507" />
            </button>
            {mode === "main" ? <>
                <div className="flex flex-col w-full my-10">
                    <div className="flex w-full rounded-t-[40px] justify-center pl-6 md:pl-20 flex-col bg-[url('./assets/images/CatBackground.png')] bg-cover h-[140px] md:h-[450px]">
                        <div className="flex flex-col w-[40%]">
                            <div className="flex md:space-x-4 space-x-1 items-center ">
                                <h1 className="font-mysteryquest text-[14px] md:text-[64px] font-[400] text-white">CatWiki</h1>
                                <Logo className="md:w-[90px] w-[30px] " fill="white" />
                            </div>
                            <p className="text-white font-[500] md:text-[24px] text-[10px] font-montserrat">Get to know more about your cat breed</p>
                            <div className="relative flex flex-col mt-3 md:mt-10 w-[90%] h-[30px] md:h-[60px] ">
                                <label className="text-[#291507] text-[14px] font-roboto bg-white px-4 focus:outline-none flex items-center h-full
                                        rounded-[59px] ">
                                    <input value={inputText}
                                        onChange={e => handleChange(e.target.value)}
                                        className="md:pl-3 pl-1 w-[90%] bg-transparent focus:outline-none text-[#291507] font-montserrat font-[500] tex-[12px] md:text-[18px]"
                                        placeholder={placeholder} ></input>
                                    <div className="text-[#291507]">
                                        <Search sx={{ fontSize: 14 }} />
                                    </div>
                                </label>
                                <div className="absolute rounded-[14px] md:rounded-[24px] max-h-[220px] top-[80px] bg-white z-50 flex items-center flex-col overflow-y-auto  justify-start w-[100%]">

                                    {results.map((result, index) => (
                                        <button key={index} onClick={() => handleOnclickCat(result)}
                                            className="flex justify-between items-center px-6 w-full min-h-[55px] text-[#333333] 
                                            font-[500] text-[16px] hover:bg-[#979797]/[.2]">
                                            <text className="capitalize font-montserrat font-[500] text-start text-[12px] md:text-[18px]">{result.name}</text>
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col bg-[#E3E1DC] h-[620px]  space-y-10 py-6 px-[7%] rounded-b-[40px]">
                        <p className="relative font-montserrat text-[12px] md:text-[18px] font-[500] text-left text-[#291507]">Most Search Breeds
                            <span
                                className="absolute bottom-[-6px] block h-1 w-[60px] bg-[#4D270C] rounded-[77px]  transition-all duration-300" />
                        </p>

                        <div className="flex w-full justify-between">
                            <p className="w-[50%] font-montserrat text-[18px] md:text-[44px] font-[700] text-left text-[#291507]">66+ Breeds For you to discover</p>
                            <button onClick={() => setMode("top")} className="place-self-end font-montserrat text-[10px] md:text-[18px] font-[700] text-left text-[#291507]/[.6]">SEE MORE
                                <ArrowRightAlt />
                            </button>
                        </div>
                        <div className="md:flex grid grid-cols-2 gap-y-6 justify-items-center justify-between pt-4">
                            {mostSearch && mostSearch.slice(0, 4).map((cat, index) => {
                                const returnCat = listCat.find((ele) => ele.reference_image_id === cat.image.id)
                                if (returnCat) {
                                    return (<div key={index} className="flex flex-col md:w-[22%] w-[80%] space-y-2">
                                        <img className="w-full md:h-[175px] h-[125px] rounded-[24px]" src={cat.image.url} alt="cat-image"></img>
                                        <p className="capitalize font-montserrat text-[10px] md:text-[18px] text-[#291507] font-[600] text-left">{returnCat.name}</p>
                                    </div>)
                                }
                            })}
                        </div>
                    </div>
                </div>
                <div className="flex md:flex-row flex-col w-full items-center md:space-y-0 space-y-10 justify-center md:space-x-14">
                    <div className="flex relative flex-col space-y-5 text-[#291507] w-full md:w-[40%]">
                        <span
                            className="absolute top-0 block h-1 bg-[#4D270C] rounded-[77px]  transition-all duration-300"
                            style={{ left: 0, width: 70 }}
                        />
                        <p className="font-montserrat text-[32px] md:text-[40px] font-[700] text-left">Why should you have a cat?</p>
                        <p className="font-montserrat text-[16px] font-[500] text-left">Having a cat around you can actually trigger the release of calming chemicals in your body which lower your stress and anxiety leves</p>
                    </div>
                    <div className="flex space-x-4 md:w-[50%] w-full">
                        <div className="flex flex-col w-[50%] items-end space-y-4">
                            <img className="w-[full]" alt="cat1" src={cat1}></img>
                            <img className="w-[50%]" alt="cat2" src={cat2}></img>
                        </div>
                        <img className="w-[40%]" alt="cat3" src={cat3}></img>
                    </div>
                </div>
            </> : mode === "detail" ?
                <CatDetail cat={selectedCat} listImg={listImg} setListImg={setListImg} />
                : mode === "top" ? <TopSearchCat listCat={listCat} mostSearch={mostSearch} /> : <></>

            }

            <div className="w-[90%] right-[5%] fixed bottom-0  md:h-[88px] py-6 flex md:flex-row flex-col bg-black justify-between px-[5%] items-start md:items-center rounded-t-[30px]">
                <div className="flex space-x-2 items-center ">
                    <h1 className="font-mysteryquest text-[14px] md:text-[24px] font-[400] text-white">CatWiki</h1>
                    <Logo className="w-[20px] md:w-[50px] " fill="white" />
                </div>
                <div className="flex space-x-1 items-center font-montserrat text-[12px] md:text-[18px] font-[400] text-white text-centers">
                    <p className="mt-[0.5px] text-[14px] md:text-[20px]">{"\u00A9"}</p>
                    <p className=""> created by MeU Solutions - devChallenge.io 2021</p>

                </div>
            </div>
        </div >
    )
}