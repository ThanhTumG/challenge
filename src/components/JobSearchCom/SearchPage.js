import React from "react"
import { useContext } from "react";
import { SearchCompanyBar } from "../../components/JobSearchCom/SearchCompanyBar";
import ListJobSearch from "../../components/JobSearchCom/ListJobSearch";
import SideBar from "../../components/JobSearchCom/JobSideBar";
import { AppContext } from "../../AppContext/JobSearchProvider";
export default function SearchPage() {
    const { isDetail } = useContext(AppContext)
    return (
        isDetail ? <></> :
            <>
                <div className="flex w-[100%] h-[138px] items-center justify-center
        md:bg-[center_bottom_15rem] rounded-[8px] bg-cover bg-[url('./assets/images/bg_Skycraper.jpg')]">
                    <SearchCompanyBar />
                </div>

                <div className="flex md:flex-row flex-col w-full  md:pb-16 pb-10">
                    <SideBar />
                    <ListJobSearch />
                </div>
            </>

    )
}