import React, { createContext, useEffect, useState } from 'react';
import { getJob } from '../api/JobSearchAPI';
export const AppContext = createContext();

export const AppProvider = ({ children }) => {
    const [selectedLocation, setSelectedLocation,] = useState({ name: 'London', value: 'London, United Kingdom' });
    const [selectedCompany, setSelectedCompany] = useState('')
    const [selectedLevel, setSelectedLevel] = useState([])
    const [listJob, setListJob] = useState([])
    const [selectedJob, setSelectedJob] = useState({})
    const [isDetail, setIsDetail] = useState(false)
    const [loading, setLoading] = useState(false);

    const getListJob = async () => {
        setLoading(true)
        try {
            const newlistJob = await getJob(selectedLevel, selectedCompany, selectedLocation.value, selectedJob, setSelectedJob)
            setListJob(newlistJob)
        } catch (error) {
            console.log(error)
        }
        setLoading(false)
    }

    useEffect(() => {
        getListJob()
    }, [selectedLocation, selectedLevel, selectedCompany])

    return (
        <AppContext.Provider
            value={{
                selectedLocation, setSelectedLocation, selectedCompany,
                setSelectedCompany, listJob, setSelectedLevel, selectedLevel,
                isDetail, setIsDetail, selectedJob, setSelectedJob, loading
            }}
        >
            {children}
        </AppContext.Provider>
    );
};