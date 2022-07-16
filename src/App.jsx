import React, { useState } from 'react'
import Navbar from './components/Navbar'
import WordsTable from './components/WordsTable'
import { words } from './words/words.js'
import { wordsDictionary } from './words/wordsDictionary'
import { Categorize } from './javascript/wordsProcess.js'
import separateIntoArray from './javascript/separateIntoArray'
import paginate from './javascript/pagination.js'
import SelectCategory from './components/Categories/index.jsx'
import SearchInput from './components/Search/index.jsx'

import github from './images/github.svg'
import linkedin from './images/linkedin.svg'

export const MyContext = React.createContext()

function App () {

  const [pageNumber, setPageNumber] = useState(0)
  const [categoryName, setCategoryName] = useState('allDifferent')
  const [searchResult, setSearchResult] = useState('')

  //let category = new Categorize(words)
  let list = separateIntoArray(categoryName, wordsDictionary)
  let page = paginate(list)
  
  return (
      <>
      <Navbar />
      <MyContext.Provider value={[setCategoryName, setPageNumber, setSearchResult]} >
        <main>
          <div>
            <WordsTable words={searchResult === '' ? page[pageNumber] : searchResult} />
          </div>
          <div>
            <SearchInput />
            <SelectCategory />                                                   
          </div>
        </main>
      </MyContext.Provider>
      <div className="pagination">
        {
          page.map((element, index) => {
            return <button className={pageNumber === index ? 'activePaginationButton' : null} onClick={() => {
              setPageNumber(index)
            }}>{index + 1}</button>
          })
        }
      </div>
      <footer>
        <p>Designed & Developed by <span>Ioannis Mentesidis</span> &copy; 2022</p>
        <div>
          <a href="https://github.com/GiannisJOHN" target='_blank'>
            <img src={github} alt="" />
          </a>
          <a href="https://www.linkedin.com/in/ioannis-mentesidis/" target='_blank'>
            <img src={linkedin} alt="" />
          </a>
        </div>
      </footer>
      </>
  )

}

export default App