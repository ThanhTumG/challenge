import React, { useContext } from "react"
import { AppContext } from "../../AppContext/CatWikiProvider"
import { ReactComponent as Logo } from "../../assets/images/chicka.svg"


export default function Header() {
    const { setMode } = useContext(AppContext)
    return (<>
        <button onClick={() => setMode("main")} className="flex space-x-2 place-self-start">
            <h1 className="font-mysteryquest text-[24px] font-[400] text-[#291507]">CatWiki</h1>
            <Logo className="w-[50px]" fill="#291507" />
        </button>
    </>)
}