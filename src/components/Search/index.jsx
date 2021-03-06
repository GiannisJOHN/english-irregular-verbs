import searchImg from '../../images/search.svg'
import { words } from '../../words/words.js'
import { useState, useContext } from 'react'
import { MyContext } from '../../App'
import { wordsDictionary } from '../../words/wordsDictionary.js'
import './index.css'


function SearchInput () {
    const [userInput, setUserInput] = useState('')
    const [cleanInput, setCleanInput] = useState(false)
    let setSearchResult = useContext(MyContext)[2]

    function handleResult() {
        /*
        let searchResult = words.filter((each) => {
            setCleanInput(true)
            if (userInput === each.Infinitive) {
                return each
            }
        })
        */
        let searchResult = []
        setCleanInput(true)
        for (const [key, value] of Object.entries(wordsDictionary)) {
            if (userInput === key) {
                searchResult = [value]
            }
        }

        setSearchResult(searchResult)
    }
    
    return (
        <div className='search' >

            <input  value={cleanInput === true ? '' : userInput} onInput={(e) => {
                setCleanInput(false)
                setUserInput(e.target.value)
            
            }} onKeyDown={(e) => {
                if (e.code === 'Enter') {
                    handleResult()
                }
            }} type="text" placeholder="enter infinitive form"/>

            <button onClick={ handleResult }>
                <img src={searchImg} alt="" />
            </button>
        </div>
    )
}

export default SearchInput