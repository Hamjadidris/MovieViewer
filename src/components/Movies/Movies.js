import React from 'react'
import { useState } from 'react'
import './movies.css'
import MovieBox from './MovieBox/MovieBox'

const Movies = () => {
    const [inputValue, setInputValue] = useState("");
    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            event.preventDefault()
            setInputValue(event.target.value)
        }
    };
  return (
    <div className='movies'>
        <section className='inputSection'>
            <form>
                <label>Search</label>
                <input onKeyDown={handleKeyDown} type='text' />
            </form>
        </section>
        <MovieBox inputValue = {inputValue} />
    </div>
  )
}

export default Movies