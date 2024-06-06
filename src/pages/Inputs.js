import React from "react";
import { Phone, Lock } from '@mui/icons-material';
import MenuBars from "../components/MenuBars";
import { useRef, useState } from "react";


function Inputs() {
    const inputElement1 = useRef();
    const inputElement2 = useRef();
    const focusInput = (index) => {
        if (index === 1) {
            console.log(inputElement1)
            inputElement1.current.focus();
        } else if (index === 2) {
            inputElement2.current.focus();
        }

    };

    return (
        <div className="flex flex-1 justify-center h-full">
            <MenuBars index={2}></MenuBars>
            <div className="flex flex-col justify-center w-[80%] mb-20 mt-16 ml-20 ">
                <div className="pb-16">
                    <h1 className="text-[#4F4F4F] text-[36px] font-medium">
                        Inputs
                    </h1>
                </div>
                {/*  */}
                <div className="flex flex-col space-y-10 w-[60%] font-[600] pb-10">
                    <div className="flex justify-between">
                        <div className="flex flex-col space-y-3  ">
                            <text className="font-light text-[12px] ">{"<Input />"}</text>
                            <div tabIndex={-1} className=" flex flex-col text-[#333333] space-y-1 focus-within:text-[#2962FF]">
                                <label onClick={() => focusInput(1)} className="font-light text-[12px] ">Label</label>
                                <input ref={inputElement1} placeholder="Placeholder" className="px-3 font-medium text-[14px] appearance-none focus:outline-none border border-1 border-[#828282] 
                                hover:border-[#333333] focus:border-[#2962FF] w-[200px] h-[56px] rounded-[8px]"></input>
                            </div>

                        </div>
                        <div className="flex flex-col space-y-3 ">
                            <text className="font-light text-[12px] text-[#828282]">{"&:hover"}</text>
                            <div className=" flex flex-col text-[#333333] space-y-1">
                                <label className="font-light text-[12px] ">Label</label>
                                <input placeholder="Placeholder" className="px-3 font-medium text-[14px] appearance-none border border-1 border-[#333333] 
                                focus:outline-none w-[200px] h-[56px] rounded-[8px]"></input>
                            </div>
                        </div>

                        <div className="flex flex-col space-y-3 ">
                            <text className="font-light text-[12px] text-[#828282]">{"&:focus"}</text>
                            <div className=" flex flex-col text-[#2962FF] space-y-1">
                                <label className="font-light text-[12px] ">Label</label>
                                <input placeholder="Placeholder" className="px-3 font-medium text-[14px] appearance-none border border-1 border-[#2962FF] 
                                focus:outline-none w-[200px] h-[56px] rounded-[8px]"></input>
                            </div>
                        </div>
                    </div>
                    {/*  */}
                    <div className="flex justify-between">
                        <div className="flex flex-col space-y-3  ">
                            <text className="font-light text-[12px] ">{"<Input error/>"}</text>
                            <div tabIndex={-1} className="group flex flex-col text-[#D32F2F]  space-y-1 ">
                                <label onClick={() => focusInput(2)} className="font-light text-[12px] group-hover:text-[#333333]">Label</label>
                                <input ref={inputElement2} placeholder="Placeholder" className="px-3 font-medium text-[14px] appearance-none focus:outline-none border border-1  
                               border-[#D32F2F] group-hover:border-[#333333] focus:border-[#D32F2F]   w-[200px] h-[56px] rounded-[8px]"></input>
                            </div>

                        </div>
                        <div className="flex flex-col space-y-3 ">
                            <text className="font-light text-[12px] text-[#828282]">{"&:hover"}</text>
                            <div className=" flex flex-col text-[#333333] space-y-1">
                                <label className="font-light text-[12px] ">Label</label>
                                <input placeholder="Placeholder" className="px-3 font-medium text-[14px] appearance-none border border-1 border-[#333333] 
                                focus:outline-none w-[200px] h-[56px] rounded-[8px]"></input>
                            </div>
                        </div>

                        <div className="flex flex-col space-y-3 ">
                            <text className="font-light text-[12px] text-[#828282]">{"&:focus"}</text>
                            <div className=" flex flex-col text-[#D32F2F] space-y-1">
                                <label className="font-light text-[12px] ">Label</label>
                                <input placeholder="Placeholder" className="px-3 font-medium text-[14px] appearance-none border border-1 border-[#D32F2F] 
                                focus:outline-none w-[200px] h-[56px] rounded-[8px]"></input>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col space-y-3 ">
                        <text className="font-light text-[12px] text-[#828282]">{"<Input disabled />"}</text>
                        <div className=" flex flex-col text-[#333333] space-y-1">
                            <label className="font-light text-[12px] ">Label</label>
                            <input disabled={true} placeholder="Placeholder" className="px-3 bg-[#F2F2F2] font-medium text-[14px] appearance-none border border-1 border-[#E0E0E0] 
                                 w-[200px] h-[56px] rounded-[8px]"></input>
                        </div>
                    </div>


                </div>
                <div className="flex flex-col space-y-10 w-[70%] font-[600] pb-10">

                    {/*  */}
                    <div className="flex space-x-10">
                        <div className="flex flex-col space-y-3  ">
                            <text className="font-light text-[12px] ">{"<Input helperText=”Some interesting text” />"}</text>
                            <div tabIndex={-1} className=" flex flex-col text-[#333333] space-y-1 ">
                                <label className="font-light text-[12px] ">Label</label>
                                <input placeholder="Placeholder" className="px-3 font-medium text-[14px] appearance-none focus:outline-none border border-1 border-[#828282] 
                                w-[200px] h-[56px] rounded-[8px]" ></input>
                                <span className="text-[#828282] text-[10px] font-thin">Some interesting text</span>
                            </div>

                        </div>

                        <div className="flex flex-col space-y-3 ">
                            <text className="font-light text-[12px] text-[#D32F2F]">{"<Input helperText=”Some interesting text” error />"}</text>
                            <div className=" flex flex-col text-[#D32F2F] space-y-1">
                                <label className="font-light text-[12px] ">Label</label>
                                <input placeholder="Placeholder" className="px-3 font-medium text-[14px] appearance-none border border-1 border-[#D32F2F] 
                                focus:outline-none w-[200px] h-[56px] rounded-[8px]"></input>
                                <span className="text-[#D32F2F] text-[10px] font-thin">Some interesting text</span>

                            </div>
                        </div>
                    </div>
                    {/*  */}
                    <div className="flex space-x-[75px]">
                        <div className="flex flex-col space-y-3  ">
                            <text className="font-light text-[12px] ">{"<Input startIcon />"}</text>
                            <div tabIndex={-1} className=" flex flex-col text-[#333333] ">
                                <label className="font-light text-[12px] ">Label
                                    <label className="flex items-center mt-1 px-3 font-medium text-[14px]  border border-1 border-[#828282] 
                                    focus:outline-none w-[200px] h-[56px] rounded-[8px]">
                                        <div className="text-[#828282]">
                                            <Phone />
                                        </div>
                                        <input className="pl-3 w-[90%] focus:outline-none" placeholder="Placeholder" ></input>

                                    </label>
                                </label>
                            </div>
                        </div>

                        <div className="flex flex-col space-y-3 ">
                            <text className="font-light text-[12px] text-[#333333]">{"<Input endIcon />"}</text>
                            <div className=" flex flex-col text-[#333333] space-y-1">
                                <label className="font-light text-[12px] ">Label
                                    <label className="flex items-center mt-1 px-3 font-medium text-[14px]  border border-1 border-[#828282] 
                                    focus:outline-none w-[200px] h-[56px] rounded-[8px]">

                                        <input className="pr-2 w-[90%] focus:outline-none" placeholder="Placeholder" ></input>
                                        <div className="text-[#828282]">
                                            <Lock />
                                        </div>
                                    </label>
                                </label>
                            </div>
                        </div>
                    </div>
                    {/*  */}
                    <div className="flex flex-col space-y-3 ">
                        <text className="font-light text-[12px] text-[#333333]">{"<Input value=”text” />"}</text>
                        <div className=" flex flex-col text-[#333333] space-y-1">
                            <label className="font-light text-[12px] ">Label
                                <input className="flex items-center mt-1 px-3 font-medium text-[14px]  border border-1 border-[#828282] 
                                    focus:outline-none w-[200px] h-[56px] rounded-[8px] focus:outline-none" value={"Text"} ></input>
                            </label>
                        </div>
                    </div>
                    {/*  */}
                    <div className="flex space-x-[75px]">
                        <div className="flex flex-col space-y-3  ">
                            <text className="font-light text-[12px] ">{"<Input size=”sm” />"}</text>
                            <div tabIndex={-1} className=" flex flex-col text-[#333333] ">
                                <label className="font-light text-[12px] ">Label
                                    <input className="flex items-center mt-1 px-3 font-medium text-[14px]  border border-1 border-[#828282] 
                                    focus:outline-none w-[200px] h-[40px] rounded-[8px] focus:outline-none" placeholder="Placeholder" ></input>
                                </label>
                            </div>
                        </div>
                        <div className="flex flex-col space-y-3 ">
                            <text className="font-light text-[12px] text-[#333333]">{"<Input size=”md” />"}</text>
                            <div className=" flex flex-col text-[#333333] space-y-1">
                                <label className="font-light text-[12px] ">Label
                                    <input className="flex items-center mt-1 px-3 font-medium text-[14px]  border border-1 border-[#828282] 
                                    focus:outline-none w-[200px] h-[56px] rounded-[8px] focus:outline-none" placeholder="Placeholder" ></input>
                                </label>
                            </div>
                        </div>
                    </div>
                    {/*  */}
                    <div className="flex flex-col space-y-3 ">
                        <text className="font-light text-[12px] text-[#333333]">{"<Input fullWidth />"}</text>
                        <div className=" flex flex-col text-[#333333] space-y-1">
                            <label className="font-light text-[12px] ">Label
                                <input className="flex items-center mt-1 px-3 font-medium text-[14px]  border border-1 border-[#828282] 
                                    focus:outline-none w-full h-[56px] rounded-[8px] focus:outline-none" placeholder="Placeholder" ></input>
                            </label>
                        </div>
                    </div>
                    {/*  */}
                    <div className="flex flex-col space-y-3 ">
                        <text className="font-light text-[12px] text-[#333333]">{"<Input multiline row=”4” />"}</text>
                        <div className=" flex flex-col text-[#333333] space-y-1">
                            <label className="font-light text-[12px] ">Label
                                <textarea className="flex items-center mt-1 px-3 font-medium text-[14px]  border border-1 border-[#828282] 
                                    focus:outline-none w-[200px] min-h-[150px] rounded-[8px] p-3
                                    focus:outline-none"  placeholder="Placeholder" ></textarea>
                            </label>
                        </div>
                    </div>
                    {/*  */}

                </div>
            </div>

        </div>
    );
}

export default Inputs;