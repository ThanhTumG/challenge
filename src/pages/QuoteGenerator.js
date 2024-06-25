import React from "react";
import { useEffect, useState } from 'react';
import { Autorenew, ArrowRightAlt } from "@mui/icons-material";
import Quote from "../components/quote";
import { getRandomQuote, getQuotesByAuthor } from "../api/QuoteAPI";
const QuoteGenerator = () => {
    const [isMode2, setIsMode2] = useState(false)
    const [quote, setQuote] = useState([])
    const [author, setAuthor] = useState("")
    const [tag, setTag] = useState("")
    async function getQuote() {
        try {
            const randomQuote = await getRandomQuote()
            setIsMode2(false)
            setQuote([randomQuote.content])
            setAuthor(randomQuote.author)
            setTag(randomQuote.tags.join(', '))
        } catch (error) {
            console.log(error)
        }

    }
    useEffect(() => {
        getQuote()
    }, [])

    const handleGetAllQuote = async () => {
        const listQuote = await getQuotesByAuthor(author)
        setQuote(listQuote.results.map((quote) => quote.content))
        setIsMode2(true)
        return
    }
    return (
        <div className="flex flex-1 flex-col justify-center items-center min-h-screen mb-20 space-y-16 font-raleway">
            <div className="flex">
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