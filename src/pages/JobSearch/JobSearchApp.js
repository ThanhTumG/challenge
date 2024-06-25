import React from "react";
import { AppProvider } from "../../AppContext/JobSearchProvider";
import JobDetail from "../../components/JobSearchCom/JobDetail";
import SearchPage from "../../components/JobSearchCom/SearchPage";
export default function JobSearchApp() {
    return (
        <AppProvider>
            <div className="flex flex-1 items-center flex-col font-raleway min-h-[1080px] pt-10 space-y-10 md:px-[8%] px-[3%] bg-[#F6F7FB]">
                <div className="flex place-self-start items-center  text-[24px] text-center space-x-2 text-[#282538]">
                    <h1 className="font-poppins font-[700]">Github</h1>
                    <h1 className="font-poppins font-[300]">Jobs</h1>
                </div>
                <SearchPage />
                <JobDetail />
            </div>
        </AppProvider>

    )
}