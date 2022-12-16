import React from 'react'
import { useRef } from 'react'
import './movies.css'
import MovieBox from './MovieBox/MovieBox'

const Movies = () => {
    const inputRef = useRef();
    //console.log(inputRef.current.target)
  return (
    <div className='movies'>
        <section className='inputSection'>
            <form>
                <label>Search</label>
                <input ref={inputRef} type='text' />
            </form>
        </section>
        <MovieBox />
    </div>
  )
}

export default Movies