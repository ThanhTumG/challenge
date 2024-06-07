import React from "react";
import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Autorenew, ArrowBack, ArrowRightAlt } from "@mui/icons-material";
import Quote from "../components/quote";
const QuoteGenerator = () => {
    const [isMode2, setIsMode2] = useState(false)
    const [quote, setQuote] = useState([])
    const [author, setAuthor] = useState("")
    const [tag, setTag] = useState("")
    const navigate = useNavigate();
    async function getQuote() {
        const response = await fetch("https://api.quotable.io/quotes/random");
        const data = await response.json();
        setIsMode2(false)
        console.log(data[0])

        setQuote([data[0].content])
        setAuthor(data[0].author)
        setTag(data[0].tags.join(', '))
    }
    useEffect(() => {
        getQuote()
    }, [])

    async function getQuotesByAuthor() {
        const response = await fetch(`https://api.quotable.io/quotes?author=${author.replace(" ", "%20")}`);
        const data = await response.json();
        setQuote(data.results.map((quote) => quote.content))
        setIsMode2(true)
    }


    const handleGetAllQuote = () => {
        getQuotesByAuthor()
        return
    }
    return (

        <div className="flex flex-1 flex-col justify-center items-center min-h-screen mb-20 space-y-16 font-raleway">
            <div className="flex">
                <button className="fixed space-x-[0.75px] top-6 left-4 flex items-center text-[#333333] h-6" onClick={() => navigate(-1)}>
                    <ArrowBack sx={{ fontSize: 20 }} />
                    <text className="text-center">go back</text>
                </button>
                <button onClick={getQuote} className="flex fixed items-center space-x-1 top-6  right-12 ">
                    <text className=" text-[#4F4F4F] text-[18px] ">random</text>
                    <Autorenew className="text-[#4F4F4F]" />
                </button>

            </div>

            {isMode2 ?
                <div className="flex flex-col space-y-24">
                    <text className="place-self-start text-[24px] font-[700] text-center text-[#4F4F4F] group-hover:text-[#F2F2F2]">{author}</text>
                    <div className="flex flex-col space-y-16">
                        {quote.map((quote) => <Quote content={quote} />)}

                    </div>
                </div>
                :
                <div className="flex flex-col space-y-[100px]">
                    <Quote content={quote}></Quote>

                    <button onClick={handleGetAllQuote} className="group flex items-center justify-between transition duration-200 hover:bg-[#333333] px-[30px] w-[624px] h-[151px]">
                        <div className="flex flex-col ">
                            <text className="place-self-start text-[24px] font-[700] text-center text-[#4F4F4F] group-hover:text-[#F2F2F2]">{author}</text>
                            <text className="place-self-start text-[14px] font-[500] text-center text-[#828282] ">{`${tag}`}</text>
                        </div>
                        <ArrowRightAlt className="text-white group-hover:text-[#F2F2F2] transition delay-150  duration-1000 hover:-translate-x-[-10px]" sx={{ fontSize: 40 }} />
                    </button>
                </div>

            }

        </div>
    );
}

export default QuoteGenerator;