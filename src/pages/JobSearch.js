import React, { useEffect, useState } from "react";
import parse from 'html-react-parser';
import { ArrowBack, WorkOutline, Public, Business, Schedule, ChevronLeft, ChevronRight, ArrowRightAlt, ContactMailSharp } from "@mui/icons-material";
import { useNavigate } from 'react-router-dom';
import SearchCompanyBar from "../components/SearchCompanyBar";
import SearchLocationBar from "../components/SearchLocationBar";
export default function JobSearch() {
    const jobType = ["Entry Level", "Mid Level", "Senior Level"]
    const locations = [
        { name: 'London', value: 'London, United Kingdom' },
        { name: 'New York', value: 'New York, NY' },
        { name: 'Amsterdam', value: 'Amsterdam, Netherlands' },
        { name: 'Berlin', value: 'Berlin, Germany' },
        { name: 'Ho Chi Minh', value: 'Ho Chi Minh City, Vietnam' }

    ]
    const navigate = useNavigate();
    const [inputText, setInputText] = useState("");
    const [selectedLocation, setSelectedLocation,] = useState(locations[0]);
    const [selectedLevel, setSelectedLevel] = useState([])
    const [selectedCompany, setSelectCompany] = useState('')
    const [selectBox, setSelectedBox] = useState(null)
    const [selectedJob, setSelectedJob] = useState({})
    const [active, setActive] = React.useState(1);
    const [isSearchPage, setIsSearchPage] = useState(true)

    const handleLevel = (type, index) => {
        setSelectedBox(index)
        setSelectedLevel((prev) => {
            return prev.includes(type) ? prev.filter(el => el !== type) : [...prev, type]
        })
    }
    const handleRadioChange = (Location) => {
        setSelectedLocation(Location);
    };
    const [listJob, setListJob] = useState([])
    const getJob = async () => {
        console.log(selectedCompany)
        const levelStr = selectedLevel.length ? selectedLevel.reduce((acc, curr) => `${acc}level=${curr.replaceAll(' ', '%20')}&`, '') : ''
        const companyStr = selectedCompany.length ? `company=${(selectedCompany[0].toUpperCase() + selectedCompany.slice(1)).replaceAll(' ', '%20')}&` : ''
        let newListJob = []
        const fetchJob = async (value) => {
            try {
                const response = await fetch(
                    `https://www.themuse.com/api/public/jobs?${levelStr}${companyStr}location=${selectedLocation.value.replaceAll(' ', '%20').replace(',', '%2C')}&page=${value}`
                );
                const json = await response.json();
                return [json.page_count, json.results]
            }
            catch (error) {
                console.error(error);
            }
        }
        for (let i = 1; i < 4; i++) {
            const [pg_count, pg_result] = await fetchJob(i)
            newListJob[i - 1] = { key: i, value: pg_result }
            if (pg_count === i + 1 || i === 3) {
                const temp = newListJob.reduce((acc, curr) => acc.concat(curr.value), [])
                console.log(temp.length)
                setListJob(temp)
                break
            }
        }
    }
    const calculateDaysSincePublication = (publicDate) => {
        const date = new Date(publicDate);
        const today = new Date();
        // console.log(today)
        const differenceInTime = today - date;
        const differenceInDays = Math.floor(differenceInTime / (1000 * 3600 * 24));
        return differenceInDays;
    }
    const handleDetail = (job) => {
        window.scrollTo(0, 0);
        setSelectedJob(job)
        setIsSearchPage(false)
    }
    const handleChange = (value) => {
        setInputText(value)
    }
    useEffect(() => {
        getJob()
    }, [selectedLocation, selectedLevel, selectedCompany])
    return (
        isSearchPage ?
            <div className="flex flex-1 items-center flex-col font-raleway min-h-screen  space-y-10 md:px-[8%] px-[3%] bg-[#F6F7FB]">
                <button className="fixed top-4 left-4 flex items-center text-[#333333]/[.5] hover:text-[#333333] h-6" onClick={() => navigate(-1)}>
                    <ArrowBack sx={{ fontSize: 20 }} />
                </button>
                <div className="flex place-self-start items-center  text-[24px] text-center space-x-2 text-[#282538]">
                    <h1 className="font-poppins font-[700]">Github</h1>
                    <h1 className="font-poppins font-[300]">Jobs</h1>
                </div>
                <div className="flex w-[100%] h-[138px] items-center justify-center
             md:bg-[center_bottom_15rem] rounded-[8px] bg-cover bg-[url('./assets/images/bg_Skycraper.jpg')]">
                    <SearchCompanyBar location={selectedLocation} setCompany={setSelectCompany} />
                </div>

                <div className="flex md:flex-row flex-col w-full  md:pb-16 pb-10">
                    <div className="flex flex-col md:w-[30%] w-full px-4 space-y-10">
                        <ul className="flex flex-col space-y-4">
                            {jobType.map((type, index) => (
                                <li className="flex items-center space-x-2" key={index}>
                                    <input checked={selectedLevel.includes(type)} onClick={() => handleLevel(type, index)} className=" w-[18px] h-[18px] border-[#B9BDCF]" type="checkbox"
                                    />
                                    <text className={`font-poppins text-[14px] text-[#334680] font-[500]`}>{type}</text>
                                </li>
                            ))}
                        </ul>
                        <div className="flex flex-col items-start space-y-6">
                            <text className="font-poppins text-[#B9BDCF] text-[14px] font-[700]">LOCATION</text>
                            <SearchLocationBar defaultValue={selectedLocation} setLocation={setSelectedLocation} />
                            <div className="flex flex-col space-y-4">
                                {locations.map((location, index) => (
                                    <div key={index} className="flex items-center space-x-2">
                                        <input className="w-[18px] h-[18px]" type="radio" id={location.name} value={location.name}
                                            checked={selectedLocation.name === location.name}
                                            onChange={() => handleRadioChange(location)}
                                        />
                                        <label className="text-[#334680] text-center text-[14px] font-poppins font-[500]" htmlFor={location.name}>
                                            {location.name}
                                        </label>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="flex md:w-[70%] md:pt-0 pt-10 w-full flex-col items-center justify-center md:pl-10 pl-0 space-y-5">
                        {listJob && listJob.slice((active - 1) * 5, active * 5).map((job, index) => {
                            return (
                                <button onClick={() => handleDetail(job)} key={index} className="relative flex p-3 space-x-5 items-start md:h-[114px] h-[200px] w-full rounded-[4px] border-1 border-[#334680] bg-white
                            drop-shadow-[0px_2px_4px_rgba(0,0,0,0.05)] hover:drop-shadow-none
                            ">
                                    <div className="flex text-[#BDBDBD] flex items-center justify-center h-[95px] min-w-[95px] bg-[#F2F2F2]">
                                        <img className="w-[80px]" src={`https://assets.themuse.com/uploaded/companies/${job.company.id}/small_logo.png`} slt="Company logo"></img>
                                    </div>
                                    <div className="flex flex-col font-roboto h-[95%] items-start justify-between md:pb-0 pb-10 text-[#334680] text-start">
                                        <text className="font-[700] text-[12px]">{job.company.name}</text>
                                        <p className="font-[400] text-[18px]">{job.name}</p>
                                        <div className="flex space-x-3">
                                            {job.levels.map((level, index) => {
                                                return (
                                                    <div className="flex items-center w-[90px] h-[26px] rounded-[4px]
                                            border-[1.5px] border-[#334680] justify-center font-[700] text-[12px] text-center">
                                                        {level.name}
                                                    </div>)
                                            })}
                                        </div>
                                    </div>
                                    <div className="absolute flex space-x-6 bottom-2 right-4 text-[12px] text-roboto font-[500]">

                                        <div className="flex space-x-1 items-center text-[#B9BDCF]">
                                            <Public sx={{ fontSize: 14 }} />
                                            <text className=" ">
                                                {job.locations.map((loc) => loc.name).slice(0, 2).join(' or ')}
                                            </text>
                                        </div>
                                        <div className="flex space-x-1 items-center text-[#B9BDCF]">
                                            <Schedule sx={{ fontSize: 14 }} />
                                            <text className=" ">
                                                {calculateDaysSincePublication(job.publication_date.slice(0, 10))} days ago
                                            </text>
                                        </div>
                                    </div>
                                </button>)
                        })}
                        <div className="flex space-x-2 items-center pt-6 font-roboto place-self-end text-[12px] font-[400]">
                            <button onClick={() => setActive((prev) => {
                                if (prev === 1) return prev
                                return prev - 1
                            })} className="w-[36px] hover:border-[#1E86FF] hover:text-[#1E86FF] text-[#B9BDCF] h-[36px] border-[1.5px] border-[#B7BCCE] rounded-[4px]">
                                <ChevronLeft />
                            </button>
                            {Array.from({ length: Math.ceil(listJob.length / 5) }, (v, i) => i + 1).map((index) => {

                                return (
                                    (index === 1 || index === 2 || index === Math.ceil(listJob.length / 5) || Math.abs(index - active) <= 1) ?
                                        <button onClick={() => setActive(index)}
                                            className={`w-[36px] ${active === index ? 'bg-[#1E86FF] border-[#1E86FF] hover:text-white text-white' : ''} hover:border-[#1E86FF] hover:text-[#1E86FF] text-[#B9BDCF] 
                                h-[36px] border-[1.5px] border-[#B7BCCE] rounded-[4px]`}>
                                            {index}
                                        </button>
                                        : Math.abs(index - active) === 3 ? <div className="text-center">...</div> : <></>
                                )
                            })}
                            <button onClick={() => setActive((prev) => {
                                if (prev === 12) return prev
                                return prev + 1
                            })} className="w-[36px] text-[#B9BDCF] h-[36px] hover:border-[#1E86FF] hover:text-[#1E86FF] border-[1.5px] border-[#B7BCCE] rounded-[4px]">
                                <ChevronRight />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            :

            <div className="flex flex-1 items-center flex-col font-raleway min-h-screen pt-10 space-y-10 md:px-[8%] px-[3%] bg-[#F6F7FB]">
                <div className="flex place-self-start items-center  text-[24px] text-center space-x-2 text-[#282538]">
                    <h1 className="font-poppins font-[700]">Github</h1>
                    <h1 className="font-poppins font-[300]">Jobs</h1>
                </div>
                <div className="flex w-full md:flex-row flex-col md:pb-16 md-space-y-0 space-y-10 pb-10">
                    <div className="flex flex-col md:w-[25%] w-full items-start space-y-10">
                        <button onClick={() => setIsSearchPage(true)} className="px-2 flex hover:bg-[#2962FF]/[0.1] focus:bg-[#2962FF]/[0.1] w-[145px] items-center justify-between
                         text-[#1E86FF] h-[36px] rounded-[6px]">
                            <ArrowRightAlt className="rotate-180" /> <text className="font-poppins font-[500] text-[14px]">Back to search</text>
                        </button>

                        <div className="flex flex-col w-full space-y-6 text-wrap ">
                            <text className="font-poppins text-[#B9BDCF] text-[14px] font-[700]">HOW TO APPLY</text>
                            <div className="text-[14px] flex  space-x-1 font-poppins font-[500] text-[#334680]">
                                <p>Apply your resume or cv</p>
                                <a href={selectedJob.refs.landing_page} className="font-[700]">Here</a>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col md:w-[75%] w-full items-start space-y-6">
                        <div className="flex flex-col w-full space-y-3">
                            <div className="flex md:space-x-6 md:flex-row md:space-y-0 space-y-2 flex-col md:items-center items-start font-roboto text-[#334680]">
                                <p className="font-[700] text-[24px] ">{selectedJob.name}</p>
                                <div className="flex space-x-3 items-start">
                                    {selectedJob.levels.map((level, index) => {
                                        return (
                                            <div className="flex items-center w-[90px] h-[26px] rounded-[4px]
                                            border-[1.5px] border-[#334680] justify-center font-[700] text-[12px] text-center">
                                                {level.name}
                                            </div>)
                                    })}
                                </div>

                            </div>
                            <div className="flex space-x-1 items-center text-[#B9BDCF]">
                                <Schedule sx={{ fontSize: 14 }} />
                                <text className="text-[12px]">
                                    {calculateDaysSincePublication(selectedJob.publication_date.slice(0, 10))} days ago
                                </text>
                            </div>

                        </div>
                        <div className="flex space-x-4 h-[70px]">
                            <div className="flex text-[#BDBDBD] flex items-center justify-center h-[70px] min-w-[70px] bg-[#F2F2F2]">
                                <img className="w-[60px]" src={`https://assets.themuse.com/uploaded/companies/${selectedJob.company.id}/small_logo.png`} slt="Company logo"></img>
                            </div>
                            <div className="flex flex-col font-roboto h-[90%] items-start justify-between text-[#334680] text-start">
                                <text className="font-[700] text-[18px]">{selectedJob.company.name}</text>
                                <div className="flex space-x-1 items-center text-[#B9BDCF]">
                                    <Public sx={{ fontSize: 16 }} />
                                    <text className="text-[12px] ">
                                        {selectedJob.locations.map((loc) => loc.name).slice(0, 2).join(' or ')}
                                    </text>
                                </div>
                            </div>
                        </div>
                        <div className="font-roboto text-[#334680] space-y-4">
                            {parse(selectedJob.contents)}
                        </div>

                    </div>
                </div>
            </div>
    )
}