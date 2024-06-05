import React from "react";
import { AddShoppingCart } from '@mui/icons-material';
import MenuBars from "../components/MenuBars";
function Buttons() {
    return (
        <div className="flex flex-1 justify-center ">
            <MenuBars index={4}></MenuBars>
            <div className="flex flex-col justify-center w-[80%] mb-20 mt-16 ml-20 ">
                <div className="pb-16">
                    <h1 className="text-[#4F4F4F] text-[36px] font-medium">
                        Buttons
                    </h1>
                </div>
                <div className="flex flex-col space-y-10 w-[40%] font-[600] pb-10">
                    <div className="flex justify-between">
                        <div className="flex flex-col space-y-2  ">
                            <text className="font-light text-[12px] ">{"<Button />"}</text>
                            <button className="bg-[#E0E0E0] hover:bg-[#AEAEAE] focus:bg-[#AEAEAE] w-[81px] h-[36px] rounded-[6px] 
                            drop-shadow-[0px_2px_3px_rgba(51,51,51,0.2)] ">
                                <text className=" text-[#3F3F3F] text-[14px]  "> Default</text>
                            </button>
                        </div>
                        <div className="flex flex-col space-y-2 ">
                            <text className="font-light text-[12px] text-[#828282]">{"&:hover, &:focus"}</text>
                            <button className="bg-[#AEAEAE] w-[81px] h-[36px] rounded-[6px] drop-shadow-[0px_2px_3px_rgba(51,51,51,0.2)]">
                                <text className=" text-[#3F3F3F] text-[14px]"> Default</text>
                            </button>
                        </div>
                    </div>

                    <div className="flex justify-between ">
                        <div className="flex flex-col space-y-2 ">
                            <text className="font-light text-[12px]">{"<Button variant=”outline” />"}</text>
                            <button className="hover:bg-[#2962FF]/[0.1] focus:bg-[#2962FF]/[0.1] w-[81px] h-[36px] rounded-[6px] border border-1 border-[#3D5AFE]">
                                <text className=" text-[#3D5AFE] text-[14px]"> Default</text>
                            </button>
                        </div>
                        <div className="flex flex-col space-y-2 ">
                            <text className="font-light text-[12px] text-[#828282]">{"&:hover, &:focus"}</text>
                            <button className="bg-[#2962FF]/[0.1] w-[81px] h-[36px] rounded-[6px]  border border-1 border-[#3D5AFE] ">
                                <text className=" text-[#3D5AFE] text-[14px]"> Default</text>
                            </button>
                        </div>
                    </div>

                    <div className="flex justify-between ">
                        <div className="flex flex-col space-y-2 ">
                            <text className="font-light text-[12px]">{"<Button variant=”text” />"}</text>
                            <button className="hover:bg-[#2962FF]/[0.1] focus:bg-[#2962FF]/[0.1] w-[81px] h-[36px] rounded-[6px]">
                                <text className=" text-[#3D5AFE] text-[14px]"> Default</text>
                            </button>
                        </div>
                        <div className="flex flex-col space-y-2 ">
                            <text className="font-light text-[12px] text-[#828282]">{"&:hover, &:focus"}</text>
                            <button className="bg-[#2962FF]/[0.1] w-[81px] h-[36px] rounded-[6px] ">
                                <text className=" text-[#3D5AFE] text-[14px]"> Default</text>
                            </button>
                        </div>
                    </div>

                    <div className="flex flex-col space-y-2 ">
                        <text className="font-light text-[12px]">{"<Button disableShadow />"}</text>
                        <button className="bg-[#3D5AFE] w-[81px] h-[36px] rounded-[6px] " disabled={true}>
                            <text className=" text-white text-[14px]"> Default</text>
                        </button>
                    </div>
                </div>
                <div className="flex flex-col space-y-10 w-[45%] font-[600] pb-10">
                    <div className="flex justify-between ">
                        <div className="flex flex-col space-y-2 ">
                            <text className="font-light text-[12px]">{"<Button disabled />"}</text>
                            <button className="bg-[#E0E0E0] w-[81px] h-[36px] rounded-[6px]" disabled={true}>
                                <text className=" text-[#9E9E9E] text-[14px]"> Default</text>
                            </button>
                        </div>
                        <div className="flex flex-col space-y-2 items-center">
                            <text className="font-light text-[12px] text-[#828282]">{"<Button variant=”text” disabled />"}</text>
                            <button className=" w-[81px] h-[36px] rounded-[6px] " disabled={true}>
                                <text className=" text-[#9E9E9E] text-[14px]"> Default</text>
                            </button>
                        </div>
                    </div>

                    <div className="flex justify-between ">
                        <div className="flex flex-col space-y-2 ">
                            <text className="font-light text-[12px]">{"<Button startIcon=”local_grocery_store” />"}</text>
                            <button className="flex justify-center space-x-2 items-center bg-[#2962FF] w-[105px] h-[36px] rounded-[6px]
                        drop-shadow-[0px_2px_3px_rgba(0,49,202,0.4)]">
                                <div className="text-white ">
                                    <AddShoppingCart sx={{ fontSize: 18 }} />

                                </div>
                                <text className="text-[#9E9E9E] text-white"> Default</text>
                            </button>
                        </div>
                        <div className="flex flex-col space-y-2 items-center">
                            <text className="font-light text-[12px] text-[#828282]">{"<Button endIcon=”local_grocery_store” />"}</text>
                            <button className="flex justify-center space-x-2 items-center bg-[#2962FF] w-[105px] h-[36px] rounded-[6px]
                        drop-shadow-[0px_2px_3px_rgba(0,49,202,0.4)]">
                                <text className="text-[#9E9E9E] text-white"> Default</text>
                                <div className="text-white ">
                                    <AddShoppingCart sx={{ fontSize: 18 }} />
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col space-y-10 w-[70%] font-[600] ">
                    <div className="flex justify-between ">
                        <div className="flex flex-col space-y-2 ">
                            <text className="font-light text-[12px]">{"<Button size=”sm” />"}</text>
                            <button className="flex justify-center space-x-2 items-center bg-[#2962FF] w-[73px] h-[32px] rounded-[6px]
                        drop-shadow-[0px_2px_3px_rgba(0,49,202,0.4)]">

                                <text className="text-[#9E9E9E] text-white"> Default</text>
                            </button>
                        </div>
                        <div className="flex flex-col space-y-2 items-center">
                            <text className="font-light text-[12px] text-[#828282]">{"<Button size=”md” />"}</text>
                            <button className="flex justify-center space-x-2 items-center bg-[#2962FF] w-[81px] h-[36px] rounded-[6px]
                        drop-shadow-[0px_2px_3px_rgba(0,49,202,0.4)]">
                                <text className="text-[#9E9E9E] text-white"> Default</text>

                            </button>
                        </div>
                        <div className="flex flex-col space-y-2 items-center">
                            <text className="font-light text-[12px] text-[#828282]">{"<Button size=”lg” />"}</text>
                            <button className="flex justify-center space-x-2 items-center bg-[#2962FF] w-[93px] h-[42px] rounded-[6px]
                        drop-shadow-[0px_2px_3px_rgba(0,49,202,0.4)]">
                                <text className="text-[#9E9E9E] text-white"> Default</text>
                            </button>
                        </div>
                    </div>

                    <div className="flex justify-between ">
                        <div className="flex flex-col space-y-10">
                            <div className="flex flex-col space-y-2 ">
                                <text className="font-light text-[12px]">{"<Button color=”default” />"}</text>
                                <button className="flex justify-center space-x-2 items-center bg-[#E0E0E0] w-[81px] h-[36px] rounded-[6px]
                        drop-shadow-[0px_2px_3px_rgba(0,49,202,0.2)] hover:bg-[#AEAEAE] focus:bg-[#AEAEAE]
                        hover:drop-shadow-[0px_2px_3px_rgba(51,51,51,0.2)] focus:drop-shadow-[0px_2px_3px_rgba(51,51,51,0.2)]">

                                    <text className="text-[#3F3F3F] "> Default</text>
                                </button>
                            </div>
                            <div className="flex flex-col space-y-2 ">
                                <text className="font-light text-[12px] text-[#828282]">{"&:hover, &:focus"}</text>
                                <button className="flex justify-center space-x-2 items-center bg-[#AEAEAE] w-[81px] h-[36px] rounded-[6px]
                        drop-shadow-[0px_2px_3px_rgba(51,51,51,0.2)]">

                                    <text className="text-[#3F3F3F] "> Default</text>
                                </button>
                            </div>
                        </div>

                        <div className="flex flex-col justify-between">
                            <div className="flex flex-col space-y-2 ">
                                <text className="font-light text-[12px] text-[#828282]">{"<Button color=”primary” />"}</text>
                                <button className="flex justify-center space-x-2 items-center bg-[#2962FF] w-[81px] h-[36px] rounded-[6px]
                        drop-shadow-[0px_2px_3px_rgba(0,49,202,0.4)] hover:bg-[#0039CB] focus:bg-[#0039CB] 
                        hover:drop-shadow-[0px_2px_3px_rgba(41,98,255,0.2)] focus:drop-shadow-[0px_2px_3px_rgba(41,98,255,0.2)]">
                                    <text className="text-white "> Primary</text>
                                </button>
                            </div>
                            <div className="flex flex-col space-y-2 ">
                                <div className="flex flex-col space-y-2 ">
                                    <button className="flex justify-center space-x-2 items-center bg-[#0039CB] w-[81px] h-[36px] rounded-[6px]
                        drop-shadow-[0px_2px_3px_rgba(41,98,255,0.2)]">
                                        <text className="text-white "> Primary</text>

                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col justify-between">
                            <div className="flex flex-col space-y-2 ">
                                <text className="font-light text-[12px] text-[#828282]">{"<Button color=”secondary” />"}</text>
                                <button className="flex justify-center space-x-2 items-center bg-[#455A64] w-[104px] h-[36px] rounded-[6px]
                        drop-shadow-[0px_2px_3px_rgba(69,90,100,0.4)] hover:bg-[#1C313A] focus:bg-[#1C313A] 
                        hover:drop-shadow-[0px_2px_3px_rgba(69,90,100,0.2)] focus:drop-shadow-[0px_2px_3px_rgba(69,90,100,0.2)]">
                                    <text className="text-white "> Secondary</text>
                                </button>
                            </div>
                            <div className="flex flex-col space-y-2 ">
                                <button className="flex justify-center space-x-2 items-center bg-[#1C313A] w-[104px] h-[36px] rounded-[6px]
                        drop-shadow-[0px_2px_3px_rgba(69,90,100,0.2)]">
                                    <text className="text-white "> Secondary</text>
                                </button>
                            </div>
                        </div>

                        <div className="flex flex-col justify-between">
                            <div className="flex flex-col space-y-2 ">
                                <text className="font-light text-[12px] text-[#828282]">{"<Button color=”danger” />"}</text>
                                <button className="flex justify-center space-x-2 items-center bg-[#D32F2F] w-[104px] h-[36px] rounded-[6px]
                        drop-shadow-[0px_2px_3px_rgba(211,47,47,0.4)] hover:bg-[#9A0007] focus:bg-[#9A0007] 
                        hover:drop-shadow-[0px_2px_3px_rgba(211,47,47,0.2)] focus:drop-shadow-[0px_2px_3px_rgba(211,47,47,0.2)]">
                                    <text className="text-white "> Danger</text>
                                </button>
                            </div>
                            <div className="flex flex-col space-y-2 ">
                                <button className="flex justify-center space-x-2 items-center bg-[#9A0007] w-[104px] h-[36px] rounded-[6px]
                        drop-shadow-[0px_2px_3px_rgba(211,47,47,0.2)]">
                                    <text className="text-white "> Danger</text>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Buttons;