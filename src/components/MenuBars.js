import React from "react";
import { useNavigate } from "react-router-dom";

const MenuBars = (props) => {
    const navigate = useNavigate();
    const handleMenu = (title) => {
        if (title === "buttons") {
            navigate("/buttons");
        } else if (title === "home") {
            navigate("/")
        } else if (title === "inputs") {
            navigate("/inputs")
        } else if (title === "todo") {
            navigate("/todo")
        } else if (title === "quote") {
            navigate("/quote")
        }
    }
    return (

        <div className="flex flex-col bg-[#FAFBFD] pt-20 pl-[4%] w-[20%] space-y-16 ">
            <div className="flex">
                <h3 className="font-bold text-orange-600">Dev</h3>
                <h3 onClick={() => handleMenu("home")} className="font-bold hover:cursor-pointer">challenges.io</h3>
            </div>

            <ul className="flex flex-col space-y-6 font-medium text-[14px] text-[#9E9E9E]">
                <li className={props.index === 1 ? "hover:cursor-pointer font-bold text-[#3F3F3F]" : "hover:cursor-pointer"}><text onClick={() => handleMenu("buttons")}>Buttons</text></li>
                <li className={props.index === 2 ? "hover:cursor-pointer font-bold text-[#3F3F3F]" : "hover:cursor-pointer"}><text onClick={() => handleMenu("inputs")}>Inputs</text></li>
                <li className={props.index === 3 ? "hover:cursor-pointer font-bold text-[#3F3F3F]" : "hover:cursor-pointer"}><text onClick={() => handleMenu("todo")}>ToDoList</text></li>
                <li className={props.index === 4 ? "hover:cursor-pointer font-bold text-[#3F3F3F]" : "hover:cursor-pointer"}><text onClick={() => handleMenu("quote")}>QuoteGenerator</text></li>

            </ul>

        </div>

    );
}

export default MenuBars;