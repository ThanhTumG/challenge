import React, { useEffect, useState } from "react";
import parse from 'html-react-parser';
export default function JobSearch() {
    const [listJob, setListJob] = useState([])
    const getJob = async () => {
        try {
            const response = await fetch(

                `https://www.themuse.com/api/public/jobs?location=New%20York%2C%20NY&page=3`
            );
            const json = await response.json();
            // setLocationName(json.city.name)
            // return json.list
            console.log(json.results)
            setListJob(json.results)
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        getJob()
    }, [])
    return (
        <div className="flex flex-1 flex-col  space-y-10">
            {listJob.map((job) => {
                return (
                    <div>
                        {parse(job.contents)}
                    </div>)


            })}

        </div>
    )
}