import React from "react";

export const SearchBar = React.memo(({ defaultValue = '', placeholder = '', inputText = '', setInputText = null, listdata = [], setResults = null, setSelect = null }) => {
    const handleChange = (value) => {
        if (value === '') {
            if (setSelect)
                setSelect(defaultValue)
            if (setResults)
                setResults([])
        }

        else {
            const newResult = listdata.filter((data) => data.includes(value.toLowerCase()))
            if (setResults)
                setResults(newResult)
        }
        setInputText(value)
    }
    return (
        <input value={inputText} className="pl-3 w-[90%] bg-transparent focus:outline-none" placeholder={placeholder}
            onChange={e => handleChange(e.target.value)}  >

        </input>
    );
})
