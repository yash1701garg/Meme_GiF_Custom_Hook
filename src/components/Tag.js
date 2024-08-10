import axios from 'axios';
import React, { useState } from 'react'
import Spin from './Spin';
import useGif from '../Hooks/useGif';

const API_KEY = process.env.REACT_APP_GIPHY_API_KEY
const Tag = () => {
    const [tag,setTag] = useState("car");
  
    const {gif,loading,fetchData} = useGif(tag);
    function clickHandler(){
        fetchData(tag);
    }
    function changeHandler(event){
      setTag(event.target.value)
    }
  return (
    <div className='w-1/2 bg-blue-500 mx-auto rounded-lg border-black
    flex flex-col items-center gap-y-5 mt-[15px] '>
        <h1 className='mt-[15px] text-2xl underline uppercase font-bold'> Random {tag} GIF</h1>
        {
            loading ? (<Spin/>) : (<img src={gif} width="450" />)
        }

        <input 
        className='w-10/12 text-lg py-2 rounded-lg mb-[3px] text-center'
        value={tag}
        onChange={changeHandler}
        />
        <button className='mb-[20px] w-10/12 bg-yellow-400 text-lg py-2 rounded-lg '
        onClick={clickHandler}>Generate</button>
    </div>
  )
}

export default Tag