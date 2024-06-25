import React from "react";
import { AppProvider } from "../../AppContext/CatWikiProvider";
import Header from "../../components/CatWikiCom/Header";
import MainPage from "../../components/CatWikiCom/MainPage";
import CatDetail from "../../components/CatWikiCom/CatDetail";
import TopSearch from "../../components/CatWikiCom/TopSearch";
import Footer from "../../components/CatWikiCom/Footer";
export default function CatWikiApp() {

    return (
        <AppProvider>
            <div className="flex flex-1  flex-col min-h-screen items-center pt-6 pb-[150px] md:px-[10%] px-[5%] ">
                <Header />
                <MainPage />
                <CatDetail />
                <TopSearch />
                <Footer />
            </div>
        </AppProvider>

    )
}