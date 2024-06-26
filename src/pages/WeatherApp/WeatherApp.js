import React from 'react'
import { AppProvider } from '../../AppContext/WeatherProvider'
import SearchLocation from '../../components/WeatherCom/SearchLocation'
import SideBar from '../../components/WeatherCom/SideBar'
import DetailWeather from '../../components/WeatherCom/DetailWeather'
function WeatherApp() {
    return (
        <AppProvider>
            <div className="flex flex-1 md:flex-row flex-col font-raleway min-h-screen">
                <div className="flex items-center min-h-screen justify-start relative  flex-col md:w-[30%] w-full bg-[#1E213A]">
                    <SearchLocation />
                    <SideBar />
                </div>
                <DetailWeather />
            </div>
        </AppProvider>

    )
}

export default WeatherApp