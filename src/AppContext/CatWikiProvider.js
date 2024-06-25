import React, { createContext, useEffect, useState } from 'react';
import { getMostSearchList, fetchListCat } from '../api/CatAPI';
export const AppContext = createContext();

export const AppProvider = ({ children }) => {
    const [mode, setMode] = useState("main")
    const [mostSearch, setMostSearch] = useState([])
    const [listCat, setListCat] = useState([])
    const [selectedCat, setSelectedCat] = useState({})

    const getAllCat = async () => {

        let newListCat = []
        for (let i = 0; i <= 6; i++) {
            newListCat[i] = await fetchListCat(i)
        }
        // console.log(newListCat)
        setListCat(newListCat.reduce((acc, curr) => acc.concat(curr), []))
    }
    useEffect(() => {
        const getMostSearchCat = async () => {
            const results = await getMostSearchList()
            setMostSearch(results)
        }
        getMostSearchCat()
    }, [])
    useEffect(() => {
        getAllCat()
    }, [])


    return (
        <AppContext.Provider
            value={{
                mode, setMode,
                mostSearch, setMostSearch,
                listCat, setSelectedCat, selectedCat,
            }}
        >
            {children}
        </AppContext.Provider>
    );
};