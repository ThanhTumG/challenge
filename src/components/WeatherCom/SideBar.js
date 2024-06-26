import React, { useContext } from 'react'
import { AppContext } from '../../AppContext/WeatherProvider';
import { MyLocation, LocationOn } from "@mui/icons-material";
import WeatherIcon from "../../components/WeatherCom/WeatherIcon";
import moment from 'moment';

const SideBar = () => {
    const { weatherToday, locationName, modal, setModal, getCurrentWeather, isFahrenheit } = useContext(AppContext)

    let currentDate = moment().format('ddd, DD MMM');
    return (
        modal ? <></> :
            <div className="flex flex-1 items-center justify-between py-10 md:py-6  flex-col w-full">
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
                <div className="flex bg-[url('./assets/images/cloud.svg')] items-center justify-center mt-6 w-[100%] min-h-[300px] md:min-h-[40%] bg-contain">

                    <div className="w-[50%]">
                        <WeatherIcon name={weatherToday.weather} />
                    </div>

                </div>
                <div className="flex flex-col items-center justify-center space-y-10 ">
                    <div className="flex justify-center items-center my-[-5px]">
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
    )
}

export default SideBar