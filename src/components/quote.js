import React from "react";
import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Autorenew, ArrowBack, ArrowRightAlt } from "@mui/icons-material";

export default function Quote(content) {

    const quoteRef = useRef()
    const [tabHeight, setTabHeight] = useState(0)
    useEffect(() => {
        setTabHeight(quoteRef.current.offsetHeight)
    })
    return (
        <p ref={quoteRef} className="relative w-[614px] text-[36px] text-black font-[500]">{`"${content.content}"`}
            <span
                className="absolute rounded-[4px] top-0 left-[-40px]   block  bg-[#F7DF94]   transition-all duration-300"
                style={{ height: tabHeight, width: 8 }}
            />
        </p>
    )
};