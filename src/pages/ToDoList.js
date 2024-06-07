import React from "react";
import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Tabs, TabList, Tab, TabPanel } from 'react-tabs';
import { DeleteOutline, ArrowBack } from "@mui/icons-material";
const ToDoList = () => {

    const navigate = useNavigate();
    const [activeTabIndex, setActiveTabIndex] = useState(0);
    const [tabUnderlineLeft, setTabUnderlineLeft] = useState(0);
    const [task, setTask] = useState('')
    const [key, setKey] = useState(() => {
        const localNumOTask = JSON.parse(localStorage.getItem('numOfTask'))
        if (!localNumOTask) return 0
        return localNumOTask + 1
    })
    const [listTask, setListTask] = useState(() => {
        const localStorageTask = JSON.parse(localStorage.getItem('tasks'))
        if (!localStorageTask) return []
        return localStorageTask
    })
    const handleSubmit = () => {
        if (task === "") return
        setListTask(prev => {
            const newListTask = [...prev, {
                key: key,
                task: task,
                isComplete: false
            }]
            setKey(prev => prev + 1)
            const jsonTasks = JSON.stringify(newListTask)
            localStorage.setItem('tasks', jsonTasks)
            localStorage.setItem('numOfTask', key)
            return newListTask
        })
        setTask('')
    }
    const tabsRef = useRef([]);
    useEffect(() => {
        const handleClick = (idx) => {
            setTabUnderlineLeft(tabsRef.current[idx].offsetLeft)
        }

        handleClick(activeTabIndex);

    }, [activeTabIndex]);
    const handleCheckTask = (key) => {
        setListTask(prev => {
            const newListTask = listTask.map((task) => {
                if (task.key === key)
                    return { ...task, isComplete: !task.isComplete }
                return task
            })
            const jsonTasks = JSON.stringify(newListTask)
            localStorage.setItem('tasks', jsonTasks)

            return newListTask
        })
    }
    const handleDelete = (key) => {

        setListTask(prev => {
            if (key === "all") {
                var newListTask = listTask.filter(task => !task.isComplete)
            } else { var newListTask = listTask.filter(task => task.key !== key) }

            const jsonTasks = JSON.stringify(newListTask)
            localStorage.setItem('tasks', jsonTasks)

            return newListTask
        })
    }
    return (

        <div className="flex flex-1 flex-col items-center h-screen space-y-16">

            <button className="fixed space-x-[0.75px] top-6 left-4 flex items-center text-[#333333] h-6" onClick={() => navigate(-1)}>
                <ArrowBack sx={{ fontSize: 20 }} />
                <text className="text-center">go back</text>
            </button>

            <h1 className="text-[36px] text-[#333333] font-bold">#todo</h1>
            <Tabs className="flex flex-col space-y-6 pb-16">
                <div className="border-b-[2px] border-[#BDBDBD] w-[608px] flex justify-center">
                    <TabList className="relative pb-4 font-montserrat flex text-[14px] font-[550] text-[#333333] w-[508px] justify-between ">

                        <Tab onClick={() => setActiveTabIndex(0)} className="w-24 hover:cursor-pointer focus:outline-none text-center">
                            <div ref={(el) => (tabsRef.current[0] = (el))} className="">
                                All
                            </div>

                        </Tab>
                        <Tab onClick={() => setActiveTabIndex(1)} className="w-24 hover:cursor-pointer focus:outline-none text-center">
                            <div ref={(el) => (tabsRef.current[1] = (el))} className="">
                                Active
                            </div>
                        </Tab>
                        <Tab onClick={() => setActiveTabIndex(2)} className="w-24 hover:cursor-pointer focus:outline-none text-center">
                            <div ref={(el) => (tabsRef.current[2] = (el))} className="">
                                Completed
                            </div>
                        </Tab>
                        <span
                            className="absolute rounded-t-[4px] bottom-[-2px] block h-1 bg-[#2F80ED] rounded-t  transition-all duration-300"
                            style={{ left: tabUnderlineLeft, width: 96 }}
                        />
                    </TabList>
                </div>

                <div className="flex flex-col ">
                    <TabPanel>
                        <div className="flex justify-between pb-12">
                            <input value={task}
                                onChange={e => setTask(e.target.value)}
                                placeholder="add details" className="text-[#333333] px-3 focus:outline-none flex items-center w-[476px] h-[56px] border-2 border-[#BDBDBD] rounded-[12px]">
                            </input>
                            <button onClick={(e) => { handleSubmit(); e.target.blur() }}
                                className="flex justify-center space-x-2 items-center bg-[#2F80ED] w-[109px] h-[56px] rounded-[12px]
                        drop-shadow-[0px_2px_6px_rgba(127,177,243,0.4)] hover:bg-[#0039CB] focus:bg-[#0039CB] 
                        hover:drop-shadow-[0px_2px_6px_rgba(41,98,255,0.2)] text-white focus:drop-shadow-[0px_2px_6px_rgba(41,98,255,0.2)]">
                                Add
                            </button>
                        </div>
                        <ul className="flex flex-col space-y-4">
                            {listTask.map((task, index) => (
                                <li className="flex items-center space-x-3" key={index}>
                                    <input className=" w-6 h-6 border-[#828282] font-montserrat text-[18px] font-[500]" type="checkbox" onClick={() => handleCheckTask(task.key)}
                                        checked={task.isComplete} />
                                    <text className={`${task.isComplete ? "line-through" : ""} font-montserrat text-[18px] font-[500]`}>{task.task}</text>
                                </li>
                            ))}
                        </ul>
                    </TabPanel>
                    <TabPanel>
                        <div className="flex justify-between pb-12">
                            <input value={task}
                                onChange={e => setTask(e.target.value)}
                                placeholder="add details" className="text-[#333333] px-3 focus:outline-none flex items-center w-[476px] h-[56px] border-2 border-[#BDBDBD] rounded-[12px]">
                            </input>
                            <button onClick={(e) => { handleSubmit(); e.target.blur() }}
                                className="flex justify-center space-x-2 items-center bg-[#2F80ED] w-[109px] h-[56px] rounded-[12px]
                        drop-shadow-[0px_2px_6px_rgba(127,177,243,0.4)] hover:bg-[#0039CB] focus:bg-[#0039CB] 
                        hover:drop-shadow-[0px_2px_6px_rgba(41,98,255,0.2)] text-white focus:drop-shadow-[0px_2px_6px_rgba(41,98,255,0.2)]">
                                Add
                            </button>
                        </div>
                        <ul className="flex flex-col space-y-4">
                            {listTask.filter((task, index) => !task.isComplete).map((task, index) => (
                                <li className="flex items-center space-x-3" key={index}>
                                    <input className=" w-6 h-6 border-[#828282] font-montserrat text-[18px] font-[500]" type="checkbox" onClick={() => handleCheckTask(task.key)}
                                        checked={task.isComplete} />
                                    <text className={`${task.isComplete ? "line-through" : ""} font-montserrat text-[18px] font-[500]`}>{task.task}</text>
                                </li>
                            ))}

                        </ul>
                    </TabPanel>
                    <TabPanel className="flex flex-col">
                        <ul className="flex flex-col space-y-4">
                            {listTask.filter((task, index) => task.isComplete).map((task, index) => (
                                <li className="flex items-center justify-between" key={index}>
                                    <div className="flex items-center space-x-4">
                                        <input className=" w-6 h-6 border-[#828282] font-montserrat text-[18px] font-[500]" type="checkbox" onClick={() => handleCheckTask(task.key)}
                                            checked={task.isComplete} />
                                        <text className={`${task.isComplete ? "line-through" : ""} font-montserrat text-[18px] font-[500]`}>{task.task}</text>
                                    </div>
                                    <DeleteOutline onClick={() => handleDelete(task.key)} className=" w-[14px] h-[18px] text-[#BDBDBD]" />
                                </li>
                            ))}

                        </ul>
                        <button onClick={() => handleDelete("all")} className="self-end flex justify-center items-center mt-6 space-x-2  bg-[#EB5757] w-[124px] h-[40px] rounded-[4px]
                        ">
                            <DeleteOutline sx={{ fontSize: 12 }} className=" text-white" />
                            <text className="text-[#9E9E9E] text-[12px] text-white">delete all</text>
                        </button>
                    </TabPanel>

                </div>

            </Tabs >




        </div >

    );
}

export default ToDoList;